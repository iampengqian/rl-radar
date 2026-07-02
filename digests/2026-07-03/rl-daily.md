# RL 开源生态日报 2026-07-03

> 生成时间: 2026-07-02 22:19 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态正呈现出明显的分层与演化趋势。以 TRL、verl、AReaL、slime 为代表的核心基础设施，正全面向大语言模型（LLM）及多模态模型的后训练（Post-training）与偏好对齐（RLHF/RLAF）倾斜。另一反面，以 Gymnasium、PettingZoo、Tianshou、rl_games 为代表的传统单/多智能体 RL 基座库则进入极度稳定期，主要维护 API 标准与底层依赖的现代化。

整个生态的重心已从“算法实现”转移到了“异构算力调度、分布式显存优化、高效推理引擎接入以及沙箱环境隔离”等硬核系统工程层面。大模型强化学习的工程壁垒正在急剧变高，开源项目正在通过极速迭代来填平这些工程鸿沟。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 8 | 54 | 0 | 深度重构期，聚焦 DPO/KTO 架构统一与 Agentic RL 数据流简化 |
| **verl** | 21 | 21 | 0 | 底层大爆发，重点攻坚全异步训练、跨集群通信及国产昇腾 NPU 适配 |
| **slime** | 2 | 9 | 0 | 死磕底层 I/O 与通信，推进 P2P 权重同步与跨集群非共存架构 |
| **AReaL** | 1 | 8 | 0 | 集中火力修复超大模型分布式训练的底层通信死锁与显存精度 Bug |
| **ROCK** | 3 | 6 | 0 | 强化 Agent 基础设施，升级高并发沙箱管理与内核级安全隔离 |
| **Gymnasium** | 2 | 3 | 0 | 底层依赖激进跟进（强制 NumPy 2.0+），严抓教程与实验复现严谨性 |
| **PettingZoo** | 1 | 1 | 0 | 维持多智能体 API 基石地位，发力环境渲染资源的社区共建 |
| **rl_games** | 0 | 1 | 0 | 严修 SAC 等连续控制算法在 Autoreset 环境下的数据边界 Bug |
| **Tianshou** | 1 | 0 | 0 | 代码静默，团队正蓄力筹备大版本更新与文档系统重构 |
| **OpenRLHF** / **CleanRL** / 等 | 0 | 0 | 0 | 过去 24h 无活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
*   **Agentic RL 与多模态交互成为绝对主角**：各核心框架正迅速超越单轮文本 prompt。verl 扩展了 AgentLoop 对多模态连续 Token 的支持；slime 加固了 SWE coding-agent 的沙盒评分协议；TRL 直接允许环境侧接管 Reward 计算，均表明基于环境交互的多步智能体训练已全面落地。
*   **前沿模型与算法变体的快速对齐**：verl 引入了反向 KL 散度的在线策略蒸馏（OPD）与全异步蒸馏架构；AReaL 和 slime 第一时间适配了 Qwen3.x 系列模型（Dense 及 MoE 架构）的 GRPO 训练，甚至支持多 Token 预测（MTP）。

**工程/基础设施侧信号：**
*   **分离式架构与底层 I/O 压榨**：随着模型参数飙升，单机共存已达极限。verl、AReaL 和 slime 均在解耦训练与推理，通过全异步架构、P2P shard 同步、Disk-level delta 权重更新及 Mooncake RDMA 传输，疯狂压榨跨节点通信的带宽与延迟极限。
*   **算力异构化与国产化算力适配**：对底层算子的定制不再局限于 NVIDIA。verl 密集提交了 6 个以上针对华为昇腾 NPU 的适配 PR（包括 Triton GDN 算子和 FSDP2 稳定性修复），展现出拓宽硬件护城河的战略意图。
*   **Agent 执行环境的安全隔离与高并发**：针对大规模 RL 任务“起环境”的性能衰减，以 ROCK 为代表的项目正在引入 uvloop 提升单机异步吞吐，并对接 gVisor/Kata 等强隔离沙箱保障代码执行的系统级安全。

## 差异化定位分析

*   **TRL (HuggingFace)**：定位为**大模型对齐算法的高层封装与统一标准**。它的核心价值在于算法库（DPO/KTO/GRPO）的工业化重构与生态（PEFT, vLLM, Liger kernel）无缝胶水，适合需要快速实验各类对齐策略的开发者。
*   **verl (字节) & slime (清华) & AReaL (蚂蚁)**：这三者定位为**全能型/超大规模后训练基础设施**。它们不约而同地深入 Megatron/SGLang/vLLM 底层，解决百亿/千亿参数模型在千卡集群上的分布式训练痛点（显存切分、权重传输、异构算力）。差异在于 slime 极致追求通信带宽优化，verl 极大扩展了多模态与 NPU 的支持面，而 AReaL 高度专注于新的 ControlV2 架构调优。
*   **ROCK (阿里)**：定位为**Agent/RL 专用的并发环境调度器与安全沙箱**。它填补了上层 RL 算法与底层 OS 级容器编排之间的空白，专注于解决“高并发起环境”和“代码执行防逃逸”。
*   **Gymnasium / PettingZoo / Tianshou / rl_games**：定位为**经典控制与多智能体 RL 的底层基石**。在 LLM 时代，它们依然为具身智能、机器人连续控制提供最严谨的数据流（Replay Buffer 边界处理）和 API 标准，远离大模型分布式训练的硝烟，追求极致的可靠性与规范化。

## 社区热度与成熟度

