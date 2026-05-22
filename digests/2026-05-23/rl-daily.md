# RL 开源生态日报 2026-05-23

> 生成时间: 2026-05-22 22:17 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL）开源生态呈现出明显的“两极分化”与“焦点收敛”态势。面向 LLM 后训练的基础设施项目（如 TRL, verl, AReaL, slime）正处于极度活跃的快速迭代期，核心全面转向超大规模分布式的工程极限优化与复杂 Agent 场景适配；而传统的经典 RL 算法库（如 Stable Baselines3, CleanRL, Tianshou 等）则处于稳定维护甚至静默期。整个生态的重心已从“算法验证”彻底转移到“大规模工业化落地”。

## 各项目活跃度对比

*(注：以下为过去 24 小时内具备实质性活动的项目，OpenRLHF、SB3、Tianshou 等无活动项目已省略)*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 13 | 20 | 0 | 修复底层隐蔽数值陷阱，押注异步架构与推理后解耦 |
| **verl** | 6 | 23 | 0 | 进军多轮 Agent RL 深水区，深度重构多硬件/多后端解耦 |
| **AReaL** | 2 | 7 | 0 | 引入前沿 Muon 优化器，压榨 IPC 显存通信极限 |
| **slime** | 1 | 7 | 0 | 适配前沿 MoE 架构，攻克跨节点“训推分离”增量同步瓶颈 |
| **ROCK** | 6 | 7 | 1 | 聚焦生产级高可用，下沉 K8s 资源调度与数据库状态持久化 |
| **Open Instruct**| 0 | 3 | 0 | 打通 GRPO 训练到 Beaker 集群的 MLOps 自动化闭环 |
| **ROLL** | 1 | 1 | 0 | 紧跟 SOTA MoE 架构，强化 RLVR 场景的细粒度轨迹追踪 |
| **torchtune** | 0 | 1 | 0 | 修复分布式初始化前的日志系统 rank 冲突，打磨 Recipe 架构 |
| **CleanRL** | 1 | 0 | 0 | 重申“单文件零依赖”初心，面临模块化复用的架构抉择 |
| **Gymnasium** | 1 | 0 | 0 | 筹备 v1.0.0 里程碑，推进 MuJoCo-v5 标准化文档建设 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **复杂与多轮 Agent RL 的崛起**：研究焦点正从单轮的 PPO/GRPO 对齐，转向多轮工具调用（如 verl 暴露的格式崩溃问题）与多轨迹输出的复杂交互 RL 场景。
2. **MoE 架构的深度适配**：针对混合专家模型的 RL 训练成为前沿阵地。包括 slime 对 Gemma4 MoE 的支持，以及 verl 和 AReaL 不约而同引入的 `R3 (Rollout Routing Replay)` 机制，专门解决异步训练中 MoE 路由不一致导致的崩溃。
3. **前沿优化算法的快速基建化**：AReaL 原生集成了利用 Newton-Schulz 迭代的 **Muon 优化器**，展现了框架对极客级前沿训练算法的极强敏锐度。

**工程/基础设施侧信号：**
1. **极致的通信与显存压榨**：异步 RL 中的权重同步延迟成为头号公敌。AReaL 引入 `CUDA IPC` 零拷贝通信，slime 实现基于 Disk+NCCL 双通道的 `delta weight sync`，均旨在击穿跨节点“训推分离”的带宽瓶颈。
2. **异步与训练/推理引擎深度解耦**：框架正积极打破传统 RL “生成与更新串行”的阻塞瓶颈。如 TRL 为 AsyncGRPO 引入 Continuous Batching 并探索 OpenAI API 兼容接口；verl 引入统一平台抽象层以兼容多异构硬件。
3. **细粒度过程追踪成为刚需**：生态正在从宏观的指标监控向微观的 Trace 级演进。AReaL、Open Instruct 和 ROLL 同步接入了 HuggingFace 的 `Trackio`，以支持 Rollout 行为的白盒化追踪，辅助排查 Reward Hacking。

## 差异化定位分析

1. **TRL (HuggingFace)**：定位为**最广泛兼容的“开箱即用”上层建筑**。侧重于快速跟进上游生态，解决数值稳定性（如伪 KL 梯度修复）与 API 标准化，是中小型团队与学术界的首选。
2. **verl (字节跳动) & AReaL (inclusionAI)**：定位为**深水区万卡级“重型攻坚底座”**。深入到 Megatron 底层算子、FSDP2 CPUOffload 显存控制与 CUDA IPC，专攻极致性能榨取和极大规模分布式训练。
3. **slime (智谱) & ROLL (阿里)**：定位为**紧贴 SOTA 大模型演进的实战框架**。核心亮点在于第一时间适配自家或最新的超大规模稠密/MoE模型（如 Qwen 3.6, Gemma4），在工程实现上极度重视跨数据中心的存算分离与增量同步。
4. **ROCK (阿里)**：定位为**生产级 RL 编排调度器**。重心不在算法底层，而在分布式系统的状态持久化（DB重连）、K8s 配额限制与配置继承，填补了 RL 工程化中的基础设施运维空白。

## 社区热度与成熟度

1. **高频迭代与高优响应**：TRL 与 verl 展现了惊人的开发吞吐量（单日 PR 处理量在 20+ 左右），且对隐蔽的底层 Bug（如 vLLM IS 比例方差缩放、Agent loop 失败静默训练）能在 24 小时内迅速定位甚至提交修复 PR。
2. **生态工具链的默契协同**：HuggingFace 不仅是模型库，其周边工具（如 Trackio）正加速向各主流框架（Open Instruct, ROLL, AReaL）渗透，形成更紧密的开源生态闭环。
3. **经典库的维护停滞**：CleanRL、Gymnasium 等经典库活跃度极低，反映了 RL 领域的重心已完全由“小规模环境下的经典算法验证”转移至“大模型后训练体系”。Gymnasium 主要靠 MuJoCo-v5 的文档更新维持 1.0.0 的发布筹备；CleanRL 则面临着内部代码复用与极简架构之间难以调和的尴尬境地。

