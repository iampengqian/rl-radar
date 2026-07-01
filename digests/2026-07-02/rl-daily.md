# RL 开源生态日报 2026-07-02

> 生成时间: 2026-07-01 22:24 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态正处于**从传统单卡/单机算法验证，向超大规模异构算力集群与复杂智能体（Agentic）交互演进**的关键拐点。以 verl、AReaL、slime 为代表的基础设施级项目，正在填补大语言模型（LLM）对齐（RLHF/GRPO）与底 层千卡集群调度之间的工程鸿沟；而 TRL、Open Instruct 则在加速前沿学术算法的平民化。同时，Gymnasium、PettingZoo 和 torchtune 等底层基石项目，依然在极其严苛地推进物理引擎现代化与边界数据处理的规范与解耦。

## 各项目活跃度对比
今日生态呈现出极高的头部活跃度，核心资源高度集中于 LLM 强化学习训练框架。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 21 | 27 | 0 | 极度活跃。主攻异构算力（昇腾 NPU）接管与底层显存/通信墙优化，架构进入大版本密集合并期。 |
| **ROCK** | 15 | 22 | 1 | 高度活跃。v1.9.6 发布。聚焦系统级 I/O 瓶颈突破与底层容器自愈，强化分布式 RL 的工程效能。 |
| **TRL** | 7 | 24 | 0 | 活跃。核心攻坚异步 GRPO 重构、多环境智能体交互，以及 Liger Kernel 等底层显存优化的深度兼容。 |
| **AReaL** | 3 | 17 | 1 | 重磅更新。正式发布 v2.0.0 引入微服务架构，完成从 RLHF 框架向全栈 Agentic RL 基础设施的演进。 |
| **slime** | 2 | 16 | 0 | 底层突破。死磕跨集群权重同步（引入 Mooncake RDMA、P2P 分片）与前沿硬件（B200/IPv6）兼容。 |
| **torchtune** | 1 | 1 | 0 | 稳定维护。高频高危 Bug 修复（Qwen EOS 掩码逻辑），严守底座模型数据预处理对 RL 采样的底层影响。 |
| **Gymnasium** | 1 | 2 | 0 | 稳定维护。重写基础物理引擎（剥离 Box2D 转 Pymunk），严抓教程规范与环境随机性控制。 |
| **PettingZoo** | 1 | 1 | 0 | 稳定维护。提升代码静态检查严格度，巩固多智能体环境的底层标准 API。 |
| **Open Instruct** | 0 | 2 | 0 | 平稳迭代。探索“RL+在线策略蒸馏”的融合范式，优化超大规模训练集群的容器化基建。 |
| **其他无活动项目** | 0 | 0 | 0 | CleanRL, OpenRLHF, rl_games, ROLL, SB3, Tianshou 近 24 小时无更新动态。 |

## 共同关注的研究与工程方向
今日各项目的动态高度共振，明确分化为学术研究侧与工程基建侧两大主轴：

**研究侧信号：**
1. **在线策略自蒸馏（On-Policy Distillation）融合**：verl（OPSD）与 Open Instruct（OLMo-core OPD）均在推进将冻结的 Teacher 模型评分与 RL 探索结合，以收敛探索空间、稳定策略更新。
2. **复杂多轮智能体环境（Agentic RL）交互**：从 TRL 的多环境异步 GRPO，到 AReaL 与 slime 针对 SWE-bench 工作流的适配，业界正集中攻克 LLM 与外部沙箱长轨迹交互时的状态同步与奖励归一化难题。
3. **算法精细化校准**：如 TRL 引入 Intellect-2 双向裁剪、AReaL 讨论可配置 Loss 聚合级别，社区正对 GRPO/PPO 的底层数学逻辑进行毫米级打磨。

**工程/基础设施侧信号：**
1. **跨域/跨集群的权重同步破局**：解耦训练与推理架构后，全量参数广播成为灾难。verl（BF16 字节级同步）、slime（Mooncake RDMA、P2P Shard 同步）正在多种传输介质上消灭通信墙。
2. **显存与 I/O 极致榨取**：针对长上下文与并发瓶颈，verl 通过 BSHD 填充减少算子重编译，ROCK 全面拥抱 uvloop 突破异步吞吐，AReaL 复用训练 logp 砍掉冗余前向传播。
3. **国产与异构算力的无缝接管**：verl 与 slime 正在密集适配华为昇腾 NPU（Atlas 800T A3）与 NVIDIA 下一代 B200 集群，解决跨芯片架构（Triton 算子、IPv6 网络拓扑）的分布式挂起问题。

## 差异化定位分析
在 LLM/Agent RL 生态中，各核心项目已形成清晰的护城河：
- **verl 是“前沿硬件与算力极限的试验田”**：它在 Ray 架构上展现出了极强的鲁棒性，是目前跨芯片生态（Nvidia + Ascend）支持最深、底层调度（如 Colocate 内存管理）打磨最狠的项目。
- **AReaL 与 slime 主攻“超大规模分布式解耦”**：AReaL v2.0.0 凭借微服务架构成为复杂 Agent 训练的全栈基座；slime 则凭借清华系的底层系统功力，在 RDMA 与 P2P 传输等非共置跨域训练上具备独特优势。
- **TRL 是“学术前沿到工程落地的第一站”**：紧跟最新论文（如 GTPO、双向 Clipping），同时大幅降低科研人员获取异构算力优化（Liger/vLLM）的门槛。
- **ROCK 聚焦“基础设施稳定性与工程效能”**：不纠结上层算法，而是解决 Docker 守护进程自愈、Proxy 网络长连接复用等超大规模无人值守集群的“抗脆弱性”问题。
- **Gymnasium/torchtune 坚守“环境与底座数据规范”**：前者通过 Pymunk 消除 Box2D 跨平台编译痛点，后者死磕 Tokenizer 边界处理（如 EOS 掩码），它们是保证上层 RL 算法 MDP（马尔可夫决策过程）不崩塌的底层血脉。

