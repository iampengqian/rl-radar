# RL 开源生态日报 2026-06-23

> 生成时间: 2026-06-22 22:30 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态正呈现出显著的分层演化趋势。以 verl、TRL、AReaL、slime 和 OpenRLHF 为代表的“大模型 RLHF/Agent 训练框架”正处于极高强度的技术迭代期，全面向着全异步训练、超长上下文支持及复杂智能体闭环演进。相比之下，以 Gymnasium 为代表的经典强化学习（传统状态/动作空间）环境接口则步入高度稳定的平台维护期。此外，以阿里巴巴 ROCK 为代表的调度与平台工程项目，正通过打磨云原生底座，着力解决大规模分布式训练下的系统稳定性与多语言工程接入难题。

## 各项目活跃度对比
大模型对齐与分布式训练基建是今日的绝对核心，产生了密集的 Issue 讨论与 PR 提交；而传统 RL 及部分成熟框架趋于静默。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 19 | 24 | 0 | 攻坚全异步训练与多模态 Agent，深化昇腾 NPU 适配 |
| **TRL** | 20 | 22 | 0 | 推进 AsyncGRPO 稀疏同步，底层死锁修复，支持复杂 Agent 环境 |
| **AReaL** | 0 | 19 | 0 | 极速工程化前沿算法（CISPO, Muon），攻克 FP8 显存与通信墙 |
| **ROCK** | 2 | 6 | 0 | 聚焦系统级容错，完善多语言 SDK，强化云原生生命周期管理 |
| **slime** | 0 | 6 | 0 | 修复 PPO 底层计算原位修改 Bug，增强 SWE 智能体支持 |
| **OpenRLHF** | 0 | 1 | 0 | 深耕多轮对话与 Tool-use 场景下的 Token Mask 精准度 |
| **Open Instruct** | 1 | 0 | 0 | 暴露并复盘分布式梯度累加下 Loss 缩放导致的学习率失准 Bug |
| **Gymnasium** | 0 | 1 | 0 | 常规 CI 依赖升级，核心 API 维持稳定 |
| **其余无活动项目** | 0 | 0 | 0 | CleanRL, PettingZoo, Tianshou, SB3 等处于功能稳定期 |

## 共同关注的研究与工程方向
**研究侧信号**
- **算法鲁棒性与防坍缩**：开发者愈发重视策略优化的底层稳定性。例如 TRL 为 GRPO 添加熵正则化以防策略坍缩；AReaL 引入 MiniMax-M1 的 CISPO loss 解决采样比率越界导致的梯度消失问题；verl 则引入 CPPO 算法提升自回归生成的效果。
- **长序列与多轮 Agent 交互**：LLM 训练正在从单轮偏好对齐向复杂的“智能体强化学习（RLVR）”演进。verl、TRL、slime 和 OpenRLHF 均在大力发展多环境交互、多轮 Tool-call 支持，以及针对带工具调用轨迹的精准奖励解析与 Token 掩码。

**工程/基础设施侧信号**
- **“全异步”与通信墙攻坚**：为打破生成与训练的串行算力闲置，全异步成为主战场。verl 修复了异步空闲率掩盖 Bug 并引入 Replay Buffer；TRL 实现了 AsyncGRPO 的稀疏权重同步；AReaL 则推进了 Megatron FP8 权重直传。
- **多模态与异构硬件适配**：底层框架正在加速“脱钩”单一 Nvidia 生态。verl 适配 GLM-4.1V 多模态并在重构昇腾 NPU 模块；TRL 社区验证了在华为 910B 上运行 GRPO 的可行性。
- **底层算子级 Bug 清算**：大规模分布式训练的隐蔽陷阱被不断曝光并修复，如 Open Instruct 暴露的梯度累加 Loss 求解错误，以及 slime 修复的 PPO 指标原位修改内存 Bug。

## 差异化定位分析
- **verl & TRL（生态核心驱动者）**：两者是当前大模型 RL 领域迭代最迅猛的开源双子星。verl 强调异构硬件平价与全栈异步攻坚；TRL 则更紧密地绑定 HuggingFace 生态，侧重与 vLLM/PEFT/FSDP 等主流组件的无缝集成与前沿算法下沉。
- **AReaL（前沿算法工业化试验场）**：专注于将最新的 SOTA 概念（Muon 优化器、百灵 MoE 桥接）极速转化为稳定的分布式代码，同时在 FSDP2 和 Megatron 双后端的底层显存优化上建立护城河。
- **ROCK（大规模容错调度底座）**：跳出纯算法视角，ROCK 聚焦于“平台工程”。通过完善多语言 SDK、解决 K8s 环境下 OOM 导致的磁盘泄漏和沙箱生命周期管理，为超长周期的 RL 任务提供企业级的高可用保障。
- **slime & OpenRLHF（精细化深水区打磨者）**：重点优化 Train-Engine 的极致绑定（如 slime 对 SGLang 同步的容错处理）以及复杂多轮对话场景下的张量级对齐（如 OpenRLHF 对 action_mask 的精确剥离）。
- **Gymnasium & Open Instruct（基石与基准）**：前者作为传统 RL 算法无可替代的环境标准接口处于长续航维护；后者则作为大模型复现（如 Tulu 3）的权威基准，持续为社区提供排错的高信噪比参考。

