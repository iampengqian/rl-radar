# RL 开源生态日报 2026-06-03

> 生成时间: 2026-06-02 22:38 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态呈现出明显的“两极分化”与“专业分工”态势。以大模型对齐为核心的训练框架占据了绝大部分开发活跃度，底层系统架构正在经历向大规模、异构算力和 Agentic 场景的深度演进；而传统经典 RL 算法库则进入稳定维护期，探索重点转向标准 API 边界的扩展与具身智能的底层对接。

## 各项目活跃度对比
今日仅有 7 个项目产生实质性动态，其余如 OpenRLHF、Stable Baselines3、Tianshou、PettingZoo 等均无活动。以下是活跃项目的横向数据对比：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 8 | 67 | 0 | 向大规模异构计算与 Agentic RL 基础设施演进，系统架构全面重构。 |
| **TRL** | 21 | 41 | 0 | 聚焦 Async GRPO 的工程补齐、算法底层数学一致性修复及 AMD 硬件适配。 |
| **slime** | 7 | 5 | 0 | 死磕超大规模模型（300B+）长序列训练的显存墙（OOM）与通信延迟问题。 |
| **ROCK** | 1 | 8 | 0 | 专注 RL 环境 Sandbox 的生命周期自动化与企业级分布式稳定性建设。 |
| **AReaL** | 5 | 7 | 0 | 极致压缩 Train-Serve 边界的权重同步延迟（引入 CUDA IPC 与在线 FP8 量化）。 |
| **ROLL** | 0 | 1 | 0 | 推进底层硬件国产化，系统性建设昇腾 Ascend NPU 的 CI 体系。 |
| **CleanRL** | 0 | 1 | 0 | 修复向量化环境下的基础张量维度解析 Bug，维持单文件算法的严谨性。 |
| **Gymnasium** | 1 | 0 | 0 | 探索在标准 Env API 之上构建机器人意图层与安全指令分发机制。 |
| **Open Instruct** | 0 | 1 | 0 | 底层核心代码解耦，开始前瞻性支持 SSM/MoE 等非标准 Transformer 的混合架构。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agentic RL 范式崛起**：多轮对话、工具调用等智能体场景正在重塑 RL 框架。Verl 提出了轨迹网关与智能体抽象，AReaL 引入了 per-session 的 Agent runtime，研究重心正从“单轮响应反馈”转向“复杂长轨迹的异步生命周期管理”。
2. **复杂/混合架构模型的对齐**：针对非传统 Decoder-only 架构的 RLHF 研究开始落地。Open Instruct 适配 Hybrid 模型（SSM/MoE），Verl 扩展了 InternVL 等多模态 VLM 的支持。
3. **算法严谨性与一致性**：社区对底层张量计算的敏感度极高（如 TRL 严格审视 RLOO 与 GRPO 之间 KL 散度近似计算的差异），追求严格可复现的数学基础。

**工程/基础设施侧信号：**
1. **打破 Train-Serve 边界**：权重同步延迟成为核心瓶颈。AReaL 采用 CUDA IPC 与在线 FP8 量化，Slime 探讨 Pipeline RL 隐藏更新时间，都在试图消除从 Trainer 到 Roller 的同步开销。
2. **极致压榨显存与通信**：针对 300B+ 超大模型和长上下文，Slime 通过分块处理 Logits 和 Rollout mask 压缩来防 OOM；Verl 和 AReaL 则在探索 KV Cache 感知与投机采样加速。
3. **异构算力全面适配**：全面拥抱国产化与多芯片生态。Verl 和 ROLL 深度适配昇腾 NPU 环境，TRL 则新增了对 AMD ROCm 硬件的官方 CI 测试支持。
4. **RL 环境管理的沙箱化与透明化**：针对复杂环境依赖，ROCK 提出了基于 Dockerfile 的透明构建分发与多 Pod 安全管控，大幅降低了算法工程师的环境配置心智负担。

## 差异化定位分析
* **Verl & AReaL & Slime**：代表了大厂级“重型 RL 基础设施”的巅峰对决。三者的核心发力点都在千卡规模的分布式训练、Megatron 深度绑定和底层 GPU 通信压榨，是百亿/千亿参数模型 Post-training 的首选工程基座。
* **TRL**：作为 HF 生态的核心连接器，其定位偏向“大模型对齐算法的全栈瑞士军刀”。它更注重算法库的广度、与 vLLM/DeepSpeed 等第三方组件的胶水性，以及学术严谨性。
* **ROCK**：专注于 RL 的“环境基础设施”。在复杂的真实世界任务中，它将原本随性的沙箱运行转化为高可用的容器化平台，填补了 RL 生态在集群级环境调度上的空白。
* **CleanRL & Gymnasium**：坚守“底层基石”定位。CleanRL 提供透明无黑盒的单文件算法实现，Gymnasium 则持续锁定 Env 标准接口，两者不追求大模型时代的吞吐量，而是保证经典 RL 与前沿研究（如具身智能 API 扩展）的绝对可复现与规范化。

