# RL 开源生态日报 2026-04-28

> 生成时间: 2026-04-27 22:14 UTC | 覆盖项目: 15 个

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
当前大语言模型（LLM）的强化学习开源生态正经历从“算法验证工具”向“超大规模分布式计算基础设施”的跨越。以 veRL、AReaL、OpenRLHF 为代表的前沿项目，其核心迭代已全面聚焦于千亿参数规模下的跨硬件通信、内存墙突破及 Agent/Multimodal 的复杂工作流支持。与此同时，生态底座的基石项目（如 Gymnasium）正在深耕静态类型与工程质量，为上层算法提供更严谨的接口保障。

## 各项目活跃度对比
*注：本表统计了过去 24 小时内各项目的数据指标，按活跃度与生态重要性降序排列。无活动项目已省略。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **veRL** | 33 | 54 | 0 | 集中攻坚 Ascend NPU 适配与 FSDP/Megatron 混合底座重构，剑指 200B+ 模型国产化训练。 |
| **TRL** | 4 | 19 | 0 | 稳固 GRPO 核心算法边界，推进底层显存极致优化与代码架构治理。 |
| **AReaL** | 8 | 20 | 0 | 前沿模型极速响应（DeepSeek-V4/Qwen3.5），死磕 VLM 长时训练的 OOM 痛点。 |
| **ROCK** | 5 | 7 | 0 | 修复 Ray 集群重连顽疾，发力企业级容错与 Serverless 算力拓展。 |
| **slime** | 3 | 8 | 0 | 攻坚分布式极高难度的 CP/PP 通信 Bug，快速引入 SAPO 等前沿算法。 |
| **Open Instruct** | 1 | 6 | 0 | 深入 FSDP2 与 vLLM 底层 NCCL 非法内存访问排查，夯实底层数值精度。 |
| **OpenRLHF** | 0 | 5 | 0 | 试图解绑 DeepSpeed 引擎，精细化支持 Qwen3 思维链 Mask 与 Agent 工具调用。 |
| **ROLL** | 0 | 2 | 0 | 原生支持华为昇腾 NPU 部署，探索与 Atropos 环境的 Reward Bridge 集成。 |
| **Gymnasium** | 0 | 6 | 1 | 核心基座全面完善类型注解，提升 IDE 静态分析与下游调用健壮性。 |
| **torchtune** | 0 | 1 | 0 | 接入轻量级本地实验追踪后端 Trackio，增强 RLHF 可观测性。 |
| **PettingZoo** | 0 | 0 | 1 | 常规依赖升级（Ray 2.55.0），保持多智能体标准接口的底层兼容性。 |
| **CleanRL / rl_games / SB3 / Tianshou** | 0 | 0 | 0 | *(过去 24 小时无动态)* |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agent 与多模态训练闭环**：各大框架正竞相支持多轮工具调用与视觉语言模型（VLM）的 RL 训练。veRL 解耦了 Agent Loop 架构，OpenRLHF 和 TRL 分别在底层支持了 SFT 阶段的 Tools 字段和 VLM 工具调用反馈。
2. **GRPO 及异步训练的深化**：GRPO 已成为复现类 DeepSeek 模型的核心算法。TRL 修复了其零标准差导致的伪梯度问题并引入重要性采样；slime 也在此基础上扩展了 SAPO 损失函数。
3. **思维链与多 Token 预测（MTP）**：随着 Qwen3、GLM-5 等模型的发布，针对 CoT 模板的 SFT Mask 精细对齐（OpenRLHF）及 MTP 联合训练（slime）成为新的算法演进点。

**工程/基础设施侧信号：**
1. **超大规模并行的内存与通信墙攻坚**：突破单卡显存瓶颈是当前重中之重。veRL 引入了 Megatron-FSDP 混合后端与权重切片传输；AReaL、Open Instruct 等集中修复了底层通信（NCCL）与显存溢出（OOM）问题。
2. **去中心化与轻量级可观测性**：对云端重度依赖的减弱成为趋势。torchtune 和 OpenRLHF 均接入了基于本地 SQLite 的轻量级追踪器 Trackio，降低了大规模调试的门槛。
3. **异构算力生态的争夺**：国产替代是明确主线。veRL、ROLL 等正大力推进对华为 Ascend NPU 的适配与脚本统一，试图建立多芯片并行的 RL 工程标准。

## 差异化定位分析

1. **重工业级 RL 基建（veRL / AReaL / ROCK）**：这三个项目主要面向万卡级集群的极端场景。veRL 视自身为跨芯片的 RL 标准生态底座；AReaL 侧重于微服务化解耦与前沿 SOTA 模型的极速纳管；ROCK 则更偏向底层集群调度、高可用容错与云原生结合。
2. **前沿算法与敏捷试错平台（TRL / slime / OpenRLHF）**：TRL 背靠 HuggingFace 生态，侧重于算法的高度封装、代码规范与快速普及；slime 展现了极强的底层系统与算法 Co-design 能力；OpenRLHF 则通过尝试移除 DeepSpeed 依赖，谋求更轻量、更解耦的分布式架构。
3. **严谨的基础标准设施（Gymnasium / PettingZoo）**：作为 RL 生态的底层 API，它们不追求分布式大模型的时髦，而是深耕静态类型检查、接口标准统一与长尾兼容性，是所有上层算法不可或缺的基石。

## 社区热度与成熟度

1. **第一梯队（极度活跃）**：**veRL**（33 Issues, 54 PRs）凭借火山引擎的投入与开源社区的反馈，呈现出海量工程提交，说明其正处于密集的架构重构与多硬件适配期；**AReaL** 和 **TRL** 保持高频单日更新，PR 提交质量高且针对性强（如直击 OOM、梯度发散等痛点），社区痛点反馈极为迅速。
2. **中坚力量（稳步演进）**：**slime**、**ROCK**、**OpenRLHF** 和 **Open Instruct** 活跃度适中，其 PR 往往涉及底层重构（如替换 DeepSpeed、攻坚 Ray 容错），属于厚积薄发的系统级沉淀阶段。
3. **成熟稳定期**：**Gymnasium** 与 **PettingZoo** 无新增核心 Issue，日常以类型补全和依赖升级为主，证明其 API 设计已高度成熟，进入工程打磨期。而 CleanRL 等项目近期处于静默状态。

## 值得关注的趋势信号

