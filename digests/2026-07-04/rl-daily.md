# RL 开源生态日报 2026-07-04

> 生成时间: 2026-07-03 22:18 UTC | 覆盖项目: 15 个

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

当前强化学习（RL）开源生态正呈现出显著的分化与融合趋势。以 TRL、verl、AReaL 为代表的核心基础设施正引领大模型 RLHF/RLAIF 的工程化边界；slime、OpenRLHF、ROCK 和 ROLL 则在具身轨迹、异构算力适配及沙盒环境调度等细分领域深耕。与此同时，以 Gymnasium、Tianshou、rl_games 为代表的传统经典 RL 框架进入了稳定的底层维护或文档完善期。整个生态的焦点已从“基础算法实现”彻底转向“超大规模异步集群调度、异构硬件兼容与复杂多模态/Agent 探索”。

## 各项目活跃度对比

*注：以下数据基于过去 24 小时（2026-07-04）各项目 GitHub 的实际更新统计。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 17 | 63 | 0 | 聚焦 vLLM 原生迁移与跨训练器多模态对齐，重构核心底层通信。 |
| **verl** | 17 | 19 | 0 | 死磕底层硬骨头，全力修复分布式/MoE 权重同步 bug 与昇腾生态适配。 |
| **AReaL** | 7 | 9 | 0 | 深水区攻坚高并发在线 RL 系统调度，完善异步双消费者队列与评估闭环。 |
| **slime** | 4 | 9 | 0 | 解决多轮 Agent 深度轨迹痛点，紧跟 SGLang 最新 MoE PD 分离架构。 |
| **ROCK** | 2 | 4 | 0 | 优化高并发容器调度性能，构建严谨的 Sandbox 归档生命周期管理。 |
| **Open Instruct** | 1 | 2 | 0 | 逐步解耦内部集群绑定（支持 Local/Slurm），融合 GRPO 与在线策略蒸馏。 |
| **rl_games** | 0 | 2 | 0 | 强化具身智能基座，上游整合 PBT 机制并修复 Triton 底层算子 Bug。 |
| **Gymnasium** | 2 | 0 | 0 | 趋于平稳，社区发力真实策略 GIF 演示与 MuJoCo 物理引擎自定义教程。 |
| **OpenRLHF** | 1 | 0 | 0 | 暴露并亟待解决混合解码器架构在 DeepSpeed ZeRO-3 下的切分兼容难题。 |
| **ROLL** | 0 | 1 | 0 | 深度适配国产昇腾算力，剥离脆弱依赖，完善多模态视频处理链路。 |
| **Tianshou** | 1 | 0 | 0 | 处于版本稳定期，核心精力转向大规模文档重构以降低学术/工业门槛。 |
| **CleanRL / SB3 等** | 0 | 0 | 0 | 过去 24 小时无实质代码活动。 |

## 共同关注的研究与工程方向

**研究侧信号：**
- **在线策略自蒸馏（OPSD/OPD）的崛起**：Open Instruct 和 verl 均在本日推进将 OPSD 嵌入 GRPO 或现有 teacher_loop 的进度。利用强教师模型直接干预弱模型在 On-policy 采样阶段的探索，正成为解决 RL 奖励稀疏和探索崩溃的主流前沿解法。
- **Agent 复杂长轨迹控制**：slime 重构深度多轮对话的递归限制（DFS），TRL 支持外部环境直接接管 Reward 计算，标志着 RL 算法正从“单步偏好优化”加速向“通用 Agent 自主探索与多轮工具调用”演进。
- **多模态对齐扩展**：视觉/音频模态在 GRPO/DPO 中的深度融合正在统一化（如 TRL 统一 Data Collators），同时传统 RL（如 ROLL）也在强化视频解码的预处理鲁棒性。

**工程/基础设施侧信号：**
- **推理后端的深度解构与原生融合**：vLLM 0.22+ 原生的权重同步 API 正在成为标准，TRL、AReaL 均在跟进；同时，针对 MoE 架构的 Prefill-Decode (PD) 分离路由及 R3 传输机制（结合 Mooncake RDMA）成为 verl、slime 等框架提升 RLHF 吞吐量的共识。
- **分布式训练与异构硬件的排雷**：大集群多节点下的 NaN 崩溃（如 verl 输出死循环 `!!!`）、多线程死锁，以及新型算力（昇腾 A2/A3、NPU）和新型模型架构（Qwen3.5 混合解码器）引发的底层显存/通信调度（ZeRO-3/CP>1）问题，是当前大厂工程团队投入精力最多的隐形战场。

## 差异化定位分析

- **大模型 RLHF 全栈基座**：**TRL** 定位为全场景、高易用性的算法孵化器，积极抹平各模态与训练器间的代码差异；**verl** 则充当硬核底层胶水层，强项在于打通 Megatron/vLLM/TorchTitan 等重型分布式框架与多芯片生态的壁垒。
- **在线 RL 与高并发调度先锋**：**AReaL** 极致聚焦于工业级大模型在线训练的状态机管理，以 `StalenessManager` 和双消费者队列构筑极高吞吐场景下的可靠性护城河；**slime** 则精准定位 Agent 复杂环境交互与长上下文的高维控制痛点。
- **沙盒与算力环境基础设施**：**ROCK** 完全下沉到容器底层，构建具有严密状态流转（Pending->Archived）的 Kubernetes RL Job 系统；**ROLL** 则定位于多模态视频处理与国产化算力替代的排头兵。
- **经典与具身 RL 基石**：**rl_games** 绑定 NVIDIA Isaac 生态，死磕高维连续控制与底层 GPU/Triton 算子；**Tianshou** 与 **Gymnasium** 则坚持极简、不封装细节的学术透明度，维持传统状态空间/物理引擎的标准 API 基底。

## 社区热度与成熟度

