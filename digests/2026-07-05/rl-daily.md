# RL 开源生态日报 2026-07-05

> 生成时间: 2026-07-04 22:15 UTC | 覆盖项目: 15 个

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
当前（2026年中）强化学习开源生态已呈现出显著的分层与垂直化演进趋势：
1. **LLM 驱动的 RLHF/GRPO 成为核心主轴**：以 `verl`、`TRL`、`AReaL` 为代表的项目占据了生态绝大部分的活跃度，大模型对齐、多模态强化学习、过程奖励（PRM）成为绝对焦点。
2. **经典传统 RL 与多智能体生态趋于稳定**：以 `Gymnasium`、`PettingZoo`、`rl_games` 为代表的基础设施库 API 高度成熟，当前重心转向可视化体验优化、具身智能底层优化及高级训练范式（如 PBT）。
3. **工业级异构算力与系统级容错成为破局点**：大模型 RL 训练的算力成本倒逼框架向**国产异构算力（如华为昇腾）**和**分布式高并发调度（如 Ray 深度定制）**演进。

## 各项目活跃度对比
过去 24 小时内，各项目活跃度呈现出极强的“头部集中”效应，LLM 对齐框架占据绝对主导。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 107 | 4 | 0 | 攻坚万亿级模型 RL 训练，全面加速异构计算（NPU）适配 |
| **TRL** | 10 | 20 | 1 | 专注于多模态 RLHF 工程化，GRPO 稳定性大幅提升 |
| **AReaL** | 1 | 4 | 0 | 死磕复杂 Agent 工作流的异步通信底层与过程级奖励 |
| **Gymnasium** | 1 | 2 | 0 | 维护期，重注开发者体验与文档可视化升级 |
| **ROCK** | 1 | 1 | 0 | 解决工业级 RLHF 高并发沙箱调度的线程死锁痛点 |
| **PettingZoo** | 0 | 1 | 0 | 提升 MARL 复杂博弈环境的直观可观测性 |
| **rl_games** | 0 | 1 | 0 | 将高级训练范式（PBT）泛化至具身智能通用算力底座 |
| **ROLL** | 0 | 1 | 0 | 深度适配国产昇腾硬件生态与多模态视频解码 |
| **slime** | 0 | 1 | 0 | 收敛数据支持代码，LLM 对齐底座趋于稳定 |
| **无活动项目** | - | - | - | OpenRLHF, SB3, Tianshou, CleanRL, torchtune 等无更新 |

## 共同关注的研究与工程方向
通过对高活跃项目的聚合分析，当前行业的集体发力点明确分为研究算法与系统工程两侧：

### 研究侧信号
1. **算法层面的精细化探索**：简单地 PPO/DPO 已无法满足需求。`TRL` 引入的**自适应熵控制**（防策略崩溃）、`verl` 和 `AReaL` 探索的**过程级/阶段性奖励**（PRM 替代 Sparse Reward）、以及策略自蒸馏（OPSD）成为主流方向。
2. **多模态与多轮工具调用**：以 Qwen 系列为代表的 VLM 在 RL 阶段（特别是多轮 Tool Calling）中的张量切片、对齐与联合优化，是当前开源社区正在全力攻克的最大学术工程痛点（`TRL` 重构了索引逻辑，`verl` 解决了多模态 token 对齐）。

### 工程/基础设施侧信号
1. **推理引擎的深度定制**：生成阶段的算力/显存瓶颈促使框架与推理引擎（`vLLM`、`SGLang`）进行极深度的耦合。例如 `TRL` 和 `AReaL` 都在专门处理 `vLLM` 的 Co-locate 挂起、NaN 异常以及 Rollout 路由优化。
2. **分布式调度的资源隔离与可观测性**：随着 RL 集群规模扩大，隐藏在底层的并发缺陷被暴露。`ROCK` 和 `AReaL` 均在解决 Ray 集群中的 HTTP 代理穿透、异步事件循环冲突以及线程池资源抢占问题。

