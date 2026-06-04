# RL 开源生态日报 2026-06-05

> 生成时间: 2026-06-04 22:27 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“分层演化”态势。
在**大语言模型（LLM）及多模态对齐**的驱动下，上层训练框架正以前所未有的速度向大规模异构分布式架构演进，持续吞噬着开发者的注意力；而**经典及具身 RL** 生态则进入平缓成熟期，底层 API 趋于标准化。整体而言，RLHF 的工程重心已从“算法复现”彻底转向“极致的通信优化、显存墙突破与跨硬件算力池调度”。

## 各项目活跃度对比

*注：以下仅统计过去 24 小时内有实际动态的项目，无活动项目（如 OpenRLHF, SB3, Tianshou 等）已省略。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 11 | 26 | 0 | 多模态对齐全面落地，AsyncGRPO 底层并发与通信重构。 |
| **verl** | 11 | 24 | 0 | 激进扩张硬件版图（AMD/Intel/Ascend），迈向 Agent RL。 |
| **slime** | 4 | 10 | 0 | 死磕显存墙，引入基于 FLOPs 的动态负载均衡。 |
| **AReaL** | 0 | 10 | 0 | 拥抱云原生架构，微服务化与 K8s 调度深入渗透。 |
| **ROCK** | 5 | 5 | 0 | 收敛底层 API 容错，强化数据集工程闭环。 |
| **Open Instruct** | 0 | 4 | 0 | 攻坚多卡分布式死锁，深化算子级底层优化。 |
| **ROLL** | 0 | 3 | 0 | 强化国产 NPU 适配，完善跨平台 CI 流程。 |
| **CleanRL** | 0 | 2 | 0 | 维持单文件纯粹性，修复向量化环境维度及 JAX 依赖。 |
| **Gymnasium** | 1 | 0 | 0 | 探讨大模型意图层与 RL 底层 API 解耦的架构标准。 |
| **rl_games** | 1 | 0 | 0 | 聚焦 Sim-to-Real 安全性，探索策略部署能力包络。 |

## 共同关注的研究与工程方向

### 研究侧信号
1. **对齐算法的演进与加速**：针对 GRPO 长期训练的稳定性瓶颈，社区正密集提出替代方案（如 DPPO、A2PO），并重构自蒸馏（SDPO）的损失函数，以加速推理阶段的策略优化。
2. **多模态与复杂交互范式拓展**：RL 训练正在摆脱纯文本限制，DPO/KTO 对视觉语言模型（VLM）的支持成为标配；同时，训练目标逐渐从单轮对齐转向多轮工具调用与环境交互（Agent RL）。
3. **具身智能的安全与意图解耦**：经典 RL 领域开始探讨在底层动作空间之上引入“意图验证层”（如 URML），以解决大模型驱动机器人的指令安全性与 Sim-to-Real 转化问题。

### 工程/基础设施侧信号
1. **异步与解耦通信机制的极限压榨**：为打破生成与训练的阻塞，各大框架（TRL、verl、slime）均在重构异步引擎，例如独立 Log Prob 服务器、突破底层 aiohttp 并发连接限制、安全排空异步生成请求等。
2. **显存与计算负载的精微优化**：面对长上下文和超大词汇表模型，通过自定义 Triton 内核（如 LCE融合）避免 Logits 显存爆炸，或将 NLL 分块大小参数化；同时，引入基于 FLOPs（考量 Attention 二次项）的动态 Micro-batch 均衡。
3. **跨异构算力的全栈适配**对齐：以 verl 和 ROLL 为代表，框架层正密集补齐对昇腾 NPU、Intel GPU 和 AMD ROCm 的支持，加速 RL 基础设施脱离单一 GPU 硬件依赖。

## 差异化定位分析
*   **算法敏捷迭代 vs 重度基建**：**TRL** 是典型的高轮转“学术-工程转换池”，快速跟进最新对齐论文；而 **verl**、**AReaL** 和 **slime** 则更偏向重度基础设施，死磕大规模分布式并行（如 Megatron 自动并行）、云原生调度（K8s Operator）及深度显存优化。
*   **大模型对齐 vs 经典具身控制**：以 **TRL**、**verl** 为首的项目全面聚焦 LLM 的 Post-training 极致性能；而 **Gymnasium** 和 **rl_games** 则坚守经典 RL 与具身智能基座，探索如何作为底层执行器接入大模型的高层规划意图。
*   **生产级闭环 vs 教学易用性**：**ROCK** 和 **AReaL** 正向微服务化与沙盒容错演进，强调业务部署闭环；相比之下，**CleanRL** 坚持极简单文件架构，侧重于学术复现与算法底层机制的透明度。

## 社区热度与成熟度
*   **高频迭代层**：**TRL** 与 **verl** 以每日 20+ PR 的活跃度领跑，社区极其活跃。它们的核心驱动力来自庞大的外围开源模型生态（如 Qwen3.5、DeepSeek-V4 等），要求框架必须极速响应底层架构变化。
*   **工程收敛层**：**slime**、**AReaL**、**ROCK** 和 **Open Instruct** 处于架构重构与代码打磨的深水区。这些项目的 PR 更多集中在解决隐藏极深的多卡死锁、梯度同步异常、显存泄漏等生产级 Bug，反映出项目正处于向大规模商业化应用迈进的成熟期。
*   **平稳维护层**：**CleanRL**、**Gymnasium**、**rl_games** 及其余无活动项目，其 API 标准与核心架构已高度成熟，日常仅需少量维护与依赖更新，展现了极高的系统稳定性。

