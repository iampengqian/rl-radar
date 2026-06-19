# RL 开源生态日报 2026-06-20

> 生成时间: 2026-06-19 22:16 UTC | 覆盖项目: 15 个

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
当前（2026年中）开源强化学习（RL）生态呈现明显的分层演进态势：**LLM 驱动的 RLHF/Agentic RL 框架占据了 90% 以上的热度与前沿创新**，而传统 RL 基础设施则步入极度成熟的维护期。
- **第一梯队（LLM 专用 RL 框架）**：以 HuggingFace **TRL**、字节 **verl**、清华 **slime** 和阿里 **AReaL** 为主战场，核心围绕大模型对齐、多模态接入、超大规模分布式训练进行疯狂迭代。
- **第二梯队（稳健打磨型框架）**：**OpenRLHF** 等项目在 PPO 和复杂场景的细节工程上保持精准修整。
- **第三梯队（传统/经典 RL 基座）**：**Stable Baselines3 (SB3)** 聚焦底层安全与可靠性；而 **CleanRL、Gymnasium、Tianshou** 等传统 RL 库或环境生态进入静默期，无明显代码活动。

## 各项目活跃度对比
今日的代码提交与讨论高度集中于头部 LLM RL 项目，反映了生态向大模型收敛的现状。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 17 | 53 | 0 | 深度重构底层架构，全面拥抱 vLLM 与 Agentic GRPO |
| **verl** | 13 | 3 | 0 | 扩展 Agentic 与多模态能力，攻坚全异步集群调度 |
| **slime** | 3 | 4 | 0 | 修复混部架构下的底层通信异常与权重同步静默 Bug |
| **AReaL** | 2 | 1 | 0 | 收尾多轮对话轨迹处理与底层技术债务清理 |
| **OpenRLHF** | 0 | 1 | 0 | 优化多轮 Agent 场景下的 PPO 长度惩罚精度 |
| **SB3** | 0 | 1 | 0 | 底层安全加固，将反序列化安全加载设为默认行为 |
| 其他项目 | 0 | 0 | 0 | 传统 RL 环境与算法库处于技术沉淀与稳定维护期 |

## 共同关注的研究与工程方向
通过对 TRL、verl 等高频迭代项目的抽丝剥茧，当前 LLM 强化学习的前沿探索已明确分化为算法研究与系统工程两条主线：

**研究侧重心信号：**
- **Agentic RL（智能体强化学习）的全面爆发**：从单轮偏好对齐转向多轮工具调用与环境交互。例如 verl 引入 Continuous Token 保持多轮上下文状态；AReaL 与 OpenRLHF 死磕多轮场景下的 `loss_mask` 过滤与轨迹切分。
- **算法稳定性的精细化控制**：解决复杂场景下的训练崩溃问题。如 TRL 引入 Adaptive β-DPO 应对偏好数据的分离度差异，修复 PPO 中 Padding Token 导致的假性负熵现象。

**工程/基础设施侧重信号：**
- **异构集群与全异步通信调度**：突破训练与推理（Rollout）的串行阻塞。verl 优化全异步 Rollouter 空闲率；slime 重试混部模式下 Ray Actor 的瞬时不可用异常。
- **权重同步与显存通信的极限榨取**：千亿参数模型训练的核心瓶颈。slime 修复增量同步的静默失败；AReaL 演进可靠数据传输（RDT）机制；TRL 推进原生 vLLM 同步并利用 Chunked Loss 降低 FSDP2 环境下的 All-gather 通信峰值。

