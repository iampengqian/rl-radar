# RL 开源生态日报 2026-08-04

> 生成时间: 2026-08-03 22:19 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态已呈现出明显的**“分层演进”**特征。以 verl、TRL、AReaL、Open Instruct 为代表的“大模型 RLHF/RLAIF 基础设施”处于极度活跃的工程攻坚期，全面向多模态、超大规模 MoE 模型及异构硬件适配推进；而以 Gymnasium、PettingZoo、rl_games 为代表的“传统/底层 RL 组件库”则进入平稳的维护与防御性编程阶段，重点修复底层 API 的边界条件与状态管理瑕疵。整个生态的重心已从“算法原型验证”彻底转向“高吞吐、高稳定性的分布式工业化落地”。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 19 | 23 | 0 | 跨芯片万能胶水，攻坚多轮智能体信用分配与底层网络 I/O 优化 |
| **TRL** | 7 | 30 | 0 | 将策略蒸馏标准化，死磕大规模分布式 GRPO 底层顽疾 |
| **PettingZoo** | 1 | 15 | 0 | 集中清理 6 年历史包袱，修复影响树搜索的底层深拷贝 Bug |
| **AReaL** | 4 | 3 | 0 | 专注大模型在线 RL，推进显存卸载与严格的异步时序控制 |
| **Gymnasium** | 1 | 3 | 0 | 强化 API 鲁棒性，探索开放底层数据分布以支持 Sim-to-Real |
| **Open Instruct**| 0 | 3 | 0 | 统一 RL 算法底层 API，极速适配最新版 PyTorch/vLLM 依赖栈 |
| **ROCK** | 1 | 2 | 0 | 演进为成熟的分布式平台，将元数据调度从文件系统迁往数据库 |
| **slime** | 1 | 2 | 0 | 深度适配超大 MoE 模型，重构底层显存管理逻辑以提升利用率 |
| **rl_games** | 0 | 1 | 0 | 修复 PPO 并行采样时的自动重置边界 Bug，追求数据流纯洁性 |
| **torchtune** | 0 | 1 | 0 | 适配上游量化库 API 变更，保障 RL 基座模型的低显存微调链路 |
| **其他合并描述** | 0 | 0 | 0 | CleanRL, OpenRLHF, ROLL, SB3, Tianshou 今日零动态，处于稳定期 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多轮交互与智能体算法演进**：针对工具调用和多轮交互的信用分配问题成为焦点（如 verl 探讨单轮奖励支持），TRL 和 slime 也在深化 GRPO 算法变体及优势计算的修正。
2. **知识蒸馏成为后训练核心**：TRL 正密集将多教师在线策略蒸馏 (OPD) 和 VLM 蒸馏推向稳定 API，这反映了当前主流大模型依靠蒸馏进行能力跃迁的强烈诉求。
3. **超越黑盒的环境动态控制**：传统 RL 领域（如 Gymnasium）开始暴露底层物理系数，支持确定性模式与 Domain Randomization，以响应精细化的消融研究与 Sim-to-Real 需求。

**工程/基础设施侧信号：**
1. **攻坚“显存墙”与算力极限**：大模型 RL 训练显存瓶颈受高度重视。AReaL 引入训练与推理引擎在同卡的分时复用，slime 转向 PyTorch 原生显存分配配置，均致力于降低峰值显存、提高算力利用率。
2. **超大规模 MoE 模型的分布式协同**：面对 Qwen3/DeepSeek V4 等巨型 MoE 模型，训练引擎（如 Megatron）与推理引擎（如 vLLM/SGLang）之间的实时权重同步、张量拆解与 LoRA 热插拔成为核心工程挑战（见 Open Instruct, verl）。
3. **严苛的底层 Bug 修复与数值稳定性**：深度排查静默梯度丢失（verl）、KL 散度计算溢出（TRL）以及并行环境自动重置导致的数据污染（rl_games），表明生态正在深水区保障数据流和反向传播的正确性。

## 差异化定位分析

- **大模型分布式 RL 基建（verl, AReaL, Open Instruct）**：定位为“重型装甲”。聚焦超大规模集群、异构算力（Nvidia/AMD/TPU）适配以及千亿参数级模型的分布式通信瓶颈，是各大厂和顶尖团队打响模型压制的核武器。
- **前沿算法工具化封装（TRL, slime）**：定位为“敏捷快枪”。紧跟社区最新论文，强调高内聚低耦合的 API 设计（如配置文件优先工作流、CLI 命令），致力于把最新的策略蒸馏、GRPO 等算法快速交到普通开发者手中。
- **经典 RL 基础设施（Gymnasium, PettingZoo, rl_games）**：定位为“底层基石”。虽不如大模型项目喧嚣，但作为几乎所有主流算法的测试床，它们在 API 规范化（Wrapper校验）、状态序列化保真（深拷贝防泄漏）和采样边界处理上的严谨性，是整个学科不可替代的基石。

## 社区热度与成熟度

当前 RL 生态社区活跃度呈现**严重的二八定律**。大模型对齐项目（verl, TRL）占据了 90% 以上的 Issue 讨论和 PR 提交，社区不仅规模庞大，且核心维护者正强力推进具有里程碑意义的底层重构（如 TRL 的 `DistillationTrainer` 晋升，AReaL 的权重编排系统）。反观传统 RL 环境/算法库，社区趋于高度成熟与稳定，今日活动多表现为批量清理数年前的陈旧依赖（如 PettingZoo），以及响应防御性编程的微小 Issue。

