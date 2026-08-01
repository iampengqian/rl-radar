# RL 开源生态日报 2026-08-02

> 生成时间: 2026-08-01 22:17 UTC | 覆盖项目: 15 个

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
当前 RL（强化学习）开源生态呈现出显著的“两极化”与“分层化”特征。第一极是**面向大语言模型（LLM）及多模态（VLM）对齐的 RLHF 框架**（如 verl, TRL, AReaL, ROLL），它们正全面转向超大规模分布式训练与算力极限优化；第二极是**传统单智能体/多智能体环境与基础库**（如 Gymnasium, PettingZoo），这些项目已进入维护期或细粒度打磨期。今日的社区核心驱动力已从“新算法实现”彻底转移至“集群级系统容错”与“前沿模型（如 DeepSeek V4, Qwen3-VL）的底层算子适配”。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 16 | 10 | 0 | 朝超大规模底层 RL 基础设施演进，死磕前沿大模型算子适配与 Agent 闭环。 |
| **TRL** | 4 | 21 | 0 | 开发热度极高，重构核心训练器，重拳出击通信与显存瓶颈，打通多模态异步 RL。 |
| **PettingZoo** | 7 | 8 | 0 | 聚焦 MARL 标准化接口的工程化打磨与 3D 物理引擎环境的API接入。 |
| **AReaL** | 2 | 5 | 0 | 深耕千亿参数级 RLHF 场景下的进程生命周期管理与显存调度护城河。 |
| **Gymnasium** | 1 | 6 | 0 | 强化底层 API 边界校验，通过众包模式提升文档的视觉专业度与认知门槛。 |
| **torchtune** | 0 | 5 | 0 | 务实解决大模型微调工程痛点，高频修复 RLHF/DPO 底层阻断性 Bug。 |
| **ROLL** | 0 | 1 | 0 | 紧盯复杂分布式训练框架的依赖敏捷性与环境健壮性。 |
| *其他项目* | *-* | *-* | *-* | *(CleanRL, OpenRLHF, SB3 等 8 个项目过去 24h 无活动)* |

## 共同关注的研究与工程方向

**研究侧信号：**
- **多模态 Agent 训练闭环：** 文本、视觉与多轮工具调用的混合训练成为刚需。verl 引入多模态连续 Token，TRL 推进纯文本与 VLM 的异步 GRPO 支持，均表明 RL 训练已不再局限于纯文本对齐。
- **RL 与知识蒸馏的深度融合：** TRL 正将 DistillationTrainer 与 GRPO 底层深度对齐，verl 也在排查黑盒蒸馏场景的性能。基于奖励驱动结合 Teacher-Student 模型的复合优化算法正成为前沿研究方向。

**工程/基础设施侧信号：**
- **“寸土必争”的显存与通信极致优化：** 大规模 RL 训练的阿喀琉斯之踵正在被攻克。无论是 TRL 引入激活卸载和 LoRA 增量同步，还是 torchtune 跳过无效的梯度缩放，均体现了对 GPU I/O 和显存吞吐的极限压榨。
- **超大规模集群下的稳定性与确定性：** 面对 MoE 架构和千卡规模，底层系统容错成为重中之重。AReaL 修复显存释放导致的孤儿进程，verl 追踪死锁隐患和 MoE 路由覆盖 Bug，以及引入严格的 Megatron 确定性算法，都反映出工业级框架对计算流与数据流绝对对齐的追求。

## 差异化定位分析
- **verl**：**“重型作战平台”**。以极快的工程响应速度适配最新 SOTA 模型（如 DeepSeek V4 / GPT-OSS）的底层 Attention 切分与 FP8 算子。定位是百卡/千卡级的硬核 RL 基础设施，适合需要从头训练或微调超大模型的基础大模型团队。
- **TRL (HuggingFace)**：**“标准件库与试验田”**。拥有最高的 PR 活跃度，主打低门槛接入与前沿工程最佳实践（如 vLLM 适配、异步架构）。其重构意在实现 RL 与蒸馏的无缝切换，定位是算法工程师快速复现和迭代对齐方案的首选工具。
- **AReaL**：**“系统级护城河”**。开发极度下沉，直接聚焦于 `torch-memory-saver`、资源 teardown 竞态、底层权重版本对齐等“脏活累活”。定位是解决千亿参数模型 RLHF 训练中极高要求的资源调度与容错痛点。
- **torchtune / ROLL**：**“务实微调与组件支撑”**。torchtune 专注扫除中小规模微调（DPO/RLHF 流水线）的底层阻断 Bug；ROLL 则作为大集群分布式组件，强调环境依赖的健壮性。
- **PettingZoo / Gymnasium**：**“经典生态基石”**。已完全脱离大模型主战场，专注于经典控制、MARL 以及物理仿真环境（如 UE4）的标准 API 定义与文档健壮性维护，服务于传统强化学习与机器人/智能体研究。

