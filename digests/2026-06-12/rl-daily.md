# RL 开源生态日报 2026-06-12

> 生成时间: 2026-06-11 22:31 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已经彻底完成了向大语言模型（LLM）及 Agent 对齐训练（RLHF/RLAIF）的重心转移。整个生态呈现出高度的分层与专业化分工：
- **算法与训练框架层**：以 HuggingFace **TRL**、字节跳动 **verl**、清华 **slime** 和阿里 **AReaL** 为代表，正在围绕大模型（特别是 MoE 架构）的分布式训练进行极致的工程压榨。
- **算力与底层调度层**：以阿里 **ROCK** 为代表，专注于解决大规模实验带来的高昂算力成本与多机分布式通信瓶颈。
- **经典强化学习与教学基座**：以 **CleanRL**、**rl_games** 为代表，继续在多智能体、游戏控制等传统 RL 领域提供极高吞吐量的单文件实现和向量化环境支持。

## 各项目活跃度对比
过去 24 小时内，LLM 对齐相关的框架占据了绝对的活跃度高地，而经典 RL 库则维持着平稳的迭代节奏。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 14 | 39 | 1 (v1.6.0) | v1.6.0发布突破 GIL 限制，重构多环境 Agent 训练支持，大幅优化显存。 |
| **verl** | 7 | 22 | 0 | 集中火力攻坚千亿级 MoE 模型的显存泄漏(OOM)与全异步调度性能瓶颈。 |
| **ROCK** | 9 | 13 | 1 (v1.9.0) | 全面演进为 RL 专用的云原生基建，引入沙盒归档与动态资源调度。 |
| **slime** | 6 | 10 | 0 | 扩展多教师蒸馏算法，深度重构日志与路由模块，向企业级 MLOps 演进。 |
| **AReaL** | 3 | 10 | 0 | 极致的显存/内存挤压（FP8直传），适配最新 MoE 架构与前沿 PPO 变体。 |
| **Open Instruct** | 0 | 1 | 1 (v0.3.0) | 核心维护者交接，保持严格的工具链标准化与模型成本追踪。 |
| **CleanRL** | 0 | 1 (状态更新) | 0 | 深入 PyTorch 底层张量内存管理，追求极致的单文件算法吞吐量。 |
| **rl_games** | 0 | 1 | 0 | 验证 EnvPool 256 并发下的多智能体自博弈与对手联盟机制。 |
| **ROLL** | 0 | 1 (关闭) | 0 | 快速跟进上游推理加速生态，修复 Ray executor 兼容性。 |
| **其他项目** | 0 | 0 | 0 | Gymnasium, OpenRLHF, SB3, Tianshou 等过去 24h 无活动。 |

## 共同关注的研究与工程方向
在今日高度活跃的项目中，社区的研发合力正集中在以下两个维度的核心痛点：

**研究侧信号：**
- **Off-policy 算法改进与蒸馏**：为了应对 On-policy RL 数据利用率低的问题，多个框架（如 slime 的 MOPD、AReaL 的 IcePop/KPop 策）正在引入高级的重要性采样校正掩码和多教师在线策略蒸馏，以稳定离线训练。
- **面向 Agent 范式的多环境交互**：随着训练目标从纯文本转向工具调用，TRL 和 verl 都在重构训练底座，支持在单次 rollout 中输出多条轨迹或对接不同 RL 环境。

**工程/基础设施侧信号：**
- **打破 Autograd 与推理引擎的内存/通信墙**：解决超大模型（如 Qwen3.5-397B）RL 训练时的 OOM 是当前最高优任务。各框架各显神通：verl 修复了 Autograd 图解绑导致的显存泄漏；AReaL 推进 Megatron FP8 直传并禁用梯度缓冲区 CPU 备份；TRL 则通过分块交叉熵直接砍掉 50% 峰值显存。
- **异步与解耦的极致压榨**：为了消除训练与推理的互相等待，TRL 通过子进程彻底解决 GIL 争抢；verl 聚焦全异步机制；而底层设施 ROCK 则通过沙盒归档/恢复机制，砍掉 RL 实验等待期间的闲置云开销。

## 差异化定位分析
尽管都在做 RL，但各项目的战略卡位已出现显著差异：
1. **TRL (HuggingFace)**：充当大模型对齐的**“事实标准”**。其定位侧重于生态兼容性与易用性，快速跟进学术前沿（如 vLLM LoRA sync），是大多数开发者的首选起步框架。
2. **verl & AReaL**：定位为**“超大规模算力集群的攻坚武器”**。直接面向千亿/万亿参数 MoE 模型的分布式训练，深度绑定 Megatron/SGLang 等高性能引擎，以及华为 Ascend/AMD ROCm 等异构硬件，解决的是极限工程边界问题。
3. **ROCK (阿里)**：跳出算法 itself，定位为**“RL 云原生编排基建”**。专注于算力成本管控、生命周期管理和网络代理，是大规模 RL 实验能够低本高效跑通的幕后推手。
4. **CleanRL & rl_games**：坚守**“高吞吐传统 RL”**阵地。不涉及复杂的 LLM 分布式策略，而是追求在 Atari、物理仿真等环境下，通过极低延迟的 Envpool 并发和底层张量优化，提供极速的算法原型验证。

