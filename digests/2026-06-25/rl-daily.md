# RL 开源生态日报 2026-06-25

> 生成时间: 2026-06-24 22:25 UTC | 覆盖项目: 15 个

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

当前的强化学习（RL）开源生态正呈现出高度的分化与专业化演进态势。以大语言模型（LLM）及多模态模型（LMM）对齐为核心的 RL 训练框架（如 TRL、verl、slime、AReaL）占据了生态的绝对核心与创新制高点，其技术迭代飞轮极速运转。另一方面，以经典传统强化学习和多智能体环境（如 Gymnasium、PettingZoo、CleanRL）为代表的底层基建，正在经历深度重构与工程现代化进程，通过引入最新的工具链与 AI 辅助开发来稳固地基。同时，针对 RL 训练全生命周期的云原生调度与沙箱隔离平台（如 ROCK、ROLL）正在补齐大规模分布式训练最后的一公里。

## 各项目活跃度对比

过去 24 小时内，各项目活跃度呈现极大的落差。LLM 赛道的核心框架（TRL、verl、slime、AReaL）吞吐量惊人，传统 RL 库重心转向底层代码重构，而部分老牌库则处于静默状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 22 | 24 | 0 | 硬核攻克 MoE/长序列并行与全异步通信，推进多硬件生态 |
| **PettingZoo** | 26 | 16 | 0 | 大规模清理技术债务，重构物理引擎，拥抱 AI 辅助研发 |
| **TRL** | 15 | 36 | 0 | 极速跟进 GRPO 变体与多智能体支持，深度对齐 vLLM 底层 |
| **slime** | 1 | 17 | 0 | 聚焦超大 MoE 模型适配，死磕分布式边界异常与显存调度 |
| **Gymnasium** | 16 | 4 | 0 | 筹备底层物理引擎大迁徙，强化测试工具与防呆设计 |
| **AReaL** | 3 | 9 | 0 | 从训练框架向端到端 Agent 系统服务平台演进 |
| **ROCK** | 3 | 6 | 1 | v1.9.4 发布，强化沙箱资源隔离与生产级部署稳定性 |
| **Open Instruct** | 1 | 4 | 0 | 严抓底层梯度运算数学正确性，下探极限显存优化 |
| **CleanRL** | 0 | 3 | 0 | 完善核心数学逻辑的白盒单元测试，巩固教学标杆地位 |
| **ROLL** | 0 | 1 | 0 | 紧跟 FSDP2，发力国产昇腾 NPU 软硬协同适配 |
| **OpenRLHF/SB3 等** | 0 | 0 | 0 | 过去 24h 无明显代码动态 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **GRPO 算法范式深化**：GRPO 已确立其在开源 LLM RL 中的核心地位，当前生态正密集攻克其脆弱点。例如 TRL 引入 STARE 损失与熵正则化，slime 和 AReaL 则集中修复了组归一化在边界数据下导致的计算污染问题。
2. **多模态与 Agentic RL 起势**：纯文本 RLHF 已不能满足需求。TRL 和 verl 正在重构多环境/多模态 Agent 的交互支持，slime 和 AReaL 引入了 Agent 服务运行时，将“动态环境交互”模块化。
3. **高级蒸馏与采样修正**：为了提升 RL 的效率和探索能力，On-Policy 自蒸馏（OPSD/OPD）、基于惊异度的重加权以及离线策略的重要性采样（IS correction）正在被迅速集成到各大框架中。

**工程/基础设施侧信号：**
1. **生成与训练的极致异步协同**：为了打破 Actor 与 Rollout 模型间的权重同步瓶颈，verl 实现了 SGLang 全异步广播，slime 重构了三阶段显存静默释放机制。
2. **显存与通信极限压榨**：FP8 训练直传（避免反量化）、分块大词表 Lm-head 损失重计算、以及深度整合 vLLM 原生 API，成为各框架降低百亿参数模型 RL 门槛的标配动作。
3. **国产异构算力全面布局**：应对算力供给挑战，verl 和 ROLL 投入大量精力进行 AMD ROCm 和华为昇腾 NPU 的底层适配与 CI/CD 升级。

## 差异化定位分析

- **TRL (HuggingFace)**：定位为**前沿算法的“集大成者与下沉通道”**。它凭借极高的 PR 吞吐量，将最新顶会算法（如 STARE）封装为易用接口，并迅速跟进 HuggingFace 生态与 vLLM，是算法验证与平民化应用的首选。
- **verl (字节跳动)**：定位为**“重型分布式训练的攻坚利器”**。它直接硬刚超大规模 MoE 模型的上下文并行（CP>1）与异步通信底层痛点，适合千卡集群级别的硬核大模型 RL 任务。
- **slime (清华) & AReaL (蚂蚁)**：定位为**“防御性编程与工程极致优化的试验田”**。两者均极其重视训练底层的数值正确性（如防 KL tensor 污染）和长尾崩溃兜底（如 Ray Actor 瞬态断连重试），AReaL 更是向推理网关服务化延伸。
- **Open Instruct (AllenAI)**：定位为**“学术严谨性的护城河”**。高度聚焦数据流处理与底层梯度计算的绝对正确，其修复反映了科研复现中常踩的深坑。
- **PettingZoo & Gymnasium (Farama)**：定位为**“多智能体与单智能体环境的绝对标准底座”**。当前正忍痛剥离陈旧依赖，通过物理引擎重构为未来的高性能仿真铺路。
- **ROCK (阿里)**：定位为**“RL 算力调度的云原生操作系统”**。它跳出了算法层面，专注于解决海量沙箱并发时的容器隔离、磁盘配额与生产级稳定性。

## 社区热度与成熟度

当前生态的社区成熟度呈“倒挂”特征：**底层基础设施库的代码越老，但迭代越发谨慎和工程化；顶层 LLM 框架虽然年轻，但迭代极其激进。** 
以 PettingZoo 和 Gymnasium 为代表的老牌项目，当前正处于引入 Ruff、ty 等现代化 Linting 工具，甚至大规模借助 Claude Code 重构代码的阶段，社区的重心在于清理技术债和保障向下兼容性。相反，TRL、verl 等顶层框架社区热度爆棚，开发者高度活跃于硬核系统级 Bug 的修复（如 Megatron 隐式开启 per-token loss 导致的冲突）。ROCK 发布 v1.9.4 稳定版以及多项目强力推进 CI/CD 流水线，标志着大模型 RL 正在加速从实验室阶段向工业级 7x24 小时不间断生产迈进。

## 值得关注的趋势信号

