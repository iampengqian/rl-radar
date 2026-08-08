# RL 开源生态日报 2026-08-09

> 生成时间: 2026-08-08 22:04 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态正呈现明显的**分层演进**态势。以 LLM 为核心驱动的强化学习后训练框架占据了绝大部分活跃度与前沿探索，正从基础的算法验证库向大规模、异构算力调度的“大模型工程基建”转型。同时，传统强化学习环境接口与多智能体生态则步入高度成熟期，主要精力转向 API 规范化与开发者体验优化。大规模并行推理（如 vLLM/SGLang）与分布式训练引擎（如 Megatron/FSDP2）的深度解耦与协同，已成为决定现代 RL 框架竞争力的核心胜负手。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5 (3 Open, 2 Closed) | 13 (11 Open, 2 Closed) | 0 | 适配前沿模型架构(MTP/mHC)，死磕全链路严格按位确定性。 |
| **TRL** | 7 (动态) | 8 (动态) | 0 | 直面 Agentic RL 工程落地，解决 vLLM 多卡部署与 GRPO OOM 痛点。 |
| **OpenRLHF** | 3 (3 Open) | 5 (3 Open, 2 Closed) | 0 | 聚焦 PPO 同步采样、动态 Batch 及截断重要性采样的底层边界修复。 |
| **PettingZoo** | 0 | 4 (状态更新) | 0 | 深度重构 AEC 核心调度逻辑，剔除底层 CPython 引用副作用。 |
| **Open Instruct** | 0 | 3 (Open) | 0 | 聚焦 GRPO 分布式指标修正与集群长尾任务调度诊断。 |
| **Gymnasium** | 2 (1 Open, 1 Closed) | 1 (Open) | 0 | API 趋稳，专注优化文档视觉体验与社区新手友好度。 |
| **rl_games** | 0 | 1 (Closed) | 0 | 修复归一化模块缺陷，保障连续控制模型 TorchScript 编译部署闭环。 |
| **slime** | 0 | 1 (Closed) | 0 | 针对 Qwen3.5/Next 门控 DeltaNet 架构引入 FlashQLA，优化通信开销。 |
| **AReaL / CleanRL / ROCK / ROLL / SB3 / Tianshou / torchtune** | 0 | 0 | 0 | 过去 24 小时无代码与社区动态。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **算法边界的严谨性与数值稳定性**：开发者正高度警惕复杂配置下的梯度爆炸与发散。OpenRLHF 紧抓 Token 级截断重要性采样（TIS）的上下限钳位；TRL 聚焦长周期 Agentic 任务下 bf16 LoRA 导致的数值发散；verl 则对 14 个优势估计器进行梯度基准锁定。
2. **多模态与复杂推理流的接入**：扩展 RL 在多模态与智能体领域的适用性，如 verl 解决 FSDP2 下动态多模态前向对齐防死锁，PettingZoo 完善非规则观测空间的 API 兼容。

**工程/基础设施侧信号：**
1. **异构引擎（训练 x 推理）的深度融合与协同**：这是今日最核心的工程发力点。verl 和 TRL 均在集中解决 vLLM/SGLang 在多卡张量并行（TP）下的 CUDA 上下文冲突、进程初始化报错、以及跨引擎的增量/LoRA/FP8 权重同步问题。
2. **前沿大模型架构的分布式适配**：框架正在快速吸收最新基座模型特性。verl 适配 DeepSeek-V4 的 mHC 多流与 MTP 机制降低激活显存；slime 集成 Qwen3.5 的 FlashQLA 后端降低通信开销。
3. **严格确定性（Strict Determinism）**：应对 RL 实验可复现性难题。verl 正从 NCCL/cuBLAS/flash-attn 等浮点算子底层抓起，推进全链路的按位一致性。

## 差异化定位分析
- **verl & TRL**：作为当前 LLM RL 的双子星，均在攻坚大规模 Agentic 工程基建。**verl** 更偏底层硬核工程与前沿架构试验（深度定制 Megatron/TorchTitan，推进全链路确定性）；**TRL** 则表现出极强的社区敏捷响应闭环，更注重将前沿推理增强范式（如 GPG 算法、AsyncGRPO）沉淀为开箱即用的 Trainer。
- **OpenRLHF & Open Instruct**：均定位为严谨的工业级大规模训练基座，但颗粒度有所不同。**OpenRLHF** 深潜至 PPO 核心数学逻辑与非对称 Batch 张量切分的极限修复；**Open Instruct** 则带有强烈的 AI2 色彩，不仅关注算法指标，更贴近真实算力集群（Beaker）的任务调度与吞吐压测。
- **PettingZoo & Gymnasium**：作为底层标准环境接口，其定位是巩固基础生态。当前重点不在算法突破，而在于 API 现代化、规避 Python 底层引用污染，以及通过视觉物料优化降低初学者门槛。
- **rl_games & slime**：深耕特定垂直领域的极致性能。**rl_games** 聚焦连续控制与具身智能的 GPU 高并发吞吐与 TorchScript C++ 生产级部署；**slime** 则瞄准大模型长上下文训练的显存与通信极限压榨。

