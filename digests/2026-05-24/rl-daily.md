# RL 开源生态日报 2026-05-24

> 生成时间: 2026-05-23 22:14 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出显著的“两极分化”。一方面，以 LLM 对齐为核心的训练框架（verl、TRL、AReaL、slime）正处于高速迭代期，社区在异构算力适配、分布式通信瓶颈和底层算法纠偏上密集投入；另一方面，传统经典 RL 算法库（如 SB3、CleanRL、Tianshou）以及部分 LLM 基础设施（OpenRLHF、ROLL）则处于极度平稳的静默维护或“代码冻结”状态。整个生态的重心已全面向“大规模语言模型强化学习”的工程深水区转移。

## 各项目活跃度对比

*(注：仅统计 2026-05-24 过去 24 小时内的动态，无活动项目已省略)*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 2 | 9 | 0 | 聚焦 GRPO 稳定性修复与跨平台异构算力（Ascend/Remote）深度适配 |
| **TRL** | 3 | 6 | 0 | 核心关注 DAPO 底层算法准确性校验与 Qwen3.5 等前沿模型模板支持 |
| **AReaL** | 1 | 5 | 0 | 攻坚分布式集群下的显存共置、异步保存与链路可观测性 |
| **ROCK** | 0 | 6 | 0 | 推进企业级 CLI 自动化异步提交与自托管 CI/CD 基础设施验证 |
| **slime** | 0 | 4 | 0 | 优化 Megatron 变长 Batch 训练与 SGLang/Triton 推理解耦定制 |
| **Gymnasium** | 0 | 1 | 0 | 处于成熟期，重心转向夯实底层环境 API 的开发者使用文档 |
| **SB3** | 1 | 0 | 0 | 核心算法高度稳定，仅处理历史遗留的底层渲染依赖冲突 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agent 交互与复杂策略的稳定性**：从单轮对话向多轮工具调用演进时，模型面临动作空间约束脆弱、格式崩溃以及奖励黑客（reward hacking）等挑战。熵爆炸（如 verl #2738）和底层 Loss 缩放错误（如 TRL #5375）成为算法层面亟待解决的核心痛点。
2. **SFT 与 RL 的边界融合**：为了在对齐阶段更精细地控制模型表现并防止遗忘，社区开始引入结合两者优势的混合范式，例如 TRL 引入的熵自适应微调（EAFT）。

**工程/基础设施侧信号：**
1. **极致的 IO 与显存通信优化**：为了打破大集群下 Actor 与 Inferencer 之间的通信墙，领先框架（如 AReaL）正通过 CUDA IPC 实现显存级直接权重更新，并普及 Checkpoint 异步保存机制。
2. **多元异构算力与推理引擎的深度绑定**：框架不再局限于英伟达单一生态（verl 积极适配 Ascend NPU），且正深度整合 SGLang、TensorRT-LLM 以解决多卡部署时的端口冲突、FP8 支持与可变 Batch 调度问题。

## 差异化定位分析
- **verl：生产级跨平台大算力底座**。凭借对异构算力（Ascend）和多元推理后端的广泛兼容，适合需要在大规模、非标准化集群上落地 LLM RLHF 的企业级研发团队。
- **TRL：前沿对齐算法的“快跑者”**。依托 Hugging Face 生态，拥有最强的新模型/新模板跟进速度，同时社区对底层数学实现的审计极其严格，是进行 RL 算法理论创新的优选。
- **AReaL：极端性能导向的集群榨取者**。通过 Megatron/FSDP 深度绑定与 GPU 显存共置技术，直指工业界大规模 RL 训练中最棘手的通信阻塞和存储开销问题。
- **slime：复杂分布式训练的破局者**。专注于解决 Megatron 架构下大模型 RL 训练的显存溢出痛点（如可变全局 Batch），并在解耦推理引擎方面提供了高阶的定制能力。
- **传统 RL 基石矩阵：标准化的教科书级实现**。这是当代 RL 算法（PPO, SAC, TD3）的黄金基准，当前主要聚焦于修复边缘环境 Bug 和完善文档，为具身智能和传统控制任务提供最可靠的算法支撑。

