# RL 开源生态日报 2026-05-19

> 生成时间: 2026-05-18 22:16 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出明显的**“两极分化与高度内卷”**特征。一方面，面向大模型后训练的 LLM+RL 框架正处于技术深水区的高频迭代期，核心围绕分布式通信、底层精度控制和新兴架构适配展开激烈竞争；另一方面，传统的 RL 基础库（如 CleanRL, SB3, Gymnasium 等）进入高度稳定的静默维护期。这表明整个开源社区的资源和注意力已全面向 LLM 对齐和 Agentic RL 基建倾斜。

## 各项目活跃度对比
过去 24 小时内，各主要 RL 项目的工程活跃度数据如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 13 | 35 | 0 | 高度活跃。全面向 Agentic RL 演进，领跑多模态与 MoE 架构适配。 |
| **ROCK** | 6 | 16 | 0 | 高度活跃。聚焦云原生基建，重点攻克大规模分布式带来的 I/O 与磁盘墙瓶颈。 |
| **AReaL** | 8 | 9 | 0 | 高度活跃。死磕极致通信与算力墙，引入零拷贝与新型分布式传输协议。 |
| **TRL** | 1 | 8 | 0 | 稳步迭代。专注底层采样机制的隐蔽漏洞排查，向全异步与 Continuous Batching 演进。 |
| **slime** | 0 | 8 | 0 | 核心维护。聚焦 GRPO/GSPO 等前沿算法在分布式下的边界条件修复。 |
| **Open Instruct** | 0 | 3 | 0 | 稳步迭代。关注 RL 算法的奖励塑形与低资源环境下的显存优化。 |
| **ROLL** | 0 | 1 | 0 | 核心维护。精准修复底层 Token-level 的 Loss 计算缺陷。 |
| **其他项目** | 0 | 0 | 0 | 过去 24 小时无实质代码提交或讨论（进入稳定维护期）。 |

*(注：CleanRL, Gymnasium, OpenRLHF, PettingZoo, rl_games, SB3, Tianshou, torchtune 等 8 个项目均无动态。)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **On-policy 算法的严谨性与防退化**：社区正致力于消灭大模型 RL 训练中的“静默失败”。例如 TRL 发现 Qwen 系列默认参数导致的探索能力丧失，slime 修复 OPSM 逻辑以防止异策略序列被意外保留，这些都表明研究重心从“能跑通”转向了“数学逻辑与收敛的绝对严谨”。
2. **Reward Shaping 与精细化掩码**：面对多轮对话或 Tool Calls，如何精准屏蔽特定 Token 的损失（如 ROLL #444）以及如何基于轨迹长度进行动态奖励塑形（如 Open Instruct #1680），成为优化 GRPO/PPO 核心算法优化的关键。

**工程/基础设施侧信号：**
1. **打破“显存与通信墙”**：算力成本高企促使底层传输机制疯狂迭代。AReaL 引入 CUDA IPC 实现同设备零拷贝和 Ray RDT 重塑跨节点传输；slime 更新了显存优化组件。异步与异构硬件通信成为决胜点。
2. **全面拥抱异步架构**：TRL 与 slime 均在大力整合 Continuous Batching 和全异步控制流；VeRL 则在重构多轮 Agent 推理网关。传统的同步阻塞 RLHF 流程正被彻底抛弃。
3. **克服海量并发的 I/O 与存储瓶颈**：在千卡级探索场景下，ROCK 建立了从日志冷热分离到 SRE 紧急磁盘熔断的完整治理方案，凸显了大规模 RL 对云原生算力精准调度的苛刻要求。

## 差异化定位分析
1. **VeRL (前沿探路者)**：定位为支持最复杂新架构的 RL 全栈方案。率先向“Agentic RL”（多轮工具调用）和前沿模型（Gemma 4, Qwen3.5 混合注意力）挺进，适合追求前沿模型能力的顶层应用团队。
2. **AReaL (极致性能压榨者)**：定位为算力与通信的“深水区挖掘机”。专注于解决 PPO/RLHF 中 Inference 与 Training 之间的网络通信瓶颈，适合拥有大集群、需要压榨极致 MFU 的工业级 Post-training 团队。
3. **ROCK (大规模运行时底座)**：定位为 RL 的“云原生操作系统”。不纠结于上层算法，而是死磕 Docker/Ray 带来的磁盘暴涨、日志清理和异构算力调度，为上层提供坚如磐石的分布式沙盒环境。
4. **TRL / Open Instruct (生态核心枢纽与educator)**：依托 HuggingFace 与 AllenAI 的生态，更关注兼容性、代码健壮性（如 API 空值防御）和低门槛（如 CPU Offload），是中小型实验室复现论文和微调模型的首选。

