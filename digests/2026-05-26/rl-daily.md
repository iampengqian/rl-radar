# RL 开源生态日报 2026-05-26

> 生成时间: 2026-05-25 22:19 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出清晰的分化与融合态势。以 TRL、verl、AReaL、Slime 和 ROLL 为代表的 LLM Post-training 基础设施，正在以极高的工程速度向多模态、异构算力和超大规模集群迈进。同时，以 Gymnasium、PettingZoo、rl_games 和 SB3 构成的经典/传统 RL 生态则趋于成熟平稳，主要精力集中在 API 标准化、底层鲁棒性修复与硬件后端拓宽上。整个生态的重心已不可逆转地向着“基于大模型的智能体对齐与推理训练”倾斜。

## 各项目活跃度对比
以下为过去 24 小时内各项目的核心活动数据，反映了其在社区中的绝对工程热度：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 3 | 30 | 0 | 极度活跃，聚焦多硬件适配与底层通信优化 |
| **Slime** | 1 | 7+ | 0 | 高度活跃，攻坚跨节点权重同步与 SOTA MoE 支持 |
| **AReaL** | 3 | 14 | 0 | 高度活跃，引领 PD 分离架构与深度显存压榨 |
| **TRL** | 12 | 20 | 1 | 重点发力多模态与 Tool-use/Agent RL 规范 |
| **ROCK** | 1 | 5 | 0 | 聚焦大规模沙盒集群的 SRE 运维与 IO 优化 |
| **PettingZoo** | 0 | 5 | 0 | 维护期，专注 API 严格一致性与安全漏洞修复 |
| **rl_games** | 0 | 2 | 0 | 拓宽硬件边界，跟进 Apple MPS 后端支持 |
| **Gymnasium** | 1 | 1 | 0 | 稳步推进 MuJoCo-v5 教程与 API 解耦建设 |
| **ROLL** | 1 | 0 | 0 | 低频维护，暴露出超大规模多节点初始化 OOM 痛点 |
| **SB3** | 1 | 0 | 0 | 平稳期，社区在深挖 HER 等经典算法的边界缺陷 |

*(注：CleanRL、OpenRLHF、Tianshou 等项目过去 24 小时内无实质性代码活动。)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **从纯 RL 走向混合对齐训练**：LLM 对齐框架正在突破单一的 PPO/GRPO 范式。verl 开始合入 DPO 支持，这表明研究界越来越倾向于在 RLHF 流程中混合使用 SFT、DPO 和在线 RL，以平衡奖励稀疏性和训练稳定性。
2. **Agent 与环境交互式 RL（Agent RL）**：基于静态数据的对齐已遇到瓶颈。TRL 大力推进 Tool-use 训练，Slime 实现了基于 E2B 沙盒的代码闭环训练。将大模型放入真实/沙盒执行环境中获取反馈，正成为强化学习新的核心增长点。
3. **前沿优化器与路由机制探索**：AReaL 引入了基于牛顿法正交化的 Muon 优化器；同时，面对稀疏 MoE 模型在 RL 训练中的不稳定性，verl 和 AReaL 均开发了路由重放机制（R2/R3），这反映了针对超大模型架构特性的定制化 RL 算法修正正在增加。

**工程与基础设施侧信号：**
1. **去 NVIDIA 化与异构计算原生支持**：多芯片适配成为顶配框架的必修课。verl 引入了统一的硬件抽象层兼容寒武纪、摩尔线程与昇腾，并高频修复 AMD ROCm 的底层崩溃；rl_games 也跟进支持了 Apple Silicon (MPS)。
2. **计算分离与显存/通信极致压榨**：针对 Rollout 阶段的算力瓶颈，AReaL 开启了 PD (Prefill-Decode) 分离架构。针对显存瓶颈，Slime 和 AReaL 均在推进跨节点增量权重同步与使用无状态推理引擎作为蒸馏 Teacher，极大降低了 RLHF 的常驻显存开销。
3. **Infra 与 SRE 能力深度集成**：针对千卡集群的生产级运行，ROCK 提供了跨区域数据 IO 优化与紧急磁盘清理 Admin API，PettingZoo 修复了底层路径遍历安全漏洞，标志着 RL 框架正在向现代云原生安全与运维标准靠拢。

## 差异化定位分析
- **TRL (Hugging Face)**：**“应用层标准制定者”**。背靠 HF 生态，TRL 不深究极度底层的分布式通信，而是致力于提供最全的模型覆盖（VL/Audio）、最友好的 Trainer API 和最前沿的对齐范式（Tool-use），是算法研究员的优选。
- **verl 与 AReaL**：**“硬核底层基建狂魔”**。两者高度类似，都定位于超大规模、海量并发的高吞吐 RL 生产系统。侧重于 FSDP/Megatron 级别的分布式张量并行优化、异构算力池化和 MoE 模型的底层算子适配，适合拥有大集群且追求极致 ROI 的工程团队。
- **Slime (THUDM)**：**“前沿架构先锋”**。从极低带宽下的增量权重同步，到直接跑通代码沙盒 Agent RL，Slime 在解决跨数据中心联合 RL 训练的痛点上走得极深，对极度受限网络下的模型迭代极具参考价值。
- **Gymnasium / SB3 / PettingZoo**：**“经典决策基石”**。作为经典 RL 和多智能体 (MARL) 领域的绝对标准，它们当前的核心价值在于 API 的绝对严谨性、可复现性和物理仿真的稳定性。

## 社区热度与成熟度
LLM 赛道的开源项目（TRL, verl, AReaL）处于明显的“高热度高速扩张期”，每日均有数十个 PR 和大量底层重构代码提交，社区对跨硬件报错、NaN 损失等大规模训练硬核 Bug 的讨论和修复速度极快。
相比之下，经典 RL 项目（SB3, Gymnasium, rl_games）已进入“成熟稳定期”。其 API 已基本冻结或定型，日常活动多为文档完善（如 MuJoCo-v5 教程）、边缘边界条件修复（如 HER 的 done 标志）和后端拓展。两类项目在 GitHub 上呈现出截然不同的工程节拍。

