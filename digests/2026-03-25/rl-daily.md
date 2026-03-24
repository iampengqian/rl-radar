# RL 开源生态日报 2026-03-25

> 生成时间: 2026-03-24 22:06 UTC | 覆盖项目: 15 个

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

2026-03-25 的 RL 开源生态呈现出明显的**分层演进**态势：
1.  **LLM/多模态 RL (verl, AReaL, TRL, OpenRLHF, Slime, ROLL)**：占据绝对活跃度高地，重点在于攻克**多模态（VLM）训练稳定性**、**超大规模分布式架构（GB200/NPU）** 以及**Agentic RL**的落地难题。
2.  **通用/经典 RL (CleanRL, SB3)**：处于维护模式，关注点在于适配上游依赖库（如 Gymnasium, PyTorch）的 Breaking Changes 和硬件级优化（IPEX），而非架构重构。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 7 | 36 | 0 | **激进扩张**：向 Diffusion RL 和 GB200/NPU 硬件双线拓展，架构清洗（废弃 Legacy）预示大版本发布。 |
| **AReaL** | 6 (全关) | 33 | 0 | **性能深潜**：聚焦 MoE 大模型（BailingMoeV2.5）与硬件亲和性（NUMA），引入 AI 辅助开发。 |
| **TRL** | 5 | 32 | 0 | **基建重构**：SFT/DPO 数据流简化，紧急修复 VLM 兼容性与显存瓶颈。 |
| **Open Instruct** | 0 | 14 | 0 | **算法融合**：GRPO 与 PPO 边界模糊化，深度绑定 vLLM 最新特性。 |
| **Slime** | 3 | 4+ | 0 | **前沿攻坚**：解决 B200 + CP 并行死锁问题，完善 Kimi25 VLM 支持。 |
| **OpenRLHF** | 3 (全关) | 0 | 1 (v0.9.7) | **版本迭代**：发布异步训练增强版，强化评估与采样能力。 |
| **ROLL** | 2 | 2 | 0 | **场景落地**：跟进 Qwen3.5 Agentic RL，暴露出 Torch 2.8 + vLLM 的兼容性隐患。 |
| **CleanRL** | 1 | 0 | 0 | **维护瓶颈**：受困于 Gymnasium API 变更，缺乏代码层面的响应。 |
| **SB3** | 1 | 0 | 0 | **长尾优化**：探讨 Intel IPEX 集成，非核心功能迭代。 |

*(注：PettingZoo, rl_games, Tianshou, torchtune 过去 24 小时无动态)*

## 共同关注的研究与工程方向

### 1. 研究侧信号
*   **多模态 RL (VLM) 的全面爆发**：几乎所有主流框架（verl, TRL, Slime, ROLL）都在集中精力解决 VLM（特别是 Qwen3-VL 系列）在 RLHF 中的 **异构数据流处理** 和 **RPC 通信瓶颈**。
*   **GRPO 算法的工业化改良**：Open Instruct 和 AReaL 均在尝试将 GRPO 与 PPO 优势融合（如引入 Value Model、IcePop 过滤），试图解决 GRPO 在大规模分布式训练下的稳定性与收敛性问题。
*   **Diffusion RL**：verl 引入 FlowGRPO 支持图像/视频生成训练，标志着 RL 的触角已从 LLM 延伸至 AIGC 生成领域。

### 2. 工程/基础设施侧信号
*   **vLLM 的深度集成与分裂**：各项目均在激进升级 vLLM（0.10+），利用其原生 API 进行权重传输和异构资源管理。但同时，vLLM 的频繁变动（如 Torch 2.8 兼容性）也成为当前最大的**不稳定源**（见 ROLL #398）。
*   **Train-Infer Disaggregation（训练/推理分离）**：为了打破 Rollout 瓶颈，verl 和 Slime 正在推动架构分离，Teacher/Actor 模型与 Rollout 模型解耦，支持跨设备甚至跨架构（如 NPU 与 GPU 协同）计算。

## 差异化定位分析

*   **verl**：**全能型新基建**。不仅支持主流 LLM，还率先覆盖 Diffusion 和 NPU/GB200 等异构硬件，适合需要**跨模态、跨硬件**的大规模工业部署。
*   **AReaL**：**极致性能专家**。通过 NUMA 绑定、专用 MoE 架构支持（BailingMoe）和 AI 辅助编码，专注于榨取**超大规模集群**的每一滴算力。
*   **TRL**：**HuggingFace 生态连接器**。虽然也在做 VLM 和 GRPO，但其核心价值在于与 HF Transformers 的无缝集成和代码治理，适合**快速原型验证**和学术研究。
*   **OpenRLHF**：**生产级异步架构先行者**。通过 v0.9.7 强化 Async 模式，专注于解决**资源争抢**问题，适合高吞吐量的在线学习场景。
*   **Open Instruct**：**GRPO 深度优化工坊**。不同于其他框架的“大而全”，该项目正将 GRPO 打磨成一种可替代 PPO 的工业级标准工具。

## 社区热度与成熟度

*   **高活跃/高迭代**：verl 和 AReaL 处于功能快速扩张期，PR 数量多且涉及底层架构，社区响应极快。
*   **高活跃/稳健型**：TRL 和 OpenRLHF 进入精细化打磨阶段，关注点从“跑通算法”转向“数据流治理”和“可观测性”。
*   **低活跃/维护型**：CleanRL 和 SB3 面临上游依赖（Gymnasium/PyTorch）更新的挑战，目前主要靠社区零星贡献维持兼容性，缺乏核心团队的大规模重构动力。

## 值得关注的趋势信号

