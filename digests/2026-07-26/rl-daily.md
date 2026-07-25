# RL 开源生态日报 2026-07-26

> 生成时间: 2026-07-25 22:15 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已彻底告别早期的“算法Demo验证”阶段，全面步入**底层算力极致压榨、异构硬件深度适配与复杂业务场景深耕**的深水区。以 LLM 后训练（RLHF/GRPO）为核心的框架（如 verl、TRL、OpenRLHF）主导了今日的技术话语权，占据了超过 90% 的实质性工程迭代；而传统经典 RL 环境（如 Gymnasium、PettingZoo、SB3）则进入 API 稳定期，社区重心转向底层安全性与科学评估范式的探讨。同时，多模态/扩散模型 RL 及复杂 Agentic 交互沙盒基建正在成为前沿的新发力点。

## 各项目活跃度对比
今日有真实代码与问题迭代的项目呈现极高的活跃度，且均聚焦于解决规模化训练的硬核工程痛点；反观纯传统 RL 算法库则处于零星维护状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 31 | 12 | 0 | 硬核基建导向：死磕异构算力（昇腾NPU）、MoE显存优化与 FSDP2 |
| **TRL** | 9 | 11 | 0 | 算法工程化：攻坚 GRPO Loss 变体与 vLLM 量化/调度的耦合 Bug |
| **Open Instruct** | 1 | 10 | 0 | Agent 与训练提效：聚焦大词表显存优化与代码执行沙盒高并发防护 |
| **OpenRLHF** | 2 | 1 | 0 | 算法严谨性：敏捷修复 GRPO 动态过滤在非二元奖励下的方差缺陷 |
| **Gymnasium** | 1 | 1 | 0 | 基建维稳：关注底层 API 吞吐基准与科学评估指标引入 |
| **SB3** | 1 | 1 | 0 | 安全觉醒：推进模型加载的默认防 RCE 漏洞重构 |
| **slime** | 0 | 1 | 0 | 前沿多模态：打通 Qwen3.5-VL 序列打包与 Megatron 底层适配 |
| **torchtune** | 3 | 0 | 0 | 探索校准：集中探讨无裁判模式的科学校准评估基准 |
| **AReaL** | 0 | 2 | 0 | 拓展边界：尝试扩散模型 RL 后训练及 Agent 工具链一致性对齐 |
| **PettingZoo** | 1 | 1 | 0 | 环境微调：精细化多智能体环境配置与科学评估对接 |
| **CleanRL / Tianshou 等** | 0 | 0 | 0 | 维护停滞：纯传统 RL 算法库处于静默期 |

## 共同关注的研究与工程方向
基于今日各项目的 PR 与 Issue 动态，RL 社区的研究与工程侧呈现出高度聚焦的同频共振：

**研究侧信号：**
*   **GRPO 算法变体及数学边界优化**：随着 DeepSeek-R1 架构的火热，GRPO 成为核心刚需。但学术界到工业界的转化充满数值陷阱，例如 TRL 修复了 DAPO/CISPO 等新 Loss 在梯度累积下的误缩放，OpenRLHF 敏捷修复了非二元奖励下 GRPO 忽略方差导致的策略评估偏差。
*   **告别单一 Reward，引入“科学校准”评估**：今日有 5 个不同规模的项目（SB3, Gymnasium, Tianshou 等）均被提出了引入 **REFUTE 基准**。这表明业界已不再满足于单纯看重 Reward 曲线，而是期望引入 Brier 分数、ECE（期望校准误差）等统计学指标，以解决 RL 模型过度自信或“讨好”倾向。

**工程/基础设施侧信号：**
*   **“显存保卫战”与底层通信极致优化**：长时训练 OOM 与显存泄漏是 verl 社区的高频痛点。今日多个项目（verl 过滤非本地 MoE 专家、Open Instruct 引入 Tiled GRPO loss 与 CPU offload）均通过底层算子或切分策略，向大词表和千亿级 MoE 模型发起显存攻坚。
*   **Agentic RL 交互环境的鲁棒性加固**：针对 Agent RL 多步 Rollout 引发的外部环境高频调用，Open Instruct 引入 Docker 沙盒的并发限制与 OOM 检测，TRL 修复工具调用无奖励时的默认污染，均标志着 Agentic RL 基建走向成熟容错。

## 差异化定位分析
在高度内卷的 LLM RL 赛道，各开源项目通过不同的核心壁垒建立护城河：
*   **verl（软硬一体化的千卡集群排头兵）**：定位在于**“大规模稳定训练的工业级底座”**。当其他框架还在适配单一 GPU 时，verl 已经开始通过 veomni FSDP2 架构和昇腾 NPU 深度适配，打破 NVIDIA 算力垄断，其核心壁垒在于复杂的分布式通信、Ray 调度与跨硬件生态部署。
*   **TRL（拥抱前沿算法的工程翻译官）**：Huggingface 生态的 TRL 定位于**“新算法与开源生态的无缝粘合剂”**。它不是最底层的基础设施，但永远在第一线试错最新的算法（如 DAPO, GPG）与开源工具（vLLM Sleep Mode, bitsandbytes 量化）结合时的工程坑点，具有极强的数值严谨性和响应速度。
*   **OpenRLHF / Open Instruct（敏捷与硬核并存的训练利器）**：两者都更聚焦于训练逻辑本身的提效与修正。OpenRLHF 表现出极高的敏捷性，针对算法缺陷一天内提交底层逻辑修复；Open Instruct 则在底层计算（CUDA 13适配、Liger Kernel）与 Agent 专属基建（SWERL并发沙盒）上提供极稳健的支撑。
*   **经典 RL 框架（向安全与评估延伸）**：SB3、Gymnasium 等已不再追求新算法的覆盖，而是转向**“安全性反思与可靠性验证”**。SB3 推进反序列化安全防范 RCE 攻击，代表了 RL 从实验室走向实际物理世界部署时的必经之路。