1. **“防坍缩”与“精细化奖励”成为算法新重心**：从 TRL 的 STARE（异常 token 剥夺）和熵正则化，到 slime 修复 per-prompt baseline，业界正在意识到标准 PPO/GRPO 极度容易由于个别异常梯度导致策略崩溃，精细化控制成为主流。
2. **物理引擎的周期性换代**：PettingZoo 与 Gymnasium 同时推进从 Box2D 向 Pymunk 的底层迁移。这预示着传统 RL 仿真环境即将摆脱长期停滞的 C++ 绑定，未来可能会在 JAX 等异构加速框架上获得新生。
3. **异构算力（NPU/ROCm）支持从“Demo”走向“CI 严打”**：各大 RL 框架对国产算力和 AMD 的支持不再停留在文档层面，而是开始将其纳入双节点 E2E 流水线测试，这反映出开源生态正在认真准备应对“后 NVIDIA 主导时代”的算力迁移。
4. **AI 辅助开发重塑开源基建**：PettingZoo 大量合并基于大模型重构的 PR，以及 Open Instruct 完全采纳 GitHub AI 代码审查建议，证明了 LLM 不仅是 RL 的训练对象，更是当前重构复杂 RL 开源系统代码库的核心生产力工具。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-06-25 ROLL (alibaba/ROLL) RL 生态开源项目日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 项目的代码库整体节奏平稳，未产生新的 Issue 讨论或版本发布。社区的重心集中于底层异构计算硬件（华为昇腾 NPU）的工程化适配与文档维护，今日有 1 个关于昇腾 NPU 技术栈升级的文档与配置 PR 更新。

### 2. 版本发布
* **无**。当前项目未在今日发布新版本。

### 3. 重点 Issues
* **无**。过去 24 小时内无新增或更新的 Issue。