## 社区热度与成熟度
当前活跃项目均进入了**“高维护成本、低基础 Bug 率”**的成熟期，Issue 和 PR 质量极高。TRL 和 verl 代表了当前社区的最高热度焦点。值得注意的是，开源社区展现了高度健康的协作模式：例如 Gymnasium 发起的“真实策略 GIF 替换”任务引发了众包开发热潮；TRL 对 VLM 纯文本训练导致的 DDP 崩溃问题做到了 PR 当日响应修复；verl 与 AReaL 的开发者正在极速清理那些在复杂 RL 范式下极难察觉的微观竞态与数据隔离 Bug。

## 值得关注的趋势信号
- **“并行范式”决定框架生死：** 能否深度适配并支撑 MoE 架构的专家并行（EP）、上下文并行（CP）、以及流水线并行（PP），正在成为 RLHF 框架的分水岭（如 verl 的大规模 Megatron 适配）。不支持高级并行的框架将被逐渐边缘化。
- **Tokenizer 与底层引擎的一致性危机：** 随着模型迭代（Qwen3, Gemma 等），Tokenizer 的 EOS 掩码行为、推理模式差异频频导致 RL 奖励计算异常甚至模型不收敛（如 torchtune 修复的 Qwen EOS 掩码 Bug）。这暗示着大模型工程链路中“ tokenizer-模型-推理引擎-训练框架”的端到端对齐仍存在脆弱点。
- **Agent 级别的状态隔离逐渐刚性需求：** 在线 GRPO 等算法对轨迹和优势计算的准确性要求，倒逼框架（如 AReaL 引入 Session 分组隔离）必须在异步并发的高压下，严格保证多轮对话和工具调用状态的上下文隔离。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是 2026-08-02 ROLL（github.com/alibaba/ROLL）RL 开源生态日报摘要：

### 1. 今日速览
过去 24 小时，ROLL 仓库整体活动平稳。无新增 Issue，无新版本发布。核心开发进展集中在底层依赖环境的修复，贡献者提交了一项关键 PR，旨在解决因第三方依赖冲突导致 Ray 环境不可用的问题。

### 2. 版本发布
*   **今日无新版本发布**。

### 3. 重点 Issues
*   **今日无新增或更新的 Issue**。

