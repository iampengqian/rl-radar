# RL 开源生态日报 2026-05-20

> 生成时间: 2026-05-19 22:23 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现明显的“头部发力、长尾沉寂”两极分化态势。以大模型对齐为核心的 Post-training 基础设施（verl, TRL, AReaL, slime 等）正在全速狂奔，将主战场从基础算法迭代转移到了**多模态、Agent 交互与极致的分布式系统级优化**上；而传统的经典 RL 基础库（如 CleanRL, Gymnasium, Tianshou 等）则处于稳定的维护停滞期，过去 24 小时内均无实质性代码活动。生态的重心已彻底向 LLM/XLGM 范式倾斜。

## 各项目活跃度对比
以下为 2026-05-20 各主要 RL 项目的量化活跃指标：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 17 | 26 | 0 | 生态核心，底层性能与多模态双轮高频迭代 |
| **TRL** | 7 | 13 | 0 | 攻坚系统级并发（GIL）与 VLM 数据对齐痛点 |
| **AReaL** | 0 | 10 | 0 | 极致的分布式通信与显存算子“硬核”系统优化 |
| **slime** | 2 | 6 | 0 | 从传统 RLHF 迅速向代码 Agent 与 SFT 监控拓展 |
| **ROCK** | 3 | 6 | 0 | 深入 K8s 调度与大规模集群 SRE 运维建设 |
| **OpenRLHF** | 0 | 0 | 0 | 暂无动态 |
| **Open Instruct** | 0 | 2 | 0 | 聚焦 GRPO 底层 Token 级别的散度与裁剪控制 |
| **ROLL** | 0 | 2 | 0 | 完善多模态推理数据链路与文档标准化 |
| **Stable Baselines3**| 1 | 1 | 0 | 维护底层策略分布严谨性（Beta 分布支持） |
| **CleanRL 等 5 项目**| 0 | 0 | 0 | 经典/传统 RL 基础库，当日无代码及社区活动 |

## 共同关注的研究与工程方向

**1. 研究侧信号：全面拥抱多模态与 Agent 交互闭环**
多模态能力与工具/环境交互成为各框架的必争之地。TRL 和 ROLL 均在紧急修复视觉语言模型（VLM）在 RL 训练中的特征对齐或数据丢失 Bug；slime 引入了基于 E2B 沙盒的代码智能体极简 RL 示例；verl 则在深度融合 VeOmni 并拓展多轮工具调用。RL 的反馈来源正从单一的“奖励模型”向“多模态环境反馈”与“沙盒执行反馈”快速演进。

**2. 研究侧信号：精细化与定制化的对齐算法内核**
社区不再满足于黑盒的 PPO/GRPO 损失计算，开始深入拆解底层 Token 级别梯度与散度控制。Open Instruct 探索了基于全变散度的 Rho 过滤机制，SB3 为有界动作空间引入严谨的 Beta 分布，而 TRL 和 AReaL 则在修复边界数据（如无 EOS 序列、Mask 污染）导致的 Advantage 计算偏移。

**3. 工程/基础设施侧信号：死磕显存墙、通信墙与并发瓶颈**
大集群分布式训练的物理极限成为工程优化的绝对核心。AReaL 引入同节点 CUDA IPC 零拷贝通信；verl 落地 NCCL Communicator 挂起/恢复机制以释放闲置显存；TRL 则通过将异步生成解耦至子进程彻底打破 Python GIL 的性能天花板。

## 差异化定位分析

*   **verl 与 AReaL（硬核系统底座）**：定位极其相似，均是面向超大规模集群的“System for RLHF”。但 verl 的战线拉得更宽，在异构硬件和全栈多模态上投入巨大；而 AReaL 则更加聚焦于底层物理通信机制的极致重构（如 Ray RDT、CUDA IPC、算子融合）。
*   **TRL（开源生态粘合剂）**：深度绑定 Hugging Face 全家桶。其核心发力点在于解决 PyTorch、vLLM、DeepSpeed 等第三方生态库在组合使用时的兼容性冲突（如显存分配器打架、DeepSpeed Zero3 适配）和并发架构重构。
*   **slime 与 Open Instruct（前沿算法与流程探索者）**：两者规模适中但动作敏捷。slime 侧重于打通 SFT 到 Agent RL 的全栈观测性；Open Instruct 则更像是一个聚焦 GRPO 及类 PPO 算法底层 Loss 机制优化的前沿试验田。
*   **ROCK（云原生与运维基建）**：具有鲜明的“PaaS”色彩，主要解决 RL 训练任务在 K8s 环境下的 GPU 调度、沙箱生命周期管理及突发 I/O 存储灾难的 SRE 应对问题。

