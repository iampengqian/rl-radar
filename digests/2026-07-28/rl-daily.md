# RL 开源生态日报 2026-07-28

> 生成时间: 2026-07-27 22:19 UTC | 覆盖项目: 15 个

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
当前开源强化学习（RL）生态呈现明显的**两极分化与分层演进**趋势：
- **大模型强化学习（LRL）主导激变**：以 verl, TRL, OpenRLHF, AReaL, slime 为代表的 LRL 框架正处于极其活跃的快速迭代期，全面拥抱多模态、Agentic RL 与千亿级分布式训练。
- **传统经典 RL 与生态底座维稳**：Gymnasium, rl_games, torchtune 等底层算法库或环境基础设施更新放缓，主要针对向量化环境性能、底层算子正确性进行精准修复（如 rl_games 修复 Autoreset 数据污染）。CleanRL, PettingZoo, SB3, Tianshou 等传统 RL 库进入静默期。

## 各项目活跃度对比
过去 24 小时内，生态内项目的活跃度差异显著。LRL 赛道高度内卷，而传统 RL 赛道趋于沉寂。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 37 | 23 | 0 | 紧跟 SOTA (DeepSeek-V4/Qwen3-VL)，Agentic 与多模态持续深水区重构 |
| **TRL** | 16 | 28 | 0 | 极致的显存压榨与计算图优化，AsyncGRPO 全面对齐多模态 |
| **Open Instruct** | 0 | 6 | 0 | 聚焦 GRPO 显存分块优化，开始向 SWE 沙箱环境延伸 |
| **ROCK** | 2 | 3 | 1 (v1.11.0) | 交付 v1.11.0，打通 Windows 跨平台沙盒与 OpenSandbox 调度解耦 |
| **AReaL** | 2 | 3 | 0 | 突破异构集群拓扑限制，精细化处理 Rollout 残缺数据 |
| **slime** | 3 | 2 | 0 | 引入 RDMA 降低通信延迟，完善多轮工具调用 Loss Mask |
| **OpenRLHF** | 2 | 1 | 0 | 官宣 Molt 后端引擎，借原生 TP/EP/CP 剑指千亿参数 RL |
| **Gymnasium** | 0 | 1 | 0 | 关注向量化环境步频基准测试 |
| **rl_games** | 0 | 1 | 0 | 修复 PPO 环境自动重置时的混入数据污染 |
| **torchtune** | 0 | 1 | 0 | 统一 Mistral/Gemma 分词器边界符控制，保障推理纯净度 |
| **其他无活动项目** | 0 | 0 | 0 | (CleanRL, PettingZoo, ROLL, SB3, Tianshou) 稳定或停滞 |

## 共同关注的研究与工程方向
基于今日高频更新的 PR 与 Issue，当前 RL 生态的前沿探索与工程痛点高度重叠：

**研究侧信号：**
- **多模态与 Agentic RL 落地**：复杂多轮工具调用（特别是工具返回图像等多模态信息）成为核心诉求。verl 引入 Multimodal Continuous Token，TRL 让 AsyncGRPO 端到端支持 VLM，Open Instruct 引入纯 Bash 代码沙箱，均表明 RL 正从“指令对齐”向“环境交互”演进。
- **RL 算法数值的精细控制**：残缺采样组导致 Advantage 劣化（AReaL）、PPO Autoreset 数据污染（rl_games）、GRPO KL 估计器数值溢出（TRL）等隐蔽的数值与逻辑 Bug 被密集修复，标志着社区对 RL 数值稳定性的要求达到了新高度。

**工程/基础设施侧信号：**
- **显存 OOM 极限压榨**：大模型 RL 训练的显存瓶颈催生了多种 out-of-place 与分块计算优化。如 TRL 引入分块 JSD 损失并修复无谓内存拷贝，Open Instruct 实现 Tiled GRPO lm-head loss。
- **异构与解耦的分布式架构**：为打破算力分配瓶颈，框架开始解耦训练与推理的强绑定关系。AReaL 支持训练端与 Rollout 端采用不同的 PP/TP 切分策略；OpenRLHF 引入 Molt 后端以原生支持 TP/EP/CP 并行；ROCK 允许旁路原生 Ray 调度器接入 OpenSandbox。
- **底层 I/O 与推理对齐**：slime 引入 Mooncake RDMA 降低海量数据传输延迟；torchtune 和 slime 均对齐并修复了多模型 Tokenizer 的 EOS/BOS 控制与 Loss Mask 边界，防止 Reward Hacking。

## 差异化定位分析
面对繁杂的 LRL 需求，各个头部框架正在形成独特的护城河：
- **verl**：**“最前沿的工程急先锋”**。以极快的响应速度适配最新一代底座（DeepSeek-V4, Qwen3-Next, Transformers 5.x, FSDP2），适合需要第一时间复现 SOTA 论文的前沿团队。
- **TRL**：**“极致优化的算法核心库”**。依托 HuggingFace 生态，重构工作聚焦于 Autograd 计算图与底层的显存管理（如 DistillationTrainer 对齐 GRPO 栈），是将 RL 算法落地到千行百业的通用基建。
- **OpenRLHF**：**“超大规模集群的攻坚者”**。通过引入全新的 Molt 后端和解决 vLLM Sleep Mode 的显存碎片冲突，定位于千亿参数规模、超大集群的工业级稳定量产。
- **AReaL**：**“容错与异构计算的标杆”**。专注于解决极端情况下的分布式死锁、孤儿进程，以及不规则残缺数据的 Masking，强调训练的鲁棒性。
- **ROCK**：**“跨平台环境交互专家”**。发力于沙盒管理（支持 Windows）、调度器解耦，致力于降低复杂 RL 环境的对齐与分发成本。

