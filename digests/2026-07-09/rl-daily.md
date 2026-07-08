# RL 开源生态日报 2026-07-09

> 生成时间: 2026-07-08 22:18 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出明显的“双层分化”态势：
- **底层算力优化与大模型对齐（LLM RLHF）占据绝对核心**：以 `verl`、`TRL`、`AReaL` 和 `slime` 为代表的项目主导了今日的动态。这些项目不再局限于算法封装，而是全面演变为高性能的计算基础设施，致力于突破大规模推训集群的通信墙和显存墙。
- **经典多智能体与 API 标准化平稳演进**：以 `PettingZoo` 和 `Gymnasium` 为代表的传统 RL 环境项目正处于维护与标准化阶段。它们聚焦于 API 规范的对齐（如全面拥抱 Gymnasium 标准）以及底层边缘计算场景的鲁棒性修复。

## 各项目活跃度对比
今日生态活动高度集中，仅 6 个项目有实质性代码或社区动态，其余主流框架（如 OpenRLHF, Stable Baselines3, Tianshou 等）均处于静默期。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 56 | 17 | 0 | **极高**。攻坚 B200 适配、分离式推理与极致通信优化（如 NCCL 增量同步）。 |
| **TRL** | 7 | 17 | 0 | **高**。底层重构期，全面打通流式数据训练，探索异步与多模态蒸馏。 |
| **AReaL** | 2 | 9 | 0 | **中高**。聚焦大模型混合部署（AWEX）与同卡权重同步（CUDA IPC）。 |
| **PettingZoo**| 2 | 4 | 0 | **中**。做减法剔除冷门环境，全面向 Gymnasium 注册表 API 范式靠拢。 |
| **ROCK** | 1 | 4 | 0 | **中**。完善企业级分布式基建，集成沙箱后端与纯 DB 元数据管理。 |
| **slime** | 2 | 2 | 0 | **中**。直面 Megatron + SGLang 混合部署痛点，引入 RDMA 提升吞吐。 |

## 共同关注的研究与工程方向
在大模型强化学习阵营中，各项目的技术演进呈现出高度一致的共振，主要分为以下两大侧重点：

### 研究/算法侧信号
- **训练范式的平滑扩展**：支持多轮对话场景下的在线强化学习（如 `verl` 修复多轮过滤失效，`AReaL` 修复 GRPO 分组归一化错误），以及模型蒸馏（如 `TRL` 探索带有特权上下文和工具调用的 GOLD 蒸馏）。
- **Agent 与环境交互的解耦**：赋予环境自主计算奖励的能力（Environment-owned reward，如 `TRL`），以及集成安全代码执行沙箱（如 `ROCK` 引入 OpenSandbox），标志着 RL 向 Agentic 演进。

### 工程/基础设施侧信号
- **跨节点与同卡通信的极限压榨**：**增量（稀疏）权重同步**成为显学，`verl` 和 `TRL` 均在此发力，仅同步优化器更新变化的 bf16 权重；同时，`AReaL` 和 `slime` 深入探索基于 CUDA IPC 的同卡权重更新与 Mooncake RDMA 跨节点传输。
- **推训一体与混合部署架构**：为解决生成与训练速率不匹配的问题，社区全面拥抱 vLLM/SGLang 的 Prefill-Decode 分离部署（如 `verl` 的 P&D 分离、`AReaL` 的 AWEX 混合切片语法）。
- **流式数据与显存峰值控制**：`TRL` 彻底打通 `IterableDataset` 以支持超大规模数据集，而 `AReaL` 和 `verl` 则通过精细的显存复用和状态卸载解决千亿参数模型保存时的 OOM 问题。

## 差异化定位分析
- **`verl`（高性能系统级框架）**：定位最接近“大模型 RL 计算基础设施”。其差异化在于极具前瞻性的硬件栈适配（如死磕 Nvidia B200 / CUDA 12.8 兼容）和极其激进的底层算子优化（如自研 MAGI Attention）。
- **`TRL`（事实标准算法库）**：定位为最易用、覆盖最广的对齐工具。其差异化在于紧跟 HuggingFace 生态，侧重于算法鲁棒性（如截断样本丢弃）以及中小开发团队更易落地的异步（AsyncGRPO）与轻量级通信优化。
- **`AReaL` 与 `slime`（重型生产级引擎）**：两者均聚焦于 Megatron（重训练）与 vLLM/SGLang（重推理）的深度融合。差异在于 `AReaL` 更强调自研推训混合底座（AWEX）的构建，而 `slime` 更侧重于在现有框架上引入前沿硬件传输协议（如 Mooncake RDMA）。
- **`ROCK`（平台级调度底座）**：完全不碰算法层，纯粹解决分布式 RL 平台的数据 I/O 瓶颈、K8s 镜像鉴权与执行环境调度，是构建企业级 RLaaS 平台的核心组件。

