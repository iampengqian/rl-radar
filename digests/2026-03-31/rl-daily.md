# RL 开源生态日报 2026-03-31

> 生成时间: 2026-03-30 22:07 UTC | 覆盖项目: 15 个

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

2026年3月31日的 RL 开源生态呈现出明显的**分层与分化**趋势：
1.  **LLM/AGI 基础设施激战**：以 **veRL, TRL, OpenRLHF, AReaL, Slime** 为首的第一梯队正处于高频迭代期，竞争焦点已从单纯的 PPO/DPO 算法实现转向**多模态（VLM）、异构硬件与高吞吐架构**。
2.  **Agentic RL 工程化落地**：**ROLL** 和 **ROCK** 正在填补 LLM 与环境交互的空白，重点解决长轨迹训练与环境集成的工程痛点。
3.  **经典 RL 与学术生态静默**：CleanRL, SB3, Tianshou 等经典项目今日无动态，显示出 LLM post-training 已完全主导了当前 RL 开源社区的资源与注意力。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **veRL** | 17 | 46 | 0 | **多模态路线图确立**，Atropos 生态集成，NPU 支持增强。 |
| **TRL** | 0 | 20 | **v1.0** | **里程碑发布**，全面支持 VLM 工具调用与策略蒸馏，工程成熟度极高。 |
| **Open Instruct** | 0 | 12 | 0 | **Flash Attention 4 / Blackwell** 前瞻性适配，底层设施重构。 |
| **AReaL** | 10 | 15 | 0 | **FP8 训练**与**异步 TP** 性能攻坚，多硬件后端兼容。 |
| **Slime** | 9 | 3 | 0 | **GLM4.7/Qwen3.5** 新架构适配，异步 Rollout 稳定性修复。 |
| **ROLL** | 8 | 3 | 0 | **Agentic 调度**缺陷修复，OpenReward 环境集成。 |
| **ROCK** | 3 | 13 | 0 | **TypeScript SDK** 推进，企业级存储镜像支持。 |
| **OpenRLHF** | 3 | 0 | **v0.9.9** | **Ray 通信重构**与 Pipeline 解耦，专注于性能极限。 |
| **rl_games** | 1 (高热) | 0 | 0 | SAC 实现效能争议，核心算法鲁棒性排查。 |
| **Others** | 0 | 0 | 0 | CleanRL, SB3, Gymnasium 等今日无显著动态。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：多模态与 Agent 交互
*   **多模态 RL (VLM)**：几乎所有主流框架（veRL, TRL, Slime, Open Instruct）均在今日重点解决了 **Qwen3-VL / Qwen3.5** 的训练兼容性问题，包括视觉编码器加载、视频数据维度匹配及工具调用的多模态响应。
*   **Agent 与环境闭环**：从 veRL 的 Atropos 集成到 ROLL 的 OpenReward 支持，再到 Open Instruct 的 SWERL 沙盒，生态正致力于解决 **"LLM as Agent"** 的训练环境标准化问题，重点在于 multi-turn 交互与沙盒执行。

### 2. 工程/基础设施侧信号：异构与性能
*   **下一代硬件适配**：Open Instruct 率先支持 **Blackwell GPU (SM 10.0+)** 和 **Flash Attention 4**；AReaL 和 veRL 则在 **NPU (Ascend)** 和 **FP8 训练**上投入大量资源，试图打破 NVIDIA 的垄断。
*   **推理-训练融合架构**：各项目均在强化 Rollout 阶段的能力。TRL 和 AReaL 深度集成 **vLLM/SGLang**，OpenRLHF 和 Slime 则在探索 **异步 Rollout** 和 **Staleness Control**，以最大化吞吐量。
*   **显存与通信优化**：TRL 引入 Chunked LM Head，OpenRLHF 重构 Ray 通信，显示出在大规模集群下突破显存墙和通信瓶颈的迫切需求。

## 差异化定位分析

*   **TRL (HuggingFace)**：**"应用层标准"**。通过 v1.0 确立了其作为最易用、功能最全的 RLHF 库地位，特别在 Agent 工具调用和算法多样性（DPO/RLOO/GRPO）上领先，适合快速落地。
*   **veRL (Volcengine) & OpenRLHF**：**"高性能引擎"**。两者均侧重于大规模分布式训练。veRL 强调多后端和云原生集成，而 OpenRLHF 专注于 Ray 架构下的极致性能优化与算法解耦。
*   **AReaL (InclusionAI) & Open Instruct (AllenAI)**：**"前沿基建探索者"**。AReaL 专注于异构计算（NPU+GPU）和 FP8 极致性能；Open Instruct 则更激进地拥抱下一代硬件（Blackwell）和 OLMo-core 底层重构。
*   **ROLL & ROCK (Alibaba)**：**"Agentic 操作系统"**。这两个项目更偏向于提供 RL 训练之外的**环境管理与实验编排**能力（如 TypeScript SDK, OSS Mirror, Agent Scheduler），补齐了训练框架在工程运维侧的短板。

## 社区热度与成熟度

*   **成熟度里程碑**：TRL v1.0 的发布标志着通用 RLHF 框架已进入稳定期，API 接口趋于冻结，更适合生产环境接入。
*   **活跃度双雄**：veRL 和 AReaL 展现了极高的迭代速度（PR 数量多），反映出背后厂商（字节跳动、阿里）在 LLM 基础设施上的重兵投入。
*   **长尾痛点**：rl_games 关于 SAC 效能的讨论提醒我们，在 LLM 光环之外，传统控制领域的 RL 库在算法实现的鲁棒性上仍有维护需求，但整体社区重心已严重倾斜。