## 值得关注的趋势信号
1. **MoE 模型的 RL 训练攻坚战**：随着 DeepSeek-V3、GLM-5 等超大 MoE 模型成为主流，开源框架正在集中处理其带来的特殊工程灾难（如 DTensor 调度崩溃、异步训练引发的路由不一致）。MoE 专用 RL 基建将成为下半年的核心壁垒。
2. **异步架构与计算拆分成为标配**：从训练与推理完全分离解耦、到 Prefill/Decode 拆分，再到推理引擎兼任无状态 Teacher。传统“一台机器干到底”的 RLHF 模式正在被彻底抛弃，模块化、微服务化的 RL 计算流水线是确定的演进方向。
3. **闭环交互式 Agent RL 基础设施已具雏形**：从 TRL 的工具调用损失函数，到 Slime 直接跑通的 E2B 沙盒执行环境，开源社区已经打通了“LLM输出 -> 沙盒执行 -> 解析反馈 -> 奖励计算”的物理闭环。这意味着针对代码、智能体场景的强化学习，开发者很快就能迎来开箱即用的开源方案。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL (alibaba/ROLL) 项目 2026-05-26 强化学习（RL）生态日报摘要：

# 📊 ROLL RL 生态日报 (2026-05-26)

## 1. 今日速览
过去 24 小时，ROLL 仓库处于低频维护状态。无新增代码合并与版本发布，但有一条历史遗留的核心分布式训练问题（#234）产生了新讨论。当前项目的工程焦点似乎集中在大规模多节点集群的显存/内存管理优化上。
- **Issues 变动**: 1 条更新
- **PR 变动**: 0 条
- **Releases**: 0 个

## 2. 版本发布
今日无新版本发布。
- **最新 Releases**: 无

