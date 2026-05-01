# RL 开源生态日报 2026-05-02

> 生成时间: 2026-05-01 22:13 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（尤其是 Post-training 阶段）的开源生态正处于**工程深度优化与基础设施重构**的关键时期。从整体动态来看，各项目已度过早期算法 API 的快速构建期，全面进入**拼底层算力适配、显存/通信优化及异构硬件支持**的深水区。传统的经典 RL 环境（如 Gymnasium、SB3）正在向基石型底层维护演进，而应用级生态的焦点已完全被 LLM 的 GRPO、MoE 架构适配及异步 Rollout 等课题占据。

## 各项目活跃度对比
*注：以下统计基于 2026-05-02 24 小时内的公开 GitHub 活跃数据（Issues 包含新增及更新的讨论，PRs 包含新建、更新及合入的动态，Releases 指新增版本发布）。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 4 | 9 | 0 | 迎接大一统调度，发力多后端与异构硬件适配 |
| **AReaL** | 6 | 3 | 0 | 死磕 MoE 与异步系统底层的内存泄漏/路由一致性 |
| **Open Instruct** | 0 | 7 | 0 | 重构 Off-policy 底层，死磕 FSDP2 与 vLLM 权重同步 |
| **slime** | 3 | 2 | 0 | 敏捷跟进 Gemma 4 等前沿模型，引入增量压缩通信 |
| **TRL** | 0 | 4 | 0 | 聚焦 GRPO 算子融合与数值稳定性等价性测试 |
| **OpenRLHF** | 0 | 1 | 0 | 探索去 Deepspeed 化，重构轻量化 HF 原生后端 |
| **Gymnasium** | 0 | 3 | 0 | 代码库进入静默期，专注企业级静态类型重构 |
| **SB3** | 1 | 0 | 0 | 基础 API 沉淀，底层空间映射机制排错 |
| **CleanRL / Others** | 0 | 0 | 0 | 无明显活跃动态 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从 On-policy 迈向 Off-policy 与经验复用**：以 Open Instruct 为代表，正在引入 IcePop 算法和 Replay Buffer 架构。这标志着 LLM RL 训练正在努力打破严格的在线策略限制，试图通过提升样本效率来突破算力成本瓶颈。
2. **GRPO 成为绝对核心，优化算法持续迭代**：GRPO 已取代 PPO 成为各大框架的标配（如 verl、slime、Open Instruct、TRL），目前的焦点转向其高级变种与校正机制（如 TRL 集成的 Vespo 温度参数、双边裁剪）。
3. **前沿优化器与模型架构的零延迟探索**：AReaL 引入了非传统矩阵正交化优化器 Muon；同时，万亿参数级 MoE 架构（如 Mixtral, Gemma 4）的 RL 对齐成为前沿焦点。

**工程/基础设施侧信号：**
1. **训练/推理引擎权重的无缝同步**：在 Actor 位于 FSDP/Megatron 而生成位于 vLLM/SGLang 的架构下，两者的权重同步（尤其是 step-0 和异步模式下）是最大痛点。Open Instruct 和 verl 均在花费大量精力修复相关的致命 Bug。
2. **极致的显存管理与通信压缩**：针对超大模型的 RL 训练，通信与显存开销成为系统性瓶颈。slime 引入了 Delta Compression（增量压缩），AReaL 修复了分布式架构中隐蔽的 RTensor 内存泄漏。
3. **全面解耦 DeepSpeed，拥抱 PyTorch 原生生态**：OpenRLHF 提议移除 Deepspeed 后端转向 HF Automodel，verl 则大力推进 TorchTitan 和 Megatron-FSDP 混合模式。这反映出工业界正试图摆脱沉重的历史包袱，走向更透明的底层控制。

## 差异化定位分析
* **verl & slime**：定位于**大规模异构算力集群的聚合型 RL 基础设施**。它们不仅追求算法实现，更注重多后端兼容、跨节点通信优化及对新发布大模型（Gemma 4）的极速响应。
* **AReaL & Open Instruct**：更偏向**底层系统与算法的深度硬核探索**。AReaL 专注于解决 MoE 架构在异步 RL 下的路由不一致问题（R3 机制）；Open Instruct 则在纯工程层面死磕 FSDP2 与 vLLM 的显存/注意力一致性问题。
* **TRL (HuggingFace)**：定位为**高易用性与算子极致优化的上层封装**。通过与 Liger Kernel 深度绑定，将复杂的 GRPO 校正下沉到算子级，同时保持对最新开源模型（Qwen3）的最快适配。
* **Gymnasium & SB3**：已演变为**环境接口与经典算法的基石底座**。不再参与 LLM 层面的军备竞赛，而是专注于代码的长期维护（如静态类型系统完善）和基础 API 规范的确立。

