# RL 开源生态日报 2026-07-18

> 生成时间: 2026-07-17 22:13 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态已彻底完成从“传统单 agent 强化（如 Gym/DQN）”向“大模型对齐与强化微调（RLHF/RLAIF）”的重心转移。从 2026 年 7 月 18 日的数据来看，头部开源项目（TRL、verl、AReaL）全面进入深水区：攻坚多模态 VLM 训练、千卡级异构算力通信与同步、异步训练架构解耦。同时，传统 RL 环境（Gymnasium）及经典算法库（SB3）退居幕后，专注于底层物理引擎依赖的现代化与严谨性修复。

## 各项目活跃度对比
今日具有代码提交或 Issue/PR 变动的项目共 9 个，其余项目处于静默期。活跃度呈现显著的阶梯状分布：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 11 | 35 | 0 | 扛鼎多模态与异步 GRPO 工程化，高频修缺 |
| **verl** | 3 | 22 | 0 | 深度攻坚分布式通信与国产异构算力支持 |
| **AReaL** | 2 | 5 | 0 | 紧跟前沿基座模型（GLM-5/DeepSeek-V3）适配 |
| **Open Instruct** | 0 | 4 | 0 | 布局下一代算力集群（B300），打磨容错基建 |
| **Gymnasium** | 1 | 2 | 0 | 探索纯 Python 物理引擎迁移，清理底层技术债 |
| **slime** | 1 | 2 | 0 | 拥抱国产 GPU（MUSA），精细化 Token 级精度 |
| **OpenRLHF** | 0 | 1 | 0 | 修复底层 Checkpoint 存储与 I/O 痛点 |
| **ROCK** | 0 | 1 | 0 | 推进代码执行沙盒与微服务架构解耦 |
| **Stable Baselines3** | 1 | 0 | 0 | 发现并修正在多环境随机种子分配的统计缺陷 |
| *其他无活动项目* | *CleanRL, PettingZoo, rl_games, ROLL, Tianshou, torchtune* | - | - | - | *处于常规维护或迭代静默期* |

## 共同关注的研究与工程方向
生态的演进正高度聚焦于解决大规模 LLM 训练的“Painful Points”，主要分为两大阵营：

- **研究侧信号：前沿 RLHF/RLAIF 算法与多模态对齐**
  - **多模态 RL 训练**：VLM 结合 GRPO 的训练流正在爆发。如 TRL 集中解决 Qwen VLM 中多轮工具调用导致的视觉塔崩溃、M-RoPE 静默损坏等问题；AReaL 也新增了 Qwen3.6 的 LoRA GRPO 支持。
  - **复杂推理与 Agentic 长轨迹**：长视距 RL 任务（如基于 SWE-bench 的代码生成）和多轮 tool-call 中的 Reward token 对齐（如 slime 的 BPE 合并掩码处理）成为算法调优的核心。
  - **新算法工程化**：DAPO/CISPO 等前沿 Loss 算法正快速被各大框架（如 TRL, verl）吸收并修复计算缺陷。

- **工程/基础设施侧信号：算力墙破局与系统级容错**
  - **通信与显存极致优化**：为打破大模型 RL 的墙钟时间瓶颈，针对非耦合异步训练的稀疏权重同步（verl 的 `delta_sharded`）、跨秩指标聚合纠偏（TRL）成为重点。
  - **下一代与异构硬件支持**：对 NVIDIA 下一代 B300 GPU (Open Instruct/CUDA 13.0)、华为昇腾 NPU（verl MoE 状态刷新）、摩尔线程 MUSA（slime）的支持正全面铺开。
  - **系统鲁棒性与 I/O**：算力昂贵，容错成为刚需。包括启动阶段的 Fast-Fail（AReaL）、HF 格式 Checkpoint 轮转清理防止磁盘溢出，以及分布式训练的图安全重载。

## 差异化定位分析
尽管同属 RL 生态，各项目已形成清晰的护城河与定位分化：
- **TRL**：充当最上层的“通用 RL 调度引擎”。它正从一个单纯的对齐训练器，演进为结合 `SandboxEnvironment`、兼容多方推理后端（vLLM 0.25+）的胶水层，主打紧跟学术前沿与敏捷开发。
- **verl**：定位为“系统级底层大模型 RL 基础设施”。其核心壁垒在于对 Megatron/FSDP 等分布式切分的深水区掌控，以及对参数同步通信开销的工业级优化。
- **AReaL / slime**：作为紧贴国产大模型生态（GLM、DeepSeek、Qwen）的验证试验田，侧重于通过 `megatron-bridge` 快速泛化新架构模型，且在国产算力适配上走在前列。
- **OpenRLHF / Open Instruct**：更加专注于底层调度容错与系统鲁棒性本身，强调大规模数据吞吐和实验环境隔离。
- **Gymnasium / SB3**：坚守传统 RL 与具身智能底座，致力于解决物理引擎（MuJoCo/Box2D）渲染控制权、环境种子隔离等底层细节问题。

