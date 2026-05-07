# RL 开源生态日报 2026-05-08

> 生成时间: 2026-05-07 22:18 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL）开源生态正处于从“纯文本 PPO 时代”向“多模态、复杂 Agent、异构算力”演进的关键重塑期。传统的基础设施正在经历底层重构，以适应参数量飙升的 MoE 架构和长上下文需求。同时，随着 Qwen3.5、Gemma 4 等新一代基础模型的发布，RL 训练框架的迭代重心明显向异构推理引擎兼容、底层通信优化以及前沿算法的快速工程化倾斜。

## 各项目活跃度对比
*注：无活动的项目（CleanRL, PettingZoo, Stable Baselines3, Tianshou, torchtune）已略过，重点聚焦有实质动态的核心基建。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 13 | 29 | 0 | 确立多模态与 Agent 领域护城河，深水区探索 NPU 适配与极致分布式通信优化。 |
| **TRL** | 5 | 20 | 0 | 紧贴前沿 MoE 与算法，激进修复底层显存泄漏与算力浪费，强化 HuggingFace 生态闭环。 |
| **AReaL** | 6 | 12 | 1 (v1.0.4) | 探索系统级吞吐极限（如 CUDA IPC 零拷贝），着力解决异步训练的一致性痛点。 |
| **Open Instruct** | 1 | 8 | 0 | 硬核打磨 GRPO 训练的底层稳定性，初步探索课程学习范式。 |
| **ROCK** | 3 | 4 | 0 | 验证 RL 向上层应用延伸，发力 Agent 轨迹合成与数据蒸馏流水线。 |
| **ROLL** | 2 | 3 | 0 | 拥抱 AMD 异构算力，打通与外部环境（如 Atropos）的互操作性。 |
| **OpenRLHF** | 1 | 1 | 0 | 引入 TokenSpeed 等异构高性能推理引擎，突破 Rollout 生成瓶颈。 |
| **slime** | 1 | 1 | 0 | 对齐业界前沿，探索权重同步增量压缩技术以缓解通信墙。 |
| **rl_games** | 0 | 1 | 0 | 完善经典算法 API，强化分布式多卡训练下的自定义控制流。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **面向推理能力与 MoE 的 RL 算法迭代**：GRPO 已成为当前各家框架的标配，针对其鲁棒性、过滤逻辑和异步支持的打磨是当前重点。同时，针对 MoE 模型特性（如稀疏路由）的修正算法（如 AReaL 的 R3 机制）以及全新优化器（RandOpt, Muon）正在快速被集成。
2. **向多模态与 Agentic RL 拓展**：传统纯文本策略梯度正在进化。verl 提出 Agent 抽象基座，ROCK 探索轨迹蒸馏，ROLL 集成 Atropos 适配器，研究重心正向多轮交互、工具调用及视觉/音频全能模型的 RL 对齐转移。
3. **课程学习与动态数据采样**：Open Instruct 引入了难度采样的课程学习数据加载器，预示着通过数据分布动态调整来提升 RL 样本效率正成为新的研究趋势。

**工程/基础设施侧信号：**
1. **权重同步与通信机制的极致压榨**：为打破训练与推理（Rollout）阶段的“通信墙”，增量压缩（slime）、CUDA IPC 同卡零拷贝（AReaL）及多节点 RDT 广播（ROLL）成为了大规模分布式 RL 系统的核心突破口。
2. **异构硬件与推理后端的解耦插拔**：框架全面向“兼容并蓄”演进，打破 NVIDIA 算力垄断，深度适配 Ascend NPU（verl）和 AMD ROCm（ROLL）；同时，推理引擎正走向可插拔设计，快速集成 TokenSpeed（OpenRLHF）、Sglang 投机解码（AReaL）以提升吞吐。
3. **底层显存与算力浪费的微观治理**：大规模训练中，“幽灵级” Bug 被密集修复。包括 TRL 修复超 5GB 的显存泄漏和过半的无效 Teacher 前向计算，以及 Open Instruct 解决 FSDP2 下的 Cross-doc attention 异常，标志着工程优化进入深水区。

## 差异化定位分析
1. **verl** 与 **OpenRLHF / slime / ROLL** 构成了当前大模型分布式 RL 训练的“硬核基建第一梯队”。其中 verl 凭借多模态与 Agent 架构的前瞻性占据生态位制高点；AReaL 和 slime 更偏向底层系统级优化与通信极限压榨；而 ROLL 和 OpenRLHF 则致力于异构算力与多元推理引擎的极简接入。
2. **TRL** 作为 HuggingFace 生态的“亲儿子”，定位在于**前沿算法与敏捷试错的统一接口**。它不追求极端的万卡级调度，而是将最新的 SOTA 算法（如 KTO 改进、RandOpt）快速工程化，降低全球开发者的实验门槛。
3. **ROCK** 与 **Open Instruct** 呈现出**垂直场景深耕**的特征。ROCK 重点发力 Agent 交互后处理（如沙箱监控与轨迹蒸馏）；而 Open Instruct 则更像是 AI2 内部针对 GRPO 算法与 FSDP2 集群特性的一个极度硬核的“打磨工作台”。
4. **rl_games** 等老牌经典库依然保持着**传统张量化 RL 算法**的高吞吐基底定位，专注于提供极度优化的连续/离散空间控制基座，与上述大语言模型对齐框架形成错位互补。

