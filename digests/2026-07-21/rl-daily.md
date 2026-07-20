# RL 开源生态日报 2026-07-21

> 生成时间: 2026-07-20 22:17 UTC | 覆盖项目: 15 个

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
当前（2026年7月）开源强化学习（RL）生态呈现出显著的**分层演进与场景分化**特征。底层经典算法环境（如 Gymnasium, PettingZoo）已步入精细打磨期，聚焦于 API 现代化与向量化吞吐极限；而上层的大规模 LLM/VLM 后训练框架（如 verl, TRL, AReaL, slime）正处于“军备竞赛”状态，全面拥抱百亿/千亿级参数模型，并向着 Agentic RL（复杂环境交互）与异构硬件算力（如昇腾 NPU、摩尔线程）双重下沉。整个生态的重心已从单纯的“算法实现”转移至“高性能分布式系统工程”。

## 各项目活跃度对比
今日具有代码提交与 Issue 交互的项目共有 8 个，其余 5 个项目（CleanRL, OpenRLHF, rl_games, ROLL, Stable Baselines3, Tianshou, torchtune）处于静默状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 59 | 22 | 0 | 高度活跃。聚焦极致的系统级性能优化（Host-Device 解耦、通信墙消除）与分离式架构演进。 |
| **TRL** | 14 | 46 | 0 | 极度活跃。重构核心代码以剥离历史包袱，推进知识蒸馏 API 稳定化，攻坚分布式训练痛点。 |
| **ROCK** | 10 | 13 | 0 | 活跃。专注攻克 RL 基础设施在海量并发与分布式场景下的工程痛点（如内核级负载均衡）。 |
| **AReaL** | 3 | 7 | 0 | 活跃。聚焦系统安全加固、数据流契约把控及 FP8/Megatron 底层传输优化。 |
| **Gymnasium** | 3 | 7 | 0 | 平稳迭代。修复异步向量化边缘 Bug，深度拥抱 JAX 硬件加速。 |
| **slime** | 1 | 8 | 0 | 活跃。死磕大模型分布式权重热更新，积极扩展 RDMA 与国产化算力支持。 |
| **PettingZoo** | 0 | 7 | 0 | 平稳迭代。底层 API 现代化重构，清理多智能体环境的历史遗留问题。 |
| **OpenInstruct** | 1 | 1 | 0 | 平稳迭代。推进 OLMo 3 的开源复现闭环与异构算力适配。 |

## 共同关注的研究与工程方向
生态内的技术合力正在向解决大模型训练的“吞吐量瓶颈”与“交互复杂度”集中：

**研究侧信号：**
*   **On-policy 蒸馏与 Agentic RL 崛起**：以 TRL 和 OpenInstruct 为代表，On-policy logit 蒸馏正成为主流 SOTA 模型的标配。同时，复杂环境交互的强化学习（如接管环境数据集所有权、SWE 环境集成）正在打破传统“采样-更新”的强绑定范式。
*   **高级采样与 Off-policy 容错**：面对长周期任务，verl 重构了 Replay Buffer 驱逐机制（DAPO 算法过滤），AReaL 强化了非完整采样证据的容错处理，表明业界对数据质量与复用率的极致追求。

**工程/基础设施侧信号：**
*   **分布式通信与显存壁垒的极致优化**：减少 Host-Device 同步（verl）、延迟梯度同步打破通信时间墙、支持 Megatron FP8 权重直转避免反量化（AReaL），以及引入 Mooncake RDMA 提升带宽（slime），是支撑千亿参数模型训练的硬核护城河。
*   **动态权重热更新与解耦**：如何无缝、低延迟地将训练态权重同步给高并发推理引擎（如 SGLang/vLLM），解决 MoE 专家维度切片对齐和布局恢复，是当前工程界最“脏累活”但也最关键的一环。
*   **异构算力（NPU/GPU）大举入侵**：国产算力适配不再是纸上谈兵。昇腾 NPU（Ascend）、摩尔线程（MUSA）的底层适配已在 verl, slime, OpenInstruct, AReaL 等多个主流框架中全面落地。

## 差异化定位分析
*   **verl & AReaL（高性能计算驱动）**：两者具有极高的技术深度，定位为“面向百亿/千亿级参数的底层高性能计算框架”。它们着眼于榨干 GPU/NPU 通信带宽与解决最底层的显存算子平衡。
*   **TRL & OpenInstruct（生态标准与算法闭环驱动）**：定位为紧密贴合 HuggingFace 生态与前沿开源大模型（如 OLMo）的标准基座。重点在于清理技术债务，快速跟进 SOTA 算法（如 GRPO, 蒸馏），提供干净、可维护的训练链路。
*   **slime & ROCK（系统健壮性与调度驱动）**：高度关注 Colocate 架构与海量并发场景的稳定性。slime 专注训练与高并发推理引擎的深度粘合；ROCK 则下沉至 Ray 集群容灾与内核级高并发沙箱网络治理。
*   **Gymnasium & PettingZoo（底层标准与试验台）**：作为传统 RL 与 MARL 的基石，它们致力于提供极致吞吐的向量化环境与标准化的现代 API，充当算法验证的入口。

## 社区热度与成熟度
*   **高度活跃且成熟（企业级反哺）**：verl 和 TRL 的 Issue/PR 更新量遥遥领先。不仅拥有专职的核心开发者团队，其演进方向（如 FSDP2 适配、企业级安全漏洞封堵）已完全达到生产级标准，社区反馈机制极其敏捷。
*   **稳重且聚焦（基建狂魔）**：slime、AReaL 和 ROCK 展现出极强的工程攻坚气质。它们虽然交互量略少于 TRL，但提交的 PR 均为硬核的底层架构重构（如异步恢复、SSRF 漏洞修复、权重传输协议优化），显示出稳定的商业化或大科研团队支撑。
*   **平稳打磨期（学术与入门标准）**：Gymnasium 和 PettingZoo 已过爆发期，当前重点在于文档建设（如引入 SB3 训练的真实 GIF）和底层物理/渲染引擎优化，社区成熟度极高。

