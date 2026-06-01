# RL 开源生态日报 2026-06-02

> 生成时间: 2026-06-01 22:41 UTC | 覆盖项目: 15 个

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
当前 LLM 强化学习生态正处于从“单轮静态对齐”向“复杂多轮 Agent 交互”全面演进的关键节点。头部框架的迭代重心已从单纯的算法实现，转移至大规模集群下的**异构算力调度、极端显存/通信优化以及训练与推理引擎的深度融合**。开源项目之间在底层引擎（如 Megatron、vLLM、SGLang）和异构硬件（如 NPU、Ascend）的适配上展现出既竞争又协同的态势，整体工程壁垒不断升高。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 7 | 36 | 1 (v0.8.0) | 范式跃迁至 Agentic RL，底层大规模重构 |
| **ROCK** | 11 | 23 | 1 (v1.8.3) | 聚焦企业级健壮性与精细化异构算力治理 |
| **TRL** | 11 | 18 | 0 | 发力异步架构与多模态 RL 修复，解耦训练与环境 |
| **slime** | 3 | 7 | 0 | 深度攻坚多智能体 GRPO 稳定性与分布式兼容 |
| **AReaL** | 2 | 3 | 0 | 探索 FP8 混合精度极限与完善开源路线图 |
| **Open Instruct** | 0 | 2 | 0 | 修复分布式死锁，快速跟进前沿模型 Judge 计费 |
| **ROLL** | 0 | 1 | 0 | 扩充国产 NPU 异构算力 CI/CD 生态 |
| *其他项目* | *0* | *0* | *0* | *平稳静默期* |

*(注：CleanRL, Gymnasium, OpenRLHF, PettingZoo 等 8 个项目过去 24 小时无活动)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **Agentic RL 与多轮交互成为绝对核心**：无论是 verl 的 `AgentFramework` RFC、TRL 将数据集控制权下放给环境，还是 slime 引入 TCOD 多轮蒸馏，都表明 RL 技术正在摆脱传统的单轮对话偏好对齐，向支持工具调用、多教师协作的自主智能体演进。
2. **多模态与前沿模型的对齐痛点治理**：随着 Qwen3.5、GLM5 等混合注意力及 MoE 架构模型的普及，各框架都在集中修复 VLM 在 RLHF 阶段引发的图像 Token 截断、特征维度失配等边界错误。

**工程/基础设施侧信号：**
1. **打破 GIL 与访存墙的极致压榨**：RL 框架正在全面引入异步 Rollout 架构（如 TRL 将 Rollout 移至子进程，verl 独立 Log Prob Server）。同时，针对大模型训练的显存与通信瓶颈，底层开始深度融合 FP8 混合精度（AReaL）、CPU Offload 与 Megatron-FSDP 混合模式（verl）。
2. **长周期集群调度的健壮性重构**：面对万卡级集群的长时间稳定运行挑战，基础设施层开始集中清理状态机的 Race Condition（如 ROCK 改用 DB 驱动替代文件哨兵），并集中修复 PG 死锁与资源泄漏问题。

## 差异化定位分析

1. **verl (全周期 Agent 平台)**：定位正在发生跃迁，从单纯的 PPO 训练框架向支持多轮、多教师、课程学习的全周期 Agent 基础设施升级，且在万卡级 MoE 和 VL 模型的底层性能优化上保持绝对领先。
2. **TRL (敏捷与多模态对齐标准)**：依托 HuggingFace 生态，TRL 正在快速补齐异步训练和 PEFT/LoRA 支持，定位为多模态大模型对齐的“事实标准”与敏捷实验首选。
3. **ROCK & ROLL (企业级调度与异构算力底座)**：阿里系项目更侧重于“算力池化”与“任务调度”。ROCK 专注于长周期分布式集群的沙箱隔离与健壮性，ROLL 则发力于国产化 NPU 适配，二者共同构筑了底层资源治理的商业化壁垒。
4. **AReaL & slime (极致性能与前沿探索)**：这二者更偏向于算法与系统边界的突破。AReaL 专注于 BF16 训练与 FP8 推理的极致混合编排；slime 则死磕高性能引擎间的兼容性与多智能体范式。

## 社区热度与成熟度