## 社区热度与成熟度
- **LRL 社区进入“高烈度排障期”**：verl（37 Issues）和 TRL（28 PRs）展现了惊人的社区活跃度。讨论重点已从“如何运行 Demo”转变为多节点死锁、孤儿进程、特定模型 FP32 精度退化等深水区问题。这证明主流 LRL 框架已跨越概念验证阶段，大规模工业级应用正在真实发生。
- **工具链的高效闭环成为核心竞争力**：OpenRLHF 和 verl 展现了极强的工程响应力，能够在 24 小时内针对底层显存分配策略（如 vLLM sleep mode 冲突）或上游库的破坏性更新（如 transformers 移除特定判定函数）提供精准修复。
- **底层基建生态趋于成熟稳定**：rl_games、Gymnasium、torchtune 等非 LRL 框架不仅活跃度低，且 PR 极其聚焦于细微的行为修正与性能 benchmark，说明其核心代码库已高度沉淀，成为整个生态不可撼动的稳定底座。

## 值得关注的趋势信号
1. **“训练-推理”异构拓扑解绑**：AReaL 允许不同 PP 尺寸混合训练，OpenRLHF 引入原生 AutoTP/EP/CP，这暗示未来的大模型 RL 不再强求全局一致的切分策略，而是走向 Actor 与 Rollout 引擎算力“按需异构分配”的云原生时代。
2. **面向 Agent 的沙箱环境标准化**：Open Instruct 引入 SWERL，ROCK 深度集成 OpenSandbox。从单轮指令调优向复杂代码执行、多轮环境工具调用（甚至跨平台 Windows 沙箱）的转移，说明 RL 正在成为提升大模型逻辑推理与执行力（SWE-agent）的核心引擎。
3. **极端内存优化的常态化**：随着模型参数量向千亿级（如 Qwen3-Next-80B-A3B）演进，常规显存已无法支撑长上下文 RL 训练。Tiled loss 计算、显存碎片控制与精确的 FP32/FP16/BF16 混合精度掩码，正成为 LRL 框架的必备基础能力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报**
**日期**: 2026-07-28

### 1. 今日速览
过去 24 小时内，ROCK 仓库活跃度高度集中在版本迭代与基础设施完善上。项目成功发布了 **v1.11.0** 正式版，共有 2 条 Issues 和 3 条 Pull Requests 完成状态更新。核心研发方向聚焦于 **OpenSandbox 后端管理深度集成**、**跨平台（Windows）沙盒支持** 以及 **Ray 分布式底层状态修复**。

---

