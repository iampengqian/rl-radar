# RL 开源生态日报 2026-05-17

> 生成时间: 2026-05-16 22:13 UTC | 覆盖项目: 15 个

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
当前强化学习（特别是大模型对齐 RLHF 阶段）的开源生态呈现出明显的“分层演化”态势。
一方面，**大模型 RL 训练框架（veRL, TRL, AReaL, slime）**正在集体向异步架构、百亿/千亿级 MoE 模型适配以及异构算力调度发起攻坚，核心诉求是打破生成与训练的通信显存瓶颈。
另一方面，**底层基础设施与经典控制框架（ROCK, rl_games）**则回归工程本质，前者聚焦于千卡集群下的隐形资源泄漏与防御性运维，后者则在连续控制与具身智能领域维持其高性能吞吐的标杆地位。生态重心已从“算法验证”全面转向“工业级万卡级稳定交付”。

## 各项目活跃度对比
以下为 2026-05-17 各主要 RL 项目的关键活动数据对比：

| 项目 | Issues | PRs | Releases | 信号 |
|---|---|---|---|---|
| **veRL** | 17 | 9 | 0 | 前沿模型(MoE/Gemma4)适配与 Agent 环境解耦 |
| **ROCK** | 9 | 12 | 0 | 大规模集群磁盘治理与 SRE 防御性运维闭环 |
| **TRL** | 2 | 8 | 0 | GRPO 异步训练的连续批处理与数值稳定性 |
| **AReaL** | 2 | 3 | 0 | 异步训练容错恢复与底层权重同步协议重构 |
| **slime** | 1 | 2 | 0 | 长周期训练存储优化与最新 SOTA 模型跟进 |
| **rl_games** | 1 | 0 | 0 | 经典 SAC 算法收敛性的跨框架排障 |
| **其他项目** | 0 | 0 | 0 | 无明显活动 (CleanRL/Gymnasium/OpenRLHF等) |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **异步 RL 与环境解耦**：veRL 引入 Atropos 解耦 RL 环境并支持单次 Rollout 多轨迹，TRL 深耕 AsyncGRPO 的连续批处理。研究重心正从单步静态 PPO 转向高并发的异步交互式 Agent 训练。
2. **底层算法鲁棒性修复**：TRL 修复了 Reward 缺失导致 NaN 中毒以及 Importance Sampling 被静默绕过的问题。这表明主流框架正在为前一阶段的快速迭代“还债”，确保复杂 RL 数学逻辑的绝对正确性。

**工程/基础设施侧信号：**
1. **权重同步与通信架构重构**：AReaL 提出集成 Ray RDT 替代历史传输协议，veRL 引入 MooncakeStoreConnector 跨实例池化 KV Cache。底层 GPU 通信正在成为大规模 RL 提速的关键胜负手。
2. **长周期训练的 IO 与状态容灾**：针对 RLHF 任务极易打爆磁盘的痛点（日志、Dangling 镜像、Checkpoint），ROCK 建立了自动清理到 OSS 归档的完整闭环，slime 也引入了最大检查点数量限制。
3. **前沿 MoE 模型的显存与死锁攻坚**：面对 Qwen3-30B-A3B 及 Gemma 4 等超大参数模型，veRL 报告了 Host Offloading 开销及异构 FSDP2 死锁问题，异构显存优化是大厂工程团队的共同挑战。

## 差异化定位分析
*   **veRL**：定位为**全要素的前沿 RL 实验场**。从 MoE 大模型显存优化、Ascend 异构算力适配到高级算法（DPPO、多教师 OPD）全覆盖，极具野心，适合需要紧贴最新 SOTA 模型进行底层魔改的基建团队。
*   **TRL**：定位为**高易用性与算法严谨性并重的上层 API**。聚焦于与 HuggingFace 生态（vLLM, Transformers）的深度绑定与性能挖潜，修复重点在于数值稳定性和异步并发吞吐。
*   **AReaL**：定位为**死磕分布式系统深水区的工程先锋**。不满足于表层算法封装，专注于解决异步 RL 中的“时钟偏移”与 Checkpoint 恢复后的状态一致性难题。
*   **ROCK**：定位为**RL 集群的“保洁与防御系统”**。虽然不涉及算法创新，但其针对 Ray 日志暴增、OOM 磁盘泄漏的精细化治理方案，是保障千卡集群不崩溃的刚需底座。
*   **rl_games**：坚守**经典连续控制与具身智能的高性能基座**。其高度优化的 GPU 并行吞吐能力，依然是验证策略泛化性和排查算法 Bug 的重要参照物。

