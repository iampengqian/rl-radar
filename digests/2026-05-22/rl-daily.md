# RL 开源生态日报 2026-05-22

> 生成时间: 2026-05-21 22:26 UTC | 覆盖项目: 15 个

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
当前开源 RL 生态呈现出明显的“阶层分化”。面向 LLM 后训练的基础设施项目高度活跃，且正从纯算法实现向跨芯片、跨模态的分布式系统架构演进；而传统的经典 RL 算法库与单智能体环境（如 CleanRL, SB3, Tianshou 等）进入极度平稳的维护期，过去 24 小时内均无实质活动。整体生态的核心驱动力已完全转向“大规模语言模型对齐”与“复杂 Agent 构建”。

## 各项目活跃度对比

*注：以下仅为过去 24 小时内的活动数据统计。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 26 | 45 | 0 | 高频迭代，全面转向多轮 Agent RL 与异构算力攻坚 |
| **TRL** | 9 | 23 | 0 | 稳步演进，发力 VLM 多模态训练与异步架构优化 |
| **AReaL** | 8 | 7 | 0 | 深水区探索，聚焦极大规模分布式的通信与检查点重构 |
| **slime** | 0 | 9 | 0 | 算法严谨性修复与前沿 MoE 架构极速跟进 |
| **ROCK** | 4 | 7 | 1 (v1.8.0) | 强化云原生底座，完善复杂 RL 场景的 K8s 资源隔离 |
| **Gymnasium** | 2 | 1 | 0 | 持续打磨 MuJoCo v5 高保真物理仿真环境 |
| **ROLL** | 1 | 1 | 0 | 社区寻求 Agent 环境集成，团队释放扩编信号 |
| **OpenRLHF**| 0 | 1 | 0 | 暴露并修复数据集加载的供应链高危安全漏洞 (RCE) |
| **Open Instruct**| 0 | 1 | 0 | 优化本地 Debug 启动链路，打磨开发者体验 |
| **其他项目** | 0 | 0 | 0 | CleanRL, SB3, Tianshou 等经典 RL 库无活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从单轮对齐迈向多轮 Agent RL**：复杂工具调用、代码执行和多轨迹并发成为核心研究对象。各框架均在解决多轮交互下的 `think` 块解析冲突、格式异常崩溃等算法延展问题。
2. **超越传统 SFT 的精细化 Loss 控制**：研究者不再满足于粗暴的 SFT 或单一 PPO。引入样本级加权的 Weighted SFT、统一 KTO/DPO 架构、以及在 Critic 网络中严格隔离 Temperature 缩放，表明社区正在寻求更精细的梯度与奖励控制。

**工程/基础设施侧信号：**
1. **混合部署与底层通信榨取**：面对超大模型，纯张量并行已显不足。FP8 权重直传、Ray RDT (Ray Direct Transport)、Megatron 异步保存，以及 vLLM/Ray 在集群 GPU Placement 的边界检查，表明工程重心已深入到通信原语与显存页级别的优化。
2. **云原生与精细化资源隔离**：大规模 RL 训练不再仅仅关注显卡。针对 Sandbox 的磁盘配额限制、细分的 rootfs/log/dind 监控指标，以及 Checkpoint OSS 上传防覆盖等，标志着 RL 基础设施正在向成熟的大数据/MLOps 规范对齐。
3. **安全性与开发者体验 (DX)**：OpenRLHF 暴露的 `trust_remote_code` 任意代码执行漏洞，以及 Open Instruct 对本地 Ray 调试脚本的极致打磨，说明主流框架已度过“能跑就行”的阶段，开始重视企业级安全与研发效能。

## 差异化定位分析

1. **verl & AReaL**：作为**超大规模分布式算力基座**。两者都在死磕 Megatron、FSDP2 与异构硬件（昇腾 NPU/Intel XPU）。但 verl 当前在多轮 Agent 框架和最新开源模型（Qwen3.6/Gemma4）的适配上更为激进；AReaL 则更偏重于底层权重同步机制（如 RDT）和 Controller 架构的重构。
2. **TRL & slime**：作为**前沿算法与模型生态的急先锋**。两者对新架构的响应极快。TRL 正在将自己重塑为全模态（特别是 VLM）的训练底座，重点解决视觉编码器带来的 Padding 和显存问题；slime 则凭借极强的工程严谨性（如修复温度系数污染），快速接入 MiniMax-M2.5 等极其复杂的 MoE 路由模型。
3. **ROCK & ROLL**：作为**生产级的 RL MLOps 平台**。它们跳出了纯算法视角，专注于 K8s 环境下的 Sandbox 状态机管理、资源限额和集群调度，是支撑万卡并发 Agent 交互的“水电煤”。
4. **OpenRLHF & Open Instruct**：作为**工业级标杆与范式参考**。代码库相对稳定，主要进行安全合规审查和底层 Debug 优化，是学术界复现 RLHF 和企业界检验自身 pipelines 的标准参照系。
5. **Gymnasium**：坚守**经典控制与机器人仿真底座**。虽然当前热点在 LLM，但 Gymnasium 依然在默默推进 MuJoCo v5 的高保真物理碰撞修复与教程建设，是 Sim-to-Real 领域不可替代的基石。

## 社区热度与成熟度

1. **高热度与高脆弱性并存**：verl 单日 26 个 Issues 中，大量涉及“Qwen3.6 熵突增/坍塌”、“序列并行 NaN”等致命问题。说明在复杂 MoE 模型与多轮 Agent 交织的深水区，整个行业的工程实践仍在“走钢丝”，极度缺乏成熟稳定的 Best Practice。
2. **梯队分化显著**：头部项目（verl, TRL）承担了前沿探索的高试错成本，Issue 与 PR 汹涌；腰部成熟项目进入精细打磨期，重点关注安全、测试防 OOM 和 DX 体验。
3. **闭源与开源的协同**：大量 PR 在适配最新发布的闭源/开源基座（如 MiniMax, Gemma, Qwen），且高度依赖 SGLang/vLLM 等独立推理引擎的异步协作。现代 RL 框架已不再是孤立的算法库，而是各大底层开源生态的“连接器”。

