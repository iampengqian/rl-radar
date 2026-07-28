# RL 开源生态日报 2026-07-29

> 生成时间: 2026-07-28 22:19 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态正呈现出清晰的“双轨并行”演进态势：
一方面，**LLM 驱动的 RL 基础设施（RLHF/Agent）正在经历深度的系统级重构**。以 verl、TRL、AReaL 为代表的项目，其核心战场已从“算法实现”转移到了“百亿/千亿参数下的异构通信、显存压榨与推理引擎对齐”。
另一方面，**传统经典 RL 生态正在加速沉淀与自净化**。Gymnasium、PettingZoo、CleanRL 等基石项目正致力于应对上游 API 变动（如 Gym v1.0、JAX 迭代），并通过淘汰历史包袱（如弃用 Supersuit）来实现接口的统一与性能基准的标准化。

## 各项目活跃度对比
过去 24 小时内，大模型 RL 方向的研发强度显著高于传统 RL 框架，底层通信与异构计算是当前绝对的开发热点。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 22 | 33 | 0 | 硬核系统级优化：引入 RDMA 绕过 NCCL，发力 NPU 适配与 Agent 多轮支持 |
| **TRL** | 13 | 25 | 1 | 紧跟前沿推理引擎（vLLM 0.26），推进异步 GRPO 与多模态视觉语言模型对齐 |
| **ROCK** | 0 | 6 | 0 | Agent 安全沙箱商业化落地（集成 OpenSandbox），完善并发资源清理 |
| **AReaL** | 2 | 3 | 0 | 聚焦训练解耦：打破 PP 并行强绑定，深挖单请求级随机种子支持精准复现 |
| **CleanRL** | 1 | 3 | 0 | 高质量算法基准的维护期：集中修复 Gym v1.0 键名变更与 JAX 依赖陈旧问题 |
| **Open Instruct** | 0 | 3 | 0 | 押注 MoE 架构（Qwen3-MoE）的实时权重同步，采用统一散度掩码重构算法 |
| **Gymnasium** | 0 | 2 | 0 | 夯实底层接口规范：专注向量化环境的性能基准测试与防回归工程 |
| **PettingZoo** | 1 | 1 | 0 | 架构去碎片化：着手弃用 Supersuit，将 Wrappers 核心化以统一多智能体 API |
| **rl_games** | 0 | 0 | 0 | 聚焦底层算法严谨性：修复向量化自动重置环境带来的“垃圾数据”污染 |
| **slime** | 1 | 0 | 0 | 真实大规模排错：沉淀 Qwen3-30B 多卡 NCCL 通信报错的经验 |
| **OpenRLHF / ROLL / SB3 / Tianshou / torchtune** | 0 | 0 | 0 | *过去 24h 暂无明显代码活动，处于稳定维护或孵化期。* |

## 共同关注的研究与工程方向
尽管应用场景不同，当前 RL 生态的项目们在底层挑战上展现出高度的同源性：

**研究侧信号：**
1. **采样精确重放与可控性**：消除异步并发带来的“训练噪音”成为重点。AReaL 接入 SGLang 单请求 `sampling_seed`，rl_games 修复自动重置的无效数据，均表明社区正致力于 RL 实验的精确轨迹复现与数据净化。
2. **RL 算法模块化的统一重构**：Open Instruct 将 DPPO 深度融入 GRPO 机制（统一的散度掩码范式），说明业界正摒弃“一算法一文件”的粗放模式，转向高内聚的算法底层抽象。

**工程/基础设施侧信号：**
1. **击碎“权重同步”阿喀琉斯之踵**：随着模型步入 MoE 时代，推理与训练引擎的参数同步开销呈现指数级增长。verl 采用 Mooncake RDMA 绕过 NCCL，Open Instruct 适配 Qwen3-MoE 展开同步，这是目前突破系统吞吐瓶颈的最关键路径。
2. **极致的显存碎片整理与降本增效**：针对超大模型，各框架都在开展“抠字节”级的显存优化。例如 verl 修复 FSDP 跨批次计算图未释放导致的 GB 级泄漏，TRL 允许跳过昂贵的 Logits 物化，以及 Open Instruct 引入 Tiled loss 机制。

## 差异化定位分析
各个项目在生态网中找到了自身不可替代的坐标：
- **全栈高性能集群枢纽 (verl, AReaL)**：定位是“超大规模计算基础设施”。它们不仅管训练，更致力于打破 Megatron、vLLM/SGLang 的拓扑绑定，支持异构硬件（NPU），直指千卡万卡级别的工业级痛点。
- **前沿算法与敏捷工程桥梁 (TRL, Open Instruct)**：定位是“紧跟大模型迭代周期”。它们对新架构（Qwen3-MoE）、新多模态交互以及量化（QAT/BNB）跟进极快，为研究员提供最潮的 GRPO/DPPO 算法与易用接口。
- **生产级 Agent 执行环境 (ROCK)**：跳出纯模型训练，聚焦于 Agent 在探索时的强隔离与安全性。通过集成 OpenSandbox (gVisor/Kata)，成为连接 RL 模型与现实复杂代码执行环境的可靠性保障。
- **经典算法测试床与标准制定者**：通过“单文件”或高内聚 API，确保学术界的算法试错不受历史技术债拖累。

