# RL 开源生态日报 2026-05-01

> 生成时间: 2026-04-30 22:15 UTC | 覆盖项目: 15 个

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

当前（2026年5月）开源强化学习（RL）生态呈现出极为明显的“两极分化”与“阶层固化”特征。
1. **LLM 对齐与后训练成为绝对黑洞**：以 `verl`、`AReaL`、`OpenRLHF` 等为代表的项目吸引了生态中 90% 以上的开源心智与工程投入。大语言模型/多模态大模型（LLM/VLM）的 RLHF/GRPO 训练框架已完全取代传统深度 RL，成为当前开源 RL 基建的核心。
2. **传统 RL 基础设施进入高度维护期**：以 `Gymnasium`、`Stable Baselines3` 为代表的经典单智能体/环境标准库，当前仅聚焦于 API 兼容性、类型系统与底层测试的维护；而 `CleanRL`、`Tianshou` 等纯学术型项目活动趋于停滞。
3. **系统级异构适配成为新护城河**：框架的竞争维度已从单纯的“算法支持”跃迁至“大规模异构算力（昇腾 NPU、Intel XPU、NVIDIA GB200）的显存/通信极致压榨”。

## 各项目活跃度对比

以下为过去 24 小时内各项目的核心活跃指标：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 9 | 30 | 0 | 爆炸式迭代。全力向多模态生成、智能体与异构硬件（昇腾/XPU）拓展，稳居 LLM RLHF 开源生态头部。 |
| **AReaL** | 9 | 11 | 0 | 硬核攻坚期。深陷大规模底层显存泄漏与分布式训练精度 bug 的修复，正进行大版本底层重构。 |
| **slime** | 11 | 6 | 0 | 紧贴前沿超大模型。死磕 GLM5-744B、Qwen3.5 等千亿级 MoE 模型的 rollout 稳定性与序列并行 Bug。 |
| **TRL** | 3 | 12 | 0 | 基建与多模态深耕。引入训练不变性测试与分块 NLL loss，正在从纯文本快速且严谨地向 VLM 对齐演进。 |
| **Open Instruct** | 0 | 5 | 0 | 底层精雕细琢。完全聚焦于 GRPO 算法在 vLLM/FSDP2 混合架构下的指标对齐与 off-policy 校正。 |
| **OpenRLHF** | 2 | 2 | 0 | 架构去耦演进。快速修复 Qwen3.5 适配问题，并计划剥离 DeepSpeed，向原生 HF Automodel 转型。 |
| **Gymnasium** | 1 | 1 | 0 | 稳定维护。聚焦 MuJoCo 物理引擎边界 bug 及静态类型提示的补全，保障基础 API 规范。 |
| **Stable Baselines3** | 1 | 1 | 0 | 严守工程质量。快速响应并降级适配 Gymnasium v1.3.0 带来的破坏性 API 更新。 |
| **ROCK / ROLL** | 0 | 1 | 0 | 工业级补全。重点推进 CLI 日志重构与华为昇腾 NPU 的 Docker 镜像适配，完善异构部署体验。 |
| **其他项目** | 0 | 0 | 0 | CleanRL、PettingZoo、rl_games、Tianshou、torchtune 过去 24 小时无动态。 |

## 共同关注的研究与工程方向

**1. 研究侧信号**
*   **MoE 与多模态（VLM）架构的 RL 适配**：传统针对 Dense 模型的 RL 算法正在失效。针对 Qwen3.5、GLM5 等 MoE 模型的专家路由重放机制（R3）、VLM Chunked NLL Loss 已成为各框架必备的前沿研究方向。
*   **多轮智能体与多输出轨迹**：纯单轮 Prompt-Response 模式正在瓦解，`verl` 引入的 Agent 网关运行时和多轮 Reward 评分机制，标志着 RL 正在向复杂的工具调用和 Multi-turn 闭环推理演进。
*   **Off-policy 校正与在线策略蒸馏**：面对 RLHF 中的 Reward Hacking 与分布偏移，`Open Instruct` 引入 IcePop 统一接口，`verl` 引入无显存占用的 Nitrobrew 蒸馏，研究重心向训练的数学严谨性与长期收敛性倾斜。

**2. 工程/基础设施侧信号**
*   **异构算力（NPU/XPU/GB200）与国产量化生态**：克服 NVIDIA 算力垄断是当前核心痛点。`verl`、`slime`、`ROLL` 均在密集推进昇腾 NPU 底层适配与通信超时修复；同时，FP8/NVFP4 等低精度训练（QAT）正成为标配。
*   **混合引擎的显存与通信压榨**：Train-Inference 共存架构下的显存抢占极其严重。通过原生 HF/Automodel 替换笨重的 DeepSpeed（如 `OpenRLHF`）、引入 Megatron-FSDP 后端、修复 RTensor 显存泄漏与跨节点缓存溢出（如 `AReaL`）是当前的工程主旋律。
*   **CI/CD 的极端细粒度化**：随着模型词表与参数量暴增，RL 框架的测试矩阵极度膨胀。从 `TRL` 引入的“训练不变性测试”到 `SB3` 的“版本降级映射”，开源项目正投入大量精力解决超大模型 CI 中的 OOM 与数值漂移问题。

## 差异化定位分析

1. **“大厂造轮子”的基建底座之争**：`verl`（字节）、`AReaL`（蚂蚁）与 `slime`（智谱）代表了国内大模型算力战争的底座水平。它们直接服务于内部千亿级模型的对齐，追求极致的分布式吞吐和最前沿模型的首发支持（如 CP 并行、超大 MoE 适配）。
2. **生态枢纽与标准定义者**：`TRL` (Hugging Face) 和 `OpenRLHF` 更侧重于通用性与敏捷接入。它们不造底层分布式大轮子，而是依托 HF 生态，通过提供优雅的 API、丰富的模型模板和极简的底层依赖（去 DeepSpeed 化），成为大多数中小团队和开源开发者上手 RLHF 的首选。
3. **学术严谨性与工业标准守护**：`Open Instruct` (AI2) 坚守数学与算法严谨性底线（对齐各种底层 Clipfrac 指标差异）；而 `Gymnasium` 和 `Stable Baselines3` 则彻底退居幕后，专注于传统 RL 环境交互 API 与基础算法的绝对稳定。
4. **特定场景的工业级输出**：阿里系的 `ROCK` 和 `ROLL` 则展现出大厂在特定业务线的实用主义，重点发力 RLVR（可验证奖励强化学习）和国产异构算力（NPU）的一键式容器化部署。

