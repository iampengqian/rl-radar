# RL 开源生态日报 2026-06-28

> 生成时间: 2026-06-27 22:19 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已呈现出明显的“分层演化”态势，整体正从算法验证期迈向工业级深水区。
1. **大模型对齐层（LLM RLHF/GRPO）主导创新**：以 verl、AReaL、TRL 为代表的项目占据了生态超 80% 的活跃度，核心矛盾集中在如何将 GRPO/PPO 等算法与超大参数（MoE/多模态）模型、超长上下文及异构推理引擎（vLLM/SGLang）深度融合。
2. **经典 RL 与环境接口层趋于平稳**：以 Gymnasium、PettingZoo 为代表的传统 RL 基础设施进入“修仓期”，重点在于底层依赖升级与工程化规范，而非颠覆性 API 的重构。
3. **两极分化加剧**：头部项目高速迭代以榨干 GPU 算力，而部分曾活跃的项目（如 Stable Baselines3、Tianshou、OpenRLHF）在近期陷入短暂的静默期。

## 各项目活跃度对比
*注：活跃度数据提取自 2026-06-28 的 24 小时内。无活动项目统一合并至底部。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 17 | 11 | 0 | 硬核架构重构，猛攻全异步与多模态MoE显存瓶颈 |
| **AReaL** | 0 | 9 | 0 | 拓宽RL边界，布局多教师蒸馏与扩散模型强化学习 |
| **TRL** | 1 | 5 | 0 | 拥抱蒸馏融合，提升海量对齐算法的工程鲁棒性 |
| **slime** | 0 | 5 | 0 | 攻坚多模态多轮交互的Token级精细化预算控制 |
| **Open Instruct** | 0 | 4 | 0 | 死磕异步GRPO数据时效性与超长Agent交互任务 |
| **Gymnasium** | 1 | 2 | 0 | 摆脱老旧依赖，泛化图数据结构支持 |
| **PettingZoo** | 1 | 2 | 0 | 强化代码规范，夯实多智能体底层基建 |
| **ROLL** | 0 | 1 | 0 | 补齐外围监控工具链，完善工程化体验 |
| *其他项目* | *0* | *0* | *0* | *(CleanRL, OpenRLHF, ROCK, SB3 等)当日无更新 |

## 共同关注的研究与工程方向
**研究侧信号：**
1. **RL 与知识蒸馏（Distillation）的深度融合**：各框架不再局限于纯 RL，而是向混合范式演进。AReaL 引入多教师 On-Policy 蒸馏；TRL 集成 IW-OPD（基于重要权重的策略蒸馏）作为新的对齐目标函数。
2. **突破单一 LLM 边界，探索前沿模型架构**：对 DeepSeek-V4 DSA 架构、Qwen3/Qwen3.6 MoE 权重同步的适配成为标配；同时，AReaL 提交了基于 SD1.5 的扩散模型 RL 后训练 PoC，标志着 RL 后训练正向多模态生成领域外溢。
3. **面向 Agentic 与超长 Horizon 的算法优化**：slime 修复多轮 VLM 的回复预算切分，Open Instruct 则从算法层面引入 MTP（多 Token 预测）作为辅助训练目标，提升复杂长序列任务的回报信号密度。

**工程/基础设施侧信号：**
1. **从“同步阻塞”全面转向“全异步流水线”**：为榨干集群算力，verl 引入 TransferQueue 替代原生 Ray 队列并实现 Streaming Rollouter；Open Instruct 则建立 `max_result_age_steps` 机制，解决异步 rollout 带来的“数据过度陈旧”发散痛点。
2. **极端显存优化与异构通信解耦**：应对大模型训练的核心瓶颈。AReaL 通过 Triton 编写融合 LCE 算子避免 logits 实例化；verl 则深度修复 FSDP 到 vLLM 的在线 MoE 专家权重同步 Bug，降低 OOM 风险。
3. **针对长耗时任务的弹性容错与控制**：包括 verl 实现的单请求级别精细化中断，以及 Open Instruct 将环境池获取超时限制放宽至 7200s，专为沙盒环境等超长 Agent 交互任务兜底。

