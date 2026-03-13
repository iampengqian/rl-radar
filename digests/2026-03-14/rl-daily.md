# RL 开源生态日报 2026-03-14

> 生成时间: 2026-03-13 22:04 UTC | 覆盖项目: 15 个

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

2026年3月14日的 RL 开源生态呈现出明显的**分层与分化**趋势。以 **verl** 和 **AReaL** 为代表的“新一代基础设施”正在激烈角逐多模态与异构算力的支持，推动了从纯文本 RLHF 向 VLM（视觉语言模型）RL 的集体跃迁。与此同时，以 **TRL** 和 **OpenRLHF**（虽今日静默）为代表的成熟生态则聚焦于修复当前多模态对齐中的顽固 Bug。值得注意的是，**SB3** 在传统 RL 领域的持续迭代证明了基础算法（如 PPO）的改进依然具有极高的工程价值。整体而言，生态重心已完全从“算法验证”转向“大规模生产级训练”与“多模态融合”。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 29 | 35 | 0 | **极高**。全栈演进，Qwen3.5 适配与 Async 模式成焦点。 |
| **TRL** | 5 | 16 | 0 | **高**。核心维护者密集修复 VLM DPO 训练的数据损坏与截断问题。 |
| **slime** | 11 | 5 | 0 | **中高**。紧跟 Qwen3.5 与 DeepSeekV3，专注解决 MoE 与 CP 显存瓶颈。 |
| **AReaL** | 5 | 10 | 0 | **中高**。打通 VLM GRPO 全流程，解决 vLLM/LoRA 与 SGLang 的异构冲突。 |
| **ROCK** | 4 | 6 | 0 | **中**。工程化增强，完善 SDK 闭环与异构容器兼容性。 |
| **Open Instruct** | 0 | 5+ | 0 | **中**。基于 OLMo-core 的 GRPO 实现即将完工，FlashAttention-3 落地。 |
| **Stable Baselines3** | 7 | 2 | 0 | **中**。引入 Beta Distribution 试图解决连续控制的核心痛点。 |
| **ROLL** | 2 | 1 | 0 | **低**。主要推进华为 Ascend 等非 Nvidia 硬件的生态适配。 |
| **torchtune** | 1 | 0 | 0 | **低**。战略讨论活跃，代码静默，疑似处于重大转型期。 |
| **Others** (CleanRL, Gymnasium, etc.) | 0 | 0 | 0 | **静默**。过去 24 小时无实质性更新。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：多模态 GRPO 与推理能力增强
*   **VLM RL 的爆发**：TRL、AReaL 和 verl 均在今日重点解决 VLM（特别是 Qwen2.5-VL 和 LLaVA-OneVision）的 RL 训练难题。核心痛点集中在多模态数据（图像 Token）在截断、分发和序列化过程中的完整性保持。
*   **GRPO (Group Relative Policy Optimization) 成为主流**：无论是 verl 的 FlowGRPO、Open Instruct 基于 OLMo-core 的实现，还是 TRL 引入的 VESPO/DGPO，都在表明 GRPO 及其变体正在取代传统 PPO，成为提升 LLM 数学与推理能力的首选算法。

### 2. 工程/基础设施侧信号：异构计算与异步架构
*   **全异步训练**：verl 的 "Fully Async" 模式和 AReaL 的 "动态伸缩" 提案显示，为了解决 GPU 空转问题，非同步的 Actor-Critical 架构正在成为大规模训练的标配，尽管稳定性仍是巨大挑战。
*   **推理引擎解耦与 FlashAttention-3**：项目正积极摆脱单一依赖，Open Instruct 和 verl 均已适配 H100 上的 FlashAttention-3。同时，vLLM 与 SGLang 的兼容性（及版本冲突）是当前工程团队面临的最大集成挑战。
*   **国产算力适配**：ROLL 推进 Ascend (NPU) 支持，ROCK 适配 Alpine/musl，显示出 RL 基础设施正在向更广泛的异构硬件环境迁移。

## 差异化定位分析

*   **verl vs. AReaL (高性能 RLinfra 之争)**：verl 的优势在于**生态广度**（集成 Atropos、TensorRT-LLM、NeMo），试图成为“中间件之王”；而 AReaL 则更侧重于**工程深度**（RPC 重构、LoRA+XCCL 修复），更像是追求极致性能的“底层引擎”。
*   **TRL vs. Slime (模型支持策略)**：TRL 作为 Hugging Face 生态一环，主要精力在于**修复通用接口**（如 DPO Trainer 对 VLM 的兼容）；而 Slime (THUDM) 则展现了**激进的前沿模型支持**，第一时间跟进 Qwen3.5 和 DeepSeekV3，甚至不惜重构底层显存检查机制。
*   **SB3 vs. LLM RL (传统 vs. 现代)**：SB3 依然专注于**经典控制与连续动作空间**的算法优化（如 Beta Distribution），与 LLM 领域的 Token 级 RLHF 形成鲜明对比，证明了基础 RL 领域仍有精细化迭代空间。

## 社区热度与成熟度

*   **高热度与高焦虑并存**：verl 和 TRL 的社区虽然活跃，但充斥着关于“兼容性崩溃”和“新模型不支持”的 Issue（如 TRL 的 VLM 数据损坏、verl 的 vLLM 冲突）。这表明当前多模态 RL 仍处于“施工中”阶段，API 接口极不稳定。
*   **工程成熟度提升**：ROCK 和 AReaL 在网络端口、Socket 泄漏、RPC 协议等“细枝末节”上的修复，以及 Open Instruct 对 FlashAttention-3 的引入，标志着头部项目正迅速从“能跑通”向“工业级高可靠”迈进。

## 值得关注的趋势信号