## 值得关注的趋势信号
1. **架构微服务化与 Rollout 解耦成为常态**：AReaL v2.0.0 的发布标志着 RLHF 框架彻底抛弃单体架构，训练、推理与 Agent 环境的拆分将使得异步资源动态缩放（如 verl PR #6556）成为下一代框架的标配。
2. **“生成停不下来”引发的底层审视**：torchtune 暴露的 Qwen EOS 掩码 Bug 敲响了警钟。底座 SFT 阶段的微小遗漏，会直接导致 RL 阶段强行截断并破坏奖励分布。社区开始更加严苛地审查数据预处理底座。
3. **大集群“抗脆弱性”工程地位跃升**：从 ROCK 的 Docker 自愈、VPC 网络拆分，到 slime 修复 IPv6 导致的进程组挂起，工业界 RL 的重心已从“跑通算法”转移到“如何在千卡规模上连续跑稳一周不掉链子”。
4. **纯 Python 物理引擎的复辟**：Gymnasium 尝试迁移 LunarLander 至 Pymunk，预示着传统强化学习环境正加速拥抱 JAX/Torch 等向量化加速生态，底层依赖 C++ 的历史包袱正在被剥离。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报 - 2026.07.02**

### 1. 今日速览
过去 24 小时内，ROCK 仓库保持高度活跃：共处理 **15** 条 Issues 更新与 **22** 条 PRs 更新，并成功发布了 **1** 个新版本（v1.9.6）。本日的工程重心高度聚焦于**系统级性能调优（asyncio/uvloop 引入）、底层容器健壮性（Docker 守护进程自愈）以及 SDK 数据链路的解耦与增强**。