## 差异化定位分析
尽管都在做 RL，但各项目的战略定位差异显著：
- **verl (全能型基建)**：瞄准 SOTA 模型的训练上限。不仅快速跟进 DAPO 等新算法，更在死磕 Megatron-core 后端，目标是提供 DeepSeek-v3 级别千亿/万亿大模型的 RL 训练底座。
- **TRL (前沿算法转化器)**：紧跟 HuggingFace 生态，核心壁垒在于对新论文（如 Skywork 熵控制、KTO 稳定）的极速工程化，且最积极于打通多模态图像/视觉特征在 RLHF 中的闭环。
- **AReaL (Agent 与异步架构先锋)**：极度聚焦于复杂的真实 Agent 交互闭环，在阶段奖励数据结构、HTTP 代理工作流上投入巨大，适合复杂的带环境反馈的强化学习。
- **ROCK / ROLL (工业级生产线)**：更关注大集群部署的“鲁棒性”。ROCK 专注于高并发沙箱调度和系统级容错日志；ROLL 则作为阿里系的另一支撑，重点攻克国产昇腾算力的底层 Docker 部署与视频流处理。
- **rl_games (具身智能引擎)**：与传统 LLM RL 完全不同，依然牢牢占据 GPU 大规模物理仿真（Isaac 等）的生态位，向高并发连续控制发力。

## 值得关注的趋势信号
1. **“一芯独大”格局正在瓦解**：华为昇腾（Ascend NPU）正在全面渗透进大模型 RL 核心生态。从 `verl` 的异步架构和算子修复，到 `ROLL` 的底层 Docker 设备挂载，说明在面对算力封锁和高成本压力时，**跨芯片（GPU/NPU）的统一 RL 基座**正从概念走向工业落地。
2. **熵控制与过程级奖励成为标配**：大模型 RL 训练的初期阶段（解决基本对齐）已经结束；目前的高级迭代正在全面引入自适应熵控制以防模型多样性丧失，并向逐步推理反馈（Stepwise Reward）演进。
3. **社区力量的“门面化”与“向善化”**：以 `Gymnasium` 为代表的老牌标准库正在发动社区力量，用 SB3 真实求解策略替换文档中的随机动作。这表明在基础设施层，单纯的 API 提供已不够，“提供可解的环境与直观的视觉验证体验”正成为社区建设的新基准。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

这里是为您生成的 ROLL（alibaba/ROLL）项目 2026-07-05 强化学习（RL）日报摘要。

### 1. 今日速览
* **Issues 动态**：过去 24 小时无新增或更新的 Issue（0 条）。
* **PR 动态**：过去 24 小时有 1 条 PR 处于活跃更新状态。
* **Release 动态**：无新版本发布。
* **整体状态**：项目处于平稳维护期，当前开发重心集中在底层硬件（华为昇腾）的生态兼容与部署体验优化上。

### 2. 版本发布
* **无**。近期未发布新的 Release 版本。

### 3. 重点 Issues
* **无**。过去 24 小时内无新增 Issue 或已有 Issue 的讨论更新。

