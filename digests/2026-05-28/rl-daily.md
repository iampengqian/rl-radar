# RL 开源生态日报 2026-05-28

> 生成时间: 2026-05-27 22:29 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出明显的**分层演化与聚焦态势**。以大语言模型（LLM）对齐为核心的 Post-training 框架（如 verl, TRL, AReaL 等）占据了绝对的社区活跃度与工程前沿视线；而传统/经典 RL 基础设施（如 Gymnasium, SB3, PettingZoo）则进入平稳的底层打磨期。LLM RL 框架正经历从“算法原型可用”向“超大规模异构集群长时稳定训练”的跨越，底层算力调度、显存/通信极限优化以及容错机制成为现阶段比拼的核心硬实力。

## 各项目活跃度对比
过去 24 小时内，各项目的活跃度差异显著，LLM Post-training 赛道压倒性领先。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 11 | 38 | 0 | **极高**。正向多后端兼容、序列并行容错及异构算力（Ascend NPU）深水区快速迭代。 |
| **ROCK** | 19 | 21 | 0 | **高**。死磕底层集群运维痛点，聚焦大规模沙箱并发与磁盘治理。 |
| **TRL** | 12 | 22 | 1 | **高**。极致推进 Async 架构，抹平 DeepSpeed/vLLM 与多模态底层的工程差异。 |
| **slime** | 3 | 17 | 0 | **中高**。架构重心向原生 Agent RL（SWE 环境）迁移，底层做 MoE 显存优化。 |
| **AReaL** | 3 | 7 | 0 | **中**。攻坚硬核的底层精度修复，紧跟前沿重构推理-训练协同与 PD 分离架构。 |
| **Open Instruct** | 0 | 9 | 0 | **中**。完善自动化评估闭环，严控 Reward/Eval 脚本的边界准确性。 |
| **torchtune** | 0 | 2 | 0 | **低**。保持轻量级基座定位，修复 DPO 依赖与分布式初始化日志逻辑。 |
| **Gymnasium** | 0 | 1 | 0 | **低**。持续压榨底层性能，剔除无关渲染子系统初始化开销。 |
| **PettingZoo** | 0 | 5 | 0 | **低**。修补底层环境 API 状态重置 Bug 与安全漏洞。 |
| **SB3** | 1 | 1 | 0 | **低**。适配 Gymnasium 最新观测空间 API 变动。 |
| **其他项目** | - | - | - | 无活动。（含 CleanRL, OpenRLHF, rl_games, ROLL, Tianshou） |

## 共同关注的研究与工程方向

**1. 研究侧信号：从静态对齐走向原生 Agent 交互与在线蒸馏**
*   **交互式 Agent RL 成为一等公民**：Slime 项目大重构抽取 `slime/agent/` 模块并深度优化 SWE 沙箱生命周期，标志着 RL 训练正从单一的“指令-回复”模式，转向支持长时间、异步 Tool 调用的环境交互。
*   **对齐算法的严谨性与课程学习**：Open Instruct 引入了基于 TV 散度的梯度过滤（TVPO）和难度课程采样；TRL 则系统性地消除了 KTO、DPO、自蒸馏等算法在数据采样和 API 层面的不一致性，提升对齐训练的数学严谨性。

**2. 工程/基础设施侧信号：极致的吞吐优化与容错治理**
*   **推理与训练的深度融合与解耦**：为解决 RLHF 中模型权重更新导致的推理停顿，AReaL 实现了 Prefill-Decode (PD) 分离架构及 CUDA IPC 权重直接传输；verl 和 TRL 也都在深度整合 vLLM/SGLang 以优化生成阶段的调度。
*   **分布式容错与状态一致性**：由于 RL 训练极易“随机挂掉”，框架正集体向数据库/全局状态驱动的容错演进。verl 引入了 `SkipManager` 与安全回滚机制，ROCK 将文件哨兵重构为 DB 驱动的沙箱归档，均在降低千卡集群长时训练的运维成本。
*   **Checkpoint 与显存（OOM）精细化治理**：针对大模型（如 Qwen3.5、MoE 架构），各项目正在死磕显存泄漏与碎片化问题。AReaL 修复了优化器精度导致的显存异常，Slime 修正了 Colocate 模式的显存分配，Open Instruct 则统一了各算法的 Checkpoint 生命周期限制以防磁盘打爆。

## 差异化定位分析

*   **verl / AReaL：硬核的“RL OS”级算力调度基座**。两者均致力于打造泛用型的大模型 RL 底层系统，并行支持 FSDP2 与 Megatron 双轨架构，并在异构算力（Ascend NPU）和跨卡通信（NCCL/HCCL）的适配上下足苦功，适合需要主导千卡级别基础架构研发的团队。
*   **TRL (Hugging Face)：生态最完善的开箱即用工具链**。依托 HF 生态，TRL 侧重于抹平底层加速框架（PyTorch, DeepSpeed）与多模态模型之间的差异，以极快的速度将前沿 Async GRPO 架构转化为普通开发者可调用的稳定 API。
*   **ROCK：偏向集群运维与资源治理的“清道夫”**。与偏向算法的张量计算不同，ROCK 集中解决大规模分布式实验带来的海量短生命周期容器、巨型日志和跨区域存储拉取等纯底层基础设施痛点。
*   **Slime / Open Instruct：前沿算法与 Agent 场景的急先锋**。Slime 聚焦于解决 Coding Agent 环境带来的特殊 RL 架构挑战；Open Instruct 则严控 Reward Model 和 Eval 脚本的边界，专注通过极其扎实的后处理管线和课程学习来压榨模型极限。
*   **经典 RL 生态（Gymnasium / SB3 / PettingZoo）：稳态下的底层精修**。不再剧烈变动 API，而是聚焦于路径安全漏洞修补、物理引擎碰撞 bug 修复及渲染引擎的性能剔除，持续为非 LLM 的传统多智能体/单智能体 RL 提供最稳健的基座。

## 社区热度与成熟度
1. **LLM RL 框架进入“深水区拼刺刀”阶段**：verl 单日 38 个 PR、AReaL 对 `torch.optim` 底层精准排障、Slime 引入 FlashQLA 算子，表明头部 LLM RL 项目的核心贡献已经从早期的算法包装，转变为对 PyTorch 编译层、CUDA 显存调度和通信原语的深度 Hack。这要求极高的底层系统功底，项目壁垒正在快速建立。
2. **成熟项目的自我克制与严谨**： Gymnasium 和 SB3 的极低频更新并非衰退，而是高度成熟的表现。面对新 API（如 `FrameStackObservation`），SB3 仅采用增加文档警告而非盲目重构底层逻辑，体现了对生产级代码稳定性的敬畏。
3. **“生产可用”成为共识指标**：无论是 TRL 发布限制遥测提升安全性的 v1.5.1，还是 ROCK 发布 16k Sandbox 并发测试报告，都说明项目方正在极力迎合企业级应用对合规性、可观测性和性能基准的严苛要求。

