# RL 开源生态日报 2026-05-29

> 生成时间: 2026-05-28 22:29 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“分层演进”态势，完全映射了 AI 产业的重心转移：
1. **大模型对齐成绝对主导**：面向 LLM Post-training 的 RLHF 框架（verl, AReaL, TRL, Open Instruct, ROCK, slime, ROLL 等）占据了生态 95% 以上的动态与工程创新资源。
2. **经典 RL 基石进入平稳期**：传统的单智能体/多智能体标准库（Gymnasium, PettingZoo, CleanRL, SB3 等）除基础的依赖维护（如适配 Python 3.14）外，核心架构已趋于收敛，过去 24 小时内多数处于零动态状态。
3. **系统壁垒大幅提升**：LLM 强化学习已跨越“算法脚本”阶段，全面进入分布式系统、异构算力调度与底层显存/算子压榨的深水区。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 3 (1O/2C) | 33 | 0 | 底层算力压榨极致化，发力多模态与 Agent 交互 |
| **ROCK** | 3 (1O/2C) | 16 | 0 | 重构沙箱生命周期，向生产级分布式集群治理演进 |
| **Open Instruct** | 0 | 15 | 0 | 集中攻坚 GRPO 死锁与 IFEval 评估逻辑漏洞 |
| **AReaL** | 1 | 11 | 0 | 启动 v2 微服务架构重构，引入 PD 分离与算子融合 |
| **TRL** | 8 (3O/5C) | 7 | 0 | 重构去耦合底层训练器，死磕 ZeRO-3 与异步并发 |
| **slime** | 1 | 5 | 0 | 深度定制 Megatron 算子与通信机制，强化数值校验 |
| **OpenRLHF** | 1 | 0 | 0 | 探讨引入预编译 Attention 内核，降低部署门槛 |
| **Gymnasium** | 0 | 1 | 0 | 跟进 Python 3.14 上游依赖支持 |
| **PettingZoo** | 0 | 1 | 0 | 修复多智能体环境带种子重置时的奖励回归 Bug |
| **ROLL** | 0 | 1 | 0 | 完善昇腾 NPU 异构算力适配文档 |
| *(其他无活动项目)* | 0 | 0 | 0 | CleanRL, rl_games, SB3, Tianshou, torchtune 过去 24h 零动态 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从单轮对齐迈向 Agentic RL**：强化学习的核心边界正从单轮 Prompt 对齐拓展至多轮环境交互。verl 和 AReaL 纷纷引入实验性 Agent 框架、多轨迹生成与异步 Rollout 机制，为自主 Tool-use 和复杂 CoT 决策铺路。
2. **策略蒸馏 普及化**：AReaL 和 slime 都在完善 On-Policy Distillation 的链路，结合 verl 引入的 Fused Top-K 内核，表明“弱到强”或大模型间在线蒸馏正成为继 RLHF/GRPO 之后的核心后训练演进方向。

**工程/基础设施侧信号：**
1. **围剿“显存墙”与算子级优化**：各大框架均在避免 `[B, L, V]` 规格的完整 logits 显式物化。AReaL 引入 Triton 融合的线性交叉熵算子，verl 切断无用梯度图并优化 BF16 状态缓存，直击大模型 RL 训练的显存峰值痛点。
2. **云原生与微服务架构重构**：大型训练框架正在摆脱单体脚本设计。AReaL 提出统一的微服务控制面 CLI，ROCK 深入沙箱与运维任务的多级数据库持久化治理，项目纷纷向解耦、高可用的分布式系统架构转型。
3. **分布式训练鲁棒性攻坚**：深度学习框架的底层 Bug 被集中暴露并修复，例如 Open Instruct 和 TRL 重点排除了分布式环境下的 GRPO 死锁、DeepSpeed ZeRO-3 参数未聚合引发的 NaN 梯度灾难。

## 差异化定位分析
1. **verl & AReaL（全能型性能怪兽）**：两者在底层硬件适配（昇腾 NPU、寒武纪 MLU）、显存优化与前沿架构（PD 分离）上高度内卷，致力于提供极致性能的端到端 LLM RL 基建。
2. **ROCK（生产级环境运维专家）**：差异化体现在“RL 环境的工程化治理”。其核心发力点不在算法，而在于攻克沙箱高并发启停、集群状态流转与 I/O 隔离，是 Agent 训练必不可少的底座。
3. **TRL & Open Instruct（前沿算法生态与验证平台）**：依托 HuggingFace 和 AllenAI 的生态，定位偏向算法覆盖率与研究者友好度。当前重心在于快速重构底层以支持复杂的 DPO/KTO/GRPO 分布式训练，并极度注重评估体系的准确性。
4. **Gymnasium & PettingZoo（标准化的定海神针）**：彻底沉淀为 RL 领域的底层 API 标准，研发重心仅在于维持跨 Python 版本的兼容性与基础环境逻辑的绝对严谨。

## 社区热度与成熟度
1. **核心开源项目步入“深水区Bug修复期”**：从 Open Instruct 修复 DPO 掩码除零错误，到 TRL 解决异步并发瓶颈，说明主流框架的底层逻辑正在经历百亿级参数大规模长时训练的严苛检验，代码库正快速趋于工业级成熟。
2. **上下游生态协同紧密**：上游巨头（如 HuggingFace 团队）开始主动介入下游框架（如 OpenRLHF）的底层优化（提议引入预构建 Flash Attention），标志着大模型训练框架的基础设施组件正在向高度模块化和标准化整合。
3. **关注异构算力的国产化替代**：verl 建立硬件平台抽象插件层，ROLL 持续跟进昇腾文档，反映出国内开源 RL 生态在算力多元化和国产化芯片适配上投入了实质性资源，生态正在分流演进。

