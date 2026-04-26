# RL 开源生态日报 2026-04-27

> 生成时间: 2026-04-26 22:07 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的分层演进态势：
1. **LLM 后训练成为绝对重心**：verl、TRL、OpenRLHF、AReaL、slime 等项目占据了超 90% 的生态活跃度，核心全面转向大模型的对齐、复杂策略优化与 Agent 训练。
2. **经典/多智能体 RL 维持基座稳定**：以 Gymnasium、PettingZoo 为代表的传统框架进入成熟维稳期，主要精力在于 API 标准维护、依赖现代化与 CI 鲁棒性提升。
3. **前沿算法工程化落地极快**：不到 24 小时内，DAPO、GDPO、SAPO 等最新算法思想已转化为具体 PR 甚至完成了 Bug 修复，显示出极高的学术界与工业界协同转化效率。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 2 | 19 | 0 | 重点发力全异步架构扩展、前沿 RL 算法及底层硬件兼容 |
| **TRL** | 3 | 16 | 1 (v1.3.0) | 快速跟进 Qwen3.6，深度打磨底层算法数学严谨性 |
| **AReaL** | 2 | 10 | 0 | 深度解耦 Agent 推理，攻坚国产 NPU 异构算力适配 |
| **OpenRLHF** | 0 | 4 | 0 | 推进去 Deepspeed 底层重构，完善 Agent Tool-use 基建 |
| **slime** | 1 | 2 | 0 | 探索 SAPO 等非 PPO 策略，补齐大模型 RL 的 LoRA 适配 |
| **PettingZoo** | 1 | 3 | 1 (v1.26.0) | 拆分 MPE 环境，跟进新 Python 版本与底层依赖清理 |
| **Open Instruct** | 0 | 2 | 0 | 追求极致的底层训练确定性与评测工作流自动化 |
| **Gymnasium** | 0 | 3 | 0 | 聚焦第三方生态扩充与文档/CI 的自动化链路治理 |
| *其他项目* | *0* | *0* | *0* | *CleanRL, SB3, Tianshou 等过去 24h 无动态* |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **突破 PPO/DPO 的算法瓶颈**：各框架正密集引入或优化新型策略损失。verl 拥抱 DAPO/GDPO/DrGRPO，TRL 修复 GRPO 零标准差伪梯度，slime 更是直接引入了全新的 SAPO 算法，传统 PPO 的统治地位正在被打破。
2. **细粒度的重要性采样与优势估计**：研究重点从宏观的 Reward 调整转入微观 Token/句子级别。TRL 引入了句子级重要性采样，verl 实现了 DAPO 动态采样带通过滤，旨在解决训练后期的策略退化问题。
3. **带置信度的自我奖励范式**：TRL 引入了 Brier 校准奖励函数，大模型开始结合置信度准确度进行自我进化，减少对外部复杂 Reward Model 的依赖。

**工程/基础设施侧信号：**
1. **全面走向“去中心化”的异步架构**：为突破生成与训练耦合的瓶颈，verl 和 TRL 都在大力推进 Fully Async（全异步）管线，支持独立的 RM 和推理服务。
2. **Agent 与 Tool-use 工作流解耦**：AReaL 构建了原生的 Agent Service API，OpenRLHF 修复了 SFT 的 Tools 字段透传，RL 框架正从“单轮对齐工具”向“多轮环境交互工作流”演进。
3. **底层引擎重构与异构算力攻坚**：OpenRLHF 尝试剥离厚重的 Deepspeed 转向 HF 原生，verl 修复 FSDP 的 autocast 硬编码，AReaL 攻坚 Ascend NPU 上的 HCCL 通信，显示大集群和异构硬件适配仍是核心壁垒。

## 差异化定位分析

1. **verl (前沿与高并发基座)**：在“全异步高吞吐”与“硬件精细度控制”上发力最猛，适合需要组建大规模 GPU 集群进行高频 RLHF 迭代的工业级团队。
2. **TRL (HuggingFace 原生生态)**：凭借对新基座模型（如 Qwen3.6, Gemma）的极快响应与无缝兼容，以及越来越严谨的底层算法实现，稳坐 LLM 研究员与中小团队首选工具的位置。
3. **OpenRLHF (轻量化与去绑定)**：通过积极剔除 Deepspeed 依赖、明确混合 Reward 作用域，致力于降低开发者对重度分布式框架的心智负担，走向轻量敏捷。
4. **AReaL (复杂交互与国产算力)**：走出了一条差异化路线，不仅深耕 Ascend NPU 等国产异构算力，还在 Agent 多步推理解耦上投入重兵，是复杂落地场景的强力竞争者。
5. **经典环境侧**：底层标准趋于固化，主要通过模块化拆分（如剥离 MPE）和生态集成（对接 Ray/RLlib）保持生命力。

## 社区热度与成熟度

