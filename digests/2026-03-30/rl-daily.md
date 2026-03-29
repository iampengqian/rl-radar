# RL 开源生态日报 2026-03-30

> 生成时间: 2026-03-29 22:03 UTC | 覆盖项目: 15 个

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
2026年3月的 RL 开源生态呈现出明显的**分层演进**态势。头部项目（Slime, verl, OpenRLHF 等）已全面进入**大模型与 VLM 时代**，核心战场转移至 FP8 训练、异构算力适配与分布式稳定性；而经典学术型项目（Tianshou, CleanRL）则转向**架构维护与教学优化**，更注重 API 标准化与代码可读性。Agentic RL 成为新一轮增长点，基础设施正从单步交互向长轨迹优化演进。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **slime** | 高 (VLM崩溃/复现) | 高 (8+) | **v0.2.4** | **核心基建**：发布重大更新，重仓 VLM 与可观测性，但分布式分离训练仍有硬伤。 |
| **verl** | 中 (多节点扩展) | 高 (9) | 无 | **全栈扩展**：高强度适配 Qwen3.5 与国产 NPU，正从训练框架向全栈设施演进。 |
| **Open Instruct** | 无 | 中 (2) | 无 | **算法融合**：打通 GRPO 与 PPO 架构，快速跟进 SOTA VLM (Qwen3.5) 兼容性。 |
| **AReaL** | 低 (战略规划) | 无 | 无 | **架构攻坚**：聚焦异步 RL 核心痛点，提案弹性权重更新以打破 I/O 瓶颈。 |
| **ROCK** | 低 (云存储鲁棒性) | 低 (SDK) | 无 | **生态边界**：推出 TypeScript SDK，试图跨语言吸纳前端/全栈开发者。 |
| **ROLL** | 低 | 低 | 无 | **场景深化**：探索长轨迹数据构建，针对 Agentic 任务优化数据粒度。 |
| **Tianshou** | 低 (API修复) | 低 (清理) | 无 | **版本收敛**：v2.0 API 趋于稳定，主要进行历史技术债务清理。 |
| **rl_games** | 无 | 低 (工具链) | 无 | **工程现代化**：构建系统从 Poetry 迁移至 UV，提升环境配置效率。 |
| **OpenRLHF** | 无 | 低 (评估) | 无 | **流程精细**：关注 Eval 指标修复与 Checkpoint 自动化筛选。 |
| **CleanRL** | 无 | 极低 (风格) | 无 | **极简维护**：仅进行代码可读性优化，保持教学标杆地位。 |
| **Others** | 无 | 无 | 无 | (Gymnasium, SB3, TRL 等) 平静期。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：GRPO 与 PPO 的融合博弈
*   **算法架构重构**：Open Instruct (PR #1462) 在 GRPO 流程中引入 Value Model 支持，模糊了 GRPO（无 Value Model，省显存）与 PPO（有 Value Model，更稳）的界限。这表明社区正在寻找折中方案，试图结合两者的优势以应对超大规模模型训练。
*   **Agentic 长轨迹优化**：ROLL (Issue #409) 提出的轨迹级数据构建模式，标志着 RL 研究正从单步 Reward 最大化转向多轮交互的全局轨迹优化，这对于复杂的 Code Agent 和多模态任务至关重要。

### 2. 工程/基础设施侧信号
*   **FP8 与显存极致优化**：Slime 和 verl 均在抢跑 **FP8** 支持（Slime 支持 Qwen3.5 转换，verl 支持 KV Cache）。在 H100/Ascend 等硬件普及背景下，FP8 已成为长上下文 VLM 训练的“出厂标配”。
*   **异构算力原生适配**：verl 对 **Ascend NPU** 的深度支持（PR #5795）以及 ROLL 对 CoreX 的适配，显示出开源 RL 框架正在摆脱 CUDA 单一依赖，向多云、多芯片的国产化/异构化方向强力演进。
*   **权重同步瓶颈攻坚**：AReaL (Issue #1101) 提出的“弹性权重更新”和 Slime 修复的分布式权重同步崩溃，共同指向了当前大规模 RL 的核心物理瓶颈——训练与推理引擎间的参数同步延迟。

## 差异化定位分析

*   **Slime & verl：大模型训练的“双寡头”**。Slime 侧重于连接 Megatron-LM 与 SGLang 的工程链路，强调可观测性；verl 则胜在硬件生态广度（NPU）与算法集成度（GRPO/PPO）。
*   **Open Instruct：前沿算法的“试验田”**。它比 Slime/verl 更激进地尝试架构混合（如 PPO+GRPO），适合需要快速验证新算法对齐 SOTA 模型的研究者。
*   **ROCK & ROLL：Agent 与 工具链的“特种兵”**。不同于通用训练框架，它们聚焦于 Agent 环境、沙箱安全（TypeScript SDK）以及特定的数据流处理。
*   **CleanRL & Tianshou：学术与教学的“守夜人”**。它们不再卷大规模分布式，而是深耕代码可读性（CleanRL）和实验管理 API 的标准化（Tianshou），服务于学生和科研人员。

## 社区热度与成熟度
*   **Slime 热度领跑**：单日 8+ PRs 和关键版本发布显示其处于快速迭代期，但频发的 VLM Issue 表明其处于“功能强但磨合期”的阶段。
*   **verl 稳健扩张**：虽然没有发版，但对新硬件和新模型的持续集成显示出健康的社区造血能力。
*   **长尾项目维护模式**：OpenRLHF、rl_games 和 CleanRL 目前处于“维护模式”，主要靠社区贡献修复细节或更新工具链，核心架构已趋于冻结。

## 值得关注的趋势信号
1.  **VLM 训练进入“深水区”**：随着 Slime 和 Open Instruct 对 Qwen3.5-VL 的适配，**多模态 RLHF** 已不再是 Demo，而是正在解决权重同步、Encoder 属性缺失等底层工程顽疾。
2.  **“Eval-Driven”的训练流程**：OpenRLHF 引入基于评估指标自动筛选 Checkpoint，预示着 RL 训练正从“盯着 Loss 看”转向“盯着业务指标看”，更加务实。
3.  **工具链的“提速”革命**：rl_games 迁移至 UV，Slime 引入 Trace Viewer，说明 2026 年的 RL 不仅要比算法收敛快，还要比**调试速度快**和**环境安装快**。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

这里是 **ROLL (RL Open League)** 项目 2026-03-30 的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，ROLL 仓库活动趋于平缓，无新版本发布。社区侧重点在于 **Agentic 场景下的数据粒度优化** 以及 **底层硬件算力的适配扩展**。

### 2. 版本发布
*   **无新版本发布**：近期仓库未推送新的 Release tag，主分支仍保持稳定版本。

### 3. 重点 Issues
*   **[Feature Request] AgentNativeStepEnvManager 需支持轨迹级数据构建**
    *   **链接**: [alibaba/ROLL Issue #409](https://github.com/alibaba/ROLL/issues/409)
    *   **分析**: 作者 `shamanez` 指出当前 `AgentNativeStepEnvManager` 在处理 Agentic 任务（如 SWE 示例）时，默认将每个 Agent 交互轮次视为一个独立的训练样本。这导致了长轨迹信息的割裂。该 Issue 建议引入 **Trajectory-level formulation mode**，将完整的轨迹作为训练样本，以支持长上下文建模和更复杂的策略优化。这对于提升 Agent 在多轮复杂任务中的推理连贯性至关重要。

### 4. 关键 PR 进展
*   **[WIP] Add CoreX BI-V150 compatibility support**
    *   **链接**: [alibaba/ROLL PR #393](https://github.com/alibaba/ROLL/pull/393)
    *   **分析**: 贡献者 `lxzlxzliuxuzhao` 提交了对 **CoreX BI-V150** 硬件的兼容性适配。该 PR 于昨日有更新记录，表明 ROLL 正在积极扩展其底层算力生态，旨在支持更多样化的 AI 加速器架构，这对于 RL 训练在大规模异构集群上的落地具有重要意义。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **Agentic RL 的工程落地**: Issue #409 显示 ROLL 正在解决 Agentic RL 落地中的核心痛点——**数据构建粒度**。从单步优化向全轨迹优化的演进，代表了 RL 在复杂任务（如 Code generation、自动化运维）中的必然发展趋势。
2.  **软硬一体化生态**: 通过 PR #393 可以看出，项目不仅关注算法上层，也在积极适配底层新硬件（CoreX），这通常意味着该项目具备在特定工业界场景下进行大规模分布式训练的潜力。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目动态 (2026-03-30)

## 1. 今日速览
ROCK 项目在过去 24 小时内活动主要集中在生态工具链的完善。虽然无新版本发布，但社区提出了关于 OSS 存储稳定性的关键需求，且备受关注的 TypeScript SDK PR 再次有了更新动静。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **#698 [Feature] OSS 上传/下载支持 timeout 配置**
    *   **链接:** [alibaba/ROCK Issue #698](https://github.com/alibaba/ROCK/issues/698)
    *   **分析:** 作者 Timandes 指出当前的 `_setup_oss()` 方法在处理大文件或弱网环境时，容易因缺少超时配置而触发 `oss2` SDK 默认限制导致传输失败。
    *   **技术细节:** 该 Issue 属于 SDK & API 类别，建议在 OSS 客户端初始化时暴露 `timeout` 参数接口，以增强沙箱环境下数据交互的鲁棒性。

## 4. 关键 PR 进展
*   **#492 Added TypeScript SDK**
    *   **链接:** [alibaba/ROCK PR #492](https://github.com/alibaba/ROCK/pull/492)
    *   **状态:** Open (更新于昨日)
    *   **分析:** 该 PR 旨在为 ROCK 引入完整的 TypeScript SDK 支持（关联 Issue #495）。它不仅实现了基础的沙箱管理和文件系统操作，还提供了 Agent 框架支持和 EnvHub 管理。
    *   **亮点:** 采用了双模式构建（ESM & CommonJS），并封装了 Python 和 Node.js 的运行时环境管理，显示出项目向多语言生态（特别是 JS/TS 社区）扩展的意图。NPM 包已发布 (`rl-rock`)。

## 5. 为什么值得持续关注
ROCK 正在从一个单纯的 RL 基础设施向**多语言、云原生**的 Agent 开发平台演进：
1.  **语言生态扩展:** PR #492 的进展表明 ROCK 正积极打破 Python 的边界，通过 TypeScript SDK 吸引前端及全栈开发者进入 RL/Agent 领域，这对于构建 Web 端控制面板或全栈 Agent 应用至关重要。
2.  **工程化细节打磨:** Issue #698 关于 OSS 超时配置的讨论，反映出项目正在从“功能可用”向“生产环境稳定”过渡，解决大模型训练中检查点和海量数据传输的实际痛点。

---
*数据来源: GitHub Repository alibaba/ROCK*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-30)

## 1. 今日速览
Slime 项目今日发布了重要的稳定性更新版本 **v0.2.4**。社区活跃度较高，过去 24 小时内共有 8 个 PR 合并或更新，主要集中在对 VLM（视觉语言模型）训练的 Bug 修复、FP8 支持以及 Megatron 训练流程的健壮性增强。Issue 板块反映出用户对 VLM 任务（特别是 Geo3K 和 Qwen3-VL）的复现与配置存在较多疑问。

## 2. 版本发布
**[v0.2.4] - 重大更新**
- **链接**: [THUDM/slime Release v0.2.4](https://github.com/THUDM/slime/releases/tag/v0.2.4)
- **核心亮点**:
    - **可观测性增强**: 新增 Rollout Trace Timeline Viewer 及 W&B 上报功能，强化了训练过程的可视化分析能力。
    - **稳定性**: 修复了大量 Bug，提升了系统整体稳定性。

## 3. 重点 Issues
1.  **[VLM] 非共存模式下权重更新崩溃**
    *   **链接**: [Issue #1673](https://github.com/THUDM/slime/issues/1673)
    *   **分析**: 这是一个关键 Bug。在非 `--colocate` 模式下训练 VLM 时，`UpdateWeightFromDistributed` 会导致 SGLang 推理引擎在权重同步后崩溃。这影响了分布式训练与推理分离场景下的可用性。
2.  **[VLM] 脚本缺失与复现问题**
    *   **链接**: [Issue #1778](https://github.com/THUDM/slime/issues/1778) | [Issue #1160](https://github.com/THUDM/slime/issues/1160)
    *   **分析**: 用户报告 `qwen3-vl-8B-Instruct.sh` 脚本丢失 (#1778)，以及在 Geo3K 任务上复现效果未达预期 (#1160)。表明 VLM 相关的文档和资产完整性仍需完善。

## 4. 关键 PR 进展
1.  **版本迭代与构建**
    *   **[release] bump to v0.2.4**: [PR #1777](https://github.com/THUDM/slime/pull/1777) - 正式合入 v0.2.4 版本代码。
2.  **训练稳定性修复**
    *   **[Fix] Megatron 训练中的 grad_norm 初始化**: [PR #1762](https://github.com/THUDM/slime/pull/1762)
        - 修复了在开启 `--no-check-for-nan-in-loss-and-grad` 时，若检测到 Inf 跳过步骤导致的 `grad_norm` 未初始化问题。
    *   **[Fix] LR Scheduler 重复 Resume**: [PR #1775](https://github.com/THUDM/slime/pull/1775)
        - 修复了 Megatron 在加载 Optimizer 状态时，LR Scheduler 被错误地二次快进的问题。
3.  **功能与兼容性**
    *   **Support FP8 conversion for Qwen3.5**: [PR #1769](https://github.com/THUDM/slime/pull/1769) - 增加了对 Qwen3.5 模型的 FP8 转换支持，提升训练效率。
    *   **[Fix] VLM Encoder 属性缺失**: [PR #1741](https://github.com/THUDM/slime/pull/1741) - 修复了特定 Worker 类型下 `encoder_only` 属性缺失导致的运行失败。
    *   **Add host memory metrics**: [PR #1764](https://github.com/THUDM/slime/pull/1764) - 增加了主机内存监控指标，有助于调试资源泄露问题。

## 5. 为什么值得持续关注
Slime 正在快速迭代以支持 **大规模 VLM 强化学习**。此次 v0.2.4 版本引入的 **Rollout Trace Timeline Viewer** 表明项目正在攻克 RLHF/RL 调试难的核心痛点。同时，针对 **Qwen3.5/3-VL** 的 FP8 支持和 Bug 修复，显示出该项目紧跟 SOTA 模型（State-of-the-Art）的适配节奏。对于需要训练超大规模多模态模型的开发者，Slime 提供了连接 Megatron-LM（训练）与 SGLang（推理）的关键工程链路。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL 日报：AReaL 生态追踪 (2026-03-30)

**项目地址**：[github.com/inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

这里是 2026 年 3 月 30 日 AReaL 项目进展摘要。今日无代码合并与版本发布，社区重心集中于 Roadmap 规划与系统架构层面的性能优化提案。

---

### 1. 今日速览
*   **Issues 活跃度**：2 条更新，主要集中在长期路线图确认与训练加速方案讨论。
*   **代码进展**：无新增 PR 或 Release。
*   **核心关注点**：大规模 RL 训练中的权重更新瓶颈问题。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues

**a. [Roadmap] 2026 Q1 Milestones (#907)**
*   **状态**：Open [help wanted]
*   **作者**：garrett4wade
*   **更新**：2026-03-29
*   **摘要**：该 Issue 确立了 AReaL 截止至 2026 年 4 月 30 日的开发蓝图。文档将开发任务划分为“进行中”与“计划中”两类，明确了社区贡献的切入点。作为项目的战略指挥棒，该贴持续吸引开发者讨论优先级排序。
*   **链接**：[inclusionAI/AReaL Issue #907](https://github.com/inclusionAI/AReaL/issues/907)

**b. [Feature] Elastic weight update setup and acceleration (#1101)**
*   **状态**：Open
*   **作者**：sjmshsh
*   **更新**：2026-03-29
*   **摘要**：针对 RL 训练中 Actor 权重同步至推理服务的延迟瓶颈提出了改进方案。当前系统主要依赖 `disk`（磁盘）模式进行权重更新，该提案旨在构建**弹性权重更新**机制，通过减少 I/O 瓶颈和网络开销来加速 Rollout Engine 的更新频率，这对提升大规模分布式 RL 训练效率至关重要。
*   **链接**：[inclusionAI/AReaL Issue #1101](https://github.com/inclusionAI/AReaL/issues/1101)

### 4. 关键 PR 进展
*   **无更新**：过去 24 小时内无新的 Pull Requests 提交或合并。

### 5. 为什么这个项目值得在当前 RL 生态继续关注

AReaL（Asynchronous Reinforcement Learning）正试图解决大模型时代 RL 训练最核心的痛点——**训练与推理的同步墙**。

*   **架构前瞻性**：从 Issue #1101 可以看出，项目正在深入底层优化 Actor 与 Rollout Engine 之间的通信机制。在模型参数量爆炸的背景下，传统的基于磁盘的权重加载已成为吞吐量杀手。AReaL 探索的“弹性更新”直接对标了业界最高效的训练范式。
*   **清晰的路线图**：Issue #907 显示项目具备中长期的研发规划，且通过 `call-for-contribution` 标签积极构建开发者生态，这表明该项目正处于活跃迭代期，而非实验性存档。

**总结**：如果你关注**高性能分布式 RL 架构**、**RLHF/RLAIF 速度优化**或**推理训练一体化**，AReaL 提供了极具参考价值的工程实践路径。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL 日报：Tianshou 生态监控 (2026-03-30)

## 1. 今日速览
过去 24 小时内，Tianshou 仓库活跃度主要体现为历史遗留代码的清理与维护。共有 **0** 个新版发布，**1** 条 Issue 更新，以及 **3** 条 PR 更新。所有追踪到的动态均为关闭旧任务，无新增开放性讨论或功能开发。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[#1288](https://github.com/thu-ml/tianshou/issues/1288) `[已关闭]` `ExperimentResult.trainer_result` 返回值问题**
    *   **摘要**：用户报告在使用 v2.0 高级 API `Experiment.run()` 时，返回对象中的 `trainer_result` 字段始终为 `None`，疑似内部逻辑缺失赋值。
    *   **分析**：该 Issue 创建于 3 月 11 日，并于昨日最终关闭。这表明维护者可能已修复该 API 缺陷或在后续提交中确认了功能表现，v2.0 API 的稳定性正在通过社区反馈逐步提升。

## 4. 关键 PR 进展
本次更新的 3 条 PR 均为历史 PR 的关闭/合并，主要集中在资源更新与代码清理：

*   **[#1208](https://github.com/thu-ml/tianshou/pull/1208) `[已关闭]` HL interfaces: 优化非训练模式下的 Collector 创建逻辑**
    *   **内容**：修改了高层接口，逻辑为“若非训练模式，则不创建 train-test collectors”。
    *   **意义**：这是一个性能与逻辑修复，避免了推理阶段不必要的资源开销。该 PR 创建于 2024 年 8 月，昨日关闭，意味着相关优化已正式合入或废弃。

*   **[#779](https://github.com/thu-ml/tianshou/pull/779) `[已关闭]` 更新 MuJoCo 基准测试实验详情**
    *   **内容**：更新了 MuJoCo 任务的训练日志下载链接和检查点。
    *   **意义**：提升了复现基准测试的便利性，属于生态维护类工作。

*   **[#523](https://github.com/thu-ml/tianshou/pull/523) `[已关闭]` 添加 Atari PPO 示例**
    *   **内容**：增加 Atari 环境下的 PPO 算法示例。
    *   **意义**：这是一个长期悬而未决的 PR（创建于 2022 年），昨日关闭可能意味着示例已重构入库或因过时被拒绝。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Tianshou 之所以在 2026 年依然是强化学习领域的核心项目，原因如下：

1.  **v2.0 高级 API 的成熟化**：从 Issue #1288 可以看出，社区正在深度使用基于 `Experiment` 的高级抽象。Tianshou 正从“模块化工具箱”向“标准化实验管理平台”演进，大幅降低了 RL 实验的管理成本。
2.  **持续的基础设施维护**：即使是两年前的 PR（如 #523, #779）依然在近期得到处理，说明团队在积极清理技术债务和维护基准测试资源，这对科研复现至关重要。
3.  **工业级与学术级的平衡**：Tianshou 依然保持着 PyTorch 原生的高效性，同时其接口设计越来越注重非训练场景的资源优化（如 PR #1208），显示出向生产环境推理需求靠拢的趋势。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 项目动态 (2026-03-30)

## 1. 今日速览
OpenRLHF 在过去 24 小时内维持低频更新，无新增 Issue 或版本发布。重点在于代码库的质量维护与功能增强，合并了一个关于评估指标修复及最佳检查点（Checkpoint）持久化的 PR。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
**#1206 [CLOSED] feat: add best-checkpoint selection based on PPO eval metrics**
- **作者**: nathon-lee
- **进展**: 该 PR 已关闭，主要针对评估流程的正确性与功能性进行了优化。
- **技术细节**:
    - **修复 Bug**: 修正了 `pass@k` 聚合计算中的正确性错误，确保评估指标准确反映模型性能。
    - **新增功能**: 引入了一个可选功能，支持根据指定的评估指标自动保存最佳检查点，便于训练过程中的模型筛选。
- **链接**: [OpenRLHF/OpenRLHF PR #1206](https://github.com/OpenRLHF/OpenRLHF/pull/1206)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 作为当前 RLHF（基于人类反馈的强化学习）领域的重要开源实现，其价值体现在对**训练流程精细化管理**的支持上。今日合并的 PR #1206 显示了项目方不仅在关注算法本身，还在致力于解决工程落地中的痛点：
1.  **评估准确性**：修正 `pass@k` 计算对于衡量 LLM 的推理能力（如代码、数学推理）至关重要。
2.  **训练效率**：基于 Eval Metric 自动保存最佳 Checkpoint 的功能，能够在大规模训练中自动筛选最优模型，减少人工干预和存储浪费。
这表明 OpenRLHF 正在从一个纯算法库向更成熟的**工业级训练框架**演进。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 volcengine/verl 项目 2026-03-30 的 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，verl 项目活跃度较高，主要集中在**功能扩展**与**异构硬件适配**。虽然没有新的官方版本发布，但社区提交了 9 个 PR（包含 1 个关闭），主要涉及 **Qwen3.5 模型支持**、**NPU/Ascend 适配**、**vLLM 推理优化**及**环境集成**。Issues 方面，讨论焦点依然集中在分布式训练的扩展性及特定模型（Qwen+LoRA）的稳定性上。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **[分布式训练] 多节点训练扩展性问题** [#5448](https://github.com/volcengine/verl/issues/5448)
    *   **详情**：用户反馈在使用 RLOO 算法时，从单节点 8 卡扩展到多节点训练无法提升训练速度，疑似遇到通信瓶颈或资源配置问题。
*   **[稳定性] GRPO + LoRA 导致模型输出崩溃** [#3159](https://github.com/volcengine/verl/issues/3159) [CLOSED]
    *   **详情**：用户报告在使用 GRPO 训练 Qwen2.5-3B-Instruct 时，引入 LoRA 会导致模型输出退化为 "!!!!!!"。该 Issue 已关闭，可能已找到解决方案或不再复现。
*   **[Bug] Python 运行时致命错误** [#4895](https://github.com/volcengine/verl/issues/4895)
    *   **详情**：涉及 Python 3.12 环境下的 "Aborted" 致命错误，仍在排查中。

### 4. 关键 PR 进展
*   **[Feature] Qwen3.5 FSDP GRPO 训练支持** [#5682](https://github.com/volcengine/verl/issue/5682)
    *   **意义**：新增 Qwen3.5 Transformer 适配器及 Monkey Patch，并提供 27B/35B 的 GRPO 训练脚本，显著提升了 verl 对最新开源 SOTA 模型的支持力度。
*   **[Infra] NPU/Ascend 硬件适配增强** [#5795](https://github.com/volcengine/verl/issue/5795) & [#5786](https://github.com/volcengine/verl/issue/5786)
    *   **意义**：PR #5795 为 NPU 添加了可扩展段支持，PR #5786 添加了 `moonlight_ascend.yml` 配置。这表明 verl 正在系统性地强化对国产芯片（Ascend）的原生支持。
*   **[Performance] vLLM Rollout KV Cache FP8 支持** [#4435](https://github.com/volcengine/verl/issue/4435)
    *   **意义**：在 vLLM 推理阶段引入 FP8 KV Cache 量化，可大幅降低长上下文训练时的显存占用，对降低 RLHF 成本至关重要。
*   **[Integration] Atropos 环境集成** [#5520](https://github.com/volcengine/verl/issue/5520)
    *   **意义**：通过 Hook 机制将 Atropos RL 环境接入 verl GRPO 流程，增强了 verl 在复杂 Agentic 工作流中的通用性。
*   **[Tooling] Daytona Sandbox 后端** [#5796](https://github.com/volcengine/verl/issue/5796)
    *   **意义**：添加 Daytona 作为云沙盒后端，用于 Tool Calling 场景，提升了代码执行环境的安全性。
*   **[Fix] Rollout 长度截断优化** [#5794](https://github.com/volcengine/verl/issue/5794)
    *   **意义**：修复了推理阶段生成过长导致的截断性能浪费问题，显式设置 `max_tokens` 以对齐配置。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
verl 正在从一个单纯的 PPO/GRPO 训练框架演进为**全栈式 RL 基础设施**：
1.  **紧跟 SOTA 模型**：对 Qwen3.5 等最新大模型的快速适配（PR #5682），保证了用户能第一时间进行前沿模型的 RL 对齐。
2.  **异构计算支持**：对 Ascend NPU 的深度支持（PR #5795）打破了 CUDA 壁垒，为大规模分布式训练提供了更多硬件选择。
3.  **推理-训练协同优化**：通过支持 FP8 KV Cache（PR #4435）和优化 Rollout 逻辑，正在着力解决 RL 训练中“推理慢、显存大”的核心瓶颈。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-03-30)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库活跃度适中，无新发版或 Issue 更新。重点在于核心功能扩展，新增了对 **Qwen3.5 VLM** 的支持，并推进了 **GRPO 与 PPO 融合** 的训练架构升级。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**

## 4. 关键 PR 进展

*   **[Feature] Qwen3.5 VLM 支持**
    *   **ID**: [#1568](https://github.com/allenai/open-instruct/pull/1568)
    *   **状态**: Open
    *   **核心内容**:
        1.  **兼容性修复**: 解决了 Qwen3.5 在 SFT 阶段因缺少 user message 导致的 tokenizer 报错，修正了 token masking 逻辑。
        2.  **依赖升级**: 升级 `Liger-Kernel` 以适配新版 `transformers`。
        3.  **已知限制**: 发现 FlashAttention3 (FA3) 暂不兼容 Qwen3.5，目前回退使用 SPDA；同时指出 DeepSpeed Ulysses 存在兼容性问题。
    *   **点评**: 这是目前支持最新开源 VLM 模型的关键更新，指出了底层算子库（FA3 vs SPDA）与新版模型之间的兼容性边界。

*   **[Algorithm] PPO 价值模型支持 (grpo_fast.py)**
    *   **ID**: [#1462](https://github.com/allenai/open-instruct/pull/1462)
    *   **状态**: Open (WIP, 昨日有更新)
    *   **核心内容**: 在 GRPO 脚本中引入 PPO 训练范式。
        1.  **算法融合**: 支持使用显式的 Value Model 进行优势估计 (GAE)，替代 GRPO 原有的 group-normalized rewards 计算方式。
        2.  **新增参数**: 引入 `use_value_model`, `gamma`, `gae_lambda` 等 PPO 核心参数。
        3.  **架构灵活性**: 支持 separate value model（独立价值头）架构。
    *   **点评**: 该 PR 模糊了 GRPO (Group Relative Policy Optimization) 与传统 PPO 的界限，为社区提供了在同一代码库中对比无 Value Model (GRPO) 和有 Value Model (PPO) 效果的实验平台。

## 5. 为什么值得 RL 生态持续关注
Open Instruct 正在从单纯的 SFT/对齐工具箱向**前沿 RL 算法试验场**演进。
1.  **紧跟 SOTA 模型**: PR #1568 显示其对最新发布的 Qwen3.5 系列模型（尤其是 VLM）提供了极速响应和底层适配，解决了实际工程中的算子兼容性痛点。
2.  **算法架构融合**: PR #1462 表明项目正在重构 GRPO 实现，试图结合 PPO 的稳定性（通过 Value Function）与 GRPO 的内存/计算优势。这种混合架构对于在有限资源下训练超大规模模型具有重要的参考价值。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报 (2026-03-30)

## 1. 今日速览
CleanRL 在过去 24 小时内维持低活跃度，无新版本发布或新 Issue 提出。项目重点在于存量代码的质量优化，具体表现为对 JAX 版本 DQN 算法代码可读性的微小改进。

- **Issues 更新**: 0 条
- **PR 更新**: 1 条
- **Releases**: 0 个

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
唯一的活动集中在代码风格优化上，体现了社区对 "Clean" 理念的持续维护。

*   **[#537 Simpler indexing in JAX DQN](https://github.com/vwxyzjn/cleanrl/pull/537)** [CLOSED]
    *   **作者**: joelberkeley
    *   **详情**: 该 PR 旨在简化 JAX DQN 实现中的索引操作。作者指出，作为以 "Clean" 为核心的 RL 库，提升代码可读性是有价值的贡献。该变更不影响性能或功能逻辑。
    *   **状态**: PR 已于昨日（03-29）更新并关闭。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新频率较低，CleanRL 依然是强化学习生态中**算法实现透明度**的标杆：

1.  **极简主义的代码风格**: 如 PR #537 所示，项目社区不仅关注算法复现的准确性，更极度重视代码的易读性和教学价值，是学习 RL 原理的理想入口。
2.  **对新兴框架的支持**: 持续维护 JAX 等现代深度学习框架的实现，紧跟 RL 硬件加速趋势。
3.  **单文件实现逻辑**: 保持了不依赖复杂抽象架构的传统，降低了研究者进行算法魔改和实验的门槛。

---
*数据来源: GitHub @vwxyzjn/cleanrl*

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 技术动态 (2026-03-30)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库整体较为平静，无新增 Issue 或版本发布。主要动态集中在代码库的构建工具链迁移上，出现了一个关于将依赖管理从 Poetry 迁移至 UV 的功能性 PR。

## 2. 版本发布
- **无新版本发布**

## 3. 重点 Issues
- **无新增或更新 Issues**

## 4. 关键 PR 进展
- **[#343 UV migration](https://github.com/Denys88/rl_games/pull/343)** [OPEN]
    - **作者**: ViktorM
    - **核心变更**:
        1.  **构建工具迁移**: 移除了 Poetry，全面转向 [UV](https://github.com/astral-sh/uv) 进行依赖管理和打包。UV 以其极高的解析和安装速度著称，此举有望显著提升开发者的环境配置效率。
        2.  **配置修复**: 修复了部分训练配置中已过时的 `envpool` 支持问题，提升了库的兼容性。
        3.  **文档更新**: 同步更新了 README 文档。
    - **状态**: PR 创建于 3 月 28 日，昨日有更新，目前处于开启状态待审核。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
`rl_games` 作为一个成熟且高性能的强化学习算法库，其生态价值主要体现在以下几点：

1.  **工程化标杆**: PR #343 引入 UV 工具链，表明该项目在保持算法前沿性的同时，积极跟进现代 Python 工具链生态。对于追求 CI/CD 效率和快速迭代的研究者或工程师而言，这种工程化优化极具吸引力。
2.  **Isaac Gym / Sim-to-Real 基石**: 该项目是 NVIDIA Isaac Gym 生态中最常用的 RL 库之一，广泛用于腿足机器人、机械臂操作等复杂物理仿真任务。其 PPO 实现经过高度优化，是连接仿真与实物部署的重要参考。
3.  **持续维护**: 尽管更新频率不高，但对 `envpool` 等环境依赖的修复和对构建系统的重构，说明维护者仍在持续打磨底层基础，确保其在 2026 年依然易于安装和运行。

---
*数据来源: GitHub (Denys88/rl_games)*

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