1. **大模型 RL 训练框架的“脱钩”演进**：以 OpenRLHF 尝试用 AutoModel 替换 DeepSpeed 为代表，社区正在反思对重度分布式框架的强依赖。未来“轻量级原生底座 + 灵活并行策略”将更受开发者青睐。
2. **从“文本对齐”走向“具身与多智能体融合”**：无论是 veRL 解耦 Agent Loop，还是 ROLL 集成 Atropos 环境，都释放出一个明确信号：RL 框架正在将能力边界从纯文本后训练，拓展到基于复杂环境交互的智能体工作流中。
3. **国产异构算力从“能用”向“好用”跃迁**：随着 veRL 发起 RFC 统一 GPU/NPU 管理脚本，以及 ROLL 原生支持 NPU Docker 部署，国产算力在开源 RL 生态中的地位正从“概念级支持”走向“生产级优化”。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL 强化学习开源生态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时内，ROLL 项目无新增 Issues 和版本发布，但有两项重要的 Pull Requests 更新。生态拓展趋势明显：社区与内部贡献者正分别将 ROLL 的算力支持底座向**国产 Ascend NPU** 延伸，同时在算法框架侧推进与 **Atropos 环境**的深度集成。

## 2. 版本发布
过去 24 小时无新版本发布。
- 当前最新版：暂无更新。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。
- 新增 Issue 数量：0 条

## 4. 关键 PR 进展