## 差异化定位分析
在 LLM RL 这个红海赛道，第一梯队项目已逐渐打磨出各自的差异化护城河：
- **TRL (HF)**：**最敏捷的学术与工程试验田**。作为社区正朔，它跟进 β-DPO、Chunked Loss 等最新 Paper 的速度极快，且在推进与 HuggingFace transformers 生态及 vLLM 的原生深度绑定。
- **verl (字节)**：**挑战千卡集群极限的工程巨兽**。直接对标 Qwen3-235B 等超大参数模型的分布式蒸馏与训练，致力于解决 Ray worker 下的多机多卡资源拉扯，极具工业级吞吐量导向。
- **slime (清华)**：**高容错的 Train-Inference 混部专家**。深度解耦 SGLang 等推理引擎，核心精力投入在解决混部模式下的心跳丢失、状态恢复与底层内存重置，追求极高可用性。
- **OpenRLHF & AReaL**：**工业级生产环境的基石**。相比堆叠新算法，它们更关注多轮对话 token 统计的准确度、版本追踪（RLE编码）等底层逻辑的极度鲁棒。
- **SB3**：**非 LLM 领域的定海神针**。在不盲目跟风大模型的同时，守住安全底线（如防 RCE 漏洞），作为机器人/游戏 AI 生态的最稳定基座。

## 社区热度与成熟度
- **TRL 与 verl 构成双核驱动**：TRL 以极高的 Issue 吞吐量（17条）和 PR 生成（53条）展现出旺盛的社区生命力；verl 则吸引大量企业级工程师探讨多机部署 OOM 等硬核痛点。两者均已达到高度成熟且活跃的工业级标准。
- **slime 处于快速爬坡期**：通过密集修复 SGLang 适配 Bug 和接入前沿 MoE/VL 模型，社区活力正在快速爆发，处于工程稳定性攻坚的关键阶段。
- **长尾与经典项目步入“无菌室”状态**：OpenRLHF、SB3 甚至无活动的 Gymnasium 等项目，并非失去价值，而是代表了其核心架构设计已经冻结，达到了无需频繁变更即可稳定输出的**高成熟度阶段**，更偏向于被其他上游项目作为隐式依赖调用。

## 值得关注的趋势信号
1. **Agentic 多轮交互成为下一代 RLHF 框架的分水岭**：单纯的无状态文本生成 RLHF 已是过去式，谁能最完美地解决多轮工具调用中的上下文保持、长度惩罚（如 OpenRLHF PR）和奖励稀疏问题，谁就能统治下一阶段的 Agent 训练框架。
2. **推理引擎（vLLM/SGLang）的耦合程度决定框架存活率**：无论是 TRL 拥抱 vLLM 原生 API，还是 slime 被不同 SGLang 版本的 MoE 缺陷所困扰，都释放出一个强烈信号——RL 框架的成败越来越取决于其对底层推理引擎的把控与平滑迁移能力。
3. **安全与供应链信任开始在 RL 生态觉醒**：SB3 推进默认安全反序列化是一个重要隐喻。随着开发者频繁下载和使用第三方 RL 模型权重，针对模型加载链路的攻击防范将成为底层框架的标配。

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

** slime RL 生态日报摘要 (2026-06-20) **

以下是 slime (github.com/THUDM/slime) 过去 24 小时的项目动态分析。

### 1. 今日速览
过去 24 小时内，slime 项目无新版本发布。社区共更新 **3 条 Issues** 和 **4 条 Pull Requests**。今日的焦点高度集中在**底层稳定性的增强**（Ray Actor 瞬时异常重试、权重同步静默报错修复）以及**对新世代大模型的适配**（Qwen3.5 系列支持）。值得注意的是，针对 SGLang v0.5.12 在 MoE 模型 Rollout 阶段的兼容性 Bug 引起了开发者关注。

### 2. 版本发布
- **Releases**: 无。当前主流版本仍为 Issue 中提及的 `v0.3.0`。

