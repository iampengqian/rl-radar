# RL 开源生态日报 2026-06-17

> 生成时间: 2026-06-16 22:35 UTC | 覆盖项目: 15 个

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

当前的强化学习（RL）开源生态正在经历一场显著的范式跃迁：从传统的单轮偏好对齐（如基础 PPO/DPO），大规模向 **基于可验证奖励的强化学习（RLVR）** 和 **多轮智能体强化学习** 演进。
在这一进程中，大模型训练框架（如 verl、TRL、AReaL、slime）成为了生态中最活跃的毛细血管，它们正全力攻坚千亿级参数、混合专家架构在异步分布式训练中的显存与通信天花板。同时，国产异构算力（昇腾 NPU、寒武纪 MLU）的全面渗透，正倒逼底层基础设施进行深度重构。而传统的经典 RL 基础库（如 SB3、Gymnasium）则平稳迈入成熟期，其生态动态聚焦于工业级安全部署与精细化环境控制。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 50 | 36 | 0 | 异构算力（昇腾）适配大爆发，Agentic RL 与 MoE 工程化加速 |
| **TRL** | 13 | 51 | 0 | 专注攻克多进程异步 GRPO 架构，全面拥抱 FSDP2 与 MoE 负载均衡 |
| **ROCK** | 8 | 13 | 1 | 剑指生产级集群调度，推出 K8s CPU 超卖与大 Payload 通信优化 |
| **AReaL** | 7 | 12 | 0 | 高频迭代前沿算法（CISPO/ScaleRL），探索 Diffusion RL 跨界外溢 |
| **slime** | 4 | 11 | 0 | 死磕跨集群权重同步瓶颈，深度重构 Agent 多轮轨迹管理 |
| **ROLL** | 0 | 2 | 0 | OSDI'26 顶会背书，稳步推进 Megatron 与昇腾 NPU 底层对接 |
| **Open Instruct** | 0 | 1 | 0 | 攻坚 32B 超大模型在 OLMo-core (FSDP) 下的 GRPO 原生适配 |
| **OpenRLHF** | 0 | 1 | 0 | 持续将学术界新型偏好对齐算法（如 REBEL）沉淀为工业级基建 |
| **rl_games** | 0 | 1 | 0 | 关注大规模仿真环境中的 Checkpoint 元数据透传与生命周期管理 |
| **SB3** | 2 | 0 | 0 | 探索 RL 策略与机器人安全边界的 DSL 集成（URML），迈向安全工程 |
| **Gymnasium** | 1 | 0 | 0 | 提议开放底层物理动力学参数，迎合 Sim-to-Real 泛化研究需求 |
| **CleanRL / Tianshou 等** | 0 | 0 | 0 | 底层架构极度稳定，无实质性代码活动 |

## 共同关注的研究与工程方向

**研究侧信号**
1. **损失函数的去偏与梯度裁剪修正**：针对传统 PPO/GRPO 在 token 级别的长度偏差和裁剪导致梯度消失的问题，各大框架正迅速吸收并落地前沿成果，如 CISPO（MiniMax-M1）、DAPO、Dr.GRPO 及 ScaleRL 提出的多级可配置损失聚合方案。
2. **Agentic RL 与多轮工具调用的常态化**：基于环境的交互式强化学习成为标配，研究和工程重心正在解决多轮对话中连续 Token 机制的痛点，并完善 SWE-bench 等复杂代码智能体任务的 RL 评测闭环。
3. **RL 范式的外溢**：AReaL 实验性地引入了基于扩散模型（Diffusion Model）的 RL 后训练，标志着大模型 RL 技术正从纯文本 LLM 向多模态及非自回归架构外溢。

**工程/基础设施侧信号**
1. **异步架构与极尽算力压榨**：为了打破生成与训练的串行瓶颈，基于独立进程的异步 Rollout（如 TRL 移除 GIL 锁限制）、轨迹陈旧度控制，以及跨集群的磁盘级增量权重同步成为顶级项目的核心发力点。
2. **超大规模 MoE 训练的显存突围**：面对百/千亿参数模型，**Padding-free 紧凑序列拼接**、MoE 专家级流式权重同步、以及推理端的前缀树去重加速（如 MAGI Attention）正成为破局显存天花板的标配组合拳。
3. **异构算力与分布式调度管控**：摆脱对单一算力的强依赖已成为行业共识。从代码底座解耦昇腾 NPU/寒武纪 MLU 补丁，到 ROCK 支持生产级的 K8s CPU 超卖，工业界正构建高性价比、高吞吐的自主可控 RL 基建。

## 差异化定位分析

- **大模型 RL 训练的“全能型基建”**：**verl** 与 **TRL** 目前在热度和广度上领跑。verl 凭借对国产异构算力（昇腾/寒武纪）的极致包容和复杂 Agentic 场景的工程化落地，成为国内做大模型 RL 的首选；而 TRL 则依托 HuggingFace 生态，在原生 FSDP2、去除 GIL 锁的多进程并发上做透了底层优化。
- **前沿算法与特定范式的“高精尖尖刀”**：**AReaL** 和 **slime** 表现出了极强的学术敏锐度与系统级攻坚能力。AReaL 侧重于将最新论文（如 CISPO）极速代码化，并探索跨界（Diffusion RL）；slime 则死磕超大规模分布式跨域训练和外部弹性推理集群的接入。
- **生产级集群编排与安全部署**：**ROCK** 专注于解决分布式集群的算力超卖、大 payload 传输和凭证管控，填补了 RL 在云原生和企业级生产环境部署的空白；**SB3** 作为传统 RL 库，其生态焦点已转向机器人安全边界的声明（URML）与工程溯源。

## 社区热度与成熟度

当前社区热度呈现**高度分化**的态势。以 verl（50 Issues/36 PRs）和 TRL（51 PRs）为代表的大模型后训练生态正处于**爆发式增长期**，大量开发者的痛点集中在多卡分布式部署的 OOM 报错、vLLM 断连以及新手配置指引上，这说明框架尚在高速迭代填补工程留坑的阶段。
反观 Gymnasium、CleanRL、Tianshou 等传统 RL 基准库，已进入**极度成熟的静默期**，无关键代码提交。它们的核心价值已转变为提供坚如磐石的标准化 API、高可塑物理环境以及高可信的复现基线，其动态主要围绕学术研究的精细化需求（如 Domain Randomization）。

