# RL 开源生态日报 2026-04-21

> 生成时间: 2026-04-20 22:12 UTC | 覆盖项目: 15 个

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
当前大模型强化学习（LLM RL）开源生态正经历从“算法验证”向“工业级异构分布式基座”的跨越。以 verl、TRL、AReaL 为代表的核心框架正全力冲刺底层重构与极致的显存/吞吐优化，彻底告别早期的单体架构，拥抱完全异步与大规模容错机制。生态的焦点已明确从纯文本 LLM 升级为原生多模态（VLM）与 Agentic RL 的一等公民支持。

## 各项目活跃度对比
*注：以下统计为 2026-04-21 单日数据。无活动的项目（Gymnasium, PettingZoo, rl_games, SB3, Tianshou, torchtune）未列入表中。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 11 | 42 | 0 | 正在进行彻底的底层架构重构，向多模态与全异步全面演进 |
| **TRL** | 4 | 40 | 0 | 紧密跟进 vLLM 特性，死磕底层显存优化与对齐算法重构 |
| **Open Instruct** | 0 | 12 | 0 | 聚焦百亿参数级 vLLM 权重同步与 GRPO 并发容错攻坚 |
| **AReaL** | 7 | 14 | 0 | 发力异步权重交换与 HTTP 网关重构，瞄准千卡规模容错 |
| **ROCK** | 7 | 12 | 1 (v1.6.0) | 强化 RL 容器沙盒隔离与 CI/CD 闭环建设 |
| **Slime** | 7 | 5 | 0 | 极速适配 GLM5 等前沿模型与 ARM64 异构算力 |
| **CleanRL** | 0 | 2 | 0 | 维持极简学术基准，修补历史重构遗留的细节 Bug |
| **OpenRLHF** | 1 | 0 | 0 | 社区对多模态奖励模型 (VLM RM) 的需求开始显现 |
| **ROLL** | 0 | 1 | 0 | 推进构建系统现代化改造 (pyproject.toml) |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态与 Agentic RL 成为核心叙事**：纯文本 RLHF 已成红海，各大框架正集中解决 VLM 训练中的 RoPE 崩溃、图像丢失以及多轮 Agentic 轨迹的复杂上下文管理问题。
2. **从稀疏标量到密集 Token 级监督**：为了突破 Reward Hacking 和二值反馈的瓶颈，前沿算法如 Self-Distillation Zero、CHORD（混合 SFT+RL Loss）被快速工程化落地。
3. **GRPO 的工程化深水区**：Group Relative Policy Optimization 已取代传统 PPO 成为新一代基线，社区正集中精力解决其在长上下文下的 Judge 并发过载和 NaN 梯度问题。

**工程/基础设施侧信号：**
1. **全异步架构与显存极压优化**：为打破“推理等训练”的资源墙，“全异步训练”成为顶级项目的标配。同时，分块交叉熵、减少无用 Padding、更优的序列 Packing 算法（如 Karmarkar-Karp）被广泛引入以压榨显存。
2. **推理-训练权重同步机制的深度重构**：vLLM/SGLang 与训练引擎的权重同步是绝对痛点。各项目正在探索基于 NCCL 的异步权重交换 (AWEX)、`tmpfs + cudaHostRegister` 以及 vLLM v1 RPC 路径重构。
3. **高并发环境的安全沙盒化**：为支持 Agent 安全执行代码，基于容器的严格隔离（磁盘配额、只读挂载规避）成为 RL 基础设施的新常态。

## 差异化定位分析
*   **verl 与 TRL（生态基座与标准制定者）**：这两家呈现出极高的迭代频次。verl 更加激进，敢于进行破坏性重构，强推全异步与多模态底层抽象；TRL 则凭借 HuggingFace 的生态位，在做脏活累活（如分块交叉熵、KTO 架构对齐），提供最稳扎稳打的算法工程化实现。
*   **AReaL 与 Open Instruct（硬核系统级攻坚者）**：两者将主要精力倾注于底层分布式系统优化。AReaL 专攻异步权重传输和大规模故障自愈；Open Instruct 则在死磕 vLLM v1 架构下的模型广播与 Ray 集群资源调度。
*   **Slime（前沿与异构算力急先锋）**：紧贴自身及业界最新模型（GLM5、DeepSeek-V3.2），并且是唯一积极尝试适配边缘/端侧异构算力（NVIDIA DGX Spark/ARM64）的项目。
*   **ROCK 与 ROLL（工业化与平台化体系）**：ROCK 高度关注工程化质量、CI 闭环和容器沙盒安全，是大厂交付标准化的缩影；ROLL 则致力于降低开发者接入摩擦力。
*   **CleanRL 与 OpenRLHF（学术纯粹与蓄力观望）**：CleanRL 坚守单文件透明性，服务学术验证；OpenRLHF 当前代码虽平静，但其 Issues 清晰反映了下一阶段 VLM 对齐落地的刚需。

## 社区热度与成熟度
以 verl 和 TRL 为首的头部项目，单日 40+ PR 的处理量表明其社区处于极度活跃的“狂飙期”，核心维护者正在高频进行代码重构与评审。AReaL 和 Slime 则处于从“实验框架”向“千卡长时训练基座”迈进的成熟度爬坡阶段，Issue 列表中显著增加了长期 OOM 崩溃和状态恢复等生产级诉求。相比之下，CleanRL、Gymnasium 等传统经典项目进入平稳维护期，不盲目追逐大模型风口，保持了良好的学术稳定性。