## 社区热度与成熟度
- **`verl` 活跃度断层领先**：单日 56 条 Issue 和 17 个 PR 显示其在处理真实工业级落地痛点（OOM、性能回退、多卡兼容）方面承受着极大的流量考验，表明其已具备极强的工业采用率。
- **`TRL` 侧重底层代码清理**：今日通过大量关闭历史遗留 Bug，展示了项目团队在代码重构和底座稳固方面的成熟度。
- **`PettingZoo` 展现成熟开源项目素养**：通过 GitHub 全局搜索量这一硬指标来决定下线冷门环境（做减法），并紧跟最新 Python 3.14 工具链，体现了极高的工程严谨性和维护责任感。

## 值得关注的趋势信号
1. **“权重同步”成为下半场核心战役**：随着模型规模扩大，Rollout 到 Trainer 的全量权重同步已不可行。今日 `verl`、`TRL` 和 `AReaL` 不约而同攻克基于 NCCL / HF Bucket 的**增量同步**或基于 CUDA IPC 的**同卡零拷贝**，这将是未来一年 RL 框架的分水岭。
2. **异步化与分离式推理的普及**：全异步 PPO（如 `verl` 的混合推理资源动态缩放）结合 vLLM 的 Prefill-Decode 分离，正在彻底重塑 RLHF 的执行流，向传统计算图的调度机制发起挑战。
3. **数据类型与精度的极致微操**：从大模型侧的 fp32 权重按需降级 bf16 同步，到传统 RL 底层的 `int8` 整型溢出边界控制（如 Gymnasium），表明整个生态正在向“极致压榨显存与通信带宽”的深水区迈进。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026 年 7 月 9 日 ROCK（alibaba/ROCK）开源项目 RL 日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，ROCK 仓库共有 1 条 Issue 更新与 4 条 PR 更新，无新版本发布。
- **核心动态**：社区焦点主要集中在底层基础设施的稳定性与功能扩展上。修复了 TypeScript SDK 中导致大文件下载失败的关键 Bug，同时在后端架构方面推进了 OpenSandbox 集成、纯 DB 元数据管理以及 K8s 镜像鉴权等高级特性。

### 2. 版本发布
- **今日无新版本发布**。

