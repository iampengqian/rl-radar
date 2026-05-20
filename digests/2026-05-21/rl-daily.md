# RL 开源生态日报 2026-05-21

> 生成时间: 2026-05-20 22:27 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出显著的分层演进特征。以 LLM 对齐和智能体训练为核心的“大模型 RL”基础设施正步入深水区，占据了生态绝大部分的创新活力与工程迭代；而以传统控制与多智能体为主的基础 RL 库（如 Gymnasium, Stable Baselines3, Tianshou 等）则进入稳定期，近期维持静默。整个大模型 RL 领域正在从“算法验证”向“大规模分布式系统构建”与“Agentic 落地”快速切换。

## 各项目活跃度对比

*(注：无活动的项目已省略，当前均表现为 Issues/PRs 无更新且无新版本发布)*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 27 | 0 | 全面拥抱 Agentic RL，发力异构算力（NPU/XPU）适配与多模态兼容 |
| **TRL** | 11 | 14 | 0 | 聚焦前沿 VLM/MoE 模型适配，死磕底层训练稳定性与致命级隐蔽 Bug |
| **AReaL** | 0 | 8 | 0 | 硬核系统级优化，算子融合与云原生分布式容错（K8s调度） |
| **ROCK** | 3 | 4 | 0 | 强化生产级工程规范，完善平台高可用与云原生可观测性 |
| **slime** | 0 | 7 | 0 | 探索跨数据中心训练推理解耦，提供沙箱 Agent RL 闭环 Demo |
| **ROLL** | 0 | 1 | 0 | 极致严谨的底层算法逻辑修复（GAE计算隔离） |
| **CleanRL** | 0 | 1 | 0 | 针对高性能环境交互的 PyTorch 底层零拷贝内存优化 |
| **Gymnasium** | 0 | 2 | 0 | 维护经典标准环境（MuJoCo V5）的 API 规范与文档 |

## 共同关注的研究与工程方向

**研究侧信号：Agentic RL 成为绝对核心**
1. **多轮工具调用与沙箱环境**：从 verl 适配 Gemma4 工具解析器、解决 Qwen malformed 输出，到 slime 新增基于 E2B 沙箱的 `coding_agent_rl` 最小闭环，研究重心已明确从单轮对齐转向长轨迹、具备执行反馈的 Coding Agent 训练。
2. **长上下文与 MoE/VLM 对齐**：针对 Qwen3-30B-A3B 等大参数 MoE 模型以及多模态 VLM 的 RLHF/GRPO 训练正在普及，研究正在攻克超长上下文带来的计算与对齐难题。

**工程/基础设施侧信号：极致的显存、通信与容错优化**
1. **显存与算子级优化**：面对大词汇表和长序列，开源生态正在抛弃原生实现，转向定制化算子（如 AReaL 引入 Triton 融合交叉熵 LCE 算子）以打平显存峰值。
2. **权重同步与分布式解耦**：为了打破单机瓶颈，增量权重同步、跨节点/跨数据中心的零拷贝通信（AReaL 的 CUDA IPC，Slime 的 Delta Weight Sync）成为标配。
3. **隐蔽 Bug 带来的灾难性风险**：多家框架同时暴露并修复了底层机制引发的严重问题，如 TRL 中正则表达式引发的 $O(2^n)$ 训练死锁、默认参数导致的同质化解码，以及 ROLL 中 GAE 计算被 Mask 污染的数值 Bug。这表明大模型 RL 的工程容错门槛极高。

## 差异化定位分析

1. **从零到一的研究测试床（TRL, CleanRL）**：TRL 依托 HF 生态，是前沿模型（如最新 Qwen/GLM/VLM 系列）进行 RLHF 实验的首选“打头阵”基础设施；CleanRL 则坚持单文件白盒实现，是验证算法基线和排查“玄学”问题的试金石。
2. **工业级大集群基础设施（AReaL, ROCK）**：AReaL 和 ROCK（阿里系）展现了强烈的平台化属性。AReaL 专注突破大规模分布式通信与云原生调度，ROCK 则死磕集群状态机管理、数据库高可用等底层 PaaS 平台能力。
3. **前沿复杂 RL 范式架构（verl, slime）**：verl 正在确立其在多模态、长轨迹 Agent RL 和异构硬件适配上的架构优势；slime 则在训练/推理解耦、跨数据中心协同等高并发分布式场景提供解法。

## 社区热度与成熟度

生态活跃度呈现明显的“幂律分布”，**verl** 和 **TRL** 占据了压倒性的社区热度，每日拥有密集的双位数 Issue 和 PR 反馈，反映了其庞大的用户基和高频的试错迭代。
相比之下，**AReaL、slime 和 ROCK** 的社区反馈较少，但提交的 PR 均属于深度重构或底层硬核优化，表明这些项目正处于核心团队主导的深度开发与架构打磨期，代码质量与系统复杂度极高。**CleanRL 和 Gymnasium** 等项目则表现出极高的成熟度与稳定性，迭代频率平缓但极具针对性。

