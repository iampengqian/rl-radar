# RL 开源生态日报 2026-06-18

> 生成时间: 2026-06-17 22:30 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已彻底完成从“传统游戏/控制环境”向“大语言模型（LLM）及智能体对齐”的范式转移。以 verl、TRL、slime 等为代表的开源项目，正作为核心基础设施支撑着 2026 年大模型训练的前沿探索。生态的重心不再是底层 RL 算法（如 PPO）的通用实现，而是极度聚焦于如何将 RL 与高效的推理引擎（如 vLLM、SGLang）、分布式训练框架（如 Megatron、DeepSpeed、FSDP2）以及复杂的异构算力深度融合。

## 各项目活跃度对比
从过去 24 小时的数据表现来看，大模型 RL 框架处于高度活跃的迭代期，而传统经典 RL 库则进入稳定或静默状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 9 | 30 | 0 | 高度活跃。主攻 Agentic 异步架构、软硬件解耦与生态广度拓展（AMD/昇腾）。 |
| **TRL** | 8 | 17 | 0 | 稳定迭代。集中于 AsyncGRPO 对齐、分布式底层容错及 MoE 架构适配。 |
| **slime** | 3 | 16 | 0 | 活跃。发力分离式架构下的跨集群通信与 Coding Agent 基座建设。 |
| **ROCK** | 7 | 13 | 0 | 活跃。专注 Agent 沙箱生命周期管理与大规模容器集群的底层稳定性。 |
| **AReaL** | 0 | 6 | 0 | 平稳。攻坚大规模训练下的通信阻死与极限内存/显存优化。 |
| **OpenRLHF** | 0 | 2 | 0 | 低活跃/维护期。主要修复多轮 Agent 评估工作流。 |
| **Open Instruct** | 0 | 2 | 0 | 低活跃。关注 GRPO 工程化降本与日志可复现性。 |
| **torchtune** | 0 | 1 | 0 | 静默/除错。修复影响 DPO 链路的阻塞性 Import Bug。 |
| **ROLL** | 0 | 1 | 0 | 沉寂。基本停滞，仅更新外部关联文档。 |
| **其余无活动项目** | 0 | 0 | 0 | CleanRL, Gymnasium 等传统 RL/游戏环境库过去 24h 无代码活动。 |

## 共同关注的研究与工程方向
**研究侧信号：**
*   **GRPO 及其变体成为绝对核心：** 无论是 TRL、slime 还是 Open Instruct，都在大力推进 GRPO 算法变体的适配（如 AsyncGRPO、Dr.GRPO、DAPO 等），这已成为当前 LLM 推理能力对齐的主流基线。
*   **Agentic RL 与复杂交互场景落地：** 框架正从单轮生成向多轮工具调用演进。verl（多轨迹树搜索）、slime（SWE-bench 集成）和 TRL（Harbor 环境）均在为长上下文 Coding Agent、工具调用模型提供原生 RL 训练支持。
*   **MoE（混合专家）模型的 RL 适配：** 随着前沿模型（如 Qwen3.5, DeepseekV4, Gemma4）均采用 MoE 架构，各框架均在研究侧引入 Router Aux Loss（如 TRL）或解决专家路由一致性（如 verl）。

**工程/基础设施侧信号：**
*   **异步训练与计算/通信解耦：** 为打破单步 Rollout 的等待时间，verl 和 slime 都在重构异步管线（Async Trainer / TransferQueue），这是提升千卡规模下 GPU 利用率的关键工程解。
*   **极限内存优化与跨集群通信：** 面对超大参数量，AReaL 与 slime 不约而同地推进 FP8 权重直传、增量权重同步与禁用 CPU 备份等底层优化，直击 OOM 和网络带宽痛点。
*   **端到端可复现性与可调试性：** RL 训练的“黑盒”属性正在被打破。verl 引入全确定性机制（Bitwise 对齐），AReaL 引入 Trajectory Replay，都是为了让复杂的 RL 调试过程拥有离线分析的能力。

## 差异化定位分析
*   **verl（全能型基建主导者）：** 定位为面向下一代大模型的“异构 RL 基础设施”。它不仅在死磕 Agentic 和异步管线，更在大力拓展硬件生态（华为昇腾、AMD ROCm），旨在打破单一算力与单一推理后端的耦合，是目前野心最大、迭代最猛的框架。
*   **TRL（HuggingFace 生态的极速响应者）：** 依托庞大的 HF 模型库生态，TRL 的优势在于对新架构（如 MoE 损失）和新分布式策略（DeepSpeed/FSDP2 Bug 修复）的极速兼容与响应，它是多数算法研究者尝试新模型对齐的首选轻量级/敏捷型框架。
*   **slime（云原生与分离式架构先锋）：** 其核心差异点在于“跨集群/外部弹性 Rollout 集群”的支持。slime 正在将 RL 训练推向计算存储分离、训练与推理集群彻底解耦的云原生范式，非常适合具有海量异构算力池的企业。
*   **ROCK（Agent 执行的沙箱底座）：** 它的定位与其他训练框架不同，专注于提供高隔离、高强度的环境模拟器。解决 >100KB 级 LLM 响应截断、XFS 磁盘配额、多容器拓扑问题，说明它是承载复杂 Agent 代码执行与沙盒评估的底层 PaaS 平台。
*   **AReaL（超大规模底层优化专家）：** 极度硬核，主要精力在解决分布式环境下的底层死锁（NCCL/batch_isend_irecv）、Colocated 模式下的内存墙等问题，是面向百亿/千亿级模型工业化 RL 训练的重型武器。