## 社区热度与成熟度
- **LLM RL 赛道处于“高烈度攻坚期”**：verl 与 TRL 每日数十条的 Issue/PR 交织，反映了大模型 RL 正处于极速扩张但尚未标准化的阶段。Bug 多集中在显存异常和异构后端对齐上，属于深水区排雷。
- **传统 RL 生态步入“高度成熟与自治期”**：Gymnasium、PettingZoo 等项目活跃度平稳。其社区主要精力转向防范回归、完善性能基准测试（如通过 LLM 辅助生成测试代码），并主动整合 Ray 等分布式教程，体现了极高的工程素养和长期维护的生命力。
- **开源协同不断深化**：上游引擎（如 vLLM、Transformers）的每一个大版本变动，都会引发下游 RL 框架（如 TRL、CleanRL）的剧烈联动响应。跨仓库的协同修复已成为当前开源社区的主旋律。

## 值得关注的趋势信号
1. **异步训练 成为标配发力点**：从同步阻塞走向异步是 RL 提速的必经之路。TRL 和 AReaL 今日都在 AsyncGRPO 或异步 Rollout 调度（容错掩码）上投入重兵，这将是下个阶段提升算力利用率的核心竞争点。
2. **底层通信技术的范式革命**：verl 引入 Mooncake RDMA 直接进行点对点 Checkpoint 传输，直击 NCCL 在特定场景下的臃肿瓶颈。这种绕过传统集合通信库的激进工程探索，暗示着未来大规模分布式 AI 系统的架构演进方向。
3. **多模态 RL 的端到端打通**：TRL 宣布解除 AsyncGRPO 的纯文本限制并修复多图内存布局错位，表明 RL 生态正在快速跨越纯文本 NLP 领域，视觉语言模型（VLM）的 RL 训练闭环即将大规模铺开。
4. **经典 API 彻底大一统**：PettingZoo 弃用 Supersuit 拥抱原生 wrappers，以及 CleanRL 紧急适配 Gymnasium 1.0 键值变动。这预示着整个底层 RL 环境与算法库的数据接口定义正在完成最后一次“清剿”，去碎片化将大幅降低未来开发者的心智负担。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报**
**日期**: 2026-07-29

### 1. 今日速览
过去 24 小时内，ROCK 仓库活跃度集中在工程化测试与底座性能优化。共有 6 项 PR 更新，0 条新 Issue，0 个新版本发布。核心动向为 TypeScript SDK 集成测试的迭代重构、自动清理机制的并发性能升级，以及 OpenSandbox 后端集成的收尾验证。

### 2. 版本发布
无。当前项目无新版本发布。