## 社区热度与成熟度
整体生态已完全跨越“概念验证期”，步入工业级成熟期：
1. **报错粒度极度下沉**：从前两年的 API 报错，演进为今日极其底层的报障（如 NCCL broadcast 等待逻辑、VocabParallelEmbedding 确定性模式、CSV 追加写入 Header 等），证明大规模落地已成常态。
2. **重视生命周期管理**：TRL 严格执行 vLLM 依赖版本切割，OpenRLHF 关注 ckpt 的磁盘生命周期，说明项目组开始系统性治理技术债。
3. **Issue 质量提升**：像 SB3 报出的多环境伪随机数跨轮次重叠问题，直击算法评估的统计学可靠性核心，体现了社区极高的工程严谨度。

## 值得关注的趋势信号
1. **异步 RL 的工程爆发**：`AsyncGRPOTrainer`（TRL）与非耦合异步训练（verl）正在成为标配，这是突破生成与训练算力互相阻塞的必由之路。
2. **执行环境与训练器的彻底解耦**：引入标准化的代码执行沙盒（如 TRL 的 `SandboxEnvironment`，ROCK 的 `OpenSandbox runtime`）成为新趋势。这将极大赋能 Agentic RL 中对于工具调用与代码反馈的安全调度。
3. **MoE 架构与 RL 的深度融合**：从 AReaL 引入 Bailing-MoE V2.5，到 verl 修复 NPU MoE 状态刷新，混合专家模型在强化学习阶段的通信与显存挑战正被逐一击破。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 强化学习生态日报 | 2026-07-18

