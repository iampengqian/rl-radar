# RL 开源生态日报 2026-04-03

> 生成时间: 2026-04-02 22:07 UTC | 覆盖项目: 15 个

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
2026年4月3日的 RL 开源生态呈现出明显的**分层演化**态势：
1.  **全栈基础设施化**：以 **verl** 和 **AReaL** 为代表的项目正在快速迭代，不仅关注算法，更在底层架构（如 NPU 支持、分布式数据加载、共享内存 IPC）上展开激烈竞争，力图成为 LLM Post-training 的“操作系统”。
2.  **工程化深水区**：**Slime** 和 **ROCK** 暴露了大规模分布式训练在显存管理（Offload/FP8）和状态一致性（K8s/Redis）上的严峻挑战，解决这些问题是通往生产级稳定性的必经之路。
3.  **标准化与多样化并存**：**Gymnasium** 和 **Tianshou** 继续夯实底层 API 标准（如 Action Repeat）和算法正确性（如 TRPO），而 **OpenRLHF** 和 **Open Instruct** 则开始探索 ES（进化策略）和 Agent 沙箱等非传统 PPO 路径。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 11 | 32 | 0 | **极高**。Q2 Roadmap 齐发，重点布局 NPU 与多模态，引擎层修复密集。 |
| **AReaL** | 3 | 13 | 0 | **高**。架构重构期，引入分布式数据服务与 MARL 支持，向 System 2 推理进发。 |
| **Open Instruct**| 0 | 6 | 0 | **中高**。底层重构，统一 OLMo-core 架构，引入 Docker 沙箱支持 Agent 训练。 |
| **Slime** | 4 | 2 | 0 | **中**。受困于 GLM 大模型在 FP8/Offload 下的工程难题，版本一致性问题待解。 |
| **ROCK** | 2 | 2 | 0 | **中**。专注于 K8s 环境下的状态持久化与容错，工程化属性强。 |
| **Tianshou** | 1 | 3 | 1 | **低**。发布维护版 v2.0.1，修复依赖与算法缺陷，处于稳定期。 |
| **Gymnasium** | 1 | 1 | 0 | **低**。标准化 Action Repeat 接口，支持 Model-based RL。 |
| **OpenRLHF** | 0 | 1 | 0 | **低**。引入高性能进化策略（ES），探索非梯度优化路径。 |
| *Others* | 0 | 0 | 0 | CleanRL, TRL, SB3 等 24h 内无显性动态。 |

## 共同关注的研究与工程方向

### 研究侧信号
1.  **复杂推理与 System 2**：**AReaL** 开启 MARL（多智能体）基础设施建设和 **Open Instruct** 引入 SWERL 沙箱环境，表明行业重心正从简单的指令遵循转向复杂的逻辑推理、代码执行和自我纠错。
2.  **多模态生成 RL**：**verl** 的 Q2 Roadmap 将 Multi-modal Generation RL 列为核心，标志着 RLHF 正式从纯文本向 Omni-model（全能模型）泛化。
3.  **非梯度优化复兴**：**OpenRLHF** 引入快速进化策略（ES），**verl** 支持 NVFP4 QAT，显示出社区在梯度下降之外，对更低精度、黑盒优化等异构训练范式的探索。

### 工程/基础设施侧信号
1.  **存算分离与 I/O 瓶颈突围**：**AReaL** 提出的分布式数据加载服务和共享内存 IPC，以及 **Open Instruct** 迁移至 OLMo-core，都是为了解决超大规模模型训练中的数据供给与计算效率瓶颈。
2.  **异构计算支持**：**verl** 在 NPU (Ascend) 上的持续投入和对 NVFP4 的支持，以及 **Slime** 在 FP8 上的挣扎，都指向一个趋势：未来的 RL 训练必须适应非 V100/A100 的多样化算力环境。
3.  **分布式状态容错**：**ROCK** 在 K8s 环境下对 Redis 数据覆盖的修复和元数据持久化的改进，揭示了在大规模集群调度中，任务的可恢复性比单纯的算法收敛速度更为关键。

## 差异化定位分析

*   **verl vs. AReaL（架构路线之争）**：
    *   **verl** 更像是一个**硬件亲和型**框架，重点在于适配底层引擎、异构芯片（NPU）和低精度训练，致力于成为跨平台的物理层基座。
    *   **AReaL** 则倾向于**系统架构型**演进，通过重构数据流、引入 TransferQueue 和 Agent 机制，试图在调度层和逻辑层解决扩展性问题。

*   **Open Instruct vs. OpenRLHF（工具链哲学）**：
    *   **Open Instruct** 正在深度绑定 **OLMo** 生态，通过原生 SFT 实现和深度重构追求极致性能，走的是“垂直整合”路线。
    *   **OpenRLHF** 则通过引入 ES 等多样化算法，保持其作为一个**通用算法超市**的定位，强调算法层面的广度与易用性。

*   **Slime & ROCK（生产落地派）**：
    *   **Slime** 专注于解决**超大模型（GLM系列）**特有的显存与通信痛点，适合前沿模型实验。
    *   **ROCK** 专注于**K8s 生产环境**的作业调度与状态管理，适合企业级部署。

