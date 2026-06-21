# RL 开源生态日报 2026-06-22

> 生成时间: 2026-06-21 22:22 UTC | 覆盖项目: 15 个

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

当前大模型强化学习（LRL）开源生态已明确分化为三大阵营：
1. **前沿算法与全栈探索者**：以 **TRL** 和 **verl** 为代表，高度活跃，焦点集中在 Agentic RL、多模态大模型（VLM）接入以及最新 SOTA 算法（如 CISPO、Adaptive DPO）的工程化落地。
2. **工业级训练基座攻坚者**：以 **AReaL**、**slime** 和 **ROCK** 为代表，重心在分布式训练（Megatron/vLLM）、数学正确性校验以及大规模长周期训练的系统级容错。
3. **经典/单核教育基石**：以 **CleanRL** 为代表，坚持极简的单文件实现，为学术界提供最透明的白盒测试床。其余大部分传统 RL 库（如 Gymnasium, SB3, Tianshou 等）目前处于稳定期或休眠状态。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 4 | 13 | 0 | 敏捷修复 GRPO/vLLM 边缘 Bug，快速吸收 SOTA 偏好对齐算法 |
| **AReaL** | 0 | 14 | 0 | 深水区排雷：修复核心 RL 算法的隐蔽数值 Bug与推理后端对齐 |
| **slime** | 0 | 9 | 0 | 发力底层重构与多后端（GPT-OSS/Megatron）兼容性修复 |
| **verl** | 3 | 6 | 0 | 强攻多模态 Agentic RL，完善连续 Token 与底层 IS 指标计算 |
| **ROCK** | 1 | 2 | 0 | 改善云原生（K8s）环境下的分布式 IO 鲁棒性与磁盘治理 |
| **CleanRL** | 0 | 1 | 0 | 稳步扩充经典 Value-based 算法库（ES-C51） |
| **其他项目** | 0 | 0 | 0 | 传统 RL 或基础 SFT 框架进入平稳维护期 |

## 共同关注的研究与工程方向

**研究侧重信号：**
*   **强化学习底层数学与边界鲁棒性**：各项目开始严苛审视 RLHF 训练中极易被忽视的隐蔽 Bug。例如，AReaL 修复了“部分组基线计算偏移”和“Clip 机制导致的零梯度”；slime 阻断了 PPO 中 KL 散度原位转化 reward 带来的数据污染。
*   **Loss 函数与 Advantage 估计的演进**：引入更细粒度的控制，如 AReaL 新增的 CISPO Loss（解决带外 Token 梯度消失）、灵活的 Loss 聚合维度，以及 verl 引入的双向 Bernoulli KL 散度硬信任域约束。

**工程/基础设施侧信号：**
*   **解耦多模态与 Agentic 状态上下文**：如何优雅地在多轮 Agent 任务中无缝接入并保持多模态（VLM）的上下文状态，是当前工程突破的最高地。verl 提出的 Continuous Token 机制直击此痛点。
*   **分布式训练引擎的严苛适配与容错**：核心战场全面转向 vLLM/SGLang/Megatron 的深度融合。包括 TRL 和 AReaL 对最新版 vLLM 的跟进校验，以及 ROCK 解决 K8s 环境下进程被 OOM/SIGKILL 导致的磁盘泄漏等系统级灾备问题。

## 差异化定位分析