1. **verl 架构号召力极强**：单日处理 7 个 Issue 和 36 个 PR，且 RFC 能吸引阿里 Qwen 团队及顶会论文作者入驻提案，反映出其极高的社区成熟度与行业标准化话语权。
2. **TRL 开发者基数庞大**：高密度的 Bug 报告（如 Checkpoint 恢复失效、最低版本梯度不匹配）和快速响应的 Bugfix PR，体现了其庞大的用户基盘和活跃的社区排障能力。
3. **Open Instruct 专注工程可用性**：虽然没有激烈的 Issue 讨论，但快速跟进 Qwen3 适配和 MiniMax-M3 模型的 Judge 计费，显示出其作为成熟科研机构“开箱即用”工具链的实用主义定位。

## 值得关注的趋势信号

1. **训练与推理引擎的深度穿透**：传统的“黑盒式”调用正在减少，取而代之的是将训练引擎的显存优化与推理引擎（如 SGLang、vLLM）的吞吐量深度绑定联合优化。
2. **安全漏洞防范升级**：随着 RL Agent 环境复杂度的增加，系统安全开始受到重视（如 verl 修复了 tool parser 中的任意代码执行 ACE 漏洞），这将为后续 Agent 框架的设计敲响警钟。
3. **异构算力适配成为基建必选项**：随着对英伟达算力依赖的分散化，Ascend NPU 等异构硬件的适配与 CI 测试（如 ROLL）正在从边缘需求转变为开源 RL 基础设施的核心分支。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-02）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体处于平稳迭代期。无新增 Issue 和版本发布，但有 1 个关键底层生态兼容性的 PR 提交，标志着项目正在积极拓宽异构计算硬件的 CI/CD 边界。
*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **Release 更新**: 0 个

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
*   **[#454] [OPEN] [WIP] feat: add npu ci yaml and fix tests** | 作者: `UsernameFull`
    *   **链接**: [alibaba/ROLL PR #454](https://github.com/alibaba/ROLL/pull/454)
    *   **摘要**: 该 PR 旨在引入华为 Ascend NPU 的 GitHub Actions CI 流程，并修复测试与运行时以适配 NPU 执行环境。
    *   **技术细节**: 目前仍处于 WIP（开发中）状态。分支为 `UsernameFull:npu_ci` -> `alibaba:main`。单次提交涉及 **53 个文件变更**，核心修改包括新增 `.github/workflows/ci-npu-test.yml` 工作流，并对项目底层运行时进行了大规模重构与兼容性修复。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **异构算力生态的补全**：随着大模型对算力的需求剧增，RLHF/RLAIF 等强化学习训练不再局限于传统的 NVIDIA GPU 生态。PR #454 对 **Ascend NPU 环境的深度适配**，表明 ROLL 正在演化为一个跨硬件架构的 RL 基础设施，这对于国内算力生态的自主可控及多卡异构训练具有重要实战价值。
*   **工程化与代码质量**：通过一次性更改 53 个文件来重构测试和运行时兼容性，反映出该项目在引入新硬件支持时，高度重视并同步完善自动化测试（CI）体系，这为后续社区开发者复现实验及进行二次开发提供了稳固的工程保障。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 开源项目 RL 日报摘要 (2026-06-02)

## 1. 今日速览
过去 24 小时内，阿里 ROCK（强化学习基础设施）项目保持高度活跃，共处理 **11 条 Issue** 和 **23 条 PR**，并发布了新的修正版本。项目重心目前明显向**系统健壮性、核心依赖瘦身、GPU 多卡调度支持以及后台清理任务重构**倾斜。

---

## 2. 版本发布
- **[v1.8.3]**: 项目发布了最新的 `v1.8.3` 版本。
  - **链接**: [Full Changelog (v1.8.1...v1.8.3)](https://github.com/alibaba/ROCK/compare/v1.8.1...v1.8.3)

---

## 3. 重点 Issues
今日的 Issue 主要集中在依赖治理、API 兼容性修复以及 Sandbox 生命周期的边界条件处理。

- **[[Bug] SDK oss2 API 不兼容 (#1049)](https://github.com/alibaba/ROCK/issues/1049)**
  - **摘要**: 依赖解析默认拉取了过时的 `oss2 2.1.1` 版本，导致部分对象存储 API 存在兼容性报错。
- **[[Feature] 核心依赖瘦身与移除过时 uuid (#1052)](https://github.com/alibaba/ROCK/issues/1052)**
  - **摘要**: 建议移除顶层对 PyPI 包 `uuid` 的依赖（Python 3.10+ 标准库已自带），并将 `jinja2` 移至 admin 扩展以精简核心计算侧依赖。
- **[[Feature] Sandbox 启动逻辑重构 (#1050)](https://github.com/alibaba/ROCK/issues/1050)**
  - **摘要**: 当前同步 `start()` 和 `start_async()` 存在两套独立的启动流，容易导致元数据（meta store）写入丢失，提议统一走 `start_async` 路径。
- **[[Feature] Sandbox SDK 暴露 GPU 与加速器配置 (#1044)](https://github.com/alibaba/ROCK/issues/1044)**
  - **摘要**: 提议在 Sandbox SDK 配置中直接暴露 `num_gpus` 和 `accelerator_type`，以摆脱单一 Nacos 布尔值开关的限制，实现更精细的底层算力调度。
- **[[Bug] SandboxManager.stop() 边界条件漏写 stop_time (#1018)](https://github.com/alibaba/ROCK/issues/1018)**
  - **摘要**: 当 `start_time` 缺失时，`stop()` 会跳过写入 `stop_time`，导致下游 `SandboxLogArchiveTask` 出现级联故障。

---

## 4. 关键 PR 进展
今日合入及更新的 PR 包含大量 Scheduler 后台任务的重构与 CLI/SDK 增强。

**依赖与兼容性修复：**
- **[fix: 修复 oss2 默认版本安装错误的问题 (#1055)](https://github.com/alibaba/ROCK/pull/1055) / [#1048](https://github.com/alibaba/ROCK/pull/1048)**: 将最低版本锁定为 `>=2.19.1`，修复 API 崩溃。
- **[chore: 移除 uuid 并将 jinja2 降级为 admin extras (#1054)](https://github.com/alibaba/ROCK/pull/1054)**: 执行项目依赖精简计划。

**Sandbox 核心流与 API 修复：**
- **[refactor: start() 委托给 start_async() 以修复状态丢失 (#1051)](https://github.com/alibaba/ROCK/pull/1051)**: 统一了 Sandbox 的启动路径，确保 meta store 写入逻辑一致。
- **[fix: 修复 stop_time 未写入的 Bug (#1020)](https://github.com/alibaba/ROCK/pull/1020)**: 将 `stop_time` 赋值移出 `if start_time` 的守卫条件。
- **[feat: SDK 支持暴露 GPU 相关参数 (#1047)](https://github.com/alibaba/ROCK/pull/1047)**: 实现了 Issue #1044 中对多卡/异构加速器配置的支持。
- **[fix: sanitize Harbor job names 拒绝路径分隔符 (#1031)](https://github.com/alibaba/ROCK/pull/1031)**: 修复了任务名称可能生成类似路径结构的隐患。

**Scheduler 与后台清理任务重构（健壮性提升）：**
- **[feat: DB 驱动的 SandboxLogArchiveTask 替换哨兵文件设计 (#1025)](https://github.com/alibaba/ROCK/pull/1025)**: 放弃文件标记，改用数据库状态作为日志归档任务的单一事实来源。
- **[feat: RayLogCleanupTask 4 阶段清理机制 (#1029)](https://github.com/alibaba/ROCK/pull/1029)**: 针对 Ray 的 `session_latest/logs` 实现感知 PID 且安全的 4 阶段清理。
- **[perf: FileCleanupTask 切换至 find -delete 及增加路径黑名单 (#967)](https://github.com/alibaba/ROCK/pull/967)**: 提升文件清理性能并增加系统级高危路径阻断。
- **[fix: 拆分 ImageCleanupTask 幂等逻辑与 docuum 启动 (#1023)](https://github.com/alibaba/ROCK/pull/1023)**: 解耦了镜像修剪与守护进程启动，避免重复拉起。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从“能用”向“企业级健壮性”演进**：从今日的 Issue/PR 密集度可以看出，ROCK 正在集中清理状态机（Sandbox 生命周期管理）和后台守护进程中的“Race Condition”与边界条件 Bug。DB 驱动替代文件哨兵的设计，标志着其正在为大规模分布式集群的长时间稳定运行铺路。
2. **精细化异构算力管理**：随着大语言模型（LLM）与 RLHF（基于人类反馈的强化学习）的深度融合，RL 环境对 GPU 的调度不再是简单的开关逻辑。此次 SDK 暴露 `num_gpus` 和 `accelerator_type` 的变更，说明 ROCK 正在积极适应多卡、异构芯片场景下的算力隔离与复用需求。
3. **关注底层效率与依赖安全**：通过重构清理任务（`find -delete` 优化）、大幅修剪冗余依赖（清理陈年的 PyPI `uuid` 包，修复 `oss2` 依赖解析），项目在降低部署 footprint 的同时，排除了潜在的供应链隐患。

对于致力于构建大规模、长周期 RL 训练集群（尤其是搜索、推荐、Agent 及 RLHF 场景）的工程团队而言，ROCK 在任务调度、沙箱隔离及算力池化方面的最新迭代具有极高的参考与直接应用价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 项目 2026-06-02 RL 日报摘要：

---

# 📊 Slime RL 日报摘要 (2026-06-02)

**数据统计周期**：过去 24 小时 | **Issues 更新**：3 条 | **PR 更新**：7 条 | **新版本发布**：0 个

## 1. 今日速览
过去 24 小时，slime 仓库保持较高的社区活跃度。核心焦点集中在**多智能体 GRPO 训练的稳定性修复**、**底层分布式训练与推理引擎（Megatron / SGLang）的兼容性适配**，以及**多轮智能体蒸馏技术方案（TCOD）的社区提案**。尽管无新版本发布，但多项关键 Bug 修复 PR 已合并，显著提升了框架的鲁棒性。

## 2. 版本发布
**无新版本发布**。

## 3. 重点 Issues
- **[提案] 引入 TCOD 扩展多轮智能体蒸馏**：社区开发者提议将已发表的 TCOD (arXiv:2604.24005) 方法引入 slime，通过时间课程扩展现有的单轮 OPD（On-Policy Distillation）范例，以支持多轮智能体。([#2002 OPEN](https://github.com/THUDM/slime/issues/2002))
- **[缺陷] 多智能体 GRPO 优势计算报错**：`examples/multi_agent` 模块在执行时，因缺失旧策略的 log probabilities 导致 GRPO 优势计算中发生 `NoneType` 崩溃（此 Issue 已通过 PR #1995 解决）。([#1976 CLOSED](https://github.com/THUDM/slime/issues/1976))
- **[疑问] Qwen3-30B-A3B 显存与内存优化溢出**：在使用 8xH100 结合 `--optimizer-cpu-offload` 训练时，1TB 内存节点在 Step 2 阶段遭遇 OOM，引发对大规模模型 CPU 内存推荐配置的讨论。([#1851 CLOSED](https://github.com/THUDM/slime/issues/1851))

## 4. 关键 PR 进展
### 核心错误修复与稳定性提升
- **解决重试机制下的 response_length 溢出**：修复了 `fully_async_rollout` 中断的样本（ABORTED samples）被重新放入数据缓冲区时，`response_length` 带有部分输出导致溢出的问题，通过 clamp `max_new_tokens` 增强了容错性。([#2003 OPEN](https://github.com/THUMD/slime/pull/2003))
- **保留多智能体 Rollout Logprobs**：修复 Issue #1976。通过在 SGLang 返回 `output_token_logprobs` 时保留 token 级别的 logprobs，并在 GRPO 脚本中启用 `--use-rollout-logprobs`，确保多智能体训练正常进行。([#1995 CLOSED](https://github.com/THUDM/slime/pull/1995))
- **Megatron 梯度累积融合配置生效**：修复了在使用 `megatron.bridge` 时，CLI 传入的 `--no-gradient-accumulation-fusion` 参数被静默忽略的问题，保障了底层显存优化的可控性。([#1999 OPEN](https://github.com/THUDM/slime/pull/1999))

### 生态兼容与文档更新
- **SGLang GPT-OSS 权重转换适配**：修复了非共存模式下 Megatron 到 HF 格式的转换问题，使 GPT-OSS 专家张量能够输出 SGLang 所需的融合张量格式。([#2004 OPEN](https://github.com/THUDM/slime/pull/2004))
- **GLM5 SFT 支持**：增加了针对 GLM5 模型的特定 SFT 损失掩码和终止符支持，并补充了相关的训练启动脚本。([#1844 OPEN](https://github.com/THUDM/slime/pull/1844))
- **文档补充与链接修复**：新增了针对自定义 Rollout 函数的交互式逐步调试教程；修复了 `agent.md` 中同步示例的失效链接。([#2001 CLOSED](https://github.com/THUDM/slime/pull/2001), [#2000 OPEN](https://github.com/THUDM/slime/pull/2000))

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击 LLM RLHF 核心痛点**：Slime 正在快速解决基于大模型（如 30B 级别）进行 GRPO 等 RL 算法训练时的显存/内存墙（CPU Offload OOM 问题）和训练稳定性问题（如异常样本重试溢出、Logprobs 缺失）。
2. **深度适配高性能底层引擎**：项目与 **Megatron** 和 **SGLang** 等高性能分布式训练/推理框架保持着紧密的生态跟进与修复，这对于追求高吞吐量和大规模集群扩展的 RL 研究至关重要。
3. **向多轮智能体演进**：从社区的最新提案（TCOD）和近期的代码更新可以看出，Slime 正在将重心从单一回合的 RLHF 调优，向更复杂的 **多智能体交互** 与 **多轮蒸馏** 场景拓展，这是目前 RL 赋能 LLM Agent 发展的最前沿方向。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-06-02）：

# AReaL RL 日报摘要 (2026-06-02)

## 1. 今日速览
过去 24 小时内，AReaL 项目保持活跃的开发势头，无新版本发布，但新增了 2 条重要的 Roadmap Issues 和 3 条关键的技术 PR。核心焦点集中在 **2026 年下半年规划发布**、**FP8 混合精度训练与推理优化** 以及 **RL 训练过程追踪能力的增强**。

## 2. 版本发布
- **无新版本发布**（近期 Releases 为空）。

## 3. 重点 Issues
项目在路线图管理上有了重要更新，进一步明确了中长期的技术演进方向。

- **AReaL 2026 H2 Roadmap 正式发布**
  - **标签**: `[call-for-contribution, roadmap]`
  - **概述**: 建立了 2026 年下半年的开发里程碑追踪，主要划分为“正在进行中”和“待启动”类别，向开源社区明确指出了可参与贡献的重点领域。
  - **链接**: [areal-project/AReaL Issue #1381](https://github.com/areal-project/AReaL/issues/1381)

- **AReaL 2026 Q2 Milestones 持续推进**
  - **标签**: `[call-for-contribution, roadmap]`
  - **概述**: 原定于 7 月 31 日截止的 Q2 里程碑计划仍在推进中，当前已有 8 条社区讨论，是把握项目近期落地功能的重要参考。
  - **链接**: [areal-project/AReaL Issue #1302](https://github.com/areal-project/AReaL/issues/1302)

## 4. 关键 PR 进展
今日的 PR 更新主要涉及底层性能优化和工程化缺陷修复，技术含量高。

- **[Feature] 全面引入 FP8 实现以支持 FSDP + SGLang 架构**
  - **作者**: ZiyiTsang
  - **概述**: 在旧有代码路径中实现了完整的 FP8 支持。该 PR 允许在 SGLang 推理阶段使用 FP8 block-wise 量化，同时保持 FSDP 训练阶段的 BF16 精度。核心逻辑在于训练引擎在通过 NCCL 广播给 SGLang 之前，在线将 BF16 权重量化为 FP8，从而大幅降低显存占用与通信开销。
  - **链接**: [areal-project/AReaL PR #1379](https://github.com/areal-project/AReaL/pull/1379)

- **[Feature] 集成 Trackio 实现 Rollout Trace 日志记录**
  - **作者**: abidlabs
  - **概述**: 扩展了现有的 Hugging Face Trackio metrics 后端，新增了 Trace 级别的日志记录功能，为 RL 算法开发中的 Rollout 阶段提供了更精细的局部实验追踪能力。
  - **链接**: [areal-project/AReaL PR #1360](https://github.com/areal-project/AReaL/pull/1360)

- **[Fix] 修复单控制器模式下的冗余 CUDA 同步问题**
  - **作者**: Adiactive
  - **概述**: 修复了 `RLTrainer` 在单控制器模式下的逻辑缺陷。在单控制器下，Trainer 仅作为纯调度器（通过 RPC 指令 worker 且不持有 GPU 资源），但在此前仍会无条件触发 `synchronize()` 同步。此 PR 通过跳过控制器端的 CUDA 同步，减少了不必要的等待开销。
  - **链接**: [areal-project/AReaL PR #1377](https://github.com/areal-project/AReaL/pull/1377)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **探索极致的系统性能边界**：通过 PR #1379 可以看出，AReaL 正在深度攻坚大模型 RLHF 中的显存与通信瓶颈，将训练侧的 BF16 与推理侧的 SGLang (FP8) 进行混合编排，这在开源 RL 框架中属于极具技术壁垒的前沿探索。
2. **强化实验可观测性**：随着 RL 轨迹追踪（Trace logging）的引入，开发者在调试复杂的 LLM 策略梯度算法时将获得更好的可视化与可解释性支持。
3. **清晰的社区驱动路线图**：从 Q2 延续到 H2 的开源路线图双轨并行，不仅展现了项目长期演进的稳定性，也为外部开发者提供了高度透明的贡献切入点。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-06-02 RL 日报摘要。

---

# 🤖 Hugging Face TRL 开源生态 RL 日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度，无新版本发布。社区与核心开发团队的重心集中在 **Agent 环境强化学习的架构设计**、**异步 GRPO 训练器的完善** 以及 **显存/计算优化**。全天共处理更新 Issues 11 条，PR 18 条。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[架构讨论] Agent RL 训练环境与数据集解耦**：核心开发者提出 RFC，建议在 `GRPOTrainer` 及 `AsyncGRPOTrainer` 中，将数据集的所有权下放给环境侧，而非由 Trainer 主导采样。这标志着 TRL 正在为更复杂的 Agent 交互式 RL 做底层架构准备。
  🔗 [huggingface/trl Issue #5903](https://github.com/huggingface/trl/issues/5903)
- **[Bug 报告] Checkpoint 恢复失效**：有用户指出使用 PPO/RLOOTrainer 时，`resume_from_checkpoint` 无法正常工作，怀疑底层未实现模型权重加载机制，目前需提供更多复现信息。
  🔗 [huggingface/trl Issue #2657](https://github.com/huggingface/trl/issues/2657)
- **[CI 异常] 最低依赖版本下梯度不匹配**：CI 测试在最低依赖版本下抛出 `AssertionError: gradient mismatch`，影响了 SFT Trainer 的部分测试用例。
  🔗 [huggingface/trl Issue #5874](https://github.com/huggingface/trl/issues/5874)

## 4. 关键 PR 进展
今日 PR 动态主要集中在**异步架构引入**、**多模态支持**与**内核级性能优化**。

- **异步与 Agent RL 架构优化**：
  - **异步 Rollout 解耦**：将 rollout 循环移至独立子进程，解除 Autograd 引擎与复杂奖励解析计算之间的 GIL（全局解释器锁）竞争。
    🔗 [huggingface/trl PR #5749](https://github.com/huggingface/trl/pull/5749)
  - **异步 GRPO 补齐核心特性**：新增对 `ProcessorMixin` 和 PEFT/LoRA 的支持，使得异步训练在多模态和轻量级微调场景下可用。
    🔗 [huggingface/trl PR #5895](https://github.com/huggingface/trl/pull/5895) | [#5896](https://github.com/huggingface/trl/pull/5896)
  - **GRPO/RLOO 奖励空值修复**：修复当所有奖励函数返回 `None` 时导致 NaN 转为 0.0 从而污染 Baseline 的问题。
    🔗 [huggingface/trl PR #5902](https://github.com/huggingface/trl/pull/5902)

- **多模态 (VLM) 修复与拓展**：
  - **截断导致的特征维度失配**：修复了在使用 Qwen3.5 等 VLM 训练时，Tokenizer 截断图像占位符导致特征与 Token 不匹配的报错。
    🔗 [huggingface/trl PR #5904](https://github.com/huggingface/trl/pull/5904)
  - **GOLD 算法支持 VLM**：拓展了 `GOLDTrainer` 对视觉语言模型的支持。
    🔗 [huggingface/trl PR #5461](https://github.com/huggingface/trl/pull/5461)

- **显存与计算优化**：
  - **KTO 对齐 DPO 流水线**：为 KTO 引入 Activation Offloading（激活值卸载至 CPU）以及参考模型前向传播时的梯度检查点禁用机制，大幅降低显存峰值。
    🔗 [huggingface/trl PR #5901](https://github.com/huggingface/trl/pull/5901) | [#5900](https://github.com/huggingface/trl/pull/5900)
  - **SFT 几余计算裁剪**：将 `SFTTrainer` 中的熵与准确率计算合并至同一个 `torch.no_grad()` 块中，消除了冗余的 Logits 拷贝。
    🔗 [huggingface/trl PR #5897](https://github.com/huggingface/trl/pull/5897)

- **实验性算法修正**：
  - **GOLD 算法概率计算修正**：修复了实验性 GOLD trainer 中的 `ULDLoss` 联合概率计算未遵循贝叶斯公式的 Off-by-one 错误。
    🔗 [huggingface/trl PR #5905](https://github.com/huggingface/trl/pull/5905)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **从“离线对齐”全面走向“在线 Agent 交互”**：从 RFC #5903 可以看出，TRL 正在重构底层的数据流转机制。将数据集控制权交给环境，意味着 TRL 正在摆脱传统的静态偏好数据集训练，向支持复杂多轮对话、工具调用和游戏环境的真实 Agent RL 场景演进。
2. **打破 RL 训练的工程瓶颈**：PR #5749 通过将 Rollout 移出主进程解决 GIL 竞争，配合 vLLM 权重映射修复 (PR #5858) 和 Liger 内核适配 (PR #5890)，表明项目组正在死磕大模型 RL 的核心痛点——生成与训练的异步调度效率及显存墙问题。
3. **多模态 RL 的快速收敛起效**：无论是 GRPO、GOLD 还是 SFT，近期的 PR 都在集中解决 VLM（如 Qwen3.5）在 RLHF 阶段的 Image Token 截断、多模态处理器适配等边界 Bug，TRL 正在成为大模型多模态对齐的事实标准基础设施。

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

# verl RL 生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，verl (github.com/volcengine/verl) 仓库保持高度活跃：共计处理 **7 条 Issue**（含多个架构级 RFC）和 **36 条 PR** 更新，并正式发布了包含多项底层架构重构的 **v0.8.0** 新版本。项目当前重心明显聚焦于 **Agent 多轮交互抽象、Megatron 极致扩展性优化以及后训练基础设施的稳定性提升**。

## 2. 版本发布
### [v0.8.0](https://github.com/volcengine/verl/releases/tag/v0.8.0)
本次大版本更新主要强化了训练后端的深度与性能，核心 Highlights 包括：
- **Megatron 后端全面进化**：引入 Megatron-FSDP 混合模式 (#5423)；支持动态上下文并行及 BSHD 格式 (#5057, #5826)；新增 HF PEFT 格式 Checkpoint 保存 (#5575)。
- **前沿模型与算法支持**：原生支持 Qwen3.5 MTP 的 SFT/RL 训练流程 (#5898)。
- **量化感知训练 (QAT)**：集成 ModelOpt 实现 NVFP4 (W4A16) 量化训练 (#5254)。

## 3. 重点 Issues
今日的 Issues 集中在架构演进规划和底层 Bug 修复，反映了社区对 Agentic RL 和大规模集群训练的迫切需求。

- **[#5790](https://github.com/volcengine/verl/issues/5790) [RFC] Agent Abstractions and Trajectory Gateway** (👍 22)
  提出全新的 `AgentFramework` 抽象基类与 Trajectory Gateway，旨在解耦并替代当前重度绑定的 Agent 生命周期管理与奖励计算逻辑，为复杂 Agentic RL 铺路。
- **[#6225](https://github.com/volcengine/verl/issues/6225) [Feature Proposal] Colocated Checkpoint Engine** 
  来自阿里 Qwen 团队的提案。针对 Megatron trainer + SGLang rollout 共置场景（训练 MoE/VL 模型），提出混合权重同步的 Checkpoint 引擎，以减少访存开销。
- **[#6552](https://github.com/volcengine/verl/issues/6552) [RFC] TCOD: Temporal Curriculum for Multi-turn Agent On-Policy Distillation**
  作者（TCOD论文作者）志愿实现基于 verl OPD 核心的多轮 Agent 在线策略蒸馏与时序课程学习方案。
- **[#5559](https://github.com/volcengine/verl/issues/5559) [Feature] Support Decoupled Speculation for SGLang Rollout**
  提议引入解耦推测机制以大幅加速 LLM 后训练中的 Rollout 阶段。
- **Bug 修复聚焦**：社区连续报告了使用 vLLM 训练 Qwen3.5 时的多个严重问题，包括内存非法访问 ([#6549](https://github.com/volcengine/verl/issues/6549))、模板解析错误 ([#6501](https://github.com/volcengine/verl/issues/6501)) 及初始化失败 ([#6563](https://github.com/volcengine/verl/issues/6563))。

## 4. 关键 PR 进展
PR 动态围绕系统鲁棒性、安全漏洞修补和新模型支持展开。

- **性能与底层优化**：
  - [PR #6564](https://github.com/volcengine/verl/pull/6564): 修复 Packed 序列训练中 `rmpad` 导致的 next-token 标签跨越样本边界的严重标签泄漏问题。
  - [PR #6389](https://github.com/volcengine/verl/pull/6389): 精确测算 Qwen3.5 混合注意力机制（含 GatedDeltaNet）的 MFU/FLOPs，完善监控指标。
  - [PR #5990](https://github.com/volcengine/verl/pull/5990): 为全异步训练链路引入独立的 Log Prob Server，解耦 actor 训练引擎，消除权重存取瓶颈。

- **系统安全与鲁棒性**：
  - [PR #6542](https://github.com/volcengine/verl/pull/6542): 修复 Qwen3 tool parser 中的任意代码执行（ACE）漏洞，移除了不安全的 `eval()` 函数调用。
  - [PR #6544](https://github.com/volcengine/verl/pull/6544): 修复 Reward Router 在重试失败后未释放 worker count 导致的资源泄漏死锁问题。

- **前沿模型与分布式支持**：
  - [PR #6559](https://github.com/volcengine/verl/pull/6559): 使 Megatron `GatedDeltaNet` (GDN) 支持序列并行的 Packed THD 输入。
  - [PR #6525](https://github.com/volcengine/verl/pull/6525): 增加对 `glm_moe_dsa` 模型的 FSDP 训练支持（含动态稀疏注意力）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **从小规模 RLHF 向超大规模 Agentic RL 的范式跃迁**：项目不仅在修 Bug，更在酝酿架构重构（Issue #5790, #6552）。通过引入网关和高级抽象，verl 正在将自己从单纯的 PPO 框架升级为支持多轮、多教师、课程学习的全周期 Agent 训练平台。
2. **工业级极致性能压榨**：无论是支持 NVFP4 的 QAT、Megatron-FSDP 混合模式，还是彻底解耦 Log Prob 计算引擎，verl 始终紧跟（甚至引领）当前万卡级 MoE 和 VL 模型的底层性能优化前沿。
3. **极高的工程严谨度**：单日即合入多个关键内存泄漏、标签越界、乃至任意代码执行的修复 PR。对于一个高速迭代的开源项目而言，这种对系统稳定性和安全性的快速响应，是其能在真实工业级部署中立足的核心壁垒。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-06-02 Open Instruct 强化学习（RL）生态日报摘要：

# 📊 Open Instruct RL 生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库整体趋于平稳。无新增 Issue 和版本发布，但有两个处于 `[OPEN]` 状态的 PR 带来了关键的底层优化与生态更新：主要涉及 GRPO 训练死锁修复及新增 MiniMax-M3 模型的评判计费支持。

## 2. 版本发布
- **无**。当前仓库代码库稳定，无最新 Release 发布。

## 3. 重点 Issues
- **无**。过去 24 小时内无新增或更新的 Issue。

## 4. 关键 PR 进展

- **PR #1708: [修复] GRPO OLMo-core 簿记 PG 死锁及 Qwen3 同步微调**
  - **作者**: finbarrtimbers
  - **链接**: [allenai/open-instruct PR #1708](https://github.com/allenai/open-instruct/pull/1708)
  - **核心内容**: 解决了在 OLMo-core 框架下运行 GRPO 训练时，`reduce_metrics` 操作导致的进程组 (PG) 死锁问题。根因是当 `num_steps <= 0` 时，某些 rank 的 metrics 为空，触发了 OLMo-core 跳过提交的逻辑。修复方案是在所有步骤中记录 `_metrics_keepalive` 指标以保持同步。此外，该 PR 还包含了对 Qwen3 模型的兼容性微调。
  - **生态意义**: 直接提升了主流 RL 算法 (GRPO) 在底层的分布式训练稳定性。

- **PR #1712: [功能] 将 MiniMax-M3 添加至 Judge 计费表**
  - **作者**: octo-patch
  - **链接**: [allenai/open-instruct PR #1712](https://github.com/allenai/open-instruct/pull/1712)
  - **核心内容**: 在 `judge_utils.py` 中注册了最新的 MiniMax 旗舰模型 (`minimax-m3`)，输入价格设定为 `0.6`，输出设定为 `2.4`，以确保在 RL 训练的 Reward 阶段使用该模型作为 Judge 时，费用追踪系统 (`ground_truth_utils.py`) 能正常运作。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

Open Instruct 依然是开源社区中跟进 LLM 后训练（尤其是强化学习反馈 RLHF/GRPO）工程化实践的一线阵地。从今日的 PR 动态可以看出其两大核心价值：
1. **直击分布式 RL 训练痛点**：PR #1708 修复了多卡/多节点分布式训练下的底层死锁问题，并紧跟 Qwen3 等前沿开源模型，为研究者和工程师提供了即插即用的 RL 基础设施保障。
2. **快速迭代 RL 奖励基础设施**：随着模型评判在 RL 过程中变得不可或缺，该项目对最新模型（如 MiniMax-M3）计费和调用的快速支持，展示了其在构建自动化、成本透明的 RL 闭环工作流方面的工程价值。

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

过去24小时无活动。

</details>