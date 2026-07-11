# RL 开源生态日报 2026-07-12

> 生成时间: 2026-07-11 22:13 UTC | 覆盖项目: 15 个

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
当前开源强化学习（RL）生态呈现明显的分层与分化态势，逐步从早期单一的算法验证，演进为面向大模型时代的工业级基建。
- **应用与算法层**：以 TRL 和 Open Instruct 为代表，重心已从基础的 PPO/DPO 转向 Agentic RL（智能体强化学习）、RLVR（可验证奖励强化学习）以及强化蒸馏的结合。
- **重型训练引擎层**：verl 和 AReaL 承担了底层算力压榨的重任，重点攻坚异构硬件适配、分布式通信带宽瓶颈及 PD（预填充-解码）分离架构。
- **环境与接口协议层**：以 Gymnasium 和 PettingZoo 为基石，正在深化多智能体（MARL）接口的大一统，并向细粒度奖励审计与防作弊（Reward Hacking）方向拓展。
- **无活动项目（CleanRL, OpenRLHF, Stable Baselines3, Tianshou, torchtune 等）**：过去 24 小时处于代码静默期，这通常意味着这些相对成熟的算法库或正处于版本稳定期，或正在进行大版本的后台重构。

## 各项目活跃度对比
今日的社区开发精力高度集中于大模型 RL 训练框架与底层环境协议的维护。以下是具有实质性代码活动的项目对比：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 8 | 16 | 0 | 蒸馏算法大版本迭代，Agentic RL 与沙盒环境落地 |
| **verl** | 4 | 11 | 0 | 攻坚全异步 NCCL 死锁，推进 FSDP2/MoE 与极致通信优化 |
| **Gymnasium** | 2 | 9 | 0 | 深度修复向量化环境内存与溢出 Bug，引入 Reward Hacking 审计 |
| **AReaL** | 1 | 8 | 0 | 探索 PD 分离架构提升 Rollout 吞吐，修复底层 PPO Loss 聚合 |
| **PettingZoo** | 1 | 5 | 0 | 推进 API 全面向 Gymnasium 靠拢，丰富多智能体基线测试 |
| **Open Instruct** | 0 | 2 | 0 | 扩展 RLVR 至结构化逻辑推理领域 |
| **slime** | 0 | 1 | 0 | 修复异步并发 Rollout 中的单例参数污染问题 |

## 共同关注的研究与工程方向
尽管各项目定位不同，但近期的迭代暴露出整个 RL 生态正面临相似的底层痛点与前沿机遇：

**研究侧信号：**
1. **Agentic RL 与多轮工具调用成为绝对核心**：无论是 TRL 对 VLM 多轮 Tool Calling 的修复与沙盒环境的引入，还是 AReaL 对 OpenAI tool_calls 参数格式的对齐，都表明 RL 的训练范式已从“单轮偏好对齐”深度转向“具备环境交互能力的智能体构建”。
2. **RLVR 边界拓宽与 Reward Hacking 防御**：Open Instruct 引入 SLR-Bench 将 RL 推向结构化逻辑推理；同时，Gymnasium 发起关于 Reward-audit 监控 wrappers 的提案，直击当前大模型 RLHF 时代奖励作弊与分布崩溃的痛点。
3. **强化学习与知识蒸馏深度融合**：TRL 在 GOLD/GKD/DOPD 等蒸馏算法上的高频迭代表明，“强化探索+同族模型蒸馏”已成为当前业界压缩和训练高质量小模型的标准组合拳。

**工程/基础设施侧信号：**
1. **向通信带宽与 GPU 算力极限要吞吐量**：针对大模型 RL 中 Actor-Rollout 频繁交互的瓶颈，verl 推出了基于 NCCL 的增量权重同步（削减 99% 冗余流量），AReaL 则大力推进 Prefill-Decode (PD) 分离架构，均旨在解决 Rollout 阶段的显存与算力闲置问题。
2. **苛刻的数值精度与极底层的 Bug 修复**：随着模型规模和序列长度的增加，隐性数值错误成为致命威胁。AReaL 追踪了 `sdpa` 处理变长序列时的静默 `logp` 错误，verl 发现了 LoRA 不触发 EOS 的问题，Gymnasium 则修复了跨进程 `Text` 空间哈希随机化导致的非确定性问题，这些都对 RL 算法的可复现性构成了直接基础。

