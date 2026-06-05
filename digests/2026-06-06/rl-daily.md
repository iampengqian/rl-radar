# RL 开源生态日报 2026-06-06

> 生成时间: 2026-06-05 22:22 UTC | 覆盖项目: 15 个

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
当前 LLM 强化学习开源生态呈现出明显的“冰火两重天”格局：一方面，面向传统离散控制（如 Gymnasium、SB3、Tianshou）和经典算法的研究型工具链已进入极度稳定的维护期甚至停滞期；另一方面，以 LLM Post-training 为核心的 RL 基础设施项目正在疯狂重构和演进。
生态的重心已全面转移至**大规模、超长上下文、多模态大模型在分布式集群上的对齐与强化学习训练**。开源项目的竞争壁垒已经从“谁的 PPO 写得好”演变为“谁的显存优化更深、异构计算与分布式通信支持更广”。

## 各项目活跃度对比
以下为 2026-06-06 各项目活跃度指标（无活动项目已省略，统一归入“无活动”行）：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 14 | 47 | 0 | **生态绝对核心**。聚焦多模态补齐、跨硬件（AMD/Ascend）布局及深度显存/通信压榨。 |
| **TRL** | 10 | 21 | 0 | **高频迭代**。引领前沿算法（A2PO/AsyncGRPO），重点突破 VLM 多模态对齐与 DDP 底层瓶颈。 |
| **AReaL** | 2 | 12 | 0 | **深耕底层传输**。聚焦异构引擎解耦与极速权重同步，快速跟进 GDN 等前沿模型架构。 |
| **slime** | 2 | 8 | 0 | **极致算子优化**。重构轨迹管理，引入算子融合与 FLOPs 感知微批次，攻坚极低精度训练（NVFP4）。 |
| **ROCK** | 2 | 1 | 0 | **工业级 K8s 底座**。专注于多租户/多编排引擎集群下的状态同步与系统级容错。 |
| **open-instruct** | 0 | 2 | 0 | **前沿架构探索**。快速引入 OLMo-Hybrid (GDN) 混合注意力机制，优化 DPO 算力利用率（MFU）。 |
| **ROLL** | 0 | 2 | 0 | **国产算力发力**。全面重构以适配华为 Ascend NPU 与 Megatron 分布式算子。 |
| **OpenRLHF** | 0 | 1 | 0 | **算法推陈出新**。保持向后兼容的同时，快速集成 REBEL 等最新离线奖励回归对齐算法。 |
| **rl_games** | 0 | 1 | 0 | **跨硬件适配**。修复 Apple MPS 兼容性，跟进 NumPy 2.x 与 Envpool 升级。 |
| **无活动项目** | 0 | 0 | 0 | Gymnasium, PettingZoo, SB3, Tianshou, torchtune 过去 24 小时无动态。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **混合注意力（GDN）与新型 MoE 架构的快速接入**：Qwen3.5、Gemma-4 以及 OLMo-Hybrid 成为各大框架今日适配的焦点，这要求 RL 框架在权重转换、前向传播逻辑甚至检查点保存上做出根本性改变。
2. **离线与在线对齐算法的边界融合**：生态不再满足于纯 PPO 或基础 DPO。引入 REBEL 奖励间隙回归、A2PO 最优优势回归等新型损失函数，表明研究正趋向于更稳定、样本效率更高的轻量级对齐方案。

**工程/基础设施侧信号：**
1. **多模态数据流与 VLM 对齐的“填坑”**：各大项目（如 verl、TRL）正在集中修复视觉模型在 Agent Loop 中的张量维度崩溃、patch 适配以及 DPO/KTO 对 VLM 架构的兼容问题，标志着 RLHF 已实质性跨越纯文本阶段。
2. **面向千亿参数的分布式通信与显存极致压榨**：针对长上下文和巨大词表引发的 OOM，分块计算、算子融合、卸载冗余计算成为核心手段。
3. **大规模权重同步机制的升维**：从全量广播向稀疏增量同步、基于 Ray Direct Transport 以及底层 CUDA-IPC (FP8) 直传演进，以降低异构集群中 Rollout 到 Training 的通信壁垒。

## 差异化定位分析
- **verl & TRL（LLM RL 双寡头）**：两者目前充当着“大一统基础设施”的角色。verl 更侧重于**跨硬件、跨底层引擎**的分布式极端压榨；TRL 则更侧重于对 **HuggingFace 原生生态**的深度融合及前沿对齐算法的敏捷集成。
- **AReaL & slime（底层系统级优化先锋）**：这两者表现出了极强的硬核系统属性。slime 专注于通过算子级重构（如 PPO 融合）和底层 FLOPs 感知来压榨单机/集群算力；AReaL 则死磕大规模异构分布式训练中训练与推理引擎的极致解耦与通信痛点。
- **ROCK & ROLL（工业级云原生与异构底座）**：阿里系双子星展现了 ToB/工业界的特色。ROCK 专注于解决 K8s/Ray 集群级别的调度容错与多租户隔离；ROLL 则作为国产算力（华为 Ascend）在高阶 RL/Megatron 生态上的核心拓荒者。
- **open-instruct & OpenRLHF（前沿研究探路者）**：更贴近学术与前沿探索。open-instruct 致力于最新非标准 Transformer 架构（Hybrid/GDN）的对齐跑通；OpenRLHF 则提供了一个快速验证新型对齐数学模型（如 REBEL）的高度模块化沙盒。

