# RL 开源生态日报 2026-06-27

> 生成时间: 2026-06-26 22:22 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已彻底告别早期的“算法沙盒”状态，全面演进为支撑大模型复杂对齐与 Agentic 交互的**工业级基座**。从今日的整体动态来看，生态内呈现出清晰的分层结构：底层经典环境（如 Gymnasium, PettingZoo）正在进行激进的基础设施现代化重构；而占据主导地位的 LLM RLHF 框架（如 TRL, verl, AReaL）则正在深水区跋涉，死磕超大规模训练时的显存毛刺、异构算力压榨以及多轮 Agent 交互的底层逻辑。

## 各项目活跃度对比
过去 24 小时内，头部项目保持着高强度的迭代节奏，而部分经典传统 RL 库处于平稳维护期。具体活跃度数据如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 9 | 35 | 1 | 重磅发布 v1.7.0，大幅优化 SFT 显存，全力推进 AsyncGRPO 与 Agent 训练 |
| **verl** | 19 | 23 | 0 | 死磕多轮 Agent 上下文保留，深度适配多节点与 AMD/NPU 异构算力 |
| **AReaL** | 1 | 16 | 0 | 突破单一文本范式，发力扩散模型 RL、多教师蒸馏与 PD 分离架构 |
| **slime** | 3 | 7 | 0 | 极速适配前沿模型架构（Gemma4, Qwen3.5-VL），死磕底层显存优化 |
| **Gymnasium** | 5 | 3 | 0 | 底层物理引擎大修（迁移至 Pymunk），激进拥抱 Python 3.14 与 Numpy 2.0 |
| **PettingZoo** | 2 | 5 | 0 | 聚焦多智能体 API 规范化，提升代码规范并引入 AI 辅助代码审查 |
| **ROCK** | 0 | 5 | 0 | 强化 Serverless 运行时支持，深度整合 SWE-bench 等 Agent 评测基准 |
| **ROLL** | 1 | 2 | 0 | 重仓华为昇腾生态，打通 FSDP2 与 Megatron 双引擎在国产 NPU 上的链路 |
| **Open Instruct**| 0 | 2 | 0 | 探索前沿的 On-Policy Distillation (OPD) 算法机制 |
| **OpenRLHF** | 0 | 1 | 0 | 精细化打磨 Agent 场景下的 Token 长度惩罚与 action_mask 机制 |
| **CleanRL** | 1 | 0 | 0 | 社区精准定位 Envpool 在 PPO GAE 计算时的底层时序差分 Bug |
| *其他项目* | *0* | *0* | *0* | rl_games, SB3, Tianshou, torchtune 过去 24h 无实质代码活动 |

## 共同关注的研究与工程方向
基于今日的代码变动，当前 RL 生态在算法研究与系统工程两个维度展现出了高度趋同的演进方向：

**研究侧信号：**
1. **On-Policy 蒸馏（OPD）与多教师引导**：如何稳定 RL 训练的方差是当前痛点。verl 和 Open Instruct 均在今日推进特权上下文教师打分（OPD）机制，AReaL 也引入了多教师在线蒸馏，将 RL 的探索能力与蒸馏的稳定性结合已成为前沿热点。
2. **超越单一文本的 RL 范式**：多模态与生成式模型的 RL 后训练正在成为标配。AReaL 发力扩散模型（Diffusion RL），slime 迅速适配 Qwen3.5-VL 等视觉模型，RL 的作用域正在泛化。
3. **Agentic RL 的标准化链路**：多轮工具调用、终止工具控制、复杂动作空间（Action Mask）的奖励分配等复杂 Agent 交互场景，正在 TRL、OpenRLHF 等框架中被确立为标准功能。

**工程/基础设施侧信号：**
1. **极致的显存与计算图压榨**：随着模型规模扩大，框架都在向底层计算图动刀。如 TRL 切换 `chunked_nll` 砍掉 30% 显存，slime 切断无用 Entropy 计算图，以及 verl 对 GRPO 显存峰值毛刺的机制级反思。
2. **异构算力与高并发推理适配**：训练与推理并存的压力促使框架拥抱新硬件与新架构。verl 和 ROLL 在深度适配昇腾 NPU 与 AMD 集群；AReaL 则通过 Prefill-Decode (PD) 分离和 FP8 权重直传来突破通信与显存瓶颈。
3. **云原生与全生命周期管理**：针对 RL 训练潮汐效应的基础设施建设加快。ROCK 接入了阿里云 Serverless 运行时并强化沙箱归档生命周期，大幅降低海量并发环境交互的闲置成本。

## 差异化定位分析
尽管大方向一致，但各核心项目在切入点与架构哲学上有着明确的护城河：
- **TRL**：巩固其作为**最广泛使用的对齐算法集合库**地位。它的迭代最贴近普通开发者，如开箱即用的 `quantization_config`、Adaptive Beta-DPO 等，强调 API 易用性与代码洁癖。
- **verl**：定位为**超大模型算力压榨与底层系统排错的试验场**。它专注于解决真实工业级痛点（如 MoE 梯度爆炸、CP>1 并行异常），并走在全面适配非 Nvidia 生态的最前沿。
- **AReaL**：致力于打造**全生命周期的多模态服务平台**。它是少数将扩散模型 RL 与复杂 Agentic 路由归因（OpenClaw）深度整合的框架，且在新一代分布式调度器（HTTP-Ray）上布局深远。
- **Gymnasium / PettingZoo**：作为**经典环境的守望者**，它们不追潮流，而是通过果断切割历史技术债（如放弃 Python 3.9、弃用停更的 Box2D），确保底层物理测试基准在未来 5 年的绝对稳定与可复现。

## 社区热度与成熟度
当前 RL 生态的社区成熟度已出现明显的分层：
1. **TRL 与 verl 呈现出工业级的极高成熟度**。单日数十个 PR 的快速流转，且包含大量底层重构（如 Data Collator 对齐、冗余代码删除），表明核心团队不仅在写新功能，更有充足的精力维持高压的代码质量审查。
2. **新型基础设施（如 ROCK）展现了极强的工程落地导向**。它们开始引入大语言模型（如 Codex/Claude）辅助复杂代码与文档的 Review，这是大型开源项目维护模式的新趋势。
3. **经典单文件库（如 CleanRL）进入“看透底层”的平稳期**。活跃度虽低，但社区一旦有反馈（如 Envpool GAE Bug），均是直指底层张量时序计算的核心逻辑，体现了其极客与透明的属性。

