# RL 开源生态日报 2026-07-17

> 生成时间: 2026-07-16 22:18 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态已发生显著分化，全面从“单机算法验证”迈向“复杂智能体（Agentic）与超大规模工业化应用”。
以 LLM 为核心的 RL 框架（如 verl, TRL, slime, AReaL）占据了绝对的核心活跃度，正在全力攻克超大规模分布式训练、异构算力适配以及多轮工具调用的工程壁垒；而以传统控制、物理仿真为主导的底层 RL 组件（如 Gymnasium, CleanRL, rl_games），则正经历向高并发向量化和 GPU 加速（如 JAX/MJX）的底层 API 演进阵痛与适配。此外，针对大模型训练的基础设施（如阿里 ROCK）正在演变为独立的工业级算力底座。

## 各项目活跃度对比
*注：以下数据基于过去 24 小时各仓库的真实更新状态。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 42 | 37 | 0 | 聚焦超大规模与异构硬件，重点修复 FSDP2/MoE 同步与 Agentic 调度阻塞。 |
| **TRL** | 15 | 36 | 0 | 高频迭代 GRPO 防御性编程与异步架构，向复杂 Agent RL 基座设施进化。 |
| **ROCK** | 5 | 7 | 0 | 死磕 RL Infra 底层容错（Ray/网络连接池）与 OpenTelemetry 可观测性。 |
| **slime** | 4 | 6 | 0 | 攻坚多轮 Agent 调度 Cache 命中率，深度适配混合 Mamba/MoE 架构。 |
| **AReaL** | 2 | 4 | 0 | 扩张底层 Megatron 适配边界，前瞻探索 Diffusion 模型的 RL 后训练。 |
| **Gymnasium** | 3 | 3 | 0 | 拥抱 JAX/MJX 引擎，探索向量化环境并发上限与资源隔离。 |
| **Open Instruct** | 0 | 2 | 0 | 率先适配下一代 B300 硬件，完善沙盒基础设施错误的指标追踪。 |
| **ROLL** | 1 | 1 | 0 | 深入 vLLM 底层执行器排错，扩展昇腾 NPU 生态原生支持。 |
| **CleanRL** | 0 | 1 | 0 | 跟随 Gymnasium 底层 API 破坏性更新，维持单文件算法基准可用性。 |
| **rl_games** | 0 | 1 | 0 | 修复高并发向量化环境 autoreset 导致的脏数据污染核心 Bug。 |
| **OpenRLHF** | 0 | 0 | 0 | 无活动 |
| **PettingZoo** | 0 | 0 | 0 | 无活动 |
| **Stable Baselines3** | 0 | 0 | 0 | 无活动 |
| **Tianshou** | 0 | 0 | 0 | 无活动 |
| **torchtune** | 0 | 0 | 0 | 无活动 |

## 共同关注的研究与工程方向
**研究侧信号：**
1. **Agentic RL (多轮智能体强化学习) 成为绝对核心**：无论是 TRL 完善 AsyncGRPOTrainer、GOLDTrainer 的工具调用死循环修复，还是 slime 攻克长轨迹 Rollout 中的一致性哈希路由，均表明研究重点已从单轮 HF 彻底转向 Tool-use 和复杂环境交互。
2. **算法防御性与边缘案例打磨**：针对 GRPO/PPO 算法在真实训练中的稳定性，社区正在引入精细化策略（如 TRL 引入 `dapo_zv` 剔除零方差组，支持 UP Loss，以及过滤 0.0 默认奖励污染，避免模型 Reward Hacking）。
3. **非 Transformer 架构与多模态扩展**：slime 和 TRL 正在快速适配 Mamba/SSMs 与混合 MoE 架构，AReaL 甚至开启了 Diffusion 模型的 RL 后训练（REINFORCE）。

**工程/基础设施侧信号：**
1. **高并发/异构算力与硬件底座适配**：verl 死磕 FSDP2 CPU Offload 与华为昇腾 NPU 支持，Open Instruct 率先适配 NVIDIA B300 与 CUDA 13，反映大规模算力集群调度对框架的极致要求。
2. **大规模训练下的“静默杀手”消除**：多个项目（如 Open Instruct 修复 OOM 被误判为成功、rl_games 修复 Autoreset 垃圾数据、verl 诊断 GPU 0% 停滞）都在集中清理由于基础设施容错缺陷或并发机制带来的隐性数据污染和死锁。
3. **极致的可观测性建设**：无论是面向 LLM 的 verl、ROCK（引入 OpenTelemetry、GPU NVML 采样、连接池监控），还是传统 RL 的 Gymnasium（向量化基准测试），都在为超大规模分布式 RL 披上严密的监控外衣。

## 差异化定位分析
1. **重型 LLM 分布式训练基座（verl, slime, AReaL）**：三者均在啃最硬的底层骨头，但重心各异。**verl** 聚焦于硬件级极限（FP4/昇腾适配）与超大规模 MoE 权重同步；**slime** 专注于 Megatron 算子级别的修复与长轨迹推理路由优化；**AReaL** 则在双桥接架构（mbridge/megatron-bridge）上发力，并尝试向多模态底层泛化。
2. **HuggingFace 生态的高频敏捷中枢（TRL）**：与 verl 等重型框架不同，TRL 正在利用其在 HF 生态的枢纽地位，以极高的问题响应速度（毫秒级适配 Qwen3.5 模板、修复各类 GRPO 边缘 Bug），成为新算法和新架构最快落地的试验田。
3. **纯云原生 RL 基础设施平台（ROCK）**：明确将自己定位为“算力平台”而非“算法框架”，核心价值在于解决 Ray Client 僵死、Sandbox 磁盘配额、网络连接池扩容等纯云原生部署痛点。
4. **高吞吐物理仿真与学术基准（Gymnasium, CleanRL, rl_games）**：坚守传统的机器人与物理仿真领地。**rl_games** 和 **CleanRL** 是极致性能与研究复现的代表；**Gymnasium** 则作为最底层的 API 标准制定者，艰难但坚定地推动生态向 JAX/GPU 矢量化迈进。

