# RL 开源生态日报 2026-06-19

> 生成时间: 2026-06-18 22:34 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已彻底完成从“传统单机游戏/控制台”向“大规模语言模型（LLM）对齐与智能体构建”的范式转移。整个生态呈现出高度的分层化与垂直化特征：
*   **核心算法与微调层**：以 TRL、verl、slime、OpenRLHF 为代表，正激烈角逐大模型 RLHF/RLVR 的训练效率与算法覆盖度。
*   **分布式系统底座与基础设施层**：以阿里巴巴 ROCK 为代表，专注解决大规模 RL 任务在异构算力集群上的云原生调度、环境隔离与多语言 API 管控。
*   **经典传统 RL 与研究基座**：以 Stable Baselines3 (SB3) 和 Open Instruct 为代表，这类项目当前处于极度稳定的维护期，更多作为学术基线或底层基础库存在。

## 各项目活跃度对比
过去 24 小时内，生态内项目活跃度出现断崖式分化。大模型 RL 框架占据了 95% 以上的代码提交与讨论热度，而传统 RL 仓库则处于静默状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 14 | 43 | 0 | 架构与技术双线狂奔：全面打磨 AsyncGRPO，丰富 RLVR 内置奖励 |
| **verl** | 25 | 19 | 0 | 硬核系统工程的巅峰：死磕千卡规模下的 FSDP/Megatron 显存与带宽极限压榨 |
| **ROCK** | 3 | 8 | 0 | 填补基建空白：TS/Python SDK 对齐，死磕 K8s 与底层容器资源隔离 |
| **slime** | 3 | 6 | 0 | 极速跟进前沿：第一时间暴露并解决 B200 硬件与新架构推理死锁问题 |
| **AReaL** | 1 | 5 | 0 | 突破通信瓶颈：探索 FP8 训推协同与前沿 PD 分离架构 |
| **OpenRLHF**| 1 | 4 | 0 | 拥抱 Agentic RL：精细化多轮 Agent 训练的 token 掩码与惩罚机制 |
| **ROLL** | 1 | 1 | **1** | 重大版本跨越：v0.3.0 发布，重仓多模态 RLVR 与异构硬件 |
| **SB3** | 0 | 1 | 0 | 底层精雕细琢：统一缓冲区数据类型，维持极简与高稳定性 |
| **Open Instruct** | 0 | 1 | 0 | 算子级优化：集成 Liger 融合交叉熵，巩固开源可复现基座 |
| **其他项目**<br>*(CleanRL/Gym等)*| 0 | 0 | 0 | 维持静默，底层 API 与生态趋于绝对固化 |

## 共同关注的研究与工程方向
当前生态的演进呈现出高度的共振，主要分为算法范式突破与底层算力榨取两个维度：

**研究侧信号：**
1.  **Agentic Multi-turn RL 成为绝对重心**：纯粹的单轮指令对齐已退居二线。OpenRLHF 和 verl 都在重点攻坚多轮 Agent 交互中的复杂上下文维持（如 Continuous Token）和精细化的 Action Mask 惩罚计算。
2.  **RLVR (Verifiable Rewards) 的工程化落地**：针对推理模型（O1-like）的训练需求，框架开始密集内置基于规则和格式的奖励函数（如 TRL 引入余弦缩放与防重复惩罚）。
3.  **算法数学机制的严谨性审查**：如 TRL 社区深度探讨了 RLOO 与 GRPO 在 KL 惩罚计算上的一阶与二阶近似差异，表明开源生态从“能跑就行”进入了严苛的学术对齐阶段。

**工程/基础设施侧信号：**
1.  **完全异步训练架构 的全面铺开**：为了消灭 GPU 在 Rollout 阶段的空转，TRL 和 verl 均在投入大量精力重构异步采样与训练的稳定性，解决权重同步与梯度计算的竞态问题。
2.  **显存与通信带宽的“榨汁机”式优化**：无论是 TRL 的 DPO 分块损失、slime 的 PPO 复杂度降维，还是 verl/AReaL 的 Megatron 状态对齐与 FP8 在线量化，都在试图打破万卡/千亿参数规模下的内存墙。
3.  **推理引擎 的深度解耦集成**：框架不再局限于自带的生成模块，SGLang/vLLM 的增量权重同步、PD 分离架构被大规模引入 Rollout 阶段以提升吞吐。

## 差异化定位分析
*   **TRL：最广泛的大众化微调标准**。它紧跟 HuggingFace 生态，重心在于降低前沿 RL 算法（如 DPO/GRPO）的使用门槛，其在 LoRA/MoE 兼容性和算子级显存优化上的努力，使其成为研究者和一般开发者的首选。
*   **verl & slime：大规模工业级训练的硬核先锋**。这两个项目不满足于单机或小规模场景，它们深度绑定 Megatron 等千亿参数并行框架，死磕底层分布式通信（如增量同步）与硬件极限。
*   **AReaL：专注 Rollout 阶段的极致加速器**。其独特价值在于对推理侧（SGLang）的极致压榨，通过引入 FP8 广播和 PD 分离，专注于解决“生成耗时”这一 RL 训练的最大痛点。
*   **OpenRLHF：敏捷的 Agentic 训练反应堆**。在跟进多轮对话和工具调用训练上展现出极高的代码灵活性，专注于解决实际 Agent 场景中长上下文截断与动作掩码的边界问题。
*   **ROCK：不可或缺的云原生底座**。当其他项目卷算法和显存时，ROCK 解决了“怎么把任务调度到 K8s 上”的根本问题。其跨语言 SDK 对齐和 OCI/XFS 底层支持，填补了大规模算力平台调度的空白。

