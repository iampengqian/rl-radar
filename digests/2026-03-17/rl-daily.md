# RL 开源生态日报 2026-03-17

> 生成时间: 2026-03-16 22:06 UTC | 覆盖项目: 15 个

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
2026年3月17日的 RL 开源生态呈现出明显的**分层演进**态势。
*   **第一梯队（verl, TRL, OpenRLHF）** 正全力冲刺**异步架构**与**大规模分布式**支持，试图解决 LLM 后训练中“生成耗时”与“显存墙”的瓶颈。
*   **第二梯队（AReaL, ROLL, Open Instruct）** 专注于**垂直整合**，分别在异构资源调度（Colocation）、国产硬件适配（NPU）和特定任务（SWE/Code）上构建差异化壁垒。
*   **基础设施层（Gymnasium, CleanRL）** 趋于稳定，主要进行细粒度的 API 修复与教学性质的算法补全。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 17 | 45 | **v0.7.1** | **High**. 发布大版本，确立 MTP 与 R3 Router 架构，修复关键 FSDP Bug。 |
| **AReaL** | 8 | 18 | 0 | **Medium**. 深度重构 RTensor 与流水线，攻坚共卡与多模态。 |
| **TRL** | 2 | 13 | 0 | **Medium**. 核心转向 Async GRPO，强化 VLM 支持与自蒸馏算法。 |
| **Open Instruct** | 0 | 9 | 0 | **Medium**. GRPO 基础设施完工，引入 SWERL 代码沙箱。 |
| **ROCK** | 3 | 4 | 0 | **Low**. 拥抱 Serverless (FC3.0) 与云存储 (OSS)。 |
| **ROLL** | 4 | 2 | 0 | **Low**. 适配 NPU (Ascend) 与 Qwen3.5。 |
| **slime** | 3 | 2 | 0 | **Low**. 算法前沿探索 (CISPO)，跟进 Qwen3.5。 |
| **OpenRLHF** | 1 | 1 | 0 | **Low**. 激进移除 DeepSpeed，全面拥抱 FSDP2。 |
| **CleanRL** | 1 | 0 | 0 | Low. 讨论 PQN 超参。 |
| **Gymnasium** | 0 | 1 | 0 | Low. 修复 MuJoCo 渲染接口。 |
| *Others* | 0 | 0 | 0 | 无明显活动。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号
*   **GRPO 的全面异步化**：TRL (#5293) 和 Open Instruct (#1399) 均在今日重点推进 GRPO 的异步实现，试图解耦 Rollout 与 Training，这已成为替代传统 PPO 同步阻塞训练的主流范式。
*   **自蒸馏**：TRL 密集提交 SDPO 和 SDFT，verl 也引入 On-Policy Distillation。这表明利用模型自身生成的高质量轨迹进行自我迭代优化，正成为提升模型上限的关键路径。
*   **新优化算法集成**：Slime 引入 CISPO（裁剪重要性采样权重），OpenRLHF 和 verl 修复 GRPO 熵崩溃问题，显示出社区正在寻找比 PPO/REINFORCE 更稳定的策略更新方法。

### 2. 工程/基础设施侧信号
*   **去 DeepSpeed / 拥抱 FSDP2**：OpenRLHF (#1176) 提交了移除 DeepSpeed 的 PR，verl 也在持续修复 FSDP Bug。技术栈正向原生 PyTorch FSDP2 迁移，以降低维护复杂度并提升显存效率。
*   **推理-训练引擎融合**：verl (R3 Router)、AReaL (Archon Engine) 和 ROLL 均在通过 Router 机制或底层通信重构，试图将 vLLM/SGLang 的高性能推理无缝嵌入 RL 循环，实现“训练即推理”。
*   **多模态 RLHF 破局**：AReaL (LLaVA)、verl (Qwen3-VL) 和 TRL (VLM DPO) 均在解决多模态数据（特别是 Video/Multi-Image）在分布式训练中的维度对齐与传输难题。

## 差异化定位分析

*   **verl**：**架构领跑者**。凭借 v0.7.1 对 MTP（多 Token 预测）和 R3 Router 的支持，它正在定义“推理-训练一体化”的新架构标准，适合追求极致吞吐量的工业界大规模部署。
*   **AReaL**：**系统优化专家**。核心在于“抠资源”，通过 RTensor 重构和共卡部署优化，致力于在单卡/单机内压榨出最高的算力利用率，适合资源受限但追求高性能的场景。
*   **TRL**：**算法集成库**。不同于 verl/AReaL 的重型系统重构，TRL 侧重于 HuggingFace 生态上的算法快速迭代（如 Async GRPO, SDPO），对新算法和新模型架构的响应速度最快。
*   **Open Instruct**：**垂直领域工具链**。通过 SWERL 沙箱环境，它在 Code/Agentic RL 领域建立了独特优势，解决的是“如何让模型修 Bug”而非简单的“如何聊天”的问题。
*   **ROCK & ROLL**：**云原生与国产化**。ROCK 绑定阿里云 FC3.0/OSS 走 Serverless 路线，ROLL 则着力适配 NPU（Ascend），两者共同构成了非 NVIDIA 生态的 RL 基础设施。

## 社区热度与成熟度
*   **verl** 与 **TRL** 的活跃度断层领先，但性质不同：verl 更多是**架构驱动**（Megatron, Router, Engine），PR 提交量大且涉及底层；TRL 更多是**算法与 API 驱动**，关注模型兼容性与 Trainer 功能。
*   **AReaL** 与 **OpenRLHF** 处于“重构成熟期”。AReaL 正在剧烈重构核心数据结构（RTensor），OpenRLHF 正在进行移除 DeepSpeed 的“刮骨疗毒”，这表明这两个项目正在为下一阶段的性能飞跃做底层铺垫，短期可能有稳定性波动，但长期看好。
*   **Gymnasium/CleanRL** 进入维护期。仅有个位数的 Issue/PR 更新，主要服务于教学与经典算法验证，不再是前沿 LLM 训练的主要战场。

## 值得关注的趋势信号
1.  **Qwen3.5 适配潮**：几乎所有主流框架今日都在处理 Qwen3.5 的适配问题（Slime #1730, ROLL #379, verl #5599）。这表明 Qwen3.5 系列模型已成为开源 RL 实验的新基座。
2.  **RL 走向 Serverless 与 Agent 化**：ROCK 支持 FC3.0 和 Open Instruct 支持 SWERL 沙箱，标志着 RL 训练正在从“单一 Python 脚本”向“微服务架构”演进，环境不再是简单的 `gym.step()`，而是复杂的 Docker 容器或云函数。
3.  **显存与通信的极限施压**：无论是 verl 的权重同步双缓冲，还是 AReaL 的同卡进程直传，都显示出在显存受限的背景下，通过掩盖通信延迟来换取吞吐量已成为工程优化的核心手段。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL 项目日报 | 2026-03-17

这里是基于 GitHub 最新数据生成的 ROLL (alibaba/ROLL) 项目日报。

## 1. 今日速览
过去 24 小时内，ROLL 项目活跃度主要集中在 **Megatron-LM 后端兼容性** 与 **硬件生态扩展** 上。
- **Issues**: 4 条更新。主要集中在 Qwen3.5 模型配置错误、Megatron 后端的 LoRA/Compile 支持问题。
- **PRs**: 2 条更新。社区正在推动 NPU (Ascend) 硬件的支持以及生态项目的集成。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues

### 🔥 社区动态：项目进展汇总
- **[#367 [OPEN] Recent Updates Summary**](https://github.com/alibaba/ROLL/issues/367)
  - **摘要**: 维护者 @PanAndy 发布了近期更新汇总。**核心亮点**包括：
    1.  **架构重构**: Rollout 流程重构为由 router 调度，支持 `sglang-router`。
    2.  **新功能**: 支持 [On-Policy Distillation](docs_roll/i18n/zh-Hans/docusaurus-plugin-content-docs/current/User Guides/Pipeline/on_policy_distill_pipeline_start.md)（在线策略蒸馏）。
    3.  **模型支持**: 正式支持 Qwen3.5 系列。

### 🐛 核心问题：Qwen3.5 与 Megatron 后端
- **[#379 [OPEN] TypeError: Qwen3_5Config...**](https://github.com/alibaba/ROLL/issues/379)
  - **摘要**: 用户在结合 Qwen3.5-4B 与 RLVR (Reinforcement Learning with Verifiable Rewards) 使用时遇到配置初始化错误 (`unexpected keyword argument 'linear_attention_type'`)。这表明当前版本与 Qwen3.5 的特定 Attention 参数存在兼容性冲突。
- **[#372 [OPEN] LoRA with Megatron backend**](https://github.com/alibaba/ROLL/issues/372)
  - **摘要**: 用户询问在 Megatron 后端下对 Qwen3.5 使用 LoRA 的兼容性，目前遇到初始化报错。

### 🛠️ 技术探讨：编译优化
- **[#381 [OPEN] Enabling torch.compile with Megatron-LM**](https://github.com/alibaba/ROLL/issues/381)
  - **摘要**: 用户询问如何在涉及 PP/TP/EP 的 Megatron 分布式训练场景下开启 `torch.compile` 进行算子优化。这是一个高难度的工程问题，涉及两个框架的底层交互。

## 4. 关键 PR 进展

### 🌱 硬件适配：国产 NPU 支持
- **[#380 [OPEN] [WIP] Add npu megatron support**](https://github.com/alibaba/ROLL/pull/380)
  - **摘要**: 开发者 @UsernameFull 正在通过引入 `mindspeed` 库来适配 NPU（推测为华为 Ascend）上的 Megatron 训练后端，并已添加对应的 YAML 配置示例。这意味着 ROLL 正在从单一的 NVIDIA GPU 生态向国产算力扩展。

### 📚 文档与生态
- **[#382 [OPEN] Add RLix to notable works**](https://github.com/alibaba/ROLL/pull/382)
  - **摘要**: 提议将 RLix 添加到 README 的 "Notable Works" 板块，显示周边生态工具链正在丰富。

## 5. 为什么值得关注？

作为一个 RL 开发者，ROLL 项目在当前生态中具有以下独特价值：

1.  **前沿架构探索**: 项目正在积极将 Rollout 过程与 **Router**（如 sglang-router）结合，这种“推理-训练”深度融合的架构是 RLHF 大规模落地的关键趋势。
2.  **重型后端支持**: 社区讨论集中在 **Megatron-LM**、PP/TP/EP 混合并行以及 `torch.compile` 上。这表明 ROLL 的定位不是简单的单卡 Demo，而是面向 **百亿/千亿参数级模型** 的高性能分布式训练框架。
3.  **国产化适配**: PR #380 显示项目正在通过适配 NPU 拓展硬件边界，对于关注国产算力与 RL 结合的开发者具有较高的参考价值。

---
*数据来源: GitHub (alibaba/ROLL) | 分析时间: 2026-03-17*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 开源生态分析
**日期：** 2026-03-17
**项目：** ROCK (alibaba/ROCK)

## 1. 今日速览
过去 24 小时，ROCK 项目活跃度主要集中在**基础设施扩展**与**工具链增强**。社区贡献者重点推进了对 **阿里云函数计算（FC3.0）** 的支持，标志着 ROCK 正式向 Serverless 架构延伸。同时，针对 OSS 存储集成的功能提交占据了主要代码更新，项目生态的云原生绑定程度进一步加深。

- **Issues 更新：** 3 条 (2 Open / 1 Closed)
- **PR 更新：** 4 条 (3 Open / 1 Closed)

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
今日新增的两个 Feature Request 均指向云服务深度集成，显示用户对 RL 训练数据流与部署架构有更高的云原生需求。

- **[#644] [Feature] 支持 Alibaba Function Compute 作为 Sandbox Runtime Provider**
    - **作者:** @insight-bit
    - **解读:** 提议将阿里云函数计算 FC3.0 引入 ROCK 沙箱运行时。此举旨在利用 Serverless 架构解决 RL 环境部署的运维复杂度，并实现计算资源的弹性伸缩。这是 ROCK 继 Docker、Ray、K8s 之后的重要架构补充。
    - **链接:** [alibaba/ROCK Issue #644](https://github.com/alibaba/ROCK/issues/644)

- **[#640] [Feature] 上传文件至指定的 OSS**
    - **作者:** @zhongwen666
    - **解读:** 请求在 SDK & API 层面增强存储能力，支持将训练产物或数据直接上传至指定的 OSS 路径，完善数据闭环。
    - **链接:** [alibaba/ROCK Issue #640](https://github.com/alibaba/ROCK/issues/640)

## 4. 关键 PR 进展
PR 活动显示出"Issue 提出即实现"的高效响应模式，尤其是 Serverless 相关的大型 PR 已提交审核。

- **[#643] [Feat] 添加 Alibaba Function Compute Serverless Runtime Provider 支持**
    - **作者:** @insight-bit
    - **状态:** Open
    - **技术细节:** 对应 Issue #644。该 PR 实现了 FC3.0 的完整适配，包含三种部署模式及断路器、WebSocket 重连等容错机制。代码质量较高，是目前最值得关注的 MR。
    - **链接:** [alibaba/ROCK PR #643](https://github.com/alibaba/ROCK/pull/643)

- **[#641] & [#642] OSS 集成相关提交**
    - **作者:** @zhongwen666
    - **状态:** Open
    - **解读:** 这两个 PR 围绕 OSS 上传功能展开（#641 可能是初始提交，#642 为功能完善或关联修复），旨在解决数据持久化痛点。
    - **链接:** [alibaba/ROCK PR #641](https://github.com/alibaba/ROCK/pull/641), [alibaba/ROCK PR #642](https://github.com/alibaba/ROCK/pull/642)

- **[#635] [Feat] 支持 Pool 和 Template 映射**
    - **作者:** @Generalwin
    - **状态:** Closed (已合并)
    - **解读:** 增强了配置文件的功能，允许用户自定义资源池和模板映射，提升了环境管理的灵活性。
    - **链接:** [alibaba/ROCK PR #635](https://github.com/alibaba/ROCK/pull/635)

## 5. 为什么值得持续关注
ROCK 正在从单纯的 RL 环境/沙箱管理工具，演进为**深度集成阿里云生态的 Serverless RL 平台**。

1.  **架构演进：** 通过引入 Function Compute 支持，ROCK 正在降低 RL 环境的大规模并发启动门槛，这在当前的 RL 开源生态中是一个极具差异化竞争力的方向。
2.  **生态闭环：** 连续的 OSS 集成动作表明项目正在打通"环境启动 -> 训练 -> 数据存储"的云端闭环，对于需要大规模分布式训练的企业级用户具有很高实用价值。

---
*分析师注：建议密切关注 PR #643 的 Review 进度，FC3 的合并将是项目下一个里程碑。*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL 日报：Slime 项目动态 (2026-03-17)

**今日速览**
Slime 项目今日维持较高活跃度，社区重点关注 Qwen3.5 系列模型的适配问题及训练性能优化。核心开发团队正在推进 Megatron 依赖的更新，社区贡献者提交了关于 CISPO 算法的 PR。

**1. 版本发布**
*   **无新版本发布**。

**2. 重点 Issues (Top Issues)**

*   **[高频需求] Qwen3.5 模型适配进度**
    用户对 Qwen-3.5 系列（35B-A3B, 122B-A10B 等）的适配呼声较高（👍 16）。目前有用户反馈在初始化 Qwen3.5 模型时遇到参数解析错误（`qwen3.5 model init error`），显示与 Megatron 参数解析存在冲突。
    *   链接: [THUDM/slime Issue #1627](https://github.com/THUDM/slime/issues/1627)
    *   链接: [THUDM/slime Issue #1730](https://github.com/THUDM/slime/issues/1730)

*   **[性能排查] Agent 框架训练耗时异常**
    用户基于 `strands-agents` 魔改进行训练时，单步耗时高达 2 小时，质疑 Rollout 阶段是否存在阻塞或效率问题。该问题涉及 RL 训练中的异步处理机制优化。
    *   链接: [THUDM/slime Issue #1332](https://github.com/THUDM/slime/issues/1332)

*   **[复现问题] Geo3k 多轮对话奖励异常**
    用户在复现 `geo3k_multi_turn` 示例时，发现 Reward 曲线无法收敛且初始 Reward 显著低于预期（0.1 vs 0.3），可能存在环境配置或 Reward 计算逻辑的 Bug。
    *   链接: [THUDM/slime Issue #1724](https://github.com/THUDM/slime/issues/1724)

*   **[架构讨论] True On-Policy 模式移除原因**
    开发者询问为何移除 "true-on-policy" 模式，该模式此前用于消除训练与推理间的数值差异。
    *   链接: [THUDM/slime Issue #1693](https://github.com/THUDM/slime/issues/1693)

**3. 关键 PR 进展**

*   **[算法扩展] 新增 CISPO 算法支持**
    贡献者 @kekmodel 提交 PR 旨在集成 CISPO (Clipped IS-weight Policy Optimization)。该算法源自 MiniMax-M1 论文，主要解决 PPO/GRPO 在处理低概率 Token 时的局限性，通过裁剪重要性采样权重来稳定策略更新。
    *   链接: [THUDM/slime PR #681](https://github.com/THUDM/slime/pull/681)

*   **[依赖更新] 更新 Megatron 核心**
    核心成员 @zhuzilin 提交 PR 更新 Megatron 组件，这可能是在为修复 #1730 提到的模型初始化错误或支持新架构做准备。
    *   链接: [THUDM/slime PR #1729](https://github.com/THUDM/slime/pull/1729)

**4. 为什么持续关注 Slime？**

*   **前沿算法集成迅速**：社区正在积极讨论并集成 CISPO 等针对 LLM 优化的新型 RL 算法，显示出项目对学术界最新成果的快速响应能力。
*   **复杂 Agent 训练支持**：Issue #1332 显示出工业界用户正在将其用于复杂的 Agent 场景（如 strands 集成），尽管存在性能挑战，但证明了框架在非简单数学任务上的扩展性尝试。
*   **对新架构的敏捷适配**：针对 Qwen3.5 等最新大模型的高优先级讨论和 Bug 修复，表明该项目紧跟 LLM 模型生态的发展步伐。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-17)

## 1. 今日速览
AReaL 生态在过去 24 小时内保持高度活跃，虽然没有新版本发布，但代码提交主要集中在**系统架构重构**和**多模态支持增强**。社区对**异构模型支持**（如 LLaVA, Kimi）及**资源共卡调度**表现出浓厚兴趣。共产生 8 条 Issue 更新和 18 条 PR 更新，涉及核心底层基础设施的改动较多。

## 2. 版本发布
*   **最新 Releases**: 无

## 3. 重点 Issues
*   **[系统架构] 探讨 Rollout 与 Actor 共卡部署**
    社区正在讨论在单卡或同设备上运行 Rollout（推理）和 Actor（训练）的可行性，旨在提升资源利用率。目前代码中有相关迹象但未完全明确支持。
    [Issue #992](https://github.com/inclusionAI/AReaL/issues/992)

*   **[模型支持] 拓展模型家族与多模态支持**
    开发者询问 AReaL 对 GPT-OSS、Kimi K2、GLM4.5 等模型家族的 RL 训练支持路线。同时，有用户提请支持 **LLaVA-OneVision-1.5** 的 RL 训练，这标志着 AReaL 正在向更复杂的 Vision-Language 模型扩展。
    [Issue #945](https://github.com/inclusionAI/AReaL/issues/945) | [Issue #1028](https://github.com/inclusionAI/AReaL/issues/1028)

*   **[Bug 修复] 多模态 RPC 传输错误**
    发现当样本包含多张图像时，RPC 传输层错误地将 `pixel_values` 等张量视为普通批次数据进行切分，导致形状错误。
    [Issue #1036](https://github.com/inclusionAI/AReaL/issues/1036)

*   **[功能咨询] 同步 RL 模式下的 Partial Rollouts**
    用户询问 AReaL 是否支持同步模式下的部分轨迹收集，这是 moonshot's Kimi 等相关工作使用的关键设置。
    [Issue #1034](https://github.com/inclusionAI/AReaL/issues/1034)

## 4. 关键 PR 进展
*   **[高优/重构] RTensor 简化与流水线重构**
    将 `RTensor` 从复杂的多分片抽象简化为轻量级单分片引用，并将数据并行逻辑上移至 Train Controller。这是一个重大的底层架构变更，旨在优化 Rollout 流水线性能。
    [PR #1017](https://github.com/inclusionAI/AReaL/pull/1017)

*   **[高优/依赖] 核心推理引擎版本升级**
    升级 SGLang 和 vLLM 至最新版本，并重构 Dockerfile 以解决 SGLang (torch 2.9.1) 与 vLLM (torch 2.10.0) 之间的 PyTorch 版本依赖冲突。
    [PR #1010](https://github.com/inclusionAI/AReaL/pull/1010)

*   **[新特性] LoRA 基础设施建设**
    为 Archon 引擎引入 Phase 1 & 2 的 LoRA 支持，实现了与 FSDP2/DTensor 的兼容及 PEFT 检查点保存，解决了 FSDP 通信死锁问题。
    [PR #1015](https://github.com/inclusionAI/AReaL/pull/1015)

*   **[性能优化] 共卡场景下的张量直传**
    针对训练与推理进程共用 GPU 的场景，绕过无法在同设备进程间通信的 NCCL，改为直接传递张量以同步权重。
    [PR #999](https://github.com/inclusionAI/AReaL/pull/999)

*   **[修复] 多模态 RPC 传输修正**
    修复了多图样本中非批次对齐张量（如 `pixel_values`）在 RPC 传输中被错误处理的问题。
    [PR #1038](https://github.com/inclusionAI/AReaL/pull/1038)

## 5. 为什么值得关注
AReaL 正在从一个纯粹的 RL 训练框架演进为一个**高性能、异构的 RL 系统**。
1.  **极致的系统优化**：PR #1017 和 #999 显示了团队正在重构底层传输和调度逻辑，以支持更高效的 Colocation（共卡/共机）部署，这对于降低大模型 RLHF 成本至关重要。
2.  **多模态 RL 的前哨战**：针对 LLaVA-OneVision 的支持请求和针对多图 RPC 传输的修复表明，AReaL 正在积极解决多模态大模型在 RL 训练中的工程难题，这是目前开源生态中相对薄弱的环节。
3.  **灵活的推理后端**：同时兼容 vLLM 和 SGLang 并积极跟进最新版本，使得 AReaL 能够利用最前沿的推理加速技术来驱动 RL 训练循环。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 项目日报 (2026-03-17)

## 1. 今日速览
过去 24 小时内，TRL 项目维持高频开发状态，共有 **13 个 PR 更新**（其中包含多个核心功能重构与修复）以及 **2 个 Issue 更新**。重点聚焦于 **GRPO（Group Relative Policy Optimization）的异步化与性能优化**，以及 **DPO 对多模态模型（VLM）和新版 Transformers 的适配**。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 重点 Issues
- **[[GRPO] 7B 模型生成速度优化 (#3195)](https://github.com/huggingface/trl/issues/3195)**
  - **状态**: Open
  - **详情**: 社区贡献者 @edbeeching 指出在使用 DeepSpeed 运行 7B 推理模型时，生成阶段成为性能瓶颈。该 Issue 正在探讨如何通过优化 DeepSpeed 集成来加速 GRPO 训练循环中的样本生成。

- **[DPO 与 FSDP2 兼容性问题 (#4812)](https://github.com/huggingface/trl/issues/4812)**
  - **状态**: Closed
  - **详情**: 关于 `accelerate` + `FSDP2` 运行 DPO 失败的问题已在此前解决，该 Issue 于昨日正式关闭，标志着 DPO 在分布式策略 FSDP2 上的支持已趋于稳定。

## 4. 关键 PR 进展

### 核心算法优化 (GRPO)
- **[Async GRPO (#5293)](https://github.com/huggingface/trl/pull/5293)**
  - **作者**: @qgallouedec
  - **内容**: 提出 **异步 GRPO** 实现。通过解耦生成与训练过程，旨在解决强化学习训练中常见的阻塞问题，显著提升训练吞吐量。这是目前 GRPO 走向大规模生产级应用的关键一步。

- **[修复 GRPO Tool-calling 重分词 Bug (#5242)](https://github.com/huggingface/trl/pull/5242)**
  - **内容**: 针对多轮工具调用场景，修复了因对解码文本重新分词导致的 Token ID 不一致问题，改为直接拼接 Token IDs，确保多轮对话上下文的精确性。

### 训练器与算法扩展
- **[Add SDPO (Self-Distillation Policy Optimization) Trainer (#4935)](https://github.com/huggingface/trl/pull/4935)**
  - **内容**: 引入 SDPO 算法，利用模型自身的高奖励轨迹进行自蒸馏，提供更稠密的学习信号。

- **[Add SDFT (Self-Distillation Fine-Tuning) Trainer (#4941)](https://github.com/huggingface/trl/pull/4941)**
  - **内容**: 实验性引入 SDFT 训练器，进一步丰富了 TRL 在自蒸馏技术栈上的支持。

### DPO 与多模态 (VLM) 修复
- **[Support max_length in DPO VLM training (#5284)](https://github.com/huggingface/trl/pull/5284)**
  - **内容**: 修复了 DPO 训练 VLM 时截断序列导致的对齐问题，确保 `token_type_ids` 等侧输入与 `input_ids` 正确同步截断。

- **[Prevent corruption with "keep_end" truncation (#5286)](https://github.com/huggingface/trl/pull/5286)**
  - **内容**: 针对视觉语言模型，禁用了会导致训练损坏的 `keep_end` 截断模式，抛出显式错误以避免静默失败。

### 架构重构与适配
- **[Fix: Skip ref adapter for PEFT target_parameters (#5292)](https://github.com/huggingface/trl/pull/5292)**
  - **内容**: 修复了 DPO Trainer 与 Transformers 5.x 中 Fused MoE 层的兼容性问题（当使用 `target_parameters` 时）。

- **[Remove TrainingArguments from experimental trainers (#5290)](https://github.com/huggingface/trl/pull/5290)**
  - **内容**: 代码重构，移除了实验性训练器对 `transformers.TrainingArguments` 的直接依赖，改用项目内部的 `_BaseConfig`，提升了配置管理的独立性与灵活性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在经历从单一的 PPO/DPO 库向 **全栈、异步、多模态兼容** 的 RL 训练框架演进。
1.  **架构升级**: **Async GRPO (#5293)** 的引入表明项目组正在积极解决 RL 训练中“生成慢、训练快”的瓶颈，这对于大规模 LLM 后训练至关重要。
2.  **前沿覆盖**: 无论是 **SDPO/SDFT** 等最新蒸馏算法的集成，还是对 **Transformers 5.x MoE** 特性的快速适配，都证明了 TRL 紧跟 SOTA 研究与底层架构变动。
3.  **多模态深耕**: 连续修复 DPO 在 VLM 上的截断与对齐 Bug，说明 TRL 正在成为多模态大模型对齐的首选工具之一。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 生态监测 (2026-03-17)

## 1. 今日速览
过去 24 小时，OpenRLHF 生态整体处于**平稳迭代期**。社区层面，出现了针对 Qwen3.5 模型训练的兼容性咨询（已闭环）；核心开发层面，关于移除 DeepSpeed 并全面转向 FSDP2 的重大架构重构 PR 仍有活动，预示着项目底层依赖正在发生根本性转变。

- **Issue 活跃度**：Low (1 update)
- **PR 活跃度**：Low (1 update)
- **Release**：无

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 重点 Issues
今日关注到一则关于**新架构模型兼容性**的 Issue，已由社区或维护者关闭。

- **[#1194 支持Qwen3.5训练吗](https://github.com/OpenRLHF/OpenRLHF/issues/1194)**
    - **状态**: CLOSED
    - **内容**: 用户在使用 `openrlhf-0.9.5` 训练 Qwen3.5-4b 时遭遇 Traceback，错误发生在 `train_ppo_ray.py` 的前向传播阶段。
    - **分析**: 该 Issue 虽为新模型适配咨询，但迅速被关闭，通常意味着这是配置问题、已修复的 Bug，或是已在文档/其他 Issue 中明确答复过的内容。这也反映了社区对最新 SOTA 模型（如 Qwen3.5）的高关注度。

## 4. 关键 PR 进展
今日最值得关注的动态是关于底层训练引擎的重构。

- **[#1176 feat: add the support of fsdp2 and remove deepspeed](https://github.com/OpenRLHF/OpenRLHF/pull/1176)**
    - **状态**: OPEN (Active)
    - **核心变更**: 
        1. **引入 FSDP2**: 全面支持 PyTorch 分布式数据并行的新版本 (FSDP2)，预期将带来显存优化和吞吐量的提升。
        2. **移除 DeepSpeed**: 这是一个**激进且关键**的架构决策。意味着 OpenRLHF 未来版本将不再依赖 Microsoft DeepSpeed，转而构建基于原生 PyTorch 生态的纯净技术栈。
    - **关联**: 这是 PR #1115 的升级版本，表明维护者正在积极推进代码合并，致力于解决 RLHF 训练中 DeepSpeed 带来的维护复杂性和稳定性问题。

## 5. 为什么值得继续关注
OpenRLHF 正在经历一次**底层技术栈的代际升级**：
1.  **去 DeepSpeed 化**：PR #1176 显示项目正在摆脱对第三方复杂库的依赖，转向 PyTorch 原生 FSDP2。这通常意味着更好的调试体验、更高的社区可控性以及对最新 GPU 硬件（如 FSDP2 对闪存注意力的优化支持）的快速适配。
2.  **紧跟 LLM 演进**：从 Issue #1194 可以看出，用户群体正积极将其应用于最新的 Qwen3.5 等模型。OpenRLHF 凭借其模块化设计，依然是验证和训练新一代基座模型对齐策略的首选开源框架之一。

---
*数据来源: GitHub (2026-03-17)*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 (2026-03-17)

## 1. 今日速览
verl 项目保持高频迭代，过去 24 小时内 PR 更新量达 **45 条**，Issues 更新 **17 条**，并发布了 **v0.7.1** 版本。重点集中在 **Megatron 引擎增强**（特别是 MTP 训练和 R3 router）、**多模态模型支持**（Qwen3-VL/Qwen3.5）以及 **性能优化**（FSDP loss scale 修复、vLLM 权重同步双缓冲）。社区正围绕 26Q1 路图推进新旧引擎的平稳过渡。

## 2. 版本发布
### [v0.7.1](https://github.com/volcengine/verl/releases/tag/v0.7.1)
- **核心亮点**：
    - **Megatron 引擎**：全面支持 **MTP (Multi-Token Prediction)** 训练（覆盖 SFT/RL 场景）。
    - **R3 Router**：集成 vLLM 和 SGLang 的 R3 router replay 功能，提升了推理与训练的协同效率。

## 3. 重点 Issues
- **[Roadmap] verl 26Q1 规划** [#4880](https://github.com/verl-project/verl/issues/4880)
    - **关注点**：明确将切换至新 Model Engine，并标记旧引擎为 Deprecated，重点补齐 LoRA/PEFT 等功能在新旧引擎的 parity。
- **[Bug] GRPO 训练中熵异常激增** [#2738](https://github.com/verl-project/verl/issues/2738)
    - **现状**：使用 GRPO 进行数学任务训练时，Entropy 突增导致崩溃，该问题长期存在且影响训练稳定性，需引起注意。
- **[Bug] FSDP Token-Mean 模式 Loss Scale 错误** [#5625](https://github.com/verl-project/verl/issues/5625)
    - **详情**：Legacy FSDP 在使用 gradient accumulation + token-mean 时，loss_scale_factor 计算基于 sample-count 而非 token-count，导致梯度与 full-batch 不一致。已由 PR #5626 修复。
- **[Bug] Qwen3-VL 多时长视频 Batch 训练维度不匹配** [#5554](https://github.com/verl-project/verl/issues/5554)
    - **详情**：同一 batch 中混合不同帧数的视频数据时，`position_ids` 报错，阻碍了 Video RLHF 的训练。
- **[Feature] 异步 Profiling 系统 RFC** [#4207](https://github.com/verl-project/verl/issues/4207)
    - **进展**：针对异步后端和 AgentLoop 设计的 Profiling 系统，现已 Closed，相关分析工具正在推进 (#5439)。

## 4. 关键 PR 进展
### 核心功能与修复
- **[Megatron] Qwen3.5 LoRA & MTP 支持** [#5599](https://github.com/verl-project/verl/pull/5599)
    - 修复了 Qwen3.5 在 Megatron 后端下的 LoRA 适配，并依赖新的 MTP patch (#5587)。
- **[FSDP] On-Policy Distillation (OPD)** [#5592](https://github.com/verl-project/verl/pull/5592) & **Multi-Teacher OPD** [#5164](https://github.com/verl-project/verl/pull/5164)
    - 引入了基于 Top-k 和 KL estimator 的 On-Policy 蒸馏功能，支持使用 vLLM 作为 Teacher Server，扩展了 RL 训练的上限。
- **[FSDP] 修复 Token-Mean Loss Scale** [#5626](https://github.com/verl-project/verl/pull/5626)
    - 针对 Issue #5625 的直接修复，确保梯度累积时计算正确。

### 性能与架构优化
- **[vLLM] 权重同步双缓冲优化** [#5619](https://github.com/verl-project/verl/pull/5619)
    - 在 Rollout 权重同步阶段引入双缓冲机制，旨在掩盖通信延迟，提升训练吞吐。
- **[Perf] NUMA Affinity 绑定** [#5627](https://github.com/verl-project/verl/pull/5627)
    - 为 `TrainingWorker` 添加 NUMA 亲和性设置，尝试解决 SFT 训练中 Ray 版本与脚本版本性能差异问题。
- **[Integration] Atropos 环境集成** [#5520](https://github.com/verl-project/verl/pull/5520)
    - 集成 Atropos RL 环境，通过 hook 机制实现与 verl GRPO 流程的对接，扩展了 RL 环境生态。

## 5. 为什么值得持续关注
verl 正处于架构升级的关键期（26Q1），从 v0.7.1 对 **MTP** 和 **R3 Router** 的支持可以看出，该项目正在向更复杂的推理-训练一体化架构演进。
1.  **解决痛点**：近期关于 FSDP Loss Scale 和多模态维度匹配的修复（#5626, #5554），显示了团队在夯实底层训练稳定性。
2.  **前沿探索**：对 **On-Policy Distillation** (#5592) 和 **Diffusion Model RLHF** (vLLM-Omni #5616) 的支持，使其不仅限于 LLM，正逐步成为覆盖多模态、多架构的统一 RL 基础设施。
3.  **生态开放**：通过集成 Atropos (#5520) 和强化 Profiling 工具 (#5439)，verl 正在降低自定义环境接入和性能调优的门槛。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 项目动态 (2026-03-17)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库没有新的版本发布或 Issue 更新，但 **Pull Request 活动高度活跃**（共 9 条更新）。
**核心动态**：开发重心明显向 **GRPO（Group Relative Policy Optimization）** 基础设施倾斜，涵盖了从 Ray actors、vLLM 集成到 PPO 算法支持的完整链路。此外，引入了针对 **SWERL（软件工程 RL）** 的沙箱环境以及 **离线蒸馏** 基础设施。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新 Issue 或更新。

## 4. 关键 PR 进展

### 核心算法与基础设施 (GRPO & Ray)
*   **GRPO 完整训练流接入**: PR [#1399](https://github.com/allenai/open-instruct/pull/1399) 更新了 GRPO 的主入口脚本及 OLMo-core Trainer 集成，并新增了单机/多机及工具调用的测试脚本。
*   **Ray Actor 封装**: PR [#1398](https://github.com/allenai/open-instruct/pull/1398) 已关闭，标志着 `PolicyTrainerOLMoCoreProcess` 和 `OLMoCoreModelGroup` 等 Ray actor 组件已完成封装，用于分布式 GRPO 训练。
*   **Hybrid Model 基准测试**: PR [#1425](https://github.com/allenai/open-instruct/pull/1425) 正在运行混合模型的基准测试，目前依赖于 vLLM 上游 PR 的合并。
*   **PPO 算法扩展**: PR [#1462](https://github.com/allenai/open-instruct/pull/1462) 正在为 `grpo_fast.py` 添加 PPO 支持，引入了 Value Model 进行 GAE 优势估计，替代单纯的组归一化奖励。

### 环境与蒸馏
*   **SWERL 沙箱环境**: PR [#1492](https://github.com/allenai/open-instruct/pull/1492) 新增 `SWERLSandboxEnv`，支持基于 Docker 的独立任务测试套件，专为代码生成与 SWE 任务设计。
*   **离线蒸馏**: PR [#1525](https://github.com/allenai/open-instruct/pull/1525) 已关闭。这是 DistillKit 的第一部分，主要合并了用于捕获 Teacher Logits 的压缩辅助工具，为后续离线蒸馏铺平道路。

### 工程效能
*   **HuggingFace 限流修复**: PR [#1528](https://github.com/allenai/open-instruct/pull/1528) 修复了多 Ray Actor 同时启动导致 HF API 限流的问题，通过主进程预下载模型来解决。
*   **Slack 告警系统**: PR [#1529](https://github.com/allenai/open-instruct/pull/1529) 和 PR [#1527](https://github.com/allenai/open-instruct/pull/1527) 分别增加了 Slack Webhook 文档和邮件通知支持，优化了长时间训练任务的监控体验。

## 5. 为什么值得 RL 生态关注
Open Instruct 正在从一个单纯的指令微调工具库演进为 **全栈式 RLHF/RL 训练平台**：
1.  **算法多样性**：同时支持 GRPO（高效无 Value Model）和 PPO（经典 Value-based），给予了开发者根据算力和任务特性选择算法的自由。
2.  **任务泛化能力**：通过引入 `SWERLSandboxEnv`，项目正在解决 LLM 在复杂工程任务（如代码修复）中的 RL 训练痛点，这是当前从 Chatbot 迈向 Agent 的关键一步。
3.  **生产级可用性**：对 Ray、vLLM 混合引擎及离线蒸馏的持续集成，表明该项目正致力于解决大规模分布式训练中的实际工程瓶颈（如网络限流、分布式推理）。

---
*分析师注：GRPO 相关的多个 PR（#1398, #1399）密集更新且部分已关闭，预示着该功能可能即将在 Main 分线全面可用。*

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL RL 日报摘要 (2026-03-17)

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体保持平静。无代码合并或版本发布。社区活跃度主要体现在对现有算法实现细节的讨论上，具体为关于 **PQN (Phasic Policy Gradient with Q-Function)** 算法在经典控制任务中参数配置的咨询。

- **Issues 变动**: 1 条 (已关闭)
- **PR 变动**: 0 条
- **Releases**: 0 个

## 2. 版本发布
**无**。
近期未推送新的版本标签，代码库版本保持稳定。

## 3. 重点 Issues
**#543 [CLOSED] PQN's hyperparameters for classic control**
- **链接**: [vwxyzjn/cleanrl Issue #543](https://github.com/vwxyzjn/cleanrl/issues/543)
- **参与者**: @alirezakazemipour (作者)
- **内容摘要**: 作者询问 CleanRL 中 PQN 算法在经典控制任务下的超参数选择依据。指出原始论文未涵盖这些特定任务的参数配置，希望了解代码实现中参数选取的具体逻辑或来源。
- **状态**: 该 Issue 已在创建次日 (2026-03-16) 关闭，推测维护者已提供解答或指向了相关代码/文档。

## 4. 关键 PR 进展
**无**。
过去 24 小时内无活跃的 Pull Request 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新平淡，但 CleanRL 在强化学习生态中仍具独特价值：

1.  **单文件实现**: 相较于复杂的模块化框架（如 Stable-Baselines3 或 Rllib），CleanRL 坚持单文件、无依赖抽象的实现方式，是研究人员理解算法底层逻辑（如 PQN 的具体实现差异）的最佳“活文档”。
2.  **复现与基准**: Issue #543 的讨论表明，项目正不断填补新算法在传统基准上的空白。这种对经典环境与新算法（如 PQN）结合的探索，为社区提供了论文之外的实证参考。
3.  **技术透明度**: 该项目强调超参数配置的可追溯性。即便像 #543 这样的问题被关闭，公开的讨论记录也为后续开发者调整 PQN 参数提供了直接依据。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报：Gymnasium 生态追踪 (2026-03-17)

## 1. 今日速览
Gymnasium 仓库今日整体活跃度较低，无新增 Issue 或版本发布。主要动态集中在存量 PR 的维护上，修复了针对最新 MuJoCo 版本的兼容性问题。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无新增**：过去 24 小时内未记录到新开的 Issue。

## 4. 关键 PR 进展
*   **[#1542 [CLOSED] fix(envs): fix typo in mujoco_rendering solver iterations](https://github.com/Farama-Foundation/Gymnasium/pull/1542)**
    *   **作者**: @wikiwiki1006
    *   **状态**: 已关闭
    *   **详情**: 修复了 `gymnasium/envs/mujoco/mujoco_rendering.py` 第 673 行的一个关键拼写错误。
    *   **技术细节**: 旧代码使用了 `self.data.solver_niter`，这在近期版本的 MuJoCo 中会导致 `AttributeError`。该 PR 将其修正为 `solver_iter`，确保了渲染过程中求解器迭代次数的正确读取，解决了与新版 MuJoCo 接口的兼容性崩溃问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 OpenAI Gym 的维护分支和事实上的标准 API，Gymnasium 仍然是连接 RL 算法与环境的核心枢纽。
*   **底层依赖维护**: 今日的 PR 修复表明项目正在积极跟进 MuJoCo 等底层物理引擎的 API 变更。随着 MuJoCo 的持续迭代，Gymnasium 的及时修复防止了下游 RL 训练流程因渲染或数据属性错误而中断。
*   **稳定性**: 即使在代码提交频率较低的日子，此类精确的 Bug 修复对于保证复杂物理环境（如 MuJoCo）的可用性至关重要。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>