## 值得关注的趋势信号

1.  **多模态不再是选修课**：Qwen3-VL 等模型在各大框架中的高优先级适配表明，**Video/Image 输入的 RLHF** 已成为 2026 Q2 的标配能力。
2.  **异步 RL (Async RL) 的崛起**：为了解决 LLM 生成与训练的速度不匹配问题，veRL, Slime, AReaL 均在今日提到了异步架构的改进。这预示着 **"生成-训练解耦"** 将成为大规模 RL 系统的标准架构。
3.  **硬件生态的 forks**：Open Instruct 押注 Blackwell/FA4，而 AReaL/veRL 兼容 Ascend NPU。开源社区正在为**后 CUDA 时代**的算力格局做准备，这可能导致未来不同框架在特定硬件上的性能分化加剧。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是 2026-03-31 的 ROLL（github.com/alibaba/ROLL）RL 生态日报摘要：

---

### 📅 日期：2026-03-31
**项目：ROLL (Alibaba)**

### 1. 今日速览
过去 24 小时内，ROLL 仓库保持高活跃度，主要集中在 **Agentic RL 训练稳定性** 与 **生态集成**。
- **Issues 更新**：8 条（其中 3 条聚焦于 Agentic 训练流程的 Bug 与功能请求）。
- **PR 更新**：3 条（重点在于引入 OpenReward 环境与 Trackio 集成）。
- **发布**：无新版本发布，但社区正在积极测试 Qwen3.5 与 vLLM 0.10.2 的兼容性。

### 2. 版本发布
- **Releases**：过去 24 小时无新版本发布。

### 3. 重点 Issues (Technical Highlights)