## 值得关注的趋势信号
1. **MoE 架构的 RL 训练从“可用”走向“好用”**：今日 verl 记录 MoE 负载均衡指标，AReaL 打通 SGLang 下大型 MoE 的 LoRA 训练，slime 完整适配 Gemma4 MoE。这标志着框架侧已经基本扫清了 MoE 模型在 RL 阶段的显存与路由通信障碍。
2. **训练与推理引擎的深度融合加速**：底层并发与显存优化日益基于最新技术栈（如 PyTorch 2.9.0, FSDP2, vLLM 0.18+）。特别是 TRL 针对异步架构与 Packing 感知动态批处理的打磨，说明 Train-Rollout 交叠架构的设计已进入深水区。
3. **工具调用 Token 的奖励精细化分配**：OpenRLHF 修复超长惩罚中工具响应 Token 的污染问题，TRL 完善 Agent 终止工具逻辑。这意味着 RLHF 的标的正在从“闲聊对齐”彻底转向“复杂推理与编码场景”，对 Reward 与 Token Mask 的控制精度提出了极高要求。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 开源生态日报：阿里巴巴 ROLL 框架 (2026-06-27)**

### 1. 今日速览
过去 24 小时内，ROLL 仓库共有 3 项更新，无新版本发布。社区与研发重点高度聚焦于**华为昇腾生态的深度适配**，包括 FSDP2/vLLM 路线的文档完善以及 MindSpeed/Megatron 后端的底层支持。此外，针对前沿 MoE 模型（Qwen 3.6）的算法支持问题有了明确的闭环。

### 2. 版本发布
*   **无新版本发布**。当前项目仍处于底层架构（如 FSDP2 与 vLLM 0.18+）的迭代与重构阶段。

