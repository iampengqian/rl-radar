# RL 开源生态日报 2026-03-15

> 生成时间: 2026-03-14 22:01 UTC | 覆盖项目: 15 个

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

今日 RL 开源生态呈现出明显的“分层活跃”特征。**LLM/多模态 RL 框架**处于高频迭代期，正全力解决多模态数据流、异构硬件适配及资源利用率三大痛点；而**传统 RL 算法库**与**基础环境**（如 CleanRL, Stable Baselines3, Gymnasium）则进入相对稳定的静默期或维护期。

核心驱动力已从单纯的算法实现（PPO/DPO）转向**系统工程的深水区**：如何在大规模分布式环境下高效稳定地训练 Agent，以及如何打通从文本到多模态（图像/视频）的 RL 链路。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 4 | 15 | 0 | **高**。VLM 与异构硬件（B200/NPU）适配领先，FlowGRPO 补齐图像生成短板。 |
| **TRL** | 1 | 13 | 0 | **高**。工程体验优化显著，默认 Colocate 模式与工具调用修复降低使用门槛。 |
| **AReaL** | 4 | 6 | 0 | **中高**。架构转型期，主打“同置训练”以解决显存墙问题，多模态 RPC 修复关键。 |
| **ROCK** | 3 | 3 | 2 | **中**。快速发布 v1.4.x，聚焦生产级可观测性与环境管理。 |
| **ROLL** | 1 | 5 | 0 | **中**。酝酿 v0.2.0，重磅引入 Multi-LoRA 并发与 GPU 分时复用。 |
| **slime** | 3 | 0 | 0 | **低**。暴露长时训练稳定性问题（503/CUDA 错误），目前处于排障期。 |
| **rl_games** | 0 | 1 | 0 | **低**。主要面向物理仿真，进行 Gymnasium 迁移与 MyoSuite 适配。 |
| **torchtune** | 0 | 1 | 0 | **低**。文档补全，聚焦自定义数据接入。 |
| **Others** | 0 | 0 | 0 | CleanRL, SB3, Gymnasium 等过去 24h 无动态。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号
*   **多模态 RL 全面铺开**：**verl** 和 **AReaL** 均在处理多模态数据（尤其是多图样本）在分布式环境下的切分与传输难题。**verl** 更是进一步支持了 VLM 的在线策略蒸馏和图像生成（FlowGRPO），标志着 RL 优化对象从纯文本模型向 Vision-Language-Action 模型的彻底转型。
*   **算法多样化与融合**：**TRL** 迅速跟进 VESPO（软策略优化），**verl** 集成 Atropos 环境，显示出社区不再满足于单一的 PPO/GRPO，而是倾向于提供更灵活的算法插件化支持，以适应不同 reward model 的特性。

### 2. 工程/基础设施侧信号
*   **资源效率的革命：Colocate/Time-sharing**：显存墙成为当前最大瓶颈。**AReaL** 引入 GPU 同置训练，**ROLL** 支持 Multi-LoRA 分时复用，**TRL** 默认开启 vLLM Colocate 模式。这些动作一致指向一个目标：在有限 GPU 显存内，通过精细化调度最大化算力利用率。
*   **异构计算与底层适配**：**verl** 对 Nvidia B200 (CUDA 12.8) 和 Ascend NPU 的适配，以及 **slime** 暴露出的底层 CUDA 非法内存访问，都说明 RL 框架正被迫下沉到硬件层，以应对新一代芯片架构带来的挑战。
*   **Agent 稳定性与工具调用**：**TRL** 修复了多轮工具调用的 Token 对齐问题，**slime** 遭遇长时训练下的服务不可用（503）。这表明在构建长链条 Agent 时，系统的鲁棒性（Robustness）比单纯的算法性能更令人头疼。

## 差异化定位分析

*   **verl**：**全能型新基建**。在覆盖 VLM/FlowGRPO 等前沿模型的同时，强力押注异构硬件，试图成为跨平台（Nvidia/Ascend）的统一 RL OS。
*   **TRL**：**易用性首选**。通过“开箱即用”的 Colocate 模式和快速修复工具调用 Bug，确立了其作为 Hugging Face 生态内最友好、迭代最快的 Agent 训练库地位。
*   **AReaL & ROLL**：**效率极客**。这两个项目（均属阿里系）明显侧重于大规模工业部署的效率极限。AReaL 专注显存优化的 Colocate 架构，ROLL 专注 Multi-LoRA 的并发调度，适合对成本敏感的大规模生产场景。
*   **ROCK**：**生产级环境管家**。不同于前者的算法/训练侧重，ROCK 专注于 RL 运行时的环境隔离、监控与版本管理，是训练框架背后的“操作系统”。