## 值得关注的趋势信号
1. **异步与解耦成为 RL 训练标配**：全异步管线、Serverless 推理引擎卸载、非阻塞调度机制正在成为新一代 RLHF 框架的标志性架构。
2. **评估信号的准确性引发前所未有重视**：Open Instruct 大修 IFEval 约束验证逻辑，slime 在 CI 中加入 `logprob_abs_diff` 校验。表明社区已意识到，在 RL 驱动的数据飞轮中，微小的奖励/评估 Bug 会引发灾难性的模型跑偏。
3. **多模态 RLHF 的工程化破局**：随着 verl 迅速修复 vLLM 多模态特征缓存复用痛点，TRL 持续增加 VLM 的训练模板，支持图文/视频输入的复杂多模态 Post-training 已具备可规模化复用的开源工程基础。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL（alibaba/ROLL）项目 2026-05-29 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体处于平稳迭代状态，未产生新的 Issues 和版本发布。项目维护者的主要精力集中在底层硬件生态（华为 Ascend 昇腾）的文档维护与部署脚本适配上。

### 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

### 3. 重点 Issues
- **最新 Issues**：过去 24 小时无新增或更新的 Issue。目前社区暂未暴露出新的技术阻碍或功能需求。

### 4. 关键 PR 进展
- **[#453 [CLOSED] [docs] update ascend docs and script](https://github.com/alibaba/ROLL/pull/453)**
  - **作者**: shun001
  - **摘要**: 这是一个文档和脚本维护类 PR。主要更新了针对华为 Ascend（昇腾）NPU 架构的相关技术文档和运行脚本。该 PR 已在同日（05-28）被合并关闭，说明 ROLL 目前正在积极确保其异构计算生态（NPU 支持）的文档准确性和易用性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **大模型 RLHF 底层基建**：ROLL 是阿里巴巴开源的强化学习训练框架，专为 LLM 的 RLHF/GRPO 等对齐算法设计。在当前大模型竞争进入“后训练（Post-training）时代”的背景下，其工程架构对业界具有重要参考价值。
- **异构算力适配趋势**：从今日的 PR 进展可以看出，ROLL 正在持续深化对非 Nvidia GPU 阵营（如 Ascend NPU）的适配。在当下算力国产化与芯片多元化的趋势下，一个能够良好支持多硬件生态的 RL 框架，在未来的开源 RL 赛道中具备极强的话语权和不可替代性。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (alibaba/ROCK) 项目 2026-05-28 RL 日报摘要：

---

# ROCK 项目 RL 生态日报 (2026-05-29)

## 1. 今日速览
过去 24 小时内，ROCK 项目保持了较高的研发活跃度，主要集中在 **Sandbox（沙箱）生命周期管理**、**系统调度器性能优化**及 **CI 流程治理**。
- **Issues 更新**: 3 条 (1 Open / 2 Closed)
- **PR 更新**: 16 条 (10 Open / 6 Closed)
- **新版本发布**: 0 个

## 2. 版本发布
今日无最新 Release。但社区已开始筹备 v1.8.0 版本的文档收尾工作。

## 3. 重点 Issues
- **[OPEN] v1.8.0 文档更新提议**：开发者提出需为中英文双语文档新增 v1.8.0 版本说明 ([#989](alibaba/ROCK Issue #989))。
- **[CLOSED] CI 流水线治理**：由于自托管 Runner 的环境目前不够稳定，开发者提议暂时移除需要管理员权限和网络权限的测试步骤，以解除 CI 阻塞 ([#1039](alibaba/ROCK Issue #1039))。
- **[CLOSED] SDK 追踪配置**：提议在 SDK 中添加 Tracking Config 支持已通过讨论并转移至 PR 实现阶段 ([#998](alibaba/ROCK Issue #998))。

## 4. 关键 PR 进展
当前核心代码变更呈现出明显的**集群维护与状态治理**特征，多个底层重构 PR 并行推进：

**沙箱与部署**
- **沙箱接口扩充**：新增 `/delete` 端点，并引入后台自动扫描清理机制 ([#1038](alibaba/ROCK PR #1038))。
- **沙箱重启支持**：实现 Sandbox 重启特性 ([#1001](alibaba/ROCK PR #1001))。
- **生命周期重构**：引入沙箱管理器的状态转换表，规范状态流转逻辑 ([#915](alibaba/ROCK PR #915))。
- **文件系统优化**：共享 Docker rootfs 的 XFS prjid 给沙箱日志目录，优化 I/O 与隔离 ([#1013](alibaba/ROCK PR #1013))。

**调度器与运维性能**
- **日志归档升级**：废弃原有的哨兵文件设计，全面转向基于 DB 驱动的日志归档任务 ([#1025](alibaba/ROCK PR #1025))。
- **多级日志清理**：针对 Ray 的 `session_latest/logs` 实现四阶段清理任务 ([#1029](alibaba/ROCK PR #1029))。
- **基础清理性能提升**：将文件清理任务的 `-exec rm` 替换为更高效的 `-delete`，并增加路径安全校验与黑名单机制 ([#967](alibaba/ROCK PR #967))。
- **Ops 作业 API**：引入基于 DB 持久化状态的运维作业 API，确保多 Pod 环境下的并发安全 ([#1027](alibaba/ROCK PR #1027))。

**CLI、SDK 与 CI**
- **CLI 下载支持**：新增 `rock storage get` 命令，支持通过 STS 临时凭证从 OSS 下载沙箱归档日志 ([#962](alibaba/ROCK PR #962))。
- **SDK 安全修复**：对生成的 Harbor job names 进行路径合规清洗，防止含 `/` 的路径引发下游异常 ([#1031](alibaba/ROCK PR #1031))。
- **CI 策略调整**：将 Admin 与 Network 测试设置为仅在 `push` 到主干时触发，大幅减少 PR 等待时间 ([#1040](alibaba/ROCK PR #1040))。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 并非仅仅停留在算法层面的实现，而是深入到了 **RL 基础设施的工程深水区**：
1. **攻克 RL 环境开销痛点**：大量关于 Sandbox 状态流转、重启及快速销毁的 PR 表明，该项目正致力于解决 RL 训练中“环境重置成本高”的工程痛点。
2. **面向生产级的稳定性**：从引入 DB 持久化状态替代文件系统哨兵、多 Pod 并发安全锁，到 XFS 文件系统级别的优化，显示出该项目正针对大规模分布式集群的长时训练进行深度适配。
3. **优秀的开发者体验**：持续完善的 CLI 工具链（如安全便捷的日志拉取）、主动的 CI 流水线降本提效以及规范的 SDK 校验，大幅降低了算法工程师在部署和排障时的心智负担。对于需要高并发环境交互的 RL 研究与工程团队来说，具有极高的参考和复用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-05-29 强化学习（RL）生态日报摘要。

---

### 1. 今日速览
过去 24 小时内，slime 仓库共处理了 1 条 Issue 更新与 5 条 PR 更新（3 条已合并/关闭，2 条开启），无新版本发布。整体节奏以底层基础设施修护、Megatron 分布式训练后端优化及策略蒸馏功能完善为主。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **[#1739 [Bug] Actor unavailable error](https://github.com/THUDM/slime/issues/1739)**
  - **状态**：OPEN
  - **作者**：zhusq20
  - **进展**：该 Issue 创建于 2026-03-18，昨日再次出现活跃评论。用户在运行 `train.py` 执行 RL 训练任务时遇到了 `Actor unavailable` 错误。该报错通常与 Ray 集群中 Actor 对象的生命周期管理或网络通信中断有关，目前社区正在持续跟进排查中。

### 4. 关键 PR 进展
昨日共有 5 项 PR 产生状态更新，核心聚焦于**分布式系统容错**、**底层框架集成**与**日志排查体验优化**：

- **[#1970 Add timeout configuration for on policy distillation HTTP session](https://github.com/THUDM/slime/pull/1970)** [OPEN]
  - **焦点**：针对在线策略蒸馏流程中的 HTTP Session 增加了超时配置功能，旨在提升分布式网络通信不佳时的系统鲁棒性。

- **[#1947 feat: add FlashQLA backend for Qwen GDN and skip selected comm memory checks](https://github.com/THUDM/slime/pull/1947)** [CLOSED]
  - **焦点**：为 Qwen3.5 / Qwen3-Next 的 Megatron 模型插件引入了 `FlashQLA` 后端支持，并通过对特定算子跳过通信前的显存守卫检查来降低分布式通信开销。对大模型 RLHF 阶段的工程加速具有重要意义。

- **[#1969 support --save-hf for raw mode](https://github.com/THUDM/slime/pull/1969)** [CLOSED]
  - **焦点**：增加了在 raw mode 下直接保存为 HuggingFace 格式权重的支持，大幅简化了基础模型在 RL 训练前后的格式转换流程。

- **[#1968 [ci] add check for train_rollout_logprob_abs_diff](https://github.com/THUDM/slime/pull/1968)** [CLOSED]
  - **焦点**：CI/CD 流水线更新。新增了对 `train_rollout_logprob_abs_diff` 的检查，这在 RL 算法中是监控 Actor 策略偏离度的重要指标，此举将进一步收紧代码提交的数值稳定性门槛。

- **[#1967 Fix PYTHONBUFFERED typo to PYTHONUNBUFFERED=1](https://github.com/THUDM/slime/pull/1967)** [OPEN]
  - **焦点**：修复了环境变量拼写错误（`PYTHONBUFFERED` -> `PYTHONUNBUFFERED`）。此前由于拼写错误导致 Ray 及训练代码的标准输出存在缓冲延迟，修复后开发者可以实时捕获训练日志。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
基于近期的代码提交与演进方向，slime 在大模型 RL 生态中具备以下核心观察价值：
1. **前沿大模型架构的深度适配**：PR #1947 显示项目正在快速集成最新的底层算子（如针对 Qwen 架构的 FlashQLA 后端），这表明 slime 不是简单的算法封装，而是深入到了 Megatron 等大尺度分布式框架的显存与通信优化层级。
2. **RL 工程化痛点解决**：无论是修复 Python 日志缓冲延迟（PR #1967）、增加蒸馏超时控制（PR #1970），还是支持直接导出 HF 格式，项目正在集中解决 RLHF/RL 训练中“调试难、容错差、流转繁琐”的工程顽疾。
3. **严苛的数值稳定性把控**：通过 CI 强制加入 rollout 对数概率绝对差的检查（PR #1968），反映出该项目在策略训练的数学稳定性上有着严格的工程纪律，这对于需要长期稳定运行的 LLM Post-training 流程至关重要。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-05-29）：

---

# AReaL RL 开源生态日报 (2026-05-29)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共处理 **11 个 PR**（其中 6 个开启，5 个关闭），新增 **1 个 Issue**，**无新版本发布**。整体开发活跃度保持高位，核心开发方向高度聚焦于 **微服务架构重构、模型支持扩展** 以及 **底层算子与显存优化**。

## 2. 版本发布
无。

## 3. 重点 Issues
- **[#1374 [Feature] Operator CLI (`areal`) for the v2 microservice architecture](https://github.com/areal-project/AReaL/issues/1374)**
  - **背景**：作者提议为正在推进的 v2 微服务架构（拆分为 inference, agent, weight-update, training 等独立 HTTP 服务）引入统一的命令行控制面 `areal`。该特性承诺向后兼容现有 `areal/api/`，标志着 AReaL 正在从单一训练脚本向可组合、云原生的 RL 系统演进。

## 4. 关键 PR 进展
过去一天的 Pull Request 主要围绕**底层系统优化**与**前沿模型对齐**展开，可分为以下四个关键方向：

### 架构演进与可观测性
- **[#1375 feat: Initial scaffold for the v2 microservice operator CLI](https://github.com/areal-project/AReaL/pull/1375)**：配合 Issue #1374，初步搭建了微服务操作脚手架，引入包含 `inf`, `agent`, `train`, `weight-update` 命名空间的控制台脚本，为后续细粒度管控奠定基础。
- **[#1360 Add rollout trace logging with `trackio`](https://github.com/areal-project/AReaL/pull/1360)**：集成 HF 团队提供的本地优先实验追踪库 Trackio，在现有 metrics 后端基础上增加 Trace 日志功能，大幅提升了 RL 轨迹的调试和可观测性。

### 分布式与内核级性能优化
- **[#1364 feat: Support PD Disaggregation: DP=2(1P1D),TP=1](https://github.com/areal-project/AReaL/pull/1364)**：引入 PD (Prefill-Decode) 分离架构。针对 LLM 自回归解码阶段存在显存带宽瓶颈的问题，将推理实例拆分为专门的计算角色，以打破利用率瓶颈。
- **[#1322 feat: Support Linear Cross Entropy fuse kernel](https://github.com/areal-project/AReaL/pull/1322)**：针对 Megatron 训练添加 Triton 融合的 LCE (Linear Cross Entropy) 内核，避免了 `[tokens, vocab]` 规格完整 logits 张量的显式物化，显著降低显存开销。

### RL 算法扩展：策略蒸馏
- **[#1376 feat(distillation): add on-policy distillation using RolloutEngine](https://github.com/areal-project/AReaL/pull/1376)** (注：替代此前已关闭的 [#1368](https://github.com/areal-project/AReaL/pull/1368))：弃用传统的 train-engine 教师路径，转而使用专用的 RolloutEngine (vLLM/SGLang) 进行 on-policy 蒸馏，旨在减少显存占用并提供更清晰的推理侧 log-prob 评分 API。

### 前沿模型桥接
- **[#1373 feat(mcore): add GLM-5/DeepSeek-V3 model support](https://github.com/areal-project/AReaL/pull/1373)** 与 **[#1372 feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter](https://github.com/areal-project/AReaL/pull/1372)**：这两个 PR 大幅扩展了 AReaL 的模型生态。不仅新增了对 GLM-5.1 / DeepSeek-V3 / GLM-4.7-Flash 的支持，还为 Bailing-MoE V2.5 等模型接入了基于 `megatron-bridge` 的双桥调度。相关旧版大 Pull Request（如 [#1362](https://github.com/areal-project/AReaL/pull/1362)）已被拆分合并。

*(此外，文档错别字修复 [#1352](https://github.com/areal-project/AReaL/pull/1352) 及社区会议记录更新 [#1371](https://github.com/areal-project/AReaL/pull/1371) 均已关闭/合并。)*

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **迈向生产级的微服务架构**：通过引入 v2 架构及 Operator CLI，AReaL 正在摆脱“单机实验脚本”的刻板印象，向支持高并发、高可用、各组件解耦的云原生 RL 基础设施转型，这对于大规模分布式 RL 训练至关重要。
2. **极致的显存与算力压榨**：从 PD 分离到 Triton 融合 Cross Entropy 内核，AReaL 的开发重点直指大模型 RLHF 阶段最头疼的显存墙和利用率问题，技术壁垒较高。
3. **紧跟 SOTA 模型迭代**：在同一天内快速跟进支持 DeepSeek-V3、GLM-5 及 Bailing-MoE 等顶级开源架构，证明了其模型桥接层（`mbridge` / `megatron-bridge`）的设计具有良好的扩展性。
4. **打通 On-policy 蒸馏链路**：隔离 Teacher 推理与训练引擎，标志着 AReaL 不仅局限于基础的 RLHF/PPO，正积极向更前沿的模型压缩与弱到强对齐技术栈拓展。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL (Transformer Reinforcement Learning) 项目 2026-05-29 RL 日报摘要：

# TRL (huggingface/trl) 日报 - 2026.05.29

## 1. 今日速览
过去 24 小时内，TRL 仓库共处理了 **8 个 Issues**（3 个新建/持续讨论，5 个已关闭）和 **7 个 Pull Requests**（6 个活跃更新，1 个合并）。整体活动聚焦于**训练器的底层重构**（KTO、Self-Distillation）、**多模态模型支持**（SmolVLM, Idefics3, Qwen3-VL）的完善，以及修复与 ZeRO-3 和异步 GRPO 相关的关键性能/兼容性 Bug。今日无新版本发布。

## 2. 版本发布
无。

## 3. 重点 Issues
- **[核心功能 Bug] GOLD 算法合并概率计算错误**：开发者指出在 TRL 实验性的 GOLD (Generalized Offline Distillation) 算法中，Token 分组的合并概率计算逻辑存在 Bug。([huggingface/trl Issue #5152](https://github.com/huggingface/trl/issues/5152))
- **[分布式训练 Bug] FSDP + 视觉语言模型设备冲突**：在结合 FSDP 训练 Qwen3-VL-30B-A3B 时，由于 FSDP 包装触发的钩子（Hooks）异常，导致 Reference Model 的索引张量滞留在 CPU，引发 `RuntimeError`。([huggingface/trl Issue #4771](https://github.com/huggingface/trl/issues/4771))
- **[训练收敛 Bug] PPO 梯度范数全为 0**：用户发现在 PPO 训练过程中获取的梯度全部为 0，该问题已被定位并关闭。([huggingface/trl Issue #3961](https://github.com/huggingface/trl/issues/3961))
- **[性能挂死] Qwen3 Schema 正则回溯导致 OOM**：`qwen3_schema` 中的嵌套量词在处理格式错误的 Tool calls 时会引发指数级回溯（$O(2^n)$），导致解析函数无限期挂起，此问题已解决。([huggingface/trl Issue #4865](https://github.com/huggingface/trl/issues/4865))
- **[CI 告警] 最低依赖版本下梯度不匹配**：核心维护者发现 CI 在最低版本测试环境下，SFT Trainer 的 `model.embed_tokens.weight` 出现梯度不匹配的 `AssertionError`。([huggingface/trl Issue #5874](https://github.com/huggingface/trl/issues/5874))

## 4. 关键 PR 进展
- **[架构重构] 解耦自蒸馏训练器 (SDPO, SDFT)**：移除了原有的 Base 类抽象，将 SDFT 和 SDPO 实现为独立的训练器，降低代码耦合度。([huggingface/trl PR #5862](https://github.com/huggingface/trl/pull/5862))
- **[架构重构] 对齐 KTO 与 DPO 逻辑，移除 `null_ref_context`**：重构了 PEFT 模型下无显式 Reference Model 的处理逻辑，删除了 `null_ref_context` 上下文管理器，提升了代码一致性。([huggingface/trl PR #5875](https://github.com/huggingface/trl/pull/5875))
- **[Bug 修复] 修复 DeepSpeed ZeRO-3 下的 `chunked_nll` 损失崩溃**：SFTTrainer 中的分块 Cross-Entropy 路径绕过了 DeepSpeed 的参数聚合钩子，导致非主 rank 上读取到 0 元素的权重分片并在矩阵乘法时崩溃，此 PR 予以修复。([huggingface/trl PR #5873](https://github.com/huggingface/trl/pull/5873))
- **[性能优化] AsyncGRPO 提升 aiohttp 并发限制**：将 Rollout worker 的 aiohttp 并发限制动态设置为 `max(100, max_inflight_tasks)`，修复了高并发异步生成任务时的瓶颈。([huggingface/trl PR #5861](https://github.com/huggingface/trl/pull/5861))
- **[多模态支持] 新增 SmolVLM 与 Idefics3 训练模板**：为 SmolVLM/VLM2 和 Idefics3 添加了带有 `&#123;&#37; generation &#37;&#125;` 标记的专用训练聊天模板，优化多模态对齐训练体验。([huggingface/trl PR #5868](https://github.com/huggingface/trl/pull/5868), [huggingface/trl PR #5871](https://github.com/huggingface/trl/pull/5871))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在经历从“纯 RL 算法库”向“大模型高级对齐与后训练综合框架”的演进。
1. **对前沿分布式训练的极速响应**：无论是暴露出的 FSDP 多模态张量设备错误，还是针对 DeepSpeed ZeRO-3 分块损失计算的底层修复，都表明 TRL 团队在死磕大模型在实际工业级分布式训练中的痛点。
2. **向复杂推理与异步生成的拓展**：AsyncGRPO 并发能力的重构，以及对 Regex 解析（防范 ReDoS 挂死）的修复，说明 TRL 正在为高并发、大规模的 Agent/Tool-calling 场景的 RL 训练（如 GRPO 算法）铺平道路。
3. **架构的持续自我进化**：核心开发者正在系统性重构底层代码（如 KTO 的 ref 处理对齐 DPO、解耦 Self-Distillation 训练器），这使得 TRL 在快速迭代引入新 RL 算法（如 GOLD）的同时，保持了工程上的可维护性和健壮性。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-05-29)

## 1. 今日速览
过去 24 小时，OpenRLHF 代码库整体保持平静，无新增代码合并或版本发布。项目当前的焦点集中在基础设施与依赖优化上，社区（特别是 Hugging Face 团队）正在积极推动底层 Attention 内核的构建流程改进。

*   Issues 更新：1 条
*   PR 更新：0 条
*   新版本发布：0 个

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
*   **提议引入预构建的 Flash Attention 内核** 
    *   **链接:** [#1244 Consider using pre-built Flash Attention kernels via `kernels`](https://github.com/OpenRLHF/OpenRLHF/issues/1244)
    *   **作者:** sayakpaul
    *   **摘要:** 来自 Hugging Face `Kernels` 团队的成员指出，当前 OpenRLHF 所依赖的 Flash Attention 在本地编译构建耗时较长。该 Issue 提议集成 Hugging Face 新推出的预构建二进制内核（提供与上游 bit-exact 的输出），旨在消除漫长的本地编译环节，降低环境配置门槛并提升部署效率。目前该提议已获得 1 个赞，正在等待项目维护者的评估与回应。

## 4. 关键 PR 进展
过去 24 小时内无新增或更新的 Pull Requests。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管本日无代码级更新，但 Issue #1244 的出现揭示了 OpenRLHF 在大模型强化学习（RLHF/RLAIF）基础设施工具链中的关键地位：
1. **前沿训练范式的标杆**: OpenRLHF 是目前开源社区中少数能够高效支持大规模 PPO/DPO 训练的框架之一，其架构设计和性能优化直接影响开源 LLM 对齐的效率。
2. **与上游生态的深度融合**: 像 Hugging Face 这样的上游巨头团队主动来此提出内核级适配（如优化 Flash Attention 编译链），说明该项目不仅是框架的使用者，更是大模型算力与算法生态协同优化的核心交汇点。
3. **工程效率的极致追求**: 讨论预编译内核以缩短构建时间，反映了该社区对“大规模训练集群的工程易用性”有着极高的要求，这种工程积累对于降低整个 RL 开源生态的试错成本至关重要。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 (2026-05-29)

## 1. 今日速览
过去 24 小时内，verl 仓库共处理 **3 条 Issues**（1 open, 2 closed）和 **33 条 PRs**。虽然无新版本发布，但社区在**底层显存优化、多模态 Rollout 稳定性、异构硬件适配**以及**实验性 Agent 框架**等核心维度保持了高活跃度，PR 代码提交呈现高度工程化和细粒度特征。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[[vLLM] Multimodal caches are not reset after weight updates](https://github.com/verl-project/verl/issues/6523)** `[OPEN]`
  多模态 Rollout 场景下的严重 Bug：权重更新后，vLLM 仅重置了 KV cache，未清空多模态编码器缓存，导致推理阶段复用了旧的多模态特征。该 Issue 已有对应修复 PR (#6522) 提出。
- **[OPD losses error for Megatron](https://github.com/verl-project/verl/issues/6492)** `[CLOSED]`
  使用 Megatron 后端进行 On-Policy Distillation (OPD) 计算损失时，张量维度预处理不匹配导致的报错已得到确认和解决。

## 4. 关键 PR 进展

### 🚀 核心架构与性能优化
- **[trainer] feat: generic remote backend abstraction for RL Training** ([#6422](https://github.com/verl-project/verl/pull/6422))
  引入通用的 Remote Backend 抽象层，为 RL 训练解耦本地计算图依赖，提升架构弹性。
- **[megatron] feat: align optimizer states and DDP grad bucket with model precision** ([#6526](https://github.com/verl-project/verl/pull/6526))
  修复 BF16 训练下的冗余内存开销。将 Adam 状态和梯度累加缓冲区与模型精度对齐，**节省约 2/3 的相关缓存显存**。
- **[fsdp, algo] no grad for entropy and kl if the loss coef is 0** ([#6519](https://github.com/verl-project/verl/pull/6519))
  当 entropy 或 KL 散度损失系数为 0 时，阻断其梯度计算，有效缩减 Actor 反向传播的计算图，降低无用的计算开销。
- **[megatron] fix: Fix GPU memory leak in ref model offload** ([#6447](https://github.com/verl-project/verl/pull/6447))
  显式释放存储，解决 Reference Model 卸载到 CPU 时的 GPU 显存泄漏问题。

### 🤖 算法支持与 Agent 生态
- **[veomni, fsdp] feat: enable fused top-K distillation kernel for OPD** ([#6511](https://github.com/verl-project/verl/pull/6511))
  引入 Fused Top-K 蒸馏内核，避免生成完整的 `[B, L, V]` logits 张量，大幅缓解上屏 (OPD) 蒸馏时的显存峰值瓶颈。
- **[rollout, tool] feat: add experimental agent framework and gateway runtime** ([#6299](https://github.com/verl-project/verl/pull/6299))
  发布实验性多轮 Agent 框架与网关运行时，进一步向 Multi-turn Tool-use 和复杂 RL 决策场景拓展。
- **[trainer, fully_async] feat: add support for multi-trajectory in one rollout** ([#6271](https://github.com/verl-project/verl/pull/6271))
  在全异步管线中支持单次 Rollout 输出多条轨迹，提升数据采样效率。

### 🛠️ 模型与后端适配
- **[vllm] fix: reset all caches after weight updates** ([#6522](https://github.com/verl-project/verl/pull/6522))
  配合 Issue #6523，彻底修复多模态推理缓存未刷新的痛点。
- **[fsdp, model] feat: support glm_moe_dsa FSDP training** ([#6525](https://github.com/verl-project/verl/pull/6525))
  增加 GLM MoE 模型的 FSDP 训练支持，包含动态稀疏注意力 (DSA) 和 Ulysses 序列并行的适配。
- **[Hardware] feat: add platform abstraction layer and plugin-based engine override system** ([#6086](https://github.com/verl-project/verl/pull/6086))
  建立统一的硬件平台抽象层，以插件机制支持昇腾 NPU、寒武纪 MLU 等多底层加速卡，脱离硬编码绑定。
- **[megatron] feat: Support Megatron chunk entropy** ([#6446](https://github.com/verl-project/verl/pull/6446))
  补齐 Megatron 后端缺失的 Chunk Entropy 特性，保持与 FSDP 后端的功能对齐。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极致的大模型 RL 显存与算力压榨**：从 BF16 状态精度对齐到 Fused Top-K OPD 内核，再到切断无用的 KL/Entropy 梯度图，verl 正在将大模型 RL 训练的底层优化做到极致，直击显存墙痛点。
2. **率先完善多模态 RLHF 基建**：通过迅速修复 vLLM 多模态特征缓存复用问题，verl 展现出在复杂多模态场景下进行稳定 PPO/GRPO 训练的工程成熟度。
3. **向 Agentic RL 坚定演进**：当前 RL 前沿正从单轮 Prompt 对齐转向多轮环境交互。引入实验性 Agent 框架及全异步多轨迹生成机制，表明 verl 正在为下一代 Tool-using 和 CoT (Chain-of-Thought) 自主迭代模型提供底层支撑。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-05-29)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新版本发布，无新增或更新的 Issues。社区及内部开发者的重心完全集中在代码质量优化与底层 Bug 修复上，共有 **15 个 Pull Requests** 产生了更新（其中 5 个转入 Closed，10 个仍为 Open）。整体呈现出强烈的“除虫”和鲁棒性提升趋势。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 更新主要围绕**GRPO 核心训练死锁修复**、**DPO 梯度异常**以及**IFEval 评估与数据过滤逻辑的严重漏洞**展开。

### 🚨 核心训练与评估修复
*   **[OPEN] 修复 GRPO OLMo-core 死锁问题 ([#1708](https://github.com/allenai/open-instruct/pull/1708))**
    *   **要点**: 修复了使用 OLMo-core 进行 GRPO 训练时 `reduce_metrics` 导致的分布式死锁问题。通过在每个 rank 上记录 `_metrics_keepalive` 指标，解决了底层在 `num_steps > 0` 门控下因指标为空而跳过提交引发的挂起。
*   **[OPEN] 修复 DPO 训练中的除零错误与 NaN 梯度 ([#1702](https://github.com/allenai/open-instruct/pull/1702))**
    *   **要点**: 在 `dpo_utils.py` 的 `_get_batch_logps` 中，当 `loss_mask` 全为 `-100` 时会发生除零错误，导致产生 NaN/Inf 并静默污染 DPO 训练梯度。该 PR 通过对 `loss_mask` 计数进行 Clamp 修复了此问题。
*   **[OPEN] 新增 olmo-eval Beaker 启动集成 ([#1698](https://github.com/allenai/open-instruct/pull/1698))**
    *   **要点**: 为 GRPO checkpoint 增加了通过 `olmo-eval beaker launch` 自动触发评估的能力，进一步增强了 RL 训练生命周期的自动化程度。

### 🔍 IFEval 约束与验证逻辑大修
开发者 `Chessing234` 集中提交/更新了多个 PR，精准修复了指令遵循评估中的逻辑漏洞：
*   **[OPEN] 修复 validate_choice 操作数反向错误 ([#1699](https://github.com/allenai/open-instruct/pull/1699))**
    *   **要点**: 原实现导致类似 `"The answer is yes"` 的回答在匹配 `['yes', 'no']` 时返回 `False`。现已修正包含关系的判定方向。
*   **[OPEN] 修复 validate_choice 子串误判 ([#1700](https://github.com/allenai/open-instruct/pull/1700))**
    *   **要点**: 引入正则表达式的单词边界（word boundaries），修复了由于简单子串匹配导致的误判（例如：选项为 "A" 时，"Apple" 会被误判为正确）。
*   **[OPEN] 修复 verify_sentence_constraint 句子计数错误 ([#1704](https://github.com/allenai/open-instruct/pull/1704))**
    *   **要点**: 优化了正则切分逻辑，过滤尾部空格和多余空格造成的空字符串，确保句子数量约束评估的准确性。
*   **[CLOSED] 修复 eval_scripts 中同样存在的 validate_choice 错误 ([#1651](https://github.com/allenai/open-instruct/pull/1651))**
    *   **要点**: 确保评估脚本与主代码库的约束验证逻辑保持一致。

### 🛠️ 数据处理与基础设施工具优化
*   **[OPEN] 修复 token 长度过滤器的互斥逻辑 ([#1703](https://github.com/allenai/open-instruct/pull/1703), [#1706](https://github.com/allenai/open-instruct/pull/1706), [#1707](https://github.com/allenai/open-instruct/pull/1707))**
    *   **要点**: 修复了由于嵌套三元表达式导致 `max_prompt_token_length` 和 `max_token_length` 互斥的 Bug。将其拆分为独立的布尔条件进行 AND 操作，确保 RL 训练前数据过滤的准确性。
*   **[OPEN] find_shared_text 代码重构 ([#1705](https://github.com/allenai/open-instruct/pull/1705))**
    *   **要点**: 采用更 Pythonic 的 `zip` 和 `enumerate` 重构了共享文本查找逻辑。
*   **[CLOSED] 修复 GPT-4o API 成本计算少一个零的严重笔误 ([#1618](https://github.com/allenai/open-instruct/pull/1618))**
    *   **要点**: 修复了 `judge_utils.py` 中 GPT-4o 输出单价少一个 0（导致成本被低估 10 倍）的问题，影响 RLHF Reward Model 相关的测算。
*   **[CLOSED] 修复多 GPU DeepSpeed checkpoint 硬编码路径错误 ([#1589](https://github.com/allenai/open-instruct/pull/1589))**
    *   **要点**: 废弃了不匹配的硬编码路径，改为动态读取 DeepSpeed 维护的 `latest` 文件以正确加载 `mp_rank_00_model_states.pt`。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **直面 RL 底层工程痛点**：从今日的 PR 可以看出，项目正在深度攻坚大规模分布式 RLHF/GRPO 训练中隐藏极深的底层 Bug（如 OLMo-core 分布式训练的死锁、DPO loss_mask 导致的静默梯度溢出）。这些修复对于任何试图在百亿参数规模上稳定进行 RLHF 的团队都是极具参考价值的宝贵资产。
2.  **对齐评估体系的极致打磨**：Reward Model 和 IFEval 等约束评估是衡量大模型对齐效果的核心。项目正在系统性地排查并修复过去评估代码中的“操作数反向”、“子串误判”等问题，这表明团队在追求算法创新的同时，极度注重数据飞轮中“评估/奖励信号”的绝对准确性。
3.  **生态与工具链的持续整合**：无论是适配 DeepSpeed 分布式 checkpoint 的边界情况，还是接入内部 `olmo-eval` 体系实现 RL 训练-Eval 的无缝闭环，都表明 Open Instruct 正在从一个单纯的训练脚本库，逐步演进为一个端到端、高自动化的 LLM 对齐基础设施。对于研究者和工程师而言，是复现和探索 Post-training 技术不可或缺的实战参考库。

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

# Gymnasium RL 日报摘要 (2026-05-29)

**数据监测周期**: 过去 24 小时
**数据源**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体保持平稳运行。无新版本发布，无新增 Issue，仓库活跃度主要集中在底层基础设施的更新上。唯一的动态为社区提交了一项关于引入 Python 3.14 支持的拉取请求。

### 2. 版本发布
- **最新 Releases**: 过去 24 小时内**无**新版本发布。

### 3. 重点 Issues
- **最新 Issues**: 过去 24 小时内**无**新增或更新的 Issue。

### 4. 关键 PR 进展
- **[#1587 [OPEN] Add Python 3.14 Support](https://github.com/Farama-Foundation/Gymnasium/pull/1587)**
  - **作者**: [pseudo-rnd-thoughts](https://github.com/pseudo-rnd-thoughts)
  - **摘要**: Python 3.14 已正式发布一段时间，该 PR 旨在为 Gymnasium 显式添加对 Python 3.14 的兼容与支持。这属于典型的上游依赖跟进，对于维持库在现代 Python 环境下的可用性至关重要。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium（原 OpenAI Gym 的延续）已成为强化学习领域事实上的标准 API（`Env.reset`, `Env.step` 等）。
1. **生态基石地位**: 几乎所有主流 RL 算法库（如 Stable-Baselines3, CleanRL, Ray RLlib 等）均基于 Gymnasium API 构建与评估。其接口的稳定性直接决定了下游生态的可靠性。
2. **生命周期管理**: 如 PR #1587 所示，核心团队正严格跟进 Python 解释器的版本迭代（移除旧版本、支持新版本），确保该基础库不会成为研究人员环境配置中的依赖瓶颈。
3. **环境封装标准**: 在底层环境（如 MuJoCo、Atari、自定义仿真器）与上层 RL 算法之间，Gymnasium 提供了不可或缺的标准化中间层。持续关注其版本演进，是把握整个 RL 开源工具链技术走向的重要基准。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的强化学习（RL）开源生态日报摘要：

### 1. 今日速览
截至 2026-05-29，Farama-Foundation/PettingZoo 仓库过去 24 小时内整体活动趋于平稳。无新增 Issue 和 Release 版本发布，仅有 1 项关键 Pull Request 更新，主要涉及底层依赖引擎引发的种子重置逻辑修复。

### 2. 版本发布
过去 24 小时无新版本发布。最新 Releases：无。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
*   **#1335 [OPEN] Fix gin_rummy knock/gin reward reverting to RLcard default on seeded reset (#1312)**
    *   **作者:** Nikelroid
    *   **更新日期:** 2026-05-28
    *   **GitHub 链接:** [Farama-Foundation/PettingZoo PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)
    *   **技术摘要:** 该 PR 修复了多智能体环境 `gin_rummy` 在进行带随机种子的重置（`reset(seed=...)`）时的严重 Bug。目前的环境会在初始化时正确应用自定义的 `knock_reward` 和 `gin_reward`，但在执行带种子的重置时，会静默将这些奖励参数还原为底层 RLCard 引擎的默认值（knock: 0.2, gin: 1.0）。此缺陷会直接破坏多智能体强化学习（MARL）中依赖固定种子的可复现性实验。该 PR 修复了重置时的打分器（scorer）初始化逻辑。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama 基金会旗下的核心项目，是 Gymnasium 在多智能体强化学习（MARL）领域的官方延伸。其类 Gymnasium 的标准 API 极大地降低了多智能体环境（如棋盘游戏、ATARI 多智能体等）的接入门槛。
当前 RL 生态正处于从单智能体向复杂多智能体交互演进的阶段，实验的可复现性是工业界和学术界的核心痛点（如 PR #1335 所修复的随机种子与奖励函数解耦问题）。持续关注 PettingZoo 的底层更新，能够帮助 RL 研究者和工程师精准排查环境级别的 Bug，避免在多智能体算法（如 MAPPO, QMIX）的调优中因环境逻辑漏洞而产生错误归因。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>