### 3. 重点 Issues
*   **#449 [CLOSED] 支持 Qwen 3.6 MOE 模型 GRPO 吗？**
    *   **链接**: [alibaba/ROLL Issue #449](https://github.com/alibaba/ROLL/issues/449)
    *   **分析**: 由用户 `chenlongxiabc` 于上月发起，今日正式关闭。该问题反映了社区对 ROLL 支持新一代 MoE 架构及 GRPO（Group Relative Policy Optimization）算法的高度关注。官方的关闭标志着针对此类大模型 GRPO 训练的支持路径或文档反馈已形成闭环。

### 4. 关键 PR 进展
今日更新的两个 PR 均与异构计算硬件（Ascend NPU）的深度适配相关，展现了 ROLL 在跨平台 RL 训练上的工程投入：

*   **#466 [CLOSED] docs: update Ascend NPU documentation**
    *   **链接**: [alibaba/ROLL PR #466](https://github.com/alibaba/ROLL/pull/466)
    *   **分析**: 该 PR 统一更新了昇腾 NPU 的 Dockerfiles、示例、CI 及文档，全面对齐当前的 **FSDP2 + vLLM-Ascend** 技路线。核心依赖大版本升级：CANN 升级至 9.0.0，PyTorch 升级至 2.9.0，vLLM 及 vLLM-Ascend 升级至 0.18.0。PR 已合并关闭，标志着 FSDP2 路线在 NPU 上的可用性趋于稳定。
*   **#456 [OPEN] [feat] Support ascend mindspeed & megatron and add CI tests**
    *   **链接**: [alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)
    *   **分析**: 这是一个重量级的特性更新，旨在引入基于 MindSpeed 的 NPU 初始化补丁、Megatron 优化器/Offload 兼容性更新以及 NPU 专属的 attention mask 处理。同时加入了 Ascend MindSpeed CI 工作流和 Qwen3 DPO 的 Megatron 配置。该 PR 的推进意味着 ROLL 正在打通 **FSDP2 与 Megatron 双引擎**在国产 NPU 上的 RL 训练能力。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **紧跟最新技术栈**: 毫无滞后感地适配 PyTorch 2.9.0、FSDP2 以及 vLLM 0.18.0，确保框架在底层并发与显存优化上保持第一梯队。
2.  **深度切入国产算力（NPU）生态**: 在 RL 算力日益紧缺的当下，ROLL 不仅支持常规 GPU，更在深度对接华为昇腾（CANN/MindSpeed/Megatron）。这种跨硬件平台的强化学习部署能力极具产业落地价值。
3.  **对齐前沿 RL 算法与模型**: 从 Issue #449 可见其对 Qwen 3.6 MoE 及 GRPO 等当前最热门的 Post-training 技术的积极支持。结合 PR #456 中暴露的 Qwen3 DPO 配置，表明 ROLL 是一个真正面向前沿大语言模型对齐训练的工业级框架。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 开源生态日报**
**日期**: 2026-06-27

### 1. 今日速览
过去 24 小时内，ROCK 仓库无新增 Issue 和 Release，但代码仓库保持了活跃的迭代节奏，共有 **5 个 PR** 取得了进展。从更新轨迹来看，当前核心开发工作主要聚焦于 **SDK 能力增强（分页与数据集解析）、底层沙箱生命周期管理（归档与日志）、以及 Serverless 运行时的支持**。

### 2. 版本发布
- **无**。（当前 v1.9.x 仍为核心稳定版本，主要在推进配套文档与生态工具的完善）。

### 3. 重点 Issues
- **无新增更新**。当前问题追踪处于相对平静期。

### 4. 关键 PR 进展
以下 5 个 PR 在过去 24 小时内均有活跃更新，反映了当前的基础设施建设重心：

- **[PR #1171] feat(datasets): enhance SDK with pagination, file ops, query APIs, and format parsing**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK PR #1171](https://github.com/alibaba/ROCK/pull/1171)
  - **解析**: 大幅强化了 SDK 处理数据集的能力。引入了用于分页的泛型，增加了 `get_dataset()` 等查询 API，并支持任务文件的浏览/下载。同时，集成了针对 PinchBench、SWE-bench、TB2 等主流 RL/Agent 测试基准的可插拔格式解析器。
- **[PR #1095] feat(archive): integrate archive lifecycle into sandbox state machine, operator, and reconciler**
  - **作者**: zhangjaycee | **链接**: [alibaba/ROCK PR #1095](https://github.com/alibaba/ROCK/pull/1095)
  - **解析**: 涉及底层核心架构调整。将 archive（归档）生命周期集成至沙箱状态机、operator 及 reconciler 中。状态机扩展为包含 `archiving` 与 `archived` 在内的 6 个状态，提升了大规模 RL 训练环境与沙箱实例的资源回收与管理效率。
- **[PR #1169] docs: add image mirror guide for v1.9.x (#1168)**
  - **作者**: jake11-oho | **链接**: [alibaba/ROCK PR #1169](https://github.com/alibaba/ROCK/pull/1169)
  - **解析**: 完善了 v1.9.x 版本的文档，新增了 `rock image mirror` 命令的双语使用指南，详细覆盖了新加坡（默认）与上海（ACR 同步）的镜像仓库配置及网络路由策略。
- **[PR #867] feat: add Alibaba Function Compute serverless runtime operator support**
  - **作者**: insight-bit | **链接**: [alibaba/ROCK PR #867](https://github.com/alibaba/ROCK/pull/867)
  - **解析**: 长线运行的 PR，旨在为 ROCK 添加阿里云函数计算（FC）的 Serverless 运行时支持。这将有助于在 RL 任务（如环境模拟、推理）中实现按需扩缩容，降低闲置算力成本。
- **[PR #1174] Feat/add time log**
  - **作者**: zhongwen666 | **链接**: [alibaba/ROCK PR #1174](https://github.com/alibaba/ROCK/pull/1174)
  - **解析**: 新增任务执行的时间日志记录功能，有助于开发者在复杂的 RL 训练流中更好地追踪各阶段耗时，进行性能瓶颈分析。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
ROCK 正在从单纯的训练框架向**全生命周期的 RL 基础设施**演进，其近期演进价值体现在三个方面：
1. **贴近前沿 Agent 评测标准**：通过 PR #1171 可以看出，ROCK 正在深度整合 SWE-bench 等当前最火热的 LLM Agent 代码推理评测数据集解析器，大幅降低了研究者在此类复杂环境下的数据接入门槛。
2. **追求极致的算力效率**：PR #867 (函数计算 Serverless 运行时) 与 PR #1095 (沙箱归档生命周期) 表明，项目组在死磕底层云原生架构。在 RLHF 或多轮 Agent 训练中，环境交互往往具有显著的潮汐效应和间歇性，Serverless 与精细化的状态机回收是降低海量并发训练成本的终极解法。
3. **工程化落地能力扎实**：从镜像同步（v1.9.x 镜像指南）到耗时监控（time log），这些看似不起眼的工程化打磨，证明了 ROCK 不是停留在论文上的 Demo，而是能够支撑大规模、跨国界（多 VPC 镜像）工业级落地的实战武器。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📦 slime (THUDM/slime) RL 生态日报 - 2026.06.27

## 1. 今日速览
过去 24 小时内，slime 项目保持高频开发迭代，无新版本发布。社区共更新了 **3 条 Issues** 与 **7 条 Pull Requests**。今日的活动高度聚焦于**底层训练机制优化**（如共存权重同步修复、Entropy 梯度截断、PG Loss 聚合）、**多模态与新增型支持**（Gemma4, Qwen3.5-VL），以及**Bug 修复**（如 Multi-head MTP 日志崩溃问题）。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
今日的 Issues 主要围绕特定训练配置和 Logging 环节下的稳定性与边缘 Bug：

*   **[BUG] Multi-head MTP (`--mtp-num-layers > 1`) 在训练日志记录时崩溃** (作者: ZiyiTsang)
    *   **详情**: 由于底层代码硬编码了“单 MTP 层”的假设，当启用多头 MTP 训练时，会导致 per-step MTP-loss 记录环节直接崩溃。该问题已被作者迅速提交 PR 修复（见下方 PR #2132）。
    *   **链接**: [THUDM/slime Issue #2131](https://github.com/THUDM/slime/issues/2131)
*   **[BUG] train.py 中 `num_rollout==0` 报错** (作者: LittleYouEr)
    *   **详情**: 在使用 `example/search-r1/` 跑通 Demo 后，尝试进行纯评估测试，触发 `num_rollout == 0` 分支异常。
    *   **链接**: [THUDM/slime Issue #1785](https://github.com/THUDM/slime/issues/1785)
*   **[BUG] 稳定训练至一半发生 OOM（已开 cp）** (作者: glennccc)
    *   **详情**: 训练过程中途突发内存溢出（OOM），此时 SGLang Engine 仍在处理 `generate` 和 `abort_request` 请求。尽管开启了上下文并行（CP），问题依然存在。
    *   **链接**: [THUDM/slime Issue #1136](https://github.com/THUDM/slime/issues/1136)

## 4. 关键 PR 进展
今日的 PR 质量极高，涉及训练性能优化、大模型架构扩展及核心代码健壮性提升：

**🔍 训练机制与性能优化**
*   **[PR #2130] 当 `entropy_coef == 0` 时跳过熵梯度计算** (作者: CSUN1997)
    *   **意义**: 重大性能优化。此前即便不需要策略熵（coef=0），系统仍会保留完整的 `[num_tokens, vocab]` 计算图与 `logits.clone()`。此 PR 有效切断了无用的后向传播图，大幅节省显存和计算开销。
    *   **链接**: [THUDM/slime PR #2130](https://github.com/THUDM/slime/pull/2130)
*   **[PR #2090] 增加 `pg_loss` 聚合模式** (作者: EazyReal)
    *   **意义**: 为 slime 引入了 Prompt-group 归一化和固定除数归一化。将其从脆弱的自定义 reducer 转为原生支持，增强了 PG Loss 计算的灵活性。
    *   **链接**: [THUDM/slime PR #2090](https://github.com/THUDM/slime/pull/2090)

**🤖 模型生态扩展（前沿架构支持）**
*   **[PR #2135] 增加 Gemma4 (Dense 与 MoE) 支持** (作者: EazyReal)
    *   **详情**: 完整实现了 Gemma4 稠密与 26B-A4B MoE 架构的 Megatron 模型支持、HF 权重转换，并附带了 GSM8K 的验证配方。
    *   **链接**: [THUDM/slime PR #2135](https://github.com/THUDM/slime/pull/2135)
*   **[PR #2075] 通过 Megatron-Bridge 支持 Qwen3.5-VL (Dense + MoE)** (作者: demouo)
    *   **详情**: 扩展了多模态大模型的支持边界，通过标准的桥接方法注册了官方的 Qwen35VLBridge。
    *   **链接**: [THUDM/slime PR #2075](https://github.com/THUDM/slime/pull/2075)

**🛠 核心修复与文档**
*   **[PR #2134] 修复共存权重同步中的空 Bucket 异常** (作者: EazyReal)
    *   **详情**: 修复了 TP 切分下局部 rank 无 HF 张量时，强制构建 `FlattenedTensorBucket` 导致 Gloo 通信阻塞崩溃的底层 Bug。
    *   **链接**: [THUDM/slime PR #2134](https://github.com/THUDM/slime/pull/2134)
*   **[PR #2132] 适配 Multi-head MTP 损失日志记录** (作者: ZiyiTsang)
    *   **详情**: 闪电修复了今日 Issue #2131 报告的多头 MTP 崩溃问题。
    *   **链接**: [THUDM/slime PR #2132](https://github.com/THUDM/slime/pull/2132)
*   **[PR #2133] 文档更新：补充 `coding_agent_rl` 示例索引** (作者: aoshen02)
    *   **详情**: 使端到端 SWE 编码智能体 RL 示例更容易被发现。
    *   **链接**: [THUDM/slime PR #2133](https://github.com/THUDM/slime/pull/2133)

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **跟进最前沿的多模态与 MoE 架构**：项目在极短的时间内适配了 **Gemma4 MoE** 与 **Qwen3.5-VL**，证明其底层并行策略（如 Megatron-Bridge）具备极强的工程扩展性，能够迅速承接下一代大模型的 RLHF/RL 训练需求。
2.  **死磕底层训练内存与通信机制**：从处理 Colocated Engine（ rollout 与 training 共置）的空张量块同步（PR #2134），到 OOM 排查，再到跳过无用 Entropy 计算图以削减显存峰值（PR #2130），slime 正在啃 RL 训练框架中最硬的“系统级骨头”。
3.  **贴近真实的 Agent RL 落地**：针对 Search-R1、SWE Coding Agent 等复杂多步推理场景的适配，以及关于 MTP（Multi-Token Prediction）机制在 RL 阶段的训练与日志修复，表明 slime 正在超越传统的对话对齐，向复杂的 Agentic RL 场景深水区迈进。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-06-27)**

### 1. 今日速览
过去 24 小时内，AReaL 仓库共更新 **16 个 PR** 和 **1 个 Issue**，无新版本发布。整体生态处于高度活跃的功能迭代期，核心动向集中在**底层架构优化（FP8转移、PD分离、Ray调度）**与**前沿算法的广度拓展（MoE训练、扩散模型RL、多教师蒸馏）**。

### 2. 版本发布
- **无新版本发布**。
- *注：目前 [PR #1404](https://github.com/inclusionAI/AReaL/pull/1404) 正在引入 PyPI 发布工作流，未来的版本分发将更加标准化。*

### 3. 重点 Issues
- **[#1442](https://github.com/inclusionAI/AReaL/issues/1442) [bug] attn_impl=sdpa 在 FSDP+HF 后端对 packed sequences 静默输出错误的 logp**
  作者: BaadenAyane
  **摘要：** 发现了一个严重的一致性 Bug。在使用 FSDP + HuggingFace 后端，并对 packed sequences 采用 `sdpa` 注意力机制时，模型会静默计算出错误的 log probabilities (logp)。这种不报错但影响数据准确性的底层 Bug 对 RL 训练危害极大，需引起社区重视。

### 4. 关键 PR 进展
今日的 PR 更新涵盖了多个重要技术方向，以下为核心进展提取：

- **算法与模型支持**
  - **[#1444](https://github.com/inclusionAI/AReaL/pull/1444) 支持 Qwen3.6-35B-A3B (MoE) LoRA GRPO 训练**：打通了 SGLang 后端下大型 MoE 模型的 LoRA GRPO 训练流程，已在 8×A800 节点验证。
  - **[#1410](https://github.com/inclusionAI/AReaL/pull/1410) 扩散模型 RL 后训练 (Diffusion RL post-training Phase 1 PoC)**：将 RL 扩展至扩散模型领域，实现了基于 SD1.5 + LoRA + REINFORCE 算法的概念验证。
  - **[#1400](https://github.com/inclusionAI/AReaL/pull/1400) 多教师在线蒸馏**：支持在 On-Policy 蒸馏框架中配置多个具有混合权重的教师模型。

- **底层与分布式优化**
  - **[#1406](https://github.com/inclusionAI/AReaL/pull/1406) Megatron FP8 权重直传**：在 AWEX 共置模式下支持 FP8 权重直接传输，避免了隐式反量化为 BF16 的开销，大幅提升显存与通信效率。
  - **[#1364](https://github.com/inclusionAI/AReaL/pull/1364) PD 分离架构**：支持 `DP=2(1P1D), TP=n`，将 Prefill 和 Decode 阶段分离以解决解码阶段显存受限导致的 GPU 算力闲置问题。
  - **[#1441](https://github.com/inclusionAI/AReaL/pull/1441) 基于 HTTP 的 Ray Scheduler**：采用子进程管理的 RPC Worker 替代原有 Ray-native 调度路径，实现基于 HTTP 的张量数据序列化。

- **训练机制与服务化设计**
  - **[#1443](https://github.com/inclusionAI/AReaL/pull/1443) / [#1417](https://github.com/inclusionAI/AReaL/pull/1417) PPO Actor Loss 聚合模式重构**：显式化了分布式规约契约，改变了以往以 Token 数量为单位的局步聚合方式，解决长序列梯度权重失衡问题。
  - **[#1440](https://github.com/inclusionAI/AReaL/pull/1440) / [#1435](https://github.com/inclusionAI/AReaL/pull/1435) / [#1434](https://github.com/inclusionAI/AReaL/pull/1434) CLI 服务化脚手架**：合并入多个 CLI 子命令，将训练 (`areal train`)、推理 (`areal inf`) 和 Agent 服务进行解耦与服务化设计。
  - **[#1383](https://github.com/inclusionAI/AReaL/pull/1383) OpenClaw Agent 运行时集成**：为每个 RL 会话生成独立的 OpenClaw 网关子进程，绑定独立的 LLM Key，实现基于 Episode 的精准归因。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **突破单一 LLM 边界，向多模态与 Agent 深度演进**：AReaL 正在跳出传统的纯文本 RLHF 范式，积极探索扩散模型（Diffusion RL）与复杂的 Agentic 路由归因（OpenClaw runtime），这在当前 RL 框架中极为前沿。
2. **直击工业级大模型训练痛点**：社区正在快速整合最新的硬核系统优化，例如 MoE 架构下的 LoRA 适配、显存通信优化（FP8 权重直传），以及极致的推理吞吐优化（PD 分离机制）。这表明 AReaL 正在为 10B+ 甚至百亿参数规模的廉价/高效训练铺路。
3. **从“算法库”向“全生命周期服务平台”转型**：近期高频合并的推理/训练 CLI 工作流，以及新一代的 HTTP-Ray 分布式调度器，意味着 AReaL 正致力于降低更广泛的工程团队将 RL 流程落地到生产环境的门槛。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

这里是 2026 年 6 月 27 日的 TRL（Transformer Reinforcement Learning）开源生态日报摘要。

### 1. 今日速览
过去 24 小时内，TRL 仓库展现了极高的活跃度。共有 **1 个重磅新版本**发布，**9 条 Issue** 发生状态更新或讨论，以及高达 **35 个 PR** 取得进展（包含合并、审查与提交）。核心开发重心依然集中在 **GRPO/vLLM 集成优化、QLoRA 训练体验简化，以及多环境 Agent 训练支持**上。

### 2. 版本发布
- **[Release v1.7.0](https://github.com/huggingface/trl/releases)**：该版本正式落地了 SFT 默认 `loss_type` 到 `"chunked_nll"` 的切换。此更新带来了巨大的显存优化，平均减少 **~30% 的峰值 VRAM**，在处理大词表模型时优化幅度甚至可达 **~50%**，极大降低了 SFT 的硬件门槛。

### 3. 重点 Issues
今日的 Issue 主要聚焦于底层训练稳定性和 Agent 复杂交互场景：
- **vLLM 结合 PEFT 疑难杂症**：
  - [#6166](https://github.com/huggingface/trl/issues/6166) [Bug] GRPO Trainer 在 vLLM 返回 NaN token logprob 时崩溃（`colocate` 模式下类型推断错误）。
  - [#5975](https://github.com/huggingface/trl/issues/5975) [Feature] 请求为 GRPO 和 AsyncGRPO 添加“仅同步 Adapter 权重”的 vLLM LoRA 同步模式，以取代目前的合并全量权重同步，提升效率。
- **Agent 与强化学习训练控制**：
  - [#5389](https://github.com/huggingface/trl/issues/5389) [Feature] 请求在 `GRPOTrainer` 的 Agent 训练循环中支持“终止工具”，允许特定 Tool 调用直接作为会话结束信号。
- **历史架构与逻辑澄清（已关闭）**：
  - [#3671](https://github.com/huggingface/trl/issues/3671) 解决了多卡环境下 GRPO + vLLM colocate + PEFT 导致的训练挂起问题。
  - [#3750](https://github.com/huggingface/trl/issues/3750) 探讨并澄清了 PPOTrainer 中关于 PAD token 的奖励分配以及 `missing_eos_penalty` 的逻辑实现。

### 4. 关键 PR 进展
开发者在今日推进了大量底层重构与功能增强（由核心成员 `qgallouedec` 等主导）：
- **GRPO 与异步架构升级**：
  - [#6092](https://github.com/huggingface/trl/pull/6092) 为 AsyncGRPO 引入支持 Packing 感知的动态批处理，优化 token 边界控制。
  - [#6001](https://github.com/huggingface/trl/pull/6001) & [#6002](https://github.com/huggingface/trl/pull/6002) 引入多环境支持，允许数据集为每个样本指定独立的 RL 环境及其工具集（Tool dict），极大增强了 Agent 训练灵活性。
  - [#6072](https://github.com/huggingface/trl/pull/6072) 修复了 Async GRPO 中随机 `reset()` 导致的观测值状态不一致问题。
- **QLoRA 与 API 易用性**：
  - [#6157](https://github.com/huggingface/trl/pull/6157) 为 SFT/DPO/GRPO 等所有主要 Trainer 新增 `quantization_config` 参数，免去用户手动加载量化模型或侵入 `model_init_kwargs` 的痛点。
  - [#6155](https://github.com/huggingface/trl/pull/6155) 将 SFT 的序列截断逻辑从 Collator 提前至 Dataset 准备阶段，提升数据流效率。
- **对齐算法前沿探索**：
  - [#6123](https://github.com/huggingface/trl/pull/6123) 实现了 Adaptive Beta-DPO（基于批次内 chosen/rejected 的分布动态调整 β），提升对齐稳定性。
  - [#6122](https://github.com/huggingface/trl/pull/6122) 修复 OnlineDPOTrainer 在开启 `eval_strategy` 时引发的崩溃。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 正在从一个“RLHF 算法集合库”演进为**大模型复杂强化学习的工程基座**。
1. **极致的工程优化**：无论是 v1.7.0 大幅降低 VRAM 的 `chunked_nll`，还是针对 vLLM 的 Colocate、LoRA 高频同步机制的打磨，TRL 正在解决大规模 RL 推理与训练并存（Inference-Training Co-location）时的核心内存与通信瓶颈。
2. **拥抱 Agentic RL**：从近期 PR 对 AsyncGRPO 的大量底层重构（多环境支持、Tool Call 循环、动态 Batch）可以看出，TRL 正在为复杂的 Tool-use 和 Agent 强化学习提供官方标准链路。
3. **高频的工程代码除臭**：单日 35 个 PR 进展中包含了大量 Data Collator 对齐、冗余代码删除和条件导入整理，表明项目在快速迭代的同时，依然维持着极高的代码洁癖和工程严谨性，这是支撑 RL 生态长期发展的关键。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**OpenRLHF RL 生态日报 (2026-06-27)**

**1. 今日速览**
过去 24 小时，OpenRLHF 仓库无新增 Issue、无新增 Release，整体处于维护与代码合并阶段。唯一的活跃动态集中在存量 PR 的更新上，核心方向为优化大模型训练中长度惩罚机制的准确性。
🔗 仓库链接: [github.com/OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

**2. 版本发布**
- **无新版本发布**。当前项目主线开发仍在推进中，未触发新的 Release Tag。

**3. 重点 Issues**
- **无更新**。过去 24 小时内无新增或活跃的 Issue。

**4. 关键 PR 进展**
- **#1246 [OPEN] Fix overlong penalty action token length**
  - **作者**: [Jiang020609](https://github.com/Jiang020609)
  - **更新时间**: 2026-06-26
  - **技术摘要**: 该 PR 旨在修复 [Issue #1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243) 中的超长惩罚计算问题。在包含工具调用的 RLHF 场景中，引入了 `action_mask` 机制来精确计算超长惩罚的长度。这确保了**工具响应的 Token** 不会被错误地计入**模型可训练回复的长度**中，从而避免了由于外部 Token 拉长上下文而导致的错误惩罚。
  - **质量保障**: 已附带 `pytest` 及 `pre-commit` 测试用例。
  - **链接**: [OpenRLHF/OpenRLHF PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
在当前的 LLM 强化学习生态中，纯文本的 PPO 训练已逐渐成为基础，**Agent（智能体）调用工具的复合场景训练**正成为核心痛点。PR #1246 透露出 OpenRLHF 正在深度解决“工具响应 Token 干扰奖励模型评判”的问题。
通过精细化区分“模型自生成 Token”与“环境/工具返回 Token”（引入 `action_mask` 机制），OpenRLHF 正在使其 PPO 算力分配和长度惩罚机制更加贴合真实的 Agent 训练需求。这种在底层训练机制上对复杂场景的向下兼容和精准控制，使其持续保持着极高的工程实战价值，是研究者和工程师微调复杂推理/工具调用模型不可或缺的基础设施。

---
*数据统计区间: 2026-06-26 至 2026-06-27*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

**verl (volcengine/verl) RL 日报摘要 - 2026-06-27**

### 1. 今日速览
- **Issue 活跃度**：过去 24 小时内共有 19 条 Issue 更新。多轮对话 GRPO、MoE 模型训练异常以及底层显存毛刺是社区讨论的焦点。
- **PR 活跃度**：过去 24 小时内共有 23 条 PR 更新。开发者持续在 MoE 负载均衡、跨节点推理引擎适配（vLLM/SGLang）、多模态训练以及 Ascend NPU 生态兼容性上提交代码。
- **版本发布**：过去 24 小时无新版本发布。

---

### 2. 版本发布
今日无新版本发布。当前项目正紧密围绕 [26Q2 Roadmap (Issue #5836)](https://github.com/volcengine/verl/issues/5836) 推进 Megatron FSDP、低精度训练（MXFP8/NVFP4）等核心特性的开发。

---

### 3. 重点 Issues
- **[多轮 Agent 训练] 多轮 GRPO 训练中，Chat Template 移除历史轮次 `<think>` 的问题** ([Issue #6854](https://github.com/volcengine/verl/issues/6854))
  - **摘要**：在使用 Qwen3.5 等思维链模型进行多轮 Agent GRPO 训练时，模板会自动剥离前序轮次的 `<think>` 块。如何正确保留完整的上下文历史是目前多轮强化学习落地的痛点。
- **[底层训练异常] Megatron MoE 在上下文并行 (CP>1) 下发生梯度爆炸** ([Issue #6609](https://github.com/volcengine/verl/issues/6609))
  - **摘要**：在 `CP > 1` 且开启 `use_remove_padding=True` 时，Megatron 后端的 MoE 模型 `actor/grad_norm` 会暴涨，导致验证集分数下降。CP=1 时则表现正常。
- **[系统级 Bug] vLLM rollout 在多节点部署下 DP>1 失败** ([Issue #6856](https://github.com/volcengine/verl/issues/6856))
  - **摘要**：当 RolloutReplica 跨越多个节点（如 LUMI-G, 2x8 AMD MI250X）时，vLLM rollout 在数据并行大于 1 的情况下崩溃。
- **[训练调优] GRPO 训练过程中的 GPU 显存峰值毛刺** ([Issue #456](https://github.com/volcengine/verl/issues/456))
  - **摘要**：在 H200 集群上运行 GRPO 时，开发者观察到间歇性的巨大显存毛刺，探讨引发 OOM 风险的底层机制及调参策略。

---

### 4. 关键 PR 进展
- **[架构演进] 提取可插拔的负载均衡路由模块** ([PR #6712](https://github.com/volcengine/verl/pull/6712))
  - **摘要**：引入 `RouterConfig` 和 `GlobalRequestLoadBalancer`，支持全局粘性推理等内置策略，大幅优化了 Rollout 阶段的请求分发控制。
- **[算法前沿] 支持特权上下文教师打分 (OPSD)** ([PR #6833](https://github.com/volcengine/verl/pull/6833))
  - **摘要**：落地 On-Policy Self-Distillation (OPSD) 算法的第一部分。Teacher 模型基于真实标签（特权信息）进行打分，引导仅看到问题的 Student 模型的 On-Policy rollout。
- **[训练优化] 记录 Rollout 阶段 MoE 负载均衡指标 & R3 路由重放内存优化** ([PR #6853](https://github.com/volcengine/verl/pull/6853), [PR #6860](https://github.com/volcengine/verl/pull/6860))
  - **摘要**：#6853 增加了对路由专家重放数据的监控；#6860 通过按轨迹记录路由痕迹代替生成稠密张量，有效降低了 R3 router 的内存开销。
- **[多模态与存储] 添加 Open-R1 多模态/视频数据预处理 & 支持 fsspec (S3/GS)** ([PR #6849](https://github.com/volcengine/verl/pull/6849), [PR #6850](https://github.com/volcengine/verl/pull/6850))
  - **摘要**：原生支持图像推理和视频多选 QA 的 GRPO 训练；同时在数据读取层支持通过 `fsspec` 直接读取 `s3://` 或 `gs://` 的云端存储路径。
- **[多节点/并行 Bug 修复] 修复 vLLM 多节点推理及 Qwen3.5 序列并行异常** ([PR #6861](https://github.com/volcengine/verl/pull/6861), [PR #6660](https://github.com/volcengine/verl/pull/6660))
  - **摘要**：修复了 `nnodes > 1` 时非主节点由于 `self.engine` 未初始化导致的 vLLM profile 崩溃；解决了 Qwen3.5 Ulysses 序列并行（SP）下 Packed 序列边界泄露的问题。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **超越单轮强化学习的工程落地**：verl 正在快速解决真实 Agent 场景的痛点。从解决多轮对话中思维链上下文丢失（[Issue #6854](https://github.com/volcengine/verl/issues/6854)），到引入 OPSD 自蒸馏算法（[PR #6833](https://github.com/volcengine/verl/pull/6833)），项目已从基础 RLHF 框架进化为复杂 Agent 交互训练的试验场。
2. **极致的分布式与异构算力压榨**：无论是 Megatron + MoE 在 CP>1 环境下的深度排错（[Issue #6609](https://github.com/volcengine/verl/issues/6609)），还是针对 AMD MI250X 多节点集群（LUMI-G）以及华为昇腾 NPU（[PR #6840](https://github.com/volcengine/verl/pull/6840), [Issue #6439](https://github.com/volcengine/verl/issues/6439)）的全面 CI/CD 适配，表明 verl 在追求超大模型算力极致利用上的野心，不再局限于单一 Nvidia 生态。
3. **深入底层引擎进行内存与路由优化**：针对 GRPO 训练引发的显存毛刺进行机制级的反思与调优（[Issue #456](https://github.com/volcengine/verl/issues/456)），同时将推理引擎的负载均衡抽离为高度可定制的 Router 模块（[PR #6712](https://github.com/volcengine/verl/pull/6712)），展现了该项目在 Train-Rollout 交叠架构设计上的深水区探索。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-06-27）：

### 1. 今日速览
截至今日，Open Instruct 仓库在过去 24 小时内无新增 Issue、无新版本发布，但提交了 2 项关键的 PR 更新。整体来看，项目当前处于功能迭代与技术沉淀阶段，开发重点集中在强化学习训练底座的算力优化与分支冲突梳理上。

### 2. 版本发布
**无**。
项目近期未推送新的 Release。目前社区开发者和用户需直接基于 `main` 分支或特定功能分支进行跟踪和测试。

### 3. 重点 Issues
**无**。
过去 24 小时内未产生新的 Issue 讨论或状态更新。

### 4. 关键 PR 进展
今日共有 2 个处于 [OPEN] 状态的 PR 值得关注：

*   **[技术突破] PR #1740：为 OLMo-core GRPO 引入 On-Policy Distillation (OPD)**
    *   **链接**：[allenai/open-instruct PR #1740](https://github.com/allenai/open-instruct/pull/1740)
    *   **作者**：farhatkevin
    *   **摘要**：这是一项极具技术价值的 RL 训练扩展。该 PR 为 OLMo-core 的 GRPO（Group Relative Policy Optimization）算法栈引入了**在线策略蒸馏**机制，作为一个可复用的“教师打分 + 蒸馏损失”层。
    *   **核心机制**：Student 模型保持自主采样 rollouts；被冻结的 Teacher 模型针对 Student 访问的确切前缀进行打分；Learner 通过回归损失将 Student 的分布向 Teacher 收敛。此方法在不破坏 On-Policy 特性的前提下，大幅结合了蒸馏的稳定性与 RL 探索能力。
*   **[工程维护] PR #1741：检查 main 分支与 Tmax 分支的冲突**
    *   **链接**：[allenai/open-instruct PR #1741](https://github.com/allenai/open-instruct/pull/1741)
    *   **作者**：shatu
    *   **摘要**：纯粹的工程维护 PR，用于排查和解决主分支与内部 `Tmax` 功能分支之间的合并冲突，保障后续代码的顺利合入。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **持续攻克“强化学习+蒸馏”的核心痛点**：今日提交的 PR #1740 证明项目并未停留在基础的 RLHF 阶段，而是深入到了 On-Policy Distillation 等前沿领域。在当前 RL 生态中，如何利用 Teacher 模型稳定 Student 模型在 GRPO/PPO 训练中的方差是公认难题，该项目正在提供可落地的工程代码。
2.  **对齐 SOTA 开源底座**：PR 直接与 `OLMo-core` 深度绑定，表明 Open Instruct 正在针对目前最新一代的开源大模型底层进行专属 RL 适配与算子优化。
3.  **RL 工具链的标准化**：将复杂的 RLHF/RLAIF 流程（如 Teacher 打分、Rollout 采样、GRPO 计算）封装为可插拔的 layer（如本 PR 提到的 "reusable teacher-scoring + distillation-loss layer"），为开源社区提供了一套高内聚、低耦合的生产级 RL 脚手架。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

一份基于 GitHub 数据的 CleanRL 项目日报摘要。

### 1. 今日速览
过去 24 小时（截至 2026-06-27），CleanRL 仓库整体活跃度趋于平缓。无新增代码合并（PR）或正式版本发布。社区反馈聚焦于底层环境集成（Envpool）的边缘 Bug 提报，新增 1 条技术性 Issue。

### 2. 版本发布
*   **无新增 Release**。项目当前处于稳定维护期。

### 3. 重点 Issues
*   **#562 [OPEN] GAE Bug for Envpool: Dummy Step Leak**
    *   **作者**: dillonmsandhu
    *   **链接**: [vwxyzxyzjn/cleanrl Issue #562](https://github.com/vwxyzjn/cleanrl/issues/562)
    *   **技术摘要**: 报告了一个影响所有使用 `envpool` 的 PPO Atari 脚本的 Bug。核心问题出在 Envpool 对终止状态（Terminal States）的特殊处理机制上。Envpool 在 `done=True` 之后会引入一个从终止状态到初始状态的“虚拟/泄漏”转移。这种异常的经验流会导致广义优势估计在进行时序差分计算时出现逻辑错误。
    *   **状态**: 待 maintainer 确认与修复。

### 4. 关键 PR 进展
*   **无新增 PR 更新**。代码库近 24 小时无变动。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 的核心壁垒在于其**“单文件强化学习实现”**理念。在当前 RL 生态（如 RLlib, Stable-Baselines3）日益向高度封装、模块化和工厂模式发展的背景下，CleanRL 坚持将算法的所有组件（从网络结构、环境交互到 GAE/Backprop 计算）全部包含在单个 Python 文件中。

这种“反抽象”设计极大地降低了 RL 研究者的阅读和二次开发门槛。以今日的 Issue #562 为例，使用者能够精准定位到 Envpool 的状态转移机制与 PPO 脚本中 GAE 计算的冲突点。对于需要快速定位底层计算图 Bug、修改非标准奖励函数或魔改 PPO/MuZero 等核心算法的算法工程师而言，CleanRL 依然是当前最具透明度和工程可控性的开源基准库之一。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL 日报：Gymnasium 生态追踪 (2026-06-27)**

以下是过去 24 小时内 [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 的核心动态与技术演进分析。

### 1. 今日速览
* **动态统计**：0 个新版本发布，5 条 Issues 更新，3 条 PR 更新。
* **核心趋势**：项目当前正处于**基础设施现代化**与**底层物理引擎迁移**的关键重构期。今日的动态高度集中于适配 Python 3.14、升级 Numpy 依赖、修复 CI 流水线，以及着手解决长期遗留的 Box2D 停维问题。

### 2. 版本发布
* **无新版本发布**。结合今日的 PR 进展，项目大概率在为下一个大版本（将切断部分旧版依赖）做代码冻结或前置测试准备。

### 3. 重点 Issues
今日的 Issue 揭示了当前开发分支中的几个关键技术阻塞点：

* **物理引擎大修呼声**：核心维护者 `jkterry1` 提议将所有环境从 Box2D 迁移至 pymunk。原因是 Box2D 的 Python 绑定已停止维护约 6 年，而 pymunk 仍在活跃维护且文档更完善。
  *链接：[Farama-Foundation/Gymnasium Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597)*
* **CI 机制的严重漏洞**：开发者指出 GitHub Actions 中的 "Run PyTest" 工作流由于 Dockerfile 中 `ARG` 声明位置错误，未能正确限制 NumPy 版本，导致系统实际从未真正测试过对 NumPy 1.x 的向后兼容性。
  *链接：[Farama-Foundation/Gymnasium Issue #1605](https://github.com/Farama-Foundation/Gymnasium/issues/1605)*
* **类型检查与工作流摩擦**：两则 Issue (#1599, #1600) 报告了引入 `ty`（类型检查器）作为 pre-commit hook 带来的阵痛：配置未能正确识别可选模块，产生近百个无效警告，开发者建议不应让 `ty` 警告直接阻断 pre-commit。
  *链接：[Issue #1599](https://github.com/Farama-Foundation/Gymnasium/issues/1599) | [Issue #1600](https://github.com/Farama-Foundation/Gymnasium/issues/1600)*
* **经典环境自定义需求**：建议在 `FrozenLakeEnv` 中开放自定义奖励机制（当前硬编码为 Goal=+1, 其余=0），以便于 RL 研究者进行替代性强化学习实验。
  *链接：[Farama-Foundation/Gymnasium Issue #1364](https://github.com/Farama-Foundation/Gymnasium/issues/1364)*

### 4. 关键 PR 进展
开发团队及社区贡献者针对上述架构问题迅速做出了代码响应：

* **拥抱 Python 3.14 与 NumPy 2.0 时代**（提交者：RewardGuard）：**[PR #1603](https://github.com/Farama-Foundation/Gymnasium/pull/1603)** 添加了对 Python 3.14 的支持，并激进地将最低 NumPy 依赖提升至 2.0（彻底切断 NumPy 1.x 支持）。这与 Issue #1605 遥相呼应，表明维护者选择直接弃用存在 CI 测试漏洞的旧版 NumPy 兼容。
* **Lunar Lander 物理引擎概念验证**（提交者：Lonny154）：作为 Issue #1597 的先决响应，**[PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602)** 提交了使用 Pymunk 替代 Box2D 的 Lunar Lander 概念验证版，成功实现了带种子的地形生成和受限着陆腿物理效果。
* **Pre-commit 与 CI 基础设施修复**（提交者：Trenza1ore）：**[PR #1604](https://github.com/Farama-Foundation/Gymnasium/pull/1604)** 修复了类型检查导致的误报（修正了 `MultiDiscrete.sample` 注释），切换至官方 `ty-pre-commit` hook，并为 Python 3.14 添加了 `box2d-py` 的 fallback 机制。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **绝地武士的试炼场正在翻新**：Gymnasium 目前在进行的 Box2D 到 Pymunk 的迁移（PR #1602 / Issue #1597），直接关系到未来 3-5 年内 RL 基准测试的底层稳定性。Box2D 绑定的“技术负债”若能在此周期内清除，将极大降低当代开发者的环境配置成本。
2. **果断切割技术历史包袱**：通过将底线拉高至 Python 3.14 与 Numpy 2.0（PR #1603），Gymnasium 展现了作为 RL 生态底层 API 的决断力。这保证了其 API 不会为了妥协陈旧的依赖而变得臃肿，使核心代码库能够充分利用现代 Python 与 Numpy 的性能优化（如 ABI3、原生 SIMD 等）。
3. **CI 健壮性的自省**：Issue #1605 暴露的测试盲区是许多大型开源项目的通病。维护者能够敏锐察觉到由于 Docker 构建机制导致的底层依赖版本失控，并迅速通过升级版本基准来修复，体现了极高的工程标准，这是保障 RL 实验可复现性的基石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 PettingZoo 强化学习生态项目日报（2026-06-27）：

### 1. 今日速览
- **Issues 动态**：过去 24 小时更新 2 条，均为已关闭状态。
- **PR 动态**：过去 24 小时更新 5 条，其中 3 条已合并/关闭，2 条处于开启待Review状态。
- **版本发布**：过去 24 小时无新版本发布。
- **核心趋势**：项目当前正处于“底层重构与体验优化”阶段，重点在于**放弃旧版 Python 支持**、**强化代码 Lint 规范**以及**完善环境的底层 API 与渲染细节**。

---

### 2. 版本发布
**无新版本发布 (v0)**。
结合近期密集的底层重构 PR（如移除 Python 3.9），推测项目正在为下一个大版本（或底层依赖更新）做代码冻结前的准备。

---

### 3. 重点 Issues
今日关闭的 2 个 Issue 均为核心功能提议与技术债务清理：

*   **[CLOSED] #1358: Remove Python 3.9 support**
    *   **作者**: jkterry1
    *   **摘要**: 官方决定正式停止对 Python 3.9 的支持，以减轻维护负担并允许使用更新版本的语言特性。
    *   **链接**: [Farama-Foundation/PettingZoo Issue #1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358)
*   **[CLOSED] #1334: [Proposal] Add .state() support for Pursuit environment**
    *   **作者**: jkterry1
    *   **摘要**: 呼吁社区为 Pursuit 环境补充全局状态（`.state()`）接口支持，这对多智能体集中式训练（CTDE）等算法至关重要。
    *   **链接**: [Farama-Foundation/PettingZoo Issue #1334](https://github.com/Farama-Foundation/PettingZoo/issues/1334)

---

### 4. 关键 PR 进展
今日的 PR 活动高度聚焦于代码质量提升与历史遗留 Bug 修复，开发者 `mfornet` 贡献了大部分核心代码：

*   **[MERGED/CLOSED] #1375: Remove Python 3.9 support**
    *   **进展**: 落实 Issue #1358。将 `requires-python` 提升至 `>= 3.10`，并同步更新了 CI 测试矩阵和 ruff 的 `target-version`。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1375](https://github.com/Farama-Foundation/PettingZoo/pull/1375)
*   **[MERGED/CLOSED] #1342: Add state() support to the pursuit environment**
    *   **进展**: 落实 Issue #1334。提取了 `pursuit_base.py` 内部的 `model_state`（包含墙壁地图、追逐者计数等前三个通道）作为全局状态返回，修复了此前调用 `env.state()` 抛出 `NotImplementedError` 的问题。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1342](https://github.com/Farama-Foundation/PettingZoo/pull/1342)
*   **[MERGED/CLOSED] #1372: Scale down rlcard card images to their rendered resolution**
    *   **进展**: 渲染性能优化。将 `rlcard` 环境（如德州扑克、金拉米）中原本高达 444×616 像素的卡牌图片，预先缩放至实际渲染时的 144×200 分辨率，减少了不必要的渲染计算开销。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1372](https://github.com/Farama-Foundation/PettingZoo/pull/1372)
*   **[OPEN] #1376: Increase ruff strictness and apply mechanical autofixes**
    *   **进展**: 基于 #1350，进一步提升静态代码检查工具 `ruff` 的严格程度（启用更多 pyflakes 和 pycodestyle 规则），并自动修复了所有新发现的代码风格问题。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376)
*   **[OPEN] #1368: Fix Hanabi observation layout documentation (#1301)**
    *   **进展**: 修复 Hanabi（花火）环境观测空间布局的文档错误。开发者坦言纯人工 Review 此类复杂的底层逻辑文档非常困难，已在流程中引入了 Codex 和 Claude 辅助审查。
    *   **链接**: [Farama-Foundation/PettingZoo PR #1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

1.  **多智能体基准的核心地位不可替代**：今日修复的 `.state()` 接口（Pursuit 环境）和复杂观测空间文档（Hanabi 环境），正是目前多智能体强化学习（MARL）研究中最核心的痛点。PettingZoo 持续打磨这些底层 API，保证了 CTDE（集中式训练分布式执行）等前沿算法能获得标准化的环境接口。
2.  **积极的现代化工程实践**：果断放弃 Python 3.9 并不断提升 `ruff` 的严格度，说明项目没有陷入“只加功能不还技术债”的泥潭。健康的代码工程管理意味着研究者在复现实验时遇到环境报错的概率极低。
3.  **AI 辅助开发的前沿应用**：从 PR #1368 可以看出，维护团队开始拥抱 AI Agent 来处理复杂且繁琐的文档校对与代码审查工作。这种结合 LLM 维护庞大代码库的模式，是目前开源项目持续焕发活力的风向标。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>