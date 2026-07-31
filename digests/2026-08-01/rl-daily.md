# RL 开源生态日报 2026-08-01

> 生成时间: 2026-07-31 22:18 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出显著的**“两极分化与场景聚合”**特征。
一方面，面向大语言模型（LLM）及多模态模型对齐的 RLHF/RLAIF 框架（如 TRL, verl, AReaL）正处于高度活跃的架构演进期，全面承接大模型前沿训练的工程需求；另一方面，传统经典 RL（如 CleanRL, rl_games）则退守至“高质量基座”定位，重心转向极致吞吐量与底层算法的正确性维护。

## 各项目活跃度对比
在过去的 24 小时内，大模型 RL 框架主导了几乎全部的核心技术讨论与代码提交。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 18 | 33 | 0 | 全面重构蒸馏损失计算，加速向 Agentic RL 基础设施演进 |
| **verl** | 24 | 21 | 0 | 聚焦千卡级大规模训练底座优化与多模态/TPU 适配 |
| **AReaL** | 2 | 12 | 0 | 死磕超大模型（MoE/VL）的显存优化与单卡混部调度 |
| **CleanRL** | 0 | 1 | 0 | 维持极简架构，跟进 JAX 等前沿计算后端依赖的 CI 健壮性 |
| **OpenRLHF**| 0 | 1 | 0 | 推进 CLI 参数系统的现代化重构，提升易用性 |
| **rl_games**| 0 | 1 | 0 | 修复向量化环境自动重置导致的底层“脏数据”注入问题 |
| **slime** | 0 | 1 | 0 | 深度打磨 Dual-clip PPO 算法的底层参数透传缺陷 |
| 其他* | 0 | 0 | 0 | 生态静默期 |

*(注：其他包括 Gymnasium, Open Instruct, PettingZoo, ROCK, ROLL, Stable Baselines3, Tianshou, torchtune，过去 24h 内无活跃动态)*

## 共同关注的研究与工程方向
基于各框架的最新 PR 与讨论，当前大模型 RL 社区的发力点可清晰划分为研究侧与工程侧：

- **研究侧信号（算法与对齐机制）：**
  1. **高密度反馈与蒸馏**：针对稀疏奖励痛点（TRL #4759），业界正尝试引入步骤级监督强化学习 (SRL)；同时，在线策略蒸馏成为主流，AReaL 与 verl 均在发力多教师异步蒸馏机制（TCOD）与跨 Tokenizer 蒸馏。
  2. **对齐算法的稳定性**：为解决 PPO 训练中的策略崩溃与损失突变，自适应 Beta-DPO（TRL #6123）与 Dual-clip PPO（slime #2247）等改进型算法正被密集适配与调优。
- **工程/基础设施侧信号（显存与通信）：**
  1. **通信墙突破**：异步推理后端（vLLM/SGLang）的增量权重同步技术成为标配，包括基于 NCCL 的分片增量同步（verl）、LoRA 适配器零配置同步（TRL）以及 AWEX 单卡混部（AReaL）。
  2. **显存墙极限压榨**：针对超大词表模型 `(B, C, V)` 张量导致的 OOM，分块交叉熵损失计算（TRL）与 FP32 词表并行概率存储融合（AReaL）成为通用解法。

## 差异化定位分析
虽然 TRL、verl 和 AReaL 同属大模型对齐赛道，但三者已形成显著的差异化护城河：

- **TRL：敏捷与生态核心。** 作为 Hugging Face 旗舰项目，它以最快的速度消化最新算法（如 DPO 变体、Claude Code 等编码智能体训练示例），生态亲和力最强，是学术界和小微团队验证新思路的首选。
- **verl：深水区重器。** 它直面超大规模集群（千卡级）和超大参数模型（如 Qwen3-VL-235B）的严苛考验，解决的是 FSDP2/Megatron 桥接、端到端确定性训练、异构硬件（TPU/Ascend）适配等极具门槛的工业级难题。
- **AReaL：严谨的工业齿轮。** 聚焦于 Megatron 架构的深度定制与扩展，其在模型架构适配（无缝接入 DeepSeek-V3/GLM-5.1/Bailing MoE）以及分布式时序边界控制（Ragged transport 填充、权重版本防错读）上展现了极高的系统严谨性。