## 社区热度与成熟度
1. **VeRL 与 AReaL 呈现强烈的“工业级协同”特征**：Issue 和 PR 中充斥着跨公司/跨团队的联动（如 LinkedIn 提架构需求，华为做 NPU 适配），开源协同开发的成熟度极高。
2. **精细化工程打磨期**：从 slime、ROLL 到 TRL，当前高度活跃的代码提交多为“fix”、“mask”、“boundary condition”等底层的 Bug 修复。这标志着 LLM+RL 的底层框架已经跨越了粗放搭建期，正在为大规模商用做最后的稳定性加固。
3. **老牌 RL 生态完成周期交替**：传统单智能体/经典控制 RL 生态（如 Gymnasium, SB3, Tianshou）已完全静默，说明业界在通用 AI 基建的共识已全面收敛至 LLM 范式。

## 值得关注的趋势信号
1. **Agentic RL 将成为下一轮洗牌点**：单纯的“单轮指令遵从”优化已触及天花板。VeRL 投入核心资源重构 Agent 网关，表明**支持工具调用、多轮交互、动态 KV Cache 增长的 RL 基础设施**将在半年内成为各大框架的标配和主战场。
2. **“静默 Bug”的排查决定模型上限**：如 TRL 暴露的温度参数失效和 AReaL 修复的 masked 归一化污染。这类不影响程序运行但会悄无声息毁掉模型探索能力的 Bug 越来越多，**具备高可观测性和 TraceDebug（轨迹重放）能力的框架**将获得开发者青睐。
3. **RL 与推理引擎的深度融合**：无论是 TRL 引入 vLLM 加速知识蒸馏，还是 AReaL 通过 CUDA IPC 与 SGLang 共享显存，都释放了一个明确信号：**大模型 RL 训练框架正在告别松耦合，向与高性能推理引擎同构/共置的紧耦合方向演进**。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-19）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体处于平稳迭代期。无新版本发布，Issues 板块无新增或更新。项目当前的活跃点集中在底层训练逻辑的修复上，有 1 位贡献者提交了针对损失函数聚合机制的关键 PR。

### 2. 版本发布
- **无**。
- 最新 Releases 状态无更新。

### 3. 重点 Issues
- **无**。
- 过去 24 小时内无新增或更新的 Issue。

