# RL 开源生态日报 2026-06-08

> 生成时间: 2026-06-07 22:19 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态正经历深刻的范式转移：从传统的单轮对话对齐，全面迈向以 **Agentic RL（智能体强化学习）** 和 **多模态对齐（VLM）** 为核心的复杂决策与工程落地阶段。以 TRL、verl、AReaL 为代表的头部 LLM 对齐框架，正在极速适配最新一代 MoE 架构（如 DeepSeek V4、Qwen3.5），并在底层显存优化、异步架构和安全机制上展开激烈角逐。与此同时，传统纯 RL 算法库（如 rl_games）则聚焦于具身智能场景下策略分发的前沿安全性与标准化探索。

## 各项目活跃度对比
过去 24 小时内，生态内呈现明显的头部集中效应，Top 3 框架贡献了绝大部分的代码与讨论。其他项目则处于平稳蓄力或静默期。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 5 | 24 | 0 | 修复生产级静默 Bug，深度下沉 VLM 支持，探索防崩溃新算法 DPPO。 |
| **verl** | 5 | 9 | 0 | 极速跟进 DeepSeek V4，探索全异步架构，重点优化超长上下文显存。 |
| **AReaL** | 4 | 3 | 0 | 引入动态树注意力与 Host 内存优化，构建独立的 Agent 会话运行时。 |
| **rl_games** | 1 | 1 | 0 | 探索机器人策略的安全边界与能力清单分发机制。 |
| **slime** | 1 | 1 | 0 | 适配 Qwen3.5-9B，提供全异步 RL 训练示例。 |
| **ROLL** | 1 | 0 | 0 | 社区探索 SWE 多轮 Agentic 任务的最佳实践。 |
| **其他库*** | 0 | 0 | 0 | 过去 24 小时无实质代码或讨论活动。 |

*(注：其他库包含 CleanRL, Gymnasium, OpenRLHF, Stable Baselines3, Tianshou 等 8 个项目)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **向多轮 Agentic RL 聚合**：SWE-bench 等复杂软件工程任务成为核心 benchmarks。verl、AReaL、ROLL 均在探索或被要求支持长轨迹、多轮工具调用及基于环境反馈（如测试通过率）的 GRPO 训练。
2. **克服 GRPO 长期训练瓶颈**：业界逐渐发现 GRPO 在长时训练中的模型崩溃或奖励饱和问题，TRL 社区已开始引入 DPPO 等变体算法进行针对性缓解。
3. **探索高效树状与异步策略**：前沿研究正从同步单轮转向高并发架构。AReaL 引入实验性的 Dynamic Tree Attention 以支持共享前缀的分块反向传播，slime 也全面布局 `fully_async` 策略。

**工程与基础设施侧信号：**
1. **VLM（视觉语言模型）对齐的工程修补**：多模态训练的卡点集中于底层数据处理。TRL 密集修复了图像 Token 截断、跨分词器多字节对齐等硬核 Bug。
2. **极长上下文与大规模 MoE 显存攻坚**：针对 Qwen3.5/DeepSeek 等大参数量模型，verl 采用分块计算避免实例化超大 Tensor（省 28GB 显存），AReaL 则通过禁用不必要的 CPU 备份缓解 Host 内存瓶颈。
3. **安全性从模型能力转向 RL 基建**：包括 verl 修复 Tool Parser 导致的任意代码执行（ACE）漏洞，TRL 对 vLLM 推理服务增加默认鉴权，以及 rl_games 尝试在 Checkpoint 中嵌入策略的“能力与安全边界”。

## 差异化定位分析
- **TRL (HuggingFace)**：定位为**高可靠的工业级全链路对齐基建**。算法上保持敏锐（跟进 DPPO），但核心护城河在于极致的工程细节打磨（严查 Margin 静默丢失）与无缝的 HF 多模态生态（VLM）整合。
- **verl (字节数科) & AReaL (inclusionAI)**：这两者代表了**面向超大规模集群与复杂 Agent 场景的底层引擎**。它们强依赖 Megatron 桥接与 Ray 分布式架构，核心发力点在于突破千亿参数 MoE 模型的显存壁垒及构建高吞吐的异步/分布式 Rollout 机制。
- **rl_games**：依然保持其**高性能具身智能底层算法库**的纯粹性。在其他库卷 LLM 文本时，它专注于解决 Sim-to-Real 虚实迁移中的实际问题，率先探索策略权重的安全分发与意图声明。
- **slime & ROLL**：作为快速跟进的生态力量，定位为**前沿 SOTA 模型的极速适配者**。重点在于快速推出最新模型（如 Qwen3.5）的高效训练 Recipe，降低前沿 RL 算法的复现门槛。

