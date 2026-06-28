# RL 开源生态日报 2026-06-29

> 生成时间: 2026-06-28 22:18 UTC | 覆盖项目: 15 个

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
当前 RL（强化学习）开源生态正呈现出显著的“范式跃迁”特征。传统的单智能体控制与多智能体仿真（如 Gymnasium, PettingZoo）已进入高度标准化的基础设施沉淀期；而大模型时代的 RL（RLHF/RLAIF）正全面接管生态的创新制高点。开源社区的集体发力点已彻底从“跑通基础 PPO/DPO”，转向**长时序 Agent 交互、复杂环境沙盒控制、大规模异构集群调度以及前沿 RL 算法的极速工程落地**。

## 各项目活跃度对比
过去 24 小时内，生态内仅剩极少数核心项目维持高频迭代，多数经典算法库处于静默或维护期。以下为核心项目活跃度数据：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 15 | 11 | 0 | 重点攻坚 Agent 架构调度与多模态/大集群硬核 Bug，工业落地属性极强。 |
| **TRL** | 10 | 15 | 0 | 高频修复 vLLM+PEFT 集成痛点，积极拥抱异步环境 API 与前沿算法。 |
| **Open Instruct** | 0 | 13 | 0 | 进行大规模分支重构，密集布局算力优化与 Agent 容器化基建。 |
| **Gymnasium** | 9 | 5 | 0 | 筹备底层物理引擎更换与 NumPy 2.0/Python 3.14 适配。 |
| **slime** | 1 | 2 | 0 | 暴露并攻坚超长序列 RL 训练中的显存爆炸痛点。 |
| **PettingZoo** | 1 | 3 | 0 | 深化代码规范与静态检查，探索 LLM 辅助代码审查。 |
| **torchtune** | 0 | 1 | 0 | 聚焦于修复极底层的分词器 EOS 截断 Bug。 |
| **AReaL / OpenRLHF / SB3 等** | 0 | 0 | 0 | 过去 24 小时无实质代码推进，处于稳定期。 |

## 共同关注的研究与工程方向
各大开源框架在技术演进路线上呈现出高度的默契，主要聚焦于以下两个维度的突围：

**研究侧信号：**
1. **超越基础 RLHF 算法：** 寻找比 vanilla PPO/GRPO 更稳定的策略优化机制。例如 verl 引入的 **CPPO**（基于信任域）和 Open Instruct 引入的 **DPPO**，均致力于解决大模型在 RL 更新中的策略崩溃问题。
2. **强化学习与蒸馏的深度融合：** 不再局限于单一的网络更新。verl 正在推进 **OPD/OPSD**（策略蒸馏），TRL 引入了跨分词器的知识蒸馏，开启了“以强带弱”的 On-policy 训练新范式。
3. **多模态对齐与 Agent 演进：** 视觉语言模型 (VLM) 的 RL 微调成为刚需（Gemma3, Qwen2-VL, GLM-4V 适配），且训练对象开始向具备多轮复杂工具调用能力的 Agentic Workflow 演进。

**工程/基础设施侧信号：**
1. **极致压榨显存与算力：** 无论是 Open Instruct 引入的 **Tiled loss**（分块计算），还是 TRL 实现的 **零配置 Adapter-only LoRA 直连 vLLM**，核心目标都在于消除全词表级别损失计算的内存峰值，让中小团队也能跑得动千亿/长序列 RL。
2. **攻克大尺度集群与沙盒并发：** RL 训练的瓶颈已彻底转移至工程基建。面对网络通信异常、多节点分布式死锁、甚至是沙盒环境的 Docker 并发 OOM，顶级框架正在提供成体系的工业级容错与重试方案。

## 差异化定位分析
尽管同属 RL 生态，但各项目的战略卡位已发生显著分化：
- **工业级 Post-training 全家桶 (verl, Open Instruct, TRL)：** 竞争最为惨烈。**verl** 侧重于高阶算法（R1-Zero 复刻）与极其硬核的底层多卡/多节点资源调度；**TRL** 则背靠 HuggingFace 生态，在易用性、PEFT/DeepSpeed 适配和学术前沿（ICLR 2026 算法）上保持极高敏感度；**Open Instruct** 则在容器级沙盒（SWERL）和大规模并发 Agent Rollout 基建上独具匠心。
- **基础 API 与仿真地基 (Gymnasium, PettingZoo)：** 作为单/多智能体环境的标准制定者，它们不再追逐上层算法的日新月异，而是专注于“切割历史包袱”（如果断弃用 Box2D 改用 Pymunk，强推 Python 3.14），确保最底层物理仿真实验的长期可复现性。
- **底层算子与分布式补丁 (torchtune, slime)：** 它们深入到流水线并行和 Token 级别。torchtune 关注 SFT 到 RL 衔接处的“隐性崩溃”（如 EOS 掩码错误），slime 则死磕 3 万 tokens 以上长序列带来的流水线反向传播 OOM 问题，是解决大规模训练深水区疑难杂症的关键防线。