## 社区热度与成熟度
社区活跃高度集中于头部 LLM 对齐项目，且这些项目正处于“核心架构定调后的疯狂修补期”，体现了极高的工程成熟度：
- **问题追踪深度**：Issues 的讨论已脱离基础用法，直指 GRPO 优势值泄露、DAPO token级别 loss 等深水区算法逻辑，表明用户群体具备极高的专业素养。
- **工程完备性**：多国团队（阿里、字节等）均在大力重构底层 CI/CD（如 ROCK 的大规模网络验证），说明项目正从“实验室玩具”向“高可靠企业级平台”蜕变。
- **静默项目的成熟**：CleanRL、Tianshou 等项目的零动态，恰恰反映了其核心代码的高度成熟与 API 的长期稳定。

## 值得关注的趋势信号
1. **Agent RL 成为新竞技场**：针对 Qwen3.5 等 MoE 模型的多轮工具调用训练崩溃问题（如 verl #6252）开始占据核心 Issue，这预示着 RLHF 的主战场正在从单一的 Math/Code 推理向复杂的 Agent 交互场景转移。
2. **“显存级”通信重构浪潮**：基于网络和磁盘的权重同步正在被抛弃，通过 CUDA IPC 实现 Training 与 Inference 的显存级直接共置，将成为下一代大规模 RLHF 框架的标配。
3. **RL Ops 链路的闭环**：从 ROCK 的异步任务提交，到 AReaL 引入 Trackio 进行 Rollout 全链路追踪，构建完整的 LLMOps 可观测性与自动化调度闭环，正成为大模型 RL 基础设施建设的新护城河。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (Reinforcement Learning Open Source Framework) 项目 2026-05-24 RL 日报摘要：

### 1. 今日速览
- **Issues 更新**: 0 条
- **PR 活跃度**: 6 条（其中 1 条为功能性更新，5 条为 CI/测试维护）
- **新版本发布**: 0 个
- **核心动态**: 过去 24 小时项目开发重心集中在 **CLI 功能增强（非阻塞任务提交）** 以及 **自托管 Runner 的 CI 环境连通性验证**。

### 2. 版本发布
过去 24 小时内无新版本发布。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issue。

