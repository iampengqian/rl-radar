# RL 开源生态日报 2026-05-04

> 生成时间: 2026-05-03 22:10 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现明显的“头部集中”与“场景分化”趋势。面向 LLM Post-training 的基础设施项目（TRL、verl、OpenRLHF 等）占据了绝大部分的社区活跃度与工程前沿探索；而传统纯 RL 算法库（CleanRL、SB3、Tianshou 等）则处于高度稳定的维护期，24小时内无动态。生态的重心已全面从“算法验证”转向“超大规模分布式训练优化”与“多模态/Agent 落地”。

## 各项目活跃度对比
以下仅统计过去 24 小时内具有实际动态的项目，无活动的项目（CleanRL, Gymnasium, PettingZoo, rl_games, ROLL, slime, Stable Baselines3, Tianshou, torchtune）均标记为 0。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 1 | 11 | 0 | VLM 显存深度优化，探索标准化外部环境交互 |
| **verl** | 1 | 4 | 0 | 修复关键指标计算 Bug，拓展全模态复杂架构 |
| **AReaL** | 1 | 2 | 0 | 依赖核心大版本升级，攻坚 RL 推理采样瓶颈 |
| **OpenRLHF** | 1 (Closed) | 0 | 1 | 极速修复 Qwen 3.5 等前沿模型权重兼容性 |
| **Open Instruct** | 0 | 1 | 0 | 降低 GRPO 算法硬件门槛，深化 DeepSpeed 适配 |
| **ROCK** | 0 | 1 | 0 | 打磨 Agent SDK 运行时鲁棒性，防止单点崩溃 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态与全模态强化学习的突破**：VLM（视觉语言模型）的 RL 训练已成标配。进一步地，BAGEL（Thinker + DiT 架构）在 verl 中的接入，标志着 RL 研究开始渗透到复杂的图像生成与多阶段推理领域。
2. **高效生成与推理优化**：AReaL 引入推测解码机制直击 RL 采样瓶颈，这代表了学界与工业界正在用系统工程手段（而非纯算法手段）来解决 RLHF 中 rollout 耗时过长的问题。

**工程/基础设施侧信号：**
1. **显存控制与异构算力压榨**：长序列/大参数模型训练的 OOM 问题依然是核心痛点。TRL 深入 NLL loss chunking 与非连续张量内存管理，Open Instruct 引入 CPU-Adam 卸载，均是为了在受限硬件上榨取更多算力。
2. **分布式指标的精准度量**：verl 修复了 PPO Loss 被错误放大数十倍的 Bug。这暴露出在大规模异构分布式训练中，Metrics 的准确性正成为调试的关键基准线。
3. **前沿基础模型（Qwen 3.5 / Liger Kernel）的零时差适配**：RL 框架正在与底层推理框架及新一代开源大模型保持极高频率的 API 对齐与破坏性变更重构。

## 差异化定位分析
- **TRL 与 OpenRLHF**：定位为最前沿的模型微调与对齐全家桶。TRL 在底层算子融合和标准化环境协议上走得极深；OpenRLHF 则以极快的新模型（Qwen 3.5）响应速度和开箱即用的 Hybrid Engine 见长，适合急需跟进最新基础模型团队的使用。
- **verl 与 AReaL**：定位于**极致的大规模分布式 RL Infra**。它们直面超大规模集群的通信痛点（如 Ray 底层数据拉取、TP/PP 并行挂起风险），适合拥有充足算力集群、需要从 0 到 1 搭建千卡级 Post-training 管道的工程团队。
- **Open Instruct**：定位于**中等算力下的实用型 RL 微调**。通过聚焦 DeepSpeed ZeRO 优化，致力于让 7B 级别的 GRPO 训练脱离昂贵的高端显卡，对算力受限的研究小组极为友好。
- **ROCK**：定位于**LLM Agent 的 RL 沙盒与环境基础设施**。不纠结于模型内部的 Tensor 计算，而是关注复杂环境下 Agent 运行时的稳定与隔离。

## 社区热度与成熟度
整体呈现“底层越深、迭代越猛”的态势。OpenRLHF 和 TRL 拥有极高的工程成熟度，能够在新模型发布后数天内完成 Bug 定位与版本发布。AReaL 与 verl 虽然面临极高的底层 Infra 挑战（如 NCCL 报错、PP 状态同步回归），但社区核心开发者均在积极重构核心逻辑。相比之下，传统 RL 生态库已进入成熟期的“静默”状态，API 高度稳定，无需频繁变更。

