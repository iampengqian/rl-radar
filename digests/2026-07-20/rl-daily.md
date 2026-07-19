# RL 开源生态日报 2026-07-20

> 生成时间: 2026-07-19 22:14 UTC | 覆盖项目: 15 个

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
当前 RL（强化学习）开源生态正呈现出显著的分化与融合趋势。一方面，以大模型（LLM/VLM）对齐与推理强化为核心的“大模型 RL”框架（如 verl, TRL, slime, AReaL, ROCK）正处于高度活跃的工程攻坚期，大量系统级优化与多模态特性被紧急合入；另一方面，传统单/多智能体强化学习环境库（如 Gymnasium, PettingZoo）趋于稳定，转向底层 API 规范制定与基础设施维护。整个生态的重心已全面从“算法验证”转向“超大规模异构算力集群上的高吞吐训练与复杂 Agent 交互”。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 47 | 8 | 0 | 极度活跃。死磕底层算力压榨（通信/显存优化）与最新前沿学术思想（OPSD）的工程落地，并前瞻布局多硬件架构（GB200/Ascend）。 |
| **TRL** | 11 | 8 | 0 | 稳步迭代。聚焦于前沿算法（APO/GOLD）的数学严谨性修复，以及多模态 Agent（VLM Tool Call）和知识蒸馏生态的深度整合。 |
| **AReaL** | 0 | 5 | 0 | 蓄力期。重点攻坚万卡级分布式训练的底层容错（NCCL 预热）与开发效率（解耦 Debug），正快速跟进前沿 Agentic RL 范式。 |
| **Gymnasium** | 1 | 6 | 0 | 维护期。向现代计算后端（JAX）平滑演进，重构底层泛型设计与并发环境类型一致性，巩固其作为 RL API 标准定义者的地位。 |
| **slime** | 2 | 4 | 0 | 深水区。核心团队死磕多维并行与底层算子修复（如 MLA 索引归一化），为下一代 SOTA 模型（GLM-5/Qwen3.5-VL）做兼容与技术蓄水。 |
| **ROCK** | 1 | 1 | 0 | 稳固期。针对大规模分布式训练日志可观测性的痛点进行云原生级别的修复打磨，提升生产级部署鲁棒性。 |
| **PettingZoo** | 0 | 1 | 0 | 极低活跃。当前仅进行常规文档构建依赖更新，项目作为 MARL 标准 API 的地位已固化。 |
| **其余项目** | 0 | 0 | 0 | *CleanRL, OpenRLHF, SB3, Tianshou 等 9 个项目过去 24 小时无明显动态。* |

## 共同关注的研究与工程方向

### 研究侧信号
1. **知识/特权上下文蒸馏的全面引入**：verl (OPSD) 和 TRL (GOLD 特权蒸馏) 均在快速融合此前沿范式，通过 Teacher 模型基于“特权指令/Ground-truth”对学生模型的 rollout 进行评分或指导，这是当前突破 LLM 复杂推理瓶颈、降低大模型强化学习成本的核心研究路径。
2. **多模态强化学习 (RLHF/VLM) 与 Agent 闭环**：单纯文本的 RLHF 已成过去式，支持视觉语言模型（VLM）的图像特征对齐（verl）、多轮多模态工具调用（TRL）以及真实代码工程环境的 SWE Agent 交互（AReaL）成为了算法验证的新高地。

### 工程/基础设施侧信号
1. **底层通信与显存的极限压榨**：这是今日最显著的工程焦点。为了在大规模集群上跑通长上下文与多模态大模型，各框架在底层各显神通：verl 延迟梯度同步和标量物化以消除阻塞，AReaL 修复 NCCL 通信预热并优化大型 VLM 的 FSDP 加载，slime 则优化权重更新逻辑与 MLA 注意力算子。
2. **RL 训练流的工程“解耦”与“容错”**：由于 RL 训练极易崩溃，基础设施正朝着可回溯、高容错方向演进。AReaL 引入 Trajectory dump/replay 将前向交互与反向更新解耦以实现“离线 Debug”，而 ROCK 则在完善基于云原生的异常堆栈捕获，解决分布式训练中的“黑盒报错”难题。