1. **高度活跃的 LLM RL 社区**：verl、TRL 等项目每天处理十几个高质量 PR，且集中在算法防崩溃、梯度防爆炸等深水区修复，表明社区已跨越“能跑就行”的初级阶段，进入工业级严谨性打磨期。
2. **生态组件的成熟封闭**：Gymnasium 和 PettingZoo 等基础设施近乎“零 Issue”，证明其 API 设计已成为业界事实标准，稳定性极高，仅在依赖版本迭代时产生波动。
3. **异构硬件生态的痛点**：AReaL 暴露的 NPU HCCL 初始化痛点、verl 修复的旧架构 GPU 兼容性报错，反映出 RL 训练在向非 NVIDIA 阵营或消费级显卡渗透时，仍存在较高的工程门槛。

## 值得关注的趋势信号

1. **MoE 与多模态 (VLM) 的 RL 适配即将爆发**：slime 社区对 qwen3-vl 训练的强烈诉求，以及 TRL 频繁修复 Gemma 多模态报错，预示着下一个半年，RL 框架的竞争焦点将从纯文本 LLM 转向 MoE 架构与 VLM 模型的对齐。
2. **RL 向 PEFT (如 LoRA) 深度融合**：slime 补齐了 GRPO 算法的 LoRA 适配，随着基座模型参数量的膨胀，全参数更新 RL 的成本难以承受，RL + PEFT 的低成本对齐方案将成为开源框架的标配。
3. **评测与训练的闭环自动化**：Open Instruct 重构了底层评测提交逻辑，去除了 git/代码依赖。这释放了一个强烈信号：后训练时代的竞争力在于“生成-训练-跨环境评测”的极速周转率，纯训练框架正向全链路平台演进。

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

以下是为您生成的 slime 项目 RL 日报摘要（2026-04-27）：

