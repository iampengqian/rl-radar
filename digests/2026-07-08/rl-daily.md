# RL 开源生态日报 2026-07-08

> 生成时间: 2026-07-07 22:21 UTC | 覆盖项目: 15 个

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

当前强化学习（RL）开源生态已明确分化为三大阵营，且均处于高速演进阶段：
1. **大规模 LLM/RLHF 训练栈**：以 verl、TRL、AReaL、slime 为代表。这些项目正全力向千亿级 MoE 模型（如 DeepSeek V4、Qwen3.5 397B）、长上下文及多模态场景拓展，核心目标是压榨集群算力极限与解决分布式训练的显存墙。
2. **Agent 与沙箱基础设施**：以 ROCK 为代表。重心在于为智能体提供高健壮的代码执行沙箱、奖励验证机制及复杂任务的生命周期管理。
3. **传统/学术 RL 标准 API**：以 PettingZoo、Gymnasium 为代表。侧重于 API 规范的统一与降级，主要服务于经典算法、多智能体（MARL）研究以及教育/原型验证场景。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 54 | 38 | 0 | 底层重构（Megatron-Bridge），攻坚 PD 分离与全异步范式，积极适配国产算力 |
| **TRL** | 5 | 26 | 0 | 架构演进为 Agent RL 基础设施，死磕 AsyncGRPO 通信与 Tokenization 底层解耦 |
| **AReaL** | 3 | 24 | 0 | 聚焦 Colocate 训练，严守算法层统计正确性，开始布局 Agent 自我演进框架 |
| **slime** | 1 | 21 | 0 | 拥抱 CUDA 13 与 RDMA，打磨 SGLang+Megatron 协同，提升 Off-policy 算法精度 |
| **ROCK** | 3 | 8 | 0 | 即将发布 v1.10.0，密集修复沙箱执行环境边缘 Bug，推进多后端解耦架构 |
| **PettingZoo** | 1 | 3 | 0 | 积极与 Gymnasium 的 API 进行对齐，补齐录制等工程化可视化基础设施 |
| **Open Instruct**| 1 | 1 | 0 | 修复底层 LR 失配陷阱，通过引入 CPU-Adam 降低 GRPO 硬件门槛 |
| **ROLL** | 1 | 0 | 0 | 扩充针对 Ascend NPU 与 Megatron 生态的兼容性，推进 CI 测试规范化 |
| **Gymnasium** | 0 | 0 | 0 | 核心架构高度成熟，处于极简维护期 |
| *其他项目* | *0* | *0* | *0* | OpenRLHF, CleanRL, SB3, Tianshou, torchtune 等今日无活跃动态。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **算法实现的极致严谨性**：RL 训练对底层统计错位高度敏感。今日多个项目（如 AReaL 修复 PPO Advantage 归一化、slime 修复 GRPO 不均匀 rollout 基线计算、Open Instruct 修复 LR 失配）都在集中清理隐式的数值计算 Bug，将隐藏的统计陷阱转化为显式契约。
2. **Agent 演进与异步范式**：打破传统的 Generate-Train 串行壁垒成为共识。verl 探索 StreamRL，AReaL 提出基于证据的记忆服务以实现 Agent 自我演进，TRL 则在推进环境直接接管奖励计算的 Agent 架构。

**工程/基础设施侧信号：**
1. **分离式架构与算力共享**：为打破显存墙与推理瓶颈，“Prefill-Decode (PD) 分离”（如 verl）与 Actor/Rollout 的 Colocate 算力共享（如 AReaL）成为大规模 RL 工程的最核心战役。
2. **底层通信与显存零碎片化**：包括 FP8 直传避免反量化（AReaL）、CUDA-IPC 复用与显存泄漏修复、增量权重同步（TRL），以及引入 Mooncake RDMA（slime）。
3. **异构算力生态护城河**：大模型 RL 正在摆脱对纯英伟达生态的绝对依赖。verl、ROLL 等项目都在大力推进对昇腾 NPU、MindSpeed 及 CUDA 13 运行时的深度适配。

## 差异化定位分析

- **verl**：**“工业级重型装甲”**。全面拥抱超大规模 FP8/MXFP4 MoE 模型，具备极强的硬件抗风险能力（NPU + GPU 双轨并行），适合需要跑通数十亿至上百亿参数模型的工业落地团队。
- **TRL**：**“敏捷的 Agent RL 潜力股”**。HuggingFace 生态的核心，正迅速从单一对齐库转型为高级 Agent 基础设施，其 AsyncGRPO 与多模态底层的重构对研究者极具吸引力。
- **AReaL**：**“严谨的系统级演化底座”**。强调高吞吐量与高精度并重，其特有的“记忆服务”设计显示出向具备长周期记忆、持续学习的自我演进智能体底座演进的野心。
- **slime**：**“前沿软硬件的急先锋”**。第一时间拥抱 CUDA 13、SGLang 深度定制与 Off-policy IS 修正，适合追求极致推理解耦与前沿算力兼容的中型技术团队。
- **ROCK**：**“专注于沙箱生命周期的工程专家”**。在异常复杂的代码执行与验证环境（Alpine/musl 等）中体现出了极高的工程健壮性，是 Agent 交互训练不可或缺的底层组件。

## 社区热度与成熟度