## 社区热度与成熟度
- **极高活跃度与工业级成熟期（verl, TRL）**：日均总更新量（PR+Issue）达 40+，且讨论深度极高（如底层 PyTorch 版本升级卡点、专家并行分片同步）。社区已完全跨越了“跑通 Demo”的阶段，进入了真实千卡级生产环境的深度打磨期。
- **功能扩张与攻坚期（slime, AReaL, ROCK）**：活动量中等，但提交的 PR 均属长线重量级特性（如全新模型架构适配、Remote operator），说明项目正处于向下一个大版本（如 v1.10.0）跃升的蓄力阶段。
- **高度稳定与维护期（OpenRLHF, SB3, Tianshou, torchtune 等）**：过去 24 小时无活动，但这不代表项目衰亡，而是说明其核心 API 和基础功能已高度成熟稳定，进入了低频维护状态，依然是生态中不可或缺的基石。
- **底层依赖的高粘性反馈循环（Gymnasium vs CleanRL/rl_games）**：Gymnasium 作为底层环境标准，其 1.0 版本带来的 SAME_STEP 机制破坏性更新，直接引发了上层 CleanRL、rl_games 的跟随修复，体现了传统 RL 生态链紧密的上下层耦合关系。

## 值得关注的趋势信号
1. **沙盒/环境崩溃导致的 Reward Hacking 成为新痛点**：随着 Agent 大量使用代码执行/API 工具，基础设施级的故障（OOM、Sandbox崩溃、进程未杀除）正悄无声息地污染 RL 经验池。框架对“无效 Rollout”和“系统级错误”的精细化剥离（如 TRL 返回 None、Open Instruct 剥离 OOM 指标）将是下一阶段的工程标配。
2. **KV-Cache 局部性决定多轮 Agent 吞吐量**：slime 提出的“rollout 粒度请求路由”痛点指出，如果多轮轨迹不能命中同一个推理引擎的 Prefix Cache，训练效率将断崖式下跌。推理调度与训练更新的解耦设计将面临大考。
3. **软硬协同定义框架天花板**：放弃 mbridge（verl）、引入 NVFP4 量化、原生拥抱昇腾 NPU（verl, ROLL）、适配 B300 芯片。未来的 RL 框架竞争，不仅是算法的竞争，更是谁能最快吃透新一代异构硬件红利的竞争。
4. **异步架构重塑数据流范式**：无论是 TRL 的流式数据集支持，还是 rl_games/CleanRL 对 `autoreset` 数据流的掩码修复，都预示着在线/异步 RL 正在倒逼底层内存管理和时序逻辑的全面重构。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 生态开源日报：ROLL (2026-07-17)**

以下是关于阿里巴巴开源强化学习框架 ROLL (github.com/alibaba/ROLL) 过去 24 小时的项目动态摘要。

### 1. 今日速览
过去 24 小时内，ROLL 仓库共有 2 项核心动态更新，无新版本发布。项目重点聚焦于**大模型底座兼容性修复**与**国产硬件（华为昇腾）生态支持**。具体表现为一个关于多卡环境下 Qwen3-8B 训练挂起的经典 Bug 讨论被关闭，以及一个引入昇腾 MindSpeed 支持的重要特性 PR 更新。

### 2. 版本发布
- **无**（近期无新版本发布）。

