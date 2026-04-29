# RL 开源生态日报 2026-04-30

> 生成时间: 2026-04-29 22:15 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL）开源生态正经历从“单卡算法验证”向“超大规模分布式工业化量产”的深刻转型。从本次监控周期内活跃的 7 个核心项目（verl, TRL, AReaL, slime, ROCK, OpenRLHF, ROLL, Open Instruct）来看，社区核心主阵地已全面围绕 **多模态（VLM）对齐、MoE 架构适配、异构算力兼容以及底层分布式通信重构** 展开。传统的强化学习底层环境库（如 Gymnasium 仅做类型基建）和经典算法库（如 CleanRL, SB3 等传统 RL 框架）处于静默或低频维护状态。LLM/VLM 的 Post-training 基础设施已完全吸纳了当前 RL 开源生态的核心注意力。

## 各项目活跃度对比
*注：以下仅统计 2026-04-30 期间存在实质开发动态的项目，CleanRL、SB3 等无活动项目未列入。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 12 | 36 | 0 | 狂飙突进，全异步架构与异构硬件（昇腾）深度适配，主导 Megatron-FSDP 融合。 |
| **TRL** | 6 | 30 | 0 | 紧贴 HuggingFace 生态上限，死磕多模态大模型长序列带来的 OOM 显存痛点。 |
| **AReaL** | 4 | 11 | 0 | 追求极致吞吐量，大刀阔斧进行底层依赖升级（HF 5.0+），引入投机采样。 |
| **slime** | 3 | 5 | 0 | 极速跟进前沿 MoE 模型，攻克超大规模分布式训练下的 Profiler 稳定性瓶颈。 |
| **ROCK** | 4 | 3 | 1 | 专注大规模环境交互，重构底层沙箱状态机向持久化存储演进。 |
| **ROLL** | 1 | 2 | 0 | 探索打破单节点通信瓶颈的 Ray RDT 权重同步方案，国产算力适配。 |
| **Open Instruct**| 0 | 5 | 0 | 夯实基建，修复 FSDP2+vLLM 原生协同链路的底层致命 Bug。 |
| **Gymnasium** | 0 | 4 | 0 | 沉淀期，集中进行底层 Type Hints 静态类型重构，增强 IDE 友好度。 |

## 共同关注的研究与工程方向

**1. 研究/算法侧信号：**
*   **在线策略蒸馏与极致显存优化**：verl 引入了常量内存消耗的 Nitrobrew 算法（无需实例化巨大的 logit 张量），TRL 推进分块 NLL 损失计算。研究焦点已从单纯的 Accuracy 转向如何在有限显存下跑通超长多模态序列的对齐训练。
*   **新一代优化器与高级采样机制探索**：AReaL 引入最新的 Muon 优化器，slime 在测试 Token Importance Sampling (TIS) 机制。社区正在积极寻找 AdamW 和标准 PPO 之外的算法增量。

**2. 工程/基础设施侧信号：**
*   **脱钩 DeepSpeed，拥抱 Megatron-FSDP 双引擎**：OpenRLHF 提议移除笨重的 DeepSpeed 后端，verl 上线 Megatron-FSDP 训练后端。大型框架正在向更细粒度、更贴合 PyTorch 原生的分布式架构迁移。
*   **异构算力（昇腾 NPU）抢占与适配**：verl、slime、ROLL 均在近期收到了大量关于华为昇腾 NPU 算力支持的诉求或 PR。RL 基础设施正在加速摆脱对单一 NVIDIA GPU 的绝对依赖。
*   **权重同步与生成加速的深度定制**：为解决 Actor-Critic 更新时的通信瓶颈，AReaL 和 ROLL 均在尝试引入 Ray RDT 进行权重同步；同时 AReaL 集成 Sglang Eagle 投机采样以大幅提升 RL 生成环节的吞吐量。

## 差异化定位分析

*   **verl / AReaL / slime**：代表了**“高性能+极致分布式”**的工业级基座流派。它们深入到 Megatron 底层、张量并行（TP/EP/CP）和跨节点通信的深水区，适合千卡级别、百亿/千亿参数 MoE 模型的 RLHF 大规模战役。
*   **TRL / OpenRLHF**：代表了**“生态协同+敏捷算法迭代”**流派。TRL 强绑定 HuggingFace (Transformers/Accelerate/PEFT)，主打代码易用性与前沿模型（如 Qwen3.5-VL）的快速覆盖；OpenRLHF 则是目前兼容多种 RL 算法（DPO/KTO/GRPO）与推理引擎最完善的事实标准。
*   **ROCK / Open Instruct**：更偏向于**“垂直场景与底层管线打磨”**。ROCK 是罕见的专注于 RL 大规模沙箱环境管理的项目，解决 Agent 交互底座问题；Open Instruct 则深耕 AI2 体系内的评估与 FSDP2 稳定性验证。
*   **Gymnasium / PettingZoo** 等传统项目：处于向现代 Python 规范（如完善类型系统）演进的沉淀期，主要提供标准化的 API 壳子，远离当前 LLM 算力军备竞赛的中心。

## 社区热度与成熟度

*   **第一梯队（高频迭代，攻城略地）**：verl（48 个动效）和 TRL（36 个动效）。这两个项目社区响应极快，不仅紧跟最新模型（如 24 小时内密集修复 Qwen3.5 相关问题），且架构重构动作极大，处于产品成熟度与社区活跃度的双高阶段。
*   **第二梯队（硬核深耕，企服导向）**：AReaL、slime、OpenRLHF。它们的活动多为巨型 PR（如整体迁移 megatron-bridge、全量升级依赖），提交者多为内部核心开发者。社区 Issue 常涉及极其底层的 NCCL/Routing 报错，具备高度的工程硬核属性。
*   **成熟稳定期项目**：ROCK、Gymnasium、Open Instruct。主要在进行查漏补缺、状态机重构或类型注解补充，说明其核心架构已相对稳定，进入了代码治理与强固阶段。

