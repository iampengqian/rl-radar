# RL 开源生态日报 2026-06-10

> 生成时间: 2026-06-09 22:27 UTC | 覆盖项目: 15 个

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
当前（2026年中）强化学习（RL）开源生态呈现出极为明显的**两极分化与重心转移**趋势：
1. **资源与注意力高度向 LLM Post-training 倾斜**：围绕大模型对齐（RLHF/GRPO/DPO）的基础设施项目（TRL, verl, AReaL, slime 等）正处于高度活跃的快速迭代期；而传统强化学习算法库（CleanRL, SB3, Tianshou 等）以及经典环境生态基本陷入停滞或平稳维护期。
2. **“算法库”全面向“分布式调度框架”演进**：头部项目不再局限于实现特定的 RL 算法，而是致力于解决超大规模集群下的异构硬件通信、推理/训练引擎解耦、显存墙突破等极具挑战性的系统工程痛点。
3. **多模态（VLM）与复杂 Agent RL 成为新战场**：单纯文本模型的 RL 对齐已逐渐成为基建标配，视觉语言模型（VLM）的对齐训练稳定性、长序列/多图数据处理，以及多环境并行的 Agent 强化学习（如 Search-R1）正成为各框架竞相支持的核心特性。

## 各项目活跃度对比
在过去 24 小时内，生态内各项目的活跃度呈现显著的梯队差异。大模型对齐框架占据了绝大部分的核心开发资源。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 29 | 0 | 深度攻坚多硬件适配与算力显存压榨，加速成为事实标准 |
| **TRL** | 8 | 27 | 0 | 紧贴 vLLM 进行推理训练一体化改造，探索多智能体隔离路由 |
| **slime** | 2 | 15 | 0 | 死磕底层显存与算子优化，保持对 SGLang/vLLM 推理后端的高兼容 |
| **AReaL** | 4 | 7 | 0 | 推进 PD 分离架构，敏捷跟进最新 MoE 大模型适配 |
| **OpenRLHF** | 0 | 1 | 0 | 聚焦于核心算法的边界条件修复与极稳态维护 |
| **ROCK** | 1 | 1 | 0 | 专注于解决大规模分布式 RL 场景下的数据与运维基建难题 |
| **Open Instruct** | 0 | 2 | 0 | 探索后 Transformer 时代（非标准 Attention）的 RL 训练基建 |
| **ROLL** | 1 | 0 | 0 | 暴露并攻坚混合 SSM 架构在复杂分布式 Offload 下的底层内存缺陷 |
| **Gymnasium** | 0 | 1 | 0 | 作为传统 RL 的 API 标准，平稳接收多智能体等第三方生态扩充 |

*(注：CleanRL, PettingZoo, rl_games, Stable Baselines3, Tianshou, torchtune 等项目在过去 24 小时内无实质性代码活动，处于稳定维护期。)*

## 共同关注的研究与工程方向
在高度活跃的 LLM 对齐框架中，尽管项目各异，但都在集中攻坚相似的技术瓶颈，具体可分为研究与工程两大方向：

**研究侧信号：**
1. **GRPO 算法的深度演进与鲁棒性提升**：GRPO 已成为当前开源 RLHF 的绝对主力。各框架正在集中解决其潜在的数值崩溃问题（如 KL 散度溢出、log-ratio 裁剪）以及极端参数（如 $n=1$）下的边界计算崩溃（如 OpenRLHF 修复的优势值坍缩）。
2. **蒸馏范式向 RL 对齐的渗透**：自蒸馏与多教师蒸馏不再是单纯的预训练手段。TRL 引入了全新的在线策略自蒸馏（OPSD）架构，AReaL 也落地了多教师加权混合蒸馏，标志着 RL 阶段的 Reward Model 正在向更复杂的知识引导范式过渡。
3. **面向智能体与多模态的前沿对齐**：多环境/工具调用隔离（TRL）、Search-R1 边界控制修复、Qwen3-VL 复杂图像配置的支持（slime），证明开源界正努力通过 RL 提升模型在复杂真实环境中的多模态推理与工具调用能力。

**工程与基础设施侧信号：**
1. **推理/训练分离的异步调度架构**：这是当前 RLHF 工程的最大痛点。Verl 引入了独立的 Log Prob 服务器，AReaL 推进 PD 分离，TRL 则实验性地支持异步 GRPO 增量权重同步。其核心诉求皆在于打破训练与推理（vLLM/SGLang）的同步等待，提升 GPU 算力转化率。
2. **面向大词表与长序列的显存/通信压榨**：针对长序列 MoE 模型，verl 实现了长上下文 top-K loss 显存优化（规避 OOM），slime 通过算子融合降低 PPO 显存峰值，底层工程正在向“Byte 级优化”演进。
3. **全面拥抱异构算力生态**：NVIDIA 的垄断正在被打破。Verl 大幅推进了 AMD ROCm 的适配与 CI 测试，同时各大框架均在紧锣密鼓地适配华为昇腾 NPU，多硬件后端无缝切换已成为新一代 RL 基础设施的标配要求。