## 社区热度与成熟度
- **高频迭代与静默打磨并存**：TRL、verl 和 AReaL 表现出极高的社区热度和主干迭代频率（每日数十个 PR/Issue），属于尚未完全定型、处于激烈架构演化期的新兴核心设施。
- **经典项目的“高成熟度”**：CleanRL、OpenRLHF 和 rl_games 活跃度相对平缓。值得注意的是，它们的更新极其微观且硬核（如修复 Gym 1.x 的 reset 垃圾数据、修复 JAX CI 依赖、完善 CLI 层级解析）。这标志着这些项目已跨过狂飙期，进入了高度可靠的成熟维护阶段。

## 值得关注的趋势信号
1. **Agentic RL 闭环成型**：TRL 引入的沙箱环境与真实编码智能体训练脚本，预示着 RL 训练正从“偏好对齐”向“基于环境反馈的复杂长周期多轮 Agent 推理”迈进。
2. **大模型推理与训练后端的深度解耦**：基于在线 RL 的要求，“Actor 训练+ Rollout 异步推理”的边界正在重构。分离式 Rollout（如 verl 提出的分离式 Rollout roadmap）与动态 LoRA/分片权重同步，将成为未来主流 RLHF 框架的基础能力。
3. **经典底层 Bug 溢出效应**：如 rl_games 修复的 EnvPool 自动重置“脏数据”问题，侧面反映出在向量化高频交互下，传统 RL 算法工程实现中的隐蔽盲区依然存在，这类排雷对于多轮智能体 RL 环境构建具有重要参考价值。

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