## 值得关注的趋势信号

1.  **Qwen3.5 与 MoE 成为新一代“压测石”**：今日多个项目（verl, TRL, slime）的 Bug 报告和修复均围绕 Qwen3.5 展开。特别是 MoE 架构在分布式 RL 训练中的权重切片与显存暴涨问题，是接下来全行业都要面对的工程痛点。
2.  **“异步”与“分离”成为突破 RL 极限的关键词**：从 verl 的全异步训练、AgentLoopManager 解耦，到 AReaL 和 ROLL 对分布式权重同步机制的重构，传统 PPO 中生成与训练串行的瓶颈正在被分布式系统工程彻底打碎。
3.  **RL 训练框架正在向下渗透到“算子与通信级”**：框架之间的竞争已经不再是“支持哪种 RL 算法”，而是“谁的显存控制更好（Chunked NLL/Low-precision）”、“谁的通信调度更优（Ray RDT 绕过单卡瓶颈）”。未来不具备深度底层引擎定制能力的 RL 框架将被快速边缘化。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 生态日报 (2026-04-30)

## 1. 今日速览
过去 24 小时，alibaba/ROLL 仓库维持了平稳的开发迭代。共处理 Issues 1 条，PR 2 条（1 个新增，1 个关闭），无新版本 Releases 发布。当前阶段的开发重心明显聚焦于**底层硬件的异构适配（华为 NPU）**与**分布式训练通信架构的优化（Ray Core RDT 同步）**。

## 2. 版本发布
无。