## 3. 重点 Issues
- **[#234] [OPEN] Ray OOM prevention kills vLLM actors during engine initialization (collective_rpc/offload_states) unless GRPO_GROUP=1**
  - **链接**: [alibaba/ROLL Issue #234](https://github.com/alibaba/ROLL/issues/234)
  - **作者**: yasu-nishi
  - **更新时间**: 2026-05-25
  - **摘要**: 在 8 节点（每节点 8 GPU，约 1.5TB 内存）的超大规模集群上微调 `qwen3-next-80B-A3` 模型时，触发 Ray 的 OOM（内存溢出）保护机制。该机制在 vLLM 引擎初始化（执行 `collective_rpc` 调用 `offload_states` 时）会强制杀掉新调度的 Actor。即使配置了 NVMe object spilling，该问题依然存在。
  - **分析**: 此 Issue 暴露了 ROLL 框架在结合 Ray 与 vLLM 处理 80B 级别超大模型分布式初始化时，可能存在的异步内存峰值或显存卸载时序问题。目前暂无官方修复方案，临时缓解措施是将 `GRPO_GROUP` 设为 1。

## 4. 关键 PR 进展
今日无活跃的 Pull Request。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 在当前 LLM 范式下的 RL（特别是 RLHF/RLAIF）生态中具有独特的站位：
1. **超大模型 RL 的前沿阵地**: Issue #234 直接触及了 80B 级别模型在多节点集群上的训练痛点。随着开源社区向 70B+ 尺寸的基座模型演进，ROLL 在解决跨节点 Ray 调度、vLLM 显存协同等底层工程问题的经验，将为整个开源 RL 生态提供宝贵的大规模实践参考。
2. **DeepSeek / GRPO 算法工程的落地者**: 项目紧跟 GRPO 等先进算法，其在超大规模节点下的并行策略和容错机制（如处理 OOM 与 Object spilling）是验证 RL 算法能否真正从论文走向千卡集群生产级部署的关键指标。对于关注大模型对齐基础设施的开发者而言，ROLL 的架构演进值得长期追踪。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-05-26）：

### 1. 今日速览
过去 24 小时，ROCK 仓库共处理了 **5 条 Pull Requests**（3 条合并/关闭，2 条开放中），并新增 **1 条功能诉求**。核心动态集中在 **跨区域数据集访问性能优化**、**Sandbox 底层日志与生命周期管理机制完善**，以及 **SRE 运维应急能力增强**。

### 2. 版本发布
- **最新 Releases**：过去 24 小时及近期无新版本发布。

### 3. 重点 Issues
- **[#1010] [Feature] 跨区域 OSS 场景下 `rock datasets list` 速度优化**
  - **链接**: [alibaba/ROCK Issue #1010](https://github.com/alibaba/ROCK/issues/1010)
  - **详情**: 作者 `xdlkc` 指出，在跨 OSS Region（例如本节点与存储跨大区）的场景下，执行 `rock datasets list` 命令耗时长达 20-30 秒以上。该 Issue 旨在优化 CLI 和 SDK 层面的目录拉取性能，涉及 Envhub 等组件，属于典型的大规模分布式训练下的数据 IO 瓶颈优化。

### 4. 关键 PR 进展
今日的 PR 动态展现了 ROCK 在基础设施上的持续打磨，特别是围绕 Sandbox 隔离环境的日志清理闭环：

- **[OPEN] [#1011] 跨区域 OSS 性能优化实现**
  - **链接**: [alibaba/ROCK PR #1011](https://github.com/alibaba/ROCK/pull/1011)
  - **详情**: 对应 Issue #1010。将原本耗时的深度递归遍历替换为两步走的 OSS prefix listing (`delimiter='/'`)。实测将跨域 listing（cn-shanghai → us-east-1）从 30s+ 降至秒级。同时新增了 `--depth` 和 `--org` CLI flags 以提升大规模数据集的过滤体验。

- **[OPEN] [#1001] Sandbox 重启功能支持**
  - **链接**: [alibaba/ROCK PR #1001](https://github.com/alibaba/ROCK/pull/1001)
  - **详情**: 提出了 Sandbox 级别的 restart 支持（对应 #1000），进一步增强了 RL 训练过程中环境恢复的灵活性。

- **[CLOSED] Sandbox 延迟日志归档与哨兵机制闭环**
  - **链接**: [alibaba/ROCK PR #960](https://github.com/alibaba/ROCK/pull/960), [alibaba/ROCK PR #963](https://github.com/alibaba/ROCK/pull/963)
  - **详情**: 这两个 PR 建立了一套完整的 Sandbox 历史日志处理机制。PR #963 在 Docker 容器停止时通过原子操作写入 `.rock_stopped_at` 哨兵文件；PR #960 则利用现有的 `/execute` RPC 接口驱动 `SandboxLogArchiveTask`，对停机超过指定天数的环境执行打包上传与本地清理。凭据通过环境变量注入，具备较高的安全性。

- **[CLOSED] [#973] SRE 磁盘紧急清理 Admin API**
  - **链接**: [alibaba/ROCK PR #973](https://github.com/alibaba/ROCK/pull/973)
  - **详情**: 针对大规模集群磁盘容量暴涨的突发情况，新增了内部 API `disk_emergency_cleanup`。该接口允许 SRE 绕过常规的 24h 调度周期，立即触发清理任务，并内置了白名单限流（防误用）和同步阻塞反馈，显著提升了生产环境的运维容灾能力。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 在解决强化学习落地痛点上展现出了极强的工程深度：它不仅关注算法层面，更在攻坚**多云/跨区域环境下的 IO 瓶颈**（如 #1011 的 OSS prefix 优化）和**海量并发隔离环境的生命周期管理**（如 Sandbox 日志冷热分离与归档）。
通过提供完善的 CLI、Envhub 以及 Admin 级别的管控和 SRE 应急 API，ROCK 正在从一个单纯的 RL 框架，演进为一个具备企业级可靠性和可观测性的 RL 系统基座。对于需要长期运行、大规模并发调参的 RL 团队而言，其底层基建的设计思路和开源实现具有极高的参考与使用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime (THUDM) RL 生态日报 - 2026年5月26日

## 1. 今日速览
过去 24 小时内，Slime 仓库保持高活跃度，无新版本发布。核心贡献者集中推进了**底层训练引擎的鲁棒性优化**（如 GPU 放置校验、可变 Batch Size 支持）、**新架构集成**（MiniMax-M2.5、Gemma4）以及**推理/训练权重解耦传输**等重要特性。同时，针对沙盒环境的 Coding Agent RL 端到端流水线已完成初步提交。

## 2. 版本发布
无新版本发布（最新 Releases 为空）。但目前主干分支正在密集进行 SGLang 推理引擎的版本升级测试（见 PR #1945）。

## 3. 重点 Issues
- **[#1896](https://github.com/THUDM/slime/issues/1896) [Bug] 推理引擎初始化阶段报 `IndexError`** 
  - **详情**: 在 4-GPU 环境下执行 `test_qwen2.5_0.5B_ppo_critic_only_short.py` 时，由于多角色 Megatron 配置与 SGLang 默认参数不一致，导致 `RolloutManager` 在 `start_engines` 阶段（训练开始前）触发 `IndexError: list index out of range`。此 Issue 现已通过 PR #1934 修复并关闭。

## 4. 关键 PR 进展

### 🚀 核心架构与特性演进
- **[#1806](https://github.com/THUDM/slime/pull/1806) [feat] Delta weight sync (磁盘 + NCCL 传输)**
  - **进展**: 持续更新中。引入非共置权重同步机制，仅传输变化的参数位置和数值。
  - **价值**: 针对跨数据中心（训练与推理分离）的低带宽共享文件系统场景，极大降低了权重同步的网络开销。
- **[#1933](https://github.com/THUDM/slime/pull/1933) [feat] 支持可变全局 Batch Size 训练**
  - **进展**: 已合并。为 RL 训练过程中的动态 Batch 调度提供了底层支持。

### 🤖 模型支持与对齐拓展
- **[#1929](https://github.com/THUDM/slime/pull/1929) [feat] MiniMax-M2.5 模型支持**
  - **进展**: 全量集成包含 256 专家的 MiniMax-M2.5，实现了自定义全维度 QK Norm（带 TP gather/scatter）及权重转换桥接。
- **[#1855](https://github.com/THUDM/slime/pull/1855) [feat] Gemma4 (26B-A4B MoE & 31B dense) 支持**
  - **进展**: 持续推进。包含模型架构、HF↔Megatron 权重转换及重打工具集成，已通过 TP/PP/DP/CP/EP/滑动窗口的单元测试。
- **[#1923](https://github.com/THUDM/slime/pull/1923) [feat] 新增 coding_agent_rl 沙盒演示**
  - **进展**: 实现了“代码智能体 + 沙盒执行 + 测试奖励”的端到端闭环。利用 E2B 沙盒运行 Claude Code CLI 并通过测试结果给出 RL 奖励。

### 🛠️ 稳定性与 CI/CD 建设
- **[#1934](https://github.com/THUDM/slime/pull/1934) [fix] 增加 GPU 放置边界校验**
  - **进展**: 已合并。修复了 Issue #1896，在创建 SGLang Ray Actors 之前强制检查 Placement Group GPU Slots 与 Engine 配置的一致性，避免深层报错。
- **[#1945](https://github.com/THUDM/slime/pull/1945) & [#1892](https://github.com/THUDM/slime/pull/1892) [docker] SGLang 版本升级**
  - **进展**: 正在将 Docker 镜像中的 SGLang 推进至 `v0.5.12.post1`，旧版 `v0.5.11` 升级 PR 已关闭。
- **CI 密集提交**: 核心贡献者 `zhuzilin` 集中合并了多个 CI 优化 PR（[#1940](https://github.com/THUDM/slime/pull/1940), [#1939](https://github.com/THUDM/slime/pull/1939), [#1941](https://github.com/THUDM/slime/pull/1941)），完善了 Main 分支的 CPU 测试流和多样本测试。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **解决大模型 RLHF 的核心痛点（Infra 与通信）**：PR #1806 揭示了 Slime 正在攻坚**训练/推理完全分离**架构下的跨节点通信瓶颈。这种去中心化的增量权重同步机制，是构建超大规模 RL 计算集群的关键技术。
2. **紧跟 SOTA MoE 架构的工程化落地**：快速且深度地接入了 MiniMax-M2.5 和 Gemma4 等极具代表性的大规模 MoE 模型。通过处理复杂的 QK Norm 和 TP 通信问题，证明了其在底层算子层面的工程储备。
3. **从纯文本对齐走向 Agent 交互式强化学习**：PR #1923（沙盒代码智能体）是一个强烈的信号。Slime 的边界正在从传统的 PPO/DPO 文本奖励模型，扩展到基于真实环境反馈的 Agent RL，这高度契合 LLM 迈向 System 2 推理和工具调用的行业趋势。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 开源生态日报 (2026-05-26)

## 1. 今日速览
过去 24 小时内，AReaL 项目保持高活跃度。社区共更新了 **14 个 Pull Requests**（无新合入，均处于开发/审查阶段），并产生了 **3 个新 Issues**。当前阶段的核心焦点集中在**底层架构重构（Controller v2）**、**异构引擎支持（PD 分离、Rollout 蒸馏）**以及**对最新开源大模型（GLM-5、DeepSeek-V3）的适配**。无新版本发布。

## 2. 版本发布
无新增 Releases。

## 3. 重点 Issues
今日的 Issues 集中在架构扩展与特定模型的 Bug 修复上：

- **[#1329] [Feature] Support PD Disaggregation**
  - **链接**: [areal-project/AReaL Issue #1329](https://github.com/areal-project/AReaL/issues/1329)
  - **摘要**: 提出支持 PD（Prompt-Decode）分离架构。由于 Rollout 阶段消耗了大部分训练时长，将 Prefill 和 Decode 拆分能更好地管理计算资源，是生产环境优化 RL 训练性能的关键手段。该特性承诺向后兼容现有 API。
- **[#1367] [Feature] Use RolloutEngine as distillation teacher**
  - **链接**: [areal-project/AReaL Issue #1367](https://github.com/areal-project/AReaL/issues/1367)
  - **摘要**: 建议在 On-policy 蒸馏中，使用专用的 RolloutEngine 替代 TrainEngine 作为 Teacher。因为 Teacher 仅用于 `teacher_logp` 评分，无需优化器和梯度。此举可大幅降低蒸馏过程的 GPU 显存占用。
- **[#1366] [BUG] Qwen models crash with DTensor dispatch error under TP > 1**
  - **链接**: [areal-project/AReaL Issue #1366](https://github.com/areal-project/AReaL/issues/1366)
  - **摘要**: 开发者报告在张量并行 (TP > 1) 环境下，Qwen 系列模型因中间操作 (`aten.alias`, `aten.slice`) 导致 DTensor 调度崩溃。已在提供的 Docker 镜像中稳定复现。

## 4. 关键 PR 进展
今日的 PR 更新全面反映了系统在并行策略、显存优化及多模型支持上的演进：

- **架构重构与训练流水线**
  - **[#1354] feat: controller v2 refactor**: 核心架构重构，为后续复杂调度打基础。
  - **[#1363] feat: enable v2 training pipeline with controller parity**: 配合 v2 架构，更新了 `GatewayTrainController` 版本管理、引擎连接及端口分配逻辑，统一了训练入口。([PR #1354](https://github.com/areal-project/AReaL/pull/1354), [PR #1363](https://github.com/areal-project/AReaL/pull/1363))

- **性能优化与并行策略**
  - **[#1364] Support PD Disaggregation**: 初步实现 Issue #1329，当前支持 DP=2 (1P1D) & TP=1 配置下的 PD 分离部署。([PR #1364](https://github.com/areal-project/AReaL/pull/1364))
  - **[#1368] on-policy distillation using RolloutEngine**: 实现了 Issue #1367 的提案，使用推理侧引擎提供清晰的 token log-prob scoring API 进行蒸馏，显著降低显存开销。([PR #1368](https://github.com/areal-project/AReaL/pull/1368))

- **底层引擎与权重同步**
  - **[#1365] fix(fsdp engine): localize DTensor norm output for Qwen models**: 修复 Issue #1366，通过注册 forward hook 的方式解决 Qwen 模型在 TP 下的 DTensor 兼容性问题。([PR #1365](https://github.com/areal-project/AReaL/pull/1365))
  - **[#1361] feat(awex): FSDP colocate weight update via CUDA IPC**: 使得 FSDP 训练模型能通过 CUDA IPC 在共享 GPU 上无缝更新 SGLang 推理权重。([PR #1361](https://github.com/areal-project/AReaL/pull/1361))
  - **[#1305] feat(experimental): integrate Ray RDT for weight syncing**: 引入基于 Ray Direct Transport (RDT) 的底层权重同步机制。([PR #1305](https://github.com/areal-project/AReaL/pull/1305))

- **新模型支持与高级特性**
  - **[#1362] feat(mcore): add GLM-5/DeepSeek-V3 and Bailing-MoE megatron-bridge support**: 快速跟进最新开源模型，增加了对 GLM-5.1、DeepSeek-V3、GLM-4.7-Flash 的支持，并适配了 Bailing-MoE V2.5。([PR #1362](https://github.com/areal-project/AReaL/pull/1362))
  - **[#1270] feat: muon optimizer support**: 原生支持 Muon 优化器（基于 Newton-Schulz 迭代的动量正交化），在 FSDP2 和 Megatron 后端均提供分布式实现，探索更高效的 RL 优化路径。([PR #1270](https://github.com/areal-project/AReaL/pull/1270))
  - **[#1207] feat: add router replay(R3) for megatron engine**: 为 MoE 模型引入路由重放机制 (R3)，解决异步 RL 训练中因推理与训练路由不一致导致的训练不稳定问题。([PR #1207](https://github.com/areal-project/AReaL/pull/1207))

- **可观测性与 CI/CD**
  - **[#1360] Add rollout trace logging with `trackio`**: 集成 Hugging Face 的 Trackio，在现有指标监控基础上增加了 Trace 级别的日志记录。([PR #1360](https://github.com/areal-project/AReaL/pull/1360))
  - **[#1313] ci: add real training jobs to nightly workflow**: 完善夜间构建 CI，使用真实 GSM8K GRPO 训练任务替代 dummy 占位，通过 Round-robin 轮换 FSDP/Megatron 等后端。([PR #1313](https://github.com/areal-project/AReaL/pull/1313))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在从一个单纯的 RLHF 训练框架，演进为一个面向超大规模 MoE 模型、注重底层硬件极致压榨的**高吞吐量 RL 生产系统**：
1. **直面 RL 推理训练耗时的核心痛点**：通过引入 PD Disaggregation (计算分离)、Speculative Decoding (投机采样，#1176) 和 Router Replay (R3)，系统在解决 Rollout 瓶颈和 MoE 路由一致性上做了深度优化。
2. **异构计算与显存管理的工程化突破**：如通过 CUDA IPC 进行 FSDP 权重同步、将推理引擎作为无状态 Teacher 进行蒸馏，这些设计都是为了在受限 GPU 资源下最大化 Batch Size。
3. **紧跟 SOTA 算法与模型前沿**：当日即跟进修复 Qwen TP bug 并支持 DeepSeek-V3 / GLM-5，同时原生集成了前沿的 Muon 优化器。这表明该项目具有极高的工程敏捷性，适合需要快速复现和迭代最新大模型 RL 算法的研发团队持续追踪。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要
**日期**: 2026-05-26 | **分析周期**: 过去 24 小时

---

## 1. 今日速览
- **Issues 更新**: 12 条 (4 Open / 8 Closed)
- **PR 更新**: 20 条 (11 Open / 9 Closed)
- **新版本发布**: 1 个

过去 24 小时内，TRL 完成了 **v1.5.0** 的正式发布。社区及核心开发团队的开发重点高度聚焦于 **多模态（VL/Audio）模板兼容**、**GRPOTrainer 核心机制完善（异步、工具调用、奖励机制）** 以及 **底层训练稳定性修复**。

---

## 2. 版本发布
### [v1.5.0](https://github.com/huggingface/trl/releases/tag/v1.5.0)
- **核心特性**: 引入更多适配 `assistant_only_loss=True` 的训练聊天模板。通过添加 `&#123;&#37; generation &#37;&#125;` 标记，解决了原生模型模板缺失导致掩码计算错误的问题。
- **新增支持模型**: **Phi-3.5** 和 **Qwen3-VL**。

---

## 3. 重点 Issues
1. **[Tracking] 聊天模板工具调用支持** [#5460 [OPEN]](https://github.com/huggingface/trl/issues/5460)
   - **摘要**: 探讨端到端工具调用训练对模板的要求。模板需准确渲染完整的 `user -> assistant (tool_calls) -> tool` 多轮对话，且内容需在 `assistant_only_loss` 中被正确处理。
2. **补齐 AsyncGRPOTrainer 特性** [#5831 [OPEN]](https://github.com/huggingface/trl/issues/5831)
   - **摘要**: 社区呼吁填补异步 GRPO 训练器与同步版本之间的特性空白，解决目前异步变体可用性受限的问题。
3. **GRPO 暴露 `response_schema` 接口** [#5724 [OPEN]](https://github.com/huggingface/trl/issues/5727)
   - **摘要**: 提议在 GRPOConfig/GRPOTrainer 中增加显式的 `response_schema=` 参数，替代目前依赖模板指纹识别的非稳健方案。

---

## 4. 关键 PR 进展
1. **重构与底层清理**
   - **[WIP] 重构 CPOTrainer** [#5837 [OPEN]](https://github.com/huggingface/trl/pull/5837): 尝试重构 CPOTrainer 核心 API 及默认 `max_length` 配置（目前评估中，涉及高风险破坏性变更）。
   - **移除 NeMo Gym 集成** [#5840 [OPEN]](https://github.com/huggingface/trl/pull/5840): 清理当前存在缺陷且阻碍开发进度的 NeMo Gym 环境。
   - **增加 `trust_remote_code` 配置** [#5802 [OPEN]](https://github.com/huggingface/trl/pull/5802): 统一在所有 Trainer configs 顶层添加安全控制字段，拒绝默认加载远程代码。

2. **GRPO 训练稳定性与机制增强**
   - **修复 GRPO NaN loss 问题** [#5826 [OPEN]](https://github.com/huggingface/trl/pull/5826): 解决了当 `max_length` 小于 prompt 长度导致补全被全部截断时，空 Tensor 引发 `F.cross_entropy` 返回 NaN 的致命 bug。
   - **vLLM 服务端模式 DP 多卡报错修复** [#5841 [OPEN]](https://github.com/huggingface/trl/pull/5841): 修复了 `vllm_mode="server"` 下，非主进程rank 调用未初始化的 `vllm_client` 导致的 `AttributeError`。
   - **GRPO 工具响应观测损失** [#5832 [OPEN]](https://github.com/huggingface/trl/pull/5832): 引入可选的 tool observation 预测损失，在工具调用的 rollout 中对文本反馈添加 next-token 交叉熵监督。

3. **多模态前沿拓展**
   - **[WIP] 增加音频支持** [#5830 [OPEN]](https://github.com/huggingface/trl/pull/5830): 核心开发者开始着手在 TRL 中原生支持 Audio 模态训练。

4. **模板与文档更新**
   - **Qwen2.5-VL 训练模板** [#5838 [CLOSED]](https://github.com/huggingface/trl/pull/5838): 修正 Qwen2.5-VL 模板，使得 `&#123;&#37; generation &#37;&#125;` 标记在不破坏原有结构的前提下无缝嵌入。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在从单一的 LLM 对齐微调框架，进化为**涵盖多模态（视觉/音频）、异步强化学习、以及深度 Tool-use/Agent 系统的底层基础设施**。

近期频繁的更新展示了项目明确的工程化导向：
1. **解决工业级痛点**：针对 vLLM 多卡通信、特征截断引发的 NaN 损失、以及梯度检查点等真实训练场景下的硬核 Bug 进行定点清除。
2. **引领 Agent RL 规范**：工具调用训练、`response_schema` 治理以及工具观测损失特性，表明 TRL 正在加速 LLM 从单纯的“对话模型”向“智能体推理模型”演进的 RL 底层支撑。
3. **高价值多模态拓展**：从文本、视觉到今天开启的音频支持，TRL 确保开发者在进行多模态 RLHF/DPO/GRPO 时有开箱即用的标准化实现。对于致力于 Post-training 阶段研究的团队而言，TRL 的迭代动态具有极高的跟踪价值。

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

以下是为您生成的 `verl` 项目 2026-05-26 RL 日报摘要：

# verl 项目日报 (2026-05-26)

## 1. 今日速览
过去 24 小时内，`verl` 保持了较高的开发活跃度。项目新增/更新了 **30 个 Pull Requests** 和 **3 个 Issues**，无新版本 Releases 发布。从 PR 走向来看，当前社区的重心集中在**多硬件适配（Ascend NPU / AMD ROCm）、底层训练与推理的显存/通信优化、以及 DPO 等新训练范式的支持**上。

## 2. 版本发布
**无最新 Release 发布。**

## 3. 重点 Issues
今日的 Issues 集中在特定硬件配置下的训练稳定性及 CI 流程报错：

- **#6431 [Bug] Qwen3.6-35B 序列并行 (Sequence Parallel) 导致梯度 Norm 为 NaN**
  - **概况**：在使用 PR #5826 的 fork 进行训练时，若开启序列并行，Qwen3.6-35B 在第一步就会因梯度变为 NaN 导致崩溃。关闭该特性后恢复正常。
  - **链接**：[verl-project/verl Issue #6431](https://github.com/verl-project/verl/issues/6431)

- **#6458 [Ascend] CI 触发时 vllm0.18 与 CANN 不配套报错**
  - **概况**：NPU 环境的端到端测试 CI 脚本执行失败，原因是底层依赖 vllm 0.18 与 CANN 版本不匹配。
  - **链接**：[verl-project/verl Issue #6458](https://github.com/verl-project/verl/issues/6458)

- **#2738 [探讨] 数学任务 (GRPO) 训练中 Entropy 异常激增导致崩溃**
  - **概况**：一例长期未解决的算法/训练稳定性问题，使用 GRPO 进行训练时，模型在特定阶段 Entropy 突然暴涨导致崩溃，调整 LR 和 KL 惩罚均未彻底解决。（更新于 05-25）
  - **链接**：[verl-project/verl Issue #2738](https://github.com/verl-project/verl/issues/2738)

## 4. 关键 PR 进展
今日共有 30 位开发者在提交代码，以下为最具技术含量的关键 PR：

### 核心架构与训练特性
- **#6441 [Trainer] 支持 DPO (Direct Preference Optimization) 数据集与整理器**
  - **概况**：这是 `verl` 全面支持 DPO 训练流程的第一阶段（1/n），引入了 DPODataset 以加载和校验偏好数据，标志着项目从纯 RL (如 PPO/GRPO) 向混合对齐技术栈迈进。
  - **链接**：[verl-project/verl PR #6441](https://github.com/verl-project/verl/pull/6441)
- **#6086 [Hardware] 引入统一的硬件抽象层与插件化引擎覆盖系统**
  - **概况**：重构级特性。添加了平台抽象层，以插件化方式统一支持 NVIDIA、Ascend NPU、寒武纪 MLU、摩尔线程 MUSA 等多芯片架构，大幅提升多硬件生态的兼容性。
  - **链接**：[verl-project/verl PR #6086](https://github.com/verl-project/verl/pull/6086)
- **#6325 [veomni] 添加 MoE 路由重放 (R2/R3) 支持**
  - **概况**：针对 MoE (Mixture of Experts) 模型，将 VeOmni 的 hook 接入 actor pipeline，支持在 `compute_log_prob` 和 actor update 阶段记录并重放路由决策，提升了 MoE 模型 RL 训练的稳定性和一致性。
  - **链接**：[verl-project/verl PR #6325](https://github.com/verl-project/verl/pull/6325)

### Rollout 与推理引擎优化
- **#6456 [rollout, vllm] 修复 HYBRID 模式下多 DP 导致的 CUDA OOM**
  - **概况**：解决 FSDP 反向传播时的显存溢出问题。根因是在 `data_parallel_size > 1` 时，sleep 信号未能在所有 DP 分片中充分传播。此 PR 优化了 `engine.sleep()` 的调用机制。
  - **链接**：[verl-project/verl PR #6456](https://github.com/verl-project/verl/pull/6456)
- **#6434 [rollout, agent-loop] 增加 reasoning 解析器，过滤 think 标签**
  - **概况**：修复了 Agent 循环中的核心 Bug。在“思维链模型（如 Qwen3 thinking）”进行 Tool 调用时，必须在提取工具前剥离 `<think block>`，此 PR 补齐了这一关键解析步骤。
  - **链接**：[verl-project/verl PR #6434](https://github.com/verl-project/verl/pull/6434)
- **#6373 [rollout] 支持在权重更新时使用 MooncakeStoreConnector 硬重置**
  - **概况**：引入外部 KV cache 联合器池化配置，跨步骤复用 Prefix KV，进一步降低显存开销并提升推理速度。
  - **链接**：[verl-project/verl/pull/6373](https://github.com/verl-project/verl/pull/6373)

### 多硬件适配与底层修复
- **#6459 [rollout, vllm] 修复 ROCm (AMD GPU) 在 TP=1 时触发 SIGSEGV 崩溃**
  - **概况**：解决了在 AMD 显卡上因两级多进程 Spawn 导致的段错误，通过条件省略 `distributed_executor_backend` 实现了与 ROCm 的兼容。
  - **链接**：[verl-project/verl PR #6459](https://github.com/verl-project/verl/pull/6459)
- **#6464 [Megatron, MTP] 修复全响应 CP 导致的 NaN 损失**
  - **概况**：同步了上游 Megatron-LM 的修复，通过 `clamp num_tokens=0` 解决了 MTP (Multi-Token Prediction) 损失计算中的异常。
  - **链接**：[verl-project/verl PR #6464](https://github.com/verl-project/verl/pull/6464)
- **Ascend (NPU) 生态矩阵更新**：
  - [#6466 升级 NPU Docker 至 CANN 9.0.0](https://github.com/verl-project/verl/pull/6466)
  - [#6374 升级 Ascend 至 Megatron 016](https://github.com/verl-project/verl/pull/6374)
  - [#6463 修复 FSDP2 卸载与权重转移间的 Device 不匹配](https://github.com/verl-project/verl/pull/6463)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从纯 RL 走向 Post-training 对齐全栈**：项目正在突破单一的 RL 范式（如 PPO/GRPO），开始合入 DPO (Direct Preference Optimization) 的支持，旨在成为大模型对齐的一站式框架。
2. **工程上的硬核多模与多卡优化**：无论是针对 MoE 架构的路由重放机制，还是解决 vLLM/HYBRID 模式下跨 DP 的显存泄漏，都表明该团队在解决大规模 RLHF 训练中最棘手的底层工程瓶颈。
3. **“去 Nvidia 依赖”的坚决执行**：项目在统一硬件抽象层（兼容寒武纪、摩尔线程等）的基础上，每天都在高频修复和迭代 AMD ROCm 与 Ascend NPU 的相关 Bug。在算力多元化的趋势下，`verl` 正在成为跨硬件 RL 训练的标杆级基础设施。

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

# RL 开源生态日报：rl_games 项目追踪
**日期**：2026-05-26 | **项目**：[Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库活跃度集中在代码合并与底层硬件适配上。无新增 Issue 和 Release，核心维护者 [Denys88](https://github.com/Denys88) 审核并推进了 2 个关键 PR，主要涉及 Apple MPS 后端支持及训练控制逻辑的增强。

### 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

### 3. 重点 Issues
- **最新 Issues**：过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
- **[#351 Apple MPS support + envpool 1.2.5](https://github.com/Denys88/rl_games/pull/351) [OPEN]**
  - **核心变更**：引入对 Apple MPS (Metal Performance Shaders) 的支持，并将 `envpool` 依赖升级至 1.2.5 版本（首个兼容 Numpy 2.x 的版本）。同时恢复了缺失的 `docs/ENVPOOL.md` 文档。
  - **技术细节**：针对 MPS 后端不支持 `float64` 的特性，修改了 `running_mean_std.py` 等核心文件中的数据类型处理逻辑。
  - **生态意义**：扫清了 rl_games 在 Apple Silicon 芯片本地开发与训练的障碍，并紧跟 Numpy 大版本升级（2.x）的生态兼容性。

- **[#350 Add custom stop callback for training](https://github.com/Denys88/rl_games/pull/350) [CLOSED]**
  - **核心变更**：新增 `stop_fn(algo) -> bool` 自定义回调函数，用于在 `score_to_win`、`max_epochs` 等常规终止条件之外，提供更灵活的训练停止机制。
  - **技术细节**：该回调在每个 epoch 结束时由 rank 0 节点计算，并通过广播机制同步状态，已向下兼容并整合至 PPO（连续与离散空间）和 SAC 算法中。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **跨平台与异构硬件的高效适配**：随着 Apple Silicon 在开发者群体中的普及，[#351](https://github.com/Denys88/rl_games/pull/351) 这类针对 MPS 后端的底层修复，使得 rl_games 在个人开发机上的易用性大幅提升，打破了 RL 训练强依赖 Nvidia GPU 的限制。
2. **工程灵活性持续提升**：从 [#350](https://github.com/Denys88/rl_games/pull/350) 的合并可以看出，项目正在向更加模块化的控制流演进。自定义停止回调机制的引入，极大地便利了科研场景下基于特定状态（如收敛阈值、特定指标触发）的复杂实验控制。
3. **底层依赖的激进迭代**：迅速跟进 `envpool` 和 `numpy 2.x` 的兼容性，表明该库在保持极简高性能算法实现的同时，依然在积极维护与现代 Python 数据科学底层基建的兼容，确保了其在速度和生态上的竞争力。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 Gymnasium 项目 2026-05-26 RL 日报摘要：

# Gymnasium RL 生态日报 (2026-05-26)

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度平稳，无新版本发布。社区焦点集中在 **MuJoCo-v5 环境的官方教程建设**上。今日共有 1 条 Issue 更新与 1 条 PR 更新，均围绕如何为底层参数自定义提供标准化文档展开。

### 2. 版本发布
- **最新 Releases**: 无。
- *注：社区仍在等待包含 MuJoCo-v5 重大更新的 Gymnasium 1.0.0 正式版发布。*

### 3. 重点 Issues
- **#846 [Proposal] Add Tutorials for MuJoCo based environments** 
  - **标签**: `documentation` `enhancement` `good first issue`
  - **动态**: 该提案旨在为即将推出的 `MuJoCo-v5` 环境建立系统的官方教程。作者明确了几个关键教程需求（如加载自定义四足机器人模型等）。目前该 Issue 已累计 9 条深度讨论，是完善 Gymnasium 物理仿真能力闭环的重要一环。
  - **链接**: [Farama-Foundation/Gymnasium Issue #846](https://github.com/Farama-Foundation/Gymnasium/issues/846)

### 4. 关键 PR 进展
- **#1584 docs: add MuJoCo parameter customization tutorial**
  - **作者**: Lonny154
  - **动态**: 这是一个积极响应上述提案（#846）的文档 PR。它为新手提供了一份友好的 MuJoCo 教程，演示了如何通过 `gym.make` 的关键字参数（kwargs）定制环境底层参数。该 PR 选用 `HalfCheetah-v5` 环境作为案例，量化展示了在固定 Seed 的前提下，修改 `ctrl_cost_weight`（控制成本权重）对 RL 奖励组件的具体影响。这对研究人员调参具有直接指导意义。
  - **链接**: [Farama-Foundation/Gymnasium PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **API 层的解耦与抽象能力**: 从 PR #1584 可以看出，Gymnasium 持续在强化其“屏蔽底层复杂性”的设计哲学。通过 `gym.make(kwargs)` 直接干预 MuJoCo 物理引擎参数，同时保持标准化的 `step/reset` API 接口，极大降低了研究人员设计特定Reward函数和修改物理属性的工程门槛。
- **连续控制领域的基石地位**: MuJoCo 作为目前 RL 连续控制（如足式机器人、机械臂）的统治级仿真器，其与 Gymnasium 的深度整合（迈向 v5）依然是目前算法验证的前置标准。
- **活跃的开源社区传帮带**: 项目通过标记 `good first issue`（如 Issue #846），持续吸引外部贡献者参与核心文档和功能的构建，维持了健康的迭代生态。这也是其能在 OpenAI Gym 停止维护后，成功接过 RL 环境标准化大旗的核心原因。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-05-26 PettingZoo 项目日报摘要：

# PettingZoo RL 生态日报 (2026-05-26)

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库无新增 Release 和 Issue，但合并/更新了 5 个 Pull Requests。整体活动聚焦于**核心环境逻辑修复**（Action Masking、物理引擎、种子重置机制）以及**安全漏洞缓解**（路径遍历）。维护团队正在推进底层 API 的一致性与安全性治理。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
- **最新动态**：过去 24 小时无新增 Issue。

## 4. 关键 PR 进展
本次更新的 5 个 PR 揭示了多智能体环境中几个经典的工程痛点，具体进展如下：

- **[#1339] [CLOSED] 修复 CustomEnvironment 教程 CI 失败（np.int8 action masks）**
  - **链接**: [Farama-Foundation/PettingZoo PR #1339](https://github.com/Farama-Foundation/PettingZoo/pull/1339)
  - **摘要**: 解决了教程测试在 Python 3.11-3.14 版本全面崩溃的问题。根因是 Action Masking 的数据类型不一致（`step()` 中使用 `np.int8` 数组，而 `reset()` 返回纯 Python list）。该 PR 旨在统一类型表现，确保 API 调用的严格一致性。

- **[#1335] [OPEN] 修复 gin_rummy 在带种子重置时奖励重置为 RLCard 默认值的问题**
  - **链接**: [Farama-Foundation/PettingZoo/pull/1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)
  - **摘要**: 修复了多智能体卡牌环境 `gin_rummy` 中的严重复现性 Bug。当调用 `reset(seed=...)` 时，会静默覆盖用户配置的 `knock_reward` / `gin_reward`，将其重置为 RLCard 的底层默认值。此修复保障了多智能体强化学习（MARL）实验的可复现性。

- **[#1336] [OPEN] 修复 Pong 环境的球体反弹物理逻辑**
  - **链接**: [Farama-Foundation/PettingZoo/pull/1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336)
  - **摘要**: 修复了经典合作环境 Cooperative Pong 中的墙壁反弹（wall bounce）物理计算错误。底层物理引擎的修正对于策略评估的准确性至关重要。

- **[#1338] [OPEN] 安全修复：修补图像加载中的路径遍历漏洞**
  - **链接**: [Farama-Foundation/PettingZoo/pull/1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338)
  - **摘要**: 修复了位于 `pettingzoo/butterfly/knights_archers_zombies/src/img.py` 等处的路径遍历安全隐患。该漏洞可能通过 `get_image()` 函数被恶意利用，这表明 Farama 基金会正在系统性地排查和加固其底层环境依赖资产的安全性。

- **[#1337] [CLOSED] 文档: 重构并替换第三方 Dilemmas 环境**
  - **链接**: [Farama-Foundation/PettingZoo/pull/1337](https://github.com/Farama-Foundation/PettingZoo/pull/1337)
  - **摘要**: 响应 Issue #1308，对文档中的 "PettingZoo Dilemma Envs" 进行了代码重构与精简，替换了原先臃肿混乱的第三方实现，降低了新用户的上手门槛。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Farama 基金会（Gymnasium 的母组织）旗下的核心多智能体项目，PettingZoo 仍是当前学术界和工业界进行 MARL 基准测试的基石。今日的 PR 动态反映了该项目的核心价值：
1. **死磕底层复现性**：如 PR #1335 所示，解决底层依赖（如 RLCard）导致的“带种子重置即覆盖超参”的问题，是保障 MARL 算法对齐与公平比较的前提。
2. **严格的 API 规范**：修复 `np.int8` 与 `list` 的混用（PR #1339），延续了 Gymnasium 生态对 API 标准化的执念，减少了由于数据类型引发的隐蔽 Bug。
3. **安全与基础设施治理**：主动挖掘并修复非 Web 场景下的路径遍历漏洞（PR #1338），说明项目正在向企业级安全的标准化迈进，使其作为大规模分布式训练集群的基础组件更为可靠。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

以下是为您生成的 Stable Baselines3 (SB3) 项目 2026-05-26 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Stable Baselines3 生态整体保持平稳。项目无新版本发布，无新增或更新的 Pull Requests。仅有 1 条历史 Issue 出现了新动态。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
- **#627 [Bug] HER 算法未正确更新转换数据的 `done` 标志** 
  - **链接**: [DLR-RM/stable-baselines3 Issue #627](https://github.com/DLR-RM/stable-baselines3/issues/627)
  - **状态**: Open
  - **作者**: JakobThumm (创建于 2021-10-26，昨日更新)
  - **摘要**: 在使用 Hindsight Experience Replay (HER) 采样离线经验时，SB3 的当前实现能够根据替换后的目标正确计算新的奖励，但**未能同步更新 `done` 标志**。根据 HER 的核心思想，将预期目标替换为实际达到的目标后，该轨迹应被视为成功终止，`done` 应被置为 `True`。此缺陷会导致 Q 值估计时引导信号的传播出现偏差，直接影响策略在稀疏奖励环境下的收敛效果。

### 4. 关键 PR 进展
过去 24 小时内无新增或状态更新的 Pull Requests。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管当前处于代码迭代平稳期，SB3 在强化学习开源生态中依然具有不可替代的地位：
1. **算法实现的“黄金标准”**: SB3 以其极高的代码质量、详尽的文档和严格遵循 PEP 8 的面向对象设计，成为了学术界复现实验和工业界部署基线算法的标杆。
2. **高度可靠的核心 API**: 它是目前最稳定的 RL 工具库之一。针对上述 Issue #627 中涉及的 HER 等复杂机制，SB3 提供了清晰的问题追踪记录。这种透明度和社区对底层逻辑（如 Reward 和 Done 标志的马尔可夫决策过程建模）的深入探究，保证了后续修复的严谨性。
3. **生态扩展的基石**: 无论周边环境如何演进（如全新的 Gymnasium 接口），SB3 及其官方扩展库（如 SB3-Contrib、Stable-Baselines3-Zoo）始终提供即插即用的支持，大幅降低了强化学习从理论走向工程落地的门槛。

</details>