**RL 开源生态日报：slime**
**日期**: 2026-08-01
**追踪仓库**: [THUDM/slime](https://github.com/THUDM/slime)

---

### 1. 今日速览
过去 24 小时内，[THUDM/slime](https://github.com/THUDM/slime) 仓库活动集中在底层算法的缺陷修复。无新增 Issues、无新版本发布，但核心贡献者提交了一项针对 **Dual-clip PPO** 损失计算的关键参数透传修复。

### 2. 版本发布
- **无**。本项目近期无新版本推流。

### 3. 重点 Issues
- **无**。过去 24 小时内未产生新的技术讨论或缺陷反馈，社区处于平稳期。

### 4. 关键 PR 进展
- **[#2247] [OPEN] fix: forward dual-clip PPO epsilon**
  - **作者**: alexqdh
  - **链接**: [THUDM/slime PR #2247](https://github.com/THUDM/slime/pull/2247)
  - **技术摘要**: 这是一个针对损失计算逻辑的硬核修复。在 Dual-clip PPO 算法路径中，由于下层函数 `compute_policy_loss` 缺少对双截断常数的接收，导致原本设定的 `args.eps_clip_c` 配置失效。该 PR 通过在 Policy Loss 计算路径中显式透传 `eps_clip_c=args.eps_clip_c` 参数，修复了 Dual-clip 机制的底层数学完整性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
在当前的强化学习（尤其是 RLHF/RLAIF 阶段）工程实践中，标准 PPO 常面临损失突变（Loss Spike）和策略崩溃的挑战，**Dual-clip PPO** 正是学术界和工业界解决此类痛点的核心方案之一。

尽管今日 slime 仓库的数据表面看似“平静”（无新 Issue/Release），但 PR #2247 透传了一个明确的信号：**项目维护者和社区贡献者正在深度打磨核心算法的底层细节**。这种针对具体算法参数（`eps_clip_c`）的精细化排障，对于保障复杂大模型 RL 训练的稳定性至关重要。持续关注 slime，可以借此洞察业界在 PPO 变体及大模型对齐算法实现上的最新工程解法。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-08-01)**

### 1. 今日速览
- **Issue 动态**：更新 2 条（1 条已关闭，1 条待解答）。
- **PR 动态**：更新 12 条（主要集中于底层显存优化、Rollout 调度修复与新版大模型架构适配）。
- **Release 动态**：过去 24 小时无新版本发布。

### 2. 版本发布
无。目前主干分支处于高频迭代期，核心代码库正在积极接收底层性能优化和跨架构适配的 PR。

### 3. 重点 Issues
- **[CLOSED] 跨 Tokenizer 在线蒸馏支持** ([#1451](https://github.com/inclusionAI/AReaL/issues/1451))
  - **摘要**：关于支持 Teacher 和 Student 模型使用不同 Tokenizer 进行在线蒸馏的 Feature 请求。该 Issue 已被关闭（ presumably 已在其他分支实现或合并解决），标志着 AReaL 在蒸馏工作流的灵活性上有所突破。
- **[OPEN] online RL-Hermes PPO Critic 模型训练疑问** ([#1543](https://github.com/inclusionAI/AReaL/issues/1543))
  - **摘要**：开发者对在线 RL 中单个样本仅记录一条轨迹情况下的 PPO Critic 模型初始化与训练机制提出疑问。这反映了社区对 AReaL 底层 PPO 算法具体实现细节（如 GAE 计算与优势估计）的深度关注。

### 4. 关键 PR 进展
今日的 PR 更新呈现出三大核心方向：**极致显存与调度优化**、**新型模型架构接入**、**训练准确性修复**。

- **性能与显存优化**
  - **[#1555](https://github.com/inclusionAI/AReaL/pull/1555)**：大幅降低 Megatron 训练时的显存峰值。通过融合 FP32 vocab-parallel 概率存储与 LM Head 反向传播，并引入分块 Loss，有效打破了超大词表模型的显存瓶颈。
  - **[#1500](https://github.com/inclusionAI/AReaL/pull/1500)**：引入基于 AWEX 权重传输的 Megatron Actor 与 SGLang Rollout 引擎**单卡混部（Colocate）**训练机制。这对于提升 RL 训练中的 GPU 资源利用率具有极高价值。
  - **[#965](https://github.com/inclusionAI/AReaL/pull/965)**：改进 FSDP 引擎，实现 Qwen3-VL-32B 等超大稠密模型的高效加载，避免初始化时的 OOM，并优化了 VLLM 的张量并行配置。

- **新型模型架构适配（Megatron-core）**
  - **[#1373](https://github.com/inclusionAI/AReaL/pull/1373)**：新增对 **GLM-5.1 / DeepSeek-V3 / GLM-4.7-Flash** 的双桥接（mbridge + megatron-bridge）支持。
  - **[#1372](https://github.com/inclusionAI/AReaL/pull/1372)**：为 **Bailing-MoE V2.5** 家族添加 NVIDIA `megatron-bridge` 适配器，增强混合专家模型的训练支持。

- **训练核心逻辑与稳定性修复**
  - **[#1569](https://github.com/inclusionAI/AReaL/pull/1569))**：修复了权重版本读取的时间差问题，防止 Rollout 阶段旧的权重版本被错误属性给新 Token，确保了在线 RL 权重同步的严谨性。
  - **[#1566](https://github.com/inclusionAI/AReaL/pull/1566))**与 **[#1563](https://github.com/inclusionAI/AReaL/pull/1563))**：针对语义压缩后导致的各 rank 微批次数量不均问题，修复了 Ragged transport 的填充逻辑，并允许安全地在不完整的 Group 数据上进行训练，避免了分布式训练中的挂起或崩溃。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻克 RL 训练的资源利用率痛点**：[#1500](https://github.com/inclusionAI/AReaL/pull/1500) 推动的 Actor-Rollout 单卡混部 以及 [#1555](https://github.com/inclusionAI/AReaL/pull/1555) 的显存峰值压缩，直击当前 RLHF 阶段“生成与训练切换导致大量显存浪费”的工程软肋。
2. **紧跟前沿大模型生态**：在短短几个月内，连续抛出对 DeepSeek-V3、GLM-5.1 以及 Bailing-MoE V2.5 等最新一代 MoE 和大参数模型的底层支持（[#1372](https://github.com/inclusionAI/AReaL/pull/1372), [#1373](https://github.com/inclusionAI/AReaL/pull/1373)），说明其 `megatron-bridge` 抽象具备极高的扩展性。
3. **对分布式时序与边界条件的严谨把控**：从 Rollout 权重版本对齐（[#1569](https://github.com/inclusionAI/AReaL/pull/1569)）到异构微批次填充（[#1566](https://github.com/inclusionAI/AReaL/pull/1566)），AReaL 在底层系统逻辑上处理了大量主流框架容易忽视的异步时序 bug，正在成长为一个工业级、高稳定的大规模 RL 框架。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-08-01 Hugging Face TRL 强化学习生态日报摘要：

### 1. 今日速览
- **时间**：2026-08-01
- **活动量**：过去 24 小时内共有 18 个 Issues 更新，33 个 PR 更新，社区活跃度极高。
- **版本发布**：今日无新版本发布。
- **核心趋势**：全面向显存高效的**分块知识蒸馏** 转型；深度完善 **vLLM 异步权重同步机制**（特别是针对 LoRA 适配器和 VLMs）；大量清理底层依赖（CI / Triton / PEFT）的废弃警告。

### 2. 版本发布
**无。** 项目当前处于高频主干迭代期，稳定版发布暂缓。

### 3. 重点 Issues
*   **[Bug] GRPO + vLLM 权重同步在 Qwen3.5 文本模型上失败** (#5269)
    *   **摘要**：使用 vLLM 0.17.0 配合最新 TRL 代码库进行 GRPO 训练时，报 `ValueError`，提示无法在 `Qwen3_5ForConditionalGeneration` 中找到名为 `model` 的模块或参数。
    *   **链接**：[huggingface/trl Issue #5269](https://github.com/huggingface/trl/issues/5269)
*   **[Bug] AsyncGRPOTrainer 无法训练视觉语言模型 (VLM)** (#6028)
    *   **摘要**：在 TRL 实验性的 AsyncGRPOTrainer 中，调用 `*ForConditionalGeneration` 架构的 VLM 权重同步时发生 Key 不匹配。阻碍了多模态模型与异步推理后端的结合。
    *   **链接**：[huggingface/trl Issue #6028](https://github.com/huggingface/trl/issues/6028)
*   **[Feature] 稳定 API：重构 DistillationTrainer** (#6449)
    *   **摘要**：鉴于近期大模型（Qwen3.x, DeepSeek-V4, GLM-5）普遍采用 on-policy logit 蒸馏，官方计划重构实验性的 `DistillationTrainer` 并将其提升为稳定 API，以取代现有的 5 个实验性 Trainer。
    *   **链接**：[huggingface/trl Issue #6449](https://github.com/huggingface/trl/issues/6449)
*   **[Feature] 推理链步骤级监督强化学习 (SRL)** (#4759)
    *   **摘要**：针对当前 GRPO 等算法存在的稀疏奖励问题，社区探讨引入步骤级训练机制，用于提升数学和逻辑推理任务的奖励信号密度。
    *   **链接**：[huggingface/trl Issue #4759](https://github.com/huggingface/trl/issues/4759)

### 4. 关键 PR 进展
*   **[Distillation 重构系列] 引入显存高效的分块 JSD 损失** (#6526, #6530, #6537)
    *   **摘要**：为了解决蒸馏过程中 `(B, C, V)` 级别 Logit 爆显存的问题，连续提交了 3 个 PR。通过镜像 SFT 的 `_chunked_cross_entropy_loss`，重写了底层损失计算路径，并移除了旧的 full-logit 损失函数，净删减 74 行代码。
    *   **链接**：[PR #6526](https://github.com/huggingface/trl/pull/6526), [PR #6530](https://github.com/huggingface/trl/pull/6530), [PR #6537](https://github.com/huggingface/trl/pull/6537)
*   **[vLLM 适配] 零配置的 LoRA Adapter 自动权重同步** (#6007)
    *   **摘要**：对于在线 Trainer + PEFT LoRA 场景，不再将 Adapter 合并进 Base Model 进行全量参数传输，而是**仅同步 LoRA 适配器权重**。大幅提升训练步速度，且对开发者零配置透明。
    *   **链接**：[huggingface/trl PR #6007](https://github.com/huggingface/trl/pull/6007)
*   **[Agent 生态] 新增 Claude Code 与 Pi 编码智能体 GRPO 训练示例** (#6600, #6601)
    *   **摘要**：为真实的编码智能体（如 Claude Code）添加了 loop-owning GRPO 训练脚本。支持本地子进程沙箱和远程 HF 沙箱环境，标志着 TRL 正式向 Agentic RL 训练基础设施演进。
    *   **链接**：[huggingface/trl PR #6600](https://github.com/huggingface/trl/pull/6600), [huggingface/trl PR #6601](https://github.com/huggingface/trl/pull/6601)
*   **[DPO 优化] 实现 Adaptive Beta-DPO** (#6123)
    *   **摘要**：将固定的 β 参数替换为基于 Batch 数据自适应缩放的 β 算法（参考论文 arXiv:2407.08639），以提升对齐稳定性和最终策略质量。
    *   **链接**：[huggingface/trl PR #6123](https://github.com/huggingface/trl/pull/6123)

### 5. 为什么值得继续关注？
TRL 正在精准打击当前大模型 RL 训练的三大痛点：
1. **显存墙**：通过切块蒸馏、自适应 LoRA 同步、独立截断（CPO/ORPO）等底层重构，极限压榨硬件利用率。
2. **复杂模态支持**：正在全力修复 VLM（视觉语言模型）在 `AsyncGRPO` 框架下的推理后端权重同步阻碍，一旦打通，将大幅降低多模态 RLHF 的工程门槛。
3. **迈向 Agentic RL**：新增的 Claude Code 等智能体训练闭环示例，证明了 TRL 具备支撑“代码执行环境反馈 -> 奖励计算 -> 策略更新”这一复杂长周期 RL 训练的潜力。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 开源生态日报：OpenRLHF (2026-08-01)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体活动趋于平缓。无新增 Issue、无新版本发布。核心进展集中在代码库的易用性维护上：社区贡献者提交了 1 个文档修复 PR，解决了因底层参数解析模块重构导致的 README 命令行指令过时问题。

🔗 仓库链接: [github.com/OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

## 2. 版本发布
**无**。
过去 24 小时内未发布新版本。

## 3. 重点 Issues
**无**。
过去 24 小时内未产生新的 Issue 讨论或更新。

## 4. 关键 PR 进展
今日共有 1 个活跃 PR，主要聚焦于 CLI（命令行接口）的准确性修复：

- **PR #1275 [OPEN] docs: fix stale CLI flags in README (SFT/RM/PPO commands)**
  - **作者**: latent-9
  - **更新时间**: 2026-07-31
  - **技术摘要**: 
    OpenRLHF 近期将 CLI 迁移至层级化的点命名空间 `argparse`（具体实现在 `openrlhf/utils/config.py` 的 `hierarchize()` 函数中），并同步更新了 `examples/scripts/*.sh`。但 README 中的三个内联代码块（涉及 SFT/RM/PPO 命令）仍保留了旧版/错误命名空间的 flags。由于所有入口点均强制调用 `parser.parse_args()`，这会导致用户如果直接复制 README 中的指令，会在命令解析阶段直接抛出阻断性错误。该 PR 旨在同步这些文档指令。
  - **链接**: [OpenRLHF/OpenRLHF PR #1275](https://github.com/OpenRLHF/OpenRLHF/pull/1275)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层重构演进积极**：从今日的 PR 可以看出，项目团队正在积极进行底层架构的现代化重构（如引入 `hierarchize()` 优化复杂的 CLI 参数管理）。这表明 OpenRLHF 在应对日益复杂的 PPO/RM/SFT 等混合训练参数时，正不断优化其代码基座的健壮性。
2. **RLHF 训练基础设施的核心枢纽**：作为基于 Ray、DeepSpeed 和 vLLM 构建的高性能 RLHF 框架，OpenRLHF 有效解决了大模型对齐阶段的显存与算力瓶颈。在当前大模型竞争聚焦于“对齐质量”的生态下，它依然是工业界和学术界进行 SFT、RM、PPO 乃至 DPO 训练的首选基础设施之一。
3. **活跃的工程化打磨**：即便是处于功能发布间的静默期，社区依然有针对关键用户触点（如 README 核心指令）的精细化修复，体现了项目较高的工程严谨性和社区响应速度。

---
*分析数据截止至：2026-08-01*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl RL 生态日报 (2026-08-01)**

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **24 条 Issues** 与 **21 条 PRs**，无新版本 Release 发布。从更新动态来看，当前社区核心关注点集中在 **FSDP2/Megatron 大规模训练底座的 Bug 修复**、**Agent Loop 异步机制的完善**、**多硬件适配（TPU/Ascend）** 以及 **训练性能与确定性优化**。

### 2. 版本发布
*   无新版本发布（0 Releases）。

### 3. 重点 Issues
**【训练与性能底座】**
*   **[Bug] Qwen3-MoE 在 FSDP2 下 backward 失败**：Qwen3-30B-A3B 在 FSDP2 引擎下首个 `update_actor` 反向传播必现崩溃（开启梯度检查点报 `CheckpointError`，不开启则原生 worker 崩溃），但 FSDP1 运行正常。
    👉 [Issue #7016](https://github.com/volcengine/verl/issues/7016)
*   **[Bug] 确定性训练端到端测试未通过（非 bitwise-aligned）**：新引入的完全确定性 RL 训练特性未能通过 E2E 测试，从 step 2 开始出现计算结果不对齐问题。
    👉 [Issue #7216](https://github.com/volcengine/verl/issues/7216)
*   **[性能探讨] Qwen3.5-9B 多模态 GRPO 训练速度**：在 Geo3K 数据集上使用 SGLang rollout + Megatron + 8×H800，稳态耗时约 290s/step，开发者寻求进一步的性能压榨空间。
    👉 [Issue #7203](https://github.com/volcengine/verl/issues/7203)
*   **[Bug] Step 模式断点续训提前退出**：由于 Epoch 循环限制，导致 Step 模式下断点续训会无声息地提前退出，开发者已给出修改建议。
    👉 [Issue #5013](https://github.com/volcengine/verl/issues/5013)

**【Agent Loop 与算法机制】**
*   **[Bug] On-policy 设置下 `log_prob` 与 `old_log_prob` 不一致**：当按照官方推荐设置 `rollout` 与 `actor` 的 micro-batch 大小关系时，即使在纯 on-policy 场景下两者仍存在差异，可能影响 PPO/GRPO 精度。
    👉 [Issue #6280](https://github.com/volcengine/verl/issues/6280)

**【Roadmap 与 RFC】**
*   **[RFC] TCOD: 多轮 Agent On-Policy 蒸馏的时间课程**：论文作者提议将 TCOD（Temporal Curriculum for Multi-turn Agent On-Policy Distillation）引入 verl，基于现有的 OPD 核心构建多教师异步蒸馏。
    👉 [Issue #6552](https://github.com/volcengine/verl/issues/6552)
*   **[Tracking] 分片 Delta 权重同步 (`delta_sharded`)**：追踪已合并的基于 NCCL 的分片增量权重同步机制，持续推进分离式 Rollout 的 roadmap。
    👉 [Issue #7060](https://github.com/volcengine/verl/issues/7060)

### 4. 关键 PR 进展
**【功能增强与新特性】**
*   **[重大] 新增 TPU 设备的 SFT 支持**：基于 TorchTitan 执行引擎和静态序列打包，verl 正式补齐了在 Google TPU 硬件上的有监督微调（SFT）能力。
    👉 [PR #7212](https://github.com/volcengine/verl/pull/7212)
*   **[基础设施] 集成 uv 包管理器**：为 vLLM、SGLang × FSDP、Megatron 等不同后端组合引入极快的 Python 包管理工具 `uv` 支持。
    👉 [PR #7127](https://github.com/volcengine/verl/pull/7127)

**【核心机制与 Bug 修复】**
*   **[Breaking] FSDP 选择性权重衰减**：修复此前 FSDP 优化器对所有参数统一应用权重衰减的问题，新增默认 `standard` 策略，自动屏蔽 bias 和 norm 层参数。
    👉 [PR #7215](https://github.com/volcengine/verl/pull/7215)
*   **[修复] 修复 Agent Loop 异步奖励元信息丢失**：将 `validate` 标志正确传播并附加到异步奖励的 `meta_info` 中，修复自定义奖励函数无法识别验证集数据的问题。
    👉 [PR #7217](https://github.com/volcengine/verl/pull/7217)
*   **[修复] 清理本地 Checkpoint 逻辑优化**：修复 `del_local_ckpt_after_load` 未正常删除已加载检查点的问题，引入双重同步机制防止 rank 间的竞态条件。
    👉 [PR #7214](https://github.com/volcengine/verl/pull/7214)
*   **[优化] Rollout 中断恢复时的 Token 预算限制**：修复部分 Rollout 中断恢复时，生成 Token 数量可能超过 `response_length` 上限导致计算浪费及延迟的问题。
    👉 [PR #7207](https://github.com/volcengine/verl/pull/7207)

### 5. 为什么在当前 RL 生态值得持续关注？
1.  **大模型对齐的最前沿试验田**：verl 正在快速消化并修复极大规模模型（如 Qwen3-VL-235B、Qwen3-MoE）在 RLHF/GRPO 中的 OOM、FSDP2 兼容性及 Megatron 桥接问题，这是其他轻量级 RL 框架难以覆盖的工程深水区。
2.  **多模态与 Agentic RL 的深度耦合**：通过 `agent_loop` 的持续重构（如异步奖励机制的修正），以及针对多模态 MRoPE 计算、Video 输入的适配，verl 正在成为复杂多轮 Agent 训练的基准设施。
3.  **软硬协同的极致性能压榨**：从 TPU SFT 引擎支持、NPU CI 体系建设，到通过 NCCL 优化 Delta 权重同步带宽、NeoProto 数据平面引入，verl 团队在“千卡级 RL 训练”的通信与显存优化上展现了极强的统治力。

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

以下是为您生成的 2026-08-01 CleanRL 项目日报摘要：

### 1. 今日速览
截至 2026-08-01，CleanRL 仓库整体活跃度趋于平稳，以底层依赖维护为主。过去 24 小时内，无新增 Issues，无新版本发布，仅有 1 项针对 JAX 依赖环境的关键 PR 更新。

### 2. 版本发布
- **今日发布**：无。

### 3. 重点 Issues
- **今日更新**：0 条。
- **分析**：项目目前未出现阻碍用户使用的突发性 Bug 报告或重大功能需求，运行态势稳定。

### 4. 关键 PR 进展
- **#554 [OPEN] fix: refresh jax extra dependency pins**
  - **作者**: Mr-Neutr0n
  - **更新日期**: 2026-07-31
  - **链接**: [vwxyzbahn/cleanrl PR #554](https://github.com/vwxyzbahn/cleanrl/pull/554)
  - **技术摘要**: 该 PR 旨在修复 JAX 环境的依赖锁死问题。由于旧版本依赖（如 `jaxlib==0.4.7` 等）已无法在当前镜像源中正常解析，直接导致项目的持续集成（CI）在进入实质性 JAX 测试前即发生构建中断。作者提出此修复请求以刷新这些版本锁定，确保基于 JAX 的 RL 算法测试链路畅通。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据表现平淡，但 PR #554 恰恰反映了 CleanRL 在当前强化学习开源生态中的核心价值：
- **严苛的 CI/CD 标准保障代码质量**：CleanRL 以“单文件实现一个完整算法”著称，其强依赖 CI 来保证数十种 RL 算法（PPO, SAC, DQN 等）的正确性与可复现性。作者对底层依赖版本（如 JAX 生态）的及时拦截和修复，体现了项目对环境健壮性的极高要求。
- **紧跟现代 RL 计算后端演进**：在 RL 框架日益庞大、黑盒化（如 RLlib, Stable-Baselines3）的趋势下，CleanRL 始终保持对前沿计算后端（包括最新的 JAX/Flax 生态）的无缝支持。这种极简主义与高性能计算并重的设计，使其始终是 RL 研究者进行算法魔改、消融实验和学术复现的首选基座。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026-08-01 RL 开源生态日报摘要：

# RL 日报：rl_games 生态追踪 (2026-08-01)

**项目地址**: [github.com/Denys88/rl_games](https://github.com/Denys88/rl_games)

## 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库动态趋于平缓，无新增 Issue、无新版本发布。唯一的活跃动态集中在核心算法的正确性修复上：PR #362 于昨日（07-31）获得了更新。总体来看，项目当前处于维护与底层代码打磨阶段。

## 2. 版本发布
- **今日更新**：无。
- 当前未观测到最新的 Release 版本流出版。

## 3. 重点 Issues
- **今日动态**：0 条。
- 无新增或更新的 Issue，暂未发现社区用户反馈新的 Bug 或 Feature Request。

## 4. 关键 PR 进展
今日的核心技术更新聚焦于 PPO 算法在向量化环境下的数据清洗：

- **[PR #362] [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
  - **作者**: ViktorM
  - **链接**: [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
  - **技术摘要**: 本 PR 旨在修复 next_step-autoreset 机制（常见于 EnvPool 和原生 Gymnasium 1.x 向量化环境）中的“脏数据”注入问题。此前，环境重置时的废弃时间步（包含被忽略的动作、填充的 reward 以及上一回合终止时的 obs）会被错误地作为真实训练数据混入 PPO 的 rollouts 中。本 PR 通过引入掩码机制剔除这些垃圾数据行，同时还增加了标量 sigma 参数化功能。这是提升底层算法训练纯度与收敛稳定性的关键修复。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层算法正确性的“排雷兵”**：随着 Gymnasium 1.x 和 EnvPool 等高性能向量化环境的普及，环境自动重置导致的数据错位是当前 RL 工程实践中隐蔽且致命的痛点。[rl_games](https://github.com/Denys88/rl_games) 正在积极跟进（如 PR #362 及其 SAC 阶段的修复），保障了高频交互下训练数据的纯粹性。
2. **极致的吞吐性能**：作为 NVIDIA Isaac Gym / Isaac Lab 生态系统中事实上的标准基线 RL 库之一，rl_games 以高度优化的 PyTorch 算子著称，始终是大规模 GPU 并行强化学习（尤其是机器人控制领域）的标杆项目。

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