# RL 开源生态日报 2026-06-01

> 生成时间: 2026-05-31 22:17 UTC | 覆盖项目: 15 个

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
当前 LLM 强化学习生态正处于从“算法验证”向“大规模生产级基础设施”跨越的关键阶段。以 TRL、verl、slime、AReaL 为代表的头部项目，正全力攻坚大模型在复杂推理、多模态处理及智能体场景下的 Post-training 瓶颈。工程侧的焦点高度集中于训练与推理引擎的深度整合、异构硬件的资源榨取以及分布式系统的容错与通信优化；而算法侧则快速向自蒸馏、过程奖励（PRM）及多轨迹交互演进。传统 RL 基础设施（如 Gymnasium、SB3 等）则处于高度稳定期，为大模型 RL 提供底层的 API 规范支撑。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 11 | 10 | 0 | 底层重构突破 Python GIL 瓶颈，全面拥抱 vLLM 原生协议与多模态。 |
| **verl** | 3 | 11 | 0 | 处于深度工程“加固期”，主攻分布式系统健壮性与多模态大模型 FSDP 适配。 |
| **slime** | 2 | 3 | **v0.3.0** | 战略演进至“Agent 优先”，解决跨物理机/数据中心的增量通信痛点。 |
| **AReaL** | 2 (closed)| 2 | 0 | 死磕底层系统极限，打通 Train (BF16) 与 Rollout (FP8) 的异构精度显存墙。 |
| **Gymnasium**| 0 | 1 (closed) | 0 | API 高度成熟，进入底层依赖（如 Python 3.14）的长期维护与评估期。 |
| **其他项目** | 0 | 0 | 0 | 暂无动态。 |

*(注：其他项目包含 CleanRL, OpenRLHF, Tianshou, torchtune, ROCK/ROLL 等，过去 24 小时内均无实质性代码或议题更新。)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从单一反馈到复杂过程奖励（PRM）**：算法优化的颗粒度正在变细。TRL 探索了基于信息增益的 MGPO，slime 引入了 MiniMax-M1 的 CISPO 算法以解决低概率 Token 的重要性采样限制，这些都在为复杂推理和树搜索铺路。
2. **向 Agent 与多轨迹交互演进**：强化学习不再局限于单轮对话优化。slime v0.3.0 确立了 Agent RL 的核心地位，verl 也开始在异步流水中支持单次 Rollout 输出多条轨迹，以逼近真实的工具调用与环境探索。
3. **自蒸馏与相对策略优化**：TRL 对自蒸馏训练器进行了重构，修正了 SDPO loss，表明社区正在积极探索降低对绝对标准奖励模型依赖的新路径。

**工程/基础设施侧信号：**
1. **克服 Python GIL 与计算阻塞**：大模型 RL 吞吐量的最大杀手是 CPU 密集型任务与 GPU 通信的竞争。TRL 将 Rollout 生成解耦至 Spawned 子进程，从根本上解决了 Autograd 与解析逻辑的 GIL 竞争。
2. **深度绑定推理引擎（vLLM/SGLang）与异构精度**：项目正摒弃笨重的序列化传输。TRL 接入了 vLLM 的 4 阶段原生 RL 权重传输协议；AReaL 则实现在 NCCL 广播前在线将 BF16 量化为 FP8（基于 SGLang），用异构精度打破显存与通信墙。
3. **跨节点协同与底层显存压榨**：针对解耦部署，slime 实现了基于 Disk+NCCL 的增量权重同步，突破低带宽跨数据中心限制；verl 则重构了 FSDP1/2 + LoRA 的底层架构，以支持 30B 级别以上多模态模型。

## 差异化定位分析
- **TRL**：**“生态最广的全栈 Post-training 设施”**。依托 HuggingFace 生态，不仅跟进极快，且架构大刀阔斧（如 GIL 解耦），是兼顾前沿算法（PRM、自蒸馏）与多模态（Gemma3）的首选验证平台。
- **verl**：**“追求极致健壮性的工业级底座”**。当前处于密集的代码加固期（严修资源泄漏、剔除高危 `eval`、规范配置），基于 Ray 的架构使其在长周期、大规模分布式容错上极具吸引力。
- **slime**（THUDM）：**“定义 Agent RL 范式的先锋”**。不局限于传统微调，v0.3.0 的发布和增量权重同步机制，使其在跨网络、多轮工具调用的去中心化 RL 场景中具备独特优势。
- **AReaL**（inclusionAI）：**“硬核的系统级优化极客”**。极度聚焦于底层硬件与通信栈的压榨，FSDP 联合 SGLang 的 FP8 在线量化 Rollout，使其在追求极限 GPU 利用率和超大集群吞吐量方面不可替代。
- **Gymnasium 等**：**“稳固的后端基岩”**。虽然活跃度极低，但作为事实上的 `Env` 交互标准，其高度的稳定性保障了上层算法库（如 SB3、CleanRL）的长期有效运转。