## 值得关注的趋势信号

1. **Agent RL 催生新的底层架构演进**：Agentic 场景下的 KV Cache 池化复用和上下文感知调度（如 verl）正在成为下一个架构重构的重点，这直接决定了框架能否支撑 SWE-Bench 级别的复杂任务。
2. **跨数据中心与异构算力的大规模解耦**：随着大模型算力需求的膨胀，框架开始原生支持跨数据中心通信和异构集群（Ascend NPU / Intel XPU）的混合调度，全球化的算力池统筹正在成为 RL 平台的核心能力。
3. **RL 底层调试正在向“白盒化”演进**：面对 GRPO/PPO 在复杂 MoE/VLM 上频频出现的静默崩溃，开发者对调试工具的诉求急剧上升（如 verl 计划引入独立的权重校验接口），要求对 Reward Mask、Tensor 对齐、梯度状态进行精细化排查。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-21）：

---

### 1. 今日速览
过去 24 小时内，ROLL（alibaba/ROLL）代码库整体保持平稳。项目无新版本发布，无新增或更新的 Issues，仅有一项针对核心算法工具链的关键缺陷修复 PR 提交。

### 2. 版本发布
- **最新 Releases**: 无。
- **链接**: [ROLL Releases](https://github.com/alibaba/ROLL/releases)

### 3. 重点 Issues
- **最新 Issues**: 过去 24 小时内无新增或更新。
- **链接**: [ROLL Issues](https://github.com/alibaba/ROLL/issues)

### 4. 关键 PR 进展
- **[#447] Fix GAE masked critic values bootstrapping valid advantages** [状态: OPEN]
- **作者**: haoyang9804
- **链接**: [alibaba/ROLL PR #447](https://github.com/alibaba/ROLL/pull/447)
- **技术摘要**: 该 PR 修复了 `roll.utils.functionals.compute_advantage()` 函数中的一个严重计算逻辑漏洞。在 `adv_estimator="gae"`（广义优势估计）模式下，当 `response_mask` 存在 padding 或 filtered token（即 `response_mask=0`）且对应位置的 Critic `values` 为非零或无效值时，这些无效值会错误地干扰（污染）有效 token 的 GAE 优势计算。该修复确保了在 mask 存在的情况下 Bootstrapping 计算的隔离性与准确性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 框架在底层基础设施层面的严谨性使其在当前 LLM+RL（基于人类反馈的强化学习/强化微调）开源生态中占据独特且关键的地位：

1. **直击 RLHF 底层计算痛点**：如 PR#447 所示，在大模型长序列对齐中，GAE 计算与变长序列/无效 Padding 的交互极易产生隐蔽的数值计算 Bug。ROLL 团队在精细化处理 `response_mask` 和 Critic values 的交互逻辑，这对于保证 PPO 等算法在 LLM 场景下的收敛稳定性至关重要。
2. **工程与算法的深度结合**：相比于仅提供高层 API 的框架，ROLL 深入到了 `functionals` 级别的算子实现。对性能和数值精度极致把控，使其能够支撑大规模、高吞吐量的工业级大模型训练需求。
3. **系统级的技术演进**：持续追踪并优化 Advantage（优势函数）计算、Critic 网络状态估计等核心组件，表明该项目在强化学习底层数值逻辑的打磨上具有极高的活跃度与专业度，是研究大模型对齐底层机制的绝佳参考基座。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是针对阿里巴巴强化学习开源项目 ROCK（github.com/alibaba/ROCK）的 2026-05-21 生态日报摘要。

---

### 1. 今日速览
- **Issues 更新**：3 条（含 2 个 Bug 修复，1 个功能增强）
- **PR 更新**：4 条（目前均为 OPEN 状态）
- **新版本发布**：0 个

### 2. 版本发布
过去 24 小时内，ROCK 仓库无新增 Release 版本。当前社区开发重点集中在后端服务的健壮性提升、API 规范化以及底层监控粒度的优化。

### 3. 重点 Issues
- **[Bug] Admin 数据库重启后连接池失效**（[#986](github.com/alibaba/ROCK/issues/986)）
  - **摘要**：当 PostgreSQL 实例由于计划升级等原因重启时，SQLAlchemy 异步连接池中的陈旧连接会导致 Admin 服务抛出 `connection is closed` 错误。这是一个典型的数据库高可用场景下的状态同步问题。
- **[Feature] 请求参数校验增强**（[#984](github.com/alibaba/ROCK/issues/984)）
  - **摘要**：提议为所有 API 接口添加严格的参数校验机制，以提升系统对外部请求的容错性和安全性。
- **[Bug] 容器与节点磁盘监控粒度不足**（[#982](github.com/alibaba/ROCK/issues/982)）
  - **摘要**：当前 `rocklet` 组件仅上报单一的 `system.disk` 指标（总体根文件系统使用率），无法满足对 `rootfs`、`log` 以及 Kata DinD（Docker-in-Docker）环境的精细化磁盘告警需求。

### 4. 关键 PR 进展
- **[重构] 引入 SandboxStateMachine 状态机管理沙箱生命周期**（[#988](github.com/alibaba/ROCK/pull/988)）
  - **摘要**：关闭 #914。为核心沙箱环境引入了规范的状态机（States: `not_exist` → `pending` → `running` → `stopped`），明确界定了 `start`、`stop` 和 `stop_dangling` 等状态的流转逻辑。此重构将大幅提升 RL 训练环境的编排可靠性与计费/归档的准确性。
- **[修复] 修复 Admin 服务 stale connection 问题**（[#987](github.com/alibaba/ROCK/pull/987)）
  - **摘要**：关闭 #986。通过在 SQLAlchemy 配置中引入 `pool_pre_ping` 和 `pool_recycle` 机制，自动探测并回收断开的数据库连接，增强 Admin 服务的异常自愈能力。
- **[功能] 实现 API 端点参数校验**（[#985](github.com/alibaba/ROCK/pull/985)）
  - **摘要**：关闭 #984。对应 Issue #984 的代码实现，完善了接口层的防御性编程。
- **[修复] 实现细粒度磁盘分区监控**（[#983](github.com/alibaba/ROCK/pull/983)）
  - **摘要**：关闭 #982。将单一的 `system.disk` 指标拆分为 `system.disk.rootfs`、`system.disk.log` 和 `system.disk.dind` 三个独立 Gauge 指标，支持 Grafana 按分区进行精细告警，同时保持了向后兼容性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 项目在强化学习生态中的差异化在于**工程化与落地能力**。从本次 Issue 和 PR 的演进可以看出，ROCK 正在深入解决 RL 大规模训练集群在实际生产环境中的痛点：
1. **状态管理与容错**：引入 `SandboxStateMachine` 表明项目在复杂训练任务（Pod/Env）的生命周期管理上走向成熟，这对于长时间运行的 RL 算法至关重要。
2. **云原生可观测性**：针对 Kata DinD 环境的细粒度磁盘监控，说明 ROCK 已经在应对容器化 RL 训练场景下的底层资源抢占与 OOM 风险管控，具备极强的生产实战价值。
3. **高可用基建**：解决 DB 连接池等底层中间件问题，标志着其控制平面正在向企业级 SaaS 服务的高可用标准对齐。

对于需要从“单机算法跑通”走向“大规模分布式 RL 训练平台建设”的研发团队而言，ROCK 的架构演进和工程实践具有极高的参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 | 2026-05-21

项目仓库：[THUDM/slime](https://github.com/THUDM/slime)

## 1. 今日速览
过去 24 小时内，Slime 仓库无新增 Issue、无新版本发布，但有多达 **7 个 PR** 取得进展或被创建。整体动向集中在**训练/推理架构解耦、Agent 沙箱 RL 实验、以及底层工具链健壮性修复**。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增或更新 Issue。

## 4. 关键 PR 进展

| PR | 标题 | 状态 | 核心变更 | 关键词 |
|---|---|---|---|---|
| [#1898](https://github.com/THUDM/slime/pull/1898) | Add SwanLab tracking support | OPEN | 新增 SwanLab 作为 W&B 之外的可选实验追踪后端，统一 logging / args / open-metrics / 测试脚本 | 实验追踪, SwanLab |
| [#1806](https://github.com/THUDM/slime/pull/1806) | feat: delta weight sync (disk + nccl transports) | OPEN | 实现**非共置增量权重同步**：仅传输变化的位置与值（而非全量参数），支持 disk 和 NCCL 两种传输方式，面向跨数据中心的训练/推理解耦场景 | 增量同步, 训练推理解耦 |
| [#1927](https://github.com/THUDM/slime/pull/1927) | fix: quote nvidia-modelopt requirement in build_conda.sh | OPEN | 为 `build_conda.sh` 中的 pip 依赖加引号，修复 shell 将 `>` 解析为 stdout 重定向导致版本约束失效的问题 | 构建修复 |
| [#1926](https://github.com/THUDM/slime/pull/1926) | Move micro-batch scheduling from training side to rollout side | CLOSED | 将 micro-batch 调度从训练侧移到 rollout 侧，避免因样本长度不均导致部分 DP rank 分配到多余的 micro-batch | 调度优化, rollout |
| [#1923](https://github.com/THUDM/slime/pull/1923) | add coding_agent_rl: agent-in-sandbox RL minimal demo | OPEN | 端到端 demo：启动 E2B 沙箱 → 安装 Claude Code CLI → 运行编码 Agent → 基于测试结果的 reward 闭环 | Agent RL, 沙箱, E2B |
| [#1914](https://github.com/THUDM/slime/pull/1914) | feat: add --max-checkpoint-count to limit saved checkpoints | OPEN | 新增 `--max-checkpoint-count` 参数，自动裁剪旧 Megatron checkpoint，限制保存数量，防止长时间训练磁盘溢出 | Checkpoint 管理 |
| [#1922](https://github.com/THUDM/slime/pull/1922) | fix(debug): auto-append rollout_id/rank in save_debug_train_data path template | OPEN | 修复多 GPU / Megatron 训练下，调试数据保存路径缺少 `{rollout_id}` 或 `{rank}` 导致文件被覆盖的问题；抽取 `resolve_debug_train_data_path` 工具函数 | 调试工具, 路径安全 |

**本日最重要的两条 PR：**
- **[#1806 增量权重同步](https://github.com/THUDM/slime/pull/1806)**：面向跨数据中心训练/推理解耦的增量同步机制，直接对应 RLHF 大规模部署中 trainer 与 rollout 引擎分离的痛点。
- **[#1923 Agent-in-Sandbox RL Demo](https://github.com/THUDM/slime/pull/1923)**：提供了一个可运行的「编码 Agent + 沙箱执行 + 测试 reward」最小闭环示例，降低 Agent RL 实验的入门门槛。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **训练/推理解耦正在成为大规模 RLHF 的工程刚需**：[#1806](https://github.com/THUDM/slime/pull/1806) 的增量权重同步明确瞄准 trainer 与 rollout 引擎位于不同数据中心的场景，这是当前开源 RL 框架中少有系统化解决的领域。
2. **Agent RL 实验基础设施在快速补全**：[#1923](https://github.com/THUDM/slime/pull/1923) 展示了从沙箱启动到 reward 计算的端到端闭环，配合 E2B + Claude Code CLI，为代码生成 Agent 的 RL 训练提供了可复用的模板。
3. **持续打磨大规模训练的工程细节**：从 checkpoint 自动裁剪（[#1914](https://github.com/THUDM/slime/pull/1914)）到 micro-batch 调度优化（[#1926](https://github.com/THUDM/slime/pull/1926)）再到调试路径安全（[#1922](https://github.com/THUDM/slime/pull/1922)），项目在 Megatron 级别分布式训练的可运维性上持续迭代。

---
*本日报由自动化脚本生成，数据截至 2026-05-21。*

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-21 强化学习（RL）日报摘要：

# AReaL 强化学习开源生态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时内，AReaL 仓库整体保持平稳开发态势，无新版本发布，社区 Issue 趋于静默（0 条更新）。项目当前的核心驱动力依然来源于底层基础设施优化与分布式训练架构的迭代，共有 **8 个 Pull Requests** 产生了新的提交或评审动态。整体重心向 **高性能算子融合、异构集群调度及状态同步容错** 倾斜。

## 2. 版本发布
**无**。近期无新的 Release 版本推送。

## 3. 重点 Issues
过去 24 小时 **无新增或更新的 Issues**。社区反馈和 Bug 追踪当前处于低位运行期。

## 4. 关键 PR 进展
今日的 PR 动态涵盖了从核心训练算子、分布式容错到 Kubernetes 集群调度的多个关键维度，以下为重点进展提取：

*   **[perf] 融合交叉熵算子以突破显存瓶颈**
    *   **PR:** [#1322 feat: Support Linear Cross Entropy fuse kernel](https://github.com/areal-project/AReaL/pull/1322)
    *   **简评:** 针对大词汇表模型训练，引入基于 Triton 的融合交叉熵（LCE）前向/反向传播，避免实例化完整的 `[tokens, vocab]` logits 张量。极大优化了 Megatron 训练范式下的显存占用和计算效率。
*   **[fix] 修复异步 RL 训练检查点恢复后的严重状态通胀 Bug**
    *   **PR:** [#1345 fix(infra): correct staleness capacity inflation after recovery](https://github.com/areal-project/AReaL/pull/1345) *(已关闭/合入)*
    *   **简评:** 修复了异步 RL 训练中从检查点恢复时 `StalenessManager` 计数器重置引发的容量公式计算错误。这是一个关键的底层容错修复，有效防止了恢复后训练策略的退化。
*   **[perf] 同构环境下的零拷贝权重同步**
    *   **PR:** [#1310 feat(awex): add colocated CUDA IPC weight transfer](https://github.com/areal-project/AReaL/pull/1310) *(已关闭/合入)*
    *   **简评:** 在 Megatron 训练与 SGLang 推理共享同 GPU 的环境下，采用 CUDA IPC 技术实现零拷贝权重更新，替代了传统的跨设备 NCCL P2P 通信。大幅降低了权重同步延迟，是 RLHF 极致性能优化的重要一步。
*   **[infra] 分布式调度与底层通信拓展**
    *   **PR:** [#1305 feat(experimental): integrate Ray RDT for weight syncing](https://github.com/areal-project/AReaL/pull/1305)
    *   **简评:** 实现了基于 Ray Direct Transport (RDT) 的权重同步后端，通过 RPC 拉取与 FSDP 权重元数据提取，丰富了 AReaL 的分布式通信链路选择。
    *   **PR:** [#1316 Refined Kubernetes scheduler implementation](https://github.com/areal-project/AReaL/pull/1316)
    *   **简评:** 引入基于 StatefulSet 的 Kubernetes 调度器实现。包含 Pod 健康诊断与回滚处理机制，标志着 AReaL 正在增强对标准云原生 K8s 集群的深度适配。
*   **[fix] 修复 Mask 机制引发的归一化数值污染**
    *   **PR:** [#1347 fix(utils): ignore masked invalid normalization values](https://github.com/areal-project/AReaL/pull/1347)
    *   **简评:** 消除了奖励归一化与优势归一化过程中潜在的危险 Bug（`NaN * 0` 导致的隐蔽污染），确保了带有 loss_mask 的 Token 计算时的数学稳定性。

*(其他更新：[#1352 docs: fix some typos](https://github.com/areal-project/AReaL/pull/1352) 文档微调；[#1175 feat(examples): add inference service performance benchmark](https://github.com/areal-project/AReaL/pull/1175) 基于 OpenClaw + TAU²-bench 添加端到端推理基准测试。)*

## 5. 为什么这个项目值得在当前 RL 生态继续关注
基于近期的代码演进，AReaL 正在脱离“单纯的 RL 算法框架”层面，向**“大规模、高并发、云原生的 RL 基础设施”**演进：
1.  **极致的系统级优化**：项目不仅在关注 RL 算法本身，更在死磕底层工程瓶颈（如 LCE 算子融合规避显存峰值、同卡部署下的 CUDA IPC 零拷贝通信）。这对于长 Context、超大模型的 RLHF 训练是刚需。
2.  **拥抱云原生与异构计算**：通过提供完善的 Kubernetes 调度器并不断丰富底层传输协议（如 Ray RDT、NCCL P2P 等），AReaL 正在为企业级、跨节点的海量 GPU 异构集群提供开箱即用的 RL 编排能力。
3.  **极高的严谨性**：对异步训练时序、Checkpoint 容错以及 Masked 归一化底层 Bug 的快速定位与修复，表明该项目在生产级稳定性上有着严格的要求。对于希望进行大规模 Post-training 研发和部署的团队而言，AReaL 提供了极具价值的底层参考。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-21 RL 日报摘要：

---

# 📊 TRL (Hugging Face) RL 生态日报 - 2026-05-21

## 1. 今日速览
- **Issues 动态**：过去 24 小时共更新 **11** 条（3 条新建，8 条历史更新）。
- **PR 动态**：过去 24 小时共更新 **14** 条（6 条新建，8 条历史更新）。
- **版本发布**：**0** 个。

## 2. 版本发布
无最新版本发布。

## 3. 重点 Issues
今日的 Issues 集中在 **GRPO 算法的稳定性**、**正则表达式引发的训练挂起** 以及 **VLM 训练的底层 Bug**。

- **[Bug] Qwen3 解析引发灾难性回溯导致训练挂起**：[#5415](https://github.com/huggingface/trl/issues/5415) (CLOSED)
  在 GRPOTrainer 中结合 Qwen3 使用 tool calling 时，若模型生成长截断的退化输出，`qwen3_schema` 的正则表达式会引发 $O(2^n)$ 的灾难性回溯，导致训练无限期挂起。
- **[Bug] GRPO 默认温度设置导致近贪婪解码**：[#5783](https://github.com/huggingface/trl/issues/5783) (OPEN)
  当 `transformers >= 4.50.0` 且使用 Qwen2.5 时，`GRPOConfig.temperature=1.0`（默认值）会触发近乎贪婪的解码，导致 rollout 崩溃，优势信号退化（`std(R) ≈ 0`）。
- **[Bug] GRPOTrainer 填充方向不匹配破坏多模态上下文**：[#5785](https://github.com/huggingface/trl/issues/5785) (OPEN)
  在 VLM 训练中，`_generate_and_score_completions` 对 `prompt_ids` 和 `mm_token_type_ids` 使用了相反的填充方向，导致张量错位并破坏训练。
- **[Feature] 加权 SFT**：[#5761](https://github.com/huggingface/trl/issues/5761) (OPEN)
  社区提出在 SFT 中引入 token 级别加权机制的提案，旨在改善混合质量长文本的 SFT 训练效果。
- **[Tracking] 30B MoE 长上下文 SFT 训练路径**：[#5713](https://github.com/huggingface/trl/issues/5713) (OPEN)
  社区正在追踪在 8×H100 节点上使用 TRL 的 `SFTTrainer` 训练 Qwen3-30B-A3B（支持 16k → 1M 上下文）的扩展方案。

## 4. 关键 PR 进展
核心 PR 主要围绕 **Qwen 系列模型 Bug 修复**、**VLM 测试重构** 以及 **底层内存与兼容性优化**。

- **🔧 修复 Qwen3/3.5/GLM4 正则回溯引发死循环**：[#5798](https://github.com/huggingface/trl/pull/5798) (CLOSED)
  重写了有问题的正则子模式，修复了上述 Issue #5415 中的 $O(2^n)$ 回溯问题，将其转化为非回溯的高效解析。
- **🔧 增加 `trust_remote_code` 配置**：[#5802](https://github.com/huggingface/trl/pull/5802) (OPEN)
  在所有 Trainer 配置中添加了顶级 `trust_remote_code` 字段，并增加了相应的回归测试，增强自定义模型加载的安全性。
- **🧹 移除 Qwen VL 系列测试 Tiny 模型的无效参数**：[#5795](https://github.com/huggingface/trl/pull/5795), [#5796](https://github.com/huggingface/trl/pull/5796), [#5797](https://github.com/huggingface/trl/pull/5797) (OPEN)
  集中清理了 Qwen2-VL, Qwen2.5-VL, Qwen3-VL 测试脚本中视觉配置的冗余键（如 `num_hidden_layers`），修复了 CI 中的参数断言错误。
- **🚀 为实验性模块 `empty_cache()` 修复 MPS 支持**：[#5799](https://github.com/huggingface/trl/pull/5799) (OPEN)
  修复了 Apple Silicon (MPS) 环境下的显存清理逻辑，之前 `torch.cuda.empty_cache()` 的 no-op 行为会导致渐进式内存溢出。
- **📖 增加 `expandable_segments` 内存调优文档**：[#5794](https://github.com/huggingface/trl/pull/5794) (OPEN)
  在内存优化指南中补充了 PyTorch 缓存分配器环境变量的配置说明，显著缓解长上下文和在线 RL 训练的 OOM 问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿大模型支持的高效迭代**：从 Qwen 系列的正则解析、填充 Bug 到 30B MoE 长上下文 SFT 的适配，TRL 不仅是算法库，更是前沿模型（尤其是 VLM/MoE）进行 RLHF/PPO/GRPO 对齐的**基础设施测试床**。
2. **对底层训练稳定性的极致把控**：今日暴露并修复的“默认温度导致同质化解码”、“多模态填充张量错位”以及“正则灾难性回溯”表明，在复杂 RL 环境中，TRL 社区正在积极解决那些**难以察觉但会导致训练悄然崩溃的深水区问题**。
3. **跨平台与性能优化并重**：无论是引入细粒度的遥测和 `trust_remote_code` 机制，还是针对 Apple Silicon MPS 的显存优化及 PyTorch 底层显存分配器的文档科普，TRL 正在降低研究者在异构算力环境下进行 RL 实验的工程门槛。

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

以下是为您生成的 verl 项目 RL 日报摘要（2026-05-21）：

### 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃，共处理 **10 条 Issues**（3 个已关闭，7 个开放）和 **27 条 PRs**（6 个已合并/关闭，21 个开放）。当前社区的核心焦点正全面向 **Agentic RL（智能体强化学习）** 聚拢：多轮工具调用的稳定性、Agent 推理过程中的 KV Cache 与上下文调度优化、以及异构硬件（NPU/XPU）的适配占据了主要讨论。此外，底层数据协议和显存管理的 bug 修复正在为更稳定的复杂 RL 场景铺路。

### 2. 版本发布
- **最新 Releases**: 无
- 过去 24 小时内未发布新的稳定版本或补丁。

### 3. 重点 Issues
- **[Agent RL] 多轮工具调用导致训练崩溃** [#6252](https://github.com/verl-project/verl/issues/6252) `[OPEN]`
  使用 Qwen3.5/3.6 35B-A3B 模型进行 Agent RL 训练时，在 80-130 step 左右模型生成的 malformed tool calls 激增，导致格式异常和训练崩溃。这是目前 Agentic RL 落地中的典型对齐难题。
- **[架构设计] Agentic RL 的上下文感知调度与 KV Cache 池化** [#6383](https://github.com/verl-project/verl/issues/6383) `[OPEN]`
  针对经典单轮推理在 Agentic 场景下的局限性，提出在多轮增长的过程中实现 Prefix 缓存复用。对于 SWE-Bench 等长轨迹 Agent 任务，此举将大幅降低 Rollout 阶段的计算与显存开销。
- **[底层机制] 统一 RL 工作流的 Skip 系统** [#5998](https://github.com/verl-project/verl/issues/5998) `[OPEN]`
  提议为 RL 关键工作流引入统一管理的跳过机制，以节省时间和空间。RolloutSkip 等尝试已被证明能显著提升训练阶段的调试效率。
- **[Bug] FSDP 同步 mini-batch 引发 KeyError** [#6407](https://github.com/verl-project/verl/issues/6407) `[CLOSED]`
  在 `main_ppo_sync` 中，当 `ppo_mini_batch` 内所有样本具有相同的 prompt 长度（如固定第一轮模板的 Agent RL 场景）时，会触发 `attention_mask` 缺失导致崩溃。已通过修复 PR 解决。
- **[易用性] 请求单独检查权重转换逻辑** [#6414](https://github.com/verl-project/verl/issues/6414) `[OPEN]`
  开发者在从其他框架（如 slime）迁移任务时，亟需脱离完整训练/推理环境来验证权重同步的正确性，呼吁增加类似 `--check-weight-update-equal` 的 debug 接口。
- **[架构重命名] ActorRolloutRefWorker 方法名产生歧义** [#6418](https://github.com/verl-project/verl/issues/6418) `[OPEN]`
  指出 `update_weights` 方法使新手误以为是更新模型权重，其实际作用是将 actor 权重同步至 rollout 引擎，提议重命名以消除混淆。

### 4. 关键 PR 进展
- **[集成] ArcticRL 接入 verl** [#6422](https://github.com/verl-project/verl/pull/6422) `[OPEN]`
  创建了通用的 Remote Backend 抽象层，并完成了 ArcticRL 实例的集成，扩展了 verl 的外部环境对接能力。
- **[功能] 适配 Gemma4 工具调用解析器** [#6406](https://github.com/verl-project/verl/pull/6406) `[OPEN]`
  引入了对 Gemma4 模型的 multi-turn agent loop 支持。通过处理特殊的 stop token 及无 EOS 下的响应格式，修复了原有框架对 Gemma4 工具调用不兼容的问题。
- **[修复] 多轮工具场景下的 Reward 误判** [#6392](https://github.com/verl-project/verl/pull/6392) `[CLOSED]`
  修复了一个隐蔽的 Bug：在 Agent 工具调用中，默认 Reward Manager 会错误地将 `attention_mask` 标记的 Tool 观察结果计入 token 级别的评分。该 PR 对其进行了有效 Mask。
- **[重构] Megatron-Bridge API 升级** [#6335](https://github.com/verl-project/verl/pull/6335) `[OPEN]`
  重构底层代码以使用 Megatron-Bridge 的最新 API，保持与 NVIDIA 生态最新特性的同步与兼容。
- **[修复] 防止 FSDP2 下异构 Buffer 导致的 NCCL 死锁** [#6405](https://github.com/verl-project/verl/pull/6405) `[OPEN]`
  模型中存在不同大小的 buffer（如 Gemma4 的旋转嵌入维度差异）会在分布式加载时因迭代顺序不确定导致死锁。此 PR 通过对 buffers 强制排序修复了该问题。
- **[重构] 方法名消除歧义** [#6417](https://github.com/verl-project/verl/pull/6417) `[OPEN]`
  配合 Issue #6418，将 `ActorRolloutRefWorker.update_weights` 重命名为更具明确指向性的 `actor_weights_to_rollout`，属于 Breaking Change。
- **[Ascend NPU] 增加 A3 平台 SFT 训练脚本** [#6419](https://github.com/verl-project/verl/pull/6419) `[OPEN]`
  针对昇腾 A3 硬件架构（16 NUs 单机）优化并提供了专门的 SFT 训练脚本，进一步扩展国产算力生态支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **迈向真实的 Agentic RL 落地**：verl 目前正集中攻克多轮工具调用中的“格式崩塌”和长上下文前缀缓存复用难题。从单轮对齐过渡到支持 SWE-Bench 级别的长轨迹 Agent 训练，是当前 RL 技术赋能 Coding/SDA 领域的关键瓶颈，verl 在架构层面正在给出解法。
2. **多模态与异构模型的高效兼容**：随着 Gemma4、Qwen3.5/3.6 MoE 架构的接入，verl 展现出了对异构模型（如混合旋转嵌入维度、不同 Tool Call 格式）极高的底层兼容与定制解析能力，降低了新架构模型的 RL 适配成本。
3. **算力生态的全面解耦与扩圈**：通过剥离独立的硬件插件层，除了主流的 NVIDIA FSDP/Megatron 体系外，Intel XPU 和 Ascend A3 (NPU) 正在积极接入，这为在全球化复杂算力供给下开展大规模 RL 训练提供了极强的工程容错与基建潜力。

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

# CleanRL 项目日报摘要 (2026-05-21)

**数据源:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl) | **统计周期:** 过去 24 小时

---

### 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活动趋于平稳。无新版本发布，无新增或更新的 Issues，仅有 1 个专注于底层数据处理性能优化的 PR 产生了新的动态。

### 2. 版本发布
- **最新 Releases**: 无。

### 3. 重点 Issues
- **最新 Issues 动态**: 过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#552 perf: avoid tensor memory copy in ppo_atari_envpool, pqn_atari_envpool, ppo_rnd_envpool, and ppo_procgen](https://github.com/vwxyzjn/cleanrl/pull/552)**
  - **作者**: [srygaard](https://github.com/srygaard)
  - **状态**: `[OPEN]` (最后一次更新于 2026-05-20)
  - **技术摘要**: 该 PR 聚焦于 PyTorch 底层的内存管理优化。作者指出，在当前的 EnvPool 和 Procgen 管线（涉及 `ppo_atari`、`pqn_atari`、`ppo_rnd` 和 `ppo_procgen`）中，处理 `envs.step()` 返回的数据时，调用 `torch.tensor()` 会在实例化时触发不必要的底层内存拷贝。
  - **优化方案**: 通过改用避免隐式拷贝的 Tensor 构造方式（如 `torch.as_tensor` 或直接张量拼接），降低环境交互步的内存分配开销和显存占用，从而提升高吞吐环境（如 EnvPool）下的整体采样效率。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前 RL 框架日益重型化、高度封装化的生态趋势下，CleanRL 始终保持着其独特的生态位：
1. **单文件实现与极致的可读性**: CleanRL 避免了复杂的面向对象抽象，将算法（如 PPO, SAC, DQN）的核心逻辑约束在单个独立文件中，是研究人员复现论文、验证基线算法以及进行底层张量级优化的最佳“沙盒”。
2. **拥抱现代化的工程标准**: 如 PR #552 所示，社区依然在持续为其注入现代 PyTorch 的高阶优化特性（如内存零拷贝、异步环境采样）。这种从底层 I/O 到张量计算的全链路优化，使得 CleanRL 不仅能用于“教学”，在结合 `envpool` 等高性能环境后，同样具备极强的工程参考价值和实验效率。
3. **透明化研究基准**: 在算法黑盒化日益严重的今天，CleanRL 提供了完全白盒、与 OpenAI Benchmark 对齐的基线表现，是排查 RL 算法玄学问题（Bug vs Feature）的可靠试金石。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 2026-05-21 强化学习（RL）开源生态日报摘要：

# RL 日报：Gymnasium 项目追踪 (2026-05-21)

### 1. 今日速览
在过去 24 小时内，[Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 仓库整体处于低活跃状态。没有新的版本发布，未产生新的 Issues，但有 2 个 Pull Requests 发生了状态更新。

### 2. 版本发布
过去 24 小时内**无**新版本发布。

### 3. 重点 Issues
过去 24 小时内**无**新创建或更新的 Issues。项目的 Bug 反馈和功能请求队列目前保持静默。

### 4. 关键 PR 进展
共有 2 条 PR 更新，均由贡献者 `aminehd` 提交，且均处于草稿或模板未完善状态：

*   **[#1583 Feature/wrapper checker](https://github.com/Farama-Foundation/Gymnasium/pull/1583) [CLOSED]**
    *   **摘要**：该 PR 旨在引入“包装器检查器”功能。目前 PR 的描述仍停留在未编辑的默认模板阶段，且在创建当天即被关闭。这可能是一个提前占位的草稿 PR，或是未满足项目提交流程要求的提议。
*   **[#1582 docs: add HalfCheetah-v5 introductory tutorial](https://github.com/Farama-Foundation/Gymnasium/pull/1582) [OPEN]**
    *   **摘要**：该 PR 旨在为 `HalfCheetah-v5` 环境添加入门教程文档。尽管 PR 描述未脱离模板格式，但从标题可以看出，社区正在推进对经典 MuJoCo 连续控制环境的 V5 版本文档完善工作。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 是当前强化学习领域的标准 API 基石。尽管日常活跃度存在波动，但类似 PR #1582 针对 `HalfCheetah-v5` 等核心环境教程的补充，表明项目正致力于降低最新标准环境（V5版本）的上手门槛。持续关注其文档和 Wrapper 机制的演进，对于保持下游 RL 算法库（如 Stable-Baselines3, CleanRL 等）的兼容性与规范化至关重要。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>