## 差异化定位分析
1. **TRL：最高层的“标准制定者”与生态胶水**。TRL 并不下沉去造极底层的分布式轮子，而是通过深度绑定 vLLM 等推理框架，提供开箱即用的高层 API。它在多智能体工具调用、自蒸馏算法上的快速集成能力，使其成为应用层开发者和中小型企业构建 RLHF 流水线的首选。
2. **verl：全栈硬核的“算力榨汁机”**。Verl 的核心定位是极致的系统级优化。无论是解决 FSDP 显存极度吃紧下的 chunked gather 算子问题，还是构建多后端异步引擎与 CI 体系，它都在直指千卡级大规模集群的底层通信与吞吐瓶颈，极其适合超大规模算力集群的 Post-training 团队。
3. **slime：兼顾学术前沿与底层优化的“尖刀”**。依托清华的学术背景，Slime 在紧跟 SOTA 算法（如各类 VLM 支持、Search-R1）的同时，在显存算子融合等卡脖子处发力。其“乐高式”的后端替换设计（保留 Megatron 栈无缝替换 Rollout 引擎）对需要频繁复现论文的极客团队极具吸引力。
4. **AReaL：前沿模型架构的“首飞试验场”**。AReaL 展现出了惊人的工程敏捷性，总是在第一时间（甚至尚未完全普及）适配如 Qwen3.6 MoE 及其 MTP 机制等极其复杂的底层架构，是探索前沿大模型底层训练机制的绝佳基座。
5. **Open Instruct / ROLL：探索非标架构与长尾基建的“修补匠”**。它们关注更为长远和底层的痛点，例如 Open Instruct 探索支持 Flash Linear Attention 的 RL 训练，而 ROLL 则死磕混合 SSM 架构在 Offload 时的 C++ 指针悬空问题，这些工作填补了主流 Transformer 生态之外的工程空白。

## 社区热度与成熟度
1. **高度活跃与高容错并存**：TRL、verl 等项目虽然迭代极快（日均数十个 PR），但 Issues 列表也暴露出大量严重的基础性问题（如多卡挂死、特定模型依赖冲突、评估失效）。这表明当前的 LLM RL 框架仍处于“边开飞机边换引擎”的高速公路测试阶段，距离真正的企业级稳定态仍有距离。
2. **底层复杂性倒逼社区走向深度专业**：开源社区讨论的重点已从“如何调参”转变为“CUDA IPC 指针”、“NCCL 死锁”、“TE 模块 Storage 绑定”等极度硬核的底层系统问题。这意味着新进入者的门槛急剧拉高，核心贡献正不可逆转地向各大头部 AI 基础设施团队集中。

