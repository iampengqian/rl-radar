# RL 开源生态日报 2026-06-09

> 生成时间: 2026-06-08 22:28 UTC | 覆盖项目: 15 个

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
2026 年 6 月 9 日的 RL 开源生态呈现出明显的“分层演进”特征：以 LLM/Post-training 为核心的强化学习框架（verl, TRL, AReaL, slime, OpenRLHF）正处于高强度的底层重构与工程攻坚期；而传统 Deep RL 基础设施（Gymnasium, Tianshou 等）则已进入高度成熟、平稳迭代的维持期。整个开源社区的重心已全面从“单轮对齐算法实现”转向“超大规模分布式训练架构”、“多模态/前沿模型极速适配”以及“Agentic 复杂环境交互”。

## 各项目活跃度对比
过去 24 小时内有实际代码/社区动态的项目活跃度如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 6 open / 5 closed | ~32 updated | 无 | 重点攻坚 Qwen3.5/DeepSeek V4、国产 NPU 适配及 NCCL 底层通信优化 |
| **TRL** | 5 open / 12 closed | 15 open / 10 closed | 无 | 架构向异步分布式演进，攻坚 GRPO LoRA 通信开销与 VLM 支持 |
| **AReaL** | 6 open | 9 updated | 无 | 探索 SWE Agent 场景，引入 On-policy 蒸馏极致压榨显存 |
| **slime** | 1 updated | 4 closed / 3 open | 无 | 深耕异构多教师在线策略蒸馏（OPD），突破跨词表模型限制 |
| **ROCK** | 2 closed | 4 closed | 无 | 专注解决大规模集群文件清理与 PID 级系统资源防泄漏 |
| **OpenRLHF** | 0 | 2 closed | **v0.10.4** | 核心大版本升级，跟进 PyTorch 2.11 并修复底层 Token-level loss |
| **Gymnasium** | 0 | 2 open | 无 | 扩充多智能体第三方环境与 MuJoCo 底层参数教程 |
| **Open Instruct** | 1 open | 1 open | 无 | 适配 Hybrid 混合注意力模型，社区呼吁解耦内部集群依赖 |
| **Tianshou** | 1 open | 0 | 无 | 社区针对 TD3 算法探索噪声机制的理论细节进行纠错 |

*注：CleanRL、PettingZoo、rl_games、ROLL、Stable Baselines3、torchtune 过去 24 小时内无有效代码或社区活动，处于平稳维护期。*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **前沿架构的极速跟进**：新一代基座模型带来的复杂结构（如 Qwen3.5 的 MTP/GDN、DeepSeek V4、混合注意力机制）已成为各框架的首要适配目标。
2. **迈向 Agentic RL**：多方社区（verl, AReaL）均在探讨或寻求在 SWE-bench 等多轮工具调用场景下的 GRPO 训练支持，标志着 RL 正在从单轮对齐走向长轨迹的自主环境交互。
3. **多模态与在线策略蒸馏（OPD）**：多模态（VLM）对齐已全面下沉至各主流 RL Trainer。同时，利用不同架构/词表的大模型作为多教师进行高效在线策略蒸馏（如 slime），成为提升模型能力的新范式。

**工程与基础设施侧信号：**
1. **打破显存与通信墙**：通过异步机制、仅传输 LoRA 适配器或 Safetensors 补丁来大幅降低分布式训练的通信开销（TRL, verl）；利用 RolloutEngine 分离 BP 状态以极致压缩显存占用（AReaL）。
2. **底层核心依赖大跨代升级**：紧跟 vLLM (0.22.1)、DeepSpeed (0.19.1)、PyTorch (2.11) 甚至硬件层 NCCL (2.29.7+) 的最新 API，保障高并发算力集群的稳定与性能释放。
3. **计算精度与长序列优化**：全链路确定性推理、Padding-free 与跨梯度累积步的 Global Token-level loss 修复，正在解决变长/长上下文训练中的收敛对齐与算力浪费问题。

## 差异化定位分析
*   **verl vs OpenRLHF vs TRL**：这三者是目前 LLM Post-training 的核心基建。**verl** 在异构算力（昇腾 NPU）和极大规模底层通信并发上具备极客属性；**OpenRLHF** 以跟进底层依赖（PyTorch/vLLM/DS）最快、工程封装最扎实见长；**TRL** 则在 HuggingFace 生态下致力于架构解耦，侧重于多算法（DPO/KTO/SFT）统一接口与极致的显存/通信效率优化。
*   **AReaL vs slime**：两者均面向高阶的大规模分布式 RL。**AReaL** 聚焦于将 Actor 等组件微服务化，发力大集群的云原生调度；而 **slime** 的护城河在于更前沿的复杂训练范式，如当前独树一帜的“跨词表/多教师在线策略蒸馏”实现。
*   **ROCK**：作为阿里开源的大规模训练框架，其定位偏向底层“运维与调度基座”，专注解决的是百卡/千卡级别集群的磁盘清理、进程防僵死等决定任务成败的系统级痛点。
*   **传统 RL 阵营**：**Gymnasium** 已彻底成为“环境元生态”的标准 API 与分发枢纽；**Tianshou** 则代表着算法严谨性与理论一致性的沉淀。