### 4. 关键 PR 进展
* **PR #471 [OPEN] doc: remove incompatible decord dependency and update ascend doc**
  * **作者**: UsernameFull
  * **链接**: [alibaba/ROLL PR #471](https://github.com/alibaba/ROLL/pull/471)
  * **技术摘要**：本 PR 主要修复 ROLL 在华为昇腾 Ascend A2/A3 环境下的 Docker 兼容性问题。核心改动包括：
    1. **视频解码库替换**：移除与昇腾硬件不兼容的 `decord` 库，改用 `torchvision` 作为视频读取 backend。
    2. **系统级配置优化**：更新 Docker 运行命令，增加 `nofile` ulimit 设置以解除文件描述符限制。
    3. **硬件挂载映射**：针对 A3 架构，在 Docker 设备挂载中新增了 `/dev/davinci8` 到 `/dev/davinci15`。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **国产异构算力（NPU）的先发适配**：在主流 RL 框架高度依赖 Nvidia GPU/CUDA 的当下，ROLL 正在积极推进对华为昇腾算力生态的深度适配（如 PR #471 所示）。这对于关注国产算力替代、算力多元化或受限环境下的 RL 研究人员具有极高的跟随价值。
* **多模态/视频数据处理工程实践**：在处理视频类多模态 RL 任务时，视频读取常常是环境瓶颈。ROLL 放弃 `decord` 转向 `torchvision` backend 的决策，为社区在异构硬件上处理视频流（Video streaming）提供了有价值的工程参考。
* **工业级部署细节**：项目对 Docker 容器化部署（如 `ulimit` 配置、底层计算设备 `davinci` 挂载）的持续打磨，表明该项目不仅是一个算法实验框架，更注重真实大规模分布式 RL 训练的工程落地。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态开源项目日报**
**日期**: 2026-07-05

---

### 1. 今日速览
过去 24 小时内，ROCK 项目活跃度平稳，共更新 1 条 Issue 和 1 条 Pull Request，无新版本发布。核心更新聚焦于**底层分布式调度架构的性能隔离**与**系统可观测性增强**，提交者为核心贡献者 `zhongwen666`。

### 2. 版本发布
无。近期未发布新 Release，项目当前处于主干开发的稳定性优化与缺陷修复阶段。

### 3. 重点 Issues
**#1208 [OPEN] 增加专用的 Ray 执行器线程池并改善错误可观测性**
*   **作者**: zhongwen666
*   **创建/更新**: 2026-07-04
*   **链接**: [alibaba/ROCK Issue #1208](https://github.com/alibaba/ROCK/issues/1208)
*   **核心痛点**: 
    1. **资源竞争**: 当前 Ray 操作与无关任务共享全局线程池执行器，在高并发沙箱调度负载下会导致严重的线程争用。
    2. **异常静默**: `monitor_sandbox_operation` 装饰器会将异常默默吞掉仅转化为 metrics 指标记录，没有任何日志输出。这导致在沙箱调度出现故障时，开发者极难进行根因诊断。

### 4. 关键 PR 进展
**#1209 [OPEN] 增加专用的 Ray 执行器线程池并改善错误可观测性**
*   **作者**: zhongwen666
*   **创建/更新**: 2026-07-04
*   **链接**: [alibaba/ROCK PR #1209](https://github.com/alibaba/ROCK/pull/1209)
*   **修复方案**: 旨在 Close Issue #1208。
    1. **线程池隔离**: 引入 `get_ray_executor()` 方法，返回一个配置为 `max_workers=800` 并带有专用前缀（`thread_name_prefix`）的 `ThreadPoolExecutor`。将所有 Ray 相关操作隔离到该专用线程池，从根本上消除与其他任务的调度冲突。
    2. **错误暴露**: 在沙箱操作指标装饰器中补充了 Error logging 逻辑，确保在指标记录的同时抛出/打印关键日志，恢复系统的透明可观测性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击大模型 RLHF 核心瓶颈**: 随着大模型强化学习（RLHF/RLAIF）规模的扩大，**算力调度与容错**成为核心卡点。ROCK 优先解决 Ray 线程池资源争用问题，表明项目正针对真实生产环境下的“高并发沙箱调度”进行深度硬化和性能榨取。
2. **重视工程可观测性**: RL 训练系统通常是由多节点、多进程构成的“黑盒”，debug 成本极高。PR #1209 修复了异常被 metrics 掩盖的问题，反映出维护者在提升**系统级可观测性**与**故障排查效率**上的务实态度。
3. **基础设施工程价值**: 800 并发数的专用线程池隔离机制，为需要海量短平快任务调度的 RL 生态（如环境模拟交互、沙箱代码执行）提供了极具参考价值的底层工程实践。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime 项目 RL 生态日报 (2026-07-05) **

以下是 slime (THUDM/slime) 过去 24 小时的开源项目动态摘要。

### 1. 今日速览
* 过去 24 小时内，项目整体活跃度趋于平缓：无新增 Issue，无新版本发布。
* 维护侧动态：有 1 条历史 PR 更新，主要涉及数据集（OPSD）支持功能的代码清理与状态变更。

### 2. 版本发布
* **最新 Releases**：无（[GitHub Releases 页面](https://github.com/THUDM/slime/releases)）

### 3. 重点 Issues
* 过去 24 小时无 Issue 更新。

### 4. 关键 PR 进展
* **[CLOSED] add OPSD support** (作者: HJSang)
  * **链接**: [THUDM/slime PR #2074](https://github.com/THUDM/slime/pull/2074)
  * **数据追踪**: 创建于 2026-06-13，更新于 2026-07-04。
  * **进展分析**: 该 PR 旨在为项目引入 OPSD 数据支持，已于昨日正式关闭（CLOSED）。此动作标志着该特定数据接入功能的代码审查流程已结束（无论是已合入主分支、重构还是被放弃），项目在底层支持的稳定性维护上完成了一轮迭代。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **底层功能持续整合**：尽管近期无高并发的 Issue 讨论，但项目维护者仍在持续提交和清理如 `OPSD support` 这类底层数据流的 PR。对于关注大模型强化学习训练数据预处理与对齐生态的开发者而言，THUDM/slime 依然是一个重要的基础设施追踪标的。
* **生态定位**：作为 THUDM（清华大学知识工程实验室）旗下的项目，其代码库的实现细节和数据处理标准对当前 RLHF / DPO 等对齐技术的落地实践具有较高的工程参考价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-05 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **4 个 Pull Requests** 和 **1 个 Issue**，无新版本发布。整体活动高度聚焦于底层基础设施增强、分布式异步通信修复以及大模型推理后端的适应性优化，表明项目正处于针对复杂 Agent 工作流的深度重构与功能扩展期。

### 2. 版本发布
**无**（近期未发布新版本）。

### 3. 重点 Issues
- **#1484 [BUG] V2 controllers close AsyncClient transports on a different event loop** 
  作者: jszzr | 👍: 0
  **摘要**: 报告了一个 V2 控制器中的底层异步并发缺陷。在模型训练和评估成功完成后，由于 `AsyncClient` 缓存的 keep-alive 传输通道在非归属事件循环中被强行关闭，导致 teardown（销毁）阶段抛出异常，并最终引发 trainer 进程以非零状态异常退出。该 Bug 可稳定复现，严重影响闭环流程的平滑收尾。
  🔗 [链接: areal-project/AReaL Issue #1484](https://github.com/areal-project/AReaL/issues/1484)

### 4. 关键 PR 进展
- **#1485 fix(v2): close async clients on owner event loops**
  作者: jszzr
  **摘要**: 针对 Issue #1484 的直接修复。修复了 V2 rollout 和训练控制器中 `httpx.AsyncClient` 的生命周期管理问题。通过规避 `run_async_task` 滥用新生成的 event loop，确保异步客户端始终在创建它的 owner event loop 中正确关闭，消除 teardown 阶段的跨循环崩溃问题。
  🔗 [链接: areal-project/AReaL PR #1485](https://github.com/areal-project/AReaL/pull/1485)

- **#1486 feat(infra): support Ray-managed HTTP proxy workers**
  作者: HughLLiu
  **摘要**: 基础设施重要增强。补齐了 `RayScheduler.fork_workers(...)` 对命令行参数的支持，使得 `RolloutController.start_proxy()` 能够真正在 Ray 集群中启动基于命令的 HTTP proxy workers。这对需要与 OpenAI 兼容的 Rollout 工作流或复杂 Agent 环境交互的分布式 RLHF 场景至关重要。
  🔗 [链接: areal-project/AReaL PR #1486](https://github.com/areal-project/AReaL/pull/1486)

- **#1487 feat(workflow): add stage-1 stepwise reward plumbing**
  作者: Fyrgo8
  **摘要**: 引入阶段性过程级奖励的基础管道，且保持了优秀的向后兼容性。添加了结构化的 `RewardRe...`（数据类）以支持逐步奖励反馈，而不破坏原有返回单一 `float` 标量奖励的默认行为。为后续实现更精细的 PRM（过程奖励模型）打下基础。
  🔗 [链接: areal-project/AReaL PR #1487](https://github.com/areal-project/AReaL/pull/1487)

- **#1389 feat: [R3] support R3 for vllm backend**
  作者: yuxinshan *(更新于 2026-07-04)*
  **摘要**: 为 vLLM 推理后端引入 Rollout Routing Replay (R3) 支持。这是一个存在长达一个月的长线 PR，强制依赖 vLLM 版本至少为 0.22.0。该 PR 包含了相关 pkg 层面的魔改与适配，旨在优化高并发 Rollout 阶段的路由与调度效率。
  🔗 [链接: areal-project/AReaL PR #1389](https://github.com/areal-project/AReaL/pull/1389)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克异构通信与异步调度痼疾**：通过 PR #1485 和 #1486，项目正在深度解决分布式 RL 训练中常见的“跨线程/进程 Event Loop 冲突”以及“Ray 集群与外部 HTTP 服务通信代理”的工程痛点，这在真实的 Agent 强化学习闭环中是极其核心的底层基建。
2. **向 Process-level RL 延伸**：PR #1487 表明 AReaL 正在拓展其奖励系统的维度。从传统的 Sparse Scalar Reward 扩展到 Stepwise / Process-level Reward 结构，紧跟当前 LLM 领域向复杂推理和精细化对齐演进的学术与工程趋势。
3. **深度集成与榨干高性能推理引擎**：PR #1389 显示项目团队对 vLLM 等推理框架的底层机制有极强的掌控力（要求特定版本并包含上游 Patch），通过支持 R3 等高级特性，最大化缓解了 RL 训练中生成阶段的显存与算力瓶颈。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-05 TRL (Transformer Reinforcement Learning) 开源项目日报摘要：

### 1. 今日速览
- **活跃度**：过去 24 小时内，TRL 仓库共有 10 条 Issues 更新，20 条 PR 更新，并发布了 1 个新版本。
- **核心趋势**：**多模态（VLM）**与 **GRPO 算法**的深度融合是当前开发的绝对焦点。今日有大量 PR 集中修复 GRPO 在多轮工具调用和多模态场景下的张量切片错误。同时，KTO 算法正式宣告进入稳定 API 阶段。

### 2. 版本发布
- **v1.7.1** [ [链接](https://github.com/huggingface/trl/releases) ]
  - **GRPO 稳定性修复**：修复了在非 NVLink 硬件上使用 GRPO + vLLM 共置 + PEFT 时的挂起问题 (PR #6139)。
  - **数据处理修复**：修复了 DPO/SFT 分词过程中的数据集指纹 Bug (PR #6206)。
  - **分布式训练**：将 GPU `device_ids` 正确传递给 barrier，优化多卡协同。

### 3. 重点 Issues
- **多模态强化学习崩溃** [#6274](https://github.com/huggingface/trl/issues/6274) ：社区反馈在 `Qwen3.5-2B` 上执行 GRPO 多轮工具调用（返回图像）时，`_tool_call_loop` 中 `pixel_values` 切片错误导致视觉塔崩溃。该高优问题已在今日的 PR 中被紧急修复。
- **vLLM 负对数概率（NaN）异常** [#6166](https://github.com/huggingface/trl/issues/6166) ：指出在 `vllm_mode="colocate"` 下，vLLM 返回 NaN logprob 时，代码未正确处理 `NoneType`，导致 `torch.tensor()` 报错 `RuntimeError`。
- **GRPO 自适应熵控制需求** [#3320](https://github.com/huggingface/trl/issues/3320) ：开发者呼吁引入类似 Skywork OR1 模型的动态熵正则化机制，以防止策略崩溃并鼓励探索（该 Feature request 已在今日关闭并合并实现）。

### 4. 关键 PR 进展
- **🚀 算法迭代与 API 升级**
  - **KTO 转正** [PR #6175](https://github.com/huggingface/trl/pull/6175) & [PR #6287](https://github.com/huggingface/trl/pull/6287)：将 `KTOTrainer` 从实验性 API 提升为稳定 API，并清理了历史过渡代码。
  - **GRPO 引入熵控制** [PR #6140](https://github.com/huggingface/trl/pull/6140)：为 GRPO 增加了静态和自适应熵正则化，增强模型探索能力。
  - **GOLD Trainer 知识蒸馏** [PR #6126](https://github.com/huggingface/trl/pull/6126)：为 GOLD trainer 添加了 X-Token 跨分词器知识蒸馏（KL 投影）功能。

- **🛠️ VLM 与 GRPO 核心组件修复**
  - **多模态工具调用切片大修**：今日共有 3 个相关 PR 合入或更新，彻底重构了 GRPO 在多轮工具调用中对 `pixel_values` 和 `image_grid_thw` 的索引逻辑 [PR #6286](https://github.com/huggingface/trl/pull/6286), [PR #6284](https://github.com/huggingface/trl/pull/6284)。
  - **vLLM NaN 修复** [PR #6281](https://github.com/huggingface/trl/pull/6281)：安全处理 vLLM 采样返回的 NaN logprobs，避免训练硬崩溃。
  - **Chunked NLL 兼容** [PR #6156](https://github.com/huggingface/trl/pull/6156)：修复了使用默认 `chunked_nll` 损失函数时，VLM 的 `generate()` 失败的问题。

- **🧹 底层重构与依赖**
  - [PR #6239](https://github.com/huggingface/trl/pull/6239) 停止对 vLLM 0.15 版本的支持，跟进最新推理引擎生态。
  - [PR #6178](https://github.com/huggingface/trl/pull/6178) 统一了 DPO / SFT / Reward / KTO 中的 Data Collators 逻辑，消除历史冗余代码。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **扛起 VLM-RLHF 的大旗**：从今日高频的代码提交可以看出，TRL 正在极速适配并修复视觉语言模型（VLM）在 RL 阶段（尤其是 GRPO 中的多轮 Tool Calling）的工程地狱。打通图像特征与文本生成的联合优化，是目前开源社区最痛点的一环。
2. **紧跟前沿的算法工程化**：项目不仅支持基础的 PPO/DPO，还在第一时间工程化了业界 SOTA 论文中的技术（如 Skywork 的自适应熵控制、跨 Tokenizer 的知识蒸馏等），是学术向工业落地转化的最快渠道。
3. **深度整合推理引擎**：针对 vLLM 的深度定制（如 Co-locate 机制修复、NaN 处理、版本跟随），表明 TRL 正在致力于解决 LLM 生成与训练阶段显存/算力切分的实际工程瓶颈，这是纯算法库无法替代的核心价值。

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

以下是为您生成的 verl 项目 2026-07-05 RL 日报摘要：

# verl RL 日报 (2026-07-05)

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。共计处理与更新 **107 条 Issues**（主要集中于历史核心 Bug 的彻底修复与深度讨论），更新 **4 条 PRs**，无新版本 Release。整体技术重心聚焦于 **Ascend NPU 硬件适配、异步强化学习 架构演进，以及底层算法（如 DAPO）的鲁棒性**。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
社区讨论与修复主要分为以下三大技术方向：

*   **核心算法与训练稳定性：**
    *   **KL 散度异常导致 NaN (获 11 👍)：** 开发者深入分析了 `low_var_kl` 计算导致输出连续感叹号（`!!!`）及 KL NaN 的根因，这是 RLHF 训练中的高频痛点。（[Issue #891](https://github.com/volcengine/verl/issues/891)）
    *   **DAPO 动态采样机制探讨：** 集中讨论了 `gen_batch_size` 约束失效问题，以及由于 Reward 标准差为 0 过滤掉所有样本导致的 `max_num_gen_batches` 报错及性能瓶颈。（[Issue #876](https://github.com/volcengine/verl/issues/876), [Issue #953](https://github.com/volcengine/verl/issues/953)）
    *   **多轮对话 Rollout 架构：** 社区指出当前 verl 的 multi-turn rollout 可能仅支持保留历史前缀（原版 React 模式），呼吁支持动态修改/截断前缀的模式。（[Issue #1147](https://github.com/volcengine/verl/issues/1147)）

*   **推理与分布式后端工程：**
    *   **Megatron-core 路线图 (获 17 👍)：** 持续追踪基于 verl+mcore 训练 DeepSeek-v3 级别巨型模型的进展。（[Issue #1033](https://github.com/volcengine/verl/issues/1033)）
    *   **SGLang vs vLLM：** 开发者就两者在 veRL 中的推理加速效果及差异展开了详细对比。（[Issue #1133](https://github.com/volcengine/verl/issues/1133)）
    *   **多卡/多节点训练卡死与显存溢出 (OOM)：** 集中排查了 FSDP 多节点下 Critic 梯度出现 NaN、Checkpoint 恢复时 OOM、以及 Ray/Gloo 底层通信连接失败等工程级 Bug。（[Issue #870](https://github.com/volcengine/verl/issues/870), [Issue #831](https://github.com/volcengine/verl/issues/831), [Issue #967](https://github.com/volcengine/verl/issues/967)）

*   **多模态 (VLM) 训练：**
    *   **Qwen2.5-VL 适配问题：** 解决了多模态输入 token 对齐报错，以及在 A10/V100 等 GPU 上进行 GRPO 训练时出现的 Rollout 分数为 0 及梯度异常。（[Issue #841](https://github.com/volcengine/verl/issues/841), [Issue #1109](https://github.com/volcengine/verl/issues/1109)）

## 4. 关键 PR 进展
今日的 PR 更新展现了 verl 对前沿硬件和算法的快速响应：

*   **[Ascend NPU] 异步架构与 vLLM 兼容性：** 连续提交修复（含一开一关迭代），专门针对华为昇腾 NPU 场景，适配 vLLM 0.18.x 版本，重点修复了 `RotaryEmbedding` 中 flash attention 导致的兼容性问题。（[PR #6929](https://github.com/volcengine/verl/pull/6929), [PR #6928](https://github.com/volcengine/verl/pull/6928)）
*   **[Ascend NPU] RL Insight 工具集成：** 为昇腾环境引入了专用的 RL Insight 分析工具，进一步完善了异构计算生态的可观测性。（[PR #6680](https://github.com/volcengine/verl/pull/6680)）
*   **[Algo] 引入端到端策略自蒸馏 (OPSD)：** 基于现有的 OPD / `teacher_loop` 基础设施，新增了策略自蒸馏 算法的端到端配方，为模型自我迭代提供了新路径。（[PR #6909](https://github.com/volcengine/verl/pull/6909)）

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻克万亿级模型训练壁垒：** 从 Issue 路线图（#1033）可以看出，verl 正在稳步推进 Megatron-core 后端的深度融合，其目标直指 DeepSeek-v3 级别的超大模型 RL 训练，这是当前开源 RL 框架中的稀缺能力。
2.  **异构计算与全硬件生态：** 今日多项关于 Ascend NPU 的核心 PR 表明，verl 正在积极剥离对单一 NVIDIA 生态的绝对依赖。通过底层适配 vLLM 和异步通信机制，它正在成为跨芯片（GPU/NPU）的统一 RL 基座。
3.  **对前沿算法的极速响应：** 对 DAPO 动态采样的打磨、异步 Rollout/RLHF 架构的探讨，以及对 OPSD 等新算法的即时接入，证明了 verl 不仅仅是一个训练脚本的集合，而是一个紧跟 SOTA 论文节奏、具备高度扩展性的 RL 实验工程底座。

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

# RL 日报：rl_games 生态追踪 (2026-07-05)

**项目仓库**: [Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库无新增 Issue 和版本发布，但有一项关键代码提交正在推进：社区贡献者提交了关于种群基础训练的 PR，标志着该库正尝试将 PBT 能力从特定的下游仿真器（如 Isaac）抽象至核心库层面。日常维护与功能迭代平稳进行中。

### 2. 版本发布
- **最新 Releases**: 无新增（过去 24 小时内）。

### 3. 重点 Issues
- **活跃 Issues**: 无（过去 24 小时内无新增或状态变更）。

### 4. 关键 PR 进展
- **[#359] [OPEN] Add Population Based Training (PBT) observers to rl_games core**
  - **作者**: ViktorM
  - **链接**: [Denys88/rl_games PR #359](https://github.com/Denys88/rl_games/pull/359)
  - **技术摘要**: 
    1. **架构解耦**: 将原用于机械臂训练的 `DexPBT-lineage` 实现从 Isaac 生态上游至 `rl_games/common/pbt/` 核心目录，使种群基础训练（PBT）能够支持任意计算后端，消除下游代码的重复拷贝。
    2. **配置重构**: 将原本强依赖 Isaac 的参数配置抽象为通用的 `pbt_cfg`。
    3. **合规性**: 严格保留了 BSD-3 开源协议的出处标头。
    *注: 该 PR 于 07-04 更新，目前正在等待代码审查。*

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
- **具身智能的基础设施**: [rl_games](https://github.com/Denys88/rl_games) 凭借极高的 TensorCore 利用率和异步采样架构，目前在处理大规模并行（如基于 GPU 的 Isaac Gym / Genesis 等）的连续控制任务中，依然是吞吐量最高、最成熟的 RL 算法库之一。
- **核心算法的泛理化演进**: 从 PR #359 可以看出，项目生态正在向更高级的训练范式（如 PBT 超参数/网络搜索）扩展，且极力在剥离对特定物理引擎的硬编码依赖。对于关注大规模机器人技能训练（Dexterity/Locomotion）的研究者和工程师而言，rl_games 的底层执行效率依然是当前 RL 开源生态的第一梯队选择。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-07-05)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库活动集中于文档与视觉资源优化。共有 1 条 Issue 更新，2 条 PR 更新，无新版本发布。社区成员正在积极响应官方号召，利用真实训练策略（如 SB3）替换旧的环境演示动图。

**2. 版本发布**
- 无新版本发布（核心 API 保持稳定）。

**3. 重点 Issues**
- **#1610 [OPEN] [help wanted] 为 Classic Control, Box2D 和 MuJoCo 环境提供真实策略的演示 Gif**
  - **链接**: [Farama-Foundation/Gymnasium Issue #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)
  - **摘要**: 官方维护者 `jkterry1` 提出倡议，希望社区能为经典控制、Box2D 和 MuJoCo 环境提交由真实算法（如 Stable-Baselines3）训练出的智能体演示 Gif，以替换目前文档中展示的“随机动作”演示。此举旨在直观展示环境被求解的过程，提升官方文档的专业度与阅读体验。

**4. 关键 PR 进展**
- **#1612 [OPEN] 为经典控制环境引入真实策略训练的 GIF**
  - **链接**: [Farama-Foundation/Gymnasium PR #1612](https://github.com/Farama-Foundation/Gymnasium/pull/1612)
  - **摘要**: 由 `aminehd` 提交，积极响应了 Issue #1610。该 PR 替换了 5 个经典控制环境的 GIF 动图，使用了 Stable-Baselines3 (SB3) 训练的基础策略进行渲染，使文档能展示环境被实际求解的过程，而非此前的无效试探。
- **#1613 [OPEN] 以原始分辨率 (142x197) 存储 Blackjack 扑克牌图像**
  - **链接**: [Farama-Foundation/Gymnasium PR #1613](https://github.com/Farama-Foundation/Gymnasium/pull/1613)
  - **摘要**: 由 `RewardGuard` 提交，修复了 Issue #1596。针对 `toy_text/blackjack` 环境，原先仓库存储了 444×616 分辨率的 53 张扑克牌 PNG 图片，但实际渲染时仅使用 119×166 的尺寸（由 `screen_height // 3` 决定），导致了不必要的缩放开销。该 PR 将图片直接以 142×197 的原生渲染分辨率存储，优化了资源体积与渲染逻辑。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **生态基石与门面工程**: Gymnasium 作为当今 RL 领域的标准环境接口，其 API 已经高度稳定。目前官方维护的重心正向“高质量文档与开发者体验”转移。今天展示真实策略的 PR (#1612) 和渲染底层的性能优化 PR (#1613) 就是最好的例证。对于 RL 研究者和工程师而言，一个展示直观、底层工程严谨的 Gymnasium，是快速验证自定义算法和进行基准测试的绝佳平台。
- **高度活跃的社区共建**: 从 `[help wanted]` 标签的快速落实可以看出，Farama 基金会不仅维护核心代码，还在有效引导社区力量（如整合 SB3 训练结果）来完善生态周边，保持了在开源 RL 领域的绝对统治力。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**PettingZoo RL 生态日报 | 2026-07-05**

**1. 今日速览**
过去 24 小时内，PettingZoo 仓库的整体活动聚焦于底层环境体验的升级。无新增 Issue 或版本发布，但有 1 项关键代码贡献合并进展：为 Hanabi（花火）环境引入了基于 `pygame` 的图形化渲染能力。

**2. 版本发布**
今日无新版本发布。

**3. 重点 Issues**
过去 24 小时无新增 Issue 更新或未解决的痛点讨论。

**4. 关键 PR 进展**
*   **[#1380] [OPEN] Add pygame rendering to Hanabi**
    *   **作者:** RewardGuard
    *   **链接:** [Farama-Foundation/PettingZoo PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380)
    *   **技术摘要:** 本 PR 旨在解决 Issue #1379。此前 Hanabi 环境仅能通过底层 OpenSpiel 状态提供控制台文本输出。该 PR 通过解析 OpenSpiel 的状态字符串（`str(game_state)`），并使用定制的像素风卡牌素材，利用 `pygame` 绘制完整的图形界面（包括烟花堆、玩家手牌等）。此举打破了多智能体在复杂纸牌博弈环境下的“黑盒”观测限制，提供了直观的视觉观测空间。
    *   **状态:** 已提交，等待社区 Review。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
PettingZoo 作为 Farama-Foundation 旗下的核心多智能体强化学习（MARL）基准库，其技术护城河在于对底层异构环境（如 OpenSpiel API）的标准化封装。今日为 Hanabi 引入 `pygame` 可视化渲染这一细节表明：项目生态正在从“纯粹的算法接口提供”向“提升研发与调试可视化体验”演进。对于当前的 MARL 研究者而言，观测空间的直观展示能极大降低复杂部分可观察博弈（POSG）的算法 Debug 成本，PettingZoo 依然是标准化和构建多智能体环境不可替代的基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>