## 值得关注的趋势信号

1. **“去英伟达化”算力底座重构**：异构算力适配不再是“Demo 展示”，而是刚需。verl、ROLL 等在昇腾 NPU 适配上的密集动作（如修复硬编码 NPU ID、适配 MindSpeed）预示着构建独立于 NVIDIA 生态的 RL 算力池将成为未来一段时间的核心基建诉求。
2. **分离式与全异步通信范式的确立**：以 TRL 的 AsyncGRPO 和 verl 的独立 Model Engine Server 为代表，将推理生成、参数更新和奖励打分彻底在时间线和进程空间上解耦，结合轨迹陈旧度控制，全异步架构正在接管大规模 RL 训练。
3. **小众前沿的大规模工程化**：投机解码（EAGLE3）和确定性比特级推理等原先主要用于纯大模型推理加速的技术，正被无缝集成至 RL 的 Rollout 环节中。这种将任何微小的系统级优化迅速放大并落地为标配的“吸尘器”效应，是大模型 RL 框架走向成熟的标志。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 开源生态日报：ROLL (alibaba/ROLL)**
**日期**: 2026-06-17

---

### 1. 今日速览
过去 24 小时内，ROLL 仓库共有 2 条 PR 更新，无新增 Issue 或版本发布。整体活动主要集中在底层异构算力（华为昇腾 NPU）的深度适配与学术成果的同步上。

### 2. 版本发布
*   **今日无新版本发布。**

### 3. 重点 Issues
*   **今日无新增或更新的 Issues。**

### 4. 关键 PR 进展
今日的 PR 动态反映了 ROLL 在多模态算力生态和学术影响力上的持续投入：