## 社区热度与成熟度
当前社区热度高度集中于 LLM RLHF 框架（verl, TRL），其 Issue 活跃度体现了极强的工业界落地诉求。相比之下，AReaL 与 slime 展现出“核心团队强势驱动”的特征（高 PR，低公开 Issue 讨论），说明其架构演进正处于内部高速迭代的深水区。ROCK 的动态反映了大规模平台在度过原型期后，向云原生成熟度（容错、多语言、生命周期管理）迈进的必然趋势。传统 RL 生态（Gymnasium 等）社区热度已趋于长尾平稳。

## 值得关注的趋势信号
1. **异步 RLHF 全面进入工程深水区**：从解决资源空闲计算（idle_ratio）、优化器同步 Bug 到引入队列背压与 Replay Buffer，异步范式不再是纸上谈兵，而是各大框架比拼系统级架构设计的主阵地。
2. **异构算力生态（NPU）的加速破局**：昇腾（Ascend）NPU 正在快速融入主流开源 RL 栈。verl 的模块重构与 TRL 在 910B 上的成功跑通，标志着非 Nvidia 硬件在大规模分布式 RL 场景下的可用性正在质变。
3. **大词汇量与长序列引发的“内存与计算危机”**：无论是 TRL 针对大词汇量（Vocab ≥ 64k）的 SFT 内存优化，还是 verl 曝光的 10k+ 长序列优势函数计算耗时超万秒的瓶颈，都预示着下一阶段的框架竞争，将极大程度取决于谁能在底层数值计算（如 FP8）与分布式显存调度上取得平衡。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) RL 生态开源日报 - 2026.06.23**

### 1. 今日速览
过去 24 小时内，ROCK 项目代码库活跃度集中于系统稳定性增强与 SDK 对齐。共有 2 条 Issue 更新（1 新建，1 关闭），6 条 PR 更新（2 关闭，4 进行中），无新版本 Release 发布。今日核心焦点在于：多语言 SDK（Python/TypeScript）的功能对齐、OSS 存储鉴权修复，以及沙箱日志归档系统的生命周期管理。

