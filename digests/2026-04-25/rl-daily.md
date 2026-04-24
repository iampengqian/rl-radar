# RL 开源生态日报 2026-04-25

> 生成时间: 2026-04-24 22:11 UTC | 覆盖项目: 15 个

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
当前开源 RL 生态呈现明显的两极分化态势。面向大模型后训练的 RLHF/RL 框架正处于技术爆发期，高频处理前沿模型适配、大规模分布式通信重构及多模态支持的硬核难题；而以 CleanRL、Tianshou、Gymnasium 为代表的经典/传统 RL 基础设施已进入高度稳定的成熟收敛期。这反映出整个 AI 开源界的重心已全面向 LLM 对齐与 Agentic RL 转移。

## 各项目活跃度对比
过去 24 小时内，核心活跃项目全部集中于 LLM 后训练与多模态基础设施赛道，传统单智能体 RL 框架均无实质代码活动。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 28 | 0 | 紧急修复 Qwen3.5/transformers 契合度，引入 Megatron-FSDP 底座 |
| **AReaL** | 5 | 27 | 0 | 扩展全模态与复杂 Agent 训练边界，攻坚底层分布式通信 |
| **TRL** | 3 | 15 | 0 | “降本增效”，聚焦 SFT 显存大幅优化与异步训练架构重构 |
| **slime** | 2 | 8 | 0 | 深水区工程优化，啃下 Gemma 4 MoE 与多轮 VLM RL 硬骨头 |
| **Open Instruct** | 0 | 6 | 0 | SFT 数据流 I/O 提速近 10 倍，快速跟进 2026 最新 PG 理论 |
| **ROCK** | 2 | 5 | 0 | 完善沙箱环境，修复复杂网络代理与底层基础设施观测性 |
| **PettingZoo** | 0 | 1 | 0 | 底层渲染依赖迁移 (`pygame-ce`)，拥抱 Python 3.14 |
| **Stable Baselines3** | 1 | 0 | 0 | 探索 Intel IPEX 硬件级加速，建议通过文档指引而非硬编码 |
| **torchtune** | 1 | 0 | 0 | 提案引入二阶优化器 (SCAO) 突破 QLoRA 显存瓶颈 |

*(注：CleanRL, Gymnasium, OpenRLHF, rl_games, ROLL, Tianshou 过去 24 小时内均无代码或社区活动，生态进入稳定停滞期。)*

## 共同关注的研究与工程方向
**研究侧信号：**
1. **对齐算法的多元化与前沿演进**：除了绝对主流的 GRPO 外，社区正密集集成 DPO（AReaL）、KTO（TRL 架构对齐），甚至开始工程化落地 2026 年最新的强化学习理论研究，如 Delightful Policy Gradient 与 Kondo Gate 机制（Open Instruct）。
2. **突破显存墙的优化器革命**：面对 LLM 微调的参数量激增，研究者开始摒弃传统一阶优化器。Torchtune 社区提出了基于曲率感知的二阶优化器（SCAO）方案，以期在 QLoRA 等低显存场景下提升收敛效率。

**工程/基础设施侧信号：**
1. **底层分布式训练引擎的彻底重构**：单一并行策略已无法满足 MoE 和超大模型的吞吐需求。各大框架正在深度整合更复杂的分布式后端（如 verl 引入 Megatron-FSDP），并攻坚 PP/CP/EP 混合并行下的权重同步与内存状态断言难题。
2. **异构计算与国产算力全栈适配**：打破 NVIDIA GPU 依赖成为核心工程发力点。Intel XPU 在 verl 中实现了端到端支持，Ascend NPU (昇腾) 的底层通信崩溃（HCCL 子组初始化）也在 AReaL 中得到修复。
3. **VLM 多模态与 Agentic RL 的工程化落地**：纯文本单轮 RLHF 已成为过去时。Verl、AReaL 和 slime 均在重构 Agent Loop，修复 VLM 多轮交互中的张量不对齐、图像致盲等系统性 Bug。

## 差异化定位分析
- **verl 与 slime**：定位于**极大规模与前沿模型**的分布式训练基座。它们集中处理 MoE 架构（如 Qwen3.5-397B, Gemma 4）、动态 Batch 下的 DP 负载均衡，以及极其复杂的底层张量/事件循环对齐问题，适合在超大集群上做极致的吞吐优化。
- **AReaL**：正快速向**全模态与复杂交互场景**演进。通过集成 VLM 多轮训练、引入沙箱环境以及重构 HTTP 推理网关，其在构建复杂外部环境反馈的 Agentic RL 方面展现出强烈的企图心。
- **TRL 与 torchtune**：主打**PyTorch 原生与极致的显存降本**。TRL 通过分块交叉熵将 SFT 显存暴降 50%，torchtune 探索原生高阶优化器，两者都致力于让有限的算力（如单机多卡）能够跑通大模型的后训练。
- **Open Instruct**：表现为**严谨的学术复现与极致 I/O 调优**。在确保与底层框架数学计算绝对一致性的同时，通过流式磁盘写入将数据预处理提速近 10 倍，是学术研究测试最新对齐策略的绝佳利器。

## 社区热度与成熟度
- **高频活跃区（LLM RL 框架）**：verl、AReaL 和 TRL 的 PR 与 Issue 讨论极具工程深度，动辄获得十余个点赞，社区焦点紧跟最新发布的 LLM（如 Qwen3.5/3.6 与 Gemma 4 版本依赖冲突）。
- **稳定演进区（环境与底层库）**：PettingZoo 和 SB3 代表了经典 RL 基础设施的成熟态。它们的社区活动降至低频，主要致力于解决生命周期管理（如替换不再维护的渲染依赖）和提供扩展指南（如 IPEX），而非核心 API 的变更。
- **沉寂区（传统算法库）**：Gymnasium、Tianshou 等曾引领风潮的项目，在 24 小时内活动为零，侧面印证了当前开源技术红利已彻底向大模型后训练倾斜。