## 社区热度与成熟度
项目的成熟度直接反映在其 Issue 和 PR 的类型上：
1. **高成熟度基建（Gymnasium, SB3, OpenRLHF）**：社区动态趋于平稳，代码合入谨慎，动态多为静态分析修复、底层依赖重构或基础概念探讨。
2. **高热度实战派（verl, slime）**：Issue 充斥着 CUDA OOM、分布式死锁、多卡权重不一致等“带血”的工业级痛点。这类项目正真刀真枪地在前沿算力集群中打磨。
3. **无活动或低活跃项目**：Tianshou、CleanRL、阿里 ROCK/ROLL 等过去 24 小时内无明显动态，部分项目可能处于功能稳定期或面临来自上述 LLM-native RL 框架的强烈生态挤压。

## 值得关注的趋势信号
1. **异步 Rollout 成为大模型 RL 标配，但工程门槛极高**：几乎所有主流框架都在打通 SGLang、TRT-LLM 的异步生成，但随之而来的（如 verl 暴露的）非法显存访问和架构不一致问题，将成为短期内的主要排雷区。
2. **“去 DeepSpeed 化”暗流涌动**：随着 PyTorch 原生 FSDP2、TorchTitan 等技术的成熟，社区正在重新评估重度依赖 DeepSpeed 的投入产出比，向更加解耦、模块化的原生分布式架构迁移将是下半年的主旋律。
3. **MoE 专用的 RL 机制正在形成独立研究领域**：随着 Mixtral、DeepSeek 及 Gemma 4 的普及，如何解决 MoE 在推理和训练阶段“专家路由”分布不一致的问题（如 AReaL 的 R3 机制），已成为提升大模型 RL 对齐效果的关键破局点。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 🤖 Slime (THUDM) RL 生态日报 - 2026-05-02

## 1. 今日速览
过去 24 小时，Slime 仓库共处理 **3 条 Issues** 和 **2 条 PRs** 更新，无新版本发布。从最新动态来看，社区当前焦点集中在 **Gemma 4 等前沿大模型的支持**以及 **跨引擎/多组件协同训练时的稳定性（权重同步、显存/检查点管理）**。

---

## 2. 版本发布
**无**（近期未推送新 Release 版本）。

---

## 3. 重点 Issues