### 3. 重点 Issues
- **#329 [CLOSED] Training hangs at actor-infer step with Qwen3-8B on an 8-GPU node**
  - **作者**: UsernameFull | **评论**: 6
  - **摘要**: 该 Issue 追踪了在 8 GPU 节点上使用 ROLL 框架训练 Qwen3-8B 时，在 `actor-infer` 阶段发生的训练挂起问题。通过 `pystack` 进程探测，发现死锁/挂起的核心栈指向了底层的 `vllm` 执行器组件。该问题经过多轮社区讨论现已关闭。
  - **链接**: [alibaba/ROLL Issue #329](https://github.com/alibaba/ROLL/issues/329)

### 4. 关键 PR 进展
- **#456 [OPEN] [feat] Support ascend mindspeed&megatron and add CI tests**
  - **作者**: shun001 | **👍**: 0
  - **摘要**: 这是一个重大的底层架构扩展 PR。旨在为 ROLL 添加基于 MindSpeed 的 NPU (华为昇腾) 初始化补丁、平台检测修复、Megatron 优化器/Offload 兼容性更新以及 NPU 特定的注意力掩码处理。此外，该 PR 还引入了 Ascend MindSpeed 的 CI 测试工作流，并附带了 Qwen3 DPO 基于 Megatron 的示例配置。
  - **链接**: [alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **深度适配 LLM 训练栈**：从 Issue #329 可以看出，ROLL 的训练错误已经深入到 vLLM 底层执行器层面。这表明项目在处理大规模 LLM（如 Qwen3-8B）的生成与训练生命周期协同上，有真实的落地场景和持续的问题修复迭代。
2. **多芯片/异构算力生态前瞻性**：PR #456 展示了 ROLL 正在积极整合昇腾 NPU (MindSpeed + Megatron)。在当前的 RLHF 算力环境下，能够原生兼容主流 Nvidia 生态与国产 Ascend 生态的强化学习框架，具备极高的实用价值和生态卡位意义。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报**
**日期**: 2026-07-17

### 1. 今日速览
过去 24 小时内，ROCK 仓库活跃度较高，共产生 **5 条 Issue 更新** 和 **7 条 PR 更新**，无新版本发布。今日开发重心集中在 **v1.10.0 文档系统准备**、**系统可观测性增强** 以及 **底层基础设施（Ray Client 与网络代理）的容错与恢复机制**。

### 2. 版本发布
- **最新 Releases**：无新增 Release。
- **版本前瞻**：随着 [PR #1222](https://github.com/alibaba/ROCK/pull/1222)（旧文档提交）的关闭和 [PR #1259](https://github.com/alibaba/ROCK/pull/1259) 新文档的提交，[Issue #1250](https://github.com/alibaba/ROCK/issues/1250) 显示项目正在为 **v1.10.0** 版本的正式发布做中英双语文档的最终裁剪与对齐工作。

### 3. 重点 Issues
今日的 Issue 主要聚焦于底层组件的健壮性与监控盲区：

- **[Bug] Sandbox 磁盘配额响应缺失**: [Issue #1257](https://github.com/alibaba/ROCK/issues/1257)
  报告了启动带磁盘配额的 Sandbox 时虽然元数据存储成功，但 `SandboxStartResponse.disk` 字段（包括向下兼容字段）未正确回填的缺陷。
- **[Feature] Ray Client 连接健康监测与恢复**: [Issue #1255](https://github.com/alibaba/ROCK/issues/1255)
  指出 ROCK Admin 维持的长连接 Ray Client 在 Ray Head/GCS 重启后容易僵死。提出需要实现自动检测并恢复不健康连接的机制。
- **[Feature] Proxy HTTP 连接池监控**: [Issue #1251](https://github.com/alibaba/ROCK/issues/1251)
  指出数据面 `SandboxProxyService` 的 httpx 连接池缺乏可观测性，当连接数打满时请求会静默排队，形成性能瓶颈。
- **[Feature] 调度器自动化任务可观测性**: [Issue #1253](https://github.com/alibaba/ROCK/issues/1253) (已关闭)
  提议为 Admin Scheduler 下发至 Ray Worker 的维护任务增加 OpenTelemetry 指标，以便在 Grafana 中监控存活 Worker 和任务失败状态。

### 4. 关键 PR 进展
开发者针对上述基础设施痛点提交了多枚高质量的修复与优化 PR：

- **Sandbox 磁盘配额修复**: [PR #1258](https://github.com/alibaba/ROCK/pull/1258)
  精准修复了 Issue #1257 中的磁盘配额响应未赋值的问题。
- **Ray Client 容错与自动重连机制**: [PR #1256](https://github.com/alibaba/ROCK/pull/1256)
  实现了 Ray Client 的健康探针。支持每 60 秒探测一次本地 Ray 初始化与集群 RPC 健康度，并在连接无响应时复用序列化的重试路径进行恢复。
- **代理连接池扩容与监控指标**: [PR #1252](https://github.com/alibaba/ROCK/pull/1252)
  响应 Issue #1251，新增每 10 秒收集一次 httpx 池（活跃、空闲、等待连接数）的指标。同时将 `max_connections` 从 100 激增至 2000，大幅降低连接排队风险。
- **调度器 OpenTelemetry 集成**: [PR #1254](https://github.com/alibaba/ROCK/pull/1254) (已合并/关闭)
  成功为自动化调度任务增加了生命周期、Worker 缓存健康度和失败时间戳的遥测数据导出功能。
- **长线 PR 更新**: [PR #1076](https://github.com/alibaba/ROCK/pull/1076)
  提交于 6 月的 Remote operator 特性今日有了新动态，持续完善算子层面的扩展性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
当前的强化学习（RL）工程落地正从“单机算法验证”全面转向“大规模分布式训练与环境交互”。ROCK 今日的代码动向精准踩中了 **RL Infra（基础设施）** 的核心痛点：
1. **底座稳定性决定 RL 上限**：RL 任务具有运行时间长、拓扑结构复杂的特点。ROCK 正在死磕底层容错（如 [PR #1256](https://github.com/alibaba/ROCK/pull/1256) 解决 Ray Client 僵死），这对于避免训练中途因集群节点重启导致的任务崩溃至关重要。
2. **消除分布式黑盒**：在成百上千个 Sandbox 并发运行时，网络连接池打满（[Issue #1251](https://github.com/alibaba/ROCK/issues/1251)）和 Worker 静默死亡是极具破坏性的隐形 Bug。ROCK 正在全方位接入 OpenTelemetry（[PR #1252](https://github.com/alibaba/ROCK/pull/1252), [PR #1254](https://github.com/alibaba/ROCK/pull/1254)），表明其正快速演进为一个达到工业级生产标准的 RL 算力平台，而非仅仅是一个框架。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime（THUDM/slime）项目 2026-07-17 RL 日报摘要：

### 1. 今日速览
- **Issues 动态**：过去 24 小时内共有 4 条 Issue 更新，其中 2 条为今日新增。
- **PR 进展**：过去 24 小时内共有 6 条 PR 更新，涵盖路由机制优化、异构模型支持及权重更新修复。
- **版本发布**：过去 24 小时无新版本发布。

### 2. 版本发布
无。

### 3. 重点 Issues
今日的 Issue 集中在**超多轮 Agent 调度效率**、**训练流程阻塞 Bug** 以及**社区对前沿算法的期待**：

- **[[#1469] 请求支持 rollout 粒度的 sglang 请求路由提高多轮 rollout 的吞吐量**](https://github.com/THUDM/slime/issues/1469)
  作者反映，当前 router 的逐请求（per-request）负载均衡策略破坏了长轨迹多轮交互时的 prefix-cache 局部性，导致重复 prefill。这暴露了 RL 训练中多轮 Agent 调度与推理引擎 Cache 命中率之间的核心矛盾。
- **[[#2176] [Bug] 过采样关停的时候 judge 不会被杀掉**](https://github.com/THUDM/slime/issues/2176)
  报告了一个影响训练效率的逻辑缺陷：在不考虑 partial rollout 时，采样结束本应丢弃过采样内容，但目前若 judge 进程未结束会强制等待至超时，阻塞后续训练。
- **[[#2212] [Question] Do we support the SAO method used in the training of GLM-5.2**](https://github.com/THUDM/slime/issues/2212)
  社区开发者高度关注 GLM-5.2 训练中所用的 SAO 与 CompactionRL 方法，询问是否有开源计划。这反映了 slime 背后先进算法的社区吸引力。
- **[[#2214] Your project is on StackMap**](https://github.com/THUDM/slime/issues/2214)
  外部 AI 开源知识图谱项目的收录通知。

### 4. 关键 PR 进展
今日的 PR 展现了 slime 在**异构架构兼容**、**高性能网络/路由优化**以及**MoE 权重热更新**方面的深度工程工作：

- **[[#2206] [Rollout] Add opt-in group-scoped session affinity**](https://github.com/THUDM/slime/pull/2206)
  针对 Issue #1469 的痛点，引入了可选的组级作用域（group scope）来自动分配 rollout session IDs。通过复用 `X-SMG-Routing-Key` 路径实现一致性哈希路由，确保多轮 Rollout 请求打到同一推理引擎实例，大幅提升 prefix-cache 命中率。
- **[[#2211] Support NemotronH hybrid Mamba+Attention+MoE training**](https://github.com/THUDM/slime/pull/2211)
  突破性地将 slime 的底层模型从纯 Transformer 扩展至支持 Mamba2 + Attention + MoE 架构（如 NVIDIA Nemotron Nano-30B-A3B），修复了参数名无法与 Megatron-core 检查点对齐的问题。
- **[[#2192] fix(update_weight): restore FlashInfer MoE layout after BF16 hot updates**](https://github.com/THUDM/slime/pull/2192)
  修复了使用 `flashinfer_trtllm` MoE 后端进行 BF16 权重热更新时的张量排布错误。
- **[[#2193] fix(update_weight): preserve grouped MoE expert axis during GLU rechunk**](https://github.com/THUDM/slime/pull/2193)
  修复了在 TP all-gather 后进行 GLU rechunking 时，破坏 `linear_fc1` 张量 grouped MoE 专家轴维度的逻辑缺陷。
- **[[#2213] Fix tau-bench token deltas for reasoning-aware chat templates**](https://github.com/THUDM/slime/pull/2213)
  修复了在处理带有 reasoning 感知模板的 tau-bench 时，历史 assistant 消息重写导致 token deltas 异常的问题，增强了推理路径的安全性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **触及多轮 Agent RL 的核心痛点**：正如今日 PR #2206 与 Issue #1469 所示，slime 正在直接解决“长轨迹 Rollout 中 KV-Cache 局部性被破坏”的工程难题，这是提升 Agent RL 训练吞吐量的关键瓶颈。
2. **紧跟前沿模型架构**：项目没有停留在纯 Transformer 架构，迅速适配了如 NemotronH 这类 Mamba+Attention+MoE 的混合架构（PR #2211），展现了极强的架构包容性。
3. **深入底层算子与显存优化**：从 MoE 的 FlashInfer layout 修复（PR #2192）到 grouped 专家轴的保护（PR #2193），说明 slime 在 RL 训练的高频权重同步（`update_weight`）和底层算子上做了极深度的打磨，具备支撑大规模参数模型训练的工业级能力。
4. **承载前沿算法沉淀**：社区对 GLM-5.2 训练算法（SAO、CompactionRL）的呼声（Issue #2212），预示着 slime 不仅仅是一个 RLHF/PPO 跑批工具，更是大模型前沿对齐算法的开源试验田。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是 2026-07-17 AReaL 开源项目的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，AReaL 仓库活动集中于存量代码的维护与新架构支持的推进。无新版本 Release。Issue 板块更新 2 条（1 个技术答疑，1 个历史 Bug 关闭），PR 板块更新 4 条，核心方向涉及静态类型检查优化、Megatron 架构适配器扩展（GLM-5、DeepSeek-V3 等）以及扩散模型强化学习后训练的早期概念验证。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **[OPEN] #1543: online RL-Hermes PPO critic model training**
  - **链接**：[areal-project/AReaL Issue #1543](https://github.com/areal-project/AReaL/issues/1543)
  - **摘要**：开发者 `HaydenPetrelli` 针对 online RL-Hermes 框架提出技术疑问。在单个 sample 仅记录单条 trajectory 的情况下，探讨 PPO 算法中 Critic 模型的具体初始化与训练机制。
- **[CLOSED] #1366: Qwen models crash with DTensor dispatch error under TP > 1**
  - **链接**：[areal-project/AReaL Issue #1366](https://github.com/areal-project/AReaL/issues/1366)
  - **摘要**：由 `HT-Yuan` 提交的 Bug 报告。反馈在张量并行（TP > 1）场景下，Qwen 模型发生 `DTensor dispatch error` 导致系统崩溃。该 Issue 已被关闭。

### 4. 关键 PR 进展
- **[OPEN] #1410: feat(experimental): Diffusion RL post-training — Phase 1 PoC (SD1.5 + LoRA + REINFORCE)**
  - **链接**：[areal-project/AReaL PR #1410](https://github.com/areal-project/AReaL/pull/1410)
  - **摘要**：实验性特性。提交了基于单 GPU 的扩散模型 RL 后训练概念验证，集成了 SD1.5、LoRA 与 REINFORCE 算法。标志着 AReaL 正尝试将能力边界从纯 LLM 拓宽至多模态/视觉生成模型。
- **[OPEN] #1373: feat(mcore): add GLM-5/DeepSeek-V3 model support (mbridge + megatron-bridge)**
  - **链接**：[areal-project/AReaL PR #1373](https://github.com/areal-project/AReaL/pull/1373)
  - **摘要**：新增 GLM-5.1、DeepSeek-V3 与 GLM-4.7-Flash 三种全新模型架构支持。双桥接路径并行（默认 `mbridge` 及可选 `megatron-bridge`），显著提升了底层分布式训练的模型兼容性。
- **[OPEN] #1372: feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter**
  - **链接**：[areal-project/AReaL PR #1372](https://github.com/areal-project/AReaL/pull/1372)
  - **摘要**：为 Bailing-MoE V2.5 家族模型增加 NVIDIA `megatron-bridge` 适配器。使其从原先的 `mbridge` 单一支持升级为双桥接模式，增强 MoE 模型在分布式训练中的稳定性。
- **[OPEN] #1542: refactor: add TYPE_CHECKING guard for LSP visibility of trainers**
  - **链接**：[areal-project/AReaL PR #1542](https://github.com/areal-project/AReaL/pull/1542)
  - **摘要**：代码重构。通过增加 `TYPE_CHECKING` 守卫，解决了原有 `__getattr__` 懒加载机制导致 IDE 和静态分析工具无法正确解析 PPO/DPO 等 Trainer 上下文的问题，提升了开发者体验。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日的代码提交轨迹可以看出，AReaL 正在进行两项关键的生态卡位：
1. **前瞻的底层算力与前沿模型适配**：PR #1372 和 #1373 显示其正快速跟进最新的主流大模型架构（如 DeepSeek-V3、GLM-5 系列、Bailing-MoE V2.5），且完善 `megatron-bridge` 支持，说明项目在面向大规模分布式 RL 训练（如千卡级 TP/PP 并行）上具备极强的工程落地野心。
2. **突破 LLM 范式的泛化能力**：PR #1410 尝试引入 Diffusion 模型的 RL 后训练（REINFORCE）。这表明 AReaL 正在跳出传统的 NLP PPO 框架，试图提供一个泛化的 RL Post-training 基础设施。
这使得 AReaL 不仅仅是一个 LLM 对齐工具箱，而有望演化为支撑多模态、多架构大模型 RL 训练的全栈式平台。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这份 TRL（Transformer Reinforcement Learning）2026 年 7 月 17 日的开源生态日报摘要，基于过去 24 小时的 GitHub 动态生成。

### 1. 今日速览
- **Issue 动态**：共 15 条更新，以历史遗留 Bug 修复确认、新功能请求（如 UP Loss）为主。
- **PR 动态**：共 36 条更新，社区与维护者（@qgallouedec, @albertvillanova 等）高活跃度。核心集中在 **GRPO 训练机制的鲁棒性增强**、**新架构适配（LFM2/Mamba）** 以及 **异步（Async）RL 架构的迭代**。
- **版本发布**：过去 24 小时无新版本 Release。

---

### 2. 版本发布
无。项目目前可能正处于主分支大规模整合阶段（尤其是针对异步 RL 和 GRPO 周边代码的重构）。

---

### 3. 重点 Issues
*开发者关注点正在从基础的显存溢出（OOM）向复杂的 Agent 强化学习、多轮工具调用及高级损失函数转移。*

- **[OPEN] 提出 UP (Unbounded Positive) 损失函数** ([#6407](https://github.com/huggingface/trl/issues/6407))
  社区请求为 GRPO 增加 `loss_type="up"` 选项（基于字节跳动 Seed 团队论文），针对正负优势样本进行 Token 级别的分流路由，有望进一步提升 GRPO 的训练稳定性。
- **[OPEN] SFT 训练 MoE 模型时的专家负载统计缺失** ([#4611](https://github.com/huggingface/trl/issues/4611))
  请求在 `SFTTrainer` 中支持记录 MoE 模型每个专家的 Token 吞吐量。这对于当前稀疏化大模型微调的负载均衡分析至关重要。
- **[CLOSED] 修复 Qwen3.5 训练聊天模板导致的推理块损坏** ([#6361](https://github.com/huggingface/trl/issues/6361))
  指出 TRL 的前缀保留模板机制导致 Qwen3.5 缺失 `<think>` 开头标签的 Bug，目前已被对应的 PR 修复。
- **[CLOSED] AsyncGRPOTrainer 环境奖励未正确传递** ([#6027](https://github.com/huggingface/trl/issues/6027))
  暴露出当前 TRL 实验性异步 GRPO 训练器在处理复杂多轮 Agent 环境时的状态同步 Bug。

---

### 4. 关键 PR 进展
*今日的 PR 展现了 TRL 在防御性编程（避免默认值污染）、扩展模型支持面以及完善多轮 Agent 工具链路方面的硬核进展。*

- **GRPO 算法防御与优化**
  - **[CLOSED] 避免零方差组造成的准确率破坏** ([#6368](https://github.com/huggingface/trl/pull/6368))
    引入新的 `loss_type="dapo_zv"`。在 GRPO 训练中，如果某个 Prompt 的所有生成结果得分相同（零方差），系统会将其从损失函数的分母中剔除，防止毒害训练梯度。
  - **[CLOSED] 防止默认 0.0 奖励污染优势函数** ([#6427](https://github.com/huggingface/trl/pull/6427) & [#6426](https://github.com/huggingface/trl/pull/6426))
    修复了当 Agent 多轮探索但未触发打分工具时，环境返回默认 `0.0` 导致的模型 "偏爱" 无效短回复的问题。GRPO 和 SDPO 现在将返回 `None` 以剔除无效 Rollout。

- **多轮工具调用 完善**
  - **[OPEN] 为 GOLDTrainer 引入多轮工具调用支持** ([#6328](https://github.com/huggingface/trl/pull/6328))
    使得 GOLD 蒸馏算法能够处理带有共享 Tokenizer 的多轮 Agent 轨迹数据，紧跟前沿 Agent 模型的蒸馏需求。
  - **[CLOSED] 修复工具调用死循环** ([#6423](https://github.com/huggingface/trl/pull/6423))
    修复了将 `max_tool_calling_iterations=0` 被误认为无限大的逻辑 Bug。

- **底层机制与架构扩展**
  - **[OPEN] 增加 LFM2 (LiquidAI) 与 Mamba 架构支持** ([#6428](https://github.com/huggingface/trl/pull/6428))
    补全了对于非 Transformer 架构（如 SSMs/Mamba）的测试覆盖，遥测显示 LFM2 每周有近千次运行，生态需求明显。
  - **[OPEN] 支持 GRPO 与 RLOO 流式数据集** ([#6351](https://github.com/huggingface/trl/pull/6351))
    彻底解决了强化学习训练器无法直接读取 Iterable datasets 的痛点，极大降低了在线 RL 数据处理的内存门槛。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的代码提交密度与修复深度可以看出，**TRL 已经彻底从一个纯对齐工具库，进化为支持复杂 Agent 强化学习的基座设施**。

1. **直面在线 RL 的工程痛点**：最近的一系列 PR（剔除零方差组、处理 `None` 奖励）表明，开发者们在真实跑 Agent 任务（如代码执行、API 调用）时遇到的 Reward Hacking 和边缘案例，正被迅速且硬核地修补。
2. **抢占异步与在线架构高地**：通过重构 `AsyncGRPOTrainer`、引入 `VLLMClient` 和 `Harness Rollout` 机制，TRL 正在解决大规模部署 RL 时生成与训练的 GPU 资源调度难题。这是目前走向 Agentic RL 的必经之路。
3. **对新架构的极速响应**：无论是 Qwen3.5 的 `<think>` 标签适配，还是对 MoE 专家负载的监控需求，TRL 社区的响应速度都在毫秒级，保持了其在 HuggingFace 生态中的核心枢纽地位。

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

这里是 2026 年 7 月 17 日的 verl 开源生态 RL 日报摘要。

### 1. 今日速览
- **数据概览**：过去 24 小时内，verl 仓库共有 42 条 Issues 和 37 条 PR 发生了状态更新或讨论。
- **版本发布**：无新版本发布（0 个）。
- **社区动态**：当前开发重心聚焦于**底层训练稳定性与异构硬件支持**。PR 活动显示，开发团队正在密集修复 FSDP2 CPU Offload 问题、推进 MoE 权重同步的优化，以及完善华为昇腾环境与多模态模型的后端兼容性。

### 2. 版本发布
**无新版本发布。**
（注：根据 PR #7072 中的标题描述，verl 目前正处于 **v0.8.0** 版本的迭代与错误修复周期中）。

### 3. 重点 Issues
今日讨论度最高的问题集中在训练效率异常、权重合并以及版本升级阻碍上：

- **[OPEN] 异步 Agent 训练 GPU 利用率长时间为 0% ([#3114](https://github.com/volcengine/verl/issues/3114))**
  - **摘要**：在使用 `SingleTurnAgentLoop` 配合 SGLang 进行训练时（8 张 A100），观察到 GPU 利用率长时间保持在 0%。该问题严重影响了 Agentic RL 的训练吞吐量，引发社区关于异步 Rollout 调度阻塞的讨论。
- **[OPEN] Search-R1 在 vLLM 中应用 LoRA 时输出乱码 ([#3149](https://github.com/volcengine/verl/issues/3149))**
  - **摘要**：在结合 vLLM 训练 Search-R1 Agent 时，若不使用 LoRA 一切正常，但开启 LoRA 后，Rollout 阶段会产生多语言和符号混合的乱码。这是一个典型的 Adapter 权重在推理引擎中加载或热更新不匹配的 Bug。
- **[OPEN] 有关 verl 26Q3 的开发路线图 ([#6985](https://github.com/volcengine/verl/issues/6985))**
  - **摘要**：官方发布了 2026 年第三季度的 Roadmap。核心方向包括放弃 mbrige 支持、引入低精度 MXFP8/NVFP4 支持，以及完善 mlite 的生产级集成。
- **[CLOSED] 阻碍 PyTorch 从 2.6.0 升级至 2.8.0 的原因探讨 ([#3118](https://github.com/volcengine/verl/issues/3118))**
  - **摘要**：核心贡献者探讨了 verl 在依赖管理上的痛点。因为此前为了适配 PyTorch 2.6.0 专门给 fsdp2 打了补丁，社区呼吁与 PyTorch/vLLM/Triton 等上游依赖协同解决版本升级的卡点问题。

### 4. 关键 PR 进展
今日的 PR 进展展现了 verl 在内存管理、并行策略和开发体验上的持续打磨：

- **[OPEN] 修复 FSDP2 CPU Offload 保存 Checkpoint 时的崩溃问题 ([#7072](https://github.com/volcengine/verl/pull/7072), [#7077](https://github.com/volcengine/verl/pull/7077))**
  - **摘要**：当使用 FSDP2 并配置 `CPUOffloadPolicy` 时，`save_checkpoint()` 会错误地强制将模型加载到 GPU，导致在昇腾 NPU 或显存受限环境下发生 Device mismatch 崩溃。该 PR 修复了这一逻辑缺陷，并已回退至 v0.8.0。
- **[OPEN] 支持仅保存 LoRA Adapter 权重 (`save_lora_only`) ([#7061](https://github.com/volcengine/verl/pull/7061))**
  - **摘要**：引入了极为实用的内存/磁盘优化功能。开启后，对于 27B 规模的模型，Checkpoint 大小将从约 54 GiB 骤降至约 150 MiB，大幅降低了轻量级微调的存储压力。
- **[OPEN] 引入基于 NCCL 的分片 Delta 权重同步 (`delta_sharded`) ([#7080](https://github.com/volcengine/verl/pull/7080))**
  - **摘要**：扩展了之前合并的分片权重同步功能，使其支持块放置（`Shard(k)` 与多 Shard-dim 网格），并端到端打通了 Automodel (nemo_automodel) 引擎与专家并行（EP）。这进一步提升了大规模 MoE 模型在训练和 Rollout 解耦架构下的同步效率。
- **[OPEN] 新增轻量级 GPU 停滞诊断工具 ([#7073](https://github.com/volcengine/verl/pull/7073))**
  - **摘要**：针对 Issue #3114 反映的 GPU 0% 利用率痛点，该 PR 引入了可选的、基于阶段的 GPU 停滞诊断机制。通过延迟导入 NVML 采样物理 GPU 利用率，帮助开发者精准定位异步 PPO Rollout 时的阻塞点。
- **[CLOSED] 排除 Rollout 阶段 MoE 负载均衡指标的系统偏差 ([#7075](https://github.com/volcengine/verl/pull/7075))**
  - **摘要**：修复了序列最后生成的 Token（EOS / max-length stop）因为没有反馈回模型而缺少路由记录，所导致的 MoE 负载均衡指标计算偏差。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **死磕超大规模与异构算力**：verl 正在解决当前 RL 训练中最棘手的工程问题。无论是针对超大模型（如 Qwen3-235B）的 FSDP2 CPU Offload 支持，还是针对 MoE 架构的 EP（专家并行）结合 NCCL 的分片同步优化，都在不断推高开源 RL 框架的工程极限。
2. **拥抱软硬协同生态**：项目不仅在适配最新的 Nvidia 架构（FP4 量化、NVFP4 QAT），还在积极且深度地适配华为昇腾生态，填补了非 CUDA 生态在分布式 RL 训练框架上的空白。
3. **直面 Agentic RL 的痛点**：从 Roadmap 和 Issue 解决方案可以看出，verl 正在将重心向 Multi-turn Agent 训练倾斜。解决 vLLM/SGLang 的 LoRA Rollout 乱码问题、加入异步推理的 GPU Stall 诊断工具，表明 verl 正在为复杂的 Tool-use 和 Search-R1 类的智能体训练铺平基础设施道路。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-07-17)

日期：2026-07-17 | 目标仓库：[allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体活动平稳。无新增 Issues，无新版本发布，但有 2 个关键的底层基础设施优化 PR 处于活跃更新状态。项目重心当前明显聚焦于**新一代 GPU 硬件适配**与 **RL 训练可观测性/稳定性修复**。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无活跃 Issues**。（过去 24 小时内无新增或更新）。

### 4. 关键 PR 进展
今日的 2 个 PR 均围绕 RL 训练底座的健壮性展开：

- **PR #1758 [OPEN]: 升级至 CUDA 13.0 以支持 ai2/holmes 集群上的 B300 GPU**
  - **作者**: mnoukhov (更新: 2026-07-16)
  - **摘要**: 引入了对 NVIDIA B300 硬件的支持，同时向下兼容 CUDA 12 集群。通过环境变量 (`CUDA_VERSION=12`/`13`) 动态切换 Docker 基础镜像（如 `nvidia/cuda:13.0.3-d...`），确保同一 Dockerfile 和 uv lock 文件能编译出适配不同底层硬件环境的镜像。
  - **链接**: [allenai/open-instruct PR #1758](https://github.com/allenai/open-instruct/pull/1758)

- **PR #1759 [OPEN]: 在 wandb 中暴露沙盒基础设施错误；修复 OOM 被误判为成功的问题**
  - **作者**: pdasigi (更新: 2026-07-16)
  - **摘要**: 修复了一个 RL 训练评估中的致命 Bug。此前，沙盒基础设施的崩溃（如 Podman 故障）只能事后查日志，且 wandb 的 `failure_rate` 指标将“模型推理错误”与“系统级宕机”混为一谈，导致 **OOM (内存溢出) 终止的 episode 被错误地标记为成功**（因为其返回了 `done=True` 且无 `error`）。该 PR 完善了核心训练指标的真实性。
  - **链接**: [allenai/open-instruct PR #1759](https://github.com/allenai/open-instruct/pull/1759)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **敏捷跟进下一代硬件 (B300)**：在 LLM RL 训练向超大规模演进的当下，Open Instruct 率先适配支持 NVIDIA B300 芯片及 CUDA 13 环境，这反映了 AI2 团队在底层算力集群调度上的前瞻性，对关注大规模分布式 RL 的开发者具有极高参考价值。
2. **直击 RLHF 工具链路核心痛点**：PR #1759 暴露出一个在当前基于沙箱的 RL（如 ReAct, Tool Learning）生态中普遍存在但极难察觉的隐患——**基础设施静默崩溃导致的 Reward Hacking**。OOM 被错误打分为 `Success` 会悄无声息地污染 RL 的经验回放池，导致 Policy 优化方向跑偏。该项目对 wandb 监控指标的精细化拆分（剥离模型逻辑错误与基础设施错误），为其他 RL 开源框架提供了标准的基础设施容错设计范式。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 强化学习生态日报 | 2026-07-17

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活动趋于平稳，无新增 Issue 或版本发布。今日唯一的开发进展集中在代码兼容性修复上，社区贡献者提交了一个针对 Gymnasium 最新版自动重置机制的 Bug 修复 PR。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **无活跃 Issue 更新**。

## 4. 关键 PR 进展
- **[#567] [OPEN] Fix KeyError on Gymnasium final_obs for off-policy scripts**
  - **作者**: Fstarnb
  - **链接**: [vwxyzbbb/cleanrl/pull/567](https://github.com/vwxyzjn/cleanrl/pull/567)
  - **技术摘要**: 该 PR 旨在修复 Gymnasium $\geq 1.0$（特别是适配 MuJoCo v5 时）引入的底层 API 变更导致的报错。在 Gymnasium 最新的 **SAME_STEP** 自动重置机制下，环境的终止状态观测值（terminal observation）的存储键名发生了变更（从旧版 AutoReset wrapper 的 `infos["final_observation"]` 迁移至 `infos["final_obs"]` / `infos["_final_obs"]`）。由于 CleanRL 的 off-policy 算法（如 DQN, SAC, TD3 等）在经验回放池中处理终止状态时强依赖该键，此变更会导致 `KeyError`。该 PR 同步更新了相关脚本，以恢复对最新 Gymnasium 核心的兼容性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧随底层依赖（Gymnasium / MuJoCo）的破坏性更新进行迭代**：强化学习生态的底层标准（Farama 基金会主导的 Gymnasium）变动频繁。CleanRL 始终保持对最新 API（如 MuJoCo v5 的 SAME_STEP 机制）的极速响应，确保研究人员的基准算法不会因依赖升级而失效。
2. **单文件架构（Single-file Implementation）的独特价值**：在 RL 框架日益重型化（如 Ray RLlib, Stable-Baselines3）的今天，CleanRL 坚持“一个算法一个完整 `.py` 文件”的设计。这种高信噪比、低抽象的代码结构，依然是研究人员复现论文、进行消融实验、魔改核心逻辑的最优选择。
3. **高价值的社区维护基本盘**：尽管今日数据量较小，但贡献者提交的 PR 直击实际工程痛点（环境 VectorEnv 状态重构），证明项目依然拥有活跃且专业的开发者群体在维护其在工业级/学术级基准测试中的可用性。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

这里是为您生成的 2026-07-17 强化学习（RL）开源生态日报摘要：

# RL 开源生态日报：rl_games (2026-07-17)

**1. 今日速览**
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库整体活跃度趋于平稳，无新增 Issue、无新版本发布。开发者的核心精力集中在现有底层算法的严谨性修复与代码合并上，今日共有 1 个关键 PR 更新。

**2. 版本发布**
今日无新版本发布。项目主线代码仍处于持续迭代阶段。

**3. 重点 Issues**
过去 24 小时无新增或更新的 Issue。目前社区反馈渠道保持静默，暂无待解决的公开技术阻塞点。

**4. 关键 PR 进展**
**[#362] [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
*   **作者:** ViktorM
*   **更新时间:** 2026-07-15
*   **链接:** [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
*   **技术摘要:** 这是一个针对 PPO 算法在并发环境下的**核心正确性修复**。
    *   **背景:** 在使用 `next_step-autoreset` 机制的向量环境（如 EnvPool 或原生 Gymnasium 1.x）时，环境重置（Reset）当步产生的冗余数据（被忽略的动作、填充的虚拟奖励、上一 Episode 的终止观测值）会被错误地作为真实训练数据混入 PPO 的 rollouts 中。
    *   **修复:** 本 PR 主要完成了该修复工作的 PPO 部分（SAC 部分已在提交 `b1ed755` 中完成）。通过对这些“垃圾行”进行掩码处理，防止脏数据污染训练。此外，该 PR 还引入了标量化 Sigma 参数化机制，以优化策略网络的探索能力。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
[rl_games](https://github.com/Denys88/rl_games) 以其极高的训练吞吐量和在 Isaac Gym / Isaac Lab 等重度仿真环境中的优异表现，一直是 RL 生态的底层基础设施。
正如今日更新的 [PR #362](https://github.com/Denys88/rl_games/pull/362) 所展示的，该项目目前正致力于解决大规模并发向量化环境下的微观边界 Bug（如 autoreset 导致的数据污染）。这种对底层数据流严谨性的打磨，对于当前 RL 社区向更高并发、更复杂物理仿真（如大规模机器人训练）演进的趋势至关重要。对于追求极致训练稳定性和极速 Scaling 的研究人员，rl_games 的每一次底层修复都极具跟踪价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-07-17)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库共有 6 项动态更新（3 条 Issues，3 条 PRs），无新版本发布。社区当前焦点集中在**向量化环境的性能与资源控制**，以及 **MJX (MuJoCo XLA) 环境的原型演进**。

**2. 版本发布**
*   **无新版本发布**。当前核心 API 趋于稳定，开发重点转向底层环境优化和测试工具链的完善。

**3. 重点 Issues**
*   **[增强建议] 限制 `AsyncVectorEnv` 的并发进程数** ([#1641](https://github.com/Farama-Foundation/Gymnasium/Issue/1641))
    *   **摘要**: 开发者呼吁为 `AsyncVectorEnv` 增加并发执行上限功能。在使用 MuJoCo 等计算密集型模拟器进行大规模策略评估时，完全异步并行极易耗尽 CPU 核心资源。该提案直指当前向量化环境在资源管理上的痛点。
*   **[提问] `MujocoEnv` 忽略 XML 文件中的相机分辨率参数** ([#1607](https://github.com/Farama-Foundation/Gymnasium/Issue/1607))
    *   **摘要**: 开发者反馈在继承 `MujocoEnv` 自定义环境（如无人机视角）时，代码未能正确读取 XML 中定义的 `offwidth` 和 `offheight` 参数，阻碍了基于视觉的强化学习（Vision-based RL）自定义渲染实例化。
*   **[Bug修复] CarRacing v3 HUD 分数溢出问题** ([#1638](https://github.com/Farama-Foundation/Gymnasium/Issue/1638))
    *   **摘要**: 已关闭。底部的分数 HUD 因浮点数精度问题（如 `23.590909...`）溢出显示边界。起因是格式化代码 `:04` 仅限制了最小宽度而未限制小数位。

**4. 关键 PR 进展**
*   **[RFC] `MJX` 环境原型 (WIP)** ([#834](https://github.com/Farama-Foundation/Gymnasium/PR/834))
    *   **摘要**: 这是一个始于 2023 年底的长期重量级 PR。作者更新了进度，目前因等待 `mjx==3.2` 和 `FuncEnv` 的更新而暂停开发。此 PR 旨在将基于 JAX 的 MJX 引入 Gymnasium，是实现大规模 GPU 矢量化物理模拟的关键一步。
*   **[新增] 添加向量化环境 Step 基准测试** ([#1640](https://github.com/Farama-Foundation/Gymnasium/PR/1640))
    *   **摘要**: 新增了 `benchmark_step_vector` 工具，用于精确测量向量化环境的每秒步数（SPS）。该性能分析工具的开发，主要是为了服务于上述 MJX 环境的测试需求。
*   **[修复] CarRacing HUD 浮点数格式化溢出** ([#1639](https://github.com/Farama-Foundation/Gymnasium/PR/1639))
    *   **摘要**: 已关闭。配合 Issue #1638 的修复提交。将原有的 `f"{self.reward:04}"` 更改为 `f"{self.reward:04.0f}"`，强制转换为固定宽度的整数显示，修复了 UI 渲染 Bug。

**5. 为什么在当前 RL 生态继续关注 Gymnasium？**
*   **拥抱 JAX 与 GPU 加速**：从 PR #834 (MJX 原型) 和 PR #1640 (向量化基准测试) 可以看出，Gymnasium 正积极整合基于 JAX 的物理引擎，解决传统 CPU 环境的吞吐量瓶颈，紧跟现代 RL 大规模采样需求。
*   **直击工程化落地痛点**：如 Issue #1641 所示，社区正致力于完善向量化环境在真实硬件部署时的资源调度与限制机制，这对于机器人学和复杂策略评估至关重要。
*   **稳固的底层生态基石**：尽管 API 已趋于稳定，Gymnasium 依然是当今绝大多数 RL 算法库（如 Stable-Baselines3, CleanRL）默认的接口标准，其每一个底层渲染（#1607）和性能优化（#1641）都直接影响到下游整个 RL 训练链路的效率。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>