*   **[CLOSED] #461 Add news update for OSDI’26 RollArt paper release**
    *   **作者**: gaow0007 (更新于 2026-06-16)
    *   **摘要**: 该 PR 已合并/关闭。其核心目的是将 ROLL 团队发表在系统领域顶会 OSDI'26 上的最新论文（RollArt）相关新闻更新至仓库主页。这标志着 ROLL 的底层系统架构设计获得了学术界的高度认可。
    *   **链接**: [alibaba/ROLL PR #461](https://github.com/alibaba/ROLL/pull/461)

*   **[OPEN] #456 [feat] Support ascend mindspeed&megatron and add CI tests**
    *   **作者**: shun001 (创建于 2026-06-04，更新于 2026-06-16)
    *   **摘要**: 这是一项重大的底层特性扩展。该 PR 为 ROLL 引入了对**华为昇腾 NPU (基于 MindSpeed)** 的支持，包含平台检测修复、Megatron 优化器及 offload 的兼容性更新，并针对 NPU 特性处理了 attention mask。此外，该 PR 还添加了 Ascend MindSpeed 的 CI 测试流程以及 Qwen3 DPO Megatron 的示例配置。
    *   **链接**: [alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **顶会级别的系统架构背书**：随着 RollArt 论文入选 OSDI'26（顶会），证明 ROLL 在大规模强化学习底层的训练效率、容错机制或资源调度上具备极强的学术与工程双重价值，值得深度剖析其源码设计。
2.  **打破 NVIDIA 垄断的异构算力兼容**：PR #456 显示出 ROLL 正在积极拥抱国产算力（昇腾 NPU）生态。在大模型 RLHF/RLAIF 训练对算力需求极度饥渴的当下，支持 MindSpeed+Megatron 的跨芯片架构（GPU+NPU），使其成为构建高性价比、自主可控 RL 训练基建的核心候选项目。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 强化学习生态日报 (2026-06-17)

**数据统计**：过去 24 小时 PR 更新 13 条 | Issues 更新 8 条 | 新版本发布 1 个

---

### 1. 今日速览
ROCK 项目今日发布了 **v1.9.1** 版本，核心改进集中在 K8s 环境下的计算资源超卖能力。活动方面，开发团队集中修复了 Model Service 中的大 payload 通信瓶颈、Sandbox 日志清理竞态隐患，并新增了 ACR 凭证与全局配置下发的 Admin API。此外，针对 SDK 跨进程生命周期管理、CLI 数据集分页查询的底层重构也取得了实质性进展。

---

### 2. 版本发布
*   **v1.9.1** ([Full Changelog](https://github.com/alibaba/ROCK/compare/v1.9.0...v1.9.1))
    *   **核心更新**：新增对 K8s (fiber / BatchSandbox) 部署路径的 CPU 超卖支持，通过新增的 `limit_cpus` 参数解耦了调度器预留量与 cgroup 硬限制。

---

### 3. 重点 Issues
*   **[Bug] anti-call-llm 大 payload 通信截断** ([#1115](https://github.com/alibaba/ROCK/issues/1115))
    *   在 pull 模式下，当 LLM 生成的大型 tool call 响应（>100KB）作为命令行参数传递时，触发系统 `Argument list too long` 错误。
*   **[Bug] 沙箱日志目录被竞态删除** ([#1107](https://github.com/alibaba/ROCK/issues/1107))
    *   生产环境严重故障：`FileCleanupTask` 在清理瞬时变空的目录时发生竞态，导致存活的 Sandbox 日志目录被误删。
*   **[Feature] K8s BatchSandbox CPU 超卖支持** ([#1113](https://github.com/alibaba/ROCK/issues/1113))
    *   现有的 K8s 调度中 CPU request 与 limit 强制相等，限制了容器的突发计算能力，请求引入类似 Ray 路径的超卖机制。
*   **[Feature] 跨进程沙箱生命周期管理** ([#1088](https://github.com/alibaba/ROCK/issues/1088))
    *   诉求在 Python SDK 中封装跨进程的 Sandbox 管理机制，以支持更复杂的 RL 任务编排。

---

### 4. 关键 PR 进展
*   **修复大 Payload 传输瓶颈** ([PR #1116](https://github.com/alibaba/ROCK/pull/1116) / [PR #1120](https://github.com/alibaba/ROCK/pull/1120))
    *   针对_issue #1115_，Model Service 弃用命令行参数传递，改为基于文件的传输机制，解决超大 LLM 响应导致的崩溃问题。
*   **修复文件清理竞态条件** ([PR #1108](https://github.com/alibaba/ROCK/pull/1108))
    *   针对生产级故障 _issue #1107_，为 `FileCleanupTask` 的空目录删除逻辑增加 `-mmin +max_age_mins` 守卫，防止误删活跃日志目录。
*   **新增 Admin API：ACR 凭证下发** ([PR #1112](https://github.com/alibaba/ROCK/pull/1112))
    *   新增 `GET /acr/credentials` 端点，支持向 SDK/CLI 分发阿里云容器镜像服务（ACR）的短期 Push/Pull 临时凭证。
*   **新增 Admin API：全局配置暴露** ([PR #1111](https://github.com/alibaba/ROCK/pull/1111))
    *   新增 `GET /server/config` 端口，统一向客户端暴露镜像仓库信息、Builder 镜像等平台级基础配置。
*   **SDK 支持跨进程沙箱生命周期** ([PR #1091](https://github.com/alibaba/ROCK/pull/1091))
    *   引入 `Sandbox.attach()` 接口，实现跨进程重组和管理沙箱实例。
*   **CLI 数据集查询性能优化** ([PR #1105](https://github.com/alibaba/ROCK/pull/1105))
    *   对 CLI 命令模块进行面向对象重构，并为 `datasets tasks` 命令添加了服务端的 `--filter` / `--offset` / `--limit` 分页支持。

---

### 5. 为什么在当前 RL 生态值得关注？
在大规模 LLM 强化学习场景中，算力成本和分布式编排是核心痛点。ROCK 最近的迭代展现了解决这些痛点的前瞻性：
1. **极致的资源弹性**：v1.9.1 引入的 K8s CPU 超卖机制，允许 RL 训练任务在集群层面共享空闲算力，极大提高了昂贵 GPU/CPU 节点的整体吞吐率。
2. **长上下文工具调用的工程化闭环**：对大 LLM Payload 传输（>100KB）的修复，标志着 ROCK 在支持复杂的 RL Agent 环境（如长代码生成、大规模文件读写）方面变得更加鲁棒。
3. **企业级生产可用性**：从临时的 ACR 临时凭证下发到致命的沙箱日志清理竞态修复，ROCK 正在迅速补齐生产级分布式集群安全管控与高可用性的拼图。它是目前开源生态中少有的兼顾底层调度与上层 Agent 执行环境的硬核基础设施。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 强化学习开源生态日报摘要（2026-06-17）：

### 1. 今日速览
- **Issues 动态**：更新 4 条，其中新增 1 个核心 Bug 反馈（#2091），1 个关于新版本依赖的提问被关闭。
- **PR 动态**：更新 11 条，涵盖权重同步机制、异步轨迹管理、前沿 RL 算法适配及 CI 基础设施建设。无新增合并状态异常。
- **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
无。当前社区主要围绕 `v0.3.0` 版本进行问题排查与功能迭代。

### 3. 重点 Issues
- **[[Bug] #2091 slime-v0.3.0 跑 Qwen3.6 35B A3B 时第二次 rollout 输出乱码**](https://github.com/THUDM/slime/issues/2091)
  - **摘要**：开发者反馈在 v0.3.0 版本及配套镜像（`sglang:v0.5.12.post1-cu129`）下运行 Qwen-3.6 35B A3B 模型时，第二次 rollout 阶段出现严重乱码。回退至 v0.2.4 及配套旧版 sglang 镜像后表现正常。该问题直指最新版 Rollout 引擎兼容性或权重更新机制的潜在缺陷。
- **[[Question] #2073 请求协助支持 Qwen3.5 VLM 的 megatron.bridge 插件**](https://github.com/THUDM/slime/issues/2073)
  - **摘要**：社区开发者在集成 Qwen3.5 VLM 时发现缺失 megatron.bridge 插件。目前独立尝试修改但进度卡壳（约完成 70%），正向社区寻求协同开发帮助。
- **[[RFC] #1971 提议将 TransferQueue 作为可选的训练数据面集成至 slime**](https://github.com/THUDM/slime/issues/1971)
  - **摘要**：提出通过引入 TransferQueue 优化 rollout-to-training 的数据传输架构，解耦数据流转与组件消耗，提升大规模分布式训练下的数据平面稳定性。
- **[[Question] #2008 slime 是否支持 PyTorch 2.8？(已关闭)**](https://github.com/THUDM/slime/issues/2008)
  - **摘要**：用户反馈 v0.3.0 强依赖极新的 PyTorch 2.11，导致工程环境冲突。该问题已被维护者回复并关闭。

### 4. 关键 PR 进展
今日 PR 进展主要聚焦于 **大模型异步/跨域训练工程优化** 与 **前沿 RL 算法对齐**：

**基础设施与算法对齐：**
- **[#2090] 添加 `--loss-aggregation` 支持 ScaleRL 的四种 pg_loss 聚合模式**](https://github.com/THUDM/slime/pull/2090)：适配近期热门的 DAPO（按 prompt 组平均）、Dr.GRPO（常数除子）等变体算法，解决 token 级别长度偏差问题。（注：[#2060](https://github.com/THUDM/slime/pull/2060) 为其前置探索，今日已关闭并被该 PR 取代）。
- **[#2079] coding_agent_rl: 添加 SWE-bench harness 评估路径**](https://github.com/THUDM/slime/pull/2079)：支持直接使用官方 SWE-bench Verified 评测集进行打分，完善了 Agent RL 的评测闭环。
- **[#2005] 重构 coding-agent RL：Turn-node TrajectoryManager + 插件化 harness 层**](https://github.com/THUDM/slime/pull/2005)：对现有 Agent RL 子系统进行了大规模底层重构（+4.9k/-3.3k），增强了多轮对话轨迹管理能力。

**系统与工程性能优化：**
- **[#2089] Disk-level delta weight sync（磁盘级增量权重同步）**](https://github.com/THUDM/slime/pull/2089)：针对跨集群非并置训练场景，仅同步 checkpoint 的变动字节，极大降低了网络与 I/O 开销。
- **[#2071] 支持外部弹性推理集群的 Rollout 端点**](https://github.com/THUDM/slime/pull/2071)：打破 slime 内部独占推理后端的假设，允许通过外部端点接入弹性、托管的推理舰队。
- **[#2092] 修复 fully-async 模式下 ABORTED 分组重入队列的逻辑**](https://github.com/THUDM/slime/pull/2092)：确保在异步 rollout 且关闭 `partial_rollout` 时，中断的样本组不被错误重入数据缓冲区，维持了采样契约的一致性。

*（此外，维护者 zhuzilin 提交了多个 CI 构建与 Badge 修复 PR：[#2088](https://github.com/THUDM/slime/pull/2088), [#2087](https://github.com/THUDM/slime/pull/2087), [#2086](https://github.com/THUDM/slime/pull/2086) 等。）*

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟 SOTA 算法迭代**：从今日的 PR 可以看出，slime 能够极快地将学界和业界验证有效的改进（如 Dr.GRPO 的去偏归一化、ScaleRL 的多模式聚合）沉淀为工程级的一等参数，降低了研究者复现前沿策略的门槛。
2. **死磕超大规模 RLHF 的工程痛点**：增量权重同步（Delta Weight Sync）和外部弹性 Rollout 集群的支持，表明 slime 正在实打实地解决万卡级别、跨集群 LLM 训练中“网络传输”与“权重更新延迟”的真实工程瓶颈。
3. **深度布局 Agent RL**：通过引入 SWE-bench 官方评测体系及重构多轮对话轨迹管理，项目正从传统的“提示词-回复”单轮强化学习，向复杂的“工具调用-环境交互”多轮 Agent RL 场景拓展，紧跟 LLM 发展的技术范式。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这是一份基于 GitHub 数据为您生成的 AReaL 项目 RL 日报摘要（2026-06-17）。

### 1. 今日速览
- **数据概览**：过去 24 小时内，AReaL 项目有 **7 个 Issue** 更新，**12 个 PR** 更新，无新版本发布。
- **核心动态**：今日活跃度极高，主要贡献者（特别是 `EazyReal`）集中提交了一系列关于 PPO/GRPO 底层算法优化的高质量 PR，包括引入 CISPO 损失函数、可配置损失聚合以及修复分组归一化 bug。此外，项目生态迎来扩展，新增了对 GLM-5/DeepSeek-V3 模型的支持，并首次尝试将 RL 后训练引入扩散模型领域。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
今日的 Issue 集中在算法机制改进、前沿论文复现与 Bug 修复上：

- **[Roadmap] 2026 Q2 Milestones** ([#1302](https://github.com/areal-project/AReaL/issues/1302))
  项目 2026 年第二季度（截至 7 月 31 日）的路线图追踪，指导贡献者参与核心模块开发。
- **[Feature] min_valid_group_size: 丢弃有效样本过少的 rollout 组** ([#1419](https://github.com/areal-project/AReaL/issues/1419))
  提出在 `group_size > 1` 时，自动丢弃未充满或有效样本不足的 rollout 组，提升数据质量。
- **[Feature] CISPO loss surrogate (MiniMax-M1 / ScaleRL)** ([#1421](https://github.com/areal-project/AReaL/issues/1421))
  建议引入 MiniMax-M1 提出的 CISPO 损失函数，解决 PPO/GRPO 裁剪导致被裁剪 token 梯度消失的问题。
- **[Feature] 可配置损失聚合级别 (token / seq / prompt mean)** ([#1423](https://github.com/areal-project/AReaL/issues/1423))
  提出打破硬编码的 `token_mean`，允许灵活配置策略梯度损失聚合方式，平滑长文本对训练的影响。
- **[BUG] HF chat template 导致 tool_call 参数渲染错误** ([#1420](https://github.com/areal-project/AReaL/issues/1420))
  指出 OpenAI 标准的 JSON string 与 HuggingFace 模板期望的 mapping 类型不一致，导致多轮 rollout 与训练时 token 序列错位。
- **[Question] 关于 SWE (智能体软件工程) 任务的训练示例** ([#1394](https://github.com/areal-project/AReaL/issues/1394))
  社区开发者寻求使用 GRPO 训练多轮 SWE-bench / SWE-Gym 智能体任务的实践方案。

### 4. 关键 PR 进展
今日的 PR 进展十分硬核，涵盖底层算法修正、系统架构重构与前沿模型支持：

**🧠 算法与核心训练逻辑**
- **feat(ppo): 添加 CISPO advantage estimator (MiniMax-M1)** ([#1412](https://github.com/areal-project/AReaL/pull/1412))
  实现了 MiniMax-M1 的 CISPO 机制，确保被 clip 的 token 依然能保留梯度，避免训练崩溃。
- **feat(ppo): 可配置损失聚合 (ScaleRL §3.2)** ([#1417](https://github.com/areal-project/AReaL/pull/1417))
  与 Issue #1423 对应，允许在 token、序列、prompt 级别进行损失聚合。
- **refactor(ppo): 从 gconfig.n_samples 推导 group_size** ([#1413](https://github.com/areal-project/AReaL/pull/1413)) & **fix(ppo): 按实际大小对部分组进行归一化** ([#1415](https://github.com/areal-project/AReaL/pull/1415))
  清理了配置层面的冗余，并修复了 GRPO/RLOO 中分组 Reward/Advantage 归一化时，因步长写死导致部分组计算错误的 Bug。
- **fix: 多轮对话按样本隔离的版本追踪** ([#1408](https://github.com/areal-project/AReaL/pull/1408))
  修复了多轮对话场景下版本追踪错误的问题，引入 RLE 编码机制优化多轮轨迹的 Dump。

**⚙️ 系统基础设施与生态扩展**
- **feat(mcore): 增加 GLM-5 / DeepSeek-V3 模型支持** ([#1373](https://github.com/areal-project/AReaL/pull/1373))
  补齐了 AReaL 在 mbridge 和 megatron-bridge 双路径下对 GLM-5.1 与 DeepSeek-V3 架构的支持。
- **feat(experimental): Diffusion RL 后训练 PoC (SD1.5 + LoRA + REINFORCE)** ([#1410](https://github.com/areal-project/AReaL/pull/1410))
  这是一个极具探索性的尝试，首次在 AReaL 内引入扩散模型 RL 后训练的 Phase 1 概念验证。
- **feat(megatron): MTP 头设为可选以支持 Qwen3.6 MoE** ([#1403](https://github.com/areal-project/AReaL/pull/1403))
  适配 Qwen3.6 MoE 架构，在 RL 阶段默认丢弃 MTP 头。
- **fix(openai): 将 tool-call 参数作为 mapping 渲染** ([#1411](https://github.com/areal-project/AReaL/pull/1411))
  修复上述 Issue #1420 中的渲染漏洞，保障智能体训练稳定性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **紧跟前沿算法演进**：项目没有停留在基础的 PPO/GRPO 实现上，而是迅速吸收工业界最新成果（如 MiniMax-M1 的 CISPO loss），解决 token 裁剪导致梯度消失的痛点，在算法迭代上保持敏感度。
2. **攻克多轮智能体训练瓶颈**：大规模 RLHF/Agent 训练存在大量工程地雷。AReaL 的最新 PR 正在逐一拆解这些难题：从修复 HF chat template 导致的多轮 token 错位（#1420），到精细化处理多轮轨迹的版本追踪（#1408），为 SWE-bench 等 Agent 任务铺平了道路。
3. **向多模态/非自回归模型外溢**：实验性引入 **Diffusion RL 后训练**（#1410）标志着 AReaL 的野心不局限于 LLM 文本生成。能够统一处理 LLM（GLM-5、DeepSeek-V3）与 Diffusion Model 的后训练，使其在下一阶段的多模态 RL 竞争中具备极大的生态扩展潜力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 2026-06-17 Hugging Face TRL 项目的强化学习（RL）日报摘要。

### 1. 今日速览
- **Issues 动态**：过去 24 小时内共有 13 条 Issue 更新（主要集中在 GRPO 训练器 bug 修复与分布式训练环境配置）。
- **PR 进展**：共有 51 条 PR 更新。开发活动高度聚焦于 GRPO/AsyncGRPO 的核心架构优化（如异步生成、Padding-free）、混合专家负载支持以及环境交互训练。
- **版本发布**：过去 24 小时无新版本 Release。

### 2. 版本发布
无。目前社区提交的 PR 主要集合并停留在 `main` 分支，预计在不久的将来会进行版本打包。

### 3. 重点 Issues
今日的 Issue 反映了社区在大规模部署 RLVR（强化学习与可验证奖励）时的核心痛点：

*   **GRPO 结合 vLLM 的断连问题**：[#3347](https://github.com/huggingface/trl/issues/3347) 报告了在使用 vLLM 进行异步生成时，随机出现 `http.client.RemoteDisconnected` 错误。这是多卡分离式训练（部分 GPU 跑 vLLM，部分跑训练）中常见的进程通信/超时问题。
*   **DAPO 损失函数的梯度累积归一化缺陷**：[#5619](https://github.com/huggingface/trl/issues/5619) 指出当前 DAPO loss 没有除以 `gradient_accumulation_steps`，可能导致在特定多卡配置下梯度更新尺度异常。
*   **FSDP2 环境下的性能瓶颈**：由 Hugging Face 开发者提出 [#6076](https://github.com/huggingface/trl/issues/6076)，指出在使用 `chunked_nll`（默认交叉熵实现）结合 FSDP2 时，会在反向传播期间触发不必要的 `lm_head.weight` 全局聚合，大幅拖慢训练速度。
*   **GRPO 自适应熵控制需求**：[#3320](https://github.com/huggingface/trl/issues/3320) 呼吁引入类似 Skywork OR1 模型的动态熵正则化机制，以稳定探索过程中的策略熵。

### 4. 关键 PR 进展
今日的 PR 展现了 TRL 向高并发、多模态及 Agentic RL 扩展的明确技术路线：

*   **GRPO 核心架构升级**
    *   **多进程异步 Rollout**：[PR #5749](https://github.com/huggingface/trl/pull/5749) 将异步 rollout worker 移至独立子进程，彻底解决了生成/打分循环与 autograd 引擎争夺 GIL（全局解释器锁）的性能瓶颈。
    *   **原生 Padding-free 训练**：[PR #5854](https://github.com/huggingface/trl/pull/5854) 在 `AsyncGRPOTrainer` 中全面启用无 Padding 模式，将 `(B, max_len)` 填充前向传播替换为紧凑的序列拼接，极大降低了无效计算开销。
*   **支持 MoE（混合专家）架构**：[PR #6083](https://github.com/huggingface/trl/pull/6083) 将 MoE 负载均衡损失成功移植到 `GRPOTrainer`、`RLOOTrainer` 等强化学习训练器中，扫清了使用 TRL 训练 Qwen-MoE 等架构的障碍。
*   **Agentic 环境集成**：[PR #6018](https://github.com/huggingface/trl/pull/6018) 引入了实验性的 Harbor 框架集成；[PR #6002](https://github.com/huggingface/trl/pull/6002) 支持基于数据集粒度的多环境动态选择，标志着 TRL 正在向基于工具调用的 Agent 强化学习迈进。
*   **内置可验证奖励函数扩展**：[PR #6058](https://github.com/huggingface/trl/pull/6058) 新增了基于规则的重复惩罚奖励（`get_repetition_penalty_reward`），丰富了 RLVR 开箱即用的奖励矩阵。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 正在快速从“单一的偏好微调库”演化为**大模型时代的一站式强化学习底层基建**。
当前社区和开发者的重心已经明确从传统的 PPO/DPO，大规模向 **GRPO 及其异步变体** 倾斜。通过近期的一系列 PR 可以看出，TRL 团队正在直接解决工业界最棘手的工程问题：**解决 Python GIL 锁限制、无缝集成 vLLM 加速、适配 PyTorch FSDP2 分布式策略、以及原生支持 MoE 模型的负载均衡**。
此外，TRL 正在积极拥抱 **Agentic RL**（提供多环境动态交互支持与外部奖励服务器集成）。对于需要大规模、高并发训练前沿大模型的研究者和工程师而言，TRL 每日提交的底层优化极具跟踪与生产应用价值。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-06-17)

## 1. 今日速览
过去 24 小时内，[OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) 仓库动态趋于平缓：无新增 Issue，无新版本发布。唯一的代码库更新集中在已有 PR 的推进上。项目当前处于稳定迭代与代码合并审查阶段。

## 2. 版本发布
- **无新版本发布**。过去 24 小时内未产生新的 Release。

## 3. 重点 Issues
- **无活跃 Issue**。过去 24 小时内未产生新的 Issue 或已有 Issue 的更新。

## 4. 关键 PR 进展
- **[OPEN] PR #1247: Added REBEL-inspired offline reward-gap regression loss to DPO trainer**
  - **作者**: LeoPhilly
  - **链接**: [OpenRLHF/OpenRLHF PR #1247](https://github.com/OpenRLHF/OpenRLHF/pull/1247)
  - **更新时间**: 2026-06-16
  - **技术摘要**: 该 PR 为现有的 DPO (Direct Preference Optimization) 训练管线引入了基于 [REBEL 论文](https://arxiv.org/abs/2404.16767) 的离线奖励间距回归损失（reward-gap regression loss）。此功能作为可选模块，通过 `--model.rebel_enable` 标志启用，并可通过 `--model.eta` 参数进行调节。该实现旨在将相对奖励回归机制与现有的 DPO pipeline 无缝结合，是对齐算法层面上的一次重要扩展。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
[OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) 作为大模型对齐与强化学习生态的核心基础设施，其动态直接反映了当前 RLHF/RM 算法的前沿演进趋势。
从今日推进的 [PR #1247](https://github.com/OpenRLHF/OpenRLHF/pull/1247) 可以看出，项目正持续将学术界（如 ICLR 2024 的 REBEL 算法）验证有效的新型偏好对齐方法集成到工业级训练框架中。这种将前沿相对奖励回归理论落地为可配置、开箱即用代码（如 `--model.rebel_enable`）的做法，极大降低了 AI 开发者测试和复现复杂 RL 对齐策略的门槛，是追踪大模型对齐技术演进的绝佳风向标。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026 年 6 月 17 日强化学习（RL）开源生态日报摘要：

# verl 强化学习生态日报 (2026-06-17)

## 1. 今日速览
- **Issue 动态**：过去 24 小时内有 50 条 Issue 更新，社区讨论极其活跃。
- **PR 动态**：过去 24 小时有 36 条 PR 更新，底层优化与新特性开发并行。
- **版本发布**：无新版本发布（当前社区主要聚焦在 `v0.8.x` 的新特性开发与 `v0.7.1` 的稳定性维护）。
- **核心趋势**：**国产算力（昇腾 NPU、寒武纪 MLU）适配迎来爆发**，多位开发者集中反馈 Ascend 相关的显存/OOM 问题及优化诉求；此外，**MoE大模型训练内存瓶颈**与**异步/算子级显存优化**成为技术讨论焦点。

---

## 2. 版本发布
* 本日无新版本 Release。

---

## 3. 重点 Issues

### 🔥 算力适配与显存优化焦点 (Ascend & 硬件配置)
随着 verl 对异构算力支持的深入，大量基于昇腾 NPU (910B/800I A2) 的开发者涌入，集中反馈了单卡/多卡训练时的显存溢出（OOM）与吞吐量问题，并呼吁完善基础文档：
- **[Ascend] FSDP2 多节点训练 OOM**：更新权重时 `state_dict()` 的 all-gather 峰值与 vLLM 权重分配重叠导致 OOM，影响 Qwen3.5-27B 训练。([#6772](https://github.com/verl-project/verl/issues/6772))
- **[Ascend] 硬编码设备 ID 导致报错**：`get_npu_versions()` 函数中 NPU 设备 ID 被硬编码（如指定为 7），导致在不同机器和多卡部署下崩溃。([#6756](https://github.com/verl-project/verl/issues/6756), [#6751](https://github.com/verl-project/verl/issues/6751))
- **新手配置与调优指南诉求**：多名开发者反馈缺乏单卡（如 32GB/61GB 显存）跑通 GRPO/PPO 的最小化配置说明，以及对 `batch_size`、序列长度等参数的调优指引。([#6748](https://github.com/verl-project/verl/issues/6748), [#6760](https://github.com/verl-project/verl/issues/6760), [#6754](https://github.com/verl-project/verl/issues/6754), [#6776](https://github.com/verl-project/verl/issues/6776))

### 🧠 超大模型与 MoE 训练瓶颈
- **MoE 权重同步 OOM**：在进行 Qwen3.5-397B-A17B 等超大 MoE 模型训练时，Megatron-bridge 导出融合专家张量（约 8.6GB）导致 OOM，开发者呼吁支持按专家粒度的流式同步。([#6691](https://github.com/verl-project/verl/issues/6691))
- **框架支持咨询**：确认 verl 是否完全支撑 Qwen3.5-397B 级别的 GRPO 训练。([#6123](https://github.com/verl-project/verl/issues/6123))

### ⚙️ 底层架构与文档
- **HCCL 引擎代码疑问**：开发者发现 Ascend HCCL checkpoint engine 注册名依然为 `"nccl"`，且 `BroadcastOperation` 未使用线程池异步执行，提出底层代码重构疑问。([#6425](https://github.com/verl-project/verl/issues/6425))
- **Ascend 环境安装文档优化**：当前推理与训练后端的安装说明过于平铺，建议提供清晰的“排列组合”矩阵以降低上手门槛。([#6370](https://github.com/verl-project/verl/issues/6370))

---

## 4. 关键 PR 进展

### 🚀 推理与 Rollout 加速
- **投机解码**：支持在 RL rollout 中使用 EAGLE/EAGLE3 推理模型加速 vLLM 生成。([#5925](https://github.com/verl-project/verl/pull/5925))
- **MAGI Attention 集成**：引入前缀树共享前缀去重机制，加速 SFT 和 GRPO 训练。([#6689](https://github.com/verl-project/verl/pull/6689))
- **确定性推理**：为 vLLM rollout 和 Reward Model 增加严格的确定性支持，实现端到端训练的比特级对齐。([#6572](https://github.com/verl-project/verl/pull/6572))

### 🤖 Agentic RL 与算法增强
- **连续 Token AgentLoop**：为单/多轮 AgentLoop 添加连续 Token 机制，并提供了模板安全检查 CLI 工具，显著优化 Agentic RL 的轨迹处理。([#6779](https://github.com/verl-project/verl/pull/6779), [#6722](https://github.com/verl-project/verl/pull/6722), [#6723](https://github.com/verl-project/verl/pull/6723))
- **CPPO 算法实现**：引入 CPPO（累积前缀散度策略优化），打破自回归模型中均匀的 token 级信任域限制。([#6731](https://github.com/verl-project/verl/pull/6731))
- **异步与陈旧度控制**：引入独立计算 `log_probs` 的 Model Engine Server，并在 trainer 中支持轨迹陈旧度控制策略，进一步提升全异步训练效率。([#5990](https://github.com/verl-project/verl/pull/5990), [#6778](https://github.com/verl-project/verl/pull/6778))

### 🛠️ 异构算力与底层架构重构
- **寒武纪 MLU 支持**：正式增加对 Cambricon MLU 后端的支持。([#6327](https://github.com/verl-project/verl/pull/6327))
- **NPU 补丁隔离重构**：重构 `npu_patch.py`，将模型 NPU 补丁改为按需加载并实现故障隔离，修复了“一处报错全盘崩溃”的问题。([#6777](https://github.com/verl-project/verl/pull/6777))
- **LoRA 与 FSDP 深度优化**：实现 FSDP1/2 兼容的按层 summon LoRA 参数机制，扫清了 Qwen3-Omni 等大型多阶段模型的 RL 微调障碍。([#6512](https://github.com/verl-project/verl/pull/6512))

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **Agentic RL 工程化落地领先**：verl 正在迅速将学术界前沿的 Agentic 概念（如 Continuous Token 处理、前缀共享加速 MAGI）进行工程化封装，解决了多轮工具调用 RL 中极其复杂的 Tokenization 痛点。
2. **真正的“硬件无关”泛化能力**：从 GitHub 数据可以看出，verl 正在成为**国内异构算力（昇腾 NPU、寒武纪 MLU）做大模型 RL 训练的首选框架**。开发团队与社区正在高频解决异构算力底层的通信、显存碎皮及算子适配问题（如 PR #6777 的 NPU 重构，Issue #6772 的 FSDP2 异构适配）。
3. **向千亿级 MoE 与全异步架构演进**：项目不仅在维持基础框架的稳定，其 PR 走向（如按专家流式权重同步、异步 Logprob Server 解耦、EAGLE 推理加速）表明 verl 正在攻坚**百/千亿参数 MoE 模型（如 Qwen3.5-397B）在 RL 训练中的显存与通信天花板**，具备极高的技术含金量。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

一份基于 GitHub 实时数据生成的 Open Instruct 强化学习（RL）生态日报摘要。

# Open Instruct 强化学习日报 | 2026-06-17

## 1. 今日速览
项目在过去 24 小时内整体活跃度集中于代码开发底座。无新增 Issues（0 条）和无新版本发布（0 个），但有 1 个重要 PR 更新。今日核心亮点在于社区持续拓宽强化学习的底层算力与框架兼容性，重点发力于 **OLMo-core (FSDP)** 框架对超大参数规模（32B）模型 GRPO 训练的适配。

## 2. 版本发布
本日无新版本发布。

## 3. 重点 Issues
本日无新增或更新的 Issues。目前社区反馈通道保持平稳。

## 4. 关键 PR 进展
今日共有 1 个关键 PR 更新，直指大规模 RL 训练的底层工程实践：

*   **[#1726] [OPEN] Add OLMo-core 32B GRPO launch scripts** (作者: mnoukhov)
    *   **摘要**: 该 PR 为 Open Instruct 引入了运行 32B 参数规模 GRPO 算法的 OLMo-core (基于 FSDP) 启动脚本。核心改动在于将执行入口从原先依赖 DeepSpeed 的 `grpo_fast.py` 切换为 OLMo-core 原生的 `open_instruct/grpo.py` (OLMo-core `Trainer`)。新增了 `scripts/train/olmo3/32b_think_rl_olmocore.sh` 脚本，在保持原有超参一致的前提下，完成了向 OLMo-core 的忠实移植。
    *   **技术价值**: 为 32B 级别的高推理需求模型（Thinking/RL 模型）提供了除 DeepSpeed 之外的 FSDP 原生训练路径，是探索大模型 RL 显存优化与分布式加速的重要基建。
    *   **链接**: [allenai/open-instruct PR #1726](https://github.com/allenai/open-instruct/pull/1726)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Allen AI 旗下的核心开源项目，Open Instruct 不仅是模型微调和对齐的工具集，更是前沿强化学习算法的工程化试验田。今日合并的 32B GRPO OLMo-core 适配 PR 表明：**该项目正在攻坚 30B+ 超大规模参数的 RL 训练瓶颈**。
在当前 RL 生态中，多数开源框架仍局限于 7B/14B 模型的 RL 实验或强依赖单一的 DeepSpeed 生态。Open Instruct 同步推进原生 FSDP 兼容，为开发者应对复杂的多机多卡集群、缓解显存压力和系统级挂起问题提供了高可用、可复现的工业级代码基线，是追踪大模型强化学习工程最佳实践的必看仓库。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 开源生态日报：rl_games (2026-06-17)**

### 1. 今日速览
截至 2026-06-17，[rl_games](https://github.com/Denys88/rl_games) 仓库在过去 24 小时内整体活跃度较为平缓，无新增 Issue 或版本发布。开发端的增量主要集中在功能增强上，合并了 1 个关于 Checkpoint（检查点）元数据扩展的关键 PR。

### 2. 版本发布
- **无新版本发布**。近期仓库无新的 Release 更新，核心框架继续保持稳定状态。

### 3. 重点 Issues
- **过去 24 小时无 Issue 更新**。开发者社区的反馈与 Bug 追踪今日暂无新增动态。

### 4. 关键 PR 进展
- **[#357] [OPEN] feat: optional capability_manifest passthrough in the checkpoint** | 作者: `idoco2003`
  - **链接**: [Denys88/rl_games PR #357](https://github.com/Denys88/rl_games/pull/357)
  - **技术摘要**: 该 PR 实现了 Issue #352 中提议的 `capability_manifest` 透传功能。在模型训练时，若配置文件中声明了 `capability_manifest:` 块，框架会在保存 Checkpoint 时将其原样写入字典，并在加载时完整恢复。
  - **代码覆盖范围**: 修改同时覆盖了 On-policy 算法基类 (`a2c_common.py`，针对 A2C/PPO 智能体) 和 Off-policy 算法 (`sac_agent.py`，针对 SAC 智能体)，保证了不同 RL 算法体系下 Checkpoint 行为的一致性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
[rl_games](https://github.com/Denys88/rl_games) 作为一个以**高吞吐量和极致优化**著称的 RL 基础设施，其在当前生态中的核心价值依然稳固：

1. **顶级的工程实现与算力利用率**：在 Isaac Gym, Isaac Lab 等大规模 GPU 物理仿真环境中，rl_games 的 PPO 实现一直是基准测试的“黄金标准”。其向量化环境的吞吐效率在业界极难被超越。
2. **灵活的架构设计**：如今日 PR #357 所示，项目对 Checkpoint 机制、网络结构配置保持高度解耦。支持自定义元数据透传，使其能更好地与现代复杂的 RL 工作流（如 Agent 生命周期管理、多阶段训练恢复、模型能力版本控制）无缝集成。
3. **生态核心地位**：无论是作为 NVIDIA 硬件仿真闭环的首选算法库，还是作为其他高级 RL 框架（如 SKRL 等）的后端对比基准，rl_games 的底层演进方向直接反映了工业界对大规模强化学习的硬性工程需求。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 生态日报：Gymnasium 项目追踪 (2026-06-17)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库整体活动度较低，无新增代码提交、无新版本发布。唯一的活动来自于一条历史 Issue 的状态更新。这表明项目当前正处于底层架构稳定或主分支维护的静默期。
🔗 仓库链接: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

**2. 版本发布**
今日无新版本发布。当前主分支代码维持现状，未推送新的 Patch 或 Minor 更新。

**3. 重点 Issues**
*   **[Issue #1559] [Proposal] Add fully tunable transition dynamics (including deterministic mode) to LunarLander**
    *   **更新动态:** 该议题于今日有新的回复或状态变动。
    *   **技术摘要:** 作者 `maxanisimov` 提议为经典的 `LunarLander` 环境引入完全可调的过渡动力学（Transition Dynamics）控制参数。目标是让用户能够直接通过 `kwargs` 显式调整或禁用环境的随机性及物理系数，并支持确定性模式。此举旨在降低研究者在进行物理参数消融实验、 Domain Randomization 或对标确定性基线时，自行 Fork 仓库或编写子类的维护成本。
    *   **数据:** 创建于 2026-04-21，1 条评论，0 👍。
    *   **链接:** [Farama-Foundation/Gymnasium Issue #1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559)

**4. 关键 PR 进展**
过去 24 小时内无新增或更新的 Pull Requests。核心代码库今日无合并或审查活动。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
Gymnasium 作为 OpenAI Gym 的官方维护继任者，早已确立了其在 RL 生态中作为 **API 标准定义者** 的地位。今日的 Issue #1559 具有代表性：它反映了当前 RL 社区对环境控制粒度的精细化需求。在现代 RL 研究中（尤其是 Sim-to-Real 和泛化性研究），研究者不再满足于固定的环境物理参数。
Gymnasium 团队对这类底层物理参数和随机性定制提案的接纳与探讨，意味着该项目正在从单纯的“环境提供者”向“高可塑性的实验基础设施”演进。持续关注 Gymnasium 的 Issue 列表，能够直接把握下一代 RL 算法对基准测试环境的核心诉求与标准化演进方向。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

**RL 生态开源日报：Stable Baselines3 (2026-06-17)**

以下是 Stable Baselines3 (SB3) 截至 2026-06-17 的 GitHub 仓库动态及技术分析。

### 1. 今日速览
SB3 仓库在过去 24 小时内代码层面保持沉寂（无新增 PR 或 Release），但生态应用层面的讨论有所活跃。今日共追踪到 2 条 Issue 更新，均由同一作者提出，核心焦点高度一致：**探索如何将训练好的 RL 策略与下游工程的元数据及安全部署规范进行深度绑定。**

### 2. 版本发布
*   **无新版本发布**（核心代码库与文档均处于稳定期）。

### 3. 重点 Issues

*   **#2263 [Feature Request] 在保存的模型 zip 包中携带可选的用户元数据** 
    *   **链接:** [DLR-RM/stable-baselines3 Issue #2263](https://github.com/DLR-RM/stable-baselines3/issues/2263)
    *   **摘要:** 建议在 SB3 模型保存的 `.zip` 格式中，允许用户追加自定义的任意元数据（Metadata）。目前 `.zip` 中仅包含版本号和系统信息，该特性若被采纳，将方便开发者在模型文件内部直接记录超参数、数据集版本或实验备注，极大提升模型追溯能力。

*   **#2259 URML (开源机器人意图语言): 声明训练策略的部署边界 (RFC)** 
    *   **链接:** [DLR-RM/stable-baselines3 Issue #2259](https://github.com/DLR-RM/stable-baselines3/issues/2259)
    *   **摘要:** 此前提出的请求征求意见稿（今日有更新）。引入了 Apache-2.0 协议的 URML 语言，旨在将 SB3 训练好的策略（Policy）与机器人的能力声明及**安全边界**进行对接。目标是从工程系统层面约束 RL 策略的输出，防止在部署环境中出现越界动作。

### 4. 关键 PR 进展
*   **无活跃 PR**（过去 24 小时内无新增、合并或关闭的代码提交）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
当前的 Issue 动态精准反映了强化学习从**“算法研究”**向**“工业级落地”**迈进时的痛点：
1.  **可溯源性与可维护性：** Issue #2263 反映了工业界对 MLOps 的基础需求。当 RL 模型大规模部署时，模型文件不能仅是一个孤立的权重张量，必须携带自身的上下文元数据。
2.  **安全性与工程边界：** Issue #2259 引入的 URML 概念切中了机器人 RL 部署的最大痛点——安全性。RL 算法的黑盒特性和探索机制使得策略输出具有不可预测性，通过外部 DSL（领域特定语言）强制声明部署包络，是当前 Sim-to-Real 和人机交互场景下的前沿工程范式。
SB3 作为最成熟的 RL 基准库之一，其生态讨论已不再局限于“如何提升样本效率”，而是开始引领“如何让 RL 策略变得安全、可审计且可工程化”，这使其成为观测 RL 产业化进程的重要风向标。

</details>