## 值得关注的趋势信号
1. **Agent RL 将引发下一轮架构重构**：传统 RLHF 架构假设输出是短序列且即时的，而随着 SWE-bench 等 Coding Agent 场景的引入，沙箱长时挂起、异步请求积压、磁盘暴涨等状态同步问题，倒逼 RL 训练框架必须向“事件驱动”和“高容错状态机”方向演进。
2. **PD (Prefill-Decode) 分离架构向 RL 训练环节渗透**：此前 PD 分离主要存在于模型推理服务阶段，但 AReaL 等项目开始将其引入 RL 的 Rollout 阶段，这预示着大模型训练与推理的底层架构边界正在彻底模糊，算力利用率的压榨将精细到请求粒度。
3. **异构算力（NPU）不再是“Plan B”，而是主线任务**：verl 将 Ascend NPU 的适配深入到异步机制和 CI 基线，说明面对英伟达高端算力的紧缺与高昂成本，国产异构算力在超大规模 RL 集群中的适配已经步入生产级落地阶段。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 开源项目 RL 日报摘要 (2026-05-28)

## 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库保持高频迭代。共计更新 **19 条 Issues**（主要集中在资源生命周期管理、系统稳定性及 Bug 修复）和 **21 条 PRs**（涉及核心重构、调度器优化及文档同步）。尽管无新版本发布，但围绕 Sandbox 磁盘治理和状态机健壮性的底层代码正在经历密集的 Review 与合并。

## 2. 版本发布
- **最新 Releases**: 无新版本发布。当前主干仍聚焦于底层任务调度机制的加固与 v1.8.x 版本生态的完善。

## 3. 重点 Issues
本期 Issue 核心围绕**Sandbox 生命周期闭环**、**磁盘暴涨防御治理**及**状态一致性**展开。