## 社区热度与成熟度

1. **社区心智高度集中**：`verl` 单日 30 个 PR 和 9 个 Issue 的处理量展现了恐怖的工程迭代速度和社区统治力，确认了其在目前开源 LLM RLHF 领域的事实领先地位。
2. **项目步入深水区（暴露底层顽疾）**：从 `AReaL` 曝出的“优化器状态精度导致不收敛”，到 `Open Instruct` 曝出的“570倍 clipfrac 异常”，说明头部开源框架已经蹚过了简单的 API 封装阶段，正在承受极高规模和复杂度的工程考验，成熟度快速提升。
3. **工程复现性成为高级门槛**：项目的成熟度不再仅由支持的算法数量决定。`TRL` 引入的“不变性测试”和各框架对 `Gymnasium` API 强制降级的防御式编程，标志着主流开源项目正在向工业级高可靠标准演进。

## 值得关注的趋势信号

1. **Agent 范式重塑 RL 训练管线**：传统 PPO/GRPO 的单轮生成管线已无法满足需求。未来 RL 框架必将全面标配“多轮网关运行时”与“异步多轨迹评分”能力，以支撑具备环境感知和工具调用能力的 Agent 模型后训练。
2. **异构算力与国产替代成为硬需求**：各大框架在同一天密集暴露或解决 Ascend NPU 适配（通信超时、显存快照、算子替换）及提供 NPU Dockerfile，预示着非英伟达算力生态在大模型后训练环节的渗透率正在发生实质性飞跃。
3. **去中心化/去重核化趋势显现**：框架正有意识地剥离对重型第三方库（如 DeepSpeed、特定版本的 vLLM）的强依赖，转向构建基于原生 PyTorch/HF 和自研通用通信层（如 Ray Core RDT）的轻量化、高可控架构。
4. **“极低显存”计算模式普及**：从试图绕过 `[N, V]` logits 张量实体化的策略蒸馏，到针对大词表模型的分块损失，底层显存池化与零拷贝技术正成为下一代 RL 训练引擎突破算力上限的关键密码。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-05-01 ROLL 项目 RL 日报摘要：

