# RL 开源生态日报 2026-04-15

> 生成时间: 2026-04-14 22:12 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态呈现出明显的**分层与分化**态势：
1. **大模型对齐层全面爆发**：围绕 LLM/VLM 的 RLHF/RLVR 基础设施（如 VeRL、TRL、AReaL、OpenRLHF）主导了当前的开源活跃度。项目不仅在抢占对最新开源模型（如 Qwen3.5、Gemma-4、GLM-5）的适配先机，更在系统底层进行着极致的工程压榨。
2. **Agent 与多智能体（MARL）基建崛起**：AReaL、Open Instruct 和 ROCK 等项目正在将 RL 的边界从单轮对话向多轮工具调用、沙盒执行和多智能体协同拓展。
3. **经典/传统 RL 生态趋于静默**：以 CleanRL、Gymnasium、Stable Baselines3 为代表的传统算法与 Env 标准库进入高度稳定期（甚至零活跃），表明基于纯文本或低维状态空间的经典 RL 技术已完全成熟，当前的重心已彻底向 LLM 范式转移。

## 各项目活跃度对比
*(注：过去 24 小时内 CleanRL、Gymnasium、rl_games、Stable Baselines3、torchtune 无明显活动，故不列入横向对比表格。)*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 38 | 0 | 面向超大规模 Agent RL 重构底层架构；全硬件生态覆盖。 |
| **TRL** | 4 | 32 | 0 | 发力真实生产环境下的分布式推理/训练协同与显存管理。 |
| **AReaL** | 4 | 19 | 0 | 向微服务架构演进；攻坚超大规模 MoE 与多智能体训练。 |
| **Open Instruct** | 1 | 18 | 0 | 迁移至最新推理引擎原生 API；探索动态奖励机制。 |
| **slime** | 4 | 3 | 0 | 聚焦前沿 MoE 架构的长上下文 RL 训练与底层显存优化。 |
| **ROCK** | 6 | 7 | 0 | 进行核心 SDK 架构解耦，向通用多智能体评测平台演进。 |
| **OpenRLHF** | 2 | 0 | v0.10.1 | 抢先补齐多模态多轮对话 RL 支持；暴露出底层的长度膨胀Bug。 |
| **ROLL** | 3 | 0 | 0 | 社区积极验证最新大模型（Qwen3.5 MoE）与视觉模型支持。 |
| **PettingZoo** | 1 | 0 | 0 | 探讨多智能体环境中复杂全局状态提取的 API 标准演进。 |
| **Tianshou** | 1 | 0 | 0 | 完善高阶实验生命周期管理与断点续训的工程化落地。 |

## 共同关注的研究与工程方向
**研究侧重信号：**
1. **多模态与多轮对话 RL 对齐**：VLM（视觉语言模型）的 RL 训练已成为标配。OpenRLHF 抢发多轮 VLM 支持，VeRL 和 ROLL 则在集中修复 VLM 在 FSDP 分布式下的位置编码与调度器报错。
2. **Agent 与多智能体 RL（MARL）的范式升级**：从单步生成走向多步执行。AReaL 引入 MARL Phase 1，Open Instruct 扩展了基于 Docker 的 SWERLSandboxEnv，标志着 RL 正在被用于训练能解决复杂工程任务的智能体。
3. **超越静态标量的动态奖励机制**：Open Instruct 引入了 Evolving Rubric（动态评估标准），VeRL 社区呼吁在全异步管线中加入生成式奖励模型，显示出对缓解 Reward Hacking 和提高评估精度的强烈需求。

**工程/基础设施侧重信号：**
1. **极致的分布式显存与通信压榨**：VeRL 将 FP8 量化转移到 Trainer 端以减半通信带宽；AReaL 利用 `meta device` 解决非 rank-0 进程的 CPU OOM，并在序列打包中引入 KK 算法降低长尾延迟。
2. **异步与微服务架构重构**：同步生成与训练的管线正被抛弃。VeRL 解耦了独立的 Log Prob 服务器，AReaL 将单体控制逻辑拆解为 HTTP 微服务组件，以提升大规模集群的吞吐量。
3. **全面拥抱最新推理引擎特性**：TRL 与 Open Instruct 均在快速跟进 vLLM 0.16/0.18，淘汰老旧版本，迁移至原生权重传输 API，以解决 RL 训练中参数同步的工程痛点。

## 差异化定位分析
1. **全栈与极致压榨派（VeRL、AReaL）**：瞄准 10B~405B 甚至更大参数量的前沿模型。它们在多硬件（Ascend/AMD）适配、跨节点张量并行和微服务架构上投入极深，适合有超大算力集群、追求极致吞吐量的工业级团队。
2. **敏捷与开箱即用派（TRL、OpenRLHF）**：背靠 HuggingFace 生态，主打算法矩阵的丰富度（如 DPO/KTO/TPO/RLOO）与前沿模型支持的敏捷度。适合需要快速验证 RLHF 算法、进行多模态对齐实验的研究者与中小型团队。
3. **特定工作流深耕派（Open Instruct、slime、ROLL）**：聚焦特定场景的深度优化。例如 Open Instruct 专注于代码/沙盒环境的工具调用训练；slime 专攻 GLM/Qwen 等特定 MoE 模型在长上下文下的算子与显存优化。
4. **评测与经典标准派（ROCK、PettingZoo、Tianshou）**：ROCK 正在构建通用的 RL 评测与 Job 调度底座；而 PettingZoo 与 Tianshou 则在经典多智能体环境 API 和实验流控管理上发挥余热，服务于非 LLM 范式的传统 RL 研究。

## 值得关注的趋势信号
1. **LLM RL 训练框架正演变为“云原生/微服务架构”**：原本为模型训练写的单节点 Python 脚本，正在向包含 Controller、Router、Gateway、独立推理/计算服务器的分布式系统演进（如 AReaL 和 VeRL 的架构重构）。
2. **开放架构对“闭源/外部模型”的吸收**：AReaL 开始支持将请求路由至兼容 OpenAI 格式的外部 API。这意味着 RL 训练框架将不仅限于“开源权重微调”，还可直接用于对闭源模型进行交互缓存和轨迹级强化学习。
3. **“训练-推理”权重的传输方式迎来拐点**：随着模型体积暴增，训练端的权重更新到推理端的耗时成为致命瓶颈。向底层推理引擎原生 API（vLLM）迁移，以及采用 Trainer 端量化直接传输的方案，预示着 RL 底层通信机制正在进行代际更迭。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL 项目 RL 日报摘要 (2026-04-15)