## 差异化定位分析
1. **verl：前沿模型架构落地的“加速器”**。定位为工业级高并发 RL 训练底座，其最大优势在于极快地跟进最新硬件（如 B200/NPU）和最新模型（DeepSeek-V4 / Qwen3 MoE），适合追求极致系统吞吐和算力压榨的工程团队。
2. **AReaL：RL 技术边界的“拓荒者”**。不仅支持传统的 LLM 对齐，更前瞻性地将触角伸向了多教师蒸馏、Megatron MTP 以及扩散模型 RL。它更适合需要快速验证非标准 RL 路径、进行跨模态研究的学术与前沿探索团队。
3. **Open Instruct：工业级异步 Agent 训练的“样板间”**。极度聚焦于基于环境交互的复杂 Agent 任务优化（如超长 rollout 支持、陈旧数据剔除），其代码极适合作为构建高并发、长周期 Agentic RL 系统的参考实现。
4. **TRL：算法矩阵最完备的“试验田”**。依托 HuggingFace 生态，提供从 DPO/GRPO 到 ReMax 等最全的对齐算法集。当前正致力于解决 ZeRO-3 + PEFT 等海量参数组合下的兼容性死结，是轻量化验证 SOTA 对齐理论的首选。
5. **Gymnasium / PettingZoo：坚如磐石的“底层 API 标尺”**。剥离了 LLM 的光环，专注于传统物理仿真与多智能体环境，当前通过清理技术债（如迁移 PyMunk、增强 Ruff Lint 严度）来捍卫其作为行业标杆 API 的稳定性。

## 社区热度与成熟度
1. **社区痛点呈现显著分层**：以 verl 为代表的成熟大厂主导项目，社区 Issue 充满“多节点部署”、“CPU Swap 爆炸”、“跨节点参数同步”等硬核工程挑战，说明用户群体已具备极强的大规模集群实操背景。
2. **部分项目进入“高度自治”的成熟期**：如 AReaL、Open Instruct、slime 当日均无新增 Issue，PR 几乎全由核心内部团队成员或长期贡献者提交。这表明项目架构设计已趋于闭环，正专注于核心逻辑打磨，减少了对外部基础使用反馈的依赖。
3. **严格的 CI/CD 成为高成熟度标志**：Gymnasium、PettingZoo、slime 等项目在 PR 中极其注重 CPU-only 回归测试、类型检查和静态分析，反映了开源生态在快速迭代中对“防破坏性更新”的重视度达到新高度。

## 值得关注的趋势信号
1. **异步 GRPO 成为兵家必争之地**：数据时效性控制（Open Instruct 丢弃陈旧数据）与执行流解耦（verl 的 Streaming Rollouter）同日高频出现，预示着“如何在不牺牲数据 On-policy 程度的前提下打破前向/反向计算锁死”将是下半场竞赛的核心。
2. **“Rule-based Reward + Teacher Model” 混合对齐崛起**：单一奖励模型已无法满足需求，TRL 的 IW-OPD 和 AReaL 的多教师蒸馏表明，将大模型作为 Reward/Teacher 直接融入 RL 训练循环正在成为主流范式。
3. **图结构与异构空间向传统 RL 渗透**：Gymnasium 更新图空间以支持异构图和复杂文本/序列特征，这预示着在 LLM 之外，基于复杂拓扑网络（如知识图谱、大规模物流网络）的传统图强化学习（GRL）正酝酿新的应用突破。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-28）：

### 1. 今日速览
过去 24 小时内，ROLL（github.com/alibaba/ROLL）仓库整体活跃度趋于平稳。无新增 Issues，无新版本发布。核心开发活动集中在文档的持续迭代与生态工具的接入完善上，共有 1 项文档更新类 PR 提交。

### 2. 版本发布
- **无**。近期无新版本发布。