## 社区热度与成熟度
综合 Issue 与 PR 的数量和质量来看，**verl 和 TRL 占据了当前开源 LLM RL 生态的绝对流量中心**，面临来自社区最复杂多样的模型适配与并发压力，项目处于快速迭代的爆发期。AReaL 社区发声较少但内部工程密度极高，呈现高度成熟的生产级内敛特征。**ROCK 和 ROLL 等项目则聚焦特定企业级场景**（如阿里内部的规模化调度），稳步完善基础设施。而 Stable Baselines3 等传统 RL 项目处于极其稳定的成熟维护期，更新频率低但严谨度极高。

## 值得关注的趋势信号

1.  **Colocate（共置）与零拷贝成为显存破局关键**：随着模型体量剧增，跨进程/跨设备的 NCCL 通信开销已不可忍受。AReaL 的 CUDA IPC 和 verl 的 NCCL Suspend/Resume 标志着 RL 训练正在向同一 GPU 设备上“训练与推理无缝切换、零拷贝权重共享”的极致内核态演进。
2.  **从静态对齐走向动态闭环 Agent RL**：从 slime 的沙盒执行闭环、verl 的多轮 Agent 循环修复可以看出，RLHF 正在泛化为“Agent RL”。未来的 RL 框架必须具备处理多步环境状态、维护长生命周期沙箱、解析复杂工具调用的能力。
3.  **AI 辅助重构核心基建**：SB3 核心维护者在重构底层 Beta 分布的 PR 中明确提及使用了 LLM（Zed + Claude）辅助编写核心代码。这释放了一个强烈信号：AI 辅助编程正在深度渗透并加速底层系统级基础设施的开发与重构。
4.  **VLM Post-training 工程成熟度急需补齐**：包括 TRL 的 padding 对齐灾难、ROLL 的多模态数据丢包、verl 的准确率异常，均表明多模态大模型的 RL 训练管线在工程健壮性上仍存在大量深水区 Bug，这将是下半年各大框架重点修复的技术高地。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-20）：

### 1. 今日速览
过去 24 小时内，ROLL 项目整体节奏平稳，无新增 Issue 和版本发布，但代码库有 2 个 PR 更新。更新重心集中在**多模态大模型（VLM）推理的数据完整性修复**以及**官方文档的标准化校对**。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **无新增或更新 Issue**（0 条）。

### 4. 关键 PR 进展