### 2. 版本发布
*   **今日无新版本发布。**
*   注：PR [#1140](https://github.com/alibaba/ROCK/pull/1140) 修正了 v1.9.0 版本的正式发布日期为 2026 年 6 月 11 日。

### 3. 重点 Issues
*   **[#1143] [OPEN] SDK OSS 上传/下载抛出 403 AccessDenied 错误**
    *   **作者**: jinbai340997
    *   **摘要**: 在 ROCK SDK ≥ 1.8 版本中，即使 Admin 返回的 STS 凭证有效，Python 和 TypeScript SDK 在通过 OSS 传输文件时仍会失败。根本原因在于 SDK 与 OSS 通信时存在配置层的不匹配。
    *   **链接**: [alibaba/ROCK Issue #1143](https://github.com/alibaba/ROCK/issues/1143)
*   **[#1141] [CLOSED] 归档进程被杀导致 `/tmp/sb-archive-*` 临时目录泄漏**
    *   **作者**: jinbai340997
    *   **摘要**: `SandboxLogArchiveTask` 创建的临时打包目录在遭遇 SIGKILL（如 OOM 或部署重启）时，因无法触发 bash `trap` 清理指令而泄漏，最终导致 Worker 节点磁盘空间告警。此问题已在相关 PR 中修复并关闭。
    *   **链接**: [alibaba/ROCK Issue #1141](https://github.com/alibaba/ROCK/issues/1141)

### 4. 关键 PR 进展
*   **[#1137] [OPEN] feat(ts-sdk): TypeScript SDK 与 Python SDK 全面对齐**
    *   **作者**: xdlkc
    *   **摘要**: 补齐 TypeScript SDK 功能，实现 8 个核心模块的跨语言对齐。新增 50+ 文件及 400+ 测试用例，涵盖 Benchmark 配置、Job/Trial 执行系统等核心链路。
    *   **链接**: [alibaba/ROCK PR #1137](https://github.com/alibaba/ROCK/pull/1137)
*   **[#1095] [OPEN] feat(archive): 将归档生命周期集成至沙箱状态机及 Reconciler**
    *   **作者**: zhangjaycee
    *   **摘要**: 重大架构更新。引入包含 `pending` / `running` / `stopped` / `archiving` / `archived` / `deleted` 的 6 态状态机，将日志归档深度集成至沙箱的操作器和调度器中。
    *   **链接**: [alibaba/ROCK PR #1095](https://github.com/alibaba/ROCK/pull/1095)
*   **[#1144] [OPEN] fix(sdk): Server-first OSS 配置解析与 Prefix 感知**
    *   **作者**: jinbai340997
    *   **摘要**: 针对 Issue #1143 的修复。采用服务端优先的 OSS 配置解析策略，并生成 Prefix 感知的对象 Keys。纯 SDK 端修复，无需改动服务端 Admin 契约。
    *   **链接**: [alibaba/ROCK PR #1144](https://github.com/alibaba/ROCK/pull/1144)
*   **[#1142] [CLOSED] fix(archive): 临时目录自愈清理与软信号 Trap**
    *   **作者**: jinbai340997
    *   **摘要**: 针对 Issue #1141 的修复。增加了对陈旧 `sb-archive-*` 临时目录（>2小时）的定期清理机制（防 SIGKILL 残留），并在 shell 中 Trap 了 SIGTERM/SIGHUP 等软中断信号，确保 Kubernetes 滚动更新时能正常触发清理。
    *   **链接**: [alibaba/ROCK PR #1142](https://github.com/alibaba/ROCK/pull/1142)
*   **[#1058] [OPEN] fix(common): 修复 RockResponse 错误码抛出及 Pydantic 强制转换问题**
    *   **作者**: jake11-oho
    *   **摘要**: 解决了 FastAPI 的 Pydantic 类型强制转换破坏异常处理包装器 `RockResponse` 的问题，确保端点声明如 `RockResponse[str]` 时，错误信息不被丢失。
    *   **链接**: [alibaba/ROCK PR #1058](https://github.com/alibaba/ROCK/pull/1058)

### 5. 为什么值得在当前 RL 生态继续关注？
大规模强化学习（RL）训练的痛点往往不在于算法本身，而在于底层基础设施的稳定性。今日 ROCK 的更新精准命中了 RL 平台工程的几个核心挑战：
1. **多语言生态支持**：通过 PR #1137 实现 Python/TS SDK 的全面功能对齐，意味着 ROCK 正在降低前端平台与底层算力调度的集成门槛，适应更广泛的工程栈。
2. **云原生与高可用容错**：RL 训练通常涉及海量 Trial 的并发与频繁的 Checkpoint 读写。PR #1095 对沙箱生命周期（特别是 `archiving` 态）的精细化管理，以及 PR #1142 针对 K8s 环境下进程被杀（OOM/驱逐）导致的“磁盘泄漏”自愈机制，展示了该项目在应对大规模分布式集群真实脏乱环境时的工程硬实力。对于需要长时间运行、容错要求极高的 RL 任务而言，这类底层基建的打磨至关重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 slime (THUDM/slime) RL 生态日报 | 2026-06-23

作为一名专注于强化学习（RL）开源生态的项目分析师，以下是为您梳理的 slime 项目最新动态。

## 1. 今日速览
- **Issues 动态**：0 条更新。
- **PR 动态**：6 条更新（5 个功能性/修复 PR 活跃，1 个 CI 同步 PR 已关闭）。
- **版本发布**：0 个。
- **总体基调**：项目当前处于密集的代码维护与 Bug 修复阶段。开发者正集中精力修复 PPO 核心指标计算、分布式权重同步异常处理、智能体资源回收及奖励模型逻辑解析等底层执行链路问题。

## 2. 版本发布
**无新版本发布。** 当前代码仍在持续整合与修复中，预计团队正在为下一个大版本或重要特性做铺垫。

## 3. 重点 Issues
**今日无 Issue 更新。** 社区反馈相对平缓，项目当前的迭代动力主要源自核心开发团队（Core Dev）的直接代码提交与内部缺陷追踪。

## 4. 关键 PR 进展

### 核心算法与指标修复
- **[OPEN] fix(ppo): stop corrupting the logged rollout/kl metric** by ErazyReal
  - **链接**: [THUDM/slime PR #2114](https://github.com/THUDM/slime/pull/2114)
  - **简评**: **高危 Bug 修复**。在 PPO 估算器中，计算优势函数时会将近似 KL 散度转化为奖励信号并进行**原位修改**。这导致后续日志记录的 `rollout/kl` 指标被污染（变为奖励值而非真实的 KL）。此 PR 将修复该内存级 Bug，对确保 RL 训练曲线的可观测性至关重要。

### 分布式系统与容错机制
- **[OPEN] fix(delta-sync): surface failed engine apply results instead of silently discarding them** by tanishkasinghhh
  - **链接**: [THUDM/slime PR #2119](https://github.com/THUDM/slime/pull/2119)
  - **简评**: 增强分布式训练的鲁棒性。原先 `_finalize_sync()` 在使用 Ray 同步增量权重时，静默丢弃了底层 SGLang 推理引擎返回的 `(success, msg)` 元组。此 PR 将抛出并暴露同步失败的异常，避免在权重同步失败时继续进行无效的 Rollout。

### 智能体与奖励模型优化
- **[OPEN] fix(agent): add drop_session for cleanup paths; require base_sample in finish_session** by jingshenghang
  - **链接**: [THUDM/slime PR #2117](https://github.com/THUDM/slime/pull/2117)
  - **简评**: 针对 SWE 编码智能体 的 Rollout 流程进行优化。修复了在异常退出路径下由于缺乏 `base_sample` 导致的轨迹提取报错，并增加了 `drop_session` 以保障资源的安全回收。
- **[OPEN] fix(rm_hub): grade the final ###Response segment in deepscaler reward** by SuperMarioYL
  - **链接**: [THUDM/slime PR #2116](https://github.com/THUDM/slime/pull/2116)
  - **简评**: 修复 DeepScaler 规则奖励的解析逻辑。原先对于 `</think>` 和 `###Response` 两种标记的分割逻辑不一致，可能导致模型输出被错误截断或奖励计算错位。

### CI / 工程维护
- **[CLOSED] [run-ci-megatron] sync from internal** by zhuzilin
  - **链接**: [THUDM/slime PR #2118](https://github.com/THUDM/slime/pull/2118)
  - **简评**: 内部代码同步与 Megatron 框架的 CI 触发任务，已正常合并/关闭。
- **[OPEN] [run-ci-megatron] [DON'T MERGE] run CI** by zhuzilin
  - **链接**: [THUDM/slime PR #2053](https://github.com/THUDM/slime/pull/2053)
  - **简评**: 常规的 CI 触发器，用于验证 slime 与 Megatron 后端的兼容性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **深入底层 Train-Engine 逻辑**：从 #2114 对 PPO 优势计算中原位修改的修复可以看出，项目团队正在打磨极高吞吐量下的内存与计算细节。这种针对算子级和底层张量操作的优化，是支撑大参数模型（如 70B+） RL 训练的关键。
2. **完善“大模型 + 智能体”闭环**：通过 #2117 的 SWE Coding Agent 适配，可以确认 slime 不仅是一个 PPO/RLHF 训练框架，更在向 Agent 的在线强化学习 方向拓展，支持复杂的工具调用和多轮对话轨迹。
3. **推理与训练引擎的深度绑定**：#2119 PR 暴露了框架与底层推理引擎（如 SGLang）在分布式增量权重同步 上的紧密耦合。针对这种通信机制的容错优化，表明项目正致力于解决高并发 Rollout 时的系统级不稳定痛点，这是目前开源 RL 框架（如 TRL, OpenRLHF）都在攻坚的技术高地。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习开源生态日报 (2026-06-23)**

**1. 今日速览**
*   **数据概览**：过去 24 小时内，AReaL 仓库共有 **19 个 PR** 更新（其中 18 个处于 OPEN 状态，1 个已 CLOSED），**0 条 Issue** 更新，**0 个**新版本发布。
*   **生态动向**：项目重心持续向**底层大规模分布式训练优化**（如 Megatron FP8、Muon 优化器、FSDP/Megatron 双桥接）和**前沿 RLHF 算法对齐**（如 CISPO loss）倾斜，并推出了全新的实验性 CLI 工具链以降低部署门槛。

**2. 版本发布**
*   无。目前代码库处于高频迭代与功能积攒期。

**3. 重点 Issues**
*   过去 24 小时无 Issue 更新。

**4. 关键 PR 进展**
按技术方向分类，以下为过去 24 小时内有活跃更新的核心 PR：

*   **RL 算法与底层训练引擎优化**
    *   **[PR #1412] feat(ppo): add CISPO loss surrogate (MiniMax-M1)**：引入 MiniMax-M1 提出的 CISPO (Clipped IS surrogate) 损失函数，解决 PPO/GRPO 裁剪导致采样比率超出边界时梯度为零的问题。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1412)）
    *   **[PR #1270] feat: muon optimizer support**：为 AReaL 引入 Muon 优化器（基于牛顿-舒尔茨迭代正交化的动量优化器），并在 FSDP2 和 Megatron 后端实现了原生分布式支持。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1270)）
    *   **[PR #1406] Support Megatron FP8 weight transfer in AWEX colocate mode**：在 AWEX 共置模式下启用 FP8 权重直传，避免隐式反量化为 BF16，显著提升传输效率。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1406)）
    *   **[PR #1413] refactor(ppo): derive group-norm group_size from gconfig.n_samples**：重构 PPO 组归一化逻辑，直接从 `gconfig.n_samples` 推导 `group_size`，消除多处冗余配置，提升算法配置的人体工程学。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1413)）

*   **模型与推理后端适配**
    *   **[PR #1372] feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter**：为百灵 MoE V2.5 家族添加 NVIDIA `megatron-bridge` 适配器，支持 `mbridge` 与 `megatron-bridge` 的双桥接模式。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1372)）
    *   **[PR #1365] fix(fsdp engine): localize DTensor norm output for Qwen models in TP**：修复 Qwen 系列模型在张量并行（TP）下，最终 norm 与 lm_head 间算子破坏 DTensor 调度的问题。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1365)）
    *   **[PR #1433] fix(io_struct): support multi-EOS models in stop-token handling**：修复 `ModelResponse` 仅支持单一 EOS token 的问题，全面适配 Gemma 4 等多 EOS 模型。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1433)）
    *   **[PR #1429] fix(vllm): forward frequency_penalty and stop in generation requests**：对齐 vLLM 与 SGLang 后端的生成请求参数，修复 vLLM 遗漏 `frequency_penalty` 和 `stop` 参数的问题。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1429)）

*   **工具链与易用性提升**
    *   **[PR #1434] Feat/improvement inf cli / [PR #1435] Feat/training service cli**：新增实验性 `areal inf` 和 `areal train` CLI 命令行工具，大幅降低本地管理推理网关、采集 rollout 轨迹及启动训练任务的门槛。（[Inference CLI](https://github.com/areal-project/AReaL/pull/1434) | [Training CLI](https://github.com/areal-project/AReaL/pull/1435)）
    *   **[PR #1407] feat: trajectory dump/replay**：实现 rollout 轨迹的转储与重放功能，允许将轨迹序列化到磁盘，从而实现无需推理引擎的离线训练循环 Debug。（[GitHub 链接](https://github.com/areal-project/AReaL/pull/1407)）

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
*   **前沿算法的极速工程化**：AReaL 正在将当前 SOTA 的研究概念（如 MiniMax 的 CISPO、Muon 优化器、IcePop/KPop 机制）迅速转化为稳定可用的分布式工程代码。这表明它不仅是一个训练框架，更是前沿 RL 算法的工业化试验场。
*   **深水区的分布式性能优化**：从 PR 活跃度可以看出，项目正在攻克大模型 RL 训练中最棘手的“内存墙”与“通信墙”问题（如 Megatron FP8 直传、禁用梯度缓冲区 CPU 备份以节省约 4 倍宿主机内存、Ray RDT 权重同步）。
*   **多后端与复杂架构的深度解耦**：同时兼容 FSDP2 与 Megatron，支持复杂的 MoE 架构（百灵 V2.5），并修复了 Qwen 等 SOTA 模型在 TP 并行下的 DTensor 局部化问题，展现了极强的通用底层基础设施能力。
*   **闭环生态构建**：轨迹回放工具和 CLI 工具链的加入，意味着项目正从“纯算法库”向“完整的 RLHF 开发者体验平台”演进，对一线研究员和工程师的吸引力将持续增加。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-06-23 HuggingFace TRL 强化学习开源生态日报摘要：

### 1. 今日速览
- **仓库活跃度**：过去 24 小时内，TRL 仓库共有 20 条 Issue 和 22 条 PR 发生了状态更新或讨论。
- **版本发布**：今日无新版本发布。
- **核心焦点**：社区高度关注 **GRPO 结合 vLLM 与 PEFT 的分布式训练稳定性**，以及当前主分支正在大力推进的 **异步 GRPO (AsyncGRPO) 与多环境交互支持**。

---

### 2. 版本发布
**无**。目前主分支代码仍在持续整合底层优化与新特性，预计在为下一个大版本做代码冻结或特性迭代。

---

### 3. 重点 Issues
今日 Issue 动态主要集中在多卡分布式训练的报错、推理后端兼容性以及训练机制的深度探讨：

- **[挂起/多卡] GRPO + vLLM colocate + PEFT 导致训练挂起**
  痛点：在多 GPU 环境下，结合 vLLM 同机部署与 PEFT 进行 GRPO 训练时，经常会在数个迭代后无提示死锁挂起。
  链接：[Issue #3671](https://github.com/huggingface/trl/issues/3671)

- **[架构/文档] 为什么开启梯度累加会导致 GRPO 性能下降？**
  探讨：开发者指出开启梯度累加反而导致 GRPO 性能衰减，且累加步数越多性能越差，触及了核心算法实现机制。
  链接：[Issue #3021](https://github.com/huggingface/trl/issues/3021)

- **[特性追踪] 全面支持跨聊天模板的工具调用**
  进展：官方主导的 Issue，追踪端到端训练时模板对完整工具调用会话的支持，这是当前基于智能体的 RL（RLVR）的关键基建。
  链接：[Issue #5460](https://github.com/huggingface/trl/issues/5460)

- **[硬件/后端] TRL (0.26.2) 兼容 vllm-ascend (0.11.0rc1)，华为 910B 支持 GRPO**
  生态：社区反馈 TRL 已能在基于昇腾 910B 的 vllm-ascend 环境下顺利启动 GRPO 训练，标志着 TRL 硬件生态的进一步扩展。
  链接：[Issue #4790](https://github.com/huggingface/trl/issues/4790)

- **[报错/FSDP] FSDP 2 + DPO 报错: 'MixedPrecisionPolicy' object has no attribute...**
  兼容性：在使用 8 GPUs 及 FSDP 2 配置运行 DPO 时触发底层属性错误。
  链接：[Issue #3581](https://github.com/huggingface/trl/issues/3581)

---

### 4. 关键 PR 进展
今日的 PR 更新展示了 TRL 在算法优化、异步训练降本增效以及环境交互方面的强劲发展势头：

- **🚀 突破：为 GRPO 添加熵正则化**
  价值：引入静态和自适应的熵控制，鼓励模型探索，防止策略坍缩为确定性输出，这是提升 RL 性能的核心算法改进。
  链接：[PR #6140](https://github.com/huggingface/trl/pull/6140)

- **🔧 修复：解决非 NVLink 硬件上 GRPO + vLLM colocate + PEFT 的挂起问题**
  价值：精准定位了张量并行下的死锁问题，通过在 `llm.generate` 前添加进程组屏障修复了 Issue #3671，大幅提升分布式训练鲁棒性。
  链接：[PR #6139](https://github.com/huggingface/trl/pull/6139)

- **⚡ 性能：AsyncGRPO 的增量（稀疏）权重同步**
  价值：针对异步 GRPO 实验，不再每次都向 vLLM 广播完整的策略模型权重，而是只检测并传输发生变化的 bf16 权重（稀疏补丁）。这将极大节省通信开销，加速异步 RL。
  链接：[PR #5937](https://github.com/huggingface/trl/pull/5937)

- **🤖 智能体支持：支持多个环境与按样本选择环境**
  价值：重构 GRPO 与 AsyncGRPO 的底层逻辑，允许传入环境字典字典，使得每个数据集样本可以绑定并暴露特定的工具环境，这是迈向复杂 Agent RL 训练的关键一步。
  链接：[PR #6001](https://github.com/huggingface/trl/pull/6001) 与 [PR #6002](https://github.com/huggingface/trl/pull/6002)

- **📈 内存优化：SFT 可配置分块 NLL (chunked-NLL) 大小**
  价值：替换硬编码常量，解决了大词汇量模型（Vocab ≥ 64k，如 Qwen 系列）在 SFT 时的内存低效问题。
  链接：[PR #5829](https://github.com/huggingface/trl/pull/5829)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **从“基础对齐”向“复杂智能体 RL”演进**：从今日主导推进的 *多环境交互* (PR #6001/#6002) 和 *工具调用追踪* (Issue #5460) 可以看出，TRL 正在快速填补大模型从“偏好对齐”走向“Agent 强化学习（基于规则与环境的 RLVR）”的基建空白。
2. **死磕分布式与底层显存/通信优化**：不论是修复 *PEFT+多卡+VLLM 的死锁* (PR #6139)，还是大刀阔斧引入 *AsyncGRPO 的稀疏权重同步* (PR #5937)，TRL 团队正在实打实地解决工业界大规模 RL 训练中最痛的“显存墙”与“通信瓶颈”问题。
3. **紧跟前沿算法与异构硬件适配**：对 *GRPO 熵正则化* (PR #6140) 的支持以及对 *昇腾 910B 等非 Nvidia 生态* (Issue #4790) 的兼容，表明 TRL 保持着极高的算法迭代频率和硬件包容性。它是目前极少数能将前沿 RL 论文算法与工业级大模型训练栈（DeepSpeed/FSDP/vLLM）无缝融合的开源项目。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**OpenRLHF 强化学习生态日报（2026-06-23）**

**1. 今日速览**
过去 24 小时内，OpenRLHF 仓库整体活跃度趋于平缓。无新增 Issue、无新版本发布。PR 动态更新 1 条，主要集中在多轮对话训练场景下响应长度计算的底层逻辑修复。
🔗 仓库链接: [github.com/OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

**2. 版本发布**
- **无**。近 24 小时内未发布新版本。

**3. 重点 Issues**
- **无**。近 24 小时内无新增或更新的 Issue 讨论记录。

**4. 关键 PR 进展**
- **#1255 [OPEN] 修复多轮训练中使用 `action_mask.sum()` 计算 `response_length` 以排除工具调用 Token 的问题**
  - **作者**: KamayaniR
  - **更新时间**: 2026-06-22
  - **技术摘要**: 该 PR（针对 Issue #1243）修复了 `_process_response_into_experience` 模块中的响应长度计算逻辑。原代码计算的是从首个动作 Token 到末尾动作 Token 的绝对跨度（Span）；新逻辑修改为使用 `action_mask.sum()`，从而在多轮对话和包含工具调用的场景中，精准剥离并排除非动作 Token（如 Tool-call 交互 Token），确保 RL 训练阶段实际有效响应长度的准确性。
  - **链接**: [OpenRLHF/OpenRLHF PR #1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
当前的强化学习（RLHF/RLAIF）正快速从单轮 Prompt-Response 模式向**多轮对话与 Agent 智能体（Agent Tool-Use）**方向演进。PR #1255 的修复细节证明，OpenRLHF 的核心维护者与社区正在深耕多轮及带工具调用场景下的 RL 训练链路。
在复杂的 Agent 训练中，Reward 的分配和长序列 Token 的 Masking 极易发生 Reward Hacking 或梯度计算错位。OpenRLHF 对 `response_length` 和底层 Mask 机制的精细化打磨，表明该项目不仅是一个算法封装库，更是一个在底层张量级别解决工业级 Agent RL 训练痛点的硬核框架，极具长期跟踪价值。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

### verl (volcengine/verl) RL 生态日报摘要
**日期**: 2026-06-23

#### 1. 今日速览
- **Issues 动态**: 过去 24 小时内共有 19 条 Issue 更新（包含历史高频问题的持续讨论及新提交的 Bug）。
- **PR 进展**: 共有 24 条 PR 更新，开发节奏极快，重点集中在 **全异步训练 修复与优化**、**Ascend (昇腾) 硬件生态适配** 以及 **多模态/Agentic 框架增强**。
- **版本发布**: 过去 24 小时无新版本 Release。

---

#### 2. 版本发布
无。当前社区代码处于高频迭代期，诸多核心特性（如 fully-async、agent loop）正通过 PR 快速合入主干。

---

#### 3. 重点 Issues
**稳定性与性能瓶颈**
- **[#311] 多节点训练出现 NaN**: 用户反馈 PPO 训练在多机环境下首次权重更新后即出现 NaN，单机环境无此问题，暴露了分布式训练下的数值稳定性隐患。（[链接](https://github.com/verl-project/verl/issues/311)）
- **[#336] 优势函数计算耗时超万秒**: 当输出序列长度超过 10k 时，`adv` (Advantage) 计算阶段耗时异常（达到 10751 秒），严重影响训练吞吐。（[链接](https://github.com/verl-project/verl/issues/336)）
- **[#6693] 全异步模式空闲率测量异常**: 使用 `fully_async` 时 Trainer 和 Roller 的 idle_ratio 接近 0，但实际表现甚至不如同步模式，底层更新机制被证实存在 Bug。（[链接](https://github.com/verl-project/verl/issues/6693)）

**工程落地与 Bug 修复**
- **[#6810] OPD (蒸馏) 显存溢出**: 基于 Megatron 运行 `forward_kl_topk` 模式时，在计算 student/teacher logits 阶段极易 OOM，且需关闭 `use_fused_kernel`。（[链接](https://github.com/verl-project/verl/issues/6810)）
- **[#6814] GLM-4.1V-9B 训练报错**: verl v0.8.0 适配最新视觉多模态模型 GLM-4.1V-9B-Thinking 时出现异常。（[链接](https://github.com/verl-project/verl/issues/6814)）

---

#### 4. 关键 PR 进展
**全异步 训练优化 (近期重点)**
- **[#6798] 修复异步 Rollouter 空闲时间测量**: 引入 `accumulated_idle_time` 精准记录实际的 rollouter 空闲时间，直接修复 Issue #6693。（[链接](https://github.com/verl-project/verl/pull/6798)）
- **[#6684] 修复 Trainer 初始化前的优化器同步问题**: 解决了实验中学习率 (lr) 始终为 0 的严重 Bug。（[链接](https://github.com/verl-project/verl/pull/6684)）
- **[#6809] 引入 Replay Buffer 与队列背压**: 进一步完善全异步训练的资源调度与数据流控制。（[链接](https://github.com/verl-project/verl/pull/6809)）

**Agentic Rollout 与算法增强**
- **[#6804] 为 AgentLoop 增加多模态连续 Token 支持**: 扩展了 `ContinuousTokenBuilder`，使得 Agentic 框架能够正确编码和处理图文混合输入。（[链接](https://github.com/verl-project/verl/pull/6804)）
- **[#6731] 增加 CPPO 算法**: 实现了论文中的累积前缀分歧策略优化，替代简单的均匀 Token 级 Trust Region，提升自回归生成的 RL 效果。（[链接](https://github.com/verl-project/verl/pull/6731)）

**硬件与底层基础设施**
- **[#6777] 昇腾 模块重构**: 实现基于模型的 NPU 补丁隔离，解决了昇腾环境下内核打补丁“一损俱损”的脆弱性。（[链接](https://github.com/verl-project/verl/pull/6777)）
- **[#6526] Megatron 优化器显存优化**: 将 bf16 训练下的 Adam 状态和梯度累加 buffer 对齐为模型精度，大幅降低分布式优化器 3 倍的冗余内存消耗。（[链接](https://github.com/verl-project/verl/pull/6526)）
- **[#6813] 修复 Mooncake 权重同步损坏 Bug**: 修复了底层传输引擎导致生成结果崩溃（输出死循环）的严重问题。（[链接](https://github.com/verl-project/verl/pull/6813)）

---

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **攻坚“LLM RL 训练”最前沿痛点**：verl 团队正将大量精力投入到 **fully-async（全异步）** 训练范式中。从解决 idle_ratio 掩盖、优化器状态同步到 Replay Buffer，verl 正在摸清异步 RLHF 的工程深水区。
2. **对 Agentic 与多模态的原生支持**：通过引入 Continuous Token 机制和 multimodal datasets 支持，verl 正迅速从单一的“文本对齐工具”进化为支持复杂工具调用和视频/图像推理的 Agent 训练底座。
3. **极强的异构硬件适配野心**：不仅是 Nvidia 生态（如 NVFP4 QAT 支持、Mooncake 传输优化），项目近期有极高密度的 Ascend（昇腾）NPU 相关 CI 测试与显存对齐修复合入，表明 verl 正致力于成为跨硬件平价的 RL 基建首选。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报 | 2026-06-23**

以下是 allenai/open-instruct 项目在过去 24 小时的动态摘要及技术分析。

### 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体活跃度趋于平缓，无新版本发布，无新增或更新的 Pull Requests。核心动态集中在**复现 Tulu 3 SFT 结果时的损失函数与梯度累加 Bug 反馈**（Issues +1）。
🔗 仓库地址: [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 2. 版本发布
**无**。
近期无新的 Release 或 Tag 产出。

### 3. 重点 Issues
**#1728 [OPEN] `reduce_loss=sum` removed in #1024 without deprecation warning: LR miscalibration and mean-of-microbatch-means under gradient accumulation**
- **作者**: llabat
- **链接**: [allenai/open-instruct Issue #1728](https://github.com/allenai/open-instruct/issues/1728)
- **技术摘要**: 该问题精准暴露了 PR #1024 中的一个底层破坏性更新。此前代码移除了 `reduce_loss=sum` 的选项而未给出弃用警告。在大模型全参数微调（如基于 Llama-3.1-8B 复现 Tulu 3 SFT）且使用**梯度累加（Gradient Accumulation）**时，这会导致严重的计算逻辑错误：微批次损失值会被直接取均值（mean-of-microbatch-means），而非正确地在全局批次上求和。
- **实际影响**: 作者基于 Tulu 3 论文 4.3.2 节的超参数进行复现时，发现该 Bug 导致了**学习率失准**，并产生了持续且明显的性能断层。这是一个典型的由于 Loss 缩放不当导致 RL/SFT 训练失效的工程陷阱。

### 4. 关键 PR 进展
**无**。
过去 24 小时无新增、合并或更新的 PR。目前尚无开发者针对上述 Issue #1728 提交修复代码。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但 Issue #1728 凸显了 Open Instruct 在当前 RL 和后训练生态中的核心地位：
1. **官方级复现基准**: Open Instruct 是 AllenNLP 团队维护的 Tulu 系列模型官方框架。随着大模型训练进入“后预训练+强化学习（RLHF/DPO/PPO）”深水区，能否完美复现 Tulu 3 的基线数据，是验证各类 RL 算法有效性的前提。
2. **直击分布式训练痛点**: #1728 揭示的“梯度累加下的局部均值”问题，是全参数微调和大规模 RL 训练中极易踩坑的工程细节。关注此项目的迭代，可以直接获取 AllenAI 团队在处理大规模分布式 Loss 归约、学习率校准等方面的第一手工程修复方案。
3. **高信噪比的排错参考**: 对于自建 RL 基础设施的团队，该仓库的 Issues 区是排查底层数据配比、Loss 掩码、优化器状态等隐蔽 Bug 的高质量知识库。

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

**RL 开源生态日报：Gymnasium 项目追踪**
**日期**：2026-06-23

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平缓。无新增 Issue，无代码提交，无新版本发布。唯一的动态来自自动化依赖管理工具 Dependabot 提交的一项基础 CI 设施升级 PR。项目当前处于功能稳定维护期。

### 2. 版本发布
*   **无新版本发布**。核心 API 与环境包保持现状。

### 3. 重点 Issues
*   **无新增或更新的 Issues**。社区在报告 Bug 或提交 Feature Request 方面今日无动态。

### 4. 关键 PR 进展
*   **#1591 [OPEN] [dependencies, github_actions] Bump actions/checkout from 6 to 7**
    *   **作者**: `dependabot[bot]`
    *   **动态**: 自动化机器人发起的依赖库版本升级。将 GitHub Actions 的 `actions/checkout` 动作从 v6 大版本升级至 v7.0.0。
    *   **技术影响**: 属于常规 CI/CD 基础设施维护，确保代码拉取与自动化测试流水线的底层安全性与兼容性，不涉及 Gymnasium 核心 RL 环境逻辑的变更。
    *   **链接**: [Farama-Foundation/Gymnasium PR #1591](https://github.com/Farama-Foundation/Gymnasium/pull/1591)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Gymnasium 近期处于低活跃度的维护状态，但它依然是当前强化学习开源生态中不可替代的“底层基石”：
*   **事实接口标准**: 作为已停止维护的 OpenAI Gym 的官方继任者，Gymnasium 的 `Env` 和 `Wrapper` API 仍是当今学术界和工业界（如 Stable-Baselines3, CleanRL, Ray RLlib 等）事实上的环境交互标准。
*   **算法基准依赖**: 绝大多数前沿 RL 论文在复现和基准测试时，依然高度依赖 Gymnasium 提供的标准化玩具环境（如 MuJoCo, Atari, Classic Control）。
*   **长期生态价值**: 关注该仓库的 Release 动态依然至关重要，任何核心 API 的 breaking changes 或新环境集成的支持，都将直接引发下游 RL 算法框架的连锁适配反应。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>