## 值得关注的趋势信号
1. **Train-Rollout 边界的彻底消融**：未来的 RL 框架不再是“训练”与“推理”两个孤立模块的拼接。通过原生 API 协议（如 vLLM 4-phase）和在线权重量化直传，参数同步的开销正被极限压缩，训练流与推理流正在深度融合。
2. **多模态与 MoE 模型的 RL 适配进入深水区**：框架已经告别了“能跑起来就行”的阶段。verl 针对 Qwen3-Omni 的逐层 LoRA 召唤，TRL 针对 Gemma3 多图输入的修复，表明 30B 级以上大参数多模态/MoE 模型的 RL 微调已成为当前开源生态的核心战役。
3. **“安全与容错”成为发版的核心阻力**：随着 RL 训练任务演变为长达数周的多节点协同作业，单点故障的破坏力被放大。verl 修复的危险函数执行（`eval`）和路由死锁，AReaL 与 slime 暴露的推理引擎底层 CUDA 错误，标志着工程质量（如容错机制、内存泄漏控制）正在取代单纯的算法实现，成为开源框架的核心竞争力。

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

# 📰 slime (THUDM) RL 生态日报 - 2026-06-01

## 1. 今日速览
过去 24 小时，slime 仓库维持了较高的活跃度。社区共更新了 **2 个 Issues** 和 **3 个 Pull Requests**，并正式推送了具有重要生态意义的 **v0.3.0 版本**。项目正坚定地向“Agent优先”的强化学习底层架构演进，并在训练推理解耦、底层数据传输及新型优化算法上取得实质性进展。

---