- **[#1663](https://github.com/THUDM/slime/issues/1663) [OPEN] R3 启用后发生 `httpx.ReadError` 崩溃**
  - **背景**: 在 `glm-4.5-air` 训练中，`RolloutManager` 路由代理在向上游推理服务转发请求时抛出 `httpx.ReadError`。表现为前几个 rollout 步骤正常，随后间歇性崩溃。
  - **分析**: 典型的 vLLM/推理引擎长时间高负载下的连接异常或 upstream timeout，当前已积累 8 条讨论，尚无官方修复。

- **[#1886](https://github.com/THUDM/slime/issues/1886) [OPEN] `--colocate + --save-interval` 模式下 Checkpoint 保存失败**
  - **背景**: 开发者在当前 `main` 分支使用 GRPO 训练，开启 `--colocate` 且设置 `--save-interval 5` 时，首次保存 Checkpoint 触发 `torch.AcceleratorError: CUDA error: invalid argument`。
  - **分析**: 该问题发生在 `#1856` 合入后，疑似与分布式通信/显存释放逻辑（`distributed_c10d`）在 Colocate 模式下的状态冲突有关。

- **[#1885](https://github.com/THUDM/slime/issues/1885) [OPEN] 询问是否支持 Gemma 4 与 Olmo 3**
  - **背景**: 社区用户对最新架构（如 Gemma 4 MoE、Olmo 3）的接入诉求强烈。值得注意的是，该 Issue 的诉求与当前正在进行的 PR 动向（见下文 PR #1855）高度吻合。

---

## 4. 关键 PR 进展

- **[#1806](https://github.com/THUDM/slime/pull/1806) [OPEN] feat: 权重同步的增量压缩**
  - **作者**: nanjiangwill | **上次更新**: 2026-04-30
  - **核心内容**: 参考 Cursor (Composer 2) 和 Fireworks 的前沿实践，在 Trainer 与 Rollout Engine 之间引入 **Delta Compression（增量压缩）** 机制，旨在大幅降低 Actor 模型权重同步时的网络与显存开销。
  - **生态意义**: 这是 RLHF/GRPO 训练向超大规模扩展的关键性能优化。

- **[#1855](https://github.com/THUDM/slime/pull/1855) [OPEN] feat(gemma4): 新增 Gemma4 26B-A4B MoE 与 31B Dense 模型支持**
  - **作者**: leofan-lab | **上次更新**: 2026-05-01
  - **核心内容**: 全面适配 Gemma 4 架构。包含模型结构定义、HuggingFace ↔ Megatron 权重转换、Retool 集成，并附带 10 个单元测试。当前已通过 TP/PP/DP/CP/EP/Sliding Window 等多维度的一致性测试。
  - **生态意义**: 及时跟进业界前沿 MoE 与 Dense 架构，保持框架对最新 SOTA 模型的兼容能力。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **前沿优化技术的落地者**: 通过 PR #1806 引入的 Delta Compression，说明 Slime 并不仅是一个框架封装，而是深入底层探索大模型 RL 训练的通讯与显存瓶颈，积极响应学术界和工业界的最新优化思路。
2. **敏捷跟进最新模型架构**: 在 Gemma 4 等模型发布后极短时间内，社区/核心团队即提交了包含完整 Megatron 转换和多维并行测试的 PR（#1855），展现了极高的工程响应速度。
3. **直击 RL 工程化痛点**: 从 Issues 反馈可以看出，Slime 正在被广泛应用于真实的超大规模 LLM 训练中（如 `glm-4.5-air` 的 R3 训练、Colocate 模式下的显存管理）。这些实战中暴露的 RolloutManager 路由和 Checkpoint 崩溃问题，正是当前 LLM RL 生态中极具代表性的工程挑战，Slime 正在积极解决这些问题。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 开源生态日报 (2026-05-02)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共处理 **6 条 Issues**（3 Open, 3 Closed）和 **3 条 PRs**（2 Open, 1 Merged/Closed），无新版本发布。今天的社区动态高度聚焦于**底层基础设施的内存泄漏修复**以及**推理引擎（vLLM vs SGLang）与 MoE 架构的兼容性与稳定性优化**。

---

## 2. 版本发布
**无最新 Release**。

---

## 3. 重点 Issues

### 🔥 关键稳定性与内存问题
- **[BUG] GRPO 在 vLLM 后端下训练不稳定/崩溃** [#1290](https://github.com/inclusionAI/AReaL/issues/1290) `[OPEN]`
  报告指出，在 GSM8K 数据集上使用 GRPO 算法时，搭配 SGLang 推理运行稳定，但切换至 vLLM 时会出现训练不稳定甚至 Reward 崩溃现象。该 Bug 可稳定复现，暴露了 AReaL 在多推理后端支持上的一致性差异。
  
- **[BUG] 非 DP-head ranks 的 RTensor _storage 无限累积导致 OOM** [#1296](https://github.com/inclusionAI/AReaL/issues/1296) `[CLOSED]`
  社区精准定位了一个严重的内存泄漏问题：在分布式训练中，非 DP-head 的 TrainEngine 进程会无限制地累积 RTensor 的 `_storage` 字典，最终导致 OOM 崩溃。该问题已被提交者通过 PR 快速修复。

### 🛠 架构演进与依赖更新
- **[Feature] 支持通过工厂类方法构造 FSDPEngine 和 RemoteSGLangEngine** [#1168](https://github.com/inclusionAI/AReaL/issues/1168) `[OPEN]`
  提议重构引擎初始化逻辑，弃用 YAML 配置直接解析，改为使用面向对象的工厂模式实例化引擎，以提升代码的扩展性和类型安全。

- **[Feature] 升级 megatron-bridge 以兼容 SGLang 0.5.10+** [#1189](https://github.com/inclusionAI/AReaL/issues/1189) `[OPEN]`
  由于 SGLang 新版强制依赖 `transformers 5.3+`，当前 megatron-bridge 的依赖已显落后，需进行大版本升级对齐。这为后续接入更先进的开源模型铺平道路。

### 📝 社区与文档
- **[Doc] 跨 Config、工作流、LoRA 和 Metrics 的代码/文档不一致问题** [#1165](https://github.com/inclusionAI/AReaL/issues/1165) `[OPEN]`
  自动化审计发现多处文档与实际实现脱节（涉及 Checkpointing、调度器等）。标签包含 `good first issue`，是新手贡献者介入的好机会。
  
- **[Feature] Dr. MAS 多智能体训练框架集成提案** [#1114](https://github.com/inclusionAI/AReaL/issues/1114) `[CLOSED]`
  旨在将多 LLM 智能体训练引入 AReaL 的提案，经过一个月的讨论后已关闭（标记为 Stale）。

---

## 4. 关键 PR 进展

- **[fix(infra)] 修复 RTensor _storage 内存泄漏** - PR [#1297](https://github.com/inclusionAI/AReaL/pull/1297) `[CLOSED]`
  **核心修复**：在非 DP-head 的 `TrainEngine` 进程中拦截并跳过 `RTensor.remotize` 操作，直接返回 `None`。由于 Controller 的 `_collect_results` 过滤器本就会丢弃这些进程的结果，此 PR 消除了无效的数据本地缓存，彻底解决了 Issue #1296 中的 OOM 痛点。

- **[WIP] feat: 引入针对 Megatron 引擎的 Router Replay** - PR [#1207](https://github.com/inclusionAI/AReaL/pull/1207) `[OPEN]`
  **架构创新**：提出 **Rollout Routing Replay (R3)** 机制，专门针对 MoE（混合专家）模型。在异步 RL 训练中，记录推理阶段专家路由的索引，并在训练阶段强制重放。此举有效抹平了 inference 与 training 阶段的路由差异，大幅提升 MoE 模型的强化学习训练稳定性。

- **[WIP] Feature: Muon 优化器支持** - PR [#1270](https://github.com/inclusionAI/AReaL/pull/1270) `[OPEN]`
  集成近期备受关注的 Muon 优化器（基于矩阵正交化），探索超越传统 AdamW 的大模型 RL 对齐范式。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击 MoE 与异步 RL 训练的核心痛点**：
   从 PR #1207 的 R3（Router Replay）机制可以看出，AReaL 并非仅仅在做算法的简单套壳，而是深入到了**大规模异步 RL 系统在 MoE 架构下的底层不一致性**修复，这为万亿参数 MoE 模型（如 Mixtral, DeepSeek 等）的高效强化学习提供了关键的工程基座。
2. **探索前沿优化器与算力提效**：
   引入 Muon 优化器（PR #1270）表明该项目紧跟学术界非传统优化算法的步伐，试图在 LLM post-training 阶段打破收敛瓶颈，提升样本效率。
3. **深度兼容主流开源推理生态**：
   Issue #1290 折射出项目正在经受 vLLM 与 SGLang 这两大主流推理引擎的严苛检验。同时，积极适配 SGLang 0.5.10+ 及 `transformers 5.3`（#1189），确保了整个技术栈能够紧跟开源 LLM 社区的主线演进。
4. **快速响应的基础设施治理**：
   从致命的 OOM Bug（#1296）被发现，到 PR（#1297）提供精准的底层内存拦截修复，展示了项目在分布式系统层面快速的排错与响应能力，反映了极高的工程质量。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (huggingface/trl) RL 生态日报 - 2026年05月02日

## 1. 今日速览
过去 24 小时内，TRL 仓库无新增 Issues、无新版本发布，但合入及更新了 4 个关键 PR。整体动向高度聚焦于 **主流大模型适配（Qwen3）**、**GRPO 训练内核优化** 以及 **底层训练稳定性/等价性测试的加固**。项目正处于底层算子更新与工程鲁棒性提升的静默开发期。

## 2. 版本发布
- **无新版本发布**。最新 Releases 无更新。

## 3. 重点 Issues
- **无新增或更新 Issues**。过去 24 小时社区反馈与 Bug 报告处于静默状态。

## 4. 关键 PR 进展
共有 4 个 PR 更新，其中 1 个已关闭，3 个处于开启状态：

- **[#5688] [CLOSED] 重新生成不变性测试数据并放宽容差**
  - **作者**: qgallouedec
  - **摘要**: 解决了在全新干净环境下底层计算数值产生微小偏移的问题。该 PR 重新生成了不变性测试的基线数据，并适度放宽了数值容差，以消除由于环境差异带来的误报。
  - **分析**: 属于测试基建维护。合并此举可防止 CI/CD 在不同环境中频繁误报，但需警惕放宽容差可能掩盖微小的数值精度回退。
  - **链接**: [huggingface/trl PR #5688](https://github.com/huggingface/trl/pull/5688)

- **[#5689] [OPEN] 扩展不变性测试集：引入梯度检查点等价性**
  - **作者**: qgallouedec
  - **摘要**: 为 `SFT` 和 `DPO` 算法的等价性测试引入了第三种维度：`gradient_checkpointing=False`。理论上，梯度检查点通过牺牲计算换取内存，其在 fp32 精度下的训练轨迹应与标准计算完全一致，若出现发散则意味着重计算阶段存在真实 Bug。
  - **链接**: [huggingface/trl PR #5689](https://github.com/huggingface/trl/pull/5689)

- **[#5690] [OPEN] [GRPO] 同步升级 Liger Kernel 损失函数（支持 Delta, Vespo, KL 偏差校正）**
  - **作者**: kashif
  - **摘要**: 跟进适配了 Liger Kernel v0.8.0 的最新特性。将 `LigerFusedLinearGRPOLoss` 中新增的双边裁剪、KL 偏差校正、Vespo 温度参数等暴露到 TRL 的 `GRPOConfig` 中，同时移除了过时的 `delta+use_liger_kernel` 冲突守卫。
  - **分析**: 对齐了最新的高性能 GRPO 算法底层实现，显著扩展了 TRL 在复杂 GRPO 策略下的优化空间。
  - **链接**: [huggingface/trl/pull/5690](https://github.com/huggingface/trl/pull/5690)

- **[#5574] [OPEN] 适配 Qwen3-2507 系列模型的训练聊天模板**
  - **作者**: SwayamInSync
  - **摘要**: 解决了 Qwen3 部分模型（如 `Qwen3-4B-Instruct-2507`）与标准 Qwen3 模板不兼容的问题。新版模型去除了 `reasoning_content` 解析和思考模式标记（`istrospects`），由于原有 TRL 采用严格字符串匹配，导致模板失效。此 PR 提供了针对性的适配。
  - **分析**: 及时填补了最新开源 SOTA 模型在 RLHF 阶段的工程断层，保障了 TRL 对 Qwen3 系列的前沿兼容性。
  - **链接**: [huggingface/trl/pull/5574](https://github.com/huggingface/trl/pull/5574)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **紧贴 SOTA 开源模型发布节奏**：通过 PR [#5574] 可以看出，TRL 对主流基座模型（如 Qwen3 架构的微小迭代）保持着极快的适配响应速度。在 RLHF 流程中，对诸如思考过程标记和工具调用解析的精准剥离是保障训练稳定性的核心。
2. **深度整合高性能算子生态**：PR [#5690] 显示 TRL 正在深度耦合 `Liger Kernel` 等专为 LLM 设计的底层算子库。随着 GRPO 算法成为后 PPO 时代的核心 RL 算法，将双边裁剪、Vespo 等高级校正机制下沉到融合算子层面，意味着 TRL 正在追求显存优化与计算效率的极致。
3. **工程严谨性与对齐算法的底座保障**：PR [#5688] 与 [#5689] 体现了项目组对“数值等价性”的严苛要求。在 RL 训练（特别是混合精度下的 RL）中，引入梯度检查点等显存优化极易引发隐性发散。TRL 建立不变性测试集，以单元测试的形式锁死不同计算路径的等价性，为打造工业级可靠的 RLHF 底座提供了极高的信心保障。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报摘要：OpenRLHF
**日期**: 2026-05-02 | **分析目标**: [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

---

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库处于低频更新状态，无新增版本发布、无新增 Issue，仅有 1 个处于 `OPEN` 状态的重点架构级 PR 维持了活跃度。

### 2. 版本发布
- **最新 Releases**: 无。

### 3. 重点 Issues
- **过去 24 小时更新**: 0 条。当前社区反馈和 Bug 追踪保持稳定。

### 4. 关键 PR 进展
- **[#1226 Replace Deepspeed backend with Automodel](https://github.com/OpenRLHF/OpenRLHF/pull/1226)**
  - **状态**: OPEN (创建于 04-26，昨日有更新)
  - **作者**: hijkzzz
  - **技术洞察**: 该 PR 旨在移除对 Deepspeed 后端的重度依赖，转而采用 HuggingFace 原生的 `Automodel` 架构。这在工程层面是一个重大重构，意在降低框架的底层耦合度，可能意在简化 FP8 等纯 HF 原生加速方案的集成，并提升框架在后 Deepspeed 时代的轻量化与兼容性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前 LLM 对齐技术栈快速迭代的背景下，OpenRLHF 展现出了不可替代的生态生命力：
- **摆脱基础设施工债**: 以 [PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226) 为代表的底层重构，表明该项目正在积极响应社区对 Deepspeed 复杂性和稳定性的长期痛点，探索更加灵活的分布式训练后端。
- **后训练时代的核心基座**: 随着 Test-time Compute 和 RL 算法（如 GRPO、在线 DPO）成为提升模型能力的核心范式，OpenRLHF 作为当前最成熟、工程化程度最高的开源 RLHF 框架之一，其架构演进直接反映了业界在规模化 RL 训练上的最佳实践方向。

---
*注：本报告基于 GitHub 公开 API 数据自动化生成，数据分析截止至 2026-05-02 00:00 UTC。*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl (volcengine/verl) 强化学习开源生态日报
**日期**: 2026-05-02

---

### 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。虽然没有新的官方版本发布，但社区共更新了 **4 条 Issues** 和 **9 条 Pull Requests**。项目当前的核心发力点明确集中在**底层训练引擎的扩展与兼容性（TorchTitan、Megatron-FSDP）**、**异构硬件支持（Ascend NPUs、aarch64）**以及**异步推理与训练的修复**。

### 2. 版本发布
**无新版本发布**。目前最新稳定版仍为 v0.7.1。

---

### 3. 重点 Issues
今日的 Issue 集中在大型训练引擎的集成障碍、显存异常及多模态训练收敛问题上：

*   **[Roadmap] TorchTitan 训练引擎集成进度更新** `#5306` [OPEN]
    *   **摘要**: 社区正在积极推进 TorchTitan 作为 verl 训练后端的集成工作。该 Issue 追踪了包括模型引擎实现和文本模型支持在内的路线图进展，反映出 verl 试图深度整合 PyTorch 原生分布式生态的决心。
    *   **链接**: [verl-project/verl Issue #5306](https://github.com/verl-project/verl/issue/5306)
*   **[Bug] TorchTitanEngine 兼容性与 API 变更问题** `#6182` [OPEN]
    *   **摘要**: 开发者指出在 v0.7.1 版本中，`TorchtitanEngine` 会静默忽略 `attn_type="flex"`，且目前缺乏明确兼容 TorchTitan 版本的 BKM（最佳实践）。该问题直接催生了今日的修复 PR。
    *   **链接**: [verl-project/verl Issue #6182](https://github.com/verl-project/verl/issue/6182)
*   **[Bug] SGLang Async Rollout 遭遇 CUDA 非法显存访问** `#1611` [OPEN]
    *   **摘要**: 在进行多轮 GRPO RL 时，SGLang 异步 Rollout 触发了 CUDA 错误。该 Issue 评论数已达 41 条，说明异步框架在极端负载下的显存管理仍是社区痛点。
    *   **链接**: [verl-project/verl/issue/1611](https://github.com/verl-project/verl/issue/1611)
*   **[疑问] Qwen2.5-VL-72B 训练前期 Loss 为 0** `#2911` [OPEN]
    *   **摘要**: 用户报告在使用 `clip_cov` 方式微调 72B 视觉语言模型时，前 20 步 loss 几乎为 0。这引发了关于超大模型初始化及特定损失函数计算逻辑的讨论。
    *   **链接**: [verl-project/verl/issue/2911](https://github.com/verl-project/verl/issue/2911)

---

### 4. 关键 PR 进展
今日的 PR 质量极高，涉及多后端适配、断点续训修复及引擎升级：

*   **[Engine] 更新 TorchTitanEngine 以适配最新 API** `#6231` [OPEN]
    *   **摘要**: 响应 Issue #6182。移除了 TorchTitan 中已废弃的并行度参数，新增了 `CrossEntropyLoss.Config`，并修复了 `attn_type` 被忽略的 bug。
    *   **链接**: [verl-project/verl/pull/6231](https://github.com/verl-project/verl/pull/6231)
*   **[Megatron] 引入 Megatron-FSDP 混合模式支持** `#5423` [OPEN]
    *   **摘要**: 为 Megatron 引擎增加了基于 Megatron-FSDP 的 SFT 和 RL 训练后端选项。这为大规模模型训练提供了显存优化和分布式的全新解法。
    *   **链接**: [verl-project/verl/pull/5423](https://github.com/verl-project/verl/pull/5423)
*   **[Rollout] 为 TRT-LLM 启用异步 RL** `#5631` [OPEN]
    *   **摘要**: 成功打通了 TRT-LLM 的端到端异步 RL 功能并验证了收敛性，进一步完善了 verl 在推理加速生态的闭环。
    *   **链接**: [verl-project/verl/pull/5631](https://github.com/verl-project/verl/pull/5631)
*   **[Hardware] 修复 Ascend NPU 异步训练下的 Checkpoint 保存问题** `#5968` [OPEN]
    *   **摘要**: 修复了在昇腾 NPU 上进行全异步训练时，保存权重触发的 `NotImplementedError`，提升了国产算力平台的训练稳定性。
    *   **链接**: [verl-project/verl/pull/5968](https://github.com/verl-project/verl/pull/5968)
*   **[Trainer] 修复断点续训时多跑一步的越界 Bug** `#6232` [OPEN]
    *   **摘要**: 修复了当 checkpoint 达到 `total_training_steps` 时，恢复训练后 `fit()` 仍无条件 `global_steps += 1` 导致额外执行一步的逻辑缺陷。
    *   **链接**: [verl-project/verl/pull/6232](https://github.com/verl-project/verl/pull/6232)
*   **[Docker] 升级 ARM64 架构 vLLM 至 0.18** `#6222` [OPEN]
    *   **摘要**: 将 AArch64 架构下的 vLLM 依赖从 0.17.0 升级到 0.18.0，解除了之前的版本锁定限制。
    *   **链接**: [verl-project/verl/pull/6222](https://github.com/verl-project/verl/pull/6222)
*   **[VeOmni] 修复 Fused Kernel 日志概率为空的问题** `#6184` [OPEN]
    *   **摘要**: 解决了 `VeOmniEngine` 未正确挂载 forward patch，导致即使开启 `use_fused_kernels`，底层仍返回 HF 原生输出而缺乏 `log_probs` 的问题。
    *   **链接**: [verl-project/verl/pull/6184](https://github.com/verl-project/verl/pull/6184)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **打破后端锁定，走向“大一统”调度**：从今日的 PR 动态可以看出，verl 正在快速从单一的 PyTorch FSDP 后端，演变为一个**聚合型 RL 基础设施**。它同时兼容 Megatron-FSDP、TorchTitan 和 VeOmni，这意味着研究人员可以根据显存瓶颈和通信开销，灵活选择最适合的底层引擎。
2.  **全面拥抱 Async Rollout 生态**：在 GRPO 等复杂 RL 算法中， rollout 的推理速度是核心瓶颈。verl 正在花大力气（尽管伴随一些如 #1611 的内存异常 bug）打通 SGLang、vLLM 和 TRT-LLM 的异步生成机制，这将极大缩短 RLHF 训练中的等待时间。
3.  **极广的硬件与架构兼容性**：项目不仅在 NVIDIA 显卡上深耕，今日的更新更体现了其对**华为昇腾 NPU** 以及 **ARM64 (aarch64) 边缘/信创服务器**的持续工程投入。在算力日益多元化的 2026 年，这种跨硬件的适配能力是开源项目被广泛企业级采用的关键护城河。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-05-02)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库无新版本发布，无新增或更新的 Issues。项目活跃度主要集中在 Pull Requests，共有 7 项 PR 更新。核心贡献者 `finbarrtimbers` 集中推进了 GRPO 算法的实现优化及底层训练与推理引擎的权重同步机制，同时社区开始引入针对 Off-policy 校正的新算法接口。

## 2. 版本发布
- **最新 Releases**: 无。

## 3. 重点 Issues
- **最新动态**: 过去 24 小时无新增或更新 Issues。

## 4. 关键 PR 进展
今日的 PR 动态高度聚焦于 GRPO（Group Relative Policy Optimization）训练的稳定性、评估脚本的修复以及工程化构建的改进：

- **[OPEN] Implements IcePop and creates a unified interface for off-policy correction** ([PR #1650](https://github.com/allenai/open-instruct/pull/1650))
  - **作者**: finbarrtimbers
  - **摘要**: 引入 IcePop 算法，并为离策略校正建立统一的接口。这标志着项目在复杂 RL 策略优化和经验回放机制上迈出了重要一步。

- **[OPEN] Refactor `accumulate_inference_batches` for Replay Buffer** ([PR #1614](https://github.com/allenai/open-instruct/pull/1614))
  - **作者**: finbarrtimbers
  - **摘要**: 将 `accumulate_inference_batches` 拆分为 `process_single_result` 和 `combine_processed_results`。此重构旨在为后续引入经验回放缓冲区提供底层架构支持，直接影响 RL 训练的数据处理流。

- **[OPEN] Align `grpo.py` with `grpo_fast.py` metrics** ([PR #1642](https://github.com/allenai/open-instruct/pull/1642))
  - **作者**: finbarrtimbers
  - **摘要**: 修复了 FSDP2/olmo-core 路径下的 `grpo.py`：1) 修复了 step-0 权重同步存在的三类独立 Bug；2) 修复了 per-step logprob 重计算时 cross-doc 与 intra-doc 注意力机制不一致的问题，该问题曾导致 `val/tis_clipfrac` 异常飙升至 HF 参考实现的约 570 倍。

- **[CLOSED] Native weight sync and parity for `grpo.py`** ([PR #1649](https://github.com/allenai/open-instruct/pull/1648), [PR #1648](https://github.com/allenai/open-instruct/pull/1649))
  - **作者**: finbarrtimbers
  - **摘要**: 适配了 vLLM 新的原生权重同步 API，确保在 olmo-core actor 架构下，`grpo.py` 能够稳定运行并与 `grpo_fast.py` 的指标/行为保持完全一致。相关迭代 PR 现已关闭。

- **[CLOSED] Add dynamic versioning based on git tags** ([PR #1636](https://github.com/allenai/open-instruct/pull/1636))
  - **作者**: BrownianNotion
  - **摘要**: 工程化改进。将原本硬编码的版本号（0.1.0）替换为基于 git tag 和 commit 自动生成的动态版本号（如 `0.2.1.dev106+...`），大幅提升了发行版的可追溯性。

- **[OPEN] Fix submit_eval_jobs.py for olmo-eval-internal runs** ([PR #1644](https://github.com/allenai/open-instruct/pull/1644))
  - **作者**: finbarrtimbers
  - **摘要**: 修复评估脚本，主要解决了依赖包 `vllm[runai]` 意外拉取错误 CUDA 版本（cu13）导致与基础镜像（cu12.8）冲突进而引发 CUDA driver 报错的问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 LLM+RL 底层融合痛点**：PR #1642 展现了项目中大模型分布式训练与推理引擎结合的复杂性。修复 cross-doc/intra-doc 注意力机制错位及 step-0 权重同步问题，为业界解决 vLLM + FSDP2 架构下的 RLHF 训练不稳定性提供了直接的工程参考。
2. **从 On-policy 迈向 Off-policy**：PR #1650 和 #1614 清晰地展示了项目正在重构底层以接入 Replay Buffer 和离策略校正，这是当前提升大模型 RL 样本效率的核心演进方向。
3. **硬核的工程严谨性**：在追求算法创新的同时，项目对算力分配、底层 API 迁移（vLLM native weight sync）以及版本控制（动态 tag 生成）保持着严格的对齐与测试（确保 `grpo.py` 与参考实现 `grpo_fast.py` 指标一致），为上层算法研究提供了可靠的基础设施。

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

# RL 日报摘要：Gymnasium (2026-05-02)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于低活跃的维护状态。无新增 Issue 和版本发布，但围绕**底层代码静态类型系统**的持续重构仍是当前社区的核心推进方向。今日共有 3 个 PR 更新，均由开发者 `jorenham` 推动。

## 2. 版本发布
过去 24 小时及近期**无新版本发布**。项目当前主要专注于底层代码质量的提升与类型缺陷的修复，处于稳定的维护迭代期。

## 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。侧面反映出项目核心 API 趋于稳定，用户端未报告重大功能性阻断问题。

## 4. 关键 PR 进展
当前的 PR 活动高度聚焦于全面完善 `gymnasium` 的静态类型检查覆盖率。这有助于提升下游 RL 算法库在开发和静态分析阶段的类型安全与 IDE 自动补全体验。

*   **[#1573] [OPEN] 修复 `vector.**` 的类型错误并补充缺失的注解**
    *   **作者**: `jorenham`
    *   **摘要**: 针对 `gymnasium.vector.*` 和 `gymnasium.vector.utils.*` 模块进行大批量静态类型修复与覆盖率提升。代码已通过 `pre-commit` 检查。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1573](https://github.com/Farama-Foundation/Gymnasium/pull/1573)

*   **[#1575] [OPEN] 修复 `wrappers.vector.*` 的类型错误并补充缺失的注解**
    *   **作者**: `jorenham`
    *   **摘要**: 针对 `gymnasium.wrappers.vector.*` 子模块的类型覆盖优化。值得注意的是，该 PR 额外修复了多处不规范的 `TypeVar` 使用模式（包括未绑定的“自由”类型变量、不正确的方差声明 `variance`，以及缺失的上级类型参数约束）。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575)

*   **[#1572] [CLOSED] 修复 `spaces.*` 的类型错误并补充缺失的注解**
    *   **作者**: `jorenham`
    *   **摘要**: 针对 `gymnasium.spaces.*` 模块的静态类型修复与改进，目前该 PR 已被合并或关闭。
    *   **链接**: [Farama-Foundation/Gymnasium/pull/1572)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日无功能性 Feature 更新，但从近期连续的类型重构 PR 可以看出，Gymnasium 正在向**高标准的企业级代码规范**演进：
1. **底层基石作用**：作为 RL 生态的事实标准 API，Gymnasium 的类型注解完善直接决定了下游框架（如 Stable-Baselines3, CleanRL, Tianshou 等）的代码健壮性和静态检查准确度。
2. **API 高度稳定**：Issue 趋于零，表明项目已脱离频繁更改 API 的阵痛期，核心抽象（Env, Space, Wrapper）已完全沉淀，开发者和研究人员可以放心基于当前版本进行长期研发。
3. **基础设施打磨**：对 `TypeVar` 边界和协变/逆变的精确修正，说明维护团队正在消除潜在的运行时隐患，提升对复杂向量化和包装器架构的类型推断支持。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报摘要：Stable Baselines3 (2026-05-02)

## 1. 今日速览
过去 24 小时，Stable Baselines3 (SB3) 仓库整体活跃度趋于平缓。新增 0 个 Pull Requests，无新版本发布。社区活动主要集中在现有问题的讨论与排查上，共处理了 1 条 Issue 更新（已关闭）。

## 2. 版本发布
- **最新 Releases**: 无。
  目前项目处于稳定迭代期，核心库保持低频发布节奏。

## 3. 重点 Issues
- **#2248 [CLOSED] [[question] Are gymnasium spaces handled the same?](https://github.com/DLR-RM/stable-baselines3/issues/2248)**
  - **背景**: 开发者 (A-Artemis) 发现在动作空间尺寸为 10 且值域仅为 0 或 1 的任务中，使用 Gymnasium 的 `Box` 和 `MultiBinary` 定义动作空间会导致训练表现产生差异。
  - **技术要点**: 该问题直击 RL 底层环境接口的空间映射机制。`Box` 提供的是连续边界（即使是离散的 0/1 浮点数），而 `MultiBinary` 是严格的 n 维二进制数组。SB3 的不同算法对这两种数据类型的解析、采样以及神经网络输出层的激活函数映射可能存在细微差异。该 Issue 的提出与关闭有助于社区明确在使用 Gymnasium 环境时应遵循的标准化动作空间定义规范。

## 4. 关键 PR 进展
- **最新 Pull Requests**: 过去 24 小时内无新增或更新的 PR。核心代码库当前处于稳定维护状态，暂无未合并的热修复或功能性代码提交。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **工业级算法可靠性**: SB3 作为当前 RL 生态最核心的基线库之一，其单一算法单一文件的设计哲学和极其严格的测试标准，使其成为学术界复现基线和工业界落地应用的首选。
2. **Gymnasium 生态的基石**: 随着环境接口全面向 Gymnasium 迁移（如 Issue #2248 中对 `MultiBinary` 和 `Box` 的探讨），SB3 是连接底层环境与新算法标准的最稳健桥梁，对底层空间定义的任何讨论和修复都具有极高的参考价值。
3. **生态扩展性强**: 尽管核心库更新频率低，但以 SB3 为底座衍生出的 SB3-Contrib、Stable-Baselines3-Zoo 等仓库构成了完整的 RL 工作流，持续为社区提供最前沿的 SOTA 实现（如 DroQ、TrQR 等）。

</details>