## 社区热度与成熟度
- **高频发酵的 Issues（verl, TRL）**：反馈了工业界最真实的痛点。无论是 TRL 新版废弃 API 导致的模型无法收敛，还是 verl 使用全异步模式反而不如同步训练的性能 Bug，都表明大模型 RL 仍处于“高速狂飙但尚未完全定型”的阶段。
- **高度专业化的贡献者**：今日的 PR 提交者多在解决极深层的系统级问题（如 GIL 调度、FP8 通信、Ray 执行器适配），这表明 LLM RL 框架的门槛已急剧升高，彻底跨过了“调包”阶段，进入了底层系统级角力的深水区。
- **稳定的开源交接机制**：Open Instruct 在核心维护者离职的最后一天仍平稳发布了 v0.3.0 并清理了代码库，证明了海外顶级 AI 机构成熟的开源治理能力。

## 值得关注的趋势信号
1. **完全异步流水线将成为标配**：从 TRL v1.6.0 的子进程重构，到 verl 支持单 rollout 多轨迹输出，彻底消除 GPU “气泡” 的全异步机制正在从实验室走向主流框架的默认配置。
2. **针对 MoE 架构的 RL 专项优化爆发**：随着 Qwen3.6、DeepSeek-V4 等超大 MoE 模型成为主流，“逐专家流式权重同步”（verl Issue #6691）和“MTP头剥离”（AReaL PR #1403）等针对 MoE 特性的 RL 工程 hack 正在密集涌现。
3. **RL 训练基础设施的“FinOps”化**：ROCK 引入的沙盒闲置自动归档至 OSS/S3 机制是一个强烈信号。在 RL 算力成本高昂的当下，结合 K8s 进行精细化磁盘配额限制与资源热更新，将是下一代 RL 框架的必选项。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL (github.com/alibaba/ROLL) 强化学习生态项目 2026-06-12 日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 仓库整体活跃度趋于平稳。无新增 Issues，无新版本发布。开发端仅有 1 条历史 PR 状态发生更新（被关闭）。

### 2. 版本发布
- **无**。近期暂无新版本 Tag 或 Release 发布。

### 3. 重点 Issues
- **无**。过去 24 小时内未产生新的技术讨论或 Bug 反馈。