## 社区热度与成熟度
1. **主导力量分层明显**：大模型 RL 框架（veRL, TRL）由头部大厂（字节、HuggingFace）或核心团队主导，Issue 与 PR 数量庞大，处于快速膨胀期；而传统 RL 库（CleanRL, SB3, Gymnasium）近期近乎停滞，进入成熟维护期（或瓶颈期）。
2. **企业级诉求主导社区话题**：在活跃的 veRL、AReaL、ROCK 项目中，Issue 提交者多为各厂工程师，讨论焦点不再是“如何跑通算法”，而是“DGX H100 上的显存异常”、“RPC 框架膨胀”与“SRE 紧急清理 API”。
3. **跨框架的 Bug 排障成为常态**：rl_games 中长达 34 轮讨论的 SAC 不收敛问题，本质是开发者在不同框架（SB3 vs rl_games）间迁移时的对比排障，体现了单一框架实现可能存在“隐性坑位”的社区痛点。

## 值得关注的趋势信号
1. **KV Cache 池化与重用成为破局点**：veRL 开始支持跨实例池化前缀 KV Cache，预示着未来 RL 训练与推理引擎的界限将进一步模糊，通过共享推理状态来极大化 RLHF 的吞吐量。
2. **大模型 RL 标配“防御性 SRE”**：随着 RLHF 任务周期的延长和复杂 Agent 环境的引入，磁盘打满、悬挂进程和底层死锁将成为常态。ROCK 项目的“镜像防误删”与“3天静默归档”机制，即将成为各大云原生 RL 平台效仿的标配动作。
3. **具身智能底层框架的停滞隐患**：相比大模型 RL 的烈火烹油，传统具身智能与多智能体框架（Gymnasium, PettingZoo, Tianshou）活跃度极低。如果未来具身智能迎来爆发，当前的底层开源基建可能存在严重的老化断层风险。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (alibaba/ROCK) 项目 2026-05-17 强化学习开源生态日报摘要：

---

# 📊 ROCK RL 生态日报 (2026-05-17)

## 1. 今日速览
过去 24 小时内，ROCK 项目处于高频基础设施维护与能力扩展状态，无新版本发布。共产生 **12 个 PR**（其中 1 个已关闭）和 **9 个 Issues**。核心焦点高度集中：**Worker 节点磁盘泄漏治理与 OSS 存储架构的双账号迁移**。作者 `jinbai340997` 独立推进了完整的磁盘生命周期管理体系，涵盖了从基础镜像保护、缓存清理到日志归档的端到端闭环。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
当前 Issues 列表主要围绕磁盘治理的系列设计展开，形成了一套完备的防御性运维体系：

