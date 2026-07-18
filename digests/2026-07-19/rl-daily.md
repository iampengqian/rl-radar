# RL 开源生态日报 2026-07-19

> 生成时间: 2026-07-18 22:13 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已彻底完成从“传统单 agent 游戏/控制”向“大模型对齐（RLHF/GRPO）与复杂系统基建”的跨越。以 **verl、TRL、slime、AReaL** 为代表的 LLM RL 训练框架占据了社区热度与技术探索的绝对中心，正经历从算法原型验证向百亿/千亿参数工业级大规模分布式训练的痛苦蜕变。同时，以 **Gymnasium、rl_games、SB3** 为代表的传统经典 RL 基座，正有条不紊地进行底层现代化重构（如强类型引入、物理引擎解耦与底层 Bug 修复），维持着高价值的基础设施支撑。此外，以 **Open Instruct** 为代表的评估工具链，正暴露出_reward hacking_对训练流程的致命影响，补齐着 RL 生态中“奖励可信度”的最后一块拼图。

## 各项目活跃度对比
当前生态活跃度呈现极强的“二八定律”，LLM 专属训练框架占据了绝大多数的 Issue 讨论与 PR 构建频次。传统框架虽然 Issue 较少，但在核心 PR 的底层重构上依然保持着稳定的输出。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 68 | 1 | 0 | 大规模分布式训练显存/通信瓶颈与跨后端适配 |
| **TRL** | 13 | 13 | 0 | 拥抱 FSDP2 与异步底层通信，攻坚算法数学正确性 |
| **Open Instruct** | 0 | 18 | 0 | 密集重构规则验证器，严防底层逻辑漏洞导致 Reward Hacking |
| **AReaL** | 7 | 4 | 0 | 在线强化学习架构稳定性排雷与损失可配置化 |
| **Gymnasium** | 0 | 11 | 0 | 底层代码现代化（移除重依赖、强类型提示、引擎解耦） |
| **slime** | 0 | 4 | 0 | 攻克非思考模型奖励归零与细粒度多轮 Token 对齐 |
| **Stable Baselines3** | 1 | 3 | 0 | 严抓实验严谨性（种子独立性）与模型加载安全反序列化 |
| **rl_games** | 0 | 1 | 0 | 修复向量化环境跨 Episode 自动重置引入的脏数据 |
| **PettingZoo** | 0 | 1 | 0 | 完善多智能体复合观测空间的测试体验 |
| **CleanRL/OpenRLHF 等 5 项目**| 0 | 0 | 0 | 暂无动态 |

## 共同关注的研究与工程方向
**研究侧信号：**
1. **算法数学严谨性与掩码机制：** 损失函数计算的边界异常成为高频问题。TRL 暴露出 GRPO 截断损失分母计算错误，AReaL 则推进了 Token/Seq/Prompt 级别的损失聚合可配置化，这表明业界对 RLHF 算法在 Token Masking 与奖励分配层面的理解正在变得极度精细。
2. **Reward Hacking 防御与非思考模型对齐：** 随着模型范式转变，slime 修复了非思考模型缺失 `</think>` 标签导致的奖励清零问题，而 Open Instruct 密集提交 18 个 PR 以肃清指令验证器的逻辑漏洞。确保奖励信号的纯粹与正确，是当前防止策略走捷径、模型崩溃的核心研究焦点。

**工程/基础设施侧信号：**
1. **分布式训练与异构通信压榨：** 大规模 RL 训练面临极重的通信与显存开销。verl 暴露了大量多机多卡 NCCL/Ray 死锁及 OOM 问题；为降低算力空耗，TRL 彻底重构了 vLLM 权重同步批处理，AReaL 也正死磕 `AsyncClient` 与陈旧轨迹管理。通过异步化、批量化提升 GPU 利用率是当前的绝对工程刚需。
2. **向量化环境边界与数据流净化：** 在高吞吐并行采样下，自动重置环境带来的脏数据影响评估的严谨性。rl_games 紧急修复了混入 PPO Rollouts 的自动重置“垃圾数据行”，SB3 发现了相邻基线种子的伪随机数流重叠问题，生态正在对底层环境交互流进行严苛的纠错。

## 差异化定位分析
- **verl vs TRL（重工业基建 vs 敏捷型前沿算法库）：** verl 扮演着千亿参数分布式 RLHF 的“工程级试金石”，不绑定单一推理后端，重点解决跨节点通信与多后端适配；而 TRL 则更敏捷，通过全面拥抱 PyTorch FSDP2、快速整合最新变体算法（DAPO/CISPO/GOLD），侧重大幅降低单机/中等规模集群的实验成本与等待时间。
- **slime vs AReaL（复杂场景纵深 vs 全链路状态机）：** slime 的定位极其锋利，专攻复杂 Agentic RL（如 tau-bench）与动态采样补充的底层痛点，解决特定架构（非 CoT 模型）的兼容性；AReaL 则重点关注分布式在线 RL 的整体调度闭环，如通过实现轨迹 Dump/Replay 离线工具，将 Rollout 生成与梯度更新彻底解耦。
- **Open Instruct vs 经典 RL 框架（评估基座 vs 环境/算法底座）：** Open Instruct 作为评估基座，充当着 RLHF 训练管线的“质量守门员”；而 Gymnasium、rl_games 和 SB3 则继续深耕传统控制/游戏领域，聚焦于底层物理引擎迁移、依赖轻量化与代码类型现代化，为具身智能等方向提供稳固的基石。

