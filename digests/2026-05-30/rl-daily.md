# RL 开源生态日报 2026-05-30

> 生成时间: 2026-05-29 22:28 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（RL）开源生态正处于从“纯算法验证”向“工业级大规模复杂应用部署”跨越的关键阶段。以 verl、TRL、Slime 为代表的头部项目在过去 24 小时内保持着高频迭代，生态演进的核心驱动力已经从单纯的 PPO/DPO 算法实现，转向**异构算力适配、Agent 复杂交互、分布式微服务架构以及极致的显存/计算压榨**。与此同时，传统的基础算法库（如 CleanRL、Stable Baselines3 等）趋于稳定，进入低频维护期，而 Gymnasium/PettingZoo 等底层环境 API 则专注于语言版本升级与实验可复现性的底层修补。

## 各项目活跃度对比
以下为 2026-05-30 各主要 RL 项目的活跃数据横向对比。可以看出，针对 LLM 的 Post-training 框架占据了当前生态 95% 以上的开发活跃度。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 8 | 22 | 0 | 异构算力适配深化，架构向外部 Agent 后端扩展 |
| **TRL** | 6 | 14 | 0 | 核心算法重构去耦，发力多模态与极致显存优化 |
| **Slime** | 3 | 11 | 0 | 聚焦多智能体适配，推理引擎与底层算力精度的深度整合 |
| **Open Instruct** | 0 | 12 | 0 | 严抓数据工程与评估逻辑，攻坚底层分布式训练死锁 |
| **AReaL** | 1 | 4 | 0 | 拥抱微服务化架构，引入 On-policy 蒸馏降低推理开销 |
| **ROCK** | 0 | 4 | 0 | 环境沙箱生命周期管理完善，演进为 RL 平台级底座 |
| **Gymnasium** | 0 | 1 | 0 | 紧跟底层语言版本，保障生态上游兼容性 |
| **PettingZoo** | 0 | 1 | 0 | 修复底层环境交互的随机种子与奖励机制状态回退 Bug |
| **OpenRLHF** | 0 | 1 | 0 | 低频维护，正进行包括异构硬件（AMD GPU）在内的测试验证 |
| **CleanRL / SB3 等** | 0 | 0 | 0 | 传统 RL 框架进入稳定静默期，无显著变动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **复杂交互与 Agent RL 的崛起**：单一模型的静态对齐已不能满足需求。verl 提出了外部后端接入的 RFC 并支持单次 Rollout 多轨迹，Slime 密集重构了多智能体 Adapter，这表明**具备环境探索、工具调用能力的 Agent RL** 已成为前沿研究的核心发力点。
2. **多模态对齐的全面铺开**：强化学习的应用场域正在迅速突破纯文本限制。TRL 落地了 Audio 音频数据的 RLHF 支持，verl 和 TRL 均在死磕视觉语言模型（VLM）在训练和推理中的对齐与截断问题。
3. **高效对齐与蒸馏的融合**：AReaL 和 Slime 均在推进 On-policy 蒸馏机制，通过引入独立的 Teacher Rollout Engine，在保持策略同分布的前提下大幅压降显存开销。

**工程/基础设施侧信号：**
1. **计算图与显存的极限压榨**：针对 RLHF 训练“慢且贵”的痛点，各项目正在进行外科手术级的优化。典型操作包括：verl 裁剪系数为 0 的 KL/Entropy 计算图、Megatron 优化器状态降精；TRL 强制释放 DPO 中间张量、AsyncGRPO 去除 Padding 机制。
2. **向微服务与平台化架构演进**：RL 训练正在脱离单一的“脚本式”开发。AReaL 推出了控制平面的 v2 CLI 微服务脚手架；verl 讨论解耦外部后端；ROCK 深度重构 Redis 存储语义和沙箱自动回收机制。**控制面与数据面的分离**成为工业级 RL 基础设施的共识。
3. **异构算力与国产硬件的突围**：打破 NVIDIA 算力垄断是暗线趋势。verl 大规模重构昇腾 NPU 的底层驱动与 CI 流程，OpenRLHF 则在排查 AMD GPU 上的分布式挂起问题。

## 差异化定位分析
- **verl 与 OpenRLHF**：定位为**顶级的全栈分布式训练基座**。但 verl 当前更具攻击性，特别是在推进国产昇腾生态的适配以及 Agent 全异步链路的重构上，正试图建立跨硬件壁垒的 RL OS 标准。
- **TRL**：定位为**敏捷的算法研究与多模态对齐利器**。凭借 HuggingFace 的生态，TRL 侧重于代码架构的去耦化（如统一 DPO/KTO 的 ref_model 逻辑）和新算法（如 SDFT）的快速集成，是大模型对齐研究人员最高效的试验田。
- **Slime 与 AReaL**：定位为**面向复杂环境与下一代架构的探索者**。两者都在深度整合 vLLM/SGLang，但 Slime 极其关注 GLM/Qwen 等前沿模型底层的适配细节，而 AReaL 则坚定地向基于 CLI 的分布式微服务架构转型。
- **Open Instruct**：定位为**严谨的学术级工程标尺**。其当前工作重心深扎于数据清洗逻辑和评估验证的除错，为社区提供了极具参考价值的 RLHF 数据工程典范。
- **ROCK、Gymnasium 与 PettingZoo**：扮演 RL 生态的**底层基础设施与环境标准**。ROCK 专注解决 Agent 训练平台级并发与资源调度，而后两者则牢牢占据传统和单/多智能体交互 API 的规范制定者位置。