## 值得关注的趋势信号
1. **Transformers 生态升级引发的“系统性地震”**：`transformers>=5.0` 正在导致底层 Reward 静默失效（verl Issue #6080）及各类版本锁死冲突，未来一两周内，各大框架将不可避免地开展大规模的依赖项适配战。
2. **推理与训练彻底走向异步解耦**：从 AReaL 的 Rollout 动态扩容、verl 的完全异步 RM，到 TRL 为 AsyncGRPO 引入 LoRA，传统的“训练-等待”阻塞范式正在被打破，在线强化学习的系统吞吐将迎来质变。
3. **真实沙箱环境成为 Agentic RL 的“新基建”**：随着 RL 从数学推理转向 Agent 调度，ROCK 对沙箱时区、元数据指标的细化，以及 AReaL 引入的安全沙箱，预示着提供高并发、高稳定性的真实代码/Web 交互环境，将成为开源竞争的下一高地。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 2026-04-25 ROCK 项目 RL 日报摘要：

# ROCK (alibaba/ROCK) RL 生态日报 - 2026-04-25

## 1. 今日速览
过去 24 小时内，ROCK 项目保持高活跃度，无新版本 Release 发布。社区共处理 **2 条 Issues** 和 **5 条 Pull Requests**，主要聚焦于 v1.7.0 版本文档的收尾合并、代理网络转发修复、沙箱环境支持（时区与元数据存储指标）以及版本号更新。

## 2. 版本发布
- **最新 Release**: 无新增发布。

