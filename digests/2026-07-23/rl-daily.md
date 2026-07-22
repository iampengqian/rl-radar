# RL 开源生态日报 2026-07-23

> 生成时间: 2026-07-22 22:18 UTC | 覆盖项目: 15 个

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

当前（2026年下半年）强化学习（RL）开源生态正处于深刻的范式转换期。传统的单智能体 RL 基准（如 Gymnasium/PettingZoo）和经典算法库（如 SB3/CleanRL）已步入极度稳定的维护期，核心底座基本固化。

与此同时，生态的绝对重心已全面让位于**面向大语言模型（LLM）及多模态模型（VLM）的后训练（Post-training）与对齐基础设施**。以 verl、TRL、AReaL、slime、Open Instruct 为代表的框架，正在围绕 PPO/GRPO、MoE 架构、异构算力与分布式通信进行极其深度的工程重构。开源社区的关注点已从单纯的“算法复现”升级为“如何在大规模异构集群上高可用、高吞吐地完成超大模型的强化学习闭环”。

## 各项目活跃度对比

过去 24 小时内，各项目的活动呈现出显著的阶梯分化。HPC（高性能计算）与 LLM RL 框架占据绝大部分活跃度，而传统单智能体 RL 框架趋于静默。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 48 | 24 | 0 | HPC 与异构算力深度攻坚，框架正在重写底层通信与硬件适配层 |
| **TRL** | 13 | 39 | 0 | API 重构期，聚焦异步 RL、蒸馏系统化与多模态底座修复 |
| **AReaL** | 4 | 11 | 0 | 攻坚 MoE 模型训练痛点（路由对齐/显存墙），高可用工程打磨 |
| **ROCK** | 6 | 10 | 0 | 聚焦云原生级 RL 环境管理，深耕异构算力调度与安全配置 |
| **Open Instruct**| 0 | 4 | 0 | 前瞻性适配 B300/CUDA 13，聚焦底层训练 IO/存储优化 |
| **slime** | 2 | 4 | 0 | 探索 FP4 低比特训练与多元 GPU/MUSA 适配 |
| **ROLL** | 1 | 3 | 0 | 补齐极端情况下的算法鲁棒性，深度适配昇腾 NPU |
| **PettingZoo** | 1 | 5 | 0 | 渲染层现代化重构，物理引擎精度的细粒度打磨 |
| **torchtune** | 0 | 1 | 0 | 架构演进信号，推进 Iterable Dataset 以支持流式学习 |
| **Gymnasium** | 1 | 0 | 0 | 维稳期，讨论大规模并发环境下的系统资源调度限制 |
| **其余无活动项目** | - | - | - | CleanRL, OpenRLHF, rl_games, SB3, Tianshou 过去 24h 零活动 |

## 共同关注的研究与工程方向

### 研究与算法侧信号
1. **GRPO 与蒸馏的深度融合**：框架不再孤立看待对齐与蒸馏。TRL 正在基于 GRPO 的底层 Keys 全局重构 `DistillationTrainer`；AReaL 则引入了跨 Tokenizer 的 On-policy 蒸馏，打破了不同模型族（如 LLaMA 到 Qwen）的生态壁垒。
2. **KL 散度与优势函数的精细化**：为了解决算法训练方差过大问题，TRL 引入无偏的 "K1-in-Reward" KL 估算器；ROLL 则在底层针对单 Token 极端情况修复了优势白化崩溃问题，体现了对算法数值稳定性的极致追求。
3. **面向 Agent 与长推理链的设计**：无论是 AReaL 提出的“证据驱动记忆服务”RFC，还是 TRL 将 `max_completion_length` 默认值翻倍（至 512），都反映出 RL 算法正向着复杂智能体交互和长思维链验证演进。

### 工程与基础设施侧信号
1. **突破大规模集群的通信瓶颈**：超大模型的 RL 训练正受制于网络 I/O。verl、slime 与 ROLL 均在底层引入或接入了 Mooncake RDMA 传输后端，以实现权重 P2P 直推或结构化 `DataProto` 的高速跨节点传输，彻底绕过传统 NCCL 的性能限制。
2. **异构算力与下一代硬件的竞速**：摆脱单一算力依赖成为共识。verl、ROLL 紧急适配华为昇腾 NPU；Open Instruct 跑通 B300/CUDA 13 闭环；slime 适配国产摩尔线程（MUSA）。大模型 RL 框架已具备多元算力调度底座。
3. **MoE 架构专属的工程级重构**：MoE 模型给 RL 带来了全新的“路由不一致”挑战。AReaL 引入 R3 Router Replay 确保 Actor 与 Rollout 间专家选择的一致性；verl 紧急修复了昇腾 NPU 唤醒后的 MoE 通信状态异常。

## 差异化定位分析

*   **底层 HPC 深水区攻坚者 (verl, AReaL, slime, ROLL)**：这类框架已经脱离了简单的算法封装，深入到 Megatron / FSDP 底层，死磕 NCCL 挂起恢复、显存分块计算、FP4 低比特量化等极致性能优化。它们面向拥有大规模集群的工业巨头或顶尖实验室。
*   **生态标准与聚合者 (TRL, Open Instruct)**：以 HuggingFace 生态为核心，强调整体 API 的规范性、训练过程的可观测性（如 Rollout 轨迹追踪）以及与最新开源模型（如 OLMo, Qwen3）的无缝兼容。它们是中等算力规模团队首选的“易用且强大”的基座。
*   **云原生 RL 基础设施 (ROCK)**：作为阿里系组件，其并不纠缠于算法层面的微调，而是专注于 RL 场景下“环境沙箱”的高可用管理、分布式容错调度与安全合规，填补了云原生环境生命周期管理的空白。
*   **经典环境基石**：处于维护期的 Gymnasium 和 PettingZoo 仍在持续优化物理模拟精度和大规模并发时的资源限制，为非 LLM 类强化学习（如机器人控制）提供最权威的测试床。

## 社区热度与成熟度