## 社区热度与成熟度
1. **第一梯队（verl, TRL）**：社区热度极高，每日保持 15-40 个左右的 PR/Issue 处理量，生态处于爆发期，焦点集中在解决千卡集群中的 OOM、死锁等高并发痛点。
2. **中坚力量**：正处于向更复杂 Agent 场景和微服务架构演进的阵痛期，提 PR 与 Roadmap 讨论的含金量较高。
3. **高度成熟期**：以 Gymnasium、Tianshou、Stable Baselines3 为代表，日常代码提交极少，主要以修复文档精度、补充前沿环境测试用例为主，API 已经高度稳定，开发者可以放心作为底层依赖使用。

## 值得关注的趋势信号
1. **Qwen3.5 成为新一代“试金石”**：针对 Qwen3.5 引入的 MTP 和 GDN 架构，各大 RL 框架几乎在同一时间爆发了显存报错、注意力状态污染和权重丢失问题。极速兼容这些具有复杂路由和推测解码机制的模型，已成为 RL 基建的核心技术门槛。
2. **Agent 训练闭环正在形成**：多个顶级 RL 框架近期集中涌现出针对 SWE-bench 等 Agentic 任务的诉求，表明业界已不满足于单纯的数学/代码推理（如 R1-zero），正在尝试构建“测试通过即奖励”等复杂反馈闭环。
3. **“集群无关性”成为开源痛点**：Open Instruct 暴露出的问题极具代表性——那些强绑定特定内部计算平台（如 AI2 Beaker）的开源项目正面临社区的强烈重构诉求。未来，能否在多云、异构计算环境下平滑部署，将直接决定 LLM RL 框架的开源普及率。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-06-09 ROCK (alibaba/ROCK) 强化学习开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库共处理了 **2 个 Issues** 和 **4 个 Pull Requests**。整体活动主要围绕底层基础设施的资源清理逻辑修复及 CI 流水线的环境测试验证展开。所有更新的 Issue 和 PR 均已在今日关闭，开发迭代迅速。无新版本发布。

### 2. 版本发布
- **最新 Releases**：昨日无新版本发布。