## 差异化定位分析
- **TRL（敏捷与前沿算法先锋）**：对新架构（如 Diffusion LLM、Qwen3.5）和新算法的响应速度极快。它是研究人员的最佳“试验田”，重点在于如何快速把前沿论文（如各种蒸馏法）变成开箱即用的 Trainer。
- **verl & AReaL（重型工业级基建底座）**：两者的定位高度相似，都是面向百亿/千亿参数规模的工业级训练平台。差异在于 verl 极其注重与最新大模型（DeepSeek V4、Qwen3-MoE）及 FSDP2 的深度绑定；而 AReaL 则在底层数学契约（如显式的 Loss 聚合模式）和国产化硬件（华为昇腾 NPU）适配上走得更深。
- **Gymnasium & PettingZoo（标准协议制定者）**：跳出大模型框架的 specifics，专注于 RL 生态的底层“宪法”。PettingZoo 正在进行彻底的接口大一统（向 Gymnasium 的 `make` 靠拢），旨在抹平单智能体与多智能体开发的壁垒，巩固其作为环境接口事实标准的地位。

## 社区热度与成熟度
- **核心开发者的强驱动特征明显**：Gymnasium 今日爆发的多个底层修复主要来自开发者 `teddytennant`；Open Instruct 的关键 I/O 优化由著名系统专家 TimDettmers 推进。这表明在这些高技术门槛的基础设施库中，核心维护者的工程素养直接决定了项目的工程成熟度下限。
- **大模型 RL 框架处于高强度的“战时维护”状态**：TRL 和 verl 每天维持着高数量的 Issue 和 PR 交互。由于底层架构（如 vLLM、PyTorch FSDP2）和新模型架构的快速迭代，这些框架的维护者正面临巨大的兼容性压力，Bug 修复（尤其是多模态、分布式、异构环境下的边缘 Bug）占据了大量精力。
- **规范的工程审查与安全意识觉醒**：Gymnasium 引入严格 Mypy 类型检查并移除对纯 CPU 环境不友好的强依赖；TRL 添加了详尽的 `SECURITY.md` 策略。这标志着热门 RL 项目正在从早期的“脚本合集”快速蜕变，具备了成熟的社区治理和安全合规意识。

## 值得关注的趋势信号
1. **分布式训练框架的“通信稀疏化”革命**：verl 基于权重更新稀疏性的增量同步 PR 极具启发性，预示着未来大规模 RLHF 框架的核心竞争力将不再是算法实现，而是对底层分布式通信的极致压榨。
2. **从“好为人师”到“工具使用者”**：RL 训练流程中开始内嵌沙盒执行环境（TRL SandboxEnvironment），以及围绕工具调用闭环的修复，标志着模型对齐目标彻底从“遵循指令”转向了“在环境中解决问题”。
3. **国产芯片与异构算力加速融入主流 RL 生态**：无论是 verl 在 CI 集成 Ascend A2，还是 AReaL 更新 CANN/Ascend-v1.0.4 安装指南，都昭示着由大模型 RL 训练需求驱动的异构算力生态（非 Nvidia 体系）正在快速走向工程化与生产级。

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

** slime 项目 RL 生态日报 (2026-07-12) **

### 1. 今日速览
过去 24 小时内，slime 项目的整体动态趋于平稳，无新增 Issue、无新版本发布。核心活动集中在底层架构与代码逻辑的修复上，社区贡献者提交了 1 个关键 PR，主要针对异步生成（Async）过程中的状态管理和参数调度问题。

### 2. 版本发布
*   **今日无新版本发布**。项目目前仍处于现有版本的迭代维护与优化阶段。

### 3. 重点 Issues
*   **无**。过去 24 小时内未监测到新增或活跃的 Issue。