## 1. 今日速览
过去 24 小时内，阿里巴巴开源强化学习框架 **ROLL** 仓库有 3 条 Issue 更新，0 条 PR 更新，无新版本发布。社区当前焦点集中在**多模态（LVLM）训练流程的支持完善**以及**Qwen3.5 大模型 LoRA 权重保存的兼容性**上。

## 2. 版本发布
过去 24 小时及近期无新版本发布。

## 3. 重点 Issues
当前活跃的 Issue 主要涉及视觉语言模型（VLM）的强化学习 pipeline 稳定性以及大模型 SFT 阶段的 Checkpoint 保存问题，具体如下：

- **[#411](https://github.com/alibaba/ROLL/issues/411) [进行中] Qwen3.5-35B-A3B LoRA SFT Checkpoint 保存报错**
  - **背景**：在使用 MCore-adapter 对 Qwen3.5-35B-A3B 进行 LoRA SFT 时，保存 checkpoint 环节发生错误。
  - **状态**：该问题自 3 月底提出后持续引发讨论，过去一天内新增社区交互，目前累计 7 条评论，表明开发团队正在跟进排查。

- **[#420](https://github.com/alibaba/ROLL/issues/420) [进行中] LVLM LoRA 相关代码待完善**
  - **背景**：开发者对比了 `rlvr_vlm_pipeline.py` 与 `rlvr_pipeline.py`，发现当前 VLM pipeline 中的 LoRA 相关逻辑缺失（如 `self.use_ref_model` 等标志位控制）。
  - **状态**：用户与项目方于昨日进行了最新沟通（累计 1 条评论），需关注后续是否会有相关 PR 补齐 VLM 的 LoRA 支持。

- **[#423](https://github.com/alibaba/ROLL/issues/423) [进行中] VLM 生成阶段存在索引越界 Bug (`IndexError: list index out of range`)**
  - **背景**：在处理多模态数据时触发 `image_grid_thw[image_index][0]` 列表越界报错。开发者精准定位，建议在 `roll/distributed/scheduler/generate_scheduler.py` 的 `request_data.pop` 操作中加入对 `multi_modal_data` 的判断逻辑。
  - **状态**：昨日新建 Issue，等待项目维护者确认及修复。

## 4. 关键 PR 进展
过去 24 小时内无新增或更新的 Pull Request。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟最前沿模型与架构**：从 Issue #411 可以看出，ROLL 正在被积极用于 Qwen3.5-35B-A3B 这种超大规模的 MoE（混合专家模型）微调。社区反馈能帮助框架快速迭代对最新底层模型架构（如 Mcore-adapter）的适配。
2. **攻坚多模态强化学习（VLM/RLVR）**：Issue #420 和 #423 证实了项目正在深度攻坚视觉语言模型的 RLHF/VLM 对齐流程。解决生成调度器（Scheduler）层面的多模态数据处理 Bug，是构建稳定 RLVR（Reinforcement Learning from Vision-language(Response)）生态的必经之路。
3. **高价值的技术沉淀**：ROLL 聚焦于大模型和分布式场景下的强化学习调度与工程落地。其在多模态数据切分、生成调度（`generate_scheduler`）、以及参考模型控制上的设计与修补，对其他构建 RL 训练框架的开发者具有极高的参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK RL 日报摘要 (2026-04-15)

## 1. 今日速览
过去 24 小时内，alibaba/ROCK 仓库共有 **6 条 Issue 更新**（4 条已关闭，2 条开放）和 **7 条 PR 更新**（5 条已合并，2 条开放），**0 个新版本发布**。
今日核心焦点在于 **Job 架构的深度重构与能力对齐**：核心开发者完成了 Bench 向新 Job/Trial/Executor 架构的全面迁移，填补了多项功能缺失，并修复了并行测试环境下的基础设施竞争问题。

## 2. 版本发布
**无最新 Releases**。但从合并的 PR 来看，项目正处于从底层重构 SDK 核心架构（`rock.sdk.bench` 向 `rock.sdk.job` 演进）的关键阶段，预计将在架构完全稳定后发布新版本。

## 3. 重点 Issues

- **[架构重构] bench→job 架构替换及缺口填补** ([#783](https://github.com/alibaba/ROCK/issues/783), `CLOSED`)
  **背景**：新 `rock.sdk.job.*` 架构（基于 JobExecutor + Trial）在替代遗留 `rock.sdk.bench.Job` 时存在 7 项行为缺失/退化 (G1-G7)。此 Issue 旨在追踪并补齐这些能力，为后续废弃老架构铺路。

- **[架构重构] Job/Trial/Executor 核心模块抽离** ([#779](https://github.com/alibaba/ROCK/issues/779), `CLOSED`)
  **背景**：原有 `Job` 类重度硬编码了 Harbor 逻辑，无法扩展至 Bash 等其他任务类型。该 Issue 推动建立 `Job` Facade + `JobExecutor` + `Operator` + `Trial` 四层解耦抽象，统一 CLI 与 SDK 的底层调用。

- **[架构重构] 提升 `on_sandbox_ready` 回填逻辑至基类** ([#788](https://github.com/alibaba/ROCK/issues/788), `CLOSED`)
  **背景**：`namespace` 等运行时参数的回填与校验逻辑原仅存在于 `HarborTrial` 中，导致 `BashTrial` 等其他子类需重复实现。重构将其上提至 `AbstractTrial` 基类，确保所有 Trial 行为一致。

- **[Bug] 并行 pytest 执行下单元测试失败** ([#777](https://github.com/alibaba/ROCK/issues/777), `CLOSED`)
  **背景**：在使用 `pytest-xdist` 并行跑测试时，基于 Postgres 容器的沙箱测试用例因启动竞态条件报 `CannotConnectNowError`。

- **[Feature] NativeConfig 增加 TemplateConfig 支持** ([#787](https://github.com/alibaba/ROCK/issues/787), `OPEN`)
  **背景**：建议在 bench job 的 NativeConfig 中引入 TemplateConfig 和 template 字段，以支持对 Agent-Bench 模板的引用。

- **[Feature] 增加 ClawEval 示例** ([#781](https://github.com/alibaba/ROCK/issues/781), `OPEN`)
  **背景**：社区/团队成员提议为 ROCK 增加 ClawEval 相关的评测示例代码。

## 4. 关键 PR 进展

- **[已合并] Job 核心架构重构落地** ([#780](https://github.com/alibaba/ROCK/pull/780))
  重构的核心基石。新增 `rock/sdk/job/` 模块，实现四层抽象模型；将 `rock/sdk/agent/` 重命名为 `rock/sdk/bench/` 并保持向后兼容；CLI 支持 `--type bash|harbor`。*(fixes #779)*

- **[已合并] 完全补齐 Bench 替换的 7 项 GAP** ([#784](https://github.com/alibaba/ROCK/pull/784))
  落实架构对齐。使新 `rock.sdk.job.Job` 对同一配置产出与老 `rock.sdk.bench.Job` 完全等价的 `JobResult`，并正式为老路径标记 `DeprecationWarning`。*(fixes #783)*

- **[已合并] 抽象类 Trial 行为统一** ([#789](https://github.com/alibaba/ROCK/pull/789))
  将沙箱启动后的参数回填逻辑上提至 `AbstractTrial`，采用 TDD 方式新增了 `TestBashTrialOnSandboxReady` 单元测试，保障不同类型 Trial 的一致性。*(fixes #788)*

- **[已合并] 修复 Job Name 丢失与 Demo 迁移** ([#785](https://github.com/alibaba/ROCK/pull/785))
  解决了 Harbor 因未将 `job_name` 注入 YAML 配置而导致使用时间戳目录名，进而导致结果收集失败的回归 Bug，并顺带将 demo 迁移至新 Job 路径。

- **[已合并] 修复并行测试下的 PG 连接竞态** ([#778](https://github.com/alibaba/ROCK/pull/778))
  通过在 `pg_container` fixture 中增加真实的 `SELECT 1` 查询（弥补 `pg_isready` 的不足），彻底消除了高并发测试下的启动竞态窗口。*(fixes #777)*

- **[OPEN] feat: 增加 TemplateConfig** ([#786](https://github.com/alibaba/ROCK/pull/786))
  新增 `TemplateConfig` 模型，为 NativeConfig 引入 template 字段，开始支持标准化的 Bench 模板引用。

- **[OPEN] Feature: ClawEval Bash Job 示例** ([#782](https://github.com/alibaba/ROCK/pull/782))
  提交了基于新架构的 BashJob 方式运行 ClawEval 评测的示例代码。*(related #781)*

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从硬编码到通用抽象的演进**：当前 RL 评测框架往往与特定环境或脚本深度绑定。ROCK 引入的 `Job -> Executor -> Operator -> Trial` 四层抽象，清晰地分离了任务配置、调度、环境操作和状态收集。这不仅能支持传统的 RL 训练，更能优雅地扩展至纯脚本评测和复杂的 Multi-Agent 场景。
2. **严谨的工程化与向后兼容策略**：项目在重构过程中，依靠详尽的 7 项 GAP 分析文档和用例对齐（确保输出完全一致）来保证重构不引入破坏性变更。同时，通过 TDD（如先写失败测试再提升基类逻辑）和 `DeprecationWarning` 策略，展现了极高的工程素养。
3. **重视并发与分布式测试底座**：通过主动暴露并修复基于容器和数据库的并行测试竞态问题（PR #778），表明该项目对高并发、高吞吐的 RL 基础设施调度有着严苛的质量要求，这对于动辄需要启动成百上千个沙箱环境的大规模 LLM/RL 评测至关重要。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (github.com/THUDM/slime) 项目 2026-04-15 强化学习（RL）开源生态日报摘要。

### 1. 今日速览
在过去 24 小时内，slime 项目保持较高的社区活跃度，无新版本发布。新增/更新 4 个 Issues 和 3 个 Pull Requests。当前社区焦点高度集中于**新一代模型架构（如 GLM5、Qwen3.5）的适配与训练支持**，以及**针对长上下文和特定硬件（如 A100）的底层算子与显存优化**。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **[Bug] GLM5 架构转换 Megatron 报错** ([#1820](https://github.com/THUDM/slime/issues/1820))
  - **摘要**: 社区反馈当前项目的 Megatron Core 版本及提供的镜像尚未支持 GLM5 架构，导致无法完成 HF 到 `torch_dist` 的权重转换。该问题引发了较多讨论（11条评论），暴露出训练脚本与底层转换工具链之间的版本脱节。
- **[Question] Qwen3.5 支持状态** ([#1831](https://github.com/THUDM/slime/issues/1831))
  - **摘要**: 用户询问框架对 **Qwen3.5-35B-A3B** 等 MoE 架构模型的 RL 训练支持情况。鉴于已有的 Qwen3-30B-A3B 脚本，社区正寻求复用或迁移经验。
- **[Question] 长上下文训练 OOM 及 GDN 层的 CP 支持** ([#1744](https://github.com/THUDM/slime/issues/1744))
  - **摘要**: 在对 Qwen3.5-27B 进行长上下文 RL 训练时，反向传播阶段遭遇 OOM。社区发起讨论，呼吁开发团队为 GDN 层提供上下文并行能力以缓解显存压力。
- **[Closed] A100 显卡对 DeepSeekV3 架构的 RL 训练支持** ([#305](https://github.com/THUDM/slime/issues/305))
  - **摘要**: 确认了 slime 框架支持在 NVIDIA A100 等系列算力卡上进行类 DeepSeekV3 小模型（如 Moonlight16B-A3B）的强化学习调试与训练。

### 4. 关键 PR 进展
- **[build] 增加 A100 支持：补丁集、离线 Conda 构建及示例** ([#1832](https://github.com/THUDM/slime/pull/1832))
  - **摘要**: 完善了框架在 A100 环境下的部署体验，引入了补丁集和 Docker 镜像。特别值得一提的是，该 PR 提供了**离线构建流程**，解决了隔离网络节点（无互联网访问）下的依赖预下载和安装痛点。
- **[Fix] 修复 Bridge 模式下缺失的激活检查点参数** ([#1833](https://github.com/THUDM/slime/pull/1833))
  - **摘要**: 修复了在使用 `megatron_to_hf_mode == "bridge"` 时，因严格依赖 HF 静态配置而丢失训练特有显存优化参数（Activation Checkpointing / Recompute）的缺陷，显著提升了模型转换后训练的稳定性。
- **[docs] 在 README 中添加异步 RL 引擎 Relax** ([#1834](https://github.com/THUDM/slime/pull/1834))
  - **摘要**: 文档更新，将 "Relax: Asynchronous RL Engine for Omni-Modal Agentic Training" 添加至知名生态项目列表，表明 slime 正在与全模态智能体异步 RL 框架进行更紧密的生态融合。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
slime 项目正在迅速跟进大模型前沿架构的 RL 训练需求，其在当前生态中的核心价值体现在：
1. **前沿 MoE 架构的 RL 适配阵地**：从 Qwen3.5 到 GLM5，项目正集中解决大参数量、稀疏 MoE 模型在 RLHF/RL 阶段权重转换与分布式训练的兼容性问题。
2. **解决工程落地的硬骨头**：面对长上下文训练普遍存在的 OOM 难题，社区和贡献者正积极推进 GDN 层等特殊结构的上下文并行（CP）及激活重计算技术。
3. **生产级算力与基建支持**：对 A100 显卡的专项适配（包括离线构建方案）表明该项目不仅关注算法本身，还在认真解决企业级私有化部署和网络受限环境下的实际工程痛点。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报 (2026-04-15)

## 1. 今日速览
过去 24 小时内，AReaL 仓库保持高频迭代。共有 **19 个 PR** 更新（其中包含多个大型架构演进提交），**4 个 Issues** 发生状态或评论更新，**无新版本发布**。当前社区焦点明显集中于：**微服务架构重构（Agent 与训练服务）、MoE 与大规模分布式推理支持、以及显存/CPU占用优化**。

## 2. 版本发布
- **最新 Releases**：无。目前主分支仍处于高密度的架构重构与功能累积阶段。

## 3. 重点 Issues
当前重点关注与底层引擎性能及稳定性相关的提案：

- **[#1101 [Feature] Elastic weight update setup and acceleration](https://github.com/inclusionAI/AReaL/issues/1101)**
  - **核心内容**：探讨重构当前 RL 训练中 Actor 权重同步至推理服务器的机制，计划在现有的 `disk` 同步模式之上引入更高效的弹性权重更新方案。
  - **意义**：权重同步延迟是目前 RLHF/RL 训练的关键瓶颈，此特性的落地将大幅提升 Rollout 阶段的吞吐量。

- **#1099 [BUG] kl_ctl大于0时（使用reference model），训练报错](https://github.com/inclusionAI/AReaL/issues/1099)**
  - **核心内容**：在开启 KL 散度惩罚（`kl_ctl > 0`）并调用 Reference Model 时触发已知错误。
  - **意义**：KL 约束是 RLHF 对齐的标配功能，该基础 Bug 的修复对保证模型训练稳定性至关重要。

- **#1168 [Feature] Support FSDPEngine and RemoteSGLangEngine with factory classmethod](https://github.com/inclusionAI/AReaL/issues/1168) & **#1110 [Feature] Async Tensor Parallelism for Archon Engine](https://github.com/inclusionAI/AReaL/issues/1110)**
  - **核心内容**：社区正积极推进 API 层面的标准化重构，以及针对 Archon 引擎的异步张量并行计算。

## 4. 关键 PR 进展
今天更新的 PR 体现了项目正在向**微服务化**、**支持超大 MoE 模型**及**极致性能优化**三个方向快速推进：

### A. 性能与内存优化
- **[#1163 perf(trainer): reduce redundant offload/onload transitions](https://github.com/inclusionAI/AReaL/pull/1163)**
  - 合并了 `compute_values` 和 `ppo_update` 的 GPU↔CPU 数据迁移周期，大幅减少参数冗余换入换出，提升训练循环速度。
- **[#1182 fix(engine): use meta device for non-rank-0 in FSDP](https://github.com/inclusionAI/AReaL/pull/1182)**
  - **亮点**：针对大模型（如 32B）修复了严重 CPU OOM 问题。通过让非 rank-0 进程使用 `meta` device，将单节点的 CPU 内存消耗从 ~512 GiB 骤降至 ~64 GiB。
- **[#1151 feat(engine): Add Karmarkar-Karp algorithm](https://github.com/inclusionAI/AReaL/pull/1151)**
  - 引入 Karmarkar-Karp (KK) 算法替代 First Fit Decreasing (FFD) 进行序列打包。KK 算法能产生更均衡的微批次分配，降低长尾延迟。

### B. 分布式引擎与大规模推理
- **[#1159 feat(engine): lora support for MoE models](https://github.com/inclusionAI/AReaL/pull/1159)**
  - 扩展 Megatron 到 HF 的转换路径，支持 Qwen3 MoE 架构的单节点及跨节点 LoRA 训练。
- **[#1178 feat(archon): support multi-node inference in gateway controller](https://github.com/inclusionAI/AReaL/pull/1178)**
  - 支持超大模型（如 Llama-3.1 405B, `tp_size=16`）跨多物理节点推理，完善了 Gateway 控制器的分布式编排能力。
- **[#1181 fix _update_weights_from_disk function](https://github.com/inclusionAI/AReaL/pull/1181)**
  - 修复了 vLLM 在首次权重更新后一直处于暂停状态导致训练挂死的致命缺陷。

### C. 架构重构：微服务、Agent 与网关
- **[#1169 feat(infra): add microservice-based training service (controller v2)](https://github.com/inclusionAI/AReaL/pull/1169)** & **[#1177 feat(agent-service): add Controller, Guard, and Claude Agent SDK example](https://github.com/inclusionAI/AReaL/pull/1177)**
  - 项目正在将单体控制逻辑拆解为 Guard、Router、Data Proxy 等 HTTP 微服务组件，同时开始深度拥抱外部 Agent SDK（如 Claude），向 Agent RL 训练基础设施演进。
- **[#1183 feat(service): add external model API support](https://github.com/inclusionAI/AReaL/pull/1183)**
  - 支持将请求路由至兼容 OpenAI 格式的外部 API。这意味着 AReaL 不仅能训练开源本地模型，还可直接对闭源/外部大模型进行交互缓存、奖励分配和轨迹导出。

### D. 多智能体与范式扩充
- **[#1129 MARL Phase 1: add per-agent reward group and examples](https://github.com/inclusionAI/AReaL/pull/1129)**
  - 标志着 AReaL 正式开始接入多智能体强化学习（MARL）基础设施，为复杂的数学推理等任务提供多 Agent 协作训练管线。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从单机到超大规模分布式的全栈覆盖**：AReaL 正在解决 405B 级别模型、跨节点 MoE LoRA 训练中的硬核工程问题。对极大规模张量并行、FSDP CPU 内存优化的攻坚，使其具备了成为下一代大模型 RL 基础设施工厂的潜力。
2. **拥抱 Agent 与多智能体（MARL）前沿**：项目并未局限于传统的单智能体 RLHF。随着 `MARL Phase 1` 的接入和微服务化 `Controller/AgentService` 的重构，AReaL 正在为多 Agent 协作、推理任务构建数据流水线和验证器，这高度契合当前 LLM 范式向 Agent Workflow 演进的趋势。
3. **开放且解耦的系统架构**：引入外部 OpenAI 兼容 API 的支持与统一的 `RejectionSamplingConfig`，表明项目在设计上正在脱离封闭的底层绑定，致力于打造一个能兼容多种推理后端（vLLM, SGLang, 闭源 API）、可插拔的高阶 RL 训练平台。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-15 RL 日报摘要：

# 📊 TRL 开源生态 RL 日报 (2026-04-15)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持了高频的迭代节奏。无新版本发布，但共有 **32 个 PR** 更新（主要集中在清理历史技术债、扩展模型支持与实验性算法迭代），以及 **4 个 Issues** 更新。项目当前正处于下一版本发布前的代码整理与功能收敛阶段。

## 2. 版本发布
**无** (最新 Releases 为空)

## 3. 重点 Issues
今日的 Issues 集中在底层分布式训练的稳定性及特定数据处理逻辑的边缘情况：

*   **ZeRO3 下 RL 算法报错**：[#4899](https://github.com/huggingface/trl/issues/4899) 记录了在使用 ZeRO3 启动 RLOO 和 GRPO 时出现 `IndexError: pop from an empty deque` 的问题，影响大规模分布式强化学习训练的稳定性。
*   **Reward Trainer 数据静默丢失风险**：[#5539](https://github.com/huggingface/trl/issues/5539) 指出 `DataCollatorForRewardModelingDataset` 在处理带有 `"margin"` 的数据时，仅检查了 batch 中的 `examples[0]`。在数据经过 shuffle 后，可能导致非零样本被忽略从而引发静默的数据丢失。
*   **AsyncGRPO 初始化异常**：[#5498](https://github.com/huggingface/trl/issues/5498) 暴露出 `AsyncGRPOTrainer` 未正确透传用户提供的 `processing_class`，导致 `AsyncRolloutWorker` 强行从 `model_name` 重新加载，造成资源浪费或行为不一致。
*   **Transformers 兼容性告警**：[#5502](https://github.com/huggingface/trl/issues/5502) 报告了与 `transformers` v5.4.0 配合使用时，`processor` 调用产生大量 kwargs 相关的 Warning 日志。

## 4. 关键 PR 进展
PR 活动主要分为三大类：实验性新算法、推理后端升级、多模型 Chat Template 及 Tool Calling 适配。

### 🧪 实验性算法与架构重构
*   **新增 TPO Trainer**：[#5506](https://github.com/huggingface/trl/pull/5506) 引入了实验性的 TPO (Tree Preference Optimization) 算法 Trainer。
*   **优化参考模型加载逻辑**：[#5542](https://github.com/huggingface/trl/pull/5542) 在 DPO 和 KTO 训练器中优化了逻辑，若 `precompute_ref_log_probs=True`，则不再加载参考模型，大幅节省显存占用。
*   **Tokenizer 属性重构**：[#5489](https://github.com/huggingface/trl/pull/5489) 统一将 `_tokenizer` 设为 trainer 内部属性，重构了 GRPOTrainer 中的调用方式，提升了代码的内聚性。

### 🚀 推理与部署基础设施升级
*   **拥抱 vLLM 0.18**：[#5547](https://github.com/huggingface/trl/pull/5547) 更新了对 vLLM 0.18.0 的支持与测试。作为配套，[#5549](https://github.com/huggingface/trl/pull/5549) 正式放弃了对 vLLM 0.11 的老旧版本支持，推进原生权重同步等新特性的落地。
*   **废弃 Paged Attention 配置**：[#5544](https://github.com/huggingface/trl/pull/5544) 将 `GRPOConfig`、`RLOOConfig` 等配置中的 `use_transformers_paged` 标记为废弃并加入 `FutureWarning`。

### 🤖 多模态与前沿模型适配
*   **LLaMA 3.1/3.2 & Phi-3 Tool Calling 支持**：[#5518](https://github.com/huggingface/trl/pull/5518) 为 LLaMA 3.1/3.2 添加了 response schema 支持；[#5526](https://github.com/huggingface/trl/pull/5526) 增加了 Phi-3 的带 generation 标记的训练 Chat Template。此外，[#5537](https://github.com/huggingface/trl/pull/5537) 扩展了 `supports_tool_calling` 的测试用例。
*   **VLM 处理器修复**：[#5520](https://github.com/huggingface/trl/pull/5520) 修复了在 `GRPOTrainer` 中 `add_response_schema` 视觉语言模型 时 schema 传播失败和解码异常的底层数据流问题。
*   **GLM-4-MoE 支持**：[#5519](https://github.com/huggingface/trl/pull/5519) 为 GLM-4-MoE 架构加入了 `&#123;&#37; generation &#37;&#125;` 标记及类似 Qwen3 的 `think` 补丁。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **从“纯算法”向“工程化闭环”演进**：从今日的 PR 动态（放弃旧版 vLLM、重构 AsyncGRPO、解决 ZeRO3 底层报错）可以看出，TRL 正在发力解决 RLHF 在真实生产环境中的**分布式推理/训练协同**与**显存管理**等硬核工程痛点。
2.  **敏捷跟进前沿多模态与 Agent 架构**：项目对 LLaMA 3.x、Phi-3、GLM-4-MoE 等最新开源自回归模型的支持非常敏捷，特别是针对 VLM 的 Tool Calling (Schema 传播) 和 `generation` 控制标记的完善，表明 TRL 正在成为 LLM Agent 强化学习微调的基础设施。
3.  **丰富的训练算法矩阵**：除了稳健的 DPO/KTO/RLOO，TRL 持续引入实验性的 TPO、SSD 等新对齐范式。配合其日益完善的数据处理（如修复 Reward Model 的 Margin 静默丢失 Bug），TRL 为 RL 研究员和工程师提供了一套“开箱即用”且高度可复现的算法全家桶。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 生态日报 - 2026年04月15日

## 1. 今日速览
过去 24 小时，Tianshou 仓库整体处于平稳迭代期。无新版本发布，无新增 Pull Request。社区活跃度聚焦于基础组件的工程化应用，新增 1 条 Issues，主要涉及新版本实验管理框架 (`Experiment API`) 中的策略持久化与权重加载问题。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
- **[#1297] [OPEN] Loading policy from persistence dir**
  - **作者**: AnsgarKasselmannTUM
  - **链接**: [thu-ml/tianshou Issue #1297](https://github.com/thu-ml/tianshou/issues/1297)
  - **摘要**: 开发者在使用 `Experiment.from_directory(..., restore_policy=True)` 从本地持久化目录加载策略并调用 `create_experiment_world` 时遇到阻碍。该问题暴露了 Tianshou 在较新的高阶实验流控 API 中，模型权重序列化/反序列化的状态管理机制可能存在使用文档缺失或底层逻辑缺陷，对于需要长时间训练且依赖断点续训的 RL 实验具有较高参考价值。

---

## 4. 关键 PR 进展
过去 24 小时内无新增或状态变更的 Pull Request。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管当前处于无代码合并的静默期，但基于 Tianshou 的架构设计和生态定位，它依然是最值得关注的 RL 库之一：

1. **高阶抽象与工程化落地**: 从 Issue #1297 可以看出，Tianshou 正在或已经完成了从“单算法 API”向“完整实验生命周期管理 (`Experiment`, `ExperimentWorld`)”的演进，为复杂 RL 算法的超参搜索、断点续训和部署提供了工业级/学术级的基础设施。
2. **PyTorch 原生的高效抽象**: 相比于过度封装的框架，Tianshou 提供了极高的算法实现透明度（基于纯 NumPy/PyTorch 的 Batch 和 Buffer 抽象），使得研究者和工程师能够无障碍地复现前沿算法（如 PPO, SAC, Offline RL 算法）并进行魔改。
3. **算法覆盖的广度与深度**: 项目持续紧跟前沿，对 On-policy、Off-policy、Offline RL、多智能体（MARL）以及模型预测控制（MPC）等细分领域均有完备支持，是验证 RL 理论的绝佳试验田。

*数据来源: github.com/thu-ml/tianshou*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 2026-04-15 RL 日报摘要：

### 1. 今日速览
过去 24 小时，[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) 生态保持高频迭代。项目发布了最新的 [v0.10.1](https://github.com/OpenRLHF/OpenRLHF/releases) 版本，核心推进了对视觉语言模型（VLM）多轮对话强化学习的支持，并修复了单轮奖励路径的关键边界 Bug。社区侧共产生 2 起 Issue 更新，PR 动态为 0。

### 2. 版本发布
- **[Release v0.10.1](https://github.com/OpenRLHF/OpenRLHF/releases)**
  - **feat: 支持多轮 VLM RL**：由 [@xiaoxigua999](https://github.com/OpenRLHF/OpenRLHF/commit/98dc14f) 贡献，正式将强化学习训练能力扩展至多模态多轮对话场景，补齐了 VLM 在复杂任务下的 RLHF 链路。
  - **fix: 修复单轮 Reward 置零问题**：提交 [`c1ba971`](https://github.com/OpenRLHF/OpenRLHF/commit/c1ba971) 修复了 `scores=0.0` 被错误视作缺失值的逻辑。

### 3. 重点 Issues
- **[#1220] [OPEN] VLM Rollout 长度非预期膨胀**
  - **链接**: [OpenRLHF/OpenRLHF #1220](https://github.com/OpenRLHF/OpenRLHF/issues/1220)
  - **摘要**: 开发者指出当前 `main` 分支的 `SingleTurnAgentExecutor.execute` 逻辑存在 Bug。VLM 的 prompt 在经过 `process_prompt_with_images()` 展开后，已经包含了多模态占位符，但随后的 rollout 代码未对此进行截断或对齐处理，导致传递给 vLLM 的 prompt 长度被非预期地重复计算/膨胀。
- **[#1219] [CLOSED] 单轮 Reward 路径将 `0.0` 误判为空值**
  - **链接**: [OpenRLHF/OpenRLHF #1219](https://github.com/OpenRLHF/OpenRLHF/issues/1219)
  - **摘要**: 开发者发现 `openrlhf/utils/agent.py` 中使用了 `get("scores") or get("rewards")` 的逻辑，这在 Python 中会导致合法的浮点数 `0.0` 被判定为 False 并错误回退（Fallback）。此问题在本次发布的 v0.10.1 版本中已被相关 Commit 修复并关闭。

### 4. 关键 PR 进展
过去 24 小时内无活跃的 Pull Requests 更新。主要代码变更已直接合入并体现在最新的 [v0.10.1](https://github.com/OpenRLHF/OpenRLHF/releases) 版本发布中。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **填补多模态 RL 空白**：随着基座模型向多模态演进，RLHF 的对齐重点正在从纯文本向 VLM 转移。OpenRLHF 迅速上线 VLM Multi-turn RL 支持，表明其架构已具备处理复杂多模态特征的能力。
2. **极其硬核的工程细节**：从 Issue #1219 和 #1220 暴露出的细节（如 `0.0` 的 Bool 判断、vLLM 底层 Prompt tokenizer 的长度膨胀）可以看出，该项目在实际工业级 RLHF 训练中踩坑极深，其在 Reward 分布和分布式推理（Rollout）层面的工程修补对整个开源社区具有极高的复用和参考价值。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# VeRL 强化学习开源生态日报 (2026-04-15)

## 1. 今日速览
过去 24 小时内，VeRL 项目保持高活跃度，无新版本发布，但社区共更新了 **10 条 Issues** 和 **38 条 Pull Requests**。核心动态集中在：多模态大模型（如 Qwen3.5-VL, Gemma-4）在 FSDP2 下的训练稳定性修复、全异步训练架构的功能增强、以及底层硬件（Ascend NPU、AMD ROCm、Intel XPU）的广泛生态适配。

---

## 2. 版本发布
**无**（今日无新版本发布）。

---

## 3. 重点 Issues
今日的 Issues 主要聚焦于前沿大模型接入的兼容性报错以及全异步工作流的功能诉求。

*   **[特性请求] 全异步管线支持 GenRM**
    请求在 Fully Async Pipeline 中加入生成式奖励模型（GenRM）能力。目前代码中硬编码禁用了 RM，阻碍了全异步架构的高级 RLHF 应用。
    [verl-project/verl Issue #5949](https://github.com/verl-project/verl/issue/5949)
*   **[RFC] 统一的 RL 工作流跳过机制**
    提议构建一个统一管理的跳过系统（如 RolloutSkip），以节省时间与空间，旨在提升 VeRL 在训练阶段的调试效率。
    [verl-project/verl Issue #5998](https://github.com/verl-project/verl/issue/5998)
*   **[Bug] Gemma-4 FSDP 训练时的梯度爆炸与 FQN 不匹配**
    报告了 Gemma-4 模型家族（4B 梯度爆炸，31B 权重加载失败）在 FSDP on-policy 设定下的两个关键阻断性错误。
    [verl-project/verl Issue #5999](https://github.com/verl-project/verl/issue/5999)
*   **[Bug] Qwen3.5 FSDP SFT 错误**
    社区反馈 Qwen3.5 在开启 FSDP 进行 SFT 时遇到失败。
    [verl-project/verl Issue #5944](https://github.com/verl-project/verl/issue/5944)

---

## 4. 关键 PR 进展
今日 PR 动态展现了项目在架构解耦、性能优化及异构硬件支持上的快速迭代。

*   **[架构解耦] 引入独立 Log Prob 服务器**
    为全异步管线引入独立的 `Model Engine Server` 用于计算 `log_probs`。将原本需要在 Actor 训练引擎中的重计算过程解耦，避免了权重的保存/恢复，大幅提升异步效率。
    [verl-project/verl PR #5990](https://github.com/verl-project/verl/pull/5990)
*   **[性能优化] Trainer 端 FP8 权重量化**
    在权重同步路径中，将 FP8 块级权重量化从 Rollout GPU 转移到 Trainer GPU。在分离式部署模式下可将传输带宽减半（每个参数从 2 字节降至 1 字节），并显著降低内存峰值。
    [verl-project/verl PR #5976](https://github.com/verl-project/verl/pull/5976)
*   **[多模态修复] 修复 Qwen VL 系列 FSDP2 运行时错误**
    修复了 Qwen2.5-VL / 3-VL / 3.5 中 3D `position_ids` 导致的嵌套张量布局不匹配问题，解决了 FSDP2 下的 `RuntimeError`，并强化了 Ulysses 序列并行下的视觉嵌入处理。
    [verl-project/verl PR #6000](https://github.com/verl-project/verl/pull/6000), [verl-project/verl PR #5948](https://github.com/verl-project/verl/pull/5948)
*   **[底层架构] 实验性 Agent 框架与多轮 Rollout 网关运行时**
    新增实验性的 Agent 框架抽象和网关运行时，为 VeRL 支持复杂的多轮 Agent 风格 Rollout 铺平道路。
    [verl-project/verl PR #5931](https://github.com/verl-project/verl/pull/5931)
*   **[异构计算] 适配 AMD MI300X (ROCm) 与 Intel XPU**
    修复了完全异步 FSDP2 训练在 AMD ROCm (MI300X) 上的多项兼容性问题；同时社区贡献了 Intel XPU 设备的底层检测支持。
    [verl-project/verl PR #6002](https://github.com/verl-project/verl/pull/6002), [verl-project/verl PR #5943](https://github.com/verl-project/verl/pull/5943)
*   **[组件更新] Megatron-Core 兼容与动态上下文并行修复**
    更新了 MLA FlashAttention patch 以兼容最新的 mcore 0.16.2；同时修复了动态上下文并行（DCP）中的 batch 切分逻辑和 loss 归一化问题。
    [verl-project/verl PR #6005](https://github.com/verl-project/verl/pull/6005), [verl-project/verl PR #5869](https://github.com/verl-project/verl/pull/5869)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
基于今日的数据流水线变化，VeRL 在当前的 LLM/RLHF 生态中呈现出两个极强的不可替代性：
1.  **极致的工程优化与架构演进**：项目正在突破传统的“同步生成-训练”瓶颈。无论是引入独立 Log Prob 服务器（#5990）、Trainer 端 FP8 量化降本增效（#5976），还是实验性的 Agent 多轮网关（#5931），都表明 VeRL 正在面向超大规模 Agent RL 训练重构底层基础设施。
2.  **最激进的多硬件与最新模型适配**：在 Qwen3.5、Gemma-4 等最新模型发布极短时间内，项目不仅快速响应了 FSDP2 / Context Parallel 等复杂分布式策略的 Bug，同时还在积极推进对华为 Ascend NPU 和 AMD MI300X 的深度适配。对于需要跨芯片集群进行 RL 训练的团队而言，VeRL 已成为最活跃、最前沿的开源试验田。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 (2026-04-15)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库共处理了 **1 条 Issue** 和 **18 条 Pull Requests**（其中 11 条已合并/关闭，7 条仍在进行中），无新版本发布。整体来看，核心开发者与社区贡献者（如 `BrownianNotion`, `Chessage234`, `mnoukhov` 等）正集中精力修复底层训练稳定性 Bug、引入 Qwen 3.5 等新模型支持，并重构 GRPO 训练范式下的系统健壮性。

## 2. 版本发布
**无新版本发布**。但从当前密集的基础设施 PR 来看，预计近期可能会发布一个聚焦于稳定性和架构优化的 Minor Release。

## 3. 重点 Issues
- **[#1610 OLMo-2 1B `grpo_fast.py` 训练指标异常波动](https://github.com/allenai/open-instruct/issues/1610)** [CLOSED]
  - **概述**: 社区开发者反馈在进行 OLMo-2 1B 模型的 RLVR Stage 1 训练时，在 2.3k 步附近出现严重的指标波动（包括梯度范数、Loss、vLLM 与本地 logprobs 差异等）。
  - **分析**: 该 Issue 暴露了小模型在特定 Step 下可能出现的数据/梯度震荡问题。结合今日已合并的 PR（如 OLMo-2 配置修复及底层训练脚本修补），核心维护者已对此类异常行为进行了干预和修复。

## 4. 关键 PR 进展

### 核心训练与稳定性 (GRPO & vLLM)
- **[#1532 改进 GRPO vLLM 超时处理](https://github.com/allenai/open-instruct/pull/1532)** [CLOSED]
  - 修复了慢速网络下（如 RunPod）`_check_health` 缺少重试机制以及权重同步线程缺乏异常处理导致训练永久挂起的问题，大幅提升了分布式训练的容错性。
- **[#1318 修复 OLMo-2 1B 训练配置](https://github.com/allenai/open-instruct/pull/1318)** [CLOSED]
  - 更新并修复了 OLMo-2 1B 的微调配置，直接呼应并解决了上述 Issue #1610 的复现问题。
- **[#1581 接入 Evolving Rubric 配置至 GRPO 训练循环](https://github.com/allenai/open-instruct/pull/1581)** [CLOSED]
  - 实现了单向数据流架构（Dataloader → vLLM），将 Evolving Rubric（动态评估标准）的奖励配置真正激活。
- **[#1515 迁移至 vLLM 原生权重传输 API](https://github.com/allenai/open-instruct/pull/1515)** [OPEN]
  - 极具战略意义的重构。使用 vLLM 0.16.0 引入的原生 API 替换了项目中手动的参数广播循环，预计将显著提升权重同步效率并减少底层代码维护负担。

### 环境与评估工具
- **[#1609 Dr Tulu 复现与 Qwen 3.5 支持](https://github.com/allenai/open-instruct/pull/1609)** [OPEN]
  - 添加了基于 Qwen 3.5 + Evolving Rubrics 的 DR Tulu 训练脚本，并引入了针对 Qwen 3.5 风格工具调用的 vLLM 解析器。
- **[#1492 添加 SWERLSandboxEnv](https://github.com/allenai/open-instruct/pull/1492)** [OPEN]
  - 扩展了 `GenericSandboxEnv`，增加了 `submit` 工具，支持在 Docker 容器内运行per-sample（单样本）的测试套件，极大增强了 RL 在 SWE（软件工程）基准测试中的自动化评估能力。
- **[#1602 新增 MiniMax 模型作为 Judge/Evaluator](https://github.com/allenai/open-instruct/pull/1602)** [CLOSED]
  - 在 `judge_utils.py` 中接入了 MiniMax-M2.7 系列模型，丰富了开源生态外的 LLM-as-a-Judge 评估方案。

### 基础设施与 Bug 修复
- **[#1611 修复 DataPreparationActor 关闭挂起](https://github.com/allenai/open-instruct/pull/1611)** [OPEN]
  - 解决了训练完成后 Actor 因 `shutdown_requested` 未置为 True 而在等待循环中无限空转的问题。
- **[#1603 确定性降采样修复](https://github.com/allenai/open-instruct/pull/1603)** [OPEN]
  - 修复了数据混洗器下采样时的随机性问题，确保 Debug 阶段多次运行的数据分布严格一致。
- **[#1598,#1601,#1605,#1604,#1597,#1595 等系列修复](https://github.com/allenai/open-instruct/pulls)** [CLOSED]
  - 核心贡献者 `Chessage234` 等集中修复了上下文窗口截断双重计算、数学评估工具 `is_equiv` 返回 None、DPO 数据集验证逻辑报错等多个底层逻辑缺陷。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **紧跟底层推理引擎迭代**：Open Instruct 正在迅速适配并迁移至 vLLM 的最新原生特性（如 PR #1515），这在依赖高频 LLM 交互的 RLHF/GRPO 范式中，是压榨算力极限、提升模型参数同步效率的关键。
2. **向复杂 RL 环境演进**：通过引入 `SWERLSandboxEnv`（PR #1492）和针对代码/工具调用（Qwen 3.5 parser）的支持，项目正从单纯的文本对齐扩展到更复杂的多轮工具调用和沙盒环境任务（如 SWE-bench），这与目前 RL 在 Agent 领域的最前沿趋势高度契合。
3. **动态奖励机制 的深度集成**：支持 Evolving Rubrics（PR #1581, #1609）表明该项目正在探索更精细、动态的 Reward Model 机制，而非仅仅依赖静态的标量奖励，这对于解决 RL 训练过程中的 Reward Hacking 和评估漂移具有重要参考价值。
4. **高度活跃的社区“捉虫”与复现生态**：围绕 OLMo-2 1B 的复现及修错（Issue #1610 及相关 PR），展现了社区在核心算法（如 GRPO）稳定性调试上的深度参与。多项代码健壮性修复保障了研究者在进行 RL 实验时的确定性和可重复性。

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

# 强化学习（RL）日报摘要：PettingZoo
**日期**: 2026-04-15 | **项目**: [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体活跃度较低，无代码合并与版本发布。生态侧以社区提问为主，唯一的活动集中在关于多智能体环境 API 设计的讨论。

### 2. 版本发布
- **最新 Releases**: 无。
- 近期无新版本编译或推送记录，核心 API 处于稳定维护期。

### 3. 重点 Issues
- **[#1326 [OPEN] 关于 `.state()` 函数强制输出 `ndarray` 的探讨](https://github.com/Farama-Foundation/PettingZoo/issues/1326)**
  - **背景**: 开发者 `MathieuFonsProjects` 提出疑问，当前 API 中的 `.state()` 函数被严格限制返回 `ndarray`。但在实际的 CTDE（集中式训练，分布式执行）范式中，算法往往需要获取非结构化（如 `Dict` 类型）的全局真实状态。
  - **技术点**: 当前环境的 Observation space 支持灵活的嵌套结构（如 `gym.spaces.Dict`），但 State space 却缺乏这种灵活性，这导致在提取复杂全局真实状态时受到 API 的不合理制约。
  - **状态**: 该 Issue 昨日（4月14日）有新增回复，当前正在进行技术交流。

### 4. 关键 PR 进展
- **最新 Pull Requests**: 过去 24 小时无 PR 更新、新建或合并。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama Foundation（Gymnasium 的母组织）旗下的核心项目，是目前多智能体强化学习（MARL）领域的标准 API 基建。
从今日的 [Issue #1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326) 可以看出，该项目正在持续接受来自前沿多智能体研究（如 CTDE 架构中复杂全局状态的提取）的考验。追踪该项目的意义在于：
1. **统一标准**: 它是连接各种 MARL 算法框架与环境模拟器的核心枢纽。
2. **API 演进**: 开发者可以通过社区对 State/Observation 灵活性的探讨，洞察未来 Gymnasium/PettingZoo API 在处理复杂观测空间时的演进方向。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>