## 社区热度与成熟度
1. **第一梯队进入“深水区”**：TRL 和 verl 保持着高频的 PR 与 Issue 互动。它们不再局限于基础算法的实现，而是花费大量精力处理 FSDP2/Megatron 底层张量并行冲突、vLLM 安全漏洞等生产级隐患，展现出极高的项目成熟度。
2. **核心需求向上层业务场景延伸**：在 AReaL 和 ROLL 等项目的社区讨论中，开发者不再单纯询问如何配置超参，而是直接抛出“如何进行 SWE 多轮环境交互”的高级需求，反映出 RL 开源社区整体应用水平的跃升。
3. **特定领域的沉淀与静默**：通用经典 RL 库（如 CleanRL、Stable Baselines3、Tianshou）在过去 24 小时内零活动，这反映出当前开源社区的研发资源与热度已呈现出向 LLM/Agent 基建极度倾斜的非对称态势。

## 值得关注的趋势信号
1. **静默错误的零容忍**：RL 训练链路正在告别“能跑就行”的时代。无论是 TRL 拒绝静默丢弃 Reward Margin，还是 verl 重构容错机制让 Agent Rollout “快速失败”，均表明工业界对数据对齐和训练确定性的要求正在严苛化。
2. **Agentic RL 催生专用运行时**：为支持 SWE 等复杂长时任务，RL 框架正在演变为“操作系统”。例如 AReaL 引入了会话级隔离的 `agent_service` 网关，说明未来 RL 框架的标准配置将包含外挂环境沙箱与专用 API 网关。
3. **策略能力验证的前置化**：`rl_games` 提议的 `capability_manifest` 释放了一个强烈信号：随着 RL 模型逐渐走向物理机器人和边缘设备，模型将不再只是单纯的权重张量，而是自带安全边界和运动意图说明的可验证组合资产。这将为后续的 Agent 编排与调度提供基础信任保障。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 生态日报 (2026-06-08)