从 Issues 与 PRs 的绝对数量及讨论深度来看，**verl** 和 **TRL** 占据着当前 RL 开源生态的绝对流量高地。verl 凭借对前沿硬件（B200/昇腾）和顶尖模型（Qwen3-VL MoE）的极速响应，吸引了大量一线开发者的踩坑与反馈，社区处于高强度共创状态。TRL 则在向工业级架构蜕变的过程中，保持着严谨的重构纪律。

同时，诸如 **AReaL** 和 **ROCK** 等项目展现出了极高的代码质量与工程成熟度。它们对 SSRF 漏洞等安全风险的零容忍，以及对沙箱状态机、故障恢复 OOM 等底层细节的严苛把控，标志着这些项目已完全迈入企业级 Production-ready（生产可用）阶段。相比之下，传统经典 RL 库的社区已进入平稳的低活跃成熟期，鲜有颠覆性架构更新。

## 值得关注的趋势信号

1. **“内存墙”与“通信墙”成为 RLHF 核心战场**：模型参数量的激增使得传统张量并行已无法满足 RL 训练（尤其是频繁的 Trainer-to-Rollout 权重同步）的需求。Mooncake 等基于 KVCache 和 RDMA 的解耦传输架构正在成为各大框架标配。
2. **底层优化器与后训练链路的深度绑定**：verl 接入 Megatron 的 `TensorParallelMuon` 优化器释放了一个强烈信号——传统 AdamW 在超大模型上的绝对统治正在动摇，针对 Muon 等新兴优化器在分布式 RL 场景下的工程支持将成为下一阶段框架的必选项。
3. **数据管道的流式演进**：torchtune 提出 Iterable Dataset 的 RFC，反映出业界意识到传统基于内存的全量 Map-style 数据加载已无法支撑大规模 Agent 交互产生的海量流式数据，Off-policy 强化学习的数据处理机制有望迎来底层重构。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL 开源生态日报：ROLL (alibaba/ROLL)**
**日期**: 2026-07-23

以下是过去 24 小时内 ROLL 项目的 GitHub 活动摘要：

### 1. 今日速览
过去 24 小时，ROLL 仓库共更新 **3 个 Pull Requests** 和 **1 个 Issue**，无新版本发布。活动核心聚焦于底层计算逻辑健壮性修复（单 Token 优势白化报错）、国产昇腾 NPU 硬件生态适配，以及基于 Mooncake 的高效数据传输后端引入。

### 2. 版本发布
**无**（近期无新 Release 发布）。

