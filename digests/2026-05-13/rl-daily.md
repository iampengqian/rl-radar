# RL 开源生态日报 2026-05-13

> 生成时间: 2026-05-12 22:22 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL for LLM）开源生态正处于底层架构重构与算力全面扩张的爆发期。以 `verl`、`TRL`、`Open Instruct` 为代表的框架主导了极高频的代码迭代，重点死磕全异步架构与多模态/Agent 适配。同时，新一代 RL 基础设施（如 `AReaL`、`ROLL`、`ROCK`）正加速向云原生、跨硬件平台及强隔离沙箱演进。传统 RL 生态（如 `SB3`、`Gymnasium`）则进入高度成熟、打磨底层类型的稳定维护期。

## 各项目活跃度对比
过去 24 小时内，各项目的 GitHub 活跃指标呈现出显著的两极分化：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 41 | 0 | 爆发式迭代，死磕全异步架构与异构算力适配 |
| **Open Instruct** | 6 | 31 | 0 | 全面转向 GRPO，积极探索课程学习新范式 |
| **TRL** | 5 | 16 | 0 | 应对上游破坏性更新，深耕异步与工具调用 RL |
| **ROCK** | 2 | 5 | 0 | 重构模型代理流式传输，完善 DinD 沙箱隔离 |
| **ROLL** | 0 | 4 | 0 | 跨越硬件生态，发力 Ascend/ROCm 及 Agent 环境 |
| **slime** | 3 | 2 | 0 | 紧跟最前沿 MoE 模型，攻坚转换与状态管理 Bug |
| **AReaL** | 1 | 3 | 0 | 拥抱云原生 K8s 调度，复现前沿容错推理架构 |
| **Gymnasium** | 0 | 1 | 0 | 稳步引入现代 Python 泛型，提升类型系统标准 |
| **SB3** | 1 | 0 | 0 | 维护期，偶发底层依赖测试污染 |
| **Others** | - | - | - | CleanRL, OpenRLHF 等多个项目无活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从 PPO 向 GRPO 及其变体演进**：`Open Instruct` 清理旧 PPO 代码并引入 OLMo-core 算子优化，`TRL` 完善 AsyncGRPO，表明 GRPO 正在成为 LLM 后训练的新一代基线算法。
2. **引入动态课程学习**：`Open Instruct` 连续提交基于难度的采样与构建 PR，表明业界正试图通过动态调整 Prompt 难度来突破 RLHF 的 Reward Hacking 瓶颈。
3. **多模态与智能体 闭环成型**：`verl` 原生支持音频数据流，`TRL` 拓展 OpenReward 工具调用生态，`ROLL` 接入 Atropos 智能体环境。RL 的训练对象正在从纯文本对齐转向多模态交互与工具调用反馈。

**工程/基础设施侧信号：**
1. **极致的异步与计算解耦**：消除训练阻塞是当前核心命题。`verl` 引入独立 Log Prob 服务器与异步 I/O，`TRL` 将 AsyncGRPO 推理移入独立进程以规避 Python GIL 争用。
2. **打破 NVIDIA 算力垄断**：深度适配国产及异构算力（昇腾 NPU、AMD ROCm）成为顶级框架的标配。`verl` 提出统一硬件平台抽象层，`ROLL` 更是连开数个 PR 打通 Ascend 上的 FSDP2 与 Megatron。
3. **云原生与强隔离沙箱**：`AReaL` 引入 K8s StatefulSet 调度器，`ROCK` 优化 Kata Containers 运行时支持自定义镜像构建。RL 训练集群正向高弹性、高安全容器化的方向全面演进。

## 差异化定位分析
- **verl** 与 **TRL**：同为大模型 RL 领导框架，但侧重点分化明显。`verl` 更加“硬核 Infra”，专注于跨芯片平台抽象与千卡级 MoE 模型的分布式极致压榨；`TRL` 则紧贴 HuggingFace 生态，致力于第一时间兼容最新开源大模型（如应对 transformers v5 危机）与上层工具协议。
- **Open Instruct**：更偏向**学术探索与算法复现基准**，在清理旧架构的同时，率先试水 Curriculum Learning 等高阶训练策略。
- **阿里系双雄（ROLL 与 ROCK）**：`ROLL` 专注打破异构算力壁垒和泛化环境接入；`ROCK` 则深耕底层容器 runtime 与推理代理转发，两者共同构建了从底层沙箱到分布式训练的闭环基建。
- **Gymnasium 与 SB3**：坚守经典决策智能领域，作为“事实标准”进入平稳维护期，重心放在代码质量（如泛型类型提示）上。

## 社区热度与成熟度
- **高频爆发期**：`verl`（单日 41 PR）、`Open Instruct` 和 `TRL` 社区热度极高。它们正在经历剧烈的底层代码重构，大量 Issue 涉及前沿模型（如 Qwen3-VL、GLM5）的适配报错与破坏性更新，属于典型的“边飞边换引擎”的高能迭代状态。
- **基建扩张期**：`AReaL`、`ROCK`、`ROLL` 和 `slime` 的贡献主要由核心开发者或企业内部团队驱动，PR 聚焦于极其硬核的底层调度和状态管理，属于前瞻性的基础设施卡位。
- **高度成熟期**：`Gymnasium`、`Stable Baselines3` 等项目几无日常波动。它们已度过功能拓展期，确立了生态标准地位，仅在底层依赖升级或类型系统重构时有微小改动。

