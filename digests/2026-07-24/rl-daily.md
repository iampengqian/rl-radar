# RL 开源生态日报 2026-07-24

> 生成时间: 2026-07-23 22:18 UTC | 覆盖项目: 15 个

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

当前的强化学习（RL）开源生态正在发生显著的分层演化：以 **verl, TRL, AReaL, slime** 为代表的大规模 LLM/Agent RL 训练框架正处于极度活跃的工程攻坚期，焦点在于解决超大规模模型带来的“显存墙”、异构硬件适配以及高效的推训协同；而以 **SB3, Gymnasium, rl_games** 为代表的经典/传统 RL 库则退守幕后，进入高度稳定期，主要维护底层 API 的统计学严谨性与边界健壮性。此外，以 **ROCK** 为代表的沙箱与环境控制平面项目，揭示了 Agent 时代 RL 对于环境快照、算力动态调度的迫切基建需求。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 74 | 35 | 0 | LLM RL 算法落地首选，深水区探索多模态与跨硬件适配 |
| **TRL** | 17 | 48 | 0 | 重构核心抽象，推进 VLM 兼容与底层异步生成解耦 |
| **AReaL** | 4 | 13 | 0 | 死磕 MoE 架构显存优化与分布式 Fail-Safe 机制 |
| **ROCK** | 5 | 6 | 0 | 完善 Agent 沙箱生态，推进资源透明化与异步镜像管理 |
| **slime** | 0 | 3 | 0 | 专注底层推理引擎热更新与 MoE 张量并行切片修复 |
| **SB3** | 1 | 2 | 0 | 维护伪随机数独立性的统计学严谨性 |
| **Gymnasium** | 0 | 1 | 0 | 修补动作空间的越界溢出异常 |
| **Open Instruct** | 0 | 1 | 0 | 升级底层算力工具链 (CUDA 13) 支持 |
| **rl_games** | 0 | 1 | 0 | 修复 PPO 在 autoreset 机制下的数据污染 Bug |
| **torchtune** | 0 | 1 | 0 | 修复 YAML 配置解析的 RCE 高危漏洞 |
| **CleanRL/OpenRLHF 等** | 0 | 0 | 0 | (暂无波动，处于版本沉淀或代码维护静默期) |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态 RL (VLM RL) 的全面崛起**：LLM 的 RL 训练范式正在快速向视觉语言模型（VLM）外溢，解决图像 URL 在推理引擎（如 vLLM/SGLang）生成路径中的解析崩溃与权重同步问题（verl, TRL）。
2. **Loss 聚合粒度与优势方差控制**：为应对 Agentic 长序列任务，项目正在打破按全局 Token 均值计算梯度的传统，转向支持按序列聚合的可配置化 Loss，以平抑极长文本带来的梯度方差（AReaL, TRL）。
3. **前沿策略与对齐算法的极速吸纳**：Muon 优化器、DAPO 等最新的学术成果正以极快的速度在主流框架中被工程化实现并提供可配置开关（verl, TRL）。

**工程/基础设施侧信号：**
1. **显存极限压榨与底层优化**：针对 LM Head 显存爆炸和长上下文 System Prompt，社区正在引入 LM Head 分块反向传播、AWEX 算力共置（Colocate）以及 Prefix-Tree MAGI Attention 等技术（AReaL, verl）。
2. **推训引擎的深度解耦与异步化**：如何让 Actor 的梯度更新（FSDP/Megatron）与 Rollout 的推理生成（vLLM/SGLang）在硬件资源抢占上达成平滑的异步协同，是目前高频迭代的最高优痛点。
3. **多硬件与异构后端适配**：摆脱单一的 NVIDIA 依赖，针对华为昇腾 NPU 原生适配 MoE LoRA 或权重合并，正在成为国产化 RL 框架的核心竞争力（verl, AReaL）。

## 差异化定位分析

1. **verl & TRL（应用与算法创新前沿）**：两者均致力于提供 SOTA 算法的试用环境，但 TRL 更注重基于 HuggingFace 生态构建通用底座（如近期大改 `DistillationTrainer`）；而 verl 凭借对 Ray + Megatron/FSDP 的双引擎支持，在跨硬件和大规模 Agentic RL 场景中占据工程优势。
2. **AReaL & slime（硬核底层与推训协同））：**这两个项目不约而同地将目光瞄准了“MoE 架构的在线 RL 训练”。slime 极其聚焦于推理引擎（如 FlashInfer/SGLang）在权重热更新时的张量并行切片正确性；而 AReaL 则更宏观，强调系统级的容错（如屏蔽残缺样本）和算力极限压榨。
3. **ROCK（Agent 环境基座）**：跳出了模型训练的范畴，ROCK 定位于 RL 运行时的“资源控制与生命周期管理”，通过异步镜像 Commit 和兼容 E2B 协议，试图成为大厂级 Multi-Agent 交互的标准沙箱。
4. **SB3, Gymnasium & rl_games（经典 RL 基石）**：专注于非 LLM 类任务（如机器人控制、游戏 AI），定位在于保障 API 契约的绝对稳定与伪随机数分布的严谨性，是检验底层算法可复现性的黄金标尺。

## 社区热度与成熟度

