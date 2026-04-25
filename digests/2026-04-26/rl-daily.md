# RL 开源生态日报 2026-04-26

> 生成时间: 2026-04-25 22:06 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“算力向上，应用向下”的分化趋势。以大语言模型（LLM）及多模态模型对齐为核心的开源 RLHF 框架占据了绝对的开发活跃度与社区关注度。底层基础设施正在经历向万卡集群、全异步架构和超大规模 MoE 适配的痛苦但必要的重构。与此同时，传统的单智能体与多智能体基准环境（如 Gymnasium, PettingZoo）API 已高度成熟，步入平稳维护期，主要承担复杂物理仿真和算法验证的基石作用。

## 各项目活跃度对比

*(注：CleanRL, OpenRLHF, rl_games, ROCK, ROLL, Stable Baselines3, Tianshou 过去 24 小时无任何活动，已做静默合并处理)*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 13 | 7 | 0 | 承载极高复杂度的多硬件生态（Ascend NPU）适配与 VLM 训练稳定性攻坚，工程量庞大。 |
| **AReaL** | 7 | 9 | 0 | 系统架构深度重构期，聚焦控制器解耦与分布式通信底座升级，向工业级高可用演进。 |
| **TRL** | 1 | 4 | 0 | 极速跟进万亿级 MoE 架构（DeepSeek v4/Qwen3.6），并在 GRPO 等核心算法的数学正确性上深水区打磨。 |
| **Open Instruct** | 0 | 3 | 0 | 引入基于最新学术研究的 Token 级策略梯度门控算法，兼具底层 SFT 数学等效性验证的严谨性。 |
| **slime** | 1 | 1 | 0 | 直面 160 卡级别超大 MoE 模型的分布式全异步训练痛点，暴露出极大规模下的推理显存与通信挑战。 |
| **torchtune** | 0 | 1 | 0 | 率先补齐 Llama4 视频模态处理管线，抢占多模态（视频）策略优化与 VLA 模型微调的生态位。 |
| **Gymnasium** | 0 | 1 | 0 | 持续吸纳航空航天等高复杂度物理仿真环境，维持 RL 底层事实标准的统治力。 |
| **PettingZoo** | 1 | 0 | 0 | API 趋于稳定，社区聚焦于多维离散动作空间掩码等复杂边缘场景的合规性探询。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **对 GRPO 算法的极限榨取与边界修正**：TRL 修复了 GRPO 零方差奖励下的伪 KL 梯度问题，Open Instruct 引入了基于优势函数和动作惊奇度的 Token 级 PG 门控。这表明业界已度过简单跑通 RLHF 的阶段，正在研究极其细粒度的信用分配与训练稳定性策略。
2. **从纯文本/图像向视频模态的对齐演进**：torchtune 引入 Llama4 视频处理流水线，verl 着力解决 VLM 的数据过滤与 RoPE 崩溃，标志着 RLHF 的奖励反馈信号正在从二维向高维时序演进。

**工程/基础设施侧信号：**
1. **极致的异步与解耦架构**：verl 和 slime 均在全异步架构上发力，通过解耦 Policy、Reward 和 Rollout 引擎打破算力屏障；AReaL 则在重构控制器并引入 Ray RDT 进行底层通信优化。
2. **前沿超大 MoE 模型的“破坏性”适配****：**围绕 Qwen3.5/3.6 和 DeepSeek v4 等超大 MoE 架构，各框架都在进行底座重构（如 AReaL 升级 megatron-bridge 适配 Transformers 5.0+，社区频频求助多卡扩展乱码及训练失败问题）。
3. **异构算力与多节点分布式生死线**：从 verl 处理海量的 Ascend NPU 适配问题，到 slime 排查 160 卡 H20 并行乱码，决定了 RL 框架能否真正在万卡集群上实现泛化落地。

## 差异化定位分析

