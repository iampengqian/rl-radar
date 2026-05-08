# RL 开源生态日报 2026-05-09

> 生成时间: 2026-05-08 22:16 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL）开源生态正处于从“单轮指令对齐”向“复杂智能体（Agent）与全模态对齐”演进的关键期。以 `verl`、`AReaL` 为代表的基础设施项目正在将重心转移至千卡级分布式集群的工程鲁棒性上；而 `TRL`、`Open Instruct` 等项目则在算法侧加速探索复合训练流（如 GKD+GOLD）与底层张量计算的极致优化。与此同时，`Gymnasium` 和 `rl_games` 等经典 RL 库在夯实 Python 类型系统与训练生命周期控制等基础体验。整体生态呈现出强烈的“向上支持复杂 Agent 闭环，向下死磕异构算力与底层显存调度”的双向收敛特征。

## 各项目活跃度对比
以下为 2026-05-09 各主要 RL 项目的核心数据指标与动态信号概览：

| 项目 | Issues | PRs | Releases | 信号 |
|---|---|---|---|---|
| **verl** | 12 | 36 | 0 | 极度活跃。向全模态 Agent 迈进，主攻 NPU 适配与底层混合部署通信优化。 |
| **AReaL** | 1 | 23 | 0 | 高度活跃。大规模分布式调度重构（K8s），引入前沿 Muon 优化器。 |
| **Open Instruct** | 0 | 12 | 0 | 核心重构。全面弃用 HF Trainer，基于 OLMo-core 底层重构 GRPO 并修复严重注意力机制 Bug。 |
| **TRL** | 2 | 8 | 0 | 稳步迭代。发力复合后训练流，重点修复 ZeRO-3 与显存泄漏等生产级暗坑。 |
| **ROLL** | 3 | 4 | 0 | 阶段收敛。死磕 H200 集群大规模 RLVR 训练的 LoRA 同步与恢复稳定性。 |
| **ROCK** | 1 | 4 | 1 | 发布 v1.7.0。聚焦 Agent 交互工程化，引入 Nacos 动态配置与轨迹蒸馏指南。 |
| **slime** | 5 | 1 | 0 | 高频排雷。大量处理 Colocated 与 Offload 模式下的回归 Bug，适配最新 Qwen3。 |
| **rl_games** | 1 | 1 | 0 | 维护更新。新增自定义训练中断回调机制（stop_fn）。 |
| **Stable Baselines3** | 0 | 2 | 0 | 依赖升级。强制提升 PyTorch 最低版本以修复底层安全漏洞。 |
| **Gymnasium** | 0 | 3 | 0 | 底层重构。引入泛型重构向量化环境，探索支持异构图空间。 |
| *其他项目* | *0* | *0* | *0* | *CleanRL, OpenRLHF, PettingZoo, Tianshou, torchtune 过去 24h 无活跃动态。* |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从单一 RLHF 到复合后训练流**：学术界与工业界不再满足于单一的 PPO/DPO。`TRL` 集成了 GKD（通用知识蒸馏）与 GOLD，`ROCK` 也推出了轨迹蒸馏最佳实践，利用蒸馏辅助强化学习成为提升模型能力的新共识。
2. **Agent 与多模态交互闭环**：大模型 RL 的作用域正在急速扩大。`verl` 提出了 Agent 架构 RFC 并集成 Qwen3-Omni，`AReaL` 开启了多智能体强化学习（MARL） Phase 1，`ROLL` 和 `TRL` 均在着力解决多轮工具调用的训练标准化问题。
3. **奖励机制的泛化**：标量奖励已无法满足复杂对齐需求。`AReaL` 引入结构化奖励与多维奖励聚合，为复杂的多目标对齐提供了基础设施。

**工程与基础设施侧信号：**
1. **极致的大规模分布式容错与通信优化**：当 RL 训练扩展到 H200 等千卡集群时，稳定性成为首要瓶颈。`verl` 提出 NCCL Suspend/Resume，`AReaL` 引入原生 K8s 调度器，`ROLL` 则在紧急修复大规模 RLVR 下的 LoRA 同步失败与恢复崩溃问题。
2. **异构算力与国产硬件（NPU）生态抢位**：摆脱单一 GPU 生态依赖成为国内开源 RL 框架的重点。`verl` 和 `ROLL` 都在进行大量的华为昇腾 NPU 适配工作。
3. **显存与底层算子的深度调优**：`Open Instruct` 和 `slime` 深入到 Megatron/CUDA C++ 层面，解决复杂的 Weight Offload 显存释放、Sequence Packing 中的文档级注意力隔离等底层硬核问题。

## 差异化定位分析

1. **重算力集群基础设施派（verl, AReaL, ROLL）**：这三个项目定位为“生产级大模型 RL 平台”。它们解决的是MoE大模型（如 Qwen3.5 35B-A3B）在千卡规模下的吞吐量、容错恢复和调度问题，受众是拥有大算力集群的工业界团队。
2. **算法与前沿范式探路者（TRL, Open Instruct）**：`TRL` 紧抱 HuggingFace 生态，提供最全、最新的后训练算法（DPO/PPO/GKD等），是算法验证的绝佳试验田；而 `Open Instruct` 则代表了 AI2 等机构“绕开 HuggingFace 繁重抽象，基于原生 FSDP2/OLMo-core 重写极致 GRPO”的硬核工程路线。
3. **Agentic RL 工作流构建者（ROCK）**：`ROCK` 的独特性在于它不局限于模型参数更新，而是将重心放在沙箱环境隔离、MCP 协议集成等 Agent 与环境交互的工程链路上。
4. **经典 RL 基础设施派**：与上述 LLM-centric 的项目不同，`SB3` 和 `Gymnasium` 仍在持续打磨传统 RL 算法的 API 标准与底层类型安全，为非 LLM 类的控制、博弈任务提供坚实的底座。

## 社区热度与成熟度

1. **多极化高活跃中心**：`verl`（36 PR / 12 Issue）和 `AReaL`（23 PR）展现出惊人的社区需求吞吐量，说明围绕 LLM Post-training 的基础设施正处于高速扩张和快速试错期。
2. **高度结构化的社区互动**：在 `Open Instruct`（大规模底层重构无 Issue 纯靠 PR 驱动）和 `slime`（社区用户能精准定位引发 C++ 段错误的具体 PR）中，体现了核心贡献者极高的工程素养和深度参与度。
3. **成熟稳健的基石项目**：`Gymnasium`、`SB3` 和 `rl_games` 呈现出典型的“低频高质”维护特征（如类型系统重构、安全漏洞修复），说明其架构已高度成熟，进入生命周期优化的稳态。