*   **TRL（敏捷与广度）**：定位为前沿算法的“首选试验田”。更新极快，对外部开发者反馈响应迅速（24小时内修复崩溃 Bug），不仅巩固基建，还覆盖了 VLM 蒸馏、独立 Critic 保存等全面特性。
*   **AReaL（极致的数值严谨性）**：定位为工业级、高容错的计算基座。强调偏导截断、脏数据丢弃和强类型边界防御，适合追求极致模型性能且不容忍数值误差的硬核工程团队。
*   **verl（Agentic 多模态高地）**：在多模态、多轮连续 Token 的调度架构上具有显著领先优势。重点解决大模型在复杂实际应用（图文混合上下文）中的微批次分割与分布式通信痛点。
*   **slime（深度解耦与路由安全）**：注重多模型协同的底层逻辑（如多 SGLang 路由的 Fail-closed 机制），并作为 RL Substrate 开始吸引上游 Agentic 框架（如 Dressage）接入。
*   **CleanRL（极简透明）**：凭借“单文件实现”构筑极低心智负担的护城河，在各大框架越发庞大复杂时，依然是算法研究员进行底层消融实验的最佳白盒环境。

## 社区热度与成熟度

当前生态呈现出显著的**“头部虹吸效应”**，社区热度高度集中于具备强工程能力的大厂或顶尖研究机构主导的项目（HuggingFace, 字节, 蚂蚁, 清华, 阿里等）。
成熟度方面，各项目已度过“能跑通即可”的草莽阶段。从今日的 PR 质量来看，开发重心已从“堆叠 FEA”转移到**“为分布式系统做纵深防御”与“为算法做严谨的数学对齐”**。这表明整个大模型 RL 工具链生态正在加速走向成熟，向真正的工业化生产级迈进。

## 值得关注的趋势信号

1.  **底层推理引擎的话语权争夺**：RL 训练框架正在与 vLLM、SGLang 等推理引擎发生深度绑定与解耦的重构（如 TRL 紧跟 vLLM 0.22.1，slime 深度适配 Megatron-Bridge）。能否吃透推理引擎的显存调度，将成为 RL 框架的生死线。
2.  **“Token 级”干预成为新常态**：传统 PPO 中的粗粒度控制正在被抛弃，细粒度到 Token 维度的 IS 截断（verl）、Loss 聚合（AReaL）正成为标配，业界对策略梯度下降的控制达到了前所未有的精度。
3.  **长周期训练的系统级灾备提上日程**：随着 RL 训练耗时拉长到数周，针对系统级驱逐（如 OOM 导致孤儿进程、日志归档泄漏磁盘空间）的容错与自愈机制（如 ROCK 的软终止信号拦截），将成为工业级框架的底层基础设施刚需。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**ROCK (alibaba/ROCK) 强化学习开源生态日报**
**日期**: 2026-06-22

### 1. 今日速览
过去 24 小时内，ROCK 仓库共有 3 项更新，主要集中在系统稳定性与文档维护。核心动态为：针对 K8s 环境下由于进程被强制终止（SIGKILL）导致的临时文件泄漏问题，社区提交了针对性的修复 PR，提升了大规模分布式训练时的 Worker 磁盘稳定性。暂无新版本发布。