## 社区热度与成熟度

*   **verl & TRL** 处于**活跃爆发期**。PR 数量多且涉及核心功能，社区反馈（如 B200 支持）能迅速转化为代码变更。
*   **AReaL & ROLL** 处于**架构重构期**。虽然 Issue 数量不低，但 PR 多集中在底层重构（如 RPC、Pipeline），显示其正在为下一阶段的性能跃升打基础。
*   **slime** 处于**阵痛期**。深度集成 Megatron-Core 和 SGLang 带来了复杂性，长时训练的稳定性问题是其成熟的试金石。
*   **rl_games & torchtune** 处于**稳定维护期**。更新集中于文档与特定场景适配，而非核心架构变动。
*   **CleanRL & Stable Baselines3** 等项目处于**静默期**，可能意味着该领域的技术栈已相对成熟或正处于新技术爆发前的蓄力期。

## 值得关注的趋势信号

1.  **显存优化技术从“优化”走向“架构”**：单纯的显存回收已不够用，**AReaL** 和 **ROLL** 展示了通过架构级设计（Colocate/Time-sharing）来打破显存墙的趋势，预计未来会有更多框架引入类似 CPU-GPU Swap 或 Engine 共享权重的机制。
2.  **硬件适配碎片化加剧**：**verl** 同时适配 B200 和昇腾 NPU 是一个重要信号。随着专用 AI 芯片的涌现，RL 框架将不得不花费大量精力在底层 Kernel 和通信库的适配上，跨平台能力将成为选型的重要考量。
3.  **Agent 训练的“最后一公里”难题**：**TRL** 和 **slime** 的 Issues 表明，将 LLM 转化为 Agent 进行 RL 训练时，**多轮交互的稳定性**（如 503 错误、Token 错位）是当前最大的工程瓶颈，这可能会催生专门针对 Agent 生命周期的容错机制。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报 (2026-03-15)

## 1. 今日速览
过去 24 小时内，ROLL 仓库共有 **5 个 PR** 活跃（主要为功能增强与 Bug 修复），**1 个 Issue** 更新。社区贡献者 @dubin555 集中修复了 Pipeline 中的变量作用域与配置逻辑问题，同时核心开发者 @taoluo 提交了关于 **Multi-LoRA** 并发训练的重磅更新。暂无新版本 Release。

---

## 2. 版本发布
*   **无新版本发布**。
    *   *注：PR #343 涉及 v0.2.0 的提交者信息补充，已于昨日合并，预示 v0.2.0 可能处于发布前的最终整理阶段。*

---