## 1. 今日速览
过去 24 小时，[alibaba/ROLL](https://github.com/alibaba/ROLL) 仓库整体保持平稳。无新版本发布及 Pull Request 更新。社区动态集中在应用场景拓展的探讨上，新增 1 条关于多轮智能体任务训练的 Issue 咨询。

---

## 2. 版本发布
**无新版本发布**。主分支当前仍聚焦于稳定性的迭代。

---

## 3. 重点 Issues
- **[#458 [OPEN] 请求增加 SWE（智能体软件工程）任务的训练示例](https://github.com/alibaba/ROLL/issues/458)**
  - **背景与诉求**：开发者 `dipta007` 发起提问，寻求在 ROLL 框架下使用 GRPO 算法训练多轮 SWE-style 任务（如 SWE-bench / SWE-Gym）的 Recipe。
  - **技术关注点**：
    1. **多轮 Agentic Rollouts**：如何集成带有工具调用（如 Shell 执行、文件编辑、运行测试）的多轮交互。
    2. **环境与奖励机制**：如何将测试通过率等环境反馈正确接入 Reward 机制。
    3. **长上下文处理**：针对 SWE 任务的长轨迹和超大上下文环境的工程配置。
  - **分析**：该 Issue 凸显了 ROLL 社区正尝试将框架的应用边界从传统的单轮对齐拓展至更复杂的工程类 Agent 强化学习场景，对框架的长上下文处理和环境交互接口提出了更高的要求。

---

## 4. 关键 PR 进展
过去 24 小时内**无 PR 更新**。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
当前大模型强化学习正经历从“单轮对话优化”向“复杂智能体任务优化”的范式转移。从今日的 Issue #458 可以看出，开发者正在积极寻找能够支持**多轮交互、工具调用以及长上下文轨迹**的底层 RL 基础设施。

[alibaba/ROLL](https://github.com/alibaba/ROLL) 作为专注于 LLM 强化学习的开源框架，其架构设计能够承接社区对于 SWE-bench 等 Agentic RL 复杂场景的探索需求。随着这类复杂工程任务和环境反馈机制被不断讨论与整合，ROLL 有望在 LLM for Code 与 Multi-turn RL 的开源生态中占据重要的一席之地，值得 RL 研究员和工程团队持续跟进。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL 开源生态日报：slime 项目跟踪 (2026-06-08)

## 1. 今日速览
过去 24 小时，THUDM/slime 仓库活跃度保持平稳。社区聚焦于前沿大模型（Qwen3/Qwen3.5）在 RL 训练框架中的兼容性与工程适配。无新版本发布，新增 1 条 Issue 讨论（工具调用解析错误）及 1 条 PR（新增 Qwen3.5-9B 异步训练示例）。

- **Issues 更新**: 1 条
- **PRs 更新**: 1 条
- **Releases**: 0 个

---

## 2. 版本发布
**无最新版本发布。**

---

## 3. 重点 Issues
- **[#2019] [Question] Unsupported tool_call_parser: qwen3**
  - **作者**: zqxie77
  - **状态**: OPEN
  - **链接**: [THUDM/slime Issue #2019](https://github.com/THUDM/slime/issues/2019)
  - **摘要**: 开发者在调用 Agent 工具解析时遭遇报错（`openai_tool_adapter.py` 与 `generate_with_search.py` 抛出 `Unsupported tool_call_parser: qwen3`）。该问题凸显了 slime 框架在整合最新开源模型（如 Qwen3）的 function calling / tool calling 协议时，底层解析器的适配存在滞后，值得进行 RL Agent 训练的开发者关注。

---

## 4. 关键 PR 进展
- **[#2030] [examples]: add qwen3.5-9b model config and fully_async example**
  - **作者**: demouo
  - **状态**: OPEN
  - **链接**: [THUDM/slime PR #2030](https://github.com/THUDM/slime/pull/2030)
  - **摘要**: 社区贡献了针对 Qwen3.5-9B 模型的具体配置文件（`scripts/models/qwen3.5-9B.sh`），并提供了一个基于单节点 8 卡 GPU 环境的全异步训练示例（`examples/fully_async/run-qwen3.5-9B-fully_async.sh`）。该 PR 显著降低了研究者在 slime 框架中对 9B 级别基座模型开展完全异步 RL 训练的工程门槛。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟 SOTA 基座模型迭代**: 从近期的 Issue 和 PR 可以看出，slime 在积极适配最新的主流开源大模型（如 Qwen3、Qwen3.5）。在 RLHF/RLAIF 生态中，对主流基座模型 Tool Use 和 Function Calling 能力的无缝支持是框架生命力的核心。
2. **探索高效异步训练机制**: PR #2030 引入的 `fully_async`（全异步）示例，表明 slime 在底层工程上致力于优化强化学习中的 Actor-Learner 交互延迟。这种高并发、低等待的异步架构设计，对于大规模 LLM 后训练阶段的算力榨取和吞吐量提升具有直接的现实价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-06-08）：

# AReaL RL 日报摘要 (2026-06-08)

## 1. 今日速览
过去 24 小时内，AReaL 项目保持活跃的开发势头，无新版本发布。社区共处理了 4 条 Issue（包含 3 条因 stale 机制关闭的历史议题，以及 1 条新议题），并推进了 3 个关键 Pull Requests。当前阶段，项目核心焦点集中在**大规模训练的显存优化**、**智能体运行时基础设施的扩展**以及**高级注意力机制的实验性支持**。

## 2. 版本发布
- **最新 Releases**: 无 

## 3. 重点 Issues
- **[Question] 关于 SWE（智能体软件工程）任务的训练示例探讨** 
  - **概述**: 社区开发者对使用 AReaL 进行 SWE-bench / SWE-Gym 等多轮智能体任务的 GRPO 训练表现出强烈需求。该议题寻求如何在 AReaL 中配置多轮工具调用、将测试通过率转化为奖励信号，以及处理长轨迹上下文的最佳实践。
  - **链接**: [#1394](https://github.com/areal-project/AReaL/issues/1394)
- **历史遗留积压清理**:
  - 3 个旧议题被标记为 `[stale]` 并自动关闭，涉及 Megatron 集成库向 `megatron-bridge` 的迁移（[#1260](https://github.com/areal-project/AReaL/issues/1260)）、沙箱后端与公共命名空间的解耦（[#1283](https://github.com/areal-project/AReaL/issues/1283)），以及 Online 模式下 `group_size > 1` 时的分组错误（[#1304](https://github.com/areal-project/AReaL/issues/1304)）。

## 4. 关键 PR 进展
- **[feat] 禁用 Megatron 梯度缓冲区 CPU 备份以节省主机内存**
  - **概述**: 针对 Colocated Training（混合部署训练）场景，引入了 `disable_grad_buffers_cpu_backup` 配置项。由于梯度缓冲区在每个训练步长都会重新计算，该 PR 跳过了卸载过程中的 CPU 备份环节。实测可节省约 5.9GB 的 Host 内存，对突破大规模训练的内存瓶颈极具意义。
  - **链接**: [#1393](https://github.com/areal-project/AReaL/pull/1393)
- **[feat(agent_service)] 引入 OpenClaw 会话级智能体运行时**
  - **概述**: 集成 `OpenClaw` 作为新的 `agent_service` 运行时。该实现为每个 RL 会话派生一个独立的网关子进程，并绑定专用的 LLM API 密钥（`sk-sess-*`）。这确保了强化学习过程中多轮交互 Episode 的物理隔离与状态追踪，是完善 RL Agent 基础设施的关键一步。
  - **链接**: [#1383](https://github.com/areal-project/AReaL/pull/1383)
- **[feat(experimental)] 启用面向 Archon DP 的 DTA (Dynamic Tree Attention) 训练**
  - **概述**: 引入了实验性的 Dynamic Tree Attention 路径，用于 Archon 数据并行训练。该特性支持具有共享前缀的 Rollout 轨迹进行分块反向传播，在处理复杂树状搜索和推理轨迹时，能大幅提升显存利用率和计算效率。
  - **链接**: [#1391](https://github.com/areal-project/AReaL/pull/1391)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 Post-training 底层内存瓶颈**: PR #1393 展示了团队在底层工程上的极致追求。通过细粒度优化 ZeRO/Megatron 卸载逻辑，节省关键的 Host 内存，这是支撑千亿级模型 RLHF/GPRO 的硬核基础。
2. **向 Agent RL 架构无缝演进**: 从 Issue #1394 的需求到 PR #1383 的落地可以看出，AReaL 正在从传统的“单轮偏好优化”框架，迅速演进为支持多轮工具调用、环境隔离的**智能体强化学习**基础设施，精准契合了当前 LLM 范式向 SWE/Agentic 任务转移的趋势。
3. **前沿训练策略的快速响应**: 实验性引入 DTA（动态树注意力）以支持共享前缀的分块反向传播，表明项目在跟进 GRPO、Tree-based RL 等最新算法架构方面保持极高的敏锐度，能够为前沿 RL 研究提供核心的工程底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Transformer Reinforcement Learning) RL 日报摘要
**日期**: 2026-06-08 | **项目**: [huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
过去 24 小时内，TRL 仓库保持高频迭代，无新版本发布。社区共更新了 **5 个 Issues** 和 **24 个 Pull Requests**。今日的核心焦点集中在：核心算法 GRPO 的演进与变体实现、奖励模型数据处理的潜在静默错误修复、VLM（视觉语言模型）对齐训练的深度支持，以及全局文档与测试的规范化清理。

### 2. 版本发布
**无** (最新 Releases 为空)

### 3. 重点 Issues
- **[CLOSED] 奖励模型训练中的 Margin 静默丢失** ([#5539](https://github.com/huggingface/trl/issues/5539))
  `DataCollatorForRewardModelingDataset` 仅通过检查 `examples[0]` 来判断是否包含 `margin`。这会导致在数据打乱后，如果首条数据不含 margin，后续合法的 margin 数据会被静默丢弃，造成难以察觉的数据泄漏或训练不稳定。此 Issue 已通过相关 PR 修复。
- **[CLOSED] GOLD Trainer 的跨分词器对齐问题** ([#4393](https://github.com/huggingface/trl/issues/4393))
  在处理基于 BPE 的多字节字符（如中文）时，现有的字符串拼接对齐逻辑会导致解码错误。需要底层基于字节偏移的重新实现对齐机制。
- **[OPEN] DPPO (Divergence Proximal Policy Optimization) 提案** ([#4998](https://github.com/huggingface/trl/issues/4998))
  开发者指出 GRPO 在长时训练中容易遭遇模型崩溃或奖励饱和，提议引入 DPPO 算法作为改进方案。此提案目前已在 PR 阶段进行实现。
- **[OPEN] 默认配置导致 CPU 测试崩溃** ([#3616](https://github.com/huggingface/trl/issues/3616))
  近期代码将 `bf16=True` 设为默认值，导致在不支持 bf16 的 CPU 或老旧 GPU 上直接运行测试用例失败，需结合底层设备类型动态配置。

### 4. 关键 PR 进展
**算法与核心逻辑**
- **集成 DPPO 到 GRPOTrainer** ([#5956](https://github.com/huggingface/trl/pull/5956))：响应 Issue #4998，在现有的 GRPO 配置和训练器中加入了 DPPO 支持，旨在解决 GRPO 长期运行的模型崩溃痛点。
- **重构自蒸馏训练器与 SDPO 损失函数** ([#5883](https://github.com/huggingface/trl/pull/5883))：将 SDPO 的损失计算重构为凸组合形式 `(1 - w)·policy + w·distillation`，以严格对齐论文的 4.5 节。
- **修复混合 Reward Margins 导致的静默报错** ([#5967](https://github.com/huggingface/trl/pull/5967) / [#5924](https://github.com/huggingface/trl/pull/5924))：针对 Issue #5539，在 Collator 决定是否传递 margin 前检查整个 batch。若发现混合数据（部分有 margin，部分无），直接抛出清晰的 `ValueError`，拒绝静默丢弃数据。
- **修复 fused MoE 的 PEFT 适配器 Bug** ([#5292](https://github.com/huggingface/trl/pull/5292))：当 LoRA 配置使用 `target_parameters`（Transformers 5.x 融合 MoE 专家层所需）时，跳过引用适配器的错误创建。
- **RLOO 与 GRPO 中 KL 散度作用的文档说明** ([#5966](https://github.com/huggingface/trl/pull/5966))：明确补充了 KL 散度在两者中的本质差异（RLOO 中仅作 reward shaping，而 GRPO 中直接影响梯度）。

**多模态 (VLM) 支持**
- **GOLD Trainer VLM 支持** ([#5969](https://github.com/huggingface/trl/pull/5969))：基于底层重构，为 GOLDTrainer 添加视觉语言模型支持，允许在同系 VLM 之间使用 JSD 损失进行蒸馏。
- **修复 VLM 图像 Token 截断报错** ([#5927](https://github.com/huggingface/trl/pull/5927))：解决了在设置 `max_length` 时，Tokenizer 截断图像占位符导致与图像处理器特征长度不匹配的问题。
- **Llava-Next 训练模板支持** ([#5959](https://github.com/huggingface/trl/pull/5959))：加入了对 Llava-Next 的训练 Chat Template 支持。
- **GOLD 跨分词器字节对齐** ([#5885](https://github.com/huggingface/trl/pull/5885))：修复 Issue #4393，引入字节偏移对齐机制，彻底解决多字节字符（如中文）的对齐 Bug。

**基础设施、安全与测试**
- **vLLM 推理服务安全加固** ([#5965](https://github.com/huggingface/trl/pull/5965))：将 `trl vllm-serve` 默认绑定至 `127.0.0.1`，增加 `--api-key` 鉴权，并拒绝无鉴权的非回环地址绑定，防止 RL 训练时发生未授权调用。
- **统一核心算法测试标准** ([#5963](https://github.com/huggingface/trl/pull/5963))：为 SFT, DPO, GRPO, RLOO 统一添加了维度一致的测试集（模型架构 sweep 与数据格式 sweep），提升后续发版的代码健壮性。
- **全面修复文档死链与代码示例错误** ([#5971](https://github.com/huggingface/trl/pull/5971), [#5970](https://github.com/huggingface/trl/pull/5970), [#5972](https://github.com/huggingface/trl/pull/5972), [#5961](https://github.com/huggingface/trl/pull/5961))：清理了包括 RLOO 示例语法错误、MiniLLM GKD 文档 404、以及 DPO 等模块迁移后的路径失效问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直面 GRPO 痛点与算法演进**：随着 GRPO 在 LLM 对齐中的广泛应用，其长期训练的模型崩溃问题逐渐显现。TRL 社区正在积极响应（如引入 DPPO #5956），这使 TRL 始终处于 LLM 对齐算法探索的最前沿。
2. **从纯文本迈向多模态对齐 (VLM)**：今日的 PR 密集展示了 TRL 正在将原本成熟的纯文本 RLHF 流程（如 Reward Modeling, DPO, GOLD 等）严谨地下沉并适配至视觉语言模型，解决了多模态特有的 Token 截断和跨分词器对齐等硬核工程挑战。
3. **工业级细节打磨**：修复了如 Margin 静默丢失 ([#5539](https://github.com/huggingface/trl/issues/5539))、MoE 参数目标适配、vLLM 部署安全漏洞等极其容易被忽视但会引发生产级事故的底层 Bug。项目正从“算法验证工具”向“高可靠的工业级对齐基建”迅速蜕变。

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

以下是为您生成的 verl 项目 2026-06-08 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。项目新增/更新 5 条 Issues 和 9 条 Pull Requests，暂无新版本发布。核心动态集中在 **Qwen3.5 系列及视觉语言模型（VLM）的适配与排错**、**Megatron-LM 后端的深度重构与功能扩展**，以及**异步强化学习训练架构的演进**。

### 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

### 3. 重点 Issues
社区当前重点关注多模态模型训练效率以及 Agentic RL 场景的落地：
- **[性能/排错] Qwen3-VL GRPO+LoRA 训练极其缓慢**：开发者反馈在 `torch 2.9 + vllm 0.15.1` 环境下，对 `qwen3-vl-8b` 进行 GRPO+LoRA 训练时，单步耗时超 2 小时，疑似序列长度极度不平衡或显存分配异常导致。([verl-project/verl Issue #5365](https://github.com/verl-project/verl/issues/5365))
- **[Bug] Qwen3.5 训练引发显存非法访问**：在结合 vLLM 生成与 FSDP2 训练 `qwen3.5 9b/27b` 时触发 Illegal memory access 错误，属于典型的框架底层张量并行/数据并行显存管理冲突。([verl-project/verl Issue #6549](https://github.com/verl-project/verl/issues/6549))
- **[需求/架构] SWE Agentic 多轮训练方案咨询**：社区开发者正在寻求基于 verl 实现 SWE-bench / SWE-Gym 等多轮 Agentic 任务的 GRPO 训练范例，涉及长上下文处理及外部环境 Reward 接入（如基于测试用例通过率的奖励）。([verl-project/verl Issue #6646](https://github.com/verl-project/verl/issues/6646))
- **[环境/易用性] Triton 版本依赖问题**：开发者在使用 GRPO 训练时遭遇 Triton 兼容性及 Config 解析报错。([verl-project/verl Issue #6645](https://github.com/verl-project/verl/issues/6645))

### 4. 关键 PR 进展
今日核心代码提交聚焦于底层大规模训练框架（Megatron）的支持、安全性修复及显存优化：
- **[Megatron] DeepSeek V4 GRPO 支持**：引入基于 Megatron-Bridge 的 DeepSeek V4 Flash GRPO 训练支持，包括 vLLM rollout 适配及 FP8/MXFP4 权重转换处理，标志着 verl 对最新 MoE 模型的快速响应。([verl-project/verl PR #6473](https://github.com/verl-project/verl/pull/6473))
- **[Trainer] 修复 Agentic Rollout 缺失引发的静默错误**：重构了 `main_ppo_sync` 的容错机制。当 Agent-loop 批处理未能成功完成 rollout 时，系统将由之前的“静默继续”改为“快速失败”，保证了复杂环境下强化学习数据的严格对齐。([verl-project/verl PR #6641](https://github.com/verl-project/verl/pull/6641))
- **[架构演进] 全异步策略引入 TransferQueue**：基于 Ray 的 `MessageQueue` 迁移至 `TransferQueue (TQ)`，旨在提升异步策略（fully_async_policy）下数据的传输效率与系统吞吐。([verl-project/verl PR #6628](https://github.com/verl-project/verl/pull/6628))
- **[安全性] 修复 Qwen3 Tool Parser 任意代码执行漏洞**：修复了 `Qwen3XMLToolParser` 在处理非基础类型参数（如 array）时调用 `eval(model_output)` 导致的潜在任意代码执行（ACE）安全漏洞。([verl-project/verl PR #6542](https://github.com/verl-project/verl/pull/6542))
- **[FSDP/显存优化] 长序列 Top-K Loss 分块计算**：针对长上下文（64K+ tokens）蒸馏场景，重构了 `log_softmax + gather` 模式，避免实例化完整 `[N, V]` Tensor，显著缓解 OOM 问题（可节省约 ~28 GB 显存）。([verl-project/verl PR #6593](https://github.com/verl-project/verl/pull/6593))
- **[Megatron] 其他基础设施升级**：包括 Qwen3.5 LoRA 与 MTP（Multi-token Prediction）支持([verl-project/verl PR #5599](https://github.com/verl-project/verl/pull/5599))、兼容最新 Megatron-LM mcore 补丁([verl-project/verl PR #6648](https://github.com/verl-project/verl/pull/6648))，以及修复官方 MoE routing replay 参数名([verl-project/verl PR #6647](https://github.com/verl-project/verl/pull/6647))。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿模型与算法的极速跟进**：无论是今日曝光的 DeepSeek V4 GRPO、还是 Qwen3.5 的 LoRA/MTP 适配，verl 正在将 Post-training 的迭代周期压缩至极致，为 RL 算法在最新一代 MoE 架构上的应用铺平道路。
2. **从单轮对齐向复杂 Agentic RL 演进**：从 PR #6641 的 Agent-loop 容错处理到 Issue #6646 关于 SWE-bench 多轮工具调用环境的讨论，verl 的边界正在从传统的“指令跟随/对齐”向“软件工程自动化”等复杂多轮决策场景拓展。
3. **直面 LLM 底层工程痛点**：通过提供高效的 Megatron 桥接解决超大集群并行问题，并利用分块计算等技巧攻克极长上下文下的显存壁垒，该库展现了顶级的工程兜底能力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报摘要：rl_games
**日期**: 2026-06-08 | **项目**: [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. 今日速览
过去 24 小时内，`rl_games` 仓库活动平稳，无新版本发布。项目共产生 1 条 Issue 更新和 1 条 PR 更新。社区动态主要集中在扩展训练策略的部署能力边界，探讨如何将安全性与能力声明嵌入模型检查点中。

### 2. 版本发布
- **最新 Releases**: 无新增发布。

### 3. 重点 Issues
- **[#352 [OPEN] URML (open robot intent language): could a trained policy carry its capability envelope? a boundary check](https://github.com/Denys88/rl_games/issues/352)**
  - **作者**: idoco2003
  - **摘要**: 社区开发者提议将 [URML](https://urml.dev)（一种 Apache-2.0 协议的机器人意图描述语言）与 `rl_games` 结合。该 Issue 探讨能否在导出的强化学习策略中直接携带“能力清单”和“安全边界”信息。由于大量基于 Isaac Gym 的运动控制与操作策略由 `rl_games` 训练，若在模型分发阶段加入此机制，将极大提升策略在下游部署时的安全校验能力与意图调度准确性。

### 4. 关键 PR 进展
- **[#353 [OPEN] Add optional capability_manifest passthrough to checkpoints](https://github.com/Denys88/rl_games/pull/353)**
  - **作者**: idoco2003
  - **摘要**: 作为 Issue #352 的代码实现。该 PR 在 `rl_games` 的模型保存流程中引入了可选的 `capability_manifest` 透传机制。当训练配置（YAML/JSON）的顶层包含该字段时，代码会将其原封不动地写入 A2C/PPO 或 SAC 算法的检查点字典（`checkpoint dict`）中。此改动不对核心训练逻辑造成侵入，且不干预 manifest 的内部数据 schema，提供了一种轻量级的策略元数据绑定方案。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Isaac Gym/Isaac Sim 生态中最核心的高性能 RL 底层算法库之一，`rl_games` 的演进趋势直接反映了具身智能落地的工程痛点。
当前的 RL 生态正向“Sim-to-Real（虚实迁移）”与“模型即服务”转型，而 **[#352](https://github.com/Denys88/rl_games/issues/352)** 和 **[#353](https://github.com/Denys88/rl_games/pull/353)** 展示了前沿开发者的最新共识：**强化学习模型不再仅仅是孤立的权重文件，而是需要自带安全校验和运动意图边界的“组合资产”**。`rl_games` 正在作为底层基础设施，尝试承接这种从纯算法训练到安全部署的业务流闭环，这对于关注机器人规模化部署与 RL 工程化的研发团队具有极高的参考价值。

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