## 差异化定位分析
- **verl：极致性能的大规模集群急先锋**。定位偏向于“重工业级”的大算力 RL 脚手架，对最新算法（OPSD）和多硬件（NPU/GB200）的反应极其敏锐，其工程优化直切底层通信与显存痛点，适合拥有大规模集群的硬核团队。
- **TRL：高易用性的前沿算法百宝箱**。依托 HuggingFace 生态，定位为“低门槛、广覆盖”的算法库。重点发力蒸馏、多模态 Agent 及各类变体对齐算法（DPO/APO）的标准化，是研究者快速试错和中小规模模型微调的首选。
- **slime & AReaL：面向特定前沿架构的高性能后端**。slime 紧密贴合最新 SOTA 架构（如 GLM-5、Qwen3.5-VL MoE），注重底座模型兼容；AReaL 则极度强调万卡级容错与高难度 Agent 环境集成，两者均具有强烈的前沿技术实验色彩。
- **Gymnasium & ROCK：坚如磐石的底层规范与基建**。Gymnasium 持续巩固其单智能体 API 霸主地位并向 JAX 迁移；ROCK 则在默默打磨分布式 RL 的可观测性。它们虽然不直接提供 SOTA 算法，但是整个生态不可或缺的基石。

## 社区热度与成熟度
开源 RL 社区的成熟度正发生“倒挂”：**越偏向底层基础环境（Env API），社区越成熟、越静态**（如 PettingZoo、Gymnasium 仅进行少量维护，无需频繁迭代）；**越偏向大模型对齐，社区越躁动、越高频**（如 verl 24小时内 47 条 Issue 动态）。这反映出大模型 RL 仍处于“开荒期”，模型架构、序列长度、新模态的每一次升级，都会引发底层训练框架层面的剧烈动荡与密集修 Bug。

## 值得关注的趋势信号
1. **大模型 RL 框架正加速向“全模态/全场景 Agent”进化**：无论是 TRL 修复多模态工具调用，还是 AReaL 集成 SWE 基础设施，均预示着 RL 训练的目标正在从“回答单轮对齐问题”转变为“在复杂多轮环境中执行长序列真实任务”。
2. **“多硬件适配”成为核心准入门槛**：英伟达下一代超级算力（GB200/ARM 架构）与国产异构算力（华为昇腾 NPU）的适配需求已频繁出现在 verl 等核心项目的更新中。纯依赖英伟达 CUDA 生态的框架将在下一代算力更迭中失去竞争力。
3. **“性能黑客”式优化成为大厂框架的核心护城河**：消除隐性同步、重写通信原语、重构底层算子（如 verl 与 slime 近期的操作）。在大规模 RLHF 训练中，微秒级的通信阻塞和显存泄漏都会被无限放大，极致的系统级优化能力正在成为拉开各开源框架差距的关键胜负手。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态项目日报**
**日期**: 2026-07-20

### 1. 今日速览
过去 24 小时内，ROCK 仓库活动聚焦于核心日志系统的错误诊断能力优化。共有 1 条 Issue 更新与 1 条 PR 更新，无新版本发布。社区开发者针对底层异常堆栈丢失问题提出了明确的缺陷反馈，并直接提交了修复代码。

### 2. 版本发布
- **Releases**: 无。