1. **梯队分化显著**：verl 以 54 Issues / 38 PRs 的绝对优势占据大模型 RL 开源社区的头把交椅，需求爆发与重构并存；TRL、AReaL、slime 构成中坚力量，保持着每天 20+ PR 的密集迭代。
2. **底层库进入“稳态成熟期”**：以 Gymnasium 为代表的基础环境 API 接口已完全定型，进入无 Bug 可修、仅需优化文档可视化的“静水期”。而 CleanRL、OpenRLHF 等曾经的明星项目进入短暂的静默或维护期。
3. **社区贡献向高门槛硬核工程转移**：从各项目的 PR 质量来看，简单的脚本或算法包装已经绝迹，取而代之的是跨芯片 CI 流水线建设、底层 C++ 运行时适配以及分布式 RPC 协议重构。这说明 LLM RL 生态的技术壁垒已大幅抬高。

## 值得关注的趋势信号

1. **PD 分离与异步范式将重塑 RL 训练瓶颈**：同步 RL 训练中的 GPU 闲置（气泡）正被彻底挑战。verl 引入 NIXL+Mooncake 做 PD 分离 Rollout，以及 TRL 开发 AsyncGRPO，预示着年底前后“全异步 RLHF”将成为大规模训练的标配能力。
2. **跨分词器蒸馏与 On-policy 融合**：AReaL 支持跨 Tokenizer 的同策略蒸馏（如 DeepSeek -> Qwen），以及 slime 引入的 Off-policy IS 修正钩子，表明纯粹的 RLHF 正在与 Distillation、SFT 等技术深度交织，混合训练流水线是下一个发力点。
3. **“平民化” RL 的萌芽**：Open Instruct 为 GRPO 引入 `use_cpu_adam`，让 7B 模型的 RL 微调能在极少量 GPU 上跑通。这预示着在算力巨头卷“万卡集群”的同时，降低门槛让单卡/少卡研究者参与 RL 数据飞轮，同样是社区的重要发力方向。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**ROLL (alibaba/ROLL) RL 生态日报 - 2026-07-08**

### 1. 今日速览
过去 24 小时内，ROLL 仓库代码无合并，无新版本发布。社区焦点集中于底层算力生态的拓展与工程基建：有开发者提交了一项关于引入 MindSpeed/Megatron 单元测试 CI 流水线的 RFC（意见征集），标志着 ROLL 正在进一步深化与华为昇腾及 Megatron 生态的集成。

### 2. 版本发布
- **今日无新版本发布。**

