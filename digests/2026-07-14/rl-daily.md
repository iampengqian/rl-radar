# RL 开源生态日报 2026-07-14

> 生成时间: 2026-07-13 22:15 UTC | 覆盖项目: 15 个

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

当前（2026年中）强化学习开源生态已彻底完成从“传统单代理强化学习”向“大模型对齐与智能体强化学习”的范式转移。整个生态呈现出清晰的分层架构：底层环境接口（如 Gymnasium, PettingZoo）持续打磨确定性边界，传统多智能体算法库（如 CleanRL, rl_games）进入极致轻量化与稳定维护期；而算力与工程的核心战场全面转移至以 LLM 为核心的分布式训练（如 verl, TRL, slime, OpenRLHF）与异构任务编排（如 ROCK, AReaL）。大并发、多模态、长轨迹与分布式推理加速成为了当前生态的最高频词汇。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 59 | 20 | 0 | 迈向 Agentic RL OS；狂热推进底层分布式通信榨取与多硬件适配 |
| **TRL** | 11 | 30 | 0 | 打磨 Async GRPO 极致细节；引入沙盒环境，加速向 Agent RL 演进 |
| **AReaL** | 1 | 29 | 0 | 重度攻坚 Agent Memory 安全鉴权与可重放确定性采样 |
| **Gymnasium**| 1 | 24 | 0 | 极致修复向量化环境边界漏洞；推动严格类型提示与依赖解耦 |
| **ROCK** | 7 | 9 | 0 | 完善分布式容错机制；发力统一数据集沙盒任务编排 |
| **PettingZoo**| 3 | 11 | 0 | 修复多智能体底层物理与逻辑 Bug；强化 API 标准化 |
| **slime** | 2 | 2 | 0 | 前沿大模型架构 (SparseMLA/MoE) 的底层算子与推理引擎适配 |
| **Open Instruct**| 0 | 3 | 0 | 统一散度修正范式重构底座；探索长周期训练存储优化 |
| **ROLL** | 2 | 0 | 0 | 热议异步 GRPO 硬件利用率瓶颈与非 LLM 奖励模型协同 |
| **rl_games** | 0 | 1 | 0 | 关注 PPO 在复杂向量化环境下的数据纯洁度 |
| **torchtune**| 1 | 0 | 0 | 爆出 YAML 配置文件引发的任意代码执行 (RCE) 高危漏洞 |
| **OpenRLHF**| 0 | 1 | 0 | 处于平稳期，进行局部缺陷微调 |
| **CleanRL** | 0 | 1 | 0 | 纯净维护期，仅更新文档与注释 |
| **SB3 / Tianshou** | 0 | 0 | 0 | 无活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **GRPO 变体与散度修正的范式统一**：无论是 TRL 对 GRPO 损失分母掩码机制的严苛修正，还是 Open Instruct 提出的统一 rho-divergence masking，都表明业界正在将零方差过滤、非对称裁剪（如 UP-GRPO）等特性模块化，以解决 Binary Reward 下的梯度偏差与探索效率问题。
2. **Agent RL (多轮交互与长轨迹) 成为新常态**：训练焦点正从单轮偏好对齐转向复杂工具调用。verl 提出 Agent 抽象 RFC，TRL 引入 `SandboxEnvironment`，均旨在打通 LLM 与外界环境多轮交互、长记忆依赖的强化学习闭环。

**工程/基础设施侧信号：**
1. **异步/分离式训练的通信极限榨取**：为了打破 Rollout 生成时的 GPU 闲置墙，异步 GRPO 成为标配。verl 引入增量权重同步（削减 99% 冗余通信）与动态资源伸缩；ROLL 则在探索异构算力（Diffusion 作 Reward）的流水线协同。
2. **海量并发下的分布式容错与状态确定性**：随着分布式节点指数级增加，ROCK 密集修补 HTTP 与调度器的超时阻塞机制；AReaL 深度集成可重放采样；rl_games 和 Gymnasium 则在底层修复向量化重置带来的脏数据与哈希随机化漏洞。
3. **异构硬件适配与权重热更新壁垒**：框架需极速适应最新硬件（RTX 5090、昇腾 NPU）与最新模型架构。slime 紧急修复 GLM-5.2 SparseMLA 算子 bug 和 SGLang 的 MoE 权重热更新布局错误，凸显了“RL+高频推理引擎”深度绑定时面临的工程深水区挑战。

## 差异化定位分析

- **重系统与算力架构（基建狂魔）**：**verl**、**slime** 和 **OpenRLHF**。它们致力于解决大集群、复杂并行（FSDP/Megatron）、异构硬件的显存与通信墙问题，提供的是工业级的大规模底座。
- **重算法迭代与敏捷接入（开发者之友）**：**TRL** 和 **Open Instruct**。依托 HuggingFace 生态，以高可读性和高可用性，第一时间跟进最前沿的算法优化，是研究员验证新思路的极速试错平台。
- **重安全与智能体控制（前瞻探索）**：**AReaL** 和 **ROCK**。其视角超越了单纯的模型更新，着重于解决真实环境交互时的沙箱编排、身份鉴权、长期记忆安全以及可溯源调试，构建的是 Agent OS 雏形。
- **重环境与接口标准（基石底座）**：**Gymnasium**、**PettingZoo** 和 **rl_games**。通过严格的类型检查、物理逻辑修复与依赖瘦身，巩固其作为纯环境接口和多智能体测试床的中立地位。

## 社区热度与成熟度

- **高速迭代期（高热度，解决前沿痛点）**：**verl** 和 **TRL** 占据了生态绝对的热度中心，PR/Issue 讨论高度聚焦于 Agentic 架构落地与 Async GRPO 细节，代表了 SOTA 大模型训练的最前线。
- **深水区攻坚期（高壁垒，垂直深耕）**：**AReaL**、**slime** 和 **ROCK** 虽然日常 Issue 数量不及前者，但其提交的 PR 极具深度（如 fail-closed 安全策略、底层 TileLang 算子级修改、全量数据集并发沙盒），展现了极高的工程门槛与工业落地价值。
- **高度成熟期（低波动，稳定性压倒一切）**：**Gymnasium**、**PettingZoo**、**CleanRL**、**rl_games** 及 **OpenRLHF** 日常趋于平稳，主要精力在于清理底层隐蔽 Bug、提升静态检查指标与维护 API 兼容性。它们已度过功能大爆发阶段，作为基础设施的护城河极其稳固。

## 值得关注的趋势信号

1. **Agent 安全与可信执行成为硬性指标**：AReaL 投入大量精力构建 Memory 控制平面、运行时防伪溯源与跨进程鉴权；torchtune 爆出的 YAML RCE 漏洞，均预示着随着 Agent 自主化程度提高，“沙箱隔离、执行防越权与结果可审计”将成为下一代 RL 框架的核心卖点。
2. **“推理引擎高频协同”成为核心竞争力**：大模型 RL 训练的吞吐量极大程度上受制于 Rollout 生成效率。如 slime 深度干预 SGLang FlashInfer 算法布局、verl 研发增量权重同步，自研或魔改推理加速引擎以适应高频参数更新，正在取代纯粹的算法设计成为企业的核心技术壁垒。
3. **强化学习全链路的“去 LLM 化”探索**：ROLL 社区关于引入 Diffusion 模型作为 Reward Provider 的讨论，释放了一个强烈信号——未来的 RLHF/RLAIF 中的 Reward 计算将不仅限于 LLM，多模态判别模型、物理引擎甚至真实世界反馈的异步接入，将极大拓展大模型对齐的边界。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 开源生态日报：ROLL (alibaba/ROLL)**
**日期**: 2026-07-14