### 3. 重点 Issues
- **#1260 [BUG] Preserve exception tracebacks in custom log formatter**
  - **作者**: Timandes
  - **链接**: [alibaba/ROCK Issue #1260](https://github.com/alibaba/ROCK/issues/1260)
  - **摘要**: 开发者指出项目的 `StandardFormatter.format()` 存在严重的日志记录缺陷。当前机制在构建日志行时仅使用了 `record.getMessage()`，未能正确格式化 `record.exc_info`。这导致在 RL 训练或分布式任务调度中，如果使用 `logger.exception(...)` 或 `exc_info=True` 捕获异常，关键的 Traceback（错误堆栈）信息会直接丢失。对于部分字符串表示为空的底层异常（如部分 HTTP 库异常），这会使得线上排错变得极其困难。

### 4. 关键 PR 进展
- **#1261 fix: preserve exception tracebacks in logs**
  - **作者**: Timandes
  - **链接**: [alibaba/ROCK PR #1261](https://github.com/alibaba/ROCK/pull/1261)
  - **进展**: 该 PR 为上述 Issue 的直接修复方案。
    1. 修复了 `StandardFormatter`，使其在记录 `exc_info` 时能够正确保留异常类型和完整的 Traceback。
    2. 引入了灵活的配置开关：新增 YAML 配置项 `logging.exception_traceback_enabled` 以及环境变量 `ROCK_LOGGING_EXCEPTION_TRACEBACK_ENABLE` 覆盖支持，方便在容器化/云端训练环境中动态调整。
    3. 将 YAML 的日志配置统一应用到了共享的异步（async）日志记录器中。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
强化学习的工程化落地高度依赖于长时间、高负载的分布式训练任务，而在此过程中，网络通信异常（如底层的 HTTP/RPC 错误）和分布式节点崩溃是家常便饭。ROCK 社区本次针对“异常 Traceback 丢失”的修复（#1260, #1261），直击了大规模 RL 训练中**“核心错误信息难以捕获与回溯”**的工程痛点。
此外，该修复方案引入了符合云原生规范的环境变量与 YAML 级别配置，表明 ROCK 项目正在积极适应现代复杂的 RL 基础设施部署需求。这种对底层可观测性和系统鲁棒性的持续打磨，使其成为值得长期关注和借鉴的生产级 RL 框架。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**RL 开源生态日报：slime (THUDM/slime)**
**日期：2026-07-20**

### 1. 今日速览
过去 24 小时内，slime 仓库活动主要集中于底层代码优化与生态兼容性建设。共有 2 条 Issue 更新，4 条 PR 更新，无新版本 Release发布。核心开发动态聚焦于大模型权重更新效率优化、GLM-5 底层算子 Bug 修复，以及通过 Megatron-Bridge 扩展多模态模型支持。

### 2. 版本发布
*   **无新版本发布**（当前代码库处于持续集成与功能迭代阶段）。

### 3. 重点 Issues
*   **[Bug] GLM-5 模型 MLA 索引器算子计算异常** (`#2165`)
    *   **链接:** [THUDM/slime Issue #2165](https://github.com/THUDM/slime/issues/2165)
    *   **摘要:** 开发者指出，在 `slime_plugins/models/glm5/glm5.py` 中，DSA lightning-indexer 错误地使用了未经归一化（RMSNorm）的 raw `q_compressed` 作为 query。这与 HuggingFace `transformers` 和 vLLM 中 GLM-5 / DeepSeek-V3.2 的参考实现不一致。该底层算子 Bug 可能会影响相关模型在 RL 过程中的注意力计算精度，需引起核心开发者关注。
*   **[生态/推广] 项目收录至 StackMap AI 知识图谱** (`#2214`)
    *   **链接:** [THUDM/slime Issue #2214](https://github.com/THUDM/slime/issues/2214)
    *   **摘要:** 社区贡献者将 slime 收录至 StackMap（一个人工精选的 AI/Agent 开源工具知识图谱）。这表明 slime 在开源 AI 生态中的知名度正在提升，获得第三方平台的追踪与推荐。

### 4. 关键 PR 进展
*   **[核心优化] 优化权重更新逻辑** (`#2220` | CLOSED)
    *   **链接:** [THUDM/slime PR #2220](https://github.com/THUDM/slime/pull/2220)
    *   **摘要:** 核心贡献者 `zhuzilin` 提交的针对 `update weight` 的优化 PR，已于今日关闭。结合同时存在 CI 测试 PR (`#2053`) 来看，权重复制/更新的性能优化是当前 RL 训练内核提效的重点方向。
*   **[新特性] 通过 Megatron-Bridge 支持 Qwen3.5-VL** (`#2075` | OPEN)
    *   **链接:** [THUDM/slime PR #2075](https://github.com/THUDM/slime/pull/2075)
    *   **摘要:** 贡献者 `demouo` 通过添加 `slime_plugins/megatron_bridge/qwen3_5_vl.py`，使 slime 能够接入 NVIDIA Megatron-Bridge。该 PR 正式为 slime 引入了对 Qwen3.5-VL（含 Dense 和 MoE 架构）的支持，大幅扩展了框架在多模态强化学习（RL）领域的适用性。
*   **[文档] 修复 Qwen3-4B 文档错别字** (`#2210` | CLOSED)
    *   **链接:** [THUDM/slime PR #2210](https://github.com/THUDM/slime/pull/2210)
    *   **摘要:** 常规文档修缮，提升新用户上手体验。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **深度攻坚多维并行与底层算子：** 从 Issue `#2165` (MLA 机制归一化) 和 PR `#2220` (update weight 优化) 可以看出，slime 团队正在死磕 RL 训练框架中最核心的性能瓶颈。RL 训练对显存和通信开销极其敏感，权重更新效率和底层 Attention 算子的正确性直接决定了大规模 RL 训练的成败。
2.  **紧跟 SOTA 模型生态（多模态与 MoE）：** PR `#2075` 展示了项目对最新前沿模型（Qwen3.5-VL 的 Dense 及 MoE 版本）的快速响应能力。通过兼容 Megatron 生态，slime 正在确立其作为“高性能、高兼容性 RL 后端”的定位。
3.  **处于高频迭代与技术蓄水期：** 虽然近期无 Release 发布，但内部 CI 测试（PR `#2053`）持续运转，且核心开发者频繁提交底层优化代码。这表明项目正在为下一次提供更高吞吐量、支持更多模态的重要版本发布做技术储备。对于需要在大规模集群上进行 LLM/VLM 强化训练的开发者而言，是不可或缺的关注对象。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-20 强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共有 **5 个 PR 发生了状态更新**，无新增 Issues，无新版本发布。今日的活动主要集中在底层容错机制的修复、Agent/环境交互的扩展，以及历史大型特性分支的同步与维护。

### 2. 版本发布
- **无**。当前仓库未在近 24 小时内发布新版本。

### 3. 重点 Issues
- 过去 24 小时无新增或更新的 Issues。社区当前的讨论热度较低，重点均集中在代码合并与底层架构重构上。

### 4. 关键 PR 进展
今日共有 5 个 PR 更新，涉及分布式训练优化、Agent 工作流及离线调试等多个核心维度：

- **[OPEN] PR #1548：修复容错恢复后的 NCCL 通信器预热问题**
  作者: Le8r0nJames
  链接: [areal-project/AReaL PR #1548](https://github.com/areal-project/AReaL/pull/1548)
  **摘要:** 修复了集群故障重启后，首个 `ppo_update` 步骤中由于设备处于峰值负载而引发的 ~10MB 临时传输缓冲区分配超时/OOM 问题。该补丁在第一步前提前对 NCCL communicators 进行预热，显著提升了容错恢复的稳定性。

- **[OPEN] PR #1547：集成 Arena Stream Rollout**
  作者: yulangz
  链接: [areal-project/AReaL PR #1547](https://github.com/areal-project/AReaL/pull/1547)
  **摘要:** 引入了一个基于 Arena Stream 的 SWE（软件工程）Rollout 模式。该模式支持在线数据集发现、自动将 AReaL rollout 代理注册到 Arena LLM 网关，并负责启动任务、轮询结果及清理生命周期。

- **[OPEN] PR #965：VLM 张量并行与高效加载**
  作者: HwVanICI
  链接: [areal-project/AReaL PR #965](https://github.com/areal-project/AReaL/pull/965)
  **摘要:** 修改了 FSDP 引擎以支持大型稠密模型（如 Qwen3-VL-32B）的高效加载，防止模型初始化时发生 OOM。同时完善了 vLLM 环境变量配置示例，确保视觉语言模型（VLM）能够正确应用张量并行（TP）。

- **[OPEN] PR #1407：用于离线调试的 Trajectory dump/replay 机制**
  作者: Fyrgo8
  链接: [areal-project/AReaL PR #1407](https://github.com/areal-project/AReaL/pull/1407)
  **摘要:** 引入轨迹转储与重放功能。允许将 rollout 产生的 batch 序列化到磁盘，并在脱离推理引擎（Inference engine）的情况下重放。该特性成功将梯度更新与 rollout 生成解耦，极大降低了 PPO 训练循环的离线 Debug 成本。

- **[STALE/OPEN] PR #1486：支持 Ray 管理的 HTTP 代理 Worker**
  作者: HughLLiu
  链接: [areal-project/AReaL PR #1486](https://github.com/areal-project/AReaL/pull/1486)
  **摘要:** 为 Agent 或兼容 OpenAI API 的 rollout 工作流添加了基于命令的 HTTP 代理 worker 支持，修复了 `RayScheduler.fork_workers` 忽略命令参数导致无法拉起真实代理进程的问题。（注：该 PR 已被标记为 stale，处于待激活状态）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的 PR 进展可以看出，AReaL 正在解决当前大模型强化学习训练中最棘手的工程痛点：
1. **专注分布式容错与显存极限**：面对万卡规模的大规模 RLHF 训练，AReaL 在死磕底层工程细节（如 PR #1548 的 NCCL 预热，PR #965 的 FSDP 显存优化）。这表明项目具备支撑工业级海量模型训练的硬实力。
2. **拥抱 Agentic RL 与在线评估**：PR #1547 引入 SWE 环境的 Arena Stream 集成，证明 AReaL 正迅速跟进前沿的 Agent 强化学习范式，使其不局限于传统的静态语料对齐。
3. **注重研发效率（DX）**：PR #1407 提供的 Trajectory replay 功能直击 RL 算法工程师的痛点——将复杂的 Rollout 与梯度更新解耦，极大提升了训练循环 Bug 排查与算法迭代的速度。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-20 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，Issues 活跃 11 条，PR 活跃 8 条，无新版本 Release。
- **核心动向**：今日项目重心集中于**代码质量与 CI 维护**，以及**前沿训练范式的融合**。多位核心开发者（如 albertvillanova）批量修复了测试环境中的良性警告；同时，DPO 损失函数的数学一致性和多模态 GRPO 工具调用的 Bug 修复成为讨论焦点。

### 2. 版本发布
- **今日无新版本发布**。

### 3. 重点 Issues
- **[Bug] DPOTrainer `apo_down` 损失函数数学逻辑不一致** ([#6441](https://github.com/huggingface/trl/issues/6441))
  - **摘要**：开发者指出 `DPOTrainer` 在计算 `apo_down` 损失时，未能在其两个计算项中一致地应用 `f_divergence_type`。这可能会导致非默认情况下的 KL 散度计算错误。该 Issue 已有对应的修复 PR。
- **[讨论] TRL 是否支持 PipelineRL 以提升计算效率？** ([#4546](https://github.com/huggingface/trl/issues/4546))
  - **摘要**：社区探讨了将 PipelineRL（一种分离生成与训练阶段以提升 GPU 利用率的架构）引入 TRL 的可能性。这反映了当前 RLHF/RLAIF 训练中生成与训练争抢显存/算力的核心痛点。
- **[历史追踪] 训练显存溢出 (OOM) 集中排查** 
  - 包含 Qwen3-0.6B GRPO 训练 OOM ([#3678](https://github.com/huggingface/trl/issues/3678))、Qwen2.5-0.5B A100 80G DPO 训练 OOM ([#3168](https://github.com/huggingface/trl/issues/3168)) 等。社区持续关注在有限显存下使用 GRPO/DPO 时的显存优化策略（如 Flash Attention、梯度检查点）。
- **[维护] 清理 bitsandbytes 量化引发的 FutureWarning** ([#6447](https://github.com/huggingface/trl/issues/6447))
  - **摘要**：由于 bitsandbytes 底层代码更新，CI 在加载 4-bit 量化模型进行 DPO/KTO/SFT 测试时触发了良性警告，开发者已提议在新版依赖上线后移除过滤期。

### 4. 关键 PR 进展
- **🔥 [修复] 统一 `apo_down` 损失函数的 `f_divergence_type` 应用** ([PR #6444](https://github.com/huggingface/trl/pull/6444)) [CLOSED]
  - **进展**：针对 Issue #6441 的修复。确保 `apo_down` 的两项计算均使用原始的 log-ratios，修复了对非默认 reverse_kl 的支持。
- **[优化] 修复多模态 GRPO 工具调用循环中的张量形状错误** ([PR #6286](https://github.com/huggingface/trl/pull/6286))
  - **进展**：解决了 `GRPOTrainer` 在进行多轮工具调用时，VLM（视觉语言模型）输入（如 `pixel_values`）张量形状不匹配的 Bug。对支持多模态 Agent 的强化学习至关重要。
- **[新特性] 为 GOLD 训练器引入特权上下文蒸馏** ([PR #6437](https://github.com/huggingface/trl/pull/6437))
  - **进展**：允许 Teacher 模型在 GOLD 训练中看到额外的推理轨迹或特权指令，而 Student 模型不可见。进一步丰富了 TRL 的蒸馏生态。
- **[新特性] `DistillationTrainer` 支持 Prompt-Completion 数据格式** ([PR #5555](https://github.com/huggingface/trl/pull/5555))
  - **进展**：除了传统的对话格式，增加了对 Prompt + Completion 纯文本对格式的支持，降低了数据预处理的门槛。
- **[CI/测试优化] 集中清理测试警告** ([PR #6445](https://github.com/huggingface/trl/pull/6445), [PR #6446](https://github.com/huggingface/trl/pull/6446), [PR #6448](https://github.com/huggingface/trl/pull/6448))
  - **进展**：开发者集中屏蔽了 GRPO 实验性 API 以及 PEFT 权重绑定引发的测试警告，保持 CI 日志的清晰度。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿算法迭代**：TRL 不仅维护基础的 PPO/DPO，还在快速吸收和修复如 APO (Azar's Preference Optimization)、GOLD 等新算法的数学实现细节。对底层散度计算精确度的零容忍态度（如 #6441），是工业级 RL 框架的核心素养。
2. **打通多模态与 Agent 强化学习的最后一公里**：PR #6286 修复了 VLM 在多轮 Tool Call 时的 RL 更新问题。这意味着 TRL 正在从单纯的“文本对齐工具”进化为“多模态 Agent 训练底座”。
3. **高浓度的知识蒸馏生态**：从 GOLD 的特权蒸馏到 DistillationTrainer 格式扩展，TRL 正在将“大模型推理能力向小模型迁移”的各类前沿方案标准化，这是当前降低 RL 推理成本的最有效路径。

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

这里是为您生成的 verl 项目 2026-07-20 强化学习（RL）生态日报摘要：

# verl RL 生态日报 (2026-07-20)

## 1. 今日速览
- **Issues 活跃度**：过去 24 小时共有 47 条 Issue 发生更新，社区讨论热度高。
- **PR 活跃度**：过去 24 小时共有 8 条 PR 更新，核心方向高度聚焦于**底层训练性能优化**与**多硬件适配**。
- **Releases**：过去 24 小时无新版本发布。

---

## 2. 版本发布
*本周期内无新版本发布。*

---

## 3. 重点 Issues
今日社区讨论的焦点集中在多模态 Bug、底层并行策略、大模型训练耗时及异构硬件支持上：

*   **[多模态处理 Bug]** 多模态模型图像特征与 tokens 数量不匹配（`ValueError: Image features and image tokens do not match`），以及单/多模态数据在同批次 Forward 时导致卡死的问题，仍是开发者的核心痛点。
    *   [Issue #3469: Image features and image tokens do not match](https://github.com/volcengine/verl/issues/3469)
    *   [Issue #3421: 一个 mini batch 同时 forward 单模态和多模态，模型卡住了](https://github.com/volcengine/verl/issues/3421)
*   **[并行与内存管理]** 使用上下文并行（Context Parallelism）时 `max_token_len` 计算导致 OOM，以及 Megatron 使用 Chunked vs Padded Inputs 导致 Log Prob 计算不一致的底层探讨。
    *   [Issue #3415: Memory Concerns with `max_token_len` Calculation When Using Context Parallelism](https://github.com/volcengine/verl/issues/3415)
    *   [Issue #3487: Inconsistent Log Prob Calculation in Megatron When Using Chunked vs Padded Inputs](https://github.com/volcengine/verl/issues/3487)
*   **[大模型训练困境]** 使用 8xH200 训练 Qwen2.5-7B-1M 时，DAPO 算法出现极度缓慢/卡死现象，急需针对长上下文模型进行系统级调优。
    *   [Issue #3413: DAPO Training Extremely Slow](https://github.com/volcengine/verl/issues/3413)
*   **[前沿硬件与生态适配]** 社区强烈呼唤对英伟达 GB200 (aarch64 架构) 的官方支持；同时，昇腾（Ascend）NPU 环境下 vLLM V1 图模式在 Megatron 配置中无法触发的问题也受到关注。
    *   [Issue #3468: GB200 support](https://github.com/volcengine/verl/issues/3468)
    *   [Issue #3459: NPU：VLLM在V1条件下，Megatron配置无法触发图模式](https://github.com/volcengine/verl/issues/3459)

---

## 4. 关键 PR 进展
今日的 PR 更新展现出 verl 在极致压榨算力性能和重构底层的激进推进：

*   **[FSDP 性能飞跃：延迟梯度同步]** 修改 FSDP 的微批次处理逻辑，将梯度的 reduce-scatter 操作延迟到优化器实际更新前执行，大幅减少通信开销。
    *   [PR #7095: [fsdp, perf] feat: defer gradient sync during accumulation](https://github.com/volcengine/verl/pull/7095)
*   **[消除显存同步瓶颈：延迟标量指标物化]** 禁止 PPO 训练环在每个微批次中强制将标量（如 policy loss、KL 散度）通过 `.item()` 转换为 CPU 变量，消除了设备到主机的同步点，提升加速器利用率。
    *   [PR #7096: [worker, perf] feat: defer scalar metric materialization](https://github.com/volcengine/verl/pull/7096)
*   **[训练算法创新：特权上下文教师评分 (OPSD)]** 引入“在线策略自我蒸馏（OPSD）”的首部分代码：教师模型在“特权上下文（看到 ground-truth）”下，对学生模型基于普通 prompt 生成的在线 rollout 进行评分。
    *   [PR #6833: [rollout, trainer, cfg] feat: privileged-context teacher scoring for OPSD](https://github.com/volcengine/verl/pull/6833)
*   **[代码重构与 Ascend 生态]** 抽离硬件调度逻辑使 Attention padding 完全基于纯 PyTorch 实现统一，移除了冗余的 NPU flash_attn 代码；同时合入了针对 Ascend 教程的大规模文档修复。
    *   [PR #7098: Remove hardware dispatch from attention padding helpers](https://github.com/volcengine/verl/pull/7098)
    *   [PR #7094: [doc] chore: ascend doc, fix typos, punctuation...](https://github.com/volcengine/verl/pull/7094)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **深水区的性能优化**：verl 的最新 PR 体现了业界顶尖的工程敏锐度。针对多模态 RLHF 场景中大量微批次导致的通信阻塞（如 `.item()` 阻塞、梯度提前同步），其正在从代码底层逻辑出发根除这些隐性性能损耗，这对于大规模集群跑 RL 至关重要。
2. **超越 PPO 的前沿算法快速落地**：如 PR #6833 引入的 OPSD（在线策略自我蒸馏），证明 verl 已不再仅是一个稳健的 PPO/GRPO 训练脚手架，而是 RL 最新学术思想（结合 RLAIF 与自我蒸馏）的快速工程化试验田。
3. **跨硬件架构的统一野心**：面对 AI 算力的多元化（英伟达 GB200、昇腾 NPU），verl 正积极重构底层 attention 机制以解耦硬件分发逻辑。不仅积极完善 Ascend 生态，还在为下一代 ARM 架构超级算力平台做前瞻性布局。

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

**RL 日报：Gymnasium 生态追踪 (2026-07-20)**

**1. 今日速览**
* **Issue 动态**：1 条更新（已关闭）。
* **PR 动态**：6 条更新（集中于向量化环境底层修复、JAX 环境功能增强及文档优化）。
* **Release 动态**：无新版本发布。

**2. 版本发布**
* 今日无新版本发布。当前项目处于代码维护与功能迭代阶段。

**3. 重点 Issues**
* **#1645 [CLOSED] [question] Question**
  * **作者**: ElOuarary
  * **摘要**: 开发者探讨如何提取传入 Space 对象的数据。由于缺乏直接获取的方法或属性，开发者试图通过 Wrapper 寻找突破口，但发现现有 Wrapper 仅支持在已确定 observation 或 action 的值时生效。
  * **链接**: [Farama-Foundation/Gymnasium Issue #1645](https://github.com/Farama-Foundation/Gymnasium/issues/1645)

**4. 关键 PR 进展**
今日的 PR 更新主要涉及底层稳定性的提升以及与现代 RL 计算范式（如 JAX）的兼容性补全：

* **#1643 [OPEN] Fix AsyncVectorEnv NEXT_STEP autoreset reward/done dtypes**
  * **作者**: Fstarnb
  * **进展**: 修复核心 Bug。在 `AsyncVectorEnv` 的 `AutoresetMode.NEXT_STEP` 模式下，部分 worker 在自动重置路径返回 Python 原生的 `0`/`False`。与 NumPy 类型混合 Stack 时会触发 `inhomogeneous sequence error`，此 PR 统一了数据类型。
  * **链接**: [Farama-Foundation/Gymnasium PR #1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643)

* **#1502 [OPEN] feat(functional_jax): support reset options for JAX envs**
  * **作者**: aryanyk
  * **进展**: 补全功能缺口。为 `FunctionalJaxEnv` 和 `FunctionalJaxVectorEnv` 增加了对 `reset()` 中 `options` 参数的支持。此前 JAX 环境虽然接收该参数但会在底层直接忽略，该 PR 对齐了 JAX 后端与标准 Gymnasium API 的一致性。
  * **链接**: [Farama-Foundation/Gymnasium PR #1502](https://github.com/Farama-Foundation/Gymnasium/pull/1502)

* **#1577 [OPEN] Generic vector env and vector wrapper types**
  * **作者**: jorenham
  * **进展**: 深度重构。将 `VectorEnv` 及其子类转换为泛型类型（带可选类型参数以向后兼容），修复了此前讨论的 `TypeVar` 相关问题，大幅提升类型注解的严谨性。
  * **链接**: [Farama-Foundation/Gymnasium PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)

* **#1584 [OPEN] docs: add MuJoCo parameter customization tutorial**
  * **作者**: Lonny154
  * **进展**: 文档更新。新增面向初学者的 MuJoCo 参数自定义教程，通过 `HalfCheetah-v5` 演示如何使用 `gym.make` 关键字参数（如 `ctrl_cost_weight`）调整奖励组件。
  * **链接**: [Farama-Foundation/Gymnasium PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)

* **#1323 [OPEN] Add termination condition based on percentage of visited tiles for Car Racing**
  * **作者**: VincenzoPalma
  * **进展**: 环境机制增强。为 `Car Racing` 环境添加基于已访问区域百分比的终止条件（当访问特定比例的方块并完成一圈时触发 `terminated=True`）。
  * **链接**: [Farama-Foundation/Gymnasium PR #1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323)

* **#1644 [CLOSED] chore(docs): replace furo with celshast**
  * **作者**: Trenza1ore
  * **进展**: 基础设施维护。尝试将文档主题从 Furo 替换为 Celshast，目前已被关闭。
  * **链接**: [Farama-Foundation/Gymnasium PR #1644](https://github.com/Farama-Foundation/Gymnasium/pull/1644)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
* **API 标准定义者**：Gymnasium 依然是强化学习领域最核心的 Env API 规范。无论是传统算法库（如 Stable-Baselines3）还是大模型驱动的 RLHF/XLM 微调流程，Gymnasium 的接口（`reset`, `step`, `options`）都是事实上的行业标准。
* **向现代计算后端平滑演进**：从今日的 PR 走向可以看出，项目正大力整合 JAX 生态（PR #1502）。在底层硬件加速（GPU/TPU 环境并行）逐渐成为 RL 训练标配的今天，Gymnasium 对 Functional JAX 的原生支持使其在下一代超大规模 RL 训练中保持不可替代性。
* **底层工程质量极高**：针对并发场景（`AsyncVectorEnv`）中由于 Python/NumPy 类型混合导致的隐蔽崩溃（PR #1643），以及严格的 Python 泛型类型重构（PR #1577），显示了项目维护者在处理极复杂工程边界条件时的严谨，保障了上游算法库的稳定运行。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-07-20 强化学习（RL）开源生态日报摘要：PettingZoo 项目专版。

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活跃度趋于平缓。无新增 Issue，无新版本发布，仅有 1 项文档相关的 Pull Request 完成状态更新并被关闭。项目处于稳定的维护与迭代期。

### 2. 版本发布
- **无**。过去 24 小时内未发布任何新版本或补丁。

### 3. 重点 Issues
- **无**。过去 24 小时内无新增、回复或关闭的 Issue。

### 4. 关键 PR 进展
- **[CLOSED] chore(docs): replace Furo dependency with Celshast** (#1402)
  - **作者**: Trenza1ore
  - **更新时间**: 2026-07-19
  - **摘要**: 该 PR 主要针对项目的文档构建依赖进行技术基础设施调整，提出将当前的 `Furo` Sphinx 主题依赖替换为 `Celshast`。目前该 PR 已被关闭。
  - **链接**: [Farama-Foundation/PettingZoo PR #1402](https://github.com/Farama-Foundation/PettingZoo/pull/1402)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama-Foundation 旗下的核心项目之一，在当前强化学习（RL）开源生态中依然具有不可替代的基建价值：
- **多智能体 RL（MARL）的标准接口**：类似于 Gymnasium 在单智能体领域的地位，PettingZoo 提供了统一、标准的多智能体环境 API（AEC 和 Sequential 模式）。这种标准化大幅降低了研究复现的门槛。
- **完善的生态互通性**：它与 Gymnasium、SuperSuit 等周边库深度集成，能够无缝处理环境预处理（如帧堆叠、观察空间归一化），是串联整个 Farama 基础设施生态的关键节点。
- **持续的基础设施维护**：尽管短期内的代码更新频率较低，但项目团队仍在持续进行依赖管理和技术栈更新（如 PR #1402 中对文档系统的调整），以确保庞大的多智能体环境库在现代开发流中的兼容性和长期可用性。对于 MARL 研究者和工程师而言，它依然是首选的基准测试平台。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>