## 值得关注的趋势信号
1.  **“通信与同步”成为 RLHF 的下一战场**：随着模型增大，单纯的算力堆叠已遇瓶颈。减少阻塞（如 verl 消除 `.item()` 触发的同步、延迟梯度同步）和 RDMA/FP8 直转等底层优化，正在决定大规模 RL 训练的生死线。
2.  **数据契约的强校验化**：在多轮对话和 Agentic 场景中，由于 Tokenization 拼接、自动重置或采样凭证错误导致的“隐性数据分布偏移”频发（如 verl #3720, AReaL #1551）。将隐式错位转化为显式的 Fail-Fast 机制正在成为大框架的共识。
3.  **算力解耦与国产化加速**：短短一天内，多个头部框架完成了对昇腾 NPU 和摩尔线程的深度适配（不仅是推理，包含复杂训练与通信协议）。这预示着开源 RL 生态正在为“非英伟达算力集群”的大规模部署做好基建准备。
4.  **知识蒸馏的重新统一**：主流模型高度依赖的 On-policy 蒸馏正在抛弃过去繁杂的 offline 混合路径，向纯在线、与 GRPO 等对齐算法共享数据契约的统一架构演进。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 开源生态日报**
**日期**: 2026-07-21

---

### 1. 今日速览
过去 24 小时内，ROCK 仓库活跃度极高，共处理 **10 条 Issues** 和 **13 条 PR**，无新版本发布。活动核心聚焦于**底层系统健壮性增强**、**Ray Client 异常恢复**以及**多 Worker 网络与安全配置优化**，同时顺利收尾了 v1.10 版本的多语言文档归档工作。

---