**a. 环境兼容性与训练崩溃**
- **描述**：用户反馈在使用 `Torch 2.8.0 + vLLM 0.10.2` 并开启 `use_kl_loss` 训练 Qwen2.5-VL-3B 时发生崩溃，回退至 `Torch 2.6.0 + vLLM 0.8.4` 后恢复正常。
- **影响**：表明最新版 vLLM 或 PyTorch 后端在 KL 散度计算上可能存在显存或计算图兼容性问题。
- 🔗 [Issue #398](https://github.com/alibaba/ROLL/issues/398)

**b. Agentic 调度器缺陷**
- **描述**：在使用 `AgentNativeStepEnvManager` 进行 Agent 训练时，LR Scheduler 在 Pipeline 结束前提前耗尽 Step 预算，导致学习率提前归零。
- **影响**：严重影响长序列 Agentic 任务的收敛效果。
- 🔗 [Issue #407](https://github.com/alibaba/ROLL/issues/407)

**c. 旧内核环境部署受阻**
- **描述**：CUDA 平台代码中硬编码了 `expandable_segments:True`，导致在不支持 `pidfd_getfd` 的旧内核（Linux 5.4.0）上报错，且忽略用户配置的环境变量。
- **状态**：已关闭（可能已修复或确认为不支持范围）。
- 🔗 [Issue #408](https://github.com/alibaba/ROLL/issues/408)

**d. 功能请求：Qwen3.5 Sokoban 与 轨迹级优化**
- 用户请求增加 **Qwen3.5 Sokoban** 官方示例 ([#406](https://github.com/alibaba/ROLL/issues/406))。
- 建议为 `AgentNativeStepEnvManager` 增加 **Trajectory-level** 模式，以解决当前按 Step 切分导致的长轨迹训练效率问题 ([#409](https://github.com/alibaba/ROLL/issues/409))。

### 4. 关键 PR 进展

**a. 集成 OpenReward 环境**
- **概述**：PR #401 提议将 [OpenReward](https://openreward.ai) 作为 ROLL 的一等公民环境，使 ROLL 能够直接跑在 OpenReward 平台的容器化任务上。
- **价值**：显著扩展 ROLL 在第三方 Agentic Benchmark 上的适用性。
- 🔗 [PR #401](https://github.com/alibaba/ROLL/pull/401)

**b. 引入 Trackio 监控**
- **概述**：PR #404 添加了 Trackio 集成，用于实验追踪。
- 🔗 [PR #404](https://github.com/alibaba/ROLL/pull/404)

**c. Qwen3.5 ROCK SWE 示例 (已合并/关闭)**
- **概述**：PR #396 增加了 Qwen3.5 的 ROCK Agentic SWE 示例，并修复了新 Transformers 版本的 Chat-template 路径问题。
- 🔗 [PR #396](https://github.com/alibaba/ROLL/pull/396)

### 5. 生态观察：为何关注 ROLL？

**Agentic RL 的 "System 2" 工程化落地**
当前 RL 生态正从简单的 Chat RLHF 向复杂的 Agentic Workflow 转变。ROLL 最近的 Issue（如 #407, #409）和 PR（#396）显示，该项目正在解决 **"长轨迹交互下的 RL 训练"** 这一核心难题（如 LR 调度与 Trajectory 定义）。相比仅关注算法层面的项目，ROLL 提供了一套从环境封装 (`EnvManager`) 到分布式训练的完整工程方案，是构建生产级 Agent 的关键基础设施。

---
*分析师注：建议重点关注 Issue #398 中 vLLM 新版本的兼容性修复，这可能是阻碍当前用户升级技术栈的主要瓶颈。*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目动态 (2026-03-31)

## 1. 今日速览
ROCK 项目今日保持高度活跃，主要集中在 **SDK 功能增强** 与 **代码重构**。过去 24 小时内共有 13 次代码更新，重点完成了 Harbor OSS 镜像配置的开发，并合并了多项针对 ROCK Agent 环境和测试的修复与重构。社区侧也有关于 TypeScript SDK 的持续更新。

## 2. 版本发布
- **无新版本发布**。
- **文档动态**：README 已更新至包含 v1.4.7 版本的历史记录 ([PR #706](alibaba/ROCK PR #706))。

## 3. 重点 Issues
- **[Feature] SDK 支持 Harbor OSS 产物镜像**
  - **编号**：[#707](alibaba/ROCK Issue #707)
  - **详情**：请求 SDK 支持配置 Harbor Job 的 OSS 镜像功能，以便将试验输出自动镜像到对象存储。目前已有对应 PR 提交。
- **[Feature] Agent 环境重构与日志路径定制**
  - **编号**：[#703](alibaba/ROCK Issue #703), [#701](alibaba/ROCK Issue #701)
  - **详情**：涉及 `rock-agent` 环境的重构优化，以及支持用户自定义日志路径 (`/data/logs/user-defined`)，相关功能已关闭并实现。

## 4. 关键 PR 进展
- **feat(sdk): 增加 Harbor OSS 镜像配置** [OPEN]
  - **编号**：[#708](alibaba/ROCK PR #708)
  - **内容**：实现了 `OssMirrorConfig`，允许通过 SDK 启用 OSS 镜像并自动配置凭证，解决了 Issue #707 的需求。
- **refactor: ROCK Agent 环境重构** [CLOSED]
  - **编号**：[#704](alibaba/ROCK PR #704)
  - **内容**：针对 Issue #703 的重构实现，优化了 Agent 的环境配置结构。
- **feat: TypeScript SDK 支持** [OPEN]
  - **编号**：[#492](alibaba/ROCK PR #492)
  - **内容**：社区贡献的 TypeScript SDK，支持沙箱管理、文件系统及 Agent 框架集成，目前仍在更新中。
- **fix: 修复测试无法运行** [CLOSED]
  - **编号**：[#700](alibaba/ROCK PR #700)
  - **内容**：修复了阻碍测试运行的 Bug，保障了主分支的稳定性。

## 5. 为什么值得 RL 生态关注
ROCK 正在从单纯的运行环境向更完善的**实验基础设施**演进：
1.  **企业级特性补全**：通过引入 Harbor OSS Mirror ([#708](alibaba/ROCK PR #708))，强化了对大规模 RL 实验产物的持久化与镜像管理能力，这对生产环境的 RL 训练至关重要。
2.  **多语言生态扩展**：随着 TypeScript SDK ([#492](alibaba/ROCK PR #492)) 的推进，ROCK 正在打破 Python 的边界，这可能有助于 RL Agent 更好地与 Web 技术栈或 Node.js 环境结合。
3.  **架构持续优化**：高频的重构 ([#704](alibaba/ROCK PR #704)) 表明项目正在为后续更复杂的 Agent 逻辑清理技术债务，是一个健康且快速迭代的项目。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-31)

## 1. 今日速览
过去 24 小时内，Slime 社区活跃度中等，共有 12 项更新（9 Issues, 3 PRs）。主要焦点集中在**多模态模型（VLM）支持**、**分布式训练稳定性**（包括 GLM4.7 和 Qwen3.5 等新模型）以及**异步 Rollout 机制的增强**。虽然无新版本发布，但针对 VLM 加载和异步训练的关键修复/增强 PR 值得关注。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues

### 3.1 模型兼容性与转换
*   **[GLM4.7] 权重转换失败**：用户在将 GLM4.7 模型从 HF 转换为分布式格式时遇到 `Unsupported parameter name` 错误，涉及 `post_self_attn_layernorm` 层。
    *   [THUDM/slime Issue #1780](https://github.com/THUDM/slime/issues/1780)
*   **[Qwen3.5] 初始化报错**：在 `nightly-dev-20260307a` 环境下，Qwen3.5 模型参数解析阶段触发 `Megatron` 相关断言错误。
    *   [THUDM/slime Issue #1730](https://github.com/THUDM/slime/issues/1730)
*   **[Kimi K2.5] INT4 SFT 训练报错**：使用 Megatron-Bridge 加载 Kimi K2.5 进行 INT4 SFT 训练时，在 `fused_attn` 模块发生崩溃。
    *   [THUDM/slime Issue #1783](https://github.com/THUDM/slime/issues/1783)

### 3.2 训练与推理 Bug
*   **[DP>1] 日志索引越界**：开启 `--log-correct-samples` 且数据并行（DP）大于 1 时，由于 `raw_reward` 未按 DP rank 分割，导致 `log_rollout_data` 出现 `IndexError`。
    *   [THUDM/slime Issue #1784](https://github.com/THUDM/slime/issues/1784)
*   **[多步训练] 同步函数断言失败**：在第二步训练迭代中，`overlap-grad` 相关逻辑导致 `assert config.no_sync_func is None` 触发崩溃。
    *   [THUDM/slime Issue #1779](https://github.com/THUDM/slime/issues/1779)
*   **[VLM] 蒸馏支持缺陷**：使用 SGLang 作为 VLM Teacher 进行 On-policy distillation 时，`/generate` 接口无法传递图像信息，当前尚不支持 VLM OPD。
    *   [THUDM/slime Issue #1758](https://github.com/THUDM/slime/issues/1758)

## 4. 关键 PR 进展

### 4.1 功能增强
*   **异步 Rollout 机制大修 (PR #1781)**：提出增强版异策略（Off-Policy）异步 Rollout。引入了 **Staleness Control（时效性控制）** 以过滤过期样本，并增加了 **Partial Rollout** 支持，旨在解决现有 `one_step_off` 和 `fully_async` 模式在版本控制和长上下文处理上的局限性。
    *   [THUDM/slime PR #1781](https://github.com/THUDM/slime/pull/1781)

### 4.2 Bug 修复
*   **修复 Qwen3-VL 视觉模块加载 (PR #1727)**：通过 Backport `sglang#19333`，修复了 Qwen3-VL 在 sglang v0.5.9 中因权重名称映射缺失（`model.visual.` -> `visual.`）导致的视觉组件加载失败问题。
    *   [THUDM/slime PR #1727](https://github.com/THUDM/slime/pull/1727)
*   **并发数据加载优化 (PR #1485)**：为 Eager Dataset 添加了并发加载功能，旨在加速数据预处理流程（已关闭，可能已合并或中止）。
    *   [THUDM/slime PR #1485](https://github.com/THUDM/slime/pull/1485)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 正在快速迭代以适应**大模型（LLM/VLM）极速膨胀的架构复杂性**。
1.  **紧跟 SOTA 模型**：Issues 中频繁出现 Qwen3.5、GLM4.7、Kimi K2.5 等最新模型的适配问题，表明该项目是 THUDM 生态中支持最新大模型训练的先锋。
2.  **攻克分布式 RL 难点**：针对大规模训练中的痛点（如 DP 状态同步、异步 Rollout 的样本时效性）提供了直接的修复和架构升级（PR #1781），显示出团队在构建高效、稳定的大规模 RLHF 系统方面的深厚积累。
3.  **多模态深化**：对 VLM（Qwen3-VL 等）的微调和蒸馏支持是当前的重点工作方向，填补了纯文本 RL 生态在多模态场景下的空白。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是 **AReaL** 项目 2026-03-31 的 RL 日报摘要。

---

### 📅 AReaL RL 日报 (2026-03-31)

#### 1. 今日速览
AReaL 生态今日保持高度活跃，**Issues 更新 10 条，PR 更新 15 条**。社区重点关注 **Archon 引擎的性能优化**（FP8 训练、异步 TP）与 **多后端推理服务的兼容性**（vLLM/SGLang）。此外，针对 NPU 环境的 Bug 修复和 IPv6 环境的支持标志着项目正在向更广泛的基础设施兼容性迈进。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 重点 Issues
*   **[Roadmap] 2026 Q1 Milestones** [#907](https://github.com/inclusionAI/AReaL/issues/907)
    *   **摘要**：目前正处于 Q1 路线图的冲刺阶段，详细规划了截至 4 月底的增强功能，明确区分了正在进行和计划中的任务，是指引贡献者的核心文档。
*   **[Feature] Async Tensor Parallelism for Archon Engine** [#1110](https://github.com/inclusionAI/AReaL/issues/1110)
    *   **摘要**：提议为 Archon 引擎引入异步张量并行，旨在通过计算通信重叠提升大规模推理与训练效率。
*   **[Feature] Load dataset distributedly in single-controller mode** [#1111](https://github.com/inclusionAI/AReaL/issues/1111)
    *   **摘要**：计划创建 `DataController` 以解决单控模式下中心化数据加载带来的性能瓶颈。
*   **[BUG] kl_ctl > 0 时训练报错 (NPU)** [#1099](https://github.com/inclusionAI/AReaL/issues/1099)
    *   **摘要**：在使用 Reference Model（kl_ctl > 0）时，NPU 环境下出现训练报错，目前待解决。

#### 4. 关键 PR 进展
*   **feat(inference-service): Complete vLLM backend support** [#1112](https://github.com/inclusionAI/AReaL/pull/1112)
    *   **进展**：[OPEN] 完善了实验性推理服务栈中的 vLLM 后端支持，实现了与现有 SGLang 桥接器的功能对等（包括上下文窗口管理等）。
*   **feat(archon): Add FP8 blockwise training support** [#1087](https://github.com/inclusionAI/AReaL/pull/1087)
    *   **进展**：[OPEN] 基于 `torchao` 为 Archon 引擎添加 128x128 块级 FP8 训练支持，支持 BF16 主权重和即时量化，涵盖 Dense 层和 MoE 计算。
*   **fix(dataloader): Prevent data drop during validation** [#1100](https://github.com/inclusionAI/AReaL/pull/1100)
    *   **进展**：[CLOSED] 修复了验证阶段因硬编码 `drop_last` 和 Padding 导致的指标不准确问题，确保评估数据的完整性。
*   **refactor(engine): Abstract CUDA calls for multi-platform** [#1108](https://github.com/inclusionAI/AReaL/pull/1108)
    *   **进展**：[CLOSED] 在 `PerLayerOptimWrapper` 中抽象了 CUDA 调用，替换为 `current_platform` 接口，为非 CUDA 加速器（如 NPU）铺平道路。
*   **feat: Support IPv6-only environment** [#1072](https://github.com/inclusionAI/AReaL/pull/1072)
    *   **进展**：[CLOSED] 打破了仅支持 IPv4 的限制，使得 AReaL 可以在纯 IPv6 云环境或内网环境中进行分布式训练。

#### 5. 为什么值得持续关注
AReaL 正在从一个标准的 RLHF 框架向**高性能、异构兼容的 RL 基础设施**演进。
1.  **极致性能优化**：通过引入 Async TP 和 FP8 训练（PR #1087, #1110），AReaL 正在压榨硬件的极限性能，这对大规模 LLM 训练至关重要。
2.  **打破硬件壁垒**：近期关于 NPU 的 Bug 修复（Issue #1099）和 CUDA 抽象层的重构（PR #1108）表明，AReaL 致力于摆脱对 NVIDIA 生态的单一依赖，构建跨平台的 RL 训练能力。
3.  **灵活的推理后端**：同时深度集成 vLLM 和 SGLang（PR #1112），为用户提供了在推理速度和功能上的多样化选择，适应不同的 RL rollout 需求。

---

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL RL 日报摘要 (2026-03-31)

你好，这是基于 TRL (Transformer Reinforcement Learning) GitHub 仓库 2026-03-31 数据生成的日报。

## 1. 今日速览
TRL 仓库今日活动频繁，核心聚焦于 **v1.0 正式版的发布**以及后续的**功能增强**。过去 24 小时内，虽然 Issues 版块无新增，但 PR 更新高达 20 条。主要亮点包括引入高效策略蒸馏训练器、GRPO 算法的多模态与内存优化，以及 DPO 损失函数的改进。

## 2. 版本发布
- **[Release v1.0]** TRL 正式发布 v1.0 版本。
  - 链接: [PR #5409](https://github.com/huggingface/trl/pull/5409)
- **[Dev Version]** 开发版本号已由 PR #5410 进行了 bump 更新，为下一阶段开发做准备。
  - 链接: [PR #5410](https://github.com/huggingface/trl/pull/5410)
- **[Documentation]** 更新了 "What's New" 以配合 TRL v1.0 博客文章的发布。
  - 链接: [PR #5385](https://github.com/huggingface/trl/pull/5385)

## 3. 重点 Issues
今日无新增 Issue 记录。

## 4. 关键 PR 进展

### 🚀 核心算法与功能增强
- **新增策略蒸馏训练器**
  - **描述**: 引入 `DistillationTrainer`，用于高效策略蒸馏。
  - **链接**: [PR #5407](https://github.com/huggingface/trl/pull/5407)

- **GRPO 信任域方法扩展 (PSPO)**
  - **描述**: 为 `GRPOTrainer` 添加 PSPO (Probability Smoothing Policy Optimisation) 作为替代 clipping 的信任域方法。
  - **链接**: [PR #4548](https://github.com/huggingface/trl/pull/4548)

- **DPO 损失函数优化**
  - **描述**: 为 DPO trainer 添加了长度归一化 Sigmoid 损失类型，该方法被 Tulu-3/OLMo 模型采用。
  - **链接**: [PR #5406](https://github.com/huggingface/trl/pull/5406)

### 🖼️ 多模态 与 Agent 支持
- **VLM 工具响应多模态支持**
  - **描述**: 扩展 `environment_factory`，使其工具方法能返回包含图像和文本的多模态内容块，支持 VLM 训练。
  - **链接**: [PR #5323](https://github.com/huggingface/trl/pull/5323)

- **GRPO 工具过滤功能**
  - **描述**: 允许 `GRPOTrainer` 通过数据集中的 `tools` 列进行样本级的工具过滤。
  - **链接**: [PR #5398](https://github.com/huggingface/trl/pull/5398)

- **多模态日志控制**
  - **描述**: 在 `GRPOConfig` 和 `RLOOConfig` 中引入 `log_multimodal` 参数，控制是否记录图像数据，防止高分辨率图像导致日志过大。
  - **链接**: [PR #5408](https://github.com/huggingface/trl/pull/5408)

### ⚡️ 性能与基础设施优化
- **AsyncGRPO 内存优化**
  - **描述**: 为 `AsyncGRPOTrainer` 添加分块 LM Head (`chunked LM head`)，通过在线 logsumexp 计算逐个 token 的 log-probs，避免实例化完整的 logits 张量，显著降低显存占用。
  - **链接**: [PR #5349](https://github.com/huggingface/trl/pull/5349)

- **自蒸馏训练器集成 vLLM**
  - **描述**: 为实验性的 SDPO 和 SDFT 自蒸馏训练器添加 vLLM 推理支持，加速生成 completions。
  - **链接**: [PR #5388](https://github.com/huggingface/trl/pull/5388)

- **Qwen 3.5 模板更新**
  - **描述**: 添加了 Qwen 3.5 小参数量模型（如 0.8B）使用的聊天模板变体。
  - **链接**: [PR #5405](https://github.com/huggingface/trl/pull/5405)

### 🛠️ CI/CD 与稳定性修复
- **修复 Liger Kernel 崩溃**: 解决了多 GPU 环境下 `device_map="auto"` 导致的 GRPO 训练崩溃问题。 ([PR #5340](https://github.com/huggingface/trl/pull/5340))
- **CI 认证优化**: 添加 `HF_TOKEN` 环境变量以解决未认证请求导致的限速和 CI 变慢问题。 ([PR #5397](https://github.com/huggingface/trl/pull/5397))
- **测试一致性改进**: 提升 RLOO 与 GRPO 测试的一致性；修复了针对 Qwen3VL 和 FSDP2 的不稳定测试。 ([PR #5396](https://github.com/huggingface/trl/pull/5396), [PR #5402](https://github.com/huggingface/trl/pull/5402), [PR #5403](https://github.com/huggingface/trl/pull/5403))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL v1.0 的发布标志着该项目已进入成熟阶段。当前的发展趋势表明，TRL 正在成为 LLM 后训练的事实标准框架，特别是在以下几个方面：
1.  **前沿算法落地极快**：不仅迅速跟进 DPO、RLOO、GRPO 等主流算法，还在积极整合 PSPO、SimPO 等最新研究改进（如 Length-normalized loss）。
2.  **深度适配 Agent 与多模态**：PR 动态显示团队正在大力投入 VLM 的 RL 训练支持（多模态工具响应、图像日志控制），这是目前 LLM 应用最前沿的方向。
3.  **工程化能力成熟**：从 vLLM 推理集成到显存优化（Chunked LM Head）再到 CI/CD 的完善，TRL 正在解决大规模训练中的实际痛点，而不仅仅是提供算法 Demo。

对于希望在生产环境中应用 RLHF 或训练 Agentic 模型的开发者，TRL 是目前最活跃且工程完备度最高的选择。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-03-31)

## 1. 今日速览
OpenRLHF 今日发布了重要的底层优化版本 **v0.9.9**，重点重构了 RL Pipeline 并显著提升了 Ray 通信性能。社区方面，关于 **Qwen 3.5/3VL** 系列模型的适配与训练稳定性问题成为关注焦点，官方 Roadmap 讨论仍在持续更新中。

## 2. 版本发布
- **[Release v0.9.9](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.9.9)**
  - **核心变更**：聚焦于内部代码重构与 Ray 通信性能优化。
  - **详细更新**：
    - 重构了 RL 流水线，提升了代码的模块化程度。
    - 优化了实验管理与 Checkpoint（检查点）管理逻辑。
    - 改进了经验生成的处理流程。

## 3. 重点 Issues
- **[#568 OpenRLHF Development Roadmap](https://github.com/OpenRLHF/OpenRLHF/issues/568)**
  - **类型**：Roadmap / Documentation
  - **摘要**：官方发布了开发路线图，明确了核心原则是在**保持易用性和代码可读性** 的前提下极致优化性能。规划包括解耦非 Ray 版本的 PPO trainer、实现 Single Controller 架构等，该项目正朝着更高效、更简洁的架构演进。

- **[#1194 Support Qwen 3.5](https://github.com/OpenRLHF/OpenRLHF/issues/1194)**
  - **类型**：Bug / Feature Support
  - **摘要**：用户在 v0.9.5 版本中尝试训练 `Qwen3.5-4b` 时遇到 Traceback 错误。随着 Qwen 系列模型的快速迭代，OpenRLHF 对最新架构的及时适配和稳定性支持是目前用户反馈的高频痛点。

- **[#1175 Support Qwen3vl GRPO？](https://github.com/OpenRLHF/OpenRLHF/issues/1175)**
  - **类型**：Feature Request
  - **摘要**：社区询问是否支持对 `Qwen3-VL` 多模态模型进行 GRPO (Group Relative Policy Optimization) 训练。这反映了开源社区对多模态大模型 RLHF 训练流程的迫切需求。

## 4. 关键 PR 进展
- **过去 24 小时无 PR 更新**。鉴于刚刚发布了包含重大重构的 v0.9.9 版本，预计短期内会有针对新版本的修复或文档补充 PR 产生。

## 5. 为什么值得持续关注
OpenRLHF 正在通过 **v0.9.9** 的发布证明其**工程化深度**：它不再仅仅是一个算法实现库，而是正在通过重构 Ray 通信和 RL Pipeline，解决分布式训练中的性能瓶颈。
同时，Issues 中关于 **Qwen 3.5/3VL** 的讨论表明，该项目是目前**紧跟 SOTA 大模型（尤其是中文生态）** 最活跃的 RLHF 框架之一，对于需要微调最新开源模型的开发者来说，是必不可少的工具链。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# veRL 日报摘要 (2026-03-31)

你好！这是基于 `volcengine/verl` 最新 GitHub 动态生成的强化学习（RL）生态日报。

## 1. 今日速览
过去 24 小时内，veRL 项目活跃度较高，共有 **46 个 PR 更新**（含大量新功能提交与 Bug 修复）和 **17 个 Issue 更新**。社区重点关注 **多模态 RL（Multi-modal RL）** 的 2026 Q2 路线图规划，以及 **Atropos** 环境集成与 **异步 RL（Async RL）** 的稳定性修复。暂无新版本 Release 发布。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues

### 🗺️ 路线图与生态集成
*   **Multi-modal Generation RL 2026Q2 Roadmap** [#5755](https://github.com/verl-project/verl/issue/5755)
    *   **内容**：定义了下一季度的核心开发方向，涵盖 Rollout Engine (vLLM-Omni) 增强、TP/DP 支持验证以及多模态生成的架构优化。
    *   **热度**：👍 10，评论 9 条。

*   **[Call for contribution] Atropos integration ($2500 bounty)** [#1782](https://github.com/verl-project/verl/issue/1782)
    *   **内容**：Nous Research 提议集成 Atropos RL 环境库，支持 multi-turn/multi-agent 场景，社区正在热烈讨论集成方案。

### 🐛 关键缺陷与讨论
*   **Multi-turn 场景下 `filter_overlong_prompts` 失效** [#2069](https://github.com/verl-project/verl/issue/2069)
    *   **详情**：在多轮对话训练中使用 `filter_overlong_prompts=True` 会导致 Tensor 尺寸不匹配，影响自定义数据集训练。
*   **视频数据训练维度不匹配** [#5554](https://github.com/verl-project/verl/issue/5554)
    *   **详情**：在同一 Batch 中混合不同时长（帧数）的视频数据进行 RLHF 训练时，触发 `position_ids` 维度错误。
*   **异步训练挂起** [#5815](https://github.com/verl-project/verl/issue/5815)
    *   **详情**：主分支 (0.8.0dev) 的异步训练流程出现 Hang 住的情况，亟待排查。
*   **FSDP2 Offload 与 LoRA 设备不匹配** [#5390](https://github.com/verl-project/verl/issue/5390)
    *   **详情**：在使用 FSDP2 offload 时，LoRA 分层汇总触发 `CPU vs CUDA:0` 错误。

## 4. 关键 PR 进展

### 🚀 新功能与生态
*   **Atropos RL 环境集成 (GRPO)** [#5520](https://github.com/verl-project/verl/pull/5520)
    *   通过三个 Reflex Hooks 将 Atropos 环境与 veRL 的 GRPO 流程打通。
*   **TRTLLM Async RL 支持** [#5631](https://github.com/verl-project/verl/pull/5631)
    *   为 TensorRT-LLM Rollout 引擎启用异步 RL 能力。
*   **Ascend (NPU) 生态支持** [#5814](https://github.com/verl-project/verl/pull/5814) & [#5804](https://github.com/verl-project/verl/pull/5804)
    *   新增 IPC 开关及 NPU `expandable_segments` 支持，并引入 Ascend A2/A3 的 SGLang Docker 构建流水线。
*   **自定义 Checkpoint 插件** [#5718](https://github.com/verl-project/verl/pull/5718)
    *   增加 Hooks 以支持用户注入自定义的 Checkpoint 引擎，方便对接各种存储后端。

### 🛠️ 重要修复
*   **FSDP Buffer 权重同步修复** [#5801](https://github.com/verl-project/verl/pull/5801)
    *   修复了 FSDP 训练期间更新的 registered buffers（如 DeepSeek V3 的 `e_score_correction_bias`）未能同步到 Rollout 引擎的问题。
*   **Step 模式断点续训修复** [#5805](https://github.com/verl-project/verl/pull/5805)
    *   解决了在 Step 模式下恢复训练时，因 Epoch 循环限制导致训练提前退出的 Bug (Issue #5013)。
*   **SGLang LoRA Adapter 路径修复** [#5769](https://github.com/verl-project/verl/pull/5769)
    *   修复了 SGLang Rollout 在 LoRA 模式下 `sleep()` 错误释放权重的问题。
*   **Qwen3-VL 视觉编码器兼容性** [#5761](https://github.com/verl-project/verl/pull/5761)
    *   处理了不同 `transformers` 版本下 Qwen3-VL 输出格式不一致导致的 `ValueError`。

## 5. 为什么值得持续关注
veRL 正在从单一的 PPO/GRPO 训练框架演进为 **全栈、多模态、异构计算** 的 RL 基础设施：
1.  **多模态前沿探索**：随着 2026 Q2 Roadmap 的发布，veRL 正加速解决 Video/Data mixing 等多模态训练痛点，这是当前 LLM 向 Omni-model 进化的关键瓶颈。
2.  **异构硬件支持**：对 NVIDIA TRTLLM 和华为 Ascend NPU 的双重异步 RL 支持，显示了其在多硬件生态中的通用性与高性能追求。
3.  **架构解耦与灵活性**：通过引入 Atropos 集成和 Checkpoint Plugin 机制，veRL 正在降低定制化环境与存储后端的接入门槛，适合有定制化 RL 需求的开发者。

---
*数据来源: GitHub API*

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-03-31)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库**无新增 Issues 或版本发布**，活动主要集中在 **Pull Requests** 的迭代与合并。项目今日重点在于**底层硬件适配**与**训练基础设施的现代化**。

- **PR 活跃度**：12 条更新（5 条 Closed，7 条 Open）。
- **核心趋势**：全面拥抱新一代硬件架构与算法工程化。

## 2. 版本发布
**无**。

## 3. 重点 Issues
**无**。

## 4. 关键 PR 进展

今日的 PR 动态显示了项目在底层算力支持和训练范式上的重大升级。

### 🔥 硬件与性能优化
*   **[CLOSED] Flash Attention 4 支持与 Blackwell GPU 适配**
    PR #1569 正式引入了对 **Flash Attention 4** 的支持，专门针对 NVIDIA Blackwell 架构 (SM 10.0+)。同时将默认注意力机制回退至 FA2 以排查学习率问题，并统一了 `olmo_core` 中的 Attention Backend 定义，消除了 HF 字符串常量的冗余。
    🔗 [PR #1569](https://github.com/allenai/open-instruct/pull/1569)

*   **[CLOSED] 自动化 Flash Attention 配置**
    PR #1567 移除了手动配置标志，实现了基于模型配置的 Attention Backend 自动检测。该更新统一了 DPO、GRPO 和 SFT 的后端逻辑，并修复了 vLLM 引擎初始化导致的 GPU 测试死锁问题。
    🔗 [PR #1567](https://github.com/allenai/open-instruct/pull/1567)

*   **[CLOSED] CUDA 版本回退**
    PR #1562 将 CUDA 版本修正回 12.8，确认此前对 12.9 的依赖是误判。
    🔗 [PR #1562](https://github.com/allenai/open-instruct/pull/1562)

### 🛠 训练基础设施 与算法统一
*   **[OPEN] Olmo-core SFT 脚本重构**
    PR #1327 提交了新的 `olmo_core_finetune.py`。该脚本旨在替代旧版 `finetune.py`，在保持 CLI 接口不变的前提下，底层切换至 OLMo-core 的高性能基础设施（FSDP/HSDP、SkipStepAdamW），大幅提升 SFT 效率。
    🔗 [PR #1327](https://allenai/open-instruct/pull/1327)

*   **[OPEN] GRPO 指标对齐与算法一致性**
    PR #1552 致力于解决 `olmo_core_train_modules.py` 与 `grpo_fast.py` 之间的指标差异。它统一了 Loss、KL 散度、Clip Fraction 等关键指标的命名与计算逻辑，确保新旧训练路径的实验可复现性。
    🔗 [PR #1552](https://github.com/allenai/open-instruct/pull/1552)

### 🧪 RL 环境与模型生态
*   **[OPEN] SWERL 沙盒环境**
    PR #1492 新增了 `SWERLSandboxEnv`，这是一个基于 Docker 的 RL 环境，扩展了 `GenericSandboxEnv`，支持通过 `submit` 工具执行独立的测试套件。这对代码生成任务的 RL 训练至关重要。
    🔗 [PR #1492](https://github.com/allenai/open-instruct/pull/1492)

*   **[OPEN] Qwen3.5 VLM 支持**
    PR #1568 正在适配 Qwen3.5 视觉语言模型。由于 FA3 暂不兼容，该 PR 将 SDPA 设为默认后备方案，并升级了 Liger-Kernel 以适配新版 Transformers。
    🔗 [PR #1568](https://github.com/allenai/open-instruct/pull/1568)

### 📝 其他
*   **[CLOSED] CI 修复与文档补充**
    PR #1571 通过添加 `--no_auto_dataset_cache` 修复了 CI 超时问题；PR #1570 补充了 Git LFS 的相关文档。
    🔗 [PR #1571](https://github.com/allenai/open-instruct/pull/1571) | [PR #1570](https://github.com/allenai/open-instruct/pull/1570)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **下一代硬件的前瞻性适配**：在多数开源项目仍在适配 H100/Ampere 架构时，Open Instruct 已经开始合并 **Blackwell GPU (SM 10.0+)** 和 **Flash Attention 4** 的代码。这表明该项目具备极强的硬件敏锐度，是未来大规模模型训练的先行者。
2.  **从 "Scripts" 向 "Infrastructure" 的演进**：通过引入 `olmo_core_finetune.py` 和重构 GRPO 模块，项目正在从单纯的训练脚本集合转变为基于 **OLMo-core** 的高性能训练框架。这种底层重构通常意味着更好的分布式训练扩展性和稳定性。
3.  **可执行的 RL 环境**：`SWERLSandboxEnv` 的加入表明项目正在解决 LLM + RL 中最棘手的"环境交互"问题。通过 Docker 化的沙盒执行，为代码生成等复杂任务提供了更安全、可控的 RL 训练基础。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 项目动态 (2026-03-31)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库活动主要集中在现有疑难问题的深度讨论上。虽然无代码合并或版本发布，但关于 **SAC（Soft Actor-Critic）算法** 实现效能的 Issue 引发了较高关注度的社区交互，显示出用户对库在复杂物理仿真（如无人机控制）中性能差异的敏锐监察。

- **Issues 活跃度**：高（单日新增评论推动的长尾讨论）
- **代码变动**：无

---

## 2. 版本发布
过去 24 小时内 **无新版本发布**。

---

## 3. 重点 Issues
本期聚焦于算法核心实现的鲁棒性与性能对比问题。

### 🚨 #341 SAC 算法在无人机控制任务中表现异常
*   **状态**: `[OPEN]`
*   **热度**: 🔥 **25 条评论**（更新于 03-30）
*   **链接**: [Denys88/rl_games Issue #341](https://github.com/Denys88/rl_games/issues/341)
*   **摘要**: 开发者报告在无人机纯电机控制（无底层飞控）环境中，`rl_games` 的 SAC 实现无法复现 Stable Baselines3 (SB3) 的收敛效果。
    *   **现象**: SB3 在 1M 步迭代内即可见效，而迁移至 `rl_games` 的相同逻辑代码无进展。
    *   **技术点**: 涉及 SAC 的熵温度参数调整、探索策略及不同框架下的超参数敏感度差异。该 Issue 正在深入排查是否为库本身的实现缺陷或默认配置问题。

---

## 4. 关键 PR 进展
过去 24 小时内 **无活跃的 Pull Requests**。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日无代码更新，`rl_games` 依然是 RL 社区特别是 **Isaac Gym / Isaac Lab** 生态中的核心依赖库。

1.  **极致的向量加速能力**: 相比 SB3 等标准库，`rl_games` 针对大规模并行环境（如数千个并行智能体）进行了深度优化，是处理高吞吐量 Sim-to-Real 任务的首选。
2.  **算法广度与兼容性**: 支持 PPO, SAC, DQN 等多种主流算法，且不仅限于 PyTorch，在 NVIDIA 的物理仿真闭环中具有不可替代的生态位。
3.  **工业级验证**: 虽然社区偶尔报告 SAC 等算法在特定边缘 case 下的波动（如 Issue #341），但该项目已被广泛用于各种机器人竞赛和工业控制基线，其 PPO 实现的稳定性经过了大量实机验证。

---
*分析师注：建议持续关注 Issue #341 的后续进展，若确认为 SAC 实现缺陷，可能影响依赖该库进行连续控制任务的下游项目。*

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>