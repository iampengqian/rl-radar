# RL 开源生态日报 2026-04-20

> 生成时间: 2026-04-19 22:05 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“冰火两重天”格局。以 LLM/Post-training 为核心的基建项目（verl, TRL, OpenRLHF, AReaL, slime 等）正处于高度活跃的爆发期，算法迭代、底层重构与异构算力适配齐头并进。相比之下，经典 RL 算法库（如 SB3、Gymnasium）及部分垂直领域项目已步入极为稳定的成熟维护期，核心 API 变更极少，活动多聚焦于外围工程优化。

## 各项目活跃度对比
过去 24 小时内，生态内各项目的活跃数据分布如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5 | 8 | 0 | 仓库名称彻底迁移，多模态与国产异构算力（昇腾）支持取得实质性进展。 |
| **TRL** | 2 | 8 | 0 | 极速适配 Qwen3.5 等新模型底座，快速引入前沿算法 TPO。 |
| **Stable Baselines3** | 4 | 5 | 0 | 核心依赖轻量化（剥离 pandas），底层 Gym API 严谨兼容。 |
| **AReaL** | 1 | 7 | 0 | 底层引擎全面升级（Megatron/vLLM），攻坚 VLM 长时序训练内存泄漏。 |
| **OpenRLHF** | 2 | 1 | 1 | 发布 v0.10.2，引入前沿 Muon 优化器并重构 DeepSpeed 策略底层。 |
| **Open Instruct** | 0 | 3 | 0 | 攻克分布式 RL 的死锁痛点，深耕 LLM-as-a-Judge 的并发限流。 |
| **slime** | 3 | 0 | 0 | 暴露严重的大规模（64x H100）分布式切分 Bug 及回归缺陷。 |
| **ROCK** | 0 | 2 | 0 | 补齐 SDK 集成测试，清理底层资源泄漏，提升 CI 稳定性。 |
| **Gymnasium** | 0 | 2 | 0 | 经典 API 极度稳定，仅进行边缘环境逻辑修复与商业赞助变更。 |
| **CleanRL / ROLL / Tianshou 等** | 0 | 0 | 0 | 过去 24 小时内无代码及社区活动。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **GRPO 成为后训练新基石**：生态正从 DPO 全面转向 GRPO 及其变体。无论是 TRL 探索结合 Tool Use 的 Agent GRPO 训练，还是 Open Instruct 针对 GRPO 的资源调度优化，亦或是 verl 提供医疗多模态的 GRPO Recipe，均表明 GRPO 已成为当前 RLHF 的绝对主力算法。
2. **新优化算法的快速验证**：新型优化器和损失函数（如 TPO）正在被各大框架（TRL, OpenRLHF）作为一等公民快速集成，以寻找突破 DPO/PPO 性能瓶颈的路径。
3. **向多模态与 Agent 对齐演进**：纯文本的 RLHF 已不能满足需求。AReaL 和 verl 正在攻坚 VLM（视觉语言模型）的 RL 训练痛点，TRL 则在探索模型自我进化的 Agent Tool-calling 场景。

**工程/基础设施侧信号：**
1. **“万卡级”分布式调度与容错**：随着参数量突破千亿（如 235B），跨节点分布式训练的稳定性成为核心挑战。slime 暴露的 64 卡 NaN 溢出，以及 Open Instruct 引入的 Ray 集群资源预检防死锁机制，印证了大规模调度是当前的工程重心。
2. **变长序列与高并发推理优化**：在 Rollout 生成阶段，如何高效处理变长序列（如 TRL 修复的 reverse-KL 变长 NaN 问题）和加速推理吞吐（如 AReaL 引入 Sglang Eagle 投机解码），是提升 RL 训练整体效率的关键。
3. **LLM-as-a-Judge 的生产级加固**：用大模型代替 RM 进行奖励反馈时，极易触发并发过载。Open Instruct 引入信号量保护的 LiteLLM 异步路由，标志着该机制正从实验代码走向高可用工程架构。

## 差异化定位分析
- **verl & AReaL**：定位为**深水区软硬一体的底层引擎**。重点解决极端规模下的异构算力适配（昇腾 NPU、Megatron-core）和分布式显存泄漏，适合需要从零搭建大规模 Post-training 集群的基建团队。
- **TRL & OpenRLHF**：定位为**敏捷的上层算法与模型生态入口**。强依赖 HF 生态或 DeepSpeed，对新模型（Qwen3.5、Phi-3）和新算法（TPO、Muon）的响应速度极快，是算法研究员进行快速试错和消融实验的首选。
- **Open Instruct & slime**：定位为**前沿大模型对齐的试金石**。直面 235B、64x H100 规模下的序列切分与通信痛点，其踩过的分布式 Bug 为整个生态提供了宝贵的工程经验。
- **Stable Baselines3 & Gymnasium**：定位为**经典控制与决策的基石标准**。以“不犯错、轻量化”为第一要务，剥离冗余依赖，严格跟进 API 标准，是传统 RL、机器人控制与学术复现的绝对权威。