## 值得关注的趋势信号
1. **AgentLoop 与环境沙箱将成为 RL 框架的标配**：随着 LLM 作为 Agent 的表现越来越重要，支持多轨迹 Agent Rollout（如 verl）与强隔离代码执行沙箱（如 ROCK 的 DinD 优化）将直接决定 RL 框架在上限场景的应用价值。
2. **MoE 模型的 RL 专项攻坚拉开帷幕**：针对 MoE 路由机制的 Recorder/Replay（verl），以及解决 MoE 复杂权重转换与显存状态覆盖的 PR 日益增多。针对 MoE 架构的显存优化与稳定性训练，将是下一阶段后训练工程的深海区。
3. **融合 DeepSeek-V4 级别的容错推理架构**：AReaL 尝试引入可抢占式推理服务逻辑，这意味着开源社区已开始消化和复现顶级商业大模型在千卡集群长时训练中的底层高可用设计，这将大幅提升开源 RL 框架的工程天花板。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL（Reinforcement Learning Open Logic）开源项目 2026 年 5 月 13 日的 RL 日报摘要：

---

# 📊 ROLL 项目 RL 生态日报 (2026-05-13)

**数据源:** [alibaba/ROLL](https://github.com/alibaba/ROLL) | **统计周期:** 2026-05-12 至 2026-05-13

## 1. 今日速览
过去 24 小时内，ROLL 仓库的焦点集中在**底层硬件生态扩展**与**异构环境接入**。虽然没有新版本或 Issue 更新，但 4 个关键 PR 的活跃更新释放了明确信号：ROLL 正在加速推进对 AMD ROCm、华为 Ascend NPU 以及第三方智能体环境（如 Atropos）的深度适配。

## 2. 版本发布
过去 24 小时及近期无新版发布。当前项目处于高频底层特性开发和社区 PR 闭净阶段。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 动态全面反映了 ROLL 在跨硬件、跨架构方向的技术演进：

*   **[#441] [OPEN] fsdp2&vllm adapt ascend for qwen3-30b model**
    *   **作者:** shun001
    *   **摘要:** 针对近期热门的 Qwen3-30B 模型，适配华为 Ascend (NPU) 环境，打通了 FSDP2 (Fully Sharded Data Parallel 2) 与 vLLM 推理引擎的联合支持。
    *   **链接:** [alibaba/ROLL PR #441](https://github.com/alibaba/ROLL/pull/441)
*   **[#440] [CLOSED] ROLL在rocm7.2+torch 2.10上提供了支持**
    *   **作者:** aaab8b
    *   **摘要:** 社区贡献了针对 AMD GPU 生态的底层支持，确认 ROLL 框架已可在 ROCm 7.2 环境及 PyTorch 2.10 版本上稳定运行。
    *   **链接:** [alibaba/ROLL PR #440](https://github.com/alibaba/ROLL/pull/440)
*   **[#426] [CLOSED] ROLL with Atropos environments**
    *   **作者:** RUFFY-369
    *   **摘要:** 引入 [Atropos](https://github.com/NousResearch/atropos) 作为模块化智能体适配器。该 PR 实现了一个“Universal Reward Bridge”，使 ROLL 能够原生处理和桥接 Atropos 环境的奖励信号，是 LLM 范式下 RL 环境接入的重要扩展。
    *   **链接:** [alibaba/ROLL PR #426](https://github.com/alibaba/ROLL/pull/426)
*   **[#380] [OPEN] feat: Add npu megatron support**
    *   **作者:** UsernameFull
    *   **摘要:** 为华为 Ascend NPU 增加 Megatron-Core 后端支持。重构了平台检测优先级机制，使 ROLL 能够在 NPU 硬件上利用 Megatron 进行大规模 RL 训练。
    *   **链接:** [alibaba/ROLL PR #380](https://github.com/alibaba/ROLL/pull/380)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
基于今日的数据表现，ROLL 在当前大模型强化学习（RL for LLM）生态中具备两个独特的发展趋势：

1.  **打破 NVIDIA 算力垄断的“多生态万金油”**：从 ROCm (AMD) 的初步打通，到 Ascend NPU (华为) 上 FSDP2 与 Megatron 的深度适配，ROLL 正在系统性解决 RLHF/RLAIF 训练严重依赖单一硬件生态的痛点。结合今日对 `Qwen3-30B` 最新模型的快速响应，其工程落地价值极高。
2.  **拥抱 LLM Agentic RL 范式**：[#426] 中引入 Atropos 环境桥接，表明 ROLL 没有局限于传统的“奖励模型+PPO”范式，而是在架构层面积极探索“环境交互+智能体 RL（Agentic RL）”的泛化能力，这在当前 RL 开源基础设施中属于前瞻性卡位。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-05-13）：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 保持了较高的底层架构演进频率。项目新增/更新 2 个 Issues 和 5 个 Pull Requests。当前无新版本发布。今天的迭代重心集中在 **模型服务代理的流式重构** 和 **Kata DinD 容器运行时的健壮性修复**。

### 2. 版本发布
无。最近 24 小时内 ROCK 未发布新的 Release 版本。

### 3. 重点 Issues
- **[重构请求] 模型服务移除 litellm 并重构代理底层** ([#934](https://github.com/alibaba/ROCK/issues/934))
  **摘要**：作者指出当前 `rock model-service` 的 proxy 模式过度依赖对 `httpx` 的薄封装，导致核心功能存在缺口（尤其是**不支持流式输出**）。建议抛弃 `litellm`，基于 `httpx` + `openai SDK` 重建 model-service proxy，以原生支持流式传输及更复杂的请求处理。
- **[Bug] Kata DinD 自定义 data-root 路径挂载失效** ([#932](https://github.com/alibaba/ROCK/issues/932))
  **摘要**：在 DinD (Docker-in-Docker) 环境使用 Kata 运行时且配置了自定义 `data-root` 时，loop disk 仍被硬编码挂载到默认的 `/var/lib/docker`，导致容器启动失败。

### 4. 关键 PR 进展
- **[Feature] model-service proxy 支持流式与回放机制** ([#935](https://github.com/alibaba/ROCK/pull/935))
  **摘要**：直接响应 Issue #934。在不破坏现有前向兼容性的前提下，为 `rock model-service` 引入 `ForwardBackend` 和 `ReplayBackend`，实现了 `resp.aiter_bytes()` 的字节级流式传输，同时解耦了记录器以支持异步 chunk 回放。
- **[Fix] 修复 Kata 运行时 loop disk 挂载路径问题** ([#933](https://github.com/alibaba/ROCK/pull/933))
  **摘要**：针对 Issue #932 的修复。动态从 `/etc/docker/daemon.json` 读取 `data-root` 配置作为挂载点，若不存在则回退至默认路径，修复了自定义容器存储路径下的启动崩溃问题。
- **[Fix] 修补 Nix 系统镜像下 Kata 运行时的 mount 失败** ([#936](https://github.com/alibaba/ROCK/pull/936))
  **摘要**：在基于 Nix 构建的镜像中，`mount` 命令不在系统默认 PATH 中而在 `/nix/store` 下，导致 `setup_kata_dind` 失败。此 PR 将其符号链接注入 `/bin` 以修复该环境兼容性问题。
- **[Feature] Sandbox 支持直接通过 Dockerfile 启动** ([#931](https://github.com/alibaba/ROCK/pull/931))
  **摘要**：引入了新的声明式类型 `Image`（位于 `rock/sdk/sandbox/image.py`）。支持 `Image.base()` 和 `Image.from_dockerfile()` 工厂方法，允许用户直接通过 Dockerfile 定义并启动沙箱环境，同时保持内部 db schemas 透明解析。
- **[Feature] 引入沙箱启动阶段耗时埋点** ([#924](https://github.com/alibaba/ROCK/pull/924))
  **摘要**：新增 `StageTimer` 上下文管理器工具，用于记录并输出沙箱各个启动阶段的耗时，为后续优化 RL 环境初始化性能提供了数据支撑。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 RL 基础设施的性能瓶颈**：从 PR #935 可以看出，项目正在对 LLM 的推理转发层进行深度重构，原生支持流式输出和底层透传。在基于 LLM 构建 Reward Model 或 Agent 环境时，流式响应能极大减少 RLHF 等算法中数据采样的空等时间，提升训练吞吐。
2. **深度优化容器运行时隔离**：连续合并/提交了多个针对 Kata Containers 的修复（PR #933, #936）。在 RL 算法训练中，提供安全、强隔离且可定制的沙箱环境（包括支持 Nix 这种高度声明式的系统镜像）是执行复杂 Agent 任务和代码级 RL（如 RL for Code）的基石。
3. **开发者体验与可观测性并重**：PR #931 使得环境搭建从静态镜像拉取进化到动态 Dockerfile 构建，大幅降低了自定义 RL 环境的门槛；同时 PR #924 加入的启动耗时埋点，反映了团队对系统级 Debug 和性能调优的专业度，这对于排查大规模分布式 RL 集群的启动冷启动问题至关重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026-05-13 强化学习（RL）开源生态日报摘要：

# 📊 RL 开源生态日报：slime (2026-05-13)

## 1. 今日速览
过去 24 小时，[THUDM/slime](https://github.com/THUDM/slime) 仓库共处理了 **3** 个 Issues 更新和 **2** 个 PRs 更新，无新版本发布。项目近期的研发重心集中在 **前沿大模型（如 GLM5、Qwen3.5 MoE）的底层适配** 以及 **Megatron 框架下 RL 训练状态管理的鲁棒性修复**。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
- **[#1820](https://github.com/THUDM/slime/issues/1820) [Bug] GLM5 模型转换 Megatron 报错**
  - **详情**：用户反馈当前镜像及 Megatron Core 版本无法支持 GLM5 模型从 HF 格式到 `torch_dist` 的转换。由于底层架构尚未完全适配，导致转换失败，这与项目已提供的训练脚本产生了依赖冲突。该 Issue 已引发较多讨论（14 条评论）。
- **[#6](https://github.com/THUDM/slime/issues/6) [Enhancement] 追踪 sglang 兼容性**
  - **详情**：这是一个长期的 Tracking Issue。slime 的核心设计目标之一是与 sglang 的最新版本保持兼容，但为了支持特定的 RL 特性，项目需对 sglang 进行微调。该 Issue 集中管理了相关的同步与修改 PR（获 17 个赞）。
- **[#1462](https://github.com/THUDM/slime/issues/1462) [Bug] sglang 常量缺失导致导入报错**
  - **详情**：用户报告在拉取最新镜像后，出现无法从 `sglang.srt.constants` 导入 `GPU_MEMORY_TYPE_CUDA_GRAPH` 的错误，疑似镜像打包时 sglang 版本同步遗漏所致。

## 4. 关键 PR 进展
- **[#1904](https://github.com/THUDM/slime/pull/1904) 修复 Qwen3.5 MoE 格式转换错误**
  - **核心贡献**：修复了 `convert_torch_dist_to_hf.py` 在处理 Qwen3.5 MoE 权重时的两个关键缺陷：1) 修复了专家格式不匹配问题，保留了原始 HF 格式的 3D 融合张量；2) 解决了非 MTP 专家的拆分逻辑错误。
- **[#1903](https://github.com/THUDM/slime/pull/1903) 修复 OPD 教师模型加载后权重覆盖问题**
  - **核心贡献**：针对 RLHF/RL 训练流程，修复了在非 offload 模式下使用 Megatron 后端 OPD（`--opd-type megatron`）时的严重 Bug。此前加载 teacher checkpoint 会覆盖 `self.model`，且因未开启 offload 导致通用恢复路径被跳过。该 PR 确保了 actor 权重在加载教师模型后能够正确恢复。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克超大规模 MoE 的 RL 工程痛点**：随着 Qwen3.5 等超大 MoE 模型成为基座主流，RL 训练面临极高的显存和并行转换壁垒。Slime 团队正在积极跟进并修复相关的权重转换核心链路（如 PR #1904），提供了少见的针对最新 MoE 架构的 RL 底层支持。
2. **深度整合 Megatron 以支持高级 RL 算法**：项目正在深入处理如 OPD（Online Policy Distillation）等高级 RL 训练范式中复杂的状态切换逻辑（如 PR #1903 对 Teacher/Actor 权重的精细化内存管理）。这表明 Slime 不只是一个简单的 PPO 封装，而是致力于解决分布式大模型 RL 训练中的 Hardcore 工程瓶颈。
3. **紧密跟进 Inference/RL 边界融合**：通过长期维护与高性能推理框架 sglang 的兼容性（Issue #6），Slime 正在打通“极速推理”与“分布式 RL 训练”的边界，这对于降低 LLM 后训练的显存占用及提升 rollout 效率具有明确的工程价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 开源项目日报（2026-05-13）

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理 **1 条 Issue 更新** 和 **3 条 PR 活跃更新**，无新版本发布。整体节奏偏向代码重构、基础设施（K8s）扩展与底层容错机制的完善。

## 2. 版本发布
今日无新 Release 发布。

## 3. 重点 Issues
- **[#1279] [Feature] Implement the fault tolerance logic of DeepSeek-V4 infra within AReaL's inference service**
  - **状态**：OPEN | 标签：`good first issue`, `call-for-contribution`
  - **核心诉求**：希望复现 DeepSeek-V4 论文中提到的“可抢占式推理服务”逻辑，并兼容当前 `areal/api/` 的 API 接口。此功能对大规模 RLHF 和异步生成式推理场景下的高可用性至关重要。
  - **链接**：[areal-project/AReaL Issue #1279](https://github.com/areal-project/AReaL/issues/1279)

## 4. 关键 PR 进展
- **[#1316] Refined Kubernetes scheduler implementation**
  - **内容**：引入基于 Kubernetes StatefulSet 的 `KubernetesScheduler` 实现，复用现有 HTTP guard APIs，集成 Kubernetes Python 客户端，并增加 Pod 健康诊断与回滚处理。这为 AReaL 在云原生环境下进行大规模 rollout 调度铺平了道路。
  - **链接**：[areal-project/AReaL PR #1316](https://github.com/areal-project/AReaL/pull/1316)

- **[#1328] refactor: consolidate admin key validation into shared helper**
  - **内容**：将 `proxy_rollout_server.py` 中的 loopback/override admin-key 验证块抽取为独立工具函数 `validate_admin_api_key`，并在所有包含默认公开密钥的实验性 HTTP 服务中统一调用。属于典型的安全与维护性重构。
  - **链接**：[areal-project/AReaL PR #1328](https://github.com/areal-project/AReaL/pull/1328)

- **[#1332] fix: Add error detection function and test for ZeroDivisionError and other errors alike**
  - **内容**：修复 Python 工具执行时异常状态吞没的问题。原 `PythonTool.execute()` 在遇到代码错误（如 `ZeroDivisionError`、语法错误）时，错误地返回 `ToolCallStatus.SUCCESS`，导致 `AsyncTaskRunner` 在 RL 训练循环中崩溃。此 PR 补齐了错误检测逻辑与相应测试。
  - **链接**：[areal-project/AReaL PR #1332](https://github.com/areal-project/AReaL/pull/1332)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日的动态可以看出，AReaL 正在重点解决 **大规模 RL 训练与推理基础设施中的三个核心痛点**：
1. **云原生调度能力**：通过引入 Kubernetes 调度器（PR #1316），项目正脱离单一本地集群限制，向弹性可扩展的分布式训练演进。
2. **系统鲁棒性与执行安全**：针对底层代码沙盒的错误处理（PR #1332）以及管理鉴权的统一化重构（PR #1328），表明团队在认真对待长时 RL 训练中的“静默错误”与安全隐患。
3. **前沿架构对齐**：Issue #1279 明确指向复现 DeepSeek-V4 级别的容错推理架构。在开源 RL 生态中，能够将最新前沿论文的分布式基础设施思路落地到开源框架的项目极度稀缺。

AReaL 正在成为不仅是 RL 算法层，更是 **RL 底层 Infra 与云原生调度** 生态的重要拼图，值得工程与研究人员持续跟进。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-13 RL 日报摘要：

# 🤖 TRL (Hugging Face) 强化学习生态日报
**日期**: 2026-05-13 | **数据来源**: [huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
- **Issues 更新**: 5 条 (其中 3 条与 `transformers v5.0.0` 兼容性及 CI 有关)
- **PR 更新**: 16 条 (重点关注 AsyncGRPO 架构重构与 GRPO 训练效能优化)
- **新版本发布**: 0 个

### 2. 版本发布
过去 24 小时内无新增 Release。项目当前处于高频底层重构与上游依赖适配阶段。

### 3. 重点 Issues
今日的 Issue 集中在**上游依赖更新导致的破坏性变更**以及**CI 基础设施瓶颈**：

- **`transformers v5.0.0` 兼容性危机**：多名开发者报告使用 `transformers v5` 后引发的一系列 CI 失败问题。
  - 解析工具调用响应失败（gptoss/llama 架构）：[Issue #5753](https://github.com/huggingface/trl/issues/5753)
  - `GptOssConfig` 缺失 `num_experts` 属性：[Issue #5754](https://github.com/huggingface/trl/issues/5754)
  - 评估器依赖 `llm-blender` 与 `transformers v5` 不兼容：[Issue #4918](https://github.com/huggingface/trl/issues/4918)
- **Tokenizer Bug（历史遗留）**：`Qwen2Tokenizer` 缺失 `response_schema` 属性报错（正在处理中）：[Issue #4609](https://github.com/huggingface/trl/issues/4609)
- **CI 基础设施问题**：运行 VLM（如 Gemma4）测试时频繁出现 CUDA OOM：[Issue #5750](https://github.com/huggingface/trl/issues/5750)

### 4. 关键 PR 进展
今日的 PR 提交反映了 TRL 在**异步训练架构优化**、**测试用例对齐**及**新范式探索**上的持续投入：

**🚀 核心算法与架构优化**
- **AsyncGRPO 解耦与进程隔离**：将异步 Rollout 的生成与评分循环从训练线程移至独立的子进程中，彻底解决 Autograd 引擎与 `recursive_parse` 竞争 GIL 的问题（[PR #5749](https://github.com/huggingface/trl/pull/5749)）。同时修复了异步数据队列返回 `None` 导致数据加载器异常的边界问题（[PR #5751](https://github.com/huggingface/trl/pull/5751)）。
- **GRPO 计算效能提升**：收紧了 `old_per_token_logps` 的重计算触发条件，从粗粒度的模运算改为精确的 rollout 窗口检查，减少了不必要的 Forward Pass（[PR #5757](https://github.com/huggingface/trl/pull/5757)）。
- **引入匿名遥测**：在 `_BaseTrainer` 中植入基于 `huggingface_hub.send_telemetry` 的匿名 Ping，以无损统计各类 Trainer（SFT/GRPO等）的真实使用率（[PR #5758](https://github.com/huggingface/trl/pull/5758)）。

**🛠️ CI 与兼容性修复**
- 针对 `transformers v5` 的破坏性变更，在 CI 中添加条件跳过或标记为预期失败（xfail），以保障主干分支提交的顺畅（[PR #5755](https://github.com/huggingface/trl/pull/5755), [PR #5756](https://github.com/huggingface/trl/pull/5756)）。
- 替换旧的 `curl` 安装脚本，在 CI 中全面启用带版本控制的 `astral-sh/setup-uv@v8` Action（[PR #5735](https://github.com/huggingface/trl/pull/5735)）。

**🧪 实验性功能：OpenReward 生态**
- 修复了 `OpenRewardSpec` 在绑定期间遗漏任务级工具的 Bug（[PR #5729](https://github.com/huggingface/trl/pull/5729)）。
- 新增基于 GRPO + OpenReward + Qwen3.5-4B 的端到端 Notebook 示例（[PR #5747](https://github.com/huggingface/trl/pull/5747)），并将其补充到官方文档列表中（[PR #5752](https://github.com/huggingface/trl/pull/5752)）。

**🧬 测试矩阵完善**
- 大量对齐并重构了 Tiny Model 的配置（Qwen2.5-VL, Cohere, Glm4Moe 等），使本地单元测试的行为无限逼近真实大模型（[PR #5739](https://github.com/huggingface/trl/pull/5739), [PR #5707](https://github.com/huggingface/trl/pull/5707), [PR #5706](https://github.com/huggingface/trl/pull/5706), [PR #5638](https://github.com/huggingface/trl/pull/5638)）。
- 将 2-GPU DDP 纳入了 SFT 和 DPO 的等价类不变量测试套件中（[PR #5736](https://github.com/huggingface/trl/pull/5736)）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **突破 RLHF 性能瓶颈**：通过将 AsyncGRPO worker 推向独立进程（解决 GIL 争用）以及减少冗余张量计算，TRL 正在解决 LLM 异步强化学习训练中的核心吞吐量痛点。
2. **定义 Tool-Augmented RL 新范式**：围绕 `OpenReward` 的一系列更新（工具绑定修复、端到端 Gym 示例），表明 TRL 正将强化学习的重点从单一的“文本对齐”拓展到“Agent 工具调用与外部环境反馈”的闭环训练。
3. **极其强硬的工程化基线**：为了适配上游 `transformers v5` 带来的巨大破坏性更新，TRL 团队正在进行极高密度的 Tiny Model 配置对齐和多卡 DDP 不变量测试建设，这为其在下一代开源大模型中的即插即用性打下了极高质量的基础。

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

# verl 项目 RL 生态日报摘要 (2026-05-13)

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。尽管没有新的版本发布，但社区贡献了 **5 条 Issues**（聚焦于多模态模型训练 Bug 及底层算力兼容性）和多达 **41 条 PR 更新**。PR 动向呈现出极其明显的技术趋势：**全异步性能优化、多模态数据流扩展、国产异构硬件（Ascend NPU等）的深度适配，以及针对 MoE 架构的专项攻坚**。项目正处于底层架构重构与功能快速叠加的爆发期。

## 2. 版本发布
- **最新 Releases**: 昨日无新版本发布。

## 3. 重点 Issues
昨日暴露的问题主要集中在特定模型（Qwen3、Gemma3）的 SFT/GRPO 训练及底层框架版本兼容性上：
- **Qwen3.5 SFT 损失异常**: 用户报告在对 Qwen3.5 进行 SFT 训练时，loss 持续变为 NaN，该问题亟待复现和修复。([verl-project/verl Issue #6319](https://github.com/verl-project/verl/issue/6319))
- **Gemma3 多模态 GRPO LoRA 报错**: 指出在 `release v0.6.1` 分支下，Gemma3 运行多模态 GRPO 结合 LoRA 训练时存在 Bug。([verl-project/verl Issue #5524](https://github.com/verl-project/verl/issue/5524))
- **Megatron 架构与 CUDA 12.6 兼容性问题**: 安装 CUDA 12.6 后运行 Megatron 相关训练报错。([verl-project/verl Issue #5883](https://github.com/verl-project/verl/issue/5883))
- **[已关闭] FSDP2 与 Megatron-bridge 在 LoRA 上的性能差异**: 开发者反馈使用 megatron-bridge 进行 LoRA 训练时，性能表现劣于 FSDP2。([verl-project/verl Issue #5094](https://github.com/verl-project/verl/issue/5094))
- **VLM 冻结 VIT 需求**: 用户询问在当前版本中如何冻结视觉模型（VIT）的参数，该需求已被最新的 PR 响应。([verl-project/verl Issue #2526](https://github.com/verl-project/verl/issue/2526))

## 4. 关键 PR 进展
在 41 条 PR 更新中，以下几个方向的架构演进和 Bug 修复最为关键：

### 🚀 核心架构与全异步性能优化
- **独立 Log Prob 服务解耦**: 引入独立的 `Model Engine Server` 用于计算 `old_log_probs`，成功将计算逻辑与 actor 训练引擎解耦，避免权重存取开销。([verl-project/verl PR #5990](https://github.com/verl-project/verl/pull/5990))
- **MQ 批量拉取与异步预取优化**: 在 `FullyAsyncTrainer` 中引入批量获取样本及后台预取线程机制，解耦了 MQ 通信/反序列化与训练 asyncio 循环。([verl-project/verl PR #6315](https://github.com/verl-project/verl/pull/6315))
- **异步生成结果导出**: 重构了 PPOTrainer 的导出逻辑，使其支持异常传播和流式写入，彻底解决了同步 I/O 阻塞训练主循环的问题。([verl-project/verl PR #6324](https://github.com/verl-project/verl/pull/6324))
- **Agent Loop 多轨迹支持**: 在全异步 pipeline 的 agent loop 中，支持一次 rollout 输出多条轨迹。([verl-project/verl PR #6271](https://github.com/verl-project/verl/pull/6271))

### 🧠 模型算法与多模态支持
- **VLM 部分参数冻结统一方案**: 新增 `freeze_module_pattern` 机制，只需通过正则表达式配置 `hf_model.yaml` 即可冻结特定参数，统一支持 FSDP/Megatron/VeOmni/TorchTitan 四大引擎。完美解决 Issue #2526。([verl-project/verl PR #6320](https://github.com/verl-project/verl/pull/6320))
- **MoE Router Replay 支持**: 接入 VeOmni 的 hook，支持在 actor 更新（R2）或 rollout（R3）期间对 MoE 路由决策进行录制与重放，极大增强 MoE 模型训练的可控性与稳定性。([verl-project/verl PR #6325](https://github.com/verl-project/verl/pull/6325))
- **音频数据流支持**: 增强了 RLHFDataset，原生支持 `audio_key` 及音频数据的流转，为后续 Qwen3-Omni 等原生音频多模态模型的 RL 训练铺平道路。([verl-project/verl PR #6276](https://github.com/verl-project/verl/pull/6276))

### 🛠️ 异构硬件适配与引擎修复 (Ascend NPU & vLLM)
- **统一硬件平台抽象层**: 提交了基于插件化引擎重写系统的平台抽象层 PR，旨在全面支持 NVIDIA CUDA、昇腾 NPU、寒武纪 MLU、摩尔线程 MUSA 等多芯片架构。([verl-project/verl PR #6086](https://github.com/verl-project/verl/pull/6086))
- **ARM 架构与 GB200 支持**: 在 ARM 架构的稳定版镜像中启用了 DeepEP，并在 4 卡 NVIDIA GB200 节点上成功验证。([verl-project/verl PR #6326](https://github.com/verl-project/verl/pull/6326))
- **Ascend NPU 生态完善**: 密集合入了针对昇腾 NPU 环境的 VeOmni qwen3 模型脚本、文档及 MindSpeedLLM 后端修复。([verl-project/verl PR #6323](https://github.com/verl-project/verl/pull/6323), [PR #6297](https://github.com/verl-project/verl/pull/6297))
- **vLLM 权重加载修复**: 修复了部分 DeepSeek-like 模型（如 Moonlight-16B-A3B）在使用 MLA 机制时权重处理后处理错误的 CI 测试。([verl-project/verl PR #6219](https://github.com/verl-project/verl/pull/6219))
- **FSDP2 参数丢弃修复**: 修复了 FSDP2 路径下静默丢弃用户设置的 `fsdp_config.forward_prefetch` 配置的问题。([verl-project/verl PR #6317](https://github.com/verl-project/verl/pull/6317))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
verl 正在从一个单纯的 RLHF 算法框架，快速演进为**面向下一代大模型（多模态、超大 MoE、Omni 架构）且跨硬件平台的分布式 RL 基建系统**。
1. **对前沿模型架构的极快响应**：无论是对 MoE Router 的录制重放机制（R2/R3），还是针对 Qwen3-VL、Audio 模型的原生数据流支持，verl 几乎在第一时间跟进主流大模型的更新节奏。
2. **异构算力的深度整合**：项目没有停留在单卡或单一生态的适配，而是通过构建抽象层，积极吸纳以昇腾 NPU 为主的国产算力集群及 NVIDIA 最新架构（GB200）的适配。
3. **极致的分布式性能压榨**：近期高频的 "fully_async" (全异步) 相关 PR（包括独立 Log Prob 服务器、MQ 预取缓存、异步 I/O）表明，项目正在死磕分布式训练中的通信与 I/O 瓶颈，这对于千卡规模的后训练至关重要。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-05-13）：

# 📊 Open Instruct RL 日报摘要 (2026-05-13)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库保持高活跃度。新增/更新 **0** 个 Releases，**6** 条 Issues 更新，**31** 条 PR 更新。项目当前重心集中在 **GRPO 算法底层优化**、**训练数据难度课程学习** 以及 **IFEval 评估框架的 Bug 修复**。

## 2. 版本发布
- **最新 Releases**: 无新版本发布。

## 3. 重点 Issues
今日更新的 Issues 多为历史问题闭环与核心功能的讨论：
- **OLMo-core GRPO 稳定性探讨**：记录了当前 GRPO 算法在对接 OLMo-core 时遇到的关键阻碍，包括 Qwen 模型保存失败和多 GPU 数据准备死锁问题。
  [#1550 Current issues with Olmo-core GRPO](https://github.com/allenai/open-instruct/issues/1550)
- **项目重构 RFC**：关于 `open-instruct` 代码库大规模重构的追踪贴，官方正在收集社区对当前架构的痛点反馈，表明底层代码正在经历深度洗牌。
  [#1103 [enhancement, help wanted] RFC: open-instruct refactor](https://github.com/allenai/open-instruct/issues/1103)
- **代码文件遗失/清理反馈**：用户反映找不到 `po_vllm_thread_ray_gtrl.py` 文件。这侧面印证了重构阶段旧版 RL 训练脚本正在被积极废弃和清理。
  [#1643 can not find python file](https://github.com/allenai/open-instruct/issues/1643)

## 4. 关键 PR 进展
PR 活动极为密集，核心贡献者 `finbarrtimbers` 和 `undfined` 推动了大量底层重构与功能增强：

- **引入难度课程学习机制**：开发者 `undfined` 连续提交 PR，增加了基于难度的采样器、映射构建器和 GRPO 难度课程，旨在通过动态调整 Prompt 难度优化 RL 训练效率。
  [#1694 Add grpo difficulty curriculum](https://github.com/allenai/open-instruct/pull/1694)
  [#1693 Add difficulty map builder](https://github.com/allenai/open-instruct/pull/1693)
  [#1692 Add difficulty curriculum sampler](https://github.com/allenai/open-instruct/pull/1692)
  [#1661 Adds difficulty sampling curriculum dataloader and dataset builder](https://github.com/allenai/open-instruct/pull/1661)

- **OLMo-core GRPO 训练底层修复**：
  - **序列打包修复**：修复了 OLMo-core GRPO 中 document-level 的注意力机制，正确传递 `doc_lens` 以支持 `packing`，显著提升长上下文训练效率。
    [#1670 Pass doc_lens to OLMo-core in forward_for_logprobs](https://github.com/allenai/open-instruct/pull/1670)
  - **指标与状态清理**：重命名 trainer 的等待指标，移除已被删除的旧 PPO 文件引用。
    [#1690 Emit per-Group generation times and rename trainer-idle metric](https://github.com/allenai/open-instruct/pull/1690)
    [#1689 Remove references to deleted ppo_vllm_thread_ray_gtrl.py](https://github.com/allenai/open-instruct/pull/1689)

- **IFEval 评估与成本计算严重 Bug 修复**：
  - 集中修复了 IFEval 验证器的正确性问题，包括修复 `validate_choice` 中**操作数反转**的严重 Bug（导致验证逻辑完全反转）以及空指令列表除零错误。
    [#1683 Fix IFEval correctness bugs in if_functions and IFEvalVerifier](https://github.com/allenai/open-instruct/pull/1683)
  - 修复了 `judge_utils.py` 中 GPT-4o 的 token 计价少写一个零（导致成本被低估 10 倍）的问题。
    [#1686 Fix gpt-4o output pricing; restate judge prices per 1M tokens](https://github.com/allenai/open-instruct/pull/1686)

- **DPO 全 Mask 序列异常处理**：修复了当序列标签全为 `-100` 时，DPO 损失计算返回 NaN 的问题，提升了训练稳定性。
  [#1685 Fix _get_batch_logps NaN on fully-masked sequences (DPO)](https://github.com/allenai/open-instruct/pull/1685)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从 PPO 向 GRPO 的技术演进闭环**：项目正在积极清理旧的 PPO / Ray 依赖代码（如 #1689），全面拥抱 Group Relative Policy Optimization (GRPO)。并且通过引入 OLMo-core 特定的算子优化（如 #1670 的 packing 支持），工程重点已从“算法复现”转向“大规模分布式 RL 底层算力压榨”。
2. **探索 Curriculum Learning 在 RLHF 中的应用**：近期连续合并的 Difficulty Curriculum 系列 PR（#1694, #1693等）表明项目正在探索超越静态数据集的强化学习范式。通过构建动态难度图来引导 RL 采样，这是目前提升 LLM 推理能力、缓解 Reward Hacking 的高价值前沿方向。
3. **对齐评估基建的持续打磨**：及时发现并修复了 Judge 模型计费和 IFEval 验证逻辑等底层 Bug（#1683, #1686），这说明团队在追求 RL 训练算法迭代的同时，也在严格把控 Reward & Evaluation 基准线的准确性，这对于开源可复现的 RL 生态至关重要。

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

以下是为您生成的强化学习（RL）开源生态日报摘要：

# RL 日报：Gymnasium 项目追踪 (2026-05-13)

**数据源**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. 今日速览
过去 24 小时内，Gymnasium 项目整体处于平稳迭代状态。无新增 Issues，无新版本发布，仅有 1 项关于底层架构类型系统的 PR 更新。当前项目重心偏向于代码质量提升与静态类型支持。

### 2. 版本发布
- **过去 24 小时**: 无新版本发布。
- **最新 Releases**: 无。

### 3. 重点 Issues
- **过去 24 小时更新**: 0 条。
- 暂无新的功能性请求或 Bug 反馈。

### 4. 关键 PR 进展
今日有 1 项关于类型系统重构的 PR 更新，该 PR 目前处于 `[OPEN]` 状态：

*   **PR #1577: Generic vector env and vector wrapper types**
    *   **作者**: jorenham
    *   **更新时间**: 2026-05-12
    *   **摘要**: 该 PR 旨在通过引入泛型（Generics）来重构 `VectorEnv` 及其所有子类的类型提示。此变更解决了先前在 #1575 中讨论的 `TypeVar` 类型变量问题。为了确保向后兼容性，新增的类型参数被设计为可选。此更新将大幅改善开发者在构建自定义向量化环境时的 IDE 补全体验与静态类型检查的准确性。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Gymnasium 目前已进入相对成熟和稳定的维护期（表现为 Issues 增长趋缓、日常更新偏向底层优化），但它依然是整个强化学习生态不可或缺的基础设施。

1.  **API 标准的绝对统治力**: Gymnasium 定义的 `Env`、`VectorEnv` 标准接口及其 `reset()` / `step()` 规范，仍是当前主流 RL 算法库（如 Stable-Baselines3, CleanRL, Ray RLlib 等）进行环境交互的“事实标准”。
2.  **持续深化的工程质量**: 从今日的 PR #1577 可以看出，核心团队正在积极推进向现代 Python 特性（如高级类型提示、Generics）的迁移。这不仅降低了复杂 RL 算法的 Debug 难度，也巩固了其在生产级和研究级代码库中的底层核心地位。
3.  **统一环境封装器**: 无论是 Atari、MuJoCo 还是新一代的 Isaac Gym 仿真器，均通过 Gymnasium 的 Wrapper 机制进行标准化统一，关注该项目的演进依然是跟踪 RL 底层环境交互范式变化的最佳风向标。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# 📊 RL 生态日报：Stable Baselines3 (SB3) 
**日期**: 2026-05-13 | **项目**: [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

---

### 1. 今日速览
过去 24 小时，SB3 生态维持低活跃度的稳定状态。无新代码合并或版本迭代。社区侧出现 1 例与底层渲染依赖及测试环境相关的边缘 Bug 报告（SDL 相关）。
- **Issues 变动**: 1 条 (新增)
- **PR 变动**: 0 条
- **Releases**: 0 个

### 2. 版本发布
**无新版本发布**。
当前项目处于稳定维护期，核心 API 冻结。建议持续关注该组织下兼容最新 Gymnasium 和 JAX/Torch 架构的生态扩展库进展。

### 3. 重点 Issues
- **#2255 [Bug] 渲染测试失败** by [jvoids](https://github.com/jvoids)
  - **链接**: [DLR-RM/stable-baselines3 Issue #2255](https://github.com/DLR-RM/stable-baselines3/issues/2255)
  - **摘要**: 开发者反馈 `tests/test_vec_envs.py::test_render` 测试用例突然中断。错误日志指向底层依赖冲突 `SDL_RumbleMotor Deps Duplicate`。该问题并非由 SB3 自身代码变更引起，而是环境依赖（如 `pygame` 或底层 SDL 库）的隐式版本更新导致之前静默运行的测试现抛出异常。
  - **分析**: 典型的下游环境依赖引发的 CI/本地测试污染，需要维护者锁定测试环境的依赖版本或提交针对性 Patch。

### 4. 关键 PR 进展
过去 24 小时内**无活跃或更新的 Pull Request**。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管目前代码库更新频率较低，但 [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) 依然是强化学习开源生态的基石：
1. **工业级基准与高可靠性**: SB3 提供了经过严格测试和代码审查的 RL 核心算法（如 PPO, SAC, TD3）。在充斥着复现性问题的 RL 领域，SB3 是少数能保证“开箱即用且结果如预期”的代码库，是验证新 Ideas 的绝对基线。
2. **统一的 API 标准**: 随着生态全面向 `Gymnasium` 标准过渡，SB3 的 `train()`, `predict()`, `learn()` 接口已成为事实上的行业标准，极大降低了学习曲线和算法迁移成本。
3. **完善的工具链支持**: 借助 [SB3-Contrib](https://github.com/Stable-Baselines-Team/stable-baselines3-contrib)（包含 Truncated Quantile Critics 等前沿算法）和 [RL Zoo](https://github.com/DLR-RM/rl-baselines3-zoo)（提供调好超参的训练框架），SB3 已形成从研究到落地的完整闭环。

---
*注：本报告基于 GitHub 实时数据自动生成与分析师洞察合成。*

</details>