## 社区热度与成熟度
1. **第一梯队（verl、TRL）生态虹吸效应显著**：单日高达数十个 PR 和 Issues，痛点已向前沿模型适配及深水区的 NCCL/Liger 内核级 Bug 转移，表明其在工业界已具备大规模部署成熟度。
2. **中坚力量（AReaL、slime、OpenRLHF）聚焦核心系统突破**：社区互动量虽然适中，但提交质量极高。多为框架级重构或关键性能优化，表明项目正处于高速但也相对稳态的底层架构演进期。
3. **传统 RL 框架（Gymnasium、SB3 等）进入“封神台”阶段**：项目达到极高的成熟度后停滞，说明 LLM 时代的范式转移已经确立，传统 RL 社区目前处于沉淀期，核心关注点已完全让位于 LLM Post-training。

## 值得关注的趋势信号
1. **异构算力崛起打破 NVIDIA 垄断**：verl 推出 AMD/ROCm 路线图，ROLL 深耕 Ascend NPU，rl_games 修复 Apple MPS 兼容。面向 LLM 的 RL 基础设施正在加速向“多云、多卡、多架构”的高兼容性方向演进。
2. **从“可用”向“极低精度与极低延迟”演进**：slime 探索 NVFP4 参与 RL 训练，AReaL 尝试 FP8 CUDA-IPC 权重直传。这暗示着下一代 RL 训练将把极低精度计算贯穿至生成和更新的全生命周期。
3. **后端执行引擎的“军备竞赛”**：SGLang 与 vLLM 正在成为 RL 框架的标配 Rollout 后端（如 AReaL 的双端兼容）。解耦训练与推理，并对这些引擎进行底层“魔改”以适应 RL 特殊的权重更迭频率，已成为项目构建护城河的关键。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-06）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体保持平稳运行。社区无新增 Issue 和版本发布，开发重心目前聚焦于**国产算力（华为 Ascend NPU）的生态适配与持续集成（CI）建设**。现有 2 个活跃 PR 均围绕 NPU 底层支持及测试工作流展开。

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
当前有 2 个关于 NPU 适配的开放 PR，均在昨日（06-05）有更新推进：