## 值得关注的趋势信号
1. **`transformers>=5.0` 兼容性阵痛期来临**：verl 暴露的分词器导致 Reward 归零的致命 Bug 是一个危险信号，整个生态在升级核心底层依赖时正面临隐蔽的静默训练错误。
2. **投机解码 在 RL 中的普及**：TRL 社区呼吁在 GRPO/RLOO 生成阶段支持投机解码（如利用 MTP 头），这意味着推理加速技术正全面反哺强化学习采样流程，以应对日益加长的思维链。
3. **RL 基础设施的“云原生化”**：无论是引入 `httpx` 异步网关优化 TCP 连接、实现 Kubernetes 环境下的容错，还是引入 Pydantic 数据模型，RL 框架正在大规模吸收高并发微服务架构的设计模式。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-04-21）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体保持平稳，无新增 Issues 和版本发布。项目当前的工程化重心聚焦于底层构建系统的现代化改造，唯一的活动来自社区/团队开发者提交的关于引入现代 Python 打包规范并修复单元测试的关键 PR。

### 2. 版本发布
无新版本发布。
*   GitHub Releases: `https://github.com/alibaba/ROLL/releases`

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。
*   GitHub Issues: `https://github.com/alibaba/ROLL/issues`

### 4. 关键 PR 进展
过去 24 小时有 1 条 PR 更新，聚焦于工程现代化与代码质量保障：