## 社区热度与成熟度
*   **高频重构期（TRL, verl）**：巨大的 PR 和 Issue 数量表明社区处于极速扩张与重构阶段。开发者需要对底层架构（如 AsyncGRPO）进行反复的对齐与修复，适合资深系统工程师深度参与。
*   **工业级输出期（ROLL, OpenRLHF）**：通过发布稳定的大版本（如 ROLL v0.3.0）或提供高度复用的工业级范例，表明这些项目已跨过早期验证阶段，开始承载实际的大规模业务。
*   **基建完善期（ROCK）**：专注于 TS SDK 对齐、鉴权透传等 DevOps/MLOps 细节，标志着项目正向企业级平台标准演进。
*   **高度收敛期（SB3, Open Instruct 等）**：这些传统或专注于极致可复现性的库，Issue 趋近于 0，活跃度极低但代码库极其健壮。它们代表了生态中的“稳固大后方”。

## 值得关注的趋势信号
1.  **异构算力脱钩趋势明显**：随着算力供给紧张，主流 RL 框架（verl, ROLL）正在快速补齐对 AMD 和华为昇腾 NPU 的支持与双机部署验证。大模型 RL 训练摆脱单一 NVIDIA 硬件绑定已成为开源生态的战略级共识。
2.  **多模态与视频 RLVR 的黎明**：随着文本侧推理红利见顶，ROLL 等项目率先支持 Video/Audio 数据集的 RLVR 训练，预示着下一个阶段的 RL 红利将向多模态基座和视频推理模型转移。
3.  **“算力利用率”成为最高考核指标**：从 SGLang 的增量权重广播、PD 架构分离，到模型权重的在线 FP8 转换，开源生态的核心创新点已从“提出新 RL 算法”转移至“提升分布式系统的计算与通信吞吐比”。系统工程师正在主导当前阶段 RL 生态的话语权。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 生态开源日报：ROLL (2026-06-19)**

### 1. 今日速览
过去 24 小时内，阿里巴巴 ROLL 仓库动态集中在重大版本的发布与宣发上。项目共计新增 **1 个 Release**、**1 条 Issue 更新** 与 **1 条 PR 更新**，标志着项目已正式迈入 v0.3.0 阶段，核心能力从纯文本/基础 RL 扩展至多模态与复杂 Agent 强化学习领域。