*   **高频迭代与高容错（verl, TRL）**：这两个项目每日维持着极高的 Issue 交互量和 PR 合并率。TRL 展现了极高的工程纪律（对低收益代码零容忍，算法全面对齐）；verl 则吸引了大量围绕国产算力和新型硬件的深度讨论，表明其在工业界大规模落地中经受着真实考验。
*   **核心代码高度稳固（Gymnasium, rl_games, Tianshou）**：这些项目的活跃度趋于平稳，但每一条 PR（如 rl_games 修复 SAC autoreset，Gymnasium 废弃 NumPy 1.x）都直击底层核心逻辑。这表明项目已高度成熟，进入“抠细节、保严谨”的长尾维护期，社区基础极其坚实。
*   **前沿探索期的阵痛（slime, AReaL）**：社区讨论直接命中系统级痛点（如 slime 的异步网络断连，AReaL 的 NCCL 通信死锁）。这类项目正在引领架构创新（如非共存跨集群训练），但同时也要求使用者具备极强的底层工程排错能力。

## 值得关注的趋势信号

1.  **控制权向环境侧下沉**：TRL 允许环境直接吐出 Reward 值，ROCK 将状态机重构为 6 态以适应海量 RL 环境实例。这表明随着 Agent 交互变得复杂，RL 框架正在把更多控制权（状态管理、奖励计算）下放给外围执行环境。
2.  **训练与推理解耦的“物理级隔离”**：slime 和 AReaL 对非共存架构（分离集群）的极致推演（RDMA、P2P 直传、增量磁盘同步）发出一个强烈信号：未来的超大模型 RL，Train 和 Rollout 必然在物理集群上完全隔离，通过异构网络进行高频通信。
3.  **算力栈的彻底解绑**：verl 对 Ascend NPU 的大力适配不仅是生态补充，更是对“纯 NVIDIA 底层（如 NCCL/CUDA）绑定”的突围。RL 训练框架正在演变为跨平台的抽象层，具备多硬件后端（NPU/GPU）和多重计算后端（Megatron/FSDP）的排列组合能力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报**
**日期**: 2026-07-03

### 1. 今日速览
- **Issues 动态**: 新增/更新 3 条（2 条性能与架构优化，1 条新后端特性）。
- **PR 进展**: 更新 6 个关键合并请求，重点聚焦在**底层沙箱生命周期管理**与**Admin 服务高并发性能调优**。
- **Releases**: 过去 24 小时无新版本发布。

---

### 2. 版本发布
无。当前项目处于密集的功能迭代与底层性能优化阶段，尚未触发新的发版。

---

### 3. 重点 Issues
今日的 Issue 集中反映了 ROCK 在**应对高并发 Agent 负载**和**扩展后端基础设施**方面的技术演进：