*   **[#425 feat: add pyproject.toml for pip install and fix unit tests]** `[OPEN]`
    *   **作者**: SophusDavid
    *   **摘要**: 该 PR 引入了现代 Python 打包标准（PEP 517/518），通过添加 `pyproject.toml` 文件以替换传统的 `setup.py`。此外，该 PR 还定义了核心依赖与可选扩展依赖，并同步修复了多项单元测试问题。
    *   **分析**: 这是从源码级依赖管理向标准化 `pip install` 分发过渡的关键步骤，将显著降低外部 RL 研究者的接入门槛。
    *   **链接**: [`alibaba/ROLL PR #425`](https://github.com/alibaba/ROLL/pull/425)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **降低 RL 基础设施摩擦力**：正如 PR #425 所示，项目正在积极推进符合现代 Python 社区标准的打包与分发流程。对于 RL 从业者而言，标准化的 `pip` 安装和清晰的依赖管理意味着能够更快速地在集群环境中完成环境部署，将精力集中于算法研究而非环境配置。
*   **底层架构的稳健性**：在无高频业务代码提交的周期内，项目转向优化构建系统和修复底层单元测试，这反映了项目处于“夯实底层架构”的阶段。高质量的单元测试覆盖是保障复杂 RL 训练框架（尤其是分布式场景）稳定性的基石。

---
*数据来源: GitHub (`alibaba/ROLL`) | 统计时间: 2026-04-21*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-04-21 ROCK 开源项目 RL 日报摘要：

# 📊 ROCK (alibaba/ROCK) RL 生态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时内，ROCK 项目保持高频迭代，共产生 **12 条 PR 更新**（6 Open, 6 Closed）与 **7 条 Issue 更新**（5 Open, 2 Closed）。核心动态集中在 **v1.6.0 正式版本的发布**，以及针对容器沙盒环境和 CI/CD 的一系列稳定性修复与增强。社区正在积极完善 TS SDK 的集成测试，并解决由于外部依赖（如 iflow CLI）认证机制变更引入的突发性测试故障。

---

## 2. 版本发布
- **[v1.6.0 正式发布](https://github.com/alibaba/ROCK/releases/tag/v1.6.0)**
  - **核心更新**：
    - 修复了在 Kubernetes 环境中缺失 Redis provider 的问题 (`#764`)
    - 修复了 `arun` 常规模式下的运行缺陷 (`#767`)
    - 新增了 Bash 相关的使用示例 (`Feature/add bash example`)

---

## 3. 重点 Issues (Top Issues)
- **[Bug] UvRuntimeEnv 容器构建因只读挂载失败**：[#856](https://github.com/alibaba/ROCK/issues/856)
  - **详情**：当使用 `ROCK_WORKER_ENV_TYPE=uv` 时，主机目录以只读 (`:ro`) 方式挂载，导致容器内执行 `uv pip install` 写入元数据时报错。
- **[Feature] TS SDK 集成测试 CI 支持**：[#853](https://github.com/alibaba/ROCK/issues/853)
  - **详情**：提议在 TS SDK 的 CI 工作流中新增 `integration-test` Job，使用 self-hosted runner 提升测试覆盖率。
- **[Bug] iflow CLI 认证废弃导致测试失败**：[#847](https://github.com/alibaba/ROCK/issues/847)
  - **详情**：外部组件 `iflow-cli` 在近期更新中废弃了旧认证方式，强制要求 OpenAI Compatible API 授权，导致现有 CI 流水线阻断。目前社区已提交修复方案。
- **[Chore] 数据库连接单测与参数优化**：[#851](https://github.com/alibaba/ROCK/issues/851)

---

## 4. 关键 PR 进展
- **[Open] 修复 UvRuntimeEnv 只读挂载问题**：[#857](https://github.com/alibaba/ROCK/pull/857)
  - **详情**：针对 Issue #856，提出在容器内执行安装前，将项目复制到具备写权限的临时目录 (`/tmp`)，以绕过文件系统只读限制。
- **[Open] 适配 iflow CLI 最新 OpenAI 兼容认证**：[#848](https://github.com/alibaba/ROCK/pull/848)
  - **详情**：重构 CLI 配置，增加 `selectedAuthType` 设置，修复因认证接口弃用导致的 Agent 运行崩溃。
- **[Open] 强制限制容器 rootfs 磁盘使用**：[#654](https://github.com/alibaba/ROCK/pull/654)
  - **详情**：通过 Docker `storage-opt` 参数强制限制 Sandbox 容器的根文件系统磁盘配额，提升资源隔离安全性。
- **[Open] 清理 Model Client 测试中泄漏的定时器**：[#839](https://github.com/alibaba/ROCK/pull/839)
- **[Open] 添加 TS SDK 集成测试工作流**：[#842](https://github.com/alibaba/ROCK/pull/842) 与 [#855](https://github.com/alibaba/ROCK/pull/855)
- **[Closed] 文档重构：精简 Readme 版本更新模块**：[#850](https://github.com/alibaba/ROCK/pull/850)
  - **详情**：移除了冗余的 News 板块，保留并重命名为 Updates，仅展示最近 5 个版本的发布信息。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **强化的沙盒与隔离机制**：从今日集中暴露和修复的 `UvRuntimeEnv` 文件权限（[#857](https://github.com/alibaba/ROCK/pull/857)）及 `rootfs` 磁盘配额限制（[#654](https://github.com/alibaba/ROCK/pull/654)）可以看出，ROCK 在底层架构上对 RL 环境（Sandbox）的安全性和资源控制提出了极高的标准，这对跑通高并发、高风险的 RL 训练任务至关重要。
2. **高质量的工程化与 CI 闭环**：项目团队对外部依赖（如 iflow CLI）的破坏性更新响应极其迅速（[#847](https://github.com/alibaba/ROCK/issues/847) -> [#848](https://github.com/alibaba/ROCK/pull/848) 仅在当天完成闭环）。同时大力推进 TS SDK 的集成测试（[#855](https://github.com/alibaba/ROCK/pull/855)），说明其正在为更广泛的开发者群体构建极度坚实的质量底座。
3. **敏捷的版本交付**：伴随 v1.6.0 的发布，项目在底层算力调度（k8s provider）和上层应用执行（arun 模式修复）均实现了稳步推进，展现出大厂开源项目优秀的可持续交付能力。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 2026-04-21 Slime 项目 RL 日报摘要：

# Slime (THUDM) RL 生态日报 - 2026年4月21日

## 1. 今日速览
过去24小时内，Slime 项目保持较高的社区活跃度，共处理了 **7 条 Issues**（4 个新开，3 个历史更新）和 **5 条 PRs**。当前焦点高度集中在 **前沿大模型（GLM5、DeepSeek-V3.2）的兼容性**、**VLM 多模态强化学习的稳定性** 以及 **异构算力（如 NVIDIA DGX Spark/ARM64）的底层适配**。目前无新版本发布。

## 2. 版本发布
**无**。

## 3. 重点 Issues
*   **[前沿模型支持] GLM5 模型转换与 Qwen3.5 适配查询**
    *   社区对新一代模型架构的 RL 训练需求强烈。用户报告当前 Megatron Core 及镜像版本无法将 GLM5 从 HF 转换为 `torch_dist`（[#1820](https://github.com/THUDM/slime/issues/1820)）。同时，有用户正在探索基于 Slime 对 Qwen3.5-35B-A3B 进行 RL 训练的支持情况（[#1831](https://github.com/THUDM/slime/issues/1831)）。
*   **[核心 Bug] VLM 多轮 Rollout 图像丢失**
    *   在视觉语言模型（VLM）的多轮对话 Rollout 过程中，模型无法正确获取图像输入，被错误识别为空白或占位符。这是一个直接影响多模态 RLHF 进程的关键 Bug（[#1847](https://github.com/THUDM/slime/issues/1847)）。
*   **[系统稳定性] Checkpoint 保存导致 Ray OOM**
    *   用户反馈在训练期间保存 Checkpoint 时遭遇 Ray OOM。目前的规避方案是必须同时启用 `--no-save-optim` 和 `--disable-weights-backuper`，否则节点将因内存溢出而崩溃（[#1845](https://github.com/THUDM/slime/issues/1845)）。
*   **[算法扩展] 如何在 GRPO 中注入自定义辅助 SFT Loss**
    *   开发者希望在 128×H200 集群上训练 DeepSeek-V3.2 时，参考 CHORD 算法在 GRPO 训练循环中混合 SFT Loss，以防止 Reward Hacking。这反映了工业界 RLHF 对前沿算法融合的迫切需求（[#1843](https://github.com/THUDM/slime/issues/1843)）。
*   **[旧 Bug 关闭] GLM-4.7 MTP 训练兼容性**
    *   早期关于 GLM-4.7 启用 MTP（Multi-Token Prediction）时 `fill_routing_replay` 报 `AssertionError` 的问题已被标记为关闭（[#1556](https://github.com/THUDM/slime/issues/1556)）。

## 4. 关键 PR 进展
*   **[特性] 新增 GLM5 SFT 支持 ([#1844](https://github.com/THUDM/slime/pull/1844))**
    *   **状态**：Open
    *   **内容**：引入特定于 GLM5 的 SFT Loss 掩码机制（适配 GLM 风格的停止标记），并添加了 GLM5 SFT 启动脚本及多轮掩码/工具调用的单测覆盖。这是完善 GLM5 奖励模型和 RL 前置流程的重要一步。
*   **[Bug修复] 修复 fp16 训练下 Grad 准备与 Loss 缩放的双重更新 ([#1842](https://github.com/THUDM/slime/pull/1842))**
    *   **状态**：Open
    *   **内容**：修复了在 fp16 混合精度下，`train_one_step` 和 Megatron 底层优化器对 `prepare_grads()` 重复调用，导致梯度被错误双重缩放的问题。
*   **[硬件扩展] 支持 NVIDIA DGX Spark (GB10 / ARM64) ([#1835](https://github.com/THUDM/slime/pull/1835))**
    *   **状态**：Open
    *   **内容**：为 slime 的 Docker 构建流程引入了对 NVIDIA DGX Spark (Grace CPU + Blackwell GPU, `sm_121a`, 128G 统一内存) 的支持，拓宽了项目在边缘/端侧异构算力上的运行能力。
*   **[环境修复] 修复 build_conda.sh 中 cuda-python 版本锁定 ([#1827](https://github.com/THUDM/slime/pull/1827))**
    *   **状态**：已合并
    *   **内容**：解决了环境构建脚本中 CUDA `12.9.1` 与 `cuda-python==13.1.0` 的依赖链冲突问题（关联 Issue [#1826](https://github.com/THUDM/slime/issues/1826)），确保 SGLang 依赖的稳定运行。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **紧密跟进底层架构迭代**：社区及核心开发者正快速适配 GLM5、Qwen3.5 等最新一代模型架构，确保 RL 训练框架不落后于基座模型的迭代速度。
2.  **直面大集群 RLHF 的工程痛点**：从 Issue 讨论可以看出，项目目前正承受着 128 卡 H200 规模下 Checkpoint OOM、VLM 多模态 Rollout 状态丢失、fp16 深度优化 Bug 等大模型极端工程挑战。Slime 正在输出这些场景下的解决方案。
3.  **包容前沿 RL 算法扩展**：支持如 CHORD (SFT+RL 混合 Loss) 等新机制的接入，表明该项目不仅仅是一个推理/训练脚本库，而是一个旨在支持算法研究员进行深度定制的底层基础设施。
4.  **跨硬件生态的前瞻性**：对 ARM64 架构及最新 Blackwell 消费级/边缘芯片 (GB10) 的迅速响应，预示着该项目在未来异构算力部署和端侧 RL 场景中具有潜在优势。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 | 2026-04-21

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高活跃度，无新版本发布。共处理 **7 个 Issue**（3 个新建，4 个状态更新）及 **14 个 PR**（1 个新建，13 个状态更新）。当前开发重心集中在**推理服务架构重构**、**异步权重交换系统**及**长期训练稳定性修复**。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues

- **[长期训练崩溃 Bug] RTensor 内存无限泄漏 (VLM)**
  - **标签**: `BUG`
  - **概览**: 用户 `Adiactive` 报告在长时间运行的 VLM 训练任务中，`RTensor._fetch_buffer` 在 Worker 进程中发生无限内存泄漏，最终导致 OOM 崩溃。该 Bug 可稳定复现，是目前亟待解决的高优先级稳定性问题。
  - **链接**: [inclusionAI/AReaL Issue #1209](https://github.com/inclusionAI/AReaL/issues/1209)

- **[推理服务重构系列] HTTP Client 标准化与复用**
  - **标签**: `enhancement`, `call-for-contribution`
  - **概览**: `garrett4wade` 连续提交了两个紧密相关的重构 Issue。指出当前 `inference_service` 中存在每次请求实例化 HTTP 客户端（浪费 TCP 连接）和顺序调用（阻塞吞吐量）等反模式。计划统一采用 `httpx` 替换 `aiohttp`，并引入 Pydantic 模型以提升性能和代码可维护性。
  - **链接**: [inclusionAI/AReaL Issue #1213](https://github.com/inclusionAI/AReaL/issues/1213), [Issue #1217](https://github.com/inclusionAI/AReaL/issues/1217)

- **[系统鲁棒性增强] Router 状态恢复与 Agent 自动恢复**
  - **概览**: `guozhihao-224` 提议为 Router 服务增加状态恢复机制（当前纯内存状态在重启后全量丢失），并为 `agent_service` 引入基于持续失败检测的自动 `scale_down/scale_up` 恢复机制，以提升大规模分布式训练的容错性。
  - **链接**: [inclusionAI/AReaL Issue #1212](https://github.com/inclusionAI/AReaL/issues/1212), [Issue #1211](https://github.com/inclusionAI/AReaL/issues/1211)

## 4. 关键 PR 进展

- **[架构重构] 异步权重交换系统 (AWEX) 及推理后端重构**
  - **概览**: 提交 PR 实现基于 NCCL 的训练与推理引擎间异步权重传输机制，并重构抽象了 SGLang 和 vLLM 推理后端。这是突破 RLHF 中 “推理-训练” 资源墙的核心基建。
  - **链接**: [inclusionAI/AReaL PR #1214](https://github.com/inclusionAI/AReaL/pull/1214)

- **[核心依赖升级] Megatron, SGLang, vLLM 全面更新**
  - **标签**: `high priority`
  - **概览**: 全面升级运行时核心依赖，涵盖 `megatron-core` (0.16.0 -> 0.17.0)、`megatron-bridge`、`sglang` (0.5.9 -> 0.5.10.post1) 及 `vllm`。确保底层推理与并行训练引擎保持最新特性与 Bug 修复。
  - **链接**: [inclusionAI/AReaL PR #1206](https://github.com/inclusionAI/AReaL/pull/1206)

- **[数据加载修复] 将随机种子下沉至 Worker 级别配置**
  - **概览**: 修复了多数据集场景下的数据打乱正确性问题。将随机种子从每次 `load_dataset` 请求和 Epoch 重置的参数，下沉为 Worker 启动时设置一次的配置，避免种子反复初始化带来的干扰。
  - **链接**: [inclusionAI/AReaL PR #1210](https://github.com/inclusionAI/AReaL/pull/1210)

- **[性能优化] 推理网关共享 HTTP 客户端复用**
  - **概览**: 作为 Issue #1213 的第一阶段实现，在 FastAPI 推理服务中引入了单例共享的 `httpx.AsyncClient`，极大减少了 TCP 连接和 SSL 握手开销。
  - **链接**: [inclusionAI/AReaL PR #1216](https://github.com/inclusionAI/AReaL/pull/1216)

- **[算法引入] Karmarkar-Karp 序列 Packing 算法**
  - **概览**: 引入 Karmarkar-Karp (最大差异法) 分区算法作为现有 FFD 算法的替代，用于序列 Packing 和微批次分配。能够生成更均衡的分区，有效降低跨 Group 的 Max-Min 展度，提升计算资源利用率。
  - **链接**: [inclusionAI/AReaL PR #1151](https://github.com/inclusionAI/AReaL/pull/1151)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击 LLM RL 底层性能瓶颈**：项目正在推进的 AWEX (异步权重交换) 架构、推理网关 HTTP 连接池化及更优的序列 Packing 算法，都是在从底层系统机制解决 RLHF 中“推理等待训练”、“通信 overhead”和“显存碎片化”的硬核工程痛点。
2. **前沿算法的快速工程落地**：从 PR 记录可以看出，社区正在快速实现诸如 Geometric-RS、Token-TIS/MIS 采样模式以及 IcePop token 过滤等最新学术界提出的 Off-policy 纠偏和抑制 Collapse 的方法，保持了极高的学术敏锐度。
3. **面向多模态与大规模的容错演进**：通过 Issue #1209 暴露出的 VLM 长期训练稳定性排查，以及随之跟进的 Router 状态持久化和 Agent 自动恢复机制，表明该项目正在经历从“单机/小规模实验”向“生产级、多模态千卡规模长时训练”的成熟度跨越。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-21 RL 日报摘要：

# 🤗 Hugging Face TRL 开源生态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高频迭代，无新版本发布。社区共更新了 **4 个 Issues** 和 **40 个 Pull Requests**。当前生态的重点聚焦于**底层对齐算法（KTO/DPO）的代码重构与统一**、**vLLM 推理后端的投机解码支持**，以及多项针对**显存优化与多模态（VLM）训练**的底层修复。

## 2. 版本发布
- **最新 Releases**：无（过去 24 小时内未发布新版本）。

## 3. 重点 Issues
今日的 Issue 集中在训练稳定性和推理后端功能请求上，其中不乏容易踩坑的底层依赖问题：

- **模型训练崩溃：Embedding 对齐陷阱** ([#5608](https://github.com/huggingface/trl/issues/5608))
  - **摘要**：使用 QLoRA 与 DPOTrainer 微调 Llama 3 8B 时，若 token embedding 未填充（pad）至 64 的倍数，会导致模型训练崩溃。
  - **状态**：OPEN

- **Feature Request: GRPO/RLOO 推理加速支持** ([#5604](https://github.com/huggingface/trl/issues/5604))
  - **摘要**：用户请求在 `trl vllm-serve` CLI 中暴露 vLLM 的 `speculative_config`，以便在 GRPO/RLOO/OnlineDPO 在线训练期间启用投机解码（如 Qwen3 的原生 MTP 头），从而大幅提升生成速度。
  - **状态**：OPEN

- **DistillationTrainer 兼容性报错** ([#5585](https://github.com/huggingface/trl/issues/5585))
  - **摘要**：由于嵌套的 `config.vocab_size` 属性问题，`DistillationTrainer` 在 Qwen3.5 上运行失败。
  - **状态**：CLOSED

## 4. 关键 PR 进展
今日有高达 40 项 PR 更新，核心维护者 `albertvillanova` 和 `qgallouedec` 集中推进了代码重构、性能优化和依赖清理：

### 🚀 算法拓展与性能优化
- **Self-Distillation Zero 算法实现** ([#5609](https://github.com/huggingface/trl/pull/5609))
  - 实现了最新论文 *Self-Distillation Zero: Self-Revision Turns Binary Rewards into Dense Supervision*。该算法通过自我修正机制将二值奖励转化为密集监督信号。
- **分块交叉熵重构** ([#5575](https://github.com/huggingface/trl/pull/5575))
  - 引入分块交叉熵计算，测试表明该优化能大幅降低 SFT 训练的峰值显存，维护者已选定 256 作为最佳 chunk size。

### 🔧 架构重构：KTO 对齐 DPO
- **KTOTrainer 核心逻辑重构系列** (by `albertvillanova`)：
  - 支持流式数据集 `IterableDataset` ([#5600](https://github.com/huggingface/trl/pull/5600), 已合入)
  - 字典型 `eval_dataset` 支持 ([#5599](https://github.com/huggingface/trl/pull/5599), 已合入)
  - 底层 Tokenization 逻辑对齐 ([#5601](https://github.com/huggingface/trl/pull/5601), 已合入)
  - 移除冗余的 `maybe_apply_chat_template`，明确 EOS 添加逻辑 ([#5606](https://github.com/huggingface/trl/pull/5606))

### ⚙️ 推理引擎与基础设施
- **支持 vLLM 投机解码** ([#5605](https://github.com/huggingface/trl/pull/5605))
  - 快速响应了 Issue #5604 的需求，为 `vllm-serve` 添加了 `--speculative_config` 参数。
- **移除 vLLM 0.11 支持** ([#5549](https://github.com/huggingface/trl/pull/5549))
  - 抛弃过期版本，为未来将最低版本提升至原生支持权重同步的 vLLM 0.18 做准备。
- **多模态测试模型更新**：引入 tiny 版 Qwen3-4B-Instruct ([#5586](https://github.com/huggingface/trl/pull/5586)) 和 Nemotron 3 ([#5278](https://github.com/huggingface/trl/pull/5278)) 以完善 CI 覆盖率。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

作为 Hugging Face 生态的强化学习核心引擎，TRL 目前的演进轨迹揭示了当前 RLHF/Post-training 领域的几个关键技术趋势：

1. **在线 RL 与推理引擎的深度融合**：PR #5549 和 PR #5605 表明，TRL 正在紧锣密鼓地与 vLLM 的最新特性（如原生权重同步、投机解码）对齐。在 GRPO 和 Online DPO 成为主流的今天，TRL 致力于解决生成采样阶段的巨大算力瓶颈，这使得中小型开发者也能跑起高并发的在线强化学习。
2. **从二值信号到密集奖励的演进**：通过引入诸如 Self-Distillation Zero (#5609) 等最新算法，TRL 正在突破传统 RLHF 仅依赖偏好模型给出单一标量奖励的局限。将稀疏的二元反馈转化为密集的 Token 级别监督，是目前提升对齐模型数据效率的核心前沿方向。
3. **极度的工程化与底层压榨**：无论是 "移除冗余模板" 还是引入 "分块交叉熵" (#5575) 来死磕峰值显存优化，TRL 团队在做脏活累活，确保其在多模态（VLM）和超长上下文场景下的鲁棒性和 affordability。这种将前沿算法与极致显存优化结合的能力，构成了其强大的开源护城河。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 项目日报 (2026-04-21)

**数据源**: [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | **统计周期**: 过去 24 小时

---

### 1. 今日速览
过去 24 小时，OpenRLHF 仓库活动相对平静，无新版本发布或 PR 更新。社区焦点集中在多模态技术栈的拓展上，新增了 1 条关于**多模态奖励模型** 训练支持的功能咨询，反映了当前 LLM 对齐领域向多模态纵深演进的趋势。

### 2. 版本发布
- **当前状态**：过去 24 小时内无新版本发布。
- 链接：[OpenRLHF Releases](https://github.com/OpenRLHF/OpenRLHF/releases)

### 3. 重点 Issues
- **#1224 [OPEN] multimodal reward models**
  - **作者**: [spirit-moon-fly](https://github.com/OpenRLHF/OpenRLHF/issues/1224) | **状态**: Open | 👍: 0 | 💬: 0
  - **摘要**: 开发者询问当前版本是否已支持**多模态奖励模型**的训练，并希望官方提供相应的训练脚本。这表明社区对 RLHF/AI 反馈（RLHF/AIF）在视觉-语言等多模态场景下的对齐需求正在显著增加。
  - **链接**: [OpenRLHF/OpenRLHF Issue #1224](https://github.com/OpenRLHF/OpenRLHF/issues/1224)

### 4. 关键 PR 进展
- **当前状态**：过去 24 小时内无活跃的 Pull Request 更新。
- 链接：[OpenRLHF/OpenRLHF Pull Requests](https://github.com/OpenRLHF/OpenRLHF/pulls)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日项目无代码级更新，但结合 Issue #1224 的诉求，OpenRLHF 在当前强化学习与大模型对齐开源生态中依然具备极高的跟踪价值：
1. **前沿对齐技术的快速响应**：随着 GPT-4o 和 Gemini 等原生多模态模型的普及，多模态对齐将成为 RL 生态的刚需。OpenRLHF 凭借其成熟的纯文本 RLHF/PPO/DPO 分布式训练架构，极有可能是最早提供稳定且可复现的多模态 RM 训练方案的开源项目之一。
2. **高吞吐与生产级可用性**：OpenRLHF 深度整合了 Ray 和 vLLM，在处理超大规模 LLM 的 PPO 训练和高效推理上具有显著的工程优势，是学术界与工业界进行大模型强化学习落地的核心基础设施。
3. **社区驱动的实战导向**：从 Issues 的诉求可以看出，其用户群体高度聚焦于“如何将 SOTA 论文算法转化为可执行的工程脚本”。这种实战导向确保了项目路线图始终与 RLHF 领域的最前沿痛点（如 GEMMA/Llama-3 的多模态支持）紧密对齐。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 生态日报 - 2026年04月21日

## 1. 今日速览
过去 24 小时，verl 生态保持了极高的开发活跃度。项目共处理 **11 条 Issues** 和 **42 条 Pull Requests**，无新版本发布。从数据来看，社区的重心正全面转向**多模态大模型（VLM）训练稳定性**、**异步训练架构**的深度优化，以及底层**推理与训练引擎的大规模重构**。

## 2. 版本发布
无。目前项目暂未发布新的 Release 版本。

## 3. 重点 Issues
今日的 Issues 集中在依赖兼容性和 VLM 训练的边缘情况，同时展现出对异构硬件支持的拓展需求。

*   **[Critical] `transformers>=5.0` 导致 GRPO 训练 Reward 失效**
    现象：在 GRPO 训练中，若升级至 `transformers>=5.0`，`critic/rewards/mean` 会静默跌落至 `0.0`，导致训练无效。降级至 5.0 以下版本可恢复。
    [Issue #6080](https://github.com/verl-project/verl/issues/6080)

*   **[Bug] VLM SFT RoPE 崩溃与内核质量退化**
    社区连续报告了多模态模型 Qwen3-VL 训练时的底层 Bug。包括当 `micro-batch` 样本具有相同 `seq_len` 时导致嵌套张量维度翻转引发的 RoPE 崩溃，以及启用 `ulysses_sequence_parallel_size > 1` 时融合内核导致的训练质量回退。
    [Issue #6073](https://github.com/verl-project/verl/issues/6073) | [Issue #6068](https://github.com/verl-project/verl/issues/6068)

*   **[Feature] 探索引入 Google TPU 支持**
    开发者提议借助 Ray 近期在 TPU 支持上的进展，为 verl 增加 TPU 硬件的后端支持，以拓展异构计算生态。
    [Issue #5192](https://github.com/verl-project/verl/issues/5192)

*   **[RFC] vllm-omni Rollout LoRA 同步的新设计方案**
    针对多模态 LoRA 同步，提出基于 `tmpfs + cudaHostRegister` 保留文件加载语义的替代架构设计，旨在优化 FlowGRPO 中的显存与加载效率。
    [Issue #6078](https://github.com/verl-project/verl/issues/6078)

## 4. 关键 PR 进展
今日的 42 条 PR 体现了项目正在进行**深度的架构清理**与**前沿算法的工程化落地**。

*   **[BREAKING] 底层架构大扫除：废弃旧 Workers 与 Environments**
    为了减轻维护负担并加速向全新的 Model Engine 抽象层过渡，官方一口气提交了两个 BREAKING PR，正式移除并废弃了传统的 `workers` 代码和 `verl/interactions` 环境交互模块。
    [PR #6067](https://github.com/verl-project/verl/pull/6067) | [PR #6074](https://github.com/verl-project/verl/pull/6074)

*   **[Bugfix] 修复 `transformers>=5.0` LLaMA 系列分词器兼容性**
    针对今晨暴露的 reward 归零问题，迅速提交修复方案，为 LLaMA 架构模型恢复 ByteLevel 分词器支持。
    [PR #6081](https://github.com/verl-project/verl/pull/6081)

*   **[Algo] 支持上下文管理的 Agentic RL**
    为 TQ trainer 引入多轨迹和会话级 GRPO 支持，进一步完善 Agentic RL 场景下的多轮复杂训练逻辑。
    [PR #5636](https://github.com/verl-project/verl/pull/5636)

*   **[Fully Async] 全异步架构的进一步完善**
    全面推进全异步训练模式：支持异步多轮训练、修复异步模式下的 Profiling 和弹性副本验证问题，并支持在全异步模式下进行 Teacher 模型的独立部署。
    [PR #5966](https://github.com/verl-project/verl/pull/5966) | [PR #6070](https://github.com/verl-project/verl/pull/6070) | [PR #6076](https://github.com/verl-project/verl/pull/6076) | [PR #6056](https://github.com/verl-project/verl/pull/6056)

*   **[Perf] 减少 Padding 计算浪费**
    针对无法使用 Sequence Packing 的架构（如 Mamba/SSM），引入 `truncate_padding` 机制以截断无用的 padding 计算，显著提升此类模型的训练效率。
    [PR #5338](https://github.com/verl-project/verl/pull/5338)

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **从“支持 LLM”向“原生多模态+Agent RL”演进：** 无论是处理 Qwen3-VL 复杂的 RoPE 与 Sequence Parallelism 问题，还是支持 Tool Agent Loop 和多轨迹会话级 GRPO，verl 正在将多模态与 Agentic 场景作为一等公民进行底层适配。
2.  **拥抱极其彻底的架构重构：** 项目敢于在高速迭代中进行 Breaking Change（如彻底移除旧 worker 和 interaction 模块），说明其正在摆脱早期历史包袱，全面向更灵活、更分布式的 Model Engine 抽象层演进，这对于长期维护和扩展至关重要。
3.  **引领 RL 基础设施的异步化与异构化：** 随着 Fully Async（全异步训练）各类 PR 的稳步合入，以及对 TPU、vllm-omni 等异构后端的探索，verl 正在解决超大规模模型 RLHF/DPO 训练中的严重吞吐量瓶颈，具备了成为下一代 RL 训练基座的潜力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库共处理了 **12 个 Pull Requests**（其中 4 个合并关闭，8 个仍在进行中），无新增 Issues 或版本发布。当前开发重心高度集中在 **vLLM 权重同步机制优化**、**GRPO 训练链路的鲁棒性提升** 以及 **Benchmark/DPO 等基础工具链的 Bug 修复**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。社区当前的反馈与问题追踪主要分散在相关 PR 的讨论中。

## 4. 关键 PR 进展

### 核心训练与推理引擎优化
*   **[#1616](https://github.com/allenai/open-instruct/pull/1616) [OPEN] 简化模型步逻辑**
    重构了 `vllm_utils.py` 中的 `model_step` 处理逻辑。将其改为在 `_broadcast_weights_ipc` 中同步等待执行，并从 `update_weights` 中移除了对应的关键字参数，统一了底层 RPC 路径。
*   **[#1627](https://github.com/allenai/open-instruct/pull/1627) [OPEN] 修复权重同步问题**
    修复了权重同步的延迟初始化硬编码（改为在第一步后动态触发，以支持 Checkpoint 恢复），并修复了 Actor 加载初始权重时的 Checkpoint 恢复错误。
*   **[#1506](https://github.com/allenai/open-instruct/pull/1506) [CLOSED] 迁移 vLLM v1 AsyncMPClient 权重更新流**
    将 vLLM 权重更新的 RPC 路径切换至 v1 的 `collective_rpc_async`，同时保留了非 v1 客户端的兼容性回退机制，升级了底层通信架构。

### GRPO 及奖励模型鲁棒性
*   **[#1587](https://github.com/allenai/open-instruct/pull/1587) [CLOSED] 稳固 GRPO LLM Judge 调用**
    重构了 `LMJudgeVerifier`，将其路由通过共享的信号量守护 LiteLLM 异步路径，替换了原先直接的 `litellm.acompletion` 裸调用，以提升并发控制及异常重试能力。
*   **[#1586](https://github.com/allenai/open-instruct/pull/1586) [CLOSED grpo_fast 单节点启动资源检查硬化**
    为 `grpo_fast` 添加了启动前资源规划模块（preflight-check），在创建 learner placement group 前校验 Ray 可见的 CPU/GPU 资源，并为无响应等待添加了超时与可操作的诊断提示。

### 基础设施与数据管线
*   **[#1622](https://github.com/allenai/open-instruct/pull/1622) [OPEN] 抽离 numpy SFT 转换模块**
    将 HF 到 OLMo-core 的 numpy mmap 转换逻辑提取为独立的库模块 `open_instruct/numpy_dataset_conversion.py`，以便下游任务（如即将到来的 OLMo-core SFT）直接调用。
*   **[#1626](https://github.com/allenai/open-instruct/pull/1626) [CLOSED] 为 mason.py 添加 TTL 标志**
    响应 Beaker 最新的“临时存储删除试点”，为 debug 脚本增加了 `--artifact_ttl` 参数（默认 1 天），优化集群存储生命周期管理。

### 工具链与计费 Bug 修复
*   **[#1625](https://github.com/allenai/open-instruct/pull/1625) [OPEN] 修复 DPO loss-mask 除零问题**
    修复了 `dpo_utils.py` 中当序列标签全为 `-100` 时，`_get_batch_logps` 在 `average_log_prob=True` 下导致返回 NaN/Inf 并破坏 DPO 梯度的潜在隐患。
*   **[#1624](https://github.com/allenai/open-instruct/pull/1624) [CLOSED] 修复 IFEvalVerifier 除零错误**
    修复了 `ground_truth_utils.py` 中当约束不包含指令时引发的 `ZeroDivisionError`。
*   **[#1623](https://github.com/allenai/open-instruct/pull/1623) & [#1619](https://github.com/allenai/open-instruct/pull/1619) [OPEN] Benchmark CSV 写入修复**
    修复了两个 Benchmark 脚本的数据持久化问题：前者修复了每个 batch 循环重复写入 CSV header 的 Bug；后者修复了首次运行时 CSV header 从未写入的 Bug。
*   **[#1618](https://github.com/allenai/open-instruct/pull/1618) [OPEN] 修复 gpt-4o 输出价格少零错误**
    修复了 `judge_utils.py` 中 gpt-4o 的 token 计费费率配置错误（原配置 $0.000001 导致输出计费比 OpenAI 官方标准便宜 10 倍）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **聚焦 RLHF 底层系统的攻坚：** 从 PR #1616、#1627 和 #1506 可以看出，项目正在深度重构模型权重同步与推理引擎（vLLM v1）的交互机制。在百亿参数级 LLM 的 RL 训练中，权重的无缝广播与同步是决定训练吞吐量和稳定性的绝对瓶颈。
2.  **GRPO 方法的工程化落地：** 项目正在快速迭代 GRPO（Group Relative Policy Optimization）的工程实现。通过引入 LiteLLM 守护异步路由（#1587）和 Ray 集群资源预检（#1586），项目正在解决大規模 RL 训练中 Judge 模型并发过载和分布式集群启动死锁等高阶痛点。
3.  **严谨的工程与成本控制：** 及时修复 DPO 训练中隐蔽的 NaN 梯度问题（#1625），甚至能精准审查到计费配置少一个 0 的细节（#1618）。这表明该项目的维护不仅在追求算法前沿，更在为生产级的 RL 训练提供高可靠、低成本的基础设施。对于致力于复现或部署对齐算法的研究者和工程师而言，这是极为关键的底层保障。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报摘要 (2026-04-21)

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活跃度较低，无新版本发布，无新增或更新的 Issues。项目当前的维护主要集中在修复历史重构遗留的 Bug 及完善文档细节。今日共有 2 个 Pull Requests 产生了状态更新。

## 2. 版本发布
过去 24 小时无新版本（Release）发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
当前有 2 个 PR 产生更新，均由贡献者 `mturan33` 提交，主要涉及代码可用性修复及文档纠错：

*   **PR #550 [OPEN]：修复 `enjoy.py` 视频捕获参数缺失问题**
    *   **摘要：** 修复了因历史 PR #424 重构为 `tyro` 时引入的回归 Bug。尽管 PR #424 进行了参数解析重构，但 `cleanrl_utils/enjoy.py` 并未完全迁移，仍然依赖原生 `argparse`。这导致第 42 行引用了 `args.capture_video` 时，因找不到对应的参数定义而引发报错。该 PR 恢复了 `--capture-video` 参数定义。
    *   **链接：** [vwxyzjn/cleanrl/pull/550](https://github.com/vwxyzjn/cleanrl/pull/550)

*   **PR #549 [CLOSED]：修复 PPO 标题、变量笔误及文档链接**
    *   **摘要：** 合并了 4 项文档修正：1) 修正了 PPO 算法的全称拼写错误（将 *Proximal Policy Gradient* 更正为原论文正确的 *Proximal Policy Optimization*）；2) 修复了相关变量笔误；3) 修复了 Baselines 的 URL；4) 修复了 PQN 算法的文档 URL。
    *   **链接：** [vwxyzjn/cleanrl/pull/549](https://github.com/vwxyzjn/cleanrl/pull/549)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **架构单一文件的透明性：** 尽管在工程化重构（如 `argparse` 向 `tyro` 迁移）时会偶发小规模回归 Bug（如 PR #550 所示），但 CleanRL 核心坚持的单文件算法实现策略，使其依然是研究人员剥离复杂工程封装、学习及验证 RL 核心算法（如 PPO）底层逻辑的最优选择。
2. **严谨的学术属性维护：** 社区对文档细节的要求极高（如 PR #549 对算法命名溯源至 Schulman 2017 论文的严格考证），保障了项目作为 RL 学习资料的准确性和权威性。

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