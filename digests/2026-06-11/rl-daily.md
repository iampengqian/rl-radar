# RL 开源生态日报 2026-06-11

> 生成时间: 2026-06-10 22:33 UTC | 覆盖项目: 15 个

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

当前 RL 开源生态正处于深度分化与整合的阶段。整体来看，以 LLM/Agent 对齐为核心的“后训练”框架占据了绝大部分开发资源与社区关注度；而传统的基础 RL 库（如 Gymnasium, CleanRL, Stable Baselines3 等）则进入稳定期甚至停滞期。大型项目正在向**多硬件生态适配**、**极端显存优化**以及**复杂 Agent 环境编排**演进，竞争焦点从“算法覆写”转移到了“系统级工程效能”。

## 各项目活跃度对比

过去 24 小时内各主要 RL 项目的数据表现如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 7 | 32 | 0 | 极度活跃。重点攻坚 DeepSeek V4 适配与跨硬件（AMD/Ascend）算力解耦。 |
| **TRL** | 2 | 11 | 0 | 稳步推进。核心聚焦自蒸馏新算法引入与 SFT 底层显存/Mask 机制防错。 |
| **Open Instruct** | 0 | 8 | 0 | 深水区工程优化。死磕 DPO 算子级融合与 MFU 极限提升。 |
| **AReaL** | 1 | 6 | 0 | 基础设施完善。发力解耦式 RLHF 及 Agent 专属运行时构建。 |
| **slime** | 1 | 6 | 0 | 穿透底层优化。深入计算图融合与 VLM 多模态对齐支持。 |
| **ROCK** | 4 | 4 | 0 | 架构扩展演进。重点解决多容器编排与跨云算力调度路由。 |
| **ROLL** | 0 | 1 | 0 | 底层兼容性维护。跟进 vLLM v1 架构升级带来的 API 变动。 |
| **Gymnasium** | 0 | 1 | 0 | 平稳。专注于前沿物理引擎的初学者文档与 API 建设。 |
| *其余项目* | *0* | *0* | *0* | *过去 24 小时无动态（OpenRLHF, CleanRL, SB3 等）。* |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **后 RLHF 时代的对齐范式演进**：纯粹的 PPO/GRPO 正在丰富化，学术界和工业界都在向 **Off-policy 修正** 和 **自蒸馏** 倾斜。例如 AReaL 引入了 IcePop / KPop 双向掩码机制，TRL 新增 OPSD 算法，旨在解决模型自我演化的分布偏移问题。
2. **多模态（VLM）全面步入 RL 阶段**：各大框架都在扫清视觉语言模型对齐的工程障碍。slime 扩展了 Qwen3-VL 的图像配置，TRL 让 GOLDTrainer 支持 VLM，verl 和 slime 则在集中排查 Qwen3.5-VL 结合 Megatron 桥接的兼容性 Bug。

**工程/基础设施侧信号：**
1. **显存墙的“外科手术式”突破**：RLHF 训练的显存抢占是当前最大痛点。项目正在深入到底层算子和通信机制中寻找空间。典型代表包括 verl 引入 NCCL 通信挂起以释放空闲显存，slime 将 log-prob 和 entropy 融合为单一 autograd Function 避免副本驻留，以及 Open Instruct 祭出 Liger 算子融合。
2. **打破 NVIDIA 壁垒，跨硬件解耦成共识**：异构算力调度成为顶级项目的标配。verl 制定了明确的 AMD/ROCm 及昇腾 NPU 适配路线图；TRL 引入了 AMD/ROCm 的 CI 测试。这表明框架层正致力于打造不受单一 GPU 厂商绑定的统一 RL 引擎。
3. **Agent RL 基础设施的成型**：针对代码执行、工具调用等复杂场景的 RL 需求，系统开始提供原生的沙盒与多容器编排支持。ROCK 新增了 `ComposeJobConfig` 处理主容器与 sidecar 的编排，AReaL 则集成了 OpenClaw 以实现 per-session 级别的调用归因。

## 差异化定位分析

1. **verl & slime**：定位为**追求极致效能的重工业级 RL 引擎**。两者都深度绑定 Megatron 等分布式底层框架，目标直指千亿参数级大模型（如 DeepSeek-V4）的大规模集群训练。它们的护城河在于对底层显存管理和分布式通信的穿透式优化。
2. **TRL & Open Instruct**：定位为**前沿对齐算法与 HuggingFace 生态的桥梁**。TRL 凭借快速跟进 OPSD 等最新算法与 SFT 基础设施完善，成为了研究者验证新思路的利器；Open Instruct 则在 DPO 训练的 MFU 提升和算子融合上做深做透。
3. **AReaL, ROCK & ROLL**：定位偏向**生产级/云原生 RL 编排与解耦执行**。AReaL 致力于打磨 train/inference（训练/推理）分离的解耦部署架构；ROCK 升级了算力调度路由与多容器 Docker 编排；ROLL 则专注分布式执行器（如 vLLM Ray）的兼容与适配。
4. **Gymnasium 等传统生态**：作为**经典的底层 API 标准制定者**，它们目前处于维护期，为深度学习 RL 提供稳固的 Env 接口，不再卷入 LLM 后训练的算力军备竞赛。