## 值得关注的趋势信号

1. **Agent RL 系统的“沙箱化”生存**：从 ROCK 的状态机重构、AReaL 的 TIR 沙箱解耦可以看出，为了支持 Code Interpreter 等工具调用，RL 框架正在演化为“重型调度器”，对运行环境的隔离、磁盘监控和状态防悬挂提出了严苛要求。
2. **后训练基础设施的“全栈异构化”**：英伟达显存墙倒逼生态扩张。Intel XPU 插件化、华为昇腾 NPU 原生适配 HCCL 异步化，以及 FP8 直传等技术的落地，预示着下一代的万卡 RL 训练集群大概率将是软硬件高度解耦的混合态。
3. **偏好对齐全家桶的加速收敛**：传统 RL（PPO/GRPO）与偏好学习（DPO/KTO）的界限正在模糊。verl 开始接入 DPO 数据集，TRL 统一 KTO/DPO 底层架构，这表明未来的 RL Post-training 平台将提供一组可插拔的混合对齐算法矩阵。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是 ROLL (alibaba/ROLL) 项目 2026 年 5 月 22 日的强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 仓库处于低频更新状态，无新版本发布。社区侧保持轻度活跃，主要集中在环境集成疑问的解答以及文档库的日常维护，代码库核心逻辑未发生变更。

### 2. 版本发布
**无**。
近 24 小时内未发布新的 Release 版本。