### 3. 重点 Issues
- **[#472] [RFC] Add MindSpeed/Megatron Unit Test CI Pipeline** | 作者: UsernameFull
  - **链接**: [alibaba/ROLL Issue #472](https://github.com/alibaba/ROLL/issues/472)
  - **技术摘要**: 随着 ROLL 不断扩充针对 MindSpeed/Megatron 的相关功能（包括 `mcore_adapter`、`roll/third_party/megatron`、Megatron 卸载、模型更新、Checkpoint 处理以及 Ascend NPU 运行时补丁），系统对跨依赖库（MindSpeed, Megatron-Core, torch-npu, Ascend runtime）的兼容性验证需求日益增加。该 Issue 建议构建一条专用的 CI 流水线，以保障这些底层组件在持续迭代中的代码质量与稳定性。

### 4. 关键 PR 进展
- **今日无 PR 更新。**

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **多芯片异构算力支持的前沿阵地**：大模型强化学习对底层算力消耗极大。ROLL 积极整合 Ascend NPU 及华为 MindSpeed 全栈生态，为 RL 训练摆脱单一 GPU 依赖、实现软硬协同提供了重要的开源参考路径。
2. **深度适配 Megatron 架构**：项目在 Megatron-Core、模型卸载及 Checkpoint 机制上进行深度定制，表明 ROLL 正在攻克“超大参数模型在 RL 训练中的显存/通信瓶颈”，在工程实现上具备极高技术壁垒。
3. **工程严谨性提升**：通过社区引入针对特定复杂依赖栈（如 NPU + Megatron）的 CI/CD 测试规范，反映出该项目在快速迭代的同时，正稳步提升其企业级交付的可靠性。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 强化学习开源生态日报 (2026-07-08)

## 1. 今日速览
过去 24 小时内，ROCK 仓库活跃度集中于底层稳定性的修复与生态兼容性增强。共处理 3 条 Issues（全部已 Closed）和 8 条 PRs（2 条 Open，6 条 Closed/合并）。今日无新版本 Release，但已有针对 `v1.10.0` 的 Release Notes PR 提交，预示新版本即将发布。

## 2. 版本发布
- **当前版本**: 无新版本发布。
- **版本预告**: PR [#1222](https://github.com/alibaba/ROCK/pull/1222) 正在添加 `v1.10.0` 的 Release Notes，表明新版本已进入发布流程。

## 3. 重点 Issues
今日处理的 3 个 Issue 均已通过代码修复并关闭，涉及配置支持与沙箱环境生命周期稳定性：

- **支持 Harbor verifier env 配置** [#1221](https://github.com/alibaba/ROCK/issues/1221)
  ROCK 的 Harbor 配置镜像未包含 `verifier.env` 字段，导致无法在 Job YAML 中配置验证器环境变量。
- **修复 Alpine 镜像沙箱启动失败** [#1206](https://github.com/alibaba/ROCK/issues/1206)
  在预装 bash 但 APK 包数据库不一致的 Alpine 镜像中，由于 `set -o errexit` 机制，`docker_run.sh` 在安装 glibc 兼容层前提前退出。
- **修复沙箱卡在 ARCHIVING 状态** [#1216](https://github.com/alibaba/ROCK/issues/1216)
  远程状态查询始终返回空结果，导致 `_try_advance_archiving` 方法无法推进生命周期，沙箱无限期滞留于 ARCHIVING 状态。

## 4. 关键 PR 进展
今日 PR 进展主要聚焦于 Harbor 兼容、Bash 结果解析、沙箱架构修复及新后端接入：

- **feat: 支持 Harbor verifier env 配置** [PR #1220](https://github.com/alibaba/ROCK/pull/1220) (CLOSED)
  在 Harbor verifier config 中添加 `verifier.env`，并在序列化为 Harbor YAML 时保持该字段，同时对齐 TypeScript SDK schema。
- **fix(sdk): 解析 BashJob 奖励结果** [PR #1215](https://github.com/alibaba/ROCK/pull/1215) (OPEN)
  新增 `rock.sdk.reward.result` 共享奖励结果模型，教导 `BashTrial.collect()` 自动发现 Bash job 产物下的 `result.json`，同时保持向后兼容。
- **fix(rocklet): 跳过 musl 容器中已存在的 bash 安装** [PR #1219](https://github.com/alibaba/ROCK/pull/1219) / [PR #1207](https://github.com/alibaba/ROCK/pull/1207) (CLOSED)
  修复 APK 数据库损坏导致 `apk add bash` 失败引发的启动崩溃问题，在 bash 已存在时跳过安装。
- **fix(archive): 添加 RayOperator.get_remote_status 覆盖** [PR #1218](https://github.com/alibaba/ROCK/pull/1218) / [PR #1217](https://github.com/alibaba/ROCK/pull/1217) (CLOSED)
  通过重写 `get_remote_status` 方法修复沙箱 ARCHIVING 状态卡死问题。
- **feat(operator): 添加 OpenSandboxOperator 生命周期后端 (Phase 1)** [PR #1203](https://github.com/alibaba/ROCK/pull/1203) (OPEN)
  引入 OpenSandbox 作为 ROCK 的新后端（方案 B），通过官方 Python SDK 委托沙箱生命周期及命令/文件执行。本 PR 仅交付生命周期接口，执行代理层将在后续 PR 提供。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层执行环境的高健壮性要求**：今日密集修复了 Alpine/musl 环境兼容、状态机卡死等问题。RL 训练高度依赖沙箱环境进行 Agent 交互，ROCK 对这些边缘案例的严格修复表明其具备支撑大规模、长周期 RL 训练的工程成熟度。
2. **基础设施解耦与多后端架构演进**：PR #1203 引入 OpenSandbox 作为新后端，并明确划分生命周期与执行代理层。这种解耦设计使 RL 训练框架能够灵活接入不同的底层隔离方案，适应更复杂的训练环境需求。
3. **完善与生态工具的配置同步**：快速跟进 Harbor 新版本的 `verifier.env` 配置支持，并保持 Python 与 TypeScript SDK 的对齐，体现了项目在工具链上下游协同上的积极响应能力。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 强化学习开源生态日报摘要。

# 📊 slime RL 日报 (2026-07-08)

## 1. 今日速览
- **Issues 动态**: 1 条新增/更新
- **PR 动态**: 21 条更新（主要围绕推理引擎解耦、显存优化及核心 RL 算法打磨）
- **Releases**: 无新版本发布

## 2. 版本发布
无。当前项目处于密集代码合并与功能迭代阶段，尚未触发新的发版。

## 3. 重点 Issues
**#2186 [Bug] `offload_train` 在 CUDA 13 下因 `libcudart.so.12` 缺失导致 worker 崩溃**
- **作者**: littlemex
- **链接**: https://github.com/THUDM/slime/issues/2186
- **摘要**: 在 Megatron 后端开启 `--offload-train` 时，系统通过硬编码的文件名列表（优先寻找 `cu12`）来加载 `torch_memory_saver` 的 `LD_PRELOAD` 库。在 CUDA 13 环境下，系统会错误加载 cu12 版本的 `.so` 文件，引发底层 C++ 运行时找不到 `libcudart.so.12` 的致命报错。该问题直接影响最新显卡生态下的显存卸载训练。

## 4. 关键 PR 进展
今日更新的 PR 深度覆盖了底层硬件兼容、分布式训练优化及 RL 算法核心机制：

- **硬件与显存管理**
  - **#2187**: 修复上述 CUDA 13 崩溃 Bug，不再按文件名盲选 `.so`，而是根据真实的 CUDA runtime 版本动态选择 `LD_PRELOAD` 库。([链接](https://github.com/THUDM/slime/pull/2187))
  - **#2015**: 优化 `RolloutServer.offload()` 流程，采用三阶段静默过渡（暂停 -> Flush -> 释放），避免在释放显存时引发生成任务中断。([链接](https://github.com/THUDM/slime/pull/2015))
  - **#1709**: 为 rollout 数据引入 Mooncake RDMA 传输支持，大幅提升多节点分布式训练下的数据交互效率。([链接](https://github.com/THUDM/slime/pull/1709))

- **RL 算法与损失函数**
  - **#2083**: 新增 `REINFORCE` 优势估计器（`--advantage-estimator reinforce`），复用 GRPO 的组归一化优势，应用无裁剪的纯加性代理损失。([链接](https://github.com/THUDM/slime/pull/2083))
  - **#2084**: 引入 Off-policy 重要性采样 (IS) 修正钩子，在策略损失中计算当前策略与 rollout 时的动作概率比，提升样本利用率。([链接](https://github.com/THUDM/slime/pull/2084))
  - **#2062**: 修复 GRPO 中 fan-out/不均匀 rollout 下的 baseline 计算问题，强制以 rollout 为单位进行 per-prompt 归一化。([链接](https://github.com/THUDM/slime/pull/2062))
  - **#2085**: 修复 On-policy 蒸馏 (OPD) 的 bug，将教师模型的 log-probs 计算温度从硬编码的 `0` 修改为与 rollout 一致的动态温度。([链接](https://github.com/THUDM/slime/pull/2085))

- **系统鲁棒性与架构解耦**
  - **#2181** (已关闭/转化为新架构): 推进分离式 Rollout 架构，将权重拉取 (`/pull_weights`) 动作移至 Engine 内部执行，解除了 slime 对多节点 Engine HTTP 拓扑的硬耦合。([链接](https://github.com/THUDM/slime/pull/2181))
  - **#2059**: 增强 Ray 集群容错，在引擎启动期间遇到瞬时的 `ActorUnavailableError`（心跳丢失/gRPC 不可用）时进行重试。([链接](https://github.com/THUDM/slime/pull/2059))
  - **#2109**: 支持 eval-only 模式 (`--num-rollout 0`)，修复了该模式下因训练步数预估为 0 导致的 LR/WD 调度器报错。([链接](https://github.com/THUDM/slime/pull/2109))

## 5. 为什么值得在当前 RL 生态继续关注？
1. **拥抱最新异构算力生态**：slime 正在积极扫清新一代基础设施（如 CUDA 13、Mooncake RDMA）的兼容性障碍。在硬件迭代极快的当下，这种底层工程能力是大模型 RL 能够稳定跑通的前提。
2. **深度打磨 SGLang + Megatron 的协同**：从 Rollout 内存加载/卸载的三阶段静默控制，到 SGLang HTTP 请求的鉴权 (#2068) 与连接池复用 (#2069)，slime 正在将“推理解耦”做到工业级可用。
3. **RL 数学层面的严谨性持续提升**：无论是修正不均匀 rollout 下的 GRPO 基线计算、引入 REINFORCE 估计器，还是做 Off-policy 的 IS 修正，slime 团队对 RL 算法在工程实现中的数值精度（如温度对齐、KL 散度计算）把控得极为严苛，这是训练稳定收敛的核心关键。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-08 强化学习（RL）生态日报摘要：

### 1. 今日速览
- **Issues 动态**：新增/更新 3 条。重点聚焦于 2026 H2 路线图规划及智能体自我演进的记忆服务 RFC。
- **PR 进展**：更新 24 条。底层架构围绕 ** colocate（算力共享）训练、多硬件后端通信协议、FP8 权重同步及训练精度对齐** 展开了密集的代码重构与修复。
- **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
无。当前项目正处于 2026 H2 核心底层特性的密集开发与合并阶段。

### 3. 重点 Issues
- **[#1381] [Roadmap] 2026 H2 Milestones** (更新于 07-07)
  - **摘要**：官方发布了 2026 年下半年的开发路线图追踪 Issue。主要分为“正在进行”和“计划中”的特性，明确了社区贡献者可以发力的重点方向（包括 Memory service 等核心演进能力）。
  - **链接**：[areal-project/AReaL Issue #1381](https://github.com/areal-project/AReaL/issues/1381)
- **[#1490] [Feature/RFC] Evidence-grounded Memory Service for self-evolving agents** (创建于 07-07)
  - **摘要**：提交了针对“自我演进智能体”的基于证据的记忆服务 RFC。该提案在兼容现有 API 和 Agent Service 的基础上，填补了路线图中记忆服务的空白。
  - **链接**：[areal-project/AReaL Issue #1490](https://github.com/areal-project/AReaL/issues/1490)
- **[#1477] [BUG] RolloutControllerV2 drops workflow statistics during export** (已关闭, 更新于 07-07)
  - **摘要**：修复了 `RolloutControllerV2` 在导出时丢失工作流统计数据的确定性 Bug。
  - **链接**：[areal-project/AReaL Issue #1477](https://github.com/areal-project/AReaL/issues/1477)

### 4. 关键 PR 进展
今日 PR 动态展现了 AReaL 在**大模型分布式训练底座优化**和**算法正确性保障**上的硬核投入，主要分为三个技术集群：

**🤖 智能体记忆与基础设施**
- **[#1491] [codex] add immutable Memory Service evidence ledger**：针对 Issue #1490，引入了第一个狭义的、确定性的内存引用存储，建立不可变的记忆证据账本，奠定 provenance（溯源）边界。
  - **链接**：[areal-project/AReaL PR #1491](https://github.com/areal-project/AReaL/pull/1491)
- **[#1441] feat(infra): add HTTP-based Ray Scheduler**：实现基于 HTTP RPC 的新版 Ray 调度器，取代旧的 Ray-native 路径，通过子进程管理 RPC workers，增强分布式调度的灵活性。
  - **链接**：[areal-project/AReaL PR #1441](https://github.com/areal-project/AReaL/pull/1441)

**⚙️ Colocate 训练与底层引擎优化**
- **[#1492] feat(sglang): add abort-all and tagged offload protocol primitives**：为支持 Actor/Rolout 共享 GPU 的训练模式，为 SGLang 推理引擎增加了全局终止和带标记的卸载协议原语。
  - **链接**：[areal-project/AReaL PR #1492](https://github.com/areal-project/AReaL/pull/1492)
- **[#1493] feat(api): awex weight-update type and colocation allocation grammar**：为基于 AWEX 权重同步的共享 GPU 训练引入配置级语法（如混合 MoE 语法支持）。
  - **链接**：[areal-project/AReaL PR #1493](https://github.com/areal-project/AReaL/pull/1493)
- **[#1406] Support Megatron FP8 weight transfer in AWEX colocate mode**：在 AWEX colocate 模式下启用 FP8 直接传输，避免向 BF16 的隐式反量化，大幅提升显存效率。
  - **链接**：[areal-project/AReaL PR #1406](https://github.com/areal-project/AReaL/pull/1406)
- **[#1489] [safe-to-test] fix(mcore): cap GPU peak during HF save**：通过 CPU 暂存和提前释放 gather 缓冲区，大幅削减保存 HF 格式权重时的 GPU 峰值显存占用。
  - **链接**：[areal-project/AReaL PR #1489](https://github.com/areal-project/AReaL/pull/1489)

**🔬 PPO 算法正确性与工作流精细化**
- **[#1443] feat(ppo): support actor loss aggregation modes**：将 actor loss 聚合模式显式化为训练引擎的损失缩减契约，规范局部均值/分子的处理逻辑。
  - **链接**：[areal-project/AReaL PR #1443](https://github.com/areal-project/AReaL/pull/1443)
- **[#1415] & [#1413] fix(ppo): reject implicit partial group normalization / derive group norm size**：连续修复了 PPO 中 Advantage 归一化的潜在 Bug，拒绝隐式的部分组归一化，并从 `n_samples` 自动推导归一化尺寸，杜绝静默的统计错位。
  - **链接**：[areal-project/AReaL PR #1415](https://github.com/areal-project/AReaL/pull/1415), [PR #1413](https://github.com/areal-project/AReaL/pull/1413)
- **[#1452] feat(distillation): Support cross-tokenizer on-policy distillation**：支持跨分词器的同策略知识蒸馏（如 DeepSeek 蒸馏至 Qwen）。
  - **链接**：[areal-project/AReaL PR #1452](https://github.com/areal-project/AReaL/pull/1452)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在从“基础 RL 训练框架”向**“下一代高吞吐、高精度的自我演进智能体基础设施”**演进。
1. **攻克极致算力利用率**：通过 colocate（Actor/Rolout 显存共享）、AWEX FP8 直传、SGLang 卸载协议等工程，AReaL 正在系统性解决 RLHF 阶段训练与推理切换的显存碎片与阻塞瓶颈，这是当前大规模 RL 训练成本居高不下的核心痛点。
2. **极度严谨的算法契约化**：近期密集修复的 Group Normalization、Loss Aggregation Mode 等 PR 表明，团队在死磕 RL 底层数值正确性。在大规模分布式 RL 中，细微的统计偏移会导致训练崩溃，AReaL 正在将这些“隐藏坑”变为“显式契约”。
3. **布局 Agent 自我演化**：基于 H2 Roadmap 提出的 Evidence-grounded Memory Service，意味着 AReaL 正在将上下文记忆与溯源能力下沉到底层框架，这将直接赋能长周期、多轮的 Agent 自我强化学习。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

**TRL (huggingface/trl) RL 日报摘要 - 2026-07-08**

### 1. 今日速览
- **Issues 活跃度**：过去 24 小时内共有 5 条 Issue 更新（3 条已关闭，2 条开放）。
- **PR 活跃度**：过去 24 小时内共有 26 条 PR 更新（13 条已合并/关闭，13 条开放中）。
- **新版本发布**：过去 24 小时无新版本发布。
- **核心趋势**：今日的代码提交和讨论高度聚焦于 **GRPO 环境与奖励解耦、AsyncGRPO 底层通信优化、以及 Trainer 内部 Tokenization 逻辑的深度重构**。

### 2. 版本发布
- 今日无新版本发布。

### 3. 重点 Issues
- **[[OPEN] GRPO + vLLM 破坏多模态提示词](https://github.com/huggingface/trl/issues/6294)**: 
  使用 `GRPOTrainer` 搭配 vLLM (`colocate` 模式) 训练 SmolVLM 时，TRL 将处理过的多模态 `prompt_token_ids` 发送给 vLLM，导致图像 token 展开冲突和生成损坏。这是目前多模态强化学习链路中亟待解决的 Bug。
- **[[OPEN] 针对 VLMs 的 SFT Packing 机制](https://github.com/huggingface/trl/issues/4339)**: 
  社区呼吁在 `SFTTrainer` 中为视觉语言模型（VLMs）引入 Packing 功能。目前该功能被显式禁用，开启 Packing 将极大减少内存冗余并提升训练吞吐量。
- **[[CLOSED] Online DPO 长上下文 OOM 问题](https://github.com/huggingface/trl/issues/3701)**: 
  探讨了在长 Prompt 和大 `max_token`（如 8192）设定下，`_forward()` 与 `logprobs` 计算导致 2 张 A100-40GB 显存溢出（OOM）的优化方案。

### 4. 关键 PR 进展
**🚀 GRPO 架构与环境演进**
- **[PR #6238: 环境接管奖励计算](https://github.com/huggingface/trl/pull/6238)**: 落实 RFC #5912，允许环境通过保留的 `get_reward()` 方法直接输出奖励，使得 `reward_funcs` 不再为必选项。这是 TRL 在 Agent RL 领域架构设计的重大演进。
- **[PR #5937: AsyncGRPO 增量权重同步](https://github.com/huggingface/trl/pull/5937)**: 为实验性的 `AsyncGRPO` 引入了稀疏补丁同步机制。不再全量广播策略权重给 vLLM，而是仅检测并序列化发生变化的 bf16 权重，大幅降低通信开销。
- **[PR #6002: 支持多环境机制](https://github.com/huggingface/trl/pull/6002) [CLOSED]**: 允许数据集样本通过 `environment` 字段动态选择不同的运行环境（及对应的可用工具），进一步丰富 RL 场景。

**🛠️ 蒸馏与核心训练器修复**
- **[PR #6237: SDFT 引入 DOPD 优势间隙路由](https://github.com/huggingface/trl/pull/6237)**: 将双在线策略蒸馏直接集成到现有的 `SDFTTrainer` 中，放弃了新建独立 Trainer 的方案。
- **[PR #6320 / [#6321](https://github.com/huggingface/trl/pull/6321): 清理截断导致的无效数据](https://github.com/huggingface/trl/pull/6320)**: 在 SFT、DPO 和 KTO 中，自动丢弃因截断导致失去学习信号（如 labels 全为 -100 或 completion 被完全截断）的样本，避免无效计算。
- **[PR #6302 / [#6305](https://github.com/huggingface/trl/pull/6305) / [#6315](https://github.com/huggingface/trl/pull/6315): Tokenization 逻辑深度重构](https://github.com/huggingface/trl/pull/6302)**: 将散落在 DPO、KTO、SFT 等训练器中的重复 `_tokenize` 函数统一提取至 `data_utils`，并规范了 `chat_template` 的参数传递。
- **[PR #6309: 移除 GFPOTrainer](https://github.com/huggingface/trl/pull/6309) [CLOSED]**: 基于遥测数据（30天内无使用）和高昂的维护成本（严重耦合于不断重写的 GRPO 底层），正式剔除该训练器。

### 5. 为什么值得继续关注？
TRL 正在迅速从单一的“对齐训练库”演变为**高级 Agent 强化学习的核心基础设施**。
当前版本的迭代动向表明：TRL 正在死磕 RL 训练的工程效率与规模瓶颈。无论是通过**稀疏权重同步（Delta weight sync）**来加速 vLLM 异步推理，还是**让环境自身接管奖励逻辑**，亦或是在底层统一**多模态的 Packing 与 Tokenization 机制**，这些更新都在直击大规模 RLHF 和 Agent RL 训练中的痛点（如显存墙、通信带宽、多模态对齐）。对于需要部署长上下文或多模态强化学习流水线的研究者和工程师而言，TRL 的每一次底层重构都值得紧跟。

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

这是一份基于 2026-07-08 GitHub 数据为 volcengine/verl 生成的强化学习（RL）生态日报摘要。

# verl RL 生态日报 (2026-07-08)

## 1. 今日速览
过去 24 小时内，verl 仓库维持了极高的开发活跃度，共产生 **54 次 Issues 更新**与 **38 次 PR 更新**。今日的数据反映出项目正处于“底层重构”与“硬件广度扩展”的双轨并行阶段。核心讨论和代码提交高度聚焦于：全异步训练范式（Fully Async）、Prefill-Decode 分离式架构（PD Disaggregation）、以及对新一代超大模型（如 DeepSeek V4、Qwen3.5 397B）和昇腾 NPU 硬件的深度适配。

## 2. 版本发布
- **无新版本发布** (0 releases in the last 24 hours)。
  *注：虽然今日无 Release，但从 PR 动态（如 [#6955](https://github.com/verl-project/verl/pull/6955)）可以看出，社区正在积极筹备 **v0.8.0** 版本的发布工作。*

## 3. 重点 Issues
今日 Issues 区域既有对底层性能的极致探讨，也包含了大量工程实践中的痛点反馈：

- **[架构探讨] 全异步与分离式调度**
  - [#1825](https://github.com/verl-project/verl/issues/1825 "verl-project/verl Issue #1825"): 讨论引入 StreamRL 异步训练范式以减少 RLHF 阶段切换的气泡，这反映了工业界对打破 Generate-Train 串行壁垒的强诉求。
  - [#6383](https://github.com/verl-project/verl/issues/6383 "verl-project/verl Issue #6383"): [RFC] 提出构建 KV-cache-aware 的请求负载均衡器，通过结合前缀缓存命中率与实时负载来给 Rollout 副本打分，这是突破 vLLM/SGLang 推理服务瓶颈的关键提案。
  
- **[性能排错] 显存泄漏与多卡并发**
  - [#1684](https://github.com/verl-project/verl/issues/1684 "verl-project/verl Issue #1684): 反馈训练几十小时后突发的内存 OOM 问题，涉及 Ray 后端的内存管理盲区。
  - [#3114](https://github.com/verl-project/verl/issues/3114 "verl-project/verl Issue #3114): 报告在使用 `SingleTurnAgentLoop` 时，GPU 利用率长时间卡在 0%，严重影响 Agent 训练吞吐量。

- **[生态适配] 昇腾 NPU 生态**
  - [#6528](https://github.com/verl-project/verl/issues/6528 "verl-project/verl Issue #6528): 询问在昇腾平台上基于 Megatron+mindspeed 路线跑 Qwen3.5 GRPO 的示例，表明 verl 在国产算力生态中的使用率正在快速攀升。

## 4. 关键 PR 进展
开发者在今日提交了大量高质量的系统性优化 PR，直指大规模训练的核心痛点：

- **超大规模模型与底层算子支持**
  - [#6473](https://github.com/verl-project/verl/pull/6473 "verl-project/verl PR #6473"): **[feat]** 正式引入 DeepSeek V4 的 GRPO 训练支持，包括 Megatron-Bridge actor、vLLM rollout 及 FP8/MXFP4 权重转换。
  - [#6951](https://github.com/verl-project/verl/pull/6951 "verl-project/verl PR #6951"): **[chore]** 正式弃用 vanilla mBridge，将 Megatron Bridge 设为默认底座，大幅统一并清理了底层代码逻辑。

- **极致性能优化与显存修复**
  - [#6958](https://github.com/verl-project/verl/pull/6958 "verl-project/verl PR #6958"): **[fix]** 通过复用持久化的 CUDA-IPC 权重传输 bucket，修复了每次权重同步时的显存 (VRAM) 泄漏问题。
  - [#6960](https://github.com/verl-project/verl/pull/6960 "verl-project/verl PR #6960"): **[fix]** 优化 `fused linear-cross-entropy` 反向传播，强制梯度缓冲区内存连续，避免 Autograd 传入 strided views 导致的性能下降。
  - [#6813](https://github.com/verl-project/verl/pull/6813 "verl-project/verl PR #6813"): **[fix]** 修复了 `MooncakeCheckpointEngine` 权重同步时 magic marker 覆盖数据头导致推理输出退化为乱码（如 `!!!!`）的严重 Bug。

- **软硬件生态扩容**
  - [#6243](https://github.com/verl-project/verl/pull/6243 "verl-project/verl PR #6243"): **[feat]** 引入 vLLM Prefill-Decode 分离式 Rollout（基于 NIXL + Mooncake），打破传统的单机推理范式。
  - [#6970](https://github.com/verl-project/verl/pull/6970 "verl-project/verl PR #6970): **[feat]** 适配 Qwen3.5 397B 脚本，并修复了多模态模型 GRPO 训练中 vLLM 推理缓存复用的 mm_hash 冲突问题。
  - [#6971](https://github.com/verl-project/verl/pull/6971 "verl-project/verl PR #6971) / [#6956](https://github.com/verl-project/verl/pull/6956 "verl-project/verl PR #6956"): 持续优化昇腾 NPU 平台支持，包括稳定 Qwen3 Next 80B 的 FSDP rollout 显存压力，以及增加 GSPO Qwen3-8B 的每日 CI 测试。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **踩准“异构与分离式”技术拐点**：verl 正迅速从传统的单卡/同步 RLHF 框架，演进为支持 **PD 分离**与 **全异步范式** 的现代 RL 训练栈。今日 [#6243] 和 [#6628] 等核心 PR 证明了它在前沿系统架构上的领先身位。
2. **天然适配超大 MoE 模型**：随着 [#6473] (DeepSeek V4) 和 [#6970] (Qwen3.5 397B) 的合入，verl 已经证明了其在千亿级 FP8/MXFP4 MoE 模型上的工程落地能力，这是大多数学术型 RL 框架无法触及的工业深水区。
3. **“跨芯片”生态护城河**：在 CUDA 产能受限的背景下，verl 正在成为国产算力（如昇腾 NPU）与英伟达 GPU 之间的“润滑剂”。其不断完善的 Megatron-Bridge 抽象层与 NPU CI 流水线，使其具备了极强的硬件抗风险能力与社区普适性。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报 (2026-07-08)**

**1. 今日速览**
过去 24 小时内，Open Instruct 仓库动态平稳，无新版本发布。共有 1 条 Issue 和 1 条 PR 更新，主要涉及 SFT 复现的精度底层逻辑修复以及 GRPO 算法的 CPU 显存优化。

**2. 版本发布**
- **无新版本发布 (0 个)**

**3. 重点 Issues**
- **[#1728] [OPEN] `reduce_loss=sum` 被移除导致梯度累加下的学习率失配问题**
  - **链接:** [allenai/open-instruct Issue #1728](https://github.com/allenai/open-instruct/issues/1728)
  - **作者:** llabat (更新: 2026-07-07)
  - **技术摘要:** 该 Issue 深入探讨了复现 Tulu 3 SFT 结果时的性能gap。核心原因在于 PR #1024 移除了 `reduce_loss=sum` 但未添加弃用警告。这导致了在多卡梯度累加场景下，损失计算退化为“microbatch 均值的均值”，进而引发实际的 LR miscalibration（学习率错配）。这是大模型分布式训练中典型的底层精度/优化器陷阱。

**4. 关键 PR 进展**
- **[#1654] [OPEN] 为 GRPO 算法引入 `use_cpu_adam` CLI 开关及 Offload 验证**
  - **链接:** [allenai/open-instruct PR #1654](https://github.com/allenai/open-instruct/pull/1654)
  - **作者:** Bhavyashah20 (更新: 2026-07-07)
  - **技术摘要:** 针对 Issue #1031 的修复。在 7B 模型上运行 GRPO 通常需要 40-80 GB VRAM。该 PR 旨在解决原代码中优化器硬编码为 `torch.optim.AdamW` 的问题，允许通过 CLI 一键切换至 `DeepSpeedCPUAdam`。这极大降低了 RL 微调（尤其是 GRPO 阶段）的硬件门槛，为算力受限的研究者提供了无需改动源码即可进行 ZeRO-Offload 训练的官方支持。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **提供端到端可复现的 SOTA 基准：** 类似 #1728 中对 `reduce_loss` 和梯度累加底层逻辑的“死磕”，证明了该项目在维护 Tulu 3 等顶级基线时的严谨性。在 RL 训练极度敏感于超参和底层数学实现的当下，这种透明的排错过程极具工程价值。
- **持续推动 RL 算法的平民化：** 类似 #1654 为 GRPO 增加 CPU Offload 支持的举措，直击当前大模型强化学习痛点。它打破了动辄数卡才能跑 7B 模型 GRPO 的硬件壁垒，说明项目正在积极拥抱更广泛的开源社区需求，是目前研究低成本 RLHF/GRPO 不可或缺的基础设施。

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

**RL 开源生态日报：Gymnasium 项目追踪**
**日期**: 2026-07-08

### 1. 今日速览
今日 Gymnasium 仓库整体活动趋于平缓，无新增 Issues、PRs 及版本发布。开发重心目前集中在文档体验优化与底层历史遗留代码的维护上。昨日（7月7日）有一项关于经典控制环境文档可视化的 PR 被关闭。

### 2. 版本发布
*   **无新增 Release**。当前 API 接口与核心环境保持稳定。

### 3. 重点 Issues
*   **无新增或更新的 Issues**。
    *(过去 24 小时内社区及维护团队未在 Issue 区产生新动态。)*

### 4. 关键 PR 进展
*   **[#1612] [CLOSED] Use trained-policy GIFs for classic control environments**
    *   **作者**: aminehd
    *   **链接**: [Farama-Foundation/Gymnasium PR #1612](https://github.com/Farama-Foundation/Gymnasium/pull/1612)
    *   **事实摘要**: 该 PR 旨在替换 5 个 Classic Control（经典控制）环境的文档展示动图。作者移除了以往展示“随机智能体盲目乱动”的 GIF，替换为使用 Stable-Baselines3 (SB3) 简单训练后的策略渲染图，以便在官方文档中直观展示环境被“求解”后的效果。
    *   **技术备注**: 该 PR 是 #1610 的子任务，仅涉及 5 个 `.gif` 文件的变更，渲染脚本遵循 `docs/_scripts/gen_gifs.py`（300 帧渲染）。该 PR 已于 7 月 7 日被关闭（未合并或被废弃，可能由于生成规范不符合最新标准或被其他实现替代）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **RL 生态的底层基石**: Gymnasium 作为原 OpenAI Gym 的官方继任者，仍然是学术界和工业界进行 RL 算法测试的**事实标准环境接口**（Standard API）。绝大多数主流 RL 库（如 Stable-Baselines3, CleanRL, Ray RLlib）均深度依赖或兼容其 API。
*   **高质量的文档与可视化承诺**: 从 PR #1612 可以看出，维护团队（Farama-Foundation）对项目的“开箱即体验”有着极高的标准。通过展示“训练后策略”的效果而非随机基线，大幅降低了新手对环境目标的认知门槛，体现了极高的开源项目维护素养。
*   **高稳定性与向后兼容**: 在缺乏频繁代码变动的日子里，反映出 Gymnasium 核心架构（Step/Reset 机制、Space 定义）已高度成熟。这种稳定性对于需要长期迭代和复现实验的 RL 研究人员而言是最宝贵的特性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**强化学习（RL）开源生态日报：PettingZoo**
**日期**: 2026-07-08

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库无明显版本发布，但社区代码贡献活跃。共更新 **3 个 Pull Requests** 和 **1 个 Issue**。核心动向集中在**与 Gymnasium 核心生态的对齐**，包括 API 注册表的引入、录像 Wrapper 的移植以及底层依赖的现代化更新。

---

### 2. 版本发布
* **无新版本发布 (0 releases)**。

---

### 3. 重点 Issues
**#1387 [OPEN] [enhancement] 提议引入类似 Gymnasium 的注册表机制**
* **作者**: Trenza1ore
* **链接**: [Farama-Foundation/PettingZoo Issue #1387](https://github.com/Farama-Foundation/PettingZoo/issues/1387)
* **摘要**: 提议部分复活早先的 #803 计划。作者建议在不进行大规模底层重构的前提下，为多智能体环境引入类似单智能体 Gymnasium 的 `make`、`register` 和 `spec` 函数。
* **生态价值**: 此举旨在降低 Gymnasium 单智能体开发者的转型门槛，统一多智能体环境的实例化接口，提升 API 的一致性。

---

### 4. 关键 PR 进展

* **#1388 [OPEN] feat: 引入类 Gymnasium 注册表功能**
  * **作者**: Trenza1ore
  * **链接**: [Farama-Foundation/PettingZoo PR #1388](https://github.com/Farama-Foundation/PettingZoo/pull/1388)
  * **进展**: 上述 Issue #1387 的直接代码实现。目前已添加单元测试，后续文档更新将拆分为独立 PR 处理。标志着该 API 统一提议已进入实质性代码审查阶段。

* **#1306 [OPEN] 添加 `RecordVideo` 包装器**
  * **作者**: nightly
  * **链接**: [Farama-Foundation/PettingZoo PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
  * **进展**: 该 PR 自 2025 年 8 月创建至今持续更新。直接从 Gymnasium 移植 `RecordVideo` wrapper，分别为基础环境和 AEC（回合制）环境实现了录像功能。填补了 PettingZoo 原生不支持简便可视化录制的空白。

* **#1389 [OPEN] chore: 更新 pyproject.toml 中的依赖项**
  * **作者**: Trenza1ore
  * **链接**: [Farama-Foundation/PettingZoo PR #1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389)
  * **进展**: 同步 Gymnasium 的依赖管理策略。针对 Python 3.10-3.13 使用有预编译包的 `box2d`，针对 Python 3.14 使用 `box2d-py`；并在 `all` 扩展依赖中使用自引用。保持与上游基础库的构建逻辑一致。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **多智能体生态的核心枢纽**: PettingZoo 作为 Farama-Foundation 的核心组件，事实上承担着多智能体 RL（MARL）环境标准化（类似单智能体的 Gymnasium）的重任。
2. **API 融合趋势**: 今日的 Issue #1387 与 PR #1388 清晰地传递出一个技术信号——PettingZoo 正在积极抹平与单智能体 Gymnasium 的 API 差异。统一的 `make` / `register` 接口将极大简化混合智能体系统的代码架构。
3. **开箱即用的工程化补全**: PR #1306（录像功能）等更新的推进，说明项目正在补齐可视化、日志记录等 RL 工程化实践中的刚需基础设施，减少研究人员对 SB3 或 TorchRL 等外部框架的硬性依赖。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>