## 值得关注的趋势信号
1. **RL 向 Agent 基建演进**：TRL 实验性接入 Open Reward Standard (ORS) 协议、ROCK 持续优化沙盒环境。这释放了一个强烈信号：大模型 RL 框架正在从单纯的“给定 Reward 模型做参数更新”，转向“接入真实世界复杂 API/环境做 Agent 对齐”。
2. **算法与系统边界的模糊**：AReaL 使用推测解码加速 Rollout、TRL 深度融合 Liger Kernel 算子。未来的 RL 算法迭代将高度依赖甚至受制于底层分布式推理与显存管理的系统级创新。
3. **VLM 成为 RLHF 的默认考场**：纯文本的 RLHF 已经成为基线，针对视觉/多模态特征导致的 Loss 计算异常、张量内存溢出将成为下半年各大 RL 框架竞相解决的核心技术壁垒。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为你生成的 ROCK 项目 RL 日报摘要（2026-05-04）：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 项目整体处于平稳迭代期。无新增 Issue 和版本发布，核心代码动态集中在存量 PR 的推进上。今日共有 1 个 PR 更新。

### 2. 版本发布
- **最新 Releases**：过去 24 小时及近期均无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issue。社区反馈和问题追踪当前处于静默期。

### 4. 关键 PR 进展
- **[#652 fix(sdk): add runtime config type validation in PythonRuntimeEnv](https://github.com/alibaba/ROCK/pull/652)**
  - **状态**: `[OPEN]`
  - **作者**: KunWuLuan
  - **进展概述**: 该 PR 主要针对 SDK 中 `PythonRuntimeEnv` 的运行时配置增加了类型校验。根据 PR 提供的上下文日志摘要，此前环境工作进程（`EnvironmentWorker`）在初始化 `ModelService` 时存在因配置不当导致的崩溃风险（日志截断暗示了 `ERROR` 级别的异常）。此修复通过前置类型校验，有望提升沙盒环境中 Agent 启动阶段的鲁棒性。该 PR 自 3 月 19 日创建后，于昨日（5 月 3 日）有了新的代码更新动态。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **工程化与鲁棒性建设**：从 PR #652 可以看出，ROCK 团队正在持续打磨底层 SDK（特别是 `PythonRuntimeEnv` 和 `rock.sdk.sandbox.agent` 模块）。在强化学习任务中，环境采样进程（`EnvironmentWorker`）的稳定性直接决定了训练任务能否长时间挂机运行。加强类型校验和运行时配置验证，表明该项目正在向工业级的高可用标准演进。
- **大模型与 RL 的深度融合（Agent RL）**：日志中暴露的 `ModelService` 初始化环节印证了 ROCK 在处理包含大语言模型（LLM）的复杂 RL 环境方面的投入。在当前 LLM Agent 和 RLHF/RLAIF 生态爆发的背景下，能够提供稳定底层环境调度和沙盒执行能力的开源基础设施，具有极高的实用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-04 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库活动平稳，无新版本发布。社区新增 1 个关键回归 Bug 报告，2 个核心依赖升级与新特性 PR 更新活跃。当前项目重心聚焦于**大规模分布式训练的稳定性修复**以及**底层推理/训练框架的版本迭代**。

---

### 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

---

### 3. 重点 Issues
- **[#1298](https://github.com/inclusionAI/AReaL/issues/1298) [BUG] `clear_batches()` crashes non-DP-head ranks on TP/PP > 1 (regression from #1282)**
  - **提交者**: Adiactive
  - **分析**: 这是一个高优先级的回归 Bug。在张量并行 (TP) 或流水线并行 (PP) 大于 1 的多卡分布式训练场景下，非 DP-head 的 ranks 会在调用 `clear_batches()` 时引发崩溃。由于提交者已在 Docker 环境中多次稳定复现并排除了次要错误干扰，该问题大概率与 #1282 合并引入的分布式状态同步逻辑缺陷有关，可能直接影响大规模长上下文 RL 训练的集群稳定性。

---

### 4. 关键 PR 进展
- **[#1206](https://github.com/inclusionAI/AReaL/pull/1206) [high priority] chore(deps): upgrade megatron-core, sglang, vllm, transformers**
  - **提交者**: garrett4wade
  - **分析**: 这是 2026 年 4 月发布周期的核心依赖大版本升级。重点适配了 `megatron-core`、`sglang`、`vllm` 和 `transformers` 的破坏性 API 变更。该 PR 是维持 AReaL 计算吞吐量和底层兼容性的基础，目前处于 High Priority 状态。
- **[#1176](https://github.com/inclusionAI/AReaL/pull/1176) [WIP] feat: support Speculative Decoding by Sglang Eagle algo**
  - **提交者**: TaoZex
  - **分析**: 正在开发中的特性分支。计划基于 `sglang` 框架引入 Eagle 算法实现推测解码。此功能一旦合并，将显著提升 RL 训练中 Actor 的生成推理速度，从而整体加速 rollout 阶段的采样效率。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的 Infra 压榨与工程落地**：AReaL 并非纯粹的算法玩具，从 Issue #1298 可以看出其深度参与了大模型底层的 TP/PP 分布式并行调度。它直面并解决大规模集群 RL 训练中的各种工程硬骨头。
2. **紧跟 Open-Source 推理/训练前沿生态**：从 PR #1206 可以看出，项目与 `vllm`、`Sglang`、`Megatron-core` 等最主流的开源基础设施保持极高频的跟进与适配。
3. **RL 训练推理瓶颈的突破探索**：PR #1176 引入推测解码机制，直击 LLM RLHF/Post-training 阶段最耗时的生成采样瓶颈。这代表了当前 RL for LLMs 领域从“算法优化”向“系统工程优化”演进的核心趋势。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-04 RL 日报摘要：

# 📊 TRL 项目 RL 日报 (2026-05-04)

## 1. 今日速览
过去 24 小时内，TRL 仓库共有 **11 个 PR 和 1 个 Issue** 的活跃更新，**0 个**新版本发布。
从更新轨迹来看，当前开发重心高度聚焦于两个方面：一是**底层基础设施的重构与训练性能优化**（特别是 SFT 阶段的显存控制与 VLM 适配）；二是**实验性地拓展 RL 环境接入标准**，以增强生态兼容性。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **#5695 [OPEN] [experimental] OpenReward Standard environment adapter**
  - **作者**: adithya-s-k
  - **摘要**: 提议新增 `trl.experimental.openreward.OpenRewardEnv` 适配器。该特性旨在打通 TRL 与 [Open Reward Standard (ORS)](https://openrewardstandard.io) 协议的壁垒，允许任何带有 `environment_factory` 槽位的 TRL trainer（如 GRPO, RLOO 等）直接与兼容 ORS HTTP 协议的环境进行交互。
  - **链接**: [huggingface/trl Issue #5695](https://github.com/huggingface/trl/issues/5695)

## 4. 关键 PR 进展
今日的 PR 进展主要集中在 **多模态(VLM)训练修复、Liger-kernel GRPO 算法升级、代码重构与工程健壮性提升** 上。

### 🌟 生态与算法增强
- **#5696 [experimental] Add OpenReward Standard environment adapter**
  - 配套 Issue #5695 的具体实现代码，为 GRPO/RLOO 等 RL 算法接入外部标准环境提供轻量级适配器。
  - **链接**: [huggingface/trl PR #5696](https://github.com/huggingface/trl/pull/5696)
- **#5690 [GRPO] update Liger-kernel grpo loss (delta, vespo, KL bias correction)**
  - 同步升级 Liger Kernel v0.8.0，引入了双向裁剪、KL 偏差校正 和 Vespo 相关温度/参数配置，显著增强了 GRPO 算法在融合算子下的控制粒度。
  - **链接**: [huggingface/trl PR #5690](https://github.com/huggingface/trl/pull/5690)

### 🚀 训练引擎与显存优化 (SFT / VLM)
- **#5676 Enable chunked NLL loss with PEFT in SFT**
  - 支持在 SFT 中使用 PEFT（LoRA等）时开启分块 NLL loss 计算，有效控制长序列训练的显存峰值。
  - **链接**: [huggingface/trl PR #5676](https://github.com/huggingface/trl/pull/5676)
- **#5684 Enable chunked NLL loss with VLM in SFT**
  - 依赖于 #5676，将分块 NLL loss 的逻辑扩展至视觉语言模型 (VLM)，修补了相关的损失计算模块以确保梯度正确性。
  - **链接**: [huggingface/trl PR #5684](https://github.com/huggingface/trl/pull/5684)

### 🛠️ VLM 适配与模板修复
- **#5561 Revert VLM support in `parse_response`**
  - **重构**: 将 `parse_response` 恢复为纯粹的 tokenizer-only 接口，VLM processor 的解包逻辑上移至调用方。集中化管理，降低核心函数的复杂度。
  - **链接**: [huggingface/trl PR #5561](https://github.com/huggingface/trl/pull/5561)
- **#5560 Accept processor in `get_training_chat_template`**
  - 修复类型提示，正式支持在获取训练聊天模板时传入 `ProcessorMixin`，与实际调用逻辑对齐。
  - **链接**: [huggingface/trl PR #5560](https://github.com/huggingface/trl/pull/5560)
- **#5675 Add `&#123;&#37; generation &#37;&#125;` markers for Cohere2 chat template**
  - 专门为 Cohere2 模型架构更新了 Jinja 训练模板，修复了 prompt 渲染和 assistant-loss 掩码可能出现的异常。
  - **链接**: [huggingface/trl PR #5675](https://github.com/huggingface/trl/pull/5675)

### 🧹 工程化与底层重构
- **#5694 fix: prevent RuntimeError crash in activation offloading for non-contiguous tensors**
  - 修复了由于非连续张量 导致的激活卸载 RuntimeError 崩溃问题，提升了分布式训练的稳定性。
  - **链接**: [huggingface/trl PR #5694](https://github.com/huggingface/trl/pull/5694)
- **#5637 Refactor tiny-model generation scripts**
  - 将原本 437 行的单一巨型测试脚本拆分为按模型类别组织的独立脚本结构，大幅提升代码的可维护性。
  - **链接**: [huggingface/trl PR #5637](https://github.com/huggingface/trl/pull/5637)
- **#5638 Align tiny-Glm4MoeForCausalLM with GLM-4.5 reference config**
  - 修复测试用例，对齐 GLM-4.5 MoE 模型的参考配置（如 `attention_bias`, `eos_token_id` 等）。
  - **链接**: [huggingface/trl PR #5638](https://github.com/huggingface/trl/pull/5638)
- **#5678 Reduce inconsistency across trainer test files**
  - 测试代码规范化：统一命名约定（`parameters` -> `params`，文件重命名等），移除描述性的冗余注释。
  - **链接**: [huggingface/trl PR #5678](https://github.com/huggingface/trl/pull/5678)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿算法与高性能算子的快速融合**：从 PR #5690 可以看出，TRL 在紧跟大模型分布式训练需求，几乎与底层优化库（Liger Kernel）的新特性（如 bias correction、高级 clipping）保持同步迭代，保证了 RLHF 阶段的算力效率。
2. **对复杂架构及显存优化的深度攻坚**：针对当前业界极具挑战性的 VLM 强化学习与微调，TRL 并非简单套壳，而是深入到了 NLL loss chunking（#5676, #5684）和 tensor 连续性内存管理（#5694）层面，这对于突破大尺寸多模态模型的 RL 显存瓶颈至关重要。
3. **开放环境协议的探索**：Issue/PR #5695/5696 引入了 Open Reward Standard (ORS) 适配器，透露出 TRL 正试图超越单纯的“模型微调库”定位，向标准化的 RL 环境交互中心演进。这意味着未来基于 TRL 训练的 Agent 可能会极其便捷地接入各种复杂的真实世界 API 环境。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 强化学习生态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时，OpenRLHF 项目保持高频迭代，发布了最新的 bugfix 版本。社区层面，早期报告的 Qwen 3.5 模型权重加载与 VLM 训练严重错误已通过代码提交修复，并随新版本正式上线。今日无新增活跃 PR。

## 2. 版本发布
**[OpenRLHF v0.10.3](https://github.com/OpenRLHF/OpenRLHF/releases)** (发布于 2026-05-03)
本版本主要针对损失计算和特定模型的兼容性进行了关键修复：
*   **修复 Token 级别损失聚合**：提交 [`df78645`](https://github.com/OpenRLHF/OpenRLHF/commit/df78645) (作者: [@xiaoxigua999](https://github.com/xiaoxigua999))，优化了底层损失计算的准确性。
*   **修复 Qwen 3.5 权重加载问题**：提交 [`cb621db`](https://github.com/OpenRLHF/OpenRLHF/commit/cb621db) (作者: [@xiaoxigua999](https://github.com/xiaoxigua999))，解决了因权重缺失导致模型无法正确初始化的问题。
*   **依赖升级**：提升了 Ray 分布式计算框架的版本基线，以获得更好的底层性能与稳定性。

## 3. 重点 Issues
**[#1232 missing weight when loading from Qwen3.5](https://github.com/OpenRLHF/OpenRLHF/issues/1232) [CLOSED]**
*   **作者**: [RushDon](https://github.com/RushDon) | 👍: 0 | 评论: 1
*   **现象描述**: 用户在使用 `train_vlm_math_hybrid_engine.sh` 脚本训练 VLM（视觉语言模型）时，发现 Qwen 3.5 模型权重在 vLLM 引擎中更新后，生成的样本完全不可用（totally wrong）。
*   **追踪分析**: 报错日志显示出现了 `Qwen3_5ForConditionalGeneration` 相关的加载异常。这是一个典型的 RLHF/VLM 联合训练中的状态同步问题。该问题已被核心开发者锁定并在 v0.10.3 版本中通过 [`cb621db`](https://github.com/OpenRLHF/OpenRLHF/commit/cb621db) 彻底修复。

## 4. 关键 PR 进展
*   **过去 24 小时无更新 PR**。项目的最新代码变更已直接合入主分支并体现在 v0.10.3 的 release 中。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **极速的生态响应能力**：随着 Qwen 3.5 等前沿基础模型的发布，OpenRLHF 能够在几天内迅速响应并修复底层的权重加载兼容性问题（如 Issue #1232 的修复）。对于依赖最新开源模型进行对齐的研究团队而言，这种零时差的跟进能力极具价值。
2.  **聚焦 RLHF 工程化落地痛点**：本次修复的“Token 级别损失聚合”及“VLM hybrid engine 训练中的 vLLM 权重同步”问题，直击当前大模型强化学习（特别是多模态 RLHF）在工程落地中最棘手的精度和分布式同步痛点。
3.  **稳固的底层基础设施**：对 Ray 等分布式计算依赖的持续升级（Bump Ray version），表明该项目在致力于支持更大规模、更高并发的 Actor-Critic 集群训练，是构建高性能 RL 基建的重要保障。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 `verl` 项目 2026-05-04 RL 日报摘要：

### 1. 今日速览
过去 24 小时，`verl` 仓库共处理了 **4 个 Pull Requests**（其中 1 个缺陷修复被合并，3 个特性/优化 PR 持续推进），并新增了 **1 个 Issue**（分布式通信后端报错）。当前项目重心聚焦于底层性能优化（分布式数据传输）、多模态/全模态大模型 RL 训练生态扩展（BAGEL、VeOmni），以及 PPO 训练指标的精准度量。

---

### 2. 版本发布
- **最新 Releases**: 无新版本发布。

---

### 3. 重点 Issues
- **[#6237](https://github.com/volcengine/verl/issues/6237) [OPEN] - NCCL 与 CPU 设备后端类型冲突报错**
  - **作者**: chenyunsai
  - **摘要**: 用户在运行 PPO 训练主脚本 (`main_ppo.py`) 抛出底层通信后端初始化错误。错误信息显示出现重复的 CPU 设备类型推断（`cpu:gloo,cpu:nccl`），表明系统错误地将 `nccl` 后端分配给了 CPU，暴露出在多卡/异构分布式环境初始化时可能存在的设备解析漏洞。

---

### 4. 关键 PR 进展
- **[#5766](https://github.com/volcengine/verl/pull/5766) [CLOSED] - 修复 PPO Loss 指标虚高问题**
  - **作者**: dubin555
  - **摘要**: 修复了 `actor/pg_loss`、`actor/kl_loss` 和 `critic/vf_loss` 在日志中异常放大的 Bug。根本原因在于 #4711 引入的指标累加逻辑从基于列表变为了标量浮点计算，导致 loss 被错误地乘以了 `num_mini_batches × ppo_epochs` 倍。此 PR 均衡了大规模训练中的指标度量准确性。

- **[#6234](https://github.com/volcengine/verl/pull/6234) [OPEN] - 优化 DataProtoFuture 异步拉取机制**
  - **作者**: yurun00
  - **摘要**: 旨在提升分布式训练的数据传输性能。该 PR 移除了脆弱的 `collect_fn` 和 `dispatch_fn` 机制，引入基于原生分块逻辑（`start_fraction` 和 `end_fraction`）的延迟拉取。这大幅度增强了 `DataProtoFuture` 处理异构/分片 Future 数据的鲁棒性。

- **[#5947](https://github.com/volcengine/verl/pull/5947) [OPEN] - 引入 BAGEL 模型多阶段 RL Rollout 支持**
  - **作者**: timzsu
  - **摘要**: 基于 `vLLMOmniHttpServer`，实现了 BAGEL（thinker + DiT 架构）多阶段图像生成模型的 RL 采样支持。打通了 verl 的 Diffusion Rollout Pipeline，使其具备对复杂全模态模型进行 RLHF/RL 微调的能力。

- **[#6184](https://github.com/volcengine/verl/pull/6184) [OPEN] - 移除 VeOmni 的 Monkey Patch，适配原生 `log_probs` 返回**
  - **作者**: Luosuu
  - **摘要**: 优化了 VeOmni 引擎的底层代码。以往在使用 `use_fused_kernels=True` 时，`output.log_probs` 属性缺失会导致 FSDP 准备阶段崩溃。此 PR 清理了侵入式的猴子补丁，直接对接 VeOmni 原生的 `return_log_probs` 路径，提升了代码的整洁度与运行稳定性。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **向多模态及 Diffusion 渗透**：从 BAGEL（图像生成）和 VeOmni（全模态）的 PR 进展可以看出，verl 的 RL 框架边界正在迅速突破传统纯文本 LLM，演进为支持复杂架构（Thinker + DiT）的统一 RL 基础设施。
2. **深度压榨分布式性能**：对 `DataProtoFuture` 的重构优化，表明项目正在深入 Ray 底层和分布式通信层，解决大规模集群训练中的数据分流与吞吐瓶颈。
3. **工程严谨性持续提升**：修复关键 Loss 指标被放大的 Bug（#5766）以及清理 Monkey Patch（#6184），说明社区对大规模 RL 训练中的 Metrics 监控、以及代码工程规范有着极高的标准，这为算法工程师进行超参调优提供了可靠的数据基础。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-05-04）：

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体趋于平静，无新版本发布、无新增 Issues，仅有 1 条关于底层 GRPO 算法训练优化的 PR 进展。当前社区的核心驱动力集中在降低强化学习微调的硬件门槛上。

*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **Releases**: 0 个

---

### 2. 版本发布
**无**。近 24 小时内未发布新版本。

---

### 3. 重点 Issues
**无**。过去 24 小时未产生或更新任何 Issue。

---

### 4. 关键 PR 进展
今日唯一的动态围绕 GRPO（Group Relative Policy Optimization）训练范式的底层数据流与显存优化展开。

*   **[OPEN] Add use_cpu-adam CLI toggle and offload validation for GRPO** by Bhavyashah20
    *   **链接**: [allenai/open-instruct PR #1654](https://github.com/allenai/open-instruct/pull/1654)
    *   **关联 Issue**: Closes #1031
    *   **技术摘要**: 针对 GRPO 训练 7B 模型通常需要 40-80 GB VRAM 的痛点，该 PR 旨在增强对 DeepSpeed ZeRO 的支持。目前代码库中优化器被硬编码为 `torch.optim.AdamW`，导致在算力受限的设备上无法直接通过 CLI 调用 `DeepSpeedCPUAdam` 进行 CPU Offload。该 PR 添加了 `use_cpu_adam` 的 CLI 开关，并完善了相关的 Offload 验证逻辑，有效解决了研究人员在小显存硬件上必须手动修改源码才能跑通 RL 训练的问题。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 作为 Allen AI 维护的核心微调框架，其对 LLM 对齐和强化学习（RLHF/RLAIF）生态的贡献具有高度的实用性：
1.  **解决 RL 算力瓶颈**: GRPO 作为近期 RL 生态中替代传统 PPO 的高效算法，显著降低了 Reward Model 的依赖，但其显存占用依然是训练 7B+ 模型的门槛（如 PR #1654 提及的 40-80GB）。Open Instruct 正在快速迭代底层适配（如 DeepSpeed CPU Offload），使得 RL 训练在消费级或中等算力集群上成为可能。
2.  **训练范式的快速集成**: 项目紧跟 SOTA 研究进展，将持续学习的 RL 算法（如 DPO、GRPO）直接工程化、模块化。对于需要从零搭建 Post-training 管道的研究团队而言，它是不可多得的可直接投入生产或基线测试的开源基石。

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