*   **PR #454 [OPEN] feat: add npu ci yaml and fix tests**
    *   **作者**: UsernameFull
    *   **核心内容**: 增加基于 GitHub Actions 的 Ascend NPU CI 工作流配置（`.github/workflows/ci-npu-test.yml`），并修复相关单元测试与运行时的兼容性问题，以保障代码在 NPU 环境下的正确执行。
    *   **链接**: [alibaba/ROLL PR #454](https://github.com/alibaba/ROLL/pull/454)

*   **PR #456 [OPEN] [feat] Support ascend mindspeed&megatron and add CI tests**
    *   **作者**: shun001
    *   **核心内容**: 扩展 NPU 高阶支持（包含并演进自 PR #380）。主要引入基于 MindSpeed 的 NPU 初始化补丁、平台检测修复、Megatron 框架优化器的显存卸载兼容性更新，以及针对 NPU 的 Attention Mask 处理逻辑。同时新增了 Ascend MindSpeed CI 测试流及 Qwen3 DPO Megatron 的示例配置。
    *   **链接**: [alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 项目当前展现出了明确的**异构算力与分布式大模型训练整合趋势**。通过 PR #454 和 #456 可以看出，ROLL 正在深度绑定 Ascend NPU 硬件生态，并着手解决 RLHF/DPO 训练中极为核心的痛点——**基于 Megatron 等分布式框架的强化学习算子（如 Optimizer Offload、Attention Mask）在国产算力上的兼容性**。
随着大模型对齐需求激增，能够在不同硬件集群（NVIDIA + Ascend）上无缝切换且具备完善 CI/CD 验证的开源 RL 基础设施极度稀缺。ROLL 在这一方向的工程化落地，使其成为构建大规模、跨平台 Post-training 基建时不可忽视的底座项目。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-06-06）：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库整体活跃度平稳。共处理 Issues 2 条（1 条已关闭，1 条新开放），合并/关闭 Pull Requests 1 条，无新版本发布。当前社区焦点集中在优化底层基础设施（K8s 调度与文件系统管理）的健壮性。

### 2. 版本发布
- **最新 Releases**：近期无新版本发布。

### 3. 重点 Issues
- **[#1067] [CLOSED] K8sOperator 错误处理泄漏底层 404 异常**
  - **描述**：当 Sandbox 在 Redis/DB 中存在，但其对应的 K8s BatchSandbox CRD 资源已被删除时，`get_status()` 接口未拦截底层的 `ApiException(404)`，导致原始 K8s 内部错误直接暴露给客户端。
  - **链接**：[alibaba/ROCK Issue #1067](https://github.com/alibaba/ROCK/issues/1067)
- **[#1069] [OPEN] FileCleanupTask 清理逻辑导致排除目录失效**
  - **描述**：`FileCleanupTask._build_cleanup_command()` 在生成清理空目录的 bash 命令时，同时使用了 `-depth` 和 `-prune` 参数。根据 GNU find 手册，指定 `-depth` 会使 `-prune` 动作失效，导致 `exclude_dirs`（如 docker 目录）被错误地当作空目录删除。
  - **链接**：[alibaba/ROCK Issue #1069](https://github.com/alibaba/ROCK/issues/1069)

### 4. 关键 PR 进展
- **[#1068] [CLOSED] 修复 K8s CRD 资源不存在时的异常捕获**
  - **描述**：针对 Issue #1067 的修复方案。该 PR 在 `K8sOperator.get_status()` 中引入了异常捕获机制，当 K8s CRD 未找到时返回 `None`。此逻辑与 `RayOperator` 的行为保持一致，使上层 `SandboxManager` 能够优雅地执行回退（fallback）逻辑，而非直接抛出异常。
  - **链接**：[alibaba/ROCK PR #1068](https://github.com/alibaba/ROCK/pull/1068)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 作为工业级强化学习基础设施，其当前的开发动态呈现出显著的“深水区”特征：
1. **强化大规模分布式稳定性**：从 #1067 和 #1068 的修复可以看出，项目正在深度打磨多编排引擎（Ray/K8s）下的状态同步与容错机制。在复杂的 RL 训练中，算力节点的异常退出与资源回收是家常便饭，优雅处理 K8s CRD 残留/丢失状态是保障百卡/千卡级别训练集群稳定运行的基础。
2. **深耕底层存储与集群环境清理**：Issue #1069 暴露出在高频日志写入和容器销毁场景下，文件系统级清理任务对边界条件的严苛要求。无损的 `exclude_dirs` 逻辑对于保障共享存储卷（如 NFS 映射的 `/data/logs`）下的容器运行时（Docker daemon）数据安全至关重要。
在 RL 开源生态普遍聚焦于算法层创新的当下，ROCK 持续在工程化、多租户调度和底层容错方向输出高质量修复，为长周期、大规模 RL 训练任务的工业化落地提供了不可替代的基础设施底座价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-06-06 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，slime 项目保持较高的代码活跃度，无新版本发布。社区共更新了 **2 条 Issues** 和 **8 条 Pull Requests**。今日核心动向集中在**显存与性能优化**（PPO 算子融合）、**底层架构重构**（轨迹管理器）以及**前沿大模型与硬件的支持**（Gemma 4、NVFP4 量化、FLOPs 感知微批次划分）。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
今日的 Issue 主要反映了社区在多模态扩展和第三方模型接入时的技术需求。
- **#2019 [Question] Unsupported tool_call_parser: qwen3**：用户在接入 Qwen3 模型时遇到了 `tool_call_parser` 不支持的解析错误。这表明随着基础模型的快速迭代，slime 的工具调用适配器需要进一步扩展兼容性。
  链接：[THUDM/slime Issue #2019](https://github.com/THUDM/slime/issues/2019)
- **#2023 [Question] sglang-omni + slime RL**：用户询问后续是否会将 sglang-omni（涉及 TTS 等多模态模型）接入 slime 进行 RL 训练。标志着社区对 slime 从纯文本 LLM 扩展到 Omni 多模态 RL 训练框架的强烈期待。
  链接：[THUDM/slime Issue #2023](https://github.com/THUDM/slime/issues/2023)

### 4. 关键 PR 进展
今日的 PR 包含了极具价值的大型架构重构与性能优化，以及相关文档和 CI 的日常维护（如 #2021, #2022 已关闭）。

- **#2005 [Draft] Refactor trajectory manager**：对核心的“轨迹管理器”进行重构。作为 RLHF/PPO 框架的命脉，此重构预示着 slime 在处理 rollout 数据流、内存分配上将迎来重大底层升级。
  链接：[THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005)
- **#2011 perf(ppo): reduce log-prob + entropy cross-entropy peak memory**：**重磅性能优化**。将 PPO_utils 中的 log-prob 和 entropy 计算融合为单一的 autograd Function，有效减少重复 logits 张量的显存克隆。同时反向传播复用 Megatron 的张量并行（TP）计算，大幅降低 PPO 训练的峰值显存。
  链接：[THUDM/slime PR #2011](https://github.com/THUDM/slime/pull/2011)
- **#2017 feat: add --balance-by-flops**：引入基于 FLOPs 感知的动态微批次划分。通过 `coeff * L + L²` 替代单一的 token count 样本均衡，精准反映 Attention 机制的二次计算复杂度，将有效提升长上下文场景下的 GPU 计算利用率。
  链接：[THUDM/slime PR #2017](https://github.com/THUDM/slime/pull/2017)
- **#1505 [Feature] Support nvfp4 RL**：支持 NVFP4（NVIDIA 4-bit 浮点）在 RL 训练流程中的应用，进一步探索极低精度下的 RL 训练可行性。
  链接：[THUDM/slime PR #1505](https://github.com/THUDM/slime/pull/1505)
- **#1855 feat(gemma4): add Gemma4 26B-A4B MoE and 31B dense support**：全面适配 Gemma 4 系列模型（包括 26B-A4B MoE 架构和 31B Dense 架构）。包含 HF 到 Megatron 的权重转换、TP/PP/DP/CP/EP 等各种并行策略的校验及重工具化集成。
  链接：[THUDM/slime PR #1855](https://github.com/THUDM/slime/pull/1855)
- **#2024 Log progress while waiting for placement group**：改善 Ray 分布式集群启动体验，解决在等待 Placement Group 资源注册时程序无日志输出的“假死”问题。
  链接：[THUDM/slime PR #2024](https://github.com/THUDM/slime/pull/2024)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 RLHF 底层显存痛点**：通过算子级融合（PR #2011）而非单纯的参数调整来降低 PPO 的显存峰值，这对在千亿参数模型上进行大规模 RL 训练至关重要。
2. **深度结合分布式计算与系统级优化**：引入 FLOPs 感知的动态 Batch 划分（PR #2017）和 Ray 集群调优，表明该项目具备工业级大规模集群实战导向，而非简单的算法包装。
3. **紧跟 SOTA 硬件与模型架构演进**：从底层支持 NVFP4 等前沿低精度计算格式，到迅速跟进并支持 Gemma 4 的复杂 MoE 架构，证明了项目在底层张量并行与模型转换上的高延展性。配合正在重构的轨迹管理器，项目正为下一代多模态与超大规模 MoE 模型的 RL 训练铺平道路。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-06-06）：

# AReaL RL 生态日报 (2026-06-06)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共处理了 **2 条 Issues** 和 **12 条 Pull Requests**（其中 4 条_merged/closed_，8 条_new/updated_）。无新版本发布。
当前项目重心集中在**底层推理/训练引擎兼容性（如 Qwen3.5、vLLM）**、**分布式权重同步机制优化**以及**实验性架构的快速迭代**。

## 2. 版本发布
无最新 Release 发布。

## 3. 重点 Issues
- **[[BUG] clear_batches() 在非 DP 头节点引发崩溃 (TP/PP > 1)](https://github.com/areal-project/AReaL/issues/1298)**
  - **摘要**: 由 #1282 引入的回归 Bug。当张量并行（TP）或流水线并行（PP）大于 1 时，`clear_batches()` 会在非数据并行（DP）头节点上发生崩溃。目前已被标记为 `[stale]`，亟待修复跟进。
- **[[Feature] 支持 FP8 权重传输 (awex colocated CUDA-IPC 路径)](https://github.com/areal-project/AReaL/issues/1359)**
  - **摘要**: 呼吁在 #1310 引入的 colocated CUDA-IPC 权重传输路径中，解除 `fp8_direct_convert=False` 的硬编码限制，原生支持 FP8 权重直传以提升显存与通信效率。

## 4. 关键 PR 进展

### 🏗️ 模型支持与引擎更新
- **[feat(megatron): 支持 Qwen3.5 dense + MoE 训练推理](https://github.com/areal-project/AReaL/pull/1384)**
  - 核心进展：通过 megatron-bridge 适配 Qwen3.5 系列。针对其最新的 GDN（Gated Delta Net）混合注意力架构，完成了权重转换和前向传播逻辑的重写。
- **[[WIP] support R3 for vllm backend](https://github.com/areal-project/AReaL/pull/1389)**
  - 核心进展：为 vLLM 后端引入 Rollout Routing Replay (R3) 支持，要求 vLLM 版本 >= 0.22.0。
- **[Fix LoRA model training](https://github.com/areal-project/AReaL/pull/1385)**
  - 核心进展：修复了 SGLang 后端下 LoRA RL 训练的阻塞 Bug，增加了对陈旧 LoRA 适配器的清理机制，显著提升了单卡（24GB）下的训练稳定性。

### ⚙️ 分布式与通信架构优化
- **[feat(experimental): 集成 Ray RDT 进行权重同步](https://github.com/areal-project/AReaL/pull/1305)**
  - 核心进展：引入基于 Ray Direct Transport (RDT) 的权重同步后端，实现了 TransferPlan 分片选择和 FSDP 权重元数据提取。
- **[feat: FSDP 与 SGLang 的磁盘级 LoRA 增量权重同步](https://github.com/areal-project/AReaL/pull/1233)**
  - 核心进展：实现了基于磁盘的 LoRA 适配器同步，修复了 FSDP 在 `use_lora=True` 时保存全量模型而非 PEFT 产物的冗余问题。

### 🧪 实验性功能与系统修复
- **[refactor(experimental): 整合 DTA Archon 集成](https://github.com/areal-project/AReaL/pull/1391)**
  - 核心进展：将动态 Token 对齐（DTA）支持整合进实验性的 Archon 路径，并修复了微批次构建的问题。
- **[fix: 为 GRPO 在线会话添加 group_id](https://github.com/areal-project/AReaL/pull/1392)**
  - 核心进展：修复了 `group_size > 1` 时，无关用户对话被错误合并导致 GRPO 优势归一化计算静默出错的严重问题（Fixes #1304）。
- **[fix[v2]: 本地化控制器端的 RTensor 轨迹数据](https://github.com/areal-project/AReaL/pull/1387) (已合并)**
  - 核心进展：修复了 v2 推理服务代理返回远程张量字典时，导致的 `AttributeError` / `TypeError` 崩溃问题。

### 📝 社区与文档
- **[docs(roadmap): 更新 2026 Q2 及 H2 里程碑](https://github.com/areal-project/AReaL/pull/1390)**：更新了路线图文档。
- **[chore: 迁移社区治理文件至外部仓库](https://github.com/areal-project/AReaL/pull/1386) (已合并)**：将行为准则和贡献指南迁移至独立的 Community 仓库。
- **[Add rollout trace logging with trackio](https://github.com/areal-project/AReaL/pull/1360)**：集成 HuggingFace 的 Trackio 以支持 RL 训练轨迹追踪。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **紧跟 SOTA 模型底层架构**: 从今日的 PR 进展（如 [#1384](https://github.com/areal-project/AReaL/pull/1384) 针对 Qwen3.5 的 GDN 架构适配）可以看出，AReaL 在跟进前沿大模型架构方面极为迅速，确保 RLHF/GRPO 算法能第一时间在最新模型上跑通。
2. **极度关注异构系统的分布式瓶颈**: Issues 中对 CUDA-IPC FP8 传输的探讨，以及 PR 中对 Ray RDT ([#1305](https://github.com/areal-project/AReaL/pull/1305)) 的集成，表明该项目在挑战 RL 训练中最棘手的“大规模分布式权重同步”难题。
3. **深度整合主流推理引擎**: 社区和核心开发者正在并行推进对 SGLang ([#1233](https://github.com/areal-project/AReaL/pull/1233), [#1385](https://github.com/areal-project/AReaL/pull/1385)) 和 vLLM ([#1389](https://github.com/areal-project/AReaL/pull/1389)) 的底层支持与修复，致力于解耦训练与推理引擎，打造高吞吐、低延迟的 rollout 基础设施。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习生态日报
**日期**：2026-06-06 | **数据源**：github.com/huggingface/trl

---

### 1. 今日速览
过去 24 小时内，TRL 仓库保持了较高的社区活跃度。没有产生新的版本发布，但底层架构与前沿算法的迭代在加速推进。今日共有 **10 条 Issue 更新**（多为历史关键 Bug 修复与架构讨论的收尾）和 **21 条 PR 更新**。核心趋势集中在 **多模态对齐、底层分布式训练 DDP 修复、以及异步入境策略的极致优化**。

---

### 2. 版本发布
无新版本发布。

---

### 3. 重点 Issues
今日更新的 Issues 大量聚焦于 GRPO 算法的机制确认、vLLM 集成限制以及 Liger Kernel 的底层兼容性：
- **GRPO 核心机制讨论**: Issue [#3662](https://github.com/huggingface/trl/issues/3662) 探讨了在已有 `num_iterations` 的情况下，`steps_per_gen` 参数在策略更新中的设计意图。
- **vLLM Server 模式断连**: Issue [#3648](https://github.com/huggingface/trl/issues/3648) 报告了在 vLLM 0.9.1 版本下，GRPO Trainer 无法连接至服务器模式运行，影响了大规模部署。
- **显存溢出与 NCCL 通信**: Issue [#3039](https://github.com/huggingface/trl/issues/3039) 记录了使用 GRPOTrainer 训练时，特定 Step 下系统内存暴增并 OOM 的底层 NCCL P2P 通信问题。
- **Liger Kernel DDP 梯度同步危机**: Issue [#5282](https://github.com/huggingface/trl/issues/5282) 深入探讨了在 GKD/GOLD 训练器中使用 Liger 损失时，unwrap 模型导致的 DDP 梯度同步失效风险。

---

### 4. 关键 PR 进展
今日的 Pull Requests 凸显了 TRL 在多模态与极致算力优化上的演进：

**🚀 前沿算法与架构升级**
- **异步 GRPO 权重同步**: PR [#5937](https://github.com/huggingface/trl/pull/5937) 为 `AsyncGRPO` 引入了基于 HF Bucket 的稀疏增量权重同步，避免每次全量广播策略权重，大幅降低异构训练中的通信开销。
- **A2PO 实验性算法引入**: PR [#5940](https://github.com/huggingface/trl/pull/5940) 增加了基于 "Optimal Advantage Regression" 的 A2PO 算法，旨在加速 LLM 推理任务的强化学习收敛。
- **SFT 加权损失**: PR [#5952](https://github.com/huggingface/trl/pull/5952) 在 `SFTTrainer` 中新增 `loss_type='weighted_nll'`，支持基于样本级别浮点权重的 NLL 缩放，为 RL 前的高质量数据筛选提供轻量级手段。

**👁️ 多模态 对齐扩展**
- **DPO 支持 Liger VLM**: PR [#5943](https://github.com/huggingface/trl/pull/5943) 打通了 DPOTrainer、视觉数据集与 Liger Kernel 的兼容性，调用完整的模型骨干网络处理视觉输入。
- **KTO 全面支持 VLM**: PR [#5939](https://github.com/huggingface/trl/pull/5939) 为 KTOTrainer 引入了针对非成对视觉偏好数据的新型数据整理器，正式对齐 VLM 训练能力。

**🛠️ 核心底层修复**
- **修复 Liger DDP 包裹错误**: PR [#5934](https://github.com/huggingface/trl/pull/5934) 修正了蒸馏/GKD 训练器中 Liger 损失计算绕过 DDP 包装器的严重问题，保障分布式训练的内存效率和数值正确性。
- **修复 GRPO Backbone 获取**: PR [#5949](https://github.com/huggingface/trl/pull/5949) 统一了 GRPO 与 SFT 获取模型 Last hidden state 的方式，提升了跨不同 `transformers` 库版本的鲁棒性。
- **修复 GOLD 跨 Tokenizer 对齐**: PR [#5885](https://github.com/huggingface/trl/pull/5885) 使用字节偏移替代原先的纯字符串解码对比，修复了 GOLD trainer 在处理多字节字符时的对齐崩溃问题。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在从一个“集成各类对齐算法的工具库”，演进为**面向超大规模 LLM 的工程化 RL 基础设施**。基于今日的数据观察：
1. **打破单模态限制**：DPO/KTO 对 VLM（视觉语言模型）和 Liger Kernel 的系统性支持，表明 TRL 正在将 RLHF 能力标准化地迁移至多模态领域。
2. **解决异构分布式训练痛点**：从 `AsyncGRPO` 的稀疏增量同步到修复底层 Liger/DDP 冲突，项目正在针对性地解决 LLM 在千卡/万卡规模下的通信壁垒和内存溢出瓶颈。
3. **灵活的工程妥协设计**：如 SFT 中引入的 `weighted_nll`，TRL 团队非常善于提供介于“纯监督微调”和“完整的 RL 轨迹循环”之间的轻量级妥协方案，这对工业界落地控制训练成本具有极高的实际价值。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 强化学习日报 (2026-06-06)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库无明显社区波动（Issues 更新 0 条，Releases 0 个），但核心算法库迎来了一项重要的功能扩展 PR。项目目前处于平稳迭代期。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **过去 24 小时无新增或更新的 Issues**。

## 4. 关键 PR 进展
今日唯一且最核心的更新在于离线对齐算法的扩展：

- **[#1247] [OPEN] Added REBEL-inspired offline reward-gap regression loss to DPO trainer**
  - **作者**: LeoPhilly
  - **链接**: [OpenRLHF/OpenRLHF PR #1247](https://github.com/OpenRLHF/OpenRLHF/pull/1247)
  - **技术摘要**: 该 PR 为 DPO（Direct Preference Optimization）训练器引入了基于 [REBEL (Reinforcement Learning via Regressing Relative Rewards)](https://arxiv.org/abs/2404.16767) 论文的**离线奖励间隙回归损失**。
  - **工程实现**: 作为可选功能集成在原有的 DPO pipeline 中，通过 `--model.rebel_enable` 标志启用，并使用 `--model.eta` 参数进行调节。此改动保持了与现有 DPO 训练流的向后兼容性，为 LLM 对齐提供了一种基于相对奖励回归的新型优化目标。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

尽管今日 Issue 和 Release 挂零，但从 PR #1247 可以清晰看出 OpenRLHF 在当前 LLM 强化学习生态中的核心卡位：

1. **紧跟前沿对齐算法（SOTA Tracking）**：OpenRLHF 不局限于传统的 PPO 或基础的 DPO，而是快速吸收并实现学术界最新的对齐算法（如本次引入的 REBEL 相对奖励回归机制）。这种敏捷的迭代速度使其始终处于 LLM Post-training 技术的最前沿。
2. **模块化与高可扩展性**：该 PR 完美展示了项目的架构优势——通过参数开关（`--model.rebel_enable`）而非侵入式修改来引入新损失函数。这种高度解耦的工程化设计，极大降低了算法研究人员进行消融实验和混合损失函数调试的成本。
3. **统一的离线/在线 RLHF 基座**：通过将 REBEL 这类离线奖励模型训练方法无缝融入 DPO trainer，OpenRLHF 正在构建一个既能处理纯离线偏好数据，又能支撑大规模在线 RLHF（如 Ray-based 分布式 PPO）的统一基础设施。对于需要复用底层算子、对比不同对齐策略的工业级研发团队而言，是不可或缺的开源基座。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 (2026-06-06)

## 1. 今日速览
过去 24 小时，verl (github.com/volcengine/verl) 生态保持高度活跃。社区共更新了 **14 个 Issues** 和 **47 个 PR**。整体焦点集中在 **多模态（MLLM）支持补齐、Megatron 后端的显存/训练稳定性优化、以及异步引擎的架构演进**。

## 2. 版本发布
- **最新 Releases**: 无新版本发布。

## 3. 重点 Issues
当前社区核心痛点围绕在新架构模型（如 Qwen3.5、Gemma-4）的适配以及底层分布式训练的稳定性上：

- **前沿模型适配受阻**：
  - **Qwen3.5 训练报错**: 使用 vLLM 训练 Qwen3.5 时存在不兼容问题 ([#6563](https://github.com/verl-project/verl/issues/6563))；同时，Qwen3.5-35B-A3B (MoE架构) 在 Megatron 后端因 `mbridge` 不支持而报错 ([#6627](https://github.com/verl-project/verl/issues/6627))。Gemma-4 也被曝出在 Megatron 后端训练时触发装饰器层面错误 ([#6613](https://github.com/verl-project/verl/issues/6613))。
  - **Qwen3.6 支持计划**: 社区呼吁尽快支持 Qwen3.6，目前该 Issue 已被关闭，可能已在排期中 ([#6130](https://github.com/verl-project/verl/issues/6130))。

- **多模态数据流缺陷**：
  - 多模态数据过滤不支持图片路径（仅支持 bytes/PIL.Image），导致数据预处理易崩溃 ([#6623](https://github.com/verl-project/verl/issues/6623))。此外，因强制使用错误的 `image_patch_size=14`，导致视觉模型在 agent_loop 中触发 `torch.cat` 维度不匹配的崩溃 ([#6592](https://github.com/verl-project/verl/issues/6592))。

- **分布式训练稳定性与性能**：
  - **MoE 梯度爆炸**: 使用 Megatron 后端且开启 `CP>1` 和 `use_remove_padding` 训练 MoE 模型时，出现 `grad_norm` 爆炸问题 ([#6609](https://github.com/verl-project/verl/issues/6609))。
  - **PPO 静默错误**: 主干 `main_ppo_sync` 在 agent-loop 失败时，可能会默认在残缺的 rollout 批次上静默继续训练，引发隐患 ([#6437](https://github.com/verl-project/verl/issues/6437))。

- **架构级 RFC 与硬件扩展**：
  - 社区提出 **Prefix-Tree Shared Attention** 机制，旨在优化 GRPO/多轨迹 RL 训练中重复 Prefix 的冗余计算，获得 5 个 👍 ([#6401](https://github.com/verl-project/verl/issues/6401))。
  - 官方发布 **AMD/ROCm 支持路线图** (26Q2/Q3)，致力于补齐在 MI355X 等芯片上的生态缺口 ([#6590](https://github.com/verl-project/verl/issues/6590))。

## 4. 关键 PR 进展
今日 PR 动态主要集中于显存优化、异步架构重构及关键 Bug 修复：

- **核心显存与通信优化**：
  - **长文本蒸馏 OOM 修复**: 实现分块 `gather-logsumexp`，将 Top-K Loss 计算中的巨量显存（原 Qwen 词表 64K+ tokens 下需 ~28GB）大幅降低 ([PR #6593](https://github.com/verl-project/verl/pull/6593))。
  - **Megatron 显存降维**: 统一优化器状态和 DDP grad bucket 的精度，避免 Adam moments 在 bf16 下占用 3 倍的 fp32 显存 ([PR #6526](https://github.com/verl-project/verl/pull/6526))。

- **异步与引擎架构升级**：
  - **TransferQueue 架构迁移**: 针对全异步流水线，将数据传输通道从 Ray MessageQueue 迁移至更高效的 TransferQueue ([PR #6628](https://github.com/verl-project/verl/pull/6628))。
  - **多轨迹支持**: 在 fully-async pipeline 中引入多轨迹采样支持，提升 RL 探索效率 ([PR #6271](https://github.com/verl-project/verl/pull/6271))。

- **模型支持与算子修复**：
  - **Qwen3.5 LoRA & MTP**: Megatron 后端集成 Megatron-Bridge 补丁，正式补齐 Qwen3.5 的 LoRA 与 MTP 支持 ([PR #5599](https://github.com/verl-project/verl/pull/5599))。
  - **Megatron Offloading 修复**: 解决了开启 `use_precision_aware_optimizer` 时优化器卸载失败的兼容性问题 ([PR #6635](https://github.com/verl-project/verl/pull/6635))。
  - **反向图计算优化**: 移除系数为 0 时的 entropy 和 KL 的不必要梯度计算，优化 Actor 反向图开销 ([PR #6519](https://github.com/verl-project/verl/pull/6519))。
  - **多模态路径修复**: 修复了数据集中直接传入多模态文件路径时的占位符解析问题 ([PR #6631](https://github.com/verl-project/verl/pull/6631))。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **极致的工程优化导向**：verl 团队与社区正在解决 LLM RL 训练中最棘手的工程瓶颈。无论是针对 MoE 架构在 CP>1 下的梯度爆炸、还是长上下文带来的巨量 Peak Mem (如 FSDP Top-K Loss 的分块改造)，均显示出其在超大规模分布式训练上的深厚积累。
2. **从纯文本向全模态 RL 快速演进**：从视觉模型 `patch_size` 适配、到多模态 agent loop 数据流的修复，verl 正在快速扫清 MLLM（如 Qwen-VL 系列）在 RLHF/GRPO 阶段的工程障碍。
3. **打破硬件与底层框架绑定**：推出 AMD/ROCm 路线图并深度打磨昇腾 NPU (Ascend) 的 CI/CD 流程，同时向上游同时兼容 FSDP 与 Megatron 核心，verl 正在确立自己作为 **“跨硬件、跨底层的 RL 训练统一基础设施”** 的生态地位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 RL 开源生态日报摘要（2026-06-06）：

### 1. 今日速览
过去 24 小时内，`allenai/open-instruct` 仓库无新版本发布和新增 Issues。项目活跃度集中在底层训练框架的架构演进上，贡献者 `finbarrtimbers` 连续提交了两个重要的 PR，核心聚焦于 **OLMo-Hybrid (GDN) 模型在 Olmo-core 中的支持与 DPO 训练性能优化**。

### 2. 版本发布
- **最新 Releases**: 无。

### 3. 重点 Issues
- **最新动态**: 过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
今日的 PR 动态主要围绕 Hybrid 架构的适配，涉及底层依赖升级和显存/算力优化（MFU）：

- **PR #1715: Olmo-core scripts 支持 Hybrid 模型的依赖与环境准备**
  - **作者**: finbarrtimbers
  - **状态**: [OPEN] (创建于 2026-06-05)
  - **摘要**: 为支持 Hybrid 模型，该 PR 进行了三项关键的基础设施更新：1) 支持仅对选定模块进行 Checkpoint（因为 GDN 层无法进行常规检查点保存）；2) 提升 FLA (Flash Linear Attention) 的版本号；3) 显式添加 `tilelang` 依赖。
  - **链接**: [allenai/open-instruct PR #1715](https://github.com/allenai/open-instruct/pull/1715)

- **PR #1713: Olmo-core 代码全面引入 Hybrid 模型及 DPO 训练器优化**
  - **作者**: finbarrtimbers
  - **状态**: [OPEN] (近期更新于 2026-06-05)
  - **摘要**: 在 OLMo-core 的 DPO 训练脚本 (`dpo.py`) 中添加了 OLMo-Hybrid (GDN) 的支持，并大幅提升了模型算力利用率 (MFU)。具体包括：升级 `olmo-core` 以引入 `olmo3_hybrid_7B` 配置预设和 HF 权重转换脚本；实现了 DPO 微批次到 `ma...` 的打包处理。
  - **链接**: [allenai/open-instruct PR #1713](https://github.com/allenai/open-instruct/pull/1713)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
AllenAI 的 `open-instruct` 一直是开源 LLM 对齐（如 SFT、DPO、RLHF）的标杆基础设施。今日的 PR 动态释放了一个明确的技术信号：**基于混合架构的模型正在快速接入偏好对齐流程**。
- **软硬协同优化对齐算法**：PR #1713 中对 MFU (Model FLOPs Utilization) 的实质性改进以及对 Microbatch 的打包处理，表明社区正在解决大模型在 RL/DPO 阶段普遍存在的算力利用率低下问题。
- **前沿架构的快速响应**：通过引入 GDN 层、升级 FLA 并添加 `tilelang` 依赖（PR #1715），项目正在突破传统 Transformer 在长上下文处理中的算力瓶颈。对于关注 LLM 强化学习底层训练效率、线性注意力机制与 RL 结合的研发团队而言，该项目的演进具有极高的前瞻参考价值。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报 - 2026年06月06日

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活跃度趋于平缓。无新增 Issues 和 Releases，仅有 1 个依赖更新相关的 PR 正在处理中。核心关注点在于 JAX 生态依赖的向下兼容性与持续集成（CI）的修复。

🔗 项目主页: [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

## 2. 版本发布
过去 24 小时无新版本发布。最新 Releases 记录为空。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
当前有 1 个处于 `OPEN` 状态的 PR，主要针对底层依赖的维护：

*   **[#554 fix: refresh jax extra dependency pins](https://github.com/vwxyzjn/cleanrl/pull/554)**
    *   **作者**: Mr-Neutr0n
    *   **状态**: Open | 创建于 2026-06-04 | 更新于 2026-06-05
    *   **技术摘要**: 该 PR 修复了现有 JAX 相关依赖版本锁定过时导致 CI 崩溃的问题。当前锁定的 `jaxlib==0.4.7` 等底层包已无法从官方索引中正常解析。作者对此系列依赖（`jax`, `jaxlib`, `flax`, `optax`, `chex`）进行了版本刷新，以恢复 JAX 算法测试环境的正常运行。

## 5. 为什么这个项目在当前 RL 生态值得继续关注

1.  **零学习门槛的算法透明度**: CleanRL 摒弃了复杂的面向对象和深层抽象，提供单文件、单算法的实现（如 PPO, DQN, SAC）。这是研究人员验证新 Idea、学生学习 RL 底层运行机制的最佳“活教材”。
2.  **紧跟前沿与多后端支持**: 尽管代码结构极简，项目同时支持 PyTorch 和 JAX（如 PR #554 所维护的生态）。这为需要利用 JAX 的 `jit` 编译进行大规模加速的纯函数式 RL 研究提供了快速启动模板。
3.  **健康的底层维护**: 像 PR #554 这样的提交证明了项目在积极维护外部依赖的兼容性。在深度学习框架和加速库（如 JAX/NumPy 更新频繁）快速迭代的当下，保持 CI 的畅通意味着该项目提供的 RL 基准代码始终是可用且可信的。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 项目动态 (2026-06-06)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库整体趋于平稳。无新增 Issues、无新版本发布，仅有 1 个关于 Apple MPS 支持及依赖项更新的 Pull Request 产生状态变更。

## 2. 版本发布
过去 24 小时内**无新版本**发布。

## 3. 重点 Issues
过去 24 小时内**无新增或更新**的 Issues。

## 4. 关键 PR 进展
- **[#351 Apple MPS support + envpool 1.2.5](https://github.com/Denys88/rl_games/pull/351)** `[CLOSED]`
  - **作者**: [Denys88](https://github.com/Denys88)
  - **动态**: 该 PR 于 2026-06-05 发生状态更新，现已关闭。
  - **核心改动**: 
    1. **Apple MPS 兼容**: 修复了底层代码中强制使用 `float64` 导致在 Apple MPS (Metal Performance Shaders) 后端报错的问题（主要涉及 `rl_games/algos_torch/running_mean_std.py` 等模块）。
    2. **依赖升级**: 将 `envpool` 版本升级至 1.2.5，这是该库首个兼容 `numpy 2.x` 的版本。
    3. **文档补充**: 恢复并补充了缺失的环境池配置文档 `docs/ENVPOOL.md`。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期发版频率较低，`rl_games` 依然是 RL 生态中极具工程价值的底座项目：
- **多后端及多硬件支持**：从 PR #351 可以看出，项目正在积极适配 Apple Silicon (MPS) 等非 CUDA 硬件，结合其原有的 CPU/CUDA 支持，为研究人员在异构硬件上训练模型提供了统一接口。
- **紧跟核心依赖生态**：通过升级 `envpool` 以支持 `numpy 2.x`，项目正在消除底层依赖的破坏性变更隐患，确保其能够无缝融入现代 Python 科学计算的最新生态。
- **生产级算法实现**：作为众多强化学习环境（如 Isaac Gym, Envpool）默认推荐的高性能训练框架，其代码高度优化，是研究大规模并行 RL 算法的优质参考对象。

---
*数据来源: [github.com/Denys88/rl_games](https://github.com/Denys88/rl_games)*

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>