# RL 开源生态日报 2026-07-11

> 生成时间: 2026-07-10 22:19 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态已彻底完成向大模型时代（RLHF/RLAIF/Agentic RL）的范式转移。从 2026-07-11 的整体动态来看，生态呈现出清晰的分层结构：底层是标准化的传统单/多智能体交互接口（Gymnasium, PettingZoo），中层是提供高内聚低抽象算法实现的基座（CleanRL, Tianshou），而顶层则是正陷入极度“内卷”的大规模 LLM/VLM 分布式训练框架（verl, TRL, AReaL, OpenRLHF, slime 等）。目前，顶层基建项目正投入大量精力解决 MoE 架构适配、显存墙突破以及异构算力调度等硬核工程问题，推动 RL 框架向极致优化的异构算力调度引擎演进。

## 各项目活跃度对比
今日生态内的活动呈现明显的“二八定律”，大模型 RL 框架占据了超过 90% 的开发与讨论资源。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 93 | 23 | 0 | 死磕异步与分离式训练瓶颈，重构数据平面 |
| **TRL** | 13 | 31 | 0 | 聚焦 Agentic RL 架构解耦与底层分布式兼容 |
| **AReaL** | 2 | 11 | 0 | 推进 SGLang 与 Megatron 同 GPU 时分复用 |
| **PettingZoo** | 4 | 5 | 0 | 推进 API 标准化，引入前沿安全测试环境 |
| **ROCK** | 3 | 6 | 0 | 完善沙箱生命周期编排与底层安全机制 |
| **slime** | 1 | 5 | 0 | 攻坚大规模 MoE 模型的动态权重热更新 |
| **OpenRLHF** | 2 | 1 | 0 | 极速跟进前沿大模型混合解码器架构适配 |
| **Gymnasium** | 1 | 3 | 0 | 优化底层依赖，探索 Reward Hacking 审计 |
| **Open Instruct**| 0 | 1 | 0 | 优化单节点多任务 Ray 端口冲突 |
| **CleanRL** | 1 | 0 | 0 | 探索单文件架构下的训练失稳监测方案 |
| **Tianshou** | 1 | 0 | 0 | 关注复杂系统稳定性的监控 Hook 扩展 |

*注：rl_games, ROLL, Stable Baselines3, torchtune 过去 24 小时无活动，处于稳定维护或静默期，不作展开。*

## 共同关注的研究与工程方向
今日的动态呈现出高度的一致性，社区正集中火力攻克以下核心痛点：

