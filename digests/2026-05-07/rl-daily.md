# RL 开源生态日报 2026-05-07

> 生成时间: 2026-05-06 22:13 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“阶梯式分化”。面向 LLM Post-training 的大模型 RLHF 框架（verl、AReaL、TRL、slime 等）正处于高度活跃的底层架构重构与军备竞赛阶段，焦点全面转向 MoE 架构支持、异构硬件适配与大规模分布式性能压榨。相比之下，传统 RL 基础设施（Gymnasium、Stable Baselines3）和经典算法库（CleanRL、Tianshou 等）已进入成熟平稳期，主要围绕代码规范、供应链安全与类型系统进行维护。中小型研究机构（如 Allen AI）则在特定算法（GRPO）的工程鲁棒性和数据容错上持续打磨。

## 各项目活跃度对比
过去 24 小时有实际动态的项目活跃度如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 14 | 40 | 0 | 落地异构分离式推理架构，加速适配国产与异构算力 |
| **AReaL** | 11 | 20 | 0 | 推理-训练极致协同，解决 MoE 路由一致性与底层精度异常 |
| **TRL** | 4 | 26 | 0 | 对齐前沿 MoE 模型参数，深耕 VLM 长文本显存与算力优化 |
| **slime** | 6 | 11 | 0 | 极速响应前沿模型，攻坚 CP 通信与存储引发的系统级崩溃 |
| **Open Instruct** | 0 | 5 | 0 | 完善 GRPO 分布式指标与异常数据重采样的工程防护网 |
| **Gymnasium** | 0 | 2 | 0 | 推进 Vector API 的静态类型系统现代化重构 |
| **OpenRLHF** | 0 | 1 | 0 | 修复 Colocate 模式下训练与推理共存的显存资源冲突 |
| **ROLL** | 1 | 0 | 0 | 修复 Agentic 训练环境初始化与依赖挂载问题 |
| **Stable Baselines3** | 1 | 0 | 0 | 讨论底层依赖升级，规避 PyTorch 安全漏洞 (CVE) |

*(注：CleanRL、PettingZoo、Tianshou 等剩余项目过去 24 小时无任何动态，在此合并说明，不作展开)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **MoE 与多模态（VLM）的后训练范式**：Qwen3/3.5、DeepSeek-V3、Gemma4 等超大 MoE 及 VLM 模型全面成为 RL 生态的测试基准。研究重点转向解决这些模型在 RL 中的特有缺陷，如 TRL 对齐 MoE 测试参数、AReaL 引入路由回放机制（R3）解决异步训练中的推理-训练专家路由不一致问题。
2. **GRPO 算法的工程优化**：Open Instruct、TRL 和 verl 均在致力于提升 GRPO 的可用性，重点解决分布式训练中的 Reward 方差过滤（重采样机制）、训练指标统计准确度以及与新型推理框架的结合。

**工程/基础设施侧信号：**
1. **Prefill-Decode 分离与推理-训练极致解耦**：verl 实现的 1P+N Decode 异构部署，以及 AReaL 的 CUDA IPC 零拷贝权重传输，标志着大模型 RL 正在打破训练与推理同构的桎梏，通过推理侧的流水线并行（PP）和分离式调度压榨吞吐极限。
2. **长上下文与显存墙突破**：slime 和 TRL 均在重点修复 Context Parallelism (CP) 带来的通信乱序问题，并引入 Chunked NLL Loss 等机制。在节点内部，极度关注 Colocate 模式与 Offload 机制的协同，解决权重同步与异步 I/O 阻塞引发的系统崩溃。

## 差异化定位分析
- **verl 与 AReaL**：定位为“生产级重工业基础设施”。两者都在死磕极端规模下的工程痛点，但 verl 目前更侧重于多硬件生态（NPU/XPU）和异构分离式架构的广度拓展；AReaL 则更显硬核，深入到 FSDP 底层精度修正和 MoE 路由对齐等深度优化。
- **TRL**：定位为“前沿模型与算法的快速集成平台”。依托 HuggingFace 生态，TRL 的重心在于让最新的 SOTA 模型（如 tiny-model 测试重构）和算法能以最小的工程代价跑通，强调 API 规范和训练器的高效封装。
- **slime 与 OpenRLHF**：定位为“高性能且兼顾敏捷的基座”。slime 对前沿模型展现出了极速的响应力，并在上下文并行等具体工程点上深挖；OpenRLHF 则专注于解决 Ray + vLLM 分布式集群调度中常见的资源死锁与分配冲突。
- **传统基础设施阵营**：主要扮演“稳固的底层依赖”角色，核心诉求是代码规范的现代化（Gymnasium 的 Type Hints）和依赖树的安全合规。

## 社区热度与成熟度
- **第一梯队高活跃（verl、AReaL、TRL）**：社区已形成正循环，核心 Roadmap 驱动力强（如 verl 的 26Q2、AReaL 的 Q2 Milestones）。社区不仅贡献代码，更积极参与 RFC（如 Agent 抽象层、RDT 传输集成）。这些项目的 PR 往往涉及数万行代码或底层架构重构。
- **工程稳健期**：代码提交频率稍低，但提交质量极高，针对的是生产环境极易触发的致命级 Bug（如 CP 导致的 Token 乱序、Offload 下的 Segfault）。
- **高度成熟期**：进入“缝缝补补”的维稳状态。连 OpenRLHF 也鲜见架构级大更新，而 Gymnasium 和 SB3 则主要围绕类型重构和依赖安全（CVE 漏洞防御）展开。