### 2. 版本发布
- **[Release v0.3.0](https://github.com/alibaba/ROLL/releases/tag/v0.3.0)**
  本次更新是 ROLL 迈向 v0.3.0 的里程碑，技术底座与业务支持大幅拓宽，核心更新包括：
  - **多模态能力跃升**：新增 Video/Audio RLVR（Reinforcement Learning with Verifiable Rewards）训练支持，集成 Video-R1 reward。
  - **Agent 框架解耦**：引入 AgentRunner 2.0 抽象，支持更灵活的复杂多模态 Agent 交互逻辑。
  - **算法与训练机制扩展**：支持 MTP (Multi-Token Prediction) 训练模式，新增 Router Replay 与 Multi-Teacher OPD 特性。
  - **工程与异构算力**：接入 OpenTelemetry 增强 RL 训练全链路可观测性；强化 `mcore_adapter` 能力；扩展对 NPU（昇腾）及 AMD 硬件算力卡的适配。

### 3. 重点 Issues
- **[#464] [OPEN] 🚀 [2026/06/18] Recent Updates Summary for ROLL Project**
  - **链接**: [alibaba/ROLL Issue #464](https://github.com/alibaba/ROLL/issues/464)
  - **作者**: PanAndy
  - **摘要**: 项目维护者发布的 v0.3.0 版本官方汇总贴。详细梳理了 Video RLVR、AgentRunner 2.0 及底层异构算力适配等核心特性的设计初衷，作为社区开发者了解 v0.3.0 架构演进的统一入口。

### 4. 关键 PR 进展
- **[#463] [CLOSED] (feat): publish v0.3.0.**
  - **链接**: [alibaba/ROLL PR #463](https://github.com/alibaba/ROLL/pull/463)
  - **作者**: PanAndy
  - **摘要**: 将 ROLL 版本号正式推进至 v0.3.0 的合并请求。该 PR 目前已 CLOSED（通常代表已成功 Merge 进主分支并打 Tag），是触发此次全新版本和 Release Notes 发布的直接动因。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
- **突破模态边界**：随着 RL 在推理侧的红利显现，**Video/Audio RLVR** 的支持使 ROLL 成为少数能原生处理多模态可验证奖励训练的开源框架，紧跟最新的多模态基座训练需求。
- **解耦复杂 Agent 训练**：**AgentRunner 2.0** 的引入表明 ROLL 正在重点攻克 LLM Agent 与外部环境交互的工程痛点，为后续自动化/长周期 Agent 强化学习打下了架构基础。
- **坚定的异构算力战略**：在算力供给日益紧张的背景下，ROLL 对 **NPU (昇腾) 与 AMD 显卡**的持续适配，为大规模 RL 训练提供了摆脱单一算力（NVIDIA）硬件绑定的高可用开源备选方案。
- **企业级可观测性**：原生支持 **OpenTelemetry** 意味着 ROLL 正在向大规模分布式集群的工业级标准靠拢，大幅降低了千卡规模下 RL 训练的 Debug 与性能调优门槛。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 强化学习生态日报 (2026-06-19)

## 1. 今日速览
过去 24 小时内，ROCK 仓库活动频繁。共有 **3 条 Issue** 更新（1 个新建，2 个已关闭）和 **8 条 PR** 更新（3 个新建，3 个已关闭）。社区核心聚焦于 **TypeScript SDK 与 Python SDK 的全面对齐**、**底层容器/镜像管理的健壮性增强**（如 OCI 镜像探测、XFS 配额、K8s 鉴权），并已顺利完成 **v1.9.0 文档跃迁与 v1.9.2 版本号前置准备**。

## 2. 版本发布
- **当前最新发布**：无新 Release 产出。
- **版本库基建**：已在代码层面将 `rl-rock` 版本号从 `1.9.1` 提升至 `1.9.2`（[PR #1131](https://github.com/alibaba/ROCK/pull/1131)）。同时，v1.9.0 的多语言（中英）文档已正式合入并更新至 README 发布表中（[PR #1134](https://github.com/alibaba/ROCK/pull/1134)）。

## 3. 重点 Issues
- **#1135 [OPEN] `fix(admin): mirror image probe misses OCI-format images`**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK Issue #1135](https://github.com/alibaba/ROCK/issues/1135)
  - **简析**: 发现 ROCK 的 registry v2 manifest API 探测器存在兼容性缺陷。由于请求头仅硬编码了 `application/vnd.docker.distribution.manifest.v2+json`，导致 OCI 格式的镜像（`application/vnd.oci.image.manifest.v1+json`）被误报为 404 缺失，尽管这些镜像实际上可以被正常 `docker pull`。
- **#1133 [CLOSED] `[enhancement] [Feature] docs: add v1.9.0 documentation and update README release table`**
  - **作者**: jinbai340997 | **链接**: [alibaba/ROCK Issue #1133](https://github.com/alibaba/ROCK/issues/1133)
  - **简析**: 推动社区文档升级的提案，要求基于 `1.8.x` 分支切分并发布 `1.9.x` 版本的中英文文档，该提案已通过 PR #1134 落地关闭。
- **#1132 [CLOSED] `chore: bump version to 1.9.2`**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK Issue #1132](https://github.com/alibaba/ROCK/issues/1132)
  - **简析**: 配合发版周期的版本号自增追踪 Issue，已随代码合入关闭。

## 4. 关键 PR 进展
- **#1137 [OPEN] `feat(ts-sdk): align TypeScript SDK with Python SDK`**
  - **作者**: xdlkc | **链接**: [alibaba/ROCK/pull/1137](https://github.com/alibaba/ROCK/pull/1137)
  - **简析**: **今日最大更新**。为了让前端/Node.js 生态无缝接入 RL 平台，本 PR 实现了 TS SDK 与 Python SDK 的特性对齐。新增了 `bench/` 和 `job/` 等 8 个核心模块，跨越 50 多个文件，并附带了 400+ 单元测试，大幅扩展了跨语言调度 Trial/Job 的能力。
- **#1095 [OPEN] `feat(archive): integrate archive lifecycle into sandbox state machine, operator, and reconciler`**
  - **作者**: zhangjaycee | **链接**: [alibaba/ROCK/pull/1095](https://github.com/alibaba/ROCK/pull/1095)
  - **简析**: 为强化学习计算任务的“沙箱”引入了完整的归档生命周期。在状态机中新增了 `archiving` 和 `archived` 状态，实现了算力资源的精细化回收与实验状态归档闭环。
- **#1124 [OPEN] `feat(deployments): add XFS project quota fallback for containerd image store`**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK/pull/1124](https://github.com/alibaba/ROCK/pull/1124)
  - **简析**: 解决了底层运行时切换到 containerd image store 时 `--storage-opt size=` 不受支持的痛点。通过动态探测容器的 overlay UpperDir，并应用 `xfs_quota` 项目配额作为 Fallback，保障了 RL 镜像在运行时的磁盘隔离与限额控制。
- **#1130 [OPEN] `feat(k8s): transport image auth to k8s`**
  - **作者**: Generalwin | **链接**: [alibaba/ROCK/pull/1130](https://github.com/alibaba/ROCK/pull/1130)
  - **简析**: 优化云原生部署体验。通过在模版里配置 annotation 将用户自定义镜像仓库的加密鉴权信息透传给 K8s 下游。出于工程权衡，目前暂未引入复杂的 K8s Secret CR。
- **#1136 [OPEN] `fix(admin): support OCI manifest format in mirror image probe`**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK/pull/1136](https://github.com/alibaba/ROCK/pull/1136)
  - **简析**: 快速响应并修复了 Issue #1135。在探测请求的 Accept Header 中补齐了 Docker v2、OCI 以及 manifest list 等 4 种主流 manifest 媒体类型。
- **#1122 [OPEN] `feat(ts-sdk): add restart() and autoDeleteSeconds to Sandbox`**
  - **作者**: berstpander | **链接**: [alibaba/ROCK/pull/1122](https://github.com/alibaba/ROCK/pull/1122)
  - **简析**: 为 TS Sandbox 类新增 `restart()` 方法与自动销毁计时器。通过 OOP 重构提取了 `waitForAlive()` 轮询逻辑，确保重启与启动过程的状态检测一致性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
ROCK 正在填补强化学习基础设施的关键拼图，当前迭代呈现出极强的工程落地价值：

1. **跨语言平台管控能力的成熟**：RL 算法研究高度依赖 Python，但企业级 MLOps 平台往往由 TypeScript/Node.js 驱动前端和调度面板。ROCK 大举实现 TS SDK 与 Python SDK 的绝对特性对齐（涵盖 Job、Trial、Benchmark 配置），意味着 RL 算法工程师和平台架构师终于能在同一个标准 API 下无缝协作。
2. **直击算力底层痛点**：大规模 RL 训练极其消耗系统资源。从近期频繁合入的 PR 可以看出，ROCK 正在死磕“底层沙箱隔离与编排”的硬骨头——无论是兼容 containerd 的 XFS 磁盘配额回退、容器生命周期的归档状态机，还是解决 OCI 标准镜像探测问题，都极大提升了在异构、高密度集群环境下的部署成功率与稳定性。
3. **无缝对接云原生生态**：在结合 K8s 鉴权透传等方面，ROCK 没有重新发明轮子，而是顺应了当前算力调度的云原生化趋势。它使得在 K8s 上编排复杂的 RL Trial 变得像部署微服务一样标准。

如果你正在寻找一个不局限于算法层，而是真正解决大规模 RL 训练“调度难、环境隔离难、多端调用难”的系统底座，ROCK 是当前最活跃、最值得追踪的开源选项之一。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**slime RL 生态项目日报 | 2026-06-19**

**1. 今日速览**
过去 24 小时内，slime 仓库共有 3 条 Issue 和 6 条 PR 更新。社区当前的核心关注点集中在：大模型（如 Qwen3 系列）在最新 SGLang/v0.3.0 镜像下的多卡训练/生成稳定性，以及底层 PPO 计算与 Agent 示例的代码优化。今日无新版本发布。

**2. 版本发布**
无新版本发布。

**3. 重点 Issues**
*   **[Bug] v0.3.0 跑 Qwen3 35B A3B 模型时第二次 rollout 产生乱码** ( [#2091](https://github.com/THUDM/slime/issues/2091) )
    *   **摘要**：开发者反馈在 slime-v0.3.0 及其配套的 `sglang:v0.5.12` 镜像下运行 Qwen3-35B-A3B 时，第二轮 rollout 阶段输出乱码。回退至 v0.2.4 及 `sglang:v0.5.9` 镜像后正常。高度怀疑为最新版依赖镜像引入的 Bug。
*   **[Bug] 8×B200 GPUs (CP=4, TP=2) 架构下 Rollout 后训练无限挂起** ( [#1487](https://github.com/THUDM/slime/issues/1487) )
    *   **摘要**：在最新一代 B200 硬件上配置 CP 和 TP，Qwen3-4B 模型在完成 rollout 进入训练阶段时陷入死锁，仅存在 SGLang 健康检查网络通信，无实际训练进度。
*   **[Question] Qwen3.5 27B 训练报错** ( [#1732](https://github.com/THUDM/slime/issues/1732) )
    *   **摘要**：社区用户在运行 Qwen3.5 27B 模型时，于 Megatron-LM 的 Transformer 层抛出前向传播异常。

**4. 关键 PR 进展**
*   **[性能优化] PPO 核心代码交叉熵计算降复杂度** ( [PR #2076](https://github.com/THUDM/slime/pull/2076) | OPEN )
    *   **摘要**：通过在计算 log-prob 和 entropy CE 之前提前 gather response/loss-mask rows，从根本上减小了计算的渐进复杂度（Asymptotic complexity），旨在彻底解决大模型场景下的 OOM 问题。
*   **[功能更新] 支持 top_p mask** ( [PR #2102](https://github.com/THUDM/slime/pull/2102) | OPEN )
    *   **摘要**：新增 top_p mask 特性支持，增强生成阶段的解码可控性。
*   **[架构精简] 移除 bshd 支持** ( [PR #2100](https://github.com/THUDM/slime/pull/2100) | CLOSED )
    *   **摘要**：移除 bshd 模块，临时影响 VLM 示例。官方正准备重构 VLM 相关代码。
*   **[示例修复] 修复 tau-bench Agent 策略配置** ( [PR #2101](https://github.com/THUDM/slime/pull/2101) | OPEN )
    *   **摘要**：修复了 tau-bench 示例中由 Pydantic 静默忽略导致的 `agent` 键名错误，将其更正为实际生效的 `agent_strategy`。
*   **[代码清理] 移除无效的 Dr.GRPO 文档引用** ( [PR #2096](https://github.com/THUDM/slime/pull/2096) | CLOSED )
    *   **摘要**：清理了中/英文档及 arguments.py 中对仓库内不存在的 Dr.GRPO reducer 示例的无效引用。
*   **[示例更新] CISPO 自定义 Loss 示例** ( [PR #2026](https://github.com/THUDM/slime/pull/2026) | CLOSED )
    *   **摘要**：重构 CISPO 支持，不再将其作为内置的 advantage estimator，而是转化为以示例优先的 `custom_loss` 实现。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
1.  **极速跟进前沿硬件与架构**：Issue 区已经出现关于 NVIDIA B200 以及 Qwen3 系列架构（MoE 等）的实际落地测试反馈。slime 正在第一时间暴露并解决下一代算力集群与新一代开源模型结合时的工程痛点（如 Issue #1487, #2091）。
2.  **硬核的底层工程优化**：面对 RLHF 阶段极其吃显存的 log-prob/entropy 计算，slime 社区开发者正在从“降低常数项”进化到“降低渐进复杂度”（PR #2076），展现了在 Megatron 级别的并行框架下做极致显存优化的技术深度。
3.  **对齐 RL + Agent 最新范式**：无论是 CISPO 等最新 RL 算法的解耦集成（PR #2026），还是 tau-bench 等 Agent 评测环境的工程适配（PR #2101），slime 正在迅速填补强化学习算法与 LLM Agent 应用之间的基础设施鸿沟。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这里是为您生成的 2026-06-19 AReaL（RL开源生态）日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **5 个 Pull Requests** 和 **1 个 Issue**，无新版本发布。整体活动高度聚焦于**底层推理与训练通信的极致性能优化**（如 FP8 权重传输、PD 分离架构）以及**算法与周边生态的兼容性补全**。

### 2. 版本发布
*   **Releases**: 过去 24 小时无新版本发布（0 个）。

### 3. 重点 Issues
*   **[Feature] FSDP BF16 Training + SGLang FP8 Rollout** [#1378](https://github.com/areal-project/AReaL/issues/1378)
    *   **作者**: ZiyiTsang | **状态**: [stale]
    *   **摘要**: 讨论在 FSDP 框架下保持 BF16 训练，同时为 SGLang 推理提供 FP8 块级量化支持。该 Issue 确认了在不破坏现有训练配置的前提下，通过安全的默认值和仅影响 `xccl` 权重更新模式，可实现高效的混合精度训练推理协同。

### 4. 关键 PR 进展
今日的 PR 更新展现了 AReaL 在前沿 RL 训练机制上的深入探索：

*   **混合精度与显存优化**:
    *   **#1379 [stale] feat[v1]: fp8 weight transfer from fsdp bf16 to sglang fp8** ([链接](https://github.com/areal-project/AReaL/pull/1379))
        *   **核心**: 训练引擎（BF16）在线将权重量化为 FP8，并通过 NCCL 广播至 SGLang，实现了训练到 Rollout 的 FP8 端到端示例，大幅降低通信显存开销。
*   **推理架构演进**:
    *   **#1364 [stale] feat[v2]: Support PD Disaggregation: DP=2(1P1D),TP=n** ([链接](https://github.com/areal-project/AReaL/pull/1364))
        *   **核心**: 引入 PD（Prefill-Decode）分离架构。针对自回归解码阶段 GPU 算力闲置（内存瓶颈）的问题，将推理拆分为两个独立角色以加速 Rollout 过程。
*   **算法与功能引入**:
    *   **#1424 docs: add IcePop/KPop feature introduction** ([链接](https://github.com/areal-project/AReaL/pull/1424))
        *   **核心**: 引入 IcePop/KPop 配置，并在 Math & Reasoning 示例与算法表中更新，扩展了 GRPO 系列算法的支持边界。
*   **生态兼容性与基础设施修复**:
    *   **#1411 fix(openai): render tool-call arguments as a mapping for HF chat templates** ([链接](https://github.com/areal-project/AReaL/pull/1411))
        *   **核心**: 修复 OpenAI API 的 tool-call arguments JSON 字符串格式与 HuggingFace chat templates（如 Qwen3 Coder）所期望的 mapping 格式之间的渲染冲突。
    *   **#1161 [reviewed] feat(infra): Support for proxy server through RayScheduler** ([链接](https://github.com/areal-project/AReaL/pull/1161))
        *   **核心**: 通过引入 `RayHTTPLauncher` actor 启动 forked HTTP workers，增强分布式调灵活性，支持代理服务器通信。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 的近期动向直击当前大模型强化学习的核心痛点：**算力利用率与通信瓶颈**。
1.  **打通 FP8 训推数据流**: #1378 和 #1379 试图将 SGLang 的 FP8 推理与 FSDP 的 BF16 训练无缝结合。在 RLHF/RL 训练中，Rollout 阶段的显存和带宽占用极高，在线 FP8 权重转换与广播将极大提升大参数模型的训练吞吐量。
2.  **拥抱 PD 分离架构**: #1364 支持将 Prefill 和 Decode 分离部署（DP=2, TP=n），这是目前业界突破 LLM 推理解码瓶颈的最前沿方案，将其引入 RL Rollout 阶段将显著缩短单步训练耗时。
3.  **深入底层系统调度**: 从 Ray 分布式代理调度的支持（#1161）到解决特定 chat template 的适配冲突（#1411），说明该项目正在系统级层面打通端到端工程落地的最后一公里。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

**TRL (huggingface/trl) RL 日报摘要 | 2026-06-19**

这里是为您梳理的 2026-06-19 TRL 开源项目日报。当前阶段 TRL 处于无新版本发布的高频迭代期，核心焦点集中在 **异步 GRPO (`AsyncGRPO`) 对齐与架构优化**，以及底层显存与计算效率的提升。

### 1. 今日速览
*   **Issue 动态**：过去 24 小时更新 14 条，其中历史积压的早期 Bug（如 vLLM 评估、Flash Attention 兼容性）大量被清理关闭。
*   **PR 动态**：过去 24 小时更新 43 条，`AsyncGRPO` 的各项对齐与代码重构占据了绝对主力。
*   **Releases**：0 个。无新版本发布。

---

### 2. 版本发布
无新版本发布。目前代码库主分支处于高频合并与测试优化阶段。

---

### 3. 重点 Issues
今日更新的 Issues 更多反映了对现有架构的梳理与边界测试反馈，重点关注 MoE 架构兼容与底层组件计算：

*   **DPO 与 MoE 架构兼容性崩坏**：[#5222](https://github.com/huggingface/trl/issues/5222) 指出，在使用 Transformers 5.x 训练 MoE 模型时，若 PEFT LoRA 配置了 `target_parameters`，`DPOTrainer` 的 ref adapter 会触发崩溃（已关闭）。
*   **SFT 精度截断 Bug**：[#3927](https://github.com/huggingface/trl/issues/3927) 报告当序列长度大于 `max_length` 时，`assistant_only_loss=True` 会静默失败，可能导致错误掩盖（状态：Open）。
*   **RLOO 与 GRPO 的 KL 惩罚不一致**：[#5889](https://github.com/huggingface/trl/issues/5222) 提出深刻的学术实现探讨，指出 `RLOOTrainer` 使用一阶 log 比率计算 KL（可能出现负数），而 `GRPOTrainer` 使用 Schulman 二阶近似（方差更低）。这促使了相关文档 PR 的产生。
*   **CI/CD 测试 OOM 干扰**：[#6105](https://github.com/huggingface/trl/issues/6105) 与 [#6102](https://github.com/huggingface/trl/issues/6102) 指出，在共享的 T4 Runner 上，GKD 结合 Liger 的测试偶尔会发生 OOM，导致不相关的 PR 被阻断。

---

### 4. 关键 PR 进展
今日的 PR 更新揭示了 TRL 下一步的演进重心：**异步强化学习对齐、内存极致优化、RLVR 内置奖励函数**。

**A. AsyncGRPO 的全面标准化对齐**
异步 GRPO（`AsyncGRPOTrainer`）正在经历一场深度的代码梳理，核心目的是与同步版 `GRPOTrainer` 保持数学与 API 的高度一致：
*   **参数与行为对齐**：统一了 `epsilon_high` 的回退机制（[PR #6019](https://github.com/huggingface/trl/pull/6019)）、`num_completions_to_print` 的类型（[PR #6020](https://github.com/huggingface/trl/pull/6020)）、日志记录步数（[PR #6016](https://github.com/huggingface/trl/pull/6016)），以及损失计算中的变量命名规范（[PR #6013](https://github.com/huggingface/trl/pull/6013)）。
*   **异步 Rollout 逻辑修复**：[PR #6072](https://github.com/huggingface/trl/pull/6072) 修复了环境 `reset()` 存在随机性时，异步采样观测不一致的严重逻辑漏洞。

**B. 显存与计算优化 (Memory & Compute Optimization)**
*   **DPO 分块损失 (Chunked Loss MVP)**：[PR #5853](https://github.com/huggingface/trl/pull/5853) 引入 `use_chunked_loss=True`。通过跳过完整的 `lm_head` 投影并分块计算 log-probs，大幅降低 DPO 训练的峰值激活显存。
*   **冗余计算剔除**：[PR #6046](https://github.com/huggingface/trl/pull/6046) 移除了 shift logits/labels 模式中不必要的 `.contiguous()` 调用，优化底层执行效率。
*   **vLLM 修复**：[PR #5765](https://github.com/huggingface/trl/pull/5765) 移除了废弃的 `use_transformers_paged`，替换为连续批处理，修复了旧代码会静默绕过重要性采样校正的致命 Bug。

**C. RLVR (RL with Verifiable Rewards) 生态扩充**
*   新增内置奖励函数：为应对日益增长的推理模型（如 O1-like）训练需求，TRL 正在丰富其原生奖励库。新增了余弦缩放奖励（[PR #6066](https://github.com/huggingface/trl/pull/6066)）与重复惩罚奖励（[PR #6058](https://github.com/huggingface/trl/pull/6058)），专门针对促使模型生成更简洁的推理链。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的数据可以清晰看出，TRL 并没有停留在“提供一个能跑的 GRPO”这一初级阶段，而是在攻坚目前强化学习落地大模型最棘手的工程难题：

1.  **押注异步架构**：RL 训练中 GPU 因为等待生成而空转是极大的算力浪费。今日数十个针对 `AsyncGRPO` 的对齐与修复 PR，表明 TRL 正在快速打磨异步采样与训练的工程稳定性，这是支撑大规模 Agent 及复杂环境交互的基础。
2.  **务实解决工程瓶颈**：无论是 DPO 的 Chunked Loss，还是针对 MoE 架构的兼容修复，TRL 紧跟 Transformers 5.x 的步伐，在底层显存优化上做到了极致，直接降低了 RL 微调的硬件门槛。
3.  **贴合前沿 RLVR 范式**：直接内置基于规则和长度控制的奖励函数（如防重复、鼓励简洁推理），证明其具备极强的学术敏锐度，第一时间将前沿论文中的 Best Practices 工程化，持续巩固其在开源 RL 微调生态的统治地位。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 OpenRLHF 项目 2026-06-19 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库共有 5 项动态更新（包含 1 条 Issue 和 4 条 PR）。今日无新版本发布。社区开发重心集中在**多轮对话/Agentic 训练中长度惩罚的精度优化**，以及**适配 PyTorch 2.10 环境下的 LoRA 学习率调度器兼容性问题**。

### 2. 版本发布
*   无新版本发布。

### 3. 重点 Issues
*   **#1243 [OPEN] overlong_penalty 应在长度计算中排除工具响应 token (使用 action_mask/action_ranges)**
    *   **作者**: thevasudevgupta (更新于 2026-06-18)
    *   **链接**: [OpenRLHF/OpenRLHF Issue #1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243)
    *   **技术摘要**: 在进行包含工具调用的多轮“Agentic”训练时，当前的 `overlong_penalty` 模块直接使用整体的 `response length` 进行计算。这导致了评估误差：模型生成的实际动作 token 与环境返回的工具响应 token 混杂在一起，使得惩罚机制不够精确，急需通过 `action_mask` 或 `action_ranges` 进行剥离计算。

### 4. 关键 PR 进展
今日更新的 4 个 PR 高度聚焦于修复上述 Issue 及底层框架兼容性：

*   **#1255 [OPEN] fix: 使用 action_mask.sum() 计算 response_length 以在多轮训练中排除工具调用 token**
    *   **作者**: KamayaniR
    *   **链接**: [OpenRLHF/OpenRLHF PR #1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255)
    *   **进展**: 旨在修复 Issue #1243。重构了 `_process_response_into_experience` 逻辑。废弃了原先计算首尾动作 token 跨度的做法，改用 `action_mask.sum()`，从而精准计算实际响应长度。
*   **#1252 [CLOSED] fix: 使用 action_mask.sum() 计算 response_length...** (同上)
    *   **作者**: KamayaniR
    *   **链接**: [OpenRLHF/OpenRLHF PR #1252](https://github.com/OpenRLHF/OpenRLHF/pull/1252)
    *   **进展**: 同一作者针对同一问题提交的早期/重复分支，现已被关闭，代码流收敛至 PR #1255。
*   **#1254 [CLOSED] fix: 过滤空的参数组以防止 torch 2.10 LoRA LR scheduler 崩溃**
    *   **作者**: KamayaniR
    *   **链接**: [OpenRLHF/OpenRLHF PR #1254](https://github.com/OpenRLHF/OpenRLHF/pull/1254)
    *   **进展**: 旨在修复 Issue #1225。在 LoRA SFT 场景下，由于 `lora_A/lora_B` 不匹配 `no_decay_name_list`，会生成空的零权重衰减组，导致 DeepSpeed 在 PyTorch 2.10 环境下崩溃。该 PR 提供了修复补丁，现已关闭（已被合并或替换）。
*   **#1253 [CLOSED] fix: 过滤空的参数组...** (同上)
    *   **作者**: KamayaniR
    *   **链接**: [OpenRLHF/OpenRLHF PR #1253](https://github.com/OpenRLHF/OpenRLHF/pull/1253)
    *   **进展**: 针对 torch 2.10 LoRA 崩溃问题的平行修复分支，现已被关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **迅速跟进 Agentic RL 前沿痛点**：纯粹的指令强化学习已逐渐过渡到基于工具调用的多轮 Agent 训练。Issue #1243 及其修复 PR 表明，OpenRLHF 正在高速迭代其底层算法（如精准剥离 action mask 与工具返回 token），以解决真实 Agentic 场景下的长文本截断与惩罚问题。
2.  **深度适配最新底层计算栈**：从针对 PyTorch 2.10 和 DeepSpeed 优化器兼容性修复的 PR 可以看出，项目团队对分布式训练框架的最新变动保持着极高的敏锐度，确保下游 RLHF/RLAIF 研究者能够无缝使用最新的底层硬件加速特性。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl (volcengine/verl) RL 生态日报 - 2026.06.19**

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **25 条 Issues** 和 **19 条 Pull Requests**。无新版本 Release。今日社区活动高度聚焦于**底层显存及通信优化**（FSDP/Megatron 的显存对齐与增量同步）、**完全异步训练范式**（Fully Async Trainer）的修复，以及对**多模态**和 **Agentic Multi-turn** 场景的基础设施构建。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
今日 Issues 反映了社区在大模型规模化 RL 训练中的核心痛点与架构演进方向：

* **[Distillation/OOM 瓶颈]** **#6792** [bug] 
  昇腾 910b3 (NPU) 环境下，使用 OPD+FSDP 蒸馏时，两机部署 Qwen3-235B 教师模型遭遇 OOM。反映了超大规模教师模型在异构硬件上的部署挑战。
  (链接: verl-project/verl Issue #6792)
* **[Fully Async 机制缺陷]** **#6780** [bug] 
  完全异步策略的 On-policy 模式 (trigger=1, staleness=0) 表现出与 `main_ppo` 训练不一致的问题，其收敛速度异常加快。这暴露了异步框架在梯度同步机制上可能存在的偏差。
  (链接: verl-project/verl Issue #6780)
* **[Agentic Rollout 架构]** **#6719** [Feature Request] 
  提出为多轮 AgentLoop 引入 **Continuous Token** 机制。突破了传统 Token-in-Token-out 的限制，旨在为复杂多轮智能体交互提供更无缝的上下文维持方案。
  (链接: verl-project/verl Issue #6719)
* **[历史遗留架构探讨]** **#144** [Call for Contribution] 
  继续讨论额外的显存优化特性，包括激活卸载和将 Optimizer step 融合进反向传播，旨在极限压榨显存空间。
  (链接: verl-project/verl Issue #144)

### 4. 关键 PR 进展
开发者近日提交了大量提升训练效率、完善底层后端的关键代码：

* **[通信带宽优化] PR #6794**: 为 SGLang rollout 引入**增量权重同步**。抛弃全量参数广播，仅同步发生变化的 `(position, value)` 对，大幅降低 Trainer->Rollout 的通信开销。
  (链接: verl-project/verl PR #6794)
* **[Megatron 显存极限压榨] PR #6526**: 优化 Megatron 分布式优化器，在 bf16 训练下使 Adam 状态 (m, v) 和 DDP 梯度桶精度与模型对齐，相比传统的 fp32 维护方式，缓冲区显存占用直降三分之二。
  (链接: verl-project/verl PR #6526)
* **[Prefix Cache 加速] PR #6689**: 引入 **MAGI attention**，为 verl 的 SFT 和 GRPO 训练添加基于前缀树的共享前缀去重机制。在多轮和带提示词的场景下极具工程价值。
  (链接: verl-project/verl PR #6689)
* **[多模态与视频数据支持] PR #6793**: 增加 Open-R1 多模态数据集和 TinyLLaVA-Video-R1 视频数据集的 GRPO 训练支持，补齐了多模态强化学习的数据流闭环。
  (链接: verl-project/verl PR #6793)
* **[异步训练 Log/Config 修复]**: 连续推进 Fully Async 模式稳定性，修复了学习率为 0 的初始化 bug (**PR #6684**)、指标记录对齐问题 (**PR #6796**) 以及无效的 Hydra 配置覆盖 (**PR #6795**)。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **从基础 RLHF 迈向 Agentic RL**: verl 正在快速迭代对 Multi-turn Agent Rollout (PR #6779) 和 Continuous Token 机制的支持。在模型推理能力要求剧增的当下，verl 正把自己打造成训练复杂 Agent 的首选底座。
2. **极致的 Systems Engineering**: 社区今天的提交几乎都在“压榨”硬件极限——无论是 Megatron 的显存精度对齐 (PR #6526)、SGLang 的增量权重同步 (PR #6794)，还是基于前缀树的 MAGI Attention (PR #6689)。这些底层优化让在千卡/万亿参数规模下跑 RL 不再是纸上谈兵。
3. **全面的异构硬件与前沿模型适配**: 昇腾 芯片的 CI/CD 与双机部署优化（PR #6711, PR #6787），以及对 DeepSeekV4、GLM5、KimiK2.5 的 Megatron Lite 支持（PR #6791），证明了 verl 在剥离单一硬件（NVIDIA）和单一模型架构依赖上的决心。它是目前少数能真正撑起大规模、跨平台 RL 训练的开源框架之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 日报摘要 (2026-06-19)**

**1. 今日速览**
*   过去 24 小时，[open-instruct](https://github.com/allenai/open-instruct) 仓库整体活跃度趋于平稳。无新增 Issue，无新版本发布，仅有一个与优化 SFT（监督微调）显存及计算效率相关的 PR 完成更新并关闭。

**2. 版本发布**
*   **无**。当前项目未发布新的 Release 版本。

**3. 重点 Issues**
*   **无**。过去 24 小时内无 Issue 更新或新建。

**4. 关键 PR 进展**
*   **[#1714] [CLOSED] Expose olmo-core's lm_head loss_implementation (e.g. Liger fused_linear) on ModelConfig**
    *   **作者**: ReinforcedKnowledge
    *   **更新时间**: 2026-06-18
    *   **链接**: [allenai/open-instruct PR #1714](https://github.com/allenai/open-instruct/pull/1714)
    *   **技术摘要**: 该 PR 引入了 `ModelConfig.loss_implementation` 配置项，允许开发者在 SFT 阶段选择 `olmo-core` 底层的 LM loss 实现方式。具体而言，它支持接入 Liger Kernel 的 `fused_linear`（FLCE，融合线性交叉熵）来优化显存占用。该修改仅在传入 labels（即 SFT 场景）时生效，不会干预 DPO 等由外部显式计算损失的对齐算法。
    *   **核心价值**: 在大规模 RL/SFT 训练流程中，通过算子级融合（如 Liger FLCE）显著降低 LM head 层的激活值显存开销，是提升分布式训练吞吐量的关键工程优化。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **强化学习与对齐的基础设施底座**: [open-instruct](https://github.com/allenai/open-instruct) 作为 Allen AI 的旗舰级开源项目，是 OLMo 系列模型背后的核心训练框架。它提供了极其透明的 SFT、DPO、RLHF/PPO 实现细节。
*   **底层工程优化的前沿实践**: 从今日关闭的 PR #1714 可以看出，该项目在积极集成如 Liger Kernel 等高级显存优化技术。在大模型强化学习（RL）中，内存效率往往是决定能否进行大规模并行训练的瓶颈，跟进该仓库的代码演进，可直接获取前沿的训练加速最佳实践。
*   **算法可复现性与透明度**: 相比于高度封装的商业框架，Open Instruct 始终保持极简的代码结构和完全公开的数据处理流水线，是研究人员验证新 RL 算法（如奖励模型优化、偏好对齐变体）的绝佳测试床。

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

# RL 日报：Stable Baselines3 生态追踪 (2026-06-19)

## 1. 今日速览
过去 24 小时内，Stable Baselines3（SB3）仓库整体活动趋于平缓。无新增 Issue，无新版本发布，仅有 1 个历史技术改进 PR 状态发生更新。

## 2. 版本发布
- **无新版本发布**。
- 当前库处于稳定维护期，底层 API 和算法实现保持高度稳定。

## 3. 重点 Issues
- **过去 24 小时无新增或更新的 Issue**。项目文档和 FAQ 覆盖率较高，社区反馈机制目前处于收敛状态。

## 4. 关键 PR 进展
过去 24 小时有 1 项核心代码层面的 PR 更新：

- **[#2163] [已关闭] 为 `RolloutBuffer` 存储使用精确的 `dtype`** (作者: Trenza1ore)
  - **链接**: [DLR-RM/stable-baselines3 PR #2163](https://github.com/DLR-RM/stable-baselines3/pull/2163)
  - **技术摘要**: 该 PR 旨在统一 SB3 中缓冲区的底层数据类型行为。主要改动是让 `RolloutBuffer`（在线策略缓冲区）在存储机制上与 `ReplayBuffer`（离线策略缓冲区）保持一致，使用精确的数据类型。
  - **向后兼容**: 为了保证已有代码不报错，该 PR 包含了向后兼容设计，即在 `RolloutBuffer` 返回 `actions` 时，会将其强制转换为 `torch.float32`。
  - **状态追踪**: 该 PR 创建于 2025 年 7 月，于 2026-06-18 更新后被关闭。这通常意味着该修复已被采纳合并至主分支，或核心团队选择了其他的实现路径。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **离线/在线统一化探索**: PR #2163 反映了 SB3 底层架构演进的一个趋势——优化在线策略与离线策略算法在内存管理上的一致性。这对于未来无缝接入复杂的 Offline RL 算法至关重要。
2. **极简与低噪音**: 连续多日零 Issue 增长，侧面印证了 SB3 代码库的极高成熟度。在当前 RL 框架动辄重构的生态中，SB3 依然保持了对底层精确度（如 dtype 严格控制）的打磨。
3. **作为底层基座的价值**: 随着 RL 生态向大模型（RLHF）和复杂具身智能演进，像 SB3 这样高度稳定、API 无缝对接 Gymnasium 的基座库，仍然是验证新想法、进行基线对比不可或缺的标尺。持续关注其底层 PR 动态，有助于开发者深入理解 PyTorch 环境下强化学习的底层内存与张量优化机制。

</details>