1.  **VLM 对齐的“数据墙”**：今日 TRL 暴露的静默数据损坏问题是一个危险信号。随着多模态训练成为主流，如何保证图像 Token 在 Packing、Truncation 和分布式传输中不失真，将成为近期工程攻坚的核心。
2.  **后训练的全栈化**：单纯提供一个 Trainer 脚本已不再足够。verl 集成 Atropos 环境、Open Instruct 构建离线蒸馏管线，都意味着 RL 项目正在演变为涵盖环境、推理引擎、分布式调度和压缩算法的**全栈系统**。
3.  **Beta Distribution 的回归**：SB3 将 Beta 分布引入 PPO 解决截断偏差，这一经典算法改进可能会反向启发 LLM 领域对于受限输出空间（如强制输出特定格式）的训练优化。
4.  **torchtune 的战略静默**：torchtune 代码更新停滞但路线图讨论活跃，暗示 PyTorch 官方可能正在酝酿一次重大架构调整，以应对 LLM Post-training 复杂度的激增。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报摘要 (2026-03-14)

**数据源**: github.com/alibaba/ROLL

## 1. 今日速览
过去 24 小时内，ROLL 仓库活跃度平稳。重点在于**异构硬件生态的扩展**与**存量深度训练问题的排查**。社区正在推动对华为 Ascend 芯片的原生支持文档更新，同时 Megatron 训练场景下的 Checkpoint 保存稳定性问题仍在持续讨论中。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **[训练稳定性] Megatron 训练保存模型报错 (#167)**
  - **状态**: OPEN
  - **详情**: 用户在使用 Megatron 进行训练时，于 Step 100 保存 Checkpoint 阶段遭遇崩溃。错误日志涉及 `ActorWorker` 进程超时或异常，可能属于分布式存储或序列化瓶颈问题。
  - **链接**: [alibaba/ROLL Issue #167](https://github.com/alibaba/ROLL/issues/167)

- **[环境配置] Mac 环境依赖冲突解决 (#373)**
  - **状态**: CLOSED
  - **详情**: 关于 Mac 环境下 `pip install` 时 `ray[default]` 与 `opentelemetry-sdk` 版本依赖冲突的问题已解决。
  - **链接**: [alibaba/ROLL Issue #373](https://github.com/alibaba/ROLL/issues/373)

## 4. 关键 PR 进展
- **[文档/生态] 新增华为 Ascend 硬件支持文档 (#374)**
  - **作者**: @UsernameFull
  - **状态**: OPEN
  - **分析**: 该 PR 提交了适配华为 Ascend NPU 的相关文档，并对 LoRA 模块的引用路径进行了更新（`vllm.lora.lora_model`）。这标志着 ROLL 正在从单纯的 NVIDIA 生态向国产算力生态进行兼容性迁移，降低了在特定硬件上的部署门槛。
  - **链接**: [alibaba/ROLL PR #374](https://github.com/alibaba/ROLL/pull/374)

## 5. 为什么值得继续关注
ROLL 作为一个 RLHF/RL 全栈框架，其核心价值在于对复杂大模型训练流程的工程化封装。
1.  **异构算力支持**: 今天的 PR #374 显示了项目正在积极适配 Ascend 等非 NVIDIA 硬件，这对于构建多元化算力底座的 RL 训练至关重要。
2.  **深度集成能力**: Issue #167 涉及 Megatron + Ray 的深层交互，表明该项目正在解决大规模分布式训练中的实际痛点，而非仅停留在算法验证层面。

---
*分析师注：建议持续关注 Issue #167 的后续修复方案，这可能涉及到底层 Actor 的内存管理或通信机制优化。*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目进度摘要 (2026-03-14)

## 1. 今日速览
过去 24 小时内，阿里巴巴 ROCK 项目保持了较高的维护活跃度。虽然无新版本发布，但社区与核心团队集中关闭了 **4 个 Issues** 并合并了 **6 个 Pull Requests**。主要精力集中在 **SDK 文件下载功能增强** 以及 **调度器日志路径修复**，同时核心贡献者 @zhangjaycee 推进了关于构建器沙箱的重要功能更新。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues (已解决)
今日处理的 Issue 均为功能增强与修复，且已迅速通过 PR 解决并关闭：

*   **[SDK] 增加 `download_file` 测试与示例**
    *   针对用户对 SDK 文件下载功能的需求，补充了相应的测试用例与 Demo。
    *   链接: [alibaba/ROCK Issue #631](https://github.com/alibaba/ROCK/issues/631)
*   **[SDK] 支持 OSS 下载 (`download_by_oss`)**
    *   增强了 SDK 的存储集成能力，引入了基于 OSS 的下载功能支持。
    *   链接: [alibaba/ROCK Issue #629](https://github.com/alibaba/ROCK/issues/629)
*   **[Sandbox] 修复调度器日志路径**
    *   修正了 Sandbox 环境下调度任务的日志存储路径问题。
    *   链接: [alibaba/ROCK Issue #625](https://github.com/alibaba/ROCK/issues/625)

## 4. 关键 PR 进展
今日共有 7 个 PR 更新，其中 6 个已关闭（合并），1 个处于开启状态。

### 已合并
*   **feat: 增加文件下载 Demo 及测试用例** (对应 Issue #631)
    *   链接: [alibaba/ROCK PR #632](https://github.com/alibaba/ROCK/pull/632)
*   **feat: 增加下载响应模型及相关常量/脚本** (对应 Issue #629)
    *   链接: [alibaba/ROCK PR #630](https://github.com/alibaba/ROCK/pull/630)
*   **fix: 修复 scheduler log path** (由 @zhongwen666 提交的多轮修复)
    *   包含 PR [#628](https://github.com/alibaba/ROCK/pull/628), [#627](https://github.com/alibaba/ROCK/pull/627), [#626](https://github.com/alibaba/ROCK/pull/626)。
    *   注：针对该修复进行了多次迭代提交，确保路径问题彻底解决。
*   **feat(rocklet): 支持 Alpine/musl, Nix 及旧版 glibc 兼容性**
    *   显著提升了 ROCK 在异构环境（特别是 Alpine 容器和 Nix 包管理器）下的兼容性，解决了底层 C 库链接问题。
    *   链接: [alibaba/ROCK PR #624](https://github.com/alibaba/ROCK/pull/624)

### 进行中
*   **feat(sdk): 为 builder sandbox 增加 ImageBuilder 支持 `env_dir` Docker 构建**
    *   作者: @zhangjaycee
    *   状态: Open (上次更新 2026-03-13)
    *   意义: 该功能旨在简化环境构建流程，允许在沙箱内直接通过 Docker 构建环境目录，是 SDK 工具链的重要增强。
    *   链接: [alibaba/ROCK PR #615](https://github.com/alibaba/ROCK/pull/615)

## 5. 生态观察：为什么值得继续关注？
作为阿里巴巴开源的 RL 基础设施，ROCK 正在从单纯的训练框架向更完善的**工程化平台**演进：

1.  **异构兼容性提升**：今日合并的 [PR #624](https://github.com/alibaba/ROCK/pull/624) 解决了 musl/glibc 兼容性痛点，意味着 ROCK 正在积极适配更轻量级的容器环境（如 Alpine），这对资源受限或追求极致镜像体积的 RL 部署场景非常关键。
2.  **工具链闭环**：从 [Issue #629](https://github.com/alibaba/ROCK/issues/629) 和 [PR #615](https://github.com/alibaba/ROCK/pull/615) 可以看出，项目正在强化 SDK 层的能力（OSS 集成、ImageBuilder），试图打通从环境构建到数据下载的完整开发闭环。
3.  **响应速度**：Issues 提出到 PR 合并均在同一天完成，显示出核心团队目前对该项目的维护投入度较高，能快速响应社区需求。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 RL 日报：slime (THUDM) - 2026-03-14

你好！这是 slime 项目 2026 年 3 月 14 日的开源生态日报。今日项目活跃度较高，主要集中在 Qwen3.5 新模型支持及现有 Megatron 桥接与分布式训练的 Bug 修复。

---

### 1. 今日速览
*   **Issues 状态**：新增/更新 11 条，包含 1 个重要的性能回归问题 和数个 Megatron 桥接 Bug。
*   **PR 状态**：更新 5 条，其中 3 条已合并，新增了对 **Qwen3.5-4B** 的支持并修复了 GLM-4.6V 的配置解析问题。
*   **Releases**：无新版本发布。

---

### 2. 版本发布
*   **无**

---

### 3. 重点 Issues

今日问题主要集中在**高性能训练稳定性**、**Megatron-LM 桥接**及**多模态/多轮训练**方面。

*   **[Critical] DeepSeekV3 训练 MFU 5倍性能回退**
    *   **编号**：[#1717](https://github.com/THUDM/slime/issues/1717)
    *   **详情**：开发者报告 Commit `796d1e4` 引入的 `_wrap_low_level_call` 内存检查导致 DeepSeekV3/R1 在启用 Context Parallel (CP) 时 MFU 下降至原来的 1/5。回滚该特定代码后性能恢复。这表明当前的显存检查机制在大规模 MoE 模型通信中引入了巨大开销。
    *   **影响**：严重影响大模型训练效率，需关注后续修复方案。

*   **[Bug] Qwen3.5 Megatron 桥接模块缺失**
    *   **编号**：[#1711](https://github.com/THUDM/slime/issues/1711)
    *   **详情**：尝试加载 Qwen3.5 Megatron 桥接时报错 `ModuleNotFoundError: No module named 'megatron.bridge.models.conversion.peft_bridge'`。这表明当前桥接代码与主分支存在同步问题。

*   **[Bug] Qwen-VL 与 Megatron 桥接不兼容**
    *   **编号**：[#1723](https://github.com/THUDM/slime/issues/1723)
    *   **详情**：SGLang 引擎在更新 Qwen-VL 权重时报错，影响视觉语言模型的训练流程。

*   **[Bug] Geo3k 多轮对话 Reward 异常**
    *   **编号**：[#1724](https://github.com/THUDM/slime/issues/1724)
    *   **详情**：复现 `geo3k_multi_turn` 示例时，Reward 曲线不收敛且初始 Reward 过低（0.1 vs 0.3），怀疑是多轮对话奖励计算逻辑存在问题。

*   **[Discussion] LoRA 支持 GRPO 训练**
    *   **编号**：[#1202](https://github.com/THUDM/slime/issues/1202)
    *   **详情**：社区持续询问是否计划支持基于 GRPO 的 LoRA 训练。

---

### 4. 关键 PR 进展

*   **[Merged] feat: add Qwen3.5-4B model support**
    *   **编号**：[#1721](https://github.com/THUDM/slime/pull/1721)
    *   **详情**：添加了 `Qwen3.5-4B` 的配置脚本。核心逻辑（插件、桥接）已存在于主库，此 PR 补全了启动脚本，降低了新模型的使用门槛。

*   **[Merged] fix: resolve rope_theta from rope_parameters dict**
    *   **编号**：[#1720](https://github.com/THUDM/slime/pull/1720)
    *   **详情**：修复了 **GLM-4.6V** 等模型的 RoPE 配置解析问题。这些模型将 `rope_theta` 嵌套在字典中，旧代码读取了错误的默认值（10000 vs 500000），导致位置编码错误。

*   **[Merged] [VLM multi-turn] delete fsdp**
    *   **编号**：[#1463](https://github.com/THUDM/slime/pull/1463)
    *   **详情**：清理了 Geo3k VLM 多轮示例中的 FSDP 相关内容，统一仅保留 **Megatron-LM** 作为训练后端，进一步明确了项目对高性能分布式训练的侧重。

*   **[Merged] [docker] patches for glm4.6v, kimi k2.5 and dsa cp only**
    *   **编号**：[#1722](https://github.com/THUDM/slime/pull/1722)
    *   **详情**：主要维护者 @zhuzilin 提交的 Docker 及基础设施补丁，涉及 GLM-4.6V、Kimi K2.5 以及 DSA CP 的支持。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **直面大模型训练痛点**：今日 Issue #1717 揭示了项目正在攻坚 **DeepSeekV3/R1** 级别（MoE + CP）的超大规模训练显存管理难题。Slime 并不仅仅是一个算法库，更是一个在 Megatron-LM 之上解决 MFU（Model FLOPs Utilization）和显存墙痛点的工程实践场。
2.  **前沿模型支持速度极快**：从今日合并的 PR 来看，项目在 **Qwen3.5** 发布后迅速跟进了 4B 版本的支持，并修复了 GLM-4.6V 的关键位置编码 Bug。对于需要紧跟 SOTA 模型做 RLHF/GRPO 对齐的开发者来说，Slime 是极具时效性的选择。
3.  **架构收敛与专注**：通过删除 FSDP 后端（PR #1463）并集中维护 Megatron-LM 桥接，项目展示了专注于**高性能分布式训练**的决心。这对于追求高吞吐量的 RL 训练（如 GRPO/RLHF）至关重要。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

这里是 **AReaL（inclusionAI/AReaL）** 2026-03-14 的开源生态 RL 日报摘要。

# AReaL RL 日报 (2026-03-14)

## 1. 今日速览
AReaL 今日活跃度较高，共处理 **10 个 PR**（其中 3 个已合并）和 **5 个 Issue**。核心动向集中在**多模态模型支持（VLM）**、**推理引擎兼容性**以及**底层基础设施的稳定性修复**。社区正在积极推动从纯文本 RL 向多模态 RL 的扩展，并有重要 PR 合并，修复了 vLLM 与 LoRA 结合时的关键 Bug。

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 重点 Issues

*   **[Feature] 支持 LLaVA-OneVision-1.5 RL 训练**
    *   **摘要**：社区提出对多模态模型 [LLaVA-OneVision-1.5](https://github.com/EvolvingLMMs-Lab/LLaVA-OneVision-1.5) 的支持需求。该模型结合了 Rice ViT 与 Qwen3 LLM，若能支持将极大拓展 AReaL 在多模态强化学习领域的应用边界。
    *   **链接**：[#1028](https://github.com/inclusionAI/AReaL/issues/1028)

*   **[Feature] 推理 Worker 的动态伸缩**
    *   **摘要**：提议在训练过程中支持 Inference Workers 的动态扩缩容，以实现计算资源的自动调整。这是提升大规模 RL 训练资源利用率的关键特性。
    *   **链接**：[#1026](https://github.com/inclusionAI/AReaL/issues/1026)

*   **[Bug] Socket 文件描述符泄漏**
    *   **摘要**：用户报告 `is_port_free()` 函数在 `bind` 失败时未关闭 Socket，导致资源泄漏。虽然定位为小 Bug，但反映了代码在网络工具类健壮性上的提升空间。
    *   **链接**：[#1031](https://github.com/inclusionAI/AReaL/issues/1031)

## 4. 关键 PR 进展

### 已合并
*   **[fix] LoRA 与 XCCL 的版本控制 Bug 修复** (#1021)
    *   **详情**：修复了 `update_weights_lora_xccl` 在 vLLM 引擎中更新权重后，未同步更新 `OpenAIServingModels` 中的 LoRA 名称映射的问题。这是保证 LoRA 动态加载一致性的重要修复。
    *   **链接**：[inclusionAI/AReaL PR #1021](https://github.com/inclusionAI/AReaL/pull/1021)

*   **[fix] 统一 RPC 错误响应 JSON 键名** (#1019)
    *   **详情**：将 RPC 服务端与调度器中的错误响应键统一为 `"error"`，消除了部分接口使用 `"detail"` 导致的不一致性。
    *   **链接**：[inclusionAI/AReaL PR #1019](https://github.com/inclusionAI/AReaL/pull/1019)

*   **[refactor] OpenAI 兼容客户端升级为生产级基础设施** (#921)
    *   **详情**：将实验性的 OpenAI 兼容客户端及代理服务器移至 `areal/infra/`，并添加了 API Key 认证。这标志着 AReaL 在分布式部署的安全性上迈出了重要一步。
    *   **链接**：[inclusionAI/AReaL PR #921](https://github.com/inclusionAI/AReaL/pull/921)

### 进行中
*   **[feat] Hugging Face Kernels 可选支持** (#1033)
    *   **详情**：引入 `kernels` 库以支持直接从 Hub 加载 flash-attn 等内核，旨在简化内核的分发与加载流程。
    *   **链接**：[inclusionAI/AReaL PR #1033](https://github.com/inclusionAI/AReaL/pull/1033)

*   **[fix] VLM GRPO 训练全流程修复** (#1027)
    *   **详情**：针对 FSDP + SGLang 后端的 VLM (视觉语言模型) GRPO 训练修复了 7 个阻断性 Bug，包括 PIL 图像序列化传输问题。
    *   **链接**：[inclusionAI/AReaL PR #1027](https://github.com/inclusionAI/AReaL/pull/1027)

*   **[chore] 大规模依赖升级 (SGLang/vLLM/Megatron)** (#1010)
    *   **详情**：正在处理 SGLang (torch 2.9.1) 与 vLLM 0.17.0 (torch 2.10.0) 之间的依赖冲突，重构了 Dockerfile 以支持变体特定的 torch 版本。
    *   **链接**：[inclusionAI/AReaL PR #1010](https://github.com/inclusionAI/AReaL/pull/1010)

## 5. 为什么值得持续关注

1.  **向多模态 RL (VLM) 的深度演进**：从 PR #1027 对 VLM GRPO 训练的密集修复，到 Issue #1028 提出支持 LLaVA-OneVision-1.5，清晰表明 AReaL 正突破传统纯文本 LLM RLHF 的范畴，向更复杂的多模态推理与训练场景迁移。
2.  **异构推理引擎的兼容性攻坚**：PR #1010 显示项目正在解决 SGLang 与 vLLM 在 PyTorch 版本上的深层冲突。这显示了 AReaL 试图屏蔽底层推理引擎差异，构建更通用、高性能 RL 训练底座的野心。
3.  **基础设施的工程化成熟度**：将 OpenAI 兼容客户端晋升为生产级组件（PR #921）并修复底层网络资源泄漏（PR #1032），说明项目正从“算法原型”向“高可靠生产系统”转型，适合需要大规模分布式训练的团队深入研究。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Transformer Reinforcement Learning) RL 日报
> 日期：2026-03-14 | 数据源：github.com/huggingface/trl

## 1. 今日速览
过去 24 小时内，TRL 仓库活跃度较高，主要集中在 **多模态（VLM）DPO 训练的 Bug 修复** 以及 **底层训练逻辑的优化**。
- **Issues 更新**：5 条（3 条聚焦 VLM 训练崩溃/数据损坏，1 条 vLLM 兼容性）
- **PR 更新**：16 条（6 条由核心贡献者 @albertvillanova 提交，主要修复 VLM 相关问题）
- **新版本**：无

---

## 2. 版本发布
无新版本发布。目前的开发活动集中在 Main 分支的代码迭代与 Bug 修复。

---

## 3. 重点 Issues

### 🔥 VLM (视觉语言模型) 训练稳定性问题频发
今日多个 Issue 报告了在使用 `DPOTrainer` 训练 VLM（如 Qwen2.5-VL）时遇到的各种障碍，表明当前版本对多模态数据的处理存在短板。

1.  **DPOTrainer 在 VLM 训练中静默损坏数据** [OPEN]
    *   **描述**：当设置 `max_length` 且 `truncation_mode="keep_end"` 时，DPOTrainer 会静默丢弃序列中的所有图像 Token，导致训练数据被破坏。
    *   **链接**：[huggingface/trl Issue #5285](https://github.com/huggingface/trl/issues/5285)

2.  **DPOTrainer 配合 VLM 使用时导致 IndexError** [OPEN]
    *   **描述**：当设置 `max_length` 时，由于对齐输入（side-inputs）形状不匹配，导致前向传播崩溃。
    *   **链接**：[huggingface/trl Issue #5283](https://github.com/huggingface/trl/issues/5283)

3.  **DPOTrainer 忽略 3D-RoPE 模型的 `mm_token_type_ids`** [CLOSED]
    *   **描述**：在处理 Qwen2.5-VL 等模型时，DPOTrainer 静默忽略了关键的多模态参数，相关修复 PR 已合并。
    *   **链接**：[huggingface/trl Issue #5277](https://github.com/huggingface/trl/issues/5277)

### 🚨 生态兼容性问题
4.  **Qwen3.5-0.8 GRPO 训练与 vLLM 0.17.0 不兼容** [OPEN] [🐛 bug, 🚨 Important]
    *   **描述**：使用最新 TRL 版本进行 GRPO 训练时，vLLM 0.17.0 报错 `ValueError: There is no module or parameter named 'model'`，涉及模型参数名解析问题。
    *   **链接**：[huggingface/trl Issue #5269](https://github.com/huggingface/trl/issues/5269)

### 🛠️ 技术疑问
5.  **`use_liger_gkd_loss` 是否破坏 DDP 梯度同步？** [OPEN]
    *   **描述**：开发者质疑在 GKD/GOLD trainer 中解包 student model 的操作可能影响分布式训练的同步机制。
    *   **链接**：[huggingface/trl Issue #5282](https://github.com/huggingface/trl/issues/5282)

---

## 4. 关键 PR 进展

### 🚀 VLM 与 DPO 修复（高优先级）
核心贡献者 @albertvillanova 密集提交了针对 VLM 训练的修复代码，试图解决上述 Issue 反馈的问题。

*   **PR #5284: 支持 DPO VLM 训练中的 max_length**
    *   **内容**：修复了在 DPO 训练中对 `input_ids` 进行截断时，未同步截断 `token_type_ids` 等对齐输入的问题。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5284](https://github.com/huggingface/trl/pull/5284)

*   **PR #5286: 防止 "keep_end" 截断模式导致 VLM 数据损坏**
    *   **内容**：针对 Issue #5285，强制在 VLM 训练使用 `keep_end` 模式时抛出 `ValueError`，防止静默丢弃图像 Token。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5286](https://github.com/huggingface/trl/pull/5286)

*   **PR #5279: 修复 `mm_token_type_ids` 被静默丢弃的问题**
    *   **内容**：解决 Issue #5277，确保 VLM 的多模态参数正确传递。
    *   **状态**：[CLOSED]
    *   **链接**：[huggingface/trl PR #5279](https://github.com/huggingface/trl/pull/5279)

### 🧪 算法与功能扩展
*   **PR #5199: 集成 VESPO (Variational Sequence-Level Soft Policy Optimization)**
    *   **内容**：在 `grpo_trainer.py` 中引入 VESPO 损失函数，这是基于论文 (2602.10693) 的新算法实现。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5199](https://github.com/huggingface/trl/pull/5199)

*   **PR #5102: 添加 DGPO (ICLR 2026) 支持**
    *   **内容**：扩展 GRPO 以支持 DGPO 算法。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5102](https://github.com/huggingface/trl/pull/5102)

### ⚡ 性能与工程优化
*   **PR #5189: Packing 逻辑重构**
    *   **内容**：用向量化实现替换了之前的 BFD splitting 逻辑，旨在提升处理速度并减少错误。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5189](https://github.com/huggingface/trl/pull/5189)

*   **PR #5281: 修复非主线程调用 `accuracy_reward` 崩溃**
    *   **内容**：解决了 `math_verify` 在异步训练中因 `signal.alarm()` 导致的 `ValueError`。
    *   **状态**：[OPEN]
    *   **链接**：[huggingface/trl PR #5281](https://github.com/huggingface/trl/pull/5281)

---

## 5. 为什么值得持续关注

1.  **多模态 RLHF 的最前线**：今日的 Issue 和 PR 密集轰炸表明，TRL 正在经历从纯文本 RL 向 **多模态（VLM）RL** 深水区的过渡。对 Qwen2.5-VL 等模型的支持修复是当前迭代的核心，这对希望在多模态模型上进行对齐的开发者至关重要。
2.  **紧跟最新算法**：除了常规修复，社区正在积极将 **ICLR 2026** 的新算法（如 DGPO）和最新论文（VESPO）整合进 TRL，使其始终保持在 RL 算法研究的前沿。
3.  **生产级健壮性提升**：针对 vLLM 兼容性、分布式训练（DDP）以及数据截断的修复，显示了项目正在努力消除从研究代码转向生产环境时的“坑”。

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

以下是 volcengine/verl 项目 2026-03-14 的 RL 日报摘要：

---

### 🚀 今日速览
过去 24 小时内，verl 项目保持了较高的活跃度，共更新 **35 个 PR** 和 **29 个 Issue**。虽然没有新的版本发布，但社区焦点高度集中在 **Qwen3.5 系列模型的适配**以及 **Fully Async（全异步）训练模式的稳定性**上。同时，新的 PR 正在集成 Atropos 环境并扩展多模态（FlowGRPO）和推理后端（TensorRT-LLM）的支持。

---

### 📦 版本发布
*   **无新版本发布**。

---

### 🚨 重点 Issues

1.  **社区高关注：Qwen3.5 适配需求**
    用户对 Qwen3.5 系列模型的 RL 训练支持呼声极高，该 Issue 获得了 **40 个点赞**，官方 Roadmap 也已将其列入重点跟踪。
    [Issue #5460](https://github.com/verl-project/verl/issues/5460) | [Roadmap #5389](https://github.com/verl-project/verl/issues/5389)

2.  **Fully Async 模式性能与稳定性争议**
    多名用户反馈 `fully_async_policy` 存在性能或稳定性问题。包括模式 3 效果不及预期（Issue #5458）、多轮工具调用训练挂起（Issue #5321）以及 Checkpoint 同步报错（Issue #5009）。此外，还有用户反馈在 v1.0.0-rc0 中不支持 TP > 8 的问题。
    [Issue #5458](https://github.com/verl-project/verl/issues/5458) | [Issue #5585](https://github.com/verl-project/verl/issues/5585)

3.  **推理引擎兼容性挑战**
    随着 verl 0.7.0 的更新，出现了与 vLLM 新版本（如 0.16.0）的兼容性冲突，导致无法使用 Router Replay 等新特性。同时也有用户报告在 Qwen3 GRPO 训练中 Rollout 内容为空的 Bug。
    [Issue #5586](https://github.com/verl-project/verl/issues/5586) | [Issue #5582](https://github.com/verl-project/verl/issues/5582)

---

### 🔧 关键 PR 进展

1.  **[Feature] Atropos 环境集成与 FlowGRPO 多模态支持**
    PR #5520 正在将 Atropos RL 环境集成到 verl 的 GRPO 流程中。同时，PR #5297 引入了 FlowGRPO 算法，支持对 Qwen-Image 进行训练，并集成了 Diffusers 和 vLLM-Omni。
    [PR #5520](https://github.com/verl-project/verl/pull/5520) | [PR #5297](https://github.com/verl-project/verl/pull/5297)

2.  **[Feature] 引入 NeMo-Automodel 训练引擎**
    为了扩展生态，PR #5407 提议将 NeMo-Automodel 作为继 FSDP 和 Megatron 之后的又一训练引擎选项，目前已在 SFT Trainer 中通过测试。
    [PR #5407](https://github.com/verl-project/verl/pull/5407)

3.  **[Perf & Fix] 训练性能优化与 Bug 修复**
    针对 SFT 阶段的性能抖动问题，PR #5549 引入了定期 GC 机制。同时，PR #5513 修复了 FSDP2 在开启激活值卸载时的 RuntimeError。
    [PR #5549](https://github.com/verl-project/verl/pull/5549) | [PR #5513](https://github.com/verl-project/verl/pull/5513)

4.  **[Rollout] TensorRT-LLM 兼容性增强**
    PR #5583 修复了 TensorRT-LLM 作为 Rollout 后端时与 Qwen-VL 系列模型的兼容性问题，这是 Roadmap 中加强 TRT-LLM 支持的一部分。
    [PR #5583](https://github.com/verl-project/verl/pull/5583)

---

### 💡 为什么值得关注
verl 正在从一个单纯的 PPO 训练框架向**全栈 RL 基础设施**演进：
1.  **前沿算法落地快**：迅速跟进 FlowGRPO、Atropos 等最新研究和环境，为多模态和 Agent 训练提供了开箱即用的支持。
2.  **异步架构突破**：尽管 Fully Async 模式目前存在一些稳定性反馈，但它仍是解决 LLM 训练中资源闲置（GPU 空转）痛点的关键路径，社区正在高频修复相关问题。
3.  **硬件与引擎解耦**：项目正在积极构建 "Training Engine Agnostic"（训练引擎无关）的架构，支持 Megatron、FSDP2 以及即将到来的 NeMo，并持续优化 TRT-LLM 推理后端，这使得 verl 在异构计算集群中具有极高的灵活性和潜力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL 日报：torchtune 生态追踪 (2026-03-14)

## 1. 今日速览
过去 24 小时内，torchtune 仓库代码层面无更新（0 PRs / 0 Releases），但社区出现重大战略性讨论。核心热点集中在 **Issue #2883**，该讨论涉及项目的未来路线图及后训练（post-training）生态的演进方向，标志着项目可能正处于从单纯的微调工具库向更广泛 RL/后训练生态转型的关键节点。

## 2. 版本发布
- **无新版本发布**。
- 近期代码提交停滞，建议关注主分支动态及 Issue 中的路线图进展。

## 3. 重点 Issues
- **[#2883 [OPEN] The future of torchtune](https://github.com/pytorch/torchtune/issues/2883)**
  - **作者**: @ebsmoothers
  - **核心内容**: 这是一个高优先级的战略性帖子。作者回顾了自 2023 年以来 torchtune 在降低微调门槛方面的成就（拥有 21 个 recipes），并探讨了在当前计算资源环境变化及后训练需求激增的背景下，项目的下一步走向。
  - **分析师点评**: 尽管创建于 2025 年 7 月，但该 Issue 在昨日（2026-03-13）仍有活跃更新。鉴于 torchtune 目前主要覆盖 SFT（监督微调），社区极有可能在讨论如何更深度地整合 RLHF/DPO 等纯强化学习流程，以适应 Agent 和推理模型（Reasoning Models）的训练需求。

## 4. 关键 PR 进展
- **无**。过去 24 小时内无 PR 更新。代码库目前处于维护/规划期，建议密切关注上述 Issue 是否会转化为后续的 Feature PR。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日代码静默，torchtune 依然是 PyTorch 生态中不可忽视的一环，原因如下：
1.  **后训练的标准库潜力**：随着 LLM 训练重心从 Pre-training 转向 Post-training（SFT + RL Alignment），torchtune 提供的模块化设计是研究 RLHF、DPO 及其变体的理想实验床。
2.  **原生 PyTorch 优势**：相比 Hugging Face TRL 等高层封装，torchtune 保持了对底层 PyTorch 原语的接近，便于 RL 算法工程师进行底层算子优化和定制化 Loss 计算。
3.  **生态整合预期**：Issue #2883 的活跃暗示 Meta 正在重新评估其定位。如果未来版本加强了对多模态或长上下文的 RL 支持，它将成为开源 RL 复现的核心基础设施。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-03-14)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库 **无新增 Issues、无 Release 版本发布**，但 **PR 板块活跃度显著**。核心开发团队正集中精力推进两大技术栈的融合：一是引入 **离线蒸馏** 基础设施，二是完善基于 **OLMo-core 的 GRPO（Group Relative Policy Optimization）** 分布式训练支持。此外，针对新一代 H100/H800 硬件的 FlashAttention-3 适配已通过合入。

## 2. 版本发布
无。

## 3. 重点 Issues
无新增 Issues。目前项目处于功能密集开发阶段，主要讨论集中在 PR 代码审查中。

## 4. 关键 PR 进展

### 🔥 [新增] 离线蒸馏基础设施
*   **PR #1525**: [OPEN] Offline Distillation via DistillKit (Part One - Compression Helpers for Logit Capture)
    *   **作者**: @wolfecameron
    *   **进展**: 创建于 3/12，3/13 更新。
    *   **详情**: 这是引入**离线蒸馏**功能的第一阶段。主要包含用于 Logit 捕获的压缩辅助工具，为后续利用 vLLM 进行教师模型采样和学生模型离线训练奠定基础。
    *   **链接**: [allenai/open-instruct PR #1525](https://github.com/allenai/open-instruct/pull/1525)

### 🚀 [合并] H100/H800 FlashAttention-3 支持
*   **PR #1526**: [CLOSED] Add flash-attn-3 for FA3 support on H100/H800 GPUs
    *   **作者**: @finbarrtimbers
    *   **进展**: 3/13 关闭（已合入）。
    *   **详情**: 添加 `flash-attn-3` 依赖。结合 `olmo-core` 中 DPO 训练脚本的现有逻辑，现在系统可在 H100/H800 GPU 上自动检测并启用 Flash Attention 3 后端，显著提升显存效率和训练速度。
    *   **链接**: [allenai/open-instruct PR #1526](https://github.com/allenai/open-instruct/pull/1526)

### 🧠 [迭代] OLMo-core GRPO 完整工作流
*   **PR #1399**: [OPEN] Add GRPO main entry point and scripts (GRPO olmo-core: PR 5 of 5)
    *   **作者**: @finbarrtimbers
    *   **进展**: 长期迭代，3/13 更新。
    *   **详情**: **GRPO 系列的收官之作 (5/5)**。增加了 `grpo.py` 主训练编排脚本及全套测试脚本（包括单卡、多节点及 Tool use 场景）。标志着 Open Instruct 正式通过 OLMo-core 实现完整的 GRPO 算法支持。
    *   **链接**: [allenai/open-instruct PR #1399](https://github.com/allenai/open-instruct/pull/1399)

*   **PR #1398**: [OPEN] Add OLMo-core Ray actor (GRPO olmo-core: PR 4 of 5)
    *   **作者**: @finbarrtimbers
    *   **进展**: 3/13 更新。
    *   **详情**: 引入了 `PolicyTrainerOLMoCoreProcess` 和 `OLMoCoreModelGroup` 类。该 PR 封装了 Ray Actor，旨在解决 GRPO 在多 GPU 和多节点环境下的分布式通信与训练调度问题。
    *   **链接**: [allenai/open-instruct PR #1398](https://github.com/allenai/open-instruct/pull/1398)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **算法栈的现代化扩展**：项目正从传统的 SFT/DPO 快速扩展到 **GRPO (Group Relative Policy Optimization)**。GRPO 是目前提升 LLM 推理能力的关键 RL 变体（常用于 Math/Code 场景），Open Instruct 提供了基于 OLMo-core 的生产级实现。
2.  **面向 H100 时代的性能优化**：随着 FlashAttention-3 的正式合入，该项目已针对 H100/H800 等新一代算力卡完成底层优化，对于需要大规模分布式训练的 RL 实验具有极高的工程参考价值。
3.  **蒸馏技术的工程化落地**：通过 #1525 可以看出，团队正在构建基于 vLLM 的**离线蒸馏**流水线。这表明项目不仅关注模型训练，还在通过 Model Compression 降低推理成本，构建从训练到部署的完整闭环。

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

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 生态动态
**日期**：2026-03-14
**数据源**：github.com/DLR-RM/stable-baselines3

---

### 1. 今日速览
过去 24 小时内，SB3 仓库活跃度显著提升，主要集中在**核心算法增强**与**生态兼容性**上。虽然没有新版 Release，但核心维护者 @araffin 提交了针对 PPO 算法的 Beta 分布支持，这是对解决连续动作空间“裁剪偏差”问题的关键更新。

*   **Issues 更新**：7 条（2 条 Open，5 条 Closed）
*   **PR 更新**：2 条（1 条功能性 WIP，1 条文档更新）
*   **焦点关键词**：`Beta Distribution`、`PPO`、`Experience Persistence`

---

### 2. 版本发布
*   **无新版本发布**。

---

### 3. 重点 Issues

*   **[功能请求] 引入 Beta Distribution 解决高斯分布裁剪问题**
    *   **编号**：[#2142](https://github.com/DLR-RM/stable-baselines3/issues/2142)
    *   **摘要**：社区长期关注连续动作空间中使用高斯分布导致的截断偏差问题。该 Issue 提议为有界动作空间引入 `BetaDistribution`，引用了 Petrazzini & Antonelo (2021) 的研究，旨在提高训练稳定性并消除动作被强制裁剪到 `[-1, 1]` 边界带来的偏差。目前该 Issue 依然 Open，等待最终实现合并。

*   **[功能请求] 跨训练轮次的经验持久化**
    *   **编号**：[#2226](https://github.com/DLR-RM/stable-baselines3/issues/2226)
    *   **摘要**：用户 @robotmem 提出了一个关于"Replay Buffer 生命周期"的痛点。目前的 SB3 机制下，每次调用 `model.learn()` 都是相对独立的，重启训练后之前的 Episode 级别经验会丢失。作者建议通过 `BaseCallback` 机制实现跨运行的经验持久化，以便在如 FetchPush 等复杂任务中复用历史数据。

*   **[已关闭] 集成 OpenEnv 的文档需求**
    *   **编号**：[#2217](https://github.com/DLR-RM/stable-baselines3/issues/2217)
    *   **摘要**：请求添加关于如何使用 [OpenEnv](https://github.com/meta-pytorch/OpenEnv) 配合 SB3 训练智能体的文档。该 Issue 已被关闭，可能意味着相关内容已在文档中补充或通过其他方式解决。

---

### 4. 关键 PR 进展

*   **[WIP] PPO 算法支持 Beta 分布**
    *   **编号**：[#2228](https://github.com/DLR-RM/stable-baselines3/pull/2228)
    *   **作者**：@araffin
    *   **状态**：Open (WIP)
    *   **分析**：这是今日最核心的更新。该 PR 直接响应了 Issue #2142。核心维护者 @araffin 正在为 PPO 添加 Beta 分布策略选项。这标志着 SB3 在处理有界连续控制任务上迈出了重要一步，有望从底层解决传统 Gaussian 策略在 Action Boundary 处表现不佳的问题。
    *   **备注**：提交信息显示 "done with zed + claude"，暗示 AI 辅助编程已融入核心开发流。

*   **[Merged/Closed] 更新 SB3 生态变更日志**
    *   **编号**：[#2227](https://github.com/DLR-RM/stable-baselines3/pull/2227)
    *   **作者**：@araffin
    *   **状态**：Closed
    *   **分析**：主要涉及 SB3 周边生态（如 RL Zoo, SB3-Contrib 等）的 Changelog 更新，维护文档的时效性。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？

1.  **核心算法的持续进化**：SB3 不仅是稳定的工业级基准库，正在通过 PR #2228 这样的更新引入学术界验证过的改进（如 Beta Distribution 替代 Gaussian）。这解决了 RL 工程中"有界动作空间输出截断"的常见痛点，提升了算法在精细控制任务上的潜力。
2.  **解决工程痛点**：Issue #2226 关于"经验持久化"的讨论反映了社区对**数据效率**和**断点续训**的深层需求。虽然目前的 Replay Buffer 机制基于单次运行，但这类讨论推动了 SB3 向更灵活的数据管理方向发展。
3.  **生态兼容性**：从 Issue #2217 可以看出，SB3 正在与新的环境接口（如 OpenEnv）保持紧密对接，确保其作为标准训练后端的通用性。

---
*分析师注：建议密切关注 PR #2228 的合并进度，这将是 SB3 近期的一个重要功能性更新。*

</details>