- **#1204 [OPEN] 优化 Registry manifest 探针性能**
  作者: zhongwen666 | 链接: [alibaba/ROCK Issue #1204](https://github.com/alibaba/ROCK/issues/1204)
  **摘要**: 指出当前 `_http_probe_manifest` 在每次调用时都会创建新的 `httpx.AsyncClient`，导致并发启动沙箱时产生大量冗余的 TLS 握手与 TCP 连接开销。提议引入进程级别的共享 Client，并支持配置最大连接数（如 300）。

- **#1202 [OPEN] 新增 OpenSandbox 后端支持**
  作者: zpzjzj | 链接: [alibaba/ROCK Issue #1202](https://github.com/alibaba/ROCK/issues/1202)
  **摘要**: 提议在现有的 `ray` 和 `k8s` operator 之外，接入阿里开源的生产级 Agent 沙箱运行时 OpenSandbox（基于 gVisor/Kata 强隔离）。方案计划通过官方 SDK 将生命周期与命令执行全权委托给 OpenSandbox，大幅增强 ROCK 运行 RL/Agent 任务时的安全隔离能力。

- **#1200 [CLOSED] 引入 uvloop/httptools 优化异步 I/O**
  作者: zhongwen666 | 链接: [alibaba/ROCK Issue #1200](https://github.com/alibaba/ROCK/issues/1200)
  **摘要**: 已解决的 Issue。指出原生 asyncio 事件循环在处理 Redis I/O、调度线程和高并发请求时存在吞吐瓶颈，并成功推动了向 `uvloop` + `httptools` 的底层迁移。

---

### 4. 关键 PR 进展
本期的 PR 活动展示了 ROCK 在工程实现上的快速推进：

**🔄 架构与功能扩展**
- **#1203 [OPEN] 新增 OpenSandboxOperator 生命周期后端 (Phase 1)**
  作者: zpzjzj | 链接: [alibaba/ROCK PR #1203](https://github.com/alibaba/ROCK/pull/1203)
  **进展**: 对应 Issue #1202。本 PR 提交了第一阶段代码，打通了将沙箱生命周期托管给 OpenSandbox 的链路；命令执行与文件操作的 Proxy 层对接将在后续 PR 中跟进。

- **#1095 [OPEN] 将 Archive 生命周期集成至沙箱状态机**
  作者: zhangjaycee | 链接: [alibaba/ROCK PR #1095](https://github.com/alibaba/ROCK/pull/1095)
  **进展**: 重大状态机重构。引入了 6 种状态 (`pending` / `running` / `stopped` / `archiving` / `archived` / `deleted`)，为 RL 训练中的海量环境实例提供了更完善的归档与回收机制。

- **#1175 [OPEN] Job SDK 支持 tracking (轨迹追踪)**
  作者: FangwenDave | 链接: [alibaba/ROCK PR #1175](https://github.com/alibaba/ROCK/pull/1175)
  **进展**: 增强 Job SDK，为 RL 训练任务提供执行过程的追踪能力。

**⚡ 性能调优与自愈能力**
- **#1205 [OPEN] 共享 httpx client 优化探针性能**
  作者: zhongwen666 | 链接: [alibaba/ROCK PR #1205](https://github.com/alibaba/ROCK/pull/1205)
  **进展**: 修复 Issue #1204，实现带有惰性初始化和连接池限制的模块级 `_probe_client`。

- **#1190 [OPEN] Worker 节点 Docker 守护进程自动重启**
  作者: zhongwen666 | 链接: [alibaba/ROCK PR #1190](https://github.com/alibaba/ROCK/pull/1190)
  **进展**: 新增 `DockerHealthTask` 调度任务。在 RL 大规模并行起停容器时，若 Worker 节点的 Docker daemon 宕机，系统现在具备探测并自动拉起恢复的能力。

- **#1201 [CLOSED] 迁移至 uvloop/httptools 并简化指标**
  作者: zhongwen666 | 链接: [alibaba/ROCK PR #1201](https://github.com/alibaba/ROCK/pull/1201)
  **进展**: 已合并/关闭。成功将 Admin FastAPI 的底层事件循环替换为 `uvloop`，显著提升异步吞吐量。

---

### 5. 为什么在当前 RL 生态值得持续关注？

当前强化学习（尤其是 LLM-based RL/Agent 训练）正面临严重的**基础设施瓶颈**。ROCK 今天的更新精准切中了该领域的痛点：

1. **解决高并发“起环境”的性能衰减**：RL 训练需要海量并发短时环境。ROCK 通过底层替换 `uvloop` 和复用 `httpx` 连接池，直接榨干单机并发吞吐，减少 CPU 在 I/O 上的无效等待。
2. **兼顾隔离性与安全性**：纯 Docker 或轻量级 K8s 在执行 LLM 生成的代码时常面临逃逸风险。ROCK 积极对接 OpenSandbox（基于 gVisor/Kata），为 RL Agent 提供了生产级的强隔离沙箱，这对于代码执行/工具调用类的 RL 任务至关重要。
3. **面向大规模集群的自愈与状态管理**：新增的归档状态机（6态重构）和 Docker daemon 自动恢复调度器，表明 ROCK 正在沉下心解决“大集群长时间训练易崩溃”的工程顽疾。

ROCK 正在填补 RL 生态中“高效调度”与“安全执行”之间的空白，是构建下一代 Agent 训练基础设施的关键项目。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**THUDM/slime RL 生态日报 - 2026.07.03**

以下是 slime 项目过去 24 小时的开发与社区动态摘要。

### 1. 今日速览
*   **Issue 动态**：新增/更新 2 条讨论。社区在探索新模型接入，同时也暴露了全异步训练模式下的网络连接 Bug。
*   **PR 进展**：更新 9 条。核心团队的架构优化与 Bug 修复推进迅速，重点集中在**跨集群/非共存架构下的权重同步**、**多模态支持**以及**Coding Agent RL 环境**的加固。
*   **版本发布**：无新版本发布。

### 2. 版本发布
无。

### 3. 重点 Issues
*   **[Question] Gemma 4 support via HF wrapping approach?** (作者: leofan-lab | 👍: 4)
    *   **摘要**：开发者探讨了如何在 slime 中引入 Gemma 4 (31B dense & 26B A4B MoE) 进行 RL 训练。由于 SGLang 侧已提供支持，讨论核心聚焦于训练侧是否能通过“黑盒 HF wrapping”方案平滑接入。
    *   **链接**：[THUDM/slime Issue #1811](https://github.com/THUDM/slime/issues/1811)
*   **[Question] fully async在update weights后rollout时connection failed** (作者: qq1243196045)
    *   **摘要**：用户反馈在“全异步模式”下，权重更新后触发 rollout 阶段出现 connection failed，且该问题在同步模式下不会复现。这为项目组的异步调度与网络通信排查提供了直接线索。
    *   **链接**：[THUDM/slime Issue #2168](https://github.com/THUDM/slime/issues/2168)

### 4. 关键 PR 进展
今日的 PR 活动高度聚焦于**底层传输优化**和**Agent 场景适配**：

*   **非共存训练与跨集群通信优化**：
    *   [PR #2146](https://github.com/THUDM/slime/pull/2146) (feat: P2P shard-level weight update)：针对**非共存** RL 训练（Megatron TP rank 与 SGLang TP rank 直接通信），引入 P2P shard 权重同步路径，规避了原生 `all_gather` 带来的开销。
    *   [PR #2089](https://github.com/THUDM/slime/pull/2089) (Disk-level delta weight sync)：提出在权重同步时只传输变化的数据块，大幅降低非共存集群间全量 Checkpoint 同步的带宽压力。
    *   [PR #1709](https://github.com/THUDM/slime/pull/1709) (Mooncake RDMA transport)：为 rollout 数据引入 Mooncake RDMA 传输支持，这是极高频的底层 I/O 性能优化。
*   **功能扩展与修复**：
    *   [PR #2164](https://github.com/THUDM/slime/pull/2164)：新增 Qwen36 多模态 SFT 支持。
    *   [PR #2161](https://github.com/THUDM/slime/pull/2161)：加固 SWE coding-agent RL 运行时，支持通过环境变量灵活配置 train/eval 路径的 grading protocol，并增强沙盒 RPC 的鲁棒性。
    *   [PR #2132](https://github.com/THUDM/slime/pull/2132)：修复 MTP (Multi-Token Prediction) 损失日志记录中 `mtp-num-layers > 1` 导致的 Bug。
*   **核心架构清理与 CI**：
    *   [PR #2169](https://github.com/THUDM/slime/pull/2169) 与 [PR #2167](https://github.com/THUDM/slime/pull/2167) 已关闭，核心开发者 zhuzilin 正在重构 profiling info 并清理无效的 rollout_top_p 判断逻辑。同时 [PR #2053](https://github.com/THUDM/slime/pull/2053) 正在持续跑 Megatron 后端的 CI。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻坚“跨节点/非共存”分离式架构痛点**：随着大模型参数量飙升，传统的 Train/Rollout 单机共存方案已遇瓶颈。今日密集合并的 PR（P2P weight update, Disk-level delta weight sync）表明，slime 正在系统性解决**跨集群、非共存架构下的权重同步延迟问题**，这是当前大规模 RLHF 落地最难啃的骨头之一。
2.  **从“纯模型 RL”向“Agent RL”快速演进**：PR #2161 专门针对 SWE coding-agent 加固了沙盒 RPC 与评分协议，并支持了 MTP（多 Token 预测）等前沿训练特性。这标志着 slime 正从一个纯粹的偏好对齐框架，向复杂的 Agent 交互与执行环境 RL 演进。
3.  **极致的底层 I/O 压榨**：对 RDMA 传输 和 P2P shard 通信 的深度适配，加上对 Gemma 4 等新一代 MoE 模型的探索，说明该项目在追求 RL 训练吞吐量方面走在开源前沿。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-07-03)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共有 8 条 PR 更新，且无新版本 Release。总体活动呈现出**高频的底层 Bug 修复与分布式系统优化**趋势，多位核心开发者（如 Le8r0nJames, jszzr）集中提交了针对 Megatron、v2 控制器以及 SGLang/vLLM 推理后端的修复与解耦代码，项目正处于底层架构的快速迭代与稳固期。

## 2. 版本发布
**无**。最近 24 小时内未发布新版本。

## 3. 重点 Issues
- **[#1439](https://github.com/areal-project/AReaL/issues/1439) [OPEN] [bug] NCCL timeout during weight synchronization on A800 with AReaL ControllerV2**
  - **作者**: Yinym628 (创建于 2026-06-24，更新于 2026-07-02)
  - **摘要**: 开发者在 A800 集群上使用全新的 `ControllerV2` 进行权重同步时，稳定复现 NCCL 通信超时问题。目前该 Issue 已吸引社区交流（2 条评论），这反映出 V2 架构在特定硬件（A800）的分布式通信拓扑下可能存在未解决的适配或死锁隐患。

## 4. 关键 PR 进展
今日的 PR 更新涵盖了状态管理、模型保存、分布式训练路由等多个核心模块，关键进展如下：

**架构与训练修复**
- **[#1471](https://github.com/areal-project/AReaL/pull/1471) [OPEN] fix(rollout): stop controller-managed workers from dp-scaling staleness capacity**
  修复了 `RolloutController` 中的容量缩减 Bug。此前控制器管理的 Worker 会错误应用局部 DP 缩放约束，导致在 N 个 Worker 的环境下有效 Rollout 容量被强制除以 N，引发生成任务停滞 (Stall)。
- **[#1468](https://github.com/areal-project/AReaL/pull/1468) [CLOSED] fix(megatron): use dp_reshardable optimizer sharding and load optimizer state correctly**
  修复了在 megatron-core 0.17.0 上使用分布式优化器时的严重 Bug（Checkpoint 保存崩溃及 Optimizer moments 加载静默丢失）。开发者重构了 `dist_checkpointing` 的分片逻辑。

**模型并行与底层算子**
- **[#1470](https://github.com/areal-project/AReaL/pull/1470) [OPEN] fix(mcore): TP-shard GroupRMSNorm gate-norm weight for DCP checkpointing**
  修复了 `GroupRMSNorm` 在 TP>1（张量并行）下的 Checkpoint 加载错误。此前由于缺少自定义的 `sharded_state_dict`，权重被误认为 REPLICATED，导致 TP>1 时加载状态字典报错。

**推理后端与权重更新**
- **[#1472](https://github.com/areal-project/AReaL/pull/1472) [OPEN] fix(v2): honor full-model disk weight updates**
  为非共置的 SGLang rollouts 强制适配了 `actor.weight_update_mode=disk`，修复了 V2 调度器此前对非 LoRA 模型强制选用 AWEX 而忽略磁盘加载策略的逻辑回退问题。
- **[#1389](https://github.com/areal-project/AReaL/pull/1389) [OPEN] feat: [R3] support R3 for vllm backend**
  为 vLLM 后端引入 R3 (Rollout routing replay) 支持，要求 vLLM 版本 >= 0.22.0，进一步提升推理路由的灵活性与容错。

**新特性支持**
- **[#1444](https://github.com/areal-project/AReaL/pull/1444) [OPEN] feat(vlm): add Qwen3.6 LoRA GRPO training support for 27B and 35B-A3B**
  在 SGLang 和 FSDP 后端基础上，正式增加了对 Qwen3.6 27B（Dense）和 35B-A3B（MoE）大模型的 LoRA GRPO 训练支持，紧跟前沿开源模型生态。

**代码清理**
- **[#1467](https://github.com/areal-project/AReaL/pull/1467) [CLOSED] chore(swe): remove unused SWE SFT dataset loader**
  清理了约 2500 行未被实际用于 SWE-bench RL 训练的冗余 SFT 数据集加载代码。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻克超大模型的分布式 RLHF 痛点**：从今日 Megatron 优化器分片修复（#1468）和张量并行状态字典修复（#1470）可以看出，AReaL 正在实打实地解决大模型（如 27B Dense / 35B MoE）在多节点多卡下做强化学习时的底层工程噩梦（如通信挂起、权重不对齐）。
2. **解耦训练与推理的高效调度**：PR #1471（Rollout 容量控制）和 #1472（SGLang 磁盘权重更新）展示了项目在“Training-Rollout 解耦”上的深度优化。AReaL 正在致力于让训练侧与推理侧（vLLM / SGLang）能以最高效的方式实现异构调度和无缝权重交换。
3. **高度贴合前沿模型生态**：PR #1444 第一时间支持了 Qwen3.6 系列的 GRPO 训练，且同时兼容 FSDP。这表明 AReaL 不仅仅是一个实验性框架，而是紧跟业界前沿、具备极强实战价值的 RL 基础设施。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 强化学习生态日报 (2026-07-03)

## 1. 今日速览
- **Issues 更新**: 8 条（7 条已关闭，1 条开放）
- **PR 更新**: 54 条（多条核心功能优化正在合并中）
- **新版本发布**: 0 个
- **总体趋势**: 项目当前正处于深度重构与功能对齐阶段，尤其是针对偏好对齐算法（DPO/KTO）的架构统一，以及对底层推理引擎（vLLM）兼容性的梳理。

## 2. 版本发布
*今日无新版本发布。*

## 3. 重点 Issues
今日更新的 Issues 多为历史遗留 Bug 的彻底修复与关闭，主要集中在 GRPO 训练与 vLLM 服务的兼容性上：

*   **[CLOSED] [🐛 bug, 🏋 GRPO] GRPOTrainer: liger_kernel loss 忽略了 PEFT/LoRA adapters ([#4612](https://github.com/huggingface/trl/issues/4612))**
    *   **摘要**: 指出当 `use_liger_loss=True` 且模型对 `lm_head` 进行 PEFT 训练时，Liger kernel 直接传递了未经包装的基础模型权重。该类底层算子与微调技术的兼容性 Bug 得到确认并修复。
*   **[CLOSED] OnlineDPOTrainer 在 vllm-server 模式下重复展平 completion_ids ([#5514](https://github.com/huggingface/trl/issues/5514))**
    *   **摘要**: 暴露了 `OnlineDPOTrainer` 在使用 vLLM 服务端生成时，张量处理逻辑的维度冲突问题。（*注：该 Issue 已在今日 PR #6228 中修复*）。
*   **[OPEN] 针对多模态大模型的 视频输入 支持诉求 ([#5373](https://github.com/huggingface/trl/issues/5373))**
    *   **摘要**: 社区提出当前 TRL 无法将视频独立于图像输入进行处理（例如 Qwen3-VL），呼吁扩展数据加载器以支持原生的多模态视频特征。

## 4. 关键 PR 进展
今日的 Pull Requests 展现了维护者（特别是 @qgallouedec）在系统级健壮性和代码一致性上的努力：

*   **KTO 与 DPO 全面对齐计划**
    *   维护者提交了**十余个 PR**（如 [#6259](https://github.com/huggingface/trl/pull/6259), [#6257](https://github.com/huggingface/trl/pull/6257), [#6256](https://github.com/huggingface/trl/pull/6256), [#6246](https://github.com/huggingface/trl/pull/6246) 等），系统性将 KTOTrainer 对齐 DPOTrainer 的实现标准。涵盖：支持 Tool Calling、补齐 `entropy` 与 `num_tokens` 指标、修复截断方向文档、统一依赖导入路径等。
*   **[OPEN] 统一量化配置，简化 QLoRA 流程 ([#6157](https://github.com/huggingface/trl/pull/6157))**
    *   为 `SFTTrainer`, `DPOTrainer`, `GRPOTrainer` 等核心训练器添加 `quantization_config` 参数，开发者无需再硬编码 `model_init_kwargs` 即可快速启动 QLoRA 训练。
*   **[OPEN] 为 DPOTrainer 增加 MoE 负载均衡辅助损失 ([#6208](https://github.com/huggingface/trl/pull/6208))**
    *   在 DPO 训练中引入混合专家模型的 `router_aux_loss_coef`（默认 0.001），与 GRPO/RLOO 对齐，提升 MoE 架构在偏好对齐时的稳定性。
*   **[OPEN] 环境自主接管 Reward 计算 ([#6238](https://github.com/huggingface/trl/pull/6238))**
    *   实施 RFC #5912：允许环境侧定义 `get_reward()` 方法。在 Agentic RL 场景中，环境可以直接吐出奖励值，`reward_funcs` 变为可选项，大幅简化多步智能体训练的数据流。
*   **[OPEN] 废弃对 vLLM 0.15 版本的支持 ([#6239](https://github.com/huggingface/trl/pull/6239))**
    *   跟进依赖迭代，收紧底层 vLLM 版本限制，为支持更新的推理特性扫清障碍。

## 5. 为什么在当前 RL 生态值得持续关注？
1.  **Agentic RL 基础设施的进化**: PR #6238（环境接管 Reward）以及近期对多步 Agent 训练（如 Issue #4543 提到的 multi-step training）的修复，表明 TRL 正在超越传统的“提示词-回复”单轮范式，向复杂的、基于环境交互的强化学习（如 RAG/Tool use Agent）演进。
2.  **底层算子与训练框架的深度融合**: 项目对 Liger Kernel、vLLM 以及 PEFT 的兼容性打磨（Issue #4612, PR #6157）进入了深水区。TRL 不仅在提供算法，更在解决大模型在分布式/量化/高效推理下的实际工程壁垒。
3.  **算法代码库的工业化重构**: KTO 与 DPO 的全面对齐，以及移除无人使用的实验性功能（如 PR #6235 移除 PAPO），体现了核心库对“高维护成本/低收益”代码的零容忍。这种严格的工程纪律，是 TRL 保持在 HuggingFace 生态中 RL 核心地位的关键。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

以下是为您生成的 2026-07-03 Tianshou 强化学习生态日报摘要：

### 1. 今日速览
在过去 24 小时内，Tianshou 仓库整体活跃度较低。无新版本发布，无新增或合并的 Pull Requests。仅有 1 条关于文档优化的长期 Issue 发生了状态更新。

### 2. 版本发布
*   **无新版本发布**。当前项目仍处于存量版本的维护与下一个大版本（据 Issue 反馈）的筹备阶段。

### 3. 重点 Issues
*   **Issue #1056** `[good first issue, documentation] Improve and extend Documentation Content`
    *   **数据指标**：作者 MischaPanch | 状态: OPEN | 创建: 2024-02-15 | 更新: 2026-07-02 | 👍: 0
    *   **内容摘要**：该项目旨在完善和扩展 Tianshou 的官方文档，以配合即将到来的大版本发布。核心目标是在工业界和学术界的新用户群体中进一步推广 Tianshou（例如配合即将到来的 PyData Berlin 关于 RL 的演讲）。该 Issue 要求对现有文档进行更系统化的梳理和排版。
    *   **链接**：[thu-ml/tianshou Issue #1056](https://github.com/thu-ml/tianshou/issues/1056)

### 4. 关键 PR 进展
*   **过去 24 小时无 PR 进展**（新增数为 0，存量 PR 无更新）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管短期内代码提交处于静默期，但 Tianshou 在当前的强化学习（RL）开源生态中依然具有不可替代的底层价值：
1. **极致的执行效率与工程规范**：基于 PyTorch 构建，Tianshou 提供了极简且高度模块化的 API 设计（Batch 数据结构 + 极速 Replay Buffer），其单线/多线采样效率在开源 RL 框架中长期处于第一梯队。
2. **算法覆盖的广度与深度**：支持包括 DQN、PPO、SAC、离散 SAC、Q-learning 系列及其各类变体，且算法实现严格对齐学术论文，是学术界进行复现和 Baseline 对比的高可靠性工具。
3. **大版本演进的前夜**：从 Issue #1056 的长期规划可以看出，核心团队正在蓄力下一个 Major Release，意图进一步降低工业界用户的接入门槛。对于需要稳定、高性能 RL 底层架构的开发者而言，Tianshou 依然是极具投入产出比的开源选择。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl (volcengine/verl) RL 日报摘要 - 2026年07月03日**

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **21 条 Issues** 和 **21 条 PR**，无新版本发布。今日的生态活动高度聚焦于**底层训练架构优化**（如全异步蒸馏、MagiAttention）、**多模态与 Agent 能力扩展**，以及对**国产算力（华为昇腾 NPU）的深度适配**。

### 2. 版本发布
- **Releases**: 无

### 3. 重点 Issues
社区今日的关注点集中在算力兼容性、分布式训练稳定性以及底层数值精度：
*   **昇腾 NPU 环境下的 FSDP2 稳定性问题**：开发者反馈在 Atlas 800T A3 上使用 FSDP2 运行 GRPO 训练时，在第 11 步固定崩溃（报错 ACL stream synchronize failed），而 FSDP1 可稳定运行 40 步以上，呼吁社区排查设备端内存越界问题。（[Issue #6894](https://github.com/verl-project/verl/issues/6894)）
*   **FP8 端到端训练的权重存储精度探讨**：开发者对当前 FP8 E2E 训练路径中，Megatron actor-side 模型参数权重的存储 dtype 提出疑问，寻求明确的机制说明。（[Issue #6893](https://github.com/verl-project/verl/issues/6893)）
*   **Qwen2.5-7B-VL LoRA 显存不足报错**：在多卡资源受限场景下，将 `tain_batch_size` 等参数设为 1 运行 GRPO+LoRA 训练时仍遇到障碍，反映出社区对极低显存下跑通多模态 RL 的强需求。（[Issue #6851](https://github.com/verl-project/verl/issues/6851)）
*   **历史高价值反馈被重新激活**：如关于系统级和 Kernel 级性能 Profiler 的需求（[Issue #693](https://github.com/verl-project/verl/issues/693)），以及 Torch 2.6 下 Checkpoint 加载需要 Safe global 的 Bug（[Issue #692](https://github.com/verl-project/verl/issues/692)）。

### 4. 关键 PR 进展
今日的 PR 合并迎来了算法创新与系统底层修复的双丰收：

**【算法与训练引擎优化】**
*   **引入反向 KL 散度的在线策略蒸馏（OPD）**：新增基于 FSDP 的 Teacher 模型支持，采用 `KL(Q_student_topk || P_teacher_topk)` 公式优化学生模型，进一步丰富了 RL 训练阶段的蒸馏算法选择。（[PR #6920](https://github.com/verl-project/verl/pull/6920)）
*   **MagiAttention 前缀树加速支持**：在 SFT 和 GRPO 训练中引入基于前缀树的共享前缀去重机制，利用 Magi attention 优化长上下文和 Agent 场景下的显存及计算效率。（[PR #6689](https://github.com/verl-project/verl/pull/6689)）
*   **全异步训练架构升级**：引入独立计算的 `Model Engine Server` 解耦 `old_log_probs` 的计算，避免了 Actor 引擎频繁的权重存取，极大提升了全异步 RL pipeline 的效率。（[PR #5990](https://github.com/verl-project/verl/pull/5990)）

**【多模态与工程修复】**
*   **AgentLoop 支持多模态连续 Token**：扩展了 ContinuousTokenBuilder，使处理器能够同时编码文本与多模态数据，大幅增强了 ToolAgent 的多模态交互能力。（[PR #6804](https://github.com/verl-project/verl/pull/6804)）
*   **修复底层显存与梯度异常**：修复了 vLLM rollout 权重更新时非连续张量导致的崩溃问题（[PR #6919](https://github.com/verl-project/verl/pull/6919)）；修复了使用 `fused_kernel` 导致梯度追踪失效、结果被静默破坏的严重 Bug（[PR #6913](https://github.com/verl-project/verl/pull/6913)）。

**【国产算力（昇腾 NPU）生态支持】**
*   今日有 **6 个以上 PR** 专门针对昇腾 NPU 提交，包括：为 Qwen3.5 引入 Triton GDN 算子（[PR #6907](https://github.com/verl-project/verl/pull/6907)），适配 vLLM 0.19+（[PR #6881](https://github.com/verl-project/verl/pull/6881)），增加 RL insight 工具支持，以及完善 NPU 的单元/系统测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在从单纯的“RL 训练框架”向**“全能型后训练基础设施”**演进。
1.  **突破复杂算法的工程瓶颈**：如将全异步在线蒸馏、反向 KL 蒸馏等学术界热门算法，通过解耦推理引擎（独立 Server）和引入定制化算子（FSDP Teacher）工程化落地。
2.  **前瞻性的 Agent 与多模态架构**：随着 RL 与 Agent 深度绑定，verl 快速迭代了 AgentLoop 中的多模态连续 Token 处理，以及支持超长上下文的 MagiAttention，精准切中 Agentic RL 的痛点。
3.  **跨硬件平台的降维打击**：今日极高比例的 Ascend NPU 适配 PR 显示，verl 并未局限于单一的 NVIDIA 生态，而是通过深度的底层算子重写（如 Triton GDN for Qwen3.5）和双端架构兼容（同时支持 FSDP/Megatron，vLLM/SGLang），正在建立极其宽阔的硬件护城河。对于需要在国内异构算力集群上大规部署 RLHF 的团队而言，verl 是目前最具落地潜力的开源选项。

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

**RL 开源生态日报：rl_games (2026-07-03)**

**1. 今日速览**
* 过去 24 小时，[rl_games](https://github.com/Denys88/rl_games) 仓库动态趋于平缓，无新增 Issue 或 Release。
* 活动集中在核心算法的缺陷修复与合并，1 个关键 PR 于昨日（2026-07-02）更新并关闭。
* Issues (24h): 0 | PRs (24h): 1 | Releases: 0

**2. 版本发布**
* **无新版本发布**。目前社区仍在使用现有稳定版，等待下一阶段的核心代码合并与打包。

**3. 重点 Issues**
* **无活跃 Issue**。当前仓库的公开问题追踪器在今日暂无新增或更新，项目处于相对稳定或集中开发期。

**4. 关键 PR 进展**
* **PR #356 [CLOSED] SAC fixes and improvements** (作者: ViktorM)
  * **链接:** [Denys88/rl_games PR #356](https://github.com/Denys88/rl_games/pull/356)
  * **技术解析:** 这是一次针对软执行器-评论家（SAC）算法的深度修复，核心解决了**Autoreset（自动重置）环境下的经验回放正确性问题**。
    * **时序差分（TD）逻辑修复:** 拦截并跳过自动重置时被忽略的 action-step 记录，确保在 `truncation`（截断）时存入真实的最终观测值（final obs）。将 `done = terminated`，确保截断状态能够正确进行 Bootstrap（引导）。
    * **数据结构优化:** 在 Replay Buffer 中新增 `truncated` 列，以严谨处理环境周期结束与提前截断的信号边界。
    * **归一化修正:** 修复了观测值（Obs）归一化逻辑，确保统计量针对每个全新的环境帧仅精确更新一次，避免了数据泄漏或重复计算。
  * **状态:** 该 PR 已关闭，意味着这些底层数据流和 SAC 逻辑的修复已审核完毕，预期将并入主分支。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
* **高并发训练的基石:** [rl_games](https://github.com/Denys88/rl_games) 依旧是极高性能的 RL 算法库，尤其在处理大规模 PPO/SAC 并发环境时表现出色。
* **严谨的底层边界处理:** 从 PR #356 可见，项目对 RL 训练中极易踩坑的“Autoreset 边界问题”和“Obs 归一化时机”有着极其严苛的修正。对于需要复现高可靠基线或开发具身智能/连续控制任务的研究者而言，这种底层数据流的正确性是保障模型收敛的刚需，使其依然具备极高的源码阅读与二次开发价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 生态日报：Gymnasium 项目追踪 (2026-07-03)**

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动集中在底层依赖升级与官方教程规范化上。共计处理 2 条 Issue 和 3 条 PR，无新版本 Release 发布。核心进展包括正式合并对 NumPy 2.0+ 的强制依赖，以及对教程中随机数种子设置误用的全面修复。

### 2. 版本发布
* **无新版本发布**。

### 3. 重点 Issues
* **[#1468](https://github.com/Farama-Foundation/Gymnasium/issues/1468) [CLOSED] `reset()` 文档字符串与 REINFORCE 教程的冲突**
  * **摘要**：开发者指出官方文档中“仅在环境初始化后传入整数种子，之后不再传入”的最佳实践，与 REINFORCE 教程中每个 Episode 都重置种子的代码相悖。该 Issue 已关闭，相关教程代码已在今日的 PR 中得到修复。
* **[#9](https://github.com/Farama-Foundation/Gymnasium/issues/9) [OPEN] 为 `core.py` 和 `spaces` 添加严格的类型提示**
  * **摘要**：这是一个创建于 2022 年的 `good first issue`，提议在项目核心部分引入严格的类型提示（如解决 Pyright 报错问题）。今日再次被激活讨论，反映出社区对提升 RL 核心库代码健壮性和静态检查友好度的持续诉求。

### 4. 关键 PR 进展
今日关闭的 3 个 PR 均具有实际的技术价值，重点关注代码规范与依赖迭代：

* **[#1603](https://github.com/Farama-Foundation/Gymnasium/pull/1603) [CLOSED] 强制要求 numpy >= 2.0 (关联 #1594)**
  * **摘要**：核心依赖更新。放弃对 NumPy 1.x 的支持（最低要求提升至 `2.0.0`），并新增了对 Python 3.14 的支持与 CI 测试覆盖。这确保了 Gymnasium 能够紧跟 Python 科学计算生态的最新底层优化。
* **[#1608](https://github.com/Farama-Foundation/Gymnasium/pull/1608) [CLOSED] 更新教程中的环境种子设置代码**
  * **摘要**：修复了教程（包含轨迹预测等部分）中每个 Episode 都调用 `env.reset(seed=seed)` 的反模式。这种写法会导致每个 Episode 生成相同的训练数据，破坏探索随机性。此 PR 直接回应了 Issue #1468 的报错。
* **[#1609](https://github.com/Farama-Foundation/Gymnasium/pull/1609) [CLOSED] 修复 Frozenlake 教程中 #1608 的遗留问题**
  * **摘要**：作为 #1608 的补充，修复了最后一帧渲染时的 `reset()` 处理逻辑，并清理了教程代码块中无效的 IPython magic command (`# %load_ext lab_black`)。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **API 标准的绝对统治力**：作为 OpenAI Gym 的官方继承者，Gymnasium 的 API（如 `reset()`, `step()`, `gymnasium.make()`）仍是当前学术界和工业界（如 Stable-Baselines3, CleanRL）交互环境开发的底层事实标准。
2. **文档与教程的严谨性**：从今日处理的 Issue 和 PR 可以看出，维护团队对“环境随机种子管理”这种易被忽视但直接影响实验复现性的细节把控极其严格，这对保证 RL 实验的科学严谨性至关重要。
3. **底层依赖的激进跟进**：通过合并强制依赖 NumPy 2.0 和支持 Python 3.14 的 PR，项目摒弃了历史包袱。这表明 Gymnasium 不仅仅在维护现有 API，还在积极适配现代 Python 生态的性能提升，为未来的大规模 RL 训练提供更高效的基础设施。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-07-03)**

**1. 今日速览**
过去 24 小时内，PettingZoo 仓库活动平稳。共有 1 条 Issue 更新（聚焦于 Hanabi 环境渲染资源捐赠）和 1 条 PR 更新（代码 Lint 严格度提升被关闭）。无新版本发布。

**2. 版本发布**
无。当前代码库未发布新的 Tag 或 Release。

**3. 重点 Issues**
- **#1379 [OPEN] Hanabi Rendering**
  **链接:** [Farama-Foundation/PettingZoo Issue #1379](https://github.com/Farama-Foundation/PettingZoo/issues/1379)
  **摘要:** 核心维护者 `jkterry1` 委托像素画师制作了完整的 Hanabi（花火）卡牌像素美术资源，并将其打包公开。他在 Issue 中直接向社区发出号召，希望有贡献者能够认领并提交 PR，将这些视觉素材集成到现有的 Hanabi 环境中，以补全该环境的渲染（Rendering）功能。

**4. 关键 PR 进展**
- **#1376 [CLOSED] Increase ruff strictness and apply mechanical autofixes**
  **链接:** [Farama-Foundation/PettingZoo PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376)
  **摘要:** 该 PR 旨在提升 Python 代码静态分析工具 `ruff` 的配置严格度，并自动修复了所有新暴露的代码规范问题（扩展了 pyflakes `F` 和 pycodestyle `E4/E7/E9` 规则）。该 PR 已于昨日被关闭，表明此轮代码质量提升的规范化基线已处理完毕（可能已合并或被后续策略替代）。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
PettingZoo 作为 Farama-Foundation 旗下的核心项目，是多智能体强化学习（MARL）领域的标准化 API 基石（相当于多智能体版的 Gymnasium）。
- **底层基建价值：** 无论是经典的矩阵游戏、棋牌环境（如本次涉及的 Hanabi），还是连接现代复杂物理引擎，PettingZoo 提供了统一的接口标准，是绝大多数 MARL 算法测试的基石。
- **持续的社区自举与活跃度：** 从 Issue #1379 可以看出，维护团队不仅在进行日常维护，还在自掏腰包丰富环境的可视化表现力。这种通过提供高质量原生资源来引导社区贡献的机制，展现了极强的项目生命力和健康的社区生态。对于从事多智能体协作与对抗研究的开发者和研究员，PettingZoo 仍是不可绕过的核心试验台。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>