## 值得关注的趋势信号

1. **底层框架去 HF 化趋势**：大模型 RL 训练的显存和通信瓶颈，正在倒逼框架绕开 HuggingFace 的高层抽象。`Open Instruct` 向 OLMo-core 的迁移是一个强烈信号，未来大集群 RL 框架将更倾向于深度定制底层算子与分布式 FSDP/Megatron 机制。
2. **系统级调度回归传统云原生**：`AReaL` 引入 K8s StatefulSet 调度器，`ROCK` 集成 Nacos 配置中心。这表明大模型 RL 训练已经剥离了早期的“脚本拼凑”阶段，正在全面拥抱传统云计算的微服务与分布式调度理念。
3. **推测解码与 Muon 优化器等黑科技下沉**：`AReaL` 在 Rollout 阶段引入 Sglang Eagle 推测解码，并在训练侧引入 Muon 优化器。这些原本停留在学术论文中的前沿优化点，已快速转化为开源 RL 框架的标准特性，将成为下半年提升 RL 集群算力投资回报率（ROI）的关键技术。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-09）：

# ROLL RL 日报摘要 (2026-05-09)

## 1. 今日速览
过去 24 小时内，ROLL 社区保持较高的活跃度，主要聚焦于**大规模分布式训练的稳定性修复**与**多模态模型（Qwen2/3-VL）的生态适配**。
- **Issues 更新**：3 条（含 2 条新增高优 Bug）
- **PR 更新**：4 条（含 3 条新增修复/特性）
- **新版本发布**：0 个

---

## 2. 版本发布
今日无新版发布。社区目前的主要精力集中在主干分支的稳定性建设和多模态支持上。

---

## 3. 重点 Issues
今日反馈的问题核心集中在分布式 LoRA 同步与多模态数据处理，突显了框架在复杂 RLVR（大规模强化学习）场景下面临的工程挑战。