开源 RL 项目呈现出明显的“马太效应”与“成熟代差”：
- **高度活跃，承担探路者角色**：TRL（63 PRs）与 verl 承担了生态最前沿的踩坑与定标任务，社区不仅有大量使用报错，还有极高频的核心代码重构，处于技术红利期。
- **稳态高价值输出**：AReaL、slime、Open Instruct 属于在特定细分方向（如在线异步、Agent、评估闭环）具有极强工程执行力的项目，PR 质量高且针对性强。
- **成熟平稳期**：rl_games、Gymnasium、Tianshou 已成为行业标准设施，代码迭代放缓，重心转向文档优化（Tianshou 重构、Gymnasium 悬赏 GIF），这是项目高度成熟的标志。
- **停滞/静默期**：CleanRL、PettingZoo、SB3、torchtune 无实质活动，处于版本间休眠或维护停滞状态。

## 值得关注的趋势信号

1. **“权重同步”之战决定上限**：RLHF 系统最大的通信开销与脆弱点在于 Actor 与 Rollout 引擎间的参数同步。果断弃用自研服务端，全面拥抱 vLLM 原生 `update_weights`（如 TRL 停止支持 vLLM 0.15）及分离式 R3 路由（如 verl/AReaL），将决定下半场大规模训练的吞吐天花板。
2. **架构演进倒逼底层重写**：MoE 模型的 aux/z-loss 梯度爆炸（verl 修复），以及 Qwen3.5 等引入的 Hybrid Decoder 结构，直接击穿了 DeepSpeed ZeRO-3 等传统切分机制的假设（OpenRLHF 遭遇权重静默冻结）。这要求分布式 RL 框架必须针对每一个新主干模型进行底层张量级的深度重构。
3. **多硬件后端解绑成为刚需**：受算力供给与地缘因素影响，对华为昇腾（Ascend A2/A3 架构）等异构芯片的原生适配正从“政治正确”转变为国内大厂的“刚需基础”。verl 和 ROLL 等高强度的 NPU 适配工作，正在填补 CUDA 生态以外的工程空白。
4. **Eval 与探索的解耦**：传统在线 RL 难以兼顾模型探索与客观基准评测。AReaL（引入版本控制的留出法）与 Open Instruct（闭环 Helium 安全评测集）的演进，预示着未来 RL 系统需标配抗遗忘、可复现的独立评估链路。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL (alibaba/ROLL) 强化学习开源生态 2026-07-04 日报摘要：

### 1. 今日速览
* 过去 24 小时项目整体活跃度呈低位平稳运行，无新增 Issue 及版本发布。
* 核心维护力量聚焦于底层异构算力（华为昇腾 Ascend）的生态兼容与部署体验优化，共有 1 条 PR 更新。

### 2. 版本发布
* **本周无新版本发布**。

### 3. 重点 Issues
* 过去 24 小时**无新增或更新的 Issue**。