- **[WIP] feat: add npu dockerfile and useage** | [PR #428](https://github.com/alibaba/ROLL/pull/428)
  - **作者**: UsernameFull
  - **状态**: Open (Work In Progress)
  - **核心内容**: 新增针对华为昇腾 Ascend NPU（Atlas 900 A2/A3 PODc）的 Docker 镜像构建文件及使用文档，并同步了中文版 `ascend_usage` 文档。此举大幅降低了在国产异构算力集群上部署 ROLL 的门槛。
  
- **ROLL with Atropos environments** | [PR #426](https://github.com/alibaba/ROLL/pull/426)
  - **作者**: RUFFY-369
  - **状态**: Open (4月21日创建，27日更新)
  - **核心内容**: 集成 NousResearch 的 [Atropos](https://github.com/NousResearch/atropos) 环境作为模块化智能体适配器。该 PR 引入了 "Universal Reward Bridge"，使 ROLL 能够原生处理和适配来自 Atropos 的环境反馈，扩展了 ROLL 在复杂 RL 环境下的兼容性与应用场景。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
结合今日的 PR 动态，ROLL 框架在当前 LLM/RL 开源生态中的战略定位正在快速落地：
1. **算力解耦与国产化支持**：通过引入 Ascend NPU 的原生 Docker 支持（PR #428），ROLL 正在打破大模型 RLHF 训练对单一 GPU 生态的绝对依赖，为超大规模集群训练提供更具成本效益和供应链安全的异构计算选项。
2. **兼容前沿 Agent RL 环境**：与 Atropos 的集成（PR #426）表明 ROLL 不仅局限于内部模型训练，更在致力于构建通用的 RL 底座。通过标准化的 Reward Bridge 接入高自由度的环境，为后续探索 Agent 的强化学习微调提供了基础设施。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-04-28 ROCK (alibaba/ROCK) 强化学习开源生态日报摘要：

---

# ROCK 强化学习生态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时，ROCK 生态保持活跃，主要聚焦于**系统底层的稳定性增强**与**生态兼容性拓展**。社区共处理了 5 条 Issues 和 7 条 PR。值得注意的是，开发者集中修复了 Ray 集群重连机制引发的进程 OOM 和崩溃问题，并在 BashJob 组件中重构了 OSS 产物上传逻辑。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
今日的 Issue 集中在底层容错和作业执行链路的缺陷修复上。

- **Ray 集群稳定性问题凸显**：开发者接连报告了 Ray 重连/重新初始化时的严重故障。
  - [#904 [Bug] ray.init() failure 导致 pod 宕机](https://github.com/alibaba/ROCK/issues/904)：Ray 后台重连作业中的 `ray.init()` 失败会导致 admin-write pod 崩溃。
  - [#902 [Bug] ray re-init 失败引发 OOM](https://github.com/alibaba/ROCK/issues/902)：Ray 重新初始化失败导致多实例本地初始化，进而引发 admin 进程内存溢出 (OOM)。
- **BashJob 产物链路缺陷**：
  - [#898 [Bug] BashJob submit-only 丢失 artifacts 及 OSS 凭证失效](https://github.com/alibaba/ROCK/issues/898)：用户仅调用 `Job.submit()` 时，因 `collect()` 未触发导致最终产物丢失；且 `environment.env` 中的 OSS 凭证未按预期生效。
- **测试与可观测性优化**：
  - [#900 [Chore] 移除未使用的 need_database 测试标记](https://github.com/alibaba/ROCK/issues/900)
  - [#741 [Feature] Worker 磁盘使用量 OTLP 指标上报](https://github.com/alibaba/ROCK/issues/741) （已关闭，对应 PR 已合并）

## 4. 关键 PR 进展
开发者针对上述核心问题迅速提交了修复方案，并推进了多个重要特性的合并。

- **底层 Bug 修复**
  - [#905 修复 Ray 重连期间 ray.init 导致的异常](https://github.com/alibaba/ROCK/pull/905)：对应 Issue #904，增强重连机制的异常处理。
  - [#903 修复 Ray re-init 失败导致的 OOM](https://github.com/alibaba/ROCK/pull/903)：对应 Issue #902，保障集群重试时的内存安全。
  - [#899 重构 BashTrial OSS 上传逻辑](https://github.com/alibaba/ROCK/pull/899) (**已合并**)：彻底解决 #898。通过脚本注入（生成 wrapper bash 脚本执行 prologue/epilogue）替代原 Python 宿主驱动，支持纯 submit 模式上传；并重构了 OSS 凭证的三级优先级加载逻辑。

- **新特性与兼容性支持**
  - [#867 新增阿里云函数计算 Serverless 运行时算子支持](https://github.com/alibaba/ROCK/pull/867)：扩展了 ROCK 的算力底座，支持接入 Serverless 架构。
  - [#861 ROCK 支持 Windows PowerShell](https://github.com/alibaba/ROCK/pull/861)：完善跨平台能力，绕过了 Windows 上不可用的 Python 依赖包。
  
- **可观测性与代码清理**
  - [#742 Rocklet 支持 Worker 级别的 Docker/Log 目录使用量 OTLP 指标上报](https://github.com/alibaba/ROCK/pull/742) (**已合并**)：落地 Issue #741。
  - [#901 移除 need_database marker](https://github.com/alibaba/ROCK/pull/901)：清理测试代码冗余。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 正在从单纯的 RL 算法框架向**企业级、高可用的 RL 系统平台**演进，这体现在今日的更新中：
1. **严苛的工程化打磨**：针对 Ray（RL 领域最常用的分布式框架）在复杂网络环境下的重连、OOM 等顽疾进行攻坚，这表明项目在应对大规模、长时间 RL 训练任务时具备生产级的容错要求。
2. **架构边界的合理划分**：在 PR #899 中，将 BashJob 的产物上传从“Python 宿主进程驱动”降级解耦为“Bash 脚本自包含闭环”，极大提升了异构环境和纯提交场景下的鲁棒性。
3. **算力生态的广度拓展**：结合 Windows PowerShell 的支持与阿里云 Serverless 算子的接入，ROCK 正在打破传统 RL 训练对单一 Linux 容器集群的依赖，为开发者和企业用户提供更低门槛、更弹性的基础设施支持。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime (THUDM) RL 日报摘要 - 2026-04-28

## 1. 今日速览
过去 24 小时内，Slime 仓库保持较高的开发活跃度。项目新增/更新 **3 条 Issues**（主要涉及大模型后端适配及 CP 并行 Bug）和 **8 条 PRs**（涵盖核心算法实现、基础设施升级与 CI 流水线维护）。无新版本发布。

## 2. 版本发布
无。当前项目主干处于高频迭代与代码合并阶段，尚未触发新的 Release。

## 3. 重点 Issues
- **[Bug] `--allgather-cp` 破坏 Token 顺序**：开发者报告在开启 `--allgather-cp` 且 `context_parallel_size > 1` 时，`hf_attention.py` 中的 CP 路径仍使用遗留的 **zigzag** 布局重组隐藏状态，与底层 `data.py` 生成的 **contiguous** 布局冲突，导致 Token 顺序混乱。
  - 链接: [THUDM/slime Issue #1871](https://github.com/THUDM/slime/issues/1871)

- **[Question] GLM-5 MTP 训练支持计划**：社区询问是否有计划支持 GLM-5 主模型与 MTP (Multi-Token Prediction) 层的联合训练。作者指出当前 MTP 训练与 `allgather_cp` 机制存在不兼容问题。
  - 链接: [THUDM/slime Issue #1870](https://github.com/THUDM/slime/issues/1870)

- **[Bug] Qwen3.5 运行 Pipeline Parallelism 报错**：历史遗留问题，开发者在基于 Megatron 后端运行 Qwen3.5 模型并开启 PP（流水线并行）时，在 `actor.py` 的 `train` 阶段触发崩溃。
  - 链接: [THUDM/slime Issue #1713](https://github.com/THUDM/slime/issues/1713)

## 4. 关键 PR 进展
**算法与核心功能：**
- **新增 SAPO 策略损失函数**：引入全新的 SAPO (Soft Actor-critic with Policy Optimization) 算法目标，添加了 `--sapo-tau-pos` 和 `--sapo-tau-neg` 参数控制正负优势门控，扩展了框架在 PPO 变体算法上的支持。
  - 链接: [THUDM/slime PR #1864](https://github.com/THUDM/slime/pull/1864)
- **支持 Megatron-Bridge LoRA 的 GRPO Actor 训练**：针对 Dense 模型的 GRPO 训练场景，引入了首个受支持的 Megatron-Bridge LoRA 路径，支持仅对 Actor 模型应用 PEFT 并导出有效权重。
  - 链接: [THUDM/slime PR #1865](https://github.com/THUDM/slime/pull/1865)

**多模态与模型支持：**
- **修复 Qwen3-VL 视觉模块加载失败**：从上游 sglang 移植修复代码，解决了由于缺少权重名称映射（`model.visual.` -> `visual.`）导致视觉组件权重加载失败的问题。
  - 链接: [THUDM/slime PR #1727](https://github.com/THUDM/slime/pull/1727)
- **新增 Qwen3 VLM CI 测试**：注册了 Geo3K Qwen3.5-4B VLM 的冒烟测试，确保多模态模型 PR 合并的质量。
  - 链接: [THUDM/slime PR #1814](https://github.com/THUDM/slime/pull/1814)

**基础设施与重构：**
- **Megatron 底座升级**：将 Docker 环境中的 Megatron 版本升级至最新 commit (`1dcf0dafa`)。
  - 链接: [THUDM/slime PR #1867](https://github.com/THUDM/slime/pull/1867)
- **重命名 Critic 配置**：将原有的 critic config 规范化重命名为 megatron config，提升代码可读性（已关闭）。
  - 链接: [THUDM/slime PR #1866](https://github.com/THUDM/slime/pull/1866)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **工程深度极高的大规模 RLHF 落地**：Slime 并非简单的 RL 算法玩具库，而是直面 LLM 训练中最棘手的工程难题（如 Context Parallelism、Pipeline Parallelism 与各类框架底座的兼容）。从今日的 Issue 可以看出，项目正在高并发切分和高维度张量通信的深水区进行大量修复。
2. **与前沿基座模型保持极致同步**：项目对最新的开源 SOTA 模型（如 Qwen3-VL 系列、GLM-5 甚至 MTP 多标记预测机制）展现出极快的适配响应速度。
3. **算法与系统的 Co-design**：项目不仅做底层分布式系统的修修补补，也在快速吸纳最新的 RL 算法进展（如 SAPO 损失函数、Megatron-Bridge 架构下的 LoRA GRPO 训练）。对于致力于研究“如何将百亿/千亿级多模态模型稳定且高效地 Post-train”的开发者和研究人员而言，Slime 具有极高的源码参考与直接应用价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-04-28 RL 日报摘要：

# AReaL RL 生态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高度活跃，共处理了 **8 条 Issues**（3 个新建，5 个更新）和 **20 条 PRs**（14 个新建，6 个合入/关闭）。社区当前聚焦于前沿大模型（如 Qwen3.5、DeepSeek-V4）的工程适配、多模态（VLM）训练的显存与稳定性优化，以及底层推理与训练调度架构的深度解耦重构。

## 2. 版本发布
- **最新 Releases**：近 24 小时内**无**新版本发布。

## 3. 重点 Issues
- **[前沿架构适配] 探索 DeepSeek-V4 容错推理机制**
  作者 `garrett4wade` 发起 RFC，提议在 AReaL 推理服务中复现 DeepSeek-V4 论文中的可抢占式推理服务容错逻辑，以提升大规模分布式训练的鲁棒性。
  🔗 [inclusionAI/AReaL Issue #1279](https://github.com/inclusionAI/AReaL/issues/1279)

- **[系统稳定性] VLM 长时训练内存泄漏 (OOM)**
  作者 `Adiactive` 报告在运行视觉语言模型 (VLM) 训练时，`RTensor._fetch_buffer` 在 Worker 进程中发生无限界内存泄漏，导致长时训练崩溃。该 Bug 已被稳定复现。
  🔗 [inclusionAI/AReaL Issue #1209](https://github.com/inclusionAI/AReaL/issues/1209)

- **[环境依赖] Qwen3.5 组合依赖瓶颈**
  开发者 `leekum2018` 指出在 AReaL 1.0.2 环境下，`transformers 5.3` + `sglang 0.5.9` 运行 Qwen3.5 会触发底层报错。社区正在寻找最佳的版本搭配矩阵。
  🔗 [inclusionAI/AReaL Issue #1155](https://github.com/inclusionAI/AReaL/issues/1155)

- **[架构演进] 引入 Ray Core RDT 同步权重**
  社区提交 RFC 讨论在实验分支引入 Ray Core RDT 进行权重同步，该特性将与 AReaL 1.0 现有代码解耦，保持向后兼容。
  🔗 [inclusionAI/AReaL Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243)

## 4. 关键 PR 进展
- **feat(engine): 支持 Qwen2.5-VL Megatron 训练 (`#1281`)**
  为 `MegatronEngine` 增加对 Qwen2.5-VL 的支持，已在 H100 上完成端到端验证（结合 vLLM rollout），支持 TP/PP/CP 并行策略。
  🔗 [inclusionAI/AReaL PR #1281](https://github.com/inclusionAI/AReaL/pull/1281)

- **fix(engine): 修复 FSDP 多模态训练 CPU OOM (`#1272`)** [已关闭]
  针对 Issue #1209 和 #1271，优化了 `multi_modal_input` 张量（如 `pixel_values`）的显存管理，避免在 loss microbatch 和 forward microbatch 中重复实体化，显著降低 CPU 内存占用。
  🔗 [inclusionAI/AReaL PR #1272](https://github.com/inclusionAI/AReaL/pull/1272)

- **feat(experimental): 增加推理服务显存 Offload/Onload 端点 (`#1276`)** [已关闭]
  在 HTTP 栈中新增端点，支持按需释放和重载 GPU 显存。这对于资源受限、训练和推理共享 GPU 的部署场景至关重要。
  🔗 [inclusionAI/AReaL PR #1276](https://github.com/inclusionAI/AReaL/pull/1276)

- **fix(megatron): 修正 PP 梯度计算除以 microbatches 的问题 (`#1273`)**
  修复了 Megatron Core 在流水线并行（PP）下，Loss 被错误地除以 `num_microbatches` 导致梯度缩放异常的问题。
  🔗 [inclusionAI/AReaL PR #1273](https://github.com/inclusionAI/AReaL/pull/1273)

- **fix: 兼容 transformers>=5.0 的 chat_template 接口 (`#1280`)**
  统一并封装了 `apply_chat_template` 方法，解决 `transformers 5.0` 及以上版本返回 Dict 而非 `List[int]` 导致的 API 破坏性变更。
  🔗 [inclusionAI/AReaL PR #1280](https://github.com/inclusionAI/AReaL/pull/1280)

- **feat(optimizer): 引入 Muon 优化器支持 (`#1270`)**
  开始实验性支持新型优化算法 Muon，扩展 AReaL 的底层优化器生态。
  🔗 [inclusionAI/AReaL PR #1270](https://github.com/inclusionAI/AReaL/pull/1270)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在经历从“纯 RL 算法框架”向**“全栈式大规模 RLHF 基础设施”**的快速演进。从今日的 Issue 和 PR 动态可以看出：
1. **对前沿大模型的无缝支持**：无论是整合 DeepSeek-V4 的容错推理架构，还是适配 Qwen3.5 / Qwen2.5-VL，项目组在跟进 SOTA 模型方面的工程响应速度极快。
2. **极致的工程与性能优化**：针对 VLM 长时训练的内存泄漏修复、Megatron 梯度计算的精确修正、以及推理侧的 GPU 显存卸载设计，都直指超大规模 RL 训练中的真实工程痛点（OOM、并行调度效率）。
3. **架构高内聚低耦合**：将 HTTP 服务重构、权重同步逻辑和配置系统向微服务化和高度模块化方向演进，使得 AReaL 能够更灵活地作为上层组件接入各类云原生集群和异构计算环境。

对于致力于突破大模型 Post-training 瓶颈的工程团队和研究员而言，AReaL 目前提供的底层容错与显存调度方案极具参考和实操价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习生态日报 - 2026-04-28

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高频迭代，无新版本发布。社区与核心开发者主要聚焦于 **GRPOTrainer 的稳定性修复与机制完善**、**KTO 算法与 DPO 的代码对齐**，以及 **底层的 VRAM 显存优化**。全天共处理 4 条 Issues 更新（涉及 PPO、GRPO、TPO 核心算法），并有高达 19 个 PR 活跃更新。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
今日的 Issues 集中反映了实验性 Trainer 在复杂场景下的兼容性及底层机制缺陷，核心问题如下：

- **VLM 工具调用多模态输出崩溃**：`GRPOTrainer` 的 `environment_factory` / `tools` 在视觉语言模型（VLM）场景下失效。当工具返回包含图像的多模态内容时，会导致模型前向传播崩溃 (`RuntimeError`)。
  链接: [huggingface/trl Issue #5663](https://github.com/huggingface/trl/issues/5663)

- **TPO 评估阶段 Loss 异常**：实验性 `TPOTrainer` 在正常训练（`train_loss` 有限）的情况下，`evaluate()` 方法返回 `NaN` 的 `eval_loss`。
  链接: [huggingface/trl Issue #5662](https://github.com/huggingface/trl/issues/5662)

- **PPO 参数更新机制疑问**：开发者对 `PPOTrainer` 中 `mini_batch_size` 的实际作用提出质疑，发现代码中参数更新似乎是基于 `local_batch_size` 而非预期的 `mini_batch_size`。
  链接: [huggingface/trl Issue #5645](https://github.com/huggingface/trl/issues/5645)

- **CI 质量检查阻断**：CI 流水线因找不到 `ruff` 报错中断（已关闭）。
  链接: [huggingface/trl Issue #5633](https://github.com/huggingface/trl/issues/5633)

---

## 4. 关键 PR 进展
PR 动态主要分为三类：**核心算法 GRPO 修复**、**代码架构重构与对齐**、**系统级性能优化**。

### 核心 Trainer (GRPO / AsyncGRPO) 修复与增强
- **修复零标准差奖励导致的伪梯度**：修复了 `GRPOTrainer` 中，当组内奖励完全相同（std=0）时， Advantage 为 0 但 KL 惩罚项仍会产生非预期梯度的问题。
  链接: [huggingface/trl PR #5640](https://github.com/huggingface/trl/pull/5640)
- **修复 Gemma-3 模型兼容性**：解决了 `GRPOTrainer` 在纯文本模式下处理类似 Gemma-3 需要 `token_type_ids` 模型时的 `ValueError` 崩溃。
  链接: [huggingface/trl PR #5644](https://github.com/huggingface/trl/pull/5644)
- **[AI slop] AsyncGRPO 加固与重要性采样**：增强了实验版 `AsyncGRPOTrainer` 的异步 Rollout 管道（[#5656](https://github.com/huggingface/trl/pull/5656)），并引入了句子级别的 Importance Sampling 以支持 LPO / Ling 2.0 训练路径（[#5655](https://github.com/huggingface/trl/pull/5655)）。

### 架构重构与对齐 (KTO -> DPO)
- **KTO 对齐 DPO 架构**：核心开发者 `albertvillanova` 提交了多个 PR，清理了 `KTOTrainer` 中的冗余参数（如 `model_init`, `preprocess_logits_for_metrics`），并统一了 PEFT 的处理逻辑，提升了代码一致性。
  链接: [huggingface/trl PR #5661](https://github.com/huggingface/trl/pull/5661), [#5660](https://github.com/huggingface/trl/pull/5660), [#5659](https://github.com/huggingface/trl/pull/5659)
- **PEFT 缺失检查与类型修正**：为实验性 Trainer 和核心 Trainer 增加了统一的 `peft` 库依赖检查，并修正了 `peft_config` 的类型提示。
  链接: [huggingface/trl PR #5665](https://github.com/huggingface/trl/pull/5665), [#5664](https://github.com/huggingface/trl/pull/5664), [#5666](https://github.com/huggingface/trl/pull/5666)

### 性能与工程优化
- **SFT 显存大幅优化**：引入了分块交叉熵损失，最高可降低 50% 的 VRAM 占用。
  链接: [huggingface/trl PR #5575](https://github.com/huggingface/trl/pull/5575)
- **测试脚本与模型支持**：将单体测试脚本重构为按模型拆分的结构（[#5637](https://github.com/huggingface/trl/pull/5637)），并新增了对 Nemotron 3 和 Qwen3-4B-Instruct-2507 的支持与测试。
  链接: [huggingface/trl PR #5278](https://github.com/huggingface/trl/pull/5278), [#5586](https://github.com/huggingface/trl/pull/5586)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 LLM RLHF 工程痛点**：从今日的分块交叉熵损失（降 50% VRAM）和零奖励梯度修复可以看出，TRL 团队正在实打实地解决 LLM 后训练中“显存爆炸”和“训练不稳定”的底层痛点。
2. **前沿 RL 算法的快速落地与迭代**：GRPO 已经成为开源界复现 DeepSeek-R1 等 Model-Based RL 的核心算法。TRL 不仅在迅速修复 GRPO 的边界 Bug，还在推进 AsyncGRPO（异步生成）和高级采样机制（如 Sentence-level Importance Sampling），保持了与最前沿学术探索的同步。
3. **严谨的工程化治理**：目前项目正在进行大规模的“对齐”工作（如让 KTO 架构向成熟的 DPO 看齐），统一类型提示与依赖检查。这种重构表明该项目正在为未来的企业级高可用和插件化做准备，而不仅仅是算法的试验田。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报摘要：OpenRLHF
**日期**: 2026-04-28 | **数据源**: [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库无新增 Issues、无新版本发布，但社区贡献活跃，共产生了 **5 项 Pull Request (PR)**。项目近期的迭代重心明显倾向于**底层架构演进**（如替换底层引擎）与**复杂数据流的精细化支持**（如多轮对话 Mask 修正与工具调用支持）。

## 2. 版本发布
今日无新的 Release 发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issue。

## 4. 关键 PR 进展
今日的 5 项 PR 均处于 `[OPEN]` 状态，涵盖了从底层数值计算、模型引擎重构到上层训练功能的全面改进：

*   **底层架构重构：用 AutoModel 替换 DeepSpeed**
    *   **PR**: [#1226 Replace Deepspeed backend with Automodel](https://github.com/OpenRLHF/OpenRLHF/pull/1226) (作者: hijkzzz)
    *   **分析**: 这是一个极具架构远见的 PR。旨在移除对 DeepSpeed 的重度依赖，转而采用 HuggingFace `AutoModel` 原生方案。若合并，将大幅提升框架的轻量化程度，降低底层耦合，并可能改善多后端（如 FSDP 兼容）的灵活性。
*   **实验生态扩充：接入 Trackio 后端**
    *   **PR**: [#1230 Add Trackio logger backend](https://github.com/OpenRLHF/OpenRLHF/pull/1230) (作者: abidlabs)
    *   **分析**: 在 Wandb 和 TensorBoard 之外，新增了基于本地 SQLite 优先的 [Trackio](https://github.com/gradio-app/trackio) 实验追踪后端。为对数据隐私要求高、无需复杂云端认证的本地 RLHF 训练场景提供了新选择。
*   **数据流修正：修复 Qwen3 多轮 SFT Mask**
    *   **PR**: [#1227 Fix multi-turn SFT masks for Qwen3 thinking templates](https://github.com/OpenRLHF/OpenRLHF/pull/1227) (作者: taivu1998)
    *   **分析**: 关联 Issue #1080。专门针对 Qwen3/DeepSeek 这类带有“思维链/Cot”模板的模型，修复了多轮对话 SFT 时的 Assistant mask 对齐问题。解决了以往基于前缀计算导致与最终模板渲染不一致的 Bug，对保障基座模型 SFT 阶段的标签准确性至关重要。
*   **复杂场景支持：SFT 引入 Tools 字段**
    *   **PR**: [#1228 Add SFT tools field support for chat templates](https://github.com/OpenRLHF/OpenRLHF/pull/1228) (作者: taivu1998)
    *   **分析**: 允许在启用 `--data.apply_chat_template` 时传入行级别的 `tools` 字段。这使得 OpenRLHF 能够直接在 SFT 阶段处理带有工具调用结构的数据，为训练 Toolformer 或 Agent 型大模型提供了底层支持。
*   **文档与鲁棒性：澄清 Reward 归一化逻辑**
    *   **PR**: [#1229 Clarify reward normalization behavior for custom reward sources](https://github.com/OpenRLHF/OpenRLHF/pull/1229) (作者: taivu1998)
    *   **分析**: 明确限定了 `--reward.normalize_enable` 的作用域（仅作用于局部 Reward 模型和 Critic，而非自定义外部 Reward），并加入了 CLI 警告机制。有效避免了 PPO 训练中因自定义奖励源（如 HTTP API/Python 函数）被误归一化导致的策略崩溃或收敛异常。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **引擎层的解耦与重构**: [#1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226) 表明 OpenRLHF 正在谋求摆脱特定分布式框架的强绑定。在 RLHF 训练越来越看重异构算力利用和容错率的当下，轻量化和原生化的重构将赋予其更强的工程生命力。
2. **紧贴前沿模型特性**: 从 [#1227](https://github.com/OpenRLHF/OpenRLHF/pull/1227) 和 [#1228](https://github.com/OpenRLHF/OpenRLHF/pull/1228) 可以看出，该项目对社区热点（如 Qwen3 的思维链模板、Agent 的 Tools 调用）响应极其迅速，保证了 RL 训练框架在复杂数据对齐场景下的可用性。
3. **工程细节的严谨性**: [#1229](https://github.com/OpenRLHF/OpenRLHF/pull/1229) 对奖励归一化边界条件的明确与防错处理，体现了项目在 PPO 等深度强化学习算法落地上的工程沉淀，这对于降低开发者的炼丹不确定性（如 Reward hacking、训练发散）具有极高价值。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# veRL 开源项目日报：2026-04-28

## 1. 今日速览
过去 24 小时，veRL 社区保持高度活跃，共处理 **33 条 Issues** 和 **54 条 Pull Requests**。核心焦点集中在**多硬件生态（Ascend NPU）适配优化**、**训练引擎稳定性修复（FSDP/Megatron）** 以及 **Agent 与多模态架构的重构**。目前项目无新版本发布，开发者正集中精力推进 [26Q2 路线图](https://github.com/verl-project/verl/issues/5836) 的落地。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues

### 核心Bug与性能瓶颈
- **[NPU] Ulysses 序列并行导致维度不匹配**：在 Ascend NPU 上使用 Ulysses SP 时，`logits_rmpad` 与 `temperature_rmpad` 维度对齐失败。（[Issue #5957](https://github.com/verl-project/verl/issues/5957)）
- **Ascend 910B 上 GRPO 训练极其缓慢**：使用 Qwen3-4B + FSDP2 时，单步更新耗时高达 800 秒，`update_actor` 成为严重瓶颈。（[Issue #6010](https://github.com/verl-project/verl/issues/6010)）
- **动态批次引发 FSDP 死锁**：由于缺失 `dp_group` 参数传递，导致 DP 级别 micro-batch count 不一致，进而触发死锁。（[Issue #6176](https://github.com/verl-project/verl/issues/6176)，[Issue #6178](https://github.com/verl-project/verl/issues/6178)）
- **Blackwell 架构 FP8 端到端训练报错**。（[Issue #6172](https://github.com/verl-project/verl/issues/6172)）
- **蒸馏流程破坏性 Bug**：近期 PR 导致 `nested_tensor_from_tensor_list` 硬编码维度拼接，使得蒸馏路径下的 teacher_logprobs 崩溃。（[Issue #6152](https://github.com/verl-project/verl/issues/6152)）

### 社区生态与工程化 RFC
- **统一 NPU 与 GPU 脚本对齐**：针对近期 Ascend 社区反馈的脚本混乱、文档不同步等问题，维护者发起 RFC，计划统一 GPU/NPU 脚本管理，同时保留 NPU 特定显存优化的独立配置。（[Issue #6164](https://github.com/verl-project/verl/issues/6164)，相关脚本风格问题：[Issue #6139](https://github.com/verl-project/verl/issues/6139)，[Issue #6143](https://github.com/verl-project/verl/issues/6143)）
- **统一跳过管理系统**：提议在 RL 工作流中引入统一的 Skip 系统（如 RolloutSkip），以大幅节省时空开销并增强调试能力。（[Issue #5998](https://github.com/verl-project/verl/issues/5998)）
- **架构设计讨论**：探讨为何在 Rollout 架构中不直接传递 raw prompt 给独立异步任务（涉及 Qwen3-VL 视频支持）。（[Issue #6168](https://github.com/verl-project/verl/issues/6168)）

## 4. 关键 PR 进展

### 架构与底层重构
- **[rollout] 重构 Agent Loop 架构**：将 `LLMServerManager` 从 `AgentLoopManager` 中解耦抽离，以便未来无缝接入 NeMo-Gym 等第三方 Agent 框架。（[PR #6129](https://github.com/verl-project/verl/pull/6129)）
- **[misc] 重构并清理 Examples 目录**：清理大量冗余和过时的示例脚本，重新格式化测试命名，降低新用户的上手门槛。（[PR #6126](https://github.com/verl-project/verl/pull/6126)）

### 功能与特性支持
- **[megatron] 引入 Megatron-FSDP 混合后端**：支持在 Megatron 引擎下使用 FSDP 模式进行 SFT 和 RL 训练，进一步完善超大参数模型的训练方案。（[PR #5423](https://github.com/verl-project/verl/pull/5423)）
- **[rollout] 支持多轮 Agent 的 routed_experts 拼接**：修复多轮工具调用中专家路由信息被覆盖的问题，完善多轮 Agent 训练。（[PR #6177](https://github.com/verl-project/verl/pull/6177)）
- **[fsdp] 支持基于融合算子的 Per-sample Temperature**：解除了之前 fused kernels 只支持标量 temperature 的限制，为混合数据集/蒸馏训练铺平道路。（[PR #6110](https://github.com/verl-project/verl/pull/6110)）
- **[fully_async] 全异步训练支持在线策略蒸馏 (OPD)**。（[PR #6056](https://github.com/verl-project/verl/pull/6056)）

### 稳定性与性能修复
- **[fsdp] 修复混合精度 autocast 硬编码问题**：解决此前强制使用 `bfloat16` 导致用户配置 fp32 训练失效的 Bug。（[PR #6150](https://github.com/verl-project/verl/pull/6150)）
- **[rollout] 优化 NCCL/NIXL 权重同步显存占用**：支持大权重切片传输，打破了 checkpoint engine 显存必须大于最大权重张量的限制。（[PR #6091](https://github.com/verl-project/verl/pull/6091)）
- **[ray] 增强 Ray 子进程错误处理**：特别是针对 GPU/NPU OOM 及 Host RAM OOM 错误的精确识别与聚合上报。（[PR #5855](https://github.com/verl-project/verl/pull/5855)）
- **[veomni] 修复内核选择重构导致的崩溃**：适配上游 VeOmni 的 API 变更。（[PR #6165](https://github.com/verl-project/verl/pull/6165)）

### 工程化与构建
- **引入 `uv` 构建管理**：通过添加 opt-in extras 解决之前 veomni 训练栈复杂的环境依赖“鸡生蛋”问题。（[PR #6179](https://github.com/verl-project/verl/pull/6179)）

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **突破单芯片内存瓶颈的架构演进**：项目正在深度整合 `Megatron-FSDP` 混合并行后端与权重切片传输机制（[PR #5423](https://github.com/verl-project/verl/pull/5423), [PR #6091](https://github.com/verl-project/verl/pull/6091)），这表明 veRL 正在为 200B+ 超大参数模型（如 Qwen3-235B）的 RLHF/GRPO 训练提供更极致的显存优化和工程可行性。
2. **Agent 与多模态训练闭环的成熟**：从多轮工具调用的路由状态拼接（[PR #6177](https://github.com/verl-project/verl/pull/6177)）到解耦 Agent 框架（[PR #6129](https://github.com/verl-project/verl/pull/6129)），veRL 正在将 RL 的边界从单一的文本对齐，拓展到复杂的具身智能和 Multi-Agent 工作流中。
3. **强包容性的跨硬件生态**：项目对 Ascend NPU 的支持已经从“可用”向“好用”演进。近期集中处理 NPU 适配问题，并通过 RFC 统一异构脚本（[Issue #6164](https://github.com/verl-project/verl/issues/6164)），展现了其建立多芯片 RL 标准生态的野心，这对国产算力生态的发展极具价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 生态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时，torchtune 仓库整体活跃度较低，无新增 Issues 和版本发布。唯一的动态集中在可观测性模块的扩展上：社区提交了一项接入轻量级实验追踪工具 Trackio 的新 PR。这标志着该项目在训练监控后端的灵活性上正在持续迭代。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#2963 Add TrackioLogger metric backend](https://github.com/meta-pytorch/torchtune/pull/2963)** [OPEN]
  - **作者**: abidlabs
  - **摘要**: 该 PR 在 `torchtune/training/metric_logging.py` 中引入了新的 `TrackioLogger`，其接口镜像了现有的 `WandBLogger`。[Trackio](https://github.com/gradio-app/trackio) 是一个开源、local-first（基于本地 SQLite）且兼容 WandB API 的轻量级实验追踪器，同时支持按需同步数据至 Hugging Face Space。
  - **分析师评论**: 在 RLHF/DPO 等强化学习对齐任务中，细粒度的指标追踪对 reward scaling 和 KL 散度的调试至关重要。此项 PR 为开发者提供了一个去中心化、低成本的本地实验追踪替代方案，进一步降低了重度依赖云端服务的门槛。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
torchtune 作为 PyTorch 生态下的 LLM 微调框架，其底层架构天然支持 RLHF 及各类基于人类反馈的强化学习微调范式。虽然今日无直接关于 RL 算法的代码更新，但其不断丰富的 metric logging 后端（如本次的 Trackio 以及现有的 WandB 支持）体现了项目对**训练可观测性**的高度重视。在复杂的 RL 训练流程中，灵活且轻量的状态追踪是排查不收敛问题和评估策略表现的核心基石，这使得 torchtune 在构建定制化、可控的 RL 训练管线中保持着极高的工程价值。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-04-28)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库的 Issues 更新 1 条，PR 更新 6 条，无新版本发布。核心动向集中在底层 GRPO 训练框架与 FSDP2/vLLM 的工程集成修复，由核心贡献者 finbarrtimbers 主导。

## 2. 版本发布
无。

## 3. 重点 Issues
- **[#1639](https://github.com/allenai/open-instruct/issues/1639) [OPEN] 异常 webpack.yml 工作流配置** 
  - 作者: shahshahii | 👍: 0
  - 状态: 引用了一个外部项目（ton-blockchain）的 Issue 内容，疑似为自动化脚本误提交的无关/垃圾 Issue，需仓库管理员介入甄别与清理。

## 4. 关键 PR 进展
- **[#1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN] 修复 GRPO 与 vLLM 原生权重同步的兼容性**
  - 作者: finbarrtimbers
  - 核心内容: 修复了 `grpo.py`（基于 olmo-core / FSDP2 路径）在 step-0 阶段与 vLLM 原生权重转移 API 交互时存在的 3 个堆叠 Bug。其中包含一个导致 NCCL 发送时出现非法内存访问（FSDP2 root-module params 引发）的严重问题。此举对保障大规模 RL 分布式训练的稳定性至关重要。
- **[#1638](https://github.com/allenai/open-instruct/pull/1638) [OPEN] 新增评估任务提交脚本**
  - 作者: finbarrtimbers
  - 核心内容: 引入 `scripts/submit_eval_jobs_new.py`，支持直接通过 `beaker experiment create` 提交 olmo-eval-internal 评估任务，兼容 Beaker dataset/HF repos/Weka 路径，并自动生成 v2 spec YAML。优化了模型训练后的评测工作流。
- **[#1640](https://github.com/allenai/open-instruct/pull/1640) & [#1637](https://github.com/allenai/open-instruct/pull/1637) [CLOSED] 修复打包配置的回滚与重置**
  - 作者: finbarrtimbers
  - 核心内容: 由于 #1622 意外回滚了 #1634 的打包修复（导致 `pyproject.toml` 中 `py-modules = ["open_instruct"]` 声明错误，致使第三方依赖安装失败），#1637 尝试重新应用修复但产生冲突。最终通过 #1640 再次执行 Revert 理顺了变更历史。
- **[#1620](https://github.com/allenai/open-instruct/pull/1620) [CLOSED] 对齐 olmo_core_finetune SFT 训练精度**
  - 作者: finbarrtimbers
  - 核心内容: 验证并确保 `open_instruct/olmo_core_finetune.py` 在纯 olmo-core SFT 循环下训练的逐步一致性，解决了与参考实验相比出现的发散问题。
- **[#1641](https://github.com/allenai/open-instruct/pull/1641) [CLOSED] 更新实验脚本**
  - 作者: finbarrtimbers

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻克 RL 底层分布式通信瓶颈**：PR #1642 深入排查了 FSDP2 与 vLLM 权重同步时的 NCCL 非法内存访问 Bug。在基于异构计算的大模型 RLHF/GRPO 训练中，此类底层的内存与通信级排错具有极高的技术壁垒和复用价值。
2. **端到端基础设施的持续迭代**：项目不仅在算法层面推进，还在工程化落地上发力（如 #1638 中引入的 Beaker 评测工作流，以及持续修复 `pyproject.toml` 的模块依赖打包问题），表明该项目正在被高频率地应用于真实的大规模 RL 实验闭环中。
3. **高价值训练链路验证**：PR #1620 针对 SFT 阶段对齐了 `open_instruct` 与底层 `olmo-core` 的训练对等性。在 Post-training 阶段，严格保证基础链路的数值一致性是后续开展有效 RL 对齐（如 DPO、GRPO）的基石。

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

# 强化学习（RL）开源生态日报：Gymnasium 项目摘要
**日期**: 2026-04-28 | **追踪项目**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. 今日速览
在过去 24 小时内，Gymnasium 仓库整体保持平稳，无新版本发布，Issues 看板无新增或更新。项目的核心推进主要体现在 **代码静态类型系统的全面重构与优化** 上，社区开发者在单日内集中提交了多个 PR，显著提升了核心模块的类型覆盖率。同时，CI 流水线依赖进行了常规的安全/版本升级。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
今日共有 6 个 Pull Requests 发生状态更新，其中 5 个为活跃推进，1 个为流水线自动维护。重点在于开发者 `jorenham` 对代码库类型注解的集中完善：

- **[OPEN] 修复 `utils` 类型错误并完善缺失注解**：修复了 11 个类型警告，并将 `gymnasium.utils` 子包的类型覆盖率提升至 100%。
  链接：[Farama-Foundation/Gymnasium PR #1569](https://github.com/Farama-Foundation/Gymnasium/pull/1569)

- **[OPEN] 补充 `core` 模块的缺失类型注解**：基于 typestats 仪表盘的数据分析，填补了 `gymnasium.core` 中的类型注解空缺。
  链接：[Farama-Foundation/Gymnasium PR #1566](https://github.com/Farama-Foundation/Gymnasium/pull/1566)

- **[OPEN] 为 `error` 类添加属性注解**：针对 `gymnasium.error` 异常类添加了属性的类型注解，以规范异常处理机制。
  链接：[Farama-Foundation/Gymnasium PR #1567](https://github.com/Farama-Foundation/Gymnasium/pull/1567)

- **[OPEN] 补充 `logger` 函数的返回类型注解**：明确指定了 `gymnasium.logger` 中函数的 `-> None` 返回注解，消除了类型检查器可能推断为 `Any` 的模糊性。
  链接：[Farama-Foundation/Gymnasium PR #1568](https://github.com/Farama-Foundation/Gymnasium/pull/1568)

- **[CLOSED] 新增第三方环境文档：BalloonPoppingChallenge**：在官方文档中添加了新的外部环境介绍，这是一个 6 自由度火箭制导、导航与控制（GNC）模拟环境。
  链接：[Farama-Foundation/Gymnasium PR #1563](https://github.com/Farama-Foundation/Gymnasium/pull/1563)

- **[CLOSED] 升级 CI 依赖 `actions/upload-artifact` v7**：由 Dependabot 自动触发，将 GitHub Actions 的 `upload-artifact` 从 v4 升级至 v7。
  链接：[Farama-Foundation/Gymnasium PR #1565](https://github.com/Farama-Foundation/Gymnasium/pull/1565)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
虽然今天看似没有重磅的功能性更新或版本发布，但连续的类型注解 PR 揭示了 Gymnasium 项目在工程化方面的关键演进趋势：
1. **强化 IDE 与静态分析支持**：从 `core` 到 `error`、`logger`、`utils`，核心基座的全面 Type Hint 化，极大提升了下游 RL 算法开发者的编码体验和排错效率。
2. **稳固生态标准地位**：作为当前绝大多数 RL 算法库（如 Stable-Baselines3, CleanRL, Tianshou 等）的底层接口，Gymnasium 正在通过提升自身代码的严谨性（100% type coverage 目标），确保其 API 在复杂的工程环境中的健壮性。
3. **持续扩展的物理仿真边界**：PR #1563 表明社区仍在持续接入具有复杂物理特性的新环境（如 6-DoF 火箭 GNC），这证明了 Gymnasium 在从传统游戏 AI 向更广泛的机器人与控制理论领域渗透的生命力。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时内，多智能体强化学习（MARL）标准 API 库 **PettingZoo** 生态整体保持平稳。项目组未收到新的 Issue 报告，也无新增或更新的 Pull Request。核心动向集中体现为日常维护，发布了一个主要针对教程依赖项更新的补丁版本（v1.26.1）。
🔗 仓库地址：[github.com/Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 2. 版本发布
*   **PettingZoo 1.26.1**
    *   **类型**：Patch（补丁版本）
    *   **核心更新**：修复并更新了教程环境中的依赖项。具体而言，将 Ray（常用于分布式 RL 训练）的版本要求从 2.7.0 大幅升级至 2.55.0（对应 PR: #1329）。
    *   **分析**：此次更新不涉及核心 API 的变动，主要确保了使用 PettingZoo 官方教程进行多智能体训练时，底层依赖库的现代代际兼容性。
    *   🔗 Release 链接：[PettingZoo 1.26.1](https://github.com/Farama-Foundation/PettingZoo/releases/tag/1.26.1)

### 3. 重点 Issues
*   **过去 24 小时无新增或更新的 Issues**。
    当前项目 Issue 追踪器处于静默状态，反映出该阶段社区反馈平稳，核心库功能已趋于高度成熟和稳定。

### 4. 关键 PR 进展
*   **过去 24 小时无新增或活跃的 Pull Requests**。
    *注：版本发布中提及的 [PR #1329](https://github.com/Farama-Foundation/PettingZoo/pull/1329) 为前置已合并的依赖更新请求，已于今日封装入正式 Release 中。*

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 不仅是 Farama Foundation 旗下的核心项目，更是当前多智能体强化学习（MARL）领域的**事实标准 API 之一**。
1. **统一的接口抽象**：在 MARL 环境碎片化严重的现状下，PettingZoo 提供了类似 Gymnasium 的标准化 API（支持 AEC 和 Parallel 两种范式），极大地降低了研究人员对比不同 MARL 算法的迁移成本。
2. **生态互通性**：它与底层环境库（如 ALE、MuJoCo）和上层算法库（如 Stable-Baselines3、CleanRL、Ray/RLlib）紧密集成。今日 v1.26.1 对 Ray 2.55.0 的适配正是保障上层分布式训练生态兼容性的关键动作。
3. **基准与复现**：内置大量标准测试环境（如经典博弈、MPE 等），是评估新算法的基石。持续关注其更新有助于研究者把握 MARL 底层基础设施的技术演进方向。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>