### 3. 重点 Issues
- **#1223 [Bug] TS SDK nohup process completion misdetects finished processes as failures**
  - **链接**: [alibaba/ROCK Issue #1223](https://github.com/alibaba/ROCK/issues/1223)
  - **分析**: 作者 xdlkc 报告了一个 TS SDK 的状态检测缺陷。`waitForProcessCompletion` 函数错误地将 `kill -0 PID` 抛出的异常捕获并判定为失败。这会导致基于 `nohup` 的 OSS 上传/下载或 ossutil 安装等耗时操作，即使在底层命令成功执行的情况下，仍可能误报 `exitCode: 1`。该问题对依赖 TS SDK 进行大规模数据读写的 RL 训练流水线有直接影响。

### 4. 关键 PR 进展
- **#1224 [OPEN] fix(ts-sdk): fix nohup process completion detection and OSS download path**
  - **链接**: [alibaba/ROCK PR #1224](https://github.com/alibaba/ROCK/pull/1224)
  - **进展**: 针对 Issue #1223 的修复。除了修正异常捕获逻辑（与 Python SDK 行为对齐）外，还修复了 `ensureOssutil` 因未使用后台模式而触发 85 秒服务超时限制的问题，彻底解决大文件下载失败的痛点。

- **#1203 [OPEN] feat(operator): add OpenSandboxOperator lifecycle backend (Phase 1)**
  - **链接**: [alibaba/ROCK PR #1203](https://github.com/alibaba/ROCK/pull/1203)
  - **进展**: 推进 Phase 1 阶段，通过 OpenSandbox 官方 Python SDK 将沙箱生命周期及命令/文件执行委托给 OpenSandbox 处理，使其正式作为 ROCK 的后端。本 PR 目前仅交付生命周期对接层，代理层执行接口将在后续提交。

- **#1171 [OPEN] feat(datasets): add DatasetMetadataClient for pure DB-backed metadata management**
  - **链接**: [alibaba/ROCK PR #1171](https://github.com/alibaba/ROCK/pull/1171)
  - **进展**: 重构数据集元数据管理架构。引入 `DatasetMetadataClient`，将元数据管理（支持 PostgreSQL CRUD 及 SQLite 方言）与 OSS 文件操作彻底解耦，并附带了 41 个单元测试，提升数据层的高效查询能力。

- **#1130 [CLOSED] feat(k8s): transport image auth to k8s**
  - **链接**: [alibaba/ROCK PR #1130](https://github.com/alibaba/ROCK/pull/1130)
  - **进展**: 该 PR 已关闭。其核心设计是通过 annotation 将加密生成的自定义镜像仓库鉴权信息传递给 k8s 下游链路。基于工程权衡，暂未引入 k8s secret CR，为后续过渡到标准的 imageSecret 方式留有余地。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习生态中，随着模型参数量和训练数据量的暴增，**底层 Infra（算力调度、数据流转、沙箱环境）的健壮性**已经成为决定 RL 实验成败的关键。
从今日的动态可以看出，ROCK 并非仅仅停留在算法层的封装，而是深度攻坚 RL 工程化痛点：
1. **解决数据 I/O 瓶颈**：修复 OSS 大文件下载与 `nohup` 守护进程的超时缺陷（PR #1224），保障了海量 RL 数据集的稳定吞吐。
2. **强化沙箱与执行环境**：集成 OpenSandbox 作为后端（PR #1203），对于 RLHF 等需要安全代码执行环境的场景（如 Agent RL）具有极高的工程价值。
3. **解耦数据与平台底座**：推进纯 DB 元数据管理（PR #1171）并完善 K8s 镜像鉴权链路，表明项目正朝着企业级、可扩展的分布式 RL 训练平台方向演进。持续关注 ROCK 能够为 RL 算法工程师提供极具价值的工程化参考。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

这份日报为您梳理了 2026 年 7 月 9 日 slime (THUDM/slime) 项目的核心动态。

### 1. 今日速览
过去 24 小时内，slime 项目共有 4 项动态更新（Issues 2 条，PR 2 条），无新版本发布。当前社区与研发的核心焦点集中在**大模型 rollout 阶段的底层兼容性**（如 v0.3.0 与特定 sglang 镜像的适配问题）以及**分布式训练中的显存/权重同步管理**（如 Colocate 模式下的 CUDA IPC 报错与 Mooncake RDMA 传输支持）。

### 2. 版本发布
无（近期无新版本发布）。

### 3. 重点 Issues
今日共有两条重要 Bug 反馈，直指当前版本在复杂训练环境下的稳定性痛点：

*   **[Bug] slime-v0.3.0 运行 Qwen3.6 35B A3B 时第二次 rollout 出现乱码** ([#2091](https://github.com/THUDM/slime/issues/2091))
    *   **详情**: 开发者反馈在 slime-v0.3.0 配套 `slimerl/sglang:v0.5.12.post1-cu129` 镜像运行大参数量模型时，rollout 阶段输出乱码。对比测试发现，降级至 v0.2.4 及 `sglang:v0.5.9` 镜像后功能恢复正常。此问题大概率属于 sglang 推理引擎版本升级引入的底层推理缺陷，需要社区重点排查。
*   **[Bug] Colocate 权重更新因 PyTorch CUDA IPC `_share_cuda_` 报错失败** ([#2188](https://github.com/THUDM/slime/issues/2188))
    *   **详情**: 在 Megatron 后端 + SGLang rollout 引擎架构下，开启 `--colocate`、`--offload-train` 及 `torch_memory_saver` 预加载时，首个权重更新阶段会因 `cudaErrorInvalidValue` 崩溃。该问题直接阻断了显存优化模式下的训练流程，揭示了显存共享与 offload 机制间潜在的冲突。

### 4. 关键 PR 进展
核心代码提交目前主要围绕 Megatron 后端的 CI 测试与跨节点通信升级：

*   **feat: add Mooncake RDMA transport for rollout data** ([#1709](https://github.com/THUDM/slime/pull/1709))
    *   **进展**: 引入 Mooncake RDMA 传输协议用于 rollout 数据。在大规模 RLHF 训练中，rollout 阶段产生的数据传输往往会成为网络瓶颈，此 PR 旨在通过硬件级 RDMA 提升分布式节点间的数据吞吐率。
*   **run CI** ([#2053](https://github.com/THUDM/slime/pull/2053))
    *   **进展**: 日常持续集成测试专用 PR（标记为 DON'T MERGE），用于验证 Megatron 相关核心链路的最新代码健壮性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
slime 项目在当前的强化学习（RL）开源生态中具备独特的底层工程价值，原因如下：
1.  **直面大规模 RLHF 的工程痛点**：项目直接整合了 `Megatron`（分布式训练）与 `SGLang`（高效推理引擎），直击大模型 RL 过程中“训练-推理”混合部署的痛点。近期暴露的 Bug（如显存 offload 冲突、sglang 版本兼容性）也为整个开源生态提供了极具价值的避坑指南。
2.  **跟进前沿的底层通信与显存优化**：从引入 `Mooncake RDMA`（Mooncake 作为 KVCache 传输的热门架构）到支持 `torch_memory_saver` 与 `Colocate` 模式，slime 正在积极探索计算资源极致压榨的边界。对于需要从 0 到 1 搭建千卡 RL 训练集群的团队而言，这是一个必须密切盯盘的基础设施级项目。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-09 RL 生态日报摘要：

# AReaL 强化学习日报 (2026-07-09)

## 1. 今日速览
- **Issue 动态**：更新 2 条（1 个新提交，1 个已关闭）。
- **PR 动态**：更新 9 条（多项涉及底层训练引擎与显存优化的重要 PR 活跃中）。
- **新版本发布**：0 个。项目当前处于密集的功能迭代与底层修复阶段。

## 2. 版本发布
**今日无新版本发布。**

## 3. 重点 Issues
今日社区聚焦于特定硬件下的算子兼容性及多卡通信问题：

- **🆕 [BUG] CI 报错：A100 上 TE 2.16 升级引发 flash-attn 错误**
  - **详情**：在使用 A100 运行 `test_gsm8k_grpo` CI 测试时，升级 Transformer Engine (TE) 至 2.16 版本后，flash-attn 的 CUTE 后端暴露出 `crd2idx` 错误。该问题可稳定复现。
  - **链接**：[#1494](https://github.com/areal-project/AReaL/issues/1494)
- **✅ [BUG] 已解决：A800 上 AReaL ControllerV2 权重同步 NCCL 超时**
  - **详情**：此前关于 A800 环境下 ControllerV2 进行权重同步时出现 NCCL 超时的问题已于今日关闭。
  - **链接**：[#1439](https://github.com/areal-project/AReaL/issues/1439)

## 4. 关键 PR 进展
今日 PR 更新主要集中在 **显存极致优化、AWEX 混合部署及工程基建** 三个方向：

**🔍 训练与显存优化**
- **[safe-to-test] mcore HF 权重保存显存峰值优化**：通过在 CPU 暂存状态及提前释放 eager gather 缓冲区，解决 `save_weights_to_hf_with_mbridge_fast` 函数中 TP all-gather、HF state dict 与 NCCL scratch 显存叠加导致的高峰值问题。
  - **链接**：[#1489](https://github.com/areal-project/AReaL/pull/1489)
- **[safe-to-test] FSDP AWEX 权重同步类型转换修复**：修复 PR #1369 遗漏的 awex FSDP 适配器问题，在 broadcast 前将 fp32 存储权重安全转换为计算精度 (bf16)。
  - **链接**：[#1488](https://github.com/areal-project/AReaL/pull/1488)

**🚀 架构演进：AWEX 与混合部署**
- **[feat] AWEX 权重更新与同位置分配语法**：引入配置级别语法支持（如 `megatron[actor]:attn:d1p4t4c2|ffn:d1p4e8`），为基于 AWEX 同卡交互训练奠定基础。
  - **链接**：[#1493](https://github.com/areal-project/AReaL/pull/1493)
- **[feat] FSDP 基于 CUDA IPC 的同卡权重更新**：在 `AwexFSDPAdapter` 中实现通过 CUDA IPC 在共享 GPU 上更新 SGLang 推理权重，对齐 Megatron 路径。
  - **链接**：[#1361](https://github.com/areal-project/AReaL/pull/1361)

**🛠️ 算法与基建修复**
- **[fix] Online GRPO 会话分组错误**：修复 `group_size > 1` 时，并行启动会话导致无关对话被合并，进而引发 GRPO 优势归一化计算静默错误的问题。
  - **链接**：[#1392](https://github.com/areal-project/AReaL/pull/1392)
- **[feat] FSDP 与 SGLang 支持磁盘增量 LoRA 权重同步**：修复 FSDP 的 LoRA 存储路径，避免保存完整 HF 模型，实现纯磁盘侧的 PEFT 适配器同步。
  - **链接**：[#1233](https://github.com/areal-project/AReaL/pull/1233)
- **[ci] 添加 PyPI 发布工作流**：将 git 依赖替换为稳定的 PyPI 包 (`megatron-bridge==0.4.0`)，提升构建稳定性。
  - **链接**：[#1404](https://github.com/areal-project/AReaL/pull/1404)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击大模型 RLHF/GRPO 的工程痛点**：项目正在攻坚多卡多机训练中的底层通信瓶颈（如 NCCL 同步、CUDA IPC 同卡权重更新）。特别是 [#1489](https://github.com/areal-project/AReaL/pull/1489) 对保存权重时显存峰值的精细控制，是解决千亿参数模型 RL 训练 OOM 的核心关键。
2. **注重算法正确性与新范式适配**：不仅做工程封装，更深入算法细节（如 [#1392](https://github.com/areal-project/AReaL/pull/1392) 修复 Online GRPO 中组分配导致的方差计算错误），并支持对高效 PEFT (LoRA) 的直接强化学习对齐。
3. **探索极致的推训一体架构**：通过 AWEX（Agent/Worker Execution）和混合切片语法（Hybrid MoE syntax, [#1493](https://github.com/areal-project/AReaL/pull/1493)），AReaL 正在打破 Megatron 训练与 SGLang 推理的显存墙，这是当前实现高效 LLM 自我博弈 的前沿技术高地。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-09 HuggingFace TRL 强化学习生态日报摘要：

### 1. 今日速览
- **Issue 动态**：更新 7 条（其中 6 条为历史遗留问题被确认并关闭，1 条仍在讨论中）。
- **PR 动态**：更新 17 条（包含多项核心训练器底层机制修复与功能扩展）。
- **新版本发布**：0 个。项目当前处于高频代码整合与底层 Bug 修复阶段。
- **核心趋势**：今日的更新高度聚焦于**流式数据集的全面兼容**、**异步训练与通信底座优化**，以及**多模态蒸馏**的扩展。

---

### 2. 版本发布
无新版本发布。

---

### 3. 重点 Issues
今日更新的 Issues 多为历史遗留问题的彻底清理与确认：

*   **[CLOSED] [🐛 bug, 🏋 GRPO] IterableDataset not supported on GRPOTrainer** ([#2942](https://github.com/huggingface/trl/issues/2942))
    *   **摘要**：GRPOTrainer 此前不支持流式数据集（IterableDataset）导致程序崩溃，该问题已在近期的代码重构中彻底解决。
*   **[OPEN] Can gold_trainer support privileged context?** ([#5741](https://github.com/huggingface/trl/issues/5741))
    *   **摘要**：正在探讨当前的 `GOLDTrainer` 是否能在师生蒸馏网络中，支持教师模型带有“特权上下文”的输入模式。
*   **[CLOSED] [🏋 GRPO] GRPO:It takes the majority of time in generation using vllm** ([#2971](https://github.com/huggingface/trl/issues/2971))
    *   **摘要**：针对 13B 模型在 8卡 A800 上使用 vLLM 进行 GRPO 训练时，生成阶段耗时占比过高的性能讨论，该 Help Wanted 问题已被关闭。

---

### 4. 关键 PR 进展
今日的 PR 更新反映了 TRL 正在为下一代 RLHF 架构打地基，重点关注异步计算、流式处理和数据效率：

**🚀 异步与内核级性能优化**
*   **[OPEN] Delta weight sync for AsyncGRPO (sparse patches over HF Bucket)** ([#5937](https://github.com/huggingface/trl/pull/5937))
    *   **进展**：为实验性的 `AsyncGRPO` 引入**增量（稀疏）权重同步**机制。在 vLLM 权重同步时，仅检测并传输优化器步后发生变化的 bf16 权重（编码为稀疏 safetensors），极大降低通信开销。
*   **[OPEN] `chunked_nll` GPU and Neuron** ([#6314](https://github.com/huggingface/trl/pull/6314))
    *   **进展**：针对核心 SFT 训练 Loss 的数学计算和分块行为进行重构，专门针对 GPU 与 AWS Neuron 架构进行性能权衡优化。

**🌊 流式数据与评估体系全面打通**
*   HuggingFace 核心开发者 `albertvillanova` 集中提交了系列 PR，彻底完善流式训练支持：
    *   [**#6322**](https://github.com/huggingface/trl/pull/6322)：支持将 `DatasetDict` 或 `IterableDatasetDict` 作为主流训练器（SFT/DPO/KTO/GRPO/RLOO 等）的 `eval_dataset`。
    *   [**#6325**](https://github.com/huggingface/trl/pull/6325)：修复 KTO 训练器在流式评估下，使用非配对偏好数据导致的 Accelerate 调度崩溃问题。
    *   [**#6324**](https://github.com/huggingface/trl/pull/6324)：修复 GRPO/RLOO 拒绝 IterableDataset 时抛出的错误类型（从 `NotImplementedError` 改为更合理的异常）。

**🛠️ 架构清理与算法鲁棒性提升**
*   **[OPEN] Drop examples with no completion left after truncation in DPO and KTO** ([#6316](https://github.com/huggingface/trl/pull/6321))：当截断导致 completion tokens 全部丢失时，丢弃这些无学习信号且消耗算力的样本，提升 DPO/KTO 训练效率。
*   **[OPEN] [GOLD] Tool calling support for GOLDTrainer** ([#6328](https://github.com/huggingface/trl/pull/6328))：为 `GOLDTrainer` 增加多轮**工具调用**支持，打通同家族模型（共享 tokenizer）的知识蒸馏路径。
*   **[CLOSED] Environment-owned reward** ([#6238](https://github.com/huggingface/trl/pull/6238))：遵循 RFC #5912，允许自定义环境直接接管奖励计算（内置 `get_reward()`），简化 Agentic RL 的链路。*(注：此 PR 已关闭，推测代码已合并或重构到其他分支)*。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 依然是当前开源大模型对齐与强化学习的“事实标准”和最前沿阵地。从今日的代码动态可以看出两个明确的行业趋势：

1.  **极限工程优化破解 RLHF 瓶颈**：RL 训练长久以来受困于“生成耗时占比过高”和“权重同步昂贵”。TRL 正在通过深度融合异步机制（`AsyncGRPO`）、vLLM 增量权重同步，以及底层的 Chunked Loss 计算来突破显存与通信墙。
2.  **向 Agent 与多模态平滑演进**：无论是给环境赋予自主奖励计算的权力（Environment-owned reward），还是支持工具调用的蒸馏（Tool calling in GOLD），TRL 正在快速提供训练真正具有动作执行能力和多模态理解力智能体所需的脚手架。
3.  **企业级鲁棒性**：近期对 IterableDataset（流式数据集）近乎偏执的 Bug 修复与支持，表明 TRL 正在为大团队处理超大规模、无法载入内存的数据集扫清最后障碍，这通常是生产级落地的必经之路。

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

以下是 `verl` 项目 2026 年 7 月 9 日的强化学习（RL）开源生态日报摘要。

### 1. 今日速览
- **Issue 动态**：过去 24 小时内共有 56 条 Issue 发生活跃更新，社区讨论热度高。焦点集中在 0.4.0 版本的性能回退、多卡 OOM、B200/CUDA 12.8 环境兼容性，以及多轮对话与 VLM 的训练异常上。
- **PR 动态**：过去 24 小时内共有 17 个 PR 取得进展。开发者正在积极引入前沿的底层优化技术，包括基于 NCCL 的增量权重同步（Delta weight sync）、异步资源动态调度、vLLM/SGLang 的分离式推理，以及全新的 MAGI Attention。
- **版本发布**：今日无新版本发布。

---

### 2. 版本发布
无。目前项目仍在推进针对 v0.8.0（主要针对 Ascend 端和 Qwen3.5 适配）的代码合并和稳定性修复。

---

### 3. 重点 Issues
**性能与工程问题：**
- **#2009 [CLOSED]**：报告 `verl 0.4.0` 在 Actor 的前向/反向传播中，速度显著慢于 `0.3.0` 版本。（👍: 0 | 评论: 19）[查看链接](https://github.com/verl-project/verl/issues/2009)
- **#2031 [CLOSED]**：在 8 张 A6000 上跑 GRPO 时，即使是 Qwen2.5-1.5B 这样的小模型也会在 Rollout 阶段触发 CUDA OOM。（👍: 0 | 评论: 18）[查看链接](https://github.com/verl-project/verl/issues/2031)
- **#2015 [OPEN]**：讨论如何在 B200 上安装配置 Verl，指出目前的脚本强依赖 CUDA 12.4，而 B200 需要 CUDA 12.8+。（👍: 0 | 评论: 9）[查看链接](https://github.com/verl-project/verl/issues/2015)

**算法与核心机制讨论：**
- **#6609 [OPEN]**：使用 Megatron 后端训练 MoE 模型时，在上下文并行（`CP>1`）下 `grad_norm` 会爆炸至数千，且开启 `use_remove_padding` 会导致 Loss 计算报错。（👍: 1 | 评论: 7）[查看链接](https://github.com/verl-project/verl/issues/6609)
- **#2069 [OPEN]**：多轮对话场景下 `filter_overlong_prompts` 失效，导致 Tensor 尺寸不匹配报错。（👍: 5 | 评论: 10）[查看链接](https://github.com/verl-project/verl/issues/2069)
- **#2034 [CLOSED]**：对 Verl 中 k3 KL 估算器的代码实现提出疑问，认为与 John Schulman 博客中的数学公式不完全一致。（👍: 0 | 评论: 5）[查看链接](https://github.com/verl-project/verl/issues/2034)

---

### 4. 关键 PR 进展
**计算与通信性能优化：**
- **#6974 [OPEN]**：为分离式推理引入基于 NCCL 的增量权重同步。利用 RL 更新中 99% 权重不变的特性，每次 Step 只广播更新的参数，大幅降低 Trainer 到 Roller 的通信带宽开销。[查看链接](https://github.com/verl-project/verl/pull/6974)
- **#6689 [OPEN]**：引入 MAGI Attention，基于前缀树为 SFT 和 RL 训练提供共享前缀去重，加速长序列/多轮 Rollout 计算。[查看链接](https://github.com/verl-project/verl/pull/6689)
- **#6556 [OPEN]**：为全异步 PPO 引入混合推理资源动态缩放，解决 Trainer 等待 Rollout 数据时的 GPU 闲置问题。[查看链接](https://github.com/verl-project/verl/pull/6556)

**推理后端与框架融合：**
- **#6243 [CLOSED]**：接入 vLLM Prefill-Decode 分离式部署，结合 NIXL 与 Mooncake，支持 1 个 Prefill 引擎 + N 个 Decode 引擎的 GRPO 路由。[查看链接](https://github.com/verl-project/verl/pull/6243)
- **#6951 [OPEN]**：[Breaking Change] 废弃原生的 vanilla mBridge，正式将 Megatron Bridge 设为默认后端。[查看链接](https://github.com/verl-project/verl/pull/6951)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **突破强化学习的系统 I/O 瓶颈**：从今日密集的 PR（NCCL 增量同步、Prefix-tree MAGI Attention、vLLM P&D 分离）可以看出，`verl` 正在系统级解决大模型 RL 训练中“生成与训练速率不匹配”的核心痛点。它不再仅仅是一个算法库，而是演变成了一个高性能的 RL 基础设施。
2. **前瞻的硬件与底层栈适配**：社区在高速吸纳最新的硬件特性（如 Nvidia B200 / CUDA 12.8 兼容、针对 Hopper/Ampere 架构计算流的微调），并积极拥抱最新生态（如 PyTorch TorchTitan 引擎的集成 #5306）。
3. **多模态与异构算力支持成熟**：从针对 VLM (Qwen2.5-VL) 的复杂处理、到华为昇腾（Ascend 950DT / NPU）的深度适配和大规模千亿参数脚本的支持，表明该项目在跨越单一纯文本 GPU 训练边界，具备极强的工业级落地价值。

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

# RL 日报：Gymnasium 生态追踪 (2026-07-09)

## 1. 今日速览
过去 24 小时内，Gymnasium 生态整体处于平稳迭代期。无新增 Issues，无新版本发布，仅有 1 项关键代码质量修复提交。今日的焦点集中在底层边界条件的数据类型安全上。

## 2. 版本发布
**无**。
近 24 小时内官方未发布新版本。

## 3. 重点 Issues
**无**。
过去 24 小时内未产生新 Issue 或既有 Issue 的实质性讨论更新。

## 4. 关键 PR 进展
今日仅有 1 个活跃 PR，针对底层连续性逻辑的底层 Bug 提交了修复：

*   **[OPEN] Fix integer overflow in `Discrete.contains` for small dtypes (int8/uint8)** 
    *   **作者**: teddytennier
    *   **核心技术点**: 修复了 `Discrete` 空间在处理小精度数据类型（如 `int8`/`uint8`）时的整型溢出问题。在原有的 `Discrete.contains` 逻辑中，计算有效范围的上界 `self.start + self.n` 时，由于加法运算直接使用了空间自身较窄的数据类型，当空间内的最大元素逼近该数据类型的最大值（如 `int8` 的 127）时，会导致上界计算发生整型溢出，进而引发空间校验错误。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1616](https://github.com/Farama-Foundation/Gymnasium/pull/1616)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但类似 PR #1616 这样的微小修复，正是 Gymnasium 作为 RL 生态“底层基石”的核心价值体现：

1.  **极其严苛的工程可靠性要求**：随着 RL 应用向边缘设备部署或内存敏感型环境（需要使用 `int8` 等小精度类型以优化吞吐量和显存）发展，底层 API 的类型安全和边界条件处理变得至关重要。Gymnasium 对此类隐蔽的整型溢出 Bug 的排查与修复，保障了算法环境交互层数据的绝对准确性。
2.  **不可替代的生态标准**：自 OpenAI Gym 停止维护后，Gymnasium 已成为事实上的 API 接口标准。主流 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）均深度依赖其 `Env` 和 `Space` 抽象。关注 Gymnasium 的底层演进，等同于关注整个 RL 训练数据流最前端的稳定性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-07-09 强化学习（RL）开源生态日报摘要：

# 📊 RL 开源生态日报：PettingZoo (2026-07-09)

## 1. 今日速览
- **Issues 动态**：更新 2 条（1 个开启，1 个关闭）。
- **PR 动态**：更新 4 条（3 个开启，1 个关闭）。
- **版本发布**：0 个。当前主分支正处于下一个大版本发布前的清理与 API 标准化阶段。

## 2. 版本发布
**无**。
结合社区讨论，核心维护团队正在为发布下一个正式版本做前置准备，重点在于剔除冗余环境、拉齐与 Gymnasium 的 API 规范以及对齐底层依赖。

## 3. 重点 Issues
*   **核心维护：计划移除极少使用的环境**
    *   **[#1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383) [OPEN]**: 作者 `jkterry1` 提议在下个版本发布前移除 `TicTacToe` 和 `Gin Rummy` 环境。依据 GitHub 全局代码搜索结果，这两个环境在实际使用中处于几乎“零采用”状态（相比之下，石头剪刀布和四子棋使用频率更高）。这是典型的开源项目“做减法”以减轻维护负担的决策。
*   **功能提案：引入 Gymnasium 风格的注册表**
    *   **[#1387](https://github.com/Farama-Foundation/PettingZoo/issues/1387) [CLOSED]**: 作者 `Trenza1ore` 提议在不进行大规模重构的前提下，部分复兴此前的 #803 提案，仅实现包含 `make`, `register` 和 `spec` 的类 Gymnasium 注册表。此举旨在降低 Gymnasium 用户的迁移门槛。该 Issue 已关闭，因为提案已迅速转化为具体的 PR 代码实现。

## 4. 关键 PR 进展
*   **API 兼容性：修复非 Box/Discrete 观测空间的测试误报**
    *   **[#1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391) [OPEN]**: 作者 `teddytennant` 修复了 `api_test.py` 中的假阳性警告。之前，当环境使用合法的 `Dict`、`Tuple` 等非标准 NumPy 数组观测空间时，测试框架会错误抛出“Observation is not a NumPy array”警告。此 PR 提升了 MARL（多智能体强化学习）环境设计的灵活性。
*   **功能迭代：注册表环境 ID 规范化及代码质量优化**
    *   **[#1390](https://github.com/Farama-Foundation/PettingZoo/pull/1390) [OPEN]**: 作者 `Trenza1ore` 针对 #1388 遗留的问题进行了修复，规范化了版本号解析逻辑（如统一处理 `atari/basketball_pong_v3` 的命名空间与版本号格式），进一步完善类 Gymnasium 的注册表机制。
*   **环境清理与重构：引入 Gymnasium-like 注册表（核心实现）**
    *   **[#1388](https://github.com/Farama-Foundation/PettingZoo/pull/1388) [CLOSED]**: 作为 #1387 提案的代码落地，该 PR 成功添加了基础注册表功能及单元测试。已合并/关闭，后续文档更新将拆分至独立 PR 处理。
*   **依赖更新：对齐 Gymnasium 的 `pyproject.toml` 配置**
    *   **[#1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389) [OPEN]**: 作者 `Trenza1ore` 同步了与 Gymnasium 一致的依赖配置策略：在 Python 3.10-3.13 优先使用提供预编译包的 `box2d`，在 Python 3.14 使用提供源码分发的 `box2d-py`。

## 5. 为什么继续关注 PettingZoo？
1.  **生态 API 的一致性正在加强**：PettingZoo 正在积极向 Gymnasium（单智能体标准）的 API 设计范式靠拢（如引入 `make`/`register`）。这意味着未来强化学习算法工程师可以更低成本地实现单智能体到多智能体（MA）的代码库统一。
2.  **拥抱新版 Python 工具链**：项目正在紧锣密鼓地适配 Python 3.14 的底层变化（如 Box2D 依赖的拆分处理），这保证了基于最新工业界技术栈的可用性。
3.  **多智能体（MA）基准的“瘦身”与专注**：项目组通过硬指标（代码搜索量）剔除冗余环境，这表明生态正在走向成熟，未来维护团队可以将精力集中在维护高质量、高频引用的标准 MARL 环境上，减少历史包袱。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>