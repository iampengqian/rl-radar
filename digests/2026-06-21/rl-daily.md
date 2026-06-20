# RL 开源生态日报 2026-06-21

> 生成时间: 2026-06-20 22:22 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态已呈现出明显的“分层演化”特征。以 TRL、slime、AReaL、verl 为代表的 LLM/Agentic RL 框架占据了极高的生态位，它们正全力解决百亿/千亿参数模型在分布式训练下的算力调度与智能体复杂交互问题；以 ROCK 为代表的系统级项目，则在填补大规模异构容器调度与集群高可用监控的空白；而以 Gymnasium、rl_games 为代表的传统 RL 基础设施，则继续在底层 API 标准化、物理引擎仿真（Sim-to-Real）以及向量化环境的 MDP 正确性上深耕。

## 各项目活跃度对比
过去 24 小时内，生态内核心项目呈现出显著的活动分化。LLM 对齐与训练框架主导了当日的代码提交与问题讨论，传统 RL 库则处于平稳迭代或底层重构期。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 9 | 18 | 0 | 深度重构 vLLM 适配与异步 GRPO，全面拥抱多模态与 Agentic RL |
| **slime** | 1 | 9 | 0 | 攻坚千亿参数模型 SGLang 权重同步瓶颈，深度调优 Megatron 后端 |
| **ROCK** | 2 | 3 | 0 | 提升分布式 RL 训练底座的系统级稳定性与精细化监控能力 |
| **AReaL** | 1 | 3 | 0 | 修复大规模 RLHF 奖励验证阶段的系统级挂起隐患 |
| **verl** | 1 | 2 | 0 | 抢占多轮 Agentic RL 底层架构与多模态连续标记高地 |
| **Gymnasium** | 1 | 1 | 0 | 探索超大规模多模态上下文与传统 RL 接口的理论融合 |
| **rl_games** | 0 | 1 | 0 | 修复 Off-policy 在自动重置向量化环境下的底层状态污染 |
| **CleanRL** 等 | 0 | 0 | 0 | (OpenRLHF, SB3, Tianshou 等 8 个项目) 无显著变动 |

## 共同关注的研究与工程方向
基于各项目的 PR 与 Issue 动态，当前 RL 生态的演进方向高度趋同于以下几个核心维度的攻坚：

**研究侧信号：**
1. **Agentic RL 与多环境交互**：从单步偏好对齐全面转向多轮、长周期的智能体任务训练。例如 TRL 重构 GRPO 环境池支持异步多环境选择，verl 设计多轮 AgentLoop Rollout 的连续标记（Continuous Token）堆叠机制。
2. **多模态与跨模型知识蒸馏**：视觉语言模型（VLM）的强化学习对齐成为标配。TRL 引入了跨 Tokenizer 的 GOLD 知识蒸馏，verl 则在持续扩展多模态连续标记（VL）支持。
3. **复杂奖励函数设计**：面对复杂的逻辑推理任务，学术界正在探索更鲁棒的奖励机制，如 TRL 引入用于强化简洁推理的余弦缩放奖励，AReaL 则在攻坚数学验证奖励模型的挂起问题。

**工程/基础设施侧信号：**
1. **训练-推理引擎的通信与显存墙**：这是目前**最核心的工程痛点**。千亿级模型（如 qwen3.5 397B）在权重更新时面临严重的推理引擎挂起（SGLang ramp down）或显存失衡（vLLM 阻塞）。各框架正通过底层通信重构（如 TRL 迁移至 vLLM 原生权重同步 API）或探索 Pipeline RL 来消灭流水线气泡。
2. **异构算力调度与系统级容错**：大集群并发拉起容器的稳定性成为关键。ROCK 通过剥离客户端错误指标来降噪监控告警，AReaL 通过严格限制验证逻辑的超时时间来防止分布式死锁，verl 则在精细化打磨华为昇腾等异构芯片的共置权重同步。
3. **内存优化极致化**：为榨干 GPU 显存以喂入超大模型，内存分块与省略计算成为标配，如 TRL 引入跳过全量 `lm_head` 投影的分块 DPO Loss 计算。