**[OPEN] 修复多模态生成时的数据丢失问题**
- **PR**: [alibaba/ROLL #446](https://github.com/alibaba/ROLL/pull/446)
- **作者**: sanmuf
- **摘要**: 修复了 `generate_scheduler.py` 中 `generate_opt_level=0` 路径下的 VLM（视觉语言模型）生成 Bug。在先前的逻辑中，`request_data.pop(...)` 操作仅保留了 `input_ids`、`attention_mask` 和 `position_ids` 等纯张量字段，导致 `multi_modal_data` 在构建 `gen_batch` 时被丢弃。此 PR 确保了多模态数据的正确传递，对多模态强化学习（RLHF/VLFM）任务至关重要。

**[CLOSED] 修复 README 拼写错误及链接失效**
- **PR**: [alibaba/ROLL #445](https://github.com/alibaba/ROLL/pull/445)
- **作者**: Galleons2029
- **摘要**: 社区贡献的文档校对 PR，已合入。修复了 README.md 中的两处拼写错误（`DeepSeed` -> `DeepSpeed`，`StartPO` -> `StarPO`），并对失效的 User Guides 链接进行了 URL 编码修正（`User Guides` -> `User%20Guides`）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **多模态对齐底座能力的持续迭代**：从 PR #446 可以明确看出，ROLL 的演进方向已经超越了传统的纯文本 RLHF。针对 VLM（视觉语言模型）多模态数据挂载的底层修复，表明该项目正在为更复杂的 Multimodal RL 场景（如多模态 Agent 训练）提供工程支撑。
2. **对齐算法的广泛兼容性**：文档中修正的 `StarPO`（State-aware Trajectory-wise Reward Policy Optimization）拼写，印证了 ROLL 在算法层不仅支持基础的 PPO，也集成了当前前沿的序列级/轨迹级偏好对齐算法，紧跟学术前沿。
3. **系统级性能优化探索**：PR 中暴露出的 `generate_opt_level` 参数设计，反映出项目在推理引擎侧进行了细粒度的优化分级，这对于解决 RL 训练中常见的生成瓶颈极具工程价值，适合作为大规模 RL 训练系统的基建组件。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (alibaba/ROCK) 项目 2026-05-20 强化学习 (RL) 生态日报摘要：

### 1. 今日速览
过去 24 小时内，ROCK 项目继续保持高频的基础设施建设与稳定性优化。社区共更新了 **3 个 Issues** 和 **6 个 Pull Requests**，主要聚焦于 K8s 环境下的 GPU 调度支持、SRE 运维紧急清理接口以及沙箱生命周期的完善。今日无新版本发布。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
当前 Issue 核心诉求集中在“企业级大规模容器调度”与“底层状态控制”上：
- **K8s 原生 GPU 调度支持**：[#980](https://github.com/alibaba/ROCK/issues/980) 提出在 K8s 沙箱路径中引入一等公民的 GPU 支持，希望通过 Jinja2 模板和可扩展的加速器类型来完善 `DockerDeploymentConfig`。
- **Docker 工具类 Bug 修复**：[#964](https://github.com/alibaba/ROCK/issues/964) 指出 `DockerUtil.remove_image` 方法在 `@classmethod` 装饰器下缺少 `cls` 参数的隐性 Bug，并提议增加保护基础镜像不被误删的机制。
- **全生命周期状态查询**：[#950](https://github.com/alibaba/ROCK/issues/950) 提议在 SDK/API 层面让 `get_status` 接口支持查询包含所有生命周期的状态，以增强 RL 训练环境的管控粒度。

### 4. 关键 PR 进展
PR 动态显示出项目正在系统性解决大规模集群下的运维痛点与资源调度问题：

- **SRE 紧急运维接口 (OPEN)**：[#973](https://github.com/alibaba/ROCK/pull/973) 新增了 `disk_emergency_cleanup` API。针对磁盘暴涨的紧急情况，允许 SRE 绕过 24 小时的常规调度，通过白名单和限流机制安全地触发即时清理任务。
- **K8s GPU 调度与渲染重构 (CLOSED)**：[#981](https://github.com/alibaba/ROCK/pull/981) 顺利合入，呼应了 Issue #980。引入了 `num_gpus` 字段，并使用 Jinja2 替换了原有的 K8s manifest 加载逻辑，大幅增强了复杂字典结构的渲染能力。
- **沙箱状态查询 API 增强 (CLOSED)**：[#951](https://github.com/alibaba/ROCK/pull/951) 顺利合入，在 `get_status` API 中落实了 `include_all_states` 参数，满足了 RL 训练过程对环境状态的高时效性监控需求。
- **容器与缓存清理任务簇 (CLOSED)**：
  - [#969](https://github.com/alibaba/ROCK/pull/969) 引入了 `BuildCacheCleanupTask`，针对 Python 依赖构建工具（uv/pip）进行缓存定时清理，并优化了 Shell 脚本的容错逻辑。
  - [#970](https://github.com/alibaba/ROCK/pull/970) 合并了 dangling 镜像与 BuildKit 的清理逻辑到 `ImageCleanupTask`，统一了镜像垃圾回收机制。
- **底层 Docker 调用修复 (CLOSED)**：[#965](https://github.com/alibaba/ROCK/pull/965) 修复了 `remove_image` 的 `cls` 丢失问题，并加入了回归测试，防止静默错误导致磁盘空间泄漏。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习生态中，算法的创新高度依赖于底层基础设施的稳定性与调度灵活性。从今日的提交记录可以看出，ROCK 不仅仅是一个训练框架，它正在深入解决**大规模分布式训练的 Ops 痛点**：
1. **解决 GPU 碎片化与调度门槛**：通过原生 K8s GPU 支持和模板渲染重构（PR #981），ROCK 降低了在云原生架构下启动分布式 RL 环境的门槛。
2. **极致的集群稳定性保障**：无论是针对突发磁盘灾难的 SRE 紧急 API（PR #973），还是精细化的 pip/docker 缓存回收机制，都表明该项目在应对 RL 海量试错（Trial-and-Error）带来的 I/O 与存储压力方面有着成熟的工程解法。
对于需要长期运行、大规模并发环境的 RL 研究团队和企业而言，ROCK 提供了极其硬核且必要的底层支撑。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM) 项目 RL 日报摘要（2026-05-20）：

### 1. 今日速览
过去 24 小时内，slime 仓库保持较高的开发活跃度，无新版本发布，但新增或更新了 **6 个 Pull Requests** 和 **2 个 Issues**。核心动态集中在**智能体 RL 编排、训练状态监控增强、底层调试工具优化及 VLM 数据处理修复**。社区正在积极拓展框架在代码智能体和 SFT 阶段的工程边界。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[VLM 模型支持探讨]** [#1863 [OPEN] [Question] qwen3-vl转化](https://github.com/THUDM/slime/issues/1863) 
  社区开发者对多模态大模型（Qwen3-VL）的适配提出需求。目前 `slime/scripts/models` 缺少 VLM 相关的配置参数，用户在探索如何将 HF 格式的 VLM 转化为 Megatron 格式进行训练。
- **[R3 路由重放报错]** [#1909 [CLOSED] [Bug] ValueError: rollout_routed_experts is required...](https://github.com/THUDM/slime/issues/1909) 
  开发者在启用 R3（Routing Replay）并配置 `sglang` 返回路由专家时触发 `ValueError`。该 Issue 已被关闭，相关逻辑大概率已通过底层修复或 PR 更新得到解决。

### 4. 关键 PR 进展
- **[Agent RL 极简示例] [#1923 [OPEN] add coding_agent_rl: agent-in-sandbox RL minimal demo](https://github.com/THUDM/slime/pull/1923)**
  由 jingshenghang 提交。引入了基于“代码智能体 + 沙盒执行 + 测试奖励”的端到端闭环 RL 演示。该示例集成了 E2B 沙盒与 Claude Code CLI，对探索自动化代码修Bug和 SWE 场景的 RL 训练极具参考价值。
- **[SFT 监控与防过拟合] [#1925 [OPEN] feat: add SFT entropy logging and validation loss monitoring](https://github.com/THUDM/slime/pull/1925)**
  由 none0663 提交。新增两项防止模型在 SFT 阶段过拟合的核心监控：1) 通过 `--log-sft-entropy` 记录 token 级别的训练熵；2) 通过 `--val-data` 和 `--val-interval` 支持全 DP 并行的验证集 Loss 计算，并接入 TensorBoard/WandB。
- **[Debug 数据存储防覆盖] [#1922 [OPEN] fix(debug): auto-append rollout_id/rank in save_debug_train_data path template](https://github.com/THUDM/slime/pull/1922)**
  修复了多 GPU/Megatron 分布式训练下，`--save-debug-train-data` 因未指定 `{rollout_id}` 或 `{rank}` 导致多进程文件相互覆盖的问题。现版本会自动补全路径占位符并抛出警告。
- **[基础设施与流式输出] [#1924 [CLOSED] Reduce host memory with upgraded tms](https://github.com/THUDM/slime/pull/1924) | [#1921 [CLOSED] Add example for streaming output](https://github.com/THUDM/slime/pull/1921)**
  核心维护者 zhuzilin 优化了底层 TMS 模块以降低宿主机内存开销，并增加流式输出的官方示例。
- **[VLM 数据处理回退] [#1232 [CLOSED] Revert data processing of VLM](https://github.com/THUDM/slime/pull/1232)**
  关闭了早期关于 VLM 数据处理逻辑的回退 PR，并在 `generate` 环节增加了类型检查，以确保自定义生成逻辑的稳定性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **从基础 RLHF 向 Agent RL 拓展**：通过引入 E2B 沙盒环境与代码执行反馈的闭环（PR #1923），slime 正在从传统的“奖励模型驱动”迈向“环境交互驱动”的 Agent RL 前沿，这在当前 LLM 操作系统化趋势中处于技术共振点。
2. **深度的系统级优化**：项目针对大模型训练的痛点进行了极其细致的工程打磨，例如解决 MoE 架构下的路由重放 bug（Issue #1909），以及修复分布式环境下的 Debug 数据落盘冲突（PR #1922）。
3. **打通 SFT 到 RL 的全栈观测性**：PR #1925 悄然补齐了 SFT 阶段的 Entropy 和 Validation Loss 监控。在 RL 生态中，能够提供从基座模型 SFT 到对齐训练全生命周期、且对 Megatron 深度优化的开源框架极其稀缺，slime 展现了极强的工业级落地价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-05-20）：

### 1. 今日速览
过去 24 小时内，AReaL 项目无新版本发布，Issues 看板保持静默（0 条更新）。项目重心完全聚焦于底层训练基础设施的迭代与算法鲁棒性的修复，共有 **10 个 Pull Requests** 产生了更新动态。核心亮点在于：**异构硬件显存通信优化**（CUDA IPC、Ray RDT）、**显存与通信高效计算**（融合算子）以及 **异步 RL 训练中数据流归一化的边界修复**。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **最新 Issues**: 无

### 4. 关键 PR 进展
当前活跃 PR 集中在系统底层通信机制、大模型训练效率提升及 RL 算法的数据一致性修复上：

**🔧 RL 算法与数据流修复**
- **[fix(ppo)](https://github.com/areal-project/AReaL/pull/1351) 排除无 EOS 序列的奖励归一化干扰**：修复了当 `mask_no_eos_with_zero=True` 时，异常长文本的原始奖励在应用 mask 之前参与归一化，导致 PPO `advantages` 计算偏移的问题。
- **[fix(utils)](https://github.com/areal-project/AReaL/pull/1347) 修复归一化无效值污染问题**：解决了 `reward_norm` 和 `adv_norm` 计算中，`NaN * 0` 导致无效值污染全局有效奖励/优势值的关键 Bug。
- **[fix(rollout)](https://github.com/areal-project/AReaL/pull/1350) 优化 Rollout 版本转储逻辑**：修复了因 input token 占位符（`-1`）导致 `head_version` 始终为 `-1` 的问题，现在通过 `loss_mask==1` 进行严格过滤。
- **[fix(infra)](https://github.com/areal-project/AReaL/pull/1345) 修复异步 RL 恢复后的陈旧容量膨胀**：解决了异步 RL 训练从 checkpoint 恢复时，`StalenessManager` 计数器与模型版本不匹配导致容量公式异常的痛点。

**🚀 底层通信与显存架构优化**
- **[feat(awex)](https://github.com/areal-project/AReaL/pull/1310) 同节点 CUDA IPC 权重传输**：引入 Megatron 训练与 SGLang 推理共存同 GPU 的模式，利用 CUDA IPC（同设备零拷贝）替代跨设备的 NCCL P2P，极大降低权重更新通信开销。
- **[feat(experimental)](https://github.com/areal-project/AReaL/pull/1305) 集成 Ray RDT 同步后端**：实现了基于 Ray Direct Transport 的权重同步机制，涉及 IW Scheduler Bridge 与 FSDP 适配器。
- **[feat: LoRA)](https://github.com/areal-project/AReaL/pull/1233) 磁盘级 LoRA 增量权重同步**：实现了 FSDP 和 SGLang 之间基于磁盘的 LoRA adapter 同步，修复了之前全量保存 HuggingFace 模型导致的 I/O 浪费。

**⚡ 计算算子与评估工具**
- **[feat: Linear Cross Entropy)](https://github.com/areal-project/AReaL/pull/1322) 融合交叉熵算子**：针对 Megatron 引入 Triton 编写的融合 LCE 前向/反向传播，避免了实例化完整的 `[tokens, vocab]` logits 矩阵，大幅降低显存峰值。
- **[feat(examples)](https://github.com/areal-project/AReaL/pull/1175) 新增推理性能 Benchmark**：引入基于 OpenClaw agent 与 TAU²-bench 的端到端推理服务性能测试脚本。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 当前的发展趋势展现出极其纯粹的 **“System for RLHF”** 基因。在开源 LLM 后训练生态中，许多项目仍停留在算法层面，而 AReaL 正在硬刚大规模分布式训练的底层物理瓶颈。
从今日的 PR 动态可以看出，其在**同卡/异卡部署（Colocate）、零拷贝通信（CUDA IPC）、显存优化** 方面的工程深度极高。特别是针对异步强化学习中 `Staleness`（梯度陈旧度）和极端边界数据（如无 EOS 序列、Mask 下的 NaN 污染）的修复，证明该项目在实际跑通、跑稳大规模 Post-training Pipeline 上具有成熟的生产级考量。对于关注 RL 底层系统架构、算子优化及分布式通信的开发者而言，AReaL 是当前最值得追踪的开源阵地之一。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习开源生态日报
**日期**: 2026-05-20 | **分析师**: RL 生态项目分析师

---

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度。无新版本发布，但社区提交了 **7 个 Issues**（4 open, 3 closed）和 **13 个 PRs**（8 open, 5 closed）。核心焦点集中在 **GRPOTrainer 在多模态（VLM）场景下的严重对齐 Bug**、**vLLM 异步架构的性能优化**，以及 CI/CD 的基础设施建设。

---

## 2. 版本发布
无新版本发布（Latest Release 暂无）。

---

## 3. 重点 Issues

### 🚨 核心缺陷与数据损坏
- **[OPEN] GRPOTrainer VLM 训练中的静默数据损坏**: 
  在视觉语言模型训练中，`prompt_ids` 和 `mm_token_type_ids` 存在 padding 方向不一致的严重同步 Bug，导致特征对齐错误。
  [Issue #5785](https://github.com/huggingface/trl/issues/5785)

### ⚙️ 异步与引擎兼容性
- **[OPEN] DeepSpeed 兼容性冲突 (GRO + use_liger_loss + Zero3)**:
  开发者报告在开启 `use_liger_loss=true` 配合 DeepSpeed Zero3 时存在 size mismatch 错误，目前仅 Zero2 可用。
  [Issue #3368](https://github.com/huggingface/trl/issues/3368)
- **[CLOSED] 请求支持 `final_logits_softcapping`**:
  针对 Gemma 2 等使用 logits softcapping 机制模型的 AsyncGRPOTrainer 适配需求，该 Issue 已随相关 PR 关闭。
  [Issue #5692](https://github.com/huggingface/trl/issues/5692)

### 📉 内存与模型支持
- **[OPEN] OOM: 20G 显存跑 Qwen3-0.6B (GRPO)**:
  即使仅使用 0.6B 小模型，在 max-prompt/completions=256 设定下依然容易遭遇 OOM，社区探讨引入 FlashAttention 缓解。
  [Issue #3678](https://github.com/huggingface/trl/issues/3678)

---

## 4. 关键 PR 进展

### 🛠️ 关键 Bug 修复
- **修复 VLM Padding 错位问题**:
  重构 `mm_token_type_ids` 使其与左填充的 `prompt_ids` 对齐，直接修复 #5785 导致的 VLM 训练数据损坏问题。
  [PR #5789](https://github.com/huggingface/trl/pull/5789) (Open) | [PR #5788](https://github.com/huggingface/trl/pull/5788) (Closed)
- **修复 Qwen VL CI 失败**:
  修正微小模型脚本中 `num_attention_heads` 的错误传参（应为 `num_heads`），解决 VLM 训练参数未更新的报错。
  [PR #5792](https://github.com/huggingface/trl/pull/5792) (Open)

### 🚀 架构优化与特性增强
- **彻底解除 GIL 限制：异步生成移至独立进程**:
  将 AsyncRolloutWorker 从多线程改为 Spawn 出子进程运行。此举消除了 PyTorch Autograd 引擎与 vLLM 生成/评分函数之间的 GIL（全局解释器锁）竞争，预计将大幅提升多步 Agent 训练吞吐量。
  [PR #5749](https://github.com/huggingface/trl/pull/5749) (Open)
- **完善评估体系：GRPOTrainer 支持自定义指标**:
  提交了 3 个相关 PR（重置迭代），为 GRPOTrainer 添加了 `compute_metrics` 接口，允许在验证集上计算除 reward 外的下游任务指标。
  [PR #5790](https://github.com/huggingface/trl/pull/5790) (Open)
- **支持新 logits 约束机制**:
  补丁了 chunked 计算，使 AsyncGRPOTrainer 支持 Gemma 2 的 `final_logits_softcapping`。
  [PR #5691](https://github.com/huggingface/trl/pull/5691) (Closed)

### 📝 生态与文档
- **PyTorch 显存分配器调优文档**:
  增加了 `PYTORCH_CUDA_ALLOC_CONF` 和 vLLM `CuMemAllocator` 冲突规避的官方文档指南。
  [PR #5793](https://github.com/huggingface/trl/pull/5793) (Closed)
- **引入新的解析架构 (WIP)**:
  核心开发者正在重构解析层，以适配 `transformers` 上游的新特性。
  [PR #5791](https://github.com/huggingface/trl/pull/5791) (Open)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **攻坚 LLM+RL 的工程痛点**：
   项目重心已从基础算法实现转向**复杂场景下的系统级优化**。例如将异步生成解耦至子进程（[PR #5749](https://github.com/huggingface/trl/pull/5749)）以突破 Python GIL 瓶颈，解决多模态对齐的静默数据损坏（[Issue #5785](https://github.com/huggingface/trl/issues/5785)），这些正是目前业界落地 RLHF/GRPO 的真实痛点。
2. **紧跟底层训练框架演进**：
   TRL 保持着与 DeepSpeed、vLLM、PyTorch 极其紧密的跟进。处理 `liger_loss` 与 Zero3 的兼容性（[Issue #3368](https://github.com/huggingface/trl/issues/3368)）、更新显存分配逻辑（[PR #5793](https://github.com/huggingface/trl/pull/5793)），确保了开发者在追求极致显存优化和吞吐量时，TRL 依然能够作为稳定可靠的基础设施。
3. **向多模态与 Agentic RL 强力拓展**：
   目前的代码迭代大量聚焦于 VLMs（视觉语言模型）的 RL 训练适配和多步 Agent 训练场景（[Issue #4543](https://github.com/huggingface/trl/issues/4543)）。通过解决多模态特征对齐、引入自定义评估指标（[PR #5790](https://github.com/huggingface/trl/pull/5790)），TRL 正在成为多模态推理能力强化和复杂智能体构建的底层标准工具。

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

# verl RL 日报摘要 (2026-05-20)

## 1. 今日速览
过去 24 小时内，verl 生态保持高度活跃，共处理 **17 条 Issues** 和 **26 条 Pull Requests**。项目当前处于无新版本发布的主干开发阶段，核心焦点集中在**底层性能优化**（如 NCCL 通信挂起/恢复、显存管理）、**异构硬件支持**（Ascend NPU、Intel XPU）以及**多模态/多轮智能体训练流程**的完善与修复。

## 2. 版本发布
无新版本发布（最新 Releases 为空）。

## 3. 重点 Issues
社区当前关注点涵盖新模型适配、核心训练 Bug 以及架构级 RFC：

*   **[Bug] Qwen3VL-8B 训练准确率异常与熵飙升：** 开发者报告使用主干重构代码训练 Qwen3VL-8B 时出现准确率异常，且训练过程中熵持续异常上升，需引起注意。
    [verl-project/verl Issue #6382](https://github.com/verl-project/verl/issues/6382)
*   **[Bug] Qwen3-30B-A3B 显存卸载开销过大：** 在 1x DGXH100 设备上运行 Qwen3-30B-A3B 时，观察到显著的宿主机卸载开销，影响训练效率。
    [verl-project/verl Issue #6367](https://github.com/verl-project/verl/issues/6367)
*   **[Bug] 多轮 Agent RL 训练中 Mini-batch 引擎前向/反向崩溃：** 在 `main_ppo_sync` 场景中，若 `ppo_mini_batch` 内所有样本具有相同的 prompt token 长度（如 agentic-RL），会导致 `no_padding_2_padding` 阶段出现 `KeyError` 崩溃。
    [verl-project/verl Issue #6407](https://github.com/verl-project/verl/issues/6407)
*   **[RFC] 支持 NCCL Suspend/Resume：** 提议在 verl Colocated 模式下引入 NCCL 通信器挂起/恢复机制，以在 rollout 阶段释放闲置 NCCL 通信占用的 GPU 显存，解决 OOM 痛点。
    [verl-project/verl Issue #6266](https://github.com/verl-project/verl/issues/6266)
*   **[RFC] 多轮 RL 训练的 Prefix-Tree Shared Attention：** 针对 GRPO 及多轨迹 RL 训练中因 prefix 重复计算导致的算力浪费，提议采用 Prefix-Tree Shared Attention 机制进行底层优化。
    [verl-project/verl Issue #6401](https://github.com/verl-project/verl/issues/6401)
*   **[Hardware] Intel XPU 插件支持探询：** 社区正寻求重新启用 Intel XPU 支持，并讨论将其集成至 `verl-hardware-plugin` 仓库的路径。
    [verl-project/verl Issue #6403](https://github.com/verl-project/verl/issues/6403)
*   **[Feature] Gemma3/4 processor 多模态支持请求：** 社区呼吁增加 Gemma 3/4 系列模型的 processor 加载及多模态训练支持。
    [verl-project/verl Issue #6341](https://github.com/verl-project/verl/issues/6341)

## 4. 关键 PR 进展
核心贡献围绕显存管理、多模态模型支持及基础设施进行：

*   **[性能/架构] Megatron 模式引入 NCCL Communicator Suspend/Resume：** 落地 RFC #6266 的 Megatron 路径，在 colocated 模式下通过原生 NCCL API 释放闲置显存，默认关闭。
    [verl-project/verl PR #6408](https://github.com/verl-project/verl/pull/6408)
*   **[多模态/工具] 添加 Gemma4 工具解析器：** 为多轮 Agent 循环添加 Gemma4 工具调用支持，处理了 Gemma4 缺乏 EOS 等特殊 token 格式的解析问题。
    [verl-project/verl PR #6406](https://github.com/verl-project/verl/pull/6406)
*   **[多模态] Qwen3-VL-30B-MOE (VeOmni Backends) GRPO 训练脚本：** 添加基于 VeOmni 后端的 NPU/GPU GRPO 训练脚本。
    [verl-project/verl PR #5275](https://github.com/verl-project/verl/pull/5275)
*   **[架构] Standalone Log Prob Server 支持：** 在 fully_async 训练管道中引入独立的 Model Engine Server 计算 `log_probs`，实现了与 actor 训练引擎的权重保存/加载解耦。
    [verl-project/verl PR #5990](https://github.com/verl-project/verl/pull/5990)
*   **[Bug Fix] 修复 FSDP2 异构 Buffer 导致的 NCCL 死锁：** 针对类似 Gemma4 拥有不同 rotary embedding 维度的异构模型，修复了因 FSDP2 包装后 buffer 迭代顺序不确定导致的死锁问题。
    [verl-project/verl PR #6405](https://github.com/verl-project/verl/pull/6405)
*   **[显存优化] `tensordict.union` 后显式清理内存：** 在 `ray_trainer.py` 中显式释放临时 DataProto 对象，优化训练期显存占用。
    [verl-project/verl PR #6394](https://github.com/verl-project/verl/pull/6394)
*   **[Ascend NPU] NPU 支持 Liger-Kernel：** 进一步提升华为 Ascend NPU 上的内核级训练性能。
    [verl-project/verl PR #6244](https://github.com/verl-project/verl/pull/6244)
*   **[基础设施] 升级 vLLM 至 0.20.2：** 更新 vLLM 基础镜像版本并同步 CI 测试。
    [verl-project/verl PR #6393](https://github.com/verl-project/verl/pull/6393)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
verl 正在从单一的 RLHF 框架向**全栈、多模态、异构计算支持的全局 RL 基础设施**演进：
1. **攻坚底层显存与通信墙**：通过引入 NCCL Suspend/Resume（#6408）和 Prefix-Tree Shared Attention（RFC #6401），verl 正在解决 Colocated RL 训练中极度棘手的显存碎片化和重复计算问题，直接触及大模型 RL 的工程天花板。
2. **全面拥抱多模态与多智能体**：无论是整合 VeOmni 后端适配 Qwen3-VL-MOE 和 Qwen3-Omni，还是深度重构 multi-turn agent loop（如加入 per-assistant-turn token cap，解析 Gemma4 工具格式），verl 已做好向复杂 Agentic RL 拓展的准备。
3. **打破硬件生态壁垒**：通过 `verl-hardware-plugin` 的规划与落实，项目正系统性地整合 Ascend NPU、Intel XPU 等非 Nvidia 硬件生态，为大规模分布式训练提供了更多底层算力选择。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open-Instruct 项目 RL 日报摘要（2026-05-20）：

### 1. 今日速览
过去 24 小时，Open-Instruct 仓库整体保持平稳，无新增 Issue、无新代码合并、无版本发布。活动主要集中在两个已有的 GRPO 算法优化 PR 上，两者均由贡献者 `mnoukhov` 在昨日（05-19）推进了更新。

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。社区当前未报告新的 Bug 或功能请求，项目维护重心在底层算法的迭代上。

### 4. 关键 PR 进展
当前有 2 个 PR 处于活跃状态，均聚焦于 GRPO (Group Relative Policy Optimization) 底层 loss 计算机制的改进与探索：

*   **#1681 [OPEN] TV divergence Rho filtering**
    *   **作者**: mnoukhov
    *   **更新时间**: 2026-05-19
    *   **技术摘要**: 实现了名为 TVPO 的 token 级梯度掩码机制。该机制受论文 VACO 启发，保留了 `rho` 作为重要性乘子，但改变了 token 的过滤逻辑：当序列级的全变散度 `D_tv = |rho - 1|` 超过设定阈值时，对该 token 进行掩码处理。这是 RLHF 中防止策略更新过大的一种新型裁剪/过滤探索。
    *   **链接**: [allenai/open-instruct/pull/1681](https://github.com/allenai/open-instruct/pull/1681)

*   **#1679 [CLOSED] Simplify Clipfrac**
    *   **作者**: mnoukhov
    *   **更新时间**: 2026-05-19
    *   **技术摘要**: 重构了 `compute_grpo_loss` 函数，使其直接输出 `clipfrac`（截断比例）。此举旨在简化底层代码结构，并为后续实现其他类 GRPO 的 loss 算法铺平道路。
    *   **链接**: [allenai/open-instruct/pull/1679](https://github.com/allenai/open-instruct/pull/1679)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **直击 RLHF 前沿痛点**：从 PR #1681 可以看出，项目正在积极引入并修改最前沿的学术成果（如 VACO, Token 级别的 KL 散度/TV散度控制）。传统的 PPO/GRPO 在大模型上的策略崩溃问题依然存在，精细化的 token-level 过滤和 rho 值控制是当前突破 RL 性能瓶颈的关键方向。
2.  **基础 RL 基建的高可塑性**：PR #1679 证明了项目正在对底层 loss 计算核心（如 `compute_grpo_loss`）进行解耦和重构。这意味着项目正在为兼容未来更多样的 RL 对齐算法（如 DPO 变体、新的截断机制）打造灵活的代码底座，对于需要深度定制训练流程的 RL 研究者来说，是极佳的试验田。

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

# RL 日报摘要：Stable Baselines3 (2026-05-20)

## 1. 今日速览
过去 24 小时内，Stable Baselines3 (SB3) 仓库活动集中体现为单一核心技术特性的推进：1 位核心维护者持续处理针对有界连续动作空间的 Beta 分布支持。无新增 Issue 或其他社区 PR 提交，项目整体处于功能迭代优化阶段。
- **Issues 更新**: 1 条
- **PR 更新**: 1 条
- **新版本发布**: 0 个

## 2. 版本发布
**无**。过去 24 小时及近期均无新版发布。

## 3. 重点 Issues
- **#2142 [OPEN] [enhancement] 增加 BetaDistribution 策略选项以优化有界动作空间**
  - **作者**: lukaskiss222 | **👍**: 0 | **评论**: 4
  - **摘要**: 建议为有界连续动作空间引入 `BetaDistribution`。在传统的 RL 算法中，通常使用高斯分布并对动作进行截断，这会导致边界处的概率密度偏差并影响训练稳定性。该提案基于 Petrazzini & Antonelo (2021) 的研究，旨在从根本上消除截断偏差。
  - **链接**: [DLR-RM/stable-baselines3 Issue #2142](https://github.com/DLR-RM/stable-baselines3/issues/2142)

## 4. 关键 PR 进展
- **#2228 [OPEN] WIP: PPO 算法的 Beta 分布支持**
  - **作者**: araffin (项目核心维护者) | **👍**: 0
  - **摘要**: 此 PR 旨在直接解决并关闭上述 Issue #2142。由核心维护者推进（并注有使用 Zed + Claude 辅助完成），目前标记为 "WIP"（开发中）。该合入将显著提升 SB3 在处理具有严格物理边界（如机器人关节角度、油门控制）任务时的策略表现及数学严谨性。
  - **链接**: [DLR-RM/stable-baselines3 PR #2228](https://github.com/DLR-RM/stable-baselines3/pull/2228)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **底层算法的严谨性迭代**：SB3 始终坚持不盲目堆砌新算法，而是修正传统实现（如 Gaussian clipping）中的理论缺陷。Beta 分布的引入将极大提升有界控制任务（如 Robotics、控制论）的性能上限。
2. **核心团队的积极介入与 AI 融合**：Issue 由社区提出，而 PR #2228 由核心维护者 Antonin Raffin 亲自下场主导，显示出高效的内部响应机制。此外，维护者开始在源码级 PR 中整合 LLM 工具（如 Zed + Claude）辅助编码，展现了传统 RL 基础设施项目拥抱 AI 辅助开发的前沿趋势。
3. **业界基准地位**：作为学术界和工业界最广泛使用的 RL 基础库之一，SB3 对底层策略分布的任何底层重构（如 PyTorch `Distribution` 体系的扩展）都将直接影响下游应用（如 RL-Baselines3-Zoo、环境接口库）的评估基准。

</details>