## 社区热度与成熟度
今日的社区数据清晰地划分出了 RL 生态的**“两极分化”成熟度**：
一方面，**LLM RLHF 框架处于高热度、高摩擦的“少年期”**。verl（单日 43 次更新）、TRL（20 次更新）极高的 Issue 讨论量，源于大模型训练天然存在的脆弱性（如 OOM、张量不连续、梯度检查点失效等）。这种高频互动体现了项目拥有强大的企业级背书和核心维护者在死磕疑难杂症的成熟态度。
另一方面，**传统 RL 基础库进入了平稳的“成熟维护期”**。SB3、Gymnasium、PettingZoo 等虽然缺乏高频的代码 Commits，但其单条 Issue/PR 均涉及底层安全重构或评估范式扩展，反映出项目 API 已经高度稳定，社区关注点已升维至系统安全与可信度。而部分纯算法复现库（如 CleanRL、Tianshou 等）的无活动，则印证了纯学术 RL 算力需求向 LLM 领域的彻底转移。

## 值得关注的趋势信号
技术决策者与资深开发者应重点关注以下三个正在发生的趋势信号：
1.  **国产异构算力与定制化加速引擎全面接入 RL**：verl 单日 3 个昇腾 NPU 适配 PR 以及全新 `megatron_adaptor` 的引入，释放了强烈信号——千亿级大规模 RL 训练正在系统性摆脱对单一 CUDA 生态的绝对依赖，国产算力的 RL 软件栈正在成熟。
2.  **大模型架构演进倒逼 RL 底层重构**：无论是 verl 适配 Hybrid Mamba 架构报错，还是 TRL 修复 FusedMoE 加载器，亦或是 slime 打通 Qwen3.5-VL 的 Gated DeltaNet 层序列打包，都表明**前沿模型架构的迭代速度已超出了 RL 框架的演进速度**。谁能最快修复新型底层算子与分布式策略的冲突，谁就能主导下一代训练框架。
3.  **扩散模型 RL（Diffusion RL）进入工程验证视野**：AReaL 提交的基于 SD1.5 + REINFORCE 的单卡 PoC 方案，标志着 RL 微调的触角正从纯文本大模型向多模态/生成式模型延展。在 LLM 对齐逐渐红海化的当下，多模态生成内容的偏好对齐是极具潜力的下一个爆发洼地。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime RL 项目日报 - 2026-07-26 **

### 1. 今日速览
过去 24 小时内，slime 仓库整体活动平稳。无新增 Issue 或版本发布，但合并了 1 项关键的多模态底层代码贡献。开发重心目前聚焦于提升前沿 VLM（视觉语言模型）在 Megatron 架构下的工程兼容性。

### 2. 版本发布
- **最新 Releases**：无（0 个）

### 3. 重点 Issues
- **新增及活跃 Issues**：无（0 条）

### 4. 关键 PR 进展
- **#2233 [OPEN] [Multimodal][Model] Make Qwen3.5-VL work with packed sequences**
  - **作者**: TobyYang7
  - **更新时间**: 2026-07-25
  - **技术摘要**: 该 PR 修复了 Qwen3.5-VL 无法通过 bridge path 运行的问题，移除了示例中对非官方 Megatron Bridge 分支的依赖，使其能够直接基于官方包运行。此外，针对 Qwen3.5-VL 中基于 megatron-core `experimental` 模块构建的 Gated DeltaNet 层进行了适配，以支持 packed sequences（序列打包），这对于在多模态强化学习中实现高吞吐量训练至关重要。
  - **链接**: [THUDM/slime PR #2233](https://github.com/THUDM/slime/pull/2233)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
slime 正在快速跟进和兼容最新的多模态大模型架构（如引入 Gated DeltaNet 的 Qwen3.5-VL）。在当前的 RL 和 LLM 训练生态中，**“序列打包”** 和 **底层算子对齐** 是打破多模态数据天然变长限制、提升 GPU 零水印利用率的核心技术瓶颈。slime 致力于打通前沿模型与高性能训练框架（如 Megatron）之间的工程壁垒，展现了其在多模态 RL 底层基础设施上的深耕价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-07-26)**

**1. 今日速览**
过去 24 小时内，AReaL 仓库无新增 Issue、无新版本发布。核心动态集中在 2 个已有 PR 的活跃更新上，技术方向覆盖了当前前沿的扩散模型强化学习微调（PoC）以及底层推理引擎工具链的对齐修复。