## 社区热度与成熟度

- **社区热度冰火两重天**：LLM 对齐相关项目的 Issue/PR 频次极高（verl 单日 39 条动态，TRL 13 条），社区聚焦于解决大集群、大模型下的致命 Bug（如异步模式 LR 为 0）。相比之下，传统 RL 生态（CleanRL, SB3, Tianshou 等）热度几乎降至冰点，24 小时内零动态。
- **系统架构趋于成熟**：从 verl 和 AReaL 的 PR 可以看出，大规模 RL 框架正在解决极其底层的系统问题（如 PyPI 依赖固化、Megatron 梯度缓冲备份优化、CPU Host 内存节约），标志着这些系统正从“跑通概念”向“高可靠、可持续构建的生产级平台”跨越。

## 值得关注的趋势信号

1. **Off-policy 与 Self-Distillation 有望成为下一波对齐破局点**：面对 On-policy RLHF 极高的算力成本和 Reward 模型能力的上限，TRL 和 AReaL 重点集成的自蒸馏与新型重要性采样修正在未来几个月可能会成为学术界和开源界的新标配。
2. **算力底座的异构化已不可逆**：不仅国产 NPU（如昇腾）适配进入深水区，AMD GPU 的 CI 和路标也全面提上日程。框架层面做好算力解耦、集群多 Operator 路由，将为下一代 RL 平台带来显著的商业化优势。
3. **面向 Agent 的系统级沙盒与编排呼之欲出**：RL 的交互环境正从简单的文本 Gym 环境转向真实的代码执行与网络请求。专门为多容器复杂拓扑、沙盒镜像加速构建的 RL 编排基建（如 ROCK 正在做的事），将成为 Agent 在复杂环境中落地训练的先决条件。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-11）：

# ROLL RL 生态日报 (2026-06-11)

## 1. 今日速览
过去 24 小时内，ROLL 项目整体保持平稳。无新增 Issues 和版本发布，但有一项关于 vLLM 分布式执行器兼容性的核心 PR 迎来了更新，体现了项目在后端推理引擎适配上的持续演进。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **无新增或更新的 Issues**。

