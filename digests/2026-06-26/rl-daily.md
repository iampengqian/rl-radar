# RL 开源生态日报 2026-06-26

> 生成时间: 2026-06-25 22:26 UTC | 覆盖项目: 15 个

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
当前（2026年中）开源强化学习（RL）生态呈现出显著的分层与垂直化趋势。以 LLM 为核心的 RLHF/Agentic RL 框架占据了绝对的热度与工程迭代重心（如 TRL, verl, slime, OpenRLHF）；传统单智能体/多智能体环境标准库（Gymnasium, PettingZoo）步入深度重构与现代化瘦身期；而轻量级传统 RL 算法库（CleanRL, SB3, Tianshou 等）已处于高度稳定甚至静默期。整个生态正从“算法验证驱动”全面转向“超大规模异构算力与复杂环境交互驱动”。

## 各项目活跃度对比

项目 | Issues | PRs | Releases | 信号
--- | --- | --- | --- | ---
**TRL** | 20 | 31 | 0 | 底层架构重构，死磕 GRPO+vLLM 稳定性与 Agentic 基建
**verl** | 6 | 22 | 0 | 探索增量权重同步与自蒸馏算法，深化异构硬件（Ascend）适配
**AReaL** | 1 | 18 | 0 | 攻坚 PD 分离架构，推进 RL 训练向微服务平台化演进
**ROCK** | 7 | 10 | 0 | 完善 TS/Python SDK，深入解决多租户集群调度与沙箱生命周期
**slime** | 2 | 15 | 0 | 极致打磨 RL 算法严谨性（如 IS 修正），探索 Mooncake 传输后端
**PettingZoo** | 7 | 8 | 0 | 拥抱现代工具链（Ruff），加速淘汰老旧依赖（RLCard/Box2D）
**Gymnasium** | 9 | 2 | 0 | 筹备核心物理引擎迁移（Box2D 至 Pymunk），攻坚 Py3.14 适配
**Open Instruct** | 0 | 8 | 0 | 发力异步在线 RL 稳定性与 SWE-bench/代码沙盒基建
**OpenRLHF** | 0 | 1 | 0 | 深入 Tool-use/Agent 场景的 Token 计数与 Loss 对齐修复
**ROLL** | 0 | 1 | 0 | 探索并归档 Megatron 后端在 Critic 模型中的架构设计
CleanRL / rl_games / SB3 / Tianshou / torchtune | 0 | 0 | 0 | 无活动，项目处于极度稳定或维护停滞状态

## 共同关注的研究与工程方向

### 研究侧信号
1. **GRPO 算法统治力巩固与防坍缩**：各框架（如 TRL, slime, Open Instruct）均在以 GRPO 为基线进行深度修补。重点攻克方向包括引入熵正则化防止策略过早坍缩、修正非对称/扇出采样下的 Baseline 计算有偏问题。
2. **异步与严格 On-Policy 的权衡**：为应对 Agentic RL 长耗时 Rollout 带来的 Off-policy 程度加剧，框架普遍引入了截断重要性采样 (TIS) 修正、丢弃过期 Rollout 结果（如 Open Instruct 的 `max_result_age_steps`），以及更严谨的 KL 散度惩罚温度系数。
3. **在线策略自蒸馏 (OPSD)**：verl 与 slime 均在快速集成 OPSD（引入特权上下文的教师模型评分），突破传统 RLAIF 的天花板。

### 工程/基础设施侧信号
1. **推训分离架构 成为标准解法**：为突破自回归解码的访存瓶颈，AReaL、slime 等框架正大力推进 Prefill-Decode 解耦，并在通信层引入 Mooncake Store 或增量权重同步来压榨网络带宽。
2. **Agentic RL 沙盒环境基建化**：针对代码执行/SWE-bench 任务，各大框架（Open Instruct, TRL, ROCK）正系统性地构建高可用 Docker 沙盒、解决高并发下的 OOM 守护进程崩溃，并支持多轮状态保持。
3. **大参模型显存与通信的极限压榨**：从 TRL 修复 vLLM 死锁，到 verl 支持 Ascend 的 W8A8 在线量化，工业级 RL 框架正在底层进行颗粒度极细的显存优化与跨硬件（GPU/NPU）适配。

## 差异化定位分析
- **TRL (HuggingFace)**：定位为**“LLM 对齐工具箱最大公约数”**。主打 API 易用性与规范化，降低前沿算法复现门槛，是中小规模模型微调的首选。
- **verl (字节跳动)**：定位为**“全栈异构高性能工业框架”**。兼顾算法前沿（OPSD）与极致的系统级优化（Delta Weight Sync），且是当前对昇腾 NPU 生态支持最深入的框架，瞄准千亿参数大厂级落地。
- **slime (清华)**：定位为**“数学严谨的大规模 RL 基座”**。重度结合 SGLang/Megatron，代码迭代展现了极致的学术严谨性，专门修复底层 PPO/GRPO 的数值计算偏差。
- **AReaL (蚂蚁)**：定位为**“分布式 RL 微服务调度平台”**。更关注全局 CLI、鉴权、多 EOS 模型兼容及会话级隔离，适合构建复杂的云原生多轮 Agent 训练集群。
- **Open Instruct (Ai2)**：定位为**“复杂环境交互特化框架”**。精准发力异步在线 RL 的工程痛点，其 Docker 沙盒矩阵极其完善，非常适合做代码修复和工具调用类 Agent 实验。
- **Gymnasium / PettingZoo (Farama)**：定位为**“现代 RL 环境标准定义者”**。与 LLM 战场无关，专注于清理技术债（弃用老旧物理引擎、统一 Ruff），为传统强化学习提供坚如磐石的底层 API 标准。

## 社区热度与成熟度
- **高热度与高成熟度并存**：TRL 和 verl 保持极高的 Issue/PR 活跃度，社区痛点高度集中且反馈迅速，已步入“大规模排障与重构”的成熟期。
- **内部驱动的稳健迭代**：slime、AReaL、Open Instruct 的 Issue 极少，但 PR 质量极高且方向明确，说明项目由强有力的核心团队按照清晰的 Roadmap 推进，处于“静水深流”的攻坚阶段。
- **标准库的社区共治**：Gymnasium 和 PettingZoo 大量使用 `[help wanted]` 标签招募外部贡献者处理底层重构（如物理引擎迁移），项目高度活跃但依赖社区共建来跨越重构期。
- **基础设施层 (ROCK)**：正努力将实验性框架转化为多语言对齐、多地域支持的企业级基建，工程化程度极高。

## 值得关注的趋势信号
1. **LLM 与传统 RL 生态的彻底解耦**：以 LLM 对齐为主的 RLHF 框架（全面拥抱 vLLM/SGLang, Ray, Megatron）与传统 RL 库（SB3, CleanRL 集体沉寂）在技术栈上已完全分层，后者基本不再产生增量价值。
2. **Agentic RL 进入“深水区”工程决战**：单纯的算法验证已经结束，当前的竞争焦点转移到了“如何在高并发、长耗时、带状态保持的 Docker 沙盒中，维持稳定且不发生死锁的异步策略更新”。
3. **国产异构算力生态的实质性融入**：verl 等框架对 Ascend（昇腾）的适配不再是停留在文档上的口号，而是包含了 W8A8 动态量化、多节点 E2E 测试的高频实质性代码合并，反映出算力供给格局的改变正在倒逼开源框架走向全栈异构。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**ROLL (alibaba/ROLL) RL 生态项目日报**
**日期**: 2026-06-26