### 4. 关键 PR 进展
- **[#444 fix: mask token-mean loss aggregation](https://github.com/alibaba/ROLL/pull/444)** [OPEN]
  - **作者**: haoyang9804
  - **核心内容**: 修复了 `roll.utils.functionals` 中 `agg_loss(..., loss_agg_mode="token-mean")` 的计算逻辑 Bug。在当前实现中，当存在 padding、被过滤的 rollout tokens 或 tool/observation tokens（即 `loss_mask=0`）时，分母虽然除以了有效 token 数量，但分子仍然对整个 `loss_mat` 进行了求和。这会导致在 masking 状态下，被 mask 掉的 token 依然会产生非零梯度从而干扰损失计算。该 PR 旨在修正这一张量聚合逻辑。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL（RL Optimized Large-scale Learning）作为阿里巴巴开源的大规模强化学习训练框架，其在当前 LLM+RL（如 RLHF/RLAIF）生态中具有极高的工程价值：
1. **精准的底层训练控制**：从今日的 PR #444 可以看出，项目对 Token-level 的 Loss Masking 和梯度计算有着极为严苛的细节把控。在处理复杂 Agent 场景（如 Tool calls、环境 Observation 嵌入）时，精准屏蔽特定 Token 的损失是保证策略模型不被“污染”的核心能力。
2. **面向真实 Rollout 场景的打磨**：该修复直接针对“filtered rollout tokens”，表明 ROLL 正在深度优化轨迹生成与 PPO 策略更新之间的对齐逻辑，这对于提升 RL 训练的稳定性和收敛效率至关重要。
3. **工业级基础设施**：对于希望从零构建或优化大模型 RL 后训练流水线的研究者和工程师而言，ROLL 提供了具备生产环境可靠性的底层算子支持，是研究大规模 RL 算法不可或缺的开源参考项目。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (alibaba/ROCK) 项目 2026-05-18 至 2026-05-19 的 RL 日报摘要：

---

# 📰 ROCK 项目日报 (2026-05-19)

## 1. 今日速览
过去 24 小时内，ROCK 项目保持高度活跃的开发与维护节奏，重点聚焦于**底层基础设施安全加固、资源精细化调度（GPU/CPU/磁盘）以及云原生环境的适配**。
- **Issues 更新**：6 条（3 条新建，3 条关闭）
- **PR 更新**：16 条（核心合并主要围绕磁盘治理与 OSS 双账号迁移）
- **新版本发布**：0 个

## 2. 版本发布
**无**。目前项目正在集中合并大量基础设施增强特性，预计在 Sandbox 磁盘归档和 K8s GPU 支持特性稳定后将发布新版本。

## 3. 重点 Issues
当前社区和贡献者关注的核心诉求在于云原生场景下的资源精确隔离与扩展：

- 🔥 **K8s 环境下的 GPU 支持** (`#980` [OPEN]): 
  提出了在 K8s sandbox 路径中引入一等公民的 GPU 调度支持。计划通过 Jinja2 模板渲染 manifest，并支持扩展加速器类型，以补齐当前 `DockerDeploymentConfig` 中缺乏原生 GPU 支持的短板。
  *链接: [alibaba/ROCK Issue #980](https://github.com/alibaba/ROCK/issues/980)*

- ⚙️ **用户自定义磁盘配额** (`#976` [OPEN]): 
  建议在 `sandbox start` 请求中增加用户维度的磁盘限额（`disk`）字段。当前 `disk_limit_rootfs` 等配置均为集群全局级别，该特性将允许按需分配，最高上限由集群配置兜底。
  *链接: [alibaba/ROCK Issue #976](https://github.com/alibaba/ROCK/issues/976)*

- 🐛 **容器级 CPU 指标采集修复** (`#945` [CLOSED]): 
  修复了 `LinuxRocklet.get_statistics()` 错误上报宿主机级别 CPU 使用率的 Bug。原实现基于 `/proc/stat`，未能识别 cgroup 的资源限制，导致 RL 训练时的指标监控失真，现已在 PR #946 中通过 cgroup 指标完成修复。
  *链接: [alibaba/ROCK Issue #945](https://github.com/alibaba/ROCK/issues/945)*

- 🗄️ **磁盘日志归档设计** (`#956` [CLOSED]): 
  确立了将停机容器日志归档至 OSS 的底层设计：通过无副作用的命令构造器生成 `tar+ossutil` 组合命令，在 worker 节点执行，并保持 `local_api.py` 接口精简。
  *链接: [alibaba/ROCK Issue #956](https://github.com/alibaba/ROCK/issues/956)*

## 4. 关键 PR 进展
近期 PR 集中在“防磁盘暴涨治理”与“部署能力增强”两条主线上：

### 核心合并 
- **OSS 双账号体系迁移** (`#953`): 引入 `OssAccountConfig`，新增 `get_token_v2` 接口，在保持向后兼容的同时将文件传输桶平滑迁移至 `chatos-rock`。
  *链接: [alibaba/ROCK PR #953](https://github.com/alibaba/ROCK/pull/953)*
- **CPU 超卖与灰度发布机制** (`#979`): 废弃了单一布尔值开关，引入基于 Nacos 配置的 CPU 超卖策略（`cpu_overcommit_headroom`），支持白名单灰度及绝对核数监控。
  *链接: [alibaba/ROCK PR #979](https://github.com/alibaba/ROCK/pull/979)*
- **Ray 日志清理与阻断** (`#971`): 新增 `RayLogCleanupTask` 并禁用 worker 到 driver 的日志转发，直接切断了由于 RL 大规模并行计算导致磁盘日志暴增的隐患。
  *链接: [alibaba/ROCK PR #971](https://github.com/alibaba/ROCK/pull/971)*

### 值得关注的开源 PR (OPEN)
- **K8s GPU 模板支持** (`#981`): 对应 Issue #980，实现了 Jinja2 驱动的 K8s manifest 渲染路由（`gpu-single` / `gpu-multi`）。
  *链接: [alibaba/ROCK PR #981](https://github.com/alibaba/ROCK/pull/981)*
- **SRE 磁盘紧急抢救 API** (`#973`): 新增 `disk_emergency_cleanup` 内部接口，允许 SRE 在磁盘暴涨时绕过 24h 定时任务，立即同步触发清理，具备白名单和 60s 限流保护。
  *链接: [alibaba/ROCK PR #973](https://github.com/alibaba/ROCK/pull/973)*
- **延迟归档与 CLI 恢复闭环** (`#963`, `#960`, `#962`): 形成了一套完整的日志生命周期闭环——`#963` 在容器停止时落盘 `.rock_stopped_at` 标记；`#960` 调度任务每天扫描标记并打包上传至 OSS；`#962` 在 CLI 端新增 `rock storage get` 命令，供开发者通过 STS 直接从 OSS 拉取历史沙箱日志。
  *链接: [alibaba/ROCK PR #963](https://github.com/alibaba/ROCK/pull/963) | [#960](https://github.com/alibaba/ROCK/pull/960) | [#962](https://github.com/alibaba/ROCK/pull/962)*
- **磁盘配额校验与下发** (`#977`): 实现了用户侧磁盘配额的 API 层穿透，优先级设定为 `用户请求 > Nacos > RuntimeConfig`，并强制增加了 256G 的集群级上限校验。
  *链接: [alibaba/ROCK PR #977](https://github.com/alibaba/ROCK/pull/977)*

## 5. 为什么这个项目值得在当前 RL 生态继续关注

在大模型与强化学习飞速发展的当下，ROCK 正在解决 **RL 环境运行时（Sandbox/Runtime）最棘手的工程瓶颈**：

1. **云原生算力精准调度**：RL 训练极度依赖异构算力与资源隔离。ROCK 正在积极引入 K8s GPU 原生支持（Issue #980）并修复底层 cgroup 指标准确性（Issue #945），这将为 RL 算法工程师提供可信的算力消耗基线与更强的多卡并发调度能力。
2. **克服海量并发下的 I/O 与存储墙**：RL 任务（特别是分布式探索，如 Ray）会产生巨量短暂容器和日志。ROCK 构建了从 `BuildCache/Docker Image Prune`（底层垃圾回收）到 `Sandbox Log deferred archival`（冷热数据 OSS 分离）的全链路磁盘治理方案，且提供了 SRE 级别的紧急熔断 API，大幅提升了大规模 RL 集群的运行时稳定性。
3. **友好的实验生命周期管理**：通过支持 CLI 端拉取历史沙箱日志（PR #962）、用户级磁盘配额（PR #977）以及参数状态查询（PR #951），ROCK 正在降低 RL 实验复现与环境调试的门槛。

对于需要构建**高并发、高稳定性、云原生 RL 基础设施**的团队而言，ROCK 当前在资源超卖控制、容器层精准监控和磁盘治理上的架构演进极具参考价值和直接使用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是 slime (github.com/THUDM/slime) 项目 2026-05-19 的强化学习（RL）生态日报摘要。

### 1. 今日速览
过去 24 小时内，slime 仓库共处理了 **8 个 Pull Requests**（4 个新建/更新，4 个关闭），无新增 Issues、评论或版本发布。整体动向高度聚焦于**底层训练稳定性的修复**与**系统周边工具链（CI/Docker/流式输出）的迭代**。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无新增或更新的 Issues**。社区当前的技术讨论和问题解决可能正在通过 PR 直接进行。

### 4. 关键 PR 进展
今日的 PR 活动集中在核心算法（如 OPSM、GRPO 奖励归一化）的防漏洞修复以及基础设施构建：

**算法与底层逻辑优化 (OPEN)**
*   **[OPEN] Support custom rollout-proxy TIS hooks in bypass mode** (作者: sjtushenhai)
    *   **摘要**: 为 bypass mode 引入自定义 TIS (Token-level Importance Sampling) hooks。在保留内置 TIS 行为的同时，允许通过自定义 hook 联合使用 `use_rollout_logprobs` 和 `use_tis`，增强了异构/离线策略评估的灵活性。
    *   **链接**: [THUDM/slime PR #1912](https://github.com/THUDM/slime/pull/1912)
*   **[OPEN] fix: make OPSM reject whole off-policy sequences** (作者: haoyang9804)
    *   **摘要**: 修复了 `compute_opsm_mask` 的逻辑漏洞。旧逻辑在 token 级别应用 mask，导致在序列级 KL 散度较高但整体优势为负的“异策略”序列中，可能会意外保留具有正向优势的 token。此 PR 将其纠正为基于序列级别的整体拒绝，提高了 PPO 训练的严谨性。
    *   **链接**: [THUDM/slime PR #1917](https://github.com/THUDM/slime/pull/1917)
*   **[OPEN] Fix RolloutManager reward normalization for uneven rollout groups** (作者: haoyang9804)
    *   **摘要**: 修复了 `RolloutManager` 在处理非均匀 rollout group 时可能导致 GRPO/GSPO 奖励归一化数据损坏的隐性 Bug。改进了不等长样本维度展平（reshape）的 fallback 逻辑。
    *   **链接**: [THUDM/slime PR #1918](https://github.com/THUDM/slime/pull/1918)

**已合并/关闭的关键修复**
*   **[CLOSED] fix: align correct-sample rewards with DP-local lengths** (作者: miamia0)
    *   **摘要**: 修复了正确样本奖励与 DP (Data Parallel) local lengths 的对齐问题。
    *   **链接**: [THUDM/slime PR #1900](https://github.com/THUDM/slime/pull/1900)

**系统、工程与基建 (CLOSED/MERGED)**
*   **[CLOSED] Move fully_async example to main codebase** (作者: zhuzilin)
    *   **链接**: [THUDM/slime PR #1920](https://github.com/THUDM/slime/pull/1920)
*   **[OPEN] Add example for streaming output** (作者: zhuzilin)
    *   **链接**: [THUDM/slime PR #1921](https://github.com/THUDM/slime/pull/1921)
*   **[CLOSED] add critic wandb config** (作者: lilei199908) - 完善 Critic 网络训练的可视化配置。
    *   **链接**: [THUDM/slime PR #1919](https://github.com/THUDM/slime/pull/1919)
*   **[CLOSED] [docker] update torch memory saver** (作者: zhuzilin) - 更新 Docker 镜像中的显存优化组件。
    *   **链接**: [THUDM/slime PR #1916](https://github.com/THUDM/slime/pull/1916)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **深水区的算法稳定性攻坚**：当前 RLHF/LLM 后训练生态中，多数开源项目仍停留在“能跑通”的阶段。slime 今天的 PR 动态（#1917, #1918）显示出该项目正在深入解决 GRPO/GSPO 等高级对齐算法在大规模分布式训练下的边缘情况（如非均匀长度序列的归一化和 OPSM Mask 机制），这对于追求百亿/千亿参数规模下的稳定对齐至关重要。
2. **强化基础设施以支持极致性能**：对 `torch memory saver` 的更新和 `fully_async`（全异步）例程的合并，表明 slime 在 LLM 训练的“显存墙”和“序列化阻塞”这两个核心性能瓶颈上持续发力，提供适应工业界大规模异步 rollout 的基础设施。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报摘要 (2026-05-19)

## 1. 今日速览
过去 24 小时内，AReaL (github.com/inclusionAI/AReaL) 仓库共处理了 **8 个 Issues** 和 **9 个 Pull Requests**，无新版本发布。整体动态聚焦于**底层通信架构演进**（Ray RDT 集成、CUDA IPC 共享显存传输）、**训练精度与稳定性修复**（Mask 机制导致的数值异常、Megatron 检查点兼容性）以及**社区治理优化**。核心开发者 `daihaowz` 和 `haoyang9804` 集中修复了异步 RL 训练和底层 Engine 的多个关键缺陷。

## 2. 版本发布
**无**。目前项目正处于高频的特性迭代与底层重构阶段，尚未锁定新的稳定版本。

## 3. 重点 Issues
*   **[架构讨论] 集成 Ray Core RDT 进行权重同步** (`KaisennHu`)
    针对 AReaL 1.0 XCCL 广播瓶颈与 2.0 awex 后端的局限性，提出引入 Ray Direct Transport (RDT) 作为新的权重同步机制，预计将大幅优化跨节点传输效率。
    👉 [Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243)
*   **[Bug] Megatron Engine 保存 Optimizer 检查点失败** (`daihaowz`)
    定位到在反复实验中稳定复现的 Megatron 引擎检查点保存报错，确认其根本原因非二级联锁错误。
    👉 [Issue #1341](https://github.com/inclusionAI/AReaL/issues/1341)
*   **[Bug] 配置错误: 'dict' object has no attribute 'seed'** (`guidryheal-create`)
    在使用 CAMEL 配置运行 GRPO 时出现意外的属性读取错误，影响部分用例的上手体验。
    👉 [Issue #1334](https://github.com/inclusionAI/AReaL/issues/1334)
*   **[Feature] 轨迹转储与重放以支持离线训练调试** (`daihaowz`)
    提议增加 Dump/Replay 机制。鉴于 RL 训练中 Rollout 阶段主导了耗时和资源消耗，该功能将极大降低开发者离线 Debug 的门槛。
    👉 [Issue #1343](https://github.com/inclusionAI/AReaL/issues/1343)

## 4. 关键 PR 进展
*   **feat: 集成 Ray RDT 进行权重同步** (`KaisennHu`) - [OPEN]
    对应 Issue #1243 的实现。引入 RDT Scheduler Bridge 和 FSDP adapter，重塑权重拉取与分片逻辑。
    👉 [PR #1305](https://github.com/inclusionAI/AReaL/pull/1305)
*   **feat: 新增同构 CUDA IPC 权重传输** (`garrett4wade`) - [OPEN]
    实现了 Megatron 训练与 SGLang 推理共享同一 GPU 的 Colocate 模式。通过 CUDA IPC 替代 NCCL P2P，实现同设备零拷贝，显著降低权重更新延迟。
    👉 [PR #1310](https://github.com/inclusionAI/AReaL/pull/1310)
*   **fix(utils): 忽略 masked 导致的无效归一化值** (`haoyang9804`) - [OPEN]
    修复了一处静默 Bug：原先 `loss_mask` 处理时 `NaN * 0` 会产生无效值，从而悄无声息地污染所有有效的 Reward 和 Advantage 归一化结果。
    👉 [PR #1347](https://github.com/inclusionAI/AReaL/pull/1347)
*   **fix(infra): 修正恢复后 Staleness 容量膨胀问题** (`daihaowz`) - [OPEN]
    修复异步 RL 训练中的异步恢复逻辑：防止 `StalenessManager` 因计数器重置导致的模型版本与容量计算不匹配，提升容错稳定性。
    👉 [PR #1345](https://github.com/inclusionAI/AReaL/pull/1345)
*   **fix(checkpointer): 适配 megatron-core >= 0.11** (`theNefelibata`) - [OPEN]
    针对新版 megatron-core 移除 `flattened_range` 支持导致的检查点读写崩溃，将默认 sharding type 切换为 `dp_reshardable`。
    👉 [PR #1344](https://github.com/inclusionAI/AReaL/pull/1344)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直面 RLHF 算力墙核心痛点**：AReaL 当前正在攻坚的 CUDA IPC 共置模式 (#1310)、基于磁盘的增量 LoRA 同步 (#1233) 以及稀疏增量压缩 (#1125)，均旨在打破 LLM 在 Post-training 阶段中 inference 与 training 之间的巨大网络通信瓶颈。
2. **深水区的工程可靠性提升**：项目正在积极清理底层难点。今日暴露并修复的 masked 归一化污染 (#1347)、Megatron 新版本 API 兼容性断裂 (#1344) 以及异步容错缺陷 (#1345)，表明项目正在向高成熟度、可支持大规模工业级分布式部署演进。
3. **开放且规范的生态共建**：从引入 OpenSSF 安全认证 (#1348)、增加新 Maintainer (#1349)，到提出完备的轨迹重放调试提案 (#1343)，AReaL 正在建立一套对开源开发者友好的治理与调试体系，降低前沿 RL 算法的复现门槛。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 TRL (Transformer Reinforcement Learning) 项目的 RL 生态日报摘要（2026-05-19）：

### 1. 今日速览
过去 24 小时内，TRL 仓库共处理了 **1 条 Issue** 和 **8 条 Pull Requests (PR)**。社区当前的开发重心高度聚焦于 GRPO（Group Relative Policy Optimization）训练器的稳定性完善，包括对 VLM（视觉语言模型）测试逻辑的修复、对 Qwen 系列模型底层采样机制的 Bug 排查，以及向 Continuous Batching 和异步架构的底层重构。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[OPEN] #5783 [GRPOTrainer] 默认参数下对 Qwen2.5 采用近贪心解码导致策略退化**
  - **作者**: timWei0801
  - **详情**: 这是一个严重的隐蔽性 Bug。当 `transformers >= 4.50.0` 且配合 Qwen2.5 系列模型使用时，如果 `GRPOConfig.temperature=1.0`（默认值），模型会在内部静默执行近贪心解码。这会导致 GRPO 生成的 rollout 极其相似，进而使优势函数的信号退化（`std(R) ≈ 0`），导致 RL 训练静默失败。
  - **链接**: [huggingface/trl Issue #5783](https://github.com/huggingface/trl/issues/5783)

### 4. 关键 PR 进展
今日的 PR 动态主要集中在**推理引擎集成**与**测试稳定性**两个方面：

- **Continuous Batching 与 Async 架构支持**
  - **#5765 [OPEN] feat(grpo): 替换已废弃的 paged 注意力机制，拥抱 continuous batching**
    - **作者**: sergiopaniego
    - **详情**: 移除了过时的 `use_transformers_paged` 参数，替换为标准的 `transformers` continuous batching 支持。该 PR 修复了旧分支中 `logprobs = None` 导致重要性采样校正被静默绕过的严重问题，并增加了新的训练示例脚本。
    - **链接**: [huggingface/trl PR #5765](https://github.com/huggingface/trl/pull/5765)
  - **#5781 [OPEN] 为 AsyncGRPO 提供 Continuous Batching 支持**
    - **作者**: qgallouedec
    - **链接**: [huggingface/trl PR #5781](https://github.com/huggingface/trl/pull/5781)

- **模型与训练器兼容性拓展**
  - **#5691 [OPEN] AsyncGRPOTrainer 支持 final_logits_softcapping**
    - **作者**: mlarnouhet
    - **详情**: 修改了 `utils.py` 中的 `_ChunkedLogProbFunction`，使 AsyncGRPOTrainer 能够支持类似 Gemma 2 这样在最终 logits 层使用 softcapping 技术的模型。
    - **链接**: [huggingface/trl PR #5691](https://github.com/huggingface/trl/pull/5691)
  - **#5782 [OPEN] [GKD] 使用 vLLM 加速 Student 模型生成**
    - **作者**: roycho96
    - **详情**: 为广义知识蒸馏（`GKDTrainer``）引入了 vLLM 加速路径。支持通过 `use_vllm=True` 开启，并兼容 `colocate` 和 `server` 两种部署模式。
    - **链接**: [huggingface/trl PR #5782](https://github.com/huggingface/trl/pull/5782)
  - **#5461 [OPEN] GOLDTrainer 支持 VLM**
    - **作者**: Strongich
    - **链接**: [huggingface/trl PR #5461](https://github.com/huggingface/trl/pull/5461)

- **测试与 CI 修复（VLM 测试栈重构）**
  - **#5780 [OPEN] 移除 GRPO/RLOO 中针对 Qwen2.5-VL 测试 unjustified 的 `model.visual.` 跳过逻辑**
    - **作者**: qgallouedec
    - **链接**: [huggingface/trl PR #5780](https://github.com/huggingface/trl/pull/5780)
  - **#5341 [OPEN] 修复多图 VLM 训练测试 (跳过视觉参数断言)**
    - **作者**: YangKai0616
    - **链接**: [huggingface/trl PR #5341](https://github.com/huggingface/trl/pull/5341)
  - **#5774 [CLOSED] 跳过多图测试用例中的视觉层参数检查**
    - **作者**: kaixuanliu
    - **链接**: [huggingface/trl PR #5774](https://github.com/huggingface/trl/pull/5774)

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **补齐底层采样的隐蔽缺陷**：Issue #5783 揭示了 LLM 底层接口变化对 RL 算法造成的致命影响（温度参数失效导致策略失去探索能力）。TRL 社区对这类“静默失败”问题的敏锐追踪，表明其正在建立 LLM+RL 工程化落地的安全底线。
2. **向异步与高并发架构演进**：PR #5781 和 #5765 表明 TRL 正在全面拥抱 Continuous Batching 和 Async GRPO。在算力成本高企的当下，解决生成阶段的显存墙和调度阻塞是提升 RLHF/post-training 研发效率的关键。
3. **多模态与异构推理引擎的深度整合**：无论是支持 Gemma 2 的 logits softcapping（PR #5691），还是广泛验证 VLMs 的梯度流（PR #5780, #5341），抑或是引入 vLLM 加速 Student 模型的在线蒸馏（PR #5782），都证明 TRL 正从一个纯 NLP 的微调工具，演变为一个支持多模态、多推理后端的高性能 Post-training 基础设施。

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

# VeRL 项目日报：2026-05-19

## 1. 今日速览
过去 24 小时内，VeRL 项目保持高活跃度。社区共更新 **13 个 Issues** 和 **35 个 Pull Requests (PRs)**，无新版本发布。
今日主旋律集中在 **Agentic RL（智能体强化学习）基础设施完善**、**多模态/新架构模型适配（如 Qwen3.5、Gemma3/4）**，以及底层的性能优化与 Bug 修复（如异步训练控制流、序列并行、CKPT 保存）。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
**Agentic RL 与多轮工具调用**
* [#3794](https://github.com/verl-project/verl/issues/3794) **[OPEN]** LinkedIn 团队呼吁在 GPT-OSS 模型中支持 Agentic RL（含工具调用）。此功能需求与 [#6383](https://github.com/verl-project/verl/issues/6383)（提出针对 Agentic RL 的 Context-aware 调度与 KV Cache 池化）共同反映了 VeRL 在从单轮对话向复杂多轮环境演进时的底层架构需求。
* [#6371](https://github.com/verl-project/verl/issues/6371) **[CLOSED]** 社区对多轮工具调用训练示例代码被删除提出疑问，表明相关 API 和 Examples 仍处于快速迭代重构期。

**核心训练异常与性能瓶颈**
* [#6382](https://github.com/verl-project/verl/issues/6382) **[OPEN]** 汇报了近期主分支重构代码在训练 `Qwen3VL-8B` 时出现准确率异常及熵异常上升的严重问题。
* [#6387](https://github.com/verl-project/verl/issues/6387) **[OPEN]** 指出在 `fully_async_policy` 模式下，Rollout 生成失败可能被错误地报告为训练正常完成，存在异步控制流和队列监控的隐患。
* [#6338](https://github.com/verl-project/verl/issues/6338) **[CLOSED]** 同步生成 Dump 导致训练循环阻塞并静默丢弃 I/O 错误，此问题已在 PR #6324 中通过异步流式写入解决。

**多模态与底层算力支持**
* [#3906](https://github.com/verl-project/verl/issues/3906) **[OPEN]** 提供了关于如何成功训练 `Qwen3-VL MOE` 模型的指导方案。
* [#6341](https://github.com/verl-project/verl/issues/6341) **[OPEN]** 社区请求支持 Gemma 3/4 的 processor 加载和多模态训练。
* [#6094](https://github.com/verl-project/verl/issues/6094) **[OPEN]** 在多智能体训练中，开启序列并行 (SP) 导致 `Qwen-3.5` 张量维度不匹配的 Bug。

---

## 4. 关键 PR 进展

**框架与训练核心控制**
* [#6299](https://github.com/verl-project/verl/pull/6299) **[OPEN]** 新增实验性的 Agent 框架和网关运行时，为多轮 Agent 推理提供新抽象，是 VeRL 布局 Agentic RL 的关键 PR。
* [#6320](https://github.com/verl-project/verl/pull/6320) **[OPEN]** 引入 `freeze_module_pattern`，支持通过正则表达式在 RL 训练中选择性冻结模型参数，并在 FSDP、Megatron 等四大训练引擎上全面打通。
* [#6025](https://github.com/verl-project/verl/pull/6025) **[OPEN]** 修复了多输出 Rollouts 场景下 mini-batch 划分不当导致同一 prompt 序列被切断的问题。
* [#6324](https://github.com/verl-project/verl/pull/6324) **[CLOSED]** 将训练过程中的 generation dump 改为带异常传播的异步流式写入，彻底解决同步 I/O 阻塞主循环的问题。

**新模型与算力适配**
* [#6277](https://github.com/verl-project/verl/pull/6277) **[OPEN]** 添加了对 `Qwen3-Omni thinker` 模型的支持，完善了音频等多模态数据的处理链路。
* [#6389](https://github.com/verl-project/verl/pull/6389) **[OPEN]** 针对 `Qwen3.5` 及其 MoE 版本（包含混合注意力机制 GatedDeltaNet）增加了精准的 MFU/FLOPs 估算逻辑。
* [#6352](https://github.com/verl-project/verl/pull/6352) **[OPEN]** 添加了基于 Megatron-FSDP 的 `Qwen3.5-35B-A3B` GSM8K SFT 训练示例。
* [#6374](https://github.com/verl-project/verl/pull/6374) **[OPEN]** 华为 Ascend NPU 适配取得进展，将 Megatron 升级至 016，vLLM 升级至 018。

**工程健壮性与 Bug 修复**
* [#5373](https://github.com/verl-project/verl/pull/5373) **[CLOSED]** 修复了全异步训练模式下的多处 Bug（死锁、序列化失败及验证行为异常）。
* [#6386](https://github.com/verl-project/verl/pull/6386) **[CLOSED]** 修复了在 `use_remove_padding=False` 路径下蒸馏输出报错的问题。
* [#6381](https://github.com/verl-project/verl/pull/6381) **[CLOSED]** 修复了合并 LoRA 适配器时丢失 alpha 参数的 Bug。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从“单轮 RLHF” 向“Agentic RL”的纵深演进：** 无论是在 Issue 区关于工具调用、上下文增长的讨论，还是 PR 中引入的 Agent Gateway 框架和异步多轨迹支持，都表明 VeRL 正在解决多轮/多智能体强化学习中的工程痛点（如异步死锁、KV Cache 动态增长）。
2. **快速跟进前沿模型架构：** 生态对混合注意力（如 Qwen3.5）、全模态（Qwen3-Omni）和 MoE 架构的适配需求极速增加。VeRL 社区能在第一时间跟进支持（如精准计算新架构的 MFU），保持了极强的新模型兼容力。
3. **训练底层架构的极致打磨：** 面对超大规模参数模型（如 30B/35B 级别 MoE），VeRL 正在通过打通 Megatron-FSDP 桥接、修复 Sequence Parallelism 形状报错、优化显存/权重更新等手段，持续降低大规模 RL 训练的上手门槛和机器开销。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-05-19）：

### 1. 今日速览
*   **Issues 动态**: 过去 24 小时内无新增或更新 Issue（0 条）。
*   **PR 动态**: 过去 24 小时内有 3 条 Pull Requests 更新，其中包含 1 条已合并的重要功能闭环，以及 2 条处于开启状态的工程优化与修复。
*   **Releases**: 过去 24 小时内无新版本发布。

---

### 2. 版本发布
无。当前项目代码库最新动态集中在主干分支的 PR 合并与实验迭代。

---

### 3. 重点 Issues
过去 24 小时无活跃的 Issue 更新。值得注意的是，今日更新的 PR #1654 关联并解决了历史 Issue #1031（关于 GRPO 训练显存优化的需求）。

---

### 4. 关键 PR 进展

*   **[CLOSED] Length-aware reward shaping (GRPO) + Qwen RL-Zero experiment + analysis tooling** by [IanMagnusson](https://github.com/IanMagnusson)
    *   **链接**: [allenai/open-instruct PR #1680](https://github.com/allenai/open-instruct/pull/1680)
    *   **摘要**: 该 PR 实现了针对 GRPO/RLVR 算法的**动态长度感知奖励塑形**，并完成了首个端到端的 Qwen RL-Zero 实验。包含完整的基线对比结果与轨迹绘图分析工具。该分支基于并双重合并了 `jacobm/cse-579` 分支，目前已成功闭环，标志着 RL 训练中长度控制与奖励归因机制取得了实质性进展。

*   **[OPEN] fix: guard against empty choices and null message in LLM responses** by [qizwiz](https://github.com/qizwiz)
    *   **链接**: [allenai/open-instruct #1695](https://github.com/allenai/open-instruct/pull/1695)
    *   **摘要**: 修复了 LLM API 调用过程中的潜在崩溃问题。代码库中有 5 个文件的 6 个位置直接访问 `response.choices[0].message.content`，未进行空值校验。此 PR 修补了绕过现有 `try/except` 块的两个向量：API 返回空列表导致的 `IndexError`（如配额耗尽），以及 `message` 为 `None` 导致的 `AttributeError`。提升了 RL 训练期间推理服务的鲁棒性。

*   **[OPEN] Add use_cpu_adam CLI toggle and offload validation for GRPO** by [Bhavyashah20](https://github.com/Bhavyashah20)
    *   **链接**: [allenai/open-instruct #1654](https://github.com/allenai/open-instruct/pull/1654)
    *   **摘要**: 解决了 GRPO 算法在资源受限环境下的训练痛点。7B 模型的 GRPO 训练通常需要 40-80 GB VRAM，虽然 DeepSpeed 支持降低显存的 CPU 卸载，但优化器之前被硬编码为 `torch.optim.AdamW`。此 PR 在 CLI 中添加了切换到 `DeepSpeedCPUAdam` 的开关，并加入了卸载验证，使小型实验室无需修改源码即可跑通 GRPO。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **核心算法与奖励机制的持续演进**: 通过 PR #1680 可以看出，项目并未停留在基础的 RLHF/RLAIF 流程上，而是正在深度探索 GRPO 算法中的细节优化（如基于轨迹长度的奖励塑形），并紧跟前沿直接对标 Qwen 的 RL-Zero 实验。
2.  **降低 RL 训练的硬件门槛**: RL 训练（特别是 On-policy 阶段）一直是算力吞金兽。PR #1654 专门针对小显存环境引入 DeepSpeed CPU Offload 支持，这极大地降低了开源社区复现和微调 7B 级别 RL 模型的工程门槛。
3.  **高标准的工程鲁棒性**: 在分布式 RL 训练中，LLM API 的网络波动或限流极易导致整个长时间运行的 Checkpoint 崩溃。PR #1695 对 API 返回异常的防御性编程修复，反映了该生态在大规模自动化训练基建上的成熟度正在不断提升。

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