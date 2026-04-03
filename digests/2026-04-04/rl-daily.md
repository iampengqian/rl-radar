# RL 开源生态日报 2026-04-04

> 生成时间: 2026-04-03 22:04 UTC | 覆盖项目: 15 个

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
2026-04-04 的 RL 开源生态呈现出明显的**分层演进**态势。
1.  **LLM/GenRL 领域（verl, TRL, Open Instruct, Slime 等）** 占据了绝对活跃度高地，主要矛盾集中在**多模态（VLM）适配**、**超大模型（100B+/MoE）的分布式稳定性**以及**异构硬件（NPU）支持**。
2.  **基础设施层（ROCK, AReaL, OpenRLHF）** 正在经历架构升级，重点解决**容器化隔离**、**微服务化数据加载**以及**Agent 执行沙箱**等生产级安全问题。
3.  **经典/通用 RL（Tianshou, SB3, CleanRL）** 则处于平稳维护期，重点在于**API 标准化（Gymnasium 对齐）** 和 **PyTorch 2.x 编译器适配**，更关注底层鲁棒性而非新架构。

## 各项目活跃度对比
*注：无活动的项目已省略，数据基于各项目日报摘要统计。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 17 | 29 | 0 | **极高**。多模态路线图确立，Legacy 代码深度修复，NPU 适配。 |
| **Open Instruct** | 0 | 9 | 0 | **高**。GRPO 工程化攻坚，Sandbox 环境与 Replay Buffer 引入。 |
| **TRL** | 3 | 19 | 0 | **高**。多模态工具链完善，vLLM 0.11 适配，分布式修复。 |
| **Slime** | 3 | 6 | 0 | **中高**。397B MoE 权重转换修复，FIPO 算法集成。 |
| **Tianshou** | 1 | 8 | 0 | **中**。深度重构 EnvPool 接口，清理历史技术债。 |
| **OpenRLHF** | 1 | 3 | 0 | **中**。Agent 沙箱安全讨论，Ray/NCCL 配置修复。 |
| **AReaL** | 1 | 5 | 0 | **中**。微服务化架构升级，vLLM 后端解耦。 |
| **ROCK** | 2 | 4 | 1 | **中**。v1.4.8 发布，支持 Kata Containers DinD。 |
| **ROLL** | 1 | 2 | 0 | **低**。Torch 2.8 兼容性排查，NPU 后端开发中。 |
| **torchtune** | 0 | 1 | 0 | **低**。修复上游 torchao API 变更。 |
| **CleanRL** | 1 | 0 | 0 | **低**。历史遗留超参一致性讨论。 |
| **SB3** | 0 | 1 | 0 | **低**。探索 `torch.compile` 集成。 |

## 共同关注的研究与工程方向

### 🔬 研究侧信号
1.  **后 PPO 时代的算法演进**：虽然 PPO 仍是主力，但社区正积极集成 GRPO（Group Relative Policy Optimization）、FIPO（Future-KL Influenced Policy Optimization）和 JEPO 等新算法，旨在降低对 Critic 模型的依赖或优化 KL 约束。
2.  **多模态 RLHF（VLM）**：从 TRL 的“多模态工具响应”到 verl 的“vLLM-Omni”路线图，**Vision-Language 模型的对齐**已成为各大框架的下一个必争之地。
3.  **Agent 与异步交互**：针对多轮对话和工具调用的异步 Rollout 机制正在标准化，Slime 和 TRL 都在探索更细粒度的样本时效性控制。

### 🛠️ 工程/基础设施侧信号
1.  **Loss 归一化与梯度累积的精确性**：verl 连续修复了 Legacy 路径下的 Loss 归一化 Bug，OpenRLHF 和 TRL 也在处理 ZeRO3 下的梯度问题。这表明社区正在从“跑通流程”转向**追求数学一致性和训练精度**。
2.  **异构计算与国产化适配**：verl、ROLL 和 AReaL 均在显式推进对华为昇腾（NPU）及 Mindspore 生态的支持，**Multi-backend** 正在成为工业级框架的标配。
3.  **执行环境的安全性**：Open Instruct 引入 Docker Sandbox，ROCK 支持 Kata Containers，OpenRLHF 讨论 Agent 沙箱。随着 RL 训练执行代码能力的增强，**隔离性与安全性**成为基础设施的新焦点。

## 差异化定位分析
1.  **verl vs. Open Instruct**：两者都在攻坚大规模 GRPO，但 **verl** 更侧重于底层引擎（vLLM/Megatron）的深度集成与异构硬件适配，适合极致性能压榨；**Open Instruct** 则更关注训练范式本身（如 Replay Buffer、Sandbox Env），正在向通用 Agent 训练平台演进。
2.  **TRL vs. Slime**：**TRL** 依然是 HuggingFace 生态的“瑞士军刀”，侧重快速跟进 SOTA（如 Gemma, vLLM 0.11）和易用性；**Slime** 则表现出更强的“大模型”属性，专注于 100B+ MoE 模型的工程落地难题（如权重转换、内存泄漏）。
3.  **Tianshou vs. SB3**：**Tianshou** 正在通过重构（API 标准化、EnvPool 适配）来消除历史包袱，试图现代化其架构；而 **SB3** 则保持稳健，仅在底层探索 `torch.compile` 等性能优化，维持其作为“可靠基线”的地位。

## 社区热度与成熟度
- **成熟期项目**：ROCK 和 OpenRLHF 展现出典型的“生产级”特征，更新多为关键 Bug 修复、安全性补丁和文档完善，功能迭代趋于稳健。
- **成长期项目**：Open Instruct 和 Slime 处于功能快速扩展期，代码变动剧烈（重构、新算法、新环境），适合前沿研究者但需承担一定稳定性风险。
- **活跃度头部**：verl 凭借高 Issue/PR 处理量和清晰的战略路线图（Roadmap），显示出极强的社区动员能力和工程迭代速度。

## 值得关注的趋势信号
1.  **MoE 与超大模型 RL 的工程突围**：Slime 修复 397B 权重转换、verl 适配 Qwen3.5-122B，标志着开源 RL 已跨过 70B 阈值，正式进入 **MoE 架构与 100B+ 参数** 的深水区。
2.  **vLLM 版本升级引发的生态震荡**：TRL 升级至 vLLM 0.11，ROLL 报告 Torch 2.8 + vLLM 0.10 的崩溃问题。这暗示 **推理引擎的快速迭代正在倒逼 RL 框架进行高频率的适配性维护**，版本锁定成为生产环境的关键挑战。
3.  **从“训练框架”到“操作系统”**：AReaL 引入微服务化数据加载，ROCK 和 Open Instruct 强化容器化环境。RL 框架正在解耦为**控制平面**和**数据/执行平面**，这种架构分离是支撑大规模集群训练的前兆。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报摘要 (2026-04-04)

