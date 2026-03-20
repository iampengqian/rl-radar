# RL 开源生态日报 2026-03-21

> 生成时间: 2026-03-20 22:02 UTC | 覆盖项目: 15 个

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

2026年3月21日的 RL 开源生态呈现出明显的**分层与聚焦**态势。
以 **LLM/Generative AI** 为核心的训练框架占据了绝对的主导地位，其中第一梯队的 **verl**、**TRL** 和 **OpenRLHF** 活跃度极高，正在经历从“支持模型训练”向“支持 Agentic 工作流与异步架构”的代际跨越。
第二梯队的 **Open Instruct** 和 **AReaL** 则在底层架构（如 vLLM 集成、FSDP2）上进行深度重构，试图解决长上下文与异构计算的工程瓶颈。
相比之下，传统的通用 RL 库（如 **SB3**）仅保持着低频的维护性更新，而 **CleanRL**、**Tianshou** 等项目在过去24小时内处于静默状态。

## 各项目活跃度对比

*注：仅统计有明确动态更新的项目，静默项目未列入。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 12 | 30 | 0 | **爆发式增长**。Agentic RL（2048/Tool use）与 Qwen3.5 适配齐头并进，社区响应极快。 |
| **TRL** | 5 | 18 | 1 (v0.29.1) | **架构重构**。Async GRPO 系列重构是核心，同步修复了多模态与 SFT 紧急 Bug。 |
| **Open Instruct** | 0 | 16 | 0 | **性能深水区**。集中攻克 vLLM 0.16 适配与 32k 长上下文通信超时问题。 |
| **AReaL** | 3 | 7 | 0 | **解耦与标准化**。正在废弃旧的资源配置逻辑，引入显式 Backend 解耦。 |
| **OpenRLHF** | 1 | 2 | 0 | **核心升级**。全面合并 FSDP2 支持，修复 Ray 混合部署下的序列化硬伤。 |
| **SB3** | 1 | 3 | 0 | **维护模式**。讨论底层数据结构现代化，清理低质量 PR。 |
| **Slime** | 1 | 2 | 0 | **前沿适配**。紧跟 Qwen3.5 多轮 SFT 与 B200 FP8 训练。 |
| **ROLL** | 0 | 2 | 0 | **异构计算**。增加 CoreX BI-V150 芯片支持，探索非 NVIDIA 硬件生态。 |
| **ROCK** | 0 | 1 | 0 | **功能补全**。增加 Proxy 接口，提升环境连接灵活性。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：Agentic RL 与 异步性
*   **Agentic 交互标准化**：**verl** 新增的 2048 游戏训练示例与 **TRL** 的 Environment Factory 更新表明，社区正致力于定义 LLM 与外部环境交互的标准接口，从单纯的“对话模型”转向“决策模型”。
*   **异步 GRPO (Async GRPO)**：**TRL** 提交的一系列 PR（#5318-#5322）与 **AReaL** 的拒绝采样讨论，标志着业界正在集中攻克异步训练中的 Staleness（数据过期）问题，这是提升大规模 RLHF 效率的关键学术方向。
*   **新算法集成**：**TRL** 引入 SDPO（自蒸馏策略优化），显示出对 SOTA 算法的快速跟进，旨在通过高奖励轨迹蒸馏提升训练效果。

### 2. 工程/基础设施侧信号：FSDP2 与 推理-训练一体化
*   **FSDP2 全面迁移**：**OpenRLHF** 合并了关键 PR #1197，**Open Instruct** 也在持续优化相关逻辑。FSDP2 因其更优的显存管理与大规模扩展性，正在成为新一代 RL 框架的标配。
*   **推理引擎深度耦合**：**Open Instruct** 迁移至 vLLM 0.16.0 原生 API，**verl** 讨论 SGLang Router。这反映了 RL 框架不再将推理视为黑盒，而是通过深度定制权重传输与 Router 来消除在线 RL 的瓶颈。
*   **长上下文优化**：**Open Instruct** 针对 32k 上下文的通信优化（Batch RPC）表明，随着推理链的增长，长上下文 RL 训练的通信墙已成为工程攻坚重点。

## 差异化定位分析

*   **verl (全能型应用层)**：目前最激进的“全能选手”。不仅最快支持 Qwen3.5 等新模型，还通过 2048 示例等降低 Agentic RL 门槛，适合希望快速落地最新模型与 Agent 能力的工业界团队。
*   **TRL (学术与多模态实验平台)**：依托 Hugging Face 生态，侧重于 SFT 与 RLHF 的无缝衔接及多模态扩展。其 Async GRPO 的重构显示出其致力于成为大模型 RL 算法的标准实验床。
*   **Open Instruct (高性能基础设施)**：侧重于大规模分布式训练的极致优化（如 Olmo-core, vLLM 深度集成）。适合需要定制底层通信、处理超长序列或进行大规模多节点训练的团队。
*   **OpenRLHF (稳定性与标准化)**：作为老牌劲旅，目前专注于通过 FSDP2 和 Ray 修复提供稳定、可靠的 RLHF 流程，是许多项目二次开发的稳健基座。
*   **AReaL / ROLL (异构与解耦)**：关注后端架构的解耦与异构硬件支持（如 CoreX），试图解决单一硬件生态的成本与扩展性问题。

## 社区热度与成熟度