## 社区热度与成熟度
*   **verl** 和 **AReaL** 目前处于**高速增长期**，PR 和 Issue 活跃度远超其他项目，且 Roadmap 极具侵略性，是当前技术创新的主要源头。
*   **Tianshou** 和 **Gymnasium** 处于**成熟维护期**，更新频率较低但质量高，侧重于修复 Bug 和标准化接口，适合作为稳定的底层依赖。
*   **Slime** 正处于**成长的阵痛期**，虽然功能前沿（支持 GLM-5/FP8），但 Docker 版本错配和频繁的显存 Bug 表明其工程成熟度尚需打磨，适合有较强 Debug 能力的前沿开发者。

## 值得关注的趋势信号
1.  **Agent 训练专用基础设施兴起**：Open Instruct 引入 Docker 沙箱和 AReaL 的 MARL 支持，强烈预示着 RL 基础设施正从“训练模型”转向“训练智能体”，**代码执行安全**和**多智能体交互**将成为标准配置。
2.  **训练精度的微观战争**：verl 对 Megatron Loss 归一化和 Tianshou 对 TRPO 参数恢复的修复，表明随着模型规模扩大，任何微小的数学不一致都会被放大。**可复现性**和**数学严谨性**正成为衡量 RL 库质量的核心指标。
3.  **NPU 与低精度不再是备胎**：verl 将 NPU 支持和 NVFP4 QAT 写入核心 Roadmap，意味着在 2026 年，**非 NVIDIA 生态**和**低精度训练**已不再是边缘实验，而是主流的大规模训练降本方案。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 开源项目日报 (2026-04-03)

**分析师：** RL Ecosystem Analyst
**数据源：** github.com/alibaba/ROCK

---

## 1. 今日速览
过去 24 小时内，ROCK 项目保持中度活跃，重点关注系统稳定性与工程化建设。
- **Issue 活跃度**：新增 2 条，关闭 1 条（净增 2 条）。
- **PR 活跃度**：新增 2 条，合并/关闭 2 条。
- **核心动向**：主要投入在修复 K8s 环境下的数据一致性 Bug 以及完善 CI/CD 自动化测试流程。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues

