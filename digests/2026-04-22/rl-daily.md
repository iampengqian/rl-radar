# RL 开源生态日报 2026-04-22

> 生成时间: 2026-04-21 22:12 UTC | 覆盖项目: 15 个

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
当前大语言模型（LLM）的强化学习开源生态正处于从“算法验证”向“重基础设施建设的工业化生产”跃升的关键阶段。生态图谱可明确划分为三大阵营：
1. **大模型对齐与底层训练引擎（活跃核心）**：veRL、TRL、AReaL、OpenRLHF、Open Instruct、Slime 等项目主导了今日的代码迭代，重心全面转向千亿参数级别的分布式容错、异构硬件适配与多模态支持。
2. **沙箱与评测调度设施（演进先锋）**：以阿里系的 ROCK 和 ROLL 为代表，聚焦于 Agent RL 的落地，通过云原生沙箱和异构环境适配器补齐 RL 任务执行与反馈的工程拼图。
3. **经典 RL 基础库（稳定基座）**：Gymnasium、Stable Baselines3 等，侧重于底层 API 的规范打磨与代码健壮性维护，无大规模功能重构。

## 各项目活跃度对比
今日生态活动高度集中于大模型训练框架，基础设施项目次之，经典 RL 库处于平稳维护期。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **veRL** | 14 | 41 | 0 | 26Q2 路线图落地，核心架构大清洗，多硬件后端扩张 |
| **TRL** | 6 | 19 | 0 | 基础架构重构，SFT 显存深度优化，前沿对齐算法快速工程化 |
| **AReaL** | 3 | 12 | 0 | 攻坚 RLHF 底层通信瓶颈，推理与训练引擎深度解耦 |
| **ROCK** | 9 | 14 | 0 | 拥抱 Serverless 云原生，深耕沙箱底层稳定性与跨平台支持 |
| **Open Instruct** | 0 | 9 | 0 | 死磕底层分布式训练痛点，数据流处理加速与前沿策略梯度探索 |
| **Slime** | 3 | 5 | 0 | 前沿大模型 SFT 适配，对分布式容错机制严谨把控 |
| **OpenRLHF** | 3 | 0 | 0 | 扮演上游依赖“试金石”，暴露 PyTorch 2.10 与 Transformers 破坏性更新 |
| **ROLL** | 1 | 1 | 0 | 发力推理中心型 RL，引入通用 Reward 桥接机制 |
| **Gymnasium** | 1 | 1 | 0 | 深化环境动力学细粒度控制，强化类型提示标准 |
| **SB3** | 1 | 0 | 0 | 前端文档维护，高标准保障单智能体算法基线稳定性 |
| **CleanRL / PettingZoo / Tianshou 等** | 0 | 0 | 0 | 无明显活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态与复合生成式 RL**：纯文本对齐已成过去时。veRL 的多模态生成 RL 路线图、TRL 和 Slime 对 VLM 的修复，以及社区对多模态 RM 的探索，表明 RL 正向视觉、语音等多模态深度渗透。
2. **对齐算法的变体与演进**：为了解决稀疏奖励和长链推理问题，生态正在快速迭代新算法。如 Open Instruct 引入 Delightful Policy Gradient 改进 GRPO，TRL 实现 TPO 和 SD-Zero。
3. **Agent 与长链推理强化**：针对具备真实环境交互能力的 Agent 训练成为热点。AReaL 整合 Terminal Bench，ROLL 集成 Atropos，都是 RL 从“对齐数学题”向“系统级操作”演进的前沿探索。

**工程与基础设施侧信号：**
1. **异步调度与训练推理解耦**：为打破生成与训练的串行壁垒，各框架都在攻坚 Fully Async 机制。veRL 完善异步抢占恢复，AReaL 实现 NCCL 跨引擎热更新，TRL 推进 AsyncGRPO。
2. **底层显存与通信的极限压榨**：针对大模型训练的算力墙，SFT Chunked CE（TRL）、CP-local cross-entropy（AReaL）、大权重张量分块传输（veRL）成为显存优化的标准动作。
3. **云原生与 Serverless 化执行环境**：为应对海量并发 Agent 交互环境，ROCK 深度融合阿里云函数计算（FC3.0），探索从 Docker 容器向 Serverless 沙箱的底层算力演进。

## 差异化定位分析
1. **veRL：追求极致性能的跨平台 RL 工厂**。以其庞大的 PR 吞吐量（单日 41 个）和路线图来看，veRL 正在极力摆脱单一框架束缚，通过引入平台抽象层（FlagOS）整合 Ascend NPU 等异构算力，主攻超大规模多模态生成的工业化 RL 训练。
2. **TRL：HuggingFace 生态的算法与工程枢纽**。TRL 的核心护城河在于与 HF 生态的紧密绑定与极快的算法复现能力。当前正经历“由广入深”的重构期，致力于将早期的算法堆砌转化为高稳定性的工业级基座。
3. **AReaL 与 Open Instruct：前沿底层系统的攻坚者**。两者都显示出极强的底层系统研发属性。AReaL 专注于训练与推理引擎（vLLM/SGLang）的无缝融合；而 Open Instruct 则在数据预处理流和梯度更新逻辑上做极度微观的性能与稳定性优化。
4. **阿里系双雄（ROCK 与 ROLL）：构建 RL 闭环的基础设施**。ROCK 专攻“运行环境”，推动沙箱的弹性与跨平台化；ROLL 专攻“调度与反馈”，打通异构 Reward 信号。两者协同，为 Agent RL 提供了完整的软件定义执行环境。
5. **OpenRLHF：大模型 RL 生态的底层探雷器**。单日无 PR 却产出了高价值的 Bug 报告（暴露 PyTorch 2.10 破坏性更新），凸显其作为 DeepSpeed/Ray 深度绑定架构在应对上游库变更时的前沿排雷作用。