- **现象级热度（成熟期的狂飙）**：**verl** 和 **TRL** 已具备极高的社区采用度，Issue 讨论不仅停留在“怎么用”，更多聚焦于超大参数量下的显存溢出（OOM）、多模态报错等深水区问题，展现出用户群体向极客和高级研发转移的趋势。
- **工程化深水区（隐忍发力）**：**AReaL, ROCK, slime** 在社区动静上相对安静（Issue 较少或无），但 PR 质量极高且直击系统级痛点。这表明其主要由大厂内部团队（如阿里、字节、清华）或硬核开发者驱动，处于从“能用”向“千万级 GPU 规模好用”蜕变的攻坚期。
- **稳态维护（极高成熟度）**：**SB3, Gymnasium, rl_games, Open Instruct** 等项目 API 已经固化，日常仅为边缘边界修补或 CI/CD 算力升级。它们不需要高频互动，因其早已成为各自领域的默认底层标准。

## 值得关注的趋势信号

1. **LLM 框架的“Agent 化”演进**：无论是 TRL 引入拥有循环的智能体支持，还是 verl 优化超长 System Prompt，都表明 RL 框架正在从单一的“对齐人类偏好（RLHF）”向“工具调用与多轮环境探索的 Agentic RL”全面转型。
2. **异步推理生成成为破局关键**：面对 PPO/GRPO 训练中极长的 Rollout 等待，异步推理生成（如 `AsyncGRPOTrainer`）正在重塑底层的数据流转架构。谁能最高效地解耦推理与训练的资源互锁，谁就能主导下一代框架。
3. **训练安全与配置防御成为必修课**：torchtune 暴出的 RCE 漏洞是一个危险信号。随着 RL 实验高度依赖共享的 YAML 配置和环境镜像，框架层面的供应链安全、沙箱隔离（如 ROCK）将成为企业应用前必须扫清的雷区。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (github.com/alibaba/ROCK) RL 开源生态日报**
📅 日期：2026-07-24

---

### 1. 今日速览
过去 24 小时内，ROCK 项目维持了高频的维护与迭代节奏，共处理了 **5 条 Issues**（4 条已关闭，1 条新增）和 **6 条 PR**（全部合并/关闭），无新版本 Release。今日的核心工作聚焦于 **沙箱控制平面的功能增强（异步化、GPU 状态透出、动态配置）以及对 E2B 协议的兼容性拓展**。

---

### 2. 版本发布
无（过去 24 小时内未发布新版本）。

---

### 3. 重点 Issues
今日的 Issue 集中反映了 RL 基础设施在分布式环境下的实际工程痛点：