## 3. 重点 Issues
*   **[#167](https://github.com/alibaba/ROLL/issues/167) [OPEN] Megatron 训练模式下模型保存报错**
    *   **作者**: @mst272
    *   **摘要**: 该 Issue 反馈在 Megatron 训练过程中（Step 100）进行 Checkpoint 保存时发生异常。从堆栈信息看，涉及 `ActorWorker` 在分布式环境下的同步或序列化问题（`Elapsed time` 差异巨大）。该问题长期未解决（自 2025-09 创建），是当前大规模分布式训练的一个阻碍点。

---

## 4. 关键 PR 进展

### 🚀 架构与功能演进
*   **[#378](https://github.com/alibaba/ROLL/pull/378) [OPEN] 支持 Multi-LoRA 并发训练及 RLix 控制平面 GPU 分时复用**
    *   **作者**: @taoluo
    *   **简评**: **本日最关键更新**。此 PR 旨在扩展 ROLL 的训练栈，支持**多个 LoRA 适配器的并发训练**，并引入对 RLix 控制平面的 GPU Time-sharing（分时复用）支持。这将极大提升 ROLL 在多任务或多策略学习场景下的资源利用率与灵活性。

### 🐛 Bug 修复与代码质量 (Contributed by @dubin555)
*   **[#377](https://github.com/alibaba/ROLL/pull/377) [OPEN] 修正 CriticWorker tqdm 进度条 Total 计算逻辑**
    *   **简评**: 修复了 `CriticWorker.train_step` 中 DataLoader 设置为 `epochs=1` 但进度条 `total` 错误地使用了 `ppo_epochs` 导致显示不准确的问题。
*   **[#376](https://github.com/alibaba/ROLL/pull/376) [OPEN] 修正 ref log prob 动态批处理时的对象引用**
    *   **简评**: 在 `RLVRPipeline` 中，当 `use_ref_model=False` 时，原代码错误地传递了 `WorkerConfig` 对象，现已修正为传递实际的 `Cluster` 实例，确保了动态批处理逻辑的正确执行。
*   **[#375](https://github.com/alibaba/ROLL/pull/375) [OPEN] 修复 CriticWorker 变量遮蔽 (Shadowing) 问题**
    *   **简评**: 修复了 `train_step` 循环变量 `data` 遮蔽外层参数 `data` 的作用域问题，提高了代码的健壮性。

### 🗃️ 杂项
*   **[#343](https://github.com/alibaba/ROLL/pull/343) [CLOSED] (chore): append commiter for v0.2.0**
    *   **简评**: v0.2.0 版本的元数据维护。

---

## 5. 为什么值得持续关注
1.  **向 Multi-Agent / Multi-Task 迈进**: PR #378 引入的 **Multi-LoRA 并发训练**与 GPU 分时复用机制，表明 ROLL 正在从单一的 RL 训练框架演进为支持高并发、多策略的**RL 基础设施**，这对于在有限算力下进行大规模 A/B 测试或演化学习至关重要。
2.  **代码质量与稳定性提升**: 开发者 @dubin555 连续提交的三个 PR 深入到了 Pipeline 的底层逻辑（变量作用域、对象引用），显示出团队正在通过严格的代码审查来夯实基础，特别是在复杂的分布式环境下的类型安全与逻辑正确性。
3.  **生态整合能力**: 对 **RLix** 控制平面的支持（PR #378）暗示了 ROLL 正在构建更完善的控制层接口，可能在未来支持更复杂的调度与生命周期管理。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 2026-03-15 RL 日报摘要

## 1. 今日速览
ROCK 项目今日（2026-03-15）处于高频迭代状态，过去 24 小时内完成了从 v1.4.0 到 **v1.4.1** 的快速演进。核心关注点在于**版本发布**、**可观测性增强**（Metrics 优化）以及**配置灵活性**（Pool/Template 映射）。

## 2. 版本发布
### v1.4.1
- **状态**：已发布
- **变更**：主要修复与维护性更新。
- **详情**：[View Full Changelog](https://github.com/alibaba/ROCK/compare/v1.4.0...v1.4.1)

### v1.4.0
- **状态**：已发布
- **核心变更**：
    - **文档**：修复中文发布说明索引 (`#573`)。
    - **沙箱**：新增支持创建标准 spec sandbox (`#539`, `#571`)。
    - **CI**：更新触发脚本的参数传递逻辑。
- **详情**：[View Release Notes](https://github.com/alibaba/ROCK/releases/tag/v1.4.0)

## 3. 重点 Issues
- **[#638] [Feature] update version number to 1.4.1** `[OPEN]`
    - **摘要**：跟进 v1.4.1 发布的版本号更新任务。
    - **链接**：[alibaba/ROCK Issue #638](https://github.com/alibaba/ROCK/issues/638)
- **[#636] [Feature] add hostname to metrics tag** `[OPEN]`
    - **摘要**：提议在 Metrics 标签中添加 hostname，以增强分布式环境下的监控与故障排查能力。
    - **链接**：[alibaba/ROCK Issue #636](https://github.com/alibaba/ROCK/issues/636)
- *注：Issue #616 (回退至 1.3.0) 与 #633 (更新至 1.4.0) 均已关闭，显示版本管理流程已推进至 1.4.1。*

## 4. 关键 PR 进展
- **[#639] chore: add release notes for version 1.4.1 and bump version number** `[CLOSED]`
    - **内容**：关联 Issue #638，完成 v1.4.1 的发版文档与版本号 bump。
    - **链接**：[alibaba/ROCK PR #639](https://github.com/alibaba/ROCK/pull/639)
- **[#637] feat: add hostname to metrics tag** `[CLOSED]`
    - **内容**：响应 Issue #636，快速合入并关闭，实现了监控维度的细化。
    - **链接**：[alibaba/ROCK PR #637](https://github.com/alibaba/ROCK/pull/637)
- **[#635] feat: support pool and template mapping** `[OPEN]`
    - **内容**：允许通过配置文件指定 pool 或 template 映射，提升了环境管理的灵活度。
    - **链接**：[alibaba/ROCK PR #635](https://github.com/alibaba/ROCK/pull/635)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 在 24 小时内展现出了紧凑的**版本交付节奏**（v1.4.0 -> v1.4.1）和**快速响应的维护能力**。特别是从 `#636` 提出到 `#637` 合并的高效流转，表明团队对**工程化痛点（如分布式环境下的可观测性）**有敏锐的嗅觉。配合 v1.4.0 引入的 Standard Spec Sandbox 支持，ROCK 正在强化其作为**生产级 RL 基础设施**的定位，适合需要稳定环境管理与精细化监控的 RL 应用场景。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-15)

## 1. 今日速览
过去 24 小时内，Slime 仓库活跃度主要集中在问题排查与错误修复讨论，无新版本发布或 PR 合并。社区反馈聚焦于**长时间 RL 训练下的稳定性**、**底层 CUDA 显存错误**以及 **Megatron-Core 模型配置的参数传递**问题。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues

### 🔴 稳定性警示：长时间训练后的服务不可用与 Checkpoint 恢复失效
- **Issue**: [#1391 [CLOSED] [Error between SGLang Router and SGlang Engine] Server error '503 Service Unavailable'](https://github.com/THUDM/slime/issue/1391)
- **详情**: 用户在使用基于 Slime 的 [ThetaEvolve](https://github.com/ypwang61/ThetaEvolve) 进行实验时，长时间 RL 训练后出现 503 错误。更严重的是，试图通过 Checkpoint 恢复训练的方案未能规避该错误。这表明在长时序任务中，Router 与 Engine 之间的状态管理或资源释放可能存在潜在 Bug。

### ⚠️ 底层报错：CUDA 非法内存访问
- **Issue**: [#1297 [OPEN] torch.AcceleratorError: CUDA error: an illegal memory access was encountered](https://github.com/THUDM/slime/issue/1297)
- **详情**: 用户开启了 `CUDA_LAUNCH_BLOCKING=1` 进行调试，遇到了非法内存访问错误。此类错误通常指向底层算子实现、显存越界或硬件层面的不稳定性，目前该 Issue 仍处于 Open 状态，期待社区进一步的 Root Cause Analysis。

### 🐛 架构缺陷：MoE Token Dispatcher 配置未传播
- **Issue**: [#1725 [OPEN] [bug] Bridge provider missing moe_token_dispatcher_type propagation](https://github.com/THUDM/slime/issue/1725)
- **详情**: 这是一个新近发现的高质量 Bug Report。指出在 Bridge provider 路径下，虽然 #1715 修复了 `variable_seq_lengths` 的传递，但遗漏了 `moe_token_dispatcher_type`。根据 Megatron-Core 的 `TransformerConfig` 校验逻辑，这将导致配置不一致，影响 MoE 模型在变长序列下的正确运行。

## 4. 关键 PR 进展
- **无更新**。过去 24 小时内无活跃的 Pull Request。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 作为 THUDM 推出的 RL 框架，正在经受大规模长时间训练的实战检验。
1.  **复杂系统集成**: Issue #1391 暴露了 RL 训练与 SGLang 推理引擎结合时的边界条件问题，这是当前 LLM+RL 范式中最具挑战性的工程难题之一。
2.  **深度适配 Megatron-Core**: Issue #1725 显示该项目正在深度整合 Megatron-Core 的高级特性（如 MoE 和变长序列处理），这对于追求极致性能的大模型 RL 训练至关重要。
3.  **生态衍生能力**: 该项目已被 ThetaEvolve 等下游项目采纳，证明了其作为基座框架的可扩展性和在进化策略等领域的应用潜力。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是 **inclusionAI/AReaL** 项目 2026-03-15 的 RL 日报摘要。

---

### 📅 AReaL RL 日报 (2026-03-15)

#### 1. 今日速览
过去 24 小时内，AReaL 项目活跃度较高，主要集中在**系统底层稳定性**与**训练范式的扩展**。虽然无新版本发布，但社区提交了 6 个 PR（其中 2 个针对 vLLM 与多模态的 Bug 修复）和 4 个 Issue。重点关注点在于**同置训练模式的引入**以及 **Hugging Face kernels 的集成**，这标志着项目正在从单一的 RL 基础设施向更灵活、兼容性更强的生态系统演进。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 重点 Issues
*   **[系统设计] 同步 RL 模式下的 Partial Rollouts 支持 (#1034)**
    *   **摘要**：社区询问 AReaL 是否支持同步模式下的 partial rollouts（类似 Moonshot Kimi 的做法）。作者目前的理解是通过设置 `rollout.max_head_offpolicyness=0` 切换回同步模式，但需确认具体的截断与填充策略。这反映了长上下文推理对 RL 框架灵活性的需求。
    *   **链接**：[inclusionAI/AReaL Issue #1034](https://github.com/inclusionAI/AReaL/issues/1034)

*   **[Bug] RPC 传输导致多模态 Tensor 切分错误 (#1036)**
    *   **摘要**：在处理包含多张图像的样本时，RPC 层错误地将 `pixel_values` 等非批处理张量视为普通批处理张量进行切分，导致数据损坏。这是一个影响多模态 RL 训练稳定性的关键缺陷。
    *   **链接**：[inclusionAI/AReaL Issue #1036](https://github.com/inclusionAI/AReaL/issues/1036)

*   **[Bug] Socket 资源泄漏 (已修复) (#1030)**
    *   **摘要**：`is_port_free()` 函数在 `bind` 抛出异常时直接返回，未关闭 Socket，导致文件描述符泄漏。
    *   **链接**：[inclusionAI/AReaL Issue #1030](https://github.com/inclusionAI/AReaL/issues/1030)

#### 4. 关键 PR 进展
*   **[Feature] 支持 GPU 同置On-policy 训练 (#1035)** 🔥
    *   **摘要**：引入了**同置训练模式**。该模式允许训练引擎和推理引擎通过 `torch_memory_saver` 在同一组 GPU 上进行时间片轮转共享权重。这显著降低了硬件门槛，提升了大规模部署时的资源利用率。
    *   **链接**：[inclusionAI/AReaL PR #1035](https://github.com/inclusionAI/AReaL/pull/1035)

*   **[Feature] 集成 Hugging Face kernels (#1033)**
    *   **摘要**：添加了对 `kernels` 库的可选支持。用户可以直接从 Hub 加载 `flash-attn` 等内核，无需繁琐的本地编译。这降低了开发者的环境配置成本，增强了生态兼容性。
    *   **链接**：[inclusionAI/AReaL PR #1033](https://github.com/inclusionAI/AReaL/pull/1033)

*   **[Fix] 修复多模态 RPC 传输逻辑 (#1038)**
    *   **摘要**：针对 Issue #1036 的修复。显式区分了非批处理张量的传输逻辑，确保多图样本在 RPC 传输中的完整性。
    *   **链接**：[inclusionAI/AReaL PR #1038](https://github.com/inclusionAI/AReaL/pull/1038)

*   **[Fix] 加固 vLLM LoRA XCCL 运行时别名处理 (#1039)**
    *   **摘要**：针对 Issue #1037，优化了 LoRA 权重更新后的运行时别名注册路径，确保 adapter ID 的稳定性。
    *   **链接**：[inclusionAI/AReaL PR #1039](https://github.com/inclusionAI/AReaL/pull/1039)

#### 5. 为什么值得 RL 生态持续关注
AReaL 正在解决当前 RL 训练框架中最棘手的**资源效率**与**多模态兼容性**问题：
1.  **资源效率突破**：PR #1035 提出的 **Colocated Training** 允许推理和训练共享 GPU，这对解决显存墙问题、降低 LLM + RL 的训练成本具有极高的工程价值。
2.  **多模态 RL 深水区**：Issue #1036 和 PR #1038 显示项目正在认真处理多模态数据在分布式环境下的传输难题，这是从纯文本 RL 迈向多模态 Agent RL 的必经之路。
3.  **生态开放性**：集成 HF kernels (#1033) 表明项目正在拥抱开源社区标准，减少供应商锁定风险。

---
*分析师注：今日的更新表明 AReaL 正在从一个实验性框架向工业级、资源高效型的 RL 基础设施转型。*

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 项目日报 - 2026年03月15日

## 1. 今日速览
过去 24 小时内，TRL 项目维持较高的代码合并活跃度，无新版本发布。核心动向集中在 **GRPO 算法修复**、**vLLM 集成体验优化**以及**文档与辅助工具的完善**。共计处理 1 条 Issue，更新 13 个 PR（其中 5 个已合并关闭）。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
*   **#5196 [CLOSED] feat: Variational Sequence-Level Soft Policy Optimization (VESPO)**
    *   **详情**：作者 @casinca 提议在 `GRPOTrainer` 中集成 VESPO（Variational Sequence-Level Soft Policy Optimization）损失函数。该算法基于论文 [2602.10693](https://huggingface.co/papers/2602.10693)，不同于 GRPO，更接近 SAPO，引入了平滑的信任区域。
    *   **状态**：Issue 已关闭，相关实现已通过 PR #5199 提交。
    *   **链接**：[huggingface/trl Issue #5196](https://github.com/huggingface/trl/issues/5196)

## 4. 关键 PR 进展

### 算法增强与功能迭代
*   **#5199 [CLOSED] feat: 实现 VESPO 损失函数**
    *   为 `GRPOTrainer` 添加了 VESPO 支持，提供了除标准 GRPO 外的优化策略选择。
    *   **链接**：[huggingface/trl PR #5199](https://github.com/huggingface/trl/pull/5199)
*   **#5137 [OPEN] feat: GOLD/蒸馏训练器 Buffer 实现**
    *   正在为 `GOLDTrainer` 开发生成缓冲区（Buffer）机制，解耦生成与优化步骤，旨在支持多轮生成并提升训练稳定性。
    *   **链接**：[huggingface/trl PR #5137](https://github.com/huggingface/trl/pull/5137)

### vLLM 集成与稳定性修复 (重点)
*   **#5255 [CLOSED] chore: 默认 `vllm_mode` 切换为 `"colocate"`**
    *   **重大变更**：将默认模式从 `"server"` 改为 `"colocate"`。此举消除了用户手动配置独立 vLLM 服务器的摩擦，实现 "开箱即用"，显著降低了 GRPO/RLOO 等算法的使用门槛。
    *   **链接**：[huggingface/trl PR #5255](https://github.com/huggingface/trl/pull/5255)
*   **#5242 [OPEN] & #5145 [CLOSED] fix: 修复 GRPO 工具调用 Retokenization Bug**
    *   修复了 GRPO 在多轮工具调用中，因重新分词导致 Token ID 不对齐的形状不匹配错误。#5242 通过直接拼接 Token ID 从根本上解决了该问题。
    *   **链接**：[huggingface/trl PR #5242](https://github.com/huggingface/trl/pull/5242), [huggingface/trl PR #5145](https://github.com/huggingface/trl/pull/5145)
*   **#5203 [CLOSED] fix: 允许 vLLM 响应中 logprobs 为空**
    *   修复了 vLLM 服务返回空 logprobs 时导致的处理错误，增强了后端兼容性。
    *   **链接**：[huggingface/trl PR #5203](https://github.com/huggingface/trl/pull/5203)
*   **#5288 [OPEN] perf: vLLM 客户端 HTTP 调用超时设置**
    *   为 vLLM 客户端添加了 HTTP 请求超时机制，防止网络阻塞导致 Worker 无限挂起。
    *   **链接**：[huggingface/trl PR #5288](https://github.com/huggingface/trl/pull/5288)

### 性能与工程优化
*   **#5189 [CLOSED] perf: Packing 速度提升 35%**
    *   重构了 BFD packing 逻辑，向量化实现替换了原有逻辑，显著提升了数据处理效率。
    *   **链接**：[huggingface/trl PR #5189](https://github.com/huggingface/trl/pull/5189)
*   **#5280 [CLOSED] docs: 添加 Cursor IDE 规则**
    *   集成了 `.cursor/rules`，使 Cursor IDE 用户能够获得与 Claude Code/Codex 代理一致的仓库开发规范。
    *   **链接**：[huggingface/trl PR #5280](https://github.com/huggingface/trl/pull/5280)

## 5. 为什么值得关注
TRL 正在从一个单纯的 RLHF 实现库，演进为**支持复杂 Agent 交互和多种后端优化的综合 RL 训练框架**。

1.  **工具调用鲁棒性提升**：针对 GRPO 多轮工具调用中 "Retokenization" 问题的密集修复（#5242, #5145），表明项目方正着力解决 LLM 作为 Agent 进行强化学习训练时的底层稳定性痛点。
2.  **开发者体验（DX）优先**：将 vLLM 默认模式改为 `colocate`（#5255）是一个非常务实的决策，解决了分布式训练中服务部署的复杂性，让用户能更专注于算法本身。
3.  **前沿算法的快速落地**：迅速接纳 VESPO（#5199）等学术界新提出的优化算法，保持了库在技术路线上的前沿性。

该项目目前处于**工程成熟度快速提升阶段**，特别是在 LLM + RL + Tools 的交叉领域，是构建高阶 Agent 训练流程的关键基础设施。

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

以下是 **verl** 项目 2026-03-15 的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **4 条 Issues** 和 **15 条 PRs**。社区焦点集中在 **多模态模型（VLM）的支持扩展**、**异构硬件（NPU/B200）的适配** 以及 **训练稳定性修复**（如 FSDP 死锁和权重同步）。虽然无新版本发布，但多个功能性 PR（如 On-Policy Distillation 和 FlowGRPO）均有实质性推进。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **[硬件支持] B200 GPU 适配询问** [#2015](https://github.com/verl-project/verl/issue/2015)
    *   **摘要**：用户寻求在 Nvidia B200 上安装 Verl 的指导。当前安装脚本默认基于 CUDA 12.4，而 B200 需要 CUDA 12.8。用户尝试了 `torch=2.7.0+cu128` 和 `vllm=0.9.1` 但遇到依赖冲突。这是社区对新一代硬件支持需求的信号。
*   **[核心 Bug] FSDP 训练死锁** [#5591](https://github.com/verl-project/verl/pull/5591) (关联 Issue)
    *   **摘要**：在 FSDP 引擎中使用动态批处理时，由于缺少 `dp_group` 参数传递导致 CUDA 死锁。
*   **[代码回归] `main_generation` 移除导致示例损坏** [#5593](https://github.com/verl-project/verl/issue/5593)
    *   **摘要**：最新版本移除了 `main_generation`，导致官方示例脚本（如 `run_deepseek7b_mutli_node.sh`）无法运行。

### 4. 关键 PR 进展
*   **[功能] 支持 VLM 的在线策略蒸馏** [#5592](https://github.com/verl-project/verl/pull/5592) & [#4897](https://github.com/verl-project/verl/pull/4897)
    *   **摘要**：扩展了 Verl 的蒸馏能力，现在支持视觉语言模型（VLM）作为 Student 和 Teacher。使用了 k1 KL 估算器作为奖励，并在 Qwen3-VL 模型上进行了测试。这是通往多模态 RL 规模化的重要一步。
*   **[功能] 支持 FlowGRPO 训练 QwenImage** [#5297](https://github.com/verl-project/verl/pull/5297)
    *   **摘要**：集成了 `vLLM-Omni` 作为 Rollout 引擎，并使用 `Diffusers` 作为训练引擎，实现了针对 Qwen-Image 的 FlowGRPO 算法支持，标志着 Verl 在图像生成模型 RL 微调能力的增强。
*   **[生态] 集成 Atropos RL 环境** [#5514](https://github.com/verl-project/verl/pull/5514)
    *   **摘要**：将 [atropos](https://github.com/NousResearch/atropos) RL 环境集成到 GRPO 训练流程中，通过轮询得分批次进行训练，丰富了 Verl 的环境生态。
*   **[修复] FSDP 死锁修复** [#5591](https://github.com/verl-project/verl/pull/5591)
    *   **摘要**：修复了 `dp_actor.py` 中因 `prepare_dynamic_batch` 缺失 `dp_group` 导致的死锁问题，这是 Megatron Worker 修复的 FSDP 对应版本。
*   **[修复] Ascend NPU 兼容性** [#5246](https://github.com/verl-project/verl/pull/5246)
    *   **摘要**：修复了在昇腾 NPU 云服务器容器中运行时的设备检查 Bug 及启动命令错误。

### 5. 为什么值得在当前 RL 生态继续关注
1.  **前沿模型覆盖**：从今日的 PR 进展看，verl 正迅速补齐**多模态（VLM）**和**图像生成**领域的 RL 能力（On-policy Distillation, FlowGRPO），这紧贴了当前从纯文本 LLM 向多模态 Agent 进化的技术趋势。
2.  **异构计算支持**：针对 B200 的 Issue 和针对 Ascend NPU 的 PR 显示，该项目正积极应对硬件碎片化挑战，致力于构建跨平台（Nvidia/Ascend）的统一 RL 基础设施。
3.  **架构解耦与灵活性**：通过集成 Atropos 环境和重构 Profiler 工具，verl 正在解耦训练器与环境，使其不仅仅是一个 PPO/RLOO 训练库，而是一个能兼容多种外部环境反馈的通用 RL OS。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-03-15 RL 日报摘要：

# torchune RL 日报 (2026-03-15)

## 1. 今日速览
过去 24 小时内，torchtune 仓库处于低活跃度状态。无新增 Issue，无版本发布。仅有一个关于文档增强的 Pull Request 提交，重点在于补全自定义数据集的端到端教程。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无新增**：过去 24 小时内未收到新的 Bug 报告或功能请求。

## 4. 关键 PR 进展
*   **[Docs] 增加自定义数据集基础教程**
    *   **编号**: [#2956](https://github.com/pytorch/torchtune/pull/2956)
    *   **状态**: Open
    *   **作者**: @biefan
    *   **简评**: 该 PR 旨在降低用户接入私有数据的门槛。新增了 `docs/source/basics/custom_datasets.rst` 文档，详细演示了如何将自定义的 Message Transform（消息变换）与 `SFTDataset` 结合使用。这对于需要在特定垂直领域进行微调的开发者来说是重要的文档补全。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新平缓，但 PR #2956 反映了 torchtune 作为 PyTorch 生态核心组件的持续演进方向：
1.  **数据层抽象能力**: 强化学习（RL）尤其是 RLHF 阶段，数据的质量与格式至关重要。torchtune 持续优化 `SFTDataset` 与 Transform 的结合文档，意味着它正在提供更灵活的数据处理流水线，以适应复杂的 RL 数据清洗需求。
2.  **生产级落地**: 相比于快速迭代的算法库，torchtune 更侧重于提供稳定、可复现的训练基石。此类文档更新通常预示着 API 接口的稳定化，适合作为构建自定义 RL 训练循环的底层库。
3.  **原生 PyTorch 亲和性**: 对于需要深度定制 RL 算法（如修改 PPO/DPO 损失函数）的研究者，torchtune 提供了比封装度极高的框架更透明的控制权。

---
*数据来源: GitHub (torchtune)*

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

# RL 日报：rl_games 生态追踪 (2026-03-15)

## 1. 今日速览
过去 24 小时内，**rl_games** 仓库整体活跃度较低，无新版本发布或新的 Issue 提出。重点在于核心维护者提交了一项关键 PR，旨在整合 **MyoSuite** 基准测试配置并优化代码灵活性。

*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **Releases**: 0 个

---

## 2. 版本发布
无。

---

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

---

## 4. 关键 PR 进展
### [OPEN] Add MyoSuite training configs and configurable max_steps
*   **链接**: [Denys88/rl_games PR #336](https://github.com/Denys88/rl_games/pull/336)
*   **作者**: @Denys88
*   **核心内容**:
    1.  **MyoSuite 适配**: 迁移并重构了 #312 中的内容，使其兼容最新的 `master` 分支（主要是 gym → gymnasium 的迁移）。新增了 6 个 MyoSuite PPO 训练配置，覆盖肘部、手部姿态、手部伸展、手部重定向及行走任务。
    2.  **参数配置化**: 解除了 `player.max_steps` 原本硬编码（Hardcoded）的限制，现在可通过 `player_config['max_steps']` 进行配置。
*   **分析**: 此 PR 显示了项目正在积极跟进物理仿真生态（MyoSuite）并修复旧代码中的硬编码问题，有助于提升推理阶段的灵活性。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新频率不高，但基于历史数据及今日 PR 内容，**rl_games** 依然具有以下生态价值：

1.  **Isaac Gym/Orbit 生态的黄金搭档**: 它是目前最高效的 GPU 加速 RL 库之一，与 NVIDIA Isaac Gym/Orbit 等高频物理仿真环境深度绑定，是解决复杂机器人控制任务的首选基线代码。
2.  **对齐最新标准 (Gymnasium)**: 今日的 PR (#336) 表明项目正在积极处理从 `OpenAI Gym` 到 `Gymnasium` 的 API 迁移，确保了与现代 RL 工具链的兼容性。
3.  **肌肉骨骼仿真 支持**: 通过引入 MyoSuite 配置，项目拓展了在生物力学和高端机器人控制领域的应用边界。

---
*分析师注：建议关注 MyoSuite 相关的 Benchmark 结果，这通常是验证 PPO 算法在极高自由度下性能的重要参考。*

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