### 3. 重点 Issues
- **[Bug] Qwen3.6 35B A3B 在第二次 Rollout 产生乱码** ([#2091](https://github.com/THUDM/slime/issues/2091))
  - **摘要**: 开发者反馈在 `v0.3.0` 版本中运行 Qwen3.6 35B A3B 模型时，第二次 Rollout 会出现输出乱码。对比测试发现，该问题与 slime 配套的 SGLang 镜像版本强相关：使用 `v0.3.0` 配套的 `sglang:v0.5.12.post1` 会触发乱码，而降级至 `v0.2.4` 配套的 `sglang:v0.5.9` 表现正常。这是一个典型的 RL 训练中推理引擎内存状态未正确重置或权重更新冲突的底层缺陷。
- **[Bug] Delta 权重同步静默失败** ([#2104](https://github.com/THUDM/slime/issues/2104))
  - **摘要**: 核心训练逻辑漏洞。在增量权重同步（delta weight sync）时，SGLang 的 `update_weights_from_disk` 被包裹在 `try/except` 中，如果 Receiver 端应用失败，异常被 Ray 静默吞没。这会导致 Slime 端误以为同步完成，使得 Sender 的状态快照超前于 Receiver，进而引发训练的严重不同步（Desync）。
- **[Question] Qwen3.5 模型支持状态** ([#1831](https://github.com/THUDM/slime/issues/1831))
  - **摘要**: 闭环答疑。确认了 slime 对 Qwen3.5-35B-A3B 等 MoE 模型的支持情况，该 Issue 已被关闭。

### 4. 关键 PR 进展
- **支持 Qwen3.5-VL (Dense + MoE) 接入** ([#2075](https://github.com/THUDM/slime/pull/2075))
  - **摘要**: 通过引入 NVIDIA 的 `Megatron-Bridge` 插件，标准化注册了官方的 Qwen35VLBridge / Qwen35VLMoEBridge。极大简化了多模态大模型在 slime 中的接入流程。
- **[Fix] 重试 Rollout 引擎启动时的 Ray ActorUnavailableError** ([#2059](https://github.com/THUDM/slime/pull/2059))
  - **摘要**: 针对 Colocated（推理与训练混部）模式下，控制面心跳丢失或 gRPC 瞬时不可用导致的引擎拉起失败问题，引入了重试机制，提升了分布式集群的容错能力。
- **[Fix] 重试 Rollout 引擎 Onload 等待** ([#2103](https://github.com/THUDM/slime/pull/2103)) **[已关闭]**
  - **摘要**: 进一步增强 Onload 阶段的健壮性，处理瞬时 `ActorUnavailableError`，并在重试时复用已提交的 `ObjectRefs` 避免内存占用操作的重复提交。同时补充了 CPU-only 的单测覆盖。
- **支持 Top_p Mask** ([#2102](https://github.com/THUDM/slime/pull/2102)) **[已关闭]**
  - **摘要**: 在采样阶段引入了对 `top_p` 掩码的支持，为 RLHF 阶段的动作空间探索提供更精细的控制。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
slime 正在兑现其作为**工业级、高容错 RL 框架**的定位：
1. **直面混部痛点**：近期 PR (#2059, #2103) 密集处理 Ray 分布式架构下的瞬时通信异常，并正在封堵底层推理引擎（如 SGLang）权重更新时的静默异常 Bug (#2104)，这表明项目正朝着极高稳定性的生产级标准演进。
2. **敏捷跟进前沿模型**：在不到一周内，社区迅速推进了对 Qwen3.5-VL (多模态 Dense/MoE) 的适配，展示了极强的模型适配活力。
3. **推理与训练的深度解耦调优**：Issue #2091 揭示了 slime 在桥接不同 SGLang 版本时的复杂性，项目组对推理引擎内存恢复 (`resume_memory_occupation`) 和 Delta 权重同步机制的持续打磨，是解决大规模 LLM RL 训练 OOM 和一致性问题的核心关键。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-06-20）：

# AReaL 强化学习开源生态日报 (2026-06-20)

## 1. 今日速览
过去 24 小时内，AReaL 仓库活动主要集中在历史议题的清理与代码合并的收尾阶段。无新版本发布。共有 2 条 Issues 和 1 条 PR 更新，且均在 06-19 被标记为 `[CLOSED]`。整体表明项目正在清理技术债务，并推进多轮对话等核心特性的稳定性。

## 2. 版本发布
- **Releases**: 无新增（当前维持原有版本状态）。

## 3. 重点 Issues
今日关闭的 2 条 Issues 反映了社区早期对底层架构和易用性的探讨已得出结论：

- **[#1243](https://github.com/areal-project/AReaL/issues/1243) [CLOSED] [RFC] Integrate Ray Core RDT for Weight Syncing**
  - **背景**：探讨将 Ray Core RDT（可靠数据传输）集成到 AReaL 的权重同步机制中。目前 AReaL 1.0 依赖 `xccl` 模式（受限于单 GPU 源点且同步周期长），而 AReaL 2.0 引入了 `awex` 后端。
  - **意义**：该 RFC 的关闭标志着关于大规模推理与训练集群间的权重同步底层架构选型已告一段落。
- **[#1330](https://github.com/areal-project/AReaL/issues/1330) [CLOSED] [Doc] Scheduler strategies clarification**
  - **背景**：指出示例中 Scheduler 策略默认为 `None` 导致的运行时报错问题，影响了新用户的首次体验。
  - **意义**：文档与默认配置的脆弱性得到确认，预计后续将有对应的 PR 修复此易用性痛点。

## 4. 关键 PR 进展
今日关闭的 PR 聚焦于提升多轮对话场景下强化学习的鲁棒性：

- **[#1408](https://github.com/areal-project/AReaL/pull/1408) [CLOSED] fix: per-sample version tracking with loss_mask filter and multi-turn…**
  - **核心改动**：
    1. **版本追踪修复**：将 `head_version`/`tail_version` 修改为基于单样本（per-sample）级别，并通过 `loss_mask==1` 进行过滤。修复了因输入 token 版本占位符导致 `head_version` 始终为 -1 的 Bug。
    2. **序列编码优化**：新增 `version_rle` 字段（游程编码），用于压缩和存储 per-token 的版本序列。
    3. **多轮对话支持**：新增 `_split_trajectory_for_dump` 辅助函数，确保多轮对话轨迹在 dump 阶段的正确切分与处理。
  - **技术评价**：该 PR 是 AReaL 适配复杂多轮对话 RLHF 场景的重要基础设施改进，显著提升了版本控制的颗粒度与内存效率。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 LLM RLHF 工程痛点**：AReaL 在权重同步（如 Issue #1243 讨论的 xccl 到 awex/RDT 演进）上的持续迭代，表明其正致力于解决千万级至亿级参数模型在 Train-Inference 异构集群下的通信瓶颈。
2. **深耕多轮对话与轨迹处理**：PR #1408 展示了项目对 Multi-turn RL 场景的深度适配。通过引入 `loss_mask` 过滤和游程编码（RLE）来优化 token 版本追踪，这在当前主流的 Agent 对齐和复杂数据集训练中是极具价值的工程实践。
3. **重视社区反馈与底层稳定性**：近期对旧 RFC 和易用性文档的集中清理，说明项目组在推进 2.0 架构的同时，没有忽视系统的鲁棒性和开发者体验，处于良性的工程迭代周期中。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-06-20 TRL（Hugging Face）强化学习生态日报摘要：

# 🤖 TRL 强化学习日报 (2026-06-20)

## 1. 今日速览
- **数据概览**：过去 24 小时内，TRL 仓库处理了 **17 条 Issues**（探讨缺陷与功能请求）与高达 **53 条 PR** 的更新。
- **版本发布**：今日无新版本发布（0 个）。
- **核心趋势**：开发活动高度密集。核心维护者（如 @qgallouedec）与社区开发者正在大力推进 **GRPO/AsyncGRPO 的工程优化**（如多环境支持、原生 vLLM 权重同步）、**RL 训练的显存优化**（Chunked Loss），以及修复底层深度学习分布式训练（FSDP2）中的张量通信瓶颈。

---

## 2. 版本发布
无新版本 Release。

---

## 3. 重点 Issues
今日的 Issues 集中暴露了在复杂 RLHF 场景下（多模态、Agent 调用、分布式训练）的边界挑战：

- **[OPEN] Qwen3 模型在 GRPO 工具调用中的 token 截断缺陷**
  作者: linfeng-du | 👍: 0
  **摘要**: 在 `GRPOTrainer` 中对 Qwen3 模型使用工具调用时，由于 Chat Template 中的 `loop.last` 逻辑，导致 EOS 截断的前缀与完整 ID 不匹配，触发 `ValueError`。
  🔗 [huggingface/trl Issue #6124](https://github.com/huggingface/trl/issues/6124)

- **[OPEN] SFTTrainer 的 evaluate() 无法直接处理原始数据集**
  作者: DavidNemeskey | 👍: 0
  **摘要**: `SFTTrainer.__init__()` 会自动预处理传入的数据，但继承自 `transformers.Trainer` 的 `evaluate()` 方法未被重写，导致外部直接传入保留测试集时会报错。
  🔗 [huggingface/trl Issue #6115](https://github.com/huggingface/trl/issues/6115)

- **[OPEN] GRPO 训练器中 Iterable Datasets 的关键缺陷**
  作者: wilrop | 👍: 0
  **摘要**: 在 GRPO Trainer 中，用于重复采样 Prompt 的 `RepeatRandomSampler` 与 Iterable Datasets 存在底层兼容性冲突，影响 GRPO 正常运作。
  🔗 [huggingface/trl Issue #3213](https://github.com/huggingface/trl/issues/3213)

- **[CLOSED] FSDP2 环境下 chunked_nll 导致 lm_head 反向传播通信瓶颈**
  作者: albertvillanova | 👍: 0
  **摘要**: 当默认的 `loss_type='chunked_nll'` 在开启 `reshard_after_forward=True` 的 FSDP2 环境下运行时，会触发 `lm_head.weight` 的逐块 All-gather 操作，严重拖慢训练速度。
  🔗 [huggingface/trl Issue #6076](https://github.com/huggingface/trl/issues/6076)

- **[CLOSED] GRPOTrainer 与 Liger kernel 结合时忽略 PEFT/LoRA 适配器**
  作者: junho328 | 👍: 0
  **摘要**: 当使用 `use_liger_loss=True` 且针对 `lm_head` 进行 LoRA 训练时，计算逻辑会直接调用解包后模型的 `lm_head.weight`，导致 PEFT 适配器被完全忽略。
  🔗 [huggingface/trl Issue #4612](https://github.com/huggingface/trl/issues/4612)

---

## 4. 关键 PR 进展
TRL 正在进行深度的底层重构和算法前沿跟进，主要分为以下几个方向：

### 🚀 推理与生成引擎深度集成
- **[OPEN] 迁移至 vLLM 原生权重同步机制**
  作者: qgallouedec
  **摘要**: 适配 vLLM 0.22+，弃用 TRL 维护的自定义 vLLM server 架构。`trl vllm-serve` 将作为过渡警告，最终平稳交接给 vLLM 原生的 API 服务和权重同步机制。
  🔗 [huggingface/trl PR #6110](https://github.com/huggingface/trl/pull/6110)
- **[OPEN] 全面支持 vLLM 0.20.0 至 0.22.1**
  作者: qgallouedec
  **摘要**: 将支持的 vLLM 版本范围提升至 0.22.1，并验证确认 vLLM 触摸点（`collective_rpc` 等）未受大版本更迭破坏。
  🔗 [huggingface/trl PR #6119](https://github.com/huggingface/trl/pull/6119)

### 🏋️ GRPO 引擎增强与异步化
- **[OPEN] 多环境支持 (2/2)：单样本级别的环境选择**
  作者: qgallouedec
  **摘要**: 引入 Multi-Environment GRPO 支持。`environment_factory` 现在支持接收字典格式配置，数据集中的每个样本可以通过 `environment` 字段指定自己专属的工具环境。
  🔗 [huggingface/trl PR #6002](https://github.com/huggingface/trl/pull/6002)
- **[OPEN] Async GRPO 的随机 `reset()` 观测隔离**
  作者: qgallouedec
  **摘要**: 修复了随机环境中的逻辑问题。确保在 `reset()` 非确定性的情况下，每次生成都会针对不同的观测值进行采样，而非整个 prompt 组共享一个观测值。
  🔗 [huggingface/trl PR #6072](https://github.com/huggingface/trl/pull/6072)

### 🧠 算法与核心逻辑演进
- **[OPEN] 实现 Adaptive Beta-DPO (β-DPO)**
  作者: mukund1985
  **摘要**: 引入前沿论文 (arXiv:2407.08639)。在 DPO 中使用基于批次的自适应 `β` 参数，以应对 chosen/rejected 响应分离度不同带来的训练不稳定问题。
  🔗 [huggingface/trl PR #6123](https://github.com/huggingface/trl/pull/6123)
- **[CLOSED] 为 PPO 添加重复惩罚奖励**
  作者: qgallouedec
  **摘要**: 内置了更多 RLVR 文献中常用的规则性奖励函数（如 `get_repetition_penalty_reward`），减少开发者重复造轮子的成本。
  🔗 [huggingface/trl PR #6058](https://github.com/huggingface/trl/pull/6058)
- **[OPEN] 修复 PPO 中导致熵变为负数的 Padding Token 干扰**
  作者: mukund1985
  **摘要**: 修复了 PPO 训练中 `objective/entropy` 出现负数的数学不可能现象。根因是 Padding 位置的哨兵值 `INVALID_LOGPROB = 1.0` 参与了熵的计算。
  🔗 [huggingface/trl PR #6121](https://github.com/huggingface/trl/pull/6121)

### ⚡ 底层优化与修复
- **[WIP] 分块 DPO 损失计算**
  作者: qgallouedec
  **摘要**: 为 `DPOConfig` 引入 `use_chunked_loss=True`。在策略和参考模型的 forward 过程中，跳过完整的 `lm_head` 投影，分块计算对数概率，大幅降低峰值激活显存消耗。
  🔗 [huggingface/trl PR #5853](https://github.com/huggingface/trl/pull/5853)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **走在 RL 算法工程化的最前沿**：TRL 极其敏锐地跟进并整合了如 β-DPO、Chunked Loss、Async GRPO 等最新学术成果和工程优化方案，成为了 RLHF 算法落地的首选“试验田”。
2. **深度拥抱 Agentic RL (智能体强化学习)**：从近期 PR（如多环境支持、异步 GRPO 环境隔离、工具调用 generation index 暴露）可以明显看出，TRL 正在从基础的“偏好对齐”大跨步迈向**具有环境交互能力、工具调用能力的复杂 Agent 训练框架**。
3. **解决大规模分布式训练的硬核痛点**：项目组正在着力解决 vLLM 快速迭代带来的适配问题（平滑迁移至原生 vLLM 同步），以及 FSDP2/DeepSpeed 环境下的显存与通信开销瓶颈，这对于训练百亿参数级别以上的推理/强化模型是决定性的护城河。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 项目日报｜2026-06-20

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库整体活跃度趋于平稳。无新增 Issue，无新版本发布。有 1 个关键技术修复 PR 更新，主要针对 PPO 训练中长度惩罚机制的精度问题进行了代码迭代。

## 2. 版本发布
- **今日发布**：无。
- **近期 Releases**：无新版本。

## 3. 重点 Issues
- **今日更新**：0 条。
当前社区无新增讨论，项目处于相对稳定的维护与技术沉淀期。

## 4. 关键 PR 进展
- **[#1246] [OPEN] Fix overlong penalty action token length** | 作者: Jiang020609
  - **链接**: [OpenRLHF/OpenRLHF PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246)
  - **技术摘要**: 本 PR 旨在修复 Issue #1243。在 PPO 算法的超长惩罚计算中，引入了 `action_mask` 机制。其核心逻辑是：在进行 response 长度统计时，利用 mask 剔除工具调用等非训练文本，确保长度惩罚严格作用于实际参与训练的模型输出，提升了 Agent/RAG 场景下训练的准确性。
  - **测试情况**: 作者已通过 `pytest` 和 `pre_commit` 验证代码 (`openrlhf/trainer/ppo_utils/length_penalty.py` 及对应测试文件)。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 作为大模型强化学习框架的标杆，其对底层训练逻辑的打磨依然在持续推进。从今日更新的 [PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246) 可以看出，项目正致力于优化复杂场景（如多轮对话、工具调用）下的 PPO 细节。在当前大模型 Agent 化的趋势下，RLHF 训练不仅限于简单的文本生成，如何精确控制工具调用时的 Token 分离与奖励计算，是工业级落地的核心痛点。OpenRLHF 对此类边缘条件的持续修正，保证了其在生产环境中的高可用性和技术领先地位，依然值得 RL 研究者与工程师作为首选框架持续追踪。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl RL 生态项目日报 | 2026-06-20**

以下是针对开源强化学习框架 verl 的动态分析摘要。

### 1. 今日速览
- **Issues 更新**：13 条（包含旧期高频讨论补录及最新 Bug 反馈）
- **PR 更新**：3 条（聚焦 Agentic Rollout 架构与异步机制优化）
- **Releases**：0 个（当前版本应为近期提到的 `0.8.0`）

### 2. 版本发布
**无**。近期社区在 Issue 中透出当前测试版本为 `verl: 0.8.0`，官方暂未发布正式 Tag。

### 3. 重点 Issues
今日的 Issue 动态集中在**超大模型部署瓶颈**、**评估精度**以及**多机集群调度**三大技术痛点上：

- **【底层瓶颈】超大规模教师模型多机部署 OOM**
  Issue [#6792](https://github.com/verl-project/verl/issues/6792) 报告了在昇腾 910b3 集群上，使用 OPD 与 FSDP 进行蒸馏时，双机部署 Qwen3-235B 教师模型遭遇 OOM（学生模型为 Qwen3-32B）。这反映了 verl 在处理千亿级参数模型跨节点显存调度时面临的真实压力。
- **【评估优化】Math 校验逻辑准确度不足**
  Issue [#295](https://github.com/verl-project/verl/issues/295) 指出 verl 内置的 Math 校验在复现 simpleRL-reason 时，Math500 得分低于预期。结合此前建议引入 Hugging Face `Math-Verify` 的 Issue [#287](https://github.com/verl-project/verl/issues/287)，强化奖励模型校验的准确性仍是开发者复现论文的关键诉求。
- **【性能瓶颈】多节点下的 Rule-based Reward 计算阻碍**
  Issue [#292](https://github.com/verl-project/verl/issues/292) 提出核心痛点：当前 `main_ppo.py` 中的 `RewardManager` 未注册为 Ray worker，导致在多机训练时，基于规则的奖励函数计算成为严重的性能瓶颈，呼吁分布式并行计算奖励。
- **【系统异常】Ray Actor 异常崩溃**
  Issue [#275](https://github.com/verl-project/verl/issues/275) 记录了多位用户反馈的 `ActorDiedError`，官方分析大概率与 CPU 内存泄漏有关，这是大规模 RLHF 训练中资源回收的典型问题。

### 4. 关键 PR 进展
今日的 PR 展现了 verl 向 **Agentic（智能体）多轮交互**与 **全异步调度**迈进的明确技术演进路线：

- **【Agentic 架构】多轮 Agentic Rollout 的 Continuous Token 机制**
  PR [#6779](https://github.com/verl-project/verl/pull/6779) 落地了 Issue #6719 的 RFC，引入了通用的 Continuous Token 机制。这解决了大模型在多轮 Agent 交互中，除了保留初始 prompt 外需要保持上下文状态的核心难题。
- **【多模态拓展】Continuous Token 支持视觉语言（VL）模型**
  PR [#6799](https://github.com/verl-project/verl/pull/6799) 基于 #6779，将 Continuous Token 框架从纯文本扩展到多模态（VL），新增了对 MiMo, DeepSeek, Kimi 等模型族以及 QwenVL 等视觉子类的支持。
- **【异步训练】修复全异步 Rollouter 空闲率测量问题**
  PR [#6798](https://github.com/verl-project/verl/pull/6798) 针对 Issue #6693，在全异步模式下引入了 `accumulated_idle_time` 以精确记录 Rollouter 的实际空闲时间。这对于优化异步 RL 训练的 GPU 利用率至关重要。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **前沿算法的工程化落地极快**：从今日 PR 进展可见，verl 正在快速将 RFC（如 Agentic Rollout）转化为可用代码，迅速补齐传统 RL 框架在多轮 Agent 交互上的短板。
2. **直面 LLM 训练的极限挑战**：社区讨论直接对标当前业界最棘手的问题——千亿级参数（Qwen3-235B）的分布式蒸馏、多模态接入（VL模型），以及 Ray 集群下的异构资源调度瓶颈。
3. **深度的底层调度优化**：通过引入 Fully Async（全异步）机制并精细化监控指标（如 Rollouter 空闲时间），verl 正在深水区探索如何榨干千卡集群的算力，这是评判一个 RLHF 框架成熟度核心指标。

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

**RL 日报：Stable Baselines3 (SB3) 生态追踪**
**日期**：2026-06-20

### 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库整体活动集中于底层安全架构的升级。无新增 Issue 或版本发布，核心维护者提交了 1 个关键 PR，旨在彻底修复模型反序列化（`.load()`）链路中的潜在安全漏洞。

### 2. 版本发布
- **无新版本发布**。
*(注：当前合并的 PR 极有可能作为后续 Minor/patch 版本更新的核心内容。)*

### 3. 重点 Issues
- 过去 24 小时无新增或更新 Issue。

### 4. 关键 PR 进展
- **[#2264] [OPEN] Secure deserialization (`.load()`) by default** 
  - **作者**: araffin
  - **链接**: [DLR-RM/stable-baselines3 PR #2264](https://github.com/DLR-RM/stable-baselines3/pull/2264)
  - **技术摘要**: 该 PR 由 SB3 首席维护者提交，核心目标是**将安全反序列化设为默认行为**。主要解决历史代码中 `pickle` 反序列化可能导致的任意代码执行（RCE）风险。该 PR 闭环了社区长期呼吁的 [Issue #1852](https://github.com/DLR-RM/stable-baselines3/issues/1852) 并响应了 [Issue #1831](https://github.com/DLR-RM/stable-baselines3/issues/1831) 的讨论。对于频繁使用第三方预训练权重或在不同 RL 环境中交叉加载模型的开发者而言，此更新将从根本上提升供应链安全性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Stable Baselines3 (SB3) 作为基于 PyTorch 的 RL 算法标准化实现，其当前的发展轨迹反映了开源 RL 生态的成熟趋势：
1. **从“功能可用”向“企业级安全”演进**：在 RL 模型日益庞大、Hugging Face 等开源模型分发平台普及的当下，SB3 率先在底层 API（如 `.load()`）级别推进安全反序列化的默认化，为整个 RL 社区树立了安全加载模型的标准，防范恶意权重文件攻击。
2. **极高的工程可靠性**：在大多数 RL 框架仍聚焦于堆叠新算法时，SB3 维护团队依然投入精力处理如内存泄漏、确定性测试、API 稳定性及安全底座等核心工程问题。
3. **RL 生态的基石层**：SB3 与 Gymnasium / PettingZoo 等环境接口层以及 RL-Zoo3 训练框架深度解耦又紧密配合。无论上层应用是具身智能（机器人）、游戏 AI 还是 LLM 对齐（RLHF），SB3 依然是最稳定、代码最透明的底层算法验证场，其每一个 API 变更都牵动着下游衍生生态的规范。

---
*数据来源：GitHub (截至 2026-06-20)*

</details>