## 社区热度与成熟度
整个 RLHF/RLVR 生态呈现明显的**“头部集中化”**与**“工程重装配化”**特征。
verl 与 TRL 拥有最庞大的活跃 Issue 和 PR 基数，社区不仅在做 Bug 修复，更在进行大量的前沿特性预研，处于快速成长期。slime 和 ROCK 紧随其后，依靠在特定领域（如代码 Agent、云原生沙箱）的深耕维持高粘性社区。
相对地，传统 RL 库（如 CleanRL, Stable Baselines3）过去 24 小时内零活动，虽库本身已高度成熟，但在大模型时代已逐渐淡出技术决策者的核心视线。

## 值得关注的趋势信号
1.  **“打断 NVIDIA 算力垄断”成为显学：** verl 主动发布 AMD/ROCm 和华为昇腾的 Roadmap 与严重故障隔离机制，预示着未来 1 年内，异构算力集群跑 RLHF 将从“实验性质”走向“工业落地”。
2.  **训练与推理引擎的强一致性成为核心指标：** 随着 MoE 模型的普及，训练侧与推理侧（如 vLLM/SGLang）因底层算子差异导致的“Routing 不一致”引发了大量训练崩溃问题。框架（如 verl）开始引入全确定性机制，这意味着 RL 框架的护城河将部分建立在底层算子级的一致性保障上。
3.  **“算力平民化”的持续努力：** Open Instruct 引入 `use_cpu_adam` 支持算力下放，让 7B 模型的 GRPO 训练能在消费级硬件上跑通，这对于学术研究和独立开发者验证 Prompt/算法策略至关重要，预示着 RL 技术栈的门槛仍在持续降低。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 开源生态日报：ROLL (alibaba/ROLL)**
**日期**: 2026-06-18

---

### 1. 今日速览
过去 24 小时内，ROLL 仓库整体活跃度趋于平缓。无新增 Issues，无新版本发布。代码库仅有 1 项文档类型的 PR 更新并已关闭。项目目前处于稳定维护期。

### 2. 版本发布
*   **无新增 Release**。
*   *分析*: 项目近期未推送新的功能里程碑或修复补丁，主线代码保持稳定。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。
*   *分析*: 暂无社区成员报告新的 Bug 或发起技术需求讨论，社区互动较为沉寂。