## 差异化定位分析
尽管都在发力大模型 RL，但各项目的战略卡位具有显著差异：
* **TRL**：立足于 HuggingFace 生态，扮演**大模型对齐的“瑞士军刀”**。它不局限于单一底层，而是通过极高频率的零日适配（兼容各类推理引擎与新模型 Tokenizer），解决一线开发者最高频的兼容性与 OOM 痛点。
* **verl & slime**：二者均在挑战**超大规模分布式 RLHF 的性能极限**。slime 深度绑定 Megatron 高性能计算后端，作为 RL 编排大脑串联各类推理引擎；verl 则更加聚焦于底层架构范式的创新（如多轮 Agent、昇腾异构支持），抢占系统级架构制高点。
* **ROCK**：跳出算法层面，专注于**工业级高可用 RL 训练平台底座**。它解决的是容器技术栈（OCI 镜像）、API 鲁棒性与可观测性问题，是连接底层算力集群与上层 RL 算法的“操作系统”。
* **rl_games & Gymnasium**：坚守经典 RL 与物理仿真的阵地。重点解决 MDP 在极端条件（自动重置、超大规模多模态上下文）下的数据正确性与标准化问题，依然是机器人与连续控制领域不可替代的基础设施。

## 社区热度与成熟度
从今日的交互数据可以看出 RL 生态的成熟度分层：
1. **高度活跃的“攻坚期”**：TRL（27项更新）与 slime（10项更新）热度最高。它们的 Issue 和 PR 集中在处理数百亿/千亿参数模型引发的系统级 Bug（如 vLLM 阻塞、Megatron 断言失败），表明社区正在将大模型 RL 视作核心生产力工具并大规模压榨其极限。
2. **稳健演进的“成熟期”**：AReaL、verl、ROCK 等项目活动量适中，但技术探讨极深。这类项目的讨论已脱离简单的用法答疑，深入到如“挂起验证的线程级超时硬隔离”、“OCI 格式兼容”等核心工程稳定性的深水区。
3. **静默维护的“基石期”**：rl_games、CleanRL、OpenRLHF、SB3 等。如 rl_games 数月才推进一个核心 Off-policy 状态污染的修复，显示传统单机或中小规模 RL 框架的架构已高度成熟，步入功能性完善的静默期。

## 值得关注的趋势信号
1. **权重同步的“后 vLLM/SGLang 时代”重构**：自定义的权重传输正在成为性能瓶颈。TRL 迁移至 vLLM 原生 API，slime 探讨 Pipeline RL，标志着大模型 RL 框架正在彻底剥离冗余抽象，寻求与底层推理引擎的“零摩擦”对接。
2. **系统级容错成为大集群 RL 的胜负手**：当模型规模跨越千亿门槛，数学奖励函数挂起（AReaL）、错误指标污染（ROCK）、环境 Reset 状态污染（rl_games）等分布式异常态的隔离与处理，将直接决定一次百卡训练的成败。
3. **经典理论问题在 LLM 场景的“借尸还魂”**：Off-policy 经典的 `truncation` vs `termination` 处理痛点（rl_games 修复点），正在演变为 LLM Agent 环境中的“异步 reset 观测污染”（TRL 修复点）。底层经典 MDP 理论正为新一代 Agentic RL 提供关键的排障指导。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 强化学习生态日报 | 2026-06-21

## 1. 今日速览
过去 24 小时，阿里巴巴 ROCK 项目代码库活跃度集中在系统稳定性与接口规范的优化上。共有 2 条 Issues 更新（1 开 1 关），3 条 PRs 更新（均来自开发者 jake11-oho）。项目今日无新版本发布，当前核心工作聚焦于镜像探测兼容性修复与监控指标的精细化拆分。

## 2. 版本发布
* **无**（近期无新 Release 发版记录）。