## 值得关注的趋势信号

1. **“训推分离”成为超大规模 RL 的共识架构**：随着模型向 MoE 和数百亿参数演进，将推理引擎与训练引擎物理分离、仅同步增量权重，正在取代传统的“单集群混合部署”模式，成为下一代 RL 基建的核心架构。
2. **底层数值与逻辑防御进入“深水区”**：社区关注的 Bug 已不再是简单的 API 报错，而是 `Zero-std 奖励引发伪梯度`、`IS 比例方差随生成长度缩放` 等极度隐蔽的数值陷阱。这标志着 LLM RL 工程已进入极其硬核的深水区。
3. **跨芯片与跨引擎的“插件化”演进**：大模型 RL 框架正极力摆脱对单一硬件或特定推理引擎的依赖。通过构建 Platform Abstraction Layer，未来的 RL 底座将能无缝兼容 Ascend NPU、寒武纪 MLU 等多芯片及 vLLM/SGLang 等多推理后端。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-23）：

# ROLL RL 生态日报 (2026-05-23)

## 1. 今日速览
过去 24 小时，ROLL 仓库保持低频但高质量的技术互动。未产生新的版本发布，社区焦点集中于**前沿 MoE 架构的算法适配**以及**底层训练可观测性的增强**。新增 1 条关于 Qwen 3.6 MoE 模型支持情况的 Issue 询问，以及 1 项由 Hugging Face 团队提交的关于实验轨迹追踪的 PR。

## 2. 版本发布
- **无新版本发布**。核心主干代码目前处于稳定态。

