# RL 开源生态日报 2026-07-10

> 生成时间: 2026-07-09 22:27 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态正在发生深刻的分层演进。以 **verl、TRL、OpenRLHF、AReaL、slime** 为代表的大规模语言/多模态模型对齐框架，正在向百亿/千亿参数规模、异构算力集群和复杂 Agentic 交互场景进军；而以 **Gymnasium、PettingZoo、rl_games** 为代表的传统单/多智能体与具身智能基础设施，则致力于底层物理引擎重构、API 标准统一与极致的单机/多机吞吐量压榨。整个生态呈现出“上层追击大模型复杂算力调度，下层夯实经典环境与执行效率”的双线并进态势。

## 各项目活跃度对比
今日有真实动态的项目呈现极高的集中度，大语言模型对齐框架占据了绝大比例的社区精力，而经典 RL 算法库多处于稳定维护期。无活动项目（CleanRL、Open Instruct、ROLL、Stable Baselines3、Tianshou）已合并至下表末尾，不作冗余展开。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 82 | 28 | 0 | 底层数据平面重构，攻克千亿参数通信与显存墙 |
| **TRL** | 8 | 39 | 1 | KTO算法稳定，向异步Agent训练与异构芯片平滑过渡 |
| **Gymnasium** | 3 | 10 | 0 | 专注底层渲染痛点修复与泛型类型系统现代化 |
| **PettingZoo** | 2 | 7 | 0 | 收紧API规范，通过剔除低活跃环境进行生态瘦身 |
| **AReaL** | 1 | 5 | 0 | 修复分布式 GRPO 归一化静默错误，重构HTTP调度器 |
| **slime** | 1 | 5 | 0 | 深度攻坚 Agentic RL 轨迹管理与多轮对话容错 |
| **OpenRLHF** | 2 | 3 | 0 | 解决 vLLM 并发控制与 ZeRO-3 混合架构权重的冲突 |
| **ROCK** | 0 | 3 | 1 | 强化沙箱生命周期管理与底层数据存储彻底解耦 |
| **torchtune** | 1 | 1 | 0 | 统一多模型 EOS 推理边界，夯实 Tokenizer 底层基石 |
| **rl_games** | 0 | 1 | 0 | 追求极限吞吐，默认 BF16 与深度拥抱 torch.compile |
| *(无活动)* CleanRL / Open Instruct / ROLL / SB3 / Tianshou | 0 | 0 | 0 | 处于稳定期或主干停滞 |

## 共同关注的研究与工程方向
在大模型与经典强化学习交汇的今天，社区的研究与工程攻坚点呈现出高度一致的共振：

**研究侧信号：**
1. **复杂轨迹与 Agentic RL 攻坚**：训练目标正从单轮对齐转向多轮工具调用与环境交互。TRL 支持 GOLD 多轮调用与 AsyncGRPO 消息级轨迹，slime 重构 Turn-node 级轨迹管理，均是为 RL 训练智能体铺路。
2. **GRPO 算法的边界修正**：随着 GRPO 成为主流，其在分布式场景下的数值缺陷暴露。AReaL 修复了部分 rollout 导致的分组归一化静默错误，slime 增强了样本中断时的指标容错，说明业界正对 GRPO 进行深度的工程级修正。
3. **离策略与新型对齐目标探索**：verl 引入 TOPR（渐变离策略 REINFORCE）提升稳定性，TRL 则正式将无需成对数据的 KTO 算法扶正，体现了对高效、稳定 RL 目标函数的持续探索。

**工程/基础设施侧信号：**
1. **打破“显存与通信墙”**：百亿参数模型的显存调度成为重中之重。verl 和 AReaL 通过增量权重同步、FSDP加载优化和精准释放 vLLM 的 KV Cache 来规避 OOM；OpenRLHF 则在底层死磕 vLLM 推理与训练权重同步的并发互斥控制。
2. **底层架构的深度解耦**：为提升框架扩展性，核心项目均在“刮骨疗毒”。verl 推出 NeoProto 数据平面替换旧组件，OpenRLHF 重构状态机，ROCK 剥离元数据与 OSS 存储，均是为了突破复杂集群环境下的系统并发上限。
3. **极致的算力吞吐压榨**：针对物理仿真与大模型，业界都在榨干硬件红利。rl_games 默认开启 BF16 并采用 `torch.compile` 大幅提升 SAC 吞吐；verl 紧锣密鼓地适配 FP8/低精度计算与 Ascend 等异构算力。

## 差异化定位分析
- **大模型 RLHF 基建群（verl, TRL, OpenRLHF, AReaL, slime）**：这些项目的核心壁垒在于**分布式调度与底层编译优化**。verl 和 AReaL 定位于超大规模集群的极致吞吐（Megatron/FSDP + vLLM/sglang 分离式调度）；OpenRLHF 专注 DeepSpeed ZeRO 环境下的状态与并发安全；TRL 则凭借 HuggingFace 生态优势，侧重于降低前沿算法（GOLD/KTO）的准入门槛与异构硬件（如 Trainium）适配；slime 聚焦于最新架构模型（MiniMax-M2）适配与多轮 Coding Agent 痛点解决。
- **传统环境与基础算法库（Gymnasium, PettingZoo）**：核心价值在于**标准定义与评估可靠性**。它们不追求大模型级别的分布式调度，而是致力于泛型类型提示、API 规范统一和物理渲染引擎现代化（如摆脱 Box2D 依赖），以稳固其作为 RL 算法“第一测试床”的地位。
- **高性能控制框架（rl_games）**：定位于**单机/集群吞吐量与物理仿真无缝对接**。通过极致的 hot-loop 优化和拥抱新一代仿真引擎（MJLab / Isaac Lab），它依然是机器人与具身智能训练的首选利器。
- **大模型 RL 编排平台（ROCK）**：定位为**系统级工程化解耦**。专注解决工业化落地中的环境隔离（沙箱生命周期）和海量数据/Checkpoint 管理瓶颈，填补了上层算法与底层集群调度之间的空白。