*   **高热度 - 快速迭代期**：**verl** 和 **TRL** 的 Issues 与 PR 数量显著高于其他项目，且用户反馈集中在最新模型（Qwen3.5, Llama 3.2）的适配问题上，说明其正处于技术采用曲线的陡峭上升期。
*   **中热度 - 工程深耕期**：**Open Instruct** 和 **OpenRLHF** 虽然显性讨论较少，但提交的 PR 多为重构与核心修复，代码量大且技术难度高，显示出成熟的工程维护特征。
*   **低热度 - 稳定期**：**SB3** 等传统 RL 库进入平稳维护阶段，更多关注代码规范与现有功能的微调，而非架构性变革。

## 值得关注的趋势信号

1.  **Qwen3.5 生态争夺战**：**verl**, **TRL**, **Slime** 在同一时间密集发布针对 Qwen3.5 的支持或修复。这表明，能否在 24 小时内适配最新的开源 SOTA 模型，已成为 RL 框架竞争的核心护城河。
2.  **异步架构是未来标配**：随着模型参数与任务复杂度的增加，同步训练已无法满足效率需求。**Async GRPO** 和异步拒绝采样技术的落地，预示着大规模 RL 训练正在向“容错”与“最终一致性”架构演进。
3.  **异构计算觉醒**：**ROLL** 项目引入 CoreX 支持是一个重要信号。在 2026 年，随着专用 AI 芯片的多元化，RL 框架不再仅仅适配 CUDA，而是开始构建跨硬件的抽象层，以应对算力成本控制的压力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

这里是针对 ROLL（github.com/alibaba/ROLL）项目的 2026-03-21 RL 日报摘要。

---

# ROLL 项目日报 (2026-03-21)

## 1. 今日速览
过去 24 小时内，ROLL 项目代码仓库维持低频但高针对性的更新节奏。虽然无新版本发布且无新增 Issue，但核心贡献者提交了 2 个关键 PR。重点在于**文档优化**与**底层硬件/架构兼容性的扩展**，显示出项目正在完善其对特定计算架构的支持。

## 2. 版本发布
*   **无**
    *   *分析师注：当前处于稳定开发迭代期，暂无正式版或补丁版发布。*

## 3. 重点 Issues
*   **无新增**
    *   *分析师注：当前暂未监测到新的社区反馈或 Bug 报告，项目维护状态平稳。*

## 4. 关键 PR 进展
本日共监测到 2 个 Pull Requests，主要集中在文档与底层支持层面。

