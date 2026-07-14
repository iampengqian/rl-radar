# RL 开源生态日报 2026-07-15

> 生成时间: 2026-07-14 22:17 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态正呈现出显著的“两极分化”与“阶层固化”趋势：
*   **大模型对齐基础设施进入深水区**：以 AReaL、verl、TRL、slime、ROLL 为代表的 LLM RL 训练框架占据了绝大部分生态活力。它们已跨越单纯的 PPO 算法实现，正激烈角逐于全异步架构调度、异构多硬件后端适配以及 Agentic RL 环境交互的生命周期管控。
*   **经典单智能体/多智能体环境趋向基建化与严苛化**：以 Gymnasium、PettingZoo 为代表的传统 RL 环境项目，其 API 标准已绝对固化，当前主要演进集中于适配现代 Python 特性（如剥离强依赖、泛型严格提示）和修复高并发向量化环境下的边界条件。
*   **轻量级与学术复现型框架步入静默期**：CleanRL、OpenRLHF、Tianshou、SB3 等项目在过去 24 小时内无代码级提交或处于极低活跃度，表明这些项目的系统架构或算法实现已达到阶段性的极度稳定。

## 各项目活跃度对比
*注：以下数据基于过去 24 小时的 GitHub 公开动态，无活动项目已隐去合并展示。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **AReaL** | 0 | 46 | 0 | 高度聚焦 Agent 底层安全控制与非共存架构的高并发解耦 |
| **TRL** | 14 (13 closed) | 31 | 0 | 发力 GOLD 蒸馏算法与 vLLM 推理引擎的底层原生同步 |
| **verl** | 5 | 25 | 0 | 死磕全异步 PPO 瓶颈，推进多维并行与跨节点硬件兼容 |
| **Gymnasium** | 4 | 16 | 0 | 深度清理底层技术债，向泛型提示与轻量化依赖演进 |
| **slime** | 1 | 6 | 0 | 迭代前沿算法精度，加固大规模 MoE 模型的分布式 Rollout |
| **ROCK** | 3 | 6 | 0 | 攻坚超大规模并发下的沙盒调度泄漏与生命周期管理 |
| **PettingZoo** | 1 | 9 | 0 | 移除冗余环境，强化多智能体底层 API 稳定性与测试基准 |
| **ROLL** | 5 | 2 | 0 | 直面大模型 RLHF 权重更新瓶颈，拥抱昇腾 NPU 算力生态 |
| **CleanRL** | 0 | 1 | 0 | 维护者持续优化“单文件”设计下核心算法的张量内存拷贝 |
| **Open Instruct** | 1 | 0 | 0 | 社区聚焦于完全开源模型（如 OLMo-3）端到端对齐复现细节 |

## 共同关注的研究与工程方向
跨项目分析显示，当前业界的前沿探索正高度收敛于以下两个维度的核心痛点：

**研究侧信号：**
*   **蒸馏与 RL 的深度融合**：知识蒸馏不再局限于离线静态过程。TRL 深度重构 GOLD（生成式在线蒸馏），支持跨 Tokenizer 与特权上下文；slime 社区也发出了对通用在线策略蒸馏（OPD）的强烈需求。这预示着“推理增强->小模型在线蒸馏”正成为新的主流范式。
*   **Reward 与信用分配的精细化校准**：针对生成式反馈的脆弱性，各框架正密集修复归一化 Bug。AReaL 和 slime 均引入了基于同 Prompt 的显式/分组奖励归一化控制，并动态丢弃失效的 rollout 组，以消除零奖励带来的无效梯度更新。

**工程/基础设施侧信号：**
*   **全异步调度与权重同步加速**：在线 RLHF 的 GPU 闲置痛点正被集中攻坚。verl 引入动态资源缩放和流式加载突破全异步限制；ROLL 和 verl 开发者均在直面 `update_weights` 阶段导致解码吞吐量暴跌或卡死的问题。
*   **Agentic RL 与沙盒基建的安全隔离**：随着 RL 从静态数据转向代码执行/环境交互，底层调度面临严峻挑战。AReaL 引入了严格的 Agent 内存凭证与生命周期协议；ROCK 暴露并修复了超大规模（>1000）并发沙盒自动回收泄漏的问题。
*   **异构算力与多维并行的底层解耦**：为榨取极限算力，框架正摒弃单一后端。verl 与 ROLL 均在大力推进对昇腾 NPU 的原生适配，同时 verl 的 Torchtitan 引擎正打通上下文并行（CP）与序列并行（SP）的叠加壁垒。

## 差异化定位分析
尽管同属 RL 生态，但核心项目的战略卡位已出现显著差异，满足了不同决策者的诉求：
*   **巨型分布式训练底座（AReaL, verl）**：两者的竞争核心在于“超大规模集群的极限调度”。AReaL 的特色在于将 Agent 交互做到金融级的安全与防越权，而 verl 的杀器在于对低精度（FP4/FP8）和多维并行的极致压榨。适合千卡级大模型团队对标。
*   **生态核心与算法极速迭代器（TRL, slime）**：TRL 依托 HuggingFace 生态，正成为连接新型推理引擎与新型小模型蒸馏的首选试验田。slime 则展现了对前沿 MoE 架构极强的工程落地与精度修复能力。适合算法研究员快速验证 SOTA 变体（如 REINFORCE++、DAPO）。
*   **任务编排与运行时治理（ROCK）**：并非纯粹的算法框架，而是聚焦于将复杂 RL 任务的数据流、沙盒执行和状态机统一编排，充当 Agent 与 RL 系统之间的“操作系统”。
*   **坚如磐石的底层 API 标准（Gymnasium, PettingZoo）**：完全脱离了 LLM 狂热，回归经典控制与多智能体。专注于处理底层数据类型溢出、物理碰撞计算丢失等问题，是整个 RL 评测体系的信任基石。

## 社区热度与成熟度
*   **技术债务的收敛能力**：成熟项目的标志在于能高效清理底层技术债。TRL（单日关闭 13 个 Issue）、Gymnasium 和 PettingZoo 展现了核心维护者极强的代码裁剪与历史包袱清理能力（如 PettingZoo 果断移除 Gin Rummy 环境，Gymnasium 剥离 PyTorch 强依赖）。
*   **外部贡献者的质量**：顶级开源项目正吸引着极高水平的系统工程师。slime 今日的多个硬核 PR（从底层算子向量化重构到分布式一致性哈希路由）均由外部贡献者驱动；Gymnasium 也有特定开发者集中射落了隐蔽的共享内存 dtype 与向量化统计溢出 Bug。
*   **对前沿硬件的敏锐响应**：框架的生命周期极度依赖对上游变动的响应速度。ROLL 对 Transformers v5+ RoPE 字段变动的迅速适配，以及多个框架对 AMD/Ascend 异步算力的支持，证明了高健壮性开源社区正形成跨芯片生态的护城河。

