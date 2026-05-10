# RL 开源生态日报 2026-05-11

> 生成时间: 2026-05-10 22:12 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出显著的“两极分化”与“层级清晰”的演进态势：
1. **大模型对齐重塑 RL 形态**：以 LLM 为核心的 Post-training 框架已成为当前 RL 生态的绝对重心与前沿阵地。
2. **经典 RL 进入平稳基建期**：传统单/多智能体算法库（如 SB3, Tianshou, PettingZoo）已跨越功能迭代的高峰期，当前主要聚焦于长期维护、安全合规（如全站 HTTPS 升级）及 API 标准化守护。

## 各项目活跃度对比
今日有显著动态的项目集中在大模型训练与底层通信优化上，其余监测项目均处于静默或低活跃维护状态。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 3 | 9 | 0 | 面向复杂应用的底层 RL 基础设施，主攻异构算力与极致分布式吞吐 |
| **AReaL** | 0 | 6 | 0 | 攻坚超大规模 RLHF 工程瓶颈（显存、通信与推理解耦） |
| **TRL** | 1 | 5 | 0 | 完善训练链路细节（如 SFT Loss Mask、工具调用模板）与底层稳定性 |
| **slime** | 0 | 2 | 0 | 死磕超大规模分布式 RL 中的显存与通信痛点 |
| **PettingZoo** | 1 | 0 | 0 | 清理遗留环境，准备向新一代底层标准过渡 |
| **SB3** | 0 | 1 | 0 | 处于成熟期，集中处理全局安全合规与文档优化 |
| **Tianshou** | 0 | 1 | 0 | 处于稳定维护期，跟进基建安全标准 |
| *其他项目* | *0* | *0* | *0* | *过去 24 小时无公开活动* |

*(注：CleanRL, Gymnasium, OpenRLHF 等本期无活动)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agent 与多模态的深度 RL 闭环**：研究重心正从单一的文本生成转移至多轮工具调用、多模态生成（verl-omni）的 RLH 对齐，要求框架具备复杂的会话级轨迹控制能力。
2. **训练后阶段的细粒度控制**：仅对特定标记计算 Loss（TRL 的 generation markers）以及基于人类/工具反馈的序列知识蒸馏（GOLD 算法）成为提升模型能力上限的关键研究点。

**工程/基础设施侧信号：**
1. **显存与通信墙的极限突破**：超大词汇表的 Logits 显存爆炸（AReaL 引入 Fused LCE）、序列并行的通信开销（verl 和 slime 的切分/分块 All-Reduce）是当前工业级大模型 RL 训练最大的工程拦路虎。
2. **计算与推理解耦成为标配**：大规模 Rollout 迫切需要 Prefill-Decode 分离部署（verl 结合 NIXL）、投机解码（AReaL 引入 Eagle）以及轻量级增量权重同步（AReaL 的磁盘级 LoRA 同步），以打破训练与推理之间的吞吐剪刀差。

## 差异化定位分析
1. **verl vs AReaL/slime（全场景广度 vs 超大规模深度）**：`verl` 正在向通用的 AI 基础设施演进，兼顾多模态、Agent 循环与国产异构算力（昇腾 NPU）适配；而 `AReaL` 和 `slime` 则更偏向于“暴力美学”，死磕 Megatron/Ray 等超大集群下的分布式显存与通信极限优化。
2. **TRL（算法与应用层生态）**：作为 HuggingFace 生态的核心拼图，`TRL` 不必过度关注底层集群调度，而是专注于提供最全、最易用的前沿对齐算法（DPO/PPO/GKD）和高度包容的数据处理模板。
3. **经典 RL 阵营（SB3/Tianshou/PettingZoo）**：彻底退出大模型算力军备竞赛，锚定学术界基准测试、传统控制论与多智能体基础 API 定义，以“开箱即用、极高稳定性”构建护城河。