### 3. 重点 Issues
*   **#475 [Bug] Advantage whitening fails with a single valid response token**
    *   **作者**: Jackie2049
    *   **链接**: [alibaba/ROLL Issue #475](https://github.com/alibaba/ROLL/issues/475)
    *   **技术摘要**: 暴露了 RL 训练中极端情况下的计算隐患。当 Response 过滤后仅剩 1 个有效 Token，且开启 Reward/Advantage whitening 时，由于 `compute_advantage` 仅在 `response_mask.sum() == 0` 时关闭白化，导致无偏方差计算发生崩溃。

### 4. 关键 PR 进展
*   **#476 fix(advantage): skip whitening for short responses**
    *   **作者**: Jackie2049
    *   **链接**: [alibaba/ROLL PR #476](https://github.com/alibaba/ROLL/pull/476)
    *   **进展**: 针对 [Issue #475](https://github.com/alibaba/ROLL/issues/475) 的即时修复。修改了 RLVR 和 Agentic 路径的底层逻辑，当有效 Token 少于 2 个时自动跳过 `masked_whiten` 操作，并同步增加了针对性的回归测试覆盖。
*   **#469 Add Mooncake DataProto transfer backend**
    *   **作者**: zxpdemonio
    *   **链接**: [alibaba/ROLL PR #469](https://github.com/alibaba/ROLL/pull/469)
    *   **进展**: 持续推进（创建于 06-30）。引入 Mooncake 作为 ROLL 可选的底层结构化 `DataProto` 传输后端，在保持原有 `transfer_backend.put/get/delete` 和 `RemoteBatch` 语义不变的前提下，提升大规模分布式训练时的数据传输效率。
*   **#456 [feat] Support ascend mindspeed&megatron and add CI tests**
    *   **作者**: shun001
    *   **链接**: [alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456)
    *   **进展**: 持续推进（创建于 06-04）。扩展硬件生态兼容性，添加了基于 MindSpeed 的 NPU 初始化补丁、Megatron 优化器/Offload 兼容性更新及 NPU 注意力掩码处理。同时接入了昇腾平台的 CI 测试工作流和 Qwen3 DPO Megatron 示例。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **深度适配 Agentic 与 RLVR 场景**：从 Issue #475 和 PR #476 可以看出，ROLL 对强化学习（如 RLHF/RLVR）和智能体训练中底层的 Token 级 Mask、Advantage 计算等边界条件处理得非常细致，具备工业级可靠性。
2.  **多算力硬件生态的无缝扩展**：通过 PR #456，ROLL 正在系统性地填补基于昇腾 NPU 的 Megatron 大模型训练生态空白，为国产算力运行大规模 RL 任务提供了直接支持。
3.  **前沿底层通信架构的整合**：PR #469 引入 Mooncake 传输后端，表明项目团队正积极探索通过 KVCache 等底层技术优化分布式训练中 `DataProto` 的跨节点通信瓶颈，直指大规模 RL 训练的核心痛点。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK 强化学习开源生态日报**
**日期**: 2026-07-23 | **项目**: [alibaba/ROCK](https://github.com/alibaba/ROCK)

---

### 1. 今日速览
过去 24 小时内，ROCK 项目代码库保持高度活跃，共产生 **6 条 Issue 更新**（3 个新建，3 个关闭）和 **10 条 PR 更新**（4 个新提交，3 个已合并/关闭）。今日项目重心集中在**沙箱生命周期管理的健壮性优化**、**Ray 分布式调度容错**以及**异构计算（GPU）资源感知**。无新版本发布。

### 2. 版本发布
*   **最新 Releases**: 无。

### 3. 重点 Issues
今日的 Issues 聚焦于沙箱状态一致性和企业级配置规范：

*   🛠 **[Bug] 沙箱重启后 `start_time` 未刷新** ([#1287](https://github.com/alibaba/ROCK/issues/1287))
    *   **详情**: 沙箱停止后重启进入 `PENDING` 状态时，保留了历史 `start_time`。这会导致系统对沙箱实际运行时间的计算出现严重偏差。目前状态机仅在缺失该字段时才进行初始化。
*   📈 **[Feature] 在状态查询 API 中暴露 GPU 资源** ([#1285](https://github.com/alibaba/ROCK/issues/1285))
    *   **详情**: 当前 `get_status` API 未返回沙箱分配的 GPU 资源。客户端无法直接校验底层 GPU 的分配情况（如 `num_gpus` 和 `accelerator_type`）。
*   ⚙️ **[Feature] 通过 Nacos 动态配置 `max_allowed_spec`** ([#1290](https://github.com/alibaba/ROCK/issues/1290))
    *   **详情**: 请求支持通过动态配置中心（Nacos）热更新运行时的最大允许规格，以摆脱本地 YAML 文件静态配置的限制。
*   🔒 **[Enhancement] 限制 AES 密钥仅从 YAML 加载** ([#1265](https://github.com/alibaba/ROCK/issues/1265)) - **已关闭**
    *   **详情**: 此前允许从 Nacos 刷新或回退生成 AES 密钥，这会在运行时静默轮换密钥并掩盖部署配置错误。该 Issue 建议强制仅从顶级 YAML 读取，配置缺失则直接启动失败。

### 4. 关键 PR 进展
对应上述需求，核心贡献者（@zhangjaycee, @zhongwen666）提交了多项高质量修复与特性代码：

*   ✨ **暴露 GPU 资源状态** ([PR #1286](https://github.com/alibaba/ROCK/pull/1286))
    *   **进展**: 在沙箱元数据和状态响应模型中添加了 `num_gpus` 和 `accelerator_type`。确保在 direct、proxy 和 OpenSandbox 路径下均能一致返回 GPU 数据。
*   ⚡ **异步化沙箱镜像提交与推送** ([PR #1280](https://github.com/alibaba/ROCK/pull/1280))
    *   **进展**: 将沙箱镜像的 commit 和 push 流程通过 Proxy 角色异步化，利用现有 Rocklet execute API，并将生命周期状态持久化在 worker-local 的 PID、lock 和 log 中。这对包含大量环境保存的 RL 训练任务至关重要。
*   🛠 **修复沙箱重启时间记录** ([PR #1289](https://github.com/alibaba/ROCK/pull/1289)) | **关联 Issue #1287**
*   🛡 **优化 Ray 调度超时与清理机制** ([PR #1288](https://github.com/alibaba/ROCK/pull/1288))
    *   **进展**: 当 Ray 提交元数据获取失败时，主动 kill actor，防止资源泄漏。（注：同目的的 [PR #1284](https://github.com/alibaba/ROCK/pull/1284) 已关闭，代码逻辑合并于此或 #1282 相关逻辑）。
*   🧱 **强化 AES 密钥配置安全性** ([PR #1268](https://github.com/alibaba/ROCK/pull/1268)) - **已合并**
*   🔗 **支持 OpenSandbox 持久化会话** ([PR #1262](https://github.com/alibaba/ROCK/pull/1262))
    *   **进展**: 通过官方 SDK 实现 OpenSandbox 的 `create/run/close_session`，将映射关系持久化至 Redis，实现跨 Admin worker 的会话管理，并使用过期机制处理并发。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **攻坚 RL 基础设施的核心痛点**：ROCK 正在解决 RLHF/Agent 训练中最棘手的“环境（Sandbox）管理”问题。从今日的“异步镜像保存”到“GPU 资源透出”，它正在降低大模型训练中环境实例的 IO 阻塞和异构算力调度门槛。
2.  **面向高可用与分布式的大规模设计**：项目深度集成了 Ray（容错调度）与云原生动态配置。通过处理 Docker 端口扫描竞争（[#1281](https://github.com/alibaba/ROCK/issues/1281)）和跨 Worker 的状态一致性（Redis持久化映射），ROCK 证明了其面向工业级大规模集群的设计定位。
3.  **企业级安全与规范的演进**：对 AES 加密密钥配置的严格限制（禁止运行时回退生成），体现了该项目在向企业级部署演进时，对安全审计和配置硬失败的严谨态度。对于需要在自建集群上部署复杂 RL 管线的企业和团队来说，这是一个值得投入精力跟踪或使用的基础设施项目。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime 强化学习生态项目日报（2026-07-23）**

**1. 今日速览**
过去 24 小时内，slime 仓库共更新 2 条 Issues 和 4 条 PR，无新版本发布。整体活跃度集中在底层推理引擎升级、异构硬件适配以及 RDMA 通信优化等底层与工程化方向。

**2. 版本发布**
今日无新版本发布。

**3. 重点 Issues**
*   **高并发推理部署异常排查**
    *   **描述**：开发者反馈将 `qwen3.5-27B` 转换为 torch dist 并转回 hf 格式后，使用 sglang 在张量并行（TP=4/8）部署时，模型输出崩溃（仅输出大量“！”）。在 TP=1/2 下正常，且减小输入 tools 长度可缓解。该问题直接影响大模型在分布式 RLHF 训练后的多卡推理/部署环节。
    *   **链接**：[THUDM/slime Issue #2222](https://github.com/THUDM/slime/issues/2222)
*   **下一代基座模型支持进展**
    *   **描述**：社区询问 slime 对 DeepSeek V4 模型的支持情况与微调计划。这反映了社区对 slime 快速兼容下一代主流开源大模型的期待。
    *   **链接**：[THUDM/slime Issue #1910](https://github.com/THUDM/slime/issues/1910)

**4. 关键 PR 进展**
*   **推理后端升级**：[#2228](https://github.com/THUDM/slime/pull/2228) 升级 sglang 至 `v0.5.15.post1`。保持 Rollout 引擎与上游最新特性同步，修复潜在推理 Bug。
*   **异构算力生态（MUSA）**：[#2216](https://github.com/THUIDM/slime/pull/2216) 新增 backend-aware MUSA（摩尔线程 GPU）支持，在保留原 CUDA 执行路径的基础上适配了 Megatron-LM 和 SGLang，拓展了 RL 框架的国产化硬件兼容性。
*   **通信与数据传输优化**：[#1709](https://github.com/THUDM/slime/pull/1709) 添加 Mooncake RDMA transport 用于 Rollout 数据传输，重点解决大规模 RL 训练中 Actor 与 Rollout 模型之间的通信瓶颈。
*   **低比特 RL 训练**：[#1505](https://github.com/THUDM/slime/pull/1505) 支持 nvfp4 格式的 RL 训练流程（WIP），旨在通过 FP4 量化进一步降低超大参数模型强化训练的显存开销。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **深入底层通信与显存优化**：从 Mooncake RDMA 传输整合到 nvfp4 低比特训练支持，项目正致力于攻坚大规模 RL 训练中最核心的显存墙与通信开销瓶颈。
*   **解耦且多元的算力支持**：主动接入 MUSA 架构，摆脱单一 GPU 硬件绑定，在国产算力替代趋势下具备先发优势。
*   **紧跟前沿推理与模型生态**：快速同步 SGLang 最新版本以提升 Rollout 效率，同时社区密切关注 DeepSeek V4 等前沿模型适配。slime 正在从单纯的算法层向全栈软硬件协同的强化学习基础设施演进。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-07-23 RL 日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，AReaL 仓库共有 **4** 条 Issue 更新，**11** 条 PR 更新，无新版本发布。
- **核心动态**：昨日项目活动高度聚焦于**系统稳定性、安全漏洞修复及大规模训练性能优化**。值得注意的是，针对推理服务 Data Proxy 的 SSRF 漏洞已快速修复，同时社区针对跨 Tokenizer 蒸馏、Megatron 显存优化及 Qwen3.6 GRPO 训练等核心特性提交了高质量代码。

### 2. 版本发布
- **最新 Releases**：无

### 3. 重点 Issues
- **[[bug] FSDP packed SFT 传递了字典类型的 attention mask 给 Llama 模型](https://github.com/inclusionAI/AReaL/issues/1557)** (#1557)
  - **摘要**：报告了在使用 FSDP 进行 packed SFT 时，系统错误地将字典格式的 attention mask 传递给了 Llama 模型导致 Bug。该问题稳定复现，目前已有对应的修复 PR 提交。
- **[Unauthenticated register_model 在 data proxy 中引发 SSRF 风险](https://github.com/inclusionAI/AReaL/issues/1549)** (#1549, CLOSED)
  - **摘要**：安全研究人员指出推理服务 Data Proxy 的 `/register_model` 端点存在未授权访问缺陷（CWE-918），可被恶意利用引发服务端请求伪造（SSRF）。该问题已在最新代码中通过强制鉴权修复。
- **[[Feature/RFC] 面向自我演化智能体的证据驱动记忆服务](https://github.com/inclusionAI/AReaL/issues/1490)** (#1490)
  - **摘要**：针对 2026 H2 路线图，社区成员提交了关于构建“自我演化智能体记忆服务”的 RFC。该提案保持向后兼容，旨在为 RL Agent 提供长短期记忆与证据溯源能力。
- **[[Feature] 多教师模型蒸馏支持](https://github.com/inclusionAI/AReaL/issues/1399)** (#1399, CLOSED)
  - **摘要**：探讨了在现有 On-policy Reverse KL 基础上扩展多教师模型蒸馏的特性需求。

### 4. 关键 PR 进展
- **[修复 FSDP 原生 packed attention masks 问题](https://github.com/inclusionAI/AReaL/pull/1558)** (#1558)
  - **摘要**：修复 Issue #1557。移除了硬编码的模型族白名单和逐层 attention mask 字典，现改为传递 `None`，让 Transformers 模型根据重置的 position IDs 自动构建后端特定的 mask。
- **[安全修复：Data Proxy 强制要求 admin key 以防范 SSRF](https://github.com/inclusionAI/AReaL/pull/1550)** (#1550, CLOSED)
  - **摘要**：修复 Issue #1549。为 `/register_model` 端点强制引入 Admin API Key 验证，防止恶意节点注册任意上游 URL。配套的测试用例更新已在 PR #1556 中合并。
- **[性能优化：降低 Megatron 训练显存峰值](https://github.com/inclusionAI/AReaL/pull/1555)** (#1555)
  - **摘要**：融合了 FP32 vocab-parallel logprob 存储与 LM Head 反向传播，引入了分块（chunked）损失计算工作流，有效降低了分布式优化器的显存占用峰值。
- **[特性：原生 R3 router replay 支持](https://github.com/inclusionAI/AReaL/pull/1496)** (#1496)
  - **摘要**：为 SGLang rollout 配合 Megatron MoE actor 训练引入原生 R3 支持。该机制记录并验证 rollout 阶段的 MoE 专家选择路径，将其注入 Megatron 训练，确保 RL 训练中路由策略的一致性。
- **[修复：在后恢复阶段的首次更新前预热 NCCL communicators](https://github.com/inclusionAI/AReaL/pull/1548)** (#1548)
  - **摘要**：解决故障恢复重启后，首个 `ppo_update` 步骤中因 NCCL 懒加载传输缓冲区导致峰值显存时的 OOM 问题。改为在设备低占用时提前预热通信器。
- **[特性：支持跨 Tokenizer 的 On-policy 蒸馏](https://github.com/inclusionAI/AReaL/pull/1452)** (#1452)
  - **摘要**：打破模型生态壁垒，支持在 LLaMA -> Qwen、DeepSeek -> Qwen 等不同模型族或系列之间进行 On-policy 强化学习蒸馏。
- **[特性：新增 Qwen3.6 LoRA GRPO 训练支持](https://github.com/inclusionAI/AReaL/pull/1444)** (#1444)
  - **摘要**：使得 AReaL 能够基于 SGLang 后端和 FSDP，对 Qwen3.6 的 27B Dense 和 35B-A3B MoE 模型进行 LoRA GRPO 训练。
- **[修复：限制 MathVerifyWorker 验证挂起的挂钟时间](https://github.com/inclusionAI/AReaL/pull/1426)** (#1426)
  - **摘要**：重构了数学奖励验证的 Timeout 逻辑，将原先基于线程池的超时机制替换为更可靠的进程级超时控制，防止解析/比对过程挂死阻塞 RL 训练流水线。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻坚超大 MoE 模型的 RL 训练痛点**：通过 #1496（R3 Router Replay）和 #1555（Megatron 显存优化），AReaL 正在实质性地解决混合专家模型在强化学习对齐中固有的“路由不一致”和“显存墙”问题。
2. **基础设施的极致鲁棒性**：AReaL 对工程细节的把控极强。从修复 NCCL 后恢复 OOM (#1548)、切断奖励验证的无限期挂起 (#1426)，到修复推理与 PPO 训练间的采样证据校验 (#1554)，它正在打造工业级、高容错的 RL 训练流水线。
3. **紧跟前沿模型与算法范式**：不仅快速适配了 Qwen3.6 极受关注的 35B-A3B MoE 模型的 LoRA GRPO 训练 (#1444)，还在探索跨 Tokenizer 蒸馏 (#1452) 和自我演化 Agent 记忆机制 (#1490)。AReaL 正从单一的 RL 训练框架，进化为综合 Distillation、RLHF 与 Agent 能力的全能底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 🤖 HuggingFace TRL 强化学习生态日报 (2026-07-23)

> 数据统计窗口：过去 24 小时 | Issues 更新: 13 条 | PR 更新: 39 条

## 1. 今日速览
今日 TRL 仓库无新版本发布，但核心代码库迎来了高强度的底层重构与功能迭代。最显著的变化是 **`DistillationTrainer`（模型蒸馏）迎来了一揽子重构计划**，正稳步向 Stable API 迈进；同时，**异步强化学习 (`AsyncGRPOTrainer`) 及多模态 RL** 的多项关键 Bug 修复和性能监控增强相继合并。

## 2. 版本发布
**无** （近期暂无正式版或补丁版发布，代码库处于高频迭代期）。

## 3. 重点 Issues
今日讨论度最高的问题集中在 GRPO 训练机制、多模态支持以及 KL 散度估算的底层逻辑上：

- **异步 GRPO 多模态阻断修复**：#6028 [OPEN](https://github.com/huggingface/trl/issues/6028) 指出 `AsyncGRPOTrainer` 在训练视觉语言模型（`*ForConditionalGeneration`）时存在权重同步 Key 不匹配的问题。
- **蒸馏核心重构提议**：#6449 [OPEN](https://github.com/huggingface/trl/issues/6449) 官方开发者提出重构 `DistillationTrainer` 并将其升级为稳定 API，以适配近期 Qwen3.x、DeepSeek-V4 等主流模型的 On-policy 蒸馏需求。
- **引入更精确的 KL 估算器**：#4967 [OPEN](https://github.com/huggingface/trl/issues/4967) 建议为 GRPO 引入无偏的 "K1-in-Reward" KL 估算器，以替代现有的 K3 估算器，从而解决方差过大问题。
- **GRPO 显存优化探讨**：#3549 [OPEN](https://github.com/huggingface/trl/issues/3549) 提出在 GRPO 同代多轮生成中引入 Sequence Packing，通过共享 Prefix 极大压缩显存开销。
- **SFT 训练异常**：#3910 [OPEN](https://github.com/huggingface/trl/issues/3910) 报告在 v0.20.0+ 版本中，设置 `max_length` 导致训练 Loss 停滞的回归 Bug。

## 4. 关键 PR 进展
今日共有 39 个 PR 更新，以下为核心代码变动的详细进展：

### 🟢 蒸馏重构进度
作为 Issue #6449 的落地，开发者 @qgallouedec 连续提交并合并了多个重构 PR，目前正严格执行 **添加 -> 切换 -> 删除** 的重构策略：
- [#6497](https://github.com/huggingface/trl/pull/6497) **[OPEN]**：将 Loss 底层重构为基于 GRPO 的 Keys（`prompt_ids`, `completion_ids` 等）计算。
- [#6508](https://github.com/huggingface/trl/pull/6508) **[OPEN]**：将 `ServerDistillationTrainer` 冻结为独立模块，防止重构波及服务端。
- [#6500](https://github.com/huggingface/trl/pull/6500) **[CLOSED]**：移除 Distillation 测试中有关 `messages` 格式的废弃警告。

### 🔵 异步与强化学习训练改进
- [#6300](https://github.com/huggingface/trl/pull/6300) **[OPEN]**：修复 `GRPOTrainer` 搭配 vLLM 训练多模态模型（VLM）时的图像 Token 扩展 Bug。
- [#6491](https://github.com/huggingface/trl/pull/6491) **[OPEN]**：新增 Rollout 轨迹记录功能，将完整的 Prompt/Completion 及 Reward 写入 trackio，大幅增强 RL 可观测性。
- [#6264](https://github.com/huggingface/trl/pull/6264) **[OPEN]**：将 `max_completion_length` 默认值从 256 提升至 512，避免复杂推理任务被悄悄截断。
- [#6489](https://github.com/huggingface/trl/pull/6489) **[CLOSED]**：修复 `AsyncGRPOTrainer` 队列等待时间指标计算偏差的问题。

### 🟡 CI 与代码健壮性优化
- [#6507](https://github.com/huggingface/trl/pull/6507) **[OPEN]**：修复 DPO/KTO 训练器中进度条无视 `TQDM_DISABLE` 环境变量的问题。
- [#6295](https://github.com/huggingface/trl/pull/6295) **[OPEN]**：修复单卡模式下模型加载路径无视 `use_cpu=True` 的设备映射 Bug。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
通过今日的代码脉搏可以看出，TRL 正在全面碾压同类框架，确立其在 LLM 时代的绝对统治力：
1. **紧跟 SOTA 算法迭代**：不仅支持常规的 PPO/DPO，更在积极引入前沿论文中的无偏 KL 估算（K1 Estimator），紧跟学术界最新进展。
2. **死磕异步与多模态 RL 痛点**：异步 GRPO (`AsyncGRPOTrainer`) 的深度打磨和针对多模态（VLM）在 vLLM 生成下的 Token 对齐修复，直击当前大模型实际生产环境中最大的痛点。
3. **向高质量工程架构进化**：近期针对模型蒸馏的大规模系统性重构，以及 Rollout 轨迹追踪系统的加入，证明 TRL 正在从早期的“API 聚合器”蜕变为高性能、高可观测、工业级的 RL 训练基座。

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

以下是为您生成的 verl 项目 2026-07-23 RL 日报摘要：

# verl 强化学习日报 (2026-07-23)

## 1. 今日速览
过去 24 小时内，verl 生态维持高度活跃，共更新 **48 条 Issues** 和 **24 条 PRs**，无新版本 Release 发布。从提交记录来看，当前项目的核心发力点集中在**底层分布式训练性能优化**（如权重同步加速、通信域挂起）、**新硬件后端适配**（华为昇腾 NPU、Blackwell GPU）以及对**多模态与 MoE 模型**（Qwen3-VL、Gemma-4 等）的工程化支持。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
社区今日讨论热度高涨，多模态训练踩坑与底层算力调度是主要痛点：

*   **[Qwen3-VL MoE 训练指南分享]** ([#3906](https://github.com/volcengine/verl/issues/3906)) - **热门**
    社区开发者总结了使用 Qwen3-VL MoE 模型的成功训练经验与推荐的官方 Docker 基础镜像配置，获得了较多关注。
*   **[Gemma-4 Megatron 后端训练报错]** ([#6613](https://github.com/volcengine/verl/issues/6613))
    开发者反馈在 verl 0.8.0 环境下使用 Megatron 后端训练 Gemma-4-31B 模型时遇到底层算子报错，需关注兼容性。
*   **[gpt-oss-20B 训练参数相关性异常]** ([#3894](https://github.com/volcengine/verl/issues/3894))
    训练 gpt-oss-20B 时出现极高的 `pearson_corr`（约 0.5），严重偏离常规阈值（0.005），疑似推理与训练参数对齐存在 Bug。
*   **[Blackwell B200 GPU 适配问题]** ([#3973](https://github.com/volcengine/verl/issues/3973))
    开发者报告现有 Docker 镜像在 B200 服务器上运行报错（H200 正常），呼吁提供专门针对 Blackwell 架构的镜像。
*   **[昇腾 NPU 训练 OOM 与多机报错]** ([#3909](https://github.com/volcengine/verl/issues/3909), [#3947](https://github.com/volcengine/verl/issues/3947), [#3992](https://github.com/volcengine/verl/issues/3992))
    大量 Issue 反馈在昇腾 NPU 环境下进行多机多卡训练或运行 DAPO 配方时，遇到协议冲突、内存泄漏与通信算子不支持等工程落地挑战。
*   **[RFC] 探索拓扑搜索与自动并行优化]** ([#3999](https://github.com/volcengine/verl/issues/3999))
    有开发者提议联合搜索 DP/TP/PP/EP 等混合并行维度与设备拓扑，以进一步降低 RL 端到端训练时延，这是一个极具价值的架构优化方向。

## 4. 关键 PR 进展
今日的 PR 展现了 verl 在高性能计算（HPC）与工程实现上的深度迭代：

*   **[性能优化] 基于 Mooncake RDMA 的 P2P 权重同步** ([#7108](https://github.com/volcengine/verl/pull/7108))
    引入全新的 `p2p` checkpoint engine，允许 Megatron 训练节点通过 RDMA 直接将权重推送到 SGLang 推理引擎，彻底绕过 NCCL 构建过程，极大加速 Trainer-to-Rollout 的权重更新阶段。
*   **[性能优化] Muon 优化器支持** ([#7120](https://github.com/volcengine/verl/pull/7120), [#7119](https://github.com/volcengine/verl/pull/7119))
    为 verl 原生 Megatron 后端接入了 Megatron-Core 的 `TensorParallelMuon` 优化器，打破了以往仅支持 AdamW 的局限，顺应了大模型新兴优化器的发展趋势。
*   **[性能优化] 延迟梯度同步** ([#7095](https://github.com/volcengine/verl/pull/7095))
    优化了 FSDP 梯度累加机制。过去每个 micro-batch 都会触发一次 reduce-scatter，该 PR 将其延迟至最后一个 micro-batch 执行，显著降低了 PPO 训练步骤中的通信开销。
*   **[架构特性] KV-cache 感知的负载均衡器** ([#7115](https://github.com/volcengine/verl/pull/7115))
    为 rollout 服务引入基于 KV-cache 命中率和实时负载指标的请求路由器，提升大规模并发采样时的推理吞吐量。
*   **[硬件适配] 昇腾 NPU MoE 通信状态修复** ([#7086](https://github.com/volcengine/verl/pull/7086))
    修复了昇腾 NPU 在开启 Expert Parallel (EP>1) 并从 L2 sleep 唤醒后，MoE 通信状态未刷新导致的推理精度异常问题。
*   **[工程修复] FSDP 检查点 LoRA/PEFT 保存修复** ([#7117](https://github.com/volcengine/verl/pull/7117))
    修复了在开启 `trust_remote_code` 时，FSDP 模式下保存检查点会错误保存 PeftModel wrapper 而非 base model 的 Bug。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **突破 RLHF 系统瓶颈：** verl 正在死磕 PPO 训练范式中最耗时的“权重更新”环节（如 Mooncake RDMA P2P 直推、NCCL 挂起/恢复 API 的接入），这种将分布式训练与在线推理引擎（SGLang/vLLM）深度解耦并极致压榨硬件的工程，是降低 RL 算法迭代周期的核心关键。
2. **多元化算力生态建设：** 在英伟达算力紧缺的当下，verl 保持着对 Blackwell 架构与华为昇腾 NPU 极其快速的前沿适配（包括 NPU 的 MoE 并行、特定精度修复等），为业界提供了多算力底座的 RL 解决方案。
3. **紧跟前沿模型范式：** 针对 MoE（如 Qwen3-VL MoE、Gemma-4）训练出现的各种工程痛点，社区正在快速响应。结合对 Muon 等新兴优化器的支持，verl 确保了开发者能够在第一时间验证最新 Base Model 的对齐与强化学习效果。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune 强化学习生态日报 (2026-07-23)

## 1. 今日速览
过去 24 小时内，torchtune 仓库动态趋于平缓。无新增 Issues，无新版本发布，仅有 1 条关键架构级 PR 更新。当前项目核心精力似乎集中在底层基础架构的重构与早期 RFC（意见征集）的推进上。

## 2. 版本发布
*   **无新版本发布**。近期无正式版或 Beta 版更新。

## 3. 重点 Issues
*   **无新增或更新的 Issues**。过去 24 小时社区未发起新的技术讨论或 Bug 反馈。

## 4. 关键 PR 进展
*   **PR #2785 [OPEN] [RFC] Iterable Dataset**
    *   **作者**: felipemello1
    *   **更新时间**: 2026-07-22
    *   **核心内容**: 提出 Iterable Dataset（可迭代数据集）的架构支持，直击当前 torchtune 数据管道的痛点：
        1.  **内存瓶颈**: 当前 Map-style 数据集必须全量载入内存。
        2.  **效率限制**: Map-style 数据加载速度较慢，且对多样本操作（如 Packing 或 Skipping）控制力不足。
        3.  **流式学习缺失**: 引入对数据流式加载和加权数据集的支持。
    *   **分析**: 对于 RL 而言，引入 Iterable Dataset 意味着未来可以更好地支持海量 Off-policy 数据的流式处理及经验回放池的高效管理。
    *   **链接**: [meta-pytorch/torchtune PR #2785](https://github.com/pytorch/torchtune/pull/2785)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 torchtune 日常以 SFT/微调著称，但其底层数据架构的演进对 RL 生态（特别是 RLHF/PPO 阶段）至关重要：
*   **数据管道重构**：PR #2785 中的 Iterable Dataset RFC 是一个重要信号。在 RL 训练中，模型需要频繁与环境交互产生海量数据，传统全量载入内存的 Map-style 数据集无法满足 RL 的流式采样需求。torchtune 补齐这一短板，将为未来原生支持大规模 RLHF 流水线扫清障碍。
*   **底层算力与显存优化**：结合 PyTorch 生态，torchtune 对分布式训练和底层显存优化的深度支持，使其在未来承接计算图复杂、显存压力极大的强化学习训练任务时，具备极高的工程落地价值。持续关注其基础架构 RFC，可以提前预判 PyTorch 官方在 LLM 训练栈上的演进方向。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报（2026-07-23）**

**1. 今日速览**
过去 24 小时内，Open Instruct 仓库无新增 Issue、无新版本发布，但有多达 4 个关键的底层架构与工程化 PR 更新。项目当前的重心明显集中在**新一代硬件（B300）适配**、**CUDA 13 环境平滑迁移**以及**训练框架的精细化控制**上，为下一代大模型的后训练与强化学习任务做基础设施准备。

**2. 版本发布**
*   **无新版本发布**。

**3. 重点 Issues**
*   **无活跃 Issue**。过去 24 小时无新增或更新的 Issue，社区未反馈阻塞性问题（Bug/Feature Request），项目处于相对稳定的基础设施迭代期。

**4. 关键 PR 进展**
今日的 4 个 PR 完整勾勒出了项目近期的工程演进路线（硬件适配 -> 镜像构建 -> 训练框架控制）：

*   **[CLOSED] 升级至 CUDA 13.0 以支持 B300 硬件**
    *   **链接:** [allenai/open-instruct PR #1758](https://github.com/allenai/open-instruct/pull/1758)
    *   **摘要:** 引入对 `ai2/holmes` 集群中 NVIDIA B300 芯片的支持。通过环境变量（`CUDA_VERSION=12/13`）实现底层 Docker base 的可选择性，确保在不破坏旧有 CUDA 12 集群兼容性的前提下，无缝接入 CUDA 13.0.3 环境。
*   **[OPEN] 自动发布 CUDA 13 Beaker 镜像**
    *   **链接:** [allenai/open-instruct PR #1783](https://github.com/allenai/open-instruct/pull/1783)
    *   **摘要:** 承接 #1758 的硬件适配工作。将原有的自动构建镜像拆分为 `open_instruct_auto_cuda12` 与 `open_instruct_auto_cuda13`，使用独立的 BuildKit 缓存，并在合并队列测试通过后触发专属的 CUDA 13 构建流水线。
*   **[CLOSED] 统一 SFT, DPO, GRPO 的 `max_checkpoints` 逻辑**
    *   **链接:** [allenai/open-instruct PR #1701](https://github.com/allenai/open-instruct/pull/1701)
    *   **摘要:** 由知名大牛 TimDettmers 提交。将 `keep_last_n_checkpoints`（默认值 3）深度整合进 OLMo-core 的全量训练链路（SFT、DPO 以及强化学习核心 GRPO）。将 `-1`（无限制）的约定集中在回调组件内部处理，大幅优化了 RL 训练中长期存在的磁盘 I/O 与存储管理痛点。
*   **[OPEN] 检查 main 分支与 Tmax 分支的代码冲突**
    *   **链接:** [allenai/open-instruct PR #1741](https://github.com/allenai/open-instruct/pull/1741)
    *   **摘要:** 常规的分支同步与冲突检查，确保实验性功能分支能够顺利向主分支合并。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
作为 AI2（Allen Institute for AI）的核心开源项目，Open Instruct 今天的更新虽然偏向底层工程，但对 RL 生态具有极高的信号价值：
*   **前瞻性的算力基础设施适配：** 伴随着大模型参数规模与 RLHF/PPO 阶段算力消耗的激增，Open Instruct 已经率先跑通了 CUDA 13 与下一代 B300 硬件的兼容闭环，证明该项目始终保持在 HPC（高性能计算）的第一梯队。
*   **面向 RLHF 痛点的工程优化：** PR #1701 针对 DPO 和 GRPO 路径的 Checkpoint 统一管理，直击强化学习训练中因高频保存模型导致的存储爆炸问题，展现了极高的工业级可用性。
*   **开放可复现的训练生态：** 无论是新版自动镜像发布流水线的建立，还是与 OLMo-core 核心的深度绑定，都表明项目正在降低前沿大模型训练技术（如 GRPO）的复现门槛，是目前 RL 社区中极其硬核且可靠的基础设施。

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

**RL 日报：Gymnasium 生态追踪 (2026-07-23)**

**1. 今日速览**
过去 24 小时内，Gymnasium 仓库整体活动度较低。无新增代码提交（PR）或版本发布，仅有 1 条历史 Issue 产生了新的讨论更新。项目当前处于稳定维护期。

**2. 版本发布**
*   **无新版本发布**。当前官方推荐使用最新稳定版（V1.0+ 系列），API 保持稳定。

**3. 重点 Issues**
*   **[Proposal] 为 `AsyncVectorEnv` 增加并发进程数限制功能**
    *   **编号:** [#1641](https://github.com/Farama-Foundation/Gymnasium/issues/1641)
    *   **状态:** [OPEN] | 👍: 0 | 评论: 2
    *   **更新动态:** 近日（07-22）有新的评论交互。
    *   **技术摘要:** 作者 `gkoundry` 提议在 `AsyncVectorEnv` 中增加限制同一时刻最大执行环境数量的参数。
    *   **痛点分析:** 在使用 MuJoCo 等物理引擎进行大规模机器人策略评估和指标收集时，全量并发开启大量环境会导致系统资源（CPU/内存）瞬间过载甚至崩溃。通过限制最大并发进程数（类似于线程池或分批执行机制），可以在不修改上层逻辑的前提下，实现计算资源的平稳调度。这是一个高度契合大规模 RL 评测痛点的实用需求。

**4. 关键 PR 进展**
*   **无活跃 PR**。过去 24 小时内无新增、合并或关闭的 Pull Request。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **底层基座地位：** Gymnasium（原 OpenAI Gym）依然是当前 RL 社区最核心的单一智能体环境接口标准。无论是 Stable-Baselines3、CleanRL 还是 Tianshou 等主流算法库，均以其 API 为底层标准。
*   **工程实践细节的打磨：** 即使在 API 稳定期，类似 Issue #1641 中针对 `VectorEnv` 并发资源管理的讨论，直接反映了业界在大规模 RL 评测中遇到的真实现实工程瓶颈。关注 Gymnasium 的 Issue 动态，能够帮助开发者及时规避多进程环境交互中的内存泄漏和资源抢占问题，并掌握环境封装的最新最佳实践。

---
*数据来源: GitHub (Farama-Foundation/Gymnasium) | 统计截止: 2026-07-23*

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-07-23 强化学习（RL）开源生态日报摘要：PettingZoo 项目专版。

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库共监测到 6 项动态（1 条 Issue 更新，5 条 PR 更新），无新版本发布。今日活动高度聚焦于**底层环境的渲染重构与物理引擎修复**，核心维护者与贡献者集中处理了历史遗留的视觉表现和碰撞检测问题。

### 2. 版本发布
- **无新版本发布**（0 Release）。

### 3. 重点 Issues
- **[#1379](https://github.com/Farama-Foundation/PettingZoo/issues/1379) [CLOSED] Hanabi Rendering**
  Hanabi（花火）环境此前仅支持基于文本的输出。维护者 jkterry1 此前专门委托像素画师制作了全套卡面素材，并呼吁社区提交 PR 以引入图形渲染。该 Issue 已于昨日关闭，标志着这一视觉化升级的需求已通过代码实现并合并。

### 4. 关键 PR 进展
今日的 PR 动态体现了社区对环境细节打磨的深度：

- **[#1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380) [CLOSED] Add pygame rendering to Hanabi**
  *技术亮点*：直接响应 Issue #1379。通过解析底层 OpenSpiel 的状态字符串（`str(game_state)`），提取卡牌信息，并使用定制的像素风素材实现了基于 Pygame 的图形渲染，彻底移除了原先的控制台/`ansi` 文本输出。
  
- **[#1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398) [OPEN] Fix cooperative_pong ball bounce physics (v7)**
  *技术亮点*：修复了 `cooperative_pong` 环境中长期存在的碰撞穿透与物理抖动 Bug。原算法在处理碰撞时直接将球吸附到碰撞表面，丢失了球当帧已运动的距离。该 PR 重构了碰撞解析算法，提升了多智能体物理交互的精确度。

- **[#1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399) [OPEN] pursuit: render agents as squares instead of circles**
  *技术亮点*：修复视觉回归问题。将 Pursuit 环境中的智能体（追捕者与逃跑者）由圆形还原为略小于网格的实心方形，恢复了其在移植到 Pygame 引擎之前的经典视觉风格。

- **[#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393) [OPEN] Add configurable center obstacle size to Pursuit**
  *技术亮点*：增强了 Pursuit 环境的 API 可配置性。引入 `center_box_size=(width, height)` 参数，允许研究人员自定义中央障碍物的尺寸（设置为 `(0,0)` 可生成无障碍物地图），为不同复杂度的多智能体算法测试提供了灵活性。

- **[#1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306) [CLOSED] Add `RecordVideo` wrappers**
  *技术亮点*：从 Gymnasium 直接移植了 `RecordVideo` 环境包装器。填补了 PettingZoo 在多智能体环境下缺乏原生录像工具的空白，使得研究人员无需依赖 SB3 或 TorchRL 等上游框架即可直接输出 MARL 智能体的行为可视化视频。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **Farama 基金会的标准基石**：作为 Gymnasium 在多智能体强化学习（MARL）领域的官方“姐妹项目”，PettingZoo 的 API 标准（AEC 与 Parallel 模式）依然是当前绝大多数 MARL 算法库适配的底层基准。
2. **底层引擎的持续现代化**：从今日的 PR 活动可以看出，项目正在系统性地摒弃陈旧的文本/简易渲染，全面整合 Pygame 并提升物理引擎精度。这种对“环境保真度”的严苛打磨，对当前 RL 生态中基于视觉的 MARL 算法评估至关重要。
3. **生态互通性增强**：原生 `RecordVideo` 包装器的引入和对 OpenSpiel（如 Hanabi）底层数据的无缝解析，展现了 PettingZoo 正在降低 MARL 领域不同工具栈（如 RL 训练框架、博弈论引擎）之间的摩擦成本。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>