## 值得关注的趋势信号
1.  **静默截断引发的“无效训练”警备升级**：多框架（TRL、slime）开始针对长文本生成被全量截断或静默丢弃的现象增加显式警告或直接丢弃机制。业界逐渐意识到，在 RLAIF/RLHF 中，不合理的 Token 极限配置会导致零梯度的幽灵训练。
2.  **权重同步正在取代计算成为新瓶颈**：verl 和 ROLL 的核心开发者均报告，在全参数 RL 训练中，Actor 到 Rollout 引擎的权重同步（如通过磁盘或 NCCL）正导致严重的吞吐量断崖，甚至长达数十分钟的 GPU 挂起。底层通信机制（如 vLLM 的原生双缓冲块推送）的革新迫在眉睫。
3.  **向软硬件协同设计的纵深演进**：纯算法封装的开源框架正在失去竞争力。如今的护城河在于对特定硬件（昇腾 MindSpeed、AMD MI250X）的适配深度，以及与底层推理引擎的解耦能力，RL 框架正日益演变为类似 DBMS 的高并发分布式调度系统。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

### ROLL (alibaba/ROLL) RL 生态日报 | 2026-07-15

#### 1. 今日速览
*   **Issue 动态**：过去 24 小时内共有 5 条 Issue 更新，主要集中在多模态训练崩溃、权重更新瓶颈、异构硬件支持及生成调度异常等方面。
*   **PR 动态**：过去 24 小时内有 2 条 PR 更新，重点拓展了对华为昇腾生态的适配以及对最新版 Transformers 架构的兼容。
*   **Releases**：过去 24 小时无新版本发布。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 重点 Issues
今日活跃的 Issue 反映了社区在大规模多模态训练与底层资源调度中遇到的核心痛点：