## 值得关注的趋势信号
1. **上游基础库的“破坏性更新”引发连锁反应**。`transformers>=5.0` 和 `Torch 2.10` 导致多家 RL 框架出现底层崩溃或静默失败。这预示着大模型 RL 框架将被迫投入更多精力进行底层依赖适配，框架间的版本锁定将更加严格。
2. **异构算力与多引擎后端的“解耦设计”成为标配**。无论是 veRL 的平台抽象层，AReaL 的子模块化推理后端，还是 TRL 的推测解码支持，都在表明 RL 基础设施正在极力降低对特定芯片或单一推理引擎的强绑定。
3. **Reward 机制的标准化解耦接口开始浮现**。随着外部环境评估（如 Atropos）的引入，“通用奖励桥接”等概念开始在 ROLL 等项目中落地。这预示着未来 Reward Model 将作为一种可插拔的外部微服务独立演进，而非紧耦合在 RL 训练主循环中。
4. **工程微调细节决定大模型 RL 成败**。从今日 Gymnasium 对环境动态随机性的微调提案，到 Slime 因分布式切片引发代码回退，说明在超大参数规模下，数据切分、时区同步、磁盘限额等传统工程“小细节”正成为决定 RL 训练成败的核心要素。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 2026-04-22 RL 日报摘要：

---

# 📊 ROLL 项目日报 (2026-04-22)

**今日整体态势：项目无新版本发布，社区贡献焦点高度集中于扩展 LLM 后训练的异构环境适配能力。**

### 1. 今日速览
*   **Issues 动态**：新增/更新 1 条
*   **PR 动态**：新增/更新 1 条
*   **Releases**：0 个

### 2. 版本发布
过去 24 小时内无新版本发布。

