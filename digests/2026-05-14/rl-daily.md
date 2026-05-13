# RL 开源生态日报 2026-05-14

> 生成时间: 2026-05-13 22:23 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“两极分化”与“核心聚焦”趋势。面向 LLM 后训练的基础框架正处于高度活跃的爆发期，各项目围绕多模态、MoE 架构的适配以及大规模分布式训练的底层性能展开了激烈角逐。相比之下，传统的经典 RL 算法库和通用环境接口步入高度成熟的稳定期，维持着代码健壮性而非高频的功能迭代。

## 各项目活跃度对比
过去 24 小时内有真实活动的项目如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 26 | 0 | 密集进行多硬件（Ascend/MLU）与 Fully Async 架构重构，发力系统底层吞吐。 |
| **TRL** | 2 | 11 | 0 | 核心聚焦于前沿 VLM（Gemma4/Qwen3-VL）的极速适配与 GRPO 核心算法的重构修复。 |
| **Open Instruct** | 0 | 10 | 0 | 探索 GRPO 难度课程学习，强化 vLLM 推理底层与系统级防呆/可观测性设计。 |
| **ROCK** | 5 | 6 | 0 | 深耕沙箱底层机制，构建录制/回放代理，攻克 Agent RL 环境的状态确定性问题。 |
| **AReaL** | 5 | 4 | 0 | 攻坚 RLHF 训练的跨节点权重同步瓶颈与推理引擎数据鲁棒性。 |
| **slime** | 1 | 4 | 0 | 针对 Agent 场景进行底层算子裁剪，引入高级部分权重同步与 Off-policy 算法验证。 |
| **ROLL** | 2 | 1 | 0 | 适配昇腾算力，暴露并解决大规模动态批处理与调度器不一致的核心工程问题。 |
| **OpenRLHF** | 1 | 1 | 0 | 稳步推进 VLM 多节点分布式训练排障与底层 DeepSpeed 调度策略的健壮性修复。 |
| **Gymnasium** | 1 | 2 | 0 | 日常维护，强化向量环境 API 的静态类型注解与第三方生态接入。 |

*注：CleanRL、PettingZoo、rl_games、Stable Baselines3、Tianshou、torchtune 等传统/通用 RL 项目过去 24 小时内无活跃动态。*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **对复杂 Agent 与多轮交互的适配**：生态重心正从单轮对话向 Agent RL 转移。研究焦点集中在工具调用带来的无效 Token 屏蔽计算（slime）、多轮轨迹的异步采样生成（verl），以及 Off-policy 采样偏差（TIS vs OIS）的底层逻辑验证。
2. **GRPO 算法的深度演进**：业界已不再满足于基础的 GRPO 实现，开始向难度课程学习（Open Instruct）、连续批处理与重要性采样的精准修复（TRL）等更为精细化的算法层面探索。

**工程与基础设施侧信号：**
1. **大规模集群的通信与显存墙攻坚**：权重同步成为核心战场。为了打破全量同步的瓶颈，各框架相继引入了独立 Logprob 服务器（verl）、增量与选择性权重同步（slime）、磁盘级 LoRA 桥接（AReaL）以及 Ray RDT 集成等高级通信机制。
2. **异构算力与国产芯片的全面争夺**：摆脱对单一算力平台的依赖成为共识。基于硬件平台抽象层的插件化重构（verl）、对寒武纪 MLU 和昇腾 NPU 的原生适配（verl, ROLL），表明大模型 RL 基座正加速向跨芯片生态演进。
3. **模型权重与推理的一致性排查**：针对主流推理引擎（vLLM/SGLM）的深度融合持续进行。社区正在密集修复长期被忽视的数据损坏、序列打包计算错误，以及严格对齐推理侧 logprobs 与训练时的数值一致性。

## 差异化定位分析
1. **全栈架构驱动型（verl, AReaL, ROLL, slime）**：以极致的吞吐量和大规模集群利用率为目标，定位为“生产级大模型 RL 基座”。重点发力分布式通信重构、异构算力适配和底层的算子/内存优化，适合千卡级别的工业级对齐训练。
2. **敏捷算法与生态集成型（TRL, OpenRLHF）**：紧密依托 HuggingFace 与 DeepSpeed 生态，定位为“前沿算法与模型的快速验证场”。主要优势在于对最新 VLM（如 Gemma4）的极速跟进与适配，以及提供开箱即用的高层 API。
3. **垂直场景与系统深水区型（ROCK, Open Instruct）**：ROCK 专注于解决 LLM 作为环境/裁判时的“状态确定性”，提供企业级沙箱与录制回放机制；Open Instruct 则在 GRPO 等算法的防呆设计与课程学习等硬核细节上提供极具参考价值的实验性探索。
4. **经典标准 API 型（Gymnasium）**：作为 RL 领域常青树，目前定位为维护环境的接口标准与健壮性，其稳步迭代的静态类型系统为上层复杂架构提供了可靠的基础约定。

## 社区热度与成熟度
从 GitHub 数据可见，以 verl（单日 36 项更新）和 TRL 为代表的项目，依靠解决高频的 VLM 适配和 RLHF 显存痛点，吸引了极高的社区参与度，已迈入高频迭代的成熟期。AReaL、slime 等项目虽然热度略逊，但提交的质量极重，核心贡献者正集中攻克大规模训练的深水区 Bug。ROCK、Open Instruct 则展现出极高的“自驱性”，由核心团队主导完成高架构跨度的重要特性。整体而言，LLM RL 框架的门槛已急剧拉高，跨分布式引擎与异构硬件的整合能力已成为衡量项目成熟度的新基准。