### 4. 关键 PR 进展
- **PR #455 [CLOSED] [vLLM] Fix vLLM Ray executor env var compatibility**
  - **作者**: shun001 （创建于 2026-06-04，更新于 2026-06-11）
  - **链接**: [alibaba/ROLL PR #455](https://github.com/alibaba/ROLL/pull/455)
  - **摘要**: 该 PR 旨在解决 vLLM 版本迭代导致的环境变量兼容性问题。在新版 vLLM 中，`WORKER_SPECIFIC_ENV_VARS` 的导出路径从原先的 `RayDistributedExecutor` 迁移至 `vllm.v1.executor.ray_utils`。此代码变更在适配新路径的同时，通过 fallback 机制保留了对旧版 vLLM 的向后兼容。该 PR 目前已被关闭（可能已被合并或因后续策略调整被废弃，需结合 Commit 历史确认）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在大规模 LLM/RLH 训练范式中，**推理引擎的深度集成**是决定训练吞吐量的关键瓶颈。ROLL 作为阿里开源的大规模分布式 RL 框架，其核心价值在于高效的算力调度。
从今日的 PR #455 可以看出，ROLL 团队正在**积极跟进上游推理加速生态（vLLM v1 架构）的最新变动**。vLLM 底层 Ray executor 执行逻辑的变动直接关系到分布式环境中 Actor-Inference 的通信与状态同步。ROLL 对此类环境变量兼容性的快速响应与修复，表明该项目在底层系统级容错和工程落地方面保持着高频的工程维护，对于需要构建稳定、高并发 RLHF 流水线的研究者和工程师而言，依然是值得持续追踪和采用的基础设施。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026 年 6 月 12 日 ROCK（alibaba/ROCK）开源项目日报：

### 1. 今日速览
过去 24 小时内，ROCK 项目保持高度活跃，共产生 **9 条 Issues 更新** 与 **13 条 PR 更新**，并发布了 **1 个新版本**。从代码提交趋势来看，当前项目重心集中在 **Sandbox（沙盒）生命周期管理（归档/恢复）、资源动态调度（CPU/内存/磁盘），以及网络代理与镜像加速的优化** 上。

### 2. 版本发布
*   **[Release] v1.9.0**：正式发布。该版本主要修复了 SDK 中由于 `wget -c` 导致 OSS 上传无法覆盖原有路径的问题，并清理了 v1.8.0 版本说明中的内部通信链接，同时增强了对 K8s 环境的部署支持。
    👉 [查看 Release 详情](https://github.com/alibaba/ROCK/releases/tag/v1.9.0)

### 3. 重点 Issues
*   **[Feature] 支持重启时更新 CPU/内存/磁盘资源 (#1099)**：
    提出在 Sandbox 重启（`/restart`）时，允许动态修改系统资源分配，而非仅复用初始配置。这对 RL 训练中的动态资源调度非常关键。
    👉 [Issue #1099](https://github.com/alibaba/ROCK/issues/1099)
*   **[Feature] 支持跨进程的沙盒生命周期管理 (#1088)**：
    提议在 Python SDK 层面补齐 Admin API 已有的跨进程沙盒管理能力（如通过 HTTP 调用 restart），提升 SDK 的多进程编排能力。
    👉 [Issue #1088](https://github.com/alibaba/ROCK/issues/1088)
*   **[Feature] 支持 Sandbox 归档与恢复生命周期 (#1085)**：
    指出当前停止的沙盒仍会占用 Docker 容器和磁盘空间，呼吁引入 Sandbox 归档与恢复机制，以降低大规模 RL 实验时的资源闲置成本。
    👉 [Issue #1085](https://github.com/alibaba/ROCK/issues/1085)
*   **[Bug] 自定义端口 Proxy 路由失败 (#1092)**：
    暴露了一个网络代理缺陷：当使用非 8080 端口进行 HTTP/WebSocket 通信时，Proxy 会尝试直连 `host_ip:custom_port`，由于容器端口未映射到宿主机导致连接失败。
    👉 [Issue #1092](https://github.com/alibaba/ROCK/issues/1092)

### 4. 关键 PR 进展
*   **[Feat] 实现沙盒归档存储抽象层及生命周期 (#1094, #1095, #1096)**：
    @zhangjaycee 连续提交三个重磅 PR，完整设计了沙盒归档机制。包括：
    1. 定义支持 S3/OSS 与 Docker Registry V2 的存储接口 ([PR #1094](https://github.com/alibaba/ROCK/pull/1094))；
    2. 引入包含 `archiving`/`archived` 等 6 种状态的有限状态机，并集成至 Operator 和 Reconciler ([PR #1095](https://github.com/alibaba/ROCK/pull/1095))；
    3. 支持基于闲置时间的自动归档与自动删除机制 ([PR #1096](https://github.com/alibaba/ROCK/pull/1096))。
*   **[Feat] 沙盒重启支持资源更新及面向用户的磁盘配额 (#1100, #977)**：
    [PR #1100](https://github.com/alibaba/ROCK/pull/1100) 响应了 Issue #1099，实现重启时的资源热更新；[PR #977](https://github.com/alibaba/ROCK/pull/977) 则引入了基于 Ray 调度的用户级磁盘配额与状态指标。
*   **[Fix] 修复自定义端口 Proxy 直连报错 (#1093)**：
    修复了 Issue #1092 的缺陷，将自定义端口的代理流量改为通过 Rocklet 进行路由，避免了直连未映射端口导致的失败。
    👉 [PR #1093](https://github.com/alibaba/ROCK/pull/1093)
*   **[Feat] VerifierConfig 新增 `patch` 字段 (#1098)**：
    响应 Issue #1097，为 `VerifierConfig` 增加 `patch: bool` 字段用于控制验证器的 patch 行为，并补充了单元测试。
    👉 [PR #1098](https://github.com/alibaba/ROCK/pull/1098)
*   **[Feat] 沙盒启动自动接入镜像仓库加速 (Closed) (#1082)**：
    实现了在沙盒启动时自动探测内部镜像仓库，若命中则重写镜像 URL，大幅提升大规模并发启动时的镜像拉取速度。
    👉 [PR #1082](https://github.com/alibaba/ROCK/pull/1082)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
ROCK 正在精准打击强化学习工程化落地中的**“成本”与“效率”**两大痛点：
1. **从“粗放调度”走向“精细化管控”**：随着 RL 任务规模扩大，算力成本极高。ROCK 最新引入的磁盘配额限制、基于资源的动态调度，以及沙盒重启时的资源热更新，让开发者能够像管理 K8s Pod 一样精细地榨干每一滴算力。
2. **破局闲置资源浪费**：RL 实验往往伴随大量的等待和中断。今日集中合并的 **Sandbox 归档/恢复状态机与存储抽象**，能够自动冻结闲置环境，将状态持久化至 OSS/S3，直接降低了实验停滞期间的云主机实例与存储开销。
3. **贴近 Infra 实战**：无论是修复自定义端口 Proxy 穿透问题，还是引入 Docker Registry 镜像探测加速，都表明该项目不是停留在纸面上的 Demo 框架，而是在真实的高并发 AI 集群中不断打磨其底层基础设施。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime RL 日报摘要：2026-06-12**

这里是 2026-06-12 的 slime (THUDM/slime) 开源生态日报。以下是过去 24 小时的项目动态及技术解析。

### 1. 今日速览
- **Issues 活跃度**: 更新 6 条，其中新增 2 个求助/功能讨论帖（主要涉及数据格式与模型定义）。
- **PR 活跃度**: 更新 10 条，新增多个核心功能（多教师蒸馏、MLflow支持、零GPU Router启动）及部分 CI/底层重构。
- **版本发布**: 无新版本发布（当前主要围绕 v0.3.0 进行生态完善与深度迭代）。

---

### 2. 版本发布
**无**。项目当前处于主干分支的密集开发与架构优化阶段，暂未打包发版。

---

### 3. 重点 Issues
今日的 Issue 集中在**超大模型训练性能瓶颈**、**工程环境依赖**以及**前沿模型适配**：

*   **[性能优化] 超大模型权重更新延迟问题 (Qwen3.5 397B)**
    作者反映在训练千亿模型时，SGLang 服务端的权重热切换带来了显著的请求断流时间。这是目前大规模 RL 框架的共同痛点，社区正在探讨实现 Pipeline RL 以掩盖权重更新耗时。
    链接: [THUDM/slime Issue #2007](https://github.com/THUDM/slime/issues/2007)
*   **[前沿适配] 缺失 Qwen3.6 模型定义**
    开发者关注到最新 Qwen3.6 模型的适配，但发现目前 `slime/scripts/models` 下暂无对应脚本配置，正在寻求 SFT/RL 跑通方法。
    链接: [THUDM/slime Issue #2054](https://github.com/THUDM/slime/issues/2054)
*   **[环境依赖] 向下兼容 PyTorch 2.8**
    业务方反馈由于特殊工程依赖无法升级至 v0.3.0 要求的较新版本，询问是否可以兼容 Torch 2.8，暴露出 RL 框架在企业老旧基建中落地的阻力。
    链接: [THUDM/slime Issue #2008](https://github.com/THUDM/slime/issues/2008)
*   **[工程测试] CI 覆盖度追踪 (Living Index)**
    核心开发者标记了针对多后端和部署模式的持续集成（CI）测试完善计划，表明项目在向企业级演进时对代码稳定性的重视。
    链接: [THUDM/slime Issue #777](https://github.com/THUDM/slime/issues/777)

---

### 4. 关键 PR 进展
过去 24 小时的 PR 展示了 slime 在**算法扩展**和**底层后端重构**上的双向发力：

*   **[核心算法] 引入多教师在线策略蒸馏**
    新增 MOPD 支持，允许单一学生模型利用重要性采样 (IS) 校正，同时从多个垂直领域的教师模型中蒸馏知识，以稳定离线策略训练。
    链接: [THUDM/slime PR #2051](https://github.com/THUDM/slime/pull/2051)
*   **[架构解耦] 模块化追踪接口与 MLflow 后端支持**
    重构了日志系统，引入 `TrackingBackend` 抽象类。在 WandB 和 TensorBoard 之外，原生接入 MLflow，更好满足企业级 MLOps 管理需求。
    链接: [THUDM/slime PR #1591](https://github.com/THUDM/slime/pull/1591)
*   **[底层优化] 允许零 GPU 启动 Rollout Router**
    允许设置 `--rollout-num-gpus 0` 显式进入纯路由模式。在无可更新推理引擎时自动跳过权重同步，大幅提升了框架结合外部推理集群部署的灵活性。
    链接: [THUDM/slime PR #2057](https://github.com/THUDM/slime/pull/2057)
*   **[数据工程] 数据集并行加载与日志优化**
    激活 Megatron 的 `--num-workers` 配置以实现数据并行加载，并增加数据集长度检查和模态分布的精美日志，提升调试体验。
    链接: [THUDM/slime PR #2048](https://github.com/THUDM/slime/pull/2048)
*   **[内部重构] 轨迹管理器 重构 (Draft)**
    针对多智能体和 Code Agent 场景，对 Trajectory Manager 进行底层重构，目前处于草稿状态。
    链接: [THUDM/slime PR #2005](https://github.com/THUDM/slime/pull/2005)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击大模型 RL 训练痛点**：社区和开发者正集中精力解决百亿/千亿级模型（如 Qwen3.5 397B）在 RLHF 阶段的推理引擎（如 SGLang）协同与显存/算力“气泡”问题，这代表了目前业界的最高工程门槛。
2. **超越单纯的算法实验框架**：通过引入 MLflow 集成、完善 CI 覆盖测试以及对日志、Router 解耦的深度重构，slime 正在从学术原型快速演进为成熟的、面向企业级 MLOps 的大规模训练基建。
3. **紧跟前沿算法范式**：在标准 PPO 之外，快速跟进多教师在线蒸馏（MOPD）等新算法，体现了框架在扩展前沿 RL+SF 训练范式上的高敏捷度。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026 年 6 月 12 日强化学习（RL）开源生态日报摘要。

### 1. 今日速览
* **日期**：2026-06-12
* **Issue 动态**：更新 3 条（2 条已关闭，1 条开启）。
* **PR 动态**：更新 10 条（9 条开启，1 条已关闭），开发活跃度极高。
* **Releases**：过去 24 小时无新版本发布。

### 2. 版本发布
无。目前主分支仍处于高频特性合并与缺陷修复阶段。

### 3. 重点 Issues
* **[已修复] [BUG] `clear_batches()` 在 TP/PP > 1 时导致非 DP-head 秩崩溃 (回归问题)**
  * **链接**：[areal-project/AReaL Issue #1298](https://github.com/areal-project/AReaL/issues/1298)
  * **分析**：由 #1282 引入的回归 Bug。在张量并行（TP）和流水线并行（PP）架构下，`clear_batches` 方法向非 DP-head 秩传递了位置参数导致报错。该问题已在最新的 PR #1402 中通过统一默认参数修复。
* **[探讨中] [Feature] 用于离线训练调试的 trajectory dump/replay (轨迹转储/重放)**
  * **链接**：[areal-project/AReaL Issue #1343](https://github.com/areal-project/AReaL/issues/1343)
  * **分析**：开发者提议引入轨迹重放机制。由于 RL 训练中 Rollout 阶段消耗巨大的计算与时间成本，支持轨迹转储和离线重放将极大降低算法工程师的 Debug 成本，同时需要兼顾向后兼容性。
* **[已关闭] [Feature] Google Colab A100 或基础 GPU 示例**
  * **链接**：[areal-project/AReaL Issue #1331](https://github.com/areal-project/AReaL/issues/1331)
  * **分析**：社区用户请求在受限环境（如 Colab、轻量级 GPU）下的运行示例。由于该需求偏离了框架主打的大规模分布式训练定位，且长时间处于 Stale 状态，已被官方关闭。

### 4. 关键 PR 进展
今日的 PR 更新展现了 AReaL 在**算法优化、底层显存管理、前沿模型支持以及分布式架构**四个维度的快速迭代：

* **算法机制优化**：
  * **[OPEN] #1400**：[多教师在线蒸馏](https://github.com/areal-project/AReaL/pull/1400)。支持在 On-Policy 蒸馏中为多个教师模型分配混合权重。
  * **[OPEN] #1405**：[支持 IcePop 与 KPop 策略](https://github.com/areal-project/AReaL/pull/1405)。引入两种全新的 Off-policy 校正掩码策略（双面掩码与双向二元 KL 散度掩码），用于解耦 PPO 损失。
  * **[OPEN] #1392**：[修复在线 GRPO 分组问题](https://github.com/areal-project/AReaL/pull/1392)。在 `group_size > 1` 的在线 RL 模式下，之前不相关的对话会被错误合并导致 GRPO 优势归一化静默出错，现已通过引入 `group_id` 修复。
* **计算与显存管理极致压榨**：
  * **[OPEN] #1406**：[Megatron FP8 权重传输](https://github.com/areal-project/AReaL/pull/1406)。在 AWEX 协同部署模式下实现 FP8 直传，绕过了 BF16 的隐式反量化，大幅降低通信与显存开销。
  * **[OPEN] #1393**：[禁用 Megatron 梯度缓冲区的 CPU 备份](https://github.com/areal-project/AReaL/pull/1393)。在协同训练的卸载阶段跳过梯度缓冲区的 CPU 备份（每步都会重计算），节省约 4 倍的 Host 内存。
* **前沿模型适配**：
  * **[OPEN] #1403**：[支持 Qwen3.6 MoE RL 训练](https://github.com/areal-project/AReaL/pull/1403)。使 MTP（多令牌预测）头变为可选，并在 RL 阶段默认丢弃，全面适配 `Qwen3.6-35B-A3B` 等新架构。
  * **[OPEN] #1372**：[Bailing-MoE V2.5 megatron-bridge 适配器](https://github.com/areal-project/AReaL/pull/1372)。为 Bailing-MoE V2.5 系列模型添加英伟达 `megatron-bridge` 双桥接支持。
* **分布式与底层机制**：
  * **[OPEN] #1233**：[FSDP 和 SGLang 的磁盘 LoRA 同步](https://github.com/areal-project/AReaL/pull/1233)。支持基于磁盘的 LoRA 增量权重同步，修复了此前 FSDP 错误保存整个基座模型而非 PEFT 权重的问题。
  * **[OPEN] #1316**：[改进的 Kubernetes 调度器](https://github.com/areal-project/AReaL/pull/1316)。基于 StatefulSet 实现新的分布式 Worker 编排，包含 Pod 健康诊断与回滚机制。
  * **[CLOSED] #1402**：[修复 `clear_batches` 跨引擎报错](https://github.com/areal-project/AReaL/pull/1402)。将所有引擎的 `shard_ids` 默认值设为 None，彻底解决 Issue #1298 中的并行报错问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 体现了当前大模型强化学习基础设施演进的几个核心趋势：
1. **针对 MoE 架构的深度定制**：随着 Qwen3.6 等大参数 MoE 模型的普及，RL 训练的显存与通信瓶颈凸显。AReaL 正在快速推进原生 FP8 权重传输与 MTP 头剥离机制，这表明其目标直接瞄准了下一代千亿/万亿参数模型的高效对齐。
2. **细化显存/内存控制至“零碎角落”**：从禁用梯度缓冲区 CPU 备份到改进 LoRA 增量同步，项目正在极端挤压 Host 内存和 GPU 显存，这对于在有限算力集群上进行超大模型 RLHF 至关重要。
3. **紧跟前沿 RL 算法创新**：无论是多教师在线蒸馏，还是 IcePop/KPop 等高级 Off-policy 修正策略，以及 GRPO 算法的精细度修复（在线分组隔离），AReaL 允许算法工程师以极低的试错成本接入最新的 PPO 变体，保持了极高的学术与工程结合价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习开源生态日报
**日期**: 2026-06-12 | **分析周期**: 过去 24 小时

---

### 1. 今日速览
TRL 仓库今日保持极高的活跃度，共计处理 **14 条 Issues**（3 条新建/重新开启，11 条历史更新）和 **39 条 Pull Requests**。项目迎来了重要的 **v1.6.0 版本发布**，核心研发精力集中在 AsyncGRPO 架构的性能优化（突破 GIL 限制）、多环境支持重构、显存（VRAM）优化以及代码规范性对齐上。

---

### 2. 版本发布
- **[v1.6.0](https://github.com/huggingface/trl/releases/tag/v1.6.0)**: 此次更新带来了一项重要的性能提升。`AsyncRolloutWorker` 从多线程升级为独立的**子进程**。通过拥有独立的 GIL，Trainer 的自动求导引擎不再与 `recursive_parse` / `accuracy_reward` 等函数发生 GIL 争抢，成功消除了此前导致训练延迟增加 1-5 秒的瓶颈。

---

### 3. 重点 Issues
今日的 Issue 反映了社区在 SFT 训练稳定性、GRPO 异步化及底层显存优化方面的核心诉求：

- **[Issue #5138](https://github.com/huggingface/trl/issues/5138) [🐛 bug, 🚨 Important]**: Llama-3.2-3B-Instruct 在使用新版 TRL 进行 SFT 训练时存在严重 Bug。由于新版废弃了 `DataCollatorForCompletionOnly`，导致模型无法正确学习。
- **[Issue #5975](https://github.com/huggingface/trl/issues/5975)**: 呼吁为 `GRPOTrainer` 和 `AsyncGRPOTrainer` 引入 **Adapter-only vLLM LoRA sync**。当前的同步机制需要合并权重后再全量传输给 vLLM，这在 QLoRA 场景下开销巨大且容易报错。
- **[Issue #2904](https://github.com/huggingface/trl/issues/2904) [🐛 bug, ✨ enhancement]**: 内存优化建议。当模型层与 `ref_model` 共享时，底层依然进行了复制导致显存双倍占用，建议通过引用共享来降低显存开销。
- **[Issue #4591](https://github.com/huggingface/trl/issues/4591) [CLOSED]**: 社区此前请求解耦 rollout 生成和 reward 计算（Async-GRPO），该需求已在 v1.6.0 中正式落地实现。

---

### 4. 关键 PR 进展
今日共有 39 个 PR 更新，以下是影响面最大、技术含量最高的几项进展：

#### 🚀 核心功能与重构
- **[PR #6001](https://github.com/huggingface/trl/pull/6001) & [PR #6002](https://github.com/huggingface/trl/pull/6002)**: **多环境支持重构**。解耦了环境池的初始化时间，支持在数据集中通过 `environment` 字段为每条数据指定不同的 RL 环境（多环境 GRPO 支持），大幅增强了工具调用训练的灵活性。
- **[PR #5575](https://github.com/huggingface/trl/pull/5575)**: 引入**分块交叉熵损失**。在不牺牲训练精度的前提下，寻找最佳 chunk size (256)，大幅降低 SFT 阶段高达 **50% 的峰值显存 (VRAM)** 消耗。

#### 🛠 训练算法与工程优化
- **[PR #6006](https://github.com/huggingface/trl/pull/6006)**: 修复了蒸馏训练器（GKD/GOLD/Distillation）在梯度累加下的归一化 Bug。将 JSD loss 的分母从局部 micro-batch 数量修正为全局数量，确保多卡/大 batch 训练数学等价性。
- **[PR #6007](https://github.com/huggingface/trl/pull/6007)**: 落地 Issue #5975，实现 vLLM 下的 adapter-only LoRA 同步，绕过了耗时的 `merge_adapter()` 步骤。
- **[PR #5990](https://github.com/huggingface/trl/pull/5990)**: 引入新的有策略自蒸馏训练器 (**OPSD**, On-Policy Self-Distillation)。

#### 🧹 代码清理与规范化
维护者 `qgallouedec` 提交了多个 PR 对齐代码规范，提升工程健壮性：
- **[PR #6013](https://github.com/huggingface/trl/pull/6013)**: 对齐 `AsyncGRPOTrainer` 和 `GRPOTrainer` 的 Loss 计算变量名。
- **[PR #5876](https://github.com/huggingface/trl/pull/5876)**: 简化 DPO 中的 `ref_model` 处理逻辑，统一对 PEFT 适配器和预计算参考对数概率场景的支持。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 RLHF 算力痛点**：从 v1.6.0 突破 GIL 线程锁限制，到分块 CE 节省 50% 显存，TRL 正在从算法设计转向**极致的工程性能优化**，直接解决工业界在 LLM RL 阶段遭遇的算力墙问题。
2. **面向 Agent 范式的演进**：多环境支持（PR #6001/6002）的重构，表明 TRL 正在从单一的文本生成强化学习，向支持复杂的**多工具调用、多环境交互的 Agent 训练底座**演进。
3. **对齐算法的快速迭代与收敛**：项目紧跟学术前沿与工业界最佳实践（如引入小米 MiMo 使用 MIS Loss、优化 vLLM LoRA 同步机制），保持了作为大模型对齐阶段 **"事实标准"** 的生态统治力。

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

这份报告基于 2026-06-12 verl 仓库的 GitHub 数据，为您提供 RL 开源生态的最新动态分析。

### 1. 今日速览
- **Issue 动态**：过去 24 小时更新 7 条，主要聚焦在 Qwen3.5 大模型适配、FSDP/Megatron 引擎的显存泄漏（OOM）以及异步训练性能异常。
- **PR 动态**：过去 24 小时更新 22 条，社区贡献高度活跃，集中修复显存泄漏，推进 AMD ROCm 和华为 Ascend 硬件后端支持，并引入了 MAGI Attention 等前沿算子优化。
- **版本发布**：过去 24 小时无新版本发布。

### 2. 版本发布
今日暂无新版发版。社区当前主要精力集中在处理超大模型（如 Qwen3.5-397B、DeepSeek-V4）的分布式训练与工程适配，预计相关修复和新特性将在未来版本中合并。

### 3. 重点 Issues
今日的 Issue 暴露了在训练百亿/千亿级参数模型及使用复杂异步策略时的几个核心工程痛点：

- **显存泄漏导致 OOM（高优）**：使用 LoRA 和长序列进行训练时，引擎 actor update 模块在微批次处理中出现 GPU 显存泄漏。原因是 `model_output` 和 metrics 暴露了 autograd 图。社区已迅速响应。
  - [Issue #6696](https://github.com/verl-project/verl/issues/6696) [CLOSED]
  - [Issue #6698](https://github.com/verl-project/verl/issues/6698) [OPEN]
- **超大 MoE 模型权重同步 OOM**：在使用 Megatron-bridge 将 Qwen3.5-397B 的 actor 权重同步至 SGLang 时，融合的 `gate_up_proj`（约 8.6 GiB）会触发 OOM。开发者呼吁支持“逐专家流式处理”。
  - [Issue #6691](https://github.com/verl-project/verl/issues/6691) [OPEN]
- **全异步机制性能 Bug**：在 `fully_async` 模式下，trainer 和 rollouter 的 `idle_ratio` 接近 0，但实际性能反而不如减半资源的同步训练设置，疑似底层的 update 逻辑存在异常。
  - [Issue #6693](https://github.com/verl-project/verl/issues/6693) [OPEN]
- **底层依赖兼容性冲突**：Qwen3.5 FSDP GRPO 官方脚本依赖 vLLM 0.18.0 / torch 2.10，但目前没有兼容的 flash-attn wheel 可用，阻断了环境配置。
  - [Issue #6662](https://github.com/verl-project/verl/issues/6662) [OPEN]

### 4. 关键 PR 进展
PR 端展现出 verl 极强的工程迭代速度和跨硬件生态支持：

- **核心训练引擎修复**：
  - **Autograd 图解绑**：修复微批次中的显存泄漏，对 `model_output` 和 loss metrics 执行 `detach`，彻底解决长序列 LoRA 场景的 OOM。（[PR #6699](https://github.com/verl-project/verl/pull/6699), [PR #6697](https://github.com/verl-project/verl/pull/6697) CLOSED）
  - **vLLM LoRA 权重更新修复**：修复了非合并模式下 LoRA 权重从复用的 IPC 缓冲区克隆时引发的 `cudaErrorIllegalAddress` 崩溃。（[PR #6688](https://github.com/verl-project/verl/pull/6688)）
- **异构算力与底层算子重构**：
  - **ROCm 平台支持**：新增专用的 `PlatformROCm` 后端，为 AMD 显卡提供底层设备支持。（[PR #6692](https://github.com/verl-project/verl/pull/6692) CLOSED）
  - **华为 Ascend 生态全面打通**：密集提交了 NPU 平台的夜间测试（如 qwen2-30b-moe-r3、qwen3.5），修复日志路径并更新最佳实践文档，表明 verl 正深度拥抱昇腾算力。（[PR #6585](https://github.com/verl-project/verl/pull/6585), [PR #6637](https://github.com/verl-project/verl/pull/6637), [PR #6640](https://github.com/verl-project/verl/pull/6640) CLOSED）
- **算法与性能前沿探索**：
  - **引入 MAGI Attention**：为 SFT 和 GRPO 训练引入基于前缀树的共享前缀去重机制，针对 Agent 长上下文场景加速注意力计算。（[PR #6689](https://github.com/verl-project/verl/pull/6689)）
  - **全异步 Agent Loop**：支持在全异步流水线中，单个 rollout 内输出多条轨迹，极大提升推理采样效率。（[PR #6271](https://github.com/verl-project/verl/pull/6271)）
  - **确定性训练**：为 vLLM rollout 和 reward model 引入完全的确定性支持，保证同配置下奖励曲线的比特级对齐，利于学术复现。（[PR #6572](https://github.com/verl-project/verl/pull/6572)）

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **直击“超级模型”的 RL 工程痛点**：随着 Qwen3.5-397B 等超大 MoE 模型成为主流，RL 训练的瓶颈已从算法转移到显存通信调度。verl 社区正在快速产出工程解法（如逐专家流式权重同步），是目前解决大模型 RL 落地最前沿的试验田。
2. **“全异步”机制的快速演进**：RL 训练中 GPU 利用率低下是行业通病。verl 正在深度重构 `fully_async` 模式（如支持单次 rollout 多轨迹），致力于将训练与推理的互相等待降至最低，这直接决定了 RL 算法的迭代成本。
3. **卓越的异构硬件包容性**：英伟达生态之外，verl 正系统性地承接 AMD ROCm 和华为 Ascend 的适配需求，频繁的 NPU CI 测试表明它正致力于成为一个硬件无关的、企业级的 RL 赋能平台。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

这里是为您生成的 2026-06-12 Open Instruct 项目 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，Open Instruct 项目更新集中在版本发布与代码库维护上。共合并/发布 **1 个新版本**（v0.3.0），新增 **1 个 PR**，**0 个 Issue** 更新。核心看点是项目迎来了重要版本迭代，同时项目维护者发生人事变动。

### 2. 版本发布
*   **[v0.3.0] 重大更新与维护者交接** ([Release 链接](https://github.com/allenai/open-instruct/releases/tag/v0.3.0))
    *   **维护者变动**：这是现任维护者在 Ai2（Allen Institute for AI）的最后一天，也是其负责的最后一个版本。项目后续的维护主体将发生过渡。
    *   **功能新增 (Added)**：在 `open_instruct/judge_utils.py` 的 `PRICE_PER_MILLION_TOKENS` 字典中添加了 `minimax-m3` 模型。这一改动顺应了最新大模型生态的发展，便于在基于模型评判或自动化对齐时，精确追踪 MiniMax 最新旗舰模型的 Token 成本开销。

### 3. 重点 Issues
*   **无更新**。
    *   过去 24 小时内，[Issues 面板](https://github.com/allenai/open-instruct/issues) 无新增或活跃讨论。

### 4. 关键 PR 进展
*   **[#1722] 清空历史 CHANGELOG.md 记录** ([PR 链接](https://github.com/allenai/open-instruct/pull/1722))
    *   **作者**: finbarrtimbers
    *   **状态**: [OPEN]
    *   **摘要**: 配合刚刚发布的 v0.3.0 版本，此 PR 旨在重置 `CHANGELOG.md`。按照标准的版本控制规范，保留了文件头部说明以及标准的段落结构（Added, Changed, Deprecated, Removed, Fixed），但清空了历史内容，为下个版本的开发周期做准备。

### 5. 为什么这个项目在当前 RL 生态值得继续关注
*   **RLHF 工具链的标准化与透明度**：Open Instruct 是 Ai2 主导的开源后训练/对齐核心工具链。其对代码库的高标准维护（如严格的 CHANGELOG 管理和 Token 成本追踪），体现了工业级 RLHF 实践的严谨性。
*   **模型生态的快速跟进**：v0.3.0 中迅速集成了对 `MiniMax-M3` 模型的成本追踪支持，表明该项目在作为 LLM 评判/自动化反馈工具时，具备极强的模型包容性与迭代速度。
*   **开源生态的生命力**：尽管迎来了核心维护者的离职，项目依然能顺畅推进重大版本发布（间隔 3 个月的“大版本”）并按部就班进行代码库清理。这表明 Ai2 的开源机制足够成熟，项目并未因个人变动停滞，仍是观察开源大模型 RL 训练演进的重要风向标。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026-06-12 CleanRL 项目生态日报摘要：

### 1. 今日速览
过去 24 小时内，CleanRL 生态整体活动平稳。无新增 Issue，无新版本发布。项目维护的重心集中在底层性能优化，开发者 @srygaard 提交的性能优化 PR（#552）在昨日迎来了关键性状态更新。

### 2. 版本发布
*   **无新版本发布**。目前库的核心 API 和实现保持稳定。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。当前社区反馈处于静默期，未发现新的 Bug 报告或功能请求。

### 4. 关键 PR 进展
*   **PR #552: [perf] 避免 `ppo_atari_envpool`, `pqn_atari_envpool`, `ppo_rnd_envpool` 和 `ppo_procgen` 中的张量内存拷贝**
    *   **状态**: Open（昨日发生状态推进）
    *   **作者**: @srygaard
    *   **技术摘要**: 这是一个深度的底层性能优化。该 PR 指出，当前 Pipeline 在处理 `envs.step()` 返回的数据时，由于不当使用了 `torch.tensor()` 导致了不必要的底层内存拷贝。优化后将消除这一开销，直接提升上述高频环境交互算法（尤其是结合 Envpool 的 Atari 和 Procgen 任务）的吞吐量和运行效率。
    *   **链接**: [vwxyzijn/cleanrl PR #552](https://github.com/vwxyzjn/cleanrl/pull/552)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 CleanRL 今日数据平淡，但 PR #552 完美体现了该项目在当前 RL 开源生态中的核心壁垒与不可替代性：
1.  **极致的“单文件”可读性与性能的平衡**：不同于高度封装的 RL 库（如 Stable-Baselines3 或 RLlib），CleanRL 坚持算法的单文件实现。该 PR 证明，开发者依然可以在不破坏代码直观结构的前提下，深入到 PyTorch 底层的张量内存管理机制（如 `torch.tensor()` vs `torch.from_numpy()` 的机制差异）进行极致的压榨。
2.  **紧跟 SOTA 训练基建**：该 PR 涉及的 `envpool`、`pqn`（Phasic Queue Network）以及 `rnd`（Random Network Distillation）都是当前解决样本效率和分布式交互的前沿组件。
3.  **极佳的“源码级”学习与魔改价值**：当研究人员或工程师需要对特定 RL 算法进行 Pipeline 级别的魔改时，CleanRL 提供了最透明的操作平面。此类底层性能优化的持续合入，保证了它始终是高阶 RL 实践者进行快速原型验证的最佳基座。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL 生态日报：rl_games 项目动态**
**日期**: 2026-06-12

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库整体活动聚焦于核心多智能体环境的底层对接与自演化训练验证。无新增 Issue 或版本发布，项目作者 Denys88 提交了一项针对 `dm_control` 2v2 足球环境的高阶自博弈 PR。

### 2. 版本发布
*   **无新版本发布**（近 24 小时内）。

### 3. 重点 Issues
*   **无新增或更新的 Issues**。当前社区未产生需要维护者干预的新技术阻塞或讨论。

### 4. 关键 PR 进展
*   **[#354] [OPEN] dm_control soccer 2v2 self-play with opponent league (EnvPool)**
    *   **作者**: [Denys88](https://github.com/Denys88)
    *   **链接**: [Denys88/rl_games PR #354](https://github.com/Denys88/rl_games/pull/354)
    *   **技术摘要**: 此 PR 实现了基于 EnvPool（配合 `Denys88/envpool#1`）的 `BoxheadSoccer2v2-v1` 环境的多智能体自博弈训练架构。核心实现包括：
        1.  **单策略多智能体控制**：使用单一共享 PPO 策略同时控制主场队伍。
        2.  **高并发计算**：在 256 个并行匹配赛中同步进行训练，充分利用 EnvPool 的向量环境加速优势。
        3.  **对手联盟机制**：客场队伍由包含 8 种不同类型的对手联盟构成（涵盖启发式追逐者等脚本化智能体），用于打破多智能体训练中的策略循环，提升主策略的鲁棒性与泛化能力。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **极致的吞吐量与向量化支持**：rl_games 始终保持业界顶级的 GPU 利用率与并行计算支持（如本 PR 展示的 256 并行环境），是验证高吞吐量 RLHF 或复杂连续控制任务的极佳基线。
*   **多智能体自博弈的前沿落地**：对手池/联盟训练在学术界的 AlphaStar、OpenAI Five 等项目中已被验证，但工程实现极其复杂。rl_games 正在将“多类型对手联盟 + 单策略 PPO”轻量化并整合进开源生态，为 MARL（多智能体强化学习）的工程落地提供了极具参考价值的实现路径。
*   **底层的 EnvPool 深度协同**：项目作者同步维护和拓展 EnvPool 底层接口，确保了从环境步进到神经网络梯度计算的端到端低延迟，对追求训练极速迭代的 RL 研究者具有持续吸引力。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>