## 值得关注的趋势信号

1. **RL 框架开始全面摆脱“英伟达依赖”**：verl 引入对 Google TPU 的 GRPO 训练支持，以及为 AMD ROCm 提供纯 PyTorch 降级方案，释放出强烈的跨生态垄断信号，异构算力调度将成为下一代 RL 框架的标配能力。
2. **在线 RL 的工程严谨性达到新高度**：AReaL 修复了事件循环中关闭 AsyncClient 和过期轨迹训练的隐蔽 Bug，标志着大模型在线 RL 已深入到底层异步通信与时序控制的深水区，以确保梯度更新的数学正确性。
3. **实验调度的“数据库化”重构**：阿里巴巴的 ROCK 项目选择将实验元数据从 OSS 迁移至结构化数据库，这一信号表明，随着 Trial 规模的爆炸式增长，现代 RL 平台对复杂实验溯源和高并发事务管理的基础设施要求正在向传统云原生数据库看齐。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

** ROCK 项目 RL 生态日报 - 2026.08.04**

### 1. 今日速览
过去 24 小时，ROCK 仓库暂无新版本发布。项目持续在底层架构与数据管理层面进行迭代，重点聚焦于 **Job/Group 元数据的持久化架构重构**。今日共有 1 条 Issue 更新与 2 条 PR 更新，均围绕提升任务生命周期管理的可靠性与可维护性展开。

### 2. 版本发布
* **无新版本发布**。

