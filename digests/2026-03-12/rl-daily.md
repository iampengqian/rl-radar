# RL 开源生态日报 2026-03-12

> 生成时间: 2026-03-12 15:28 UTC | 覆盖项目: 15 个

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

⚠️ RL 横向对比分析生成失败。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL 日报：ROLL 生态动态 (2026-03-12)

## 1. 今日速览
过去 24 小时内，ROLL 仓库处理了 **3 条 Issues**，主要集中在 **VLM 数据处理逻辑**、**环境依赖冲突** 以及 **Megatron 后端 LoRA 兼容性** 方面。暂无新版本发布或代码合并。

## 2. 版本发布
*   **无更新**
    *   目前仓库主分支保持稳定，未见 Tag 更新或 Release 发布。

## 3. 重点 Issues

*   **[VLM] RLVR 训练中的数据编码与清洗逻辑探讨**
    *   **链接**: [alibaba/ROLL #365](https://github.com/alibaba/ROLL/issues/365)
    *   **详情**: 用户在使用 ROLL 进行 VLM RLVR 训练时，对比了 `roll/pipeline/rlvr/rlvr_vlm_pipeline.py` 与 `verl` 的实现差异，主要关注 **image filtering（图像过滤）** 和 **prompt formatting** 的具体策略。这是一个高质量的技术讨论，有助于厘清 ROLL 在多模态数据处理上的设计意图。

*   **[Deploy] Mac 环境下 Ray 依赖冲突导致安装失败**
    *   **链接**: [alibaba/ROLL #373](https://github.com/alibaba/ROLL/issues/373)
    *   **详情**: 用户在 macOS 上通过 `uv` 安装 `requirements_torch260_vllm.txt` 时遭遇依赖地狱。报错显示 `ray[default]==2.48.0` 强依赖的 `opentelemetry-sdk` 版本与当前环境解析冲突。这表明 ROLL 的部分依赖锁定可能在非 Linux 或特定环境下需要手动调整。

*   **[Backend] Megatron 后端适配 Qwen3.5 LoRA 的兼容性疑问**
    *   **链接**: [alibaba/ROLL #372](https://github.com/alibaba/ROLL/issues/372)
    *   **详情**: 社区用户询问在 Megatron 后端下对 Qwen3.5 模型启用 LoRA 的支持情况，并反馈遇到初始化错误。这反映了社区对 ROLL 支持最新主流大模型（Qwen3.5）高效微调的强烈需求。

## 4. 关键 PR 进展
*   **无更新**
    *   过去 24 小时无新增 PR 或已有 PR 更新。

## 5. 为什么值得持续关注
ROLL 正在填补大规模 RL 训练框架在工程化落地上的空白，特别是针对 **Qwen 系列模型** 及 **VLM（视觉语言模型）** 的深度适配。
1.  **VLM 原生支持**: Issue #365 显示 ROLL 正在建立区别于 verl 的独立 VLM 数据管线，对于需要做视觉模型 RLHF 的开发者具有极高的参考价值。
2.  **高性能后端集成**: 针对 Megatron + LoRA 的讨论（Issue #372）表明该项目正致力于解决大模型分布式训练中的显存与通信瓶颈，这是当前 LLM 训练的核心痛点。
3.  **快速迭代**: 社区针对最新模型（Qwen3.5）的反馈迅速涌现，说明该项目处于活跃的技术前沿阵地。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：阿里巴巴 ROCK 项目动态 (2026-03-12)

## 1. 今日速览
过去 24 小时内，ROCK 项目经历了高强度的代码合并与功能迭代。虽然未发布新的版本 Tag，但共有 **12 个 PR 更新**（其中大量已关闭）和 **6 个 Issue 更新**。核心贡献者 @zhongwen666 和 @FangwenDave 完成了多项关于 Sandbox（沙箱）管理、资源抢占及 SDK 增强的功能合入。值得注意的是，社区正致力于解决异构环境（Alpine/Nix）的兼容性问题。

## 2. 版本发布
*   **无新版本发布**。
*   *注：Issue #616 提到了关于 "revert version to 1.3.0" 的讨论，可能预示着近期对 v1.3.0 版本有维护或回退操作。*

## 3. 重点 Issues
今日主要关注**沙箱稳定性**与**SDK 维护性**的增强：

*   **[Feature] Sandbox CPU Preemption Support (#596)**
    *   **状态**: CLOSED
    *   **摘要**: 增强了沙箱环境对 CPU 资源的抢占支持，这对于 RL 训练中计算密集型任务的资源调度至关重要。
    *   **链接**: [alibaba/ROCK Issue #596](https://github.com/alibaba/ROCK/issues/596)

*   **[Feature] Add Container/File Cleanup Task (#600, #583)**
    *   **状态**: CLOSED
    *   **摘要**: 引入了容器和文件目录的自动清理任务，旨在解决长期运行 RL 实验产生的临时文件堆积问题，优化 I/O 性能。
    *   **链接**: [alibaba/ROCK Issue #600](https://github.com/alibaba/ROCK/issues/600), [alibaba/ROCK Issue #583](https://github.com/alibaba/ROCK/issues/583)

*   **[Feature] Support Various OS Type Images (#509)**
    *   **状态**: CLOSED
    *   **摘要**: 提议支持多种操作系统镜像类型，增加了环境构建的灵活性。
    *   **链接**: [alibaba/ROCK Issue #509](https://github.com/alibaba/ROCK/issues/509)

## 4. 关键 PR 进展
今日开发活动活跃，大量 Feature PR 被合并，同时有针对底层兼容性的重磅 PR 待处理。

*   **[OPEN] feat(rocklet): support Alpine/musl, Nix and glibc older version compatibility (#624)**
    *   **作者**: @zhangjaycee
    *   **摘要**: **核心基础设施更新**。该 PR 旨在解决 `rocklet` 在 Alpine (musl)、Nix 及旧版 glibc 环境下的兼容性问题。通过动态检测并兼容 glibc/bash 依赖，扩大了 ROCK 在极简或非标准 Linux 发行版中的适用范围。
    *   **链接**: [alibaba/ROCK PR #624](https://github.com/alibaba/ROCK/pull/624)

*   **[CLOSED] feat: add field image_os to SandboxStartRequest (#623)**
    *   **作者**: @FangwenDave
    *   **摘要**: 配合 Issue #509，在启动请求中增加了 `image_os` 字段，允许 SDK 显式指定镜像操作系统类型。
    *   **链接**: [alibaba/ROCK PR #623](https://github.com/alibaba/ROCK/pull/623)

*   **[CLOSED] Support CPU preemption & Cleanup tasks (#619, #617, #621)**
    *   **作者**: @zhongwen666
    *   **摘要**: 合并了 CPU 抢占支持及清理任务的代码，进一步完善了沙箱的生命周期管理。
    *   **链接**: [alibaba/ROCK PR #619](https://github.com/alibaba/ROCK/pull/619), [alibaba/ROCK PR #617](https://github.com/alibaba/ROCK/pull/617)

*   **[OPEN] feat(sdk): add ImageBuilder for env_dir Docker build (#615)**
    *   **作者**: @zhangjaycee
    *   **摘要**: 引入 `ImageBuilder` 组件，支持在构建沙箱中直接通过 `env_dir` 构建 Docker 镜像，简化了环境打包流程。
    *   **链接**: [alibaba/ROCK PR #615](https://github.com/alibaba/ROCK/pull/615)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK (RObot Cockpit) 正在从一个单纯的 RL 训练框架向**通用的容器化计算基础设施**演进。

1.  **异构环境兼容性突破**：PR #624 对 Alpine/musl 和 Nix 的支持表明，ROCK 正在降低 RL 环境部署对特定 OS 的依赖，这对于在边缘设备或精简容器环境中部署 RL 策略具有重要意义。
2.  **细粒度资源治理**：通过引入 CPU 抢占和自动清理任务，ROCK 解决了大规模并发训练时资源争抢和废料回收的痛点，提升了生产环境下的稳定性。
3.  **面向生产的 SDK 设计**：从 `SandboxStartRequest` 的字段变更到 `ImageBuilder` 的引入，可以看出该项目正致力于提供更标准化的 API，使 RL 环境的构建与分发更加工程化。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报 | 2026-03-12

## 1. 今日速览
Slime 项目今日正式发布 **v0.2.3** 版本，重点增强了 SGLang 配置灵活性与后端兼容性。社区活跃度较高，过去 24 小时内共有 8 条 Issue 更新和 4 条 PR 更新。议题焦点集中在 **Megatron 后端的大模型（Qwen3.5/GLM）训练稳定性**、**PP/CP 并行策略**以及**跨节点数据传输优化**。

## 2. 版本发布
*   **v0.2.3 正式发布**
    *   **核心更新**：引入基于 YAML 的 `sglang_config` 支持，简化了 engine group 的配置流程，使得 Rollout 设置更加直观；此外包含大量 Bug 修复与稳定性提升。
    *   **链接**：[THUDM/slime Releases v0.2.3](https://github.com/THUDM/slime/releases/tag/v0.2.3)

## 3. 重点 Issues
**核心痛点：Megatron 后端稳定性与兼容性**
*   **[训练挂起] Megatron + SGLang 图捕获后死锁** (#1484)
    *   **详情**：使用 Megatron 后端训练时，作业在 SGLang 完成 CUDA Graph 捕获并启动 Uvicorn 服务后频繁挂起，无后续日志输出。
    *   **链接**：[THUDM/slime Issue #1484](https://github.com/THUDM/slime/issues/1484)
*   **[安装错误] Qwen3.5 Megatron Bridge 缺失模块** (#1711)
    *   **详情**：用户反馈安装 Megatron-Bridge 时出现 `ModuleNotFoundError`，缺失 `peft_bridge.py` 文件。
    *   **链接**：[THUDM/slime Issue #1711](https://github.com/THUDM/slime/issues/1711)
*   **[运行错误] Qwen3.5 PP 并行运行失败** (#1713)
    *   **详情**：在使用 Pipeline Parallelism (PP) 运行 Qwen3.5 时，`train_actor` 阶段报错。
    *   **链接**：[THUDM/slime Issue #1713](https://github.com/THUDM/slime/issues/1713)

**网络与配置问题**
*   **[网络代理] RolloutManager httpx.ReadError** (#1663)
    *   **详情**：在 `glm-4.5-air` 训练中，RolloutManager 代理转发请求时间歇性崩溃。此问题可能与今日 PR #1714 修复的代理配置有关。
    *   **链接**：[THUDM/slime Issue #1663](https://github.com/THUDM/slime/issues/1663)
*   **[已关闭] SGLang 多卡推理乱码** (#1671)
    *   **详情**：Qwen3.5-27B 在 `gen_tp > 1` 时输出乱码，确认与 SGLang 版本有关，现已关闭（可能已修复或定位）。
    *   **链接**：[THUDM/slime Issue #1671](https://github.com/THUDM/slime/issues/1671)

## 4. 关键 PR 进展
*   **[Feat] 增加 GLM-4.6V MoE VL Bridge (CP 支持)** (#1715) - *[CLOSED]*
    *   **内容**：为 GLM-4.6V (46层, 128专家) 添加了 Megatron Bridge，支持视觉语言训练及 Context Parallelism (CP)。
    *   **链接**：[THUDM/slime PR #1715](https://github.com/THUDM/slime/pull/1715)
*   **[Feat] 引入 Mooncake 后端用于 Rollout 数据传输** (#1709) - *[OPEN]*
    *   **内容**：在分离式多节点架构中，引入 **Mooncake** (基于 RDMA) 替代 Ray Object Store，显著提升跨节点 Rollout 数据传输性能。
    *   **链接**：[THUDM/slime PR #1709](https://github.com/THUDM/slime/pull/1709)
*   **[Fix] 修复 HTTP 客户端系统代理冲突** (#1714) - *[OPEN]*
    *   **内容**：禁用内部 SGLang httpx 客户端对系统环境变量 (`http_proxy`) 的读取，防止在集群内部通信时错误地经过外部代理。
    *   **链接**：[THUDM/slime PR #1714](https://github.com/THUDM/slime/pull/1714)

## 5. 为什么继续关注 Slime？
1.  **大模型 RLHF 的高效解法**：Slime 正在快速迭代对 **Megatron** 和 **SGLang** 的深度集成，解决了 LLM 训练中显存与通信的瓶颈，特别是 v0.2.3 对 YAML 配置的支持降低了复杂分布式任务的门槛。
2.  **前沿架构探索**：从 PR #1709 可以看出，项目正在探索 **RDMA/Mooncake** 等高性能网络技术在 RL 数据流中的应用，这对于超大规模模型（如 GLM-4.6V MoE）的 Rollout 阶段至关重要，代表了高性能 RL 基础设施的未来方向。
3.  **多模态支持**：随着 GLM-4.6V 等 VL 模型 Bridge 的合入，Slime 已不仅限于文本 RL，正在成为多模态对齐训练的有力工具。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-12)

## 1. 今日速览
AReaL 今日活跃度较高，核心聚焦于 **系统架构重构**、**新模型适配** 及 **多模态/Agent 工作流扩展**。共处理 16 个 PR（主要涉及 Archon 引擎、Ascend NPU 适配及依赖升级）和 5 个 Issues。社区对 Qwen3.5 及其他模型族的支持需求强烈，核心团队正通过重构底层抽象（如 RTensor）和引入新特性（如动态扩缩容）来响应。

## 2. 版本发布
*   **无正式版本发布**。
*   *注：虽然无主分支 Release，但有针对 Ascend NPU 的 v1.0.1 容器镜像更新 (PR #1022)。*

## 3. 重点 Issues
*   **[Roadmap] 2026 Q1 Milestones** [#907](https://github.com/inclusionAI/AReaL/issues/907)
    *   **摘要**：定义了直至 2026 年 4 月的开发路线图，明确了正在进行的特性开发与社区贡献方向，是了解项目后续走势的关键文档。
*   **[Feature] Dynamic Scaling across Inference vllm Workers** [#1026](https://github.com/inclusionAI/AReaL/issues/1026)
    *   **摘要**：提议在训练过程中支持推理 Worker 的**动态扩缩容**，旨在通过自动调整推理资源来优化训练效率，属于系统级的性能增强特性。
*   **[Question] Supporting RL training of other model families** [#945](https://github.com/inclusionAI/AReaL/issues/945)
    *   **摘要**：社区询问对 GPT-OSS、Kimi K2、GLM4.5 等模型族的 RL 训练支持计划，反映了用户对多模型后端的强烈需求。

## 4. 关键 PR 进展
*   **[Architecture] refactor(infra): simplify RTensor** [#1017](https://github.com/inclusionAI/AReaL/pull/1017)
    *   **进展**：将 `RTensor` 从多分片源跟踪抽象简化为轻量级单分片引用，并将数据并行逻辑抽取至 `datapack.py`。此举旨在消除循环依赖，提升模块化程度。
*   **[Model Support] feat(archon): add Qwen3.5 support** [#1012](https://github.com/inclusionAI/AReaL/pull/1012) **(CLOSED/Merged)**
    *   **进展**：**已合并**。为 Archon 引擎添加了 Qwen3.5 Dense 和 MoE 模型支持（基于混合 Transformer 架构），目前支持 FSDP (DP) 模式。
*   **[Feature] feat(archon): implement LoRA infrastructure** [#1015](https://github.com/inclusionAI/AReaL/pull/1015)
    *   **进展**：实现了兼容 FSDP2/DTensor 和 PEFT 检查点的 LoRA 基础设施，解决了 FSDP 与 TP 之间的死锁问题，显著增强了微调能力。
*   **[Bug Fix] fix: LoRA and XCCL versioning bug** [#1021](https://github.com/inclusionAI/AReaL/pull/1021)
    *   **进展**：修复了 `update_weights_lora_xccl` 更新权重后未同步 `OpenAIServingModels` 中 LoRA 名称的 Bug，确保了新版 LoRA 权重的可路由性。
*   **[Workflow] feat: add MiniMax model provider support** [#1023](https://github.com/inclusionAI/AReaL/pull/1023)
    *   **进展**：集成了 MiniMax 作为新的 LLM 提供商，扩展了 Agent 工作流训练的基础设施支持。
*   **[MultiModal] Jwt/multimodal validation** [#1027](https://github.com/inclusionAI/AReaL/pull/1027)
    *   **进展**：修复了阻碍 VLM (FSDP + SGLang 后端) GRPO 训练的 7 个关键 Bug，涉及 PIL 图像序列化及数据传输。

## 5. 为什么值得 RL 生态持续关注
AReaL 正在从一个单纯的训练框架向**异构计算与复杂工作流平台**演进：
1.  **架构先进性**：通过重构 RTensor 和引入 FSDP2/DTensor 兼容的 LoRA，项目正在解决大规模分布式训练中的底层痛点（如死锁、依赖混乱）。
2.  **多模型与多模态支持**：迅速跟进 **Qwen3.5 MoE** 及 **VLM GRPO** 训练，表明其对 SOTA 模型架构的快速响应能力。
3.  **生产级特性**：推理 Worker 的动态扩缩容 (Issue #1026) 和对 Ascend NPU 的深度优化，显示了其在资源效率与硬件泛化性上的工程化落地潜力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Transformers Reinforcement Learning) RL 日报摘要
**日期**: 2026-03-12

## 1. 今日速览
今日 TRL 仓库活动主要集中在**多模态模型（VLM）训练兼容性**和**底层训练器架构重构**。虽然无新版本发布，但针对 Qwen2.5-VL 等 3D-RoPE 模型的 DPO 训练修复成为焦点。社区正在积极推进 DGPO、SDPO 等前沿算法的集成，并对 GRPO/RLOO 的代码结构进行了大量简化与解耦。

- **Issues 更新**: 1 条（关键 Bug）
- **PR 更新**: 15 条（5 个新 PR，2 个已关闭）

---

## 2. 版本发布
- **无新版本发布**。

---

## 3. 重点 Issues
今日唯一的 Issue 集中在多模态训练的数据处理核心逻辑上，影响范围较大。

- **[[OPEN] DPOTrainer 忽略 Qwen2.5-VL 等 3D-RoPE 模型的 mm_token_type_ids #5277](https://github.com/huggingface/trl/issues/5277)**
  - **详情**: 作者 `@albertvillanova` 指出，在 `transformers v5.3.0+` 中，使用 DPO 训练 Qwen2.5-VL 等模型时，`mm_token_type_ids` 会被静默丢弃。这会导致模型无法正确区分多模态输入的类型，严重影响多模态对齐训练的效果。

---

## 4. 关键 PR 进展

### A. 多模态与模型兼容性修复
针对上述 Issue 的即时修复，以及针对 bf16/fp16 训练的兼容性补丁。

- **[[OPEN] 修复 DPO VLM 训练中 mm_token_type_ids 被丢弃的问题 #5279](https://github.com/huggingface/trl/pull/5279)**
  - **核心**: 修复 #5277，确保 DPOTrainer 在处理 VLM 批量数据时正确传递 `mm_token_type_ids`。
  - **风险**: 涉及 VLM batching 核心路径，需注意 Tensor 形状错误风险。

- **[[OPEN] 为 bf16/fp16 训练转换多模odal forward_kwargs 数据类型 #5073](https://github.com/huggingface/trl/pull/5073)**
  - **核心**: 解决 VLM 训练时 `pixel_values` 保持 float32 导致的显存/计算冲突（尤其是在 DeepSpeed 环境下）。

- **[[OPEN] 通过 tiny model 添加 Nemotron 3 测试 #5278](https://github.com/huggingface/trl/pull/5278)**
  - **核心**: 拓展模型覆盖率，通过 tiny model 测试确保对 Nemotron 3 架构的支持。

### B. 算法扩展与增强
社区正在积极引入 ICLR 2026 的新算法和自蒸馏技术。

- **[[OPEN] 为 GRPO 添加 DGPO (ICLR 2026) 支持 #5102](https://github.com/huggingface/trl/pull/5102)**
  - **核心**: 集成 DGPO 算法，增强 GRPO 的生成能力。

- **[[OPEN] 添加 SDPO (Self-Distillation Policy Optimization) Trainer #4935](https://github.com/huggingface/trl/pull/4935)**
  - **核心**: 实现 SDPO 算法，利用模型自身的高奖励轨迹进行自蒸馏，将反馈转化为密集的学习信号。

- **[[OPEN] [GKD] Distillation Trainer 的 Buffer 实现 #5137](https://github.com/huggingface/trl/pull/5137)**
  - **核心**: 为 GOLDTrainer 实现生成缓冲区，解耦生成与优化步骤，采用类似 GRPO 的 rollout 缓冲机制。

### C. 架构重构与开发体验
核心维护者 `@albertvillanova` 对 GRPO 和 RLOO 进行了大规模代码清理和重构。

- **[[OPEN] 简化 GRPO 和 RLOO 的 get_train_dataloader #5276](https://github.com/huggingface/trl/pull/5276)**
  - **核心**: 减少代码重复，将 dataloader 创建逻辑委托给共享的 `_get_data_loader` 方法，提升可维护性。

- **[[OPEN] 允许 Reward 函数记录额外列和标量指标 #5233](https://github.com/huggingface/trl/pull/5233)**
  - **核心**: 在 GRPO/RLOO 中增加 `log_extra` 和 `log_metric` 钩子，允许自定义 reward 函数记录更丰富的调试信息，无需访问 trainer 私有状态。

- **[[OPEN] 在 scripts/vllm_serve 中简化跨版本结构化输出逻辑 #5273](https://github.com/huggingface/trl/pull/5273)**
  - **核心**: 优化 vLLM 服务脚本，提升不同版本 vLLM 的兼容性。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **前沿算法落地的快车道**: TRL 正在以极快的速度集成最新的学术成果（如 ICLR 2026 的 DGPO），为研究者提供了从论文到代码的即时实现环境。
2.  **多模态 RL 的标准化尝试**: 今日的修复显示，TRL 正在努力解决 VLM（如 Qwen2.5-VL）训练中的复杂数据流问题（如 3D-RoPE 和多模态 token type），这是目前 RLHF 领域最棘手的工程痛点之一。
3.  **工程架构的持续演进**: 对 GRPO/RLOO 底层 DataLoader 的重构表明，项目正从“实验性代码”向“高可维护性工业库”转型，解耦生成与优化逻辑，这为后续支持更复杂的在线 RL 算法打下基础。
4.  **可观测性增强**: 允许 Reward 函数自定义日志，意味着开发者可以更精细地控制训练过程监控，这对于调试非确定性的 RL 训练至关重要。

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

# verl RL 日报摘要 (2026-03-12)

## 1. 今日速览
过去 24 小时内，verl 社区活跃度较高，共有 **25 个 PR 更新** 和 **13 个 Issue 更新**。重点关注在于**多模态模型（Qwen3-VL）的兼容性**、**国产硬件（Ascend NPU）的适配**以及**推理引擎的深度优化**。尽管无新版本发布，但针对 vLLM 和 SGLang 的 Rollout 机制修复与增强是当前的核心开发方向。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 重点 Issues
今日反馈的问题主要集中在**模型初始化挂起**、**多卡/多设备冲突**以及**新兴特征（如 Async Rollout）的稳定性**上。

1.  **[高优先级] 训练性能逐步退化**
    *   **描述**: 在使用 GRPO + SGLang + Megatron 训练 DeepSeek 16B 模型时，用户发现随着训练进行，`update_policy` 阶段的耗时持续增加，疑似存在内存泄漏或显存碎片化问题。
    *   **链接**: [#2504](https://github.com/volcengine/verl/issues/2504)

2.  **[Ascend NPU] GRPO 训练 Rollout 生成乱码**
    *   **描述**: 在华为昇腾 NPU 上运行 `fully_async_policy` GRPO 训练时，Rollout 阶段从 Step 0 开始即输出多语言乱码（俄文、韩文等），输入 Prompt 正常，疑似底层算子或精度问题。
    *   **链接**: [#5563](https://github.com/volcengine/verl/issues/5563)

3.  **[多模态] Qwen3-VL 设备冲突**
    *   **描述**: 使用 verl-0.6.0 运行 Qwen3-VL-8B-Thinking 时，出现 CUDA 设备分配重叠错误 (`RuntimeError: detected allocations from overlapping devices`)，影响多卡并行训练。
    *   **链接**: [#3791](https://github.com/volcengine/verl/issues/3791)

4.  **[架构] Agentic RL 示例失效**
    *   **描述**: 官方提供的 Agentic RL 训练示例无法正常工作，阻碍了用户进行 Agent 相关的 RLHF 开发。
    *   **链接**: [#2812](https://github.com/volcengine/verl/issues/2812)

5.  **[功能性] SGLang Async 模式报错**
    *   **描述**: 启用 SGLang 异步模式时触发运行时错误。
    *   **链接**: [#4082](https://github.com/volcengine/verl/issues/4082)

---

## 4. 关键 PR 进展
今日 PR 动态显示了 verl 正在积极扩展后端支持（Ascend量化, NeMo）并优化现有 Rollout 引能。

1.  **[Ascend] 支持 950 硬件 MXFP8 量化 Rollout**
    *   **进展**: 新增对昇腾 DV100/DV120 硬件的 MXFP8 量化支持，旨在提升国产硬件上的推理效率。
    *   **链接**: [#5569](https://github.com/volcengine/verl/pull/5569)

2.  **[Core] 修复 MoE 模型 DP/EP 并行策略冲突**
    *   **进展**: 修复了 verl v0.6.1 中 Sync 模式下 MoE 模型的重复 DP 输入问题，并增加了 EP/ETP 并行选择开关，解决了与 vLLM 并行度划分不一致导致的冗余计算。
    *   **链接**: [#5570](https://github.com/volcengine/verl/pull/5570)

3.  **[Engine] 引入 NeMo-Automodel 作为训练引擎**
    *   **进展**: 提交了将 NeMo-Automodel 集成为可选训练引擎的 PR，目前已测试 Qwen2.5-0.5B SFT，旨在提供除 FSDP/Megatron 之外的更多选择。
    *   **链接**: [#5407](https://github.com/volcengine/verl/pull/5407)

4.  **[Vision] Vision DP 支持**
    *   **进展**: 针对 ViT 计算引入 Vision Data Parallel，旨在解决 Sequence Parallel (SP) 下 ViT 重复计算导致的显存浪费问题。
    *   **链接**: [#5230](https://github.com/volcengine/verl/pull/5230)

5.  **[SGLang] 支持 LoRA (Merge & Native)**
    *   **进展**: 为 SGLang Rollout 添加双模式 LoRA 支持（Merge 进基础权重 vs Native Adapter），对齐 vLLM 的实现。
    *   **链接**: [#5564](https://github.com/volcengine/verl/pull/5564)

6.  **[Model] 支持 Qwen3.5 Example**
    *   **进展**: 基于 mbridge 添加了 Qwen3.5 的运行示例。
    *   **链接**: [#5381](https://github.com/volcengine/verl/pull/5381)

---

## 5. 为什么值得关注
verl 项目正在从一个纯粹的 PPO 训练框架演变为**全栈式 RLHF 基础设施**，今日的数据突显了以下趋势：

*   **异构计算适配**: 社区正大力解决华为昇腾 (NPU) 的兼容性与量化问题 (#5563, #5569, #5572)，这对于追求算力自主可控的开发者至关重要。
*   **MoE 与多模态深化**: 针对 MoE 模型的并行策略修复 (#5570) 和 ViT 的显存优化 (#5230) 表明项目正在解决 70B+ 参数量级大模型训练中的实际工程痛点。
*   **灵活的引擎集成**: 通过支持 NeMo、SGLang Async 和 LoRA，verl 正在构建一个高度模块化的生态，允许开发者按需组合 Inference Backend (vLLM/SGLang/TRTLLM) 和 Training Backend (FSDP/Megatron/NeMo)。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 日报摘要 (2026-03-12)

## 1. 今日速览
torchtune 仓库今日整体活跃度较低，无新版本发布且无新增 Issue。主要的变动集中在存量 PR 的维护上，核心关注点在于 **LoRA 微调过程中的验证集损失（Validation Loss）监控功能**。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**：过去 24 小时内无新增或更新的 Issue。

## 4. 关键 PR 进展
过去 24 小时内仅有 1 个 PR 更新，涉及功能增强与代码质量维护：

*   **[CLOSED] #2238 Adds validation loss to LoRA fine tune single device**
    *   **作者**: @MaxFrax
    *   **状态**: 已关闭 (CLOSED)
    *   **核心内容**: 该 PR 旨在为**单设备 LoRA 微调**流程增加**验证集损失**的计算与记录功能。这解决了微调过程中缺乏中间验证指标的问题，有助于防止过拟合并辅助超参调整。
    *   **关联 Issue**: [#1042](https://github.com/pytorch/torchtune/issues/1042)
    *   **链接**: [meta-pytorch/torchtune PR #2238](https://github.com/pytorch/torchtune/pull/2238)

## 5. 为什么这个项目值得在当前 RL/LLM 生态继续关注
尽管 torchtune 主要定位于 LLM 微调，但它在当前的 RL 生态（特别是 RLHF/VLLM 领域）中扮演着关键的基础设施角色：

1.  **RLHF 的基石**：在强化学习人类反馈（RLHF）流程中，高质量的 SFT（有监督微调）模型是奖励模型训练和 PPO 优化的起点。torchtune 对 **LoRA** 和 **QLoRA** 等高效微调技术的深度支持，能够以极低的成本快速构建适配 RL 算法的 Base Model。
2.  **PyTorch 原生生态**：作为 PyTorch 官方生态的一部分，它提供了比第三方库（如 Hugging Face PEFT）更底层的控制权和与 `torch.compile` 等优化技术的原生兼容性，适合需要进行底层算法魔改的 RL 研究员。
3.  **端到端工作流整合**：torchtune 正在逐步整合与推理引擎（如 vLLM、TensorRT-LLM）的互操作性，这对于 RL 训练后的模型部署和在线强化学习至关重要。

---
*数据来源: GitHub torchtune Repo | 分析时间: 2026-03-12*

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 生态观察 (2026-03-12)

## 1. 今日速览
Open Instruct 今日呈现高度活跃的开发状态，共更新 **11 个 PR**。核心动态集中在 **GRPO（Group Relative Policy Optimization）** 算子的鲁棒性修复与 **离线蒸馏** 基础设施的重构。项目正在从单一的训练框架向支持更复杂的分布式 Ray Actor 和异构模型压缩方向演进。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新 Issue（主要讨论目前集中在 PR 区）。

## 4. 关键 PR 进展

### 核心算法修复：GRPO 训练稳定性
*   **[Bug Fix] 修复 `grpo_fast` 评估队列失效** ([#1493](https://github.com/allenai/open-instruct/pull/1493))
    *   **作者**: @MohdElgaar
    *   **摘要**: 这是一个关键修复。在原生 `grpo_fast` 中，Eval prompts 仅在第一轮评估时入队，后续轮次队列静默归零。此修复确保了评估在整个训练生命周期中的持续性。
*   **[Bug Fix] 修复 GRPO 数据预处理 Actor 断点续训状态丢失** ([#1523](https://github.com/allenai/open-instruct/pull/1523))
    *   **作者**: @MohdElgaar
    *   **摘要**: 修复了 checkpoint 加载时 `client_state` 未正确恢复的问题，确保 `_last_consumed_step` 被保存，从而允许数据预处理 Actor 从正确的 Learner step 恢复运行。

### 新功能支持：离线蒸馏
*   **[Feature] 离线蒸馏基础设施 - Part 1** ([#1525](https://github.com/allenai/open-instruct/pull/1525))
    *   **作者**: @wolfecameron
    *   **摘要**: 重构了之前的 DistillKit 提案（原 #1520 已关闭），这是新计划的第一部分。主要引入了用于捕获 Logit 的压缩辅助工具，为后续集成 Teacher Logit 采样和 Student 训练铺路。

### 架构重构：Ray Actor 与 OLMo-core 集成
*   **[Refactor] 移除退役 Augusta 集群引用** ([#1522](https://github.com/allenai/open-instruct/pull/1522))
    *   **作者**: @finbarrtimbers
    *   **摘要**: 清理技术债务，移除了对 2025 年退役的 Augusta 集群的残留引用。
*   **[Feature] 增加 OLMo-core Ray Actor** ([#1398](https://github.com/allenai/open-instruct/pull/1398))
    *   **作者**: @finbarrtimbers
    *   **摘要**: 引入 `PolicyTrainerOLMoCoreProcess` 和 `OLMoCoreModelGroup`，封装 OLMo-core 的训练基础设施，旨在支持跨多 GPU/节点的分布式 GRPO 训练。
*   **[Feature] PPO Value Model 支持** ([#1462](https://github.com/allenai/open-instruct/pull/1462))
    *   **作者**: @hamishivi
    *   **摘要**: 为 `grpo_fast.py` 添加 PPO 风格训练支持，引入学习型 Value Model 进行 Advantage 估计（GAE），而非仅依赖 GRPO 的组归一化奖励。

### 测试与文档
*   **[Fix] GPU 测试失败修复** ([#1514](https://github.com/allenai/open-instruct/pull/1514)) - 修复了 DPO batch 中 `attention_mask` 键匹配错误。
*   **[Docs] 扩展贡献指南** ([#1521](https://github.com/allenai/open-instruct/pull/1521)) - 补充了关于 CI 流程、GPU 测试及 Beaker 实验启动的文档。

## 5. 为什么值得 RL 生态持续关注
Open Instruct 正在从一个单纯的 SFT/DPO 脚本集合进化为一个更现代化的 **RLHF/Reasoning** 工厂：

1.  **GRPO 的工程化落地**：项目正在花费大量精力解决 GRPO（一种常用于 Reasoning 模型训练的算法）在生产环境中的 Bug（如 Eval 失效、Checkpoint 恢复），这表明 AllenAI 正在将其作为核心训练范式。
2.  **离线蒸馏的标准化**：通过拆分 PR 引入 DistillKit 逻辑，项目正在试图标准化 "Teacher vLLM 采样 -> Student 训练" 的离线流程，这是当前缩小大模型与端侧模型能力差距的主流路径。
3.  **架构解耦**：引入 OLMo-core Ray Actor 标志着该项目正在解耦训练循环与底层模型实现，为未来支持更大规模的分布式强化学习打下基础。

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

# RL 日报：Gymnasium 项目追踪 (2026-03-12)

## 1. 今日速览
Gymnasium 仓库在过去 24 小时内整体平稳，无新版本发布及新增 Issue。重点在于现有 **PR 的维护更新**，主要集中在核心环境（Taxi）的算法逻辑修复及对最新 MuJoCo 版本的渲染兼容性适配。

## 2. 版本发布
*   **无新版本发布**

## 3. 重点 Issues
*   **无新增或更新 Issues**

## 4. 关键 PR 进展
今日共有 2 个 PR 处于活跃状态（Open），均涉及底层代码的正确性修复：

*   **[Bug Fix] 修复 Rainy Taxi 环境的非对称转移动力学问题**
    *   **PR**: [#1533](https://github.com/Farama-Foundation/Gymnasium/pull/1533)
    *   **作者**: @jashshah999
    *   **详情**: 修复了 Rainy（随机）Taxi 环境中的两个相关 Bug。原代码在计算转移概率时，因移动方向不同导致了**非对称的处理方式**，从而导致 MDP 转移概率计算错误。该 PR 旨在修正被阻挡动作的逻辑不对称性。
    *   **状态**: Open

*   **[Compatibility] 修复 MuJoCo 渲染中的 solver_iter 属性错误**
    *   **PR**: [#1542](https://github.com/Farama-Foundation/Gymnasium/pull/1542)
    *   **作者**: @wikiwiki1006
    *   **详情**: 修复了 `mujoco_rendering.py` 中的属性名拼写错误。将 `self.data.solver_niter` 更正为 `solver_iter`，以适配近期 MuJoCo 版本的 API 变更，解决了因属性不存在导致的 `AttributeError` 崩溃问题。
    *   **状态**: Open

## 5. 为什么值得持续关注
作为 OpenAI Gym 的继任者，Gymnasium 依然是 RL 领域事实上的 **API 标准制定者**。
1.  **基准环境的严谨性**：今日 #1533 对 Taxi 环境动力学的修复表明，项目团队正在持续打磨底层 MDP 的数学准确性，这对算法的可复现性至关重要。
2.  **生态兼容性**：#1542 对 MuJoCo 的及时修复显示了项目对主流物理引擎更新的快速响应能力，确保了连续控制任务基线的稳定性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 生态跟踪
**日期**: 2026-03-12 | **分析师**: RL Ecosystem Bot

这里是 **Stable Baselines3 (SB3)** 的每日动态摘要。今日项目整体处于平稳维护状态，无核心代码变更，社区侧出现一个新的工具集成提案。

---

### 1. 今日速览
*   **Issues 活跃度**: 低 (1 条更新)
*   **PR 活跃度**: 无 (0 条更新)
*   **发布动态**: 无新版本

### 2. 版本发布
过去 24 小时内无新版本发布。建议用户持续关注 `master` 分支或官方 PyPI 通道以获取潜在的补丁更新。

### 3. 重点 Issues
今日仅有 1 条 Issue 更新，涉及外部工具生态集成，状态已关闭。

*   **[#2225] [CLOSED] [Feature Request] robotmem — Cross-Episode Experience Memory Callback**
    *   **链接**: [DLR-RM/stable-baselines3 Issue #2225](https://github.com/DLR-RM/stable-baselines3/issues/2225)
    *   **作者**: @robotmem
    *   **内容**: 作者发布了一个名为 **robotmem** 的开源跨 Episode 经验记忆系统，并提供了可直接用于 SB3 的 Callback 封装 (`RobotMemSB3Callback`)。该工具旨在解决机器人学习中跨回合记忆留存的问题。
    *   **分析**: 虽然标记为 `[Feature Request]`，但本质上是一个第三方库的集成展示。项目维护者将其关闭（通常因此类请求不属于核心库功能范畴），但这表明 SB3 的 Callback 机制依然是社区扩展 RL 智体记忆能力的标准接口。
    *   **标签**: `more information needed`, `LLM generated`

### 4. 关键 PR 进展
过去 24 小时无 PR 更新。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但 Issue #2225 再次印证了 SB3 在强化学习生态中的核心地位：
1.  **标准化的扩展接口**: 即使是像 `robotmem` 这样复杂的记忆系统，也可以通过继承 `BaseCallback` 轻松集成。这种低耦合的架构设计使得 SB3 能够适应从标准 RL 到复杂机器人学习的多样化需求。
2.  **生态聚合能力**: 第三方开发者主动适配 SB3，说明它依然是工业界和学术界进行快速原型验证的首选基线。关注 SB3 的 Issue 动态往往是发现新型 RL 工具链（如 `robotmem`）的最佳窗口。

</details>