## 社区热度与成熟度
1. **大模型 RL 社区处于高并发攻坚期**：`verl`、`AReaL` 的 PR 往往涉及底层内核重写或系统级架构重构，社区讨论与代码提交的技术门槛极高，属于典型的工程密集型活跃。
2. **传统 RL 框架尽显成熟姿态**：`SB3` 和 `Tianshou` 出现了疑似由自动化工具生成的全局 HTTPS 替换 PR。这不仅是项目进入高度成熟期的标志，也说明此类项目的核心 API 已经十分稳固，社区转入长尾治理状态。
3. **安全意识全面提升**：无论是 `AReaL` 修复公网部署下的默认 Admin Key 授权风险，还是传统框架的协议升级，均表明 RL 开源项目正在加速向高可用的工业级安全生产标准演进。

## 值得关注的趋势信号
1. **推理架构重塑训练链路**：Prefill/Decode 分离架构（PD 解耦）、投机解码等纯推理侧的技术，正在全面反哺并重塑 RLHF 的 Rollout 环节架构，推理引擎与训练引擎的边界日益模糊。
2. **算力异构化不可逆转**：针对特定非 GPU 算力（如昇腾 NPU）的底层量化算子（MXFP8）原生适配成为头部 RL 框架的必修课，多硬件生态的高可用方案将成为开源项目后续竞争的壁垒。
3. **多模态/Agent RL 架构的独立化**：随着工程复杂度呈指数级上升，将多模态或特定的 Agent RL 架构从主框架中解耦并作为独立项目演进（如 verl-project/verl-omni），将成为处理系统技术债务、加速垂直迭代的行业通用做法。

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

# slime RL 日报摘要 (2026-05-11)