## 社区热度与成熟度
- **梯队分化明显：** verl 与 TRL 每日维持着 10+ Issue 和 10+ PR 的高频交互，社区反馈极其活跃，生态处于爆发期与快速迭代期；而诸如 CleanRL, OpenRLHF, Stable-Baselines3 等经典工具处于停滞状态，标志着对应技术路线已高度成熟。
- **工程严谨性达到新高度：** 随着模型尺度与集群规模变大，试错成本指数级上升。各项目在近期更新中均展现出对分布式对齐（如 slime 修复多 rank 指标一致性）和代码规范（PettingZoo 提升静态检查严格度）的苛刻要求。
- **AI 辅助开发渗透基建：** 值得注意的是，PettingZoo 的维护者已开始系统性使用 Codex/Claude 进行复杂代码的多轮自动化 Review，大模型正在反哺大模型底层训练生态的开发流程。

## 值得关注的趋势信号
1. **Rollout 引擎的精细化接管：** RL 训练正在剥离粗放的调度。例如 verl 引入针对单一请求的精准中断（per-request abort），这标志着开源框架对大模型在线推理（Rollout）阶段的控制力正在实现细粒度化。
2. **环境容器的沙盒化：** 随着 Software Engineering Agent 的兴起，纯文本交互已不再是主流。Open Instruct 提供完全独立、持久化 shell 状态的纯 Bash 沙盒，预示着“代码执行环境隔离与并发保护”将成为下一代 RL 训练框架的标配组件。
3. **RL 算法前置依赖的“排雷”：** 业界逐渐意识到 RL 训练崩溃常源于 SFT/分词阶段。torchtune 修复 EOS 掩码泄漏的 Bug 揭示了一个重要信号：若模型在 SFT 阶段未学会停止，将在 RL 的 Rollout 中引发灾难性的算力浪费。底层 Token 处理机制的透明与可控，将成为衡量训练框架是否成熟的核心指标。

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

以下是为您生成的 slime（THUDM/slime）项目 2026 年 6 月 29 日 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，slime 项目代码库活动平稳，无新版本发布。共有 1 条 Issue 更新和 2 条 PR 更新。今日的焦点主要集中在**长序列训练的显存优化（OOM 问题）**以及**训练日志与评估指标的准确性修复**上。

### 2. 版本发布
- **Releases (0)**：过去 24 小时无新版本发布。