## 社区热度与成熟度
当前 LLM RL 框架的热度显著碾压传统 RL 库。**TRL** 和 **verl** 的 PR 与 Issue 互动频繁，对前沿底座的兼容性修复通常在 24-48 小时内闭环，展现出旺盛的开源生命力。相比之下，**SB3** 和 **Gymnasium** 的成熟度极高，维护者将精力集中在 CI 提速、依赖瘦身和边界条件校验上，拒绝激进的重构，确保了工业界部署的绝对平稳。**OpenRLHF** 则表现出极佳的发版节奏，在快速重构底层代码的同时，能及时通过小版本（如 v0.10.2）堵住破窗风险。

## 值得关注的趋势信号
1. **RLHF 流程的全面异构化与国产化**：从 verl 合入 NeMo 后端和昇腾 NPU 异步训练补丁可以看出，未来的 Post-training 基础设施正在强制解耦底层硬件绑定，以应对高端 GPU 算力的不确定性。
2. **框架级防守机制前置**：面对分布式 RL 极难排查的死锁与 OOM，开源框架开始内置“启动前资源预检”和“梯度异常预警”（如 OpenRLHF、Open Instruct），从“报错后排查”转向“阻断式预防”。
3. **RL 算法从“对齐工具”向“环境交互智能”跃迁**：基于静态数据的 DPO 正在让位，通过 GRPO 结合外部工具执行或 LLM Judge 进行环境交互式自我进化，正在成为开源框架竞相支持的核心范式。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-04-20）：

---

# 📊 RL 开源生态日报：ROCK (alibaba/ROCK)
**日期**: 2026-04-20

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库整体保持低活跃度平稳运行。无新增 Issues，无新版本发布。项目核心贡献者 @guoj14 正在集中推进测试基建的完善与代码质量优化，昨日有 2 个 Pull Requests 获得更新跟进。

### 2. 版本发布
**无**
过去 24 小时内未发布新的 Releases。

### 3. 重点 Issues
**无**
过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
当前共有 **2** 个处于 OPEN 状态的 PR 在近期发生了更新，均由 @guoj14 主导，主要聚焦于**测试稳定性与 CI 流水线增强**：