*   🌟 **[OPEN] feat: add E2B sandbox control-plane API compatibility** ([#1293](alibaba/ROCK Issue #1293))
    *   **摘要**：提出为 ROCK 沙箱控制平面引入 E2B 协议的兼容层。这将允许现有的 E2B 生命周期客户端无缝接入 ROCK 的沙箱能力，极大降低用户迁移成本，扩展生态兼容性。
*   **[CLOSED] Make sandbox image commits asynchronous** ([#1279](alibaba/ROCK Issue #1279))
    *   **摘要**：解决大镜像同步 commit 导致 Proxy 超时的痛点。提出将 Docker commit 和 push 异步化，并在 worker 本地持久化生命周期状态。
*   **[CLOSED] Expose GPU resources in sandbox status responses** ([#1285](alibaba/ROCK Issue #1285))
    *   **摘要**：要求在 `get_status` API 的响应中暴露 `num_gpus` 和 `accelerator_type`，解决客户端无法直接查询 RL 训练时 GPU 分配状态的问题。
*   **[CLOSED] [Bug] Sandbox start_time is not refreshed after restart** ([#1287](alibaba/ROCK Issue #1287))
    *   **摘要**：修复沙箱重启后状态机保留了旧 `start_time` 的 Bug，确保运行时间的精准计算。
*   **[CLOSED] [Feature] Support dynamic max_allowed_spec configuration through Nacos** ([#1290](alibaba/ROCK Issue #1290))
    *   **摘要**：提出通过 Nacos 动态配置沙箱最大允许规格（`max_allowed_spec`），摆脱静态本地 YAML 限制，提升资源管控灵活性。

---

### 4. 关键 PR 进展
今日所有 PR 均已 CLOSED（合并），执行效率极高，主要涵盖以下技术实现：

*   🔀 **feat: add E2B sandbox control-plane API compatibility** (对应 Issue #1293 的前置或快速跟进)
    *(注：结合 Issue 趋势，E2B 兼容层的实现正在快速推进)*
*   🔀 **Expose GPU resources in sandbox status responses** ([PR #1286](alibaba/ROCK PR #1286))
    *   **进展**：已在元数据及状态响应模型中增加 `num_gpus` 和 `accelerator_type`，并打通了 Direct、Proxy 和 OpenSandbox 路径的状态查询。
*   🔀 **Make sandbox image commits asynchronous** ([PR #1280](alibaba/ROCK PR #1280))
    *   **进展**：实现了通过 Rocklet execute API 异步分发 commit 和 push 任务，保留 Admin 角色的旧版同步 API，解耦了 Ray 与 Redis 任务状态。
*   🔀 **feat: support max allowed spec from Nacos** ([PR #1291](alibaba/ROCK PR #1291))
    *   **进展**：落地了基于 Nacos 的动态资源配置功能，关闭 #1290。
*   🔀 **fix(sandbox): refresh start time after restart** ([PR #1289](alibaba/ROCK PR #1289))
    *   **进展**：修复了沙箱重启后的时间戳刷新逻辑，关闭 #1287。
*   🔀 **fix(ray): kill actor when submit metadata fetch fails** ([PR #1288](alibaba/ROCK PR #1288))
    *   **进展**：修复了在元数据获取失败时 Ray Actor 的异常挂起问题，将其主动 Kill 以触发重试，关闭 #1283。
*   🔀 **debug python ci runner** ([PR #1292](alibaba/ROCK PR #1292))
    *   **进展**：常规 CI 流水线调试与维护。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
作为专注于强化学习的底层基座，ROCK 今天的更新精准切中了 **RL 训练与推理的两个核心痛点：资源控制与镜像管理**。

1.  **算力调度的透明化与动态化**：透出 GPU 资源状态（[PR #1286](alibaba/ROCK PR #1286)）以及支持 Nacos 动态 spec 配置（[PR #1291](alibaba/ROCK PR #1291)），意味着在做大规模 Multi-agent 或分布式 RL 时，算力监控和资源动态扩缩容变得更加可控。
2.  **镜像与环境的工程破局**：RL 环境镜像通常极其庞大（包含复杂的系统依赖），同步 Commit 极易引发系统超时崩溃。ROCK 引入异步镜像持久化机制（[PR #1280](alibaba/ROCK PR #1280)），是解决大规模 RL 环境 Snapshot 存储的关键工程突破。
3.  **拥抱开源生态标准**：积极兼容 E2B 沙箱控制平面协议（[Issue #1293](alibaba/ROCK Issue #1293)），展现了 ROCK 拒绝“重复造轮子”的野心。这使其有能力成为承接前沿 AI Agent 开发框架（如 LangChain, AutoGen 等）的标准运行时底座。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime 项目 RL 生态日报（2026-07-24）**

以下是今日（基于过去24小时数据）的 `THUDM/slime` 项目动态技术摘要。

### 1. 今日速览
过去 24 小时内，slime 仓库无新增 Issue、无新版本发布。**PR 活动集中在底层推理引擎的权重更新优化上**，共记录 3 次 PR 状态更新（1 条合并/关闭，2 条持续迭代）。当前开发重心明显聚焦于**强化学习训练（RL）与推理引擎（如 SGLang、FlashInfer）结合时的权重热更新稳定性**。

### 2. 版本发布
**无。**
当前仓库未发布新的 Release 版本，推测核心团队仍在攒积底层修复与新特性，准备下一次大版本更新。

### 3. 重点 Issues
**无。**
过去 24 小时无新增或更新的 Issue。这可能表明当前主干分支处于相对稳定的状态，或社区反馈的重心目前直接通过 PR 代码贡献来解决。

### 4. 关键 PR 进展
今日的 PR 动态展现了 slime 在处理超大规模 RL 训练时，解决底层推理引擎张量并行（TP）与显存布局痛点的技术细节：

*   **#2228 [CLOSED] 升级 CI 测试镜像中的 SGLang 至 v0.5.15.post1**
    *   **作者**: zhuzilin
    *   **分析**: 持续集成（CI）环境跟进 SGLang 最新补丁版。在 RL 训练中，Rollout 引擎的版本兼容性至关重要，此举确保了 slime 与最新 SGLang 推理框架的无缝对接。
    *   **链接**: [THUDM/slime PR #2228](https://github.com/THUDM/slime/pull/2228)

*   **#2192 [OPEN] 修复 BF16 权重热更新后的 FlashInfer MoE 布局还原问题**
    *   **作者**: LLMShark
    *   **分析**: 这是一个关键的性能与正确性修复。在 BF16 RL 在线热更新场景下，使用 `flashinfer_trtllm` MoE 后端时，slime 此前的逻辑未在拷贝更新权重后将其还原为后端特定的运行态布局。该 PR 完善了这一流程，**避免了运行时的额外开销或计算错误**。
    *   **链接**: [THUDM/slime PR #2192](https://github.com/THUDM/slime/pull/2192)

*   **#2193 [OPEN] 修复 GLU rechunk 过程中保持 Grouped MoE 专家轴的问题**
    *   **作者**: LLMShark
    *   **分析**: 深入张量并行（TP）底层逻辑。当从 All-gather 恢复 `linear_fc1` 的 gate/up 分区顺序时，原有的 split 逻辑对 2D 稠密权重有效，但在处理复杂的 Grouped MoE 权重时存在维度切分缺陷。该 PR 修复了这一边界情况，**对支持 GLU 激活函数的现代 MoE 架构大模型（如 GLM 系列、Mixtral 等）的稳定 RL 训练具有关键意义**。
    *   **链接**: [THUDM/slime PR #2193](https://github.com/THUDM/slime/pull/2193)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
通过今日的代码动向，可以看出 slime 正在攻克**大模型强化学习落地的核心瓶颈——“训练-推理（Actor-Rollout）协同”**：

1.  **直击在线 RL 的工程痛点**：RL 训练（如 PPO/GRPO）需要高频进行 Actor 模型的参数同步（权重热更新）。slime 正在深度重构 `update_weight` 逻辑，这决定了 RL 训练的吞吐量与稳定性。
2.  **紧跟 SOTA 推理生态**：对 `SGLang` 和 `FlashInfer` MoE 相关机制的深度适配，表明该项目不局限于基础算法，而是在追求**极致的工程效率**。MoE 模型的 RL 训练是当前社区的难点，slime 在这一细分领域提供了硬核的底层支持。
3.  **健康的底层迭代节奏**：核心开发者通过精细的 PR 持续打磨 MoE 布局、张量并行切分等底层机制，说明项目正在厚积薄发，为下一代大模型的高效 RLHF/RLAIF 提供基础设施级别的保障。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这里是 2026-07-24 的 AReaL 强化学习开源生态日报摘要。

### 1. 今日速览
过去 24 小时内，AReaL 仓库共处理 **4 条 Issues**（2 新增，1 关闭）和 **13 条 PRs**（2 新增，2 关闭）。无新版本发布。社区焦点高度集中于 **混合专家与 MoE 架构适配**、**显存与内核级性能优化**，以及 **Rollout 数据一致性校验**。

### 2. 版本发布
* **无新版本发布**。当前代码仍在整合高优特性（如 AWEX 共置训练与 NPU MoE LoRA 支持），推测正在进行下一个大版本或迭代版的攒盘。

### 3. 重点 Issues
* **[Feature] 屏蔽不完整 rollout group 中的不可用样本** ([#1559](https://github.com/areal-project/AReaL/issues/1559))
  * **关注点**：针对 PPO 采样过程中因部分请求失败/超时导致的数据残缺问题。作者提议在 `areal/api/` 层面实现向后兼容的屏蔽机制，这是提升大规模分布式 RL 训练稳定性的刚需。
* **[Bug] Megatron–vLLM 权重同步要求 PP 尺寸匹配的异常** ([#1560](https://github.com/areal-project/AReaL/issues/1560))
  * **关注点**：暴露出当前 Megatron 后端与 vLLM 推理引擎在进行权重同步时，存在强制要求流水线并行（PP）尺寸一致的硬性限制，阻碍了非对称拓扑下的异构部署。
* **[Bug] CI 异常: A100 上 TE 2.16 升级导致 flash-attn 报错** ([#1494](https://github.com/areal-project/AReaL/issues/1494))
  * **关注点**：标记为 `stale`。由于 Transformer Engine (TE) 升级至 2.16，导致在 A100 上触发 `sglang` 的 `crd2idx` CUTE 内核错误，影响主线 CI 的 `test_gsm8k_grpo` 测试。

### 4. 关键 PR 进展
* **[性能优化] 降低 Megatron 训练显存峰值** ([PR #1555](https://github.com/areal-project/AReaL/pull/1555))
  * **进展**：融合了 FP32 词表并行 logprob 的存储与 LM Head 反向传播；并在分布式优化器中引入了分块（chunked）机制。直击大模型 RL 训练的核心痛点（LM Head 显存爆炸）。
* **[新特性] 支持 AWEX 共置 Actor-Rollout 训练** ([PR #1500](https://github.com/areal-project/AReaL/pull/1500))
  * **进展**：引入同 GPU 共置（Colocate）策略，让 Megatron Actor 和 SGLang 推理引擎时间片共享同一个设备，基于 AWEX 实现权重同步。这是极高频权重同步场景（如 RLOO/PPO 迭代）下的极致压榨算力方案。
* **[新特性] 为 NPU 添加合并式 MoE LoRA 支持** ([PR #1561](https://github.com/areal-project/AReaL/pull/1561))
  * **进展**：将 Ascend (昇腾) 的合并 LoRA 训练路径迁移至 v1.0.4 代码库，完善了国产芯片在 MoE 架构下的推训一致性与在线权重合并同步。
* **[工程修复] PPO Loss 聚合维度可配置化** ([PR #1546](https://github.com/areal-project/AReaL/pull/1546))
  * **进展**：打破了 AReaL 硬编码全局 token 均值计算 Actor 策略梯度的限制，允许开发者配置 loss 聚合的粒度（如按 sequence 聚合），对序列长度方差极大的 RLHF 任务非常关键。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **切入“显存与算力墙”痛点**：AReaL 正在推进的 AWEX 共置训练（PR #1500）与显存峰值消减（PR #1555），代表了目前大模型 RL 算法在底层工程上的最前沿探索。解决 Actor 与 Rollout 引擎的显存抢占问题，是迈向万亿参数模型 RL 训练的必经之路。
2. **注重分布式训练的“容错与一致性”**：从屏蔽残缺 Rollout 样本（Issue #1559）、严格校验 Provider 采样证据（PR #1554），到修复孤儿重试请求（PR #1498），项目在数据流层面构筑了极强防御机制。在千卡规模下，这种工业级的数据“Fail-Safe”设计比单纯的算法创新更具实战价值。
3. **对底层后端的广泛兼容性**：项目同时发力于 vLLM / SGLang 推理引擎的无缝对接、昇腾 NPU 的 MoE LoRA 支持（PR #1561），以及对 Megatron 桥接机制的解耦，展现出极强的多硬件、多后端适配的“超级胶水层”潜质。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL (Hugging Face) 强化学习生态项目 2026-07-24 日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，TRL 仓库共有 17 条 Issue 更新，48 条 PR 更新，无新版本发布。
- **核心动向**：今日项目开发节奏高度集中在 **`DistillationTrainer`（蒸馏训练器）的重构与稳定化**。核心维护者 @qgallouedec 密集提交了超过 10 个串联 PR，将其底层生成逻辑全面对齐 GRPO 架构。同时，针对异步 GRPO（`AsyncGRPO`）、vLLM 协同以及视觉语言模型（VLM）的兼容性修复也是当前重点。

### 2. 版本发布
- **无新版本发布** (最近开发活动均合入 `main` 分支)。

### 3. 重点 Issues
今日更新的 Issues 集中反映了深度集成 vLLM 带来的边缘 Bug 以及社区对前沿 RL 算法的需求：

- **VLM 与 vLLM 适配问题**：
  - **[#6519](https://github.com/huggingface/trl/issues/6519)**: `GRPOTrainer` 和 `RLOOTrainer` 在处理多模态数据时，无法正确提取图像路径/URL，导致 vLLM 生成路径崩溃。
  - **[#6028](https://github.com/huggingface/trl/issues/6028)**: `AsyncGRPOTrainer` 无法训练视觉语言模型（`*ForConditionalGeneration`），存在权重同步键值不匹配的 Bug。
- **vLLM 协同与异步训练痛点**：
  - **[#6166](https://github.com/huggingface/trl/issues/6166)**: GRPO Trainer 在 `vllm_mode="colocate"` 下，因 vLLM 返回 NaN token logprob 导致 `NoneType` 数据类型推断崩溃。
  - **[#5863](https://github.com/huggingface/trl/issues/5863)**: `AsyncGRPOTrainer` 从断点恢复时，会愚蠢地重算所有历史 batch 的 vLLM 推理，极大浪费算力。
- **前沿算法与底层架构请求**：
  - **[#6449](https://github.com/huggingface/trl/issues/6449)**: 核心开发者发起提案，计划重构 `DistillationTrainer` 并将其提升为稳定 API（顺应 Qwen3.x、DeepSeek-V4 等模型均采用策略蒸馏的趋势）。
  - **[#6473](https://github.com/huggingface/trl/issues/6473)**: 社区请求实现单次 Rollout 异步优化（基于论文 arXiv:2607.07508）。
  - **[#4387](https://github.com/huggingface/trl/issues/4387)**: 确认 FSDP2 稳定后，决定移除 FSDP1 以减轻维护负担。

### 4. 关键 PR 进展
今日的 PR 动态呈现出极强的工程架构规划与执行特征，值得 RL 框架开发者借鉴：

- **`DistillationTrainer` 重构矩阵 (目标：PR [#6449](https://github.com/huggingface/trl/issues/6449))**
  维护者采用了极其严谨的“原子化串联 PR”策略，逐步将 GRPO 的生成栈移植到蒸馏训练器：
  - **[#6522](https://github.com/huggingface/trl/pull/6522)**: 将生成路径切换至 GRPO 的技术栈，并删除旧的 buffer。
  - **[#6523](https://github.com/huggingface/trl/pull/6523)**: 统一生成参数字典，补齐 `min_p` / `repetition_penalty` 等配置项的消费逻辑。
  - **[#6508](https://github.com/huggingface/trl/pull/6508)**: 将 `ServerDistillationTrainer` 冻结为自包含状态，防止重构期间的依赖破坏。
  - **[#6497](https://github.com/huggingface/trl/pull/6497)**: 将损失计算键值对齐 GRPO 的 `prompt_ids`/`completion_ids` 布局。
- **算法 Loss 修复与功能增强**：
  - **[#6024](https://github.com/huggingface/trl/pull/6024)** & **[#5890](https://github.com/huggingface/trl/pull/5890)**: 集中修复了 DAPO/CISPO/VESPO 等高级策略 Loss 在梯度累积步数不匹配时的错误缩放问题，并拉齐了 Liger Kernel 路径的归一化逻辑。
  - **[#6520](https://github.com/huggingface/trl/pull/6520)**: 修复多模态图像路径在 vLLM 生成后端的序列化 Bug。
  - **[#6420](https://github.com/huggingface/trl/pull/6420)**: 为 `AsyncGRPOTrainer` 引入了“拥有循环的智能体”（loop-owning agent）实验性支持，允许外部智能体运行自己的工具循环（如 `opencode`）。
  - **[#6172](https://github.com/huggingface/trl/pull/6172)**: 增加了针对 FSDP2 下 `chunked_nll` 交叉熵大词表分块计算的全量聚合防御性测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **定义现代 RLHF 工程范式**：从今日 PR 动态可以看出，TRL 不仅仅是封装算法，而是在解决极其硬核的分布式系统工程问题——特别是 **`vLLM 异步推理` 与 `FSDP2/DeepSpeed 梯度更新` 解耦**。这是目前大模型 RL 训练（如 GRPO/DAPO）爆显存、卡死的核心痛点。
2. **拥抱多模态 RL**：VLM（视觉语言模型）在强化学习中的权重同步和生成解析（Image URL 解析）正被快速修补完善。
3. **从算法库向基础设施演进**：通过重构 `DistillationTrainer` 并对齐 GRPO 栈，TRL 正在抽象出一个**“模型交互层的通用底层架构”**。未来无论是 On-policy SFT、策略蒸馏还是复杂的 RL，都能复用同一套高效的数据流转与生成框架。对于需要定制化 RL 训练流的研究员和工程师，TRL 的代码库是当前工业界最佳参考。

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

这里是为您生成的 verl 项目 RL 日报摘要（2026-07-24）：

# verl RL 日报摘要 (2026-07-24)

## 1. 今日速览
- **Issue 活跃度**：过去 24 小时共有 74 条 Issue 更新。社区讨论热点集中于大模型（如 Qwen3-VL、DeepSeek V3.1）的显存溢出（OOM）、多轮对话 rollout 以及 LoRA 训练性能瓶颈。
- **PR 活跃度**：过去 24 小时共有 35 条 PR 更新。开发者正积极推进底层硬件适配（如华为昇腾 NPU）、新版注意力机制（如 MAGI attention）以及分布式训练框架（Megatron/FSDP）的深度优化。
- **版本发布**：过去 24 小时无新版本发布。

## 2. 版本发布
- **最新 Releases**：无。

## 3. 重点 Issues
- **[训练性能] LoRA 训练严重劣化的探讨**
  - [#4033](https://github.com/verl-project/verl/Issue/4033) 开发者反馈在使用 GSPO 算法时，加入 LoRA 配置（`lora_rank=16`）相比全参数训练慢 4 倍。
  - [#4085](https://github.com/verl-project/verl/Issue/4085) 反馈在 v0.6.0 版本中使用 GRPO+LoRA 时，生成 阶段极其缓慢，而退回 v0.5.0 表现正常。这表明近期版本在 LoRA 与推理引擎的交互上可能存在性能回退。
- **[部署兼容] vLLM/SGLang 异步 Rollout 性能与报错**
  - [#4264](https://github.com/verl-project/verl/Issue/4264) 深入测试了 vLLM 引擎在同步与异步模式下的表现，发现异步模式下的 rollout 性能显著低于同步模式，尤其在长响应场景中。
  - [#4082](https://github.com/verl-project/verl/Issue/4082) 报告使用 SGLang 异步模式时触发严重错误。
- **[多模态 BUG] VL 模型训练异常**
  - [#4193](https://github.com/verl-project/verl/Issue/4193) 在使用 verl 进行 Qwen3-VL-8B 训练时，发现模型表现经常剧烈波动，怀疑与框架版本有关。
  - [#4256](https://github.com/verl-project/verl/Issue/4256) 在使用 SGLang 作为 rollout engine 训练 Qwen3-VL 时，模型无法接收到图像输入。

## 4. 关键 PR 进展
- **[核心功能] 引入 Prefix-Tree MAGI Attention**
  - [PR #6689](https://github.com/verl-project/verl/PR/6689) 为 verl 的 SFT 和 GRPO 训练引入了基于前缀树的共享前缀去重技术（MAGI attention）。这对 Agentic RL 等具有超长共享 System Prompt 的场景将带来显著的显存和算力优化。
- **[引擎升级] 大幅升级 vLLM 与 Megatron 版本**
  - [PR #7101](https://github.com/verl-project/verl/PR/7101) 提交了将内置 vLLM (`0.24.0`) 和 Megatron (`core_v0.18.0`) 进行重大版本升级的 PR，以确保框架对最新 LLM 架构的支撑。
- **[分布式优化] Megatron 引入 Muon 优化器与变长序列打包**
  - [PR #7120](https://github.com/verl-project/verl/PR/7120) 为 Megatron 后端增加了 Muon 优化器支持，打破了以往仅依赖 AdamW 类优化器的局限。
  - [PR #7135](https://github.com/verl-project/verl/PR/7135) 增加了显式的 packed-sequence (`cu_seqlens`) 支持，允许在去除 padding 的前向传播中保留序列边界，大幅提升训练效率。
- **[底层修复] 训练稳定性和 Checkpoint 恢复**
  - [PR #7013](https://github.com/verl-project/verl/PR/7013) 修复了 PPO 中 Adaptive KL Controller 状态在断点续训时未被正确保存的问题，避免了恢复训练后 KL 惩罚系数重置导致的模型行为突变。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **前沿算法的极速工程化落地**：verl 正在快速吸收学术界和工业界的前沿成果。从对 Muon 优化器的支持，到 DAPO 算法复杂 Replay Buffer 的精细化控制（见 [PR #7082](https://github.com/verl-project/verl/PR/7082)），它提供了极低门槛的 SOTA 算法试用环境。
2. **Agentic RL 基建的深化**：通过引入 MAGI Attention 等长上下文去重技术，以及对多轮对话 Tool Calling（如 Gemma4 工具解析）的完善，verl 正在夯实成为 Agent 训练首选框架的地位。
3. **跨硬件与推理引擎的解耦能力**：项目不仅深度适配 NVIDIA GPU + Ray 的大规模集群，还在积极推进对华为昇腾 NPU 的原生支持与修复。同时，它对 vLLM 和 SGLang 的双引擎支持，使其在探索异步生成、高吞吐推理与 RL 结合的路径上保持领先。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 2026-07-24 torchtune 项目 RL 生态日报摘要。

### 1. 今日速览
- **整体活跃度**：过去 24 小时内，项目无新增或更新的 Issues，无新版本发布。
- **核心动向**：项目当前的核心演进聚焦于**底层代码安全性与鲁棒性**。有 1 条关于修复高危安全漏洞的 PR 处于打开状态并正在进行代码审查。

### 2. 版本发布
- **今日无新版本发布（0 个）**。

### 3. 重点 Issues
- **过去 24 小时无 Issue 更新（0 条）**。

### 4. 关键 PR 进展
**#2973 [OPEN] [CLA Signed] fix(security): restrict recipe `_component_` imports to trusted roots**
- **作者**: Solaris-star
- **链接**: [meta-pytorch/torchtune PR #2973](https://github.com/pytorch/torchtune/pull/2973)
- **技术摘要**: 这是一个关键的安全修复。torchtune 的 Recipe 配置系统此前通过 `import_module` 解析 `_component_` 参数，且**缺乏白名单机制（allowlist）**。这会导致在加载或验证不受信任的 YAML 配置文件时，攻击者可利用此机制导入任意模块、执行顶层代码，或调用如 `os.system` 等危险函数（任意代码执行 RCE 漏洞）。该 PR 引入了安全根目录限制，强制多部分（及非本地单部）组件路径必须在受信任的命名空间内进行解析。
- **生态意义**: 在强化学习和 LLM 微调场景中，研究人员经常共享和复用 YAML 配置文件。此 PR 从底层阻断了恶意配置文件引发的安全风险，保障了本地训练环境的系统安全。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **强化学习与微调的安全基石**：RLHF/DPO 等对齐技术高度依赖分散的训练配方与超参配置。PR #2973 表明 torchtune 团队正在严格修补配置解析层的安全漏洞，这为大模型在敏感数据环境下的安全微调提供了基础保障。
2. **防御“供应链与配置污染”**：在现代 RL 生态中，开源配置文件的互换性极强。torchtune 主动拦截通过 `import_module` 进行非受控对象实例化的攻击向量，引领了 AI 训练框架在代码与配置隔离上的安全标准。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是 2026-07-24 的 Open Instruct 强化学习开源生态日报摘要：

### 1. 今日速览
*   **整体活跃度**：保持低活跃度维护状态。过去 24 小时内无新增 Issue，无新版本 Release，仅有 1 项基础设施相关的 PR 更新。
*   **核心动态**：开发者正在推进底层容器镜像的升级，引入了对 CUDA 13 的构建支持，以满足不断迭代的底层算力环境需求。

### 2. 版本发布
*   **无新版本发布**（近 24 小时内 Releases 数量：0）。

### 3. 重点 Issues
*   **无 Issue 更新**（近 24 小时内 Issues 更新数量：0）。

### 4. 关键 PR 进展
*   **[OPEN] Publish automatic CUDA 13 Beaker image** (`#1783`)
    *   **作者**: mnoukhov
    *   **链接**: [allenai/open-instruct PR #1783](https://github.com/allenai/open-instruct/pull/1783)
    *   **技术摘要**: 本 PR 旨在重构项目的 CI/CD 构建流水线。核心改动包括：保留默认的 `open_instruct_auto` 基于 CUDA 12 构建，并为其增加显式别名 `open_instruct_auto_cuda12`；在 merge-queue 集成任务成功后，触发独立的 job 构建 CUDA 13 环境；最终使用独立的 BuildKit 缓存发布 `open_instruct_auto_cuda13` 镜像，并包含基础的 smoke-test（冒烟测试）。
    *   **生态意义**：确保 Open Instruct 能够无缝兼容最新的 NVIDIA CUDA 13 工具链，为后续进行大规模强化学习（RL）训练和推理提供更新的底层容器支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **RLHF/DPO 训练的基础设施标杆**: Open Instruct 由 Allen AI (Ai2) 团队主导，提供了高度标准化且可复现的大模型对齐（如 SFT、RLHF、DPO）全链路代码库。
*   **底层的持续工程演进**: 尽管当前处于功能迭代平缓期（如今日仅推进 CUDA 13 镜像适配），但项目团队对底层异构算力集群（如 Ai2 自建的 Beaker 算力平台）的持续支持，证明了其在高性能计算环境的可靠性维护。
*   **开源可复现性的核心节点**: 面对快速变化的强化学习微调算法生态，Open Instruct 始终是学术界和工业界验证新模型对齐策略时最常依赖的底层代码库之一。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026-07-24 RL 开源生态日报摘要：

# RL 日报：rl_games 生态追踪 (2026-07-24)

**1. 今日速览**
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库动态趋于平缓，无新增 Issue、无新版本发布。核心精力集中在现有代码库的底层修复与算法健壮性提升上，有 1 个关键 PR 处于活跃更新状态。

**2. 版本发布**
*   **无新版本发布**。最新的代码改动仍处于 Review 与合并前的准备阶段。

**3. 重点 Issues**
*   **无活跃 Issue**。过去 24 小时内未产生新的问题报告或讨论。

**4. 关键 PR 进展**
*   **[#362] [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者**: ViktorM
    *   **更新时间**: 2026-07-23
    *   **链接**: [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
    *   **技术摘要**: 这是一个关于 **PPO 算法在环境自动重置机制下数据正确性** 的核心修复。在使用 envpool 或原生 Gymnasium 1.x 向量环境时，Episode 结束时的 Reset 步骤会产生“垃圾数据行”（环境忽略动作、填充虚拟 reward、obs 复用上一回合的终止 obs）。该 PR 的核心改动是**将这些无效行从 PPO 的 rollouts 训练数据中屏蔽**，防止错误信号污染策略学习。此外，该 PR 还引入了**标量化 sigma 参数化**。
    *   *注：这是 autoreset 正确性工作的一部分，此前 SAC 算法的同类修复已通过提交 b1ed755 合并。*

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **底层正确性的严格把控**：随着 RL 生态（如 Gymnasium 1.x 和 Envpool）对环境并行处理和 `autoreset` 机制的标准化，旧有的 RL 库极易引入隐蔽的训练 Bug（如 PR #362 修复的终止状态数据污染问题）。rl_games 正在积极跟进并修复这些底层逻辑，确保在高吞吐量训练下的数学严谨性。
*   **极致的吞吐量与工业级可靠性**：作为 NVIDIA Isaac Gym / Isaac Lab 生态中最核心、最常用的 RL 算法库之一，rl_games 一直以极高的 GPU 利用率和采样效率著称。它对向量化环境边角问题的深度修复，巩固了其作为大规模、高并发 RL 训练（尤其是机器人模拟任务）首选基线的地位。
*   **算法实现的现代化**：从 PR 中引入的 `scalar sigma parametrization` 可以看出，项目仍在持续打磨和优化 PPO 等基础算法的内部实现，以适应更广泛的动作空间探索需求，对于 RL 工程师来说具有极高的参考与直接部署价值。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 Gymnasium 项目 2026-07-24 强化学习（RL）生态日报摘要：

### 1. 今日速览
*   **Issues 动态**：过去 24 小时内无新增或更新的 Issue（0 条）。
*   **PR 动态**：处理/更新了 1 个 PR，主要聚焦于底层基础空间（Spaces）的边界异常处理。
*   **版本发布**：无新版本发布。

### 2. 版本发布
**无。**
项目当前处于稳定维护期，今日未发布新的 Release 或 Tag。

### 3. 重点 Issues
**无。**
过去 24 小时内社区无活跃的 Bug 反馈或功能讨论。这通常表明 API 当前处于高度稳定状态，阻塞性的社区痛点较少。

### 4. 关键 PR 进展
**[#1648] [OPEN] Fix `Discrete.contains` raising `OverflowError` for out-of-dtype ints**
*   **作者**: nikolauspschuetz
*   **链接**: [Farama-Foundation/Gymnasium PR #1648](https://github.com/Farama-Foundation/Gymnasium/pull/1648)
*   **技术摘要**: 该 PR 修复了 `Discrete.contains(x)` 方法的一个边界条件 Bug。在当前实现中，当传入的 Python 原生 `int` 超出该 Space 所定义的 C 类型 dtype（如 `int32` 或 `int64`）的最大表示范围时（例如传入 $10^{20}$），系统会抛出 `OverflowError`。该修复确保方法能正确捕获此类异常并按预期返回 `False`，这对于强化学习环境中的动作空间校验和无效动作屏蔽至关重要，有效防止了策略网络输出超出预期范围的极值时导致训练进程崩溃。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 作为 OpenAI Gym 的官方继任者，其核心价值不在于日常的高频迭代，而在于**生态底座的标准统一**。
*   **API 契约的稳定性**：今日的 PR #1648 是一个典型的“长尾边界防御”。在 RL 训练中，算法探索极端动作或状态空间溢出是常见的底层崩溃源。社区对这种底层细节的持续修复，保证了 Gymnasium 能够提供极其健壮的 API 契约。
*   **下游依赖的核心**：当前主流的 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）均强依赖 Gymnasium 的 API 标准。它的稳定性直接决定了整个开源 RL 训练栈的可靠性。持续关注 Gymnasium 的底层变更，有助于 RL 算法工程师和研究员预防潜在的隐式 Bug。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

以下是为您生成的强化学习（RL）开源生态日报摘要：

### 🤖 RL 开源生态日报：Stable Baselines3 (2026-07-24)

#### 1. 今日速览
过去 24 小时内，Stable Baselines3（SB3）仓库活动集中在底层基础架构修复与核心环境机制的优化上。新增 0 个版本发布，处理/更新了 1 条 Issue 和 2 条 Pull Request。核心看点在于针对 `VecEnv` 随机数种子生成机制的潜在 Bug 修复方案，以及近期工具链升级引发的 Dockerfile 构建修复。

#### 2. 版本发布
**无新版本发布。** 仓库当前处于日常维护与开发分支迭代阶段。

#### 3. 重点 Issues
**#2268 [Bug]: VecEnv sub-environment seeds overlap across runs with adjacent base seeds**
- **作者**: abaisero | **状态**: OPEN
- **技术摘要**: 发现了 SB3 在并行环境（`VecEnv`）中传统的种子生成策略 (`seed + i`) 存在严重逻辑漏洞。在标准的 RL 评估流程（如扫描 `seed=0..N`）中，相邻的基础种子会导致不同 Run 之间的子环境发生大量随机序列重叠，破坏了多次独立评估的统计学意义。
- **链接**: [DLR-RM/stable-baselines3 Issue #2268](https://github.com/DLR-RM/stable-baselines3/issues/2268)

#### 4. 关键 PR 进展
- **#2271 Add opt-in independent_seeds to VecEnv.seed and make_vec_env**
  - **作者**: nikolauspschuetz | **状态**: OPEN
  - **技术摘要**: 直接响应 Issue #2268。提出了向后兼容的**可选参数 (`opt-in`)** `independent_seeds`。开启后，底层将废弃 `seed + i` 方案，改用 NumPy 官方推荐的 `np.random.SeedSequence` 来派生统计学上完全独立、互不重叠的子环境随机种子。这是 RL 严格可复现性方面的核心改进。
  - **链接**: [DLR-RM/stable-baselines3 PR #2271](https://github.com/DLR-RM/stable-baselines3/pull/2271)

- **#2272 Fix Docker build: add --system to uv pip uninstall opencv-python**
  - **作者**: nikolauspschuetz | **状态**: OPEN
  - **技术摘要**: 基础设施修复。向 `Dockerfile` 中的 `uv pip uninstall opencv-python` 命令补齐了 `--system` 标志。修复了新版 `uv` 包管理器在非虚拟环境（容器环境）下直接执行卸载操作时的报错问题，保障 CI/CD 容器镜像的顺利构建。
  - **链接**: [DLR-RM/stable-baselines3 PR #2272](https://github.com/DLR-RM/stable-baselines3/pull/2272)

#### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前 RL 算法框架（如 CleanRL, Tianshou, RLlib）竞争激烈的生态中，SB3 依然凭借其**工业级的稳定性和绝对的代码可靠性**保持头部地位。今日的动态完美印证了这一点：
1. **严苛的实验严谨性**：RL 训练对随机种子极为敏感，SB3 社区没有停留在“能跑就行”，而是深入解决了多环境并行时伪随机数重叠的底层统计学问题（PR #2271）。这对于依赖多次独立实验取均值与方差的严谨学术研究和工业落地至关重要。
2. **极佳的向后兼容哲学**：在引入 NumPy 高级随机数生成机制时，采用 `opt-in` 设计，保持了 API 的高度一致性，没有制造破坏性更新，降低了用户迁移成本。
3. **紧跟现代 Python 工具链**：项目已经将底层的包管理平滑迁移至高性能的 `uv` 工具，并持续进行容器化适配，表明其底层基础设施在持续现代化。

</details>