- **紧急磁盘清理 API 缺失**：线上磁盘暴涨（如 OOM 或大量 dangling 层）时 SRE 只能人工介入。提出新增 Admin 内部带外触发接口，打破 24h 调度窗口限制。
  [Issue #972](https://github.com/alibaba/ROCK/issues/972)
- **Sandbox 日志 OSS 归档与恢复机制**：针对停止≥3天的沙箱日志，提出 Sentinel 文件机制，通过标记时间决定异步归档时机，并要求提供 CLI 端从 OSS 拉取历史日志的能力。
  [Issue #959](https://github.com/alibaba/ROCK/issues/959) | [Issue #961](https://github.com/alibaba/ROCK/issues/961) | [Issue #958](https://github.com/alibaba/ROCK/issues/958)
- **底层文件清理性能与安全加固**：指出当前 `_build_cleanup_command` 因 `-exec rm` 频繁 fork 子进程导致性能低下，建议切换至 `find -delete` 并增加危险路径黑名单。
  [Issue #966](https://github.com/alibaba/ROCK/issues/966)
- **OSS 双账号 STS 迁移**：历史单账号的 3 天生命周期规则与归档逻辑冲突，需在保证向后兼容的前提下迁移至新的 primary 账号。
  [Issue #952](https://github.com/alibaba/ROCK/issues/952)

## 4. 关键 PR 进展
今日 Pull Requests 密集交付了上述 Issues 的核心代码，包含关键的防御性修复与特征实现：

- **基础修复与保护机制**：
  - **修复 `DockerUtil.remove_image` 缺失 `cls` 的 Bug**，并引入 `image_keep_patterns` 防止基础/共享镜像被误删。
    [PR #965](https://github.com/alibaba/ROCK/pull/965)
  - **`FileCleanupTask` 性能优化**：全面替换为 `find -delete`，增加拒绝相对路径与系统致命目录的黑名单校验。
    [PR #967](https://github.com/alibaba/ROCK/pull/967)

- **磁盘治理调度器全家桶**：
  - 新增 `BuildCacheCleanupTask` 与 `DockerImagePruneTask`，通过安全 Shell 级条件判定，自动清理 Worker 上的 uv/pip 缓存及 Docker dangling 层。
    [PR #969](https://github.com/alibaba/ROCK/pull/969) | [PR #970](https://github.com/alibaba/ROCK/pull/970)
  - 新增 `RayLogCleanupTask`，专门针对 RL 训练场景下极易暴增的 Ray 日志进行治理。
    [PR #971](https://github.com/alibaba/ROCK/pull/971)

- **日志归档与 SRE 运维闭环**：
  - 实现 Sentinel 写入与归档命令构造器，建立“停止 -> 延迟 3 天 -> 打包上传 OSS -> 清理本地”的完整流。
    [PR #963](https://github.com/alibaba/ROCK/pull/963) | [PR #957](https://github.com/alibaba/ROCK/pull/957) | [PR #960](https://github.com/alibaba/ROCK/pull/960)
  - 新增 `rock storage get` CLI 指令，完善了归档后的历史日志回溯体验。
    [PR #962](https://github.com/alibaba/ROCK/pull/962)
  - 上线 SRE 紧急清理内部 API (`disk_emergency_cleanup`)，含 60s 限流与任务白名单机制。
    [PR #973](https://github.com/alibaba/ROCK/pull/973)

- **已关闭 (CLOSED)**：
  - [PR #955](https://github.com/alibaba/ROCK/pull/955) (sandbox log 3-day deferred archive) 已关闭，该宏大的特性已被合理拆解为上述多个细粒度的 PR (#957, #960, #963 等) 进行精确合入。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

在当前大模型与强化学习（尤其是 RLHF 阶段）的工程实践中，计算集群的**“磁盘泄漏”**是导致大规模训练中断的隐形杀手。RL 训练任务不仅会产生海量试错日志，频繁的环境重置与镜像构建还会迅速积压 dangling layers 和 build cache。

ROCK 项目近期的这一系列高频迭代，展示了其对**大规模 RL 集群鲁棒性**的极深理解：
1. **架构克制**：在实现 OSS 归档等重度 IO 操作时，坚持复用既有 `/execute` 等 RPC 框架，拒绝膨胀 Agent 端 API，这大大降低了升级运维成本。
2. **防御性设计**：从底层的 `find` 性能优化到 `image_keep_patterns` 镜像防误删，再到归档失败时“宁可保留绝不强删”的兜底策略，体现了成熟的 SRE 工程素养。
3. **贴合 RL 痛点**：专门针对 Ray logs 和 Docker/OOM 引发的磁盘暴涨问题提供了自动化+半自动化的全套干预手段。

对于致力于构建自研 RL 基础设施或管理千卡级别 RLHF 集群的团队而言，ROCK 当前在单机资源治理和异步调度上的设计模式具有极高的源码参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 项目 2026-05-17 RL 日报摘要：

### 1. 今日速览
截至 2026-05-17，slime 仓库过去 24 小时内共处理 **1 条 Issue** 更新与 **2 条 Pull Request** 更新，无新版本发布。当前社区动态主要集中在**前沿大模型架构的适配探索**以及**底层大规模训练基础设施的易用性优化**。

### 2. 版本发布
**无**。过去 24 小时内未发布新版本或 Releases。

### 3. 重点 Issues
- **[#1910] [Question] Support for DeepSeek V4?** 
  - **链接**: [THUDM/slime Issue #1910](https://github.com/THUDM/slime/issues/1910)
  - **状态**: Open
  - **摘要**: 社区用户发起关于 slime 是否支持（或有计划支持）DeepSeek V4 模型训练与微调的讨论。这表明随着 DeepSeek 系列模型在 RL/Open-Weight 领域的持续迭代，RL 框架如何快速跟进并兼容新架构（如潜在的 MoE 升级或注意力机制变更）已成为核心开发者和用户群关注的前沿焦点。

### 4. 关键 PR 进展
- **[#1914] feat: add --max-checkpoint-count to limit saved checkpoints** 
  - **链接**: [THUDM/slime PR #1914](https://github.com/THUDM/slime/pull/1914)
  - **状态**: Open
  - **摘要**: 引入新的训练参数 `--max-checkpoint-count`。该功能会在训练过程中自动修剪过期的 Megatron 检查点目录（保留最新的 N 个 `iter_*` 目录）。这直接解决了 RLHF/PPO 等长期 RL 训练任务中频繁保存 Checkpoint 导致磁盘空间无限膨胀的工程痛点。

- **[#1915] Qwen35 efficient gdn**
  - **链接**: [THUDM/slime PR #1915](https://github.com/THUDM/slime/pull/1915)
  - **状态**: Closed
  - **摘要**: 针对通义千问（Qwen35）模型的高效优化尝试，该 PR 已在昨日被关闭（可能是由于架构不兼容、性能未达预期或方案调整）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直面超大规模 RLHF 的工程痛点**: PR #1914 暴露出 slime 团队正在解决长周期 RL 训练中的 IO 与存储瓶颈问题。针对 Megatron 格式的 Checkpoint 自动清理机制，是构建工业级、高可用 RL 基础设施的关键拼图。
2. **持续跟进前沿基座模型**: 针对类似 DeepSeek V4 以及 Qwen35 等最新 SOTA 模型的适配与探讨，表明 slime 致力于维持其在 LLM + RL 结合部的敏锐度。这使其能够为研究人员提供快速验证新一代模型 RL 对齐能力（如 GRPO, PPO 等）的底层试验场。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这是一份为您生成的 AReaL 项目 RL 日报摘要（2026-05-17）。

### AReaL 开源生态 RL 日报 (2026-05-17)

#### 1. 今日速览
过去 24 小时内，AReaL 仓库共处理 **2** 条 Issues 和 **3** 条 Pull Requests。当前项目处于无新版本发布的稳定迭代期，核心开发活动高度聚焦于**异步 RL 训练的容错恢复机制**以及**下一代底层权重同步架构的演进**。

#### 2. 版本发布
- **最新 Releases**: 无。

#### 3. 重点 Issues
异步训练的容错与状态管理是当前的痛点，社区与核心团队正积极推进底层传输协议的革新。

- **[#1243] [OPEN] [RFC] Integrate Ray Core RDT for Weight Syncing**
  - **链接**: [areal-project/AReaL Issue #1243](https://github.com/areal-project/AReaL/issues/1243)
  - **分析**: 这是一个重要的架构级 RFC。议题指出现有的权重同步机制（AReaL 1.0 的 xccl 模式受限于单 GPU 源，AReaL 2.0 的 awex 后端）存在瓶颈，提议集成 Ray Core RDT (Ray Direct Transport) 以重构训练器与推理节点的权重同步链路。
- **[#1342] [CLOSED] [bug] trajectory dump writes to wrong version directory after checkpoint recovery**
  - **链接**: [areal-project/AReaL Issue #1342](https://github.com/areal-project/AReaL/issues/1342)
  - **分析**: 异步 RL 训练在 checkpoint 恢复后，trajectory dump 写入错误版本目录的 Bug。该 Issue 已验证完全复现并关闭，表明相关修复补丁已就绪。

#### 4. 关键 PR 进展
今日的 PR 动静结合，一方面紧急修复了恢复机制中的计算漏洞，另一方面为底层架构重构打下了基础。

- **[#1345] [OPEN] fix(infra): correct staleness capacity inflation after recovery**
  - **链接**: [areal-project/AReaL PR #1345](https://github.com/areal-project/AReaL/pull/1345)
  - **分析**: 配合 Issue #1342 的核心修复。在异步 RL 中，checkpoint 恢复后 `StalenessManager` 的 `accepted` 计数器重置为 0，而模型 version 恢复为高值，导致 capacity 公式计算出 `(max_staleness + high_version)` 的异常膨胀值。该 PR 修正了这一状态不一致问题。
- **[#1305] [OPEN] feat(experimental): integrate Ray RDT for weight syncing**
  - **链接**: [areal-project/AReaL PR #1305](https://github.com/areal-project/AReaL/pull/1305)
  - **分析**: 呼应 Issue #1243 的实验性特性分支。实现了 RDT 权重同步后端，核心变更包括：IW Scheduler Bridge 的 TransferPlan 分片选择与 Ray RPC 拉取、TW Adapter 中的 FSDP 权重元数据提取等。这标志着 AReaL 在异构集群下的通信效率优化进入了实质性代码阶段。
- **[#1244] [CLOSED] [reviewed] fix: teardown tcpstore race**
  - **链接**: [areal-project/AReaL PR #1244](https://github.com/areal-project/AReaL/pull/1244)
  - **分析**: 修复了底层分布式通信组件 TcpStore 在 teardown 阶段的竞态条件，提升了集群大规模训练时的稳定性。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚“异步 RL 训练”的深水区**: 从今日修复的 Staleness capacity inflation 漏洞可以看出，AReaL 不仅仅在做算法封装，而是在死磕大规模异步 RL 训练中极其棘手的“时钟/版本偏移”与“容错状态恢复”难题。
2. **解耦并重构底层通信**: 随着 LLM 强化学习上下文长度的增加，Weight Syncing 往往成为系统瓶颈。团队主动探索从 `xccl`/`awex` 迁移至 `Ray RDT`，展现了其摆脱历史包袱、构建更高效异构通信后端的工程决心。
3. **严谨的分布式系统治理**: 从复现 Bug 时的 checklist 严格程度（跨随机种子验证、根因排查、Docker 镜像确认），到对 StalenessManager 等核心控件的精细化修复，体现了该项目在复杂分布式系统构建上的高工程标准。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 RL 日报摘要（2026-05-17）：

# 🤗 TRL (huggingface/trl) 强化学习日报
**日期**: 2026-05-17 | **数据周期**: 过去 24 小时

---

### 1. 今日速览
过去 24 小时内，TRL 仓库共处理 **2 条 Issues** 和 **8 条 Pull Requests**，无新版本发布。当前社区开发重心高度聚焦于 **GRPO 训练器（尤其是异步模式 AsyncGRPO）的底层优化**，包括连续批处理的支持、vLLM 权重同步问题以及显存泄漏（OOM）的修复。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **[[OPEN] vLLM 权重同步失效导致 GRPO 训练异常 #5312](https://github.com/huggingface/trl/issues/5312)**
  - **作者**: muupan | **👍**: 3
  - **摘要**: 自 PR #4700 合并后，当开启 `vllm_enable_sleep_mode=True` 且 `vllm_mode="colocate"` 时，vLLM 权重无法正确同步，导致 GRPO 训练在 main 分支受阻。此问题对依赖 vLLM 进行高效部署与训练的开发者影响较大。

- **[[CLOSED] Qwen3.5-9B SFT Tokenization 不匹配 #5213](https://github.com/huggingface/trl/issues/5213)**
  - **作者**: zouYC2021 | **👍**: 1
  - **摘要**: 在使用 SFTTrainer 微调 Qwen3.5-9B 时，出现 tokenized prompt 与 prompt+completion 起始部分不匹配的错误。该问题已得到确认并被关闭。

### 4. 关键 PR 进展
今日 PR 动态主要围绕异步强化学习的性能提升与稳定性修复，以下为关键变更：

- **[[OPEN] 为 AsyncGRPO 引入连续批处理支持 #5781](https://github.com/huggingface/trl/pull/5781)**
  - **作者**: qgallouedec
  - **摘要**: 为 AsyncGRPOTrainer 增加原生的连续批处理支持，进一步提升异步 RL 训练的吞吐量。

- **[[OPEN] 替换废弃的 Paged 分页机制，支持 Continuous Batching #5765](https://github.com/huggingface/trl/pull/5765)**
  - **作者**: sergiopaniego
  - **摘要**: 清理了废弃的 `use_transformers_paged`，引入正确的 continuous batching 支持，并修复了旧分支中 `logprobs = None` 导致重要性采样校验被静默绕过的隐患。

- **[[OPEN] 修复 Async GRPO 中 logits softcapping 兼容性 #5691](https://github.com/huggingface/trl/pull/5691)**
  - **作者**: mlarnouhet
  - **摘要**: 修补了 `patch_chunked_lm_head` 等内部模块，使得 AsyncGRPOTrainer 能够完美支持采用 `final_logits_softcapping` 技术的模型架构（如 Gemma 2）。

- **[[CLOSED] 修复 sum_then_normalize 优势计算中的 NaN 中毒问题 #5775](https://github.com/huggingface/trl/pull/5775)**
  - **作者**: Dev-X25874
  - **摘要**: 修复了 `GRPOTrainer` 和 `DPPOTrainer` 中 `sum_then_normalize` 分支的 Bug。此前使用 `nansum` 聚合奖励时，若 Reward 函数返回 None，会导致 group mean/std 计算结果为 NaN 并污染整体训练。

- **[[OPEN] 修复 Async Dataloader 队列异常返回 #5751](https://github.com/huggingface/trl/pull/5751)**
  - **作者**: AmineDiro
  - **摘要**: 修复了异步训练 dataloader 在遇到 `queue.Empty` 时错误返回 `None` 的问题，改为保持等待或在多次超时后抛出异常，防止 None 值在数据管道中扩散。

- **[[CLOSED] 清理异常链追踪以缓解 CI 中的 OOM #5776](https://github.com/huggingface/trl/pull/5776)**
  - **作者**: albertvillanova
  - **摘要**: 改进 CI 测试时的显存/内存管理机制，通过主动清理异常链的 Traceback (traceback clear)，协助 GC 释放 CUDA 内存，解决测试运行中的内存泄漏问题。

- **[[OPEN] GOLDTrainer 视觉语言模型(VLM)支持 #5461](https://github.com/huggingface/trl/pull/5461)**
  - **作者**: Strongich
  - **摘要**: 扩展 GOLDTrainer 的能力边界，使其支持视觉语言模型。

- **[[CLOSED] 修正 Gemma4 测试依赖的 Transformers 最低版本 #5763](https://github.com/huggingface/trl/pull/5763)**
  - **作者**: albertvillanova
  - **摘要**: 针对微小修正，将测试脚本中 Gemma4 所需的 `TRANSFORMERS_VERSION` 最低版本界定为 5.5.0。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **深耕异步与吞吐量瓶颈**：从连续批处理到 vLLM 的深度整合，TRL 正在解决大模型 RLHF/GRPO 训练中最大的痛点——生成与训练的通信和显存瓶颈。
2. **严谨的数值稳定性修复**：针对 Reward 模型稀疏/缺省带来的 NaN 污染（PR #5775）和 importance sampling 被静默跳过（PR #5765）的修复，表明该项目在追求速度的同时，正投入大量精力确保 RL 数学底层逻辑的绝对正确性。
3. **广泛的新架构兼容**：快速跟进适配 Gemma 2 的 logits softcapping 机制，并拓展 VLM（视觉语言模型）的训练支持，确保开发者能在第一时间使用 TRL 跑通最新的前沿模型。

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

以下是为您生成的 veRL 项目 2026-05-17 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，veRL 生态保持高度活跃。项目共处理 **17 条 Issues**（主要涉及多模态模型支持、MoE 架构显存优化及 Ascend 硬件适配）和 **9 条 PRs**（聚焦于底层执行引擎升级、解耦式 RL 环境接入及高级 RL 算法实现）。今日无新版本发布。

---

### 2. 版本发布
无新版本 Release。

---

### 3. 重点 Issues
当前社区关注点集中在**前沿 MoE 模型的训练稳定性**、**异构硬件适配体验**以及**Agent/Multiturn 工作流的完善**：

*   **MoE 大模型训练性能与显存瓶颈**：
    *   **Qwen3-30B-A3B 显存异常**：开发者报告在 DGXH100 上进行后训练时，观察到约 10-13 GiB 的额外显存占用。([Issue #6366](https://github.com/verl-project/verl/Issue/6366))
    *   **Host Offloading 开销**：同样在 Qwen3-30B-A3B 上，发现有时存在较大的 Host Offloading 性能开销。([Issue #6367](https://github.com/verl-project/verl/Issue/6367))
*   **前沿模型与架构支持（Gemma 系列）**：
    *   **Gemma 3/4 多模态诉求**：社区呼吁增加 Gemma 3/4 的 processor 加载与多模态训练支持。([Issue #6341](https://github.com/verl-project/verl/Issue/6341))
    *   **FSDP2 死锁问题**：报告了在使用 FSDP2 加载 Gemma4 时，因异构 buffer sizes 导致的 NCCL 死锁 Bug。([Issue #6365](https://github.com/verl-project/verl/Issue/6365))
*   **工作流优化与基础设施**：
    *   **Co-located Checkpoint 引擎提案**：Qwen 团队成员提议为大型 MoE 模型（如 Qwen3.5-35B-A3B）在 Megatron + SGLang 架构下的 RLHF 训练引入混合权重同步的 Checkpoint 引擎。([Issue #6225](https://github.com/verl-project/verl/Issue/6225))
    *   **RL Workflow 跳过机制 (RFC)**：提议建立统一的托管跳过系统以节省时间空间，提升 VeRL 的调试效率。([Issue #5998](https://github.com/verl-project/verl/Issue/5998))
*   **Ascend 生态与文档工程**：
    *   社区贡献者对 Ascend 环境的 Docker 构建指南与自定义安装文档提出了细粒度的重构建议（如引入矩阵式安装组合），以改善线性文档带来的混乱感。([Issue #6369](https://github.com/verl-project/verl/Issue/6369), [Issue #6370](https://github.com/verl-project/verl/Issue/6370))

---

### 4. 关键 PR 进展
今日的 PR 动态体现了 veRL 在**异步推理增强**、**底层 vLLM/Megatron 联动**及**新算法接入**上的快速迭代：

*   **解耦式 RL 环境接入**：
    *   **集成 Atropos**：引入 Atropos RL 环境，支持 token-level advantage 覆盖的解耦训练机制。([PR #6368](https://github.com/verl-project/verl/pull/6368))
*   **推理与训练引擎优化**：
    *   **MooncakeStoreConnector 支持**：在权重更新时启用带有 hard-reset 的外部 MooncakeStoreConnector，利用 vLLM 的 kv-transfer-config 跨实例池化前缀 KV Cache。([PR #6373](https://github.com/verl-project/verl/pull/6373))
    *   **异步 Agent Loop 多轨迹支持**：在 fully-async pipeline 的 agent loop 中，支持单次 Rollout 输出多条轨迹。([PR #6271](https://github.com/verl-project/verl/pull/6271))
    *   **SFT Left Truncation 修复**：修复了 `MultiTurnSFTDataset` 在 `no_padding` 和 `truncation=left` 配置下未正确截断前缀的 Bug。([PR #6372](https://github.com/verl-project/verl/pull/6372))
*   **Ascend 硬件底层升级**：
    *   将 Ascend 适配环境的依赖底层升级至 Megatron 016 与 vLLM 018，并修复了相关 label 为 None 时的后处理补丁。([PR #6374](https://github.com/verl-project/verl/pull/6374))
*   **算法与架构扩展（已关闭/合并）**：
    *   **DPPO 算法实现**：引入了基于二元 TV (Total Variation) 或二元 KL 约束的 DPPO (Direct Preference Policy Optimization) 实现，替代了传统的启发式比率裁剪。([PR #5397](https://github.com/verl-project/verl/pull/5397))
    *   **多教师 OPD**：添加了多教师模型管理和服务器配置的类，支持 Multi-Teacher Online Distillation。([PR #6051](https://github.com/verl-project/verl/pull/6051))

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **面向下一代大 MoE 模型的极致优化**：从近期的 Issue（如 Qwen3-30B-A3B 的显存与 Offloading 问题）和 PR 可以看出，veRL 正在直面并解决百亿/千亿级 MoE 模型在 RLHF 阶段的实际工程痛点。
2.  **前沿解耦式与环境交互式 RL 的探索**：通过集成 Atropos 和支持 Asynchronous Multi-Trajectory Agent Loop，veRL 正在将传统 RLHF 拓展至更广泛的、与复杂环境交互的 Agent 训练场景。
3.  **极具野心的跨硬件与推理后端兼容性**：项目不仅在持续跟进 vLLM 等主流推理框架的高级特性（如 KV Cache pool），还在系统性地攻坚 Ascend NPU 生态（系统性重构文档与底层引擎升级），这为大规模 RL 训练提供了极具弹性的异构计算底座。

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

# RL 开源生态日报：rl_games 项目追踪
**日期**: 2026-05-17 | **项目**: [rl_games (Denys88/rl_games)](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时，`rl_games` 仓库整体处于低活跃的维护期。无新代码合并（PR 更新为 0），无新版本发布，但有一条长期讨论的 Issue 于昨日出现了动态更新。

### 2. 版本发布
**无**。近 24 小时内未发布新版本或补丁。

### 3. 重点 Issues
- **[#341] [已关闭] SAC 算法疑似存在收敛/性能问题**
  - **作者**: ASDAlexander77
  - **动态**: 该 Issue 创建于 2026-03-26，在过去 24 小时内（05-16）产生了新的评论或状态变更，累计评论数已达 34 条。
  - **技术摘要**: 开发者在使用基于电机控制的无人机模拟环境（A点到B点）时发现，相同的逻辑在 SB3 (Stable Baselines3) 框架下经过 100 万步迭代即可收敛，但移植到 `rl_games` 的 SAC（Soft Actor-Critic）实现中却无法取得训练进展。此 Issue 引发了社区对 `rl_games` 中 SAC 算法底层超参数默认值及实现机制的深度技术排查。
  - **链接**: [Denys88/rl_games Issue #341](https://github.com/Denys88/rl_games/issues/341)

### 4. 关键 PR 进展
**无**。过去 24 小时内仓库未接收或更新任何 Pull Request。底层算法库暂无代码级改动。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码迭代速度放缓，`rl_games` 在强化学习生态中依然具备不可替代的工程价值：
1. **极致的采样吞吐量**: 相比于 SB3 等基于 Python 原生设计的框架，`rl_games` 采用高度优化的底层架构（支持 PyTorch/JAX），在大规模并行环境（如 Isaac Gym / Isaac Lab）下的 FPS 和吞吐量表现通常是行业标准。
2. **算法生态的交叉验证**: 正如 Issue #341 所示，同一算法在不同框架下的表现差异是 RL 工程中的常见痛点。`rl_games` 提供了一个独立于 SB3 生态的标杆实现（覆盖 PPO, SAC, DQN 等），是验证策略泛化能力、排查框架特定 Bug 的关键参照物。
3. **具身智能的核心基石**: 随着基于 GPU 并行的机器人仿真成为主流，`rl_games` 作为许多 Isolated Env 的默认对接框架，其在四足机器人、机械臂、无人机等连续控制领域的工程地位依然稳固。

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