1. **verl 与 AReaL：底层算力与调度专家**。两者都在死磕大集群分布式痛点。verl 的一大差异化护城河在于其对异构硬件（如 Ascend NPU）的大规模适配与代码规范化；AReaL 则更侧重于控制面和数据面（如网关超时、引擎实例化解耦）的深度重构。
2. **TRL 与 torchtune：前沿模型生态的最速响应者**。TRL 是跟进最新开源模型（如 DeepSeek v4, Qwen3.6）的绝对主力，确保后训练基础设施不落后于时代；torchtune 依托 PyTorch 原生优势，提供极致的模块化黑盒破解能力。
3. **Open Instruct 与 slime：前沿学术与工程极限的先锋队**。Open Instruct 更像是一个严谨的学术试验田（快速落地最新的数学级 PG 改进）；slime 则专注于压榨超大集群的极致并发性能（纯异步流水线）。
4. **Gymnasium 与 PettingZoo：稳如泰山的基石设施**。它们的迭代虽不频繁，但在多自由度物理仿真和多智能体标准接口上，依然是不可替代的“操作系统”层。

## 社区热度与成熟度

1. **verl 热度最高且工程属性极重**：单日 13 个 Issues 中有 6 个来自同一开发者的 NPU 生态反馈，这暴露出多硬件底层支持的维护复杂性，但也证明了其正在承担极其繁重的工业级落地任务。
2. **TRL 与 AReaL 呈现高优的“社区拉动”**：用户对 Qwen3.5 训练配置的强烈渴求直接推动了核心依赖的重构，反映出项目在模型飞速迭代背景下的敏捷响应。
3. **成熟项目的静默与长尾化**：CleanRL、Stable Baselines3 等老牌项目无活动，而 Gymnasium 仅通过接收火箭 GNC 等垂直领域的 PR 来扩充生态。这证明单一 RL 算法库已高度成熟，当前的“卷度”已全面转移到大模型后训练基础设施上。

## 值得关注的趋势信号

1. **万亿参数 MoE 模型的 RL 适配出现瓶颈期信号**：从 AReaL 社区反馈无法跑通 Qwen3.5，到 slime 暴露出 160 卡扩展生成乱码，说明模型参数与 MoE 路由机制的增长正在挑战现有 RL 分布式切分与通信精度的极限，底层引擎重构迫在眉睫。
2. **生成式/判别式 RM 解耦成为大趋势**：verl 引入 GenRM/DisRM 支持打破了以往 `use_rm=False` 的限制，这标志着依靠传统判别式打分的范式正在向更复杂的生成式奖励模型对齐，推理与训练的边界在 RL 阶段被进一步模糊。
3. **RLHF 数据处理环节的优化被前置**：verl 提交了视觉 token 估算加速过滤的 PR 以解决多模态数据处理变慢。随着多模态输入的激增，“RL 训练前的数据加载与过滤”正在成为新的工程性能瓶颈。

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

# 🤖 Slime RL 生态日报 (2026-04-26)