### 3. 重点 Issues
今日共处理 2 个 Bug，均与集群环境下的资源/进程管理机制有关：
- **`check_pid_exists` 存在 PID/TID 复用误报导致 docuum 无法重启** ([#1073](https://github.com/alibaba/ROCK/issues/1073))
  - **摘要**：在工作节点上，由于系统对 PID/TID 的复用，导致 `check_pid_exists` 产生误报（False Positive）。系统误以为 `docuum`（Docker 镜像清理工具）进程仍在运行，从而阻止了该进程的正常重启，引发潜在的存储空间泄漏风险。该 Issue 已由作者提交修复并关闭。
- **`FileCleanupTask` 中 `exclude_dirs` 未能保护空目录免受删除** ([#1071](https://github.com/alibaba/ROCK/issues/1071))
  - **摘要**：用户发现，即便在配置中指定了 `exclude_dirs`，底层的文件清理任务在执行时依然会忽略该保护规则，导致指定的空目录被错误删除。

### 4. 关键 PR 进展
共 4 个 PR 产生状态更新，包含 2 项 Bug 修复与 2 项 CI/测试配置优化：
- **[[CLOSED] Fix docuum not restarting due to PID/TID reuse in check_pid_exists]([#1074](https://github.com/alibaba/ROCK/pull/1074))**
  - **进展**：针对上述的 PID 误报问题，优化了底层进程存活状态检查的逻辑，确保 `docuum` 在意外退出或 PID 被系统复用后能够被正确拉起。
- **[[CLOSED] Fix exclude_dirs not working for empty directory cleanup]([#1072](https://github.com/alibaba/ROCK/pull/1072))**
  - **进展**：修复了文件清理机制在处理空目录时忽略 `exclude_dirs` 的缺陷。根据摘要，主要修正了 `-depth` 等相关查找参数带来的副作用，保证了目录排除逻辑的优先级。
- **[[CLOSED] test: add environment verification test hq]([#1070](https://github.com/alibaba/ROCK/pull/1070))**
  - **进展**：新增基础环境验证测试，主要用于排查和校验 CI 环境配置的完整性。
- **[[CLOSED] test: add environment verification test]([#1016](https://github.com/alibaba/ROCK/pull/1016))**
  - **进展**：与 #1070 功能类似的基础环境验证测试 PR，创建于 5 月 26 日，今日迎来了最终关闭状态，表明 CI 的环境检测项已合并或验收完毕。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在大规模强化学习训练中，集群的**“训练稳定性”**与**“I/O 及存储管理的鲁棒性”**直接决定了实验的成败和计算资源的利用率。ROCK 今日的更新虽然侧重于基础设施（如镜像清理 `docuum`、文件系统过滤清理、CI 验证），但这恰恰反映了该项目在工程落地上的成熟度：
1. **解决大规模集群痛点**：针对 Linux PID 复用和文件清理边界条件的精准修复，说明 ROCK 在应对海量并发训练任务时，具备处理底层系统级状态冲突的丰富经验。
2. **保障 RL 实验环境**：RL 训练往往伴随大量 Checkpoint 写入与海量临时环境数据的销毁。完善的目录清理保护机制和不断迭代的 CI 测试流程，为研究人员提供了一个“不会因为磁盘意外爆满或底层工具僵死而中断”的可靠底层基座。
对于致力于多机多卡大规模 RL 训练的团队而言，ROCK 在底层基础设施细节上的持续打磨具有重要的工程参考和直接应用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime (THUDM) RL 生态日报 - 2026-06-09

## 1. 今日速览
过去 24 小时，slime 仓库共处理 **7 个 Pull Requests**（4 个合并/关闭，3 个新开），**1 个 Issue** 产生新动态，**无新版本发布**。当前项目核心开发重心明显聚焦于**大规模在线策略蒸馏**及**异构底层推理引擎的兼容性**建设。

## 2. 版本发布
**无**。

## 3. 重点 Issues
- **[#416 LoRA Support](https://github.com/THUDM/slime/issues/416)** [OPEN]
  - **动态**：获社区持续讨论（累计 18 个赞）。
  - **摘要**：社区呼吁 slime 原生支持 LoRA 微调，以显著降低 LLM 对齐与强化学习阶段的显存开销。虽然 Issue 创建于去年，但长期的讨论反映了在 RLHF/RLAIF 流程中结合参数高效微调（PEFT）已是强需求。

## 4. 关键 PR 进展
今日 PR 活动主要围绕**蒸馏基础设施升级**与**系统稳定性优化**展开：

### 🚀 核心特性：多教师与跨词表蒸馏
- **[#2033 [draft] Add support for multi teacher OPD and memory-efficient topk level OPD](https://github.com/THUDM/slime/pull/2033)** [OPEN]
  - **分析**：引入基于 Megatron 的 Top-k OPD（在线策略蒸馏）专属 Actor 流。通过将旧策略的 top-k 索引准备、教师 log-probs 计算以及 top-k/tail loss 拆分到独立子类，有效避免了干扰正常训练主路径，大幅提升显存效率。
- **[#2032 Support OPD when teacher tokenization differs](https://github.com/THUDM/slime/pull/2032)** [OPEN]
  - **分析**：破除了此前 SGLang OPD 强制要求 Student 和 Teacher 共享 Tokenizer 的限制。现在支持将原始对话重新渲染为教师模型的 chat template 进行推理，打通了**跨词表模型蒸馏**（例如用不同架构的模型作为 Teacher 进行 RL 引导）的链路。

### 🛠️ 模型支持与工程优化
- **[#2030 [examples]: add qwen3.5-9b model config and fully_async example](https://github.com/THUDM/slime/pull/2030)** [CLOSED]
  - **分析**：补充了当前业界高频使用的 9B 级别模型（Qwen3.5-9b）的启动配置，并新增了单机 8 卡的 `fully_async` 全异步训练示例，降低了前沿模型的 RL 实验门槛。
- **[#2024 Log progress while waiting for placement group](https://github.com/THUDM/slime/pull/2024)** [CLOSED]
  - **分析**：修复了 Ray 集群在等待 Placement Group（如 GPU 节点扩容或注册时）静默阻塞无日志输出的问题。增强了大规模分布式 RL 训练集群启动时的可观测性。
- **[#2000 [docs] fix broken example links in agent.md](https://github.com/THUDM/slime/pull/2000)** [CLOSED]
  - **分析**：常规文档修复，修正了 GitHub 源码阅读时 agent.md 中的示例路径失效问题。

### 🧹 内部清理与实验性提交
- **[#2027 Only upload per sample stats to wandb](https://github.com/THUDM/slime/pull/2027)** [CLOSED]
  - **分析**：优化监控指标上报逻辑，限制仅上传 per sample 级别的数据，可能旨在降低海量并发 rollout 下的 WandB 存储与可视化压力。
- **[#2031 Allow only set rollout_id for prompt that return multiple responses](https://github.com/THUDM/slime/pull/2031)** [CLOSED]
  - **分析**：细化了 rollout 数据结构的管理，针对单 prompt 返回多响应（例如 Best-of-N 采样或树搜索）的场景优化了 rollout_id 的分配逻辑。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **深耕高并发训练与异构蒸馏**：从 #2032 和 #2033 可以看出，slime 并未停留在基础的 PPO/Reinforce 实现上，而是正在攻坚大模型 RL 对齐的工程痛点——如何在大规模集群下**高效、低显存**地利用不同架构、不同词表的模型（Multi-teacher / Top-k OPD）进行在线策略蒸馏。
2. **底层基础设施的持续打磨**：对 Ray 集群 Placement group 的日志优化（#2024）和对全异步训练（`fully_async`）的广泛适配，证明了该项目在面向真实算力集群的大规模强化学习场景下，具备极高的工程成熟度。
3. **紧跟前沿模型生态**：快速跟进 Qwen3.5-9B 等主流基座模型的配置支持，确保开发者能在最新模型上第一时间开展 RLHF/DPO 及其变体实验，保持了极高的实战价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-06-09)

## 1. 今日速览
过去 24 小时内，AReaL 项目保持高活跃度。社区共更新了 **6 条 Issues** 和 **9 条 Pull Requests**，无新版本发布。活动重心集中在系统稳定性修复、大模型新架构支持（Qwen3.5）、以及演进路线图的制定。

## 2. 版本发布
**无**。最新代码变更目前仍在各功能分支中进行集成和测试。

## 3. 重点 Issues
*   **[Roadmap] 2026 H2 路线图发布**
    *   **摘要**：项目正式发布 2026 年下半年里程碑规划（[#1381](https://github.com/areal-project/AReaL/issue/1381)），引导社区贡献者明确高优先级开发方向。
*   **[Feature] 探索 SWE 场景 Agent 训练配方**
    *   **摘要**：开发者提出关于在 SWE-bench / SWE-Gym 等多轮 Agentic 软工任务上运行 GRPO 训练的疑问（[#1394](https://github.com/areal-project/AReaL/issue/1394)）。该 Issue 凸显了社区对 AReaL 在长轨迹、多工具调用环境及测试驱动奖励机制（Test-passing as reward）上的应用需求。
*   **[Feature] CUDA-IPC 路径支持 FP8 权重传输**
    *   **摘要**：提案在 awex colocated 架构中引入 FP8 权重直传（[#1359](https://github.com/areal-project/AReaL/issue/1359)），以进一步压榨多卡通信带宽极限。
*   **[BUG] TP/PP > 1 时 `clear_batches()` 崩溃**
    *   **摘要**：报告了非 DP 头节点在张量/流水线并行度大于 1 时的回归错误（[#1298](https://github.com/areal-project/AReaL/issue/1298)），影响大规模分布式训练的稳定性。

## 4. 关键 PR 进展
*   **[feat(megatron)] 支持 Qwen3.5 训练与推理** ([#1384](https://github.com/areal-project/AReaL/pull/1384)) - **[CLOSED]**
    *   **核心价值**：通过适配其全新的 GDN (Gated Delta Net) 混合注意力架构，完成了 Megatron 对 Qwen3.5 系列模型（Dense 及 MoE）的完整支持。这标志着 AReaL 在前沿模型架构支持上保持同步。
*   **[feat(distillation)] 引入基于 RolloutEngine 的 On-policy 蒸馏** ([#1376](https://github.com/areal-project/AReaL/pull/1376)) - **[CLOSED]**
    *   **核心价值**：使用专用的推理引擎替代训练引擎作为教师模型。通过剥离反向传播和 Optimizer 状态，显著降低策略蒸馏过程中的 GPU 显存开销。
*   **[fix] 修复 Rollout Worker 因容量超载导致的挂起问题** ([#1396](https://github.com/areal-project/AReaL/pull/1396)) - **[OPEN]**
    *   **核心价值**：将 Worker 的默认 `train_data_parallel_size` 设为 1，解决了当本地容量为 0 时，错误应用 DP 缩放陈旧度造成的死锁问题，提升集群鲁棒性。
*   **[feat] 关闭 Megatron 梯度缓冲区 CPU 备份** ([#1393](https://github.com/areal-project/AReaL/pull/1393)) - **[OPEN]**
    *   **核心价值**：Colocate 模式下的极致显存优化。由于梯度每步都会重新计算，该 PR 跳过 Offload 时的 CPU 备份阶段，可直接节省约 4 倍的 Host 内存。
*   **[fix] 修复 SGLang 后端的 LoRA RL 训练** ([#1385](https://github.com/areal-project/AReaL/pull/1385)) - **[OPEN]**
    *   **核心价值**：解除了单卡（24GB VRAM）及 Offload 关闭状态下的 LoRA 生命周期死锁，使资源受限环境下的 RLHF 微调成为可能。
*   **[feat(experimental)] 集成 Ray RDT 进行权重同步** ([#1305](https://github.com/areal-project/AReaL/pull/1305)) - **[OPEN]**
    *   **核心价值**：引入基于 Ray Direct Transport 的底层权重同步机制，为大规模分布式训练提供更高效的跨节点通信选择。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **贴近前沿大模型迭代**：随着 Qwen3.5 等采用混合专家及新注意力机制（如 GDN）的模型发布，RL 框架的底层算子适配成为瓶颈。AReaL 快速跟进的特性，使其成为进行前沿 MoE 模型 RL 对齐的可靠基建。
2.  **深度优化分布式 RLFF 资源壁垒**：无论是引入 RolloutEngine 进行轻量化 On-policy 蒸馏（大幅省显存），还是精细化解码 Offload 时的 CPU 内存抢占（#1393），项目正不断挑战单集群算力密度的极限。
3.  **从 LLM 走向 Agentic RL**：社区开始探讨并寻求 SWE 等多轮工具调用场景的 RL 训练支持。这表明 AReaL 正在从传统的“单轮对齐”向复杂环境交互的 Agent 反馈学习演进，契合大模型自主化发展趋势。
4.  **架构的持续重构与解耦**：引入微服务 CLI 脚手架（#1375）和 Ray RDT 传输层（#1305），说明项目在向更模块化、易扩展的云原生 RL 训练系统迈进，降低了研究者的二次开发门槛。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 开源项目日报摘要 (2026-06-09)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度，无新版本发布，社区重心聚焦于**后端基础设施优化、显存效率提升及分布式训练架构重塑**。
- **Issues 更新**：17 条（其中 5 条 Open，12 条 Closed）
- **PR 更新**：25 条（其中 15 条 Open，10 条 Closed）
- **核心趋势**：为 GRPO/AsyncGRPO 引入异步化、LoRA 及分布式通信优化；多模态（VLM）支持正在全面下沉至各类 Trainer（KTO, Online DPO）。

---

## 2. 版本发布
- **最新 Releases**：无

---

## 3. 重点 Issues
今日的焦点议题集中在**训练架构扩展性**、**细粒度训练机制**与**模型兼容性**修复上。

- **架构级提案：统一 Rollout Sources 环境**
  - [Issue #5974](https://github.com/huggingface/trl/issues/5974) [Open]: 提出 RFC，计划为 GRPO/AsyncGRPO 引入统一的 Rollout Source 接口，解耦环境交互、智能体与奖励模型，旨在打造标准化的 RL 底层 Seam。
- **架构级提案：vLLM 纯 LoRA 适配器同步**
  - [Issue #5975](https://github.com/huggingface/trl/issues/5975) [Open]: 建议在 GRPOTrainer 中支持纯 Adapter 级别的权重同步至 vLLM，避免当前全量合并权重带来的巨大通信开销，极大提升大模型分布式训练效率。
- **功能演进：加权 SFT (Weighted SFT)**
  - [Issue #5761](https://github.com/huggingface/trl/issues/5761) [Open]: 提出在 SFT 阶段引入 Token 级别的权重机制，改变传统 SFT 所有 Token 同等对待的现状，对混合质量数据集的长文本生成训练极具价值。
- **功能演进：DPO Packing 机制**
  - [Issue #2469](https://github.com/huggingface/trl/issues/2469) [Open]: 重新讨论在 DPOTrainer 中支持 Packing，以解决变长序列因 Padding 导致的严重算力浪费问题。
- **可观测性增强：Trackio Profiling 支持**
  - [Issue #5973](https://github.com/huggingface/trl/issues/5973) [Open]: 指出 `ProfilingContext` 缺失对 Trackio 的支持，导致用户无法追踪奖励函数执行耗时等核心性能指标。

---

## 4. 关键 PR 进展
PR 活动主要围绕**分布式训练加速、多模态对齐、核心代码重构及鲁棒性测试**展开。

### 🚀 核心功能与架构优化
- **异步 GRPO LoRA 与增量同步**：
  - [PR #5896](https://github.com/huggingface/trl/pull/5896) [Open]: 为 `AsyncGRPOTrainer` 正式添加 PEFT/LoRA 支持。
  - [PR #5937](https://github.com/huggingface/trl/pull/5937) [Open]: 引入 Delta 权重同步机制，通过 HF Bucket 传输稀疏 Safetensors 补丁，取代全量模型广播，大幅降低分布式通信瓶颈。
- **SFT 损失函数与显存优化**：
  - [PR #5846](https://github.com/huggingface/trl/pull/5846) [Open]: 将 SFT 的默认 `loss_type` 切换为 `chunked_nll`，在保持效果不变的情况下优化显存占用。
- **DPO Padding-Free 及 VLM 扩展**：
  - [PR #5141](https://github.com/huggingface/trl/pull/5141) [Open]: 推进 DPO 的 Padding-free 支持，加速训练并减少冗余计算。
  - [PR #5939](https://github.com/huggingface/trl/pull/5939) [Open]: 对齐 KTO 与 DPO 架构，正式引入视觉语言模型（VLM）及多模态数据集支持。

### 🛠️ Bug 修复与稳定性提升
- **PEFT 与 Liger Kernel 冲突警告**：
  - [PR #5977](https://github.com/huggingface/trl/pull/5977) [Open]: 修复当 `lm_head` 被 LoRA 适配时，GRPO 的 Liger 融合内核计算错误的问题，增加显式异常抛出以防隐性 Bug。
- **GOLD Trainer 概率计算修正**：
  - [PR #5905](https://github.com/huggingface/trl/pull/5905) [Open]: 修复实验性 GOLD Trainer 中 `ULDLoss` 未遵循贝叶斯链式法则的计算偏移错误。

### 🧪 测试与文档
- **Trackio Profiling 修补**：
  - [PR #5979](https://github.com/huggingface/trl/pull/5979) [Open]: 配合 Issue #5973，补齐 `ProfilingContext` 向 Trackio 后端推送性能剖析指标的能力。
- **底层硬件测试与鲁棒性**：
  - [PR #5842](https://github.com/huggingface/trl/pull/5842) [Open]: 增加 SFT FA2 下的 Padding-free 不变性测试。
  - [PR #5962](https://github.com/huggingface/trl/pull/5962) [Closed]: 新增 Olmo3 模型的测试用例。
  - [PR #5771](https://github.com/huggingface/trl/pull/5771) [Open]: 优化 XPU 环境 CI 测试，增加缓存自动清理机制。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在经历从“算法实现库”向“**分布式大模型强化学习工程基座**”的深度演进。从今日的数据可以看出两个明确的信号：
1. **面向极致的计算与通信效率**：无论是尝试 DPO/SFT 的 Padding-free 改造（[#5141](https://github.com/huggingface/trl/pull/5141), [#5846](https://github.com/huggingface/trl/pull/5846)），还是针对大规模异步集群设计的 LoRA 适配器同步（[#5975](https://github.com/huggingface/trl/issues/5975)）和 Delta 权重补丁传输（[#5937](https://github.com/huggingface/trl/pull/5937)），TRL 正在死磕大模型 RLHF/GRPO 训练中的显存墙和通信墙瓶颈。
2. **多模态与 RL 底层解耦**：将 VLM 支持快速下沉至 KTO 等对齐算法（[#5939](https://github.com/huggingface/trl/pull/5939)），同时设计统一 Rollout Source 接口（[#5974](https://github.com/huggingface/trl/issues/5974)），表明 TRL 致力于提供高度模块化的后端，以适应未来更复杂的 Agent 交互式环境训练。

对于关注 Post-training、数学推理（R1-zero 复现）及多模态对齐的开发者和研究人员而言，TRL 的架构演进直接决定了下一代大模型迭代周期的上限，具有极高的工程追踪价值。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 日报摘要 | 2026-06-09

**项目仓库**: [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

## 1. 今日速览
过去 24 小时内，Tianshou 仓库整体活动较为平稳。新增 1 个关于 TD3 算法参数文档准确性的 Issue，无新增 Pull Request 及版本发布。

## 2. 版本发布
*   **过去 24 小时**: 无新版本发布。

## 3. 重点 Issues
*   **[#1301] [OPEN] TD3Params `policy_noise` docstring**
    *   **链接**: [thu-ml/tianshou/issues/1301](https://github.com/thu-ml/tianshou/issues/1301)
    *   **作者**: RolandStolz
    *   **摘要**: 提出关于 `TD3Params` 中 `policy_noise` 参数文档描述的技术性修正。Issue 指出 `highlevel/params/algorithm_params.py` 第 812 行的说明存在误导性。当前文档称较高的 `policy_noise` 值“增加了目标策略的探索”，但作者指出这实际上混淆了 TD3 算法中噪声的机制（`policy_noise` 主要用于平滑目标策略以解决函数逼近误差，而非直接用于在线探索）。这是一个典型的 RL 算法理论概念界定问题。

## 4. 关键 PR 进展
*   **过去 24 小时**: 无新增或更新的 Pull Request。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Tianshou 作为业界知名的高深度强化学习框架，其当前的维护状态反映了项目已进入高度成熟期。尽管日常代码提交频率不如生态早期，但它依然具备不可替代的跟踪价值：

1.  **算法严谨性与规范**: 从今日的 Issue #1301 可以看出，社区正在对底层算法的数学概念和代码实现（如 TD3 的噪声机制）进行极为细致的打磨。这种对文档和理论一致性的苛求，使其成为研究人员复现算法和学习 RL 底层逻辑的可靠参考。
2.  **稳定的工程基座**: 经过长期的迭代，Tianshou 提供了高度模块化且经过大量环境验证的 RL 基础组件。对于需要构建复杂 RL 应用（如多智能体、离线强化学习）的开发者而言，它依然是一个低风险、高可扩展性的底层基石。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报摘要：OpenRLHF (2026-06-09)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库无新增或更新的 Issues，合入 2 个关键 PR，并发布了最新的 `v0.10.4` 版本。本次更新核心聚焦于**底层训练框架的大版本跨代升级（vLLM 0.22.1 与 DeepSpeed 0.19.1）**以及**Token-level loss 计算的精度修复**。

## 2. 版本发布
- **[v0.10.4](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.10.4)**
  - **核心变更**：
    1. 修复了特定学习率调度器的参数传递问题（仅传递 `min_lr_rate` 至支持的调度器）。
    2. 大幅升级底层依赖，将 vLLM 提升至 `0.22.1`，DeepSpeed 提升至 `0.19.1`。
    3. 修复了 Token-level loss 的计算逻辑，实现了跨梯度累积步的全局 token 均值计算。

## 3. 重点 Issues
- 过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#1248 [CLOSED] Upgrade vLLM to 0.22.1 and DeepSpeed to 0.19.1](https://github.com/OpenRLHF/OpenRLHF/pull/1248)**
  - **作者**: hijkzzz
  - **摘要**: 解决了底层推理引擎与训练框架的依赖升级。由于 vLLM 0.22.1 强依赖 PyTorch 2.11，该 PR 将基础容器平滑迁移至 `pytorch:26.03-py3`（规避了尚无 vLLM 正式版支持的 PyTorch 2.12）。同时，针对 PyTorch 2.11 环境下缺少预编译 `flash-attn 2.8.3` 的问题进行了底层构建适配。
- **[#1249 [CLOSED] Fix token-level loss (global token-mean across grad accu…)](https://github.com/OpenRLHF/OpenRLHF/pull/1249)**
  - **作者**: hijkzzz
  - **摘要**: 修复了损失函数的底层计算逻辑。确保在进行梯度累积时，Token-level loss 能够正确计算全局 Token 均值，这对于长序列或变长序列下的 RLHF 训练收敛稳定性至关重要。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 展现出了对大模型 RLHF 工程痛点的极强把控力。随着模型架构和底层算子的快速迭代，保持对最新高性能推理引擎和分布式训练框架的支持是一项高门槛的工程任务。今日 `v0.10.4` 版本的发布不仅解决了 vLLM 最新版与 PyTorch 生态的依赖锁定问题，还深入到底层修复了梯度累积下的 Token-level loss 计算。对于需要构建大规模、高稳定性对齐训练基建的团队而言，OpenRLHF 依然是跟进最新 SOTA 技术栈最迅速、工程质量最扎实的开源实现之一。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 (2026-06-09)

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。项目共处理 **11 个 Issues**（6 open / 5 closed）和 **32 个 Pull Requests**（重点集中在 vLLM Rollout 引擎、Megatron mBridge 兼容性以及国产 Ascend NPU 适配）。核心开发方向聚焦于 **Qwen3.5 系列模型（含 MoE、MTP 架构）的稳定训练支持**、**多模态（VLM）训练修正**以及底层通信库（NCCL/HCCL）的内存与并发优化。今日无新版本发布。

## 2. 版本发布
- **最新 Releases**：无。当前社区关注点主要在 v0.8.x 版本的 bug 修复及架构迭代上。

## 3. 重点 Issues

- **[Qwen3-VL + LoRA 训练效率异常]** GRPO + LoRA 训练 qwen3-vl-8b 速度过慢，单步耗时超 2 小时，引发社区讨论（8 条评论）。
  👉 [Issue #5365](https://github.com/verl-project/verl/issues/5365)
- **[Qwen3.5 + FSDP2 显存报错]** 使用 vllm + fsdp2 训练 qwen3.5 9b/27b 时出现非法内存访问。
  👉 [Issue #6549](https://github.com/verl-project/verl/issues/6549)
- **[FSDP2 Rollout 内存泄漏]** 使用 FSDP2 进行权重同步时，CPU 内存持续增长并最终导致 Ray OOM，该问题影响大模型长上下文训练。
  👉 [Issue #6468](https://github.com/verl-project/verl/issues/6468)
- **[v0.8.x mBridge 强制绑定限制]** 开发者呼吁在 v0.8.x 版本中提供禁用 `use_mbridge` 的选项，以便适配尚未注册到 mBridge 的自定义模型。
  👉 [Issue #6658](https://github.com/verl-project/verl/issues/6658)
- **[Agentic SWE 训练诉求]** 社区寻求在 verl 中进行 SWE-bench/SWE-Gym 等多轮 Agentic 软工任务的 GRPO 训练示例（含工具调用与长上下文配置）。
  👉 [Issue #6646](https://github.com/verl-project/verl/issues/6646)
- **[MTP 架构支持诉求]** 开发者请求 FSDP 后端支持带有 MTP (Multi-Token Prediction) 结构的模型（如 Qwen3.5）GRPO 训练。
  👉 [Issue #6483](https://github.com/verl-project/verl/issues/6483)

## 4. 关键 PR 进展

- **[模型支持] DeepSeek V4 GRPO 训练**：引入基于 Megatron-Bridge 的 DeepSeek V4 Flash GRPO 支持，涵盖 vLLM rollout 及 FP8/MXFP4 权重传输。
  👉 [PR #6473](https://github.com/verl-project/verl/pull/6473)
- **[Rollout] 修复 MTP Drafter 权重丢失问题**：解决开启 MTP rollout 时，vLLM hybrid sleep (level 2) 错误丢弃 drafter 权重导致的崩溃。
  👉 [PR #6661](https://github.com/verl-project/verl/pull/6661)
- **[模型] 修复 Qwen3.5 线性注意力 + Ulysses SP 冲突**：解决 FSDP remove-padding + Ulysses 序列并行时，packed samples 跨边界共享线性注意力状态的严重 Bug。
  👉 [PR #6660](https://github.com/verl-project/verl/pull/6660)
- **[Rollout] 补全 vLLM 确定性推理**：为 vLLM rollout 及 reward model 推理添加全链路确定性支持，实现不同运行间的 reward 曲线严格按位对齐。
  👉 [PR #6572](https://github.com/verl-project/verl/pull/6572)
- **[Agent] VLM 纯文本输入修复**：修复 VLM（如 Qwen3.5）在执行纯文本任务（如 GSM8K）时，`_compute_position_ids` 中因图像为 None 导致的 `TypeError` 崩溃。
  👉 [PR #6656](https://github.com/verl-project/verl/pull/6656)
- **[Ascend NPU] CI/文档与核心功能修复**：密集合入昇腾 NPU 适配代码，包括 Qwen2-30B-MoE 与 Qwen3.5-35B-MoE 的 nightly CI 测试 ([PR #6585](https://github.com/verl-project/verl/pull/6585), [PR #6637](https://github.com/verl-project/verl/pull/6637))，以及 `ignore_eos` 参数的向下传递修复 ([PR #6630](https://github.com/verl-project/verl/pull/6630))。
- **[基础设施] 升级底层 NCCL 依赖**：将 Docker 镜像中捆绑的 NCCL 升级至 `>= 2.29.7`，以确保 `ncclCommSuspend/Resume` API 的正常暴露与通信挂起恢复。
  👉 [PR #6621](https://github.com/verl-project/verl/pull/6621)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **紧跟 SOTA 模型架构前沿**：verl 正在极速适配最新一代基础模型（如 Qwen3.5 系列、DeepSeek V4），特别是针对 MoE 路由、MTP (Multi-Token Prediction) 等复杂结构的训练与推理打通，这在大规模 LLM 训练引擎中具备显著技术门槛优势。
2. **深度攻坚底层系统稳定性**：从今日的 PR 进展可以看出，项目正着力解决 RLHF 场景下的核心痛点——包括 vLLM weight sync 时的 Ray OOM（内存泄漏）、多级 DP/EP 下的 Socket 冲突，以及 NCCL/HCCL 底层通信的 Suspend/Resume 优化，这些是保障千卡规模集群稳定运行的关键。
3. **支撑 Agent 与复杂环境交互**：社区已经开始探索 SWE-bench 等多轮 Agentic 软工任务的 GRPO 训练，且代码库中针对 `agent_loop` 的 VLM 适配正在快速迭代。这标志着 verl 正在从单纯的“对齐训练工具”进化为支撑复杂环境交互的 RL 基础设施。
4. **高性能异构计算生态闭环**：项目在巩固 NVIDIA 显卡生态的同时，正将 Ascend (昇腾) NPU 的适配与 nightly CI 提升至战略高度，为高算力需求的 RL 实验提供了多硬件基座选项。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-06-09 强化学习（RL）开源生态项目日报摘要：

### 1. 今日速览
截至 2026-06-09，`allenai/open-instruct`在过去 24 小时内活动平稳，无新版本发布。社区当前的关注焦点呈现出“双向特征”：底层基础设施正在整合新颖的模型架构（Hybrid Model），而社区用户则呼吁解耦深度绑定 AI2 特定计算集群的代码。

### 2. 版本发布
无最新 Release。

### 3. 重点 Issues
- **#1717 [OPEN] 基础设施耦合度过高，要求支持集群无关性**
  - **作者**: owos
  - **链接**: [allenai/open-instruct Issue #1717](https://github.com/allenai/open-instruct/issues/1717)
  - **摘要**: 社区用户指出该项目目前重度依赖 AI2 内部集群（如 `beaker`, `ai2/jupiter`, `ai2/ceres`, `ai2/titan`）。对于外部研究者而言，强耦合的底层代码导致极高的迁移成本。作者提议将代码重构为集群无关的通用范式。
  - **生态洞察**: 随着 RL 训练对算力需求的激增，RLHF/Post-training 框架能否在多云、多集群环境下无缝部署，已成为开源项目能否被广泛采用的关键瓶颈。

### 4. 关键 PR 进展
- **#1715 [OPEN] Olmo-core 脚本支持 Hybrid 模型架构**
  - **作者**: finbarrtimbers
  - **链接**: [allenai/open-instruct PR #1715](https://github.com/allenai/open-instruct/pull/1715)
  - **摘要**: 该 PR 旨在让 `open-instruct` 的 Olmo-core 脚本支持 Hybrid 模型。核心技术改动包括：
    1. **选择性检查点**: 增加了对特定模块进行保存的机制，以规避无法进行 Checkpoint 的 GDN 层。
    2. **依赖项升级与扩充**: 上调了 FLA (Flash Linear Attention) 的版本，并显式引入了 `tilelang` 依赖。
  - **生态洞察**: 该 PR 表明 AI2 正在将更高效的混合注意力机制（Hybrid Model）引入 RL 训练生态中，FLA 和 tilelang 的结合预示着在长上下文处理和推理加速上的进一步优化。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟底层模型架构演进**: 通过 PR #1715 可以看出，项目正在快速适配融合了 Linear Attention (如 FLA) 和传统 Attention 的 Hybrid 模型。这在当前的 RL 与 LLM 对齐研究中，对于突破长文本 RL 训练的显存和计算瓶颈具有直接意义。
2. **暴露了开源 RL 的工程痛点**: Issue #1717 反映出当前顶尖研究机构开源的 RL 代码往往带有严重的内部工程遗迹（如 AI2 的 Beaker 平台）。该议题的提出及后续可能的重构，将为社区提供更纯粹的 RL 算法与 RLHF 工作流参考，极大地降低外部研究者的复现门槛。

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

以下是为您生成的 2026-06-09 Gymnasium 项目日报摘要：

# RL 生态项目日报：Gymnasium
**统计周期**：2026-06-08 至 2026-06-09

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活动趋于平稳。无新版本发布，无新增或更新的 Issues，仅有 2 个 Pull Requests 出现了状态更新或新增提交。生态层面的重点依然集中在第三方环境集成与官方教程补全。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
- **最新 Issues**：过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日共有 2 条 PR 更新，均处于 `[OPEN]` 状态，聚焦于多智能体环境扩展与底层物理引擎的入门教程：

- **PR #1589 [OPEN] 新增多智能体第三方环境**
  - **作者**: ludwig154
  - **链接**: [Farama-Foundation/Gymnasium PR #1589](https://github.com/Farama-Foundation/Gymnasium/pull/1589)
  - **摘要**: 提交了一个新的第三方机器人环境 **WireHarness-MultiAgent-RL**。该环境基于 MuJoCo 构建，专用于多智能体线束布线研究，要求 5 个平面移动智能体协作将线缆段导航至预设目标。这进一步丰富了 Gymnasium 的多智能体控制生态。
  - **更新时间**: 2026-06-08

- **PR #1584 [OPEN] 新增 MuJoCo 参数自定义教程**
  - **作者**: Lonny154
  - **链接**: [Farama-Foundation/Gymnasium PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)
  - **摘要**: 新增了一篇面向初学者的 MuJoCo 环境参数自定义文档。该教程以 `HalfCheetah-v5` 为例，演示了如何通过 `gym.make` 的关键字参数（如修改 `ctrl_cost_weight`）来影响奖励组件，并强调了在相同种子下控制变量的最佳实践。
  - **更新时间**: 2026-05-22（于 2026-06-08 产生更新活动）

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为事实上的 RL 标准化 API 规范，Gymnasium 本身的代码迭代已高度成熟。尽管日常核心代码变动较少，但从今日的 PR 动态可以看出，其在当前 RL 生态中的核心价值已演变为**“环境元生态（Meta-ecosystem）的枢纽”**：
1. **连接前沿研究**：通过 Third-party 列表不断吸收如复杂多智能体协作（WireHarness）等垂直领域的最新研究成果。
2. **降低入门门槛**：社区持续补全针对 MuJoCo 等底层物理引擎的参数级控制教程，巩固其作为 RL 入口级工具的不可替代性。
继续关注该仓库的 PR 和 Third-party 列表，是追踪具身智能与多智能体前沿环境动态的高效途径。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>