这里是基于 GitHub 数据生成的 ROLL (alibaba/ROLL) 项目日报。

## 1. 今日速览
过去 24 小时内，ROLL 项目活跃度平稳，主要集中在生态集成与硬件适配的代码合并前准备，以及核心训练稳定性的排查。无新版本发布，但关键 PR 迎来了更新。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
**#398 [OPEN] Torch 2.8.0 + vLLM 0.10.2 环境下开启 `use_kl_loss` 导致训练崩溃**
*   **链接**: [alibaba/ROLL Issue #398](https://github.com/alibaba/ROLL/issues/398)
*   **详情**: 社区用户反馈在较新的依赖栈（Torch 2.8.0 + vLLM 0.10.2）中，对 `qwen2.5-vl-3B-agentic` 模型开启 `use_kl_loss` 后，训练会在特定步数崩溃（Loss 飙升或 NaN）。相比之下，旧版稳定环境（Torch 2.6.0 + vLLM 0.8.4）运行正常。
*   **分析**: 该 Issue 涉及 Agentic VL 模型与最新推理后端（vLLM）的兼容性问题，对于计划升级基础镜像的用户具有极高参考价值。目前该贴已有 17 条讨论，社区正在深入排查。

## 4. 关键 PR 进展
**#404 [OPEN] 集成 Trackio 监控工具**
*   **链接**: [alibaba/ROLL PR #404](https://github.com/alibaba/ROLL/pull/404)
*   **详情**: 开发者 ParagEkbote 提交了针对 [Issue #402](https://github.com/alibaba/ROLL/issues/402) 的修复，为 ROLL 添加了 Trackio 集成支持，增强了训练过程的可观测性。

**#380 [OPEN] 支持 NPU Megatron 后端**
*   **链接**: [alibaba/ROLL PR #380](https://github.com/alibaba/ROLL/pull/380)
*   **详情**: 开发者 UsernameFull 正在为 ROLL 添加华为昇腾（NPU）设备的 Megatron-Core 后端支持。
*   **技术点**: 该 PR 重构了 `roll/platforms/__init__.py` 中的平台检测优先级，使得 ROLL 框架能够利用 NPU 硬件进行 RL 训练。这是项目走向多硬件生态的重要一步。

## 5. 为什么值得在当前 RL 生态继续关注
ROLL 正在展现出**强化学习基础设施**的成熟特征：
1.  **紧跟前沿技术栈**: 社区正在高频测试与最新的 vLLM (0.10.2) 和 Torch (2.8.0) 的兼容性，确保 RLHF 训练能利用最新的推理加速特性。
2.  **异构计算支持**: 通过 PR #380 可以看出，项目不仅局限于 NVIDIA 生态，正在积极适配华为昇腾 NPU，这对国产大模型训练至关重要。
3.  **可观测性扩展**: Trackio 等第三方工具的集成（PR #404）表明项目正在完善周边工具链，降低用户的实验管理门槛。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

这里是 **2026-04-04** 的 ROCK (Alibaba/ROCK) 项目 RL 日报摘要。

### 1. 今日速览
ROCK 项目今日发布了 **v1.4.8** 版本，核心更新集中在 **Kata Containers 运行时对 DinD (Docker-in-Docker) 场景的支持**，这进一步增强了 RL 训练环境中容器的隔离性与灵活性。与此同时，社区正在积极完善 v1.4.8 的文档，并针对 K8s 环境下的 Sandbox 元数据管理提交了关键的修复与持久化方案。

### 2. 版本发布
*   **[v1.4.8]**: **Kata Runtime 支持 DinD 模式**
    *   **核心变更**：引入了 Kata runtime 对 Docker-in-Docker 的支持，这对于在安全沙箱环境中运行需要 Docker 守护进程的 RL 任务（如构建环境镜像或嵌套容器化训练）至关重要。
    *   **贡献者**: @zhongwen666
    *   **详细变更**:
        *   PR #725: Kata runtime support dind
        *   PR #732: Feat/kata support dind 0331
    *   **链接**: [Release v1.4.8](https://github.com/alibaba/ROCK/releases/tag/v1.4.8)

### 3. 重点 Issues
*   **[#737] [Doc] 需补充 v1.4.8 Release Notes**
    *   **简评**：文档同步需求，指出 v1.4.8 版本发布说明缺失，需要及时补全以保持文档完整性。
    *   **链接**: [Issue #737](https://github.com/alibaba/ROCK/issues/737)
*   **[#712] [Bug] K8s Sandbox 信息覆盖风险与实时事件处理**
    *   **简评**：这是一个严重的数据一致性 BUG。指出在 Redis 异常时，代码逻辑可能返回 None 并反向覆盖 Redis 中的有效数据；同时指出 K8s client 需提升事件处理的实时性。该 Issue 已有对应修复 PR (#713)。
    *   **链接**: [Issue #712](https://github.com/alibaba/ROCK/issues/712)

### 4. 关键 PR 进展
*   **[#738] 添加 v1.4.8 版本文档**
    *   **状态**: Open
    *   **内容**：响应 Issue #737，补充最新版本的发布说明。
    *   **链接**: [PR #738](https://github.com/alibaba/ROCK/pull/738)
*   **[#730] 支持 Sandbox 元数据持久化到数据库**
    *   **状态**: Open
    *   **内容**：旨在将 Sandbox metadata 持久化存储，这可能意味着项目正在减少对纯内存/Redis 存储的依赖，转向更可靠的数据库存储方案，以支持更大规模的集群管理。
    *   **链接**: [PR #730](https://github.com/alibaba/ROCK/pull/730)
*   **[#713] 修复 K8s Sandbox 信息覆盖问题**
    *   **状态**: Open
    *   **内容**：针对 Issue #712 的修复提交，重点解决异常情况下的数据覆盖错误。
    *   **链接**: [PR #713](https://github.com/alibaba/ROCK/pull/713)
*   **[#654] 强制执行容器 Rootfs 磁盘限制**
    *   **状态**: Open (Updated)
    *   **内容**：通过 Docker storage-opt 强制限制容器 rootfs 磁盘用量，防止 RL 任务生成过多日志或数据撑爆宿主机磁盘。
    *   **链接**: [PR #654](https://github.com/alibaba/ROCK/pull/654)

### 5. 为什么值得 RL 生态关注
ROCK 作为一个 RL 基础设施项目，今日的更新展示了其在 **大规模分布式训练稳定性** 上的持续投入：
1.  **更强的隔离性**：通过 v1.4.8 对 **Kata Containers + DinD** 的支持，为 RL 任务提供了更高安全级别的虚拟化隔离，同时保留了容器化带来的便利性，非常适合多租户或高风险代码的执行环境。
2.  **数据可靠性演进**：PR #730（元数据持久化）和 PR #654（磁盘限额）表明项目正在从“能用”向“企业级稳定”过渡，解决了大规模并发下元数据丢失和资源抢占的痛点，这对于长周期的 RL 训练任务尤为重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报 (2026-04-04)

## 1. 今日速览
过去 24 小时内，Slime 项目活跃度较高，主要集中在**工程稳定性修复**与**高级训练策略的扩展**。
- **Issues (3)**：暴露了 Colocate 模式下的内存泄漏问题，社区开始探讨生产级异步 Rollout 的 staleness control（时效性控制）需求，以及 Qwen3.5 超长上下文的 SFT 配置难点。
- **PRs (6)**：4 个 PR 合并（主要修复 Qwen3.5 397B 权重转换及 SFT 脚本问题），2 个新特性 PR 提交（FIPO 算法支持、Checkpoint 自动清理）。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues

*   **[#1105] Colocate 模式 Rollout 阶段存在内存泄漏**
    *   **摘要**：用户反馈在 `colocate` 模式下，非 Rollout 进程的内存占用随 Rollout 步数的增加而持续上升，导致 OOM 风险。该问题对长时训练稳定性影响较大。
    *   **链接**：[THUDM/slime Issue #1105](https://github.com/THUDM/slime/issues/1105)

*   **[#1800] 请求增强 Async Rollout（支持 Staleness Control 与 Partial Rollout）**
    *   **摘要**：作者指出当前 `one_step_off` 和 `fully_async` 模式缺乏对样本过期和策略版本的精细控制。建议引入 Staleness Control 和 Partial Rollout 机制，以提升大规模异步 RL 训练的收敛效率与稳定性。
    *   **链接**：[THUDM/slime Issue #1800](https://github.com/THUDM/slime/issues/1800)

*   **[#1802] Qwen3.5-9b 128k 上下文 SFT 配置咨询**
    *   **摘要**：用户在 128k 长上下文场景下进行 SFT 时遇到配置困惑（CP 无效），寻求正确的 Rollout 与训练参数设置。
    *   **链接**：[THUDM/slime Issue #1802](https://github.com/THUDM/slime/issues/1802)

## 4. 关键 PR 进展

*   **[#1801] [Feature] 支持 FIPO (Future-KL Influenced Policy Optimization)**
    *   **状态**：OPEN
    *   **摘要**：引入 **FIPO** 算法作为一种内置 Loss 类型。该方法无需 Value Network 即可实现 Token 级的密集奖励分配，通过 Future-KL 约束策略优化，适合深度推理任务。
    *   **链接**：[THUDM/slime PR #1801](https://github.com/THUDM/slime/pull/1801)

*   **[#1799] [Fix] 修复 Qwen3.5 397B 开启专家并行时的权重转换错误**
    *   **状态**：CLOSED (Merged)
    *   **摘要**：修复了 `slime_plugins/mbridge/qwen3_5.py` 中处理 Fused Expert 权重时的索引 Bug。原代码使用 local expert id 索引 HF 的 fused tensor，导致维度不匹配；现修正为使用 global expert id 进行映射。
    *   **链接**：[THUDM/slime PR #1799](https://github.com/THUDM/slime/pull/1799)

*   **[#1798] [Feature] 增加检查点保留数量限制**
    *   **状态**：OPEN
    *   **摘要**：新增 `--max-actor-ckpt-to-keep` 和 `--max-critic-ckpt-to-keep` 参数，支持在长周期训练中自动清理旧检查点，以控制磁盘占用。
    *   **链接**：[THUDM/slime PR #1798](https://github.com/THUDM/slime/pull/1798)

*   **[#1791] [Fix] 移除 SFT 脚本中的 `--apply-chat-template`**
    *   **状态**：CLOSED (Merged)
    *   **摘要**：修复 `run_geo3k_vlm_sft.sh` 中的 TypeError。SFT rollout 代码期望 `prompt` 为 message dict 列表，但脚本提前应用了 chat template 转为了字符串，导致类型冲突。
    *   **链接**：[THUDM/slime PR #1791](https://github.com/THUDM/slime/pull/1791)

## 5. 为什么值得持续关注
Slime 正在从单一的 RL 训练框架向**支持超大参数模型（397B MoE）**与**前沿 RL 算法（FIPO）**的工业化平台演进。
1.  **大模型适配能力**：PR #1799 证明项目正在快速跟进 Qwen3.5 等最新 SOTA 模型的复杂分布式并行（Expert Parallel）转换需求。
2.  **算法创新集成**：FIPO (PR #1801) 的引入表明该项目不仅关注工程落地，也在积极整合无需 Critic 模型的高效 RL 算法，降低训练显存门槛。
3.  **生产级痛点解决**：针对异步训练的 Staleness Control 议题（Issue #1800）和 Checkpoint 磁盘管理（PR #1798），显示出项目正致力于解决实际生产环境中的稳定性和资源管理难题。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-04-04)

## 1. 今日速览
过去 24 小时内，AReaL 项目保持活跃开发状态，无新版本发布，但核心架构迭代迅速。重点关注 **vLLM 推理后端支持** 以及 **分布式数据加载服务** 的架构升级。此外，Roadmap 议题仍有持续互动，表明社区对 Q1 里程碑的高度关注。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **[Roadmap] 2026 Q1 Milestones** `#907` `OPEN`
    - **摘要**：该 Issue 定义了截至 2026 年 4 月的开发路线图，详细规划了正在进行和计划中的功能增强。作为项目的指挥棒，该贴在昨日仍有更新，是了解项目短期方向的关键入口。
    - **链接**：[inclusionAI/AReaL Issue #907](https://github.com/inclusionAI/AReaL/issues/907)

## 4. 关键 PR 进展

### 基础设施与架构升级
- **feat(infra): add distributed data loading service** `#1120` `OPEN`
    - **进展**：正在重构数据加载架构。拟引入基于微服务的 Gateway/Worker/Router 系统，通过 HTTP API 管理 `DataController`，旨在替代原有的进程内数据集处理方式，以支持更大规模的分布式训练。
    - **链接**：[inclusionAI/AReaL PR #1120](https://github.com/inclusionAI/AReaL/pull/1120)

### 推理与训练兼容性
- **feat(service): add vllm backend support for inference service demo** `#1136` `OPEN`
    - **进展**：新增 vLLM 后端支持。允许推理服务在 sglang 不可用时回退到 vLLM，并通过 `--inference-backend` 标志动态选择，增强了推理侧的灵活性。
    - **链接**：[inclusionAI/AReaL PR #1136](https://github.com/inclusionAI/AReaL/pull/1136)

- **feat: enable LoRA RL-training in Megatron via megatron-bridge** `#1123` `OPEN`
    - **进展**：解决 Megatron 引擎不支持 LoRA RL 微调的问题。这对于扩展至多节点训练及大型 MoE 模型的高级并行化至关重要。
    - **链接**：[inclusionAI/AReaL PR #1123](https://github.com/inclusionAI/AReaL/pull/1123)

### 错误修复
- **fix(engine): for broken tree training due to bad indent in PR #1056** `#1135` `CLOSED`
    - **进展**：修复了 PR #1056 引入的回归 Bug（缩进错误导致 `make_mcore_model` 未被 patch 覆盖），该 Bug 曾导致树状训练流程中断。
    - **链接**：[inclusionAI/AReaL PR #1135](https://github.com/inclusionAI/AReaL/pull/1135)

### 工作流扩展
- **feat: add scaffolding rollout workflow** `#1064` `OPEN`
    - **进展**：添加了脚手架式 Rollout 工作流，正在进行中。
    - **链接**：[inclusionAI/AReaL PR #1064](https://github.com/inclusionAI/AReaL/pull/1064)

## 5. 生态观察：为何值得关注？
AReaL 正在从单一的 RL 训练框架向**高性能、微服务化架构**演进：
1.  **架构解耦**：PR #1120 提出的分布式数据加载服务，显示出项目正在通过微服务架构解决 RL 训练中的 I/O 瓶颈，这是迈向大规模集群训练的关键一步。
2.  **大模型适配**：通过 PR #1123 (Megatron LoRA) 和 PR #1136 (vLLM Backend)，项目正在强化对主流大模型推理引擎和并行化框架的兼容性，这对训练 Large MoE 模型的 RL 对齐至关重要。
3.  **稳定性修复**：针对 Tree Training 的快速修复（#1135）表明维护者对核心训练流程的监控和响应非常及时。

该项目适合需要**大规模分布式 RL 训练**以及**自定义 Inference Backend** 的进阶开发者关注。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026-04-04

## 1. 今日速览
过去 24 小时内，TRL 仓库活跃度较高，共处理 **19 个 PR**（其中 11 个已合并，8 个开放中）和 **3 个新 Issue**。重点集中在 **多模态工具调用** 的测试与实现、**GRPO/RLOO 在分布式环境（ZeRO3）下的兼容性修复**，以及依赖库（vLLM, Transformers, Datasets）的版本更新与适配。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **#4899 RLOO and GRPO failing with ZeRO3**
  - **摘要**：在 ZeRO3 配置下运行 RLOO 和 GRPO 时出现 `IndexError: pop from an empty deque`。虽然已有相关修复 PR (#5420)，但该问题仍然是分布式训练中的一个痛点。
  - **链接**：[huggingface/trl Issue #4899](https://github.com/huggingface/trl/issues/4899)

- **#5444 AsyncGRPO: support async tool calls**
  - **摘要**：功能请求。目前的 `AsyncRolloutWorker` 不支持异步工具调用，导致初始化时报错。该 Issue 配合 PR #5446 提出，旨在对齐 `GRPOTrainer` 的功能。
  - **链接**：[huggingface/trl Issue #5444](https://github.com/huggingface/trl/issues/5444)

- **#5449 ImportError in experimental module**
  - **摘要**：尝试从 `trl.experimental.sdpo` 导入时遇到 `ImportError`，提示无法导入 `TRLExperimentalWarning`。这可能反映了当前主分支在模块导出或依赖管理上存在小的回归问题。
  - **链接**：[huggingface/trl Issue #5449](https://github.com/huggingface/trl/issues/5449)

## 4. 关键 PR 进展

### 核心功能与算法
- **#5446 [OPEN] Support async tool calls in AsyncRolloutWorker**
  - **内容**：为 `AsyncRolloutWorker` 添加异步工具支持，填补了与主分支 `GRPOTrainer` 的功能差距，使得在异步 RL 环境中能够处理耗时工具调用。
  - **链接**：[huggingface/trl PR #5446](https://github.com/huggingface/trl/pull/5446)

- **#5411 [OPEN] Add JEPO trainer**
  - **内容**：社区贡献了 JEPO（Joint Embedding Predictive Architecture）训练器的实现，试图扩展 TRL 的算法库。
  - **链接**：[huggingface/trl PR #5411](https://github.com/huggingface/trl/pull/5411)

- **#5447 [MERGED] Align KTO with DPO**
  - **内容**：重构 `KTOTrainer`，使其像 DPO 一样在初始化时预计算参考对数概率，减少代码重复并可能优化显存使用。
  - **链接**：[huggingface/trl PR #5447](https://github.com/huggingface/trl/pull/5447)

### 多模态与工具调用
- **#5448 [OPEN] Add test and docs for multimodal tool responses**
  - **内容**：增加了针对“返回图像的工具”的测试用例，并补充了文档。这对于构建能够处理图像输入/输出的 Agent 至关重要。
  - **链接**：[huggingface/trl PR #5448](https://github.com/huggingface/trl/pull/5448)

- **#5450 [OPEN] Add tests for Gemma pixel splitting**
  - **内容**：补充了 PR #5437（Gemma VLM 支持）遗漏的测试用例，涉及 `split_pixel_values_by_grid` 逻辑。
  - **链接**：[huggingface/trl PR #5450](https://github.com/huggingface/trl/pull/5450)

### 基础设施与依赖更新
- **#5443 [MERGED] Update vLLM to 0.11.0**
  - **内容**：将 vLLM 最低支持版本提升至 0.11.0，清理了旧版本的兼容性代码，标准化了结构化输出 的处理逻辑。
  - **链接**：[huggingface/trl PR #5443](https://github.com/huggingface/trl/pull/5443)

- **#5376 [MERGED] Require datasets>=4.7.0**
  - **内容**：通过强制使用 `Json` dtype 修复了数据集中 `None` 值错误插入的问题，提升了多模态和工具调用数据处理的鲁棒性。
  - **链接**：[huggingface/trl PR #5376](https://github.com/huggingface/trl/pull/5376)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **紧跟 SOTA 算法与架构**：社区正在快速迭代 GRPO（Group Relative Policy Optimization）、JEPO 等新算法，并迅速适配 Gemma 等最新模型架构。
2.  **Agent 与多模态的深度融合**：项目正密集修补“多模态工具响应”和“异步工具调用”的功能缺口，表明 TRL 正从一个单纯的 RLHF 库转型为支持复杂 Vision-Language Agent 训练的框架。
3.  **工业化部署的严谨性**：今日大量 PR 集中在 vLLM 版本对齐、ZeRO3 分布式修复和数据集类型安全上。这显示了维护者正致力于解决大模型训练中“能跑”到“稳定跑”的工程难题，这对于企业级落地至关重要。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 日报摘要 (2026-04-04)

## 1. 今日速览
Tianshou 今日核心动态集中在**架构重构与稳定性修复**。虽然无新版本发布，但项目进行了高频的代码清理与接口标准化工作，共计 1 个 Issue 更新和 8 个 PR 更新。重点解决了环境集成接口的规范问题，并清理了历史遗留的陈旧 PR。

## 2. 版本发布
无。

## 3. 重点 Issues
*   **[#1291](https://github.com/thu-ml/tianshou/issues/1291) Collector.collect() 因时钟回拨导致崩溃 [CLOSED]**
    *   **详情**：`Collector.collect()` 使用 `time.time()` 计时，当系统时钟发生回滚时，会导致计算出的 `collect_time` 为负数，进而触发 `ValueError`。
    *   **状态**：该问题已被识别并处理的 PR 关闭。

## 4. 关键 PR 进展

### 核心修复与稳定性
*   **[#1295](https://github.com/thu-ml/tianshou/pull/1295) [data collector] 使用单调时钟计时 [CLOSED]**
    *   **内容**：针对 Issue #1291，将 `time.time()` 替换为 `time.monotonic()`，防止因系统时间调整导致的负数时长错误。
    *   **意义**：增强了数据收集模块在复杂生产环境下的鲁棒性。

### 架构重构与 API 优化 (Author: Lidang-Jiang)
*   **[#1294](https://github.com/thu-ml/tianshou/pull/1294) 新增 EnvPoolVectorEnv 包装器 [OPEN]**
    *   **内容**：修复 #1096。不再直接传递原始 envpool 环境，而是引入 `EnvPoolVectorEnv` 适配器，规范化了 info 字典的数据结构。
    *   **意义**：解决了 EnvPool 与 Tianshou 接口不完全兼容的问题。
*   **[#1293](https://github.com/thu-ml/tianshou/pull/1293) 将 Atari/Mujoco 辅助代码移入库内 [OPEN]**
    *   **内容**：将 `examples/` 下的环境配置代码迁移至 `tianshou/env/` 下，使其成为包的一部分。
    *   **意义**：降低了用户搭建标准 Benchmark 的门槛。
*   **[#1292](https://github.com/thu-ml/tianshou/pull/1292) 重命名 state_shape 为 obs_shape [OPEN]**
    *   **内容**：解决 #1036 命名混淆。将 `state_shape` 统一重命名为 `obs_shape`，以匹配 Gymnasium 新标准及 Tianshou 内部 `Batch` 逻辑。
    *   **意义**：消除歧义，对齐主流 Gymnasium API 规范。

### 历史遗留清理
*   **[#780](https://github.com/thu-ml/tianshou/pull/780) / [#558](https://github.com/thu-ml/tianshou/pull/558) / [#781](https://github.com/thu-ml/tianshou/pull/781) / [#578](https://github.com/thu-ml/tianshou/pull/578)**
    *   **状态**：均为 [CLOSED]。
    *   **详情**：集中关闭了一批 2022 年创建的陈旧 PR（涉及 Atari PPO 修复、Wandb x-axis 优化、负数采集时间修复等）。这表明项目正在进行代码库维护，可能相关功能已在其他分支合并或被视为过时。

## 5. 为什么值得持续关注
Tianshou 正在经历一次深度的**接口标准化与模块化重构**：
1.  **拥抱生态标准**：通过 PR #1292 和 #1293，项目正在积极消除内部命名与 Gymnasium 标准之间的割裂，并致力于将环境封装工具化，这表明 Tianshou 正从一个单纯的算法库向更完善的 RL 基础设施演进。
2.  **强化工业级鲁棒性**：修复时钟回拨问题（PR #1295）和规范第三方集成（PR #1294）显示出维护者对边缘 case 和生产环境稳定性的重视。
3.  **清理技术债**：一次性关闭多个长龄 PR 说明维护团队正在为后续的大版本更新（可能是 v1.0 或重大架构升级）扫清障碍，保持代码库的整洁与活跃度。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 技术动态 (2026-04-04)

## 1. 今日速览
过去 24 小时内，OpenRLHF 项目维持了较高的维护活跃度。虽然无新版本发布，但社区提交了 **3 个关键性修复 PR**（均已合并关闭），主要解决了 Ray 环境下的 NCCL 调试配置冲突及 Checkpoint 加载的鲁棒性问题。此外，新增 1 条关于 **Agent 沙箱执行安全** 的深度讨论 Issue。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **#1210 [OPEN] 针对 Multi-turn Agent 的沙箱执行机制**
    *   **作者**: congwang-mk
    *   **摘要**: 指出当前 OpenRLHF 在执行 Multi-turn Agent Rollout 时，通过 `--agent_func_path` 指定的代码拥有宿主机完全权限（文件系统、网络、环境变量）。在大规模训练中，这存在单次坏 Episode 污染共享状态或干扰其他训练任务的风险，建议引入沙箱隔离机制。
    *   **链接**: [OpenRLHF/OpenRLHF #1210](https://github.com/OpenRLHF/OpenRLHF/issues/1210)

*   **#1138 [CLOSED] 训练期间 NCCL_DEBUG=INFO 设置无效**
    *   **作者**: Exbilar
    *   **摘要**: 用户在遇到 `ncclCommInitRank` 错误试图开启 Debug 日志时，发现环境变量被忽略。该问题已通过 PR #1212 修复。
    *   **链接**: [OpenRLHF/OpenRLHF #1138](https://github.com/OpenRLHF/OpenRLHF/issues/1138)

## 4. 关键 PR 进展
*   **#1212 [CLOSED] 修复 Ray 运行时对 NCCL_DEBUG 环境变量的覆盖**
    *   **贡献者**: Lidang-Jiang
    *   **核心改动**: `train_ppo_ray.py` 中的 `ray.init()` 曾硬编码 `NCCL_DEBUG=WARN`，导致用户通过 `ray job submit` 设置的调试级别失效。此 PR 改为读取 `os.environ` 优先，恢复了用户对 NCCL 日志的控制权。
    *   **链接**: [OpenRLHF/OpenRLHF #1212](https://github.com/OpenRLHF/OpenRLHF/pull/1212)

*   **#1208 [CLOSED] 增强 Checkpoint 目录为空时的容错性**
    *   **贡献者**: konghw-git
    *   **核心改动**: 修复了当 `--load_checkpoint` 开启但目录为空或无有效 DeepSpeed 检查点时程序崩溃的问题。现在逻辑改为发出警告并从头开始训练，提升了断点续训流程的健壮性。
    *   **链接**: [OpenRLHF/OpenRLHF #1208](https://github.com/OpenRLHF/OpenRLHF/pull/1208)

*   **#1207 [CLOSED] 新增多进程数据加载选项**
    *   **贡献者**: konghw-git
    *   **核心改动**: 全流程（SFT/RM/DPO/PPO）增加 `--dataloader_num_workers` 参数。设置大于 0 时启用 `persistent_workers`，旨在减少数据加载瓶颈，优化 I/O 密集型任务的训练效率。
    *   **链接**: [OpenRLHF/OpenRLHF #1207](https://github.com/OpenRLHF/OpenRLHF/pull/1207)

## 5. 为什么值得持续关注
OpenRLHF 正在从单一的 PPO/DPO 训练框架向更复杂的 **Agent 训练基础设施** 演进。

1.  **工程化成熟度提升**：今日的 PR 修复（NCCL 变量透传、空目录容错、多进程加载）表明项目正在解决大规模分布式训练中实际的 I/O 瓶颈和环境配置痛点，这对于在生产环境落地 RLHF 至关重要。
2.  **安全性边界探索**：Issue #1210 关于 Agent 执行沙箱的讨论，反映了社区正试图解决 LLM 在 RL 环境中执行代码/工具带来的安全隐患。这是当前 Agent + RL 范式中尚未被标准化的关键一环，OpenRLHF 可能会成为首个系统性地解决此问题的开源框架。

---
*分析师注：建议关注后续 #1210 的解决方案，这可能会定义 OpenRLHF 在 Agentic Workflow 中的安全标准。*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

这里是 **verl** 项目 2026-04-04 的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃，共处理 **17 个 Issues** 和 **29 个 PRs**。核心关注点集中在 **多模态生成 RL 路线图** 的制定与 **vLLM-Omni** 的集成，以及 **Legacy Workers（旧版算子）** 与 **Megatron 引擎** 的深度修复与优化。社区正在积极解决梯度累积中的 Loss 归一化问题，并推进对 NPU（华为昇腾）及大模型（Qwen3.5-122B）的适配。

---

### 2. 版本发布
- **无新版本发布**。

---

### 3. 重点 Issues

#### 📜 战略规划
- **Multi-modal Generation RL 2026Q2 Roadmap**
  - **摘要**：发布了 2026 Q2 的多模态生成 RL 路线图。重点在于增强 **Rollout Engine (vLLM-Omni)**，包括跨请求批处理验证、TP/DP 支持、权重同步及 Mid-curve Rollout 采样。
  - **链接**：[verl-project/verl #5755](https://github.com/verl-project/verl/issues/5755)

#### 🐛 核心缺陷
- **Legacy FSDP 梯度累积中的 Loss 归一化错误**
  - **摘要**：在使用 `token-mean` 模式进行梯度累积时，旧版 FSDP (`dp_actor.py`) 计算的 `loss_scale_factor` 与 `agg_loss` 的局部 token 归一化逻辑不匹配，导致梯度与全批次结果偏离。这是一个影响训练精度的关键问题。
  - **链接**：[verl-project/verl #5625](https://github.com/verl-project/verl/issues/5625)
- **Legacy Megatron Worker Loss 不一致**
  - **摘要**：旧版 Megatron actor worker 中的 Loss 归一化逻辑与现代 Engine Path 不一致，影响训练对齐。
  - **链接**：[verl-project/verl #5863](https://github.com/verl-project/verl/issues/5863)
- **Dynamic Batching 导致 reduce_metrics 崩溃**
  - **摘要**：在 `DP > 1` 且开启 `use_dynamic_bsz=True` 时，旧版 worker 的 micro-batch counts 不同步导致 `reduce_metrics` 报错。
  - **链接**：[verl-project/verl #5421](https://github.com/verl-project/verl/issues/5421)

#### 🛠️ 生态与工程
- **Repo 迁移呼吁**
  - **摘要**：项目已迁移至 `verl-project`，但仍有 91 个文件包含旧的 `volcengine/verl` 路径，社区呼吁贡献者协助批量替换。
  - **链接**：[verl-project/verl #5852](https://github.com/verl-project/verl/issues/5852)
- **Ray 子进程错误处理增强**
  - **摘要**：提议增强 Ray 多进程下的错误报告机制，特别是明确区分 GPU/NPU OOM（显存溢出）与 Host OOM，目前报错定位较模糊。
  - **链接**：[verl-project/verl #5872](https://github.com/verl-project/verl/issues/5872)

---

### 4. 关键 PR 进展

#### 🚀 新功能与算法
- **[FlowGRPO] 支持 Diffusers + FSDP 引擎**
  - **摘要**：为扩散模型 RL 训练集成了 Diffusers 和 FSDP 引擎，并添加了 FlowGRPO 算法。
  - **链接**：[verl-project/verl #5802](https://github.com/verl-project/verl/pull/5802)
- **NVFP4 QAT (Quantization-Aware Training) 支持**
  - **摘要**：在 FSDP 中引入 NVFP4 量化感知训练，支持 RL 训练过程中的 W4A16 权重量化，包含 Triton FP4 fake quantization 实现。
  - **链接**：[verl-project/verl #5190](https://github.com/verl-project/verl/pull/5190)
- **Mindspeedllm NPU 后端支持**
  - **摘要**：增加了针对 NPU（昇腾）的 mindspeedllm 后端引擎支持。
  - **链接**：[verl-project/verl #5680](https://github.com/verl-project/verl/pull/5680)

#### 🛠️ 修复与优化
- **修复 Legacy FSDP Loss 归一化**
  - **摘要**：针对 Issue #5625，修正了 `dp_actor.py` 在 `token-mean` 模式下的 loss 缩放因子计算逻辑。
  - **链接**：[verl-project/verl #5877](https://github.com/verl-project/verl/pull/5877)
- **修复 Dynamic Context Parallel (DCP) 逻辑**
  - **摘要**：重写了 Megatron 引擎中的 DCP batch 切分逻辑，修复了序列数少于 dp_size 时 CP 失效及 loss 归一化错误。
  - **链接**：[verl-project/verl #5869](https://github.com/verl-project/verl/pull/5869)
- **优化 FSDP 性能**
  - **摘要**：跳过了 `offload` 禁用时的冗余 `to(cuda)` 和 `gc.collect` 调用，减少 FSDP 模块树遍历带来的开销。
  - **链接**：[verl-project/verl #5753](https://github.com/verl-project/verl/pull/5753)

#### 🏗️ 大模型支持
- **Qwen3.5-122B Megatron 启动脚本**
  - **摘要**：成功在 32 张 H20 GPU 上使用 mbridge 跑通 Qwen3.5-122B GRPO 训练。
  - **链接**：[verl-project/verl #5874](https://github.com/verl-project/verl/pull/5874)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **多模态 RL 的前沿推进**：通过明确的 **vLLM-Omni** 集成路线图，verl 正在系统性地解决多模态生成模型（如 VLM）的 RL 训练难点（如跨请求批处理、权重同步），这是目前开源社区稀缺的基础设施。
2.  **对超大模型与异构硬件的强支持**：从 **Qwen3.5-122B** 的落地到 **NPU (Ascend)** 的深度适配（包括文档和算子修复），verl 展现了极强的工程落地能力，不仅限于 NVIDIA 生态，也覆盖了国产硬件的特殊优化需求。
3.  **训练精度与稳定性的严谨态度**：社区近期集中修复了 Legacy 路径下的 **Loss 归一化**、**梯度累积** 以及 **Dynamic Batching** 的同步问题。这表明项目不仅追求功能迭代，更在深挖训练底层的数学一致性和数值稳定性，对于严肃的 RL 研究和生产环境至关重要。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 日报摘要 (2026-04-04)

## 1. 今日速览
过去 24 小时，torchtune 仓库处于低活跃度维护状态。无新版本发布，无新增 Issues。仅有一项关键的修复 PR 被合并，主要解决上游依赖库 `torchao` API 变更导致的兼容性问题。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无新增**：过去 24 小时内社区未提交新的 Issue。

## 4. 关键 PR 进展
*   **[#2958 [CLOSED] 修复 TensorCoreTiledLayout 移除后的 ImportError](https://github.com/pytorch/torchtune/pull/2958)**
    *   **作者**: jerryzh168
    *   **详情**: 该 PR 解决了因上游 `torchao` 删除 `TensorCoreTiledLayout` 而引发的 `torchtune` 导入错误。
    *   **技术细节**: 代码层面将 `Int4WeightOnlyQuantizer` 中的布局引用替换为 `Int4PackingFormat.TILE_PACKED_TO_4D`，以适配 `torchao` 的最新变更 (对应 torchao PR #4153)，确保 INT4 量化功能的正常运行。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新频率较低，但 **torchtune** 依然是 PyTorch 生态中进行大模型微调的核心组件，特别是针对 Llama 等主流架构的 RLHF（Reinforcement Learning from Human Feedback）流程：

1.  **紧密的上游追踪与集成**：今日的 PR #2958 表明该项目与底层优化库保持高度同步。对于 RL 从业者而言，这意味着在使用最新的量化技术（如 INT4）进行策略网络或奖励模型微调时，能够获得开箱即用的性能优化和稳定性，避免了底层 API 变动导致的训练中断。
2.  **生产级 RLHF 支持**：作为 PyTorch 官方维护的库，torchtune 提供了经过严格测试的配方，是构建稳定 RL 训练管道的可靠基石。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-04-04)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库无明显 Issues 动态或版本发布，但 **PR 活跃度显著**（共 9 条更新）。开发重心高度集中在 **GRPO（Group Relative Policy Optimization）算法的工程化落地**，涉及性能优化（`grpo_fast`）、多模态支持（Qwen3.5 VLM）以及 RL 环境（Sandbox & Replay Buffer）的扩展。这表明项目正处于从算法验证向大规模稳定训练和多样化应用过渡的关键阶段。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **无新增或更新 Issues**。

## 4. 关键 PR 进展

### A. GRPO 核心算法与性能优化
- **[OPEN] #1553 Priority local eval queue for grpo_fast**
  - **核心改动**：从 `smolzero` 移植专用 Ray 队列和 vLLM 预取逻辑，解决评估任务在训练积压下的“饥饿”问题。
  - **意义**：显著提升训练期间的评估实时性，优化吞吐量。
  - **链接**：[allenai/open-instruct PR #1553](https://github.com/allenai/open-instruct/pull/1553)

- **[OPEN] #1586 grpo_fast: harden single-node startup resource checks and diagnostics**
  - **核心改动**：增加启动前的资源规划模块，对 Ray 可见的 CPU/GPU 进行预检，避免无限挂起。
  - **意义**：增强了单节点训练的鲁棒性，提供可操作的报错信息，降低调试成本。
  - **链接**：[allenai/open-instruct PR #1586](https://github.com/allenai/open-instruct/pull/1586)

- **[OPEN] #1587 Stabilize GRPO LLM judge calls**
  - **核心改动**：将 `LMJudgeVerifier` 路由通过受信号量保护的 LiteLLM 异步路径，统一重试与成本核算逻辑。
  - **意义**：修复了直接调用 `litellm.acompletion` 可能导致的稳定性问题，强化基于 LLM 的奖励模型/评判器的可靠性。
  - **链接**：[allenai/open-instruct PR #1587](https://github.com/allenai/open-instruct/pull/1587)

- **[CLOSED] #1578 Refactor GRPO**
  - **核心改动**：重命名配置类，并将部分工具函数（如 `mask_logprobs`）内联到核心代码中。
  - **意义**：代码清理，减少抽象层带来的开销。
  - **链接**：[allenai/open-instruct PR #1578](https://github.com/allenai/open-instruct/pull/1578)

### B. 多模态与新模型支持
- **[OPEN] #1568 Qwen3.5 vlm support**
  - **核心改动**：适配 Qwen3.5 视觉语言模型。解决 FA3 兼容性问题（默认回退 SPDA），通过 Monkey-patch 修复 Transformers v5.4.0 与 vLLM 的验证冲突。
  - **意义**：紧跟 SOTA 开源模型，扩展了项目在多模态 RL 领域的能力。
  - **链接**：[allenai/open-instruct PR #1568](https://github.com/allenai/open-instruct/pull/1568)

### C. RL 基础设施与环境
- **[OPEN] #1492 Add SWERLSandboxEnv**
  - **核心改动**：新增 `SWERLSandboxEnv`，扩展 `GenericSandboxEnv`，支持在 Docker 容器内运行基于 `submit` 的测试套件。
  - **意义**：为代码生成任务提供了更安全、隔离的 RL 交互环境，是通往高复杂度 Agent 训练的重要一步。
  - **链接**：[allenai/open-instruct PR #1492](https://github.com/allenai/open-instruct/pull/1492)

- **[OPEN] #1583 Changes `DataPreparationActor` to replay buffer**
  - **核心改动**：受 DeepMind Reverb 启发，将数据准备组件配置化为回放缓冲区。
  - **意义**：引入经典 RL 数据管理范式，可能旨在支持 Off-policy 或更复杂的数据采样策略。
  - **链接**：[allenai/open-instruct PR #1583](https://github.com/allenai/open-instruct/pull/1583)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 正在从一个单纯的指令微调工具包演进为 **全栈式的 LLM 强化学习框架**。
1.  **解决规模化痛点**：PR #1553 和 #1586 表明团队正在死磕 GRPO 算法在大规模分布式环境下的**调度与资源死锁问题**，这是许多开源项目回避的工程深水区。
2.  **对齐前沿 SOTA**：迅速跟进 **Qwen3.5 VLM** 的支持，证明其具备快速迭代多模态 RL 能力。
3.  **环境与数据闭环**：通过引入 `SWERLSandboxEnv` 和 Replay Buffer 机制，项目正在补齐 Agent 训练中“环境交互”和“数据回放”的关键拼图，不再局限于静态数据的 PPO/DPO 训练。

对于希望进行**大规模 LLM 后训练**或**复杂 Agent RL 研究**的开发者，Open Instruct 提供了比许多纯学术库更健壮的工程底座。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报：2026-04-04

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体趋于平稳，无代码合并或版本发布。唯一动态集中在历史遗留的算法超参数一致性问题上，一条关于 Atari 实现 Epsilon 策略的 Issue 出现了新的讨论。

- **Issues 更新**: 1 条
- **PR 更新**: 0 条
- **Releases**: 0 个

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
**[#429 [BUG] Atari 实现中最终 Epsilon 与评估 Epsilon 不一致](https://github.com/vwxyzjn/cleanrl/issues/429)**

*   **状态**: Open
*   **作者**: pseudo-rnd-thoughts
*   **摘要**: 该 Issue 指出 CleanRL 中的 Atari Q-learning 系列实现（涵盖 DQN, C51, QDAgger DQN，包括 Jax 和 PyTorch 版本）存在超参数逻辑瑕疵。
    *   **核心问题**: 训练过程使用的 `final_epsilon`（示例中为 0.01）与评估/策略推断阶段隐含的 Epsilon 值可能存在定义上的冲突或混淆。
    *   **影响范围**: 涉及核心算法的探索/利用平衡逻辑，可能影响复现结果的基准一致性。
*   **动向**: 该 Issue 创建于 2023 年，于昨日（2026-04-03）再次被激活，表明社区持续关注算法实现的严谨性细节。

## 4. 关键 PR 进展
过去 24 小时无活跃的 Pull Request。

## 5. 为什么值得持续关注
尽管今日更新频率较低，CleanRL 依然是当前 RL 生态中不可或缺的基础设施：

1.  **算法实现的“基准源”**: 正如 Issue #429 所示，项目对代码逻辑的审查极其严格，对超参数（如 Epsilon decay）的考证直接关系到算法复现的准确性。
2.  **极致的可读性与单文件原则**: CleanRL 坚持将算法逻辑集中在单个文件中，避免了复杂的继承和封装，是研究人员快速学习 RL 核心逻辑（如 Jax/PyTorch 的底层交互）的最佳范例。
3.  **生态兼容性**: 项目紧跟前沿技术栈（如 JAX），是连接传统 PyTorch 开发者与新兴 JAX 生态的重要桥梁。

---
*分析师注：建议关注 Issue #429 的后续进展，若修复将涉及多处 Atari 算法文件的改动。*

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

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

# RL 日报：Stable Baselines3 (SB3) 生态追踪
**日期**：2026-04-04
**数据源**：github.com/DLR-RM/stable-baselines3

## 1. 今日速览
SB3 仓库在过去 24 小时内整体较为平静，无新发版及新 Issue 产生。主要动态集中在现有 PR 的推进上，社区成员正在尝试引入 PyTorch 2.x 的编译特性以优化推理及训练速度。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日仅有 1 个活跃 PR，涉及性能优化，具有较高的技术关注度。

*   **[OPEN] #2234 Added example for torch.compile**
    *   **作者**: sdace9719
    *   **链接**: [DLR-RM/stable-baselines3 PR #2234](https://github.com/DLR-RM/stable-baselines3/pull/2234)
    *   **技术摘要**:
        *   **目标**: 该 PR 旨在引入 `torch.compile` 的使用示例，以利用 PyTorch 2.0+ 的图编译特性获取性能增益。
        *   **关联**: 旨在解决 Issue #156（关于 SB3 对 PyTorch 编译模式的支持/兼容性）。
        *   **进展**: PR 创建于 3 月 28 日，于昨日（4 月 3 日）更新。目前状态为 OPEN，尚在审核/讨论中。
        *   **生态意义**: 若合并，将标志着 SB3 正式接纳 PyTorch 2.x 的工作流，对追求高吞吐量的 RL 实验具有重要意义。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新频率较低，但 **PR #2234** 传递了一个明确的信号：SB3 正在从底层适配 PyTorch 2.x 的 `torch.compile` 技术。

1.  **性能瓶颈突破**: 传统的 RL 训练常受限于 Python 解释器开销。`torch.compile` 能够将模型计算图融合并优化，对于 On-policy 算法（如 PPO, A2C）的采样和训练循环可能带来显著的加速比。
2.  **工业级标准的演进**: SB3 一直是 RL 入门和基线测试的“事实标准”。它对 `torch.compile` 的支持进度，反映了整个开源 RL 生态从 PyTorch 1.x 向 2.x 迁移的成熟度。
3.  **向后兼容性**: 该 PR 目前以添加 "Example" 为主，暗示项目方可能在探索不破坏现有 API 的前提下，通过可选参数或特定配置来启用新特性，这对存量代码非常友好。

</details>