## 3. 重点 Issues
*   **[#1138] [OPEN] 修复监控指标被客户端错误污染的问题**
    *   **链接**: [alibaba/ROCK Issue #1138](https://github.com/alibaba/ROCK/issues/1138)
    *   **摘要**: 目前 `BadRequestRockError`（客户端 4xxx 错误）与真实的服务端故障被统一记录在 `request.failure` 指标中。这导致监控告警产生噪音，难以精准区分客户端输入异常与服务端宕机。建议增加独立的指标以分离两类错误。
*   **[#1135] [CLOSED] 修复 Admin 端镜像探针漏报 OCI 格式镜像**
    *   **链接**: [alibaba/ROCK Issue #1135](https://github.com/alibaba/ROCK/issues/1135)
    *   **摘要**: 镜像探测接口 `_http_probe_manifest` 的 Accept 头部硬编码为 Docker V2 格式。导致已成功推送并可正常 `docker pull` 的 OCI 格式镜像在探测时返回 404。该问题已于今日修复并关闭。

## 4. 关键 PR 进展
*   **[#1139] [OPEN] 剥离 BadRequestRockError 至独立的客户端错误指标**
    *   **链接**: [alibaba/ROCK PR #1139](https://github.com/alibaba/ROCK/pull/1139)
    *   **进展**: 针对 Issue #1138 的解决方案。新增 `request.client_error` 计数器，在 `_record_metrics` 逻辑中将 `BadRequestRockError` 路由至新指标，同时保持服务端错误（如 `InternalServerRockError`）继续记入 `.failure`。显著提升 RL 训练集群的监控精度。
*   **[#1058] [OPEN] 在 RockResponse 信封中外显错误码，简化 response_model 处理**
    *   **链接**: [alibaba/ROCK PR #1058](https://github.com/alibaba/ROCK/pull/1058)
    *   **进展**: 修复 #1057。解决 FastAPI Pydantic 强类型校验破坏异常处理器包装的 `RockResponse` 错误信封的问题。该 PR 简化了 `response_model` 的处理逻辑，并在响应体头部显式暴露 error code，增强了 API 的鲁棒性。
*   **[#1136] [CLOSED] 支持镜像探针兼容 OCI manifest 格式**
    *   **链接**: [alibaba/ROCK PR #1136](https://github.com/alibaba/ROCK/pull/1136)
    *   **进展**: 针对 Issue #1135 的修复。重构了 `_http_probe_manifest` 的 Accept 头，使其支持 Docker v2、OCI、manifest list 等全部四种主流 manifest 媒体类型，消除了环境管理中的误报情况。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 项目近期的代码演进（OCI 镜像兼容、FastAPI 类型推断修复、精细化 Prometheus 指标）清晰地表明：**该项目正在向“工业级高可用 RL 训练底座”迈进**。
在强化学习场景中，算法实验高度依赖成百上千次的异构环境构建（Sandbox）与镜像分发。ROCK 团队专注于打磨容错机制和接口规范，有效解决了大集群并发拉起容器时的进程通信与监控报警痛点。对于需要构建可靠、可观测的大规模 RL 训练平台的工程团队而言，ROCK 提供了极具参考价值的系统级实践。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 强化学习开源生态日报摘要。

# 📊 slime RL 生态日报 (2026-06-21)

### 1. 今日速览
过去 24 小时内，slime 仓库活动主要集中在代码维护与底层依赖升级。无新版本发布。共更新 **1 条 Issue** 和 **9 条 PR**（包含 4 个新增 PR，以及多个历史 CI 测试与依赖适配 PR 的收敛/合并）。当前阶段，项目团队重点在优化 Megatron 后端逻辑、修复评估模式 Bug，以及跟进外部推理引擎（如 strands-sglang）的 API 破坏性更新。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
- **#2007 [OPEN] 探讨支持 Pipeline RL 以规避 SGLang 权重更新时的 ramp down 延迟** 
  - **作者**: abhanshugpt | **👍**: 0 | **评论**: 3
  - **链接**: [THUDM/slime Issue #2007](https://github.com/THUDM/slime/issues/2007)
  - **摘要**: 开发者在微调 `qwen3.5 397B` 超大模型时遇到严重的训练效率瓶颈。Profiling 显示，在权重更新阶段，SGLang servers 处理残余请求的耗时过长。作者提议引入类似其他框架的 Pipeline RL（流水线强化学习）机制，以消除权重传输时的请求挂起/降级时间。该问题直指当前百亿/千亿级大模型 RLHF 训练中的显存与通信墙痛点。

### 4. 关键 PR 进展
今日 PR 动态涵盖了核心训练逻辑修复、代码重构与示例代码升级：

- **#2109 [OPEN] 修复纯评估模式 (`--num-rollout 0`) 启动崩溃问题**
  - **作者**: EazyReal
  - **链接**: [THUDM/slime PR #2109](https://github.com/THUDM/slime/pull/2109)
  - **摘要**: 修复了文档声明支持的纯评估模式在启动时报错的 Bug。此前当 `num_rollout == 0` 时，计算出的 `train_iters` 为 0，导致 Megatron 的 `OptimizerParamScheduler` 触发 `assert lr_decay_steps > 0` 断言失败。
- **#2066 [OPEN] [megatron] 优化梯度重叠减少时的重复断言**
  - **作者**: HaozheZhang6
  - **链接**: [THUDM/slime PR #2066](https://github.com/THUDM/slime/pull/2066)
  - **摘要**: 修复 `megatron_utils/model.py` 中每个 step 都会重新设置并断言 `no_sync_func` 的性能开销问题，确保配置仅持久化设置一次，减少不必要的计算开销。
- **#2106 [OPEN] feat: 示例适配升级至 strands-sglang 0.4.2 API**
  - **作者**: Lawhy
  - **链接**: [THUDM/slime PR #2106](https://github.com/THUDM/slime/pull/2106)
  - **摘要**: 跟进了外部推理引擎的破坏性更新。将获取 token 轨迹的 API 从旧版的 `model.token_manager` 迁移至 0.4.2 版本的 `model.rollout` (`Rollout`) API。
- **#2108 [OPEN] [run-ci-megatron] 提取 `append_response_tokens` 至 Sample 层**
  - **作者**: zhuzilin
  - **链接**: [THUDM/slime PR #2108](https://github.com/THUDM/slime/pull/2108)
  - **摘要**: 面向对象的设计重构，将 token 拼接逻辑下沉到 `Sample` 组件中。
- **已关闭/合并动态 (CI & 修复)**:
  - [PR #2107](https://github.com/THUDM/slime/pull/2107) [CLOSED] 修复 RouterArgs 注册表被错误移除的问题。
  - [PR #2101](https://github.com/THUDM/slime/pull/2101) [CLOSED] 修复 tau-bench 示例中 `agent_strategy` 配置失效的 Bug。
  - [PR #2053](https://github.com/THUDM/slime/pull/2053) [OPEN] 用于长周期跑 Megatron CI 的专项测试分支。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击 LLM 规模化 RL 痛点**：从 Issue #2007 可以看出，slime 正在被直接用于挑战 `qwen3.5 397B` 级别模型的 RLHF 训练。社区正在积极探讨和解决权重更新与推理引擎（SGLang）协同工作时的“ramp down”流水线气泡问题，这代表了当前大规模 RL 工程的最前沿实践。
2. **深度适配 Megatron 等高性能计算后端**：通过近期对 `no_sync_func` 和 `OptimizerParamScheduler` 等底层机制的修复与重构，证明项目在追求高并发与计算效率的极致优化。
3. **繁荣且解耦的 Agent/推理生态**：密集的 PR 更新显示，slime 在积极跟进 SGLang、strands、camel、tau-bench 等多种前沿推理引擎和评测工具的 API 变更。这种高内聚低耦合的设计，使其能够作为“RL 编排大脑”，快速接入不断迭代的生成式 AI 基础设施。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习生态日报 (2026-06-21)**

**1. 今日速览**
过去 24 小时内，AReaL 仓库活动主要集中在核心机制的缺陷修复与生态集成上。共计处理 1 条 Issue 更新与 3 条 PR 更新，无新版本发布。核心贡献者 `EazyReal` 连续提交了两个关键修复 PR，主要针对奖励模型验证阶段的挂起问题以及生成阶段的 Tokenizer 兼容性 Bug。

**2. 版本发布**
- 今日无新版本发布。

**3. 重点 Issues**
- **#1399 [Feature] Multi-teacher distillation support**
  - **链接**: [areal-project/AReaL Issue #1399](https://github.com/areal-project/AReaL/issues/1399)
  - **摘要**: 该功能请求提议引入多教师模型蒸馏机制。目前 AReaL 仅支持单教师模型的知识蒸馏（包含 On-policy Reverse KL 等场景）。随着大模型对齐复杂度的提升，多教师蒸馏将成为扩展 AReaL 算法支持边界的重要功能。该 Issue 处于 OPEN 状态，尚在需求评估阶段。

**4. 关键 PR 进展**
- **#1426 fix(reward): bound MathVerifyWorker.verify wall-clock on a hung verification**
  - **链接**: [areal-project/AReaL PR #1426](https://github.com/areal-project/AReaL/pull/1426)
  - **摘要**: **稳定性修复**。修复了 `MathVerifyWorker.verify` 未能严格执行 `self.timeout` 限制的 Bug。此前代码在 `ThreadPoolExecutor` 上下文管理器中运行验证逻辑，导致验证挂起时超时机制失效。该修复对于保障大规模 RLHF 阶段奖励函数计算的鲁棒性至关重要。
- **#1425 fix: don't inject None into stop_token_ids when pad/eos token is None**
  - **链接**: [areal-project/AReaL PR #1425](https://github.com/areal-project/AReaL/pull/1425)
  - **摘要**: **兼容性修复**。修复了 `GenerationHyperparameters` 无条件将 `pad_token_id` 和 `eos_token_id` 注入 `stop_token_ids` 的问题。对于部分 HuggingFace Tokenizer（如基座 Llama，其 `pad_token_id` 为 `None`），此缺陷会导致 `None` 被注入整型列表，进而引发生成阶段崩溃。
- **#1360 [stale] Add rollout trace logging with trackio**
  - **链接**: [areal-project/AReaL PR #1360](https://github.com/areal-project/AReaL/pull/1360)
  - **摘要**: **观测性增强**。由 Hugging Face 成员提交，接入 `trackio` 以支持 Rollout 阶段的 Trace 日志记录。该 PR 扩展了 AReaL 现有的 `trackio` metrics 后端，为复杂 RL 训练过程提供了更加本地化、细粒度的实验追踪手段。目前处于 Stale 状态，有待进一步评审。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **直面大规模 RLHF 的工程痛点**：PR #1426 针对数学验证任务中的“挂起”问题进行超时硬隔离，表明项目在应对真实复杂奖励模型时，对分布式系统的稳定性有着极高的工程要求。
- **对主流开源生态的深度兼容与修复**：从 #1425 对缺失 Padding/EOS Token 的防御性编程，到 #1360 对 HF 实验追踪库的集成，体现了 AReaL 在底层 API 设计上正积极与 HuggingFace 生态对齐。
- **算法前沿特性的持续跟进**：Issue #1399 提出的多教师模型蒸馏，反映出 AReaL 正在从标准的单模型策略优化，向更加复杂的模型融合与知识蒸馏对齐方向演进，保持了其在开源 RL 算法栈中的技术竞争力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这里是为您生成的 2026 年 6 月 21 日 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

# 🤗 TRL 项目日报：2026-06-21

## 1. 今日速览
过去 24 小时内，TRL 仓库无新版本发布，但代码库保持了极高的活跃度，共有 **0** 个新 Release、**9** 条 Issue 更新（多为历史遗留问题修复与功能确认）以及 **18** 条 PR 更新。核心贡献者（特别是 `qgallouedec` 和 `kashif`）在底层基础设施上发力，重点推进了对 **vLLM 最新版本的原生适配**、**多模态模型支持**以及**异步/多环境 GRPO 训练**的深度重构。

## 2. 版本发布
* **无新版本发布 (0 个)**

## 3. 重点 Issues
今日更新的 Issues 已全部关闭，主要集中在训练内存异常、底层框架适配（vLLM）以及特定模型（Qwen3、LLava）的兼容性问题上：
* **[底层适配] GRPO 结合 vLLM 遭遇阻塞及内存失衡**：开发者反馈在多 GPU 节点运行 GRPO 时，vLLM 生成被阻塞（#3157），且各 rank 间存在显存严重不平衡的问题（#2805）。这表明在分布式场景下，生成与训练的资源调度仍是痛点。
  * 🔗 [Issue #3157](https://github.com/huggingface/trl/issues/3157) | [Issue #2805](https://github.com/huggingface/trl/issues/2805)
* **[模型兼容] Qwen3 工具调用生成失败**：由于 chat template 中的 `loop.last` 逻辑，导致 EOS 截断的前缀不匹配，进而引发 Qwen3 模型在 GRPO 工具调用时报错。
  * 🔗 [Issue #6124](https://github.com/huggingface/trl/issues/6124)
* **[功能增强] SFT 评估接口与训练数据集对齐**：`SFTTrainer.evaluate()` 无法像 `train()` 那样自动处理未预处理的原始格式数据集（如保留集），该易用性痛点已在 #6115 中提出并顺利关闭。
  * 🔗 [Issue #6115](https://github.com/huggingface/trl/issues/6115)

## 4. 关键 PR 进展
今日的 PR 更新展现了 TRL 在工程优化和前沿算法扩展上的重要进展，重点关注以下几项：

* **🚀 vLLM 0.22+ 原生权重同步迁移**
  随着底层推理框架的更新，TRL 正在经历一次重要的底层重构。一系列 PR 致力于将自定义的 vLLM 权重同步废弃，平滑迁移至 vLLM 0.22.1 引入的原生 API（`VLLM_SERVER_DEV_MODE`）。
  * 🔗 [PR #6119: 支持并测试 vLLM 0.22.1](https://github.com/huggingface/trl/pull/6119) | [PR #6128: 引入批量 update_weights API](https://github.com/huggingface/trl/pull/6128) | [PR #6110: 迁移至原生 vLLM 权重同步](https://github.com/huggingface/trl/pull/6110)

* **🛠️ GRPO 核心机制与异步多环境支持**
  为应对复杂的真实环境交互，正在重构 GRPO 的环境池机制，支持基于样本级别的多环境选择（PR #6002）；同时修复了异步 GRPO 中随机 `reset()` 导致的状态污染问题（PR #6072）。
  * 🔗 [PR #6001: 构建多环境工具字典](https://github.com/huggingface/trl/pull/6001) | [PR #6002: 按样本选择环境](https://github.com/huggingface/trl/pull/6002) | [PR #6072: 异步 reset 观测修正](https://github.com/huggingface/trl/pull/6072)

* **🧠 GOLD Trainer 知识蒸馏与 VLM 支持**
  为 GOLD 算法增加了 X-Token 跨 Tokenizer 知识蒸馏（支持 Projection KL 与隐藏状态均方误差），并扩展了对视觉语言模型（VLM）的同族蒸馏支持。
  * 🔗 [PR #6126: 跨 Tokenizer KD](https://github.com/huggingface/trl/pull/6126) | [PR #5969: GOLD VLM 支持](https://github.com/huggingface/trl/pull/5969)

* **💾 内存优化与新奖励函数**
  引入了 DPO 的分块计算（Chunked DPO loss），通过跳过全量 `lm_head` 投影大幅降低峰值显存（PR #5853）；同时新增了用于强化简洁推理的 `get_cosine_scaled_reward`（PR #6066）。
  * 🔗 [PR #5853: 分块 DPO Loss](https://github.com/huggingface/trl/pull/5853) | [PR #6066: 余弦缩放奖励](https://github.com/huggingface/trl/pull/6066)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的数据可以看出，TRL 不仅是 HuggingFace 生态的核心拼图，更是**大模型强化学习（RLVR / Agentic RL）工程落地的“桥头堡”**：
1. **零日适配底层算力**：项目正在积极重构与 vLLM 最新版本（0.22.1）的底层通信机制（原生权重同步）。对分布式训练与高效推理引擎的无缝衔接，保证了在大规模节点上的极高吞吐率。
2. **拥抱 Agentic RL 与多模态**：PR 中频繁出现“多环境异步支持”、“工具调用解析”、“视觉/音频模态兼容”。这意味着 TRL 正在从单一的“偏好对齐（DPO/PPO）”工具库，进化为支持智能体复杂交互的强化学习基础设施。
3. **直击大模型训练痛点**：无论是修复 Qwen3 的 Tokenizer 陷阱，还是引入 Chunked DPO 和跨 Tokenizer 蒸馏以榨干 GPU 显存，TRL 社区始终在解决一线工程师面临的最高频 OOM（内存溢出）与兼容性痛点。对于任何需要将 RL 算法落地到生产环境的团队，TRL 的代码演进方向都具有不可替代的参考价值。

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

**verl (volcengine/verl) RL 生态日报摘要**
**日期**: 2026-06-21

### 1. 今日速览
过去 24 小时内，verl 仓库整体活跃度趋于平稳，无新版本发布。共有 1 条 Issue 更新和 2 条 PR 更新。技术演进方向高度聚焦于**连续标记框架的多模态扩展**以及**多轮 AgentLoop 的底层机制优化**，同时兼顾了异构硬件（华为昇腾 Ascend）的底层通信与权重同步修复。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **#6719 [OPEN] Continuous Token Support for Multi-Turn AgentLoop Rollout**
  - **作者**: gxlvera
  - **更新时间**: 2026-06-20
  - **核心内容**: 探讨并追踪在 verl 的多轮 AgentLoop rollout 中引入“连续标记”的堆叠 PR 设计。该 Issue 详细阐述了 Agentic 多轮交互中 token 输入/输出的底层设计机制，是后续相关代码合入的基础蓝图。
  - **链接**: [verl-project/verl Issue #6719](https://github.com/volcengine/verl/issues/6719)

### 4. 关键 PR 进展
- **#6799 [OPEN] feat(ct): Multimodal Continuous Token support for VL model families**
  - **作者**: Duckycoders
  - **核心内容**: 连续标记（CT）框架的跨模态升级。基于先前的纯文本 PR，新增了对 MiMo、DeepSeek、Kimi、Nemotron4 等 4 个文本模型家族的支持，并引入了 QwenVL 和 MiMoVL 两个视觉-语言（VL）子类，扩展了 `MergeR` 相关逻辑。
  - **链接**: [verl-project/verl PR #6799](https://github.com/volcengine/verl/pull/6799)

- **#6729 [OPEN] [Ascend] fix(workers): prepare actor weights before rollout wakeup**
  - **作者**: gaohongkui
  - **核心内容**: 针对华为昇腾（Ascend）环境的 Worker 修复。在共置（colocated）的 `naive` 权重同步路径中，确保在恢复 rollout 权重之前准备好 Actor 侧权重张量（包括首次非合并 LoRA 基础同步张量），并在唤醒 rollout 权重前清空 Trainer 侧的临时缓存，同时维持异步/分离式 checkpoint 逻辑不变。
  - **链接**: [verl-project/verl PR #6729](https://github.com/volcengine/verl/pull/6729)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
verl 正在系统性地解决大模型强化学习落地中的两个核心痛点：
1. **抢占 Agentic RL 范式高地**：从 Issue #6719 和 PR #6799 可以看出，verl 正在深度重构多轮 Agent 交互时的 Token 处理机制与多模态支持。这表明项目不仅停留在传统的单轮对齐，而是为复杂的、长周期的智能体任务训练提供底层架构支撑。
2. **深入底层硬件与显存调度**：PR #6729 展示了项目对大规模分布式训练中权重同步（特别是 colocate 架构下 Actor 与 Rollout 的权重交替）和异构算力（如 Ascend）的极致打磨。这种对底层通信和显存释放的精细控制，是支撑高吞吐量 RL 训练的关键护城河。

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

# RL 日报：rl_games 生态追踪 (2026-06-21)

**项目地址**: [github.com/Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库无新增 Issue、无新增 PR 且无新版本发布。整体处于代码维护与底层重构的沉淀期，社区当前的关注焦点集中在核心算法 SAC 的底层机制修复上。

### 2. 版本发布
- **无新版本发布**。目前项目主线仍在推进内部优化，尚未触发打包发版流程。

### 3. 重点 Issues
- **无活跃 Issue**。过去 24 小时内未产生新的问题报告或讨论。

### 4. 关键 PR 进展
- **[#356] [WIP] SAC fixes and improvements** | 作者: ViktorM
  - **链接**: [Denys88/rl_games PR #356](https://github.com/Denys88/rl_games/pull/356)
  - **技术摘要**: 这是一个涉及核心经验回放（Experience Replay）正确性的深度修复 PR，于昨日（06-20）有更新动态。主要解决 Autoreset 环境（如经典 `done=True` 自动重置环境）下的回放池状态污染问题。
  - **核心改动**:
    1. **经验池状态修复**: 跳过无效的 reset step 行，在 `truncation`（截断）时存入真实的最终观测值；将 `done` 严格等同于 `terminated`（终止），截断状态则通过 bootstrap（自举）处理，并在 buffer 中新增 `truncated` 列。
    2. **观测归一化**: 修正逻辑，确保观测归一化器对每个新的环境帧只精确更新一次，避免数据泄露或重复计算。
  - **分析**: 此类改动直击 Off-policy 算法在向量化环境中的底层痛点，对提升 SAC 算法在复杂连续控制任务中的训练稳定性和数据利用率具有关键作用。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管目前处于迭代静默期，[rl_games](https://github.com/Denys88/rl_games) 依然是 RL 生态中不可或缺的基础设施：
1. **极致的吞吐性能**: 作为 NVIDIA Isaac Gym / Isaac Lab 早期首选的 RL 集成库，其底层基于 PyTorch 的算子融合和极简 API，在处理数以万计的并行环境时，依然保持着顶级的 GPU 资源利用率与训练吞吐量。
2. **聚焦底层正确性**: 从 [PR #356](https://github.com/Denys88/rl_games/pull/356) 可以看出，项目维护者正在深挖 MDP 和 Replay Buffer 在复杂向量化环境（Autoreset 机制）下的边界问题。这种针对底层机制的严谨修复，对于追求大规模稳定训练的前沿 RL 研究者具有极高价值。

---
*数据统计周期：2025-06-20 至 2026-06-21（基于 GitHub 数据生成）*

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-06-21)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库动态相对平缓，无新版本发布。共更新 1 条 Issue 与 1 条 PR。整体处于核心库的稳定期与社区文档/生态的沉淀阶段。

**2. 版本发布**
- **Releases**: 无。当前版本保持稳定。

**3. 重点 Issues**
- **#1590 [OPEN] Needle-in-a-Haystack Attentional Collapse and Multimodal Thermodynamic Traps**
  - **链接**: [Farama-Foundation/Gymnasium Issue #1590](https://github.com/Farama-Foundation/Gymnasium/issues/1590)
  - **分析**: 该 Issue 讨论了在极大规模上下文窗口下，标准 Transformer 自注意力机制带来的二次方计算成本陷阱（CAPEX trap）。作者指出，在处理高密度多模态数据时，事后量化和稀疏注意力等补丁方案无法解决核心的 token-mask 中和错误。此 Issue 涉及大模型底层架构与长上下文处理的深度前沿探讨，在标准 RL 环境接口库中属于较高维度的理论探索。

**4. 关键 PR 进展**
- **#1584 [OPEN] docs: add MuJoCo parameter customization tutorial**
  - **链接**: [Farama-Foundation/Gymnasium PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)
  - **分析**: 这是一个提升新手体验的文档类 PR。它提供了一份基于 `HalfCheetah-v5` 环境的 MuJoCo 参数自定义教程，演示了如何通过 `gym.make` 的关键字参数（kwargs）修改 `ctrl_cost_weight`（控制成本权重），并观察其对奖励（Reward）组件的影响。该 PR 昨日有更新活动，目前正在审核推进中。它进一步降低了研究者微调底层物理环境参数的门槛。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
作为 OpenAI Gym 的正式维护分支，Gymnasium 已经确立了其作为 RL 环境标准化 API 的事实基准地位。
- **API 标准化**: 当前主流的 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）均深度绑定 Gymnasium 的 API 规范（如 `reset()` 返回 tuple，增强的 `EnvSpace` 检查）。
- **底层环境集成**: 从 PR #1584 可以看出，项目在不断强化与底层物理引擎（如 MuJoCo）的最新集成与文档支持，确保研究者能够无缝进行 Sim-to-Real 等精细实验。
- **前沿接口对接**: 结合 Issue #1590，Gymnasium 也正在成为大语言模型（LLM）、多模态架构与经典 RL 环境进行接口对接的讨论阵地。持续关注该仓库能够准确把握 RL 训练接口的演进方向。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>