### 4. 关键 PR 进展
- **[#930 feat(cli): add --async flag to `job run` for non-blocking submit](https://github.com/alibaba/ROCK/pull/930)** [OPEN]
  - **作者**: berstpander
  - **摘要**: 为 `rock job run` 命令引入 `--async` 异步非阻塞标志。开启该标志后，CLI 将调用 `Job.submit()` 而非 `Job.run()`，并在退出前输出 `experiment_id`、`job_name` 和 `sandbox_ids`。此外新增了只读属性 `Job.sandbox_ids`。此特性极大优化了大规模 RL 任务的自动化脚本提交体验，原同步模式行为保持不变。

- **[#1009 test: add network reachability verification for CI](https://github.com/alibaba/ROCK/pull/1009)** [OPEN]
  - **作者**: 4ek0
  - **摘要**: 针对 CI 环境新增了网络连通性测试，专门用于验证在自托管 Runner（self-hosted runner）中内部服务的网络可达性。

- **[#1008 test: add network reachability verification for CI](https://github.com/alibaba/ROCK/pull/1008)** [CLOSED]
  - **作者**: 4ek0
  - **摘要**: 同上，为前序提交的冗余或测试 PR，已被关闭。

- **[#1007 test: add environment verification test](https://github.com/alibaba/ROCK/pull/1007)** [CLOSED]
  - **作者**: 4ek0
  - **摘要**: 添加了针对 CI 配置的基础运行环境验证测试。

- **[#1006 test: add environment verification test](https://github.com/alibaba/ROCK/pull/1006)** [CLOSED]
  - **作者**: 4ek0
  - **摘要**: 引入 `test_env_basic_info` 测试用例，用于校验 CI 环境的日期、主机名、当前用户及工作区路径。

- **[#1005 docs: test CI trigger](https://github.com/alibaba/ROCK/pull/1005)** [CLOSED]
  - **作者**: 4ek0
  - **摘要**: 用于测试 CI 流水线触发机制的常规检查，已完成并关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **工程化与自动化体验升级**：PR #930 的进展表明 ROCK 正在深度优化 CLI 的异步提交能力。在复杂的 RL 训练场景中，能否非阻塞地批量向集群/沙箱（Sandbox）提交 Experiment，是衡量一个 RL 基础设施是否成熟可用的重要标志。
2. **企业级基础设施保障**：开发者（4ek0）连续提交多个 PR 致力于完善自托管 Runner 的网络连通性和环境一致性验证。这说明项目正在构建高可靠性的持续集成流水线，以确保框架在海量算力节点上部署和测试时的稳定性。对于需要私有化部署和大规模分布式训练的 RL 团队而言，这种底层工程质量的投入极具参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-05-24 RL 日报摘要：

### 1. 今日速览
- **过去 24 小时动态**：无新增 Issue，无新版本发布，共有 4 个 Pull Requests 更新。
- **核心方向**：项目近期的代码提交和讨论高度聚焦于**底层训练工程的鲁棒性修复**与**高阶推理系统的解耦/定制化**。涉及 Megatron 大规模训练的批次调度优化、SGLang 推理引擎参数解析修复，以及定制化 Triton 推理服务（TIS）的 Hook 扩展。

### 2. 版本发布
过去 24 小时内无新版本发布。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issue。从近期的 PR 动态推断，社区当前的开发阻力主要集中在构建部署脚本的兼容性以及复杂训练/推理并行模式下的参数初始化问题。

### 4. 关键 PR 进展

- **[[OPEN] Support training with variable global batch size #1933](https://github.com/THUDM/slime/pull/1933)**
  - **作者**: zhuzilin
  - **摘要**: 引入对可变全局 Batch Size 训练的支持。这对 RLHF/RL 训练中的动态长度填充和显存管理至关重要，特别是为了适配 Megatron 级别的大规模分布式训练架构。

- **[[OPEN] Support custom rollout-proxy TIS hooks in bypass mode #1912](https://github.com/THUDM/slime/pull/1912)**
  - **作者**: sjtushenhai
  - **摘要**: 增强了推理部署的灵活性。在保留内置 Triton Inference Server (TIS) 行为的同时，允许在绕行模式下通过自定义 Hook 使用 `use_rollout_logprobs + use_tis`，并向下传递 `current_log_probs` 和 `advantages`。这为复杂的 RL Reward 计算和 Logprob 对齐提供了更友好的定制接口。

- **[[CLOSED] fix: guard sglang_speculative_algorithm read in --debug-train-only mode #1938](https://github.com/THUDM/slime/pull/1938)**
  - **作者**: leofan-lab
  - **摘要**: 修复了使用 `--debug-train-only` 模式时的报错问题。该模式下会跳过 SGLang 的 argparse 初始化，导致直接读取 `sglang_speculative_algorithm` 属性时抛出 `AttributeError`。此 PR 加强了纯训练调试模式的鲁棒性。

- **[[CLOSED] fix: quote nvidia-modelopt requirement in build_conda.sh #1927](https://github.com/THUDM/slime/pull/1927)**
  - **作者**: zhiminwei551
  - **摘要**: 修复了 `build_conda.sh` 构建脚本中的潜在 Shell 解析 Bug。使用引号包裹了 `nvidia-modelopt[torch]>=0.37.0`，防止 Shell 将 `>` 错误解析为标准输出重定向，确保版本约束条件能正确传递给 `pip`。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层基础设施的持续打磨**：从修复构建脚本的细节（#1927）到规避特定调试模式下的参数遗漏（#1938），表明该项目在工程化落地方面正在走向成熟，这对于需要长期稳定运行的 RL 训练任务尤为关键。
2. **解耦推理与训练引擎**：PR #1912 和 #1938 暴露出项目正在深度整合 SGLang 和 Triton 等高性能推理框架。支持自定义 Rollout Proxy Hooks 意味着 slime 正在为非标准的、复杂的 RL 算法（如依赖复杂 Reward 计算的变体）提供更灵活的底层支持。
3. **前沿分布式训练的探索**：支持可变全局 Batch Size（#1933）是解决大模型 RL 训练（如 PPO 算法中长短序列混杂导致显存溢出）痛点的核心特性，说明项目正在攻克大规模 LLM 强化学习训练的性能瓶颈。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理 **1** 个 Issue，**5** 个 Pull Requests 获得更新，无新版本发布。项目当前重点向**底层基础设施重构**（异步保存、CUDA IPC显存共置、磁盘权重同步）及**RL训练全链路可观测性**演进。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
- **[#1202](https://github.com/areal-project/AReaL/issues/1202) [CLOSED] `[bug, stale]` Single-controller SFT duplicates training tokens**
  单控制器 SFT 模式存在训练 Token 重复计算的缺陷。该 Bug 可稳定复现，目前已被贡献者提交修复并关闭。这提示在进行小规模 SFT 验证时需注意数据加载逻辑对 Token 计数的影响。

---

## 4. 关键 PR 进展
今日的 PR 动态主要集中于提升大规模 RL 训练中的异步处理能力、显存利用率和链路追踪能力：

- **[#1353](https://github.com/areal-project/AReaL/pull/1353) [CLOSED] refactor(infra): backport rl infra cleanup**
  基础设施清理与重构。引入了更健壮的 `AsyncRewardWrapper`（支持 atexit 共享执行器及 CAS 重建），统一了 HTTP 客户端，并强化了 `InfBridge` 的数据版本控制。增强了 RL 奖励模型异步计算的稳定性。

- **[#1356](https://github.com/areal-project/AReaL/pull/1356) [OPEN] feat(megatron): implement async_save with AsyncCallsQueue**
  基于 Megatron-Core 实现异步 Checkpoint 保存。通过复用 `AsyncCallsQueue`，解决了大模型训练过程中同步保存 Checkpoint 导致的严重阻塞问题，预计将显著提升整体训练吞吐量。

- **[#1361](https://github.com/areal-project/AReaL/pull/1361) [OPEN] feat(awex): FSDP colocate weight update via CUDA IPC**
  在 FSDP 训练引擎中引入基于 CUDA IPC 的权重共置更新机制。使得 FSDP 训练的模型能够通过共享 GPU 的显存直接更新 SGLang 推理引擎的权重，对齐了现有的 Megatron 路径，极大降低了 Generate 阶段的权重同步延迟。

- **[#1233](https://github.com/areal-project/AReaL/pull/1233) [OPEN] feat：Support LoRA incremental weight synchronization on disk for FSDP and SGLang**
  针对资源受限场景，实现了基于磁盘的 FSDP 与 SGLang 之间的 LoRA 增量权重同步。修复了 FSDP 下 LoRA 保存完整模型的问题，现可正确输出 PEFT Adapter，降低了轻量化 RLHF 微调的存储与通信开销。

- **[#1360](https://github.com/areal-project/AReaL/pull/1360) [OPEN] Add rollout trace logging with `trackio`**
  引入 HuggingFace `Trackio` 进行 RL Rollout 链路追踪。在现有指标监控的基础上，增加了对推理、动作、奖励等详细 Trace 的记录，大幅提升了复杂 RL 策略调试的可观测性。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
从近期的代码合并走向来看，AReaL 正在系统性地解决大语言模型强化学习（RLHF/RLAIF）的工程痛点：
1. **打破通信与 IO 瓶颈**：无论是通过 CUDA IPC 进行显存级权重更新（#1361），还是异步保存 Checkpoint（#1356），都在直击大模型 RL 训练中 Actor-Inferencer 之间沉重的通信与保存开销。
2. **计算与推理的深度融合**：深度绑定 SGLang 推理框架与 Megatron/FSDP 分布式训练框架，提供大集群规模下 Training 与 Inference 资源共置的完整工业级落地方案。
3. **完善 LLMOps 链路**：支持 LoRA 磁盘增量同步（#1233）与 Trackio 轨迹追踪（#1360），表明该项目在追求极致性能的同时，也在补齐 RL 实验的可复现性与可观测性。对于希望进行高效、大规模 LLM 对齐研究的开发者而言，AReaL 提供了极具参考价值的底层基座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习开源生态日报
**日期**: 2026-05-24 | **数据源**: [huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
过去 24 小时内，TRL 仓库共处理了 **3 个 Issues** 和 **6 个 Pull Requests**，无新版本发布。社区焦点集中在**大模型强化学习算法底层数学的准确性校验**（如 DAPO Loss 机制）、**前沿 SFT 训练范式的引入**（EAFT 与 Qwen3.5 模板支持），以及**多 GPU 环境下的保存逻辑修复**。

### 2. 版本发布
无最新 Releases。

### 3. 重点 Issues
- **[潜在算法级 Bug] DAPO token 级别损失实现问题**
  - **概览**: 开发者指出 TRL 当前在实现 DAPO（基于群体相对策略优化）的 token 级别 loss 时，采用了批次内所有 token 等同对待的方式。这与论文中“基于序列长度进行 loss 归一化”的思想可能存在偏差。
  - **标签**: `OPEN` | 👍: 0 | 评论: 6
  - **链接**: [huggingface/trl Issue #5375](https://github.com/huggingface/trl/issues/5375)
  - **分析**: 涉及底层策略梯度的计算准确性，对于 PPO/DPO 等对 loss 缩放极度敏感的 RLHF 算法而言，此类底层机制修正至关重要。

- **[已解决] 多 GPU/DeepSpeed 环境下 Checkpoint 保存 Bug**
  - **概览**: 在多卡训练中，如果输出目录包含状态依赖的变量（如时间戳），不同进程会产生冲突并错误管理 checkpoints。此 Issue 已于昨日更新并关闭。
  - **标签**: `CLOSED` | 标签: `[🐛 bug, ⚡ PEFT, 🚀 deepspeed]`
  - **链接**: [huggingface/trl Issue #3233](https://github.com/huggingface/trl/issues/3233)

*(注：另一则 Issue #4562 关于 GKD 跨 tokenizer 蒸馏 bug 伴随着相关修复 PR 的关闭而一同 CLOSED)*

### 4. 关键 PR 进展
- **[新特性] 引入 Entropy Adaptive Fine Tuning (EAFT)**
  - **概览**: 基于 LlamaFactory 的实现引入了 EAFT 算法（论文：2601.02151）。这允许开发者更精细地控制 SFT 阶段的模型熵，从而缓解灾难性遗忘。此 PR 的提交直接促成了早期重复 PR #4802 的关闭。
  - **状态**: `OPEN`
  - **链接**: [huggingface/trl PR #5823](https://github.com/huggingface/trl/pull/5823)

- **[工程优化] 适配 Qwen3.5 Think/NoThink 训练 Chat 模板**
  - **概览**: 为最新发布的 Qwen3.5 模型添加了“思考/不思考”模式的生成标记符和对话模板支持，打通了针对推理模型的 RL 训练流水线。
  - **状态**: `OPEN`
  - **链接**: [huggingface/trl PR #5824](https://github.com/huggingface/trl/pull/5824)

- **[Bug 修复] 修复 `metric_for_best_model` 引发 KeyError 的问题**
  - **概览**: 修复了在评估期间使用 `metric_for_best_model="eval_mean_token_accuracy"` 或其他训练器特定指标时抛出 `KeyError` 的问题。通过将 `logs = {**logs, **metrics}` 替换为 `logs.update(metrics)` 实现了原地更新修复。
  - **状态**: `CLOSED` (由核心开发者 qgallouedec 提交)
  - **链接**: [huggingface/trl PR #5811](https://github.com/huggingface/trl/pull/5811)

- **[多模态拓展] GOLDTrainer 视觉语言模型 (VLM) 支持**
  - **概览**: 为 GOLD（生成优化与学习）训练器增加了处理视觉语言模型的能力。
  - **状态**: `OPEN`
  - **链接**: [huggingface/trl PR #5461](https://github.com/huggingface/trl/pull/5461)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **LLM Reasoning 推理训练链路的快速迭代**: 今日 Qwen3.5 模板的快速适配（PR #5824）证明 TRL 正在第一时间跟进“Slow Thinking”和推理模型的 RL 训练需求。
2. **从纯 RL 向混合微调范式演进**: EAFT（熵自适应微调，PR #5823）的引入，标志着 TRL 不再仅仅是一个纯 PPO/DPO 算法库，而是向结合了 SFT 与 RL 优点的混合控制理论迈进，这对于工业界控制大模型对齐的边界具有重要价值。
3. **对底层算法严谨性的持续打磨**: DAPO Token Level Loss 的争议（Issue #5375）表明，社区正在对 RLHF 代码库进行逐行级别的数学审计，这对于消除黑盒对齐中的“隐蔽性 Bug”至关重要。

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

以下是为您生成的 verl 项目 RL 日报摘要（2026-05-24）：

### 1. 今日速览
过去 24 小时内，verl 生态保持较高活跃度。项目共处理 **2 条 Issues** 和 **9 条 Pull Requests**，无新版本发布。从提交内容来看，当前社区的重心集中在 **GRPO 算法的稳定性修复、多元异构算力后端（Ascend/Remote Backend）的适配、SGLang/TRT-LLM 推理引擎的部署优化**，以及 **CI/CD 流水线的维护**上。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
今天更新的两个 Issue 均为当前 RL 训练中极具代表性的难题：**复杂 Agent 场景下的模型崩溃**与**策略发散（熵爆炸）**。

- **[#6252](https://github.com/verl-project/verl/issues/6252) [OPEN] Qwen3.5/Qwen3.6 35B-A3B 多轮工具调用 Agent RL 训练崩溃**
  - **作者**: DBMing | **👍**: 0 | **评论**: 12
  - **摘要**: 在使用 verl v0.7.1 对 Qwen3.5/3.6 35B MoE 模型进行多轮工具调用 Agent RL 训练时发生崩溃。现象表现为训练至 80-130 step 后，模型生成的工具调用格式急剧恶化，malformed tool calls 激增并最终导致训练中断。该 Issue 反映了当前 RLHF 在复杂 Agent 任务中动作空间约束的脆弱性。
- **[#2738](https://github.com/verl-project/verl/issues/2738) [OPEN] 训练过程中熵意外增加的原因探讨**
  - **作者**: niuwz | **👍**: 2 | **评论**: 11
  - **摘要**: 在使用 GRPO 算法进行数学任务训练时，观察到策略网络的熵在特定阶段突然飙升并导致崩溃。尽管尝试了更换数据集、降低学习率和增加 KL 惩罚等常规手段，问题依然存在。这是 LLM 强化学习中典型的 reward hacking 或策略退化现象，引起了社区的持续探讨。

### 4. 关键 PR 进展
今日的 9 条 PR 覆盖了后端重构、算法修补、推理引擎优化及 CI 测试，其中几项核心进展如下：

- **[#6422](https://github.com/verl-project/verl/pull/6422) [OPEN] [trainer] feat: 通用远程后端抽象**
  - **作者**: sfc-gh-truwale
  - **摘要**: 抽象出通用的 Remote Backend 架构，并提交了 ArcticRL 的后端实现实例。该 PR 旨在提升 verl 在分布式、异构集群环境下的 RL 训练扩展能力。
- **[#6452](https://github.com/verl-project/verl/pull/6452) [OPEN] [algo] fix: 修复 GRPO 中 group advantages 的 rollout rejected rows 问题**
  - **作者**: haoyang9804
  - **摘要**: 修复了一个隐蔽的 GRPO 优势值泄露 Bug。当 rollout 阶段的拒绝采样将同一 prompt 组内的所有响应全部拒绝时，会引起计算异常。该 PR 提供了一个更通用的补丁。
- **[#6316](https://github.com/verl-project/verl/pull/6316) [OPEN] [Ascend] [ci, trainer] fix: 修复 mindspeedllm 后端代码与脚本**
  - **作者**: pengnuoheng
  - **摘要**: 针对华为 Ascend NPU 的 mindspeedllm 后端修复了代码、运行脚本及 ST 测试。体现了 verl 向国产多元异构算力生态的持续移植与兼容努力。
- **[#6448](https://github.com/verl-project/verl/pull/6448) [OPEN] [sglang, rollout] fix: 为每个 SGLang 副本分配独立端口**
  - **作者**: dafu-wu
  - **摘要**: 修复在单节点多 GPU 环境下（如 8×H100 运行 4 个 TP=1 的 SGLang 副本）启动时的 `EADDRINUSE` 端口冲突问题。通过为不同副本分配独立端口，避免了 NCCL 端口派生时的网络错误。
- **[#5920](https://github.com/verl-project/verl/pull/5920) [OPEN] [fsdp] feat: 为 Qwen3.5 fsdp grpo 训练添加 SP 支持**
  - **作者**: Zhang1Sheng
  - **摘要**: 增加对 Qwen3.5 模型在 FSDP 框架下 GRPO 训练的 Sequence Parallelism (SP) 支持，旨在降低显存峰值，提升长上下文训练的效率。
- **其他基础设施与重构 PR**：
  - [#6445](https://github.com/verl-project/verl/pull/6445): 清理过时的 Qwen2_5_vl 模型代码实现。
  - [#6451](https://github.com/verl-project/verl/pull/6451): 修复 CI 测试过程中的 OOM（显存溢出）问题。
  - [#6450](https://github.com/verl-project/verl/pull/6450): 建立并跑通 nightly CI 的基线测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 RL 算法深水区**：正如今天的 Issue 所揭示的，业界正从简单的单轮对话 RLHF 转向复杂的“多轮工具调用 Agent RL”。verl 社区正在直面并解决格式崩溃、优势值泄露和策略熵爆炸等底层的 RL 算法痛点。
2. **卓越的底层架构与工程化能力**：通过抽象 Remote Backend 和支持 FSDP 的 Sequence Parallelism，verl 正在构建能支撑大规模、高并发分布式训练的坚实底座。
3. **极致的推理与算力兼容性**：项目紧密跟进 SGLang、TensorRT-LLM 等前沿推理引擎的部署细节（如端口冲突、FP8 异步支持），并积极适配 Ascend 等非 Nvidia 算力底座。这使 verl 成为一个真正意义上跨平台、生产级可用的开源 RL 框架。

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

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报：Gymnasium 生态追踪 (2026-05-24)

## 1. 今日速览
过去 24 小时，Gymnasium 仓库整体活动趋于平稳。无新版本发布，无新增 Issues，仅有 1 条处于 OPEN 状态的新 PR。社区当前的重心向**文档完善与降低用户上手门槛**倾斜。

## 2. 版本发布
无。
近 24 小时内 Farama-Foundation/Gymnasium 未发布任何新版本。

## 3. 重点 Issues
无。
过去 24 小时内无新增或更新的 Issues。底层 API 与核心环境运行稳定，未暴露出新的技术阻碍或功能请求。

## 4. 关键 PR 进展
- **[#1584 [OPEN] docs: add MuJoCo parameter customization tutorial](https://github.com/Farama-Foundation/Gymnasium/pull/1584)**
  - **作者**: Lonny154
  - **摘要**: 该 PR 补充了一份面向新手的 MuJoCo 环境参数定制教程。文档以 `HalfCheetah-v5` 环境为例，演示了如何通过 `gym.make()` 的关键字参数（kwargs）动态修改 `ctrl_cost_weight`（控制代价权重），并在固定随机种子（seed）的对照实验下，直观展示了参数变化对奖励函数（reward components）各项数值的影响。
  - **生态价值**: 此类教程填补了新手从“跑通默认环境”到“进行环境超参数调优”之间的文档空白，进一步巩固了 Gymnasium 作为 RL 环境标准化接口的地位。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 作为现代强化学习的事实标准 API，其核心架构已高度成熟。从今日的 PR 动态可以看出，项目正处于**“深耕文档与用户体验”**的成熟演进期。提供如 MuJoCo 参数定制这类底层实操教程，意味着项目正在为算法研究员扫清环境配置的底层障碍，使其能更专注于 RL 算法本身的策略优化。持续关注 Gymnasium 的最新 PR 和文档更新，是跟进 RL 社区最佳实践和标准化环境构建范式的重要窗口。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# 🤖 RL 生态日报：Stable Baselines3 (SB3)
**数据统计周期**：2026-05-23 08:00 UTC — 2026-05-24 08:00 UTC

---

### 1. 今日速览
过去 24 小时，SB3 核心仓库整体处于低活跃的静默维护状态。无新代码合并，无新版本发布。唯一的动态集中在历史遗留的渲染测试 Bug 的跟进上。

### 2. 版本发布
**无新版本发布**。
当前仓库仍维持在最近的稳定版本。核心 API 和算法库保持稳定，无突发 Breaking Changes。

### 3. 重点 Issues
- **#2255 [Bug]: Render Tests Failure (SDL_RumbleMotor Deps Duplicate)** [🔗 GitHub Issue #2255](https://github.com/DLR-RM/stable-baselines3/issues/2255)
  - **状态**: Open
  - **作者**: jvoids (创建于 2026-05-12，昨日有新评论更新)
  - **技术细节**: 用户报告在运行 `tests/test_vec_envs.py::test_render` 测试用例时发生失败。根据报错信息（涉及 `SDL_RumbleMotor` 重复依赖），推测该 Bug 并非由 SB3 自身代码变更引起，而是由于底层依赖（如 `pygame` 或 `SDL2` 库）的版本更新导致依赖冲突或 API 变动，从而引发原本正常的渲染测试流水线报错。
  - **影响范围**: 不影响核心 RL 算法的训练与推理，但对 CI/CD 测试流水线及需要依赖底层环境渲染的开发者有一定影响。

### 4. 关键 PR 进展
**无活跃 PR**。
过去 24 小时内没有新增或更新的 Pull Request。目前项目处于代码冻结或维护者审阅的空窗期。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管今日数据较为平淡，但 SB3 在当今快速演进的 RL 开源生态中依然具有不可替代的基石地位：
1. **算法实现的“黄金标准”**：SB3 提供了 PPO, SAC, TD3 等主流 RL 算法的极其严格且高度一致的实现。它的代码库是绝大多数 RL 研究者进行 Baseline 对比和消融实验的首选。
2. **极高稳定性与生态兼容性**：其配套的 `sb3-contrib` 和 `Stable-Baselines3-Zoo` 生态极其成熟。正如今天的 Issue 所示，项目目前的焦点已经是解决极端边缘情况（如底层 SDL 渲染依赖冲突），而非修补核心算法逻辑，这证明了其核心代码的鲁棒性。
3. ** Gymnasium 生态的底层基石**：在与 Farama 基金会的 `Gymnasium` API 深度绑定后，SB3 成为了连接环境定义与上层算法的标准化桥梁，任何从事具身智能、机器人控制的研究者，SB3 依然是绕不开的核心工具。

</details>