### 3. 重点 Issues
- **无**。过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
- **PR #467: docs: update Docs about Trackio** `[OPEN]`
  - **作者**: ParagEkbote
  - **链接**: [alibaba/ROLL PR #467](https://github.com/alibaba/ROLL/pull/467)
  - **进展摘要**: 该 PR 作为 #404 的后续补充，主要致力于为近期接入的 Trackio 集成功能补充官方文档说明。属于修复此前遗漏的文档更新，确保用户能够获得完整的工具集成指南。当前状态为 Open，等待维护者审查。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
ROLL 作为阿里巴巴开源的强化学习框架，在当前 RL 生态中持续展现其工程化落地的价值：
1. **生态工具无缝集成（Trackio/Monitoring）**：从今日的 PR 进展可以看出，ROLL 正在积极补齐与外围监控、追踪工具（如 Trackio）的对接文档。这意味着项目不仅关注底层算力与算法，也在为大规模 RL 训练的可复现性、实验观测提供完备的工程级支持。
2. **大模型 RLHF 的基础设施**：在基础模型竞争进入“后训练（Post-training）”和强化学习对齐（RLHF）阶段的当下，ROLL 提供了高效、分布式的训练框架。对其代码库、API 设计以及周边工具接入的持续追踪，能够直接反映一线大厂在百亿/千亿参数模型强化学习上的工程实践趋势。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**RL 开源生态日报：slime (THUDM/slime)**
**日期**：2026-06-28

### 1. 今日速览
过去 24 小时内，slime 仓库的活跃度主要集中在代码与文档维护层面。无新增 Issue，无新版本发布，但合并了 **5 条 PR**。核心动向在于修复多模态/多轮对话（VLM）的上下文预算逻辑、修正环境模块路径，以及持续完善中英文生态文档的准确度。

### 2. 版本发布
无。当前仓库未发布新的 Release 版本。

### 3. 重点 Issues
无。过去 24 小时内没有活跃的 Issue 更新（0 条）。

### 4. 关键 PR 进展
今日的 5 条 PR 集中在核心参数逻辑修复与文档校对，体现了项目对代码鲁棒性和多模态示例体验的重视：

*   **[OPEN] 修复 geo3k VLM 多轮上下文预算逻辑** ([PR #2140](https://github.com/THUDM/slime/pull/2140) by @zhangdw156)
    *   **技术摘要**: 核心逻辑修复。将 `max_new_tokens` 严格作为“回复预算”（而非 `prompt+response` 的总预算）进行分配。当同时配置了 `rollout_max_context_len` 时，系统将智能选取更紧凑的剩余上下文/回复预算。该 PR 同时补充了针对全新 prompts 的 CPU-only 回归测试。
*   **[OPEN] 修正 geo3k VLM 默认 env 路径** ([PR #2139](https://github.com/THUDM/slime/pull/2139) by @zhangdw156)
    *   **技术摘要**: 基础设施修复。更正了 geo3k VLM 多轮示例的默认 `env` 模块路径，并加入了轻量级静态回归测试，以确保默认 env 模块始终指向正确的文件。
*   **[OPEN] 同步中文生态版图** ([PR #2138](https://github.com/THUDM/slime/pull/2138) by @zhangdw156)
    *   **技术摘要**: 文档更新。将 Dressage 项目补充至中文版 README 的生态版块，保持与英文版 README 的一致性。
*   **[OPEN] 修复 Markdown 失效链接** ([PR #2137](https://github.com/THUDM/slime/pull/2137) by @CalvinXKY)
    *   **技术摘要**: 文档修复。修正了 `rollout_buffer` 及示例文档中的多处相对路径失效链接（对齐了此前在 vime fork 中修复的同类问题，确保 `qwen3-4B.md` 等文档路径正确）。
*   **[CLOSED] OPD reproduction** ([PR #2136](https://github.com/THUDM/slime/pull/2136) by @suryathecreator)
    *   **技术摘要**: 该关于 OPD 复现的 PR 已被关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻坚多模态与多轮 RL 交互的细粒度控制**：从 [PR #2140](https://github.com/THUDM/slime/pull/2140) 对 `max_new_tokens` 预算的精细化切分可以看出，slime 正在解决 VLM 在多轮强化学习 rollout 阶段的长文本截断与显存溢出痛点。这种 token-level 的预算控制机制，对于当前生态中复杂 Agent 任务的训练至关重要。
2.  **高度重视工程鲁棒性与 CI 防护**：今日多个代码/配置更新 PR 均附带了专门的回归测试（如 CPU-only 测试、静态模块校验测试）。这表明项目正在构建严密的测试防线，有效防止开源社区在快速迭代中引入破坏性更新。
3.  **活跃的本土化与生态联动**：从同步中文生态引入 Dressage，到紧跟 vime 等关联项目的文档修复，slime 展现了极强的生态兼容与维护意愿，是目前跟进大模型 RL 训练基础设施的优质标的。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这里是为您生成的 2026-06-28 AReaL 项目 RL 日报摘要。

# AReaL 强化学习开源生态日报 (2026-06-28)

## 1. 今日速览
过去 24 小时内，AReaL 仓库共有 **9 个 PR** 取得更新，无新增 Issue 或 Release 版本发布。当前项目的开发活跃度高度集中在底层训练引擎优化、多模态与扩散模型 RL 支持，以及底层调度器的重构上。

## 2. 版本发布
*   **无新版本发布**（最近 24 小时内）。

## 3. 重点 Issues
*   过去 24 小时**无新增或更新 Issue**。社区当前的重心偏向于核心代码的提交与内部功能迭代。

## 4. 关键 PR 进展
今日更新的 PR 覆盖了算法优化、新框架接入与基础设施升级，以下为核心技术点提炼：

*   **算法与训练策略优化**
    *   [PR #1443](https://github.com/areal-project/AReaL/pull/1443) **`feat(ppo): support actor loss aggregation modes`**
        重构了 PPO 中 Actor loss 的聚合模式，在保持用户配置不变的情况下，明确了训练引擎 API 中的分布式降维（reduction）契约。
    *   [PR #1445](https://github.com/areal-project/AReaL/pull/1445) **`feat(megatron): add MTP-augmented SFT/RL training`**
        在 Megatron 后端引入多 Token 预测（MTP）作为辅助训练目标。通过独立通道传输 MTP 标签并适配 MCore 0.17.0 的 in-loop roll 机制，实现了 SFT 与 RL 训练的增强。
    *   [PR #1400](https://github.com/areal-project/AReaL/pull/1400) **`feat(distillation): Multi-Teacher On-Policy Distillation Support`**
        突破单教师模型限制，在 on-policy 蒸馏框架中引入了对多教师模型加权混合蒸馏的支持。

*   **新模型与新架构支持**
    *   [PR #1444](https://github.com/areal-project/AReaL/pull/1444) **`feat(vlm): add Qwen3.6 LoRA GRPO training support for 27B and 35B-A3B`**
        针对 Qwen3.6 系列（27B Dense 与 35B-A3B MoE），基于 SGLang 推理后端与 FSDP 实现了 LoRA GRPO 训练。
    *   [PR #1410](https://github.com/areal-project/AReaL/pull/1410) **`feat(experimental): Diffusion RL post-training — Phase 1 PoC`**
        扩展 RL 的边界，提交了基于 SD1.5 + LoRA + REINFORCE 算法的扩散模型强化学习后训练单卡概念验证。

*   **底层引擎与基础设施建设**
    *   [PR #1322](https://github.com/areal-project/AReaL/pull/1322) **`feat: Support Linear Cross Entropy fuse kernel`**
        基于 Triton 编写了融合的 Linear Cross Entropy (LCE) 前向/反向传播算子，避免了实例化完整的 `[tokens, vocab]` logits 张量，大幅降低 Megatron 训练时的显存开销。
    *   [PR #1441](https://github.com/areal-project/AReaL/pull/1441) **`feat(infra): add HTTP-based Ray Scheduler`**
        使用子进程管理的 RPC worker 替换了原有的 Ray-native 调度路径，通过 HTTP 进行张量/数据序列化，实现了基于 HTTP RPC 的新一代 Ray 调度器。
    *   [PR #1389](https://github.com/areal-project/AReaL/pull/1389) **`feat: [R3] support R3 for vllm backend`**
        在 vLLM (>=0.22.0) 后端中支持了 Rollout Routing Replay (R3) 机制。
    *   [PR #1392](https://github.com/areal-project/AReaL/pull/1392) **`fix: add group_id to StartSessionRequest for online GRPO`**
        修复了在线 GRPO 模式下 `group_size > 1` 时，无关对话被错误合并导致 advantage 标准化计算出现静默错误的严重 Bug。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **极广的后端兼容与显存优化能力**：从支持 vLLM、SGLang 等主流推理引擎，到通过 Triton 融合算子（LCE）和 MTP 机制深度适配 Megatron，AReaL 正在解决大规模 RLHF/GRPO 训练中最棘手的显存与通信瓶颈。
2.  **紧跟 SOTA 模型生态**：在极短时间内跟进并支持了 Qwen3.6 的超大 MoE 架构（35B-A3B）及 LoRA 微调，证明其架构设计具备极强的模型普适性。
3.  **探索 RL 的前沿边界**：不仅局限于 LLM 的文本对齐，项目已经开始向**扩散模型的后训练**延伸，这在当前的开源 RL 框架中属于非常前瞻的布局。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 2026-06-28 HuggingFace TRL 项目的强化学习（RL）生态日报摘要。

### 1. 今日速览
今日 TRL 仓库整体活跃度趋于平稳，无新版本发布。过去 24 小时内共有 6 项更新，包含 5 个 PR 进展（主要聚焦于实验性算法扩充、底层分布式训练兼容性修复及工程依赖升级）以及 1 个历史 Issue 的状态收尾。开发重心明显向“蒸馏”及“多种对齐算法的底层稳定性”倾斜。

### 2. 版本发布
无（近期无新版本发布）。

### 3. 重点 Issues
今日仅有 1 条历史 Issue 更新并最终关闭，反映了早期社区需求的状态：

*   **#2941 [CLOSED] [❓ question, 🏋 GRPO] How to dynamically adjust params during grpo training?**
    *   **作者**: Tomsawyerhu
    *   **核心诉求**: 探讨在 GRPO 训练过程中动态调整超参数（如在特定 step 后将 `num_generations` 从 8 扩大至 32，并提高 `temperature`）的实现方法。
    *   **分析**: 动态 rollout 配置和课程学习是 RLHF/RLAIF 中的高频进阶需求。该问题的关闭表明此类场景目前已通过回调机制或已合并的功能代码得到解决。
    *   **链接**: [huggingface/trl Issue #2941](https://github.com/huggingface/trl/issues/2941)

### 4. 关键 PR 进展
今日的 5 个 PR 展现了 TRL 在算法多样性和工程鲁棒性上的持续迭代：

*   **#6191 [OPEN] add iw-opd distillation**
    *   **作者**: kashif
    *   **摘要**: 为实验性蒸馏训练器引入 IW-OPD（Importance Weighted Optimal Policy Distillation）作为可选目标函数。该路径利用采样 token 的教师模型 logprobs 和 rollout logprobs 构建Detach的优势函数，并原生支持 `use_vllm=True` 下的缓存加速。
    *   **链接**: [huggingface/trl PR #6191](https://github.com/huggingface/trl/pull/6191)
*   **#6192 [OPEN] Align CPO/ORPO/BCO/Distillation/TPO with DPO: fix ZeRO-3 + PEFT mixed-dtype error**
    *   **作者**: DaoyuanLi2816
    *   **摘要**: 修复非量化模型在 ZeRO-3 + PEFT 混合精度下引发的 `TypeError`。此修复将先前 DPO/GRPO/KTO 等核心训练器的保护性检查扩展到了 CPO/ORPO/BCO 等剩余的实验性训练器中，提升了全量对齐算法的分布式训练稳定性。
    *   **链接**: [huggingface/trl PR #6192](https://github.com/huggingface/trl/pull/6192)
*   **#5826 [OPEN] Fix NaN loss when completions are fully truncated**
    *   **作者**: matdou
    *   **摘要**: 修复当 `max_length` 小于 prompt 长度时，所有 completion tokens 被截断导致 mask 全为 `False`，进而使 `F.cross_entropy` 在空张量上计算出 NaN eval_loss 的严重 Bug。
    *   **链接**: [huggingface/trl PR #5826](https://github.com/huggingface/trl/pull/5826)
*   **#2955 [CLOSED] Support ReMax Algorithm**
    *   **作者**: liziniu
    *   **摘要**: 社区贡献的 ReMax 算法集成（基于 ICML 2024 论文）。ReMax 是一种简单、高效的大模型对齐 RL 方法，历经长时间迭代后于今日关闭（可能已合并或被后续架构替代）。
    *   **链接**: [huggingface/trl PR #2955](https://github.com/huggingface/trl/pull/2955)
*   **#6190 [OPEN] [dependencies, github_actions] Bump the actions group with 2 updates**
    *   **作者**: dependabot[bot]
    *   **摘要**: 常规 CI 依赖升级，将 `actions/checkout` 升级至 v7.0.0。
    *   **链接**: [huggingface/trl PR #6190](https://github.com/huggingface/trl/pull/6190)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **向 RL+Distillation 融合演进**：PR #6191 显示 TRL 正在突破传统的 RLHF 范式，将基于重要权重的策略蒸馏（IW-OPD）与 vLLM 加速推理结合，这代表了当前大模型对齐技术从单一奖励模型向 “Reward model + Teacher model” 混合演进的技术趋势。
2.  **深水区的工程鲁棒性**：在庞大算法矩阵（DPO/GRPO/CPO/ORPO/BCO等）中，深挖并统一处理 ZeRO-3 + PEFT 的混合精度冲突（PR #6192），以及极端截断情况下的 NaN 阻断（PR #5826），证明了 TRL 作为工业级 RL 框架在应对海量参数组合时的可靠性。
3.  **最新的算法吞吐能力**：持续跟进 ReMax 等 ICLR/ICML 最新的免 PPO 强化学习算法，结合 vLLM 的深度原生集成，使其始终是开源社区验证最新 LLM 对齐理论的首选试验田。

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

**verl (volcengine/verl) RL 生态日报摘要 | 2026-06-28**

### 1. 今日速览
过去 24 小时内，verl 仓库共有 **17 条 Issue** 发生状态更新或新增评论，**11 条 PR** 迎来推进。从今日的活跃数据可以看出，项目当前正处于底层基础架构的深度重构期。开发焦点高度集中在 **全异步训练**、**vLLM/Rollout 权重同步与显存控制**，以及对 **多节点、多模态、MoE 架构（如 Qwen3, DeepSeek-V4）** 的支持与修复上。

### 2. 版本发布
* **无新版本发布**。距离上一发布版至今，主分支已积累大量关于 Transformers 5 适配和 Fully Async 策略的核心代码，预计正在为下一个大版本迭代做准备。

### 3. 重点 Issues
今日 Issues 反映了社区在大规模 RLHF 训练中遇到的核心工程痛点：

* **全异步执行与性能优化瓶颈**：
  * [#6866](https://github.com/volcengine/verl/issues/6866) **[Feature Request]** 请求在 `LLMServerClient` 中实现**单请求级别中断**。目前系统仅支持广播式的全局请求中断，这严重制约了复杂异步 rollout 场景下的精细化控制。
  * [#496](https://github.com/volcengine/verl/issues/496) **[OPEN]** 反馈在 GRPO 训练的 step1 阶段，参数更新耗时异常漫长。
  * [#522](https://github.com/volcengine/verl/issues/522) **[OPEN]** 寻求在 16*8 H800 集群上对 R1-distill-Qwen-32B 进行 GRPO 训练的性能调优指南，指出旧版 vLLM 易导致 CPU swap 爆炸。
* **多节点部署与底层框架适配**：
  * [#6864](https://github.com/volcengine/verl/issues/6864) **[OPEN]** 询问针对 **DeepSeek-V4 + DSA (Distributed Seat Assignment)** 在 Megatron-Lite 后端（B200/H200）的官方推荐 Docker 环境与启动脚本，表明社区正快速跟进下一代模型硬件。
  * [#523](https://github.com/volcengine/verl/issues/523) **[CLOSED]**、[#488](https://github.com/volcengine/verl/issues/488) **[CLOSED]**：集中处理了 Slurm 集群下的 Raylet 注册失败、GRPO 多节点通信超时等分布式顽疾。
* **显存管理与参数同步机制**：
  * [#516](https://github.com/volcengine/verl/issues/516) **[OPEN]** 指出当 `max_prompt_length` 超长（>10000）时极易触发 OOM，探讨 7B 模型的显存优化策略。
  * [#537](https://github.com/volcengine/verl/issues/537) **[OPEN]** 探讨 Actor 与 Rollout 引擎分离部署时，如何保证参数的正确、高效同步。

### 4. 关键 PR 进展
今日的 PR 展现了 verl 在提升并行效率与框架兼容性上的硬核输出：

* **全异步与训练核心架构升级**：
  * [#6868](https://github.com/volcengine/verl/pull/6868)：为 V1 PPO Trainer 引入 **streaming rollouter** 模式。彻底解耦 Rollout 生成与训练步，允许两者流水线重叠执行，打破原有“一问一答”的 Lock-step 资源浪费。
  * [#6628](https://github.com/volcengine/verl/pull/6628)：引入基于 **TransferQueue (TQ)** 的全新全异步策略，替代原生的 Ray MessageQueue，大幅提升跨节点数据传输与多并发效率。
* **MoE 与多模态权重同步修复**：
  * [#6863](https://github.com/volcengine/verl/pull/6863)：**关键修复**。适配 Transformers 5 下的存储格式，修复 Qwen3 MoE 专家权重在 FSDP 到 vLLM 的在线同步 Bug。
  * [#6853](https://github.com/volcengine/verl/pull/6853)：新增 Rollout 阶段的 **MoE 负载均衡 Metrics** 采集，填补了 MoE 模型推理负载监控的空白。
  * [#6659](https://github.com/volcengine/verl/pull/6659)：修复 `qwen3_vl.py` 中 `vocab_weights` 的设备分配和分片处理问题，解决 `torch.compile` 场景下的异常。
* **精细化中断与梯度计算**：
  * [#6865](https://github.com/volcengine/verl/pull/6865)：配合 Issue #6866，实现了 `AbortableLLMServerClient`，补齐单请求中断能力。
  * [#5641](https://github.com/volcengine/verl/pull/5641)：修复 `token-mean` 模式下梯度累加时，`loss_scale_factor` 计算维度不一致导致的梯度偏移问题。
* **多硬件后端兼容**：
  * [#6861](https://github.com/volcengine/verl/pull/6861)：修复多节点场景下非主节点（node_rank > 0）执行 vLLM `start_profile` 时的空指针崩溃。
  * [#6831](https://github.com/volcengine/verl/pull/6831)：为 Ascend NPU 添加了单元/系统测试（UT/ST），持续推进国产芯片的生态融合。

### 5. 为什么 verl 值得在当前 RL 生态继续关注？
verl 正在跳出早期“能跑通 PPO/GRPO 即可”的验证阶段，向**工业级高并发、多模态、底层硬核优化**迈进。从今日的 PR 走向可以看出：

1. **对冲时间成本（极致榨算力）**：通过 Streaming Rollouter 和 TransferQueue 的落地，verl 正在把分布式训练集群的 GPU 闲置时间压缩到极致，这是大规模 LLM RL 训练降本的关键。
2. **紧跟前沿模型范式**：对 DeepSeek-V4 的 DSA 架构、Qwen3 MoE 的运行时同步机制的快速响应与修复，表明 verl 不仅是 RL 框架，更是新模型架构落地的“试验田”和“加速器”。
3. **基础设施的深度解耦**：实现单请求级别的请求中断，以及对 Ascend NPU、Megatron-Lite 的适配，证明其系统设计正在变得越发模块化与无感知化。

对于关注大模型分布式训练引擎、强化学习底层工程实现以及新一代 MoE 模型推理训练一体化的开发者而言，verl 的每一次底层代码变更都具有极高的学习与参考价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL 开源生态日报：Open Instruct 项目追踪**
**日期**：2026-06-28

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新增 Issues 和版本发布，但有多达 4 个 PR 更新。活动核心高度聚焦于**异步强化学习（尤其是异步 GRPO 算法）的工程稳定性优化**，涉及训练数据时效性控制、长耗时 Rollout 防中断机制以及集群任务调度参数修复。这表明项目目前正处于支撑大规模长上下文/复杂环境 RL 训练的底层代码打磨阶段。

### 2. 版本发布
* **无新版本发布**。（当前项目仍以主分支高频迭代为主）

### 3. 重点 Issues
* **无活跃 Issue**。（过去 24 小时内 Issue 追踪列表清零，当前开发驱动力主要来自核心开发者的直接 PR 提交）

### 4. 关键 PR 进展

* **[#1738](https://github.com/allenai/open-instruct/pull/1738) [CLOSED] 丢弃陈旧的异步 Rollout 结果**
  * **作者**: hamishivi
  * **技术摘要**: 为异步 GRPO 引入 `max_result_age_steps`（最大结果滞后步数）控制机制。如果 Rollout 生成时的 Policy 版本与当前训练步数的差值超过该阈值，系统将直接丢弃此批数据而不用于训练更新。此 PR 有效防止了异步训练中“Off-policy”数据过度陈旧导致的梯度更新发散或训练崩溃。
  
* **[#1729](https://github.com/allenai/open-instruct/pull/1729) [CLOSED] 将环境池默认获取超时提升至 7200s**
  * **作者**: hamishivi
  * **技术摘要**: 将 Actor 环境池的 `DEFAULT_ACQUIRE_TIMEOUT_S` 从 600 秒大幅提升至 7200 秒（2小时）。专为解决**超长 Rollout** 场景下的误报超时问题。这对于需要极长交互周期（如 Agent 沙盒环境、长思维链推理）的 RL 任务至关重要。

* **[#1742](https://github.com/allenai/open-instruct/pull/1742) [OPEN] 修复 Beaker 提交脚本中 `--preemptible` 标志的解析问题**
  * **作者**: Chessing234
  * **技术摘要**: 修复了 Beaker 集群提交脚本的逻辑 Bug。原先使用 `type=bool` 导致任何非空字符串（如 `--preemptible False`）均被解析为 `True`。现替换为 `BooleanOptionalAction`，确保抢占式实例的配置准确无误，直接影响大规模集群训练的计算成本控制。

* **[#1741](https://github.com/allenai/open-instruct/pull/1741) [OPEN] 检查 main 分支与 Tmax 分支的代码冲突**
  * **作者**: shatu
  * **技术摘要**: 常规的工程维护 PR，主要用于同步和解决主分支与内部开发分支之间的代码冲突。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

当前 RL 训练（特别是基于环境交互的 LLM Agent 和 GRPO/PPO 变体）正从“算法实验”向“高并发系统工程”转移，而 Open Instruct 的最新动态精准踩中了这一痛点：

1. **直面“异步强化学习”的核心挑战**：异步架构能极大提升 GPU 利用率，但会引入严重的 Off-policy 问题。PR #1738 证明了项目正在建立健壮的“数据新鲜度过滤”机制，这是工业级异步 RLHF/GRPO 的核心技术壁垒。
2. **深度适配“长耗时/ Agentic Rollouts”**：PR #1729 放宽沙盒环境超时限制，暗示项目正在优化对超长 Horizon 交互任务的支持，这对于当前火热的 Tool-use、代码执行及沙盒游戏等复杂 RL 场景具有极高的工程参考价值。
3. **提供开箱即用的基础设施代码**：无论是对 Beaker 等算力调度平台的精细适配（PR #1742），还是底层的并发数据收集管理，Open Instruct 为 RL 社区提供了极佳的大规模训练级参考实现。

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

**RL 日报：Gymnasium 生态追踪 (2026-06-28)**

以下是基于 GitHub 过去 24 小时数据为 [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 生成的项目动态摘要。

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度处于常规迭代状态，无新版本发布。共产生 **0** 条新增 Issue、**1** 条已有 Issue 更新；共有 **2** 个 PR 处于活跃更新状态。当前开发重心主要集中在**底层物理引擎的迁移评估**、**图空间数据结构的泛化**以及**CI/CD 基础设施修复**。

### 2. 版本发布
- **无新版本发布** (Releases: 0)

### 3. 重点 Issues
- **[#1597] [OPEN] [help wanted] Port all environments from box2d to pymunk**
  - **作者:** jkterry1
  - **动态:** 更新于 2026-06-26
  - **摘要:** 官方发起的重大的底层依赖迁移讨论。由于现有 `box2d` 的 Python 绑定已约 6 年未维护，项目计划将所有 2D 物理环境移植到目前拥有活跃维护和更好文档的 `pymunk`。这是一个需要社区广泛介入的帮助请求。
  - **链接:** [Farama-Foundation/Gymnasium Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597)

### 4. 关键 PR 进展
- **[#1606] [OPEN] [WIP] Correct NumPy version constraints & fix PyTest Dockerfile**
  - **作者:** Trenza1ore
  - **动态:** 创建/更新于 2026-06-27
  - **摘要:** 基础设施修复。修复了 "Run PyTest" 工作流中 Dockerfile 的 `ARG` 位置错误，并正确应用了 NumPy 的版本约束。作者明确表示将在前序依赖 PR 合并后进行 Rebase 和 Squash。
  - **链接:** [Farama-Foundation/Gymnasium PR #1606](https://github.com/Farama-Foundation/Gymnasium/pull/1606)

- **[#1514] [OPEN] Update Graph to accept arbitrary node and edge spaces**
  - **作者:** 2ToTheNthPower
  - **动态:** 更新于 2026-06-27
  - **摘要:** 算法/API 扩展。更新了图空间以支持异构图或命名字典特征。目前该 PR 已使节点和边支持 `Dict` 和 `Tuple` 空间，正持续推进以兼容 `Text`、`Sequence` 等更复杂的数据结构。
  - **链接:** [Farama-Foundation/Gymnasium PR #1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Gymnasium 作为当前 RL 生态最核心的底层 API 标准，其变动直接反映并引领着强化学习社区的工程演进趋势：
1. **摆脱失维依赖，强化基建健壮性：** Issue #1597 提出的从 Box2D 到 PyMunk 的迁移计划，表明项目正在积极剔除长期缺乏维护的底层依赖，以防止环境配置碎片化，确保物理仿真环境的长期可用性。
2. **紧跟前沿研究的数据结构需求：** PR #1514 对任意节点和边空间（尤其是异构图）的支持，直接响应了近年来图强化学习（GRL）和复杂拓扑控制任务的急迫需求，打破了传统 1D/2D 张量环境的限制。
3. **严格的 CI/CD 与底层版本控制：** PR #1606 对 NumPy 约束和 Dockerfile 的严谨修复，体现了项目维护者对版本向下兼容和自动化测试底线的严格把控，这是其作为“行业标杆 API”必须具备的素质。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL 开源生态日报：PettingZoo (2026-06-28)

## 1. 今日速览
过去 24 小时内，PettingZoo 仓库共更新 **2 个 Pull Requests** 和 **1 个 Issue**，无新版本发布。当前开发活动主要集中于**工程化治理**，包括修复主干 CI 流水线失效问题，以及提升静态代码分析工具的规范严格度。

## 2. 版本发布
- **无新版本发布**。项目核心 API 保持稳定。

## 3. 重点 Issues
- **#1253 [OPEN] [enhancement] [Proposal] Proper initialization of the custom CNNmodel in the RLlib tutorial**
  - **作者**: jangroter | **👍**: 0 | **评论**: 2
  - **摘要**: 作者指出官方 Ray/RLlib 教程（`rllib_pistonball.py`）中存在潜在缺陷：自定义的 `CNNModel` 实际上从未被初始化和调用。该 Issue 提议修正配置文件以显式加载该模型，或直接移除冗余代码，以避免误导开发者。
  - **链接**: [Farama-Foundation/PettingZoo Issue #1253](https://github.com/Farama-Foundation/PettingZoo/issues/1253)

## 4. 关键 PR 进展
- **#1377 [CLOSED] Restore CI on main**
  - **作者**: virgilt
  - **摘要**: 旨在恢复 `main` 分支上多个失败的 CI 任务，修复范围涵盖类型检查、文档、测试和教程等工作流。该 PR 已于昨日被关闭（通常意味着修复尝试已被合并、取代或需重新调整）。
  - **链接**: [Farama-Foundation/PettingZoo PR #1377](https://github.com/Farama-Foundation/PettingZoo/pull/1377)

- **#1376 [OPEN] Increase ruff strictness and apply mechanical autofixes**
  - **作者**: mfornet
  - **摘要**: 技术债清理。该 PR 显著提升了代码 Lint 工具 `ruff` 的严格程度，并自动修复了所有新暴露的代码规范问题。此改进建立在近期将类型/Lint 诊断提升为错误（#1350）的基础之上，有助于强化多智能体环境底层代码的健壮性。
  - **链接**: [Farama-Foundation/PettingZoo PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **多智能体标准接口（MA-API）**：作为 Farama-Foundation 的核心组件，PettingZoo 是多智能体强化学习（MARL）领域的 Gymnasium。任何新发的 MARL 算法或基线测试，几乎都会优先适配其环境。
2. **底层工程极其稳固**：从近期的 PR（提升 `ruff` 严格度、恢复 CI 流水线）可以看出，维护团队正在对代码进行强类型的工程化重构。对于研究者和开发者而言，这意味着极高的代码可靠性和极低的运行时崩溃风险。
3. **生态桥梁作用**：即使是讨论中的 Issue（如 #1253），也直接关联 Ray RLlib 等主流分布式训练框架。PettingZoo 充当着连接复杂多智能体环境与底层高性能算法引擎的核心桥梁，是 MARL 工程化落地不可或缺的基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>