- **[#436] [Bug] 大规模 RLVR 流水线中的多重稳定性问题（LoRA 同步失败及恢复崩溃）** `[OPEN]`
  - **摘要**：在 H200 集群进行大规模 RLVR 训练时，暴露出影响框架正确性的严重缺陷。主要表现为：使用 LoRA adapters 时参数更新未能正确聚合和同步，以及训练中断恢复机制存在崩溃问题。
  - **链接**：[alibaba/ROLL Issue #436](https://github.com/alibaba/ROLL/issues/436)

- **[#435] [Bug] 训练/推理崩溃：Qwen2/3-VL 缺失 `mm_token_type_ids`** `[OPEN]`
  - **摘要**：集成最新多模态模型 Qwen2-VL / Qwen3-VL 时，因核心库的 Collator 缺少对 `mm_token_type_ids` 的处理，导致数据收集或前向传播阶段发生崩溃。
  - **链接**：[alibaba/ROLL Issue #435](https://github.com/alibaba/ROLL/issues/435)

- **[#411] Error: Qwen3.5-35B-A3B lora sft 保存 checkpoint 报错** `[OPEN]`
  - **摘要**：使用 mcore-adapter 进行 LoRA sft 时，在保存 Checkpoint 环节触发错误。该 Issue 自 3 月底提出后，今日再次有社区讨论更新。
  - **链接**：[alibaba/ROLL Issue #411](https://github.com/alibaba/ROLL/issues/411)

---

## 4. 关键 PR 进展
针对今日暴露的 Issue，社区开发者（尤其是 Wangxiaoxiaoa）迅速提交了对应的修复 PR，同时还推进了异构算力和 Agentic 训练的演进。

- **[#438] fix: 解决分布式稳定性、LoRA 权重同步及恢复崩溃问题** `[OPEN]`
  - **摘要**：针对 Issue #436 的修复。增强了 DeepSpeed 环境下分布式设置的鲁棒性，重点解决了大规模集群中 LoRA 场景的权重同步异常。
  - **关联 Issue**：Fixes #435 (注：根据摘要描述，应为修复 #436 的分布式问题)
  - **链接**：[alibaba/ROLL PR #438](https://github.com/alibaba/ROLL/pull/438)

- **[#437] feat: 支持 Qwen2/3-VL 的 `mm_token_type_ids` 及 3D RoPE 对齐** `[OPEN]`
  - **摘要**：针对 Issue #435 的修复。在 `DataCollatorWithPaddingForMM` 中添加了多模态 token 类型的填充逻辑，并绑定了 Qwen-VL 系列所必需的 3D 旋转位置编码（RoPE）生成方法。
  - **链接**：[alibaba/ROLL PR #437](https://github.com/alibaba/ROLL/pull/437)

- **[#439] fix: 修复 Agentic LR scheduler 在多轮对话下的预算耗尽问题** `[OPEN]`
  - **摘要**：在 AgentNativeStepEnvManager 中进行 step-level agentic 训练时，LR scheduler 会提前耗尽 step budget，导致学习率在训练中途降至 0。该 PR 重新计算了优化器步数以适配 multi-turn chunks。
  - **链接**：[alibaba/ROLL PR #439](https://github.com/alibaba/ROLL/pull/439)

- **[#380] feat: 增加 NPU Megatron 支持** `[OPEN]`
  - **摘要**：使 ROLL 框架能够在华为昇腾 NPU 设备上运行。涉及平台检测优先级调整及接入 Megatron-Core 后端，持续推进 RL 训练的软硬件国产化替代。
  - **链接**：[alibaba/ROLL PR #380](https://github.com/alibaba/ROLL/pull/380)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
结合今日的数据与代码演进，ROLL 项目在当前 LLM/RL 开源生态中具备以下核心卡位优势：

1. **攻克大模型 RLVR 落地难点**：从 Issue #436 可以看出，项目正直接面对 H200 等真实算力集群上的大规模强化学习稳定性挑战。修复分布式环境下的 LoRA 同步和容错恢复，是 RL 算法从“单机跑通”走向“工业级大规模应用”的必经之路。
2. **敏捷跟进多模态与 MoE 前沿**：无论是针对 Qwen3.5-35B-A3B 这种 MoE 架构的适配，还是快速补齐 Qwen2/3-VL 等多模态模型的核心组件（如 3D RoPE 和特定 Collator），ROLL 展现出了极快的社区响应速度和前沿模型支持能力。
3. **向 Agentic RL 和异构算力延展**：PR #439 表明 ROLL 正在深化 Agent 场景下的 RL 训练流控；而 PR #380 则表明其在打破单一 GPU 生态（适配华为 Ascend NPU）上发力。这表明 ROLL 不仅仅是一个 SFT/RLHF 框架，而是致力于成为全栈、多硬件、支持 Agent 演进的底层强化学习基础设施。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026 年 5 月 9 日 ROCK（alibaba/ROCK）开源项目 RL 日报摘要。

---

### 📊 ROCK 项目 RL 生态日报 (2026-05-09)

#### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库活跃度呈上升趋势，共产生 **1 个版本发布**，**4 项 PR 更新**，以及 **1 项 Issue 更新**。项目正处于架构优化与周边工具链（如配置中心、蒸馏范式、MCP协议）快速迭代的高峰期。

#### 2. 版本发布
- **[v1.7.0]** 正式发布
  - **核心变更**：
    1. **安全架构重构**：重构了 Docker 认证的临时目录授权方案，并移除了传统授权方案（[PR #837](https://github.com/alibaba/ROCK/pull/837) by @jinbai340997），显著提升了沙箱环境的安全性。
    2. **文档优化**：精简了 Readme 中的新闻版块，替换为动态更新版块并保留最近 5 个版本信息（by @dengwx2026）。

#### 3. 重点 Issues
- **[#651] [Bug] swe agent sandbox init failed** (状态: CLOSED)
  - **背景**：开发者在使用 SWE-Agent 初始化 ROCK 沙箱时，`ModelService` 遭遇报错导致环境启动失败。
  - **现状**：该问题已于今日更新并关闭，相关问题大概率已通过随后的补丁（如 PR #652 的类型校验修复）得到解决。
  - **链接**：[alibaba/ROCK Issue #651](https://github.com/alibaba/ROCK/issues/651)

#### 4. 关键 PR 进展
今日的 PR 动态涵盖了从底层运行时到上层范式的多个关键维度：

- **[#889] [OPEN] feat(scheduler): add dynamic config reloading via Nacos** 
  - **标签**：架构演进
  - **简评**：引入 Nacos 配置中心支持。允许 Scheduler 在运行时动态重载配置而**无需重启服务**，极大提升了 RL 集群在调整超参数或环境配置时的工程可用性。
  - **链接**：[alibaba/ROCK PR #889](https://github.com/alibaba/ROCK/pull/889)

- **[#917] [OPEN] docs: add trajectory distillation best practice guide** 
  - **标签**：算法与最佳实践
  - **简评**：新增基于 Job 系统的**轨迹蒸馏** 最佳实践指南，并提供了在 SWE-bench 上验证过的端到端示例代码。标志着 ROCK 开始在 Agent 数据合成与提纯方向上提供官方级别的工程支持。
  - **链接**：[alibaba/ROCK PR #917](https://github.com/alibaba/ROCK/pull/917)

- **[#652] [CLOSED] fix(sdk): add runtime config type validation in PythonRuntimeEnv**
  - **标签**：稳定性修复
  - **简评**：针对 Issue #651 中提到的沙箱初始化崩溃问题，在 Python 运行时环境（PythonRuntimeEnv）中引入了严格的配置类型校验，从底层 SDK 遏制了因配置不当导致的解析异常。
  - **链接**：[alibaba/ROCK PR #652](https://github.com/alibaba/ROCK/pull/652)

- **[#490] [CLOSED] Add rock-mcp-tool feature - MCP Tool Integration**
  - **标签**：生态扩展
  - **简评**：整合了 **模型上下文协议**。这为 ROCK 构建的 Agentic RL 环境提供了一套标准化的外部工具调用上下文协议，进一步完善了 Agent 与外部环境交互的基础设施。
  - **链接**：[alibaba/ROCK PR #490](https://github.com/alibaba/ROCK/pull/490)

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日的数据和变更日志来看，ROCK 已经跳出了传统 RL 框架“仅提供算法基线”的范畴，正在向 **“面向 Agent 交互的工程化强化学习基础设施”** 演进：
1. **面向 Agent RL 的深度优化**：无论是重构 Docker 沙箱授权（v1.7.0），还是集成 MCP 协议（PR #490），项目都在着力解决 LLM/Agent 在 RL 环境中“安全隔离”与“上下文交互”的痛点。
2. **工业级集群管理能力**：引入 Nacos 动态配置（PR #889）和 Python Runtime 强类型校验（PR #652），表明该项目正在承接大规模、长耗时 RL 训练任务的真实工业级需求。
3. **前沿范式的快速落地**：官方开始整合并提供“轨迹蒸馏”的 end-to-end 最佳实践（PR #917），紧跟当前 LLM 后训练阶段数据合成与提纯的 SOTA 趋势，对研究者和工程师具有极高的实用参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 | 2026-05-09

## 1. 今日速览
过去 24 小时，[slime (THUDM/slime)](github.com/THUDM/slime) 仓库共处理了 **5 条 Issue 更新** 与 **1 条 PR 更新**，无新版本发布。
当前社区动态高度聚焦于 **近期版本/PR 引入的回归问题**，尤其是带有 `offload` 和多角色配置的训练场景，以及新发布的 Qwen3 系列模型适配。

## 2. 版本发布
无。

## 3. 重点 Issues
今日共有 5 条活跃 Issue，其中包含多个影响核心训练流程的 Bug 报告：

- **[Bug] 多角色配置与 SGLang 默认参数导致的初始化崩溃**：[#1896](https://github.com/THUDM/slime/issues/1896)
  在干净的 4GPU 环境下，运行 `test_qwen2.5_0.5B_ppo_critic_only_short.py` 测试用例时，`RolloutManager` 在 `start_engines` 阶段触发 `IndexError`。该问题被指与 PR #1866 引入的多角色 Megatron 配置及过时的 sglang 默认值有关。

- **[Bug] 开启 `offload_train` 时的 CUDA 内存释放报错**：[#1895](https://github.com/THUDM/slime/issues/1895)
  在 PPO 训练的推理后卸载阶段，`actor.sleep()` 调用底层 C++ 代码（`csrc/core.cpp`）时抛出 `CUresult error 1 (invalid argument)`。这被确认为 PR #1856 带来的回归 Bug。

- **[Bug] Checkpoint 保存段错误 (Segfault) 回归**：[#1893](https://github.com/THUDM/slime/issues/1893)
  在 v0.2.4 版本中，启用 colocated mode 和 offload 时，`cudaMemcpyAsync` 期间会出现可复现的段错误导致Checkpoint保存失败。降级至 v0.2.3 后功能正常。

- **[Bug] Qwen3.5-9b 运行属性缺失**：[#1894](https://github.com/THUDM/slime/issues/1894)
  运行 Qwen3.5-9b 模型时，在 `create_training_models` 阶段抛出 `'NoneType' object has no attribute 'megatron_module'` 错误。

- **[Question] Qwen3-VL 模型转化**：[#1863](https://github.com/THUDM/slime/issues/1893)
  社区用户询问如何将 HuggingFace 格式的 Qwen3-VL 视觉语言模型转化为 Megatron 格式，指出当前 `slime/scripts/models` 缺少对应的 VLM 配置参数。

## 4. 关键 PR 进展
- **[#1877 Fix location error in install script](https://github.com/THUDM/slime/pull/1877)** [CLOSED]
  修复了安装脚本中的路径错误，已于昨日关闭。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 展现出了一个正快速迭代且深度整合大模型生态的 RL 框架特征：
1. **前沿模型的高频适配与验证**：Issue 中大量涉及 Qwen2.5、Qwen3、甚至 Qwen3-VL 等最新大语言/多模态模型的接入（如 #1863, #1894），证明该项目紧跟 LLM 上游迭代，是进行大模型 RLHF/Alignment 实践的优质试验田。
2. **复杂的分布式系统工程挑战**：Issue 集中暴露了在 Colocated mode、Weight Offload、Megatron 分布式配置以及多角色（Actor/Critic）初始化下的底层痛点（如 #1893 的 C++ 段错误，#1895 的 CUDA 显存释放异常）。Slime 正在解决大模型 RL 训练中极具门槛的显存管理和分布式调度难题。
3. **活跃的反馈闭环**：社区能够精准定位引发回归问题的特定 PR（如 #1856, #1866），说明项目具备较高的代码审查质量和活跃的开发者互动，框架的稳定性正在社区的极限压测中快速收敛。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-05-09）：

# AReaL 强化学习生态日报 (2026-05-09)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **23 条 Pull Requests** 与 **1 条 Issue**，无新版本发布。项目当前的开发重心高度集中于**底层基础设施优化（如 Kubernetes 调度、HTTP 服务重试机制）**以及**高级训练范式的扩展（如 Muon 优化器、推测解码、结构化奖励）**。

## 2. 版本发布
无最新 Releases。

## 3. 重点 Issues
- **[Feature] 支持纯 Adapter 格式 LoRA 检查点引导 FSDP 训练** ([#1240](https://github.com/inclusionAI/AReaL/issues/1240))
  - **状态**: Open (标记为 Stale)
  - **背景**: 目前 AReaL 已支持保存纯 Adapter 格式的 LoRA 权重，但训练侧缺乏对应的加载路径。该 Issue 旨在补齐这一基础设施缺陷，确保在不同分布式训练任务（FSDP）间平滑迁移 LoRA 状态。

## 4. 关键 PR 进展
今日有大量处于活跃状态的特性与优化提交，主要集中在系统架构、推理引擎与 RL 算法支持上：

### 架构与基础设施优化
- **优化 HTTP 客户端可靠性** ([#1315](https://github.com/inclusionAI/AReaL/pull/1315)): 引入带连接池（最大4096连接）和传输层重试机制的共享 `httpx` 客户端工厂，降低网关和路由器的瞬态故障率。
- **引入 Kubernetes 调度器实现** ([#1316](https://github.com/inclusionAI/AReaL/pull/1316)): 新增基于 StatefulSet 的 K8s 调度器 (`KubernetesScheduler`)，包含 Pod 健康诊断和回滚处理机制，增强集群编排能力。
- **代理路由器与并发初始化** ([#1314](https://github.com/inclusionAI/AReaL/pull/1314), [#1013](https://github.com/inclusionAI/AReaL/pull/1013)): 优化 `RolloutControllerV2` 初始化逻辑，并行启动路由与推理服务器以加速启动；增加 ProxyRouter 统一代理服务管理。

### RL 训练与推理引擎
- **引入 Muon 优化器** ([#1270](https://github.com/inclusionAI/AReaL/pull/1270)): 原生支持 Muon (MomentUm Orthogonalized by Newton-Schulz) 分布式优化器，兼容 FSDP2 与 Megatron 后端，利用正交化步骤提升动量更新效果。
- **支持 Sglang Eagle 推测解码** ([#1176](https://github.com/inclusionAI/AReaL/pull/1176)): 在推理侧引入推测解码算法，旨在显著提升 RL 训练中 Rollout 阶段的生成吞吐量。
- **结构化奖励与多维奖励聚合** ([#1200](https://github.com/inclusionAI/AReaL/pull/1200)): 打破现有的单标量奖励接口限制，支持多维度的结构化奖励输出，对齐复杂的 Multi-reward RLHF 工作流。
- **多智能体强化学习 (MARL) Phase 1** ([#1129](https://github.com/inclusionAI/AReaL/pull/1129)): 建立数学推理任务的数据管道，并提供支持多智能体分组奖励的 MARL 基础设施。

### 权重同步与显存管理
- **同位权重直传更新** ([#999](https://github.com/inclusionAI/AReaL/pull/999)): 针对训练与推理同卡部署场景，绕过 NCCL，实现进程间 Tensor 直接传递，解决单卡通信瓶颈。
- **弹性拓扑与 Megatron 权重同步加速** ([#1188](https://github.com/inclusionAI/AReaL/pull/1188), [#1001](https://github.com/inclusionAI/AReaL/pull/1001)): 增加自动扩缩容感知；消除小规模配置下（pp=1, tp=1）的冗余开销，提升 Megatron 引擎的权重更新与转发性能。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的系统级工程优化**：AReaL 正在突破大模型 RL 训练的 I/O 与调度瓶颈。无论是引入 Kubernetes 原生调度、优化 HTTP 推理网关，还是解决同卡部署的 NCCL 通信痛点，项目正在为超大规模分布式 RL 构建生产级的鲁棒底座。
2. **前沿算法的快速工程化落地**：社区正在积极集成学术界的前沿成果。原生支持如 **Muon 优化器** 和 **多维结构化奖励**，表明该项目紧跟 LLM 对齐技术的演进，提供从理论到工程实践的快速转化通道。
3. **完备的 RL 基础设施栈**：从底层的 FSDP/Megatron 分布式适配，到推测解码加速，再到多智能体强化学习 (MARL) 架构的引入，AReaL 提供的不再是单一的训练脚本，而是一套涵盖推理、奖励、训练全生命周期的闭环生态。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (huggingface/trl) RL 日报摘要 - 2026-05-09

## 1. 今日速览
过去 24 小时内，TRL 仓库保持活跃，无新版本发布。社区共更新了 **2 条 Issue** 和 **8 条 Pull Request**。当前开发重心高度聚焦于**大模型蒸馏**、**显存与分布式训练优化（ZeRO-3/Activation Offloading）**以及**工具调用基础设施**的建设。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[#5138](https://github.com/huggingface/trl/issues/5138) [OPEN] Llama-3.2-3B SFT 训练异常**
  - **标签**: 🐛 bug, 🚨 Important
  - **摘要**: 开发者反馈在最新版的 TRL 中，废弃 `DataCollatorForCompletionOnly` 后，对 Llama-3.2-3B-Instruct 进行 SFT 训练时存在效果异常/无法正常训练的情况。该 Issue 已引发 21 条讨论，属于高优先级排查项。

- **[#5460](https://github.com/huggingface/trl/issues/5460) [OPEN] 跨 Chat Template 的 Tool Calling 支持追踪**
  - **摘要**: 核心开发者发起的对 Tool Calling（工具调用）端到端训练能力的基础设施追踪。要求 Chat Template 必须能正确渲染多轮工具调用对话逻辑。这预示着 TRL 正在底层强化 Agent 训练的标准化支持。

## 4. 关键 PR 进展
今日的 PR 集中在修复高级训练流程中的内存泄漏和损失计算错误，以下为核心更新：

**🚀 核心功能与算法优化**
- **[#5725](https://github.com/huggingface/trl/pull/5725) [OPEN] [GOLD] 在 GOLDTrainer 中实现 seq_kd**
  补齐了 `GOLDConfig` 中缺失的序列知识蒸馏 (`seq_kd`) 逻辑。将训练缓冲区细分为 on-policy、seq-kd 等互斥切片，完善了 GOLD 算法的半在线蒸馏能力。
- **[#5723](https://github.com/huggingface/trl/pull/5723) [OPEN] 新增 Falcon Mamba 训练模板**
  为 Falcon Mamba 架构添加了带有生成标记的对话模板，扩大了 TRL 对非 Transformer 架构（如 Mamba）的边界支持。

**🛠️ 关键 Bug 修复**
- **[#5731](https://github.com/huggingface/trl/pull/5731) [OPEN] [GKD] 修复 Liger fused JSD 损失计算错误**
  修复了启用 `use_liger_kernel=True` 时，`GKDTrainer` 默认 `weight_hard_loss=0.5` 导致的训练目标偏离。此 Bug 会 silently 影响蒸馏效果，对 GKD 用户至关重要。
- **[#5592](https://github.com/huggingface/trl/pull/5592) [OPEN] 修复嵌套 vocab_size 导致的属性错误**
  解决了蒸馏和 GOLD 训练器在处理类似 `Qwen3_5Config` 这种嵌套配置（`config.text_config.vocab_size`）时，直接调用 `resize_token_embeddings` 引发的崩溃。
- **[#4693](https://github.com/huggingface/trl/pull/4693) [OPEN] 修复 ZeRO-3 环境下 GKD 训练的 IndexError**
  解决了使用 DeepSpeed ZeRO-3 运行 `GKDTrainer` 时，由于参数协调器追踪队列未及时清理导致的 `pop from an empty deque` 报错。

**⚡ 性能与内存优化**
- **[#5730](https://github.com/huggingface/trl/pull/5730) [OPEN] 修复 CUDA 显存泄漏**
  修复了激活卸载与 BNB 量化反量化缓冲区结合时导致的显存泄漏问题，对长上下文 RLHF 训练的 OOM 预防有实际意义。

**❌ 已关闭**
- **[#5726](https://github.com/huggingface/trl/pull/5726) [CLOSED] [GKD] 修复 seq_kd 浪费 Teacher Forward 显存**
  该 PR 指出当 `lmbda=1.0` 且 `seq_kd=True` 时，Teacher 生成结果被 Student 完全覆盖导致算力白白浪费。目前已被关闭，相关逻辑可能被整合进 [#5725](https://github.com/huggingface/trl/pull/5725)。
- **[#5684](https://github.com/huggingface/trl/pull/5684) [CLOSED] 启用 VLM 分块 NLL loss**
  原计划通过 patch `forward` 方法将 `chunked_nll` 扩展至视觉语言模型 和 MoE 模型，因影响模型家族过多且存在破坏梯度一致性的中高风险，目前已被关闭。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **从基础 RL 进化到复合训练流**：从今日的 PR 密度可以看出，TRL 的核心正在从单一的 PPO/DPO 快速向 **GKD（通用知识蒸馏）+ GOLD（生成式在线学习）** 等复合后训练流水线演进，这正是目前业界提升开源模型能力的共识路径。
2. **解决大模型分布式训练的“暗坑”**：频繁修复 ZeRO-3 参数追踪、显存泄漏、以及嵌套 LLM 配置解析问题，说明 TRL 团队在死磕大模型在实际生产环境中“跑不通”或“算不准”的底层痛点。
3. **为 Agentic RL 打下地基**：Issue #5460 专门探讨了 Tool Calling 的 Chat Template 标准化。在当前大模型向 Agent 进化的大趋势下，TRL 正在将 RLHF 的能力从“文本对齐”延伸至“工具调用与推理对齐”，极具前瞻性。

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

# verl 项目 RL 日报摘要 (2026-05-09)

## 1. 今日速览
过去 24 小时内，verl 项目维持高活跃度。共更新 **12 条 Issues** 和 **36 条 Pull Requests**，无新版本发布。
当前社区开发重心高度聚焦于**多模态（音频/全双工）支持、Agent 多轮训练、分布式底层通信优化（NCCL/FSDP/Megatron）以及国产 NPU 硬件生态适配**。大量关于 Qwen3.5/Qwen3.6 系列模型的训练缺陷被提交，表明社区正在对最新开源大模型进行高强度的 RLHF 适配与压测。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 重点 Issues
今日的 Issues 集中在底层显存错误、新模型兼容性及架构设计 RFC 上。

*   **[RFC] Agent 架构与轨迹网关抽象** ([#5790](https://github.com/verl-project/verl/issues/5790))
    *   **亮点**: 提出新建 `AgentFramework` 基础抽象类，用于管理 Agent 生命周期和奖励计算，旨在解耦当前紧耦合的代码，获得 18 个赞，是构建复杂 Agent RL 闭环的关键提案。
*   **[RFC] 支持 NCCL Suspend/Resume 机制** ([#6266](https://github.com/verl-project/verl/issues/6266))
    *   **亮点**: 针对 verl 的 Colocated（混合部署）训练模式，提议在 NCCL 空闲时挂起通信以优化资源调度，为后续的弹性调度和容错机制打下基础。
*   **Qwen3.5/3.6 多轮工具调用训练崩溃** ([#6252](https://github.com/verl-project/verl/issues/6252))
    *   **痛点**: 使用 Qwen3.5/3.6 35B-A3B 进行多轮 Agent RL 训练时，模型在后期 step 生成格式异常的工具调用，导致训练崩溃。
*   **Ulysses SP + FlashAttention 显存崩溃** ([#6284](https://github.com/verl-project/verl/issues/6284))
    *   **痛点**: 训练 Qwen3.5 时结合序列并行与 varlen FA 出现 `Illegal Memory Access` 及形状不匹配错误。
*   **异构计算与底层 Bug 反馈**：
    *   Megatron 环境下 GRPO 训练错误 ([#5659](https://github.com/verl-project/verl/issues/5659))
    *   FLA 触发 CUDA 非法内存访问 ([#6281](https://github.com/verl-project/verl/issues/6281))
    *   FSDP 中 `attention_mask` 表现异常 ([#6278](https://github.com/verl-project/verl/issues/6278))
    *   On-policy 设置下 `log_prob` 计算不一致问题 ([#6280](https://github.com/verl-project/verl/issues/6280))

---

## 4. 关键 PR 进展
PR 动态展现了 verl 正在极速扩张其多模态、异构硬件和高级 RL 算法的边界。

*   **多模态扩张：音频数据处理与 Qwen3-Omni 支持**
    *   重构数据管线以支持 Audio 数据 ([#6276](https://github.com/verl-project/verl/pull/6276))。
    *   引入 Qwen3-Omni Thinker 模型支持 ([#6277](https://github.com/verl-project/verl/pull/6277))，补齐了全模态 RL 训练的拼图。
*   **分布式引擎与训练架构优化**
    *   Megatron 引擎支持 MTP (Multi-Token Prediction) ([#5561](https://github.com/verl-project/verl/pull/5561))。
    *   Fully Async 模式支持复用 Trainer Worker Group 进行验证 ([#6076](https://github.com/verl-project/verl/pull/6076))，修复了异步训练下的验证痛点。
    *   修复 Dynamic Context Parallel (DCP) 的 batch 切分与 loss 归一化 Bug ([#5869](https://github.com/verl-project/verl/pull/5869))。
    *   Fully-async pipeline 支持 Agent loop 单次 rollout 多轨迹输出 ([#6271](https://github.com/verl-project/verl/pull/6271))。
*   **生态集成与硬件支持 (Ascend NPU)**
    *   Atropos RL 环境集成 ([#5514](https://github.com/verl-project/verl/pull/5514))，增强了与外部环境交互的灵活性。
    *   新增原生 Qwen 架构作为 Value Model (Critic) 的支持 ([#6279](https://github.com/verl-project/verl/pull/6279))。
    *   NPU 适配：添加 true_on_policy_npu 运行时一致性补丁 ([#6204](https://github.com/verl-project/verl/pull/6204)) 及脚本重构 ([#6285](https://github.com/verl-project/verl/pull/6285), [#6286](https://github.com/verl-project/verl/pull/6286))。
*   **CI/CD 优化**
    *   重构 CI 系统以减轻测试负担 ([#6220](https://github.com/verl-project/verl/pull/6220))，精简 TRT-LLM CI 流程 ([#6275](https://github.com/verl-project/verl/pull/6275))。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **从纯文本 LLM 向全模态 Agent 迈进**：通过集成 Qwen3-Omni 和引入专门的 Agent 生命周期管理 RFC（#5790），verl 正在从传统的“指令微调框架”进化为支持多模态、工具调用、多轮交互的**复杂 Agent 基础设施**。
2.  **深水区的系统级优化**：目前社区的精力正攻克极大规模模型（如 35B-A3B MoE）训练时的序列并行（Ulysses SP）、上下文并行（DCP）、异步/混合部署调度（NCCL Suspend/Resume）等硬核底层问题，这些是构建下一代低延迟、高吞吐 RLHF 平台的基石。
3.  **极强的异构计算包容性**：不仅巩固了在 NVIDIA 生态（H100/H20 + vLLM + Megatron）的领导力，项目还在大力推动对 Ascend NPU（基于 mindspeedmm）的深度适配，提供了跨越不同底层硬件的 RL 开源解决方案。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-05-09)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue、无新版本发布，但产生了高达 **12 条 Pull Requests**（10 Open, 2 Closed）。PR 活动高度集中，均由核心贡献者 `finbarrtimbers` 发起，核心主线非常明确：**全面重构并强化 OLMo-core 架构下的 GRPO（Group Relative Policy Optimization）训练流，使其在底层性能和功能上对齐原有的 HuggingFace 参考实现（`grpo_fast.py`）**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。项目的推进目前完全以高度结构化的 PR 驱动。

## 4. 关键 PR 进展
今日的 PR 变更可精确划分为三个关键领域：GRPO 核心训练流重构、底层张量与注意力机制修复、以及 Beaker 集群基础设施优化。

### A. GRPO OLMo-core 功能对齐与重构
- **[PR #1672](https://github.com/allenai/open-instruct/pull/1672) [OPEN]**: 为 OLMo-core 的 `grpo.py` 补齐 `grpo_fast.py` 的关键功能，引入 `EvalCallback` 进行评估调度，并添加了 checkpointer 和 schedulers 支持。
- **[PR #1669](https://github.com/allenai/open-instruct/pull/1669) [OPEN]**: 纯重构代码提取。将 `maybe_evaluate` 从 `grpo_fast.py` 移至 `grpo_utils.py`，消除重复的 `calculate_token_counts` 逻辑，为双路径共享评估流做准备。

### B. 注意力机制与张量处理修复
- **[PR #1666](https://github.com/allenai/open-instruct/pull/1666) [OPEN]**: 为 `grpo.py` 增加断点续训检查点支持，并修复了 `mason.py` 中自动覆盖参数的重复追加 bug。
- **[PR #1670](https://github.com/allenai/open-instruct/pull/1670) [OPEN]**: 修复 OLMo-core GRPO 训练中的文档级注意力问题。将打包序列的 `doc_lens` 直接传入模型 forward，解决此前因依赖 HF 格式 `attention_mask` 导致的跨文档注意力计算错误。
- **[PR #1664](https://github.com/allenai/open-instruct/pull/1664) [CLOSED]** & **[PR #1668](https://github.com/allenai/open-instruct/pull/1668) [OPEN]**: 针对 `pack_sequences` 返回的 `response_masks` 数据类型进行修正与优化（Int64 doc-id 映射与 Bool 掩码的转换与查表优化），确保 `lookup_advantages` 的正确映射。
- **[PR #1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN]**: 修复 `grpo.py` 在初始化时的权重同步错误（step-0 weight sync 存在三处独立 bug），并解决 intra-doc / cross-doc attention 不匹配导致 `val/tis_clipfrac` 异常飙升（约 570 倍）的严重问题。

### C. HF 模型导出与基础设施
- **[PR #1671](https://github.com/allenai/open-instruct/pull/1671) [OPEN]**: 重写了 `save_state_dict_as_hf` 流程，并在启动时引入 `verify_can_save_as_hf` 校验，确保 OLMo-core 权重能够无损且一致地导出为 HuggingFace 格式。
- **[PR #1667](https://github.com/allenai/open-instruct/pull/1667) [OPEN]**: 优化 AI2 Beaker 集群 I/O。当输出目录位于共享存储 (`/weka/`) 时，跳过冗余的 `/output` 数据集拷贝。
- **[PR #1673](https://github.com/allenai/open-instruct/pull/1673) [OPEN]** & **[PR #1665](https://github.com/allenai/open-instruct/pull/1665) [CLOSED]**: 清理并重构 `mason.py` 提交脚本，将 `--budget` 设置为可选（默认使用工作区配额），并将预算配额从 `ai2/oe-omai` 迁移至 `ai2/oe-other`。
- **[PR #1663](https://github.com/allenai/open-instruct/pull/1663) [CLOSED]**: 恢复重采样警告的日志 emoji，确保单卡/多卡 GRPO 的正常运行与提示可读性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
当前大模型 RL（特别是 Post-training 阶段）的核心瓶颈正在从算法设计转向**底层算力调度、显存优化以及超大规模分布式训练的工程稳定性**。

Open Instruct 正在进行一次深度的“底层重构”：项目团队没有停留在简单地调用 HuggingFace `Trainer`，而是通过 OLMo-core 和 FSDP2 从头构建 GRPO 训练器（即 `grpo.py` 路径）。今日密集的 PR 提交表明，他们正在解决 RLHF/GRPO 实际落地时最难缠的工程问题——例如 **Packed Sequences (打包序列) 中的 intra-document attention (文档内注意力) 精确隔离**、**异构架构 (vLLM vs DeepSpeed/FSDP) 之间的对数概率计算对齐**，以及**无损的跨框架权重转换与检查点容错**。

对于从事 LLM 强化学习（PPO, GRPO, DAPO 等）的工程师而言，这个项目提供了工业级、高度优化的分布式 RL 训练参考实现。它不仅是一个算法库，更是一个关于**“如何在大规模 GPU 集群上高效且稳定地跑通 RL 训练循环”**的极佳工程范例。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报摘要：rl_games
**日期**: 2026-05-09 | **项目**: [rl_games](https://github.com/Denys88/rl_games)

### 1. 今日速览
过去 24 小时，`rl_games` 仓库保持低频但高聚焦的开发活跃度。社区产生 1 条 Issue 更新与 1 条 PR 更新，核心焦点集中在**自定义训练中断机制**的底层逻辑构建。维护者（Denys88）对社区需求响应迅速，已提交相关代码实现。

### 2. 版本发布
- **最新 Releases**: 无新增版本发布。

### 3. 重点 Issues
- **#348 [OPEN] 增加自定义训练中断机制** | 作者: ASDAlexander77 | 👍: 0
  - **链接**: [Denys88/rl_games Issue #348](https://github.com/Denys88/rl_games/issues/348)
  - **摘要**: 作者指出，当前框架仅支持基于 `reward threshold` 或 `epochs` 数量来终止训练，这无法满足复杂的业务或实验需求。建议引入自定义目标达成后的中断逻辑，使用户能够在自身定义的收敛条件下提前停止训练。

### 4. 关键 PR 进展
- **#350 [OPEN] 新增自定义停止回调** | 作者: Denys88
  - **链接**: [Denys88/rl_games PR #350](https://github.com/Denys88/rl_games/pull/350)
  - **摘要**: 此 PR 直接针对解决 Issue #348 提出。引入了一个可选的 `stop_fn(algo) -> bool` 回调函数，作为对现有 `score_to_win`、`max_epochs` 和 `max_frames` 终止条件的有效补充。
  - **技术细节**: 该机制在每个 epoch 结束时由 rank 0 进行状态校验，并支持多卡训练环境下的状态广播。目前已顺利接入 PPO（连续与离散动作空间）以及 SAC 算法中。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **高频工程痛点的解决**: 现代强化学习实验往往涉及复杂的动态停止策略（如基于评估环境的胜率、特定约束的满足等）。`stop_fn` 的引入补齐了传统 RL 库在这一块的控制粒度，提升了实验调度的灵活性。
2. **维护者高效响应与迭代**: 从 4 月 16 日提出需求（#348）到 5 月 7 日底层核心算法（PPO/SAC）的代码实现（#350），证明了项目维护者依然保持着对核心架构的积极迭代与高水准的技术支持。
3. **原生多卡通信兼容性**: PR 中的实现直接考虑了多 GPU 分布式训练下的广播问题，这体现了该项目在工业级和大规模学术研究中的适用性与鲁棒性。对于需要深度定制训练生命周期的 RL 工程师而言，`rl_games` 依然是一个极其轻量且高效的基础设施选择。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为你生成的 2026-05-09 Gymnasium 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平稳，无新 Issues 提交、无新版本发布。开发重心主要集中于底层类型系统的重构与强化、以及非标准数据结构（如异构图）的扩展支持。核心开发者 `jorenham` 贡献了近期主要的代码提交。

### 2. 版本发布
- **无**。近 24 小时内未发布新版本。

### 3. 重点 Issues
- **无**。过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
当前活跃的 PR 聚焦于 Gymnasium 的类型提示升级及图空间拓展，具体动态如下：

- **[#1577] [OPEN] Generic vector env and vector wrapper types**
  - **作者**: jorenham
  - **摘要**: 引入泛型以重构 `VectorEnv` 及所有相关子类/包装器。该 PR 解决了先前提议（#1575）中的 `TypeVar` 问题，在保持向后兼容的前提下，允许向量化环境支持可选的类型参数。这对于提升下游 RL 算法的静态类型检查能力具有重要意义。
  - **链接**: [Farama-Foundation/Gymnasium/pull/1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)

- **[#1578] [CLOSED] Bump `ty` to `0.0.34` and fix new errors**
  - **作者**: jorenham
  - **摘要**: 尝试将内部依赖 `ty` 从 `0.0.9` 升级到 `0.0.34`。由于最新版本的 `ty` 存在大量误报，该 PR 修复了诸多由类型检查器引发的错误。目前该 PR 已关闭，可能是因为误报问题难以短期内清理或需要调整修复策略。
  - **链接**: [Farama-Foundation/Gymnasium/pull/1578](https://github.com/Farama-Foundation/Gymnasium/pull/1578)

- **[#1514] [OPEN] Update Graph to accept arbitrary node and edge spaces**
  - **作者**: 2ToTheNthPower
  - **摘要**: 自今年 1 月提交后于昨日有更新轨迹。该 PR 扩展了 `Graph` 空间，使其能够接受任意的节点和边空间，核心动机在于支持**异构图**或命名特征字典等复杂数据结构。该特性对于需要处理复杂网络拓扑的 RL 算法（如 Graph Neural Network 结合 RL）至关重要。
  - **链接**: [Farama-Foundation/Gymnasium/pull/1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期无高频的 Issue 反馈和版本迭代，但从 PR 动态可以看出，Gymnasium 正在经历**深度底层重构与现代化演进**：
1. **拥抱现代 Python 类型系统**：通过引入泛型设计来重构向量化环境（PR #1577），Gymnasium 正在强化其 API 的严谨性，这将极大改善主流 RL 框架（如 Stable-Baselines3, CleanRL 等）在 IDE 中的自动补全和静态查错体验。
2. **拓宽环境表征边界**：对异构图空间的支持（PR #1514）打破了传统 RL 环境对标准数组（Box/Discrete）的限制，为复杂的工业应用、交通网络流控及推荐系统等图结构 RL 任务铺平了道路。
作为 RL 生态的事实标准 API，Gymnasium 正在通过这些底层更新巩固其基础设施地位。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报摘要：Stable Baselines3 (SB3)
**日期**：2026-05-09 | **数据源**：DLR-RM/stable-baselines3

---

### 1. 今日速览
过去 24 小时内，SB3 仓库整体活动平稳，无新增 Issue 和版本发布。核心贡献者主要将精力集中在**底层依赖安全性升级**（PyTorch 版本提升）以及**生态协同工具链**（Stable Baselines JAX/SBX）的文档维护上。共有 2 个新的 Pull Request 提交并处于开放状态。

---

### 2. 版本发布
- **无新版本发布**。

---

### 3. 重点 Issues
- **无新增或更新的 Issues**。
*(注：PR #2252 关联并解决了近期由 Dependabot 报告的 Issue #2250)*

---

### 4. 关键 PR 进展

**PR #2252: [OPEN] Bump minimum torch version from 2.3 to 2.8 to address GHSA-887c-mr87-cxwp**
- **作者**: JacopoPan
- **摘要**: 针对 PyTorch 底层依赖的严重安全漏洞 (GHSA-887c-mr87-cxwp) 进行修复。由于下游依赖 SB3 的项目频繁触发 Dependabot 告警，此 PR 将 SB3 的最低 PyTorch 版本要求从 2.3 强制提升至 2.8。
- **标签**: `Security` `Dependencies`
- **链接**: [DLR-RM/stable-baselines3/pull/2252](https://github.com/DLR-RM/stable-baselines3/pull/2252)

**PR #2251: [OPEN] Add changelog for custom rollout buffer class support in sbx**
- **作者**: Trenza1ore
- **摘要**: 完善生态文档与变更日志。补充记录了 `sbx` (Stable Baselines3 Jax) 中新增的“自定义 Rollout Buffer 类支持”特性（关联底层 PR araffin/sbx#90）。
- **标签**: `Documentation` `Ecosystem`
- **链接**: [DLR-RM/stable-baselines3/pull/2251](https://github.com/DLR-RM/stable-baselines3/pull/2251)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **严格的供应链安全响应机制**：从 PR #2252 可以看出，SB3 维护团队对安全漏洞（CVE/Dependabot 告警）的响应非常迅速。通过果断提升核心依赖 版本，确保了工业级及学术级 RL 下游项目的基础运行安全。
2. **统一的 RL 算法基础设施**：虽然 SB3 自身基于 PyTorch，但它与基于 JAX 的 SBX 共享接口设计与社区生态（如 PR #2251 所示）。这种“一次编写，多后端适配”的架构设计，使其成为当前强化学习领域最稳定、最标准的 API 基准之一，极大地降低了研究者和开发者的迁移成本。

</details>