## 3. 重点 Issues
- **#449 [OPEN] 支持Qwen 3.6 MOE模型GRPO吗？**
  - **作者**: chenlongxiabc
  - **摘要**: 社区开发者询问 ROLL 框架当前是否已支持针对 Qwen 3.6 MoE 这一最新混合专家模型的 GRPO（Group Relative Policy Optimization）训练，并寻求相关训练脚本的参考。
  - **分析**: MoE 架构因其显存分布与计算通信比的特性，在 RLHF 阶段的适配一直是工程难点。该 Issue 直接反映了前沿大模型研发团队对 ROLL 框架在复杂结构模型上强化学习能力的迫切需求。
  - **链接**: [alibaba/ROLL Issue #449](https://github.com/alibaba/ROLL/issues/449)

## 4. 关键 PR 进展
- **#450 [OPEN] Add Trackio rollout trace logging**
  - **作者**: abidlabs (Hugging Face 团队成员)
  - **摘要**: 该 PR 接入了 Trackio（Hugging Face 推出的免费、本地优先的实验追踪库）的 rollout 轨迹日志记录功能。在现有 Trackio 指标追踪器的基础上，添加了轨迹级别的日志支持，并具体实现了 RLVR（Reinforcement Learning from Verifiable Rewards）rollout 生成过程的记录。
  - **分析**: 训练过程的“白盒化”是 RL 算法 debug 的核心痛点。此 PR 将 ROLL 的可观测性粒度从宏观 Metrics 下沉到了微观的 Rollout Trace 层级，结合 RLVR 场景，将极大便利开发者分析模型在数学/代码等可验证任务上的策略探索过程。
  - **链接**: [alibaba/ROLL PR #450](https://github.com/alibaba/ROLL/pull/450)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 框架在当前的 LLM 强化学习开源生态中占据着独特且关键的位置，原因如下：
1. **紧跟 SOTA 算法与底层架构**: 从 Issue #449 可以看出，ROLL 正在或已经准备承接超大规模 MoE 模型（如 Qwen 3.6）在 GRPO 等 SOTA 对齐算法上的训练需求。这表明其底层的张量并行、序列并行与显存调度机制具备极强的工程上限。
2. **构建极佳的工具链生态**: PR #450 展现了项目对“开发者体验”的重视。与 HuggingFace 等顶级开源社区生态的深度集成（从基础的 Metric 监控演进到复杂的 Trace 追踪），说明 ROLL 正在成为一个标准化的 RL 训练底座，而非一个封闭的训练框架。
3. **聚焦于高价值 RL 场景**: 社区正在围绕 RLVR 等具备客观奖励机制的场景进行功能扩展（如通过 verifiable rewards 进行 rollout 生成追踪），这精准契合了目前后训练阶段提升模型推理能力的行业核心趋势。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK 项目 RL 日报摘要（2026-05-23）：

# ROCK 强化学习生态日报 (2026-05-23)

## 1. 今日速览
过去 24 小时内，alibaba/ROCK 保持了较高的开发活跃度，共处理了 **6 条 Issues** 和 **7 条 Pull Requests**。项目重心集中在**配置系统优化**、**基础架构健壮性（数据库连接池与 K8s 磁盘配额）**以及**沙箱生命周期管理**上，并发布了最新的 v1.8.1 稳定版。

## 2. 版本发布
- **v1.8.1**: [alibaba/ROCK Releases](https://github.com/alibaba/ROCK/releases/tag/v1.8.1)
  - **核心更新**：修复了配置解析问题，正式支持基于 `_base` 的区域 YAML 配置继承与深度合并。

## 3. 重点 Issues
配置复用、K8s 资源限制与生产环境稳定性是社区当前关注的焦点。

- **配置系统**：连续提出两项增强需求，要求 `RockConfig.from_env()` 支持顶层 `_base` 键的识别与继承。
  - [#1004](https://github.com/alibaba/ROCK/issues/1004) [CLOSED]
  - [#1002](https://github.com/alibaba/ROCK/issues/1002) [CLOSED]
- **沙箱生命周期管理**：提议增加 Sandbox 重启功能，完善部署状态控制。
  - [#1000](https://github.com/alibaba/ROCK/issues/1000) [OPEN]
- **K8s 资源隔离**：请求在 K8s operator sandbox 的 pool 和 template 模式下增加磁盘配额限制。
  - [#993](https://github.com/alibaba/ROCK/issues/993) [CLOSED]
- **生产级 Bug 修复**：Admin 服务在 DB 重启后，异步连接池出现失效连接导致报错。
  - [#986](https://github.com/alibaba/ROCK/issues/986) [CLOSED]
- **可观测性**：提议在 SDK 的 job config 中引入 Tracking 配置。
  - [#998](https://github.com/alibaba/ROCK/issues/998) [OPEN]

## 4. 关键 PR 进展
各项核心 Issue 均已快速转化为 PR 并取得实质性进展。

- **feat(config): support `_base` inheritance and deep merge in RockConfig** (#1003) [CLOSED]
  - 实现了 YAML `_base` 路径解析与深度合并，该提交直接促成了 v1.8.1 的发布。([alibaba/ROCK PR #1003](https://github.com/alibaba/ROCK/pull/1003))
- **feature(sandbox): support sandbox restart** (#1001) [OPEN]
  - 对应 Issue #1000，正在开发沙箱重启特性。([alibaba/ROCK PR #1001](https://github.com/alibaba/ROCK/pull/1001))
- **Feature/add tracking config into sdk job config** (#999) [OPEN]
  - 对应 Issue #998，补充 SDK 层面的训练追踪配置。([alibaba/ROCK PR #999](https://github.com/alibaba/ROCK/pull/999))
- **fix(admin): retry SandboxTable ops once on stale connection after DB restart** (#997) [CLOSED]
  - 修复数据库重启引发的连接池异常，采用单次重试机制缓解连接失效问题，关闭 #986。([alibaba/ROCK PR #997](https://github.com/alibaba/ROCK/pull/997))
- **feat(k8s): Support disk quota limits for K8s operator sandbox** (#994) [CLOSED]
  - 为 K8s sandbox 增加了磁盘资源维度的约束，完善了 CPU/Memory 之外的配额控制。([alibaba/ROCK PR #994](https://github.com/alibaba/ROCK/pull/994))
- **docs(v1.8.0): remove internal dingtalk links from release note** (#996) [CLOSED]
  - 清理了 v1.8.0 版本笔记中的内部通讯链接，提升了开源合规性。([alibaba/ROCK PR #996](https://github.com/alibaba/ROCK/pull/996))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **下沉基础设施的工程化突破**：从今天 K8s 磁盘配额（#994）和 DB 连接池重试（#997）的更新可以看出，ROCK 正在解决分布式 RL 训练中极易痛点化的“环境调度”与“状态持久化”问题，向生产级高可用迈进。
2. **RL 工作流的可扩展性**：YAML 配置继承（#1003）与 SDK Tracking 配置（#999）的引入，说明 ROCK 在强化学习生命周期管理上正在提供更灵活、对算法工程师更友好的抽象，降低了复杂多区域、多实验环境的配置心智负担。
3. **闭环迭代极快**：包括 Issue 提报到 PR 合入乃至发版（如 #1004/1002 到 v1.8.1 的演进），通常在 24 小时内完成，展现了核心团队极强的工程执行力，项目处于高度活跃的上升期。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026-05-23 Slime 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时，[slime (THUDM/slime)](https://github.com/THUDM/slime) 仓库活跃度主要集中在代码质量提升与训练/推理基础设施的完善。新增 0 个 Release，更新 1 个 Issue，处理 7 个 Pull Requests。今日核心看点集中在**新型模型架构支持（Gemma4）**以及**存算分离场景下的增量权重同步机制**。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
- **[#1936 [bug] TorchMemorySaver observes invalid LD_PRELOAD when adding `--disable-weights-backuper`](https://github.com/THUDM/slime/issues/1936)**
  **摘要**：开发者报告在使用 `--disable-weights-backuper` 参数启动训练时触发底层报错，导致内存保存机制（TorchMemorySaver）观测到无效的 `LD_PRELOAD` 环境变量，进而导致训练流 (`train.py`) 崩溃。

---

### 4. 关键 PR 进展
今日 PR 动态涵盖环境配置修复、调试工具增强、Megatron 大规模训练支持及新模型集成：

- **[PR #1855 feat(gemma4): add Gemma4 26B-A4B MoE and 31B dense support](https://github.com/THUDM/slime/pull/1855)**
  **摘要**：引入对 Gemma4 系列模型（包含 26B-A4B 混合专家 MoE 架构与 31B Dense 架构）的 RL 训练支持。该 PR 完善了模型结构、HF 与 Megatron 间的权重转换，且已在 TP/PP/DP/CP/EP 及 Sliding Window 等多维分布式并行下通过了正确性校验。
  
- **[PR #1806 feat: delta weight sync (disk + nccl transports)](https://github.com/THUDM/slime/pull/1806)**
  **摘要**：实现**非共置**场景下的增量权重同步机制。针对跨数据中心、通过共享文件系统进行训练/推理分离的架构，该 PR 仅传输发生变更的参数（位置与值），而非全量参数，可极大缓解百 MB/s 级带宽瓶颈。
  
- **[PR #1933 Support training with variable global batch size](https://github.com/THUDM/slime/pull/1933)**
  **摘要**：[run-ci-megatron] 系列核心 PR，支持在训练过程中动态调整全局 Batch Size，这对于 RL 训练中根据经验回放池状态动态调参具有重要价值。

- **[PR #1938 & #1937 fix: 边缘模式与配置修复]**
  - [#1938 fix: guard sglang_speculative_algorithm read in `--debug-train-only` mode](https://github.com/THUDM/slime/pull/1938)：修复在 `--debug-train-only` 模式下，由于跳过了 sglang 参数解析导致读取未定义属性的报错。
  - [#1937 fix: TorchMemorySaver invalid LD_PRELOAD](https://github.com/THUDM/slime/pull/1937)：针对 Issue #1936 的修复提交。
  
- **[PR #1922 fix(debug): auto-append rollout_id/rank in save path](https://github.com/THUDM/slime/pull/1922)**
  **摘要**：修复多 GPU 分布式环境下 debug 数据可能被覆盖的问题。自动为保存路径补充 `{rollout_id}` 和 `{rank}` 占位符，提升大规模集群调试体验。

- **[PR #1927 fix: quote nvidia-modelopt requirement in build_conda.sh](https://github.com/THUDM/slime/pull/1927)**
  **摘要**：修复 Conda 构建脚本中的 Shell 语法漏洞。将依赖包 `nvidia-modelopt[torch]>=0.37.0` 加上引号，防止 `>=` 被 Shell 误解析为重定向符。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿 MoE 与大模型支持能力**：随着 RL 范式从纯对齐拓展到复杂推理，模型规模和稀疏性要求急剧上升。Slime 迅速跟进 Gemma4 MoE 架构，证明了其在快速适配最前沿 (SOTA) 基座模型上的工程能力。
2. **面向工业级的“训推分离”架构**：PR #1806（增量权重同步）直击大模型 RLHF 阶段的核心痛点——训练集群与推理集群跨网络同步的通信开销。Disk + NCCL 双通道的增量更新机制，展示了项目在超大规模分布式工程上的深厚积累。
3. **深度整合 Megatron 生态**：从动态 Global Batch Size 到权重转换，项目在深度整合 Megatron-LM 方面持续推进，为处理数十亿/数百亿参数模型的 RL 训练提供了坚实的底层基座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-23 强化学习（RL）生态日报摘要：

# AReaL 开源生态日报 (2026-05-23)

## 1. 今日速览
在过去 24 小时内，AReaL 生态保持高度活跃。项目未发布新版本，但社区围绕底层架构重构、MoE 训练稳定性、显存/通信优化及实验追踪等核心能力展开了密集开发。新增/更新 **2 条 Issues** 和 **7 条 Pull Requests**，显示出项目正稳步推进 2026 Q2 路线图中的重度优化工作。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
- **[Roadmap] 2026 Q2 Milestones** - `#1302` [OPEN]
  - **链接**: [areal-project/AReaL Issue #1302](https://github.com/areal-project/AReaL/issues/1302)
  - **分析**: Q2 路线图追踪文档（截至 2026-07-31），昨日有活跃的评论互动（目前共 8 条）。该 Issue 为社区贡献者指明了高优先级开发方向，是把握 AReaL 核心演进脉络的关键风向标。
- **[Feature] Migrate megatron integration lib from `mbridge` to `megatron-bridge`** - `#1260` [OPEN]
  - **链接**: [areal-project/AReaL Issue #1260](https://github.com/areal-project/AReaL/issues/1260)
  - **分析**: 计划将 Megatron 模型注册表从非官方的 `mbridge` 迁移至官方默认的 `megatron-bridge`。此举将大幅增强底层算子与最新 Megatron 框架的兼容性，同时承诺保持 `areal/api/` 的向后兼容性。

## 4. 关键 PR 进展
今日的 PR 聚焦于**系统底层性能优化**与**RL 训练范式扩展**，技术含金量极高：
- **feat: muon optimizer support** - `#1270` [OPEN]
  - **链接**: [areal-project/AReaL PR #1270](https://github.com/areal-project/AReaL/pull/1270)
  - **亮点**: 引入 **Muon 优化器**，利用 Newton-Schulz 迭代对动量缓冲区进行正交化处理。该 PR 原生实现了 FSDP2 和 Megatron 后端的分布式支持，有望在 RL 的快速迭代中提供更优异的收敛性和训练效率。
- **feat(awex): FSDP colocate weight update via CUDA IPC** - `#1361` [OPEN]
  - **链接**: [areal-project/AReaL PR #1361](https://github.com/areal-project/AReaL/pull/1361)
  - **亮点**: 补齐了 FSDP 训练引擎与 SGLang 推理引擎在同一 GPU 集群上的权重更新路径。通过利用 CUDA IPC 进行零拷贝通信，使 FSDP 达到了与 Megatron 同等的 co-locate 性能，极大降低了异步 RL 训练中的权重同步延迟。
- **feat: add router replay(R3) for megatron engine** - `#1207` [OPEN] `[high priority]`
  - **链接**: [areal-project/AReaL PR #1207](https://github.com/areal-project/AReaL/pull/1207)
  - **亮点**: 专为 **MoE 模型**设计的 Rollout Routing Replay (R3) 机制。通过在推理阶段记录专家路由索引并在训练阶段重放，解决了异步 RL 训练中因路由不一致导致的训练不稳定痛点。
- **feat(megatron): implement async_save with AsyncCallsQueue** - `#1356` [OPEN]
  - **链接**: [areal-project/AReaL PR #1356](https://github.com/areal-project/AReaL/pull/1356)
  - **亮点**: 填补了 Megatron Checkpoint Manager 的异步保存能力空白。利用 `megatron-core` 的 `AsyncCallsQueue` 实现异步落盘，有效减少了 RLHF/PPO 训练中 Checkpoint 保存造成的算力阻塞。
- **Add rollout trace logging with `trackio`** - `#1360` [OPEN]
  - **链接**: [areal-project/AReaL PR #1360](https://github.com/areal-project/AReaL/pull/1360)
  - **亮点**: 集成 HuggingFace 的本地优先追踪库 Trackio，在现有指标监控基础上增加了 Trace 级别的日志记录，进一步强化了 RL 实验的可复现性和可观测性。
- **feat(archon): add ZERO1 DTA path with configs and tests** - `#1287` [OPEN]
  - **链接**: [areal-project/AReaL PR #1287](https://github.com/areal-project/AReaL/pull/1287)
  - **亮点**: 针对 Archon 模块整合了 ZeRO1 数据并行与 Dynamic Tree Attention (DTA) 路径，优化了树状搜索训练模式的显存占用和底层算子效率。
- **feat: controller v2 refactor** - `#1354` [OPEN] `[safe-to-test]`
  - **链接**: [areal-project/AReaL PR #1354](https://github.com/areal-project/AReaL/pull/1354)
  - **亮点**: 控制器的 V2 版本重构。属于架构层面的基建更新，预计将为后续更复杂的分布式调度打下基础。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在解决大模型后训练时代最棘手的工程瓶颈，其演进方向具备极高的生态参考价值：
1. **极致的通信与显存压榨**：从 `CUDA IPC` 权重更新到 `ZeRO1 DTA` 路径，AReaL 正在将 GPU 集群每一步的数据搬运压榨到极致，这是支撑高频 LLM RLHF 的底层刚需。
2. **前沿算法的快速工程化**：第一时间原生适配 **Muon 优化器**，体现了顶级 RL 框架对学术前沿成果的极强敏锐度与工程落地能力。
3. **直面 MoE RL 训练痛点**：通过引入 `R3 (Rollout Routing Replay)`，精准打击了 MoE 模型在异步 RL 训练中特有的“推理-训练路由不一致”问题。在开源 RL 基建中，针对 MoE 的深度优化目前仍然是稀缺品。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-05-23 RL 日报摘要：

# 🤖 TRL 项目日报 (2026-05-23)

## 1. 今日速览
过去 24 小时内，TRL 仓库展现出极高的活跃度与快速迭代能力。共处理 **13 个 Issues**（其中 12 个已关闭，问题解决率极高），并更新了 **20 个 Pull Requests**。
当前开发重点聚焦于 **GRPO 算法的底层 Bug 修复与 AsyncGRPO 的工程能力完善**，同时项目正在积极重构对齐 DPO 与 KTO 的底层代码架构。目前**无新版本发布**。

---

## 2. 版本发布
无新版本发布（Latest releases: 0）。

---

## 3. 重点 Issues
今日的 Issues 暴露了 GRPO 训练中的几个关键数值稳定性与推理后端兼容性问题：

*   **[数值稳定性] Zero-std 奖励导致 GRPO 产生伪梯度**
    *   **描述**：当 batch 内同一组的生成结果获得完全相同的奖励时，优势值归零，但 `beta > 0` 时的 KL 惩罚项未正确屏蔽，导致产生无意义的梯度信号，影响训练稳定性。
    *   **链接**：[huggingface/trl Issue #5588](https://github.com/huggingface/trl/issues/5588)
*   **[工程缺陷] vLLM 重要性采样聚合方式错误**
    *   **描述**：序列级别的 vLLM 重要性采样修正使用 `sum` 而不是 `mean` 进行 token 级别对数概率的聚合，导致 IS 比例的方差会随生成长度缩放，造成比例系统性收缩趋近于 0。
    *   **链接**：[huggingface/trl Issue #5814](https://github.com/huggingface/trl/issues/5814)
*   **[兼容性] QLoRA + vLLM 导致权重合并失败**
    *   **描述**：使用 GRPOTrainer 结合 QLoRA (4-bit) 和 vLLM 加速时，由于权重形状不匹配（`merge_adapter` 阶段），导致训练在生成步骤中断。
    *   **链接**：[huggingface/trl Issue #4973](https://github.com/huggingface/trl/issues/4973)
*   **[CI/推理机制] 推理模式下的 Tensor 阻塞后台线程**
    *   **描述**：由于 `transformers` 更新了后台生成逻辑，TRL 中 `generate_batch` 的 `torch.inference_mode` 上下文管理器导致原地操作失败，引发 CI 报错 `RuntimeError: min(): Expected reduction dim to be specified`。
    *   **链接**：[huggingface/trl Issue #5817](https://github.com/huggingface/trl/issues/5817)

---

## 4. 关键 PR 进展
今日的 PR 动态体现了核心开发者对训练框架鲁棒性和分布式训练能力的重点投入：

*   **[核心特性] Continuous Batching 支持异步 GRPO 训练**
    *   **描述**：核心开发者 `qgallouedec` 为 AsyncGRPO 引入了 Continuous Batching（连续批处理）支持，这将极大提升在异构计算环境下 RLHF 的显存利用率和吞吐量。
    *   **链接**：[huggingface/trl PR #5781](https://github.com/huggingface/trl/pull/5781)
*   **[关键修复] 修复 GRPO 伪 KL 梯度问题** *(对应 Issue #5588)*
    *   **描述**：清除了当奖励标准差为 0 时错误的 KL 梯度信号，保障了策略网络更新的数学正确性。
    *   **链接**：[huggingface/trl PR #5777](https://github.com/huggingface/trl/pull/5777)
*   **[架构重构] 对齐 KTO 与 DPO 的计算架构与指标日志**
    *   **描述**：系列重构 PR（#5810, #5816, #5820），统一了 `KTOTrainer` 与 `DPOTrainer` 的 `compute_loss` 流程、Liger kernel 损失计算及 Metrics 平均逻辑。减少了技术债，提升了代码一致性。
    *   **链接**：[huggingface/trl PR #5820](https://github.com/huggingface/trl/pull/5820)
*   **[基础设施] 探索 `trl vllm-serve` 的 OpenAI API 兼容性**
    *   **描述**：鉴于 vLLM 0.17+ 已原生支持从训练进程同步权重，此 PR 探索将 TRL 自有的 vLLM 服务层转变为与 OpenAI 完全兼容的接口，提升与周边生态工具的无缝对接能力。
    *   **链接**：[huggingface/trl PR #5803](https://github.com/huggingface/trl/pull/5803)
*   **[实验特性] MADPO (Masked/Auxiliary DPO) 引入样本权重支持**
    *   **描述**：在 `DPOTrainer` 中添加了可选的逐对样本加权支持。目前处于草案阶段，核心团队正在收集社区的下游应用场景反馈。
    *   **链接**：[huggingface/trl PR #5804](https://github.com/huggingface/trl/pull/5804)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **死磕大规模训练的底层稳定性**：从今日修复的“零方差奖励导致伪梯度”、“Token级别聚合维度错误”可以看出，TRL 团队正在解决 RLHF/GRPO 在大规模算力下极其隐蔽的数值陷阱，这是模型“训崩”的罪魁祸首。
2.  **押注异步与高效推理**：vLLM + AsyncGRPO 的结合（连续批处理、权重同步机制的重构）表明 TRL 正在试图打破传统 RL 训练中“生成与更新”的串行阻塞瓶颈，这将直接转化为算力成本的节省。
3.  **对齐主流后端的工程收敛**：快速响应 `transformers` 上游（如后台生成线程机制改变）导致的 breaking changes，并积极提供 Qwen3.5 Think 等最新架构的测试套件支持。TRL 确保了用户在最前沿的开源模型和训练算法结合时，能够做到“开箱即用”。

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

# verl RL 生态日报摘要 (2026-05-23)

## 1. 今日速览
过去 24 小时内，verl 仓库保持高频迭代，**Issues 更新 6 条，PR 更新 23 条，无新版本发布**。从数据来看，社区当前的焦点集中在：多轮 Agent RL 训练的稳定性、Megatron 后端的显存与 loss 优化、SGLang/vLLM Rollout 引擎的兼容性修复，以及全异步训练流的防御性编程。

## 2. 版本发布
- **最新 Releases**: 无（当前主分支持续快速迭代中，核心功能仍在密集合并阶段）。

---

## 3. 重点 Issues
今日讨论度最高且具代表性的技术痛点如下：

- **Agent RL 稳定性/崩溃问题**: 
  - [#6252 [OPEN]](https://github.com/volcengine/verl/issues/6252) 使用 Qwen3.5/3.6 35B-A3B 进行多轮工具调用 Agent RL 训练时，模型在后期 step 出现工具调用格式崩溃（malformed calls 激增）。*(评论 10，高热度)*
  - [#6437 [OPEN]](https://github.com/volcengine/verl/issues/6437) 报告了 `main_ppo_sync` 中潜在的静默错误：当 agent loop 失败时，系统可能会在不完整的 rollout 批次上继续进行训练。

- **显存与分布式训练瓶颈**:
  - [#5995 [CLOSED]](https://github.com/volcengine/verl/issues/5995) 修复了 FSDP2 CPUOffloadPolicy 在非 LoRA 全量权重更新时，`state_dict()` 导致的 device mismatch 崩溃。*(👍 7)*
  - [#6449 [OPEN]](https://github.com/volcengine/verl/issues/6449) 即使在 8x80GB GPU 集群上，GRPO 训练在 batch size > 2 时依然遭遇 Ray OOM 错误。

- **基础依赖报错**:
  - [#5690 [OPEN]](https://github.com/volcengine/verl/issues/5690) 与最新 `trl` 库存在兼容性问题，无法导入 `AutoModelForCausalLMWithValueHead`。

---

## 4. 关键 PR 进展
今日的 PR 活动主要集中在**后端性能优化、多硬件适配和全异步流修复**：

- **核心训练与 Rollout 修复**:
  - [#6442 [CLOSED]](https://github.com/volcengine/verl/pull/6442) 修复 SGLang 在 one-step off-policy 场景下 `resume_kv_cache` 缺失 `free_cache_engine` 守护导致的 `KeyError` 崩溃。
  - [#6438 [CLOSED]](https://github.com/volcengine/verl/pull/6438) 修复 `FullyAsyncTrainer` 跳过父类初始化导致的 `_dump_executor` 缺失问题。
  - [#6409 [CLOSED]](https://github.com/volcengine/verl/pull/6409) 持久化 PPO actor 的 `lora_train_meta.json`，修复 LoRA 权重导出/合并失败的问题。

- **架构演进与性能提升 (Megatron 专供)**:
  - [#6447 [OPEN]](https://github.com/volcengine/verl/pull/6447) 显式释放存储，修复 Megatron ref model offload 产生的 GPU 显存泄漏。
  - [#6446 [OPEN]](https://github.com/volcengine/verl/pull/6446) 为 Megatron 后端补充了目前 FSDP 独有的 chunk entropy 功能。
  - [#6432 [OPEN]](https://github.com/volcengine/verl/pull/6432) 修复 Megatron MTP (Multi-Token Prediction) loss 与 rollout 指标对齐问题。

- **新特性与生态扩展**:
  - [#6422 [OPEN]](https://github.com/volcengine/verl/pull/6422) 引入通用的 Remote Backend 抽象层（以 ArcticRL 为实例），提升架构灵活性。
  - [#6271 [OPEN]](https://github.com/volcengine/verl/pull/6271) 在 fully-async pipeline 中支持单次 rollout 输出 multi-trajectory，进一步强化 Agent RL 场景。
  - [#6448 [OPEN]](https://github.com/volcengine/verl/pull/6448) 解决多 SGLang replicas 在同节点启动时的 `EADDRINUSE` 端口冲突。
  - [#6325 [OPEN]](https://github.com/volcengine/verl/pull/6325) 引入 MoE router replay (R2/R3) 支持，提升 MoE 模型 RL 训练的稳定性和确定性。

- **多硬件与 CI 升级**:
  - [#6086 [OPEN]](https://github.com/volcengine/verl/pull/6086) 添加统一的平台抽象层，支持 Ascend NPU、寒武纪 MLU 等多芯片插件化接入。
  - [#6398 [CLOSED]](https://github.com/volcengine/verl/pull/6398) & [#6443 [CLOSED]](https://github.com/volcengine/verl/pull/6443) 持续扩展 Ascend NPU 的模型适配（Qwen3-VL-30B）与 CI 支持。
  - [#6435 [OPEN]](https://github.com/volcengine/verl/pull/6435) & [#6393 [CLOSED]](https://github.com/volcengine/verl/pull/6393) Docker 镜像升级，跟进 SGLang 0.5.12 与 vLLM 0.20.2。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **向复杂 Agent RL 深水区迈进**：从 Issue #6252 和 PR #6444, #6271 可以看出，verl 的重心已从基础的 PPO/GRPO 单轮对齐，转向多轮工具调用、多轨迹输出的 Agent RL 场景，正在解决该场景下极易出现的静默错误和格式崩溃问题。
2. **极度深度的底层优化**：项目没有停留在 API 封装层，而是深入到 Megatron MTP loss 对齐、MoE Router Replay、FSDP2 CPU Offload 显存控制等大模型底层基础设施的排错与优化。
3. **极强的多硬件/多后端解耦能力**：通过引入 Platform Abstraction Layer (#6086) 和 Remote Backend (#6422)，verl 正在迅速从 "CUDA-only" 演进为跨芯片（Ascend/Cambricon）、跨训练后端、跨推理引擎的高弹性 RL 底座。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 生态日报 (2026-05-23)

## 1. 今日速览
过去 24 小时内，torchtune 仓库整体处于低活跃状态。无新版本发布，无新增或更新的 Issues，仅有 **1 条新增 PR**。该项目目前的核心工作集中在底层数值稳定性、分布式训练初始化流程以及工程细节的 Bug 修复上。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **无新增或更新的 Issues** (0 条)。

## 4. 关键 PR 进展
本期仅有 1 条处于 `OPEN` 状态的 PR，主要针对分布式环境下的日志系统逻辑进行了修复：

- **[#2964 fix(logging): use RANK env var in log_rank_zero before dist init](https://github.com/pytorch/torchtune/pull/2964)**
  - **作者**: kratos0718
  - **问题背景**: 修复了 Issue #2700。在以往的实现中，当分布式环境尚未初始化（即 `dist.is_initialized()` 为 `False`，通常发生在 `setup()` 调用 `init_process_group` 之前）时，`log_rank_zero` 函数会默认将所有进程的 rank 视为 `0`。
  - **核心修复**: 这导致了在 `recipe_main` 构建配方之前调用 `config.log_config` 时，所有进程都会打印出完整的配置信息，造成日志冗余。该 PR 通过在分布式初始化前读取 `RANK` 环境变量来准确判断主节点，从而解决非必要日志的跨 rank 打印问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日无重大功能性更新，但从这类底层修复可以看出 torchtune 的演进方向及其对 RL 生态的价值：

1. **强化学习对分布式日志的强依赖**：在 RLHF/DPO 等强化学习微调场景中，训练通常涉及极其复杂的 Actor-Critic 多进程或多节点协同。精准的 `log_rank_zero` 机制是排查梯度累积、奖励模型打分异常的基础，避免了大量无效日志淹没核心错误信息。
2. **不断完善的 Recipe 架构**：PR 中提到的 `recipe_main` 流程优化，表明 torchtune 正在致力于让 LLM 微调的“配方”在执行顺序和初始化逻辑上更加严密。这种工程健壮性是保障 RL 训练实验可复现性的关键。
3. **PyTorch 原生生态的协同**：作为 PyTorch 官方生态的一员，torchtune 对底层通信原语（如 `init_process_group`）的深度兼容和 Bug 修复，使其在大规模 RL 集群训练中具备更原生的性能优势和更低的上手门槛。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-05-23）：

### 1. 今日速览
- **数据表现**：过去 24 小时内项目相对平稳，无新增 Issues、无新版本 Releases，PR 更新 3 条。
- **核心动向**：当前的工程重心集中在 **GRPO（Group Relative Policy Optimization）训练后的评测自动化集成**、本地调试体验的修复，以及**底层 RLHF Rollout 数据追踪系统的扩展**。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **最新 Issues**：过去 24 小时无新增 Issue。

### 4. 关键 PR 进展
本期共有 3 个 PR 更新，重点强化了 GRPO 训练生态和可观测性：

- **[OPEN] Add olmo-eval Beaker launch integration for GRPO** ([PR #1698](https://github.com/allenai/open-instruct/pull/1698))
  - **作者**: mnoukhov
  - **进展**: 新增 `OlmoEvalLaunchConfig`，支持在 GRPO 产生 Checkpoint 后，通过 Weka 路径自动调用 `olmo-eval beaker launch` 触发评测。该特性通过 `--try_launch_olmo_evals_on_weka` 参数挂载到 `grpo.py` 和 `grpo_fast.py` 中，打通了训练到评测的 MLOps 自动化闭环。
- **[CLOSED] Export setuptools-scm pretend version in debug launch scripts** ([PR #1696](https://github.com/allenai/open-instruct/pull/1696))
  - **作者**: mnoukhov
  - **进展**: 修复了本地 Ray 调试环境下的包版本推断错误。通过在 `scripts/train/debug/` 下的 45 个 Shell 脚本中强制导出 `SETUPTOOLS_SCM_PRETEND_VERSION`，消除了本地环境与 Docker 镜像的版本差异，保障了本地 RL 调试的顺畅运行。
- **[OPEN] Add Trackio rollout trace logging** ([PR #1697](https://github.com/allenai/open-instruct/pull/1697))
  - **作者**: abidlabs
  - **进展**: 引入 Hugging Face 推出的本地优先实验追踪库 Trackio。该 PR 遵循 Open-Instruct 现有的 Rollout 追踪保存路径，在 `StreamingDataLoaderConfig` 中新增了 `trackio_project` 配置，为 RLHF 过程中的模型 Rollout 行为提供了更细粒度的可观测性支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 目前已经超越了基础的 RLHF 算法实现层面，正在向**成熟的工程化、自动化 RL 基础设施**演进。
1. **深度绑定分布式训练与评测闭环**：PR #1698 表明项目正在将 GRPO 等前沿对齐算法与底层的 Beaker 评测集群及 Weka 分布式存储深度集成，这对于解决大模型 RL 训练中“评测滞后”的痛点极具参考价值。
2. **强化 RL 过程的可观测性**：随着 PR #1697 引入 Trackio，项目在 Rollout 数据的 trace logging 上提供了更开箱即用的支持，这对于开发者分析策略模型与奖励模型的博弈过程、进行 Reward Hacking 排查等高级 RL 调优至关重要。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报摘要 (2026-05-23)

## 1. 今日速览
过去 24 小时，CleanRL 仓库整体活跃度较低，未产生新的代码合并或版本发布。但社区出现了一个关于项目核心设计理念（单文件脚本与模块化）的探讨 Issue，值得核心开发者和生态贡献者关注。
- **Issues 更新**: 1 条
- **PR 更新**: 0 条
- **新版本发布**: 0 个

## 2. 版本发布
今日无新的 Release 更新。

## 3. 重点 Issues
- **#518 [OPEN] DQN is no longer a single-file script**
  - **作者**: mshaocong
  - **链接**: [vwxyzjn/cleanrl/issue/518](https://github.com/vwxyzjn/cleanrl/issues/518)
  - **摘要**: 作者发现近期的代码重构移除了 SB3 (Stable Baselines3) 的依赖，但引入了对项目内部分离模块 `cleanrl_utils.buffers.ReplayBuffer` 的依赖。这破坏了 CleanRL “无外部依赖、开箱即用的单文件脚本”的核心初衷。
  - **核心诉求**: 建议提供一种 `pip install cleanrl` 的解决方案，以便于研究人员在 Google Colab 等云端环境中直接运行和使用 CleanRL 的算法。

## 4. 关键 PR 进展
过去 24 小时内无 PR 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 在当前日益庞大且高度封装的 RL 生态（如 Ray RLlib, SB3 等）中，始终保持着**“无魔法、透明度高”**的独特生态位。
正如 Issue #518 所反映的，其最大的护城河是**单文件、零配置的算法实现**。这种极简主义让它在教育入门、快速实验基线验证以及算法底层逻辑审计方面具有不可替代的价值。如何在优化代码结构（如引入内部复用的 Buffer 模块）与保持单文件可移植性之间取得平衡，是该库未来演进的关键看点。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报摘要：Gymnasium (2026-05-23)

## 1. 今日速览
过去 24 小时，Gymnasium 仓库整体活跃度处于低位，无代码合并与版本发布。社区重心集中在文档与教程完善上，有 1 条关于 MuJoCo 教程建设的长期 Issue 发生状态更新。

## 2. 版本发布
- **无新版本发布**。当前主干代码保持稳定。

## 3. 重点 Issues
- **[#846 [Proposal] Add Tutorials for MuJoCo based environments](https://github.com/Farama-Foundation/Gymnasium/issues/846)**
  - **标签**: `documentation` `enhancement` `good first issue`
  - **状态**: OPEN (最近更新于 2026-05-22)
  - **核心内容**: 为即将发布的 `MuJoCo-v5` 环境及 `Gymnasium 1.0.0` 版本补充官方教程。核心需求包括四足机器人等自定义模型的加载与构建指导。该 Issue 是目前生态文档建设的重点之一，对降低 MuJoCo 深度定制门槛具有重要意义，且目前对社区贡献者开放。

## 4. 关键 PR 进展
- **过去 24 小时无 PR 更新**。代码层面的变动处于停滞/静默期。（注：Issue #846 中提及的对应四足机器人教程 PR [#838](https://github.com/Farama-Foundation/Gymnasium/pull/838) 目前处于 WIP 状态，今日无新提交）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管当前活跃度较低，但 Gymnasium 仍然是 RL 领域不可替代的基础设施：
- **API 标准的绝对统治者**：`Gymnasium` 作为已归档 `OpenAI Gym` 的官方继承者，其定制的 `Env` API 已经成为整个 RL 底层框架（如 Stable-Baselines3, CleanRL, Ray/RLlib 等）的通用语言。
- **v1.0.0 里程碑的推进**：Issue #846 显示项目正在为里程碑版本 `Gymnasium 1.0.0` 做前置的文档准备。引入 `MuJoCo-v5` 的系统性教程将极大改善当前 RL 物理仿真环境搭建 documentation 碎片化的问题。
- **极佳的社区切入点**：项目长期维护并清晰标注 `good first issue`，对于希望参与底层开源生态建设的开发者而言，依然是学习标准 RL Pipeline 架构和贡献代码的最佳实践基地。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>