## 值得关注的趋势信号
1. **PD 分离与异构硬件加速脱离“概念期”**：训练与推理节点的物理分离、针对 AMD/Ascend 等非卡的底层算子适配，已从早期的规划转为实际的 PR 合并与 E2E 测试。这预示着未来 1-2 个季度内，基于异构算力的 RLHF 成本将出现指数级下探。
2. **Delta 权重传输与算子融合成为核心壁垒**：针对上千亿参数模型的 RL 训练，全量同步权重的网络 I/O 开销已成为绝路。稀疏增量权重编码传输（TRL）和 FSDP 显存零拷贝等工程技巧，正在重塑大模型迭代周期的速度极限。
3. **RLHF 催生下一代模型架构的反向适配**：Open Instruct 对 FLA（线性注意力）的引入，以及 ROLL 在处理 SSM 架构的显存管理上暴露的痛点，清晰地释放了一个信号——**下一代基础大模型（可能抛弃纯 Transformer）在设计之初，就必须将 RLHF 训练中的显存管理和参数状态同步等物理约束纳入考量**。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-06-10 ROLL 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时，ROLL (alibaba/ROLL) 代码仓库整体保持平静，无新版本发布与 PR 更新。项目当前的开发焦点集中在解决前沿模型架构在底层分布式训练和显存管理（Offload）机制上的兼容性挑战，今日新增 1 条与混合注意力架构底层内存报错相关的高质量 Issue。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[#459 qwen3.6-27B在8XH800上训练报错](https://github.com/alibaba/ROLL/issues/459)** `[OPEN]`
  - **背景**: 用户尝试在 8 卡 H800 集群上对带有 GatedDeltaNet（Mamba 类 SSM）混合注意力层的 qwen3.6-27B 模型进行训练。
  - **根因分析**: 触发底层段错误。由于 SSM 层中的 TransformerEngine (TE) 模块持有内部 C++ `_extra_state`（缓存了指向 `TensorImpl`/`Storage` 的指针），当 ROLL 执行参数 Offload 机制（将参数展平存入 CPU buffer 并重新绑定 Tensor 切片）时，原始 C++ Storage 被剥离，导致 TE 缓存的指针悬空，进而在下一次 Forward 阶段引发内存非法访问。
  - **生态意义**: 该 Issue 准确命中了当前 RLHF/LLM 训练框架在支持非标准 Transformer 架构（如 Jamba/Mamba 等线性 RNN 混合架构）时普遍面临的底层显存管理与 C++ 状态同步的技术盲区。

### 4. 关键 PR 进展
- **无 PR 更新**。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 是阿里巴巴开源的大规模强化学习训练框架。从 Issue #459 可以看出，ROLL 的工程落地极其贴近大模型的最前沿。框架不仅支持常规的 LLM，其 Offload 机制更是直击 27B 级别大模型在 RL 阶段（如 PPO/DPO 训练）的显存痛点。持续关注 ROLL 有助于掌握国内头部 AI 团队如何通过定制化的 Tensor Offload 与底层的 CUDA/显存生命周期管理，来突破复杂新兴架构在分布式训练中的工程瓶颈。

---
*数据来源: GitHub (alibaba/ROLL) | 统计时间: 2026-06-10*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-06-10 ROCK 项目 RL 日报摘要：

---

### ROCK 项目 RL 生态日报 (2026-06-10)

#### 1. 今日速览
过去 24 小时，ROCK 仓库活动相对平稳，无新版本发布。社区与内部研发主要聚焦于底层运维工具的健壮性修复及数据集处理模块的性能调优。共处理/更新 Issue 1 条，更新 PR 1 条。

#### 2. 版本发布
*   **最新 Releases**：近 24 小时无新版本发布。

#### 3. 重点 Issues
*   **[#1069 [CLOSED] [Bug] FileCleanupTask: `-depth` + `-prune` 冲突导致目录排除失效](https://github.com/alibaba/ROCK/issues/1069)**
    *   **作者**: zhangjaycee
    *   **摘要**: 社区精准定位了一个在日志/文件清理任务中的底层 Shell 行为 Bug。当使用 `find` 命令清理空目录时，同时使用 `-depth`（深度优先遍历）和 `-prune`（排除特定目录）会导致后者失效（在 GNU `find` 中 `-prune` 在 `-depth` 模式下为 no-op）。该 Issue 目前已被关闭，有效提升了 RL 大规模分布式训练时日志清理机制的可靠性。

#### 4. 关键 PR 进展
*   **[#1064 [OPEN] perf(datasets): cache OSS bucket, add server-side pagination and --filter for tasks](https://github.com/alibaba/ROCK/pull/1064)**
    *   **作者**: xdlkc
    *   **摘要**: 针对数据集拉取和列出操作（`datasets list`）的一项核心性能优化。
    *   **技术亮点**:
        1.  **缓存优化**: 复用 `oss2.Bucket` 实例，避免了每次调用 `list_all_datasets` 时创建 25+ 个 HTTP 会话，使耗时从 5.0s 降至 2.7s。
        2.  **服务端分页**: 在 `_extract_tasks_from_split` 中引入了 `offset`/`limit` 下推查询、提前终止机制以及 `continuation_token` 缓存，大幅降低了海量数据集索引时的带宽消耗与客户端内存压力。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
在大模型和 RLHF/RLAIF 生态中，算法天花板不仅取决于模型架构，更受制于底层基础设施。ROCK 项目的近期动态（如解决分布式环境日志误删问题、优化云端 OSS 数据集的高效分页拉取）折射出其**正致力于解决 RL 训练中“工程效率”与“数据吞吐量”的痛点**。对于需要处理海量偏好数据、运行高并发分布式训练的 RL 团队而言，ROCK 在底层存储交互和集群任务调度上的持续迭代，使其成为一个具有极高实用价值的工程化基座。

--- 
*数据来源：alibaba/ROCK GitHub 仓库*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-06-10)

## 1. 今日速览
过去 24 小时内，[THUDM/slime](https://github.com/THUDM/slime) 仓库保持了高频的社区协作与底层迭代，共产生 **2 条 Issues** 和 **15 条 PRs** 更新（无新版本发布）。动态高度聚焦于 **VLM（视觉语言模型）多模态数据处理优化**、**PPO 显存/算子性能提升**以及**生态集成**。项目在强化学习后训练的工程化落地方面持续发力。

## 2. 版本发布
**无**。近期无新的 Release 版本发布。

## 3. 重点 Issues
- **[[Question] VLM 多图加载速度优化探讨** - Issue #2037](https://github.com/THUDM/slime/issues/2037) 
  社区用户指出在处理包含 30+ 张图片的 VLM 数据集时加载缓慢的问题，探讨是否应引入类似 `--max_workers` 的多线程加载机制。该需求直接催生了今日多份数据加载优化的 PR。
- **[[enhancement] SGLang 兼容性追踪** - Issue #6](https://github.com/THUDM/slime/issues/6)
  长期追踪议题。Slime 的核心设计之一是与最新版 SGLang 保持兼容，为支持特定 RL 特性需对 SGLang 进行部分底层修改。该 Issue 集中管理了相关的 PRs，当前获 17 个 👍，是项目的技术风向标之一。

## 4. 关键 PR 进展
今日的 PR 动态涵盖了性能优化、Bug 修复、多模态支持及生态扩展，核心进展如下：

### 核心算法与性能优化
- **[perf(ppo): 降低 log-prob + entropy 显存峰值** - PR #2011](https://github.com/THUDM/slime/pull/2011)
  一项关键的性能优化。将 log-prob 和 entropy 计算融合为单一的 autograd Function，从而在维持计算逻辑的同时将 logits 的工作副本从两个减少到一个，显著降低了 PPO 训练的显存峰值。
- **[feat(rollout): 侧新增 Torch Profiler 支持** - PR #2038](https://github.com/THUDM/slime/pull/2038)
  补全了 SGLang rollout 阶段的性能剖析能力。支持通过 CLI 触发 `torch profiler`，与现有的训练侧 `--profile-target` 形成闭环，大幅简化了 RLHF 全链路的性能调试难度。

### 多模态与数据处理
- **[feat: 支持 VLM 富媒体图像配置** - PR #2044](https://github.com/THUDM/slime/pull/2044) / [同向 PR #2043 (CLOSED)](https://github.com/THUDM/slime/pull/2043)
  增强了 `slime/utils/data.py`，使其原生支持来自 Qwen3-VL 等先进模型的复杂图像配置，扩展了 Slime 在多模态 RL 后训练场景下的泛化能力。
- **[feat: 数据集加载增加 num_workers 支持** - PR #2040 (CLOSED)](https://github.com/THUDM/slime/pull/2040)
  针对上述 Issue #2037 的直接响应。在 `slime/rollout/data_source.py` 中引入了并行加载逻辑，显著提升了海量 VLM 图像数据的加载吞吐量。
- **[fix(search-r1): 在特定边界处截断生成** - PR #2036](https://github.com/THUDM/slime/pull/2036)
  修复了 Search-R1 示例中的多轮 Rollout 问题。强制推理引擎在遇到 `</search>` 或 `</answer>` 时停止生成，避免了模型输出冗余或伪造的垃圾信息。

### 算法修复与生态扩充
- **[docs: 修正 OPD 反向 KL 散度公式** - PR #2039](https://github.com/THUDM/slime/pull/2039)
  重要理论文档修复。将 OPD 惩罚项的 KL 方向更正为 `D_KL(P_student || P_teacher)`，使其与实际代码实现（`student_log_probs - teacher_log_probs`）保持严格一致。
- **[docs: 新增 vLLM 生态框架 vime** - PR #2045 (CLOSED)](https://github.com/THUDM/slime/pull/2045) / **[AgentCore RL Toolkit** - PR #2034 (CLOSED)](https://github.com/THUDM/slime/pull/2034)
  持续扩展 README 生态版图。其中 [vime](https://github.com/THUDM/slime/pull/2045) 明确是一个基于 vLLM 构建的 RL 后训练框架，它保留了 Slime 的 Megatron 训练栈和数据流，同时将 Rollout 后端替换为了 vLLM。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **攻克 RL 底层工程痛点**：Slime 并非仅仅停留在算法封装，而是在死磕大模型 RL 训练的工程瓶颈。例如通过算子融合（PR #2011）解决 PPO 显存泄漏/峰值问题，引入多线程并行解决 VLM 数据加载阻塞问题，这些都是大规模 Post-training 极其关键的卡脖子环节。
2. **灵活的底层推理/训练解耦设计**：项目不仅保持与 [SGLang](https://github.com/THUDM/slime/issues/6) 的深度兼容，其架构还允许社区像搭积木一样替换核心组件（例如通过 [vime](https://github.com/THUDM/slime/pull/2045) 将 Rollout 后端无缝替换为 vLLM，同时保留高效的 Megatron 训练栈），实现了极佳的后端拓展性。
3. **前沿技术应用落地快**：从最新针对 Qwen3-VL 复杂图像配置的支持，到 Search-R1 多轮 Tool-call 边界控制的修复，项目紧贴当前 VLM 对齐和 Agent RL（如 Search R1）的技术最前沿，是复现和二次开发 SOTA RL 工作的极佳基建。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-06-10）：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共处理/更新 **4 条 Issues** 和 **7 条 Pull Requests**，无新版本发布。整体动态集中在**底层引擎缺陷修复、前沿大模型（Qwen3.6 MoE）架构适配、以及推理/训练分离架构的工程推进**，显示出项目在应对大规模复杂 RLHF 场景时的高频迭代状态。

### 2. 版本发布
* **最新 Releases**：无

### 3. 重点 Issues
* **[BUG] 非 DP 头节点在 TP/PP > 1 时 `clear_batches()` 崩溃回归**
  * **摘要**：自 #1282 引入的回归 Bug。当前 `TrainController._call_workers` 仅向 DP 头节点传递位置参数，导致非 DP 头节点在张量/流水线并行（TP/PP）大于 1 的多卡分布式架构下调用 `clear_batches()` 时因缺少参数发生崩溃。
  * **链接**：[areal-project/AReaL Issue #1298](https://github.com/areal-project/AReaL/issues/1298)
* **[Feature] 支持 PD 分离**
  * **摘要**：旨在优化生产环境下的 Rollout 性能资源管理。该特性计划在保持 `areal/api/` 向后兼容的前提下，解耦推理和训练过程，这对于提升大规模 RL 训练的吞吐量至关重要。
  * **链接**：[areal-project/AReaL Issue #1329](https://github.com/areal-project/AReaL/issues/1329)
* **[Feature] 适配 Qwen3.6 MoE 训练：将 MTP head 设为可选**
  * **摘要**：为了支持最新 MoE 架构（如 `Qwen3.6-35B-A3B`）的 RL 训练，需处理其 Multi-Token-Prediction (MTP) head。该 Issue 建议在 RL 流程中默认丢弃该模块。
  * **链接**：[areal-project/AReaL Issue #1398](https://github.com/areal-project/AReaL/issues/1398)
* **[Feature] 支持多教师模型蒸馏**
  * **摘要**：提议扩展现有的单教师 On-policy Reverse KL 蒸馏实现，支持带可配置混合权重的多教师知识蒸馏。
  * **链接**：[areal-project/AReaL Issue #1399](https://github.com/areal-project/AReaL/issues/1399)

### 4. 关键 PR 进展
* **[修复] 修复分布式引擎 `clear_batches` 参数传递缺陷** `#1402` [OPEN]
  * **进展**：针对 Issue #1298 的直接修复。通过将所有引擎的 `shard_ids` 默认值设为 `None` 来兼容非 DP 头节点的无参调用，解决高并行度下的系统崩溃问题。
  * **链接**：[areal-project/AReaL PR #1402](https://github.com/areal-project/AReaL/pull/1402)
* **[功能] 支持 Qwen3.6 MoE RL 训练** `#1403` [OPEN]
  * **进展**：配合 Issue #1398，在 megatron 后端中实现了对 Qwen3.6 MoE 架构的支持，核心改动是将 MTP 头默认剥离，以适配 RL 训练循环。
  * **链接**：[areal-project/AReaL PR #1403](https://github.com/areal-project/AReaL/pull/1403)
* **[功能] 多教师 On-policy 蒸馏支持** `#1400` [OPEN]
  * **进展**：落地了 Issue #1399 的需求，在 AReaL 的 on-policy 蒸馏框架中引入了多教师加权混合蒸馏机制。
  * **链接**：[areal-project/AReaL PR #1400](https://github.com/areal-project/AReaL/pull/1400)
* **[功能] FSDP 权重共存更新** `#1361` [OPEN]
  * **进展**：在 `AwexFSDPAdapter` 中实现了基于 CUDA IPC 的 FSDP 训练与 SGLang 推理共存环境下的权重更新机制，对齐了现有的 Megatron 共存路径，有效降低权重同步延迟。
  * **链接**：[areal-project/AReaL PR #1361](https://github.com/areal-project/AReaL/pull/1361)
* **[功能] vLLM 后端支持 R3** `#1389` [OPEN]
  * **进展**：为 vLLM 后端引入了 Rollout routing replay (R3) 支持，要求 vLLM 版本 $\ge$ 0.22.0，进一步丰富了 AReaL 的推理引擎生态。
  * **链接**：[areal-project/AReaL PR #1389](https://github.com/areal-project/AReaL/pull/1389)
* **[修复] 解耦部署下的 v2 awex 权重更新阻塞修复** `#1401` [OPEN]
  * **进展**：修复了在 train/inference 节点分离部署时，因 NCCL 配置错误导致的 `connect_engine` 挂起问题，打通了去中心化部署的端到端流程。
  * **链接**：[areal-project/AReaL PR #1401](https://github.com/areal-project/AReaL/pull/1401)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的大规模 RLHF 工程能力**：从修复 TP/PP 高并发崩溃，到推进 PD 分离，再到 CUDA IPC 权重零拷贝更新，AReaL 正在解决千亿级参数模型在生产环境下 RL 训练的底层网络与显存墙瓶颈。
2. **敏捷跟进前沿模型架构**：第一时间适配 `Qwen3.6 MoE` 及其 MTP 机制，证明该项目具备与开源前沿大模型迭代保持同频甚至超前适配的工程响应力。
3. **丰富且深度集成的后端生态**：同时兼容 Megatron 与 FSDP 训练后端，深度绑定优化 SGLang 与 vLLM 推理引擎，并在探索多教师模型蒸馏等高级算法，为不同规模和需求的算法团队提供了一站式的高性能 RL 基础设施。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 | 2026-06-10

## 1. 今日速览
过去 24 小时内，TRL 仓库保持了高频的迭代节奏。尽管没有发布新版本，但共产生了 **27 个 PR 更新**（多笔核心代码合并及重要架构升级）和 **8 个 Issue 更新**。当前开发重心明显聚焦于 **GRPO 算法与 vLLM 后端的深度/异步集成、多模态 (VLM) 对齐训练的稳定性修复，以及全新自蒸馏 架构的引入**。

---

## 2. 版本发布
- **最新 Releases**: 无

---

## 3. 重点 Issues
今日的 Issues 集中反映了分布式训练的阻塞卡点及数值稳定性问题，部分已通过新的 PR 修复：

- **GRPO + vLLM 多卡挂死问题** [#3671](https://github.com/huggingface/trl/issues/3671) `[OPEN]`
  GRPOTrainer 在结合 vLLM colocate 后端和 PEFT 进行多卡训练时，会出现随机无响应挂起（Hanging）的严重 Bug，目前该问题正在持续追踪中。
- **GRPO KL 散度数值溢出** [#3015](https://github.com/huggingface/trl/issues/3015) `[OPEN]`
  在 GRPO 训练中，当策略模型与参考模型的分布差异过大时，KL 计算中的 `exp()` 函数容易产生 `inf`，导致数值崩溃。
- **Online DPO 评估逻辑失效** [#2228](https://github.com/huggingface/trl/issues/2228) `[OPEN]`
  `OnlineDPOTrainer` 的损失计算深度耦合在 `training_step` 中，导致在评估阶段模型无法正确计算指标而是直接 fallback 到原始 prompt 预测。
- **vLLM LoRA 仅同步 Adapter 权重的诉求** [#5975](https://github.com/huggingface/trl/issues/5975) `[OPEN]`
  社区提出，目前的 PEFT 同步会将 LoRA 权重合并进基座模型再全量传输给 vLLM。建议增加一种仅同步 Adapter 增量权重的模式，以大幅提升 AsyncGRPO 的同步效率。

---

## 4. 关键 PR 进展
今日的 PR 包含大量关键的架构改进和 Bugfix，尤其是权重同步和自蒸馏算法的扩展：

### 核心算法与后端集成
- **原生支持 vLLM 异步权重同步** [#5892](https://github.com/huggingface/trl/pull/5892) `[OPEN]`
  对接 vLLM >= 0.22.0 引入的原生 RL 4 阶段权重传输协议，替换了 AsyncGRPO 原有的 2 次调用流，大幅优化异步训练性能。
- **AsyncGRPO 增量 权重同步** [#5937](https://github.com/huggingface/trl/pull/5937) `[OPEN]`
  实验性支持：在 AsyncGRPO 中检测优化器步后发生变化的 bf16 权重，仅编码并传输变化的 sparse patch（通过 HF Bucket），显著降低网络通信开销。
- **新增 OPSD (在线策略自蒸馏) 训练器** [#5990](https://github.com/huggingface/trl/pull/5990) `[OPEN]`
  基于论文 *On-Policy Self-Distillation*，在 `trl/experimental/opsd` 实现了全新的自蒸馏训练器。
- **GRPO 支持多环境并行** [#5986](https://github.com/huggingface/trl/pull/5986) `[OPEN]`
  允许 GRPO 在一次运行中同时接入不同环境（如同时进行代码任务和游戏任务），模型会根据数据字段自动路由专属环境，且防止工具在 Prompt 中互相泄漏。

### 关键 Bug 修复与稳定性提升
- **修复 GRPO KL 溢出** [#5984](https://github.com/huggingface/trl/pull/5984) `[OPEN]`
  针对 Issue [#3015](https://github.com/huggingface/trl/issues/3015)，引入了 `kl_log_ratio_clip` 配置，在执行 `exp()` 前对 log-ratio 进行裁剪，防止发散。
- **修复 OnlineDPO 评估逻辑** [#5985](https://github.com/huggingface/trl/pull/5985) `[OPEN]`
  解决了 Issue [#2228](https://github.com/huggingface/trl/issues/2228) 中的评估失效问题，重构了损失计算逻辑，使其在训练和评估阶段都能正确工作。
- **Chat Template Stop Token 泄露测试** [#5988](https://github.com/huggingface/trl/pull/5988) `[OPEN]`
  增加 CI 检查，防止 SFT 训练时，模型因为 Mask 配置错误而学不到 Stop Token（导致模型无法停止生成）。
- **DPO / KTO 视觉语言模型 (VLM) 截断崩溃修复** [#5881](https://github.com/huggingface/trl/pull/5881) / [#5982](https://github.com/huggingface/trl/pull/5982) `[CLOSED/MERGED]`
  修复了当 `max_length` 触发截断时，VLM 图像特征与文本 Token 长度不匹配导致的 `ValueError` 崩溃问题。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **定义 LLM 生产级 RLHF 的标准范式**：TRL 正在从“单一算法实现库”演变为“RLHF 分布式调度框架”。例如与 vLLM 的深度绑定（原生 API 接入、4阶段协议、Delta 权重传输），正在解决大模型在生产环境下 RL 训练的 I/O 瓶颈和多卡挂死痛点。
2. **从单技能向多智能体 绩效演进**：PR #5986 引入的多环境支持，标志着 TRL 正在突破传统单一奖励模型打分的限制，开始支持具备路由能力的复杂 Agent 训练（如同时训练代码和逻辑推理能力且工具隔离）。
3. **极其迅速的工程响应与前沿落地**：无论是跟进 AMD/ROCm 的 CI 基建（PR #5918），还是快速集成最新的学术成果（如 Online Self-Distillation），TRL 团队保持了极高的敏捷度。对于需要构建可靠对齐流水线的开发者和企业而言，TRL 是目前跟踪成本效益最高、生态绑定最深的头部开源项目。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报摘要：OpenRLHF/OpenRLHF (2026-06-10)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体趋于平稳，无新增 Issues 和版本发布。核心代码库仅有 1 个 PR 更新，主要集中在对底层算法核心逻辑（GRPO 及优势值计算）的潜在 Bug 修复。项目当前处于稳定迭代与代码质量维护阶段。

## 2. 版本发布
过去 24 小时无新版本发布。（[查看所有 Releases](https://github.com/OpenRLHF/OpenRLHF/releases)）

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。（[查看所有 Issues](https://github.com/OpenRLHF/OpenRLHF/issues)）

## 4. 关键 PR 进展
- **#1250 [CLOSED] Fix two latent bugs: dr_grpo n=1 guard and masked_normalize broadcast**
  - **作者**: hijkzzz
  - **链接**: [OpenRLHF/OpenRLHF PR #1250](https://github.com/OpenRLHF/OpenRLHF/pull/1250)
  - **技术摘要**: 该 PR 修复了两个关键的底层逻辑缺陷：
    1. **dr_grpo 的 $n=1$ 边界守卫缺失**：类似于 `reinforce_baseline/group_norm`，`dr_grpo` 会在 `experience_maker` 中从奖励中减去每个 prompt 的组均值。当 `n_samples_per_prompt == 1` 时，组均值等于单一奖励值，导致所有优势值坍缩为 0，从而使训练失效。该 PR 补充了相关的断言保护。
    2. **masked_normalize 广播问题**：修复了在掩码归一化过程中可能存在的张量广播隐患。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击算法工程化的深水区**：如 PR #1250 所示，开源 RL 框架的真正壁垒不仅在于算法论文的复现，更在于对极端参数设置（如 $n=1$）和底层张量计算中边界条件的严谨把控，OpenRLHF 展现出了极高的工程成熟度。
2. **对齐前沿算法的快速响应**：项目对 `dr_grpo`（DeepSeek 开源的高效策略优化算法）等前沿 RLHF 算法的支持极为紧密。对于致力于大模型对齐与 Post-training 的研发团队而言，它是目前跟进 SOTA RL 算法不可或缺的基础设施。
3. **极致的训练稳定性**：在 LLM 训练成本高昂的背景下，框架对潜在逻辑漏洞的及时排查（如阻止引发“优势值全为 0 导致静默训练失败”的 Bug），为开发者提供了极高的容错和稳定性保障。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 `verl` 项目 2026-06-10 RL 日报摘要：

# verl 项目日报 (2026-06-10)

## 1. 今日速览
过去 24 小时内，verl 项目保持着高频的开发迭代。共有 **5 条 Issues** 更新，**29 条 Pull Requests** 获得推进，其中涵盖大量底层基础设施重构、多硬件生态（Ascend NPU / AMD ROCm）支持以及对前沿模型（如 Qwen3.5、VLM）的适配。项目暂无新版本发布。

## 2. 版本发布
**无**。目前暂无最新的 Release 发布。

## 3. 重点 Issues
今日的 Issues 集中在异构硬件支持路线图、底层精度控制以及依赖兼容性问题上。

*   **[Roadmap] verl on AMD/ROCm — 26Q2/Q3** ([#6590](https://github.com/verl-project/verl/issues/6590))
    *   **摘要**: 官方发布了针对 AMD/ROCm（如 MI355X）的支持路线图，旨在填补 AMD GPU 生态与现有成熟 NVIDIA 及增长迅速的 Ascend NPU 生态之间的差距。
*   **Add Megatron-LM precision options** ([#6576](https://github.com/verl-project/verl/issues/6576))
    *   **摘要**: 社区请求开放 Megatron 后端的底层精度配置。目前 verl 强制将模型/梯度/优化器保持 FP32，开发者希望引入 BF16 梯度和优化器状态的 Megatron 原生 flags，以进一步优化显存占用。
*   **Qwen3.5 FSDP GRPO 依赖栈冲突** ([#6662](https://github.com/verl-project/verl/issues/6662))
    *   **摘要**: 运行 Qwen3.5-9B GRPO 训练时，由于 vLLM 0.18.0 与最新 transformers 依赖拉取了 torch 2.10.0，导致缺乏兼容的 `flash-attn` 预编译包。
*   **[Ascend] v0.8.x 强制使用 mbridge 的兼容性问题** ([#6658](https://github.com/verl-project/verl/issues/6658))
    *   **摘要**: 开发者反馈在昇腾 NPU 上使用 Megatron 后端做 GRPO 训练时，v0.8.x 强制要求开启 `use_mbridge=True`，导致部分未注册的自定义模型无法正常训练。

## 4. 关键 PR 进展
今日的 29 条 PR 展现了 verl 在**多后端异步引擎**、**异构硬件适配**和**长上下文算法优化**上的深度工作。

*   **[fully_async] 独立 log prob 服务器支持** ([#5990](https://github.com/verl-project/verl/pull/5990))
    *   **摘要**: 引入独立的 `Model Engine Server` 来计算 `log_probs`。这解耦了原有 actor 训练引擎重算 `old_log_probs` 的依赖，避免了保存/恢复模型权重的开销。
*   **[fsdp] 长上下文 top-K loss 显存优化** ([#6593](https://github.com/verl-project/verl/pull/6593))
    *   **摘要**: 针对长序列蒸馏（64K+ tokens），实现了 `chunked gather-logsumexp`。修复了原有 `log_softmax + gather` 模式在 Qwen 词表下一次性分配约 28GB 显存的 OOM 致命问题。
*   **[AMD/ROCm] 核心功能与 CI 流水线补齐** ([#6664](https://github.com/verl-project/verl/pull/6664), [#6619](https://github.com/verl-project/verl/pull/6619), [#6668](https://github.com/verl-project/verl/pull/6668))
    *   **摘要**: AMD 生态迎来大更新。PR [#6664](https://github.com/verl-project/verl/pull/6664) 为 SGLang rollout 后端适配了 ROCm 的 `aiter` 默认后端；[#6668](https://github.com/verl-project/verl/pull/6668) 增加了基于 MI300 的 E2E PPO CI 测试；[#6619](https://github.com/verl-project/verl/pull/6619) 重构了 ROCm Dockerfile 构建流程。
*   **[Ascend] NPU 多节点与流水线并行支持** ([#6672](https://github.com/verl-project/verl/pull/6672), [#6665](https://github.com/verl-project/verl/pull/6665))
    *   **摘要**: 持续深化昇腾生态。[#6672](https://github.com/verl-project/verl/pull/6672) 添加了双节点 Ascend RayJob E2E Workflow；[#6665](https://github.com/verl-project/verl/pull/6665) 修复了在 NPU 上运行 vLLM 的 Pipeline Parallel 限制。
*   **[reward] 修复异步训练死锁隐患** ([#6673](https://github.com/verl-project/verl/pull/6673))
    *   **摘要**: 修复了多教师蒸馏任务中因单个样本 `compute_score` 计算超时引发的伪 NCCL 死锁（GPU 利用率掉 0%），为 Reward Manager 添加了可选的 per-sample 超时机制。
*   **[model] 支持 Qwen3.5 线性注意力与 VLM LoRA** ([#6660](https://github.com/verl-project/verl/pull/6660), [#6670](https://github.com/verl-project/verl/pull/6670))
    *   **摘要**: 修复了 Qwen3.5 在 Ulysses SP 下的序列边界 Bug ([#6660](https://github.com/verl-project/verl/pull/6660))；同时新增了条件性开启 vLLM tower connector LoRA 的功能，使 VLM（视觉语言模型）的视觉组件在 RL 训练中能应用 LoRA ([#6670](https://github.com/verl-project/verl/pull/6670))。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **对 LLM 训练范式的深度工程优化**：项目正在攻坚极度消耗算力的 RLHF/GRPO 底层机制。例如独立 `log_prob` 引擎的解耦 ([#5990](https://github.com/verl-project/verl/pull/5990))、基于 Chunked 算子解决大词表长序列 OOM ([#6593](https://github.com/verl-project/verl/pull/6593))，这些直指 Post-training 工程痛点的优化，显著提升了集群算力转化率。
2.  **“硬件无关”的 RL 引擎雏形显现**：verl 正在迅速从单一的 NVIDIA 生态扩展为覆盖 **Ascend NPU** 和 **AMD ROCm** 的全栈 RL 框架。配合完善的 E2E CI 测试体系，开发者和企业可以在不同算力集群间进行低成本的无缝切换。
3.  **对前沿模型特性的极速响应**：在 Qwen3.5、MoE、VLM 视觉组件 LoRA 等前沿架构的支持上，项目跟进极快。无论是解决复杂的依赖冲突，还是处理特定模型的注意力机制适配，verl 正在成为大模型时代 Post-training 基础设施的事实标准之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-06-10 Open Instruct 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，`allenai/open-instruct` 仓库整体活跃度呈现低频但聚焦的状态。无新增代码发布与 Issues 讨论，核心动态集中在 2 个 Pull Requests 的推进上。其中，针对混合模型架构（Hybrid Model）的底层支持代码已被合并，同时社区针对指令微调评估（IFEval）中词数统计的边界 Bug 提交了修复方案。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无新增或更新 Issues**。

### 4. 关键 PR 进展
- **#1715 [CLOSED] Olmo-core 脚本正式支持混合模型**
  - **链接**：[allenai/open-instruct PR #1715](https://github.com/allenai/open-instruct/pull/1715)
  - **分析**：该 PR 为 RL 训练底层引入了对混合模型的支持。技术细节上，它规避了对 GDN 层的全量 Checkpoint，升级了 FLA (Flash Linear Attention) 版本，并显式引入了 `tilelang` 依赖。这标志着该项目在后 Transformer 架构（如线性注意力机制）的 RL 训练基建上迈出了关键一步。
- **#1718 [OPEN] 修复 IFEval 词数校验的标点符号 Bug**
  - **链接**：[allenai/open-instruct PR #1718](https://github.com/allenai/open-instruct/pull/1718)
  - **分析**：作者指出了当前 Reward Model/评测体系中的一个痛点。原有的 `counting_composition` 和 `count_unique` 检查器在使用 `nltk.word_tokenize` 时会把标点符号（.,:）计算为独立 token，导致符合要求的正确回复在 RL 奖励评分中获得 0 分。此 PR 旨在优化评估器逻辑，排除标点干扰，对提升 RL 反馈信号的准确性有直接价值。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **探索下一代底层架构**：随着 Transformer 架构的算力瓶颈显现，Open Instruct 正在积极推进对 FLA (Flash Linear Attention) 及混合模型的支持（如 PR #1715）。这为在非标准 Transformer 架构上进行 RLHF、DPO 等 RL 对齐算法的研究提供了前沿的演武场。
2. **死磕 RL 评估基建的鲁棒性**：RL 训练的成败高度依赖于 Reward / Penalty 信号的精准度。社区积极修复 IFEval 中极端细粒度的 token 计数 Bug（如 PR #1718），反映了该项目对 LLM 约束遵循能力评测的严谨性。对于关注 RL 奖励模型打分噪音问题的研究者而言，具有极高的参考价值。

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

以下是为您生成的 2026 年 6 月 10 日 Gymnasium 项目日报摘要：

# Gymnasium RL 生态日报 (2026-06-10)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活动趋于平缓。无新增代码版本发布，无新增或更新的 Issues，仅有 1 个第三方环境集成的 Pull Request 产生了状态更新。项目当前处于稳定维护期。

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。

## 4. 关键 PR 进展
今日有 1 条 PR 产生了状态变更，主要内容为第三方环境的集成申请：

- **PR #1589** [CLOSED] Add WireHarness-MultiAgent-RL to third-party robotics environments
  - **作者**: ludwigstr
  - **摘要**: 该 PR 申请将 **WireHarness-MultiAgent-RL** 添加到 Gymnasium 官方文档的第三方机器人环境列表中。该项目是一个基于 MuJoCo 的多智能体环境，主要用于线束路由研究，要求五个平面移动智能体协作将电缆段导航至预设目标位置。
  - **状态**: 该 PR 已被关闭（未合入主分支）。
  - **链接**: [Farama-Foundation/Gymnasium PR #1589](https://github.com/Farama-Foundation/Gymnasium/pull/1589)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据表现平淡，但结合此类日常提交可以看出，Gymnasium 在强化学习生态中的**核心基础设施地位依然稳固**：

1. **多智能体/复杂仿真的标准入口**：如今日提到的 PR 所示，即便是涉及 MuJoCo 深度物理引擎的复杂多智能体协作研究（如线束 routing），开发者依然倾向于遵循 Gymnasium 制定的 `Gym` API 标准来封装环境。这证明了 Gymnasium 已成为 RL 上下游生态（算法库与环境库）事实上的通信协议。
2. **高质量社区沉淀**：项目已度过需要频繁发版修复的高波动期。当前 Issues 和 PR 多集中于“第三方生态对接”与“边界扩展”，反映出其核心架构已高度成熟，正在作为底层依赖持续为上游的 RL 算法研究（如 Offline RL, MARL 等）提供稳定支撑。

---
*数据来源: GitHub (Farama-Foundation/Gymnasium)*

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>