### 4. 关键 PR 进展
* **[OPEN] #466 docs: update Ascend NPU documentation**
  * **作者**: UsernameFull
  * **更新时间**: 2026-06-24
  * **链接**: [alibaba/ROLL PR #466](https://github.com/alibaba/ROLL/pull/466)
  * **技术摘要**: 该 PR 系统性地更新了昇腾 NPU 的 Docker 依赖、示例、CI 流水线及文档，以全面对齐当前的 `FSDP2 + vLLM-Ascend` 技术路径。核心基础设施升级包括：
    * 基础镜像依赖升至 **CANN 9.0.0** 与 **PyTorch 2.9.0**；
    * 推理与计算后端升至 **vLLM / vLLM-Ascend 0.18.0** 及 **triton-ascend 3.2.1**；
    * 新增了对 Atlas A5 硬件配置的相关支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日项目数据变动较少，但从 PR #466 的技术决策可以明显看出 ROLL 在当前强化学习（RL）及 LLM 训练生态中的核心卡位价值：
1. **紧跟前沿系统范式**：全面拥抱 `FSDP2` 架构，表明该项目对大规模模型分布式训练的内存管理与通信效率有着极高的工程追求，这是目前百亿/千亿级大模型 RLHF 阶段的痛点。
2. **深度绑定 vLLM 推理生态**：将 RL 训练与 `vLLM`（及其异构分支 `vLLM-Ascend`）深度整合，利用 vLLM 极致的推理吞吐来加速 RLHF 中的模型采样阶段，是当前极速 RL 训练框架的标配。
3. **抢占国产异构算力生态**：通过适配最新的昇腾 NPU (Atlas A5) 及 CANN 工具链，ROLL 正在解决 RL 生态过度依赖单一算力（NVIDIA GPU）的瓶颈。对于需要关注算力供应安全、探索国产软硬协同训练方案的算法与系统工程师而言，是一个极具参考价值的开源基座。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK 强化学习生态日报 (2026-06-25)**

### 1. 今日速览
过去 24 小时内，阿里巴巴 ROCK 项目活跃度较高，共产生 **1 个新版本发布**，**6 项 PR 更新**（其中 4 项顺利合入并关闭），以及 **3 条 Issue 更新**。核心动态集中在 **v1.9.4 版本发布**，底层 Sandbox 运行时的可配置性增强，以及 TS SDK 与 Python SDK 的深度对齐。

---

### 2. 版本发布
*   **[Release v1.9.4](https://github.com/alibaba/ROCK/releases/tag/v1.9.4)**
    *   **核心变更**：引入了通过 YAML / Nacos / SDK 配置 `startup_timeout` 的能力；同时将 master 分支的 6 个重要提交向后移植（backport）至 release/v1.9 线，涵盖归档清理、管理端守卫、fiber overcut 以及服务端优先的 OSS SDK。

---

### 3. 重点 Issues
今日的 Issue 主要围绕 **沙箱环境部署的资源控制与生产级稳定性** 展开：

*   **[#1157](https://github.com/alibaba/ROCK/issues/1157) [OPEN]**: 追踪将 master 分支的核心修复（服务端优先的 OSS SDK 迁移、归档清理健壮性、管理/运行时修复）向后移植到 v1.9 线。这反映了项目对生产环境正确性与稳定性的严格把控。
*   **[#1148](https://github.com/alibaba/ROCK/issues/1148) [CLOSED]**: 提议支持按镜像的沙箱部署配置化运行时环境。目前运行时仅依赖 `ROCK_WORKER_ENV_TYPE`，该需求旨在实现更细粒度的环境隔离。
*   **[#1145](https://github.com/alibaba/ROCK/issues/1145) [CLOSED]**: 提议在容器移除时支持匿名本地卷的磁盘配额限制与自动清理。解决现有 XFS project quota 仅能限制 overlay2 rootfs 的问题。

---

### 4. 关键 PR 进展
基础设施功能增强与版本维护是今日 PR 的主旋律：

*   **[PR #1160](https://github.com/alibaba/ROCK/pull/1160) [CLOSED]**: 将 ROCK 系统版本号更新至 1.9.4。
*   **[PR #1158](https://github.com/alibaba/ROCK/pull/1158) [CLOSED]**: 执行 Issue #1157 的计划，将 master 的 6 个核心提交 cherry-pick 至 release/v1.9 分支。
*   **[PR #1137](https://github.com/alibaba/ROCK/pull/1137) [OPEN]**: **重点进展**。对齐 TypeScript SDK 与 Python SDK，涵盖 8 大模块，新增 50+ 文件与 400+ 测试用例（包括 bench 基准配置、job/trial 执行系统等），大幅完善了前端/Node.js 生态的接入能力。
*   **[PR #1159](https://github.com/alibaba/ROCK/pull/1159) [CLOSED]**: 向 v1.9 分支移植匿名卷磁盘配额限制及移除时自动清理功能。
*   **[PR #1149](https://github.com/alibaba/ROCK/pull/1149) [CLOSED]**: 实现可配置化的运行时环境（对应 Issue #1148）。
*   **[PR #1154](https://github.com/alibaba/ROCK/pull/1154) [CLOSED]**: 主分支匿名卷磁盘配额强制限制及清理功能实现。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻坚 RL “最后一公里”的工程痛点**：强化学习的痛点不仅在算法，更在算力调度与沙箱环境。ROCK 最新动作（如细化容器级磁盘配额、按镜像解耦运行时环境）精准解决了 RL 训练中海量 Trial 评估时的底层资源隔离与崩溃清理难题。
2.  **面向云原生的稳定性提升**：从引入服务端优先的 OSS SDK、归档清理的容错增强，到允许通过 YAML/Nacos 灵活配置超时参数，ROCK 正在按照高标准的工业级生产要求迭代，保障 7x24 小时不间断的大规模 RL 训练。
3.  **多端 SDK 生态的统一**：TS SDK 的全面重构与对齐 Python SDK，意味着 ROCK 正在降低 Web 端集成与跨平台业务编排的门槛，这为构建更复杂的强化学习可视化和控制平面提供了极大便利。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**slime RL 日报摘要 (2026-06-25)**
> 项目仓库：[THUDM/slime](https://github.com/THUDM/slime)

### 1. 今日速览
过去 24 小时内，slime 仓库活动高度聚焦于底层架构优化与算法扩展。共有 **0** 个新版本发布，**1** 条 Issue 更新，**17** 条 PR 更新。从提交活跃度来看，核心贡献者（EazyReal 等）正在集中修复 rollout 调度、显存管理、分布式通信以及多种 RL 算法（REINFORCE, GRPO, OPD）的数值计算问题。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
* **[Bug] MiniMax-M2.7 HF 权重转换报错** 
  * **编号**: [#2129](https://github.com/THUDM/slime/issues/2129)
  * **状态**: OPEN
  * **简述**: 开发者在将 MiniMax-M2.7 的 HuggingFace checkpoint 转换为 `torch_dist` 格式时遇到阻断报错。这反映了社区对最新超大 MoE 模型多维度 QK Norm 权重转换的适配需求。

### 4. 关键 PR 进展
今日更新的 PR 深度重构了 slime 的训练与推理引擎，以下为核心更新：

**RL 算法与损失函数**
* **[Feat] 增加 REINFORCE 优势估计器** ([#2083](https://github.com/THUDM/slime/pull/2083))：新增 `--advantage-estimator reinforce` 选项，复用 GRPO 组归一化优势，并应用纯粹的加性代理损失。
* **[Feat] 增加 Off-policy IS correction hook** ([#2084](https://github.com/THUDM/slime/pull/2084))：在 `policy_loss_function` 中加入当前携带梯度的 log-probs (`cur_log_probs`)，强化离线策略的重要性采样修正。
* **[Feat] 增加 ScaleRL pg_loss 四种聚合模式** ([#2090](https://github.com/THUDM/slime/pull/2090))：支持 `--loss-aggregation` 参数（sample_mean, prompt_mean, token_mean, constant），精细控制训练步内的损失聚合。
* **[Fix] 修复 OPD teacher logprobs 的温度系数** ([#2085](https://github.com/THUDM/slime/pull/2085))：将策略蒸馏中 teacher 的评分温度从硬编码的 `0` 修改为动态的 `rollout_temperature`，修正 reverse-KL 计算。
* **[Fix] 修复 GRPO per-prompt baseline 领取不均问题** ([#2062](https://github.com/THUDM/slime/pull/2062))：针对扩展/不均匀的 rollout 数据，将组相对基线的计算单元从训练样本维度修正为 rollout 维度。
* **[Fix] 修复 PPO 中 rollout/KL metric 被意外篡改的问题** ([#2114](https://github.com/THUDM/slime/pull/2114))：修改 token reward 的构建方式（`k *= kl_coef` 改为 `k = k * kl_coef`），杜绝原位操作引发的 KL tensor 污染。

**Rollout 与显存调度**
* **[Fix] 释放 offload 显存前暂停生成** ([#2015](https://github.com/THUDM/slime/pull/2015))：将 `RolloutServer.offload()` 重构为三阶段静默过渡（暂停引擎 -> Flush -> 释放显存），防止显存释放引发的异步推理冲突。
* **[Fix] 引擎启动期间重试瞬态 Ray Actor 错误** ([#2059](https://github.com/THUDM/slime/pull/2059))：在 colocated 启动时，自动屏蔽并重试由于 gRPC 心跳丢失导致的 `ActorUnavailableError`，提升分布式集群启动鲁棒性。
* **[Fix] DP 调度截断越界尾部 rollouts** ([#2065](https://github.com/THUDM/slime/pull/2065))：在动态 batch size 场景下，丢弃最少数量的不完整 rollout，确保微批次对齐时 `ceil(K/align_to)` 目标可达。

**Agent 与基础设施**
* **[Feat] 增加 MiniMax-M2.5 完整集成支持** ([#1929](https://github.com/THUDM/slime/pull/1929))：[CLOSED] 为 MiniMax-M2.5（256 experts, top-8 routing）提供模型规格插件与 mbridge 权重转换。
* **[Fix] SGLang 客户端池化与重试机制** ([#2069](https://github.com/THUDM/slime/pull/2069))：废弃 Agent 每次 turn 生成时新建 `aiohttp.ClientSession` 的做法，改用全局连接池，降低通信开销。
* **[Fix] SGLang 引擎与路由层鉴权** ([#2068](https://github.com/THUDM/slime/pull/2068))：通过新增 `bearer_auth_headers` 辅助函数，在所有控制面调用中强制注入 `Authorization` header。
* **[Feat] 支持 Eval-only 模式** ([#2109](https://github.com/THUDM/slime/pull/2109))：允许通过 `--num-rollout 0` 纯净执行评估流程。
* **[Fix] 保留可重载 Process Group 的属性** ([#2095](https://github.com/THUDM/slime/pull/2095))：修复 `ReloadableProcessGroup` 在重载时丢失原 NCCL 参数的问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
slime 正在填补大模型强化学习工程化中的诸多深水区：
1. **深度适配大参数 MoE 模型**：从对 MiniMax-M2.5 的深度支持可以看出，项目正在攻克超大专家模型的 TP 通信、QK Norm 并行与权重映射问题。
2. **极致的 Rollout 稳定性工程**：针对 LLM+RL 训练中臭名昭著的 "底层抖动"（如 Ray actor 瞬态断连、显存异步释放崩溃、分布式边界样本错位），提供了极其细致的防御性编程修复。
3. **紧跟前沿算法实现**：不仅支持主流的 PPO/GRPO，还迅速跟进了 REINFORCE、离线策略修正（IS correction）以及带温度感知的在线策略蒸馏（OPD），是验证 Scaling RL 算法绝佳的开源试验田。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-06-25 RL 日报摘要：

# AReaL 强化学习生态日报 (2026-06-25)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共有 **12 项更新**（3 条 Issues，9 条 PRs），无新版本 Release。今日的开发活动高度聚焦于**底层训练逻辑修复**（如 GRPO 组归一化、权重同步超时）、**多模态与 FP8 显存优化**，以及**重构全新的 CLI 与推理/智能体服务架构**。

## 2. 版本发布
*   **最新 Releases**：无。当前社区正稳步推进 [2026 H2 Roadmap](https://github.com/areal-project/AReaL/issues/1381) 中的各项里程碑特性开发。

## 3. 重点 Issues
*   **[Roadmap] 2026 H2 Milestones** (更新于 06-24) - [Issue #1381](https://github.com/areal-project/AReaL/issues/1381)
    项目官方发布了 2026 年下半年的开发路线图，明确了当前正在进行的功能迭代和未来的重点优化方向，是开发者参与开源贡献的重要指引。
*   **[BUG] NCCL timeout during weight synchronization on A800 with AReaL ControllerV2** (创建于 06-24) - [Issue #1439](https://github.com/areal-project/AReaL/issues/1439)
    硬件适配报错：多位开发者复现的 Bug，使用 ControllerV2 进行权重同步时，A800 集群上会稳定触发 NCCL 超时，亟待排查通信逻辑。
*   **[BUG] Partial rollout groups silently corrupt GRPO group normalization** (更新于 06-24) - [Issue #1419](https://github.com/areal-project/AReaL/issues/1419)
    算法核心 Bug：在 GRPO 训练中，当部分 rollout 组的 episode 返回 `None`（即 partial group）时，现有的固定切片逻辑会导致组归一化数据损坏。

## 4. 关键 PR 进展
**🛠 核心算法与训练修复**
*   **[PR #1415](https://github.com/areal-project/AReaL/pull/1415)**: 修复 PPO/GRPO 中的组归一化逻辑。基于实际组大小进行归一化，解决因部分 episode 返回 `None` 导致的行数据混合污染问题。
*   **[PR #1416](https://github.com/areal-project/AReaL/pull/1416)**: 引入 `min_valid_group_size` 参数，允许底层工作流直接丢弃存活样本过少的“不完整 rollout 组”，保证训练数据的有效性。
*   **[PR #1396](https://github.com/areal-project/AReaL/pull/1396)**: 修复 DP 缩放过时问题，防止 Worker 在本地容量为零时错误应用 `dp-scaled staleness`，从而解决 Rollout 挂起问题。

**⚡ 性能优化与显存管理**
*   **[PR #1406](https://github.com/areal-project/AReaL/pull/1406)**: 在 AWEX 协同模式 下支持 Megatron FP8 权重传输，通过 `fp8_direct_convert=True` 避免隐式的 BF16 反量化，大幅降低显存开销。
*   **[PR #1438](https://github.com/areal-project/AReaL/pull/1438)**: 修复 CI 中的 VLM_GRPO 显存溢出（OOM）Bug。因为默认的 fp32 master weights 会导致 Qwen2.5-VL-3B 爆显存，此 PR 强制测试环境使用 `adam_bf16` 存储，使其能在 A100-40G 上运行。

**🚀 工程架构与服务化设计**
*   **[PR #1440](https://github.com/areal-project/AReaL/pull/1440)** 与 **[PR #1434](https://github.com/areal-project/AReaL/pull/1434)**: 重构 CLI 基础设施，引入实验性的 `areal inf` CLI 命令行工具，为本地推理服务、网关路由及奖励模型管理提供统一的 Operator 接口。
*   **[PR #1383](https://github.com/areal-project/AReaL/pull/1383)**: 集成 **OpenClaw** 作为 `agent_service` 运行时。为每个 RL session 独立生成一个网关子进程并绑定上游 LLM key，实现不同 episode 的环境隔离。
*   **[PR #1433](https://github.com/areal-project/AReaL/pull/1433)**: 修复 `io_struct` 模块对多 EOS 模型（如 Gemma 4）的兼容性，解决因无法正确识别并截断多个有效停止符导致的生成逻辑错误。

## 5. 为什么值得继续关注？
作为 RL 开源生态的重要推手，AReaL 正在从单纯的“训练框架”向“端到端 RL 系统服务平台”演进。
1. **死磕训练正确性**：近期密集修复了 GRPO 算法在处理边缘数据（Partial groups）时的归一化错误，这对依赖该算法的 LLM 厂商至关重要。
2. **极致的底层压榨**：从 Megatron FP8 直传到 A100-40G 的 BF16 优化适配，体现了项目在同等硬件下追求更大参数吞吐量的硬核能力。
3. **向 Agent Infra 延伸**：通过引入 OpenClaw 运行时和 `areal inf` CLI，AReaL 正在完善推理、训练与多轮 Agent 环境的解耦与服务化，紧跟当前 RL for Agents 的技术浪潮。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这份报告总结了 TRL (Transformer Reinforcement Learning) 库在 2026 年 6 月 24 日的开源生态动态。

### 1. 今日速览
- **Issue 动态**：过去 24 小时内更新 **15** 条。主要集中在 GRPO 训练稳定性、FP8/QLoRA 低精度训练报错以及多模态模型（如 mLLaMA）的适配问题。
- **PR 动态**：过去 24 小时内更新 **36** 条。技术重心明显聚焦于 **GRPO 算法变体的丰富**、**vLLM 原生权重同步的底层重构** 以及 **多环境智能体支持**。
- **版本发布**：过去 24 小时无新版本发布。

---

### 2. 版本发布
无。当前代码库处于持续整合开发阶段，大量核心功能（如 Async GRPO 和 vLLM 集成）正在通过密集的 PR 进行重构。

---

### 3. 重点 Issues
**🐛 核心报错与 Bug**
- **vLLM colocate 模式崩溃**：当 vLLM 返回 NaN 的 token logprob 时，`torch.tensor()` 接收到 `None` 导致 GRPO 训练崩溃。该问题指出了 `extract_logprobs` 与后续张量构建之间的空值校验断层。[链接: huggingface/trl Issue #6166](https://github.com/huggingface/trl/issues/6166)
- **SFTTrainer API 破坏性变更**：用户报告 `Trainer.__init__() got an unexpected keyword argument 'tokenizer'`，这通常与近期 `transformers` 核心库的 API 迁移有关。[链接: huggingface/trl Issue #6168](https://github.com/huggingface/trl/issues/6168)
- **多模态 + PEFT 组合报错**：在使用 LoRA 和 DeepSpeed 微调 Llama-3.2-11B-Vision 时出现 CUDA OOM，反映了当前视觉编码器在梯度检查点下的内存管理仍有优化空间。[链接: huggingface/trl Issue #4347](https://github.com/huggingface/trl/issues/4347)

**✨ 特性与需求讨论**
- **FP8 训练支持**：社区呼吁原生支持基于 `accelerate` 的 FP8 训练，以进一步压榨 Hopper 架构 (H100) 的算力。[链接: huggingface/trl Issue #3399](https://github.com/huggingface/trl/issues/3399)
- **Encoder-Decoder 模型支持**：用户希望 `SFTTrainer` 能够原生支持类似 AYA-101 这样的 Encoder-Decoder 架构的 Prompt-Completion 数据集。[链接: huggingface/trl Issue #6165](https://github.com/huggingface/trl/issues/6165)

---

### 4. 关键 PR 进展
**🚀 GRPO 算法与 RL 底层演进**
- **引入 STARE 损失函数**：新增基于惊异度引导的 Token 级优势重加权，解决了标准 GRPO 中少数异常 token 主导梯度的问题。[链接: huggingface/trl PR #6167](https://github.com/huggingface/trl/pull/6167)
- **增加熵正则化**：为 GRPO 引入静态和自适应熵控制，防止策略在训练过程中过早坍缩，鼓励模型探索。[链接: huggingface/trl PR #6140](https://github.com/huggingface/trl/pull/6140)
- **多环境智能体支持 [1/2] & [2/2]**：允许在 GRPO 中为每个 Dataset 样本动态选择不同的环境与工具集，极大增强了 Agentic RL 的灵活度。[链接: PR #6001](https://github.com/huggingface/trl/pull/6001) | [链接: PR #6002](https://github.com/huggingface/trl/pull/6002)
- **异步 GRPO 随机性修复**：修复了 `reset()` 在非确定性情况下，每次生成样本必须共享同一 prompt 导致的逻辑缺陷。[链接: huggingface/trl PR #6072](https://github.com/huggingface/trl/pull/6072)

**⚙️ 训练后端与工程优化**
- **迁移至 vLLM 原生权重同步**：逐步弃用 TRL 自定义的 vLLM server，引入 vLLM >= 0.22.0 原生 bulk `update_weights` API，大幅提升权重的流式传输效率。[链接: huggingface/trl PR #6128](https://github.com/huggingface/trl/pull/6128) & [PR #6110](https://github.com/huggingface/trl/pull/6110)
- **QLoRA 易用性提升**：为各大 Trainer 添加 `quantization_config` 参数，用户无需再手动配置 `model_init_kwargs` 或强行加载模型。[链接: huggingface/trl PR #6157](https://github.com/huggingface/trl/pull/6157)
- **SFT 性能优化**：将序列截断操作从 Data Collator 阶段前移到数据集预处理阶段，避免了每个 Batch 的重复计算。[链接: huggingface/trl PR #6155](https://github.com/huggingface/trl/pull/6155)
- **GOLD Trainer 蒸馏增强**：加入 X-Token 跨分词器知识蒸馏变体，扩展了 ULD 损失路径。[链接: huggingface/trl PR #6126](https://github.com/huggingface/trl/pull/6126)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **Agentic RL 的基础设施化**：从今日的多环境支持（#6001/#6002）可以看出，TRL 正在将强化学习从“单一静态数据集训练”转向“动态环境交互”的 Agentic 范式，紧跟 LLM 自主智能体的发展趋势。
2. **紧跟前沿算法的迭代速度**：GRPO 依然是开源 RL 的核心，但 TRL 并未止步于此。STARE、熵正则化、跨 Tokenizer 蒸馏（GOLD trainer）等顶级会议思路在发布数周内即被模块化合并，极大降低了前沿学术成果的工程复现门槛。
3. **与 HuggingFace 及 vLLM 生态的深度下沉融合**：全面拥抱 vLLM 原生 API（#6110）和底层低精度计算（QLoRA config 整合），说明 TRL 正在解决 RL 训练中最棘手的“显存与通信瓶颈”，致力于让百亿参数模型的 RLHF 在常规算力集群上成为标配。

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

以下是为您生成的 verl 项目 2026 年 6 月 25 日 RL 生态日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，verl 仓库共有 22 条 Issue 更新，24 条 PR 更新，无新版本发布。
- **核心动向**：今日的更新呈现出极强的工程硬核属性。开发者正集中火力突破**超大上下文与序列并行**（CP>1）、**全异步权重广播**以及**多模态智能体工具链**的技术深水区。同时，Ascend (NPU) 硬件后端的 CI/CD 与并行计算修复占据了大量 PR 吞吐，表明项目正在强力推进多硬件生态的成熟化。

### 2. 版本发布
- **今日无新 Release**。（注：目前社区讨论显示最新核心代码基于 `0.8.0` 迭代）

### 3. 重点 Issues
- **[Megatron][MoE] 上下文并行 (CP>1) 导致 grad_norm 爆炸** ([#6609](https://github.com/volcengine/verl/issues/6609))
  训练 MoE 模型时，在 `CP>1` 和 `use_remove_padding=True` 的情况下，`actor/grad_norm` 会暴涨至数千导致崩溃。该问题直指 Megatron 与 veRL 在序列并行下 Normalization 机制的交互冲突，是当前大模型长文本 RL 训练的关键痛点。
- **[Feature] 引入 On-Policy Self-Distillation (OPSD)** ([#6827](https://github.com/volcengine/verl/issues/6827))
  提出特权上下文自教师蒸馏机制。Teacher 模型接收真实的推理轨迹进行条件生成，Student 模型仅接收问题，以此提升 RL 推理效率。这是 veRL 在基础 RLHF 之外拓展的高级训练范式。
- **[bug, fully_async_policy] On-policy 模式收敛异常** ([#6780](https://github.com/volcengine/verl/issues/6780))
  开发者反馈在全异步策略模式下（trigger=1, staleness=0），训练收敛速度远超传统的 `main_ppo` 训练。异步机制下的梯度更新与权重同步时序可能存在隐患，需社区关注。
- **[Roadmap] veRL on AMD/ROCm — 26Q2/Q3** ([#6590](https://github.com/volcengine/verl/issues/6590))
  官方发布了针对 AMD/ROCm 硬件（包括 MI355X）的适配路线图，旨在缩小与 NVIDIA 生态的功能差距，多硬件适配正在成为 veRL 的核心战略。

### 4. 关键 PR 进展
- **修复 CP>1 下 MoE 梯度爆炸问题** ([PR #6836](https://github.com/volcengine/verl/pull/6836))
  专门针对上述 #6609 Issue 提交的修复。通过在 `calculate_per_token_loss=True` 时强制返回 3-tuple，修复了 Megatron-Bridge 隐式开启 per-token loss 导致的分布式 Normalization 契约不一致问题。
- **实现 SGLang 全异步权重广播** ([PR #6837](https://github.com/volcengine/verl/pull/6837))
  优化了在线 RL 训练中 Actor 与 Rollout 模型的权重同步瓶颈，通过全异步广播机制进一步提升 SGLang 引擎的推理与更新吞吐。
- **支持 AgentLoop 多模态连续 Token** ([PR #6804](https://github.com/volcengine/verl/pull/6804))
  扩展了 `ContinuousTokenBuilder` 并将其与 `ToolAgentLoop` 集成，使多模态处理器能够在 Agent 交互过程中对文本与图像进行联合编码，完善了 veRL 的 Multimodal Agent RL 能力。
- **默认启用 V1 PPO Trainer** ([PR #6823](https://github.com/volcengine/verl/pull/6823))
  **[Breaking Change]** 将 V1 版本的 PPO Trainer (`verl/trainer/ppo/v1`) 设为默认配置，标志着底层训练器架构的一次重大演进与稳定。
- **华为昇腾 (Ascend NPU) 生态大批修复与 CI 升级** 
  包含修复 NPU 上 vLLM 流水线并行 bug ([PR #6678](https://github.com/volcengine/verl/pull/6678), [PR #6732](https://github.com/volcengine/verl/pull/6732))，将双节点 E2E 测试工作流从 A2 升级至 A3 ([PR #6840](https://github.com/volcengine/verl/pull/6840), [PR #6824](https://github.com/volcengine/verl/pull/6824))，以及扩展 CI 容器共享内存至 64g ([PR #6838](https://github.com/volcengine/verl/pull/6838))。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻克亿级参数长序列训练瓶颈**：veRL 正在极高效率地解决 Megatron + MoE + CP 交互作用下的底层 Bug（如 per-token loss 契约与梯度爆炸）。这种对分布式训练机制的深度解剖和修复能力，是维持大模型长思维链 RL 训练稳定性的关键护城河。
2. **紧跟前沿算法范式**：从单 Teacher 蒸馏 (OPD) 到带特权上下文的 On-Policy 自蒸馏 (OPSD)，再到前沿 KL 散度方向控制 ([PR #6828](https://github.com/volcengine/verl/pull/6828))，veRL 不再仅仅是一个 PPO/GRPO 的跑批工具，而是前沿 AI 研究员的“第一落地库”。
3. **“硬核软硬协同”加速**：无论是异步权重广播的引入，还是 V1 Trainer 的默认化，加上对 Ascend NPU 和 AMD ROCm 的大规模适配，veRL 正在打通从算力底座到 RL 算法上层的全链路，是目前开源社区中工程完整度与前沿探索结合最紧密的 RL 框架之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 日报摘要 (2026-06-25)**

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库共有 1 条 Issue 更新与 4 条 PR 更新，无新版本发布。本日的开发动态高度聚焦于**大模型训练底层的数学正确性**与**显存/计算效率优化**，特别是针对 GRPO（Group Relative Policy Optimization）和 SFT 阶段的梯度累积损失计算进行了核心代码修补。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
* **[#1728](https://github.com/allenai/open-instruct/issues/1728) [OPEN] `reduce_loss=sum` 移除导致梯度累积下的 LR 失准与 Loss 错误**
  *作者: llabat | 👍: 1*
  **核心内容：** 开发者在使用 4 月份的代码复现 Tulu 3 SFT 结果时，发现存在显著的性能鸿沟。其根本原因在于 PR #1024 中移除了 `reduce_loss=sum` 且未添加弃用警告。这导致在 `gradient_accumulation_steps > 1` 时，系统错误地计算了“多微批次均值的平均”，而非基于真实 Token 计数的损失，进而引发了学习率失准和梯度权重分配不均。
  *分析：这是一个高危的训练底层 Bug，直接影响了较长序列或大 Batch 训练时的收敛效果，直接催生了今日的修复 PR #1736。*

### 4. 关键 PR 进展
今日的 4 个 PR 极具技术深度，分为**数学修正**与**算力榨取**两个方向：

* **数学与逻辑修正：**
  * **[#1736](https://github.com/allenai/open-instruct/pull/1736) [OPEN] 修复 `finetune.py` 中梯度累积下的 Token 加权损失**
    *作者: Chessing234*
    **核心内容：** 针对上述 Issue #1728 的直接修复。当发生梯度累积时，该 PR 会根据每个微批次的监督 Token 数量对 Loss 进行缩放，并重新归一化累积梯度。这确保了所有 Token 获得相等的权重，修复了微批次均值计算导致的性能下降。
  * **[#1734](https://github.com/allenai/open-instruct/pull/1734) [OPEN] 为 SFT Token 化添加工具模式支持**
    *作者: hamishivi*
    **核心内容：** 在 SFT 数据处理阶段，将数据集中的 `tools` 列传递给 `apply_chat_template`，使得 Tool Schema 能够正确渲染到 Prompt 中。进一步完善了 Agent / RLHF 场景下的函数调用基础支持。

* **显存优化与效率提升：**
  * **[#1737](https://github.com/allenai/open-instruct/pull/1737) [OPEN] 为 GRPO 快速训练添加 `use_cpu_adam` 标志**
    *作者: Chessing234*
    **核心内容：** 在 `grpo_fast.py` 中引入 `--use_cpu_adam`，允许在低显存环境下使用 `DeepSpeedCPUAdam` 替代融合 `AdamW`。与现有的参数/优化器卸载标志协同工作，大幅降低了本地微调 GRPO 的硬件门槛。
  * **[#1735](https://github.com/allenai/open-instruct/pull/1735) [OPEN] 添加分块 GRPO lm-head 损失计算**
    *作者: hamishivi*
    **核心内容：** 引入选择性开启的内存高效 GRPO Loss 路径（`--use_liger_grpo_loss`）。借鉴 DeepSpeed 的 `TiledFusedLogitsLoss` 模式，在自定义 Autograd 函数中将 lm-head 投影和标量损失分块逐次重计算，从而打破大词表（Full-vocabulary）对显存的限制。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的 LLM 强化学习生态中，许多框架倾向于“跑通即可”，而 Open Instruct 正在展示其在**工程严谨性**上的不可替代性：
1. **死磕数值精度：** Issue #1728 与 PR #1736 体现了该团队对“梯度累积与 Token Mask 交互”这一常见痛点的零容忍。在 RL 训练中，Reward 信号的微小偏差会导致策略崩溃，底层数学的正确性是可靠实验的前提。
2. **普惠的极速 RL 训练栈：** 通过 PR #1735（Tiled GRPO Loss）与 PR #1737（CPU Adam），Open Instruct 正在将 GRPO 等先进的 RL 算法优化至消费级或边缘设备可用状态。特别是对大词表 Lm-head 显存的极限压缩，直接切中了当前开源社区进行长文本或大词表模型 RL 微调的最痛点。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

**CleanRL 生态日报 (2026-06-25)**

以下是过去 24 小时内 CleanRL (`vwxyzjn/cleanrl`) 仓库的关键动态与技术解析。

### 1. 今日速览
过去 24 小时，CleanRL 仓库无新增 Issue、无新版本发布。核心动态集中在代码质量与健壮性的建设上：社区贡献者 **@YangNuoCheng** 连续发起了 3 个 Pull Request，重点修复了测试脚本 (`enjoy.py`) 的运行崩溃问题，并大幅补充了 PPO 算法中核心数学逻辑——广义优势估计（GAE）的单元测试。

### 2. 版本发布
无。今日未发布任何新 Release 或 Tag。

### 3. 重点 Issues
今日无新增或更新的 Issue 讨论线程。

### 4. 关键 PR 进展
今日的 3 个 PR 均处于 `[OPEN]` 状态，主要围绕 PPO 测试强化与 Bug 修复：

*   **#561 [Bug Fix] 修复 `enjoy.py` 崩溃：重新添加缺失的 `--capture_video` 参数**
    *   **作者:** YangNuoCheng
    *   **技术摘要:** 修复了在 `cleanrl_utils/enjoy.py` 中调用 `evaluate()` 时引发的 `AttributeError` 崩溃问题。根因是在重构 `parse_args()` 时不慎移除了 `--capture_video` 参数，导致运行时无法在 `args` 命名空间中找到该属性。此 PR 关联并修复了 Issue #497。
    *   **链接:** [vwxyzjn/cleanrl PR #561](https://github.com/vwxyzjn/cleanrl/pull/561)

*   **#560 [Feature/Test] 为 `ppo_continuous_action` 的 GAE 计算添加单元测试**
    *   **作者:** YangNuoCheng
    *   **技术摘要:** 针对 #252 的持续跟进。为连续动作空间 PPO (`ppo_continuous_action.py`) 的 GAE 计算添加了逻辑单元测试（如 `test_ppo_continuous_action_gae_matches_explicit_sum`），通过显式求和交叉验证了其原位逆向递归算法的正确性。
    *   **链接:** [vwxyzjn/cleanrl/pull/560)

*   **#559 [Feature/Test] 为 PPO 的 GAE 计算添加单元测试**
    *   **作者:** YangNuoCheng
    *   **技术摘要:** 同样关联 #252。针对离散动作空间的基础版本 `ppo.py` 添加了 GAE 的白盒逻辑单元测试。改变了以往仅通过端到端黑盒冒烟测试间接验证的现状，参考了 JAX 版本（`tests/test_jax_compute_gae.py`）的交叉验证范式。
    *   **链接:** [vwxyzjn/cleanrl/pull/559)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
今日的 PR 动态精准地体现了 CleanRL 在强化学习开源生态中的核心定位与价值：

1.  **极致的代码可读性与教学价值：** 今日 PR 集中在为 GAE（广义优势估计）添加细粒度的逻辑单元测试。相比于 Stable-Baselines3 (SB3) 等高度封装的库，CleanRL 坚持将核心数学逻辑直接平铺在训练脚本中。引入严格的单元测试，进一步保证了初学者在阅读单文件代码时，看到的不仅是“可跑通”的工程代码，更是数学上“经过严谨验证”的正确实现。
2.  **单文件架构降低贡献门槛：** 诸如 `enjoy.py` 的崩溃 Bug（PR #561）能够被迅速定位并提交修复，得益于项目去耦合、无深层继承的设计模式。这种架构使得研究人员在进行算法魔改（如修改 GAE 递归逻辑）时，引发的副作用极小，极大地促进了社区的 PR 活跃度。
3.  **RL 算法验证的标准化探索：** #559 和 #560 表明，CleanRL 正在系统性地将其算法实现从“依赖黑盒端到端 Reward 验证”向“白盒数值逻辑验证”演进。这对于当前 RL 生态中频繁出现的“算法复现一致性”痛点具有重要的参考意义。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 Gymnasium 强化学习开源生态日报摘要（2026-06-25）：

# Gymnasium RL 日报 (2026-06-25)

## 1. 今日速览
- **Issues 动态**：过去 24 小时共有 16 条 Issue 更新（其中 3 条为新建，12 条已关闭），主要集中在环境底层物理引擎迁移、CI 修复及历史 Bug 清理。
- **PR 动态**：过去 24 小时共有 4 条 PR 更新（3 条已关闭，1 条处于开启审查状态），核心围绕依赖修复与代码质量提升。
- **版本发布**：过去 24 小时无新版本发布。

## 2. 版本发布
**无。** 当前仓库未发布新的 Release 版本。

## 3. 重点 Issues

**架构与生态演进**
*   **[核心物理引擎迁移讨论] 将所有 Box2D 环境迁移至 Pymunk** ([#1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597))
    *提案人: jkterry1 | 状态: OPEN*
    由于 Box2D 的 Python 绑定已长达 6 年未维护，官方提议将底层物理引擎全面迁移至受积极维护且文档完善的 Pymunk (Chipmunk 绑定)。这是 Gymnasium 环境底层基础设施的一次重大潜在变更。
*   **[功能增强] 为 LunarLander 添加完全可调的转移动力学** ([#1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559))
    *提案人: maxanisimov | 状态: OPEN*
    提议在 LunarLander 中暴露显式的动力学控制参数，允许用户直接调整或禁用随机性及物理系数，减少社区 fork 自定义子类的需求。
*   **[新版本适配] 全面支持 Python 3.14** ([#1594](https://github.com/Farama-Foundation/Gymnasium/issues/1594))
    *提案人: jkterry1 | 状态: OPEN*
    官方确认上一个 Release 已解除 3.14 的支持阻碍，呼吁社区提交 PR 以添加对 Python 3.14 的全面支持。

**Bug 修复与环境逻辑校验**
*   **[CI 崩溃] 主分支 CI 修复** ([#1593](https://github.com/Farama-Foundation/Gymnasium/issues/1593))
    *状态: CLOSED*
    由于 GitHub Actions 版本升级导致主分支 CI 破坏，已被定位并要求社区提交修复。
*   **[逻辑 Bug] Ant-v5 默认 `healthy_z_range` 不正确** ([#1464](https://github.com/Farama-Foundation/Gymnasium/issues/1464))
    *状态: CLOSED*
    报告指出 MuJoCo Ant-v5 环境中，机器人翻覆时未正确终止（实际 z 值为 0.24），建议将默认范围提升至 (0.25, 1)。
*   **[历史 Bug] Rainy Taxi 方向不一致及逻辑计算错误** ([#1510](https://github.com/Farama-Foundation/Gymnasium/issues/1510), [#1509](https://github.com/Farama-Foundation/Gymnasium/issues/1509))
    *状态: CLOSED*
    修复了左右移动概率未严格遵循原论文（相对于目标方向）以及遇墙阻挡时侧向移动计算异常的缺陷。

## 4. 关键 PR 进展

*   **[CI 修复] 移除 classic_control 中的重复依赖** ([PR #1595](https://github.com/Farama-Foundation/Gymnasium/pull/1595))
    *状态: CLOSED (已合并)*
    修复了 `pyproject.toml` 中 `classic-control` 和 `classic_control` 因命名归一化导致解析工具 `uv` 在 CI 期间崩溃的问题。关联修复 Issue #1593。
*   **[工具链升级] 升级 actions/checkout 从 v6 至 v7** ([PR #1591](https://github.com/Farama-Foundation/Gymnasium/pull/1591))
    *状态: CLOSED (已合并)*
    由 Dependabot 提交的标准工作流依赖升级。
*   **[代码质量] 修复 3 处 AI 代码质量审查问题** ([PR #1592](https://github.com/Farama-Foundation/Gymnasium/pull/1592))
    *状态: CLOSED (已合并)*
    应用了 GitHub 代码质量 AI 扫描发现的 3 处代码优化建议。
*   **[工具验证] 新增 Wrapper 实现检查工具** ([PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556))
    *状态: OPEN*
    提议添加类似于 `check_env()` 的 `check_wrapper()` 工具，用于验证开发者自定义的 Wrapper 是否严格符合 Gymnasium 的 Wrapper API 规范，对大型 RL 训练流水线的鲁棒性极具价值。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1.  **不回避底层技术债，果断进行基础设施迁移**：从 Issue #1597 可以看出，Gymnasium 官方团队对陈旧依赖（Box2D 绑定停滞）采取“零容忍”态度，正积极评估向 Pymunk 的全面迁移。这表明该项目在保障 RL 仿真器底座稳定性方面具备极强的长期责任心。
2.  **积极拥抱最新工具链与 Python 生态**：在 Python 3.14 刚刚解除阻塞之际（Issue #1594），官方立刻推动适配；同时配合最新打包工具（如 `uv`，见 PR #1595），确保开发与 CI 现代化。
3.  **注重 API 规范化与研发体验**：无论是提议暴露 LunarLander 的底层物理参数（Issue #1559），还是提供 API 规范校验工具 `check_wrapper()`（PR #1556），都说明 Gymnasium 正在从“提供可用环境”向“提供工业级、高定制化、防呆防错的标准库”演进。对于需要构建复杂、可靠 RL 算法的开发者和科研团队而言，它是不可或缺的核心依赖。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-06-25 强化学习（RL）开源生态日报摘要，聚焦于多智能体环境标准库 PettingZoo：

# 🐾 PettingZoo RL 日报 (2026-06-25)

## 1. 今日速览
- **活跃度爆发**：过去 24 小时内，Issues 更新达 26 条，PR 更新达 16 条，项目维护极其活跃。
- **核心动向**：今日无新版本发布，但开发重心高度集中在**底层引擎重构**（如将物理引擎向 PyMunk 迁移）、**CI/CD 与代码质量大修**（引入 Ruff 和 Ty，修复多处 Main 分支阻塞问题），以及**遗留技术债务清理**。
- **生态环境**：正加速与 Gymnasium 和 OpenSpiel 等现代 RL 基础设施进行深度对齐与解耦。

## 2. 版本发布
**无**（当前稳定版仍基于前期发布，主分支正在为下一次大版本更新积蓄底层重构代码）。

## 3. 重点 Issues
今日的 Issues 揭示了项目未来的演进方向及部分历史遗留痛点：

- **引擎与渲染重构计划**：
  - **[Issue #1364](https://github.com/Farama-Foundation/PettingZoo/issues/1364)**: 计划遵循 Gymnasium 的做法，将 `multiwalker` 环境从 `box2d` 底层移植到 `pymunk`。
  - **[Issue #1360](https://github.com/Farama-Foundation/PettingZoo/issues/1360)**: 提议修改 `pursuit` 环境，将智能体从圆形改为较小的正方形，以恢复早期版本的视觉效果。
  - **[Issue #1361](https://github.com/Farama-Foundation/PettingZoo/issues/1361)**: 要求将 `rlcard` 环境中的卡牌图片原始像素进行缩减，以优化内存和渲染逻辑。

- **历史遗留 Bug 与 API 一致性**：
  - **[Issue #1312](https://github.com/Farama-Foundation/PettingZoo/issues/1312) [已关闭]**: 暴露出 `gin_rummy` 环境在调用 `reset(seed=...)` 时，会静默重置奖励配置，破坏了 RL 实验的可复现性。
  - **[Issue #1301](https://github.com/Farama-Foundation/PettingZoo/issues/1301)**: 开发者指出 `Hanabi` 环境的官方文档与实际返回的 Observation Space 向量不一致。

- **工程与生命周期管理**：
  - **[Issue #1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358)**: 计划放弃对 Python 3.9 的支持。
  - **[Issue #1357](https://github.com/Farama-Foundation/PettingZoo/issues/1357)**: 移除环境（如 MPE2）时的 Import 警告缺失，导致用户无法平滑迁移到新仓库。

## 4. 关键 PR 进展
多名核心开发者（特别是 `mfornet` 和 `jkterry1`）在今日合并了大量修复与重构 PR：

- **环境重构与 API 升级**：
  - **[PR #1297](https://github.com/Farama-Foundation/PettingZoo/pull/1297) [已关闭]**: 将 `knights_archers_zombies` 升级至 v11，彻底重构了观测空间配置（使用 `obs_method` 替代旧参数），并修复了生成与状态相关的 Bug。
  - **[PR #1355](https://github.com/Farama-Foundation/PettingZoo/pull/1355) [已关闭]**: 完成 `Hanabi` 向 OpenSpiel (通过 Shimmy) 迁移的最终清理工作，抛弃了不再维护的旧 Hanabi fork。

- **代码质量与 CI 强化管理**：
  - **[PR #1351](https://github.com/Farama-Foundation/PettingZoo/pull/1351) [已关闭]**: 紧急修复了因导入顺序导致的 Main 分支 CI 崩溃问题（`isort`）。
  - **[PR #1345](https://github.com/Farama-Foundation/PettingZoo/pull/1345) & [PR #1350](https://github.com/Farama-Foundation/PettingZoo/pull/1350) [已关闭]**: 全面引入 `Ruff` 进行 Linting，并将类型检查工具从 `pyright` 迁移至 `ty`，同时在 CI 中将警告升级为报错（Error）。
  - **[PR #1344](https://github.com/Farama-Foundation/PettingZoo/pull/1344) [已关闭]**: 使用 Claude Code 辅助完成了向新类型检查工具 `ty` 的初步迁移。

- **性能优化与安全性修复**：
  - **[PR #1343](https://github.com/Farama-Foundation/PettingZoo/pull/1343) [已关闭]**: 通过替换 `pygame.init()` 为按子系统初始化（跳过音频枚举），大幅加速了环境的启动时间。
  - **[PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338) [已关闭]**: 修复了图片加载函数 `get_image()` 中存在的中等严重程度的路径遍历漏洞。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **多智能体（MARL）领域的绝对标准**：PettingZoo 之于多智能体强化学习，就如同 Gymnasium 之于单智能体。它与 RLlib、CleanRL、Stable-Baselines3 等主流算法库深度绑定（如今日 Issue 中提到的兼容性问题），是验证多智能体算法绕不开的底层基建。
2. **积极的底层现代化演进**：项目并没有“躺平”，而是正在经历阵痛期的重构——移除陈旧依赖（如过渡到 OpenSpiel）、统一物理引擎（对齐 Gymnasium 的 PyMunk 路线），并放弃旧版 Python 支持。这表明项目在为未来的高频/高性能 JAX 环境铺路。
3. **拥抱 AI 辅助开发与前沿工程实践**：从 PR 记录中可以看到，维护者正在大量使用 Claude Code 等工具进行大规模代码重构和 Linting 修复，并快速引入 `ruff` 和 `ty`。对于关注“如何利用大模型维护大型开源项目”的开发者来说，PettingZoo 的提交历史是一个极佳的观察窗口。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>