## 社区热度与成熟度
当前开源 RL 社区的热度呈现**极度分化**的状态。由 LLM 带来的后训练红利将绝大多数开发者与贡献者吸引至 verl、TRL 等项目中，这些项目保持着极高的 Issue 吞吐量，且能在 24 小时内完成“暴露痛点 -> 提交 PR -> 回归测试”的敏捷闭环，展现出旺盛的生命力。
相比之下，传统 RL（如 SB3, Tianshou, CleanRL）以及部分垂直大模型 RL 框架（如 ROCK, ROLL）活跃度趋缓，表明其核心逻辑已高度成熟或进入功能沉淀期。Gymnasium 与 PettingZoo 则维持着稳健的“底层基石”地位，通过规范化流程处理社区边缘贡献，确保 API 标准的纯洁性。

## 值得关注的趋势信号
1. **从“算法库”向“高性能调度系统”演进**：LLM RL 框架的核心壁垒已发生转移。谁能更好地解决异构集群下（FSDP2/Megatron 与 vLLM/SGLang）的显存调度、权重同步与通信瓶颈，谁就能占据主导地位。
2. **“严格确定性”成为工业级框架的刚需**：由于 RL 训练本身存在极强随机性与不稳定性，追求跨运行、跨算子的按位对齐正成为顶级 RL 框架（如 verl）拉开差距的新标签，这将为严谨的算法复现提供基座。
3. **长周期 Agentic 任务倒逼工程重构**：随着 Tool Calling 和长思维链的普及，多轮交互引发的 OOM、Docker 环境不兼容、非规则 Batch 中断训练等问题正在倒逼框架重塑底层资源管理逻辑。

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

以下是为您生成的 slime (github.com/THUDM/slime) 2026-08-09 强化学习开源生态日报摘要：

### slime RL 日报 (2026-08-09)

**1. 今日速览**
过去 24 小时内，slime 仓库整体活跃度趋于平稳。无新增 Issue，无新版本发布。有 1 项历史核心 PR 于昨日（8月8日）发生状态更新并被关闭。

**2. 版本发布**
- **今日更新**：无。
- **最新 Releases**：当前无最新版本更新。

**3. 重点 Issues**
- **今日更新**：无新增或更新的 Issue。社区的 Bug 反馈与功能请求处于静默期。