### 3. 重点 Issues
- **[CLOSED] #1202 [FEATURE] 新增 OpenSandboxOperator：支持 OpenSandbox 作为 Rock 后端**
  - **作者**: zpzjzj | **更新**: 2026-07-28
  - **摘要**: 提议将阿里巴巴开源的生产级 Agent 沙箱运行时 OpenSandbox（基于 Docker/K8s 与 gVisor/Kata 强隔离）引入作为 ROCK 的新后端（`runtime.operator_type`）。该 Issue 推动了生命周期与文件操作的安全委托，已于今日关闭并进入代码合并阶段。
  - **链接**: [alibaba/ROCK Issue #1202](https://github.com/alibaba/ROCK/issues/1202)

### 4. 关键 PR 进展
**后端架构与集成**
- **[CLOSED] #1301 feat(opensandbox): complete admin integration (#1202)**
  - **作者**: zpzjzj
  - **摘要**: 完成 OpenSandbox 作为后端的最终集成。当 `operator_type` 为 `opensandbox` 时，跳过原有的 Ray/Rocklet worker 调度器及 `/ops` 任务，并添加了 Admin 生命周期的真实回归测试。
  - **链接**: [alibaba/ROCK PR #1301](https://github.com/alibaba/ROCK/pull/1301)

**性能优化**
- **[OPEN] #1304 perf: run auto-delete with bounded concurrency** (close #1263)
  - **作者**: zhangjaycee
  - **摘要**: 引入有界并发机制重构自动清理（auto-delete）逻辑，旨在解决大量并发环境下的资源回收瓶颈，提升系统整体的运行效率。
  - **链接**: [alibaba/ROCK PR #1304](https://github.com/alibaba/ROCK/pull/1304)
  - *(注：同目标的迭代分支 [PR #1303](https://github.com/alibaba/ROCK/pull/1303) 同步保持开启)*

**测试与 CI/CD 建设**
- **[OPEN] #1305 feat(ts-sdk): add CI integration test**
  - **作者**: guoj14
  - **摘要**: 为 TypeScript SDK 新增端到端 CI 集成测试，完善前端生态的自动化质量把控。
  - **链接**: [alibaba/ROCK PR #1305](https://github.com/alibaba/ROCK/pull/1305)
  - *(注：替换了早期的测试分支 [PR #1302](https://github.com/alibaba/ROCK/pull/1302) 及历史遗留分支 [PR #876](https://github.com/alibaba/ROCK/pull/876)，二者均已关闭)*

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **解决 RL Agent 安全与隔离痛点**：随着 RLHF 和 Agent 自主探索任务复杂度的增加，执行环境的强隔离成为刚需。ROCK 积极推进 OpenSandbox 后端（基于 gVisor/Kata），证明其定位不仅是训练调度框架，更是面向“生产级 Agent 安全执行”的基础设施。
2. **工程级的大规模处理能力**：从引入有界并发进行资源自动清理（auto-delete perf）可以看出，ROCK 团队正在实打实地解决高并发环境下的工程顽疾，这对大规模 RL 训练任务的稳定性至关重要。
3. **多语言生态融合**：对 TS SDK 集成测试的持续投入与完善，表明 ROCK 正在打破纯 Python/底层算力的边界，致力于为全栈开发者提供更友好的接入方式，这在当前的 RL 应用层爆发期具有很高的实用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime (THUDM/slime) RL 开源生态日报**
**日期**: 2026-07-29

---

### 1. 今日速览
过去 24 小时内，slime 仓库整体代码与版本无变动（PR 更新 0 条，新 Release 0 个）。社区活动集中在底层硬件与分布式通信报错的排查上，有一条历史遗留的重点 Issue 出现了新的讨论跟进。

### 2. 版本发布
*   **无新版本发布**。项目的最新可用版本需参考仓库主分支或历史 Release 记录。

### 3. 重点 Issues
*   **[问题追踪] 运行 Qwen3-30B-A3B 遭遇 NCCL/CUDA 底层致命错误**
    *   **Issue**: [#1305 [OPEN] ncclUnhandledCudaError: Call to CUDA function failed. Cuda failure 999 'unknown error'](https://github.com/THUDM/slime/issues/1305)
    *   **概况**: 由用户 @Ita-sp 于 1 月初提交，今日有最新回复（累计 6 条讨论）。
    *   **技术摘要**: 在 8xH800 集群上跑通官方标准示例（`run-qwen3-30B-A3B.sh`）时，训练在不到 10 步内崩溃，报错指向 `torch.distributed.DistBackendError` 及 NCCL 通信后端故障（CUDA error 999）。此类问题通常与多卡 AllReduce 操作、NCCL 版本兼容性、GPU 驱动或底层网络配置有关，目前社区正在跟进具体的环境配置以定位根因。

### 4. 关键 PR 进展
*   **无 PR 更新**。代码库暂无新的代码修复或功能合并。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 slime 今日代码面相对平静，但该底层多卡通信报错（Issue #1305）侧面反映了当前大模型强化学习（RL）开源生态的核心痛点：
1.  **大模型 RL 训练对基础设施极度敏感**: 能够运行 Qwen3-30B 级别的 MoE 模型 RL 微调（如 PPO/GRPO），是目前开源社区的硬核需求。slime 提供了开箱即用的官方脚本，是验证底层算力与分布式框架兼容性的重要试金石。
2.  **工程实践的价值**: 在 RL 训练中，解决 NCCL/CUDA OOM 或未知硬件错误是算法跑通的先决条件。该项目的 Issue 区沉淀了大量关于大规模分布式 RL 训练的真实工程排错经验，对 RL 系统工程师和基础设施团队具有极高的参考价值。
3.  **持续演进的生态**: slime 作为一个活跃的 RL 框架，其对最新主流模型（如 Qwen3 系列）的适配和调试过程，能帮助开发者快速透视当前大规模 RL 训练的瓶颈所在。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习生态日报 (2026-07-29)**

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **2 条 Issues** 和 **3 条 PRs**，无新版本发布。今日的核心动态高度聚焦于**异构后端权重同步的健壮性**以及**Rollout 数据管理的精细化控制**。开发者们正在积极消除 Megatron 与 vLLM/SGLang 混合架构下的训练痛点。

### 2. 版本发布
- **无新版本发布 (0 个)**。

### 3. 重点 Issues
- **[CLOSED] 修复 Megatron-vLLM 权重同步对 Pipeline 并行度的一致性要求** ([#1560](https://github.com/areal-project/AReaL/issues/1560))
  - **作者**: gursimar
  - **摘要**: 此前在 Megatron（训练）与 vLLM（推理）联合使用时，若两者的 Pipeline 并行度（PP size）不一致（例如 `d1p4t2` vs `d1p2t4`），会导致权重同步初始化中断。该问题已被确认并关闭，表明社区已提供底层修复方案。
- **[OPEN] 支持可重放的 Keyed Rollout 采样** ([#1523](https://github.com/areal-project/AReaL/issues/1523))
  - **作者**: SushantDaga
  - **摘要**: 提议在 AReaL 的全异步架构中接入 SGLang 的底层 `sampling_seed`。该特性设计为保证向后兼容（默认关闭），旨在实现单请求级别的确定性推理，对 RL 实验的精确复现（Reproduction）具有重大价值。

### 4. 关键 PR 进展
- **[CLOSED] 修复引擎层基于 SGLang 后端的 PP 权重同步逻辑** ([#1564](https://github.com/areal-project/AReaL/pull/1564))
  - **作者**: koladefaj
  - **摘要**: 针对上述 Issue #1560 的直接修复。解除了 `train_pp_size == gen_pp_size` 的硬性限制，使得跨不同并发配比的训练-推理混合后端能成功进行权重同步。
- **[OPEN] 掩码无法训练的残缺 Rollout 组** ([#1563](https://github.com/areal-project/AReaL/pull/1563))
  - **作者**: EazyReal
  - **摘要**: 核心训练逻辑优化。引入了对不可用的残缺 Rollout 组直接作为 `None` 处理的机制，在保留可用数据的同时，平滑跨越 Reward/Advantage 归一化阶段的复杂边界，避免了不必要的重试和算力浪费。
- **[OPEN] 接入 SGLang 的单请求 `sampling_seed` 以支持可重放采样** ([#1524](https://github.com/areal-project/AReaL/pull/1524))
  - **作者**: SushantDaga
  - **摘要**: 对应 Issue #1523 的代码实现。分别在 v1 和 v2 的请求构建器中向 SGLang 注入 `sampling_seed`，以极简的、非侵入式的代码实现了大模型强化学习的确定性推理路径。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在解决大模型 RLHF/RLAIF 训练中最棘手的**系统级异构问题**：
1. **打破后端耦合**：通过解除 Megatron 与 vLLM 在 Pipeline 并行度上的强绑定限制，研究员可以更自由地为训练和推理分配不同的算力拓扑，极大提升了集群资源利用率。
2. **实验可复现性**：通过向下深挖 SGLang 的随机种子控制能力，AReaL 正在建立高精度的 Rollout 级别重放机制。在 RL 算法调试中，能够确定性地回放某次特定的采样轨迹，是消除“训练噪音”、验证算法收敛性的关键基础设施。
3. **数据容错机制**：在高度异步的 Rollout 调度中（PR #1563），对异常/残缺采样组直接进行掩码处理而非中断重试，体现了系统在容错性和训练吞吐量之间的极致优化。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-29 HuggingFace TRL 强化学习生态日报摘要：

### 1. 今日速览
过去 24 小时内，TRL 仓库共处理了 **13 条 Issues** 和 **25 条 PRs**，并发布了 1 个新版本。今日的迭代重点集中在 **vLLM 0.26.0 的适配**、**异步 GRPO 训练（AsyncGRPO）的多模态与沙盒环境支持**，以及对 **BitsAndBytes 0.50.0 和底层显存/算子兼容性**的深度修复。

### 2. 版本发布
*   **v1.9.2 发布** ([Release Notes](https://github.com/huggingface/trl/releases/tag/v1.9.2))
    *   **核心更新**：主要修复了上游 `transformers#47569` 引入的内核 Bug，恢复了 NemotronH 架构的 GRPO/RLOO 测试。
    *   **依赖修复**：适配了 `bitsandbytes 0.50.0`，修复了 PEFT 量化测试中存在的隐性参数张量类型转换 Bug。

### 3. 重点 Issues
*   **[ ✨ 增强提案 ] 为 W&B 增加逐步生成表格支持** ([#2045](https://github.com/huggingface/trl/issues/2045))
    在 GRPO/PPO 训练中，W&B 的 "completions" 表格会覆盖历史记录。社区呼吁增加按步记录功能，该需求已在今日的 PR #6568 中得到响应。
*   **[ 🐛 Bug 反馈 ] vLLM 权重同步失效** ([#5312](https://github.com/huggingface/trl/issues/5312))
    在开启 `vllm_enable_sleep_mode=True` 且使用 `vllm_mode="colocate"` 时，vLLM 权重无法与训练同步，导致主分支 GRPO 训练异常（已关闭，修复进行中）。
*   **[ 💡 架构讨论 ] 探索 QAT（量化感知训练）支持** ([#6567](https://github.com/huggingface/trl/issues/6567))
    目前 TRL 仅支持 QLoRA（冻结量化+LoRA）。开发者提出在前向传播中引入伪量化，以支持 RL 训练期间的 QAT，提升低比特模型的精度。
*   **[ 🏋 GRPO ] GRPO 产生不必要的内存副本** ([#6553](https://github.com/huggingface/trl/issues/6553))
    在对比 SDPO 和 GRPO 时发现，GRPO 会在特定代码段意外物化内存副本，导致 OOM 问题（已关闭）。

### 4. 关键 PR 进展
*   **[ 🚀 功能迭代 ] 适配 vLLM 0.26.0** ([PR #6569](https://github.com/huggingface/trl/pull/6569), [PR #6562](https://github.com/huggingface/trl/pull/6562))
    确认 vLLM 0.26.0 对 TRL 无破坏性更新，并正在测试其新增的 Stateful Trainer-Send 权重传输机制对实验性 Async GRPO 的增益。
*   **[ 🖼️ 多模态训练 ] Async GRPO 视觉语言模型支持** ([PR #6515](https://github.com/huggingface/trl/pull/6515))
    解除 `AsyncGRPOTrainer` 纯文本限制，补齐 vLLM 多模态端到端训练能力。
*   **[ 🛠️ Bug 修复 ] 修复无网格元数据 VLMs 多图训练错位** ([PR #6570](https://github.com/huggingface/trl/pull/6570))
    修复 LLaVA、Idefics 等在多图 batch 中因 `pixel_values` 布局差异导致的图像与样本错位异常。
*   **[ ⚡ 性能优化 ] SFTTrainer 允许跳过昂贵的 Entropy/Logits 计算** ([PR #6571](https://github.com/huggingface/trl/pull/6571))
    允许用户在训练时禁用熵和平均 Token 精度计算，以避免在设备上物化完整 Logits 带来的巨大通信与显存开销。
*   **[ ☁️ 分布式拓展 ] 远程 HF 沙盒并发清理优化** ([PR #6564](https://github.com/huggingface/trl/pull/6564))
    修复了异步 GRPO 环境下，关闭远程 OpenEnv 会话时导致的沙盒内存泄漏与阻塞问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **高频跟进前沿推理引擎**：TRL 团队对底层 LLM 推理框架（vLLM 0.26）的跟进极其迅速，并在积极探索 `AsyncGRPO` 等打破传统生成与训练时间线的异步范式，这是提升大规模 RLHF 吞吐量的关键。
2.  **从纯文本向全模态平滑过渡**：从近期的 PR（VLM 多图适配、Async VLM 支持）可以看出，RL 训练（尤其是 GRPO）正在快速且稳健地向视觉语言模型（VLM）领域拓宽。
3.  **直击大规模训练的痛点**：开发者对显存管理极为敏感。无论是修复 GRPO 中的冗余副本、提供 SFT 时跳过昂贵指标计算的选项，还是对 BitsAndBytes 新版量化的无缝适配，都表明 TRL 是真正在为千卡/万卡级别的大规模生产环境解决实际工程障碍。

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

# verl (volcengine/verl) RL 日报摘要 (2026-07-29)

## 1. 今日速览
过去 24 小时内，verl 仓库活动高度活跃：共更新 **22 条 Issues** 和 **33 条 PRs**，无新版本发布。当前生态贡献高度聚焦于底层训练引擎的内存泄漏修复、异构硬件（NPU）适配，以及 Megatron/vLLM 后端的深度性能优化。

## 2. 版本发布
- **最新 Releases**：无（主分支代码持续推进中，当前主分支隐含版本约在 `v0.7.0.dev`）。

## 3. 重点 Issues
开发者近期反馈的痛点主要集中在多轮训练中断、显存异常泄漏以及多后端对齐问题上：

- **[Bug] PPO 训练同步挂起**：在 `main_ppo_sync.py` 中，若单个 prompt 始终卡在 `running` 状态，`ReplayBuffer.sample()` 会导致进程无限挂起。（[#7155](https://github.com/volcengine/verl/issues/7155)）
- **[Bug] FSDP 多 GB 显存泄漏**：FSDP 引擎的 `forward_step` 未对 `model_output` 进行 `detach`，导致跨 micro-batch 的自动求导图未被释放，引发数 GB 级别的显存泄漏。（[#7166](https://github.com/volcengine/verl/issues/7166)）
- **[讨论] FSDP 与 Megatron 后端 grad_norm 差异**：开发者发现同参数下，Megatron 的 `grad_norm` 比 FSDP2 普遍大三倍左右，可能导致训练曲线复现困难。（[#4710](https://github.com/volcengine/verl/issues/4710)）
- **[讨论] 推理加速 RFC**：提议在生成阶段引入 Suffix Decoding + LSTM 投机采样，以突破逐 Token 解码的吞吐瓶颈。（[#4791](https://github.com/volcengine/verl/issues/4791)）

## 4. 关键 PR 进展
今日 PR 更新展现了社区在底层算子通信和工程优化上的硬核投入：

- **Mooncake RDMA 点对点权重同步**：引入全新的 P2P checkpoint 引擎，绕过 NCCL 直接通过 Mooncake RDMA 将 Megatron 权重推送到 SGLang 引擎，大幅降低权重同步开销。（[PR #7108](https://github.com/volcengine/verl/pull/7108)）
- **显存与内存泄漏修复**：
  - 修复 vLLM MoE 权重重载时的显存占用问题，在克隆 CUDA-IPC buffer 前过滤非本地专家。（[PR #7143](https://github.com/volcengine/verl/pull/7143)）
  - 修复 FSDP2 未遵从 HuggingFace `_keep_in_fp32_modules` 导致的精度异常下降。（[PR #7165](https://github.com/volcengine/verl/pull/7165)）
- **异构计算 (Ascend NPU) 支持增强**：
  - 修复纯 CPU 节点上进行 NPU 可用性检查时的崩溃问题，提升 Ray 集群健壮性。（[PR #7134](https://github.com/volcengine/verl/pull/7134)）
  - 为昇腾 mstx / NPU profiler 添加 mini-batch 级别的采样调度，避免生成过大的追踪文件。（[PR #7105](https://github.com/volcengine/verl/pull/7105)）
- **Megatron 通信与算子优化**：支持在 Megatron-Bridge 上进行 TP+EP 感知的 Sharded Delta 同步（[PR #7181](https://github.com/volcengine/verl/pull/7181)），以及修复 THD-packed 批次下的 R2 Router replay 对齐问题（[PR #7106](https://github.com/volcengine/verl/pull/7106)）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在从单纯的 RLHF 训练框架演化为**面向超大规模和异构计算的全栈 RL 基础设施**。
1. **突破分布式通信瓶颈**：引入如 Mooncake RDMA（绕过 NCCL）、veomni FSDP2+EP Sharded Delta 等前沿特性，直击百亿/千亿参数模型 RL 训练中“权重同步慢”的阿喀琉斯之踵。
2. **深度拥抱 Agent 与多轮推理**：近期大量关于 `agent_loop`、异步奖励计算、多轮 rollout 元数据保留的修复，表明 verl 正在为复杂的 Tool-use 和 Agent RL 场景打下坚实基础。
3. **硬核的工程降本增效**：社区正在密集解决 FSDP/Megatron 精度对齐、vLLM FP8 权重重载、NPU 显存泄漏等极端工程问题，这标志着其向工业级高可用和高性能标准迈进的关键一步。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是 2026-07-29 Open Instruct 强化学习（RL）生态项目日报：

### 1. 今日速览
- **整体活跃度**：过去 24 小时内，项目无新增 Issues、无新版本发布，但有 **3 个核心 PR** 取得了关键更新。
- **技术焦点**：当前代码库的更新高度聚焦于**底层训练架构的解耦与重构**、**显存效率优化（Tiled loss）**，以及对**最新一代基础模型（Qwen3-MoE）的全面适配**。

### 2. 版本发布
- **无新版本发布**。底层依赖的大版本升级（见 PR #1791）目前正在 PR 阶段，预示着项目即将迎来一次重大的底层架构迭代。

### 3. 重点 Issues
- **无更新**。社区在过去 24 小时内未提出新问题或推进已有讨论，项目处于稳定开发期。

### 4. 关键 PR 进展
当前活跃的 3 个 PR 均处于 `[OPEN]` 状态，涉及核心算法实现与基础设施升级：

- **[PR #1790] WIP: Add DPPO via the unified rho-divergence masking paradigm + refactor APIs**
  - **作者**: undfined
  - **进展**: 重构并接入 DPPO（Discounted Proximal Policy Optimization）算法。
  - **技术解析**: 该 PR 并未采用新建独立 trainer 的“脏方法”，而是将 DPPO 深度融入现有的 GRPO 机制（共享比率计算、校正和掩码）。这种重构显著提升了算法的数值鲁棒性、可配置性及代码的可组合性。
  - **链接**: [allenai/open-instruct PR #1790](https://github.com/allenai/open-instruct/pull/1790)

- **[PR #1785] Add tiled GRPO lm-head loss**
  - **作者**: farhatkevin
  - **进展**: 针对超大规模模型训练的显存瓶颈提出解决方案。
  - **技术解析**: 引入了可选的、内存高效的“分块计算（Tiled）”机制，用于处理 GRPO 算法中 `lm-head` 的损失计算。该 PR 有效缓解了超大词表或极长上下文导致的 OOM（显存溢出）问题。
  - **链接**: [allenai/open-instruct/pull/1785](https://github.com/allenai/open-instruct/pull/1785)

- **[PR #1791] Add Qwen3-MoE training and live weight synchronization support**
  - **作者**: undfined
  - **进展**: 全面升级 CUDA 训练栈，并支持最新 MoE 架构。
  - **技术解析**: 
    1. **底层跃升**: 将 PyTorch 升级至 2.11，Transformers 升级至 5.5.3，vLLM 升级至 0.25.1，并同步更新 FlashAttention 等依赖。
    2. **架构适配**: 添加了 Qwen3-MoE 的权重导出功能，能将融合的专家张量平滑展开为 vLLM 兼容的格式（gate/up/down projections）。
    3. **训练增强**: 支持在 RL 训练过程中的**实时权重同步**，这对于维持 On-policy RL 算法的推理与训练一致性至关重要。
  - **链接**: [allenai/open-instruct/pull/1791](https://github.com/allenai/open-instruct/pull/1791)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
Open Instruct 今天的 PR 更新展示了其在开源 RL 生态中的三个不可替代的定位：
1. **前沿 MoE 模型的首选 RL 框架**: 随着 LLM 向 MoE 架构演进，RL 框架与 vLLM 推理引擎的权重同步变得极其复杂。Open Instruct (PR #1791) 正在快速填补这一生态空白，成为首批完美支持 Qwen3-MoE 及最新 vLLM 0.25+ 栈的开源项目之一。
2. **坚持工程级的算法解耦**: 从 PR #1790 对 DPPO 的重构可以看出，项目拒绝简单地“堆砌”算法，而是致力于将不同的策略优化算法（GRPO, DPPO）统一到底层的 Divergence 与 Masking 机制中。这种架构设计对研究者和二次开发者极度友好。
3. **直击大模型训练痛点**: PR #1785 的 Tiled loss 机制，直面 GRPO 算法在处理庞大 `lm-head` 矩阵乘法时的显存痛点，使得在有限算力下进行高阶强化学习探索成为可能。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026-07-29 CleanRL 项目生态日报摘要：

### 1. 今日速览
截至 2026-07-29，CleanRL 仓库过去 24 小时内无新版本发布。社区活跃度集中在存量代码的维护与生态兼容性修复上：共有 1 条 Issue 更新，3 条 PR 更新。当前核心工作聚焦于修复 Gymnasium 新版本（v1.0+）带来的 API 变动，以及解决 JAX 依赖库的弃用问题。

### 2. 版本发布
* **无新版本发布**（近期无 Release 记录）。

### 3. 重点 Issues
* **#568 [OPEN] Misleading TensorBoard Command** 
  * **链接**: [vwxyzxyzjn/cleanrl Issue #568](https://github.com/vwxyzjn/cleanrl/issues/568)
  * **事实摘要**: 用户 `itsmartinoliver` 指出 README 中启动 TensorBoard 的命令行 `tensorboard --logdir runs` 存在路径误导。该命令暗示 `runs` 目录位于 `cleanrl/cleanrl` 下，但实际目录在 `cleanrl` 根目录。属于文档易用性缺陷。

### 4. 关键 PR 进展
今日更新的 3 个 PR 均为底层依赖与核心算法逻辑的修复，反映了 RL 生态上游变动对项目的影响：

* **#567 [OPEN] Fix KeyError on Gymnasium final_obs for off-policy scripts**
  * **链接**: [vwxyzjn/cleanrl PR #567](https://github.com/vwxyzjn/cleanrl/pull/567)
  * **事实摘要**: 针对 Gymnasium ≥ 1.0 和 MuJoCo v5 的适配。修复了使用 `SAME_STEP` 自动重置机制时，终端观测值键名从旧版 `infos["final_observation"]` 变更为 `infos["final_obs"]` / `infos["_final_obs"]` 导致的 KeyError。解决了所有 Off-policy 算法的兼容性问题。
* **#538 [CLOSED] fix: use single_action_space in DDPG for vectorized envs**
  * **链接**: [vwxyzjn/cleanrl PR #538](https://github.com/vwxyzjn/cleanrl/pull/538)
  * **事实摘要**: 修复了 DDPG 算法在向量化环境中构建网络时错误使用 `envs.action_space`（而非 `envs.single_action_space`）导致的维度形状错误。该 PR 已于今日关闭。
* **#554 [OPEN] fix: refresh jax extra dependency pins**
  * **链接**: [vwxyzjn/cleanrl PR #554](https://github.com/vwxyzjn/cleanrl/pull/554)
  * **事实摘要**: 解决 JAX 依赖解析失败导致的 CI 报错。旧版本（如 `jaxlib==0.4.7`）已从当前 pip 源中移除，该 PR 更新了 `jax`, `jaxlib`, `flax`, `optax`, `chex` 的版本锁定，以保证 JAX 实现的算法能够正常测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 一直秉持“单文件实现”的极简哲学，这种高透明度的架构使其成为研究人员复现算法和修改核心逻辑的首选。
但从今日的 Issue 和 PR 动态可以看出，上游生态（如 Gymnasium v1.0 的键名变更、向量化环境空间的严格限制、JAX 库的高速迭代弃用旧包）对单文件架构提出了维护挑战。CleanRL 团队及社区正在积极且精准地跟进这些底层 API 的变动（如 PR #567 和 #554）。**正是这种对上游变动极快的响应速度，确保了项目在当前快速演进的 RL 生态中，依然保持着作为“高质量算法基准测试床”的核心价值。**

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 开源生态日报：rl_games 项目追踪 (2026-07-29)**

**1. 今日速览**
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库无新增 Issue、无合并的 PR 且无新版本发布。整体代码库处于维护与底层优化阶段，项目活动集中在现存核心代码的审查与修复上。

**2. 版本发布**
- **最新 Releases**：无（数据统计周期内未发布新版本）。

**3. 重点 Issues**
- **新增及活跃 Issues**：共 0 条。今日无技术讨论或 Bug 反馈更新。

**4. 关键 PR 进展**
虽然无新增 PR，但以下核心基础架构 PR 在昨日（2026-07-28）有重要更新动态：

- **[#362](https://github.com/Denys88/rl_games/pull/362) [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
  - **作者**: ViktorM
  - **动态**: 昨日更新审查状态。
  - **技术摘要**: 这是一个针对 PPO 算法在自动重置环境（autoreset envs，如 EnvPool 和原生 Gymnasium 1.x）中数据合规性的关键修复。在 `next_step-autoreset` 模式下，环境重置那一步产生的“无效数据”（环境忽略动作、填充的虚假 reward、上一 Episode 的终止 obs）此前被作为真实训练数据混入了 PPO 的 rollouts 中。本 PR 旨在将这些“垃圾行”进行 Mask（掩码）处理，并引入了 scalar sigma 参数化。这是提升 PPO 在复杂向量化环境中训练稳定性和正确性的重要底层修复。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **极致的推理与训练性能**：[rl_games](https://github.com/Denys88/rl_games) 长期以来是强化学习领域（尤其是基于物理引擎的机器人控制和连续控制任务）的 SOTA（State-of-the-Art）基线之一。其底层基于 CUDA 优化的神经网络实现和极低开销的 GAE/PPO 逻辑，使其在单卡高吞吐量训练上表现卓越。
- **NVIDIA 生态的核心基线**：在 Isaac Gym / Isaac Lab 等大规模 GPU 物理仿真生态中，rl_games 几乎是默认且必测的 RL 训练框架。
- **底层算法严谨性持续迭代**：从今日追踪的 [PR #362](https://github.com/Denys88/rl_games/pull/362) 可以看出，项目维护者对“向量化环境自动重置”带来的数据污染问题有着极高的敏锐度。这种针对 RL 底层机制（如 rollout 边界处理、方差参数化）的硬核修复，对于追求算法极限收敛和复现严谨性的 RL 研究者而言，具有不可替代的参考和使用价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态动态 (2026-07-29)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库整体活跃度较低，无新增 Issues 或 Releases。共有 2 个已有的 Pull Requests 发生了状态更新，均由贡献者 `Kallinteris-Andreas` 发起，核心聚焦于环境性能基准测试工具的完善与代码覆盖率的提升。

**2. 版本发布**
无。过去 24 小时内未发布新版本。

**3. 重点 Issues**
无。过去 24 小时内无 Issue 创建或更新。

**4. 关键 PR 进展**
*   **[#1651] Add tests for performance utilities** [OPEN]
    *   **作者:** Kallinteris-Andreas
    *   **链接:** [Farama-Foundation/Gymnasium PR #1651](https://github.com/Farama-Foundation/Gymnasium/pull/1651)
    *   **进展:** 创建于昨日。主要为性能工具添加确定性测试。
    *   **技术摘要:** 针对 `benchmark_step`、`benchmark_init` 和 `benchmark_render` 引入了单元测试。验证了吞吐量计数、种子传播、环境完成后的重置逻辑以及辅助函数的调用次数。作者直言该测试代码由大模型生成，但能有效防止性能监控工具出现隐蔽的回归问题。
*   **[#1640] Add vector environment step benchmark** [OPEN]
    *   **作者:** Kallinteris-Andreas
    *   **链接:** [Farama-Foundation/Gymnasium PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640)
    *   **进展:** 该 PR 于 7 月 16 日创建，在昨日获得了最新更新。
    *   **技术摘要:** 新增了 `benchmark_step_vector` 方法，用于测量向量化环境每秒可执行的步数。作者表示该功能主要用于 MuJooco MJX 环境的吞吐量测试，已通过双环境 CartPole 冒烟测试及 `ruff` 代码规范检查。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **RL 基础设施的事实标准：** 尽管每日动态平稳，但 Gymnasium 作为目前 RL 社区最核心的环境 API 接口规范，其微小的改动（如向量化环境 API）都会直接影响下游算法库（如 Stable-Baselines3, CleanRL）的设计。
*   **性能评测标准化的探索：** 从近期的 PR 动态可以看出，维护团队及社区正致力于强化“向量化环境”和“渲染/初始化”的性能基准测试。随着物理仿真引擎（如 MJX）对 JAX 等硬件加速支持的提升，底层环境吞吐量的精准测量变得至关重要。Gymnasium 在这一领域的完善，将为大规模 RL 实验的 Benchmark 提供更严谨的基础设施。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-07-29)**

**1. 今日速览**
过去 24 小时内，PettingZoo 仓库动态平稳。无新版本发布，共更新 1 条 Issue 和 1 条 PR。项目当前的核心焦点集中于**底层架构重构（Wrapper 模块迁移）**与**自动化依赖维护**。

**2. 版本发布**
- **无新版本发布**。核心 API 当前处于稳定维护阶段。

**3. 重点 Issues**
- **#1365 [enhancement, help wanted] Migration to pettingzoo.wrappers** 
  - **链接**: [Farama-Foundation/PettingZoo Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)
  - **更新时间**: 2026-07-28
  - **核心摘要**: 官方发起重大架构重构讨论。核心目标是**弃用 `Supersuit` 库**，将其中的环境包装器（Wrappers）逐步迁移并内置到 `pettingzoo.wrappers` 模块中，以实现对齐 `Gymnasium.wrappers` 的 API 一致性。
  - **生态信号**: 维护者明确表示欢迎社区以“一 PR 一个 Wrapper”的形式提交代码。这是当前多智能体 RL 开发者参与 Farama-Foundation 核心生态建设的绝佳入口（Good First Issue 性质）。

**4. 关键 PR 进展**
- **#1408 [dependencies, python] Bump ray from 2.55.0 to 2.56.0 in /tutorials/Ray** 
  - **链接**: [Farama-Foundation/PettingZoo PR #1408](https://github.com/Farama-Foundation/PettingZoo/pull/1408)
  - **更新时间**: 2026-07-28
  - **核心摘要**: 由 `dependabot` 自动触发的依赖更新。将 `/tutorials/Ray` 目录下的 `ray` 依赖从 2.55.0 平滑升级至 2.56.0。确保多智能体分布式训练教程与 Ray 生态的最新版本保持兼容。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
- **API 统一与去碎片化**: PettingZoo 正在持续推进与 Farama-Foundation 旗下核心项目（如 Gymnasium）的 API 深度对齐。内置化 Wrappers（淘汰 Supersuit）将大幅降低开发者的环境配置成本，减少多智能体环境封装的碎片化问题。
- **多智能体基准地位**: 作为当前 RL 生态中最标准的多智能体环境 API 接口（AEC/API 标准制定者），其底层架构的任何变动（如 Wrappers 迁移）都将直接影响下游主流 RL 算法库（如 CleanRL, Stable-Baselines3 等）的适配逻辑。
- **分布式训练兼容性**: 从今日的 Ray 依赖升级可以看出，项目对分布式计算生态（Ray/RLLib）保持极高的兼容敏感度，持续为大规模多智能体训练提供可靠的标准教程与环境支持。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>