## 值得关注的趋势信号
1. **强化学习基础设施的“云原生化”**：从 AReaL 引入 K8s StatefulSet 调度与 CLI 脚手架，到 ROCK 完善异常处理与 Ray/K8s 状态同步，大模型 RL 训练正在褪去“脚本化”外衣，全面拥抱微服务与云原生编排。
2. **MoE 与复杂并行策略的攻坚战**：针对混合专家模型（MoE）及新混合注意力架构（如 GDN）在序列/上下文并行下的梯度爆炸与通信崩溃问题，已成为各框架攻克大参数量模型训练的“入场券”。
3. **从“被动对齐”到“主动探索”的 Agent RL**：框架设计不再局限于单轮 Prompt-response，verl 和 AReaL 等引入 Agent 运行时、多轮网关以及 OpenClaw 等工具，标志着开源 RL 正为具备环境交互与规划能力的复杂智能体提供底层支持。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL（Reinforcement Learning）开源项目 2026-06-05 日报摘要：

### 1. 今日速览
- **Issues 更新**：0 条
- **PR 活跃**：3 条活跃 Pull Requests
- **Releases**：过去 24 小时内无新版本发布

### 2. 版本发布
过去 24 小时内项目无新版本发布。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
当前活跃的 PR 集中在**国产算力（Ascend NPU）生态适配**以及**推理引擎兼容性修复**：