### 2. 版本发布
* **无新版本发布**。
* 注：今日已正式合并 v1.10 版本的多语言文档快照（[Issue #1269](https://github.com/alibaba/ROCK/issues/1269) / [PR #1270](https://github.com/alibaba/ROCK/pull/1270)），推测代码层面的 v1.10 已趋于稳定。

---

### 3. 重点 Issues (Key Issues)
今日的 Issue 集中在 Admin 服务的并发处理、长连接稳定性及沙箱生命周期管理：

* **[性能优化] Admin 多 Worker 端口复用负载均衡** ([#1266](https://github.com/alibaba/ROCK/issues/1266))
  **状态**: Open
  **摘要**: 提出 Uvicorn 多 Worker 模式下使用 `SO_REUSEPORT`。旨在解决默认模式下单连接监听导致的 accept 负载集中问题，实现内核级别的跨 Worker 连接负载均衡。
* **[安全配置] 限制 AES 密钥只能从 YAML 加载** ([#1265](https://github.com/alibaba/ROCK/issues/1265))
  **状态**: Open
  **摘要**: 剥离从 Nacos 获取或回退生成 AES 密钥的逻辑，强制要求密钥仅从顶层 YAML 读取。此举可防止运行时密钥意外轮换，强制暴露部署配置错误。
* **[功能增强] 支持基于单沙箱级别的自动归档与删除** ([#1263](https://github.com/alibaba/ROCK/issues/1263))
  **状态**: Open
  **摘要**: 旨在扩展沙箱生命周期管理，允许为单个沙箱配置自动停止、归档和删除的期限，优化资源回收策略。
* **[Bug修复] 修复并发状态下沙箱状态查询异常** ([#1246](https://github.com/alibaba/ROCK/issues/1246))
  **状态**: Closed
  **摘要**: 解决了多个调用者并发刷新同一沙箱状态时，`SandboxManager.get_status` 可能抛出异常的问题。
* **[功能增强] 检测并恢复不健康的 Ray Client 连接** ([#1255](https://github.com/alibaba/ROCK/issues/1255))
  **状态**: Closed
  **摘要**: 针对长时间存活的 Ray Client 在 Ray Head/GCS 重启后导致的 Admin 进程阻塞问题，提出了健康检测与自动恢复机制。

---

### 4. 关键 PR 进展
今日共有 9 个 PR 被合并（Closed），数个核心基础架构 PR 开放等待 Review：

* **[Open] feat(proxy): 支持 OpenSandbox 持久化会话** ([PR #1262](https://github.com/alibaba/ROCK/pull/1262))
  通过官方 SDK 实现 OpenSandbox 的创建、运行和关闭，并利用 Redis 持久化 `(sandbox_id, ROCK session name)` 到 `OpenSandbox session id` 的映射，确保会话可跨 Admin Worker 运行。
* **[Open] opt(admin): SO_REUSEPORT 多 Worker 监听器** ([PR #1267](https://github.com/alibaba/ROCK/pull/1267))
  配合 Issue #1266，为每个 Uvicorn Worker 分配独立的 `SO_REUSEPORT` 监听器，将高并发连接的负载均衡下沉至操作系统内核层。
* **[Open] Load AES encryption key exclusively from YAML** ([PR #1268](https://github.com/alibaba/ROCK/pull/1268))
  配合 Issue #1265，重构加密密钥初始化流程，忽略传统 Nacos 值，启动时若密钥缺失或无效则直接 Fail-fast。
* **[Closed] feat(admin): 恢复不健康的 Ray Client 连接** ([PR #1256](https://github.com/alibaba/ROCK/pull/1256))
  在应用轮换策略前，同时探测本地 Ray 初始化状态与 `cluster_resources` RPC 健康度。支持每 60 秒执行一次健康检查（可配置）。
* **[Closed] fix: 在日志中保留异常 Traceback** ([PR #1261](https://github.com/alibaba/ROCK/pull/1261))
  修复 `StandardFormatter` 丢失 `exc_info` 导致的异常堆栈追踪丢失问题，并引入了 YAML 配置项与环境变量覆盖开关。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从近期代码库的演进方向可以看出，ROCK 正在重点攻克 **RL 基础设施在海量并发与分布式场景下的工程痛点**：
1. **深度优化分布式调度健壮性**：针对长周期 RL 训练任务，Ray 集群的重启或抖动往往是不可避免的。ROCK 主动引入 Ray Client 探活与重连机制（PR #1256），大幅降低了大规模训练任务的运维干预成本。
2. **高并发沙箱网络架构重构**：随着 RL 环境模拟和 Agent 交互对并发吞吐量的要求指数级上升，ROCK 开始采用内核级的 Socket 负载均衡（`SO_REUSEPORT`，PR #1267），说明项目正面向极其庞大和高频的沙箱请求场景进行底层架构适配。
3. **强化安全与生命周期治理**：Fail-fast 的密钥管理和精细到单个沙箱的自动化生命周期销毁/归档机制，表明 ROCK 正在向企业级、高稳定性的生产环境标准靠拢。

对于需要构建稳定、大规模强化学习训练集群或 Agent 沙箱环境的研究与工程团队而言，ROCK 基础设施的这些底层改进具有极高的参考价值和直接收益。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime（THUDM/slime）项目 2026-07-21 RL 生态日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，项目无新版本发布。Issue 更新 1 条，PR 更新 8 条。
- **核心动向**：技术重心高度聚焦于**底层分布式训练的健壮性修复**与**异构硬件生态的扩展**。多位开发者在模型权重转换、SGLang 热更新机制以及异步训练恢复方面提交了关键修复；同时，Moore Threads (MUSA) GPU 和 Mooncake RDMA 传输协议的底层支持正在积极合入。

### 2. 版本发布
**无新版本发布**。

### 3. 重点 Issues
- **#2222 [OPEN] [Bug/Question] qwen3.5-27B 转换为 torch dist 再转回 HF 格式后，在 SGLang 部署下 (tp=4/8) 输出异常**
  - **作者**: NIYEYE66
  - **链接**: [THUDM/slime Issue #2222](https://github.com/THUDM/slime/issues/2222)
  - **技术摘要**: 报告了一个权重转换与张量并行冲突的严重 Bug。在 GRPO 训练后，将权重（`torch dist` 格式）转回 HuggingFace 格式并使用 SGLang 进行 TP=4/8 部署时，模型完全崩溃（持续输出“!”），仅在 TP=1/2 下正常。此外，输入长度对该 Bug 有直接影响。这暴露了当前在权重切片保存与高并发 TP 推理引擎对接时可能存在对齐或精度问题。

### 4. 关键 PR 进展
今日 PR 活跃度极高，主要围绕异步训练、MoE 权重更新及硬件兼容展开：

- **#2224 [OPEN] 修复异步训练恢复后首次权重广播错误**
  - **作者**: ishzgu
  - **链接**: [THUDM/slime PR #2224](https://github.com/THUDM/slime/pull/2224)
  - **简述**: 修复了在开启 Reference Model 的非共置异步训练中，断点恢复后首次 `update_weights()` 错误地将 Ref 模型权重广播给 SGLang rollout 引擎的致命问题。
- **#2223 [CLOSED] 修复 --save-hf 功能**
  - **作者**: zhuzhilin
  - **链接**: [THUDM/slime PR #2223](https://github.com/THUDM/slime/pull/2223)
  - **简述**: 针对近日 HF 格式保存相关的紧急修复，现已关闭（推测已合并或被替代方案解决）。
- **#2193 [OPEN] 修复 grouped MoE 专家轴在 GLU rechunk 时的保留问题**
  - **作者**: LLMShark
  - **链接**: [THUDM/slime PR #2193](https://github.com/THUDM/slime/pull/2193)
  - **简述**: 修正 `update_weight/common.py` 中 TP all-gather 后的切分逻辑，解决高维 grouped MoE 权重在更新时维度被错误压缩的问题。
- **#2192 [OPEN] 修复 BF16 热更新后 FlashInfer MoE 布局丢失问题**
  - **作者**: LLMShark
  - **链接**: [THUDM/slime PR #2192](https://github.com/THUDM/slime/pull/2192)
  - **简述**: 针对 Qwen3.5/3.6 35B-A3B 等模型，在使用 BF16 权重热更新时，恢复 SGLang 所需的 block-layout 到 canonical-layout，防止引擎崩溃。
- **#2216 [OPEN] 新增后端感知的 MUSA (Moore Threads GPU) 支持**
  - **作者**: ForAxel
  - **链接**: [THUDM/slime PR #2216](https://github.com/THUDM/slime/pull/2216)
  - **简述**: 在不影响现有 CUDA 路径的前提下，集中化适配国产摩尔线程 GPU，推进 RL 框架的硬件解耦。
- **#1709 [OPEN] 为 Rollout 数据传输引入 Mooncake RDMA transport**
  - **作者**: zxpdemonio
  - **链接**: [THUDM/slime PR #1709](https://github.com/THUDM/slime/pull/1709)
  - **简述**: 引入 Mooncake RDMA 传输层，旨在大幅提升超大规模集群下 Actor 与 Rollout 引擎之间的数据交换带宽。
- **#2075 [OPEN] 通过 Megatron-Bridge 支持 Qwen3.5-VL (Dense + MoE)**
  - **作者**: demouo
  - **链接**: [THUDM/slime PR #2075](https://github.com/THUDM/slime/pull/2075)
  - **简述**: 长线推进的支持特性，通过注册官方 Bridge，支持最新的 Qwen3.5 视觉语言模型。
- **#2221 [OPEN] Backport Megatron output-gate slicing 逻辑 (修复 query groups < TP 场景)**
  - **作者**: LLMShark
  - **链接**: [THUDM/slime PR #2221](https://github.com/THUDM/slime/pull/2221)
  - **简述**: 回传 NVIDIA/Megatron-LM 的上游修复，解决 GQA 模型在 TP 切分数大于 KV 头数时引发的内核报错。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **死磕“大模型分布式 RL 的最后一公里”**：从今日的 Issues 和 PRs 可以看出，slime 团队正在解决 RLHF/GRPO 训练中最脏最累的活——**动态权重热更新 (`update_weight`)**。无论 MoE 专家维度的切片对齐，还是 FlashInfer 引擎的布局恢复，这些底层优化是决定大模型能否无缝进行 TP 高并发 Rollout 的命脉。
2. **拥抱前沿软硬件体系**：对 Mooncake RDMA 传输的支持，表明项目正在瞄准万卡级集群的通信瓶颈；而针对 Moore Threads (MUSA) 的适配，则展示了其在国产化算力替代趋势下的前瞻性布局。
3. **训练与推理引擎的深度粘合**：项目高度关注与 SGLang、Megatron-LM 的联动（例如异步恢复时的广播状态校验）。这种将分布式训练与高并发推理引擎严格对齐的工程态度，是当前开源 RL 框架中构建可靠 Colocate 架构的核心护城河。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-21 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共有 10 项动态更新（包含 3 条 Issue 和 7 条 PR），无新版本 Release 发布。整体活动高度聚焦于**系统安全加固、Rollout 数据合规性校验以及底层多硬件训练引擎的适配优化**。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
今日新增的 3 条 Issue 均为缺陷报告，精准暴露了 RL 训练链路中数据与接口层面的安全隐患：

*   **[安全] 数据代理未授权访问导致 SSRF 漏洞** ([#1549](areal-project/AReaL Issue #1549))
    *   **详情**：`inference-service` 的 data proxy 暴露了 `/register_model` 接口，由于缺乏鉴权，攻击者可利用任意上游 URL 构造服务端请求伪造（SSRF）。这是今日最需警惕的安全漏洞。
*   **[Bug] 格式错误的采样凭证进入 PPO Rollouts** ([#1552](areal-project/AReaL Issue #1552))
    *   **详情**：由 Provider 提供的底层采样数据（如 token IDs 和 logprobs）在未经过滤的情况下进入 PPO 训练循环。数据不一致将直接导致 RL 训练发散或报错中断。
*   **[Bug] Concat 路径下 Token 前缀错位复用 Parent Evidence** ([#1551](areal-project/AReaL Issue #1551))
    *   **详情**：在实验性的上下文拼接（Concat）逻辑中，子 Prompt 未能严格保留父级 Token 前缀，导致父级的 loss mask 和采样 logprobs 发生张量投射错位。

### 4. 关键 PR 进展
针对上述 Issue 及底层训练引擎优化，社区快速响应并提交了多个修复与特性增强 PR：

**安全与数据鲁棒性修复（精准对应今日 Issue）：**
*   [PR #1550](areal-project/AReaL PR #1550)：针对 Issue #1549，强制要求 `/register_model` 接口校验 admin key，彻底封堵 SSRF 攻击面。
*   [PR #1554](areal-project/AReaL PR #1554)：针对 Issue #1552，在 vLLM 等后端的结果累加前，引入对归一化 Provider 结果的严格校验，非完整或位置不一致的采样证据将直接 Fail closed。
*   [PR #1553](areal-project/AReaL PR #1553)：针对 Issue #1551，强制要求在生成和张量递归投射前，子 Prompt 必须与父级保持精确的 Token 前缀匹配。

**底层训练与 Rollout 集成（核心特性进阶）：**
*   [PR #1547](areal-project/AReaL PR #1547)：新增 Arena Stream SWE Rollout 模式集成，支持在线数据集发现、LLM gateway 注册与任务轮询，扩展了 AReaL 的环境交互边界。
*   [PR #1406](areal-project/AReaL PR #1406)：支持在 AWEX 模式下进行 Megatron FP8 权重传输（涵盖 xccl 和同机路径），通过 FP8 直转避免隐式反量化为 BF16，大幅提升大模型权重同步效率并降低显存占用。
*   [PR #962](areal-project/AReaL PR #962)：修复 昇腾（Ascend） 分支视觉语言模型（VLM）训练中因 `vision_rlvr.py` 奖励函数导入错误导致的崩溃问题。
*   [PR #1497](areal-project/AReaL PR #1497)（已合并）：修复 Megatron 引擎中上下文并行（CP）与张量并行（TP）的监控指标对齐及梯度范数元数据问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 RLHF/PPO 训练框架，AReaL 今日的动态展现了其在迈向 **工业级高可靠与高性能** 过程中的关键演进：
1.  **对数据流契约的极致把控**：Issue #1551 与 #1552 表明，团队正在深挖多后端推理（如 vLLM）与 PPO 训练循环交互时的 Corner Cases。将“隐式数据错位”转化为“显式 Fail-Fast”校验，是保障千卡级别 RL 训练稳定性的核心门槛。
2.  **紧跟前沿的底层算力优化**：通过 PR #1406 推进 FP8 权重直转传输，证明项目在多卡通信层（避开反量化瓶颈）做了深度适配，这是支撑下一代 MoE/大参数模型 RL 训练的硬核壁垒。
3.  **开放的 Agentic RL 演进**：PR #1547 引入 SWE 环境集成，说明 AReaL 正在从传统的偏好对齐，向基于真实环境反馈的复杂智能体强化学习架构拓展，契合当下 RL 社区的发展趋势。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-21 Hugging Face TRL 项目 RL 日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，TRL 仓库共有 14 条 Issue 更新，46 条 PR 更新，无新版本发布。
- **核心动向**：今日仓库呈现高度活跃的功能迭代与底层重构。核心开发者 `qgallouedec` 集中合并了十余个 PR，全力推进 **`DistillationTrainer`（知识蒸馏）的重构**，目标是将其从实验性 API 提升为稳定 API，并对齐 GRPO 的数据格式。同时，多位开发者修复了底层分布式训练框架（FSDP2、DeepSpeed）中的 `precompute_ref_log_probs` 致命崩溃问题。

---

### 2. 版本发布
**无** （近期无新 Tag 或 Release 发布）

---

### 3. 重点 Issues
今日的 Issue 集中在稳定现有的分布式训练范式以及探索前沿的异步优化算法：

*   **[DistillationTrainer 稳定化重构计划](https://github.com/huggingface/trl/issues/6449)** [OPEN]
    *   **摘要**：鉴于近期主流大模型（Qwen3.x, DeepSeek-V4, GLM-5 等）均重度依赖 on-policy logit 蒸馏，官方决定将 `experimental.DistillationTrainer` 作为最佳候选者进行彻底重构，剥离冗余路径，将其提升为核心稳定 API。
*   **[FSDP2 下 `precompute_ref_log_probs` 崩溃](https://github.com/huggingface/trl/issues/6470)** [OPEN]
    *   **摘要**：在无 `ref_model` 且使用 FSDP2 时，前置的参考对数概率计算会在模型权重仍在 CPU 上时被触发，导致 CPU 权重与 CUDA 输入发生设备冲突。这是类似 DeepSpeed 崩溃问题在 FSDP2 中的翻版。
*   **[实现单次推行的异步优化](https://github.com/huggingface/trl/issues/6473)** [OPEN]
    *   **摘要**：社区成员请求引入 arXiv:2607.07508 论文中的异步优化方法，进一步打破 RL 训练中生成与梯度更新的同步阻塞限制。
*   **[Agent RL 训练：环境接管数据集所有权](https://github.com/huggingface/trl/issues/5903)** [CLOSED]
    *   **摘要**：提出 RFC 重构 `GRPOTrainer` 和 `AsyncGRPOTrainer` 的在线数据流。计划让环境拥有数据集，Trainer 仅负责采样 prompt，大幅增强 Agent RL 场景下的环境交互灵活性。

---

### 4. 关键 PR 进展
今日的 PR 活动几乎被 `DistillationTrainer` 重构和底层 Bug 修复主导，展示了极其严密的工程迭代节奏：

**知识蒸馏重构系列（由 Phase 0 到 Phase 3）：**
*   **[PR #6454](https://github.com/huggingface/trl/pull/6454)**：将基于 vLLM 服务器的教师模型路径抽离至独立的 `ServerDistillationTrainer` 中，理清基础 Trainer 的代码逻辑。
*   **[PR #6456](https://github.com/huggingface/trl/pull/6456)** & **[PR #6455](https://github.com/huggingface/trl/pull/6455)**：移除了基础 generalized JSD loss 中的 top-k 近似支持和 local sparse top-1 路径，保证本地教师模型始终使用完整 logits 计算精确的 JSD/KL 散度。
*   **[PR #6460](https://github.com/huggingface/trl/pull/6460)**：移除 `lmbda` 参数及离线数据补全分支，强制 `DistillationTrainer` 走向 **纯 On-policy 训练**。
*   **[PR #6461](https://github.com/huggingface/trl/pull/6461)** & **[PR #6474](https://github.com/huggingface/trl/pull/6474)**：重写数据契约，废弃旧的 `messages` 格式，全面采用与 GRPO 对齐的 `prompt` 列格式。

**核心 Bug 修复与功能完善：**
*   **[PR #6403](https://github.com/huggingface/trl/pull/6403)**：**重要修复**。修复了在 DeepSpeed ZeRO-3 环境下，DPO 和 KTO 使用 `precompute_ref_log_probs=True` 会发生的隐性崩溃问题。
*   **[PR #6122](https://github.com/huggingface/trl/pull/6122)**：修复 `OnlineDPOTrainer` 在设置 `eval_strategy="steps"` 时，因未重写 `prediction_step` 导致的 `TypeError` 崩溃。
*   **[PR #6433](https://github.com/huggingface/trl/pull/6433)**：修复 `apply_chat_template` 在处理偏好数据（如 DPO/CPO）时，因公共前缀缩短导致意外丢弃 `chosen` 开头 token 的严重隐患。
*   **[PR #6428](https://github.com/huggingface/trl/pull/6428)**：加入了对 LiquidAI 的 LFM2 和 LFM2.5 模型架构的测试覆盖（数据显示该模型每周有约 1000 次 TRL 运行记录）。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **紧贴 SOTA 模型的工程需求**：当业界顶尖模型（如 DeepSeek-V4, Qwen3.x）大规模采用 Logit 蒸馏和 GRPO 时，TRL 不仅是跟进，而是**在做深度的底层架构清洗**（如废弃历史包袱 `lmbda`，统一数据格式契约），以确保其在大规模训练时的稳定性和可维护性。
2.  **攻坚分布式训练痛点**：今日集中暴露并修复了 FSDP2 与 DeepSpeed ZeRO-3 下 `precompute_ref_log_probs` 的设备冲突和内存异常问题。解决这些痛点意味着 TRL 正在扫清多节点、超大模型 RL 训练的最后障碍。
3.  **前瞻性的 Agent RL 布局**：从环境数据所有权的解耦（#5903）到异步单次推行优化（#6473），TRL 正在打破传统“采样-更新”强绑定的 RLHF 范式，向复杂环境交互的 Agentic RL 训练平台演进。

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

### verl RL 日报摘要 (2026-07-21)

#### 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。Issues 更新达 59 条，PR 更新 22 条，无新版本发布。当前社区的重心高度聚焦于**训练与推理解耦的显存/权重管理（如 FSDP2、vLLM/SGLang Sleep 机制、Sharded Delta Sync）**以及**极致的系统级性能优化（减少 Host-Device 同步、算子合并）**，同时对 Ascend NPU 等异构硬件的适配正在快速迭代。

#### 2. 版本发布
* 今日无新版本发布。

#### 3. 重点 Issues
社区讨论与问题反馈主要集中在多模态（VLM）训练异常、多轮对话（Multi-turn）以及底层加速框架的工程落地上：

* **[Tracking] Sharded delta weight sync 路线图** (Issue [#7060](https://github.com/volcengine/verl/issues/7060))
  追踪通过 NCCL 进行的分片增量权重同步（`delta_sharded`）。这代表了 verl 在分离式 Rollout 架构下，进一步榨干 GPU 通信带宽与减少显存搬运开销的核心演进方向。
* **[bug] FSDP2 权重导出优化** (Issue [#7015](https://github.com/volcengine/verl/issues/7015))
  指出当前 FSDP2 导出参数时逐参数 `all-gather` 带来的性能损耗，提出可通过 `FSDPModule.unshard()` 批量处理以大幅降低导出成本。
* **[bug] 多轮对话训练中 Tokenization 结果不一致** (Issue [#3720](https://github.com/volcengine/verl/issues/3720))
  获 6 个点赞。开发者在 Agentic RL 场景下定位到 `sglang_rollout.py` 中拼接 assistant message 的逻辑漏洞，这可能导致 RL 训练时的 action 与实际推理轨迹出现分布偏移。
* **[bug] 使用序列并行 (SP) 与融合算子导致 log probs 计算错误** (Issue [#3723](https://github.com/volcengine/verl/issues/3723))
  指出在 SP 模式下，特定融合算子可能会导致对数概率输出异常。属于深度影响 RL 稳定性的核心数值计算 Bug。

#### 4. 关键 PR 进展
近期提交的 PR 展现了 verl 团队及社区在突破 RL 训练性能天花板方面的硬核工程产出：

* **[perf] 支持延迟梯度同步** (PR [#7095](https://github.com/volcengine/verl/pull/7095))
  FSDP 在微批次累积时不再每次都执行 `reduce-scatter`，而是推迟到最后一个微批次统一同步。这将大幅降低 PPO 训练中的通信时间墙。
* **[perf] 延迟标量指标的具体化** (PR [#7096](https://github.com/volcengine/verl/pull/7096))
  在 Actor/Critic 的微批次循环中，避免通过 `.item()` 频繁触发 Device-to-Host 同步。消除了 RL 训练循环中隐蔽但代价高昂的阻塞点。
* **[ckpt,veomni] 扩展 Sharded delta sync 支持** (PR [#7085](https://github.com/volcengine/verl/pull/7085))
  将快速分片权重同步路径从扁平的 FSDP `Shard(0)` 扩展到了支持复杂的块放置与 veomni FSDP2+EP，进一步覆盖大模型分布式训练场景。
* **[trainer] V1 Replay Buffer 驱逐/重填机制重构** (PR [#7082](https://github.com/volcengine/verl/pull/7082))
  统一了过期、DAPO 算法过滤、以及失败 Rollout 组的驱逐逻辑。提升了 Off-policy 场景下数据管道的鲁棒性。
* **[Ascend] 修复 vLLM L2 唤醒后的 MoE 通信状态** (PR [#7086](https://github.com/volcengine/verl/pull/7086))
  专门针对昇腾 NPU 硬件，修复了混合训练模式下 `engine.sleep(level=2)` 唤醒后，专家并行（EP>1）导致的输出精度异常问题。

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在从“一个支持 RLHF 的代码库”迅速进化为**“面向百亿/千亿级参数 + Agentic RL 场景的底层高性能计算框架”**。
一方面，它敏锐地解决着大模型 RL 时代最痛的显存算子平衡点（如 PR 中的 Host-Device 解耦、All-gather 批处理、减少 IPC 通信开销）；另一方面，它在多模态（VLM）长序列、多轮工具调用以及异构算力（Ascend NPU 适配）上提供了极其前沿的社区实践方案。对于需要构建生产级大规模 LLM/VLM 后训练基建的团队，verl 是当前开源生态中最具技术深度的标的之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**OpenInstruct RL 生态日报 (2026-07-21)**

**1. 今日速览**
过去 24 小时内，OpenInstruct 仓库活动处于平稳迭代期，无新版本发布。共监测到 1 条 Issue 更新和 1 条 PR 更新。整体焦点集中在** OLMo 3 模型的完整对齐复现**以及**底层异构算力（华为昇腾 NPU）的适配**上。

**2. 版本发布**
* 无新版本发布。

**3. 重点 Issues**
* **[OPEN] #1756：如何复现 OLMo 3 SFT 阶段并获取 OLMo-3-7B-Instruct？**
  * **链接**: [allenai/open-instruct Issue #1756](https://github.com/allenai/open-instruct/issues/1756)
  * **更新动态**: 该问题创建于上周，昨日产生新互动（当前共 2 条评论）。开发者希望确认当前仓库内的 SFT 脚本能否实现 OLMo-3-7B-Instruct 的端到端 1:1 复现，并特别询问了初始 Checkpoint (`BASE_CKPT`) 的正确加载路径。
  * **分析师洞察**: 这反映了开源社区对完全开源模型（如 OLMo 系列）不仅停留在“推理使用”，而是深入探究其 SFT 与后续 RLHF 阶段精确复现的强烈技术需求。

**4. 关键 PR 进展**
* **[OPEN] #1781：feat: add Ascend NPU training support (添加昇腾 NPU 训练支持)**
  * **链接**: [allenai/open-instruct PR #1781](https://github.com/allenai/open-instruct/pull/1781)
  * **更新动态**: 昨日由 `addsubmuldiv` 提交并更新。
  * **分析师洞察**: 该 PR 旨在将 OpenInstruct 的训练后端扩展至华为昇腾 NPU 生态。在英伟达算力产能受限及多模态 RL 训练成本剧增的当下，主流 RL/SFT 框架进行国产异构硬件的适配是目前底层基建的重要趋势。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
* **完全开源的对齐闭环**: OpenInstruct 由 Allen AI 维护，不仅提供 SFT 和 RL（如 PPO/DPO）的工程化代码，更是配合完全开源的 OLMo 模型，是目前罕见的提供“预训练数据 -> SFT -> 偏好对齐”全链路透明底座的框架。
* **RL 工程落地的“试金石”**: 面对快速演进的 RL 算法（如 GRPO 等），学术界和工业界亟需一个干净的基线环境来进行消融实验。OpenInstruct 始终紧跟前沿对齐策略，其代码结构高度适配大模型的 RL 训练范式，是验证 RL 算法有效性的核心基础设施。

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

**RL 日报：Gymnasium 生态追踪 (2026-07-21)**

以下是过去 24 小时内 [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 项目的动态摘要。

### 1. 今日速览
* **Issues 更新**: 3 条（2 Open, 1 Closed）
* **PR 更新**: 7 条（3 Open, 4 Closed）
* **新版本发布**: 0 个
* **核心焦点**: 向量环境（VectorEnv）自动重置的 Bug 修复已合并；官方文档持续优化，社区正积极提交基于真实策略（如 SB3）的演示 GIF；底层依赖（JAX、MuJoCo）与基准测试代码得到进一步完善。

### 2. 版本发布
* 过去 24 小时无新版本发布。

### 3. 重点 Issues
* **[#1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610) [OPEN] 请求为 Box2D 和 MuJoCo 等环境提供真实策略的演示 GIF**
  *背景*: 官方文档中的环境演示目前多为随机动作。维护者 `jkterry1` 呼吁社区提交使用基础算法（如 Stable-Baselines3）训练出的有效策略的 GIF，以提升文档的直观性和专业度。
* **[#1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607) [CLOSED] MuJoCo 环境忽略 XML 文件中的 `offwidth` 和 `offheight` 参数？**
  *背景*: 开发者在自定义无人机第一视角（Front-facing）相机时，发现 XML 中设置的分辨率参数未生效。该问题已在最新的 PR 中得到定位和修复（见下方 PR #1642）。
* **[#1445](https://github.com/Farama-Foundation/Gymnasium/issues/1445) [OPEN] 1.2.0 版本中 AsyncVectorEnv 自动重置导致崩溃**
  *背景*: 核心漏洞追踪。在异步向量化环境中，当触发自动重置（autoreset）时，`reward`、`truncation` 和 `termination` 的数据类型未统一为 numpy array，导致后续堆叠操作崩溃。该问题近期已由开发者提交修复（见 PR #1643）。

### 4. 关键 PR 进展
**🔥 Bug 修复与鲁棒性增强**
* **[#1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643) [CLOSED] 修复 AsyncVectorEnv NEXT_STEP 自动重置的数据类型问题**
  修复了 Issue #1445 中的崩溃 Bug。当部分 worker 处于自动重置状态返回标量（scalar）零奖励时，强制将其与其他返回数组的 worker 对齐，防止 `step_wait` 阶段的 dtype 冲突。
* **[#1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642) [CLOSED] 修复 MuJoCo 环境覆盖 XML 离屏帧缓冲（Offscreen Framebuffer）尺寸的问题**
  修复了 Issue #1607。此前 `_initialize_simulation()` 会用默认的渲染窗口尺寸（480x480）硬覆盖 XML 中定义的更大缓冲区尺寸，现已移除该强制覆盖逻辑。

**📝 文档与社区贡献**
* **[#1646](https://github.com/Farama-Foundation/Gymnasium/pull/1646) [OPEN] 为 CarRacing 环境使用训练好的策略 GIF**
  响应 Issue #1610。将 CarRacing 环境文档中“原地打转”的随机智能体 GIF，替换为基于 SB3 训练的智能端到端控制演示。

**⚙️ 底层架构与性能评估**
* **[#1506](https://github.com/Farama-Foundation/Gymnasium/pull/1506) [OPEN] 为 `FuncEnv.__init__` 添加 `params` 参数并更新 JAX wrappers**
  重要的底层重构。允许调用者显式提供参数实例，优化了 JAX 标量和向量适配器的参数广播机制（使用 `in_axes=None` 替代 vmapping），进一步理顺了 JAX 后端的渲染与清理逻辑。
* **[#1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640) [OPEN] 添加向量化环境步进基准测试**
  在 `gymnasium/utils/performance.py` 中引入 `benchmark_step_vector`，用于精确测量向量化环境每秒的步数吞吐量，对于 MJX 等高性能环境的调试至关重要。
* **[#1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584) [OPEN] 添加 MuJoCo 参数自定义教程**
  新增面向新手的教程，演示如何通过 `gym.make` 的 kwargs 修改 `HalfCheetah-v5` 的 `ctrl_cost_weight` 并观察其对奖励组件的影响。

*此外，Dependabot 机器人自动发起了 GitHub Actions 依赖升级 ([#1647](https://github.com/Farama-Foundation/Gymnasium/pull/1647))，但已被关闭。*

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **底层向量化机制的极致打磨**：从近期修复的 `AsyncVectorEnv` 自动重置 Bug 可以看出，Gymnasium 正在极力消除高并发、异步采样时由于不同环境状态（Reset vs Running）导致的数据类型和形状边缘错误，这对于依赖大规模采样的现代 RL 算法（如 PPO/SAC）的稳定性至关重要。
2. **深度拥抱 JAX 与硬件加速**：PR #1506 和基准测试 PR #1640 表明，项目不仅仅是 API 标准，更在底层积极适配 JAX 生态（如优化 `FuncEnv` 的参数广播），以支持基于 MJX 等下一代物理引擎的高速环境迭代。
3. **“文档即门面”的生态建设**：通过引入真实策略的 GIF (#1610, #1646)，Gymnasium 正在降低初学者的认知门槛。展示“训练好的智能体长什么样”能有效提升框架的吸引力，巩固其作为 RL 入口级标准的地位。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-07-21)**

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库共处理 **7 个 PR**，无新增 Issues 或 Release。核心动态集中在**底层 API 的现代化重构**（如环境注册表更替、`AgentSelector` 引用修复）以及**经典 Atari/Butterfly 环境的渲染与物理引擎优化**。

### 2. 版本发布
**无新版本发布。**
注：随着旧环境创建 API 的废弃 PR (#1403) 合并，项目距离下一次 Minor/Major 版本更新已非常接近。

### 3. 重点 Issues
过去 24 小时无新增 Issue。社区当前的重心偏向于核心代码库的清理与合并，以解决底层历史遗留问题。

### 4. 关键 PR 进展
今日的 PR 进展分为**API 架构升级**与**环境机制/视觉重构**两大类：

**🔧 架构与底层 API 升级**
*   **[CLOSED] chore: deprecate old env creation API** ([#1403](https://github.com/Farama-Foundation/PettingZoo/pull/1403))
    *摘要*：按计划废弃旧版环境创建 API，并修复了 `parallel_env` 注册表中包含无效条目的 Bug。这是规范多智能能环境调用的关键一步。
*   **[CLOSED] docs: update docs & tutorials to use env registry** ([#1404](https://github.com/Farama-Foundation/PettingZoo/pull/1404))
    *摘要*：全面更新官方文档与 Jupyter 教程，统一切换至全新的环境注册表 API，并修复了 MyST 文档中的失效链接，同步进行了版本号 Bump。
*   **[OPEN] fix: give AgentSelector ownership of its agent order** ([#1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400))
    *摘要*：修复了一个严重的引用陷阱（`AgentSelector.reinit()` 未深拷贝列表，导致外部修改会影响智能体决策顺序）。通过赋予其所有权管理并补充回归测试，增强了轮转机制的鲁棒性。

**🕹️ 环境物理与渲染优化**
*   **[OPEN] Fix cooperative_pong ball bounce physics (v7)** ([#1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398))
    *摘要*：重构 `cooperative_pong` 的碰撞物理引擎。旧逻辑通过将球瞬移至碰撞面来处理碰撞，丢失了单步内的穿透距离；新逻辑修复了物理表现，消除了视觉跳跃。
*   **[OPEN] Add configurable center obstacle size to Pursuit** ([#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393))
    *摘要*：为 Pursuit 环境新增 `center_box_size` 参数，支持按网格数自定义中心障碍物大小（甚至可设为无障碍图），极大地增强了任务的拓扑可配置性。
*   **[OPEN] pursuit: render agents as squares instead of circles** ([#1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399))
    *摘要*：将 Pursuit 环境中的智能体渲染图形从圆形恢复为实心方形，使其符合早期（预移植 PyGame 阶段）的视觉标准，降低视觉遮挡干扰。
*   **[OPEN] Add pygame rendering to Hanabi** ([#1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380))
    *摘要*：为 Hanabi（花火）环境引入定制的像素级卡牌渲染引擎，彻底替换了原本基于 OpenSpiel 状态字符串的纯控制台（`ansi`）文本输出，大幅提升了可观测性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 Farama-Foundation 的核心组件，PettingZoo 相当于多智能体强化学习（MARL）领域的 Gymnasium。
从今日的动态可以看出，项目正在经历一次**由内而外的现代化蜕变**：
1. **底层接口的标准化**：废弃混乱的旧版 API、收敛环境注册表、修复 `AgentSelector` 的隐藏副作用，这些看似枯燥的重构，是为了让多智能体环境的 API 接口（AEC 与 Parallel 模式）像 Gymnasium 一样稳定，这是构建上层 MARL 算法库（如 CleanRL, Tianshou）的基石。
2. **基准环境的精细化打磨**：Hanabi 引入图形化渲染、Pursuit 增加地形配置项、Pong 修复碰撞物理。这说明开发团队不仅在做代码维护，更在着力解决 MARL 环境长期存在的“视觉不友好”和“物理引擎不精确”问题。
无论你是研究多智能体合作（如 Hanabi, Cooperative Pong）还是追逐博弈（Pursuit），PettingZoo 依然是目前最标准、最值得跟进的开源试验台。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>