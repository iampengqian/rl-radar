# RL 开源生态日报 2026-04-02

> 生成时间: 2026-04-01 22:08 UTC | 覆盖项目: 15 个

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
2026年4月2日的 RL 开源生态呈现出明显的**分层演化**特征：
1.  **LLM/Agent 训练基建（上层）**：以 **veRL** 和 **TRL** 为首的头部项目竞争白热化，正快速从单纯的 PPO/DPO 框架向 **Agent 原生**、**多模态** 及 **Diffusion 模型** 支持演进。veRL 的仓库迁移与 TRL 的 Distillation 特性标志着两者都在为下一阶段的通用 RL 基础设施铺路。
2.  **研究型算法库（中层）**：**OpenRLHF** 和 **Open Instruct** 在巩固现有 GRPO/PPO 实现的基础上，分别向 **安全沙箱** 和 **OLMo 原生架构** 深耕，强调代码的可控性与底层性能。
3.  **经典控制与底层环境（基座）**：**Stable Baselines3** (v2.8.0) 和 **Gymnasium** 处于成熟维护期，主要进行 Python 版本代际更新和 API 修补，确保了生态地基的稳定性。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **veRL** | 14 | 36 | 0 | **极高**。正进行大规模架构重构（Agent/Diffusion）与仓库迁移。 |
| **TRL** | 7 | 18 | 0 | **高**。密集修复多模态 Bug，引入蒸馏与 Agent 控制逻辑。 |
| **Open Instruct** | 0 | 9 | 0 | **中高**。底层架构向 OLMo-core 迁移，GRPO 重构中。 |
| **ROCK** | 5 | 9 | 0 | **中**。聚焦 K8s 基础设施增强与稳定性修复。 |
| **Stable Baselines3** | 0 | 3 | 1 | **中**。发布 v2.8.0，淘汰 Python 3.9，拥抱 PyTorch 2.x。 |
| **OpenRLHF** | 1 | 3 | 0 | **中低**。扩展预训练支持与数据加载性能。 |
| **Slime** | 0 | 3 | 0 | **中低**。跟进 NVFP4 量化与异步 Rollout 架构。 |
| **RLLib / Tianshou** | 0 | 4 | 0 | **低**。存量 PR 清理与维护。 |
| **rl_games** | 3 | 0 | 0 | **低**。社区排查 SAC 收敛性问题。 |
| **Others** | 0 | 0 | 0 | **静默**。AReaL, CleanRL 等无活动。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：Agent 交互与后训练算法
*   **Agent 原生 RL**：**veRL** (RFC #5790) 和 **TRL** (PR #5390) 均在强化 Agent 的生命周期管理，特别是引入了工具调用后的循环终止机制和轨迹网关，试图解决 LLM Agent 在多轮交互中的训练稳定性问题。
*   **算法融合**：**Open Instruct** 正在将 GRPO 的组归一化优势与 PPO 的 Value Model 结合；**TRL** 则引入了 Tulu-3 的长度归一化 DPO Loss 和 On-policy 蒸馏，显示出后训练技术栈正在趋向多种算法的混合编排。

### 2. 工程/基础设施侧信号：显存、异步与安全
*   **极致显存优化**：面对长上下文和 VLM 训练压力，**NVFP4** 量化训练（**Slime**, **veRL** Roadmap）和 **Chunked LM Head**（**TRL**）成为标配，旨在通过低精度和分块计算突破显存瓶颈。
*   **异步与数据传输**：**veRL** 的零拷贝 TransferQueue 和 **Slime** 的增强型异步 Rollout（Staleness Control）表明，大规模分布式 RL 的瓶颈已从计算转向了**数据流转效率**和**样本时效性控制**。
*   **安全隔离**：**OpenRLHF** (Issue #1210) 和 **ROCK** (Kata DinD) 都在强调训练环境的安全性，特别是防止 Agent 执行恶意代码或污染宿主环境。

## 差异化定位分析

*   **veRL vs. TRL**：
    *   **veRL** 正在定位为**高性能的工业级底座**，强调异构硬件（NPU/AMD）、多引擎融合和 Agent 抽象层，适合超大规模集群部署。
    *   **TRL** 则更像**SOTA 算法的快速试验田**，紧跟 HuggingFace 生态，优先支持最新的模型（Gemma-3, Qwen3）和算法变体（Distillation），更适合科研与中小规模实验。

*   **OpenRLHF vs. Open Instruct**：
    *   **OpenRLHF** 保持了**通用性**，开始探索从预训练到微调的全链路支持，且对 Ray 分布式的适配较深。
    *   **Open Instruct** 则表现出强烈的**OLMo 原生倾向**，通过剥离 HF Trainer 依赖，转向 OLMo-core 以追求极致的架构控制权。

## 社区热度与成熟度
*   **第一梯队 (veRL, TRL)**：处于高速迭代期，Issue 讨论热烈，PR 频繁，且主要贡献者来自头部大厂，问题响应速度快，是目前最活跃的 RLHF 项目。
*   **成熟梯队 (SB3, Gymnasium)**：进入稳定维护期。SB3 发布 v2.8.0 强制升级 Python 版本，显示了其维护者对代码质量的严格要求，虽然新功能少，但作为基线极其可靠。
*   **垂直领域**：**rl_games** 依然是 Isaac Gym 生态的首选，但近期缺乏代码更新，社区主要在排查旧算法 Bug；**ROCK** 和 **Slime** 专注于阿里内部架构的输出与优化，工程化程度高但社区广度略逊于前两者。

## 值得关注的趋势信号
1.  **Diffusion 模型的 RL 化**：veRL 对 FlowGRPO 的支持是一个强烈信号，预示着 RL 不仅用于文本对齐，开始正式大规模介入图像/视频生成模型的微调流程。
2.  **Agent 沙箱成为刚需**：随着 Agent 训练的普及，**执行环境隔离**（Sandboxing）已从可选项变为必选项。未来 RL 框架可能会内置轻量级容器/Docker 支持。
3.  **Flash Attention 4 & NVFP4**：硬件适配的节奏在加快。对 Blackwell 架构（FP4）和最新 Attention 机制的抢占，意味着 2026 年的 RL 训练将在更低精度（4-bit）和更长上下文（1M+）上进行。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是 2026-04-02 的 ROLL（Alibaba）开源项目日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体活跃度较低。无新增 Issue 或版本发布，仅有 1 个 PR 更新。主要动态集中在代码库的 Bug 修复与架构合规性调整上。

### 2. 版本发布
- **无新版本发布**

### 3. 重点 Issues
- **无新增或更新 Issues**

### 4. 关键 PR 进展
- **[#376 [CLOSED] fix: use Cluster instead of WorkerConfig for ref log prob dynamic batching](https://github.com/alibaba/ROLL/pull/376)**
    - **状态**：已关闭（Merged）
    - **作者**：dubin555
    - **摘要**：此 PR 修复了 `rlvr_pipeline.py` 中的一个对象引用错误。在 `use_ref_model=False` 的场景下，代码错误地将 `worker` 变量赋值为配置对象 `WorkerConfig`，而动态批处理逻辑实际需要的是运行时实例对象 `Cluster`。该修复确保了引用对数概率计算时传入正确的对象类型，避免因属性缺失导致的运行时错误。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **底层架构的严谨性**：从 PR #376 可以看出，项目正在细化其对大规模分布式训练的支持。区分 `WorkerConfig`（静态配置）与 `Cluster`（运行时集群实例）不仅符合分布式系统的设计原则，也表明 ROLL 正在优化其 Actor-Worker 交互的底层逻辑，这对构建高可靠性的 RL 训练流程至关重要。
- **RLVR（Reinforcement Learning with Verifiable Rewards）的落地探索**：涉及修复的文件位于 `RLVRPipeline`，暗示该项目正在积极探索或支持基于可验证奖励的强化学习范式。这是当前 LLM 对齐和推理能力提升的重要技术方向，值得开发者持续追踪其实现细节。

---
*分析师注：虽然今日数据量较少，但 PR #376 涉及的 Dynamic Batching 是 RL 训练显存优化的关键技术点，建议关注该特性后续在长上下文训练中的表现。*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目生态动态 (2026-04-02)

## 1. 今日速览
过去 24 小时，阿里巴巴 ROCK 项目保持了较高的开发活跃度，主要集中在 **基础设施增强** 与 **稳定性修复**。共处理了 5 条 Issue 更新和 9 条 PR 更新。虽然无新版本发布，但在 Kata 容器运行时支持 DinD (Docker-in-Docker)、Sandbox 元数据持久化以及 Agent 原生验证模式等核心功能上取得了实质性进展，同时修复了 Redis 缓存层的关键数据覆盖 Bug。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues

1.  **[Bug] K8s Sandbox Redis 缓存数据异常覆盖风险** [#712](https://github.com/alibaba/ROCK/issues/712)
    *   **详情**：这是一个关键的数据一致性 Bug。当从 Redis 获取 Sandbox 信息发生异常时，代码未正确抛出错误而是返回 `None`，导致外层逻辑误用空值覆盖 Redis 中的原始有效数据。
    *   **影响**：直接威胁 Sandbox 状态管理的可靠性，需立即修复。

2.  **[Feature] Kata Runtime 支持 Docker-in-Docker (DinD)** [#724](https://github.com/alibaba/ROCK/issues/724)
    *   **详情**：旨在增强 Deployment 类别的功能，使 Kata Runtime 环境能够支持 Docker-in-Docker 模式。
    *   **意义**：这对于在隔离容器环境中构建镜像或运行需要 Docker 守护进程的 CI/CD 任务至关重要。

3.  **[Feature] Rock Agent 支持 Job 原生验证器** [#723](https://github.com/alibaba/ROCK/issues/723)
    *   **详情**：增强 SDK & API 能力，允许 Rock Agent 在提交作业时使用 Job 配置中的原生 Verifier 模式。
    *   **意义**：简化了强化学习训练中评估流程的集成复杂度。

4.  **[Feature] Sandbox 信息持久化至数据库** [#729](https://github.com/alibaba/ROCK/issues/729)
    *   **详情**：提议将 Sandbox 的元数据持久化存储到数据库，目前仅依赖内存或临时存储可能导致重启后丢失，此功能将提升系统的状态恢复能力。

## 4. 关键 PR 进展

1.  **[Merged] feat: rock agent support verifier native mode** [#722](https://github.com/alibaba/ROCK/pull/722)
    *   **关联**：Closes #723
    *   **进展**：已合并。标志着 ROCK SDK 在 Agent 提交作业的验证机制上更加灵活，支持原生模式。

2.  **[Open] fix: fix k8s sandbox info #712** [#713](https://github.com/alibaba/ROCK/pull/713)
    *   **关联**：Fixes #712
    *   **进展**：针对 Redis 数据覆盖 Bug 的修复 PR，目前处于 Open 状态，是保障系统稳定性的关键补丁。

3.  **[Open] Support persist sandbox metadata to database** [#730](https://github.com/alibaba/ROCK/pull/730)
    *   **关联**：Closes #729
    *   **进展**：实现了 Sandbox 元数据的数据库持久化功能，目前代码正在审核中。

4.  **[Closed/Draft] Feat/kata support dind 0331** [#732](https://github.com/alibaba/ROCK/pull/732)
    *   **关联**：Refs #724
    *   **进展**：虽然该 PR 已关闭（可能是由于迭代策略调整或合并入其他分支），但表明 Kata 支持 DinD 的功能正在密集开发中。

5.  **[Open] feat: 恢复CI请求触发工作流配置** [#728](https://github.com/alibaba/ROCK/pull/728)
    *   **关联**：Refs #727
    *   **进展**：恢复内部 CI 触发任务，旨在优化开发运维流程。

## 5. 为什么值得在当前 RL 生态继续关注

*   **工程化落地能力增强**：ROCK 并非仅停留在算法层面，而是深入解决 **RL 基础设施** 的痛点。今日关于 **Kata Runtime DinD** 的支持和 **Sandbox 元数据持久化** 的进展，显示出项目正在强化其在复杂生产环境（如 Kubernetes）下的容器隔离与状态管理能力，这对于大规模分布式 RL 训练至关重要。
*   **架构健壮性维护**：针对 Redis 缓存 Bug (#712) 的快速响应与修复 (#713)，体现了团队对系统 **数据一致性** 的严格把控。在 RL 训练中，环境状态的准确性是实验可复现的基础。
*   **工作流灵活性**：对 **Native Verifier** 的支持进一步解耦了训练与评估逻辑，为开发者提供了更定制化的 RL 工作流编排能力。

---
*数据来源: GitHub ROCK Repo (2026-04-02 Snapshot)*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-04-02)

## 1. 今日速览
过去 24 小时，Slime 仓库代码活跃度主要集中在 **工程优化** 与 **底层算力支持** 方向。虽然无新版本发布或新增 Issue，但有 3 个关键技术 PR 更新，涵盖 **NVFP4 量化训练支持**、**VLM SFT 脚本修复** 以及 **异步 Rollout 架构增强**。

---

## 2. 版本发布
*   **无新版本发布**。

---

## 3. 重点 Issues
*   **无新增或更新的 Issues**。
    *   社区反馈渠道相对平静，当前开发重心可能倾向于内部迭代及现有 PR 的合并。

---

## 4. 关键 PR 进展

### A. 底层算力：支持 NVFP4 RL 训练
*   **PR**: [#1505 [Feature] Support nvfp4 RL](https://github.com/THUDM/slime/pull/1505)
*   **作者**: fy1214
*   **进展**: 更新于 04-01 (WIP)。
*   **分析**: 该 PR 旨在为 Slime 的 RL 流程引入 **NVFP4 (NVIDIA 4-bit Floating Point)** 支持。这是针对 Blackwell 架构 GPU 的重要优化，有望在保持模型性能的同时大幅降低显存占用并提升吞吐量，是迈向大规模 RL 训练的关键基础设施更新。

### B. 架构优化：增强异步 Rollout 控制
*   **PR**: [#1781 Enhanced Off-Policy Async Rollout](https://github.com/THUDM/slime/pull/1781)
*   **作者**: huang3eng
*   **进展**: 更新于 04-01。
*   **分析**: 针对现有 `one_step_off` 和 `fully_async` 模式的痛点进行了重构。
    1.  **Staleness Control**: 引入版本控制，限制过期样本 的使用，提升训练稳定性。
    2.  **Partial Rollout**: 增加部分 Rollout 支持，提升长序列或复杂环境下的采样效率。

### C. Bug修复：VLM SFT 运行时错误
*   **PR**: [#1791 fix(geo3k-vlm-sft)](https://github.comTHUDM/slime/pull/1791)
*   **作者**: DongzhuoranZhou
*   **进展**: 创建于 04-01。
*   **分析**: 修复了 `run_geo3k_vlm_sft.sh` 脚本中的 `TypeError`。问题源于 `--apply-chat-template` 过早将 messages 列表转为字符串，导致后续 SFT rollout 模块预期不符。此修复保障了多模态 (VLM) SFT 流程的正常运行。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **前沿硬件适配**: 通过 [#1505] 对 NVFP4 的支持，表明该项目紧跟 NVIDIA 最新硬件特性，适合需要极致显存优化的研究者。
2.  **解决 Off-Policy 稳定性痛点**: PR [#1781] 直击异步 RL 中 "样本过期" 的核心难题，通过架构层面的 Staleness Control，试图平衡异步采样的效率与 On-policy 算法的稳定性，具有较高的工程参考价值。
3.  **多模态 RL 实战**: 从脚本修复可以看出项目正在实际运行 VLM (Visual Language Model) 的 SFT 和 RL 流程，是一个不仅关注算法本身，还关注全链路落地（SFT -> RL）的实战派框架。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 TRL (Transformer Reinforcement Learning) 开源项目 2026-04-02 的 RL 日报摘要。

---

# 📊 TRL 项目日报 (2026-04-02)

### 1. 今日速览
过去 24 小时内，TRL 项目维护节奏加快，共处理 **7 条 Issues** 和 **18 条 Pull Requests**。主要动向集中在 **多模态（VLM）兼容性修复** 和 **GRPOTrainer 的功能增强**。虽然无新版本发布，但 CI 流水线针对 `transformers` v5+ 和 DeepSpeed ZeRO-3 进行了大量适配与热修复，显示出项目正在积极跟进上游依赖的破坏性变更。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
今日的问题主要集中在多模态模型训练报错、正则表达式引发的死锁以及上游依赖变更导致的 CI 故障。

*   **[Bug] Gemma-3 微调报错缺少 `token_type_ids`**
    Issue #5032 指出，在使用 QLoRA 微调 Gemma-3 (4b+) 时触发 `ValueError`，提示模型输入需要 `token_type_ids`。这是一个阻碍性的多模态训练 Bug，已获得社区关注（👍 7）。
    🔗 [huggingface/trl Issue #5032](https://github.com/huggingface/trl/issues/5032)

*   **[Bug] Qwen3 正则表达式导致训练死锁**
    Issue #5415 曝光了一个严重问题：在使用 GRPOTrainer 配合 Qwen3 进行 Tool Calling 时，如果模型生成长截断的退化输出，`parse_response` 中的 `qwen3_schema` 正则会引发 **灾难性回溯**，导致训练无限期挂起。
    🔗 [huggingface/trl Issue #5415](https://github.com/huggingface/trl/issues/5415)

*   **[CI/Compatibility] Transformers 开发版破坏性更新**
    多个 Issue (#5428, #5429, #5425) 报告了 CI 在配合 `transformers` 开发版运行时失败，涉及 Qwen2-VL 的 KeyError 以及类型错误。这表明 TRL 正处于适配 Transformers 新版本（可能是 v5.x）的阵痛期。
    🔗 [huggingface/trl Issue #5428](https://github.com/huggingface/trl/issues/5428)

### 4. 关键 PR 进展
今日的 PR 动态显示了 TRL 向更高效的推理、更复杂的 Agent 工作流以及模型蒸馏方向演进的趋势。

*   **[Feature] 支持 DPO 长度归一化 Sigmoid Loss**
    PR #5406 引入了 Tulu-3 和 OLMo 模型使用的长度归一化 DPO Loss，旨在解决传统 DPO 中偏好长度偏差的问题。
    🔗 [huggingface/trl PR #5406](https://github.com/huggingface/trl/pull/5406)

*   **[Feature] GRPOTrainer 支持 Agent 循环终止与工具过滤**
    PR #5390 引入了 `stop_tool_names` 参数，允许 Agent 在调用特定工具后立即终止循环，这对复杂的推理任务至关重要。同时，PR #5398 增加了按样本过滤工具的能力，提升了训练的灵活性。
    🔗 [huggingface/trl PR #5390](https://github.com/huggingface/trl/pull/5390)
    🔗 [huggingface/trl PR #5398](https://github.com/huggingface/trl/pull/5398)

*   **[Feature] 引入 DistillationTrainer**
    PR #5407 添加了新的 `DistillationTrainer`，支持 On-policy 蒸馏、混合数据训练及 JSD Loss，并兼容 Teacher 服务器模式。这是 TRL 在后训练阶段的重要功能扩展。
    🔗 [huggingface/trl PR #5407](https://github.com/huggingface/trl/pull/5407)

*   **[Performance] vLLM 推理优化与异步 GRPO 内存改进**
    *   PR #5413 优化了 GRPOTrainer 在使用 vLLM 时的 Importance Sampling，跳过了 On-policy 场景下的冗余前向传播。
    *   PR #5349 为 AsyncGRPOTrainer 引入了分块 LM Head 计算，通过 Online LogSumExp 避免实例化巨大的 Logits 张量，显著降低显存占用。
    🔗 [huggingface/trl PR #5413](https://github.com/huggingface/trl/pull/5413)
    🔗 [huggingface/trl PR #5349](https://github.com/huggingface/trl/pull/5349)

*   **[Fix] 修复 vLLM 0.10.2 兼容性**
    PR #5423 解决了 vLLM 新版本中 `StructuredOutputsParams` 移除导致的 ImportError，确保了 Online DPO 的正常运行。
    🔗 [huggingface/trl PR #5423](https://github.com/huggingface/trl/pull/5423)

### 5. 为什么值得 RL 生态关注
TRL 目前正在从一个标准的 RLHF 工具库演变为 **高级 Agent 训练与推理一体化框架**。

1.  **解决 LLM Agent 稳定性痛点**：针对 Tool Calling 中的死锁（Regex Backtracking）和循环控制（Stop Tool Names）的修复与功能增加，直接击中了当前训练 Agent 的痛点。
2.  **显存与计算效率的极致压榨**：通过支持 Async GRPO 的 Chunked LM Head 和 vLLM 的冗余计算跳过，TRL 正在显著降低大规模 RL 训练的硬件门槛。
3.  **紧跟 SOTA 算法**：快速跟进 Tulu-3 的 Length-normalized Loss 和通用的 On-policy Distillation，使其始终保持在开源 LLM 训练技术的最前沿。

---
*分析师注：建议关注 Issue #5032 (Gemma-3) 的进展，多模态模型的 RLHF 训练目前在 TRL 中仍存在较多边缘 Bug。*

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL 日报：Tianshou 生态监测 (2026-04-02)

## 1. 今日速览
过去 24 小时内，Tianshou 仓库整体活跃度表现为**存量整理**。虽然无新增 Issue 或代码提交，但有 **4 个历史 PR** 集中在 4 月 1 日完成更新或关闭。这通常意味着项目维护者正在进行积压工作清理或为下一个版本的发布做准备。

- **Issues 更新**: 0 条
- **PR 更新**: 4 条 (均为状态变更/关闭)
- **新版本**: 无

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增 Issue。社区反馈渠道目前平稳。

## 4. 关键 PR 进展
本次更新的 PR 涵盖了从核心数据结构优化到具体算法 Bug 修复的多个方面，主要集中在提升代码鲁棒性和文档完善。

| PR 编号 | 状态 | 核心内容 | 分析师点评 |
| :--- | :--- | :--- | :--- |
| **[#110](thu-ml/tianshou/pull/110)** | CLOSED | **Batch 核心重构** <br> 修改 `Batch.empty` 为原地填充，增加 `copy` 选项。 | 这是一个早期的底层架构优化 PR。引入 `copy` 选项对于控制内存开销和对象引用至关重要，关闭此 PR 意味着相关功能已合并或被替代。 |
| **[#1009](thu-ml/tianshou/pull/1009)** | CLOSED | **文档修复** <br> 修复 Trainer 功能相关的 Notebooks。 | 改善了教程的可用性，确保高层 API 文档与代码实现的一致性。 |
| **[#1061](thu-ml/tianshou/pull/1061)** | CLOSED | **功能修复** <br> 修复高层 API 中 `watch` 环境与 `obs_rms` (观测归一化) 的兼容性。 | 修复了在使用观测归一化时渲染/测试环境可能出现的错误，对实际部署和演示非常重要。 |
| **[#995](thu-ml/tianshou/pull/995)** | CLOSED | **算法 Bug 修复** <br> 修复 Discrete BCQ 中的 `np.inf` 与 Torch 张量不兼容问题。 | 解决了离线强化学习算法 Discrete BCQ 中的计算图断开问题，确保梯度计算的正确性。 |

## 5. 为什么 Tianshou 值得继续关注？

尽管今日无新代码提交，但从关闭的 PR 类型（底层架构、高层 API、离线 RL 修复）可以看出 Tianshou 在 RL 生态中的独特价值：

1.  **底层掌控力强**：如 PR #110 所示，Tianshou 对 `Batch` 数据结构的精细控制（原地操作、Copy 选项）使其在处理大规模 Replay Buffer 时具有显著的性能优势，优于许多基于简单 Dict 的实现。
2.  **架构现代化**：项目正在积极维护其 **High-level API**（如 PR #1061），这降低了用户使用复杂技巧（如 Observation Running Mean Std）的心智负担，符合当前 RL 库向“易用性”发展的趋势。
3.  **离线 RL (Offline RL) 支持坚实**：PR #995 对 Discrete BCQ 的修复表明项目对前沿算法（尤其是离线强化学习）的维护并未停滞，是研究 Offline RL 的可靠基线库之一。

---
*数据来源: GitHub Archive | 分析师: RL Ecosystem Watcher*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 项目日报 (2026-04-02)

这里是 **OpenRLHF** 项目分析师为您整理的 2026年4月2日 RL 生态日报摘要。

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库活跃度适中，主要集中在**功能增强**与**训练安全性**上。
- **Issues 更新**：1 条（涉及 Agent 沙箱执行安全）
- **PR 更新**：3 条（涉及预训练支持、数据加载优化、鲁棒性修复）
- **Releases**：无

---

## 2. 版本发布
**无新版本发布**。目前社区贡献主要集中在主分支的功能迭代与稳定性维护。

---

## 3. 重点 Issues
今日出现了一个关于 **Agent 安全性** 的高质量 Issue，直击多轮对话训练中的痛点。

*   **#1210 [OPEN] 多轮 Agent 滚动输出的沙盒化执行**
    *   **链接**: [OpenRLHF/OpenRLHF Issue #1210](https://github.com/OpenRLHF/OpenRLHF/issues/1210)
    *   **核心内容**: 作者指出了当前 OpenRLHF 在使用 `--agent_func_path` 进行大规模多轮 Agent 训练时的安全隐患。目前 LLM 生成的动作（如工具调用、代码执行）拥有主机的完整权限（文件系统、网络、环境变量），单次恶意的 Rollout 可能污染共享状态或导致宿主机崩溃。
    *   **分析师点评**: 随着 Agent 训练需求的增加，**沙箱隔离** 已成为刚需。该 Issue 建议引入沙箱机制以隔离执行环境，这对于生产环境下的 RL 训练集群至关重要。

---

## 4. 关键 PR 进展
今日共有 3 个功能型 PR，均由贡献者 **konghw-git** 提交，旨在扩展框架的灵活性与稳定性。

*   **#1209 [OPEN] feat: 新增 `--from_scratch` 选项以支持随机权重初始化**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1209](https://github.com/OpenRLHF/OpenRLHF/pull/1209)
    *   **摘要**: 打破了 OpenRLHF 仅支持 "Pre-trained -> Fine-tuning" 的范式。该 PR 允许在 SFT 流程中通过 `--from_scratch` 参数直接从模型配置初始化随机权重。
    *   **意义**: 这意味着 OpenRLHF 的 SFT 流程现在可以直接用于 **从头预训练** 模型，极大地扩展了其在科研场景下的适用范围。

*   **#1207 [OPEN] feat: 新增 `--dataloader_num_workers` 支持多进程数据加载**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1207](https://github.com/OpenRLHF/OpenRLHF/pull/1207)
    *   **摘要**: 为 SFT, RM, DPO, PPO 全流程添加了 `--dataloader_num_workers` 参数。
    *   **意义**: 默认为 0（保持兼容性），设置大于 0 时启用多进程数据加载及 `persistent_workers`。这对于受限于 IO 瓶颈的训练任务是一个关键的性能优化点。

*   **#1208 [OPEN] fix: 检查点目录无效时的优雅降级**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1208](https://github.com/OpenRLHF/OpenRLHF/pull/1208)
    *   **摘要**: 修复了开启 `--load_checkpoint` 但目录为空或损坏时程序崩溃的问题。
    *   **意义**: 改为记录警告并从头开始训练，提高了分布式训练脚本的容错性，避免了非预期的冷启动中断。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
基于今日的数据动态，OpenRLHF 展示了其作为顶级 RLHF 框架的演进方向：

1.  **从 "微调" 迈向 "全栈"**: PR #1209 表明项目正在突破单纯的 Alignment 定位，向支持 Pre-training 探索，成为更通用的训练底座。
2.  **关注 Agent 基础设施**: Issue #1210 揭示了社区正在解决 LLM 作为 Agent 时的 "动作执行" 安全问题，这是当前 LLM+RL 落地最难啃的骨头之一。
3.  **工程化细节完善**: 无论是对 DataLoader 的 IO 优化 (#1207) 还是 Checkpoint 的鲁棒性处理 (#1208)，都说明该项目在生产级可用性上持续投入。

OpenRLHF 正在从一个单纯的 PPO/SFT 实现库，进化为一个支持**全流程、高安全、高性能**的大模型训练框架。

---
*以上数据截止至 2026-04-02 00:00 UTC*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 **veRL** (github.com/verl-project/verl) 2026-04-02 的 RL 日报摘要。

### 1. 今日速览
项目活跃度保持高位，过去 24 小时内 PR 更新达 36 条，Issue 更新 14 条。社区重点正从单纯的 bug 修复转向 **Agent 抽象层设计**、**Diffusion 模型 RL 支持 (FlowGRPO)** 以及 **异构硬件（NPU/AMD）的适配**。此外，项目启动了从 `volcengine/verl` 到 `verl-project/verl` 的全面迁移工作，并发布了 26Q2 的技术路线图。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **[RFC] Agent 抽象与轨迹网关** (#5790): 提出了新的 Agent RL 管线架构，包含 `AgentFramework` 和 `Trajectory Gateway`，旨在解耦 Agent 生命周期与奖励计算，获得社区 +10 👍 支持。
    *   链接: [verl-project/verl Issue #5790](https://github.com/verl-project/verl/issues/5790)
*   **[Roadmap] 26Q2 规划** (#5836): 公布了第二季度的技术路线，重点包括 Megatron 动态 Context Parallel (CP)、FSDP 对 VLM 的支持、低精度训练（MXFP8/NVFP4）以及 Qwen 3.5 LoRA 适配。
    *   链接: [verl-project/verl Issue #5836](https://github.com/verl-project/verl/issues/5836)
*   **[Bug] Megatron 长上下文 OOM** (#5840): 用户在使用 Qwen35-35B 进行 62k 上下文 GRPO 训练时遇到显存溢出（OOM），引发对长文本训练稳定性的讨论。
    *   链接: [verl-project/verl Issue #5840](https://github.com/verl-project/verl/issues/5840)
*   **[Feature] 代码库迁移与 UV 包管理** (#5852, #5853): 社区提议将残留的 `volcengine` 路径引用全部更新为 `verl-project`，并建议采用 `uv` 替代 `pip` 以优化环境管理和依赖解析速度。
    *   链接: [verl-project/verl Issue #5852](https://github.com/verl-project/verl/issues/5852)
    *   链接: [verl-project/verl Issue #5853](https://github.com/verl-project/verl/issues/5853)

### 4. 关键 PR 进展
*   **[Feature] Diffusion 模型 RL 支持 (FlowGRPO)** (#5802): 集成 Diffusers + FSDP 引擎，正式支持 Diffusion 模型的强化学习训练（FlowGRPO 算法）。
    *   链接: [verl-project/verl PR #5802](https://github.com/verl-project/verl/pull/5802)
*   **[Perf] 训练加速优化** (#5838): 通过跳过零优势（zero-advantage）响应的训练步骤来加速 RL 流程，据称在高准确率场景下可减少约 75% 的无效计算。
    *   链接: [verl-project/verl PR #5838](https://github.com/verl-project/verl/pull/5838)
*   **[Integration] NVIDIA NeMo Gym** (#5833): 增加 NVIDIA NeMo Gym RL 环境支持，扩展了多轮对话、工具调用及自定义 Agent 的训练能力。
    *   链接: [verl-project/verl PR #5833](https://github.com/verl-project/verl/pull/5833)
*   **[CI/Perf] 依赖与环境修复** (#5724): 修复 Transformers 升级至 5.3.0 及 vLLM 0.18.0 带来的兼容性问题，并解决 Megatron 依赖循环。
    *   链接: [verl-project/verl PR #5724](https://github.com/verl-project/verl/pull/5724)
*   **[Data] 多模态数据传输优化** (#5780): 引入 TransferQueue (TQ) 实现 AgentLoop 与 vLLM 服务器间的零拷贝图像数据传输，避免大尺寸 PIL 图像通过 Ray RPC 序列化的开销。
    *   链接: [verl-project/verl PR #5780](https://github.com/verl-project/verl/pull/5780)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
veRL 正在从一个单纯的 LLM PPO 训练框架演进为 **全模态、全架构的通用 RL 基础设施**。
1.  **多模态与 Agent 原生支持**：不同于传统框架，veRL 正在通过 RFC #5790 和 PR #5780 深度整合 Agent 交互和多模态数据流（如 Qwen3-VL 工具调用），而非仅视其为简单输入。
2.  **跨引擎融合**：同时支持 vLLM, SGLang, Megatron, PyTorch FSDP 以及即将到来的 **Diffusers**，打通了推理与训练的边界，使得复杂模型（如 Diffusion + LLM）的 RLHF 成为可能。
3.  **极致性能优化**：从底层的零拷贝数据传输到上层的 Zero-advantage 跳过策略，项目在大规模分布式训练（如 H20/A100 集群）的吞吐量优化上处于领先地位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 项目动态 (2026-04-02)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库无明显 Issues 增量或版本发布，但 **代码提交活跃度极高**，主要集中在 **OLMo-core 架构迁移**、**GRPO 算法重构** 以及 **RL 环境** 的扩展。项目正处于深度代码清理与基础设施升级阶段，特别是对 PPO 和 SFT 流程的原生支持进行了重大更新。

---

## 2. 版本发布
**无**。

---

## 3. 重点 Issues
**无新增**。

---

## 4. 关键 PR 进展

本次更新包含 3 个已合并（CLOSED）的重要维护性 PR 和 6 个活跃（OPEN）的功能开发 PR，显示出团队正在重构底层训练架构。

### A. 架构迁移与清理
*   **[CLOSED] 引入 OLMo-core 原生 SFT 实现**
    *   **链接**: [PR #1579](https://github.com/allenai/open-instruct/pull/1579)
    *   **摘要**: 新增 `olmo_core_finetune.py`，使用 OLMo-core 原生基础设施替代旧有 SFT 流程。支持 HFDataLoader、packing collator 及临时检查点机制，并提供了单卡和多节点调试脚本。这标志着项目正在从纯 HF Transformers 依赖向 OLMo 原生技术栈迁移。
*   **[CLOSED] 提取共享 OLMo-core 配置类**
    *   **链接**: [PR #1576](https://github.com/allenai/open-instruct/pull/1576)
    *   **摘要**: 将 `ExperimentConfig`、`ModelConfig` 等核心数据类及辅助函数抽象至 `olmo_core_utils.py`，为统一 OLMo 架构下的不同训练任务（SFT/RL）做代码准备。
*   **[CLOSED] Flash Attention 4 支持与优先级配置**
    *   **链接**: [PR #1580](https://github.com/allenai/open-instruct/pull/1580)
    *   **摘要**: 技术前瞻性更新，安装并配置 Flash Attention 4，设定注意力机制回退顺序为 `fa4 > fa3 > fa2 > sdpa`。

### B. 强化学习算法优化
*   **[OPEN] GRPO 重构：内联工具与配置重命名**
    *   **链接**: [PR #1578](https://github.com/allenai/open-instruct/pull/1578)
    *   **摘要**: 对 GRPO (Group Relative Policy Optimization) 代码进行深度重构。将 `mask_logprobs`、`compute_tis_weights` 等关键函数从 `grpo_utils.py` 内联至 `grpo_fast.py` 以减少开销，并将配置类重命名为 `GRPOExperimentConfig` 以增强语义化。
*   **[OPEN] 增加 PPO 支持及 Value Model**
    *   **链接**: [PR #1462](https://github.com/allenai/open-instruct/pull/1462)
    *   **摘要**: 在 `grpo_fast.py` 中引入标准 PPO 训练能力。支持使用 Value Model 进行 GAE 优势估计，而非仅依赖 GRPO 的组归一化奖励。包含 `use_value_model`、`vf_clip_range` 等完整 PPO 超参配置。
*   **[OPEN] 接入 Evolving Rubric 配置**
    *   **链接**: [PR #1581](https://github.com/allenai/open-instruct/pull/1581)
    *   **摘要**: 将此前仅存在于配置中的 "evolving rubric"（动态评估标准）标志接入 GRPO 训练循环，支持在训练过程中动态调整奖励模型或评估规则。

### C. 环境与智能体
*   **[OPEN] 新增 SWERLSandboxEnv**
    *   **链接**: [PR #1492](https://github.com/allenai/open-instruct/pull/1492)
    *   **摘要**: 扩展 `GenericSandboxEnv`，引入 `SWERLSandboxEnv`。该环境允许在每个样本的 Docker 容器中执行基于 `submit` 工具的测试套件，专为高隔离性、基于执行反馈的软件工程 RL 任务设计。

---

## 5. 为什么值得 RL 生态持续关注

1.  **从 GRPO 向 PPO 的算法回补**：虽然 GRPO (如 DeepSeekMath 所用) 因无需 Value Model 而受欢迎，但 Open Instruct 正在通过 [PR #1462](https://github.com/allenai/open-instruct/pull/1462) 重新引入带 Value Model 的 PPO，结合了 GRPO 的代码库优势与 PPO 的理论稳定性，提供了更灵活的优化器选择。
2.  **原生 OLMo 生态整合**：通过 [PR #1579](https://github.com/allenai/open-instruct/pull/1579) 和 [PR #1576](https://github.com/allenai/open-instruct/pull/1576)，项目正在脱离对通用 HF Trainer 的依赖，转向 AllenAI 自研的 OLMo-core 架构。这意味着未来的训练流程将更深度地针对 OLMo 模型架构进行底层优化（如 Flash Attention 4 的抢先支持）。
3.  **面向 Agent 的工程化落地**：[PR #1492](https://github.com/allenai/open-instruct/pull/1492) 显示了项目在 SWE-bench 等 Agent 任务上的布局，通过 Docker 沙箱实现了高安全性的环境交互，这是目前 LLM 用于代码生成和自动化运维的关键基础设施。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 项目动态 (2026-04-02)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库活跃度主要集中在问题排查与功能需求讨论。虽然无代码合并或版本发布，但社区针对 **SAC 算法收敛性**、**Checkpoint 训练控制** 及 **推理阶段性能差异** 展开了深入探讨。

- **Issues 更新**: 3 条（主要集中在算法效能与训练逻辑）
- **PR 更新**: 0 条
- **新版本**: 无

---

## 2. 版本发布
*   **无新版本发布**。

---

## 3. 重点 Issues

### 🔴 [算法效能] SAC 算法在复杂环境下收敛存疑
*   **Issue**: [#341 I think something is not OK with SAC algo](https://github.com/Denys88/rl_games/issues/341)
*   **详情**: 用户报告在无人机飞行模拟环境（仅通过电机控制）中，`rl_games` 实现的 SAC 算法无法复现 SB3 (Stable Baselines3) 的收敛效果。在相同的迭代次数（1m iterations）下，SB3 能够正常工作，而 `rl_games` 几乎无进展。
*   **社区动态**: 该贴热度较高（26 条评论），正在深入排查是否存在实现层面的缺陷或超参配置问题。

### 🟠 [功能请求] 缺乏独立的训练轮次限制参数
*   **Issue**: [#345 Missing setting which can restrict amount of iterations per training](https://github.com/Denys88/rl_games/issues/341)
*   **详情**: 作者指出当前的 `max_epoch` 和 `max_frames` 在加载 Checkpoint 恢复训练时不会重置，导致无法精确控制“本次训练会话”的迭代量。
*   **诉求**: 建议增加独立的 `n_epochs` 参数，以限制单次训练执行的迭代次数，便于分阶段训练控制。

### 🟡 [行为异常] 推理阶段 Reward 低于 Checkpoint 记录值
*   **Issue**: [#344 PPO in play stage has lower reward value...](https://github.com/Denys88/rl_games/issues/344)
*   **详情**: 用户发现 PPO 模型在加载 Checkpoint 进入 Play/Inference 阶段时，获得的 Reward 显著低于该 Checkpoint 保存时的训练指标。
*   **技术点**: 可能涉及 Normalization 统计量未正确加载、Dropout 行为差异或确定性策略设置问题。

---

## 4. 关键 PR 进展
*   **无**。过去 24 小时内无 PR 更新。

---

## 5. 为什么值得持续关注

尽管 `rl_games` 目前处于维护模式（近期 PR 较少），但它仍然是 RL 生态中不可或缺的高性能基线库，特别是对于 **Isaac Gym** 和大规模并行环境用户而言。

1.  **高性能基线**: 相比 SB3，`rl_games` 针对大规模并行模拟（如数万并行环境）进行了极致优化，常作为 Legged Gym 等足式机器人项目的底层核心。
2.  **算法多样性**: 支持 PPO, SAC, DQN, DDPG 等多种主流算法，且统一了接口。
3.  **当前痛点**: 今日的 Issues 反映了用户正在将其应用于更精细的复杂控制任务（如 Drone），并试图解决工业级部署中常见的断点续训与推理一致性痛点。对这些问题的追踪有助于理解高性能 RL 训练的工程细节。

---
*数据来源: GitHub (Denys88/rl_games)*

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报：Gymnasium 生态追踪 (2026-04-02)

**数据源**: github.com/Farama-Foundation/Gymnasium

## 1. 今日速览
Gymnasium 仓库在过去 24 小时内保持低活跃度运行。无新增 Issues，无新版本发布。主要动态集中在维护性质的代码合并，共有 2 个 PR 在昨日更新后关闭，显示项目正处于稳定的维护迭代期。

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 重点 Issues
过去 24 小时内**无新增或更新 Issues**。

## 4. 关键 PR 进展
共有 2 个 PR 于 4 月 1 日更新并关闭，主要集中在环境功能增强与 API 类型修复。

*   **[CLOSED] 增强 CartPole 重置信息 (PR #1543)**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1543](https://github.com/Farama-Foundation/Gymnasium/pull/1543)
    *   **作者**: aashwinraj
    *   **摘要**: 针对经典环境 `CartPole`，该 PR 修改了 `env.reset()` 方法的返回值。此前 `info` 字典通常为空，此次更新引入了 `reset_bounds` 信息，丰富了环境初始化时的元数据输出，有助于精细化实验记录。
    *   **状态**: 已关闭（推测已合并）。

*   **[CLOSED] 修复 TransformObservation 初始化参数 (PR #1552)**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1552](https://github.com/Farama-Foundation/Gymnasium/pull/1552)
    *   **作者**: solismortis
    *   **摘要**: 这是一个针对 `TransformObservation` Wrapper 的 Bug 修复。原代码中 `observation_space` 参数的类型注解使用了管道符 `|` 而非默认值赋值 `=`，导致原本设计为“可选”的参数变成了“必填”，破坏了向后兼容性。该 PR 修正了这一语法错误。
    *   **状态**: 已关闭（推测已合并）。

## 5. 为什么关注 Gymnasium?
尽管今日更新较少，Gymnasium 依然是 RL 生态的基石：
1.  **API 标准化**: 它是目前唯一活跃维护的 OpenAI Gym 继承者，定义了现代 RL 算法与环境交互的标准接口（`reset`, `step`, `render`）。
2.  **Wrapper 生态**: 如 PR #1552 所示，项目正在持续打磨 Wrapper 机制的鲁棒性，这对复杂的状态预处理至关重要。
3.  **兼容性与基准**: 几乎所有主流 RL 库（Stable-Baselines3, CleanRL 等）均依赖 Gymnasium 环境，它是验证新算法基准的通用语言。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 更新摘要
**日期：** 2026-04-02
**数据源：** github.com/DLR-RM/stable-baselines3

## 1. 今日速览
Stable Baselines3 今日发布了重要的 **v2.8.0** 版本更新，主要涉及 Python 版本支持的迁移（放弃 3.9，支持 3.13）及多项底层依赖和代码规范的调整。社区方面，有一个关于引入 `torch.compile` 性能优化的 PR 正在开放讨论中。

## 2. 版本发布
### **v2.8.0 — Python 生态迁移与维护性更新**
本次更新是一个包含破坏性变更的常规版本，标志着项目正式淘汰旧版 Python 支持。

*   **破坏性变更:**
    *   **放弃 Python 3.9**：最低支持版本提升至 Python >= 3.10。
    *   **代码规范**：所有 `zip(...)` 调用强制设置 `strict=True`，以防止迭代长度不匹配导致的隐蔽 Bug。
    *   **依赖替换**：扩展安装从 `pygame` 切换至 `pygame-ce` (Community Edition)。
*   **新特性:**
    *   **支持 Python 3.13**：紧跟最新 Python 版本。
    *   RL Zoo 中为未列出环境添加了默认超参数。
    *   文档格式优化。
*   **修复:** 修复了 MaskablePPO 的保存与加载问题（Release note 显示截断，具体涉及保存逻辑）。

> **链接:** [Release v2.8.0](https://github.com/DLR-RM/stable-baselines3/releases/tag/v2.8.0)

## 3. 重点 Issues
过去 24 小时内无新创建或更新的 Issues。

## 4. 关键 PR 进展
今日共有 3 个 PR 更新，其中包含 1 个功能性 PR 和 2 个维护性 PR。

*   **[#2234] [OPEN] 添加 torch.compile 示例**
    *   **作者:** sdace9719
    *   **概述:** 该 PR 旨在引入 `torch.compile` 的使用示例。随着 PyTorch 2.x 的普及，利用 `torch.compile` 进行图编译优化是提升 RL 算法吞吐量的重要手段。该 PR 试图解决 Issue #156，具有显著的性能优化潜力。
    *   **链接:** [PR #2234](https://github.com/DLR-RM/stable-baselines3/pull/2234)

*   **[#2235] [CLOSED] Release v2.8.0**
    *   **作者:** araffin (Core Maintainer)
    *   **概述:** 合并了 v2.8.0 版本的发布更新。
    *   **链接:** [PR #2235](https://github.com/DLR-RM/stable-baselines3/pull/2235)

*   **[#2233] [CLOSED] 修复 `is_image_space` 文档**
    *   **作者:** knQzx
    *   **概述:** 针对 `frame-stacked` 观察空间与 `is_image_space` 的兼容性问题补充了文档说明。Maintainer 注意到该 PR 模板未填写且疑似 LLM 生成，但合并了其中的核心修正（Fixes #2090）。
    *   **链接:** [PR #2233](https://github.com/DLR-RM/stable-baselines3/pull/2233)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **严格的工程标准与现代化：** v2.8.0 强制 `zip(strict=True)` 和迁移到 `pygame-ce` 的举动，展示了项目对代码健壮性和现代依赖管理的极高要求。这是 SB3 能成为工业界和学术界“标准”基线的重要原因。
2.  **紧跟 PyTorch 生态：** PR #2234 对 `torch.compile` 的探索表明，SB3 正在积极寻求 PyTorch 2.x 带来的性能红利。对于需要大规模训练的 RL 任务，这种底层优化的集成非常关键。
3.  **活跃的维护周期：** 尽管是成熟的库，依然保持着对最新 Python 版本（3.13）的快速响应，确保了其在未来几年的兼容性和可用性。

</details>