## 值得关注的趋势信号
1. **Agent RL 的底层基础设施正在加速标准化**：verl 推出 `AgentFramework` RFC，ROLL 解决命令挂载问题，这暗示业界正从纯文本的 Chat RLHF 大步迈向需要沙箱解耦与环境容错的 Agentic RL。
2. **“同卡部署”正成为大模型 RL 显存优化的新常态**：为了减少跨节点通信的巨额开销，将 Training 与 Rollout 置于同一 GPU 节点但分时复用的 Colocate 模式大受追捧，带来了一系列基于 CUDA IPC 和零拷贝的底层技术创新。
3. **极致的精度与同步控制**：随着 MoE 模型参数量飙升，RLHF 训练中出现了一些前所未见的底层 Bug，例如 FSDP 混合精度下的 AdamW 状态降级，以及异步训练下的 MoE 专家路由偏差。这要求 RL 系统开发者不仅要懂分布式调度，还要对底层框架的显存管理和算子精度有极深的掌控力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-07）：

### 1. 今日速览
过去 24 小时，ROLL 项目整体活跃度趋于平稳。无新版本发布，无新增或更新的 Pull Requests。项目唯一的活动来自于历史 Issue [#412](https://github.com/alibaba/ROLL/issues/412) 的状态更新与讨论，显示社区在解决 Agentic Training 环境部署细节上的持续跟进。

### 2. 版本发布
今日无新版本发布。

### 3. 重点 Issues
- **[#412 [CLOSED] [Bug] Agentic Training Failed with "rock: command not found"](https://github.com/alibaba/ROLL/issues/412)**
  - **背景**：用户在使用 ROLL 进行 RL 训练时遇到中断。报错显示 `rock: command not found`，但诡异的是模型服务在报错前已显示安装并启动成功。
  - **分析**：该 Issue 创建于 3 月底，于 5 月 6 日发生状态更新并最终关闭。这种“服务已启动但命令未找到”的现象，通常指向容器化环境中的 `PATH` 变量未正确生效，或者 Agentic 运行时环境与 ROLL 的 `model service` 组件之间的依赖挂载/软链接存在问题。该 Bug 的最终关闭标志着相关环境配置或初始化脚本已得到有效修复。

### 4. 关键 PR 进展
过去 24 小时内无新增或更新的 Pull Requests。主分支代码处于稳定维护期。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管短期内代码提交频率不高，但 ROLL 在当前强化学习（特别是 LLM/Agent 的 RLHF 阶段）开源生态中具有不可替代的工程价值：
1. **专攻 Agentic 训练链路**：如 Issue #412 所示，ROLL 正在深入复杂的 Agentic RL 场景。与传统的静态文本 RL 不同，Agent 训练需要频繁与环境交互，ROLL 提供了这一过程所需的基础设施支持。
2. **高性能分布式架构**：作为阿里开源的框架，ROLL 专注于解决大模型在 Post-training 阶段的大规模分布式调度瓶颈，能够高效管理多节点下的 Actor 和 Reward Model 资源。
3. **生产级容错与生命周期管理**：Issue 中提到的 `model service` 安装和启动机制，印证了 ROLL 将模型服务视为可独立调度和监控的生命周期对象，这对于构建长时间、高稳定性的大规模 RL 训练任务至关重要。对于致力于突破 LLM 复杂推理能力的工程师而言，ROLL 的架构设计极具参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-05-07 RL 日报摘要：

# 📊 slime RL 生态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时内，slime 仓库保持高度活跃，共处理 **6 条 Issues**（3 open / 3 closed）和 **11 条 PRs**（3 open / 8 closed）。社区焦点高度集中于**新模型架构支持（Qwen3.5, Gemma4）**以及**训练底层机制的稳定性修复（CP通信、Checkpoint保存、Offload机制）**。未监测到新版本发布。

## 2. 版本发布
无最新 Release。

## 3. 重点 Issues
- **[Bug] Checkpoint 保存引发段错误回归**：[#1893](https://github.com/THUDM/slime/issues/1893)
  用户报告在 v0.2.4 版本中，开启 `--colocate` 和 offload 进行训练时，Checkpoint 保存阶段会稳定复现 `cudaMemcpyAsync` 段错误（Segfault），而在 v0.2.3 版本下运行正常。
- **[Bug] CP 聚合通信导致 Token 乱序**：[#1871](https://github.com/THUDM/slime/issues/1871) (已关闭)
  当 `context_parallel_size > 1` 且启用 `--allgather-cp` 时，底层注意力机制与数据预处理模块在序列重组逻辑上出现不匹配（zigzag vs contiguous）。该问题已通过 PR [#1891](https://github.com/THUDM/slime/pull/1891) 修复。
- **[Bug] Colocate + Offload 模式存档崩溃**：[#1886](https://github.com/THUDM/slime/issues/1886) (已关闭)
  导致 CUDA invalid argument 错误，根源在于 PR #1856 引入的回归问题。目前已被 PR [#1888](https://github.com/THUDM/slime/pull/1888) 修复。
- **[Question] 前沿模型支持进度追踪**：
  - **Qwen3.5 (e.g. 35B-A3B)**：[#1831](https://github.com/THUDM/slime/issues/1831) (Open)
  - **Gemma 4 & Olmo 3**：[#1885](https://github.com/THUDM/slime/issues/1885) (已关闭，由 Gemma4 支持性 PR 间接解决)
- **[Question] 社区集成需求**：[#1872](https://github.com/THUDM/slime/issues/1872)
  社区用户询问是否有集成 **MagiAttention**（一种针对 CP 上下文并行的注意力机制优化）的具体时间表。

## 4. 关键 PR 进展
### 🚀 新功能与架构支持
- **feat(gemma4): 新增 Gemma4 支持**：[#1855](https://github.com/THUDM/slime/pull/1855) (Open)
  提交了针对 Gemma4 26B-A4B (MoE) 和 31B (Dense) 模型的完整支持。涵盖模型架构、HF 到 Megatron 的权重转换，并已通过涵盖 TP/PP/DP/CP/EP/滑动窗口的多种并行一致性测试。
- **[Feature] 模块化实验追踪**：[#1591](https://github.com/THUDM/slime/pull/1591) (Open)
  引入了抽象的 `TrackingBackend`，并在 Wandb 和 Tensorboard 之外新增了 **MLflow** 后端支持，增强了 RL 训练过程的实验管理能力。

### 🛠️ 核心机制与 Bug 修复
- **fix(megatron): 幂等性 Rollout 修复**：[#1857](https://github.com/THUDM/slime/pull/1857) (Open)
  修复了 Megatron 后端在单次 `train()` 调用假设下引发的 idempotency bugs，确保 slime 在多次 Rollout 循环中的稳定性。
- **Fix: Colocate 模式 Offload 训练存档修复**：[#1888](https://github.com/THUDM/slime/pull/1888) (已合入)
  通过在 `save_model()` 流程中补充缺失的 resume/pause 逻辑，彻底解决了 Offload 模式下的 Checkpoint 保存崩溃问题 (Fixes #1886)。
- **fix: 限制 `--allgather-cp` 适用范围**：[#1891](https://github.com/THUDM/slime/pull/1891) (已合入)
  为防止 Token 乱序，将 `--allgather-cp` 强制限制仅在 DSA 模型下生效 (Fixes #1871)。
- **fix(qwen3.6): HF 配置校验与数据类型修复**：[#1889](https://github.com/THUDM/slime/pull/1889) (已合入), [#1883](https://github.com/THUDM/slime/pull/1883) (已合入)
- **fix: PPO Value Offload 修复**：[#1882](https://github.com/THUDM/slime/pull/1882) (已合入)

### 📦 工程化与 CI/CD
- 升级 CI Docker 镜像至 v0.5.11：[#1892](https://github.com/THUDM/slime/pull/1892) (Open)
- 补充缺失的 Metric 日志打印：[#1890](https://github.com/THUDM/slime/pull/1890) (已合入)
- 安装脚本路径修复：[#1877](https://github.com/THUDM/slime/pull/1877) (已合入)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **对前沿 MoE 及 Dense 架构的极速响应**：项目对 Qwen3.5、Gemma 4 等具有复杂架构（MoE、GQA、Sliding Window）的千亿级以下模型展现出了极强的工程落地能力，大幅降低了 LLM + RL 的启动门槛。
2. **深度攻克 RLHF 基础设施瓶颈**：slime 将核心精力投入到了 RL 训练最棘手的系统工程问题上——如 **Context Parallelism 中的通信与注意力显存优化**、**多后端间的权重转换对齐**，以及 **Colocate 与 CPU Offload 状态下的异步显存管理错误**。这些修复为大规模长文本 RL 训练提供了极高的稳定性保障。
3. **高度可扩展的 RL 训练范式**：通过支持 Pluggable Tracking Backends (如新增 MLflow) 并解决 Megatron Core 底层 `train()` 方法的调用时序问题，slime 正在从一个单纯的训练脚本，演变成一个能够兼容多种基础模型和多种并行策略的现代化 RL 底座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时内，AReaL 生态保持高度活跃，共处理 **11 个 Issues**（6 个新开，5 个更新）和 **20 个 PRs**（4 个新开，16 个更新），暂无新版本 Releases 发布。项目当前正处于 Q2 路线图规划与底层架构深度优化阶段，重点聚焦于 DeepSeek-V4 容错机制、大模型权重视步同步（RDT）、SGLang PP 支持以及新型优化器集成。

---

## 2. 版本发布
**无**（过去 24 小时内 AReaL 未发布新版本）。

---

## 3. 重点 Issues

### 🗺️ 战略规划与路线图
*   **[Roadmap] 2026 Q2 Milestones 正式公布**：规划了截至 2026 年 7 月 31 日的核心开发方向，进一步明确社区贡献切入点。
    *   链接：[#1302](https://github.com/inclusionAI/AReaL/issues/1302)
*   **Q1 路线图关闭**：2026 Q1 Milestones 已达成并关闭。
    *   链接：[#907](https://github.com/inclusionAI/AReaL/issues/907)

### 🚀 核心架构演进与需求
*   **DeepSeek-V4 推理容错机制实现**：计划复现 DeepSeek-V4 论文中提出的可抢占式推理服务，增强 AReaL 推理层的容错与调度能力。
    *   链接：[#1279](https://github.com/inclusionAI/AReaL/issues/1279)
*   **[RFC] 引入 Ray Core RDT 进行权重视步同步**：提议增加基于 Ray Direct Transport 的权重同步后端，以提升分布式场景下更新效率。
    *   链接：[#1243](https://github.com/inclusionAI/AReaL/issues/1243)
*   **Megatron 集成库迁移至 `megatron-bridge`**：为统一官方模型注册表，计划将主库从 `mbridge` 迁移至 `megatron-bridge`。
    *   链接：[#1260](https://github.com/inclusionAI/AReaL/issues/1260)
*   **沙箱后端解耦重构**：提议将沙箱从公共命名空间解耦，以更好地支持 Tool-Integrated Reasoning (TIR) 等代码执行工作流。
    *   链接：[#1283](https://github.com/inclusionAI/AReaL/issues/1283)

### 🐛 关键缺陷与精度修复
*   **FSDP 引擎 bf16 精度溢出导致收敛瓶颈**：修复 `torch.optim.AdamW` 在 bf16 下默认继承参数精度导致优化器状态非预期降级的问题（此 Bug 会导致收敛平台期比 DS-Z3 / Megatron 高约 3 倍）。
    *   链接：[#1292](https://github.com/inclusionAI/AReaL/issues/1292)
*   **树注意力机制产生多余转移对数概率**：发现并记录了 `_gather_packed_tree_logprobs` 中为序列最后一个节点错误计算附加转移概率的 Bug。
    *   链接：[#1308](https://github.com/inclusionAI/AReaL/issues/1308)

---

## 4. 关键 PR 进展

### 🌟 重大架构与性能提升
*   **支持 SGLang 推理层流水线并行**：实现推理侧的 `pp_size > 1`，完美适配 Megatron、FSDP、Archon 三大训练引擎。
    *   链接：[#1162](https://github.com/inclusionAI/AReaL/pull/1162)
*   **MoE 模型的路由回放机制**：引入 Rollout Routing Replay (R3)，通过记录和重放推理阶段的专家路由索引，解决异步 RL 训练中“推理-训练路由不一致”导致的训练不稳定问题。
    *   链接：[#1207](https://github.com/inclusionAI/AReaL/pull/1207)
*   **集成 Ray RDT 权重同步后端**：正式实现上述 RFC (#1243) 中的 RDT 传输后端代码。
    *   链接：[#1305](https://github.com/inclusionAI/AReaL/pull/1305)
*   **Archon 引擎 ZERO1 DTA 路径实现**：整合 ZERO1 数据并行与动态树注意力机制。
    *   链接：[#1287](https://github.com/inclusionAI/AReaL/pull/1287)
*   **AWEX 同卡部署 CUDA IPC 零拷贝权重传输**：Megatron 训练与 SGLang 推理共享 GPU 的情况下，通过 CUDA IPC 替代 NCCL P2P，大幅降低跨卡通信开销。
    *   链接：[#1310](https://github.com/inclusionAI/AReaL/pull/1310)

### 🛠️ 模型支持与功能扩展
*   **新增 Qwen3-VL 系列模型支持**：在 Megatron 路径中全面支持 Qwen3-VL Dense 与 MoE 架构的 GRPO/PPO 训练。
    *   链接：[#1301](https://github.com/inclusionAI/AReaL/pull/1301)
*   **引入 Muon 优化器**：探索集成最新的 Muon 优化器算法。
    *   链接：[#1270](https://github.com/inclusionAI/AReaL/pull/1270)
*   **支持 SGLang Eagle 推测解码**：提升推理引擎的解码吞吐量。
    *   链接：[#1176](https://github.com/inclusionAI/AReaL/pull/1176)

### 🚑 关键 Bug 修复与系统优化
*   **修复树注意力 logits 计算越界**：快速修复了 #1308 中提出的最后一个节点错误追加 logprob 的问题。
    *   链接：[#1309](https://github.com/inclusionAI/AReaL/pull/1309)
*   **FSDP LoRA 适配器引导支持**：允许 FSDP 后端直接从 adapter-only 格式的 checkpoint 恢复 LoRA 训练。
    *   链接：[#1241](https://github.com/inclusionAI/AReaL/pull/1241)
*   **管线控制器初始化异步化**：将所有服务控制器的阻塞式初始化重构为后台线程流水线模式，提升服务启动速度。
    *   链接：[#1294](https://github.com/inclusionAI/AReaL/pull/1294)
*   **vLLM LoRA 路由状态失效修复**：解决了动态更新时旧版本路由失效导致请求崩溃的问题。
    *   链接：[#1238](https://github.com/inclusionAI/AReaL/pull/1238)
*   **Megatron 权重保存优化**：新增 `mbridge.bridge.save_weights` 选项，解决 TP/PP 维度上全聚合导致的极高内存峰值问题。
    *   链接：[#1300](https://github.com/inclusionAI/AReaL/pull/1300)

### 📜 治理与合规
*   **实施“双审合并”政策**：更新 `CODEOWNERS` 和 `GOVERNANCE.md`，强制要求向 `main` 分支的 PR 必须获得两位维护者的批准。
    *   链接：[#1307](https://github.com/inclusionAI/AReaL/pull/1307)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **直击大模型 RLHF 工程痛点**：AReaL 正在解决 LLM 强化学习规模化后的深层工程难题。例如，近期针对 FSDP 混合精度下 AdamW 状态降级的修复（#1292）、CP-local 导致的指标漏算（#1242），以及 TP/PP > 1 时的多卡通信崩溃，这些都是在生产级 RLHF 中常踩的深坑。
2.  **MoE 与多模态训练的前沿探索**：项目正积极拥抱 Qwen3-VL（多模态）、Dense/MoE 架构，并创造性地推出 MoE Routing Replay (R3, #1207) 以解决异步训练中的路由不一致，这为基于稀疏大模型的 RL 提供了极具价值的参考路径。
3.  **推理-训练极致协同优化**：不仅关注训练端算法，AReaL 还花大力气重构 RL 基础设施架构，如同卡部署的 CUDA IPC 零拷贝权重传输（#1310）、SGLang 推理侧 PP 支持（#1162），以及 DeepSeek-V4 容错机制（#1279），致力于将“推理-训练”循环的延迟和资源浪费压到极致。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-07 RL 日报摘要：

# 🤖 TRL (Transformer Reinforcement Learning) 生态日报
**日期**: 2026-05-07 | **数据源**: [huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
- **Issues 更新**: 4 条 (2 个新提案，2 个进度追踪)
- **PR 活跃度**: 26 条 (包含多个底层架构重构和前沿模型支持)
- **版本发布**: 无

### 2. 版本发布
**无新版本发布**。目前主分支正处于高密度的底层重构与前沿模型适配阶段，预计将为下一个大版本积累重要特性。

### 3. 重点 Issues
*   **[#5713] [SFT / Accelerate] 探索 30B MoE 长上下文训练路径** 
    *   **摘要**: 社区开始推进 TRL 的 `SFTTrainer` 支持前沿 MoE 模型（如 Qwen3-30B-A3B / 235B-A22B）。目标是在 8×H100 节点上实现 16k 到 1M 上下文的长序列训练，并保持与稠密模型相当的 MFU（模型算力利用率）。
    *   **链接**: [huggingface/trl Issue #5713](https://github.com/huggingface/trl/issues/5713)
*   **[#5692] [Feature Request] AsyncGRPOTrainer 兼容 logits softcapping** 
    *   **摘要**: 提议在 `AsyncGRPOTrainer` 中增加对 `final_logits_softcapping` 的支持。这对于 Gemma 2 等使用了此技术的模型来说是关键的缺失功能。
    *   **链接**: [huggingface/trl Issue #5692](https://github.com/huggingface/trl/issues/5692)
*   **[#5695] [Experimental] 支持 OpenReward Standard (ORS) 环境适配器** (已关闭)
    *   **摘要**: 提议引入 `trl.experimental.openreward.OpenRewardEnv`，使 TRL 的 GRPO、RLOO 等算法能即插即用地与兼容 ORS (开放奖励标准) HTTP 协议的环境进行交互，扩展 RLHF 的生态边界。
    *   **链接**: [huggingface/trl Issue #5695](https://github.com/huggingface/trl/issues/5695)

### 4. 关键 PR 进展
**⚙️ 前沿模型与测试对齐**
*   **[#5716] 对齐 tiny Qwen3 MoE 配置** / **[#5638] 对齐 tiny GLM-4 MoE 配置** / **[#5715] 对齐 tiny DeepSeek V3 配置**
    *   **摘要**: 核心维护者正在大批量重构 TRL 内部的测试用模型参数，使 `tiny-models` 的非尺寸参数（如 `vocab_size`, `max_position_embeddings` 等）严格对标真实的 SOTA 开源模型，这将大幅减少由于配置差异导致的底层 Bug。
    *   **链接**: [PR #5716](https://github.com/huggingface/trl/pull/5716) | [PR #5638](https://github.com/huggingface/trl/pull/5638) | [PR #5715](https://github.com/huggingface/trl/pull/5715)

**🚀 核心训练器优化**
*   **[#5684] VLM SFT 训练启用分块 NLL loss (Chunked NLL)** 
    *   **摘要**: 为视觉语言模型 (VLM) 引入 Chunked NLL loss 路径支持，配合之前的 PEFT 分块计算，旨在大幅降低大模型微调的显存峰值。
    *   **链接**: [huggingface/trl PR #5684](https://github.com/huggingface/trl/pull/5684)
*   **[#5714] KTO Trainer 引入参考对数概率缓存机制** 
    *   **摘要**: 对齐 DPO Trainer 的实现，为 KTO Trainer 添加 `_precompute_ref_logps` 的缓存机制，避免参考模型的冗余计算，提升训练速度。
    *   **链接**: [huggingface/trl PR #5714](https://github.com/huggingface/trl/pull/5714)
*   **[#5698] 引入 MFU (模型算力利用率) 辅助计算工具**
    *   **摘要**: 增加了计算稠密模型和 MoE 模型 FLOPs 和 MFU 的 helper 函数，为超大规模 SFT 训练的性能 benchmark 提供标准化工具。
    *   **链接**: [huggingface/trl PR #5698](https://github.com/huggingface/trl/pull/5698)

**🛠️ API 与系统级重构**
*   **[#5717] 弃用 `torch_dtype`，统一使用 `dtype`**
    *   **摘要**: 清理历史遗留的 API，在所有的 Trainer 中使用更规范的 `dtype` 参数来控制模型加载精度。
    *   **链接**: [huggingface/trl PR #5717](https://github.com/huggingface/trl/pull/5717)
*   **[#5708] 暴露 vLLM 多模态缓存与调度参数** 
    *   **摘要**: 在 vLLM serve 脚本中开放了多模态处理器缓存和序列调度等底层参数，方便社区对基于 VLM 的 RLHF 推理 rollout 环节进行极致调优。
    *   **链接**: [huggingface/trl PR #5708](https://github.com/huggingface/trl/pull/5708)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **前沿 MoE 架构的极致支持**：从今日的 Issue #5713 及一系列 PR 可以看出，TRL 正在将重心从单纯的“支持 RL 算法”转移到“攻克前沿模型（Qwen3-MoE, DeepSeek-V3, GLM-4 MoE）在分布式 RLHF/SFT 下的工程瓶颈（如长上下文、MFU提升）。
2. **算力与显存的深度优化**：不论是针对 VLM 的 Chunked NLL loss（PR #5684），还是 DPO/KTO 中的 precompute ref logps 缓存，TRL 正在系统性地解决 RLHF 训练中“大模型作为 reward/reference 模型时显存开销过大”的痛点。
3. **基础设施的严谨化**：核心开发者正在不遗余力地将内部测试模型的结构与词汇表向真实世界模型（Qwen3, DeepSeek, Aya, Cohere）看齐（如 PR #5716），这表明项目在为未来一段时间的架构稳定性和复杂度支持打下坚实基础。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为你生成的 2026-05-07 OpenRLHF 项目 RL 日报摘要：

---

# RL 日报：OpenRLHF 技术追踪 (2026-05-07)

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体趋于平稳。无新增 Issue，无新版本发布，但有 1 项关于底层 vLLM 计算引擎资源分配的关键代码提交取得进展。当前项目核心维护聚焦于提升多卡分布式训练与推理（ colocated 模式）的底层稳定性。

### 2. 版本发布
过去 24 小时无新的 Release 发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
- **PR #1231** [OPEN] Fix vLLM GPU allocation for colocated tensor-parallel engines
  - **作者**: fuyuan-li
  - **更新时间**: 2026-05-06
  - **链接**: [OpenRLHF/OpenRLHF PR #1231](https://github.com/OpenRLHF/OpenRLHF/pull/1231)
  - **技术摘要**: 该 PR 旨在修复 Colocated（计算与推理共存/共置）模式下，Tensor-Parallel（张量并行）引擎的 GPU 资源分配错误（关联并关闭 Issue #1162）。修改点集中在 `create_vllm_engines` 函数中 `num_gpus` 参数的取值逻辑。此修复对于解决 LLM 强化学习训练中 PPO 等阶段常见的显存 OOM 或 GPU 资源冲突问题具有直接意义。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在大模型对齐与强化学习（RLHF/DPO/PPO）工程化落地的当前阶段，**算力成本与显存墙**是全行业面临的最大瓶颈。OpenRLHF 的核心价值在于其从架构底层实现了**训练与推理（Training & Generation）的深度解耦与优化**。
像今日更新中针对 vLLM 引擎的共存与张量并行修复，正是解决“多节点、多 GPU 复杂集群下如何高效进行大规模 RL 训练”的典型硬核工程问题。持续关注 OpenRLHF，本质上是持续追踪业界如何通过极致的系统级工程手段（如 Ray 集群调度、vLLM 推理加速、Zero3 显存优化）突破大模型对齐的算力限制。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 `verl` 项目 2026-05-07 RL 日报摘要：

# verl RL 生态项目日报 (2026-05-07)

## 1. 今日速览
过去 24 小时内，verl 项目保持高度活跃，无新版本发布。社区共更新了 **14 条 Issue**（5 条新建，9 条历史更新）和 **40 条 PR**（部分重点已合入）。当前生态的核心焦点集中在：**MoE 大模型（如 Qwen3.5/3.6）的后训练支持**、**Prefill-Decode (PD) 分离式推理架构的扩展**、以及**多模态与 Agent 强化学习框架的抽象与完善**。

## 2. 版本发布
无新版本发布。目前主分支正围绕 `26Q2 roadmap` 紧张开发中。

## 3. 重点 Issues

### 🗺️ 架构演进与路线图
- **[roadmap] verl 26Q2 路线图更新**：明确了 Megatron FSDP 启用、长上下文动态 CP、低精度训练 (MXFP8/NVFP4) 等关键性能优化方向。
  👉 [Issue #5836](https://github.com/verl-project/verl/issues/5836)
- **[RFC] Agent 抽象层与轨迹网关**：提议引入 `AgentFramework` 和 `Trajectory Gateway`，以解耦 Agent 生命周期管理与奖励计算，进一步标准化 Agent RL Pipeline。
  👉 [Issue #5790](https://github.com/verl-project/verl/issues/5790)
- **[RFC] 多模态生成 RL 迁移**：宣布多模态生成 RL 的支持已全面迁移至独立仓库 `[verl-project/verl-omni]`。
  👉 [Issue #5755](https://github.com/verl-project/verl/issues/5755)

### 🐛 核心缺陷与用户反馈
- **MoE 工具调用崩溃问题**：用户反馈在对 Qwen3.5/3.6 35B-A3B 模型进行多轮工具调用 Agent RL 训练时，大约 80-130 step 后出现工具调用格式异常，导致训练崩溃。
  👉 [Issue #6252](https://github.com/verl-project/verl/issues/6252)
- **Megatron LoRA 权重同步报错**：Qwen3-MoE 在使用 Megatron-Bridge 进行 LoRA GRPO 训练时，vLLM 的 `update_weights_from_ipc` 环节出现 `KeyError: embed_tokens.weight`。
  👉 [Issue #6256](https://github.com/verl-project/verl/issues/6256)
- **权重传输 IPC 路径冲突**：当同一台主机上启动多个 verl 任务时，Co-located 模式下的 IPC 路径因缺乏 Job ID 隔离而产生冲突（**此问题已在 PR #6246 中紧急修复**）。
  👉 [Issue #6233](https://github.com/verl-project/verl/issues/6233)

## 4. 关键 PR 进展

### 🚀 架构与性能优化
- **SGLang / vLLM PD 分离式 Rollout 实现**：引入 1 Prefill : N Decode 的非对称部署架构，极大优化 GRPO 的 Rollout 吞吐量。SGLang 已合入，vLLM 预留了 NIXL + Mooncake 的接线。
  👉 SGLang: [PR #6117](https://github.com/verl-project/verl/pull/6117) (Closed) | vLLM: [PR #6243](https://github.com/verl-project/verl/pull/6243) (Open)
- **Megatron-FSDP 后端支持**：为 Megatron 引擎正式添加 Megatron-FSDP 选项，支持 SFT 和 RL，进一步提升显存效率。
  👉 [PR #5423](https://github.com/verl-project/verl/pull/5423) (Open)
- **Trainer 异步生成转储优化**：修复了同步 I/O 阻塞训练循环的严重性能瓶颈，引入带异常传播和流式写入的异步 dump 机制。
  👉 [PR #6255](https://github.com/verl-project/verl/pull/6255) (Closed)
- **DataProtoFuture 延迟获取重构**：废弃了脆弱的 `collect_fn`，引入基于 `start_fraction` 和 `end_fraction` 的原生分块逻辑，提升分布式调度鲁棒性。
  👉 [PR #6234](https://github.com/verl-project/verl/pull/6234) (Open)

### 🔌 硬件生态与引擎扩充
- **全面支持 Intel XPU**：引入端到端的 XPU（Arc Pro / Data Center GPU Max）设备检测与 GRPO/PPO/SFT 训练支持（基于 FSDP + vLLM）。
  👉 [PR #6119](https://github.com/verl-project/verl/pull/6119) (Closed)
- **昇腾 NPU 支持 mindspeedmm 后端**：针对 NPU 设备添加了 mindspeedmm 引擎，原生支持 Qwen3.5-27B/35B 的大模型训练。
  👉 [PR #6199](https://github.com/verl-project/verl/pull/6199) (Open)
- **TensorRT-LLM 异步 RL 支持**：为 trtllm rollout 启用了端到端的 Async RL 功能。
  👉 [PR #5631](https://github.com/verl-project/verl/pull/5631) (Open)

### 🛠️ Bug 修复与易用性
- 修复 Ray Job ID 冲突：[PR #6246](https://github.com/verl-project/verl/pull/6246) (Closed)
- 修复 TorchTitanEngine API 兼容性与 attn_type 静默失效：[PR #6231](https://github.com/verl-project/verl/pull/6231) (Closed)
- 修复 Reward Manager 并行度计算错误：[PR #6226](https://github.com/verl-project/verl/pull/6226) (Closed)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **引领底层架构创新**：在 RLHF 训练中率先落地 `Prefill-Decode disaggregated rollout`，打破了传统 Trainer+Rollout 的同构耦合，通过异构推理架构（1P+N Decode）从根本上解决 GenRL 的生成瓶颈。
2. **极致的大模型与 MoE 适配能力**：从最近的 Issue 和 PR 可以看出，verl 团队及核心社区（如 Qwen 团队）正将其作为 **超大 MoE 模型（如 35B-A3B, 235B 等）** Post-training 的首选基座，密集解决了 Megatron LoRA、IPC 权重同步等底层大模型训练顽疾。
3. **广阔的多硬件与全栈支持**：不仅深度支持 NVIDIA 的 Megatron/vLLM/TrtLLM，还快速补齐了国产昇腾 NPU 与 Intel XPU 的端到端训练链路，且对 `Fully Async RL` 与 `Online Policy Distillation` 等前沿 RL 范式提供了开箱即用的支持。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库无新版本发布且无新 Issues 产生，开发重心完全集中在底层训练逻辑的修复与基础设施重构上。核心贡献者 `finbarrtimbers` 推进了 5 个 Pull Requests，主要涉及分布式训练指标计算修正、GRPO 数据流健壮性增强以及评估脚本的现代化改造。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 动态聚焦于提升 GRPO 算法在多卡分布式环境下的准确性与工程鲁棒性：

*   **#1659 [CLOSED] 修复 GRPO 分布式指标计算遗漏**
    *   **概要：** 修复了 `one_training_step` 中仅采集 rank 0 的 prompt/response 长度来计算 `num_step_tokens` 的 Bug。该缺陷导致在 DP (Data Parallel) world size > 1 时严重低估 token 吞吐量，现已修正为跨所有 ranks 聚合。
    *   **链接：** [allenai/open-instruct PR #1659](https://github.com/allenai/open-instruct/pull/1659)
*   **#1660 [OPEN] 修复 GRPO 过滤批次导致的空数据异常**
    *   **概要：** 增强了 `DataPreparationActor` 的容错性。当 `filter_zero_std_samples=True` 且所有组奖励的标准差为零时，旧代码会产生空的 `CollatedBatchData` 占位符并推进步数计数器。此 PR 引入了重采样机制，直接杜绝了下游 `grpo_fast.py` 触发空批次异常的风险。
    *   **链接：** [allenai/open-instruct PR #1660](https://github.com/allenai/open-instruct/pull/1660)
*   **#1656 [OPEN] 新增细粒度生成耗时指标**
    *   **概要：** 引入 `time/per_group_wall_time` 指标，计算批次内各组生成的真实平均耗时。这解决了原指标 `time/getting_response`（取各组最大耗时）在高并发请求下被尾部延迟严重膨胀、无法反映平均生成效率的问题。
    *   **链接：** [allenai/open-instruct PR #1656](https://github.com/allenai/open-instruct/pull/1656)
*   **#1658 [OPEN] 评估脚本重构：Python 到 Shell 的解耦**
    *   **概要：** 剥离了 `submit_eval_jobs.py` 中臃肿的 Beaker spec 构建逻辑，将其降级为传递参数的 wrapper，实际执行转交由新的 `submit_eval_jobs.sh` 负责（通过调用 `olmo-eval beaker launch`），提升了评估部署的灵活性和可维护性。
    *   **链接：** [allenai/open-instruct PR #1658](https://github.com/allenai/open-instruct/pull/1658)
*   **#1650 [OPEN] 统一离线策略修正接口 (IcePop)**
    *   **概要：** 实现了 IcePop 算法，并为离线策略修正提供了一个统一的接口设计。这是近期算法层面的重要扩展。
    *   **链接：** [allenai/open-instruct PR #1650](https://github.com/allenai/open-instruct/pull/1650)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
虽然今日未见新版本发布，但 Open Instruct 展现出了作为一个**成熟 LLM-RL 基础设施**的核心特质：工程打磨正在深水区推进。
1.  **直面分布式 RL 的痛点：** PR #1659 暴露并修复了 DP 环境下监控指标失真的问题，准确的 token 统计和利用率指标是大规模 RLHF/GRPO 训练进行性能调优的基石。
2.  **训练稳定性兜底：** PR #1660 针对 `zero_std_samples` 过滤逻辑导致的空批次打上补丁，并引入重采样，这表明项目正在为实际生产环境中可能出现的数据长尾分布做充足的健壮性兜底。
3.  **前沿算法与工程基建并重：** PR #1650 引入新的离线策略修正算法 IcePop，而同期的 PR #1658 则在持续优化底层评估脚本。这证明了项目在跟进前沿 RL 算法的同时，也在持续减轻整个技术栈的工程债务。对于希望构建稳定、可扩展 Post-training 管线的研究者和工程师而言，这些底层修复和重构具有极高的参考价值。

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

# RL 日报摘要：Gymnasium (2026-05-07)

## 1. 今日速览
在过去 24 小时内，Gymnasium 仓库整体处于平稳维护状态。未观测到新版本发布或新增 Issues。开发重心持续聚焦于底层代码质量的打磨，主要集中在向量化模块的静态类型系统重构。

## 2. 版本发布
- **最新 Releases**: 无。

## 3. 重点 Issues
- **最新 Issues**: 过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日有 2 项由核心贡献者 `jorenham` 发起的静态类型优化 PR 活跃，均针对向量化架构：

- **PR [#1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575) [OPEN] - 修复 `wrappers.vector.*` 中的类型错误并补充缺失的注解**
  - **技术细节**：重构了 `gymnasium.wrappers.vector.*` 子模块。修复了错误的 `TypeVar` 使用模式（包括未绑定的“自由”类型变量、错误的型变  以及缺失的上界类型参数约束）。
  - **链接**：[Farama-Foundation/Gymnasium PR #1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575)

- **PR [#1573](https://github.com/Farama-Foundation/Gymnasium/pull/1573) [OPEN] - 修复 `vector.**` 中的类型错误并补充缺失的注解**
  - **技术细节**：针对 `gymnasium.vector.*` 及 `gymnasium.vector.utils.*` 模块进行静态类型改进，已通过 `pre-commit` 检查。
  - **链接**：[Farama-Foundation/Gymnasium PR #1573](https://github.com/Farama-Foundation/Gymnasium/pull/1573)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的 RL 生态中，Gymnasium 依然是不可替代的基础设施：
1. **API 标准的定义者**：作为事实上的行业标准，它定义了环境与智能体交互的统一规范。所有主流 RL 算法库（如 Stable Baselines3, CleanRL, Tianshou）均以此为底层依赖。
2. **对工程严谨性的极致追求**：如近期密集的 PR 所示，项目团队正在深度推进全面的静态类型检查。这不仅能显著提升 IDE 的智能提示体验，还能在编译阶段拦截由于环境 `reset()`/`step()` 数据类型不匹配导致的运行时错误，极大地提高了下游 RL 算法工程的可维护性与健壮性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报摘要：Stable Baselines3 (SB3) - 2026-05-07

## 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库整体活动趋于平稳。未产生新的代码合并请求（PR）与版本发布。社区焦点集中于供应链安全领域，出现了一个关于底层依赖 PyTorch 版本限制及潜在 CVE 漏洞的议题。

## 2. 版本发布
无。

## 3. 重点 Issues
- **[#2250] [Question] Update minimum Torch requirement to avoid "Improper Resource Shutdown" (CVE-2025-3730)**
  - **作者**: JacopoPan
  - **状态**: Open
  - **概述**: 社区开发者报告了由于 SB3 当前对 PyTorch 的最高版本限制（`torch<2.8.0`），触发了关于 CVE-2025-25390（不当资源关闭）的安全合规警报。作者提议将 SB3 的 PyTorch 最低依赖版本从 2.3 直接提升至 2.8，以规避相关依赖供应链中的安全漏洞并保持库的现代性。
  - **链接**: [DLR-RM/stable-baselines3 Issue #2250](https://github.com/DLR-RM/stable-baselines3/issues/2250)

## 4. 关键 PR 进展
无。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 SB3 看似在 API 层面已高度成熟且日常提交趋于稳定，但该议题反映出它在 RL 开源生态中不可替代的**基础设施属性**。作为大量下游项目（如机器人仿真、量化交易、游戏 AI）的底层依赖，SB3 的依赖树健康度（Dependency Health）和安全性（CVE 防御）直接决定了整个生态的可靠性。类似是否 Bump PyTorch 依赖的讨论，体现了项目维护者在“保持向下兼容性”与“安全合规”之间必须持续进行的权衡。持续关注 SB3 不仅能掌握强化学习最标准化的 API 动态，也是监控 RL 工程化落地中供应链风险的重要风向标。

</details>