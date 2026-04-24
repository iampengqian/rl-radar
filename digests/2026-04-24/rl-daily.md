# RL 开源生态日报 2026-04-24

> 生成时间: 2026-04-24 01:09 UTC | 覆盖项目: 15 个

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
当前 LLM/RLHF 开源生态呈现明显的“冷热两极分化”态势。一方面，以大模型对齐和后训练为目标的上层训练框架（AReaL、verl、slime、TRL 等）正处于工程迭代的高峰期，社区极度活跃；另一方面，传统的经典强化学习环境与算法库（Gymnasium、PettingZoo、CleanRL、SB3 等）已进入稳定维护期甚至停滞期。生态重心已全面从“基础 RL 算法研究”转移至“百亿/千亿参数级大模型在超大规模分布式集群下的 RLHF 工程化落地”。

## 各项目活跃度对比
*注：数据统计周期为过去 24 小时内。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **AReaL** | 5 | 42 | 0 | 狂暴开发期。深耕异构引擎通信与显存墙，死磕底层硬核调度。 |
| **verl** | 8 | 27 | 0 | 爆发期。死磕 MoE 超大规模集群、异构硬件适配及 PD 分离架构。 |
| **TRL** | 1 | 15 | 0 | 稳步迭代。聚焦多模态 RL 显存优化与算法数据流的严谨性重构。 |
| **ROCK** | 5 | 12 | 0 | 演进期。全面拥抱云原生与企业级微服务架构（如 Nacos/Serverless）。 |
| **slime** | 7 | 1 | 0 | 攻坚期。直面 400B+ MoE 及多模态 VLM 上限，探索极低带宽通信。 |
| **Open Instruct** | 0 | 6 | 0 | 调优期。集中优化 SFT 数据处理流，性能大幅提升（10倍提速）。 |
| **PettingZoo** | 0 | 1 | 0 | 维护期。准备发布 v1.26.0，适配最新 Python 版本及依赖重构。 |
| **ROLL** | 0 | 0 | 0 | 扩展期。通过适配器模式接入更多第三方 Agentic 环境。 |
| **torchtune** | 0 | 1 | 0 | 停滞期。官方已标记项目进入停止维护状态。 |
| **Gymnasium** | 0 | 1 | 0 | 维护期。仅进行常规的文档与死链修复。 |
| **其他项目** | 0 | 0 | 0 | *(CleanRL, OpenRLHF, rl_games, SB3, Tianshou) 过去 24h 零活动。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **超大规模 MoE 与多模态 (VLM) 的 RL 适配**：Qwen3.5-397B、GLM5 等超大 MoE 模型的全异步 RL 训练已成为前沿团队的共同攻坚点。同时，VLM 在 RL 训练中的图像丢失、长文本挂起及多轮交互失焦等问题，正成为继文本 RL 后最热门的研究赛道。
2. **Agentic RL 与复杂环境交互**：强化学习的重心正从“奖励模型驱动”转向“环境反馈驱动”。无论是 TRL 对外部 Agent 框架的解耦，还是 ROLL 引入的 Universal Reward Bridge，都在致力于打通 LLM 与复杂沙箱环境（如 Atropos、Terminal Bench）的交互闭环。

**工程/基础设施侧信号：**
1. **极致的显存与通信压榨**：RLHF 的算力瓶颈促使框架向底层算子开刀。引入 Chunked Cross-entropy（降 50% 显存）、CP-local loss 规避昂贵的 all-gather，已成为标配。
2. **训练与推理引擎的深度解耦与协同**：RLHF 框架已不再绑定单一后端。AReaL、verl 等全面兼容 FSDP、Megatron、vLLM、SGLang，并针对异构算力集群开发了无服务器调度和 Nacos 动态加载等企业级特性。
3. **通信协议重构：增量与量化同步**：为解决 Actor 与 Rollout 引擎间的“权重同步墙”，业界正全面从“全量同步”转向 **LoRA Delta 权重增量同步**（slime 引入 Delta 压缩，AReaL 磁盘增量同步）及 **FP8 量化转移**（将量化计算从推理侧卸载至训练侧以节省带宽）。

## 差异化定位分析
- **算力上限突破者（verl、AReaL、slime）**：这三者是目前在超大集群和巨型 MoE 模型上厮杀最惨烈的“硬核基建”。侧重于解决千卡分布式训练中的通信拓扑、显存溢出和 PD（Prefill-Decode）分离调度，目标用户是拥有大规模算力池的头部大厂。
- **算法与生态枢纽（TRL）**：定位为最广泛兼容的算法集。不拼极限集群规模，而是追求单卡/中小集群的极致显存优化（如 SFT 分块损失）和算法逻辑的严谨性，是大模型研发团队平滑接入 RLHF 的首选。
- **云原生与企业级平台（ROCK、ROLL）**：跳出了纯算法和通信的泥潭，将目光瞄准了生产环境的运维痛点。侧重于微服务改造、调度动态重载、多租户沙箱隔离及环境桥接，为 RL 的工程化交付提供 PAAS 级支持。
- **传统经典 RL 基座（Gymnasium、PettingZoo 等）**：作为生态底座，其定位已彻底固化。它们不再追求快速迭代，而是提供最稳定的 API 标准和向后兼容性，为上层前沿研究提供“无声的支撑”。

