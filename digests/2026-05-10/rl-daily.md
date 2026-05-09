# RL 开源生态日报 2026-05-10

> 生成时间: 2026-05-09 22:11 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的分层演进态势，且聚焦于大模型后训练（Post-training）的基础设施正在快速收敛。具体表现为：
1. **LLM RL 成为绝对主角**：生态内的高优动态几乎全部被基于 LLM 的对齐与强化学习框架占据，传统 DRL（如 Stable Baselines3、CleanRL）处于停滞或常规维护状态。
2. **从单轮对齐走向 Agent 化**：前沿 RL 框架不再局限于传统的单轮 RLHF（PPO/GRPO），而是开始将多轮交互、工具调用以及 Agent 轨迹生成作为一等公民纳入核心架构设计。
3. **算力多元化与国产化替代**：在英伟达算力依然主导的前提下，对华为昇腾等国产 NPU 的底层适配（如 HCCL 通信、Megatron 移植）已成为国内头部框架的标准动作。

## 各项目活跃度对比
以下为 2026-05-10 各主要 RL 项目的活跃数据摘要：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 13 | 32 | 0 | 攻坚复杂分布式策略，首试 Agent 框架，深耕 NPU 生态 |
| **TRL** | 2 | 16 | **v1.4.0** | 发布重大内存优化版本，重构分布式异步架构状态管理 |
| **AReaL** | 4 | 10 | 0 | 底层通信路由重构，引入 K8s 原生调度，冲击云原生 RL |
| **ROCK** | 3 | 4 | 0 | 重构跨平台沙箱，引入 Nacos 动态配置增强微服务调度 |
| **slime** | 3 | 4 | 0 | 极速跟进 Gemma4/Qwen3.5 等前沿 MoE 架构及显存优化 |
| **ROLL** | 1 | 2 | 0 | 修复 Agent RL 学习率调度缺陷，推进 NPU 异构计算支持 |
| **Tianshou** | 5 | 2 | 0 | 筹备破坏性更新 v3，清理 API 历史技术债，对齐 Gym v1 |
| **Gymnasium**| 0 | 1 | 0 | 核心空间扩展，原生支持异构图 |
| **Open Instruct** | 0 | 1 | 0 | 修复混合数据集边界处理逻辑 |
| *其他项目* | *0* | *0* | *0* | *CleanRL, OpenRLHF, SB3 等无明显活动* |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **前沿 MoE 及多模态架构的极速适配**：随着 Qwen3.5 和 Gemma4 等超大参数 MoE 模型的发布，RL 框架的核心研究承载力正在向复杂并行策略（EP/CP/TP）和 VLM 多轮训练倾斜。
2. **Agentic RL 范式崛起**：从单步 Reward 优化转向多步轨迹优化。verl 的多轨迹 Agent 框架、ROLL 对 Agentic LR scheduler 的修复，都表明业界正致力于让 LLM 在与环境交互的循环中自我进化。

**工程与基础设施侧信号：**
1. **暴力破解“显存墙”**：显存管理是当前 LLM RL 最核心的工程战场。TRL v1.4.0 通过分块交叉熵猛降 50% 显存，而 slime 和 verl 则在死磕 Offload 机制和 Ulysses 序列并行底层的非法内存访问问题。
2. **混合精度与分布式训练的隐蔽陷阱**：AReaL 暴露的 AdamW 优化器 bf16 精度泄漏、verl 遇到的 FSDP2 Wrap 异常，证明了在千卡规模下，底层张量对齐和精度管理的工程复杂度正在急剧上升。
3. **向云原生与异构算力演进**：AReaL 引入 K8s 调度器、ROCK 支持 Nacos 动态热加载，以及 verl/ROLL 对 Ascend NPU 的全面适配，标志着 RL 训练正在脱离“单机脚本”时代，向企业级分布式微服务架构过渡。

## 差异化定位分析
*   **verl / AReaL / slime**：属于“大厂级硬核基础设施”，追求极致的算力榨取与分布式性能。**verl** 软硬件生态最全且最快跟进 Agent；**slime** 依托 Megatron 追求多维并行的极致严谨性；**AReaL** 则在云原生架构（K8s/RPC 路由）上走得最远。
*   **TRL**：定位为“最广泛兼容的算法库”。依托 Hugging Face 生态，它不追求极致的千卡并行，而是把 SFT/DPO/GRPO 等算法的易用性和显存优化（如 chunked cross-entropy）做到极致，是中小规模团队的最佳首选。
*   **ROCK / ROLL**：作为阿里系内部的平行项目，正在从具体的训练业务中解耦。**ROCK** 专注底层沙箱环境与跨平台调度；**ROLL** 则作为上层胶水框架，着力解决 Agentic 场景和异构算力（NPU）的适配。
*   **Tianshou / Gymnasium**：代表了传统 DRL 的基石。**Gymnasium** 通过引入异构图支持持续定义环境 API 标准；**Tianshou** 则保持纯粹的算法研究本色，正在通过 API 现代化（v3）降低学术界的研究门槛。

## 社区热度与成熟度
1. **核心项目高度成熟，直面底层物理极限**：TRL、verl 等项目的 Issue 已经很少是“怎么跑通”的初级问题，而是集中于特定显卡的通信阻塞、算子非法访问和混合精度精度丢失。这说明社区用户正在进行大规模的工业化压测。
2. **前沿模型原力驱动**：slime 和 verl 的社区活跃度，很大程度上是由 Qwen3.5、Gemma4 等开源大模型的发布节奏驱动的。模型架构的每一次迭代都会在 RL 社区引发一波 Bug 反馈与适配的狂潮。
3. **长尾生态极度沉寂**：CleanRL、OpenRLHF、PettingZoo 等过去极其活跃的项目在过去 24 小时内毫无动静。这从侧面印证了当前行业的关注点高度集中于 LLM 的后训练与对齐，传统 DRL 或上一代轻量级 RLHF 方案正进入技术平台期。