**4. 关键 PR 进展**
- **PR #1947 [CLOSED]**: `[run-ci-megatron] feat: add FlashQLA backend for Qwen GDN and skip selected comm memory checks`
  - **作者**: hxy771126-design
  - **进展**: 该 PR 创建于 2026-05-26，于 8月8日更新并关闭。
  - **技术摘要**: 旨在为 Qwen 的门控 DeltaNet (Gated DeltaNet, GDN) 层引入 `FlashQLA` 后端支持。通过新增 `--qwen-gdn-backend {fla,flashqla}` 参数配置（适配 Qwen3.5 / Qwen3-Next Megatron 插件），并跳过部分算子的预通信内存检查，从而降低分布式训练中的通信开销。
  - **链接**: [THUDM/slime PR #1947](https://github.com/THUDM/slime/pull/1947)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **面向前沿模型架构的底层优化**: slime 通过集成 `FlashQLA` 和支持门控 DeltaNet 架构，正致力于解决长上下文和高吞吐量 RL 训练中的显存与通信瓶颈。
- **深度适配下一代大模型**: PR 中明确针对 **Qwen3.5** 及 **Qwen3-Next** 进行 Megatron 插件的适配，表明该项目紧跟大语言模型迭代步伐，为未来基于最新基座模型开展复杂 RLHF/RLAIF 训练提供了开箱即用的基础设施支持。
- **工程效率提升**: 允许跳过特定算子的预通信内存检查，反映出该项目在高并发、大规模分布式 RL 场景下对通信调度的精细化调优能力。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这份 TRL（Transformer Reinforcement Learning）项目日报基于 2026-08-09 的 GitHub 动态生成。当前阶段，项目无新版本发布，主要精力集中于 vLLM 深度集成、分布式训练稳定性修复以及新算法的扩展。

以下是详细的技术摘要：

### 1. 今日速览
*   **Issues 动态**: 更新 7 条，重点暴露了 `vllm-serve` 多卡部署、`GRPO` 显存溢出（OOM）及 `SFTTrainer` 核心代码的兼容性 Bug。
*   **PR 动态**: 更新 8 条，社区快速响应了 Issue 中的痛点，提交了针对 Docker 镜像重构、CUDA 多进程上下文修复及新算法 GPG 训练器的代码。
*   **Releases**: 过去 24 小时无新版本发布（0 个）。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
今日的 Issues 高度聚焦于大模型在后训练与强化学习落地中的工程痛点：

*   **多卡与 vLLM 集成阻碍**
    *   **[#6679](https://github.com/huggingface/trl/issues/6679) [Bug] `trl vllm-serve` 多卡张量并行失效**：当 `tensor_parallel_size > 1` 时，触发 `Cannot re-initialize CUDA in forked subprocess` 错误。原因在于 Python 默认的 `fork` 多进程上下文与 CUDA 初始化冲突。
    *   **[#6684](https://github.com/huggingface/trl/issues/6684) `AsyncGRPOTrainer` 导致 4B 模型 OOM**：异步 GRPO 训练器中硬编码了 `dtype=torch.float32`，导致在 80GB 显存的单卡（如 H100）上跑 4B 模型直接 OOM。
*   **SFTTrainer 核心逻辑异常**
    *   **[#6685](https://github.com/huggingface/trl/issues/6685) 默认 `chunked_nll` 损失计算引发崩溃**：`SFTTrainer` 的 `_chunked_ce_forward` 强制读取 `outputs.past_key_values` 和 `outputs.attentions`，导致返回非标准输出的模型在第一步即报 `AttributeError`。
*   **长周期 Agent 任务及数值稳定性**
    *   **[#6688](https://github.com/huggingface/trl/issues/6688) GRPO + vLLM + bf16 LoRA 数值发散**：在长周期多轮 Tool 调用的 Agentic 任务中，vLLM 生成端与 HF 原生生成端在行为上出现严重偏差。
*   **功能增强建议**
    *   **[#4339](https://github.com/huggingface/trl/issues/4339) VLMs 的 Packing 支持**：建议在 SFT 中为视觉语言模型（VLMs）引入 Packing 机制以减少显存冗余。
    *   **[#4523](https://github.com/huggingface/trl/issues/4523) Docker 镜像替换**：建议针对 GRPO 场景，将基础镜像从纯 Torch 替换为官方 `vllm/vllm-openai` 镜像。
*   **环境与脚本失效**
    *   **[#6683](https://github.com/huggingface/trl/issues/6683) OpenEnv 环境对接失败**：内置的 `opencode.py` 脚本无法正常与当前版本的 OpenEnv 交互，所有 rollout 被错误评分为 "unscorable"。

---

### 4. 关键 PR 进展
社区开发者展现出了极高的效率，多个 PR 直接修复了上述高频 Issues：

*   **基础设施与部署修复**
    *   **[#6687](https://github.com/huggingface/trl/pull/6687) 重构 TRL Docker 基础镜像**：响应 Issue #4523，将镜像底层切换至 `vllm/vllm-openai:v0.26.0`，并清除了默认的 `vllm serve` 入口，确保 `trl` 和 HF Jobs 命令正常运行。
    *   **[#6682](https://github.com/huggingface/trl/pull/6682) 修复 vLLM Server 多进程启动**：针对 Issue #6679，将多进程启动方式从默认的 `fork` 改为 `spawn` 上下文，解决了子进程继承无效 CUDA 状态的问题。
*   **训练逻辑与代码健壮性**
    *   **[#6686](https://github.com/huggingface/trl/pull/6686) [SFT] 修复 `chunked_nll` 强依赖**：直接修复 Issue #6685，将 `past_key_values` 和 `attentions` 作为可选项处理。
    *   **[#6680](https://github.com/huggingface/trl/pull/6680) 完善 GRPO Reward 文档**：补充了自定义奖励函数在批处理维度下的 shape 定义及组相对奖励（group-relative rewards）的说明。
*   **前沿算法与分布式测试**
    *   **[#6681](https://github.com/huggingface/trl/pull/6681) 引入实验性 GPG Trainer**：基于论文《GPG: A Simple and Strong Reinforcement Learning Baseline for Model Reasoning》添加了全新的 `GPGTrainer`。
    *   **[#6172](https://github.com/huggingface/trl/pull/6172) 增加 `chunked_nll` 分布式回归测试**：添加 2-GPU 测试用例，防止在 FSDP2 框架下 `lm_head.weight` 被错误地频繁 All-gather。
    *   **[#6391](https://github.com/huggingface/trl/pull/6391) 优化 Liger 蒸馏评估流程**：确保在 ZeRO-3 环境下的评估阶段正确聚合 `lm_head`。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的数据可以看出，TRL 正在经历从“算法库”向**“大规模 Agentic RL 工程基建”**的关键演进：

1.  **直面 LLM RL 的工程瓶颈**：今日 Issue 和 PR 的高频词是 `AsyncGRPOTrainer`、`vLLM 集成`、`长周期 Tool 调用`。这表明 TRL 已经跨越了简单的 RLHF 阶段，目前正集中火力解决**异构推理加速（vLLM）与分布式训练框架（FSDP/ZeRO）结合时**的底层冲突（如显存泄漏、进程上下文冲突、数据类型溢出）。
2.  **敏捷的社区响应闭环**：针对阻塞性的工程 Bug（如多卡 vLLM 启动失败、SFT 默认参数报错），社区能在 24 小时内给出清晰的定位并提供对应的修复 PR（如 PR #6682 和 #6686），展现了极强的社区活性与代码维护力。
3.  **紧跟 SOTA 算法与 Agentic 理念**：引入 GPG 算法、测试多轮 Agentic Rollout（OpenEnv 对接），表明 TRL 正在快速将当前最有效的“推理增强”范式沉淀为开箱即用的 Trainer。对于需要复现前沿 Reasoning 模型能力的团队而言，TRL 依然是迭代最快、生态最契合的首选基座。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**RL 生态日报：OpenRLHF 项目动态**
**日期**: 2026-08-09

### 1. 今日速览
过去 24 小时，OpenRLHF 仓库共更新 3 条 Issues 和 5 条 PRs，无新版本发布。今日的活动高度聚焦于底层算法逻辑的健壮性修复：开发者 `ai-yang` 集中报告并提交了 3 个关于 PPO 训练路径（特别是同步采样、动态 batch 分配及截断重要性采样）的边界 Bug 及对应修复方案。此外，早前关于多模态和自定义奖励函数的 PR 已关闭。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
今日新增的 3 个 Issues 均由 `ai-yang` 提出，直指 PPO 训练器在复杂配置下的边界异常：

* **同步 PPO 丢弃最后一批 Rollout 数据**
  [Issue #1297](https://github.com/OpenRLHF/OpenRLHF/issues/1297)
  **摘要**: 在 `PPOTrainer.fit()` 循环中，当 prompt dataloader 耗尽时，即使该批次产生了非空的 `rollout_samples`，也会被默认同步 PPO 路径错误丢弃。
* **动态 Batch 下 `balance_experiences` 导致 Rollout 丢失**
  [Issue #1296](https://github.com/OpenRLHF/OpenRLHF/issues/1296)
  **摘要**: 启用动态 batching 时，若样本数不能被有效 actor 数量整除，该函数会静默丢弃多余的 rollouts，导致下一个 `async_run_method_batch()` 调用出现确定性报错中断。
* **`seq-mask-tis` 未执行 Token 级截断导致梯度异常**
  [Issue #1295](https://github.com/OpenRLHF/OpenRLHF/issues/1295)
  **摘要**: `seq-mask-tis` 分支在计算新旧策略对数概率差值时，未应用配置的 TIS（截断重要性采样）上下限，直接进行指数运算，可能产生非有限的（non-finite）PPO 更新。

### 4. 关键 PR 进展
针对上述 Issues，开发者迅速提交了 3 个修复 PR，另有 2 个旧 PR 完成状态更新：

**新增修复 PRs (由 `ai-yang` 提交):**
* **[OPEN] 处理同步 PPO 的末尾批次** ([PR #1300](https://github.com/OpenRLHF/OpenRLHF/pull/1300))
  修复 Issue #1297。核心逻辑：在 dataloader 报告耗尽时，继续处理已生成的非空 rollout 结果；空结果时才终止迭代，防止同一 episode 内迭代器重启。
* **[OPEN] 在 `balance_experiences` 中保留不规则批次** ([PR #1299](https://github.com/OpenRLHF/OpenRLHF/pull/1299))
  修复 Issue #1296。核心逻辑：使用 `zip_longest` 转置动态平衡的 experience chunks，仅省略缺失的尾部条目，而非截断整个较长的 chunk，并添加了整除与不规则样本的回归测试。
* **[OPEN] 在 `seq-mask-tis` 校正中限制 Token 权重** ([PR #1298](https://github.com/OpenRLHF/OpenRLHF/pull/1298))
  修复 Issue #1295。核心逻辑：在序列级过滤器通过后，将每个 token 的重要性权重钳位至预设的 TIS 区间内，防止溢出。

**状态更新 PRs:**
* **[CLOSED] 新增 CGPO 风格的约束奖励工具** ([PR #1257](https://github.com/OpenRLHF/OpenRLHF/pull/1257))
  提供了一个可选的校准奖励功能层，用于通过 `--reward.remote_url` 加载的自定义 Python 奖励函数，未修改 PPO/GRPO 核心代码。
* **[CLOSED] 为 VLM 工具函数添加测试** ([PR #1256](https://github.com/OpenRLHF/OpenRLHF/pull/1256))
  为多模态 Token/张量对齐相关的 `dedup_media_tokens` 和 `accumulate_mm_inputs` 添加了针对性的回归覆盖测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
OpenRLHF 今天的动态展现了工业级 RLHF 框架在底层细节上的演进方向。大模型强化学习面临的最大痛点之一是训练稳定性，而 Issue #1295 和 #1296 暴露出：在长上下文/多模态/动态 Batch 等复杂场景下，哪怕是非对称除法（Ragged batches）或重要性采样（IS）的截断边界处理稍有偏差，都会导致梯度爆炸或训练静默失败。
OpenRLHF 社区不仅能够敏锐捕获此类深层边界 Bug，还能迅速通过规范的 PR 流程（附带复现用例与回归测试）进行修复。这种对 PPO/GRPO 核心数学逻辑和分布式张量切分机制的严格把控，使其成为当前 RL 生态中极少数既能支撑大规模分布式训练，又能保证底层算法严谨性的高价值开源基座。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-08-09 RL 日报摘要：

# verl 强化学习生态日报（2026-08-09）

## 1. 今日速览
- **Issues 动态**：新增/更新 5 条（3 Open, 2 Closed）。社区聚焦于端到端确定性训练的 Bug 修复，以及微批次处理与 loss 聚合机制的讨论。
- **PR 进展**：新增/更新 13 条（11 Open, 2 Closed）。底层基础设施活跃，重点围绕 Megatron-core (MHC/MTP) 深度适配、FSDP2 多模态对齐、vLLM 权重同步优化及核心算法的确定性重构。
- **版本发布**：过去 24 小时无新版本发布。

## 2. 版本发布
无。当前开发分支仍处于 `0.9.0.dev` 阶段。

## 3. 重点 Issues
- **[[bug] E2E determinism training test is failing (not bitwise-aligned)](https://github.com/verl-project/verl/issues/7216)**
  - **摘要**：开发者测试最新引入的“全确定性可复现 RL 训练”特性时，发现从第二步开始模型结果无法保持按位一致。该问题直接关系到强化学习实验的严格可复现性，是目前社区关注的核心痛点。
- **[[Discussion] Understanding the micro-batch fallback in agg_loss when batch_num_tokens is None](https://github.com/verl-project/verl/issues/7321)**
  - **摘要**：开发者对 `core_algos.py` 中 `agg_loss` 的 `token-mean` 计算逻辑提出疑问，探讨了当 `batch_num_tokens` 缺失时，系统回退到微批次计算所引发的分母差异。体现了社区对底层梯度归一化机制的严谨审视。
- **[[bug] after update to latest code, Many errors occurred.](https://github.com/verl-project/verl/issues/7320)** / **[[bug] Could not override 'data.apply_chat_template_kwargs.enable_thinking'](https://github.com/verl-project/verl/issues/7319)**
  - **摘要**：更新最新代码后，使用智能体沙盒工具及 Qwen 模型的 `enable_thinking` 参数覆写时触发报错。反映出快速迭代期配置管理的兼容性挑战。

## 4. 关键 PR 进展
**【底层引擎与并行计算优化】**
- **[PR #7328: [megatron] fix: forward mhc_multistream to MTP and skip activation reclaim for MTP checkpoints](https://github.com/verl-project/verl/pull/7328)**
  - **摘要**：修复了阻碍 DeepSeek-V4 在 Megatron-core 上启用 mHC（流形超连接）+ MTP（多 Token 预测）训练的崩溃问题，处理了多流张量在反向重计算中的冲突。
- **[PR #7326: [megatron] fix: make MTP work with recompute_granularity=full on megatron-core 0.18.x](https://github.com/verl-project/verl/pull/7326)**
  - **摘要**：使多 Token 预测（MTP）能够在 megatron-core 0.18.x 上与 `recompute_granularity='full'` 协同工作，有效降低 MTP 的激活显存开销。
- **[PR #6933: [megatron] feat: migrate fused logprob/entropy...](https://github.com/verl-project/verl/pull/6933) [CLOSED]**
  - **摘要**：将 fused logprob/entropy 的计算从对 `GPTModel.forward` 的猴子补丁，正式迁移至 Megatron 原生的 `output_processor` 钩子中，大幅提升了代码的整洁度与维护性。

**【Rollout 与权重同步】**
- **[PR #7324: [ckpt, fsdp] feat: sharded delta weight sync for the TorchTitan engine](https://github.com/verl-project/verl/pull/7324)**
  - **摘要**：为 TorchTitan 训练引擎引入分片增量权重同步支持。在 GSM8K GRPO 离线策略（disaggregated）训练中，打通了 FSDP2 Trainer 到 SGLang Rollout 的高效链路。
- **[PR #7327: [vllm] fix: resolve .base_layer on the vLLM receiver for non-merged LoRA sync](https://github.com/verl-project/verl/pull/7327)**
  - **摘要**：修复非合并模式下 LoRA 权重同步的问题。适配了 vLLM 对所有线性层包装 `.base_layer` 的行为，解决其与 Megatron 命名空间的冲突。
- **[PR #7136: [rollout, vllm] fix: FP8 rollout weight resync on vLLM 0.20.x...](https://github.com/verl-project/verl/pull/7136) [CLOSED]**
  - **摘要**：通过驱动 vLLM 原生的逐层重载生命周期，修复了 vLLM 0.20.x 上的 FP8 权重重新同步失败问题。

**【多模态与算法确定性】**
- **[PR #7323: [model, fsdp] fix: align Qwen3.5 vision calls across ranks](https://github.com/verl-project/verl/pull/7323)**
  - **摘要**：修复 FSDP2 下 Qwen3.5 的动态多模态批处理前向调用不对齐问题。避免了由于部分 rank 仅包含文本导致的前向触发次数不一致，从而防止死锁或梯度计算错误。
- **[PR #7027: [reward] feat: support deterministic reward for user-defined generative RM paths](https://github.com/verl-project/verl/pull/7027)**
  - **摘要**：为自定义生成式奖励模型（GRM）引入跨运行的按位确定性支持，覆盖了 NCCL/cuBLAS/flash-attn 浮点层面的确定性计算。
- **[PR #7325: [algo] test: pin the expected policy gradient of each advantage estimator](https://github.com/verl-project/verl/pull/7325)**
  - **摘要**：对 `core_algos.py` 中注册的 14 个优势估计器进行基准测试锁定，补齐了过往只测形状而不测实际梯度的盲区，增强了算法底座的可靠性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿模型架构迭代**：开发团队正在密集适配下一代模型范式（如 DeepSeek-V4 的 mHC 多流机制与 MTP 架构），这表明 verl 不仅是训练框架，更是前沿大模型工程化的试验田。
2. **死磕“严格确定性”难题**：RL 训练的可复现性一直是工程界的痛点。从 Issue #7216 到 PR #7027，verl 正在从算子底层的浮点对齐抓起，推进全链路（Actor-Reward-Rollout）的按位一致性，这对严谨的算法研究至关重要。
3. **深度融合新一代分布式生态**：从主动适配 FSDP2 的多模态前向切分机制，到废弃旧版补丁拥抱 Megatron 原生 Hook，再到打通 TorchTitan 训练引擎与 SGLang 的高效交互，verl 正在快速吸收并整合开源社区最前沿的工程红利，巩固其作为顶级 RL 后端的地位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-08-09 Open Instruct RL 日报摘要：

### 1. 今日速览
- **整体活跃度**：过去 24 小时内，Open Instruct 仓库无新增 Issue、无新版本发布，但有 3 个技术 PR 持续推进。
- **核心方向**：今日的更新主要聚焦于 **GRPO 训练指标计算修正**、**SFT 数据容错处理** 以及 **底层集群 任务调度诊断**。

### 2. 版本发布
无。过去 24 小时内未发布新版本。

### 3. 重点 Issues
过去 24 小时无新增或更新 Issue。

### 4. 关键 PR 进展

*   **[#1808](https://github.com/allenai/open-instruct/pull/1808) [OPEN] 修复 `grpo_fast` 中 num_step_tokens、TPS 和 MFU 指标的 N 倍膨胀问题**
    *   **作者**: farhatkevin
    *   **技术摘要**: 发现 `DataPreparationActor.get_data` 向所有 rank 返回了全局 metrics 字典（未进行数据分片），导致 `grpo_fast.py` 在 `one_training_step` 中 concat `batch/prompt_lengths` 等数据时，发生了重复计算。此修复直接修正了 TPS（Tokens Per Second）和 MFU（Model FLOPs Utilization）等核心性能指标的统计错误，对准确评估 RL 训练吞吐至关重要。

*   **[#1806](https://github.com/allenai/open-instruct/pull/1806) [OPEN] 当 chat template 前缀不稳定时执行降级回退，而非直接中断**
    *   **作者**: abhishekraok
    *   **技术摘要**: 修复 Issue #1800。此前在 SFT Tokenization 阶段，若 rendered conversation prefix 不是完整 render 的字面前缀，会导致整个训练任务 Abort。此 PR 修改了 `_tokenize_tulu_sft_with_assistant_labels` 的校验逻辑，针对 olmo-family 等模型的特殊 chat template 提供了容错回退机制，显著提升了数据处理的鲁棒性。

*   **[#1807](https://github.com/allenai/open-instruct/pull/1807) [OPEN] 补充 Beaker job 排队诊断文档**
    *   **作者**: abhishekraok
    *   **技术摘要**: 在 `AGENTS.md` 中新增了关于诊断 Beaker 任务长时间排队不调度的说明。背景是一个 1x8 GPU 任务排队长达 9.5 小时（`excluded by slot limit`），补充此文档有助于开发者在集群资源紧张时更高效地排查调度问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 Allen AI（AI2）大本营，Open Instruct 在 RL（尤其是 GRPO 算法变体）训练基础设施上展现了极高的工程严谨度：
1.  **深耕算法与工程的结合**：PR #1808 展现了维护者对分布式 RL 训练中 rank 通信与数据并行的细节把控。MFU 和 TPS 计算错误的修复，说明该框架正在被高频用于大规模 RL 训练的性能压测。
2.  **对前沿模型的高度适配**：PR #1806 针对 olmo 系列模型的 Tokenization 容错机制，表明 Open Instruct 正在不断打通原生开源模型在 SFT/RLHF 流水线中的摩擦点。
3.  **贴近真实的算力调度场景**：Open Instruct 并非纯粹的算法库，而是紧密结合了 AI2 的自建算力平台。其针对大集群长尾排队问题的排查经验（PR #1807），对其他构建大规模 RLHF 训练平台的团队具有极高参考价值。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 开源生态日报：rl_games (2026-08-09)**

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库动态处于低活跃状态，无新增 Issue 或版本发布。核心推进集中在对底层架构的稳定性修复上：团队/社区合并/关闭了 1 个关键 PR，解决了字典观测空间下归一化模块无法被 TorchScript 编译的核心缺陷。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
**#364 [CLOSED] Fix dict-obs normalization: RunningMeanStdObs was un-scriptable**
*   **作者**: ViktorM
*   **时间**: 创建于 2026-08-06，更新于 2026-08-08
*   **链接**: [Denys88/rl_games PR #364](https://github.com/Denys88/rl_games/pull/364)
*   **技术摘要**: 
    该 PR 修复了 `models.py` 中字典观测空间归一化的阻断性 Bug。原实现中，`RunningMeanStdObs` 被 `torch.jit.script` 包裹，但其 `forward` 函数存在两个违背 TorchScript 静态编译规则的缺陷：
    1. 输入参数缺乏类型标注，导致 TorchScript 默认推断为 `Tensor`，进而导致调用 `input.items()` 时抛出编译错误。
    2. 使用变量作为 Key 去索引 `ModuleDict`，这在 TorchScript 中是不被支持的操作。
    **影响范围**：彻底修复了在“字典观测空间 + 开启归一化”场景下的模型序列化与推理报错问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管在当前 RL 生态中（尤其在 NLP/LLM 领域）焦点多集中于 PPOTrainer、DeepSpeed-Chat 等框架，但 [rl_games](https://github.com/Denys88/rl_games) 在**连续控制、机器人强化学习与游戏 AI（如 Isaac Gym/Gymnasium 环境）**领域依然是性能天花板级别的基座库：
*   **极致的 GPU 利用率**：其高度向量化、基于 PyTorch 的底层设计，使其在处理大规模并行环境（如数以万计的同构智能体）时吞吐量极高，是目前许多具身智能benchmark的标配推理/训练后端。
*   **对工程化落地的严苛把控**：正如今日合并的 PR #364 所示，项目对 `TorchScript` (JIT) 有着深度的依赖，以确保训练好的 RL 策略能够脱离 Python GIL 束缚，以 C++ 高性能方式部署到生产环境或真实物理机器人上。这种“训练-编译-部署”闭环的严谨性，使其在工业级 RL 落地中具备不可替代的参考价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-08-09)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库无明显代码版本发布，社区活动集中于文档体验优化与历史遗留功能讨论。共更新 2 条 Issues（1 个开启，1 个关闭）和 1 条 PR。

**2. 版本发布**
*   **无新版本发布**。当前项目核心 API 趋于稳定，处于常规维护与生态适配阶段。

**3. 重点 Issues**
*   **#1610 [OPEN] 征集 Box2D 与 MuJoCo 环境的真实策略演示 GIF**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)
    *   **摘要**: 核心维护者 jkterry1 发起倡议，希望社区贡献者提交 PR，将官方文档中 Classic Control、Box2D 和 MuJoCo 环境演示从目前的“随机动作”替换为基于真实策略（如 SB3 基础模型）的运行 GIF，以直观展示环境的求解目标。该 Issue 于昨日有新的互动跟进。
*   **#1118 [CLOSED] 允许为 `Discrete` 空间指定数据类型 (`dtype`)**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1118](https://github.com/Farama-Foundation/Gymnasium/issues/1118)
    *   **摘要**: 该增强请求于前年提出，指出 `Discrete` 空间硬编码为 `numpy.int64` 导致不必要的内存开销，提议与 `MultiDiscrete` 和 `Box` 对齐，允许自定义 `dtype`。该 Issue 昨日被正式关闭。

**4. 关键 PR 进展**
*   **#1662 [OPEN] 为 MuJoCo 环境引入训练策略的 GIF 演示**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1662](https://github.com/Farama-Foundation/Gymnasium/pull/1662)
    *   **摘要**: 开发者 Amala-Bharadwaj 响应了 Issue #1610 的号召，提交了针对 MuJoCo 全部 11 个环境的优化。该 PR 使用基于 SB3 SAC 算法训练的策略渲染图，替换了原有的随机智能体（random-agent）GIF。纯媒体资源更新，不涉及底层渲染逻辑改动。这是继 Classic Control 和 Box2D 环境优化后的第三批文档视觉升级。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **API 事实标准**: Gymnasium 作为 OpenAI Gym 的最活跃继承者，其定义的 API 交互范式（如 `reset`, `step`, `spawn`）依然是当今绝大多数 RL 库（如 SB3, CleanRL, Tianshou）的底层通信基石。
*   **降低认知门槛**: 从近期的动态可以看出，项目不仅在维护引擎，还在持续优化新手的“第一印象”。将文档中表现如“乱挥乱动”的随机策略替换为表现优异的 SAC 策略演示，能够大幅降低初学者的认知负荷，直观展示 RL 算法的上限能力。
*   **规范的社区协作范本**: 通过 `[good first issue]` 和 `[help wanted]` 标签，项目维持着良好的社区梯队建设，是研究强化学习标准接口实现与开源社区工程实践的极佳切入点。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 PettingZoo 项目 2026-08-09 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库无明显异常或突发性 Issue 产生，无新版本 Release 发布。项目主要精力集中在**底层架构重构**与**API 规范化**上，共有 4 个处于 OPEN 状态的 PR 发生了状态更新或追加讨论。活跃贡献者主要集中在 `teddytennant` 和 `Amala-Bharadwaj`。

### 2. 版本发布
*   **无新版本发布**（0 个 Release）。

### 3. 重点 Issues
*   **无活跃 Issue**（过去 24 小时内 Issue 更新数为 0 条）。

### 4. 关键 PR 进展
今日更新的 4 个 PR 集中在解决环境核心调度逻辑（AEC 模式）、状态观测处理以及测试套件的鲁棒性优化：

*   **[OPEN] 将 SuperSuit 的 flatten_v0 功能原生移植**
    *   **链接:** [Farama-Foundation/PettingZoo PR #1415](https://github.com/Farama-Foundation/PettingZoo/pull/1415)
    *   **摘要:** 由 `Amala-Bharadwaj` 提交。该 PR 旨在将 SuperSuit 中经典的 `flatten_v0` 观测空间扁平化功能直接内化到 PettingZoo 中。它会将每个 Agent 的观测数据展平为 1D 数组，并同步重写 Observation Space。值得注意的是，该实现按照类而非工厂函数暴露，以对齐现代 Gymnasium 的设计哲学。
*   **[OPEN] 修复 `AgentSelector` 的引用传递缺陷**
    *   **链接:** [Farama-Foundation/PettingZoo PR #1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400)
    *   **摘要:** 由 `teddytennant` 提交。修复了一个底层逻辑隐患：原先 `AgentSelector.reinit()` 接收外部列表时采用**按引用传递**（未进行 copy），导致外部列表的任何变动都会污染环境内部的 Agent 执行顺序。该 PR 让 `AgentSelector` 获得列表的独立所有权，并附加了回归测试。
*   **[OPEN] 修复 `api_test` 对非 Box/Discrete 观测空间的虚假警告**
    *   **链接:** [Farama-Foundation/PettingZoo PR #1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391)
    *   **摘要:** 修复测试框架的误报问题。当环境的观测空间为合法的 Gymnasium 结构（如 `Dict`, `Tuple`, `MultiDiscrete`）时，`api_test.py` 此前会错误地抛出 "Observation is not a NumPy array" 的警告。此 PR 完善了测试套件对复杂观测空间的兼容性。
*   **[OPEN] 厘清文档：环境终止后 `env.agents` 何时清空**
    *   **链接:** [Farama-Foundation/PettingZoo PR #1414](https://github.com/Farama-Foundation/PettingZoo/pull/1414)
    *   **摘要:** 针对 Issue #1244 的文档修复。澄清了 AEC（Agent Environment Cycle）环境中的一个核心概念：当 `last()` 首次返回 `termination=True` 时，`env.agents` 列表实际上**仍包含**相关 agents，并非立即清空。这有助于避免开发者在编写 Connect Four 等环境评估循环时出现逻辑崩溃。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **多智能体生态的核心基石：** PettingZoo 是当前 Farama 基金会下标准化的多智能体强化学习（MARL）API 接口。它与单智能体库 Gymnasium 形成完美互补，是绝大多数主流 RL 算法库（如 CleanRL, Tianshou, Stable-Baselines3）接入多智能体任务的底层依赖。
2.  **通过架构解耦提升工程稳健性：** 今日的 PR 动向（如修复 `AgentSelector` 的引用污染、完善非 Box 类型观测的测试）表明，项目正在严格剔除底层 CPython 带来的隐性副作用，并强化边界测试。这对于需要长时间、高并发跑训练任务的 RL 开发者而言至关重要。
3.  **API 现代化的风向标：** 将 SuperSuit 的 Wrapper 功能原生迁移、对齐 Gymnasium 的类设计风格，说明 PettingZoo 正在逐步整合外部工具链。关注这些 PR，能帮助开发者提前适配下一代多智能体环境的开发范式。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>