## 值得关注的趋势信号
1. **异步架构全面走向深水区**：从同步 PPO 走向完全异步 RL 架构正成为标配。verl 和 slime 的一系列 PR 表明，异步架构的焦点已从简单的串行转并行，深入到 Off-policy 偏差修正、独立推理服务器解耦等极致性能榨取阶段。
2. **面向工具调用/Agent RL 的专属底层优化**：针对 Agent 交互中格式崩溃（Qwen3.x）和高占比的无效系统 Token，未来的 RL 框架将内置更多基于 Loss Mask 的 Logits 裁剪与底层融合算子，以大幅削减无效算力开销。
3. **模型后训练进入“抠细节”与“防呆”时代**：面对大规模分布式训练极高的试错成本，框架正在引入大量前置验证与精细化监控。例如提前验证 HF 权重转换对齐、修复静默绕过的 logprobs、以及纠正不当参数导致的“零梯度”问题，高可观测性与防呆设计将成为框架的核心竞争力。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-14）：

### 1. 今日速览
过去 24 小时内，ROLL 项目无新版本发布，社区及研发动态主要聚焦于底层硬件生态适配与核心训练调度机制的缺陷排查。共产生 2 条 Issues 更新与 1 条 PR 更新。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **#442 [OPEN] Megatron Actor 训练中动态批处理与 LR Scheduler 状态不一致问题**
  - **分析**：开发者指出，在启用动态批处理时，Megatron actor 训练路径下的学习率调度器存在预算与实际消耗不匹配的隐患。目前调度器的预算计算依赖于静态批次语义（如 `rollout_batch_size`），这在变长序列或动态 batch 场景下可能会导致训练后期的 LR 衰减不准确。这是一个涉及底层训练精度的核心技术 Bug。
  - **链接**：[alibaba/ROLL Issue #442](https://github.com/alibaba/ROLL/issues/442)

- **#367 [OPEN] 🚀 ROLL 项目近期更新汇总**
  - **分析**：这是一篇长期维护的官方 Tracker 讨论帖。核心梳理了近期的重要架构演进，包括 Rollout 模块重构为由 Router 统一调度（并原生支持 `sglang-router`）、引入全新 On-Policy Distillation 训练管线，以及对 Qwen3.5 系列模型的底层支持。该帖昨日再次被激活，反映了社区对这些核心特性的持续集成与反馈。
  - **链接**：[alibaba/ROLL Issue #367](https://github.com/alibaba/ROLL/issues/367)

### 4. 关键 PR 进展
- **#441 [OPEN] 适配昇腾算力：fsdp2 与 vLLM 对 Qwen3-30B 模型的支持**
  - **分析**：该 PR 致力于将 ROLL 的 FSDP2 训练策略与 vLLM 推理引擎适配至 Ascend（NPU）硬件生态，并针对大参数量级（30B）的 Qwen3 模型进行了专项打通。这标志着 ROLL 正在从单纯的 GPU 生态向多硬件异构算力底座扩展，对于国内 RL 算力生态的自主可控具有重要意义。
  - **链接**：[alibaba/ROLL PR #441](https://github.com/alibaba/ROLL/pull/441)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前 RLHF 训练效率优化**：项目正在深化底层调度架构（如 Issue #367 提及的 Router 调度重构和 On-Policy Distillation），这对于突破当前 Post-training 阶段的算力墙与通信瓶颈至关重要。
2. **异构算力生态支持**：从 PR #441 可以看出，ROLL 正在积极推进对国产 NPU（Ascend）的适配与 vLLM 联调，为业界提供脱离单一 GPU 依赖的大规模 RL 训练基座。
3. **对前沿大模型与算法的极速响应**：项目保持了极高的架构弹性，不仅快速跟进了 Qwen3/Qwen3.5 等前沿基座模型，其暴露出的动态批处理问题（Issue #442）也侧面印证了该项目在生产级复杂 RL 场景中正在被深度使用和检验。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 项目 RL 生态日报 - 2026年05月14日

## 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库保持高活跃度，无新版本发布。社区共产生 **5 条 Issue 更新**与 **6 条 PR 更新**。当前开发重心高度聚焦于 **沙箱底层机制的健壮性** 与 **LLM 请求的录制/回放能力建设**。

---

## 2. 版本发布
无（最新 Releases 为空）

---

## 3. 重点 Issues
当前共有 1 个新开 Issue，4 个 Issue 顺利关闭，反映出核心开发进展迅速。

*   **[OPEN] 沙箱内代理集成提案**：[#937 [Feature] Integrate in-sandbox model-service proxy into Job layer for record/replay](https://github.com/alibaba/ROCK/issues/937)
    *   **要点**：建议在 `environment.proxy` 下新增可选的 `ProxyConfig`，在 Agent 代码运行前于沙箱内部启动 `rock model-service`。此举旨在接管通过 `OPENAI_BASE_URL` 发出的 LLM 请求，实现更精准的数据录制与回放。
*   **[CLOSED] 跨平台与架构优化**：
    *   [#921 [Feature] Refactor rocklet local sandbox into platform adapters for cross-platform extensibility](https://github.com/alibaba/ROCK/issues/921)：为支持跨平台（尤其是 Windows 兼容），重构 `rocklet` 本地沙箱架构。
    *   [#934 drop litellm, rebuild model-service proxy on httpx + openai SDK](https://github.com/alibaba/ROCK/issues/934)：提出剥离 litellm，基于 httpx + openai SDK 重建模型代理，修复流式输出等核心功能缺口。
*   **[CLOSED] 沙箱与部署调试**：
    *   [#932 [Bug] Kata DinD: loop disk mounted to wrong path when custom data-root is configured](https://github.com/alibaba/ROCK/issues/932)：修复 Kata DinD 环境下，自定义 `data-root` 导致循环磁盘挂载路径错误的问题。
    *   [#923 [Feature] add startup timing instrumentation for sandbox launch stages](https://github.com/alibaba/ROCK/issues/923)：提出为沙箱启动阶段增加耗时性能检测。

---

## 4. 关键 PR 进展
共合并/推进了 6 个 Pull Requests，底层执行引擎与沙箱稳定性得到显著提升。

*   **[OPEN] 录制/回放代理前置实现**：[#938 feat(job): integrate in-sandbox model-service proxy for record/replay](https://github.com/alibaba/ROCK/pull/938)
    *   **进展**：配合 Issue #937，实现通过 `PythonRuntimeEnv` 在沙箱初始化阶段部署代理，并在结束后清理环境变量。
*   **[CLOSED] 核心能力升级**：
    *   [#935 feat(model-service): proxy supports stream + replay, byte passthrough, ForwardBackend/ReplayBackend](https://github.com/alibaba/ROCK/pull/935)
        *   **进展**：**核心合并**。移除旧有实现，全面支持流式输出、字节级透传，并引入干净的 `ForwardBackend/ReplayBackend` 抽象，为 RL 环境的 LLM 交互提供底层支持。
    *   [#922 feat(rocklet): add Windows PowerShell support #921](https://github.com/alibaba/ROCK/pull/922)
        *   **进展**：**核心合并**。引入 `PowerShellSession` 驱动，完成本地沙箱跨平台重构，打通 Windows 生态。
*   **[CLOSED] 沙箱与性能修复**：
    *   [#924 feat: add startup timing instrumentation for sandbox launch stages](https://github.com/alibaba/ROCK/pull/924)：引入 `StageTimer` 上下文管理器，提供启动耗时的性能埋点。
    *   [#933 fix(rocklet): mount loop disk to docker data-root instead of hardcode…](https://github.com/alibaba/ROCK/pull/933)：修复硬编码挂载路径，支持 Docker 自定义 `data-root`。
*   **[OPEN] Nix 兼容性修复**：[#936 fix(rocklet): symlink mount into /bin for nix images with kata runtime](https://github.com/alibaba/ROCK/pull/936)
    *   **进展**：针对 Nix 镜像中 `mount` 命令不在标准 PATH 的问题，通过软链接进行修复，提升 Kata 运行时的镜像兼容性。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **攻克 RL 环境的“状态确定性”难题**：LLM 作为环境/奖励模型参与 RL 训练时，其 API 的不确定性一直是痛点。ROCK 正在构建基于沙箱层面的 HTTP 代理与录制/回放机制（Issue #937, PR #935），这将极大提升 RL 实验的可复现性。
2.  **深水区的基础设施优化**：项目正在深入底层解决性能与兼容性问题（例如 Kata 运行时的 Docker 挂载、Nix 系统支持、沙箱启动耗时追踪）。这表明 ROCK 正在从“可用”向“企业级高性能和高可靠”演进。
3.  **打破操作系统的生态边界**：对 Windows PowerShell 的原生支持（PR #922）打破了类 Unix 系统的局限，意味着更广泛的本地开发者和个人 RL 研究者能够无门槛接入。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是 slime (THUDM/slime) 项目 2026-05-14 的强化学习（RL）日报摘要。

### 1. 今日速览
过去 24 小时内，slime 仓库共处理/更新 **4 条 Pull Requests** 和 **1 条 Issue**，无新版本发布。当前项目核心开发焦点集中在**异步训练流程的体验对齐与性能优化**，以及**底层通信机制（部分权重同步）的重构**。整体生态呈现出向复杂 Agent 场景适配的趋势。

### 2. 版本发布
无。距离上一版本发布暂无更新。

### 3. 重点 Issues
- **[#1907](https://github.com/THUDM/slime/issues/1907) [Question] 异步训练中 OIS 与 TIS 数值一致的异常探讨**
  - **作者**: sneng1997
  - **摘要**: 用户在使用 Slime v0.2.4 对 Qwen3.5-4B 进行异步训练（`update weight step = 2`）并启用 TIS (Token-level Importance Sampling) 时，发现 OIS (Outcome-level Importance Sampling) 与 TIS 的评估指标在数值上完全相等。该问题直指异步 RL 训练中 Off-policy 采样偏差的底层逻辑，值得框架开发者和深度使用者关注其是否属于预期行为或潜在 Bug。

### 4. 关键 PR 进展
- **[#1905](https://github.com/THUDM/slime/pull/1905) [feat] 基于损失掩码的 Logits 过滤优化**
  - **作者**: Taosheng-ty
  - **摘要**: 引入针对多轮 Agent 场景的强效优化。在执行高耗时的 vocab-parallel softmax 之前，仅提取并计算 `loss_mask == 1` 对应位置的 logits。在工具调用占比高达 ~97% 的 Agent 生成场景中，该特性可大幅削减熵和对数概率的无效计算量。
- **[#1906](https://github.com/THUDM/slime/pull/1906) [fix] 补齐异步训练流程的初始评估逻辑**
  - **作者**: Taosheng-ty
  - **摘要**: 修复了 `train_async.py` 缺失基线指标评估的问题。在首个 `generate.remote()` 调用前，加入了与同步训练脚本 `train.py` 完全一致的预评估逻辑，确保了异步训练与同步训练在实验指标对比上的严格对齐。
- **[#1806](https://github.com/THUDM/slime/pull/1806) [feat] Megatron 架构下的部分权重同步（Delta + Selective）**
  - **作者**: nanjiangwill
  - **摘要**: 针对非共置部署场景提出的高级同步机制。该 PR 改变了全量权重广播的方式，通过 NCCL 仅同步发生变化的参数。支持两种运行时模式：Selective（仅广播非 NaN 的变化参数）与 Delta（增量同步），此优化将极大减少大模型 RLHF 训练中的通信显存开销和带宽瓶颈。
- **[#1591](https://github.com/THUDM/slime/pull/1591) [Feature] 模块化实验追踪接口与 MLflow 后端支持**
  - **作者**: mouad-hpc
  - **摘要**: 抽象并引入了 `TrackingBackend` 与 `TrackingManager`，实现了日志后端（Wandb/Tensorboard/MLflow）的可插拔设计。替换了原有硬编码的条件分支，增强了 RL 训练全链路实验管理的灵活性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 正在解决大语言模型在 RL 阶段（尤其是复杂多轮对话和 Agent 场景）的几个核心痛点：
1. **大集群通信开销**：PR #1806 的部分权重同步机制直指 LLM RL 训练中的 NCCL 通信瓶颈，这对于千卡规模以上的 Mega-scale 强化学习至关重要。
2. **针对 Agent RL 的算力榨取**：PR #1905 专门针对工具调用等无效 Token 占比高的特征进行底层计算裁剪，这是目前开源 RL 框架中较少深入优化的工程细节。
3. **严格的算法对齐与检验**：Issue #1907 暴露出社区正在将该框架应用于极深度的算法验证（TIS vs OIS 采样偏差），证明其不仅是工程轮子，更在支撑前沿的 RL 算法研究。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-05-14 RL 日报摘要：

# AReaL RL 开源生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时，AReaL 生态共处理了 **5 条 Issues**（2 个新建/关闭，3 个活跃跟进）和 **4 条 PRs**（1 个合并，3 个活跃开发）。社区当前聚焦于**底层系统的稳定性**（如 vLLM 推理桥接、工具调用异常处理）与**大规模训练的通信与显存优化**（如 Ray RDT 集成、磁盘级 LoRA 权重同步）。今日无新版本发布。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
今日的 Issue 集中在特定模型适配、代码鲁棒性及工程化测试层面：

- **[#1334] [BUG] 配置解析异常：`'dict' object has no attribute 'seed'`** (新建)
  - **摘要**: 用户在使用 Camel 配置时触发属性错误，暴露出配置加载模块在处理嵌套字典与对象映射时的健壮性不足。
  - **链接**: [areal-project/AReaL Issue #1334](https://github.com/inclusionAI/AReaL/issues/1334)

- **[#1222] [BUG] vLLM 推理桥接存在严重数据损坏风险** (已关闭)
  - **摘要**: 修复了 `VLLMBridgeBackend` 中两个高危 Bug：在 abort/resubmit 请求时，会静默丢弃 chat/vision 请求的累积 token 并篡改 `ModelRequest`，该问题对多模态及复杔回合制 RL 环境影响极大。
  - **链接**: [areal-project/AReaL Issue #1222](https://github.com/inclusionAI/AReaL/issues/1222)

- **[#1317] [BUG] Megatron 后端适配 Qwen3.5 报错** (活跃)
  - **摘要**: 组合使用 Areal 1.04、megatron-core 0.17 及 mbridge 0.15.1 进行 Qwen3.5 训练时，引发与 MTP (Multi-Token Prediction) 参数相关的模型加载/初始化错误。
  - **链接**: [areal-project/AReaL Issue #1317](https://github.com/inclusionAI/AReaL/issues/1317)

- **[#1284] [Feature] 引入 Nightly 实验用于性能验证** (活跃)
  - **摘要**: 提议针对外部贡献者建立基于 GCP 临时实例的 Nightly CI 测试机制，以保证核心 API 的后向兼容性与模型训练性能基线。
  - **链接**: [areal-project/AReaL Issue #1284](https://github.com/inclusionAI/AReaL/issues/1284)

---

## 4. 关键 PR 进展
系统底层架构与训练引擎优化是近期 PR 的主要方向：

- **[#1233] feat：支持 FSDP 与 SGLang 的磁盘级 LoRA 增量权重同步** (活跃)
  - **摘要**: 实现了基于磁盘的 LoRA 适配器同步机制。修复了 FSDP 在 PEFT 场景下保存完整 HF 模型导致的冗余，大幅降低多卡/多节点 RL 训练中 Actor-Inference 间的权重同步通信开销。
  - **链接**: [areal-project/AReaL PR #1233](https://github.com/inclusionAI/AReaL/pull/1233)

- **[#1305] feat(experimental)：集成 Ray RDT 实现权重同步** (活跃)
  - **摘要**: 引入 Ray Direct Transport (RDT) 作为新的权重同步后端。涉及 IW Scheduler 桥接的 Shard 选择、Ray RPC 权重拉取，以及 FSDP 权重元数据提取，是对现有高速网络通信架构的重要补充。
  - **链接**: [areal-project/AReaL PR #1305](https://github.com/inclusionAI/AReaL/pull/1305)

- **[#1332] fix：修复 Python 工具错误处理机制** (已关闭)
  - **摘要**: 修正了 `PythonTool.execute()` 在发生代码异常（如 `ZeroDivisionError`）时始终返回 SUCCESS 的严重逻辑缺陷。这直接解决了因 Agent 代码错误导致 `AsyncTaskRunner` 崩溃的级联故障。
  - **链接**: [areal-project/AReaL PR #1332](https://github.com/inclusionAI/AReaL/pull/1332)

- **[#1328] refactor：整合 Admin API Key 验证逻辑** (已关闭)
  - **摘要**: 将散落在各 HTTP 服务（如 proxy_rollout_server）中的 Admin Key 验证逻辑重构为统一的 `validate_admin_api_key` 工具函数，提升了推理/rollout 基础设施的安全性与代码可维护性。
  - **链接**: [areal-project/AReaL PR #1328](https://github.com/inclusionAI/AReaL/pull/1328)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **攻坚 RLHF/RL 训练核心瓶颈**：AReaL 正在解决大模型强化学习（如 GRPO 算法）中最棘手的系统工程问题。从 PR #1233 和 #1305 可以看出，项目在 **跨节点模型权重同步（Weight Syncing）** 和 **显存/通信优化** 上进行了深度投入，这是提升 RL 训练吞吐量的关键。
2. **极致的系统鲁棒性设计**：强化学习过程本身具有高度的不确定性，AReaL 社区近期集中修复了推理引擎 abort 时的 token 丢失（Issue #1222）和 Tool call 导致的异步崩溃（PR #1332），展现了其对训练数据“零丢失”和“零崩溃”的工业级要求。
3. **广泛的后端生态兼容性**：项目在积极适配主流且前沿的基础设施，包括无缝对接 `Megatron` (Issue #1317)、`vLLM`、`SGLang` 以及 `Ray`，致力于打造一个可插拔、高性能的通用 RL 训练底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 RL 日报摘要（2026-05-14）：

### 1. 今日速览
在过去 24 小时内，TRL 仓库共处理了 **2 条 Issues** 和 **11 条 Pull Requests**（其中 1 条关闭，10 条开启），无新版本发布。
整体动向呈现两个核心特征：一是**密集修复 CI/CD 流程中的内存溢出（OOM）及兼容性报错**；二是社区在**底层训练机制优化**（如 DeepSpeed ZeRO-3 权重同步、GRPO连续批处理、SFT掩码与加权机制）上持续贡献高质量代码。

---

### 2. 版本发布
无新版本发布。

---

### 3. 重点 Issues
- **[CI 故障] CUDA OOM 频繁导致测试失败**：`albertvillanova` 报告在运行 SFT Trainer 的 VLM（视觉语言模型）测试时频繁出现显存溢出。
  链接: [huggingface/trl Issue #5750](https://github.com/huggingface/trl/issues/5750)
- **[功能需求] 加权 SFT (Weighted SFT)**：`RyanJFriedrich` 提议在 SFT 阶段引入 Token 级别的加权机制，以解决混合质量长文本训练中“所有 Assistant tokens 被同等对待”的痛点。
  链接: [huggingface/trl Issue #5761](https://github.com/huggingface/trl/issues/5761)

---

### 4. 关键 PR 进展
**A. CI 稳定性与兼容性修复 (Gemma4 & OOM)**
- **降低 VLM 测试 Batch Size**：通过将 GRPO/RLOO 训练器的 `per_device_train_batch_size` 从 3 降至 1，缓解测试时的显存压力。
  链接: [huggingface/trl PR #5767](https://github.com/trl.dev/undefined/huggingface/trl/pull/5767)
- **收缩 Gemma4 维度与图像 Token 预算**：修改 `tiny Gemma4` 的 `intermediate_size` 和图像 token 上限以规避 OOM。
  链接: [huggingface/trl PR #5760](https://github.com/trl.dev/undefined/huggingface/trl/pull/5760)
- **依赖版本与配置修复**：修复 Gemma4 所需的 `transformers` 最低版本至 5.5.0 ([PR #5763](https://github.com/huggingface/trl/pull/5763))；修复加载模型时 revision 哈希不一致的 Bug ([PR #5762](https://github.com/huggingface/trl/pull/5762))；解决 `GptOssConfig` 缺少 `num_experts` 属性导致的 AttributeError ([PR #5756](https://github.com/huggingface/trl/pull/5756))。

**B. 核心算法与训练机制优化**
- **DeepSpeed ZeRO-3 下更高效的 vLLM 权重同步**：针对 PEFT/LoRA 模型，优化了在 ZeRO-3 环境下向 vLLM 同步权重的显存占用，避免了此前的全量参数收集。
  链接: [huggingface/trl PR #5766](https://github.com/huggingface/trl/pull/5766)
- **重构 GRPO continuous batching 支持**：移除已废弃的 `use_transformers_paged`，全面接入原生 continuous batching，并修复了旧分支中 `logprobs=None` 导致重要性采样被静默绕过的严重缺陷。
  链接: [huggingface/trl PR #5765](https://github.com/huggingface/trl/pull/5765)
- **Qwen3-VL SFT 训练模板支持**：引入带有 `&#123;&#37; generation &#37;&#125;` 标记的 Qwen3-VL 模板，以确保在开启 `return_assistant_tokens_mask=True` 时生成正确的 Assistant 掩码。
  链接: [huggingface/trl PR #5764](https://github.com/huggingface/trl/pull/5764)

**C. 工程与文档更新**
- **新增 Trainer 遥测**：在基类 `_BaseTrainer.__init__` 中挂钩 HF 遥测，统一以匿名形式记录各 Trainer 的实例化事件。
  链接: [huggingface/trl PR #5758](https://github.com/huggingface/trl/pull/5758)
- **修复 GRPO 快速上手文档中的“静默零梯度”问题**：将 DeepMath-103K 数据集的默认 `max_completion_length` 提升至 1024。原设为 256 会导致模型无法输出完整的 `\boxed{...}`，从而造成 reward/loss/gradient 全为 0 的无效训练。
  链接: [huggingface/trl PR #5759](https://github.com/huggingface/trl/pull/5759)
- **[CLOSED] 启用 SFT 脚本的张量并行**：为 SFT 脚本引入 `tp_plan="auto"` 以支持 Accelerate 配置下的 TP。
  链接: [huggingface/trl PR #5331](https://github.com/huggingface/trl/pull/5331)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 目前在 LLM 后训练生态中正处于**从“算法验证工具”向“企业级高可用训练框架”演进**的关键时期，这从本次的 PR 动向可见一斑：
1. **解决 RLHF 实施中的工程硬骨头**：将 RL 算法（如 GRPO）与分布式引擎及推理框架（如 ZeRO-3 和 vLLM）进行深度融合时面临巨大的显存墙。TRL 正在积极解决混合引擎下的权重同步效率问题（如 PR #5766）。
2. **对前沿多模态模型的极速适配**：随着 Gemma4、Qwen3-VL 等复杂 VLM 架构的发布，TRL 在极短时间内完成 CI 适配与 SFT Mask 机制的对齐，保持了 Post-training 范式的模型覆盖率。
3. **对算法细节的严谨把控**：从修复 GRPO 采样中被静默吞噬的 `logprobs`（PR #5765），到纠正文档不当参数导致的“零梯度”无效训练（PR #5759），再到探索加权 SFT（Issue #5761），项目正深入到 Token-level 的奖励与损失计算细节中。这对于追求模型训练稳定性和精细化调优的 RL 团队而言，是不可替代的基础设施。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-05-14)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库活动保持平稳。无新版本发布，共有 1 条 Issue 更新和 1 条 PR 更新。当前社区焦点主要集中在 Ray 多节点训练的兼容性排查，以及 DeepSpeed 训练策略中学习率调度器的代码健壮性修复。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
- **#1236 [OPEN] ray error for multi-nodes training**
  - **作者**: RushDon
  - **概述**: 开发者在使用 `ray==2.55.0` 进行多节点训练时遇到报错。该问题复现于通过 `ray job submit` 启动 VLM 数学混合引擎训练脚本（`train_vlm_math_hybrid_engine.sh` 及 `openrlhf.cli.train_ppo_ray`）的场景中，涉及 Ray 版本兼容性与多节点部署配置。
  - **链接**: [OpenRLHF/OpenRLHF Issue #1236](https://github.com/OpenRLHF/OpenRLHF/issues/1236)

## 4. 关键 PR 进展
- **#1238 [OPEN] fix: only pass min_lr_rate to schedulers that accept it**
  - **作者**: matteolippi
  - **概述**: 修复了 `DeepspeedStrategy._ds_init_train_model` (位于 `openrlhf/utils/deepspeed/deepspeed.py`) 中的一个逻辑缺陷。先前的代码（引入于 PR #1221）会将 `min_lr_rate` 无差别地通过 `scheduler_specific_kwargs` 传递给所有的 `transformers.get_scheduler`，而实际上并非所有调度器都支持该参数。此 PR 增加了条件判断，确保仅将 `min_lr_rate` 传递给支持它的调度器，提升了底层代码的容错性与健壮性。
  - **链接**: [OpenRLHF/OpenRLHF PR #1238](https://github.com/OpenRLHF/OpenRLHF/pull/1238)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 持续表现出其在 LLM 对齐和 RLHF 工程化落地中的核心价值。从今日的动态可以看出：
1. **前沿工程探索的排头兵**：Issue #1236 表明社区正在积极推进 VLM（视觉语言模型）的 PPO 分布式训练，项目紧跟多模态 RL 训练的最前沿需求。
2. **底层基础设施的持续打磨**：PR #1238 体现了项目对 DeepSpeed 分布式训练底座和 Transformers 生态的深度整合与严谨把控，这种对学习率调度器等核心组件的精细化修复，是保障大规模 RL 训练稳定性的关键。对于需要构建高稳定、大规模对齐训练管线的研究者和工程师而言，OpenRLHF 依然是不可或缺的参考与生产级框架。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl 项目 RL 生态日报 - 2026年5月14日

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃，共处理 **10 条 Issues** 更新和 **26 条 PRs** 更新，无新版本发布。项目当前正处于多硬件生态适配（Ascend NPU、寒武纪 MLU）和 fully-async RL 流水线深度优化的高速迭代期。

---

## 2. 版本发布
今日无新版本发布。目前社区主要聚焦在主分支的稳定性修复及 0.8-dev 分支的功能研发。

---

## 3. 重点 Issues
今日的 Issue 集中在**特定模型（Qwen3.x）的训练稳定性**及**底层分布式训练机制**的边界情况。

*   **Agent RL 训练崩溃 (#6252)**：用户使用 Qwen3.5/3.6 35B-A3B 进行多轮工具调用 Agent RL 训练时，在 130/80 step 出现工具调用格式异常导致崩溃。社区正在积极跟进。
    *   链接: [verl-project/verl Issue #6252](https://github.com/volcengine/verl/issues/6252)
*   **Qwen3.5 SFT Loss 异常 (#6319)**：在进行 Qwen3.5 SFT 训练时遭遇 loss 持续为 NaN 的严重问题。
    *   链接: [verl-project/verl Issue #6319](https://github.com/volcengine/verl/issues/6319)
*   **FSDP 注意力掩码缺陷 (#6278)**：当 `use_remove_padding=False` 时，FSDP 模式下的 `attention_mask` 计算逻辑被指存在错误。
    *   链接: [verl-project/verl Issue #6278](https://github.com/volcengine/verl/issues/6278)
*   **Fully Async RL Logprobs 不一致 (#6240)**：开发者指出在完全异步 RL 架构中，Rollouter 输出的 logprobs 与 Trainer 消费的 logprobs 存在 processed 与 raw 的不一致问题。
    *   链接: [verl-project/verl Issue #6240](https://github.com/volcengine/verl/issues/6240)
*   **Qwen3-VL FSDP 多设备报错 (#4906)**：使用 FSDP 训练 Qwen3-VL-8B-Instruct 时，`pos_embed` 出现 CPU/CUDA Tensor 不匹配的报错，该长期 Issue 今日有了新的进展。
    *   链接: [verl-project/verl Issue #4906](https://github.com/volcengine/verl/issues/4906)

---

## 4. 关键 PR 进展
PR 动态展现了 verl 在**多硬件后端支持**、**完全异步架构**及**显存/内核优化**上的强力推进。

*   **多硬件与异构计算支持**
    *   **[MLU] 新增寒武纪 MLU 支持 (#6327)**：正式引入 Cambricon MLU 后端支持，扩展了国产算力生态。
    *   链接: [verl-project/verl PR #6327](https://github.com/volcengine/verl/pull/6327)
    *   **[Hardware] 平台抽象层与插件系统 (#6086)**：重构底层代码，引入统一的多芯片硬件平台抽象层，实现基于插件机制的引擎复写系统。
    *   链接: [verl-project/verl PR #6086](https://github.com/volcengine/verl/pull/6086)
    *   **[Ascend] NPU 支持 Liger-Kernel (#6244)**：在昇腾 NPU 上启用 Liger-Kernel 以提升训练性能，并提供 Qwen3-8B 示例。
    *   链接: [verl-project/verl PR #6244](https://github.com/volcengine/verl/pull/6244)

*   **Fully Async 流水线与异步架构**
    *   **[trainer, fully_async] Agent 循环支持多轨迹 (#6271)**：在完全异步流水线中，支持在单次 rollout 循环中输出多条轨迹，进一步提升异步采样效率。
    *   链接: [verl-project/verl PR #6271](https://github.com/volcengine/verl/pull/6271)
    *   **[fully_async] 独立 log prob 服务器 (#5990)**：解耦 actor 训练引擎的 `old_log_probs` 计算逻辑，引入独立的 Model Engine Server，避免权重的反复保存/恢复。
    *   链接: [verl-project/verl PR #5990](https://github.com/volcengine/verl/pull/5990)

*   **性能修复与大模型适配**
    *   **[vllm] ARM 架构支持 DeepEP (#6326)**：在 ARM64 稳定版镜像中启用 DeepEP，为 GB200 等 ARM 架构集群做好了准备。
    *   链接: [verl-project/verl PR #6326](https://github.com/volcengine/verl/pull/6326)
    *   **[fsdp, ckpt] 修复权重保存重复 (#6334)**：修复了 FSDP 模式下调用 HF `save_pretrained` 时因 `tied params`（如 embed_tokens 和 lm_head）未被正确去重而导致的模型保存问题。
    *   链接: [verl-project/verl PR #6334](https://github.com/volcengine/verl/pull/6334)
    *   **[model, fsdp] SP 融合内核修复 (#6268)**：修复了使用 `ulysses_sequence_parallel` 结合 `fused_kernels` 时 label 序列并行切片重新滚动导致的计算错误。
    *   链接: [verl-project/verl PR #6268](https://github.com/volcengine/verl/pull/6268)
    *   **[experimental] 绕过引擎内 MM 处理 (#6245)**：针对 Qwen 多模态模型，直接构建 vLLM `MultiModalInput`，绕过引擎内部的 MM processor 以提升吞吐。
    *   链接: [verl-project/verl PR #6245](https://github.com/volcengine/verl/pull/6245)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **突破 LLM RL 算法的系统瓶颈**：从完全独立 Logprob 服务器的解耦（PR #5990）到异步 Agent 循环（PR #6271），verl 正在系统架构层面对齐主流 LLM RLHF 的高吞吐需求，打破了传统同步 PPO 训练带来的显存与通信墙。
2.  **深度适配 MoE 与多模态前沿模型**：针对 Qwen3/3.5 MoE 架构（35B-A3B、30B-A3B）的特定崩溃和 Loss 异常（Issue #6252, #6319）的快速响应，以及针对多模态 VL 模型的显存/权重异常修复，表明 verl 正在紧跟大模型的前沿迭代。
3.  **构建统一的多硬件生态底座**：今日多个 PR 密集合并了针对寒武纪 MLU 的初版支持、昇腾 NPU 的高性能内核支持，以及全局统一的硬件平台抽象层。这意味着 verl 正试图摆脱单纯的 "NVIDIA + vLLM" 依赖，力图成为跨芯片算力的 RL 训练标准基座。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-05-14)

## 1. 今日速览
过去 24 小时， allenai/open-instruct 仓库无新增 Issue、无新版本发布，但 Pull Request 活动高度密集（更新 10 条）。整体动向聚焦于 **GRPO 算法的基础设施加固**（日志、导出检查、注意力掩码修复）与 **高级训练范式的引入**（难度课程学习、vLLM 深度适配、Loss 函数重构）。主要贡献者包括核心开发者 `finbarrtimbers`、`undfined` 和 `mnoukhov`。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日的 PR 更新主要分为三个技术方向：GRPO 训练核心优化、课程学习基础设施构建、以及工程健壮性提升。

### A. GRPO 训练核心与算法重构
- **[#1678] [CLOSED] Use processed vLLM logprobs for GRPO**
  - **链接**: [allenai/open-instruct PR #1678](https://github.com/allenai/open-instruct/pull/1678)
  - **摘要**: 将经过处理的 vLLM logprobs 引入 GRPO 的 rollout 评分阶段，使得采样 token 的 logprobs 能够包含 temperature 等采样变换的影响。将 logprobs 模式从数据加载器配置直接透传至 vLLM 引擎。
- **[#1679] [OPEN] Simplify Clipfrac**
  - **链接**: [allenai/open-instruct/pull/1679](https://github.com/allenai/open-instruct/pull/1679)
  - **摘要**: 修改 `compute_grpo_loss` 以直接输出 `clipfrac`。此重构不仅简化了代码，也为后续实现其他类 GRPO 算法的 Loss 函数铺平了道路。
- **[#1670] [OPEN] Pass doc_lens to OLMo-core in forward_for_logprobs**
  - **链接**: [allenai/open-instruct/pull/1670](https://github.com/allenai/open-instruct/pull/1670)
  - **摘要**: 修复 OLMo-core GRPO 中的文档内注意力机制问题。通过在 `forward_for_logprobs` 中注入 packed-sequence 的 `doc_lens` / `max_doc_lens` 参数，正式实现了对序列打包的正确支持，有助于大幅提升训练吞吐。

### B. 课程学习基础设施
- **[#1694] [OPEN] Add grpo difficulty curriculum**
  - **链接**: [allenai/open-instruct/pull/1694](https://github.com/allenai/open-instruct/pull/1694)
  - **摘要**: 为 GRPO 训练引入难度课程学习机制。
- **[#1693] [OPEN] Add difficulty map builder** & **[#1692] [OPEN] Add difficulty curriculum sampler**
  - **链接**: [PR #1693](https://github.com/allenai/open-instruct/pull/1693) | [PR #1692](https://github.com/allenai/open-instruct/pull/1692)
  - **摘要**: 作为上述课程学习的底层支撑，提供难度映射构建器和课程采样器的具体实现。

### C. 工程健壮性与监控可观测性
- **[#1671] [OPEN] Verify HF export at startup; rewrite save_state_dict_as_hf**
  - **链接**: [allenai/open-instruct/pull/1671](https://github.com/allenai/open-instruct/pull/1671)
  - **摘要**: 重构 HF 模型导出流程，采用 `convert_state_to_hf` -> `AutoModelForCausalLM.save_pretrained` 的新管线。新增 `verify_can_save_as_hf` 启动检查，确保 OLMo-core 模型与 HuggingFace 目标模型转换对齐，防止训练末期导出失败导致算力浪费。
- **[#1690] [CLOSED] Emit per-Group generation times and rename trainer-idle metric**
  - **链接**: [allenai/open-instruct/pull/1690](https://github.com/allenai/open-instruct/pull/1690)
  - **摘要**: 优化训练监控指标，将 `time/trainer_idle_waiting_for_inference` 重命名为 `time/trainer_waiting_for_data`。同时取消 max-reducing，保留每个 Group 的完整生成时间数据，极大增强了 RLHF 训练中推理阶段的瓶颈排查能力。
- **[#1669] [CLOSED] Move maybe_evaluate to grpo_utils; dedupe calculate_token_counts**
  - **链接**: [allenai/open-instruct/pull/1669](https://github.com/allenai/open-instruct/pull/1669)
  - **摘要**: 纯代码重构，将评估逻辑提取至 `grpo_utils` 并去重 token 计数代码，为后续统一 `grpo.py` 与 `grpo_fast.py` 的评估流做准备。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 正在从“可用”的 RLHF 基础设施向“工业级高强度优化”演进，极具技术代表性：
1. **硬核系统级优化**：PR #1670 对 Sequence Packing 的深度支持，以及对 vLLM 推理引擎底层的 Logprobs 介入（PR #1678），直击大模型 RL 训练中“GPU 利用率低下”和“推理-训练不一致”的核心痛点。
2. **探索下一代训练范式**：连续合并关于 **Difficulty Curriculum Learning（难度课程学习）** 的基础组件，表明该项目正在前沿算法层面探索如何让 RL 训练更稳定、收敛更快，而非仅仅停留在 PPO/ReMax 等基础算法的封装。
3. **防呆与可观测性设计**：从强化启动时的 HF 转换验证（PR #1671），到防断点续训引发“随机重启”的机制（PR #1469），再到精细化的耗时指标（PR #1690），项目正在积累防范大规模分布式 RL 训练中“无效算力消耗”的宝贵工程经验。这使其成为开源 RL 生态中不可或缺的硬核参考实现。

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

以下是为您生成的 2026-05-14 Gymnasium RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活动平稳，未发布新版本。社区主要聚焦于向量环境封装器的类型注解准确性问题。共处理了 1 条 Issue 更新和 2 条 PR 更新，其中值得注意的是，社区在 24 小时内完成了从提出类型注解 Bug 到提交修复代码的闭环。

### 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

### 3. 重点 Issues
- **#1580 [Bug] `RecordVideo` 向量封装器 `step` 方法返回类型注解错误**
  - **描述**：开发者指出 `gymnasium/wrappers/vector/rendering.py` 中的 `RecordVideo` 在处理向量环境时，其 `step` 函数的类型注解与实际运行时的返回值不符。当前注解未正确反映 `VectorEnv` 基类中关于 info 字典等数据结构的规范。
  - **链接**：[Farama-Foundation/Gymnasium Issue #1580](https://github.com/Farama-Foundation/Gymnasium/issues/1580)

### 4. 关键 PR 进展
- **#1581 [OPEN] 修复 `RecordVideo` 向量环境 `step` 返回类型注解**
  - **描述**：针对 Issue #1580 的直接修复。将 `RecordVideo.step` 的返回类型注解更改为符合底层 `VectorEnv` 标准签名的格式，确保静态类型检查的准确性。
  - **链接**：[Farama-Foundation/Gymnasium PR #1581](https://github.com/Farama-Foundation/Gymnasium/pull/1581)
- **#1579 [CLOSED] 添加第三方环境 `gym-invmgmt`**
  - **描述**：申请将名为 `gym-invmgmt`（库存管理与供应链优化环境）添加至 Gymnasium 的第三方环境列表中。该 PR 已被关闭（可能由于不符合贡献规范或维护者建议暂缓合并）。
  - **链接**：[Farama-Foundation/Gymnasium PR #1579](https://github.com/Farama-Foundation/Gymnasium/pull/1579)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **API 标准的基石地位**：Gymnasium 已经并依然是强化学习领域的“事实标准” API。从今日的类型注解修复可以看出，项目正在向更高维度的代码健壮性演进，精确的类型提示对现代 IDE 支持和大型 RL 系统的静态检查至关重要。
- **生态持续繁荣**：尽管只是日常的数据波动，但第三方环境（如供应链优化环境 `gym-invmgmt`）的持续接入，证明了其 API 规范对垂直领域（如运筹学与 RL 结合）依然保持着强大的生态向心力。
- **活跃的社区自修复能力**：Bug 提出后 24 小时内即有对应的 Fix PR 跟进，体现了核心维护者与社区开发者之间高效协同的运作状态。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>