**研究侧信号：**
1. **Reward Hacking（奖励作弊）监控与对齐安全**：这是今日最显著的跨库共识。Gymnasium (#1619)、PettingZoo (#1394)、OpenRLHF (#1263)、CleanRL (#563) 及 Tianshou (#1302) 均提出了相关提案。社区迫切需要实时追踪 KL 加速、策略熵崩塌和优势分布漂移，以防止智能体在训练中过度利用奖励函数漏洞。
2. **向 Agentic 与多模态演进的范式转移**：智能体从“单轮对齐”正转向“动态环境交互”。TRL 正推进 Environment-owned reward 体系以解耦 Trainer；verl 打通了多模态连续 Token 编码链路；PettingZoo 也在探索针对多智能体对齐的测试沙盒。

**工程/基础设施侧信号：**
1. **突破显存墙与极致的权重同步优化**：大模型 RL 训练正全面拥抱 MoE 架构，但带来了极大的通信开销。verl (#6974) 引入 NCCL 增量权重同步；AReaL (#1500) 落地 Colocated GPU 共享与 IPC 权重传输；slime (#2192) 与 OpenRLHF (#1261) 均在攻坚 BF16 下 MoE 专家权重的热更新与切片 Bug。
2. **异步训练与底层异构算力调度**：为消灭 Trainer 等待 Rollout 时的 GPU 闲置，verl 移除了 TransferQueue 并引入混合推理资源动态缩放 (#6556)；TRL 为 AsyncGRPO 增加了 LoRA 的 NCCL 直接同步 (#6344)；Open Instruct 和 AReaL 也在底层 Ray 分布式并发上进行了深度修复。

## 差异化定位分析
在目前极度内卷的大模型 RL 赛道，各项目已逐渐摸索出不可替代的生态位：
- **verl & TRL**：作为目前最活跃的两大通用 RL 框架，两者在工程侧各有侧重。**verl** 走“重基建”路线，强依赖 Megatron/vLLM，死磕 H200 等高端算力的低精度（MXFP8）与极致资源利用率；**TRL** 则依托 HuggingFace 生态，提供极强的基础设施兼容性（如 QLoRA+FSDP1），并向“环境/智能体解耦”的架构演进。
- **AReaL & slime**：定位为“硬核大集群攻坚者”。**AReaL** 专注于 SGLang/Megatron 的深度绑定与同 GPU 时分复用；**slime** 则在张量并行下 MoE 的底层张量轴处理上做极度深度的精细化打磨。
- **OpenRLHF**：定位为“极速排障手”，展现出对最新模型架构（如 Qwen3.5 混合解码器）极快的响应与底层框架适配能力。
- **Gymnasium & PettingZoo**：作为 RL 生态的“老牌基础设施”，正通过抹平 API 鸿沟（向 Gymnasium 的 `make` 靠拢）和引入可视化工具链，稳固其在传统强化学习和多智能体领域的基石地位。
- **CleanRL & Tianshou**：坚守“高内聚低抽象”的透明算法库定位，为复杂系统提供最纯净的验证沙盒。

## 社区热度与成熟度
- **框架基建期的高压状态**：以 verl 为首的头部框架每日 Issue/PR 更新频率极高（如 verl 今日 93 条 Issue 动态），说明大模型 RL 工程依然存在大量未完全解决的底层稳定性问题（如 NCCL 挂起、异步不收敛、各种 OOM）。
- **生态标准的向下兼容**：底层环境库的成熟度极高。Gymnasium 致力于剔除不必要的冗余依赖（如纯 CPU 环境移除 PyTorch 依赖），并推进严格静态类型检查，这在浮躁的 AI 时代显得尤为珍贵，保障了学术研究的严谨性。
- **高级别架构共识的形成**：在复杂系统设计上，社区正达成共识。例如对 Reward Hacking 监控的集中爆发式讨论，以及 TRL 将环境拥有权从 Trainer 中剥离的 RFC，标志着社区对“RL 训练框架到底是什么”的认知正在走向统一。

## 值得关注的趋势信号
1. **底层通信的极致微操时代**：传统粗暴的参数 Broadcast 正在被淘汰。针对 BF16 权重的 NCCL Delta 增量同步（只更新变化的参数）、IPC 直接显存共享，以及针对分组 MoE 专家轴的精细化保留，正成为下一代大规模 RLHF 框架的标配技术门槛。
2. **Reward Hacking 诊断工具的模块化**：随着模型参数量和训练成本指数级上升，防止“奖励作弊”不再仅仅是算法层面的调参，而是演变成了需要 Wrapper、Hook 实时监控分布漂移的基础设施级需求。这预示着 RL 训练框架即将全面集成“诊断与监控面板”。
3. **Agent 时代重塑 RL 框架架构**：环境与奖励的控制权正在从 Trainer 中解耦剥离。为了支撑多轮 Tool Calling 和多模态交互，未来的 RL 训练框架将不可避免地演化为“环境生命周期编排引擎”，沙箱机制（如 ROCK 的全面演进）和流式数据集将成为核心刚需。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-07-11 ROCK（alibaba/ROCK）开源项目 RL 生态日报摘要：

### 1. 今日速览
- **Issue 动态**：过去 24 小时新增 3 个功能/修复需求，核心聚焦在沙箱生命周期编排、文件清理安全机制及默认磁盘配额。
- **PR 动态**：过去 24 小时有 6 个 PR 更新，主要围绕 OpenSandbox 后端接入、TS SDK 修复以及纯 DB 元数据解耦。其中 2 个关于文件清理的 PR 已被关闭。
- **Release 动态**：无新版本发布。

### 2. 版本发布
- **今日无新版本发布**。

### 3. 重点 Issues
- **[#1230] [OPEN] Add environment lifecycle orchestration to McpEnv**
  - **作者**: Timandes
  - **概述**: 提议扩展 `rock.sdk.mcp.McpEnv`，结合 ScaffoldHub EnvLifecycleFactory，在现有的 ROCK 运行时流中编排环境生命周期（如通过 MCP server key 构建并注入 ROCK 沙箱环境）。
  - **链接**: [alibaba/ROCK Issue #1230](https://github.com/alibaba/ROCK/issues/1230)
- **[#1227] [OPEN] Protect active container directories during scheduled file cleanup**
  - **作者**: zhongwen666
  - **概述**: 指出当前的定时文件清理任务（`FileCleanupTask`）在满足保留阈值时，可能会误删运行中容器的文件。建议在清理前查询正在运行的 Docker 容器并排除其子目录路径。
  - **链接**: [alibaba/ROCK Issue #1227](https://github.com/alibaba/ROCK/issues/1227)
- **[#1225] [OPEN] [Feature] Set default sandbox disk quota to 50G**
  - **作者**: zhangjaycee
  - **概述**: 建议将沙箱（Sandbox）启动的默认磁盘配额设置为 50G，解决当前由于未设置默认值而可能导致的有效磁盘行为不可控问题。
  - **链接**: [alibaba/ROCK Issue #1225](https://github.com/alibaba/ROCK/issues/1225)

### 4. 关键 PR 进展
- **[#1203] [OPEN] feat(operator): add OpenSandboxOperator lifecycle backend (Phase 1)**
  - **作者**: zpzjzj
  - **概述**: 核心架构进展。这是引入 OpenSandbox 作为 ROCK 后端的 Phase 1，旨在通过其官方 Python SDK 委托沙箱生命周期及命令/文件执行。当前 PR 仅交付生命周期对接层。
  - **链接**: [alibaba/ROCK PR #1203](https://github.com/alibaba/ROCK/pull/1203)
- **[#1226] [OPEN] feat: default sandbox disk to 50G**
  - **作者**: zhangjaycee
  - **概述**: 快速响应 Issue #1225，将沙箱默认磁盘配额硬编码/设置为 50G。
  - **链接**: [alibaba/ROCK PR #1226](https://github.com/alibaba/ROCK/pull/1226)
- **[#1229] & [#1228] [CLOSED] fix(admin): protect active container directories during file cleanup**
  - **作者**: zhongwen666
  - **概述**: 针对 Issue #1227 的修复。在执行清理前校验运行中的 Docker 容器名并合并排除目录（包含向 v1.10 分支的回溯）。目前两个相关 PR 均已被关闭。
  - **链接**: [PR #1229](https://github.com/alibaba/ROCK/pull/1229) | [PR #1228](https://github.com/alibaba/ROCK/pull/1228)
- **[#1224] [OPEN] fix(ts-sdk): fix nohup process completion detection and OSS download path**
  - **作者**: xdlkc
  - **概述**: 修复 TS SDK 中由于 `nohup` 进程退出检测逻辑异常及 OSS 下载路径配置错误导致的大文件下载失败问题（与 Python SDK 行为对齐）。
  - **链接**: [alibaba/ROCK PR #1224](https://github.com/alibaba/ROCK/pull/1224)
- **[#1171] [OPEN] feat(datasets): add DatasetMetadataClient for pure DB-backed metadata management**
  - **作者**: jake11-oho
  - **概述**: 引入纯数据库元数据客户端，将 Dataset 的元数据管理与 OSS 文件操作彻底解耦，新增 PostgreSQL CRUD 及 SQLite 方言支持。
  - **链接**: [alibaba/ROCK PR #1171](https://github.com/alibaba/ROCK/pull/1171)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **深入底层沙箱安全与稳定性建设**：RL 训练高度依赖长时间运行的隔离沙箱环境。从今日修复容器文件误删（#1227）到规范化默认磁盘配额（#1225），ROCK 正在快速补齐其在高并发、重资源消耗场景下的边缘故障防御能力。
2. **基础设施的后端可插拔演进**：Phase 1 引入 OpenSandbox 后端（#1203）以及 McpEnv 的生命周期编排（#1230），表明 ROCK 正在打造更加灵活的底层算力与环境委托机制。这对需要动态扩缩容、跨平台部署大规模 RL 任务的团队来说是关键利好。
3. **重视数据流与多语言 SDK 的一致性**：纯 DB 版 DatasetMetadataClient 的剥离（#1171）意味着更健壮的 RL 数据集血缘管理；而 TS SDK 的持续修复（#1224）证明了项目在多端（包含 Web 侧驱动 Agent）协同方面的投入，适应了当前 RL + LLM Agent 的前沿开发范式。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**slime RL 生态项目日报 (2026-07-11)**

### 1. 今日速览
过去 24 小时内，slime 仓库共更新 **5 个 Pull Requests**（2 个已关闭，3 个开放中）和 **1 个 Issue**，无新版本发布。今日的代码更新高度聚焦于**前沿大模型（如 Qwen3.5/3.6 35B-A3B）在 RL 训练中的底层工程适配**，特别是针对 MoE（混合专家）架构的权重热更新修复，以及 Ray 分布式训练的内存管理兼容性优化。

### 2. 版本发布
*无新版本发布。*

### 3. 重点 Issues
*   **[#2194](https://github.com/THUDM/slime/issues/2194) [Question] qwen3.6-35B-A3b训练的时候只保存了文本权重，多模态权重没有保存**
    *   **作者:** Chunfeng1994
    *   **摘要:** 开发者在微调/训练 Qwen3.6-35B-A3b 模型时，发现 Checkpoint 只落盘了纯文本部分的权重，多模态视觉权重被遗漏。该问题反映了多模态大模型在接入 RL 训练框架时常见的参数切片/过滤配置痛点，目前尚待社区回应。

### 4. 关键 PR 进展
今日的 PR 活动技术密度极高，主要围绕 MoE 模型的动态权重更新展开：

*   **[#2193](https://github.com/THUDM/slime/pull/2193) [OPEN] fix(update_weight): preserve grouped MoE expert axis during GLU rechunk**
    *   **作者:** LLMShark
    *   **摘要:** 修复了 `update_weight` 模块中 GLU 重新分块的逻辑。原逻辑在处理 TP all-gather 后的 `linear_fc1` 张量时，未能正确保留分组 MoE 的专家轴，该修复对确保大规模 MoE 模型权重的一致性至关重要。
*   **[#2192](https://github.com/THUDM/slime/pull/2192) [OPEN] fix(update_weight): restore FlashInfer MoE layout after BF16 hot updates**
    *   **作者:** LLMShark
    *   **摘要:** 针对使用 `flashinfer_trtllm` MoE 后端（如 Qwen3.5 / 3.6 35B-A3B）进行 BF16 权重热更新时出现的 Bug。修复了在 SGLang 恢复 block-layout 权重后，由于缺失 `post_process_weights` 导致的布局错位问题。
*   **[#2195](https://github.com/THUDM/slime/pull/2195) [CLOSED] fix(ray): dynamically resolve torch_memory_saver hook preload path for CUDA compatibility**
    *   **作者:** chethanuk
    *   **摘要:** 优化了 Ray 分布式环境下的显存管理。通过动态解析 `torch_memory_saver` 的 `.so` 库路径（结合 `torch.version.cuda`），解决了不同 CUDA 版本下 `LD_PRELOAD` 可能失效的底层兼容性问题。
*   **[#2116](https://github.com/THUDM/slime/pull/2116) [OPEN] fix(rm_hub): grade the final ###Response segment in deepscaler reward**
    *   **作者:** SuperMarioyl
    *   **摘要:** 修复了 DeepScaler 的规则奖励函数。此前模型输出包含 `</think>` 或 `###Response` 标记时，提取评分 Segment 的逻辑不一致，可能导致 Reward Model 评分错误截断。
*   **[#2191](https://github.com/THUDM/slime/pull/2191) [CLOSED] Withdrawn**
    *   **摘要:** 误触发的无效 PR，已关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
slime 正在紧跟当前 LLM 架构演进的步伐，解决最棘手的**工程落地痛点**。
从今日的代码动向可以看出，项目的核心攻坚方向已经全面转向**大规模 MoE 模型（如 35B-A3B 级别）的 RL 后训练适配**。在百亿参数以上的 MoE 架构中，如何在张量并行（TP）和分布式环境（Ray）下安全、无损地进行**权重热更新** 和**显存管理**，是制约大模型强化学习吞吐量的核心瓶颈。slime 正在通过精细化的底层张量轴处理和对 FlashInfer/SGLang 等推理引擎的深度适配，试图抹平这里的工程壁垒。对于关注大规模 RL 训练系统底层优化的开发者和团队而言，该项目具备极高的追踪与参考价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是 2026-07-11 AReaL 项目的 RL 生态日报摘要。

### 1. 今日速览
- **Issue 动态**：过去 24 小时共更新 2 条 Issue，均为因长期未活动被自动关闭的陈旧（Stale）议题，涉及 FP8 权重传输与冗余代码清理。
- **PR 动态**：过去 24 小时共更新 11 条 PR，活动高度集中于 Megatron 引擎适配、SGLang 协同训练以及多模态/多 EOS 模型的兼容性修复。
- **版本发布**：无新版本发布。

### 2. 版本发布
今日无新版本发布。

### 3. 重点 Issues
今日更新的 2 条 Issue 均被标记为 `[stale]` 并关闭，反映出项目组正在清理积压的技术债务：
- **#1359 [CLOSED] 在 awex colocated (CUDA-IPC) 路径中支持 FP8 权重传输**
  - 背景：在 #1310 引入 colocated CUDA-IPC 权重传输路径后，awex Megatron 适配器硬编码了 `fp8_direct_convert=False`。该 Issue 旨在探讨支持 FP8 直接转换的可行性。
  - 链接：[areal-project/AReaL Issue #1359](https://github.com/inclusionAI/AReaL/issues/1359)
- **#1397 [CLOSED] 待 megatron-bridge 合并 PR #3143 修复后移除 megatron_bridge_patches.py**
  - 背景：为了支持 Qwen3.5（#1384），项目添加了临时补丁文件 `areal/en...`。该 Issue 旨在追踪上游修复进度，以便清除补丁文件，保持向后兼容。
  - 链接：[areal-project/AReaL Issue #1397](https://github.com/inclusionAI/AReaL/issues/1397)

### 4. 关键 PR 进展
今日 PR 更新呈现两个核心方向：**Colocated（显存共享）训练架构落地**与**底层训练正确性修复**。

**核心架构：AWEX Colocated 训练体系**
- **#1500 [OPEN] 基于 AWEX 的共享 GPU Colocated rollout/training**
  - 意义：引入 SGLang rollout 服务器与 Megatron actor 分时共享同一 GPU 的 RL 训练模式，通过 AWEX GPU-IPC 替代磁盘或 NCCL broadcast 交换权重，是今日最具架构意义的 PR。
  - 链接：[areal-project/AReaL PR #1500](https://github.com/inclusionAI/AReaL/pull/1500)
- **#1493 [CLOSED] AWEX 权重更新类型与分配语法**
  - 意义：为上述 Colocated 模式提供配置级基础设施，支持命名训练后端与混合 MoE 语法（如 `megatron[actor]:attn:d1p4t4c2|ffn:d1p4e8`）。
  - 链接：[areal-project/AReaL PR #1493](https://github.com/inclusionAI/AReaL/pull/1493)
- **#1492 [CLOSED] SGLang abort-all 与 tagged offload 协议原语**
  - 意义：为 Colocated 训练提供底层通信原语，确保推理服务器在权重更新期间完全让出 GPU 控制权。
  - 链接：[areal-project/AReaL PR #1492](https://github.com/inclusionAI/AReaL/pull/1492)

**引擎与算法正确性修复**
- **#1497 [OPEN] 对齐 CP metrics 与 TP grad norm 元数据**
  - 意义：修复 Megatron 引擎中 CP（Context Parallel）指标对齐与 TP（Tensor Parallel）梯度范数同步的问题，确保大规模并行下的监控数据正确性。
  - 链接：[areal-project/AReaL PR #1497](https://github.com/inclusionAI/AReaL/pull/1497)
- **#1496 [OPEN] 原生 R3 (Rollout Routing Replay) 路由重放**
  - 意义：为 SGLang rollout + Megatron MoE actor 训练添加原生 R3 支持，记录并传输 rollout 阶段的 MoE 专家选择，驱动 Megatron-Core 进行对齐训练。
  - 链接：[areal-project/AReaL PR #1496](https://github.com/inclusionAI/AReaL/pull/1496)
- **#1498 [OPEN] 丢弃重试孤儿补全以防 trajectory 分裂**
  - 意义：修复 Agent SDK 超时重试导致 proxy 记录重复补全（orphan）的问题，防止 RL 训练轨迹发生异常分裂。
  - 链接：[areal-project/AReaL PR #1498](https://github.com/inclusionAI/AReaL/pull/1498)
- **#1489 [CLOSED] HF 存储期间利用 CPU stash 限制 GPU 峰值显存**
  - 意义：优化 `save_weights_to_hf_with_mbridge_fast` 过程，通过将数据暂存至 CPU 并提前释放 gather 缓冲区，避免 TP all-gather 输出与 NCCL scratch 显存叠加导致 OOM。
  - 链接：[areal-project/AReaL PR #1489](https://github.com/inclusionAI/AReaL/pull/1489)

**生态兼容性与陈旧 PR 维护**
- **#1499 [OPEN] 对齐 proxy tool schemas 与 sglang chat-completions 渲染**
  - 意义：修复 OpenAI 兼容 proxy 与 sglang 原生路由在 tools 字段渲染上的差异，确保工具调用的一致性。
  - 链接：[areal-project/AReaL PR #1499](https://github.com/inclusionAI/AReaL/pull/1499)
- **#1433 [OPEN] 支持 multi-EOS 模型的 stop-token 处理**
  - 意义：修复 `ModelResponse` 仅支持单一 `eos_token_id` 导致多 EOS 模型（如 Gemma 4）生成异常的问题。
  - 链接：[areal-project/AReaL PR #1433](https://github.com/inclusionAI/AReaL/pull/1433)
- **#965, #962 [OPEN] VLM 张量并行加载与 Ascend 分支 VLM Bug**
  - 意义：针对大规模 Dense 模型（如 Qwen3-VL-32B）的 FSDP 加载 OOM 问题及 昇腾分支 VLM 训练报错进行修复，目前仍处于 Stale 状态待激活。
  - 链接：[PR #965](https://github.com/inclusionAI/AReaL/pull/965) | [PR #962](https://github.com/inclusionAI/AReaL/pull/962)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在突破传统 RLHF 框架中“生成与训练分离”的显存墙。今日密集合并的 **AWEX Colocated 训练体系**（#1500, #1493, #1492）证明项目正在推进 SGLang 推理引擎与 Megatron 训练框架在同一 GPU 组上的时分复用与 IPC 权重同步。这种架构能够显著降低大模型 RL 训练对集群规模的硬性依赖。
同时，项目对底层并行逻辑（CP/TP 指标对齐、MoE R3 路由重放）和显存峰值控制（CPU stash）的持续打磨，表明其不仅在做架构创新，更在解决大规模训练中“算得对”和“跑得通”的工程硬骨头。在 MoE 与多模态模型成为主流的当下，AReaL 展现出了极强的底层适应能力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-11 TRL（Transformer Reinforcement Learning）开源项目 RL 日报摘要。

### 1. 今日速览
- **过去 24 小时动态**：Issue 更新 13 条，PR 更新 31 条，整体代码库活跃度高。
- **核心焦点**：底层训练框架的稳定性修复（FSDP/ZeRO-3 兼容性）、vLLM 版本跟进与性能优化、以及在线强化学习中“环境拥有权”的架构重构。

### 2. 版本发布
**无新版本发布。** (当前主干分支持续整合底层优化与新特性，预计在为下一个大版本做准备)。

### 3. 重点 Issues
今日的 Issue 主要集中在分布式训练的显存异常、推理后端的性能波动以及架构演进的讨论：

*   **[架构演进] Environment-owned reward/dataset 体系构建**
    *   Issue [#5912](https://github.com/huggingface/trl/issues/5912) (RFC): 提出让在线 RL 中的 Environment 接管奖励计算与数据集拥有权的架构提案，以解耦 Trainer。
    *   Issue [#6354](https://github.com/huggingface/trl/issues/6354): 跟进 Harbor 和 OpenReward 的集成，清理由于上述架构变更产生的冗余代码。
*   **[训练稳定性] vLLM 与权重同步问题**
    *   Issue [#5312](https://github.com/huggingface/trl/issues/5312) (OPEN, 👍:3): 当开启 `vllm_enable_sleep_mode=True` 时，vLLM 权重未正确同步，导致 `colocate` 模式下的 GRPO 训练失效。
    *   Issue [#4897](https://github.com/huggingface/trl/issues/4897) (CLOSED): 记录了 vLLM >= 0.11.x 版本在 8xH100 上导致的严重性能退化问题。
*   **[训练监控] Reward Hacking 监控钩子**
    *   Issue [#6350](https://github.com/huggingface/trl/issues/6350) (OPEN): 建议在 GRPO/DPO 训练中加入监控指标（如 KL 加速度、熵崩塌趋势、优势分布漂移），以实时追踪 Reward Hacking 的发生。

### 4. 关键 PR 进展
今日合并或更新的 PR 极大地增强了 TRL 在复杂基础设施下的可用性与多模态扩展性：

*   **基础设施与分布式训练兼容性**
    *   PR [#6356](https://github.com/huggingface/trl/pull/6356): 强制所有 Trainer（DPO, GRPO, RLOO, KTO 等）在 PEFT + ZeRO-3 + 梯度检查点 组合下使用 `use_reentrant=True`，修复了底层梯度计算的崩溃问题。
    *   PR [#6343](https://github.com/huggingface/trl/pull/6343): 修复了 QLoRA (4-bit) + FSDP1 在实验性 PEFT Trainers 中的混合数据类型崩溃。
    *   PR [#6355](https://github.com/huggingface/trl/pull/6355): 适配并支持最新的 vLLM 0.24.0。
*   **异步与流式训练支持**
    *   PR [#6344](https://github.com/huggingface/trl/pull/6344): 为 `AsyncGRPO` 增加 LoRA 支持，通过自定义的 NCCL 客户端直接将 A/B 矩阵同步至 vLLM，大幅降低异步训练的通信开销。
    *   PR [#6335](https://github.com/huggingface/trl/pull/6335) / [#6325](https://github.com/huggingface/trl/pull/6325): 优化 KTO 算法，使其能够原生支持 Iterable（流式）数据集的 KL loss 计算与评估。
*   **多模态与蒸馏 (GOLD/DAPO)**
    *   PR [#6328](https://github.com/huggingface/trl/pull/6328): 为 `GOLDTrainer` 增加多轮 Tool Calling 支持，用于同 Tokenizer 家族的模型蒸馏。
    *   PR [#5381](https://github.com/huggingface/trl/pull/5381): 修复 DAPO 算法 token 级 loss 聚合维度错误，严格按照论文实现 prompt 级平均。
    *   PR [#6342](https://github.com/huggingface/trl/pull/6342): 修复 On-policy GKD 在多模态模型上采样时的显存越界报错。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **主导 Agentic/Online RL 的工程化落地**：从今日 [#5912] 等系列 PR 可以看出，TRL 正在将 RL 的核心组件（如 Dataset、Reward）的控制权向外部环境转移。这种“环境/智能体解耦”的设计，是当前 LLM 从静态偏好对齐（DPO）向动态环境交互（Agentic RL）演进的刚需。
2. **极硬核的基础设施兼容适配**：大模型 RL 训练极度受限于显存与通信。TRL 团队每日处理的诸如 FSDP1 + QLoRA 混精对齐、AsyncGRPO 下的 LoRA NCCL 点对点传输（[#6344]）等问题，是目前开源社区中几乎唯一提供可用且高效 RL 分布式训练底座的仓库。
3. **紧跟推理后端生态**：无缝且快速地适配 vLLM 等高性能推理引擎的版本迭代（如 [#6355]），保证了在线采样（Rollout）阶段能够榨干 GPU 算力，这是大规模 RLHF/GRPO 能够跑通的先决条件。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

以下是为您生成的 2026-07-11 Tianshou 强化学习生态日报摘要：

### 1. 今日速览
过去 24 小时（2026-07-10 至 2026-07-11），Tianshou 仓库整体活跃度趋于平缓。代码库无新版本发布，无新的代码合并请求（PR）。社区层面有 1 条新功能建议（Issue）提出，核心聚焦于强化学习训练过程中的安全性与可解释性机制。

### 2. 版本发布
本日无新版本文档或 Release 发布。当前生态以稳定现有核心算法库为主。

### 3. 重点 Issues
- **#1302 [NEW FEATURE REQUEST] Reward-hacking onset monitoring hooks** （[链接](https://github.com/thu-ml/tianshou/issues/1302)）
  - **提交者**: Aarav500
  - **技术摘要**: 作者提议在 Tianshou 中引入“奖励作弊爆发监控钩子”。随着大模型与 RLHF 的发展，Reward Hacking（奖励作弊/过度优化）成为复杂的 RL 系统中的核心痛点。该 Issue 建议在框架的 Trainer 或 Collector 层面提供原生 Hook 接口，以便研究者在训练阶段实时监控奖励信号的异常突变或策略退化现象。
  - **状态**: Open（待社区维护者及开发者讨论技术可行性）。

### 4. 关键 PR 进展
本日无活跃的 Pull Request。核心代码库无新增变更，处于稳定维护期。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Tianshou 作为高度模块化、执行效率极高的强化学习底层库，其在当前 RL 生态中的价值依然不可替代：
1. **对齐现代复杂 RL 的痛点**：从今日的 Issue #1302 可以看出，社区的焦点已从基础的算法实现，转移至“如何控制复杂 RL 系统的稳定性”。无论是处理基于仿真器的传统任务，还是当前火热的 LLM+RLHF 任务，Reward Hacking 都是核心难题，Tianshou 的架构使其具备扩展此类底层监控机制的潜力。
2. **极高的可定制性与透明度**：区别于高度封装的黑盒框架，Tianshou 提供了完全暴露的底层接口（如 Collector, Buffer, Policy）。研究者可以极其平滑地插入自定义的监控 Hook、修改特定环节的数据流，是验证前沿 RL 创新想法的首选“实验台”。
3. **生态基石地位**：作为由清华大学团队主导的明星开源项目，其严格的代码质量把控和清晰的抽象设计，依然使其成为学术界复现算法和工业界原型测试的标准底库之一。持续关注其 Issue 动向，能够精准把握前沿强化学习工程实践的演进方向。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**RL 开源生态日报：OpenRLHF (2026-07-11)**

以下是 OpenRLHF 过去 24 小时的项目动态摘要。

### 1. 今日速览
过去 24 小时，OpenRLHF 仓库共有 3 项核心动态更新（无新版本 Release）。主要焦点集中在**模型训练底层的 ZeRO-3 权重冻结 Bug 修复**以及**社区对 Reward Hacking 监控机制的高级功能诉求**。

### 2. 版本发布
*   **无新版本发布**（0个）。

### 3. 重点 Issues
*   **[#1258](https://github.com/OpenRLHF/OpenRLHF/issues/1258) [CLOSED] Qwen3.5-9B 及以上版本在 ZeRO-3 下大部分权重被冻结**
    *   **详情**：开发者发现 Qwen3.5-9B 在 DeepSpeed ZeRO-3 环境下训练时参数被意外冻结（`frozen`）。根因定位在 `Actor.__init__` 中调用的 `set_z3_leaf_modules` 模块。该模块原本旨在适配 Qwen3.5 混合解码器架构（`self_attn` 与 `linear_attn`），但实际触发了 DS 的 prefetch 逻辑冲突，导致梯度计算被拦截。
*   **[#1263](https://github.com/OpenRLHF/OpenRLHF/issues/1263) [OPEN] Feature request: 在 PPO/GRPO 训练中增加 Reward Hacking 早期监控 Hooks**
    *   **详情**：社区用户提出了针对强化学习对齐痛点的功能请求。建议在 PPO/GRPO 训练器中引入可选监控钩子，以追踪 Reward Hacking 发生的前兆信号。具体监控指标包括：KL 散度加速情况、策略熵崩塌（entropy-collapse）趋势，以及基于 Wasserstein 距离的优势分布漂移。该诉求直击当前 RLHF 训练稳定性评估的痛点。

### 4. 关键 PR 进展
*   **[#1261](https://github.com/OpenRLHF/OpenRLHF/pull/1261) [CLOSED] Fix Qwen3.5 ZeRO-3 frozen weights from set_z3_leaf_modules hybrid detection**
    *   **进展**：针对上述 Issue #1258 的修复代码已合并。
    *   **技术实现**：作者 `Functionhx` 发现 `set_z3_leaf_modules` 注册的 `register_full_backward_pre_hook` 在 ZeRO-3 下抢占了内部参数的梯度计算。PR 的最终解法是在保留 MoE leaf 标记的同时，增加 `detect_hybrid=False` 参数以直接跳过混合检测逻辑。该 PR 已在 `actor.py` 和 `model.py` 中生效。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极速跟进前沿大模型架构适配**：面对最新的 Qwen3.5 混合解码器（Hybrid Decoder）及 MoE 架构，OpenRLHF 展现出了极强的排障与底层框架（DeepSpeed ZeRO-3）适配能力，保障了百亿参数级模型 RL 训练的底层稳定性。
2. **深度契合 RLHF 算法痛点**：从 Issue #1263 可以看出，该项目的社区活跃度极高，且开发者群体具备极其专业的算法嗅觉。社区正在推动将 KL 加速监控、熵崩塌预警、优势分布漂移等前沿学术概念转化为工程上可插拔的监控 Hooks。在当前 Reward Hacking 频发、对齐税（Alignment Tax）显著的生态中，OpenRLHF 正在从单纯的训练框架向全生命周期的 RL 诊断平台演进。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 volcengine/verl 项目 2026 年 7 月 11 日的强化学习（RL）生态日报摘要：

### 1. 今日速览
- **Issue 动态**：过去 24 小时内共有 93 条 Issue 发生更新，社区讨论热度高。
- **PR 动态**：共有 23 个 PR 取得进展，核心聚焦于异步权重同步、FSDP/Megatron 底层 Bug 修复及架构重构。
- **版本发布**：过去 24 小时无新版本发布（当前生态以主分支高频迭代为主）。

### 2. 重点 Issues
今日社区高度聚焦于**异步训练机制**、**多模态训练 (VLM) OOM** 以及 **Megatron 并发与底层通信**问题：

- **异步训练机制与优化**：
  - **[#2551](https://github.com/volcengine/verl/issues/2551) [OPEN]** 开发者对 vLLM 的 Async Rollout 模式提出质疑，指出 `AsyncActorRolloutRefWorker` 存在功能不完整的情况。
  - **[#2453](https://github.com/volcengine/verl/issues/2453) [CLOSED]** 有实验数据表明，在 GSM8K 上训练 Qwen-2.5-0.5B 时，异步 vLLM 会导致模型无法收敛，精度出现下降。
  - **[#6967](https://github.com/volcengine/verl/issues/6967) [OPEN]** 深入剖析了全异步模式下首次 NCCL checkpoint-engine group 初始化挂起的底层竞态问题。
- **大模型与多模态（VLM）训练痛点**：
  - **[#2408](https://github.com/volcengine/verl/issues/2408) [OPEN]** Megatron 框架训练 Qwen3-30B-A3B 时，Actor 模型保存的权重体积异常（仅 17G），疑似存在切片保存 Bug。
  - **[#2450](https://github.com/volcengine/verl/issues/2450) [OPEN]** 即使使用 LoRA，在 8*A100 上跑 Qwen2.5-VL-3B 的 GRPO 依然出现 OOM。
  - **[#2464](https://github.com/volcengine/verl/issues/2464) [CLOSED]** 反馈 FSDP2 训练 72B 模型时发生 OOM，而 FSDP1 则不会。
- **下一代架构规划**：
  - **[#6985](https://github.com/volcengine/verl/issues/6985) [OPEN]** 发布 **verl 26Q3 路线图**，明确下一步将推进废弃 mbrige、支持低精度 MXFP8/NVFP4，并持续打磨 Megatron 集成。

### 3. 关键 PR 进展
今日合并或更新的 PR 展现了 verl 在提升**资源利用率**和**修复底层并行通信 Bug** 方面的持续投入：

- **训练与通信架构大重构**：
  - **[#6999](https://github.com/volcengine/verl/pull/6999) / [#7000](https://github.com/volcengine/verl/pull/7000)**：移除 `TransferQueue`，将 PPO 入口还原为 `RayPPOTrainer`，为引入全新的 NeoProto 数据平面铺平道路。
  - **[#6974](https://github.com/volcengine/verl/pull/6974) [OPEN]**：引入针对分离式 Rollout 的 **NCCL 增量权重同步**。由于 RL 更新大部分 BF16 权重不变，该 PR 可将权重同步流量降至稀疏比级别，极大提升异步训练效率。
  - **[#6556](https://github.com/volcengine/verl/pull/6556) [OPEN]**：实现全异步 PPO 框架的**混合推理资源动态缩放**，解决 Trainer 等待 Rollout 时的 GPU 闲置问题。
- **关键 Bug 修复与功能增强**：
  - **[#7014](https://github.com/volcengine/verl/pull/7014) [OPEN]**：修复 FSDP LoRA 合并后在上下文退出前发生的权重陈旧 Bug。
  - **[#6836](https://github.com/volcengine/verl/pull/6836) [OPEN]**：修复 Megatron 在 CP>1 时，因 MoE aux/z-loss 梯度爆炸引发的底层断言错误。
  - **[#6804](https://github.com/volcengine/verl/pull/6804) [OPEN]**：为 AgentLoop 扩展 `VLContinuousTokenBuilder`，打通了多模态信息与智能体连续 Token 编码的链路。

### 4. 为什么这个项目值得在当前 RL 生态继续关注？
verl 已不仅是早期对接 vLLM/Megatron 的简单胶水层，而是正在向**极致优化的异构算力调度引擎**演进：
1. **死磕异步与分离式训练瓶颈**：通过引入 NeoProto 数据平面和 NCCL Delta 权重同步（#6974），verl 正在实质性突破大规模 RLHF 中“生成与训练”难以完美重叠的 I/O 瓶颈。
2. **高端硬件与底层精度的敏锐适配**：路线图 (#6985) 明确瞄准 H200/昇腾等新一代算力卡，推进 MXFP8/NVFP4 低精度训练与动态资源分配 (#6556)，这是支撑万亿参数级别模型 RL 微调的前提。
3. **完善智能体与多模态闭环**：支持 Tool Agent 的多轮交互负载均衡 (#2520) 以及多模态连续 Token 处理 (#6804)，表明 verl 正积极拥抱当前 LLM 从“单轮对齐”向“Agent 多模态智能进化”的范式转移。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目追踪**
**日期**: 2026-07-11
**追踪仓库**: [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体活跃度较低。无新增 Issue、无新版本发布，仅有 1 项关于底层分布式计算集群（Beaker/Mason）和 Ray 环境配置的基础设施优化 PR 提交。

### 2. 版本发布
*   **无**。近期未发布新的 Release 版本。

### 3. 重点 Issues
*   **无**。过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
虽然整体动态较少，但今日提交的 PR 集中解决了多任务并行时的底层资源冲突问题，对单机多卡 RL 训练场景尤为重要：

*   **[OPEN] #1752: Skip ray start in `ray_node_setup.sh` for single-node jobs**
    *   **作者**: mnoukhov
    *   **链接**: [allenai/open-instruct PR #1752](https://github.com/allenai/open-instruct/pull/1752)
    *   **技术摘要**: 解决了单节点（Single-node）任务环境下的 Ray 端口冲突崩溃问题。此前，当 Beaker 尝试将两个单节点任务打包到同一个物理节点上时，由于两者均强制执行 `ray start --head --port=8888`，会导致硬编码的 Ray head 端口冲突并引发启动崩溃。该 PR 修改了任务启动器 `mason.py`，使其为每个任务注入 `MASON_NUM_NODES` 环境变量；`ray_node_setup.sh` 脚本据此判断，如果是单节点任务则跳过强制启动 Ray head 节点的步骤。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **直击大模型 RL 训练的工程痛点**：随着模型规模扩大，RLHF/RLAIF 的算力开销显著增加，多任务共享物理集群（如本 PR 中的 Beaker 任务打包）是降本增效的常见手段。Open Instruct 团队持续在优化底层资源调度与 Ray 分布式框架的兼容性，这类基础设施的打磨是保障大规模 RL 训练稳定性的关键。
2.  **全链路 RLHF 工具链的标杆**：作为 Allen AI（艾伦人工智能研究院）的开源项目，Open Instruct 提供了从数据预处理、SFT、Reward Model 训练到 PPO/DPO 等全流程的标准化实现，且极度贴近生产环境，是研究者和工程团队复现前沿 RL 算法、进行底层架构调研的优质基石项目。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 生态日报 | 2026-07-11

**数据源:** [github.com/vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

## 1. 今日速览
过去 24 小时，CleanRL 仓库整体活动度较低，无代码合并与版本发布。核心动态集中在功能增强的提议上：社区成员提交了关于引入“奖励黑客与训练失稳监测模块”的讨论。当前代码库处于稳定维护期。

## 2. 版本发布
- **无新版本发布**。近期无新增 Release 或 Tag。

## 3. 重点 Issues
- **#563 [OPEN] Optional monitoring callback for reward-hacking / training-instability signals**
  - **作者:** Aarav500
  - **更新时间:** 2026-07-10
  - **摘要:** 作者指出当前 CleanRL 算法仅记录标准的训练指标（如 loss, entropy, KL 散度），缺乏对 *reward hacking*（奖励黑客）或训练失稳先兆的直接检测机制。提议新增一个 **可选的、独立的** `cleanrl_utils/monitors.py` 模块。该模块默认不引入至任何现有算法文件中，由用户按需挂载，用于在训练过程中动态追踪并标记异常信号。
  - **链接:** [vwxyzxyzjn/cleanrl Issue #563](https://github.com/vwxyzjn/cleanrl/issues/563)

## 4. 关键 PR 进展
- **过去 24 小时无 PR 更新**。代码库无新增提交、审查或合并活动。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 始终坚持“单文件、低抽象”的实现哲学，这在当前日益臃肿的 RL 框架生态中提供了不可替代的价值：
1. **极低的阅读与审计门槛:** 研究者可以在单个文件内完整看到从环境交互、数据采集到策略更新的全流程，无需在多层封装的基类中跳转，极大降低了算法复现的 Black Box 效应。
2. **对齐前沿研究痛点:** 今日 Issue #563 提出的 *reward hacking* 监测需求，直击当前 RL（尤其是 RLHF 阶段）中模型策略 exploited 奖励函数的痛点。CleanRL 高内聚的代码结构使得引入此类独立监控模块变得非常自然，既不污染核心算法，又具备极强的实验扩展性。
3. **教学与基线验证的基石:** 在 LLM+RL 逐渐成为主流的当下，CleanRL 提供的纯净 PPO/DPO 等实现，依然是快速验证新想法、剥离工程复杂度的首选沙盒。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 2026-07-11 Gymnasium 强化学习生态日报摘要：

### 📰 Gymnasium RL 生态日报 (2026-07-11)

#### 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动集中于底层依赖优化与代码质量提升。共计更新 **0** 个 Release，新增/更新 **1** 条 Issue 和 **3** 条 PR。今日的焦点在于：解决纯 CPU 环境下的依赖膨胀问题、强化核心 API 的静态类型检查，以及提出了一个用于检测奖励作弊的监控 Wrapper 提案。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 重点 Issues
*   **[#1619] [Proposal] Reward-hacking / reward-audit monitoring wrappers**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619)
    *   **分析**: 作者 Aarav500 提议引入一组可插拔的 Wrappers，用于在训练或 Rollout 阶段审计奖励信号。该 Wrapper 旨在追踪奖励分布漂移、熵坍塌 以及奖励函数的版本控制/哈希。这是一个高度契合当前 RL 安全性与对齐前沿的提案，能有效帮助研究人员检测智能体何时在利用 Reward Hacking 漏洞。

#### 4. 关键 PR 进展
今日的 PR 均由开发者 Functionhx 提交，重点攻克依赖管理与类型安全：

*   **[#1617] Remove torch from [all] extra to avoid nvidia-cuda on CPU-only systems**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617)
    *   **进展**: 修复 Issue #1381。从 `[all]` 安装选项中移除了 PyTorch。由于 PyPI 默认分发 PyTorch 的 CUDA 版本（会拉取庞大的 `nvidia-cuda-*` 依赖包），此 PR 确保了纯 CPU 用户免受依赖膨胀之苦。（注：JAX 仍保留在 `[all]` 中，因其默认为 CPU 版本）。
*   **[#1620] Add strict type hints for core.py, space.py, and box.py**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620)
    *   **进展**: 关联 Issue #9。为 `core.py`、`space.py` 和 `box.py` 添加了返回类型注解，并修复了 `np.ndarray` 和 `np.dtype` 等泛型参数。目前这三个文件已能以零报错通过 `mypy --strict` 严格静态检查。
*   **[#1618] Fix default_camera_config not affecting rendered output**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618)
    *   **进展**: 修复 Issue #1141。根因分析：当未显式指定 `camera_id` 时，MuJoCo 渲染器默认查找名为 `"track"` 的摄像机，导致默认相机配置失效。该 PR 修复了这一渲染逻辑冲突。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **聚焦研发体验与工程严谨性**：今日 PR 动态显示，项目正在深度清理底层依赖（如区分 CPU/CUDA 环境的依赖隔离），并积极推进核心 API（如 Space 和 Box）的严格类型 (`mypy --strict`) 支持。这意味着基于 Gymnasium 构建复杂 RL 算法时，将获得更健壮的 IDE 提示和更少的 Runtime 错误。
2.  **直面前沿 RL 核心痛点**：从今日的 Reward-audit Wrappers 提案可以看出，Gymnasium 的生态建设不仅限于“提供环境”，而是开始向“提供诊断工具”延伸。Reward Hacking 是当前大模型与传统 RL 训练中极具挑战性的问题，此类审计工具的引入将极大提升训练过程的可观测性与可信度。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**强化学习（RL）开源生态日报**
**日期**：2026-07-11
**目标项目**：PettingZoo (Farama-Foundation)

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活跃度较高，共触发 **4 条 Issues** 和 **5 条 Pull Requests** 的状态更新。今日的核心主线是 **API 标准化重构**（向 Gymnasium 的 `make` 模式靠拢）以及 **环境功能扩展**（引入视频录制、修改核心环境参数）。无新版本发布。

### 2. 版本发布
无（近期无 Release 发布）。

### 3. 重点 Issues
今日的 Issue 集中在 API 废弃通告、环境扩展以及对多智能体安全（Reward Hacking）的前沿探索：

*   **[API 重构] 废弃旧版环境创建方法，转向 Gymnasium 风格的 `make` 函数** ([#1392](https://github.com/Farama-Foundation/PettingZoo/issues/1392))
    *   **摘要**：核心维护者 Trenza1ore 发布通告，正式废弃通过直接导入模块（如 `pistonball_v6.env()`）创建环境的方式。未来将全面采用类似 Gymnasium 的顶层 API：`make("aec", "butterfly/pistonball")`。这将极大统一单智能体与多智能体 RL 代码库的开发范式。
*   **[环境扩展] 为 Pursuit 环境增加控制中心方块大小的参数** ([#1382](https://github.com/Farama-Foundation/PettingZoo/issues/1382))
    *   **摘要**：`jkterry1` 提议在 Pursuit 环境中增加参数，允许动态配置中心障碍物（Box）的尺寸。此 Issue 已被标记为 "help wanted"，并已在今日的 PR 中得到实现。
*   **[社区提案] 多智能体 Reward Hacking 测试环境兴趣调查** ([#1394](https://github.com/Farama-Foundation/PettingZoo/issues/1394))
    *   **摘要**：开发者提议引入一种全新的多智能体“奖励作弊”测试环境。其核心机制是：智能体可以在共享/个体代理奖励上进行利用，同时系统保留一个真实的隐藏奖励。这对于当前 MARL（多智能体强化学习）的 Alignment（对齐）与安全研究具有极高价值。
*   **[Bug 修复] Hanabi 观测空间文档与实际向量不符** ([#1301](https://github.com/Farama-Foundation/PettingZoo/issues/1301) - CLOSED)
    *   **摘要**：开发者指出在 Hanabi 环境中，文档记录的 Observation Space 与环境返回的 vector 不一致，该问题已随相关 PR 合并而关闭。

### 4. 关键 PR 进展
今日 PR 活动涵盖了基础设施升级、算法基准测试及环境参数自定义：

*   **[核心基建] 添加 `RecordVideo` 包装器** ([#1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306))
    *   **进展**：从 Gymnasium 直接移植了 `RecordVideo` 包装器至 PettingZoo（分别适配了 Base 和 AEC 环境）。在此之前，多智能体环境的可视化录制往往需要开发者手写 wrapper 或依赖 SB3/TorchRL 等上层库，此 PR 补齐了核心库的短板。
*   **[环境扩展] 为 Pursuit 添加可配置的中心障碍物尺寸** ([#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393))
    *   **进展**：响应 Issue #1382。引入了 `center_box_size=(width, height)` 参数（以网格为单位）。设置 `(0, 0)` 可生成无障碍地图，同时包含了尺寸校验逻辑，防止生成无效地图。
*   **[算法基准] 添加预测性 KAZ 策略基准测试** ([#1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395))
    *   **进展**：为 Knights-Archers-Zombies (KAZ) 环境添加了一个确定性的预测向量策略。该策略能够为不同的弓箭手分配独立目标，并在发射前预测弹道拦截点。附带了一个可复现的评估脚本和 GIF。
*   **[文档修复] 修复 Hanabi 观测空间布局文档** ([#1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368) - CLOSED)
    *   **进展**：修复了 Issue #1301 中的文档不一致问题。作者提到由于手动审查成本过高，代码经过了 Codex 和 Claude 的多轮 AI Review。
*   **[依赖更新] 更新 pyproject.toml 依赖项** ([#1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389) - CLOSED)
    *   **进展**：跟进 Gymnasium 的依赖管理策略，为 Python 3.10-3.13 使用预编译的 `box2d` wheel，在 3.14 启用 `box2d-py` 源码分发，并使用自引用 extras。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **多智能体标准化的基石**：PettingZoo 正在积极消除单智能体与多智能体环境之间的 API 鸿沟。`make` 函数的引入（PR #1388, #1390, Issue #1392）意味着未来 RL 算法工程师可以以几乎零代码改动成本的代价，将现有的 Gymnasium 训练管线平滑过渡到多智能体场景（AEC/Parallel）。
2.  **迎合前沿 RL 安全研究**：社区正在积极探讨多智能体环境下的 Reward Hacking 与 Alignment 问题（Issue #1394）。随着 LLM-based Agents 和 Multi-agent 对齐成为热点，对能够测试“代理奖励 vs 真实奖励”机制的沙盒环境需求正急剧上升，PettingZoo 展现出了承接此类前沿需求的生态活力。
3.  **工程闭环完善**：通过引入内置 `RecordVideo`（PR #1306）和官方提供的 KAZ 预测策略基准（PR #1395），PettingZoo 正在从“只提供环境接口”向“提供完整的可复现评测与可视化工具链”演进，大幅降低了 MARL 算法迭代与论文复现的工程摩擦。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>