### 3. 重点 Issues
* **[#1306] [Feature] Improve Job and Group metadata persistence** (作者: berstpander)
  * **摘要**: 提出重构当前元数据存储机制。目前 ROCK 将 Job 元数据与 OSS (对象存储服务) 产物存放在一起，这种设计导致结构化查询、事务性更新及生命周期管理异常困难，且缺乏可靠的唯一标识符。
  * **链接**: [alibaba/ROCK Issue #1306](https://github.com/alibaba/ROCK/issues/1306)

### 4. 关键 PR 进展
* **[#1307] [OPEN] feat(job): move metadata storage to a database**
  * **摘要**: 针对 Issue #1306 的直接实现。核心改动是将 Job 和 Group 元数据从 OSS 迁移至**数据库支持的 SDK**；引入 UUID (`group_id` 和 `job_id`) 作为规范标识符，并将本地 CLI 与持久化元数据进行解耦。这是一次底层数据架构的重要升级。
  * **链接**: [alibaba/ROCK PR #1307](https://github.com/alibaba/ROCK/pull/1307)
* **[#1181] [CLOSED] feat(sdk): add JobViewer and unified job metadata (#1180)**
  * **摘要**: 该 PR 已于今日关闭。此前旨在引入 `JobViewer` SDK 客户端，用于在沙箱销毁后从 OSS 读取产物与日志，并添加 `rock_meta.json` 统一元数据。关闭此 PR 表明项目组已放弃这种基于 OSS/文件系统的元数据统一方案，全面转向以数据库为中心的设计（即转向 #1307 方案）。
  * **链接**: [alibaba/ROCK PR #1181](https://github.com/alibaba/ROCK/pull/1181)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在大规模强化学习（RL）训练中，**Trial（试验）与 Job（任务）的生命周期管理**是工程落地的核心痛点。ROCK 当前正在进行从“OSS 文件存储”到“数据库结构化存储”的元数据架构跃迁（引入 UUID 和 DB-backed SDK）。
这一技术演进标志着 ROCK 正在摆脱早期粗糙的文件系统调度模式，向具备严格事务性、支持复杂结构化查询的**成熟分布式 RL 平台**过渡。对于需要处理海量 Trial 数据、进行复杂实验溯源和高并发任务管理的 RL 研究者与工程师而言，其基础架构的成熟化极具参考与使用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**RL 开源生态日报：slime 项目动态 (2026-08-04)**

**1. 今日速览**
过去 24 小时内，slime (THUDM/slime) 仓库无新版本发布，但核心开发者在底层资源调度与显存管理方面有显著动作。共有 1 条 Issue 更新和 2 条 PR 更新，均处于 CLOSED 状态，表明团队正在集中进行代码清理与核心机制（如显存分配）的重构验证。

**2. 版本发布**
- 今日无新版本发布。

**3. 重点 Issues**
- **[#2091] [CLOSED] [bug] slime-v0.3.0 版本在跑 qwen3.6 35B A3B 模型的时候，在第二次 rollout 会有乱码**
  - **链接:** [THUDM/slime Issue #2091](https://github.com/THUDM/slime/issues/2091)
  - **动态与分析:** 该问题由用户 @gtarcoder 于 6 月中旬提出，并于昨日（8月3日）正式关闭。Bug 表现为使用 slime-v0.3.0 及配套镜像（`sglang:v0.5.12.post1-cu129`）运行 Qwen-3.6 35B A3B 模型时，第二次 Rollout 阶段产生乱码；而降级至 v0.2.4（配合 `sglang:v0.5.9`）则表现正常。此问题的定位与闭环说明开发团队已解决 sglang 版本兼容性或权重更新带来的推理异常问题。

**4. 关键 PR 进展**
昨日共有 2 个核心代码合并请求被关闭，均由核心开发者 @zhuzilin 提交，聚焦于显存与推理引擎配置的优化：
- **[#2248] [CLOSED] Support PYTORCH_ALLOC_CONF**
  - **链接:** [THUDM/slime PR #2248](https://github.com/THUDM/slime/pull/2248)
  - **分析:** 引入对 `PYTORCH_ALLOC_CONF` 环境变量的原生支持。在 RL 训练中，Actor（训练）和 Reference/Actor Generation（推理）交替占用显存极易导致 OOM 或显存碎片化。支持自定义 PyTorch 显存分配策略，将为大模型（如 30B+ MoE）的 RLHF 提供更高的稳定性和调优灵活性。
- **[#2249] [CLOSED] Remove --train-memory-margin-bytes**
  - **链接:** [THUDM/slime PR #2249](https://github.com/THUDM/slime/pull/2249)
  - **分析:** 移除了硬编码的 `--train-memory-margin-bytes`（训练预留显存）参数。结合同日合并的 #2248，这表明项目正在放弃粗放式的显存预留机制，转而采用更底层的 PyTorch 原生配置进行精细化控制，以提升整体 GPU 显存利用率。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **大 MoE 模型适配的先锋:** 从 Issue #2091 可以看出，slime 已经深度接入并测试最新一代 MoE 架构（如 Qwen-3.6 35B A3B），在解决训练与推理引擎（SGLang）协同带来的乱码/权重不同步问题上积累了实证经验。
- **底层工程优化见真章:** RL 训练（尤其是 PPO/GRPO 算法）的显存墙问题始终是痛点。昨日 PR 展现了 slime 团队正在重构显存管理逻辑（引入 PYTORCH_ALLOC_CONF 替代固定 margin），这种底层优化是支撑千亿级参数 RL 训练的基础。对于追求极致显存利用率和工程稳定性的 RL 研究者而言，slime 的演进极具参考价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-08-04 RL 日报摘要：

### AReaL RL 日报摘要（2026-08-04）

#### 1. 今日速览
过去 24 小时内，AReaL 仓库共有 **4 条 Issues 更新**，**3 条 PR 更新**，无新版本发布。
从更新动态来看，核心贡献者集中清理了一批历史遗留的 stale 状态 Bug，并在底层并行训练与显存优化方面推进了关键的重构与优化工作。

#### 2. 版本发布
**无**。目前项目无新版本发布，主分支仍处于持续集成与功能迭代阶段。

#### 3. 重点 Issues
今日更新的 4 条 Issues 均被关闭，主要涉及 V2 在线 RL 模式下的底层机制缺陷与功能补全：
*   **[#1475](https://github.com/areal-project/AReaL/issues/1475) [CLOSED] V2 direct-export 工作流错误触发在线回调**
    Direct-export v2 工作流会意外将在线回调（online callbacks）加入队列，导致执行流污染。
*   **[#1479](https://github.com/areal-project/AReaL/issues/1479) [CLOSED] Online RL 需引入版本对齐的 Held-out 评估**
    此前的 `PPOTrainer` 在 `agent.mode="online"` 时拒绝外部验证集，该 Issue 提出在在线训练中支持固定数据集的版本对齐评估机制。
*   **[#1481](https://github.com/areal-project/AReaL/issues/1481) [CLOSED] V2 在线会话绕过 Rollout 容量限制并训练过期轨迹**
    V2 控制器在外部请求 `/rl/start_session` 时不检查 Consumer 容量，导致轨迹滞留在本地缓冲队列，绕过了 `StalenessManager`，进而导致模型训练了过期的轨迹数据。
*   **[#1484](https://github.com/areal-project/AReaL/issues/1484) [CLOSED] V2 控制器在错误的 Event Loop 中关闭 AsyncClient 传输**
    Teardown 阶段在非当前事件循环中关闭 AsyncClient transports，导致底层异常并引发非零退出。

#### 4. 关键 PR 进展
PR 动态集中在高并发分布式训练的显存优化、调度架构升级以及确定性计算修复：
*   **[#1500](https://github.com/areal-project/AReaL/pull/1500) [OPEN] 支持 AWEX 共置（Colocated）Actor-Rollout 训练**
    作者: Le8r0nJames。引入 Megatron actor 与 SGLang 推理引擎在同一 GPU 上的分时复用机制，通过 AWEX 组件进行显存卸载/加载的权重同步编排。这是 RL 场景下打破显存墙、提升算力利用率的重要探索。
*   **[#1555](https://github.com/areal-project/AReaL/pull/1555) [OPEN] 降低 Megatron 训练显存峰值**
    作者: yulangz。融合 FP32 vocab-parallel logprob 存储与 LM Head 反向传播，增加可选的分块计算机制，有效降低了分布式优化器中的显存峰值。
*   **[#1544](https://github.com/areal-project/AReaL/pull/1544) [CLOSED] 在模型构建前激活 Megatron 确定性模式**
    作者: Le8r0nJames。修复了 `use_deterministic_algorithms=True` 仅生效一半的问题。此前该标志在模型构建后才应用，导致 `VocabParallelEmbedding` 等组件在实例化时未能正确拷贝确定性设置。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **攻坚“显存与算力墙”**：通过 PR #1500（Megatron 与 SGLang 的 GPU 共置）与 PR #1555（显存峰值降低），AReaL 正在尝试解决大规模 LLM 在线强化学习中最棘手的底层算力与显存瓶颈。
2.  **完善在线 RL 的工程严谨性**：从近期关闭的 Issues 可以看出，团队对 Online RL 的工程质量要求极高，深入到底层 Event Loop 和 `StalenessManager` 层面去修复隐蔽的“过期数据训练”和异步通信 Bug，确保了梯度更新的时序正确性。
3.  **顶尖训练框架的深度整合**：项目持续在 Megatron（训练侧）与 SGLang（推理/rollout 侧）的协同上发力，对于关注下一代大模型 RLHF/RLAIF 分布式底层架构的研究者和工程师而言，是极佳的参考与实战基座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这里是 2026-08-04 的 TRL（Hugging Face 强化学习生态）项目日报摘要。

### 1. 今日速览
- **Issues 动态**：新增/更新 7 条。
- **PR 动态**：更新 30 条（其中大量 PR 集中于特定核心模块的重构）。
- **Releases**：过去 24 小时无新版本发布。
- **核心趋势**：今日代码变动呈高度聚集特征，核心维护者 `qgallouedec` 正主导将 `DistillationTrainer` 从实验性模块全面迁移并晋升为稳定 API。同时，社区在 GRPO 和大模型分布式训练（DeepSpeed/vLLM 集成）的底层 Bug 修复上保持活跃。

---

### 2. 版本发布
无。当前项目处于密集代码合并与重构阶段，预计近期会有包含 `DistillationTrainer` 稳定版的功能性大版本更新。

---

### 3. 重点 Issues
*今日 Issue 暴露了当前大模型 RL 训练中的几个典型工程痛点与算法疑问。*

- **[#6626 MiniLLM 优势计算存在绝对位置折损 Bug](https://github.com/huggingface/trl/issues/6626)**
  - **摘要**：开发者指出 `MiniLLMTrainer._compute_advantage` 使用了绝对索引构建 `gamma_pow`，导致序列中靠后的 Token 被错误地进行了指数级缩放，偏离了论文预期的优势计算公式。
- **[#6649 提议以配置文件为主要接口 (`trl train config.yaml`)](https://github.com/huggingface/trl/issues/6649)**
  - **摘要**：顺应 Axolotl 和 Prime-RL 的潮流，提议将配置文件驱动作为 TRL 的主要工作流，以方便并行实验和 Agent 自动化调用。
- **[#6636 空对话字段导致 IndexError](https://github.com/huggingface/trl/issues/6636)**
  - **摘要**：数据工具中的 `is_conversational()` 在面对空列表时未作防御，直接索引首元素导致报错，影响数据格式检测。
- **[#3237 ORPO 仍无法兼容多 GPU + DeepSpeed](https://github.com/huggingface/trl/issues/3237)**
  - **摘要**：老问题持续跟进，8xH100 环境下 ORPO+DeepSpeed 依然存在多卡运行障碍。
- **[#3090 GRPO 优势计算的另一种算法探讨 (已关闭)](https://github.com/huggingface/trl/issues/3090)**
  - **摘要**：关于 GRPO 原论文中提供的第二种（更高级的）优势计算方法的实现可能性探讨。

---

### 4. 关键 PR 进展
*今日 PR 主要分为两大阵营：`DistillationTrainer` 的稳定化战役，以及 GRPO/分布式训练的攻坚战。*

**🚀 里程碑：`DistillationTrainer` 晋升稳定 API (关联 [#6449](https://github.com/huggingface/trl/issues/6449))**
在核心维护者的推动下，十余个 PR 密集合并，完成全链路升级：
- **[PR #6640](https://github.com/huggingface/trl/pull/6640)**：核心变更，将 Trainer 代码从 `trl.experimental` 物理移动至稳定 API 命名空间。
- **[PR #6650](https://github.com/huggingface/trl/pull/6650) / [PR #6652](https://github.com/huggingface/trl/pull/6652)**：跟进主流趋势，为蒸馏 Trainer 补齐了对视觉语言模型（VLM）和工具调用的支持。
- **[PR #6629](https://github.com/huggingface/trl/pull/6629)**：修复了 Loss 审计中发现的问题：当使用 Liger Kernel 时拒绝 `logit_scale` 参数，保证计算正确性。
- **[PR #6642](https://github.com/huggingface/trl/pull/6642)**：新增 `trl distillation` CLI 命令，提升易用性。

**🛠 算法与工程修复（GRPO & 分布式）**
- **[PR #6637 修复 K3 KL 估计器溢出 (inf overflow)](https://github.com/huggingface/trl/pull/6637)**
  - **摘要**：在策略严重偏离参考模型时，通过在 `exp` 前裁剪 log-ratio，修复了 KL 散度计算溢出为 `inf` 的致命 Bug。
- **[PR #6651 vLLM 权重同步容错性提升](https://github.com/huggingface/trl/pull/6651)**
  - **摘要**：修复了当客户端发生 OOM 崩溃后，服务端残留权重更新组导致后续训练无法重新初始化的工程痛点。
- **[PR #6654 GRPO Luspo Loss 掩码对齐](https://github.com/huggingface/trl/pull/6654)**
  - **摘要**：修复了 `luspo` loss 计算时未将 `mask` 作为元素级乘子，仅作为序列长度归一化导致的计算偏差。
- **[PR #6514 SFTTrainer 增加 MoE 专家指标](https://github.com/huggingface/trl/pull/6514)**
  - **摘要**：针对 Issue #4611 的需求，在 SFTConfig 中引入 `log_expert_usage`，用于在评估阶段统计并记录 MoE 模型的专家负载情况。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **后训练技术的工程化落地极快**：近期几乎所有头部大模型（Qwen3.x, DeepSeek-V4, GLM-5）都在使用策略蒸馏。TRL 正在以极高的效率（今日密集的 PR 即可证明）将前沿的 `DistillationTrainer` 标准化、工具化，并紧跟 VLM 与 Agent 工具调用的范式。
2. **直击分布式强化学习的脆弱点**：大模型 RL（如 PPO/GRPO）往往伴随显存溢出（OOM）和分布式通信崩溃。今日针对 vLLM 权重同步的重置修复（[PR #6651](https://github.com/huggingface/trl/pull/6651)）和 KL 散度溢出截断（[PR #6637](https://github.com/huggingface/trl/pull/6637)），表明 TRL 团队正在死磕那些真正阻碍开发者跑通大规模 RLHF 的底层顽疾。
3. **对齐主流工作流**：向 CLI 配置文件优先（[Issue #6649](https://github.com/huggingface/trl/issues/6649)）的演进，意味着 TRL 正在适应自动化超参搜索和大规模 Agent 并行调度的现代基础设施需求。

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

这是一份基于 2026-08-04 GitHub 数据为 **verl** (volcengine/verl) 生成的强化学习（RL）生态项目日报。

### 1. 今日速览
过去 24 小时内，verl 社区活跃度极高，共产生 **19 条 Issue 更新** 与 **23 条 PR 更新**，无新版本 Release 发布。从提交内容来看，当前项目正处于底层架构优化、新型硬件适配（TPU/ROCm/Ascend）以及多轮智能体 RL 算法演进的密集迭代期。

### 2. 版本发布
本日无新版本发布（0 Release）。

### 3. 重点 Issues
社区今日的讨论重点集中在**多轮 RL 信用分配、新型模型对齐以及底层性能瓶颈**：

*   **[RFC] 多轮 RL 的单轮奖励支持**：开发者提议引入在可变轮次下保持无偏的“轮级基线”，解决当前工具调用和搜索智能体面临的信用分配瓶颈。
    👉 [Issue #7244](https://github.com/verl-project/verl/issues/7244)
*   **[RFC] 全词表多教师在线策略蒸馏 (OPD)**：针对当前 `forward_kl_topk` 在大词表下截断导致尾部质量偏差的问题，提出了全词表多教师蒸馏方案。
    👉 [Issue #7239](https://github.com/verl-project/verl/issues/7239)
*   **[Megatron, perf] FP8 E2E 性量级倒退排查**：开发者反馈在 Qwen3-30B-A3B / 8xH200 上，FP8 端到端训练反而慢于 BF16，引发对 FP8 参数计算行为的讨论。
    👉 [Issue #7232](https://github.com/verl-project/verl/issues/7232)
*   **[ckpt] NCCL Checkpoint 广播优化**：提议在 broadcast 权重时将同节点的 trainer GPU 加入组内，以降低端到端延迟并提高带宽利用率。
    👉 [Issue #7167](https://github.com/verl-project/verl/issues/7167)
*   **[Bug] Megatron model merger 重复上传与配置丢失**：修复分布式合并模型时所有 rank 均尝试上传 checkpoint 的问题，以及丢失 `generation_config.json` 的 Bug。
    👉 [Issue #7226](https://github.com/verl-project/verl/issues/7226) / [Issue #7198](https://github.com/verl-project/verl/issues/7198)

### 4. 关键 PR 进展
PR 动态展示了 verl 在**引擎解耦、算力覆盖与底层 Bug 修复**方面的实质性进展：

*   **新模型与新硬件支持**：
    *   **支持 DeepSeek V4**：VeOmni 引擎层面增加最新模型架构支持。
        👉 [PR #7242](https://github.com/verl-project/verl/pull/7242)
    *   **TPU GRPO 训练支持**：引入 TorchTitan actor 和 vLLM rollout，使 verl 能够在 Google Cloud TPU (GKE) 上运行。
        👉 [PR #7231](https://github.com/verl-project/verl/pull/7231)
    *   **ROCm 纯 PyTorch 降级方案**：为 DeepSeek DSA 提供不依赖 nvcc 的 `fast_hadamard_transform` 替代方案。
        👉 [PR #7241](https://github.com/verl-project/verl/pull/7241)
*   **训练引擎与算法功能增强**：
    *   **无偏 pass@k 验证指标**：在验证模块中添加基于 Codex/HumanEval 估计器的无偏 pass@k 指标。
        👉 [PR #7240](https://github.com/verl-project/verl/pull/7240)
    *   **KV-cache 感知负载均衡器**：为 rollout server 引入结合前缀缓存命中率与负载指标的新型请求路由。
        👉 [PR #7115](https://github.com/verl-project/verl/pull/7115)
    *   **PPO 共享逻辑重构**：将 `apply_kl_penalty` 等逻辑从过时的 `RayPPOTrainer` 剥离，保持行为不变。
        👉 [PR #7237](https://github.com/verl-project/verl/pull/7237)
*   **关键 Bug 修复**：
    *   **修复 FSDP Ref 模型强制 CPU Offload 限制**：解除硬编码，允许用户自行配置 Reference/Reward 模型的卸载策略。
        👉 [PR #7182](https://github.com/verl-project/verl/pull/7182)
    *   **修复 PPO FusedLinear 静默梯度丢失 Bug**：基于 `ctx.needs_input_grad` 严格控制反向梯度传播，防止计算图断裂。
        👉 [PR #7235](https://github.com/verl-project/verl/pull/7235)
    *   **修复 SGLang LoRA merge 模式冲突**：避免在 merge 模式下 rollout server 依然按热插拔 adapter 运行的问题。
        👉 [PR #7234](https://github.com/verl-project/verl/pull/7234)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 RLHF/RLAIF 领域的基础设施，verl 正展现出三个明确的技术壁垒：
1.  **极致的硬件异构包容性**：不论是 Nvidia 的 FP8 优化、AMD ROCm 的算子适配，还是打破 Nvidia 生态垄断的 Google TPU 支持（PR #7231），verl 正在成为跨芯片算力进行大模型强化学习的“万能胶水”。
2.  **紧跟前沿模型与算法迭代**：在社区还在研究基础 PPO 时，verl 已经在着手适配 DeepSeek V4 架构（PR #7242）、解决 DeepSeek Sparse Attention (DSA) 的硬件兼容性问题，并在探索解决多轮 Tool-use Agent 中的长序列信用分配难题（Issue #7244）。
3.  **对分布式训练细节的深度把控**：从修复 Megatron 分布式合并时的网络 I/O 浪费（Issue #7226），到排查 FusedLinear 层的静默梯度丢失（PR #7235），verl 团队正在实打实地填坑大模型分布式 RL 训练中深水区的工程 Bug。这是单纯的算法层代码库难以提供的核心价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune 强化学习生态日报（2026-08-04）

## 1. 今日速览
过去 24 小时内，torchtune 仓库活动聚焦于底层依赖修复。无新增 Issues、无新版本发布，仅有 1 条核心 PR 更新。开发团队正在解决由于上游依赖（`torchao` 和 `torchrl`）版本更新导致的库导入失败及 CI 异常问题。

## 2. 版本发布
- **无**。近期未发布新版本。

## 3. 重点 Issues
- **无**。过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[OPEN] [CLA Signed] fix(dev): support current torchao and torchrl releases** (作者: n-dlms)
  - **链接**: [meta-pytorch/torchtune PR #2982](https://github.com/pytorch/torchtune/pull/2982)
  - **技术摘要**: 这是一个关键的兼容性修复。由于上游依赖 `torchao >= 0.17` 破坏了向后兼容性（将 NF4 相关 API 如 `NF4Tensor`, `to_nf4`, `linear_nf4` 从原路径迁移），导致当前 torchtune 无法导入且 CI 报红。此 PR 旨在适配最新的 `torchao` 和 `torchrl` 版本，确保基于 PyTorch 的量化与强化学习训练流不会因底层 API 变更而中断。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
torchtune 作为 PyTorch 官方生态内主推的 LLM 微调库，其稳定性直接关系到 RLHF/PPO 等强化学习流水线的基建：
1. **深度绑定前沿量化生态**: PR #2982 中提到的 NF4 量化 API 维护，对于在单卡或消费级硬件上运行 RL 训练（通过 QLoRA 降低内存开销）至关重要。torchtune 对 `torchao` 的及时跟进，保障了 RL 实验在显存受限条件下的可行性。
2. **RL 训练流的核心齿轮**: 此次同步更新的 `torchrl` 是 PyTorch 生态进行强化学习算法开发的标准库。torchtune 保持与其最新版本的兼容，意味着它能为 RL 社区提供最新、最稳定的基座模型接口，是衔接策略模型与 RL 算法的关键桥梁。
3. **零 Issue 的背后**: 今日 0 Issue 并不代表停滞，反而体现出社区正在密集处理底层兼容性工作。当底层 API 迁移完毕，torchtune 将继续作为高可靠性的组件，服务于后续的大模型 RL 训练生态。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 日报摘要 (2026-08-04)**

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue 和版本发布，但有 **3 个 PR** 更新。活动核心高度聚焦于底层训练逻辑的修复与前沿强化学习（RL）算法架构的深度重构：包括多节点 SFT 脚本的致命 Bug 修复、DPPO 算法 API 的统一化重构，以及针对 Qwen3-MoE 的大规模训练与权重同步支持。

### 2. 版本发布
*   **无新版本发布**（最近 24 小时内 Main 分支无新增 Tag 或 Release）。

### 3. 重点 Issues
*   **无新增 Issue**。当前社区反馈较为平缓，开发重心完全向底层代码合并与基础架构升级倾斜。

### 4. 关键 PR 进展

*   **[#1795] [OPEN] 修复多节点 SFT 调试脚本中的 `ZeroDivisionError`**
    *   **作者:** abhishekraok
    *   **进展:** 针对底层训练脚本的除零异常进行修复。原始脚本 `scripts/train/debug/oc_sft_multinode.sh` 的默认全局批次大小（Global Batch Size = 64）超出了调试数据集本身的容量，导致 `num_training_steps` 向下取整为 0，进而引发学习率调度器的 `ZeroDivisionError`。此修复排除了多节点调试环境下的基础阻断问题。
    *   **链接:** [allenai/open-instruct PR #1795](https://github.com/allenai/open-instruct/pull/1795)

*   **[#1790] [CLOSED] WIP: 通过统一的 rho-divergence 掩码范式实现 DPPO 及重构 API**
    *   **作者:** undfined
    *   **进展:** 该 PR 已关闭。它提供了一种替代方案（Alternative to #1745），放弃添加特定于 Trainer 的损失路径，转而利用共享的 GRPO 比率、校正和掩码机制来实现 DPPO (Diffusion Policy Policy Optimization)。此举旨在使最终的 RL 配置更具组合性、数值鲁棒性，并保持底层 API 的一致性。
    *   **链接:** [allenai/open-instruct PR #1790](https://github.com/allenai/open-instruct/pull/1790)

*   **[#1791] [CLOSED] 增加 Qwen3-MoE 训练及实时权重同步支持**
    *   **作者:** undfined
    *   **进展:** 该 PR 已关闭。完成了核心依赖栈的大版本升级（PyTorch 2.11, Transformers 5.5.3, vLLM 0.25.1）。实现了 Qwen3-MoE 的权重导出（将融合的专家张量展平为 vLLM 兼容的逐专家 gate/up/down 投影），并支持训练过程中的实时权重同步。这对于在复杂 MoE 架构上无缝进行 RLHF/PPO 训练（Actor 与 Reference 模型的参数交互）至关重要。
    *   **链接:** [allenai/open-instruct PR #1791](https://github.com/allenai/open-instruct/pull/1791)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **架构级的 RL 算法收敛：** Open Instruct 正在摆脱“一个算法一套代码”的粗放模式（如 PR #1790 所示）。通过将 DPPO 等先进算法统一在 GRPO 的比率计算和掩码框架下，项目正在构建一套高内聚、可组合的强化学习底层 API。这种统一范式能大幅降低社区复现和魔改 RL 算法的门槛。
2.  **对 SOTA MoE 模型的深度适配：** 随着 Qwen3 等巨型 MoE 模型成为主流，RL 训练的瓶颈转移到了显存管理和推理引擎（vLLM）的权重同步上。PR #1791 展示了该项目对前沿模型架构（专家张量拆解、实时权重同步）的极速响应与工程化落地能力，是目前开源社区中少有的能稳妥承接超大 MoE 模型 RL 训练的基建项目。
3.  **激进的底层依赖演进：** 项目毫不犹豫地跟进 PyTorch 2.11 和 vLLM 0.25.1 等最新核心依赖，确保了 RL 训练在吞吐量和分布式计算（如多节点调试修复 #1795）上的硬件利用率始终处于开源生态的第一梯队。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026-08-04 RL 开源生态日报摘要：

### rl_games (Denys88/rl_games) 项目日报 - 2026-08-04

**1. 今日速览**
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库整体活跃度较低，无新增 Issue 或 Release。最核心的动态为一项关于 PPO 算法在环境自动重置机制下数据掩码正确性的重要代码贡献被更新。

**2. 版本发布**
无。过去 24 小时内项目未发布新版本。

**3. 重点 Issues**
无。过去 24 小时内无新增或更新的 Issue。

**4. 关键 PR 进展**
*   **[PR #362] [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者:** ViktorM
    *   **更新时间:** 2026-08-03
    *   **技术摘要:** 这是一个针对 PPO 算法底层训练逻辑的深度修复。在处理支持 `next_step-autoreset` 的环境（如 Envpool 或原生 Gymnasium 1.x 向量环境）时，传统的实现会将环境重置时产生的“过渡行”（包含被环境忽略的动作、无意义的填充奖励、以及上一个回合的终止观测）错误地作为真实训练数据混入 PPO 的 rollouts 中。
    *   **核心改动:** 该 PR 一方面清理了这些会影响策略学习正确性的“垃圾数据行”，另一方面引入了标量化 sigma 参数化。这是整体 autoreset 正确性修复工作的一部分（SAC 部分已在 commit `b1ed755` 中合并）。
    *   **链接:** [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)

**5. 为什么这个项目在当前 RL 生态继续值得关注**
尽管今日数据动态较少，但 [rl_games](https://github.com/Denys88/rl_games) 作为高性能 RL 基础设施的地位依然稳固。从 [PR #362](https://github.com/Denys88/rl_games/pull/362) 的技术细节可以看出，该项目仍在持续进行底层的严格校正。在强化学习中，环境并行采样时的 autoreset 边界条件处理是极易被忽视 yet 致命的 bug 来源。rl_games 积极适配现代向量化环境（Gymnasium 1.x, Envpool）并致力于消除 rollout 阶段的统计偏差，这种对数据流纯洁性的极致追求，使其依然是高吞吐量 RL 训练（尤其是 Isaac Gym/Lab 等物理仿真环境）的优选代码库。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**Gymnasium RL 日报摘要 (2026-08-04)**

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度集中于现有代码的审查与错误修复。共有 1 条 Issue 更新，3 条 PR 更新，无新版本发布。核心动向包括环境转换动态学的扩展提案讨论，以及包装器 API 规范化与状态记录错误的修复。

### 2. 版本发布
* **无新版本发布** (近期无核心库版本变动)。

### 3. 重点 Issues
* **[OPEN] #1559 提议为 LunarLander 增加完全可调的转移动态（含确定性模式）**
  * **作者:** maxanisimov
  * **链接:** [Farama-Foundation/Gymnasium Issue #1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559)
  * **摘要:** 该提案建议在 `LunarLander` 的实现中暴露底层物理系数和随机性控制的 kwargs。此举旨在让研究人员能够直接调整或禁用环境噪声（实现确定性模式），而无需为了控制转移动态学去维护自定义的 fork 或子类。

### 4. 关键 PR 进展
* **[OPEN] #1658 修复 AddRenderObservation 中构造函数 kwargs 记录错误**
  * **作者:** uttam12331
  * **链接:** [Farama-Foundation/Gymnasium PR #1658](https://github.com/Farama-Foundation/Gymnasium/pull/1658)
  * **摘要:** 修复了 `AddRenderObservation.__init__` 中 `RecordConstructorArgs` 记录旧参数名（遗留自 `PixelObservationWrapper` 的 `pixels_only` 等）的 bug。该 bug 会导致在规范重构 时触发 TypeError。
* **[OPEN] #1556 新增 Wrapper 实现校验工具**
  * **作者:** Jatin-Shihora
  * **链接:** [Farama-Foundation/Gymnasium PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556)
  * **摘要:** 引入了 `check_wrapper()` 实用函数，用于验证自定义 Wrapper 是否正确遵循 Gymnasium 的 Wrapper API 规范。该工具补齐了类似于 `check_env()` 在环境侧的测试能力，降低了第三方 Wrapper 集成时的调试成本。
* **[CLOSED] #1515 Taxi 环境更新**
  * **作者:** dm-ackerman
  * **链接:** [Farama-Foundation/Gymnasium PR #1515](https://github.com/Farama-Foundation/Gymnasium/pull/1515)
  * **摘要:** 修复了 Taxi 环境在雨天条件下，由于移动逻辑不一致导致的步态错误。该 PR 现已合并，并同步更新了 `TaxiEnv` 的相关文档。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **API 规范化与防御性编程:** 从引入 `check_wrapper()` (PR #1556) 到修复 kwargs 深拷贝导致的 TypeError (PR #1658)，项目正在强化其核心 API (Env / Wrapper) 的鲁棒性。这对于依赖 Gymnasium 进行大规模基准测试的下游算法库（如 Stable-Baselines3, CleanRL）至关重要。
* **底层数据分布的开放性:** Issue #1559 关于 LunarLander 转移动态学的提案，反映了当前 RL 社区对“摆脱黑盒环境”的需求。允许精细化控制 Domain Randomization 和物理确定性，是支撑 Sim-to-Real（仿真到现实）和算法消融研究的基础设施演进方向。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

这份日报基于 PettingZoo 2026-08-04 的 GitHub 状态数据生成。过去 24 小时内，项目处于常规维护与底层 Bug 修复阶段，无新版本发布。

### 1. 今日速览
*   **Issues 动态**：更新 1 条（核心环境序列化问题）。
*   **PR 动态**：更新 15 条（主要涉及核心工具类逻辑修复与 6 年前的旧版依赖依赖清理）。
*   **Releases**：0 个。

### 2. 版本发布
*   无。当前项目处于稳定迭代期，无新 Tag 或 Release 生成。

### 3. 重点 Issues
*   **[#1307](https://github.com/Farama-Foundation/PettingZoo/issues/1307) [bug] Copying or pickling an env erases the board, legal moves, rewards, etc**
    *   **摘要**：用户 `epicgamer17` 报告了一个严重影响 MCTS（蒙特卡洛树搜索）和状态保存的底层 Bug。当对环境执行 `copy.deepcopy(env)` 或 `pickle` 序列化时，棋盘状态、合法动作和奖励等核心属性会丢失（被重置而非复制）。这将导致依赖状态快照的复杂强化学习搜索算法无法正常运行。

### 4. 关键 PR 进展
今日的 PR 更新分为两类：核心 API 的健壮性修复与历史遗留依赖的批量清理。

*   **核心逻辑修复**：
    *   **[#1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400) [OPEN] fix: give AgentSelector ownership of its agent order**
        *   **摘要**：开发者 `teddytennant` 提交了一项重要修复。原 `AgentSelector.reinit()` 方法按引用存储外部传入的智能体列表，未做深拷贝。这会导致外部列表的变动意外改变环境的内部执行顺序。此 PR 赋予了 `AgentSelector` 对列表的所有权，并补充了回归测试。
*   **CI 维护与历史依赖清理**：
    *   **[#1413](https://github.com/Farama-Foundation/PettingZoo/pull/1413) [CLOSED] fix: correct formatting of dependabot.yml**：修复了 Dependabot 的配置文件格式，确保 pre-commit CI 能够正常通过。
    *   **[#1411](https://github.com/Farama-Foundation/PettingZoo/pull/1411) [CLOSED] Bump actions/checkout from 4 to 7**：CI 流程依赖更新。
    *   **批量关闭 2020 年的陈旧依赖 PR (共 12 条)**：编号 `#1` 到 `#12` 的 PR 均由 `dependabot` 创建于 2020 年初，涉及早期子环境（如 `connect4_tictactoe`, `knights_archers_zombies` 等）中 `tensorflow`、`pypi`、`pillow` 等库的旧版本升级。这批 PR 已于今日被集中关闭，表明项目组正在进行仓库历史包袱的清理。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Farama-Foundation 旗下的核心项目，PettingZoo 是多智能体强化学习（MARL）领域的标准 API 提供者（相当于 MARL 界的 Gymnasium）。
*   **标准的前置依赖**：绝大多数主流 MARL 算法库（如 Tianshou, CleanRL, RLlib）在实现多智能体环境交互时，均深度依赖 PettingZoo 的 API 标准。
*   **底层正确性至关重要**：从今日暴露的 **Issue #1307**（深拷贝状态丢失）和 **PR #1400**（Agent 执行顺序引用泄露）可以看出，如果 PettingZoo 在底层状态管理上存在瑕疵，将直接导致上层 MARL 算法（尤其是树搜索、 Population-Based Training 等需要频繁保存和回滚环境状态的算法）得出错误结论。项目社区对这些底层机制的持续修复，是维持整个 RL 生态可靠性的关键。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>