1.  **vLLM 版本锁死风险**：ROLL 和 Slime 的 Issues 显示，最新版 vLLM 与 Torch 2.8+ 的组合在复杂 RL 场景（如开启 KL Loss 或 CP 并行）下存在严重 Bug。**建议生产环境暂时锁定 vLLM 0.8.x 或 0.9.x 版本**。
2.  **Breaking Changes 来袭**：verl 计划在 v0.8.0 废弃 Legacy Engine，AReaL 重构了 allocation_mode。这预示着未来一个月内，**升级主干代码可能会导致大量存量代码失效**，下游用户需高度警惕。
3.  **硬件亲和性成为核心竞争力**：单纯的算法优化已遇瓶颈，verl (GB200 Docker) 和 AReaL (NUMA 亲和性) 的动向表明，**懂硬件系统架构**将是下一代 RL 框架的分水岭。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

这里是 **ROLL (alibaba/ROLL)** 项目 2026-03-25 的 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，ROLL 项目活跃度主要集中在 **Agentic RL 场景的扩展与稳定性修复**。社区贡献者新增了 Qwen3.5 的 SWE-bench 示例，并修复了脚本配置错误。但在前沿依赖环境（Torch 2.8.0 + vLLM 0.10.2）下，Qwen2.5-VL 的 KL Loss 训练出现了严重的崩溃问题，值得高度关注。

---

### 2. 版本发布
*   **无新版本发布**

---

### 3. 重点 Issues