*   **[feat] 增加 NPU CI 配置并修复测试** (作者: UsernameFull)
    *   **概述**：新增 Ascend NPU 的 GitHub Actions CI 工作流（`.github/workflows/ci-npu-test.yml`），并更新了运行时和测试用例以兼容 NPU 执行环境。
    *   **链接**：[alibaba/ROLL PR #454](https://github.com/alibaba/ROLL/pull/454)
*   **[feat] 支持 Ascend MindSpeed & Megatron 并增加 CI 测试** (作者: shun001)
    *   **概述**：在 #380 的基础上，引入基于 MindSpeed 的 NPU 初始化补丁，修复平台检测逻辑，更新 Megatron 优化器/offload 兼容性及 NPU 注意力掩码处理。同时新增了 CI 工作流及 Qwen3 DPO Megatron 示例配置。
    *   **链接**：[alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)
*   **[vLLM] 修复 vLLM Ray executor 环境变量兼容性** (作者: shun001)
    *   **概述**：解决高版本 vLLM 中 `WORKER_SPECIFIC_ENV_VARS` 导出路径变更（从 `vllm.v1.executor.ray_utils` 而非 `RayDistributedExecutor` 导出）导致的兼容性问题，同时保留对旧版本的回退支持。
    *   **链接**：[alibaba/ROLL PR #455](https://github.com/alibaba/ROLL/pull/455)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **软硬协同与异构算力支持**：随着大模型训练对算力需求的激增，ROLL 正在积极打通 Ascend NPU 等国产异构算力池。通过引入 MindSpeed 与 Megatron 的深度适配（#456），项目在 RLHF 场景下提供了脱离单一 GPU 生态的软硬件协同解决方案。
*   **核心基础设施的持续演进**：对 LLM 训练栈核心组件（如 vLLM (#455)）进行及时的 API 跟进和兼容性解耦，表明该项目紧跟上游依赖更新，致力于保障 RL 训练框架在快速迭代环境下的高可用性。
*   **完善的工程化闭环**：密集增加 NPU 相关的 CI 测试用例和工作流（#454, #456），说明项目在扩展能力的同时，对跨平台代码质量和工程稳定性有严格要求，这对于需要长时间稳定运行的 RL 任务至关重要。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK (alibaba/ROCK) RL 日报摘要 - 2026-06-05

## 1. 今日速览
过去 24 小时内，ROCK 生态保持活跃，共产生 5 条 Issues 和 5 条 PRs 更新。核心焦点集中在 **Sandbox 底层稳定性修复**（K8s/Ray Operator 状态查询的健壮性）与 **数据集/CLI 性能优化**。无新版本发布。

## 2. 版本发布
无

## 3. 重点 Issues
- **[#1065](https://github.com/alibaba/ROCK/issues/1065) [CLOSED] - Sandbox 初始化 422 错误回归**
  作者: jake11-oho 
  由于 PR #985 引入 `NonBlankStr` 校验，导致 `rocklet` 的 `/execute` 和 `/read_file` 接口在部分未传递 `sandbox_id` 的调用中出现 422 Unprocessable Entity 报错，阻断线上 Sandbox 状态获取。
- **[#1067](https://github.com/alibaba/ROCK/issues/1067) [OPEN] - K8s 404 底层异常泄露**
  作者: zhangjaycee
  当 Sandbox 在 DB 中存在但其对应 K8s BatchSandbox CRD 资源已被删除时，`K8sOperator.get_status()` 会将未捕获的 K8s 内部 `ApiException(404)` 直接抛给客户端，体验极差。
- **[#1063](https://github.com/alibaba/ROCK/issues/1063) [OPEN] - datasets tasks 性能瓶颈与功能缺失**
  作者: xdlkc
  `datasets tasks` 命令存在严重的性能浪费（冗余 HTTP 请求）及缺乏服务端分页、缓存和过滤（`--filter`）功能，影响大规模数据集处理效率。
- **[#1057](https://github.com/alibaba/ROCK/issues/1057) [OPEN] - API 错误响应结构与校验不匹配**
  作者: jake11-oho
  全局异常处理 `handle_exceptions` 包装的错误结构与 FastAPI Pydantic 的强类型 Response Model 产生冲突，存在破坏接口契约的隐患。

## 4. 关键 PR 进展
- **[#1066](https://github.com/alibaba/ROCK/pull/1066) [CLOSED] - 修复 rocklet 422 回归问题**
  修复 #1065。补全了 `RayOperator` 内部调用 `rocklet` 时缺失的 `sandbox_id` 字段传递，已合并。
- **[#1068](https://github.com/alibaba/ROCK/pull/1068) [OPEN] - 捕获 K8s CRD 不存在的异常**
  修复 #1067。在 `K8sOperator.get_status()` 中增加 try-except 捕获 `ApiException`，使 CRD 被删除时平滑返回 `None`，而非抛出原始错误。
- **[#1064](https://github.com/alibaba/ROCK/pull/1064) [OPEN] - datasets 性能优化与功能增强**
  修复 #1063。通过缓存 `oss2.Bucket` 实例及引入服务端分页，将 `datasets list` 耗时从 5.0s 缩短至 2.7s，并新增 `continuation_token` 缓存与 `--filter` CLI 支持。
- **[#1058](https://github.com/alibaba/ROCK/pull/1058) [OPEN] - 重构异常处理以兼容响应模型校验**
  修复 #1057。重构 `handle_exceptions`，确保发生异常时的返回结构符合 FastAPI 端点声明的 `RockResponse[T]` 模型定义。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **夯实 Infra 稳定性基石**：近期密集的 PR 均在收敛 Ray/K8s 底层算子调度的异常边界。在复杂 RL 训练场景中，Worker 节点的频繁启停极易触发状态不一致，ROCK 正在系统性地解决这类底层 API 容错问题，这为大规模异步 RL 训练提供了关键的容错基座。
2. **关注开发者体验与工程效能**：从 API Response 校验的严格化（#1058），到 CLI 查询耗时近乎减半的性能优化（#1064），可以看出项目正在从“功能可用”向“大规模工程化下的高效与鲁棒”演进。
3. **完善 RL 数据闭环**：针对 `datasets tasks` 推出的分页、缓存与过滤机制，直击 RL 算法在处理海量离线数据集或 Trajectory 时的性能痛点，大幅提升了数据流转生态的实用性。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL 日报摘要：slime (THUDM)
**日期**: 2026-06-05 | **项目**: [github.com/THUDM/slime](https://github.com/THUDM/slime)

## 1. 今日速览
过去 24 小时内，slime 仓库保持高度活跃，共更新了 4 条 Issues 和 10 条 Pull Requests。虽然没有新版本发布，但核心开发者集中推进了底层架构优化，特别是针对**PPO 内存优化**、**Rollout 引擎的异步处理修复**以及**动态批处理的 FLOPs 感知**等关键环节提交了高质量 PR。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
当前开放的 Issue 主要集中在多模态支持、底层依赖兼容性及内存溢出（OOM）排查上：

*   **大规模 Tool-call 训练 OOM (#1951)**
    *   **摘要**: 用户在使用 4 卡 H200 运行 `retool` 示例时，在 20~50 步后触发 CUDA OOM（尝试分配 58.15 GiB 显存）。这暴露了当前长上下文/工具调用场景下的显存管理瓶颈。
    *   **链接**: [THUDM/slime Issue #1951](https://github.com/THUDM/slime/issues/1951)
*   **Qwen3-VL 多模态模型转换支持 (#1863)**
    *   **摘要**: 社区寻求将 Qwen3-VL 系列模型从 HuggingFace 转换为 Megatron 格式进行训练的教程。目前 slime 的 scripts 中缺乏 VLM 的直接适配，反映了社区对多模态 RLHF 的强烈需求。
    *   **链接**: [THUDM/slime Issue #1863](https://github.com/THUDM/slime/issues/1863)
*   **工具调用解析器报错 (#2019)**
    *   **摘要**: 系统提示 `Unsupported tool_call_parser: qwen3`，表明当前版本的 `openai_tool_adapter` 尚未完全内置对最新 Qwen3 模型 tool call 格式的解析支持。
    *   **链接**: [THUDM/slime Issue #2019](https://github.com/THUDM/slime/issues/2019)
*   **torch_memory_saver 兼容性报错 (#2018)**
    *   **摘要**: 在运行 `build_conda.sh` 配置环境时，`torch_memory_saver` 抛出 `only hook_mode=preload supports` 异常，涉及底层 CUDA 编译与内存分配机制的冲突。
    *   **链接**: [THUDM/slime Issue #2018](https://github.com/THUDM/slime/issues/2018)

## 4. 关键 PR 进展
今日的 PR 涵盖了从核心性能优化到 Rollout 控制逻辑的重要修复，多个 PR 已合入或准备合入：

*   **[perf] PPO 核心计算显存优化 (#2011)**
    *   **进展**: Open
    *   **摘要**: 对 `ppo_utils.py` 中的 log-prob 和 entropy 交叉熵计算进行了深度重构。将两者融合为单一的 autograd Function，避免了两次 `logits` clone，显著降低了 PPO 训练的峰值显存占用。
    *   **链接**: [THUDM/slime PR #2011](https://github.com/THUDM/slime/pull/2011)
*   **[fix] Rollout 生成与显存释放竞态条件修复 (#2015)**
    *   **进展**: Open
    *   **摘要**: 修复了 `RolloutServer` 在 offload 阶段直接释放显存导致异步生成任务中断的 Bug。现在会先 drain 掉 SGLang 引擎的生成请求，再安全释放显存，提升了分布式 Rollout 的稳定性。
    *   **链接**: [THUDM/slime PR #2015](https://github.com/THUDM/slime/pull/2015)
*   **[feat] 基于 FLOPs 的动态 Micro-batch 均衡 (#2017)**
    *   **进展**: Open
    *   **摘要**: 引入 `--balance-by-flops` 参数。在动态批处理时，不再仅依靠 token 数量切分 micro-batch，而是综合考虑 Attention 机制的二次项计算成本（`coeff * L + L²`），有助于解决变长序列导致的计算负载不均问题。
    *   **链接**: [THUDM/slime PR #2017](https://github.com/THUDM/slime/pull/2017)
*   **[refactor] 轨迹管理器重构 (#2005)**
    *   **进展**: Draft
    *   **摘要**: 核心开发者 jingshenghang 正在对 Trajectory Manager 进行底层重构，这可能为后续更复杂的轨迹采样和多轮对话 RL 环境打下基础。
    *   **链接**: [THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005)
*   **[Revert] 回退 rollout_ids 重命名 (#2013)**
    *   **进展**: Closed (已合入主分支作为回退)
    *   **摘要**: 回退了将 `rollout_ids` 重命名为 `group_ids` 的 PR #1984，主要原因是与内部工具链存在冲突，体现了该项目在生产环境兼容性上的严谨性。
    *   **链接**: [THUDM/slime PR #2013](https://github.com/THUDM/slime/pull/2013)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **直击 RLHF 工程痛点**：今日的 PR 动态（#2011, #2017）表明，slime 团队正在死磕 LLM 强化学习中最棘手的工程问题——如何突破显存墙以及如何针对二次项复杂度的 Attention 进行计算感知的负载均衡。
2.  **深度整合底层推理引擎**：从 Issue #2018 和 PR #2015 可以看出，slime 深度介入了从 `torch_memory_saver` 到 `SGLang` 推理引擎的生命周期管理，旨在实现真正的“零冗余”分布式 Actor-Critic 训练，而不是停留在简单的 API 拼接。
3.  **紧跟前沿模型生态**：Issue 区对 Qwen3-VL 和 Qwen3 tool call 的高频讨论，说明 slime 正在快速响应 2025-2026 年最强开源模型的 Post-training 需求，是跟进大模型 RL 技术演进的绝佳实战参考项目。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报 (2026-06-05)

## 1. 今日速览
过去 24 小时，AReaL 项目无新增 Issue 和版本发布，但合并请求（PR）活动频繁，共有 **10 个 PR** 处于活跃更新状态。整体来看，项目重心正向**微服务化架构演进**、**前沿模型/算法支持**以及**底层训练稳定性修复**三个方向深度倾斜。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issue。

## 4. 关键 PR 进展
当前活跃的 PR 集中在架构适配、优化器引入及系统稳定性修复上，以下是核心更新：

### 🏗️ 架构演进与微服务化
- **[PR #1383](https://github.com/areal-project/AReaL/pull/1383) [OPEN]**: 引入 OpenClaw 作为 `agent_service` 运行时。为每个 RL session 独立生成网关子进程及专属 LLM 密钥，确保会话回合可精确追溯至特定 episode。
- **[PR #1375](https://github.com/areal-project/AReaL/pull/1375) [OPEN]**: 建立 v2 微服务 operator CLI 脚手架。新增 `areal` 控制台脚本，初步划分了 `inf`, `agent`, `train`, `weight-update` 四大核心命名空间。
- **[PR #1316](https://github.com/areal-project/AReaL/pull/1316) [stale, OPEN]**: 实现基于 Kubernetes 的细化调度器。使用 StatefulSet 编排 worker，集成了 Pod 健康诊断与故障回滚处理机制。

### 🚀 前沿模型与训练引擎支持
- **[PR #1384](https://github.com/areal-project/AReaL/pull/1384) [OPEN]**: 引入 Qwen3.5 系列模型支持（Dense 及 MoE 架构）。核心解决了基于其全新 GDN（Gated Delta Net）混合注意力架构在 Megatron 中的权重转换与前向传播适配。
- **[PR #1270](https://github.com/areal-project/AReaL/pull/1270) [OPEN]**: 接入 Muon 优化器。在 FSDP2 与 Megatron 双底层实现了原生分布式支持，通过 Newton-Schulz 迭代对动量缓冲区进行正交化处理以优化更新步。
- **[PR #1322](https://github.com/areal-project/AReaL/pull/1322) [OPEN]**: 引入线性交叉熵融合内核。针对 Megatron 训练添加基于 Triton 的前向/反向传播融合计算，有效避免了实例化完整的 `[tokens, vocab]` logits 导致的显存溢出。

### 🛠️ 推理部署与关键 Bug 修复
- **[PR #1233](https://github.com/areal-project/AReaL/pull/1233) [OPEN]**: 实现 FSDP 与 SGLang 基于磁盘的 LoRA 增量权重同步。修复了开启 LoRA 时 FSDP 错误保存完整模型的问题，转为仅输出 PEFT 适配器权重。
- **[PR #1385](https://github.com/areal-project/AReaL/pull/1385) [OPEN]**: 修复 LoRA 模型训练阻断性 Bug。解决了在单卡且关闭卸载（offload）的高负载场景下，SGLang 后端出现的陈旧适配器卸载失败及生命周期异常。
- **[PR #1347](https://github.com/areal-project/AReaL/pull/1347) [safe-to-test, OPEN]**: 修复归一化计算被无效 Mask 污染的隐蔽 Bug。解决了被遮蔽 Token 产生的 `NaN` 值混入并破坏有效 Reward 和 Advantage 全局归一化的稳定性问题。
- **[PR #1175](https://github.com/areal-project/AReaL/pull/1175) [stale, OPEN]**: 新增推理服务端到端性能基准测试。基于 TAU²-bench 和 OpenClaw，集成了 SGLang 指标收集和批量轨迹采集脚本。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

AReaL 目前的代码演进展现了作为**下一代大模型 RL 基础设施**的几个明确特质：
1. **紧跟前沿架构**：对 Qwen3.5 GDN 混合注意力机制和 MoE 架构的快速支持，证明其模型接入层具备极高的灵活性和前瞻性。
2. **工程极度深化**：通过引入 Triton 融合核（LCE）避免 logits 显存爆炸，以及 Native 支持 Muon 等新型优化算法，体现出其在训练底层的深度优化能力。
3. **生产级闭环演进**：Operator CLI 拆分与 K8s StatefulSet 调度器的引入，标志着项目正从单纯的“训练框架”向“云原生、微服务化”的全栈 RL 平台转型，能够更好地支持复杂 Agent 的部署与大规模并发训练。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL (Transformer Reinforcement Learning) 项目 2026-06-05 RL 日报摘要：

# 📊 TRL 开源生态日报 (2026-06-05)

**数据统计周期**：过去 24 小时  
**Issues 更新**：11 条 | **PR 更新**：26 条 | **新版本发布**：0 个

---

## 1. 今日速览
TRL 生态当前正处于**深度工程优化与多模态/新算法扩展**并行的阶段。过去 24 小时内，社区核心焦点集中在 **AsyncGRPO 的大规模并发与底层通信优化**（多个 PR 旨在解决异步 rollout 连接限制及 vLLM 权重同步问题），以及在 DPO/KO 等对齐算法中全面**支持视觉语言模型 (VLM)**。同时，A2PO 等旨在加速 LLM 推理的新一代 RL 算法已作为实验特性提交集成。

## 2. 版本发布
过去 24 小时内**无新版本发布**。社区目前处于密集的 PR 积累与 CI 测试修复阶段，预计在当前的 VLM 支持与 AsyncGRPO 重构合并后将发布新版本。

---

## 3. 重点 Issues

### 🚀 新特性与算法提案
*   **提议引入 A\*PO (A2PO) 算法**：作者 `raghulchandramouli` 提出添加基于最优优势回归的 A\*PO 算法，用于优化标准 KL 正则化 RL 目标，以加速 LLM 推理阶段的训练。([#5935](https://github.com/huggingface/trl/issues/5935))
*   **提议 DPPO (Divergence Proximal Policy Optimization)**：针对现有 GRPO 在长训练中易出现模型崩溃或奖励难以提升的问题，提出新的替代算法。([#4998](https://github.com/huggingface/trl/issues/4998))
*   **GRPO 忽略特定 Token 的 KL 散度计算**：建议在 GRPO 训练中支持指定特定 token 不参与 KL 散度计算，以解决不相关 token 导致指标异常偏高的问题。([#2933](https://github.com/huggingface/trl/issues/2933))

### 🐛 核心缺陷与隐患
*   **奖励模型数据整理器导致静默数据丢失**：`DataCollatorForRewardModelingDataset` 仅在 `examples[0]` 中检查 `margin` 键。如果数据经过 shuffle 导致首个样本无 margin，会导致后续数据静默丢失。([#5539](https://github.com/huggingface/trl/issues/5539))
*   **GKD 导致 DDP 梯度同步失效**：在 GKD 和 GOLD 训练器中启用 `use_liger_gkd_loss` 时，由于模型在前向传播前被强制解包，可能会破坏分布式训练的梯度同步。([#5282](https://github.com/huggingface/trl/issues/5282))

---

## 4. 关键 PR 进展

### ⚡ AsyncGRPO 架构与性能深度优化
针对 AsyncGRPO 在高并发场景下的瓶颈，社区提交了一系列底层数据流和通信重构：
*   **突破 aiohttp 并发连接数限制**：将 AsyncGRPO Worker 的最大连接数与 `max_inflight_tasks` 绑定，解决请求大于 100 时在底层排队导致的延迟问题。([#5946](https://github.com/huggingface/trl/pull/5946)) *(注：同目标 PR #5945, #5861)*
*   **稀疏权重同步**：在权重同步至 vLLM 时，仅对 optimizer step 后实际发生变化的 bf16 权重进行编码传输，大幅降低集群网络通信开销。([#5937](https://github.com/huggingface/trl/pull/5937))
*   **原生 vLLM 权重传输适配**：适配 vLLM `>=0.22.0` 的 4 阶段原生 RL 权重传输 API，替换旧的 2 次调用流程。([#5892](https://github.com/huggingface/trl/pull/5892))
*   **修复 Checkpoint 恢复冗余推理**：解决了断点恢复时，DataLoader 丢弃已训练 batch 却仍触发 vLLM 生成请求的资源浪费问题。([#5911](https://github.com/huggingface/trl/pull/5911))

### 👁️ 全面拥抱视觉语言模型 (VLM)
TRL 正在将其核心对齐训练器的支持范围从纯文本扩展至多模态：
*   **DPOTrainer 支持 VLM 与 Liger Kernel**：引入对多模态数据集的支持，并在 DPO 中兼容 Liger 内核以提升显存效率。([#5943](https://github.com/huggingface/trl/pull/5943))
*   **KTOTrainer 适配 VLM**：为未成对的视觉偏好数据添加新的 Data Collator，对齐 KTO 与 DPO 的多模态能力。([#5939](https://github.com/huggingface/trl/pull/5939))

### 🧪 新算法集成与训练器重构
*   **实验性 A2PO 训练器合入**：基于 Issue #5935，实现了两阶段（离线 V* 估计 + 在线单代回归）的 A2PO 训练器。([#5940](https://github.com/huggingface/trl/pull/5940))
*   **SDPO (Self-Distillation DPO) 损失函数重构**：将损失函数修改为论文中标准的凸组合形式 `(1 - w)·policy + w·distillation`，提升自蒸馏策略的稳定性。([#5883](https://github.com/huggingface/trl/pull/5883))
*   **SFTTrainer 显存优化**：针对 Qwen 等大词汇表模型，将原本硬编码的分块 NLL 大小暴露为用户可配置参数，缓解显存峰值压力。([#5829](https://github.com/huggingface/trl/pull/5829))

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **工程架构逼近工业级极限**：从今日密集的 AsyncGRPO PR 可以看出，TRL 正在彻底解决 LLM RLHF 过程中极耗时的 rollout 阶段阻塞问题。稀疏同步与原生 vLLM API 通信的结合，标志着 TRL 正在向支持千卡级别极致伸缩性的 RL 基础设施演进。
2.  **前沿算法的快速沉淀池**：无论是修复 GRPO 的缺陷，还是极速跟进 A2PO、DPPO 等最新学术论文，TRL 保持了极高活力的“学术-工程”转换率。开发者可以第一时间在该框架上复现最新的对齐策略。
3.  **统一纯文本与多模态的对齐范式**：通过逐步补齐 DPO、KTO、SFT 中的多模态视觉数据处理能力，TRL 正在打破 NLP 与 CV 的训练壁垒，使其成为构建下一代大型多模态模型 的必备底层工具。

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

# verl 项目 RL 日报摘要 (2026-06-05)

## 1. 今日速览
过去 24 小时内，verl 仓库保持高活跃度。社区共更新了 **11 个 Issues** 和 **24 个 Pull Requests**，无新版本发布。从活动轨迹来看，当前开发重心集中在**多硬件后端适配**（Ascend NPU、Intel GPU、AMD ROCm）、**Megatron 自动并行机制**以及 **Agent 框架构建**等中大型 RFC 和 feature 上。同时，针对 Qwen3.5 混合注意力架构及 MoE 模型在复杂并行策略下的 Bug 修复也是社区关注的热点。

---

## 2. 版本发布
- **最新 Releases**：无

---

## 3. 重点 Issues

- **[[Megatron][MoE] grad_norm 爆炸问题 (Context Parallelism > 1)](https://github.com/verl-project/verl/issues/6609)**：在结合 `use_remove_padding=True` 进行 CP>1 训练 MoE 模型时，`actor/grad_norm` 异常飙升至数千，导致验证评分下降。CP=1 时表现正常，该问题影响 Megatron 后端的大规模 MoE 模型训练。
  
- **[[Ascend] 昇腾社区任务发布](https://github.com/verl-project/verl/issues/6439)**：官方正式发布 verl 昇腾（Ascend）生态的社区开发任务（L1级别），涵盖基于 megatron+vllm_ascend 的多项训练配方，标志着对国产算力生态的支持正在体系化。

- **[FSDP2 CPUOffloadPolicy 导致 update_weights 崩溃](https://github.com/verl-project/verl/issues/5995) [CLOSED]**：在使用 FSDP2 混合引擎进行非 LoRA 全量权重训练（如 Qwen3.5）时，`state_dict()` 会出现设备不匹配的严重错误。已修复关闭。

- **[Qwen3.5 Ulysses 序列并行实现不完整？](https://github.com/verl-project/verl/issues/6605)**：开发者指出在 FSDP 后端下，Qwen3.5 的 Ulysses SP 实现中缺少 GDN 前 QKV 的 `all_to_all` 及 GDN 后 `attn_out` 的对应操作，引发了关于高级并行策略实现完整性的讨论。

- **[Roadmap: verl on AMD/ROCm 26Q2/Q3](https://github.com/verl-project/verl/issues/6590)**：社区发起了针对 AMD GPU (ROCm) 适配的官方路线图，旨在下一个 1-2 个季度内补齐与 NVIDIA/CUDA 乃至 Ascend NPU 的功能差距。

---

## 4. 关键 PR 进展

- **[feat: Megatron PPO 解析式自动并行](https://github.com/verl-project/verl/pull/6611)**：引入基于公式的 TP/PP/CP/EP/DP 自动搜索机制，结合内存门控，大幅降低用户配置 Megatron 后端 PPO 训练并行策略的门槛。

- **[feat: Ray 资源池的机架感知布局搜索](https://github.com/verl-project/verl/pull/6610)**：针对大规模多节点集群，新增基于物理机架拓扑的启发式节点分配方案，优化跨节点通信效率，对多机部署有显著的性能潜在收益。

- **[feat: Intel GPU (XPU) 支持](https://github.com/verl-project/verl/pull/6607) [CLOSED]**：添加了对 Intel 独立显卡的端到端训练支持（涵盖 GRPO、PPO、SFT），包括完整的 Docker 基础设施和 oneCCL 适配，进一步扩大了 verl 的异构硬件版图。

- **[feat: 独立 Log Prob 服务器支持](https://github.com/verl-project/verl/pull/5990)**：为 `fully_async` 管线解耦了 `old_log_probs` 的计算，将其独立为 Model Engine Server。避免了在 Actor 训练引擎中保存/恢复权重的开销，显著提升异步训练效率。

- **[feat: 实验性 Agent 框架与网关运行时](https://github.com/verl-project/verl/pull/6299)**：实现了多轮 Agent 风格 Rollout 的底层抽象和网关运行时，使 veRL 具备处理复杂工具调用及环境交互任务的能力，是向 Agent RL 演进的重要一步。

- **[feat: 统一跳过管理器](https://github.com/verl-project/verl/pull/6097) [CLOSED]**：实现了 RFC #5998 提出的统一跳过系统。支持在 RL 工作流中灵活管理跳过策略，极大增强了训练过程的调试灵活性。

- **[feat: DeepSeek-V4-Flash SFT 示例](https://github.com/verl-project/verl/pull/6603)**：基于 Megatron-Bridge 后端新增了 DeepSeek-V4-Flash 在 GSM8K 上的 SFT 配方，配置为 TP1/PP4/EP8 并启用了 MTP。

- **[feat: FSDP 中支持 per-sample temperature](https://github.com/verl-project/verl/pull/6110)**：解除了 `use_fused_kernels=True` 时对单一标量 temperature 的依赖，支持传入 1-D per-token 张量，满足了蒸馏或混合数据集等复杂 RL 场景的需求。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **深度绑定前沿模型架构**：从 Qwen3.5 的混合注意力序列并行到 DeepSeek-V4-Flash 的 MoE 与 MTP 支持，veRL 始终保持对 SOTA 大模型底层架构的极速跟进与训练优化。
2. **激进的异构算力全覆盖战略**：项目不再局限于 NVIDIA 生态，同一天内出现了 AMD ROCm 路线图、Intel GPU 适配以及 Ascend NPU 的 MXFP8 训练修复。veRL 正在快速演化为一个跨硬件全栈的统一 RL 训练底座。
3. **从基础 RL 走向 Agent RL**：通过引入实验性 Agent 框架和多轮工具调用 Runtime，veRL 正在突破传统的“提示-响应” RLHF 范式，向具备规划与环境交互能力的深度 Agent 强化学习基础设施演进。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-06-05）：

# 📊 Open Instruct RL 生态日报 (2026-06-05)

## 1. 今日速览
过去 24 小时内，Open Instruct 项目整体处于底层架构优化与稳定性修复阶段。无新增 Issues 或版本发布，但合入/更新了 **4 个关键 Pull Requests**。核心开发方向高度聚焦于 **OLMo-core 的训练容错性、底层计算性能优化以及基准测试工具的健壮性**。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
当前活跃的 PR 集中在解决底层死锁、引入高效算子和完善框架兼容性：

- **[#1708 [CLOSED] 修复 GRPO OLMo-core 簿记 PG 死锁及 Qwen3 奇偶校验微调](https://github.com/allenai/open-instruct/pull/1708)**
  - **作者**: finbarrtimbers
  - **进展**: 已合并，解决 GRPO 结合 OLMo-core 训练时的严重稳定性问题。
  - **技术细节**: 修复了 `reduce_metrics` 中的分布式死锁。当某些 rank 的 `self._metrics` 为空且被 `num_steps > 0` 门控时，会导致底层跳过提交引发挂起。该 PR 通过在所有 rank 上记录 `_metrics_keepalive` 来强制确保指标同步。

- **[#1714 [OPEN] 暴露 OLMo-core 的 lm_head loss_implementation 接口（如 Liger 融合线性层）](https://github.com/allenai/open-instruct/pull/1714)**
  - **作者**: ReinforcedKnowledge
  - **进展**: 新增功能，针对大模型 SFT 阶段的显存与计算优化。
  - **技术细节**: 在 `ModelConfig` 中新增 `loss_implementation` 参数，允许直接调用 Liger 的 `fused_linear` FC 层（FLCE）。此优化仅在有标签输入的模型构建中生效（如 SFT），不干扰 DPO 等需在外部计算 Loss 的 RLHF 算法。

- **[#1713 [OPEN] 现已在 OLMo-core 代码中支持混合模型](https://github.com/allenai/open-instruct/pull/1713)**
  - **作者**: finbarrtimbers
  - **进展**: 框架级功能扩展，扩展了 OLMo-core 支持的模型架构拓扑。

- **[#1684 [OPEN] 修复基准测试生成器的 CSV 表头处理逻辑并全面引入 pathlib](https://github.com/allenai/open-instruct/pull/1684)**
  - **作者**: finbarrtimbers
  - **进展**: 完善数据评估管线，修复了 `save_completion_lengths` 等函数中 CSV 表头重复写入或丢失的问题，并将文件系统操作重构为 `pathlib` 规范。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Allen AI 维护的核心训练框架，Open Instruct 的近期动态（特别是 #1708 和 #1714）释放了明确的生态信号：**项目正在向更加底层、高性能的分布式 RLHF 基建演进**。
1. **深化算子级优化**: 引入 Liger 等融合算子直接优化 SFT 阶段的显存占用，这是扩大 RL 奖励模型和策略模型参数规模的前提。
2. **攻坚分布式容错**: 彻底修复 GRPO 训练中的多卡死锁问题，表明团队在解决 RL 训练工程地狱（如异构负载下的多进程同步）上投入了大量精力。
对于希望进行大规模 LLM 对齐和底层 RL 算法二次开发的研究者而言，Open Instruct 正在提供比基础算法封装更底层的工程价值。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026年6月5日 CleanRL 项目日报摘要：

### 1. 今日速览
过去 24 小时内，CleanRL 仓库整体保持平稳。无新增代码提交、Issues 更新或版本发布，但有两项关键的修复 Pull Request 正在等待合并，重点涉及向量化环境下的动作空间 Bug 修复以及 JAX 依赖链的现代化更新。

### 2. 版本发布
无。
（注：当前仓库未发布新版本，主分支代码维持稳定状态）。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
当前有两项处于 `[OPEN]` 状态的 PR，均由贡献者 Mr-Neutr0n 提交：

*   **PR #538: [FIX] 修复 DDPG 在向量化环境下的动作空间维度问题**
    *   **摘要：** 修复了 DDPG 算法实现中的一个关键 Bug。原代码在构建网络时错误地使用了全局的 `envs.action_space`，这在向量化环境中会导致错误的 Tensor 形状。该 PR 将其修正为使用 `envs.single_action_space`，以确保准确获取单个环境的动作维度。
    *   **链接：** [vwxyzjn/cleanrl/pull/538](https://github.com/vwxyzjn/cleanrl/pull/538)

*   **PR #554: [FIX] 更新 JAX 额外依赖的版本锁**
    *   **摘要：** 解决了持续集成（CI）中的构建失败问题。由于旧版依赖（如 `jaxlib==0.4.7`）已无法在当前的 PyPI 索引中正常解析，导致基于 JAX 的测试在运行前就因环境解析错误而中断。该 PR 将 `jax`、`jaxlib`、`flax`、`optax` 和 `chex` 等核心依赖版本进行了全面刷新。
    *   **链接：** [vwxyzjn/cleanrl/pull/554](https://github.com/vwxyzjn/cleanrl/pull/554)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **单文件实现的无依赖清晰度**：CleanRL 的核心优势在于其“无黑盒”设计。算法（如 DDPG、PPO 等）均采用单文件结构实现，剥离了复杂的抽象层，这在日益复杂的 RL 工程生态中，为研究人员复现算法和底层debug（如 PR #538 中的张量维度修复）提供了极大的便利。
2. **多框架的现代生态兼容**：项目同时维护 PyTorch 与 JAX 的实现（如 PR #554 所维护的依赖项）。随着 RL 生态向高性能计算和硬件加速（TPU/GPU）演进，对 JAX 生态的持续支持使其在顶会复现和大规模实验中保持着技术前沿地位。
3. **严谨的向量化环境支持**：随着 RL 训练对采样效率要求的提升，向量化环境已成为标配。CleanRL 针对向量化环境（`single_action_space` vs `action_space`）的持续修复与优化，表明该项目在生产级可用性和学术级严谨性之间保持了良好的平衡。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 开源生态日报：rl_games
**日期**: 2026-06-05 | **分析项目**: [Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，`rl_games` 仓库整体保持平稳，无新版本发布与 PR 提交。社区侧出现 1 条高质量的新 Issue，探讨了将该强化学习训练框架与新兴的机器人意图语言（URML）进行上层集成的可能性。

### 2. 版本发布
- **最新动态**: 无新增 Release。
- **当前状态**: 项目核心训练库及 API 暂无变动，主分支处于稳定期。

### 3. 重点 Issues
- **#352 [OPEN] 探讨 URML（开放机器人意图语言）对训练策略能力边界的检查与传递**
  - **作者**: idoco2003
  - **链接**: [Denys88/rl_games Issue #352](https://github.com/Denys88/rl_games/issues/352)
  - **技术摘要**: 发起者引入了一个名为 URML (Apache-2.0 协议) 的上层工具。URML 旨在定义机器人的“意图”、校验安全性边界并进行任务派发。该 Issue 核心探讨：由于目前大量基于 Isaac Gym (Isaac-based) 的运动与操作策略是使用 `rl_games` 训练的，是否可以通过 URML 为这些训练好的策略附加一个“能力包络”，从而在推理阶段执行边界检查，确保策略在实际部署时的行为符合物理与安全约束。

### 4. 关键 PR 进展
- **最新动态**: 过去 24 小时内无活跃的 Pull Request。
- **当前状态**: 算法核心代码及底层架构近期内无修改。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **具身智能底层事实标准**: 正如 Issue #352 所反映的，`rl_games` 因其极高的采样效率和对复杂环境的鲁棒性，已成为当前业界训练基于 Isaac Gym/Isaac Sim 的运动控制与操作策略的主力框架。
2. **推动 Sim-to-Real 安全闭环**: 社区开始主动探索将其产出的 RL 策略与 URML 等安全调度语言结合。这标志着 `rl_games` 的应用场景正在从纯算法指标驱动，向符合工业级安全约束的 Sim-to-Real 部署边界演进，这对未来的机器人 RL 开源生态具有高度的参考价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# Gymnasium RL 生态日报摘要
**日期**: 2026-06-05 | **分析目标**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

### 1. 今日速览
过去 24 小时内，项目代码库无新增 PR 及版本发布，整体处于平稳维护期。社区焦点集中在跨领域架构探讨：如何将具身智能（Embodied AI）的底层控制意图与现有的 RL 环境标准 API 进行解耦与桥接。昨日仅有 1 条存量 Issue 状态更新。

### 2. 版本发布
- **无新版本发布**。
- 当前项目主干代码保持稳定，未见紧急热修复或例行版本迭代。

### 3. 重点 Issues
- **#1588 [已关闭] URML (open robot intent language): an intent layer alongside the Gymnasium env API, request for comment**
  - **作者**: idoco2003
  - **链接**: [Farama-Foundation/Gymnasium Issue #1588](https://github.com/Farama-Foundation/Gymnasium/issues/1588)
  - **分析**: 作者提议引入一种名为 URML（Apache-2.0 协议）的开源机器人意图描述语言。该机制旨在传统 Gymnasium API 之上增加一个“意图层”（Intent Layer），将自然语言指令转化为带有类型的基础元语，并在执行前结合机器人的能力清单与安全包络进行静态验证，最终下发至环境。
  - **意义**: 该 Issue 探讨了将大语言模型（LLM）的规划/指令能力与底层 RL 动作空间解耦的可行性。尽管 Issue 最终被关闭，但这种“High-level 意图验证 + Low-level Gym API 交互”的分层架构设想，为解决 RL 在真实机器人控制中的 Sim-to-Real 转化及安全性问题提供了重要思路。

### 4. 关键 PR 进展
- **无活跃 PR**。
- 过去 24 小时内未产生新的代码提交、功能请求拉取或 Bug 修复进展。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 早已超越了单一的代码库范畴，它是当前强化学习领域的 **“底层通讯协议”**（de-facto standard API）。正如 Issue #1588 所展示的，当前 RL 生态的前沿创新（如大模型驱动的智能体、真实机器人安全控制等）在构建上层抽象时，依然不可避免地需要选择 Gymnasium 的 `Env` 接口作为动作与观测的交互基准。
无论上层算法如何演进，Gymnasium 作为 RL 环境的标准化基座，其不可替代性确保了它始终是观测和验证新一代 AI 架构落地能力的最佳试金石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>