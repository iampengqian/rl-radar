# RL 开源生态日报 2026-06-04

> 生成时间: 2026-06-03 22:40 UTC | 覆盖项目: 15 个

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

大模型强化学习（RLHF/RLAIF）的开源生态正经历从“算法验证”向“重工业级基础设施”的深刻转型。整体来看，当前的开源生态呈现出明显的分层：以 verl、AReaL、TRL、slime 为代表的项目正集中攻坚超大规模分布式训练的“显存墙”与“通信瓶颈”，并全面拥抱 vLLM/SGLang 等高性能推理引擎；以 ROCK 为代表的项目开始死磕 Agent 训练环境的管理与容错；而传统经典 RL 生态（如 Gymnasium、SB3）则进入平稳微调期，持续巩固底层 API 与渲染性能标准。整体生态的重心已不可逆转地向着多模态、长上下文、异构算力以及 Agent 自动化演进。

## 各项目活跃度对比

过去 24 小时内，各项目活跃度呈现出显著的梯队差异，头部项目集中在大规模 RL 对齐框架。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 13 | 33 | 0 | 攻坚 Agentic RL 稳定性，大幅扩展 Ascend/ROCm 异构算力底座 |
| **TRL** | 16 | 27 | 0 | DPO 极致显存优化， Async GRPO 架构深度解耦 GIL 并融合 vLLM |
| **AReaL** | 5 | 11 | 0 | 推动 FP8/PD 分离等极限性能优化，向云原生微服务架构演进 |
| **ROCK** | 6 | 8 | 0 | 专注强化学习沙箱环境生命周期治理与高并发 API 容错 |
| **slime** | 2 | 2 | 0 | 算子级融合降显存，敏捷适配 H200/GB200 新型算力节点 |
| **Open Instruct** | 0 | 4 | 0 | 深度结合数据工程与课程学习，底层原生支持 Hybrid MoE 架构 |
| **OpenRLHF** | 0 | 1 | 0 | 精细化修复 Agent 多轮调用场景下的 token 惩罚计算 |
| **Gymnasium** | 1 | 1 | 0 | 优化渲染引擎初始化，提升并行模拟器启动性能 |
| **PettingZoo** | 1 | 1 | 0 | 维持多智能体（MARL）标准 API 定义与文档维护 |
| **SB3** | 1 | 0 | 0 | 完善向量化环境回调机制的工程文档 |
| **其他 (CleanRL等)** | 0 | 0 | 0 | 过去 24 小时无实质代码或社区动态 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agent 与多轮工具调用对齐**：复杂环境下的 RL 训练正成为核心课题。OpenRLHF 和 verl 都在致力于解决多轮交互中“模型自主生成”与“环境返回”token 的精确解耦与奖励分配问题。
2. **课程学习与难度适应**：Open Instruct 连续合入基于难度图的课程学习采样器，表明业界正试图通过动态调整 Prompt 难度来缓解复杂推理任务中的奖励稀疏问题。
3. **理论校正与前沿变体**：TRL 社区对 RLOO 与 GRPO 中不同 KL 散度近似实现的理论校准，以及引入 IcePop 等前沿损失函数，说明主流框架对算法严谨性的要求正在提高。

**工程/基础设施侧信号：**
1. **“显存墙”的微观级爆破**：长上下文和超大模型训练逼迫框架进行极其底层的优化。典型代表包括 TRL 删除 DPO 中冗余的 `.contiguous()`，slime 将 Log-prob 与 Entropy 融合为单一 `autograd Function`，以及 verl 采用分块 `gather-logsumexp` 替代全量物化。
2. **Colocate 架构与异构推理引擎融合**：各大框架均在深度绑定 vLLM/SGLang。TRL 通过将 Rollout 剥离至独立进程规避 GIL；AReaL 实现了基于 SGLang 的 Prefill-Decode (PD) 分离架构，并完成 BF16 到 FP8 的在线量化流转。
3. **异构算力普惠与新型硬件抢占**：verl 建立统一的硬件抽象层以兼容 NPU/ROCm，slime 快速修复了 Colocate 模式在 GB200 节点上的部署 Bug，说明 RL 基础设施正在摆脱对单一 CUDA 生态的绝对依赖。

## 差异化定位分析

* **verl vs AReaL vs TRL (全栈大模型 RL 基座之战)**：verl 和 AReaL 明显面向千卡级工业超大规模集群，侧重于 Megatron 底层适配、跨芯片架构路由和微服务化改造；TRL 则延续了 HuggingFace 生态的极客与普适特性，重点发力于单卡/中小规模集群极度渴求的显存优化与异构通信API改造。
* **ROCK (RL 环境基建)**：不同于上述训练框架，ROCK 专注于解决 Agent 训练中“环境”这一环的云原生沙箱化管理，填补了开源生态在大规模并发容器调度和文件清理上的空白。
* **slime vs OpenRLHF (极致性能与工程严谨)**：slime 表现出极强的算力榨取倾向（死磕底层算子与最新架构显卡适配）；OpenRLHF 则表现出极高的工程严谨性，专注于 PPO 算法在复杂 Masking 下的细粒度逻辑修复。
* **Gymnasium/SB3 vs LLM RL (经典与前沿的分野)**：以 Gymnasium 和 SB3 为代表的经典库目前处于成熟维护期，提供标准化的 API 接口和单智能体算法，与当前聚焦于大模型分布式对齐的框架已形成明确的技术代际和场景区隔。