---

### 1. 今日速览
过去 24 小时内，ROLL 仓库整体活动度较低，无新增 Issue 或代码合并。值得注意的是，一个关于引入 Megatron 后端支持的长周期技术预研 PR 发生了状态更新。

### 2. 版本发布
*   **无新版本发布**。过去 24 小时内未推送任何新的 Release。
    *(Repo: [alibaba/ROLL/releases](https://github.com/alibaba/ROLL/releases))*

### 3. 重点 Issues
*   **无新增或更新的 Issues**。过去 24 小时社区反馈与技术讨论平稳。
    *(Repo: [alibaba/ROLL/issues](https://github.com/alibaba/ROLL/issues))*

### 4. 关键 PR 进展
*   **[#169] [CLOSED] WIP: Megatron backend support in critic models**
    *   **作者**: [taoluo](https://github.com/taoluo)
    *   **进展**: 该 PR 于 2026-06-25 发生状态变更并最终关闭（Closed）。作为一个 WIP（Work In Progress）提案，它涵盖了为 ROLL 的 Critic 模型引入 Megatron 后端的设计文档和初步测试配置。虽然被关闭，但这标志着团队或社区对 ROLL 进行大规模分布式训练（如跨节点张量并行）架构演进的一次重要技术探索与归档。
    *   **链接**: [alibaba/ROLL PR #169](https://github.com/alibaba/ROLL/pull/169)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前大模型强化学习（RLHF/RLAIF）对算力需求急剧膨胀的背景下，**RL 框架与高性能分布式训练框架的深度融合是核心的技术拐点**。

尽管 PR #169 以关闭告终，但其瞄准的 **“Critic 模型的 Megatron 后端支持”** 精准切中了 RL 生态的痛点：在超大参数量级的 RL 训练中，Critic 模型的显存管理和通信开销往往是系统瓶颈。关注 ROLL 的演进，可以帮助开发者和架构师洞察：
1.  **分布式 RL 系统的架构取舍**：观察 ROLL 如何解耦 Actor 与 Critic 的计算后端。
2.  **前沿落地方案**：阿里云天筏团队在真实超大规模业务场景中沉淀的工程踩坑与系统级优化解法。
持续追踪此类设计文档与相关重构，对于构建高吞吐、低延迟的定制化 RL 基础设施具有极高的参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK 开源生态 RL 日报 (2026-06-26)**
*项目分析师：AI 助手 | 数据源：github.com/alibaba/ROCK*

---

### 1. 今日速览
过去 24 小时内，ROCK 生态活跃度极高，共产生 **7 条 Issues** 和 **10 条 PR** 更新，无新版本发布。从代码变更和讨论方向来看，今日的重心集中在 **多语言 SDK（Python/TypeScript）的对齐与增强**、**沙箱生命周期与状态机健壮性优化**，以及**多地域镜像拉取机制的改进**。

### 2. 版本发布
*   **最新 Releases**：无。

### 3. 重点 Issues
今日的 Issues 主要聚焦于功能增强与边缘场景修复，反映了项目在应对复杂生产环境时的持续打磨：

*   **[feat] Envhub SDK 引入无地域镜像解析器** ([Issue #1172](https://github.com/alibaba/ROCK/issues/1172))
    *   **核心内容**：针对多地域部署时容器镜像拉取体验差异大的问题，计划将 `harbor` 项目中的 `RockRegistryResolver` 逻辑迁移至 `rock.sdk.envhub.regionless` 模块，使其成为 SDK 的标准能力，支持通过环境变量配置镜像 mirror。
*   **[feat] Datasets SDK 支持分页、文件操作与格式解析** ([Issue #1170](https://github.com/alibaba/ROCK/issues/1170))
    *   **核心内容**：当前 Datasets SDK 功能较基础。提议增加分页查询、Task 文件访问（browse/list/read/download）以及标准格式解析器（如 SWE-bench 等），以满足构建交互式数据集探索工具和 Benchmark 运行器的需求。
*   **[bug] 沙箱重启后展示陈旧的 Phase 状态** ([Issue #1166](https://github.com/alibaba/ROCK/issues/1166))
    *   **核心内容**：Sandbox 通过 Docker 复用重启时，`get_status` API 仍会返回上一次运行的 `image_pull` 状态（如卡在 "running"），导致状态认知不一致。
*   **[enhancement] 记录沙箱状态机转换历史** ([Issue #1165](https://github.com/alibaba/ROCK/issues/1165))
    *   **核心内容**：提议在 Sandbox 状态中记录状态机的转换历史（Transition history），以方便调试多次重启或异常停止等复杂的生命周期问题。
*   **[bug] 镜像 Registry Mirror 强制覆盖原命名空间问题** ([Issue #1161](https://github.com/alibaba/ROCK/issues/1161))
    *   **核心内容**：当前镜像改写逻辑会同时替换 Registry 和 Namespace，提议改为两步探测策略（保留原命名空间优先探测），提高镜像 mirror 的命中率。

*(其他 Issues：[#1168](https://github.com/alibaba/ROCK/issues/1168) 补充 v1.9.x 镜像指南文档，[#1163](https://github.com/alibaba/ROCK/issues/1163) 修复 1.9.x 版本文档缺失 sandbox_proxy.md)*

### 4. 关键 PR 进展
今日有多个重量级 PR 取得进展，涵盖核心架构升级与 TS SDK 的大规模重构：

*   **TS SDK 与 Python SDK 全面对齐** ([PR #1137](https://github.com/alibaba/ROCK/pull/1137)) `作者: xdlkc`
    *   **进展**：实现 TS SDK 与 Python SDK 的功能对齐。新增 50+ 文件和 400+ 测试，覆盖 bench（基准测试配置）、job（执行系统）等 8 个核心模块，大幅提升前端/Node.js 生态接入 RL 的能力。
*   **沙箱状态机引入归档生命周期** ([PR #1095](https://github.com/alibaba/ROCK/pull/1095)) `作者: zhangjaycee`
    *   **进展**：重构核心沙箱状态机，新增 `archiving` / `archived` 状态，并集成了 Operator 和 Reconciler 逻辑。对于需要长期保存 RL 实验环境快照的场景至关重要。
*   **记录状态转换历史并修复重启状态 Bug** ([PR #1167](https://github.com/alibaba/ROCK/pull/1167)) `作者: zhangjaycee`
    *   **进展**：一并修复了 [Issue #1165](https://github.com/alibaba/ROCK/issues/1165) 和 [#1166](https://github.com/alibaba/ROCK/issues/1166)，提升了沙箱状态机的可观测性与准确性。
*   **Envhub 实现无地域镜像解析与 Compose 支持** ([PR #1173](https://github.com/alibaba/ROCK/pull/1173)) `作者: jake11-oho`
    *   **进展**：1:1 迁移 `RockRegistryResolver`，新增 `resolve_compose` 支持直接改写并拉取 Docker Compose 文件中的镜像，包含 43 个单元测试。
*   **Datasets SDK 功能大幅增强** ([PR #1171](https://github.com/alibaba/ROCK/pull/1171)) `作者: jake11-oho`
    *   **进展**：实现泛型分页、Task 文件操作 API，并集成了 PinchBench、SWE-bench 等主流 RL 评测框架的格式解析器。
*   **基于 Ray 的用户级磁盘配额调度** ([PR #977](https://github.com/alibaba/ROCK/pull/977)) `作者: zhangjaycee`
    *   **进展**：在 SDK/API 层暴露 `disk` 字段，通过 Ray Custom Resource 实现磁盘级别的调度隔离，防止多用户/多 Trail 在共享集群上发生磁盘抢占。

*(其他 PR 更新：[#1130](https://github.com/alibaba/ROCK/pull/1130) 传输自定义镜像鉴权至 K8s，[#1169](https://github.com/alibaba/ROCK/pull/1169) & [#1164](https://github.com/alibaba/ROCK/pull/1164) 文档补充，[#1162](https://github.com/alibaba/ROCK/pull/1162) 优化镜像探测逻辑)*

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **解决 RL 算力调度的核心痛点**：从 [PR #977](https://github.com/alibaba/ROCK/pull/977) 的磁盘配额调度可以看出，ROCK 正在深入解决多租户 RL 训练集群（基于 Ray）中的资源碎片和抢占问题，这是大型 RLHF/Agent 训练任务能否平稳运行的关键基建。
2.  **深度集成主流 RL Benchmark 生态**：[PR #1171](https://github.com/alibaba/ROCK/pull/1171) 原生支持了 SWE-bench 等标准评测集的解析与数据获取。这意味着 ROCK 不再仅仅是一个调度底座，而是正在成为打通“数据集获取 -> 沙箱环境构建 -> Agent 运行评测”全链路的一站式平台。
3.  **多语言、多环境的工程化落地**：[PR #1137](https://github.com/alibaba/ROCK/pull/1137) 的 TS/Python SDK 对齐，以及近期在多地域镜像拉取、K8s 鉴权透传等方面的密集迭代，表明项目正处于“脱虚向实”阶段——正努力将其从实验性框架转化为可直接服务于复杂企业级生产环境（尤其是跨国、多集群场景）的成熟基础设施。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 slime (THUDM/slime) RL 生态日报 - 2026.06.26

## 1. 今日速览
过去 24 小时，slime 仓库无新版本发布，但底层优化与功能迭代保持高度活跃，共处理 **2 条 Issues** 和 **15 条 PRs**。核心动向集中在：大规模异构推训部署的数据传输后端扩展、RL 算法层面的鲁棒性与修正机制（如 Off-policy IS 修正、REINFORCE 估计器），以及 SGLang/Ray 集成链路的大量稳定性修复。

## 2. 版本发布
无新增 Release。

## 3. 重点 Issues
社区当前关注点在**大模型权重的跨格式转换**与**复杂数据集的标准范式**：

*   **[[Bug] Minimax M2.7 HF Checkpoint 转 torch_dist 格式报错](https://github.com/THUDM/slime/issues/2129)** (作者: Lynnzake)
    *   **摘要**：用户在尝试将 Minimax M2.7 的 HuggingFace 权重转换为 slime 分布式训练所需的 `torch_dist` 格式时遭遇阻断错误，影响了千亿级大模型的冷启动训练流程。
*   **[[Question] 多轮 SFT / 多轮 Function Call SFT 数据集组织形式](https://github.com/THUDM/slime/issues/1810)** (作者: aJupyter)
    *   **摘要**：长线讨论议题。社区呼吁官方明确多轮对话及工具调用（Function Call）场景下的数据集标准格式，以期规范当前各类 PR 中不一致的数据处理实现。

## 4. 关键 PR 进展
今日 PR 更新展现了开发团队在**系统容错**与**RL算法严谨性**上的双重打磨：

### 🔧 底层架构与通信优化
*   **[PR #1709] 引入 Mooncake 后端用于 Rollout 数据传输**
    开启将 Mooncake Store 作为 slime 中数据传输的可选后端，为分离式推训架构下的跨节点大规模数据移动提供了替代 Ray 的高性能方案。
*   **[PR #2095] 跨 Reload 保留 `new_group` 的分布式初始化参数**
    修复了 `ReloadableProcessGroup` 在重载时丢失原版 NCCL/Gloo 配置参数的问题，提升了弹性训练的稳定性。

### 🧠 RL 算法与训练机制
*   **[PR #2084] 新增 Off-policy IS Correction Hook**
    在 `policy_loss_function` 中引入 TIS（Truncated Importance Sampling）修正，对比当前带有梯度的 `cur_log_probs`、冻结的旧策略与 rollout 策略，增强了非对称采样下的训练正确性。
*   **[PR #2083] 增加 REINFORCE 优势估计器**
    在 GRPO 基础上新增无 IS Ratio、无裁剪的纯加性替代损失 (`-A * log pi_theta`)，为特定 RL 任务提供了更简单的基线算法。
*   **[PR #2062] 修复 GRPO 在非均匀/扇出 Rollout 下的 Baseline 计算**
    将 GRPO 组内相对 Baseline 的计算粒度从“训练样本”修正为按 `rollout_id` 分桶，解决了非对称采样时梯度计算有偏的问题。
*   **[PR #2085] 修复 OPD (On-policy Distillation) 教师模型温度系数硬编码问题**
    将 Teacher log-probs 的打分温度从硬编码的 `0` 修改为对齐 `rollout_temperature`，保证了反向 KL 散度计算在数学上的严谨性。
*   **[PR #2114] 修复 PPO 计算中原生 KL 散度的覆盖问题**
    修复了 per-token reward 张量构建时的内存覆盖问题，确保 Rollout 阶段的 KL 监控指标准确无误。

### 🛡️ 推理引擎与分布式调度稳定性
*   **[PR #2059] 自动重试 Ray Actor 心跳丢失错误**
    针对 SGLang 引擎启动时偶发的 `ActorUnavailableError` 引入重试机制，避免因控制面瞬时抖动导致整个 RL 训练任务崩溃。
*   **[PR #2069] 优化 SGLang 客户端连接池**
    Agent 多轮调用不再为每个 `/generate` 请求新建 `aiohttp.ClientSession`，而是复用连接池，大幅降低了高频请求的 I/O 开销。
*   **[PR #2068] 为 SGLang 引擎及 Router 的 HTTP 调用添加鉴权**
    贯穿了 Bearer Token 认证机制，提升了内网部署推训分离架构的安全基线。
*   **[PR #2015] 优化 Rollout 显存释放时序**
    将 `RolloutServer.offload()` 拆解为“暂停生成 -> 刷新状态 -> 释放显存”的三阶段平滑过渡，防止 KV-cache 卸载引发推理引擎死锁。
*   **[PR #2109] 支持纯评估模式 (`--num-rollout 0`)**
    解决了 Megatron LR/WD 调度器在 0 Rollout 迭代下的除零异常，支持无缝切入纯验证评估流程。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为深度结合 **SGLang / Megatron** 的重量级 RL 训练框架，slime 正在解决大模型后训练时代最核心的工程痛点：
1.  **超大规模异构推训解耦的探索者**：从引入 Mooncake 替代 Ray 传输，到完善分离式 Rollout 架构的鉴权与重连，slime 正在为千亿参数级模型提供工业级的 RL 数据流转方案。
2.  **对算法严谨性的极致追求**：近期高密度的 PR 表明，团队正在对 OPD 蒸馏温度、PPO 的 KL 惩罚计算、GRPO 在非对称采样下的 Baseline 有偏问题进行深度的源码级修复。这标志着 slime 已跨越“能跑通”的阶段，正向“数学严密且可大规模复现”的高成熟度演进。对于寻求稳定大模型 RL 基座的研究与工程团队而言，具备极高的跟进价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习生态日报 (2026-06-26)**

**1. 今日速览**
过去 24 小时内，AReaL 仓库共更新 1 条 Issue 和 18 条 Pull Request，无新版本发布。活动主要集中在核心训练算法（PPO）健壮性修复、推理架构升级（PD 分离）以及全局 CLI 工具链的构建。核心贡献者 EazyReal 提交了大量针对底层边界的修复，项目整体正处于基础设施重构与功能扩展的活跃期。

**2. 版本发布**
无新版本发布。

**3. 重点 Issues**
*   **[CLOSED] [Feature] Support PD Disaggregation** ([#1329](https://github.com/areal-project/AReaL/issues/1329))
    *   **作者**: ZiyiTsang
    *   **摘要**: 该 Issue 旨在讨论并推动 PD（Prefill-Decode，预填充-解码）分离架构的落地。在 RL 训练中，Rollout 阶段通常占据绝大部分耗时，而自回归解码阶段的访存瓶颈会导致 GPU 计算资源闲置。通过将推理过程拆分为 Prefill 和 Decode 两个独立角色，可以更精细地管理和调度资源，这是突破现有 RLHF 训练性能瓶颈的业界公认方向。

**4. 关键 PR 进展**

*   **架构与性能优化**
    *   **[OPEN] feat[v2]: Support PD Disaggregation: DP=2(1P1D),TP=n** ([#1364](https://github.com/areal-project/AReaL/pull/1364)) by ZiyiTsang
        *   对应 Issue #1329，正式实现了 PD 分离的架构代码，将推理拆分为两个特化角色，预计将大幅提升 Rollout 速度。
    *   **[OPEN] feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter** ([#1372](https://github.com/areal-project/AReaL/pull/1372)) by dingzhiqiang
        *   为百灵 MoE V2.5 系列模型添加了 NVIDIA `megatron-bridge` 适配器，支持双桥接模式，提升了大规模 MoE 模型的兼容性和训练效率。
    *   **[OPEN] feat(agent_service): add OpenClaw per-session agent runtime** ([#1383](https://github.com/areal-project/AReaL/pull/1383)) by IF007
        *   集成 OpenClaw 作为智能体运行时，通过为每个 RL 会话生成独立的网关子进程，实现了基于会话的 LLM 密钥隔离，大幅增强了 Agent RL 场景下的追踪与部署能力。

*   **PPO 核心算法与损失函数修复 (by EazyReal)**
    *   **[OPEN] feat(ppo): add token, sequence, and prompt loss aggregation** ([#1417](https://github.com/areal-project/AReaL/pull/1417)) - 解除了底层对单一 Policy-gradient 损失的硬编码，支持 Token、Sequence 和 Prompt 级别的灵活损失聚合。
    *   **[OPEN] fix(ppo): derive group norm size from n_samples** ([#1413](https://github.com/areal-project/AReaL/pull/1413)) - 修复了群组奖励/优势归一化时，因手动设置导致偏离实际采样数并静默产生错误归一化行的隐患。
    *   **[OPEN] feat(rollout): add min_valid_group_size** ([#1416](https://github.com/areal-project/AReaL/pull/1416)) - 允许在 Grouped Rollout 中丢弃存活采样过少的组，避免在残缺的数据组上进行训练。

*   **Tokenizer 兼容性与边界异常修复**
    *   **[OPEN] fix(api): normalize tokenizer-derived stop token ids** ([#1425](https://github.com/areal-project/AReaL/pull/1425)) - 修复了不同架构模型（如 base-Llama 无 pad_id，Llama-3 多 EOS_id）导致的停止词解析异常。
    *   **[OPEN] fix(io_struct): support multi-EOS models in stop-token handling** ([#1433](https://github.com/areal-project/AReaL/pull/1433)) by PheelaV - 修复了 Gemma 4 等多 EOS 模型在响应截断时的解析崩溃问题。
    *   **[OPEN] fix(dataset): correct GSM8K SFT loss-mask boundary for merged tokens** ([#1427](https://github.com/areal-project/AReaL/pull/1427)) - 解决了 BPE 分词器在合并 Token 时导致 GSM8K 数据集 SFT loss mask 边界错误的问题。

*   **CLI 工具链与 CI/CD 升级**
    *   **[OPEN] feat(cli): add experimental cli scaffold** ([#1440](https://github.com/areal-project/AReaL/pull/1440)), **`areal inf`** ([#1434](https://github.com/areal-project/AReaL/pull/1434)), **`areal train`** ([#1435](https://github.com/areal-project/AReaL/pull/1435)) by sitabulaixizawaluduo - 引入了全新的服务化 CLI 基础设施，统一管理推理网关、训练任务和内部模型。
    *   **[OPEN] ci: add PyPI publish workflow and fix Megatron deps** ([#1404](https://github.com/areal-project/AReaL/pull/1404)) by mingcheng - 添加了自动化发布工作流，并将 Megatron 相关依赖从基于 Git 切换为更稳定的 PyPI 版本。

**5. 为什么值得在当前 RL 生态继续关注？**
AReaL 今天的代码变动清晰地反映了当前大模型强化学习的几个核心痛点及技术演进趋势：
1. **Rollout 瓶颈的正面攻坚**：PD 分离架构（#1364）的落地，表明项目正试图通过系统级重构来突破自回归解码带来的显存带宽瓶颈，这是提升 RLHF 吞吐量的关键。
2. **多模态与复杂模型的工程深水区**：连续修复多 EOS 模型解析（#1433）、BPE 分词导致的 Loss-mask 越界（#1427），并接入百灵 MoE 大模型，说明 AReaL 正在致力于抹平不同底层模型架构在接入 RL 训练时的工程阻力。
3. **从“算法脚本”走向“系统服务”**：一连串 CLI（#1434, #1435）和 OpenClaw 运行时（#1383）的提交，意味着项目正在向高内聚的分布式 RL 微服务平台演进，大幅降低了多轮 Agent 训练和大规模集群部署的门槛。对于关注 RL 底层系统架构优化的开发者和分析师而言，AReaL 的代码迭代极具参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

**Hugging Face TRL 强化学习生态日报 (2026-06-26)**

### 1. 今日速览
过去 24 小时内，TRL 仓库活跃度高度集中在底层架构重构与稳定性修复。共更新 **20 条 Issues** 和 **31 条 PRs**，无新版本发布。活动核心围绕 `GRPOTrainer` 与 vLLM 集成的死锁/OOM问题排查，以及官方维护者对 QLoRA、多环境支持、KTO API 稳定性的大规模代码重构。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
当前社区反馈的痛点高度集中在 GRPO + vLLM 分布式训练的显存溢出（OOM）与多卡通信死锁问题，同时浮现了边界情况下的崩溃 Bug：

*   **[GRPO+vLLM 致命错误]** GRPO 在 colocate 模式下，当 vLLM 返回 NaN token logprob 时触发 `NoneType` 推断崩溃，底层的空值检查未拦截异常。（[Issue #6166](https://github.com/huggingface/trl/issues/6166)）
*   **[多卡通信死锁]** GRPO 训练在非 NVLink 硬件上使用 vLLM + PEFT 时频繁卡死，或在迭代过程中遭遇 NCCL timeout 与 `torch.distributed.DistStoreError`。（[Issue #2923](https://github.com/huggingface/trl/issues/2923), [Issue #3221](https://github.com/huggingface/trl/issues/3221)）
*   **[显存瓶颈]** 社区持续报告 GRPO 训练极其吃显存，即使在 80G A100 上微调 4B 模型（如 Qwen3-4B）或结合 DeepSpeed ZeRO-3 时依然会遭遇 OOM。（[Issue #3456](https://github.com/huggingface/trl/issues/3456), [Issue #3858](https://github.com/huggingface/trl/issues/3858), [Issue #4585](https://github.com/huggingface/trl/issues/4585)）
*   **[SFT 训练异常]** 自 v0.20.0 起，配置 `max_length` 进行截断会导致 SFT 训练 Loss 停滞，必须改用 `max_seq_length` 才能正常收敛。（[Issue #3910](https://github.com/huggingface/trl/issues/3910)）

### 4. 关键 PR 进展
官方维护者（@qgallouedec, @albertvillanova 等）今日提交了大量关于代码规范化和 API 提升的 PR，并针对痛点问题进行了修复：

*   **[稳定性修复] 解决非 NVLink 架构死锁**：在 `vllm_generation.py` 生成前添加默认进程组 barrier，修复了 GRPO + vLLM Colocate + PEFT 场景下的潜在死锁问题。（[PR #6139](https://github.com/huggingface/trl/pull/6139)）
*   **[重大功能] KTO 提升为稳定 API**：将 KTOTrainer 和 KTOConfig 从 `trl.experimental` 正式移至稳定核心 API，并对齐了底层 Collator 键值。（[PR #6175](https://github.com/huggingface/trl/pull/6175), [PR #6182](https://github.com/huggingface/trl/pull/6182)）
*   **[GRPO 算法优化] 新增熵正则化**：为 GRPO 引入静态与自适应熵正则化支持，防止策略在训练过程中过早坍缩，鼓励模型探索。（[PR #6140](https://github.com/huggingface/trl/pull/6140)）
*   **[架构重构] 简化 QLoRA 调用**：为 SFT/DPO/GRPO 等 Trainer 统一添加 `quantization_config` 参数，免去了用户手动加载模型或使用 `model_init_kwargs` 的繁琐操作。（[PR #6157](https://github.com/huggingface/trl/pull/6157)）
*   **[性能优化] SFT 数据预处理前移**：将序列截断操作从 Data Collator 移至 `_prepare_dataset` 阶段，避免了每个 Batch 重复计算截断，提升数据加载效率。（[PR #6155](https://github.com/huggingface/trl/pull/6155)）
*   **[复杂 RL 支持] 多环境批量构建**：重构 GRPO/Async-GRPO，支持在 Batch 级别池化和构建环境工具字典，为多环境复合 RL 训练打下基础。（[PR #6001](https://github.com/huggingface/trl/pull/6001), [PR #6002](https://github.com/huggingface/trl/pull/6002)）

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 在 2026 年中阶段正在经历一次“由繁入简”的底层架构重构。从今日的 PR 动向可以明确看出：
1.  **死磕 Agentic RL 基础设施**：通过引入 `Async GRPO`、多环境支持（`environment_factory`）、随机状态重置等特性，TRL 正在将 RL 训练从“单一静态数据集微调”推向“多环境智能体交互”的深水区。
2.  **解决 LLM RL 的工程痛点**：GRPO + vLLM 的 Colocate 机制是当前开源社区最高效的 RLHF 范式，但其显存泄漏和通信死锁一直被开发者诟病。TRL 团队今日通过添加 Barrier、修复 NaN 拦截和引入 Entropy Regularization，正以极高的颗粒度填补这些工程黑洞。
3.  **统一且现代化的 API 设计**：从推动 QLoRA 参数统一化、到将 KTO 从实验性接口转正，TRL 正在巩固其作为“LLM 对齐工具箱最大公约数”的地位，极大降低了前沿 RL 算法（如 GOLD, DRO, RLOO）的复现门槛。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# 🤖 RL 开源生态日报 | 2026-06-26

**项目聚焦**: [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
**数据周期**: 过去 24 小时

---

### 1. 今日速览
OpenRLHF 仓库整体活跃度趋于平稳。过去 24 小时内未收到新的 Issues，无新版本发布。开发重点聚焦于现有代码库的健壮性维护，针对强化学习（RLHF/PPO）训练过程中的特定边界问题（如 Token 长度惩罚计算）进行了持续修复与优化。

### 2. 版本发布
- **无新增 Release**。
*(注：项目目前处于稳定迭代期，建议开发者关注 `main` 分支的最新提交。)*

### 3. 重点 Issues
- **无新增或更新的 Issues**（0 条）。
*(注：社区当前未提出新的功能需求或 Bug 报告。)*

### 4. 关键 PR 进展
今日有 **1 条核心 PR** 更新，聚焦于 PPO 训练中长序列惩罚逻辑的精确性：

- **[#1246] [OPEN] Fix overlong penalty action token length** 
  - **作者**: Jiang020609
  - **更新时间**: 2026-06-25
  - **技术摘要**: 修复了过度长度惩罚中的 Action Token 计算逻辑。引入了 `action_mask` 机制，确保在计算超长惩罚的响应长度时，**剔除工具调用的响应 Token**。此举将 Agent 场景下的 Token 计数与实际可训练的响应 Token 严格对齐，显著提升了多轮工具调用/Agent RL 训练时的长度惩罚准确性。
  - **关联修复**: [#1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243)
  - **测试覆盖**: 已通过 `pytest tests` 及 `pre_commit` 针对性测试验证。
  - **🔗 PR 链接**: [OpenRLHF/OpenRLHF PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **深入 Agent/Tool-use RL 细节**：如 PR #1246 所示，OpenRLHF 的演进已不再局限于基础的对话对齐，而是深入到了**包含工具调用的 Agent 强化学习场景**。通过精细控制 `action_mask` 来区分“工具响应”与“模型自发响应”，这是目前构建复杂智能体训练框架的核心技术难点。
2. **大模型底层训练机制的严谨性**：在 PPO 等强化学习算法中，序列长度直接关系到 Value/Loss 的计算和显存占用。OpenRLHF 对“超长惩罚”机制的持续修补，表明该项目对 RL 数学损失与工程实现的一致性有着极高的要求，是研究大模型底座 RL 工程化的优质参考实现。

---
*数据统计截至 2026-06-26，由 RL 生态自动分析助手生成。*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl RL 生态项目日报 (2026-06-26)**

以下是过去 24 小时内 `verl-project/verl` 仓库的关键动态摘要。

### 1. 今日速览
- **Issues 更新**：6 条（2 条已关闭，4 条开放中）
- **PR 更新**：22 条（包含多个核心功能增强与底层架构优化）
- **新版本发布**：0 个（主分支保持持续迭代）

### 2. 版本发布
无新版本发布。近期仓库已合并包含 Ascend Docker 0.8.0 镜像等基础设施更新，主干处于高频迭代状态。

### 3. 重点 Issues
- **[Bug] FlashInfer FP16 MoE 导致 Rollout 损坏** (#6847)
  - **摘要**：在多节点 Colocate-Async 架构下，使用 Qwen3-Coder-30B-A3B 模型进行训练时，FlashInfer 的 FP16 MoE 计算会导致 Rollout 数据损坏。该问题直指大参数量 MoE 模型在分布式训练底层的精度与并发兼容性痛点。
  - **链接**：https://github.com/verl-project/verl/issues/6847
- **[Bug] LoRA 结合 GRPO 训练报错** (#6851)
  - **摘要**：开发者反馈在使用 Qwen2.5-7B-VL 进行 LoRA + GRPO 训练时遭遇阻断性错误。反映了社区对轻量化 RLHF 微调工作流的强烈需求。
  - **链接**：https://github.com/verl-project/verl/issues/6851
- **[Ascend] 社区任务发布** (#6439)
  - **摘要**：官方持续发布并跟踪 verl 在昇腾（Ascend）生态的适配任务，包含 Megatron + vllm_ascend 完成 Qwen2.5 7B + FAPO-GenRM-4B 训练等硬核工程。
  - **链接**：https://github.com/verl-project/verl/issues/6439

### 4. 关键 PR 进展
今日的 PR 动态展现了 verl 在**训练机制创新**、**异构硬件适配**与**显存/通信压榨**方面的强劲演进：

- **训练算法与架构优化**
  - **[OPSD] 特权上下文教师评分机制** (#6833)：引入在线策略自蒸馏（OPSD）的第一阶段支持。教师模型基于 Ground Truth（特权上下文）进行条件生成，从而为学生模型自身的在线 Rollout 进行评分，突破了传统 OPD 的局限。
    - 链接：https://github.com/verl-project/verl/pull/6833
  - **[SGLang] 分离式 Rollout 增量权重同步** (#6794)：颠覆性地在 Trainer 到 Rollout 的通信链路中引入“增量权重同步（Delta weight sync）”。RL 后训练中 99% 的 BF16 权重字节未发生变化，该机制仅广播发生改变的 `(position, value)` 对，极大降低通信带宽开销。
    - 链接：https://github.com/verl-project/verl/pull/6794
  - **[OPD] 显存与算力优化** (#6848)：针对 `forward_kl_topk` 算子，通过引入 `distillation_only` 标志，跳过冗余的全词表 log_probs 和 PPO-loss 计算，大幅降低 VRAM 占用。
    - 链接：https://github.com/verl-project/verl/pull/6848

- **多模态与工程修复**
  - **多模态训练扩展** (#6849)：新增对图像数学推理（Open-R1）和视频多选问答（TinyLLaVA-Video-R1）数据集的 GRPO 训练支持。
    - 链接：https://github.com/verl-project/verl/pull/6849
  - **云原生数据加载** (#6850)：在 `copy_to_local` 中接入 `fsspec`，直接支持从 `gs://` (GCS) 和 `s3://` 拉取数据集或模型，提升云上集群的可用性。
    - 链接：https://github.com/verl-project/verl/pull/6850
  - **Bug 修复**：修复 FSDP 在禁用 Padding 时的 Kernel 崩溃 (#6846)，以及稀疏奖励 Key 导致的验证指标计算崩溃 (#6845)。

- **Ascend (昇腾) 生态深度共建**
  今日有 6 个以上与 Ascend 相关的 PR 更新，涵盖广泛：
  - **INT8 在线量化** (#6834)：原生支持 Ascend NPU 在 GRPO/PPO Rollout 时的 W8A8_DYNAMIC 在线动态量化。
    - 链接：https://github.com/verl-project/verl/pull/6834
  - **CI 与基础设施**：修复 vLLM-Ascend 采样流改变导致的 Tool-Calling 报错 (#6843)，更新多节点 E2E 测试工作流 (#6840) 等。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在跨越单纯的“RLHF 脚本库”阶段，演进为**高性能、多底层兼容的工业级 RL 训练框架**：
1. **突破通信瓶颈**：Delta Weight Sync 等增量同步技术的引入，直击百亿/千亿参数模型在分布式 RL 训练中的 I/O 瓶颈，这对于 Colocate 架构的扩容至关重要。
2. **算法前沿探索**：快速集成了 OPSD（在线策略自蒸馏）、特权上下文评分等前沿 RLHF/RLAIF 技术，紧跟学术与工业界的最新对齐范式。
3. **真正的全栈异构计算**：从高频合并的 Ascend 适配 PR 可以看出，verl 正在摆脱对单一 GPU 生态的绝对依赖，构建涵盖 NVIDIA / Ascend、Megatron / FSDP、vLLM / SGLang 的全栈式异构支持矩阵。具备极强的企业级落地潜力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

这份报告基于 2026-06-26 的 GitHub 追踪数据，为您梳理 Open Instruct 项目的最新进展。

### 1. 今日速览
- **Issues 动态**：0 条更新。
- **PR 动态**：8 条更新（其中 7 条为 Open 状态推进，1 条已关闭）。
- **版本发布**：0 个新版本发布。
- **核心基调**：项目当前处于高密度的底层功能迭代期，重点攻克**异步在线 RL 的训练稳定性**、**沙盒环境的高可用性**以及**针对复杂任务（如 SWE）的 RL 基建**。

---

### 2. 版本发布
**无新版本发布**。
项目目前通过主分支持续集成新功能，未进行正式的 Tag 发布。

---

### 3. 重点 Issues
**本日无活跃 Issue 讨论**。结合高频的 PR 提交，说明核心开发团队目前有明确的 Roadmap，正处于“功能开发与内部代码审查”阶段，而非问题排查阶段。

---

### 4. 关键 PR 进展
本日的 PR 更新涵盖了从底层算法到工程基建的多个关键维度：

#### A. RL 核心算法与训练机制
*   **引入 DPPO 损失函数** ([PR #1733](allenai/open-instruct PR #1733))
    *   **进展**：新增 `--loss_fn dppo` 选项，实现了论文中的 DPPO 算法。
    *   **技术价值**：通过基于 token 的伯努利散度强制实施信任域，防止策略更新偏离过远，提升了 PPO 类算法的稳定性。
*   **异步 GRPO 丢弃过期 Rollout 结果** ([PR #1738](allenai/open-instruct PR #1738))
    *   **进展**：在 `accumulate_inference_batches` 中增加 `max_result_age_steps` 参数。
    *   **技术价值**：解决了异步 RL 中的核心痛点——当生成策略落后当前训练步数过多时（即 Off-policy 程度过高），直接丢弃该批数据，而非用于训练，从而保证数据的新鲜度。
*   **增加环境池获取超时时间** ([PR #1729](allenai/open-instruct PR #1729))
    *   **进展**：将 `DEFAULT_ACQUIRE_TIMEOUT_S` 从 600s 提升至 7200s。
    *   **技术价值**：避免在执行超长周期的沙盒 Rollout（如复杂的 Agent 任务）时，因等待 Actor 而引发伪超时报错。

#### B. SWE-bench 与 Agent 沙盒环境基建
*   **新增独立 Bash 沙盒环境** ([PR #1739](allenai/open-instruct PR #1739))
    *   **进展**：引入 `SWERLVanilluxSandboxEnv`。
    *   **技术价值**：提供了一个自带持久化 Shell（跨命令保留工作目录和环境变量）的纯 Bash 沙盒，非常适合用于训练基于命令行交互的代码/Agent 修复模型。
*   **按需分配的 Docker 任务沙盒** ([PR #1492](allenai/open-instruct PR #1492) - 已关闭)
    *   **进展**：该 PR 已被关闭（推测功能已重构或合并入其他沙盒实现中）。原本旨在提供基于 Docker 的单任务测试隔离环境。

#### C. 沙盒系统鲁棒性强化
*   **DockerBackend 健壮性提升** ([PR #1732](allenai/open-instruct PR #1732))
    *   **进展**：增加跨进程的启动/执行并发信号量限制，并引入重试与 OOM 检测机制。
    *   **技术价值**：有效防止在高并发 Rollout 下压垮 Docker 守护进程（如解决 "database is locked" 报错），并增加对瞬时 API 错误的容忍度。

#### D. 数据处理与模型兼容性
*   **SFT Tokenization 支持 Tool Schema** ([PR #1734](allenai/open-instruct PR #1734))
    *   **进展**：在 SFT 阶段将数据集的 `tools` 列传入 `apply_chat_template`。
    *   **技术价值**：补齐了 SFT 阶段对 Function Calling / 工具调用能力的支持，使模型在训练时能“看到”并理解工具的 Schema。
*   **兼容显式 head_dim 的 HF 模型配置** ([PR #1731](allenai/open-instruct PR #1731))
    *   **进展**：优化 `ModelDims.from_hf_config`。
    *   **技术价值**：修复了复合模型或 VLM（视觉语言模型）中 `hidden_size` 无法被 `num_attention_heads` 整除时报错的问题，提升对前沿架构的兼容性。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
Open Instruct 作为 Ai2 的主打的指令微调与对齐框架，其近期的演进方向精准踩中了当前 RLHF/RLAIF 领域的工程痛点：
1.  **深耕异步在线强化学习：** 通过解决异步数据过期（PR #1738）和资源死锁（PR #1729）问题，Open Instruct 正在大幅降低大规模、高延迟环境（如 Tool Use、Agent Rollout）下做在线 RL 的工程门槛。
2.  **发力 Agentic RL 基建：** 针对 SWE-bench 和代码执行任务，全面铺开 Docker 沙盒环境矩阵，并着力解决高并发下的 OOM 与进程管理问题（PR #1732, #1739）。这为社区提供了除 verl / trl 之外，更侧重于复杂环境交互的 RL 训练底座选择。
3.  **紧跟前沿算法与多模态：** 快速集成最新的信任域算法（DPPO），同时持续打磨对最新 VLM 架构的兼容性，表明其不仅仅是一个语言模型的训练工具，而是一个全面的全模态对齐平台。

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

**强化学习 (RL) 日报：Gymnasium 生态追踪 (2026-06-26)**

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库共处理 **9 条 Issues** 和 **2 条 Pull Requests**。今日无新版本发布。活动焦点集中在**底层物理引擎迁移规划（Box2D 到 Pymunk）**、**核心维护（Python 3.14 适配与 CI 修复）**以及**类型检查工具链（ty）的配置优化**。维护者 jkterry1 发起了多项 “[help wanted]” 任务，积极邀请社区开发者参与核心代码的迭代。

### 2. 版本发布
* **Releases**: 无 (最近的核心版本更新已在早前完成，当前主要精力集中于底层重构与新版本兼容性扫尾)。

### 3. 重点 Issues
今日的 Issues 揭示了 Gymnasium 在维持 API 稳定性与推进现代化底层架构之间的技术博弈：

* **核心架构演进：物理引擎迁移**
  * [#1597 [help wanted] Port all environments from box2d to pymunk](https://github.com/Farama-Foundation/Gymnasium/issues/1597)
    * **摘要**: 维护者指出 Box2D 的 Python 绑定已约 6 年未维护，提议将所有环境底层的物理引擎全面迁移至绑定更活跃、文档更完善的 `pymunk` (基于 Chipmunk)。这是后续 RL 环境标准化的重要基建变更。
* **生态适配：Python 3.14 支持与 CI 修复**
  * [#1594 Python 3.14](https://github.com/Farama-Foundation/Gymnasium/issues/1594)：在上个版本解锁基础支持且 ALE 兼容后，维护者请求社区协助提交 PR，以实现全面原生支持 Python 3.14。
  * [#1593 Fix CI on Main](https://github.com/Farama-Foundation/Gymnasium/issues/1593)：因升级 GitHub Actions 版本导致主分支 CI 报错，向社区请求修复 PR。
* **工具链与类型检查**
  * [#1600 [bug] ty 在 pre-commit 中未正确识别可选模块](https://github.com/Farama-Foundation/Gymnasium/issues/1600)：新引入的类型检查工具 `ty` 报出 100 个 `unresolved-import` 警告。
  * [#1599 [enhancement] 移除 pyproject.toml 中的 respect-type-ignore-comments = false](https://github.com/Farama-Foundation/Gymnasium/issues/1599)：考虑到向下兼容和 API 稳定性，部分类型警告无法彻底重构，提议调整配置以抑制无效的忽略注释警告。
* **经典环境增强**
  * [#1364 [enhancement] Allow custom rewards in FrozenLakeEnv](https://github.com/Farama-Foundation/Gymnasium/issues/1364)：提议在经典的 FrozenLake 环境中支持自定义奖励函数（打破固定的 G+1, H/F=0 限制），方便研究者测试非常规的强化学习奖励调度。
* **其他闭环与维护**
  * [#1596 [help wanted] Blackjack 渲染卡牌图像问题](https://github.com/Farama-Foundation/Gymnasium/issues/1596)：修复 toy text 环境中 Blackjack 扑克牌渲染关联问题。
  * [#1457 [CLOSED] 旧版 Gym 被注入广告字符串](https://github.com/Farama-Foundation/Gymnasium/issues/1457)：关于废弃的旧版 Gym 包中提示用户升级至 Gymnasium 的强制性字符串注入讨论，现已关闭。
  * [#1590 [CLOSED] Needle-in-a-Haystack Attentional Collapse...](https://github.com/Farama-Foundation/Gymnasium/issues/1590)：一篇讨论大模型上下文窗口与多模态热力学陷阱的无关/溢出议题，已被正确关闭。

### 4. 关键 PR 进展
开发者 Trenza1ore 和 Siliconlive 迅速响应了维护者在工具链和 CI 方面的诉求：

* [#1598 [CLOSED] Various fixes regarding typing & code style](https://github.com/Farama-Foundation/Gymnasium/pull/1598)
  * **摘要**: 针对近期开发主线中的类型报错和 CI 问题进行了初步安全修复，作者刻意避免了可能破坏下游代码 API 一致性的激进改动。该 PR 作为阶段性成果已被关闭/合并。
* [#1601 [CLOSED] fix: Configure pre-commit to skip unresolved-import warnings](https://github.com/Farama-Foundation/Gymnasium/pull/1601)
  * **摘要**: 迅速响应 Issue #1600，通过修改 pre-commit 配置，直接跳过了因 `ty` 工具无法解析可选依赖模块而导致的导入警告，恢复了本地提交的流畅度。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **底层环境标准化避险**：Gymnasium 正积极摆脱陈旧且缺乏维护的第三方依赖（如 Box2D 绑定）。向 Pymunk 迁移的决策表明，项目团队在为 RL 生态提供长期、稳定、无潜在崩溃风险的标准环境基准。
2. **现代 Python 工具链的试验田**：项目正在处理 Python 3.14 适配以及最前沿的类型检查器（如 `ty`）集成。如何在拥有庞大下游依赖（如各类 RL 算法库）的情况下，平衡“严格的静态类型检查”与“向后兼容”，Gymnasium 的代码库演进提供了极佳的工程参考。
3. **活跃的社区共治模型**：维护者 jkterry1 高频使用 `[help wanted]` 标签拆解核心任务（物理引擎重写、Python 版本升级）。这表明项目具备极强的活跃度与开放性，是开发者深度参与顶级 RL 基础设施建设的优质切入点。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 日报：PettingZoo 生态追踪 (2026-06-26)**
**数据源**：[Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库活跃度极高，共有 **7 条 Issue 更新**（3 条仍处 Open 状态）和 **8 条 PR 更新**（其中 6 条已顺利合并）。尽管今日 **0 个新版本发布**，但核心维护者（@jkterry1, @mfornet, @Nikelroid）集中推进了底层依赖重构、代码格式化工具链统一以及一系列核心 Bug 修复。项目正处于深度瘦身与现代化的快速迭代期。

---

### 2. 版本发布
* **无新版本发布**。
* *注：虽然无正式 Release，但 PR 中已包含环境版本迭代（如 `gin_rummy_v4` → `v5`），预示着下一个版本将包含破坏性更新（Breaking Changes）。*

---

### 3. 重点 Issues
今日的 Issue 主要集中在**废弃老旧依赖**与**内部架构重构**的提案上：

* **弃用 Python 3.9 支持**（[Issue #1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358)）
  *状态: OPEN* | 为适配上游依赖（如仅支持 Py3.11+ 的 `open_spiel`），官方正式计划停止对 Python 3.9 的支持。
* **经典环境后端迁移至 OpenSpiel**（[Issue #1366](https://github.com/Farama-Foundation/PettingZoo/issues/1366)）
  *状态: OPEN [help wanted]* | 计划通过 [Shimmy](https://github.com/Farama-Foundation/Shimmy) 将内部维护的经典环境（如棋盘/纸牌游戏）底层逻辑迁移至 OpenSpiel，逐步移除已停止更新的 RLCard。
* **重构内部 Wrapper 模块**（[Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)）
  *状态: OPEN [help wanted]* | 计划将环境包装器从 `supersuit` 迁移至原生的 `pettingzoo.wrappers`（对齐 Gymnasium 的设计），并最终淘汰 SuperSuit。官方呼吁社区以“一 PR 一个 Wrapper”的形式参与贡献。
* **统一 Linting 工具链**（[Issue #1356](https://github.com/Farama-Foundation/PettingZoo/issues/1356)）
  *状态: CLOSED* | 提议移除 `black` 和 `isort`，全面拥抱 `ruff` 进行代码格式化和检查。

---

### 4. 关键 PR 进展
大量修复与重构 PR 在今日被合并（CLOSED 通常代表已合并），显著提升了框架的稳定性和代码质量：

* **全面启用 Ruff 并移除 Black/isort**（[PR #1371](https://github.com/Farama-Foundation/PettingZoo/pull/1371)）
  *状态: CLOSED* | 实施了 Issue #1356 的提案，与 Gymnasium 的工具链保持一致。
* **Gin Rummy 奖励修复与版本升级**（[PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335) & [PR #1367](https://github.com/Farama-Foundation/PettingZoo/pull/1367)）
  *状态: CLOSED* | 修复了 `gin_rummy` 在 `reset(seed=...)` 时奖励值静默回退至 RLCard 默认值的致命 Bug。由于影响学习性能，触发环境版本升级 `gin_rummy_v4` → `v5`。
* **MPE 模块平滑迁移警告**（[PR #1370](https://github.com/Farama-Foundation/PettingZoo/pull/1370)）
  *状态: CLOSED* | 之前直接移除 MPE 导致 `ModuleNotFoundError`，现加入平滑的导入警告，指引开发者使用独立的 `mpe2` 包。
* **修复类型检查器 `ty` 报错**（[PR #1374](https://github.com/Farama-Foundation/PettingZoo/pull/1374)）
  *状态: CLOSED* | 通过参数化 `gymnasium.spaces.Space` 泛型，修复了 Astral 的类型检查器在 `main` 分支上的报错。
* **修复 RLCard 渲染性能损耗**（[PR #1372](https://github.com/Farama-Foundation/PettingZoo/pull/1372)）
  *状态: CLOSED* | 解决了纸牌图片过大导致的内存占用问题，将原图裁剪至实际渲染大小。
* **修复 Hanabi 观测空间文档**（[PR #1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368)）
  *状态: OPEN* | 借助 LLM（Codex / Claude）辅助审查，修复了复杂的 Hanabi 环境观测层布局文档。

---

### 5. 为什么在当前 RL 生态值得继续关注？
作为多智能体强化学习（MARL）的标准 API 提供者，PettingZoo 今天的动态透传了三个关键的生态趋势：
1. **极简主义与原生整合**：将 Wrappers 内聚到 `pettingzoo.wrappers` 并计划“杀死” SuperSuit，表明 PettingZoo 正在向 Gymnasium 那样高度自洽、低外部依赖的框架演进，这将大幅降低多智能体项目的环境配置心智负担。
2. **紧跟现代 Python 工程链路**：果断弃用 Black/isort 转向 Ruff，以及对 Astral 新类型检查器 `ty` 的第一时间适配，体现了其维护标准库级别的工程严谨性。
3. **聚焦底层可靠性**：修复 `seed` 导致的奖励重置 Bug（PR #1335）对于 MARL 算法的可复现性至关重要。如果你在做多智能体研究，依赖 PettingZoo 目前这种高频且深入的“底层大扫除”，你的基线实验将得到更可靠的技术保障。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>