## 值得关注的趋势信号
1. **Agent RL 成为下半场护城河**：几乎所有顶流框架都在重构多轮 Rollout 的底层支持。未来评价一个 RL 框架能力的核心指标，将是其能否高效支持带有工具调用、错误恢复机制的多轨迹 Agent 训练流。
2. **异构算力（NPU）从“可选项”变为“必选项”**：verl 和 ROLL 同一天在 NPU 适配上的投入表明，国内基础设施去英伟达化已深入到大模型训练的最核心腹地（RLHF/Megatron 移植）。
3. **显存优化下沉到算子与编译级**：随着模型参数向 MoE 和千亿级迈进，仅靠 ZeRO 等显存切分策略已遇到瓶颈。未来基于底层 Offload 状态机的重构（如 slime 的 C++ level 管理）和自定义算子分块（如 TRL 的 chunked NLL）将成为常态。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026 年 5 月 10 日 ROLL 项目 RL 生态日报摘要：

### 1. 今日速览
过去 24 小时，ROLL 项目整体处于稳步迭代状态。无新增版本发布；Issue 池活跃度保持平稳，核心聚焦在大参数量 MoE 模型的 Checkpoint 保存异常；PR 动向主要围绕**底层异构算力（NPU）扩展**与**Agentic RL 训练稳定性修复**展开。

### 2. 版本发布
- **最新 Release**：无（过去 24 小时内无新版本发布）。