## 社区热度与成熟度
今日的 PR 和 Issue 活跃度呈现明显的“倒挂”趋势——越偏向底层大模型分布式训练的项目，社区活跃度越高（verl 以 110 条总动态断层领先）；而传统的经典 RL 库（如 rl_games、Gymnasium）虽更新不多，但每一个 PR 都极具针对性和底层重构性质。从成熟度来看，各个项目均处于功能补全完毕后的“深水区重构期”：无论是 TRL 将实验性功能（KTO）正式毕业，还是 PettingZoo 主动剔除低活跃环境以减轻维护负担，都表明开源 RL 项目正在从“野蛮生长拼功能”转向“精耕细作求稳定”的成熟阶段。

## 值得关注的趋势信号
1. **vLLM 等推理框架与训练框架的边界正在模糊**：越来越多框架（verl, OpenRLHF）针对 vLLM 进行源码级魔改（如定制 sleep 机制、接管 KV Cache 释放、HTTP RPC 调度），推理引擎不再是黑盒，而是深度嵌入训练状态机的内部组件。
2. **多模态 RL（RLVR）算力瓶颈初步破局**：VLM（视觉语言模型）在 RL 训练中的显存爆炸问题正通过全新的 FSDP 加载机制和张量并行配置得到有效缓解（如 AReaL），预示着多模态对齐即将迎来规模化落地。
3. **异步并发容错成为核心竞争力**：纯粹的同步 RL 正在被淘汰。基于 Condition-based 状态机、HTTP RPC 和 Stale-aware（陈旧度感知）数据源的异步/在线 RL 正在普及，这将极大提升大规模集群环境下的 GPU 利用率与容错韧性。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 生态动态 (2026-07-10)