## 社区热度与成熟度
1. **核心项目架构趋稳，进入深水区**：Verl、TRL、AReaL 等项目鲜有底层 API 的破坏性更新，PR 多集中在 Kernel 级别优化、多硬件 CI 适配和特定大模型（如 Qwen3.5）的算子兼容，标志着主流 LLM RL 框架已度过野蛮生长期，步入企业级成熟期。
2. **活跃度高度集中**：生态内的开发热度极度集中于排名前 3 的 LLM 对齐框架（Verl、TRL、AReaL/Slime），传统 RL 库（如 rl_games, SB3, Tianshou）陷入停滞。这客观反映了当前开源资本和算力正100%向 LLM Post-training 倾斜。

## 值得关注的趋势信号
1. **全异步架构与 vLLM 深度解耦成为标配**：无论是 TRL 补齐 AsyncGRPO 的 LoRA 支持，还是 Verl/AReaL 将生成与奖励计算彻底异步化解耦，基于 Ray 的全异步调度正在替代传统串行 PPO 流水线，成为大规模 RL 的事实标准。
2. **FP8 混合精度训练-推理链路打通**：AReaL 提议在保持 FSDP 训练 BF16 的同时在 SGLang 推理侧启用 FP8 量化，这种跨越不同精度和并行策略（FSDP vs TP）的无缝权重转换机制，将是下一阶段提升集群算力利用率的关键突破点。
3. **从文本生成 RL 迈向具身/Agent RL 基础设施**：向上， Gymnasium 开始探讨标准化的“机器人意图层”；向中，Verl 和 AReaL 在框架底层抽象 Agent 生命周期；向下，ROCK 在夯实安全沙箱运行环境。整个上下游正在为多模态、工具调用、甚至物理世界交互的强化学习闭环蓄力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-03）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体趋于平稳开发阶段，无新增 Issue、无新版本发布。项目当前的重心聚焦于底层硬件生态的拓展与持续集成（CI）的完善。

### 2. 版本发布
*   **无新版本发布**。主分支目前保持稳定，无发版动作。

### 3. 重点 Issues
*   过去 24 小时内 **无新增或更新的 Issues**。项目当前的公开问题追踪处于静默期。

### 4. 关键 PR 进展
项目近日正大力推进国产异构算力的适配工作，唯一的 PR 动态如下：