## 社区热度与成熟度
1. **极度活跃与高频交付**：verl 和 TRL 维持了惊人的迭代速度（日均 PR 数量达 20+），反映出社区对大模型 RL 基建的强烈需求，同时也表明这两个项目正处于快速收敛、抢占开发者心智的“青春期”。
2. **工程纪律的收紧与规范化**：随着项目进入大规模生产应用，各框架开始注重工程质量。AReaL 引入了 Nightly CI 和双维护者审批机制，TRL 推进破坏性更新（重命名 dtype），这表明大型 RL 开源项目正在从早期的野蛮生长走向成熟的企业级治理。
3. **巨头与顶级研究机构的主导**：目前的活跃项目几乎全由大型科技公司或顶级实验室主导，进一步印证了大模型 RLHF 基础设施的建设是一项高度消耗工程资源的“重火力”游戏，纯个人开发者或小型团队越来越难以从底层框架层面切入，更多转向应用层的周边生态贡献。

## 值得关注的趋势信号
1. **异步 RL 与解耦架构的崛起**：引入独立的 Model Engine Server 计算 log_probs（verl），以及探索解耦的权重同步机制（AReaL），预示着全异步、非阻塞的 RL 训练流水线将逐渐成为千卡万卡规模集群的标配。
2. **Agentic RL 基建成为新蓝海**：单纯的对话模型优化已出现内卷，围绕工具调用、多轮交互反馈和复杂环境沙箱（如 ROCK）的 RL 训练框架，将是各开源项目在今年 Q2/Q3 争夺的下一个战略高地。
3. **“模型演进”倒逼“系统重构”**：随着 Qwen3.5 等 MoE 和全能模型成为主流，RL 框架被迫进行底层重构以解决路由不一致、长上下文张量错位以及思考模型参数暴露等问题。基础模型架构的每一次微小演进，都将引发 RL 底层生态的一次大范围代码适配与重构。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-05-08 ROLL (Reinforcement Learning) 开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，阿里 ROLL 框架社区保持活跃。共处理 **2 条 Issues** 和 **3 条 Pull Requests**，无新版本发布。当前生态动向高度聚焦于**前沿模型兼容性**、**异构算力适配**以及**外部环境集成**。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
- **功能需求：Qwen3.5-9B LoRA 训练支持**
  - **链接**: [alibaba/ROLL Issue #434](https://github.com/alibaba/ROLL/issues/434)
  - **简评**: 社区用户（@shylockasr）发起请求，询问 ROLL 是否有计划支持 Qwen3.5 系列模型的 LoRA 训练 Pipeline。这反映了基础模型快速迭代下，社区对 RL 框架同步适配最新 MoE/Dense 架构及高效微调技术的迫切需求。
- **架构演进：基于 Ray Core RDT 的权重同步集成**
  - **链接**: [alibaba/ROLL Issue #431](https://github.com/alibaba/ROLL/issues/431)
  - **简评**: 开发者（@dpj135）提交了关于重构训练与推理引擎权重同步机制的高级 RFC。目前的 Legacy ccl Broadcast 存在“单 GPU 源限制”（仅 trainer rank 0 参与广播），该提案计划引入 Ray Core RDT 以突破现有单点广播瓶颈，对大规模分布式 RL 训练的通信效率至关重要。

### 4. 关键 PR 进展
- **生态拓展：集成 Atropos 环境适配器**
  - **链接**: [alibaba/ROLL PR #426](https://github.com/alibaba/ROLL/pull/426)
  - **简评**: 该 PR（@RUFFY-369）引入了 NousResearch 的 [Atropos](https://github.com/NousResearch/atropos) 环境作为模块化智能体适配器。它构建了一个“通用奖励桥接器”，使 ROLL 能够原生处理 Atropos 环境的 Reward 信号，极大扩展了 ROLL 在 Agent RL 领域的适用性。
- **文档更新：新增基于 ROLL 的 Freshness-Aware-PER 论文**
  - **链接**: [alibaba/ROLL PR #433](https://github.com/alibaba/ROLL/pull/433) (已合并)
  - **简评**: 将《Freshness-Aware Prioritized Experience Replay for LLM/VLM RL》论文添加至 README 的 "Notable work based on ROLL" 板块。体现了 ROLL 正在被学术界作为核心基座，用于探索大语言/视觉语言模型的经验回放策略。
- **性能优化：ROCm 通信与显存管理**
  - **链接**: [alibaba/ROLL PR #424](https://github.com/alibaba/ROLL/pull/424) (已合并)
  - **简评**: 针对 AMD ROCm 生态进行了深度优化。通过双缓冲逻辑优化了张量桶的 `send_recv` 过程，并在 `model_update` 中引入 `dist.barrier()` 以防止接收方处理前发生数据覆写。提升了非 Nvidia 显卡在分布式 RL 场景下的稳定性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 RL 底层通信瓶颈**: 从 Issue #431 可以看出，ROLL 团队正在积极解决 LLM Post-training 中“训练-推理权重同步”的分布式通信痛点，打破单卡广播限制是提升千卡规模集群扩展性的关键。
2. **敏捷跟进前沿模型**: 对 Qwen3.5 等最新架构的及时响应（Issue #434），表明该框架紧贴大模型演进周期，确保用户能第一时间开展最新基座模型的强化学习对齐。
3. **繁荣的周边生态集成**: PR #426（Atropos环境）和 PR #333（PER算法库）证明了 ROLL 具备良好的模块化设计。它不仅是一个孤立的训练引擎，更在演变成一个能够兼容多种 Agent 环境（如 Atropos）和上层 RL 算法（如 PER）的“积木式”基础设施底座。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-05-08）：

### 1. 今日速览
过去 24 小时内，[alibaba/ROCK](https://github.com/alibaba/ROCK) 仓库保持活跃，共处理了 3 个 Issues 和 4 个 Pull Requests。核心动态围绕 **沙箱监控指标的修复与重构** 以及 **轨迹蒸馏最佳实践的文档建设**。今日无新版本发布。

### 2. 版本发布
无。

### 3. 重点 Issues
- **[NEW] #916 [OPEN] 请求增加轨迹蒸馏最佳实践文档**
  - **作者**: Issac-Newton
  - **概述**: 建议新增一份用户指南，文档化如何使用 ROCK Job 系统收集 Agent 轨迹以进行模型蒸馏训练（使用强 Teacher 模型的行为数据训练弱 Student 模型）。
  - **链接**: [alibaba/ROCK Issue #916](https://github.com/alibaba/ROCK/issues/916)
- **[FIXED] #912 [CLOSED] 沙箱指标 `sandbox.count.image` 始终报告 "default"**
  - **作者**: zhangjaycee
  - **概述**: 缺陷源于 `_collect_sandbox_meta` 从内存字典 `self._sandbox_meta` 读取镜像信息，但当前的异步主入口 `start_async` 未向其写入数据，且进程重启后该字典丢失。
  - **链接**: [alibaba/ROCK/issues/912](https://github.com/alibaba/ROCK/issues/912)
- **[FIXED] #910 [CLOSED] 沙箱指标总是报告默认的 user_info**
  - **作者**: zhangjaycee
  - **概述**: 监控装饰器 `monitor_sandbox_operation` 尝试通过 `_get_user_info` 从 `_redis_provider` 读取上下文，但相关类仅有 `_meta_store`，导致属性缺失。
  - **链接**: [alibaba/ROCK/issues/910](https://github.com/alibaba/ROCK/issues/910)

### 4. 关键 PR 进展
- **[OPEN] #917 新增轨迹蒸馏最佳实践指南及示例**
  - **作者**: Issac-Newton | **关联 Issue**: #916
  - **概述**: 提供了轨迹蒸馏的中英文用户指南，并在 `examples/trajectory_distillation/` 下添加了示例代码与配置模板。已在真实 ROCK 部署环境（swe-agent on SWE-bench）中完成端到端验证。
  - **链接**: [alibaba/ROCK/pull/917](https://github.com/alibaba/ROCK/pull/917)
- **[OPEN] #915 沙箱管理器生命周期状态机重构**
  - **作者**: zhangjaycee
  - **概述**: 引入了沙箱管理器的生命周期状态转换表，进一步规范化底层组件的状态管理。
  - **链接**: [alibaba/ROCK/pull/915](https://github.com/alibaba/ROCK/pull/915)
- **[MERGED] #913 修复沙箱 image 指标读取逻辑**
  - **作者**: zhangjaycee | **关联 Issue**: #912
  - **概述**: 移除了脆弱的内存字典 `_sandbox_meta`，将 `_collect_sandbox_meta` 中的查询逻辑替换为 `self._meta_store.get()`，直接从 Redis 获取可靠的 image 字段。
  - **链接**: [alibaba/ROCK/pull/913](https://github.com/alibaba/ROCK/pull/913)
- **[MERGED] #911 修复沙箱 `_get_user_info` 指标问题**
  - **作者**: zhangjaycee | **关联 Issue**: #910
  - **概述**: 解决了沙箱监控指标中因 Provider 引用错误导致的 user_info 默认值问题。
  - **链接**: [alibaba/ROCK/pull/911](https://github.com/alibaba/ROCK/pull/911)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **发力 Agent 数据合成与蒸馏**：Issue #916 和 PR #917 表明 ROCK 正在将重心从基础的 RL 环境构建向上延伸，提供从 Agent 交互到模型蒸馏的端到端支持，高度契合当前通过更优 Agent 轨迹合成来迭代小模型的行业趋势。
2. **重视工程可靠性与可观测性**：近日连续合并的 PR（#911, #913）和状态机重构（#915）显示出维护团队正在系统性地消除分布式环境下的内存状态不一致问题（如将指标元数据全面下沉至 Redis），这对于需要长时间、高并发运行 RL 任务的系统至关重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 项目 2026-05-08 RL 日报摘要：

### 1. 今日速览
过去 24 小时，slime 仓库整体活跃度平稳，无新版本发布。新增/更新 1 个 Issue 和 1 个 PR。当前焦点集中在**对新架构模型（如 Qwen3.5）的适配排错**以及**底层通信机制（权重同步增量压缩）的架构级优化**。

### 2. 版本发布
- **最新 Releases**：无（近 24 小时未发布新版本）。

### 3. 重点 Issues
- **[#1894](https://github.com/THUDM/slime/issues/1894) [Bug] 运行 Qwen3.5-9b 时出现 `NoneType` 报错**
  - **作者**: cjy0x
  - **状态**: OPEN
  - **详情**: 用户在尝试对 `qwen3_5-9b` 模型进行 RL 训练时，于 `create_training_models` 阶段触发 `AttributeError: 'NoneType' object has no attribute 'megatron_module'`。
  - **分析**: 该报错通常意味着初始化过程中模型并行或分布式训练模块未正确挂载，表明 slime 在适配最新迭代的大规模参数模型时，可能存在底层模型权重加载或组件映射的兼容性遗漏。

### 4. 关键 PR 进展
- **[#1806](https://github.com/THUDM/slime/pull/1806) [feat]: 为权重同步添加增量压缩功能**
  - **作者**: nanjiangill
  - **状态**: OPEN（创建于 4 月初，昨日有更新动态）
  - **详情**: 引入了可选的 `delta compression`（增量压缩）机制，用于 Trainer 与 Rollout Engine 之间的权重同步。
  - **技术背景**: 该 PR 参考了 Cursor 的 *Composer 2* 和 Fireworks 的 *Frontier RL* 思想。在 RLHF/PPO 的典型训练循环中，Actor/Critic 模型在 GPU Trainer 和推理引擎间的权重同步是主要的通信瓶颈。引入增量压缩能显著降低网络带宽消耗，是扩大 RL 算法上下文长度和集群规模的关键基础设施改进。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **直击大模型 RL 训练的性能痛点**：PR #1806 对齐了业界前沿（如 Fireworks）的通信优化思路。在节点级集群中，通过 Delta Compression 解决 rollout 与 training 之间的显存/通信墙问题，对于追求极致吞吐量的 RLHF 工程极具参考价值。
- **紧跟前沿模型生态**：Issue #1894 表明社区正在积极将该项目推向最新的基础模型（如 Qwen3.5-9b）。slime 展现出了快速迭代和验证新模型架构的潜力，是测试下一代 LLM RL 对齐方案的实用试验田。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-08 RL 日报摘要：

# AReaL RL 生态日报 (2026-05-08)

## 1. 今日速览
过去 24 小时内，AReaL (inclusionAI/AReaL) 项目保持高度活跃，共处理 Issues 6 条，Pull Requests 12 条，并发布了包含关键 FSDP 修复的 v1.0.4 版本。项目当前的重心明显向**系统级性能优化**（如 CUDA IPC 权重传输、后台初始化管线）和**底层训练稳定性**（如 MoE 路由重放、树注意力修复）倾斜，同时社区治理流程进一步规范化。

## 2. 版本发布
- **v1.0.4**
  - **核心变更**：修复了 FSDP 初始化时针对集合类包装名的处理 Bug；将项目图表资源迁移至 `assets/figures/` 并新增社区会议文件夹。
  - **详情链接**：[Release v1.0.4](https://github.com/inclusionAI/AReaL/releases/tag/v1.0.4)

## 3. 重点 Issues
1. **路线图发布与征稿**：发布 2026 Q2 Milestones（[#1302](https://github.com/inclusionAI/AReaL/issues/1302)），规划了截至 7 月 31 日的核心开发方向，呼吁社区贡献者参与。
2. **严重推理数据损坏 Bug**：VLLMBridgeBackend 在处理 Chat/Vision 请求的 `abort/resubmit` 逻辑中存在静默丢弃 Token 及篡改 `ModelRequest` 的高危 Bug（[#1222](https://github.com/inclusionAI/AReaL/issues/1222)）。
3. **底层算法与推理 Bug**：
   - `online` 模式下配合 `group_size > 1` 会产生错误的分组（[#1304](https://github.com/inclusionAI/AReaL/issues/1304)）。
   - 单控制器 SFT 存在重复计算 Training Tokens 的问题（[#1202](https://github.com/inclusionAI/AReaL/issues/1202)）。
4. **架构迁移提案**：计划将 Megatron 集成库从 `mbridge` 迁移至官方的 `megatron-bridge`（[#1260](https://github.com/inclusionAI/AReaL/issues/1260)）。

## 4. 关键 PR 进展
1. **推理引擎与并行策略增强**：
   - **Sglang PP 支持**：为 Sglang 后端引入流水线并行，通过独立的 NCCL 权重更新组实现推理端 `pp_size > 1`（[#1162](https://github.com/inclusionAI/AReaL/pull/1162)）。
   - **Sglang 投机解码**：开始支持基于 Sglang Eagle 算法的投机解码（[#1176](https://github.com/inclusionAI/AReaL/pull/1176)）。
2. **训练稳定性与机制创新**：
   - **MoE 路由重放 (R3)**：针对异步 RL 训练中专家路由不一致导致的不稳定，实现了 Routing Replay（[#1207](https://github.com/inclusionAI/AReaL/pull/1207)）。
   - **Muon 优化器**：正在接入 Muon 优化器（[#1270](https://github.com/inclusionAI/AReaL/pull/1270)）。
3. **底层性能极致压榨**：
   - **CUDA IPC 权重传输**：在 Archon 架构中实现 Megatron 训练与 Sglang 推理共享 GPU 的同卡零拷贝传输，摒弃跨设备 NCCL P2P（[#1310](https://github.com/inclusionAI/AReaL/pull/1310)）。
   - **控制器异步初始化**：通过后台线程重叠重度组件的启动时间，大幅减少 `initialize()` 阻塞（[#1294](https://github.com/inclusionAI/AReaL/pull/1294)，已合入）。
4. **工程治理与 CI/CD**：
   - 强制实施双维护者审批的代码合并策略，收紧代码主权（[#1307](https://github.com/inclusionAI/AReaL/pull/1307)，已合入）。
   - 引入 Nightly CI 流水线，使用真实 GSM8K GRPO 训练任务替代空跑测试，按日轮询后端（[#1313](https://github.com/inclusionAI/AReaL/pull/1313)）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 LLM RLHF 核心痛点（吞吐与延迟）**：AReaL 正在探索大模型 RL 训练的工程极限。通过引入 CUDA IPC 同卡零拷贝（[#1310](https://github.com/inclusionAI/AReaL/pull/1310)）和后台线程流水线初始化（[#1294](https://github.com/inclusionAI/AReaL/pull/1294)），打破了传统 RL 训练中推理与训练引擎的通信瓶颈。
2. **解决异步训练的一致性隐患**：异步 RL 训练中 MoE 模型的路由漂移是业界难言之隐，AReaL 提出的 Rollout Routing Replay (R3)（[#1207](https://github.com/inclusionAI/AReaL/pull/1207)）提供了一种显式解法，这对于大规模稀疏模型的 RL 训练极具参考价值。
3. **前沿算法的快速工程化**：项目紧跟前沿优化器（如 Muon 优化器 [#1270](https://github.com/inclusionAI/AReaL/pull/1270)）和推理加速技术（如 Sglang Eagle 投机解码 [#1176](https://github.com/inclusionAI/AReaL/pull/1176)），证明了其作为 RL 基础设施对新兴算法的极强包容性和工程落地能力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-08 RL 日报摘要：

# 🤗 TRL (huggingface/trl) 强化学习生态日报
**日期**: 2026-05-08 | **数据统计**: Issues 更新 5 条 | PR 更新 20 条 | 新版本发布 0 个

---

### 1. 今日速览
过去 24 小时内，TRL 生态保持高度活跃。虽然无新版本发布，但底层训练能力的拓展尤为显著。社区当前的核心焦点集中在**大规模 MoE（混合专家模型）的长上下文训练支持**、**GRPO 训练器的基础设施与工具链绑定**，以及**显存优化和训练加速（如 LoRA、Logits Softcapping、Sequence KD）**等关键方向。

### 2. 版本发布
**无新版本发布。**

---

### 3. 重点 Issues
本期 Issues 主要涉及前沿大模型训练的硬件适配、工具调用及模板支持。

- **30B MoE 长上下文 SFT 训练路线图**
  - **详情**: 开发者提出了在 8×H100 节点上使用 `SFTTrainer` 端到端训练 Qwen3-30B-A3B（及 235B-A22B）的追踪计划，目标是实现 16k 到 1M 上下文长度，并保持与稠密模型相当的 MFU（Model FLOPs Utilization）。
  - **链接**: [huggingface/trl Issue #5713](https://github.com/huggingface/trl/issues/5713)

- **OpenReward 绑定遗漏特定任务工具 (`/task_tools`) 的 Bug**
  - **详情**: 发现 `OpenRewardSpec.environment_factory` 在 GRPO 构建时仅发现共享的 `/tools`，导致遗漏特定任务的 `/task_tools`，引发工具调用表面不匹配的问题。
  - **链接**: [huggingface/trl Issue #5727](https://github.com/huggingface/trl/issues/5727)

- **规范化 `response_schema` 参数暴露**
  - **详情**: 建议在 `add_response_schema` 和 `GRPOTrainer` 中增加 `response_schema=` 参数，跳过模板指纹识别并直接将其分配给内部 tokenizer，提供原生的一级支持。
  - **链接**: [huggingface/trl Issue #5724](https://github.com/huggingface/trl/issues/5724)

- **增加 `&#123;&#37; generation &#37;&#125;` 聊天模板追踪**
  - **详情**: 追踪为常见模型家族添加带生成标记的聊天模板。这对于 SFT 中使用 `assistant_only_loss=True` 至关重要。
  - **链接**: [huggingface/trl Issue #5471](https://github.com/huggingface/trl/issues/5471)

---

### 4. 关键 PR 进展
今日的 PR 动静很大，不仅修了多个关键的内存/计算浪费 Bug，还引入了对前沿算法和重要基础设施的更新。

#### 🚀 核心算法与训练优化
- **新增 ICML 2026 Spotlight 算法 RandOpt 支持**
  - **详情**: 引入基于高斯随机搜索和集成的 [RandOpt 算法](https://arxiv.org/pdf/2603.12228)，并包含测试、文档及 GSM8K 评估脚本。
  - **链接**: [huggingface/trl PR #5719](https://github.com/huggingface/trl/pull/5719)
- **GKDTrainer 修复 Sequence KD 浪费算力问题**
  - **详情**: 修复了当 `seq_kd=True` 时 teacher 生成结果被 student 覆盖的问题。该修复避免了 `lmbda=1.0` 时 100% 的 teacher 算力浪费（默认 `lmbda=0.5` 时浪费约 50%）。
  - **链接**: [huggingface/trl PR #5726](https://github.com/huggingface/trl/pull/5726)
- **实现 GOLDTrainer 的 seq_kd 功能**
  - **详情**: 补全了 `GOLDConfig` 中声明的 `seq_kd` 功能，将 buffer 切分为 on-policy、seq-kd 和 off-policy 三个互斥组进行实际计算。
  - **链接**: [huggingface/trl PR #5725](https://github.com/huggingface/trl/pull/5725)
- **KTO 算法对齐 DPO 算法：引入 Ref Logps 缓存机制**
  - **详情**: 优化 `KTOTrainer`，引入基于哈希的缓存机制来预计算参考对数概率，显著提升效率并避免冗余计算。
  - **链接**: [huggingface/trl PR #5714](https://github.com/huggingface/trl/pull/5714)

#### 🛠️ GRPO 及推理后端增强
- **为 AsyncGRPO 增加 LoRA 支持**
  - **详情**: 打通了 AsyncGRPO 的 LoRA 微调能力（已在 Gemma 4 上测试）。因参数名不匹配，特意采用 HTTP reload 替代了 NCCL weight sync。
  - **链接**: [huggingface/trl PR #5610](https://github.com/huggingface/trl/pull/5610)
- **Async GRPO Trainer 支持 Final Logits Softcapping**
  - **详情**: 补丁修复了 `_ChunkedLogProbFunction`，使 AsyncGRPOTrainer 能够原生支持如 Gemma 2 等使用 `final_logits_softcapping` 技术的模型。
  - **链接**: [huggingface/trl PR #5691](https://github.com/huggingface/trl/pull/5691)
- **vLLM-serve 暴露推理解析参数 (`--reasoning-parser` 等)**
  - **详情**: 解决了使用 Qwen3.5、DeepSeek-R1 等思考模型配合 GRPO 及 `thinking_token_budget` 时引发 vLLM 400 错误的问题。
  - **链接**: [huggingface/trl PR #5672](https://github.com/huggingface/trl/pull/5672)

#### 🧹 稳定性与破坏性更新
- **全面重命名 `torch_dtype` 为 `dtype`**
  - **详情**: 移除了已弃用参数的兼容性垫片。风险提示：该机械重命名更改了模型加载 kwargs，可能导致旧代码报错。
  - **链接**: [huggingface/trl PR #5717](https://github.com/huggingface/trl/pull/5717)
- **修复 Activation Offloading 中超 5GB 的显存泄漏**
  - **详情**: 通过在 `OffloadActivations.__exit__` 中同步 CUDA 流并清除暂存数据，修复了严重的显存泄漏问题。
  - **链接**: [huggingface/trl PR #5700](https://github.com/huggingface/trl/pull/5700)
- **修复 Reward Trainer 中 Margin 键的静默数据丢失**
  - **详情**: 修复了 `DataCollatorForPreference` 仅检查 `examples[0]` 是否含 margin 导致的数据洗牌后边缘数据静默丢失的隐患。
  - **链接**: [huggingface/trl PR #5722](https://github.com/huggingface/trl/pull/5722)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧贴前沿模型 scaling 需求**：从 [Issue #5713](https://github.com/huggingface/trl/issues/5713) 对 30B MoE 大长上下文适配的路线图，到 [PR #5610](https://github.com/huggingface/trl/pull/5610) 和 [PR #5691](https://github.com/huggingface/trl/pull/5691) 对 Async GRPO 计算显存和底层算子的修补，TRL 正在快速解决前沿模型（Qwen3、Gemma 4 等）在 RLHF 阶段的工程痛点。
2. **敏捷集成 SOTA 学术成果**：TRL 保持了对最新强化学习算法的高度敏感，今日新增的 RandOpt ([PR #5719](https://github.com/huggingface/trl/pull/5719)) 进一步丰富了其算法库，为社区提供了除 DPO/PPO 之外的全新优化路径。
3. **对深层工程 Bug 的零容忍**：无论是直接砍掉 50%-100% Teacher 模型无效前向计算的 [PR #5726](https://github.com/huggingface/trl/pull/5726)，还是堵住数 GB 显存黑洞的 [PR #5700](https://github.com/huggingface/trl/pull/5700)，亦或是修复静默丢弃数据的 [PR #5722](https://github.com/huggingface/trl/pull/5722)，都显示出该项目在底层算力利用率和数值准确性上极其硬核的把控力。这对在有限 GPU 资源下寻求极高训练稳定性的 RL 团队至关重要。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 2026 年 5 月 8 日 OpenRLHF 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时，OpenRLHF 仓库维持低频但高技术价值的更新。无新版本发布，新增 1 条社区 Issue 和 1 条核心功能 PR。今日焦点集中于**多节点分布式训练的 Ray 兼容性故障**以及**引入新一代 TokenSpeed 推理后端以加速 PPO Rollout**。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
- **#1236 [OPEN] ray error for multi-nodes training**
  - **作者**: RushDon
  - **概述**: 报告在多节点训练场景下 `ray==2.55.0` 存在兼容性问题导致报错。复现路径为通过 `ray job submit` 发起 `train_vlm_math_hybrid_engine.sh` 脚本（涉及 VLM 数学混合引擎训练及 `openrlhf.cli.train_ppo_ray` 模块）。该问题直指分布式 RLHF 训练集群的可用性痛点。
  - **链接**: [OpenRLHF/OpenRLHF Issue #1236](https://github.com/OpenRLHF/OpenRLHF/issues/1236)

### 4. 关键 PR 进展
- **#1237 [OPEN] Add TokenSpeed-backed PPO rollout engine**
  - **作者**: 4teven
  - **概述**: 旨在为 PPO 训练添加基于 TokenSpeed 的生成后端。主要变更包括：
    1. 新增启动参数 `--vllm.rollout_backend tokenspeed` 作为可选配置。
    2. 实现了与 `RolloutRayActor` 兼容的 TokenSpeed actor，封装了文本生成、权重同步、显存控制及缓存重置等核心功能。
    3. 对 TokenSpeed 的生成输出进行了格式适配，使其无缝接入现有的 Response 处理 Pipeline。
  - **意义**: 在 RL 训练的 Rollout 阶段引入高性能推理后端，有望显著提升经验采样的吞吐量并打破现有生成瓶颈。
  - **链接**: [OpenRLHF/OpenRLHF PR #1237](https://github.com/OpenRLHF/OpenRLHF/pull/1237)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **深度绑定并优化 RL 基础设施**: Issue #1236 暴露出 LLM+RL 演进过程中对底层分布式框架（如 Ray 新版本）的强依赖与适配挑战。OpenRLHF 始终处在解决超大规模多节点训练实际工程问题的最前沿。
2. **探索推理引擎的异构与解耦**: PR #1237 标志着项目在 Rollout 推理引擎上的进一步解耦。通过抽象 `RolloutRayActor` 接口并快速集成 TokenSpeed 等新型高速推理后端，OpenRLHF 正在构建一个可插拔、高吞吐的 RL 训练底层生态，这对于缩短 RLHF/DPO 算法的迭代周期具有决定性作用。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-05-08 RL 日报摘要。

---

# verl 项目 RL 日报摘要 (2026-05-08)

## 1. 今日速览
过去 24 小时内，verl 生态保持了高活跃度。项目共处理了 **13 个 Issues**（包含多个高频讨论的 RFC 和 Ascend NPU 适配反馈），合并或推进了 **29 个 Pull Requests**。当前社区的核心焦点集中在 **多模态/全能模型支持、底层通信与调度优化、以及异构硬件（NPU）的深度融合**。

## 2. 版本发布
- **最新 Releases**: 无
- **新版本发布**: 0 个

## 3. 重点 Issues
今日的 Issues 反映了社区在将 verl 扩展到复杂 Agent 场景和异构硬件时遇到的挑战与架构规划：

- **Agent 抽象与轨迹网关设计 (RFC)**：[#5790](https://github.com/verl-project/verl/issues/5790) 提出为基于 Agent 的 RL 管道引入 `AgentFramework` 基类，以替代当前紧耦合的架构，获得大量关注（👍 18），是构建复杂多轮 Agentic RL 的关键基建。
- **NCCL 挂起/恢复支持 (RFC)**：[#6266](https://github.com/verl-project/verl/issues/6266) 建议在 Colocated（混合部署）模式下引入 NCCL Suspend/Resume，以优化空闲时的底层通信开销，对大规模训练至关重要。
- **Ascend NPU 生态演进**：
  - **Q2 路线图**：[#5526](https://github.com/verl-project/verl/issues/5526) 更新了 verl on Ascend 2026 Q2 路线图，重点推进 MoE、VLM 和 Agent 在 NPU 上的原生支持。
  - **脚本统一与修复**：[#6164](https://github.com/verl-project/verl/issues/6164) 提出统一 NPU 与 GPU 的训练脚本；[#6224](https://github.com/verl-project/verl/issues/6224) 和 [#6211](https://github.com/verl-project/verl/issues/6211) 分别修复了 Ascend 环境下 Rollout 初始化失败和 Routing Replay 导致的同步超时问题。
- **并行策略 Bug 修复**：[#6094](https://github.com/verl-project/verl/issues/6094) 暴露了 Qwen-3.5 在开启 Sequence Parallelism (SP) 时存在的张量形状不匹配问题，而 Qwen-3 并无此问题。

## 4. 关键 PR 进展
今日的 PR 涵盖了底层内核修复、异步引擎增强和新模型接入，显示出极强的工程迭代速度：

- **内核与并行机制修复**：
  - [#6268](https://github.com/verl-project/verl/pull/6268)：修复了 SP（序列并行）与 `fused_kernels` 共同使用时导致标签错位的严重 Bug。
  - [#6267](https://github.com/verl-project/verl/pull/6267)：修复了 Megatron 后端使用 Context Parallelism (CP) 时 `position_ids` 错位的问题。
- **异步与全异步训练增强**：
  - [#6228](https://github.com/verl-project/verl/pull/6228)：为 TransferQueue 引入多输出轨迹的异步奖励打分支持，打通多轮 Agent 循环的反馈链路。
  - [#5990](https://github.com/verl-project/verl/pull/5990) 和 [#6076](https://github.com/verl-project/verl/pull/6076)：分别引入独立的 `Model Engine Server` 计算 `log_probs`，以及支持复用 Trainer worker group 进行验证，大幅提升了全异步管道的解耦能力和资源利用率。
- **新模型与新模态支持**：
  - [#6264](https://github.com/verl-project/verl/pull/6264)：新增基于 VeOmniEngine 的 **Qwen3.5-122B-A10B** GRPO 训练 Demo，并开启了 EP（专家并行）。
  - [#6118](https://github.com/verl-project/verl/pull/6118)（WIP）：增加音频数据路径和 **Qwen3-Omni** 模型的训练支持，向真正的全模态 RL 迈进。
- **架构与工具易用性**：
  - [#5423](https://github.com/verl-project/verl/pull/5423)：为 Megatron 后端引入了 **Megatron-FSDP** 混合模式支持。
  - [#6189](https://github.com/verl-project/verl/pull/6189)：引入了基于纯 Python 函数的轻量级 Tool 注册机制，降低了 Agent 工具调用代码的编写门槛。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **全面拥抱全能模型 与复杂 Agent 架构**：verl 正在迅速跳出传统的纯文本 PPO/GRPO 框架，通过引入 `AgentFramework` 抽象、支持 Qwen3-Omni 多模态训练以及多轮 AgentLoop 输出处理，verl 正在成为**原生支持多模态与复杂交互的 RL 基建首选**。
2. **极致的大规模分布式优化**：项目对底层通信和调度的优化极为硬核。从探讨 NCCL Suspend/Resume 以降低空闲开销，到 Megatron-FSDP 混合模式和 CP/SP 的深度修复，verl 在解决超大参数量（如百亿级 MoE 模型）训练的工程瓶颈方面处于开源生态的前沿。
3. **软硬一体的全栈泛化能力**：verl 展现了极强的跨设备兼容性。不仅同步推进了 Ascend NPU 适配的 Q2 路线图，统一了 NPU/GPU 脚本，还深度集成了 vLLM、SGLang 以及 TensorRT-LLM (TRTLLM) 作为 Rollout 后端。这种打破硬件和推理引擎壁垒的能力，使得不同规模、不同硬件底座的团队能无缝复用同一套 RL 训练流。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 开源生态日报：Open Instruct 项目追踪
**日期**：2026-05-08 | **项目**：[allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，项目呈现出极高的开发活跃度。无新版本发布，但核心开发者（主要是 [finbarrtimbers](https://github.com/finbarrtimbers)）集中处理了 GRPO（Group Relative Policy Optimization）算法实现中的鲁棒性、监控指标以及底层计算集群配置等核心问题。此外，社区引入了一项关于课程学习数据加载器的全新提案。

---

### 2. 版本发布
**无新版本发布**。目前的代码变更主要集中在主分支的持续集成与功能迭代上。

---

### 3. 重点 Issues
仅更新 1 条 Issue，属于无效外部噪音，对项目无实质影响：
*   **[#1639 [CLOSED] .github/workflows/webpack.yml](https://github.com/allenai/open-instruct/issues/1639)**
    *   **概况**：疑似由外部机器人或恶意用户跨仓拷贝产生的 Spam（垃圾）Issue，已由项目维护者关闭。无需关注。

---

### 4. 关键 PR 进展
今日共有 8 条 PR 更新，以下为核心技术变更：

**🚀 算法增强与新特性**
*   **[#1661 [OPEN] WIP: Adds difficulty sampling curriculum dataloader and dataset builder](https://github.com/allenai/open-instruct/pull/1661)**
    *   **分析**：由作者 [undfined] 提交。引入了基于“难度采样”的课程学习数据加载器。这是强化学习训练中提升样本效率的重要范式转换，值得持续追踪其后续合并情况。
*   **[#1656 [OPEN] Add time/per_group_wall_time metric](https://github.com/allenai/open-instruct/pull/1656)**
    *   **分析**：新增 `time/per_group_wall_time` 指标，计算每组生成的平均耗时。现有的 `time/getting_response` 指标受限于尾部延迟（取 Max），新指标将极大提升分布式 RL 训练中批处理时间分布的观测精度。

**🛠️ 核心训练循环与算法修正**
*   **[#1642 [OPEN] Now, `grpo.py` matches `grpo_fast.py` on `qwen3_4b_dapo_math{,_oc}.sh`](https://github.com/allenai/open-instruct/pull/1642)**
    *   **分析**：关键 Bug 修复。修复了 FSDP2 路径下 `grpo.py` 的三大严重问题：Step-0 权重同步失败、per-step logprob 重计算时的 cross-doc attention 错误（该错误会导致 `val/tis_clipfrac` 异常飙升至 HF 基准线的 570 倍）。
*   **[#1663 [OPEN] Restore 🤡 to resample warnings](https://github.com/allenai/open-instruct/pull/1663)**
    *   **分析**：对自动合并 PR #1660 的补充，基于代码审查意见，恢复了批处理重采样逻辑中的重要警告标识。
*   **[#1660 [CLOSED] Resample filtered batches in DataPreparationActor](https://github.com/allenai/open-instruct/pull/1660)**
    *   **分析**：修复了当 `filter_zero_std_samples=True` 时可能返回 `None` 导致进程卡死的问题。通过重采样过滤掉的 batches 确保训练步骤的连续性。

**📊 监控与基础设施**
*   **[#1657 [CLOSED] Log filtered prompts at INFO + add batch/filtered_prompts_pct](https://github.com/allenai/open-instruct/pull/1657)**
    *   **分析**：将过滤提示词的日志级别提升至 INFO，并新增 `batch/filtered_prompts_pct` 指标，强化了训练过程中“有效样本筛选”的可观测性。
*   **[#1662 [CLOSED] Update Beaker budget from ai2/oe-adapt to ai2/oe-omai](https://github.com/allenai/open-instruct/pull/1662)**
    *   **分析**：AI2 内部计算集群预算迁移，将 Beaker 实验启动脚本的默认 billing 预算从退役的 `oe-adapt` 切换至 `oe-omai`。

**已废弃/搁置提案**
*   **[#1650 [CLOSED] Implements IcePop and creates a unified interface for off-policy correction](https://github.com/allenai/open-instruct/pull/1650)**
    *   **分析**：旨在实现 IcePop 算法及离线策略修正统一接口的提案，目前已被关闭。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **深度聚焦大模型底层 RL 机制**：Open Instruct 不是简单的 API 封装，而是直接在 FSDP2 / vLLM 等底层框架上死磕 GRPO 等前沿算法的实现细节（如 #1642 中对 Cross-doc attention 的修正）。
2.  **解决 RLHF 工程中的“幽灵问题”**：在 On-policy 训练中，零方差 Reward 样本过滤、空 Batch 处理以及 Tail-latency（尾部延迟）一直是困扰工程人员的痛点。项目近期的一系列 PR（如 #1660, #1657, #1656）正在系统性地提供解法。
3.  **向 Curriculum Learning（课程学习）演进**：PR #1661 的出现表明该项目正在探索基于数据难度的动态课程强化学习，这代表了后 SFT 时代提升 LLM 推理能力的重要技术趋势。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026-05-08 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时，[rl_games](https://github.com/Denys88/rl_games) 仓库整体趋于平稳，无新增 Issues 或版本发布。唯一的动态来自核心维护者提交的一个功能性 PR，旨在增强训练过程的中断控制能力，显示出项目在底层 API 灵活性上的持续微调。

### 2. 版本发布
- **最新 Releases**：近 24 小时内无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#350 [OPEN] Add custom stop callback for training](https://github.com/Denys88/rl_games/pull/350)**
  - **作者**: [Denys88](https://github.com/Denys88)
  - **摘要**: 引入了一个可选的 `stop_fn(algo) -> bool` 回调函数。该机制允许用户跳出原有的 `score_to_win`、`max_epochs` 或 `max_frames` 等硬性条件，实现基于自定义逻辑的训练终止。
  - **技术细节**: 该钩子函数会在每个 epoch 结束时于 Rank 0 节点进行校验，并通过广播机制同步状态，从而完美兼容多 GPU 分布式训练场景。目前已接入 PPO（连续与离散动作空间）以及 SAC 算法。此 PR 旨在解决并关闭 Issue [#348](https://github.com/Denys88/rl_games/issues/348)。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
[rl_games](https://github.com/Denys88/rl_games) 长期作为高吞吐量、面向张量化计算优化的 RL 基础库，在当前生态中依然具备独特价值：
1. **极佳的训练效率**：其底层算法（如 PPO、SAC）的实现高度优化，是许多顶会论文复现、机器人大赛（如 NVIDIA Isaac Sim 生态）以及海量环境并发的首选后端。
2. **分布式与多 GPU 支持的稳健性**：如今日 PR #350 所示，项目在引入新特性时，始终将多卡分布式训练下的状态同步（Rank 0 broadcast）作为基础架构进行考量，保证了工业级和大规模实验的稳定性。
3. **API 扩展性演进**：通过逐步引入如 `stop_fn` 这样的自定义回调，项目正在传统“配置文件驱动”之上，提供更友好的编程级接口，以适应日益复杂的动态训练策略（如基于外部评估器的早停机制）。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>