*   **多模态模型 (VL) 训练与推理崩溃** ([Issue #435](https://github.com/alibaba/ROLL/issues/435))
    *   **摘要**：在尝试使用 Qwen2-VL / Qwen3-VL 进行训练或采样时，系统在前向传播或数据收集阶段崩溃。根本原因在于核心库的 Collator 缺失了对 `mm_token_type_ids` 的处理逻辑。该问题直接影响最新多模态模型的可用性。
*   **权重更新极其缓慢导致 GPU 空闲** ([Issue #279](https://github.com/alibaba/ROLL/issues/279))
    *   **摘要**：在单机单卡环境下，Qwen2.5-VL-7B 的每次权重更新耗时长达 20 分钟，计算资源在此期间处于严重闲置状态。开发者正寻求底层加速方案。
*   **大模型 Actor 推理阶段挂起** ([Issue #329](https://github.com/alibaba/ROLL/issues/329))
    *   **摘要**：在 8 GPU 节点上运行 Qwen3-8B 时，训练流程在 actor-infer 步骤卡死。通过 `pystack` 排查指向了 vLLM 底层的 `uniproc_executor` 通信阻塞问题。
*   **底层设备映射不支持非连续 GPU 编号** ([Issue #205](https://github.com/alibaba/ROLL/issues/205))
    *   **摘要**：资源调度器与配置文件目前无法处理非连续或非 0 起始的物理 GPU 映射（如 `device_mapping: [1, 3]`），限制了复杂集群环境下的灵活部署。
*   **Agentic 任务生成调度越界报错** ([Issue #309](https://github.com/alibaba/ROLL/issues/309))
    *   **摘要**：运行 `code_dapo` 数学代理任务配置时，序列因过长未被正确截断，导致在 `generate_scheduler` 环节出现张量维度越界报错。

#### 4. 关键 PR 进展
核心代码库的演进目前高度聚焦于**多硬件生态兼容**与**上游依赖适配**：

*   **支持昇腾 NPU (MindSpeed & Megatron) 及 CI 测试** ([PR #456](https://github.com/alibaba/ROLL/pull/456))
    *   **进展**：[OPEN] 状态。该 PR 引入了基于 MindSpeed 的 NPU 初始化补丁、Megatron 优化器及 offload 兼容性更新，并专门处理了 NPU 架构下的 attention mask 逻辑。同时配套添加了昇腾 CI 工作流和 Qwen3 DPO Megatron 示例。标志着 ROLL 正在积极推进跨芯片算力（CPU/GPU/NPU）的无缝支持。
*   **适配 Transformers v5+ 的 RoPE 配置** ([PR #473](https://github.com/alibaba/ROLL/pull/473))
    *   **进展**：[CLOSED] 状态。修改了 MCore Adapter，使其能够直接解析新版本 Transformers 暴露的 `rope_parameters` 字段，修复了原先仅依赖 `rope_scaling` 带来的兼容性断层。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **直面前沿大规模 RLHF 痛点**：从 Issue 反馈来看，ROLL 正在被高度应用于 Qwen3-8B、Qwen2.5/3-VL 等最新一代 SOTA 模型的强化学习对齐中。社区提出的“权重更新瓶颈”、“推理挂起”等问题，正是当前 LLM/VL RL 训练走向极大规模时普遍面临的工程挑战。
2.  **硬核的异构算力适配能力**：通过 PR #456 可以看出，ROLL 的工程重心不仅局限于英伟达生态，而是快速拥抱基于 MindSpeed 的昇腾 NPU 集群，这对于寻求算力替代方案的国内 RL 开源生态具有极高的实用价值。
3.  **紧跟底层依赖迭代**：对 Transformers v5+ RoPE 参数的快速响应（PR #473），证明了项目维护者对上游 LLM 基础设施变动保持极高的敏锐度，确保了 RL 训练框架的生命周期与兼容性。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报**
**日期**: 2026-07-15

### 1. 今日速览
过去 24 小时内，ROCK 仓库共有 9 项动态更新（Issues: 3，PRs: 6），无新版本发布。今日的核心主线高度聚焦于**沙盒的稳定性与生命周期管理**：开发者提交了多项关于沙盒并发状态刷新、自动清理机制的 Bug 修复，同时在架构层面引入了新的 OpenSandbox 运行时后端，并统一了数据集任务的 CLI 编排。

### 2. 版本发布
*   **无新版本发布**。当前开发活动主要集中于主干分支的缺陷修复与架构增强。

### 3. 重点 Issues
今日新增的 3 个 Issue 均与底层沙盒调度的边缘条件有关，反映了项目在应对高并发和大规模任务时的暴露出的细粒度问题：

*   **[#1248](https://github.com/alibaba/ROCK/issues/1248) 放宽 ScaffoldHub 依赖约束** [OPEN]
    *简述*: 建议将 MCP 额外依赖从严格锁定的 `0.1.6` 放宽至 `>=0.1.6`，以减少依赖冲突。*
*   **[#1246](https://github.com/alibaba/ROCK/issues/1246) 并发刷新导致 `get_status` 状态断言失败** [OPEN]
    *简述*: `SandboxManager.get_status` 在处理多个调用者并发刷新同一沙盒时，若状态已从 Pending 被推进至 Running，原读取的 Pending 状态会触发错误的存活转换逻辑并报错。*
*   **[#1242](https://github.com/alibaba/ROCK/issues/1242) `auto_delete` 逻辑导致部分过期沙盒泄漏** [OPEN]
    *简述*: 自动删除扫描器以 `stop_time DESC` 排序获取候选者。当停止的沙盒超过 1000 个时，扫描器会一直读取最新的记录（因未过期而跳过），导致最旧且已过期的沙盒永远无法被扫描和清理。*

### 4. 关键 PR 进展
针对上述底层调度问题，社区及核心开发者（zhangjaycee 等）迅速做出了响应，同时推进了重要的 Feature 更新：

**Bug 修复 (Sandbox 生命周期)**
*   **[#1247](https://github.com/alibaba/ROCK/pull/1247) fix: guard pending status alive transition** [OPEN]
    *简述*: 针对 Issue #1246，保护并发场景下的 pending 状态存活转换，避免报错。*
*   **[#1243](https://github.com/alibaba/ROCK/pull/1243) fix auto-delete stopped sandbox ordering** [OPEN]
    *简述*: 修复 Issue #1242，调整 `auto_delete` 扫描器的排序逻辑，确保历史过期沙盒能被正确清理。*
*   *(注: PR [#1244](https://github.com/alibaba/ROCK/pull/1244) 与 [#1245](https://github.com/alibaba/ROCK/pull/1245) 已被作者 CLOSED，逻辑可能已被 #1243 和 #1247 取代或重构。)*

**架构与功能增强**
*   **[#1233](https://github.com/alibaba/ROCK/pull/1233) feat(proxy): add OpenSandbox runtime backend** [OPEN]
    *简述*: 抽象并新增了 OpenSandbox 运行时后端。将命令执行、文件操作及状态查询通过 OpenSandbox SDK 进行路由，采用“失败即关闭”原则处理异常元数据，极大增强了沙盒后端的扩展性。*
*   **[#1235](https://github.com/alibaba/ROCK/pull/1235) feat(cli): unify job run orchestration for dataset tasks** [OPEN]
    *简述*: 扩展 `rock job run` 使其成为统一入口，支持通过 `--task`、`--tasks`、`--all` 执行单任务、多任务和全量数据集，内置并发控制与 JSONL 进度事件写入，完善了 RL 数据处理的工程闭环。*

### 5. 为什么在当前 RL 生态继续关注 ROCK？
1.  **攻坚大规模 RLHF/Prompt 工程的基建痛点**：今日集中暴露的并发状态机和“>1000沙盒自动回收”问题，侧面印证了 ROCK 正在被应用于**超大规模、高并发的 Agent 与 RL 任务**中。核心团队对这些边缘条件 的迅速响应，证明了其底层调度组件的高维护性。
2.  **运行时解耦与后端可插拔**：PR #1233 引入 OpenSandbox 运行时后端，表明 ROCK 正在抽象其执行层。这种解耦意味着未来 RL 开发者可以更灵活地对接不同的代码解释器或沙箱环境，增强了作为“RL 基础设施”的中立性。
3.  **端到端编排能力的补齐**：PR #1235 统一了基于数据集的任务编排，补齐了从 RL 数据处理、并发执行到元数据记录的最后一公里，使其正从一个单纯的算法库向完整的 RL 工程平台演进。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 slime (THUDM/slime) RL 生态日报 | 2026-07-15

## 1. 今日速览
过去 24 小时内，slime 仓库活动高度聚焦于**底层算法优化**与**工程鲁棒性提升**。共计更新 1 条 Issue 和 6 条 PR，无新版本发布。社区开发者（特别是 `morluto` 与 `chengcuiping`）贡献了多个针对 GRPO 变体、REINFORCE++ 算法以及底层分布式 Rollout 机制的关键修复与性能优化。

## 2. 版本发布
**无**。当前项目处于持续的代码迭代与问题修复阶段，暂未发布新的正式 Release。

## 3. 重点 Issues
- **#2202 [Question] Do we support general on-policy distillation?** `作者: HelloWorldLTY`
  - **摘要**: 开发者正在询问 slime 是否支持**通用在线策略蒸馏 (General On-Policy Distillation, OPD)**（参考 HuggingFace 的 OP1D 机制）。这表明社区对 slime 在复杂模型蒸馏与策略对齐场景下的应用有着明确的扩展需求。
  - 🔗 [THUDM/slime Issue #2202](https://github.com/THUDM/slime/issues/2202)

## 4. 关键 PR 进展
今日的 PR 更新涵盖了从量化训练、算法精度修正到系统性能榨取的多个维度：

### 🚀 算法与性能优化
- **#2205 perf: vectorize REINFORCE++ discounted returns** `作者: morluto`
  - **进展**: 将 REINFORCE++ 的折扣回报计算从宿主机端的 Python 反向循环重构为**向量化计算**。复用了 `ppo_utils.py` 中现有的分块折扣扫描逻辑，大幅缓解了处理批量长序列文本时的 Host-side 性能瓶颈。
  - 🔗 [THUDM/slime PR #2205](https://github.com/THUDM/slime/pull/2205)
- **#2156 Support Qwen3.5 MoE INT4-QAT** `作者: ShuZihan`
  - **进展**: 为路由专家增加 Qwen3.5 MoE INT4-QAT（量化感知训练）支持。完善了从 Megatron 到 HF 的运行时权重转换逻辑，展现了 slime 对前沿大尺度 MoE 模型量化的工程支撑能力。
  - 🔗 [THUDM/slime PR #2156](https://github.com/THUDM/slime/pull/2156)

### 🛠️ 算法正确性修复
- **#2204 fix: normalize rewards by explicit sample groups** `作者: morluto`
  - **进展**: 修复了 GRPO 奖励归一化 Bug。此前系统按总样本数推断奖励组，当面临非均匀采样（如每个 prompt 返回不同数量的样本）时会导致奖励中心化错误。现已强制使用显式样本组进行精准归一化。
  - 🔗 [THUDM/slime PR #2204](https://github.com/THUDM/slime/pull/2204)
- **#2203 fix: validate DAPO integer labels without float coercion** `作者: morluto`
  - **进展**: 修复了 DAPO 评分器的整数标签验证逻辑。取消了 `int(float(gt))` 的强制类型转换，避免了如 `"0.5"` 被错误接收为 `0`，以及大整数超出 binary64 精度范围后被异常舍入的严重精度问题。
  - 🔗 [THUDM/slime PR #2203](https://github.com/THUDM/slime/pull/2203)

### ⚙️ 分布式系统与 Rollout 机制
- **#2207 Fix partial rollout off-policy loss mask alignment** `作者: chengcuiping`
  - **进展**: 引入 `Sample.mask_response_tokens()` 辅助方法。修复了在部分 Rollout 屏蔽以往的 off-policy 响应 token 时，`loss_mask` 长度不一致的不变性破坏问题，并补充了 CPU 回归测试。
  - 🔗 [THUDM/slime PR #2207](https://github.com/THUDM/slime/pull/2207)
- **#2206 [Rollout] Add opt-in group-scoped session affinity** `作者: chengcuiping`
  - **进展**: 为自动分配的 Rollout 会话 ID (session IDs) 增加了可选的组作用域。默认保持原有的单样本行为，复用现有的 `X-SMG-Routing-Key` 路径进行一致性哈希路由，增强了多轮对话及复杂分组分布式的路由稳定性。
  - 🔗 [THUDM/slime PR #2206](https://github.com/THUDM/slime/pull/2206)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿算法迭代**: slime 正在快速吸收并优化业界最新的 RLHF/RLAIF 变体（如 REINFORCE++、GRPO、DAPO）。今日多项针对核心算法精度（如 DAPO 类型转换、GRPO 非均匀采样）的修复，说明该团队在追求算法的极致工程严谨性。
2. **强大的系统级扩展能力**: 对大规模 MoE 模型（Qwen3.5）的 INT4-QAT 支持以及对分布式 Rollout 引擎（会话亲和、一致性哈希、部分采样掩码）的深度改造，证明 slime 并非简单的算法封装，而是一个具备极高吞吐效率和容错机制的工业级 RL 训练框架。
3. **高度活跃的社区共创**: 今日核心 PR 主要由外部贡献者（`morluto`, `chengcuiping` 等）驱动，涵盖了从底层算子向量化到系统路由的硬核代码。这种吸引高端系统/算法工程师贡献的生态活力，是开源项目长期生命力的最强背书。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-07-15)**

**1. 今日速览**
过去 24 小时内，AReaL 仓库共有 46 个 PR 发生状态更新，无新增 Release 或 Issue。项目近期核心动向高度聚焦于两大板块：**Agent/Codex 底层生命周期的安全与健壮性强化**（涉及 Memory Service、Session 精细化控制），以及 **RL 训练/V2 推理引擎的 Bug 修复与功能扩展**。开发节奏紧密，代码合并效率极高。

**2. 版本发布**
* 无新增版本发布。

**3. 重点 Issues**
* 过去 24 小时无新增 Issue 更新。

**4. 关键 PR 进展**
今日的 PR 更新主要分为以下三个技术方向：

*   **RL 训练与 Rollout 机制优化**
    *   **[PR #1516](https://github.com/areal-project/AReaL/pull/1516) [OPEN]**：引入分组奖励归一化控制（`reward_normalization`），支持在基于同一 prompt 生成的 `n_samples` 个 rollout 之间进行归一化，并提供 `drop_incomplete_group` 机制丢弃部分失败的 rollout 组。
    *   **[PR #1480](https://github.com/areal-project/AReaL/pull/1480) [CLOSED]**：新增带有版本完整性校验的在线留出评估路径。允许在 PPO 等外部 Agent 持续产生训练样本的同时，在一个固定的任务分布上测量模型性能。
    *   **[PR #1541](https://github.com/areal-project/AReaL/pull/1541) [OPEN]**：修复异步奖励超时问题，确保在 OpenAI proxy v1 工作流中，`AsyncRewardWrapper` 超时时返回浮点数 `0.0` 而非整数 `0`，避免类型校验报错。

*   **V2 引擎架构与权重更新**
    *   **[PR #1472](https://github.com/areal-project/AReaL/pull/1472) [CLOSED]**：修复 V2 架构下非共存（非 Colocated）本地 SGLang rollout 的全参数 RL 更新问题。强制要求遵循显式声明的 `actor.weight_update_mode=disk` 配置，而不再错误地强制分派至 AWEX。
    *   **[PR #1485](https://github.com/areal-project/AReaL/pull/1485) [CLOSED]**：修复 V2 引擎中异步 HTTP 客户端（`httpx.AsyncClient`）跨事件循环缓存导致的 keep-alive 传输句柄泄漏问题。
    *   **[PR #1476](https://github.com/areal-project/AReaL/pull/1476) [CLOSED]**：解耦轨迹交付机制。分离了用于在线训练的 `online_ready` 回调与用于工作流显式拉取的 `export_trajectories`，防止队列阻塞。

*   **Codex 底层安全、内存与生命周期管控**
    *   **生命周期与并发**：[PR #1540](https://github.com/areal-project/AReaL/pull/1540) 定义了精确的 Agent 会话生命周期网络协议；[PR #1535](https://github.com/areal-project/AReaL/pull/1535) 实现了并发回收空闲 Agent 会话，消除慢速 Worker 清理造成的 Head-of-Line 阻塞。
    *   **安全与鉴权**：[PR #1520](https://github.com/areal-project/AReaL/pull/1520) 为 Controller 管理的 DataProxy/Worker 对添加独立的 Bearer 凭证认证；[PR #1531](https://github.com/areal-project/AReaL/pull/1531) 为每个 DataProxy 会话 incarnation 固化 `ordinary` 或 `memory` 安全模式，拒绝运行时越权降级或升级。
    *   **可信内存服务**：[PR #1491](https://github.com/areal-project/AReaL/pull/1491) 引入不可变的内存服务证据账本；[PR #1510](https://github.com/areal-project/AReaL/pull/1510) 增加严格受信的进程级内存发布控制存储；[PR #1534](https://github.com/areal-project/AReaL/pull/1534) 引入 Worker 侧 Memory 会话预留机制，确保会话键的独占绑定。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
AReaL 不仅仅是做基础的 PPO/RLHF 训练框架，其最新的代码演进指明了大模型 RL 训练系统的前沿痛点：
1.  **攻克 Agentic RL 底层瓶颈**：大量针对 Codex（代码/智能体执行环境）的 PR 显示，项目正在花大力气解决 Agent 在线学习时的“身份鉴权、内存隔离、状态生命周期”问题。这对于 RL 从“静态数据集反馈”走向“复杂环境交互反馈”至关重要。
2.  **解耦与高并发工程实践**：从对 V2 引擎异步客户端事件循环的修复（#1485），到并发清理会话阻塞（#1535），以及本地 rollout 权重更新模式的解耦（#1472），展示了项目在超大规模、高并发分布式训练中的深厚工程积累，直接对标顶尖大厂的基础设施标准。对于希望构建大规模在线 RLHF / Agent 训练平台的研究者和工程师而言，AReaL 的架构演进具有极高的参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-15 HuggingFace TRL (Transformer Reinforcement Learning) 项目日报：

### 1. 今日速览
- **Issues 动态**：过去 24 小时更新 14 条（其中 13 条已关闭，1 条开放中），主要是历史 Bug 修复确认与功能讨论。
- **PR 动态**：过去 24 小时更新 31 条，重点集中在 **GOLD 蒸馏算法**、**GRPO/AsyncGRPO 性能与边界修复**，以及**评估数据集兼容性测试**。
- **版本发布**：无新版本发布。

---

### 2. 版本发布
无。当前项目处于持续集成与功能迭代阶段。

---

### 3. 重点 Issues
今日更新的 Issue 多为历史积压清理，以下是值得关注的技术讨论与修复闭环：

- **[OPEN] GOLD Trainer 算法增强探讨** ([#5741](https://github.com/huggingface/trl/issues/5741))
  - **关注点**：开发者讨论 `gold_trainer` 是否能支持带有“特权上下文”的教师模型（即教师输入包含学生不可见的额外信息），这对于复杂推理任务的蒸馏具有极高价值。
- **[CLOSED] FSDP2 + DPO 混合精度报错修复** ([#3581](https://github.com/huggingface/trl/issues/3581))
  - **关注点**：此前在 8 卡 FSDP 下运行 DPO 时触发 `MixedPrecisionPolicy` 属性缺失的问题已解决。
- **[CLOSED] GRPOTrainer 支持 Multi-turn（多轮）训练** ([#4974](https://github.com/huggingface/trl/issues/4974))
  - **关注点**：完善多轮训练场景（如智能体交互、环境反馈）下的 Attention Masking 问题，为 NeMo-Gym 集成铺平道路。
- **[CLOSED] SFTTrainer 的静默截断 Bug** ([#3927](https://github.com/huggingface/trl/issues/3927))
  - **关注点**：当设置 `assistant_only_loss=True` 且序列长度超限时的静默截断问题，该 Issue 获得 3 个点赞，表明痛点命中率较高。

---

### 4. 关键 PR 进展
今日的 PR 展现了 TRL 在底层训练效率和 RL 算法机制上的显著推进：

#### 🔥 GOLD (Generative Online Distillation) 核心升级
- **PR [#6387](https://github.com/huggingface/trl/pull/6387)**: **vLLM 原生权重同步引擎集成**。GOLDTrainer 现通过 vLLM 的原生引擎（打包为 1GB 的双缓冲 NCCL 块）推送更新的学生模型权重，大幅提升同步效率。
- **PR [#6126](https://github.com/huggingface/trl/pull/6126)**: **引入跨 Tokenizer 知识蒸馏 (X-Token KD)**。在 GOLDTrainer 中新增 Projection KL 和 Projection JS 损失变体，允许学生和教师使用不同的 Tokenizer。
- **PR [#6388](https://github.com/huggingface/trl/pull/6388)**: 推荐使用 LFM2.5-1.2B 和 Gemma 4 E4B 作为学生模型，并修复了 SentencePiece 的 ULD 问题。

#### ⚡ GRPO 与异步机制优化
- **PR [#6264](https://github.com/huggingface/trl/pull/6264)**: **上调最大生成长度默认值**。将 `max_completion_length` 默认值从 256 提升至 512，防止在基础推理任务中被静默截断。
- **PR [#6220](https://github.com/huggingface/trl/pull/6220)**: 增加警告机制。当生成结果被全量截断（导致零奖励、零梯度）时抛出警告，避免用户陷入“无效训练”陷阱。
- **PR [#6385](https://github.com/huggingface/trl/pull/6385)**: 修复 `AsyncGRPOTrainer` 因数据分叉导致的 Epoch 计数错误。

#### 🛠️ 底层稳定与工程修复
- **PR [#6384](https://github.com/huggingface/trl/pull/6384)**: 修复 SDPO/SDFT 在使用 DeepSpeed ZeRO-3 评估阶段下 `use_liger_kernel` 报错的问题。
- **PR [#6321](https://github.com/huggingface/trl/pull/6321)**: 优化计算资源开销。当截断导致 Completion Token 全部丢失时（无学习信号），在 DPO/KTO 中直接丢弃该样本。

---

### 5. 为什么值得继续关注？
在当前的 LLM RL 生态中，TRL 正在两个关键维度上建立极深的护城河：

1. **拥抱高效的推理与训练异构引擎**：从今日密集合并的 vLLM 相关 PR（如原生权重同步机制）可以看出，TRL 不再局限于传统的 PyTorch 训练循环，而是深度整合推理框架（vLLM），解决 RLHF 中生成与训练的异步鸿沟。
2. **探索“蒸馏即 RL”的新范式**：GOLD Trainer 的极速迭代（支持跨 Tokenizer、特权上下文探讨）表明，TRL 正在将传统的 SFT 蒸馏与 RLHF 在线反馈深度结合。这对于当前模型端侧化（使用小模型/不同架构模型）和长链推理（TreeRPO 信用分配）的发展趋势具有决定性的支撑作用。

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

**verl RL 生态日报 | 2026-07-15**

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **5 条 Issues** 和 **25 条 PRs**，无新版本发布。今日的开发重心高度集中在**全异步训练优化**、**多维并行策略（CP/SP/TP）**以及**多硬件后端兼容（Ascend/Megatron-Bridge）**。全异步 PPO 框架的显存管理与资源调度取得了实质性修复进展。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
* **[roadmap] verl 26Q3 路线图更新** ([#6985](https://github.com/verl-project/verl/issues/6985))
  **核心关注点：** 明确了 Q3 的核心演进方向。在模型引擎层面，将放弃 mbrige 支持，并推进低精度 MXFP8/NVFP4 训练及 mlite 的生产级集成。这指明了 verl 向着更高计算效率和更底层硬件优化的方向演进。
* **[bug] 跨节点 vLLM rollout (DP>1) 失败** ([#6856](https://github.com/verl-project/verl/issues/6856))
  **核心关注点：** 在 LUMI-G (AMD MI250X) 多节点集群上，结合 Megatron actor 与 vLLM rollout 时触发严重错误。这暴露出 verl 在混合后端 + 多节点拓扑下的跨节点通信依然存在痛点。
* **[bug] Pre-rollout 权重同步严重拖垮 H800 解码吞吐量** ([#7029](https://github.com/verl-project/verl/issues/7029))
  **核心关注点：** 核心性能瓶颈反馈。开发者发现 `update_weights` 阶段的权重同步在 H100/H800 上会造成严重的吞吐量下降（在 H20-3e 141GB 上影响较小）。这是当前 RLHF 流水线中 Actor-Rollout 权重交互的核心阻塞点。

### 4. 关键 PR 进展
**全异步 与 资源调度优化**
* **[fully_async] 动态资源调度支持** ([#6556](https://github.com/verl-project/verl/pull/6556))：引入混合推理资源的动态缩放。解决全异步 PPO 中，Trainer 节点等待 Rollout 数据时的 GPU 闲置问题，极大提升集群整体 GPU 利用率。
* **[fully_async] OOM 修复** ([#7041](https://github.com/verl-project/verl/pull/7041))：修复了全异步算法在权重同步分配 `recv_buf` 时因显存申请过大导致的 OOM 问题。
* **[fully_async] 释放状态锁** ([#7010](https://github.com/verl-project/verl/pull/7010))：优化长时 Rollout 阻塞参数更新的问题，修复了持锁等待导致的训练序列化性能退化。
* **[trainer, ckpt] 异步流式 Dataloader 与断点恢复** ([#7037](https://github.com/verl-project/verl/pull/7037))：突破 `train_batch_size` 限制，引入流式加载，并通过丢弃陈旧 prompt 组（drop strategy）提升 v1 异步训练器的效率。

**并行策略 与 模型引擎兼容**
* **[trainer] TorchtitanEngine 支持 CP** ([#5594](https://github.com/verl-project/verl/pull/5594))：为 Torchtitan 引擎打通 CP（上下文并行）与 EP、TP 的组合支持，测试基座为 Qwen3-30B-A3B。
* **[model, fsdp] 修复 Qwen3.5 在 Ulysses SP 下的线性注意力** ([#6660](https://github.com/verl-project/verl/pull/6660))：解决 packed 序列在 SP 切分时越过边界共享线性注意力 state 的底层 Bug。
* **[megatron] 支持 DeepSeek V4 Flash GRPO** ([#6473](https://github.com/verl-project/verl/pull/6473) - CLOSED)：引入基于 Megatron-Bridge 的 FP8/MXFP4 权重转换处理，验证了 DeepSeek V4 的 GRPO 训练支持。

**多模态 与 底层修复**
* **[rollout, vllm] 阻止采样视觉占位符** ([#7038](https://github.com/verl-project/verl/pull/7038) - CLOSED)：修复 vLLM rollout 时策略模型生成 `<|image_pad|>` 等视觉占位符引发的崩溃，确保多模态 token 对齐的正确性。
* **[fsdp] 同步合并后的 LoRA 权重** ([#7014](https://github.com/verl-project/verl/pull/7014))：修复了 `merge=True` 时，因上下文管理器提前退出导致的 FSDP LoRA 陈旧权重同步 Bug。
* **[rollout, tool] 引入实验性 Agent 框架** ([#6299](https://github.com/verl-project/verl/pull/6299) - CLOSED)：为多轮 Agent 交互式 rollout 新增抽象层与网关运行时。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在完成从“可用的大规模 RL 训练框架”到“极致优化的异构 RL 训练底座”的跨越。
1. **死磕全异步瓶颈：** 连续多个 PR（#6556, #7010, #7041, #7037）精准打击 RL 训练中最棘手的“GPU 闲置”和“权重同步阻塞”问题。全异步动态调度和流式数据加载的引入，预示着 verl 正在逼近 RLHF 算力的极限榨取。
2. **紧跟 SOTA 模型与并行策略：** 对 DeepSeek V4 的 FP4/FP8 预支持、Torchtitan CP 以及动态 Context Parallel 的集成，证明它始终是前沿开源大模型进行 RL 实验的“第一站”。
3. **打破硬件生态壁垒：** 通过 Megatron-Bridge 解耦，并大力推进 Ascend（昇腾）的 CI/CD 和文档重构，verl 正努力成为跨硬件（NVIDIA / AMD / Ascend）统一的标准 RL 范式引擎。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报 | 2026-07-15**

**1. 今日速览**
过去 24 小时内，Open Instruct 仓库整体活跃度趋于平缓。无新增代码提交（PR 更新为 0），无新版本发布。社区交流保持最低限度运转，新增 1 条专注于模型复现的技术讨论 Issue。

**2. 版本发布**
无。过去 24 小时内未发布新版本或 Tag。

**3. 重点 Issues**
- **[#1756] [OPEN] How to reproduce the OLMo 3 SFT stage and obtain OLMo-3-7B-Instruct?**
  - **链接**: [allenai/open-instruct Issue #1756](https://github.com/allenai/open-instruct/issues/1756)
  - **作者**: JaydencoolCC
  - **摘要**: 社区开发者正在尝试基于 Open Instruct 复现 **OLMo-3-7B-Instruct** 模型的监督微调（SFT）阶段。讨论的核心聚焦于复现的精确度：发帖者询问仓库内现成的 SFT 脚本是否足以端到端复现官方模型表现，并对环境变量配置（如 `BASE_CKPT="/weka/oe-training-default/ai2-llm/path/to-ba..."`）及具体的预训练权重加载路径提出了疑问。
  - **生态意义**: 该 Issue 反映了学界和开源社区对完全开源模型（OLMo 系列）严格对齐（SFT/RLHF）全流程的高度关注，是评估 Open Instruct 工具链在“可复现性”上表现的重要反馈节点。

**4. 关键 PR 进展**
无。过去 24 小时内无新增、合并或更新的 Pull Request。核心代码库处于稳定维护期。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
尽管今日数据动态较少，Open Instruct 依然是目前强化学习（RLHF/RLAIF）和对齐生态中不可替代的基础设施：
- **全栈式复现标杆**：作为 AI2 (Allen Institute for AI) 的核心开源项目，它提供了从 SFT、奖励建模（Reward Modeling）到 PPO/DPA 等 RL 算法的完整、未经阉割的训练代码，是学术界复现前沿模型（如 Tulu, OLMo）对齐流程的事实标准。
- **工程参考价值**：即使在代码迭代静默期，其仓库内处理大规模分布式训练（如大规模 batch size 处理、Weka/HFS 等分布式存储适配）的脚本和超参配置，依然是其他 RL 研究者和工程师搭建自有 RLHF Pipeline 的关键参考来源。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026-07-15 CleanRL 项目日报摘要：

### 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活跃度趋于平缓。无新增 Issue，无新版本发布。有 1 个关于底层性能优化的 PR 更新了动态。虽然该仓库进入功能稳定期，但维护者仍在持续打磨核心算法的底层执行效率。

### 2. 版本发布
无。近期无新版本发布。

### 3. 重点 Issues
**无。** 
过去 24 小时无新增或更新的 Issue。项目现有的已知问题追踪保持稳定。

### 4. 关键 PR 进展
**[PR #552] [OPEN] perf: avoid tensor memory copy in ppo_atari_envpool, pqn_atari_envpool, ppo_rnd_envpool, and ppo_procgen**
*   **作者:** srygaard
*   **更新时间:** 2026-07-14
*   **技术摘要:** 该 PR 旨在消除当前强化学习 Pipeline 中不必要的数据张量内存拷贝。作者指出，当前代码在使用 `envs.step()` 返回数据时，由于 `torch.tensor()` 构造函数的底层机制，每次都会强制触发内存复制。此修复直接作用于 PPO、PQN（Atari/Envpool）以及 Procgen 等重计算场景，有望显著降低内存占用并提升数据吞吐量。
*   **链接:** [vwxyzjn/cleanrl PR #552](https://github.com/vwxyzjn/cleanrl/pull/552)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但 CleanRL 在当前 RL 开源生态中依然具有不可替代的价值：
*   **极致的“单文件”设计哲学：** 在 RL 算法日趋复杂的今天，CleanRL 坚持将完整算法（如 PPO, SAC, DQN）及其所有训练细节集中在单个 Python 文件中。这种去耦合的设计为 RL 研究者省去了跨越复杂类继承树的心智负担，是实验复现和魔改算法的最佳起点。
*   **注重底层的工程实践：** 从今日更新的 [PR #552](https://github.com/vwxyzjn/cleanrl/pull/552) 可以看出，项目不仅关注算法的数学正确性，还在紧跟 PyTorch 底层 API 的演进（如 Tensor memory copy 的优化）。对于工程师而言，它是学习如何高效结合 `Envpool`、`Torch` 与 RL 算法的高质量代码库。
*   **高频硬件结合的基准库：** CleanRL 提供了极具公信力的 benchmark，并深度整合了 `gym`, `envpool`, `wandb` 等现代 RL 工具链。当开发者需要验证一个新 idea 在 Atari 或 MuJoCo 上的真实表现时，CleanRL 依然是目前最透明、最不易踩坑的测试床之一。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-07-15)**

以下是过去 24 小时内 [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 项目的动态摘要。

### 1. 今日速览
* **Issues 动态**：共 4 条更新，主要涉及图空间扩展提议与 MuJoCo 渲染 Bug。
* **PR 动态**：共 16 条更新，无新版本发布。社区贡献者（特别是 `teddytennant` 和 `Functionhx`）集中提交了大量底层空间、向量化环境与类型提示的修复，技术债务清理成效显著。

### 2. 版本发布
* **无新版本发布**。

### 3. 重点 Issues
今日更新的 Issues 均围绕底层 API 灵活性与特定环境渲染机制：

* **[增强提议] 支持异构图空间** (Issue [#1501](https://github.com/Farama-Foundation/Gymnasium/issues/1501))：提议在图空间中支持多种类型的节点和边，以满足异构图数据的维度差异需求，进一步完善图强化学习的生态支持。
* **[Bug修复] MuJoCo `default_camera_config` 失效** (Issue [#1141](https://github.com/Farama-Foundation/Gymnasium/issues/1141))：开发者发现调整 `default_camera_config` 的参数（如 `distance`, `elevation`）对渲染输出无影响。**该长期遗留 Bug 已在今日的 PR #1618 中被定位并修复**。
* **[增强提议] 扩展节点和边的 Space 类型** (Issue [#706](https://github.com/Farama-Foundation/Gymnasium/issues/706))：提议允许在 Graph space 的 `node_space` 和 `edge_space` 中使用 `Dict` 或 `Tuple`，以支持复杂特征存储。**相关实现已在今日 PR #1514 中合并**。
* **[Bug报告] MacOS 下 `render_mode="human"` 导致窗口卡死** (Issue [#543](https://github.com/Farama-Foundation/Gymnasium/issues/543))：LunarLander 环境在 Jupyter 中运行完毕后，Pygame 窗口光标转圈且无法关闭的交互级 Bug，目前仍处于 OPEN 状态。

### 4. 关键 PR 进展
今日的 PR 活动呈现高度技术化特征，核心贡献集中在对向量化机制的边界条件修复、强化类型提示以及依赖解耦。

**向量化与核心机制修复（作者：`teddytennant`）**
* **[已关闭] 修复 `RecordEpisodeStatistics` 统计错误** (PR [#1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624))：修复了当向量化环境使用 `SAME_STEP` 自动重置模式时，统计数据基于 `NEXT_STEP` 语义计算导致的长度和回报统计错误。
* **[已关闭] 修复类级别 `metadata` 突变 Bug** (PR [#1623](https://github.com/Farama-Foundation/Gymnasium/pull/1623))：修复了 `SyncVectorEnv` 和 `AsyncVectorEnv` 在设置 `autoreset_mode` 时，直接修改底层子环境类级别 `metadata` 字典的严重副作用。
* **[已关闭] 修复 `MultiDiscrete.contains` 整型溢出** (PR [#1622](https://github.com/Farama-Foundation/Gymnasium/pull/1622))：修复了在负数 `start` 或小数据类型（如 `int8`）下执行上限检查时，因减法溢出回绕为负数导致的边界判断失效。
* **[已关闭] 修复共享内存 dtype 不兼容** (PR [#1632](https://github.com/Farama-Foundation/Gymnasium/pull/1632))：解决了 `float16` 等 dtype 因缺少 array module typecode 导致 `create_shared_memory` 崩溃的问题。

**类型安全与环境依赖优化（作者：`Functionhx`）**
* **[已合并] 修复 MuJoCo 相机配置失效** (PR [#1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618))：查明了相机失效的根因为 MuJoCo 默认查找到了名为 `"track"` 的模型相机。已提供修复。
* **[开放] 核心模块严格类型提示** (PR [#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620))：为 `core.py`, `space.py`, `box.py` 添加返回类型标注并修复泛型参数，已通过 `mypy --strict`。
* **[开放] 将 Torch 从 `[all]` 依赖中移除** (PR [#1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617))：为避免 CPU-only 环境被强制拉取庞大的 `nvidia-cuda-*` 包，提议将 PyTorch 从默认全量安装中剥离（JAX 仍保留，因其 PyPI 默认为 CPU 版）。

**其他重要更新**
* **[已合并] Graph 空间支持任意节点/边** (PR [#1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514))：正式合并，支持节点和边使用 `Dict` 和 `Tuple` 空间。
* **[开放] 泛型向量化环境类型** (PR [#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577))：将 `VectorEnv` 及其子类转换为泛型类型，以解决向后兼容性问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的开发轨迹可以明确看出，Gymnasium 正在从“API 标准的确立”迈向“工程严谨性的深水区”：
1. **极致的并发与边界修复**：`teddytennant` 提交的一系列 PR 暴露了向量化环境在极端 dtype、特定 autoreset 模式下的隐蔽 Bug，这些往往是导致 RL 训练“静默失败”的元凶。项目维护者对这些底层逻辑的精修，保证了多环境并行训练的数据绝对一致性。
2. **拥抱现代 Python 特性**：引入 `mypy --strict` 类型提示、解决哈希随机化带来的不确定性（PR [#1626](https://github.com/Farama-Foundation/Gymnasium/pull/1626)），以及重构 `VectorEnv` 的泛型支持，表明 Gymnasium 正在为更复杂的静态类型检查器和大规摸代码库集成铺路。
3. **依赖环境的“断舍离”**：将 PyTorch 从 `[all]` 中移除的尝试，反映了项目对“轻量化部署”的重视。RL 开发者不再希望为了测试一个简单的动作空间而被强制下载数 GB 的 CUDA 依赖。
4. **图强化学习（GRL）的基建成熟**：今日同时推进了异构图和复杂节点/边特征的支持，表明 Gymnasium 正在积极适应从传统控制向复杂拓扑结构（如交通网络、社交图）演进的 RL 前沿需求。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**强化学习（RL）开源生态日报：PettingZoo 项目追踪**
**日期**: 2026-07-15

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活跃度集中在代码底层修复与测试体系完善，共处理了 **1 条 Issue** 和 **9 条 PR**（无新版本 Release 发布）。核心动作包括：推进废弃环境的移除、修复多智能体底层 API 的潜在 Bug、以及增强环境渲染与基准测试能力。

### 2. 版本发布
* **无新版本发布**。项目正处于下一个版本的代码裁剪（Cut）与异常清理阶段。

### 3. 重点 Issues
* **[CLOSED] 移除极少使用的环境 (#1383)**
  * **作者**: jkterry1
  * **摘要**: 核心维护者发起的仓库瘦身讨论。基于代码搜索使用量，建议在下一次版本发布前移除 `TicTacToe` 和 `Gin Rummy` 环境。经过讨论，最终确定保留 `TicTacToe`，移除 `Gin Rummy`。
  * **链接**: [Farama-Foundation/PettingZoo Issue #1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383)

### 4. 关键 PR 进展
今日的 PR 更新展现了社区对底层稳定性和视觉呈现的细致打磨：

* **核心机制修复**
  * **[OPEN] fix: give AgentSelector ownership of its agent order (#1400)**: 修复了 `AgentSelector.reinit()` 按引用存储列表导致的副作用 Bug，赋予其独立的智能体顺序所有权，并补充了回归测试。
    * **链接**: [PR #1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400)
  * **[OPEN] Fix cooperative_pong ball bounce physics (v7) (#1398)**: 重写合作乒乓球的碰撞物理引擎。原逻辑会将球瞬移至碰撞表面，丢弃了已穿透墙壁/挡板的移动距离，此 PR 修复了该物理计算丢失问题。
    * **链接**: [PR #1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398)
  * **[OPEN] Remove spurious api_test warnings (#1391)**: 修复了当观测空间为 `Dict`、`Tuple` 等非 `Box/Discrete` 类型时，`api_test.py` 抛出的误报警告。
    * **链接**: [PR #1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391)

* **环境清理与渲染优化**
  * **[CLOSED] feat!: remove gin_rummy environment (#1397)**: 响应 Issue #1383，正式从代码库、注册表、测试及文档中彻底移除 `Gin Rummy` 环境。
    * **链接**: [PR #1397](https://github.com/Farama-Foundation/PettingZoo/pull/1397)
  * **[OPEN] pursuit: render agents as squares instead of circles (#1399)**: 恢复 Pursuit 环境早期的视觉风格，将智能体从圆形渲染为小于网格的实心方形。
    * **链接**: [PR #1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399)

* **工具链与基准测试**
  * **[OPEN] Add `RecordVideo` wrappers (#1306)**: 直接从 Gymnasium 移植 `RecordVideo` 包装器，填补了 AEC 环境中原生缺乏方便的视频录制工具的空白。
    * **链接**: [PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
  * **[OPEN] Add predictive/evolved KAZ policy benchmark (#1395, #1384)**: 为 Knights-Archers-Zombies (KAZ) 环境引入了确定性的预测向量策略基准，包含抛物线拦截预测与可复现的评估脚本，提升了基准测试的丰富度。
    * **链接**: [PR #1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395) | [PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **API 标准化的坚守者**：PettingZoo 始终保持与 Gymnasium 的深度对齐（如本次移植 `RecordVideo` 和修复 `api_test` 警告），它是目前多智能体强化学习（MARL）中最稳定的底层接口标准之一。
2. **积极的健康度维护**：通过核心团队主动剔除低使用率的环境（如 Gin Rummy）、修复底层的引用 Bug（AgentSelector）和物理引擎漏洞，项目在控制技术债方面表现优异，没有陷入“只加不减”的臃肿陷阱。
3. **降低 MARL 评估门槛**：近期社区持续投入精力完善环境的视觉渲染（Pursuit 视觉重构）与启发式策略基准（KAZ 预测策略）。这为 MARL 算法（如 MAPPO, QMIX）的可视化与 Baseline 对比提供了开箱即用的基础设施，大幅降低了研究者的复现成本。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>