## 社区热度与成熟度

* **高速迭代期（高活跃）**：verl、TRL 和 AReaL 保持着极高的 PR 与 Issue 吞吐量。它们吸引了大量外部开发者提交 RFC 和底层架构重构，社区正处于新特性的快速聚集与激烈论证阶段（如 TRL 关于 KL 散度的讨论、verl 的 AMD 路线图）。
* **稳健维护期（高成熟）**：ROCK、OpenRLHF、Open Instruct 和 slime 的更新多由内部核心团队或特定高阶开发者主导，提交粒度精准且边界清晰，展现出成熟工业级项目的问题定位与响应能力。
* **标准沉淀期（平缓期）**：Gymnasium、PettingZoo、Stable Baselines3 等项目已完成跑马圈地，当前活跃度集中在文档完善和跨库适配的边缘性能优化，属于不可替代的基础设施底座。

## 值得关注的趋势信号

1. **RL 正在全面“Agent 化”**：随着多轮工具调用成为常态，RL 框架正在经历从“单轮对齐”向“复杂 Agent Loop”的架构重构。KV Cache 复用、环境沙箱生命周期管理以及超时容错，将成为下一阶段 RL 框架的标配能力。
2. **Colocate 与异步解耦成为主流架构**：为了压榨算力，将训练引擎（Megatron/FSDP）与推理引擎置于同一集群甚至进行进程级解耦，并辅以在线量化进行权重流转，正在成为大规模 RL 训练的最优解。
3. **开源生态全面布局非 NVIDIA 算力**：以 verl 明确提出 AMD ROCm 和 Ascend NPU 路线图为代表，开源 RL 框架正作为急先锋，推动百亿/千亿参数模型对齐算力向多元化、国产化硬件生态迁移。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-06-04 ROCK（alibaba/ROCK）RL 生态开源日报摘要：

# 📊 ROCK 项目日报 - 2026年6月4日

## 1. 今日速览
过去 24 小时内，ROCK 项目的社区及内部研发活动主要集中在 **Sandbox（沙箱）生命周期管理**与 **API 健壮性修复**上。共处理了 6 条 Issues 更新（2 条新建，4 条关闭）和 8 条 PR 更新（1 条新提交，7 条合并/关闭）。今日无新版本发布。

## 2. 版本发布
- **最新 Releases**: 无新增版本。