### 2. 版本发布
* **无新版本发布**。
* 注：[PR #1140](https://github.com/alibaba/ROCK/pull/1140) 更新了历史文档，将 v1.9.0 的正式发布日期确认为 2026 年 6 月 11 日。

### 3. 重点 Issues
* **[#1141](https://github.com/alibaba/ROCK/issues/1141) [Bug] 归档进程被杀导致 `/tmp/sb-archive-*` 临时目录泄漏**
  * **作者**: jinbai340997
  * **摘要**: `SandboxLogArchiveTask` 在将 tar 包上传至 OSS 前，会在 `/tmp` 目录下创建临时暂存目录。在正常情况下，系统会通过 bash 的 `trap ... EXIT` 机制进行清理。但如果归档进程收到 `SIGKILL` 信号（如 K8s 驱逐、OOM 或部署更新），EXIT 处理程序将无法触发。这会导致 Worker 节点上积累大量孤儿临时文件，最终引发严重的磁盘空间压力（Disk Pressure）。

### 4. 关键 PR 进展
* **[#1142](https://github.com/alibaba/ROCK/pull/1142) [Fix] 临时目录自愈清理与软终止信号捕获**
  * **作者**: jinbai340997
  * **摘要**: 作为 Issue #1141 的修复方案，该 PR 引入了“纵深防御”机制。核心代码包括：1) 在任务级和命令级增加了对存在时间超过 2 小时的 `sb-archive-*` 陈旧临时目录的周期性清理；2) 在归档 shell 命令中拦截 `SIGTERM`/`SIGINT`/`SIGHUP` 等软终止信号，确保在 K8s 优雅关闭、超时或 SSH 断开等场景下，EXIT 清理程序仍能被正常触发。
* **[#1140](https://github.com/alibaba/ROCK/pull/1140) [Docs] 修正 v1.9.0 发布日期**
  * **作者**: jinbai340997
  * **摘要**: 将英文和中文字档中的 v1.9.0 发布日期从“待定（TBD）”正式修改为“2026 年 6 月 11 日”。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
在强化学习（RL）迈向大规模分布式训练的当下，底层基础设施的鲁棒性直接决定了实验的成败。ROCK 项目今日处理的 Issue #1141 暴露了 RL 系统在云原生环境（K8s）下的典型痛点：**长时异步任务（如日志归档、Checkpoint 上传）在面临系统级驱逐（OOM/SIGKILL）时的资源泄漏问题**。
通过 [PR #1142](https://github.com/alibaba/ROCK/pull/1142) 的修复，可以看出 ROCK 团队不仅关注 RL 算法本身的实现，更在死磕分布式环境下的**系统级容错与自愈能力**。对于需要跑数周甚至数月的复杂 RL 任务而言，这种对底层工程细节（磁盘治理、信号处理）的严格把控，是保障训练任务不因环境污化而中断的关键，也使得 ROCK 成为工业级 RL 应用中极具可靠性的底层基座。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 项目 2026-06-22 RL 日报摘要：

### 1. 今日速览
过去 24 小时，slime 仓库无新增 Issue 和版本发布，但代码库迎来了 **9 项 PR 更新**。这些更新集中反映了项目当前的开发重心：**多后端兼容性修复（GPT-OSS、Megatron）、训练监控指标准确性提升，以及多模型路由的安全性与核心数据结构的重构**。

### 2. 版本发布
* 无新版本发布。

### 3. 重点 Issues
* 过去 24 小时无新增或更新的 Issue。开发者目前主要通过直接提交 PR 来修复问题。

### 4. 关键 PR 进展

**训练核心与监控指标修复**
* **[PR #2114](https://github.com/THUDM/slime/pull/2114) [OPEN]** 修复 PPO 指标记录被破坏的问题。此前 PPO estimator 会在原地（in-place）将 KL 散度转化为 reward signal，导致后续记录的 `rollout/kl` 指标失真。该 PR 旨在阻断这种数据污染。（作者: EazyReal）

**后端与模型兼容性（Megatron / GPT-OSS）**
* **[PR #2113](https://github.com/THUDM/slime/pull/2113) [OPEN]** 适配 `Megatron-Bridge` 的最新 API。修复了因新增 `hf_state_dict` 参数导致的 monkey-patch 报错，解决 GPT-OSS 同步权重时的崩溃问题。（作者: aoshen02）
* **[PR #2066](https://github.com/THUDM/slime/pull/2066) [OPEN]** 优化 Megatron 后端训练逻辑。避免在开启 `overlap_grad_reduce` 时，每个 step 都重复设置并断言 `no_sync_func`，提升执行效率与稳定性。（作者: HaozheZhang6）

**Rollout 与奖励模型安全性**
* **[PR #2115](https://github.com/THUDM/slime/pull/2115) [OPEN]** 增强 DeepScaler 奖励函数的鲁棒性。为 `get_deepscaler_rule_based_reward` 添加前置检查，防止因缺失 `response` 字段导致的 KeyError。（作者: vjsai）
* **[PR #2112](https://github.com/THUDM/slime/pull/2112) [OPEN]** 修复多模型 SGLang 配置的路由隐患。当请求的模型名不在路由表中时，原先会静默回退到默认路由，可能导致 Reward/Reference 模型的请求被错误转发。该 PR 使其在遇到未知模型时抛出明确异常（Fail closed）。（作者: Baiyu-Su）

**代码重构与生态建设**
* **[PR #2110](https://github.com/THUDM/slime/pull/2110) [CLOSED]** & **[PR #2108](https://github.com/THUDM/slime/pull/2108) [CLOSED]**: 核心维护者 zhuzilin 尝试将 `append_response_tokens` 的逻辑抽离至 `Sample` 类中。（合并测试相关的 PR #2108 同步关闭）。
* **[PR #2053](https://github.com/THUDM/slime/pull/2053) [OPEN]** 触发 Megatron CI 测试的常规测试 PR。
* **[PR #2111](https://github.com/THUDM/slime/pull/2111) [CLOSED]** 提交者试图在 README 中添加基于 slime 构建的 Agentic RL 框架 Dressage。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
* **底层训练稳定性的严苛打磨**：今日的 PR 更新（如防止 PPO KL 指标被原位修改、修复 GPT-OSS 权重同步崩溃）表明，slime 团队正在死磕 RL 训练中那些“难以察觉但会导致实验作废”的底层 Bug。
* **紧跟大模型前沿架构的适配能力**：项目正在积极跟进 GPT-OSS、Megatron-Bridge 以及多 SGLang 路由等前沿基础设施，证明其在**大规模、多模型协同的 RLHF/RLAIF 场景**中保持着极高的工程迭代频率。
* **构建上游生态的野心**：随着 Dressage 等 Agentic RL 框架开始请求接入，slime 正在逐渐稳固其作为**RL 训练基座（Substrate）**的地位，对于需要深度定制底层 RL 算法的研究者和工程团队而言，是一个极具价值的核心项目。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL RL 日报摘要 | 2026-06-22**

**1. 今日速览**
过去 24 小时内，AReaL 仓库无新增 Issue 和 Release 版本，但代码库迎来高达 14 次 PR 活跃更新。更新主要集中于 PPO/GRPO 算法底层的数学正确性修正、边界的鲁棒性防御，以及对 vLLM/SGLang 等推理后端的深度适配。

**2. 版本发布**
- 无新增 Release。

**3. 重点 Issues**
- 过去 24 小时无新增 Issue。

**4. 关键 PR 进展**
今日的 PR 更新呈现出强烈的“底层优化与硬核重构”特征，主要分为以下三个技术方向：

**1. PPO 算法核心机制的修正与拓展**
- **偏导截断修复 (PR [#1415](https://github.com/areal-project/AReaL/pull/1415))**：修复了 GRPO/RLOO 等算法在处理“部分组（Partial Groups，如发生截断或丢包）”时，仍采用固定 `group_size` 步长计算 reward/advantage 基线的逻辑漏洞。
- **采样有效性控制 (PR [#1416](https://github.com/areal-project/AReaL/pull/1416))**：引入 `min_valid_group_size` 机制，自动丢弃在 Rollout 阶段未充分填充的采样组，避免脏数据影响基线。
- **新增 CISPO Loss (PR [#1412](https://github.com/areal-project/AReaL/pull/1412))**：引入 MiniMax-M1 提出的 CISPO 损失函数代理，解决传统 PPO/GRPO Clip 机制下，不在截断带内的 token 梯度消失（为零）的问题。
- **灵活的 Loss 聚合 (PR [#1417](https://github.com/areal-project/AReaL/pull/1417))**：将策略梯度的损失聚合方式从写死的序列均值，扩展为支持 token / seq / prompt 维度的均值计算（参考 ScaleRL §3.2）。
- **配置精简 (PR [#1413](https://github.com/areal-project/AReaL/pull/1413))**：移除冗余配置，组归一化的 `group_size` 将直接派生自 `gconfig.n_samples`。

**2. 训练与推理引擎的鲁棒性修复**
- **Tokenizer 边界防御 (PR [#1427](https://github.com/areal-project/AReaL/pull/1427), [#1425](https://github.com/areal-project/AReaL/pull/1425))**：[#1427](https://github.com/areal-project/AReaL/pull/1427) 修复了 GSM8K SFT 场景下，BPE 分词器合并 token 导致的 loss_mask 边界错误；[#1425](https://github.com/areal-project/AReaL/pull/1425) 修复了 Llama 等无 `pad/eos_token_id` 的模型将 `None` 注入采样参数导致的系统崩溃。
- **推理后端对齐 (PR [#1429](https://github.com/areal-project/AReaL/pull/1429))**：修复了 vLLM 后端遗漏 `frequency_penalty` 和 `stop` 参数转发的问题，使其与 SGLang 后端行为对齐。
- **超时与异常防御 (PR [#1426](https://github.com/areal-project/AReaL/pull/1426), [#1430](https://github.com/areal-project/AReaL/pull/1430))**：为 `MathVerifyWorker` 添加严格的挂起验证超时限制；修复 CLEVR 计数奖励函数未做类型强转（`str()`）导致的 `AttributeError`。

**3. 系统监控与分布式优化**
- **监控补全 (PR [#1428](https://github.com/areal-project/AReaL/pull/1428))**：在单机多卡训练中，将 W&B 的 GPU 系统指标采集从单纯的 Controller 进程下沉到实际占用 CUDA 的 Worker 进程。替代了此前死锁的 [#1338](https://github.com/areal-project/AReaL/pull/1338)。
- **Muon 优化器支持 (PR [#1270](https://github.com/areal-project/AReaL/pull/1270))**：持续推进原生支持 FSDP2 与 Megatron 后端的 Muon 优化器（基于牛顿-舒尔茨迭代进行正交化）。
- **Qwen TP 兼容修复 (PR [#1365](https://github.com/areal-project/AReaL/pull/1365))**：解决 Qwen 系列模型在 Tensor 并行（TP）下，最终 Norm 层与 lm_head 之间存在中间算子破坏 DTensor 调度的问题。

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
当前的 LLM 强化学习正经历从“跑通流程”到“数学与工程双重极致优化”的过渡，AReaL 的演进路线精准切中了这一痛点：
1. **直击 RLHF 核心数值 Bug**：像“部分组基线计算偏移”、“BPE 分词合并导致 SFT Loss 越界”、“Clip 机制导致的零梯度”这类问题，是众多 RL 开源框架中隐蔽但致命的Bug，AReaL 正在以极高的代码质量进行深水区排雷。
2. **紧跟 SOTA 算法**：快速响应并合入如 MiniMax-M1 (CISPO)、Muon 优化器等前沿研究成果。
3. **深度的后print解耦**：对 vLLM / SGLang 以及底层 Tokenizer 强类型边界的细致修复，证明该框架正力图成为一个工业级、高容错的 RL 训练基座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 🤖 TRL (huggingface/trl) RL 日报摘要 - 2026年6月22日

## 1. 今日速览
过去 24 小时内，TRL 仓库共有 **4 条 Issue 更新**（2 个新 Bug 报告，1 个历史 Bug 关闭）和 **13 条 PR 更新**。整体生态活跃度集中在 **异步 GRPO (`AsyncGRPO`) 的稳定性修复**、**高级 DPO/PPO 算法扩展** 以及 **底层 vLLM 版本兼容性适配**。今日无新版本发布。

## 2. 版本发布
**无**（近期无新 Release 释出，代码库主干持续推进中）。

---

## 3. 重点 Issues
开发者在日常使用中暴露了几个核心训练模块的边缘情况：

*   **AsyncGRPO 可调用奖励函数序列化崩溃** ([#6133](https://github.com/huggingface/trl/issues/6133))
    *   **摘要**: `AsyncGRPOTrainer` 官方文档支持使用 `functools.partial` 或实例类作为奖励函数，但底层 `_AsyncRolloutLoop` 强制要求获取 `__name__` 属性，导致多进程 Rollout 初始化直接崩溃。
*   **GRPO 处理不完整批次 崩溃** ([#6129](https://github.com/huggingface/trl/issues/6129))
    *   **摘要**: 当结合 `environment_factory` 使用时，`GRPOTrainer` 对生成的环境列表和批次进行严格 `zip`。若最后一个 Batch 数据量不足，将引发严格的解包错误导致训练终止。
*   **vLLM 服务端 token ID 重复展平 Bug** ([#5514](https://github.com/huggingface/trl/issues/5514))
    *   **摘要**: `OnlineDPOTrainer` 生成阶段，由于未正确识别 `vllm_serve.py` 已经返回了展平的 `list[list[int]]`，对其进行了二次 Flatten，导致数据结构破坏。

---

## 4. 关键 PR 进展
今日的 PR 极具技术含金量，针对上述 Issues 的 Hotfix 迅速跟进，同时带来了算法层面的新特性：

### 🔧 核心模块修复与优化
*   **[FIX] AsyncGRPO 奖励函数命名修复** ([#6136](https://github.com/huggingface/trl/pull/6136) / [#6134](https://github.com/huggingface/trl/pull/6134)): 针对上述 Issue #6133 的修复，去除了对 `__name__` 的硬依赖，兼容 `partial` 等合法可调用对象。（注：社区贡献者竞争修复，#6135 已关闭）。
*   **[FIX] GRPO 边缘批次修复** ([#6137](https://github.com/huggingface/trl/pull/6137)): 修复 `environment_factory` 在部分批次情况下的崩溃问题。
*   **[OPT] AsyncGRPO 检查点恢复优化** ([#5911](https://github.com/huggingface/trl/pull/5911)): 修复断点续训时，`ignore_data_skip=False` 导致废弃 Batch 仍被送入 vLLM 进行无意义推理的资源浪费 Bug。
*   **[ALIGN] AsyncGRPO 指标对齐** ([#6021](https://github.com/huggingface/trl/pull/6021)): 将 `AsyncGRPOTrainer` 的 `clip_ratio` 日志记录逻辑与标准 `GRPOTrainer` 对齐，根据优势符号 细化为 `low_mean`, `high_mean` 等指标。

### 🧠 新算法与底层支持拓展
*   **[FEAT] Adaptive Beta-DPO 算法实现** ([#6123](https://github.com/huggingface/trl/pull/6123)): 引入论文 *arXiv:2407.08639*。基于批次内 chosen/rejected 的分离程度动态调整 $\beta$ 系数，提升对齐稳定性。
*   **[FEAT] PPO Critic 模型独立保存** ([#6120](https://github.com/huggingface/trl/pull/6120)): 为 `PPOConfig` 新增 `save_value_model` 标志，允许将价值模型单独转储至 `value_model/` 目录，完善了 PPO 的断点恢复机制。
*   **[FEAT] GOLDTrainer 视觉大模型 支持** ([#5969](https://github.com/huggingface/trl/pull/5969)): 为 GOLD 蒸馏算法引入 VLM 支持，支持基于 JSD loss 的同架构 VLM 蒸馏。
*   **[FEAT] 兼容 vLLM 0.22.1** ([#6119](https://github.com/huggingface/trl/pull/6119)): 校验并提升了 TRL 对最新版 vLLM (`0.20` -> `0.22.1`) 的兼容性。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1.  **敏捷响应与高准入门槛的社区生态**：从 `#6133` 和 `#6129` 的修复可以看出，核心维护者和外部贡献者能在 24 小时内完成“发现边缘 Bug -> 提交复现 -> 竞速提交 PR”的闭环，工程修复效率极高。
2.  **紧跟前沿算法迭代**：不仅巩固了现有的 GRPO/PPO 基建，还迅速吸收了学术界（如 Adaptive Beta-DPO）的工程化落地。对研究人员而言，TRL 是试验最新 RL/Preference 对齐算法的“首选试验田”。
3.  **攻克大模型 RLHF 的工程痛点**：异步架构（AsyncGRPO 防冗余推理）、多模态拓展（VLM 蒸馏）以及严苛的分布式推理引擎适配（vLLM 最新版跟进），直击工业界千卡训练时的显存墙、通信瓶颈和模型保存痛点。TRL 正在从单纯的“算法库”向“生产级 RLHF 基础设施”快速演进。

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

以下是为您生成的 verl 项目 RL 日报摘要（2026-06-22）：

# verl RL 生态日报 (2026-06-22)

## 1. 今日速览
- **Issue 动态**：新增/更新 3 条，主要聚焦在底层训练逻辑（on-policy log_prob 差异）与工程部署异常。
- **PR 进展**：新增/更新 6 条，核心方向集中在 **多模态智能体** 与 **离线强化学习/优势估计器** 的算法优化与代码清理。
- **版本发布**：过去 24 小时无新版本 Release。

## 2. 版本发布
无。当前阶段社区重心偏向于主分支核心算法的重构以及 Agent 实验特性的开发。

## 3. 重点 Issues
- **[核心机制] `log_prob` 与 `old_log_prob` 在 on-policy 设置下存在差异**
  - **背景**：当遵循官方建议设置 `rollout.log_prob_micro_batch_size_per_gpu = 2 * actor.ppo_micro_batch_size_per_gpu`，且在纯 on-policy 设置（`ppo_epochs = 1`，`train_batch_size = mini_batch_size`）下，两者理应一致但实际出现偏差。这可能会影响 PPG/PPO 训练中 Importance Sampling (IS) 的基准线。
  - **链接**：[verl-project/verl Issue #6280](https://github.com/verl-project/verl/issues/6280)

- **[环境部署] `NDEVICES_PER_NODE=2` 下发生 Chunk 维度报错**
  - **背景**：在 AgentLoop 实验性特性中，未显式设置的 `chunk=8` 导致了张量分割异常（`prompts.chunk(len(self.agent_loop_workers))`）。此 Bug 暴露了 Agent 多卡部署下的参数自动推断逻辑存在缺陷。
  - **链接**：[verl-project/verl Issue #6801](https://github.com/verl-project/verl/issues/6801)

- **[评估机制] 训练前评估结果非确定性**
  - **背景**：开发者反馈在设定 `temperature=0` 的情况下，每次训练前的评估结果依然存在波动。这通常与底层 VLLM/SGLang rollout 引擎的 batch size 影响、非确定性 kernel 或是多卡分布式的 gathering 逻辑有关。
  - **链接**：[verl-project/verl Issue #6802](https://github.com/verl-project/verl/issues/6802)

## 4. 关键 PR 进展
今日的 PR 更新展现了 verl 在 **Agentic RL** 与 **算法鲁棒性** 上的持续演进：

- **多模态 Agent 核心升级 (Continuous Token 机制)**
  - **[PR #6799]** 为 VL (Vision-Language) 模型家族引入多模态连续 Token 支持，新增对 MiMo, DeepSeek, Kimi 等架构的适配。([链接](https://github.com/verl-project/verl/pull/6799))
  - **[PR #6804]** 将 Continuous Token 扩展至 `AgentLoop`，使得多模态 processor 能够正常编码图文混合的上下文。([链接](https://github.com/verl-project/verl/pull/6804))
  - **[PR #6779]** 作为上述 PR 的基础，引入了通用的多轮 Agentic rollout 连续 Token 机制，填补了 token-in-token-out 与多轮会话状态保持之间的鸿沟。([链接](https://github.com/verl-project/verl/pull/6779))

- **算法修正与代码瘦身**
  - **[PR #6800]** 新增 `KPop` (binary_kl) 作为离线策略/Rollout 纠正的拒绝采样选项，通过双向 Bernoulli KL 散度应用硬信任域约束。([链接](https://github.com/verl-project/verl/pull/6800))
  - **[PR #6806]** 修复了 `compute_is_metrics` 中由于 clamp 操作导致的 `rollout_is_seq_fraction` 指标失效的问题。([链接](https://github.com/verl-project/verl/pull/6806))
  - **[PR #6803]** 清理了 GPG (Generalized Policy Gradient) 优势估计器中的冗余代码 (`id2std`)，并修复了设备不匹配问题。([链接](https://github.com/verl-project/verl/pull/6803))

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的代码动态可以清晰看出 verl 的演进方向，它正在稳固其作为**顶级 RLHF/Agent 训练底座**的地位：
1. **抢占 Agentic RL 与多模态结合的工程高地**：以 Continuous Token 为代表的系列 PR（#6779, #6799, #6804），直击当前 LLM 社区最难啃的骨头——如何在复杂的多轮 Agent 任务中无缝接入并保持多模态（Vision-Language）的上下文状态，这表明 verl 正在提供解决实际工业痛点的 Infra。
2. **对底层算法逻辑的严苛打磨**：无论是修复 `log_prob` 的显存分配导致的精度细微差异（#6280），还是修正 IS 指标失效（#6806）、引入更严谨的双向 KL 拒绝采样（#6800），都表明项目组正在认真对待 RL 训练中极易被忽视的"数学正确性"与"代码实现一致性"问题。对于追求稳定复现的算法工程师而言，这种对齐极具新引力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

**CleanRL 生态日报 (2026-06-22)**

**1. 今日速览**
过去 24 小时内，CleanRL 仓库整体活跃度较为平缓。无新增 Issue，无新版本发布。唯一的动态来自于算法库底层拓展的长期开发：PR #529 在沉寂一段时间后于昨日发生了状态更新。

**2. 版本发布**
*   **无**。近期未发布新的 Release 版本。

**3. 重点 Issues**
*   **无**。过去 24 小时内无新增或更新的 Issue。

**4. 关键 PR 进展**
*   **[OPEN] #529 Add ES-C51 (Expected Sarsa based C51)**
    *   **作者**: Rijul-Tandon
    *   **更新时间**: 2026-06-21
    *   **概述**: 该 PR 致力于向 CleanRL 引入新算法 **ES-C51**（基于 Expected Sarsa 的 C51 分布式强化学习变体）。根据作者标记，此次提交包含 `[x] New algorithm` 和 `[x] Documentation`，是对现有 Value-based（基于价值）算法池的重要扩充。
    *   **链接**: [vwxyzjn/cleanrl PR #529](https://github.com/vwxyzjn/cleanrl/pull/529)

**5. 为什么这个项目值得在当前 RL 生态继续关注**
CleanRL 的核心护城河在于其**“单文件实现”**的极简主义架构。在当前 RL 生态逐渐被高度封装、模块化（如高度抽象的 Trainer/BaseClass）的大型框架主导的背景下，CleanRL 依然保持着每个算法对应一个完整独立的 `.py` 文件。
*   **价值体现**: 这种设计剥离了繁杂的面向对象嵌套，使得研究人员能够以极低的心智负担进行**算法阅读、消融实验修改**以及**底层动作空间和奖励函数的 Hack**。
*   **生态定位**: 尽管日常提交频率不如综合性工程框架（如 SB3、RLlib）密集，但每当学术界涌现具有潜力的轻量级算法变体（如此次 PR 中的 ES-C51），CleanRL 往往能提供最快、最透明的可复现基准代码。它是 RL 研究员和硬核算法工程师不可或缺的“白盒”测试床。

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