*   **[高优/故障] Torch 2.8.0 + vLLM 0.10.2 环境下开启 KL Loss 导致训练崩溃**
    *   **编号**: [#398](https://github.com/alibaba/ROLL/issues/398)
    *   **详情**: 用户反馈在使用最新技术栈（Torch 2.8.0 + vLLM 0.10.2）训练 `qwen2.5-vl-3B-agentic` 时，若开启 `use_kl_loss`，训练会在一定步数后崩溃；而回退至 Torch 2.6.0 + vLLM 0.8.4 则表现正常。Issue 中附带了详细的训练曲线对比及 YAML 配置，疑似新版本 vLLM 或 Torch 的兼容性/显存管理问题。
    *   **标签**: `Bug` `vLLM` `Agentic`

*   **[已解决] SWE-bench 配置中 Reward Normalization 导致 Advantage 归零**
    *   **编号**: [#397](https://github.com/alibaba/ROLL/issues/397)
    *   **详情**: 用户指出 `agent_val_rock_swe.yaml` 中的 Reward Normalization 配置存在 Bug，会导致计算出的 advantage 全为 0，致使策略网络无法接收梯度信号。
    *   **状态**: 已关闭（通过 PR #396 修复）。

---

### 4. 关键 PR 进展

*   **[Feature] 新增 Qwen3.5 ROCK Agentic SWE 示例**
    *   **编号**: [#396](https://github.com/alibaba/ROLL/pull/396) (Closed/Merged)
    *   **详情**: 响应社区对 Qwen3.5 的支持需求，新增了 `agent_val_rock_swe_qwen35_2b.yaml` 配置文件。同时修复了新版 Transformers 库中 Text Agentic chat-template 的 tokenization 路径问题。
    *   **关联**: Closes #395

*   **[Fix] 修正 run_onpolicy_distill_pipeline.sh 脚本配置名**
    *   **编号**: [#399](https://github.com/alibaba/ROLL/pull/399) (Closed/Merged)
    *   **详情**: 修复了蒸馏流水线脚本中的配置文件名称拼写错误。

---

### 5. 为什么值得持续关注
ROLL 正在快速跟进 **Agentic RL**（代理强化学习）在代码生成（SWE-bench）和多模态模型（Qwen-VL）上的落地。
1.  **紧跟 Model-of-the-Moment**: 第一时间支持 Qwen3.5 等新模型架构，降低了 RL 算法在新基座模型上的验证成本。
2.  **复杂的异构环境支持**: 社区正在高频测试 vLLM 最新版本与 ROLL 的兼容性（如 Issue #398），这表明 ROLL 是目前探索高吞吐量 LLM RL 训练的重要试验场，对于关注 **vLLM + RL 结合** 的工程师具有极高的参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

这里是 **Slime (THUDM/slime)** 项目的 2026-03-25 RL 日报摘要。

### 1. 今日速览
过去 24 小时内，Slime 项目活跃度较高，主要集中在**多模态能力的补全**与**大规模分布式训练的稳定性修复**。虽然无新版本发布，但社区贡献者提交了针对 Kimi25 模型 RL 训练的关键组件及多模态 OPD（On-Policy Distillation）支持。同时，针对 8x B200 高配环境下的训练卡死问题引发了新的讨论。

---

### 2. 版本发布
*   **无新版本发布**。

---

### 3. 重点 Issues
今日报错主要集中在**超大规模多卡训练的 Hang 问题**以及**断点续训逻辑**的边缘案例。

*   **[Training Hang] 8卡 B200 + CP/CP 组合下 Rollout 后训练卡死**
    *   **Issue**: [#1487](https://github.com/THUDM/slime/issues/1487)
    *   **详情**: 用户在使用 8× NVIDIA B200 GPUs 运行 Qwen3-4B 时，配置 `CP=4, TP=2`。系统在 Rollout 阶段完成后进入 Training 阶段时无限期挂起，日志仅显示 SGLang 的健康检查 Ping，无实际训练进度。
    *   **分析**: 这是一个严重的分布式训练同步问题，可能涉及 SGLang 后端与训练前端在特定并行配置下的死锁。

*   **[Bug] Resume 恢复训练时 Megatron Scheduler 步数错误**
    *   **Issue**: [#1761](https://github.com/THUDM/slime/issues/1761)
    *   **详情**: 在断点续训时，Slime 错误地将保存的 `rollout_id` 当作 `train step` 传给了 Megatron 的 opt_param_scheduler。
    *   **影响**: 这会导致 Learning Rate Scheduler 等参数状态错误，严重影响恢复后的训练收敛性。

*   **[Question] VLM 是否支持 On-Policy Distillation (OPD)**
    *   **Issue**: [#1758](https://github.com/THUDM/slime/issues/1758)
    *   **详情**: 用户询问 SGLang teacher server 在作为 VLM（如 Qwen3-VL）时，如何处理非文本的图像信息注入。目前的 `/generate` 接口似乎不支持。

---

### 4. 关键 PR 进展
今日的 PR 动态显示出 Slime 正在快速迭代以支持 **Kimi25** 的 RL 训练并完善**多模态**工作流。

*   **[Feature] 添加多模态 OPD 支持**
    *   **PR**: [#1760](https://github.com/THUDM/slime/pull/1760)
    *   **详情**: 旨在修复 Issue #1758。该 PR 扩展了 On-Policy Distillation 能力，使其能够处理视觉语言模型（VLM）的数据流，解决了 Teacher 模型推理时丢失图像信息的问题。

*   **[Feature] Kimi25 RL Part 3: VL Rollout 处理与 Token 扩展**
    *   **PR**: [#1755](https://github.com/THUDM/slime/pull/1755)
    *   **详情**: 这是 Kimi25 支持计划的第三部分。引入了针对 VL（Vision-Language）的 Rollout Processor，并支持训练时的 Token 扩展，表明 Slime 正在为 Kimi25 模型的大规模 RLHF 对齐做准备。

*   **[Feature] Kimi25 RL Part 1.1: 推理/训练分离下的权重转换**
    *   **PR**: [#1532](https://github.com/THUDM/slime/pull/1532)
    *   **详情**: 更新了 Kimi25 的权重转换逻辑，特别针对 "Train-Infer Disaggregation"（训练与推理 disaggregation 架构）场景下的权重同步进行了适配。

*   **[Fix] 修复 grad_norm 初始化顺序导致的 NaN 跳过逻辑错误**
    *   **PR**: [#1762](https://github.com/THUDM/slime/pull/1762)
    *   **详情**: 修复了在使用 `--no-check-for-nan-in-loss-and-grad` 时的一个隐蔽 Bug。当检测到 `found_inf` 时，由于 `grad_norm` 未提前初始化，导致步骤被错误标记。这对大规模训练的容错性至关重要。

---

### 5. 为什么值得持续关注
Slime 项目正在从一个通用的 RL 框架向**前沿大模型及多模态模型的专业化训练设施**演进，以下是今日数据体现的核心价值：

1.  **前沿硬件与并行策略的试金石**: Issue #1487 显示该项目正在接受 NVIDIA B200 + Context Parallelism (CP) 这种极端算力与显存密集型场景的考验。对于关注大规模分布式训练性能瓶颈的工程师来说，这里是解决 Hang 和死锁问题的第一线。
2.  **Train-Infer Disaggregation 架构落地**: 通过 PR #1532 和 #1755 可以看出，Slime 正在深度整合 SGLang 以实现训练和推理的分离架构。这是当前提高 RLHF 训练效率、打破 Rollout 瓶颈的关键技术路径。
3.  **多模态 RLHF 的闭环能力**: 随着 PR #1760 的合并，Slime 将具备完整的 VLM RL 训练能力。在当前 VLM 爆发的背景下，能够支持 VLM OPD（On-Policy Distillation）的开源框架极其稀缺。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-25)

## 1. 今日速览
AReaL 生态今日维持高活跃度，重点集中在 **多模态（VLM）训练稳定性** 修复与 **底层架构性能优化**。
- **PR 更新频繁**：共 33 条 PR 更新，主要涉及 Megatron 适配、IPv6 支持、显存/通信优化及 Agent 工作流集成。
- **Issue 处理高效**：6 条存量 Issues 全部处理完毕并关闭，主要解决了 VLM RPC 序列化、OpenAI API 流式响应及大 Batch 下的连接中断问题。
- **版本状态**：无新版本发布，代码库处于快速迭代阶段。

---

## 2. 版本发布
- **Releases**: 无

---

## 3. 重点 Issues (已解决)
今日关闭的 Issues 主要集中在多模态与分布式通信的边缘场景，表明社区对 **VLM 支持** 的完善正在加速。

1.  **VLM RPC 序列化失败**
    -   **摘要**: 在处理视觉模型（VLM）时，RPC 无法正确序列化 PIL 图像和 HuggingFace Processor，导致训练中断。
    -   **状态**: [CLOSED]
    -   **链接**: [inclusionAI/AReaL Issue #1069](https://github.com/inclusionAI/AReaL/issues/1069)

2.  **大尺寸多模态 Batch 导致连接重置**
    -   **摘要**: 在 `compute_logp` 阶段，当多图样本产生大量分片时，RTensor fetch 导致 "Connection reset by peer"。
    -   **状态**: [CLOSED]
    -   **链接**: [inclusionAI/AReaL Issue #1071](https://github.com/inclusionAI/AReaL/issues/1071)

3.  **OpenAI 接口流式响应报错**
    -   **摘要**: `/chat/completions` 端点在 `stream=true` 时抛出 `ResponseValidationError`，FastAPI 无法处理异步生成器。
    -   **状态**: [CLOSED]
    -   **链接**: [inclusionAI/AReaL Issue #1046](https://github.com/inclusionAI/AReaL/issues/1046)

4.  **在线 RL 训练启动失败**
    -   **摘要**: 用户反馈运行 `train.py` 时出现配置错误无法启动。
    -   **状态**: [CLOSED]
    -   **链接**: [inclusionAI/AReaL Issue #1065](https://github.com/inclusionAI/AReaL/issues/1065)

---

## 4. 关键 PR 进展
今日 PR 动态显示了项目正在向 **异构计算优化**、**超大规模模型支持** 和 **AI 辅助开发** 方向演进。

### 🚀 架构与性能优化
-   **[feat] Megatron Bridge 适配** (#1056)
    -   **内容**: 引入 Megatron-Bridge 适配层，增加 `megatron.bridge_type` 参数，为大规模分布式训练提供后端支持。
    -   **链接**: [inclusionAI/AReaL PR #1056](https://github.com/inclusionAI/AReaL/pull/1056)

-   **[feat] 训练引擎 NUMA CPU 亲和性绑定** (#1083)
    -   **内容**: 通过 `pynvml` 将训练进程绑定到 GPU 对应的本地 CPU 核心，减少跨 NUMA 节点的内存访问延迟，提升 CPU-GPU 数据传输效率。
    -   **链接**: [inclusionAI/AReaL PR #1083](https://github.com/inclusionAI/AReaL/pull/1083)

-   **[refactor] 迁移 allocation_mode 至引擎后端字段** (#1044)
    -   **内容**: 移除中心化的 `allocation_mode` 字符串，改为在每个引擎配置（`TrainEngineConfig`/`InferenceEngineConfig`）中显式声明 `backend`（如 `fsdp:d4`, `sglang:d4t2`），提升架构清晰度。
    -   **状态**: [CLOSED]
    -   **链接**: [inclusionAI/AReaL PR #1044](https://github.com/inclusionAI/AReaL/pull/1044)

### 🧠 模型与算法支持
-   **[feat] 支持 BailingMoeV2.5 (100B+ MoE)** (#1079)
    -   **内容**: 支持百川智能的 BailingMoeV2.5 模型，集成 Lightning Attention (线性复杂度)、MLA 及 MoE (256 experts, top-8)，并支持 CP (Context Parallelism)。
    -   **链接**: [inclusionAI/AReaL PR #1079](https://github.com/inclusionAI/AReaL/pull/1079)

-   **[feat] PPO IcePop Token 过滤** (#1061)
    -   **内容**: 实现基于 IcePop 论文的 Token 级重要性比率过滤，旨在缓解训练与推理之间的不匹配问题。
    -   **链接**: [inclusionAI/AReaL PR #1061](https://github.com/inclusionAI/AReaL/pull/1061)

### 🛠 工程与工具链
-   **[fix] VLM RPC 大负载批量获取** (#1077)
    -   **内容**: 针对多图样本，将 RTensor fetch 从串行改为批量 HTTP 请求，解决超时和连接重置问题。
    -   **链接**: [inclusionAI/AReaL PR #1077](https://github.com/inclusionAI/AReaL/pull/1077)

-   **[chore] 集成 Codex Agent 工作流** (#1082)
    -   **内容**: 添加 OpenAI Codex harness 及 8 个领域专家子 Agent（如 algorithm, FSDP, megatron），并引入代码审查技能，提升 AI 辅助代码贡献能力。
    -   **链接**: [inclusionAI/AReaL PR #1082](https://github.com/inclusionAI/AReaL/pull/1082)

-   **[feat] 支持 IPv6-only 环境** (#1072)
    -   **内容**: 解除对 IPv4 的依赖，适配纯 IPv6 云环境或内部网络。
    -   **链接**: [inclusionAI/AReaL PR #1072](https://github.com/inclusionAI/AReaL/pull/1072)

---

## 5. 为什么值得关注？
AReaL 正在从一个单纯的 RL 训练框架演进为支持 **下一代异构 MoE 大模型** 的全栈系统：

1.  **极致的性能优化**：从 NUMA 亲和性 (#1083) 到流水线权重同步 (#1074)，项目正在榨取硬件的极致性能，这对大规模 RL 训练至关重要。
2.  **前沿模型的原生支持**：紧跟 BailingMoeV2.5 等新型异构 MoE 架构 (#1079)，表明其架构具备极强的扩展性，不局限于标准 Transformer。
3.  **生产级稳定性**：针对 VLM 多图场景的密集修复 (#1069, #1071, #1077) 显示出项目正致力于解决多模态 RL 落地中的实际痛点。
4.  **AI 辅助开发闭环**：引入 Codex Agent 工作流 (#1082) 是一个亮点，意味着项目本身正在利用 AI 加速代码迭代，这在开源社区中是一个领先的趋势。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要
**日期：** 2026-03-25

## 1. 今日速览
过去 24 小时内，TRL 项目保持了极高的活跃度，虽然没有新版本发布，但代码提交主要集中在 **SFT（监督微调）和 DPO（直接偏好优化）模块的重构与简化**。社区方面，关于 **多模态模型（VLM）在 RLHF 中的兼容性问题**（特别是 Qwen3-VL 和 vLLM 后端）引发了较多讨论。此外，GRPO 算法的工具调用能力和指标计算的准确性也是关注焦点。

- **Issues 更新：** 5 条
- **PR 更新：** 32 条
- **新 Releases：** 0 个

## 2. 版本发布
无。

## 3. 重点 Issues

1.  **多模态 RL 训理与 vLLM 服务器模式的冲突**
    - **描述：** 在使用 TRL 配合 vLLM 进行多模态 RL 训练（如 GRPO + Qwen-VL）时，若输入高分辨率图像，`vllm-mode="server"` 会导致服务挂起。目前需手动调整图像尺寸，而 `colocate` 模式正常。
    - **链接：** [Issue #5361](https://github.com/huggingface/trl/issues/5361)

2.  **GRPO 工具调用支持**
    - **描述：** 开发者正在尝试使用 GRPO 微调 Qwen3-0.6B 以结合 Python REPL 工具使用，寻求 TRL 在 Agent 训练方面的最佳实践配置。
    - **链接：** [Issue #5366](https://github.com/huggingface/trl/issues/5366)

3.  **GRPO 指标日志忽略权重配置**
    - **描述：** `GRPOTrainer` 在记录 `reward` 和 `reward_std` 指标时，未应用 `reward_weights`，导致日志数据与实际训练信号（Advantages）不一致。此 Issue 已由相关 PR 修复。
    - **链接：** [Issue #5352](https://github.com/huggingface/trl/issues/5352)

4.  **Qwen3.5 SFT 训练输入嵌入错误**
    - **描述：** 在对 Qwen3.5 进行 SFT 时出现 `too many values to unpack` 错误，涉及 Input embeddings 处理逻辑。
    - **链接：** [Issue #5334](https://github.com/huggingface/trl/issues/5334)

## 4. 关键 PR 进展

### 核心架构重构
- **SFT 与 DPO 数据处理简化**
  - **PR #5360** (Open): 重构 `SFTDataCollatorForLanguageModeling`，标准化张量转换与掩码处理。
  - **PR #5359** (Closed): 移除 SFT 中的后整理阶段截断逻辑，强制截断在填充前处理。
  - **PR #5350** (Closed): 移除 DPO 中的内部截断逻辑，简化 Trainer 代码。
  - **链接：** [PR #5360](https://github.com/huggingface/trl/pull/5360), [PR #5359](https://github.com/huggingface/trl/pull/5359)

### 功能增强与修复
- **VLM 兼容性修复**
  - **PR #5354** (Closed): 修复 VLM 在纯文本数据集上训练时的 IDs 形状不匹配问题（Fix #5334）。
  - **PR #5364** (Open): 修复 `GRPOTrainer` 在处理包含 `None` 值的多模态内容时的 `IndexError`。
  - **链接：** [PR #5354](https://github.com/huggingface/trl/pull/5354), [PR #5364](https://github.com/huggingface/trl/pull/5364)

- **性能与算法优化**
  - **PR #5349** (Open): 为 `AsyncGRPOTrainer` 引入分块 LM Head 计算，避免实例化完整的 Logits 张量，显著降低显存占用。
  - **PR #5353** (Closed): 修正 `GRPOTrainer` 日志记录，使其正确反映 `reward_weights`。
  - **PR #5323** (Open): 扩展 `environment_factory`，允许工具返回多模态内容（图像+文本），增强 VLM Agent 训练能力。
  - **链接：** [PR #5349](https://github.com/huggingface/trl/pull/5349), [PR #5353](https://github.com/huggingface/trl/pull/5353)

## 5. 为什么值得持续关注

TRL 目前正处于**从单纯的“算法实现库”向“全栈 RLHF 基础设施”演进**的关键阶段，今日的动态印证了以下趋势：

1.  **对多模态（VLM）的深度适配**：随着 Qwen3-VL 等模型的普及，TRL 正密集修复 VLM 在 SFT 和 RL 阶段的异构数据处理难题（#5364, #5354），这表明 TRL 正在成为多模态模型对齐的首选工具。
2.  **工程效能与显存优化**：针对大模型训练的显存瓶颈，引入 Chunked LM Head（#5349）等优化手段，结合 vLLM 集成，显示其致力于降低工业级 RLHF 的落地门槛。
3.  **严格的代码治理**：通过重构 DataCollator 和移除冗余逻辑，项目正在提升代码的可维护性和稳定性，同时开始强制执行 PR 模板（#5356），标志着项目成熟度的提升。

对于关注 **Post-training**、**Agent Training** 以及 **多模态对齐** 的开发者，TRL 依然是当前最活跃且前沿的开源阵地。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 项目追踪 (2026-03-25)

## 1. 今日速览
OpenRLHF 今日发布了 **v0.9.7** 版本，重点增强了异步训练模式的评估与采样功能。过去 24 小时内，项目关闭了 3 个涉及 PPO 评估指标、SFT 训练器恢复逻辑及设备抽象的 Issues，代码质量与稳定性维护活跃。

## 2. 版本发布
### [v0.9.7](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.9.7)
本次更新主要针对异步训练场景进行了功能扩展：
*   **Features**:
    *   **支持异步训练中的评估**: 允许在异步训练过程中进行模型评估，解决了训练与评估解耦的工程需求 (Contributor: [@xiaoxigua999](https://github.com/xiaoxigua999))。
    *   **支持异步模式下的部分回滚**: 引入 partial rollout 机制，优化异步采样效率。

## 3. 重点 Issues
本日更新的 Issues 均已关闭，主要集中在 Trainer 底层逻辑的健壮性与兼容性修复。

*   **[#1202 [CLOSED] 增强 PPO 评估：更丰富的指标、采样日志及异步支持**
    *   **链接**: [OpenRLHF/OpenRLHF #1202](https://github.com/OpenRLHF/OpenRLHF/issues/1202)
    *   **分析**: 原有 PPO 评估仅支持基础的 pass@k 指标。该 Issue 要求补充 reward、length、truncation 等维度的详细日志，并适配异步训练场景。这表明项目正从单纯的训练框架向全流程的可观测性工具演进。

*   **[#1201 [CLOSED] SFTTrainer 设备抽象与 CPU 兼容**
    *   **链接**: [OpenRLHF/OpenRLHF #1201](https://github.com/OpenRLHF/OpenRLHF/issues/1201)
    *   **分析**: 针对 `SFTTrainer` 中硬编码 `torch.cuda.current_device()` 的问题提出了改进。引入设备抽象层并增加 CPU fallback，这对于在非 GPU 环境下进行调试或推理至关重要，提升了代码的通用性。

*   **[#1200 [CLOSED] SFTTrainer 恢复逻辑中的 Off-by-one 错误修复**
    *   **链接**: [OpenRLHF/OpenRLHF #1200](https://github.com/OpenRLHF/OpenRLHF/issues/1200)
    *   **分析**: 修复了断点续训时 `step`/`start_epoch` 计数偏差及 `num_update_steps_per_epoch` 为 `None` 时的崩溃问题。此类细节修复对于长周期 SFT 训练的稳定性极其关键。

## 4. 关键 PR 进展
过去 24 小时内无活跃的 PR 更新（上次更新相关 PR 已随 v0.9.7 合并）。

## 5. 为什么值得继续关注
OpenRLHF 在当前 RL 生态中依然保持极高的工程价值，理由如下：

1.  **异步架构的成熟化**: v0.9.7 对 async 模式的持续迭代（支持 evaluation 和 partial rollout），标志着其在解决 LLM 训练中“训练与生成资源争抢”这一核心痛点上走在了前列。
2.  **全栈式优化**: 从 Issue #1202 可以看出，项目不仅在关注算法实现，还在深耕 **Evaluation** 阶段的深度集成，这对于 PPO 算法的调优至关重要。
3.  **工业级健壮性**: 针对 SFT 断点续训和设备兼容性的快速修复，证明了该团队在维护代码鲁棒性方面的积极响应速度，适合作为生产环境的基础设施。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

这里是 **verl** 项目 2026-03-25 的 RL 日报摘要。

---

# 📊 verl RL 日报 (2026-03-25)

## 1. 今日速览
过去 24 小时内，verl 仓库保持高活跃度，共更新 **36 个 PR** 和 **7 个 Issues**。社区重点关注 **多模态扩展**、**新硬件适配 (GB200/NPU)** 以及 **Megatron 后端的稳定性**。虽然无新版本发布，但针对 `v0.7.1` 的修复工作正在密集进行，同时针对下一版本的架构重构（如 Legacy Engine 废弃）已提上日程。

---

## 2. 版本发布
*   **无新版本发布**。
*   注意：社区正在讨论 `v0.7.1` 分支的兼容性问题（Issue #5727），且主干分支已开始清理旧版 Engine 代码（PR #5604），预示着 `v0.8.0` 可能会有较大的 Breaking Changes。

---

## 3. 重点 Issues (技术故障与讨论)

*   **[Megatron] v0.7.1 分支参数错误** [#5727](https://github.com/verl-project/verl/issues/5727)
    *   **详情**：在 `release/v0.7.1` 分支使用 Megatron 后端时，`get_transformer_layer_offset` 函数调用参数不匹配，导致 `vp_stage` 相关报错。
    *   **影响**：直接影响基于稳定版 v0.7.1 的 Megatron 用户。

*   **[Bug] GRPO 训练 Qwen3.5 2B 报错** [#5659](https://github.com/verl-project/verl/issues/5659)
    *   **详情**：在 H100 集群上结合 Megatron 与 vLLM 运行 GRPO 时出现错误。环境涉及 `transformers==5.3.0` 和 `megatron==0.16.0`，目前仍有讨论。

*   **[Bug] SGLang 无法停止多轮对话生成** [#5649](https://github.com/verl-project/verl/issues/5649)
    *   **详情**：使用 SGLang 训练 Qwen3.5-4B 多轮 Tool Call 时，模型输出无法在 `<im_end>` 处停止。

*   **[讨论] 蒸馏时为何使用推理引擎** [#5731](https://github.com/verl-project/verl/issues/5731)
    *   **详情**：开发者质疑为何在 On-policy 蒸馏过程中，部分阶段使用了推理引擎而非训练引擎，涉及精度差异的考量。

---

## 4. 关键 PR 进展 (架构演进与生态适配)

### 🚀 架构重构与核心功能
*   **[Breaking] 废弃 Legacy Engine Workers** [#5604](https://github.com/verl-project/verl/pull/5604)
    *   计划在 `v0.8.0` 中移除旧的 FSDP 和 Megatron workers，推动架构升级。
*   **[Refactor] Teacher Colocate 模式重构** [#5723](https://github.com/verl-project/verl/pull/5723)
    *   将 Teacher logprob 计算逻辑移至 `AsyncTeacherLLMServerManager`，优化异步架构。
*   **[Feat] 支持 Eagle3 推测解码** [#5509](https://github.com/verl-project/verl/pull/5509)
    *   在 Rollout 阶段引入 Eagle3 推测解码支持，旨在提升推理速度。

### 🖼️ 多模态与算法扩展
*   **[FlowGRPO] 支持图像/视频生成训练** [#5716](https://github.com/verl-project/verl/pull/5716) & [#5713](https://github.com/verl-project/verl/pull/5713)
    *   引入 `DiffusionAgentLoopWorker` 和基于图像的 Reward Model，支持 QwenImage 的 FlowGRPO 训练，标志着 verl 正式向 Diffusion RL 领域拓展。
*   **[IcePop] Rollout 修正算法实现** [#5722](https://github.com/verl-project/verl/pull/5722)
    *   实现了 IcePop 算法用于 Rollout 阶段的修正。

### 🖥️ 硬件适配与基础设施
*   **[GB200] 支持 ARM64 Docker 镜像** [#5596](https://github.com/verl-project/verl/pull/5596)
    *   添加了对 GB200 (Blackwell/aarch64) 架构的初步 Docker 支持，修复了 SGLang 在 ARM 环境下的兼容性。
*   **[NPU] 昇腾 950 硬件支持** [#5608](https://github.com/verl-project/verl/pull/5608) & [#5734](https://github.com/verl-project/verl/pull/5734)
    *   增加了针对 Ascend 950 (DV100/DV120) 的 MXFP8 量化 Rollout 支持，并完善了 NPU 的 Nightly CI。
*   **[Megatron] HF PEFT 格式保存** [#5575](https://github.com/verl-project/verl/pull/5575)
    *   支持将 Megatron 格式的 Checkpoint 保存为 HuggingFace PEFT 格式，便于模型分发与合并。

### 🛠️ 修复与维护
*   **[Fix] Transformers 5.3.0 兼容性** [#5724](https://github.com/verl-project/verl/pull/5724)
    *   修复了因升级 Transformers 5.3.0 导致的 TRTLLM rollout 和 Megatron 依赖循环问题。
*   **[Fix] Qwen3.5 LoRA & MTP 支持** [#5599](https://github.com/verl-project/verl/pull/5599)
    *   修复了 Qwen3.5 模型在 Megatron 后端下的 LoRA 和 MTP (Multi-Token Prediction) 支持。

---

## 5. 为什么值得关注？
1.  **多模态 RL 的前沿探索**：verl 正在迅速从纯 LLM RL 扩展到 **Diffusion RL**（FlowGRPO），支持图像生成模型的强化学习微调，这在当前开源生态中非常稀缺。
2.  **激进的硬件支持**：不仅第一时间适配 **NVIDIA GB200**，还在持续深耕 **Ascend NPU** 生态，为国产算力和新架构提供了关键的 RL 软件底座。
3.  **架构现代化**：通过重构 Teacher Mode 和废弃 Legacy Workers，项目正在为更大规模的分布式训练（如 235B 模型 256k 长序列 PR #5733）做架构准备，保持了在工程实现上的领先性。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 生态分析 (2026-03-25)

## 1. 今日速览
Open Instruct 今日维护活跃度极高，主要集中在 **GRPO（Group Relative Policy Optimization）算法的深度优化**、**基础设施现代化（vLLM/Torch 升级）** 以及 **离线蒸馏** 功能的构建。虽然无新版本发布，但核心贡献者（finbarrtimbers, mnoukhov 等）提交了多个关键 Patch，显示该项目正在从实验性代码向工业级稳定性过渡。

- **PR 活跃度**：14 个更新（含 2 个 Closed，多为主要功能迭代）。
- **核心方向**：强化 GRPO 与 PPO 的兼容性、指标对齐、以及 vLLM 集成。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **过去 24 小时无新增或更新 Issue**。
    *分析师注：这通常意味着目前的开发重点完全集中在现有 PR 队列的合并与修复上，社区反馈处理暂时静默。*

## 4. 关键 PR 进展

### A. 算法核心：GRPO 与 PPO 演进
*   **[PPO Support] Add PPO with value model support to grpo_fast.py (#1462)**
    *   **作者**: hamishivi
    *   **进展**: 正在为 `grpo_fast.py` 添加标准 PPO 支持，引入 Value Model 和 GAE（Generalized Advantage Estimation）。
    *   **意义**: 打破了 GRPO 仅依赖组归一化奖励的限制，允许使用学习到的 Value Function，这是向经典 PPO 回归的重要特性，可能提升训练稳定性。
    *   **链接**: [allenai/open-instruct PR #1462](https://github.com/allenai/open-instruct/pull/1462)

*   **[Metrics] Make grpo.py metrics match grpo_fast.py (#1552)**
    *   **作者**: finbarrtimbers
    *   **进展**: 统一 OLMo-core 训练模块与 `grpo_fast.py` 的指标体系（如 `policy/clipfrac_avg`, `objective/kl0-3_avg` 等）。
    *   **意义**: 确保不同后端实现的行为一致性，这对于复现实验和调试至关重要。
    *   **链接**: [allenai/open-instruct PR #1552](https://github.com/allenai/open-instruct/pull/1552)

*   **[Bug Fix] Fix GRPO rank_microbatch_size units (#1557)**
    *   **作者**: finbarrtimbers
    *   **内容**: 修正了 `GRPOTrainModule` 中的微批次大小单位处理，使其与 OLMo-core API 对齐（Token 级别而非序列级别）。
    *   **链接**: [allenai/open-instruct PR #1557](https://github.com/allenai/open-instruct/pull/1557)

### B. 基础设施与性能优化
*   **[Dependencies] Upgrade vLLM to 0.17.1, torch to 2.10 (#1556)**
    *   **作者**: finbarrtimbers
    *   **状态**: **CLOSED** (近期已完成)
    *   **内容**: 激进地升级了核心依赖，移除了 Flash-Attn v2 依赖（因不兼容 Torch 2.10），并默认启用 vLLM v1 引擎。
    *   **意义**: 保持技术栈的前沿性，利用 vLLM 新版原生特性提升推理吞吐量。
    *   **链接**: [allenai/open-instruct PR #1556](https://github.com/allenai/open-instruct/pull/1556)

*   **[Performance] Migrate to vLLM 0.16.0 native weight transfer API (#1515)**
    *   **作者**: finbarrtimbers
    *   **内容**: 用 vLLM 原生的 `WeightTransferConfig` 替换了手写的参数广播循环。
    *   **意义**: 减少代码维护成本，显著提升训练期间 Actor 与 Rollout 模型间的权重同步效率。
    *   **链接**: [allenai/open-instruct PR #1515](https://github.com/allenai/open-instruct/pull/1515)

*   **[Eval] Priority local eval queue for grpo_fast (#1553)**
    *   **作者**: mnoukhov
    *   **内容**: 从 `smolzero` 移植了优先级队列逻辑，防止评估任务被训练任务饿死。
    *   **链接**: [allenai/open-instruct PR #1553](https://github.com/allenai/open-instruct/pull/1553)

### C. 新功能：蒸馏与数据处理
*   **[Distillation] Offline Distillation via DistillKit (Part Two) (#1534)**
    *   **作者**: wolfecameron
    *   **内容**: 添加了捕获 Teacher Logits 的脚本，支持离线蒸馏。
    *   **意义**: 补全了 Post-training 的重要一环，允许用户在不重新训练 Teacher 的情况下进行知识蒸馏。
    *   **链接**: [allenai/open-instruct PR #1534](https://github.com/allenai/open-instruct/pull/1534)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **GRPO 的工业化落地**：不同于学术界对 PPO 的依赖，Open Instruct 正在将 **GRPO**（DeepSeek-Math 等模型的核心算法）打磨成可工业级扩展的工具（`grpo_fast.py`）。今日关于 Metrics 对齐和 PPO 特性融合的 PR 表明该项目正在解决 GRPO 在大规模分布式训练下的稳定性问题。
2.  **与 vLLM 的深度绑定**：通过 PR #1515 和 #1556 可以看出，该项目不再将 vLLM 仅视为推理引擎，而是将其作为训练循环中的一部分，利用原生 API 进行权重传输。这是当前 LLM + RL 工程优化的最前沿方向。
3.  **全栈 Post-Training 支持**：从今日的 PR 覆盖范围来看，项目已覆盖从 SFT（#1327）、DPO/GRPO（#1548）到 Distillation（#1534）的全流程。对于希望构建完整 Model Lifecycle 而非仅跑通算法的研究人员或工程师，Open Instruct 提供了目前最紧密集成的工具链。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报 - 2026年03月25日

## 1. 今日速览
CleanRL 今日整体活跃度较低，代码库无新增 PR 或版本发布。社区焦点集中在新版依赖库的兼容性问题上，特别是针对 Gymnasium v1.2.3 和 Mujoco v5 环境的适配。

- **Issues**: +1 (Open)
- **PRs**: 0
- **Releases**: 0

## 2. 版本发布
**无**。
过去 24 小时内未检测到新的版本标签或 Release 发布。

## 3. 重点 Issues
**#545 Gymnasium v1.2.3 更新导致 `envs.step()` 返回值结构变更引发 KeyError**
- **状态**: OPEN
- **作者**: thanhtnguyen10
- **链接**: [vwxyzjn/cleanrl Issue #545](https://github.com/vwxyzjn/cleanrl/issues/545)
- **摘要**: 用户在升级 Gymnasium 至 v1.2.3 以运行 Mujoco v5 环境时遇到 `KeyError: 'final_observation'`。
- **技术细节**: 问题根源在于 `envs.step(actions)` 的返回值结构发生了破坏性变更（Breaking Change）。新版 Gymnasium 修改了 `infos` 字典的结构，导致 CleanRL 现有代码在解析 `final_observation` 时失败。这是一个典型的上游 API 迁移问题，需要修改 Vectorized Environment 的数据解析逻辑以适配新标准。

## 4. 关键 PR 进展
**无**。
过去 24 小时内无活跃的 Pull Request 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新平淡，但 Issue #545 暴露了 RL 生态碎片化的典型痛点，这正是 CleanRL 的核心价值所在：

1.  **上游追踪与适配**: Gymnasium/Gym 的 API 频繁变动（如 step 返回值从 4 元组变 5 元组，再到 info 字典结构变更）是 RL 开发者的主要心智负担。CleanRL 通常能提供最轻量级的适配方案，是学习如何处理这些底层 API 变更的最佳参考。
2.  **无封装的透明度**: 面对如 Issue #545 这样的报错，使用高度封装库（如 Stable-Baselines3）的开发者可能难以定位源头，而 Cleanrl 的单文件结构让开发者能直接看到是哪一行代码在访问 `infos['final_observation']`，从而快速修复。

---
*分析师注：建议关注维护者对该 Issue 的响应，这可能成为 CleanRL 适配 Gymnasium 最新 API 趋势的一个补丁风向标。*

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 生态监测
**日期：** 2026-03-25

## 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库活动整体平静。代码库无新增 PR 或版本发布，仅有一条关于性能优化的长期 Issue 发生了状态更新。社区目前的关注点似乎集中在底层架构优化（如 `torch.compile`）的讨论上。

## 2. 版本发布
*   **无新版本发布**。最近的 Release 活动停滞，建议关注主分支的提交动态以获取最新的 Bug 修复。

## 3. 重点 Issues
今日唯一的动态来自一条关于核心计算性能优化的 Feature Request，该议题涉及提升 SB3 在 Intel 硬件上的训练效率。

*   **[Issue #1564] 建议 `torch.compile` 支持 / 集成 Intel Extension for PyTorch**
    *   **标签：** `documentation` `enhancement` `good first issue` `help wanted`
    *   **链接：** [DLR-RM/stable-baselines3 Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)
    *   **核心内容：** 作者 `george-adams1` 提议将 **Intel Extension for PyTorch (IPEX)** 集成到 SB3 中。IPEX 针对 Intel 处理器进行了指令集优化，集成后有望显著提升 CPU 端的训练推理速度。此外，该 Issue 还探讨了兼容 PyTorch 2.0 `torch.compile` 特性的可能性。
    *   **分析：** 尽管该 Issue 创建于 2023 年，但在今日（2026-03-24）有更新，且被标记为 `good first issue` 和 `help wanted`，说明维护者依然对此类底层性能优化的贡献持开放态度。这对于在非 GPU 环境或 Xeon 服务器集群上运行 RL 训练的用户具有较高价值。

## 4. 关键 PR 进展
*   **无**。过去 24 小时内无公开 PR 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但 SB3 依然是 RL 领域的基石项目，原因如下：

1.  **工业级标准接口：** 它是连接学术算法与工程落地的最稳定桥梁，即便在 2026 年，大多数 RL 项目依然基于 SB3 的 API 规范进行二次开发。
2.  **硬件生态适配：** 如 Issue #1564 所示，项目正在通过社区力量适配包括 Intel IPEX 在内的各种硬件加速库。在通用大模型与 RL 结合（RLHF）的趋势下，SB3 对底层算力的兼容性决定了其在推理和微调阶段的生命力。
3.  **低门槛贡献：** 项目维护者积极通过 `good first issue` 引导社区参与，使得该项目在面对 PyTorch 版本快速迭代时，能够保持较强的社区维护韧性。

---

</details>