## 1. 今日速览
过去 24 小时内，[THUDM/slime](https://github.com/THUDM/slime) 仓库整体较为平稳，无新版本发布且无新增 Issues。项目焦点集中在底层训练框架的性能优化与奖励对齐的代码修复上，共合并/更新了 2 个关键 Pull Requests，显示出项目在处理超大规模分布式强化学习训练（尤其是与 Megatron 框架结合）时的持续迭代。

## 2. 版本发布
**无**。近 24 小时内未发布新的 Release 版本。

## 3. 重点 Issues
**无**。近 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 动态主要围绕分布式训练的显存/通信优化以及 RL 奖励机制的对齐展开：

*   **#1900 [OPEN] 修复：将正确样本的奖励与 DP-local 长度对齐**
    *   **作者**: miamia0
    *   **链接**: [THUDM/slime PR #1900](https://github.com/THUDM/slime/pull/1900)
    *   **分析**: 该 PR 旨在修复 RL 训练过程中 reward 计算与 `Data Parallel (DP)` 局部样本长度不匹配的问题。这种对齐修复对于防止梯度计算时的形状错乱及确保 PPO 等算法中优势函数计算的准确性至关重要。
    *   **摘要**: `fix: align correct-sample rewards with DP-local lengths`

*   **#1899 [OPEN] 补丁：将 Megatron TP 梯度合并修改为分块 All-Reduce**
    *   **作者**: jingshenghang
    *   **链接**: [THUDM/slime PR #1899](https://github.com/THUDM/slime/pull/1899)
    *   **分析**: 这是一项重要的底层性能优化。原实现中，`_allreduce_non_tensor_model_parallel_grads` 会将 TP（Tensor Parallelism）侧的所有梯度展平为一个大 Buffer 进行通信，容易导致显存峰值（OOM）。该 PR 将其 Patch 为具有大小限制的 Chunks（分块）进行通信，能有效抹平显存使用尖峰，提升大规模 LLM 强化学习的训练稳定性。
    *   **摘要**: Patch `megatron.core` 相关接口，使用有界分块All-Reduce替代单一巨型Buffer，降低 TP 端梯度同步的显存开销。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在大语言模型（LLM）迈入 Post-training（尤其是 RLHF/PPO 阶段）的当下，RL 训练框架的瓶颈已从单纯的算力转移到**多维分布式并行（DP/TP/PP）与极长序列的显存管理**上。
slime 项目的近期动态（如上述对 Megatron TP 通信层的深度 Patch 和 DP 样本对齐机制）表明，**它正在深入底层解决超大规模 RL 训练中的通信和显存痛点**。对于需要基于 Megatron-deepspeed 等工业级架构进行大模型 RL 对齐的研发团队而言，slime 提供了极具参考价值的工程实现与性能优化范式。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-05-11）：

---

### 1. 今日速览
过去 24 小时内，AReaL 仓库无新版本发布，无新增或更新的 Issues。社区及内部开发者的主要精力集中在**底层训练优化**、**推理引擎增强**以及**系统安全修复**上，共有 6 个 Pull Requests 产生更新（其中 5 个处于 OPEN 状态，1 个已关闭）。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无新增或更新的 Issues**。

### 4. 关键 PR 进展
今日的 PR 动态充分展现了 AReaL 在大规模 RLHF 系统的工程深度，主要涵盖性能优化、异构同步和安全性修复：

- **[#1323](https://github.com/inclusionAI/AReaL/pull/1323) [OPEN] 修复非本地回环地址下的默认 Admin API Key 风险**
  - **作者**: sebastiondev
  - **摘要**: 这是一个关键的安全修复。原代理服务在未重写默认 `areal-admin-key` 时仅抛出 warning。该 PR 强制 proxy rollout server 在绑定到非回环地址时拒绝使用默认 admin API key，防止在公网暴露环境下的未授权访问。

- **[#1322](https://github.com/inclusionAI/AReaL/pull/1322) [OPEN] 支持融合线性交叉熵内核**
  - **作者**: TaoZex
  - **摘要**: 核心性能优化。为 Megatron 训练引擎引入 Triton 实现的 Fused LCE 前向/反向传播。该机制避免了在内存中实例化完整的 `[tokens, vocab]` logits 张量，极大降低显存峰值并提升计算效率。

- **[#1305](https://github.com/inclusionAI/AReaL/pull/1305) [OPEN] 集成 Ray RDT 实现权重同步**
  - **作者**: KaisennHu
  - **摘要**: 基础设施增强。引入了基于 Ray Direct Transport (RDT) 的权重同步后端，修改了 IW Scheduler Bridge 的分片选择逻辑及 TW Adapter 中 FSDP 权重元数据的提取方式，旨在加速 RLHF 中 Actor/Critic 的权重传输。

- **[#1233](https://github.com/inclusionAI/AReaL/pull/1233) [OPEN] 支持 FSDP 与 SGLang 的磁盘级 LoRA 增量权重同步**
  - **作者**: TaoZex
  - **摘要**: 训练-推理协同优化。实现了基于磁盘的 LoRA 适配器同步机制。当开启 `use_lora=True` 时，FSDP 将仅保存 PEFT 权重而非完整的 HuggingFace 模型，显著降低存储开销并加速与 SGLang 推理后端的权重流转。

- **[#1176](https://github.com/inclusionAI/AReaL/pull/1176) [OPEN] 支持基于 SGLang Eagle 算法的投机解码**
  - **作者**: TaoZex
  - **摘要**: 推理加速探索（WIP）。引入 Sglang Eagle 算法以支持投机解码，这对于加速 RL 训练过程中的 Rollout 生成阶段具有极高价值。

- **[#1321](https://github.com/inclusionAI/AReaL/pull/1321) [CLOSED] 统一推理服务会话生命周期的 Group 语义**
  - **作者**: garrett4wade
  - **摘要**: 重构推理服务层，为 Session 引入统一的 "group" 语义。使得 Task 可以运行 `group_size` 次重复轨迹并批量导出，且消除了 `group_size==1` 和 `group_size>1` 之间的代码分支，简化了系统复杂度。

### 5. 为什么这个项目值得在当前 RL 生态继续关注

从近期的代码提交可以看出，AReaL 正在解决大语言模型强化学习（RL/RLHF）落地中最核心的几个工程瓶颈：
1. **突破显存与通信墙**：通过引入 Triton Fused 内核（PR [#1322](https://github.com/inclusionAI/AReaL/pull/1322)）以规避庞大 logits 显存分配，结合探索 Ray RDT 高速通信（PR [#1305](https://github.com/inclusionAI/AReaL/pull/1305)），AReaL 正在为超大规模词汇表模型的 RL 训练铺平道路。
2. **极致的训练-推理解耦与加速**：系统不仅支持 FSDP 训练与 SGLang 推理框架的无缝对接，还在深耕磁盘级 LoRA 增量更新（PR [#1233](https://github.com/inclusionAI/AReaL/pull/1233)）和投机解码（PR [#1176](https://github.com/inclusionAI/AReaL/pull/1176)），这对于需要高频迭代权重的 RL 环境至关重要。
3. **企业级工程标准**：社区开始关注并修补生产环境部署的安全漏洞（如默认 API key 校验 PR [#1323](https://github.com/inclusionAI/AReaL/pull/1323)），标志着该项目正从实验性框架向高可用的工业级 RL 基础设施演进。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 RL 日报摘要（2026-05-11）：

### 1. 今日速览
- **Issues 更新**：1 条
- **PR 更新**：5 条（2 条已关闭，3 条进行中）
- **新版本发布**：0 个

### 2. 版本发布
无新版本发布。近 24 小时核心开发活动主要集中在模板功能增强、底层数据加载逻辑修复以及分布式测试覆盖率的提升上。

### 3. 重点 Issues
- **[#5460] [OPEN] Tracking: tool calling support across chat templates**
  - **作者**: qgallouedec
  - **摘要**: 追踪跨聊天模板的端到端工具调用支持。该 Issue 旨在确保模板能够无误差地渲染完整的工具调用对话流（`user → assistant with tool_calls → tool → ...`）。这是 LLM Agent 训练生态在强化学习/SFT 阶段的基础能力痛点。
  - **链接**: [huggingface/trl#5460](https://github.com/huggingface/trl/issues/5460)

### 4. 关键 PR 进展

**✅ 已合并/关闭**
- **[#4693] fix: invalidate ZeRO-3 param coordinator trace in add_hooks**
  - **作者**: roycho96
  - **摘要**: 修复了使用 `GKDTrainer` 结合 DeepSpeed ZeRO-3 时，在第二步训练中出现的 `IndexError: pop from an empty deque` 错误。底层涉及参数协调器的追踪失效问题。
  - **链接**: [huggingface/trl#4693](https://github.com/huggingface/trl/pull/4693)
- **[#5730] fix: CUDA memory leak / release BNB dequantization buffers & stale state in OffloadActivations**
  - **作者**: butterwecksolutions
  - **摘要**: 修复了严重的 CUDA 显存泄漏问题。清理了在 `OffloadActivations` 状态下，Bitsandbytes (BNB) 反量化缓冲区及过期状态所占用的显存，对大模型长上下文训练至关重要。
  - **链接**: [huggingface/trl#5730](https://github.com/huggingface/trl/pull/5730)

**🚧 进行中**
- **[#5746] feat: add Phi-3.5 training chat templates with generation markers**
  - **作者**: DagaBhai
  - **摘要**: 为 Phi-3.5 添加带有 `&#123;&#37; generation &#37;&#125; / &#123;&#37; endgeneration &#37;&#125;` 标记的训练兼容聊天模板。该特性旨在支持 `return_assistant_tokens_mask=True`，从而在 SFT 训练中实现**仅对助手输出计算损失**，提高训练效率与准确性。
  - **链接**: [huggingface/trl#5746](https://github.com/huggingface/trl/pull/5746)
- **[#5725] [gold] Implement seq_kd in GOLDTrainer**
  - **作者**: roycho96
  - **摘要**: 在 `GOLDTrainer` 中补全了序列知识蒸馏 (`seq_kd`) 的实际执行逻辑。此前该参数仅作为配置存在但未被 trainer 调用。本 PR 将缓冲区数据划分为 on-policy、seq_kd 和 off-policy 三个互斥组。
  - **链接**: [huggingface/trl#5725](https://github.com/huggingface/trl/pull/5725)
- **[#5736] Add DDP-2 members to invariant test suite**
  - **作者**: qgallouedec
  - **摘要**: 扩展了不变量测试套件，新增了 2-GPU DDP 环境下的 SFT 和 DPO 等价类测试，进一步保障了分布式训练算法的数学与逻辑一致性。
  - **链接**: [huggingface/trl#5736](https://github.com/huggingface/trl/pull/5736)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
当前的提交动态清晰地反映了 TRL 在 LLM 训练链路中的两个核心发力点，使其在 RL 开源生态中保持极高的不可替代性：
1. **对齐底层基础设施的持续打磨**：修复 ZeRO-3 崩溃缺陷（#4693）和 BNB 显存泄漏（#5730），表明项目正在积极解决大参数量模型在 RLHF/DPO 阶段最棘手的分布式训练和显存管理瓶颈。
2. **向后训练阶段的深度演进**：从强化 Agent 能力的 Tool-calling 追踪（#5460），到精细化控制 SFT Loss Mask 的 generation markers（#5746），再到 GOLD 算法中知识蒸馏逻辑的完善（#5725）。TRL 正在提供更细粒度的训练控制，从基础的“能用”向高度定制化的“好用”迈进。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# 强化学习 (RL) 开源生态日报：Tianshou
**日期**: 2026-05-11 | **分析对象**: [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

---

### 1. 今日速览
过去 24 小时内，Tianshou 仓库整体活动趋于平稳。无新增 Issues 或版本发布，仅有 1 项文档安全相关的 PR 提交。项目当前处于稳定维护期，社区注意力集中在代码规范与文档基础设施的安全加固上。

### 2. 版本发布
**无新版本发布**。核心 API 及算法库保持稳定。

### 3. 重点 Issues
**过去 24 小时无新增或更新的 Issues**。从数据来看，项目目前没有暴露出新的算法缺陷或使用阻碍，用户反馈闭环保持良好。

### 4. 关键 PR 进展
本期仅有 1 项 PR 更新，主要涉及安全合规与链接标准化：

*   **[#1300 fix: update HTTP URLs to HTTPS in README and docs](https://github.com/thu-ml/tianshou/pull/1300)**
    *   **作者**: dashitongzhi | **状态**: `[OPEN]` | **创建/更新**: 2026-05-10
    *   **技术摘要**: 该 PR 对项目的 `README` 及 Sphinx 文档进行了安全合规升级。将所有支持 HTTPS 的不安全 HTTP 链接（涵盖 ReadTheDocs、Gymnasium 仓库、JMLR、TSAIL、Ray 文档及论文引用等）统一替换为 HTTPS 协议。
    *   **生态意义**: 这类 PR 通常是为了响应 GitHub 的安全倡议（防止中间人攻击或流量劫持），提升开源项目文档的基础安全性，是仓库进入成熟维护期的标志性常规操作。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管目前 Tianshou 处于平稳维护阶段，但它依然是当前 RL 生态中不可或缺的基础设施，其长期价值体现在：

1.  **极高的算法复现性与模块化设计**: Tianshou 提供了高度解耦的 API（如 `Collector`, `ReplayBuffer`, `Policy`），基于 PyTorch 实现，其清晰的代码结构使其成为学术界验证新算法和工业界快速原型的首选工具之一。
2.  **标准的生态对接**: 随着生态演进，Tianshou 紧跟标准（如从 OpenAI Gym 到 Gymnasium 的迁移，以及对 Ray 的支持），确保了其与其他开源框架的兼容性。
3.  **降低从研究到落地的门槛**: 提供了极其丰富的 Benchmark 结果和开箱即用的训练脚本，研究人员可以超越简单的“玩具环境”，直接在复杂的高维连续控制或多智能体场景（如 SMAC、Mujoco）中测试前沿算法（如 PPO, SAC, MARL 系列算法）。

---
*注：本报告基于 2026-05-11 00:00 前的 GitHub 追踪数据自动生成分析。*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 | 2026-05-11

## 1. 今日速览
过去 24 小时内，verl 项目保持活跃，共处理了 **3 条 Issues** 和 **9 条 Pull Requests**，无新版本发布。整体动态集中在**推理引擎解耦部署、多模态架构演进、底层算力适配与分布式训练通信优化**等核心技术攻坚上。

## 2. 版本发布
无最新 Releases。

## 3. 重点 Issues
- **多模态生成 RL 架构迁移 (RFC)**：作者 @SamitHuang 更新了 2026 Q2 路线图，明确表示多模态生成 RL 支持已全面迁移至独立仓库 [verl-project/verl-omni](https://github.com/verl-project/verl-omni)，重点增强基于 vLLM-Omni 的跨请求批处理验证。
  🔗 [verl-project/verl Issue #5755](https://github.com/verl-project/verl/issues/5755)
  
- **全异步 Rollout 硬编码瓶颈探讨**：开发者 @BiboyQG 指出 `fully_async` 模式中单个 rollout server 最大并发样本数被硬编码为 16，质疑此设计可能限制高并发场景下的吞吐上限。
  🔗 [verl-project/verl Issue #6306](https://github.com/verl-project/verl/issues/6306)

## 4. 关键 PR 进展
- **【架构/推理】vLLM Prefill-Decode 解耦部署**：由 @aoshen02 提交，填补了 `vLLMPDReplica` 存根实现，支持通过 `rollout.name=vllm_pd, disaggregation.enabled=true` 将 GRPO rollout 路由至 1 个 Prefill 节点 + N 个 Decode 节点（底层基于 NIXL + Mooncake），极大提升推理吞吐弹性。
  🔗 [verl-project/verl PR #6243](https://github.com/verl-project/verl/pull/6243)

- **【训练/算法】REMAX 多轮 Agent Rollout 修复**：修复了异步 vLLM 支持下 REMAX 算法的实现缺陷。将原先分离的采样和贪心生成的两次 Rollout 请求合并为一次，解决了异步 Agent 循环中的竞态问题。
  🔗 [verl-project/verl PR #6308](https://github.com/verl-project/verl/pull/6308)

- **【模型/通信】Fused Kernels 下的 SP 序列并行修复**：修复了启用 `ulysses_sequence_parallel_size > 1` 时，fused-forward 函数错误地进行本地 Re-roll 操作的问题，确保序列并行（SP）切分后的数据一致性。
  🔗 [verl-project/verl PR #6268](https://github.com/verl-project/verl/pull/6268)

- **【Agent】ToolAgent 边界截断修复**：精确修复了多轮 Tool Agent 循环中，当 Tool 响应 Token 恰好填满剩余预算时引发的静默截断 Bug。
  🔗 [verl-project/verl PR #6309](https://github.com/verl-project/verl/pull/6309)

- **【训练优化】FSDP 长度感知分组**：针对不支持 Sequence Packing 的架构（如 Mamba/SSM），引入按长度分组的微批处理（`use_length_grouped_bsz`），以减少 Padding 带来的算力浪费。
  🔗 [verl-project/verl PR #5338](https://github.com/verl-project/verl/pull/5338)

- **【硬件适配】修复昇腾 NPU 的 MXFP8 支持**：针对国产算力进行优化，使用全量化 API `torch_npu.npu_dynamic_mx_quant` 替换小算子，并修复 `weight_scale` 未更新的问题。
  🔗 [verl-project/verl PR #6307](https://github.com/verl-project/verl/pull/6307)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
verl 正在从单一的 LLM 训练框架，快速演进为面向复杂应用场景的**底层强化学习基础设施**，其技术演进路线呈现出极高的生态价值：
1. **突破推理吞吐瓶颈**：大力推进 vLLM/SGLang 的 Prefill-Decode 解耦部署，直接击中大规模 RL 训练中 Rollout 阶段的显存与计算吞吐痛点。
2. **深度拥抱 Agent 与多模态**：多模态架构独立为 `verl-omni` 演进，并在主库中持续深耕多轮工具调用、异步生成等 Agent 场景的 RLH 闭环。
3. **极致的异构算力挖掘**：不仅在 GPU 端深挖 Sequence Parallel 和 FSDP 显存优化，同时积极适配昇腾 NPU 等国产芯片的底层量化算子，提供了多硬件生态的高可用方案。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

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

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-05-11 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活动趋于平稳。无新版本发布，无新增或更新的 Pull Requests。有 1 条历史 Issue（#1250）发生状态更新并被关闭。项目当前处于典型的稳定维护期。

### 2. 版本发布
- **最新 Releases**：近 24 小时内无新版本发布。

### 3. 重点 Issues
- **Issue #1250** [[enhancement] [Feat] Pull MPE environments with notice (waiting on MPE2)](https://github.com/Farama-Foundation/PettingZoo/issues/1250)
  - **状态**：[CLOSED]（已于 2026-05-10 更新关闭）
  - **作者**：David-GERARD
  - **摘要**：该 Issue 提议在当前 PettingZoo 中移除多粒子环境（MPE），前提是需要等待下一代 MPE2 的发布并给出明确过渡通知。该 Issue 创建于 2024 年底，经过社区讨论后现已正式关闭。
  - **生态信号**：此 Issue 的关闭可能意味着 Farama 基金会对底层环境依赖的清理工作告一段落，或者关于 MPE 环境去留的技术路线已经明确了最终决策。

### 4. 关键 PR 进展
- **最新 Pull Requests**：过去 24 小时内无活跃或新增的 PR。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama 基金会旗下的核心项目，是当前多智能体强化学习（MARL）领域事实上的标准 API 规范（类似于单智能体领域 Gym/Gymnasium 的地位）。
1. **API 标准定义**：其 `ParallelEnv` 和 `AECEnv`（Action Execute Every agent turn）标准极大地降低了不同 MARL 算法与环境之间的适配成本。
2. **底层架构迭代**：从 Issue #1250 可以看出，项目正在积极进行底层环境的现代化汰换（如处理遗留的 MPE 并准备向 MPE2 过渡）。关注这些底层数据结构的变动，对于研究员和开发者及时适配最新的基准测试环境至关重要。
3. **生态兼容性**：作为纯 Python 库，它与 Gymnasium、Stable-Baselines3、Ray RLlib 等主流 RL 框架深度解耦且高度兼容，是验证多智能体算法鲁棒性的首选基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# Stable Baselines3 (SB3) RL 生态日报 - 2026-05-11

## 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库整体处于低活跃的维护状态。无新增 Issues，无新版本发布，仅有 1 条由社区提交的文档优化 PR。

## 2. 版本发布
**无**。
当前仓库未发布新的 Release 版本。

## 3. 重点 Issues
**无**。
过去 24 小时内未产生或更新任何 Issues。

## 4. 关键 PR 进展
今日唯一的动态为针对文档和代码库的全局网络安全修复。具体如下：

*   **[OPEN] fix: update HTTP URLs to HTTPS across docs and source files** 
    *   **作者**: dashitongzhi
    *   **摘要**: 该 PR 旨在将文档、代码注释（docstrings）以及 README 文件中不安全的 HTTP 链接全面升级为 HTTPS（前提是目标服务器支持）。主要涉及 StackOverflow、JMLR 论文、Sphinx 文档、相关课程与博客等外部引用链接的替换。
    *   **标签/备注**: [PR template not filled, LLM generated]（未严格填写 PR 模板，疑似 LLM 自动化生成提交）。
    *   **链接**: [DLR-RM/stable-baselines3 PR #2253](https://github.com/DLR-RM/stable-baselines3/pull/2253)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

尽管短期内代码库无重大功能性更新，但 SB3 在当前强化学习开源生态中依然具有不可替代的地位，原因如下：

1.  **强化学习的“基线”与试金石**：SB3 提供了高度标准化、经过严格测试的 RL 核心算法（如 PPO, SAC, TD3, DQN 等）。在学术界和工业界，它依然是评估新算法性能和复现论文结果的标准 Baseline 工具。
2.  **极致的稳定性与工程可靠性**：SB3 的核心 API 长期保持稳定，以极高的代码质量和详尽的文档著称。即便像今日这样仅有 HTTPS 链接优化的 PR，也反映了社区对代码库细节和历史技术债务的持续维护态度。
3.  **强大的工具链与扩展生态**：SB3 拥有极其丰富的伴生生态（如 `Stable-Baselines3[Extra]`、`sb3-contrib` 算法库以及 `RL Zoo`）。它完美兼容 Gymnasium 标准接口，允许研究人员和工程师开箱即用，将精力专注于环境建模和奖励函数设计，而非底层算法 Debug。

---
*数据来源：github.com/DLR-RM/stable-baselines3 | 分析周期：2026-05-10 至 2026-05-11*

</details>