## 2. 版本发布
- **[v0.3.0 正式发布](https://github.com/THUDM/slime/releases/)** 
  - **核心亮点**：全面转向 **Agent-first reinforcement learning（Agent优先的强化学习）**。
  - **概述**：虽然 slime 在早期版本中已支持多轮交互和 Agentic 负载，但 v0.3.0 将这些零散的能力进行了系统性重构，将其转化为更具连贯性的底层基础，大幅提升了 RL 环境中 Agent 调用的稳定性和可复用性。

---

## 3. 重点 Issues
当前 Issue 聚焦于环境变量配置鲁棒性及第三方推理后端的兼容性：

- **[#1998 [OPEN] SGLang 服务端在捕获 CUDA graph 时崩溃](https://github.com/THUDM/slime/issues/1998)**
  - **详情**：在使用 SGLang 作为 rollout 服务端启动 RL 任务时，任务在初始化阶段（即实际的 rollout/训练开始前）失败。具体报错位于 `custom_all_reduce_v2.py`，原因为 CUDA graph 捕获阶段引发 `invalid argument` 错误。这属于典型的 RL 训练与推理引擎集成时的底层通信 Bug。
- **[#1966 [CLOSED] 环境变量 `PYTHONBUFFERED` 拼写错误](https://github.com/THUDM/slime/issues/1966)**
  - **详情**：指出代码中错误使用了非标准的 Python 环境变量 `PYTHONBUFFERED`。正确变量应为 `PYTHONUNBUFFERED`，用于禁用标准输出和错误流的缓冲。该问题已被确认并关闭。

---

## 4. 关键 PR 进展
近期的 PR 集中在**新型算法接入**与**跨数据中心通信优化**：

- **[#681 [OPEN] feat: 新增 CISPO 算法](https://github.com/THUDM/slime/pull/681)**
  - **进展**：引入了来自 MiniMax-M1 论文的 **CISPO (Clipped IS-weight Policy Optimization)** 算法。
  - **技术价值**：解决了传统 PPO/GRPO 算法在处理低概率 Token 时的重要性采样权重限制问题，进一步拓宽了框架支持的尖端 RL 算法矩阵。
- **[#1806 [CLOSED] feat: 增量权重同步（磁盘 + NCCL 传输）](https://github.com/THUDM/slime/pull/1806)**
  - **进展**：实现了非共置环境下的增量权重同步机制。
  - **技术价值**：针对**训练/推理解耦**场景，不再全量同步参数，而是仅传输发生变化的参数位置和数值。这对于跨数据中心、通过共享文件系统（带宽在百 MB 级别）进行联通的分布式 RL 训练而言，是极大的通信开销优化。
- **[#1975 [CLOSED] [release] 升级至 v0.3.0](https://github.com/THUDM/slime/pull/1975)**
  - **进展**：v0.3.0 版本的合并入栈 PR。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

基于目前的数据轨迹，slime 已不再局限于传统的“模型微调”框架，正在构建下一代 RL 生态的基础设施：
1. **定义“Agent RL”范式**：v0.3.0 的发布表明项目正在将多轮工具调用、环境探索等 Agentic 能力作为一等公民对待，紧贴当前 LLM 从“对话模型”向“自主智能体”演进的技术红利期。
2. **突破物理机限制的分布式架构**：通过 PR #1806（基于 Disk 和 NCCL 的增量权重同步），slime 正在解决大规模 RL 中“跨数据中心、低带宽网络环境下训练与推理分离”的工程痛点，这在算力全球化调度的当下极具生产价值。
3. **敏捷吸收前沿算法**：快速集成如 MiniMax-M1 的 CISPO 等最新优化算法，证明了其底层抽象对于新范式 RL 算法的极强包容性。对于 RL 研究员和工程师而言，slime 是一个值得投入精力跟进的高效试验田。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是 AReaL 项目 2026-06-01 的强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时，AReaL 项目保持低频但高技术质量的迭代。社区主要聚焦于底层**推理与训练的一致性**以及**通信与显存优化**。新增/更新 2 个 Pull Requests（1 个仍在 Open 状态的重磅特性，1 个架构演进文档），2 个 Issues 均因问题解决或长期无更新被标记为 [CLOSED]。无新版本发布。

### 2. 版本发布
无。

### 3. 重点 Issues
当前已关闭的 Issues 暴露了 RL 训练中推理引擎差异对算法稳定性的影响，以及社区对更灵活的 API 构建需求。

*   **[CLOSED] [BUG] GRPO on GSM8K is stable for SGLang but unstable/collapses for vLLM**
    *   **作者**: adityasoni9998
    *   **分析**: 该 Issue 反映了在 GSM8K 基准测试中，使用 GRPO 算法时，后端采用 vLLM 会导致训练不稳定甚至崩溃，而 SGLang 则保持稳定。此类 Bug 通常源于不同推理框架在 token 采样、精度处理或上下文状态管理上的细微差异，这对于依赖大规模分布式推理的 RLHF 流水线是致命的。
    *   **链接**: [areal-project/AReaL Issue #1290](https://github.com/areal-project/AReaL/issues/1290)

*   **[CLOSED] [Feature] Support FSDPEngine and RemoteSGLangEngine with factory classmethod**
    *   **作者**: chenzhiyi021
    *   **分析**: 开发者呼吁引入工厂模式来实例化 `FSDPEngine` 和 `RemoteSGLangEngine`，以替代原有的 YAML 配置构建方式。这表明项目正在从配置驱动向更现代、更易于测试和程序化调用的 API 范式演进。
    *   **链接**: [areal-project/AReaL Issue #1168](https://github.com/areal-project/AReaL/issues/1168)

### 4. 关键 PR 进展
今日的 PR 进展直击大模型 RL 训练的核心痛点：显存占用与集群通信瓶颈。

*   **[OPEN] Feat/fsdp sglang fp8 rollout**
    *   **作者**: ZiyiTsang
    *   **分析**: 这是一个极具技术价值的 PR。它实现了在 SGLang 推理时使用基于 Block-wise 的 FP8 量化，同时保持 FSDP 训练处于 BF16 精度。其核心机制是在通过 NCCL 广播权重之前，在线将 BF16 权重量化为 FP8。此举将大幅降低 Rollout 阶段的显存占用和节点间的通信开销，是突破 RL 显存墙的关键优化。
    *   **链接**: [areal-project/AReaL PR #1379](https://github.com/areal-project/AReaL/pull/1379)

*   **[CLOSED] Add nccl migration plan.**
    *   **作者**: eggji
    *   **分析**: 这是一个架构级别的规划文档 PR。提交 NCCL 迁移计划暗示项目可能正在重构底层分布式通信机制（例如适配更新的 NCCL API，或探索其他如 HCCL 等通信后端），为更大规模集群的横向扩展做准备。
    *   **链接**: [areal-project/AReaL PR #1380](https://github.com/areal-project/AReaL/pull/1380)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
基于今日的数据，AReaL 并非仅仅在包装上层 API，而是正在死磕 LLM 强化学习底层的系统工程瓶颈：
1.  **打通异构精度训练与推理**：通过 PR #1379 可以看出，项目正在将 FP8 机制无缝融入以 BF16 为主的 FSDP 训练流中。在 RL 场景下，Rollout 的速度和显存效率直接决定实验的吞吐量，这种 Train-Rollout 异构精度的支持是当前业界的刚需。
2.  **深化与 SGLang 的底层协同**：从 Issue #1290 和今日的 PR 可以看出，AReaL 正将 SGLang 视作核心推理引擎进行深度适配。相比于原生的 HuggingFace 推理，结合 SGLang 的高吞吐量与定制的 NCCL 广播策略，AReaL 有望在超大批量 RL 训练中提供极高的 GPU 利用率。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL（Transformer Reinforcement Learning）开源项目 2026 年 6 月 1 日的 RL 日报摘要。

---

# 📰 TRL 项目动态日报 (2026-06-01)

## 1. 今日速览
过去 24 小时内，TRL 生态保持高活跃度。社区共更新了 **11 条 Issues** 和 **10 条 Pull Requests**，无新版本发布。今天的焦点高度集中在 **`AsyncGRPOTrainer` 的架构升级与周边能力补齐**（如 vLLM 原生权重同步、PEFT/LoRA 支持），以及**自蒸馏训练器的重构**上。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
今日的 Issues 反映了社区对高级 RLHF 算法（GRPO/PPO）在多 GPU、多模态和细粒度 Reward 场景下的硬核需求。

- **GRPO + vLLM + PEFT 多卡死锁问题**
  - **概述**: 用户报告在使用 GRPOTrainer 配合 vLLM co-locate 后端与 PEFT 时，多卡环境下极易出现迭代挂起/死锁现象。这暴露出异步生成与显存管理在底层可能存在 GIL 或同步冲突。
  - **链接**: [huggingface/trl Issue #3671](https://github.com/huggingface/trl/issues/3671)

- **适配 vLLM 原生 RL 接口的需求 (Vibethinker/MGPO)**
  - **概述**: 社区提出了基于信息增益的组归一化优势，以及引入 RLPR（Relative Target Maximization）的增强奖励信号机制。这些探讨正推动 TRL 的 GRPO 实现向更复杂的 Process Reward Model (PRM) 迈进。
  - **链接**: [huggingface/trl Issue #5127](https://github.com/huggingface/trl/issues/5127), [huggingface/trl Issue #3928](https://github.com/huggingface/trl/issues/3928)

- **Gemma3 多图微调阻碍**
  - **概述**: 标记为 PEFT 增强。当前 TRL 在处理如 Gemma3 这类多模态模型的多图输入时存在微调瓶颈，亟待修复以完善多模态 RL 生态。
  - **链接**: [huggingface/trl Issue #3121](https://github.com/huggingface/trl/issues/3121)

## 4. 关键 PR 进展
今日的 PR 密集针对 `AsyncGRPOTrainer` 的生产可用性进行了全面补强，底层架构出现了重大演进。

- **底层架构：解耦异步生成进程**
  - **概述**: 将 rollout 的 generate 和 score 循环从 Trainer 的主线程剥离，放入单独的 spawned 子进程中。此举彻底解决了 Autograd 引擎与 `recursive_parse` 竞争 Python GIL 的性能瓶颈，是具有里程碑意义的底层重构。
  - **链接**: [huggingface/trl PR #5749](https://github.com/huggingface/trl/pull/5749)

- **架构联动：vLLM 原生权重同步**
  - **概述**: 依赖上述 PR (#5749)，接入 vLLM >= 0.22.0 的原生 RL 4 阶段权重传输协议，大幅降低异步训练下的通信开销。
  - **链接**: [huggingface/trl PR #5892](https://github.com/huggingface/trl/pull/5892)

- **AsyncGRPO 能力补齐矩阵 (作者: rycerzes)**
  - **概述**: 一系列补丁 PR，使 `AsyncGRPOTrainer` 拥有与同步 `GRPOTrainer` 对齐的完整功能：
    - 支持 `top_p`, `top_k`, `min_p` 等采样参数 ([PR #5894](https://github.com/huggingface/trl/pull/5894))
    - 完整的 PEFT/LoRA 支持（含权重同步 merge/unmerge 循环） ([PR #5896](https://github.com/huggingface/trl/pull/5896))
    - 适配多模态 `ProcessorMixin` ([PR #5895](https://github.com/huggingface/trl/pull/5895))
    - 暴露 `model_init_kwargs` 以支持自定义加载 ([PR #5893](https://github.com/huggingface/trl/pull/5893))

- **自蒸馏 Trainer 代码重构**
  - **概述**: 移除了臃肿的 Base 类抽象，将 SDFT 和 SDPO 重构为独立 Trainer。同时将 SDPO loss 修正为论文定义的凸组合形式 `(1 - w)·policy + w·distillation`。
  - **链接**: [huggingface/trl PR #5862](https://github.com/huggingface/trl/pull/5862), [huggingface/trl PR #5883](https://github.com/huggingface/trl/pull/5883)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **彻底克服 Python GIL 瓶颈**: 通过将 Rollout 生成转移到多进程（PR #5749），TRL 正在解决 LLM RL 训练中长久以来的 CPU 密集型任务（如 Reward 解析、Tokenize）与 GPU 通信的互斥阻塞问题，这将带来显著的吞吐量飞跃。
2. **前沿推理引擎的深度融合**: 与 vLLM 最新原生 RL API（4-phase 协议）的深度绑定（PR #5892），表明 TRL 正在放弃笨重的参数序列化，转向更高效的底层显存/权重直传。
3. **向复杂推理的全面演进**: 无论是自蒸馏的重构，还是对 PRM (Process Reward Models) 和 MGPO 的探讨，TRL 正快速从基础的策略梯度库，演变为支持树搜索、稀疏奖励和细粒度过程奖励的尖端 Post-training 基础设施。

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

以下是为您生成的 `verl` 项目 RL 日报摘要（2026-06-01）：

### 1. 今日速览
过去 24 小时内，`verl` 项目保持高度活跃的开发迭代态势。社区共产生 **3 条** Issue 更新和 **11 条** PR 更新，无新版本发布。今日的 PR 动态以核心健壮性修复与高级功能扩展为主，特别是在分布式容错、Tool调用安全防护以及多模态大模型（FSDP + LoRA）底层支持方面有重要推进。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **[#144](https://github.com/verl-project/verl/issues/144) [enhancement, good first issue] Additional memory optimization features**
  - **概览**：社区持续关注显存优化，呼吁引入 Activation offloading（激活卸载）以及将 optimizer step 融合进 backward pass 等特性。该 Issue 目前获得 3 个赞，是参与贡献的良好切入点。
- **[#4879](https://github.com/verl-project/verl/issues/4879) GRPO training, Started a local Ray instance**
  - **概览**：用户反馈在单机 8卡 H20 环境下使用 GRPO 训练 Qwen-0.5B 时，程序时常在 `ray.init` 阶段挂起卡死。这是分布式 RL 训练中典型的资源初始化与死锁问题。
- **[#6548](https://github.com/verl-project/verl/issues/6548) [bug] The memory usage gradually increases with each run**
  - **概览**：新报告的缺陷。用户发现在训练过程中出现显存/内存泄漏（逐渐增加），这直接关系到 RL 训练框架在长周期滚动迭代中的稳定性。

### 4. 关键 PR 进展
今日共有 11 个活跃 PR，按技术主题分类如下：

**🔧 分布式容错与配置健壮性**
- **[#6544](https://github.com/verl-project/verl/pull/6544) [reward] fix: release worker count when NaiveRouter request fails after retries**
  - 修复了路由请求失败未释放 worker 计数的 bug，防止因重试耗尽导致的分布式路由死锁。
- **[#6547](https://github.com/verl-project/verl/pull/6547) [cfg] fix: raise KeyError for missing BaseConfig items**
  - 修正了 `BaseConfig` 映射行为，解决缺失字段引发 `AttributeError` 而非标准 `KeyError` 或 `False` 的问题。
- **[#6543](https://github.com/verl-project/verl/pull/6543) [ckpt] fix: extract_step should use the last global_step_ match**
  - 修复了断点续训逻辑 bug，确保从嵌套目录恢复时提取正确（最新）的 `global_step`。

**🛡️ 安全性与代码质量**
- **[#6542](https://github.com/verl-project/verl/pull/6542) [rollout] fix: avoid arbitrary code execution in Qwen3 tool parser**
  - **关键修复**：移除了 Qwen3 XML 解析器中对非常量类型参数使用 `eval()` 的逻辑，堵住了恶意模型输出执行任意代码的漏洞。
- **[#6545](https://github.com/verl-project/verl/pull/6545) [reward] fix: union reward_extra_info keys across samples in compute_rm_score**
  - 解决了不同 sample 具有不同 `reward_extra_info` 字典键时，导致的 `KeyError` 或指标静默丢弃问题。

**🚀 核心算法与多模态架构支持**
- **[#6512](https://github.com/verl-project/verl/pull/6512) [fsdp, model] feat: per-unit LoRA summon, FSDP1/2 compatibility, and strip-modules support**
  - 重大功能扩展：重构了 `layered_summon_lora_params`，全面兼容 FSDP1/2，旨在解锁超大参数规模、多阶段多模态模型（如 Qwen3-Omni-30B-A3B）的 RL 微调。
- **[#6271](https://github.com/verl-project/verl/pull/6271) [trainer, fully_async] feat: add support for multi-trajectory in one rollout**
  - 在完全异步流水中支持单次 rollout 输出多条轨迹，进一步逼近复杂 Agent 场景的建模需求。
- **[#6515](https://github.com/verl-project/verl/pull/6515) [megatron] fix: zero out mtp_num_layers...**
  - 修复了 Megatron 引擎在 `vanilla_mbridge=True` 路径下的配置兼容问题。
- **[#6541](https://github.com/verl-project/verl/pull/6541) [misc] refactor: replace hardcoded device selection...**
  - 重构底层代码，使用统一的 `get_resource_name()` 替代硬编码的设备选择逻辑。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **面向 Agent 与多轨迹训练的演进**：从 PR #6271 可以看出，`verl` 正在将训练范式从单次单一反馈向支持多轨迹、复杂交互的 Agent Loop 演进，这在后 PPO/GPPO 时代的复杂推理任务中极具价值。
2. **极致的工程严谨度**：单日涌现多个针对底层系统的修复（如路由计数泄漏、配置映射规范、正则解析防错、删除危险函数 `eval`），证明项目正在经历深度“加固期”，这对于需要数周甚至数月长稳运行的 RLHF/GRPO 任务至关重要。
3. **前瞻性的多模态大模型 RL 底座**：PR #6512 对 FSDP + LoRA 的深度重构，标志着项目已经为接下来 30B 级别甚至更大的多模态慢思考（Thinking）模型的强化学习微调做好了底层架构准备。

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

# RL 日报：Gymnasium 生态追踪 (2026-06-01)

## 1. 今日速览
过去 24 小时内，Gymnasium 项目整体处于低活跃的维护状态。无新增代码提交，无新增 Issues，仅有 1 个关于 Python 3.14 兼容性的 PR 状态发生更新（已被关闭）。

---

## 2. 版本发布
过去 24 小时内**无新版本发布**。

---

## 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。

---

## 4. 关键 PR 进展
过去 24 小时有 1 条 Pull Request 状态更新：

- **[PR #1587] [CLOSED] Add Python 3.14 Support**
  - **作者**: pseudo-rnd-thoughts
  - **链接**: [Farama-Foundation/Gymnasium PR #1587](https://github.com/Farama-Foundation/Gymnasium/pull/1587)
  - **摘要**: 该 PR 旨在为项目引入 Python 3.14 的显式支持。作者指出 Python 3.14 已发布一段时间，但项目尚未正式跟进兼容性。
  - **分析**: 尽管该 PR 提出了合理的升级诉求，但最终以 CLOSED 状态结束。这通常意味着现有代码库可能存在依赖项阻塞，或者维护者认为在当前阶段（可能处于 v1.0 后的维护期）合并该改动的收益/风险比不佳，底层 API 的兼容性验证仍需时间。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管目前项目活跃度较低，但 Gymnasium 依然是当前强化学习（RL）生态中不可或缺的核心基建设施：

1. **事实上的 API 标准**：作为 OpenAI Gym 的正统继任者，Gymnasium 定义的 `Env`、`RewardWrapper`、`StepType` 等接口规范，依然是当前绝大多数主流 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）进行环境交互的底层标准。
2. **基准测试的核心**：其内置的经典控制（Classic Control）、MuJoCo、Atari 等基准环境，依然是学术界验证新算法泛化性与样本效率的通用语言。
3. **高层维护的稳定性**：当前的低活跃度反映了项目 API 已经高度成熟并进入稳定期。关注其偶尔的 PR 动向（如 Python 版本支持、底层依赖升级），能够精准把握 RL 底层工具链的技术债务清理与演进方向。

> *数据来源截止至：2026-06-01 00:00 UTC*

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>