### 3. 重点 Issues
*   **#427 [OPEN] Add Atropos Integration**
    *   **作者**: RUFFY-369
    *   **概览**: 建议为 ROLL 添加对 [Atropos](https://github.com/NousResearch/atropos) 环境（由 NousResearch 开源）的支持或示例集成。
    *   **核心诉求**: 社区成员指出 Atropos 正在成为**以推理为中心的强化学习**的关键基础设施。该集成将显著增强 ROLL 在**可验证推理任务**中的应用落地能力。
    *   **链接**: [alibaba/ROLL Issue #427](https://github.com/alibaba/ROLL/issues/427)

### 4. 关键 PR 进展
*   **#426 [OPEN] ROLL with Atropos environments**
    *   **作者**: RUFFY-369
    *   **概览**: 该 PR 直接响应了上述 Issue，旨在将 Atropos 作为模块化的智能体适配器集成到 ROLL 框架中。
    *   **技术亮点**: 引入了 **"Universal Reward Bridge"（通用奖励桥接）**机制。该机制作为一个可配置的适配层，使得 ROLL 框架能够原生、无缝地处理和计算 Atropos 环境中的 Reward Signal，打通了两个框架的底层通信。
    *   **链接**: [alibaba/ROLL PR #426](https://github.com/alibaba/ROLL/pull/426)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
本次 Issue 与 PR 的联动，精准切中了当前大模型强化学习（RLHF/RLAIF）领域的核心演进趋势：**从传统的对齐向深度的逻辑推理能力挖掘转变**。

1.  **把握 CoT 推理的 RL 前沿**：随着 OpenAI o1 等模型的发展，基于思维链的推理任务成为 RL 在 LLM 领域的最大应用场景。ROLL 积极接入专注于此的 Atropos 环境，展现了其面向高阶认知任务的前瞻性。
2.  **解耦的 Reward 适配架构**：PR #426 提出的 Universal Reward Bridge 反映了 ROLL 良好的架构设计。通过解耦环境交互与 Reward 计算，ROLL 正在将自己定位为一个更具包容性的 RL 底层调度引擎，能够灵活接入各种外部异构评估环境。这对于研究多源 Reward 信号融合的 RL 研究人员具有极高的工程价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 项目日报摘要
**仓库**: [alibaba/ROCK](https://github.com/alibaba/ROCK)  
**日期**: 2026-04-22  
**分析师**: RL 开源生态项目分析师  

---

## 1. 今日速览
过去 24 小时内，ROCK 生态保持着高频的迭代节奏，共处理了 9 个 Issues 和 14 个 Pull Requests。整体动态聚焦于三大核心方向：**云原生沙箱的 Serverless 化支持**（阿里云函数计算 FC）、**沙箱底层能力的完善**（磁盘限额、时区同步）以及**跨平台与 API 规范化**（Windows 支持、WebSocket 代理请求头修复）。

---

## 2. 版本发布
过去 24 小时内**无**新的 Releases 发布。

---

## 3. 重点 Issues
今日的 Issues 主要涉及新功能提案与沙箱底层缺陷反馈：

- **支持阿里云函数计算 (FC) 沙箱运行时**  
  提议增加 FC Operator 模式，以支持在阿里云 Serverless 架构上运行沙箱。  
  链接: [alibaba/ROCK Issue #870](https://github.com/alibaba/ROCK/issues/870)

- **支持 FC 独立函数部署的会话级沙箱**  
  解决当前单函数多会话模式下无法为不同会话独立配置环境变量和 VPC 网络的问题。  
  链接: [alibaba/ROCK Issue #869](https://github.com/alibaba/ROCK/issues/869)

- **支持 FC 会话级环境变量与 VPC 设置**  
  与 #869 类似，聚焦于突破 FC 单函数多会话的配置共享限制。  
  链接: [alibaba/ROCK Issue #868](https://github.com/alibaba/ROCK/issues/868)

- **修复 WebSocket 代理丢失请求头问题**  
  指出代理在第二跳握手时未携带 `Origin`, `Authorization` 等关键头部信息。  
  链接: [alibaba/ROCK Issue #865](https://github.com/alibaba/ROCK/issues/865)

- **将时区环境变量传入 Docker 沙箱**  
  修复沙箱内默认 UTC 时区导致的前端文件时间与系统命令时间与用户实际时区（如 CST）相差 8 小时的问题。  
  链接: [alibaba/ROCK Issue #863](https://github.com/alibaba/ROCK/issues/863)

- **新增 Windows 系统支持**  
  社区呼声，希望 ROCK 能够原生支持 Windows 环境执行 Actions。  
  链接: [alibaba/ROCK Issue #862](https://github.com/alibaba/ROCK/issues/862)

- **支持沙箱磁盘空间限制**（已关闭，已解决）  
  链接: [alibaba/ROCK Issue #653](https://github.com/alibaba/ROCK/issues/653)

- **新增 Datasets SDK 及 CLI 命令**（已关闭，已解决）  
  链接: [alibaba/ROCK Issue #858](https://github.com/alibaba/ROCK/issues/858)

---

## 4. 关键 PR 进展
开发活动非常活跃，多项核心功能已提交代码或合并：

### 核心功能构建
- **feat: 新增阿里云函数计算 Serverless 运行时 Operator**  
  实现了 FC Operator 的核心模式，标志着 ROCK 向混合/无服务器架构迈出实质性一步。  
  链接: [alibaba/ROCK PR #867](https://github.com/alibaba/ROCK/pull/867)
- **feat: 阿里云函数计算 runtime provider 支持**  
  引入 FC 3.0 作为沙箱 provider，支持 Custom Runtime、Custom Container 及熔断机制。  
  链接: [alibaba/ROCK PR #643](https://github.com/alibaba/ROCK/pull/643)

### 底层修复与优化
- **fix(proxy): 代理握手时转发白名单请求头** (对应 Issue #865)  
  通过白名单机制确保 WebSocket 上行握手时携带 `Authorization` 和 `X-Forwarded-*` 等关键头。  
  链接: [alibaba/ROCK PR #866](https://github.com/alibaba/ROCK/pull/866)
- **feat(docker): 传递 TZ 环境变量至沙箱容器** (对应 Issue #863)  
  采用标准的 POSIX `TZ` 变量（默认 `CST-8`）修复时区偏移。  
  链接: [alibaba/ROCK PR #864](https://github.com/alibaba/ROCK/pull/864)
- **feat(sandbox): 通过 Docker storage-opt 限制容器 rootfs 磁盘**  
  已合并，控制测试/运行时的容器磁盘爆炸风险。  
  链接: [alibaba/ROCK PR #860](https://github.com/alibaba/ROCK/pull/860)

### 生态与跨平台
- **feat: 支持 Windows PowerShell** (对应 Issue #862)  
  绕过了部分不兼容的 Python 包，使 ROCK 环境及 CLI 可在 Windows 上运行。  
  链接: [alibaba/ROCK PR #861](https://github.com/alibaba/ROCK/pull/861)
- **feat(datasets): 增加 Datasets SDK 与 OSS 注册中心 CLI**  
  完善了 Envhub 组件，支持数据集的上传与结构化管理。  
  链接: [alibaba/ROCK PR #859](https://github.com/alibaba/ROCK/pull/859)

### 发布分支反合
- **[CP 1.6] 容器 rootfs 磁盘限额反合**  
  链接: [alibaba/ROCK PR #872](https://github.com/alibaba/ROCK/pull/872)
- **[CP 1.6] 数据库连接单测与参数优化反合**  
  链接: [alibaba/ROCK PR #871](https://github.com/alibaba/ROCK/pull/871)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **算力与沙箱的 Serverless 化演进**  
   ROCK 正在深度集成阿里云函数计算（FC3），探索从传统的 Docker 容器沙箱向 Serverless 沙箱的演进。对于 RL 任务（如海量并发环境的异步交互、Env 渲染、Reward 计算等），这提供了高弹性、低运维成本的新范式。
2. **RL 基础设施细节的持续打磨**  
   今天处理的“时区一致性”、“磁盘限额”和“WebSocket 鉴权透传”等问题，看似微小，却是解决 RL 多智能体通信、长时间训练环境挂载、云端并发评测中脏数据产生等痛点的基石。
3. **跨平台与数据处理闭环**  
   Windows 生态的接入和 `Datasets SDK` 的加入，表明 ROCK 正在降低用户的端侧使用门槛，并致力于统一 RL Benchmark 数据集的管理标准。这有助于吸引更多非纯 Linux 服务器背景的算法研究员参与到生态中。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026-04-22 Slime 项目 RL 日报摘要：

# Slime (THUDM/slime) RL 开源生态日报
**日期**: 2026-04-22

### 1. 今日速览
在过去 24 小时内，Slime 仓库共处理了 3 条 Issues 和 5 条 Pull Requests，无新版本发布。社区当前的核心焦点集中在 **GLM-5 模型的 SFT（监督微调）适配** 以及 **底层分布式训练/推理的稳定性修复**。值得注意的是，近期为解决序列均衡分区回退机制引入了 Bug，并于今日被核心开发者回退（Revert）。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **分布式训练微批次切片导致空 Tensor 崩溃**：[#1838](https://github.com/THUDM/slime/issues/1838)
  在多卡 DP ranks 环境下执行 `all-reduce` 获取 `num_microbatches` 时，`_get_capped_partitions` 可能会产生空的微批次切片，导致 `torch.cat()` 抛出异常。此缺陷与今日的 Revert 操作（见 PR #1848）高度相关。
- **Qwen3-VL 模型多模态推理异常**：[#1850](https://github.com/THUDM/slime/issues/1850)
  用户报告在使用 Slime 构建的 Docker 镜像通过 SGLang 部署 Qwen3-VL-4B-instruct 时，视觉模块无法正确解析图像，输出乱码（如 `????`）。
- **Megatron 桥接模块缺失报错**：[#1711](https://github.com/THUDM/slime/issues/1711)
  在对接 Qwen 35 的第三方 Megatron 桥接仓库时，出现 `ModuleNotFoundError`，核心文件 `peft_bridge.py` 缺失导致无法正常导入。

### 4. 关键 PR 进展
- **[REVERT] 修复序列均衡分区回退机制**：[#1848](https://github.com/THUDM/slime/pull/1848) (Closed)
  核心开发者 `zhuzilin` **回退**了之前合入的 PR #1823。由于该回退机制（Fallback）引入了导致微批次切片为空的严重 Bug（对应 Issue #1838），团队目前选择直接撤回以保证主支训练的稳定性。
- **[OPEN] GLM-5 SFT 完整支持**：[#1844](https://github.com/THUDM/slime/pull/1844)
  开发者 `samaritan1998` 提交了针对 GLM-5 模型的 SFT 全流程支持。主要包含专用的 Loss Mask 策略（适配无闭合标签的 `...` 格式）、Megatron 模型配置及启动脚本，并补充了多轮对话和工具调用的单测。
- **[CLOSED] 添加 GLM-5 SFT Loss Mask 支持**：[#1824](https://github.com/THUDM/slime/pull/1824) (Closed)
  类似功能的竞争 PR（由 `stevewx` 提交），已被关闭，推测相关功能已由上述的 #1844 PR 以更完整的形式覆盖。
- **[CLOSED] 支持 NVIDIA DGX Spark (GB10 / arm64)**：[#1835](https://github.com/THUDM/slime/pull/1835) (Closed)
  试图将 Slime 的 Docker 构建流水线扩展至 NVIDIA DGX Spark (Grace CPU + Blackwell GPU, `sm_121a` 架构)，目前已被关闭，官方可能正在评估或等待硬件适配的进一步规划。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为大模型底层训练框架，Slime 当前的代码动态凸显了其在 RL/Post-training 阶段的核心工程价值：
1. **紧跟前沿模型架构**：快速响应并适配 GLM-5 的 SFT 需求（如思维链 `step_loss_mask` 处理），表明该框架具备支持最新具备 Deep Thinking 能力 RL 算法（如迭代式强化学习）的工程敏捷性。
2. **多模态 RL 基础设施潜力**：今日关于 Qwen3-VL 的部署讨论（Issue #1850）表明社区正在尝试将其应用边界扩展至多模态 RLHF/VLM 对齐领域。
3. **对底层分布式容错机制的严谨把控**：从 `get_seqlen_balanced_partitions` 引发张量崩溃到果断回退代码（PR #1848），展现了维护团队对大规模 RL 训练中“序列长度均衡”这一痛点难点的重视，这对于保障 PPO/DPO 等复杂 RL 训练集群的稳定性至关重要。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-04-22)

## 1. 今日速览
过去 24 小时内，AReaL（github.com/inclusionAI/AReaL）仓库保持了较高的开发活跃度。社区共更新了 **3 个 Issues** 和 **12 个 Pull Requests**，无新版本发布。当前阶段的重心明显聚焦于**推理引擎的解耦与性能优化**，以及**底层分布式训练基础设施的升级**。核心维护者 `garrett4wade` 在一天内集中推进了多个架构重构与依赖升级的高优先级 PR。

## 2. 版本发布
- **最新 Releases**: 无。当前核心开发仍在主分支上进行密集的架构调整，尚未切出新的稳定版本。

## 3. 重点 Issues
- **[架构优化/新手友好] 重构推理服务 HTTP 客户端**：Issue [#1217](https://github.com/inclusionAI/AReaL/issues/1217) 指出 `areal/experimental/inference_service/` 中存在三类 HTTP 反模式（未复用客户端、顺序调用、响应模型不一致），导致 TCP 连接和 SSL 握手浪费。该项目已标记为 `good first issue` 和 `call-for-contribution`，适合社区开发者介入。
- **[高优 Bug] vLLM 桥接后端导致数据损坏**：Issue [#1222](https://github.com/inclusionAI/AReaL/issues/1222) 报告了在处理视觉/聊天模型重提交时，`VLLMBridgeBackend` 会静默丢弃累积的 token 并发生 mutate。该缺陷被定为高严重级别，直接影响数据完整性。
- **[训练 Bug] 单控制器 SFT Token 重复计算**：Issue [#1202](https://github.com/inclusionAI/AReaL/issues/1202) 指出在特定单控制器配置下，SFT（监督微调）流程会对训练 tokens 进行重复计算。该 Bug 可稳定复现。

## 4. 关键 PR 进展
- **[架构重构] 推理后端子模块化解耦 (CLOSED)**：PR [#1221](https://github.com/inclusionAI/AReaL/pull/1221) 将庞大的 `data_proxy/backend.py` 拆分为基于协议的 `sglang` 和 `vllm` 子模块。这是零功能变更的纯结构重构，为后续的跨引擎权重同步打下了基础。
- **[高优/基础设施] 核心运行时依赖全面升级 (OPEN)**：PR [#1206](https://github.com/inclusionAI/AReaL/pull/1206) 集中升级了底层依赖，包括 `megatron-core` (0.16.0→0.17.0)、`sglang` (0.5.9→0.5.10.post1) 和 `vllm`，确保 RL 训练底座与上游最新特性对齐。
- **[特性] 跨引擎 NCCL 权重同步机制 (OPEN)**：PR [#1214](https://github.com/inclusionAI/AReaL/pull/1214) 引入了基于 `awex` 后端的 FSDP 训练 Worker 与 SGLang 推理服务器之间的权重更新基础设施，通过 NCCL P2P 实现高效的跨引擎权重同步。
- **[特性] Megatron SFT 性能与显存优化 (OPEN)**：PR [#1223](https://github.com/inclusionAI/AReaL/pull/1223) 针对基于 Megatron 的 SFT 引入了 **CP-local cross-entropy loss**，消除了 Context Parallel (CP) 级别间昂贵的 logits all-gather 通信，大幅提升长文本训练效率。
- **[特性] SGLang 推理侧流水线并行 (OPEN)**：PR [#1162](https://github.com/inclusionAI/AReaL/pull/1162) 为 SGLang 推理后端实现了 Pipeline Parallelism (PP) 支持，使其能够在所有三种训练引擎下执行 `pp_size > 1` 的训练。
- **[示例] Terminal Bench 智能体训练流程 (OPEN)**：PR [#1224](https://github.com/inclusionAI/AReaL/pull/1224) 新增了基于 Terminal Bench 1.0 任务训练终端 Agent 的完整示例，展示了 AReaL 在 RL 智能体实际场景中的应用范式。
- **[内部维护] 新增维护者与会议链接更新 (CLOSED)**：PR [#1220](https://github.com/inclusionAI/AReaL/pull/1220) 和 PR [#1219](https://github.com/inclusionAI/AReaL/pull/1219) 完成了项目维护者名单的扩充及社区会议链接的更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚 RLHF 底层计算瓶颈**：AReaL 目前在解决 RLHF 中最棘手的系统问题——**训练与推理的融合**。从消除 CP all-gather 通信（#1223）到基于 NCCL P2P 的权重热更新（#1214），项目正在从底层重塑 RL 训练的吞吐量上限。
2. **多引擎后端的标准化抽象**：项目正在积极推进推理后端的解耦（#1221），统一调度 vLLM 与 SGLang，并提供统一的 PP/TP 分布式支持（#1162）。在当前 LLM 推理引擎百花齐放但又高度碎片化的背景下，这种标准化抽象极具前瞻性。
3. **关注 Agent 与真实交互场景**：除了传统的数学/代码推理，AReaL 开始整合 Terminal Bench（#1224）等真实环境交互基准。这表明其 RL 框架正在从纯粹的“对齐数学题”向具备通用系统操作能力的 Agent 基座演进。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL RL 日报摘要 | 2026-04-22

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度。共有 **0 个新版本发布**，**6 条 Issue 更新**（3 open / 3 closed），以及 **19 条 PR 更新**（15 open / 4 closed）。核心动向集中在：SFT 显存优化、KTO 架构重构、新型对齐算法（TPO, SD-Zero）的引入，以及 AsyncGRPO 的工程能力补齐（LoRA, vLLM 推测解码）。

## 2. 版本发布
无。

## 3. 重点 Issues
- **[#5604] [Feature] 在 `vllm-serve` 中支持 Speculative decoding**  
  建议在 CLI 中暴露 vLLM 的 `speculative_config`，以便在 GRPO/RLOO/OnlineDPO 训练的生成阶段启用推测解码（如 Qwen3 原生 MTP heads、Eagle3 drafts），避免用户 fork 脚本。已对应提交 PR #5605。  
  链接: https://github.com/huggingface/trl/issues/5604

- **[#4786] [Refactoring] KTO 架构系统性重构**  
  长期跟踪 Issue，旨在重构 `KTOTrainer` 以符合现代 Trainer 架构，提升可维护性并补齐缺失功能。当前重构工作正在通过多个 PR 推进（见 PR #5612, #5606）。  
  链接: https://github.com/huggingface/trl/issues/4786

- **[#5613] [Feature] DPOTrainer 支持传入数据集提供的样本权重**  
  提议增加 `sample_weight` 列支持，在 batch 聚合前对 unreduced DPO loss 进行缩放，弥补当前仅支持模型计算权重的不足。  
  链接: https://github.com/huggingface/trl/issues/5613

- **[#5611] [Docs] GRPO 文档模型名不一致及 OOM 排错表缺失**  
  发现 `grpo_trainer.md` 中模型名称与 `README.md` / `quickstart.md` 不一致，且 OOM 排错指南缺少 GRPO 标签。  
  链接: https://github.com/huggingface/trl/issues/5611

## 4. 关键 PR 进展

### 性能与核心训练优化
- **[#5575] SFT 分块交叉熵损失 (Chunked cross-entropy loss) —— 最高节省 50% VRAM**  
  引入分块计算机制，将 SFT 的峰值显存占用降低一半，默认 chunk size 设为 256。对长文本或显存受限场景意义显著。  
  链接: https://github.com/huggingface/trl/pull/5575

- **[#5617] 统一 SFT 熵指标与 Loss 的 Token 计算范围**  
  修复了默认熵指标基于所有非 padding tokens 平均，而 loss 仅计算非 ignored label tokens 导致的不一致问题（影响 `completion_only_loss=True` 等场景）。  
  链接: https://github.com/huggingface/trl/pull/5617

### 新算法与 Trainer 引入
- **[#5591] 新增 Target Policy Optimization (TPO) Trainer**  
  实现 TPO 算法，将其作为 `GRPOTrainer` 的 `loss_type="tpo"` 扩展，通过目标分布 $q_i \propto p_i^{\text{old&#125;&#125; \cdot \exp(u_i / \eta)$ 进行序列级优化。  
  链接: https://github.com/huggingface/trl/pull/5591

- **[#5609] [Experimental] Self-Distillation Zero (SD-Zero) 实现**  
  基于“将二元奖励转化为密集监督”的思想，实现两阶段训练：自我修正训练（SRT）及后续对齐优化。  
  链接: https://github.com/huggingface/trl/pull/5609

### AsyncGRPO 与 vLLM 集成
- **[#5610] 为 AsyncGRPO 添加 LoRA 支持**  
  之前的 AsyncGRPO 仅支持全量微调与 NCCL 权重同步。此 PR 采用 HTTP reload 机制引入 LoRA 适配器支持，避开 vLLM 内部参数名不匹配的问题（基于 Gemma 4 测试）。  
  链接: https://github.com/huggingface/trl/pull/5610

- **[#5605] 在 `vllm-serve` 中添加 `--speculative_config` 参数**  
  对应 Issue #5604，将 vLLM 的推测解码配置暴露为 CLI 参数，提升在线强化学习训练的生成吞吐量。  
  链接: https://github.com/huggingface/trl/pull/5605

- **[#5538] [Closed] 修复 AsyncGRPO 忽略传入的 `processing_class` 问题**  
  使 `AsyncRolloutWorker` 正确复用外部传入的 tokenizer，避免在提供 `processing_class` 时重复加载。  
  链接: https://github.com/huggingface/trl/pull/5538

### 重构与工程健壮性
- **[#5612] KTO 架构对齐 DPO：内联 Tokenization 与引入 DataCollatorForKTO**  
  将两趟 tokenization 流程合并为单趟，并引入 KTO 专属 DataCollator，为后续重构奠定基础（属于 Issue #4786 计划的一部分）。  
  链接: https://github.com/huggingface/trl/pull/5612

- **[#5594] 修复 DistillationTrainer 在变长输出下的 NaN 梯度问题**  
  解决了在使用 teacher server + reverse KL 散度时，由于 batch 内 padding 导致的梯度异常。  
  链接: https://github.com/huggingface/trl/pull/5594

- **[#5549] [Closed] 停止支持 vLLM 0.11**  
  弃用旧版 vLLM，为后续将最低版本提升至原生支持权重同步的 vLLM 0.18 做铺垫。  
  链接: https://github.com/huggingface/trl/pull/5549

- **[#5616] 内部变量重命名：`async_reward_X` -> `async_X`**  
  低风险重构，精简 GRPO 与 ALOO 代码间的差异，不改变外部接口。  
  链接: https://github.com/huggingface/trl/pull/5616

## 5. 为什么这个项目值得在当前 RL 生态继续关注

TRL 在过去一天的开发活动清晰地展示了其在 LLM 对齐领域的护城河与演进方向：

1. **从算法广度向深度进化**：除了快速跟进最新论文（TPO、SD-Zero），核心开发者正投入精力对现有的 SFT、DPO、KTO 进行底层重构（如 Chunked CE、单趟 tokenization、修复 NaN），这表明项目正从“算法大集合”向“工业级高稳定基座”转型。
2. **深耕在线强化学习工程瓶颈**：围绕 AsyncGRPO 的密集更新（LoRA 支持、推测解码、Tokenizer 复用、vLLM 版本迭代）直指当前 GRPO 等在线 RLHF 方法最大的痛点——生成与训练的工程协同效率。这种生产级的优化是其他纯算法库难以比拟的。
3. **生态兼容性持续拓宽**：无论是针对 Qwen3 最新版本的模板适配、VLM 多模态训练修复，还是与 `liger-kernel-nightly` 的兼容性处理，TRL 始终保持着与 HuggingFace 核心生态及底层推理/训练加速框架的紧密同步。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-04-22)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库整体节奏以问题排查和功能咨询为主。新增 0 个 PR，0 个 Release，但有 3 个 Issue 产生更新。焦点集中在**上游依赖库版本更新引发的兼容性故障**，涉及 `ring_flash_attn` 和 `LRScheduler` 核心机制。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues

### 🔴 核心机制/上游兼容性故障
*   **Torch 2.10 `LRScheduler._update_lr` 破坏 LoRA 训练**
    *   **链接:** [#1225](https://github.com/OpenRLHF/OpenRLHF/issues/1225)
    *   **状态:** [OPEN] | 作者: allen-dc
    *   **摘要:** DeepSpeed 在构建底层优化器时会过滤掉空的参数组，但 LR scheduler 在 `strategy.prepare()` 运行之前就已初始化并捕获了原始参数组的 `base_lrs`。这导致长度不匹配，从而触发了 Torch 2.10 中 `zip(..., strict=True)` 严格的校验报错。
*   **Transformer 版本更新导致 `ring_flash_attn` 导入失败**
    *   **链接:** [#1222](https://github.com/OpenRLHF/OpenRLHF/issues/1222)
    *   **状态:** [CLOSED] | 作者: allen-dc
    *   **摘要:** 由于近期 `transformers` 库的版本升级，破坏了现有的 API 接口，导致在导入 `ring_flash_attn` 的参数更新函数时出现底层 C++ / 库级别的崩溃。

### 🟡 功能支持咨询
*   **关于多模态奖励模型的支持情况**
    *   **链接:** [#1224](https://github.com/OpenRLHF/OpenRLHF/issues/1224)
    *   **状态:** [OPEN] | 作者: spirit-moon-fly
    *   **摘要:** 社区开发者询问当前版本是否已经支持多模态 Reward Models 的训练，并寻求官方训练脚本。

## 4. 关键 PR 进展
过去 24 小时无新增或更新的 Pull Request。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

尽管当前处于代码沉淀期（无新 Release 和 PR），但今日的 Issue 动向恰恰反映了 OpenRLHF 在大模型 RLHF 链路中的**关键地位**：

1.  **上游依赖的“试金石”:** Issue #1222 和 #1225 表明，OpenRLHF 是最早触及并暴露出 `PyTorch 2.10` 和最新 `Transformers` 库深层破坏性变更的前沿项目之一。这些在序列并行（Ring Attention）和 DeepSpeed 底层优化器组中的排雷，对整个开源 RL 生态的稳定性至关重要。
2.  **多模态对齐的演进方向:** Issue #1224 折射出社区对多模态 RLHF 的强烈需求。OpenRLHF 凭借其解耦良好的 Ray/DeepSpeed 架构，正处于从纯文本扩展到全模态对齐训练的关键节点。
3.  **工业级基础设施护城河:** 开发者在此遇到的问题（如序列并行注意力机制冲突、分布式 Lora 调度器断言）均属于 10B+ 参数模型规模化训练的硬骨头。OpenRLHF 持续跟进并适配这些复杂底层机制，确立了其作为工业级 LLM 对齐首选基础设施的地位。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# veRL 强化学习生态日报 (2026-04-22)

## 1. 今日速览
过去 24 小时内，veRL 项目保持高频迭代：新增或更新 **14 条 Issues** 和 **41 条 Pull Requests**，无新版本发布。社区当前的核心重心集中在 **26Q2 路线图的落地执行**（多模态生成、全异步训练增强、底层架构解耦与硬件后端扩展）以及多个紧急 Bug 的修复。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues

### 🔥 核心架构与路线图
- **[RFC] Multi-modal Generation RL 2026Q2 Roadmap** (#5755): 规划了多模态生成式 RL 的演进路线，重点包括 Rollout Engine 的 vLLM-Omni 增强（跨请求 batching、TP/DP 支持、中断机制等）。（👍 15，评论 16）
  链接: https://github.com/verl-project/verl/issues/5755
- **verl 26Q2 roadmap** (#5836): Q2 主线技术规划，重点推进 Megatron FSDP 启用及 VLM 性能优化、MXFP8/NVFP4 低精度训练、Qwen 3.5 LoRA 支持等。（👍 14）
  链接: https://github.com/verl-project/verl/issues/5836
- **[RFC] Alternative design for vllm-omni rollout LoRA sync** (#6078): 提出 `tmpfs + cudaHostRegister` 替代方案，以保留文件加载语义解决 FlowGRPO 中的 LoRA 权重同步瓶颈。
  链接: https://github.com/verl-project/verl/issues/6078

### 🐛 高优先级 Bug
- **`transformers>=5.0` 导致 GRPO 训练静默失败** (#6080): 升级至 `transformers 5.0` 后 `critic/rewards/mean` 恒为 0.0，降级即可恢复，属于**严重兼容性破坏**（Silent Failure）。（评论 9）
  链接: https://github.com/verl-project/verl/issues/6080
- **Sequence Parallelism 导致 Qwen-3.5 张量维度不匹配** (#6094): Agent-loop 多轮 RL 训练中，开启 SP 后 Qwen-3.5 出现维度报错，但 Qwen-3 正常，疑似模型架构适配问题。
  链接: https://github.com/verl-project/verl/issues/6094
- **Ascend NPU 下 mbridge + VPP 导致 IndexError** (#4815): 使用 Megatron+vLLM 时张量维度异常。
  链接: https://github.com/verl-project/verl/issues/4815
- **Ascend Rollout sleep 模式修复被主线覆盖** (#6100): 呼吁恢复此前针对 NPU 的 Rollout sleep 模式代码。
  链接: https://github.com/verl-project/verl/issues/6100

### 💡 功能增强提案
- **[RFC] Skip Everything in RL workflow** (#5998): 提出统一的 `SkipManager` 跳过系统，以加速训练调试。
  链接: https://github.com/verl-project/verl/issues/5998
- **支持 OpenAI 样式的 per-sample tools/tool_choice** (#6096): 现有的 `RLHFDataset` 尚未支持函数调用级别的动态注入，限制了对 Agent RL 的细粒度控制。
  链接: https://github.com/verl-project/verl/issues/6096

---

## 4. 关键 PR 进展

### 🚀 核心架构重构与性能优化
- **Qwen3.5 LoRA & MTP (Megatron-Bridge) 支持** (#5599): 涉及多仓库依赖联动，为 Qwen3.5 多令牌预测和 LoRA 训练提供完整支持。
  链接: https://github.com/verl-project/verl/pull/5599
- **移除 Legacy Workers** (#5890): 删除 `fsdp_workers.py` 和 `megatron_workers.py`（共 3084 行），全面转向 v0.7/v0.8 引入的 `engine_workers` 架构，大幅降低维护负担。
  链接: https://github.com/verl-project/verl/pull/5890
- **大权重张量分块传输** (#6091, #5980): 解决单一张量超过 `update_weights_bucket_megabytes` 导致显存溢出或 Crash 的问题，大幅提升大规模模型（如 VLM）的权重同步稳定性。
  链接: https://github.com/verl-project/verl/pull/6091

### ⚡ Fully Async 训练增强
- **异步训练支持 GenRM/DisRM 奖励模型** (#6044): 解除之前硬编码 `use_rm=False` 的限制，允许部署独立 GPU Reward Model。
  链接: https://github.com/verl-project/verl/pull/6044
- **异步训练支持在线策略蒸馏 (OPD)** (#6056): 使 Teacher Model 可独立运行于专属 GPU，摆脱共享资源池依赖。
  链接: https://github.com/verl-project/verl/pull/6056
- **异步 Drain Loop 抢占式恢复** (#6090): 允许在 `partial_rollout` 下中断等待长尾任务，提高调度效率。
  链接: https://github.com/verl-project/verl/pull/6090

### 🔧 多模态、Diffusion 与数据处理
- **Diffusion 训练代码解耦** (#6042): 将 LLM 与 Diffusion 的配置和损失函数完全解耦，为后续接入更多扩散模型/引擎铺路。
  链接: https://github.com/verl-project/verl/pull/6042
- **新增图像分辨率限制配置** (#6099): 引入 `data.max_pixels` 和 `data.min_pixels`，修复大尺寸图像产生过多视觉 token 导致 OOM 的问题。
  链接: https://github.com/verl-project/verl/pull/6099
- **增强全局负载均衡** (#6059): 推进 Request 路由路线图，优化多卡/多节点的推理分发效率。
  链接: https://github.com/verl-project/verl/pull/6059

### 🖥 硬件与底层生态
- **引入平台抽象层及 FlagOS 多芯片后端支持** (#6086): 通过统一插件系统支持 CUDA、Ascend NPU、CPU 等多种底层硬件的 RL 训练。
  链接: https://github.com/verl-project/verl/pull/6086
- **Qwen3.5 CANN 8.5.2 A2 Docker 镜像** (#6098) & **NPU CI 流水线更新** (#6102): 持续完善 Ascend 硬件生态的适配与持续集成能力。
  链接: https://github.com/verl-project/verl/pull/6098

### 🛠 工具链与工程化
- **引入 SkipManager 统一跳过管理** (#6097): 配套 Issue #5998，提升 RL 流程调试效率。
  链接: https://github.com/verl-project/verl/pull/6097
- **引入 `uv` 加速 CI 依赖安装** (#6092): 解决传统 `pip` 缓存引发的并发问题，显著加快 CI 流水线。
  链接: https://github.com/verl-project/verl/pull/6092
- **修复验证集生成缺少 UID 追踪** (#6101): 在 `main_ppo_sync` 中为验证 dump 数据补全 UID，修复样本溯源断链问题。
  链接: https://github.com/verl-project/verl/pull/6101

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **前沿模型与算法的极速适配**：社区正在快速响应并适配业界最新模型（如 Qwen3.5, Gemma-4）和算法（如 FlowGRPO 多模态生成、GenRM 奖励模型），保证框架始终位于 LLM/RL 技术前沿。
2. **从“可用”向“极致性能与扩展性”演进**：通过彻底移除 Legacy 架构、完善 Fully Async 调度（抢占式恢复、独立 RM/Teacher）、以及底层显存/通信优化（大权重分块、NCCL/NIXL 引擎改进），正大幅降低大规模 RL 训练的工程门槛与隐性成本。
3. **突破硬件绑定，打造跨平台 RL 基础设施**：主动引入平台抽象层（FlagOS 等），在 NVIDIA 与 Ascend 等多芯片生态间构建统一接口，这在当前全球算力多元化趋势下具有极高的战略价值。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-04-22)

## 1. 今日速览
过去 24 小时内，`allenai/open-instruct` 仓库无明显版本发布与 Issues 动态，但代码库迎来 9 次 Pull Requests 更新（6 个 Open，3 个 Closed）。核心开发方向集中在 **SFT 数据处理流的水利化/加速** 与 **RL 算法前沿探索（GRPO、离线蒸馏）**，其中以 vLLM 权重同步修复和 tokenization 流程重塑最为关键。

## 2. 版本发布
过去 24 小时及近期无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
以下为近期活跃的 PRs 概览：

*   **[架构/性能] SFT Tokenization 流程加速与解耦**
    *   [#1631 [OPEN]](https://github.com/allenai/open-instruct/pull/1631): 通过引入 `.with_format('numpy')` 优化 HuggingFace 数据集遍历，使 SFT tokenization 采集循环性能提升约 **9.4 倍**。
    *   [#1622 [OPEN]](https://github.com/allenai/open-instruct/pull/1622): 将 HF 到 OLMo-core 的 numpy mmap 转换逻辑重构并提取为独立模块 `open_instruct/numpy_dataset_conversion.py`，以便下游 RL/SFT 训练主程序调用。
    *   [#1633 [OPEN]](https://github.com/allenai/open-instruct/pull/1633): 基于 #1622 构建，用增量二进制文件（`.bin`）替换单一 JSON 检查点，优化大数据集断点续传机制。

*   **[RL 算法] GRPO 损失函数创新**
    *   [#1628 [OPEN]](https://github.com/allenai/open-instruct/pull/1628): 引入 **Delightful Policy Gradient (Delight)** 及 **Kondo Gate** 到 GRPO 算法中。使用 `sigmoid(advantage * (-new_logprobs.detach()))` 实现按 token 门控策略梯度。参考自 [Osband 2026](https://arxiv.org/abs/2603.14608)。

*   **[RL 基础设施] 权重同步与步数逻辑修复**
    *   [#1627 [CLOSED]](https://github.com/allenai/open-instruct/pull/1627): 修复了 vLLM 权重同步的严重 Bug。解决了懒惰初始化导致步数硬编码，以及从 Checkpoint 恢复训练时 Actor 加载初始权重而非最新权重的问题。
    *   [#1616 [CLOSED]](https://github.com/allenai/open-instruct/pull/1616): 简化 `vllm_utils.py` 中的 `model_step` 处理逻辑，将权重广播与步数设置同步化。

*   **[RL 进阶] 离线蒸馏**
    *   [#1629 [OPEN]](https://github.com/allenai/open-instruct/pull/1629): 离线蒸馏（Offline Distillation via DistillKit）系列 PR 的第三部分，新增 Student 模型的离线蒸馏训练管线及配套蒸馏逻辑。

*   **[其他已关闭]**
    *   [#1632 [CLOSED]](https://github.com/allenai/open-instruct/pull/1632): 添加 Michael's Qwen3 DAPO script。
    *   [#1630 [CLOSED]](https://github.com/allenai/open-instruct/pull/1630): WIP2 (作者: mnoukhov)。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
当前 Open Instruct 的发展轨迹精准命中了开源大模型 RLHF/Post-training 阶段的两大痛点：**底层训练稳定性** 与 **前沿算法的快速工程化**。

1. **解决底层 RL 训练痛点**：随着模型参数和上下文长度的增加，RL 阶段的 vLLM 集成和数据吞吐成为巨大瓶颈。项目近期密集修复了 Checkpoint 恢复导致的权重同步错乱（#1627），并将数据预处理速度提升近 10 倍（#1631），这说明团队在死磕分布式 RL 的底层稳定性。
2. **紧跟前沿范式迭代**：从引入 **Delightful Policy Gradient** 优化 GRPO（#1628）到构建系统化的 **Student 离线蒸馏** 管线（#1629），项目不仅是 OLMo 模型的训练库，更是当前 AI2 探索下一代对齐算法（如改进的策略梯度、DAPO 等）的工程化试验田。对于关注 RL 算法落地与底座训练细节的研究者和工程师而言，具有极高的参考价值。

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

# RL 日报摘要：Gymnasium
**日期**: 2026-04-22 | **项目**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动保持平稳，无新版本发布。社区主要聚焦于底层类型提示的规范化修复，以及核心环境动态随机性 API 的扩展提案。
- **Issues 更新**: 1 条
- **PR 更新**: 1 条
- **Releases**: 0 个

### 2. 版本发布
- **无新版本发布**。当前仓库代码库保持稳定。

### 3. 重点 Issues
- **[enhancement] 为 LunarLander 添加完全可调的转移动态（包括确定性模式）**
  - **作者**: maxanisimov
  - **状态**: [OPEN] 
  - **摘要**: 提案建议增强现有的 `LunarLander` 环境，通过暴露可选的 `kwargs` 来显式控制环境的转移动态，允许用户自由调整或禁用物理系数和随机性。此举旨在提供开箱即用的确定性模式，避免研究者在实验时必须维护自定义的 Fork 或子类，对于需要精确环境动力学的 RL 算法研究（如基于模型的 RL 或仿真到现实 Sim2Real 迁移）具有重要意义。
  - **链接**: [Farama-Foundation/Gymnasium Issue #1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559)

### 4. 关键 PR 进展
- **[fix] 修复 `core` 中 `RenderFrame` 的 `TypeVar` 错误使用**
  - **作者**: jorensham
  - **状态**: [OPEN]
  - **摘要**: 纯代码质量修复。作者发现 `RenderFrame` 的类型变量被错误地用作返回类型，且未绑定到任何具体类型（在大多数类型检查器中会被降级推断为 `Any`）。该 PR 对其进行了正确的类型注解约束。这反映了项目对代码静态类型检查的严谨态度，有助于提升下游开发者使用 IDE 时的类型推导体验。
  - **链接**: [Farama-Foundation/Gymnasium PR #1560](https://github.com/Farama-Foundation/Gymnasium/pull/1560)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Gymnasium 已是当前强化学习领域的“基础设施级”标准库，但今天的动态表明它仍在向**更深的可控性**和**更高的工程标准**演进：
1. **环境动力学的精细化控制（Issue #1559）**：在当前的 RL 研究中（特别是 Domain Randomization 和 Sim2Real），对环境随机性的细粒度控制已成为刚需。该提案顺应了这一趋势，Gymnasium 持续优化底层 API 以支持更前沿的实验需求。
2. **类型系统的持续打磨（PR #1560）**：作为一个被数以千计下游项目依赖的基础库，Gymnasium 社区对 Python 类型提示的零容忍态度，保证了大型 RL 项目在集成时的代码健壮性和可维护性。它依然是构建稳定、可复现 RL 实验的最可靠基石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报摘要：Stable Baselines3 (SB3)
**数据统计周期**：2026-04-21 至 2026-04-22

## 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库整体保持平稳。无新版本发布，无活跃的 Pull Request 更新。文档侧出现一个已确认的前端 UI Bug，引起社区少量关注并产生交互。
- Issues 更新：1 条
- PR 更新：0 条
- Releases：0 个

## 2. 版本发布
无。当前仓库未发布新版本，主分支仍保持稳定。

## 3. 重点 Issues
- **#2245 [OPEN] [documentation] [Bug]: Left navigation moves when right content scrolls.**
  - **链接**：[DLR-RM/stable-baselines3 Issue #2245](https://github.com/DLR-RM/stable-baselines3/issues/2245)
  - **作者**：dvcodebase
  - **摘要**：这是一个文档页面的前端 CSS 交互 Bug。当用户在阅读文档并向下滚动右侧主体内容时，左侧的导航栏会产生异常的位移和跳动，严重影响阅读体验。
  - **进展**：作者已定位问题并自愿认领该修复任务，计划近期提交相关 PR。该 Issue 在过去几天内已积累 3 条讨论。

## 4. 关键 PR 进展
过去 24 小时内无 PR 更新。开发重点目前集中在底层维护和社区反馈的文档修复上。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
- **API 稳定性与工程标准**：作为当前 RL 开源社区中最具代表性的算法库之一，SB3 采用了极其严格的工程标准，其高星标数和持续的关注度证明了其在工业界与学术界的基石地位。
- **透明的社区响应与质量控制**：从今日追踪的 Issue #2245 可以看出，即便是一个非核心算法的“文档 UI 显示问题”，社区也能迅速响应并推动修复流程。这种对细节的关注和积极的维护状态，为研究人员和生产环境提供了极高的可靠性保障。
- **底座级依赖**：在日益复杂的 RL 生态（如多智能体、大模型强化微调）中，SB3 依然保持着最可靠的单智能体基线实现标准，是验证新思路不可或缺的基础设施。

</details>