---

### 1. 今日速览
过去 24 小时内，ROLL 项目的代码库无明显变动（0 个 PR 更新，0 个新版本发布），但有 2 个关键技术 Issue 被重新激活并更新了讨论。讨论的核心焦点集中在**异步 GRPO 训练的硬件利用率瓶颈**以及**非 LLM Reward 模型（如 Diffusion）的异步协同训练**上。

### 2. 版本发布
*   **无**。过去 24 小时内 ROLL 未发布新版本。

### 3. 重点 Issues
今日更新的 2 条 Issue 直击当前大模型强化学习在复杂工程落地时的痛点：

*   **#394 [OPEN] Very slow asynchronous GRPO training on 8×A100**
    *   **作者**: 5SSjw (创建: 2026-03-22 | 更新: 2026-07-13)
    *   **摘要**: 开发者在 8×A100 环境下使用 ROLL 进行 Qwen3-8B 的异步 GRPO 训练时，遭遇了严重的训练步耗时过长问题。该问题反映了当前异步强化学习中 Actor 与 Rollout 交互时的效率瓶颈，求助是否为预期行为或配置问题。
    *   **链接**: [alibaba/ROLL Issue #394](https://github.com/alibaba/ROLL/issues/394)

*   **#230 [OPEN] ROLL 是否可以加速reward模型（非LLM）计算与LLM GRPO的高效协同训练**
    *   **作者**: JoshonSmith (创建: 2025-11-10 | 更新: 2026-07-13)
    *   **摘要**: 针对**生成式奖励模型** 的性能问题。用户采用 Diffusion 模型作为 Reward Provider，导致 GRPO 训练显卡需长时间等待 Reward 计算完成。用户已尝试构建独立的 reward server 及异步请求，进一步探讨在 ROLL 架构中如何实现非 LLM 奖励计算与主模型训练更高效的流水线协同。
    *   **链接**: [alibaba/ROLL Issue #230](https://github.com/alibaba/ROLL/issues/230)

### 4. 关键 PR 进展
*   **无**。过去 24 小时无新增或更新的 Pull Request。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日活跃的 Issue 可以看出，RL 生态的重心已从“基础算法实现”转移到了**“异构算力下的系统级吞吐量优化”**。
ROLL 值得持续关注的原因在于：
1.  **直击异步 RL 痛点**：异步 GRPO（Issue #394）是目前业界提高 GPU 滴水率的标准解法，但受限于通信和调度，极难调优。ROLL 提供了原生支持这一复杂机制的框架，是验证大规模 RL 训练系统性能的重要基座。
2.  **灵活的 Reward 抽象与解耦**：Issue #230 揭示了未来的 RL 不再局限于“LLM 作为 Reward”，而是向多模态、Diffusion 等重计算量模型扩展。ROLL 社区正在探索的 Reward Server 解耦及异步调用机制，为复杂奖励信号驱动的强化学习（如基于视觉的 RLHF 或 RLAIF）提供了工程参考。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态开源日报 (2026-07-14)**

### 1. 今日速览
过去 24 小时内，ROCK 仓库共有 16 项活动更新（包含 7 条 Issues 和 9 条 Pull Requests），无新版本 Release 发布。今日的活动高度聚焦于**底层容错机制的增强**（HTTP 请求与调度器超时控制）以及**工作流编排的统一**。此外，TS SDK 和 OpenSandbox 后端集成也迎来了实质性进展。

### 2. 版本发布
- **今日无新版本发布。**

### 3. 重点 Issues
今日的 Issue 集中反映了系统在并发等待、进度反馈和大规模任务调度上的痛点：

- **[核心稳定性] 缺乏超时机制导致无限阻塞**
  - [#1236](https://github.com/alibaba/ROCK/issues/1236) / [#1231](https://github.com/alibaba/ROCK/issues/1231)：指出 Scheduler worker 任务和远程沙箱（Sandbox）的 HTTP 请求（如 `requests.post`）未设置 timeout。当节点无响应时，会导致调用方被无限期阻塞，进而拖垮调度器。
- **[状态与反馈] 沙箱启动期状态丢失**
  - [#1238](https://github.com/alibaba/ROCK/issues/1238)：`SandboxManager.get_status()` 在沙箱从 `pending` 过渡到 `running` 期间会返回空状态，导致客户端丢失镜像拉取、容器启动等关键进度信息。
- **[生态扩展] 统一数据集规模的 Job 编排**
  - [#1234](https://github.com/alibaba/ROCK/issues/1234)：指出当前 `rock job run` 仅支持单沙箱任务，要求在 CLI 和 SDK 层面增加针对多任务/全量数据集任务的统一编排能力。
- **[SDK Bug] Bash 与 TS SDK 解析异常**
  - [#1214](https://github.com/alibaba/ROCK/issues/1214)：BashJob SDK 无法解析 reward protocol 产物，导致强化学习训练中的 `trial.score` 恒为 0.0，直接影响 Reward 反馈。
  - [#1223](https://github.com/alibaba/ROCK/issues/1223) (已关闭)：TS SDK 错误地将 `kill -0 PID` 的异常判定为任务失败，干扰了 OSS 相关的后台进程。[#1240](https://github.com/alibaba/ROCK/issues/1240) 则请求为 TS SDK 增加沙箱归档生命周期和磁盘配置能力。

### 4. 关键 PR 进展
核心维护者今日合并/提交了多个关键修复与特性 PR，大幅提升了系统的鲁棒性：

- **[防御性编程] 引入超时与异常边界 (已合并)**
  - [PR #1237](https://github.com/alibaba/ROCK/pull/1237) & [PR #1232](https://github.com/alibaba/ROCK/pull/1232)：针对上述阻塞问题，为远程沙箱 HTTP 请求增加 `timeout=90`，并通过 `asyncio.wait_for` 包装 worker 调用，确保无响应节点快速失败。
  - [PR #1058](https://github.com/alibaba/ROCK/pull/1058)：修复 FastAPI Pydantic 强转导致 `RockResponse` 错误信封损坏的问题，确保错误代码正确抛出。
- **[CLI 强化] 统一数据集任务执行 (开发中)**
  - [PR #1235](https://github.com/alibaba/ROCK/pull/1235)：实现了 Issue #1234 的需求，通过 `--task`、`--tasks`、`--all` 参数将 `rock job run` 扩展为支持单任务、多任务及全量数据集并发执行的统一入口，内含进度控制与 JSONL 事件输出。
- **[运行时扩展] OpenSandbox 后端接入 (开发中/已合并)**
  - [PR #1203](https://github.com/alibaba/ROCK/pull/1203) (已合并)：Phase 1 落地，交付了 OpenSandbox 生命周期的后端接口。
  - [PR #1233](https://github.com/alibaba/ROCK/pull/1233) (开发中)：Phase 2 推进，将命令、文件、流式上传等代理层执行路径通过 OpenSandbox SDK 进行路由。
- **[SDK 优化] TS 与 Python SDK 修复**
  - [PR #1241](https://github.com/alibaba/ROCK/pull/1241) (已合并)：为 TS SDK 添加了沙箱归档生命周期管理及磁盘容量配置。
  - [PR #1224](https://github.com/alibaba/ROCK/pull/1224) (已合并)：修复了 TS SDK 处理 OSS 大文件下载时的路径与进程检测 Bug。
  - [PR #1239](https://github.com/alibaba/ROCK/pull/1239) (开发中)：修复沙箱 pending 阶段元数据缓存丢失问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击 RL 工程化痛点**：通过修复 Bash Trial 的 Reward 解析机制（#1214）和推出统一的数据集 Task 编排（#1235），ROCK 正在降低大规模 RLHF/Agent 训练中“环境交互”与“任务调度”的工程门槛。
2. **极其重视分布式容错**：今日密集修复的 HTTP 与调度器超时问题表明，项目在应对真实工业级 RL 场景（海量并发沙箱、长时间运行节点）时，具备极强的防御性编程和健壮性设计。
3. **多云与异构沙箱兼容性**：随着 OpenSandbox Backend（Phase 1 & 2）的接入，ROCK 摆脱了单一底层运行时的束缚，展现出成为**统一强化学习环境执行标准层**的潜力。对于需要频繁对接复杂代码执行环境的 RL 研究者而言，这是一个不可多得的基础设施。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**RL 开源生态日报：slime (THUDM/slime)**
**日期**：2026-07-14

### 1. 今日速览
过去 24 小时内，slime 仓库活跃度平稳，无新版本发布。共有 2 条 Issue 更新和 2 条 PR 更新。社区近期的焦点高度集中在**大模型的底层算子适配**（如 GLM-5.2 SparseMLA 反向传播异常）以及**推理引擎（SGLang）权重热更新的兼容性修复**上。

### 2. 版本发布
*   **无新版本发布**（当前主要使用版本为 slime-v0.3.0）。

### 3. 重点 Issues
今日更新的 Issues 暴露了 slime 在对接最新一代大模型及底层加速引擎时的硬核工程挑战：

*   **[#2201](https://github.com/THUDM/slime/issues/2201) [Bug] GLM-5.2 SparseMLA TileLang 反向传播产生 NaN 梯度**
    *   **摘要**：在接入 GLM-5.2 进行 RL 训练时，局部梯度范数检查持续报错。问题已被定位至 `slime_plugins/models/glm5/ops` 下的 GLM SparseMLA TileLang 反向传播算子。该问题直接阻断了 GLM-5.2 原生 MLA 架构的 RL 训练，属于高优底层 Bug。
*   **[#2091](https://github.com/THUDM/slime/issues/2091) [Bug] slime-v0.3.0 跑 Qwen3.6 35B A3B 模型第二次 Rollout 出现乱码**
    *   **摘要**：开发者反馈在训练 Qwen3.6 35B A3B 模型时，若使用 v0.3.0 配套的 `sglang:v0.5.12.post1` 镜像，在第二次 Rollout 阶段会产生输出乱码；而降级至 v0.2.4 配套的 `sglang:v0.5.9` 则表现正常。高度怀疑是由新版 SGLang 镜像或内核版本导致。

### 4. 关键 PR 进展
针对近期 Issue 中暴露的推理引擎协同与断点续训问题，社区贡献者提交了精准的修复代码：

*   **[#2192](https://github.com/THUDM/slime/pull/2192) fix(update_weight): 恢复 FlashInfer MoE 布局以修复 BF16 权重热更新**
    *   **摘要**：修复了针对 Qwen3.5 / Qwen3.6 35B-A3B 等模型在使用 `flashinfer_trtllm` MoE 后端时，BF16 权重热更新（weight hot-updates）导致的张量布局错误。 slime 之前未能在权重拷贝后正确调用 `post_process_weights` 恢复规范的 block-layout，此 PR 补齐了该逻辑。
*   **[#2200](https://github.com/THUDM/slime/pull/2200) Add critic load fallback for resuming training**
    *   **摘要**：完善了断点续训机制。当 Critic 模型指定的 checkpoint 加载路径不存在时，系统将自动回退（fallback）去加载 Actor 解析出的 `load` 路径。这使得 Critic 可以像 Actor 一样设置 `load == save` 从而实现无缝恢复训练。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为当前 RL 生态中活跃度极高的训练框架，slime 的 Issue 与 PR 趋势直接反映了大模型 RL 训练的最前沿痛点：
1.  **紧跟最新模型生态**：项目在极短的时间内就开始适配并排查 **GLM-5.2 (SparseMLA)** 和 **Qwen3.6 35B-A3B (MoE)** 等下一代架构在 RL 中的兼容性问题。
2.  **直面 "RL + 推理引擎" 的工程壁垒**：RLHF/RLAIF 训练中，Rollout（推理生成）阶段的效率决定了整体训练成本。slime 团队和贡献者正在深度介入 SGLang 的底层机制（如 MoE 权重热更新布局），这说明该项目不是简单的算法包装层，而是真正在解决 "高频参数更新下的分布式推理一致性" 这一核心痛点。
3.  **工程闭环能力极强**：从 Issue #2091 报出乱码，到 PR #2192 精准定位并修复 FlashInfer MoE layout 逻辑，展现了开发团队对底层算子和推理引擎极强的掌控力。对于需要大规模部署和训练 LLM 的团队来说，这是一个具备极高实战价值的开源项目。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-14 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **29 个 PR** 和 **1 个 Issue**，无新版本 Release 发布。从提交密度和内容来看，项目正处于高强度架构演进阶段，核心焦点集中在 **Agent Memory 控制平面与安全鉴权机制建设**，以及 **Rollout 采样的确定性与奖励控制**。

### 2. 版本发布
*   **最新 Releases**：无。

### 3. 重点 Issues
*   **#1523 [Feature] Keyed (replayable) rollout sampling, plumb SGLang's per-request `sampling_seed` through the rollout path**
    *   **链接**: [areal-project/AReaL Issue #1523](https://github.com/areal-project/AReaL/issues/1523)
    *   **摘要**: 提出了向后兼容的可重放 Rollout 采样机制。计划在 `GenerationHyperparameters` 中引入可选的 `sampling_seed` 字段，并打通 SGLang 逐请求级别的确定性推理链路。这对于 RL 训练中的 Debug、结果复现及异常溯源具有极高价值。

### 4. 关键 PR 进展
当前 PR 动静呈现明显的模块化聚集，主要分为三大攻坚方向：

**方向一：Rollout 采样与奖励控制优化（2 PRs）**
*   **#1524 feat(sglang): plumb per-request sampling_seed for replayable sampling**
    *   **链接**: [areal-project/AReaL PR #1524](https://github.com/areal-project/AReaL/pull/1524)
    *   **进展**: 配合 Issue #1523，正式在 v1 和 v2 版本的 SGLang 请求构建器中实现了 `sampling_seed` 的透传机制，支持确定性的推理回放。
*   **#1516 feat(rollout): add grouped reward normalization controls**
    *   **链接**: [areal-project/AReaL PR #1516](https://github.com/areal-project/AReaL/pull/1516)
    *   **进展**: 引入分组奖励处理机制。支持基于同一 Prompt 的 `n_samples` 进行奖励归一化（`reward_normalization`），并允许在 Rollout 失败时丢弃残缺分组（`drop_incomplete_group`），同时保留原始奖励用于日志转储。

**方向二：大规模 Agent Memory 机制与因果验证（9 PRs）**
开发者 `jszzr` 集中提交了一整套针对 Agent Memory 的安全存取、防伪溯源及测试机制：
*   **异步与存证**：[#1513 增加 Agent 异步 Memory 协调器](https://github.com/areal-project/AReaL/pull/1513) 避免阻塞事件循环；[#1509 增加运行时源读取证明](https://github.com/areal-project/AReaL/pull/1509) 确保 Memory 读取记录不可变且可审计。
*   **授权与控制**：[#1510 添加受信任的发布控制存储](https://github.com/areal-project/AReaL/pull/1510) 限制不可信请求；[#1511 运行时强制执行活动 Memory 分配](https://github.com/areal-project/AReaL/pull/1511)；[#1515 添加 fail-closed 结构化事实策略](https://github.com/areal-project/AReaL/pull/1515)。
*   **测试与评估**：[#1512 增加 Memory 因果冒烟测试](https://github.com/areal-project/AReaL/pull/1512)；[#1514 增加自适应反事实控制](https://github.com/areal-project/AReaL/pull/1514) 以验证 Memory 自演化规则的有效性。

**方向三：Agent 分布式通信的 Session 安全与鉴权（6 PRs）**
系统性强化了跨进程（Gateway, Router, DataProxy, Worker）边界的安全性：
*   **#1527 [codex] preserve Agent session identity across HTTP hops**
    *   **链接**: [areal-project/AReaL PR #1527](https://github.com/areal-project/AReaL/pull/1527)
    *   **进展**: 定义了标准化的路径安全会话密钥契约，在路由转发、状态变更和 Worker 执行前强制校验。
*   **安全凭据生成机制**：[#1520 强制执行 DataProxy/Worker 配对的 Bearer 凭据](https://github.com/areal-project/AReaL/pull/1520) 与 [#1528 鉴权会话关闭路由](https://github.com/areal-project/AReaL/pull/1528) 杜绝了内部授权越权与非法转发。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在解决大模型与强化学习结合时最棘手的两个底层工程痛点：
1.  **攻坚 RL 体验的“黑盒”痛点**：通过实现 SGLang 深度集成的可重放采样（#1523, #1524）以及精细化的分组奖励控制（#1516），AReaL 正在为复杂 RL 算法（如 PPO）提供极其 scarce（稀缺）的确定性调试环境，大幅降低算力浪费和溯源成本。
2.  **定义 Agent 演进的“安全边界”**：近期高达 20+ 个 PR 集中建设 Agent 的控制平面（Memory 追溯、身份鉴权、防伪造与反事实测试）。这表明 AReaL 不只是一个训练框架，而是正在为具备长期记忆和自我演化能力的 Agent 构建一个工业级、Fail-closed 的安全运行时底座。这在当前追求 Agentic RL 的生态中具有极高的技术壁垒和前瞻性。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 2026 年 7 月 14 日的 TRL（Hugging Face Reinforcement Learning）开源项目日报摘要。

### 1. 今日速览
- **数据概览**：过去 24 小时内，项目共有 11 条 Issue 更新，30 条 PR 更新，0 个新版本发布。整体处于无发版的高频代码迭代与缺陷修复阶段，核心开发者 `qgallouedec` 与 `albertvillanova` 活跃度极高。
- **核心动向**：GRPO 及其异步版本 的深度优化是当前绝对主线；大量历史遗留 Bug（如 vLLM server 兼容、DeepSpeed ZeRO-3 冲突）被集中清理；蒸馏与智能体交互生态正在快速融入主分支。

### 2. 版本发布
- **今日无新版本发布**。

### 3. 重点 Issues
**算法优化与解析**
*   **[OPEN] #6369: GRPO dapo/cispo/vespo loss denominator 忽略 `mask_truncated_completions`** ([Link](huggingface/trl Issue #6369))
    作者指出在计算 loss 时，分子正确应用了截断掩码，但分母并未对齐处理，可能导致梯度更新出现偏差。
*   **[OPEN] #6367: 建议将零方差/死亡分组从 loss 分母中剔除** ([Link](huggingface/trl Issue #6367))
    针对 Binary Reward 常见的现象：当同一 prompt 采样的 K 个 completion 获得相同 reward 时，组内优势为 0。作者建议将此类数据从分母中排除以提升训练有效性。

**历史遗留与多模态探索**
*   **[OPEN] #2097: 请求支持 Qwen2Audio 的 PPO/DPO Trainer** ([Link](huggingface/trl Issue #2097))
    探讨将强化学习扩展到音频-语言多模态架构的可行性。
*   **[CLOSED] #5314 & #3520**: 修复了 vLLM server 多卡模式下引发 `AttributeError` 的严重 Bug，以及 GRPOTrainer 因未添加 BOS token 导致输出乱码的关键缺陷。

### 4. 关键 PR 进展
**GRPO 与 Async GRPO 深度重构**
*   **PR #6379: 修复异步 GRPO clip-ratio 极值计算** ([Link](huggingface/trl PR #6379))
    将 clip_ratio 的 min/max 计算从依赖数据并行布局的整行均值，修正为真实的 per-completion 极值。
*   **PR #6378: 精简 AsyncGRPOTrainer** ([Link](huggingface/trl PR #6378))
    移除了冗余的 `valid_mask` 守卫，并将原先分散的权重同步与 Rollout 启动回调合并为统一的 `_TrainBeginCallback`。
*   **PR #6313: 修复奖励函数为 `functools.partial` 时的崩溃** ([Link](huggingface/trl PR #6313))
    解决了自定义奖励函数在使用偏函数或类实例时报 `AttributeError` 的问题，增强了 Async GRPO 的鲁棒性。

**分布式训练与核心算法兼容性**
*   **PR #6372: 修复 DeepSpeed ZeRO-3 下 DPO/KTO 的 Liger Kernel 冲突** ([Link](huggingface/trl PR #6372))
    此前 `use_liger_kernel=True` 结合 ZeRO-3 会导致 DPO/KTO 训练直接崩溃，本 PR 修复了底层对 `lm_head.weight` 的错误直读。

**Agent 与蒸馏生态扩展**
*   **PR #6358: 引入 `SandboxEnvironment` 子模块** ([Link](huggingface/trl PR #6358))
    TRL 正式加入 `trl.environments` 模块，内置开箱即用的沙盒环境，补齐了强化学习与 Agent 工具调用的最后一块拼图。
*   **PR #6126 & #6191: GOLD Trainer 蒸馏能力扩展** ([Link 1](huggingface/trl PR #6126) | [Link 2](huggingface/trl PR #6191))
    为实验性的蒸馏 Trainer 引入了 X-Token 跨分词器知识蒸馏（KL 散度）和 IW-OPD 目标函数。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 在 2026 年中展现了极其清晰的演进路线：**它正在从一个纯粹的 RLHF/DPO 算法库，演变为支持“长思维链+工具调用+多模态”的端到端强化学习基础设施。**
首先，团队对 GRPO 及 Async GRPO 的打磨到了近乎苛刻的程度（从 mask 机制到极值计算的修正），这为应对复杂 Reward 模型的稳定性提供了工业级保障；其次，`SandboxEnvironment` 的加入以及强化对 Prompt 原地修改的规避（PR #6364, #6366），说明 TRL 正在积极适配 Agent RL（Agentic RL）的多轮交互场景。结合其对底层加速（vLLM, Liger, DeepSpeed）的迅速响应，TRL 依然是当前大模型 RL 微调领域最成熟、迭代最快、工程落地价值最高的首选框架。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**OpenRLHF RL 日报摘要 (2026-07-14)**

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体活跃度趋于平稳。无新增 Issues、无新版本发布。项目维护重心集中在现有代码库的稳定性维持，合并/关闭了 1 个针对特定缺陷的修复 PR。

### 2. 版本发布
*   **无新增 Release**。项目当前处于稳定迭代期，暂未向公众推送新的发行版。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。社区反馈通道当前无高频新动向。

### 4. 关键 PR 进展
*   **#1264 [CLOSED] Fix a small issue in OpenRLHF (#1243)**
    *   **作者**: bglglzd
    *   **更新时间**: 2026-07-13
    *   **摘要**: 该 PR 旨在解决 Issue #1243 中报告的问题。作者采取了目标明确的微调修复策略，将代码改动范围严格限制在受影响的报告区域内。目前该 PR 已被关闭（合并或终止）。
    *   **链接**: [OpenRLHF/OpenRLHF PR #1264](https://github.com/OpenRLHF/OpenRLHF/pull/1264)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 是目前强化学习（尤其是 RLHF/RLAIF 赋能大语言模型）开源生态中不可或缺的底层基座。尽管在特定日期的活跃度（如今天的零 Issue 和零 Release）看似平淡，但这正是成熟基础架构项目趋于稳定的特征。
当前大模型训练正全面迈入“复杂推理与对齐”深水区，对高吞吐、分布式 Ray 集群调度、vLLM 集成以及复杂 PPO 策略优化的需求激增。OpenRLHF 凭借其高度模块化和生产级的工程实现，能够为算法工程师提供开箱即用且支持深度定制的大规模 RL 训练框架。持续关注该项目，有助于紧跟 SOTA 大模型对齐技术的最新落地实践与工程优化范式。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-07-14 RL 日报摘要：

# verl 项目 RL 日报 (2026-07-14)

## 1. 今日速览
过去 24 小时内，verl 项目维持了极高的社区活跃度。新增/更新 **59 条 Issues** 和 **20 条 Pull Requests**。今日无新版本发布。社区当前聚焦于 **Agentic RL 框架的构建**、**异步/分离式训练的底层通信优化** 以及对 **多硬件生态（NPU/Ascend）和多模态模型** 的支持。

## 2. 版本发布
无（v0.8.0 分支正处于紧锣密鼓的修缮与文档完善阶段）。

## 3. 重点 Issues
本日讨论度最高的问题集中在训练稳定性、复杂并行策略下的 Bug 以及架构演进：

*   **[架构演进] 提出 Agent 抽象与轨迹网关 RFC** ([#5790](https://github.com/volcengine/verl/issues/5790))
    *   **摘要**: 提议为基于 Agent 的 RL 管线引入 `AgentFramework` 基类与 Trajectory Gateway，旨在解耦 Agent 生命周期管理与奖励计算。这标志着 verl 正向复杂的 Tool-use/Agentic 场景深度演进。
*   **[训练稳定性] DAPO 训练频繁遭遇 Python 致命错误中断** ([#2833](https://github.com/volcengine/verl/issues/2833))
    *   **摘要**: 多名用户反馈在 DAPO 训练中途触发 `none_dealloc` 底层错误。此类底层内存/进程通信 Bug 是当前大并发 RL 训练的重点痛点。
*   **[多卡/硬件兼容] RTX 5090 双卡 FSDP 环境报 CUDA Peer Access 错误** ([#2803](https://github.com/volcengine/verl/issues/2803))
    *   **摘要**: 在基于 FSDP/FSDP2 的多卡环境下，状态字典加载时触发 `CUDA failure 217`，凸显了框架对最新消费级/专业级显卡拓扑结构的适配需求。
*   **[分布式 Bug] Megatron + MoE 在 CP>1 时梯度爆炸** ([#6609](https://github.com/volcengine/verl/issues/6609)) / **[Ulysses 序列并行 Loss 异常](https://github.com/volcengine/verl/issues/2857)**
    *   **摘要**: 复杂并行（上下文并行 CP、序列并行 SP）与 MoE、梯度累加结合时，存在底层归一化契约（Normalization contract）不一致或计算图错误的问题。
*   **[路线图] 26年第三季度 (Q3) 路线图全览** ([#6985](https://github.com/volcengine/verl/issues/6985))
    *   **摘要**: 明确了 Q3 的核心目标：放弃 mbrige 支持、引入低精度 MXFP8/NVFP4 训练、完善 mlite 集成以及支持更多新模型架构。

## 4. 关键 PR 进展
今日的 PR 展示了 verl 在算法优化和系统底层调度上的前沿探索：

*   **[算法优化] 引入 UP-GRPO 算法** ([PR #7022](https://github.com/volcengine/verl/pull/7022))
    *   **进展**: 增加无界正不对称策略损失模式。作为即插即用模块，打破了标准 GRPO/PPO 对称裁剪的限制，有望进一步提升策略探索效率。
*   **[系统优化] 基于 NCCL 的增量权重同步** ([PR #6974](https://github.com/volcengine/verl/pull/6974))
    *   **进展**: 在分离式 Rollout 路径中，每次训练步后仅广播发生变化的参数。由于 RL 更新通常导致 >99% 的 BF16 权重字节不变，此 PR 可将权重同步流量削减至稀疏更新率级别，极大提升异构/分离训练的吞吐。
*   **[Agentic 架构] 实验性 Agent 框架与网关运行时落地** ([PR #6299](https://github.com/volcengine/verl/pull/6299))
    *   **进展**: 配合 Issue #5790 的 RFC，正式提交了多轮 Agent 风格 Rollout 的基础运行时代码。
*   **[性能突破] 异步 PPO 框架的动态资源伸缩** ([PR #6556](https://github.com/volcengine/verl/pull/6556))
    *   **进展**: 引入混合推理资源动态伸缩。解决 Trainer 节点等待 Rollout 数据时 GPU 闲置、以及 Standalone Rollout 节点训练时空闲的痛点。
*   **[生态支持] 深度适配 NPU/Ascend 与 Qwen3-VL** (PRs [#6973](https://github.com/volcengine/verl/pull/6973), [#7009](https://github.com/volcengine/verl/pull/7009), [#7031](https://github.com/volcengine/verl/pull/7031))
    *   **进展**: 修复了 vLLM 多模态缓存机制带来的断点续训 Bug，并加入了基于 Qwen3.5-35B Megatron 架构的 NPU 每日回归测试。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **从 RLHF Framework 迈向 Agentic RL OS**: verl 正在突破传统的单轮偏好对齐范式。通过提出 Agent Gateway、支持复杂 Tool-use 循环（PR #7021 的 TransferQueue、PR #6990 的 Prefix Cache），它正在解决真实场景下长轨迹 Agent 训练的工程难题。
2.  **极致的分布式与通信榨取**: 针对 LLM 训练的显存与通信墙，verl 社区正在贡献极度硬核的优化方案。无论是减少 99% 冗余通信的 Delta 权重同步 (PR #6974)，还是 FSDP2/Megatron 下的 Offload 重新调度，都表明该项目在系统工程上处于业界最前沿。
3.  **海纳百川的硬件兼容性**: 相比仅局限于单一高端 GPU 集群的工具，verl 正在积极化解各类硬件环境的痛点（包括 RTX 5090 的 PCIe 拓扑限制、华为昇腾 NPU 的底层适配），这为更大范围的开源社区贡献提供了便利。
4.  **紧跟前沿算法迭代**: 第一时间跟进和实现了如 UP-GRPO 等最新的优化算法，为研究人员提供了快速试错的平台。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是 2026-07-14 的 torchtune 项目日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度较低，无代码合并（0 个 PR 更新）及版本发布。但社区出现了一项关于 **配置文件任意代码执行（RCE）** 的严重安全报告，需要项目维护团队及开发者的重点关注。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **#2971 [OPEN] Arbitrary code execution via the `_component_` field in an untrusted recipe config**
    *   **链接**: [meta-pytorch/torchtune Issue #2971](https://github.com/pytorch/torchtune/issues/2971)
    *   **摘要**: 报告者 geo-chen 指出，torchtune 在加载或验证不受信任的 recipe 配置文件（`.yaml` 格式）时存在任意代码执行漏洞。由于配置节点中 `_component_` 字段会直接映射并调用 Python 可执行对象，攻击者可通过恶意构造的 YAML 文件触发危险代码。
    *   **状态备注**: 该漏洞曾于 2026 年 6 月 10 日通过 GitHub 安全通道（GHSA-gw63-xxf2-xxcg）提交，但在未收到官方回应的情况下，报告者选择于昨日公开此 Issue。该问题直接关系到本地或集群环境的运行安全，亟待修复。

### 4. 关键 PR 进展
*   **过去 24 小时无 PR 更新**。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **LLM 训练底座的安全性考量**: 在强化学习（RL）尤其是 RLHF / DPO 等结合大模型的训练流程中，研究人员经常需要频繁调整和共享超参数配置（YAML）。此 Issue 揭示的 RCE 漏洞暴露了基于组件化配置设计的潜在安全边界问题。对于使用 torchtune 进行分布式 RL 训练的团队而言，追踪此安全漏洞的修复进度，是保障训练集群免受恶意配置文件攻击的关键。
*   **轻量级微调的核心工具**: torchtune 依然是 PyTorch 生态中纯原生、去中心化的大模型微调利器。它与 RLHF 阶段的 Actor/Critic 模型 SFT 阶段结合紧密，其原生架构对最新加速计算（如 GPU 分布式训练）的响应速度极快，仍是 RL 工程师值得纳入技术栈的重要项目。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报（2026-07-14）**

**1. 今日速览**
过去 24 小时，Open Instruct 仓库无新增 Issue 和 Release。PR 板块有 3 项关键更新，均由核心开发者 mnoukhov 与 shatu 推进。今日动态主要聚焦于底层强化学习损失函数的重构（统一散度修正范式）、存储空间管理优化（检查点清理），以及 Agent 环境（Appworld）的基准代码对齐。

**2. 版本发布**
* 无。本日无新版本发布。

**3. 重点 Issues**
* 无。过去 24 小时无 Issue 创建或更新。

**4. 关键 PR 进展**

* **[#1755] [OPEN] Add DPPO via the unified rho-divergence masking paradigm** | 作者: mnoukhov
  * **链接:** [allenai/open-instruct PR #1755](https://github.com/allenai/open-instruct/pull/1755)
  * **技术摘要:** 核心算法重构。作为 #1745 的替代方案，本 PR 引入了 DPPO（Diffusion Policy Optimization 或特定变体 PPO），但并未使用特化的掩码，而是通过现有的 $\rho$-correction（rho-divergence，$\rho$-散度）机制来实现。重构后，策略损失（policy loss）被模块化为三个正交维度（`--loss_fn` 目标函数等），显著提升了 RL 训练代码的可扩展性与复用性。

* **[#1754] [OPEN] Add keep_last_n_saves to bound intermediate HF-format model saves** | 作者: mnoukhov
  * **链接:** [allenai/open-instruct/pull/1754](https://github.com/allenai/open-instruct/pull/1754)
  * **技术摘要:** 工程与存储优化。为 `GRPOExperimentConfig` 新增 `keep_last_n_saves` 参数（默认 `-1` 即无限制）。修改了 `grpo_fast.py` 中的检查点逻辑，在保存最新 HuggingFace 格式模型的同时，利用现有的清理工具自动裁剪旧的 step saves，有效解决长周期 RL 训练中磁盘空间爆炸的痛点。

* **[#1753] [OPEN] Checking appworld specific changes compared to agents base** | 作者: shatu
  * **链接:** [allenai/open-instruct/pull/1753](https://github.com/allenai/open-instruct/pull/1753)
  * **技术摘要:** Agent 相关代码同步。旨在对比并核对 Appworld 环境下的特有修改与基础 Agent 框架之间的差异，用于梳理和校验代码逻辑。

**5. 为什么这个项目值得在当前 RL 生态继续关注**

* **底层算法抽象能力的进化:** PR #1755 展示了 Open Instruct 正在将其 RLHF/RLAIF 栈的底座进行高度抽象。通过将策略损失解耦为正交的参数（如目标函数、散度修正机制），项目正在降低新型 RL 算法（如 DAPO、DPPO 等）的集成门槛。
* **直击大模型训练工程痛点:** RL 训练（特别是基于 GRPO 变体的快速训练范式）往往伴随着密集的中间权重保存，PR #1754 直接补齐了 HuggingFace 格式检查点的生命周期管理能力，体现了该项目在“大规模可复现 RL 训练”上的工程成熟度。
* **从 RLHF 向 Agent RL 扩展:** PR #1753 显示出该项目正在关注并校准基于真实环境（如 Appworld）的 Agent 训练基线，这是当前 RL 生态从“奖励模型对齐”向“环境反馈强化学习”演进的关键方向。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026-07-14 强化学习（RL）开源生态日报摘要：

### 📊 CleanRL 生态日报：2026-07-14

**1. 今日速览**
CleanRL 仓库在过去 24 小时内整体活动趋于平稳。无新增活跃 Issue，无新版本发布。主要动态集中在文档与代码注释的维护上，合并/关闭了 1 个相关 PR。项目当前处于功能稳定迭代与代码库维护期。
🔗 仓库地址: [vwxyzjh/cleanrl](https://github.com/vwxyzjn/cleanrl)

**2. 版本发布**
- **今日发布：无**
项目近期未推送新的 Release 版本。

**3. 重点 Issues**
- **今日活跃 Issue：无 (0 条)**
过去 24 小时内无新增或更新的 Issue，社区反馈与 Bug 追踪队列保持静默。

**4. 关键 PR 进展**
- **[#565] [CLOSED] Polish docs and comments in cleanrl (#563)**
  - **作者**: bglglzd
  - **动态**: 基于此前反馈的特定行为，提交了一个范围较小的补丁，主要用于润色文档和代码注释。
  - **关联**: 绑定 Issue [#563](https://github.com/vwxyzjn/cleanrl/issues/563)。
  - **状态**: 该 PR 已于昨日（2026-07-13）被关闭。
  - 🔗 **链接**: [vwxyzjn/cleanrl PR #565](https://github.com/vwxyzjn/cleanrl/pull/565)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **单文件实现的极致透明度**：CleanRL 奉行 "No abstraction, no complexity"（无抽象、无复杂度）的设计哲学。在当前 RL 生态普遍被高度封装的大型框架（如 RLlib, Stable-Baselines3）占据的背景下，CleanRL 将每个核心算法（PPO, SAC, TD3 等）及其所有关键超参数、网络结构、训练循环全部集中在单个文件中。这种设计极大降低了 RL 研究者的“认知负担”，是进行算法复现、消融实验和行为定制的最佳基线。
- **顶级的实验记录集成**：CleanRL 原生深度集成了 TensorBoard、Weights & Biases 等工具，并支持精确的 Benchmark 追踪。它不仅提供代码，更提供可复现的环境配置（Poetry/Conda）与底层依赖（如 `gymnasium` 生态）的无缝对接。
- **教育与高阶研究的双向桥梁**：即使处于无每日高频代码提交的维护期，它作为“高可读性 RL 源码库”的价值依然不可替代。对于需要魔改核心机制（如自定义损失函数、非标准动作空间处理）的前沿 RL 研究者而言，从 CleanRL 的平铺式代码库入手，远比在深层继承树中跳转更为高效。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026-07-14 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库动态趋于平缓：无新增 Issues，无新版本发布，仅有 1 项核心代码 PR 更新。当前社区的焦点完全集中在提升底层算法（PPO）在复杂向量化环境下的数据鲁棒性上。

### 2. 版本发布
*   **无新版本发布**。近 24 小时内项目未发布新的 Release。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。项目当前处于稳定维护与零散 Bug 修复阶段。

### 4. 关键 PR 进展
*   **PR #362 [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者:** ViktorM
    *   **链接:** [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
    *   **技术摘要:** 这是一个旨在提升 PPO 算法正确性的关键底层优化。主要解决 `next_step-autoreset` 机制（常见于 EnvPool 和原生 Gymnasium 1.x 向量化环境）中的“脏数据”问题。在过去，环境重置时的过渡数据（包含无效的占位 Action、非真实的 Reward 以及上一 Episode 的终止 Obs）会被错误地作为真实训练数据混入 PPO 的 Rollouts 中。本 PR 通过引入 Mask 机制过滤这些 Garbage Rows。此外，该 PR 还包含了 SAC 相关的同类修复（commit: b1ed755），并引入了标量化 Sigma 参数化（scalar sigma parametrization）以优化策略探索。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 rl_games 的日常 Issue 活跃度不高，但它依然是强化学习社区中**最高效、最硬核的底层 RL 训练框架之一**，其价值体现在：
1.  **工业级与学术级的高性能标杆**：被广泛应用于 Isaac Gym 等大规模并行仿真环境，其极高的 Tensor 运算效率是许多现代 RL 项目选择它的核心原因。
2.  **持续攻克底层架构痛点**：正如今日更新的 [PR #362](https://github.com/Denys88/rl_games/pull/362) 所示，项目维护者正在持续追踪并修复现代向量化环境（如异步 Autoreset）带来的隐蔽算法 Bug。这种对“训练数据纯洁度”和“方差缩减”的严苛要求，对于追求极致性能的 RL 研究员极具吸引力。
3.  **代码精简，便于二次开发**：相比于 Ray RLlib 等重型框架，rl_games 拥有极高的代码可读性和可控性，方便 RL 工程师在底层直接实现自定义的算法变体。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

### Gymnasium RL 日报：2026-07-14

#### 1. 今日速览
过去 24 小时内，Gymnasium 仓库共处理 **1 条 Issue** 和 **24 条 PR**，无新版本发布。社区当前的重心高度集中在**底层代码的健壮性修复（尤其是向量化环境与底层数据类型）**以及**严格的类型提示标准化**。开发者 `teddytennant` 贡献了一批高质量的边界条件修复。

#### 2. 版本发布
无新版本发布。

#### 3. 重点 Issues
- **[#1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619) [CLOSED] [Proposal] Reward-hacking / reward-audit monitoring wrappers**
  作者提出了添加一组可选的 Wrappers，用于在训练期间审计奖励信号。该工具旨在追踪奖励分布漂移、熵崩溃以及奖励函数的哈希版本控制，以帮助研究人员及时发现 RL Agent 正在利用奖励漏洞。
  *分析师点评：这是一个非常契合当前 RL 可复现性与安全性的前沿提案。虽然该 Issue 已关闭，但“奖励审计”有望成为未来标准生态的重要组成部分。*

#### 4. 关键 PR 进展
今日的 PR 动态展示了社区对底层细节的极致追求，主要分为以下三个技术方向：

**A. 核心数据类型与向量化环境深度修复**
- **[#1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624) Fix vector RecordEpisodeStatistics reporting wrong stats with SAME_STEP autoreset**
  修复了在 `SAME_STEP` 自动重置模式下，`RecordEpisodeStatistics` 统计错误回报和长度的逻辑漏洞。
- **[#1622](https://github.com/Farama-Foundation/Gymnasium/pull/1622) Fix integer overflow in MultiDiscrete.contains**
  解决了当存在负数 `start` 且使用较小数据类型（如 `int8`）时，`MultiDiscrete.contains` 边界检查发生的整数溢出问题。
- **[#1626](https://github.com/Farama-Foundation/Gymnasium/pull/1626) Fix non-deterministic Text charset ordering**
  修复了由于 Python 哈希随机化（`PYTHONHASHSEED`）导致 `Text` 空间在跨进程时采样结果不一致的严重非确定性 Bug。
- **[#1632](https://github.com/Farama-Foundation/Gymnasium/pull/1632) Fix create_shared_memory for dtypes (float16)**
  修复了 `Box`/`Discrete` 等空间在处理无有效 `array` 模块类型码的 dtype（如 `float16`）时共享内存报错的问题。

**B. 严格类型提示与依赖瘦身**
- **[#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620) Add strict type hints for core.py, space.py, and box.py**
  为核心文件添加了返回类型标注并修复了泛型参数，目前已能在三个文件上以零错误通过 `mypy --strict`。
- **[#1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617) Remove torch from [all] extra**
  从 `[all]` 依赖中移除了 PyTorch，避免在纯 CPU 系统上强制拉取庞大的 `nvidia-cuda-*` 包（用户仍可通过 `gymnasium[all,torch]` 按需安装）。

**C. 渲染引擎与物理环境调优**
- **[#1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618) Fix default_camera_config not affecting rendered output**
  修复了 MuJoCo 渲染器中默认查找名为 `"track"` 的相机导致自定义 `default_camera_config` 失效的根因问题。
- **[#1633](https://github.com/Farama-Foundation/Gymnasium/pull/1633) Fix Pygame window resizing & KEYUP crash in play.py**
  修复了交互式键盘测试工具中，窗口缩放导致的浮点类型违规、累积纵横比漂移以及 `KEYUP` 事件引发的致命崩溃。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **底层 API 的极致打磨**：目前的 PR 活跃度表明 Gymnasium 正在积极填补向量化环境（Vector Env）和内存共享机制中的隐蔽漏洞。这些底层的确定性修复对于大规模分布式 RL 训练至关重要。
2. **拥抱现代 Python 实践**：通过引入 `mypy --strict` 级别的类型提示和解决哈希随机化问题，Gymnasium 正在向工业级和高可靠性标准演进，这将极大改善研究人员的 IDE 体验和代码可维护性。
3. **解耦重型依赖**：移除默认的 PyTorch 依赖标志着 Gymnasium 进一步巩固其作为“纯环境接口”的中立地位，这对于当前 JAX 生态崛起、多框架并存的 RL 研究环境来说，是一个非常重要的基础设施优化。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**PettingZoo 强化学习日报 (2026-07-14)**

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库共更新 **11 个 Pull Requests (PR)** 和 **3 个 Issues**。今日无新版本发布。活动核心高度聚焦于底层 Bug 修复（特别是环境物理引擎与逻辑引用问题）、视觉渲染增强以及 API 规范化清理。开发者 `teddytennant` 与 `RewardGuard` 贡献了多项关键代码提交。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
今日共有 2 个 Issue 关闭，1 个 Bug 得到确认：

* **[CLOSED] #1394 多智能体奖励黑客测试环境提案** ([Link](https://github.com/Farama-Foundation/PettingZoo/issues/1394))
  * **摘要**: 提议引入用于测试“奖励黑客行为”的多智能体环境（代理利用代理奖励而非真实奖励）。经过讨论，该提案因不符合当前项目维护环境的标准而关闭。
* **[CLOSED] #1318 强制开启 Pyright 严格模式提案** ([Link](https://github.com/Farama-Foundation/PettingZoo/issues/1318))
  * **摘要**: 提议将项目的静态类型检查工具 Pyright 设置为 `strict` 模式（目前报告 604 个错误），并计划通过多个 PR 逐步修复。该议题已关闭并转入具体的代码实现阶段。
* **[OPEN] #1332 井字棋底层逻辑错误确认** ([Link](https://github.com/Farama-Foundation/PettingZoo/issues/1332))
  * **摘要**: 确认了经典环境 Tic Tac Toe 中存在的逻辑 Bug。该问题直接催生了今日的 PR #1400，通过重构 `AgentSelector` 得以解决。

### 4. 关键 PR 进展
今日的 PR 更新涵盖了核心 API 修复、物理引擎重构和渲染优化：

**核心机制与 API 修复**
* **[OPEN] #1400 重构 `AgentSelector` 消除引用依赖** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1400))
  * **摘要**: 修复了 Issue #1332。发现 `AgentSelector.reinit()` 此前按引用存储外部列表而非拷贝，导致外部修改影响智能体执行顺序。现已赋予其所有权控制，并加入了回归测试。
* **[OPEN] #1391 修复 `Dict` 等观测空间的误报警告** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1391))
  * **摘要**: 修复了 API 测试脚本中，对非 `Box`/`Discrete` 类型（如 `Dict`, `Tuple`）观测空间错误抛出 "Observation is not a NumPy array" 警告的问题。
* **[OPEN] #1397 移除 Gin Rummy 环境** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1397))
  * **摘要**: 为减轻维护负担，彻底移除了 `gin_rummy` 环境及其相关注册、测试和文档代码。

**物理引擎与渲染重构**
* **[OPEN] #1398 重构 `cooperative_pong` 碰撞物理 (v7)** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1398))
  * **摘要**: 取代了旧的 PR #1336。修复了球体碰撞时的物理计算 Bug（旧逻辑强行吸附球的位置，丢失了单步内的溢出移动距离），重构了反弹物理逻辑。
* **[OPEN] #1380 为 Hanabi 增加 Pygame 图形渲染** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1380))
  * **摘要**: 为经典的合作纸牌游戏 Hanabi 添加了像素风图形界面，解析底层 OpenSpiel 状态字符串并使用 Pygame 绘制。
* **[OPEN] #1393 & #1399 Pursuit 环境视觉与逻辑升级** ([Link1](https://github.com/Farama-Foundation/PettingZoo/pull/1393) | [Link2](https://github.com/Farama-Foundation/PettingZoo/pull/1399))
  * **摘要**: 为 Pursuit 环境增加了中心障碍物尺寸的自定义配置功能；同时将智能体的视觉渲染从圆形回滚为网格风格的实心方形。

**生态与工具链**
* **[OPEN] #1306 新增 `RecordVideo` 包装器** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1306))
  * **摘要**: 将 Gymnasium 的 `RecordVideo` 包装器平滑移植到 PettingZoo，使多智能体环境不再依赖第三方库（如 SB3）即可原生录制训练视频。
* **[OPEN] #1395 & #1384 KAZ 基准策略与演示** ([Link1](https://github.com/Farama-Foundation/PettingZoo/pull/1395) | [Link2](https://github.com/Farama-Foundation/PettingZoo/pull/1384))
  * **摘要**: 为 Knights-Archers-Zombies (KAZ) 环境增加了确定性的预测向量策略，包含抛物线拦截预测和可复现的评估脚本，提升了基准测试的易用性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
* **多智能体训练的标准化基石**：PettingZoo 始终保持与 Gymnasium API 的严格对齐（如 #1391 修复与 #1306 视频录制包装器）。它正在巩固其作为 MARL（多智能体强化学习）领域“事实标准”的地位，确保各种 RL 算法库（如 SB3, TorchRL, CleanRL）能以极低的心智成本接入多智能体场景。
* **底层引擎的严格打磨**：从今日的 `AgentSelector` 隐式状态泄露 (#1400) 到物理引擎步进溢出重构 (#1398) 可以看出，项目维护者正在花精力清理深层逻辑 Bug。这对于依赖其进行严谨学术复现的 RL 研究者而言，是保障实验数据可靠性的关键护城河。
* **高质量环境的代谢与视觉化**：通过淘汰老旧且高依赖的环境（如移除 Gin Rummy #1397），并为抽象环境（如 Hanabi #1380）增加直观的 Pygame 渲染，PettingZoo 正在降低 MARL 算法的可视化调试门槛，维持其在教学与 Demo 展示上的统治力。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>