- **[Feature] 支持沙箱删除及自动删除后台扫描** (Issue [#1032](https://github.com/alibaba/ROCK/issues/1032))
  **亮点**: 旨在解决已停止的 Sandbox 容器长期滞留磁盘的问题，计划引入后台定期扫描机制清理废弃容器，对大规模 RL 集群的资源释放至关重要。

- **[Bug] SandboxManager.stop() 遗漏写入 stop_time** (Issue [#1018](https://github.com/alibaba/ROCK/issues/1018))
  **亮点**: 生产环境中发现当 `start_time` 缺失时，`stop()` 会跳过更新 `stop_time`，导致后续基于时间的日志归档任务 (`SandboxLogArchiveTask`) 失效。已被快速定位并提交修复。

- **[Feature] DB 驱动的 SandboxLogArchiveTask 架构演进** (Issue [#1024](https://github.com/alibaba/ROCK/issues/1024))
  **亮点**: 废弃了原先依赖文件标记 (`.rock_stopped_at`) 的设计，转向以数据库 `sandbox_record.state` 为单一事实来源，大幅提升分布式系统下的状态一致性。

- **[Feature] 跨区域 OSS 数据集拉取加速** (Issue [#1010](https://github.com/alibaba/ROCK/issues/1010))
  **亮点**: 针对 `rock datasets list` 命令在跨区域 OSS 存储桶上耗时过长（20-30s+）的性能瓶颈，优化了元数据同步逻辑。

## 4. 关键 PR 进展
对应的 Pull Requests 展现了极高的工程化质量，多个核心修复与重构正在落地：

- **修复 Sandbox 停止状态丢失与 FSM 逻辑** 
  - PR [#1020](https://github.com/alibaba/ROCK/pull/1020): 修复无论 `start_time` 是否存在均强制写入 `stop_time` 的问题。
  - PR [#1021](https://github.com/alibaba/ROCK/pull/1021): 修复 FSM 重构导致的 Sandbox 停止原因（如 EXPIRED 与 MANUAL）丢失问题，保障自动清理逻辑准确。

- **调度器任务与磁盘治理**
  - PR [#1027](https://github.com/alibaba/ROCK/pull/1027): 引入多 Pod 安全的 ops-jobs API，允许 SRE 手动触发清理任务，解决调度窗口延迟导致的磁盘被打爆问题。
  - PR [#1025](https://github.com/alibaba/ROCK/pull/1025): 实现基于 DB 状态驱动的日志归档任务，替代原有哨兵文件设计。
  - PR [#1029](https://github.com/alibaba/ROCK/pull/1029): 引入 4 阶段 Ray 日志清理机制，解决 Ray 集群长期运行引发的磁盘泄漏。

- **沙箱生命周期扩展与重构**
  - PR [#1001](https://github.com/alibaba/ROCK/pull/1001): 新增 Sandbox restart 支持。
  - PR [#1037](https://github.com/alibaba/ROCK/pull/1037): 加固 Redis 缓存生命周期管理，引入 `archive_cache/restore_cache` 语义。
  - PR [#1013](https://github.com/alibaba/ROCK/pull/1013): 将 Docker rootfs 的 XFS prjid 与 sandbox log dir 共享，优化存储隔离。
  - PR [#931](https://github.com/alibaba/ROCK/pull/931): 引入 `Image.from_dockerfile`，支持从 Dockerfile 直接声明式启动沙箱，极大提升研发调试体验。

- **文档更新**
  - PR [#1036](https://github.com/alibaba/ROCK/pull/1036) (已合并): 补充 v1.8.x 版本的 Sandbox 大规模并发创建性能测试报告（1k-16k 并发）及调度器用户指南。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **解决 RL 基础设施底层的“硬骨头”**：RL 实验往往伴随海量的短生命周期容器和巨型日志/检查点输出。ROCK 当前密集提交的“磁盘治理”、“日志归档”和“镜像清理”任务，直击大规模集群运维的痛点。
2. **极其严苛的工程标准**：项目在进行新特性迭代时（如 FSM 重构、缓存生命周期），一旦发现状态漂移或边界条件破坏，会在极短时间内进行深度修正（如从文件哨兵重构为 DB 驱动），展现了对分布式一致性的严苛要求。
3. **面向性能与规模的设计**：支持最高 16k Sandbox 并发创建的性能基准测试，以及针对跨区域 OSS 的拉取优化，表明该项目正在为超大规模的分布式强化学习训练集群做底层基础设施的支撑。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 Slime (THUDM) 强化学习开源项目日报
**日期**: 2026-05-28 | **数据来源**: [github.com/THUDM/slime](https://github.com/THUDM/slime)

---

### 1. 今日速览
过去 24 小时内，Slime 项目保持高活跃度，无新版本发布。
- **Issues 更新**: 3 条（全部为新建/更新状态）
- **PR 更新**: 17 条（4 条 Open，13 条 Closed）
- **核心动向**: 核心开发者 `zhuzilin` 集中合入了大量关于 Coding Agent RL（SWE 环境）的架构重构代码；社区开始深入探讨底层显存优化与 Megatron 分布式调度细节。

---

### 2. 版本发布
**无**。目前项目主干保持快速迭代，尚未切割新的稳定版 Release。

---

### 3. 重点 Issues
今日的 Issues 集中在环境配置、显存管理（OOM）及分布式训练底层逻辑的探讨。

- **环境变量拼写导致日志丢失** [[#1966](https://github.com/THUDM/slime/issues/1966)]
  - **摘要**: 指出项目中误将 Python 环境变量写为 `PYTHONBUFFERED`，正确应为 `PYTHONUNBUFFERED`。此 Bug 导致 Ray/训练进程的标准输出被静默缓冲，影响实时日志监控。
- **Retool 示例遭遇严重 OOM** [[#1951](https://github.com/THUDM/slime/issues/1951)]
  - **摘要**: 在 4 张 H200（共计 560GB 显存）上运行 `retool` 示例时，在 20~50 步后触发显存溢出（尝试分配 58.15 GiB 失败）。这暴露了当前 RLHF 训练循环中可能存在长期的显存泄漏（Memory Leak）或碎片化问题。
- **Micro-batch 调度对 Logprob 计算的影响** [[#1964](https://github.com/THUDM/slime/issues/1964)]
  - **摘要**: 深入探讨为何 Logprob 计算与 Training 阶段必须使用相同的 micro-batch schedule。不同 batch size 是否会引入张量并行下的计算精度误差或数值不稳定，是社区当前关注的工程细节。

---

### 4. 关键 PR 进展
今日 PR 活动主要围绕 **Agent RL 架构解耦** 与 **底层显存/调度修复**。

#### 🚀 核心功能与重构 (已合入)
- **Agent RL 架构大重构**: 核心维护者 `zhuzilin` 连续合入了 5 个 PR（[#1961](https://github.com/THUDM/slime/pull/1961), [#1960](https://github.com/THUDM/slime/pull/1960), [#1958](https://github.com/THUDM/slime/pull/1958), [#1957](https://github.com/THUDM/slime/pull/1957), [#1956](https://github.com/THUDM/slime/pull/1956)），新增了 `slime/agent/` 目录，将 Sandbox 实现与 Coding Agent 辅助函数从示例代码中抽取为核心模块，大幅提升了代码复用度。
- **SWE 沙箱请求的安全下线**: [[#1954](https://github.com/THUDM/slime/pull/1954)] 针对 SWE 环境引入 `shutdown_session`，确保在调用 `release_memory_occupation` 前，妥善排空 SGLang 推理管线中的残留请求，防止引发 Hard Assert 崩溃。
- **修复 Cache 刷新死循环**: [[#1953](https://github.com/THUDM/slime/pull/1953)] 修复了 `/flush_cache` 接口在非 200 响应时的无休眠重试问题，避免了高频空转导致的静默资源损耗。

#### 🛠️ 待合入修复
- **Colocate 模式显存分配修复**: [[#1950](https://github.com/THUDM/slime/pull/1950)] 修复了在 Colocate 模式下错误地将 Critic GPU 显存加入 `rollout_num_gpus` 的问题，从根本上解决了多 GPU 环境下的 OOM 边界 Bug ([#1896](https://github.com/THUDM/slime/issues/1896))。
- **修正日志环境变量**: [[#1967](https://github.com/THUDM/slime/pull/1967)] 与 Issue #1966 对应，将全项目的 `PYTHONBUFFERED` 统一修正为 `PYTHONUNBUFFERED=1`。
- **引入 FlashQLA 后端**: [[#1947](https://github.com/THUDM/slime/pull/1947)] 针对 Qwen3.5 / Qwen3-Next Gated DeltaNet 层引入 FlashQLA 算子支持，并允许跳过部分算子的通信显存检查以提升分布式训练吞吐。
- **调试数据覆盖修复**: [[#1922](https://github.com/THUDM/slime/pull/1922)] 修复 Megatron 多卡训练下，调试数据因路径模板未包含 `{rank}` 而相互覆盖的问题。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

Slime 展现出了 LLM 强化学习基础设施演进的两个重要趋势：

1. **从单纯的 RLHF 走向原生 Agent RL**: 最近的代码变动（重构 `slime/agent/`、优化 SWE-bench 沙箱生命周期管理、处理在线环境带来的异步请求积压）表明，Slime 正在将**基于代码沙箱环境的交互式强化学习** 作为一等公民支持。这填补了传统 RL 框架在处理 LLM 长时间、异步 Tool 调用时的架构空白。
2. **对大规模 MoE 模型的极致底层优化**: 随着 Qwen3.5 等大参数量模型的普及，Slime 正在深度整合 SGLang 和 Megatron，并通过引入 FlashQLA、精细化控制显存占用来解决 10卡/百卡级别的分布式中 OOM 痛点。对于致力于在千卡集群上做 Post-training 的工程团队而言，其处理 Colocate 模式显存拼接和通信优化的思路具有极高的参考价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-28 RL 日报摘要：

# AReaL 开源生态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持较高的开发活跃度。新增/更新 **3** 个 Issues 和 **7** 个 Pull Requests，**0** 个新版本发布。今日的核心主线集中在**底层训练精度修复**、**推理引擎的架构解耦（PD 分离与合规蒸馏）**以及**异构显存/权重的传输同步优化**。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
- **[CLOSED] FSDP引擎精度异常导致收敛瓶颈 ([#1292](https://github.com/areal-project/AReaL/Issue/1292))**
  - **简述**: 在 FSDP 后端中使用 `bfloat16` 训练时，`torch.optim.AdamW` 错误地继承了模型的 bf16 数据类型，导致优化器状态以 bf16 而非 fp32 存储。这使得训练后期的损失比 DeepSpeed ZeRO-3 / Megatron 高出约 3 倍。目前该问题已被相关 PR 修复。
- **[OPEN] 深度求索 V4 容错推理架构复现 ([#1279](https://github.com/areal-project/AReaL/Issue/1279))**
  - **简述**: 社区呼吁在 AReaL 的推理服务中实现类似 DeepSeek-V4 论文中的可抢占式容错逻辑。该特性要求在保持 `areal/api/` 向后兼容的前提下进行开发。
- **[OPEN] Megatron 后端训练 Qwen3.5 报错 ([#1317](https://github.com/areal-project/AReaL/Issue/1317))**
  - **简述**: 用户报告在使用 Megatron 后端（mbridge 0.15.1）启动 Qwen3.5 模型训练时遇到构建错误，涉及 `mtp_args` 配置及模型加载流程。

## 4. 关键 PR 进展
- **[CLOSED] 修复 FSDP 精度问题：维持 AdamW fp32 主权重 ([#1369](https://github.com/areal-project/AReaL/PR/1369))**
  - **简述**: 专门针对上述 Issue #1292 的修复。解耦了参数存储的数据类型与前向/反向传播的计算数据类型，确保优化器在 fp32 精度下正确更新权重。
- **[OPEN] 推理侧架构升级：支持 PD 分离部署 ([#1364](https://github.com/areal-project/AReaL/PR/1364))**
  - **简述**: 在 `RolloutControllerV2` 架构上实现了 Prefill-Decode (PD) 分离。首版支持 DP=2 (1P1D) & TP=1，为后续高并发下的 DP/TP 任意配比奠定基础，显著优化 RLHF 生成阶段的吞吐量。
- **[OPEN] 支持在线策略蒸馏 ([#1368](https://github.com/areal-project/AReaL/PR/1368))**
  - **简述**: 引入专用的 Teacher Rollout/推理引擎 (vLLM/SGLang) 进行在线策略蒸馏，替代原先基于训练引擎的 Teacher 路径。大幅降低了显存开销，并提供了更清晰的推理侧 Token Log-Prob 评分 API。
- **[OPEN] Awex FSDP 显存共享权重同步 ([#1361](https://github.com/areal-project/AReaL/PR/1361))**
  - **简述**: 在 `AwexFSDPAdapter` 中新增通过 CUDA IPC 进行权重共置传输的能力。允许 FSDP 训练的模型在共享 GPU 上直接更新 SGLang 推理权重，与现有的 Megatron 路径对齐。
- **[OPEN] 实验性集成 Ray RDT 进行权重同步 ([#1305](https://github.com/areal-project/AReaL/PR/1305))**
  - **简述**: 实现了基于 Ray Direct Transport (RDT) 的权重同步后端。涉及 IW Scheduler 桥接的分片选择与 Ray RPC 权重拉取，以及 FSDP 权重元数据提取机制。
- **[OPEN] V2 训练管线控制层重构 ([#1363](https://github.com/areal-project/AReaL/PR/1363))**
  - **简述**: 对 `GatewayTrainController` 进行了重要升级，引入版本管理、连接引擎和批次清理功能，统一了 HTTP 客户端会话，进一步巩固了 V2 推理控制器的奇偶校验与稳定性。
- **[OPEN] 社区双周会议记录更新 ([#1371](https://github.com/areal-project/AReaL/PR/1371))**
  - **简述**: 纯文档维护，添加了 05/16 社区会议资料，并预告了 05/30 的双周同步会议安排。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **硬核的底层训练排障能力**: 从今日关闭的 #1369 PR 可以看出，团队在处理 LLM 强化学习训练时，具备极强的全链路洞察力（能够精准定位到 `torch.optim` 在特定数据类型下的 Silent Failure 并提出解耦方案），这对于追求极致训练稳定性的 RL 项目至关重要。
2. **紧跟前沿的推理-训练协同架构**: 项目正在迅速吸收业界最新成果（如 DeepSeek-V4 的容错机制、Prefill-Decode 分离架构）。在 RLHF/GRPO 场景中，推理引擎与训练引擎的边界正在模糊，AReaL 通过 `RolloutControllerV2` 和 CUDA IPC/Ray RDT 等底层技术重构权重同步链路，直击 RL 训练中“模型权重更新导致的推理停顿”这一核心性能瓶颈。
3. **高度的异构生态兼容性**: 无论是在线蒸馏对 vLLM/SGLang 的无缝集成，还是并行框架层对 FSDP 与 Megatron 的双轨支持，甚至跨框架转换桥梁（如 mbridge），都表明 AReaL 正在致力于打造一个不绑定单一底层依赖的“泛用型”大模型 RL OS。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026年05月28日

## 1. 今日速览
过去24小时内，TRL 生态保持了极高的开发活跃度。项目在持续优化异步 GRPO 训练（AsyncGRPO）、修复 DeepSpeed/vLLM 兼容性瓶颈的同时，发布了一个聚焦于安全与遥测优化的新版本。社区在模型对齐（如 DPO/KTO）和多模态模板支持方面贡献了大量代码。

- **Issues 更新**: 12 条 (5 Open / 7 Closed)
- **PR 更新**: 22 条 (12 Open / 10 Closed)
- **新版本发布**: 1 个

---

## 2. 版本发布
- **v1.5.1**: 限制了 Trainer 遥测的触发机制，通过引入显式的类名允许列表提升了安全性。
  - 相关 PR: [#5851](https://github.com/huggingface/trl/pull/5851)
  - **完整变更日志**: [v1.5.0...v1.5.1](https://github.com/huggingface/trl/compare/v1.5.0...v1.5.1)

---

## 3. 重点 Issues

**[基础设施与性能]**
- **AsyncGRPO 通信卡点**: 社区呼吁针对仅支持 PCIe 的 GPU 拓扑（无 NVLink/P2P）增加 NCCL 权重同步的自动降级方案。([#5865](https://github.com/huggingface/trl/issues/5865))
- **AsyncGRPO Checkpoint 重复计算**: 从断点恢复训练时，即使跳过了数据加载，vLLM 依然会对已处理过的 batch 重新进行推理，严重浪费算力。([#5863](https://github.com/huggingface/trl/issues/5863))
- **GRPO 梯度累积问题**: 在 NPU 环境下，不同 `gradient_accumulation_steps` 配置下未观察到显著显存差异，引发对底层计算逻辑的质疑。([#4511](https://github.com/huggingface/trl/issues/4511))

**[训练范式与功能]**
- **仅 Assistant Loss 训练适配**: 开启 `assistant_only_loss=True` 需要 `&#123;&#37; generation &#37;&#125;` 模板标记，官方正追踪为主流模型家族（如 Idefics3, SmolVLM）添加原生支持。([#5471](https://github.com/huggingface/trl/issues/5471))
- **PPO 内存泄漏**: 调用 PPOTrainer 时出现 PyTorch 显存管理异常（OOM），该历史遗留问题被再次激活。([#3087](https://github.com/huggingface/trl/issues/3087))

---

## 4. 关键 PR 进展

**[核心训练器重构与修复]**
- **DeepSpeed ZeRO-3 与 Chunked NLL 兼容**: 修复了 `SFTTrainer` 在 `loss_type="chunked_nll"` 下因绕过 DeepSpeed 参数收集机制导致的崩溃。([#5873](https://github.com/huggingface/trl/pull/5873))
- **AsyncGRPO 无 Padding 训练**: 引入 Padding-free 训练模式作为 `AsyncGRPOTrainer` 的唯一/默认模式，解包 attention mask 以提升长序列训练效率。([#5854](https://github.com/huggingface/trl/pull/5854))
- **KTO 与 DPO 逻辑对齐**: 连续提交多个 PR 重构 KTO 训练器，统一了参考模型对数概率变量命名 (`ref_logps`)、修复了 `train_sampling_strategy` 并清理了 `remove_unused_columns` 逻辑。([#5856](https://github.com/huggingface/trl/pull/5856), [#5864](https://github.com/huggingface/trl/pull/5864), [#5866](https://github.com/huggingface/trl/pull/5866))
- **自蒸馏训练器解耦**: 移除了 Base 类的抽象，将 SDPO 和 SDFT 重构为独立的训练器，降低代码耦合度。([#5862](https://github.com/huggingface/trl/pull/5862))

**[后端与多模态支持]**
- **Qwen3.5 vLLM 权重重映射**: 修复了 Hugging Face 参数前缀与 vLLM 运行时命名空间在权重同步时不匹配的问题。([#5858](https://github.com/huggingface/trl/pull/5858))
- **视觉模型 SFT/DPO 修复**: 限制了视觉数据集在 DPO 中使用 `precompute_ref_log_probs` 时的异常抛出。([#5867](https://github.com/huggingface/trl/pull/5867))
- **新增多模态训练模板**: 为 Idefics3 和 SmolVLM 引入了包含 generation markers 的原生与训练聊天模板。([#5871](https://github.com/huggingface/trl/pull/5871), [#5868](https://github.com/huggingface/trl/pull/5868))

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

TRL 项目正展现出明确的技术演进路线，使其在当前的 LLM 对齐与强化学习生态中保持核心地位：

1. **从同步走向极致的异步架构**: AsyncGRPO 相关的 PR/Issue 密集爆发表明，TRL 正致力于解决 RLHF/GRPO 在大规模分布式训练下的 I/O 瓶颈（如消除无意义的 Padding、优化 vLLM 推理调度），这是提升千卡级别集群算力利用率的关键。
2. **深度适配主流加速框架**: 无论是针对 DeepSpeed ZeRO-3 的底层算子修复，还是针对 NPU/vLLM 拓扑的适配，TRL 正在抹平不同硬件和加速后端（PyTorch, vLLM, DeepSpeed）之间的差异，降低开发者的工程心智负担。
3. **对齐算法的工程化收敛**: 开发团队正在系统性地消除 KTO、DPO、自蒸馏等算法在 API 层面和底层数据采样层面的不一致性。这种模块化、标准化的重构，使得基于 TRL 进行前沿对齐算法研究变得更为可靠。

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

# verl RL 生态日报摘要 (2026-05-28)

## 1. 今日速览
过去 24 小时，verl 项目保持高活跃度：无新版本发布，但合入及推进了 **38 个 Pull Requests**，处理了 **11 个 Issues**。开发重心集中在**序列并行 修复、多后端兼容（Ascend NPU）、Checkpoint 容错机制、Megatron 蒸馏修复以及系统模板边界处理**。

## 2. 版本发布
- **最新 Releases**: 过去 24 小时无新版本发布。

---

## 3. 重点 Issues
今日的 Issue 集中在特定硬件适配、模型策略及底层工作流的边界报错：

- **FSDP2 在 RTX 5090 上的对等访问报错**
  - **描述**: 使用完全分片时在多卡 RTX 5090 上抛出 `CUDA failure 217 'peer access is not supported'`。
  - **链接**: [#2803](https://github.com/verl-project/verl/issues/2803)

- **Qwen3.5 模型序列并行(SP)维度报错**
  - **描述**: 开启 `sp=2` 时引发张量维度不匹配的 RuntimeError（SFT 训练及 Ulysses 序列并行均受影响）。
  - **链接**: [#5762](https://github.com/verl-project/verl/issues/5762), [#6486](https://github.com/verl-project/verl/issues/6486)

- **Megatron 蒸馏 BSHD 维度报错**
  - **描述**: 计算损失时，Teacher top-k log probs 在传入 `preprocess_bshd_engine` 时维度被错误压缩。
  - **链接**: [#6492](https://github.com/verl-project/verl/issues/6492)

- **系统提示词提取逻辑边界 Bug**
  - **描述**: `chat_template.py` 中在处理非严格追加模式或交替角色的模板时，存在返回空列表等错误。
  - **链接**: [#6477](https://github.com/verl-project/verl/issues/6477), [#6500](https://github.com/verl-project/verl/issues/6500), [#6501](https://github.com/verl-project/verl/issues/6501)

- **FSDP2 Rollout 权重同步导致 CPU 内存泄漏**
  - **描述**: 权重同步阶段 CPU 内存持续增长，最终触发 Ray Actor 的 OOM 被杀。
  - **链接**: [#6468](https://github.com/verl-project/verl/issues/6468)

- **Ascend HCCL Checkpoint 引擎实现存疑**
  - **描述**: 社区开发者指出 Ascend 引擎注册名依然为 `nccl`，且广播操作未采用异步线程池。
  - **链接**: [#6425](https://github.com/verl-project/verl/issues/6425)

---

## 4. 关键 PR 进展
核心 PR 聚焦于框架鲁棒性提升、新硬件后端适配以及工作流重构：

- **Checkpoint 容错与状态管理**
  - 增加全局步数透传支持。
  - **亮点**: 修复了权重更新失败时的状态残留问题，现在能够安全回滚 KV Cache 并恢复生成流程。
  - **链接**: [#6507](https://github.com/verl-project/verl/pull/6507), [#6510](https://github.com/verl-project/verl/pull/6510)

- **核心训练与推理 Bug 修复**
  - 修复了 `valid_response_length == 0` 时 Reward tensor 的 `-1` 索引越界写入问题。
  - 修复了 vLLM async server 在 seed 为 null 时的崩溃问题。
  - 将 `use_remove_padding` + SP 的校验逻辑下沉到 FSDPEngine 内部，保障 RL 和 SFT 路径统一。
  - 修复了多 SGLang 副本部署在同一节点时的端口冲突 (`EADDRINUSE`)。
  - **链接**: [#6508](https://github.com/verl-project/verl/pull/6508), [#6503](https://github.com/verl-project/verl/pull/6503), [#6502](https://github.com/verl-project/verl/pull/6502), [#6448](https://github.com/verl-project/verl/pull/6448)

- **Ascend (NPU) 后端与 Megatron 演进**
  - 增加对 Qwen3-VL-30B 模型在 Ascend 910B 上基于 Megatron (mbridge) 的完整支持脚本。
  - 修复 HCCL 引擎的异步执行机制，统一与 NCCL 后端的接口行为。
  - 升级 Ascend CI 基线及 Triton 依赖环境。
  - **链接**: [#6499](https://github.com/verl-project/verl/pull/6499), [#6504](https://github.com/verl-project/verl/pull/6504), [#6433](https://github.com/verl-project/verl/pull/6433), [#6498](https://github.com/verl-project/verl/pull/6498)

- **RFC: RL 工作流全局跳过管理**
  - 基于 `RolloutSkip` 提出了统一的 `SkipManager`，旨在通过配置灵活跳过 RL 流程中的特定阶段（如 Actor生成、Reward计算等），大幅提升 Debug 效率。
  - **链接**: [#6097](https://github.com/verl-project/verl/pull/6097)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **多底层架构兼容的野心**: 项目正并行推进 FSDP2 与 Megatron 后端，且 PR 密集修复了 Sequence Parallelism 与 Ulysses SP 等前沿并行策略，这表明 verl 正在积极解决超大规模 LLM 训练的显存与通信瓶颈。
2. **硬核的异构算力支持**: 从今日的 PR 和 Issue 可以看出，社区对 Ascend NPU (HCCL) 的适配已经深入到 Checkpoint Engine 异步机制及具体的依赖容器构建，正在从“能跑”向“生产级稳定”过渡。
3. **贴近前沿 Post-training 场景**: 无论是针对 Qwen3.5 等最新大模型的适配、针对蒸馏场景 的维度修复，还是 Mooncake 等外部 KV Cache Store 的集成，均证明该项目紧跟当前 LLM 的 RLHF/DPO 及推理加速生态。
4. **注重工程鲁棒性**: `SkipManager` 的 RFC 提案、Reward manager 的防零界点崩溃修复、以及权重同步失败时的容错回滚机制，反映出维护团队在极力降低 RL 训练过程中的“随机挂掉”成本，极大提升了集群长时训练的运维体验。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-05-28 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度趋于平稳。无新版本发布，无新增或更新的 Issues，但合并了 2 个关键的 Pull Requests，主要涉及**强化学习对齐训练（RLHF/DPO）的基础组件修复**以及**分布式环境初始化前的日志系统优化**。

### 2. 版本发布
- **最新 Releases**：近 24 小时无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
今日的 PR 进展与 RL 工程化落地息息相关，特别是对 DPO（Direct Preference Optimization）和全局变量管理的修复：

- **[#2964] fix(logging): use RANK env var in log_rank_zero before dist init** 
  - **链接**: [meta-pytorch/torchtune PR #2964](https://github.com/pytorch/torchtune/pull/2964)
  - **作者**: kratos0718
  - **状态**: [OPEN]
  - **摘要**: 修复了分布式环境下的日志打印逻辑。在以往的设计中，若 `dist.is_initialized()` 为 `False`（即分布式训练组未初始化前，如调用 `config.log_config` 时），`log_rank_zero` 会默认将所有进程的 rank 视为 `0`，导致配置信息被冗余打印。该 PR 通过在分布式初始化前引入 `RANK` 环境变量来判断主节点，优化了 RL 训练脚本启动阶段的控制台输出可读性。

- **[#2965] Fix missing imports in rlhf/loss/dpo.py**
  - **链接**: [meta-pytorch/torchtune PR #2965](https://github.com/pytorch/torchtune/pull/2965)
  - **作者**: tmacd-meta
  - **状态**: [OPEN] (fb-exported, meta-exported)
  - **摘要**: 修复了核心 RLHF 模块 `rlhf/loss/dpo.py` 中缺失的导入依赖。DPO 是目前替代传统 PPO 进行大模型对齐的主流 RL 算法，该 PR 保证了 DPO 损失计算模块的依赖完整性，提升了代码库在调用该损失函数时的健壮性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
torchtune 作为 PyTorch 生态下原生的大模型微调库，其核心价值在于**对齐与 RLHF 流程的极简工程实现**。
1. **聚焦主流 RL 算法**: 无论是今日修复的 DPO Loss，还是其原生支持的 RLHF/PPO 配方，torchtune 提供了从 SFT 到对齐阶段开箱即用的模块化组件（recipes）。
2. **底层控制与调试优势**: 类似 PR #2964 对分布式初始化前后的精细排障，展现了该项目对 RL 训练中“多进程/多节点”复杂状态的深刻理解。开发者可以直接基于 PyTorch 原生 DDP/FSDP 进行深度定制，避免了高度封装的黑盒测试难题。
对于希望深度控制模型对齐过程、二次开发 RL 损失函数的算法工程师而言，torchtune 是目前最轻量且跟进最迅速的工程基座之一。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-05-28)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库无新增 Issue、无新版本发布，但 PR 活动高度活跃（共 9 个更新）。核心开发重点集中在 **GRPO 训练后的评估集成**、**Checkpoint 生命周期管理**，以及针对 **评估脚本的准确性修复**。

---

## 2. 版本发布
**无**。近期无新的 Release 发布。

---

## 3. 重点 Issues
**无**。过去 24 小时内无新增或更新的 Issue。

---

## 4. 关键 PR 进展

### A. RL 训练与评估基础设施完善
*   **[OPEN] 集成 olmo-eval Beaker 启动配置至 GRPO 路径**
    *   **作者**: mnoukhov
    *   **链接**: [allenai/open-instruct PR #1698](https://github.com/allenai/open-instruct/pull/1698)
    *   **摘要**: 引入 `OlmoEvalLaunchConfig`，支持在 GRPO 生成 Checkpoint 后通过 `olmo-eval beaker launch` 自动触发评估任务。这打通了强化学习训练与下游自动评估的闭环。
*   **[OPEN] 统一 SFT / DPO / GRPO 的 Checkpoint 数量限制**
    *   **作者**: TimDettmers
    *   **链接**: [allenai/open-instruct PR #1701](https://github.com/allenai/open-instruct/pull/1701)
    *   **摘要**: 提取并统一了 `keep_last_n_checkpoints`（默认值为 3）到 SFT、DPO 和 GRPO 的所有训练路径中，优化了多阶段的存储管理，避免无限保存导致磁盘溢出。

### B. RL 算法探索
*   **[OPEN] 引入基于难度的课程学习采样器**
    *   **作者**: undfined
    *   **链接**: [allenai/open-instruct PR #1692](https://github.com/allenai/open-instruct/pull/1692)
    *   **摘要**: 为训练流程新增难度课程采样机制，旨在通过动态调整训练数据的难度分布来提升强化学习策略的收敛效率和最终表现。
*   **[CLOSED] TV 散度 Rho 过滤机制 (TVPO)**
    *   **作者**: mnoukhov
    *   **链接**: [allenai/open-instruct PR #1681](https://github.com/allenai/open-instruct/pull/1681)
    *   **摘要**: 基于 VACO 算法的 LLM 修改版（TVPO），通过计算序列级别的 TV 散度 `D_tv = |rho - 1|`，对超过阈值的 Token 梯度进行 Mask，以优化 RLHF 过程中的梯度更新。

### C. 评估脚本与指标准确性修复
*   **[OPEN] 修复 `validate_choice` 的正则匹配与操作数反向 Bug**
    *   **链接**: [PR #1699](https://github.com/allenai/open-instruct/pull/1699) (操作数反向), [PR #1700](https://github.com/allenai/open-instruct/pull/1700) (正则子串误判)
    *   **作者**: Chessing234
    *   **摘要**: 修复了约束评估脚本中验证逻辑的严重缺陷：#1699 修复了验证逻辑操作数反向（导致错误拒绝正确答案）；#1700 引入正则表达式词边界，解决了子串匹配导致的假阳性（例如文本包含 "Apple" 被误判为包含选项 "A"）。
*   **[CLOSED] 修复 `scripts/eval_constraints/if_functions.py` 的衍生 Bug**
    *   **作者**: Chessing234
    *   **链接**: [allenai/open-instruct PR #1651](https://github.com/allenai/open-instruct/pull/1651)

### D. 代码质量与重构
*   **[OPEN] 重构 `benchmark_generators` 的 CSV 处理与路径逻辑**
    *   **作者**: finbarrtimbers
    *   **链接**: [allenai/open-instruct PR #1684](https://github.com/allenai/open-instruct/pull/1684)
    *   **摘要**: 修复了重复/缺失 CSV Header 的问题，并全面将路径处理迁移至现代的 `pathlib` 规范。
*   **[CLOSED] 扩展 Type-checking 覆盖范围**
    *   **作者**: finbarrtimbers
    *   **链接**: [allenai/open-instruct PR #1688](https://github.com/allenai/open-instruct/pull/1688)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **后训练 工程化的标杆**：随着 SFT、DPO、GRPO 等算法的成熟，项目的重心正从“算法原型”转向“大规模训练基础设施”。今天更新的自动评估触发（#1698）和统一 Checkpoint 管理（#1701）证明了 Ai2 正在构建一套高鲁棒性、可自动化的 Post-training Pipeline。
2.  **Reward/Evaluation 准确性的极致追求**：RL 训练的稳定性极大程度上取决于 Reward Model 和 Eval 脚本的准确性。项目近期连续修复了 `validate_choice` 的多个边缘 Bug（#1651, #1699, #1700），说明团队在严控 Reward Hacking 和指标失真问题。
3.  **持续探索前沿 RL 策略**：不仅在工程上做深，项目仍在积极引入新的训练机制，如课程学习（#1692）和基于 TV 散度的梯度过滤（#1681），这对于开源社区跟进顶尖 RL 闭源模型的技术演进具有极高的参考价值。

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

# RL 日报摘要：Gymnasium (2026-05-28)

## 1. 今日速览
过去 24 小时内，Gymnasium 项目整体保持平稳。无新版本发布，无新增或更新的 Issues。项目共产生 1 条新的 Pull Request，核心聚焦于渲染底层依赖的性能优化。

## 2. 版本发布
无。目前项目无最新的 Releases 动态。

## 3. 重点 Issues
无。过去 24 小时内未产生新 Issue 或已有 Issue 的更新。

## 4. 关键 PR 进展
- **[PR #1586](https://github.com/Farama-Foundation/Gymnasium/pull/1586) `[OPEN]` perf: use pygame.display.init() instead of pygame.init() in all environments**
  - **作者**: midhunxavier
  - **摘要**: 该 PR 提出在所有使用 `pygame` 进行渲染的环境和包装器中，将全局初始化方法 `pygame.init()` 替换为更具体的 `pygame.display.init()`（在需要文本渲染的地方额外调用 `pygame.font.init()`）。
  - **技术分析**: `pygame.init()` 会盲初始化所有底层子系统（包括 audio/mixer、joystick、CDROM 等），而绝大多数 RL 环境仅依赖视觉渲染。此修改通过消除无关子系统的初始化开销，能够有效降低环境启动时的内存占用和资源消耗，是一项具有积极意义的底层性能优化。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 作为当前强化学习领域的标准 API 规范，其核心价值不仅在于算法接口的统一，更在于其底层环境实现的健壮性。
类似 [PR #1586](https://github.com/Farama-Foundation/Gymnasium/pull/1586) 这样的底层优化贡献表明，该项目正在持续打磨基础设施。在动辄需要进行千万次 `env.reset()` 和 `env.step()` 的规模化 RL 训练中，消除渲染管线中不必要的初始化开销对提升整体吞吐量和降低计算冗余至关重要。这种对细节的持续精炼，使其继续作为学术界和工业界进行高性能 RL 研究的坚实基石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-05-28 PettingZoo 项目 RL 日报摘要：

# PettingZoo RL 生态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活跃度集中在存量 PR 的推进上，共记录 **5 次 PR 更新**。今日无新增 Issue、无新建 PR 及版本发布。主要动态涉及底层物理引擎 Bug 修复、安全漏洞修补、环境复现性增强以及大规模 API 重构。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日有 5 个存量 PR 发生了状态更新，以下为核心技术细节：

*   **安全漏洞修复：路径遍历漏洞** `[OPEN]`
    *   **链接**: [Farama-Foundation/PettingZoo PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338)
    *   **作者**: tomaioo
    *   **摘要**: 修复了 `knights_archers_zombies` 等环境中图像加载函数 `get_image()` 存在的路径遍历漏洞。该漏洞被评级为 `Medium` 严重级别，涉及文件为 `pettingzoo/butterfly/knights_archers_zombies/src/img.py`。
*   **环境 Bug 修复：Gin Rummy 种子重置导致奖励机制异常** `[OPEN]`
    *   **链接**: [Farama-Foundation/PettingZoo PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)
    *   **作者**: Nikelroid
    *   **摘要**: 解决了 `gin_rummy` 环境在调用 `reset(seed=...)` 时，会静默将 `knock_reward` 和 `gin_reward` 恢复为 RLCard 默认值的问题。此修复对于保证多智能体强化学习（MARL）实验的严格可复现性至关重要。
*   **环境 Bug 修复：Pong 物理碰撞引擎** `[OPEN]`
    *   **链接**: [Farama-Foundation/PettingZoo PR #1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336)
    *   **作者**: sdace9719
    *   **摘要**: 修复了 `Cooperative pong` 环境中的边界反弹物理计算逻辑错误。
*   **核心 API 重构：Knights Archers Zombies 升级至 v11** `[OPEN]`
    *   **链接**: [Farama-Foundation/PettingZoo PR #1297](https://github.com/Farama-Foundation/PettingZoo/pull/1297)
    *   **作者**: dm-ackerman
    *   **摘要**: 对 KAZ 环境进行了重大重构。废弃了原 `vector_state`、`use_typemasks` 等参数，统一合并为 `obs_method` 配置项，以解决旧版参数组合不合法的问题。同时修复了初始生成和状态相关的 Bug。
*   **生态工具扩展：新增 `RecordVideo` 录像包装器** `[OPEN]`
    *   **链接**: [Farama-Foundation/PettingZoo PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
    *   **作者**: nightly
    *   **摘要**: 从 Gymnasium 直接移植了 `RecordVideo` 包装器至 PettingZoo，分别适配了 Base 和 AEC（Action-Execution-Cyclic）环境。填补了原生录像功能的空白，降低了对 SB3 或 TorchRL 等外部框架的依赖。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为多智能体强化学习（MARL）底层的标准 API 提供者，近期的更新趋势体现出极高的工程严谨性：
1. **安全性与稳定性兜底**：从修复图像加载的路径漏洞（PR #1338）到处理底层物理引擎的碰撞 Bug（PR #1336），项目正在对老旧环境进行深度清理。
2. **严控实验可复现性**：针对 RLCard 交互的奖励状态重置 Bug（PR #1335）说明团队在关注算法训练中容易被忽视的种子控制死角。
3. **与现代 RL 工具栈对齐**：引入独立的 `RecordVideo`（PR #1306）与重构环境观测空间 API（PR #1297），表明 PettingZoo 正在持续降低 MARL 研究者的工程心智负担，继续巩固其作为 Gymnasium 官方多智能体伙伴库的核心地位。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报摘要：Stable Baselines3 (SB3)
**数据周期**：2026-05-28

## 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库活跃度保持平稳，无新版本发布。共有 1 个 Issue 和 1 个 Pull Request 获得更新。当前的社区贡献重点聚焦于 **Gymnasium 最新 API（如 `FrameStackObservation`）与 SB3 底层图像空间校验逻辑的兼容性**。

## 2. 版本发布
无。

## 3. 重点 Issues
- **#2090** [`[OPEN]`] **[Bug]: `is_image_space` works poorly with Gymnasium's `FrameStackObservation`**
  - **链接**：[DLR-RM/stable-baselines3 Issue #2090](https://github.com/DLR-RM/stable-baselines3/issues/2090)
  - **追踪**：由 *fracapuano* 提出于 2025-02-25，昨日（05-27）有新动态，当前累计 6 条评论。
  - **技术摘要**：当使用 Gymnasium 的 `FrameStackObservation` 包装器处理图像观测时，它会在张量前增加一个维度（例如将形状 `(3, 64, 64)` 的图像堆叠 2 帧后变为 `(2, 3, 64, 64)`）。由于维度顺序和形状的变化，SB3 的 `is_image_space` 校验函数无法正确识别该空间为图像，导致特征提取器（如 CNN）初始化失败或报错。

## 4. 关键 PR 进展
- **#2258** [`[OPEN]`] **docs: warn against using Gymnasium FrameStackObservation for image observations**
  - **链接**：[DLR-RM/stable-baselines3 PR #2258](https://github.com/DLR-RM/stable-baselines3/pull/2258)
  - **追踪**：由 *midhunxavier* 于 2026-05-27 发起。
  - **技术摘要**：作为上述 Issue #2090 的初步响应，该 PR 旨在修改 SB3 的自定义环境官方文档。在底层 `is_image_space` 的启发式逻辑彻底重构之前，该 PR 新增了一条明确的技术警告，提醒开发者在处理图像观测（Image Observations）时谨慎使用原生的 `FrameStackObservation`，以防因维度不匹配导致训练管线中断。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Stable Baselines3 依然是强化学习社区最核心的“基准基线”与工业级落地框架。近期围绕 `FrameStackObservation` 的动态表明，**随着 Gymnasium（原 OpenAI Gym）API 的不断演进和底层标准的变化，SB3 依然在积极跟进并处理这些破坏性更新**。
在当前 RL 生态（尤其是 Decision Transformer、离线 RL 等新范式）高度依赖标准化环境交互的背景下，SB3 对观测空间解析的严谨性以及对文档细节的维护，确保了上层算法能够免受底层 API 变动的干扰。持续跟进该项目，能够帮助开发者规避由于环境包装器维度变化引发的隐蔽 Bug。

</details>