### 1. 今日速览
过去 24 小时，slime (THUDM/slime) 仓库共处理了 **1 条 Issue** 和 **2 条核心 Pull Requests**，无新版本发布。项目动态主要聚焦于底层算法（SAPO）与训练范式的扩展，以及多模态大模型（VLM）在框架中的适配讨论。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[Question] qwen3-vl 转化与 VLM 适配** | [#1863](https://github.com/THUDM/slime/issues/1863)
  - **背景**：社区用户希望引入 qwen3-vl 系列模型进行训练，但发现当前 `slime/scripts/models` 缺少视觉语言模型（VLM）的相关配置参数，无法直接完成 HuggingFace 到 Megatron 格式的权重转换。
  - **分析**：该 Issue 反映出社区对 slime 扩展至多模态强化学习（Multimodal RL / VLM RL）的强烈需求，目前的转换管线仍主要围绕纯文本 LLM 展开。

### 4. 关键 PR 进展
- **增加 Megatron-Bridge LoRA 支持（针对 GRPO Actor 训练）** | [#1865](https://github.com/THUDM/slime/pull/1865)
  - **动态**：引入了首个基于 Megatron-Bridge 的 LoRA 路径，专门用于 slime 中的 dense GRPO（Group Relative Policy Optimization）Actor 训练。
  - **技术细节**：新增了 LoRA 命令行标识（CLI flags），在启动时校验配置，确保 PEFT LoRA 仅应用于 Actor 模型，并支持导出有效的 Adaptor 权重。此更新大幅降低了 RLHF/GRPO 阶段的显存开销。
- **新增 SAPO 策略损失目标** | [#1864](https://github.com/THUDM/slime/pull/1864)
  - **动态**：为 slime 引入了全新的策略损失函数 SAPO。
  - **技术细节**：在原有的 clipped PPO 基础上增加了 `--policy-loss-type sapo` 选项，并引入 `--sapo-tau-pos` 和 `--sapo-tau-neg` 参数来分别控制正负优势的 SAPO 门控。该 PR 为 RL 对齐提供了 PPO 之外的替代算法选择。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **探索突破 PPO 瓶颈的新算法**：随着 LLM 对齐技术的演进，传统 PPO 的稳定性与收敛性面临挑战。通过引入 SAPO 等新策略损失（[#1864](https://github.com/THUDM/slime/pull/1864)），slime 正在为 RL 社区提供更具鲁棒性的前沿算法基座。
2. **完善 RL 与高效微调（PEFT）的深度结合**：在超大参数规模下进行 RL 训练，全参数更新的成本不可忽视。PR [#1865](https://github.com/THUDM/slime/pull/1865) 补齐了 GRPO 算法下 Actor 模型的 LoRA 支持短板，验证了 Megatron-Bridge 在 RL 训练中的可行性，这对于推动大模型低成本 RL 训练具有直接的工程价值。
3. **高潜力的多模态 RL（VLM）演进方向**：从 Issue [#1863](https://github.com/THUDM/slime/issues/1863) 可以看出，用户正在自发尝试将最新的多模态模型接入 slime 的 RL 管线。目前处于需求爆发的前夜，该项目具备成为多模态对齐核心框架的潜力。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-04-27）：

# AReaL RL 日报摘要 (2026-04-27)

## 1. 今日速览
过去 24 小时内，AReaL 代码库保持高活跃度。共有 10 个 Pull Requests 获得更新，2 个 Issues 状态发生变更。开发重心高度聚焦于 **系统稳定性提升（NPU 兼容与内存/超时修复）**、**分布式训练指标修正** 以及 **Agent 推理与数据服务的解耦演进**。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 重点 Issues
- **[NPU 兼容性] `kl_ctl > 0` 导致训练崩溃 (已解决)**：[#1099](https://github.com/inclusionAI/AReaL/issues/1099)。在 Ascend NPU 环境下，开启 reference model (`kl_ctl > 0`) 进行 RL 训练时触发 HCCL 通信初始化错误。
- **[数据服务] 数据加载硬编码 60s 超时 (已解决)**：[#1264](https://github.com/inclusionAI/AReaL/issues/1264)。在处理大型数据集（如首次使用需下载预处理的 HuggingFace 数据集）时，网关硬编码的 `--forward-timeout` 导致加载超时报错。

## 4. 关键 PR 进展
### 核心缺陷与工程修复
- **修复 NPU 上 Reference Model 计算崩溃**：[#1254](https://github.com/inclusionAI/AReaL/Pull/1254) (Closed)。通过提前初始化 HCCL 子组解决 Issue [#1099](https://github.com/inclusionAI/AReaL/issues/1099)，修复了 NPU 上的 lazy communicator 机制引发的 `ref.compute_logp()` 崩溃。
- **修正 SFT 指标统计偏低**：[#1249](https://github.com/inclusionAI/AReaL/Pull/1249) (Open, Reviewed)。修复了 PR #1223 引入的回归问题，使 `sft/n_tokens` 等 metric 在 Context Parallelism (CP) 环境下保持正确，避免多卡重复计算导致指标被低估。
- **数据服务超时配置化**：[#1263](https://github.com/inclusionAI/AReaL/Pull/1263) (Closed)。引入 `setup_timeout` 配置（默认 120s），解决 Issue [#1264](https://github.com/inclusionAI/AReaL/issues/1264) 中的大数据集加载超时问题。
- **SFT 单控制器 Batch 分区回归测试**：[#1255](https://github.com/inclusionAI/AReaL/Pull/1255) (Closed)。针对此前修复的单控制器 SFT Batch 未切分（导致每步产生 `dp_size × tokens`）问题增加了回归测试。

### 架构与特性演进
- **Agent 与推理服务深度解耦**：[#1266](https://github.com/inclusionAI/AReaL/Pull/1266) (Open) & [#1226](https://github.com/inclusionAI/AReaL/Pull/1226) (Closed)。引入了面向 Runtime 的 Agent 服务 API，并提供了实验性的 Tau2 工作流（包含轻量级推理模式和完整 Agent-Service 交互模式）及基于 Qwen3-0.6B 的验证示例。
- **Megatron 引擎权重更新支持 EP**：[#1252](https://github.com/inclusionAI/AReaL/Pull/1252) (Closed)。为 Megatron 引擎添加了基于 Awex 的权重更新适配器，实现了完整的连接、更新、断开生命周期，并支持 Expert Parallelism (EP)。
- **推理代理陈旧会话清理**：[#1268](https://github.com/inclusionAI/AReaL/Pull/1268) (Open, 取代 [#1267](https://github.com/inclusionAI/AReaL/Pull/1267))。将 stale session 的 dump 和 RTensor 分片清理逻辑下沉至 `SessionStore.cleanup_stale`，保持主循环的轻量级委托。

### 社区动态
- **社区会议日期修正**：[#1262](https://github.com/inclusionAI/AReaL/Pull/1262) (Closed)。基于双周周六的排期规则，将即将召开的社区会议时间从 2026/05/01 (周五) 修正为 2026/05/02 (周六)。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **发力 Agent RL 基础设施**：从 Tau2 工作流及 Agent Service API 的连续迭代可以看出，AReaL 正在构建一套原生支持多步推理、异步与环境交互的 Agent RL 底层架构，精准踩中了 LLM 从单步对齐走向复杂环境交互的趋势。
2. **深度适配国产异构算力**：核心开发者正集中精力解决 Ascend NPU 上的 HCCL 通信与初始化痛点，展现出对混合异构集群训练的良好支持与工程打磨力度。
3. **为大规模 MoE/EP 模型铺路**：近期合并的 MegatronEngine EP 适配以及 Context Parallelism 指标的精细化修复，表明项目正在为超大参数量模型的 RLHF 铺设高性能、高吞吐的底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 RL 日报摘要（2026-04-27）：

# TRL 开源生态 RL 日报 (2026-04-27)

## 1. 今日速览
过去 24 小时内，`huggingface/trl` 仓库保持高活跃度。项目成功发布了包含重磅模型集成的 **v1.3.0** 版本，同时社区围绕核心算法的优化（如 GRPO 重要性采样、KL 散度梯度异常）展开了密集讨论，共产生 **1** 个版本发布，更新了 **3** 条 Issues 以及 **16** 条 Pull Requests。

---

## 2. 版本发布
- **[Release] v1.3.0** ([huggingface/trl v1.3.0](https://github.com/huggingface/trl/releases))
  - **核心特性**：全面集成并支持最新的 **Qwen 3.6** 系列模型（如 `Qwen/Qwen3.6-27B`、`Qwen/Qwen3.6-35B-A3B`）的训练。相关底层 Chat Template 解析逻辑已完成适配。

---

## 3. 重点 Issues
今日的 Issues 主要集中在特定模型架构的兼容性以及核心算法代码的实现细节上：

- **[#5646] DPOTrainer 多模态 Gemma 4 兼容性报错** ([huggingface/trl Issue #5646](https://github.com/huggingface/trl/issues/5646))
  - **摘要**：开发者报告 `DPOTrainer` 在处理多模态 Gemma 4 模型时，于 `tokenization_utils_base.py` 的 `pad` 阶段触发报错，暴露出 TRL 在前沿多模态大模型对齐时的边界兼容问题。
- **[#5645] PPOTrainer 的参数更新批次大小机制探讨** ([huggingface/trl Issue #5645](https://github.com/huggingface/trl/issues/5645))
  - **摘要**：社区对 `trl/experimental/ppo/ppo_trainer.py` 的代码逻辑提出疑问。当前 `optimizer.step()` 依赖于 `local_batch_size`（而非 `mini_batch_size`），开发者希望确认这是否符合预期的 PPO 算法设计。
- **[#5633] CI 流水线代码质量检查失败** ([huggingface/trl Issue #5633](https://github.com/huggingface/trl/issues/5633))
  - **摘要**：持续集成（CI）环境配置异常，找不到代码格式化检查工具 `ruff`，导致 PR 合并受阻。

---

## 4. 关键 PR 进展
今日 PR 动态呈现“闭门合并修 Bug，开新分支提特性”的趋势，算法优化是绝对核心：

### 算法与核心逻辑优化
- **[#5640] 修复 GRPOTrainer 中零标准差奖励组的伪 KL 梯度** ([huggingface/trl PR #5640](https://github.com/huggingface/trl/pull/5640))
  - **进展**：[OPEN] 修复了当 Group 内所有 completions 的 reward 相同时（std=0），advantage 为零但 KL 惩罚项依然产生无效非零梯度的问题。此修复对稳定 RLHF 训练十分关键。
- **[#5651 -> #5655] 引入句子级重要性采样** ([huggingface/trl PR #5655](https://github.com/huggingface/trl/pull/5655))
  - **进展**：[OPEN] 之前的尝试 (#5651) 已关闭，新 PR (#5655) 继续。为 GRPO 算法增加了中间粒度（句子级）的重要性采样，以支持最新的 LPO / Ling 2.0 训练范式。
- **[#5653] 修复 GKD 梯度累积损失缩放错误** ([huggingface/trl PR #5653](https://github.com/huggingface/trl/pull/5653))
  - **进展**：[CLOSED] 修复了通用知识蒸馏（GKD）在梯度累积场景下，局部有效 token 归一化计算不正确的 Bug。
- **[#5649] 新增 RLCR 格式与 Brier 校准奖励函数** ([huggingface/trl PR #5649](https://github.com/huggingface/trl/pull/5649))
  - **进展**：[CLOSED] 引入了 `rlcr_format_reward` 和基于置信度准确度的 `brier_score_reward` ($1 - (\text{confidence} - \text{correctness})^2$)，丰富了 TRL 的 Reward 函数生态。

### 模型兼容与工程化修复
- **[#5643 -> #5644] 修复 Gemma-3 的 `token_type_ids` 缺失问题** ([huggingface/trl PR #5644](https://github.com/huggingface/trl/pull/5644))
  - **进展**：[OPEN] 解决了 `GRPOTrainer` 在纯文本训练 Gemma-3 时未注入必需的 `token_type_ids` 导致的崩溃。
- **[#5642] Qwen3.6 底层模板适配** ([huggingface/trl PR #5642](https://github.com/huggingface/trl/pull/5642))
  - **进展**：[CLOSED] 配合 v1.3.0 发布，解决了 Qwen3.6 特有的 `preserve_thinking` 标志和工具字符串解析问题。

### 实验性特性 (Async GRPO)
- **[#5650 -> #5656] 异步 GRPO 强化与 GPU 显存分配文档** ([huggingface/trl PR #5656](https://github.com/huggingface/trl/pull/5656))
  - **进展**：[OPEN] 继 #5650 后，继续完善实验性的异步生成训练解耦管道，以应对大规模部署下的 rollout 瓶颈。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **快速跟进前沿模型架构**：发布 v1.3.0 并第一时间支持 Qwen 3.6，同时密集修复 Gemma 3/4 的兼容性问题。TRL 保证了开发者能在极短的时间内将最新的基座模型（甚至是 MoE 架构）应用于 RLHF/DPO 对齐流程。
2. **深水区的算法打磨**：从今日 PR 可以看出，项目正在解决“不起眼但致命”的底层算法 Bug（如零标准差下的伪梯度累积、GKD 的归一化分母错误），这标志着 TRL 的核心 RL 算法正在从“实现可用”向“大规模工业级数学严谨性”演进。
3. **探索 LLM 自我进化的训练范式**：引入句子级别的重要性采样以及 Brier 校准奖励，表明 TRL 正积极支持比传统 PPO/DPO 更复杂的在线强化学习路径（如 LPO 2.0、带置信度校准的自我奖励机制），这也是目前 LLM Post-training 领域最具想象力的技术突破方向。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-04-27)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库共产生 **0 条 Issues 更新**、**4 条全新 Pull Requests**，**无新版本发布**。项目当前处于功能完善与底层架构重构的活跃开发期，核心 PR 集中在去除 Deepspeed 依赖、强化多轮对话 SFT 兼容性以及明确奖励归一化边界等技术硬核方向。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issue。

## 4. 关键 PR 进展

- **#1226 [OPEN] 使用 Automodel 替换 Deepspeed 后端** 
  - **作者**: hijkzzz
  - **摘要**: 提议移除底层的 Deepspeed 引擎依赖，全面替换为 HuggingFace `Automodel` 原生架构。
  - **分析**: 这是今日最具影响力的架构级重构。大幅降低框架的底层心智负担和外部依赖，提升与 HF 生态的原生兼容性及部署灵活性。
  - **链接**: [OpenRLHF/OpenRLHF PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226)

- **#1227 [OPEN] 修复 Qwen3 思维模板的多轮 SFT Mask 问题** 
  - **作者**: taivu1998
  - **摘要**: 解决了在 Qwen3/DeepSeek 风格的思考模板中，多轮 SFT Assistant Masking 计算逻辑不一致的问题（关联 Issue #1080）。
  - **分析**: 精确修复了因部分对话前缀与完整 chat-template 渲染不一致导致的标签泄漏，对提升前沿复杂推理模型（如 Qwen3、DeepSeek）的 SFT 训练质量至关重要。
  - **链接**: [OpenRLHF/OpenRLHF PR #1227](https://github.com/OpenRLHF/OpenRLHF/pull/1227)

- **#1228 [OPEN] 为 Chat Templates 添加 SFT Tools 字段支持** 
  - **作者**: taivu1998
  - **摘要**: 允许在 SFT 阶段启用 `--data.apply_chat_template` 时，将行级别的 `tools` 字段透传至模板渲染逻辑中，覆盖全量对话和分段处理路径。
  - **分析**: 进一步完善了 Agent/Tool-use 场景下的对齐能力，补齐了 LLM 在函数调用时的指令微调支持。
  - **链接**: [OpenRLHF/OpenRLHF PR #1228](https://github.com/OpenRLHF/OpenRLHF/pull/1228)

- **#1229 [OPEN] 明确自定义奖励源的 Reward 归一化行为** 
  - **作者**: taivu1998
  - **摘要**: 明确界定 `--reward.normalize_enable` 仅作用于本地 reward-model 和 Critic 输出，对自定义函数、Agent 或 HTTP API 返回的预计算 reward 不生效，并加入了相应的 CLI 警告。
  - **分析**: 消除了高级 RLHF 训练中的一大隐患，防止开发者在使用外部奖励模型或 API 时因错误归一化导致的训练崩溃或策略偏移。
  - **链接**: [OpenRLHF/OpenRLHF PR #1229](https://github.com/OpenRLHF/OpenRLHF/pull/1229)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **底层引擎重构，顺应去 DS 化趋势**：PR #1226 试图移除厚重的 Deepspeed 依赖，标志着项目正在向更轻量、更易扩展的 HF 原生训练栈演进，将极大降低社区开发者二次开发与调试的门槛。
2. **敏捷跟进前沿模型特性**：随着具备深度思考能力的模型（如 Qwen3、DeepSeek-Coder-V2）成为主流，PR #1227 展现了项目对特殊 Token 序列和多轮 Mask 机制的快速响应能力，确保开源 RL 框架不掉队。
3. **深化 Agent 与 Tool-use 基建**：通过 PR #1228 对 SFT 阶段 `tools` 字段的支持，OpenRLHF 正在将传统纯文本对齐，平滑拓展至复杂智能体工作流的训练。
4. **严控 Reward 工程边界**：PR #1229 体现了核心维护者对 RL 训练细节的严苛要求。在混合奖励源（模型+API+自定义脚本）日益普遍的今天，明确算子作用域是防止训练出“病态模型”的关键防线。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报：2026-04-27

## 1. 今日速览
过去 24 小时内，verl (volcengine/verl) 仓库共处理 **2 条 Issues** 和 **19 条 Pull Requests**，无新版本发布。开发重心高度集中在**异步训练扩展、算法鲁棒性修复（Distillation/DAPO/GDPO/DrGRPO）以及硬件兼容性**上。

## 2. 版本发布
无。当前主分支仍处于高频功能迭代与问题修复阶段。

## 3. 重点 Issues
- **[#5949](https://github.com/verl-project/verl/issues/5949) [CLOSED] Fully Async 模式需支持 GenRM**
  作者：@shayansadeghieh
  **摘要**：指出 `FullyAsyncRollouter` 硬编码 `self.use_rm = False`，导致全异步管线无法使用生成式/判别式 Reward Model。此 Feature Request 已通过相关 PR 落地并关闭。

- **[#6152](https://github.com/verl-project/verl/issues/6152) [OPEN] Distillation 路径因 Ragged Tensor 维度假设崩溃**
  作者：@xiefan46
  **摘要**：此前 PR #6127 引入的 `nested_tensor_from_tensor_list` 强制假设 ragged 维度在最后一位（`dim=-1`）。这导致 `teacher_logprobs` (shape: `(batch, [seq_len], topk)` 且 `_ragged_idx=1`) 在知识蒸馏路径中触发张量拼接错误。属于典型的回归 Bug。

## 4. 关键 PR 进展
按技术模块分类，今日有大量高质量代码贡献：

### 🚀 核心算法与策略优化
- **[#6160](https://github.com/verl-project/verl/pull/6160) [one-step-off] 引入 DAPO 动态采样**
  为 one-step-off 策略训练器添加可选的 DAPO 风格动态采样累加器。
- **[#6155](https://github.com/verl-project/verl/pull/6155) [trainer] DAPO 动态采样带通过滤**
  支持保留特定指标区间内的 prompt 组（例如 `0.2 <= seq_reward <= 0.8`），替代原先仅有的二元 `{0, 1}` 硬过滤。
- **[#6159](https://github.com/verl-project/verl/pull/6159) [algo] 强化 GDPO 多奖励组件支持**
  解除了 GDPO 对硬编码双奖励的依赖，允许自定义奖励函数返回任意数量的奖励组件。
- **[#6157](https://github.com/verl-project/verl/pull/6157) [algo] 测试并锁定 DrGRPO Loss 语义**
  为 `seq-mean-token-sum-norm` 损失聚合行为添加了严格的 CPU 单元测试，保护梯度缩放语义不被破坏。

### ⚡ 训练架构：异步与全异步
- **[#6044](https://github.com/verl-project/verl/pull/6044) [CLOSED] 全异步支持 GenRM/DisRM**
  解除了全异步模式下 GPU-based Reward Model 的限制，支持部署独立的 Reward Model 服务。
- **[#6056](https://github.com/verl-project/verl/pull/6056) [fully_async] 支持在线策略蒸馏**
  将在线策略蒸馏 扩展至全异步训练模式。

### 🛠️ Bug 修复与鲁棒性提升
- **[#6149](https://github.com/verl-project/verl/pull/6149) [trainer] 修复非末位 Ragged 维度重建**
  修复 Issue #6152，利用 `_ragged_idx` 正确处理 `teacher_logprobs` 的拼接，挽救了 Distillation 路径。
- **[#6158](https://github.com/verl-project/verl/pull/6158) [trainer] 验证 Old Log-prob 旁路模式**
  在 `rollout_log_probs` 旁路中增加 Fail-fast 校验与文档说明。
- **[#6153](https://github.com/verl-project/verl/pull/6153) [fsdp/megatron] 修复 optimal_token_baseline 崩溃**
  修复了 `calculate_sum_pi_squared` 配置无效的死代码问题，使 `optimal_token_baseline` 优势估计器可用。

### 🔌 硬件兼容性与底层引擎
- **[#6150](https://github.com/verl-project/verl/pull/6150) / [#5933](https://github.com/verl-project/verl/pull/5933) [fsdp] 修复 autocast 硬编码 bf16 问题**
  修复 FSDP 引擎前向传播忽略用户 `param_dtype` 配置（如 fp16/fp32）的问题。
- **[#6148](https://github.com/verl-project/verl/pull/6148) [hardware] 非 Ampere 架构 GPU 兼容**
  在 HFModelConfig 中暴露 `attn_implementation` 接口，解决旧架构 GPU（如 Volta/Turing）的 Attention 后端报错。
- **[#6147](https://github.com/verl-project/verl/pull/6147) 兼容 vllm <= 0.8.2**
  增加导入保护，解决因 `run_headless` 缺失导致的 `ImportError`。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿 RL 算法的快速工程化**：verl 正在迅速吸纳并落地业界最新的 RLHF 后续算法（如 DAPO, GDPO, DrGRPO），且特别关注 Loss 聚合与动态采样的工程鲁棒性。
2. **高并发/高吞吐架构的演进**：从 PR 密集度可以看出，项目正将“完全异步” 作为核心发力点，不仅修复了历史遗留的 RM 限制，还成功引入了异步策略蒸馏。
3. **对底层计算资源的精细控制**：接连修复 FSDP 精度控制与旧款 GPU 硬件兼容性，表明 verl 正在注重“大集群规模化训练”与“消费级/旧集群复用”的双向打通，这对于降低 RL 研究门槛具有极高的实战价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-04-27 Open Instruct 强化学习生态日报摘要：

### 1. 今日速览
*   **Issues 更新**: 0 条
*   **PR 更新**: 2 条
*   **新版本发布**: 0 个
*   **整体状态**: 过去 24 小时内项目无新版本发布与新 Issue 提出，开发活动主要集中在底层训练框架的对齐验证与内部评测提交流程的优化。

### 2. 版本发布
*   **最新 Releases**: 无

### 3. 重点 Issues
*   **最新 Issues**: 过去 24 小时内无新增或更新的 Issue。

### 4. 关键 PR 进展
*   **PR #1620 [OPEN] - Match reference SFT run: olmo_core_finetune parity with pure olmo-core**
    *   **作者**: finbarrtimbers
    *   **摘要**: 旨在解决训练过程中的基准偏差问题。验证 `open_instruct/olmo_core_finetune.py` 的 SFT（监督微调）流程是否能与纯 `olmo-core` 产生完全一致的训练结果（Step-by-step parity），以排查并修复此前观察到的与参考实验（`01KNMEJKEZNJKZH9QWQW8CS0JW`）之间的差异。这对于保证框架底层训练的确定性至关重要。
    *   **链接**: [allenai/open-instruct PR #1620](https://github.com/allenai/open-instruct/pull/1620)
*   **PR #1638 [OPEN] - Add scripts/submit_eval_jobs_new.py**
    *   **作者**: finbarrtimbers
    *   **摘要**: 重构了模型评测任务的提交方式。新增了 `submit_eval_jobs_new.py` 脚本，绕过了原有的 `gantry/git ref` 依赖，直接通过 `beaker experiment create` 提交 `olmo-eval-internal` 评测任务。该脚本全面支持 Beaker dataset、Hugging Face Repo、Weka 路径及 Google Cloud Storage (`gs://`) 的模型读取，并自动写入 v2 spec YAML 配置，大幅提升了后训练的评测自动化程度。
    *   **链接**: [allenai/open-instruct PR #1638](https://github.com/allenai/open-instruct/pull/1638)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Open Instruct 表面上看似是一个 SFT 和对齐脚本的集合，但它在当前的 RL（特别是 RLHF/RLAIF）后训练生态中依然具有极高的跟踪价值：
1. **底层训练的确定性与可控性**: PR #1620 表明 Ai2 团队正在严格排查上层封装 (`open_instruct`) 与底层核心 (`olmo-core`) 之间的不一致性。在复杂的 RL 训练中，底层数据加载和梯度计算的微小偏差会导致策略梯度的崩溃或震荡，这种严格的 Parity 校验是构建稳定 RL 基础设施的关键。
2. **闭环评测基础设施的演进**: PR #1638 暗示了 RL 流程中最繁重的环节——**模型评测与 Reward Model 验证**正在走向更深度的自动化。支持多数据源（本地、云存储、HF）并直接对接 Beaker 集群，意味着更快的 On-policy Rollout 评测周转率，这对于迭代 PPO/DPO 等复杂 RL 算法具有直接的工程加速效应。

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

# RL 日报：Gymnasium 开源生态追踪 (2026-04-27)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于低活跃的日常维护状态。无新增 Issue 和版本发布，但合入了多个文档与 CI 维护相关的 Pull Requests，表明项目当前的重心在于提升文档的鲁棒性和生态链接的可靠性。

## 2. 版本发布
**无新版本发布。** 目前项目代码库保持稳定，最新代码仍停留在先前的稳定版本。

## 3. 重点 Issues
**无新增 Issues (共 0 条)。** 过去 24 小时社区未提交新的 Bug 报告或功能请求，侧面反映了核心 API 已经高度成熟且趋于稳定。

## 4. 关键 PR 进展
当前共有 3 个 PR 发生了状态更新，核心焦点集中在**文档生态扩充**与**链接有效性治理**：

*   **PR #1564 [CLOSED] - 新增 `linkcheck` CI 及全面修复 URL 问题**
    *   **作者:** pseudo-rnd-thoughts (项目核心贡献者)
    *   **摘要:** 这是一个关键的维护性 PR。继 #1562 暴露出死链问题后，该 PR 引入了 `sphinx linkcheck` 脚本和 GitHub Action，用于自动化检测文档失效链接，并批量修复了历史遗留的 URL 问题。此举大幅提升了官方文档的工程质量和长期可维护性。
    *   **链接:** [Farama-Foundation/Gymnasium PR #1564](https://github.com/Farama-Foundation/Gymnasium/pull/1564)

*   **PR #1563 [OPEN] - 更新第三方环境文档：新增 6-DoF 火箭 GNC 仿真环境**
    *   **作者:** zuorenchen
    *   **摘要:** 社区生态扩充。 PR 申请在 `third_party_environments.md` 中新增 **Balloon Popping Challenge** 环境。该环境实现了一个 6 自由度（6-DoF）的火箭制导、导航与控制（GNC）仿真任务。这反映了 Gymnasium 在复杂物理动力学和高维连续控制仿真领域的持续生态吸引力。
    *   **链接:** [Farama-Foundation/Gymnasium PR #1563](https://github.com/Farama-Foundation/Gymnasium/pull/1563)

*   **PR #1562 [CLOSED] - 修复 Gym 兼容性文档的死链**
    *   **作者:** LonelyGuy-SE1
    *   **摘要:** 修复了文档中导致 404 错误的无效链接，将其重定向至正确的兼容性说明页面（此单点修复直接促成了上述 #1564 的系统性链路治理方案）。
    *   **链接:** [Farama-Foundation/Gymnasium PR #1562](https://github.com/Farama-Foundation/Gymnasium/pull/1562)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Gymnasium 已是成熟的底层标准库，不再需要频繁的核心 API 变动，但它依然是整个强化学习开源生态的“第一公民”。
1. **生态基座的虹吸效应：** 从 PR #1563 可以看出，即便到了 2026 年，前沿的、复杂的动力学仿真（如 6-DoF 火箭控制）依然首选兼容 Gymnasium 的 API 规范。只要新的 RL 算法和环境不断涌现，Gymnasium 就是最底层的流量入口。
2. **极高的工程质量下限：** 从 PR #1564 中核心成员引入 CI 自动化 linkcheck 的行为可以看出，Farama Foundation 对项目质量的把控极其严格。这种在基础设施（文档鲁棒性、CI/CD 流程）上的持续投资，保证了它在学术界和工业界作为“事实标准”的可靠性与权威性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-04-27 PettingZoo RL 生态日报摘要：

# 🤖 RL 开源生态日报：PettingZoo
**日期**: 2026-04-27 | **项目**: [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活跃度集中在版本维护与依赖升级。项目成功发布了 `v1.26.0` 维护版本，处理了 3 个 Pull Requests，并新增了 1 个社区技术提问。整体状态显示项目正在进行现代化的依赖清理与向前兼容。

### 2. 版本发布
- **[Release v1.26.0]** [PettingZoo 1.26.0](https://github.com/Farama-Foundation/PettingZoo/releases/tag/1.26.0)
  - **核心变更**：
    1. **Python 版本支持**：正式添加了对 `Python 3.13` 和 `Python 3.14` 的支持。
    2. **架构解耦（重大变更）**：移除了长期处于弃用状态的 MPE（Multi-Agent Particle Environments）环境。MPE 环境已被独立拆分，现由 [MPE2](http://mpe2.farama.org/) 包进行独立维护。此举进一步精简了核心库的体积，符合 Farama 基金会“环境模块化”的工程演进方向。

### 3. 重点 Issues
- **[#1331] [[question] Is MaskablePPO supported for multiple agents?](https://github.com/Farama-Foundation/PettingZoo/issues/1331)**
  - **状态**: Open | **作者**: unleex
  - **摘要**: 社区用户询问 `MaskablePPO`（基于无效动作掩码的 PPO 算法）是否支持多智能体场景。这是一个非常典型的多智能体强化学习（MARL）算法与底层 API 结合的工程问题，值得依赖 PettingZoo 进行复杂离散动作空间开发的团队跟进关注。

### 4. 关键 PR 进展
- **[#1327] [CLOSED] Changes for release v1.26.0](https://github.com/Farama-Foundation/PettingZoo/pull/1327)**
  - **作者**: mwydmuch
  - **摘要**: v1.26.0 版本的正式合并 PR。除了版本号跃升和对 Python 3.13/3.14 的支持外，该 PR 还进行了一项关键的底层依赖替换：将不再维护的 `pygame` 替换为社区进化版 `pygame-ce`。增强了图形渲染后端的稳定性。
- **[#1330] [CLOSED] Bump version from 1.26.0 to 1.26.1](https://github.com/Farama-Foundation/PettingZoo/pull/1330)**
  - **作者**: virgilt
  - **摘要**: 针对刚发布的版本进行后续微调，版本号已预备向 `1.26.1` 推进，预计近期会有热修复或文档补充。
- **[#1329] [CLOSED] [dependencies, python] Bump ray from 2.7.0 to 2.55.0 in /tutorials/Ray](https://github.com/Farama-Foundation/PettingZoo/pull/1329)**
  - **作者**: dependabot[bot]
  - **摘要**: 自动化依赖升级，将教程目录中使用的分布式计算框架 `ray` 从 2.7.0 大幅跨代升级至 2.55.0。确保了 PettingZoo 教程与 RLlib 等现代分布式 RL 框架的最新 API 保持同步。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **最标准化的 MARL API**: PettingZoo 已经确立了其在多智能体强化学习中类似于 Gymnasium 的标准地位。其对 API 的严谨维护，使其成为目前开发可复现 MARL 算法最可靠的底层环境接口。
2. **紧跟底层生态的现代化演进**: 从今日的更新可以看出，项目团队在积极跟进 Python 新版本（3.13/3.14），并果断清理历史包袱（剥离 MPE、弃用旧版 pygame）。这种健康的维护状态保证了基于该框架的科研代码在未来几年内不会因底层依赖崩溃而失效。
3. **与算法栈的无缝集成**: Issue #1331 反映出社区正在积极将 PettingZoo 与前沿训练框架（如 RLlib/Ray、Maskable PPO 等）结合。如果你在进行多智能体、自博弈或大模型强化学习微调（RLHF/RLAIF）相关的研究，PettingZoo 依然是当前工程落地首选的“第一块积木”。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>