### 4. 关键 PR 进展
*   **#462 [CLOSED] docs: add ROCK to careers open source projects**
    *   **作者**: [kkkky123](https://github.com/kkkky123)
    *   **更新时间**: 2026-06-17
    *   **链接**: [alibaba/ROLL PR #462](https://github.com/alibaba/ROLL/pull/462)
    *   **进展摘要**: 该 PR 属于文档更新，主要将 ROCK 项目添加至职业开源项目列表中。该 PR 已在昨日完成合并并关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 ROLL 近期代码推流较低，但作为阿里巴巴开源的强化学习框架，它在当前大模型 RLHF/RLAIF 生态中仍具有底层基建的参考价值：
1.  **工业级架构沉淀**: ROLL 专为大规模分布式强化学习设计，其在处理高吞吐量环境模拟、Actor-Learner 架构通信以及多机多卡水平扩展方面的工程实现，依然是研究大模型对齐的优质参考样本。
2.  **大厂技术链路一环**: PR #462 中提及的 ROCK 等相关项目，暗示了阿里内部在 RL 底层基础设施上的持续演进。关注 ROLL 仓库的动态，有助于技术人员洞察大型科技公司在 AI 系统工程化落地时的架构选型和组织协同模式。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 开源生态日报**
**日期**: 2026-06-18

### 1. 今日速览
过去 24 小时内，ROCK 项目代码库保持高度活跃，共产生 **7 条 Issues 更新** 和 **13 条 PR 更新**。今日的更新焦点集中在**沙箱生命周期管理、存储配额优化、多容器编排能力以及对超大型 LLM 调用的健壮性修复**。无新版本发布。

### 2. 版本发布
今日无新版本 发布。

### 3. 重点 Issues
*   **[Bug修复] 超大 LLM 响应载荷导致命令行调用失败**
    当 LLM 产生超大 Tool Call 响应（如 >100KB 的 `write` 操作）时，`anti-call-llm` 会因 shell 命令行参数长度超限而崩溃。此问题直接影响 RL 环境中 Agent 执行大规模写操作的稳定性。
    ([alibaba/ROCK Issue #1115](https://github.com/alibaba/ROCK/issues/1115))
*   **[安全修复] 镜像仓库重写时的用户凭证泄漏风险**
    在配置了镜像代理但代理本身无鉴权的情况下，用户的原始镜像仓库账号密码会被错误地透传并泄漏给 Mirror Registry。
    ([alibaba/ROCK Issue #1128](https://github.com/alibaba/ROCK/issues/1128))
*   **[特性提案] 突破 containerd 镜像存储的磁盘配额限制**
    Docker 使用 containerd 作为 image store 时不支持 `--storage-opt size=`，导致容器 RootFS 磁盘空间不受控。社区提出引入 XFS project quota 作为兜底方案，保障 RL 训练环境的磁盘隔离。
    ([alibaba/ROCK Issue #1123](https://github.com/alibaba/ROCK/issues/1123))
*   **[SDK 对齐] TypeScript SDK 补齐重启与自动清理能力**
    开发者请求在 TS SDK 中加入 `restart()` 方法和 `autoDeleteSeconds` 参数，以对齐 Python SDK 的行为，优化前端/全栈 RL 应用沙箱的生命周期管理。
    ([alibaba/ROCK Issue #1121](https://github.com/alibaba/ROCK/issues/1121))

### 4. 关键 PR 进展
*   **feat(sdk): 添加多容器 docker-compose 任务编排支持 ([PR #1080](https://github.com/alibaba/ROCK/pull/1080))**
    引入 `ComposeJobConfig` 和 `ComposeTrial`，支持在单个 DinD (Docker-in-Docker) 沙箱中运行由主容器、Sidecar 和 Init 容器组成的复杂拓扑。对于需要复杂依赖隔离的 RL 环境模拟具有重要意义。
*   **feat(archive): 沙箱存档与恢复生命周期大模型融合 ([PR #1095](https://github.com/alibaba/ROCK/pull/1095), [PR #1094](https://github.com/alibaba/ROCK/pull/1094))**
    将 Archive (归档) 状态深度集成到沙箱状态机中（包含 pending, running, stopped, archiving, archived, deleted 6 种状态），并定义了基于 S3/OSS 和 Docker Registry V2 的标准化底层存储接口。
*   **feat(deployments): XFS 项目级别配额兜底机制落地 ([PR #1124](https://github.com/alibaba/ROCK/pull/1124))**
    对应 Issue #1123，通过动态检测容器的 overlay UpperDir 并应用 `xfs_quota`，强制对 containerd image store 模式下的容器进行硬磁盘限制。
*   **fix(model-service): 基于文件传输重构 anti-call-llm 大载荷处理 ([PR #1116](https://github.com/alibaba/ROCK/pull/1116))**
    快速修复了 Issue #1115，将原先通过命令行参数传递超大 JSON 响应的方式改为基于文件的传输，彻底解决参数过长引发的崩溃问题。
*   **fix(admin): 强制重写镜像仓库凭证 ([PR #1129](https://github.com/alibaba/ROCK/pull/1129))**
    修复了凭证透传泄漏漏洞，确保在镜像镜像重写时安全地重置鉴权信息。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的开发动态可以看出，ROCK 正在解决**大模型与强化学习底层工程化中的几个“硬骨头”**：
1.  **应对 Agent 长上下文与复杂输出**：针对 >100KB 的 LLM 响应导致系统调用的 OOM/Bug，说明 ROCK 在真实承载高强度、长上下文的 LLM Agent 交互（如代码生成、长文本写入）时，展现了深水区的工程挑战，且团队响应极快。
2.  **企业级 RL 基础设施成型**：Sandbox 状态机的细化（引入归档/恢复生命周期）和多容器拓扑支持（ComposeJob），意味着 ROCK 正在从一个简单的运行环境，向具备完整数据留存、复杂环境拓扑的企业级 RL PaaS 平台演进。
3.  **云原生环境的极致适配**：主动发现并解决 containerd 镜像存储模式下的磁盘配额失效问题（XFS Quota 兜底），证明该项目极其注重多租户/集群环境下的资源隔离与安全性。对于需要大规模部署 RL 训练节点的团队而言，这种底层稳定性至关重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 强化学习开源生态 2026-06-18 日报摘要：

### 1. 今日速览
过去 24 小时内，slime 仓库共更新 **16 个 Pull Requests**（其中多项核心功能增强与 Bug 修复）和 **3 个 Issues**。项目无新版本发布。当前社区与开发者的核心焦点高度集中在：**大模型异步强化训练机制**、**跨集群/外部部署的权重高效同步**、**Coding Agent RL 轨迹评估**，以及针对 **Qwen3 等 MoE 架构的兼容性修复**。

### 2. 版本发布
无（无新增 Release）。

### 3. 重点 Issues
社区今日反馈的问题直击大模型分布式训练的痛点：

*   **[#2091](https://github.com/THUDM/slime/issues/2091) | [bug] slime-v0.3.0 跑 Qwen3.6 35B A3B 出现 Rollout 乱码**
    *   **摘要**：开发者在 v0.3.0 版本运行 35B MoE 模型时，第二次 rollout 生成乱码。排查表明，问题极可能由新版配套的推理镜像 `slimerl/sglang:v0.5.12.post1-cu129` 引起，降级至 v0.5.9 镜像后恢复正常。这暴露了最新 RL 训练框架与前沿 Inference Engine 之间存在的兼容性回归。
*   **[#1305](https://github.com/THUDM/slime/issues/1305) | ncclUnhandledCudaError (8xH800)**
    *   **摘要**：在 8 卡 H800 环境下跑官方 Qwen3-30B-A3B 示例，不到 10 步即触发 NCCL/CUDA 999 "unknown error"。这是大规模分布式 RL 训练中典型的底层通信与显存溢出/状态失效问题。
*   **[#1971](https://github.com/THUDM/slime/issues/1971) | [RFC] 引入 TransferQueue 作为训练数据面**
    *   **摘要**：提议将 TransferQueue 集成为 RL 训练的可选数据面，用于解耦 rollout 数据传输、组件消费及清理。反映了大规模 RL 对高吞吐、低阻塞 I/O 架构的强烈需求。

### 4. 关键 PR 进展
今日的 PR 展现了 slime 在底层训练机制和前沿应用场景上的快速演进：

**🚀 核心训练机制与架构升级**
*   **[#2089](https://github.com/THUDM/slime/pull/2089) | 磁盘级增量权重同步**
    *   **进展**：支持在跨集群（非同构部署）训练/推理同步时，仅传输发生改变的 Tensor Delta（增量字节），而非完整 checkpoint。极大优化了分离式 RL 架构的权重下发带宽瓶颈。
*   **[#2071](https://github.com/THUDM/slime/pull/2071) | 外部弹性 Rollout 端点与单向权重同步**
    *   **进展**：打破框架自身管理推理后端的假设，允许 slime 针对外部弹性、自管理的推理集群进行训练。这对于按需扩缩容 GenAI 推理算力具有重要意义。
*   **[#2090](https://github.com/THUDM/slime/pull/2090) | 新增 `--loss-aggregation` 支持 ScaleRL 四种聚合模式**
    *   **进展**：重构 `pg_loss` 聚合逻辑，原生支持 DAPO (按 prompt 组平均)、Dr.GRPO (常数除法) 等不同 RL 配方，提升了框架对不同前沿 RL 算法的兼容性。
*   **[#2092](https://github.com/THUDM/slime/pull/2092) | 修复全异步 Rollout 的中断重排逻辑**
    *   **进展**：修复了 `fully_async_rollout` 模式下，ABORTED 样本组无视 `partial_rollout=False` 标志被无条件重新入队的违约 Bug，保障了异步训练的数据一致性。

**🤖 Coding Agent 与前沿模型支持**
*   **[#2079](https://github.com/THUDM/slime/pull/2079) | 添加 SWE-bench harness 评估路径**
    *   **进展**：在 `coding_agent_rl` 的沙箱评估中引入 SWE-bench Verified 官方评估机制。表明 slime 正在成为 Agent RL（尤其是代码智能体）的重要训练基座。
*   **[#2063](https://github.com/THUDM/slime/pull/2063) | 修复 OpenAI tool-call 参数渲染映射**
    *   **进展**：修复 OpenAI HTTP 适配器中 tool-call arguments 的结构化映射，确保其能被正确套用 chat_template，提升工具调用智能体的训练稳定性。
*   **[#1855](https://github.com/THUDM/slime/pull/1855) | 支持 Gemma4 26B-A4B MoE 与 31B Dense 模型**
    *   **进展**：全面引入 Gemma4 架构支持，包含 HF↔Megatron 权重转换，且通过了 TP/PP/DP/CP/EP 等多维度的并行对齐测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻克分离式/异步 RL 架构的工程壁垒**：通过 PR [#2089](https://github.com/THUDM/slime/pull/2089)（磁盘级增量同步）和 [#2071](https://github.com/THUDM/slime/pull/2071)（外部弹性 Rollout 集群），slime 正在从“单机/集群内紧耦合”走向“云原生、计算存储分离、跨集群弹性”的 RL 训练范式。这代表了超大规模 LLM 训练工程的最前沿方向。
2.  **从 Chat 模型迈向 Agentic RL 基座**：通过密集的 SWE-bench 评测集成（[#2079](https://github.com/THUDM/slime/pull/2079)）、TrajectoryManager 重构（[#2005](https://github.com/THUDM/slime/pull/2005)）以及原生的 tool-call 修复（[#2063](https://github.com/THUDM/slime/pull/2063)），slime 不仅是一个 PPO/GRPO 算法库，正在演化为复杂的、多轮交互的代码智能体强化学习标准设施。
3.  **对前沿 Open-Source 模型的极速响应**：无论是处理 Qwen3 MoE 的大规模适配痛点（Issue [#2091](https://github.com/THUDM/slime/issues/2091)），还是抢先提供对 Gemma4 MoE 架构的全面并行支持（PR [#1855](https://github.com/THUDM/slime/pull/1855)），都证明了该框架在底层算子兼容性上的极强生命力。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 强化学习开源生态日报摘要。

# AReaL RL 生态日报 (2026-06-18)

## 1. 今日速览
过去 24 小时内，AReaL 仓库动态平稳。无新增 Issues 和版本发布，但有 **6 个核心 PR 更新**。整体技术演进呈现出明显的趋势：**极限优化大模型训练的显存/内存占用**（Megatron FP8 传输、梯度缓冲区优化）、**提升分布式调度的鲁棒性**（Ray 调度器与 AWEX 通信阻死修复），以及**增强算法训练链路的可调试性**（轨迹 Dump/Replay 机制）。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **无 Issue 更新**。当前社区反馈相对沉寂，研发重心集中在底层代码的合并与重构。

## 4. 关键 PR 进展
今日的 6 个 PR 更新涵盖底层性能优化、通信机制修复与文档建设：

- **大模型与算法新特性支持**
  - **[PR #1424](https://github.com/areal-project/AReaL/pull/1424)** `[docs]`：在 README 和算法文档中新增 IcePop/KPop 算法及配置的介绍，主要面向数学与推理（Math & Reasoning）场景，丰富了 GRPO 算法系列生态。
  - **[PR #1406](https://github.com/areal-project/AReaL/pull/1406)** `[feat]`：在 AWEX 混部模式下支持 Megatron FP8 权重直接传输。通过 `fp8_direct_convert=True` 避免了到 BF16 的隐式反量化，显著降低通信带宽占用并维持精度一致性。
  - **[PR #1161](https://github.com/areal-project/AReaL/pull/1161)** `[feat(infra)]`：引入 `RayHTTPLauncher` 以支持通过 RayScheduler 代理服务器，优化了 Actor 的 fork 与 launch 机制。（注：此 PR 处于 stale 并已被 review，即将合并或挂起）。

- **系统性能与内存极限优化**
  - **[PR #1393](https://github.com/areal-project/AReaL/pull/1393)** `[feat]`：允许在 MegatronEngine 配置中关闭梯度缓冲区的 CPU 备份。在显存卸载期间跳过这一步可为宿主机节省约 4 倍的内存开销，极大缓解了 Colocated Training 下的内存瓶颈。

- **系统鲁棒性与调试能力增强**
  - **[PR #1414](https://github.com/areal-project/AReaL/pull/1414)** `[fix(awex)]`：修复大量 ops 使用单一 group 导致 `torch.distributed.batch_isend_irecv` 挂死的问题。新增 `AWEX_WU_USE_GROUP` 环境变量，允许回退到 per-op 的发送/接收机制，解决分布式死锁痛点。
  - **[PR #1407](https://github.com/areal-project/AReaL/pull/1407)** `[feat]`：实现轨迹转储与重放功能。通过将 rollout batch 序列化到磁盘并离线重放，实现了生成与梯度更新的解耦，填补了 RL 训练循环难以离线 Debug 的工具空白。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在攻坚 RLHF/RL 训练框架中最棘手的几个工程痛点：
1. **直面超大模型 RL 训练的显存/内存墙**：通过禁用无用 CPU 备份（#1393）和支持 FP8 权重直传（#1406），AReaL 显然在为百亿/千亿参数模型的高效 RL 微调铺路。
2. **解决底层分布式死锁问题**：针对大规模分布式训练中极易出现的 `batch_isend_irecv` 阻死问题提供了优雅的降级方案（#1414），体现了其在网络通信层的实战深耕。
3. **填补 RL 开发者体验空白**：将在线推理与梯度更新解耦的 Trajectory Replay 机制（#1407），对于复杂奖励模型和算法bug的排查具有极高的实际工程价值。
这表明 AReaL 不仅在跟进 SOTA 算法（如 IcePop/KPop），更在以极客的态度解决工业级大规模 RL 训练的底层瓶颈，是值得深度追踪的基础设施级项目。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-06-18 TRL（Hugging Face）RL 日报摘要：

# 🤗 TRL 强化学习生态日报 (2026-06-18)

### 1. 今日速览
- **Issues 动态**：过去 24 小时共有 8 条 Issue 更新，社区讨论热度回暖，多集中于历史 GRPO 机制和底层分布式训练 Bug 的彻底修复与关闭。
- **PR 进展**：17 条 PR 发生状态变更。核心开发者（@qgallouedec, @albertvillanova 等）正密集推进 **AsyncGRPO 与标准 GRPO 的指标/配置对齐**，并紧急修复了由 DeepSpeed 0.19.2 引入的 CI 阻断问题。
- **版本发布**：过去 24 小时无新版本发布（0 Releases）。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
今日处理的 Issue 深度聚焦于大模型强化学习的工程实现细节与算法逻辑：

*   **[BUG] DeepSpeed ZeRO-3 分布式冒烟测试失败 ([#6089](https://github.com/huggingface/trl/issues/6089))**
    *   **摘要**：由于 `deepspeed` 依赖库的底层更新，导致 ZeRO Stage 3 配合 PEFT (LoRA) 训练时抛出 `TypeError`，直接阻断了当前的 CI 流水线，已成为今日高优修复项。
*   **[BUG] GRPO 梯度裁剪失效 ([#3312](https://github.com/huggingface/trl/issues/3312))** `[CLOSED]`
    *   **摘要**：使用 Accelerate + DeepSpeed ZeRO-3 进行分布式 GRPO 训练时，设置了 `max_grad_norm` 但实际打印的梯度范数依然大于设定值。该历史问题已得到确认并关闭。
*   **[讨论] GRPO 中针对单一 completion 的多次策略更新 ([#3197](https://github.com/huggingface/trl/issues/3197))** `[CLOSED]`
    *   **摘要**：针对 PPO/GRPO 算法中 `num_iterations` 在同一批次数据上多次优化是否合理（偏离原始 PPO 论文约束）的深度探讨。此类算法层面的思辨对 RL 底层优化器的迭代至关重要。
*   **[BUG] `bf16` 配置阻止 FP8 训练 ([#3860](https://github.com/huggingface/trl/issues/3860))** `[CLOSED]`
    *   **摘要**：在开启 FP8 混合精度时，内部 `__post_init__` 逻辑强制将 `self.bf16` 置为 `True` 导致冲突。此修复清除了显存优化路径上的阻碍。

---

### 4. 关键 PR 进展
今日的 PR 更新反映了 TRL 在**分布式容错**、**异步强化学习**和**MoE 架构支持**上的快速演进：

*   **CI 热修复与分布式底层优化**
    *   **Hotfix CI: 限制 deepspeed 版本 ([#6090](https://github.com/huggingface/trl/pull/6090))** `[CLOSED]`：临时将 `deepspeed` 锁定在 `< 0.19.2` 以修复 CI 挂死。
    *   **修复 ZeRO-3 + PEFT 混合精度 TypeError ([#6091](https://github.com/huggingface/trl/pull/6091))**：根因在于新版 DeepSpeed 改变了 `_configure_distributed_model` 的 dtype 处理逻辑，此 PR 彻底解决了 Issue #6089。
    *   **优化 FSDP2 下 `chunked_nll` 性能 ([#6077](https://github.com/huggingface/trl/pull/6077))**：在分块计算交叉熵前一次性调用 `full_tensor()` 聚合 `lm_head.weight`，避免了循环内的重复通信，显著提升 FSDP2 性能。
    *   **兼容非 Ampere 架构测试 ([#6036](https://github.com/huggingface/trl/pull/6036))**：移除测试用例中对 `bf16=True` 的硬编码，使 TRL 能在 T4 或 CPU 等旧设备上顺利跑通。

*   **异步强化学习 对齐标准 GRPO**
    *   开发者 @qgallouedec 提交了一系列 PR，致力于让 AsyncGRPO 拥有与标准 GRPO 完全一致的体验：
        *   **对齐 Clip 比率指标 ([#6021](https://github.com/huggingface/trl/pull/6021))**：统一剪裁比率的日志记录行为，根据优势函数符号进行门控。
        *   **统一打印参数 ([#6020](https://github.com/huggingface/trl/pull/6020))**：对齐 `num_completions_to_print` 类型逻辑。
        *   **统一 Epsilon 参数 ([#6019](https://github.com/huggingface/trl/pull/6019))**：统一 PPO 剪裁上限 `epsilon_high` 的默认回退行为。

*   **功能增强：MoE 支持与环境交互**
    *   **为 GRPO/RLOO 引入 MoE 辅助损失 ([#6083](https://github.com/huggingface/trl/pull/6083))** `[CLOSED]` & **添加 `router_aux_loss_coef` ([#6085](https://github.com/huggingface/trl/pull/6085))**：将 SFT 中的 MoE (Mixture of Experts) 负载均衡损失成功移植到 RL 训练器中，针对目前日益流行的大参数 MoE 模型 RL 微调提供原生支持。
    *   **GRPO 感知打包的动态批处理 ([#6092](https://github.com/huggingface/trl/pull/6092))**：在无填充训练路径上实现 Token 边界的动态微批次划分，提升训练吞吐量。
    *   **引入 Harbor 环境训练集成 ([#6018](https://github.com/huggingface/trl/pull/6018))**：通过 `environment_factory` 实验性接入 Harbor Agentic 任务套件，标志着 TRL 在 Agent RL 领域的进一步探索。
    *   **DiffusionGemma SFT 示例 ([#6003](https://github.com/huggingface/trl/pull/6003))**：添加了基于块扩散模型的 SFT 配方，拓宽了训练框架的模型边界。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **前沿架构的极速适配**：从今日密集的 PR 可以看出，TRL 对 DeepSpeed ZeRO-3、FSDP2、以及 **MoE (混合专家) 负载均衡损失**的响应速度极快。当前 RL 训练成本高昂，TRL 是极少数能在分布式底层为大参数/MoE 模型铺路的框架。
2.  **紧跟前沿 RL 算法迭代**：不仅维护经典的 PPO/DPO，框架正在深度重构 **AsyncGRPO（异步 GRPO）**，并通过 Harbor 集成探索 **环境交互式强化学习**，这是解决大模型复杂推理和 Agent 任务的核心技术栈。
3.  **工程严谨度极高**：面对上游库（如 DeepSpeed 0.19.2）的突发性破坏更新，维护者能在 24 小时内完成“临时降级 -> 提出根本性修复 PR -> 重构测试”的闭环，确保开源社区研究工作流的稳定性。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**OpenRLHF RL 生态日报 (2026-06-18)**

**1. 今日速览**
过去 24 小时内，OpenRLHF 仓库无新增 Issues 和版本发布，PR 活动数为 2 条。项目当前处于稳定维护与边缘 Bug 修复阶段，开发者主要关注多轮智能体工作流中的评估限制解除以及底层 GPU 挂起问题的排查。

**2. 版本发布**
*   **无新版本发布**。过去 24 小时内未产生新的 Release。

**3. 重点 Issues**
*   **无活跃 Issue**。过去 24 小时内无新建或更新的 Issue。

**4. 关键 PR 进展**
今日共有 2 个已关闭（CLOSED）的 PR 更新，重点集中在执行逻辑修复与底层稳定性排查：

*   **[PR #1251] [CLOSED] 修复 MultiTurnAgentExecutor 无法使用 `eval_dataset` 的问题**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1251](https://github.com/OpenRLHF/OpenRLHF/pull/1251)
    *   **作者**: codewithyug06
    *   **技术摘要**: 修复了 `train_ppo_ray.py:673` 处的断言限制。原逻辑在缺失 `--remote_rm_url` 时会直接阻断 `--eval_dataset`，导致基于 `--agent_func_path` 的 `MultiTurnAgentExecutor` 工作流无法在训练过程中进行评估。该 PR 放宽了条件判定，允许在提供 `--remote_rm_url` 或 `--agent_func_path` 时均可正常执行评估。

*   **[PR #1245] [CLOSED] GPU 挂起问题排查**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1245](https://github.com/OpenRLHF/OpenRLHF/pull/1245)
    *   **作者**: jun-amd
    *   **技术摘要**: 针对 RLHF 分布式训练中出现的 GPU Hang（挂起）异常进行的排查与处理。该 PR 目前已关闭。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **深度契合 Agentic RL 需求**: 从 PR #1251 可以看出，OpenRLHF 正在积极完善其多轮智能体执行器的工作流，通过解耦 RM URL 与 Agent Func 的依赖，使其能更好地适应当前大模型向 Agent 和复杂环境交互演进的技术趋势。
*   **直击大规模分布式训练痛点**: 项目持续接收并跟进如 GPU Hang（PR #1245）等底层工程问题。在 RLHF 训练极度消耗算力的当下，OpenRLHF 基于 Ray 等架构的稳定性打磨与排错能力，是其在开源社区保持核心技术壁垒的关键。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-06-18 RL 生态日报摘要：

# verl RL 生态日报 (2026-06-18)

## 1. 今日速览
过去 24 小时内，verl 社区保持极高活跃度，共更新 **9 条 Issues** 和 **30 条 PRs**（无新版本 Release）。今日的技术焦点高度集中在**Agentic Rollout（智能体多轮交互）机制完善**、**新型异构硬件支持（华为 Ascend 与 AMD ROCm）**，以及对**下一代大模型（Qwen3.5, DeepseekV4 等）的适配与底层工程优化（FSDP2/Megatron）**。

## 2. 版本发布
- **无新版本发布 (0 releases)**。目前社区代码处于高频迭代期，大量核心特性（如异步 Trainer、动态 CP）正在通过 PR 持续合入主干。

## 3. 重点 Issues
- **[MoE 训练稳定性] 是否计划支持 Routing Replay？** ([#3762](https://github.com/verl-project/verl/issues/3762))
  - **核心痛点**：在 RLVR 场景下，由于训练引擎与推理引擎（如 vLLM）底层计算差异，导致 MoE 模型的 Router 输出不一致，进而影响专家选择引发训练崩溃。这是目前 RL 训练 MoE 模型的核心痛点，获得了 17 个 👍。
- **[Qwen3.5 适配 Bug] 使用 vLLM 无法训练 Qwen3.5** ([#6563](https://github.com/verl-project/verl/issues/6563))
  - 暴露出 verl 在兼容最新一代模型（结合 vLLM 0.20.2）时仍存在边缘 Bug。
- **[FSDP2 OOM] 权重同步期间 CPU 内存泄漏** ([#6468](https://github.com/verl-project/verl/issues/6468))
  - 在使用 FSDP2 同步 Rollout 权重时，CPU 内存持续增加最终导致 Ray OOM，阻塞了大规模 FSDP2 训练。
- **[硬件生态 Roadmap] verl on AMD/ROCm 26Q2/Q3 路线图** ([#6590](https://github.com/verl-project/verl/issues/6590))
  - 官方发布了针对 AMD/ROCm（包括 MI355X）的支持路线图，显示出 verl 彻底打破 NVIDIA 算力垄断的决心。
- **[社区活动] verl x 昇腾 Meetup 预告** ([#6783](https://github.com/verl-project/verl/issues/6783))

## 4. 关键 PR 进展
今日有大量硬核底层优化 PR 推进，重点分为以下几个技术方向：

**🤖 Agentic RL 与异步训练突破**
- **单次 Rollout 支持多轨迹输出** ([#5443](https://github.com/verl-project/verl/pull/5443) 已合入, [#6271](https://github.com/verl-project/verl/pull/6271) 已合入)：为 Agent Loop 支持了多轨迹输出，极大增强了树搜索/多路探索的 RL 训练能力。
- **Agentic Rollout 引入 Continuous Token** ([#6779](https://github.com/verl-project/verl/pull/6779))：为多轮 Agentic rollout 引入了通用的连续 Token 机制，确保多轮对话中的 Token 传递连续性。
- **可运行的独立异步 Trainer** ([#6790](https://github.com/verl-project/verl/pull/6790) 已合入)：将 Trainer 彻底解耦异步化，为 Fully-async 管线打下基础。
- **解阻塞视觉处理** ([#6789](https://github.com/verl-project/verl/pull/6789) 已合入)：将 `process_vision_info` 卸载到线程池，解决了 VLM Agent 循环中的事件阻塞问题。

**⚙️ 引擎与底层机制优化**
- **vLLM Rollout 与奖励模型的全确定性支持** ([#6572](https://github.com/verl-project/verl/pull/6572))：实现端到端训练的可复现性（两次独立运行产出 bitwise 对齐的 reward 曲线），对 RL 算法的严谨debug至关重要。
- **引入 Prefix-tree MAGI Attention** ([#6689](https://github.com/verl-project/verl/pull/6689))：为 verl SFT 和 GRPO 引入前缀树共享前缀去重机制，大幅优化长上下文/多轮共享 Prompt 的算力开销。
- **动态上下文并行** ([#6555](https://github.com/verl-project/verl/pull/6555))：为长文本 RL 场景添加了动态 CP 支持。

**🖥️ 硬件后端与最新模型支持**
- **昇腾 严重故障隔离与解耦重构** ([#6777](https://github.com/verl-project/verl/pull/6777))：重构了 NPU patches，改变了此前“一个模型报错导致全盘崩溃”的导入机制，提升了异构计算的代码健壮性。
- **支持最新一代 Mega 模型** ([#6791](https://github.com/verl-project/verl/pull/6791))：通过 Megatron Lite 后端，新增了对 DeepseekV4、GLM5、KimiK2.5 的训练支持。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在从一个“好用的 RL 训练框架”进化为**“面向下一代大模型（Agentic、MoE、VLM）的异构 RL 基础设施”**。
1. **死磕 Agentic RL 核心痛点**：近期高频合入的 Multi-trajectory、Continuous Token 和 Async Trainer PR，证明 verl 正在把复杂的 Agent 环境交互与异步解耦做到极致，这是其他 RL 框架目前欠缺的。
2. **直面工业级落地难题**：社区高度重视计算引擎（推理与训练）间的一致性问题（MoE Routing Replay #3762、Full Determinism #6572）。这种对“可复现性”和“内存泄漏/OOM”的零容忍，是框架走向大规模商用的标志。
3. **全方位打破硬件生态壁垒**：从深耕华为 Ascend 到规划 AMD ROCm 路线图，verl 正积极摆脱单一 GPU 生态的限制，为全球开发者在不同算力集群上跑通 RLHF/RLVR 提供了唯一且可靠的解法。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-06-18 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度较低，无新增 Issues 或版本发布。核心动态集中在代码库的稳定性修复上：社区贡献者提交了一个关键 PR，专门修复了导致 Mitra DPO 模块在导入时发生崩溃的 `NameError`。

### 2. 版本发布
*   **无新增版本发布**（数据统计区间：2025-06-17 至 2026-06-18）。
*   *项目 Release 页面*：[pytorch/torchtune/releases](https://github.com/pytorch/torchtune/releases)

### 3. 重点 Issues
*   **无新增或更新的 Issues**。过去 24 小时内社区反馈与追踪系统处于静默状态。
*   *项目 Issues 页面*：[pytorch/torchtune/issues](https://github.com/pytorch/torchtune/issues)

### 4. 关键 PR 进展
*   **PR #2966 [OPEN] [CLA Signed, meta-exported] Fix NameError in torchtune rlhf/loss/dpo.py from missing imports**
    *   **作者**: wjh70301-meta
    *   **链接**: [GitHub PR #2966](https://github.com/pytorch/torchtune/pull/2966)
    *   **技术摘要**: 这是一个阻塞性的 Bug 修复。`torchtune/rlhf/loss/dpo.py` 文件中在定义 `T = TypeVar("T", bound=dataclass)` 时，未能在文件顶部导入 `dataclass` 和 `TypeVar`。这会在导入阶段直接触发 `NameError: name 'TypeVar' is not defined`。
    *   **影响面**: 该缺陷直接切断了所有内部依赖 `torchtune.rlhf.loss.DPOLoss` 的 Mitra DPO 单元测试和下游训练链路。此 PR 补齐了缺失的导入，恢复了 DPO（Direct Preference Optimization）损失计算模块的正常可用性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **DPO/RLHF 链路的直接参与者**：虽然日常更新频率有起伏，但 torchtune 依然是为 PyTorch 生态提供原生大模型微调支持的基石项目。DPO（直接偏好优化）是目前替代传统 PPO 进行对齐（Alignment）的主流轻量级 RLHF 方案，对 DPO 核心模块（如 `rlhf/loss`）的快速修复体现了项目维护对齐训练链路稳定性的重视。
*   **系统级可复现性**：由 Meta 内部主导（带有 `meta-exported` 标签）并与 Mitra（Meta 内部测试/基准框架）深度绑定，torchtune 的代码迭代直接反映了工业界在大规模 RL/LLM 训练中的实际工程需求。对于需要在本地复现 SFT+DPO 流水线的研究者和工程师而言，它是必备的基础设施组件。
*   **代码库的敏捷性**：如今日的 PR 所示，开源社区与内部团队之间的联动（如快速同步并修复阻塞性的 Import 错误）依然紧密运转，保持了其作为可靠 RLHF 基座库的地位。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 强化学习（RL）生态项目日报摘要。

# Open Instruct RL 日报 (2026-06-18)

**数据源:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issues、无新版本发布，但有 **2 个关键 PR** 迎来了更新。更新焦点高度集中于 **GRPO (Group Relative Policy Optimization) 算法的工程化优化**，包括日志配置完善与显存/计算资源的降本增效。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **无活跃 Issue 更新**（0 条）。

### 4. 关键 PR 进展

*   **[OPEN] PR #1727: 修复 W&B 标签长度限制并完善 GRPO 配置日志**
    *   **作者:** mnoukhov
    *   **更新时间:** 2026-06-17
    *   **技术摘要:** 针对实验追踪工具 W&B 进行了两项工程修复。引入 `extra_tags` 参数处理 W&B 64 个字符的标签长度限制（自动截断前置标签）；同时完善了日志系统，确保所有 GRPO 配置参数都能被正确记录，提升强化学习实验复现性和可追溯性。
    *   **链接:** [allenai/open-instruct PR #1727](https://github.com/allenai/open-instruct/pull/1727)

*   **[OPEN] PR #1654: 为 GRPO 添加 use_cpu_adam CLI 开关及 Offload 校验**
    *   **作者:** Bhavyashah20
    *   **更新时间:** 2026-06-17
    *   **技术摘要:** 旨在解决 7B 模型 GRPO 训练高达 40-80GB VRAM 的硬件痛点。新增 CLI 命令行开关，允许一键将硬编码的 `torch.optim.AdamW` 切换为 `DeepSpeedCPUAdam`。该 PR 结合 CPU Offload 校验，使得算力受限的研究者无需修改源码即可在消费级或小型硬件上跑通 GRPO 训练。（关联 Issue: #1031）
    *   **链接:** [allenai/open-instruct PR #1654](https://github.com/allenai/open-instruct/pull/1654)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前以算法迭代为主的 RLHF/RLAIF 生态中，Open Instruct 持续在**底层工程优化**和**硬件平民化**方向发力。
1.  **紧跟前沿 RL 算法底座：** 连续两个活跃 PR 均围绕 GRPO 展开，表明项目组正快速跟进并适配当前社区热度极高的算法（如 DeepSeek 提出的 GRPO），保障开源生态的技术前沿性。
2.  **打破算力壁垒：** PR #1654 中对 `DeepSpeedCPUAdam` 的集成和 ZeRO Offload 的支持，大幅降低了 7B 级别模型 RL 训练的显存门槛，这对于独立研究者和中小型实验室验证 RL 策略至关重要。
3.  **注重 MLOps 实践：** PR #1727 对 W&B 实验追踪的严谨修复，反映了该项目对大规模 RL 训练中超参数管理和实验可复现性的高标准要求。

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

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>