*   **[OPEN] [WIP] feat: add npu ci yaml and fix tests**
    *   **作者**: UsernameFull
    *   **链接**: [alibaba/ROLL PR #454](https://github.com/alibaba/ROLL/pull/454)
    *   **状态**: 开放中（WIP）
    *   **技术摘要**: 该 PR 旨在引入华为昇腾（Ascend NPU）的 GitHub Actions CI 测试流程，并修复/适配运行时环境以兼容 NPU 执行。当前分支 `UsernameFull:npu_ci` 包含 1 个 commit，涉及 53 个文件的变更（新增了 `.github/workflows/ci-npu-test` 工作流及相关底层测试代码的重构）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为阿里开源的 RL 基础设施，ROLL 在当前强化学习工程化生态中具有独特的观测价值：
1.  **多硬件生态解耦能力**: 如 PR #454 所示，ROLL 正在系统性建设覆盖 NVIDIA GPU 到 Ascend NPU 的 CI 体系。在算力国产化趋势下，优秀的跨设备兼容性是 RL 训练框架（尤其是大规模 Post-training 阶段）的核心壁垒。
2.  **后训练工程化的风向标**: 随着大模型技术栈向 RLHF/GRPO 等复杂 RL 对齐范式转移，底层系统的吞吐量和容错率成为关键瓶颈。ROLL 的架构演进直接反映了工业界在 LLM 强化学习规模化落地上的最新技术沉淀和痛点解决方案。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-06-03 ROCK 项目 RL 日报摘要：

### 1. 今日速览
- **Issues 更新**：1 条
- **PR 更新**：8 条
- **新版本发布**：0 个

---

### 2. 版本发布
过去 24 小时内无新增 Release 版本。但值得注意的是，PR #1034 正在推进 README 的更新，将近期的小版本补丁替换为 `v1.4.0` 至 `v1.8.0` 的主线 minor-release 矩阵，并标记 `v1.8.0` 为最新版本，预示着近期的版本迭代即将完成文档层面的收尾。

---

### 3. 重点 Issues
- **[#1050] [enhancement] [Feature] Refactor `/start` to reuse `start_async` path** (已关闭)
  - **作者**: zhangjaycee
  - **链接**: [alibaba/ROCK Issue #1050](https://github.com/alibaba/ROCK/issues/1050)
  - **分析**: 该 Issue 指出 `SandboxManager` 中的同步 `start()` 与异步 `start_async()` 启动流程相互独立，导致元数据写入逻辑存在不一致的隐患。该问题已在同日提交的 PR #1051 中修复。

---

### 4. 关键 PR 进展
今日共有 8 条 PR 更新，核心开发活动高度聚焦于 **Sandbox 稳定性优化**、**SDK 功能扩展** 以及 **后端调度与 API 规范化**。

#### 🛠️ Sandbox 核心机制重构与优化
- **[#1051] refactor(sandbox): make start() delegate to start_async()** (已合并)
  - **作者**: zhangjaycee | **链接**: [alibaba/ROCK PR #1051](https://github.com/alibaba/ROCK/pull/1051)
  - **摘要**: 解决 #1050。重构 `start()` 使其底层直接委托调用 `start_async()`，统一了元数据写入逻辑，消除了双启动链路可能带来的状态不一致 Bug。
- **[#1038] feat(sandbox): add /delete endpoint + auto-delete background scan** (审查中)
  - **作者**: zhangjaycee | **链接**: [alibaba/ROCK PR #1038](https://github.com/alibaba/ROCK/pull/1038)
  - **摘要**: 引入了沙箱删除 API 及后台自动扫描清理机制，完善沙箱生命周期的自动化管理。

#### 🚀 SDK 增强
- **[#1043] feat(sdk): start sandbox from Dockerfile via Image.from_dockerfile** (审查中)
  - **作者**: Issac-Newton | **链接**: [alibaba/ROCK PR #1043](https://github.com/alibaba/ROCK/pull/1043)
  - **摘要**: 解决 #531。支持通过 `Image.from_dockerfile(path)` 直接从本地 Dockerfile 构建并启动沙箱。系统会在 DinD builder 沙箱中透明地进行构建和推送，极大降低了研究人员的环境配置心智负担。
- **[#940] fix(sdk): mkdir target parent dir before wget in OSS upload path** (已合并)
  - **作者**: BCeZn | **链接**: [alibaba/ROCK PR #940](https://github.com/alibaba/ROCK/pull/940)
  - **摘要**: 修复了在使用 OSS 上传大文件时的路径缺失 Bug，在 `wget` 拉取前自动 `mkdir -p` 父目录，与 multipart 上传路径的服务端行为保持一致。

#### ⚙️ 后端、API 与性能优化
- **[#1027] feat(admin): ops-jobs API with DB-persisted state, multi-pod safe** (审查中)
  - **作者**: jinbai3407 | **链接**: [alibaba/ROCK PR #1027](https://github.com/alibaba/ROCK/pull/1027)
  - **摘要**: 新增基于数据库持久化状态的运维任务 API，支持多 Pod 并发安全，提升分布式集群场景下的管控能力。
- **[#985] feat(admin): add parameter validation for API endpoints** (已合并)
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK PR #985](https://github.com/alibaba/ROCK/pull/985)
  - **摘要**: 增强管理员 API 接口的参数校验，提升系统安全性。
- **[#967] perf(scheduler): switch FileCleanupTask to find -delete and add safety guards** (审查中)
  - **作者**: jinbai3407 | **链接**: [alibaba/ROCK PR #967](https://github.com/alibaba/ROCK/pull/967)
  - **摘要**: 性能优化，将清理命令从 `-exec rm` 替换为原生的 `-delete`；同时引入了路径安全校验和黑名单机制（如 `/`、`/tmp/miniforge`），防止误删系统核心目录。

#### 📝 文档更新
- **[#1034] docs: refresh README Updates with v1.4.0 – v1.8.0 minor-release lineup** (审查中)
  - **作者**: jinbai3407 | **链接**: [alibaba/ROCK PR #1034](https://github.com/alibaba/ROCK/pull/1034)
  - **摘要**: 同步更新 README，展示最新 v1.4.0 至 v1.8.0 的版本矩阵。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习（RL）开源生态中，**ROCK 项目正在精准解决“环境依赖与基础设施复杂”这一核心痛点**：
1. **透明化的容器管理**：PR #1043 引入的 `from_dockerfile` 功能是一步妙棋。RL 研究者往往受困于复杂的依赖环境，该特性实现了“代码级定义环境、一键式构建分发”，使得算法工程师可以完全不用关心底层的 Docker 构建和推送流程。
2. **企业级分布式稳定性**：RL 训练（特别是大规模异步/分布式算法）对集群容错要求极高。今日更新的双路合并（#1051）、多 Pod 状态持久化（#1027）以及带安全底线的自动清理机制（#967, #1038），表明 ROCK 正在将大厂内部的高并发、高可用架构经验沉淀到开源社区。
3. **生态闭环**：ROCK 正在从一个单纯的“沙箱运行环境”演进为涵盖 SDK 透明接入、大规模调度、集群运维（API + 自动回收）的完整 RL Infra 平台。对于需要规模化运行 RL 任务的团队而言，其工程演进方向极具参考价值和实用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-06-03 RL 日报摘要：

# 📊 slime RL 日报 (2026-06-03)

## 1. 今日速览
过去 24 小时内，slime 生态保持较高的开发活跃度，重点聚焦于**大规模训练的显存优化 (OOM)** 及**底层分布式框架的修整**。
- **Issues 更新**：7 条（4 条已关闭，3 条待处理）
- **PR 更新**：5 条（全部为 Open 状态，含 1 个 Draft）
- **新版本发布**：0 个

---

## 2. 版本发布
无最新 Release。

---

## 3. 重点 Issues
今日的 Issue 集中在**超大规模模型（如 300B+）的工程落地痛点**以及**底层环境兼容性**上：

- **超大规模模型权重更新延迟探讨**：开发者在使用 Qwen3.5 397B 进行 RL 训练时，发现 SGLang 服务端在权重切换时存在严重的请求耗尽延迟，提议引入 Pipeline RL 机制来隐藏权重更新时间。([THUDM/slime Issue #2007](https://github.com/THUDM/slime/issues/2007))
- **大模型通信拓扑报错**：在 8\*H100 集群上运行 GLM4.7-30B-A3M 模型时，由于 EP/TP/PP 配置数与物理 GPU 数量不匹配导致初始化崩溃。([THUDM/slime Issue #1818](https://github.com/THUDM/slime/issues/1818))
- **底层环境与版本兼容性**：
  - 社区询问 slime 是否支持向后兼容 PyTorch 2.8（官方安装指南要求 2.11）。([THUDM/slime Issue #2008](https://github.com/THUDM/slime/issues/2008))
  - `build_conda.sh` 脚本中 SGLang 的 Commit Hash 与版本号出现不一致。([THUDM/slime Issue #2009](https://github.com/THUDM/slime/issues/2009))
  - 之前版本 v0.2.4 的 Docker 镜像 tag 与实际 Git commit 不符的 Bug 被重新提及。([THUDM/slime Issue #1794](https://github.com/THUDM/slime/issues/1794))
- **理论探讨**：探讨了为何在 micro-batch 调度中，logprob 计算与训练过程必须保持一致的 batch size。([THUDM/slime Issue #1964](https://github.com/THUDM/slime/issues/1964))

---

## 4. 关键 PR 进展
核心开发者今日合并提交了多个关键性能优化 PR，直击 LLM 前向与对齐过程中的**显存墙 (OOM)** 问题：

- **⚡ 显存优化：Logits 分块处理防 OOM** ([THUDM/slime PR #2010](https://github.com/THUDM/slime/pull/2010))
  针对长序列场景（如 Qwen3），移除了在计算 loss 时对完整 `[T, V]` fp32 logits 张量的整除操作，改为在生成响应时按 chunk 释放显存，单步可节省约 16 GiB 峰值显存。
- **⚡ 显存优化：融合 logprob 降低峰值** ([THUDM/slime PR #2011](https://github.com/THUDM/slime/pull/2011))
  引入融合的词表并行辅助函数，将原先的双向计算替换为在克隆张量上的单次计算，显著降低了 ref/old-logprob 路径的显存峰值。
- **⚡ 数据传输优化：Rollout mask 压缩** ([THUDM/slime PR #2006](https://github.com/THUDM/slime/pull/2006))
  在 `_convert_samples_to_train_data` 阶段将 `loss_mask` 转换为 `np.int8`，在数据进入 Ray plasma store 前进行序列化压缩，有效降低分布式调度下的内存占用。
- **🛠 修复：Megatron 梯度累加融合失效问题** ([THUDM/slime PR #1999](https://github.com/THUDM/slime/pull/1999))
  修复了使用 `megatron.bridge` 模式时，CLI 参数 `--no-gradient-accumulation-fusion` 被代码逻辑静默覆盖的退化 Bug。
- **🏗 架构重构：Trajectory Manager 草案** ([THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005))
  发起了针对轨迹管理器（Trajectory Manager）的重构 Draft PR，有望进一步提升数据吞吐效率。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击大模型对齐的显存痛点**：从今日的 PR 进展可以看出，slime 团队正在实打实地解决数百亿乃至千亿参数模型（如 Qwen3.5 397B、GLM-30B）在 RLHF 阶段的显存爆炸和通信瓶颈。对于涉及长上下文的 LLM 厂商，这类底层优化具有极高的工程复用价值。
2. **关注 Inference-Training 边界效率**：Issue #2007 中关于“服务端权重热切换与请求排空耗时长”的讨论，以及相关 Rollout 层面的优化，证明该项目不仅在研究 RL 算法本身，还在深度整合 SGLang 等推理框架，致力于打破 RL 训练中 Actor 推理与更新的延迟壁垒。
3. **前沿 Megatron-LM 生态深度绑定**：通过不断修补 Bridge provider 和分布式并行状态初始化的 Bug，slime 正在稳固其作为基于 Megatron 架构进行大规模分布式 RL 训练的“开箱即用”标准框架的地位。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 开源生态 RL 日报摘要 (2026-06-03)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高活跃度。无新版本发布，但共有 **5 条 Issues** 和 **7 条 Pull Requests** 发生了状态更新或新讨论。活动重心主要集中在**系统底层的权重同步机制优化**（FP8 量化、CUDA IPC 通信）以及**训练引擎的兼容性修复**（FSDP、Megatron-core）。

---

## 2. 版本发布
**无**。目前社区重心仍在主分支的架构迭代与 RFC 讨论上。

---

## 3. 重点 Issues
- **[Roadmap] 2026 H2 Milestones** [#1381](https://github.com/areal-project/AReaL/issue/1381)
  更新了 2026 年下半年的开发路线图，为外部贡献者提供了明确的系统层和算法层演进方向。
  
- **[RFC] Integrate Ray Core RDT for Weight Syncing** [#1243](https://github.com/areal-project/AReaL/issue/1243)
  关于重构权重同步机制的 RFC。提议整合 Ray Core RDT，以解决现有 `xccl` 模式（AReaL 1.0）和 `awex` 后端（AReaL 2.0）在训练与推理侧权重同步时的瓶颈问题。

- **[Feature] FSDP BF16 Training + SGLang FP8 Rollout** [#1378](https://github.com/areal-project/AReaL/issue/1378)
  提出在保持 FSDP 训练 BF16 精度的同时，在 SGLang 推理侧启用 FP8 块级量化，以极致压缩显存并提升 Rollout 吞吐。

- **[Question] areal 环境依赖问题** [#1382](https://github.com/areal-project/AReaL/issue/1382)
  用户提问关于放宽 `requirements` 严格限制的问题，探讨在特殊环境下使用 PyTorch 2.8 运行 AReaL 的可行性。

---

## 4. 关键 PR 进展
系统底层与推理引擎相关 PR 占据主导：

- **feat(agent_service): add OpenClaw per-session agent runtime** [#1383](https://github.com/areal-project/AReaL/pull/1383)
  引入 `OpenClaw` 作为 Agent 运行时，为每个 RL 会话提供独立的网关子进程和上游 LLM 密钥管理，实现了精细化的 per-episode 追踪。

- **Feat: full fp8 implementation with fsdp+sglang in v1 path** [#1379](https://github.com/areal-project/AReaL/pull/1379)
  配合 Issue #1378，实现了在 NCCL 广播前将 BF16 权重在线量化为 FP8 的内核，从而打通 FSDP 训练与 SGLang FP8 推理的完整链路。

- **feat(awex): FSDP colocate weight update via CUDA IPC** [#1361](https://github.com/areal-project/AReaL/pull/1361)
  在 `AwexFSDPAdapter` 中增加了基于 CUDA IPC 的权重转移机制，允许在共享 GPU 上直接更新 SGLang 推理权重，大幅减少显存拷贝开销。

- **feat(distillation): add on-policy distillation using RolloutEngine** [#1376](https://github.com/areal-project/AReaL/pull/1376)
  引入基于专用推理引擎的 On-policy 蒸馏机制，替代原有的训练引擎 Teacher 路径，显著降低了显存开销。

- **fix(fsdp engine): localize DTensor norm output for Qwen models in TP** [#1365](https://github.com/areal-project/AReaL/pull/1365)
  修复了 Qwen 系列模型在张量并行（TP）下的兼容性问题。通过注册 Forward Hook 解决了中间算子对 `DTensor` 分发机制的破坏。

- **fix(checkpointer): use dp_reshardable sharding type for megatron-core >=0.11** [#1344](https://github.com/areal-project/AReaL/pull/1344)
  适配 `megatron-core 0.11`，将分片类型切换为 `dp_reshardable`，修复了旧版 API 废弃导致的 Checkpoint 读写失败问题。

*(此外，PR #1377 修复了单控制器模式下不必要的 CUDA 同步等待并已合入 CLOSED 状态。)*

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在解决 LLM 强化学习训练中最核心的**系统瓶颈**：
1. **打破 Train-Serve 边界**：通过引入 CUDA IPC、Ray RDT 及在线 FP8 量化，AReaL 正在将“权重从 Trainer 同步到 Roller”的延迟降到极低，这是实现高质量 RL 快速迭代的关键。
2. **异构引擎的高效组合**：系统正在深度整合 FSDP（易用的模型并行）和 SGLang/vLLM（极致的推理吞吐），这种解耦的训练-推理解析架构正在成为新一代 RLHF 系统的事实标准。
3. **向 Agent RL 演进**：从 OpenClaw runtime 的集成可以看出，AReaL 的视野已不仅限于文本生成，而是在构建支持多轮、多 Session 追踪的 Agent RL 基础设施。对于关注 Agent 训练框架的研究者和工程师而言，其架构演进极具参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习开源生态日报
**日期**: 2026-06-03 | **数据源**: [huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
过去 24 小时内，TRL 仓库保持着高度活跃的开发与讨论状态。无新版本发布，但共有 **21 条 Issues 更新** 和 **41 条 PR 更新**。核心焦点集中在 **GRPO 算法（特别是 Async GRPO）的稳定性与 PEFT/LoRA 适配**、**KL 散度计算的学术严谨性**，以及 **对 AMD ROCm 硬件的 CI 适配**。

---

### 2. 版本发布
**无** (近期无新 Release)。

---

### 3. 重点 Issues

*   **[架构设计] RFC: 环境拥有的奖励机制**
    *   作者: qgallouedec | 链接: [#5912](https://github.com/huggingface/trl/issues/5912)
    *   **简评**: 提出重大架构修改请求，建议在 `GRPOTrainer` 等在线训练器中，将奖励计算的所有权从 Trainer 剥离并转移给环境。这预示着 TRL 未来对强化学习环境交互的支持将更加标准和灵活。
*   **[算法一致性] RLOOTrainer KL 惩罚项计算错误**
    *   作者: Sumu004 | 链接: [#5889](https://github.com/huggingface/trl/issues/5889)
    *   **简评**: 发现 `RLOOTrainer` 使用了一阶 log 比例计算 KL 惩罚（可能为负数），而 `GRPOTrainer` 使用的是 Schulman 二阶近似（方差更低且恒 $\ge 0$)。算法底层实现的不一致性可能会严重影响不同算法间的复现与对齐效果。
*   **[训练缺陷] AsyncGRPO 加载 Checkpoint 时重复计算 vLLM 推理**
    *   作者: ggcr | 链接: [#5863](https://github.com/huggingface/trl/issues/5863)
    *   **简评**: 在断点续训时，即使跳过了数据加载，依然会对已处理的 batches 重新执行 vLLM 推理，导致严重的算力浪费与启动延迟。
*   **[训练缺陷] GRPO + vLLM Colocate + PEFT 挂起**
    *   作者: RobHessQ | 链接: [#3671](https://github.com/huggingface/trl/issues/3671)
    *   **简评**: 多卡环境下，组合使用 GRPOTrainer、vLLM 后端和 PEFT 会导致训练进程在几次迭代后无响应死锁。这是一个高影响的核心 Bug。

---

### 4. 关键 PR 进展

*   **[核心特性] `AsyncGRPOTrainer` 新增 PEFT/LoRA 支持**
    *   作者: rycerzes | 链接: [#5896](https://github.com/huggingface/trl/pull/5896)
    *   **简评**: 补齐了异步 GRPO 的短板。通过引入权重同步的 merge/unmerge 循环机制，使得显存开销更小的 LoRA 训练可以在 `AsyncGRPOTrainer` 中正常运行。
*   **[核心特性] GKD 训练器引入 vLLM 加速学生模型生成**
    *   作者: roycho96 | 链接: [#5782](https://github.com/huggingface/trl/pull/5782)
    *   **简评**: 通用知识蒸馏（GKD）现在可以使用 vLLM 进行学生的 on-policy 推理，支持 `colocate` 和 `server` 模式，有望大幅提升蒸馏效率。
*   **[架构重构] 简化 DPO 中的 Reference Model 处理逻辑**
    *   作者: albertvillanova | 链接: [#5876](https://github.com/huggingface/trl/pull/5876)
    *   **简评**: 重构了 DPO 家族的参考模型处理。特别是在 PEFT 预计算参考对数概率的场景下，使 `ref_model` 的状态管理更加鲁棒，减少显存泄漏或计算错误的风险。
*   **[Bug 修复] 修复 DeepSpeed CPU Offload 下的 Crash**
    *   作者: roycho96 | 链接: [#5916](https://github.com/huggingface/trl/pull/5916)
    *   **简评**: 修复了当使用 DeepSpeed 且开启 `offload_optimizer: cpu` 时，由于未正确初始化优化器导致的 `prepare_deepspeed` 崩溃问题。
*   **[硬件扩展] 新增 AMD/ROCm CI 支持**
    *   作者: kashif | 链接: [#5918](https://github.com/huggingface/trl/pull/5918)
    *   **简评**: TRL 开始正式对接 AMD GPU 生态。增加了 ROCm 专属的 CI 测试脚本，修复了错误地将 ROCm GPU 识别为 NVIDIA Ampere 架构的 Bug，避免了 Flash Attention 2 在 AMD 上的非法调用。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **向高效的异步训练全面演进**: 从 PR 趋势可以看出，TRL 正在将其核心 RLHF 算法（如 GRPO）的计算图推向异步化。通过解耦环境交互与模型训练，并着力解决 Checkpoint 恢复和 vLLM 协同的工程难题，TRL 正试图打破传统同步训练在多卡/多机集群下的吞吐量瓶颈。
2.  **对学术严谨性与算法一致性的持续打磨**: 社区对 KL 散度近似器和 reward baseline 计算的微小差异保持着极高的敏感度（如 Issue #5889 和 PR #5902）。这种在底层张量计算级别消除不确定性的努力，是保障大模型对齐过程可复现的关键。
3.  **全栈式工程优化**: 项目不再局限于算法实现，而是向下深入到多硬件生态适配（如 ROCm CI）、向后端推理引擎深度绑定（如 vLLM 联调与 PEFT 显存优化），使其在工业级大模型训练方案中占据了不可替代的位置。

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

以下是为您生成的 verl 项目 2026-06-03 强化学习（RL）生态日报摘要：

# verl 项目日报 - 2026-06-03

## 1. 今日速览
过去 24 小时内，verl (volcengine/verl) 生态保持高度活跃：
* **Issues 更新**：8 条（包含多项重要的架构级 RFC 和硬件适配讨论）
* **PR 更新**：67 条（涵盖模型支持、性能优化、分布式训练修复及 CI 稳定性建设）
* **新版本发布**：0 个

## 2. 版本发布
今日无最新 Releases 更新。

## 3. 重点 Issues
今天的 Issue 集中在**异步强化学习架构优化**、**推理引擎加速**以及**底层精度与确定性控制**。

* **[RFC] 智能体抽象与轨迹网关**：社区正在讨论为 VERL 引入全新的 `AgentFramework` 基类，以解耦智能体生命周期管理与奖励计算，大幅提升 Agentic RL 的灵活性。([#5790](https://github.com/verl-project/verl/issues/5790))
* **[RFC] 异步 RL 中的 KV Cache 感知与弹性调度**：提出了 Dynamo KV-aware Routing 和多层级 KVBM Cache，旨在解决多轮 Agentic RL Rollout 中的 prefix 复用成本问题。([#6577](https://github.com/verl-project/verl/issues/6577))
* **[Feature] 解耦投机采样**：提议在 SGLang Rollout 中引入解耦的投机采样机制，以显著加速 LLM 后训练（RL）的推理阶段。([#5559](https://github.com/verl-project/verl/issues/5559))
* **[Feature] 解耦推理与奖励计算**：针对全异步训练流水线，提议通过 Reward Queue 将生成与奖励计算从串行改为彻底解耦的异步架构。([#6575](https://github.com/verl-project/verl/issues/6575))
* **[Feature] Rollout 引擎的确定性支持**：开发者呼吁为 vLLM rollout 引擎添加 `full_determinism` 支持，以保证实验的严格可复现性。([#6570](https://github.com/verl-project/verl/issues/6570))
* **[Ascend] 昇腾环境兼容性**：持续有开发者询问并推进 Qwen3.5 在昇腾 NPU 上基于 Megatron+mindspeed 路线的 GRPO 训练支持。([#6528](https://github.com/verl-project/verl/issues/6528))

## 4. 关键 PR 进展
今日 PR 动态重点围绕**多模态模型扩展**、**底层分布式训练修bug**及**CI/CD 流程优化**。

* **[model] 支持 InternVL 系列 VLM**：新增对 InternVL2_5、InternVL3、InternVL3_5 视觉语言模型的 GRPO 训练支持，完善了多模态 RL 生态。([#6578](https://github.com/verl-project/verl/pull/6578), [#6579](https://github.com/verl-project/verl/pull/6579))
* **[rollout] vLLM 确定性 Rollout**：呼应了上述 Issue，为 vLLM 推理引擎增加了确定性和随机种子配置。([#6572](https://github.com/verl-project/verl/pull/6572))
* **[vllm, fsdp] 修复权重同步**：修复了 FSDP 训练到 Rollout 权重同步时可能遗漏 `registered buffers` 的致命问题，防止 train/rollout 状态不一致。([#5801](https://github.com/verl-project/verl/pull/5801))
* **[ckpt] 修复 HCCL 异步广播**：针对昇腾环境，修复了检查点保存时 HCCL 异步广播执行的问题，提升了异构硬件下的稳定性。([#6569](https://github.com/verl-project/verl/pull/6569))
* **[fully_async] 优化 Ray 资源调度**：全面重构了全异步训练中 Ray Actor 的 CPU 预留配置，由硬编码改为 Auto/可配置，提升集群资源利用率。([#6574](https://github.com/verl-project/verl/pull/6574))
* **[perf] Qwen3.5 MFU 估算**：准确计算 Qwen3.5 混合注意力机制和 MoE 架构的 FLOPs，为性能测试提供基准。([#6389](https://github.com/verl-project/verl/pull/6389))
* **[ci] 核心工作流稳定化**：开发者集中修复了主分支 CI 的稳定性问题，并启动了 Ascend 环境下 `pip` 向 `uv` 的全面迁移。([#6568](https://github.com/verl-project/verl/pull/6568), [#6535](https://github.com/verl-project/verl/pull/6535))

## 5. 为什么这个项目值得在当前 RL 生态继续关注

从今日的 Issue 讨论与 PR 动向可以明显看出，verl 正在经历从**“单纯的 LLM PPO/GRPO 训练框架”**向**“大规模、异构计算、Agentic 强化学习基础设施”**的演进：

1. **架构向 Agentic RL 转型**：Issue #5790（Agent 抽象）和 #6577（KV Cache 路由与多轮调度）表明，verl 正在系统性地解决多轮对话、工具调用等 Agentic 场景下 Rollout 成本过高的痛点。这是目前大模型 RL 领域最前沿的探索方向。
2. **极致的分布式系统优化**：从全异步 Agent 循环（#6565, #6574）到分离式推理/奖励计算（#6575），项目在设计层面不断打破传统串行训练流水线的瓶颈，逼近硬件资源的极致利用率。
3. **软硬协同与底层压榨**：无论是针对昇腾 NPU 的 HCCL/Megatron 适配，还是深入到 vLLM 和 Megatron-LM 的精度（#6576）和确定性（#6572）控制，verl 在底层的深耕确保了其在千卡规模训练中的稳定性和可控性。

总而言之，verl 不仅在跟踪最新的开源模型（如 InternVL3_5, Qwen3.5），更在 RLHF/Post-training 的底层系统工程和 Agentic 架构上提供极具价值的开源解决方案。对于需要大规模跑通复杂 RL 任务的研究团队和工程架构师而言，是其技术选型和代码参考的必看项目。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-06-03 强化学习（RL）开源生态日报摘要：

# 📊 RL 开源生态日报：Open Instruct (allenai/open-instruct)
**日期**: 2026-06-03

### 1. 今日速览
过去 24 小时内，[allenai/open-instruct](https://github.com/allenai/open-instruct) 仓库整体活跃度呈现低位平稳态势。无新增代码版本发布，无活跃的 Issues 更新，但有一条关于底层架构扩展的 Pull Request 提交。项目当前的重心似乎正向底层模型架构的兼容性与训练框架的泛化能力倾斜。

### 2. 版本发布
- **最新 Releases**: 过去 24 小时内**无**新版本发布。[(查看所有 Releases)](https://github.com/allenai/open-instruct/releases)

### 3. 重点 Issues
- **最新 Issues**: 过去 24 小时内**无**新增或更新的 Issues。[(查看所有 Issues)](https://github.com/allenai/open-instruct/issues)
- *分析*：社区的 Issue 追踪器目前处于静默期，通常意味着当前版本的 API 和功能相对稳定，暂未暴露出严重的阻断性 Bug。

### 4. 关键 PR 进展
- **PR #1713** [[OPEN] Now, we support the hybrid model in our Olmo-core code.](https://github.com/allenai/open-instruct/pull/1713)
  - **作者**: [finbarrtimbers](https://github.com/finbarrtimbers)
  - **状态**: Open (创建于 2026-06-02)
  - **核心内容**: 该 PR 在 `Olmo-core` 代码中引入了对 **Hybrid Model（混合模型）** 的支持。
  - **技术洞察**: 在当前的 LLM/RL 训练范式演进中，Hybrid 架构（例如将 Transformer 与注意力机制变体、状态空间模型 SSM/Mamba 或其他混合专家 MoE 组件结合）是突破长上下文计算瓶颈的重要方向。此 PR 意味着 Open-Instruct 的 RL 训练管线正在剥离单纯的 Decoder-only 架构依赖，向支持更复杂、高效的混合前向网络迈进，这对于后续探索非标准 Transformer 架构的 RLHF 对齐具有重要意义。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **底层框架的前置性演进**：正如 PR #1713 所示，项目正在 `Olmo-core` 层面进行架构抽象。对 Hybrid 模型的支持表明 Allen AI 正在为下一代包含 SSM/MoE 等混合结构的 LLM 铺垫 RL 对齐（如 PPO、DPO）训练基础设施。
2. **RLHF 训练工艺的标准化**：Open Instruct 提供了从 SFT 到 RLHF 全流程的经过严格验证的开源实现。对于 RL 算法工程师而言，它是验证自定义奖励模型（Reward Model）或改良 RL 算法（如迭代式 DPO）的优质基座平台。
3. **AI2 生态的数据-模型双轮驱动**：结合 AI2 开放的 OLMo 系列权重与 Dolma 数据集，Open Instruct 提供了一个完全透明、可复现的 RL 飞轮。这在当前闭源模型 RL 细节日益黑盒化的背景下，是学术研究和底层工程验证的珍贵标杆。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报 - 2026年06月03日

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体趋于平稳。无新增 Issues、无新版本发布，仅有 1 项关于 DDPG 算法在向量化环境下动作空间解析的 Bugfix PR 产生了更新动态。
* **Issues 更新**: 0 条
* **PR 更新**: 1 条
* **新 Releases**: 0 个

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#538 [OPEN] fix: use single_action_space in DDPG for vectorized envs](https://github.com/vwxyzjn/cleanrl/pull/538)**
  - **作者**: Mr-Neutr0n
  - **技术细节**: 修复了 DDPG 算法在向量化环境下的张量维度解析 Bug。原代码在构建 Critic 和 Actor 网络时错误调用了全局的 `envs.action_space`，导致在多环境并行时获取到的是合并后的非独立动作空间。本 PR 将其修正为 `envs.single_action_space`，以确保网络接收到正确的单环境动作维度。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的算法透明度**：相比于高度抽象和封装的 RL 库，CleanRL 坚持单文件实现算法。上述 DDPG 的 Bug 修复能在 PR 中被极其清晰地追踪和验证，这种“所见即所得”的代码结构极大降低了 RL 研究者和工程师的阅读与二次开发门槛。
2. **持续修复底层机制隐患**：向量化环境是现代 RL 训练加速的基础，其 `action_space` 与 `single_action_space` 的区别是极易踩坑的底层细节。项目社区对这类核心机制持续进行针对性修复，确保了底层实验的绝对严谨性。
3. **RL 复现与教学的核心基石**：在伪代码与工程实现之间往往存在巨大鸿沟，CleanRL 提供了标准且可运行的 PyTorch 对照组。对于需要验证新想法、或者学习标准 RL 算法实现细节的开发者而言，它是 GitHub 上不可替代的基础设施。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 2026-06-03 Gymnasium 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 项目整体处于平稳维护状态，无新版本发布与 PR 进展。社区焦点集中在标准 API 的边界扩展上，新增 1 条关于“环境意图层”架构讨论的 Issue。

### 2. 版本发布
- **无新版本发布**。核心 API 与底层代码在过去 24 小时内保持稳定。

### 3. 重点 Issues
- **[#1588 [OPEN] URML (open robot intent language): an intent layer alongside the Gymnasium env API, request for comment](https://github.com/Farama-Foundation/Gymnasium/issues/1588)**
  - **背景**：作者 idoco2003 提出了一套名为 URML（Apache-2.0 协议）的开源机器人意图描述语言。
  - **核心讨论点**：该 Issue 旨在探讨如何在 Gymnasium 现有的 RL 环境标准 API（事实上的行业标准）之上，构建一个平行的“意图层”。其工作流为：`自然语言指令 -> 类型化原语 -> 基于能力清单和安全边界的静态验证 -> 动作分发`。
  - **技术价值**：这标志着社区正在尝试将 Gymnasium 的 API 边界从纯粹的“Env API”向“具身智能与安全指令分发”的上下游延伸。

### 4. 关键 PR 进展
- **无**。过去 24 小时内无活跃的 Pull Request 更新。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率较低，但 Gymnasium 依然是强化学习生态不可替代的基石，其核心价值体现在：
1. **API 标准的绝对统治力**：正如 Issue #1588 所反映的，无论上层是传统的决策算法还是前沿的具身智能（URML），Gymnasium 的 `Env` 接口已成为所有动作空间的“底层标准”。
2. **向机器人安全的边界扩展**：社区开始主动探讨将其与静态验证、安全边界（Safety Envelope）等机制结合，表明 Gymnasium 正在从单纯的“算法测试沙盒”向“真实机器人部署链路”渗透。
3. **持续的生态凝聚力**：作为 Farama-Foundation 的核心项目，它依然是 RL 开发者提出新架构、寻求 RFC（意见征集）的第一落脚点。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>