## 1. 今日速览
过去 24 小时，[alibaba/ROCK](https://github.com/alibaba/ROCK) 仓库无新增 Issue，但活跃 PR 数量为 3 条，且发布了 1 个新版本。当前项目的研发重心聚焦于**底层存储元数据解耦**、**沙箱生命周期管理后端扩展**以及 **TS SDK 稳定性修复**。

## 2. 版本发布
- **[v1.10.0](https://github.com/alibaba/ROCK/releases/tag/v1.10.0)**
  本次更新主要包含以下变更：
  - 版本号迭代至 1.9.0 基线 (PR [#1078](https://github.com/alibaba/ROCK/pull/1078))。
  - 为沙箱启动新增镜像仓库镜像查找功能，优化部署拉取体验 (PR [#1082](https://github.com/alibaba/ROCK/pull/1082))。
  - 统一 `archive_prefix` 默认值为 `rock-archives/`，规范存储路径。

## 3. 重点 Issues
今日无新增 Issue 更新。当前社区反馈处于静默期，研发推进以现有 In-Progress PR 为主。

## 4. 关键 PR 进展
- **[PR #1171: feat(datasets): add DatasetMetadataClient for pure DB-backed metadata management](https://github.com/alibaba/ROCK/pull/1171)** (作者: jake11-oho)
  - **进展**：引入纯数据库驱动的元数据客户端，实现与 OSS 文件操作的彻底解耦。
  - **技术细节**：新增 PostgreSQL CRUD + SQLite 方言支持的 `DbDatasetRegistry`，以及包含 Dataset、Instance、Image 等模型 ORM。引入面向用户的元数据 SDK，并附带 41 个单元测试，大幅提升数据管理层的可扩展性。
- **[PR #1203: feat(operator): add OpenSandboxOperator lifecycle backend (Phase 1)](https://github.com/alibaba/ROCK/pull/1203)** (作者: zpzjzjzjz)
  - **进展**：新增 OpenSandbox 作为 ROCK 后端（Phase 1），通过官方 Python SDK 委托沙箱生命周期管理。
  - **技术细节**：本 PR 仅交付生命周期对接层，代理层的执行/文件对接将在后续 PR 中跟进。此项为 ROCK 扩展异构算力沙箱提供了核心底座。
- **[PR #1224: fix(ts-sdk): fix nohup process completion detection and OSS download path](https://github.com/alibaba/ROCK/pull/1224)** (作者: xdlkc)
  - **进展**：修复 TS SDK 中导致大文件下载失败的三个关键缺陷。
  - **技术细节**：修复 `waitForProcessCompletion` 错误将“进程退出”异常判定为失败的逻辑（对齐 Python SDK 行为）；修复 `ensureOssutil` 普通模式触发 85s 服务超时的问题，优化大文件下载链路。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 正在系统性地解决强化学习在大规模工程化落地中的核心痛点：
1. **算力与沙箱解耦**：[PR #1203](https://github.com/alibaba/ROCK/pull/1203) 引入 OpenSandbox 后端，表明 ROCK 正在构建可插拔的算力执行层，这对 RL 训练中高频、异构的环境交互至关重要。
2. **数据与存储解耦**：[PR #1171](https://github.com/alibaba/ROCK/pull/1171) 将元数据管理从 OSS 文件操作中剥离，转向纯 DB 驱动。RL 训练依赖海量 Episode 数据和 Checkpoint，这种解耦能显著提升数据索引速度和系统并发上限。
3. **多语言 SDK 对齐与健壮性**：[PR #1224](https://github.com/alibaba/ROCK/pull/1224) 修复了 TS SDK 在大文件 OSS 下载中的边界缺陷。对于前端驱动的 RL 可视化或编排系统，SDK 的稳定性直接决定了用户体验。ROCK 在底层执行与上层调度两端的持续打磨，使其成为 RL 工程化基建的优质选择。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime 强化学习生态项目日报 (2026-07-10) **

### 1. 今日速览
过去 24 小时内，slime 项目整体活跃度平稳，无新版本发布。共有 1 条 Issue 更新和 5 条 PR 更新。开发重点聚焦于 **MiniMax-M2 模型格式的兼容性修复**、**多轮对话 RL 场景下的奖励计算稳定性**，以及**底层架构的重构与文档完善**。

### 2. 版本发布
- **无新版本发布** (Releases: 0)

### 3. 重点 Issues
- **[#2129] [Bug] MiniMax m2.7 HF checkpoint 转 torch_dist 报错**
  - **链接:** [THUDM/slime Issue #2129](https://github.com/THUDM/slime/issues/2129)
  - **进展:** 作者 Linzake 报告在将 MiniMax m2.7 的 HuggingFace 权重转换为 Megatron `torch_dist` 格式时遇到错误。此问题在今日获得了社区开发者的迅速响应，并直接催生了针对性修复 PR（见下方 PR #2190）。

### 4. 关键 PR 进展
今日共 5 条 PR 更新，技术细节如下：

- **[#2190] [修复] 为 Megatron TransformerConfig 补丁添加 rotary_percent (OPEN)**
  - **链接:** [THUDM/slime PR #2190](https://github.com/THUDM/slime/pull/2190)
  - **简评:** 针对 Issue #2129 的快速修复。通过在 Megatron 配置补丁中声明 `rotary_percent` 字段，解决了 MiniMax-M2 模型 HF 到 `torch_dist` 转换时的崩溃问题，保障了新模型结构的转换兼容性。

- **[#2157] [修复] 在 _compute_zero_std_metrics 中处理 None/dict 类型的奖励 (OPEN)**
  - **链接:** [THUDM/slime PR #2157](https://github.com/THUDM/slime/pull/2157)
  - **简评:** 增强了多轮对话 (Multi-turn) 或 OPD 场景下的容错性。修复了当样本被中断导致 `sample.reward` 为 `None`（或教师模型输出的 dict）时，导致指标计算崩溃的问题。

- **[#2189] [文档] 完善 PPO/Critic 相关文档 (OPEN)**
  - **链接:** [THUDM/slime PR #2189](https://github.com/THUDM/slime/pull/2189)
  - **简评:** 跟进底层代码变更（#1856），清理了过时的 `--critic-*` 命令行参数说明，补充了基于 `--megatron-config-path` 的角色覆写行为及训练部署文档。

- **[#2005] [重构] Coding-agent RL: turn-node TrajectoryManager + 可插拔 harness 层 (CLOSED)**
  - **链接:** [THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005)
  - **简评:** 这是一个底层大重构（约 4.9k 增 / 3.3k 删），旨在重构 coding-agent 的 rollout 子系统。引入了 Turn-node 级别的轨迹管理和可插拔的测试床层。该 PR 已关闭，可能意味着主干重构方向发生调整或后续会有拆分提交。

- **[#2148] 支持 stale-aware 数据源 (CLOSED)**
  - **链接:** [THUDM/slime PR #2148](https://github.com/THUDM/slime/pull/2148)
  - **简评:** 关于数据源新鲜度感知的优化，该 PR 已关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿大模型架构的适配能力：** 团队对 MiniMax-M2 这类新型模型架构在分布式 RL 训练中的格式转换 Bug 展现了极快的响应速度，证明其在 Megatron 后端融合上的深厚积累。
2. **直击复杂 RL 场景痛点：** PR #2157 和 #2005 表明，slime 正在深度攻坚 Agentic RL（如多轮对话、Coding Agent）。处理复杂轨迹管理（Trajectory Manager）以及因 Agent 中断导致的非标准 Reward（None/Dict）是目前 RL 训练框架的真正难点，slime 正在提供工程级的解决方案。
3. **关注底层工程与易用性的平衡：** 从底层分布式训练配置的解耦（如 Critic 参数重构与覆写），到上层文档的持续校对跟进，体现了该项目作为工业化 RL 训练框架的成熟度和可维护性。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习生态日报 | 2026-07-10

## 1. 今日速览
过去 24 小时，AReaL 仓库无新版本发布，共有 1 条 Issue 更新和 5 条 PR 更新。活动焦点集中在 **GRPO 优势归一化的正确性修复**、**大模型/VLM 训练的显存优化与多硬件适配**，以及**底层调度器架构的演进**。多个核心 PR 处于 stale 状态，亟待社区审查与推进。

## 2. 版本发布
- **Releases**: 无

## 3. 重点 Issues
- **#1419 [BUG] Partial rollout groups silently corrupt GRPO group normalization**
  - **状态**: OPEN (stale)
  - **作者**: EazyReal
  - **更新**: 2026-07-09
  - **分析**: 报告指出在部分 rollout group 场景下，GRPO 的组归一化逻辑会发生静默错误。作者已在纯 CPU 环境下跨多种随机种子确定性地复现该 Bug，说明这是一个框架级的数值逻辑缺陷，对 RL 训练的稳定性构成潜在威胁。
  - **链接**: [areal-project/AReaL Issue #1419](https://github.com/areal-project/AReaL/issues/1419)

## 4. 关键 PR 进展
今日更新的 5 个 PR 覆盖了从核心算法修复到分布式基础设施的多个维度：

- **#1392 fix: add group_id to StartSessionRequest for online GRPO session grouping**
  - **分析**: 修复在线 RL 模式下 `group_size > 1` 时 GRPO 优势归一化静默错误的问题。根因是并行启动的会话将不相关的对话合并到了同一组，此 PR 通过引入 `group_id` 进行会话隔离，与 Issue #1419 体现了 GRPO 分组逻辑的持续完善。
  - **链接**: [areal-project/AReaL PR #1392](https://github.com/areal-project/AReaL/pull/1392)

- **#1441 feat(infra): add HTTP-based Ray Scheduler**
  - **分析**: 基础设施重大更新。引入基于 Ray actors 的 HTTP RPC 调度器，替代原有 Ray-native 路径，通过子进程管理 RPC worker 并实现 HTTP 张量序列化。这为复杂集群环境下的代理工作和资源管理提供了更强的灵活性。
  - **链接**: [areal-project/AReaL PR #1441](https://github.com/areal-project/AReaL/pull/1441)

- **#965 add vlm tensor-parallelism with efficient loading** (stale)
  - **分析**: 修改 FSDP 引擎以支持大参数量稠密模型（如 Qwen3-VL-32B）的高效加载，解决初始化阶段的 OOM 问题，并提供 VLLM 环境变量配置以支持张量并行。
  - **链接**: [areal-project/AReaL PR #965](https://github.com/areal-project/AReaL/pull/965)

- **#1396 fix: Prevent workers from applying dp-scaled staleness...** (stale)
  - **分析**: 针对因本地容量归零导致的 rollout 挂起问题进行修复。将 worker 的默认 `train_data_parallel_size` 设为 1，防止错误应用数据并行缩放的陈旧度逻辑。
  - **链接**: [areal-project/AReaL PR #1396](https://github.com/areal-project/AReaL/pull/1396)

- **#962 Ascend Branch VLM Bug** (stale)
  - **分析**: 修复 Ascend（昇腾）分支在训练 VLM 时因 `str` reward 导入错误引发的崩溃，推进框架的异构硬件生态兼容性。
  - **链接**: [areal-project/AReaL PR #962](https://github.com/areal-project/AReaL/pull/962)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直面 GRPO 算法工程化痛点**：随着 GRPO 成为 LLM 对齐的主流算法，其分组归一化在分布式/在线场景下的边界问题频发（如 Issue #1419 与 PR #1392）。AReaL 团队正在系统性排查并修复这些静默数值错误，提供了较深度的工程参考。
2. **前瞻性的多模态与异构算力支持**：通过优化 FSDP 加载机制解决 32B 级别 VLM 的显存瓶颈（PR #965），并积极适配 Ascend 等非 Nvidia 生态硬件（PR #962），紧跟多模态强化学习（RLVR）的发展趋势。
3. **底层调度架构的持续演进**：从 Slurm 到最新的 HTTP-based Ray Scheduler（PR #1441），AReaL 正在重构大规模分布式 RL 的通信与调度层，这对于追求高吞吐量和集群稳定性的大规模 RL 训练生态具有极高的技术价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-10 TRL (Transformers Reinforcement Learning) 开源项目日报摘要：

# 🤖 TRL 强化学习日报 (2026-07-10)

## 1. 今日速览
过去 24 小时内，TRL 仓库活跃度高度密集，共处理了 **8 条 Issue** 更新与 **39 条 PR** 更新，并正式发布了 **1 个新版本**。今天的核心焦点完全集中在 **v1.8.0 的发布**、**KTO 算法的稳定化**、**底层训练机制（如显存控制、分布式与量化）的修复**，以及 **GOLD 算法与 AsyncGRPO 的进阶功能扩展**。

## 2. 版本发布
- **[Release v1.8.0](https://github.com/huggingface/trl/releases)**：正式发布 v1.8.0 版本。本次更新的核心亮点是 **KTO (Kahneman-Tversky Optimization) 正式从实验阶段 (`trl.experimental.kto`) 毕业成为稳定训练器**。稳定后，KTO 拥有了与 DPO/GRPO/SFT 完全一致的顶层 API 导入方式和标准测试流程。

## 3. 重点 Issues
今日 Issue 区主要处理了使用层面的陷阱及部分历史 Bug 的清理：

- **DPO 缓存路径报修 (Open)**：[#6291](https://github.com/huggingface/trl/issues/6291) 报告了开启 `precompute_ref_log_probs=True` 时，`DPOTrainer` 因未正确传递缓存路径给 `dataset.map()` 导致触发 `FileNotFoundError`。
- **GRPO 隐性贪心解码 (Closed)**：[#5783](https://github.com/huggingface/trl/issues/5783) 指出在 `transformers >= 4.50.0` 结合 Qwen2.5 模型时，默认 `temperature=1.0` 会导致 GRPO 进行近贪心解码，造成优势信号退化。该问题已被标记关闭。
- **GRPO 奖励函数签名变更 (Closed)**：[#4202](https://github.com/huggingface/trl/issues/4202) 确认了近期 GRPO 奖励函数接收的 completions 数据结构（嵌套 list 与 content 格式）发生的变更。
- **vLLM 连接稳定性 (Closed)**：[#3214](https://github.com/huggingface/trl/issues/3214) 报告了开启 `vllm=True` 进行多卡 GRPO 训练时，运行超过 1 个 epoch 后会断开 vLLM Server 连接的问题。

## 4. 关键 PR 进展
今日有大量高质量的代码提交，涵盖了从核心算法到分布式训练的多个维度：

**🚀 核心算法与新特性**
- **KTO 文档对齐**：[#6345](https://github.com/huggingface/trl/pull/6345) 在 v1.8.0 发布之际，全面清理了文档中对 KTO 的“实验性”描述，使其结构与 DPO 对齐。
- **GOLD 训练器增强**：[#5725](https://github.com/huggingface/trl/pull/5725) 实现了之前仅有配置项但未落地的序列级知识蒸馏 (`seq_kd`)；[#6328](https://github.com/huggingface/trl/pull/6328) 为 GOLDTrainer 引入了多轮工具调用能力。
- **AsyncGRPO 扩展**：[#6344](https://github.com/huggingface/trl/pull/6344) 为 AsyncGRPO 增加了 LoRA 支持，通过 NCCL 直接同步 A/B 参数至 vLLM；[#6250](https://github.com/huggingface/trl/pull/6250) 引入了基于消息级别的线性轨迹 rollout 模式。

**🛠️ 分布式与显存优化**
- **Chunked CE 显存优化**：[#6260](https://github.com/huggingface/trl/pull/6260) 修复了 `SFTTrainer` 在非 Liger 路径下物化 logits 导致的 OOM 问题；[#6314](https://github.com/huggingface/trl/pull/6314) 和 [#6262](https://github.com/huggingface/trl/pull/6262) 统一并优化了 GPU 与 Trainium (Neuron) 环境下的算子实现，避免触发 XLA 报错。
- **FSDP 与 QLoRA 修复**：[#6330](https://github.com/huggingface/trl/pull/6330) 修复了 FSDP2 / DeepSpeed ZeRO-3 下 `cast_lm_head_to_fp32` 引发的混合精度崩溃；[#6343](https://github.com/huggingface/trl/pull/6343) 解决了实验性 PEFT 训练器中 QLoRA + FSDP1 混合数据类型导致的炸毁问题。

**🐛 Bug 修复与测试**
- **DPO/KTO 缓存修复**：[#6348](https://github.com/huggingface/trl/pull/6348) 完美修复了 Issue #6291 中的参考对数概率缓存计算路径错误。
- **VLM 兼容性修复**：[#6342](https://github.com/huggingface/trl/pull/6342) 修复了在多模态模型上进行 GKD 采样时索引越界的问题；[#6156](https://github.com/huggingface/trl/pull/6156) 修复了 `chunked_nll` 拦截 VLM 生成参数的 Bug。

## 5. 为什么在当前 RL 生态继续关注 TRL？
1. **从单轮对齐到智能体（Agent）的平滑过渡**：PR #6328 (GOLD 支持 Tool Calling) 和 PR #6250 (AsyncGRPO 支持 message-mode rollouts) 表明，TRL 正在将大模型训练的重心向“多轮交互与环境反馈”倾斜，这正是当前 RL 用于 LLM Agent 训练的最核心痛点。
2. **极致的工程优化与异构计算支持**：今日合并的多个关于 `chunked_nll` 统一路径、避免物化 logits 的 PR，以及对 AWS Trainium (Neuron) 的专门适配，证明 TRL 在“降低 RLHF/RL 训练显存与算力门槛”方面做到了业界最前沿。
3. **异步与在线强化学习的基建成熟**：对 AsyncGRPO 的持续迭代（如 PR #6344 轻量级 LoRA 同步）以及与底层推理框架（vLLM、OpenEnv）的深度解耦，使得在线 RL 的训练延迟大幅降低，这在实际的工业级大模型迭代中具有极高的实用价值。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-07-10)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库共有 5 项动态（2 条 Issues，3 条 PR），无新版本发布。今日核心动态聚焦于分布式训练框架的底层并发控制修复与 ZeRO-3 架构兼容性优化，开发者 `Functionhx` 集中提交了两个关键 Bugfix PR，解决 VLLM Rollout 与权重更新并发冲突，以及 Qwen3.5 在 ZeRO-3 下的梯度截断异常问题。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **#1164 [OPEN] Fix SignalActor concurrency issues and refactor state management based on condition lock**
  - **作者**: CLFutureX
  - **摘要**: 指出当前 `SignalActor` 使用 `asyncio.Event` 实现互斥控制存在逻辑失效风险，在分布式训练场景下，轨迹生成（rollout）与权重更新（weight update）的并发会导致脏写。提出基于条件锁重构状态管理的需求。
  - **链接**: https://github.com/OpenRLHF/OpenRLHF/issues/1164

- **#1258 [OPEN] Qwen3.5-9B and above trained under zero3 have most weights frozen**
  - **作者**: allen-dc
  - **摘要**: 反馈 Qwen3.5-9B 及以上模型在 ZeRO-3 环境下训练时大部分权重被冻结。根因定位在 `Actor.__init__` 中的 `set_z3_leaf_modules`，该本用于规避混合解码器架构（self_attn vs linear_attn）DS-Z3 预取失败的补丁，在实际应用中反而导致了参数更新异常。
  - **链接**: https://github.com/OpenRLHF/OpenRLHF/issues/1258

## 4. 关键 PR 进展
- **#1262 [OPEN] Fix SignalActor concurrency: replace asyncio.Event with Condition-based state machine**
  - **作者**: Functionhx
  - **摘要**: 针对 Issue #1164 的修复。移除了原有基于 `asyncio.Lock` 的 `VLLMLock`，引入 `asyncio.Condition` 结合 `IDLE/GENERATOR/UPDATE_WEIGHT` 状态枚举重构 `SignalActor`。有效阻止并发 rollout 和权重同步时的脏权重写入，并提供了显式状态供故障诊断。
  - **链接**: https://github.com/OpenRLHF/OpenRLHF/pull/1262

- **#1261 [OPEN] Fix Qwen3.5 ZeRO-3 frozen weights from set_z3_leaf_modules hybrid detection**
  - **作者**: Functionhx
  - **摘要**: 针对 Issue #1258 的修复。解决了 `set_z3_leaf_modules` 在混合解码器类上注册 `register_full_backward_pre_hook` 从而截断 ZeRO-3 内部参数梯度的问题。方案为新增 `detect_hybrid=False` 参数跳过混合检测，同时保留 MoE leaf 标记功能。
  - **链接**: https://github.com/OpenRLHF/OpenRLHF/pull/1261

- **#1209 [CLOSED] feat: add --from_scratch option to initialize model with random weights**
  - **作者**: konghw-git
  - **摘要**: 为 SFT 训练流程添加 `--from_scratch` 参数，支持基于模型 config 初始化随机权重，使 OpenRLHF 的 SFT pipeline 能够用于从头预训练。该 PR 已于今日关闭。
  - **链接**: https://github.com/OpenRLHF/OpenRLHF/pull/1209

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 作为主流的 RLHF/PPO 开源框架，其工程壁垒在于**异构分布式系统（DeepSpeed ZeRO-3 与 vLLM）的协同与并发控制**。今日的 PR 动态精准体现了该项目的核心价值：
1. **直击底层并发痛点**：vLLM Rollout 与 RL 训练权重同步的互斥控制是 RLHF 训练稳定性的命脉，PR #1262 引入显式状态机替代粗粒度锁，反映了项目在异步并发容错机制上的持续演进。
2. **敏捷适配新一代模型架构**：主流模型（如 Qwen3.5 的混合解码器架构）对 ZeRO-3 的参数分片与梯度钩子提出了苛刻要求，PR #1261 的快速响应表明项目具备深度定制 DeepSpeed 底层行为以兼容 SOTA 模型的工程迭代能力。这对关注大模型复杂架构 RL 训练稳定性的研究者和工程师具有不可替代的参考价值。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl (volcengine/verl) RL 生态日报摘要 | 2026-07-10**

### 1. 今日速览
- **Issues 活跃度**：过去 24 小时共有 82 条 Issue 更新（多集中于分布式训练通信报错、显存溢出及多轮对话机制讨论）。
- **PR 活跃度**：过去 24 小时共有 28 条 PR 更新，核心围绕底层数据平面重构、FP8/低精度计算支持、权重同步带宽优化以及 Ascend 硬件适配。
- **版本发布**：过去 24 小时无新版本 Release。

### 2. 重点 Issues
- **[Bug] dist_checkpointing stuck on communication with MoE models** ([#2238](https://github.com/volcengine/verl/issues/2238))
  分布式环境下 Qwen3-30B MoE 模型保存 Checkpoint 时卡在 `all_reduce` 通信。使用 32 GPU 时保存耗时达 22 分钟，Rank 0 耗时更长（36分钟）。
- **[Bug] OOM in FSDP backward, because of vllm not returning memory in time** ([#2186](https://github.com/volcengine/verl/issues/2186))
  长推理 GRPO 训练中，FSDP 反向传播时偶发 OOM。开发者排查指出 vLLM 未及时释放缓存分配的显存是导致崩溃的主要原因。
- **[Bug] Megatron+sglang training occurs nccl timeout** ([#2325](https://github.com/volcengine/verl/issues/2325))
  在 64 张 H20 节点上运行 Megatron + sglang 后端时，Rollout 生成阶段发生 NCCL 超时。
- **[Feature] How to create a Rollout only worker?** ([#2250](https://github.com/volcengine/verl/issues/2250))
  社区探讨高优先级需求：解耦 Rollout 与训练，期望实现仅计算 `rollout_log_probs` 的纯推理 Worker，而无需挂载完整的 FSDP 后端。
- **[Roadmap] verl 26Q3 roadmap** ([#6985](https://github.com/volcengine/verl/issues/6985))
  发布 26 年第三季度路线图，涵盖 Megatron 废弃 mbridge、MXFP8/NVFP4 低精度支持、新模型架构接入等。

### 3. 关键 PR 进展
- **[single_controller] remove transfer queue and restore RayPPOTrainer** ([#6999](https://github.com/volcengine/verl/pull/6999))
  核心架构重构：移除 `TransferQueue` 运行时路径，将 PPO 默认入口切回 `RayPPOTrainer`，为引入新一代 NeoProto 数据平面铺平道路。
- **[algo] add TOPR (Tapered Off-Policy REINFORCE) policy loss** ([#6986](https://github.com/volcengine/verl/pull/6986))
  算法拓展：引入 TOPR（渐变离策略 REINFORCE）目标函数，通过根据优势符号对序列进行非对称处理，提升离策略更新的稳定性。
- **[checkpoint_engine] Delta weight sync over NCCL for disaggregated rollout** ([#6974](https://github.com/volcengine/verl/pull/6974))
  性能极致优化：针对分离式 Rollout 架构，训练每一步后仅通过 NCCL 广播发生改变的增量权重（Cutting weight-sync traffic），将权重同步流量降至稀疏比级别。
- **[misc] add Qwen3.5 397B support, workaround vLLM cache** ([#6994](https://github.com/volcengine/verl/pull/6994))
  模型与基建更新：规避 verl 0.8.0 中的 vLLM 多模态缓存问题，新增 Qwen3.5 397B 变体的 GRPO 训练脚本，并引入适配 A2/A3 环境的 Dockerfile。
- **[vllm] release only kv cache during sleep** ([#6991](https://github.com/volcengine/verl/pull/6991))
  显存优化：完善 vLLM server 模式，通过 `sleep(level=1)` 机制丢弃 KV Cache 并在卸载权重的同时保持 rollout 权重驻留。

### 4. 为什么值得在当前 RL 生态继续关注？
1. **底层数据平面的持续进化**：verl 正在进行深度的底层重构（如 NeoProto 数据平面），替代旧有数据传输机制，这表明项目在追求 RL 训练吞吐量的极限。
2. **破解 LLM 训练显存与通信瓶颈**：从增量权重同步（Delta weight sync）到精确控制 vLLM KV Cache 释放，verl 正在系统性地解决百亿/千亿级参数大模型在 RLHF 中的 OOM 与通信墙问题。
3. **无缝融合前沿算法与硬件生态**：迅速跟进 TOPR 等前沿 RL 算法，同时深度适配 W4A8 低精度模拟、FP8 权重交互，并对 Ascend 等国产异构算力提供完善的 CI 支持。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 生态日报 (2026-07-10)

## 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度较低，无新版本发布。Issue 与 PR 板块各更新 1 条，焦点高度集中在 **Gemma Tokenizer 推理模式的修复与适配** 上。社区成功推动了一个标记为 `good first issue` 的历史遗留问题走向解决。

## 2. 版本发布
**无**。今日未产生新的 Release。

## 3. 重点 Issues
- **#2478 [bug, good first issue, community help wanted] Add add_end_token to the Gemma Tokenizer**
  - **作者**: pbontrager | **创建于**: 2025-03-11 | **更新于**: 2026-07-09
  - **摘要**: 此前 Llama3 Tokenizer 已通过 PR #1494 更新，在 `tokenize_messages` 中支持 `add_end_token` 以确保生成的正确性。Gemma 的 Tokenizer 尚未同步此逻辑，需要补齐 `add_start_tokens` 和 `add_end_tokens` 的支持。
  - **链接**: [meta-pytorch/torchtune Issue #2478](https://github.com/pytorch/torchtune/issues/2478)

## 4. 关键 PR 进展
- **#2969 [OPEN] [CLA Signed] fix: respect Gemma tokenizer inference mode.**
  - **作者**: ofeliacode | **创建于**: 2026-07-09
  - **摘要**: 该 PR 直接修复上述 Issue #2478。指出 `GemmaTokenizer.tokenize_messages(..., add_eos=False)` 虽已支持省略 EOS，但在实际推理模式下逻辑未完全对齐。PR 重点修复了该边界问题，并同步更新了测试与文档。
  - **链接**: [meta-pytorch/torchtune PR #2969](https://github.com/pytorch/torchtune/pull/2969)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **序列边界控制的底层基石**：在 RLHF / RLAIF 流水线中，Token 级别的准确截断与控制（如 EOS token 的严格对齐）直接关系到策略网络（Policy Model）和价值网络（Value Model）的 Reward 计算准确度。torchtune 对 Gemma / Llama3 等主流基座 Tokenizer 推理模式的精细化修复，为 RL 训练中的解码稳定性提供了底层数据处理保障。
2. **社区驱动的工程健壮性**：从长达数月悬而未决的 `good first issue` 到社区开发者（ofeliacode）提交带 CLA 签名的高质量修复 PR，说明项目维护者对底层 Tokenizer 一致性的重视，以及社区贡献流程的顺畅。这种持续的工程打磨是支撑复杂 RL 算法稳定运行的前提。
3. **多模型后处理标准化**：torchtune 不断将 Llama 上的最佳实践（如 `add_end_token` 逻辑）横向迁移至 Gemma 等其他开源模型，正在逐步统一多模型的 Tokenize 接口标准，降低了 RL 研究者在切换不同基座模型时的适配成本。

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

这里是为您生成的 2026-07-10 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
- **Issues 动态**：过去 24 小时内无新增或更新的 Issue（0 条）。
- **PR 动态**：处理于 1 个核心性能优化与集成改进 PR（#360）。
- **版本发布**：无新版本发布。
- **项目链接**：[Denys88/rl_games](https://github.com/Denys88/rl_games)

### 2. 版本发布
- **无**。当前项目代码库处于积累阶段，主要变动集中在主干分支的 PR 审核与合并中。

### 3. 重点 Issues
- **无**。社区在过去 24 小时内未提交新的功能请求或 Bug 报告，项目当前处于稳定维护与内部优化状态。

### 4. 关键 PR 进展
**[#360 [OPEN] WIP: PPO hot-loop perf batch, scheduler/sigma fixes, MJLab integration improvements](https://github.com/Denys88/rl_games/pull/360)**
- **作者**：ViktorM
- **状态**：Open (Work In Progress)
- **技术摘要**：这是一个集大成的性能优化与底层重构 PR，重点推进了以下变更：
  - **默认开启 BF16 混合精度**：在支持的 GPU 上默认启用 BF16，并完全移除了 `GradScaler`（利用 BF16 具备 FP32 指数范围的优势，更新路径中不再需要 loss scaling）。
  - **SAC 深度编译优化**：SAC 算法默认采用 `torch.compile` 的 `reduce-overhead` 模式，实测吞吐量提升高达 +28% / +17%，并将编译应用于子模块。
  - **修复与生态集成**：修复了学习率调度器与 sigma 相关的问题，并针对 **MJLab**（MuJoCo/Mujoco Lab）的集成进行了适配性改进。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
`rl_games` 作为强化学习生态中老牌且极具竞争力的高性能 RL 库，其动向一直代表了工业级 RL 训练的底层技术演进趋势：
1. **极致的训练吞吐量追求**：PR #360 展示了项目对“hot-loop”（热循环）性能压榨的极致追求。将 BF16 默认化和 SAC 的 `torch.compile` 落地，说明项目正在积极拥抱 PyTorch 2.x 生态，这对于需要消耗海量算力的机器人控制与具身智能训练至关重要。
2. **无缝对接前沿仿真环境**：PR 中提及的 MJLab 集成改进，表明 `rl_games` 正在积极适配最新的高性能物理仿真环境。结合其近期对 Isaac Gym / Isaac Lab 等环境的良好支持，它依然是当前基于 GPU 大规模并行仿真的 RL 项目首选的训练框架之一。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# 📰 RL 日报：Gymnasium 生态追踪 (2026-07-10)

## 1. 今日速览
过去 24 小时，Gymnasium 仓库共有 **0** 个新版本发布，**3** 条 Issue 更新，**10** 条 PR 更新。今日的社区活跃度高度集中在**底层 Bug 修复**与**API 类型系统增强**。开发者 @Functionhx 集中修复了积压的渲染依赖与相机配置问题，同时多个涉及泛型类型提示和底层环境重构的重要 PR 再次被激活。

## 2. 版本发布
**无**。当前主干代码仍在持续整合功能性 PR，推测距离下一次 Minor 版本发布仍有一段整合期。

## 3. 重点 Issues
今日涉及的 Issue 均聚焦于环境部署与渲染层面的实际痛点：

*   **[Bug] MuJoCo 相机配置失效** ([#1141](https://github.com/Farama-Foundation/Gymnasium/issues/1141))
    *   **摘要**: 在 `MujocoEnv` 中，开发者调整 `default_camera_config` 的参数（如 `distance`, `elevation`）后，渲染结果未发生改变。该问题已被跟进并提交了修复 PR。
*   **[Bug] `[all]` 依赖导致非 N 卡设备强装 CUDA 库** ([#1381](https://github.com/Farama-Foundation/Gymnasium/issues/1381))
    *   **摘要**: 执行 `pip install "gymnasium[all]"` 时，由于拉取了 PyTorch 和 JAX 的默认依赖，导致纯 CPU 或 AMD GPU 环境下被强制下载大量 `nvidia-cuda-*` 包，严重占用磁盘空间。
*   **[Help Wanted] 为 Box2D 与 MuJoCo 文档提供真实策略的 GIF 动图** ([#1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610))
    *   **摘要**: 官方寻求社区贡献，希望使用 SB3 等基础框架训练出合理策略，替换当前文档中仅展示“随机动作”的环境演示 GIF。

## 4. 关键 PR 进展
今日的 PR 动态展现了社区对 Gymnasium 底层机制的深度维护：

**🔥 核心修复与优化**
*   **[Fix] 修复 `default_camera_config` 不生效问题** ([PR #1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618) by @Functionhx)
    *   **进展**: 定位到根因在于模型自带名为 `"track"` 的相机，导致覆盖逻辑被短路。该 PR 直接解决了上述 Issue #1141。
*   **[Fix] 从 `[all]` 中移除 jax 和 torch 依赖** ([PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617) by @Functionhx)
    *   **进展**: 修改 `pyproject.toml`，避免在 CPU 机器上拉取庞大的 Nvidia CUDA 包，解决了 Issue #1381。
*   **[Fix] 修复 `Discrete.contains` 在小精度 (int8/uint8) 下的整数溢出** ([PR #1616](https://github.com/Farama-Foundation/Gymnasium/pull/1616) by @teddytennant)
    *   **状态**: **已关闭**。针对 `start + n` 超出数据类型上限导致的溢出问题进行了修正。

**🚀 架构增强与类型支持**
*   **[Feature] 泛型向量化环境与包装器类型** ([PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577) by @jorenham)
    *   **进展**: 将 `VectorEnv` 及其子类转换为泛型类型，修复了类型变量 (`TypeVar`) 的兼容性问题，极大提升了静态类型检查的准确度。
*   **[Feature] 支持 `Tuple` 空间的标准泛型提示** ([PR #1537](https://github.com/Farama-Foundation/Gymnasium/pull/1537) by @Coolgolf1)
    *   **进展**: 允许开发者使用 `spaces.Tuple[spaces.MultiDiscrete, spaces.Box]` 的语法进行类型提示。
*   **[Feature] 添加 `check_wrapper()` 实用工具** ([PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556) by @Jatin-Shihora)
    *   **进展**: 类似于 `check_env()`，提供针对自定义 Wrapper API 实现规范性的验证工具。

**🧪 物理引擎与环境迭代**
*   **[Refactor] 将 Lunar Lander 物理引擎移植至 Pymunk** ([PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) by @Lonny154)
    *   **进展**: 试图摆脱对 Box2D 的依赖，使用 Pymunk 重新实现核心 `LunarLander` 物理（地形生成、着陆器约束等）的概念验证。
*   **[Feature] Car Racing 基于已访问网格百分比的终止条件** ([PR #1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323) by @VincenzoPalma)
    *   **进展**: 赛车环境在完成特定路径覆盖率后将自动触发 `terminated=True`，有助于更好地界定 Episode 边界。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 OpenAI Gym 的实质继任者，Gymnasium 今日的数据流反映出两个关键的生态价值：
1. **摆脱历史包袱的持续进化**：无论是重构 LunarLander 的底层物理引擎（摆脱 Box2D），还是细化向量化环境的泛型类型提示，Gymnasium 正在为未来的大规模分布式 RL 训练打下更严谨、更现代的工程地基。
2. **切中开发者真实痛点**：今日的重点修复精准打在了 RL 研究者最头疼的几个点上——环境渲染视角不可控、`pip install` 引入冗余庞大的 CUDA 库。这种务实的工程导向，使其在 SB3, CleanRL 等主流现代 RL 框架的加持下，依然是构建和评估强化学习智能体不可替代的“第一基础设施”。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL 开源生态日报：PettingZoo (2026-07-10)

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库共有 **0** 个新版本发布，**2** 条 Issue 发生状态/评论更新，**7** 条 Pull Request 活跃更新。今日的核心焦点集中在**环境注册机制标准化、游戏渲染功能增强（Hanabi/KAZ）以及底层依赖的优化**。

## 2. 版本发布
- **最新 Releases**：无（当前正处于下一个大版本发布前的代码清理与功能整合期）。

## 3. 重点 Issues
今日活跃的 Issues 揭示了项目核心维护者正在为下一版本进行“瘦身”与社区互动：

- 📌 **[Issue #1383] 移除未被充分利用的环境** (作者: jkterry1)
  - **摘要**：在发布下一个版本之前，官方建议移除使用率极低的环境，包括 `TicTacToe`（绝大多数开发者转而使用 Rock Paper Scissors 或 Connect Four）以及 `Gin Rummy`。
  - **链接**：[Farama-Foundation/PettingZoo Issue #1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383)

- 📌 **[Issue #1381] [悬赏] $200 美元奖励优质 KAZ 策略** (作者: jkterry1)
  - **摘要**：官方提供 200 美元悬赏，征集能在最新修复的 KAZ 环境中表现良好、且基于非随机策略运行的智能体。要求提交演示 GIF 并符合文档规范。
  - **链接**：[Farama-Foundation/PettingZoo Issue #1381](https://github.com/Farama-Foundation/PettingZoo/issues/1381)

## 4. 关键 PR 进展
今日的 PR 更新展现了 PettingZoo 在 API 规范化和视觉渲染上的推进：

- 🛠 **[PR #1306] 新增 `RecordVideo` 包装器** (作者: nightly)
  - **进展**：直接将 Gymnasium 的 `RecordVideo` 包装器移植到 PettingZoo 中，支持 AEC 和基础多智能体环境的直接录像，免去用户依赖 SB3 或 TorchRL 自行实现录像逻辑的麻烦。
  - **链接**：[Farama-Foundation/PettingZoo PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)

- 🛠 **[PR #1390] 修复并规范化环境 ID 注册机制** (作者: Trenza1ore)
  - **进展**：修复了 Registry 中未正确解析版本号的问题（例如将 `atari/basketball_pong_v3` 错误识别为环境名），强制要求使用 `-v[version]` 格式，并提升了代码质量。
  - **链接**：[Farama-Foundation/PettingZoo PR #1390](https://github.com/Farama-Foundation/PettingZoo/pull/1390)

- 🛠 **[PR #1380] 为 Hanabi 环境添加 Pygame 渲染** (作者: RewardGuard)
  - **进展**：此前 Hanabi 环境仅支持基于 OpenSpiel 的控制台文本输出。该 PR 成功引入定制的像素艺术纸牌，并通过解析 OpenSpiel 状态字符串，利用 Pygame 绘制烟花堆和玩家手牌。
  - **链接**：[Farama-Foundation/PettingZoo PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380)

- 🛠 **[PR #1384] 提交演化版 KAZ 策略演示** (作者: tzh476)
  - **进展**：响应 Issue #1381 的悬赏，提供了一套轻量级 KAZ 向量策略脚本，可通过小规模参数搜索评估并渲染 GIF，已更新至 SB3 教程页面。
  - **链接**：[Farama-Foundation/PettingZoo PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384)

- 🛠 **[PR #1391] 修复复合观测空间的 API 测试误报** (作者: teddytennant)
  - **进展**：修复了 `api_test.py` 在遇到合法的非 `Box`/`Discrete` 观测空间（如 `Dict`, `Tuple`, `MultiDiscrete`）时，错误抛出 "Observation is not a NumPy array" 警告的问题。
  - **链接**：[Farama-Foundation/PettingZoo PR #1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391)

- 🛠 **[PR #1384] 修复 Hanabi 观测空间布局文档** (作者: mfornet)
  - **进展**：修复了 Issue #1301 中的文档缺陷，由于逻辑复杂，作者引入了 Codex 和 Claude AI 工具进行交叉辅助 Review。
  - **链接**：[Farama-Foundation/PettingZoo PR #1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368)

- 🛠 **[PR #1389] 更新 pyproject.toml 依赖 [已关闭]** (作者: Trenza1ore)
  - **进展**：跟进 Gymnasium 的依赖策略更新（为 Python 3.10-3.13 使用预编译的 `box2d`，3.14 使用 `box2d-py` 源码分发包）。
  - **链接**：[Farama-Foundation/PettingZoo PR #1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389)

## 5. 为什么继续关注该项目？
作为 Farama-Foundation 的核心项目，PettingZoo 正在经历一轮关键的**底层重构与体验升级**：
1. **API 标准统一**：对环境注册 ID (`-v[version]`) 的严格规范化、以及消除复合观测空间的 API 警告，表明项目正在收紧与 Gymnasium 的底层兼容标准，降低多智能体算法库的接入摩擦。
2. **开发体验提升**：原生 `RecordVideo` 包装器的引入，填补了多智能体环境中可视化评估链路的空白。
3. **生态自净化**：通过剔除低活跃环境（TicTacToe 等），项目正在减轻维护负担，集中资源于更核心、复杂的多智能体测试基准（如 Hanabi 渲染的深度改造）。对于追踪 MARL 标准接口演进的开发者和研究员而言，这些底层改动至关重要。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>