### 4. 关键 PR 进展
*   **#477 [OPEN] fix: pin click<8.2 to unbreak ray CLIPatch 1**
    *   **作者**: [XiangyiWang2](https://github.com/XiangyiWang2)
    *   **背景与修复**: 解决了一个破坏性的环境依赖问题。在依照 `requirements_torch280_vllm.txt` 进行全新安装后，由于基础配置 `requirements_common.txt` 锁定了 `ray==2.48.0` 但未限制 `click` 的版本，高版本的 `click` 会导致 Ray CLI 在导入阶段直接崩溃（报错 `ValueError: <object object at ...> is not a valid Sentinel`）。
    *   **技术动作**: 通过强制锁定 `click<8.2` 来恢复 Ray CLI 的正常运行。
    *   **链接**: [alibaba/ROLL PR #477](https://github.com/alibaba/ROLL/pull/477)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **超大规模 RLHF 的工程化落地**: 大模型时代，强化学习（RL）的核心痛点已从算法理论转向分布式系统工程。ROLL 深度整合了 Ray 和 vLLM，代表了当前业界解决超大规模 LLM 强化学习训练（如 RLHF/RLAIF）的工程标杆。
*   **依赖敏捷性与环境健壮性**: 今天的 PR #477 清晰地反映出该项目对“底层组件版本漂移”（如 Ray、vLLM、Click 等高频更新的库）的极高敏感度。ROLL 开发团队对这类破坏性环境 Bug 的快速响应，证明了其在维持复杂分布式 RL 训练框架稳定性方面的工程严谨性。这对于追求高可用训练集群的 RL 研究者和工程师而言，是不可或缺的关注价值点。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-08-02)**

以下是 AReaL (github.com/inclusionAI/AReaL) 过去 24 小时的项目动态摘要。

### 1. 今日速览
过去 24 小时内，AReaL 代码仓库共有 7 项动态更新，包含 2 个 Issue 更新与 5 个 PR 更新，无新版本 Release 发布。今日的活动焦点高度集中在**系统底层的稳定性与资源管理**上，包括 v2 架构的 Teardown（销毁）竞态修复、显存管理冲突解决、以及 Megatron 确定性算法的完善。

### 2. 版本发布
* **无新版本发布** (近期 Release 记录为空)。

### 3. 重点 Issues
今日暴露的两个 Bug 均涉及底层资源调度与显存管理的边界条件，反映了大规模 RLHF 训练框架在容错与进程管理上的复杂性：

* **[BUG] LocalScheduler 的 `stdbuf` 注入破坏 TMS 卸载** ([Issue #1570](https://github.com/areal-project/AReaL/issues/1570))
  * **作者**: YAO-001
  * **摘要**: 在使用 LocalSchedule 路径时，系统会向 `TMS LD_PRELOAD` 追加 `libstdbuf`。这种注入行为意外导致了 offload 机制的崩溃。报告者已确认移除该注入即可恢复正常，属于典型的进程启动与环境变量冲突问题。
* **[BUG] TMS CUDA free 错误导致 Teardown 阶段遗留孤儿进程** ([Issue #1565](https://github.com/areal-project/AReaL/issues/1565))
  * **作者**: wm19999
  * **摘要**: 当 `torch-memory-saver` (TMS) 在释放 CUDA 显存时发生错误，原生 teardown 流程无法正常清理。这会导致训练结束后残留孤儿进程，占用系统资源。

### 4. 关键 PR 进展
今日的 PR 活动主要针对上述 Issues 提供修复方案，并完善了训练引擎的细节机制：

* **修复 v2 Teardown 竞态与资源释放** ([PR #1571](https://github.com/areal-project/AReaL/pull/1571))
  * **作者**: YAO-001
  * **进展**: 针对 [Issue #1565](https://github.com/areal-project/AReaL/issues/1565) 提出的孤儿进程问题。该 PR 确保在 FSDP 引擎 teardown 前，先恢复处于 paused 状态的 TMS 内存分配，并使用有界监控器防止 fork 出来的服务进程生命周期超出 Controller 管辖范围。
* **修复 Rollout 生成期间的权重版本错位** ([PR #1569](https://github.com/areal-project/AReaL/pull/1569) - **已关闭**)
  * **作者**: Le8r0nJames
  * **摘要**: 修复了 `RemoteInfEngine.agenerate` 在构建请求和记录 `output_versions` 之间读取了两次权重版本的漏洞。避免了在请求期间发生权重更新时，Token 被打上错误版本标签的 Bug。
* **补全 Megatron 确定性模式缺陷** ([PR #1544](https://github.com/areal-project/AReaL/pull/1544))
  * **作者**: Le8r0nJames
  * **摘要**: 指出原有代码在模型构建后才应用 `use_deterministic_algorithms=True`，导致 `VocabParallelEmbedding` 等组件未能在初始化时拷贝确定性设置。该 PR 将该标志的生效时机提前至模型构建之前，确保严格的确定性训练。
* **修复在线 GRPO 的 Session 分组隔离问题** ([PR #1392](https://github.com/areal-project/AReaL/pull/1392))
  * **作者**: Oxygen56
  * **摘要**: 修复了在 `group_size > 1` 的在线强化学习模式下，不相关的用户对话被错误合并进同一组，导致 GRPO 优势归一化计算静默出错的问题。通过在 `StartSessionRequest` 中引入 `group_id` 进行严格隔离。
* **优化静态类型检查 (LSP) 兼容性** ([PR #1542](https://github.com/areal-project/AReaL/pull/1542))
  * **作者**: nil0x9
  * **摘要**: 重构了 `__init__.py` 中基于 `__getattr__` 的懒加载机制（针对各类 Trainer），添加了 `TYPE_CHECKING` 守卫，使得 Pyright/Pylance 等静态分析工具能够正确识别这些类，提升开发者体验。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 作为一个工业级强化学习框架，其当前的开发动向精准击中了大规模 LLM 训练的痛点：
1. **深耕显存与资源调度**：今日密集的 PR 与 Issue 集中在 `torch-memory-saver`、`offload`、`teardown` 等机制上。在千亿参数模型 RLHF 场景下，如何避免 OOM 并在异常发生时安全清理 GPU 资源是最高优先级的工程挑战，AReaL 正在积极完善这一护城河。
2. **关注算法与工程的强一致性**：PR #1569 对权重版本管理的细粒度修复，以及 PR #1392 对在线 GRPO 优势计算的分组隔离，体现了项目对“数据流-计算流对齐”的极致追求。这类微观 Bug 在复杂 RL 范式中极难察觉，框架级的修复具有很高的生态参考价值。
3. **对齐前沿训练引擎标准**：PR #1544 对 Megatron 确定性算法的修复，说明 AReaL 在底层深度适配并调优了 3D 并行框架，而非仅仅停留在 API 封装层面，具备支持高精度、可复现的科研与工业生产场景的能力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL（huggingface/trl）强化学习生态项目 2026-08-02 日报摘要：

### 1. 今日速览
- **Issue 活跃度**：共 4 条 Issue 更新（1 个新发，3 个历史更新）。
- **PR 活跃度**：共 21 条 PR 更新，开发热度极高。核心聚焦于 **DistillationTrainer（蒸馏训练器）的大规模底层重构**、**显存与通信优化（Activation Offloading）** 以及 **异步 GRPO 与 VLM（视觉大模型）的兼容性修复**。
- **版本发布**：过去 24 小时无新版本发布（0 个）。

---

### 2. 版本发布
无。

---

### 3. 重点 Issues
今日的 Issue 集中暴露了当前大模型训练中的一些边角痛点，尤其是在多模态和分布式训练场景下：

- **[#6617] [Bug] VLM 在纯文本数据集上训练导致 DDP 崩溃与显存浪费** (创建于 2026-08-01)
  当使用纯文本数据集训练视觉语言模型（VLM）时，由于视觉塔参数未参与 Loss 计算却被加载，在多卡环境下触发 DDP（分布式数据并行）同步报错，单卡下也会无意义消耗显存。
  *链接: [huggingface/trl Issue #6617](https://github.com/huggingface/trl/issues/6617)*

- **[#3717] [enhancement] 为 DPO 和 GRPO 增加激活检查点** (更新于 2026-08-01)
  社区呼吁将目前仅用于 SFT 的 Activation Checkpointing（激活检查点）机制扩展到 DPO 和 GRPO 训练器，以缓解 RLHF 阶段的显存压力。
  *链接: [huggingface/trl Issue #3717](https://github.com/huggingface/trl/issues/3717)*

- **[#4631] [Bug] DeepSpeed ZeRO-2 结合 Qwen3-VL MoE 训练不稳定** (更新于 2026-08-01)
  报告指出在使用 GRPOTrainer 训练 Qwen3-VL MoE 架构时，DeepSpeed ZeRO-2 相比原生 Accelerate 表现出明显的奖励（Reward）下降和性能退化。
  *链接: [huggingface/trl Issue #4631](https://github.com/huggingface/trl/issues/4631)*

---

### 4. 关键 PR 进展
今日的 PR 活动呈现高度的技术聚焦，主要分为三大阵列：

**阵营一：VLM 纯文本训练与 GRPO 异步化支持**
- **[PR #6618] 修复纯文本训练时的 VLM 未使用参数问题**
  快速响应了 Issue #6617，使得在纯文本数据集中，自动冻结 Language Model 之外的参数，避免 DDP 报错并节省优化器状态显存。
  *链接: [huggingface/trl PR #6618](https://github.com/huggingface/trl/pull/6618)*
- **[PR #6515] 异步 GRPO 视觉语言模型（图像）端到端支持**
  赋予 `AsyncGRPOTrainer` 训练 VLM 的能力，填补了异步在线 RL 架构下多模态支持的空白。
  *链接: [huggingface/trl PR #6515](https://github.com/huggingface/trl/pull/6515)*

**阵营二：RL 核心训练效率优化**
- **[PR #6615] 为 GRPO 和 RLOO 引入激活卸载**
  彻底解决了 Issue #3717 的诉求，为 GRPO 和 RLOO 加入了可选的 Activation Offloading 功能，进一步榨干 GPU 显存极限以支持更大 batch size。
  *链接: [huggingface/trl PR #6615](https://github.com/huggingface/trl/pull/6615)*
- **[PR #6007] vLLM 适配器专属 LoRA 同步：零配置自动检测**
  针对在线 RL 场景，使用 PEFT LoRA 训练时，不再将 Adapter 合并回基底模型传输全量权重，而是仅同步 LoRA Adapter。大幅降低通信开销。
  *链接: [huggingface/trl PR #6007](https://github.com/huggingface/trl/pull/6007)*
- **[PR #6237] 在 SDFT 中引入 DOPD 优势间隔路由**
  将双策略在线蒸馏（DOPD）直接集成到现有的 SDFTTrainer 中，探索蒸馏与 RL 结合的前沿算法。
  *链接: [huggingface/trl PR #6237](https://github.com/huggingface/trl/pull/6237)*

**阵营三：DistillationTrainer 史诗级重构（超 10+ PR 推进）**
由开发者 `qgallouedec` 主导，正以每日高频的进度将 DistillationTrainer 的代码结构、损失函数（如引入内存高效的 Chunked JSD Loss）、日志系统全方位向 GRPOTrainer 对齐。此系列重构（包含 PR #6605 至 #6614 等）极大地提升了代码复用率和后续的可维护性。
*代表链接: [huggingface/trl PR #6530](https://github.com/huggingface/trl/pull/6530)*

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **对底层硬件瓶颈的强执行力**：从引入 Activation Offloading 到 LoRA 权重增量同步，TRL 正在精准打击 RLHF 训练中“通信阻塞大、显存吞吐低”的阿喀琉斯之踵。
2. **前沿工程架构的快速沉淀**：异步 GRPO（`AsyncGRPOTrainer`）结合 vLLM 的工程实践，以及原生 VLM（多模态）的 RL 训练路径支持，证明 TRL 不仅是算法的合集，更是大模型前沿工程最佳实践的“试验田”与“标准件库”。
3. **从 RLHF 到蒸馏的统一**：当前密集的 DistillationTrainer 重构表明，HuggingFace 正在致力于将强化学习（GRPO）与知识蒸馏（Distillation）的底层代码深度对齐。未来开发者将能以极低的代码迁移成本，在 RL 奖励驱动和 Teacher-Student 蒸馏模式之间自由切换。

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

### verl RL 日报摘要 (2026-08-02)

#### 1. 今日速览
过去 24 小时内，verl 项目维持了高度活跃的开发与问题排查节奏。共计处理 **16 条 Issues** 和 **10 条 PRs**。今日的更新焦点集中在**多模态 Agent 训练**、**超大规模集群（DeepSeek V4 / Nemotron）的底层算子与并行策略适配**，以及**算力效率优化（如蒸馏与奖励模型重构）**。

#### 2. 版本发布
- **无新版本发布**。主分支 `main` 持续高频迭代中。

#### 3. 重点 Issues
- **[训练加速与重构] [RFC] Refactor Reward Components**
  社区正积极推进重构奖励计算组件，计划弃用 `Batch Reward Manager`，以解决目前奖励计算在单控制器上以低效串行方式占用资源的问题。([verl Issue #5158](https://github.com/volcengine/verl/issues/5158))
- **[框架升级] Update Transformers to v5**
  正在讨论将 `transformers` 依赖从 4.x 升级至最新的 v5.0.0，以适配生态中的破坏性更新。([verl Issue #5080](https://github.com/volcengine/verl/issues/5080))
- **[性能排查] PPO training so slow (黑盒蒸馏场景)**
  开发者反馈在 Qwen3-VL 训练中应用黑盒蒸馏时遭遇严重的性能瓶颈，正在排查 Actor/Critic 为 2B 模型时的配置问题。([verl Issue #5111](https://github.com/volcengine/verl/issues/5111))
- **[集群稳定性] Program hang after random number of runs**
  报告了训练期间程序在 rollout 阶段无报错随机挂起的死锁隐患，这对长时间大规模 RL 训练是致命问题，亟待定位。([verl Issue #7180](https://github.com/volcengine/verl/issues/7180))

#### 4. 关键 PR 进展
- **多模态 Agent 循环支持**：为 AgentLoop 引入多模态连续 Token (`VLContinuousTokenBuilder`)，解决了文本与多模态信息混合编码的难题。([verl PR #6804](https://github.com/volcengine/verl/pull/6804))
- **DeepSeek V4 / GPT-OSS 底层算子优化**：
  - 为 DeepSeek V4 适配 Megatron 后端的 `contiguous` 上下文并行 (CP) 序列布局，满足其特殊的 Attention 切分需求。([verl PR #7221](https://github.com/volcengine/verl/pull/7221))
  - 修复了 vLLM 中 DeepSeek V4 的 FP8/FP4 线性与 MoE 权重同步及量化代码冲突。([verl PR #7224](https://github.com/volcengine/verl/pull/7224))
  - 修复了 Veomni 框架下 gpt-oss 的 EP 专家传输错误。([verl PR #7195](https://github.com/volcengine/verl/pull/7195))
- **多轮训练 MoE 路由修复**：修复了多轮完全异步训练中，`routed_experts` 被最新权重覆盖导致前序轮次状态丢失的 Bug。([verl PR #7222](https://github.com/volcengine/verl/pull/7222))
- **大规模 Megatron 训练提效**：为 `delta_sharded` 检查点引擎添加了流水线并行 (PP/VPP) 支持，解除此前 `PP=1` 的硬编码限制。([verl PR #7223](https://github.com/volcengine/verl/pull/7223))

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在突破早期“开箱即用算法demo”的局限，向**百卡/千卡级超大规模底层 RL 基础设施**演进。从今日的 PR 走向可以看出：
1. **硬核工程适配**：项目组在以极高的响应速度跟进最新大模型（如 DeepSeek V4、Nemotron 3、GPT-OSS）的底层算子（FP8/MTP/CP 切分）适配，这是多数学术级 RL 框架无法做到的。
2. **复杂 Agent 训练闭环**：通过 `AgentLoop` 和 `ContinuousToken` 深度整合多模态与多轮工具调用，正成为构建高阶 Inference/Agent 模型的刚需底座。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**torchtune RL 生态日报 (2026-08-02)**

以下是过去 24 小时内 `pytorch/torchtune` 仓库的动态更新摘要。

### 1. 今日速览
- **Issues 更新**: 0 条
- **PR 更新**: 5 条
- **新版本发布**: 0 个
- **整体态势**: 今日无新 Issue 提交与版本发布。PR 活动主要以修复不同大模型（Gemma, Qwen）的 Tokenizer 缺陷、修补安全漏洞、以及优化底层训练计算性能为主。值得注意的是，DPO（直接偏好优化）相关的 RL 核心代码在今天有一项关键阻断性修复。

### 2. 版本发布
无。当前仓库未在过去 24 小时内发布新的 Release。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issue 讨论记录。

### 4. 关键 PR 进展
今日共有 5 个处于 OPEN 状态的 PR 发生了更新，涵盖性能优化、安全加固、Tokenizer 修复及 RL 底层代码修正：

- **[RL/核心修复] fix: NameError in torchtune rlhf/loss/dpo.py** (作者: wjh70301-meta)
  - **链接**: [PR #2966](https://github.com/pytorch/torchtune/pull/2966)
  - **摘要**: 修复了 `rlhf/loss/dpo.py` 中缺少 `dataclass` 和 `TypeVar` 导入的问题。该缺陷会在导入阶段引发 `NameError`，直接阻断所有导入 `DPOLoss` 的 Mitra DPO 单元测试及 RL 训练流程。

- **[训练性能优化] perf(recipes): skip scale_grads when gradient_accumulation_steps == 1** (作者: n-dlms)
  - **链接**: [PR #2980](https://github.com/pytorch/torchtune/pull/2980)
  - **摘要**: 提出在梯度累积步数为 1 时，跳过 `training.scale_grads` 操作。此举可避免对模型参数进行无效的读写遍历，对于 8B 参数级别的 bf16 模型，单次即可节省约 32GB 的内存读写开销，显著提升大模型微调效率。

- **[安全加固] fix(security): restrict recipe _component_ imports to trusted roots** (作者: Solaris-star)
  - **链接**: [PR #2973](https://github.com/pytorch/torchtune/pull/2973)
  - **摘要**: 修复了 Recipe 配置文件通过 `import_module` 解析 `_component_` 时的任意代码执行漏洞。原先加载不受信任的 YAML 文件可能会触发 `os.system` 等危险调用，此 PR 将模块导入限制在可信白名单内。

- **[Tokenizer 修复] fix: respect Gemma tokenizer inference mode** (作者: oflacode)
  - **链接**: [PR #2969](https://github.com/pytorch/torchtune/pull/2969)
  - **摘要**: 修复了 Gemma Tokenizer 在推理模式下未能正确处理 EOS (End of Sequence) 的问题。

- **[Tokenizer 修复] Fix: Qwen tokenizers mask trained EOS out of loss** (作者: yushuosun)
  - **链接**: [PR #2967](https://github.com/pytorch/torchtune/pull/2967)
  - **摘要**: 修复了 Qwen2/2.5/3 Tokenizer 在设置 `max_seq_len` 时，错误地将尾部 EOS token 从 Loss 计算中 mask 掉的问题。该 Bug 会导致模型无法学习何时停止生成文本。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日的代码提交可以看出，torchtune 正在极其务实地解决大模型微调（尤其是 RLHF/DPO 阶段）的工程痛点：
1. **直面 RL 底层痛点**：DPO Loss 导致的阻断性 Bug 修复（PR #2966）表明项目团队正在高频维护对齐训练的核心代码，保障 RLHF 流水线的稳定性。
2. **极致的显存与计算优化**：在单卡/少卡微调千亿/百亿参数模型成为趋势的当下，跳过无效 scale_grads（PR #2980）这种“寸土必争”的底层优化，对降低 RL 训练的成本和 I/O 瓶颈至关重要。
3. **对 SOTA 模型的快速响应**：密集修复 Qwen 和 Gemma 系列 Tokenizer 的缺陷，说明其生态能够迅速跟进并兼容当前最前沿的开源基座模型，这对于复现基于这些模型的 RL 实验是刚需。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

过去24小时无活动。

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

一份为您定制的 Gymnasium 强化学习生态日报（2026-08-02）：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库共有 7 项动态（1 条 Issue，6 条 PR），无新版本发布。社区开发重点目前高度聚焦于**核心 API 的细节健壮性修复**以及**官方文档示例的视觉体验优化**（用真实训练策略替代随机动作展示）。

### 2. 版本发布
- **无新版本发布**（稳定版代码库保持不变）。

### 3. 重点 Issues
- **[#1610] [help wanted] Doc Site Gifs Showing Real Policies for Box2D and MuJoCo**
  - **链接**: [Farama-Foundation/Gymnasium Issue #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)
  - **分析**: 这是一个长期挂起的文档优化协作任务（创建于一个月前）。维护者 jkterry1 希望社区协助将官方文档中环境演示的 GIF（目前是无意义的随机 Action）替换为基于 Stable-Baselines3 等库训练出的真实策略。该 Issue 正在引发高效的社区众包开发，今日多条 PR 均源于此。

### 4. 关键 PR 进展
今日的 PR 活动主要分为“底层代码修复”与“文档视觉优化”两类：

**A. 核心 API 与环境逻辑修复**
- **[#1653] Fix Text space accepting multi-character charset elements [OPEN]**
  - **链接**: [Farama-Foundation/Gymnasium PR #1653](https://github.com/Farama-Foundation/Gymnasium/pull/1653)
  - **进展**: 修复了 `Text` 观测空间的校验漏洞。原逻辑仅检查了字符串长度边界，未拦截 `charset` 中包含多字符元素的情况，导致 `sample()` 生成的样本超出 `max_length` 且被 `contains` 方法拒绝。此 PR 补全了字符级断言。
- **[#1323] Add termination condition based on percentage of visited tiles for Car Racing [OPEN]**
  - **链接**: [Farama-Foundation/Gymnasium PR #1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323)
  - **进展**: 针对经典环境 Car Racing 提交的功能增强。当智能体完成特定比例的赛道图块访问后，将主动触发 `terminated = True`。这解决了原版环境需要极长步数才能结束回合的痛点，有助于算法开发时的训练控制。

**B. 文档真实策略 GIF 替换（响应 Issue #1610）**
- **[#1656] Use a trained-policy GIF for Walker2d [OPEN]**：替换了 Walker2d 环境中原地乱踢的随机动作 GIF。（[PR 链接](https://github.com/Farama-Foundation/Gymnasium/pull/1656)）
- **[#1646] Use a trained-policy GIF for CarRacing [OPEN]**：替换了 CarRacing 中在草地上打转的 GIF，展示了基于 SB3 训练的正常驾驶策略。（[PR 链接](https://github.com/Farama-Foundation/Gymnasium/pull/1646)）
- **[#1654] Use a trained-policy GIF for HalfCheetah [CLOSED]**：尝试替换 HalfCheetah（猎豹）的 GIF（基于 100 万步的 SAC 策略），该 PR 已于今日关闭。（[PR 链接](https://github.com/Farama-Foundation/Gymnasium/pull/1654)）
- **[#1655] Use a trained-policy GIF for Ant [CLOSED]**：尝试替换 Ant 环境四脚朝天的 GIF，同样于今日关闭。（[PR 链接](https://github.com/Farama-Foundation/Gymnasium/pull/1655)）

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **死磕底层 API 健壮性**：从 `Text` 空间的多字符漏洞（#1653）可以看出，Gymnasium 依然在严格打磨 API 边界条件。对于强化学习算法工程师而言，稳定的、可预测的 Space 校验机制是避免底层 Bug、顺利进行复现实验的基石。
2. **降低生态认知门槛**：Gymnasium 正在系统性地将文档中“随机乱动”的智能体替换为“收敛策略”。这不仅提升了库的整体专业度，也直接降低了新手对各种 RL 环境预期收敛状态的认知门槛。
3. **高度活跃的社区众包模式**：维护者通过设立明确的 `[help wanted]` 轻量级任务（如提交高质量的环境 GIF），使得开源社区贡献者（尤其是算法实践者）能够极低门槛地参与核心项目建设，形成了非常健康的生态正反馈。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 日报：PettingZoo 生态追踪 (2026-08-02)**
**项目**: Farama-Foundation/PettingZoo

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库共处理了 **7 条 Issues** 和 **8 条 Pull Requests**（其中 2 个为处于开放状态的新功能改进）。今日无新版本发布。整体活动主要集中于历史技术债务的清理（如 MADDPG 对接、环境渲染异常）、第三方多智能体环境的接入，以及经典环境（如 Pursuit、MAgent）的底层渲染与参数重构。

### 2. 版本发布
无。今日官方未推送新 Release。

### 3. 重点 Issues
今日更新的 Issue 多为带有较高技术讨论价值的长期跟踪项，核心聚焦于**多智能体算法适配**与**环境引擎报错**：

*   **[CLOSED] MADDPG 与 PettingZoo 的结合** ([#367](https://github.com/Farama-Foundation/PettingZoo/issues/367))
    *核心关注点*：探讨了在 RLlib 环境下将 MADDPG 应用于 PettingZoo 标准 API 的痛点及转换机制。
*   **[CLOSED] RLlib/MADDPG 在 PettingZoo 中的实战案例** ([#182](https://github.com/Farama-Foundation/PettingZoo/issues/182))
    *核心关注点*：针对 RLlib `actions_are_logits` 等特定配置在 PettingZoo 环境（如 prison）中的适配性进行了深入讨论。
*   **[CLOSED] Multiwalker 环境崩溃** ([#376](https://github.com/Farama-Foundation/PettingZoo/issues/376))
    *核心关注点*：剖析了智能体到达最终时间步时引发底层代码崩溃的具体原因，涉及环境内部状态管理。
*   **[CLOSED] Tensorboard 集成问题** ([#363](https://github.com/Farama-Foundation/PettingZoo/issues/363))
    *核心关注点*：明确了在自定义 Parallel 环境下结合 SB3 训练时，奖励回调与日志记录的手动实现逻辑。

### 4. 关键 PR 进展
PR 动态显示了社区在**环境兼容性**与**视觉重构**上的持续贡献：

*   **[OPEN] Pursuit 环境新增可配置中心障碍物** ([#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393))
    *技术细节*：为 Pursuit 环境引入 `center_box_size=(width, height)` 参数，支持动态生成网格尺寸或实现无障碍物地图，并加入了边界合法性校验。
*   **[OPEN] Pursuit 视觉重构：以方形替代圆形** ([#1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399))
    *技术细节*：将 Pursuit 中的追捕者与逃逸者由圆形渲染修改为填满网格的方形，恢复其移植至 PyGame 前的视觉风格，修复 Issue #1360。
*   **[CLOSED] 接入基于 AirSim 的无人机集群视觉避障环境** ([#1406](https://github.com/Farama-Foundation/PettingZoo/pull/1406))
    *技术细节*：提交了一个基于虚幻引擎 4 (UE4) 和 AirSim 的视觉无人机集群导航环境，符合 PettingZoo Parallel API 标准，扩充了第三方 3D 环境。
*   **[CLOSED] MAgent 状态空间提取** ([#394](https://github.com/Farama-Foundation/PettingZoo/pull/394))
    *技术细节*：为 MAgent 环境增加了全局状态提取方法，将所有智能体的特征通道拼接为 3D 数组，这对 CTDE（集中训练分布执行）范式下的算法（如 MAPPO）至关重要。
*   **[CLOSED] 依赖更新: Ray 升级至 2.56.0** ([#1408](https://github.com/Farama-Foundation/PettingZoo/pull/1408))
    *技术细节*：由 Dependabot 自动触发，将 `/tutorials/Ray` 目录下的 Ray 依赖从 2.55.0 提升至 2.56.0，确保多智能体教程与最新 RLlib 版本兼容。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **MARL 标准化接口的基石**：PettingZoo 已成为多智能体强化学习（MARL）事实上的“Gym”。无论是 Issue 中关于 RLlib MADDPG 的讨论，还是 PR 中对状态空间（Global State）的规范化提取，都直接影响着主流 MARL 算法的工程落地成本。
2.  **连接前沿与底层物理引擎的桥梁**：今日接入的 AirSim 无人机群 3D 环境（PR #1406）证明，PettingZoo 正在作为标准 API 层，高效整合 Unreal Engine 等重型物理仿真器，推动 MARL 向更具挑战性的视觉与连续控制领域扩展。
3.  **活跃的工程化打磨**：通过 Dependabot 保持与 Ray/SB3 等核心依赖库的版本同步，同时对经典环境（如 Pursuit, MAgent）进行细致的底层渲染重写与 API 解耦，表明该项目具有极高的工程健壮性和长期维护价值。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>