## 1. 今日速览
过去 24 小时，[THUDM/slime](https://github.com/THUDM/slime) 仓库整体处于平稳迭代期。无新版本发布，共监控到 **1 条 Issue 更新** 和 **1 条 PR 更新**。当前社区的关注焦点集中在**超大规模 MoE 模型（Qwen3.5-397B-A17B）在全异步分布式训练下的生成异常排查**，以及底层推理引擎的提前适配准备上。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 重点 Issues

### 🟢 #1852 [OPEN] Qwen3.5-397B-A17B 全异步 H20 扩展至 160 卡时 Rollout 生成乱码
*   **作者**: YaxinFAN1
*   **链接**: [THUDM/slime Issue #1852](https://github.com/THUDM/slime/issues/1852)
*   **摘要**: 用户在 32 卡 H20 环境下全异步训练 Qwen3.5-35B-A3B 表现正常；但当环境无缝扩展至 160 张 H20（96 Actor + 64 Rollout）以训练 397B-A17B 模型时，训练流程未崩溃，但 Rollout 阶段生成的 Response 出现乱码。
*   **分析**: 此类“大模型仅推理生成乱码但训练不掉点”的现象，在强化学习对齐超大规模 MoE 架构时较为典型。大概率与 DP/TP 分布式切分下的权重同步延迟、大型张量并行的通信精度溢出，或是 vLLM/SGLang 等 Rollout 引擎在处理巨型 KV Cache 时的显存分配异常有关。该 Issue 为框架在超大规模集群下的稳定性提供了重要的边缘测试用例。

---

## 4. 关键 PR 进展

### 🔴 #1859 [CLOSED] [run-ci-megatron] [docker] cleanup sglang patch
*   **作者**: zhuzilin
*   **链接**: [THUDM/slime PR #1859](https://github.com/THUDM/slime/pull/1859)
*   **摘要**: 清理现有的 SGLang 补丁代码，为未来的 SGLang 版本升级做前期准备。
*   **分析**: 这是一个典型的技术债务清理 PR。Slime 作为深度集成 SGLang 作为 Rollout 引擎的 RLHF 框架，持续跟进和适配上游推理引擎的 API 变动和性能优化是核心工作。此 PR 的合并（或关闭处理）表明项目正在重构底层推理对接逻辑，以保持框架在长文本和高并发生成上的迭代节奏。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

作为智谱（THUDM）开源的强化学习框架，Slime 在当前竞争激烈的 RL 开源生态中具备以下核心观测价值：

1.  **直面超大规模集群的工程痛点**: 如 Issue #1852 所示，Slime 社区正在实打实地处理 **160 卡（96 Actor + 64 Rollout）级别**的分布式 RLHF 训练。当 LLM 跨越单机乃至小集群门槛迈向千亿级 MoE 参数时，RL 框架的通信开销与 Rollout 稳定性是决定训练成败的生死线，Slime 在此场景下提供了极具参考价值的工程实践。
2.  **紧密跟进 Rollout 推理生态**: RLHF 训练的速度瓶颈 80% 在于 Rollout 的生成效率。项目持续清理和更新 SGLang 相关 Patch（PR #1859），证明其正在积极跟进最新的推理加速技术，确保框架能够享受 vLLM/SGLang 社区带来的最新极致并发和显存优化红利。
3.  **硬核的异步调度能力**: 全异步是提升 GPU Resource 利用率（特别是 Actor 和 Rollout 的交错流水线）的关键。Slime 提供的纯异步架构，使其不仅是一个“跑通 SFT/RLHF”的玩具，更是面向工业界大规模算力集群榨干 TFLOPS 的高效基座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-04-26)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持较高活跃度。无新版本发布，但社区围绕**系统架构解耦、新模型（Qwen3.5）适配、以及分布式底层性能优化**产生了多个高质量讨论与代码提交。
- 更新 Issues：7 条（2 Closed / 5 Open）
- 更新 Pull Requests：9 条（3 Closed / 6 Open）
- 新 Releases：0 个

## 2. 版本发布
**无**。目前项目主干持续整合社区 RFC 和底层重构，预计近期无重大里程碑发布，主要处于功能积累与架构打磨阶段。

## 3. 重点 Issues

### 3.1 [RFC] 集成 Ray Core RDT 进行权重同步
- **作者**: KaisennHu | **状态**: OPEN | **评论**: 2
- **链接**: [inclusionAI/AReaL #1243](https://github.com/inclusionAI/AReaL/issues/1243)
- **摘要**: 提议在 `areal/experimental/weight_update/rdt/` 中引入基于 Ray Core RDT (Reliable Data Transport) 的后端，以优化模型权重同步机制。该 RFC 强调**完全向后兼容**，不修改现有 AReaL 1.0 遗留代码（如 `fsdp_engine.py`）。

### 3.2 [Feature] 将 `mbridge` 全量迁移至 `megatron-bridge`
- **作者**: garrett4wade | **状态**: OPEN 
- **链接**: [inclusionAI/AReaL #1260](https://github.com/inclusionAI/AReaL/issues/1260)
- **摘要**: 为适配最新的 SGLang、vLLM 以及 `transformers 5.0+`，提议移除对旧版 `mbridge` 的依赖，全面迁移至 `megatron-bridge`。这是确保 AReaL 能够顺利支持最新一代大模型的关键前置需求。

### 3.3 [BUG] 数据服务网关加载数据集超时
- **作者**: HT-Yuan | **状态**: OPEN
- **链接**: [inclusionAI/AReaL #1264](https://github.com/inclusionAI/AReaL/issues/1264)
- **摘要**: 数据服务网关的 `--forward-timeout` 被硬编码为 60 秒，导致在首次下载和预处理大型数据集（如部分 HuggingFace 数据集）时频繁触发超时中断。

### 3.4 [Question] 请求提供 Qwen3.5 完整训练环境配置
- **作者**: leekum2018 | **状态**: OPEN
- **链接**: [inclusionAI/AReaL #1261](https://github.com/inclusionAI/AReaL/issues/1261)
- **摘要**: 社区用户反馈目前在 SGLang、vLLM、FSDP 等后端组合下无法成功跑通 Qwen3.5 的训练，请求官方提供一套开箱即用的配置方案。侧面印证了上述 `mbridge` 升级和依赖兼容性问题的迫切性。

## 4. 关键 PR 进展

### 4.1 [重构] 统一并重命名服务控制器配置
- **作者**: nuzant | **状态**: OPEN (`safe-to-test`)
- **链接**: [inclusionAI/AReaL PR #1265](https://github.com/inclusionAI/AReaL/pull/1265)
- **摘要**: 将分散在多处的 Agent 与 Inference 控制器配置项统一收拢至 `areal/api/cli_args.py`，删除冗余的局部配置模块。同时将 `RolloutControllerV2` 接入 trainer rollout v2 路径。这是简化系统 Single-Controller 架构的重要一步。

### 4.2 [特性] FSDPEngine 解耦 Config 直接构建
- **作者**: chenzhiyi021 | **状态**: OPEN 
- **链接**: [inclusionAI/AReaL PR #1140](https://github.com/inclusionAI/AReaL/pull/1140)
- **摘要**: 为 `FSDPEngine` 引入 `from_pretrained` 方法。该 PR 抽离了引擎对 config dataclass 的重依赖，允许开发者直接通过 `from_pretrained` 实例化引擎，极大降低了二次开发和测试的门槛。

### 4.3 [修复] 支持配置数据服务 setup_timeout
- **作者**: HT-Yuan | **状态**: OPEN
- **链接**: [inclusionAI/AReaL PR #1263](https://github.com/inclusionAI/AReaL/pull/1263)
- **摘要**: 针对上述 Issue #1264 的修复提交。为 `_DatasetConfig` 添加了默认为 120 秒的 `setup_timeout` 字段，替换了原有的硬编码，修复了大规模数据加载失败的问题。

### 4.4 [依赖] 升级 `mbridge` 并引入预提交锁检查
- **作者**: Adiactive, garrett4wade | **状态**: CLOSED (已合并)
- **链接**: [PR #1258](https://github.com/inclusionAI/AReaL/pull/1258) | [PR #1259](https://github.com/inclusionAI/AReaL/pull/1259)
- **摘要**: 将 `mbridge` 依赖从 PyPI 版本 `0.15.1` 升级至主干的特定 commit，引入了 Qwen3-VL、Qwen3.5 等新架构支持。同时在 CI 环节的 pre-commit hooks 中加入了 `uv lock` 检查，以防止未来出现依赖漂移。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直面底层工程痛点**：AReaL 目前的迭代聚焦于大型 RLHF 系统最难啃的骨头——**分布式通信（如尝试引入 Ray RDT）、控制器架构解耦和引擎实例化**。这表明项目正从“跑通算法”向“大规模工业级高可用”演进。
2. **极速跟进前沿模型生态**：从社区对 Qwen3.5 的强烈需求，到核心开发者迅速重构 `megatron-bridge` 依赖以适配 `transformers 5.0+`，可以看出 AReaL 在应对 LLM 架构快速迭代时保持着敏捷的响应速度。
3. **模块化与开发者友好度提升**：不论是 `FSDPEngine.from_pretrained` 的解耦，还是移出 Docker 架构中容易引发冲突的虚拟环境目录，都反映出项目在努力降低外部贡献者和研究人员的上手成本。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-26 RL 日报摘要：

# TRL (huggingface/trl) RL 生态日报 - 2026.04.26

## 1. 今日速览
过去 24 小时内，TRL 仓库共更新 **1 条 Issue**（已关闭）和 **4 条 PR**（其中 3 条为 OPEN 状态），无新版本发布。当前核心开发动态高度聚焦于**前沿开源大模型（DeepSeek v4、Qwen3.6）的适配**以及**核心 RL 算法（GRPO）训练稳定性的修复**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[#5636] [CLOSED] CI 失败：GitHub Pages 构建时出现 Liquid 语法错误** 
  - **详情**：文档站点构建失败。原因是 Jekyll 将 `chat_templates.md` 中的 Jinja2 语法误解析为 Liquid 模板，且存在未闭合的 `if` 标签。该异常出现在 PR #5581 合并之后。
  - **链接**：[huggingface/trl Issue #5636](https://github.com/huggingface/trl/issues/5636)

## 4. 关键 PR 进展
- **[#5641] [OPEN] 集成 DeepSeek v4 架构**
  - **详情**：由核心开发者提交，旨在为全新的 DeepSeek v4 模型提供原生支持，确保 TRL 在底层架构更新上的同步。
  - **链接**：[huggingface/trl PR #5641](https://github.com/huggingface/trl/pull/5641)

- **[#5642] [OPEN] 集成 Qwen3.6 并修复 Chat Template 兼容性**
  - **详情**：Qwen3.6 复用了 `Qwen3_5Moe` 架构，但引入了 `preserve_thinking` 标志并修改了工具参数字符串化逻辑。此 PR 修复了 `chat_template_utils.py` 中因严格字符串匹配导致的模板解析失败问题。
  - **链接**：[huggingface/trl PR #5642](https://github.com/huggingface/trl/pull/5642)

- **[#5640] [OPEN] 修复 GRPOTrainer 中零标准差奖励组的伪 KL 梯度**
  - **详情**：一个关键的 RLHF 算法级修复。当 GRPO 训练中同一 prompt 组的所有 completions 获得相同奖励（方差为零）时，Advantage 为零会导致策略损失消失，但 KL 惩罚项（`beta * per_token_kl`）仍会产生非零梯度干扰模型更新。此 PR 有效隔离了此类无效梯度。
  - **链接**：[huggingface/trl PR #5640](https://github.com/huggingface/trl/pull/5640)

- **[#5639] [CLOSED] 修复文档构建：添加 .nojekyll 文件**
  - **详情**：针对 Issue #5636 的修复方案，通过添加 `.nojekyll` 绕过 GitHub Pages 的默认 Jekyll 渲染，防止 Jinja2 语法被错误处理。
  - **链接**：[huggingface/trl PR #5639](https://github.com/huggingface/trl/pull/5639)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **极速跟进最前沿模型**：无论是 DeepSeek v4 还是 Qwen3.6 这类万亿/高性能 MoE 架构，TRL 均能在模型发布极短的时间内完成推理与微调适配，确立了其在开源 LLM 后训练阶段的基础设施地位。
2. **深水区的算法打磨**：从 PR #5640 可以看出，TRL 的优化已经深入到 GRPO 等 RL 微调算法的边界条件（如退化奖励分布下的 KL 散度计算）。这种对训练稳定性和数学正确性的极致追求，是保障大模型对齐（Alignment）不会发生灾难性崩溃的关键。

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

以下是为您生成的 verl 项目 2026-04-26 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，verl 生态保持较高活跃度。项目共处理/新增 **13 条 Issues** 和 **7 条 Pull Requests**，无新版本 Release 发布。从社区互动来看，当前项目的研发重心集中在 **多模态数据处理优化、FSDP2 分布式训练稳定性**，以及 **Ascend NPU 生态的文档与代码规范化**。

### 2. 版本发布
- **最新 Releases**：无（近 24 小时无新版发布）。

### 3. 重点 Issues
**核心训练与分布式错误**
- **[#5995](https://github.com/volcengine/verl/issues/5995) [Bug] FSDP2 CPUOffloadPolicy + state_dict() crashes**：在 H200 多节点环境下，使用 FSDP2 混合引擎进行非 LoRA 全参训练时出现设备不匹配崩溃。该问题获得 7 个赞，是目前社区高优先级关注的稳定性痛点。
- **[#6073](https://github.com/volcengine/verl/issues/6073) [Bug] VLM SFT RoPE crash**：VLM 微调时，由于嵌套张量锯齿状维度翻转，导致共享相同 `seq_len` 的 micro-batch 样本发生 RoPE 崩溃。

**多模态与模型支持**
- **[#6145](https://github.com/volcengine/verl/issues/6145) [Bug] 多模态数据集 filter 阶段严重变慢**：`_build_messages` 中将 `pop` 改为 `get` 引入了性能退化，影响数据处理效率。
- **[#6146](https://github.com/volcengine/verl/issues/6146) Qwen3.5-VL veomni engine support**：社区发起 Feature Request，请求 veomni 引擎支持最新的 Qwen3.5-VL 模型。

**Ascend NPU 生态与工程化反馈**
同一开发者（`AscendAISystem`）集中提交了 6 个针对 Ascend 生态的工程化改进建议，暴露出多硬件支持的维护复杂性：
- **[#5957](https://github.com/volcengine/verl/issues/5957) NPU 维度不匹配**：Ulysses SP 导致 logits 与 temperature 维度报错。
- **[#6136](https://github.com/volcengine/verl/issues/6136) 镜像拉取不稳定**：Ascend 镜像仓库拉取速度慢且易失败。
- **[#6137](https://github.com/volcengine/verl/issues/6137) 文档未同步**：Quickstart 文档支持的算法与模型落后于主分支代码。
- **[#6138](https://github.com/volcengine/verl/issues/6138) & [#6139](https://github.com/volcengine/verl/issues/6139) & [#6143](https://github.com/volcengine/verl/issues/6143) 脚本规范问题**：Examples 代码风格多变，GPU 与 NPU 脚本混用，缺乏统一标准。

### 4. 关键 PR 进展
**功能增强**
- **[#6044](https://github.com/volcengine/verl/pull/6044) [fully_async] 支持 GenRM/DisRM**：在完全异步训练模式中引入生成式/判别式奖励模型支持，打破了之前强制 `use_rm = False` 的限制。
- **[#6133](https://github.com/volcengine/verl/pull/6133) [dataset] 视觉 token 估算加速过滤**：针对多模态数据，在精确分词前引入粗粒度的视觉 token 估算，显著加速 RLHF 数据集的 prompt 长度过滤阶段。
- **[#6144](https://github.com/volcengine/verl/pull/6144) 验证指标可配置过滤**：允许用户通过配置 `enabled_metrics` 自定义记录哪些验证指标。
- **[#6097](https://github.com/volcengine/verl/pull/6097) [tool] 统一 SkipManager**：引入 SkipManager 来规范化和管理跳过机制。

**缺陷修复**
- **[#6135](https://github.com/volcengine/verl/pull/6135) [megatron] 修复 NPU 迁移报错**：修复从 megatron worker 迁移到 engine worker 后，因缺少 Critic worker 导致的 Ascend NPU 运行错误。
- **[#6134](https://github.com/volcengine/verl/pull/6134) [misc] 修复 PrecisionType 迭代**：修正了精度类型的迭代逻辑与支持类型列表。
- **[#5974](https://github.com/volcengine/verl/pull/5974) [CLOSED] fix(grpo): 分离 returns 和 advantages**：修正了此前 GRPO 估算器中 returns 和 advantages 均使用归一化值的问题，现保留原始回报用于指标监控，仅对 advantages 做组归一化。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **多底层硬件生态的攻坚**：从今日的 Issues（6 篇直指 Ascend NPU）与 PRs 可以看出，verl 正在承担繁重的异构算力适配工作（NPU/GPU 多机多卡策略）。这种在 PyTorch 层面抹平底层硬件差异的工程，对 RL 在万卡集群上的泛化落地至关重要。
2. **前沿 VLM 训练链路的完善**：随着 Qwen3.5-VL 等多模态大模型成为 RLHF 的主力军，verl 正在快速响应并修复 VLM 特有的数据处理和 RoPE 并行痛点（如视频 token 过滤加速、序列长度并行崩溃等）。
3. **奖励模型异步架构演进**：PR #6044 表明项目正在完善复杂的异步强化学习架构，通过解耦 RM 和 Policy 引擎，打破了同步带来的算力屏障，这代表着 LLM 后训练（Post-training）基础设施的前沿演进方向。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-04-26 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活动趋于平稳。无新版本发布，无新增或更新的 Issues，仅有 1 项重点 PR 更新。项目当前的核心推进方向正从基础的文本与图像模态向复杂的多模态（视频理解）拓展。

### 2. 版本发布
- **过去 24 小时**：无新版本发布。

### 3. 重点 Issues
- **过去 24 小时**：无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#2942 引入 Llama4 视频处理支持](https://github.com/pytorch/torchtune/pull/2942)** `[OPEN]`
  - **作者**: awasthiabhijeet
  - **更新日期**: 2026-04-25
  - **核心内容**: 该 PR 通过扩展现有的视觉编码器基础设施，使 Llama4 模型具备视频内容处理能力。具体技术实现包括：
    1. 在分词器中引入了视频专属的特殊 Token（如 `<|video|>`, `<|vid_start|>`, `<|vid_end|>`, `<|vid_frame_separator|>`）。
    2. 实现了全新的 `transform_video` 数据处理流水线，以支持视频帧的拆解与编码。
  - **分析**: 此 PR 标志着 torchtune 在多模态对齐方面的进一步升级。在 RL 领域，这为未来基于视频输入的视觉-语言-动作模型（VLA）或处理动态视觉反馈的 RL Agent 微调提供了底层架构支持。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习（特别是 RLHF/DPO 及多模态对齐）开源生态中，torchtune 具有不可替代的战略价值：
1. **多模态策略优化的基石**：随着 Llama4 等原生多模态权重开源，RL 训练正在从纯文本的对齐向“图文/视频”的复合奖励模型对齐演进。torchtune 对 Video 等模态的及时支持，为构建多模态 RLHF 流水线（如基于视频的 VLM 反馈）铺平了道路。
2. **极致的 RL 训练可控性**：相比高度封装的 Black-box 训练框架，torchtune 纯 PyTorch 原生、模块化的设计允许 RL 研究者在底层（如自定义 Actor-Critic 架构、Mask 处理、特殊 Token 嵌入）进行极其深度的 Hack，这对于复现和改进前沿 RL 算法至关重要。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open-Instruct 项目 RL 日报摘要（2026-04-26）：

### 1. 今日速览
过去 24 小时，`allenai/open-instruct` 仓库无新版本发布、无新增或更新的 Issues。核心动态集中在 3 个关键 Pull Requests 的持续推进，涵盖底层 SFT 训练对齐、自动化版本控制工程，以及前沿 RLHF 算法的实验性引入。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
过去 24 小时无活跃的 Issues 更新。

### 4. 关键 PR 进展
*   **[#1620 SFT 底层训练对齐](https://github.com/allenai/open-instruct/pull/1620)**
    *   **作者**: finbarrtimbers
    *   **摘要**: 旨在验证 `open_instruct/olmo_core_finetune.py` 与纯 `olmo-core` 的 SFT 循环训练保持严格的数学等效性。此举是为了排查并修复参考实验中观察到的损失发散问题，对保障后续 RL 微调的基础数据质量和基线一致性至关重要。
*   **[#1636 动态版本控制](https://github.com/allenai/open-instruct/pull/1636)**
    *   **作者**: BrownianNotion
    *   **摘要**: 修复了项目版本号被硬编码为 `0.1.0` 的工程问题。引入了基于 Git tags 和 commit 信息的动态版本生成机制（例如生成 `0.2.1.dev106+...` 格式）。这显著提升了 RL 实验的可复现性和依赖管理的确定性。
*   **[#1628 引入 Delightful PG 与 Kondo Gate](https://github.com/allenai/open-instruct/pull/1628)**
    *   **作者**: finbarrtimbers
    *   **摘要**: 核心算法更新。基于最新研究（[Osband 2026](https://arxiv.org/abs/2603.14608)），为 GRPO（Group Relative Policy Optimization）引入了 `--use_delight` 参数。该算法通过 `sigmoid(advantage * (-new_logprobs.detach()))` 即 `sigmoid(delight)`，在 Token 级别对策略梯度（PG）项进行门控。这种方法利用了优势函数和动作惊奇度的乘积，有望在 RLHF 阶段实现更精细的信用分配。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **紧跟前沿 RL 算法演进**：从 PR #1628 可以看出，该项目不仅是 LLM 微调的工具集，更是最新学术成果（如基于惊奇度的 Token 级策略梯度门控）的快速落地试验田，为研究社区提供了测试下一代 RLHF 算法的基线环境。
2.  **追求极致的工程严谨性**：PR #1620 展现了团队对跨框架训练一致性对齐的严苛要求。在强化学习中，基座 SFT 模型的微小偏差会导致 RL 阶段的 Reward Hacking 或训练崩溃，这种底层排查工作是构建稳定 RL 生态的基石。
3.  **持续优化的开发者体验**：通过引入动态版本控制（PR #1636）和底层架构解耦（如适配 `olmo-core`），项目正在为更复杂的分布式 RL 训练和规模化扩展铺平道路，对开发者和研究人员而言具备极高的实用价值。

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

# RL 日报摘要：Gymnasium (2026-04-26)

## 1. 今日速览
过去 24 小时内，Gymnasium 项目整体处于平稳迭代期。项目无新增代码发布，社区无新增 Issues，仅有 1 个社区贡献的 Pull Request 更新。当前项目的核心维护工作侧重于生态扩展和文档完善。

- **Issues 更新**: 0 条
- **PR 更新**: 1 条
- **新版本发布**: 0 个

## 2. 版本发布
过去 24 小时无新版本发布。
*(注：当前项目核心 API 已高度成熟，版本迭代频率趋缓。)*

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日唯一的动态为社区提交的第三方环境文档补充申请。

- **[#1563 [OPEN] Update third_party_environments.md: Add external environment BalloonPoppingChallenge](https://github.com/Farama-Foundation/Gymnasium/pull/1563)**
  - **作者**: zuorenchen
  - **摘要**: 请求在 Gymnasium 官方文档的第三方环境列表中新增 **Balloon Popping Challenge**。该环境是一个 **6-DoF（六自由度）火箭 GNC（制导、导航与控制）仿真环境**。其主要任务为模拟主动控制火箭，以击落散布在空中的气球。
  - **生态价值**: 该 PR 反映了 Gymnasium 在复杂物理仿真、特别是航空航天与连续控制领域的持续受关注度。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管目前代码库层面的更新较少，Gymnasium 依然是强化学习开源生态不可替代的核心基建：

1. **统一的 API 标准**：作为 `gym` 的直接继承者，Gymnasium 制定的标准 API（如 `reset`, `step`, `observation/action space` 规范）已成为整个 RL 领域（包括 CleanRL, Stable-Baselines3, Ray RLlib 等主流框架）的事实标准。
2. **无缝的算法集成**：开发者只需确保自定义环境符合 Gymnasium API 规范（如本次 PR 中的 6-DoF 火箭环境），即可直接调用市面上所有主流 RL 算法库进行训练，大幅降低工程门槛。
3. **活跃的长尾生态**：如本日 PR 所示，学术界和工业界仍在源源不断地将各种前沿或垂直领域（如流体力学、无人机控制、GNC 仿真）的物理引擎和仿真器包装为 Gymnasium 环境。它是连接“底层仿真器”与“上层强化学习算法”的最重要桥梁。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL 开源生态日报：PettingZoo
**日期**: 2026-04-26 | **项目**: [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. 今日速览
过去 24 小时，PettingZoo 仓库整体趋于平稳。无新代码合并（PR 更新为 0），无新版本发布。开发讨论区新增 1 条关于底层 API 机制（多维离散动作空间掩码）的技术咨询，目前该 Issue 已关闭。

### 2. 版本发布
*   **过去 24 小时无新版本发布**。项目当前主线保持稳定，Farama 基金会团队可能正在筹备下一阶段的底层重构或功能积累。

### 3. 重点 Issues
*   **[#1328](https://github.com/Farama-Foundation/PettingZoo/issues/1328) [CLOSED] 多维离散动作空间下的 Action Masking 支持探询**
    *   **作者**: unleex
    *   **核心痛点**: 开发者在尝试为 `MultiDiscrete` 动作空间引入动作掩码时，未能通过项目自带的并行 API 测试（`parallel_api_test`）。报错提示动作掩码不是合法的 NumPy 数组，尽管其动作空间定义本身是不等长的。
    *   **技术价值**: 该问题直击当前多智能体强化学习（MARL）环境开发中的一个常见痛点——即如何优雅且兼容地在 `MultiDiscrete` 空间中处理异构/不等长维度的掩码。虽然已关闭，但反映了社区对复杂动作空间约束的强烈需求。

### 4. 关键 PR 进展
*   **过去 24 小时无活跃 PR 更新**。代码库今日处于静默期。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **统一且严格的 API 标准**: PettingZoo 对多智能体环境的交互接口制定了极高的标准（如 AEC 标准）。即便如 Issue #1328 所示，开发者在使用复杂 Action Masking 时也会受到 `parallel_api_test` 的严格约束，这极大地保障了生态内环境的鲁棒性和互换性。
*   **Farama 标准生态的基石**: 作为 Farama Foundation 旗下项目，PettingZoo 是 Gymnasium 在多智能体领域的自然延伸。它与当前 RL 生态的主流组件（如 Stable-Baselines3、Tianshou 等）保持着深度的底层对齐。
*   **MARL 算法验证的首选**: 尽管日常迭代节奏稳健，但其在标准环境通信协议上的统治力，使其依然是检验新型 MARL 算法（尤其是处理复杂离散动作空间的算法）的基准测试平台。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>