## 值得关注的趋势信号
1. **LLM 范式下的数据工程精细化**：Open Instruct 连续修复多个 Token 长度过滤和多选题评估的细粒度 Bug，这释放了一个强烈信号：在模型基座能力趋同的当下，**Reward Model 与高质量偏好数据的处理细节**正在成为决定 RLHF 天花板的关键胜负手。
2. **“计算图裁剪”成为常规优化手段**：以往常被忽视的无用 KL 散度或 Entropy 计算被严格阻断在反向传播之外，这表明大模型 RL 工程已经进入了“锱铢必较”的极限优化阶段。
3. **Agent 基础设施初现雏形**：无论是 verl 的外接后端 RFC、Slime 的多智能体基类，还是 ROCK 的沙箱防泄漏机制，开源社区正在为 LLM 在复杂环境中进行长期探索和工具调用构建一整套高并发的沙箱与数据交互标准。**Agent RL 的爆发已在基础设施层面蓄势待发**。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是 alibaba/ROCK 项目 2026-05-30 的强化学习（RL）开源生态日报摘要：

### 1. 今日速览
* **整体活跃度**：过去 24 小时项目处于**低频维护与代码重构期**，无新版本发布，无新增 Issues。
* **开发重心**：核心开发者（@zhangjaycee）正集中精力推进 Sandbox（沙箱）生命周期的功能完善及底层架构优化（如 meta-store 存储语义重构）。

### 2. 版本发布
* **最新 Releases**：**无**（近 24 小时内未发布新版本）。

### 3. 重点 Issues
* **最新动态**：过去 24 小时内**无新增或更新**的 Issues。目前社区反馈和需求追踪处于静默期。

### 4. 关键 PR 进展
当前共有 4 个 PR 在近期产生了状态更新，主要集中在沙箱管理、API 健壮性及底层存储架构：