## 社区热度与成熟度
1. **前沿框架的高速迭代**：verl、AReaL 的单日 PR 数量分别达到 27 和 42，且涉及大量底层的异构引擎对接，说明它们正处于社区资源疯狂涌入的红利期，迭代速度远超传统框架。
2. **开源项目的残酷淘汰与整合**：torchtune 的正式“停更”标志着一个整合节点的到来。在 TRL 等成熟框架和垂直底层框架的夹击下，缺乏极致特色或社区活力的项目正在迅速被边缘化。
3. **企业级痛点的真实反映**：ROCK 框架在处理 HTTP proxy body 丢失、WebSocket 502 及容器时区偏移等“非典型 ML”问题上投入大量精力，证明 RL 基础设施正在真正深入企业级生产环境，进入了“拼基建细节”的成熟阶段。

## 值得关注的趋势信号
1. **Rollout 引擎的彻底异构化**：将 Prefill 与 Decode 分离并引入全局负载均衡，预示着 RLHF 正在全面复用大模型推理侧的最新架构红利，这将极大提升采样吞吐量。
2. **Delta 权重同步将成为标配**：随着模型向 400B+ 迈进，每次参数更新全量同步网络 I/O 已不可接受。AReaL 和 slime 在增量同步、压缩及 Adapter-only 链路上的探索，将重塑大模型 RL 的网络架构设计。
3. **后训练的 Agent 化**：无论是接入 Serverless 运行时，还是构建 Universal Reward Bridge，都释放出一个明确信号——未来的 RL 不仅是“对齐人类偏好”，更是“训练能自主执行代码、调用工具的智能体闭环”。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-04-24 ROLL 项目 RL 生态日报摘要：

# 📰 ROLL 每日生态速递 (2026-04-24)