## 3. 重点 Issues
- **#431 [OPEN] [RFC] Integrate Ray Core RDT for Weight Synchronization**
  - **作者**: dpj135
  - **概述**: 这是一个重要的架构级征求意见（RFC）。当前 ROLL 在训练引擎和推理引擎间的权重同步依赖传统的 `ccl broadcast`，存在单 GPU 源限制（仅 trainer rank 0 参与广播），导致通信效率和扩展性受限。该 Issue 提议集成 Ray Core RDT（Reliable Data Transfer）以重构权重同步机制。
  - **意义**: 若实施，将打破现有的单节点通信瓶颈，对大规模分布式 RL 训练（尤其是 Training/Inference 分离部署模式）的 All-to-All 权重同步性能有显著提升。
  - **链接**: [alibaba/ROLL Issue #431](https://github.com/alibaba/ROLL/issues/431)

## 4. 关键 PR 进展
- **#432 [CLOSED] (feat): tensorboard log in new executor**
  - **作者**: PanAndy
  - **概述**: 为新的执行器（executor）添加 Tensorboard 日志记录功能。该 PR 已在同日完成合并，提升了新架构下的训练可视化能力。
  - **链接**: [alibaba/ROLL PR #432](https://github.com/alibaba/ROLL/pull/432)

- **#428 [OPEN] feat: add npu dockerfile and useage**
  - **作者**: UsernameFull
  - **概述**: 增加了针对华为昇腾 NPU（Atlas 900 A2/A3 PODc）的 `Dockerfile.A2` 构建文件及部署文档。该 PR 旨在打通 ROLL 在国产化硬件上的运行能力，允许用户在 Ascend 硬件上部署 RLVR 等 RL 流水线。
  - **链接**: [alibaba/ROLL PR #428](https://github.com/alibaba/ROLL/pull/428)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **突破通信瓶颈的底层探索**: Issue #431 展示了项目正在向更复杂的分布式底层迈进。在 LLM+RL（如 RLHF/RLVR）背景下，Actor 和 Critic 模型的权重同步是核心痛点，探索基于 Ray RDT 的同步机制展现了该项目对大规模分布式通信的前瞻性优化。
2. **坚定的多硬件/国产化适配**: PR #428 证明 ROLL 正在积极扩展其硬件生态边界。对华为 Ascend NPU 的原生 Docker 支持，意味着项目在应对芯片供应链多样性和国产化算力适配方面具有极高的工程价值。
3. **核心架构的持续演进**: 新 executor 的引入（结合 #432 的 Tensorboard 支持）表明 ROLL 正在进行内部调度核心的重构，以应对日益复杂的 RL 算法编排需求。对于关注 RL 训练框架底层基建的开发者而言，具有极高的参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-04-30 ROCK 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库共处理了 4 个 Issues（2个缺陷，1个增强，1个杂项）和 3 个 Pull Requests。核心开发活动高度聚焦于 **Sandbox（沙箱）模块的监控指标健壮性**及**状态存储架构的升级**，无新版本发布。

### 2. 版本发布
今日无新版本发布。但根据已关闭的 Issue #908 和 PR #909 显示，项目刚刚完成了 `v1.7.1` 版本的版本号抬升与合并工作。

### 3. 重点 Issues
*   **[#914 [OPEN] 支持 SandboxManager 状态机扩展](https://github.com/alibaba/ROCK/issues/914)**
    *   **摘要**: 提议在 `SandboxManager` 中引入沙箱状态机，以支持未来更复杂的沙箱状态流转和扩展。
*   **[#912 [OPEN] Sandbox 指标 `sandbox.count.image` 始终上报 "default"](https://github.com/alibaba/ROCK/issues/912)**
    *   **摘要**: 发现缺陷。当前 `start_async` 异步入口在启动沙箱时未将数据写入内存字典 `self._sandbox_meta`，且进程重启后该字典丢失，导致 BaseManager 收集指标时无法正确获取镜像名。
*   **[#910 [OPEN] Sandbox 指标始终上报默认 user_info](https://github.com/alibaba/ROCK/issues/910)**
    *   **摘要**: 发现缺陷。监控装饰器 `monitor_sandbox_operation` 依赖 `self._redis_provider` 获取用户信息，但现有的 `SandboxManager` 和 `SandboxProxyService` 已重构为仅持有 `self._meta_store`，导致属性获取失败。

### 4. 关键 PR 进展
*   **[#913 [OPEN] fix(metrics): 从 meta_store 而非内存字典读取 sandbox image](https://github.com/alibaba/ROCK/pull/913)**
    *   **摘要**: 修复 Issue #912。移除了脆弱的内存字典 `self._sandbox_meta`，将镜像信息的读取全面重构为从 Redis 支撑的 `self._meta_store.get()` 获取，确保异步调用和进程重启后的指标准确性。
*   **[#911 [OPEN] 修复沙箱 _get_user_info 指标逻辑](https://github.com/alibaba/ROCK/pull/911)**
    *   **摘要**: 修复 Issue #910。对齐了指标收集逻辑与现有的数据存储架构，解决了 namespace、experiment_id 等维度数据上报异常的问题。
*   **[#909 [CLOSED] Bump version to 1.7.1](https://github.com/alibaba/ROCK/pull/909)**
    *   **摘要**: 已合并，完成 v1.7.1 的版本更新。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 在今日的更新中暴露出其在底层架构设计上的一个关键演进：**正在从“内存态管理”全面转向“基于外部存储（Redis/meta_store）的持久化/异步状态管理”**。
*   **工程可靠性提升**：Issue #910 和 #912 揭示了异步和多进程环境下的痛点。RL 训练（尤其是大规模并发环境采集时）极易发生进程重启或调度抖动，ROCK 通过将状态下沉至 meta_store，大幅增强了分布式环境下 metrics 和沙箱生命周期的鲁棒性。
*   **复杂状态控制前瞻**：Issue #914 提出的 Sandbox 状态机机制，意味着该项目正在为更复杂的 RL 环境生命周期（如挂起、恢复、快照等高级环境操作）做底层架构准备。对于需要大规模、高稳定性 Environment 交互的 RL 工程落地而言，这种底层 Sandbox 的重构具有极高的参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime（github.com/THUDM/slime）项目 2026-04-30 强化学习（RL）生态日报摘要：

---

### 1. 今日速览
过去 24 小时内，slime 仓库维持了较高的开发活跃度，无新版本发布。社区共更新了 **3 个 Issues** 和 **5 个 Pull Requests (PR)**。今日核心看点集中在**大规模 MoE 模型（Gemma 4 26B+）的底层适配与性能剖析优化**，以及社区对国产算力（昇腾 NPU）和多框架兼容性的诉求。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
今日的 Issue 主要反映了企业级应用落地和前沿 RL 训练中的痛点：

- **[Bug] Megatron Bridge 兼容性缺失 (Qwen 3.5)**：开发者在对接 Qwen 35 Megatron bridge 时遇到 `ModuleNotFoundError`，表明当前辅助权重转换脚本可能存在模块遗漏或安装路径问题。
  👉 [THUDM/slime Issue #1711](https://github.com/THUDM/slime/issues/1711)

- **[Question] 昇腾 NPU 算力支持诉求 (Qwen 3.5)**：社区用户明确提出在华为昇腾 910B 卡上对 Qwen3.5 系列进行 RL 后训练的需求。这反映了国产算力生态在 RL 训练场景中的迫切性，目前框架对该异构硬件的支持仍在探索阶段。
  👉 [THUDM/slime Issue #1821](https://github.com/THUDM/slime/issues/1821)

- **[Bug] Search-R1 训练的 Policy Collapse 问题 (TIS 机制)**：在启用 Token Importance Sampling (TIS) 的情况下，使用 3B 模型复现 Search-R1 时，训练早期出现策略崩溃并输出乱码。该问题直指 Slime 在特定 RL 采样算法下的训练稳定性隐患，值得核心开发者关注。
  👉 [THUDM/slime Issue #1533](https://github.com/THUDM/slime/issues/1533)

### 4. 关键 PR 进展
今日的 PR 动静很大，核心开发者正在大幅拓宽 slime 的模型支持边界并优化大规模工程可用性：

- **[Feature] Gemma 4 (26B-A4B MoE / 31B Dense) 全面对齐支持**：引入了对 Google 最新 Gemma 4 架构（包含 MoE 和 Dense 版本）的完整支持。涵盖了 HF 与 Megatron 的权重转换、重计算及各种 TP/PP/DP/CP/EP 并行策略的校验测试。这是 slime 保持对前沿大模型极速跟进的标志性 PR。
  👉 [THUDM/slime PR #1855](https://github.com/THUDM/slime/pull/1855)

- **[Feature] 大规模 MoE 的 Profiler 内存优化**：针对 26B+ 参数级别的超大 MoE 模型，重构了 `torch.profiler` 的默认配置。解决了在真实 RL 负载下，由于 Trace 数据未及时 flush 导致的 Host 侧 OOM（内存溢出）问题，大幅提升了大规模 RL 训练的可观测性。
  👉 [THUDM/slime PR #1879](https://github.com/THUDM/slime/pull/1879)

- **[Fix] 修复 PPO Value Head 权重加载 Bug**：快速合并修复了 PPO 算法中 Value Head 的加载逻辑错误，保障了 RLHF/PPO 链路的正确性。
  👉 [THUDM/slime PR #1878](https://github.com/THUDM/slime/pull/1878)

- **[Maintenance] 基础设施与依赖升级**：包含将推理引擎 SGLang 升级至 `v0.5.10.post1` ([PR #1874](https://github.com/THUDM/slime/pull/1874))，以及修复安装脚本的路径错误 ([PR #1877](https://github.com/THUDM/slime/pull/1877))。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **对前沿大模型（尤其是 MoE 架构）的极速工程响应**：从 Gemma 4 26B MoE 的支持（PR #1855）可以看出，slime 团队在处理 HF↔Megatron 的底层权重转换及多维张量并行（TP/EP/CP）上具备深厚的技术积累，这解决了 RL 社区在微调最新开源大模型时“等框架适配”的痛点。
2. **直击大规模 RL 训练的工程瓶颈**：针对千亿/数百亿参数模型 RLHF 过程中普遍存在的性能分析难题（Host OOM），主动提供更安全的 Profiler 默认方案（PR #1879），说明该项目正在经历真实且严苛的工业级大模型训练场景的打磨。
3. **生态兼容性的横向扩张**：社区对昇腾 NPU 的支持诉求（Issue #1821）和 Search-R1 算法的深度测试（Issue #1533），证明 slime 正在从一个基础的训练框架，逐步演变为承载多种底层算力、融合多种前沿 RL 算法（如 TIS）的综合性平台。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-04-30 RL 日报摘要：

# AReaL 强化学习生态日报 (2026-04-30)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高频迭代，共产生 4 条 Issues 更新与 11 条 PR 更新（其中包含多项已合入的修复与重构）。当前项目重心明显聚焦于**底层引擎的分布式支持（Ray RDT、Megatron、ZERO1）**、**依赖库大版本升级（Transformers 5.0+）** 以及**前沿模型架构（Qwen2.5-VL、Muon 优化器）**的适配。

## 2. 版本发布
过去 24 小时内无新版本发布。但通过 PR #1206 的进展可以看出，社区正在为 4 月底的依赖大版本升级周期做代码冲刺。

## 3. 重点 Issues
- **[RFC] 引入 Ray Core RDT 进行权重同步** ([#1243](https://github.com/inclusionAI/AReaL/issues/1243))
  提议在 `areal/experimental/` 目录下集成 Ray RDT 后端用于模型权重的同步更新，该方案不会破坏 AReaL 1.0 的遗留 API，是提升分布式权重更新效率的重要尝试。
- **[Feature] 迁移至 `megatron-bridge` 依赖** ([#1260](https://github.com/inclusionAI/AReaL/issues/1260))
  为了兼容最新的 vLLM、SGLang 以及 `transformers 5.0+`，计划将核心 Megatron 集成库从 `mbridge` 迁移至 `megatron-bridge`。这是打通最新 LLM 生态的关键前置需求。
- **[Bug] GRPO 训练在 vLLM 下不稳定/崩溃** ([#1290](https://github.com/inclusionAI/AReaL/issues/1260))
  开发者报告在 GSM8K 数据集上进行 GRPO 算法强化训练时，SGLang 推理引擎表现稳定，但 vLLM 会出现训练崩溃。该 Issue 目前已确认为可稳定复现的 Bug。
- **[Feature] 引入工厂模式重构引擎实例化** ([#1168](https://github.com/inclusionAI/AReaL/issues/1168))
  请求为 `FSDPEngine` 和 `RemoteSGLangEngine` 添加工厂类方法（factory classmethod），以替代当前直接从 YAML 配置文件构建实例的旧模式，提升 API 的易用性。

## 4. 关键 PR 进展
### 核心架构与引擎重构
- **大版本依赖全面升级** ([#1206](https://github.com/inclusionAI/AReaL/pull/1206)): 将 Megatron-core、SGLang、vLLM 和 Transformers 拉升至 2026 年 4 月发布周期的最新版本，修复了大量底层破坏性 API 变更（High Priority）。
- **支持 Qwen2.5-VL 的 Megatron 训练** ([#1281](https://github.com/inclusionAI/AReaL/pull/1281)): 成功在现有 `MegatronEngine` 中增加了对多模态大模型 Qwen2.5-VL 的支持，已在 H100 上完成端到端验证（支持 TP/PP/CP 并行），状态已合入。
- **统一服务控制器配置** ([#1265](https://github.com/inclusionAI/AReaL/pull/1265)): 合并了实验性的 Agent 和推理控制器配置，移除了冗余模块，并将 `RolloutControllerV2` 接入训练管线，简化了系统架构。

### 算法与分布式性能优化
- **Archon 架构 ZERO1 DTA 实现** ([#1287](https://github.com/inclusionAI/AReaL/pull/1287)): 为 Archon 模型添加了仅数据并行（DP-only）路径下的 ZERO1 变体 DTA 接线逻辑，并对变长注意力 API 进行了对齐。
- **Muon 优化器支持** ([#1270](https://github.com/inclusionAI/AReaL/pull/1270)): 正在进行中的 WIP 特性，旨在引入最新的 Muon 优化器算法。
- **Megatron 推理引擎路由重放** ([#1207](https://github.com/inclusionAI/AReaL/pull/1207)): 为 Megatron 引擎增加了 Router Replay 功能。
- **支持 Sglang Eagle 投机采样** ([#1176](https://github.com/inclusionAI/AReaL/pull/1176)): 通过集成 Eagle 算法支持投机采样，旨在大幅提升 RL 过程中的生成速度。

### 关键缺陷修复
- **Transformers 5.0 API 兼容性修复** ([#1280](https://github.com/inclusionAI/AReaL/pull/1280)): 修复了 `transformers>=5.0` 中 `apply_chat_template` 返回类型变更（从 List 变更为 Dict）导致的系统全局报错。
- **修复 Megatron LR 衰减步数计算 Bug** ([#1289](https://github.com/inclusionAI/AReaL/pull/1289)): 解决了因对 `lr_decay_steps` 错误减去 `warmup_steps` 导致的余弦学习率调度失效问题。
- **修复 Megatron 梯度累计 Bug** ([#1273](https://github.com/inclusionAI/AReaL/pull/1273)): 补偿了 Megatron Core 在流水线并行中将 loss 除以 `num_microbatches` 的行为，确保梯度更新的数学正确性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在迅速从一个单纯的 RL 算法框架，演变为**面向超大规模 LLM/VLM 的高性能强化学习底座**。基于今天的开发动态，其核心壁垒体现在：
1. **极致的工程化与前沿兼容性**：在面对 `transformers 5.0+` 这种具有破坏性更新的底层依赖时，项目展现出极快的响应速度（PR #1206, #1280）。同时，其对 `Ray RDT`、`Megatron` 及 `ZERO1` 等分布式技术的深度整合，直击 LLM RL 训练中的显存与通信瓶颈。
2. **多模态与推理引擎的解耦生态**：项目不仅在推进文本模型，已将 RL 能力平移至视觉语言模型（Qwen2.5-VL PR #1281）；并且在推理后端上同时兼容 SGLang 和 vLLM，并开始引入 Speculative Decoding（Eagle PR #1176），这表明项目追求的是极致的训练吞吐量。
3. **算法与底层的协同探索**：除了系统层面的重构，项目紧跟 AI 算法前沿，正在集成 Muon 等新一代优化器，并在积极排查不同后端在 GRPO 等高级 RL 算法上的数值稳定性（Issue #1290）。这种“系统级优化+算法级创新”的双轮驱动，使其成为目前开源 RL 生态中极具技术深度和实战价值的项目。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-30 RL 日报摘要。

---

# 🤖 Hugging Face TRL 项目日报 (2026-04-30)

## 1. 今日速览
过去 24 小时内，TRL 仓库展现了极高的开发活跃度。共处理 **6 条 Issues**（3 开放，3 关闭）和 **30 条 Pull Requests**（含大量历史积压 PR 的集中关闭与推进）。虽然今日无新版本发布，但核心开发者 `qgallouedec` 提交了多个针对**大语言模型(LLM)与视觉语言模型(VLM)在 SFT/RLHF 训练中的底层损失计算及显存优化**的重磅 PR。项目正处于打磨多模态强化学习支持与底层架构重构的快车道。

---

## 2. 版本发布
**无新版本发布** (Latest releases: None)

---

## 3. 重点 Issues

- **[OPEN] GRPO Trainer + PEFT + 梯度检查点冲突**：用户报告在使用 GRPOTrainer 进行强化学习时，同时开启 PEFT (LoRA) 和梯度检查点会导致训练失败。这是 RLHF 计算显存优化的一个典型痛点。
  链接: [huggingface/trl Issue #3089](https://github.com/huggingface/trl/issues/3089)
  
- **[OPEN] CI 频繁因 CUDA OOM 失败**：测试集群中的 `TestDPOTrainer::test_train_toolcall_data` 测试用例经常触发显存溢出错误，反映了工具调用场景下序列长度对显存的压力。
  链接: [huggingface/trl Issue #5207](https://github.com/huggingface/trl/issues/5207)

- **[OPEN] 视觉模型(VLM)与 Liger-kernel 的兼容性问题**：在 `transformers v5.3.0` 环境下结合 `liger-kernel` 训练 GLM-4V、Qwen2-VL 等多模态模型时，抛出多余的 `mm_token_type_ids` 参数错误。
  链接: [huggingface/trl Issue #5216](https://github.com/huggingface/trl/issues/5216)

- **[CLOSED] Qwen3.5-9B SFT Tokenization 错位问题**：修复了 SFT 训练中 Tokenized prompt 与 completion 拼接时的对齐不匹配问题。
  链接: [huggingface/trl Issue #5213](https://github.com/huggingface/trl/issues/5213)

---

## 4. 关键 PR 进展

### 🚀 核心功能与性能优化
- **[OPEN] 在 SFT 中引入 VLM 的分块 NLL 损失计算**: 进一步释放 VLM 在监督微调时的显存占用，避免 OOM。
  链接: [huggingface/trl PR #5684](https://github.com/huggingface/trl/pull/5684)
- **[OPEN] 在 SFT 中为 PEFT 启用分块 NLL 损失**: 结合 PEFT 进行显存优化，与上述 VLM 优化共同构成了 SFT 显存优化的闭环。
  链接: [huggingface/trl PR #5676](https://github.com/huggingface/trl/pull/5676)
- **[CLOSED] DPPO 支持与 Online DPO 架构重构**: 引入深度 DPPO 支持，并将 Online DPO 重构为 `GRPOTrainer` 的子类，以复用 vLLM 的批量生成能力。
  链接: [huggingface/trl PR #5065](https://github.com/huggingface/trl/pull/5065), [#4659](https://github.com/huggingface/trl/pull/4659)

### 🛠️ Bug 修复与多模态支持
- **[OPEN] 修复 Distillation/GOLD Trainer 嵌套式 vocab_size 报错**: 修复了 `Qwen3_5Config` 等将 `vocab_size` 嵌套在 `text_config` 中导致的 `AttributeError`。
  链接: [huggingface/trl PR #5592](https://github.com/huggingface/trl/pull/5592)
- **[OPEN] 为 Cohere2 添加 `&#123;&#37; generation &#37;&#125;` 聊天模板标记**: 确保使用 `assistant_only_loss=True` 时能正确生成掩码，提高 SFT 效率。
  链接: [huggingface/trl PR #5675](https://github.com/huggingface/trl/pull/5675)
- **[CLOSED] 修复 GRPO VLM 纯文本 prompt 处理逻辑**: 解决了图像存在时，GRPOTrainer 错误处理字符串类型 prompt 导致的崩溃。
  链接: [huggingface/trl PR #5064](https://github.com/huggingface/trl/pull/5064)

### 🧹 架构重构与代码清理
- **[OPEN] 重构 Tiny-model 生成脚本**: 将原本 437 行的单体脚本拆分为按模型定义的独立模块，大幅提升代码可维护性。
  链接: [huggingface/trl PR #5637](https://github.com/huggingface/trl/pull/5637)
- **[CLOSED] 使用 `is_peft_model` 替换硬编码的 `isinstance`**: 统一使用 Accelerate 的工具函数来识别 PEFT 模型，增强代码健壮性。
  链接: [huggingface/trl PR #5683](https://github.com/huggingface/trl/pull/5683)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击多模态 RLHF 显存痛点**：随着 LLM 向 Vision-Language 模型演进，长图文序列导致 RLHF（尤其是基于生成的 GRPO/DPO 算法）极易遭遇 OOM。TRL 正在积极推进 **Chunked NLL Loss** 和底层 Forward 路径的重构，这是目前开源社区解决大规模多模态对齐训练的最关键基础设施。
2. **紧跟上游生态（Transformers v5+ 与 vLLM 结合）**：从解决 Transformers v5.3.0 的参数报错，到将 Online DPO 重构以原生兼容 vLLM 的生成加速，TRL 确保了其在 LLM 全链路训练框架中的前沿兼容性。
3. **对齐训练细节的极致打磨**：诸如专门处理 `assistant_only_loss` 的 Generation 标记注入、解决 Qwen3 系列的 Tokenizer 错位、以及修复深层嵌套的模型配置，体现了 TRL 在应对当前开源社区快速迭代的复杂模型架构时，具备极强的工程响应与兜底能力。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 生态追踪 (2026-04-30)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库活跃度平稳，无新版本发布。Issue 与 PR 板块各更新 1 条。值得关注的是，社区正在推进一项底层架构级别的重构（移除 Deepspeed 后端），同时暴露了在多卡 PPO 训练初始化阶段与 vLLM 调度相关的兼容性问题。

## 2. 版本发布
- **最新 Releases**：无（过去 24 小时及近期均无新版本发布）。

## 3. 重点 Issues
- **[#1162 [BUG] vllm failed to call `sleep` while initialization](https://github.com/OpenRLHF/OpenRLHF/issues/1162)**
  - **状态**：Open
  - **作者**：cafeii
  - **更新时间**：2026-04-29
  - **摘要**：用户在执行 Ray 多卡 PPO 训练（`train_ppo_ray`，涉及 Actor/Critic/Ref/Reward 多模型分布式部署）时，遇到 vLLM 在初始化阶段调用 `sleep` 失败的报错。该问题通常与 OpenRLHF 在多节点/多 GPU 环境下管理 vLLM 权重同步和显存调度（CUDA Memory 垫片机制）时的后端通信冲突有关，目前在社区中有 2 条跟进讨论。

## 4. 关键 PR 进展
- **[#1226 Replace Deepspeed backend with Automodel](https://github.com/OpenRLHF/OpenRLHF/pull/1226)**
  - **状态**：Open
  - **作者**：hijkzzz
  - **更新时间**：2026-04-29
  - **摘要**：这是一个极具架构性意义的 PR。该提议旨在从底层移除 OpenRLHF 对 Deepspeed 的重度依赖，转而使用原生 HuggingFace `Automodel` 结合其他加速后端进行重构。此举有望大幅降低 RLHF 代码库的维护复杂度，提升与各类新型加速库（如加速版的 vLLM, Megatron 等）的解耦能力与适配灵活性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层架构解耦与轻量化趋势**：PR #1226 证明 OpenRLHF 正在积极剥离笨重的传统分布式训练框架（如 Deepspeed），这反映了当前 LLM 训练生态向模块化、轻量化和底层算力优化（如 PyTorch FSDP 原生支持）演进的明确趋势。
2. **直击 RLHF 核心痛点**：Issue #1162 暴露的 vLLM 调度冲突，折射出 PPO 训练中“模型生成与模型训练”混合调度的典型工程难题。OpenRLHF 持续在第一线解决 vLLM 集成、显存管理和 Ray 调度问题，是生产级 RLHF 实施的最佳试金石。
3. **开源社区事实标准**：作为当前开源社区代码结构最清晰、功能最完整的大模型对齐框架之一，OpenRLHF 对前沿算法（如 DPO/KTO/GRPO 等）和底层推理引擎的跟进速度，使其成为追踪 RL 前沿工程落地的核心风向标。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 `verl` 项目 2026-04-30 的强化学习（RL）生态日报摘要：

### 1. 今日速览
- **Issues 动态**：过去 24 小时新增/更新 12 条。社区聚焦于多模态与 Qwen3.5 模型的适配、异构硬件（昇腾 NPU）的内存与同步支持，以及 Megatron 底层的内存泄漏问题。
- **PR 动态**：过去 24 小时新增/更新 36 条。核心技术风向集中在**全异步训练**、**Megatron-FSDP 支持**、**在线策略蒸馏**以及异构硬件的 patch 修复。
- **Releases**：无新版本发布。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
- **[roadmap] 26Q2 多模态生成与项目总体规划**
  - [Issue #5755](https://github.com/verl-project/verl/issues/5755) 多模态生成 RL 支持已正式迁移至独立仓库 `verl-omni`。
  - [Issue #5836](https://github.com/verl-project/verl/issues/5836) 26Q2 路线图更新，重点涵盖 Megatron FSDP 启用、VLM 性能优化、低精度训练 (MXFP8/NVFP4) 及 Qwen 3.5 LoRA 支持。
- **[bug] Qwen3.5 与异构硬件适配问题**
  - [Issue #6201](https://github.com/verl-project/verl/issues/6201) 基于 Megatron 跑 Qwen3.5-2B 时出现 CPU 内存异常上涨（疑似内存泄漏），而 Qwen3-35B-MoE 无此问题。
  - [Issue #6211](https://github.com/verl-project/verl/issues/6211) 在昇腾 A2 集群上，Routing Replay (R3 模式) 导致 `routed_experts` 大量数据传输并引发 NPU 同步超时。
  - [Issue #6207](https://github.com/verl-project/verl/issues/6207) 昇腾 NPU 设备在进行内存快照采集时 `enable_trace` 未适配。
- **[feature] 内存 Profiler 优化**
  - [Issue #6208](https://github.com/verl-project/verl/issues/6208) 建议在内存快照采集时增加入参控制，以自动清理历史 step 数据，防止快照文件随 step 膨胀，方便 OOM 问题定位。

---

### 4. 关键 PR 进展
- **架构与核心算法突破**
  - [PR #5423](https://github.com/verl-project/verl/pull/5423) **[megatron]** 新增 Megatron-FSDP 训练后端支持，完善大模型 SFT 与 RL 的分布式架构选择。
  - [PR #6194](https://github.com/verl-project/verl/pull/6194) **[algo]** 引入 **Nitrobrew** 算法，实现常量内存消耗的 fused KL 在线策略蒸馏（无需实例化巨大的 logit 张量或通信 top-k）。
  - [PR #6056](https://github.com/verl-project/verl/pull/6056) **[fully_async]** 扩展全异步训练模式，正式支持在线策略蒸馏。
  - [PR #6129](https://github.com/verl-project/verl/pull/6129) **[rollout]** 架构重构，将 `LLMServerManager` 从 `AgentLoopManager` 中解耦，提升 Agent 框架的可替换性。
- **底层性能与内存优化**
  - [PR #6193](https://github.com/verl-project/verl/pull/6193) **[megatron]** 修复大模型 offload 时 2x 峰值宿主机内存占用的回归 Bug，避免 OOMKilled。
  - [PR #6212](https://github.com/verl-project/verl/pull/6212) **[model]** 修复 Qwen3.5/Qwen3.5-MoE 在开启 Ulysses 序列并行 (SP>1) 时的 `contiguous tensors` 崩溃问题。
  - [PR #6210](https://github.com/verl-project/verl/pull/6210) **[fix]** 修复 MoE 模型（如 Qwen-moe）权重更新维度不匹配的报错。
- **生态兼容与 CI/CD**
  - [PR #6203](https://github.com/verl-project/verl/pull/6203) **[rollout]** 增加 vLLM processor-output 多模态数据的桥接支持。
  - [PR #6204](https://github.com/verl-project/verl/pull/6204) **[npu]** 增加昇腾 NPU 训推一致性运行时 patch 包。
  - [PR #6126](https://github.com/verl-project/verl/pull/6126) **[misc]** 重构并清理冗余的 examples 脚本，统一命名与实践规范。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿 RL 算法的工程化落地**：verl 正在快速将复杂的学术概念（如全异步训练、在线策略蒸馏、KL 散度常量内存优化）转化为稳定可用的工程实现，大幅降低了 LLM 强化学习的显存门槛。
2. **深度适配最新旗舰模型**：项目对 Qwen3.5 系列及其 MoE 架构展现出极高的响应速度，快速修复了从内存泄漏到序列并行、权重切片等底层适配问题。
3. **向异构计算与多模态延展**：通过剥离 `verl-omni` 专攻多模态，并在主库持续深耕昇腾 NPU 的兼容性（内存 snapshot、通信同步修复），verl 正在摆脱单一的 NVIDIA GPU 依赖，构建更广泛的软硬件 RL 生态基座。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 生态项目日报：Open Instruct
**日期**: 2026-04-30 | **项目**: [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. 今日速览
过去 24 小时内，项目无新版本发布，无新增 Issues。核心开发重心完全聚焦于底层训练框架的**稳定性修复**与**分布式训练基建优化**，共产生 5 项 PR 进展，主要围绕 FSDP2/vLLM 权重同步、评估脚本环境冲突以及 RL 奖励模型验证函数的逻辑修补。

## 2. 版本发布
**无**。近 24 小时内未推送新的 Release 版本。

## 3. 重点 Issues
**无**。过去 24 小时内项目无新增或更新的 Issue。

## 4. 关键 PR 进展
目前有 5 个活跃 PR，涵盖了从核心分布式训练到底层逻辑的修复：

*   **[#1647 Make checkpointing better](https://github.com/allenai/open-instruct/pull/1647)** | 作者: `finbarrtimbers`
    *   **进展**: 4月29日创建并更新。
    *   **分析**: 致力于改进模型检查点的保存与加载机制，对于长时间运行的 RLHF/GRPO 训练任务而言，鲁棒的 Checkpointing 是容错与断点续训的核心基建。
*   **[#1642 Fixes `grpo.py` so it runs with the native weight sync](https://github.com/allenai/open-instruct/pull/1642)** | 作者: `finbarrtimbers`
    *   **进展**: 4月29日更新。
    *   **分析**: **核心修复**。针对 olmo-core / FSDP2 路径下的 GRPO（组相对策略优化）训练脚本进行重构。修复了底层原生 vLLM 权重传输 API 交互时的三个严重 Bug，特别是解决了 FSDP2 根模块参数导致的 NCCL 非法内存访问问题。这直接提升了 RL 分布式训练的底层稳定性。
*   **[#1644 Fix submit_eval_jobs.py for olmo-eval-internal runs](https://github.com/allenai/open-instruct/pull/1644)** | 作者: `finbarrtimbers`
    *   **进展**: 4月29日更新。
    *   **分析**: 修复了评估脚本中的运行环境依赖冲突。移除了会导致 cu13 wheels 覆盖现有 cu12.8 CUDA 驱动的错误升级，解决了 `CUDA driver too old` 的环境报错。
*   **[#1645 Fix validate_frequency_capital_words treating "around" as exact equality](https://github.com/allenai/open-instruct/pull/1645)** | 作者: `Chessing234`
    *   **进展**: 4月29日创建并更新。
    *   **分析**: 修复了 `if_functions.py` 中奖励验证逻辑的过度严格问题。原代码将带 `"around"` 量词的大写单词词频视为严格的等于（`==`），此修复放宽了约束，使 RL 奖励信号的发放更加合理。
*   **[#1646 fix(if_functions): fix validate_choice operand direction](https://github.com/allenai/open-instruct/pull/1646)** | 作者: `Chessing234`
    *   **进展**: 4月29日创建并更新。
    *   **分析**: 修复了 `validate_choice` 中 `in` 运算符操作数方向颠倒的严重逻辑缺陷。原逻辑错误地判断“文本是否在选项中”（导致长文本必然判定为 False），现已纠正为正确的选项包含检查，直接保障了 RL 选择类任务 Reward 计算的准确性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日无宏观的版本迭代，但高频的底层提交证明了 Open Instruct 正处于**夯实底层训练引擎**的关键阶段：
1.  **打通 FSDP2 + vLLM 原生链路**：PR #1642 表明项目正在深度适配 FSDP2 与 vLLM 的原生权重同步，这是目前大模型 RLHF/在线 RL 训练突破显存和通信瓶颈、实现高效 Scaling 的核心路径。
2.  **精细化 Reward 基础设施**：PR #1645 和 #1646 集中修缮了反馈验证逻辑。在强化学习中，Reward 函数的精准度直接决定了策略模型的收敛方向甚至成败，消灭此类逻辑 Bug 意味着项目在工程化落地上的成熟度正在进一步提升。

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

以下是为您生成的 2026-04-30 强化学习（RL）开源生态日报摘要：

### 📊 RL 开源生态日报：Gymnasium
**日期**: 2026-04-30 | **项目**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

#### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于“静默优化”状态。无新增 Issues 报告，无新版本发布。社区核心贡献者的精力高度集中于底层代码的**静态类型检查与重构**，单日提交了多个针对类型注解的 PR。

#### 2. 版本发布
* **最新 Releases**: 过去 24 小时无新版本发布。

#### 3. 重点 Issues
* **最新动态**: 过去 24 小时内无新增或更新的 Issues。

#### 4. 关键 PR 进展
过去 24 小时 PR 活动主要来自开发者 `jorenham`，集中攻克项目的历史类型警告，目前仍有 3 个 PR 处于待合并状态，1 个已关闭：

* **[#1575] [OPEN] 修复 `wrappers.vector.*` 类型错误并补充缺失注解**
  * **摘要**: 修复了向量包装器子模块中的静态类型问题。重点纠正了 `TypeVar` 的不规范使用（包括未绑定使用、错误的型变以及缺失上限类型参数约束）。
  * **链接**: [Farama-Foundation/Gymnasium PR #1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575)

* **[#1574] [OPEN] 补充 `envs.registration` 缺失的类型注解**
  * **摘要**: 为环境注册模块（`gymnasium.envs.registration`）补充了缺失的类型提示，主要为返回值 `-> None` 的注解。已通过 `pre-commit` 检查。
  * **链接**: [Farama-Foundation/Gymnasium/pull/1574](https://github.com/Farama-Foundation/Gymnasium/pull/1574)

* **[#1573] [OPEN] 修复 `vector.**` 类型错误并补充缺失注解**
  * **摘要**: 针对 `gymnasium.vector.*` 及 `gymnasium.vector.utils.*` 模块的大规模静态类型修复与改进。
  * **链接**: [Farama-Foundation/Gymnasium PR #1573](https://github.com/Farama-Foundation/Gymnasium/pull/1573)

* **[#1571] [CLOSED] 修复 `invalid-parameter-default` 类型错误**
  * **摘要**: 修复了参数默认值相关的类型报错。据此 PR 描述，修复后项目的 `ty` 警告数量已降至 368 个，属于持续类型清理工作的一部分。
  * **链接**: [Farama-Foundation/Gymnasium PR #1571](https://github.com/Farama-Foundation/Gymnasium/pull/1571)

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
虽然今日无功能性更新，但这种**“底层基建级别的类型重构”**正是成熟开源项目的典型特征：
1. **强化 IDE 支持**：全面且严格的静态类型注解（Type Hints）能够极大提升算法研究员和开发者在 VSCode/PyCharm 中的代码补全体验与重构安全性。
2. **鲁棒性保障**：在复杂的多进程/向量化环境交互中，规范的 TypeVar 约束和参数静态检查能有效将运行时错误前置为编译期警告。
3. **生态基石地位**：Gymnasium 是目前 RL 领域事实上的 API 标准。开发者持续投入精力打磨其底层代码质量，意味着所有依赖该接口的 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）在未来将拥有更稳定、易用的标准环境底座。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>