### 3. 重点 Issues
- **#361 [OPEN] 寻求 ROCK 编码智能体集成教程** 
  - **作者**: shamanez
  - **概述**: 开发者尝试将 ROCK 的编码环境与 ROLL 框架进行集成但未成功，希望能获取相关的示例代码或标准教程。
  - **分析**: 该 Issue 反映了社区对 ROLL 框架扩展应用（尤其是 Agent 在特定 Coding 环境下的 RL 训练）存在明确需求。目前该贴已有 2 条讨论，建议持续跟进维护者的官方回复。
  - **链接**: [alibaba/ROLL Issue #361](https://github.com/alibaba/ROLL/issues/361)

### 4. 关键 PR 进展
- **#448 [CLOSED] docs: 新增招聘页面** 
  - **作者**: kkkky123
  - **概述**: 该 PR 主要为项目文档添加了招聘页面及简历投递链接（包含 2 次提交）。该 PR 已于昨日（5月21日）创建并被关闭。
  - **分析**: 纯文档向更新，侧面表明阿里 ROLL 底层研发团队目前正在进行人员扩充，项目处于持续投入阶段。
  - **链接**: [alibaba/ROLL PR #448](https://github.com/alibaba/ROLL/pull/448)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **面向 Agent 的工程化落地**: 从 Issue #361 可以看出，ROLL 正在被积极尝试用于 Coding Agent 等复杂交互环境的强化学习训练。在 LLM 迈向 Agent 化的当前阶段，能够提供稳定环境集成和分布式训练 RL 基础设施显得尤为关键。
2. **团队持续投入的信号**: 尽管近期代码侧更新频率平稳，但 PR #448 暴露出团队正在扩编。在 RL 训练框架（尤其针对 LLM 的 Post-training 阶段）竞争激烈的当下，头部大厂研发资源的持续注入是衡量开源项目生命周期的重要指标，值得 RL 研究员和工程师保持关注。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为你生成的 ROCK 项目 RL 日报摘要（2026-05-22）：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 保持了高频的迭代节奏。项目共处理了 **4 条 Issue**（1 个 Bug 修复，1 个功能请求，1 个文档更新）和 **7 条 Pull Request**（涵盖核心重构、K8s 功能扩展及监控精细化），并正式发布了包含调度器动态配置等特性的 **v1.8.0** 版本。当前重点聚焦于 Sandbox 底层生命周期重构与云原生（K8s）资源隔离能力的增强。

### 2. 版本发布
*   **v1.8.0 正式发布**
    *   **概述**：该版本主要进行了工程优化与问题修复，包括移除了对 `need_database` 标记的依赖，修复了 Sandbox 指标获取逻辑，将 Sandbox 镜像读取调整为从 `meta_store` 读取以避免内存状态不一致，并引入了调度器的动态配置特性。
    *   **链接**：[alibaba/ROCK Releases](https://github.com/alibaba/ROCK/releases)

### 3. 重点 Issues
*   **[bug] ImageCleanupTask 清理逻辑跳过问题** (#995)
    *   **摘要**：在合并了 `dangling-layer` 和 BuildKit 的清理逻辑后，`ImageCleanupTask` 在首次运行后会静默跳过后续的清理步骤。该 Bug 可能导致 RL 训练环境中的无用镜像堆积，影响节点磁盘空间。
    *   **链接**：[alibaba/ROCK Issue #995](https://github.com/alibaba/ROCK/issues/995)
*   **[feat] K8s operator 支持 Sandbox 磁盘配额限制** (#993)
    *   **摘要**：当前 K8s operator 创建 Sandbox 时仅支持 CPU 和 Memory 的资源限制。该 Issue 提出在 pool mode 和 template mode 下增加磁盘资源约束，这对于防止 RL 环境中的异常 Checkpoint 或日志写入打爆节点磁盘至关重要。
    *   **链接**：[alibaba/ROCK Issue #993](https://github.com/alibaba/ROCK/issues/993)
*   **[bug] OSS 上传覆盖失败** (#991, 已关闭)
    *   **摘要**：SDK 中的 `upload_by_path` 使用 `wget -c` 导致在目标路径已存在文件时静默跳过覆盖，已通过相关 PR 修复。
    *   **链接**：[alibaba/ROCK Issue #991](https://github.com/alibaba/ROCK/issues/991)

### 4. 关键 PR 进展
*   **[refactor] 引入 SandboxStateMachine 管理生命周期** (#988)
    *   **摘要**：核心架构重构。引入标准的状态机 (`not_exist` → `pending` → `running` → `stopped`) 来显式管理 Sandbox 的生命周期，包括对悬挂态和孤儿态的明确状态流转。此举将大幅提升大规模 RL 并发环境下环境分配与回收的鲁棒性。
    *   **链接**：[alibaba/ROCK PR #988](https://github.com/alibaba/ROCK/pull/988)
*   **[feat] 实现 K8s Sandbox 磁盘配额功能** (#994)
    *   **摘要**：快速响应 Issue #993。在 `rock/config.py` 中增加了 `disk` 字段，通过 K8s operator 实现了对 Sandbox 的磁盘容量硬限制，完善了分布式 RL 训练的底层资源隔离能力。
    *   **链接**：[alibaba/ROCK PR #994](https://github.com/alibaba/ROCK/pull/994)
*   **[fix] 细化系统磁盘监控指标** (#983)
    *   **摘要**：将单一的 `system.disk` 指标拆分为 `rootfs`、`log` 和 `dind` 三个独立的监控项，同时保留原指标向后兼容。这为构建 RL 任务的精细化 Grafana 告警（如日志盘满、镜像盘满）提供了数据基础。
    *   **链接**：[alibaba/ROCK PR #983](https://github.com/alibaba/ROCK/pull/983)
*   **[fix] 修复 DB 重启导致的管理端连接失效** (#987)
    *   **摘要**：增加了 `SandboxTable` 操作的 stale connection 重试逻辑，解决了数据库重启期间 RL 集群管理端的异常中断问题。
    *   **链接**：[alibaba/ROCK PR #987](https://github.com/alibaba/ROCK/pull/987)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 项目在当前强化学习开源生态中具有独特的工程价值，原因如下：
1. **补齐 RL 基础设施层的短板**：RL 生态目前多聚焦于算法层（如 CleanRL、Tianshou 等），而 ROCK 专注于**环境调度与底层资源治理**。从 v1.8.0 和近期的 PR 来看，项目正在攻坚 K8s 环境下的精确资源配额（CPU/Memory/Disk）和状态机级别的生命周期管理，这正是大规模分布式 RL（如海量大并发 Actor/Learner 架构）走向生产的刚需。
2. **深度的 MLOps/云原生整合**：新增的精细磁盘监控（分离 rootfs/log/dind）和对 OSS 传输机制的修复打磨，表明该项目在应对真实工业级 RL 场景（模型频繁拉起、海量 Checkpoint 及日志吞吐）时具备极强的实战落地能力，适合作为构建企业级 RL 平台的基础底座。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-05-22 强化学习（RL）日报摘要：

### 1. 今日速览
- **Issues 更新**: 0 条
- **PR 更新**: 9 条（4 个 Open，3 个 Closed，2 个为已有 PR 的新一轮更新）
- **新版本发布**: 0 个
过去 24 小时，slime 仓库无新增 Issues 与版本发布。社区开发活动高度聚焦于底层分布式训练机制完善、Critic 算法逻辑修复以及对最新 MoE 架构的适配。

### 2. 版本发布
无。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。当前开发者与维护者的讨论与问题追踪主要通过 Pull Requests 进行。

### 4. 关键 PR 进展

今日的 PR 动态主要分为三个技术方向：**框架与实验追踪扩展**、**核心 RL 算法修正**、**底层分布式与训练容错**。

#### 框架与模型生态扩展
*   **[#1935] Add Trackio rollout trace logging**
    *   **作者**: abidlabs
    *   **摘要**: 引入 Hugging Face 推出的轻量级本地实验追踪库 Trackio。在保留现有 W&B/TensorBoard 支持的前提下，新增 `--use-trackio` 选项，丰富了 RL rollout 阶段的 trace 记录生态。
    *   **链接**: [THUDM/slime PR #1935](https://github.com/THUDM/slime/pull/1935)
*   **[#1929] Feat/minimax m2.5 support**
    *   **作者**: xs1997zju
    *   **摘要**: 完整适配 **MiniMax-M2.5** 模型（256专家，top-8 路由）。增加了自定义的 `SelfAttention` 模型插件，支持全维度 QK Norm 及张量并行（TP）下的 gather/scatter，并打通了 mbridge 的权重转换。
    *   **链接**: [THUDM/slime PR #1929](https://github.com/THUDM/slime/pull/1929)

#### 核心 RL 算法修正
*   **[#1928] fix: avoid applying rollout temperature to critic values**
    *   **作者**: Baiyu-Su
    *   **摘要**: 修复了关键算法逻辑。在 `get_responses()` 中共用时，提取 policy logits（重构 log probs 所需）需要进行温度缩放（temperature scaling），但该操作被错误应用到了 Critic 网络的价值头输出上。此 PR 确保温度缩放仅作用于策略网络，防止 Critic 标量预测发生畸变。
    *   **链接**: [THUDM/slime PR #1928](https://github.com/THUDM/slime/pull/1928)

#### 分布式训练与底层容错
*   **[#1934] Add GPU placement validation before starting rollout engines**
    *   **作者**: fmh66
    *   **摘要**: 修复了 Issue #1896。在通过 Ray 创建 SGLang actors 之前，增加了严格的 GPU 边界检查。避免了 PG (Placement Group) slot 与 SGLang engine 配置不一致时引发的内部错误。
    *   **链接**: [THUDM/slime PR #1934](https://github.com/THUDM/slime/pull/1934)
*   **[#1933] [run-ci-megatron] [2/N] Support training with variable global batch size**
    *   **作者**: zhuzilin
    *   **摘要**: 结合 Megatron 框架支持动态全局 Batch Size 训练演进系列的第二部分。（注：前序 PR #1930 已关闭，当前为最新迭代）。
    *   **链接**: [THUDM/slime PR #1933](https://github.com/THUDM/slime/pull/1933)
*   **[#1922] fix(debug): auto-append rollout_id/rank in save_debug_train_data path template**
    *   **作者**: wlf-darkmatter
    *   **摘要**: 修复多 GPU/Megatron 分布式环境下的调试数据覆盖问题。若开发者未在路径模板中显式指定 `{rollout_id}` 或 `{rank}`，该 PR 会在底层自动补全并抛出 warning，防止不同 rank 的进程写入同一个 `.pt` 文件。
    *   **链接**: [THUDM/slime PR #1922](https://github.com/THUDM/slime/pull/1922)

### 5. 为什么这个项目值得在当前 RL 生态继续关注

基于今日的数据动态，slime 在当前 LLM+RL（如 RLHF/GRPO）开源生态中展现出极高的工程实用价值和研究跟进速度：
1.  **直面 LLM RL 底层工程痛点**：在 RL 采样阶段，推理引擎（如 SGLang）与训练集群（Ray/Megatron）的混合部署极易出现显存分配和 GPU 绑定冲突。PR #1934 等工作表明该项目正在系统性构建底层容错边界。
2.  **算法严谨性**：PR #1928 修复了温度系数对 Critic 的污染，证明项目在兼顾复杂生成逻辑的同时，依然保持着对 PPO 等经典 RL 算法核心数学逻辑的严格控制。
3.  **极速跟进前沿 MoE 架构**：对 MiniMax-M2.5 极其复杂的 MoE 路由和张量并行机制（PR #1929）的快速支持，意味着研究人员可以使用 slime 第一时间对市面上最新的基座模型开展 RL 对齐实验。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-05-22)

## 1. 今日速览
过去 24 小时内，AReaL（`github.com/inclusionAI/AReaL`）代码库保持高活跃度，无新版本发布，但积累了 **8 条 Issues 更新**（包含 3 个新创建）和 **7 条 PR 更新**。活动重心集中在**底层基础设施重构**、**权重同步机制优化（FP8/RDT）**以及**异步检查点支持**。

## 2. 版本发布
- **最新 Releases：** 无

## 3. 重点 Issues
- **[Bug] Megatron 异步保存报错 `NotImplementedError`**
  - 描述：CLI 暴露了 `MegatronEngineConfig.async_save` 配置，但底层检查点管理器并未实现该功能导致崩溃。
  - 链接：[#1355](https://github.com/areal-project/AReaL/issues/1355) | 作者：dingzhiqiang | 👍: 1
  - *注：该 Issue 已在同日通过 PR #1356 修复。*

- **[Feature] 支持 FP8 权重传输（awex colocated CUDA-IPC 路径）**
  - 描述：在引入 colocated CUDA-IPC 权重传输路径后，硬编码 `fp8_direct_convert=False` 限制了性能，提议在 awex Megatron 适配器中正式支持 FP8 直传。
  - 链接：[#1359](https://github.com/areal-project/AReaL/issues/1359) | 作者：guozhihao-224

- **[Bug] Online 模式下 `group_size > 1` 导致批次分组异常**
  - 描述：当 `rollout.agent.mode='online'` 且 `group_size > 1` 时，系统会静默生成错误的分组，影响 RL 训练的正确性。
  - 链接：[#1304](https://github.com/areal-project/AReaL/issues/1304) | 作者：CuritisSun

- **[Refactor] 沙箱后端与公共命名空间解耦**
  - 描述：旨在将现有的沙箱执行环境抽象出更通用的接口，以支持 TIR（Tool-Integrated Reasoning）等代码执行工作流。
  - 链接：[#1283](https://github.com/areal-project/AReaL/issues/1283) | 作者：HT-Yuan

- **[Bug] TP/PP > 1 时 `clear_batches()` 导致非 DP 头节点崩溃**
  - 描述：由 PR #1282 引入的回归 Bug，在张量并行(TP)或流水线并行(PP)大于 1 时触发，导致分布式训练中非数据并行头节点崩溃。
  - 链接：[#1298](https://github.com/areal-project/AReaL/issues/1298) | 作者：Adiactive

## 4. 关键 PR 进展
- **[feat] 实现 Megatron `async_save` (`AsyncCallsQueue`)**
  - 进展：针对 Issue #1355 的直接修复。通过接入 `megatron-core` 的 `AsyncCallsQueue` 实现真正的异步保存，预计将大幅减少 RL 训练中 Checkpointing 的阻塞时间。
  - 链接：[#1356](https://github.com/areal-project/AReaL/pull/1356) | 作者：dingzhiqiang

- **[refactor] RL 底层基础设施清理与 Controller v2 重构**
  - 进展：提交了两个重要 PR。包含 RL 基础设施的后向移植清理（优化 HTTP 客户端、版本控制代理等），以及 Controller v2 的重构，旨在提升大规模分布式的健壮性。
  - 链接：[#1353](https://github.com/areal-project/AReaL/pull/1353), [#1354](https://github.com/areal-project/AReaL/pull/1354) | 作者：sitabulaixizawaluduo

- **[feat] 实验性集成 Ray RDT 进行权重同步**
  - 进展：实现了基于 RDT (Ray Direct Transport) 的底层权重同步后端，涉及 FSDP 权重元数据提取和 Actor 句柄序列化，探索替代传统的权重传输路径。
  - 链接：[#1305](https://github.com/areal-project/AReaL/pull/1305) | 作者：KaisennHu

- **[fix] 修复 Controller 测试中断 CI 的问题**
  - 进展：由于 PR #1310 新增了 `colocate` 字段但未同步更新测试断言，导致 Main 分支 CI 失败，本 PR 已补充相关字段并合入。
  - 链接：[#1357](https://github.com/areal-project/AReaL/pull/1357) (CLOSED) | 作者：sitabulaixizawaluduo

- **[feat] 添加运行时 Agent 服务 API 及 tau2 示例**
  - 进展：引入了面向运行时的 Agent 服务 API，以及基于异步 tau2 rollout 驱动的实验性示例（验证了本地 SGLang 推理的 Qwen3-0.6B 模型）。
  - 链接：[#1266](https://github.com/areal-project/AReaL/pull/1266) | 作者：nuzant

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚大模型 RLHF/RL 底层瓶颈**：AReaL 正在深水区推进分布式训练的优化，如支持 FP8 权重直传（CUDA-IPC）和 Ray RDT 后端，这对于千卡/万卡级别的 LLM 强化训练（如 GRPO, PPO）的通信效率和显存控制至关重要。
2. **完善的分布式系统工程**：项目近期大量重构 Controller 并修复 TP/PP 与 Checkpointing 的回归 Bug，表明团队正在实打实地解决多节点、多并行策略下的工程痛点。
3. **向 Agent 与 Tool-Integrated Reasoning (TIR) 延伸**：通过引入沙箱解耦和 Agent Runtime API，AReaL 正从纯“奖励模型+权重更新”的框架，演化为支持复杂环境交互（如代码执行、Qwen3 模型测试）的全流程 RL 基础设施。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 强化学习开源生态日报 (2026-05-22)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持了高度活跃的开发状态。共处理 **9 条 Issues**（4 open, 5 closed）和 **23 条 Pull Requests**。虽然没有新版本发布，但社区与核心开发者的主要精力集中在 **VLM（视觉语言模型）训练修复、显存优化（OOM）、以及底层训练架构（如 Async GRPO、权重同步）的重构与增强**上。

## 2. 版本发布
- **最新 Releases**：无（当前版本稳定，主要进行日常 Bug 修复与特性打磨）。

## 3. 重点 Issues
### 🔥 核心功能需求与追踪
- **#5471** [OPEN] **为常见模型家族添加 `&#123;&#37; generation &#37;&#125;` 聊天模板**：在 `assistant_only_loss=True` 的 SFT 训练中，需要特定的标记以生成正确的 mask，目前原生支持该标记的模型极少。
  👤: qgallouedec | 👍: 0 | [查看 Issue #5471](https://github.com/huggingface/trl/issues/5471)
- **#5761** [OPEN] **加权 SFT (Weighted SFT)**：提议引入一种新的训练机制，打破传统 SFT 将所有 assistant tokens 同等对待的现状，旨在改善混合质量长文本的生成效果。
  👤: RyanJFriedrich | 👍: 0 | [查看 Issue #5761](https://github.com/huggingface/trl/issues/5761)
- **#5613** [OPEN] **DPOTrainer 支持传入数据集提供的样本权重**：请求添加对预计算样本权重的支持，以便在 batch 聚合之前缩放 DPO loss。
  👤: sirano1004 | 👍: 0 | [查看 Issue #5613](https://github.com/huggingface/trl/issues/5613)

### 🐛 关键 Bug 修复与讨论
- **#5807** [CLOSED] **纯文本训练 Gemma 3 时 `SFTTrainer` 缺少 `token_type_ids`**：默认 Data Collator 未生成所需参数导致训练抛出 `ValueError`，现已修复。
  👤: MNIKIEMA | 👍: 0 | [查看 Issue #5807](https://github.com/huggingface/trl/issues/5807)
- **#5785** [CLOSED] **GRPOTrainer padding 方向不匹配破坏 VLM 上下文**：处理 `prompt_ids` 和 `mm_token_type_ids` 时由于 left/right padding 不一致导致多模态上下文被破坏。
  👤: marcmk6 | 👍: 0 | [查看 Issue #5785](https://github.com/huggingface/trl/issues/5785)
- **#4256** [CLOSED] **评估阶段利用 vLLM 加速**：探讨了在训练 Epoch 之间或特定 Step 后利用 vLLM 进行推理评估的可行性。
  👤: SpaceHunterInf | 👍: 4 | [查看 Issue #4256](https://github.com/huggingface/trl/issues/4256)

## 4. 关键 PR 进展
### 🚀 架构重构与性能优化
- **#5749** [OPEN] **将 Async rollout worker 移至独立进程**：将 Rollout 的生成和评分循环从主线程的 spawn 子进程中运行，彻底解决 PyTorch Autograd 引擎与自定义函数争夺 GIL 的问题。
  👤: AmineDiro | [查看 PR #5749](https://github.com/huggingface/trl/pull/5749)
- **#5766** [OPEN] **DeepSpeed ZeRO-3 下高效内存的 PEFT/LoRA vLLM 权重同步**：修复了在 ZeRO-3 环境下进行 PEFT 权重同步时显存激增的问题，避免 OOM。
  👤: rak96 | [查看 PR #5766](https://github.com/huggingface/trl/pull/5766)
- **#5810** [OPEN] **统一 KTO 与 DPO 架构：对齐 compute_loss 流程**：简化了 KTOTrainer 的 loss 计算和指标处理，使其在评估和底层逻辑上与 DPOTrainer 保持一致。
  👤: albertvillanova | [查看 PR #5810](https://github.com/huggingface/trl/pull/5810)

### 🛠️ 训练稳定性与 Bug 修复
- **#5808** [OPEN] **GRPOTrainer Liger Kernel 掩盖 LoRA 报警**：当 LoRA 作用在 `lm_head` 时，Liger kernel 只会接收到冻住的 base weight，导致 LoRA 不更新。此 PR 添加了相关的 Warn 提示。
  👤: adityasingh2400 | [查看 PR #5808](https://github.com/huggingface/trl/pull/5808)
- **#5811** [OPEN] **修复 trainer 特定评估指标的 `metric_for_best_model` 报错**：通过就地更新 `logs` 字典，解决了 `KeyError` 异常。
  👤: qgallouedec | [查看 PR #5811](https://github.com/huggingface/trl/pull/5811)

### 💻 测试与 CI/CD 清理
- **#5767** [CLOSED] **通过降低 VLM 测试 batch size 修复 CI OOM**：将 GRPO/RLOO 训练测试的 `per_device_train_batch_size` 从 3 降至 1。
  👤: albertvillanova | [查看 PR #5767](https://github.com/huggingface/trl/pull/5767)
- **#5809** [CLOSED] **修复 Gemma 3 文本训练缺少 token_type_ids 的问题**。
  👤: adityasingh2400 | [查看 PR #5809](https://github.com/huggingface/trl/pull/5809)
- **#5789** [CLOSED] **修复 #5785：对齐 mm_token_type_ids 的 left-padding**。
  👤: marcmk6 | [查看 PR #5789](https://github.com/huggingface/trl/pull/5789)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在经历从“纯文本 RLHF 工具”向“全模态 RL 训练底座”的快速演进。从今日的更新可以看出：
1. **对 VLM（视觉语言模型）的深度支持**：Qwen-VL 系列的视觉编码器对齐、LLaVA 参数更新异常排查等，TRL 正在迅速填补多模态 RL 训练中大量存在的底层空缺。
2. **工程级性能优化**：重点解决了 ZeRO-3 + PEFT 权重同步的显存爆炸问题，以及 GIL 锁对 Async GRPO 训练的吞吐限制，这表明 TRL 正在攻坚超大规模模型训练的实际痛点。
3. **对齐与精细化控制**：KTO/DPO 架构的统一、以及对样本级加权的讨论，反映了社区正在寻求比传统 SFT/RLHF 更精细的 Loss 控制粒度。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 开源生态日报：OpenRLHF 跟踪分析 (2026-05-22)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库整体处于平稳迭代期，无新增 Issues、无代码合并（Closed PR）及版本发布。值得关注的是，社区提出了一项关键的安全隐患 PR，直指项目在数据集加载流程中可能存在的任意代码执行（RCE）风险。

- **Issues 更新**: 0 条
- **PR 更新**: 1 条（新增/更新）
- **Release 发布**: 0 个

## 2. 版本发布
过去 24 小时内无新增 Release。项目当前仍处于稳定版本周期。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日仅有 1 条 PR 更新，属于**安全漏洞修复/审查类提案**，目前状态为 `[OPEN]`。

- **[#1241] Security: Arbitrary Code Execution via `trust_remote_code=True` in Dataset Loading**
  - **作者**: [tuanaiseo](https://github.com/tuanaiseo)
  - **状态**: Open | **创建/更新**: 2026-05-20
  - **GitHub 链接**: [OpenRLHF/OpenRLHF PR #1241](https://github.com/OpenRLHF/OpenRLHF/pull/1241)
  - **技术摘要**: 该 PR 指出 `openrlhf/datasets/utils.py` 中的 `blending_datasets` 函数存在高危安全隐患。当加载本地 Python 脚本（`.py`）或包含脚本的目录时，代码中默认使用了 `trust_remote_code=True` 参数。在加载不受信任的下载或本地数据集仓库时，这可能导致任意代码执行。
  - **分析**: 这是一个典型的供应链安全风险暴露。在 RLHF（特别是分布式训练）场景中，数据集通常庞大且来源复杂。此 PR 提醒使用者需要对 HuggingFace `datasets` 库的远程代码执行权限进行严格管控。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

尽管今日数据面平淡，但 OpenRLHF 在当前的大模型技术栈中仍具备核心卡位价值：

1. **分布式 RLHF 的事实标准之一**：OpenRLHF 提供了基于 Ray 和 DeepSpeed 的高效 PPO/DPO 实现。在长上下文和超大参数模型（70B+）的 RL 对齐阶段，其工程优化（如分离式的 Actor-Critic 架构）是目前开源社区少数经过生产级验证的方案。
2. **生态兼容性**：项目与 HuggingFace `transformers`、`vLLM` 等主流推理/训练框架深度绑定。正如今日 PR #1241 所示，开发团队和社区正积极审查并适配上游生态的安全与 API 变更，保持了项目的高工程质量和对齐最新业界规范。
3. **后训练的红利**：随着基础模型能力趋同，RLHF 及其变体（如 RLAIF、DPO）已成为提升模型推理、指令遵循和价值观对齐的关键壁垒。OpenRLHF 作为底层训练基础设施，其代码库的稳定性和安全性（如今日发现的数据集加载漏洞）直接决定了企业级后训练流水线的可靠性。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报摘要 | 2026-05-22

## 1. 今日速览
过去 24 小时内，verl 项目保持高活跃度，社区围绕**多轮 Agent RL 训练稳定性**、**异构硬件适配**以及**新一代基础模型兼容性**展开了密集的讨论与代码提交。
- **Issues 更新**：26 条（其中包含多项关于训练稳定性崩溃与系统架构设计的 RFC 和 Bug 报告）
- **PR 更新**：45 条（涵盖 DPO 支持、Agent 框架重构、多后端 Bug 修复等）
- **新版本发布**：0 个

---

## 2. 版本发布
无。项目当前无最新 Release，主分支仍在密集迭代中。

---

## 3. 重点 Issues

### 3.1 核心训练稳定性与崩溃问题
- **[#6252](https://github.com/verl-project/verl/issues/6252) [OPEN]** Qwen3.5/3.6 35B-A3B 在多轮工具调用 Agent RL 训练中，发生工具调用格式异常并导致训练在 80-130 step 处崩溃。
- **[#2738](https://github.com/verl-project/verl/issues/2738) [OPEN]** 训练中熵突增导致模型崩溃。该历史遗留问题持续引发关注，探讨涉及 KL 惩罚、学习率调整等维度。
- **[#5953](https://github.com/lpanjicaiz/verl-project/verl/issues/5953) [OPEN]** 训练 Qwen3.5-35B-A3B 时出现“熵坍塌”现象，与上述熵突增形成对照组，表明当前 MoE 模型在 RL 训练中的动态控制仍面临挑战。
- **[#6431](https://github.com/verl-project/verl/issues/6431) [OPEN]** 开启 Sequence Parallelism 训练 Qwen3.6-35B 时，首个 Step 即出现 Grad norm 为 NaN 的致命错误。

### 3.2 架构演进与 RFC (Request for Comments)
- **[#6401](https://github.com/verl-project/verl/issues/6401) [OPEN]** 提出 Prefix-Tree Shared Attention 机制。针对 GRPO 中相同 Prompt 采样 $n$ 次带来的重复前缀计算开销，提出打包计算以显著提升多轨迹 RL 训练效率。
- **[#5998](https://github.com/verl-project/verl/issues/5998) [OPEN]** 提议建立统一的 Skip 管理系统，允许跳过 RL 工作流中的关键环节以大幅节省调试时间和空间。
- **[#6424](https://github.com/verl-project/verl/issues/6424) [OPEN]** 建议 Agent Loop 将 `think` 块的剥离工作委托给推理引擎的原生 Reasoning Parser，对齐训练与推理行为。

### 3.3 硬件生态与多模态
- **[#6403](https://github.com/verl-project/verl/issues/6403) [OPEN]** 社区询问 `verl-hardware-plugin` 是否已准备好接受 Intel XPU 的第三方贡献。
- **[#5526](https://github.com/verl-project/verl/issues/5526) & [#6439](https://github.com/verl-project/verl/issues/6439) [OPEN]** 昇腾发布 2026 Q2 路线图及社区开发任务，推进 NPU 原生支持大规模 MoE、VLM 及 Agent 场景。

---

## 4. 关键 PR 进展

### 4.1 新功能与算法扩展
- **[#6441](https://github.com/verl-project/verl/pull/6441) [OPEN]** **DPO 支持 (1/n)**：引入 DPO (Direct Preference Optimization) 数据集和 Collator，标志着 verl 正式从纯 RL (PPO/GRPO) 迈向 DPO 等偏好对齐全家桶。
- **[#6423](https://github.com/verl-project/verl/pull/6423) [OPEN]** 新增基于 Hugging Face **Trackio** 的实验追踪支持。
- **[#6299](https://github.com/verl-project/verl/pull/6299) [OPEN]** 引入实验性 Agent 框架与网关运行时，抽象并重构多轮 Agent 式 Rollout。

### 4.2 核心缺陷修复
- **[#6434](https://github.com/verl-project/verl/pull/6434) [OPEN]** **修复 Agent 训练崩溃**：在 Agent Loop 后处理管道中加入 Reasoning Parser，剥离 `think` 块后再提取工具调用。此 PR 直接修复了上述 #6424 及 #6252 等系列工具调用异常崩溃问题。
- **[#6432](https://github.com/verl-project/verl/pull/6432) [OPEN]** **Megatron MTP 对齐**：修复 Megatron 路径下多 Token 预测 (MTP) 的 loss 计算和 Rollout 指标未对齐问题。
- **[#6442](https://github.com/verl-project/verl/pull/6442) [OPEN]** 修复 SGLang 在 off-policy/fully-async 模式下，同步权重时发生 `KeyError: 'kv_cache'` 崩溃的问题。
- **[#6405](https://github.com/verl-project/verl/pull/6405) [CLOSED]** 修复 FSDP2 在加载 Gemma4 等异构缓冲区大小时引发的 NCCL 死锁问题。
- **[#6438](https://github.com/verl-project/verl/pull/6438) [OPEN]** 修复 FullyAsync 模式下因未初始化 `_dump_executor` 导致的 `AttributeError`。

### 4.3 硬件与工程优化
- **[#6409](https://github.com/verl-project/verl/pull/6409) [OPEN]** 修复 PPO Actor Checkpoint 在启用 LoRA 时的元数据丢失问题。
- **[#6406](https://github.com/verl-project/verl/pull/6406) [CLOSED]** 新增 **Gemma4** 工具解析器，适配其特殊的 Stop Token 和无 EOS 响应格式。
- **[#6433](https://github.com/verl-project/verl/pull/6433) [OPEN]** 将昇腾 HCCL Checkpoint Engine 的 `BroadcastOperation` 重构为异步执行，对齐 NCCL 实现。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **突破单轮限制，深耕复杂 Agent RL**：从近期高频的 Issue 和 PR 可以看出，verl 的研发重心已从基础的 GRPO/PPO 算法实现，深移至**多轮工具调用、多轨迹并发、异步 Agent Loop**等极度贴合真实场景的复杂 RL 训练管线。
2. **前沿模型与架构的极速响应**：针对 Qwen3/3.6 MoE、Gemma4 等最新开源模型带来的“异构缓冲死锁”、“序列并行 Grad Norm 异常”及“思维链解析冲突”，社区能在 24-48 小时内产出针对性的 RFC 和修复 PR。
3. **泛化的训练生态而非单一算法库**：引入 DPO 支持、深度兼容 SGLang/vLLM 最新版、建设 Trackio 实验追踪，verl 正在打造一个囊括多种对齐算法、多种推理后端的**统一 RL 基础设施**。
4. **坚定的异构算力护城河**：在 NVIDIA 显存墙日益凸显的当下，verl 通过系统化地集成 Intel XPU 插件与华为昇腾 NPU，并不断修正 HCCL/底层通信算子，正在成为最具潜力的**跨设备、超大规模 RL 训练基座**。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 (2026-05-22)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体趋于平稳。无新增 Issues，无新版本发布，仅有 1 条专注于本地调试体验优化的技术性 Pull Request 提交。当前项目核心代码库处于稳定维护与微调阶段。

## 2. 版本发布
**无**。近 24 小时内未发布新的 Releases。

## 3. 重点 Issues
**无**。过去 24 小时内无新增或更新的 Issues，当前社区暂未暴露出新的功能需求或阻塞性 Bug。

## 4. 关键 PR 进展
过去 24 小时共有 **1** 条新增/更新 PR：

- **[#1696 [OPEN] Export setuptools-scm pretend version in debug launch scripts](https://github.com/allenai/open-instruct/pull/1696)**
  - **作者**: mnoukhov
  - **摘要**: 该 PR 属于底层工程基建优化。主要针对本地 Ray 调试运行时，`setuptools-scm` 无法从环境中推断包版本号的问题。通过在 `scripts/train/debug/` 目录下的 45 个 Shell 启动脚本顶部硬编码导出环境变量 `SETUPTOOLS_SCM_PRETEND_VERSION_FOR_OPEN_INSTRUCT=0.0.0+debug`，使本地调试环境的行为与 Docker 镜像保持一致。
  - **分析**: 虽然不涉及强化学习算法层面的改动，但极大改善了开发者在本地进行 RLHF/DPO 训练调试时的链路稳定性，体现了项目对开发者体验（DX）的持续打磨。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

尽管今日动态较少，但 Open Instruct 在当前大模型强化学习生态中仍具有不可替代的标杆价值：

1. **工业级 RLHF/DPO 开源基座**：由 Allen AI 主导，Open Instruct 提供了从数据预处理、SFT 到 Reward Model 训练及 RLHF/PPO 对齐的完整、可复现的链路，是学术界和工业界复现或对齐大模型的标准参考实现。
2. **与主流计算生态深度绑定**：PR #1696 中提到的 Ray 集群和 Docker 部署，证明了该项目针对大规模分布式 RL 训练场景的工程化能力。这使得研究人员能够无缝将其算法扩展到多节点多 GPU 集群。
3. **踩坑成本极低的试金石**：项目对本地 Debug 模式的持续维护（如今日的 PR 所示），降低了环境配置门槛。对于希望验证新 RL 算法（如迭代式 DPO、更稳定的 PPO 变体）或研究 Reward Hacking 的研究人员来说，它是一个即插即用且高度可靠的底层沙盒。

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

以下是为您生成的 2026-05-22 Gymnasium 项目日报摘要：

# Gymnasium RL 日报摘要 (2026-05-22)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动相对平稳，无新版本发布。社区注意力主要集中在 MuJoCo-v5 环境的生态完善与 Bug 修复上。共监测到 2 条 Issues 更新和 1 条 PR 更新。

## 2. 版本发布
**无新版本发布。** 
（注：社区正在持续为预告的 Gymnasium 1.0.0 版本积累 MuJoCo-v5 相关的文档和代码基础）。

## 3. 重点 Issues
- **[#846] [documentation, enhancement, good first issue] 增加 MuJoCo 环境教程提案**
  - **链接:** [Farama-Foundation/Gymnasium Issue #846](https://github.com/Farama-Foundation/Gymnasium/issues/846)
  - **分析:** 该 Issue 旨在为即将推出的 MuJoCo-v5 环境补充系统性教程（如加载四足定制机器人模型）。这是一项长期的文档建设计划，目前被标记为 `good first issue`，非常适合想参与底层 RL 生态建设的开发者入手。该贴于昨日又有新的讨论动态。
- **[#1576] [bug] Pusher-v5 环境中机械臂穿透物体的物理碰撞 Bug**
  - **链接:** [Farama-Foundation/Gymnasium Issue #1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576)
  - **分析:** 开发者报告在 Pusher-v5 仿真环境中，机械臂存在违反物理直觉的“穿模”现象（未能正确推动或接触目标物体）。这直接指向了底层物理引擎接触参数或模型设计问题，是近期需要重点关注和修复的功能性 Bug。

## 4. 关键 PR 进展
- **[#1582] [CLOSED] 文档: 增加 HalfCheetah-v5 入门教程**
  - **链接:** [Farama-Foundation/Gymnasium PR #1582](https://github.com/Farama-Foundation/Gymnasium/pull/1582)
  - **分析:** 该 PR 试图补充 HalfCheetah-v5 环境的介绍性文档，但在提交一天后即被关闭。结合 Issue #846 的长期规划来看，此类文档贡献可能需要与官方的 1.0.0 教程架构规范保持高度一致，社区贡献者在提交此类 PR 时应先核对核心维护者的排版与结构预期。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为事实上的强化学习标准 API，Gymnasium 的演进直接反映了行业的底层需求趋势：
1. **MuJoCo 深度整合与迭代:** 随着 MuJoCo 开源及底层 API 的成熟，Gymnasium 正全力推进 `v5` 版本环境的适配。从定制模型加载到物理碰撞参数调优（如 Issue #1576），项目正在解决 RL 仿真中“从可用到高保真”的核心痛点。
2. **降低 Sim-to-Real 门槛:** 社区对环境教程（Issue #846）的持续讨论，表明项目正在强化“教学与实操”属性，这将为机器人强化学习提供更加标准化的 Benchmark。
3. **生态基石地位稳固:** 无论算法库如何更迭，Gymnasium 依然是验证新算法的通用语言。参与其 Bug 修复和文档建设，是深入理解 RL 环境机制与物理引擎交互的最佳路径。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>