## 社区热度与成熟度
- **高频痛点爆发期：** 以 verl 为代表的大规模 LLM 训练项目正处于社区热度极高、但底层稳定性挑战严峻的阶段。单日 68 条 Issue 集中于 OOM 和分布式通信死锁，说明百亿/千亿参数模型的分布式 RLHF 仍属于“前沿工程探险”，技术门槛极高。
- **高度稳定与自律：** Open Instruct 和 SB3 展现了极高的工程成熟度。Open Instruct 在无 Issue 的情况下持续密集提交底层验证逻辑修复，SB3 则对伪随机种子独立性及 LLM 自动生成 PR 保持严苛的审查标准。这表明成熟的 RL 库正通过严抓代码细节与实验严谨性，积极构建健康的治理边界。

## 值得关注的趋势信号
1. **Rollout 引擎异步化与解耦化：** TRL 将 vLLM 权重同步耗时从 0.6 秒压缩至 0.15 秒，AReaL 支持离线轨迹回放，这预示着大模型 RL 训练正从“粗放的串行计算”向“极低延迟、异步 RPC、完全解耦”的在线/离线混合架构演进，以最大化压榨昂贵 GPU 的算力。
2. **底层框架的现代化瘦身：** Gymnasium 将庞大的 PyTorch 从核心依赖剥离转推 JAX，并尝试用 Pymunk 替换老旧的 Box2D。传统 RL 算法底座正致力于降低开发者的环境搭建门槛，加速纯 CPU 环境下的规则驱动与算法验证。
3. **LLM 驱动的工程边界拓展：** LLM 不仅是 RL 的训练目标，也开始介入 RL 框架的工程研发。SB3 维护者已明确使用 qwen 3.6 辅助生成底层测试代码，但同时果断拒绝未按人类规范提交的自动化 PR。这为未来 AI 辅助开源基建与代码安全审查提供了前瞻性的治理范式。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📦 RL 生态前沿 | slime 项目日报 (2026-07-19)