## 1. 今日速览
过去 24 小时内，[alibaba/ROCK](https://github.com/alibaba/ROCK) 仓库活跃度相对平缓，无新增 Issue 或版本发布。项目持续进行底层架构的迭代与合并，今日有 1 个核心功能 PR 正式关闭。

## 2. 版本发布
- **无新版本发布**。近期项目仍处于主线代码的积累与架构优化阶段。

## 3. 重点 Issues
- **无新增或更新的 Issue**。社区当前无未解决的公开技术讨论或 Bug 反馈。

## 4. 关键 PR 进展
今日有 1 项关键底层逻辑 PR 更新并已关闭（CLOSED）：

- **[#1233] feat(proxy): add OpenSandbox runtime backend**
  - **作者**: zpzjzj
  - **时间**: 创建于 2026-07-13，更新于 2026-07-17
  - **摘要**: 本 PR 重构了现有的 Rocklet HTTP 路径，将其抽离至 runtime backend 接口之后。核心工作是通过 OpenSandbox SDK 路由相关的命令、文件、流式上传以及单沙盒状态操作。同时，代理了沙盒的 HTTP 和 WebSocket 服务，使其通过 SDK 解析的端点提供服务，并支持平滑/强制关机等生命周期管理。
  - **链接**: [alibaba/ROCK PR #1233](https://github.com/alibaba/ROCK/pull/1233)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的大规模强化学习（RL）训练与 Agent 生态中，**代码执行沙盒（Sandbox）** 的安全性与调度效率是核心瓶颈。ROCK 通过引入 [OpenSandbox](https://github.com/alibaba/ROCK/pull/1233) 运行时后端，展示了其在**底层计算环境解耦**与**微服务代理架构**上的持续演进能力。
这种将执行环境统一接口化（支持通过 SDK 管理文件流、状态机及网络代理）的技术路线，能够为 RLHF、Agent 自主探索等场景提供极其标准、隔离且高可用代码执行环境。随着多模态及强化学习 Agent 对复杂环境交互需求的暴增，ROCK 在 sandbox 底层调度上的深水区探索，使其成为构建高鲁棒性 RL 基础设施的关键项目。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime (THUDM/slime) RL 生态日报 - 2026-07-18**

### 1. 今日速览
过去 24 小时内，slime 项目整体活跃度平稳。共产生 **0** 个新版本发布，**1** 条 Issue 更新，以及 **2** 条 PR 更新。今日的开发重心主要集中在**异构硬件（MUSA）后端支持**的拓宽，以及**评测工具链 token 级别精度**的修复，同时社区出现了关于最新 GLM5.2 模型兼容性的 Bug 反馈。

### 2. 版本发布
*   **今日无新版本发布。**（当前社区使用仍以 0.3.0 release 版本为主，部分新特性需切至 main 分支）

### 3. 重点 Issues
*   **[Bug] GLM5.2 模型转换时报错** (`#2215`)
    *   **链接:** [THUDM/slime Issue #2215](https://github.com/THUDM/slime/issues/2215)
    *   **详情:** 开发者在将 slime 升级至 main 分支以获取 GLM5.2 支持时，遇到了模型转换报错。该问题反映了 slime 在混用 `main` 分支代码与 `0.3.0` 版本周边组件时可能存在的兼容性割裂，目前亟待社区确认转换脚本的具体报错链路。

### 4. 关键 PR 进展
今日的 2 个 PR 显著提升了 slime 在多硬件平台跑通 RL 流程的兼容性与准确度：
*   **feat: add backend-aware MUSA support** (`#2216`)
    *   **链接:** [THUDM/slime PR #2216](https://github.com/THUDM/slime/pull/2216)
    *   **详情:** 引入了针对摩尔线程（Moore Threads GPU, MUSA）的后端感知支持。该 PR 在保留原有 CUDA 执行路径的基础上，集中处理了当前 Megatron-LM 和 SGLang 集成所需的 MUSA 适配代码。这对于 RL 框架突破单一 NVIDIA 硬件生态、实现国产化算力落地具有重要意义。
*   **Fix tau-bench token deltas for reasoning templates** (`#2213`)
    *   **链接:** [THUDM/slime PR #2213](https://github.com/THUDM/slime/pull/2213)
    *   **详情:** 修复了使用 Qwen3 重写推理内容时 tau-bench 的 token 增量计算问题。该 PR 精细化处理了多轮对话中 assistant 生成前缀的保留逻辑，对生成前缀 token 掩码置 0、生成续写 token 掩码置 1，并处理了跨生成前缀的合法 BPE 合并。这直接解决了复杂推理模型在 RL 训练中 Reward 计算的 token 对齐痛点。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **紧跟前沿模型迭代：** 社区已开始高频适配 GLM5.2、Qwen3 等最新一代具备强推理能力的基座模型，证明 slime 在大模型 RL 微调对齐上的反应速度极快。
2.  **底层 Token 级训练精度的打磨：** 从 PR #2213 对 Reasoning templates 下复杂 token deltas 和 BPE 合并的精细 Mask 处理可以看出，slime 正在死磕多轮对话及推理模型 RL 训练中极易出现的“精度漂移”问题，这是决定 RLHF/RLAIF 效果的核心壁垒。
3.  **多底层后端的解耦与泛化：** PR #2216 对 MUSA 的支持表明 slime 正在构建 backend-aware 的底层架构。在算力多元化的当下，能够无缝集成 Megatron-LM 和 SGLang 并跑通在不同异构硬件上的 RL 框架，具备极强的产业落地价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-07-18）：

# AReaL 强化学习生态日报（2026-07-18）

## 1. 今日速览
过去 24 小时，AReaL 仓库动态以**底层训练基建优化**与**前沿大模型兼容性扩展**为主。共更新 5 条 PR，0 个新版本发布。维护者集中修复了引擎初始化与底层算法的 Deterministic（确定性）问题，并持续推进了对 GLM-5、DeepSeek-V3 等新一代模型的适配。

## 2. 版本发布
- **今日无新版本发布 (0 Releases)**。

## 3. 重点 Issues
今日有 2 条 Issue 因长期未活跃被标记为 `[stale]` 并关闭，反映了项目组对看板 backlog 的定期清理机制。
- **[CLOSED] [Feature] Operator CLI (`areal`) for the v2 microservice architecture** | 作者: sitabulaixizawaluduo
  - **摘要**: 探讨为 v2 微服务架构（推理、Agent、权重更新、训练完全解耦）提供统一的 CLI 操作工具。该需求后续可能已通过其他方式合并或暂缓。
  - 🔗 [areal-project/AReaL Issue #1374](https://github.com/inclusionAI/AReaL/issues/1374)
- **[CLOSED] [Question] Example for training on SWE (agentic software-engineering) tasks?** | 作者: dipta007
  - **摘要**: 社区询问如何基于 SWE-bench / SWE-Gym 等多轮 Agentic 软件工程任务进行 GRPO 训练（涉及长轨迹、工具调用及测试通过率作为 Reward 的映射）。此类长视距 RL 任务是当前社区关注的痛点。
  - 🔗 [areal-project/AReaL Issue #1394](https://github.com/inclusionAI/AReaL/issues/1394)

## 4. 关键 PR 进展
今日的 PR 主要集中在**训练排障优化**、**MoE 架构支持**与**端到端 LoRA GRPO**：

- **#1545 [OPEN] fix(infra): fail fast when a local inference server dies during launch** | 作者: Le8r0nJames
  - **进展**: 修复了本地推理服务器在启动阶段崩溃（如端口冲突、OOM、调度器错误）时，启动器依旧无意义轮询直至超时的问题。加入了对进程句柄的检测，实现快速失败，大幅提升分布式 RL 启动排障效率。
  - 🔗 [areal-project/AReaL PR #1545](https://github.com/inclusionAI/AReaL/pull/1545)
- **#1544 [OPEN] fix(engine): engage Megatron deterministic mode before model build** | 作者: Le8r0nJames
  - **进展**: 修复了 Megatron 确定性模式未完全生效的 Bug。原逻辑在模型构建后才应用配置，导致 `VocabParallelEmbedding` 等组件在初始化时未能正确复制确定性设置，现调整为模型构建前生效。
  - 🔗 [areal-project/AReaL PR #1544](https://github.com/inclusionAI/AReaL/pull/1544)
- **#1372 [OPEN] feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter** | 作者: dingzhiqiang
  - **进展**: 为 Bailing-MoE V2.5 家族引入双桥接支持，在原有 `mbridge` 之外，新增了 NVIDIA `megatron-bridge` 适配器，提升了分布式训练后端的灵活性。
  - 🔗 [areal-project/AReaL PR #1372](https://github.com/inclusionAI/AReaL/pull/1372)
- **#1373 [OPEN] feat(mcore): add GLM-5/DeepSeek-V3 model support** | 作者: dingzhiqiang
  - **进展**: 核心特性扩展。为 AReaL 引入了 GLM-5.1、DeepSeek-V3、GLM-4.7-Flash 三种全新模型架构的支持，并覆盖了 `mbridge` 与 `megatron-bridge` 双路径。
  - 🔗 [areal-project/AReaL PR #1373](https://github.com/inclusionAI/AReaL/pull/1373)
- **#1444 [OPEN] feat(vlm): add Qwen3.6 LoRA GRPO training support** | 作者: Lei00764
  - **进展**: 扩展了视觉语言模型（VLM）的强化学习能力，新增对 Qwen3.6 系列模型（27B Dense 及 35B-A3B MoE）的 LoRA GRPO 训练支持，底层结合 SGLang 推理后端与 FSDP 策略。
  - 🔗 [areal-project/AReaL PR #1444](https://github.com/inclusionAI/AReaL/pull/1444)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟最前沿的底层模型生态**：AReaL 不仅仅是算法框架，其正积极适配最新一代的基础模型（如 GLM-5、DeepSeek-V3、Qwen3.6 MoE），这表明其在强化学习与 LLM/MoE 结合的工程化落地方面处于第一梯队。
2. **攻坚决断与调试痛点**：通过 PR #1544 和 #1545 可以看出，维护团队在死磕大规模分布式训练中极易踩坑的环节——如 Megatron 底层算子的确定性校验、微服务架构下的启动 Fail-Fast 机制。这些底层基建的完善，是保障大规模 RLHF/GRPO 训练稳定运行的核心壁垒。
3. **对齐前沿 RL 研究范式**：支持多模态（Qwen3.6 VLM）结合 LoRA 的 GRPO 训练，以及社区对于 SWE-bench 等长轨迹 Agentic RL 任务的持续关注，意味着 AReaL 正在成为复杂智能体强化学习的综合试验田，非常值得算法工程师与系统工程师长期跟踪。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这里是为您生成的 2026-07-18 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

### 1. 今日速览
- **Issue 动态**：更新 11 条（5 条 Open，6 条 Closed）。
- **PR 动态**：更新 35 条（活跃提交主要集中在 vLLM 适配、GRPO/VLM 修复与 AsyncGRPO 的对齐）。
- **新版本发布**：0 个。目前处于常规迭代与错误修复周期。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
今日社区的报错反馈高度集中在 **GRPO + 视觉语言模型（VLM）** 以及 **底层分布式/推理引擎的兼容性** 上。

*   **[Bug] GRPO 多轮工具调用破坏 Qwen VLM 训练** ([#6274](https://github.com/huggingface/trl/issues/6274))
    *   **摘要**：在 Qwen VLM 的 GRPO 训练中，当工具调用返回图像并触发下一轮生成时，导致视觉塔崩溃。根因在于 `_tool_call_loop` 中对 `pixel_values` 的切片索引错误。
*   **[Bug] GRPO VLM 共置模式下的预处理对齐问题** ([#6401](https://github.com/huggingface/trl/issues/6401))
    *   **摘要**：在 vLLM `colocate` 模式下，预分词的 prompt IDs 与原始图像交接时与 vLLM 内部预处理未对齐，导致 M-RoPE 崩溃或静默 prompt 损坏。
*   **[Bug] 损失分母计算缺陷** ([#6369](https://github.com/huggingface/trl/issues/6369))
    *   **摘要**：发现 DAPO/CISPO/VESPO 等 loss 计算中，分母未正确响应 `mask_truncated_completions`（截断补全排除）标志，导致最终 Loss 计算产生偏差。
*   **[历史修复] GKD + FSDP 设备冲突** ([#2580](https://github.com/huggingface/trl/issues/2580))
    *   **摘要**：长期存在的 GKDTrainer 结合 FSDP 时多卡设备（cpu/cuda）张量不一致的 RuntimeError 已关闭。

### 4. 关键 PR 进展
官方维护者（如 `qgallouedec`, `albertvillanova`）今日进行了高频的技术修缮，重点推进异步训练、分布式指标聚合以及底层依赖版本切割。

*   **[核心功能] 异步 GRPO 架构大修** ([#6377](https://github.com/huggingface/trl/pull/6377), [#6378](https://github.com/huggingface/trl/pull/6378))
    *   **摘要**：对齐 `AsyncGRPOTrainer` 的参数处理；剔除冗余指标守卫；合并训练初期的权重同步与 Rollout 启动回调，简化异步训练底层逻辑。
*   **[指标修复] 修复跨秩指标聚合偏差** ([#6380](https://github.com/huggingface/trl/pull/6380))
    *   **摘要**：修复了 GRPO/RLOO 中 `kl`、`entropy` 等核心指标在“不同 rank token 数量不同”时计算均值的系统性偏差，确保全局均值的精确性。
*   **[架构解耦] 引入环境归属机制** ([#6349](https://github.com/huggingface/trl/pull/6349), [#6358](https://github.com/huggingface/trl/pull/6358))
    *   **摘要**：新增 `trl.environments` 子模块（首发 `SandboxEnvironment`）。允许 `environment_factory` 接管数据，使得 `train_dataset` 变为可选。这极大增强了强化学习环境流的定制化能力。
*   **[兼容性] 放弃 vLLM 0.16，拥抱 0.25** ([#6404](https://github.com/huggingface/trl/pull/6404), [#6406](https://github.com/huggingface/trl/pull/6406))
    *   **摘要**：严格执行依赖版本生命周期管理，将 vLLM 基础支持版本提至 0.17.0，并向上适配了 0.25.0/0.25.1 版本。
*   **[模型支持] 新增 LFM2 架构测试** ([#6428](https://github.com/huggingface/trl/pull/6428))
    *   **摘要**：针对 LiquidAI 的 LFM2/LFM2.5 模型（每周约 1000 次训练运行）补充了原生架构测试支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的数据可以清晰看出，TRL 正在快速吸收并解决大模型前沿训练中最 Painful 的工程痛点：
1. **紧跟前沿算法工程化**：不仅支持 GRPO，还在快速迭代异步 GRPO（AsyncGRPOTrainer）、DAPO/CISPO 等最前沿的 RLHF/RLAIF 算法，并且敢于重构核心代码。
2. **攻坚多模态 RL 训练**：多轮 Tool Call 与 VLM（如 Qwen-VL）结合导致的数据流对齐崩溃是当前业界的顶级工程难题。TRL 正在集中精力（如一天内多个 PR）修复 Tensor 切片与底座推理引擎的预处理冲突。
3. **架构与环境的深度解耦**：引入 `SandboxEnvironment` 并将数据集解耦为可选参数，意味着 TRL 正从一个单纯的“对齐训练器”向“通用强化学习调度引擎”演进，这对未来结合外部复杂环境（如 Agent 沙箱）具有决定性意义。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 OpenRLHF 项目 2026-07-18 强化学习（RL）生态日报摘要：

# OpenRLHF RL 生态日报 (2026-07-18)

## 1. 今日速览
OpenRLHF 仓库在过去 24 小时内整体活跃度趋于平稳，无新增 Issue 或版本发布。开发重点集中在底层存储逻辑的优化与 Bug 修复上，提交了 1 个关键 PR，旨在解决 Hugging Face 格式模型导出时的磁盘空间挤占问题。

## 2. 版本发布
- **无新版本发布**。近期项目仍保持稳定迭代状态。

## 3. 重点 Issues
- **无新增或更新的 Issue**。

## 4. 关键 PR 进展
- **PR #1265 [OPEN] fix: apply ckpt.max_num rotation to HF checkpoint exports (*_hf)**
  - **作者**: konghw-git
  - **链接**: [OpenRLHF/OpenRLHF PR #1265](https://github.com/OpenRLHF/OpenRLHF/pull/1265)
  - **技术摘要**: 
    目前 `save_ckpt` 机制会根据 `--ckpt.max_num` 或 `--ckpt.max_mem` 参数对 DeepSpeed 格式的检查点（Checkpoints）执行轮转（rotation）清理。但是，当使用 `--ckpt.save_hf` 导出 Hugging Face 格式的模型（`{ckpt.path}/{tag}_hf` 目录）时，却缺失了这套轮转机制。
    由于每一份导出都是完整的 bf16 权重副本（例如 4B 模型约占用 8GB，8B 模型约占用 16GB），在长时间的 RL 训练中，这些未被清理的导出文件会悄无声息地耗尽磁盘空间。该 PR 旨在将轮转逻辑同步应用到 `_hf` 导出目录，防止由于存储溢出导致的训练崩溃。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前大模型强化学习对算力与存储要求极高的背景下，OpenRLHF 展现了极高的工程严谨性。正如 PR #1265 所揭示的，在动辄数十亿参数的模型（如 4B/8B）的 RL 训练中，检查点的 I/O 效率和空间管理是极度核心的工程痛点。OpenRLHF 团队持续在底层对接（如 DeepSpeed）和上层格式转换（如 HF 格式）之间做细粒度的资源适配与优化。关注 OpenRLHF 的代码进展，能够为其他 RL 研究者和工程师在构建高可用、防崩溃的大规模分布式训练管线时，提供极具价值的工程参考与避坑指南。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

这里是 2026 年 7 月 18 日的 verl (volcengine/verl) 强化学习开源生态日报摘要。

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **3 条 Issues** 和 **22 条 Pull Requests**，无新版本 Release 发布。近期的开发活动高度聚焦于底层训练精度与通信优化（如 NCCL 同步、权重稀疏同步）、异构硬件支持（华为 Ascend NPU）、DAPO 算法完善，以及 LoRA/FSDP2 检查点机制的健壮性提升。

### 2. 版本发布
**无新版本发布。**

### 3. 重点 Issues
*   **[Bug] Docker 环境缺失 Megatron.bridge 模块** ([#7071](https://github.com/verl-project/verl/issues/7071))
    *   **概述**：用户反馈在 Win11 环境下使用官方 Docker 镜像（如 `verlai/verl:sgl0512.dev2`）时，出现 `ModuleNotFoundError: megatron.bridge` 报错。
*   **[Util] 注意力工具函数存在冗余的硬件分发** ([#7088](https://github.com/verl-project/verl/issues/7088))
    *   **概述**：开发者指出 `attention_utils.py` 中的 `index_first_axis` 和 `pad_input` 仅使用纯 Python 算子，无需针对 NPU 进行特殊的硬件调度分发，建议简化以提高执行效率。
*   **[Chore] 同步训练器 CI 引入 SkipManager** ([#7007](https://github.com/verl-project/verl/issues/7007)) - *[已关闭]*
    *   **概述**：完成并关闭了在 sync trainer CI 中启用 SkipManager 并适配 `param_sync_step` 的任务。

### 4. 关键 PR 进展
今日的 PR 更新展现了 verl 在处理大规模分布式训练和前沿 RL 算法上的深水区探索：

*   **分布式与通信优化**：
    *   **[#6974](https://github.com/verl-project/verl/pull/6974) (已合并)**: 引入 `delta_sharded` 稀疏权重同步引擎。针对非耦合（disaggregated）异步训练，利用每步仅 1~3% 参数变化的特性，避免全量广播，极大降低通信开销。
    *   **[#7083](https://github.com/verl-project/verl/pull/7083)**: 修复 NCCL broadcast 等待逻辑，通过添加 CUDA stream 同步，确保 GPU 侧的数据传输真正完成，避免异步导致的读取错误。
*   **异构硬件支持（华为 Ascend NPU）**：
    *   **[#7086](https://github.com/verl-project/verl/pull/7086)**: 修复 Ascend NPU 在使用 vLLM sleep level 2 + 专家并行 (EP > 1) 混合训练时的精度异常，通过在 L2 唤醒后刷新 MoE 通信状态解决。
    *   **[#7087](https://github.com/verl-project/verl/pull/7087)**: 修复 NPU MTP (Multi-Token Prediction) 在线权重更新的图安全重载问题。
*   **Checkpoint 与内存管理**：
    *   **[#7061](https://github.com/verl-project/verl/pull/7061) (已合并)**: 新增 `save_lora_only` 支持，对于 27B 模型，检查点体积从 ~54 GiB 暴降至 ~150 MiB。
    *   **[#7068](https://github.com/verl-project/verl/pull/7068)**: 修复导出 HuggingFace 格式检查点时的 Key 损坏问题。
    *   **[#7077](https://github.com/verl-project/verl/pull/7077)**: 修复 FSDP2 使用 `CPUOffloadPolicy` 时的设备不匹配崩溃问题。
*   **RL 算法与训练机制**：
    *   **[#7069](https://github.com/verl-project/verl/pull/7069)**: 为 `RayPPOTrainer` 引入 `early_stop_patience` 配置，当 critic/rewards 指标连续多步不提升时自动终止训练，节省算力。
    *   **[#7082](https://github.com/verl-project/verl/pull/7082)**: 统一 V1 ReplayBuffer 对陈旧数据、DAPO 过滤数据及失败 rollout group 的驱逐/重填机制。
    *   **[#7027](https://github.com/verl-project/verl/pull/7027)**: 为用户自定义的生成式奖励模型（GRM）路径提供确定性保证。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在迅速成为**大模型强化学习的“系统级”基础设施**。从今日的开发动态可以看出：
1.  **突破通信瓶颈**：`delta_sharded`（PR #6974, #7085）等针对 RL 框架特有的高频参数同步链路的优化，表明项目正在解决百亿/千亿级模型在 RLHF 阶段的墙钟时间（Wall-clock time）痛点。
2.  **深度的底层硬件掌控**：无论是 NPU MoE 通信状态修复（PR #7086），还是 FSDP2 与 CPU Offload 的深水区 Bug 修复，证明 verl 正在为主流算力（NVIDIA）及国产异构算力（Ascend）提供工业级的高可用支持。
3.  **贴近前沿算法范式**：对 DAPO 过滤机制的深入支持、生成式奖励模型（GRM）的确定性控制，以及对投机解码指标的对齐处理，使得 verl 始终能够第一时间承载最新的学术研究和工业落地需求。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目跟踪**
**日期**：2026-07-18

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issue 和版本发布，但合入/更新了 4 个关键 PR。技术动作主要集中在**底座硬件升级（下一代 GPU 支持）**、**实验环境隔离**以及**数据处理脚本鲁棒性修复**。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **无 Issue 更新**。当前社区反馈与Bug追踪处于静默期。

### 4. 关键 PR 进展

*   **[#1758] 升级至 CUDA 13.0 以支持 ai2/holmes 集群上的 B300 GPU**
    *   **作者**: mnoukhov | **链接**: [allenai/open-instruct PR #1758](https://github.com/allenai/open-instruct/pull/1758)
    *   **技术摘要**: 引入对 NVIDIA B300 GPU 的支持。通过可选择的 Docker 基础镜像 (`CUDA_VERSION=12` 或 `13`)，实现了同一 Dockerfile 和 uv lock 文件在 CUDA 12 集群与 CUDA 13 集群上的平滑双栈兼容。
*   **[#1760] 使用最小化的隔离 uv 项目运行 Mason**
    *   **作者**: mnoukhov | **链接**: [allenai/open-instruct/pull/1760](https://github.com/open-instruct/pull/1760)
    *   **技术摘要**: 优化底层任务调度器 Mason 的运行环境。通过构建仅包含核心依赖（`beaker-py`, `backoff` 等）的冻结态 `scripts/mason` uv 子项目，并移除 Docker 镜像中全量 `uv sync`，显著降低环境依赖冲突与镜像体积。
*   **[#1761] 修复 preference filter 长度限制逻辑**
    *   **作者**: Chessing234 | **链接**: [allenai/open-instruct/pull/1761](https://github.com/allenai/open-instruct/pull/1761)
    *   **技术摘要**: 修复 RLHF/DPO 偏好数据集预处理的 Bug。原逻辑中嵌套三元运算符导致 `max_prompt_token_length` 与 `max_token_length` 仅生效其一；现对齐 SFT 逻辑，将两项长度检查做独立 AND 运算。
*   **[#1762] 修复 CSV Append 模式下的 Header 重复/缺失问题**
    *   **作者**: Chessing234 | **链接**: [allenai/open-instruct/pull/1762](https://github.com/allenai/open-instruct/pull/1762)
    *   **技术摘要**: 修复数据记录脚本逻辑缺陷。原逻辑因 `open("a")` 触发 `exists()` 导致表头无法写入，或每次追加时重复写入表头。现确保首行追加写入 Header，后续不再重复。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

1.  **提前布局下一代算力集群（B300）**：随着大模型 RL 训练对算力需求的指数级增长，PR #1758 显示该框架已率先打通 CUDA 13.0 与 B300 GPU 的基础设施链路。对于需要在千卡/万卡集群上进行大规模 PPO/DPO 训练的团队而言，Open Instruct 在底层兼容性上保持了极强的前瞻性。
2.  **死磕大规模训练的“工程鲁棒性”**：RL 训练的痛点往往不在算法本身，而在工程落地的边角问题（如数据过滤失误、多节点日志记录冲突）。今日 Chessing234 提交的多个 PR 直击数据加载和日志记录的隐蔽 Bug，证明该项目在面向工业级大规模复现时，具备极高的代码可靠性和维护活跃度。
3.  **对实验环境的极致控制**：PR #1760 通过隔离任务调度器（Mason）的依赖环境，解决了分布式 RL 训练中常见的环境依赖膨胀与冲突痛点。这种将底层调度逻辑与算法逻辑进行环境解耦的做法，是开源训练框架走向成熟的标准动作。

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

**RL 日报：Gymnasium 生态追踪 (2026-07-18)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库动态平稳。共计更新 Issues 1 条，更新 Pull Requests 2 条，无新版本发布。今日核心动态聚焦于底层物理引擎环境（MuJoCo 与 Box2D）渲染与重构的技术性修复。

**2. 版本发布**
*   **无新版本发布**（近期无 Release 记录）。

**3. 重点 Issues**
*   **[#1607] [Question] MujocoEnv 忽略 XML 文件中的 `offwidth` 和 `offheight` 参数？**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607)
    *   **作者**: mlinke-ai
    *   **摘要**: 开发者在继承 `MujocoEnv` 创建包含前置摄像头（如无人机视角）的自定义环境时，发现通过 XML 文件配置的离屏渲染帧缓冲区（offscreen framebuffer）尺寸被代码强制覆盖。该问题直接影响了基于视觉的 RL 任务中自定义相机图像的分辨率获取。

**4. 关键 PR 进展**
*   **[#1642] 修复 MujocoEnv 缩小 XML 声明的离屏帧缓冲区问题**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642)
    *   **作者**: midhunxavier
    *   **摘要**: 针对 Issue #1607 的直接修复。PR 指出 `MujocoEnv._initialize_simulation()` 会无条件将渲染窗口的默认尺寸（480）赋给 offwidth/offheight，从而静默破坏了用户在 XML 中定义的更大缓冲区。此 PR 修正了该行为，恢复了 MuJoCo 物理引擎对渲染分辨率的原生控制权。
*   **[#1602] 将 Lunar Ler 环境移植至 Pymunk**
    *   **链接**: [Farama-Foundation/Gymnasium PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602)
    *   **作者**: Lonny154
    *   **摘要**: 旨在降低环境依赖复杂度的重要尝试。该 PR 提供了一个概念验证，使用纯 Python 的 2D 物理库 Pymunk 替代现有的 Box2D (`Box2D-py`) 来重构 `LunarLander` 的底层物理逻辑。目前已实现基于种子的地形生成、着陆器实体构建及受限着陆腿的物理约束。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **深度适配新一代物理引擎**：随着 MuJoCo 全面开源，Gymnasium 是目前首个快速响应并解决其深层渲染机制（如 offscreen framebuffer 与自定义相机解耦）的标准环境库。对于从事具身智能和视觉控制 RL 的研究者，掌握这些底层更新至关重要。
*   **推动核心环境底层依赖现代化**：经典的 `LunarLander` 等环境长期受制于 Box2D 的 C++ 编译与跨平台兼容问题。社区正积极尝试将其向现代、易安装的纯 Python 物理引擎（如 Pymunk）迁移。这表明 Gymnasium 并非仅仅停留在接口维护阶段，而是在持续进行底层基础设施的技术债务清理与现代化演进。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

**RL 开源生态日报：Stable Baselines3 (SB3)**
**日期**：2026-07-18
**仓库**：[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

---

### 1. 今日速览
过去 24 小时内，SB3 仓库活动相对平静，无新增代码提交与版本发布。社区端收到 1 个关于向量化环境（`VecEnv`）随机种子分配机制的缺陷报告。目前该问题已开启，等待维护团队确认与修复。

### 2. 版本发布
- **无新增 Release**。
当前 SB3 依然沿用现有的稳定版本，底层 API 与算法实现未发生变动。

### 3. 重点 Issues
- **[#2268] [Bug]: VecEnv sub-environment seeds (seed + i) overlap across runs with adjacent base seeds**
  - **作者**: abaisero
  - **状态**: 🟢 OPEN | **评论**: 0 | **点赞**: 0
  - **链接**: [DLR-RM/stable-baselines3 Issue #2268](https://github.com/DLR-RM/stable-baselines3/issues/2268)
  - **技术摘要**: 报告揭示了 SB3 在处理多环境随机种子时的底层逻辑缺陷。当使用 `VecEnv.seed(seed)` 或 `make_vec_env(..., seed=seed)` 时，系统会将第 `i` 个子环境的种子强制设为 `seed + i`。
  - **影响**: 这破坏了学术界常用于评估算法稳定性的“多随机种子扫描（如 `seed=0` 到 `seed=N`）”工作流。例如，当 Base Seed 为 0 时，子环境 1 的种子为 1；而当 Base Seed 为 1 时，其子环境 0 的种子同样为 1。这种**跨运行的种子重叠**会导致不同 Base Seed 下的部分子环境轨迹完全同质化，最终严重影响算法评估的独立性与统计学可靠性。

### 4. 关键 PR 进展
- **无新增 PR 更新**。
开发端今日无待合并的功能改进或修复，对于上述 Issue 的代码级修复尚需等待后续提交。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
SB3 作为强化学习领域的“基础设施”，其核心价值在于**工程严谨性与学术可重复性**。今日暴露的 Issue #2268 恰恰证明了一点：即便是成熟的 RL 框架，在处理最底层的伪随机数生成器（PRNG）分配时，也容易在复杂的实验评估工作流中产生隐性数据污染（Data Contamination）。
关注 SB3 的动态，不仅是为了追踪 PPO、SAC 等经典算法的底层优化，更是为了审视和规避 RL 研究中隐藏的工程陷阱。该 Bug 的讨论与后续修复，将为所有基于 SB3 进行基线测试的研究者提供更严谨的随机性隔离方案，具有极高的工程参考价值。

</details>