### 3. 重点 Issues
- **[#411](https://github.com/alibaba/ROLL/issues/411) [OPEN] Qwen3.5-35B-A3B lora sft with mcore-adapter 保存 Checkpoint 报错**
  - **背景**：开发者在使用 Qwen3.5-35B-A3B（MoE 架构）结合 Megatron-Core adapter 进行 LoRA SFT 时遇到权重保存失败的问题。
  - **分析**：该 Issue 跨越近 40 天（创建于 03-30），累计产生 10 条讨论且于昨日再次更新。这反映出现有开源 RL/Megatron 生态在处理大参数量 MoE 模型与 LoRA/MCore 组合时的分布式显存与状态挂载依然存在痛点，是目前 LLM+RL 训练工程化的常见瓶颈。

### 4. 关键 PR 进展
- **[#380](https://github.com/alibaba/ROLL/pull/380) [OPEN] feat: Add NPU Megatron support**
  - **核心变更**：为 ROLL 框架引入华为昇腾（Ascend NPU）硬件的后端支持，修改了 `roll/platforms/__init__.py` 中的平台检测优先级。
  - **意义**：标志着 ROLL 正在突破单一的 Nvidia GPU 生态，向多节点异构算力（GPU/NPU）的 RL 训练场景演进。
- **[#439](https://github.com/alibaba/ROLL/pull/439) [OPEN] fix: Account for multi-turn chunks in agentic LR scheduler budget**
  - **核心变更**：修复了使用 `AgentNativeStepEnvManager` 进行 Agentic RL 训练时，LR scheduler 提前耗尽 step budget 导致学习率在训练中途归零的 Bug。
  - **意义**：重新校准了多轮交互场景下 `PPOConfig.set_max_steps()` 的计算逻辑，填补了从传统单轮 RLHF 过渡到 Agentic Multi-step RLHF 时在训练调度上的适配缺陷。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **向 Agent RL 的深度演进**：如 PR #439 所示，ROLL 正在底层调度逻辑（如 LR step 预算）上针对多轮 Agentic 场景进行深度适配与修复，而不再局限于传统的单轮对齐，这切中了当前 LLM 从 Chatbot 向 Agent 进化的技术趋势。
2. **前沿模型架构的工程级验证**：通过 Issue #411 可以看出，项目正在接收外部社区针对 Qwen3.5 系列 MoE 大模型结合 Megatron-Core 的真实训练压力测试，它正在成为验证 RLHF 在超大参数 MoE 架构上可用性的重要试验田。
3. **打破算力壁垒的先手棋**：PR #380 展现了框架对底层硬件解耦的前瞻性布局，多硬件生态（NPU 支持）的接入将极大提升项目在国内及多样化算力池中的普适性和部署韧性。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK (alibaba/ROCK) RL 日报摘要 - 2026年5月10日

## 1. 今日速览
过去 24 小时内，ROCK 仓库保持了活跃的开发迭代节奏，共产生 **3 条 Issues 更新** 和 **4 条 PR 更新**。当前没有新版本发布。社区开发重点集中在 **Sandbox 跨平台架构重构**、**指标监控 路由缺陷修复** 以及 **调度器动态配置功能落地**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues

- **#921 [OPEN] [enhancement] 重构 rocklet 本地沙箱以支持跨平台扩展**
  - **作者**: zhongwen666
  - **摘要**: 旨在解决 `rock/rocklet/local_sandbox.py` 中原有的顶层系统分支判断带来的维护困难。提议引入平台适配器架构，为后续扩展不同操作系统支持打好基础。
  - **链接**: [alibaba/ROCK Issue #921](https://github.com/alibaba/ROCK/issues/921)

- **#918 [OPEN] [bug] MetaStore 指标导出至错误端点导致 ConnectTimeout**
  - **作者**: zhangjaycee
  - **摘要**: 在合并 PR #887 后引入的回归缺陷。MetaStore 的监控组件未能正确读取路由端点，导致连接超时。影响范围为 Sandbox 组件。
  - **链接**: [alibaba/ROCK Issue #918](https://github.com/alibaba/ROCK/issues/918)

- **#888 [CLOSED] [enhancement] 通过 Nacos 添加调度器动态配置重载**
  - **作者**: zhongwen666
  - **摘要**: 调度器原本仅在启动时单次加载 YAML 配置，该 Issue 提出并已成功落地通过 Nacos 实现运行时配置动态重载的功能。
  - **链接**: [alibaba/ROCK Issue #888](https://github.com/alibaba/ROCK/issues/888)

## 4. 关键 PR 进展

- **#922 [OPEN] feat(rocklet): 通过 platform-adapter 架构增加 Windows PowerShell 支持**
  - **作者**: zhongwen666
  - **摘要**: 对应 Issue #921。将原有的单体 OS 切换模块重构为解耦的架构，并引入 `PowerShellSession` 驱动。通过 subprocess 封装、线程读取器及 `$LASTEXITCODE` 捕获，实现了规范化的 Windows 环境支持。
  - **链接**: [alibaba/ROCK PR #922](https://github.com/alibaba/ROCK/pull/922)

- **#920 [OPEN] fix(metrics): 传递 rock_config 至 SandboxTable/SandboxMetaStore 修复端点错误**
  - **作者**: zhangjaycee
  - **摘要**: 对应 Issue #918。修复了监控组件实例化时配置缺失的问题，确保 MetricsMonitor 能够准确连接到目标路由端点。
  - **链接**: [alibaba/ROCK PR #920](https://github.com/alibaba/ROCK/pull/920)

- **#919 [CLOSED] fix(metrics): 传递 rock_config 至 SandboxTable/SandboxMetaStore**
  - **作者**: zhangjaycee
  - **摘要**: 旨在修复 Issue #918 的早期尝试，已被作者新提交的 PR #920 取代并关闭。
  - **链接**: [alibaba/ROCK PR #919](https://github.com/alibaba/ROCK/pull/919)

- **#889 [CLOSED] feat(scheduler): 通过 Nacos 添加动态配置重载**
  - **作者**: zhongwen666
  - **摘要**: 对应 Issue #888 并已成功合并。实现了监听 Nacos 配置变更，在不重启服务的情况下动态覆盖调度器参数。
  - **链接**: [alibaba/ROCK PR #889](https://github.com/alibaba/ROCK/pull/889)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **向跨平台训练环境的演进**：RL 算法的研发往往强依赖于底层环境（如基于 Windows 的游戏引擎或工业仿真器）。通过引入平台适配器架构并原生支持 PowerShell，ROCK 正在打破 RL Sandbox 在操作系统层面的局限性，这对于非标准 Linux 环境的 RL 应用落地具有直接价值。
2. **云原生与动态调度能力**：引入 Nacos 进行调度器配置的动态热加载，表明 ROCK 正在向云原生的微服务架构靠拢。在复杂的 RL 分布式训练场景（如动态扩缩容 Worker 节点）中，这种无需重启即可更新调度策略的能力极大提升了集群管理的鲁棒性。
3. **工程完整度持续提升**：从独立解决单个环境配置，到如今重构底层架构（Adapter 设计模式）和增强系统级可观测性（Metrics 修复），反映了该项目正在从“功能验证阶段”向“企业级生产可用阶段”演进。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-05-10 RL 日报摘要：

### 1. 今日速览
过去 24 小时，slime 仓库共处理了 3 条 Issues 和 4 条 PR，无新版本发布。当前项目动态高度集中于**前沿大模型架构的适配（如 MoE 模型 Qwen3.5、Gemma4）**以及**分布式训练底层的性能与显存优化（Offload 机制、分布式并发计算）**。生态集成方面，社区正在积极引入新的实验追踪工具。

---

### 2. 版本发布
- **最新 Releases**：无。

---

### 3. 重点 Issues
当前未关闭的 Issue 主要涉及特定模型的兼容性报错及底层显存管理的回归 Bug，反映出社区对 slime 支持最新一代大模型（特别是 MoE 架构）的强烈需求。

- **[#1894](https://github.com/THUDM/slime/issues/1894) [Bug] 运行 Qwen3.5-9b 时触发 `NoneType` 错误** (OPEN)
  - **摘要**：在启动 Qwen3.5-9b 的 RL 训练时，模型初始化阶段（`create_training_models`）发生崩溃，报错 `'NoneType' object has no attribute 'megatron_module'`。这通常与 Megatron 框架的模型包装或配置加载缺失有关。
- **[#1895](https://github.com/THUDM/slime/issues/1895) [Bug] `actor.sleep()` 导致 CUresult 显存释放错误** (OPEN)
  - **摘要**：开启 `offload_train` 时，在 rollout 阶段后调用 `actor.sleep()` 触发底层 C++ 报错 `[torch_memory_saver.cpp] CUresult error: 1 (invalid argument)`，并引发 Ray Actor 不可用异常。该问题被定性为 Issue #1856 引入的回归 Bug，直接影响 RLHF 训练的显存调度。
- **[#1831](https://github.com/THUDM/slime/issues/1831) [Question] 关于 Qwen3.5-35B-A3B 的支持进度** (CLOSED)
  - **摘要**：社区用户确认了 Qwen3.5-35B-A3B（MoE 架构）的兼容性。由于项目已有 Qwen3-30B-A3B 的脚本基础，官方/社区已协助解决并关闭此单。

---

### 4. 关键 PR 进展
今日的 PR 动静极大，涵盖了对 Google 最新开源模型的支持、分布式并发计算的修复以及内部训练逻辑的优化。

- **[#1855](https://github.com/THUDM/slime/pull/1855) feat(gemma4): 添加 Gemma4 26B-A4B MoE 和 31B dense 支持** (OPEN)
  - **摘要**：由开发者 `leofan-lab` 提交的重磅特性。全面引入 Gemma4 架构支持，包括 HF 与 Megatron 的权重转换脚本。已通过涵盖 TP/PP/DP/CP/EP/Sliding Window 的组合并行 parity 测试。这标志着 slime 在多模态和前沿 MoE 模型强化学习支持上的进一步领先。
- **[#1898](https://github.com/THUDM/slime/pull/1898) Add SwanLab tracking support** (OPEN)
  - **摘要**：集成 SwanLab 作为继 W&B 之后的另一个可选实验追踪 后端，完善了 RL 训练的 Metrics 监控生态。
- **[#1897](https://github.com/THUDM/slime/pull/1897) [run-ci-megatron] Migrate internal feature** (CLOSED)
  - **摘要**：合入了内部训练优化逻辑，主要包括引入 training tqdm 进度条，以及**在 on-policy 训练时跳过 logprob 的计算**。后者是一个典型的工程优化，可直接减少 Actor-Critic 更新阶段的冗余计算开销，提升吞吐量。
- **[#1880](https://github.com/THUDM/slime/pull/1880) [Fix] 修复分布式 POST actor 并发 split 错误** (CLOSED)
  - **摘要**：修复了分布式 POST 模式下的并发计算 Bug。原实现在创建多个 POST actor 时，未能正确将 `_client_concurrency` 除以总 GPU 数，导致分布式环境下的并发调度分配异常。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **大模型 RL 基建的核心地位**：从今日的 Issue 和 PR 可以看出，slime 已经在快速跟进 Qwen3.5 和 Gemma4（包括复杂的 MoE 架构）。在 LLM 迈向 MoE 和超大参数的当下，能够提供稳定 HF↔Megatron 转换及 RL 训练对齐的框架极具工程价值。
2. **硬核的系统级优化**：项目正在深入解决 RLHF 计算中最棘手的问题。例如 `offload_train` 时的显存生命周期管理（`actor.sleep()` 的 C++ level 报错），以及通过取消 on-policy 训练中的冗余 `logprob` 计算来压榨算力。这表明项目具有极强的底层榨取能力。
3. **高活跃度与工程严谨性**：对于 Gemma4 这种极复杂的模型支持，PR 中明确展示了覆盖 TP/PP/DP/CP/EP 及滑动窗口的单元/对齐测试结果。这种“带严苛测试用例的合并”保证了框架在快速迭代中的可靠性，是研究界和生产界值得信赖的基础设施。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 开源项目 2026-05-10 RL 日报摘要：

# AReaL 强化学习生态日报 (2026-05-10)

## 1. 今日速览
过去 24 小时内，AReaL 生态保持活跃。项目共处理 **4** 条 Issues 和 **10** 条 Pull Requests，无新版本发布。今日焦点集中在 **Qwen3.5 模型适配引发的底层 Bug 与显存问题**，以及**底层推理路由的重构与 Kubernetes 调度器的引入**。

## 2. 版本发布
- **最新 Releases**：近 24 小时无新版本发布。

## 3. 重点 Issues
今日暴露的核心问题主要围绕新一代大模型（Qwen3.5、LLaVA）的兼容性与底层引擎稳定性。

- **[Bug] FSDP 引擎下 AdamW 优化器精度泄漏**：[#1292](https://github.com/inclusionAI/AReaL/issues/1292) 
  使用 FSDP 后端配合 `bfloat16` 训练时，`torch.optim.AdamW` 会错误继承模型参数的 bf16 精度（优化器状态未保持在 fp32），导致模型在后期收敛平台比 DeepSpeed ZeRO-3 / Megatron 高出约 3 倍。这是一个高优先级的底层精度 Bug（标记为 `good first issue` 征集社区修复）。
- **[Bug] Qwen3.5 Megatron 训练报错**：[#1317](https://github.com/inclusionAI/AReaL/issues/1317)
  社区开发者反馈在适配 Qwen3.5（包含 `mtp_args` 配置）时，Megatron 引擎在模型构建阶段出现阻塞性错误。
- **[Question] Qwen3.5 显存占用异常 (OOM)**：[#1319](https://github.com/inclusionAI/AReaL/issues/1319)
  在相同配置下，Qwen3.5 的显存占用异乎寻常地高（Ref 模型的 Offload 机制疑似失效，峰值常驻近 50GB），导致 H100 出现 OOM。
- **[Feature] 支持 LLaVA-OneVision-1.5 RL 训练**：[#1028](https://github.com/inclusionAI/AReaL/issues/1028)
  计划结合 Rice ViT 与 Qwen3 LLM 的多模态模型 RL 训练需求（已关闭）。

## 4. 关键 PR 进展
核心工程化推进显著，重点优化了推理服务的路由和网络健壮性，并扩展了多模态与集群调度能力。

- **推理路由与架构优化（核心开发者 garrett4wade 密集提交）**
  - **统一 Session 路由**：[#1320](https://github.com/inclusionAI/AReaL/pull/1320) (Closed) 重构路由器，将 Session 固定与模型上下文统一，消除原先 `/route` 中繁琐的 5 步级联查询。
  - **移除冗余容量管理**：[#1318](https://github.com/inclusionAI/AReaL/pull/1318) (Closed) 移除了 HTTP 堆栈中冗余的 `grant_capacity` 机制，依赖控制器的 `StalenessManager` 进行并发拦截，简化推理服务架构。
  - **HTTP Client 健壮性提升**：[#1315](https://github.com/inclusionAI/AReaL/pull/1315) (Closed) 引入连接池 (4096 max connections) 和传输级重试，降低日志冗余。

- **系统调度与 CI/CD 扩展**
  - **Kubernetes 调度器支持**：[#1316](https://github.com/inclusionAI/AReaL/pull/1316) (Open) 新增基于 StatefulSet 的 `KubernetesScheduler` 实现，包含 Pod 健康诊断和回滚处理。
  - **添加真实训练 Nightly CI**：[#1313](https://github.com/inclusionAI/AReaL/pull/1313) (Open) 在 Docker 容器中加入真实的 gsm8k GRPO 训练流，按天轮询 FSDP/Megatron 等后端。

- **多模态与推理引擎（社区长期 WIP）**
  - **VLM 多轮训练支持**：[#931](https://github.com/inclusionAI/AReaL/pull/931) (Open) 支持视觉语言模型通过错误恢复机制进行多轮 Agentic 训练。
  - **Sglang Eagle 投机解码**：[#1176](https://github.com/inclusionAI/AReaL/pull/1176) (Open) 引入投机解码算法以加速 RLHF 中的 Rollout 推理阶段。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击大模型 RL 底层痛点**：今日暴露的 Issue #1292 揭示了 FSDP 框架下混合精度训练的隐蔽陷阱。AReaL 团队直面这些极其硬核的显存管理和内核级 Bug，表明其追求极致训练稳定性的决心。
2. **前沿模型和范式的极速跟进**：生态对 Qwen3.5、LLaVA-OV 等最新模型以及多模态（VLM）多轮交互训练的迅速响应，保证了框架在 LLM 技术快速迭代期的不可替代性。
3. **面向生产级的系统工程设计**：从 Router 的重构、冗余机制的剥离，到引入原生 Kubernetes 调度器（StatefulSet 编排），AReaL 正在跨越“单机实验代码”的边界，向可大规模横向扩展的**云原生分布式 RL 基础设施**演进。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 TRL 项目 2026-05-10 的强化学习生态日报摘要。

### 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度。项目成功发布了备受期待的 **v1.4.0 版本**，该版本在内存优化上取得了重大突破。此外，社区共提交了 2 个新 Issue（聚焦于 AsyncGRPO 和 GOLD Trainer 的边界场景），并产生了 16 项 PR 更新，核心开发团队目前正致力于修复潜在的 VRAM 内存泄漏问题、完善多卡 DDP 测试覆盖以及对齐底层 tiny model 的配置。

### 2. 版本发布
- **v1.4.0 正式发布** ([GitHub Release](https://github.com/huggingface/trl/releases))
  - **核心亮点**：引入用于 SFT 的分块交叉熵损失。
  - **性能提升**：通过新增的 `loss_type="chunked_nll"` 配置项，大幅减少了峰值激活内存，VRAM 占用最高可降低 50%，极大缓解了大模型强化学习微调时的显存瓶颈。

### 3. 重点 Issues
- **#5742 AsyncGRPO 无条件调用导致与基类行为不一致** ([#5742](https://github.com/huggingface/trl/issues/5742))
  - **详情**：`AsyncRolloutWorker` 在初始化时未检查 `self.tools` 状态便直接调用了 `add_response_schema`（这与 `GRPOTrainer` 的门控逻辑相悖）。导致使用 Mistral、Gemma 等未内置 chat template 的 tokenizer 时会触发异常。
- **#5741 探讨 GOLD 算法支持特权上下文** ([#5741](https://github.com/huggingface/trl/issues/5741))
  - **详情**：目前的 `gold_trainer` 仅支持学生和教师模型处理相同输入（蒸馏场景）。作者探讨是否/如何使其支持包含特权上下文的教师模型，即 SDFT (Self-Distillation from Zeroth-Order) 范式。

### 4. 关键 PR 进展
- **内存泄漏修复与清理** 
  - **[#5738](https://github.com/huggingface/trl/pull/5738) [OPEN] 清理 VRAM**：深入重构 `OffloadActivations` 模块。该模块在 forward/backward 中保留了易变状态（如 `tracker`, `stash` 等），此 PR 修复了因最后一个 tensor 解包时重置门控失败导致的跨步内存泄漏。
  - **[#5730](https://github.com/huggingface/trl/pull/5730) [CLOSED] 修复 CUDA 内存泄漏**：另一个针对 BNB 反量化缓冲区及 `OffloadActivations` 陈旧状态引发内存泄漏的修复尝试。
- **模型与算法兼容性增强**
  - **[#5691](https://github.com/huggingface/trl/pull/5691) [OPEN] AsyncGRPO 支持 logits softcapping**：修改了 `patch_chunked_lm_head`，使 `AsyncGRPOTrainer` 能够兼容使用 `final_logits_softcapping` 技术的模型架构（如 Gemma 2）。
  - **[#5731](https://github.com/huggingface/trl/pull/5731) [CLOSED] 修复 GKD Liger 内核损失计算错误**：修复了当 `use_liger_kernel=True` 时，`GKDTrainer` 因默认参数错误（`weight_hard_loss` 和 `weight_soft_loss` 均为 0.5）而默默使用错误目标函数进行训练的严重 Bug。
- **底层架构与 CI 维护 (by @qgallouedec)**
  - **[#5736](https://github.com/huggingface/trl/pull/5736) [OPEN] 增加 DDP-2 测试**：将 2-GPU 分布式数据并行（DDP）加入 SFT 和 DPO 的不变量测试套件中，提升多卡训练的稳定性。
  - **[#5717](https://github.com/huggingface/trl/pull/5717) [OPEN] 弃用 `torch_dtype`**：全面将参数初始化统一迁移至 `dtype`，清理历史技术债。
  - **[#5706](https://github.com/huggingface/trl/pull/5706) & [#5707](https://github.com/huggingface/trl/pull/5707) [OPEN]**：对齐 tiny-Cohere 模型配置。
  - **[#5735](https://github.com/huggingface/trl/pull/5735) [OPEN]**：用 GitHub 官方 Action 替换 CI 中的 `curl` 安装脚本，增强安全性与缓存能力。
- **文档修复**
  - **[#5740](https://github.com/huggingface/trl/pull/5740) [OPEN] GRPO 文档对齐**：修复了 `grpo_trainer.md` 中的模型名称不一致问题，统一更新为 `Qwen2.5`，并增加了 GRPO OOM 帮助指引。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击工程痛点（OOM）**：v1.4.0 推出的 `chunked_nll` 直接切中 RLHF/LLM 训练中最棘手的显存瓶颈，最高 50% 的峰值显存降幅意味着在相同硬件下可以跑更大的 batch size 或更长的序列。
2. **异步与系统级优化提速**：社区和官方正密集修复异步架构（如 `AsyncGRPO`、`OffloadActivations`）中的状态管理 Bug 和内存泄漏。这表明 TRL 正在从单纯的“算法实现库”向高吞吐量的“分布式 RL 基础设施”演进。
3. **严谨的工程质量**：项目不仅在堆砌算法，还在积极引入 DDP 不变量测试、严格对齐各种底层模型（Cohere, Glm-4.5, Qwen2.5-VL）的配置。这种工程质量是保证复杂 RL 训练（如 GRPO, DPO, GKD）结果可复现、不静默出错的关键基石。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 日报摘要 | 2026-05-10

## 1. 今日速览
在过去 24 小时内，Tianshou 仓库共处理了 **5 个 Issues** 和 **2 个 PRs**（均已关闭）。社区当前的核心焦点集中在 **Tianshou v3 的大版本演进**以及底层 API 的规范化重构上。虽然今日无新版本发布，但关键的架构讨论和代码清理正在密集进行。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
今日的 Issue 动态主要围绕 Tianshou v3 的路线图及历史遗留设计的重新评估。

*   **[OPEN] 重新评估 Tianshou v3 的已关闭提案** 
    *   作者: [opcode81](https://github.com/opcode81) | [Issue #1299](https://github.com/thu-ml/tianshou/issues/1299)
    *   **分析**：这是一个新创建的聚合类 Issue，旨在为即将到来的 Tianshou v3 收集并重新开放此前因各种原因搁置的破坏性更新。这表明项目核心团队正在积极筹备下一个大版本。
*   **[CLOSED] v3 路线图讨论** 
    *   作者: [MischaPanch](https://github.com/MischaPanch) | [Issue #1215](https://github.com/thu-ml/tianshou/issues/1215)
    *   **分析**：收获了 27 个 👍。该 Issue 确立了 Tianshou 走向“成熟与稳定”里程碑的发展方向，今日再次被激活补充讨论。
*   **[CLOSED] 命名重构：将 `state_shape` 统一为 `obs_shape`**
    *   作者: [MischaPanch](https://github.com/MischaPanch) | [Issue #1036](https://github.com/thu-ml/tianshou/issues/1036)
    *   **分析**：修复历史命名歧义。在 RL 中，“状态”和“观测”有严格区别，且 Tianshou 内部在使用 RNN 时已将 `state` 用于隐藏状态，此次重构将彻底解决这一认知负担。
*   **[CLOSED] 适配 Gymnasium v1.0.0a1**
    *   作者: [pseudo-rnd-thoughts](https://github.com/pseudo-rnd-thoughts) | [Issue #1053](https://github.com/thu-ml/tianshou/issues/1053)
    *   **分析**：Tianshou 一直紧跟 Gymnasium（原 OpenAI Gym）的底层 API 变化，此 Issue 追踪了向 v1.0 对齐的工作。
*   **[CLOSED] 架构设计：Trainer 与 Algorithm 解耦及 Policy 类重构**
    *   作者: [maxhuettenrauch](https://github.com/maxhuettenrauch) | [Issue #1034](https://github.com/thu-ml/tianshou/issues/1034)
    *   **分析**：降低框架耦合度、提升自定义灵活性的底层架构讨论。

## 4. 关键 PR 进展
今日处理的两个 PR 分别涉及 API 规范化和算法鲁棒性修复。

*   **[CLOSED] 变量重命名：`state_shape` 至 `obs_shape`**
    *   作者: [Lidang-Jiang](https://github.com/Lidang-Jiang) | [PR #1292](https://github.com/thu-ml/tianshou/pull/1292)
    *   **分析**：对应 Issue #1036。落实了 API 的规范化，清理了由于版本迭代带来的历史技术债。
*   **[CLOSED] 修复 NPG 算法优势函数标准化中的除零错误**
    *   作者: [Pran-Ker](https://github.com/Pran-Ker) | [PR #1298](https://github.com/thu-ml/tianshou/pull/1298)
    *   **分析**：修复了实用层面的 Bug。在自然策略梯度（NPG）中，当 batch 大小为 1 或优势函数方差为 0 时会发生除零错误导致 `NaN`。该 PR 对齐了 PPO 中的做法（加入 `_eps`），提升了算法在边界条件下的数值稳定性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **主动清理技术债与 API 现代化**：通过解决 `state` vs `obs` 的命名混淆（#1036, #1292）和深度解耦 Trainer/Policy（#1034），Tianshou 正在为降低新手入门门槛和提升高级开发者体验做实质性工作。
2. **紧跟底层生态标准**：积极适配 Gymnasium v1.0（#1053），确保了用户可以无缝对接最新标准的强化学习环境。
3. **进入成熟的_v3时代**：以 Issue #1215 和今日新增的 #1299 为标志，Tianshou 正在筹备具备破坏性但更合理的 v3 大版本。对于需要高度自定义、追求高执行效率且基于 PyTorch 的 RL 研究者而言，Tianshou 依然是目前最纯粹、最值得跟进的生产力工具之一。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 (2026-05-10)

## 1. 今日速览
过去 24 小时内，verl 项目保持高度活跃，共处理了 **13 个 Issues** 和 **32 个 PRs**，无新版本发布。
当前社区的核心焦点集中在 **Ascend NPU 硬件生态适配**、**Qwen3.5 大模型训练的稳定性（Ulysses SP + FSDP2）** 以及 **Multi-turn Agent 框架的实验性引入**。

## 2. 版本发布
无新版本发布。社区目前正在积极推进 26Q2 Roadmap 的相关特性开发与聚合。

## 3. 重点 Issues
当前开源社区反馈的问题主要围绕新兴硬件兼容性及复杂并行策略下的底层 Bug：

*   **Ascend NPU 性能与兼容性瓶颈**
    *   **Qwen3-4B + FSDP2 训练极其缓慢**：在 8×Ascend 910B 环境下，单步训练耗时高达 800 秒，`update_actor` 成为绝对瓶颈。（[Issue #6010](https://github.com/verl-project/verl/issues/6010)）
    *   **A2 硬件 HCCL 通信初始化失败**：使用 CANN 8.3.RC1 时触发 HCCL error code 5。（[Issue #5074](https://github.com/verl-project/verl/issues/5074)）
    *   **GRPO 训练后权重合并格式错误**：影响 Qwen3-32b 的模型合并流程。（[Issue #6259](https://github.com/verl-project/verl/issues/6259)）
*   **复杂并行策略下的系统崩溃**
    *   **Ulysses SP + FlashAttention varlen 崩溃**：在 Qwen3.5 训练中引发 Contiguous、Illegal Memory Access 等严重底层错误。（[Issue #6284](https://github.com/verl-project/verl/issues/6284)）
    *   **Full Async OPD 非法内存访问**：FLA 触发 CUDA 错误。（[Issue #6281](https://github.com/verl-project/verl/issues/6281)）
*   **架构支持与机制缺失**
    *   **FSDP Wrap Policy 异常**：当模型的 `_no_split_modules` 出现部分解析失败时（例如 Qwen3.5/Qwen3-Next），FSDP 会直接抛出异常。（[Issue #6289](https://github.com/verl-project/verl/issues/6289)）
    *   **VLM SFT RoPE 崩溃**：Micro-batch 共享相同 seq_len 时导致嵌套张量维度翻转。（[Issue #6073](https://github.com/verl-project/verl/issues/6073)）
    *   **vLLM 后端 FP8 不生效问题**。（[Issue #5683](https://github.com/verl-project/verl/issues/5683)）

## 4. 关键 PR 进展
今日的 PR 动态展现了项目在 Agent 化、国产化硬件适配及系统健壮性上的发力：

*   **Agent 框架与多轨迹支持**
    *   **实验性 Agent 框架落地**：引入了面向多轮 Agent 风格 Rollout 的新抽象和网关运行时。（[PR #6299](https://github.com/verl-project/verl/pull/6299)）
    *   **全异步管道多轨迹支持**：在 Agent loop 中支持单次 Rollout 输出多条轨迹。（[PR #6271](https://github.com/verl-project/verl/pull/6271)）
*   **核心训练稳定性修复**
    *   **修复 Ulysses SP 非连续内存视图问题**：确保 `position_ids` 在 `all_gather` 操作前是连续的，避免严重异常。（[PR #6304](https://github.com/verl-project/verl/pull/6304)）
    *   **修复 FSDP Distillation KeyError**：补全了 `use_remove_padding=False` 路径下的 distillation top-k 处理逻辑。（[PR #6303](https://github.com/verl-project/verl/pull/6303)）
    *   **Resume 逻辑优化**：修复当断点恢复的步数已经达到 `total_training_steps` 时仍会多跑一步的泄漏问题。（[PR #6232](https://github.com/verl-project/verl/pull/6232)）
*   **Ascend NPU 生态补强**
    *   **添加 Ascend NPU 技能包**：使开发者能通过 Agent 在 Ascend NPU 上端到端处理环境准备、数据准备等完整训练流程。（[PR #6301](https://github.com/verl-project/verl/pull/6301)）
    *   **文档重构与脚本适配**：重构了精度指南和 Docker 构建文档（[PR #6298](https://github.com/verl-project/verl/pull/6298)），并针对 NPU 重构了相关训练脚本（[PR #6285](https://github.com/verl-project/verl/pull/6285)）。
*   **架构与依赖解耦**
    *   **Qwen 原生支持**：为 FSDP/TRL 和 Megatron/MCore 实现了 Qwen 3.5 架构作为 Value 模型的原生支持。（[PR #6279](https://github.com/verl-project/verl/pull/6279)）
    *   **重构与清理**：移除了过时或重复的插件入口点（如 curriculum sampler、部分 tool 实现），精简了代码库。（[PR #6302](https://github.com/verl-project/verl/pull/6302)）

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **前沿 RL 架构的迅速迭代**：项目不仅在传统的 PPO/GRPO 上进行深度性能优化，更是快速拥抱 RL 与 Agent 结合的趋势，实验性地引入了 Agent framework 和 multi-trajectory 支持，走在了 LLM 后训练范式演进的前沿。
2.  **深度的软硬件全栈覆盖**：在 NVIDIA 显卡上推进 Ulysses 序列并行、FlashAttention 和低精度（FP8）训练的同时，项目正在大力攻坚 Ascend NPU（华为昇腾）的底层兼容性与算力释放，这对于追求算力多样化和国产化替代的企业级用户至关重要。
3.  **顶配模型的支持速度**：从架构适配到 Bug 修复，项目紧密跟随如 Qwen 3.5 / Qwen3-Next 等最新一代开源大模型，确保社区能在第一时间将其与最先进的分布式训练策略（FSDP2、Megatron）结合并投入生产。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 RL 开源生态日报摘要（2026-05-10）：

### 1. 今日速览
过去 24 小时，Open Instruct 仓库整体保持平稳。无新增 Issues 和版本发布，但社区提交了一项关键的数据处理 Bug 修复 PR。该 PR 解决了混合数据集处理逻辑中的断言验证时序问题，对于依赖多数据集进行 RLHF 对齐的开发者具有重要意义。
- GitHub: [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 2. 版本发布
- **最新 Releases**: 过去 24 小时无新版本发布。

### 3. 重点 Issues
- **最新 Issues**: 过去 24 小时无新增或更新的 Issue（0 条）。

### 4. 关键 PR 进展
- **PR #1674 [OPEN] Fix combine_dataset asserting splits count before list-to-dict conversion**
  - **作者**: Chessing234
  - **链接**: [allenai/open-instruct PR #1674](https://github.com/allenai/open-instruct/pull/1674)
  - **技术摘要**: 该 PR 修复了 `combine_dataset` 函数中的逻辑缺陷。该函数支持 `dict` 或 `list` 格式的 `dataset_mixer` 输入（例如列表格式 `['d1', '0.5', 'd2', '0.5']`）。原代码中，用于验证数据集拆分（splits）数量的断言操作发生在列表转换为字典**之前**。由于数据结构未转换，基于字典长度的断言逻辑会导致列表输入下的代码崩溃。此修复优化了数据加载阶段的容错性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **RLHF 数据工程的核心基础设施**：在 LLM 对齐阶段，数据配比是决定 Reward Model 与 RLHF 策略表现的关键。`dataset_mixer` 模块直接负责处理不同权重的高质量偏好数据集。
- **Pipeline 稳定性的持续维护**：像 PR #1674 这样的边缘场景修复，表明项目团队和社区正在持续优化底层数据加载器的鲁棒性。对于需要构建大规模、自动化 RL 训练流的工程师而言，Open Instruct 提供了透明且高可靠性的数据处理及 SFT/RLHF 脚本集，是复现先进对齐技术不可或缺的参考基座。

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

以下是为您生成的 Gymnasium 项目 2026-05-10 RL 日报摘要：

# Gymnasium RL 生态日报 (2026-05-10)

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于低活跃状态，无新增 Issues、无新版本发布。唯一的动态集中在核心 API 的功能增强 PR 上。项目目前处于稳定维护与渐进式迭代阶段。

### 2. 版本发布
* **无**：过去 24 小时内未发布新版本。

### 3. 重点 Issues
* **无**：过去 24 小时内未产生或更新任何 Issue。这表明当前 API 接口稳定，未出现显著阻断性 Bug 或高频争议。

### 4. 关键 PR 进展
* **#1514 [OPEN] 更新 Graph 空间以支持任意节点和边空间**
  * **作者**: 2ToTheNthPower
  * **链接**: [Farama-Foundation/Gymnasium PR #1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)
  * **技术摘要**: 该 PR 旨在增强 `Graph` 空间（`spaces.Graph`）的表达能力，使其能够接受任意的节点和边空间。具体而言，现已支持将 `Dict` 和 `Tuple` 空间作为底层表示。
  * **核心动机**: 突破原有同构图空间的限制，提供对**异构图**及特征字典等复杂拓扑数据结构的原生支持。这对于处理具有多维度、多类型特征的图神经网络（GNN）强化学习环境至关重要。
  * **当前状态**: 核心功能已实现，但尚需进一步扩展以兼容 `Text`、`Sequence` 乃至嵌套的 `Graph` 等更复杂的数据类型。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管短期内数据平稳，但 Gymnasium 依然是整个深度强化学习（DRL）生态的底层基石（事实上的 API 标准制定者）。今天追踪的 **PR #1514** 释放了一个明确的技术信号：**复杂结构化输入正在成为 RL 环境设计的新常态**。
1. **底层架构的前瞻性**：支持异构图和复合特征空间（`Dict`/`Tuple`），意味着未来 RL 环境能更无缝地对接复杂的现实世界系统（如多智能体网络、分子结构、交通路网等）。
2. **生态基石的虹吸效应**：几乎所有主流 RL 算法库（如 Stable-Baselines3, CleanRL, Ray RLlib）都依赖 Gymnasium 的 API 标准。Gymnasium 在核心数据类型（如 `Space`）上的每一次扩展，都将直接决定下一代 RL 算法能处理怎样的状态空间。持续关注其 PR 动态，能够提前预判 RL 基础设施的演进方向。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>