## 1. 今日速览
过去 24 小时内，[THUDM/slime](https://github.com/THUDM/slime) 仓库无新增 Issue、无新版本发布，但代码库迎来了 **4 项关键的 PR 更新**（3 项开启，1 项关闭）。这些更新主要针对强化学习训练中的**奖励模型计算 (RM)**、**动态采样调度**以及**复杂模板的 Token 处理**进行了深度修复与优化，直接触及了 RLHF 训练中最易踩坑的底层机制。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **无新增或更新 Issue**。

## 4. 关键 PR 进展
今日的 PR 活跃度完全集中在核心训练链路的 Bug 修复与机制优化上：

*   **修复非思考模型奖励归零导致训练崩溃的问题** (`#2219` [OPEN])
    *   **作者**: acmore
    *   **链接**: [THUDm/slime PR #2219](https://github.com/THUDM/slime/pull/2219)
    *   **技术摘要**: 深度修复了 DeepScaler 规则奖励函数的逻辑。原逻辑在响应缺失 `</think>` 标签时返回 0。这会导致非思考模型或模板被剥离的模型在 GRPO 训练中，所有样本得分均为 0。此情况会引发 zero-std（零标准差）问题，进而导致优势函数 消失，破坏策略更新。该 PR 防止了静默的奖励清零。

*   **优化动态采样补充机制的粒度控制** (`#2218` [OPEN], `#2217` [CLOSED])
    *   **作者**: EazyReal
    *   **链接**: [THUDM/slime PR #2218](https://github.com/THUDM/slime/pull/2218) | [关联 PR #2217](https://github.com/THUDM/slime/pull/2217)
    *   **技术摘要**: 解除了动态采样中 `over_sampling_batch_size >= rollout_batch_size` 的硬性限制。之前只要有一个 prompt group 被拒绝，就会触发整批替换，导致计算资源浪费。新机制支持基于缺失数量进行细粒度的精准补充，并优化了非部分 Rollout 任务的停止逻辑。

*   **修正 Tau-bench 推理模板的 Token 增量计算** (`#2213` [OPEN])
    *   **作者**: DongzhuoranZhou
    *   **链接**: [THUDM/slime PR #2213](https://github.com/THUDM/slime/pull/2213)
    *   **技术摘要**: 针对 Qwen3 等 Agent 框架重写历史推理逻辑的情况，完整保留每一轮对话的真实 Token 增量。通过将 generation-prefix 的 mask 设为 0，generated continuation 的 mask 设为 1，并处理合法的 BPE 合并边缘情况，确保了多轮对话 Agent 强化学习训练时的 Token 级别准确性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
slime 团队当前提交的代码展现了对 RLHF/GRPO 底层工程痛点的深刻理解，直击当前大模型 RL 训练的“暗礁”：
1.  **直击非思考模型的 RL 训练痛点**：随着业界从纯 CoT（思维链）模型向直接输出答案的模型扩展，PR #2219 精准暴露并修复了现有开源 RL 框架对“无 `<think>` 标签模型”的兼容性缺陷，这是目前社区极度缺乏的工程经验。
2.  **攻克 Rollout 动态采样效率难题**：在处理复杂任务（如部分 prompt 被拒）时，粗糙的动态采样会引发极高的 GPU 算力空耗。slime 正在推进的细粒度 Refill 机制（PR #2218），证明其 Rollout 状态机正在向工业级的高资源利用率演进。
3.  **精细化的多轮 Agent Token Masking**：PR #2213 处理了模型自行重写上下文（Reasoning rewrite）时的 Token 对齐与 BPE 合并问题。这表明 slime 不仅关注单轮 RL，还在多轮 Agentic RL（如基于 tau-bench 的训练）的 Token 掩码边界处理上做到了极度的精细化。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

一份为您定制的 AReaL 强化学习开源生态日报摘要。

### AReaL 强化学习日报 (2026-07-19)

#### 1. 今日速览
过去 24 小时内，AReaL 仓库共处理/更新 **7 条 Issues** 和 **4 条 PRs**，无新版本发布。从活跃数据来看，核心维护者与贡献者今天集中清理了一批陈旧（stale）的早期功能提案与 Bug，同时针对 V2 在线强化学习架构的稳定性进行了深度排查。损失函数聚合机制的重构取得了实质性进展。

#### 2. 版本发布
- **无新版本发布**。

#### 3. 重点 Issues
今日 Issue 动态呈现两个核心焦点：**PPO 损失计算优化** 与 **V2 在线 RL 架构缺陷排查**。

- **[已关闭] PPO 损失聚合重构与规范**
  - [#1423](https://github.com/areal-project/AReaL/issues/1423): 提议在 PPO 中增加可配置的损失聚合级别（支持 token / seq / prompt mean）。该提议旨在替代原先全局硬编码的 `token_mean` 模式。
  - [#1422](https://github.com/areal-project/AReaL/issues/1422): 建议从 `gconfig.n_samples` 中自动推导 `group_size`，消除重复配置项导致的静默失配隐患。

- **[已关闭] Rollout 同步逻辑修复**
  - [#1420](https://github.com/areal-project/AReaL/issues/1420): 修复了 HF chat template 渲染 `tool_call` 参数时，因 JSON string 与 mapping 格式冲突导致的 rollout 与 train token 不同步的底层逻辑 Bug。

- **[开放] V2 在线 RL 模式稳定性危机**
  贡献者 `jszzr` 集中暴露了 V2 在线模式的几个严重系统性风险：
  - [#1484](https://github.com/areal-project/AReaL/issues/1484): **事件循环冲突**。V2 控制器在错误的异步事件循环中关闭 `AsyncClient` 传输层，导致训练完成后触发异常退出。
  - [#1481](https://github.com/areal-project/AReaL/issues/1481): **陈旧轨迹训练**。V2 在线会话绕过了 `StalenessManager` 的容量检查，导致外部请求直接塞入控制器本地 `deque`，存在使用过期轨迹进行梯度更新的风险。
  - [#1475](https://github.com/areal-project/AReaL/issues/1475): 直接导出（Direct-export）工作流错误触发了在线回调机制。
  - [#1479](https://github.com/areal-project/AReaL/issues/1479): 提议为在线 RL 模式引入版本校验的留出法评估。

#### 4. 关键 PR 进展
- **Loss Aggregation 架构演进最终落地**
  - [#1546 (OPEN)](https://github.com/areal-project/AReaL/pull/1546): **今日最新提交**。在不更改底层训练引擎 API 的前提下，实现了平均单元（token / seq / prompt）的可配置化。
  - [#1417 (CLOSED)](https://github.com/areal-project/AReaL/pull/1417) & [#1443 (CLOSED)](https://github.com/areal-project/AReaL/pull/1443): 关闭了之前两版历史方案。说明社区在评估了爆炸半径与代码实现的优雅度后，采用了 #1546 作为最终解。

- **离线轨迹回放调试工具**
  - [#1407 (OPEN)](https://github.com/areal-project/AReaL/pull/1407): 实现 Trajectory dump/replay 功能。允许将 rollout 批次序列化到磁盘并在无推理引擎的情况下重放。该 PR 将 Rollout 生成与梯度更新解耦，对离线复现和调试 RL 训练循环具有极高的工程价值。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直面 RL 底层算力与通信工程难题**：今日暴露的 Issue 直击大规模分布式在线 RL 的痛点（如异步事件循环生命周期管理、Trajectory 陈旧度控制）。AReaL 正在工程层面死磕 `AsyncClient` 和 `StalenessManager`，这对于需要高频交互 Agent 的 RL 生态具有极高的参考价值。
2. **算法级干预的深度扩展**：项目不满足于仅做 PPO 的“跑包工具”。将 `actor.loss_aggregation` 做成高度可配置项，说明其对序列级别、Token 级别的 Reward 分配机制有深刻的算法理解，紧跟前沿的 ScaleRL 等技术演进。
3. **原生支持 Debug 闭环**：PR #1407 证明项目极其重视开发者的 Debug 体验。通过将 Rollout 环境剥离，极大降低了排查训练器内部 Bug 的算力成本，是打造健壮 RL Infra 的正确路径。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

**TRL (Transformers Reinforcement Learning) RL 日报摘要**
**日期**: 2026-07-19
**数据源**: github.com/huggingface/trl

---

### 1. 今日速览
- **Issues 动态**: 过去 24 小时更新 13 条，重点聚焦在 DPO 变种损失函数的边界异常、GRPO 训练策略及量化/多卡兼容性问题上。
- **PR 进展**: 过去 24 小时更新 13 条，社区在底层训练架构上取得重要突破，正式移除 FSDP1 并全面转向 FSDP2，同时大幅优化了 GRPO+VLLM 架构下的权重同步效率。
- **版本发布**: 过去 24 小时无新版本发布。

---

### 2. 版本发布
无。当前主分支开发活跃，预计多项核心 PR（如 FSDP2 彻底重构、GOLDTrainer 增强）合并后将迎来重要版本更新。

---

### 3. 重点 Issues
今日更新的 Issues 揭示了当前 TRL 在高级应用场景下的痛点，主要集中在**损失函数严谨性**与**多模态/多卡训练稳定性**：

- **[Bug] DPO `apo_down` 损失函数实现缺陷** ([#6441](https://github.com/huggingface/trl/issues/6441))
  - **摘要**: 开发者指出 DPOTrainer 在实现 `apo_down` 损失时，对其两项计算项应用 `f_divergence_type` 的逻辑不一致。这是一个影响偏好对齐训练数学正确性的核心缺陷。
- **[Bug] GRPO 截断补全的损失分母计算错误** ([#6369](https://github.com/huggingface/trl/issues/6369))
  - **摘要**: 在 DAPO/CISPO/VESPO 等新型 RLHF 算法中，`mask_truncated_completions=True` 旨在将截断的生成排除在损失计算外，但当前实现中分子应用了掩码，而分母却忽略了掩码逻辑，导致梯度计算出现偏差。
- **[Bug] GRPO + DeepSpeed ZeRO-3 训练挂起** ([#3858](https://github.com/huggingface/trl/issues/3858))
  - **摘要**: 在使用 GRPO 配合 DS_Z3 且设置 `ds3_gather_for_generation=False` 时，训练会在初始阶段（Step 0）死锁挂起。这是大规模分布式 RL 训练中典型的通信与计算调度冲突问题。
- **[Bug] SFT 训练器缺乏 INT4 量化警告** ([#4018](https://github.com/huggingface/trl/issues/4018))
  - **摘要**: 结合 `device_map="auto"` 使用 4-bit 量化模型会触发 meta-tensor 错误，系统缺乏前置校验，对尝试进行 QLoRA 微调的用户不友好。
- **[Feature] GRPO 异步生成与训练** ([#4766](https://github.com/huggingface/trl/issues/4766))
  - **摘要**: 建议在 GRPO 反向传播期间，并行向 vLLM Server 发送下一个 batch 的推理请求，以减少 GPU 的空闲时间。这是当前 LLM RL 训练极度耗时的重要优化方向。

---

### 4. 关键 PR 进展
今日的 PR 展现了 TRL 社区对训练效率和系统稳定性的极致追求：

- **[系统级重构] 彻底移除 FSDP1，全面拥抱 FSDP2** ([#4260](https://github.com/huggingface/trl/pull/4260))
  - **进展**: 已合并。随着 PyTorch FSDP2 的稳定，TRL 移除了所有针对 FSDP1 的冗余代码（如 RLOO、GRPO 中的特定参数同步逻辑），大幅降低了分布式训练部分的维护负担。
- **[性能优化] VLLM 权重同步批处理与异步化** ([#5249](https://github.com/huggingface/trl/pull/5249))
  - **进展**: 已合并。改变了在线 RL 训练中向 vLLM 同步权重的方式（从数百次 HTTP 请求改为批量请求，并异步化 RPC 调用）。在 Qwen2 0.5B 上将权重同步耗时从 **0.6 秒压缩至 0.15 秒**，极大提升了 generation 阶段的效率。
- **[错误防御] QLoRA + vLLM Server 模式前置拦截** ([#6440](https://github.com/huggingface/trl/pull/6440))
  - **进展**: 开放中。针对“在 server 模式下使用 QLoRA 会导致 vLLM 崩溃（因合并适配器会强制反量化 4-bit 模型）”的问题，添加了清晰的报错逻辑，避免用户陷入晦涩的底层报错。
- **[功能扩展] GOLDTrainer 支持多轮工具调用** ([#6328](https://github.com/huggingface/trl/pull/6328))
  - **进展**: 开放中。为 `GOLDTrainer` 增加了多轮 tool-calling 支持，专门针对同家族模型（共享 tokenizer）的蒸馏场景，紧跟前沿模型训练趋势。
- **[评估修复] DPO/KTO 评估阶段的对数概率预计算保护** ([#6443](https://github.com/huggingface/trl/pull/6443))
  - **进展**: 开放中。修复了在无参考模型（reference model 已释放）的设置下，调用 `evaluate()` 时静默计算错误参考对数概率的致命问题，改为直接抛出明确的异常。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿 RL 算法迭代**: TRL 是目前唯一快速且系统化整合 DPO 变体（如 apo_down）、GRPO 变体（如 DAPO/CISPO）及 GOLD 蒸馏算法的开源库。即使前沿算法存在边界 Bug（如今日暴露的分母掩码问题），社区的修复响应速度极快。
2. **攻克 LLM RL 的核心算力瓶颈**: Issue #4766 和 PR #5249 表明，TRL 正在死磕“RLHF 训练耗时”这一核心痛点。通过深度改造 vLLM 交互逻辑（异步化、批量化）、全面转向内存管理更优的 FSDP2，TRL 正在大幅降低大规模 RLHF 实验的等待时间和显存成本。
3. **对齐现代 Agent 训练需求**: 从支持多轮工具调用（PR #6328, #6286）到多模态张量形状修复，TRL 正在将 RL 的重心从单一的“文本对齐”转移到“复杂环境交互与多模态推理”上，这是构建下一代 AGI 系统的必经之路。

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

**verl RL 生态日报 | 2026-07-19**

以下是过去 24 小时内 `verl-project/verl` 仓库的活动摘要。

### 1. 今日速览
- **Issues 动态**：过去 24 小时共有 68 条 Issue 发生状态更新或新增评论，社区讨论热度集中于**显存泄漏/OOM 问题**、**多机多卡分布式通信阻塞**以及**底层推理后端的适配表现**。
- **PR 动态**：仅有 1 条 PR 更新，主要聚焦于 Megatron 后端对 Qwen 系列新特性的适配。
- **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
**无**。项目当前无新增 Release 或 Tag。

### 3. 重点 Issues
今日社区活跃的讨论主要集中在系统底层的稳定性与跨-backend 兼容性上：

- **显存持续增长与 OOM 瓶颈**：
  - [#3293](https://github.com/volcengine/verl/issues/3293)：训练过程中 GPU 显存持续增长并最终导致 OOM，该老问题今日再次引发集中讨论。
  - [#3364](https://github.com/volcengine/verl/issues/3364) 与 [#3366](https://github.com/volcengine/verl/issues/3366)：分别在 GRPO 训练 Qwen3-30B-A3B 与 Qwen2.5-coder-7B (LoRA) 时遭遇严重的 OOM 问题。
  - [#3339](https://github.com/volcengine/verl/issues/3339)：用户反馈更新 verl 版本后，相同配置下遭遇内存溢出（OOM）。
  
- **多卡/多机初始化与通信死锁**：
  - [#3350](https://github.com/volcengine/verl/issues/3350) 与 [#3324](https://github.com/volcengine/verl/issues/3324)：单机多卡训练在初始化阶段卡死或遭遇 NCCL 通信超时。
  - [#3358](https://github.com/volcengine/verl/issues/3358)：多节点（2x16 GPUs）Ray 初始化报错。
  - [#3249](https://github.com/volcengine/verl/issues/3249)：多机多卡运行时出现 `flash_attn shape mismatch`。

- **推理后端与 性能损耗**：
  - [#3173](https://github.com/volcengine/verl/issues/3173) 与 [#3160](https://github.com/volcengine/verl/issues/3160)：反馈使用 sglang 作为 rollout 引擎时，其参数同步速度比 vLLM 慢 2 倍，整体出现降速。
  - [#3271](https://github.com/volcengine/verl/issues/3271)：verl 0.5.0 与 vLLM v1 API 在使用 LoRA 时不兼容。
  - [#3292](https://github.com/volcengine/verl/issues/3292)：Megatron 后端结合分布式 checkpoint 时，权重保存失败。

- **架构扩展提案**：
  - [#3361](https://github.com/volcengine/verl/issues/3361)：社区成员提交 RFC，提议在 verl 中新增 DeepSpeed 的 `engine_impl`，以兼容当前的重构。

### 4. 关键 PR 进展
- **[#5599] [megatron] fix: Qwen3.5 LoRA & MTP support (with Megatron-Bridge)**
  - **作者**: HollowMan6
  - **链接**: [verl-project/verl PR #5599](https://github.com/volcengine/verl/pull/5599)
  - **进展摘要**: 该 PR 致力于通过 `Megatron-Bridge` 为 verl 的 Megatron 后端添加对 Qwen3.5 架构的 LoRA 微调与 MTP (Multi-Token Prediction) 支持。此更新强依赖于 vLLM 侧的多个底层改动以及 Megatron-Bridge 的更新。该 PR 今日有新的审查/代码更新动态。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **大模型 RLHF/GRPO 的工程级试金石**：今日大量高价值的 Issue（如 Megatron 的 checkpoint 保存、多机多卡的 NCCL/Ray 死锁）揭示了百亿/千亿参数模型（如 Qwen3-235B）在进行强化学习训练时真实的工程痛点。verl 几乎是当前开源社区中暴露并解决这些分布式 RL 系统级 Bug 最密集的项目。
2. **ROLLOUT 引擎的无缝集成与博弈场**：社区持续在 vLLM 与 sglang 之间做性能与稳定性的横向对比（如 #3173 和 #3160 中反馈的参数同步与降速问题）。verl 没有绑定单一推理后端，而是将其作为可插拔模块，这使得它成为了大模型推理引擎在 RL 场景下压力测试的核心载体。
3. **极强的架构可扩展性**：从近期提交的引入 DeepSpeed `engine_impl` 的 RFC (#3361)，到对 Megatron-Bridge 复杂特性的持续适配 (#5599)，verl 正在通过解耦 Actor/Rolout 引擎，构建一个能够包容当前所有主流分布式训练/推理框架的统一 RL 范式。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目追踪**
**日期**: 2026-07-19
**项目**: [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue 和 Release，但产生了高达 **18 个代码更新（PR）**。
从更新频次和内容来看，开发者（主要是 [Chessing234](https://github.com/Chessing234)）正在进行一次**针对指令遵循评估器的密集型对齐与修复工作**。所有 18 个 PR 均致力于将 Open Instruct 内部的验证逻辑与核心基准测试 **IFEvalG** 的行为保持严格一致，这对于确保强化学习（RL）奖励信号的准确性至关重要。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无活跃 Issue**。当前项目处于高度稳定的维护与底层测试优化阶段。

### 4. 关键 PR 进展
今日的所有 PR 均围绕 **修复 IFEvalG 指令验证器** 展开，旨在消除边界条件错误，提升模型在 RL 训练时的反馈质量。以下为核心技术更新：

**A. 边界与空值异常处理**
*   [PR #1780](https://github.com/allenai/open-instruct/pull/1780): 忽略尾部空字符对句子计数的干扰。
*   [PR #1772](https://github.com/allenai/open-instruct/pull/1772): 修复 `validate_two_responses`，要求双回复场景下两侧内容非空。
*   [PR #1771](https://github.com/allenai/open-instruct/pull/1771): 修复 `validate_quotation`，拒绝将单独的引号 `"` 判定为合法引用。
*   [PR #1769](https://github.com/allenai/open-instruct/pull/1769): 修复 `validate_title`，拒绝 `<<>>` 形式的空标题。
*   [PR #1766](https://github.com/allenai/open-instruct/pull/1766): 修复高亮验证逻辑，不再将 `****` 误判为两个合法高亮段。

**B. 文本匹配与大小写敏感度修正**
*   [PR #1778](https://github.com/allenai/open-instruct/pull/1778) & [PR #1770](https://github.com/allenai/open-instruct/pull/1770): 对段落与结尾验证逻辑进行大小写折叠（lowercase compare）和首尾空格清理，严格对齐 IFEvalG。
*   [PR #1773](https://github.com/allenai/open-instruct/pull/1773): 使 `verify_letter_frequency` 变为大小写不敏感。
*   [PR #1775](https://github.com/allenai/open-instruct/pull/1775): 采用 Python 原生的 `isupper` / `islower` 替代直接比较，避免空字符串或纯数字误通过大小写检测。

**C. 正则匹配与语法解析强化**
*   [PR #1763](https://github.com/allenai/open-instruct/pull/1763): 在违禁词验证中使用 `\b` 匹配单词边界，防止子串误杀（如词汇包含 "badge" 时不再触发对 "bad" 的拦截）。
*   [PR #1779](https://github.com/allenai/open-instruct/pull/1779): 改进词数统计，使用 `\w+` 匹配带标点的词汇。
*   [PR #1764](https://github.com/allenai/open-instruct/pull/1764): 优化数学公式提取器 `last_boxed_only_string`，准确提取最后出现的 `\boxed{}` 答案。
*   [PR #1765](https://github.com/allenai/open-instruct/pull/1765): 修复 Markdown 加粗文本 `**bold**` 被误识别为无序列表 `*` 的问题。
*   [PR #1768](https://github.com/allenai/open-instruct/pull/1768): `validate_json_format` 现支持解析带有 ```json ``` 代码块包裹的 JSON 数据。
*   [PR #1767](https://github.com/allenai/open-instruct/pull/1767): 增加对带编号（`Section N`）章节标题的统计支持。

**D. 异常捕获**
*   [PR #1777](https://github.com/allenai/open-instruct/pull/1777): 在 `validate_response_language` 中捕获 `LangDetectException`，对空文本或无法识别的文本默认放行。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
在当前的 RLHF / RLAIF 生态中，**“奖励模型的质量决定了模型能力的天花板”**。
Open Instruct 今日这 18 个密集 PR 揭示了一个关键的工程痛点：**指令遵循评估器的严格性与鲁棒性**。
*   **防止 Reward Hacking**：如果验证器存在漏洞（如 [PR #1771](https://github.com/allenai/open-instruct/pull/1771) 允许单引号通过，或 [PR #1775](https://github.com/allenai/open-instruct/pull/1775) 允许纯数字通过大写检测），RL 策略模型在训练时会迅速走捷径来骗取高额奖励，导致模型崩溃。Open Instruct 正在进行的这些精细化修复，是保障基于规则驱动的 RL 训练管线能够产出有效结果的核心前提。
*   **对齐标准化基准**：项目正致力于与 IFEvalG 保持 100% 的逻辑一致性。任何在 LLM 训练框架中的微小判定分歧，都会导致最终模型在公开榜单上的成绩波动。Open Instruct 通过肃清底层验证逻辑，为整个开源社区提供了一个高可信度、可复现的底座。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 开源生态日报：rl_games (2026-07-19)**

**1. 今日速览**
*   过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库动态相对平静：无新增 Issue，无新版本发布。
*   核心代码库有 1 条关键 PR 更新，重点聚焦于提升 PPO 算法在自动重置环境下的数据正确性。

**2. 版本发布**
*   **无**。近期未发布新的 Release。

**3. 重点 Issues**
*   **无**。过去 24 小时无新增 Issue 或旧 Issue 更新。

**4. 关键 PR 进展**
*   **PR #362 [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization** ([查看链接](https://github.com/Denys88/rl_games/pull/362))
    *   **作者**: ViktorM (创建于 2026-07-12，昨日更新)
    *   **技术摘要**: 这是一项针对自动重置机制正确性的重要修复。在 `next_step-autoreset` 环境（如 EnvPool、Gymnasium 1.x 原生向量化环境）中，环境重置那一步产生的数据（环境忽略动作、填充奖励、以及包含上一 episode 终止状态 obs 的行）此前被当作真实训练数据混入了 PPO 的 rollouts 中。该 PR 提出在 PPO 侧对这些“垃圾数据行”进行 Mask（掩码）处理（SAC 侧的相关修复已在提交 b1ed755 中完成）。此外，该 PR 还引入了标量化参数配置。
    *   **分析师洞察**: 这是一个硬核的底层 Bugfix。在 RL 训练中，向量化环境的隐藏状态边界处理（尤其是跨 Episode 的自动重置）极易引入脏数据，导致价值函数和优势函数估计产生偏差。该 PR 显著提升了框架与现代高速向量化环境集成时的训练严谨性。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **极致的吞吐量与工程优化**: [rl_games](https://github.com/Denys88/rl_games) 始终是 RL 社区中高性能 RL 基础设施的标杆。它持续针对 GPU-first 管线进行优化，是 Isaac Gym, Isaac Lab 等大规模具身智能仿真环境默认/首选的算法基线之一。
*   **紧跟现代环境标准的底层修复**: 从 PR #362 可以看出，项目维护者高度重视框架与 Gymnasium 1.x 和 EnvPool 等现代向量化环境交互时的边界正确性。这种对数据流细节的严苛打磨，保证了其在复杂控制任务和大规模并行训练中的可靠性，对于追求 SOTA 性能的 RL 研究者和工程师而言，依然是不可或缺的武器库。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

这里是为您生成的 Gymnasium 强化学习开源生态日报摘要（2026-07-19）：

# Gymnasium RL 生态日报 (2026-07-19)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动高度聚焦于底层代码优化与工程缺陷修复。今日无新增 Issue 或 Release，但共有 **11 个 PR** 发生了状态更新。这些更新主要集中在强类型提示引入、底层物理引擎迁移测试、向量化环境稳定性修复以及依赖项瘦身。

## 2. 版本发布
**无新版本发布。**

## 3. 重点 Issues
**过去 24 小时无新增或更新的 Issue。** 
（当前社区的注意力明显集中在合并现有代码分支和解决底层架构重构上。）

## 4. 关键 PR 进展
今日更新的 PR 覆盖了 API 规范化、环境修复与开发体验提升，以下是核心技术提取：

*   **[Bug修复] 异步向量化环境重置报错** 
    PR [#1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643) 作者: Fstarnb | 创建于: 2026-07-18
    **摘要:** 修复了 `AsyncVectorEnv` 在 `AutoresetMode.NEXT_STEP` 模式下，自动重置 worker 路径返回原生 Python 类型（`0`/`False`）导致与 NumPy 数组混合堆叠时，触发 `inhomogeneous sequence` 错误的严重缺陷。
*   **[Bug修复] MuJoCo 离屏渲染缓冲区被意外覆盖** 
    PR [#1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642) 作者: midhunxavier | 创建于: 2026-07-17
    **摘要:** 修复了 `MujocoEnv._initialize_simulation()` 强制使用渲染窗口默认尺寸（480x480）覆盖 XML 中声明的更大离屏帧缓冲区尺寸的 Bug，保障了高分辨率离屏渲染的稳定性。
*   **[依赖优化] 从 `[all]` 依赖组中移除 PyTorch** 
    PR [#1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617) 作者: Functionhx | 创建于: 2026-07-09
    **摘要:** PyPI 默认的 PyTorch 版本会拉取庞大的 `nvidia-cuda-*` 包。为了照顾纯 CPU 环境的开发者，PR 将 Torch 从 `[all]` 中移除（保留了默认 CPU 版的 JAX），需要 Torch 的用户需显式指定 `gymnasium[all,torch]`。
*   **[技术探索] LunarLander 物理引擎迁移至 Pymunk** 
    PR [#1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) 作者: Lonny154 | 创建于: 2026-06-26
    **摘要:** 提交了将 `LunarLander` 底层物理引擎从 Box2D 替换为 Pymunk 的概念验证（PoC）版本。目前已实现基于种子的地形生成和基础约束着陆器，是摆脱老旧依赖的重要尝试。
*   **[代码质量] 引入严格类型提示** 
    PR [#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620) & PR [#1537](https://github.com/Farama-Foundation/Gymnasium/pull/1537) & PR [#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)
    **摘要:** 密集提交了数个提升类型安全的 PR。包括为核心文件（`core.py`, `space.py`, `box.py`）添加满足 `mypy --strict` 的返回类型注释；允许 Tuple space 支持泛型（如 `spaces.Tuple[spaces.MultiDiscrete, spaces.Box]`）；以及将 `VectorEnv` 及其子类转换为泛型类型。
*   **[功能增强] 添加 Wrapper 验证工具与 JAX 环境支持** 
    PR [#1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556) & PR [#1502](https://github.com/Farama-Foundation/Gymnasium/pull/1502)
    **摘要:** 新增了类似 `check_env()` 的 `check_wrapper()` 工具，用于自动校验自定义 Wrapper 是否符合 Gymnasium API 规范；同时修复了 Functional JAX 环境中 `reset()` 方法无法正确处理 `options` 参数的不一致问题。
*   **[环境优化] Car Racing 终止条件与 MuJoCo 教程** 
    PR [#1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323) & PR [#1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)
    **摘要:** 为 Car Racing 环境添加了“基于已访问区块百分比”的赛道完成终止条件；新增了面向新手的 MuJoCo（如 `HalfCheetah-v5`）参数自定义图文教程。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的提交可以看出，Gymnasium 正在进行**底层架构的深度现代化**。
1. **对纯 CPU 和轻量级推理的妥协：** 将笨重的 PyTorch 从核心依赖组剥离，标志着该项目致力于降低环境测试与纯规则驱动（如搜索算法、JAX加速）的算力门槛。
2. **向类型安全的现代 Python 演进：** 密集的 `mypy --strict` 合入和泛型支持，极大降低了下游 RL 算法库（如 Stable-Baselines3, CleanRL）在静态代码分析和环境交互时的类型错误率。
3. **摆脱技术债务：** 探索替换老旧的物理引擎（Box2D 到 Pymunk），并持续修复异步向量化环境（AsyncVectorEnv）的数据流硬伤。这种不破不立的态度确保了它作为 RL 生态“底层基石”的不可替代性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-07-19)**

**1. 今日速览**
PettingZoo 仓库在过去 24 小时内整体活跃度趋于平缓。无新增 Issue，无新版本发布。仅有一项关于 API 测试警告修复的 PR 于昨日产生了更新。

**2. 版本发布**
*   **无新增 Release**。项目核心 API 保持稳定。

**3. 重点 Issues**
*   **无新增/更新 Issues**（过去 24 小时 Issues 动态为 0）。

**4. 关键 PR 进展**
*   **[#1391] Remove spurious api_test warnings for non-Box/Discrete (Dict) observation spaces** | 作者: `teddytennant`
    *   **链接:** [Farama-Foundation/PettingZoo PR #1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391)
    *   **进展:** 该 PR 创建于 2026-07-08，于昨日（07-18）获得最新更新。
    *   **技术摘要:** 这是一个针对环境 API 测试（`api_test.py`）的代码质量修复。当多智能体环境的观测空间使用合法的 Gymnasium 复合数据类型（如 `Dict`, `Tuple`, `MultiDiscrete`）而非基础类型（`Box`/`Discrete`）时，原先的测试脚本会错误地触发“Observation is not a NumPy array”等假阳性 `UserWarning`。此 PR 的合并将有效消除开发者在自定义复杂环境时的这些干扰性警告，提升多智能体环境的开发与测试体验。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
PettingZoo 作为 Farama-Foundation 的核心项目，是多智能体强化学习（MARL）领域的标准 API 规范。尽管日常代码更新频率可能不及底层算法库，但其重要性在于：它是绝大多数主流 MARL 算法库（如 Tianshou, Ray RLlib, CleanRL 等）与环境之间的**通用接口层**。关注其对 API 兼容性的细微修复（如此次对复合观测空间的测试完善），可以直接反映出当前 RL 生态在处理复杂状态空间时的底层工程演进方向。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

**强化学习（RL）开源生态日报：Stable Baselines3**
**日期**: 2026-07-19

### 1. 今日速览
过去 24 小时内，Stable Baselines3（SB3）仓库共有 4 项动态更新（1 条 Issue，3 条 PR），无新版本发布。今日的核心焦点集中在 **向量化环境（VecEnv）随机种子覆盖的 Bug 修复** 以及 **底层安全反序列化与测试覆盖率的提升**。

### 2. 版本发布
- **Releases**: 过去 24 小时无新版本发布。

### 3. 重点 Issues
- **#2268 [OPEN] [Bug]: VecEnv sub-environment seeds overlap across runs with adjacent base seeds**
  - **作者**: abaisero （更新于 2026-07-18）
  - **链接**: [DLR-RM/stable-baselines3#2268](https://github.com/DLR-RM/stable-baselines3/issues/2268)
  - **技术摘要**: 发现 `VecEnv.seed(seed)` 及 `make_vec_env(..., seed=seed)` 存在严重逻辑缺陷。当前机制直接使用 `seed + i` 为子环境分配种子，这导致在进行 `0..N` 的基线种子扫描（Sweeping）以获取独立评估结果时，相邻的运行（如 seed=0 和 seed=1）会共享大部分子环境的随机数流，破坏了实验的统计独立性。

### 4. 关键 PR 进展
- **#2264 [OPEN] Secure deserialization (`.load()`) by default**
  - **作者**: araffin （更新于 2026-07-18）
  - **链接**: [DLR-RM/stable-baselines3#2264](https://github.com/DLR-RM/stable-baselines3/pull/2264)
  - **技术摘要**: 核心安全更新。旨在默认使 `.load()` 方法具备安全反序列化能力，防止加载恶意模型文件带来的任意代码执行风险。此 PR 涉及底层架构调整，目前正处于持续打磨阶段。

- **#2270 [CLOSED] Improve test coverage and fix issues in moviepy tests**
  - **作者**: araffin （更新于 2026-07-18）
  - **链接**: [DLR-RM/stable-baselines3#2270](https://github.com/DLR-RM/stable-baselines3/pull/2270)
  - **技术摘要**: 从 #2264 中 Cherry-pick 出的独立测试改进。值得注意的是，作者透露使用了 opencode + qwen 3.6 辅助生成大部分代码，反映了该项目已在日常维护中引入 LLM 工作流。现已关闭合并。

- **#2269 [CLOSED] [PR template not filled, LLM generated] Fix VecEnv sub-env seed overlap for adjacent base seeds**
  - **作者**: Fstarnb （更新于 2026-07-18）
  - **链接**: [DLR-RM/stable-baselines3#2269](https://github.com/DLR-RM/stable-baselines3/pull/2269)
  - **技术摘要**: 外部贡献者针对 Issue #2268 提交的修复。方案摒弃了简单的 `seed + i`，改用 `np.random.SeedSequence(seed).generate_state(n_envs)` 来派生独立的子种子。尽管技术方案合理，但由于提交者未按规范填写 PR 模板且被系统判定为纯 LLM 自动生成，该 PR 已被维护团队关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **严苛的实验严谨性把控**: Issue #2268 及相关 PR 表明，SB3 对 RL 实验中极易被忽视的“伪随机种子独立性”保持着极高的敏感度，这确保了基于 SB3 产出的学术和工程数据具备真正的统计可靠性。
2. **安全架构的与时俱进**: PR #2264 展示了核心维护者（araffin）正主动重构模型加载（`.load()`）的反序列化机制，这对于防范日益复杂的供应链攻击至关重要，使其更适合工业级安全部署。
3. **拥抱 AI 辅助开发的规范边界**: 通过 #2270 和 #2269 可以看出，SB3 维护者自身已在积极使用 LLM（如 qwen 3.6）提升测试编写效率，但同时建立并执行了严格的审查标准，果断拒绝未按人类工程规范提交的 LLM 自动化 PR，展现了开源项目在 LLM 时代的健康治理样本。

</details>