*   **PR #842** `[OPEN] feat(ci): add integration test workflow for TS SDK`
    *   **作者**: guoj14
    *   **动态**: 创建于 2026-04-17，昨日 (04-19) 获得更新。
    *   **摘要**: 引入针对 TS SDK 的集成测试工作流，关联基础议题 #735。此举表明 ROCK 正在补齐外围 SDK 的自动化测试拼图，有助于防止跨模块回归问题。
    *   **链接**: [alibaba/ROCK PR #842](https://github.com/alibaba/ROCK/pull/842)

*   **PR #839** `[OPEN] fix(test): clean up leaked timers in model client tests`
    *   **作者**: guoj14
    *   **动态**: 创建于 2026-04-17，昨日 (04-19) 获得更新。
    *   **摘要**: 修复模型客户端测试中存在的计时器泄漏问题，关联议题 #838。这类底层的清理工作通常是为了提升 CI 环境下的测试确定性和资源管理的健壮性。
    *   **链接**: [alibaba/ROCK PR #839](https://github.com/alibaba/ROCK/pull/839)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层工程化与质量把控**: 强化学习框架在处理大规模并行和环境交互时，系统级资源泄漏（如 Timer 泄漏）是导致长时训练崩溃的致命隐患。ROCK 团队正在积极修复此类底层问题并引入 SDK 集成测试，表明该项目已进入**深水区的工程化打磨阶段**，这对于追求训练稳定性的 RL 研究员和工程师至关重要。
2. **强化学习全链路基建的演进**: 通过引入 TS SDK 的 CI workflow，可以看出 ROCK 并非仅仅是一个孤立的算法集合，而是正在构建一个包含客户端、模型交互、服务端在内的完整 RL 基建生态。对于需要将 RL 算法与生产环境（如推荐系统、自动驾驶控制系统）深度绑定的开发者而言，这种持续演进的周边生态具备极高的借鉴和实用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime (THUDM/slime) RL 生态日报 - 2026-04-20

## 1. 今日速览
过去 24 小时，Slime 仓库活动主要集中在核心分布式训练逻辑的排障。无新代码合入或版本发布，但共有 **3 个 Issues** 产生更新，焦点集中在**大规模分布式训练（64x H100）下的数值溢出（NaN）**以及 **vLLM 后端序列切分的新引入缺陷**。

## 2. 版本发布
无新版本发布。当前社区主要基于 `v0.1.0` 稳定版进行大规模部署和测试。

## 3. 重点 Issues
今日更新的 Issues 暴露了超大模型在跨节点训练时数据并行的边界情况处理缺陷：

*   **[#795](https://github.com/THUDM/slime/issues/795) [Bug] `Unexpected result nan` on 64x H100, Qwen3 235B**
    *   **概述**：在 64 张 H100 集群上对 235B 参数大模型进行 RL 训练时频发 `NaN` 溢出。
    *   **技术细节**：该 Issue 自 2025 年 11 月提交至今仍未解决，近期保持活跃（评论数已达 11 条）。表明在超大规模多卡分布式强化学习训练场景下，Slime 的底层通信或梯度/优势值计算仍存在稳定性隐患。
*   **[#1838](https://github.com/THUDM/slime/issues/1838) [Bug] `_get_capped_partitions` produces empty partitions**
    *   **概述**：由近期 PR #1823 引入的回归缺陷。在跨 DP Ranks 进行 `num_microbatches` 的 All-Reduce 操作后，`_get_capped_partitions` 函数可能会生成空的 micro-batch 分区。
    *   **技术细节**：触发 `ValueError: torch.cat(): expected a non-empty list of Tensors` 报错。这反映出当前 DP（数据并行）维度的批次分配算法在多卡同步时缺乏对空 Tensor 的边界保护。
*   **[#1839](https://github.com/THUDM/slime/issues/1839) [Bug] `_get_capped_partitions` crashes when a single sample exceeds `max_tokens_per_gpu`**
    *   **概述**：同样是 PR #1823 引入的缺陷。当单条样本的总长度（prompt_len + response_len）严格大于 `max_tokens_per_gpu` 时，系统发生崩溃。
    *   **技术细节**：底层函数 `get_minimum_num_micro_batch_size` 虽能正确隔离超大样本，但上层的 `_get_capped_partitions` 在处理此类越界样本时逻辑存在漏洞。对于长文本生成（长 Rollout）的 RL 训练极易触发此 Bug。

## 4. 关键 PR 进展
过去 24 小时内 **无新 PR 或 PR 更新**。
值得注意的是，根据 Issue #1838 和 #1839 的反馈，近期合入的 [PR #1823 (Add fallback for getseqlenbalanced_partitions)](https://github.com/THUDM/slime/pull/1823) 存在严重的系统性回归风险，开发者需留意此 PR 是否会在未来 1-2 天内提交 Hotfix。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **前沿大模型 RLHF 的“试金石”**：从 Issue #795 可以看出，Slime 正在被直接用于 Qwen3-235B 这种千亿级基座模型的 RL 对齐实战，且涉及 64x H100 的超大规模算力集群。项目在极限算力和显存调度下积累的 Bug 和解决方案，对整个开源 RL 生态具有极高的参考价值。
*   **强约束下的分布式工程挑战**：近期爆发的序列切分 Bug 展现了 LLM+RL 的核心痛点——如何在一个复杂的 DP/PP/TP 交织的分布式网络中，安全、动态地平衡长短不一的 trajectory 序列。Slime 在相关机制上的迭代，代表了当前开源界在处理此类工程难点上的第一梯队实践。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-04-20 强化学习（RL）日报摘要：

# AReaL RL 生态日报 (2026-04-20)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共处理了 **1 个 Issue** 和 **7 个 Pull Requests**（其中 1 个已关闭，6 个处于 Open 或 WIP 状态）。社区目前的开发重心集中在**底层训练引擎的解耦与升级**、**推理加速（投机解码）**以及**分布式数据服务基础设施的稳定性修复**。今日无新版本发布。

## 2. 版本发布
**无**。今日暂无新的 Release 或 Tag 产出。

## 3. 重点 Issues
- **[#1209 [BUG] RTensor._fetch_buffer leaks unboundedly on worker processes, crashes long-running training (VLM)](https://github.com/inclusionAI/AReaL/issues/1209)**
  **分析**：这是一个影响深远的关键缺陷。在视觉语言模型（VLM）的长时间训练场景中，`RTensor._fetch_buffer` 在 Worker 进程上发生了无限界的内存泄漏，最终导致 OOM 或崩溃。鉴于 VLM 的 RLHF 训练极其消耗算力与时间，此 Bug 严重威胁了长时序训练任务的稳定性，亟需社区关注与修复。

## 4. 关键 PR 进展
今日的 PR 动态展现了项目在底层基础设施和训练引擎上的持续迭代：

**基础设施与依赖升级：**
- **[#1206 chore(deps): upgrade megatron-core, megatron-bridge, sglang, vllm](https://github.com/inclusionAI/AReaL/pull/1206)**
  **分析**：全面升级核心运行时依赖。将 `megatron-core` 提升至 0.17.0，`sglang` 提升至 0.5.10.post1，`vllm` 也进行了相应升级。这确保了 AReaL 能够兼容最新的大模型并行推理与训练特性。
- **[#1210 fix(infra): move data service seed to worker-level config](https://github.com/inclusionAI/AReaL/pull/1210)**
  **分析**：修复了分布式数据加载层面的随机种子管理逻辑。将种子从“每次请求级参数”改为“Worker 启动时统一配置的级别”，避免了多数据集混合训练时由于反复初始化导致的 Shuffle 不正确问题。
- **[#1208 [Fix](Service):fix data service failures in IPv6-only environments with HTTP proxy](https://github.com/inclusionAI/AReaL/pull/1208) [CLOSED]**
  **分析**：修复了纯 IPv6 环境下搭配 HTTP 代理时数据加载服务崩溃的问题（涉及底层 `httpx` 到 `aiohttp` 的适配）。已合并/关闭，提升了异构分布式集群的兼容性。

**引擎解耦与性能优化：**
- **[#1140 feat(engine): support direct engine construction via from_pretrained without config dataclass](https://github.com/inclusionAI/AReaL/pull/1140)**
  **分析**：重构了 FSDPEngine 的初始化逻辑，允许绕过繁琐的 `config dataclass` 直接通过 `from_pretrained` 构建引擎。这大幅解耦了引擎与配置系统，降低了开发者的二次开发门槛。
- **[#1176 feat: support Speculative Decoding by Sglang Eagle algo](https://github.com/inclusionAI/AReaL/pull/1176) [WIP]**
  **分析**：正在集成基于 Sglang 的 Eagle 投机解码算法。此特性一旦合并，将显著提升 AReaL 在 RL 训练中生成 Rollout 的推理吞吐量。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚 VLM 强化学习痛点**：从今日的 Issue #1209 可以看出，项目正实打实地深入到 VLM 长时序 RL 训练的深水区。解决此类内存泄漏和分布式稳定性问题，是构建大规模多模态对齐系统的基石。
2. **极致的推训系统优化**：AReaL 正在积极融合当前开源生态最激进的推理加速技术（如 Sglang Eagle 投机解码 #1176），并紧跟 `megatron-core` 与 `vLLM` 的最新大版本迭代（#1206），确保其 RL 训练引擎的 Rollout 生成效率处于开源生态的第一梯队。
3. **架构解耦与工业级落地**：无论是重构 FSDPEngine 的初始化逻辑（#1140），还是精细处理分布式数据服务的随机种子（#1210）与 IPv6 代理兼容（#1208），都表明该项目正从“学术实验代码”向“高鲁棒性、高扩展性的工业级 RL 基础设施”演进，对致力于大模型对齐的工程师具有极高的参考与实用价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-20 RL 日报摘要：

# TRL (Hugging Face) 强化学习开源生态日报
**日期**: 2026-04-20 | **数据监控**: github.com/huggingface/trl

## 1. 今日速览
过去 24 小时内，TRL 仓库保持平稳迭代，无新版本发布。社区共更新了 **2 个 Issues** 和 **8 个 Pull Requests**。从 PR 趋势来看，当前生态的核心发力点集中在 **新型 RL 算法的实现与接入**，特别是围绕 GRPO 算法变体的演进以及对新兴开源模型（如 Qwen3.5、Phi-3）的底座适配与 Bug 修复。

## 2. 版本发布
**无**。目前主干分支处于稳定的日常开发与功能积累阶段。

## 3. 重点 Issues
今日的 Issues 暴露了 TRL 在前沿模型架构及复杂 RL 交互场景下的兼容性与功能盲区：

*   **[#5366] [OPEN] GRPO with tool use** ([链接](https://github.com/huggingface/trl/issues/5366))
    *   **摘要**: 开发者尝试在 GRPO Trainer 中结合 Python REPL 工具对 `Qwen3-0.6B` 进行 Agent 微调。这反映了社区对“RL + Tool Calling/Agent”训练流程的强烈需求。
*   **[#5585] [OPEN] [Bug] DistillationTrainer fails with Qwen3.5 due to nested config.vocab_size attribute** ([链接](https://github.com/huggingface/trl/issues/5585))
    *   **摘要**: `Qwen3.5` 模型的配置文件发生了架构变化（`vocab_size` 被嵌套至 `text_config` 下），导致 TRL 的 `DistillationTrainer` 在初始化调整词表大小时触发 `AttributeError`。

## 4. 关键 PR 进展
今日的 PR 质量极高，涉及关键算法扩展、底层训练稳定性修复及多模型支持：

*   **新算法接入：TPO (Target Policy Optimization) 引发双线讨论**
    *   **[#5591] feat: add TPO trainer** ([链接](https://github.com/huggingface/trl/pull/5591))：由 JeanKaddour 提交，基于最新论文，将 TPO 作为 GRPO 家族的损失函数（`loss_type="tpo"`）引入，提供了一阶训练器封装。
    *   **[#5506] [TPO] experimental TPO trainer** ([链接](https://github.com/huggingface/trl/pull/5506))：由 kashif 提交的实验性独立 TPO Trainer。这两个 PR 可能需要后续进行架构对齐。
*   **关键 Bug 修复与训练稳定性提升**
    *   **[#5592] Fix nested vocab_size for DistillationTrainer and GOLDTrainer** ([链接](https://github.com/huggingface/trl/pull/5592))：精准修复了 Issue [#5585]，通过兼容嵌套的 config 属性，使最新版 Qwen3.5 能够顺利跑通蒸馏和 GOLD 训练。
    *   **[#5594] fix(distillation): reverse-KL server path NaN on variable completion length** ([链接](https://github.com/huggingface/trl/pull/5594))：修复了在服务端推理（`use_teacher_server=True`）且使用纯 reverse-KL 散度时，由于变长补齐导致 teacher logprob 矩阵出现 NaN 梯度的致命 Bug。
    *   **[#5564] DataCollatorForPreference checking 'margin' in all examples** ([链接](https://github.com/huggingface/trl/pull/5564))：修复了奖励模型训练时，`margin` 特征仅在 Batch 的第一个样本被校验的逻辑漏洞。
*   **生态与模型兼容性扩展**
    *   **[#5574] Add training chat template for Qwen3-2507** ([链接](https://github.com/huggingface/trl/pull/5574))：为去除了复杂推理标记（无 `reasoning_content`）的 `Qwen3-4B-Instruct-2507` 提供了专门的训练模板。
    *   **[#5526] feat: add Phi-3 training chat template with generation markers** ([链接](https://github.com/huggingface/trl/pull/5526))：为微软 `Phi-3` 系列模型增加了带生成标记的专属 Chat Template。
    *   **[#5593] Allow minor version update of vllm** ([链接](https://github.com/huggingface/trl/pull/5593))：放宽了对 `vllm` 库的版本严格限制，允许小版本更新（如 0.18.1），提升了 RL 训练中 vLLM 后端的灵活性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **紧跟 SOTA 算法演进**：从 On-policy 到 DPO，再到当前大火的 GRPO 及其变体（如 TPO），TRL 几乎在第一时间提供工业级的高质量实现。它不仅是工具库，更是 RLHF 领域算法演进的风向标。
2.  **对新开源底座的极速响应**：无论是 Qwen3.5 嵌套配置导致的崩溃，还是不同版本文档模板的差异，社区和核心开发者能在几天甚至几小时内提供 Fix PR。这种敏捷的适配能力，确保了使用者始终能用最新的模型跑通最前沿的 RL 流程。
3.  **向 Agent 与 Tool-use 场景延伸**：Issue [#5366] 证实了社区正在利用 TRL 的 GRPO 框架进行 Agent 训练（如调用 Python REPL）。这标志着 TRL 的应用边界正在从传统的“文本对齐”向更具生产力的“智能体自我进化”拓展。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 2026-04-20 RL 生态日报摘要：

# RL 开源生态日报：OpenRLHF (2026-04-20)

## 1. 今日速览
过去 24 小时，OpenRLHF 保持了高频的迭代节奏。项目正式发布了 `v0.10.2` 修复补丁，主要聚焦于前期代码重构带来的遗留问题及脚本修复。社区方面，共处理了 2 个实际业务场景下的 Bug 反馈（均已关闭），并核验了 1 个关于 DeepSpeed 策略重构的重要 PR。

## 2. 版本发布
- **[Release v0.10.2](https://github.com/OpenRLHF/OpenRLHF/releases)** (发布于 2026-04-20)
  - **核心更新**：开发者 `@xiaoxigua999` 提交了三个关键 Commit：
    1. **重构修复**：修复了近期 CLI 代码重构导致的部分缺陷。
    2. **健壮性提升**：为 Muon 优化器增加了梯度范数警告，提升复杂训练下的稳定性。
    3. **脚本修复**：修复了 DPO 训练的 `.sh` 启动脚本。

## 3. 重点 Issues
今日反馈的问题主要集中在依赖兼容性和类型校验的边界情况，均已被迅速定位并关闭：
- **[#1222 Transformer 版本更新导致 `ring_flash_attn` 导入报错](https://github.com/OpenRLHF/OpenRLHF/issues/1222)**
  - **详情**：由 `@allen-dc` 提交。升级 `transformer` 库后，`ring_attn_utils.py` 中的 `ring_flash_attn` 模块在导入时出现不兼容错误。这提醒用户在本地升级环境时需注意底层 Attention 依赖库的版本锁定。
- **[#1223 `agent.py` 中 `max_token` 参数解析崩溃](https://github.com/OpenRLHF/OpenRLHF/issues/1223)**
  - **详情**：由 `@allen-dc` 提交。`utils/agent.py` 第 61 行的代码逻辑缺陷：`hasattr()` 在属性值为 `None` 时仍返回 `True`，导致未触发预期的 fallback 机制，进而导致后续的 `int - None` 类型运算抛出异常。

## 4. 关键 PR 进展
- **[#1221 [CLOSED] feat: 重构优化器/调度器创建逻辑至 DeepSpeed 策略中，并引入 Muon 支持](https://github.com/OpenRLHF/OpenRLHF/pull/1221)**
  - **详情**：由核心维护者 `@hijkzzz` 发起。此 PR 将原先分散在各个 Trainer 中的优化器和调度器初始化逻辑进行了统一抽取，移入 `DeepspeedStrategy.prepare()` 中，实现了基于 DeepSpeed 配置的统一创建。
  - **技术亮点**：正式添加了对 **Muon 优化器** 的原生支持（要求 DeepSpeed >= 0.18.2），支持通过 `--optim muon` 标志启用。此重构大幅提升了代码复用率，为后续接入更多 RL 算法和新型优化器打下了良好的架构基础。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **跟进前沿训练策略**：从 `v0.10.2` 的发布和近期的 PR 可以看出，OpenRLHF 正快速集成业界最新研究成果（如 **Muon 优化器**的引入与排错）。这表明项目不仅在做基础的工程维护，更在底层训练机制上紧跟 AI 前沿。
2. **工程架构持续演进**：针对 LLM 训练框架普遍存在的“过度耦合”痛点，项目正在积极进行底层重构（如统一 DeepSpeed 策略中的优化器/调度器管理）。这种高内聚低耦合的设计，使其在面对复杂的 RLHF/DPO 乃至 Agent 训练场景时具备更强的工程伸缩性。
3. **高响应度的开源维护**：今日出现的社区 Bug 报告（包括 Attention 模块兼容性和 Agent 边界错误）均被迅速响应和关闭，配合密集的版本迭代，反映出项目处于极其健康的活跃状态。对于需要稳定进行 LLM 对齐和强化学习的开发者而言，是首选的开源基座。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 (2026-04-20)

## 1. 今日速览
过去 24 小时内，verl 生态保持较高的社区活跃度，无新版本发布。共处理更新 **5 个 Issues** 和 **8 个 Pull Requests**。今天的焦点集中在：核心算法 Bug 修复（KL 散度惩罚与 FSDP 梯度累积）、架构演进（全局负载均衡与多模态 RL Recipes），以及项目仓库从 `volcengine` 向 `verl-project` 的彻底迁移。昇腾 NPU 异步训练支持也已提上日程。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[[bug] on-policy distillation 报错 "no running event loop"]()**
  - 链接: [verl-project/verl #4464](https://github.com/verl-project/verl/4464)
  - 状态: `OPEN` | 👍: 0 | 评论: 20
  - 摘要: 在使用 on-policy distillation 时触发异步事件循环及 LLM Engine 未初始化 (`NoneType`) 错误。
- **[[bug] Out Of Memory (OOM)]()**
  - 链接: [verl-project/verl #3453](https://github.com/verl-project/verl/3453)
  - 状态: `OPEN` | 👍: 4 | 评论: 16
  - 摘要: 用户在进行大规模训练时遭遇显存溢出问题，该贴长期作为 OOM 场景的排查讨论点。
- **[[RFC] support Nemo-AutoModel as an alternative training backend]()**
  - 链接: [verl-project/verl #5245](https://github.com/verl-project/verl/5245)
  - 状态: `OPEN` | 👍: 0 | 评论: 2
  - 摘要: 提议将 NVIDIA NeMo-AutoModel（PyTorch DTensor-native SPMD 架构）作为 verl 的后端引擎，以扩展底层计算生态。

## 4. 关键 PR 进展
### 算法与核心引擎修复
- **[[algo] fix: strip '+' suffix in kl_penalty so k3+/low_var_kl+ work]()**
  - 链接: [verl-project/verl PR #6058](https://github.com/verl-project/verl/pull/6058)
  - 修复了 `core_algos.kl_penalty` 中使用带 `+` 后缀的 KL 估计器（如 `k3+`, `low_var_kl+`）时触发 `NotImplementedError` 的长存 Bug。
- **[[algo] fix: fix loss scale factor in fsdp when use token-mean mode]()**
  - 链接: [verl-project/verl PR #5626](https://github.com/verl-project/verl/pull/5626) (`CLOSED`)
  - 修复了旧版 FSDP 在使用 `token-mean` 模式进行梯度累积时，`loss_scale_factor` 计算错误导致累积梯度发散的问题。

### 架构与工程优化
- **[[rollout] feat: enhancing global load balancer (issue #5442)]()**
  - 链接: [verl-project/verl PR #6059](https://github.com/verl-project/verl/pull/6059)
  - 推进路由路线图 Phase 2，增强 `GlobalRequestLoadBalancer`，旨在优化多卡/多节点下的 rollout 调度。
- **[[misc] chore: migrate volcengine/verl references to verl-project/verl]()**
  - 链接: [verl-project/verl PR #6008](https://github.com/verl-project/verl/pull/6008) (`CLOSED`)
  - 将仓库中残留的 242 处 `volcengine/verl` 全量替换为 `verl-project/verl`，彻底完成项目组织的重定向。

### 下游应用与异构算力支持
- **[xr_chest: first GRPO recipe for Qwen3-VL on chest radiology reports]()**
  - 链接: [verl-project/verl PR #6060](https://github.com/verl-project/verl/pull/6060) (`CLOSED`)
  - 提交了基于 Qwen3-VL-4B 的胸部放射学报告多模态 RLHF GRPO recipe，包含离线 Parquet 预处理、ROUGE-L 奖励，并在 8xB200 节点完成端到端验证。
- **[[fully_async] fix: Add Mindspeed Patch for Async Training on Ascend NPUs]()**
  - 链接: [verl-project/verl PR #5967](https://github.com/verl-project/verl/pull/5967)
  - 修复了在昇腾 NPU 上运行异步全量训练时缺失 Megatron 的 MindSpeed 补丁引发的错误，扩展了 verl 在国产异构算力上的支持能力。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层基础设施持续迭代**: 从修复核心 KL 散度惩罚和 FSDP 梯度累积 Bug，到引入全局 Rollout 负载均衡器，verl 正在解决 LLM 强化学习中最棘手的训练稳定性和分布式效率问题。
2. **拥抱多模态与垂直领域**: 随着社区提交针对 Qwen3-VL 等多模态模型的 RLHF Recipe（如医疗影像报告），verl 正在降低垂直领域的 RL 训练门槛。
3. **算力架构多样化**: 社区正在积极推动支持 NVIDIA NeMo 后端以及修复针对华为昇腾 NPU 的异步训练适配。这表明 verl 致力于成为跨硬件架构、可扩展的 Post-training 基础设施。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报摘要
**日期**: 2026-04-20 | **分析对象**: [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issues、无新版本发布，但监控到 **3 项关键的 Pull Requests 更新**。活动主要集中在强化学习核心算法（GRPO）的稳定性增强、资源调度诊断以及基准测试数据流的 Bug 修复。

### 2. 版本发布
**无**。近 24 小时内未发布新版本或 Tag。

### 3. 重点 Issues
**无**。过去 24 小时内无新增或更新的 Issue。

### 4. 关键 PR 进展
今日的 PR 动态反映了项目在工程健壮性和大模型评判（LLM Judge）稳定性上的持续迭代。

*   **#1586 [OPEN] 增强 `grpo_fast` 单节点启动时的资源检查与诊断**
    *   **作者**: taivu1998 | **链接**: [allenai/open-instruct PR #1586](https://github.com/allenai/open-instruct/pull/1586)
    *   **核心变更**: 引入了一个小型的启动资源规划模块。在创建 learner placement group 之前，预检 Ray 可见的 CPU/GPU 资源；同时对 placement-group 的等待时间设置上限，当资源不足时抛出具有可操作性的诊断信息，而不是无限期挂起。
    *   **意义**: 显著提升基于 Ray 的分布式 RL 训练集群在启动阶段的容错性和 Debug 效率。

*   **#1587 [OPEN] 通过受保护的 LiteLLM helper 路由 GRPO LLM judge 调用，提升稳定性**
    *   **作者**: taivu1998 | **链接**: [allenai/open-instruct PR #1587](https://github.com/allenai/open-instruct/pull/1587)
    *   **核心变更**: 重构 `LMJudgeVerifier` 的调用链，将其路由至共享的由信号量保护的 LiteLLM 异步路径，替换了原先对 `litellm.acompletion(...)` 的直接调用。
    *   **意义**: 解决 RL 训练中模型作为评判官时的并发瓶颈，保留基于异常的重试机制和基于使用量的成本核算，有效防止高并发下的 API 崩溃或过载。

*   **#1623 [OPEN] 修复 `save_completion_lengths` 在每次批处理调用时重复写入 CSV header 的 Bug**
    *   **作者**: Chessing234 | **链接**: [allenai/open-instruct PR #1623](https://github.com/allenai/open-instruct/pull/1623)
    *   **核心变更**: 修复了基准测试脚本 `benchmark_generators.py` 中的一个逻辑错误。原代码在每次 batch 循环以追加模式打开文件时都会无条件调用 `writer.writeheader()`，导致表头在 CSV 中被重复污染。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从近期的 Commit 和 PR 路径可以看出，Open Instruct 已经跨越了 RLHF 算法的“概念验证”阶段，正在向**生产级、高并发的 RL 训练基础设施**演进：
1.  **攻克分布式 RL 调痛点**：PR #1586 针对 Ray 集群中常见的“死锁/无限期挂起”问题提供了硬核的预检与超时机制，这在开源 RL 框架中通常是最耗费调试时间的暗病。
2.  **深耕 LLM-as-a-Judge 范式**：PR #1587 表明项目正在严肃对待 LLM Judge（如 GRPO 算法中的 reward model 替代方案）在工程上的并发限流与稳定性问题，这是当前开源 RL 算法落地到复杂任务的核心演进方向。

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

# RL 日报摘要：Gymnasium
**日期**: 2026-04-20 | **项目**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活动趋于平缓。无新增未处理的 Issues，无新版本发布，仅有 2 个历史 Pull Requests 发生了状态更新或被处理（均已关闭）。核心 API 处于稳定维护期。

### 2. 版本发布
过去 24 小时内**无**新版本发布。

### 3. 重点 Issues
过去 24 小时内**无**新增或更新的 Issues。
当前项目处于低问题积压状态，反映出 v1.0.0 之后的 API 具有较高的稳定性。

### 4. 关键 PR 进展
共有 2 条 PR 在近期发生状态变更，均处于 `CLOSED` 状态，涉及环境 Bug 修复及项目商业赞助清理：

*   **[#1558 [CLOSED] Fix Taxi(is_rainy)](https://github.com/Farama-Foundation/Gymnasium/pull/1558)**
    *   **作者**: pseudo-rnd-thoughts
    *   **动态**: 4月19日创建并关闭。
    *   **分析**: 针对经典环境 `Taxi` 中的特定条件（`is_rainy`）逻辑进行了修复。虽然该 PR 已被关闭（可能是方案调整或被其他 PR 替代），但表明维护者仍在持续修复边缘场景下的环境逻辑缺陷。
*   **[#1541 [CLOSED] Remove Sponsorship](https://github.com/Farama-Foundation/Gymnasium/pull/1541)**
    *   **作者**: jkterry1 (项目核心开发者)
    *   **动态**: 3月创建，于 4月18日更新并关闭。
    *   **分析**: 移除了与 Wispr 的赞助协议。这属于项目的商业/社区运营层面操作，表明项目当前的赞助生态发生了变更，可能将回归纯社区驱动或寻求新的资金支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管当前日常更新频率较低，但 Gymnasium 依然是强化学习开源生态的基石：
1. **事实标准**: 作为 OpenAI Gym 的唯一官方精神续作，Gymnasium 制定了目前 Python RL 领域最广泛的 Env-API 交互标准。
2. **底层依赖**: 几乎所有主流 RL 算法库（如 Stable-Baselines3, CleanRL, Ray RLlib 等）和大量前沿研究均依赖该项目进行环境接入与基准测试。
3. **高质量维护**: Farama Foundation 团队将其保持在严格的 v1.0+ 稳定维护期，低 Issue 增长和针对特定环境（如 PR #1558）的持续排障，保证了研究人员生产环境的极高可靠性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

以下是为您生成的 Stable Baselines3 (SB3) 项目 2026-04-20 RL 日报摘要：

# RL 日报：Stable Baselines3 项目动态 (2026-04-20)

## 1. 今日速览
过去 24 小时内，SB3 仓库呈现较高的代码审阅与维护活跃度。共计更新 Issues 4 条，更新 Pull Requests 5 条，无新版本 Releases 发布。核心维护者（araffin）集中处理了依赖项解耦、CI 测试优化及历史特性 PR 的清理工作。

## 2. 版本发布
**无**。距离下一次发版的准备似乎正在进行中，重点在于代码重构与依赖优化。

## 3. 重点 Issues
- **#2245 [OPEN] 文档左侧导航栏滚动不同步问题**
  - **详情**：有开发者报告在阅读右侧文档内容时，左侧导航栏会发生异常跳动或位移。作者（dvcodebase）已着手排查并计划提交修复 PR。
  - **链接**：[DLR-RM/stable-baselines3 Issue #2245](https://github.com/DLR-RM/stable-baselines3/issues/2245)
- **#2241 [CLOSED] 离散动作空间 `start` 偏移量 Bug**
  - **详情**：当环境的动作空间设为 `gym.spaces.Discrete(n, start=X)` 且 `X != 0` 时，SB3 会错误地输出 `[0, n)` 而非 `[X, X+n)` 的无效动作。该 Bug 已确认并找到了对应的修复 PR。
  - **链接**：[DLR-RM/stable-baselines3 Issue #2241](https://github.com/DLR-RM/stable-baselines3/issues/2241)
- **#680 & #1564 [CLOSED] 依赖项与计算优化提案**
  - **详情**：历史议题，分别讨论了将 `pandas` 等重型依赖移至可选安装、以及集成 Intel Extension for PyTorch 以优化 CPU 推理性能。这些讨论在近期的 PR 中得到了实质性推进。
  - **链接**：[Issue #680](https://github.com/DLR-RM/stable-baselines3/issues/680) | [Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)

## 4. 关键 PR 进展
- **#2244 将 `pandas` 和 `matplotlib` 移至可选依赖** `[CLOSED]`
  - **详情**：核心维护者 araffin 提交。为了减轻 SB3 核心库的安装负担（尤其是针对边缘计算设备如 Nvidia Jetson），将数据分析与绘图的依赖剥离出核心安装包。该 PR 标志着 SB3 正在进一步追求轻量化。
  - **链接**：[DLR-RM/stable-baselines3 PR #2244](https://github.com/DLR-RM/stable-baselines3/pull/2244)
- **#2243 优化 CI 测试速度（提升约 1.8 倍）** `[CLOSED]`
  - **详情**：在保持代码覆盖率不变的前提下，将测试运行时间从约 10 分钟缩减至 6 分钟。对开源项目的持续集成效率提升意义重大。
  - **链接**：[DLR-RM/stable-baselines3 PR #2243](https://github.com/DLR-RM/stable-baselines3/pull/2243)
- **#2242 修复离散动作空间的 `start` 偏移处理** `[CLOSED]`
  - **详情**：针对上述 Issue #2241 的直接修复代码，完善了 SB3 对较新版本 Gymnasium API 的兼容性。
  - **链接**：[DLR-RM/stable-baselines3 PR #2242](https://github.com/DLR-RM/stable-baselines3/pull/2242)
- **#2234 & #2223 [CLOSED] 文档更新与 API 边界探索**
  - **详情**：PR #2234 试图引入 `torch.compile` 相关文档并放宽 Gymnasium 版本限制；PR #2223 试图让 `VecEnv.reset()` 额外返回 `infos` 变量。两者均已被关闭（特别是 #2223 未遵循 PR 模板），反映出维护团队对 API 变更和非必要重构保持极其审慎的态度。
  - **链接**：[PR #2234](https://github.com/DLR-RM/stable-baselines3/pull/2234) | [PR #2223](https://github.com/DLR-RM/stable-baselines3/pull/2223)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **坚持极简与高可维护性边界**：从拒绝盲目跟进 `VecEnv` 复杂 API 变更（PR #2223），到移除重度非核心依赖（PR #2244），SB3 依然在 RL 生态中扮演“最稳健、最开箱即用”的基线角色，这对工业界部署和学术复现至关重要。
2. **注重工程效率底座的打磨**：CI 速度的 1.8 倍提升（PR #2243）和对新硬件/编译技术（如 Intel 扩展、`torch.compile`）的持续评估，表明项目核心团队在保证 API 稳定的情况下，一直在优化底层的运算与开发效率。
3. **对上游标准（Gymnasium）的严谨兼容**：修复 `Discrete` 空间的 `start` 偏移 Bug 是一个典型例子，说明 SB3 在处理强化学习环境底层交互逻辑时非常严谨，持续跟进 Farama 基金会 Gymnasium 的最新规范，确保算法与环境对接的绝对正确性。

</details>