*   **[#393] Add CoreX BI-V150 compatibility support**
    *   **状态**: OPEN
    *   **作者**: lxzlxzliuxuzhao
    *   **链接**: [alibaba/ROLL PR #393](https://github.com/alibaba/ROLL/pull/393)
    *   **简评**: 该 PR 旨在引入对 **CoreX BI-V150** 的兼容性支持。这可能涉及适配特定的 AI 加速芯片或计算架构。此类底层更新的出现，通常预示着 ROLL 正在致力于打破单纯 GPU 的限制，扩展其在异构计算环境下的运行能力，这对于大规模 RL 训练的成本控制至关重要。

*   **[#392] Revise RLix description for clarity and detail**
    *   **状态**: CLOSED (已合并)
    *   **作者**: taoluo
    *   **链接**: [alibaba/ROLL PR #392](https://github.com/alibaba/ROLL/pull/392)
    *   **简评**: 该 PR 更新了 **RLix**（ROLL 的核心调度/管理组件）的描述文档。修改重点在于阐明其在管理 RL 任务和 **GPU 利用率优化** 方面的功能。文档的更新表明团队正在强化项目在资源调度方面的核心卖点，帮助用户更好地理解如何通过 RLix 降低训练成本。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **异构计算支持的前瞻性**: PR #393 提及的 "CoreX BI-V150" 支持表明 ROLL 正在探索除主流 NVIDIA GPU 之外的硬件生态。在 2026 年的算力背景下，RL 框架对多元化芯片（国产芯片/专用加速器）的适配能力是其在工业界大规模落地的关键护城河。
2.  **聚焦资源效率**: RLix 组件的文档更新再次强调了 "GPU utilization"（GPU 利用率）。在大模型与 RLHF（基于人类反馈的强化学习）算力需求爆炸的当下，一个能显著提升显存与计算利用率的框架（即 ROLL/RLix）具有极高的工程价值。
3.  **持续的功能迭代**: 即使在无 Issue 和无 Release 的日子里，核心成员（如 taoluo）仍在持续合并代码并优化文档，证明项目处于活跃维护状态，而非存档状态。

---
*数据来源: GitHub alibaba/ROLL*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目动态 (2026-03-21)

## 1. 今日速览
过去 24 小时内，ROCK 项目整体保持平稳。代码仓库有 1 条 PR 变动，无新增 Issue 或版本发布。社区活跃度主要集中在存量代码的维护与功能接口补全上。

## 2. 版本发布
*   **无新版本发布**

## 3. 重点 Issues
*   **无新增 Issues**
*   *注：虽然今日无新增 Issue，但 PR #650 引用了 Issue #649，表明后台存在关于 Proxy 接口的功能需求讨论。*

## 4. 关键 PR 进展
*   **[[PR #650] add proxy interface](https://github.com/alibaba/ROCK/pull/650)**
    *   **状态**: CLOSED (已关闭)
    *   **作者**: zhongwen666
    *   **简评**: 该 PR 旨在为 ROCK 添加代理接口，推测是为了增强环境连接的灵活性或网络配置能力。PR 从创建到关闭历时约 1 天，显示维护者对社区贡献的响应速度较快。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 作为一个致力于解决 RL 基础设施痛点（如环境并行化、数据吞吐）的项目，其核心价值在于：
1.  **架构扩展性**：从 PR #650 添加 "proxy interface" 可以看出，项目正在不断完善底层通信与接口层，以适应更复杂的网络环境或分布式训练场景，这对于大规模 RL 训练至关重要。
2.  **持续维护**：尽管今日无大规模代码变动，但对 Feature Request（#649）的快速响应和合并（关闭 #650）表明项目处于积极维护状态，适合作为 RL 基础设施的技术储备或二次开发基座。

---
*数据来源: GitHub (alibaba/ROCK)*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-21)

## 1. 今日速览
过去 24 小时内，Slime 项目主要集中于**多轮对话 SFT 兼容性**与**Docker 环境依赖**的维护。社区解决了关于 B200 显卡上 Qwen3 FP8 训练的遗留 Bug，并提交了针对 Qwen3.5 模板的关键修复 PR。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
*   **[已关闭] B200 上 Qwen3-30B-A3B FP8 Rollout 报错**
    *   **详情**：Issue #953 记录了在使用 FP8 精度对 Qwen3-30B-A3B 进行 RL 训练时遇到的更新权重错误。该问题由用户 `huang3eng` 于去年 11 月提交，并于昨日正式关闭，表明相关 FP8 兼容性问题已得到解决或不再复现。
    *   **链接**：[THUDM/slime Issue #953](https://github.com/THUDM/slime/issues/953)

## 4. 关键 PR 进展
*   **[OPEN] 支持 Qwen3.5 多轮 SFT 的 loss mask**
    *   **详情**：PR #1742 旨在修复 Qwen3.5 在多轮监督微调（SFT）中的兼容性问题。作者指出，默认的 `qwen` loss-mask 策略不兼容 Qwen3.5 的多轮对话模板，会导致 `jinja2` 模板错误。该 PR 对于使用最新 Qwen 模型进行多轮 RLHF 流程至关重要。
    *   **链接**：[THUDM/slime PR #1742](https://github.com/THUDM/slime/pull/1742)
*   **[CLOSED] 更新 SGLang Docker 补丁**
    *   **详情**：PR #1743 涉及 Docker 环境中 SGLang 推理引擎的补丁更新，确保了容器化训练环境的稳定性。
    *   **链接**：[THUDM/slime PR #1743](https://github.com/THUDM/slime/pull/1743)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 项目（THUDM）在 RL 生态中保持着对**前沿大模型（如 Qwen3/3.5）**和**高性能算力（如 B200/FP8）**的快速响应能力。
1.  **紧跟 SOTA 模型**：通过 PR #1742 可以看出，项目正在快速适配 Qwen3.5 等最新模型架构的特定训练需求（如复杂的 loss mask），降低了开发者应用最新基座模型进行 RLHF 的门槛。
2.  **底层优化深入**：针对 FP8 这种对显存效率和通信带宽极其敏感的训练场景，项目持续进行修复与维护（Issue #953），显示了其在构建大规模分布式 RL 训练框架方面的工程深度。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-21)

## 1. 今日速览
AReaL 项目今日保持活跃，虽然无新版本发布，但代码库正在经历重要的架构升级。过去 24 小时内，社区聚焦于**异步训练能力增强**和**后端架构解耦**。共有 3 个功能性/修复性 PR 合并，4 个核心重构 PR 正在审核中。社区方面，出现了关于异步训练拒绝采样的高质量功能请求，以及部分用户文档和接入问题的反馈。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[Feature] 异步训练拒绝采样支持** [#1052](https://github.com/inclusionAI/AReaL/issues/1052)
    *   **标签**: `enhancement` `good first issue` `call-for-contribution`
    *   **详情**: 作者 `huaiyizhao` 提议在异步训练场景下引入 Sequence/Token 级别的拒绝采样机制，以更好地处理 Staleness（延迟/过期数据）问题。该提案引用了外部研究（Richard Li's RL Collapse），具有较高的技术价值，目前已被标记为“Good First Issue”，适合贡献者参与。
*   **[Bug] 在线 RL 训练启动失败** [#1065](https://github.com/inclusionAI/AReaL/issues/1065)
    *   **详情**: 用户在使用 OpenClaw 运行在线 RL 训练时遇到启动错误，涉及 `sglang` 与 `fsdp` 的混合 allocation 配置。
*   **[Docs] 微信群二维码失效** [#1066](https://github.com/inclusionAI/AReaL/issues/1066)
    *   **详情**: 社区入口维护问题，文档中的二维码已过期。

## 4. 关键 PR 进展

### 已合并
*   **[Infra] 简化数据代理序列化逻辑** [#1067](https://github.com/inclusionAI/AReaL/pull/1067)
    *   **详情**: 重构了 RTensor 的序列化路径，移除了冗余的双路径逻辑，统一使用 `serialize_value`，提升了 RPC 传输的健壮性。
*   **[Infra] 加速推理服务集成测试** [#1068](https://github.com/inclusionAI/AReaL/pull/1068)
    *   **详情**: 通过复用 Fixtures 和优化 Controller 配置，显著缩短了集成测试套件的运行时间。
*   **[MultiModal] 修复多模态张量 RPC 传输** [#1038](https://github.com/inclusionAI/AReaL/pull/1038)
    *   **详情**: 修复了多图场景下非批量（non-batched）张量（如 `pixel_values`）在 RPC 传输中的错误行为。

### 进行中
*   **[Refactor] 后端配置解耦** [#1044](https://github.com/inclusionAI/AReaL/pull/1044)
    *   **状态**: `OPEN` | **高优先级**
    *   **详情**: 这是一个破坏性变更。旨在废弃全局的 `allocation_mode` 字符串，转而在 `TrainEngineConfig` 和 `InferenceEngineConfig` 中显式定义 `backend` 字段（如 `fsdp:d4`, `sglang:d4t2`）。这将消除隐式的后端自动选择，提升系统可配置性。
*   **[Feature] Megatron-LM 桥接适配** [#1056](https://github.com/inclusionAI/AReaL/pull/1056)
    *   **状态**: `OPEN`
    *   **详情**: 首次引入 Megatron-Bridge 适配支持，目前处于参数引入阶段，不影响现有代码流。
*   **[Feature] 工作流传递 Global Step** [#1063](https://github.com/inclusionAI/AReaL/pull/1063)
    *   **状态**: `OPEN`
    *   **详情**: 将 `global_step` 参数穿透整个 Rollout 管道，以支持基于训练进度的动态超参调整或课程学习。
*   **[Fix] 修复 Chat 接口流式响应** [#1053](https://github.com/inclusionAI/AReaL/pull/1053)
    *   **状态**: `OPEN`
    *   **详情**: 修复了 `/chat/completions` 端点在 `stream=true` 时抛出 `ResponseValidationError` 的问题，确保兼容 OpenClaw/ZeroClaw 客户端。

## 5. 为什么值得持续关注
AReaL 正处于从“单一框架”向“可插拔式 RL 基础设施”演进的关键阶段：

1.  **架构解耦与灵活化**：PR #1044 关于 `allocation_mode` 的重构表明项目正在放弃“黑盒”式的资源分配，转而提供更精细的引擎级控制权，这对于大规模分布式训练至关重要。
2.  **拥抱异构计算生态**：随着 Megatron-LM 适配（#1056）的推进，AReaL 正在突破单一的 PyTorch FSDP 限制，向支持更高性能显存优化的架构扩展。
3.  **前沿算法落地**：Issue #1052 关于异步训练中 Staleness 的处理（拒绝采样），反映了项目正在解决 RL在大模型训练（RLHF/RLAIF）中实际遇到的“过期梯度”痛点，而非仅仅停留在标准算法实现上。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026-03-21

## 1. 今日速览
过去 24 小时内，TRL 项目活跃度较高，主要集中在新版本发布和 **异步 GRPO (Async GRPO)** 架构的重构上。社区方面，关于 Llama 3.2 SFT 训练有效性和 Qwen3.5 与 vLLM 兼容性的 Bug 报告引发了较多讨论。

- **Issues 更新**: 5 条
- **PR 更新**: 18 条
- **新版本**: v0.29.1

## 2. 版本发布
**v0.29.1** 已发布，主要聚焦于多模态数据处理和 SFT/GRPO 流程的 Bug 修复。
- **修复内容**:
  - 修复了 SFT/GRPO/RLOO 中处理 `mm_token_type_ids` 时的 `IndexError` ([PR #5178](https://github.com/huggingface/trl/pull/5178))。
  - 修复了 `prepare_multimodal_messages` 以支持 `tool_calls` 和 `tool` 角色 ([PR #5212](https://github.com/huggingface/trl/pull/5212))。

## 3. 重点 Issues
今日反馈的核心问题集中在**特定模型（Llama 3.2, Qwen3.5）的训练稳定性与兼容性**。

1.  **[Bug] Llama-3.2-3B SFT 训练异常** ([#5138](https://github.com/huggingface/trl/issues/5138))
    - **详情**: 用户报告在使用最新版 TRL（不再使用 `DataCollatorForCompletionOnly` 计算 loss）对 Llama-3.2-3B-Instruct 进行 SFT 时，模型无法有效训练，而旧版本表现正常。
    - **标签**: `bug`, `Important`

2.  **[Bug] Qwen3.5-0.8B GRPO 与 vLLM 0.17.0 不兼容** ([#5269](https://github.com/huggingface/trl/issues/5269))
    - **详情**: 在结合 vLLM 0.17.0 进行 GRPO 训练时，报错提示 Qwen3.5 模型缺少 'model' 模块或参数。
    - **标签**: `bug`, `Important`

3.  **[Bug] `completion_only_loss` 格式要求问题** ([#5324](https://github.com/huggingface/trl/issues/5324))
    - **详情**: 用户指出即使提供了标准的 `prompt-completion` 格式数据，`completion_only_loss` 依然存在问题。

## 4. 关键 PR 进展
今日 PR 活动呈现出明显的**功能系列化**特征，主要分为 Async GRPO 重构、多模态增强及算法扩展。

### A. Async GRPO 架构重构（核心进展）
作者 **AmineDiro** 提交了一系列 PR（#5318, #5319, #5320, #5321, #5322），旨在全面升级异步 GRPO 的 Rollout 流程：
- **数据结构重构** ([#5318](https://github.com/huggingface/trl/pull/5318)): 引入 `RolloutCompletion` 等 dataclass 替代并行数组，优化数据管理。
- **权重同步回调** ([#5319](https://github.com/huggingface/trl/pull/5319)): 新增 `_InitialWeightSyncCallback` 确保训练开始前权重同步。
- **过时任务清理** ([#5320](https://github.com/huggingface/trl/pull/5320)): 实现 `_cancel_stale_tasks()`，自动丢弃滞后的 in-flight tasks，提升稳定性。
- **生成循环控制** ([#5321](https://github.com/huggingface/trl/pull/5321)): 支持通过 `is_done` 动态跳出环境生成循环。

### B. 多模态与工具调用支持
- **VLM 工具响应增强** ([#5323](https://github.com/huggingface/trl/pull/5323)): 允许 `environment_factory` 返回包含图像+文本的多模态内容块，修复了之前仅返回字符串导致视觉信息丢失的问题。
- **SFT Packing 兼容性扩展** ([#5316](https://github.com/huggingface/trl/pull/5316)): 扩展了 `SFTTrainer` 中支持 Packing 的 attention 实现列表（包括 `eager`, `sdpa`, `flex_attention` 等）。

### C. 新算法与功能
- **新增 SDPO Trainer** ([#4935](https://github.com/huggingface/trl/pull/4935)): 实现 **Self-Distillation Policy Optimization (SDPO)**，通过自蒸馏将高奖励轨迹转化为密集学习信号。
- **SFT DataCollator 截断支持** ([#5315](https://github.com/huggingface/trl/pull/5315)): 为 `DataCollatorForLanguageModeling` 添加序列截断功能，支持从头或尾截断。

## 5. 为什么值得持续关注
TRL 正在快速演进，不仅是一个微调库，更在成为**强化学习与大模型深度结合的实验平台**：
1.  **前沿 RL 架构落地**: 大量关于 **Async GRPO** 的 PR 显示项目正在解决 RLHF 中最棘手的效率与同步问题，这对于大规模分布式训练至关重要。
2.  **多模态 Agent 基建**: 对 VLM tool use 和 environment factory 的持续更新，表明 TRL 正在为构建具备视觉能力的 Agent 提供标准化的训练环境。
3.  **紧跟 SOTA 算法**: SDPO 等新算法的快速集成，确保了开发者能在第一时间复现或应用最新的学术成果。

---
*分析师注*: 建议正在使用 Llama 3.2 或 Qwen 3.5 进行 SFT/RLHF 的用户密切关注 Issue #5138 和 #5269 的进展，当前的 v0.29.1 可能存在特定的兼容性回归。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-03-21)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库**无新版本发布**，但社区活跃度保持在高水平。核心开发重点集中在**底层架构优化（FSDP2）**与**多节点训练稳定性修复**。今日共处理了 2 个关键 PR（均已合并）以及 1 个关于前沿模型兼容性的热门 Issue。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
### #1194 [OPEN] 支持Qwen3.5训练吗
*   **链接**: [OpenRLHF/OpenRLHF Issue #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)
*   **详情**: 用户在使用 `openrlhf-0.9.5` 版本训练 `Qwen3.5-4b` 时遭遇阻断性错误。错误发生在 `train_ppo_ray.py` 脚本的 Forward 阶段。
*   **分析**: 随着 Qwen3.5 的发布，社区对 OpenRLHF 支持该架构的需求激增。该 Issue 反映了当前版本可能存在针对特定新模型架构的适配层滞后问题，或需要特定的配置参数微调。

## 4. 关键 PR 进展
### #1197 [CLOSED] FSDP2 SFT/RL/RM Pr 1176 v2
*   **链接**: [OpenRLHF/OpenRLHF PR #1197](https://github.com/OpenRLHF/OpenRLHF/pull/1197)
*   **作者**: hijkzzz
*   **进展**: 已合并。
*   **摘要**: 这是推进 OpenRLHF 全面支持 **FSDP2 (Fully Sharded Data Parallel 2)** 的关键更新。此 PR 重构了 SFT（监督微调）、RL（强化学习）和 RM（奖励模型）的训练流程。
*   **技术价值**: FSDP2 相比 FSDP1 在显存管理效率和大规模扩展性上有显著提升，意味着 OpenRLHF 在处理超大规模模型训练时将具备更强的性能。

### #1199 [CLOSED] fix: wrap grad_norm with float() for Ray serialization in colocate mode
*   **链接**: [OpenRLHF/OpenRLHF PR #1199](https://github.com/OpenRLHF/OpenRLHF/pull/1199)
*   **作者**: yxs
*   **进展**: 已合并。
*   **摘要**: 修复了在 **Colocate 模式**（Actor 与 Ref 模型混部）下，使用 Ray 进行序列化时的崩溃问题。
*   **技术细节**: DeepSpeed 的 `get_global_grad_norm()` 返回的非标准 Float 类型导致 Ray 在从 GPU Actor 向 CPU PPOTrainer 传输数据时触发 Pickle 序列化错误（`RuntimeError: Attempting to deserialize object on a CUDA device but torch.cuda.is_available()`）。该 PR 通过强制类型转换解决了这一跨设备通信隐患。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **紧跟 PyTorch 核心技术栈**: 随着 PR #1197 的合并，OpenRLHF 正快速迁移至 FSDP2 架构。这表明项目正在从单纯依赖 DeepSpeed 转向更灵活、更符合 PyTorch 原生生态的高性能训练方案，这对于追求极致显存利用率的研究者至关重要。
2.  **解决生产环境级 Bug**: PR #1199 修复了分布式训练中极其隐蔽的序列化 Bug。这种针对 Ray + DeepSpeed 混合复杂环境的快速响应能力，证明了该库在工业级 RLHF 训练中的可靠性。
3.  **对新模型架构的快速响应**: Issue #1194 显示社区正在第一时间尝试将最新的基座模型（Qwen3.5）接入 RLHF 流程，OpenRLHF 依然是 LLM Post-training 领域首选的实验平台之一。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL 日报：verl 项目动态 (2026-03-21)

## 1. 今日速览
过去 24 小时内，verl 项目保持高频迭代，共更新 **30 个 PR** 和 **12 个 Issues**。社区关注点主要集中在 **Qwen3.5 系列模型的支持与修复**、**Agentic RL（智能体强化学习）** 的工具调用与异步训练稳定性，以及底层 **Checkpoint 存储与显存优化**。虽然无新版本 Release，但针对 Megatron、FSDP2 及多种推理后端的功能增强已进入密集合并期。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
今日的问题报告集中在特定模型架构的适配和异步训练的稳定性上：

*   **[工具调用/崩溃] DAPO 训练中 Actor 意外退出**
    运行 `recipe/retool/dapo.sh` 时，冷启动 SFT 正常，但在 Qwen2 32B DAPO 训练阶段出现工具调用解码错误（Invalid escape）导致 Ray Actor 崩溃。
    [Issue #5668](https://github.com/verl-project/verl/issue/5668)

*   **[模型支持] Qwen3.5-35B-A3B FP16 训练报错**
    在 BF16 正常的情况下，FP16 模式下训练报错，涉及并发 Futures 异常，显示出混合精度训练的兼容性问题。
    [Issue #5671](https://github.com/verl-project/verl/issue/5671)

*   **[系统/优化] Checkpoint 保存导致 CPU OOM**
    使用默认的 `fully_reshardable` 优化器保存 Checkpoint 时引发 CPU 内存尖峰。建议切换默认值为 `dp_reshardable` 以缓解内存压力。
    [Issue #5670](https://github.com/verl-project/verl/issue/5670)

*   **[新特性需求] 2048 游戏智能体训练示例**
    开发者请求基于 OpenAI Dev Day 演示，增加使用 verl 训练 2048 游戏的 GRPO 示例。
    [Issue #5686](https://github.com/verl-project/verl/issue/5686)

*   **[Bug] FSDP 权重传输未包含 Buffers**
    当前 FSDP 在传输权重至 Rollout 引擎时忽略了 buffers（如 DeepSeek V3 中的 `e_score_correction_bias`），可能导致推理不一致。
    [Issue #5688](https://github.com/verl-project/verl/issue/5688)

## 4. 关键 PR 进展
今日 PR 活跃度极高，涵盖核心功能增强和关键 Bug 修复：

*   **[Feature] Qwen3.5 全面支持**
    新增 Qwen3.5 Transformer 适配器及 GRPO 训练脚本，解决了 Qwen3.5 在 FSDP 下的训练支持问题。
    [PR #5682](https://github.com/verl-project/verl/pr/5682)

*   **[Feature] 2048 游戏 GRPO 训练示例**
    快速响应 Issue #5686，增加了基于 GRPO 训练 2048 游戏智能体的完整示例代码和 Reward 函数。
    [PR #5687](https://github.com/verl-project/verl/pr/5687)

*   **[Fix] FSDP NestedTensor 维度歧义修复**
    修复了在 VLM SFT 训练中使用 `NO_PADDING` 模式时，PyTorch NestedTensor 导致的 Shape Mismatch 错误。
    [PR #5689](https://github.com/verl-project/verl/pr/5689)

*   **[Feature] Megatron 架构增强 (Qwen3.5 LoRA/MTP)**
    一系列针对 Megatron 后端的更新，包括修复新版本 MCore 的 MTP Patch 以及支持将 Checkpoint 保存为 HF PEFT 格式。
    [PR #5587](https://github.com/verl-project/verl/pr/5587) | [PR #5575](https://github.com/verl-project/verl/pr/5575)

*   **[Feature] SGLang Router 支持 & LoRA 支持**
    社区正在讨论引入 SGLang Router/Gateway 的计划，同时有 PR 提交了 SGLang Rollout 的双模 LoRA 支持（Merge 与 Native Adapter）。
    [Issue #5674](https://github.com/verl-project/verl/issue/5674) | [PR #5564](https://github.com/verl-project/verl/pr/5564)

*   **[Feature] 异常处理与调试增强**
    引入 `ExceptionDumpManager`，在 PPO 训练异常时自动转储 DataProto 和元数据，极大提升了调试效率。
    [PR #5681](https://github.com/verl-project/verl/pr/5681)

## 5. 为什么值得持续关注
verl 正在从一个纯粹的 RL 训练框架演变为 **全栈式 LLM 强化学习基础设施**：

1.  **前沿模型极速适配**：对 Qwen3.5、DeepSeek V3 等最新 MoE 和 Dense 架构的响应速度极快，解决了工业界最迫切的“新模型落地”痛点。
2.  **Agentic RL 工程化落地**：针对 Tool Calling、Multi-turn Interaction（如 2048 Game、LLM-SR）的快速迭代，表明 verl 正抢占 Agentic 工作流的标准制定权。
3.  **异构与性能极致优化**：无论是针对 NPU 的拓扑调度，还是对 Checkpoint 机制的显存/ CPU 优化，都显示出该项目在大规模生产环境下的成熟度正在快速提升。

---
*分析师注：verl 在 Qwen 系列模型上的支持力度非常大，如果你正在微调 Qwen3.5 或进行复杂的 Agentic 训练，verl 目前是首选的开源试验田。*

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是 Open Instruct 项目 2026-03-21 的 RL 日报摘要：

# 📊 Open Instruct RL 日报 (2026-03-21)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库保持高频代码合并与功能迭代，共更新 **16 个 PR**（其中 8 个已合并，8 个处于开放状态），无新开 Issues 或版本发布。项目重点目前集中在 **vLLM 0.16.0 适配**、**长序列训练（32k context）的通信优化**以及 **Olmo-core 架构下的 GRPO/DPO 算法整合**。

## 2. 版本发布
*   **无新版本发布**

## 3. 重点 Issues
*   **无新 Issue**：过去 24 小时内社区未提交新的功能请求或 Bug 报告，侧面反映出当前版本（或开发版）在核心功能上相对稳定，或开发者正集中精力处理现有的 PR 队列。

## 4. 关键 PR 进展

### 🚀 核心架构与性能优化
*   **[OPEN] 迁移至 vLLM 0.16.0 原生权重传输 API** (#1515)
    *   **作者**: finbarrtimbers
    *   **详情**: 废弃了旧的手动参数广播循环，改用 vLLM 0.16.0 提供的 `WeightTransferConfig` 和 `NCCLWeightTransferEngine`。代码净删除约 200 行，显著提升了权重同步的效率和代码可维护性。
    *   **链接**: [allenai/open-instruct PR #1515](https://github.com/allenai/open-instruct/pull/1515)

*   **[OPEN] 批量处理 vLLM 权重同步以修复 32k 超时问题** (#1535)
    *   **作者**: finbarrtimbers
    *   **详情**: 针对 32k 长度训练时权重同步超过 120s 的问题，将原本分散的 200+ 个参数的独立 Ray RPC 调用改为批量处理。这对长上下文 RL 训练至关重要。
    *   **链接**: [allenai/open-instruct PR #1535](https://github.com/allenai/open-instruct/pull/1535)

*   **[CLOSED] 修复 collate_fn 张量维度问题** (#1545)
    *   **作者**: finbarrtimbers
    *   **详情**: 彻底解决了 `collate_fn` 在处理单个输入时返回 1D 张量导致的维度错误，移除了代码中散落的 12 处 `ndim` 防御性检查，提升了数据加载的鲁棒性。
    *   **链接**: [allenai/open-instruct PR #1545](https://github.com/allenai/open-instruct/pull/1545)

### 🧠 强化学习算法 (GRPO/DPO/Offline Distill)
*   **[OPEN] 添加 GRPO (Olmo-Core) 调试脚本与文档** (#1543, #1548)
    *   **作者**: mnoukhov, finbarrtimbers
    *   **详情**: #1543 添加了避免 Ray 依赖的本地 `grpo.sh` 调试脚本；#1548 更新了 DPO 和 GRPO 的文档，增加了单 GPU 和多节点的调试指南，明确了 Olmo 3 7B 的参考配置。
    *   **链接**: [allenai/open-instruct PR #1543](https://github.com/allenai/open-instruct/pull/1543) | [allenai/open-instruct PR #1548](https://github.com/allenai/open-instruct/pull/1548)

*   **[OPEN] 记录 DeepSpeed 梯度范数** (#1540)
    *   **作者**: mnoukhov
    *   **详情**: 在 `grpo_fast` 中增加梯度范数的日志记录，并保留 NaN/Inf 值以供调试，有助于监控 RL 训练过程中的梯度爆炸或消失问题。
    *   **链接**: [allenai/open-instruct PR #1540](https://github.com/allenai/open-instruct/pull/1540)

*   **[OPEN] 离线蒸馏支持** (#1534)
    *   **作者**: wolfecameron
    *   **详情**: 离线蒸馏计划的第二部分，添加了用于捕获 Teacher Logits 的脚本，为后续的蒸馏训练做准备。
    *   **链接**: [allenai/open-instruct PR #1534](https://github.com/allenai/open-instruct/pull/1534)

*   **[CLOSED] 修复 GSM8K 带符号答案的奖励解析** (#1530)
    *   **作者**: mnoukhov
    *   **详情**: 修复了数学任务中带正负号数字的解析错误，增加了回归测试，提升了 RL Reward Model 的准确性。
    *   **链接**: [allenai/open-instruct PR #1530](https://github.com/allenai/open-instruct/pull/1530)

### 📝 文档与工具链
*   **[OPEN] 工具使用与 RL 环境文档更新** (#1546)
    *   **作者**: hamishivi
    *   **详情**: 新增 `tool_training.md` 和 `dr_tulu_replication.md`，重点介绍了当前的 Tool Use 能力、基于 Rubric 的评估以及 DR-Tulu 风格的复制指南。
    *   **链接**: [allenai/open-instruct PR #1546](https://github.com/allenai/open-instruct/pull/1546)

*   **[CLOSED] SFT 代码微调与序列并行 (SP) 支持** (#1539)
    *   **作者**: hamishivi
    *   **详情**: 修复了旧版 DeepSpeed SFT 代码的 Bug 并增加了序列并行支持，虽然 Olmo-core 更快，但此更新保留了对旧项目的兼容性。
    *   **链接**: [allenai/open-instruct PR #1539](https://github.com/allenai/open-instruct/pull/1539)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **前沿长上下文 RL 训练支持**：项目正在积极解决 32k 上下文训练中的通信瓶颈（#1535, #1544），这对于当前大模型追求长推理链（Long CoT）和复杂 Agent 任务的 RL 对齐至关重要。
2.  **深度集成 Olmo-Core 架构**：从 SFT 到 DPO/GRPO，项目正在将核心训练逻辑迁移至 `Olmo-core`（#1327, #1548）。这表明该项目正在从通用的脚本集合转变为一个经过生产验证的、模块化程度更高的训练框架。
3.  **紧随 vLLM 最新特性**：迅速适配 vLLM 0.16.0 的原生 API（#1515），表明该项目在推理-训练一体化架构上保持技术领先，这对于需要高频进行权重同步的在线 RL（Online RL）场景极其关键。
4.  **Agent 与 Tool Use 工作流成熟化**：新增的 Tool Use 和 RL 环境文档（#1546）显示项目已超越单纯的指令微调，正在构建完整的 Agent 训练与评估闭环。

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

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 生态监测
**日期**：2026-03-21
**项目**：DLR-RM/stable-baselines3

## 1. 今日速览
过去 24 小时内，SB3 仓库活动较为平缓，无新版发布。Issue 板块出现关于数据结构现代化的功能请求；PR 板块则有显著的管理动作，关闭了 2 个疑似由 LLM 生成的低质量/模板未填写的 PR，同时长期维护的功能性 PR 有了新的更新动态。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
今日唯一更新的 Issue 涉及底层缓冲区数据结构的重构，这对开发者自定义 RL 流程具有潜在影响。

*   **#2202 [Feature Request] 支持继承 `ReplayBufferSamples` 等缓冲区采样类**
    *   **链接**：[DLR-RM/stable-baselines3 Issue #2202](https://github.com/DLR-RM/stable-baselines3/issues/2202)
    *   **摘要**：作者 **franco-ruggeri** 建议 SB3 将内部的 `ReplayBufferSamples`、`RolloutBufferSamples` 等数据结构从 `NamedTuple` 迁移至 Python 的 `dataclass`。
    *   **技术细节**：目前的 `NamedTuple` 限制了面向对象的继承特性，导致难以扩展这些缓冲区类。改为 `dataclass` 将允许开发者轻松创建子类以携带额外数据或修改行为，增强了框架的可扩展性。
    *   **状态**：Issue 仍处于 OPEN 状态，上次更新时间为昨日。

## 4. 关键 PR 进展
今日共有 3 个 PR 更新，主要集中在库的功能增强尝试与代码库维护管理。

*   **#1622 [OPEN] 实现 DQN 的优先经验回放**
    *   **链接**：[DLR-RM/stable-baselines3 PR #1622](https://github.com/DLR-RM/stable-baselines3/pull/1622)
    *   **进展**：这是一个长期运行的大型功能 PR，旨在为 DQN 实现 Prioritized Experience Replay (PER)。该 PR 于昨日再次更新，表明提交者仍在维护代码或推进 Review 进程。
    *   **意义**：PER 是提升 Off-policy 算法样本效率的关键技术，此功能一直被社区高度关注（关联 Issue #1242）。

*   **#2229 & #2230 [CLOSED] 维护性关闭低质量 PR**
    *   **#2229 (Auto-reset options/seeds)**: [链接](https://github.com/DLR-RM/stable-baselines3/pull/2229)
    *   **#2230 (Independent actor/critic LRs)**: [链接](https://github.com/DLR-RM/stable-baselines3/pull/2230)
    *   **摘要**：两个 PR 均由 **Narendravarma123** 提交，并已于昨日被关闭。标签显示为 `[PR template not filled, LLM generated]`。
    *   **分析**：
        *   #2229 尝试修复自动重置时 `options` 和 `seeds` 丢失的问题（Fixes #1790）。
        *   #2230 尝试为 TD3/SAC/DDPG 添加独立的 Critic 学习率 (`qf_learning_rate`)。
        *   **结论**：尽管这两个 PR 提出的功能（更细粒度的超参数控制、Gymnasium 兼容性修复）非常有价值，但因未遵守贡献指南（疑似 AI 生成且未填模板）而被关闭。这反映了维护团队对代码质量和贡献流程的严格把控。

## 5. 为什么值得继续关注
尽管 SB3 已是一个成熟的库，今日的数据仍显示出其演进的活力：

1.  **深度扩展性探索**：Issue #2202 表明社区正致力于优化 SB3 的底层抽象，使其从“开箱即用”的工具向“可深度定制”的框架演进，这对于复杂的研究场景至关重要。
2.  **核心算法补全**：PR #1622 的持续推进证明社区正在努力补全标准 RL 库中缺失的高级特性（如 PER），这将直接提升算法性能上限。
3.  **生态健康度**：维护者对 LLM 生成的低质量 PR 的快速清理，保证了代码库的整洁与可靠性，确保 SB3 依然是工业界与学术界值得信赖的基准库。

</details>