### 2. 版本发布
*   **[Release] v1.11.0 正式发布** ([GitHub 链接](https://github.com/alibaba/ROCK/releases/tag/v1.11.0))
    *   **核心更新 1**: 修复 Archive 归档状态卡死问题。新增了 `RayOperator.get_remote_status` 的重写逻辑，确保分布式环境下的状态推进正常（[PR #1217](https://github.com/alibaba/ROCK/pull/1217)）。
    *   **核心更新 2**: 增强 `musl` 容器（如 Alpine 系列轻量镜像）兼容性。当检测到环境中已存在 bash 时，将跳过冗余的 bash 安装步骤，提升容器启动效率。

---

### 3. 重点 Issues
今日更新 Issues 均已顺利关闭，标志着 v1.11.0 周期相关任务的圆满交付：
*   **[CLOSED] [Feature] Release ROCK v1.11.0** ([Issue #1299](https://github.com/alibaba/ROCK/issues/1299))
    *   **摘要**: v1.11.0 版本的统合追踪 Issue，涵盖了发版前的最终代码集成、测试验证、文档完善与打包分发工作。
*   **[CLOSED] Add filesystem support for Windows sandboxes** ([Issue #1296](https://github.com/alibaba/ROCK/issues/1296))
    *   **摘要**: 修复核心痛点。此前 Python SDK 仅提供 Linux 文件系统操作，导致 Windows 沙盒中的目录上传、文件下载及权限管理 API 失效，且 PowerShell 的回显会污染指令输出。该问题的解决扫清了跨平台环境复现的障碍。

---

### 4. 关键 PR 进展
*   **[OPEN] feat(opensandbox): complete admin integration (#1202)** ([PR #1301](https://github.com/alibaba/ROCK/pull/1301)) | 作者: zpzjzj
    *   **进展**: 彻底完成 OpenSandbox 后端集成。当 `runtime.operator_type` 设为 `opensandbox` 时，系统将直接旁路 Ray/Rocklet worker 调度器及 worker 的 `/ops` 任务；同时引入了针对 OpenSandbox 配置的 Admin 生命周期启动回归测试。
*   **[CLOSED] feat(sandbox): add Windows filesystem support** ([PR #1297](https://github.com/alibaba/ROCK/pull/1297)) | 作者: zhongwen666
    *   **进展**: 对应 Issue #1296。实现了完整的 `WindowsFileSystem`，补齐了 Windows 镜像下的所有权控制、权限管理及文件读写 API，并净化了 PowerShell 会话输出，确保其不干扰文件系统工作流。
*   **[CLOSED] Feat/docs 1.11 release notes** ([PR #1300](https://github.com/alibaba/ROCK/pull/1300)) | 作者: zhangjaycee
    *   **进展**: 添加 v1.11.0 发版说明，关闭发版追踪 Issue。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **跨环境泛化能力跃升**：通过全面接入 OpenSandbox 和新增 Windows 文件系统支持，ROCK 正在打破传统 RL 框架对纯 Linux 环境的重度依赖。这意味着开发者可以在异构系统（本地 Windows + 远程 Linux 集群）上更顺滑地构建和分发 RL 训练任务，极大降低了环境对齐成本。
2.  **解耦底层计算引擎**：PR #1301 显示 ROCK 允许在特定条件下“跳过 Ray/Rocklet 调度器”。这种对分布式调度核心的弹性适配，意味着项目在设计上并不局限于单一调度框架，具备更强的云原生与后端可扩展性。
3.  **鲁棒性打磨进入深水区**：v1.11.0 解决的 `musl` 容器兼容性、PowerShell 命令污染以及 Ray 远程状态同步卡死等问题，均属于长周期复杂分布式训练下极难调试的工程级 Bug。项目在底层运行时的持续“填坑”，证明其正向着生产级、高可用 RL 基础设施演进。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**slime RL 生态项目日报 (2026-07-28)**

以下是开源强化学习框架 **slime** (THUDM/slime) 过去 24 小时的社区动态与技术演进分析。

### 1. 今日速览
*   **Issue 动态**：新增/更新 3 条讨论，重点集中在工程能力增强建议、底层硬件适配咨询以及社区生态整合。
*   **PR 进展**：更新 2 个 PR，涉及大模型工具调用修复与底层 RDMA 数据传输优化。
*   **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
*   无。当前主干开发持续进行中。

### 3. 重点 Issues
*   **[Proposal] 补充 Train–Inference 一致性数据收集机制** | `#2244` [OPEN]
    *   **摘要**：开发者在实测后提出，slime 在 Rollout 和训练更新等核心阶段表现出色，但当前缺乏“训练-推理一致性数据收集”模块。该提议旨在进一步完善框架在深度强化学习中对数据分布偏移的控制能力。
    *   **链接**：[THUDM/slime Issue #2244](https://github.com/THUDM/slime/issues/2244)
*   **[Question] 最新镜像（slimerl/slime:latest）对 A800 GPU 的适配情况** | `#2232` [OPEN]
    *   **摘要**：用户关注最新 Docker 容器镜像是否原生支持 NVIDIA A800 GPU，反映出社区对 slime 在主流国产/特供版算力集群上开箱即用能力的强烈需求。
    *   **链接**：[THUDM/slime Issue #2232](https://github.com/THUDM/slime/issues/2232)
*   **[Notice] 项目收录至 StackMap AI 知识图谱** | `#2214` [OPEN]
    *   **摘要**：StackMap 维护者提交 Issue，表示已将 slime 收录至其人工筛选的 AI/Agent 开源工具知识图谱中，表明 slime 在通用 AI Stack 中的曝光度正在提升。
    *   **链接**：[THUDM/slime Issue #2214](https://github.com/THUDM/slime/issues/2214)

### 4. 关键 PR 进展
*   **修复 Qwen 并行工具调用 Tokenization 对齐问题** | `#2226` [CLOSED]
    *   **进展**：该 PR 解决了在多轮对话中，单独为每条消息调用 `apply_chattemplate` 导致的 Qwen2 原生格式被破坏的问题。修复方案在传入前对连续的工具消息进行分组，确保了多轮工具调用场景下的 Loss Mask 计算精确性。
    *   **链接**：[THUDM/slime PR #2226](https://github.com/THUDM/slime/pull/2226)
*   **为 Rollout 数据引入 Mooncake RDMA 传输支持** | `#1709` [OPEN]
    *   **进展**：长周期基础设施工 PR，旨在为 Rollout 阶段产生的海量数据引入 Mooncake RDMA（远程直接内存访问）传输层。若最终合并，将大幅降低大规模分布式 RL 训练中通信的 CPU 开销与延迟瓶颈。
    *   **链接**：[THUDM/slime PR #1709](https://github.com/THUDM/slime/pull/1709)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
通过近期的 Issues 与 PR 走向，可以判定 slime 正处于**“从可用到极致性能”的深度工程化阶段**：
1.  **啃硬骨头**：从 PR #1709 引入 RDMA 传输架构可以看出，团队正着手解决 RLHF/RLAIF 中海量中间数据传输的底层网络 I/O 瓶颈，这是构建大规模集群训练必备的护城河。
2.  **前沿场景对齐**：PR #2226 对基于 Qwen 等模型的多轮 Tool Call（工具调用）强化学习进行了精准的 Loss Mask 对齐，切中了当前 Agent + RL 的发展命脉。
3.  **闭环能力补全**：社区开发者（Issue #2244）主动提出“训练-推理一致性”的补全建议，说明 slime 的核心训练流已高度稳定，社区正与其共同补全复现大模型严密评测数据的最后拼图。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### AReaL RL 生态日报 | 2026-07-28

#### 1. 今日速览
过去 24 小时内，AReaL 仓库共活跃 **2 个 Issue** 与 **3 个 PR**，无新版本发布。整体活动聚焦于 **Rollout（生成与采样）阶段的边界处理** 以及 **分布式后端（FSDP/Megatron/SGLang）的工程稳定性修复**。

#### 2. 版本发布
- **Releases**: 无。

#### 3. 重点 Issues
今日的 Issue 集中在底层算子静默错误与训练结束后的进程管理异常。

- **[#1565] [OPEN] `torch-memory-saver` 触发 CUDA free 错误导致 teardown 阶段遗留孤儿进程**
  - **详情**: 报告者 (@wm19999) 指出，在非容器环境下，即使训练成功完成，原生的 teardown（清理）逻辑在遭遇 `torch-memory-saver` 的 CUDA 显存释放错误时，也会失败并遗留孤儿进程。
  - **链接**: [areal-project/AReaL Issue #1565](https://github.com/areal-project/AReaL/issues/1565)

- **[#1442] [CLOSED] FSDP+HF 后端下 `attn_impl=sdpa` 对 packed sequences 静默输出错误的 logp**
  - **详情**: 此前报告的严重精度 Bug 已被关闭。在 FSDP+HF 后端处理 packed sequences 时，SDPA 注意力机制实现会静默产生错误的 log probabilities（对数概率），现已修复。
  - **链接**: [areal-project/AReaL Issue #1442](https://github.com/areal-project/AReaL/issues/1442)

#### 4. 关键 PR 进展
今日合并/推进的 PR 主要解决了 RL 训练中常见的“数据残缺”与“异构并行拓扑”痛点。

- **[#1563] [OPEN] feat(rollout): mask untrainable incomplete groups**
  - **进展**: 增强 Rollout 阶段的鲁棒性。将不可用的分组采样槽位（slots）标记为 `None`，避免重复重试或数据重复；同时在 reward/advantage 归一化时保留不规则（ragged）的 prompt 边界，推导最小可用槽位计数。
  - **链接**: [areal-project/AReaL PR #1563](https://github.com/areal-project/AReaL/pull/1563)

- **[#1416] [CLOSED] feat(rollout): add min_valid_group_size to drop under-filled rollout groups**
  - **进展**: 引入 `min_valid_group_size` 参数。针对 GRPO 等 RL 算法，当分组 Rollout 中存活的样本过少时，直接丢弃整个 group，防止在部分残缺数据上进行训练导致梯度更新方向劣化。
  - **链接**: [areal-project/AReaL PR #1416](https://github.com/areal-project/AReaL/pull/1416)

- **[#1564] [OPEN] fix(engine): gate per-PP weight sync on SGLang backend**
  - **进展**: 修复 Megatron（训练）与 vLLM/SGLang（推理）混合后端的权重同步问题。解除了训练与推理阶段必须使用相同 Pipeline Parallel (PP) 尺寸的限制（如支持 `actor_pp=d1p4t2` + `rollout_pp=d1p2t4`），提升了异构集群下的显存与资源分配灵活性。
  - **链接**: [areal-project/AReaL PR #1564](https://github.com/areal-project/AReaL/pull/1564)

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 的近期动态展示了当前大模型强化学习框架的演进核心：**极致的异构容忍度与显存管理**。
1. **突破并行计算拓扑限制**：PR #1564 允许训练端（如 Megatron 深度流水线）和 Rollout 端（如 vLLM 浅层高吞吐）采用完全不同的 PP/TP 切分策略，这打破了以往框架中训练与推理必须严格对齐的算力分配瓶颈。
2. **面向 RL 数值的精细控制**：PR #1416 和 #1563 针对采样过程中的 OOM 掉队、变长 Prompt 导致的“不完整 Group”进行了系统级的 Masking 和丢弃处理。在 PPO/GRPO 等算法中，残缺的采样组会严重扭曲 Advantage 计算基准，AReaL 正在从底层规避这一静默风险。
3. **直击大集群工程痛点**：Issue #1565 暴露并着手解决显存优化器（如 memory saver）与大集群进程编排（teardown 机制）的兼容性冲突，这是将 RL 训练从单机实验推向千卡规模稳定量产必须跨越的工程鸿沟。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这里是 2026-07-28 的 TRL（huggingface/trl）RL 日报摘要。

### 1. 今日速览
- **Issues 活跃度**：更新 16 条，其中多起涉及核心算法（GRPO/DPO）的底层逻辑与内存/显存优化。
- **PR 活跃度**：更新 28 条，重构工作占据主导，核心开发者正在对 `DistillationTrainer` 进行大范围底层重构，使其对齐 GRPO 的生成与损失计算机制。无新版本发布。

### 2. 版本发布
- **无新版本发布** (Releases: 0)。当前代码库处于高频迭代与底层重构阶段。

### 3. 重点 Issues
- **[BUG/性能] GRPO 无谓的内存拷贝导致 OOM** ([#6553](https://github.com/huggingface/trl/issues/6553))
  状态：OPEN。开发者对比 SDPO 时发现 GRPO 在训练时产生了不必要的实例化拷贝，导致相同配置下 GRPO 容易发生显存溢出（OOM）。
- **[BUG/算法] DPO `apo_down` 损失函数的 f-散度应用不一致** ([#6441](https://github.com/huggingface/trl/issues/6441))
  状态：OPEN。`DPOTrainer` 的 `apo_down` 损失在计算两项时，对 `f_divergence_type` 的处理不一致，可能导致不符合原论文（APO Eqn 8）的数学预期。
- **[增强/VLM] GRPO Trainer 需支持视觉语言模型 (VLMs)** ([#2734](https://github.com/huggingface/trl/issues/2734))
  状态：CLOSED。旧版 GRPO 内部强制 Tokenize 阻碍了对多模态模型的支持，此高频点赞诉求已通过后续重构解决，为今日的 VLM 支持铺平了道路。

### 4. 关键 PR 进展
**核心重构与优化**
- **[DistillationTrainer 重构系列]** (由 qgallouedec 主导)：正在执行多步骤原子化重构。今日更新了包括 [PR #6522](https://github.com/huggingface/trl/pull/6522)（弃用旧 buffer，切换至 GRPO 生成栈）、[PR #6526](https://github.com/huggingface/trl/pull/6526)（引入内存高效的分块 JSD 损失）等。这一系列重构旨在大幅降低蒸馏过程中的显存峰值。
- **修复原生 GRPO KL 估计器的数值溢出** ([PR #6550](https://github.com/huggingface/trl/pull/6550))
  当参考模型与策略模型的 log-prob 差异过大时，原本的指数计算会导致溢出并产生非有限损失。该 PR 修复为在 FP32 下先计算对数比率。
- **优化 GRPO 的 Autograd 计算图** ([PR #6554](https://github.com/huggingface/trl/pull/6554))
  GRPO/RLOO 中对 logits 进行温度缩放时，原 inplace 操作会导致 Autograd 保留不必要的 `CopySlices` 节点，改为 out-of-place 除法以提升后向传播效率。
- **为 SFTTrainer 添加有界的 MoE 专家指标** ([PR #6514](https://github.com/huggingface/trl/pull/6514))
  增加 `log_expert_usage=True` 配置，在评估阶段统计所有 Top-K 专家分配情况，对精调 MoE 模型极具价值。

**多模态与异步强化学习**
- **AsyncGRPO 全面对齐视觉语言模型** ([PR #6515](https://github.com/huggingface/trl/pull/6515))
  使 `AsyncGRPOTrainer` 能够端到端训练 VLM，修复了底层加载模型和 vLLM 推理时 text-tower 键值不匹配的问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 目前的迭代展示了 LLM 强化学习框架的演进趋势：
1. **底层机制的极限优化**：从大刀阔斧的架构重构（如 `DistillationTrainer` 对齐 GRPO 栈）到极致的内存压榨（修复无谓内存拷贝、优化分块损失计算），解决 RLHF 在大规模训练时的 OOM 瓶颈。
2. **异步 RL 与智能体融合**：对 `AsyncGRPO` 的大量更新（如支持外部 Agent 工具循环的 [PR #6420](https://github.com/huggingface/trl/pull/6420) 和避免无效 vLLM 推理的 Checkpoint 恢复机制），表明 TRL 正成为构建复杂 AI Agent（如基于 opencode 环境）的标准基建。
3. **对前沿模型架构的极速响应**：无论是无缝适配 Qwen3.5 多模态模型，还是针对 MoE 架构提供细粒度的专家负载监控，TRL 保持了对底层大模型演进的极强敏锐度。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-07-28)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库共有 3 项动态更新（2 条 Issues，1 条 PR），无新版本 Release 发布。今日核心动态围绕**底层执行引擎的扩展**与 **vLLM 显存分配机制的容错性修复**展开，展现了项目在向千亿参数规模演进过程中的工程细节打磨。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
*   **🔥 官宣全新后端引擎 Molt，剑指千亿参数 RL 训练** (`#1273` [链接](https://github.com/OpenRLHF/OpenRLRF/issues/1273))
    *   **作者**: hijkzzz (创建/更新于 2026-07-27)
    *   **摘要**: 社区开发者引入了由 Automodel 驱动的新后端 **Molt**（源自 NVIDIA-NeMo/labs-molt）。该后端旨在替代现有的 DeepSpeed 方案，提供原生的 AutoTP/EP/CP（张量/专家/上下文并行）支持，将 RL 训练扩展至数百亿（Hundreds of billions）参数规模，同时保持 OpenRLHF 原有的工作流不变。这是项目向超大规模强化学习迈进的重大信号。
*   **Docker 容器内 vLLM 显存配置断言报错** (`#1011` [链接](https://github.com/OpenRLHF/OpenRLHF/issues/1011))
    *   **作者**: think-weige (更新于 2026-07-27)
    *   **摘要**: 用户在使用官方 Dockerfile 结合 Ray 提交 `train_ppo_ray` (colocate 模式) 脚本时，触发 `assert "expandable_segments:True" not in conf` 报错。该问题追溯至 PyTorch 与 vLLM Sleep Mode 的底层显存分配策略冲突。

## 4. 关键 PR 进展
*   **修复 vLLM Sleep Mode 下的显存分配配置冲突** (`#1274` [链接](https://github.com/OpenRLHF/OpenRLHF/pull/1274))
    *   **作者**: yaodong-shen (创建于 2026-07-27)
    *   **摘要**: 本 PR 旨在精准修复 Issue #1011。核心逻辑为：在初始化使用 Sleep Mode 的 vLLM Rollout 引擎前，剥离环境变量中的 `expandable_segments:True` 配置；同时兼容 `PYTORCH_CUDA_ALLOC_CONF` 与较新的 `PYTORCH_ALLOC_CONF` 命名，且不影响非 Sleep 模式下的正常显存分配策略。
    *   **关联**: Fixes #1011。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **突破现有并行框架瓶颈**: Issue #1273 中 Molt 后端的引入至关重要。当前主流的 RLHF 训练往往受制于 DeepSpeed 等传统框架在超大参数量下的灵活性。原生支持 TP/EP/CP 的 Automodel 后端，意味着 OpenRLHF 正在解决 MoE 架构和千亿基座模型在做 RL 时的核心痛点。
2.  **深度协同底层推理引擎 (vLLM)**: PR #1274 证明了项目对 vLLM 等推理引擎的极细粒度控制。通过处理 Sleep Mode（Actor/Critic 权重显存卸载重载）下的显存碎片化问题，OpenRLHF 确保了在有限显存下进行高效 PPO 训练的稳定性。
3.  **高价值的工程实践闭环**: 社区展示出高效的“用户反馈 (Issue #1011) -> 核心代码修复 (PR #1274)”闭环，工程响应迅速。在 LLM 范式快速迭代的当下，OpenRLHF 提供了目前最稳健、最前沿的生产级 RL 训练落地参考。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-07-28 强化学习（RL）生态日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，verl 项目共有 37 条 Issues 更新，23 条 PR 更新。
- **版本发布**：今日无新版本发布。
- **核心动向**：今日社区活跃度极高，焦点主要集中在 **多模态智能体循环**、**底层框架兼容性（Transformers 5.x, vLLM, FSDP2）修复**，以及针对新一代大模型（如 Qwen3-VL, Qwen3-Next, DeepSeek-V4 架构）的适配与性能优化。

### 2. 版本发布
无。

### 3. 重点 Issues
今日讨论度最高的问题集中在复杂多模态场景应用、特定模型精度及并发死锁等痛点：

- **多模态工具调用支持探寻**：开发者强烈关注 `release v0.6.1` 分支是否支持 **Qwen3-VL 多轮多模态工具调用**（特别是工具返回结果包含图像的情况）。([Issue #4613](https://github.com/verl-project/verl/issues/4613))
- **大模型 FP32 模块精度退化警告**：有开发者指出，模型加载时忽略了 HF 的 `_keep_in_fp32_modules` 声明，导致特定模型（如 Inkling, Qwen3-Next）在训练中发生**静默的精度降级**。([Issue #7092](https://github.com/verl-project/verl/issues/7092))
- **分布式训练死锁与泄漏**：
  - 多节点 PPO 训练中，`TransferQueue` 临时事件循环导致 Worker **文件描述符泄漏**。([Issue #7156](https://github.com/verl-project/verl/issues/7156))
  - 同步 PPO 训练（`main_ppo_sync.py`）中，若单个 prompt 未离开 `running` 状态，`ReplayBuffer.sample()` 会陷入**永久死循环挂起**。([Issue #7155](https://github.com/verl-project/verl/issues/7155))
- **底座模型训练支持反馈**：社区频繁发问当前框架对超大规模 MoE 模型（如 **Qwen3-Next-80B-A3B**）进行 GRPO 训练的成熟度。([Issue #4579](https://github.com/verl-project/verl/issues/4579))

### 4. 关键 PR 进展
今日合并或更新的 PR 展现了 verl 在基础设施及 SOTA 技术上的快速迭代：

- **多模态与 Agentic RL 突破**：
  - 为 AgentLoop 引入 **Multimodal Continuous Token** 支持，使 Processor 能够直接处理编码带有视觉信息的文本。([PR #6804](https://github.com/verl-project/verl/pull/6804))
- **核心 Bug 修复与健壮性提升**：
  - 修复 `transformers >= 5.4.0` 版本下 `is_flash_attn_greater_or_equal_2_10` 被移除导致的**导入崩溃问题**。([PR #7169](https://github.com/verl-project/verl/pull/7169))
  - 修复 FSDP2 路径下未遵守 HF `_keep_in_fp32_modules` 声明的**精度隐患**。([PR #7165](https://github.com/verl-project/verl/pull/7165))
  - 修复 Ray 分布式环境中，Node IP 字符串未进行零填充导致的**全局 Rank 排序错乱问题**。([PR #7160](https://github.com/verl-project/verl/pull/7160))
- **性能优化与底层更新**：
  - 升级 Docker 基础镜像，将 vLLM 提升至 `0.24.0`，Megatron 提升至 `core_v0.18.0`，并**增加对 DeepSeek-V4 的底层包支持**。([PR #7101](https://github.com/verl-project/verl/pull/7101))
  - 优化 `tqbridge` 调用，避免每次调用重复创建线程和事件循环。([PR #7162](https://github.com/verl-project/verl/pull/7162))

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟 SOTA 算法与模型前沿**：无论是迅速适配 Qwen3-VL 等最新的多模态模型，还是在底层 Docker 中抢先支持 DeepSeek-V4 架构，verl 展现出了极高的敏锐度，是复现和探索前沿 RL 论文的首选工程框架。
2. **在 Agentic RL 赛道深度布局**：从支持多模态 Agent 工具调用，到修复多轮 Agent 循环的死锁问题，verl 正在系统性地解决大模型作为 Agent 进行强化学习训练时的各类工程瓶颈。
3. **强大的异构与分布式兼容能力**：verl 不仅仅停留在单卡或简单并发的 Demo 阶段。它积极重构 FSDP2、Megatron、Ray 分布式调度逻辑，并兼顾 Ascend NPU 等硬件，正在向“多硬件、多框架后端融合”的工业级大一统 RL 平台演进。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-07-28 强化学习（RL）生态开源日报摘要：

### 📅 torchtune RL 生态日报 (2026-07-28)

#### 1. 今日速览
过去 24 小时内，[torchtune](https://github.com/pytorch/torchtune) 仓库整体活跃度趋于平稳。无新增 Issues，无新版本发布。代码贡献方面有 1 项关键的 PR 更新，主要聚焦于大语言模型分词器的底层行为控制与推理优化。

#### 2. 版本发布
*   **今日发布：** 无。

#### 3. 重点 Issues
*   **今日更新：** 0 条。社区暂无新的技术讨论或 Bug 反馈。

#### 4. 关键 PR 进展
*   **[#2977] [OPEN] Fix Mistral and Gemma end-token control**
    *   **作者:** [patrickswedish](https://github.com/patrickswedish)
    *   **核心改动:** 
        1. 统一 Mistral 和 Gemma 分词器，使其适配现有的 Llama 2 `add_start_tokens` / `add_end_tokens` API 接口。
        2. 在使用 Mistral 或 Gemma 分词器进行推理时，移除末尾的 EOS（End-Of-Sequence）token。
        3. 补充了针对 BOS/EOS 控制机制以及 Mistral 推理行为的针对性单元测试。
    *   **技术价值:** 严格规整不同模型架构在 Tokenize 阶段的边界符行为，这对于强化学习（如 RLHF/RLAIF）中保证 Action Space 的纯净性、避免模型在推理时意外生成或遗漏终止符至关重要。
    *   **链接:** [meta-pytorch/torchtune PR #2977](https://github.com/pytorch/torchtune/pull/2977)

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **基础设施的底层打磨：** RLHF 等算法对数据流的精确度要求极高。torchtune 近期的核心贡献（如上述 PR）持续深耕底层 Tokenizer 和模型推理逻辑的标准化。这种对底层细节的严格把控，能有效减少强化学习训练过程中的 Reward Hacking 现象（例如模型利用 EOS Token 的漏洞获取不当奖励）。
*   **高逼真的推理对齐：** 区分“训练态”与“推理态”的 Token 处理逻辑（如省略推理期的强制 EOS）是 PPO 等算法成功的关键前提。torchtune 提供的高质量、可复用组件，极大降低了 RL 研究者在处理 Mistral、Gemma、Llama 等不同开源模型时的对齐成本，是构建稳定 RL 训练管线的优质“轮子”。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 日报摘要 (2026-07-28)**
**追踪仓库:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue 和版本发布，但代码贡献保持活跃，共有 **6 个 PR 发生了状态更新**。技术焦点高度集中于 **RLHF/RLAIF 算法层面的重构与显存优化**（如 DPPO 算法统一、GRPO 显存分块计算）以及**工程构建链路的修复**。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **过去 24 小时无 Issue 更新。**

### 4. 关键 PR 进展
今日的 PR 更新反映了项目在底层算法和工程化方面的持续推进：

*   **算法底层重构：统一 DPPO 实现**
    *   [PR #1790](https://github.com/allenai/open-instruct/pull/1790) `[OPEN]`
    *   **摘要：** 引入基于统一 rho-divergence 掩码范式的 DPPO（Dr. GRPO / 长上下文 GRPO 等）实现。该 PR 弃用了之前为特定 trainer 硬编码 loss 路径的方案，转而复用 GRPO 的 ratio、校正和掩码机制。这使得最终配置更加显式、可组合，且数值计算更加稳健。

*   **RL 训练显存优化：Tiled GRPO lm-head loss**
    *   [PR #1785](https://github.com/allenai/open-instruct/pull/1785) `[OPEN]`
    *   **摘要：** 引入可选的内存高效“分块（Tiled）” GRPO lm-head loss 计算。该 PR 替代了原先因 GitHub Actions 权限问题停滞的 #1747。有效解决大规模模型 RL 训练时的峰值显存瓶颈。

*   **Agent RL 环境扩展：代码沙箱集成**
    *   [PR #1788](https://github.com/allenai/open-instruct/pull/1788) `[OPEN]` & [PR #1748](https://github.com/allenai/open-instruct/pull/1748) `[CLOSED]`
    *   **摘要：** 新增了完全自包含的纯 Bash 沙箱 RL 环境 `SWERLVanilluxSandboxEnv`。这标志着 Open Instruct 正在向复杂的 Agent RL（如软件工程代码修复）场景拓展。新 PR 从个人 fork 转移至主仓库以解决 CI 触发问题，旧的 #1748 已关闭。

*   **工程与基建修复 (Mason/Docker)**
    *   [PR #1789](https://github.com/allenai/open-instruct/pull/1789) `[OPEN]`：修复了 Beaker debug 任务中 `--cluster` 参数因 `argparse` 机制导致重复传参被覆盖的问题，确保任务能正确分发到多个集群。
    *   [PR #1786](https://github.com/allenai/open-instruct/pull/1786) `[OPEN]`：修复 `.dockerignore` 未正确排除嵌套虚拟环境（如 `oe-eval-internal/.venv/`）的问题，避免将无用文件打入 Docker 构建上下文。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **直面 RL 训练的核心工程痛点：** 随着 LLM 规模增长，RL 阶段的显存爆炸是行业痛点。Open Instruct 正在积极推动 Tiled lm-head loss（[PR #1785](https://github.com/allenai/open-instruct/pull/1785)）等特性，证明其代码库在应对真实大规模 RLHF 训练瓶颈上具有极高的实用价值。
2.  **前沿算法的工程级整合与收敛：** 并非简单堆砌算法，而是致力于 API 层面的重构（如 [PR #1790](https://github.com/allenai/open-instruct/pull/1790)）。将 DPPO 等变体统一至 GRPO 的底层掩码与校正机制中，显著提升了框架的可组合性与数值稳定性，说明其架构设计正向工业级高内聚低耦合方向演进。
3.  **从对齐向 Agent RL 延伸：** 新引入的 SWERL 沙箱环境（[PR #1788](https://github.com/allenai/open-instruct/pull/1788)）表明项目已经不局限于传统的指令对齐，正在整合端到端的环境交互能力（如离线 SWE-agent 求解），这是目前 RL 驱动大模型能力破圈的关键趋势。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

这里是为您生成的 2026-07-28 RL 日报摘要：

### 1. 今日速览
*   **整体活跃度**：处于低活跃的底层维护状态。过去 24 小时内无新增 Issue，无新版本发布，仅 1 个核心代码 PR 迎来更新。
*   **项目链接**：[Denys88/rl_games](https://github.com/Denys88/rl_games)

### 2. 版本发布
*   **无新版本发布**（数据统计周期内 Releases 为 0）。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。社区反馈处于静默期。

### 4. 关键 PR 进展
尽管数量较少，但今日更新的 PR 具有极高的技术质量，直击 RL 工程实践中的隐蔽痛点：

*   **[OPEN] #362 PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者**：ViktorM
    *   **更新时间**：2026-07-27
    *   **技术解析**：这是一个针对 PPO 算法底层正确性的修复。在使用 `next_step-autoreset` 机制的环境（如 EnvPool 或原生 Gymnasium 1.x 向量环境）时，环境重置那一步的 Transition（包含被忽略的动作、无效的 reward、以及上一 episode 终止时的 obs）会被错误地混入 PPO 的 rollouts 中作为真实训练数据。该 PR 旨在精准剔除（mask）这些无效数据，同时引入了标量化 sigma 参数化。
    *   **链接**：[Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **极致的推理与训练吞吐量**：在当前 RL 生态（尤其是基于 Isaac Gym / Isaac Lab 的大规模 GPU 物理仿真环境中），`rl_games` 依然是单卡/多卡训练效率最高的 RL 库之一。其底层高度优化的张量计算逻辑，使其成为处理数万并发环境时的首选基线。
*   **硬核工程级 Bug 修复**：从今日更新的 PR #362 可以看出，项目维护者正在着手解决多环境自动重置时产生的“数据污染”问题。这种深达底层 Rollout 机制和 Autoreset 边界条件的修复，对于追求极致样本效率和策略收敛稳定性的前沿 RL 研究员具有决定性价值，是普通高层 API 封装库所无法提供的。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 2026-07-28 强化学习（RL）开源生态日报摘要：

# RL 开源生态日报：Gymnasium (2026-07-28)

## 1. 今日速览
Gymnasium 仓库在过去 24 小时内整体保持平稳，无新增 Issue 或版本发布。开发与维护活动主要集中在存量代码的优化上，共有 1 条关键 PR 迎来了更新。

## 2. 版本发布
*   **无新版本发布**（数据统计周期内）。

## 3. 重点 Issues
*   **无新增或更新的 Issue**。目前社区未公开新的功能诉求或 Bug 反馈。

## 4. 关键 PR 进展
*   **[OPEN] Add vector environment step benchmark** (`#1640`)
    *   **作者**: Kallinteris-Andreas
    *   **状态**: 开启中（于 2026-07-27 更新）
    *   **技术摘要**: 该 PR 提议在 `gymnasium/utils/performance.py` 中引入 `benchmark_step_vector` 函数。其核心功能是测量和评估**向量化环境**每秒能够执行的步数（Steps per second）。作者表示该基准测试最初用于 MJX (MuJoCo XLA) 环境的性能评估，目前已通过双环境 CartPole 的烟雾测试和 `ruff` 代码规范检查。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据较为平淡，但 Gymnasium 依然是当前 RL 生态不可或缺的基础设施：
*   **向量化与性能基准化**：从今日更新的 PR #1640 可以看出，社区正在将重心向**向量化环境的性能评估**倾斜。在当前 RL 训练规模不断膨胀的趋势下，精确测量环境步频（尤其是接入 MJX 等高性能物理引擎时）对算法吞吐量的优化至关重要。
*   **生态核心地位**：作为原 OpenAI Gym 的官方继任者（由 Farama-Foundation 维护），Gymnasium 的 API 规范（`reset`, `step` 以及 `Seeding` 机制）仍是绝大多数主流 RL 算法库（如 Stable-Baselines3, CleanRL 等）的开发标准，其工具链的任何微小更新（如性能测试工具）都会直接惠及下游无数 RL 项目。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>