*   **🚨 [Bug] K8s Sandbox Redis 数据覆盖风险**
    - **链接**：[alibaba/ROCK Issue #712](https://github.com/alibaba/ROCK/issues/712)
    - **分析**：这是一个关键 Bug。在 K8s 环境下，当从 Redis 获取 sandbox info 发生异常时，代码层的 `catch` 块未正确抛出错误，导致返回 `None`。外层逻辑随即使用该 `None` 值覆盖了 Redis 中的原始有效数据，造成状态丢失。这会直接影响 RL 任务的状态恢复能力。

*   **🛠 [Enhancement] 增加单元测试任务**
    - **链接**：[alibaba/ROCK Issue #735](https://github.com/alibaba/ROCK/issues/735)
    - **分析**：社区/团队正在推动代码质量的提升，提议增加 CI 单元测试任务以保障合入代码的可靠性。

## 4. 关键 PR 进展

*   **🛠 [WIP] 修复 K8s Sandbox Info 空值覆盖问题**
    - **链接**：[alibaba/ROCK PR #713](https://github.com/alibaba/ROCK/pull/713)
    - **状态**：Open
    - **内容**：针对 Issue #712 的直接修复，防止异常情况下的错误数据覆盖。

*   **🚀 [Feat] Sandbox 元数据持久化支持**
    - **链接**：[alibaba/ROCK PR #730](https://github.com/alibaba/ROCK/pull/730)
    - **状态**：Open
    - **内容**：实现了将 Sandbox 元数据持久化到数据库的功能 (Close #729)，这对于大规模分布式 RL 训练的任务恢复和断点续训至关重要。

*   **🚀 [Feat] Harbor OSS 依赖支持 (已合入)**
    - **链接**：[alibaba/ROCK PR #734](https://github.com/alibaba/ROCK/pull/734)
    - **状态**：Closed (Merged)
    - **内容**：在 `EnvironmentConfig` 中增加了 `oss_deps` 字段，增强了环境配置对对象存储服务（OSS）的依赖管理能力。

*   **🧪 [Chore] 添加单元测试工作流**
    - **链接**：[alibaba/ROCK PR #736](https://github.com/alibaba/ROCK/pull/736)
    - **状态**：Open
    - **内容**：响应 Issue #735，配置 GitHub Actions 以执行单元测试。

*   **🌐 [Feat] JobConfig 标签与国际化**
    - **链接**：[alibaba/ROCK PR #721](https://github.com/alibaba/ROCK/pull/721)
    - **状态**：Open
    - **内容**：为 JobConfig 添加标签支持，并将部分字段描述（如 namespace, experiment_id）从中译英，提升了项目的国际化水平。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

ROCK 不仅仅是一个算法库，更是一个**生产级强化学习作业系统**。从今日的动态可以看出：
1.  **工程成熟度**：针对 K8s 与 Redis 状态同步的 Bug 修复（#712, #713）以及对元数据持久化（#730）的投入，表明该项目正在解决从 "Demo" 走向 "大规模生产部署" 中的核心痛点——**分布式环境下的状态一致性与容错性**。
2.  **基础设施标准化**：通过引入 `oss_deps`（#734）和加强 CI 单元测试（#735, #736），项目正在构建更健壮的依赖管理和质量保障体系，这对于企业级用户降低维护成本至关重要。
3.  **国际化进程**：文档与配置字段的英文化（#721）预示着该项目正准备更好地服务国际开源社区。

**推荐关注**：需要在大规模 Kubernetes 集群上管理复杂 RL 训练流程的开发者。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-04-03)

## 1. 今日速览
Slime 项目今日活跃度适中，主要集中在 **v0.2.4 版本的一致性问题** 以及 **大规模模型（GLM 系列）的工程化落地报错**。社区反馈了 Docker 镜像与 Git Tag 不匹配的严重问题，同时在 GLM-5 的 GRPO 训练和 GLM-4 的 FP8 推理中遇到了显存管理与算子兼容性挑战。此外，核心代码库正在持续优化 Ray 集群的 Actor 角色管理及 Rollout 采样逻辑。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **Docker 镜像与代码标签不匹配 (严重)**
    *   Issue [#1794](https://github.com/THUDM/slime/issues/1794) 指出，拉取官方 Docker 镜像 `slimerl/slime:v0.2.4` 获得的代码提交（`0988f0f`）与 GitHub 上 `v0.2.4` 标签指向的提交（`bd217a6`）不一致。这可能导致生产环境难以复现或调试版本特定问题，建议维护团队尽快重新发布镜像。
*   **GLM-5 GRPO 训练 Offload 崩溃**
    *   Issue [#1786](https://github.com/THUDM/slime/issues/1786) 报告在 GLM-5 16x8 H20 集群上进行 GRPO 实验时，第一步训练后在 `offload_train` 阶段调用 `torch_memory_saver.pause()` 时发生 `cudaError`。这反映了在超大模型显存卸载与检查点机制间存在潜在冲突。
*   **GLM-4 FP8 Rollout 算子不兼容**
    *   Issue [#1796](https://github.com/THUDM/slime/issues/1796) 显示，在使用官方 SGLang 镜像进行 GLM-4 的 FP8 Rollout 时，出现 `output_partition_size` 无法被 `block_n` 整除的错误。这表明当前的 FP8 量化实现与底层算子库存在对齐问题。
*   **非 Docker 环境部署需求**
    *   Issue [#1793](https://github.com/THUDM/slime/issues/1793) 呼吁优化非 Docker 环境下的安装体验。由于 HPC 或特定集群环境常受限无法使用 Docker，原生环境支持的完善对扩大用户群至关重要。

## 4. 关键 PR 进展
*   **RayTrainGroup Critic 角色修正**
    *   PR [#1797](https://github.com/THUDM/slime/pull/1797) 修复了创建 `RayTrainGroup` 时的逻辑缺陷。此前 Critic 模块可能错误地使用了 Actor 的角色配置，该 PR 确保了 Critic 拥有正确的角色定义，有助于分布式集群中资源与任务的精确隔离。
*   **增加 Rollout 采样掩码支持**
    *   PR [#1795](https://github.com/THUDM/slime/pull/1795) 引入了 Rollout 阶段的 Sampling-mask 支持。该功能允许在生成过程中对特定 token 或动作进行掩码控制，通常用于约束模型输出格式或实施特定的安全对齐策略。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 正在解决大模型强化学习（LLM+RL）中最棘手的 **基础设施与系统稳定性** 问题。
1.  **直面超大模型训练痛点**：Issue 中暴露的显存卸载崩溃和 FP8 算子兼容性，正是当前千亿参数模型 RL 训练的典型瓶颈。Slime 团队正积极处理这些底层问题（如 `torch_memory_saver`），对于致力于训练超大参数模型的团队具有极高的参考价值。
2.  **分布式架构的持续迭代**：从 PR 对 Ray 集群角色的精细化区分来看，项目正在从“跑通实验”向“健壮的分布式系统”演进，这对于长上下文或大规模并行的 RLHF 任务至关重要。
3.  **紧跟前沿模型生态**：针对 GLM-4/5 等最新 SOTA 模型的特定适配（如 GRPO 实验），使其成为连接最新模型架构与 RL 算法的关键桥梁。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-04-03)

## 1. 今日速览
AReaL 生态今日保持高频开发态势，**PR 更新达 13 个**，主要集中在**推理扩展性**与**训练效率**两大方向。
- **架构升级**：引入分布式数据加载服务与共享内存 IPC，试图解决大规模分布式训练中的 I/O 瓶颈。
- **功能拓展**：Megatron 生态适配持续深入，新增 LoRA RL 训练支持；多智能体强化学习（MARL）基础设施首次提交。
- **问题修复**：社区反馈了关于 Qwen3.5 在 FSDP 下的兼容性 Bug，官方快速修复了 Megatron Bridge 导致的树形训练回退问题。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
1.  **[OPEN] #1132 FSDP compute_logp 处理 Qwen3.5 attention_mask 失败**
    - **详情**：用户报告在使用 Hugging Face 格式的 Qwen3.5 模型配合 FSDP 引擎时，因 `attention_mask` 为字典类型导致 `compute_log_p` 报错。
    - **分析**：这反映了 AReaL 在兼容 HuggingFace 复杂模型结构（特别是非标准 attention mask）时仍存在边界情况需处理。
    - 链接: [inclusionAI/AReaL Issue #1132](https://github.com/inclusionAI/AReaL/issues/1132)

2.  **[OPEN] #945 关于其他模型家族（GPT-OSS, Kimi K2 等）的 RL 训练支持**
    - **详情**：用户询问 AReaL 是否计划支持 GPT-OSS、Kimi K2 等模型，作者提及了 2025 Q3 的路线图。
    - **分析**：显示出社区对 AReaL 成为跨模型通用 RL 库的强烈需求。
    - 链接: [inclusionAI/AReaL Issue #945](https://github.com/inclusionAI/AReaL/issues/945)

3.  **[CLOSED] #922 全能多模态模型 RL 支持**
    - **详情**：关于支持 Qwen3-Omni 和 Qwen2.5-Omni 的 RFC 已关闭。
    - **分析**：暗示多模态 RL 支持可能已经落地或合并到主分支，相关功能值得关注。
    - 链接: [inclusionAI/AReaL Issue #922](https://github.com/inclusionAI/AReaL/issues/922)

## 4. 关键 PR 进展

### 🔥 架构与性能优化
- **#1120 [OPEN] 分布式数据加载服务**
    - **内容**：将数据集处理从进程内剥离，构建基于 HTTP API 的 Gateway/Worker 架构。
    - **意义**：解耦数据加载与模型训练，对于超大规模多节点训练至关重要，显著提升数据供给的稳定性。
    - 链接: [inclusionAI/AReaL PR #1120](https://github.com/inclusionAI/AReaL/pull/1120)

- **#1133 [OPEN] RTensor 共享内存 IPC 快速通道**
    - **内容**：利用 POSIX SharedMemory 实现同节点内进程间的 Tensor 零拷贝传输，绕过 HTTP 开销。
    - **意义**：针对单机多卡或多进程 Rollout 场景的极致性能优化。
    - 链接: [inclusionAI/AReaL PR #1133](https://github.com/inclusionAI/AReaL/pull/1133)

- **#1127 [OPEN] 基于 Hash 的稀疏权重同步**
    - **内容**：FSDP/Archon 在权重更新时跳过未变更参数的分片广播。
    - **意义**：在 RLHF/PPO 等频繁同步权重的场景下，通过减少通信量显著提升吞吐。
    - 链接: [inclusionAI/AReaL PR #1127](https://github.com/inclusionAI/AReaL/pull/1127)

### 🛠 功能增强
- **#1129 [OPEN] MARL Phase 1：多智能体 RL 基础设施**
    - **内容**：实现 Reasoning & MARL 路线图的第一阶段，添加 per-agent reward group 及数学推理验证器。
    - **意义**：标志着 AReaL 正式进军 Multi-Agent RL 领域，结合 Math Reasoning 预示着向 System 2 推理能力的探索。
    - 链接: [inclusionAI/AReaL PR #1129](https://github.com/inclusionAI/AReaL/pull/1129)

- **#1123 [OPEN] Megatron 引擎支持 LoRA RL 训练**
    - **内容**：通过 megatron-bridge 补全了 Megatron 引擎下的 LoRA 微调能力。
    - **意义**：结合 Megatron 的分布式能力和 LoRA 的高效性，为大模型（特别是 MoE）的低成本 RL 训练铺平道路。
    - 链接: [inclusionAI/AReaL PR #1123](https://github.com/inclusionAI/AReaL/pull/1123)

- **#1121 [CLOSED] 支持在线推理服务**
    - **内容**：引入统一的 `InferenceServiceWorkflow`，支持离线和在线 Rollout 模式。
    - **意义**：补齐了在线 RL（Online RL）和 Human-in-the-loop (HITL) 的基础设施拼图。
    - 链接: [inclusionAI/AReaL PR #1121](https://github.com/inclusionAI/AReaL/pull/1121)

### 🩹 Bug 修复
- **#1135 [OPEN] 修复 PR #1056 导致的树形训练 破损**
    - **内容**：修正了 Megatron Bridge 适配 PR 中缩进错误导致的 `patch_bridge_for_tree_training` 失效。
    - 链接: [inclusionAI/AReaL PR #1135](https://github.com/inclusionAI/AReaL/pull/1135)

## 5. 为什么值得继续关注
AReaL 正在从一个单纯的 PPO 实现库向**工业级大规模 RL 系统**演进。
1.  **存算分离与通信极致优化**：分布式数据加载 (#1120) 和共享内存 IPC (#1133) 表明项目正在通过架构重构解决单点瓶颈，这是支撑 100B+ 参数模型 RL 训练的关键。
2.  **前沿 RL 范式落地**：对 **Tree Training** (Tree of Thoughts) 和 **MARL** (Multi-Agent) 的支持，表明其技术栈紧跟甚至引领当前 RL 用于 Complex Reasoning 的学术趋势。
3.  **Megatron 生态的深度整合**：通过 megatron-bridge 支持 LoRA 和修复树形训练，证明其在利用 NVIDIA 生态进行大规模分布式训练方面具有极强的执行力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL 日报：Tianshou 2026-04-03 摘要

这里是针对 **Tianshou (thu-ml/tianshou)** 项目 2026年4月3日 的开源生态动态分析。

## 1. 今日速览
Tianshou 今日发布了 **v2.0.1 维护版本**。开发团队主要致力于修复依赖兼容性问题（Pandas 版本限制）及合并积压的算法 Bug 修复（TRPO）。项目目前处于稳定维护与渐进式优化阶段。

## 2. 版本发布
*   **[Release] v2.0.1**
    *   **性质**：维护版本
    *   **内容**：修复了近期发现的依赖冲突及部分算法缺陷。建议所有用户升级以避免环境兼容性问题。
    *   **详情**：[GitHub Release v2.0.1](https://github.com/thu-ml/tianshou/releases/tag/v2.0.1)

## 3. 重点 Issues
今日仅有 1 条 Issue 更新，主要涉及环境依赖导致的运行时错误。

*   **[#1289] Enabling extra eval produces error due to unconstrained pandas version**
    *   **状态**：已关闭 (CLOSED)
    *   **描述**：用户在使用 `tianshou[eval]==2.0.0` 配合 Python 3.13 运行示例时，因 Pandas 版本兼容性问题导致 `experiment.py` 报错。
    *   **分析**：这是一个典型的上游依赖破坏性变更问题，已在 v2.0.1 中通过限制依赖版本解决。
    *   **链接**：[Issue #1289](https://github.com/thu-ml/tianshou/issues/1289)

## 4. 关键 PR 进展
今日共有 3 个 PR 更新，均处于已合并/关闭状态，涵盖了从紧急热修复到核心算法修正。

*   **[#1290] Constrain pandas to <3 owing to incompatibility** (Hotfix)
    *   **内容**：针对 Issue #1289 的修复。将依赖项 `pandas` 的版本限制在 `<3`，防止新版 Pandas 引入的 Breaking Changes 导致程序崩溃。
    *   **链接**：[PR #1290](https://github.com/thu-ml/tianshou/pull/1290)

*   **[#1287] fix: restore parameters on TRPO line search failure** (Algorithm Fix)
    *   **内容**：修复了 TRPO (Trust Region Policy Optimization) 算法的一个关键 Bug。当线性搜索未能找到满足 KL 约束的步长时，旧代码未能恢复原始策略参数，导致策略处于未经验证且违反信任区域的状态。
    *   **意义**：提升了 TRPO 算法训练的稳定性与数学严谨性。
    *   **链接**：[PR #1287](https://github.com/thu-ml/tianshou/pull/1287)

*   **[#1127] Feat/collect equal episode num in all envs** (Feature/Refactor)
    *   **内容**：一个长期 PR（创建于 2024 年）终于合并。旨在确保在矢量化环境中收集数据时，各环境收集的 Episode 数量保持一致。
    *   **意义**：解决了数据收集过程中的对齐问题，对需要精确控制样本分布的实验非常有价值。
    *   **链接**：[PR #1127](https://github.com/thu-ml/tianshou/pull/1127)

## 5. 为什么值得持续关注
Tianshou 作为基于 PyTorch 的高效强化学习库，在当前 RL 生态中依然保持着独特的竞争力：

1.  **严谨性与健壮性**：今日修复的 TRPO 参数恢复 Bug (#1287) 表明，维护团队非常关注算法底层的数学正确性，而非仅仅是 API 的堆砌。
2.  **紧跟生态**：迅速响应 Python 3.13 及最新第三方库（如 Pandas 3.x）的兼容性问题，保证了库的前沿可用性。
3.  **高层抽象与底层控制并存**：从修复 `highlevel.experiment` 模块可以看出，项目正在持续优化其高层 API，降低 RL 实验的门槛，同时保留了底层自定义的灵活性。

---
*数据来源: GitHub Archive*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 技术动态 (2026-04-03)

## 1. 今日速览
OpenRLHF 在过去 24 小时内整体较为平稳，无新版本发布或新增 Issue。社区贡献者提交了一项关键 PR，旨在引入高性能进化策略支持，显著提升了非梯度优化算法的执行效率。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**

## 4. 关键 PR 进展
*   **[OPEN] Fast Evolutionary Algorithm Support** (#1211)
    *   **作者**: DavidKoplow
    *   **链接**: [https://github.com/OpenRLHF/OpenRLHF/pull/1211](https://github.com/OpenRLHF/OpenRLHF/pull/1211)
    *   **技术摘要**:
        *   **核心特性**: 为 OpenRLHF 添加了进化策略支持，对标论文 [arXiv:2509.24372](https://arxiv.org/abs/2509.24372) 中的实现。
        *   **性能提升**: 通过算法优化，实现了比原版实现快 **10-30 倍** 的训练速度。
        *   **底层优化**: 引入了可逆浮点加减法技术（通过 upcasting 精度），在保证数值稳定性的同时减少了计算开销。
    *   **简评**: 该 PR 扩展了 OpenRLHF 在黑盒优化领域的能力，不仅限于传统的 PPO/DPO，显著提升了框架在大模型 ES 优化上的工程效率。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 正在从一个单纯的 PPO/DPO 训练框架向更广泛的 **Post-training 通用基础设施** 演进。PR #1211 表明社区正在积极填补 RLHF 生态中关于 **进化算法** 与大规模并行计算的空白。
1.  **算法多样性**: 引入高效的 ES 支持，为 LLM 对齐提供了梯度下降之外的替代路径（如用于提升推理能力的搜索算法）。
2.  **极致性能**: 10-30 倍的速度提升表明项目团队高度关注底层算力优化（如 Reversible Computing 在 RL 中的应用），这对资源密集型的 LLM 训练至关重要。

---
*数据来源: GitHub OpenRLHF Repo*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 **verl** 项目 2026-04-03 的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，verl 生态活跃度较高，主要集中在 **Q2 Roadmap 的规划与讨论**（特别是多模态生成与 NPU 支持），以及针对 **Megatron 引擎的 Loss 归一化** 和 **vLLM/SGLang Rollout 同步机制** 的关键修复。虽然无新版本发布，但社区正密集修复 Legacy 代码中的潜在 Bug，并为低精度训练（NVFP4）做准备。

- **Issues 更新**: 11 条（含 2 条 Roadmap，多条 Bug 修复）
- **PR 更新**: 32 条（侧重 Engine、Trainer 和 CI 稳定性）
- **新版本**: 无

---

### 2. 版本发布
*   **无新版本发布**。

---

### 3. 重点 Issues

**A. 路线图与规划**
*   **[RFC] Multi-modal Generation RL 2026Q2 Roadmap** (#5755)
    *   **关注点**：定义了 Q2 的核心架构方向，重点增强 **vLLM-Omni** Rollout 引擎（包括跨请求批处理、TP/DP 支持），以及多模态生成能力的强化。
    *   **链接**：[verl-project/verl Issue #5755](https://github.com/verl-project/verl/issues/5755)
*   **verl 26Q2 Roadmap** (#5836)
    *   **关注点**：涵盖模型引擎（Megatron FSDP, Low precision MXFP8/NVFP4）、Qwen 3.5 LoRA 支持以及异步训练的全面规划。
    *   **链接**：[verl-project/verl Issue #5836](https://github.com/verl-project/verl/issues/5836)
*   **verl on Ascend (NPU) 2026Q2 Roadmap** (#5526)
    *   **关注点**：继续致力于消除 GPU 与 NPU 之间的差异，支持大规模 MoE 和 Agent 场景。
    *   **链接**：[verl-project/verl Issue #5526](https://github.com/verl-project/verl/issues/5526)

**B. 关键缺陷与挑战**
*   **Legacy Megatron Worker Loss 归一化不一致** (#5863)
    *   **详情**：发现在 Legacy Megatron actor worker 中，Loss 归一化逻辑未与现代 Engine path 保持一致，受 micro-batch 切分影响。这是一个影响训练精度的隐蔽 Bug。
    *   **链接**：[verl-project/verl Issue #5863](https://github.com/verl-project/verl/issues/5863)
*   **异步训练挂起** (#5815)
    *   **详情**：用户报告运行 main 分支异步训练任务时出现 Hangs，目前正在排查中。
    *   **链接**：[verl-project/verl Issue #5815](https://github.com/verl-project/verl/issues/5815)
*   **Step1 参数更新耗时过长** (#496)
    *   **详情**：长期存在的问题，涉及 GRPO 训练流程中的性能瓶颈。
    *   **链接**：[verl-project/verl Issue #496](https://github.com/verl-project/verl/issues/496)

---

### 4. 关键 PR 进展

**A. 核心引擎与训练修复**
*   **[megatron] 修复 Dynamic Context Parallel 与 Loss 归一化** (#5869)
    *   **内容**：修复 DCP 模式下的 batch 切分逻辑（解决序列数少于 dp_size 时的失效问题）和 loss 归一化计算。
    *   **链接**：[verl-project/verl PR #5869](https://github.com/verl-project/verl/pull/5869)
*   **[megatron/actor] 恢复 Legacy Megatron loss 归一化一致性** (#5867)
    *   **内容**：针对 Issue #5863 的修复，重构了 legacy worker 以消除 micro-batch 和 pipeline 积累带来的归一化偏差。
    *   **链接**：[verl-project/verl PR #5867](https://github.com/verl-project/verl/pull/5867)
*   **[trainer] feat: add new trainer with TransferQueue** (#5401)
    *   **内容**：基于 RFC 的新型 Trainer 实现，旨在优化数据传输流水线。
    *   **链接**：[verl-project/verl PR #5401](https://github.com/verl-project/verl/pull/5401)

**B. Rollout 与推理集成**
*   **[vllm/sglang] Fix Synchronization Error** (#5865, #5866)
    *   **内容**：修复了由于 SGLang 优化跳过 `resume optimize` 步骤而导致的 vLLM 权重同步错误。
    *   **链接**：[verl-project/verl PR #5865](https://github.com/verl-project/verl/pull/5865)
*   **[sglang] 适配最新 SGLang `_launch_subprocesses`** (#5868)
    *   **内容**：跟进 SGLang 上游 API 变更，确保 Rollout worker 正常启动。
    *   **链接**：[verl-project/verl PR #5868](https://github.com/verl-project/verl/pull/5868)

**C. 文档与新特性**
*   **[doc] feat: add NVFP4 QAT documentation** (#5861)
    *   **内容**：添加了关于 NVFP4 量化感知训练（QAT）的文档，支持 FSDP 和 Megatron 后端。
    *   **链接**：[verl-project/verl PR #5861](https://github.com/verl-project/verl/pull/5861)
*   **[doc] Qwen3-235B NPU 长序列优化实践** (#5835)
    *   **内容**：分享了在 NPU 上运行超大模型长序列训练的优化经验。
    *   **链接**：[verl-project/verl PR #5835](https://github.com/verl-project/verl/pull/5835)

---

### 5. 为什么值得继续关注

**从数据看趋势：**
verl 正在从一个单纯的 RLHF 框架向**高性能、全栈式 Post-training 基础设施**演进，今日的数据揭示了三个关键信号：

1.  **对齐训练精度的极致追求**：Issue #5863 和 PR #5867/5869 表明，开发团队正在深入 Megatron 内部，修复 Legacy 代码中长期存在的 Loss 归一化和并行切分 Bug。这显示了项目对**训练数学一致性**的高标准，这对于可复现的科研和生产级模型至关重要。
2.  **拥抱下一代硬件与精度**：Q2 Roadmap 和最新的文档 PR 显示，verl 正积极布局 **NPU (Ascend)** 生态支持和 **NVFP4** 等低精度训练技术。这意味着 verl 旨在解决未来大规模模型训练中的算力成本和显存瓶颈问题。
3.  **多模态与 Agent 的前置布局**：Issue #5755 关于 Multi-modal Generation RL 的路线图表明，verl 正式将 RL 的应用范围从纯文本扩展到多模态生成和 Agent 交互，这与 2026 年 LLM 向 Agent 和 Omni-model 发展的行业趋势高度吻合。

**总结**：如果你关注**大规模分布式 RL 训练的稳定性**（如 Megatron FSDP, Loss Normalization）、**异构计算支持**（NPU）或**多模态 Agent 的 RL 实现**，verl 目前是 GitHub 上最激进且迭代速度最快的开源项目之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-04-03)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库虽无新版本发布或新 Issue 产生，但**代码提交重心显著向底层架构重构与算法统一迁移**。共有 6 个 PR 更新，主要集中在引入 OLMo-core 原生 SFT 实现、重构 GRPO（Group Relative Policy Optimization）算子、以及扩展对 Qwen3.5 VLM 和 SWERL 环境的支持。项目正处于从实验性代码向高性能、模块化架构整合的关键过渡期。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增 Issue 或更新。

## 4. 关键 PR 进展

### 4.1 架构重构与算法统一
*   **[Native SFT] Add OLMo-core SFT implementation**
    *   **状态**: Open (#1579)
    *   **分析**: 这是一个重大更新，旨在脱离旧有脚本，直接基于 `OLMo-core` 基础设施构建新的 SFT Trainer。引入了 `HFDataLoader`、packing collator 和 ephemeral checkpointing，同时标记旧版 SFT 脚本即将弃用。这意味着项目正在寻求更高的训练吞吐量和与 OLMo 技术栈的深度对齐。
    *   **链接**: [allenai/open-instruct PR #1579](https://github.com/allenai/open-instruct/pull/1579)

*   **[GRPO Refactor] Refactor GRPO: inline utilities and rename GRPOExperimentConfig**
    *   **状态**: Open (#1578)
    *   **分析**: 对 GRPO 算法实现进行了深度清洗。将 `mask_logprobs`、`compute_tis_weights` 等关键工具函数从 `grpo_utils.py` 内联到 `grpo_fast.py`。此举通常是为了减少 Python 开销或优化 CUDA kernel 调度，暗示了对 RL 训练循环性能的极致追求。
    *   **链接**: [allenai/open-instruct PR #1578](https://github.com/allenai/open-instruct/pull/1578)

*   **[Docs & Flags] Add OLMo-core sharding and parallelism documentation; unify flags across DPO/GRPO**
    *   **状态**: Closed (#1582)
    *   **分析**: 该 PR 已合入，重点在于统一 DPO 和 GRPO 在分布式训练时的 HSDP（Hybrid Sharded Data Parallel）分片策略配置。这降低了在不同 RL 算法间切换时的配置复杂度，提升了工程易用性。
    *   **链接**: [allenai/open-instruct PR #1582](https://github.com/allenai/open-instruct/pull/1582)

### 4.2 模型与生态扩展
*   **[Model Support] Qwen3.5 vlm support**
    *   **状态**: Open (#1568)
    *   **分析**: 针对 Qwen3.5 视觉语言模型的适配工作。值得注意的是，作者发现 FlashAttention 3 (FA3) 与该模型存在兼容性问题，目前通过回退 SPDA 并等待 Transformers v5.4.0 修复来解决。同时也涉及了 Liger-Kernel 的版本升级，反映了该项目对前沿算子库的快速跟进。
    *   **链接**: [allenai/open-instruct PR #1568](https://github.com/allenai/open-instruct/pull/1568)

*   **[RL Env] Add SWERLSandboxEnv for per-sample Docker tasks**
    *   **状态**: Open (#1492)
    *   **分析**: 这是一个技术含量极高的环境更新。引入了基于 Docker 的 `SWERLSandboxEnv`，允许在每个样本的隔离容器中运行测试套件。这对于代码生成或代理训练至关重要，确保了 RL 反馈信号的真实性和安全性，标志着项目正在向可验证的 Agent 训练场景迈进。
    *   **链接**: [allenai/open-instruct PR #1492](https://github.com/allenai/open-instruct/pull/1492)

## 5. 为什么值得 RL 生态持续关注
Open Instruct 目前已不再仅仅是一个微调脚本集合，正在演变为**高性能、工业级的 RL 训练底座**：

1.  **追求极致性能**: 从 PR #1578 中对 GRPO 算子的内联重构，到引入 Liger-Kernel 和处理 FlashAttention 兼容性，显示出该团队在优化训练吞吐量方面的积极投入。
2.  **架构标准化**: 通过 PR #1579 和 #1582，项目正在将分散的算法实现（DPO/GRPO/SFT）统一收敛到 `OLMo-core` 的原生基础设施上，这对于大规模分布式训练的稳定性至关重要。
3.  **面向 Agent 的工程化**: PR #1492 引入的 Docker 沙箱环境，表明项目正在解决 LLM 代码执行反馈中的核心难题——安全与隔离，这是构建可靠 Code Agent 的关键一步。

**总结**: 如果你关注大规模 RLHF、底层算子优化或基于沙箱的可验证 RL 训练，Open Instruct 提供了最前沿且务实的工程参考。

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

# RL 日报：Gymnasium 生态跟踪 (2026-04-03)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动集中在**功能性增强**上。虽然无新版本发布，但社区提交了一个关键的 PR，旨在解决长期存在的 Action Repeat（动作重复）需求，这标志着该项目在支持复杂时序模型（如 PlaNet/Dreamer）方面迈出了重要一步。

- **Issues 更新**: 1 条
- **PR 更新**: 1 条
- **Releases**: 0 个

## 2. 版本发布
*   **无新版本发布**：过去 24 小时内未检测到新的 Release tag。

## 3. 重点 Issues
**#652 [Proposal] Inclusion of ActionRepeat wrapper**
*   **状态**: Open
*   **标签**: `enhancement`, `good first issue`
*   **链接**: [Farama-Foundation/Gymnasium Issue #652](https://github.com/Farama-Foundation/Gymnasium/issues/652)
*   **摘要**: 该 Issue 提议引入 `ActionRepeat` 包装器，允许环境在单次 `step()` 调用中重复执行指定次数的动作。
*   **背景**: 该功能主要用于 MuJoCo 环境下的基于模型的强化学习算法（如 PlaNet 和 Dreamer）。此类算法通常需要以较低频率控制环境（即跳帧），当前的 Gymnasium 核心库缺乏对此的原生支持，促使开发者提出标准化接口的需求。

## 4. 关键 PR 进展
**#1553 Add ActionRepeat wrapper**
*   **状态**: Open
*   **作者**: Lidang-Jiang
*   **链接**: [Farama-Foundation/Gymnasium PR #1553](https://github.com/Farama-Foundation/Gymnasium/pull/1553)
*   **摘要**: 本 PR 旨在通过新增 `ActionRepeat` 包装器来关闭 Issue #652。
*   **技术细节**:
    *   **实现逻辑**: 继承自 `gym.Wrapper` 而非 `ActionWrapper`，因为需要在 `step()` 方法中循环调用底层环境并累加奖励，这改变了步进语义。
    *   **核心功能**: 确定性地重复给定动作 `num_repeats` 次。
*   **评价**: 这是一个高质量的功能贡献，填补了 Gymnasium 在处理控制频率与模拟频率不一致场景下的空白，预计合并后将极大简化 Model-based RL 的环境配置代码。

## 5. 为什么值得持续关注
作为 OpenAI Gym 的维护继任者，Gymnasium 依然是 RL 交互标准的事实规范。今日的更新显示出两个关键信号：

1.  **完善 API 缺口**: 虽然动作重复是一个常见操作，但将其标准化纳入核心库（而不是作为用户自定义脚本）意味着 Gymnasium 正在致力于覆盖更广泛的 RL 范式需求，特别是对时序抽象要求高的 Model-based RL。
2.  **社区活跃度**: 针对 2023 年提出的 Issue，今日出现了具体的代码实现 PR，表明维护者或社区贡献者正在积极处理积压的功能请求，确保库的演进紧跟 SOTA 算法的需求。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>