**2. 版本发布**
- **无**。今日未发布新版本。

**3. 重点 Issues**
- **无**。过去 24 小时无新增或更新的 Issue。

**4. 关键 PR 进展**
- **[#1410] [OPEN] feat(experimental): Diffusion RL post-training — Phase 1 PoC (SD1.5 + LoRA + REINFORCE)**
  - **作者**: Fyrgo8 | **更新时间**: 2026-07-25
  - **摘要**: 提供了一个完全独立、支持单 GPU 运行的扩散模型 RL 后训练概念验证。基于 SD1.5 + LoRA，使用经典的 REINFORCE 算法对齐扩散模型。该 PR 属于实验性特性，旨在验证 AReaL 拓展多模态/生成式模型 RL 训练框架的底层能力。
  - **链接**: [areal-project/AReaL PR #1410](https://github.com/areal-project/AReaL/pull/1410)
- **[#1499] [OPEN] [stale] fix(openai): align proxy tool schemas with sglang chat-completions rendering**
  - **作者**: Le8r0nJames | **更新时间**: 2026-07-25
  - **摘要**: 修复了 OpenAI 兼容代理层的工具渲染问题。原逻辑将请求中的 `tools` 模块渲染为纯字典，与底层推理引擎 sglang 原生路由（经过 pydantic `Tool` 模型处理）的字段顺序和默认字段存在差异。该 PR 消除了模板渲染的不一致性，提升了 Agent/Tool-use 场景下的兼容性。
  - **链接**: [areal-project/AReaL PR #1499](https://github.com/areal-project/AReaL/pull/1499)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **向多模态/扩散模型 RL 延伸**：PR #1410 表明 AReaL 正在探索将 RL 后训练范式从 LLM 扩展至扩散模型（Diffusion Models）。在当前 RLHF/RLAIF 在 LLM 领域逐渐标准化的阶段，扩散模型的对齐与偏好优化是 RL 生态极具潜力的前沿方向。
- **深耕底层推理与 Agent 链路兼容性**：PR #1499 展示了项目对推理引擎（如 sglang）集成的严谨度。在基于 LLM 的 Agent 工作流中，Tool-use 工具调用的稳定性直接决定了 RL 奖励信号的准确性，这种对齐底层 Chat template 和 API Proxy 渲染的基建工作，是支撑大规模复杂 RL 训练的硬核基础。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这份报告基于 2026-07-26 的 GitHub 追踪数据，为您梳理 TRL（Transformer Reinforcement Learning）生态的最新技术动态。

### 1. 今日速览
- **Issue 动态**：更新 9 条，其中 3 项核心 Bug 被关闭，3 个新 CI 故障被定位。
- **PR 动态**：更新 11 条，重点集中于 **vLLM 权重同步修复**、**DAPO 等新算法的 Loss 归一化矫正**，以及针对 `bitsandbytes 0.50.0` 的 CI 热修复。
- **版本发布**：过去 24 小时无新版本发布（当前代码处于日常迭代与 CI 稳定化阶段）。

---

### 2. 版本发布
无。开发重心目前聚焦于修复底层量化依赖带来的兼容性问题，以及完善 GRPO 算法的周边训练逻辑。

---

### 3. 重点 Issues
今日的 Issue 揭示了当前 RLHF 训练中的几个核心技术痛点，部分历史遗留问题已得到彻底解决：

- 🔥 **【已修复】DAPO Loss 归一化缺陷** ([#5619](https://github.com/huggingface/trl/issues/5619))
  用户反馈 DAPO Loss 未根据 `current_gradient_accumulation_steps` 进行归一化。该逻辑漏洞会导致多卡训练时梯度尺度计算异常，目前已被提交 PR 修复。
- 🔥 **【已修复】vLLM 权重同步失败** ([#5312](https://github.com/huggingface/trl/issues/5312))
  开启 `vllm_enable_sleep_mode=True` 时，Colocate 模式下的 GRPO 训练出现权重不同步。这反映了 TRL 与 vLLM 深度整合进程中的内存调度复杂性。
- 📈 **【已关闭】GRPO 最佳模型保存指标** ([#3384](https://github.com/huggingface/trl/issues/3384))
  开发者此前无法直接使用 `reward` 作为评估指标来保存最佳模型，该痛点已被标记关闭并解决。
- ⚠️ **【新报告】CI 因底层依赖报错** ([#6543](https://github.com/huggingface/trl/issues/6543) / [#6541](https://github.com/huggingface/trl/issues/6541))
  维护者 `albertvillanova` 报告了由于 `bitsandbytes` 更新导致的量化参数断言失败，以及 `transformers` dev 构建版本引发的 CUDA 张量维度扩展错误。
- 💡 **【新算法诉求】极简 GPG 方法接入** ([#3472](https://github.com/huggingface/trl/issues/3472))
  社区呼吁接入 Group Policy Gradient (GPG)，提出绕过传统复杂机制直接优化 RL 目标，体现了极简化 RL 算法的趋势。

---

### 4. 关键 PR 进展
开发者们正在通过以下几个 PR 显著提升 GRPO 训练的稳定性和大模型兼容性：

- 🛠️ **修复 vLLM 权重同步与休眠冲突** ([PR #5313](https://github.com/huggingface/trl/pull/5313))
  直接对应 Issue #5312，修复了开启 sleep mode 时的权重同步 Bug，是保障大规模 GRPO 训练稳定性的关键补丁。
- 🧮 **修复 DAPO/CISPO/VESPO Loss 误缩放** ([PR #6024](https://github.com/huggingface/trl/pull/6024))
  矫正了当 `steps_per_generation != gradient_accumulation_steps` 时，多种新 Loss 类型的缩放比例错误。这是一个深度的底层训练逻辑修复。
- 🛡️ **OpenReward 防御默认 0.0 奖励污染** ([PR #6430](https://github.com/huggingface/trl/pull/6430))
  解决了一个隐蔽但致命的逻辑漏洞：当 rollout 未触发奖励工具调用时，防止系统默认返回 `0.0` 污染优势函数（Advantage）计算，改为返回 `None`。
- 🔧 **CI 热修复：锁定 bitsandbytes < 0.50.0** ([PR #6544](https://github.com/huggingface/trl/pull/6544) / [PR #6542](https://github.com/huggingface/trl/pull/6542))
  维护者为应对突然到来的 `bitsandbytes 0.50.0` 破坏性更新，紧急降级锁定版本，并标记部分 NemotronH 测试为 `xfail` 以保障主分支流水线畅通。
- 🧩 **MoE 路由诊断与 Qwen 兼容** ([PR #6514](https://github.com/huggingface/trl/pull/6514) / [PR #6539](https://github.com/huggingface/trl/pull/6539))
  `SFTTrainer` 新增了对 MoE 专家使用度指标的评估支持；同时修复了 Qwen 模型因 `forward` 方法非绑定实例方法而导致的 Chunked-CE 崩溃问题。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

从今日的数据切片可以看出，TRL 正在深度攻坚 **RL 算法变体（如 DAPO、GRPO）与复杂工程架构（如 MoE 模型、vLLM 显存调度、量化）的耦合难题**：

1. **直面前沿工程的硬骨头**：vLLM Colocate + Sleep Mode 下的权重同步、bitsandbytes 0.50.0 的底层断言冲突，这些是每一个尝试做大规模 LLM 强化学习的团队都会踩坑的地方。TRL 在第一线试错并提供标准修复方案。
2. **算法到工程的翻译官**：DAPO、GPG 等学术界的 RL 新算法，在转化为工业代码时极易在 `gradient_accumulation` 或 Advantages 计算上出现数值放缩错误。TRL 的 PR 活跃度证明了它具备极高的数学严谨性和代码响应速度。
3. **拥抱 Agentic RL**：从 PR #6430 防范工具调用无奖励返回的机制可以看出，TRL 正在为基于环境交互的 Agentic RL（Rollout 机制）构建极其鲁棒的容错底线。这种工程成熟度是其他纯学术框架难以比拟的。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

作为一名专注于强化学习（RL）开源生态的项目分析师，以下是为您生成的 **OpenRLHF** 2026年7月26日 RL 日报摘要。

---

# 📰 OpenRLHF RL 日报 (2026-07-26)

**今日数据概览**：Issues 更新 `+2` | PR 更新 `+1` | Releases `0`

### 1. 今日速览
今日 OpenRLHF 生态聚焦于 **GRPO 算法在动态过滤机制上的鲁棒性优化**。社区发现当前的样本过滤策略（基于奖励均值）在处理非二元奖励时存在统计缺陷，开发者迅速响应，提出并提交了基于方差感知的修复方案。此外，有研究者提议引入新的科学校准评测基准。

### 2. 版本发布
**无新版本发布**。当前项目代码库处于稳定迭代与局部特性优化阶段。

### 3. 重点 Issues
*   **[#1270] 动态过滤策略需在非二元奖励下考虑标准差** 
    *   **链接**: [OpenRLHF/OpenRLHF Issue #1270](https://github.com/OpenRLHF/OpenRLHF/issues/1270)
    *   **分析**: 作者 `oaimli` 指出，`trainer/ppo_utils/samples_generator.py` 中当前的动态过滤策略仅依赖奖励均值（剔除过难或过易的样本）。但在处理非二元奖励时，仅看均值会忽略组内数据的分布情况，导致策略评估偏差。这是一个具有较高技术价值的算法边界问题。
*   **[#1271] 提议引入 REFUTE 科学校准评测基准**
    *   **链接**: [OpenRLHF/OpenRLHF Issue #1271](https://github.com/OpenRLHF/OpenRLHF/issues/1271)
    *   **分析**: 作者 `connerlambden` 建议在相关文档或评测工具中引入 REFUTE 基准。该项目主要通过“论文论点 -> 模型预测 -> 评分 -> Brier/ECE 校准”流程评估模型的科学批判能力。这反映了 RL 训练（如 RLHF/GRPO）正逐渐向更严谨的科学严谨性与事实对齐方向演进。

### 4. 关键 PR 进展
*   **[#1272] 为 GRPO 群组引入基于方差的动态过滤**
    *   **链接**: [OpenRLHF/OpenRLHF PR #1272](https://github.com/OpenRLHF/OpenRLHF/pull/1272)
    *   **分析**: 开发者 `mentaltraffic` 迅速响应了 Issue #1270。该 PR 的核心逻辑在于修正 GRPO 的优势计算：由于 GRPO 通过 `A_i = (r_i - mean) / (std + eps)` 计算组内优势，如果动态过滤仅依靠均值来决定保留或丢弃整个 Group，而不考虑方差（std），会导致模型的梯度更新严重失真。**该 PR 直接切中了 GRPO 训练不稳定的一个核心痛点，是提升框架工业级鲁棒性的关键提交。**

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **对训练底层的极致把控与敏捷迭代**：从 Issue 提出统计缺陷到 PR 给出底层数学逻辑修复（均值 -> 均值+方差），仅隔一天。这表明 OpenRLHF 维护团队对 PPO/GRPO 等底层算法链路（如 `samples_generator.py`）有着深刻理解，并能快速响应复杂的训练数学问题。
2.  **直击大模型强化学习的痛点**：随着 GRPO 等基于群组的 RL 算法成为主流（如 DeepSeek-R1 架构），奖励函数设计（二元 vs 非二元）和样本过滤策略对训练稳定性起着决定性作用。OpenRLHF 正在通过实打实的代码更新，解决前沿 RL 训练中的 High-variance 和 Collapse 问题，是真正“Hardcore”的 RLHF 框架。

--- 
*注：以上分析基于 OpenRLHF GitHub 仓库截至 2026-07-26 的过去 24 小时数据。*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 (2026-07-26)

## 1. 今日速览
今日 verl 生态保持高度活跃，共有 **31 条 Issue 更新** 与 **12 条 PR 更新**，无新版本发布。整体技术演进聚焦于 **异构硬件（华为昇腾 NPU）的深度适配**、**底层显存（VRAM）极致优化** 以及 **复杂 MoE 架构的工程化修复**。

## 2. 版本发布
**无** （最近版本仍为 v0.7.1+）。

## 3. 重点 Issues
开发者当前面临的核心挑战集中在长时训练的内存溢出（OOM）以及新型混合架构模型的适配：

*   **[Bug] 长时训练 OOM 与显存泄漏 (Issue [#7145](https://github.com/volcengine/verl/issues/7145))**
    在使用 DAPO 算法对 Qwen3-4B 进行强化训练时发生内存溢出。此类问题严重制约大规模 RL 的稳定性，是社区当前高优排查的工程痛点。
*   **[Bug][FSDP] Nemotron-H 模型梯度检查点失效 (Issue [#7146](https://github.com/volcengine/verl/issues/7146))**
    在 H200 集群上，FSDP 后端无法为 `nemotron_h` 架构（如 Nemotron-3-Nano-30B）启用梯度检查点，反映了 verl 对前沿 Mamba/Hybrid 架构支持的滞后，亟待修复。
*   **历史高频痛点回归 (Issue [#4464](https://github.com/volcengine/verl/issues/4464), [#4495](https://github.com/volcengine/verl/issues/4495))**
    On-policy 蒸馏报错（`no running event loop`）以及 Rollout 同步模式缺失等问题仍保持极高讨论度，表明社区对复杂 Rollout 引擎及蒸馏工作流的一致性需求。

## 4. 关键 PR 进展
今日的 PR 提交质量极高，主要涵盖 NPU 生态、MoE 权重传输和底层性能优化：

*   **昇腾 NPU 深度适配三连击**
    *   PR [#7134](https://github.com/volcengine/verl/pull/7134): 修复纯 CPU 环境下检测 NPU 时的崩溃问题，提升 Ray 混合集群的鲁棒性。
    *   PR [#7142](https://github.com/volcengine/verl/pull/7142): 引入 `megatron_adaptor` 后端，为昇腾 NPU 提供除 MindSpeed 外的全新引擎路径。
    *   PR [#7114](https://github.com/volcengine/verl/pull/7114) (Closed/Merged): 修复 Megatron 保存 Checkpoint 时的 strict 模式逻辑。
*   **vLLM 显存与权重加载优化**
    *   PR [#7143](https://github.com/volcengine/verl/pull/7143): **核心性能优化**。在重载 vLLM 的 MoE 权重前过滤非本地专家，大幅降低专家并行（EP）下的 GPU 显存开销。
    *   PR [#6919](https://github.com/volcengine/verl/pull/6919): 修复 Actor 模型导出非连续张量时，vLLM Rollout 权重更新崩溃的 Bug。
    *   PR [#7147](https://github.com/volcengine/verl/pull/7147): 修复新版 vLLM 下 `FusedMoE` 加载器的属性报错。
*   **FSDP2/veomni 架构升级**
    *   PR [#7085](https://github.com/volcengine/verl/pull/7085) & [#7144](https://github.com/volcengine/verl/pull/7144): 引入支持专家并行（EP）的 `veomni FSDP2`，重构分片 delta 权重同步逻辑，显著提升超大规模 MoE 模型的训练和同步效率。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **主攻大模型 RLHF 的核心“工程壁垒”**：当其他框架还在Demo阶段时，verl 正在死磕 FSDP/Megatron、vLLM 与 Ray 之间的复杂调度。今日合并的 *MoE 权重显存优化 (PR #7143)* 与 *非连续张量传输修复 (PR #6919)*，直击千卡训练中的显存与通信痛点。
2.  **彻底打破 NVIDIA 算力垄断**：单日出现 3 个核心 Ascend NPU 相关 PR，表明 verl 正在系统性地将底层训练与推理能力平移至国产/异构硬件生态，这是国内 RL 开发生态极具战略价值的演进。
3.  **紧跟 SOTA 模型前沿**：无论是 Hybrid 架构的排查，还是 Veomni+FSDP2 专家并行（EP）底座的重构，verl 始终在第一时间适配 Qwen3、DeepSeek、Nemotron 等千亿级 MoE 模型的后训练需求。它是目前通往 “大规模稳定 RL 训练” 最务实的开源路径之一。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

这份日报为您梳理 torchtune 项目在 2026-07-26 的核心动态。从数据来看，今日项目无代码层（PR）更新，社区焦点集中在新的评估基准探讨上。

### 1. 今日速览
- **数据概览**：过去 24 小时内，torchtune 仓库共有 3 条 Issues 更新，0 条 PR 更新，无新版本发布。
- **核心动向**：今日无底层代码或功能迭代。社区讨论焦点由开发者 connerlambden 推动，集中探讨引入名为 **REFUTE** 的科学批评与模型校准（Calibration）评估基准。

### 2. 版本发布
**无**。项目当前保持稳定状态，今日未发布新的 Release。

### 3. 重点 Issues
今日新增的 3 条 Issue 均围绕同一主题（REFUTE 基准集成），由同一作者提交，主要侧重于模型在科学领域的对齐与评估：
- **[#2976] [OPEN] Related eval: REFUTE scientific critique + calibration**
  探讨将 REFUTE 作为相关评估工具。REFUTE 的核心逻辑基于“无裁判（judge-free）”模式，通过 Brier 分数和期望校准误差（ECE）来分离并评估模型的批判能力与校准水平。
  🔗 [meta-pytorch/torchtune Issue #2976](https://github.com/pytorch/torchtune/issues/2976)
- **[#2975] [OPEN] Add REFUTE scientific critique + calibration benchmark**
  建议在相关评估或科学 AI 工具文档中加入 REFUTE 基准。该基准的评估闭环为：基于论文的声明 → 模型预测 → 评分 → 计算并分析 Brier/ECE。
  🔗 [meta-pytorch/torchtune Issue #2975](https://github.com/pytorch/torchtune/issues/2975)
- **[#2974] [OPEN] Add REFUTE scientific critique + calibration benchmark**
  与 #2975 内容高度相似，属于同作者的重复提案。
  🔗 [meta-pytorch/torchtune Issue #2974](https://github.com/pytorch/torchtune/issues/2974)

### 4. 关键 PR 进展
**无**。过去 24 小时内项目无活跃的 Pull Request，核心代码库无修改或合并记录。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日 torchtune 缺乏代码层面的高频更新，但今日集中涌现的 Issue 揭示了 RL/LLM 微调生态的一个重要趋势：**后训练时代的深度评估**。
- **校准与 RLHF 的关联**：REFUTE 提出的 Brier/ECE 评估指标，直接切中当前 RLHF（基于人类反馈的强化学习）中的一个痛点——模型容易过度自信或出现“讨好”倾向。优秀的校准能力是衡量模型输出可靠性的核心指标。
- **无裁判评估范式**：传统的 RL 奖励模型严重依赖外部裁判模型的打分，而今日社区探讨的 REFUTE 引入了 judge-free 模式，这为探索脱离裁判模型偏见的自动化对齐提供了新思路。
作为 PyTorch 官方生态中的微调库，torchtune 正在积极吸收前沿的评估与对齐工具反馈，是观察大模型后训练技术如何落地的重要风向标。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct (2026-07-26)**

**1. 今日速览**
过去 24 小时，Open Instruct 仓库共有 1 条 Issue 更新和 10 条 PR 更新，无新版本 Release。今日的活动焦点高度集中于**底层训练效率优化（显存管理与分布式）**、**代码执行沙盒的稳定性加固**，以及对 **CUDA 13 镜像的适配**。

**2. 版本发布**
无新版本发布。

**3. 重点 Issues**
*   **[功能提案] 增加 REFUTE 科学评估基准** (`#1787` by connerlambden)
    *   **链接**: [allenai/open-instruct Issue #1787](https://github.com/allenai/open-instruct/issues/1787)
    *   **摘要**: 开发者提议在项目的评估工具链中集成 REFUTE（一个科学批判与校准基准）。该基准通过基于论文的声明生成预测，再由 Judge 模型打分，最终计算 Brier 分数和 ECE（期望校准误差）。这为 RLHF/RFT 模型在科学严谨性和事实校准方面的评估提供了新维度。

**4. 关键 PR 进展**
今日的 PR 动态展现了 Open Instruct 在应对大规模、高并发 RLHF 训练时的工程演进：

*   **显存与底层优化**
    *   [PR #1654](https://github.com/allenai/open-instruct/pull/1654): 为 GRPO 训练增加 `use_cpu_adam` CLI 开关与 offload 校验。允许在较小显存（如单卡 <80GB 跑 7B 模型）环境下，通过 CLI 一键切换至 `DeepSpeedCPUAdam`，免去了修改源码的痛点。
    *   [PR #1785](https://github.com/allenai/open-instruct/pull/1785): **（重点）** 引入 Tiled GRPO lm-head loss（迁移自 #1747）。通过可选的 `--use_liger_grpo_loss` 参数，采用类似 DeepSpeed 的 `TiledFusedLogitsLoss` 模式，大幅降低大规模词表模型在 GRPO 策略下的 LM Head 显存峰值。
*   **并发沙盒与代码执行加固**
    *   [PR #1784](https://github.com/allenai/open-instruct/pull/1784): **（重点）** 为 DockerBackend 引入重试机制、OOM 检测和并发限制（迁移自 #1744）。在应对复杂 RL 任务（如 SWERL）的大规模并发 Rollout 时，防止 Docker 守护进程过载崩溃。
*   **工程与基建**
    *   [PR #1783](https://github.com/allenai/open-instruct/pull/1783): **（已合并）** 自动构建并发布基于 CUDA 13 的 Beaker 镜像，保持与最新 Nvidia 生态的兼容性。
    *   [PR #1786](https://github.com/allenai/open-instruct/pull/1786): 修复 `.dockerignore`，递归排除嵌套的虚拟环境目录，优化 Docker Build Context 体积。
    *   [PR #1770](https://github.com/allenai/open-instruct/pull/1770) / [PR #1766](https://github.com/allenai/open-instruct/pull/1766): 修复 IFEvalG 评测中的边界条件（如 `EndChecker` 的大小写与空格处理、空 star span 的忽略），提升自动评估的准确性。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
Open Instruct 今天的更新精准击中了当前大模型强化学习的几个核心工程痛点：
1.  **打破长上下文/大词表的显存瓶颈**：Tiled GRPO loss（#1785）和 CPU offload 适配（#1654）证明项目在紧跟 DeepSpeed 等底层框架的最新优化，解决 GRPO 算法在训练 7B+ 模型时的高显存占用问题。
2.  **Agent RL 的基础设施护城河**：针对代码执行和 Agent 探索（如 SWERL）引发的高频 Docker 调用，PR #1784 引入了精细化并发控制和 OOM 防护。这说明项目在处理“多步 Rollout + 外部环境交互”这种极具挑战性的 RL 场景时，具备极高的工程成熟度。
3.  **无缝衔接最新计算生态**：主动适配 CUDA 13（#1783），确保研究团队能无摩擦地使用最新的底层硬件加速器。对于致力于将 RL 算法落地到大规模集群环境的研究者和工程师而言，它提供了极其稳健的基座。

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

**强化学习（RL）开源生态日报：Gymnasium**
**日期**: 2026-07-26

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平稳。无新版本发布，新增 0 条 Issue 和 0 条 PR，但核心贡献者持续推进已有功能的优化与讨论。今日数据更新包含 1 条 Issue 状态更新与 1 条 PR 状态更新。

### 2. 版本发布
- **无新版本发布**（0 个 Release）。项目核心 API 当前处于稳定维护阶段。

### 3. 重点 Issues
- **#1649 [OPEN] Add REFUTE scientific critique + calibration benchmark**
  - **作者**: connerlambden
  - **更新时间**: 2026-07-24
  - **摘要**: 提议在 Gymnasium 的相关文档（评估/科学AI工具）中引入 **REFUTE** 基准测试。REFUTE 旨在提供科学批判与校准基准，通过“论文驱动的声明 → 预测 → 裁判评分 → Brier/ECE（期望校准误差）”的流程来评估科学 AI 工具的严谨性。
  - **链接**: [Farama-Foundation/Gymnasium Issue #1649](https://github.com/Farama-Foundation/Gymnasium/issues/1649)

### 4. 关键 PR 进展
- **#1640 [OPEN] Add vector environment step benchmark**
  - **作者**: Kallinteris-Andreas
  - **更新时间**: 2026-07-25
  - **摘要**: 该 PR 提议在 Gymnasium 中新增向量环境（Vector Environment）的单步性能基准测试代码（`benchmark_step_vector`）。其核心动机是用于在 MJX（MuJoCo XLA）环境的测试中，精准测量向量环境每秒可以执行的步数。代码已通过 `ruff` 的格式与规范检查。
  - **链接**: [Farama-Foundation/Gymnasium PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **RL 基础设施的硬标准**：Gymnasium（作为 OpenAI Gym 的维护分支）其 API 规范依然是当前学术界和工业界开发 RL 算法的事实标准。关注其底层变动（如 PR #1640 对 Vector Env 性能基准的补充）能直接反映社区对高并发、硬件加速（如 MJX）环境吞吐量评测的刚性需求。
2. **评估体系的延伸探索**：从 Issue #1649 可以看出，生态正在从单纯的“环境交互”向“科学评估与校准”延伸。关注此类 Issue 能够把握 RL 评测工具链向更严谨、可量化方向发展的前沿趋势。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

这里是 2026-07-26 强化学习（RL）开源生态日报摘要，聚焦多智能体强化学习（MARL）标准环境库 **PettingZoo**。

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活跃度趋于平缓。无新版本发布，新增/更新 Issue 1 条，更新 PR 1 条。核心动态集中在环境配置的灵活性扩展以及外部科学评估工具的接入探讨。

### 2. 版本发布
- **无新版本发布**。项目核心 API 当前处于稳定维护期。

### 3. 重点 Issues
**#1405 [OPEN] 添加 REFUTE 科学批判与校准基准**
- **链接**: [Farama-Foundation/PettingZoo Issue #1405](https://github.com/Farama-Foundation/PettingZoo/issues/1405)
- **技术摘要**: 社区开发者提议在 PettingZoo 的评估/校准相关文档中引入外部工具 **REFUTE**。该工具是一个基于论文证据的科学批判与校准基准，旨在通过“主张提取 → 预测 → 裁判打分 → Brier分数/期望校准误差 (ECE)”的链路，评估科学 AI 的严谨性。这反映了 MARL 社区对智能体行为可靠性和科学可验证性的日益关注。

### 4. 关键 PR 进展
**#1393 [OPEN] 为 Pursuit 环境添加可配置的中心障碍物尺寸**
- **链接**: [Farama-Foundation/PettingZoo PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)
- **技术摘要**: 开发者 `paranoa233` 为经典的 Pursuit 环境引入了高度定制化的地图配置参数 `center_box_size=(width, height)`（以网格单元为单位）。该 PR 提供了严格的边界校验逻辑，支持通过 `(0, 0)` 直接生成无障碍地图，或设为 `None` 保留原有的比例缩放障碍物。此更新为多智能体协作/追逃实验提供了更精细的环境控制粒度。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Farama-Foundation 的核心组件，PettingZoo 之于多智能体强化学习（MARL），就如同 Gymnasium 之于单智能体 RL。
- **工业界与学术界的标准基石**: 它是当前几乎所有主流 MARL 算法（如 MAPPO, QMIX）进行基线测试和性能验证的通用语言。
- **从“环境提供者”向“生态连接器”演进**: 今天的 Issue #1405 表明，PettingZoo 的边界正在扩展。它不仅提供环境，还在积极对接前沿的 AI 评估工具链，致力于解决 LLM/科学 AI 时代下智能体的“科学校准”与“幻觉度量”问题。
- **持续打磨的底层逻辑**: 类似 PR #1393 这种对经典环境的微观改造，说明项目在持续回应科研人员对“环境变量绝对可控”的硬核需求，这是支撑未来复杂 MARL 理论验证的必要基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

**RL 日报：Stable Baselines3 生态追踪 (2026-07-26)**

**1. 今日速览**
过去 24 小时内，Stable Baselines3 (SB3) 仓库活动趋于平稳，无新增代码提交或版本发布。Issues 和 PR 看板各更新 1 条。核心开发组目前将精力集中在底层安全机制的重构与社区生态工具的评估上。

**2. 版本发布**
- **今日无新版本发布**。
- 当前项目仍处于阶段性的代码维护期，核心算法接口保持稳定。

**3. 重点 Issues**
- **#2273 [OPEN] Add REFUTE scientific critique + calibration benchmark**
  - **链接**: [DLR-RM/stable-baselines3 Issue #2273](https://github.com/DLR-RM/stable-baselines3/issues/2273)
  - **分析**: 社区成员 `connerlambden` 提议在 SB3 的文档中引入名为 **REFUTE** 的科学评估工具。该工具主打“科学批判与校准基准”（基于论文声明 -> 模型预测 -> 评分 -> 计算 Brier 分数 / ECE）。这是一个典型的跨项目联动，探讨如何将 RL 算法的性能评估与更严谨的统计校准工具相结合。

**4. 关键 PR 进展**
- **#2264 [OPEN] Secure deserialization (`.load()`) by default**
  - **链接**: [DLR-RM/stable-baselines3 PR #2264](https://github.com/DLR-RM/stable-baselines3/pull/2264)
  - **分析**: 这是一个由核心维护者 `araffin` 主导的**高优安全性更新**。该 PR 旨在重构模型的 `.load()` 方法，**默认采用安全反序列化机制**（关联 Issue #1831 与 #1852）。
  - **技术背景**: 传统的 `pickle` 加载方式存在严重的任意代码执行（RCE）风险。此项更新将改变 SB3 加载保存模型时的默认行为，防止用户在加载来源不可信的 RL 模型时遭受恶意攻击。目前该 PR 已于昨日更新，正在进一步打磨中。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
- **底层安全性的觉醒**: 随着 RL 模型在机器人控制、自动驾驶等领域的实体部署增加，模型文件的反序列化安全成为刚需。SB3 推进 PR #2264，标志着主流 RL 库开始从“功能可用性”向“工程安全性（默认防 RCE 漏洞）”演进。
- **评估体系的科学化**: Issue #2273 的出现反映了当前 RL 生态的新痛点——光看 Reward 已经不够了。引入 ECE（期望校准误差）和Brier 分数等评估指标，说明 RL 社区正在吸收传统机器学习的严谨性，向更科学的确定性评估过渡。SB3 作为生态核心，其工具链的扩展方向代表了学术与工业界的最新工程基准。

</details>