### 4. 关键 PR 进展
* **PR #471 [OPEN] doc : remove incompatible decord dependency and update ascend doc** (作者: UsernameFull)
  * **GitHub 链接**: [alibaba/ROLL PR #471](https://github.com/alibaba/ROLL/pull/471)
  * **技术摘要**: 此 PR 旨在修复并完善昇腾 Ascend A2/A3 Docker 环境的兼容性。主要改动包括：
    1. **依赖剔除**：移除了与 Ascend 硬件不兼容的 `decord` 库，将视频读取后端平滑切换至 `torchvision`。
    2. **资源调度配置**：更新了 Docker 运行命令，新增了 `nofile` ulimit 设置以解除文件描述符限制。
    3. **硬件挂载**：在设备挂载列表中新增了 `/dev/davinci8` 至 `/dev/davinci15`，以完整支持 A3 架构的算力调用。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **多模态/视频 RL 场景的工程落地**：通过将视频解码后端从 `decord` 切换为 `torchvision`，ROLL 正在解决多模态强化学习中数据预处理环节的底层依赖脆弱性问题，提升了框架的鲁棒性。
* **深度适配国产异构算力（NPU）**：随着 LLM+RL 训练对算力需求的激增，ROLL 持续跟进昇腾 Ascend A2/A3 芯片的底层适配（如 davinci 设备挂载与环境配置）。对于关注算力国产化替代、寻求脱离纯 NVIDIA CUDA 生态的 RL 研究者和工程团队而言，ROLL 提供了极具价值的开源落地参考。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态日报 - 2026.07.04**

### 1. 今日速览
过去 24 小时内，ROCK 仓库共更新 **2 条 Issues**（1 新增，1 关闭）和 **4 条 Pull Requests**（2 更新，1 关闭）。今日无新版本发布。开发与维护焦点集中在 **Sandbox 容器兼容性修复**（Alpine/musl 环境）以及 **核心调度性能优化**（网络连接池复用）。

### 2. 版本发布
* **无新版本发布** (Releases: 0)

### 3. 重点 Issues
* **[#1206] [OPEN] [Bug] Sandbox fails to start on Alpine images with pre-installed bash**
  * **作者**: zhangjaycee
  * **摘要**: 暴露了一个底层基础设施兼容性 Bug。在定制化的 Alpine/musl 镜像中，若 APK 包数据库不一致（例如混合了不同 Alpine 版本的仓库源），即便系统已预装 `bash`，容器的入口脚本 (`docker_run.sh`) 也会因 `set -o errexit` 机制导致 `apk add bash` 执行失败并立即退出，阻断 Sandbox 的启动。
  * **链接**: https://github.com/alibaba/ROCK/issues/1206

* **[#1204] [CLOSED] perf(admin): reuse shared httpx client for registry manifest probes**
  * **作者**: zhongwen666
  * **摘要**: 提出了管理端的性能优化建议：原逻辑在每次探测 registry manifest 时都会新建 `httpx.AsyncClient`，导致在高并发启动 Sandbox 时产生大量重复的 TLS 握手与 TCP 连接开销。建议替换为生命周期共享的客户端并支持配置最大连接数（`max_connections=300`）。该 Issue 已随 PR 合并关闭。
  * **链接**: https://github.com/alibaba/ROCK/issues/1204

### 4. 关键 PR 进展
* **[#1207] [OPEN] fix(rocklet): skip bash installation when already present in musl containers**
  * **作者**: zhangjaycee
  * **摘要**: 针对 Issue #1206 的热修复。优化了 `docker_run.sh` 脚本逻辑，在执行 `apk add bash` 前增加预检机制：若检测到 `bash` 已存在，则跳过安装。此修复避免了因 APK 数据库损坏导致的非零退出，确保后续 glibc 兼容层安装和 rocklet 的正常启动。
  * **链接**: https://github.com/alibaba/ROCK/pull/1207

* **[#1205] [CLOSED] perf(admin): reuse shared httpx client for registry manifest probes**
  * **作者**: zhongwen666
  * **摘要**: 上述 Issue #1204 的代码实现。引入了模块级的共享 `_probe_client` 并通过懒加载初始化。有效降低了高并发下发时的网络性能损耗。该 PR 已合并。
  * **链接**: https://github.com/alibaba/ROCK/pull/1205

* **[#1095] [OPEN] feat(archive): integrate archive lifecycle into sandbox state machine, operator, and reconciler**
  * **作者**: zhangjaycee
  * **摘要**: 重型特性更新，持续迭代中。将 Sandbox 的归档生命周期深度集成到了底层状态机、Kubernetes Operator 和 Reconciler 中。定义了 `pending` / `running` / `stopped` / `archiving` / `archived` / `deleted` 6 个状态流转，对 RL 训练中环境状态的持久化与资源回收至关重要。
  * **链接**: https://github.com/alibaba/ROCK/pull/1095

* **[#1175] [OPEN] feat: job sdk support tracking**
  * **作者**: FangwenDave
  * **摘要**: 作业追踪特性开发，持续更新中。旨在为 RL Job SDK 提供全链路的状态追踪支持。
  * **链接**: https://github.com/alibaba/ROCK/pull/1175

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻坚 RL 底层基础设施稳定性**：RL 训练高度依赖沙盒环境的动态构建与分发。从今日修复的 Alpine/musl 环境启动 Bug 可以看出，项目正在解决定制化容器环境下的硬核兼容性问题，这为大规集群部署 RL 任务提供了可靠性保障。
2. **优化高并发调度性能**：通过复用 HTTP Client 优化镜像探测机制（PR #1205），证明项目对高并发下的网络与系统调用开销进行了细粒度治理，这对于海量并发实例的 RL 探索任务至关重要。
3. **完善的状态机与 SDK 抽象**：从 PR #1095 和 #1175 的进展可见，ROCK 正在构建极为严谨的 Sandbox 生命周期管理（从运行到归档）以及 Job SDK 追踪能力。这些底层抽象是构建大规模、可容错、可断点续训的 RL 系统的核心壁垒。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 2026-07-04 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
- **Issues 动态**：过去 24 小时更新 4 条，其中包含 1 个新上报的异步/采样逻辑 Bug，其余为历史环境配置与异步训练报错排查。
- **PR 动态**：过去 24 小时更新 9 条，核心研发方向高度集中于 Agent 轨迹重构、底层分布式部署（Placement Group）修复以及 CI/Docker 环境维护。
- **Releases**：过去 24 小时无新版本发布。

---

### 2. 版本发布
**无**。项目当前主干分支开发与 Bug 修复并行，推测官方正在为下一个大版本（目前 Issue 提及处于 `v0.3.0` 阶段）积累核心特性。

---

### 3. 重点 Issues
今日更新的 Issues 暴露了当前项目在 **非 Docker 部署的依赖管理** 以及 **复杂异步 Rollout 调度** 方面的痛点：

- **[Bug] 过采样关停时 Judge 进程未销毁导致训练卡死** [#2176](https://github.com/THUDM/slime/issues/2176)
  - **详情**：在非 partial rollout 场景下，采样结束理应丢弃多余数据并进入训练。但目前的逻辑下，若 Judge（奖励评估）未执行完毕，会阻塞后续流程，直至触发 Judge 超时。该缺陷直接影响训练吞吐效率。
- **[Bug] fully async 模式下 update weights 后 Rollout 网络连接失败** [#2168](https://github.com/THUDM/slime/issues/2168)
  - **详情**：开发者反馈在完全异步训练模式下，权重更新后触发 `connection failed` 报错，而同步模式运行正常。异步权重同步时的通信稳定性仍待加强。
- **[Question] 非 Docker 环境安装支持匮乏** [#1793](https://github.com/THUDM/slime/issues/1793)
  - **详情**：由于底层强依赖 `sglang`、`flashinfer` 以及特定版本的 `torch`，从零搭建纯物理机环境极易引发依赖冲突（详见 [#222](https://github.com/THUDM/slime/issues/222)）。社区强烈呼唤官方完善非 Docker 态的依赖锁与安装指南。

---

### 4. 关键 PR 进展
今日 PR 进展主要反映了 slime 对 **长上下文/多轮 Agent 训练** 及 **MoE 架构（PD 分离/R3 路由）** 的适配支持：

- **核心架构重构：Agent 多轮轨迹性能优化**
  - PR [#2174](https://github.com/THUDM/slime/pull/2174): 重构 `MessageNode`，将轨迹叶子节点的遍历从递归 DFS 改为迭代 DFS。有效解决了深度多轮 Agent 对话场景下容易触及 Python 递归深度限制（Stack Overflow）的痛点。
- **SGLang 深度适配：MoE 架构与 PD 分离支持**
  - PR [#2173](https://github.com/THUDM/slime/pull/2173): 同步了 SGLang 的最新补丁，增加了对 Prefill/Decode (PD) 路由专家 的支持，并在采样样本中校验合并后的 `routed_experts` 形状。
- **底层分布式容错修复**
  - PR [#2170](https://github.com/THUDM/slime/pull/2170): 修复了在 `--debug-rollout-only` 模式下，使用外部引擎时本地 Placement Group 布局计算错误导致的崩溃问题。
- **传输层性能提升**
  - PR [#1709](https://github.com/THUDM/slime/pull/1709): 引入 Mooncake RDMA 传输层支持，旨在加速 Rollout 数据在分布式节点间的通信延迟（对大规模 RLHF 至关重要）。
- **CI 与文档维护**
  - PR [#2172](https://github.com/THUDM/slime/pull/2172) 更新训练端依赖；PR [#2171](https://github.com/THUDM/slime/pull/2171) 优化本地 CI 捕获环境上下文以防误报；PR [#2142](https://github.com/THUDM/slime/pull/2142) 修复低精度文档死链。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击 Agent RL 痛点**：从 Issue #2176（过采样控制）和 PR #2174（深度多轮轨迹 DFS 遍历）可以看出，slime 正在实打实地解决**LLM Agent 的强化学习（RL for Agents）**中极其复杂的轨迹控制与状态管理问题，这是当前 RL 生态最具挑战的落地方向。
2. **紧跟底层 LLM 推理技术栈**：项目对 SGLang 的跟进极快（PR #2173）。目前开源 RL 框架对 MoE 架构的 PD 分离及 R3 Routed Experts 的支持极为稀缺，slime 正在填补这一空白。
3. **探索高性能通信边界**：通过引入 Mooncake RDMA 传输（PR #1709），slime 正在尝试突破传统 TCP 网络在 Rollout 历史数据同步时的瓶颈，展现了其面向超大规模集群训练的野心。

*（注：以上链接均指向 github.com/THUDM/slime，建议配合源码细节查阅。）*

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 强化学习开源生态 2026-07-04 日报摘要：

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **7 条 Issues** 和 **9 条 PRs**，无新版本 Release 发布。今日的活动高度集中在 V2 在线工作流（Online Workflows）的深度优化与缺陷修复上，核心贡献者 `jszzr` 提交了大量针对 V2 架构吞吐量、轨迹交付和评估机制的关键代码。同时，社区内关于 2026 Q2 路线图的讨论已进入收尾阶段。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
今日的 Issues 主要暴露了在线 RL 模式和 V2 控制器在极限或边界场景下的系统级缺陷：

- **V2 在线工作流的安全性与状态一致性问题**
  - **[#1481](https://github.com/areal-project/AReaL/issues/1481)**: V2 在线会话绕过了 `RolloutController` 的消费者容量限制，导致已完成的轨迹被滞留在本地 `deque` 中，绕过了 `StalenessManager`（过期管理器），存在训练过期轨迹的严重风险。
  - **[#1475](https://github.com/areal-project/AReaL/issues/1475)**: 报告 Direct-export v2 工作流错误地将在线回调任务排入队列，导致回调机制行为异常（👍:1）。
- **系统监控与分布式同步异常**
  - **[#1477](https://github.com/areal-project/AReaL/issues/1477)**: `RolloutControllerV2` 在执行导出操作时静默丢弃了工作流的统计数据（如 reward），导致监控指标缺失。
  - **[#1439](https://github.com/areal-project/AReaL/issues/1439)**: 在 A800 GPU 上使用 ControllerV2 进行权重同步时出现 NCCL 超时问题。
- **功能演进**
  - **[#1479](https://github.com/areal-project/AReaL/issues/1479)**: 提议为在线 RL 增加基于版本校验的留出法评估，填补当前在线模式下无法对固定验证集进行评估的空白。
- **里程碑追踪**
  - **[#1302](https://github.com/areal-project/AReaL/issues/1302)**: 2026 Q2 路线图追踪 Issue 已关闭，标志着 Q2 阶段性开发任务正式完成并进入 Q3 冲刺期。

### 4. 关键 PR 进展
今日的 PR 更新展现了开发团队对上述 Issues 的极速响应，以及底层基础设施的完善：

- **V2 在线架构修复与增强**
  - **[#1480](https://github.com/areal-project/AReaL/pull/1480)**: 实现了带完整性检查的 V2 留出法评估路径，允许在在线 PPO 采样期间同步评估固定的任务数据集。
  - **[#1476](https://github.com/areal-project/AReaL/pull/1476)**: 核心架构重构，分离了 callback（在线训练消费）和 pull trajectory（内置工作流拉取）的交付逻辑，解决直连导出的队列污染问题。
  - **[#1483](https://github.com/areal-project/AReaL/pull/1483)**: 为 V2 在线工作流暴露了显式的主推 rolled-out 网关地址，增强了初始化失败后的重试语义。
  - **[#1478](https://github.com/areal-project/AReaL/pull/1478)**: 修复 `RolloutControllerV2` 返回空字典的问题，正确导出控制器进程内的工作流统计指标。
- **RL 算法与底层调度**
  - **[#1472](https://github.com/areal-project/AReaL/pull/1472)**: 使 V2 全参数 RL 正确遵循显式的 `actor.weight_update_mode=disk` 设置，修复了非共置 SGLang rollouts 强制使用 AWEX 的问题。
  - **[#1389](https://github.com/areal-project/AReaL/pull/1389)**: 底层引擎重大特性：为 vLLM 后端引入 R3（Rollout routing replay）支持（要求 vLLM 版本 ≥ 0.22.0）。
  - **[#1474](https://github.com/areal-project/AReaL/pull/1474)** (已合并): 修复 Hermes 在线示例中因单例归一化导致任务奖励被置零的致命 Bug。
  - **[#1482](https://github.com/areal-project/AReaL/pull/1482)**: 修复本地启动器对 `LD_PRELOAD` 的环境变量继承与处理逻辑。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **向高并发在线 RL 深水区迈进**：AReaL 正在解决工业级大模型在线强化学习中最棘手的问题——**轨迹过期**、**异步回调污染**和**资源容量调度**。其对 `StalenessManager` 和双消费者队列（回调 vs 显式拉取）的严格隔离设计，表明项目正为极高吞吐量的 RLHF/RLAIF 场景提供可靠性保证。
2. **深度适配主流推理引擎生态**：PR #1389 对 vLLM 最新版 R3 特性的跟进，以及针对 SGLang 非共置架构（ disaggregated architectures）的权重更新优化（PR #1472），证明 AReaL 正在致力于打破训练与推理框架之间的墙，保持与底层硬件及推理引擎的步调一致。
3. **闭环评估体系的完善**：传统的在线 RL 往往难以兼顾探索（在线采样）与可复现性评估。社区正在积极引入版本控制的留出法评估，这将为大模型 RL 训练提供更加稳定、抗遗忘的指标追踪手段。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (huggingface/trl) RL 生态日报 - 2026.07.04

## 1. 今日速览
- **Issues 活跃度**：过去 24 小时内共有 17 个 Issue 更新，包含多个底层训练机制的深度讨论与报错。
- **PR 活跃度**：共有 63 个 PR 更新，核心团队（@qgallouedec 等）正大力推进跨训练器对齐、vLLM 原生权重同步迁移以及实验性训练器的清理。
- **版本发布**：过去 24 小时无新版本发布（Releases: 0）。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
今日的 Issue 集中在 GRPO 训练稳定性、多模态支持以及底层环境集成方面：

- **GRPO 默认参数与算法预期不符**：开发者指出 TRL 中 `max_completion_length` 默认值为 256，会导致常规推理任务（如原论文需要 1024 长度）静默崩溃，提议修改默认值为 512。([Issue #6263](https://github.com/huggingface/trl/issues/6263))
- **多轮工具调用破坏视觉模型训练**：GRPO 在处理 Qwen 视觉模型（VLM）的多轮 tool calling 时，`_tool_call_loop` 中对 `pixel_values` 的切片处理存在硬编码错误，导致视觉塔崩溃。([Issue #6274](https://github.com/huggingface/trl/issues/6274))
- **vLLM 联合训练出现 NaN 崩溃**：当 vLLM 返回 NaN token logprob 时，GRPO Trainer 未正确进行空值拦截，直接传入 `torch.tensor()` 导致训练崩溃。([Issue #6166](https://github.com/huggingface/trl/issues/6166))
- **SFT Chat Template 规范推进**：为实现 `assistant_only_loss=True`，亟需为常见模型家族补充带有 `&#123;&#37; generation &#37;&#125;` 标记的模板，目前社区正在追踪此项进度。([Issue #5471](https://github.com/huggingface/trl/issues/5471))

## 4. 关键 PR 进展
今日的 PR 展现了 TRL 向“异步化、统一化、高性能化”演进的技术路线：

- **vLLM 原生权重同步迁移启动**：针对 vLLM 0.22+ 版本引入的原生权重同步 API，核心开发者提交了迁移过渡路径，准备弃用 TRL 维护的定制化 vLLM 服务端。同时引入批量 `update_weights` 接口，并计划**停止支持 vLLM 0.15**。([PR #6110](https://github.com/huggingface/trl/pull/6110), [PR #6128](https://github.com/huggingface/trl/pull/6128), [PR #6239](https://github.com/huggingface/trl/pull/6239))
- **跨训练器与多模态对齐**：
  - 将 DPO 的 MoE（混合专家）辅助损失机制和 `quantization_config`（QLoRA 支持）对齐至 KTO 训练器。([PR #6275](https://github.com/huggingface/trl/pull/6275), [PR #6276](https://github.com/huggingface/trl/pull/6276))
  - 统一 DPO/SFT/KTO/Reward 的 Data Collators，并继续推进 Audio（音频）模态支持。([PR #6178](https://github.com/huggingface/trl/pull/6178), [PR #5830](https://github.com/huggingface/trl/pull/5830))
- **RL 环境机制增强**：引入“环境拥有奖励（Environment-owned reward）”机制，如果环境定义了 `get_reward()`，即可直接作为奖励来源，使得 `reward_funcs` 变为可选；同时支持每个数据集样本独立选择其交互环境。([PR #6238](https://github.com/huggingface/trl/pull/6238), [PR #6002](https://github.com/huggingface/trl/pull/6002))
- **实验性算法增减**：
  - **新增**：引入在策略自蒸馏训练器（OPSD）以及带 DOPD 优势差距路由的 SDFT。([PR #5990](https://github.com/huggingface/trl/pull/5990), [PR #6237](https://github.com/huggingface/trl/pull/6237))
  - **清理**：移除实验性的 PAPO (Perception-Aware Policy Optimization) 训练器，原因是过去 6 周内使用量为 0 且维护成本高。([PR #6235](https://github.com/huggingface/trl/pull/6235))

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 正在积极扫清大模型强化学习工程化落地中的几个核心痛点：
1. **极致的推理后端融合**：果断拥抱并迁移至 vLLM 的原生权重同步 API，放弃了造重复的轮子，这将极大降低多卡 GRPO/PPO 训练时的通信开销和代码脆弱性。
2. **拓展 RL 训练的物理边界**：近期的 PR 正在将 TRL 从单纯的“文本偏好优化工具”转变为一个真正的**通用 Agent 强化学习框架**——允许外部环境直接控制 Reward、支持多环境动态选择、修复多轮 Tool Call 逻辑，并逐步纳入视觉/音频模态。
3. **降低算法实验门槛**：持续整合前沿的蒸馏与对齐算法（如 OPSD、SDFT），并通过系统性的 Collator 和 Loss 机制统一，提升了底层代码的复用率，是研究新一代 RLHF/RLAIF 算法最稳健的基座之一。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

以下是为您生成的 2026-07-04 Tianshou 强化学习生态日报摘要：

### 1. 今日速览
过去 24 小时内，Tianshou 仓库整体活跃度趋于平稳。无新增代码提交（PR）或版本发布，仅有 1 条历史 Issue 状态发生更新（已关闭）。当前项目处于上一个开发周期的收尾与稳定期。

### 2. 版本发布
*   **无新版本发布**。距下一个主要版本的正式推出仍在规划与准备中。

### 3. 重点 Issues
*   **Issue #1056** `[CLOSED]` **[good first issue, documentation] Improve and extend Documentation Content**
    *   **作者**: MischaPanch | **创建于**: 2024-02-15 | **最近更新**: 2026-07-02
    *   **动态**: 该文档改进与扩展议题于今日正式关闭。
    *   **内容摘要**: 该 Issue 旨在为 Tianshou 下一个主要版本发布做准备，通过完善文档来降低工业界和新研究人员的上手门槛。背景提及了项目曾在 PyData Berlin 上进行了该会场唯一的强化学习主题分享，亟需更完整、格式更规范的文档生态来承接社区流量与降低入门曲线。
    *   **链接**: [thu-ml/tianshou Issue #1056](https://github.com/thu-ml/tianshou/issues/1056)

### 4. 关键 PR 进展
*   **过去 24 小时无 PR 更新**。核心代码库当前无新增或合并中的功能分支。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Tianshou 近期代码合并频率较低，但它依然是当前开源强化学习生态中不可或缺的基础设施，其核心价值在于：
*   **高度的执行确定性**：相较于高度封装的框架，Tianshou 始终坚持“不隐藏算法细节”的理念，使用 PyTorch 原生 Python 代码实现 RL 算法。研究者能够精确控制训练循环中的每一个张量操作，这在当前 RL 算法复现难度高、对底层数据流敏感的生态中极具价值。
*   **学术验证的权威性**：凭借极高的执行效率，Tianshou 已经成为众多顶会论文背后的隐性标准实验平台，提供了非常可靠的 Benchmark 基准。
*   **接口设计的生命力**：其经典的 `Collector`（数据收集）与 `Policy`（策略更新）解耦设计，深刻影响了后续许多强化学习库的架构思路。随着多模态强化学习和具身智能的崛起，这种高扩展性的底层架构依然具备极强的适用性。持续观察 Tianshou 的版本演进，有助于把握学术级 RL 算法工程化的最佳实践方向。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**RL 开源生态日报：OpenRLHF (2026-07-04)**

**1. 今日速览**
过去 24 小时内，OpenRLHF 仓库整体活跃度较低，无新增代码提交与版本发布。社区反馈聚焦于大模型在分布式训练框架下的底层适配问题，收到 1 条关于 Qwen3.5 系列模型在 ZeRO-3 策略下权重冻结异常的 Issue。

**2. 版本发布**
*   **无新版本发布**。近期无 Release 产生，项目当前主线代码仍处于稳定迭代周期。

**3. 重点 Issues**
*   **#1258 [OPEN] Qwen3.5-9B and above trained under zero3 have most weights frozen**
    *   **作者**: allen-dc
    *   **技术摘要**: 报告了 Qwen3.5-9B 及以上参数模型在 DeepSpeed ZeRO-3 (DS-Z3) 训练时的严重 Bug。由于 Qwen3.5 采用了混合解码器架构（`self_attn` 与 `linear_attn` 交替），开发者曾通过 `Actor.__init__` 调用 `set_z3_leaf_modules` 来规避 DS-Z3 预取失败的问题。但在实际运行中，该 Workaround 导致 DS 参数切分逻辑失效，致使模型绝大部分权重在 RL 训练阶段被意外冻结（不参与梯度更新）。
    *   **影响**: 直接影响基于 Qwen3.5 架构的中大规模模型的 RLHF/PPO 训练有效性，是一个高危的底层工程问题。
    *   **链接**: [OpenRLHF/OpenRLHF Issue #1258](https://github.com/OpenRLHF/OpenRLHF/issues/1258)

**4. 关键 PR 进展**
*   **无活跃 PR**。过去 24 小时内无新增、合并或更新代码，暂无针对上述 #1258 问题的官方代码级修复提交。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
随着 Qwen3.5 等下一代大模型开始采用**混合解码器架构**（Hybrid Decoder，如融合线性注意力机制），RL 框架（如 OpenRLHF）与底层分布式训练框架（如 DeepSpeed ZeRO-3）的兼容性正面临新的技术边界挑战。
Issue #1258 暴露出：当模型结构突破传统的纯 `self_attn` 堆叠时，ZeRO-3 的参数预取与切分机制极易产生隐性错误（如权重静默冻结）。OpenRLHF 作为主流的 RLHF 基础设施库，其如何快速响应并修复此类由底层架构异构引发的 Bug，将直接决定后续基于混合架构大模型强化学习落地的稳定性，是追踪当前 RL 工程前沿绕不开的风向标项目。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-07-04 RL 日报摘要：

### 1. 今日速览
- **Issue 动态**：过去 24 小时共有 17 条 Issue 更新，社区讨论热烈，主要集中在训练时的 `NaN` 异常崩溃、多节点/多线程资源耗尽，以及底层 Megatron/vLLM 的兼容性排查。
- **PR 进展**：过去 24 小时共有 19 条 PR 更新，其中开发重心明显聚焦于 **昇腾生态兼容、底层 Bug 修复（尤其针对权重同步与 MoE 模型）、以及 vLLM/SGLang 分布式推理解构**。
- **版本发布**：无新版本发布。

---

### 2. 版本发布
**无**。当前主干持续整合底层基础设施修复与新硬件（如 Ascend NPU）适配，推测团队正在为下一个大版本（可能是 v0.8.0，依据 PR #6923）积蓄功能。

---

### 3. 重点 Issues
**a. 训练崩溃与输出“感叹号 (`!!!`)”死结**（社区高频痛点）
- **#751** & **#747** & **#727**：多个 Issue 报告在使用 GRPO/Reinforce++ 训练 PRIME 数学数据或 Qwen 系列模型时，会在特定 step 出现 KL/grad norm 变为 `NaN`，随后奖励归零，模型陷入无脑输出 `!!!`（对应 token id 为 0）的死循环。社区正在排查这是否与特定 step 的梯度爆炸或底层权重更新越界有关。

**b. 分布式与底层资源调度报错**
- **#707**：多节点训练时触发 `ActorUnavailableError` (RPC Error: Socket closed)。
- **#719** & **#730**：由多线程引起的 `pthread_create failed` 或 DataLoader worker 异常退出，社区在探讨如何正确配置环境变量以避免线程冲突死锁。

**c. 路线图与生态建设**
- **#708**：DeepSeek R1 基础设施建设社区贡献号召。
- **#5306**：将 TorchTitan 作为训练引擎后端集成至 verl 的路线图。

---

### 4. 关键 PR 进展
今日的 PR 更新展现了 verl 对复杂分布式训练边界的持续攻坚：

**a. 核心算法与推理引擎修复（高价值）**
- **PR #6813**：修复了 Mooncake 权重同步时 magic marker 覆盖数据缓冲区前 4 字节的问题，**该 bug 正是导致模型推理退化为输出连续 `!!!` 的元凶**（直接关联 Issue #751/#747）。
- **PR #6836**：修复了 Megatron + Verl 交互中，当 CP>1 (Context Parallelism) 时导致 MoE aux/z-loss 梯度爆炸的隐蔽 Bug。
- **PR #6923**：向 `release/v0.8.0` 分支反向移植修复，解决 Transformers 5 环境下 Qwen3 MoE 专家权重的 FSDP 同步问题。
- **PR #6921**：修复多轮工具调用中，由于丢失 turn separator 导致的对话拼接错误。

**b. 前沿探索与性能优化**
- **PR #6909**：引入 On-Policy Self-Distillation (OPSD) 算法，支持在 verl 现有的 teacher_loop 上进行端到端自我蒸馏。
- **PR #6243**：推进 vLLM Prefill-Decode 解构化，结合 NIXL + Mooncake 实现计算与生成的分离路由，极大提升 RLHF 的吞吐潜力。
- **PR #6916**：TorchtitanEngine 迎来重要更新，支持 `spmd_types` (PyTorch nightly)，吞吐表现超越传统 FSDP。

**c. 昇腾生态补齐**
- **PR #6924 / #6925 / #6680 / #6831**：一系列针对华为昇腾架构的文档更新、版本基线对齐 (CANN 9.0.0.B160) 及 UT/ST 测试用例补充。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **死磕底层工程硬骨头**：verl 正在解决 RLHF 训练规模化中最棘手的问题，例如多硬件后端（vLLM/SGLang/Megatron/TorchTitan）的深度耦合、多节点 CP>1 并行下的梯度异常、以及 KV Cache 显存抢占等，这些底层基建直接决定了大模型 RL 的稳定性上限。
2. **拥抱最新范式**：无论是引入 Prefill-Decode 解耦、On-Policy Self-Distillation，还是原生支持 Qwen3 MoE 等最新模型架构，verl 始终保持着对学术界和工业界前沿算法的快速工程化落地能力。
3. **跨芯片生态兼容**：项目近期高密度的 Ascend NPU 适配与 vLLM/SGLang 最新版本兼容性修复，证明其正在努力成为跨硬件、解耦式的“RL 训练胶水层”，这对于寻求算力替代方案的国内开发者而言极具战略价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-07-04）：

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库活动平稳，无新版本发布。共更新 1 条 Issue（已关闭）和 2 条 PR。技术焦点集中在 **RL 训练后端解耦（脱离原生 Beaker 限制）** 以及 **将在线策略蒸馏（OPD）深度集成至 GRPO 算法栈**。

### 2. 版本发布
* **无新版本发布**。

### 3. 重点 Issues
* **#1750 [CLOSED] Values/safety eval dataset**
  * **链接**: [allenai/open-instruct Issue #1750](https://github.com/allenai/open-instruct/issues/1750)
  * **摘要**: 社区贡献了名为 *Helium Model Worldview Benchmark* 的安全与价值观评测数据集。该数据集包含 304 组配对 Prompts，专门用于测试大模型的安全拒答率、价值观一致性、名称/提示词置换带来的偏见，并包含 50 道平衡的政治 Likert 量表测试题。该 Issue 已被官方关闭，数据集已同步至 HuggingFace。

### 4. 关键 PR 进展
* **#1751 [OPEN] Add `--launcher` flag to mason.py so non-Ai2 users can run without Beaker**
  * **链接**: [allenai/open-instruct PR #1751](https://github.com/allenai/open-instruct/pull/1751)
  * **摘要**: **基础设施改进**。为训练脚本 `mason.py` 引入了 `--launcher {beaker,local}` 标志。此前 Open Instruct 高度绑定 Ai2 自家的 Beaker 计算集群，本次更新允许非 Ai2 用户在本地或其他环境（通过完全解析的命令）无缝运行 RL 训练。该 PR 也为后续适配 Slurm 集群后端铺平了道路。
* **#1740 [OPEN] Add On-Policy Distillation (OPD) for OLMo-core GRPO**
  * **链接**: [allenai/open-instruct PR #1740](https://github.com/allenai/open-instruct/pull/1740)
  * **摘要**: **核心 RL 算法增强**。为 OLMo-core 的 GRPO（Group Relative Policy Optimization）栈添加了在线策略蒸馏层。其核心机制为：学生模型（Student）持续进行自己的 Rollout 采样，同时引入冻结的教师模型对学生的采样前缀进行打分，最后通过蒸馏损失驱使学生向教师的轨迹分布回归。这是将 RL 与 KD（知识蒸馏）结合的前沿实践。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **降低开源 RL 训练门槛**: PR #1751 打破了 Allen AI 内部集群工具的绑定，意味着更广泛的开源社区（尤其是拥有 Slurm 集群的高校和开发者）能够更便捷地复现和跑通大模型的强化学习流水线。
2. **紧跟 SOTA 算法融合趋势**: PR #1740 引入的 On-Policy Distillation (OPD) 精准踩中了当前 RL 生态的前沿痛点——**如何利用强模型指导弱模型进行高效探索**。将 Teacher scoring 无缝嵌入 GRPO 的 On-policy 采样循环中，为解决 RL 训练中的奖励稀疏和探索崩溃提供了工程级解法。
3. **闭环的 Eval 沉淀**: Issue #1750 表明项目不仅关注基础模型和算法，也在持续吸收多维度的价值安全评测集，补足 RLHF/RLAIF 生态中“评测算力”短板。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 开源生态日报：rl_games**
**日期**: 2026-07-04

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库无新增 Issue、无新版本发布，但收到 2 个高质量的核心代码提交（PR）。这两个 PR 分别聚焦于**高级训练范式（PBT）的上游整合**与**底层 Triton 算子 Bug 修复**，均由贡献者 `ViktorM` 提出。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
过去 24 小时无 Issue 更新。

### 4. 关键 PR 进展

*   **[OPEN] 将 Population Based Training (PBT) 整合至核心库**
    *   **PR**: [#359 Add Population Based Training (PBT) observers to rl_games core](https://github.com/Denys88/rl_games/pull/359)
    *   **摘要**: 将原本散落在下游环境（如 `DexPBT-lineage`、`IsaacGymEnvs` 和 `isaaclab_rl`）中的 PBT（基于种群的训练）实现上游合并至 `rl_games/common/pbt/` 目录。此举将 PBT 能力直接内置到 RL 算法核心层，解除了其对 Isaac 生态的硬依赖，使任意物理引擎后端均可直接调用 PBT 训练机制。代码保留了 BSD-3 协议溯源。
*   **[CLOSED] 修复 Triton GAE kernel 崩溃问题**
    *   **PR**: [#358 Fix Triton GAE kernel: NameError crash on triton <= 3.3 + hardening](https://github.com/Denys88/rl_games/pull/358)
    *   **摘要**: 修复了底层算子层面的严重 Bug。由于 Triton 依赖模块的 `__globals__` 解析内核符号，原代码中作用域内的 `import triton.language as tl` 会导致 Triton <= 3.3 版本（覆盖 Torch 2.4-2.7 生成环境，包含主流的 Isaac Lab 技术栈）在每次编译时抛出 `CompilationException: NameError` 崩溃。该 PR 通过将 Triton 导入和 `@triton.jit` 提升至模块级完成了修复并进行了健壮性强化。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为 NVIDIA Isaac Gym / Isaac Lab 生态长期默认且性能极强的 RL 算法库，rl_games 依然是具身智能和高维连续控制领域的**核心基座**。
今日的 PR 进展明确反映了该项目当前的两个演进方向：一是**向上游收拢高级特性**（如 PR #359 将复杂的 PBT 训练范式内置化），降低下游机器人仿真环境的代码维护成本；二是**紧跟底层硬件加速栈**（如 PR #358 积极适配并修复最新 Triton 编译器带来的 GAE 算子兼容性问题）。rl_games 始终保持在“高吞吐量 RL 训练”与“底层 GPU 算子优化”的最前沿。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 开源生态日报：Gymnasium**
**日期**: 2026-07-04

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平缓。无新增代码合并（0 PRs）及版本发布（0 Releases）。社区活动主要集中在文档与生态建设的讨论上，新增了 2 条关于文档优化和进阶教程的 Issue。

### 2. 版本发布
本日无新版本发布。

### 3. 重点 Issues
今日的 2 条 Issue 均聚焦于**文档与示例的可用性增强**，反映出社区对高质量 Demo 和进阶开发指南的需求：

*   ** [#1610] [help wanted] 为 Classic Control, Box2D 和 MuJoCo 环境提供真实策略的 GIF 展示**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)
    *   **摘要**: 核心维护者 jkterry1 发起悬赏/求助。目前官方文档中的环境演示均为随机动作（Random Behaviors），希望社区能提交 PR，利用 Stable-Baselines3 (SB3) 等基础库训练出具有合理行为的真实策略，并录制 GIF 替换现有文档素材。这是一个极佳的低门槛社区参与切入点。
*   ** [#1611] [enhancement] MujocoEnv 贡献提案（自定义环境教程）**
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1611](https://github.com/Farama-Foundation/Gymnasium/issues/1611)
    *   **摘要**: 开发者 Texas-rgb 提议为官方文档撰写一篇全新的教程，内容为“如何通过继承 `MujocoEnv` 基类来创建自定义的 MuJoCo 环境”。作者正在就此教程是否契合当前的文档路线图与维护团队进行确认。

### 4. 关键 PR 进展
过去 24 小时无新增或更新的 Pull Requests。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **RL 算法的标准化基石**: 尽管 Gymnasium 本身不实现复杂的 RL 算法，但其确立的 `Env` API 标准（如 `reset()` 和 `step()` 的返回值签名）依然是当今所有主流 RL 库（SB3, CleanRL, Tianshou 等）事实上的通信标准。
2.  **物理引擎生态的深度整合**: 从今日 Issue #1611 可以看出，社区正在持续完善对 MuJoCo 环境的工程化封装与教学。随着 MuJoCo 完全开源及底层 MPI 机制的不断优化，Gymnasium 作为最上层的 Python 接口，其文档和 API 的演进直接反映了机器人强化学习领域的最新工程实践。
3.  **健康的开源孵化循环**: 通过 Issue #1610 的求助可以看出，Farama 基金会采用了积极的“社区共建文档/示例”策略。这种清晰的 Issue 标签和明确的诉求，保持了项目库的高质量，也为新手开发者参与顶级 RL 项目降低了门槛。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>