## 4. 关键 PR 进展
- **[OPEN] [vLLM] Fix vLLM Ray executor env var compatibility** 
  - **作者**: shun001
  - **链接**: [alibaba/ROLL PR #455](https://github.com/alibaba/ROLL/pull/455)
  - **摘要**: 该 PR 主要修复了 ROLL 与较新版本 vLLM 的兼容性问题。新版本的 vLLM 将 `WORKER_SPECIFIC_ENV_VARS` 的导出路径从 `RayDistributedExecutor` 迁移到了 `vllm.v1.executor.ray_utils`。此代码变更在适配新 API 的同时，保留了对旧版 vLLM 的回退支持机制。
  - **状态**: 该 PR 创建于 06-04，在 06-10 迎来了更新，目前正在等待进一步 Review。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧密跟进底层推理引擎迭代**：RLHF 和大规模 LLM 训练严重依赖于推理引擎（如 vLLM）的极致优化。ROLL 通过 PR #455 积极修复 vLLM v1 架构更新带来的 Ray 执行器变量兼容性问题，这表明该项目对底层高性能计算生态的变化保持高度敏锐，确保用户在升级 vLLM 时 ROLL 框架依然能稳定运行。
2. **注重向后兼容的工程健壮性**：在适配新版本 API 的同时，该 PR 明确保留了针对旧版本的 fallback 逻辑，体现了项目在工程落地上的严谨性，降低了企业用户升级基础架构的试错成本。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-06-11 ROCK 项目 RL 日报摘要：

# 📰 ROCK 项目 RL 生态日报 (2026-06-11)

## 1. 今日速览
过去 24 小时内，`alibaba/ROCK` 仓库保持高度活跃，共处理了 **4 个 Issues** 和 **4 个 Pull Requests**。当前社区的重心明显向**底层架构增强**和**多容器复杂任务编排**倾斜，无新版本发布。

## 2. 版本发布
- **最新 Releases**：无。
- **版本动向**：注意到 [#1077](https://github.com/alibaba/ROCK/issues/1077) (Issue) 及对应的 [#1078](https://github.com/alibaba/ROCK/pull/1078) (PR) 提出并合入/关闭了 Bump version to `1.9.0` 的请求，预计 `v1.9.0` 正式 Release 正在最后的筹备或打包阶段。

## 3. 重点 Issues
今日的核心需求集中在基础设施与 SDK 编排能力的扩展上：

- **多容器编排能力支持**：[#1079 [FEATURE] Support multi-container (Docker Compose) jobs via ComposeJobConfig](https://github.com/alibaba/ROCK/issues/1079)
  当前 ROCK SDK 的 Job 体系仅支持单脚本或 Benchmark，开发者呼吁引入 `ComposeJobConfig`，将 Docker Compose 多容器编排（主容器 + sidecar + init 容器）下沉为 SDK 的一等公民，以满足复杂 RL 任务（如 claude-code SWE rollout）的需求。

- **远端 Operator 路由支持**：[#1075 [enhancement] [Feature] add remote operator](https://github.com/alibaba/ROCK/issues/1075)
  提出 Admin 层面的架构升级。希望系统能同时兼容多种 Operator（如 Ray 和 K8s）并根据请求自动路由；同时增加基于远程 API 的 `remote operator`，打破单一算子后端的限制。

- **Sandbox 镜像加速代理**：[#1081 feat(admin): add image registry mirror lookup for sandbox start](https://github.com/alibaba/ROCK/issues/1081)
  建议在 Sandbox 启动阶段引入镜像仓库镜像自动探测机制。通过 Nacos 配置，优先探测内网镜像库并重写镜像 URL，以加速 sandbox 拉起过程。

## 4. 关键 PR 进展
今日的 PR 与 Issue 高度对应，形成了完整的功能开发闭环：

- **多容器 Docker Compose 实现**：[#1080 feat(sdk): add ComposeJobConfig for multi-container docker-compose jobs (#1079)](https://github.com/alibaba/ROCK/pull/1080)
  快速响应了 Issue 1079。新增 `ComposeJobConfig` 和 `ComposeTrial`，通过在 DinD (Docker-in-Docker) sandbox 中生成 `runner.sh` 来编排复杂的容器拓扑。

- **Remote Operator 基础构建**：[#1076 Add remote operator #1075](https://github.com/alibaba/ROCK/pull/1076)
  针对多 Operator 路由及远程 API Operator 的功能需求提交了初步代码实现。

- **镜像 Mirror 探测逻辑落地**：[#1082 feat(admin): add image registry mirror lookup for sandbox start](https://github.com/alibaba/ROCK/pull/1082)
  为解决 Sandbox 镜像拉取效率问题，通过 `docker manifest inspect` 实现了镜像 Mirror 的自动查找，并引入了 60 秒的进程级 TTL 缓存以应对高并发启动时的重复探测。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **向“真实世界” RL 编排演进**：RL 算法的落地早已不局限于单脚本训练，引入 `ComposeJobConfig` 意味着 ROCK 正在解决 Agent 与环境交互时的复杂系统依赖问题（如内置 Proxy、Eval 服务），这是迈向生产级 LLM/RL Agent 平台的必经之路。
2. **算力调度层面的灵活解耦**：提出 `remote operator` 与多 Operator 自动路由，表明 ROCK 正在摆脱对单一底层计算集群（纯 K8s 或纯 Ray）的强绑定，这对于跨集群、混合云甚至跨厂商的 RL 算力调度极具吸引力。
3. **工程效率细节的持续打磨**：Sandbox 镜像代理拉取与缓存机制（PR #1082）直击大规模并行 RL 分布式训练中环境初始化慢的痛点，体现了系统级项目的工程成熟度。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 | 2026-06-11

## 1. 今日速览
过去 24 小时，THUDM/slime 仓库活跃度集中于底层优化与工程能力建设。共计更新 6 个 Pull Requests（3 个新建，3 个推进已有 Draft），1 个历史 Issue 产生新讨论。无新版本发布。核心动向聚焦于：VLM 多模态支持完善、PPO 显存峰值优化，以及生产级生态集成。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
- **#1723 [Bug] Qwen VL 与 qwen35 Megatron bridge 不兼容** 
  - **状态**: Open
  - **追踪**: 该 Issue 创建于 3 月，于昨日再次更新。报错堆栈指向 SGLang 的权重更新机制 (`scheduler_update_weights_mixin.py`)，表明在多卡集群环境下，使用 Qwen3.5 Megatron 桥接加载视觉语言模型时存在底层张量通信/权重更新的兼容性故障。
  - **链接**: [THUDM/slime Issue #1723](https://github.com/THUDM/slime/issues/1723)

## 4. 关键 PR 进展
今日的 PR 更新主要围绕**显存/性能优化**与**数据处理鲁棒性**展开：

- **#2011 perf(ppo): 降低 log-prob + entropy 交叉熵显存峰值** `[Open]`
  - **分析**: 一项核心性能优化。通过将 log-prob 和 entropy 计算融合为单一的 autograd Function，避免在计算时保留两份 logits 副本；同时在反向传播中复用 Megatron 的连续内存分配机制。对长上下文或大 Batch Size 的 RLHF 训练意义显著。
  - **链接**: [THUDM/slime PR #2011](https://github.com/THUDM/slime/pull/2011)

- **#2049 fix(parsing): 修复 Code Agent RL 中的 EOS token 泄漏** `[Open]`
  - **分析**: 修复了 `parse_model_output` 在两种特定情况（无 tool_parser 的 XML regex 提取，以及纯文本回合）下，将 `<|im_end|>` 尾缀错误带入 `text` 字段的 Bug。此修复对于提升代码生成 Agent 的强化学习解析准确度至关重要。
  - **链接**: [THUDM/slime PR #2049](https://github.com/THUDM/slime/pull/2049)

- **#2048 support --num-workers for dataset parallel loading** `[Open]`
  - **分析**: 复用 Megatron 的配置实现数据集多 worker 并行加载，增加了耗时和数据模态的优雅日志记录，在不改变底层 `Sample` 构建逻辑的前提下提升数据吞吐量。
  - **链接**: [THUDM/slime PR #2048](https://github.com/THUDM/slime/pull/2048)

- **#2005 [Draft] Refactor trajectory manager** `[Open]`
  - **分析**: 轨迹管理器重构，这是一个持续进行中的大型 Draft PR，昨日有新提交。轨迹管理是 RL 训练中连接 Reward Model 和 Policy Model 的核心组件，重构预期将提升分布式训练下的轨迹收集与分发效率。
  - **链接**: [THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005)

- **#2047 [docs] add Miles to slime ecosystem** `[Closed]`
  - **分析**: 文档更新，已合并。将 Miles 添加为基于 Slime 构建的外围生态系统项目，明确了 Slime 在大规模后训练部署中的 SGLang 集成与底层支持定位。
  - **链接**: [THUDM/slime PR #2047](https://github.com/THUDM/slime/pull/2047)

- **#2044 support rich image config for vlm** `[Closed]`
  - **分析**: 已合并。修改了 `slime/utils/data.py`，以兼容 Qwen3-VL 官方提出的更通用的富文本图像配置格式，为 VLM 的 RL 对齐铺平道路。
  - **链接**: [THUDM/slime PR #2044](https://github.com/THUDM/slime/pull/2044)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 项目正在从单一的 RLHF 算法框架，向**全模态、深度绑定底层算力优化的工业级 RL 基础设施**演进：
1. **穿透底层计算图优化**: 如 PR #2011 所示，项目不仅在算法层面实现 PPO，更深入到结合 Megatron 的显存分配机制进行算子级融合，这是突破大模型 RL 显存墙的关键路径。
2. **发力 VLM 多模态对齐**: 结合 #2044 对 Qwen3-VL 的数据格式支持和长期追踪的 #1723 Bug，可以看出项目正在重点攻坚视觉语言模型在 RL 阶段的工程适配问题。
3. **关注 Agent 与推理场景**: PR #2049 针对 Code Agent 修复解析 Bug，证明项目正在为复杂的工具调用和代码执行场景提供稳定的 Trajectory 数据保证，这是当前 Agent RL 走向落地的核心技术痛点。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-06-11)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共处理 **1 条 Issue** 更新，并有多达 **6 条 Pull Request** 处于活跃状态（含新提交与合并），无新版本发布。整体节奏以核心训练引擎的内存优化、解耦式 RLHF 流程修复、以及新型 off-policy 算法集成为主，底层工程迭代密集。

---

## 2. 版本发布
无。

---

## 3. 重点 Issues

- **[#1319](https://github.com/areal-project/AReaL/issues/1319) [CLOSED] Qwen3.5-4B 在启用 `fsdp.offload_params` 时显存占用异常（接近 50GB / H100 OOM）**
  - 作者 @leekum2018 报告在相同配置下，Qwen3-4B 可在 3090 运行，而 Qwen3.5-4B 的 ref/actor 峰值显存飙升至 ~50GB，怀疑 `offload` 未真正执行。Issue 已关闭，但为后续模型兼容性与显存调优提供了重要复现信息。

---

## 4. 关键 PR 进展

### 已合并
- **[#1401](https://github.com/areal-project/AReaL/pull/1401) fix(v2/awex): unblock weight-update bring-up**
  - 修复 decoupled 部署（训练/推理分离节点）下 weight-update 流程的 NCCL 挂起与 `connect_engine` 阻塞问题，打通端到端流程。

### 新增 / 活跃
- **[#1405](https://github.com/areal-project/AReaL/pull/1405) feat: Supporting features for IcePop and KPop**
  - 引入两种新的 off-policy correction masking 策略：**IcePop**（Double-Sided Masking）和 **KPop**（Bidirectional Binary KL Divergence Masking），用于 decoupled PPO actor loss。对探索利用与分布偏移修正有直接意义。

- **[#1404](https://github.com/areal-project/AReaL/pull/1404) ci: add PyPI publish workflow and fix Megatron deps**
  - 添加 GitHub Actions PyPI/TestPyPI 发布流程；将 git 依赖 `mbridge` 替换为稳定 PyPI 版本 (`mbridge==0.15.1`, `megatron-bridge==0.4.0`)，提升依赖确定性与构建可复现性。

- **[#1383](https://github.com/areal-project/AReaL/pull/1383) feat(agent_service): add OpenClaw per-session agent runtime**
  - 集成 **OpenClaw** 作为 `agent_service` 运行时，为每个 RL 会话独立启动 OpenClaw gateway 子进程并绑定独立 LLM key（`sk-sess-*`），实现 episode 级调用归因，适合多轮对话与 agent RL 场景。

- **[#1393](https://github.com/areal-project/AReaL/pull/1393) feat: disable megatron grad buffers CPU backup to save host memory**
  - 新增 `disable_grad_buffers_cpu_backup` 选项，在 colocated training offload 时跳过梯度缓冲的 CPU 备份（因其每步重算），节省约 4x 主机内存，降低大规模训练的内存压力。

- **[#1402](https://github.com/areal-project/AReaL/pull/1402) fix(engine): default shard_ids=None on clear_batches across all engines**
  - 修复 #1282 引入的 `clear_batches` 签名变更导致的非 DP-head rank 调用报错，默认 `shard_ids=None` 保证各 engine 兼容。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **解耦式 RL 基础设施成熟度持续提升**：权重更新流程修复 (#1401)、batch 清理兼容性修复 (#1402) 表明 AReaL 正在将 "train/inference 分离部署" 打磨到生产级稳定。
2. **前沿 off-policy 算法快速集成**：IcePop / KPop 等新型 masking 策略 (#1405) 面向 decoupled loss 场景，为解决 RLHF 中的分布偏移提供实验性但工程完备的路径。
3. **系统级内存优化进入精细化阶段**：Megatron 梯度缓冲 CPU backup 可关闭 (#1393)、以及社区反馈的 Qwen3.5 offload 异常 (#1319)，都指向大规模模型训练中内存与显存管理仍是核心战场，AReaL 在此方向持续投入。
4. **Agent RL 生态扩展**：OpenClaw 运行时集成 (#1383) 为多轮对话、per-session 归因提供基础设施，契合当前 Tool-use / Agent RL 研究趋势。
5. **工程规范持续完善**：PyPI 发布流程与依赖固化 (#1404) 降低外部贡献与部署门槛，体现项目向可持续开源运作演进的意图。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026 年 6 月 11 日 RL 生态日报摘要：

# 🤖 Hugging Face TRL 强化学习生态日报 (2026-06-11)

## 1. 今日速览
过去 24 小时内，TRL 仓库共处理 **2** 条 Issues（1 个新增/开放，1 个历史遗留关闭）和 **11** 条 Pull Requests。社区当前聚焦于 SFT 底层损失计算逻辑的优化、新型自蒸馏算法的引入以及 CI/硬件生态的扩展。

---

## 2. 版本发布
- **最新 Releases**：近 24 小时内**无新版本发布**。

---

## 3. 重点 Issues
- **[#5138] [OPEN] SFT 训练 Llama-3.2-3B 时的 Mask 计算缺陷**
  - **标签**: `🐛 bug`, `🚨 Important`
  - **摘要**: 社区报告在移除 `DataCollatorForCompletionOnly` 后，近期版本的 TRL 在对 Llama-3.2-3B-Instruct 进行 SFT 时存在训练异常。该 Issue 直接引发了今日多个关于 SFT loss 计算和 stop token 处理的 PR 讨论。
  - **链接**: [huggingface/trl Issue #5138](https://github.com/huggingface/trl/issues/5138)

- **[#4419] [CLOSED] GRPO 搭配 Reward 模型导致 CUDA OOM**
  - **标签**: `🏋 Reward`, `🏋 GRPO`
  - **摘要**: 关于使用 Reward 模型进行 GRPO 训练时显存溢出（OOM）的讨论已得到解决并关闭。
  - **链接**: [huggingface/trl Issue #4419](https://github.com/huggingface/trl/issues/4419)

---

## 4. 关键 PR 进展

### 🎯 核心算法与训练修复
- **[#5846] [OPEN] SFT 默认损失函数切换为 `chunked_nll`**
  - **摘要**: 优化 SFT 显存占用与计算效率。将 `SFTConfig` 的默认 `loss_type` 从 `"nll"` 切换为 `"chunked_nll"`（当启用 `use_liger_kernel=True` 时自动安全回退）。
  - **链接**: [huggingface/trl PR #5846](https://github.com/huggingface/trl/pull/5846)

- **[#5988] [OPEN] CI: 确保 Chat Template 的 stop token 纳入 loss mask**
  - **摘要**: 修复潜在的幽灵 Bug。当 `assistant_only_loss=True` 时，某些 chat template 会导致 assistant 的 end-of-turn token 落在 mask 之外，致使模型永远学不会停止生成。本 PR 新增了相关 CI 检查。
  - **链接**: [huggingface/trl PR #5988](https://github.com/huggingface/trl/pull/5988)

- **[#5985] [OPEN] 修复 OnlineDPOTrainer 的评估逻辑**
  - **摘要**: 解决了 `OnlineDPOTrainer` 在评估阶段因 Transformers 默认回退行为导致直接传入原始 prompt 而非计算 policy-loss 评估的错误。
  - **链接**: [huggingface/trl PR #5985](https://github.com/huggingface/trl/pull/5985)

### 🧪 新特性与前沿算法
- **[#5990] [OPEN] 新增 OPSD (On-Policy Self-Distillation) Trainer**
  - **摘要**: 引入论文化的新型自蒸馏训练器 `OPSD`。学生模型同时作为自身策略的参考，以单模型双角色的方式实现自蒸馏。
  - **链接**: [huggingface/trl PR #5990](https://github.com/huggingface/trl/pull/5990)

- **[#5989] [CLOSED] SDFT/SDPO: 支持从 vLLM 服务器获取 live teacher logprobs**
  - **摘要**: 完善蒸馏生态。新增 `use_teacher_server=True` 配置，允许 SDFT/SDPO 训练器直接通过 vLLM 服务获取同步后的 student/current 权重打分。
  - **链接**: [huggingface/trl PR #5989](https://github.com/huggingface/trl/pull/5989)

- **[#5969] [OPEN] GOLDTrainer 支持 VLM (视觉语言模型)**
  - **摘要**: 为 `GOLDTrainer` 扩展视觉语言模型支持，支持同系列 VLM 的 JSD 散度蒸馏。
  - **链接**: [huggingface/trl PR #5969](https://github.com/huggingface/trl/pull/5969)

- **[#4732] [OPEN] IcePop 算法引入双向掩码重要性采样 (MIS)**
  - **摘要**: 为 TRL 中的 IcePop 算法实现双向掩码重要性采样比例特性。
  - **链接**: [huggingface/trl PR #4732](https://github.com/huggingface/trl/pull/4732)

### 🛠 工程构建与文档
- **[#5918] [OPEN] 引入 AMD/ROCm CI**
  - **摘要**: TRL 正式开始适配 AMD GPU 生态，添加了基于 `pytest` 的本地 AMD 显卡测试套件，暴露并处理潜在的兼容性问题。
  - **链接**: [huggingface/trl PR #5918](https://github.com/huggingface/trl/pull/5918)

- **[#5987] [OPEN] 简化 Agent 技能路径管理**
  - **摘要**: 统一代理技能管理逻辑，移除了特定代理（如 `codex`）的硬编码支持，默认使用通用的 `.agents` 目标路径。
  - **链接**: [huggingface/trl PR #5987](https://github.com/huggingface/trl/pull/5987)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **SFT 基础设施防微杜渐**：从今日的高优先级 PR（[#5846](https://github.com/huggingface/trl/pull/5846) 和 [#5988](https://github.com/huggingface/trl/pull/5988)）可以看出，TRL 团队在极力解决大模型训练中“Loss 正常但模型不收敛/无法停止”的隐形 Bug，不断完善 Token 级别的 Mask 机制与 Loss 计算内存效率。
2. **紧跟 Self-Distillation 前沿**：对齐技术正在从单纯的 RLHF/DPO 向更高效的“自蒸馏/同源模型演化”演进。TRL 火速集成了 OPSD([#5990](https://github.com/huggingface/trl/pull/5990)) 并打通了 vLLM 边推理边蒸馏的链路([#5989](https://github.com/huggingface/trl/pull/5989))，为研究者提供了开箱即用的前沿对齐工具。
3. **多模态与异构算力扩展**：不仅核心算法对齐向 VLM（视觉语言模型）延伸（如 GOLDTrainer 支持 VLM [#5969](https://github.com/huggingface/trl/pull/5969)），底层工程也在突破 NVIDIA 壁垒，开始实装 AMD/ROCm CI([#5918](https://github.com/huggingface/trl/pull/5918))。这表明 TRL 正致力于成为全栈、跨硬件、跨模态的对齐基础设施。

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

以下是为您生成的 [verl](https://github.com/volcengine/verl) 项目 2026-06-11 强化学习（RL）生态日报摘要：

### 1. 今日速览
*   **Issues 更新**：7 条（其中 5 条为新创建，主要集中在 Megatron 后端及异步训练的 Bug 修复请求）。
*   **PR 更新**：32 条（高度活跃，重点围绕 DeepSeek V4 支持、Megatron 显存优化及 AMD/Ascend 硬件生态适配）。
*   **新版本发布**：0 个。

---

### 2. 版本发布
过去 24 小时内**无**新的 Releases 发布。

---

### 3. 重点 Issues
*   **[架构/Roadmap] AMD/ROCm 26Q2/Q3 路线图**
    提出了 verl 在 AMD 显卡上的下一步支持计划，旨在未来 1-2 个季度内补齐与 NVIDIA 生态的显存与算力差距（如 MI355X 和 DeepSeek-V 系列的适配）。
    链接：[verl-project/verl Issue #6590](https://github.com/verl-project/verl/issue/6590)
*   **[Bug] Megatron-Bridge 硬性阻断 TP > num_query_groups**
    汇报了在使用 Megatron 后端结合 `mbridge` 训练 Qwen3.5-VL / MoE 模型时，即使 TP 是 num_query_groups 的倍数，也会抛出 `ValueError` 导致训练中断的问题。
    链接：[verl-project/verl Issue #6681](https://github.com/verl-project/verl/issue/6681)
*   **[Bug] 完全异步模式下学习率恒为 0**
    汇报了在完全异步训练模式下，无论使用 FSDP 还是 Megatron 后端，均出现 LR 始终为 0 的致命 Bug。
    链接：[verl-project/verl Issue #6683](https://github.com/verl-project/verl/issue/6683)
*   **[Bug] 同节点多 vLLM 实例端口冲突**
    指出在同一节点部署多个 vLLM 实例时，分布式初始化端口可能发生冲突并报出 `EADDRINUSE` 错误。
    链接：[verl-project/verl Issue #6677](https://github.com/verl-project/verl/issue/6677)

---

### 4. 关键 PR 进展
*   **[Feature] 支持 DeepSeek V4 Flash GRPO**
    添加了对 DeepSeek V4 Flash GRPO 的支持，涉及 Megatron-Bridge actor/ref workers、vLLM rollout 及 FP8/MXFP4 权重转换处理。
    链接：[verl-project/verl PR #6473](https://github.com/verl-project/verl/pull/6473)
*   **[Feature] Megatron 同置模式下的 NCCL 通信器挂起/恢复**
    实现了在 Rollout 阶段通过 NCCL 原生 API (`ncclCommSuspend`/`ncclCommResume`) 释放空闲显存，显著优化 Megatron 同置模式的显存峰值（需配合 PR #6621 升级 NCCL 版本）。
    链接：[verl-project/verl PR #6408](https://github.com/verl-project/verl/pull/6408) 及 [PR #6621](https://github.com/verl-project/verl/pull/6621)
*   **[Fix] 修复完全异步模式下 LR 为 0 的问题**
    通过在 Trainer 初始化前同步优化器的 total steps，修复了异步训练中学习率调度失效的 Bug。
    链接：[verl-project/verl PR #6684](https://github.com/verl-project/verl/pull/6684)
*   **[Fix] 修复 Actor 卸载后 Rollout 权重重载的显存峰值**
    调整了同置 worker 中 actor/rollout 权重同步的顺序，在恢复 Rollout 权重前优先构建并消耗 actor 权重生成器，有效削减显存峰值。
    链接：[verl-project/verl PR #6685](https://github.com/verl-project/verl/pull/6685)
*   **[Fix] 增加单样本 Reward 计算超时机制**
    在 `NaiveRewardManager` 中引入超时机制，解决了多教师蒸馏任务中因单个 Score 计算死锁导致全局 GPU 利用率跌至 0% 的问题。
    链接：[verl-project/verl PR #6673](https://github.com/verl-project/verl/pull/6673)
*   **[Ascend] 修复 NPU 上的 vLLM 流水线并行及 MindSpeed 配置**
    修复了华为昇腾 NPU 上 vLLM 的 PP 验证报错问题，并修复了 `batch_invariant_mode` 下的 repatch 配置 Bug。
    链接：[verl-project/verl PR #6678](https://github.com/verl-project/verl/pull/6678)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **前沿大模型 RLHF 的极速工程落地**：项目正在密集适配业界最新的顶级架构（如 DeepSeek-V4、Qwen3.5-VL/MoE），通过引入 Megatron-Bridge 和 vLLM 的深度结合，不断推进大规模 MoE 模型在复杂 RL 算法（如 GRPO）下的工程极限。
2.  **极致的性能与显存优化**：针对 RL 训练（Actor + Reward + Ref + Rollout）对显存极度饥渴的痛点，verl 正在底层引入 NCCL 通信挂起和精细化的权重卸载重载排序策略，这为在有限算力下跑通超大模型 RL 提供了关键路径。
3.  **跨硬件生态的解耦与统一**：从最新的 Issue 和 PR 动态来看，verl 正在系统性地横向扩展底层的硬件支持（Ascend NPU 适配持续迭代，AMD/ROCm 路线图提上日程），致力于打造一个脱离单一 GPU 厂商绑定、面向异构算力集群的统一 RL 引擎。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-06-11）：

# 📊 Open Instruct RL 生态日报 (2026-06-11)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库总体保持平稳的开发迭代节奏。无新版本发布，无新增 Issues，但围绕底层训练框架的**计算效率优化**、**注意力机制兼容性**以及**评测工具修正**产生了 8 项核心 PR 更新。当前项目重心明显偏向于 DPO（直接偏好优化）训练的深度工程优化与新架构（如 Hybrid 模型）的集成。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 动态高度聚焦于提升 RLHF/post-training 阶段的训练效能和稳定性：

*   **DPO 训练效能与指标大幅优化**：
    *   [PR #1720](https://github.com/allenai/open-instruct/pull/1720) `[OPEN]`: 将 DPO 训练的 MFU（模型算力利用率）提升至约 32%，对大规模对齐训练的降本增效具有直接意义。
    *   [PR #1719](https://github.com/allenai/open-instruct/pull/1719) `[OPEN]`: 统一了 `dpo.py` 与 `dpo_tune_cache.py` 之间的评估指标，并新增了 padding 占比及 batch 序列数（全局与单卡）的监控指标。
*   **底层架构与算子融合支持**：
    *   [PR #1713](https://github.com/allenai/open-instruct/pull/1713) `[OPEN]`: 在 OLMo-core 的 DPO trainer 中引入了 Olmo-Hybrid (GDN) 混合模型支持，并对 microbatches 进行了 packing 优化以提升 MFU。
    *   [PR #1714](https://github.com/allenai/open-instruct/pull/1714) `[OPEN]`: 在 `ModelConfig` 中暴露了 `loss_implementation` 接口，允许在 SFT 阶段直接调用 Liger fused_linear 等算子级融合技术（FLCE）加速计算。
*   **Bug 修复与代码重构**：
    *   [PR #1716](https://github.com/allenai/open-instruct/pull/1716) `[CLOSED]`: 修复了 `detect_attn_implementation` 的逻辑错误，解决了在仅安装 `flash-attn-2` 时被错误识别为 `flash-attn-4` 的兼容性漏洞。
    *   [PR #1718](https://github.com/allenai/open-instruct/pull/1718) `[OPEN]`: 修复了 IFEval 评测中的字数统计逻辑，使 `count_unique` 等检查器忽略标点符号，避免正常回复被误判为 0 分。
    *   [PR #1721](https://github.com/allenai/open-instruct/pull/1721) `[CLOSED]`: 清理了 `code_utils`，修复了 API 测试服务器启动的随机失败问题，并补充了类型检查。
*   **评测模型生态扩展**：
    *   [PR #1712](https://github.com/allenai/open-instruct/pull/1712) `[CLOSED]`: 将最新旗舰模型 `MiniMax-M3` 加入 Judge 定价表，确保 RL 评判（Judge）环节的成本追踪正常运行。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的大模型对齐工程探索**：Open Instruct 当前正在啃 DPO 训练中最硬的骨头——从损失函数底层算子融合（Liger FLCE，[PR #1714](https://github.com/allenai/open-instruct/pull/1714)）到 Microbatch Packing（[PR #1713](https://github.com/allenai/open-instruct/pull/1713)），这种对 MFU（32%，[PR #1720](https://github.com/allenai/open-instruct/pull/1720)）的极致压榨，为业界提供了宝贵的开源大模型 Post-training 工程范式。
2. **紧跟底层架构演进**：项目不仅支持常规的 Transformer 架构，正在快速集成如 OLMo-Hybrid (GDN) 等新型网络结构，并解决 FlashAttention 跨代兼容问题（[PR #1716](https://github.com/allenai/open-instruct/pull/1716)），保持着对前沿模型架构的高敏感度。
3. **闭环的 RL 评测基建**：对 IFEval 评测逻辑的持续打磨（[PR #1718](https://github.com/allenai/open-instruct/pull/1718)）以及对第三方 API Judge 模型（如 MiniMax-M3，[PR #1712](https://github.com/allenai/open-instruct/pull/1712)）的快速接入，构建了一套从训练提效到自动化可靠评测的完整 RL 生态基座。

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

以下是为您生成的 2026-06-11 Gymnasium 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体保持平静，无新发版、无新增 Issues，仅有 1 项文档类 PR 产生更新。
*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **Releases**: 0 个

### 2. 版本发布
过去 24 小时无最新版本发布。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
*   **[#1584 新增 MuJoCo 参数自定义教程]**(https://github.com/Farama-Foundation/Gymnasium/pull/1584) `OPEN`
    *   **作者**: Lonny154
    *   **状态**: 2026-05-22 创建，2026-06-10 有最新更新。
    *   **内容摘要**: 该 PR 旨在补充一份面向初学者的 MuJoCo 教程。文档以 `HalfCheetah-v5` 环境为例，演示如何通过 `gym.make()` 的关键字参数（例如调整 `ctrl_cost_weight`）来定制环境参数，并验证在固定同一随机种子和状态的情况下，不同参数对奖励各组成部分的具体影响。此 PR 有助于填补高级物理引擎参数调优的文档空白。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **API 标准的基石地位**: Gymnasium 依然是深度强化学习领域最核心的底层 API 规范。即使底层算法框架（如 Stable-Baselines3, CleanRL 等）快速迭代，Gymnasium 提供的标准化 Env API 和交互协议仍是整个生态代码复用的前提。
*   **对前沿引擎的持续集成**: 社区仍在积极完善对 MuJoCo 等先进物理引擎的适配与文档建设（如 PR #1584）。从 v5 版本环境的演进可以看出，Gymnasium 确保了最新的仿真特性能够以标准化的接口开放给 RL 社区，降低了研究者的工程门槛。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>