## 3. 重点 Issues
今日报出的核心问题均与 Sandbox API 底层机制相关：
- **Ray Actor 状态查询崩溃 ([#1061](https://github.com/alibaba/ROCK/issues/1061))**：在执行 `sandbox.stop()` 后，由于 Ray Actor 被显式 kill，后续对 `RayOperator.get_status()` 的调用会因找不到 Actor 而抛出未捕获的异常。
- **API 异常处理与模型不匹配 ([#1057](https://github.com/alibaba/ROCK/issues/1057))**：Sandbox HTTP API 的 `handle_exceptions` 违背了 FastAPI 端点声明的 `response_model`，绕过了 Pydantic 的数据验证。

## 4. 关键 PR 进展
今日有多项重要 Bug 修复及特性合并，显著提升了系统稳定性：
- **修复 Ray Actor 查找异常 ([#1062](https://github.com/alibaba/ROCK/pull/1062))**：针对 Issue #1061，通过包裹 `async_ray_get_actor()` 并增加 try-except 块，在 Actor 不存在时安全返回 None。
- **统一 API 错误信封格式 ([#1058](https://github.com/alibaba/ROCK/pull/1058))**：针对 Issue #1057，重构了 `handle_exceptions` 以确保错误响应符合标准 `RockResponse` 结构，修复了 Pydantic 校验失败的问题。
- **修复文件上传状态返回 ([#1060](https://github.com/alibaba/ROCK/pull/1060))**：修复了文件成功上传至沙箱后，`UploadResponse` 错误地返回 `success=false` 的逻辑 Bug。
- **支持从 Dockerfile 启动沙箱 ([#1043](https://github.com/alibaba/ROCK/pull/1043))**：一项正在审查中的特性 PR，允许通过 `Image.from_dockerfile` 直接从代码构建并启动 Sandbox，极大简化了自定义环境的打包流程。
- **优化调度器文件清理性能 ([#967](https://github.com/alibaba/ROCK/pull/967))**：将清理逻辑从 `-exec rm` 切换为更高效的 `find -delete`，并增加了严格的路径校验以防误删系统目录。
- **新增后台沙箱自动清理与删除 API ([#1038](https://github.com/alibaba/ROCK/pull/1038))**：引入了 Sandbox `/delete` 端点及 STOPPED 到 DELETED 的状态流转机制。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 目前正在快速补齐 **“环境生命周期管理”** 的短板。从今日的 PR 动向可以看出：
1. **开发体验 (DX) 逼近开箱即用**：`Image.from_dockerfile` ([#1043](https://github.com/alibaba/ROCK/pull/1043)) 和上传状态修复 ([#1060](https://github.com/alibaba/ROCK/pull/1060)) 的组合，意味着算法工程师将能够用极低的代码量完成“本地环境构建 -> 远端沙箱启动 -> 数据交互”的完整闭环。
2. **生产级可靠性提升**：通过解决 Ray Actor 状态异常 ([#1062](https://github.com/alibaba/ROCK/pull/1062)) 和规范 API 错误包装 ([#1058](https://github.com/alibaba/ROCK/pull/1058))，ROCK 正在消除分布式场景下环境失控的隐患。
3. **资源回收机制日趋完善**：Scheduler 性能优化 ([#967](https://github.com/alibaba/ROCK/pull/967)) 与 Sandbox 自动删除机制 ([#1038](https://github.com/alibaba/ROCK/pull/1038)) 表明 ROCK 在应对大规模并行 RL 训练时，对僵尸容器和孤儿文件的治理能力正在增强。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime（THUDM/slime）项目 2026-06-04 RL 日报摘要：

### 1. 今日速览
过去 24 小时，slime 仓库共处理/更新了 2 个 Issues 和 2 个 PR，无新版本发布。整体动态集中在 **重度显存优化（显存峰值削减）** 以及 **异构/新一代算力节点（H200, GB200）的适配修复**。这反映了当前大模型强化学习（RLHF/RLAIF）工程落地的两大核心痛点：巨大 Token 序列带来的 OOM 问题，以及复杂 Colocate 部署模式在新型硬件上的弹性调度需求。

### 2. 版本发布
* **无新版本发布**。

### 3. 重点 Issues
* **[OOM 错误] Retool 示例在多卡训练中出现巨大显存分配异常**
  * **链接**: [THUDM/slime Issue #1951](https://github.com/THUDM/slime/issues/1951)
  * **详情**: 用户在使用 `examples/retool` 进行 4×H200 分布式训练时，在 20~50 步后触发 `torch.OutOfMemoryError`。异常日志显示系统尝试分配高达 **58.15 GiB** 的显存块。这暴露了当前框架在处理长上下文或特殊 Token 计算 `compute_log_probs` 时，Logits 张量克隆或并行切分策略可能存在显存峰值激增的隐患。

* **[环境构建] `build_conda.sh` 中 SGLANG 版本号与 Commit 哈希脱节**
  * **链接**: [THUDM/slime Issue #2009](https://github.com/THUDM/slime/issues/2009) *(已关闭)*
  * **详情**: 社区指出构建脚本中用于部署底层推理引擎的 `SGLANG_COMMIT` 和 `SGLANG_VERSION` 不匹配。该 Issue 已被提交者关闭，推测已在主分支或本地环境中修正对齐。

### 4. 关键 PR 进展
* **[核心优化] 融合 Log-prob 与 Entropy 计算，大幅降低 PPO 显存峰值**
  * **链接**: [THUDM/slime PR #2011](https://github.com/THUDM/slime/pull/2011)
  * **详情**: 针对上述 Issue #1951 暴露的显存问题，社区贡献了极具价值的底层优化。该 PR 重写了 `slime/utils/ppo_utils.py`，将 Log-prob 和 Entropy 的交叉熵计算融合为单一 `autograd Function`。通过仅保留**一份** logits 工作副本（而非两次克隆），并使反向传播复用 Megatron 的底层算子，极大地缓解了 PPO 训练过程中的显存压力。

* **[部署修复] 修复 Colocate 模式在非 8 卡节点（如 GB200）的 GPU 数量推断**
  * **链接**: [THUDM/slime PR #2012](https://github.com/THUDM/slime/pull/2012)
  * **详情**: 修复了 Actor-Rollout Colocate 模式下的硬编码缺陷。此前框架默认 `--num-gpus-per-node` 为 8，导致在单节点 GPU 数量不同的新硬件架构（例如 **4× GB200 节点**）上部署崩溃。该 PR 将节点 GPU 数量的推断逻辑改为直接从 `actor_num_gpus_per_node` 继承，提升了多卡部署的鲁棒性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 项目目前展现出了极高的工程实战价值，它的演进直击当前 RL for LLM 生态的最深处痛点：
1. **直面“显存墙”**：RLHF/PP0 训练中 Reference Model、Reward Model、Actor 和 Critic 的显存消耗是业界公认难题。Slime 社区正在通过算子融合（如 PR #2011）等底层优化手段，直接 tackling 58GiB 级别的 OOM 崩溃，这对于长上下文 RL 训练至关重要。
2. **前沿硬件的敏捷响应**：项目紧随算力迭代，从 Issue 中 139.81 GiB 显存的 **H200** 集群，到 PR 中针对 **GB200** 节点的适配，证明了其作为新一代 RL 基础设施的生命力。
3. **深度整合主流生态**：项目与 Megatron 和 SGLang 的深度绑定与协同调试，说明它不仅是一个独立的算法库，更是构建在大规模分布式训练和高效推理引擎之上的生态胶水，对于研究千卡级别 RL 训练的研发团队具有极高的参考和复用价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 | 2026-06-04

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高活跃度。社区共更新了 **5 条 Issues**（其中 2 条为新发起的开放议题）和 **11 条 Pull Requests**（无新增合并记录）。项目当前处于 2026 年 H2 路线图规划与底层架构快速迭代期，重心明显向 **系统底层性能优化（FP8、PD 分离）、新架构模型适配（Qwen3.5）以及微服务化（v2 CLI）** 倾斜。

## 2. 版本发布
**无新版本发布**。项目目前仍处于密集的开发与 PR 积累阶段，预计随着 H2 路线图的推进，将在后续整合发布新版本。

## 3. 重点 Issues
- **[Roadmap] 2026 H2 Milestones** [#1381](https://github.com/areal-project/AReaL/issues/1381)
  - **概要**：维护者发布了 2026 年下半年的开发路线图，邀请社区参与贡献。这标志着项目下一阶段的重心正式确立，为外部开发者提供了明确的 High-impact 切入点。
- **[Bug] 训练中断恢复时的 Staleness 管理失效** [#1388](https://github.com/areal-project/AReaL/issues/1388) *(已关闭)*
  - **概要**：用户报告在从中断的训练中恢复时，Staleness 管理机制出现故障。该问题已定位并关闭，对依赖容错机制的长期 RL 训练任务的稳定性至关重要。
- **[Feature] V1 FSDP BF16 训练配合 SGLang FP8 Rollout** [#1378](https://github.com/areal-project/AReaL/issues/1378)
  - **概要**：计划在 SGLang 推理阶段启用 FP8 块级量化，同时保持 FSDP 的 BF16 训练不变。这是目前大模型 RL 训练中极具性价比的显存/通信优化方向。

## 4. 关键 PR 进展
系统架构与性能优化相关 PR 占据主导：

- **feat(megatron): 支持 Qwen3.5 dense + MoE 训练/推理** [#1384](https://github.com/areal-project/AReaL/pull/1384)
  - **核心**：通过 `megatron-bridge` 适配 Qwen3.5 系列模型，特别是针对其新的 GDN (Gated Delta Net) 混合注意力架构进行了权重转换与前向传播的重度适配。
- **feat[v1]: FP8 权重转移 (FSDP BF16 -> SGLang FP8)** [#1379](https://github.com/areal-project/AReaL/pull/1379)
  - **核心**：实现从 BF16 训练到 FP8 推理的在线量化和权重流转，通过 NCCL 广播前完成量化，降低权重同步开销。
- **feat[v2]: 支持 PD 分离架构** [#1364](https://github.com/areal-project/AReaL/pull/1364)
  - **核心**：实现 Prefill-Decode 分离 (DP=2, TP=n)。将推理阶段拆分为专用的角色，显著解决自回归解码期间的内存受限与 GPU 算力闲置问题。
- **feat: v2 微服务操作器 CLI 脚手架** [#1375](https://github.com/areal-project/AReaL/pull/1375)
  - **核心**：建立 v2 微服务架构的 CLI 基础（包含 inf, agent, train, weight-update 命名空间），表明 AReaL 正在向更易于编排的云原生/微服务系统演化。
- **feat(distillation): 基于策略的蒸馏** [#1376](https://github.com/areal-project/AReaL/pull/1376)
  - **核心**：引入使用独立 Teacher 推理引擎（vLLM/SGLang）的 On-policy 蒸馏，取代原先的 train-engine teacher 路径，大幅降低显存开销。
- **fix[v2]: 修复控制器读取 RTensor 轨迹的崩溃问题** [#1387](https://github.com/areal-project/AReaL/pull/1387)
  - **核心**：解决 v2 推理服务数据代理远程化导致 Controller 端接收到 `dict-of-RTensor` 时出现的 `AttributeError` / `TypeError` 严重错误。
- **Fix LoRA 模型训练** [#1385](https://github.com/areal-project/AReaL/pull/1385)
  - **核心**：修复在单卡 24GB 显存且未开启卸载的严苛场景下，SGLang 后端 LoRA RL 训练过程中的 Adapter 生命周期管理问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **逼近工程极限的系统优化**：AReaL 目前正在攻坚大模型 RLHF/Post-training 最痛点的工程瓶颈。从支持 **FP8 在线量化流转** 到 **Prefill-Decode 推理解耦架构**，它直接回应了业界在大规模部署 RL 训练时面临的显存墙和通信开销问题。
2. **紧跟前沿模型与算法架构**：第一时间适配 Qwen3.5 的 GDN 混合注意力架构（[#1384](https://github.com/areal-project/AReaL/pull/1384)），并推进 On-policy 蒸馏（[#1376](https://github.com/areal-project/AReaL/pull/1376)），证明该项目具备极强的算法敏锐度与底层工程落地能力。
3. **向微服务与高可用演进**：引入 v2 Microservice Operator CLI（[#1375](https://github.com/areal-project/AReaL/pull/1375)）和社区治理分离（[#1386](https://github.com/areal-project/AReaL/pull/1386)），表明 AReaL 正在从一个单一的 RL 框架向可扩展、易编排、高容错（修复中断恢复 [#1388](https://github.com/areal-project/AReaL/issues/1388)）的现代化 RL 基础设施转型。对于需要长期、稳定运行复杂 RL 实验的团队而言，具有极高的研究与实践价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL (huggingface/trl) 项目 2026-06-04 RL 日报摘要：

# TRL 强化学习开源生态日报 (2026-06-04)

## 1. 今日速览
过去 24 小时内，TRL 仓库活跃度较高，没有新版本发布。社区共更新了 **16** 条 Issues 和 **27** 条 Pull Requests。今日的核心动态集中在**显存极致优化**（DPO 训练器冗余调用剔除）、**异步 GRPO 的底座架构升级**（vLLM 权重同步机制），以及经典算法（RLOO）与前沿变体（IcePop）的理论实现校对。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[OPEN] SFT 训练 Llama-3.2 严重 Bug**：[#5138](https://github.com/huggingface/trl/issues/5138)。开发者报告在使用最新版 TRL（不再使用 `DataCollatorForCompletionOnly` 计算 loss）对 Llama-3.2-3B-Instruct 进行 SFT 时出现训练异常。该 Issue 获得了维护者高度关注，目前已有 24 条评论。
- **[OPEN] RLOO 与 GRPO 的 KL 散度实现不一致**：[#5889](https://github.com/huggingface/trl/issues/5889)。开发者指出 `RLOOTrainer` 使用的是一阶 log ratio，而 `GRPOTrainer` 使用的是 Schulman 二阶近似（方差更低且始终 $\ge 0$）。这引发了关于算法理论正确性的讨论。
- **[OPEN] 引入双向 MIS IcePop Loss**：[#4735](https://github.com/huggingface/trl/issues/4735)。社区提议为 TRL 引入被小米 MiMo-V2-Flash 等先进模型采用的 IcePop 损失函数（双向掩码重要性采样），以增强 MIS 的实现。

## 4. 关键 PR 进展
- **大幅降低 DPO 峰值显存**：由维护者提交的 [#5930](https://github.com/huggingface/trl/pull/5930) 及开发者提交的 [#5882](https://github.com/huggingface/trl/pull/5882) 和 [#5926](https://github.com/huggingface/trl/pull/5926)（已关闭，被官方采纳重构）。移除了 `DPOTrainer` 中不必要的 `.contiguous()` 调用，并主动 `del` 中间 logits 张量，预计可节省约 15% 的峰值显存。
- **Async GRPO 架构与 vLLM 深度融合**：
  - [#5749](https://github.com/huggingface/trl/pull/5749) (已合并)：将异步 Rollout 工作器移至独立进程，彻底解决生成/打分循环与 Autograd 引擎的 GIL 竞争问题。
  - [#5892](https://github.com/huggingface/trl/pull/5892) & [#5932](https://github.com/huggingface/trl/pull/5932)：依托上述架构，开始对接 vLLM >= 0.22.0 的原生 RL 权重传输 API，尝试通过稀疏补丁 实现异构显存间的高效增量权重同步。
- **完善文档与测试基准**：
  - [#5931](https://github.com/huggingface/trl/pull/5931)：明确了 RLOO 算法使用采样 log-ratio KL 估计器的文献依据，提升代码的理论可读性。
  - [#5813](https://github.com/huggingface/trl/pull/5813)：补全了经典的 SFT $\rightarrow$ RM $\rightarrow$ PPO 全流程 TL;DR 示例及 Reward Model 诊断工具。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在经历从“算法复现库”向“**高性能分布式 RLHF 基础设施**”的深度演进。
当前阶段，无论是处理百亿参数模型的显存挤压（如主动剔除无用张量和冗余内存连续化），还是攻克 LLM 在 RL 训练中的多进程调度瓶颈（如将 Rollout 从线程剥离至进程以绕过 GIL，并探索 vLLM 的原生 RL API），TRL 的主分支都在持续产出极具工业落地价值的核心特性。对于关注大模型对齐底座技术的工程师而言，其 Async GRPO 架构的演进轨迹和 DPO 显存优化方案是极具前瞻性的技术风向标。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 项目日报：2026-06-04

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体处于平稳迭代期。无新增 Issue，无新版本发布。代码仓有 1 个处于 `OPEN` 状态的 Bugfix PR 正在推进，重点优化了 PPO 训练中关于过长序列惩罚（overlong penalty）的 token 长度计算逻辑。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#1246 Fix overlong penalty action token length](https://github.com/OpenRLHF/OpenRLHF/pull/1246)**
  - **作者**: Jiang020609
  - **状态**: OPEN (创建于 2026-05-30，昨日有更新)
  - **核心改动**: 针对关联的 Bug 议题 (#1243)，修复了长度惩罚模块中的计算偏差。在处理 tool response 或 action tokens 时，当 `action_mask` 可用时，该 PR 确保将这些非交互的辅助 token 从“可训练的 response 长度计算”中剥离，从而防止由于工具返回的冗长输出导致不合理的 overlong penalty。
  - **测试情况**: 提交者已在本地通过了核心模块单测 (`pytest tests`) 及预提交格式检查。

## 5. 为什么这个项目在当前 RL 生态值得持续关注
大模型进入 Agent 与复杂工具调用（Tool-use）时代后，RLHF（特别是 PPO 算法）的工程细节面临新的挑战。今日的 PR #1246 释放了一个明确的技术信号：**在多轮对话或 Agent 场景下，奖励模型和惩罚机制必须精确区分“模型自主生成的 token”与“外部环境/工具返回的 token”**。

OpenRLHF 能够快速响应这类底层的长度计算越界问题，体现了该框架在处理**细粒度 Action Masking** 和 **PPO 序列级奖励分配**上的工程严谨性。对于致力于研究复杂 RL 流程（如 RL on Agents, Multi-turn RLHF）的开发者和研究人员而言，OpenRLHF 目前依然是工业级标准实现中最具参考价值且响应迅速的开源基座之一。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 | 2026-06-04

## 1. 今日速览

过去 24 小时，verl 生态保持高频迭代：Issues 更新 13 条，PR 更新 33 条，无新版本发布。当前社区的核心精力集中在 **Agentic RL 的工程稳定性（长上下文、多轮工具调用）**、**底层训练引擎的显存/通信优化** 以及 **异构硬件（Ascend NPU / AMD ROCm）的全面适配**。

---

## 2. 版本发布
无新版本发布。目前主线分支仍处于 v0.8.0 的积极开发阶段。

---

## 3. 重点 Issues

**Agent RL 与工具调用稳定性**
* [#6252](https://github.com/verl-project/verl/issues/6252) `[OPEN]` Qwen3.5/3.6 35B-A3B 在多轮工具调用 RL 训练中（约 80-130 step 后）出现工具调用格式异常导致训练崩溃。该 Issue 活跃度极高（13 条评论），直击当前 Agentic RL 训练的核心痛点。
* [#6583](https://github.com/verl-project/verl/issues/6583) `[OPEN]` 基于 vLLM 的长 Agent Loop 推理中，出现 `RPC call to sample_tokens timed out`。报告环境为 256 张 H200 上的 Qwen3-VL-27B，暴露了超大规模异步 Rollout 的通信瓶颈。

**系统架构演进 (RFCs & Roadmaps)**
* [#6577](https://github.com/verl-project/verl/issues/6577) `[OPEN]` 提出 **Dynamo KV-aware Routing 与 KVBM Multi-tier KV Cache**。旨在解决异步 RL 中 Prefix 复用带来的显存与调度开销，是提升多轮 Agent 推理性能的关键前瞻提案。
* [#6575](https://github.com/verl-project/verl/issues/6575) `[OPEN]` 提议在完全异步训练管线中，通过 Reward Queue 解耦推理（Generation）与奖励计算，进一步打破串行瓶颈。
* [#5998](https://github.com/verl-project/verl/issues/5998) `[OPEN]` 提议建立统一的 `SkipManager` 系统，以节省调试阶段的时间与空间，显著提升 RL 实验迭代效率。

**异构硬件支持**
* [#6590](https://github.com/verl-project/verl/issues/6590) `[OPEN]` 发布 **verl on AMD/ROCm 26Q2/Q3 路线图**，开始补齐与 NVIDIA/Ascend 之间的生态 parity 差距。
* [#6580](https://github.com/verl-project/verl/issues/6580) `[OPEN]` 昆仑 Ascend 910B 上训练 Qwen3-30B-A3B 出现 Rollout 异常。

**多模态与其它 Bug**
* [#6592](https://github.com/verl-project/verl/issues/6592) `[OPEN]` VL 模型的 `image_patch_size` 被错误硬编码为 14（部分模型为 16），导致 `torch.cat` 崩溃。
* [#6523](https://github.com/verl-project/verl/issues/6523) `[CLOSED]` 修复了 vLLM 在权重更新后未能重置多模态缓存（multimodal caches）的关键问题。

---

## 4. 关键 PR 进展

**核心功能与 Bug 修复**
* [#6434](https://github.com/verl-project/verl/pull/6434) `[OPEN]` **[Agent]** 引入推理解析器，在工具提取前剥离 `<think blocks>`。从根本上解决了 Qwen3 等推理模型在 Agent Loop 中的格式崩溃问题。
* [#6595](https://github.com/verl-project/verl/pull/6595) & [#6594](https://github.com/verl-project/verl/pull/6594) `[OPEN]` **[VL]** 修复 `filter_overlong_prompts` 中的 `patch_size` 硬编码问题，自动从 processor 对齐真实配置。
* [#6572](https://github.com/verl-project/verl/pull/6572) `[OPEN]` **[Rollout]** 为 vLLM Rollout 引擎添加 `full_determinism` 支持，补齐了与训练引擎在可复现运行上的能力差距。

**大规模训练与显存优化**
* [#6593](https://github.com/verl-project/verl/pull/6593) `[OPEN]` **[Distillation]** 引入分块 `gather-logsumexp` 替代原有的全量 materialize，在 64K+ 长文本蒸馏任务中，单行代码可节省约 **28 GB** 的持久化显存，彻底避免 OOM。
* [#6110](https://github.com/verl-project/verl/pull/6110) `[OPEN]` **[Training]** 支持在 fused linear cross entropy 中使用 per-sample temperature，解除了融合算子对混合数据 RL（如蒸馏+强化学习）的限制。
* [#6526](https://github.com/verl-project/verl/pull/6526) `[CLOSED]` **[Megatron]** 将 bf16 训练下的 Adam 状态和梯度累加缓冲区对齐模型精度，大幅减少约 3x 的冗余显存占用。

**系统架构与多硬件兼容**
* [#6086](https://github.com/verl-project/verl/pull/6086) `[OPEN]` **[Hardware]** 添加统一的硬件平台抽象层与插件系统，为实现 NVIDIA、Ascend、寒武纪等多芯片无缝切换奠定架构基础。
* [#6097](https://github.com/verl-project/verl/pull/6097) `[OPEN]` **[Tools]** 实现 `SkipManager`，统一管理 RL 调试工作流中的各类跳过策略。
* [#6587](https://github.com/verl-project/verl/pull/6587) `[CLOSED]` & [#6562](https://github.com/verl-project/verl/pull/6562) `[OPEN]` **[Ascend]** 添加 Qwen3.5-122B 的 NPU 兼容性，并修复 Ascend 环境下 MXFP8 训练的上下文复用错误。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击 Agentic RL 工程落地痛点**：随着 LLM 从单轮对话走向多工具调用的 Agent，verl 正在集中攻坚长上下文 RPC 超时、KV Cache 调度、多轮工具格式控制等最棘手的底层工程挑战。
2. **前沿的显存与通信优化机制**：面对超长上下文（如 130K tokens）和超大模型（100B+），社区正在贡献切分式 Gather、异步解耦 Reward 计算、基于精度的缓冲区优化等硬核方案，这些都在不断拓宽 RLHF 的算力边界。
3. **极具野心的“算力普惠”路线图**：项目在深耕 NVIDIA 生态的同时，迅速铺开 Ascend NPU 与 AMD ROCm 的对齐工作，并抽象出统一的硬件插件层。这为未来 RL 训练跨集群、跨芯片架构的平滑迁移提供了极具想象力的基础。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-06-04 Open Instruct 强化学习（RL）生态日报摘要：

### 1. 今日速览
截至 2026-06-04，Open Instruct 过去 24 小时内无新增 Issue 和版本发布，共有 4 个 Pull Requests 发生状态更新。项目近期的开发重心高度聚焦于 **RLHF/RL 训练中的难度课程学习机制** 以及底层训练架构对混合模型的兼容性扩展。

### 2. 版本发布
- **无最新 Releases**。当前项目代码库处于持续集成与功能迭代阶段，尚未锁定新的稳定版本。

### 3. 重点 Issues
- 过去 24 小时内无新增或更新的 Issues。社区与开发团队当前的沟通和开发节奏可能主要围绕上述 PR 的内部 review 展开，暂无外部阻塞性 Bug 或新功能提案。

### 4. 关键 PR 进展
本次更新涉及 4 个 PR，展现了 Open Instruct 在 RL 训练数据工程与底层模型架构支持上的最新动向：

- **[CLOSED] Add difficulty curriculum sampler**
  作者: undfined | [查看 PR #1692](https://github.com/allenai/open-instruct/pull/1692)
  **分析**: 实现了基于难度的课程学习采样器。在 RL（如 PPO/GRPO）训练中，引入课程采样能够有效缓解奖励稀疏问题，通过从易到难的轨迹数据提升大模型策略优化的稳定性与收敛速度。

- **[CLOSED] Add difficulty map builder**
  作者: undfined | [查看 PR #1693](https://github.com/allenai/open-instruct/pull/1693)
  **分析**: 配合 #1692 的前置基建，构建 Prompt/任务空间的“难度图”。这通常依赖于奖励模型（RM）的打分或启发式规则来量化样本难度，是构建 RL 课程学习数据流的核心组件。

- **[CLOSED] Add grpo difficulty curriculum**
  作者: undfined | [查看 PR #1694](https://github.com/allenai/open-instruct/pull/1694)
  **分析**: 将难度课程机制显式集成至 GRPO（Group Relative Policy Optimization，组相对策略优化）算法流程中。这一 PR 标志着 Open Instruct 在底层算法层面原生支持了高级的 RL 训练调度策略。

- **[OPEN] Now, we support the hybrid model in our Olmo-core code.**
  作者: finbarrtimbers | [查看 PR #1713](https://github.com/allenai/open-instruct/pull/1713)
  **分析**: 在 OLMo-core 底层代码中引入了对混合模型的架构支持。这释放了一个重要信号：Open Instruct 后续的 RL 对齐训练不仅限于单一稠密 Transformer，将具备处理混合专家模型或其他混合架构的强化学习训练能力，这对大规模计算集群的显存优化和分布式训练提出了新的工程挑战。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **算法与数据工程的前沿探索**：项目不再局限于基础的 SFT 和 PPO 流水线，而是向纵深发展（如 GRPO 与 Difficulty Curriculum 的结合）。通过量化数据难度并实施课程学习，Allen AI 正在试图解决 LLM 在复杂推理任务中 RL 训练容易遇到瓶颈的问题。
2. **紧跟模型架构演进**：PR #1713 表明 Open Instruct 正在将其 RL 训练框架与前沿的基础模型架构（Hybrid MoE 等）对齐。随着 MoE 成为扩张参数规模的主流选择，能够原生支持混合模型的 RL 对齐工具栈在开源生态中具有极高的实战价值。

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

以下是为您生成的 2026-06-04 Gymnasium 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平稳，无重大版本发布。核心开发与社区贡献主要集中在底层渲染引擎的性能优化上：处理了 1 条已关闭的 Issue（#1585）和 1 条已关闭的 PR（#1586）。标志着项目在精简底层依赖、提升环境启动效率方面完成了一次微观迭代。

### 2. 版本发布
过去 24 小时及近期 **无新版本发布**。

### 3. 重点 Issues
- **#1585 [CLOSED] [enhancement] [Proposal] Faster PyGame Init**
  - **作者**: jkterry1
  - **摘要**: 核心开发者提议针对 PyGame 的初始化机制进行性能优化。该提议指出，当前的初始化方式可能加载了不必要的子系统，建议参考 PettingZoo 仓库中的相关讨论，仅初始化强化学习环境渲染所必需的 PyGame 模块，以提升环境实例化的性能。
  - **链接**: [Farama-Foundation/Gymnasium Issue #1585](https://github.com/Farama-Foundation/Gymnasium/issues/1585)

### 4. 关键 PR 进展
- **#1586 [CLOSED] perf: use pygame.display.init() instead of pygame.init() in all environments**
  - **作者**: midhunxavier
  - **摘要**: 作为 Issue #1585 的直接工程实现，该 PR 对 Gymnasium 中所有使用 PyGame 渲染的环境和 Wrapper 文件进行了重构。核心逻辑是将全面初始化的 `pygame.init()` 替换为按需初始化的 `pygame.display.init()` 和 `pygame.font.init()`。此举剥离了音频、摇杆、CD-ROM 等无关子系统的底层加载，有效降低了内存占用和初始化开销。目前该 PR 已关闭。
  - **链接**: [Farama-Foundation/Gymnasium PR #1586](https://github.com/Farama-Foundation/Gymnasium/pull/1586)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **并行与分布式训练的基石性能优化**：在大规模并行强化学习（如 Sample-factory、Cleanba 等架构）中，通常需要实例化数以千计的模拟器。此次 PR 精简了单个环境的 PyGame 初始化开销，这种微观层面的性能提升在高度并行的 Scale-out 场景下会产生显著的算力与内存节约。
2. **严格规范的贡献闭环**：从 Issue 提议到跨项目借鉴（PettingZoo），再到社区提交精确匹配的代码修改，Gymnasium 展现了极高成熟度的开源项目维护标准，保证了合并代码的质量和动机的纯粹性。
3. **持续演进的“API 标准”**：作为当今 RL 领域的事实标准，Gymnasium 虽然在 API 层面已趋于稳定，但团队依然在持续打磨底层渲染引擎和空间定义的工具链。它依然是所有主流 RL 算法库（Stable-Baselines3, Ray/RLlib, Tianshou 等）进行环境交互的第一适配层。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-06-04 PettingZoo 项目 RL 日报摘要：

# 🤖 RL 开源生态日报：PettingZoo
**数据统计周期**：2026-06-03 至 2026-06-04

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活动趋于平稳，无新版本发布。有 1 个历史 Issue 和 1 个历史 PR 发生了状态更新或被重新触发，未产生新的代码提交或社区讨论。

## 2. 版本发布
- **最新 Releases**：无。
- 目前仓库仍保持稳定状态，未见新增的迭代版本或补丁。

## 3. 重点 Issues
- **[#182 [CLOSED] Examples of RLlib contrib/MADDPG trained in PettingZoo environments (e.g. prison)](https://github.com/Farama-Foundation/PettingZoo/issues/182)**
  - **动态**：该历史 Issue 于今日发生状态更新。
  - **简评**：由用户 *rallen10* 提出于 2020 年，主要探讨如何将 RLlib 的 MADDPG（多智能体深度确定性策略梯度）算法与 PettingZoo 的多智能体环境（如 `prison`）进行结合，并询问了关于 `actions_are_logits` 等环境配置的兼容性问题。尽管该票已关闭，但这依然是 RLlib 与 PettingZoo 跨库联调的经典参考案例。

## 4. 关键 PR 进展
- **[#204 [CLOSED] Doc proofread](https://github.com/Farama-Foundation/PettingZoo/pull/204)**
  - **动态**：该文档校对 PR 于今日发生状态更新。
  - **简评**：由贡献者 *RyanNavillus* 发起，主要针对 PettingZoo 核心文档的易读性和清晰度进行了基础校对。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama-Foundation 旗下的核心项目，其业界地位类似于单智能体领域的 Gymnasium，是**多智能体强化学习（MARL）** 事实上的标准 API 接口。
1. **统一标准规范**：随着 RL 生态向更复杂的 MARL 场景演进，PettingZoo 提供了标准化的 `AEC` (Agent Environment Cycle) 和 `Parallel` 模型，极大降低了不同多智能体环境之间的迁移成本。
2. **工具链生态协同**：从 Issue #182 可以看出，社区持续在探索 PettingZoo 与主流计算框架（如 RLlib）的深度适配。它在底层环境与上层算法库之间扮演着关键的“解耦层”角色，是任何致力于构建或训练多智能体系统的研发团队不可或缺的基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

以下是为您生成的 Stable Baselines3 (SB3) 项目 2026-06-04 日报摘要：

### 1. 今日速览
过去 24 小时内，SB3 仓库整体活动趋于平静。无新版本发布，无新增或更新的 Pull Requests。仅有一则历史 Issue 发生了状态更新（被关闭）。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
过去 24 小时仅有 1 条 Issue 状态更新：

- **[#459] [CLOSED] Documentation improvements surrounding callback arguments when using vector environments**
  - **作者**: jkterry1
  - **链接**: [DLR-RM/stable-baselines3 Issue #459](https://github.com/DLR-RM/stable-baselines3/issues/459)
  - **摘要**: 该 Issue 旨在改进 SB3 的官方文档。作者指出，在配合向量化环境（Vector Environments）使用时，`eval_freq` 等回调（Callback）参数的底层计算逻辑与触发时机不够直观（特别是在 RL Zoo 的 `exp_manager.py` 中）。作者建议在文档中增加相关说明，以降低用户在配置这些参数时的试错成本。该历史 Issue 已于昨日被正式关闭。

### 4. 关键 PR 进展
- **最新 Pull Requests**: 过去 24 小时无新增或状态更新的 PR。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率较低，但 Stable Baselines3 依然是强化学习开源生态中不可替代的基础设施：
* **API 标准制定者**：SB3 提供了极其清晰、高度统一的 API 设计。目前学术界与工业界大量 PyTorch-based 的 RL 扩展库（如 RL Zoo, SB3-Contrib, Sample Factory 等）均遵循或兼容 SB3 的接口标准。
* **工程级可靠性**：项目极其重视代码的鲁棒性与文档的准确性（如上述 Issue #459 对向量化环境细节的打磨）。对于需要将 RL 算法落地并集成到更大系统中的开发者而言，SB3 的稳定性和严密的数据类型处理是首选。
* **模块化与可扩展性**：其核心设计将 Policy、Feature Extractor 和 Environment 进行了彻底解耦，开发者无需重写底层逻辑，即可在此之上快速实现自定义网络结构或高级 RL 算法（如 Offline RL、模仿学习等）。

</details>