### 4. 关键 PR 进展
*   **#2196 [OPEN] fix(rollout): honor per-call args in generate_rollout_async (GenerateState caches first args)**
    *   **作者**: sdc17 | **创建/更新**: 2026-07-10
    *   **技术摘要**: 这是一个针对 Rollout（部署/交互）阶段的高价值修复。开发者发现 `generate_rollout_async(args, ...)` 函数在处理任务调度时未能正确接收和使用传入的实时 `args`。根本原因在于 `GenerateState` 使用了全局单例模式（`SingletonMeta`），导致其 `__init__` 方法在首次实例化后缓存了初始参数，忽略了后续不同请求传入的新参数。该 PR 意在修复这一状态管理缺陷，确保异步生成机制能够动态响应每次调用的独立配置。
    *   **链接**: [THUDM/slime PR #2196](https://github.com/THUDM/slime/pull/2196)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **底层工程细节决定 RL 上限**：在大规模强化学习（RLHF/RLAIF 等）中，高效的分布式 Rollout 是核心瓶颈。PR #2196 修复了多并发/异步场景下的单例参数污染问题。这种对底层调度和状态管理机制的严格把控，表明项目在追求算法前沿的同时，具备应对工业级并发调度 Bug 的工程成熟度。
*   **动态配置支持**：该修复确保了系统在处理不同批次数据或混合不同 Inference 请求时，能够正确传递和覆盖参数，这对于需要在线动态调整生成策略（如 temperature、max_tokens 等）的复杂 RL 训练循环至关重要。持续跟进此类基础架构的演进，有助于 RL 工程师构建更稳定、灵活的训练流水线。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-07-12)**

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **8 个 Pull Requests** 和 **1 个 Issue**，无新版本发布。今日核心动态集中在 **推理架构优化（PD 分离与 Bridge 适配）** 以及 **底层训练逻辑与 API 兼容性修复（PPO Loss 聚合与 OpenAI 接口对齐）**。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
* **[#1442](https://github.com/areal-project/AReaL/issues/1442) [bug, stale] [BUG] attn_impl=sdpa silently produces wrong logp with packed sequences on FSDP+HF backend**
  * **作者**: BaadenAyane (更新于 2026-07-11)
  * **摘要**: 在 FSDP + HuggingFace 后端下使用 `attn_impl=sdpa` 时，处理 packed sequences（变长序列打包）会产生静默的错误 `logp`（对数概率）计算结果。该问题可稳定复现，对基于对数概率更新的底层 RL 算法（如 PPO）具有极高的隐蔽破坏性，需引起社区重视。

### 4. 关键 PR 进展
今日的 PR 更新涵盖了从大模型架构适配到底层 Loss 计算的多个核心模块：

**推理与模型架构支持**
* **[#1364](https://github.com/areal-project/AReaL/pull/1364) [feat]: Support PD Disaggregation: DP=2(1P1D), TP=n**
  * **作者**: ZiyiTsang
  * **进展**: 推进 Prefill-Decode（预填充-解码）分离架构。将单一推理角色拆分为双专用角色，以解决自回归解码阶段的 GPU 算力闲置（Memory-bound）问题，大幅提升 RLHF 阶段的 Rollout 吞吐量。
* **[#1372](https://github.com/areal-project/AReaL/pull/1372) [feat]: add Bailing-MoE V2.5 megatron-bridge adapter**
  * **作者**: dingzhiqiang
  * **进展**: 为 Bailing-MoE V2.5 系列模型增加 NVIDIA `megatron-bridge` 适配器，实现与原有 `mbridge` 的双桥接支持，强化对混合专家模型（MoE）的训练兼容性。
* **[#1502](https://github.com/areal-project/AReaL/pull/1502) [docs]: update NPU installation guide for ascend-v1.0.4**
  * **作者**: Adiactive
  * **进展**: 更新华为昇腾 NPU 安装指南，对齐最新的 `ascend-v1.0.4` 分支与 CANN 版本，清理过期文档。

**RL 核心算法与 API 兼容性**
* **[#1443](https://github.com/areal-project/AReaL/pull/1443) [feat(ppo)]: support actor loss aggregation modes** (关联已关闭的 [#1417](https://github.com/areal-project/AReaL/pull/1417))
  * **作者**: EazyReal
  * **进展**: 引入显式的 `LossReduction` / `LossTerm` 契约，允许训练引擎的每个 Loss 项声明其返回的是局部均值还是分子，并规范张量归一化逻辑。这为大规模分布式 RLHF 中精确控制 Actor Loss 提供了更底层的支持。
* **[#1501](https://github.com/areal-project/AReaL/pull/1501) [fix(openai)]: keep tool-call arguments mapping-shaped** (关联已关闭的 [#1411](https://github.com/areal-project/AReaL/pull/1411))
  * **作者**: EazyReal
  * **进展**: 修复 HuggingFace chat templates 解析 `tool_calls` 失败的问题。确保 OpenAI API 格式中的 JSON 字符串参数（包含数组、标量等非对象类型）在转化为 Qwen3 Coder 等模型的输入时，保持映射兼容性。
* **[#1503](https://github.com/areal-project/AReaL/pull/1503) [feat(v2)]: add auditable InfBridge client traces**
  * **作者**: jszzr
  * **进展**: 新增可审计的异步推理追踪接口，记录 token 预算、终止原因及提交 ID，增强 Rollout 推理阶段的可观测性与调试能力。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在解决大模型强化学习落地中最棘手的“工程瓶颈”：
1. **直击推理算力痛点**：[#1364](https://github.com/areal-project/AReaL/pull/1364) 等 PR 表明项目正深度攻坚 PD 分离架构。在 RL 训练中，Rollout 阶段的低显存占用率是核心痛点，AReaL 的架构拆分能显著提升系统吞吐量（Token/s）。
2. **深水区的数值精度修复**：如 Issue [#1442](https://github.com/areal-project/AReaL/issues/1442) 中对 `sdpa` 下变长序列 `logp` 静默错误的追踪，说明项目对 RL 数学正确性要求极高（错误的 logp 会导致策略梯度失效）。
3. **极致的底层可控性**：[#1443](https://github.com/areal-project/AReaL/pull/1443) 重写了 Loss 聚合的底层 API 契约，表明 AReaL 正在为复杂的分布式训练（如 FSDP/Megatron 混合后端）提供硬核的工程抽象，而非简单的算法封装。
4. **广泛的硬件与模型生态**：支持华为 Ascend NPU（[#1502](https://github.com/areal-project/AReaL/pull/1502)）以及前沿的 MoE 架构（[#1372](https://github.com/areal-project/AReaL/pull/1372)），展现出跨平台、跨架构的极强的生态扩展性。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-12 TRL（Transformer Reinforcement Learning）开源项目 RL 日报摘要。

### 1. 今日速览
- **活跃度**：过去 24 小时内，TRL 仓库共有 8 条 Issue 更新，16 条 PR 更新。
- **发布动态**：今日无新版本发布（0 个 Release）。
- **核心趋势**：开发重心主要集中在 **GOLD/Distillation 蒸馏训练器的完善**、**多模态（VLM）在多轮 Tool Calling 中的 Bug 修复**，以及**全面适配流式可迭代数据集（IterableDataset）**。

### 2. 版本发布
无。

### 3. 重点 Issues
今日的 Issue 暴露出 TRL 在处理多模态数据和特定大模型（如 Qwen3.5、Diffusion LLM）时的边缘场景 Bug：

- **VLM 多轮工具调用崩溃**：在 GRPO 训练中，当外部工具返回图像给 Qwen3.5-2B VLM 时，触发 `wrong pixel_values slice` 错误。当前多轮工具调用循环对多模态数据的切片处理存在硬伤。（[Issue #6274](https://github.com/huggingface/trl/issues/6274)）
- **vLLM 返回 NaN 导致 GRPO 崩溃**：在 `vllm_mode="collocate"` 下，vLLM 采样返回 NaN token logprob 时，由于空值被直接传入 `torch.tensor()` 导致训练崩溃。（[Issue #6166](https://github.com/huggingface/trl/issues/6166)）
- **Qwen3.5 聊天模板冲突**：TRL 强制为 Qwen3.5 模型打上的“前缀保留”训练模板导致关键训练指令解析失败，影响模型正常收敛。（[Issue #6361](https://github.com/huggingface/trl/issues/6361)）
- **Diffusion LLM (dLLM) 兼容性报错**：GRPO 在开启 DeepSpeed Zero-3 时，默认使用 `AutoModelForCausalLM` 创建参考模型，导致类似 DiffuCoder 的扩散语言模型无法兼容。（[Issue #3742](https://github.com/huggingface/trl/issues/3742)）

### 4. 关键 PR 进展
今日的 PR 包含大量关于数据流和蒸馏算法（GOLD）的核心代码提交：

**🌟 算法与功能增强**
- **GOLD 训练器大更新**：
  - 为 `GOLDTrainer` 增加多轮工具调用支持，专注于同家族模型（共享 Tokenizer）的强化蒸馏。（[PR #6328](https://github.com/huggingface/trl/pull/6328)）
  - 实现滞后已久的 `seq_kd`（序列级知识蒸馏）配置项，完善 On-policy 生成逻辑。（[PR #5725](https://github.com/huggingface/trl/pull/5725)）
  - 修复 GOLD 和 GKD 训练中 `pad_token_id == eos_token_id` 时，结束符被错误 Mask 导致学生模型学不到终止逻辑的严重 Bug。（[PR #6357](https://github.com/huggingface/trl/pull/6357)）
- **引入沙盒环境模块**：新增 `trl.environments` 子模块，首个 `SandboxEnvironment` 环境落地，为 RL 提供开箱即用的沙盒支持。（[PR #6358](https://github.com/huggingface/trl/pull/6358)）
- **实验性前沿算法**：在已有的 SDFTTrainer 中直接加入 DOPD（双轨在策略蒸馏）的优势路由机制。（[PR #6237](https://github.com/huggingface/trl/pull/6237)）

**🛠 基础设施与数据集兼容**
- **流式数据集全面适配**：Albertvillanova 集中修复了多个训练器（GRPO, RLOO, KTO 等）不支持 `IterableDataset` 的问题，确保 KL 散度计算也能在流式数据上高效运行。（[PR #6351](https://github.com/huggingface/trl/pull/6351), [PR #6338](https://github.com/huggingface/trl/pull/6338), [PR #6324](https://github.com/huggingface/trl/pull/6324)）
- **安全合规**：为仓库添加了详尽的 `SECURITY.md` 漏洞报告与响应策略。（[PR #6362](https://github.com/huggingface/trl/pull/6362)）

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **向 Agentic RL 与多模态深水区迈进**：从今日修复的 VLM Tool Calling Bug 和新增的 `SandboxEnvironment` 可以看出，TRL 的重心已从基础的 PPO/DPO 偏好对齐，大幅转向**具备环境交互能力的 Agent 强化学习 (Agentic RL)** 和多模态场景。
2. **紧跟前沿模型范式**：无论是第一时间适配类似 Qwen3.5 的新一代聊天模板，还是兼容 Diffusion LLM (dLLM) 等非自回归模型，TRL 始终保持对大模型底层架构演进的极高敏感度。
3. **从对齐走向蒸馏**：GOLD、GKD 以及最新的 DOPD 蒸馏算法的高频迭代，表明业界正大量采用“强化学习 + 知识蒸馏”的组合拳来进行模型压缩。TRL 提供了目前最完整的蒸馏训练生态，是研究高质量小模型不可或缺的基座工具。

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

以下是为您生成的 verl 项目 2026-07-12 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，verl 项目代码库保持高度活跃，共更新 **4 条 Issues** 和 **11 条 Pull Requests**。今日无新版本 Release。社区当前重心集中于**异步引擎的底层通信修复**（NCCL/Checkpoint）、**FSDP2 与 MoE 架构的兼容性**、以及**底层训练性能的极致优化**（如增量权重同步）。

### 2. 版本发布
* **无新版本发布**。（当前社区主要聚焦于核心主干的迭代与修复合并，部分用户已在探讨 v0.8.0 的本地部署）。

### 3. 重点 Issues
今日的 Issue 暴露了异步权重同步和新一代 MoE 模型训练中的部分边缘缺陷：

* **[#6967](https://github.com/volcengine/verl/issues/6967) [bug] [fully_async] 首个 NCCL checkpoint-engine 组初始化挂起**
  *状态*: OPEN | *作者*: chengcuiping
  *摘要*: 在 fully_async 模式下的首次权重同步阶段出现时序竞争，导致死锁。该问题可在无工具调用的单轮对话中复现，属于较底层的通信阻塞问题。
* **[#7016](https://github.com/volcengine/verl/issues/7016) [bug] [fsdp2] Qwen3-MoE actor backward 反向传播失败**
  *状态*: OPEN | *作者*: ChangyiYang
  *摘要*: Qwen3-30B-A3B 模型在 FSDP2 引擎下的首次 `update_actor` 反向传播必定失败（无论是否开启梯度检查点均报错），但 FSDP1 及 Dense 模型运行正常。属于 FSDP2 与 MoE 的特异性兼容问题。
* **[#6782](https://github.com/volcengine/verl/issues/6782) [bug] [fsdp, rollout] Qwen3.5-27B LoRA GRPO: vLLM 无法输出 EOS**
  *状态*: OPEN | *作者*: rongkunxue
  *摘要*: 在特定 rank/alpha 参数下（rank=64/alpha=128），LoRA 微调推理时 vLLM 始终无法触发 EOS（序列结束符），导致所有响应被直接截断。
* **[#7006](https://github.com/volcengine/verl/issues/7006) [Feature] 寻求 verl-0.8.0 完整环境 Dockerfile**
  *状态*: OPEN | *作者*: zyoohv
  *摘要*: 用户请求提供包含所有包和版本依赖的 Dockerfile，以在本地跑通基于 vLLM + Megatron 的 Qwen3.6 GRPO 算法。

### 4. 关键 PR 进展
今日的 PR 展现了 verl 在底层通信带宽优化和对最新大模型架构支持上的快速推进：

* **[#6974](https://github.com/volcengine/verl/pull/6974) [核心优化] 基于 NCCL 的增量权重同步**
  *状态*: OPEN | *作者*: ChangyiYang
  *摘要*: **重磅性能优化**。针对解耦 Rollout 路径，训练完成后不再广播全量参数，而是只广播发生变化的部分。由于 RL 更新在 BF16 下使 >99% 的权重字节保持不变，该 PR 将权重同步流量削减至稀疏率级别，大幅降低通信开销。
* **[#6473](https://github.com/volcengine/verl/pull/6473) [架构支持] Megatron 支持 DeepSeek V4 GRPO**
  *状态*: OPEN | *作者*: HollowMan6
  *摘要*: 增加 DeepSeek V4 Flash GRPO 支持，包含 FP8/MXFP4 权重传输处理及 Checkpoint 导出验证。
* **[#7013](https://github.com/volcengine/verl/pull/7013) [bugfix] 跨 Checkpoint 持久化 Adaptive KL 控制器状态**
  *状态*: OPEN | *作者*: Epochex
  *摘要*: 修复了 PPO 训练中自适应 KL 系数未存入 Checkpoint 导致的断点续训后系数被重置的问题，保证了续训练.reward 计算的一致性。
* **[#7014](https://github.com/volcengine/verl/pull/7014) [bugfix] 修复 FSDP LoRA 权重同步延迟导致的状态过期**
  *状态*: OPEN | *作者*: rongkunxue
  *摘要*: 修复了当 `merge=True` 时，`FSDPEngine` 在 `merged_lora_context()` 外部才消费状态字典迭代器，导致获取到过期（未合并）权重的 Bug。直接关联 Issue #6782。
* **[#7020](https://github.com/volcengine/verl/pull/7020) [trainer] 启用 SkipManager 并适配 param_sync_step**
  *状态*: OPEN | *作者*: chethanuk
  *摘要*: 在同步 Trainer CI 中启用 SkipManager，解决了此前遗留的 TODO，进一步完善 V1 agent loop 的生成调度逻辑。

*(此外，#7019 修复了 Agent loop 中的字段冲突 TypeError；#6933 将 fused logprob 从 monkey-patch 迁移至 Megatron output_processor hook；#7009 更新了 Ascend A2 的 Docker image tag。)*

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **触达 RL 训练的通信物理瓶颈**：PR #6974 提出的增量权重同步，直击大模型 RL 训练中 "Actor-Rollout 频繁交互" 带来的通信带宽痛点。这种通过底层稀疏化比对切断冗余通信的设计，代表了下一代 RL 框架在工程上的核心竞争力。
2. **对新架构的前沿响应极快**：无论是 DeepSeek V4（PR #6473）、Qwen3-MoE 的 FSDP2 适配（Issue #7016），还是 FP8/MXFP4 的权重量化处理，verl 社区均在问题暴露或新模型发布的第一时间提供了工程级的解决方案或蓝图。
3. **深度完善异步与异构生态**：从全异步 NCCL 初始化的死锁攻坚（Issue #6967），到 v1 Trainer SkipManager 的构建，再到华为昇腾 NPU/Ascend 环境的持续 CI 集成，verl 正在从一个单纯的算法包，快速演进为支持多芯异构、极致异步调度的工业级 RL 基建底座。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目追踪**
**日期**: 2026-07-12 | **目标仓库**: [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue 和版本发布，但核心代码库有 **2 项关键 PR 更新**。活动焦点集中在**底层训练配置优化**（检查点管理）与**强化学习环境扩展**（逻辑推理验证器）。这些更新反映了项目在兼容 OLMo 架构及推进 RLVR (Reinforcement Learning with Verifiable Rewards) 方面的持续工程投入。

### 2. 版本发布
- **无新版本发布** (过去 24 小时 Releases: 0)

### 3. 重点 Issues
- **无活跃 Issue** (过去 24 小时 Issues 更新: 0)

### 4. 关键 PR 进展

- **[OPEN] #1701: 贯通 SFT, DPO, 和 GRPO 的 `max_checkpoints` 配置**
  - **作者**: TimDettmers
  - **更新**: 2026-07-11
  - **技术摘要**: 该 PR 重构了检查点保存逻辑，将 `keep_last_n_checkpoints`（默认值为 3）统一传递给 OLMo-core 训练路径（涵盖 SFT、DPO、GRPO）中的 `CheckpointerCallback.max_checkpoints`。此举将 `-1`（无限保存）的转换约定集中化处理，有效防止了训练过程中磁盘空间的溢出，对资源受限环境下的长时间 RL 训练至关重要。
  - **链接**: [allenai/open-instruct PR #1701](https://github.com/allenai/open-instruct/pull/1701)

- **[CLOSED] #1511: 添加 SLR-Bench (可扩展逻辑推理) 验证器和数据集以支持 RLVR**
  - **作者**: lukashelff
  - **更新**: 2026-07-11
  - **技术摘要**: 该 PR 引入了 SLR-Bench 以支持 RLVR 训练。核心亮点包括：1) 提供难度递增的结构化学习课程；2) 通过逻辑程序执行生成可验证的奖励；3) 提供高效、精确的反馈机制，并支持部分正确答案的比例打分。该 PR 已合并/关闭，大幅扩展了模型在复杂逻辑推理上的 RL 训练能力。
  - **链接**: [allenai/open-instruct PR #1511](https://github.com/allenai/open-instruct/pull/1511)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **RLVR 前沿阵地的扩展**: PR #1511 展示了项目正将 RL 的应用边界从传统的数学/代码领域推向**结构化逻辑推理**。其引入的部分得分奖励机制和课程学习，高度契合当前 RLHF/RLVR 领域对细粒度奖励建模的需求。
2. **全链路训练框架的工程成熟度**: 项目没有孤立地看待强化学习，而是将 SFT、DPO、GRPO 统一在相同的底层架构（如 OLMo-core）下进行维护（见 PR #1701）。
3. **社区与核心开发者的共振**: 从 TimDettmers（著名高效训练专家，QLoRA 作者）提交的底层 I/O 优化，到学术界贡献的基准测试集成，表明 Open Instruct 已经成为连接高效系统工程与前沿 RL 算法研究的超级枢纽，是复现和迭代大模型对齐技术的极佳试验田。

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

以下是为您生成的 2026-07-12 Gymnasium RL 日报摘要。

### 1. 今日速览
- **Issues 动态**：新增/更新 2 条，社区针对奖励黑客审计及文档展示提出建设性方案。
- **PR 进展**：处理/更新 9 个 PR。开发者 `teddytennant` 集中提交了多个高质量修复，解决了向量化环境与底层空间数据类型的边缘 Bug。
- **Releases**：过去 24 小时无新版本发布。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
- **[[Proposal] Reward-hacking / reward-audit monitoring wrappers #1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619)**
  - **摘要**: 作者提议引入一组可选的 Wrappers，用于在训练或评估期间审计奖励信号。该机制可追踪奖励分布漂移、熵崩塌以及奖励函数的版本控制/哈希校验，旨在帮助研究人员在实验中及时检测出智能体正在利用 Reward Hacking 漏洞或奖励函数失效的情况。
- **[[help wanted] Doc Site Gifs Showing Real Policies for Box2D and MuJoCo #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)**
  - **摘要**: 官方维护者呼吁社区贡献，希望使用真实训练好的策略（如基于 SB3 训练的基础策略）生成 Box2D 和 MuJoCo 环境的 GIF 动图，以替换当前官方文档中仅展示随机动作的演示。

---

### 4. 关键 PR 进展
今日 PR 动态呈现两大核心主题：**文档体验优化**与**底层空间/向量化环境深度修复**。

**文档与生态适配:**
- **[Closed] Use trained-policy GIFs for Box2D environments #1627**: 响应 Issue #1610，将 LunarLander 和 BipedalWalker 环境的随机动作 GIF 替换为 SB3 真实策略训练后的渲染动图。
- **[Open] Remove torch from [all] extra to avoid nvidia-cuda on CPU-only systems #1617**: 将 PyTorch 从 `[all]` 依赖中移除，避免 PyPI 默认拉取 `nvidia-cuda-*` 导致纯 CPU 环境安装臃肿。
- **[Open] Add strict type hints for core.py, space.py, and box.py #1620**: 为核心代码引入严格的 Mypy 类型提示。

**核心空间与向量化环境修复 (主要由 teddytennant 贡献):**
- **[Open] Fix non-deterministic Text charset ordering under hash randomization #1626**: 修复 `Text` 空间因 Python 哈希随机化（`PYTHONHASHSEED`）导致跨进程采样结果不一致的非确定性 Bug。
- **[Open] Fix create_shared_memory for dtypes without an array module typecode (float16) #1625**: 修复 `Box`/`Discrete` 等空间在使用 `float16` 等无有效 array 模块类型码时，创建共享内存报错的问题。
- **[Open] Fix vector RecordEpisodeStatistics reporting wrong stats with SAME_STEP autoreset #1624**: 修复向量化环境在 `SAME_STEP` 自动重置模式下，`RecordEpisodeStatistics` 统计回合长度和回报错误的逻辑缺陷。
- **[Open] Fix vector envs mutating the sub-environment's class-level metadata #1623**: 阻止 `SyncVectorEnv` 和 `AsyncVectorEnv` 修改子环境类级别的 `metadata` 字典，防止全局副作用污染。
- **[Open] Fix integer overflow in MultiDiscrete.contains for negative starts and small dtypes #1622**: 修复 `MultiDiscrete.contains` 在负数起始值或 `int8` 等小精度数据类型下，因减法运算导致的整型溢出问题。
- **[Open] Accept any SupportsFloat reward in passive env checker #1621**: 放宽 `env_step_passive_checker` 的类型检查，接受任何符合 `SupportsFloat` 协议的 reward 返回值。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **基础设施级的影响力**：Gymnasium 是当前 RL 生态的通信协议层。今日针对 `Text` 空间、`MultiDiscrete` 溢出以及共享内存（`float16`）的深度修复，直接关系到多进程向量化训练的稳定性和跨进程一致性，这是所有大规模 RL 训练框架（如 CleanRL, Tianshou, SB3）的基石。
2. **关注前沿痛点与可复现性**：Issue #1619 提出的 Reward Hacking 审计 wrappers，精准击中了当前大模型与 RLHF 时代的一大痛点——奖励模型的脆弱性与作弊问题。这表明项目不仅在维护 API，还在前瞻性地思考如何提升实验的可解释性与可靠性。
3. **严谨的工程标准**：今日涌现的多个底层 PR 以及关于移除强依赖（避免 CPU 机器拉取 CUDA 库）、引入严格 Mypy 类型检查的动作，反映出维护团队对代码质量、环境隔离和类型安全有着严苛的标准，这对于一个被广泛依赖的基础库至关重要。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-07-12)**

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库共有 6 项动态（1 条 Issue 更新，5 条 PR 更新），无新版本 Release 发布。今日核心焦点集中在 **API 标准化重构（向 Gymnasium 靠拢）** 以及 **多智能体环境 KAZ (Knights-Archers-Zombies) 策略基准与 wrapper 的生态扩充**。

### 2. 版本发布
- **无新版本发布**。当前项目正处于 API 迁移与底层注册表重构的开发阶段。

### 3. 重点 Issues
- **#1392 [进行中] [废弃通知] 使用类 Gymnasium 的 "make" 方法替换旧版环境创建方式**
  - **链接**: [Farama-Foundation/PettingZoo Issue #1392](https://github.com/Farama-Foundation/PettingZoo/issues/1392)
  - **分析**: 项目正式宣布将废弃直接通过底层函数（如 `pistonball_v6.env()`）创建环境的方式。未来的标准 API 将统一为 `pettingzoo.make("aec", "butterfly/pistonball", ...)`。这是 PettingZoo 与 Gymnasium 生态进一步深度对齐的重要信号，将极大降低单智能体向多智能体迁移的学习成本。

### 4. 关键 PR 进展
- **#1390 [已关闭] fix(registry): 规范化环境 ID 格式为 -v[version] 及代码质量优化**
  - **链接**: [Farama-Foundation/PettingZoo PR #1390](https://github.com/Farama-Foundation/PettingZoo/pull/1390)
  - **分析**: 为配合上述 #1392 的新 `make` 机制，此 PR 重构了环境注册表，规范化了版本号解析逻辑（如统一处理 `atari/basketball_pong_v3` 的命名空间与版本分离），是 API 标准化的底层基石。
- **#1395 [开启] 添加预测式 KAZ 策略基准**
  - **链接**: [Farama-Foundation/PettingZoo PR #1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395)
  - **分析**: 为经典的 KAZ (Knights-Archers-Zombies) 环境引入了确定性的预测式向量化策略。该脚本包含了抛射物拦截预测、目标优先级分配等逻辑，提供了可复现的评估脚本，为多智能体算法提供了一个非 RL 的强力基线。
- **#1384 [开启] 添加进化式 KAZ 策略演示**
  - **链接**: [Farama-Foundation/PettingZoo PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384)
  - **分析**: 同样针对 KAZ 环境，引入了轻量级的向量策略脚本，包含参数扫描、种子评估和 GIF 渲染功能，进一步丰富了 PettingZoo 的演示与基线测试生态。
- **#1393 [开启] 为 Pursuit 环境添加可配置的中心障碍物尺寸**
  - **链接**: [Farama-Foundation/PettingZoo PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)
  - **分析**: 提升了 Pursuit 环境的灵活性。允许通过 `center_box_size` 自定义中心障碍物大小（甚至设为无障碍），便于研究人员进行消融实验或研究不同空间复杂度对协作策略的影响。
- **#1306 [开启] 添加 `RecordVideo` wrapper**
  - **链接**: [Farama-Foundation/PettingZoo PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
  - **分析**: 直接从 Gymnasium 移植了 `RecordVideo` wrapper 并适配了 AEC/Base 环境。填补了 PettingZoo 原生缺乏统一多智能体可视化录制工具的空白，使得不依赖 SB3/TorchRL 等上层库即可轻松记录训练视频。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
PettingZoo 正在经历一次重要的**接口大一统**阶段。从今日的 Issue 和底层 PR 可以看出，核心团队正在全力消除多智能体（MARL）与单智能体之间的 API 惯性壁垒。随着 `make` API 的全面 Gymnasium 化，以及基线测试库（如 KAZ 策略）和可视化工具的完善，PettingZoo 正在巩固其作为 MARL 领域“事实标准环境接口”的地位。对于进行多智能体强化学习（MARL）算法开发的工程师和研究员而言，紧跟其版本迭代能够显著提升代码的可复用性与跨框架兼容性。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>