### 2. 版本发布
*   **[Release] v1.9.6**：本版本正式合入了 SDK 标签注入与 OSS 内网路由特性。
    *   新增将 `sandbox_image` 和 `sandbox_id` 自动注入 Harbor 作业标签的特性，增强了下游任务的可追溯性 ([PR #1183](https://github.com/alibaba/ROCK/pull/1183))。
    *   引入 VPC 内网端点并带有 Fallback 机制的沙箱日志归档路由，大幅降低日志上传延迟并提升稳定性 ([PR #1197](https://github.com/alibaba/ROCK/pull/1197))。
    *   [查看 Release 详情](https://github.com/alibaba/ROCK/releases/tag/v1.9.6)

### 3. 重点 Issues
*   **[性能优化] [#1200](https://github.com/alibaba/ROCK/issues/1200)**：Admin FastAPI 服务目前使用默认 asyncio 和纯 Python HTTP 解析器，高负载下限制了异步吞吐。提出引入 `uvloop/httptools` 并简化请求指标。
*   **[稳定性] [#1189](https://github.com/alibaba/ROCK/issues/1189)**：Worker 节点上的 Docker daemon 可能因 OOM 或崩溃退出且无法自愈，导致该节点上的所有沙箱持续调度失败。
*   **[网络解耦] [#1184](https://github.com/alibaba/ROCK/issues/1184)**：提出拆分 OSS endpoint。由于 SDK 运行在公网，而 Worker 运行在 VPC 内，统一 endpoint 导致跨网络边界访问，需拆分为用户侧 public endpoint 与 worker 侧 private endpoint。
*   **[功能增强] [#1180](https://github.com/alibaba/ROCK/issues/1180)**：提出新增 `JobViewer` SDK。解决沙箱销毁后，开发者无法通过统一接口查询 RL 作业产物、结果、Trial 日志和元数据的痛点。

### 4. 关键 PR 进展
本日有大量针对底层架构与性能的 PR 合入或取得重大进展：

**性能与并发重构**
*   **[PR #1201](https://github.com/alibaba/ROCK/pull/1201)**：全面采用 `uvloop` 和 `httptools` 作为全局事件循环和 HTTP 解析器，重写请求失败指标逻辑，大幅提升 Admin 服务的异步 I/O 吞吐。
*   **[PR #1196](https://github.com/alibaba/ROCK/pull/1196)** (已合入)：重构 Proxy 模块，摒弃了每请求新建 `httpx.AsyncClient` 的做法，改为长连接复用模式，显著降低网络延迟。
*   **[PR #1194](https://github.com/alibaba/ROCK/pull/1194)** (已合入)：通过 App 工厂模式 (`create_app()`) 让 Proxy 支持多 worker uvicorn 部署，解锁多核 CPU 的并发能力。

**底层容错与可观测性**
*   **[PR #1190](https://github.com/alibaba/ROCK/pull/1190)**：引入 `DockerHealthTask` 定时探针，当检测到 Docker daemon 退出时自动执行重启，赋予 Worker 节点自动恢复能力。
*   **[PR #1167](https://github.com/alibaba/ROCK/pull/1167)** (已合入)：修复沙箱重启后状态机展示陈旧阶段（如卡在 `image_pull`）的 Bug，并在状态中记录完整的状态转换历史，极大提升了调试体验。

**SDK 能力扩充**
*   **[PR #1181](https://github.com/alibaba/ROCK/pull/1181)**：实现了前述 Issue 提出的 `JobViewer` 客户端，并在沙箱内写入统一的 `rock_meta.json` 元数据。
*   **[PR #1171](https://github.com/alibaba/ROCK/pull/1171)**：引入纯 DB 支持的 `DatasetMetadataClient`，将元数据管理与 OSS 文件操作彻底解耦，为构建交互式 RL 数据集探索工具打下基础。
*   **[PR #1095](https://github.com/alibaba/ROCK/pull/1095)**：将 Archive 归档生命周期深度集成到沙箱状态机、Operator 和 Reconciler 中（新增 `archiving` / `archived` 状态）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
在当前 RL 训练规模急剧膨胀的背景下，**ROCK 正在解决 RL 基础设施最核心的“工程效能”痛点**：
1.  **突破 I/O 与并发瓶颈**：通过底层全面拥抱 uvloop、长连接复用和多进程并发，ROCK 正在挤压控制平面（Admin/Proxy）的最后一点延迟，这对于需要高频进行 Agent-Env 交互的 RL 场景至关重要。
2.  **提升分布式集群的“抗脆弱性”**：Docker 守护进程自愈机制的引入，表明项目正在为超大规模、无人值守的分布式 RL 训练集群提供更强的基础设施托底保障。
3.  **闭环的数据与作业生命周期管理**：从基于 DB 的 Dataset 管理，到标准化的 `rock_meta.json` 以及 `JobViewer` SDK，ROCK 正在打通 RL 作业“数据读取 -> 提交训练 -> 产物溯源”的闭环，大幅降低研究人员管理分布式实验的心智负担。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**Slime RL 开源生态日报 (2026-07-02)**

以下是针对 github.com/THUDM/slime 过去 24 小时动态的技术摘要：

### 1. 今日速览
过去 24 小时内，Slime 仓库共有 0 个新版本发布，2 条 Issue 更新，以及高达 16 条 PR 更新（包含 6 个新创建的 PR）。从提交密度和技术深度来看，项目正处于高度活跃的底层架构优化期，重点聚焦于**权重同步机制**、**新型硬件兼容性（B200/IPv6）**以及**多模态/长上下文训练稳定性**。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
今日关注的 Issue 集中在高端硬件集群的训练稳定性与底层数学实现的准确性上：

*   **[卡死/挂起] 8 卡 B200 集群 (CP=4, TP=2) 上 Rollout 完成后训练无限期挂起** (THUDM/slime Issue #1487)
    *   **详情**：在 8×B200 GPU 环境下，运行 Qwen3-4B 模型时，rollout 阶段完成后训练阶段无法启动，系统连续数小时仅输出 SGLang 健康检查。此类 CP/TP 切分导致的跨节点同步挂起是当前 RLHF 分布式训练的典型痛点。
*   **[Bug] GLM-5 模型的 DSA MLA indexer 未使用归一化的 Query** (THUDM/slime Issue #2165)
    *   **详情**：开发者在 `glm5.py` 中发现 DSA lightning-indexer 直接投射了未经 `q_a_layernorm` 处理的原始 Query。这偏离了 HF Transformers 和 vLLM 中的 DeepSeek-V3.2 / GLM-5 参考实现，可能导致注意力计算底层出现数值偏差。

### 4. 关键 PR 进展
今日的 PR 动态是 Slime 迈向超大规模和多集群 RL 训练的重要风向标，主要分为三个技术轴线：

**A. 高性能权重同步与传输**
在非共置训练场景下，权重更新是最大的通信瓶颈，今日涌现多个前沿解决方案：
*   **[feat] 为 Rollout 数据添加 Mooncake RDMA 传输支持** (THUDM/slime PR #1709)：引入 RDMA 技术加速 rollout 数据流转。
*   **[feat] 基于 Mooncake 传输引擎的权重同步** (THUDM/slime PR #2159)：实验性支持通过 Mooncake TransferEngine 替代传统的 NCCL，避免构建庞大的更新组或依赖共享文件系统。
*   **[feat] 磁盘级增量权重同步** (THUDM/slime PR #2089)：放弃下发全量 Checkpoint，仅同步张量级别的变化字节，极大优化跨集群训练的 I/O 开销。
*   **[feat] 基于 P2P 的 Shard 级权重更新** (THUDM/slime PR #2146)：为非共置训练引入点对点 `dist.send/recv` 分片同步，取代默认的 `all_gather` + NCCL broadcast。

**B. 模型支持与底层 Bug 修复**
*   **[feat] 支持 Qwen3.5 MoE INT4-QAT** (THUDM/slime PR #2156)：在转换脚本中融合 3D 专家网络，支持运行时 Megatron 到 HF 的权重转换。
*   **[fix] 为 IPv6 集群修复 `update_weight` 进程组初始化** (THUDM/slime PR #2151)：修复了 IPv6 环境下 `tcp://` 地址未打括号导致的格式错误，提升双栈网络兼容性。
*   **[fix] 处理多轮/OPD 场景下的 None/Dict 奖励** (THUDM/slime PR #2157)：修复了多轮对话中 sample 被中断导致 reward 为 None 时的指标计算崩溃问题。

**C. 智能体强化学习 与多模态**
*   **[feat] SWE 智能体 RL 强化：环境可选的评分协议与沙箱 RPC 稳健性** (THUDM/slime PR #2161)：增强了 `slime/agent/` 中的代码智能体运行时，支持通过环境变量解耦训练和评估的 Grading 协议。
*   **[feat] 支持多模态 Qwen36 SFT** (THUDM/slime PR #2164)：正在推进多模态能力的整合（注：今日有多个迭代关闭，此为当前最新链接）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的开发轨迹可以明确看出，Slime 并没有停留在简单的“算法包裹层”阶段，而是在死磕当前 RLHF/RLAIF 在工业界落地时的**“硬骨头”**：

1.  **攻坚决胜通信瓶颈**：连续 4 个重磅 PR（Mooncake RDMA、磁盘级 Delta 权重、P2P 分片同步）均直指“非共置集群跨域训练”中的权重同步灾难。这表明 Slime 正在为跨数据中心的大规模分布式 RL 铺路。
2.  **紧跟前沿硬件生态**：无论是积极适配 B200 超算节点（Issue #1487），还是修复 IPv6 双栈网络问题（PR #2151），亦或是引入 INT4-QAT 量化训练（PR #2156），都证明项目在紧跟 2026 年最前沿的 AI 硬件基础设施演进。
3.  **拥抱 Agentic RL**：对 SWE Coding Agent 的沙箱环境和评测协议进行深度硬化（PR #2161），说明其应用场景正在从传统的对齐训练，向复杂的、多轮的 Agent 工具调用强化学习拓展，这是当前 LLM 底层生态最有价值的演进方向之一。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-02 强化学习（RL）生态日报摘要：

# AReaL 强化学习日报：2026-07-02

## 1. 今日速览
过去 24 小时内，AReaL 仓库活跃度极高，共更新了 **3 条 Issues** 和 **17 条 PR**，并正式发布了重磅的 **v2.0.0 版本**。项目在系统架构（微服务化）、训练算法优化（变长轨迹归一化、Logp 复用）以及 Agent 数据流兼容性（SWE-bench 工作流、工具调用解析）方面取得了实质性进展。

## 2. 版本发布
- **[Release] v2.0.0 正式发布** ([链接](https://github.com/areal-project/AReaL/releases))
  - **核心亮点**：引入了**微服务架构**（Micro-service Architecture），将系统拆分为独立的 [训练服务](https://github.com/areal-project/AReaL/tree/main/areal/v2/training_service)、[推理服务](https://github.com/areal-project/AReaL/tree/main/areal/v2/inference_service) 和 [Agent 服务](https://github.com/areal-project/AReaL/tree/main)。这标志着 AReaL 在面向大规模、复杂 RLHF/Agent 训练场景的解耦能力上完成了重要升级。

## 3. 重点 Issues
当前 Open 状态的 Issues 集中在数据流一致性、配置反模式以及底层 Loss 机制的探讨：

- **[#1420](https://github.com/areal-project/AReaL/issues/1420) [BUG] HF chat template 渲染 tool_call 参数错误**
  贡献者 `EazyReal` 报告了 OpenAI 格式向 HF chat template 转换时的数据类型问题（JSON string 与 mapping 不一致），这会导致 Agent 训练时 rollout 和 train 阶段的 token 发生不同步。
- **[#1422](https://github.com/areal-project/AReaL/issues/1422) [Refactor] 从 `gconfig.n_samples` 推导 reward/adv 归一化组大小**
  提议消除重复的控制旋钮（`group_size`）。当配置冲突时，目前系统会静默使用错误配置，重构后将强制覆盖并告警，提升系统的鲁棒性。
- **[#1423](https://github.com/areal-project/AReaL/issues/1423) [Feature] 可配置的 Loss 聚合级别 (ScaleRL §3.2)**
  提议打破代码中硬编码的全局 `token mean` 策略梯度损失，增加 `seq` 和 `prompt` 级别的聚合选项，这为复现前沿 RL 论文（如 ScaleRL）提供了更精细的控制。

## 4. 关键 PR 进展
17 个 PR 涵盖了从版本维护到底层训练机制修复的多个维度：

**🤖 Agent 工作流与兼容性**
- **[#1462](https://github.com/areal-project/AReaL/pull/1462) / [#1455](https://github.com/areal-project/AReaL/pull/1455) 增加 SWE-bench RL 训练工作流**：提供了一个端到端的示例，通过 AReaL 的 OpenAI 兼容代理驱动 AReaL-SWEAgent 进行 Rollout 并计算奖励。
- **[#1458](https://github.com/areal-project/AReaL/pull/1458) 增加 Proxy 预处理器与 Qwen 工具调用解析**：大幅改善了实验性 OpenAI 兼容代理对 Anthropic/OpenAI 复杂工具调用流量的支持。
- **[#1463](https://github.com/areal-project/AReaL/pull/1463) 修复 tool_call 参数解析**：在应用 chat template 前，将 JSON 字符串强制转换为字典，修复了 Issue #1420 中的 token 同步隐患。

**⚙️ 核心算法与 PPO 训练逻辑**
- **[#1454](https://github.com/areal-project/AReaL/pull/1454) 修复奖励归一化中的变长轨迹组问题**：此前系统使用固定 `group_size` 切分奖励，当部分 rollout 样本失败或被过滤时会导致切片错误。该 PR 修复了这一边界情况。
- **[#1453](https://github.com/areal-project/AReaL/pull/1453) 增加 `reuse_train_logp` 方法**：为解耦 PPO 引入新选项，直接复用训练前向传播的 logprobs（detached）作为近端 logp，省去了额外的前向计算，显著降低内存和算力开销。
- **[#1457](https://github.com/areal-project/AReaL/pull/1457) 优化 `reuse_train_logp` 的强校验**：配合 #1453，若该选项与 `ppo_n_minibatches > 1` 冲突，不再抛出异常中断，而是自动降级强制设为 1 并告警。

**🏗️ 分布式与底层工程**
- **[#1460](https://github.com/areal-project/AReaL/pull/1460) Megatron 上下文并行（CP）支持**：为仅前向路径（如 `compute_logp`）添加了 CP 安全的词汇统计和 MoE 配置支持。
- **[#1373](https://github.com/areal-project/AReaL/pull/1373) 增加 GLM-5/DeepSeek-V3 模型支持**：补齐了开源 AReaL 对 GLM-5.1、DeepSeek-V3 及 GLM-4.7-Flash 的架构支持。
- **[#1452](https://github.com/areal-project/AReaL/pull/1452) 支持跨 Tokenizer 在线蒸馏**：允许在不同家族模型（如 LLaMA → Qwen）之间进行策略蒸馏。
- **版本与发布管理**：包含多个版本号升级与 Report 论文更新的 PR（如 [#1466](https://github.com/areal-project/AReaL/pull/1466), [#1465](https://github.com/areal-project/AReaL/pull/1465)）。

## 5. 为什么值得继续关注？
AReaL 正在从一个纯粹的 RLHF 训练框架，加速演进为**面向 Agentic RL 的全栈基础设施**。
1. **解耦即生产力**：v2.0.0 的微服务架构，以及 OpenAI 兼容代理（处理复杂的 Tool Calls），意味着开发者可以更轻松地将 LLM 接入复杂的外部沙箱环境（如 SWE-bench）进行强化学习，而无需改动训练底层。
2. **直面大规模训练痛点**：近期合并的 PR 极其精准地打到了分布式 RL 的痛点——变长轨迹归一化（#1454）和冗余前向传播浪费（#1453 reuse_train_logp），这些细节是决定千卡集群训练稳定性和显存周转率的核心。
3. **前沿模型零时差支持**：通过底层打通 Megatron 与各种 Bridge，第一手支持 GLM-5、DeepSeek-V3 等最新开源架构的并行训练，是 RL 生态中极具竞争力的特性。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026 年 7 月 2 日 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

### 1. 今日速览
- **日期**: 2026-07-02
- **Issues 动态**: 更新 7 条（其中包含积极的特性探讨与常规 Bug 修复）。
- **PR 动态**: 更新 24 条（主要集中在 Async GRPO 底层优化、多环境支持、Liger Kernel 兼容性修复以及代码重构）。
- **Releases**: 过去 24 小时无新版本发布。
- **整体趋势**: 项目当前的重心明显聚焦于**异构计算优化**（如 vLLM、Liger Kernel）与**复杂智能体环境交互**（如多环境支持、Async GRPO 重构）。

---

### 2. 版本发布
无。当前主干分支处于持续集成与功能迭代阶段，尤其是针对异步 GRPO 的基础架构重构尚未完全合入。

---

### 3. 重点 Issues
今日更新的 Issues 涵盖了训练机制的深度探讨与边界情况反馈：

- **[✨ enhancement, 🏋 GRPO] Multi-GPU sampling for vLLM in GRPO Trainer** (CLOSED)
  讨论了在 GRPO Trainer 中为 vLLM 配置多个 GPU 进行采样的需求，突破了原本仅支持单 GPU 的限制。
  链接: [huggingface/trl Issue #2706](https://github.com/huggingface/trl/issues/2706)
- **[✨ enhancement] Weighted SFT** (OPEN)
  提出了加权 SFT 的需求。在混合质量的长文本 SFT 中，对所有 Token 一视同仁会导致效果下降，引入加权机制可以显著改善训练表现。
  链接: [huggingface/trl Issue #5761](https://github.com/huggingface/trl/issues/5761)
- **Integrate GTPO as a new loss_type in GRPOTrainer** (OPEN)
  提议将 GTPO（Group-relative Trajectory-based Policy Optimization）作为新的损失类型集成到 GRPOTrainer 中，以解决原生 GRPO 在训练时的策略崩溃和梯度冲突问题。
  链接: [huggingface/trl Issue #5226](https://github.com/huggingface/trl/issues/5226)
- **[🐛 bug, 🏋 GRPO] tensor 'kwargs['input_ids']' size mismatch** (CLOSED)
  反馈了在训练过程中出现的 Tensor 尺寸不匹配导致 ckpt 未保存的严重报错。
  链接: [huggingface/trl Issue #3611](https://github.com/huggingface/trl/issues/3611)

---

### 4. 关键 PR 进展
今日的 PR 活动非常密集，展示了 TRL 在核心架构上的演进方向：

- **GRPO 算法与多环境交互深化**
  - **#6002 [OPEN] Support multiple environments [2/2]**: 为 GRPO 增加了针对单样本的环境选择功能。现在 `environment_factory` 可以接受字典格式，允许数据集的每个样本暴露并使用自己专属的工具环境，极大增强了 Agent RL 的灵活性。
    链接: [huggingface/trl PR #6002](https://github.com/huggingface/trl/pull/6002)
  - **#6072 [CLOSED] [async GRPO] Per-generation reset() observation**: 修复了异步 GRPO 中 `reset()` 观测结果仅按组折叠的问题，确保在 `reset()` 具备随机性时，每次生成都能对齐正确的观测状态。
    链接: [huggingface/trl PR #6072](https://github.com/huggingface/trl/pull/6072)
  - **#3434 [CLOSED] feat: Implement Two-Sided Clipping for GRPO Trainer**: 参考最新的 Intellect-2 技术报告，为 GRPO 引入了两端裁剪机制。
    链接: [huggingface/trl PR #3434](https://github.com/huggingface/trl/pull/3434)

- **Liger Kernel 深度兼容与报错优化**
  - **#6234 [OPEN] Fix missing mm_token_type_ids when training new Qwen VLMs with liger kernel**: 修复了新版 Qwen 模型（如 Qwen3.5 VLM）在 Liger Kernel 路径下缺失 `mm_token_type_ids` 支持的问题。
    链接: [huggingface/trl PR #6234](https://github.com/huggingface/trl/pull/6234)
  - **#6231 & #6232 [CLOSED]**: 统一了 DPO 和 KTO 在同时使用 `compute_metrics` 与 Liger Kernel 时的报错行为，抛出明确的 ValueError，防止用户使用不受支持的配置组合。
    链接: [huggingface/trl PR #6231](https://github.com/huggingface/trl/pull/6231)

- **易用性提升与代码重构**
  - **#6157 [OPEN] Add `quantization_config` trainer argument**: 为 SFT/DPO/GRPO 等训练器统一新增了量化配置参数，使得 QLoRA 微调不再需要侵入式地修改 `model_init_kwargs`。
    链接: [huggingface/trl PR #6157](https://github.com/huggingface/trl/pull/6157)
  - **#6235 [OPEN] Remove the PAPO trainer**: 基于遥测数据（过去 6 周内使用次数为 0），决定移除实验性的 PAPO trainer 以降低高昂的代码维护成本。
    链接: [huggingface/trl PR #6235](https://github.com/huggingface/trl/pull/6235)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **引领 Agent RL 工程化标准**：通过连续推进多环境支持（PR #6001, #6002）以及 Async GRPO 状态对齐（PR #6072），TRL 正在解决 LLM 与外部环境交互（如 Web 浏览、代码执行）时的状态管理与并发瓶颈，这是目前 RL 流派最前沿的痛点。
2. **紧跟开源社区最前沿算法**：无论是引入 Intellect-2 的双向裁剪机制（PR #3434），还是在 Issue 中探讨的 GTPO（Issue #5226），TRL 始终是顶尖 RL 学术成果向工程落地转化的“第一站”。
3. **极致的底层显存与算力优化**：与 Liger Kernel 的高度解耦与深度适配、对量化（QLoRA）的原生支持，以及对 vLLM 多卡推理的探索，表明 TRL 致力于降低大模型 RLHF/RLAIF 的硬件门槛。对于开发者和研究人员而言，TRL 的每次更新都在实实在在地提升训练集群的吞吐效率。

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

以下是 **verl** 项目 2026 年 7 月 2 日的强化学习（RL）生态日报摘要。

### 1. 今日速览
- **数据概览**：过去 24 小时内，项目活跃度保持高位，共有 **21 条 Issue 更新**，**27 条 PR 更新**。
- **版本发布**：过去 24 小时无新版本发布。
- **技术趋势**：今日生态动态高度聚焦于三大核心方向：**异构硬件（华为昇腾 NPU）的深度适配**、**底层显存与算力调度优化**（如动态并行、Colocate 内存管理、增量权重同步），以及**前沿 RL 算法落地**（如 OPSD 在线策略自蒸馏）。

### 2. 版本发布
无新版本发布。当前社区疑似正处于大版本（如 `0.9.0.dev`）的密集开发与代码合并周期内。

### 3. 重点 Issues
本期的讨论与报错集中在长上下文负载均衡、复杂环境下的显存泄漏，以及最新硬件后端的适配：

- **[RFC] Rollout 阶段的负载均衡机制** ([#658](https://github.com/verl-project/verl/issues/658))
  **状态**: OPEN | 👍: 3
  **摘要**: 针对 vLLM worker 响应长度不一致导致的算力闲置问题，提议引入共享队列机制（类似 Kimi 1.5 的 Partial Rollouts），以优化长思维链场景下的资源利用率。
- **训练过程中显存利用率持续走高导致 OOM** ([#630](https://github.com/verl-project/verl/issues/630))
  **状态**: OPEN | 👍: 2
  **摘要**: 报告了频繁保存 Checkpoint 会导致显存占用阶梯式上升直至 OOM 的棘手问题，即使升级 vLLM 至 0.7.3 仍未解决，目前社区在寻求内存释放的临时缓解方案。
- **[FSDP2] GRPO 在昇腾 Atlas 800T A3 上稳定崩溃** ([#6894](https://github.com/verl-project/verl/issues/6894))
  **状态**: OPEN | 评论: 1
  **摘要**: 在基于 FSDP2 运行 GRPO 训练时，确定性地在第 11 step 遭遇底层的 NPU 驱动报错（error code:507035 设备端内存越界）。而使用 FSDP1 可稳定跑过 40 步。
- **Megatron 后端开启流水线并行时的更新报错** ([#653](https://github.com/verl-project/verl/issues/653))
  **状态**: CLOSED | 👍: 0
  **摘要**: 汇报并已解决当启用 Megatron 后端、Reward Model 及 `pipeline_model_parallel` 时，Actor 更新引发的崩溃问题（TP=2, PP=2 构型下）。

### 4. 关键 PR 进展
今日 PR 提交主要围绕底层性能榨取、架构解耦与昇腾算子支持：

- **[per] BSHD 微批次填充至 Max seq_len** ([#6901](https://github.com/verl-project/verl/pull/6901))
  **核心价值**: 解决了 `use_remove_padding=False` 时，32 个微批次产生 20+ 种不同 padded shape 的痛点，大幅减少了 cuDNN fused-attention Graph Building 的频繁触发开销。
- **[feat] 异步 PPO 框架的混合推理资源动态缩放** ([#6556](https://github.com/verl-project/verl/pull/6556))
  **核心价值**: 动态调整 GPU 分配，彻底解决异步训练中“Trainer 节点苦等数据而 Rollout 节点闲置”的 GPU 利用率割裂问题。
- **[feat] SGLang 增量权重同步** ([#6794](https://github.com/verl-project/verl/pull/6794))
  **核心价值**: 在训练与推理解耦架构中，放弃全量广播模型参数，转而仅同步发生变化的 BF16 权重 bytes `(position, value)` 对。在 RL post-training 阶段可节省超过 99% 的同步带宽。
- **[feat] 昇腾 NPU 支持 Qwen3.5 Triton GDN 算子** ([#6907](https://github.com/verl-project/verl/pull/6907), [#6908](https://github.com/verl-project/verl/pull/6908))
  **核心价值**: 为 NPU 架构注入了 Qwen3.5 Gated Delta Net 的 Triton 融合算子，使得 verl 在异构硬件上对新架构模型的支持进一步拉齐。
- **[algo] 引入端到端在线策略自蒸馏 (OPSD)** ([#6909](https://github.com/verl-project/verl/pull/6909), [#6833](https://github.com/verl-project/verl/pull/6833))
  **核心价值**: 拓宽了算法库，允许 Teacher 模型基于特权上下文对 Student 的 on-policy rollout 进行评分与蒸馏，为提升模型复杂推理能力提供了新的官方实现方案。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 已经从单纯的 RL 训练框架，演变成了一个**验证大算力、异构集群、新模型架构与前沿 RL 算法极限的“试验田”**。
1. **硬件级极致优化**：不论是 BSHD 动态填充以减少算子重编译，还是基于 SGLang 的增量权重同步，verl 正在攻克多卡/多机 RLHF 训练中最痛的**“显存墙”与“通信墙”**问题。
2. **对国产异构算力（昇腾）的无缝接管**：今日大量 PR 和 Issue 涉及 Atlas 800T A3、NPU UT/ST 及 Triton 适配。verl 证明了其 Ray 架构的鲁棒性，是目前跨芯片生态（Nvidia + Ascend）最活跃的开源 RL 项目之一。
3. **算法与 SOTA 模型的零时差跟进**：随着 Qwen3/3.5、GLM5 以及 MoE 架构的迭代，verl 社区能在极短时间内提供 FSDP 适配、FP8 量化支持以及复杂的多模态预处理脚本，大大降低了前沿 RLHF/GRPO 算法的工程门槛。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 2026-07-02 torchtune 项目开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度趋于平稳。无新版本发布，新增/更新 Issue 1 条，新增/更新 PR 1 条。当前社区的开发焦点集中在**底座模型分词器在特定条件下的边界处理**，尤其是 EOS（End of Sequence）token 在损失计算过程中的掩码逻辑，这对于强化学习（RL）中的序列生成与响应截断具有直接影响。

### 2. 版本发布
- **无新版本发布** (最近 24 小时内)。

### 3. 重点 Issues
- **#2478 [OPEN] [bug, good first issue, community help wanted] Add `add_end_token` to the Gemma Tokenizer**
  - **链接**: [meta-pytorch/torchtune Issue #2478](https://github.com/pytorch/torchtune/issues/2478)
  - **作者**: pbontrager （更新于 2026-07-01）
  - **摘要**: 这是一个标记为 `good first issue` 的社区修复项。此前 Llama3 的 Tokenizer 已更新以支持在 `tokenize_messages` 中配置 `add_end_token` 以保证生成的准确性，Gemma 模型目前缺失这一特性，需要对齐修改。此类基础 Tokenizer 的对齐工作对于下游 RL 训练（如 Rollout 阶段的精准停止）至关重要。

### 4. 关键 PR 进展
- **#2967 [OPEN] [CLA Signed] [Fix] Qwen tokenizers mask trained EOS out of loss when `max_seq_len` is set (#2792)**
  - **链接**: [meta-pytorch/torchtune PR #2967](https://github.com/pytorch/torchtune/pull/2967)
  - **作者**: yushuosun （更新于 2026-07-01）
  - **摘要**: 这是一个针对 Qwen2/2.5/3 系列模型的关键 Bug 修复。当设置 `max_seq_len` 时，Qwen Tokenizer 在执行 `tokenize_messages` 时错误地将序列末尾的 EOS token 从 loss 计算中掩码掉。
  - **技术评估**: 这是一个高频高危 Bug。如果模型在 SFT 阶段未对 EOS 产生梯度更新，将导致模型无法学会主动停止生成（Runaway Generation）。在当前的 RLHF/PPO 训练范式中，响应无法可靠停止会导致 Rollout 阶段强行截断，严重破坏 Reward 信号的分布并造成训练崩溃。该 PR 目前处于 Open 状态，值得 RL 开发者持续追踪其合并进度。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习（尤其是 RLHF / RLAIF）生态中，模型生成的稳定性和边界控制的精确度直接决定了训练的成败。
torchtune 今日暴露的 Issue 和 PR 直击痛点：**Tokenizer 在不同截断长度下对 EOS token 的掩码处理**。在 PPO 或 GRPO 训练时，Environment 需要依靠模型自身输出的 EOS 来判定回合结束。如果底座微调（SFT）阶段由于 Tokenizer 逻辑缺陷导致模型“学不会停止”，将直接破坏 RL 采样的马尔可夫决策过程（MDP）。
torchtune 社区正在严谨地逐个排查和重构各主流模型（Llama, Gemma, Qwen）的底层 Tokenizer 逻辑，这种对极底层细节的把控，使其成为构建可靠 RL 训练流水线不可或缺的基石项目。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

这里是 2026-07-02 的 Open Instruct RL 生态日报摘要。

### 1. 今日速览
过去 24 小时内，[open-instruct](https://github.com/allenai/open-instruct) 仓库活跃度平稳。无新增 Issues、无新版本发布，但有 **2 个关键 PR** 更新了状态，分别聚焦于**强化学习训练范式扩展（在线策略蒸馏）**与**底层训练集群容器化基建（Podman 支持）**。

### 2. 版本发布
* **无新版本发布 (0)**。

### 3. 重点 Issues
* **无新增或更新 Issues (0)**。

### 4. 关键 PR 进展

* **[PR #1740] Add On-Policy Distillation (OPD) for OLMo-core GRPO**
  * **作者:** farhatkevin | **状态:** [OPEN]
  * **链接:** [allenai/open-instruct PR #1740](https://github.com/allenai/open-instruct/pull/1740)
  * **技术摘要:** 该 PR 为 OLMo-core 的 GRPO 算法栈引入了 **在线策略蒸馏** 机制。核心逻辑是：Student 模型持续进行 rollout 采样，冻结的 Teacher 模型对 Student 访问的确切前缀进行评分，学习者通过蒸馏损失将 Student 的分布向 Teacher 回归。该实现作为一种可复用的 Teacher-scoring 与 distillation-loss 层，为 RL 阶段结合模型蒸馏提供了原生支持。

* **[PR #1749] Add Podman setup scripts**
  * **作者:** hamishivi | **状态:** [OPEN]
  * **链接:** [allenai/open-instruct PR #1749](https://github.com/allenai/open-instruct/pull/1749)
  * **技术摘要:** 引入基于 Podman/DinD (Docker-in-Docker) 的容器化部署方案，专为 Beaker 镜像环境设计。包含容器配置、Docker Hub 镜像仓库设置、Podman 服务分片、Registry 镜像助手以及 DinD 启动脚本。同时包含了对 `mason.py` 的兼容性修复，以处理未显式传入 Beaker budget 时的逻辑。此 PR 旨在优化大规模 RL 训练时的集群容器调度与环境初始化体验。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **探索“RL+蒸馏”的融合范式：** PR #1740 展示了 Open Instruct 在算法前沿的探索。在当前的 RL 生态中，如何利用强力模型指导 RL agent 的探索方向是关键痛点。将 On-Policy Distillation 原生植入 GRPO 流水线，提供了一种减少 RL 探索空间、稳定策略更新的高效工程范例。
* **完善的超大规模训练工程基建：** Open Instruct 不仅是算法库，更是工业级 RL 训练的试验田。Podman/DinD 脚本的加入（PR #1749）反映了该项目在处理底层分布式集群调度、镜像分发和计算资源配额（Beaker budget）等工程痛点上的持续投入，为社区提供了开箱即用的工程化实践。

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

**RL 日报：Gymnasium 生态追踪 (2026-07-02)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库共更新 1 条 Issue 和 2 条 PR，无新版本发布。社区近期的核心活动高度聚焦于**底层物理引擎的现代化替换**以及**官方教程中环境 seeding 机制的规范性修复**。

**2. 版本发布**
无。当前仓库未进行新的 Release 发版，核心 API 处于稳定维护期。

**3. 重点 Issues**
*   **[#1468] [Question] `reset()` 文档字符串与 REINFORCE 教程中关于种子设置的矛盾** ([链接](https://github.com/Farama-Foundation/Gymnasium/issues/1468))
    *   **状态:** Open | **作者:** initsownright | **评论:** 3
    *   **技术摘要:** 开发者指出 `gym.Env` 的 API 文档与实际教程代码存在理念冲突。文档明确建议“仅在环境初始化后传入一次整数 seed，避免每次重置”，以保证训练数据的随机多样性；但基础的 REINFORCE 等教程代码中，却在每个 episode 的 `reset()` 时强制传入相同的 seed。这容易误导 RL 初学者导致训练效果不佳。

**4. 关键 PR 进展**
*   **[#1608] 修复教程中的环境 Seeding 代码** ([链接](https://github.com/Farama-Foundation/Gymnasium/pull/1608))
    *   **状态:** Open | **作者:** Trenza1ore
    *   **进展与意义:** 该 PR 直接响应了 Issue #1468 的反馈。重点重构了教程代码，移除了在每个 episode 调用 `env.reset(seed=seed)` 的不良实践代码，并顺带优化了奖励记录逻辑。这标志着 Gymnasium 官方对入门级 RL 代码规范的进一步严格把关。
*   **[#1602] 将 LunarLander 物理引擎迁移至 Pymunk (概念验证)** ([链接](https://github.com/Farama-Foundation/Gymnasium/pull/1602))
    *   **状态:** Open (Draft) | **作者:** Lonny154
    *   **进展与意义:** 底层架构层面的重要尝试。该 PR 旨在剥离传统的 Box2D 依赖，使用纯 Python 的 2D 物理库 Pymunk 重写经典的 `LunarLander` 环境。目前已跑通地形生成和基础着陆约束的物理模拟原型。如果最终合并，将大幅降低 Gymnasium 的编译门槛和底层环境依赖冲突。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
作为 OpenAI Gym 的官方继承者，Gymnasium 依然是当前强化学习算法评估的“事实标准”。通过今日的更新可以看出：
1. **捍卫标准规范：** 官方仍在极其严苛地把控文档和教程的准确性（如 #1468 与 #1608 的联动），确保新入局者使用最正确的随机性控制（Reproducibility）最佳实践。
2. **摆脱历史包袱：** 社区正在尝试解决 RL 生态长期以来的痛点——抛弃难以跨平台编译的 C++ 物理引擎（如 Box2D），转而拥抱纯 Python 实现（如 Pymunk）。这使得 Gymnasium 在面对现代基于 JAX/Torch 的向量化加速生态时，具备更好的兼容性与可维护性。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**强化学习（RL）开源生态日报：PettingZoo 项目动态**
**日期**：2026-07-02

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活动平稳，未发布新版本。共更新 1 条 Issue 和 1 条 PR，主要聚焦于 **教程代码可用性优化** 与 **代码质量工具链的深度集成**。

### 2. 版本发布
* **无新版本发布**（核心 API 保持稳定）。

### 3. 重点 Issues
* **[#1253](https://github.com/Farama-Foundation/PettingZoo/issues/1253) [enhancement] [Proposal] Proper initialization of the custom CNNmodel in the RLlib tutorial**
  * **动态**：创建于半年前，于昨日产生新讨论（累计 4 条评论）。
  * **技术摘要**：开发者指出 Ray/RLlib 集成教程（`rllib_pistonball.py`）中的自定义 CNN 模型实际上并未被正确实例化和调用。作者提议修改 config 以显式调用该模型，或直接从教程中移除冗余代码。该 Issue 反映了社区对多智能体教程“开箱即用”准确性的高要求。

### 4. 关键 PR 进展
* **[#1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376) Increase ruff strictness and apply mechanical autofixes**
  * **动态**：距合并更近一步，昨日有更新。
  * **技术摘要**：基于近期提升诊断级别的基线（#1350），该 PR 显著提升了 Python Lint 工具 `ruff` 的严格程度，在默认规则集（pyflakes `F`, pycodestyle `E4/E7/E9`）之外启用了更多附加规则，并自动修复了所有新暴露的静态代码问题。这对于维护一个庞大且多接口的 RL 标准库的长远健康发展至关重要。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
* **多智能体生态的底层基石**：随着 MARL（多智能体强化学习）在复杂博弈、大模型多体协同等领域的爆发，PettingZoo 作为 Gymnasium 的官方多智能体扩展，其 API 标准依然是学术界和工业界对标的基准。
* **极高的工程标准**：从 PR #1376 可以看出，项目正在持续向更严格的现代化 Python 工程实践（深度集成 Ruff 等 CI 工具）演进。这意味着其提供的底层环境接口具有极高的鲁棒性，是构建其他高级 MARL 算法库（如 Tianshou, CleanRL 等）的可靠数据源。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>