* **[#1038] [OPEN] feat(sandbox): add /delete endpoint + auto-delete background scan**
  * **分析**：新增沙箱删除端点及后台自动扫描清理机制。结合 RL 环境构建与销毁的高频特性，该功能对于防止大规模并发训练时的资源（如内存/容器）泄漏至关重要。
  * **链接**：[alibaba/ROCK PR #1038](https://github.com/alibaba/ROCK/pull/1038)

* **[#1001] [CLOSED] feature(sandbox): support sandbox restart**
  * **分析**：引入沙箱重启支持。允许在不重新实例化整个环境的情况下重置状态，有助于提升 RL 训练循环中 `env.reset()` 的执行效率，降低系统开销。
  * **链接**：[alibaba/ROCK PR #1001](https://github.com/alibaba/ROCK/pull/1001)

* **[#985] [OPEN] feat(admin): add parameter validation for API endpoints**
  * **分析**：社区贡献代码，为 API 端点增加参数校验。增强了控制面在面对非法或异常请求时的鲁棒性，降低训练任务因参数传错而意外崩溃的风险。
  * **链接**：[alibaba/ROCK PR #985](https://github.com/alibaba/ROCK/pull/985)

* **[#1037] [CLOSED] refactor(meta-store): add Redis-merge semantics to archive and filter alive-key fields**
  * **分析**：针对元数据存储层（meta-store）的深度重构，引入 Redis-merge 语义及存活键过滤。此更新意在优化分布式 RL 训练集群中，并发任务状态管理的高效性与数据一致性。
  * **链接**：[alibaba/ROCK PR #1037](https://github.com/alibaba/ROCK/pull/1037)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从近期的 PR 提交轨迹（Sandbox 生命周期管理、底层 Redis 存储语义优化）可以看出，**ROCK 项目正在突破单纯的“RL 算法实现”层面，向“RL 基础设施与平台化”深度演进**。

在当前的 RL 生态中，算法层面的开源库已相对饱和，但在大规模分布式训练场景下（如 LLM 的 RLHF 阶段），**环境交互的沙箱隔离、海量并发下的资源调度与状态同步**仍是业界痛点。ROCK 正在构建一整套可靠的工程化底座，其针对沙箱重启、后台自动销毁和存储层重构的动作，表明该项目具备支撑工业级大规模智能体训练的潜力。对于关注 RL 训练平台架构和 Agent 基础设施的研发团队而言，具有极高的架构参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026-05-30 Slime 项目 RL 日报摘要：

# 📊 Slime (THUDM) 开源生态 RL 日报 (2026-05-30)

## 1. 今日速览
过去 24 小时内，Slime 仓库保持高频迭代，共有 **11 个 PR** 更新（其中 9 个已合并/关闭）和 **3 个 Issues** 更新。核心开发团队（主要由 `@zhuzilin` 推动）集中修复了后端框架（如 SGLang v0.5.12）兼容性、Agent 多模态适配以及底层计算（FLOPs）的精度问题。同时，社区正在积极探讨引入新的数据传输面（TransferQueue）。

## 2. 版本发布
- **最新 Releases**: 无
- **版本动态**: 尽管今日无正式 Release 发布，但关键 PR [v0.3.0 bump](https://github.com/THUDM/slime/pull/1975) 已开启，预示着包含多项 Agent 及底层架构优化的 `v0.3.0` 新版本即将发布。

## 3. 重点 Issues
- **[架构讨论] 集成 TransferQueue 作为训练数据面**: 
  提出了将 TransferQueue 集成到 Slime 中作为 Rollout 到 Training 数据传输及后续衍生数据交换可选数据平面的 RFC。该方案若实施，将显著优化大规模分布式 RL 训练中的数据流转与分区清理机制。
  👉 [THUDM/slime Issue #1971](https://github.com/THUDM/slime/issues/1971)

- **[Bug] 多智能体 GRPO 优势计算崩溃**: 
  报告了在 `examples/multi_agent` 默认 rollout 中，由于生成的训练批次缺失旧策略的对数概率，导致 GRPO 优势计算时触发 `NoneType` 迭代错误。
  👉 [THUDM/slime Issue #1976](https://github.com/THUDM/slime/issues/1976)

- *(已解决) R3 路由重放参数错误*: 此前反馈的关于启用 `use_rollout_routing_replay` 时触发参数缺失的 Bug 已随代码修复合并。
  👉 [THUDM/slime Issue #1909](https://github.com/THUDM/slime/issues/1909)

## 4. 关键 PR 进展
- **[架构] Agent 适配器重构与接口扩展**
  - 抽取并重构了 Agent 的 `Adapter` 基类 ([PR #1981](https://github.com/THUDM/slime/pull/1981))，并新增了对 OpenAI 和 Anthropic 后端的适配支持 ([PR #1979](https://github.com/THUDM/slime/pull/1979))。这使得 Slime 在多智能体环境接入大模型推理 API 时更加灵活。
  
- **[稳定性] 修复多智能体过长样本丢弃问题**
  - 修复了 Agent 模式下丢弃超长样本的逻辑，增强了训练数据处理的鲁棒性 ([PR #1982](https://github.com/THUDM/slime/pull/1982))。

- **[底层优化] 非 MLA 注意力机制 FLOPs 计算修正**
  - 修复了 FLOPs 计算逻辑，确保 MLA（Multi-head Latent Attention）的投影/注意力公式仅受 `args.multi_latent_attention` 控制，避免了受 Megatron 全局默认参数（如 `kv_lora_rank`）的非预期污染 ([PR #1980](https://github.com/THUDM/slime/pull/1980))。

- **[工程化] SGLang v0.5.12 及 Docker 环境全面修复**
  - 集中解决并合并了与 `sglang v0.5.12` 相关的多个兼容性 Pull Requests，包括：修复 GLM4.7 flash 支持 ([PR #1977](https://github.com/THUDM/slime/pull/1977))、Qwen3 30B + DeepEP 兼容 ([PR #1978](https://github.com/THUDM/slime/pull/1978))、Mooncake 卸载问题 ([PR #1972](https://github.com/THUDM/slime/pull/1972)) 及通用 Docker 补丁 ([PR #1973](https://github.com/THUDM/slime/pull/1973))。

- **[性能与文档] 策略蒸馏与文档改进**
  - 为 on-policy 蒸馏的 HTTP session 添加了超时配置，提升了网络波动下的稳定性 ([PR #1970](https://github.com/THUDM/slime/pull/1970))。
  - 补充了关于“重分词问题”的详细文档说明 ([PR #1974](https://github.com/THUDM/slime/pull/1974))。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 正在快速从单一的 LLM 强化学习训练框架，演进为**支持多智能体交互、异构大模型后端的综合 RL 基础设施**。
1. **前沿算法与架构的快速响应**：项目紧跟 GRPO、On-policy Distillation 等最新 RL 算法，并迅速跟进修复如 MLA 注意力机制等前沿模型结构的底层算力统计问题。
2. **深度整合主流推理引擎**：通过持续维护对 SGLang (如 v0.5.12) 和 Megatron 的深度适配与补丁修复，Slime 在大规模 Rollout 生成与训练衔接上提供了极高的工程稳定性。
3. **面向多智能体与复杂 RLHF**：近期密集的 Agent Adapter 提交表明，该项目正在积极探索 LLM 在复杂环境决策中的应用落地，为研究 Multi-Agent RL 和复杂工具调用提供了优秀的开源基座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-05-30)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理了 **1 条 Issue** 和 **4 条 Pull Request**，无新版本发布。当前开发重心高度聚焦于 v2 架构的演进，涵盖**微服务化改造（CLI 工具链）**、**on-policy 蒸馏机制**以及**底层训练工作流的可观测性优化**。

## 2. 版本发布
无最新 Releases。项目目前处于高频底层特性迭代阶段，预计正在为下一个 Major Version（疑似 v2）积累代码。

## 3. 重点 Issues
- **[#1284](https://github.com/areal-project/AReaL/issues/1284) [CLOSED] Nightly experiments for performance validation**
  - **作者**: garrett4wade
  - **简评**: 该 Issue 旨在讨论外部贡献者缺乏 CI 测试资源（基于 GCP 临时实例）的背景下，如何实施性能验证的夜间实验。此 Issue 的关闭标志着社区可能在基础设施分配或测试流规范上已达成了初步共识。

## 4. 关键 PR 进展
今日的 PR 动态全面展示了 AReaL 在架构解耦和训练效能上的工程推进：

- **[#1375](https://github.com/areal-project/AReaL/pull/1375) [OPEN] feat: Initial scaffold for the v2 microservice operator CLI**
  - **作者**: sitabulaixizawaluduo
  - **简评**: 建立了 v2 版本的微服务操作 CLI 脚手架。引入了包含 `inf`、`agent`、`train`、`weight-update` 四个核心命名空间的 `areal` 控制台脚本。标志着 AReaL 正式向**微服务化和 CLI 工具链标准化**迈出实质性一步。

- **[#1376](https://github.com/areal-project/AReaL/pull/1376) [OPEN] feat(distillation): add on-policy distillation using RolloutEngine**
  - **作者**: zahrayousefijamarani
  - **简评**: 引入了使用独立 Teacher Rollout/Inference Engine（vLLM/SGLang）的 **on-policy 蒸馏**功能。该方法绕过了传统 train-engine 教师路径，旨在大幅降低显存开销，并为推理侧的 token log-prob 评分提供了干净的 API。这是 RL+LLM 范式中降低大模型部署与推理成本的关键优化。

- **[#1363](https://github.com/areal-project/AReaL/pull/1363) [CLOSED] feat: enable v2 training pipeline with controller parity**
  - **作者**: sitabulaixizawaluduo
  - **简评**: 该 PR 升级了 `GatewayTrainController`，引入了版本管理、引擎连接及批次清理机制，并统一了 HTTP 客户端会话。此 PR 的合并意味着 v2 训练管线的控制平面对齐工作已完成，为后续的分布式训练微服务化奠定了基础。

- **[#1338](https://github.com/areal-project/AReaL/pull/1338) [OPEN] feat: add W&B worker GPU system metrics**
  - **作者**: EazyReal
  - **简评**: 解决了单控制器训练下的监控盲区问题。通过将 Actor/Rollout/Critic 工作节点的 GPU 利用率等系统指标挂载到 W&B（Weights & Biases），打破了之前只能记录 Controller 进程内存的局限。这对于大规模 RLHF/RL 训练的**调试和显存瓶颈分析**至关重要。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 项目的近期动态展现了极高的工程成熟度和明确的技术演进路线，其在当前 RL 开源生态中具有独特的观测价值：
1. **彻底的微服务架构演进**：从 PR #1375 和 #1363 可以看出，AReaL 正在将复杂的 RL 训练流程拆解为 Inf、Agent、Train 等独立域，并通过 CLI 串联。这种架构能有效解决大模型 RL 训练中强耦合、难调试的工程痛点。
2. **深度集成与优化底层推理引擎**：项目在处理 vLLM/SGLang 等主流推理框架的集成上持续深耕（如 PR #1376 的 On-policy 蒸馏机制），通过解耦 Train-engine 和 Rollout-engine，在显存开销和分布式扩展性上提供更优解。
3. **贴近生产环境的可观测性**：通过引入细粒度的 W&B GPU 节点监控（PR #1338）和解决 CI 资源调度问题（Issue #1284），证明该项目不仅仅是一个算法研究代码库，更是一个面向大规模、工业化 RL 训练部署的基础设施项目。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 | 2026-05-30

## 1. 今日速览
过去 24 小时内，TRL 仓库共处理 **6 条 Issues**（多为历史问题归档）和 **14 条 PRs**（包含多项重构与新特性）。无新版本发布。核心动态集中在 **DPO 算法健壮性优化（内存与多模态）**、**GRPO 底层架构简化**、**多模态（音频）支持拓展** 以及 **依赖管理修复**。

---

## 2. 版本发布
无新版本发布。（注：主分支正进行密集的代码重构与依赖修复，预计将为下个小版本的发布做准备。）

---

## 3. 重点 Issues
过去一天的 Issue 更新主要为历史 Bug 的清理与归档，其中值得关注的基础设施问题如下：

- **CI 基础设施故障修复**：[#5878](https://github.com/huggingface/trl/issues/5878) `[CLOSED]` 
  由于 `kernels` 依赖版本限制问题导致 CI 报错中断（`ValueError`），该问题已通过 PR 限制依赖版本修复。
- **多模态 RL 呼声**：[#3040](https://github.com/huggingface/trl/issues/3040) `[CLOSED]`
  社区请求支持 Whisper / Qwen2Audio 等音频模型的强化学习用例，该需求与目前主分支的 Audio 支持重构 PR 高度契合。

---

## 4. 关键 PR 进展
今天的 PR 动态体现了项目在**性能优化**、**多模态扩展**和**代码架构去耦**三个维度的深度演进：

### 🚀 核心算法重构与优化
- **DPO 内存与截断机制优化**：
  - [#5882](https://github.com/huggingface/trl/pull/5882) `[OPEN]` 通过强制删除中间 logits 张量（添加 `del` 语句），显著降低 `DPOTrainer` 的峰值显存占用。
  - [#5881](https://github.com/huggingface/trl/pull/5881) `[OPEN]` 修复了视觉语言模型（VLM）在 `max_length` 截断时引发的图像 token/feature 对齐崩溃问题。
- **GRPO / RLOO 架构简化**：
  - [#5877](https://github.com/huggingface/trl/pull/5877) `[OPEN]` 统一简化了 `GRPOTrainer` 和 `RLOOTrainer` 中参考模型的处理逻辑，改善了 PEFT（高效微调）适配器的支持。
  - [#5854](https://github.com/huggingface/trl/pull/5854) `[OPEN]` 在 `AsyncGRPOTrainer` 中移除了传统的 Padding 机制，全面转向更高效的 Padding-free 训练模式。
- **参考模型处理统一化**：
  - [#5876](https://github.com/huggingface/trl/pull/5876) `[OPEN]` 与 [#5875](https://github.com/huggingface/trl/pull/5875) `[CLOSED]` 重构了 DPO 和 KTO 中的 `ref_model` 底层逻辑，移除了冗余的 `null_ref_context`，统一了 PEFT 模型在不同状态下的行为。

### ✨ 新特性与功能扩展
- **多模态 Audio 支持落地**：[#5830](https://github.com/huggingface/trl/pull/5830) `[OPEN]` 正式添加音频数据支持，填补了 TRL 在语音 RLHF 领域的空白。
- **自蒸馏算法解耦**：[#5862](https://github.com/huggingface/trl/pull/5862) `[OPEN]` 与 [#5883](https://github.com/huggingface/trl/pull/5883) `[OPEN]` 移除了冗余的基类，将 SDFT 和 SDPO 拆分为独立的训练器，并修正了 SDPO loss 为论文中的凸组合形式。

### 🛠 基础设施与依赖维护
- **依赖冲突解决**：[#5880](https://github.com/huggingface/trl/pull/5880) `[CLOSED]` 通过固定 `kernels < 0.15.1` 修复了近期 CI 的崩溃问题；[#5884](https://github.com/huggingface/trl/pull/5884) `[OPEN]` 将依赖管理转移至 `transformers[kernels]` 以避免未来冲突。
- **底层数据对齐**：[#5885](https://github.com/huggingface/trl/pull/5885) `[OPEN]` 修复了 GOLD trainer 中因为多字节字符分割导致的 student/teacher token 错位问题，改为基于字节偏移量的对齐方式。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

TRL 在当前大模型技术栈中的核心地位正从“单纯的微调工具”向“**高效、多模态、分布式的 RL 基础设施**”演进。从今日的数据可以看出几个明确的技术趋势：
1. **算力效率的极致压榨**：以 AsyncGRPO 去除 Padding、DPO 强制释放中间显存为代表的 PR，表明项目正发力解决 RLHF 阶段极高的显存墙和算力浪费问题，这对工业级大规模部署至关重要。
2. **向多模态 RLHF 迈进**：随着音频支持等相关 PR 的推进，TRL 正在打破纯文本对齐的局限，紧跟前沿多模态大模型的 Post-training 需求。
3. **底层架构的敏捷重构**：项目正在进行大规模的代码去耦和清理（如 KTO/DPO/GRPO 参考模型逻辑的统一），这不仅降低了社区的贡献门槛，也使前沿 RL 算法的迭代速度大幅提升。对于关注 LLM 对齐与强化学习的研究者和工程师而言，TRL 依然是追踪最前沿工程实践的最佳窗口。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报摘要：OpenRLHF
**日期**: 2026-05-30 | **分析目标**: [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

---

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体处于低频维护状态。未产生新的版本发布，无新增 Issue，仅有 1 个 PR 更新（已关闭）。项目当前的重心可能集中在内部主干开发或下一阶段的特性集成中。

### 2. 版本发布
过去 24 小时内**无新版本发布**。
*   **最新 Releases**: 无 ([Releases 页面](https://github.com/OpenRLHF/OpenRLHF/releases))

### 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。
*   当前未发现新的社区 Bug 反馈或 Feature 请求，表明现有版本（或主分支代码）在短期内保持了较好的稳定性。

### 4. 关键 PR 进展
今日共有 1 条 PR 记录，属于已关闭的状态报告：

*   **[#1245 Gpu hang](https://github.com/OpenRLHF/OpenRLHF/pull/1245) [CLOSED]**
    *   **作者**: [jun-amd](https://github.com/jun-amd)
    *   **更新时间**: 2026-05-29
    *   **分析**: 标题为“GPU 挂起”，通常涉及大模型训练/推理过程中的底层硬件（如 AMD GPU）兼容性、显存溢出（OOM）或分布式通信（如 RCCL/NCCL）死锁问题。该 PR 在创建当天即被迅速关闭，通常意味着这属于无效的代码提交、本地环境配置错误引起的偶发性问题，或是已被开发者在主分支中以其他方式修复。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管今日项目无显著代码变动，但 OpenRLHF 在当前的 LLM 强化学习（尤其是 RLHF/RLAIF）开源生态中依然具有不可替代的地位：
1.  **生产级 RLHF 全栈方案**：它是少数提供从 SFT、Reward Model 到 PPO/DPO 全流程，且深度集成 [vLLM](https://github.com/vllm-project/vllm) 和 [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) 的高性能框架，能够真正支持百亿/千亿参数模型的分布式训练。
2.  **多模态与对齐前沿**：随着 AI 对齐需求的激增，OpenRLHF 正在快速迭代支持更复杂的场景（如 Multi-modal RLHF），是研究者和工程师复现前沿对齐论文（如 DPO, SimPO, GRPO 等）的首选基座。
3.  **异构硬件探索**：从今日涉及 AMD GPU 的 PR 可以看出，项目正在被部署和测试于多样化的硬件生态中，其跨平台的高性能计算实践对 RL 基础设施建设具有重要参考价值。

---
*数据来源截止至: 2026-05-30 00:00 UTC*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 (2026-05-30)

## 1. 今日速览
过去 24 小时内，verl 仓库保持高活跃度。无新版本发布。新增或更新 **8 条 Issue**（3 条已关闭，5 条开放）和 **22 条 PR**（7 条已合并/关闭，15 条开放）。核心动态集中在：**vLLM 多模态缓存修复、Megatron 内存与分布式训练优化、昇腾 生态适配、以及架构级 RFC 提案**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[架构设计] [RFC] Generic `RemoteBackend` abstraction for out-of-process RL backends** ([#6537](https://github.com/verl-project/verl/issues/6537))
  由 Snowflake AI Research 提出，建议抽象解耦 RL 后端，支持外部的、独立进程的强化学习后端接入。这是对 verl 架构扩展性的重要探讨。
- **[架构讨论] 探讨 PR#6074 删除 `verl/interation` 代码的影响** ([#6530](https://github.com/verl-project/verl/issues/6530))
  社区对之前移除交互相关代码产生疑问，探讨新版中如何实现类似 collabllm 的效果，反映了项目在 API 层面的演进。
- **[Bug] Chat template 解析与交替角色不兼容** ([#6500](https://github.com/verl-project/verl/issues/6500))
  `initialize_system_prompt` 在部分需要严格交替角色的模板中失败。该 Issue 已被 PR [#6529](https://github.com/verl-project/verl/pull/6529) 修复。
- **[昇腾生态] 昇腾 GRPO 训练例程与精度讨论** ([#6528](https://github.com/verl-project/verl/issues/6528), [#6527](https://github.com/verl-project/verl/issues/6527))
  社区积极寻求 Qwen3.5 结合 Megatron+MindSpeed 在昇腾 NPU 上的 GRPO 训练标准示例，并讨论 RL 训练过程中的精度问题。

## 4. 关键 PR 进展
- **[Rollout/核心修复] vLLM 权重更新后重置全量缓存** ([#6522](https://github.com/verl-project/verl/pull/6522))
  修复多模态 Rollout 场景下，vLLM 复用旧的缓存输入和编码器输出导致的推理异常。扩大了权重更新后的缓存清理范围。
- **[Rollout/性能] 长尾请求负载均衡优化** ([#6533](https://github.com/verl-project/verl/pull/6533))
  解决 `GlobalRequestLoadBalancer` 因“粘性会话”导致长尾 Rollout 阶段的吞吐量瓶颈，允许在不平衡状态下动态解除绑定，提升多轮对话吞吐。
- **[Megatron/显存优化] 优化器状态和梯度精度对齐** ([#6526](https://github.com/verl-project/verl/pull/6526))
  在 bf16 混合精度训练中，将 Adam 状态和梯度累加缓冲区从 fp32 降为与模型同精度，为 Megatron 路线节省约 3 倍的相关显存占用。
- **[Trainer/计算优化] 裁剪无效的 Entropy/KL 反向传播** ([#6519](https://github.com/verl-project/verl/pull/6519))
  当 Entropy 或 KL 的损失系数为 0 时，阻断其参与 Actor 的计算图构建。有效减少无用的显存开销和计算时间。
- **[架构/Agent] 全异步管线支持单次 Rollout 多轨迹** ([#6271](https://github.com/verl-project/verl/pull/6271))
  在 Agent 循环的全异步训练链路中引入多轨迹支持，进一步完善 Agent RL 的复杂探索能力。
- **[昇腾/CI] 迁移至 `uv` 并升级 CANN 至 9.0.0** ([#6535](https://github.com/verl-project/verl/pull/6535), [#6520](https://github.com/verl-project/verl/pull/6520))
  15 个昇腾 CI 工作流全面从 pip 迁移到 `uv` 提速，并将底层 CANN 驱动升级至 9.0.0，昇腾生态持续完善。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **异构算力与国产硬件的深度适配**：随着 Ascend (昇腾) NPU 相关 CI、驱动升级 和底层分布式训练 的快速迭代，verl 正在迅速成为跨越 NVIDIA GPU 壁垒的强化学习基础设施。
2. **极致的工程与显存优化**：不仅支持几十亿/上百亿参数模型（如 Qwen3.5、GLM-MoE），项目还在死磕底层计算图剪枝 和 Megatron 显存管理 的极限，直击 RLHF 训练“慢”和“贵”的痛点。
3. **向复杂的 Agent RL 演进**：从支持多轨迹探索 到多轮对话的负载均衡 调度，以及引入外部后端 RFC 架构，verl 正在从一个单纯的 PPO/GRPO 训练框架，进化为支持复杂 Agent 交互与环境对接的全栈 RL 平台。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 开源生态日报：Open-Instruct 项目追踪
**日期**：2026-05-30 | **分析目标**：[allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. 今日速览
过去 24 小时内，Open-Instruct 仓库无新版本发布、无新增 Issue，但迎来了密集的底层代码更新与 Bug 修复。项目共产生 **12 条 PR 更新**（其中 1 条仍处于 Open 状态，11 条已 Close）。更新重心集中在 **GRPO 训练死锁修复、DPO 梯度异常消除以及数据集处理与评估逻辑的严密性重构**。

### 2. 版本发布
无。

### 3. 重点 Issues
无新增更新（共 0 条）。

### 4. 关键 PR 进展

**4.1 核心训练模块（GRPO & DPO）修复**
*   **[OPEN] 修复 GRPO 结合 OLMo-core 时的 bookkeeping 死锁及 Qwen3 同级微调**：[#1708](https://github.com/allenai/open-instruct/pull/1708)
    *   **技术细节**：修复了 `reduce_metrics` 导致的死锁问题。当 `_metrics` 为空时，OLMo-core 的 `_log_metrics` 会跳过提交，导致多卡同步卡死。修复方法是在所有 rank 上记录 `_metrics_keepalive`。同时加入了针对 Qwen3 模型的训练优化。
*   **修复 DPO 损失计算中的除零错误（NaN/Inf）**：[#1702](https://github.com/allenai/open-instruct/pull/1702)
    *   **技术细节**：在 DPO 工具链 `_get_batch_logps` 中，当 `average_log_prob=True` 且 label 全为 `-100` 时会发生除零错误，静默污染训练梯度。此 PR 引入了 Clamp 逻辑保障分母安全。

**4.2 数据与评估管线修复（作者: Chessing234）**
开发者 `Chessesing234` 集中清理了数据预处理中的一批逻辑漏洞，提升了 RLHF 阶段的数据清洗鲁棒性：
*   **修复 Token 长度过滤器的互斥 Bug**：[#1707](https://github.com/allenai/open-instruct/pull/1707), [#1706](https://github.com/allenai/open-instruct/pull/1706), [#1703](https://github.com/allenai/open-instruct/pull/1703)
    *   **技术细节**：修复了 `PreferenceDatasetProcessor` 中嵌套三元表达式导致的 `max_prompt_token_length` 和 `max_token_length` 检查互斥问题。重构为扁平化的 AND 逻辑，确保所有长度约束同时生效。相关重构还包括 [#1710](https://github.com/allenai/open-instruct/pull/1710)。
*   **修复多选题评估验证（`validate_choice`）逻辑反转与误判**：[#1711](https://github.com/allenai/open-instruct/pull/1711), [#1709](https://github.com/allenai/open-instruct/pull/1709), [#1700](https://github.com/allenai/open-instruct/pull/1700), [#1699](https://github.com/allenai/open-instruct/pull/1699)
    *   **技术细节**：原 `in` 操作符导致逻辑反转（检查文本是否在选项中）且对大小写敏感（如 'A' 与 'Apple' 的误匹配）。此系列 PR 将其修正为正则表达式边界匹配，并修复了操作数顺序。
*   **修复句子约束验证的正则解析漏洞**：[#1704](https://github.com/allenai/open-instruct/pull/1704)
    *   **技术细节**：修复了句末空格和多空格情况下导致句数统计错误的问题，过滤了 regex split 产生的空字符串。
*   **代码重构：`find_shared_text`**：[#1705](https://github.com/allenai/open-instruct/pull/1705)
    *   **技术细节**：基于之前的 Review 意见，使用 `zip` 和 `enumerate` 进行了更符合 Python 常规习惯的重构。

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **深度绑定前沿底层算力框架**：PR [#1708] 展现了 Open-Instruct 团队在与 OLMo-core 深度集成并推进 GRPO（Group Relative Policy Optimization）等前沿 RL 算法时的快速响应能力。解决多卡 All-Reduce 死锁问题表明该项目正致力于解决大规模 RL 训练中的硬核工程瓶颈。
2.  **对齐数据工程（Data Engineering for RLHF）的持续打磨**：强化学习的上限往往由 Reward Model 和数据质量决定。近期密集合入的 PR 揭示并修复了 DPO 数据过滤和多选题 Reward 验证中的细微逻辑 Bug（如：label `-100` 导致的 DPO 梯度崩溃、token 过滤条件互斥）。这种对数据管线不遗余力的除错，使其成为工业界落地 RLHF 极具参考价值的“标尺”项目。
3.  **对新架构的快速跟进**：在修复死锁的同时直接引入针对 Qwen3 的 parity tweaks，反映了该项目紧跟开源大模型迭代节奏，保持了对当前主流 Base 模型极高的适配优先级。

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

# RL 日报：Gymnasium 生态追踪 (2026-05-30)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于低活跃状态。无新增 Issues，无新版本发布，仅有 1 条关于 Python 3.14 兼容性的 PR 处于更新状态。当前项目核心在于维持底层基础设施的现代语言特性支持。

> 仓库链接：[Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 2. 版本发布
过去 24 小时及近期均**无**新版本发布。
> Releases 链接：[Gymnasium Releases](https://github.com/Farama-Foundation/Gymnasium/releases)

## 3. 重点 Issues
过去 24 小时**无**新增或更新的 Issues。
> Issues 链接：[Gymnasium Issues](https://github.com/Farama-Foundation/Gymnasium/issues)

## 4. 关键 PR 进展
- **[OPEN] Add Python 3.14 Support** (`#1587`)
  - **作者**: pseudo-rnd-thoughts
  - **更新时间**: 2026-05-29
  - **摘要**: 随着 Python 3.14 发布一段时间，该 PR 旨在为 Gymnasium 显式添加 3.14 版本的兼容性支持。这是目前仓库重点推进的底层维护工作，确保下游 RL 算法库能在最新 Python 环境中无缝调用标准 API。
  - **链接**: [Farama-Foundation/Gymnasium PR #1587](https://github.com/Farama-Foundation/Gymnasium/pull/1587)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率较低，但 Gymnasium 作为 RL 领域事实上的**环境交互 API 标准**，其生态地位依然不可替代。
1. **基石属性**：主流 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou）均深度依赖其 API 规范。
2. **语言生态跟进**：通过如 PR #1587 这类更新，Gymnasium 持续为整个 RL 上游生态扫清 Python 版本升级带来的底层障碍，避免因核心库不兼容导致的生态碎片化。
3. **接口统一**：在底层环境（如 MuJoCo、Atari）频繁重构的当下，Gymnasium 维持了上层算法调用接口的高度一致性，降低了研究者的心智负担。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL 日报：PettingZoo 生态追踪 (2026-05-30)

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活跃度较低，无新增 Issues、无新版本发布。活跃动态集中于现存 Bug 修复，有 1 个关键 Pull Request 更新，主要涉及底层 RLCard 环境在随机种子设定下的状态重置与奖励机制回归问题。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **今日新增/更新**: 0 条。

## 4. 关键 PR 进展
- **#1335 [OPEN] Fix gin_rummy knock/gin reward reverting to RLCard default on seeded reset (#1312)**
  - **作者**: Nikelroid
  - **链接**: [Farama-Foundation/PettingZoo PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)
  - **技术摘要**: 该 PR 修复了 `gin_rummy` 环境中导致可复现性实验失败的严重 Bug。在调用 `reset(seed=...)` 进行环境重置时，系统会静默覆盖用户配置的 `knock_reward` 和 `gin_reward`，将其重置为 RLCard 底层的默认值（knock: 0.2, gin: 1.0）。
  - **原因分析**: 环境在 `__init__` 阶段仅对评分器进行了一次补丁修正，但后续在执行带种子参数的重置逻辑时，未能维持这一覆盖机制，从而导致奖励函数异常回退。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **多智能体基准核心**: PettingZoo（Farama Foundation 旗下）与 Gymnasium 深度绑定，是目前多智能体强化学习（MARL）领域事实上的标准 API 规范之一。
2. **底层引擎的隐患排查**: 类似 PR #1335 修复的 Bug 暴露了上层环境包装器与底层引擎（如 RLCard）在状态管理上的同步隐患。这类关于 `seed` 与 `reward` 一致性的修复，对于保障 MARL 算法评估、基线对比以及科研实验的**严格可复现性**具有决定性意义。
3. **持续演进的工具链**: 随着标准向 Gymnasium 迁移，PettingZoo 对传统环境的 API 适配、底层依赖解耦及确定性 Bug 修复，确保了其在现代 RL 工具链中作为核心测试床的不可替代性。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>