### 1. 今日速览
*   **整体活跃度**：过去 24 小时内，[alibaba/ROLL](https://github.com/alibaba/ROLL) 仓库动态保持平稳，无新增 Issues 和 Releases，有 1 条 PR 状态发生更新。
*   **核心焦点**：项目在底层硬件生态扩展上取得进展，合入了针对华为昇腾（Ascend）NPU 的适配与容器化部署方案。

### 2. 版本发布
*   **最新 Releases**：过去 24 小时内**无**新版本发布。

### 3. 重点 Issues
*   **最新动态**：过去 24 小时内**无**新增或更新的 Issues。当前项目的需求反馈与 Bug 追踪处于静默期。

### 4. 关键 PR 进展
*   **[#428 [CLOSED] feat: add npu dockerfile and useage](https://github.com/alibaba/ROLL/pull/428)**
    *   **作者**: UsernameFull
    *   **状态**: 已关闭（已合入或终止）
    *   **更新时间**: 2026-04-30
    *   **摘要**: 该 PR 为 ROLL 引入了华为昇腾 NPU（Atlas 900 A2/A3 PODc）的底层支持。主要提交了 `Dockerfile.A2` 等容器构建文件以及相关的适配文档，旨在让用户能够在 Ascend 硬件上无缝部署 RLVR（Reinforcement Learning from Verifiable Rewards）及其他 RL 训练管线。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **异构算力适配的先锋**：随着大模型 Post-training 阶段对算力需求的激增，纯 GPU 资源逐渐成为瓶颈。ROLL 合入 NPU Dockerfile 及适配文档（PR #428），表明项目正在积极进行多硬件生态（NPU/GPU 等）的底层适配，为 RL 训练提供了更广泛、更具成本效益的算力底座选择。
*   **聚焦 RLVR 等前沿训练管线**：项目直接切入 RLVR（基于可验证奖励的强化学习）等核心高级训练流水线，高度契合当前 LLM/Agent 领域提升模型推理与认知能力的工程化痛点。
*   **开箱即用的工程化体验**：通过提供标准化的 Docker 镜像构建方案，ROLL 显著降低了开发者在复杂异构集群环境下的环境配置心智负担，是一个具备工业级落地价值的 RL 基础设施。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-05-01 ROCK 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库整体趋于平稳。项目无新版本发布，无新增或更新的 Issues，仅有 1 个处于 `OPEN` 状态的功能性 PR 产生了动态更新。当前核心开发精力似乎集中在基础命令行工具（CLI）的标准化与日志管理的健壮性优化上。

### 2. 版本发布
**无**。
近 24 小时内未发布任何新版本或补丁。

### 3. 重点 Issues
**无**。
过去 24 小时内无新增、闭合或更新的 Issues。

### 4. 关键 PR 进展
- **[OPEN] [feat(cli): add -v verbosity control and unify log level management](https://github.com/alibaba/ROCK/pull/907)**
  - **作者**: berstpander
  - **更新日期**: 2026-04-30
  - **核心内容**: 该 PR 重构了 ROCK 的命令行界面（CLI）日志系统。将原先作为死代码的 `-v` 参数从单一的布尔值（`store_true`）升级为基于计数的 4 级映射控制（0=ERROR, `-v`=WARNING, `-vv`=INFO, `-vvv`=DEBUG）。此外，该提交还修复了 `config_log()` 函数中的两个潜在 Bug。
  - **分析**: 这是一个典型的“基础设施增强”类提交。在强化学习训练中，日志级别的精细控制对于调试底层数据流和监控训练进度至关重要。该 PR 的推进表明 ROCK 正在改善开发者体验，使其向工业级标准化 CLI 工具对齐。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
基于今日的代码动态与项目历史，ROCK 的价值体现在以下两点：
1. **工程化与基建沉淀**：从 PR #907 可以看出，项目正在打磨如日志管理、CLI 交互等“底层脏活累活”。在 RL 生态中，这通常是项目从“算法实验期”走向“工程应用成熟期”的重要标志。对于需要将 RL 算法进行大规模落地的开发者而言，具备良好可观测性（Observability）和调试接口的框架能显著降低开发门槛。
2. **大厂背书与可靠性**：作为阿里开源的 RL 框架，ROCK 具备支撑大规模分布式训练的底层架构潜力。其对基础代码质量的持续优化（如修复隐含 Bug、统一定义标准），意味着其在面对高复杂度的 RL 算法复现和工程部署时，能提供比一般学术型开源库更高的鲁棒性。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026年5月1日 Slime (THUDM/slime) 开源项目 RL 日报摘要：

# 📊 Slime RL 生态日报 (2026-05-01)

## 1. 今日速览
过去 24 小时内，Slime 项目保持较高的社区活跃度。共有 **11** 条 Issues 发生状态更新或新增讨论，**6** 条 Pull Requests 提交或更新。当前项目焦点集中在 **超大模型（如 GLM5-744B）的训练与 Rollout 稳定性**、**异构硬件（NPU）兼容性** 以及 **底层数据并行/序列并行排障** 上。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。（当前社区主要使用的版本基准为 v0.2.4）

---

## 3. 重点 Issues

### 🚨 核心训练与 Rollout 缺陷
- **`allgather-cp` 导致 Token 乱序** ([#1871](https://github.com/THUDM/slime/issues/1871))
  - **摘要**：当启用 `--allgather-cp` 且 `context_parallel_size > 1` 时，`hf_attention.py` 中的 CP 路径仍使用旧的 zigzag 布局重建隐藏状态，而数据处理层已生成连续布局，导致 Token 序列被静默打乱。此为高危底层逻辑 Bug。
- **GLM5 Rollout 首字乱码** ([#1853](https://github.com/THUDM/slime/issues/1853))
  - **摘要**：使用 v0.2.4 镜像在 H20 上训练 GLM5-744B RL 时，SGLang rollout 有概率生成无意义的首字 Token 或乱码。
- **DP 间 All-reduce 导致微批次切片为空** ([#1838](https://github.com/THUDM/slime/issues/1838))
  - **摘要**：在 DP ranks 间 all-reduce `num_microbatches` 时，`_get_capped_partitions` 可能产生空的微批次 partition，引发 `torch.cat()` 崩溃。（状态：已关闭，推测已修复）

### 🛠️ 模型与后端适配
- **Qwen3.5 NPU 适配咨询** ([#1821](https://github.com/THUDM/slime/issues/1821))
  - **摘要**：社区用户询问框架是否计划支持在昇腾 NPU910B 上对 Qwen3.5 系列进行后训练。
- **GLM5 MTP (Multi-Token Prediction) 训练支持** ([#1870](https://github.com/THUDM/slime/issues/1870))
  - **摘要**：探讨 GLM-5 主模型与 MTP 层联合训练的计划。目前 MTP 训练与 `allgather_cp` 存在不兼容问题。
- **FP8 Rollout 不兼容问题** ([#1796](https://github.com/THUDM/slime/issues/1796))
  - **摘要**：GLM4.7-355B 的 FP8 版本在官方 SGLang 镜像下 Rollout 时，出现 `output_partition_size` 无法被 `block_n=128` 整除的报错。

### 💡 架构演进讨论
- **MagiAttention 集成计划** ([#1872](https://github.com/THUDM/slime/issues/1872))
  - **摘要**：社区询问是否有时间表将 MagiAttention 集成到 Slime 的上下文并行（CP）机制中。

---

## 4. 关键 PR 进展

### 🐛 核心功能修复
- **修复 PPO Value Offload Bugs** ([#1882](https://github.com/THUDM/slime/pull/1882))
  - **摘要**：修复了开启 PPO value offload 时的底层缺陷，对大集群长序列 RL 训练的显存优化至关重要。
- **增加 Megatron-Bridge 不支持模型的 HF 格式保存回退** ([#1881](https://github.com/THUDM/slime/pull/1881))
  - **摘要**：当遇到 Megatron-Bridge 不支持的架构时，`save_hf_model` 增加了回退机制，直接从磁盘读取 `torch_dist` 检查点并通过 Slime 内部逻辑转换为 HF safetensors。
- **修复分布式 POST Actor 并发拆分** ([#1880](https://github.com/THUDM/slime/pull/1880))
  - **摘要**：修复分布式 POST 模式下 Actor 并发数计算错误。之前按节点数分配并发度导致逻辑异常，现已在存活 Ray 节点间正确计算 `per_actor_conc`。
- **修复 Qwen3_next 数据类型获取错误** ([#1883](https://github.com/THUDM/slime/pull/1883))
  - **摘要**：用 `torch.get_default_dtype()` 替换了不存在的 `get_current_dtype` 方法。

### 🔄 依赖与 CI 更新
- **升级 SGLang 至 v0.5.10.post1** ([#1874](https://github.com/THUDM/slime/pull/1874))
- **更新 Megatron-bridge 并添加 Qwen3.6 测试** ([#1884](https://github.com/THUDM/slime/pull/1884))

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

Slime 项目正在成为**百亿/千亿级别 MoE 及 Dense 大模型 RLHF/Post-training** 的核心基础设施，其当前的 Issue 和 PR 动态折射出极高的技术门槛与生态价值：

1. **前沿模型的首发支持与攻坚**：从 Qwen3.5/3.6、GLM5-744B 的适配到 MTP 机制的 RL 训练探索，Slime 站在下一代大模型底层训练的最前沿。
2. **解决超大规模训练的底层顽疾**：社区和开发者正在高频修复 Context Parallelism (`allgather-cp` 布局错位) 和 Micro-batch 动态切分引发的核心崩溃问题。这些修复为超长上下文的 RL 训练提供了稳定性保障。
3. **推动异构计算与推理引擎融合**：无论是处理 FP8 量化与 SGLang 推理引擎的切分不兼容问题，还是探索对昇腾 NPU 的支持，Slime 正在打破单一 NVIDIA GPU 生态的界限，致力于构建更加灵活的 RL 训练-推理异构分发闭环。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-05-01)

## 1. 今日速览
过去 24 小时，AReaL 仓库保持高活跃度。社区共更新了 **9 条 Issues**（包含 3 个严重的基础架构/OOM Bug）和 **11 条 PRs**（集中在内存泄漏修复、MoE 训练机制和底层依赖升级）。虽然今日无新版本发布，但多项底层重构和高优先级 PR 正在密集推进，项目正处于底层稳固与架构升级的关键时期。

## 2. 版本发布
*   **最新 Releases**：无（上次版本发布间隔正在拉长，推测团队正在为下一个大版本进行底层依赖重构和累积）。

## 3. 重点 Issues

### 🚨 核心缺陷与内存泄漏
*   **FSDP 引擎在非 DP-head 秩上导致无限 OOM**：Issue [#1296](https://github.com/inclusionAI/AReaL/issues/1296) 指出非 DP-head ranks 会无限累积 `RTensor _storage` 条目导致 OOM 崩溃。这与此前 [#1209](https://github.com/inclusionAI/AReaL/issues/1209) (RTensor `_fetch_buffer` 泄漏) 属于同一系列的基础架构内存管理缺陷，目前正被重点盯盘。
*   **FSDP 优化器数据类型引发收敛瓶颈**：Issue [#1292](https://github.com/inclusionAI/AReaL/issues/1292) 曝出重磅 Bug，在使用 bf16 训练时，`torch.optim.AdamW` 错误地将优化器状态（`exp_avg` 等）创建为 bf16 而非 fp32，导致模型后期收敛停滞，损失比 DeepSpeed ZeRO-3 / Megatron 高出约 3 倍。
*   **vLLM 后端 GRPO 训练不稳定**：Issue [#1290](https://github.com/inclusionAI/AReaL/issues/1290) 报告在 GSM8K 数据集上，使用 SGLang 后端 GRPO 训练稳定，但 vLLM 后端会出现训练崩溃或发散现象。

### 🛠 架构演进与 RFC
*   **集成 Ray Core RDT 进行权重同步**：RFC [Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243) 提议在实验分支引入 RDT 后端来加速模型权重同步，同时保持对旧版 AReaL 1.0 的兼容。
*   **底层 Megatron 集成库迁移**：Feature [Issue #1260](https://github.com/inclusionAI/AReaL/issues/1260) 计划将核心 Megatron 集成从 `mbridge` 迁移至官方更推荐的 `megatron-bridge`。
*   **推理与训练镜像解耦**：Feature [Issue #1286](https://github.com/inclusionAI/AReaL/issues/1286) (Closed) 诉求将推理和训练的 Docker 镜像解耦，以提供更灵活的部署。

## 4. 关键 PR 进展

### 🛠 核心内存与性能修复
*   **修复 RTensor `_storage` 泄漏**：PR [#1297](https://github.com/inclusionAI/AReaL/AReaL/pull/1297) 通过在非 DP-head `TrainEngine` 秩上跳过 `RTensor.remotize` 并返回 `None` 哨兵值，精准拦截了无用数据的存储，直接修复了 Issue #1296。
*   **修复跨节点 `_fetch_buffer` 内存泄漏**：PR [#1282](https://github.com/inclusionAI/AReaL/pull/1282) (Closed/Merged) 修复了 RPC 跨节点消费端的模块级缓存未被清理的问题，完善了系统的长期运行稳定性。
*   **减少 Megatron VLM 显存占用**：PR [#1291](https://github.com/inclusionAI/AReaL/pull/1291) (Closed/Merged) 在 Megatron 视觉语言模型前向传播中剔除了冗余的 `multi_modal_input` 引用，大幅降低大视觉张量带来的显存峰值。

### 🚀 架构重构与训练优化
*   **引入 MoE 路由重放机制**：WIP PR [#1207](https://github.com/inclusionAI/AReaL/pull/1207) 实现了针对 MoE 模型的 Rollout Routing Replay (R3)，通过在训练时重放推理阶段的专家路由索引，解决异步 RL 训练中因推理-训练路由差异导致的不稳定问题。
*   **支持 FSDP LoRA Adapter 热加载**：PR [#1241](https://github.com/inclusionAI/AReaL/pull/1241) 允许直接从 HuggingFace 格式的 adapter checkpoint 恢复 FSDP LoRA 训练，打通了 LoRA 持续学习的闭环。
*   **Archon 架构集成 ZERO1 与动态树注意力**：PR [#1287](https://github.com/inclusionAI/AReaL/pull/1287) 为 Archon 模式整合了 ZERO1 DP 和 Dynamic Tree Attention (DTA) 运行时模块。

### 📦 依赖与基建升级
*   **April 2026 依赖大版本升级**：高优先级 PR [#1206](https://github.com/inclusionAI/AReaL/pull/1206) 全面升级了 `megatron-core`, `sglang`, `vllm`, `transformers` 等核心依赖，适应了上游库的 Breaking API changes。
*   **兼容 Transformers 5.0**：PR [#1280](https://github.com/inclusionAI/AReaL/pull/1280) (Closed/Merged) 修复了 `transformers>=5.0` 中 `apply_chat_template` 返回类型变更导致的系统性崩溃。
*   **控制器异步初始化重构**：PR [#1294](https://github.com/inclusionAI/AReaL/pull/1294) 将所有服务控制器的初始化从阻塞式重构为管线化后台线程模式，有望大幅缩短集群启动时间。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直面大模型 RLHF 的底层深水区**：AReaL 目前解决的痛点极其硬核（如 bf16 下的 AdamW 状态精度丢失、跨节点张量传输的 OOM、异构推理后端的路由差异）。这些往往是自建大规模 RLHF 集群时最致命的隐形瓶颈，说明项目正在经受极高规模和复杂度的工程考验。
2. **深度拥抱 MoE 与多模态 (VLM)**：从引入 Routing Replay 解决 MoE 训练稳定性，到针对 VLM 的显存优化，AReaL 正在摆脱传统纯文本稠密模型的限制，紧贴目前大模型向多模态和稀疏架构演进的工业界前沿。
3. **高度关注的异构与解耦设计**：项目中密集讨论的 SGLang vs vLLM 稳定性对齐、推理与训练镜像解耦、Ray RDT 集成等话题，体现了其致力于打造一个不被特定底层框架锁死、具备高可用性和灵活调度能力的通用大规模 RL 基建底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026年05月01日

## 1. 今日速览
过去 24 小时内，TRL 仓库共处理了 **3 条 Issues**（1 个开放，2 个关闭）和 **12 条 Pull Requests**（5 个开放，7 个关闭）。当前无新版本发布。社区及核心开发团队（@qgallouedec, @albertvillanova 等）今日的重心高度集中在：**解决 CI/CD 中的 GPU 显存溢出（OOM）问题**、**完善视觉语言模型（VLM）在 SFT 中的支持（如 Chunked NLL loss）**，以及**引入训练不变性测试和知识蒸馏测试套件**。

## 2. 版本发布
**无新版本发布。**

## 3. 重点 Issues
- **[OPEN] Llama-3.2-3B SFT 训练异常 (#5138)**
  - **摘要**：开发者报告在使用最新版本的 TRL 对 `Llama-3.2-3B-Instruct` 进行 SFT 时，由于库不再使用 `DataCollatorForCompletionOnly` 来计算 loss，导致模型训练效果不及预期。该 Issue 目前已积累 20 条讨论，正在排查中。
  - **链接**：[huggingface/trl Issue #5138](https://github.com/huggingface/trl/issues/5138)
- **[CLOSED] CI 频发 CUDA OOM 错误 (#5207)**
  - **摘要**：持续集成测试中频繁出现 `torch.OutOfMemoryError`。该问题今日通过多个 PR（缩小测试模型图像尺寸、降低 VLM 测试 batch size、修复内存泄漏）得到集中解决并关闭。
  - **链接**：[huggingface/trl Issue #5207](https://github.com/huggingface/trl/issues/5207)
- **[CLOSED] Qwen3.5-9B Tokenizer 截断不匹配 (#5213)**
  - **摘要**：SFT `Qwen3.5-9B` 时出现 Prompt 与 Prompt+Completion 之间的 Token 状态不匹配报错。
  - **链接**：[huggingface/trl Issue #5213](https://github.com/huggingface/trl/issues/5213)

## 4. 关键 PR 进展
### 核心功能与算法优化
- **[OPEN] 启用 PEFT 环境下的 Chunked NLL Loss (#5676)**
  - **摘要**：在 SFT 训练中引入分块负对数似然损失，以优化显存占用和计算效率。该 PR 包含详细的性能 Benchmark 数据，为后续功能奠定基础。
  - **链接**：[huggingface/trl PR #5676](https://github.com/huggingface/trl/pull/5676)
- **[OPEN] 启用 VLM 在 SFT 中的 Chunked NLL loss (#5684)**
  - **摘要**：基于 #5676，通过修补模型 `forward` 传播以支持多模态架构的 Chunked NLL loss。这是一项中等风险的改动，涉及跨模态的梯度和正确性校验。
  - **链接**：[huggingface/trl PR #5684](https://github.com/huggingface/trl/pull/5684)
- **[OPEN] 新增 DistillationTrainer 测试套件 (#5615)**
  - **摘要**：为 `DistillationTrainer` 提交了完整的单元测试集，进一步保障模型蒸馏功能迭代时的代码健壮性。
  - **链接**：[huggingface/trl PR #5615](https://github.com/huggingface/trl/pull/5615)

### 基础设施与工程质量 (CI/OOM 修复)
- **[CLOSED] 引入训练不变性测试 (#5686)**
  - **摘要**：新增测试套件以检测 trainer 级别的数值漂移（如梯度累加、注意力机制实现差异导致的 loss 轨迹偏移），防止底层重构破坏训练复现性。
  - **链接**：[huggingface/trl PR #5686](https://github.com/huggingface/trl/pull/5686)
- **[CLOSED] 修复 CI OOM：缩小 Gemma3 图像尺寸 (#5680)** & **降低 VLM 测试 Batch Size (#5687)**
  - **摘要**：针对 CI 中的 OOM 痛点（#5207），减小了测试用 tiny Gemma3 的图像分辨率，并由于 Gemma3 词汇表高达 262k，将 VLM SFT 测试的 batch size 从默认的 8 降低。
  - **链接**：[huggingface/trl PR #5680](https://github.com/huggingface/trl/pull/5680) | [huggingface/trl PR #5687](https://github.com/huggingface/trl/pull/5687)
- **[CLOSED] 修复 CI OOM：清理 traceback 帧导致的 GPU 显存泄漏 (#5681)**
  - **摘要**：通过新增 pytest hook，在测试失败后强制清理局部 CUDA 张量，解决了错误重跑时的显存累积问题。
  - **链接**：[huggingface/trl PR #5681](https://github.com/huggingface/trl/pull/5681)

### 架构解耦与模型支持
- **[OPEN] VLM processor 架构解耦 (#5560, #5561)**
  - **摘要**：优化了多模态模型中 `processor` 和 `tokenizer` 的接口边界，将多模态解析逻辑从 `parse_response` 和 `get_training_chat_template` 中剥离，使代码职责更加单一。
  - **链接**：[huggingface/trl PR #5560](https://github.com/huggingface/trl/pull/5560) | [huggingface/trl PR #5561](https://github.com/huggingface/trl/pull/5561)
- **[OPEN] 新增 Gemma 3 与 Cohere2 训练模板 (#5685, #5675)**
  - **摘要**：为 Gemma 3 和 Cohere2 添加了专属的 Jinja 训练模板，支持 `assistant_only_loss=True` 等特性，拓展了对最新开源大模型的支持。
  - **链接**：[huggingface/trl PR #5685](https://github.com/huggingface/trl/pull/5685) | [huggingface/trl PR #5675](https://github.com/huggingface/trl/pull/5675)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **对 VLM（视觉语言模型）对齐的底层深耕**：TRL 目前不仅停留在文本模型的 RLHF，正在通过底层重构（如解耦 Processor/Tokenizer，引入 VLM 专属的 Chunked NLL loss），实质性地解决多模态模型在 SFT/RL 训练中的显存和架构兼容性瓶颈。
2. **严谨的数值与复现性控制**：随着 RL 算法对超参数和底层算子（如 Attention 机制）的敏感度增加，项目组引入了“训练不变性测试”，这在开源 RL 库中相对罕见，表明其正在向工业级高可靠性方向演进。
3. **激进的 CI 基础设施优化**：面对日益庞大的开源模型（如 262k 词表的 Gemma），开发团队在极小粒度上（如清理 traceback 内存、微调测试图像尺寸）进行干预，确保如此庞大的测试矩阵依然能够高速运转。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-05-01)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库共处理/更新 **2 条 Issues** 和 **2 条 Pull Requests**，无新版本发布。社区当前焦点集中在**新兴基座模型（Qwen3.5）的兼容性适配**以及**底层推理/训练协同引擎（vLLM）的显存与分布式调度优化**。

## 2. 版本发布
- **最新 Releases**：无。

## 3. 重点 Issues
今日关注点主要在于前沿模型的权重加载异常及底层分布式系统的稳定性。

- **[#1232](https://github.com/OpenRLHF/OpenRLHF/issues/1232) [BUG] 缺失 Qwen3.5 模型权重**
  - **作者**: RushDon | **状态**: Open | **创建/更新**: 2026-04-30
  - **摘要**: 使用 `train_vlm_math_hybrid_engine.sh` 脚本训练 Qwen3.5 VLM 时出现权重丢失。该问题导致权重在 vLLM 侧更新后，模型生成的样本完全错误，这表明新一代模型（`Qwen3_5ForConditionalGeneration`）在 Hybrid Engine 下的权重量化与同步机制可能存在兼容性断层。
  
- **[#1162](https://github.com/OpenRLHF/OpenRLHF/issues/1162) [BUG] vLLM 初始化时调用 `sleep` 失败**
  - **作者**: cafeii | **状态**: Open | **创建**: 2025-12-23 | **最新更新**: 2026-04-30
  - **摘要**: 在启动多节点/多卡 PPO 训练（`train_ppo_ray`）时，vLLM 引擎在初始化阶段调用 `sleep` 机制发生报错。该issue已被长期跟踪（评论已达3条），对基于 Ray 的大规模分布式 PPO 训练集群有直接影响。

## 4. 关键 PR 进展
开发团队正在推进底层架构重构与关键Bug的修复。

- **[#1231](https://github.com/OpenRLHF/OpenRLHF/pull/1231) 修复共存张量并行引擎的 vLLM GPU 分配问题**
  - **作者**: fuyuan-li | **状态**: Open | **创建/更新**: 2026-04-30
  - **摘要**: 本 PR 旨在彻底解决 Issue #1162。修改了 `create_vllm_engines` 接口中的 `num_gpus` 分配逻辑，专门针对 Colocated（Actor/Critic/Ref/Reward 模型共存）场景下的张量并行（TP）引擎显存冲突进行了修复。这是保障大规模 RLHF 训练稳定性的关键补丁。

- **[#1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226) 使用 HuggingFace Automodel 替换 DeepSpeed 后端**
  - **作者**: hijkzzz | **状态**: Open | **创建**: 2026-04-26 | **最新更新**: 2026-04-30
  - **摘要**: 这是一个重大架构演进的 PR。计划剥离现有的 DeepSpeed 后端依赖，转而使用原生 HuggingFace Automodel。此举有望极大降低框架的底层系统复杂度，提升对不同 Transformers 架构（如上述出错的 Qwen3.5）的适配敏捷性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **敏捷适配前沿模型**：随着 Qwen3.5 等复杂多模态/大语言基座模型的快速迭代，RLHF 框架的适配压力剧增（如 #1232 所示）。OpenRLHF 社区能第一时间暴露并跟进最新模型的兼容性挑战，是跟进 LLM 前沿训练不可或缺的“试验田”。
2. **攻克 Hybrid Engine 系统级难题**：RLHF 训练的核心瓶颈在于“训练-推理”状态切换时的显存调度与资源抢占。从 #1162 和 #1231 可以看出，项目正在深度优化 vLLM 在 Colocated 模式下的显存分配机制，这代表了当前 RL 训练系统领域最硬核的工程突破方向。
3. **向轻量化与去耦演进**：#1226（去除 DeepSpeed 依赖）标志着项目正在重新思考底层训练引擎的架构。如果成功迁移至原生 HF Automodel，将大幅提高代码的可读性、调试的便利性以及对新硬件加速库（非 DeepSpeed 生态）的兼容性，在未来 RL 开源生态中具备极强的竞争力。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-05-01 RL 日报摘要：

# 🔥 verl 日报摘要 (2026-05-01)

## 1. 今日速览
过去 24 小时内，verl 生态保持高活跃度。项目新增或更新了 **9 个 Issues** 和 **30 个 Pull Requests**。从整体数据来看，目前的开发重心集中在**多模态生成拓展、底层异构硬件（昇腾 NPU / Intel XPU）适配、MoE 大模型（如 Qwen3.5）的落地优化**，以及**多轮智能体范式**在 RL 训练管线中的深度融合。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
当前核心讨论与反馈主要围绕 Q2 路线图、昇腾 NPU 适配及 MoE 模型训练展开：

- **verl 26Q2 路线图发布**：明确接下来的重点为 Megatron 动态 CP、Megatron-FSDP 启用、低精度训练（MXFP8/NVFP4）及 Qwen 3.5 LoRA 支持。
  [verl-project/verl Issue #5836](https://github.com/verl-project/verl/issues/5836)
- **多模态生成 RL 路线图更新**：明确多模态生成 RL 能力已迁移至独立仓库 `verl-omni`。
  [verl-project/verl Issue #5755](https://github.com/verl-project/verl/issues/5755)
- **Ascend NPU 适配问题频出**：
  - 内存快照采集逻辑 `enable_trace` 未适配 NPU。
    [verl-project/verl Issue #6207](https://github.com/verl-project/verl/issues/6207)
  - Routing Replay (R3 mode) 在 Ascend A2 集群上导致 `routed_experts` 巨量数据传输及 NPU 同步超时。
    [verl-project/verl Issue #6211](https://github.com/verl-project/verl/issues/6211)
  - `vllm_ascend` 在 NPU 上初始化 Rollout 时替换 `ApplyRotaryEmb` 失败。
    [verl-project/verl Issue #6224](https://github.com/verl-project/verl/issues/6224)
- **大模型训练与推理 Bug**：
  - GB200 容器在升级 vLLM 0.17 到 0.18 后出现性能回退。
    [verl-project/verl Issue #5964](https://github.com/verl-project/verl/issues/5964)
  - Qwen3.5/6-35B-A3B 在关闭思考模式 (`enable_thinking=False`) 的 token-in-token-out rollout 中格式不稳定。
    [verl-project/verl Issue #6223](https://github.com/verl-project/verl/issues/6223)
- **架构设计提案**：提出针对 Colocated Checkpoint Engine 的混合权重同步设计，以解决大型 MoE 模型（如 Qwen3.5-35B-A3B, Qwen3-VL-235B）在 RLHF 训练时的内存与速度瓶颈。
  [verl-project/verl Issue #6225](https://github.com/verl-project/verl/issues/6225)

## 4. 关键 PR 进展
技术迭代迅速，重点 PR 涵盖训练方法学创新、新硬件支持及 Agent 框架增强：

- **训练方法与算法优化**：
  - **[Nitrobrew 策略蒸馏]** ([#6194](https://github.com/verl-project/verl/pull/6194))：引入新的一致内存融合 KL 散度计算模式，无需实体化 `[N, V]` logits 张量，极大节省显存。
  - **[QAT FP8 支持]** ([#6229](https://github.com/verl-project/verl/pull/6229))：在 Worker 层增加 w8a8 和 w8a16 的量化感知训练支持。
  - **[全异步在线策略蒸馏]** ([#6056](https://github.com/verl-project/verl/pull/6056))：将在线策略蒸馏 (OPD) 扩展至全异步训练模式。
- **Agent 与多输出轨迹处理**：
  - **[Agent 框架与网关运行时]** ([#5931](https://github.com/verl-project/verl/pull/5931))：实验性引入多轮 Agent 风格 Rollout 抽象及网关运行时。
  - **[异步评分支持多输出]** ([#6228](https://github.com/verl-project/verl/pull/6228))：解决 Agent Loop 中多轮输出轨迹的奖励打分问题。
  - **[更简单的工具注册]** ([#6189](https://github.com/verl-project/verl/pull/6189))：支持基于轻量级纯 Python 函数的 Tool 注册机制。
- **底层引擎与硬件适配**：
  - **[Megatron-FSDP 后端支持]** ([#5423](https://github.com/verl-project/verl/pull/5423))：实现基于 Megatron 引擎的 FSDP 训练后端，提升大模型并行效率。
  - **[Intel XPU 支持]** ([#6119](https://github.com/verl-project/verl/pull/6119))：全面引入针对 Intel GPU (Arc Pro / Data Center GPU Max) 的端到端 GRPO/PPO/SFT 支持。
  - **[修复 Megatron 模型卸载双倍峰值内存问题]** ([#6193](https://github.com/verl-project/verl/pull/6193))：解决大模型在 CPU Offload 时导致 OOM 的严重内存回退。
- **工程与 CI 重构**：
  - **[CI 系统重构]** ([#6220](https://github.com/verl-project/verl/pull/6220))：大幅降低 CI 负担，重构包括 SFT、异步策略及多硬件场景的测试矩阵。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从纯文本 RL 向 Agent 与多模态的全面演进**：`verl` 正在快速超越传统的 PPO/GRPO 文本训练范式。从最新的多模态迁移和 Agent 网关运行时 PR 可以看出，其正致力于解决 Multi-turn Tool Calling 和 VLM 在 RL 阶段对齐的底层工程难题。
2. **对齐业界最前沿的模型与硬件生态**：项目高度紧跟 LLM 发展趋势，当前 Issue 与 PR 密集针对 **MoE 架构（Qwen3.5 系列超大模型）**和**异构算力（昇腾 NPU、Intel XPU、NVIDIA GB200）**进行底层适配和深度优化（如 Megatron-FSDP、FP8 QAT、显存池化），具备极强的工业级落地价值。
3. **训练引擎极致的性能优化**：面对大规模 LLM 的 RL 训练墙，`verl` 社区正在贡献极具技术深度的优化（例如避开 logits 实体化的 Nitrobrew 蒸馏、一致内存管理机制等），持续捍卫其在开源 RLHF 框架中的性能第一梯队地位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为 Open Instruct 生成的 2026 年 5 月 1 日强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时，Open Instruct 仓库整体保持低调运行，无新增 Issues 和版本发布。项目焦点完全集中于底层算法工程化与基础设施优化，核心开发者 `finbarrtimbers` 提交了 5 个 PR，主要围绕 GRPO 算法在 vLLM 新版原生权重同步 API 下的适配、多路径指标对齐、离线策略修正以及检查点机制重构。

### 2. 版本发布
- **无**：截至今日，仓库未发布新的 Release 版本。

### 3. 重点 Issues
- **无**：过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
今日的 PR 动态高度聚焦于 GRPO 训练的稳定性与性能修正，重点关注 FSDP2/vLLM 混合架构下的工程落地：

- **引入 IcePop 离线策略修正统一接口**：[#1650](https://github.com/allenai/open-instruct/pull/1650)
  实现了 IcePop 算法，并为离线策略修正创建了一个统一的接口，有助于提升策略迭代过程中的数学严谨性和收敛稳定性。

- **`grpo.py` 适配 vLLM 原生权重同步 API**：[#1649](https://github.com/allenai/open-instruct/pull/1649)
  作为 [#1515](https://github.com/allenai/open-instruct/pull/1515) 的后续工作，使 `grpo.py`（基于 olmo-core 的 actor）能够运行在 vLLM 新版原生权重同步 API 上，并在指标和行为上与 `grpo_fast.py` 保持对齐。

- **修复 `grpo.py` 底层计算与同步致命 Bug**：[#1642](https://github.com/allenai/open-instruct/pull/1642)
  修复了 `grpo.py` (FSDP2 路径) 的两个核心缺陷：(1) Step-0 阶段的权重同步存在三个独立的故障点；(2) 修复了 per-step logprob 重计算时的 attention mask 错误（与 vLLM 的 intra-doc 机制未对齐），该 Bug 曾导致 `val/tis_clipfrac` 指标相较 HF 参考实现异常膨胀约 570 倍。

- **`grpo.py` 与 `grpo_fast.py` 指标对齐**：[#1648](https://github.com/allenai/open-instruct/pull/1648)
  纯粹用于拉平 `grpo.py` 和 `grpo_fast.py` 之间的 metrics 差异，确保不同训练后端的可比性。

- **优化检查点保存机制**：[#1647](https://github.com/allenai/open-instruct/pull/1647)
  将检查点状态的保存逻辑从 `run_training` 剥离，封装至 `maybe_save_checkpoint_state` 并置于 `one_training_step` 中调用，从而消除冗余 I/O 操作，使其耗时被准确计入 `time/saving` 指标中。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 展现出了当前 LLM 强化学习（特别是 RLHF/GRPO 范式）工程化落地的典型挑战与前沿解法：
1. **极端的底层硬件感知优化**：从 PR #1642 中 logprob 重计算导致的 570 倍 clipfrac 异常可以看出，在结合 vLLM（推理引擎）与 FSDP2（训练引擎）的混合架构中，底层 attention 机制和分布式同步的微小错位都会引发灾难性的策略崩溃。Open Instruct 正在积极填平这些基础设施缝隙。
2. **关注 Off-policy 校正**：通过引入 IcePop 及统一接口（PR #1650），项目在应对 RLHF 过程中由于参考策略滞后带来的分布偏移问题，这在当前开源 RL 算法极易“ Reward Hacking ”的生态中具有极高的实战价值。
3. **训练可观测性**：将不同执行路径（如 `grpo.py` 和 `grpo_fast.py`）的 metrics 强制对齐，并精细化监控检查点耗时，体现了 AI2 对大规模 RL 训练“白盒化”和“高可用性”的工业级要求。对于希望搭建自有 RLHF 基础设施的团队而言，是极佳的参考基座。

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

# RL 日报摘要：Gymnasium (2026-05-01)

## 1. 今日速览
过去 24 小时，Gymnasium 仓库整体活动节奏平稳，无新版本发布。社区焦点主要集中在底层物理引擎的 Bug 反馈以及代码静态类型系统的持续完善。今日共处理/更新 Issues 1 条，PR 更新 1 条。

## 2. 版本发布
**无新版本发布。** 仓库当前仍维持在最近的稳定版本。

## 3. 重点 Issues
- **#1576 [OPEN] [Bug] Pusher-v5 环境中机械臂存在物体穿透现象**
  - **作者**: thanhminh97
  - **详情**: 在 Pusher-v5 环境的仿真过程中，开发者报告机械臂未能表现出正确的物理碰撞特性（如推动或接触），而是直接穿透目标物体。此类底层物理引擎的交互失效问题会直接影响强化学习算法在连续控制任务中的策略学习准确性。
  - **GitHub 链接**: [Farama-Foundation/Gymnasium Issue #1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576)

## 4. 关键 PR 进展
- **#1574 [CLOSED] 补充 `envs.registration` 模块缺失的类型注解**
  - **作者**: jorenham
  - **详情**: 该 PR 致力于为 `gymnasium.envs.registration` 模块补充缺失的类型提示（主要是返回值 `-> None`）。作为一项静态类型检查改进，合并此类代码有助于提升项目的代码规范度，并为开发者提供更好的 IDE 补全体验与静态查错能力（已通过 `pre-commit` 检查）。
  - **GitHub 链接**: [Farama-Foundation/Gymnasium PR #1574](https://github.com/Farama-Foundation/Gymnasium/pull/1574)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据表明项目处于日常迭代状态，但 Gymnasium 依然是强化学习开源生态的基石：
1. **环境交互的标准化核心**：Issue #1576 暴露了 MuJoCo/物理引擎交互的边缘 Bug，说明即使是成熟的基线环境，底层物理精度的维护依然是动态且持续的。作为事实上的标准 API（`Reset`、`Step` 等），Gymnasium 的稳定性直接决定了下游 RL 算法评估的可靠性。
2. **工程质量的持续演进**：如 PR #1574 所示，项目正在底层代码（如注册机制）中推进严格的静态类型化。这种对工程质量的高标准要求，使其在现代 RL 开发工作流（配合 Pyright/Mypy 等工具）中保持了极高的开发体验和鲁棒性，这是众多衍生环境库所依赖的底座。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 生态追踪
**日期**: 2026-05-01 | **项目**: [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

---

### 1. 今日速览
过去 24 小时内，SB3 仓库活动主要聚焦于**底层依赖兼容性修复**。社区在发现最新版 Gymnasium (v1.3.0) 引入的破坏性更新后，迅速做出了响应，提交了针对测试用例的 Bug report 和修复 PR。
- Issues 更新：1 条
- PR 更新：1 条
- 新版本发布：0 个

### 2. 版本发布
今日无新版本发布。当前主分支代码仍以维护和提升下游依赖（如 Gymnasium）的兼容性为主。

### 3. 重点 Issues
- **#2246 [Bug]: Gymnasium v1.3.0 导致 Taxi-v3 测试失败**
  - **作者**: JonathanColetti
  - **摘要**: 随着最新依赖库 `gymnasium` 升级至 1.3.0 版本，其正式废弃了经典环境 `Taxi-v3`，导致 SB3 仓库中的相关测试用例报错中断。作者探讨了是否应采取类似 `test_vec_normalize.py` 中对 `CliffWalking` 环境的预热/降级处理方案来规避此问题。
  - **链接**: [DLR-RM/stable-baselines3 Issue #2246](https://github.com/DLR-RM/stable-baselines3/issues/2246)

### 4. 关键 PR 进展
- **#2247 Fix Taxi-v3 deprecation in tests (支持 gymnasium 1.3.0)**
  - **作者**: JonathanColetti
  - **摘要**: 这是针对上述 Issue #2246 的配套修复。该 PR 实现了一个统一的防御性环境生成函数 `_make_env_safe(env_id, **kwargs)`。该函数在初始化环境时会主动捕获 `gym.error.DeprecatedEnv` 异常，一旦触发，将自动从一个预设的哈希表（Hash Map）中查找并回退到旧版本环境 ID。此举巧妙地解决了 Gymnasium API 变动带来的 CI/CD 阻断问题。
  - **链接**: [DLR-RM/stable-baselines3 PR #2247](https://github.com/DLR-RM/stable-baselines3/pull/2247)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **API 稳定性与规范参考**: 随着上游环境标准库（如 Gymnasium 到 1.3.0 版本）的持续演进，SB3 展现出了极强的**跟跑与自适应能力**。今天展现的 `_make_env_safe` 降级哈希映射机制，为其他 RL 框架处理上游破坏性更新提供了极佳的工程范式。
2. **扎实的工程化基建**: SB3 虽然不是算法迭代最快的仓库，但其对测试覆盖率的死磕（连一个 Taxi-v3 的环境废弃都要做严密的兼容性重构）确保了它作为“Stable”基石的承诺。在进行严肃的 RL 算法复现和工业部署时，这种底层的稳健性是不可或缺的。

</details>