## 3. 重点 Issues
- **#896 [CLOSED] docs: add v1.7.0 release notes**
  - **作者**: Issac-Newton
  - **摘要**: 提议并添加 v1.7.0 版本的中英文发版说明及版本控制文档。
  - **链接**: [alibaba/ROCK Issue #896](https://github.com/alibaba/ROCK/issues/896)
- **#886 [CLOSED] [enhancement] [Feature] Support meta store and database operation metrics**
  - **作者**: zhangjaycee
  - **摘要**: 建议在 Sandbox（沙箱）特性类别中，增加对 Meta Store（元数据存储）和数据库操作指标的支持，以强化环境底层的可观测性。
  - **链接**: [alibaba/ROCK Issue #886](https://github.com/alibaba/ROCK/issues/886)

## 4. 关键 PR 进展
- **#897 [CLOSED] docs: add v1.7.0 release notes (#896)**
  - **作者**: Issac-Newton
  - **摘要**: 基于 Issue #896，正式合并 v1.7.0 版本的中英文档。涵盖发版说明、入门指南、SDK 参考及用户指南。内容涉猎广泛，包括 Datasets SDK/CLI、容器磁盘限制、Docker 认证重构、WebSocket 请求头转发、沙箱时区支持以及 MetaStore 指标等重大更新。
  - **链接**: [alibaba/ROCK PR #897](https://github.com/alibaba/ROCK/pull/897)
- **#894 [CLOSED] fix(proxy): block cookie header in WebSocket forwarding**
  - **作者**: Issac-Newton
  - **摘要**: 修复了 WebSocket 转发时因上游网关 SSO Token 导致 Cookie Header 过大，进而引发下游服务 502 错误的问题（关闭 #865）。
  - **链接**: [alibaba/ROCK PR #894](https://github.com/alibaba/ROCK/pull/894)
- **#887 [CLOSED] Support meta store and database operation metrics**
  - **作者**: zhangjaycee
  - **摘要**: 实现了 Issue #886 中提出的 Meta Store 与数据库操作指标监控功能。
  - **链接**: [alibaba/ROCK PR #887](https://github.com/alibaba/ROCK/pull/887)
- **#885 [CLOSED] Feature/tz mount localtime**
  - **作者**: Issac-Newton
  - **摘要**: 增加了沙箱环境挂载本地时间的功能，支持沙箱内的时区同步（关闭 #863）。
  - **链接**: [alibaba/ROCK PR #885](https://github.com/alibaba/ROCK/pull/885)
- **#893 [CLOSED] update version**
  - **作者**: Dengsheng-wzh
  - **摘要**: 常规代码库版本号更新迭代（关闭 #880）。
  - **链接**: [alibaba/ROCK PR #893](https://github.com/alibaba/ROCK/pull/893)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习（RL）研究和应用中，**环境交互的基础设施鲁棒性**是决定算法训练成败的关键瓶颈之一。
从近期 PR（如 #897, #887, #885）可以看出，ROCK 正在系统性地构建和优化其 **Sandbox（沙箱环境）**：不仅通过引入 MetaStore 和 DB 指标大幅提升了 RL 环境内部状态的可观测性，还解决了容器时区同步、网络鉴权代理/WebSocket 转发等底层工程痛点。对于需要大规模、高并发且稳定调用复杂环境（如数据库交互、Web 交互等真实场景）的 RL 算法研发而言，ROCK 正在提供一个极其硬核且高可用的 Envhub/SDK 底层支持。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# slime RL 日报摘要 (2026-04-25)

## 1. 今日速览
过去 24 小时内，[slime (THUDM/slime)](https://github.com/THUDM/slime) 仓库保持高活跃度。社区共更新了 **2 条 Issues** 和 **8 条 Pull Requests**，无新版本发布。
今日核心主题：**多模态/多轮对话 Bug 修复、多工具调用对齐、底层训练框架 Megatron 的异步与并发深度优化，以及对最新大模型 Gemma 4 的全面支持。**

## 2. 版本发布
无新增 Releases。

## 3. 重点 Issues
- **[[Question] Gemma 4 support via HF wrapping approach? #1811](https://github.com/THUDM/slime/issues/1811)**
  - **概览**：社区开发者探讨如何通过黑盒 HuggingFace 封装方案，将 Gemma 4 (dense 31B 和 26B A4B MoE) 接入 slime 进行 RL 训练，并指出 SGLang 侧已完成推理支持。（目前获 👍 4，反映社区对新型模型架构的强烈需求）
- **[[Bug] VLM multi-turn rollout: model cannot see images on multi-turns #1847](https://github.com/THUDM/slime/issues/1847)**
  - **概览**：VLM（视觉语言模型）在多轮 rollout 推理时出现严重 Bug，导致模型在后续轮次中“致盲”（无法识别图像输入），输出退化为空白占位符的描述。

## 4. 关键 PR 进展
今日的 PR 主要由核心开发者 `leofan-lab` 主导，集中在提升系统稳定性和前沿模型支持上：

- **[feat(gemma4): add Gemma4 26B-A4B MoE and 31B dense support #1855](https://github.com/THUDM/slime/pull/1855)**
  - **进展**：全面引入 Gemma 4 支持，涵盖模型架构、HF 与 Megatron 的权重转换、retool 集成及 10 项单元测试。各项 TP/PP/DP/CP/EP 并行策略的校验测试均已通过。
- **[fix: guard DP-imbalance empty micro-batches under dynamic batching #1860](https://github.com/THUDM/slime/pull/1860)**
  - **进展**：修复动态变长 Batch 下（多轮 RL 常见场景），DP rank 间 micro-batch 数量不一致引发的底层崩溃问题。
- **[fix: harden retool rollout against multi-turn / retry desync #1861](https://github.com/THUDM/slime/pull/1861)**
  - **进展**：强化多轮工具调用过程中的张量对齐，确保 `rollout_log_probs`、`loss_masks` 等核心数据在重试/多轮交互下长度一致，避免 `slice_log_prob` 报错。
- **[chore: include length context in slice_log_prob_with_cp assert #1862](https://github.com/THUDM/slime/pull/1862)**
  - **进展**：增强代码可调试性，在 Assert 报错中补充张量长度信息，免去开发者手动加 `print` 排查的麻烦。
- **[fix: rebind asyncio Semaphore and HTTP client on event-loop change #1858](https://github.com/THUDM/slime/pull/1858)**
  - **进展**：解决 Ray actors 在重入不同 asyncio 事件循环时，内部池锁引发 `attached to a different event loop` 的异步并发报错。
- **[fix: make no_sync_func install idempotent across train() calls #1857](https://github.com/THUDM/slime/pull/1857)**
  - **进展**：解决 slime 每轮 rollout 调用一次 `train()` 时，与 Megatron 上游 `config.no_sync_func is None` 冲突的断言异常，改为幂等安装逻辑。
- **[[docker] cleanup sglang patch #1859](https://github.com/THUDM/slime/pull/1859)**
  - **进展**：清理 SGLang 补丁代码，为未来的 SGLang 大版本升级做准备。
- **[refactor/ppo #1856](https://github.com/THUDM/slime/pull/1856) [CLOSED]]**
  - **进展**：一项针对 PPO 模块的重构尝试（涉及 Actor-Critic 并行解耦及多 Critic 探索），目前已被关闭，但测试数据显示 slime 在 reward 指标上对比 verl 展现出了优异的收敛表现。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **啃最硬的架构骨头（MoE 与 VLM RL）**：项目正将 RLHF/RL 训练的边界推向更复杂的场景。从今日合并的 **Gemma 4 MoE 原生支持** 到对 **VLM 多轮视觉丢失 Bug** 的社区反馈，表明 slime 正在解决多模态和混合专家模型在强化学习中的实际痛点。
2. **深水区的工程优化**：slime 团队正在处理多轮 Tool-call RL 带来的底层系统性挑战。今日连续修复了**动态 Batch 下的 DP 负载不均衡**、**异步事件循环绑定冲突**及 **Megatron 框架重入断言** 等问题。这证明该项目具备对深层分布式训练（Ray + Megatron）的极强把控力。
3. **极高的执行效率**：Issue #1811 在 4 月初提出 Gemma 4 需求，今日便释出包含完整并行测试的 PR #1855；VLM 多轮 Rollout 缺陷被发现后，紧接着就有一系列针对性极强的对齐修复 PR。这种从需求/报错到高质量代码落地的极短周期，使其成为 RL 基础设施中极具确定性的一环。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-04-25)

## 1. 今日速览
过去 24 小时内，AReaL 生态保持高度活跃，共处理 **5 条 Issues** 和 **27 个 Pull Requests**。从提交内容来看，当前的社区开发重心主要集中在**底层训练引擎优化（Megatron、Ascend NPU 适配）**、**系统级部署与依赖治理**以及**全新算法支持（DPO）**。目前暂无新版本发布。

---

## 2. 版本发布
- **最新 Releases**：无

---

## 3. 重点 Issues
今日的 Issues 聚焦于新模型适配、架构演进与系统环境配置：

- **[Question] Qwen3.5 运行依赖版本冲突**：开发者报告在 AReaL 1.0.2 环境下，`transformers 5.3` 与 `sglang 0.5.9` 组合无法运行 Qwen3.5，目前社区正在寻找最佳的依赖版本组合。
  👉 [inclusionAI/AReaL Issue #1155](https://github.com/inclusionAI/AReaL/issues/1155)
  
- **[RFC] 集成 Ray Core RDT 进行权重同步**：提出使用 Ray Core RDT 替代现有的 NCCL/XCCL broadcast 或基于磁盘的方法，以优化训练引擎间的权重同步效率。
  👉 [inclusionAI/AReaL Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243)

- **[Feature] 优化虚拟环境挂载覆盖问题**：由于 Docker 镜像中的 venv 安装在 `/AReaL/.venv`，外部挂载代码时会导致环境被覆盖。提议将 venv 移至独立路径。
  👉 [inclusionAI/AReaL Issue #1247](https://github.com/inclusionAI/AReaL/issues/1247)

- **[Feature] 依赖项 `mbridge` 升级至最新 commit**：提议将 `mbridge` 从 PyPI 的 `0.15.1` 升级至 main 分支最新提交，以获取最新特性。
  👉 [inclusionAI/AReaL Issue #1257](https://github.com/inclusionAI/AReaL/issues/1257)

*(注：DPO 算法支持讨论 [Issue #1137](https://github.com/inclusionAI/AReaL/issues/1137) 已关闭，相关实现已转入 PR 阶段)*

---

## 4. 关键 PR 进展
今日共有 27 个 PR 更新，以下为技术影响度较高的关键进展：

### 🌟 算法与多模态支持
- **新增 DPO 算法支持**：添加了直接偏好优化 作为一等公民对齐方法，基于 `Anthropic/hh-rlhf` 数据集实现了新的 trainer。
  👉 [inclusionAI/AReaL PR #1190](https://github.com/inclusionAI/AReaL/pull/1190)
- **支持多模态 VLM 多轮训练**：为视觉语言模型 增加多轮智能体训练能力，包含自动错误恢复和重试机制。
  👉 [inclusionAI/AReaL PR #931](https://github.com/inclusionAI/AReaL/pull/931)
- **引入 Qwen-Omni 模型支持**：进一步扩展 AReaL 对基础大模型的支持矩阵。
  👉 [inclusionAI/AReaL PR #957](https://github.com/inclusionAI/AReaL/pull/957)

### ⚙️ 引擎与底层性能优化
- **Megatron 引擎权重更新适配**：针对 Megatron 引擎引入了带有专家并行 和上下文并行 / 流水线并行 支持的 Awex 权重更新适配器。
  👉 [inclusionAI/AReaL PR #1252](https://github.com/inclusionAI/AReaL/pull/1252)
- **修复 Ascend NPU 上 HCCL 子组初始化崩溃**：解决了在昇腾 NPU 上 `kl_ctl > 0` 时，`ref.compute_logp()` 阶段的通信器初始化崩溃问题。
  👉 [inclusionAI/AReaL PR #1254](https://github.com/inclusionAI/AReaL/pull/1254)
- **SFT Batch 分区回归测试**：针对单控制器 SFT 批次复制问题（每个 DP rank 复制整个 batch）增加了回归测试，该问题已在此前的 commit 中修复。
  👉 [inclusionAI/AReaL PR #1255](https://github.com/inclusionAI/AReaL/pull/1255)
- **SFT Token 统计指标修复**：修复了切换到 CP-local loss 后，SFT 指标少计（under-counting）的问题。
  👉 [inclusionAI/AReaL PR #1249](https://github.com/inclusionAI/AReaL/pull/1249)

### 🛠️ 基础设施与推理架构重构
- **支持沙箱运行环境**：[WIP] 为推理和执行提供安全的沙箱隔离支持。
  👉 [inclusionAI/AReaL PR #1256](https://github.com/inclusionAI/AReaL/pull/1256)
- **重构推理服务 HTTP 层**：复用长连接 `httpx` 客户端，引入 Pydantic 响应模型，并行化健康检查和代理注册，大幅提升推理服务的吞吐和稳定性。
  👉 [inclusionAI/AReaL PR #1253](https://github.com/inclusionAI/AReaL/pull/1253)
- **Rollout 动态扩容支持**：打破了静态资源分配限制，支持在训练任务运行时动态添加 Rollout 引擎，应对不同 workload。
  👉 [inclusionAI/AReaL PR #592](https://github.com/inclusionAI/AReaL/pull/592)
- **Docker Venv 路径迁移**：配合 Issue #1247，将虚拟环境从 `/AReaL/.venv` 移出至 `/opt/.venv`，避免外部挂载目录时覆盖环境。
  👉 [inclusionAI/AReaL PR #1251](https://github.com/inclusionAI/AReaL/pull/1251)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从纯 LLM 拓展至全模态与复杂 Agent 训练**：从今日的 PR 动态可以看出，AReaL 正在快速突破单纯的文本 RLHF 范畴，落地 VLM（视觉语言模型）的多轮交互训练（[PR #931](https://github.com/inclusionAI/AReaL/pull/931)）以及沙箱环境（[PR #1256](https://github.com/inclusionAI/AReaL/pull/1256)），这标志着其正向复杂的 **Agentic RL** 场景迈进。
2. **深度攻坚底层分布式训练瓶颈**：项目不仅在算法层扩展，在工程界的护城河也在加深。通过优化 Megatron 的 PP/CP/EP 权重更新机制（[PR #1252](https://github.com/inclusionAI/AReaL/pull/1252)）、重构 HTTP 推理网关（[PR #1253](https://github.com/inclusionAI/AReaL/pull/1253)），以及解决各类异构硬件（如 Ascend NPU）的底层通信错误，AReaL 正在解决大规模 RL 训练中最棘手的系统级墙。
3. **拥抱前沿算法与模型迭代**：紧跟社区趋势，迅速引入了 DPO 算法（[PR #1190](https://github.com/inclusionAI/AReaL/pull/1190)），并积极适配最新的 Qwen3.5 及 Qwen-Omni 系列模型，展现了极强的生态响应力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-25 RL 日报摘要：

# 🤗 TRL 生态日报 (2026-04-25)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持了较高的代码重构与基础设施维护活跃度。共处理了 15 个 Pull Requests（其中 6 个合并/关闭，9 个仍在进行中），并新增或更新了 3 个 Issues。当前无新版本发布。今日的主线特征是：**核心训练逻辑优化（VRAM降本、SFT指标修复）、后训练基础设施重构（AsyncGRPO引入LoRA）以及 CI 流程的大幅加固**。

## 2. 版本发布
无新增 Releases。

## 3. 重点 Issues
今日的 Issue 集中在 CI/CD 管线阻塞和特定的底层张量对齐问题上：

- **[CI] Ruff 代码质量检查失败**: CI 流水线因找不到 `ruff` 报错 `No such file or directory`。
  链接: [huggingface/trl Issue #5633](https://github.com/huggingface/trl/issues/5633)
- **[Bug] QLoRA + DPO 训练崩坏**: 使用 DPO Trainer 配合 QLoRA 微调 Llama 3 8B 时，若 token embedding 未 pad 到 64 的倍数，会导致模型行为完全损坏。这可能与底层硬件对齐要求或相关 Kernel 有关。
  链接: [huggingface/trl Issue #5608](https://github.com/huggingface/trl/issues/5608)
- **[CI] Pages 部署失败 (Liquid 语法错误)**: `chat_templates.md` 文件中存在未闭合的 `if` 标签，导致文档构建失败，该问题由近期的 PR #5581 合并引入。
  链接: [huggingface/trl Issue #5636](https://github.com/huggingface/trl/issues/5636)

## 4. 关键 PR 进展
今日的 PR 包含多项极具价值的实战优化与架构重构：

### 🚀 核心算法与性能优化
- **SFT 显存优化（最高降低 50% VRAM）**: 引入分块交叉熵损失，在 batch size 较大时显著削减 SFT 的峰值显存占用，chunk size 经评估设定为 256 以实现性能与内存的最佳平衡。
  链接: [huggingface/trl PR #5575](https://github.com/huggingface/trl/pull/5575)
- **SFT 熵计算修复**: 修复了 SFT 中熵指标在 token 维度上的错误平均问题，确保熵准确反映模型在 `label != -100` 位置上的不确定性。
  链接: [huggingface/trl PR #5620](https://github.com/huggingface/trl/pull/5620) *(CLOSED)*
- **为 AsyncGRPO 引入 LoRA 支持**: 扩展了 AsyncGRPO 的能力，通过基于 HTTP 的权重重载绕过 vLLM 的内部参数名限制，使其能够支持 LoRA 微调（已在 Gemma 4 上验证）。
  链接: [huggingface/trl PR #5610](https://github.com/huggingface/trl/pull/5610)
- **扩展 Packing 兼容的 Attention 机制**: SFTTrainer 中的 Packing 现在额外支持 `eager`, `sdpa`, `flex_attention`, `flash_attention_4`，丰富了训练时的底层加速选择。
  链接: [huggingface/trl PR #5316](https://github.com/huggingface/trl/pull/5316)

### 🛠️ 架构重构与对齐
- **KTO 与 DPO 架构对齐**: 移除了 KTO 中冗余的 BOS/EOS 显式处理逻辑，将其对齐为与 DPO 一致的行为；同时将 KTO 的 completion 拼装逻辑从 dataset 准备阶段下沉到了 `DataCollator` 中。
  链接: [huggingface/trl PR #5635](https://github.com/huggingface/trl/pull/5635) *(CLOSED)* | [huggingface/trl PR #5632](https://github.com/huggingface/trl/pull/5632) *(CLOSED)*
- **测试模型生成脚本重构**: 将原本 400 多行的单体 `generate_tiny_models.py` 脚本拆分为按模型隔离的独立模块，极大提升了 CI 测试的可维护性。
  链接: [huggingface/trl PR #5637](https://github.com/huggingface/trl/pull/5637)

### 📝 模板与 CI 修复
- **新增 Cohere 训练 Chat Template**: 为 Cohere Command 模型族注册了特定的训练变体模板，修复了使用 `assistant_only_loss=True` 时产生的掩码错误。
  链接: [huggingface/trl PR #5627](https://github.com/huggingface/trl/pull/5627)
- **CI Hotfix**: 添加 `ruff` 依赖到 pre-commit，修复了近期的代码风格检查阻断问题。
  链接: [huggingface/trl PR #5634](https://github.com/huggingface/trl/pull/5634) *(CLOSED)*

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **直击大模型 RL 微调的显存痛点**: 随着模型上下文长度的增加，显存墙成为 RLHF/DPO 的最大瓶颈。TRL 正在积极引入如 *Chunked cross-entropy* ([PR #5575](https://github.com/huggingface/trl/pull/5575)) 等底层优化，直接在不牺牲训练精度的前提下提供高达 50% 的 VRAM 降本。
2. **面向前沿推理架构的后训练支持**: 项目正在快速适配现代推理和训练范式，例如对 *AsyncGRPO 的 LoRA 兼容* ([PR #5610](https://github.com/huggingface/trl/pull/5610)) 以及跟进如 *Gemma 4*、*Qwen3* 和 *GLM-4 MoE* 架构的特性支持，保持了在开源 RL 工具链中的绝对时效性。
3. **严谨的工程化与代码信噪比**: 项目近期进行了大量“解耦重构”（如 KTO 与 DPO 逻辑对齐、测试模型脚本单体拆解 [PR #5637](https://github.com/huggingface/trl/pull/5637)）。这种对技术债务的及时清理和指标计算准确性的修复（如 [PR #5620](https://github.com/huggingface/trl/pull/5620)），表明其不仅是一个算法集散地，更是一个具备工业级可靠性的基础设施。

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

# verl RL 日报摘要 (2026-04-25)

## 1. 今日速览
过去 24 小时内，verl 生态保持高活跃度，共更新 **10 条 Issues** 和 **28 条 PR**，无新版本发布。当前社区焦点高度集中于：前沿模型（Qwen3.5/3.6 系列）的适配与训练稳定性修复、多种硬件后端（Intel XPU, Ascend NPU）的兼容性支持，以及底层核心引擎（Megatron-FSDP、Async Engine）的重构演进。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
前沿大模型适配与底层框架兼容性是当前开发者面临的主要挑战。

- **[Bug] transformers>=5.0 导致奖励静默失效**: 在 GRPO 训练中，若使用 `transformers>=5.0`，`critic/rewards/mean` 会固定为 `0.0`且无报错。降级至 5.0 以下版本可恢复。（[Issue #6080](https://github.com/verl-project/verl/issues/6080)）
- **[Bug] FSDP2 CPUOffloadPolicy 导致设备不匹配**: 在非 LoRA 全量权重训练（如 Qwen3.5）中，FSDP2 混合引擎调用 `state_dict()` 时因设备不匹配而崩溃，获 7 个点赞，影响范围较广。（[Issue #5995](https://github.com/verl-project/verl/issues/5995)）
- **[功能咨询] Qwen3.5-397B-A17B 及 Qwen3.6 支持计划**: 社区对超大 MoE 模型的训练诉求强烈，开发者在探讨框架对 Qwen3.5-397B 及 Qwen3.6 的 GRPO 及 FSDP+EP 训练支持进度。（[Issue #6123](https://github.com/verl-project/verl/issues/6123), [Issue #6130](https://github.com/verl-project/verl/issues/6130)）
- **[Roadmap] verl 26Q2 路线图**: 官方发布 26Q2 规划，核心方向包括 Megatron FSDP 启用、VLM 性能优化、低精度训练 (MXFP8/NVFP4) 等，获 14 个点赞。（[Issue #5836](https://github.com/verl-project/verl/issues/5836)）

## 4. 关键 PR 进展
底层架构重构与多模态/多硬件生态扩展齐头并进。

- **[Megatron] 引入 Megatron-FSDP 训练后端**: 新增 Megatron-FSDP 作为一个独立的训练后端选项，支持 SFT 和 RL（GRPO），为大规模分布式训练提供新方案。（[PR #5423](https://github.com/verl-project/verl/pull/5423)）
- **[Fully Async] 支持生成式/判别式奖励模型**: 解除了完全异步训练模式中硬编码的 `use_rm = False` 限制，允许部署独立的 GPU Reward Model (GenRM/DisRM)。（[PR #6044](https://github.com/verl-project/verl/pull/6044)）
- **[Rollout] 重构 Agent Loop 架构**: 将 `LLMServer Manager` 从 `AgentLoopManager` 中解耦，旨在使 verl 能够无缝接入如 NVIDIA NeMo-Gym 等其他外部 Agent 框架。（[PR #6129](https://github.com/verl-project/verl/pull/6129)）
- **[Hardware] 全栈接入 Intel XPU 硬件**: 实现了基于 Intel XPU (Arc Pro / Data Center GPU Max) 的 FSDP + vLLM 端到端 GRPO/PPO/SFT 训练支持。（[PR #6119](https://github.com/verl-project/verl/pull/6119)）
- **[Model] 支持 Qwen3-VL-30B-A3B 全异步 GRPO 训练**: 修复了导致准确率异常及训练报错的 2 个关键 Bug，并提交了 geo3k 数据集的训练脚本。（[PR #6131](https://github.com/verl-project/verl/pull/6131)）  
- **[Rollout] 修复 routed experts 维度不匹配**: 解决了 `ToolAgentLoop` 中 `response_ids` 截断但 `routed_experts` 未截断导致的下游张量赋值形状不匹配报错。（[PR #6089](https://github.com/verl-project/verl/pull/6089)）

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **快速跟进最前沿模型**：社区和官方正密集对齐 Qwen3.5/3.6 等超大参数及 MoE 模型，提供及时的训练脚本和缺陷修复。
2. **底层架构深度演进**：正从单一架构向支持 Megatron-FSDP、完全异步引擎等高级特性拓展，满足极大规模集群的工程需求。
3. **异构计算与多模态全栈覆盖**：从 Intel XPU 到 Ascend NPU 的硬件适配，再到 Vision/Audio 多模态数据处理链路的优化，verl 正在打破 RL 框架对单一硬件（NVIDIA GPU）和纯文本模态的重度依赖。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# Torchtune 强化学习生态日报 (2026-04-25)

## 1. 今日速览
过去 24 小时内，`torchtune` 仓库整体保持平稳，无代码合并或版本迭代。社区侧出现一个极具技术探讨价值的架构级提案：引入二阶优化器（SCAO）以突破显存受限场景下的 QLoRA 训练瓶颈。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[#2962 [Proposal] Native support for SCAO (2nd-Order Optimizer) for memory-bound QLoRA recipes](https://github.com/pytorch/torchtune/issues/2962)**
  - **作者**: whispering3
  - **摘要**: 提案建议在 `torchtune` 的原生配方（recipes）中引入 **SCAO (Sparse Curvature-Aware Adaptive Optimizer)** 作为 AdamW 的替代方案。该提案高度契合 `torchtune` “模块化、无 Hack、纯原生 PyTorch”的设计哲学。对于当前 RLHF/LLM 后训练生态，显存往往成为大 Batch 训练的硬性瓶颈，二阶优化器在参数高效微调（PEFT）特别是 QLoRA 场景下的收敛效率优化，具有重要的工程落地价值。
  - **状态**: OPEN | 👍: 0 | 评论: 0

## 4. 关键 PR 进展
过去 24 小时内无活跃的 Pull Requests 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在后 LLM 时代，强化学习（特别是 RLHF/DPO 等对齐技术）已成为大模型迭代的核心链路，而微调框架的底层效率直接决定了 RL 跑通的工程成本。
`torchtune` 始终坚持“**纯 PyTorch 原生（PyTorch Native）**”和“**模块化配方**”的设计，摒弃过度封装。以 Issue #2962 为例，社区正致力于将前沿的优化器算法（如二阶优化、曲率感知）无缝融入 QLoRA 等显存敏感的训练链路中。对于 RL 工程师而言，这种底层优化不仅提升了单步策略更新的计算效率，也为在有限算力下探索更复杂的 RL 算法（如 PPO 的变体）提供了高扩展性、易 Hack 的基座。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-04-25)

## 1. 今日速览
过去 24 小时，[allenai/open-instruct](https://github.com/allenai/open-instruct) 仓库无明显异常，呈现**低 Issue、高代码合并**的特点。无新版本发布，但合并了多项关键质量保证（QA）与工程优化 PR。核心开发者 finbarrtimbers 修复了 SFT 数据流处理的性能瓶颈（提速近 10 倍），并引入了前沿的强化学习损失函数；同时开源社区贡献者 BrownianNotion 修复了长期存在的包依赖和版本管理问题。

## 2. 版本发布
**无**。
注：随着今日 [#1636](https://github.com/allenai/open-instruct/pull/1636) 动态版本控制机制的引入，预计该项目的下一阶段正式版发布将更加规范。

## 3. 重点 Issues
**无**。
过去 24 小时内无新增或更新的 Issue。当前项目的迭代重心完全聚焦于底层重构、训练对齐以及前沿 RL 算法的工程化实现。

## 4. 关键 PR 进展
今日 PR 动态主要围绕 **RL 算法创新、SFT 性能调优** 以及 **包工程化修复** 三个维度展开：

- **算法创新：引入 Delightful PG 与 Kondo Gate**
  - [#1628 [OPEN] Add Delightful Policy Gradient loss and Kondo Gate to GRPO](https://github.com/allenai/open-instruct/pull/1628) (作者: finbarrtimbers)：在 GRPO 算法中集成了基于 Osband 2026 论文的新损失项。该方法通过 `sigmoid(advantage * (-new_logprobs.detach()))` 对 per-token 的策略梯度（PG）进行门控，利用优势函数和动作惊异度的乘积作为门控信号，为 RLHF 对齐提供了新的优化视角。

- **性能突破：SFT Tokenization 提速近 10 倍**
  - [#1631 [CLOSED] Now, SFT tokenization streams directly to disk, making it ~9.4x faster.](https://github.com/allenai/open-instruct/pull/1631) (作者: finbarrtimbers)：已合并。重构了 SFT 阶段的 tokenization 机制，将原本在内存中累积的数组改为直接流式写入磁盘。此举消除了显式检查点的开销，使 Collect loop 处理速度激增至约 158.3 samples/s。

- **工程与依赖：包导入与版本控制修复**
  - [#1637 [CLOSED] Reapply packaging fix from #1634 reverted by #1622](https://github.com/allenai/open-instruct/pull/1637) (作者: finbarrtimbers) 与 [#1634 [CLOSED] Fix import error when installing open-instruct as a dependency](https://github.com/allenai/open-instruct/pull/1634) (作者: BrownianNotion)：修复了将 `open-instruct` 作为第三方依赖安装时的 `module not found` 错误。清除了错误的 `py-modules` 声明并配置了正确的 `setuptools.packages.find`。
  - [#1636 [OPEN] Add dynamic versioning based on git tags](https://github.com/allenai/open-instruct/pull/1636) (作者: BrownianNotion)：废弃了硬编码的 `0.1.0` 版本号，改为基于 git tag 和 commit 数自动生成动态版本（如 `0.2.1.dev106+...`），大幅提升了下游引用的确定性。

- **代码清理与训练对齐**
  - [#1635 [CLOSED] Drop unused data_types import and inline batch.to(device) in GRPOTrainModule.](https://github.com/allenai/open-instruct/pull/1635) (作者: finbarrtimbers)：已合并。精简了 GRPO 训练模块的冗余代码。
  - [#1620 [OPEN] Match reference SFT run: olmo_core_finetune parity with pure olmo-core](https://github.com/allenai/open-instruct/pull/1620) (作者: finbarrtimbers)：持续推进中，旨在确保 `open_instruct` 的 SFT 训练循环与纯 `olmo-core` 框架实现底层数学计算的严格一致（step-by-step parity）。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿 RL 算法的快速工程化落地**：项目并没有停留在标准的 PPO/DPO 框架内，而是迅速跟进并集成了 2026 年最新的强化学习理论研究（如 PR #1628 中的 Delightful Policy Gradient），为研究社区提供了测试最新 RLHF 对齐策略的即用型工具。
2. **追求极致的底层性能**：在 LLM 后训练时代，数据吞吐量是核心竞争力。今日合并的 PR #1631 证明团队正在死磕 I/O 与内存瓶颈，通过流式处理将 SFT 数据准备阶段提速了一个数量级，这对于海量 Token 级别的 RL 训练至关重要。
3. **严谨的复现性与对齐标准**：通过 PR #1620 可以看出，项目组对“黑盒训练”保持警惕，致力于确保封装后的高阶 API 与底层核心计算引擎（olmo-core）保持严格的数值 parity，这对于追求严谨学术复现的 RL 研究者而言是不可或缺的基石。

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

以下是为您生成的 2026-04-25 PettingZoo RL 日报摘要：

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体处于平稳迭代期。未发生新的代码提交、版本发布或新增社区 Issue，仅有 1 项关键性的迭代 PR 正在待合并状态，项目当前的主要精力集中于底层依赖更新与运行时兼容性维护。

### 2. 版本发布
- **最新 Releases**：无
- 当前距离下一个维护版本 `v1.26.0` 的发布已进入 PR 准备阶段，但截至今日尚未正式打包发布。([Releases 链接](https://github.com/Farama-Foundation/PettingZoo/releases))

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issue。
- 生态趋近成熟，API 相对稳定，当前社区未报告重大的阻塞性 Bug 或架构缺陷。([Issues 链接](https://github.com/Farama-Foundation/PettingZoo/issues))

### 4. 关键 PR 进展
- **PR #1327** [OPEN]: **Changes for release v1.26.0**
  - **作者**: mwydmuch
  - **动态**: 该 PR 创建于 4 月 18 日，最近一次更新在 4 月 23 日，目前正等待最终合并。
  - **核心内容**: 
    1. **版本升级**：将项目版本号提升至 `1.26.0`。
    2. **Python 生态适配**：在 `pyproject.toml` 中正式放开了对 Python 3.13 和 3.14 的支持限制。
    3. **引擎替换**：将不再维护的 `pygame` 依赖项迁移至社区积极维护的开源分支 `pygame-ce` (Community Edition)。
  - **链接**: [Farama-Foundation/PettingZoo PR #1327](https://github.com/Farama-Foundation/PettingZoo/pull/1327)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 Farama-Foundation 旗下与 Gymnasium 齐名的核心项目，PettingZoo 保持了多智能体强化学习（MARL）环境领域的标准化标杆地位。通过 PR #1327 的技术选型可以看出，该项目正在积极进行**生命周期管理（EOL）与前沿适配**：
1. **拥抱最新 Python 特性**：对 Python 3.13/3.14 的快速响应，意味着研究者可以利用最新的 CPython 性能优化（如更优的 JIT 支持或底层加速）来跑多智能体训练。
2. **保证渲染依赖健壮性**：从 `pygame` 迁移到 `pygame-ce`，解决了底层渲染环境维护停滞的风险，确保具有图形界面的多智能体环境（如经典游戏环境）在现代系统上依然能稳定可视化和运行。
对于任何基于标准 API 构建 MARL 算法或进行基准测试的 RL 团队而言，PettingZoo 的持续维护是不可或缺的基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 生态追踪 (2026-04-25)

## 1. 今日速览
过去 24 小时内，Stable Baselines3 (SB3) 仓库整体处于低活跃的稳定维护期。未产生新的代码合并请求（PR）与版本发布，但有 1 条历史重点 Feature Request Issue 更新了状态。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
- **[#1564] [Feature Request] torch compile / integrating intel extension for pytorch**
  - **作者**: george-adams1
  - **状态**: `CLOSED` (最后更新: 2026-04-24)
  - **标签**: `documentation`, `enhancement`, `good first issue`, `help wanted`
  - **摘要**: 该 Issue 请求将 Intel Extension for PyTorch (IPEX) 集成到 SB3 中。其核心诉求是通过 IPEX 库优化 SB3 在 Intel 处理器上的计算效率，进一步提升底层张量运算和训练速度。该议题同时探讨了与 `torch.compile` 的结合点。
  - **分析**: 这是一个开放了近三年的社区诉求，目前被正式关闭，且带有 `help wanted` 和 `good first issue` 标签，可能意味着官方目前暂不打算在主干代码中原生支持 IPEX，而是转向提供相关的文档指南，鼓励社区通过自定义回调或外部扩展来实现硬件级加速。
  - **链接**: [DLR-RM/stable-baselines3 Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)

## 4. 关键 PR 进展
过去 24 小时无活跃的 Pull Requests 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 SB3 在过去一天内无代码级更新，但它在当前强化学习开源生态中依然占据不可替代的基座地位：
1. **API 规范与学术基准**: SB3 提供了最简洁、严格且标准化的 RL 算法 API（如 PPO, SAC, TD3）。它依然是学术界复现基线、评估新环境（如 Gymnasium 生态）的首选库。
2. **底层优化的演进**: 类似 Issue #1564 对 `torch.compile` 和特定硬件后端（如 Intel IPEX）的探讨，反映了 SB3 社区正在积极顺应 PyTorch 2.x 的编译流生态和异构硬件加速趋势。
3. **极高的可扩展性**: 虽然 SB3 核心库追求极简与稳定，但其衍生生态（如用于离线 RL 的 `d3rlpy` 集成、用于分布式训练的 `sb3-contrib`）仍在活跃迭代。对于工程落地而言，SB3 清晰的代码结构和文档使其依然是构建复杂 RL 应用的最佳切入点。

</details>