## 1. 今日速览
过去 24 小时内，[alibaba/ROLL](https://github.com/alibaba/ROLL) 仓库整体保持平稳。项目无新增代码提交、无新版本发布、无新增 Issue。唯一的动态来自于现有的开放 PR 更新。当前项目处于架构扩展与生态兼容的建设阶段。

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。

## 4. 关键 PR 进展
当前有 1 条处于 OPEN 状态的核心 PR，聚焦于 RL 环境的互操作性扩展：

*   **[#426 ROLL with Atropos environments](https://github.com/alibaba/ROLL/pull/426)**
    *   **作者**: RUFFY-369
    *   **状态**: `[OPEN]` (创建于 2026-04-21，最近更新于 2026-04-23)
    *   **摘要**: 该 PR 实现了 [NousResearch/Atropos](https://github.com/NousResearch/atropos) 环境与 ROLL 框架的深度集成。引入了核心组件 **Universal Reward Bridge**（通用奖励桥接器），作为一个高度可配置的适配器，打通了 ROLL 框架与 Atropos 环境的原生通信链路。
    *   **技术价值**: 标志着 ROLL 正在向更加模块化的智能体训练框架演进，通过 Adapter 模式降低外部新型 RL 环境的接入成本。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

在大模型时代，强化学习（RL）特别是强化学习微调（RLHF/RLAIF）已成为提升模型推理与对齐能力的关键。基于当前的数据与行业趋势，ROLL 项目的核心关注价值在于：

1.  **解决 RL 环境碎片化痛点**：正如 PR #426 所示，ROLL 正在积极构建“Universal Reward Bridge”。当前的 RL 开源生态面临严重的环境接口不统一问题，ROLL 通过提供标准化的 Agentic Adapter，能够让开发者以极低的成本将最新颖的开源环境（如 Atropos）无缝接入大模型训练流水线。
2.  **强大的底层工程优化**：作为阿里巴巴开源的框架，ROLL 天生面向大规模分布式训练场景。对于需要进行海量 rollout 采样和大规模集群并发的 RL 工程师而言，ROLL 提供了生产级的吞吐量保障。
3.  **前沿范式的快速响应**：从 LLM 赋予环境到 Agent 密集交互训练的转变是当前 RL 的核心演进方向。ROLL 团队与开源社区正在快速跟进这一趋势，将其打造成一个不仅局限于传统 PPO，同时兼容多种复杂 Agentic 环境的现代化 RL 基础设施。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 开源项目 RL 日报摘要 (2026-04-24)

## 1. 今日速览
过去 24 小时内，`alibaba/ROCK` 仓库保持较高的开发活跃度。社区共提交了 **5 条 Issue** 更新（3 条新增，2 条关闭）以及 **12 条 PR** 更新（6 条新增，6 条关闭）。当前项目重心明确聚焦于**系统调度优化、监控指标增强以及底层基础设施（代理与容器）的 Bug 修复**。

## 2. 版本发布
- **无新版本发布**。不过，注意到开发者提交了版本号更新的 PR，预示着新版本的发布已在准备阶段。

## 3. 重点 Issues
当前核心关注点在于生态集成能力与系统稳定性的提升。

- **#888 [OPEN] 增加基于 Nacos 的动态调度配置重载**：作者 `zhongwen666` 提议在运行时接入 Nacos 实现调度器配置的动态加载，以打破目前启动时加载 YAML 配置后无法变更的限制，属于核心性能与调度优化。
  链接: [alibaba/ROCK Issue #888](https://github.com/alibaba/ROCK/issues/888)
- **#886 [OPEN] 支持元数据存储与数据库操作指标**：作者 `zhangjaycee` 提议在 Sandbox 层面引入 Meta store 和数据库操作的 Metrics 监控，对于强化学习训练过程中的数据流转状态追踪至关重要。
  链接: [alibaba/ROCK Issue #886](https://github.com/alibaba/ROCK/issues/886)
- **#890 [OPEN] SDK 追踪配置接入**：作者 `FangwenDave` 提议在 SDK & API 的 Job Config 中增加 Tracking 配置，进一步完善 RL 实验追踪闭环。
  链接: [alibaba/ROCK Issue #890](https://github.com/alibaba/ROCK/issues/890)
- **#880 [CLOSED] HTTP 代理端非 JSON 请求体丢失**：作者 `Dengsheng-wzh` 报告并修复了 HTTP proxy 在处理非 JSON 格式请求时 Body 丢失的底层网络 Bug。
  链接: [alibaba/ROCK Issue #880](https://github.com/alibaba/ROCK/issues/880)

## 4. 关键 PR 进展
开发团队在基础组件健壮性和云原生部署上取得了实质性进展。

- **#889 实现基于 Nacos 的动态调度配置重载**：对应 Issue #888。实现了无重启更新调度配置，增强了 `NacosConfigProvider` 的监听回调能力及 `TaskRegistry` 的清理机制。
  链接: [alibaba/ROCK PR #889](https://github.com/alibaba/ROCK/pull/889)
- **#891 [CLOSED] & #881 [CLOSED] 修复非 JSON 请求体保留问题**：历经两次提交，成功解决 HTTP proxy 端无法透传非 JSON body 的网络代理缺陷。
  链接: [alibaba/ROCK PR #891](https://github.com/alibaba/ROCK/pull/891)
- **#864 [CLOSED] & #885 [OPEN] 容器时区环境变量透传**：通过向 Docker sandbox 容器注入 `TZ` 环境变量（默认 `CST-8`），修复了由于容器时区不一致导致的前端文件修改时间与系统命令时间出现 8 小时偏差的顽疾。
  链接: [alibaba/ROCK PR #864](https://github.com/alibaba/ROCK/pull/864) | [alibaba/ROCK PR #885](https://github.com/alibaba/ROCK/pull/885)
- **#894 屏蔽 WebSocket 转发中的 Cookie 头**：修复了上游网关 SSO token 导致的 oversized 引发的下游 WebSocket 服务 502 错误，提升了网关代理的稳定性。
  链接: [alibaba/ROCK PR #894](https://github.com/alibaba/ROCK/pull/894)
- **#867 引入阿里云函数计算 Serverless 运行时支持**：开始在 ROCK 中适配 FC serverless operator，为 RL 任务的无服务器化弹性扩缩容打下基础。
  链接: [alibaba/ROCK PR #867](https://github.com/alibaba/ROCK/pull/867)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
ROCK 正在从单一的算法训练框架向**企业级、云原生的 RL 基础设施**演进。从近期的代码提交可以看出几个明显趋势：
1. **企业级调度与配置管理**：引入 Nacos 动态配置重载，表明 ROCK 正在贴合真实工业界微服务架构的运维诉求，支持更灵活的分布式 RL 资源调度。
2. **可观测性增强**：正在系统性地补齐 Meta store、数据库操作及 Job tracking 等 Metrics 能力，这对于需要长期运行、调参复杂的 RL 实验来说是 indispensable 的基建。
3. **底层基础设施的硬化**：精细化修复 HTTP proxy 的 body 丢失、WebSocket cookie 导致的 502，以及容器时区偏差，证明项目团队在认真解决多租户/分布式环境下的硬核底层 Bug。
4. **拥抱 Serverless**：对阿里云 Function Compute 的支持探索，为 RL 中轻量级、事件驱动的模拟环境评估提供了新的弹性架构可能。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime (THUDM) RL 生态日报 - 2026-04-24

## 1. 今日速览
过去 24 小时，Slime 仓库共处理 **7 条 Issues**（1 条已关闭，6 条开启），**1 条 PR** 活跃更新。社区当前焦点高度集中在**超大规模 MoE 模型的 Rollout 稳定性**（如 Qwen3.5-397B、GLM5-744B）以及 **VLM 多模态推理的适配问题**上。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues

### 🔥 核心：超大规模 MoE 模型 Rollout 乱码问题
- **[#1852](https://github.com/THUDM/slime/issues/1852) [OPEN]**: Qwen3.5-397B-A17B 在 160 张 H20（96 Actor + 64 Rollout）全异步扩展训练时，训练正常但 Rollout 输出乱码。同环境缩容至 32 卡训练 35B 模型则无此问题，疑似大规模分布式通信或权重同步缺陷。
- **[#1853](https://github.com/THUDM/slime/issues/1853) [OPEN]**: GLM5 模型在 H20 集群上进行 SGLang Rollout 时，存在概率性首字 Token 生成乱码或无意义内容的现象。

### 🖼️ 痛点：VLM 多模态推理兼容性
- **[#1850](https://github.com/THUDM/slime/issues/1850) [OPEN]**: 使用 Slime 内置 Docker 的 SGLang 服务启动 Qwen3-VL-4B-instruct 时，模型无法正确解析图像，输出 `????` 或错误分析。
- **[#1847](https://github.com/THUDM/slime/issues/1847) [OPEN]**: VLM 多轮 Rollout 存在严重 Bug，模型在多轮对话交互中会“丢失”图像视觉信息（表现为输出“image is blank”等内容）。

### 🛠️ 其他问题与生态支持
- **[#1767](https://github.com/THUDM/slime/issues/1767) [OPEN]**: 使用 Qwen3-4B 运行 off-policy Retool GRPO 实验时，在第 37 步突发 OOM 崩溃（非显存随步数线性增长）。
- **[#1811](https://github.com/THUDM/slime/issues/1811) [OPEN]**: 社区用户发起关于通过 HF 黑盒包装法支持 Gemma 4 架构的讨论（已获 4 👍）。
- **[#1854](https://github.com/THUDM/slime/issues/1854) [CLOSED]**: 探讨为 FLA-backed 线性注意力模型（如 qwen3_5）实现内核级上下文并行，以解决显存瓶颈。

## 4. 关键 PR 进展

- **[#1806](https://github.com/THUDM/slime/pull/1806) [OPEN] feat: delta compression for weight sync**
  - **核心内容**：引入针对 Trainer -> Rollout Engine 权重同步的 **Delta 压缩机制**。
  - **技术背景**：借鉴 Cursor 的 Composer 2 和 Fireworks 的 Frontier RL 方案。在后训练阶段，Actor 模型频繁向推理引擎同步权重是主要的通信瓶颈。该 PR 试图通过只同步变化量的压缩技术，大幅降低超大模型（如 400B+ MoE） RL 训练时的网络和显存开销。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **攻坚超大 MoE 模型后训练瓶颈**：从今日集中爆发的 397B / 744B 模型 Rollout 问题可以看出，Slime 正在直接触及当前 RLHF 算力天花板。项目真实承载了工业级千卡规模训练的痛点。
2. **系统级优化而非纯算法迭代**：通过 PR #1806 的 Delta Weight Sync 机制可以看出，团队正致力于解决 RL 训练中 Trainer 与 Rollout 引擎分离架构下的底层通信顽疾，这对于降低前沿大模型 RL 成本至关重要。
3. **前沿多模态 (VLM) RL 的试金石**：Issues 中暴露的 VLM 多轮视觉丢失及图像解析错误，精准反映了当前开源生态在多模态对齐训练上的基础设施短板。Slime 承接了这些复杂的工程挑战，是跟进 VLM RL 进展的绝佳窗口。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-04-24 RL 日报摘要：

# AReaL 强化学习生态日报 (2026-04-24)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高度活跃，共处理了 **5 条 Issues** 和 **42 条 Pull Requests**（主要集中在底层通信、权重同步机制优化和分布式引擎支持），无新版本发布。整体开发重心明显向**多后端权重同步、LoRA 增量更新及多模态扩展**倾斜。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
今日的 Issues 集中在分布式集群的稳定性、显存优化副作用及新特性提案：

- **[Bug] 本地调度器关闭时的通信报错**：反馈在使用 `scheduler.type=local` 干净关闭集群时，TCPStore 出现竞态条件导致 `recvValue failed`。
  [链接 #1245](https://github.com/inclusionAI/AReaL/issues/1245)
- **[RFC] 引入 Ray Core RDT 进行权重同步**：提议在现有的 NCCL/磁盘同步之外，集成 Ray Core RDT 以优化 FSDP/Megatron 引擎间的权重同步效率。
  [链接 #1243](https://github.com/inclusionAI/AReaL/issues/1243)
- **[Bug] CP-local loss 导致指标统计偏移**：引入 CP-local loss 解决 OOM 后，导致 SFT 阶段 Token 统计指标仅上报局部 CP 范围，未还原为全局指标。
  [链接 #1242](https://github.com/inclusionAI/AReaL/issues/1242)
- **[Feature] 支持 Adapter-only LoRA 检查点引导训练**：提议在训练测实现加载 Adapter-only 格式权重的功能，打通“仅保存 Adapter -> 增量训练”的完整链路。
  [链接 #1240](https://github.com/inclusionAI/AReaL/issues/1240)

## 4. 关键 PR 进展
今日 PR 动作频繁，大量基础架构和推理/训练协同的代码被提交或合入：

- **核心 Bug 修复与稳定性提升**
  - 修复 TCPStore 竞态问题：旨在解决上述 Issue #1245 的 TCP 拆解竞态崩溃。
    [PR #1244](https://github.com/inclusionAI/AReaL/pull/1244)
  - 防止异步 RL 中不均匀 Batch 导致崩溃：在 DP 划分前对 Eval Batch 进行填充，并放宽了 `balanced_greedy_partition` 的要求。
    [PR #1225](https://github.com/inclusionAI/AReaL/pull/1225)
  - 修复 vLLM LoRA 路由失效：解决了运行时更新版本化 LoRA 权重时，旧版本请求在途导致的路由不可用问题。
    [PR #1238](https://github.com/inclusionAI/AReaL/pull/1238)

- **权重同步架构升级**
  - 支持 LoRA 增量磁盘同步：针对 FSDP 和 SGLang，首次同步全量模型，后续仅同步 LoRA Delta 权重，极大降低 IO 开销。
    [PR #1233](https://github.com/inclusionAI/AReaL/pull/1233)
  - 引入 Awex 后端进行跨引擎权重同步：基于 NCCL P2P 通过 HTTP Gateway 编排了完整的 FSDP-SGLang 权重同步生命周期。
    [PR #1214](https://github.com/inclusionAI/AReaL/pull/1214) 
  - 同置权重同步调度：为 vLLM 推理原生 IPCWeightTransferEngine 提供了后端感知调度支持。
    [PR #1164](https://github.com/inclusionAI/AReaL/pull/1164)

- **引擎与并发特性**
  - FSDP 引擎解耦与易用性提升：支持直接通过 `from_pretrained` 构建 FSDPEngine，无需依赖复杂的配置 dataclass。
    [PR #1140](https://github.com/inclusionAI/AReaL/pull/1140)
  - SGLang 推理侧支持流水线并行：允许在推理侧开启 `pp_size > 1`，支持 Megatron/FSDP/Archon 等所有训练引擎。
    [PR #1162](https://github.com/inclusionAI/AReaL/pull/1162)
  - Megatron 引擎显存与优化优化：引入 CP-local cross-entropy loss 消除了跨 CP ranks 的昂贵 logits all-gather。
    [PR #1223](https://github.com/inclusionAI/AReaL/pull/1223)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

AReaL 在当前的 LLM 强化学习微调生态中具有独特且硬核的工程价值，主要体现在以下三个维度：

1. **极致的 RLHF 基础设施优化**：项目正在死磕 RL 训练中最棘手的**通信与显存墙**问题。无论是引入 CP-local loss 规避 logits all-gather，还是实现粗粒度的 LoRA 增量同步、兼容 vLLM 的 IPC 权重传输，都在实打实地解决百亿/千亿参数模型 RLHF 时的集群吞吐量瓶颈。
2. **打破框架壁垒的异构引擎协同**：AReaL 致力于解耦训练与推理引擎，其 PR 活动显示它正在全面兼容 **FSDP, Megatron, vLLM, SGLang** 等主流底层，甚至为不同推理后端适配各自的并发与路由策略（如 PP 支持、Awex 和 Ray RDT 的引入），为企业级异构算力集群提供了极高的灵活性。
3. **向多模态与 Agent 闭环演进**：除了传统文本 RL，社区正在推进对多模态模型（如 LLaVA-OneVision-1.5）的 RL 训练支持，并集成了 Terminal Bench 等 Agent 交互式训练工作流，这表明 AReaL 正在从单纯的 Alignement 工具走向更通用的后训练基础设施。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 | 2026-04-24

## 1. 今日速览
过去 24 小时内，TRL 仓库共更新 **15 条 Pull Requests**（其中 2 条已关闭）和 **1 条 Issues**，无新版本发布。当前开发重心集中在 **SFT 显存优化、Bug 修复、代码重构（KTO/DPO 对齐）以及工程化 CI/CD 改进**。

## 2. 版本发布
- **无新版本发布。**

## 3. 重点 Issues
- **[#5361](https://github.com/huggingface/trl/issues/5361) [OPEN] 多模态生成在 vLLM Server 模式下挂起**
  - **作者**: SmartFive
  - **核心问题**: 在使用 TRL 结合 vLLM 训练多模态 RL（如 GRPO + Qwen-VL）时，若传入高分辨率原图（如 1080x720），`vllm-mode="server"` 模式会出现严重的挂起现象，目前需手动调整图像尺寸才能解决。该问题暴露了 TRL 在 server-mode 下处理多模态大尺寸输入时的显存/调度瓶颈。

## 4. 关键 PR 进展

### 🚀 性能优化与核心 Bug 修复
- **[#5575](https://github.com/huggingface/trl/pull/5575) [OPEN] 分块交叉熵损失用于 SFT (最高降低 50% 显存)**
  - 引入 Chunked cross-entropy loss，优化显存峰值，是当前 SFT 训练提效的重点 PR。
- **[#5620](https://github.com/huggingface/trl/pull/5620) [OPEN] 修复 SFT 中的熵计算**
  - 修复了 SFT 熵指标在错误 token 位置取平均的问题，确保熵计算仅针对 `label != -100` 的预测位置。

### 🛠️ 架构重构与代码质量
- **[#5632](https://github.com/huggingface/trl/pull/5632) [OPEN] 对齐 KTO 与 DPO：将补全组装逻辑移至 Data Collator**
  - 重构 `KTOTrainer` 数据管道，将 `completions` 的组装从 `_prepare_dataset` 移至 `DataCollatorForUnpairedPreference`，提升代码统一性。
- **[#5616](https://github.com/huggingface/trl/pull/5616) [OPEN] 内部变量重命名：`async_reward_X` -> `async_X`**
  - 纯重构 PR，统一 GRPO 与 ALOO 算法内部的异步奖励循环变量命名。
- **[#5629](https://github.com/huggingface/trl/pull/5629) [CLOSED] 统一 Tokenizer 类型提示为 `PreTrainedTokenizerBase`**
  - 修复了类型提示未兼容 Fast Tokenizer 的问题。

### 🔬 模板支持与实验性功能
- **[#5627](https://github.com/huggingface/trl/pull/5627) [OPEN] 新增 Cohere 训练 Chat 模板**
  - 为 Cohere Command 模型家族注册了专用的训练变体聊天模板，支持 `assistant_only_loss=True`。
- **[#5560](https://github.com/huggingface/trl/pull/5560) [OPEN] `get_training_chat_template` 支持 Processor 输入**
  - 修正了参数和文档的误导，使其明确支持多模态 `ProcessorMixin`。
- **[#5625](https://github.com/huggingface/trl/pull/5625) [OPEN] LogCompletionsCallback 支持 generation_kwargs**
  - 为回调函数增加了灵活的 `generation_kwargs` 支持，不再强制要求传入完整的 `GenerationConfig` 对象。

### 🧪 测试与 CI/CD
- **[#5615](https://github.com/huggingface/trl/pull/5615) [OPEN] 上传 DistillationTrainer 测试套件**
- **[#5550](https://github.com/huggingface/trl/pull/5550) [OPEN] 修复 GRPO VLM 测试：多模态训练需要会话式提示**
- **[#5630](https://github.com/huggingface/trl/pull/5630) [OPEN] & [#5631](https://github.com/huggingface/trl/pull/5631) [OPEN]**: 规范化文档构建检查，统一 CI 中 doc-builder 的 commit hash。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

TRL 在 LLM/RLHF 领域的核心地位不仅体现在算法集成的广度上，更在于其当前在**底层训练机制**上的深度迭代：
1. **极致的显存与性能优化**：随着模型向多模态和长文本演进（如 Issue #5361 反映的痛点），显存成为最大瓶颈。PR #5575（分块损失降低 SFT 50% 显存）等针对性优化，直接决定了在固定算力下能否跑得动更大 batch size 或更大模型。
2. **严谨的算法与指标对齐**：修复 SFT 熵计算（#5620）、重构 KTO 数据管道以对齐 DPO（#5632）等动作，表明团队在追求速度的同时，正在严格把控底层数据流和指标计算的准确性。
3. **多模态 RL 的前沿探索**：从修复 VLM 的 GRPO 测试（#5550）到解耦 Processor（#5560），TRL 正快速完善 Vision-Language 模型的 RL 训练支持，这是目前开源 RL 生态竞争最激烈的赛道之一。

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

以下是为您生成的 verl 项目 2026-04-24 RL 日报摘要：

# verl 项目日报：2026-04-24

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃。项目共处理了 **8 条 Issues**（包含多个大模型训练的工程痛点反馈），合并/更新了 **27 条 PRs**，无新版本发布。当前社区的重心明显聚焦于**下一代超大规模 MoE 模型的训练支持（如 Qwen3.5）**、**异构硬件适配（XPU/NPU）**、以及 **Rollout 引擎的深度性能优化（PD 分离与全局负载均衡）**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **超大 MoE 模型训练支持反馈**：多位用户在推进 Qwen3.5 系列训练时遇到瓶颈。[#6123](https://github.com/verl-project/verl/issues/6123) 询问框架何时能完美支持 Qwen3.5-397B-A17B 的 GRPO 训练；[#6124](https://github.com/verl-project/verl/issues/6124) 指出目前超大尺寸（如 235B+）模型缺乏 FSDP 训练脚本，仅有 Megatron 方案；[#6125](https://github.com/verl-project/verl/issues/6125) 报告了 Qwen3-32B 在全异步模式下长序列训练时的随机 OOM 问题（怀疑内存泄漏）。
- **FP8 量化与显存报错**：[#6112](https://github.com/verl-project/verl/issues/6112) 反映开启 `fp8` 量化 rollout 时会触发 `runtimeerror`，影响 DeepSeek-R1 蒸馏及 Qwen3 模型。
- **底层 Tensor 维度 Bug**：[#6073](https://github.com/verl-project/verl/issues/6073) 暴露了 VLM SFT 中，当 micro-batch 恰好共享相同 seq_len 时，Nested Tensor 错位导致 RoPE 崩溃的隐蔽 Bug。
- **架构设计讨论**：[#5731](https://github.com/verl-project/verl/issues/5731) 探讨了在进行 on-policy distillation 时使用推理引擎而非训练引擎的精度差异原因。
- **26Q2 路线图更新**：[#5836](https://github.com/verl-project/verl/issues/5836) 持续进行中，收集了包括 MXFP8/NVFP4 低精度训练、Megatron FSDP 等核心需求。

## 4. 关键 PR 进展
今日的 PR 动态展示了 verl 在**系统架构解耦**和**极致性能压榨**上的双线发力：

- **Rollout 架构与性能优化**：
  - **SGLang PD 分离**: [#6117](https://github.com/verl-project/verl/pull/6117) 实现了 SGLang Prefill-Decode 分离式部署，支持 1:N 非对称布局和 per-rank 路由，大幅降低显存占用并提升推理吞吐。
  - **全局负载均衡**: [#6122](https://github.com/verl-project/verl/pull/6122) 引入全局组级别的 sticky 负载均衡器，优化多节点部署下的请求调度。
  - **Agent 框架解耦**: [#6129](https://github.com/verl-project/verl/pull/6129) 将 `LLMServerManager` 从 `AgentLoopManager` 中剥离，为更好地接入 NVIDIA NeMo-Gym 等第三方 Agent 框架铺路。
- **训练后端与显存优化**：
  - **FP8 权重量化转移**: [#5976](https://github.com/verl-project/verl/pull/5976) 将 FP8 权重量化从 Rollout GPU 转移到 Trainer GPU 执行，节省一半权重传输带宽。
  - **异步模式修复**: [#6095](https://github.com/verl-project/verl/pull/6095) 修复了全异步 Megatron 训练中开启参数卸载时的保存 Bug；[#6127](https://github.com/verl-project/verl/pull/6127) 修复了 3D Jagged NestedTensors 重建错误的问题。
- **多硬件生态与底层重构**：
  - **多异构硬件支持**: [#6119](https://github.com/verl-project/verl/pull/6119) 正式添加 Intel XPU 支持；[#6086](https://github.com/verl-project/verl/pull/6086) 引入统一的平台抽象层，以插件化机制支持寒武纪 MLU、摩尔线程 MUSA 等国产加速卡。
  - **Megatron 升级**: [#5423](https://github.com/verl-project/verl/pull/5423) 正在实装 Megatron-FSDP 模式支持，这也是社区极度期待的巨大特性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **突破大模型训练的工程边界**：面对 397B 级别的 MoE 模型，verl 正在通过实现 PD 分离调度、将量化步骤转移至训练侧等极具技术含量的手段，死磕大规模集群训练的通信带宽和显存瓶颈。
2. **极其敏捷的工程迭代与解耦**：从 Rollout 引擎的拆分、Agent 运行时的独立抽象可以看出，verl 正在快速从一个单纯的训练脚本库，演变为一个高内聚、低耦合的**工业级 RLHF 基础设施**。
3. **繁荣的开源共创生态**：项目展现出了极强的硬件包容性（CUDA, XPU, NPU, MLU 等）和后端多样性，已成为各硬件厂商、算法研究团队共同贡献的 RLHF 核心交汇点。这使其在最前沿的 RL 技术落地（如全异步训练、分布式检查点、策略蒸馏）上拥有无可比拟的迭代速度。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# torchtune RL 生态日报 (2026-04-24)

## 1. 今日速览
过去 24 小时，torchtune 仓库整体活跃度降至冰点，无新增 Issue、无新版本发布，仅有一项关于项目状态的 PR 更新。数据表明该项目目前已进入实质性停滞或收尾阶段。

## 2. 版本发布
- **最新 Releases**：无。

## 3. 重点 Issues
- **过去 24 小时更新**：0 条。
- **当前状态**：无未解决的新兴技术讨论或 Bug 反馈。

## 4. 关键 PR 进展
仅 1 条 PR 记录，且具有重要的架构/生态指示意义：
- **[#2961 [CLOSED] [CLA Signed] docs: note torchtune wind-down in README](https://github.com/pytorch/torchtune/pull/2961)**
  - **作者**: felipemello1
  - **状态**: Closed
  - **更新时间**: 2026-04-23
  - **摘要**: 该 PR 请求修改 README 文档，主要目的是**添加 torchtune 项目正式“降温/停止维护”的官方说明**。尽管该 PR 最终处于 Closed 状态，但结合 0 Issue 和 0 Release 的背景，这标志着项目已基本完成其生命周期。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 torchtune 宣布进入“wind-down（停止维护）”阶段，但作为 RL / LLM 微调开源生态曾经的核心基座，它在以下方面仍具长期的参考与技术沉淀价值：

1. **高质量的开源实现参考**：其沉淀的 RLHF、DPO、PPO 等大模型对齐算法的 PyTorch 原生实现代码，依然可以作为学术界和工业界编写高性能训练脚本的绝佳模板。
2. **架构演进的切片**：其代码库记录了从早期 LLM 微调脚本到模块化、分布式训练架构的演进过程，是研究训练框架设计模式的重要资产。
3. **生态技术路线的反思**：torchtune 的收尾，反映了当前开源 LLM 训练框架生态（如与 TRL、LLaMA-Factory 等的竞争）的残酷淘汰率与技术迭代方向。持续追踪其官方的“wind-down”说明及社区用户的迁移去向，有助于 RL 从业者准确把握下一步的开源技术栈选型。

---
*注：本报告基于 2026-04-24 GitHub 追踪数据自动生成。*

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 2026-04-24 强化学习（RL）开源生态项目日报摘要：

### 1. 今日速览
* **项目仓库**：[allenai/open-instruct](https://github.com/allenai/open-instruct)
* **统计周期**：2026-04-23 至 2026-04-24
* **核心动态**：过去 24 小时内项目无新版本发布与新增 Issues，但有多达 6 个核心 PR 发生状态更新。活动高度集中在核心开发者 [finbarrtimbers](https://github.com/finbarrtimbers) 身上，主要围绕 **SFT（监督微调）数据预处理流的重构与性能调优**，以及底层 OLMo-core 的训练对齐。

### 2. 版本发布
* **最新 Releases**：近 24 小时内无新版本发布。

### 3. 重点 Issues
* **动态**：过去 24 小时内无新增或更新的 Issues。当前的底层改进与重构均在 PR 中直接进行追踪与讨论。

### 4. 关键 PR 进展
本次更新涵盖了从工程架构解耦、性能大幅提升到依赖修复的多个重要 Pull Requests：

* **[性能优化] SFT Tokenization 流式改造，提速约 9.4 倍**
  * **PR**：[#1631 SFT tokenization streams directly to disk](https://github.com/allenai/open-instruct/pull/1631) (状态: OPEN)
  * **详情**：将 SFT Tokenization 过程从“内存数组累积”重构为“直接流式写入磁盘”。该优化消除了显式检查点（checkpointing）的需求，并带来了约 10 倍的采样处理速率提升（从 158.3 samples/s 大幅跃升）。这是大规模 RLHF/RL 训练中数据预处理的关键瓶颈突破。
* **[架构重构] 解耦 Numpy SFT 数据转换模块**
  * **PR**：[#1622 Extract numpy SFT conversion](https://github.com/allenai/open-instruct/pull/1622) (状态: CLOSED)
  * **详情**：将 HF 到 OLMo-core 的 numpy mmap 转换逻辑从独立脚本中抽取至 `open_instruct/numpy_dataset_conversion.py` 库模块。此重构为后续的 OLMo-core SFT 主流程提供了更友好的 API 导入支持。
* **[系统对齐] 校验 OLMo-core SFT 训练一致性**
  * **PR**：[#1620 olmo_core_finetune parity with pure olmo-core](https://github.com/allenai/open-instruct/pull/1620) (状态: OPEN)
  * **详情**：旨在确保 `open_instruct/olmo_core_finetune.py` 与原生的纯 OLMo-core SFT 循环具备严格的 step-by-step 训练对等性，以解决参考实验中观察到的指标发散问题。
* **[代码清理] GRPO 训练模块冗余移除**
  * **PR**：[#1635 Drop unused data_types import and inline batch.to(device)](https://github.com/allenai/open-instruct/pull/1635) (状态: CLOSED)
  * **详情**：清理了 `GRPOTrainModule` 中未使用的数据类型导入，并将 `batch.to(device)` 内联化。说明项目正在持续打磨 GRPO (Group Relative Policy Optimization) 这一核心 RL 算法的底层实现。
* **[功能废弃] 二进制断点续训机制被取代**
  * **PR**：[#1633 Use incremental binary checkpoint for tokenization resume](https://github.com/allenai/open-instruct/pull/1633) (状态: CLOSED)
  * **详情**：曾计划引入增量二进制文件（`.bin`）来替代单一 JSON 以优化断点续训，但由于 **#1631** 直接通过流式写入磁盘从根本上解决了内存与断点问题，该 PR 已被关闭。
* **[Bug 修复] 修复第三方依赖引用报错**
  * **PR**：[#1634 Fix import error when installing open-instruct as a dependency](https://github.com/allenai/open-instruct/pull/1634) (状态: CLOSED)
  * **详情**：修复了通过 pip 将 `open-instruct` 作为第三方库直接安装时出现的 `module not found` 错误，改善了下游开发者的生态集成体验。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **打通 RL 数据预处理瓶颈**：在大模型 RLHF 和 Post-training 阶段，海量 Token 的处理耗时是巨大瓶颈。#1631 中实现的近 10 倍流式解析提速，直接压缩了 RL 训练中 Actor/Critic 模型启动前的数据准备周期，具备极高的工程复用价值。
2. **深化底层训练引擎集成**：项目正在积极将数据处理、微调逻辑与 Ai2 的底层框架 `OLMo-core` 进行深度对齐（#1620, #1622）。这表明 `open-instruct` 不仅仅是一个脚本集合，而是正在演进为一个可扩展、高性能且紧密耦合底层算力的 RL/SFT 基础设施。
3. **持续打磨前沿 RL 算法**：从针对 GRPO 算法的代码重构（#1635）可以看出，项目团队正在持续优化、审查并迭代最新的强化学习对齐算法底层代码，是追踪大模型对齐技术工程落地的一手阵地。

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

# RL 日报摘要：Gymnasium (Farama-Foundation/Gymnasium)
**日期**: 2026-04-24

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度趋于平缓，无新版本发布，无新增或更新的 Issues。项目仅收到 1 个新的 Pull Request，主要针对文档中的死链问题进行日常修复。

## 2. 版本发布
- **过去 24 小时无新版本发布**。

## 3. 重点 Issues
- **过去 24 小时无新增或更新的 Issues**。

## 4. 关键 PR 进展
今日唯一的活动是提交了一个文档修复的 PR，表明社区仍在持续维护项目的文档质量：

- **[#1562 Fix link to Gym compatibility documentation](https://github.com/Farama-Foundation/Gymnasium/pull/1562)**
  - **状态**: [OPEN]
  - **作者**: LonelyGuy-SE1
  - **摘要**: 修复了文档中指向 Gym 兼容性说明的无效链接（原链接返回 404 错误）。该 PR 更新了目标 URL，确保用户在查阅旧版迁移指南时能够正确访问相关资源。

## 5. 为什么这个项目在当前 RL 生态值得继续关注
尽管今日数据反映出项目处于常规的低频维护期，但 Gymnasium 依然是强化学习开源生态的基石：
- **事实上的交互标准**：Gymnasium 提供的标准 API（如 `Env`、`Step`、`Reset` 等接口规范）已被 Shimmy、Stable-Baselines3、CleanRL 等主流 RL 框架和底层库广泛采用。
- **无缝的生态演进**：如 PR #1562 所示，项目当前的核心精力之一在于保证向下兼容性和平滑迁移。完善的兼容性文档可以极大降低开发者将老项目从 OpenAI Gym 迁移至 Gymnasium 的摩擦成本。
- **高质量的维护保障**：由 Farama-Foundation 团队主导，Gymnasium 避免了早期 OpenAI Gym 的停滞问题，持续提供去中心化、社区驱动的长期支持（包括 Bug 修复和向量环境 Vector Env 的性能优化）。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报 - 2026-04-24**
**追踪项目**: Farama-Foundation/PettingZoo

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库动态相对平稳，无新增 Issue、无新版本 Release，仅有一项关键性的维护 PR 发生了状态更新。项目当前正处于 v1.26.0 版本发布前的最后准备阶段。

*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **新版本发布**: 0 个

### 2. 版本发布
过去 24 小时内无新的 Release 发布。目前社区正围绕 `v1.26.0` 的最终发布进行收尾工作。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#1327 Changes for release v1.26.0](https://github.com/Farama-Foundation/PettingZoo/pull/1327)** [状态: OPEN]
  - **作者**: mwydmuch
  - **更新时间**: 2026-04-23
  - **摘要**: 这是一个旨在发布 `v1.26.0` 的维护性 PR。本次更新主要包含对前沿 Python 环境的适配以及对遗留依赖的清理。
  - **核心改动**:
    1. **版本号升级**：Bump 版本至 `1.26.0`。
    2. **Python 版本支持**：在 `pyproject.toml` 中解除了环境限制，正式允许 Python 3.13 和 3.14 的支持。
    3. **依赖项重构**：将已处于无维护状态的底层依赖从 `pygame` 迁移并切换至社区维护的活跃分支 `pygame-ce`。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为多智能体强化学习（MARL）的标准化 API 基准，其技术动向直接反映了 RL 底层生态的演进趋势。从今日的 PR 进展可以看出：
1. **紧跟 Python 上游迭代**：迅速适配 Python 3.13/3.14，确保 MARL 研究者能够利用最新的 CPython 性能优化（如更快的 free-threading 实验性支持），避免学术代码在新环境下出现兼容性断层。
2. **依赖链健康管理**：将渲染层依赖向 `pygame-ce`（Community Edition）转移，是开源界应对项目“烈士化（维护者倦怠/停更）”的典型最佳实践。这保障了多智能体环境在图形化渲染和基准测试（Benchmark）上的长期稳定性，巩固了其在 Farama 基金会（Gymnasium, Minari 等）生态中不可或缺的基石地位。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>