### 3. 重点 Issues
- **长序列强化学习训练因熵反向传播张量导致 OOM** `[OPEN]`
  - **链接**: [THUDM/slime Issue #1523](https://github.com/THUDM/slime/issues/1523)
  - **进度**: 该问题于今日（06-28）有新的讨论动态。
  - **技术摘要**: 当训练的总样本长度超过 3 万 tokens 时，在流水线并行（Pipeline Parallelism）的最后一个阶段计算 entropy（熵）的反向传播过程中会触发 CUDA Out of Memory (OOM)。这反映了项目在大规模、长上下文 RL 训练场景下面临的底层显存管理挑战，对于关注长序列 LLM 强化学习的开发者具有较高的参考价值。

### 4. 关键 PR 进展
- **PR #1996: 修复 raw rewards 划分逻辑以确保 correct samples 日志准确** `[OPEN]`
  - **链接**: [THUDM/slime PR #1996](https://github.com/THUDM/slime/pull/1996)
  - **作者**: Jiang020609
  - **更新**: 06-27 
  - **技术摘要**: 该 PR 旨在修复 Issue #1784。核心改动是在 `process_rollout_data` 函数中，将 `raw_reward` 与 `total_lengths` 进行同步划分，修复了 `--log-correct-samples` 参数在多 rank 环境下的日志显示问题；同时为 `--log-passrate` 保留了全局 `global_raw_reward`，并将其从常规 rollout 指标中剥离。代码已添加 CPU 级别的单元测试。
- **PR #2141: Opd reproduction** `[CLOSED]`
  - **链接**: [THUDM/slime PR #2141](https://github.com/THUDM/slime/pull/2141)
  - **作者**: suryathecreator
  - **更新**: 06-28
  - **技术摘要**: 旨在 slime 框架下复现 OPD（Offline Policy Data / 相关强化学习算法），该 PR 已于今日被关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚长序列 RL 训练瓶颈**: 随着 LLM 上下文窗口的不断扩展，长序列 RL 训练中的显存爆炸（如 Issue #1523 中的 entropy backward OOM）成为当前 RL 生态的通用痛点。slime 团队及社区正在积极跟进并暴露这些底层工程问题，表明该项目正应用于前沿、重负载的强化学习对齐任务中。
2. **注重分布式训练的工程严谨性**: 从 PR #1996 可以看出，项目在处理流水线并行/张量并行下的指标统计（如 per-rank rewards 划分、passrate 保留）时非常细致。这种对分布式训练下数据对齐和 Metric 准确性的关注，是成熟 RLHF/RLAIF 训练框架的标志，适合需要进行大规模多卡训练的团队进行二次开发或借鉴。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-06-29 TRL (Transformers Reinforcement Learning) 开源项目 RL 日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，TRL 仓库共处理了 **10** 条 Issue 更新与 **15** 条 PR 更新，无新版本发布。
- **核心动向**：今日的研发焦点高度集中于 **多模态/异构环境下的 GRPO 训练稳定性** 以及 **底层分布式训练框架（vLLM 集成、DeepSpeed ZeRO-3、PEFT/LoRA）的 Bug 修复**。异步环境 API 的适配也成为当天的热点。

### 2. 版本发布
**无新版本发布。**

### 3. 重点 Issues
今日讨论与关闭的 Issues 主要围绕多模态训练 OOM、底层组件版本兼容性以及高级 RL 算法特性的讨论：

- **[CLOSED] 视觉微调 Gemma 3 极端 OOM (8xH200)** ([#3481](huggingface/trl Issue 3481))
  - **摘要**：开发者反馈在使用 8xH200 运行 Gemma 3 视觉数据集微调时遭遇严重内存溢出（OOM），即使是 2-3 个样本也会崩溃。此类 VLM 在 TRL 中的显存管理机制仍需关注。
- **[OPEN] `sft_video_llm` 示例脚本运行失败** ([#3958](huggingface/trl Issue 3958))
  - **摘要**：基于 DeepSpeed ZeRO-2 运行 Qwen2-VL-7B-Instruct 的视频 SFT 脚本报错。维护者已确认底层缺乏原生视频支持，并在今日提交了移除该无效脚本的 PR。
- **[OPEN] BrowserGym 异步客户端报错** ([#4952](huggingface/trl Issue 4952))
  - **摘要**：运行基于 BrowserGym 的 GRPO 训练时，报 `'coroutine' object has no attribute 'observation'` 错误。该 Issue 暴露了 RL 智能体与环境交互时的异步 API 兼容性问题。
- **[CLOSED] PPOTrainer 保留 Value Model (Critic)** ([#3293](huggingface/trl Issue 3293))
  - **摘要**：提出在 `PPOConfig` 中增加 `save_value_model` 选项以独立保存评论家模型。此特性需求已在今日的 PR 中被实现。
- **[CLOSED] 移除 PPOv2/RLOO 中 Reward Model 与 Policy Model 共享 Tokenizer 的隐式假设** ([#1979](huggingface/trl Issue 1979))
  - **摘要**：一个高价值的架构优化提案，要求解绑奖励模型和策略模型的分词器，这对于使用不同模型架构组合的复杂 RLHF 流水线至关重要。

### 4. 关键 PR 进展
今日的 PR 活动密集，展现了 TRL 对前沿 RL 算法和分布式训练痛点的快速响应：

- **vLLM + GRPO + PEFT 稳定性大修**：
  - [PR #6007](huggingface/trl PR 6007)：为 GRPO/RLOO 引入 **零配置的 Adapter-only LoRA 同步**。训练 PEFT 模型时，不再合并全量权重，而是直接将极小的 LoRA 适配器同步给 vLLM，大幅提升在线 RL 训练速度。
  - [PR #6197](huggingface/trl PR 6197) / [PR #6139](huggingface/trl PR 6139)：修复 GRPO + vLLM 共置部署下，非 NVLink 硬件或多卡张量并行 (TP) 时 `torch.distributed.barrier()` 导致的死锁和警告问题。
  - [PR #6137](huggingface/trl PR 6137)：修复了 `GRPOTrainer` 在结合 `environment_factory` 处理残缺 Batch 时的崩溃问题。
- **实验性 Trainer 与 API 规范化对齐**：
  - [PR #6192](huggingface/trl PR 6192)：对齐 CPO/ORPO/BCO 等实验性 Trainer，修复非量化模型在 ZeRO-3 + PEFT 混合精度下报错的 `TypeError`。
  - [PR #6194](huggingface/trl PR 6194)：修复异步 API 变更导致的 OpenEnv 示例崩溃问题，强制附加 `.sync()` 以兼容异步优先的客户端。
  - [PR #6087](huggingface/trl PR 6087)：使得 CPO/ORPO 在未提供 `processing_class` 时能自动加载，而非直接抛出异常。
- **新算法与高级功能集成**：
  - [PR #5102](huggingface/trl PR 5102)：引入 ICLR 2026 论文 **DGPO** 算法支持。
  - [PR #6126](huggingface/trl PR 6126)：为 GOLD Trainer 引入 X-Token 跨分词器知识蒸馏。
  - [PR #6120](huggingface/trl PR 6120)：正式为 PPOConfig 添加 `save_value_model` 标志，支持 Critic 模型的独立保存。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **解决 RLHF 分布式训练的工程痛点**：大模型强化学习最大的挑战往往不在算法而在工程。TRL 团队正在高强度解决 **vLLM 集成、异步环境交互、DeepSpeed ZeRO-3 兼容性** 等硬核问题，大幅降低了在线 RL 的工程门槛。
2. **极致压榨显存与算力**：今日合并的多个关于 **LoRA 权重直连 vLLM** 的优化表明，TRL 正努力让中小型团队也能跑得动 GRPO/PPO 等极其消耗算力的在线 RL 算法。
3. **紧跟学术前沿（ICLR 2026）**：通过快速收纳 DGPO、GSPO-token、Expert Iteration 等最新研究，TRL 保持着 RLHF/DPO 领域算法实现的 SOTA 地位，是学术界与工业界验证新想法的首发阵地。

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

这里是 2026 年 6 月 29 日的 verl (volcengine/verl) 开源生态 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，verl 仓库展现出极高的开发与社区活跃度。共有 **15 条 Issues** 发生状态更新或新增讨论，**11 条 PR** 取得实质性代码推进。今日无新版本发布。整体动态聚焦于**异步与蒸馏训练机制（OPD/OPSD）的迭代、新算法实现（CPPO）、多模态模型（GLM-4V）适配修复以及底层 rollout 引擎的精细化控制**。

### 2. 版本发布
- **无新版本发布** (Releases: 0)。

### 3. 重点 Issues
社区讨论核心围绕多节点部署、底层并行策略以及特定模型的 GRPO 训练收敛展开：

- **训练底座与并行策略**
  - **[#571](https://github.com/volcengine/verl/issues/571) [高优/10👍]** 深入讨论 `ulysses_sequence_parallel_size` 开启后，结合动态批处理（`use_dynamic_bsz = True`）时，GPU 最大 token 限制（`ppo_max_token_len_per_gpu`）的正确参数推导逻辑。
  - **[#572](https://github.com/volcengine/verl/issues/572) [高优/2👍]** 报告了基于 Ray 的多节点 PPO/GRPO 训练时的 `OwnerDiedError`，反映在集群扩展时可能存在的 Ray 资源分配或网络通信异常。
  - **[#574](https://github.com/volcengine/verl/issues/574)** 询问如何正确配置 GRPO 训练的多卡并行（Multi-GPU）以解决本地推理模型训练的 OOM 问题。

- **算法机制与效果反馈**
  - **[#538](https://github.com/volcengine/verl/issues/538)** 复现 32B 模型 R1-Zero 训练时，遇到 Reward 在特定步数后不再上升的瓶颈，寻求大模型 GRPO 训练的调参经验。
  - **[#6851](https://github.com/volcengine/verl/issues/6851)** 报告了使用 qwen2.5-7b-vl 进行 GRPO + LoRA 训练时的 Bug。
  - **[#6677](https://github.com/volcengine/verl/issues/6677)** 反映在同一 Node 上部署多个 vLLM 实例时，可能产生分布式初始化端口冲突（`EADDRINUSE`）。

### 4. 关键 PR 进展
今日 PR 进展极为硬核，主要涵盖新算法引入、Agent 架构升级及训练稳定性修复：

- **新算法与训练范式**
  - **[#6731](https://github.com/volcengine/verl/pull/6731)** 引入 **CPPO**（Cumulative Prefix-divergence Policy Optimization），针对自回归大模型改进了均等 Token 级 Trust Region 的缺陷。
  - **[#6833](https://github.com/volcengine/verl/pull/6833)** 迈出 **OPSD**（On-Policy Self-Distillation）的第一步：实现特权上下文（privileged-context）的 Teacher 打分机制，强化 Student 模型的 On-policy rollout 能力。

- **Agent 与 Rollout 控制升级**
  - **[#6874](https://github.com/volcengine/verl/pull/6874)** 为 V1 agent-loop trainer 引入可选的 **rollout 级别分发机制**（`rollout_level_dispatch`），提升 Agent 复杂调用链路的调度灵活性。
  - **[#6865](https://github.com/volcengine/verl/pull/6865)** 在 Rollout client 层引入 **AbortableLLMServerClient**，支持针对单一请求的精准中断（per-request abort），而非此前的全局广播中断。

- **关键 Bug 修复**
  - **[#6873](https://github.com/volcengine/verl/pull/6873)** 修复 GLM-4.1V / GLM-4V 多模态模型因 Processor 类名匹配错误导致的训练崩溃问题。
  - **[#6870](https://github.com/volcengine/verl/pull/6870)** 修复异步 OPD 训练中，当关闭 task_rewards 时可能导致的 reward 计算崩溃。
  - **[#6867](https://github.com/volcengine/verl/pull/6867)** 修复 OPD 训练中，Teacher 模型推理温度设置非 1.0 时引发的异常（强制忽略 temperature 影响）。
  - **[#5641](https://github.com/volcengine/verl/pull/5641) [已合并]** 修复 `token-mean` 损失聚合模式下，梯度累加与全量 Batch 结果不一致的底层数值计算 Bug。
  - **[#6869](https://github.com/volcengine/verl/pull/6869)** 优化 Megatron 引擎下 `dynamic_cp_split_batch` 逻辑，将序列切分从 ceil-based 改为 balanced-based，避免尾端计算负载不均。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **超越基础 PPO/GRPO**：verl 正在迅速集成前沿的 RL 算法（如今日的 CPPO），并通过 OPD/OPSD 模糊强化学习与模型蒸馏的边界，这对于想要复刻 DeepSeek R1 及更高阶推理能力的开发者而言是刚需。
2. **向 Agentic Workflow 演进**：通过支持单请求级中断（`AbortableLLMServerClient`）和 V1 Rollout 分发，verl 正在从一个纯粹的“模型微调框架”，向能够处理多轮、长时序 Tool-use Agent 的训练框架转型。
3. **深度适配基础设施**：无论是修复多节点 Ray 调度异常，还是处理多 vLLM 实例端口冲突、Megatron 序列并行负载切分，verl 团队正在实打实地解决大集群、大尺度模型 RL 训练中的工程硬骨头。它是目前开源社区中最贴近工业级 Post-training 落地的项目之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 2026-06-29 torchtune 项目 RL 生态日报摘要。

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活动趋于平稳。无新增 Issues，无新版本发布，仅合并/更新了 1 个关键 PR。今日的焦点完全集中在修复 Qwen 系列模型在微调时的 EOS（序列结束符）掩码逻辑 Bug 上。

### 2. 版本发布
*   **今日发布**：无。

### 3. 重点 Issues
*   **今日更新**：无。
*   **历史关联**：今日的 PR 主要为了解决 Issue **#2792** 反馈的问题（模型在微调后无法可靠地停止生成）。

### 4. 关键 PR 进展
*   **[OPEN] [Fix] Qwen tokenizers mask trained EOS out of loss when max_seq_len is set (#2792)**
    *   **作者**: yushanosun
    *   **技术分析**: 这是一个高价值的底层修复。当设置 `max_seq_len` 时，Qwen2 / 2.5 / 3 的 tokenizer 在 `tokenize_messages` 阶段错误地将追加的尾部 EOS token 从 loss 计算中掩码掉。
    *   **影响**: 此 Bug 导致模型在 SFT（监督微调）期间从未被教导如何输出 EOS，进而导致模型在 RL 阶段（如 PPO）或推理阶段无限生成，无法可靠停止。该 PR 旨在修复这一掩码逻辑缺陷。
    *   **链接**: [meta-pytorch/torchtune PR #2967](https://github.com/pytorch/torchtune/pull/2967)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据清淡，但 PR #2967 折射出 torchtune 在 RL/LLM 生态中的核心价值：
*   **消除 RLHF 的隐性崩溃源头**：在强化学习（RLHF/DPO）流程中，如果 Actor 模型在 SFT 阶段未正确学会截断（输出 EOS），将导致 Rollout 阶段持续生成无用 token，浪费大量计算资源并破坏 Reward 信号。此类底层 Tokenizer 和数据处理 Bug 的修复，是保障 RL Pipeline 稳定性的基石。
*   **对主流模型底层的深度把控**：torchtune 团队对 Qwen 等开源主力模型的支持不仅停留在跑通层面，而是深入到了极细粒度的 token mask 对齐。对于需要结合 SFT 与 RL 的算法工程师而言，这种透明的底层控制力使其成为不可替代的训练框架。
*   **链接**: [pytorch/torchtune](https://github.com/pytorch/torchtune)

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目追踪**
📅 日期：2026-06-29
🔗 项目地址: [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issues 和 Releases，但迎来了 **高达 13 次的 PR 活动更新**。
核心开发者 `hamishivi` 进行了一次大规模的代码分支重构：将 6 个早期 PR（#1731-#1735, #1739）关闭，并将其 rebase 到最新的 `main` 分支后，以新的 PR 序号（#1743-#1748）重新提交。这表明项目正在进行紧锣密鼓的代码同步与合并前准备，重点方向包括高效算子、强化学习算法扩展以及沙盒环境健壮性。

### 2. 版本发布
无（近期无新版本发布）。

### 3. 重点 Issues
无（过去 24 小时无 Issue 更新）。

### 4. 关键 PR 进展
本次更新的 PR 高度聚焦于**RL 训练底座优化**与**智能体环境强化**。为方便追踪，以下将按技术方向对重提交的 PR 进行归类：

*   **RL 算法与高效算子**
    *   [PR #1745 [OPEN]](https://github.com/allenai/open-instruct/pull/1745): 新增 **DPPO (Trust Region Policy Optimization) 损失函数** (`--loss_fn dppo`)。基于 [DPPO 论文](https://arxiv.org/abs/2602.04879)，通过逐 token 的伯努利散度实施信任域约束，防止单步更新导致策略偏离过大。（替代原 #1733）
    *   [PR #1747 [OPEN]](https://github.com/allenai/open-instruct/pull/1747): 引入 **Tiled GRPO lm-head loss** (`--use_liger_grpo_loss`)。采用类似 DeepSpeed 的分块计算模式，逐块重算 lm-head 投影和标量损失，大幅降低全词表级别损失计算的内存峰值。（替代原 #1735）

*   **SWERL 与沙盒环境健壮性**
    *   [PR #1744 [OPEN]](https://github.com/allenai/open-instruct/pull/1744): 强化 DockerBackend 稳定性。引入并发信号量限制（防 Docker 守护进程过载），增加瞬时 API 错误重试机制和 **OOM（显存溢出）检测**，提升大规模并发 rollout 容错率。（替代原 #1732）
    *   [PR #1748 [OPEN]](https://github.com/allenai/open-instruct/pull/1748): 新增 `SWERLVanilluxSandboxEnv` 沙盒环境。提供完全独立、纯 Bash 的 RL 运行环境（持久化 shell 状态），专门适配 mini-swe-agent 的求解需求。（替代原 #1739）
    *   [PR #1749 [OPEN]](https://github.com/allenai/open-instruct/pull/1749): 新增 **Podman / DinD 容器设置脚本**。包含镜像分片、镜像仓库辅助脚本，进一步完善底层容器化基建。

*   **SFT 与模型架构兼容性**
    *   [PR #1746 [OPEN]](https://github.com/allenai/open-instruct/pull/1746): SFT 分词阶段支持 **Tool-schema（工具模式）**。可将数据集中的 `tools` 列直接渲染进 prompt 模版，增强了工具调用能力的训练支持。（替代原 #1734）
    *   [PR #1743 [OPEN]](https://github.com/allenai/open-instruct/pull/1743): 优化 `ModelDims.from_hf_config`，使其支持显式的 `head_dim` 配置。解决了复杂模型或 **VLM（视觉语言模型）** 中 `hidden_size` 无法被 `num_attention_heads` 整除导致的报错问题。（替代原 #1731）

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **直击大模型 RL 训练的痛点（内存与并发）**：从引入 Liger 分块计算（#1747）到添加 Docker 并发控制与 OOM 检测（#1744），Open Instruct 正在解决千亿级参数 RL 训练和海量 Agent 并发 Rollout 时的底层工程瓶颈。
2.  **前沿算法的快速落地**：紧跟学术前沿，迅速整合如 DPPO（基于信任域的 PPO 变体）等新型策略优化算法，为社区提供了除标准 PPO/GRPO 之外的极其宝贵的实验基座。
3.  **向 Agent 与多模态演进**：PR 中频繁出现 SWERL（Software Engineering RL）沙盒环境，以及对 VLM 显式 `head_dim` 的兼容修复，标志着该项目正在从传统的纯文本 NLP 微调，快速向**复杂环境交互**与**多模态对齐**的最前沿阵地迈进。

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

这是一份基于您提供的 GitHub 数据，为您定制的 2026-06-29 Gymnasium 强化学习生态日报摘要。

---

# RL 日报：Gymnasium 生态追踪 (2026-06-29)

### 1. 今日速览
- **Issues 动态**：过去 24 小时共有 9 条 Issue 更新（3 个新开，6 个关闭），主要集中在对 Python 3.14 的支持适配、CI 修复以及物理引擎 Box2D 的替代方案讨论。
- **PR 进展**：5 条 PR 更新（2 个合并/关闭，3 个处于开放/草案阶段），核心贡献围绕底层依赖升级（NumPy 2.0+）、类型提示重构及 LunarLander 环境的底层重构。
- **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
**无**。但根据今日合并的代码动向，项目正在为全面适配 Python 3.14 和 NumPy 2.0 做最后冲刺。

### 3. 重点 Issues
今日的讨论重点反映了项目在维持向下兼容与跟进最新工具链时的技术摩擦：

- **物理引擎迁移意向**：[#1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597) **[OPEN]**
  核心维护者提议将所有 Box2D 环境移植至 Pymunk。原因在于 Box2D 的 Python 绑定已多年停止维护，而 Pymunk 仍处于活跃维护状态且文档更完善。这将是未来版本中的一项重大变更。
- **Python 3.14 支持推进**：[#1594](https://github.com/Farama-Foundation/Gymnasium/issues/1594) **[CLOSED]**
  确认 ALE（Arcade Learning Environment）已支持 Python 3.14，呼吁社区提交 PR 以全面解除 Gymnasium 对 3.14 的支持限制。
- **CI 与测试矩阵修复**：[#1605](https://github.com/Farama-Foundation/Gymnasium/issues/1605) **[CLOSED]**
  指出 "Run PyTest" 的 GitHub Workflow 未正确强制约束 NumPy 版本（由于 Dockerfile 中 `ARG` 声明位置错误，导致所有测试均拉取最新版 NumPy，从而漏测了 NumPy 1.x 的兼容性）。
- **MuJoCo 渲染参数问题**：[#1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607) **[OPEN]**
  开发者反馈自定义 `MujocoEnv` 时，无法通过 XML 文件配置覆盖默认的 `offwidth` 和 `offheight` 参数，影响了无人机等自定义视角相机的图像渲染。
- **文档与代码一致性**：[#1504](https://github.com/Farama-Foundation/Gymnasium/issues/1504) **[CLOSED]**
  修复了 `RecordEpisodeStatistics`（向量化版本）文档字符串中示例与实际实现不一致的 bug。

### 4. 关键 PR 进展
今日的 PR 活动展现了社区对底层基础设施的高效维护：

- **放弃旧版 NumPy 适配 Py 3.14**：[#1603](https://github.com/Farama-Foundation/Gymnasium/pull/1603) **[CLOSED/Merged]**
  强制要求数组依赖提升至 `numpy >= 2.0`。由于 NumPy 2.0.x 没有 Python >= 3.13 的 wheel 包，此举直接清除了旧依赖阻碍，完成了对 Python 3.14 的支持（关闭 Issue #1594）。
- **LunarLander 迁移至 Pymunk (PoC)**：[#1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) **[OPEN]**
  响应 Issue #1597，提交了使用 Pymunk 替换 Box2D 的 LunarLader 概念验证（PoC）。目前展示了带种子的地形生成、Pymunk 着陆器外壳及腿部铰链约束物理效果。
- **类型系统与 CI 工具链修复**：
  - [#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577) **[OPEN]**: 将 `VectorEnv` 及其子类转换为泛型（Generic types），在修复 TypeVar 问题的同时保持向后兼容。
  - [#1604](https://github.com/Farama-Foundation/Gymnasium/pull/1604) **[CLOSED]**: 修复了 `ty`（类型检查）的 pre-commit hook 问题，并为 Python 3.14 添加了 `box2d-py` fallback；同时修复了 `MultiDiscrete.sample` 的类型标注错误。
  - [#1606](https://github.com/Farama-Foundation/Gymnasium/pull/1606) **[CLOSED]**: 修复了 PyTest Dockerfile 中的版本约束逻辑（关闭 Issue #1605）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **果断的现代化切割**：Gymnasium 正在加速剥离历史包袱。通过果断要求 NumPy>=2.0 和适配 Python 3.14，项目避免了在废弃 API 上消耗算力，保证了 RL 实验栈极低的执行延迟和最新的语言特性支持。
2. **解决底层物理引擎的“隐雷”**：Box2D 绑定的停止维护是整个 Python 物理仿真圈的痛点。Gym 经典环境（如 LunarLander）向活跃且现代的 Pymunk 迁移，意味着研究者在未来几年内不必再为编译 C++ 依赖发愁，保障了经典基准环境的存活性与可复现性。
3. **向严苛的类型安全演进**：从 PR 中对 `ty`（类型检查）和泛型 `VectorEnv` 的引入可以看出，Gymnasium 正在向工业级的类型安全靠拢。这不仅降低了下游算法库（如 Stable-Baselines3, CleanRL）因为 API 滥用导致崩溃的概率，也极大提升了 IDE 的智能补全体验。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL 开源生态日报：PettingZoo 项目动态 (2026-06-29)

**项目仓库**: [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活跃度主要集中在代码规范升级与历史 Bug 修复上。新增 Issue 0 条（1 条历史 Issue 关闭），活跃 PR 3 条。整体处于版本沉淀与底层代码质量优化阶段，无新版本发布。

### 2. 版本发布
**无新版本发布 (v0.0.0)**

### 3. 重点 Issues
*   **#1354 [CLOSED] Fix CI on Main**
    *   **作者**: jkterry1
    *   **动态**: 该 Issue 提出于 2026-06-24，指出主分支持续集成 (CI) 构建失败，已于 06-27 日修复并关闭。CI 的修复保障了后续代码合并的稳定性。
    *   **链接**: [Farama-Foundation/PettingZoo Issue #1354](https://github.com/Farama-Foundation/PettingZoo/issues/1354)

### 4. 关键 PR 进展
近期 PR 主要聚焦于环境物理逻辑修复、文档校对以及工程化 lint 规范的强化：

*   **#1336 [OPEN] fixed ball bouncing physics in pong(#1289)**
    *   **作者**: sdace9719
    *   **摘要**: 修复了 `Cooperative Pong`（协作乒乓）环境中的墙体反弹物理引擎 Bug。属于非破坏性更新，修复了历史 Issue #1289。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336)
*   **#1368 [OPEN] Fix Hanabi observation layout documentation (#1301)**
    *   **作者**: mfornet
    *   **摘要**: 修复了 `Hanabi`（花火）环境观测空间的文档布局错误。作者注提到因手动 Review 难度极大，已借助 Codex 和 Claude 等 LLM 工具进行多轮自动化代码审查。这反映了当前 RL 开源生态中 AI 辅助开发的新范式。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368)
*   **#1376 [OPEN] Increase ruff strictness and apply mechanical autofixes**
    *   **作者**: mfornet
    *   **摘要**: 技术债清理。提高了 Python linter 工具 `ruff` 的严格程度（在 pyflakes `F` 和 pycodestyle `E4/E7/E9` 基础上启用额外规则），并对全仓库触发的新警告进行了机械性自动修复，进一步夯实了项目的工程化基线。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为多智能体强化学习（MARL）领域的标准 API 提供者，PettingZoo 相当于多智能体版的 Gymnasium。
当前项目的动态显示了其核心维护团队（Farama-Foundation）的一贯风格：**极度重视底层环境逻辑的正确性（如物理引擎 Bug 修复）与 API 规范的严谨性**。随着主流 RL 算法库（如 CleanRL, Stable-Baselines3 的多智能体拓展）对底层环境稳定性的要求日益苛刻，PettingZoo 对 CI 流程和 `Ruff` 静态检查的强硬化管理，使其在复杂的 MARL 实验中能够提供高度可复现的基准环境。对于需要构建复杂多智能体交互的算法研究员而言，持续关注其环境底层的迭代能有效避免因环境 Bug 导致的“伪算法增益”。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>