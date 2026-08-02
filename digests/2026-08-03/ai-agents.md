# OpenClaw 生态日报 2026-08-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-02 22:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

以下是 OpenClaw 项目 2026 年 8 月 3 日的动态发展日报。作为专注于 AI 智能体与个人助手领域的开源项目， OpenClaw 今日展现出了极高的社区活跃度与工程推进效率。

---

### 📊 1. 今日速览
*   **整体活跃度：极高。** 过去 24 小时内，项目处理了超过 500 条 Issues 和 500 条 PRs（其中 110 个 PR 被合并或关闭）。
*   **工程重心：** 项目核心维护者 `steipete` 发起了一次大规模的底层重构行动，集中处理了异步序列化、状态数据库快照和网关生命周期等核心模块。
*   **状态与安全：** 随着最新的 `v2026.7.2-beta.7` 发布，开发团队将重心深度转向“状态安全与恢复”，特别是针对 SQLite 数据库损坏、崩溃恢复和状态降级丢失的防御机制。
*   **社区隐忧：** 尽管项目迭代迅速，但智能体在长会话下的“消息静默丢失”（Memory Loss / Message Loss）和部分网关内存泄漏问题仍是当前用户反馈最强烈、讨论最密集的痛点。

---

### 🚀 2. 版本发布
**最新 Release: [v2026.7.2-beta.7](https://github.com/openclaw/openclaw/releases)** 
*   **更新亮点：** **状态安全与恢复**。
*   **核心机制引入：**
    *   **隔离存储：** 引入隔离存储机制，即使主数据库损坏，持久化数据也能得以保存。
    *   **崩溃恢复：** 支持 SQLite 快照的崩溃恢复，以及抗崩溃的文件系统发布。
    *   **数据保护：** 引入“模式升级数据丢失拒绝”机制和回滚式快照写入恢复。
*   **迁移注意事项：** 此版本重点加强了状态回滚和数据兼容性保护。结合今日合并的 PR（如 #113567），未来系统在执行数据库 Schema 迁移前会进行快照备份。强烈建议自托管用户在升级到此版本前，依然保留本地 `.openclaw` 目录的快照。

---

### 🛠️ 3. 项目进展
今日共有 **110 个 PR** 被合并或关闭，项目在系统鲁棒性、测试覆盖率和底层代码去重方面迈出了一大步：
*   **核心架构重构：** 维护者 `steipete` 提交了数个大型重构 PR。例如，[PR #118245 (Canonicalize single-flight promise caching)](https://github.com/openclaw/openclaw/pull/118245) 规范了异步 Promise 的缓存生命周期，清理了无法被销毁的持久化缓存，大幅降低了网关出现内存泄漏和死锁的概率。
*   **执行上下文抢救：** [PR #118181 (fix: queued runs lose execution context)](https://github.com/openclaw/openclaw/pull/118181) 修复了高负载下任务排队超过 30 分钟后丢失上下文导致 Agent 幻觉或罢工的问题。
*   **自动化机器修复：** OpenClaw 自研的修复机器人 `clawsweeper[bot]` 发挥了巨大作用，自主提交并合并了多个边缘 Bug 修复，例如 [PR #118064 (fix: skip invalid location messages in LINE)](https://github.com/openclaw/openclaw/pull/118064) 修复了 LINE 频道位置消息导致的崩溃。

---

### 🔥 4. 社区热点
*   **[Issue #116277](https://github.com/openclaw/openclaw/issues/116277): DeepSeek v4 Flash silent reply failure (🔥 87 评论)**
    *   **背景：** 在 Telegram 群组中，调用 DeepSeek v4 Flash 模型时出现静默生成失败，导致 OpenClaw 返回 "No reply was generated" 的兜底消息。
    *   **诉求分析：** 社区对“静默失败”非常反感，用户强烈要求系统在 LLM 返回空数据时具备重试机制或更明确的错误广播，而不是生硬地打断对话语境。
*   **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588): Critical: Gateway Memory Leak — OOM Crashes (🔥 22 评论)**
    *   **背景：** 稳定版网关进程存在严重内存泄漏，RSS 从 350MB 在 2-3 天内飙升至 15.5GB，最终被 OOM Killer 杀死。
    *   **诉求分析：** 个人助手需要“全天候待机”，此类内存泄漏严重破坏了用户体验。今日维护者提交的 Promise 缓存重构 PR 预计将极大缓解此问题。

---

### 🐛 5. Bug 与稳定性
根据系统影响和 Issue 标签，今日报告的关键 Bug 按严重程度排列如下：

*   **[P0 - 数据丢失] [Issue #115421](https://github.com/openclaw/openclaw/issues/115421):** Schema 降级恢复机制直接清空了状态数据库（包含所有 Cron 定时任务配置）。**状态：** 已在今日 beta.7 及相关 PR 中着手修复。
*   **[P0 - 崩溃循环] [Issue #91588](https://github.com/openclaw/openclaw/issues/91588):** 网关 OOM 内存泄漏（同上）。
*   **[P1 - 崩溃循环] [Issue #115326](https://github.com/openclaw/openclaw/issues/115326):** 熔断机制错误地永久封禁了 Discord/WhatsApp 频道，导致通道彻底断连。**状态：** 待处理。
*   **[P1 - 上下文丢失] [Issue #53408](https://github.com/openclaw/openclaw/issues/53408):** 在 15+ 轮深度对话后，`write` 和 `exec` 工具静默丢弃所有执行参数，导致 Agent 无法读写文件。**状态：** 无直接 Fix PR。
*   **[P1 - 会话死锁] [Issue #115908](https://github.com/openclaw/openclaw/issues/115908):** 高并发写入下，会话转录重建导致 Node 主线程死锁。

---

### 🗺️ 6. 功能请求与路线图信号
社区提出的 Feature Request 揭示了 OpenClaw 的下一步演进方向：
*   **全双工语音交互降低延迟：** [Issue #71195](https://github.com/openclaw/openclaw/issues/71195) 呼吁在 macOS Talk 模式中原生接入 OpenAI Realtime API (Speech-to-Speech)，以替代现有的 STT -> Chat -> TTS 链路，这将把语音交互延迟从秒级降至亚秒级。
*   **细粒度成本控制：** [Issue #13219](https://github.com/openclaw/openclaw/issues/13219) 要求提供原生、按模型拆分的 Token 消耗日志，显示用户对于多 Agent、多模型混搭时的运维成本敏感度正在上升。已有相关 PR 在推进。
*   **多租户支持：** [Issue #71058](https://github.com/openclaw/openclaw/issues/71058) 希望单个 OpenClaw 网关能同时挂载多个 Azure/Teams 机器人，暗示 OpenClaw 正在被 SME（中小企业）团队作为共享 AI 基础设施使用。

---

### 💬 7. 用户反馈摘要
从海量 Issue 中提炼出当前用户的三个核心体验痛点：
1.  **长程记忆与会话状态极其脆弱：** 用户反馈在进行重度工具调用（大量文件读写、Bash 执行）后，系统极易进入静默失败或状态锁死。Agent 常常“假装”执行了任务，但实际上工具参数被吞（Issue #53408）。
2.  **UI 信息架构难以配置：** 配置页面过于密集，被用户形容为“像原始配置文件的搬运工”（Issue #75947）。会话面板的排序逻辑混乱，心跳包等系统消息掩盖了真实用户的对话（Issue #51028）。
3.  **LLM 提供商集成鲁棒性不足：** 在使用 LiteLLM 代理或切换 Gemini 2.5 Pro / DeepSeek 等非原生 OpenAI 模型时，极易遇到 Auth 错误冷却（Issue #115642）、签名臃肿（Issue #48709）及降级兜底问题。

---

### ⚠️ 8. 待处理积压
以下重要 Issue 长期缺乏官方实质性代码修复，需维护者关注：
*   **[Issue #67777](https://github.com/openclaw/openclaw/issues/67777):** 子智能体在超时或清理孤儿进程时，其完成结果可能会被静默丢弃（创建于 4 月，活跃至今，被标记为 `clawsweeper-recovery-stuck`）。
*   **[Issue #50291](https://github.com/openclaw/openclaw/issues/50291):** 插件钩子缺失分布式追踪上下文（messageId, runId 等），导致多用户群聊场景下排障极其困难。
*   **[Issue #78493](https://github.com/openclaw/openclaw/issues/78493):** `sudo openclaw update` 导致的 Linux/macOS 文件权限混乱（root 与 user 权限混合），随后的 `doctor` 命令会直接覆盖用户原有配置文件。

---

## 横向生态对比

这份报告基于 2026 年 8 月 3 日主流开源 AI 智能体与个人助手项目的社区动态，为您提供深度的横向对比与生态洞察。

---

### 📊 2026.08.03 AI 智能体开源生态横向对比分析报告

#### 1. 生态全景
当前（2026年中后期），个人 AI 助手与自主智能体开源生态正全面跨越“基础原型验证期”，**深度迈入以“系统高可用、状态鲁棒性和执行安全性”为核心的工程化深水区**。各项目不再盲目追求功能堆砌，而是集中火力解决长会话下的状态丢失、内存泄漏、跨渠道连通性以及多租户隔离等生产级顽疾。同时，**MCP（模型上下文协议）和 A2A（Agent-to-Agent）等互操作性标准正在被各大框架密集采纳，成为生态融合的绝对共识**。

#### 2. 各项目活跃度对比
*活跃度评判标准综合了 Issue/PR 绝对数量、维护者响应速度及版本发布状态。*

| 项目名称 | 活跃状态 | 新增/活跃 Issues | PR 动态 (更新/合并) | 版本发布 | 健康度与阶段评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🟢 极度活跃 | 500+ | 500+ (合并 110) | v2026.7.2-beta.7 | **扩张期**：体量最大，重构与修 Bug 并行，存内存泄漏痛点。 |
| **ZeroClaw** | 🟢 极度活跃 | 50+ | 49+ (合并 1) | **v0.8.4** | **阵痛期**：大版本发布，但暴露出 CI 流水线阻断和严重的安全越权隐患。 |
| **Hermes Agent**| 🟢 高度活跃 | 50+ | 50+ (合并 21) | 无 | **提质期**：核心团队高效，重点优化 Token 浪费与 A2A 协议落地。 |
| **IronClaw** | 🟢 高度活跃 | 4 | 21 (合并 8) | 无 (预备发版) | **重构期**：推行底层解耦与重构，强抓 CI 门禁与上下文缓存优化。 |
| **NanoBot** | 🟡 中度活跃 | 0 | 9 (待合并 8) | 无 | **迭代期**：无新故障报告，专注内部代码清理与多模态接口适配。 |
| **NanoClaw** | 🟡 中度活跃 | 1 | 10 (合并 3) | 无 | **修复期**：聚焦底层数据库并发写风险修复与通讯渠道扩展。 |
| **PicoClaw** | 🟡 中度活跃 | 3 | 7 (合并 2) | 无 | **补漏期**：核心解决工具静默死循环，拓展 RAG 搜索生态。 |
| **CoPaw** | 🟡 中度活跃 | 2 | 4 (待合并 4) | 无 | **响应期**：快速响应弱网加载痛点，引入分页与压缩机制。 |
| **LobsterAI**| 🔴 低活跃度 | 0 (清理归档) | 0 (清理 2) | 无 | **停滞预警**：核心业务 PR 积压超 4 个月未合并，维护者出现缺位。 |
| **NullClaw /...**| ⚪ 不活跃 | 0 | 0 | 无 | 休眠状态。 |

#### 3. OpenClaw 在生态中的定位
*   **生态“流量”与“体量”双料标杆：** 作为日处理量唯一突破 500 Issue/PR 大关的项目，OpenClaw 拥有当前最大的开发者基盘。它已被部分 SME（中小企业）作为多租户共享基础设施使用。
*   **技术路线：高频交付与底层重构并行。** 相比其他项目的保守迭代，OpenClaw 敢于在短时间内进行大规模底层重构（如 `steipete` 主导的异步序列化重构），并高度依赖自动化机器人（`clawsweeper[bot]`）进行边缘修复。
*   **当前软肋对比：** 尽管 OpenClaw 规模最大，但其“长程记忆与会话状态”极其脆弱。相比 Hermes Agent 专注减少 Token 浪费、IronClaw 关注时间感知缓存，OpenClaw 目前正饱受网关内存泄漏（OOM）和上下文静默丢失（超 15 轮对话失效）的工程反噬。

#### 4. 共同关注的技术方向（行业共识）
从多项目的今日动态中，提炼出当前 AI Agent 工程界高度一致的四大诉求：
1.  **执行死循环与静默失败的防御机制**
    *   *涉及项目：OpenClaw, PicoClaw, Hermes Agent*
    *   *诉求：* 智能体在遇到 API 拒绝、工具执行报错或参数丢失时，极易陷入无限重试或静默崩溃。社区强烈要求引入“提前熔断”、“错误语义化广播”以及“重试次数硬限制”。
2.  **数据库并发与状态持久化（SQLite 痛点）**
    *   *涉及项目：OpenClaw, NanoClaw*
    *   *诉求：* 智能体在本地存储长程记忆和日志时重度依赖 SQLite，但在 Docker 跨挂载文件系统（VirtioFS）或高并发写入场景下，频繁引发死锁、OOM 和只读异常。引入 WAL 模式和单写者原则成为解法共识。
3.  **上下文窗口的成本与缓存控制**
    *   *涉及项目：IronClaw, Hermes Agent*
    *   *诉求：* 随着 Agent 运行时间拉长，Token 成本急剧攀升。项目急需细粒度的成本看板（按模型拆解）、以及显式的 `cache_control` 断点设置，以减少重复读取系统提示词带来的开销。
4.  **多 Agent 互操作与生态标准拥抱**
    *   *涉及项目：Hermes Agent (A2A), ZeroClaw (MCP), PicoClaw*
    *   *诉求：* 插件化支持 Google A2A 协议实现多智能体通信，以及深度集成 MCP Server 实现跨生态工具调用，已成为中大型 Agent 框架的标配演进路线。

#### 5. 差异化定位分析
*   **OpenClaw & ZeroClaw（重型基础设施派）：** 致力于打造全功能、多渠道（接入 SMS、Teams、Discord 等）、支持多租户的“AI 操作系统”。架构复杂，适合作为团队或企业的统一 AI 网关。
*   **Hermes Agent（效能与工具派）：** 极度聚焦于“智能体执行任务的效率”。强调文件读写的哈希校验、沙盒报错的自我纠偏，致力于打造不知疲倦、不浪费 Token 的自动化执行终端。
*   **NanoClaw & PicoClaw（轻量与通讯绑定派）：** 高度依赖 IM 渠道（如深度集成 Telegram）。强调轻量化部署，核心演进围绕 Bot 命令交互优化和按需的轻量级 RAG（如 Exa 搜索）接入。
*   **IronClaw（企业级重构派）：** 追求严苛的代码质量与安全性（如防范 SSRF、严格的 CI 覆盖率门禁），适合对安全合规和状态机一致性要求极高的金融或大型企业场景。

#### 6. 社区热度与成熟度
*   **狂飙突进的扩张期：** `OpenClaw`、`ZeroClaw`。项目迭代极快，新功能不断，但伴随大量 P0/P1 级别的阻塞性 Bug 和安全越权（如 ZeroClaw 的 Agent 归属域隔离缺失），社区处于边报错边修的高压状态。
*   **稳健提质的重构期：** `Hermes Agent`、`IronClaw`。核心维护团队表现克制且专业（如 Hermes 呼吁先建抽象基类再合并语音 PR），重心在于偿还技术债、提升测试覆盖率和优化底层 IO。
*   **敏捷响应的修补期：** `NanoBot`、`NanoClaw`、`CoPaw`。Issue 追踪器相对清净，一旦有边界场景 Bug（如弱网超时、包管理器兼容）出现，维护者能迅速且精准地提交 PR 闭环。
*   **维护断层预警：** `LobsterAI`。尽管有高质量的外部 PR（如前端渲染优化、数据库 N+1 查询修复），但官方长达数月未合并，存在极高的社区信任危机和技术栈落后风险。

#### 7. 值得关注的趋势信号（开发者参考）
1.  **“全双工语音”将颠覆交互范式：** 传统 `STT -> Chat -> TTS` 链路正被抛弃。OpenClaw 呼吁原生接入 OpenAI Realtime API，Hermes Agent 也在讨论 RealtimeVoiceProvider ABC。**亚秒级延迟的语音全双工交互，将是下半年个人 AI 助手的杀手级特性。**
2.  **“拒绝”也是一种工具权限：** ZeroClaw 的社区反馈指出，当人类操作员拒绝 Agent 执行某项工具时，仅仅传回 "Denied" 会导致模型产生幻觉并伪造执行结果。未来的 Agent 框架必须实现**“安全拒绝的语义回传”**，让模型理解“为何被拒”以及“下一步该做什么”。
3.  **底层状态机的防御性编程成为核心竞争力：** 未来的 AI 助手拼的不是“能接入多少个 LLM”，而是“在跑了 3 天 3 夜、调用了上千次工具后，内存不泄漏、上下文不锁死、定时任务不丢失”。对 asyncio 事件循环、Promise 缓存生命周期的精细管理（如 OpenClaw 今日的重构），将决定项目在生产环境的寿命。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-08-03 | **追踪仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 📊 今日速览
在过去 24 小时内，NanoBot 代码库活动显著回温，核心开发重点聚焦于**系统稳定性增强、多模型 Provider 兼容性修复以及 WebUI 交互优化**。今日共有 9 个 PR 更新（其中 8 个处待合并状态），且无任何新增 Issue（0 条）。这表明项目当前处于高度活跃的内部迭代阶段，开发者正集中精力清理积压代码与修复边界场景的 Bug，而非处理新的用户故障报告。

### 2. 🚀 版本发布
**本日无新版本发布 (0 Release)。**

### 3. 🏃‍♂️ 项目进展
今日项目代码大范围推进，重点修复了网关生命周期、大模型 API 响应解析等核心链路问题：
*   **Codex 推理去重合并/关闭**：关闭了历史遗留 PR [#4021](https://github.com/HKUDS/nanobot/pull/4021)。该 PR 解决了 `openai_codex_provider` 重复发送已接收的 `reasoning` 条目导致多轮对话中断（400 报错）的问题，提升了核心 Agent 对话链路的鲁棒性。
*   **WebUI 会话加载大幅提速**：PR [#5194](https://github.com/HKUDS/nanobot/pull/5194) 通过复用 WebUI 目录和缓存工作区快照，大幅加速了 JSONL 会话列表和线程的加载性能。
*   **子代理执行状态优化**：PR [#5152](https://github.com/HKUDS/nanobot/pull/5152) 修复了回归问题，现在能准确标记子代理的部分完成结果，并附加 `subagent_remaining_count` 元数据，防止主模型盲目推断未完成的任务。

### 4. 🔥 社区热点
由于今日 Issue 追踪器处于静默状态（0 新开/活跃 Issue），社区活动的重心完全转移到了代码贡献侧。
*   **高活跃度 PR**：[#5211](https://github.com/HKUDS/nanobot/pull/5211) 引入了备受期待的**跨会话搜索与提及功能**，允许 WebUI 用户通过 `@` 符合调用其他聊天记录的上下文，反映出用户对"AI 记忆与上下文联动"的强烈诉求。
*   **生态扩展**：贡献者 `octo-patch` 提交的 [#5212](https://github.com/HKUDS/nanobot/pull/5212) 增加了 MiniMax 音乐生成的工具合约发现机制，标志着 NanoBot 正在积极拓展其多模态（音乐生成）生态边界。

### 5. 🐛 Bug 与稳定性
今日提交的 PR 暴露了系统在多 Provider 支持与底层环境运行时的数个关键 Bug，按严重程度排列如下：

*   **[P1 严重] Provider API 响应体反序列化失败**：[PR #5214](https://github.com/HKUDS/nanobot/pull/5214)
    *   **问题**：通过 OpenAI Responses API 的对话会因目标类型反序列化错误（如期望 array 但收到 string）而彻底中断。
    *   **状态**：已提交修复，增加回退到 Chat Completions 的机制。
*   **[P1 严重] 网关停止时的资源泄漏与事件循环阻塞**：[PR #5215](https://github.com/HKUDS/nanobot/pull/5215)
    *   **问题**：在执行会话或 MCP 子进程运行时停止网关，会引发 asyncio 噪音（`RuntimeError: Event loop is closed`）甚至导致停止卡死。
    *   **状态**：已提交修复，确保在 stop 时确定性关闭 agent 资源。
*   **[P2 次要] Gemini Flash 图像配置报错**：[PR #5216](https://github.com/HKUDS/nanobot/pull/5216)
    *   **问题**：Gemini Flash 系列模型在传递宽高比或尺寸提示时，会触发 `HTTP 400 INVALID_ARGUMENT`。
    *   **状态**：已提交修复，通过 `generationConfig.imageConfig` 发送提示。
*   **[P2 次要] 插件安装环境兼容性问题**：[PR #5213](https://github.com/HKUDS/nanobot/pull/5213)
    *   **问题**：在未包含 `pip` 的 `uv tool` 环境中执行 `nanobot plugins enable` 失败。
    *   **状态**：已提交修复，当 `pip` 不可用时自动切换使用 `uv`。

### 6. 🗺️ 功能请求与路线图信号
基于今日合入及待合并的代码，可以看出项目未来版本的重点演进方向：
1.  **多智能体协同与上下文共享**：[#5211](https://github.com/HKUDS/nanobot/pull/5211) 标志着 NanoBot 正从一个单线对话助手，向具备上下文跨域检索能力的智能体中枢演进。
2.  **底层容错与降级机制**：[#5214](https://github.com/HKUDS/nanobot/pull/5214) 和 [#5213](https://github.com/HKUDS/nanobot/pull/5213) 表明项目正在加强在复杂网络和不同 Python 环境下的 graceful degradation（优雅降级）能力。
3.  **多模态能力增强**：[#5212](https://github.com/HKUDS/nanobot/pull/5212) 预示着后续版本将提供更丰富的非文本生成（音乐等）支持。

### 7. 💬 用户反馈摘要
虽然今日没有新开 Issue，但从提交 Bug 修复的场景中，我们可以提炼出当前用户在实际部署中遇到的痛点：
*   **多终端/环境部署痛点**：用户习惯使用现代化的包管理器（如 `uv`），但在开启插件时触发了系统依赖缺失的硬性报错，说明用户群中存在大量使用非标准 Python 环境的开发者。
*   **多模型切换的脆弱性**：用户在接入不同的主流模型（如 OpenAI Codex、Gemini Flash）时，极易遇到因 API 格式细微差异导致的崩溃（如 400 报错、JSON 解析失败），这是目前个人 AI 助手框架普遍面临的工程挑战。

### 8. ⏳ 待处理积压提醒
*   **PR 审核积压**：目前有 **8 个 PR** 处于 OPEN 状态待审核，其中包含 3 个标记为 P1 级别的核心修复（[#5215](https://github.com/HKUDS/nanobot/pull/5215), [#5214](https://github.com/HKUDS/nanobot/pull/5214)）。强烈建议维护团队优先 Review 并合并 P1 级别的修复，以尽快发布补丁版本，恢复网关与核心 API 调用的稳定性。

---
*数据驱动，洞见开源。本报告基于 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报**
**日期**: 2026-08-03
**数据来源**: [NousResearch/hermes-agent](https://github.com/Nousresearch/hermes-agent)

---

### 1. 今日速览
- **整体活跃度极高**：过去 24 小时内项目处理了 50 条 Issues 和 50 条 PRs（其中 21 个 PR 被合并或关闭），核心团队（特别是 `teknium1`）进行了密集的代码提交与问题修复。
- **核心基建优化**：今日的工作重心明显倾向于**提升底层工具的执行效率与可靠性**（涉及终端、文件读写、代码执行等），以减少 Agent 运行过程中的无效 Token 消耗和死循环。
- **多端协同修复**：针对 Desktop 桌面端、ACP/VS Code 客户端以及 Gateway 网关之间的会话状态同步问题进行了多轮修复，解决了多边形运行环境下的稳定性痛点。
- **安全与标准建立**：合入了 A2A（Agent-to-Agent）协议的核心支持，并针对密钥管理建立了严格的安全防范标准。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目在工具链优化、会话生命周期管理及协议支持方面迈出了一大步，核心合并的 PR 包括：
- **A2A 协议正式合入**：通过 [PR #41711](https://github.com/NousResearch/hermes-agent/pull/41711)，Hermes 实现了双向的 A2A 协议支持，且完全以插件形式实现，无需修改核心代码。
- **工具集效能与容错提升（批量优化）**：
  - [PR #77055](https://github.com/NousResearch/hermes-agent/pull/77055)：`write_file` 现在会在写入后校验磁盘哈希，直接返回 `verified: true`，避免了模型重复读取文件验证造成的 Token 浪费。
  - [PR #77095](https://github.com/NousResearch/hermes-agent/pull/77095)：优化了 `skill_view` 的去重机制，内容未变时仅返回短提示，单次可节省约 25k Token。
  - [PR #77102](https://github.com/NousResearch/hermes-agent/pull/77102) 与 [PR #77011](https://github.com/NousResearch/hermes-agent/pull/77011)：大幅改进了文件搜索的匹配容错（自动开启多行模式、零匹配路径纠错）。
  - [PR #77106](https://github.com/NousResearch/hermes-agent/pull/77106) 与 [PR #77017](https://github.com/NousResearch/hermes-agent/pull/77017)：为沙盒报错和终端拦截报错提供了明确的恢复建议，引导模型在下一步自我纠正。
- **后台任务与会话保活**：[PR #67533](https://github.com/NousResearch/hermes-agent/pull/67533) 和 [PR #77114](https://github.com/NousResearch/hermes-agent/pull/77114) 修复了 Desktop/TUI 会话切换导致后台委派任务（`delegate_task`）被误杀的问题。

### 4. 社区热点
- **A2A 协议支持的需求落地**：[Issue #514](https://github.com/NousResearch/hermes-agent/issues/514)（💬 25 👍 28）。Google 的 A2A 协议是近期热点，社区对 Agent 间的互操作性需求极高，该长文讨论带动了今天相关插件的最终合入。
- **核心工具性能追踪**：[Issue #77056](https://github.com/NousResearch/hermes-agent/issues/77056)（💬 2）。官方开设的追踪贴，明确指出了当前包含 12 个 PR 的性能批次，其核心诉求是“**减少模型浪费的工具轮次和引发混淆的错误**”，而非单纯的执行耗时。
- **RealtimeVoiceProvider 接口 RFC**：[Issue #77111](https://github.com/NousResearch/hermes-agent/issues/77111)。由于目前有 4 个关于实时 duplex-voice 的竞争性 PR，社区呼吁官方先建立抽象基类（ABC）而不是盲目合并，这反映了项目在扩展性设计上的严谨态度。

### 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，严重程度分布如下：
- **P1 / 高危级**:
  - **网关环境变量污染**：[Issue #37968](https://github.com/NousResearch/hermes-agent/issues/37968)。Cron 审批流隔离不当导致的安全问题（CVSS 3.1 评分 6.3，4.0 评分 7.0）。
  - **OpenAI Codex 令牌失效**：[Issue #70097](https://github.com/NousResearch/hermes-agent/issues/70097)。空闲配置跨周期使用时使用了被消费的 refresh_token，导致认证彻底死亡。
- **P2 / 中危级**:
  - **Desktop v0.19.0 状态栏丢失**：[Issue #73211](https://github.com/NousResearch/hermes-agent/issues/73211)。更新后失去了 YOLO 状态、上下文窗口指示器，严重影响运行时安全监控。
  - **UTF-8 文件误判**：[Issue #76886](https://github.com/NousResearch/hermes-agent/issues/76886)。v0.19.1 引入的回归 Bug，`read_file` 截断多字节字符时将正常文本误报为二进制文件。
  - **SSH 远程路径处理错误**：[Issue #75011](https://github.com/NousResearch/hermes-agent/issues/75011)。Desktop 的“在浏览器中打开”错误地将远程路径传给了本地 OS。
  - **Terminal 绝对路径阻断**：[Issue #76762](https://github.com/NousResearch/hermes-agent/issues/76762)。生命周期守护进程因空字节崩溃，阻断了所有使用绝对路径的命令。

### 6. 功能请求与路线图信号
通过今日的 Issue 提交和 PR 状态，可以识别出以下路线图信号：
- **Desktop 无障碍与系统级集成**：用户强烈要求桌面端支持开机自启（[Issue #38640](https://github.com/NousResearch/hermes-agent/issues/38640), [Issue #76897](https://github.com/NousResearch/hermes-agent/issues/76897)）以及字体自定义（如针对阅读障碍的 OpenDyslexic，[Issue #72485](https://github.com/NousResearch/hermes-agent/issues/72485)）。预计这几个成本低、收益高的特性会被快速纳入下一版桌面端更新。
- **插件体系的深度化**：[PR #58524](https://github.com/NousResearch/hermes-agent/pull/58524) 提出了 `classify_api_error` 钩子，表明第三方开发者希望进一步接管大模型提供商特有的错误处理逻辑，项目架构正在向更加插件化、解耦化的方向演进。

### 7. 用户反馈摘要
从大量长尾 Issue 中可以提炼出用户的几个核心真实痛点：
- **Token 与上下文浪费严重**：用户对 Agent 频繁读取相同文件、因报错不清晰而陷入死循环感到沮丧。今日官方合入的“校验写入”和“去重读取”直击此痛点。
- **本地与远程的状态错位**：随着 SSH backend、Docker 等模式的使用增多，路径不互通（如 [Issue #75011](https://github.com/NousResearch/hermes-agent/issues/75011)）和凭证池不共享导致的鉴权失败（[Issue #70292](https://github.com/NousResearch/hermes-agent/issues/70292)）是高端用户最常见的挫败感来源。
- **本地模型集成不够纯粹**：[Issue #70814](https://github.com/NousResearch/hermes-agent/issues/70814) 指出 Hindsight Memory 即便配置了本地 LLM，依然强依赖 API KEY，这引起了注重隐私和本地化部署用户的不满。

### 8. 待处理积压
以下较为重要的问题目前仍处于 Open 状态，需要维护者关注：
- **[Issue #26058](https://github.com/NousResearch/hermes-agent/issues/26058)**：`auto_thread` 的禁用破坏了合法的 Discord 使用场景（自 5 月提出，昨日再次活跃，需决策）。
- **[Issue #16004](https://github.com/NousResearch/hermes-agent/issues/16004)**：需要可配置的有限自动继续机制，以处理长时运行的任务（自 4 月提出，需决策）。
- **[PR #64945](https://github.com/NousResearch/hermes-agent/pull/64945)**：提取规范运行注册表的重构 PR，涉及核心网关逻辑（带有 `blast-moderate` 风险标签），审查进度停滞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-08-03  
**项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**分析领域**: AI 智能体与个人 AI 助手开源生态

---

### 1. 📈 今日速览
过去 24 小时内，PicoClaw 社区保持了高度活跃的状态，共更新了 **3 条 Issues** 和 **7 条 Pull Requests**。尽管今日没有发布新版本，但代码贡献呈现出“修复与扩展并重”的趋势：核心贡献者不仅提交了针对智能体死循环的关键修复，还引入了全新的 Exa 网络搜索提供商。此外，部分历史国际化（i18n）PR（如繁体中文）已顺利关闭/合并，项目正在稳步消化社区贡献，整体生态系统正向着更加稳定和多样化的方向迈进。

---

### 2. 🚀 版本发布
**本日无新版本发布 (0 个 Release)。**

---

### 3. 🔀 项目进展
今日共有 **2 个 PR 被关闭**，其中包含合并的进展，整体推动了项目的多语言支持与工作流优化：
*   **合并/关闭 PR #3261** [Feat/auto pr](https://github.com/sipeed/picoclaw/pull/3261): 由 `PeterDaveHello` 贡献的繁体中文（zh-TW）本地化翻译已处理完毕。这标志着 PicoClaw 的 WebUI 和文档在亚太地区（特别是台湾地区）的本地化体验得到了显著完善。
*   **关闭 PR #3310** [Feat/auto pr](https://github.com/sipeed/picoclaw/pull/3310): 由 `j-v` 提交的自动化工作流相关 PR 已关闭。

*待合并储备*：目前仍有 5 个待合并的 PR 处于活跃或审查状态（包含安全加固、Bug 修复和新提供商），为下一个版本的发布积累了实质性内容。

---

### 4. 🏞️ 社区热点
今日的讨论与互动主要围绕**工具集成边界**与**外部服务扩展**展开：
*   **Issue #3298** [[Feature] Add AI Router as an OpenAI-compatible provider preset](https://github.com/sipeed/picoclaw/issues/3298)
    *   **动态**: 7-26 创建，今日有新评论（共 1 条）。
    *   **分析**: `airouter-dev` 希望将 AI Router 作为预设提供商集成。这反映出 PicoClaw 用户对于**无缝接入多模型聚合路由（LLM Gateway）**有强烈需求，用户倾向于不用手动配置复杂的 `api_base` 即可快速切换底层模型。
*   **PR #3299** [Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)
    *   **动态**: 活跃审查中。
    *   **分析**: `kesku` 贡献了 Exa（前 Metaphor）的原生搜索接入。对于 AI 智能体而言，高质量的网页检索能力是核心生产力工具，社区在 RAG 和联网搜索生态上的拓展非常积极。

---

### 5. 🐛 Bug 与稳定性
今日报告了一个**影响智能体执行死锁的严重 Bug**，已有对应修复 PR 提交：
*   **[严重] Issue #3311**: [Repeated identical tool failure loops silently to max_tool_iterations](https://github.com/sipeed/picoclaw/issues/3311)
    *   **现象**: 当工具调用（如执行 `git` 命令）因相同错误（如无权限/无凭证）失败时，智能体会陷入静默死循环，不断重试直到达到 `max_tool_iterations`（最大工具迭代次数），导致 Telegram 端用户长时间无响应且得不到答案。
    *   **修复状态**: ✅ **已有 Fix PR** -> [PR #3312: fix(agent): stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)。该 PR 提出了“提前终止失败轮次”的逻辑。
*   **[中等] Issue #3294**: [/list models only shows the current model](https://github.com/sipeed/picoclaw/issues/3294)
    *   **现象**: 在 Telegram 中使用 `/list models` 命令时，只显示当前使用的模型，而非 `model_list` 中配置的所有模型。属于交互指令的预期不符，目前尚无直接修复 PR。

---

### 6. 🗺️ 功能请求与路线图信号
综合今日的 Issue 和 PR，可以捕捉到 PicoClaw 在 **“安全与控制”** 和 **“生态集成”** 上的演进信号：
1.  **安全边界强化**: [PR #3297](https://github.com/sipeed/picoclaw/pull/3297) 提交了针对远程提示和执行边界的加固。这符合 AI Agent 安全方位的最佳实践——默认禁用远程执行，强制要求每次调用的独立批准。这极有可能会改变现有的 Schema（迁移至 v4），并可能成为下个大版本的重要安全特性。
2.  **搜索能力多元化**: [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) 提供了除传统搜索引擎外的 Exa 语义搜索接入，预示着项目正在向具备高级研究能力的 Assistant 演进。
3.  **模型提供商预设池扩大**: 基于 [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298) 的诉求，下一版本可能会增加更多 OpenAI 兼容的预设网关（如 AI Router），降低用户的接入门槛。

---

### 7. 💬 用户反馈摘要
从今日的 Issue 互动中，可以提炼出以下用户痛点与使用场景：
*   **依赖 Telegram 作为主交互端**: 多个 Bug 报告（#3311, #3294）均来自 Telegram 渠道的生产环境反馈，说明 PicoClaw 被大量用户用作 Telegram Bot 后端的 AI 助手。命令解析的正确性和消息回馈的即时性对用户体验至关重要。
*   **多模型/多渠道管理的割裂感**: 用户配置了复杂的 `model_list`，但前端展现（如 `/list models`）未能跟上，说明用户正在将其用于需要频繁切换模型的高级场景，UI/CLI 与配置底层的同步还存在瑕疵。
*   **静默失败的挫败感**: Issue #3311 揭示了用户对于 Agent “转圈但无反馈”的零容忍。Agent 在遇到死胡同时，需要具备自我诊断并显式抛出错误摘要的能力。

---

### 8. ⏳ 待处理积压
系统检测到多条带有 `[stale]` 标签的重要 Issue/PR，建议维护团队关注并推进 Review 或合并：
*   **[PR #3297]** [fix(security): harden remote prompt and exec boundaries](https://github.com/sipeed/picoclaw/pull/3297) - 涉及核心安全更新和配置迁移，建议尽快定稿。
*   **[PR #3295]** [fix(channels): prevent SplitMessage hang on oversized fence headers](https://github.com/sipeed/picoclaw/pull/3295) - 修复了代码块过大导致的消息分割挂起问题，对频道稳定性有积极影响。
*   **[PR #3296]** [i18n: complete Czech code wrap labels](https://github.com/sipeed/picoclaw/pull/3296) - 捷克语国际化补充，属于易合并的低风险 PR。
*   **[Issue #3298]** [Add AI Router preset](https://github.com/sipeed/picoclaw/issues/3298) - 提供者已表明愿意自行贡献代码，建议官方给出明确的接受/拒绝意向。

---
*数据驱动洞察 | PicoClaw 开源项目观察站*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报
**日期**: 2026-08-03 | **项目**: [nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

### 1️⃣ 今日速览
过去 24 小时内，NanoClaw 保持了高度活跃的研发态势，共处理了 10 个 PR 更新（包含 3 个关闭/合并，7 个待处理）以及 1 个关键的底层 Bug 报告。核心团队与社区开发者正将重心放在**底层架构稳定性优化**（如数据库并发写入风险修复）与**通讯渠道生态扩展**上。虽然本日无新版本发布，但多项核心代码重构与新渠道接入已进入最后合并冲刺阶段，项目整体处于极其健康的快速迭代期。

---

### 2️⃣ 版本发布
**本日无新版本发布。**

---

### 3️⃣ 项目进展
今日项目主要在底层稳健性、CI/CD 流程及渠道适配层取得了实质性推进：

*   🔴 **修复底层架构违背单写者原则的隐患**: PR [#3175](https://github.com/qwibitai/nanoclaw/pull/3175) 将指令拦截器的拒绝消息路由从直接写入 `outbound.db` 改为通过 delivery adapter 处理，严格遵守了数据库单写者不变量，排除了潜在的数据库损坏风险。
*   🔴 **修复发布流水线读取问题**: 核心团队关闭了 PR [#3176](https://github.com/qwibitai/nanoclaw/pull/3176) `fix(release): retry post-publish readback`，提升了自动化发布的稳定性。
*   🟢 **清理过时的 Qodo 技能模块**: PR [#3172](https://github.com/qwibitai/nanoclaw/pull/3172) 重构并移除了两个不再需要的技能，精简了系统架构。
*   🔴 **清理长期阻塞的陈旧 PR**: 关闭了自 2 月份起处于阻塞状态的 Telegram 功能增强 PR [#301](https://github.com/qwibitai/nanoclaw/pull/301)，以及针对 macOS Signal 服务重启静默失败的 PR [#2626](https://github.com/qwibitai/nanoclaw/pull/2626)。

---

### 4️⃣ 社区热点
目前社区最大的关注点集中在**多平台容器化部署中的数据持久化与底层 IO 冲突**。

*   📈 **Docker 生态下的严重适配问题**: 今日新开的 Issue [#3177](https://github.com/qwibitai/nanoclaw/issues/3177) 直击痛点。开发者在 macOS/Linux 环境使用 Docker 跨挂载文件系统时，由于底层文件系统同步机制的问题，导致会话数据库发生严重的锁争用。
*   💡 **分析**: 结合今日提交的多个修复数据库 IO 和写权限的 PR（如 #3175），可以看出 NanoClaw 作为一个重度依赖本地 SQLite 进行上下文管理的 AI 框架，其用户群体已大规模转向 Docker 容器化部署。社区对跨平台文件系统的无缝兼容有着强烈的诉求。

---

### 5️⃣ Bug 与稳定性
今日报告了影响生产环境稳定性的关键问题，按严重程度排列如下：

*   🔴 **[P0/极高] Docker 跨挂载文件系统导致会话数据库锁死**
    *   **问题**: Issue [#3177](https://github.com/qwibotai/nanoclaw/issues/3177) 指出，SQLite 的 DELETE 日志模式在 VirtioFS 等跨挂载文件系统中无法正确传播。
    *   **影响**: 产生了超过 29,000 次只读错误，并导致间歇性的消息投递失败。
    *   **状态**: 暂无对应的 fix PR，亟待解决。
*   🟠 **[P1/高] 命令拦截器违规写入导致数据库损坏风险**
    *   **问题**: 绕过 `session-manager` 直接向 `outbound.db` 插入数据。
    *   **修复**: 已在 PR [#3175](https://github.com/qwibotai/nanoclaw/pull/3175) 中修复。

---

### 6️⃣ 功能请求与路线图信号
从活跃的待合并 PR 中，我们可以清晰看到项目接下来的演进路线：

*   📡 **多渠道扩展**:
    *   PR [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) & [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) 正在引入 **Dial** 适配器，支持 SMS 短信与 **AI 语音通话**，这是个人 AI 助理向传统通讯网络延伸的重要信号。
    *   PR [#2625](https://github.com/qwibitai/nanoclaw/pull/2625) 正在修复 Microsoft Teams 的文件上传支持能力，强化企业级办公场景。
*   🌐 **高级外部工具集成**:
    *   PR [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) 增加了对**远程 Streamable HTTP MCP (Model Context Protocol) 服务器**的支持，这将极大拓展 AI 调用外部工具的边界与灵活性。
*   📝 **上下文管理优化**:
    *   PR [#3090](https://github.com/qwibotai/nanoclaw/pull/3090) 优化了模板顶层的 Markdown 上下文处理，有望提升大语言模型对系统提示词的理解精度。

---

### 7️⃣ 用户反馈摘要
根据今日 Issue 数据挖掘，核心用户痛点如下：
*   **痛点**: 期望将项目无缝部署到 macOS (Docker Desktop) 或基于 Linux 的 NFS 挂载卷中，但底层的 SQLite 行为在容器映射下表现不一致。
*   **真实场景**: 开发者试图通过 Docker 卷在宿主机和容器之间共享会话状态或持久化聊天记录，但导致了严重的锁竞争（甚至将数据库降级为只读），完全阻断了消息流的处理。

---

### 8️⃣ 待处理积压
提醒维护者关注以下存在积压或需要二次审查的关键节点：

1.  ⏳ **Issue [#3177](https://github.com/qwibitai/nanoclaw/issues/3177) (Docker 文件系统锁争用)**: 紧急且影响范围广。建议评估是否需要全局开启 SQLite 的 WAL (Write-Ahead Logging) 模式，或者提供容器持久化目录的最佳实践指南。
2.  ⏳ **PR [#2625](https://github.com/qwibitai/nanoclaw/pull/2625) (Teams 文件上传支持)**: 自 5 月底开启后一直处于待合并状态，今日有更新活动。建议核心团队尽快 Review 并合并，以补全企业版通讯的功能闭环。
3.  ⏳ **PR [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) / [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) (Dial 渠道接入)**: 这是一组庞大且关联的功能 PR，包含底层的代码修改和技能生成。需确认 API 合规性后推进合并进度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-08-03)**

**1. 今日速览**
IronClaw 项目今日保持高度活跃的开发势头，过去 24 小时内处理了 21 个 PR（其中 8 个顺利合并/关闭）和 4 个 Issue 更新。项目目前正处于以“Reborn”为核心的大规模架构重构阶段，通过端口倒置和依赖解耦大幅提升系统的可维护性。此外，核心开发团队高度聚焦于 AI 智能体的上下文缓存优化与底层 CI 效率的提升，展示了项目在性能调优和质量把控上的严谨态度。

**2. 版本发布**
*今日无新版本发布。*
*注：当前有一个待合并的发版 PR ([#5598](https://github.com/nearai/ironclaw/pull/5598))，准备将 `ironclaw_common` 和 `ironclaw_skills` 升级至包含破坏性变更的次版本更新，预计将在近期合入主干。*

**3. 项目进展**
今日项目在**架构重构**、**性能优化**与**CI 基建**三个维度取得了重大进展：
*   **架构重构（Reborn 计划）：** 由开发者 BenKurrek 推进的 "Wave 2 port-inversion" 栈今日顺利完成合并。四个独立的 XL 级重构 PR（[#7000](https://github.com/nearai/ironclaw/pull/7000), [#7003](https://github.com/nearai/ironclaw/pull/7003), [#7004](https://github.com/nearai/ironclaw/pull/7004), [#7005](https://github.com/nearai/ironclaw/pull/7005)）已关闭，并被整合进入超集 PR [#7018](https://github.com/nearai/ironclaw/pull/7018)。此举成功解开了产品模块的命名陷阱，并实现了 `extension_manager` 的有效拆分，大幅降低了系统模块间的耦合。
*   **CI 质量门禁：** 今日关闭了多个基建优化 PR，包括恢复 90% 变更代码覆盖率门禁的 [#7013](https://github.com/nearai/ironclaw/pull/7013)、基于受影响范围精准运行测试的 [#6952](https://github.com/nearai/ironclaw/pull/6952)，以及为合并队列失败增加 Slack 告警的 [#7007](https://github.com/nearai/ironclaw/pull/7007)。
*   **AI 性能优化：** 开发者投入大量精力处理大模型调用的缓存命中问题，[#7001](https://github.com/nearai/ironclaw/pull/7001) 和 [#6997](https://github.com/nearai/ironclaw/pull/6997) 正在通过稳定字节级系统前缀和显式设置 Anthropic `cache_control` 断点，来消除对话过程中昂贵的缓存失效问题。

**4. 社区热点**
*   **缓存边界与时序感知讨论：** Issue [#7012](https://github.com/nearai/ironclaw/issues/7012) 提出了关于“时间感知与缓存抖动”的深入探讨。核心诉求是在不破坏大模型 Prompt 缓存的前提下，如何让 AI 智能体具备精确的运行时时间感知能力。这反映了高级开发者对 AI 执行环境延迟和成本控制的极致追求。
*   **Bug 修复反馈闭环：** Issue [#7015](https://github.com/nearai/ironclaw/issues/7015) 报告了质押页面的 UI 缺陷，尽管用户最初未能提供截图，但该 Issue 迅速得到了响应并已于当日关闭，体现了维护者对前端交互体验的重视和高效的沟通。

**5. Bug 与稳定性**
今日收到的关键 Bug 集中在**网络传输安全**与**并发状态管理**：
*   **[P1/高] 代理环境变量绕过 DNS 绑定保护：** Issue [#7016](https://github.com/nearai/ironclaw/issues/7016) 指出，网络传输层默认未禁用系统代理。如果环境中存在 `HTTP_PROXY` 等变量，将直接绕过现有的 DNS 重新绑定保护机制，带来潜在的 SSRF 或内网穿透风险。*(暂无关联 Fix PR，需紧急关注)*
*   **[P1/高] 交付状态并发覆盖：** Issue [#7017](https://github.com/nearai/ironclaw/issues/7017) 报告了交付协调器中的逻辑漏洞。在进行中断恢复时，代码无条件写入 `Unknown` 状态，可能会错误覆盖掉那些已经并发完成的 `Delivered` 状态。*(暂无关联 Fix PR，需紧急关注)*
*   **[P2/中] 前端 UI 缺陷：** Issue [#7015](https://github.com/nearai/ironclaw/issues/7015) 质押页 UI 异常。*(已修复并关闭)*

**6. 功能请求与路线图信号**
*   **API 显式缓存控制：** 正在进行的 PR [#6997](https://github.com/nearai/ironclaw/pull/6997) 不仅是 Bug 修复，更是为支持更长上下文智能体奠定基础的功能增强，这表明下个大版本将重点优化 Token 消耗成本和响应延迟。
*   **资源预算控制闸门：** 开发中的 XL 级 PR [#5982](https://github.com/nearai/ironclaw/pull/5982) 引入了“预算批准作为阻塞门”的功能，说明 IronClaw 正在为企业级场景构建细粒度的资源消费限制与用量看板，这将成为未来版本的核心商业特性之一。

**7. 用户反馈摘要**
从近期的 Issue 提交可以看出：
*   **痛点：** 用户/开发者在处理智能体循环和消息队列时，对状态机的健壮性有极高要求，当前的并发处理（如 Issue #7017）仍会导致状态不一致。同时，安全研究人员对网络层的默认配置极为敏感。
*   **期望：** 核心贡献者期望框架能原生处理 LLM 上下文缓存（如 Issue #7012），而不是以牺牲框架特性（如时间感知）来换取 Token 缓存的折扣，渴望在“高智能”与“低成本”之间取得平衡。

**8. 待处理积压**
*   **Postgres API 性能回归修复：** PR [#6973](https://github.com/nearai/ironclaw/pull/6973) 自 7 月 31 日创建以来处于积压状态。数据显示 API 的 p95 延迟从 3.74s 严重退化至 12.0s（跌幅超 300%），此性能衰退严重阻碍了生产环境的可用性，强烈建议维护者优先 Review 并合入。
*   **待合并发版：** PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 作为发版 PR 已开启一个月，积累了多项依赖和 API 的破坏性变更，需要评估是否需要发布预发布版本以配合下游生态适配。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 LobsterAI 项目 2026-08-03 的动态日报：

### 📈 1. 今日速览
LobsterAI 过去 24 小时整体处于**低活跃度与积压清理**状态。今日无新版本发布，核心社区的焦点主要集中在历史遗留任务的归档与清理上（关闭了 2 个长期未活动的 Issue 和 2 个自动化依赖 PR）。值得警惕的是，项目内仍有 4 个涉及核心性能优化、IM 通信机制修复和定时任务体验改进的重要 PR 长期处于 Open 状态等待合入，项目维护者近期的活跃度可能有所下降，需关注其后续的研发节奏。

---

### 🚀 2. 版本发布
**无**。过去 24 小时及近期均无新版本发布。

---

### 🛠 3. 项目进展
今日项目主要推进了**历史陈旧任务的过滤与关闭**，实际业务代码逻辑未发生合并级别的向前迈进：
*   **PR 清理**：自动化的依赖更新 PR 被集中关闭，包括 `concurrently` 从 8.2.2 升级到 9.2.1 ([PR #1285](https://github.com/netease-youdao/LobsterAI/pull/1285)) 以及 `tailwindcss` 从 3.4.19 到 4.2.2 的升级 ([PR #1286](https://github.com/netease-youdao/LobsterAI/pull/1286))。这可能意味着维护者正在手动接管依赖管理或拒绝了此次跨大版本的自动升级。
*   **待合并的业务进展（停滞）**：虽然没有新的合并，但有 4 个极具价值的待合并 PR 仍处于挂起状态，它们是项目向前迈进的潜在动力（详见第 8 部分）。

---

### 🔥 4. 社区热点
今日被关闭的陈旧任务反映了社区早前的一段活跃讨论期，主要集中在**前端体验优化与长内容处理**：
*   **长代码块折叠功能需求** ([Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289))：开发者在使用中深受 AI 生成超长代码块（几十到上百行）导致页面冗长的困扰。用户 `MaoQianTu` 详细提出了为 `CodeBlock` 组件增加自动折叠/展开功能的建议，以改善长内容可读性。这反映出用户对 AI 助手客户端的 UI/UX 信息密度处理有着较高的诉求。

---

### 🐛 5. Bug 与稳定性
今日无新报告的 Bug。历史 Bug 记录中包含以下值得注意的稳定性问题：
*   **【中等严重】运行过程中偶发网关重启** ([Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217))：Windows 10 环境下（版本 2026.3.26），系统偶发重启网关（一天可能出现 3-5 次），打断了正常的使用流程。目前该 Issue 处于 Open 状态。
*   **【低严重/已被关闭】IM机器人鉴权校验缺失** ([Issue #1287](https://github.com/netease-youdao/LobsterAI/issues/1287))：在对 Popo 进行连通性测试时，即使填入全假的凭据（appkey、appsecret、aes key 全填 1）也能通过测试，存在校验漏洞。该问题已于今日被标记关闭。

---

### 💡 6. 功能请求与路线图信号
*   **UI 交互体验优化信号**：来自 [Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289) 的信号表明，客户端在应对大段 AI 输出时，需要更敏捷的渲染策略和折叠机制。
*   **列表排序与状态可视化**：来自 [PR #1218](https://github.com/netease-youdao/LobsterAI/pull/1218) 的信号显示，定时任务和会话列表的排序逻辑需要从“依赖底层 UUID”向“依赖创建时间/执行时间”转变。这些 PR 虽然不是今天提出的，但如果被采纳，将成为下一版本客户端体验提升的核心。

---

### 🗣 7. 用户反馈摘要
从现有的 Issues 和 PR 描述中，可以提炼出用户的几个核心痛点：
1.  **多平台配置失效**：用户在配置钉钉、Telegram 等平台 IM 机器人时，修改系统提示词或密钥后无法生效（[PR #1215](https://github.com/netease-youdao/LobsterAI/pull/1215) 背景）。
2.  **高频交互卡顿**：在流式输出或消息高频更新时，会话列表和详情页会出现明显的无效重渲染，导致前端性能下降（[PR #1219](https://github.com/netease-youdao/LobsterAI/pull/1219) 背景）。
3.  **列表操作不符合直觉**：用户新建定时任务时，由于后端按 UUID 排序，新任务会随机出现在列表中间，导致用户难以找到自己的新建项，产生极大的困惑（[PR #1218](https://github.com/netease-youdao/LobsterAI/pull/1218) 背景）。

---

### ⚠️ 8. 待处理积压
维护者需要高度关注以下被积压的高质量社区贡献，这些 PR 已经准备好但长期未被 Review/合并：
1.  **[PR #1215](https://github.com/netease-youdao/LobsterAI/pull/1215) - IM Handler 重建修复**：修复了特定平台保存配置时不刷新 Chat Handler 的严重逻辑漏洞。
2.  **[PR #1218](https://github.com/netease-youdao/LobsterAI/pull/1218) - 定时任务列表排序重构**：解决新建任务随机排布的 UX 灾难。
3.  **[PR #1219](https://github.com/netease-youdao/LobsterAI/pull/1219) - 前端渲染性能优化**：通过引入 `React.memo` 和优化 `useSelector` 消除无效重渲染。
4.  **[PR #1220](https://github.com/netease-youdao/LobsterAI/pull/1220) - 数据库查询性能优化**：消除了获取会话最新消息摘要时的 N+1 查询问题。

*注：以上 4 个 PR 均在 4 月初提交，至今已滞留近 4 个月，建议维护团队尽快安排 Code Review 介入，以免流失核心社区贡献者。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 **CoPaw (QwenPaw)** 项目动态日报（2026年8月3日）：

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-08-03)

### 1. 今日速览
- **整体活跃度**：项目在昨日（8月2日）展现出极高的维护效率与社区活跃度。核心贡献者 `BlackBox-Labs` 集中输出了 4 个针对系统稳定性和兼容性的修复补丁（PR），开发节奏紧凑。
- **社区反馈聚焦**：用户 `Moonlit-Pages` 提交了关于弱网环境下控制台加载失败的严重 Bug 报告，这些问题深刻暴露了当前前后端交互中缺乏分页与数据压缩机制的短板。
- **问题解决效率**：社区反馈与官方修复形成了完美的“汇报-修复”闭环，提交的 4 个 PR 精准对位了近期积压的 Issue（涵盖性能、模型兼容、状态同步等），项目整体处于健康、快速迭代的上升期。

### 2. 版本发布
- **今日无新版本发布**（0 个 Releases）。考虑到当前有 4 个重要的基础架构修复 PR（如分页机制、GZip 压缩）正处于待合并状态，预计项目将在这些 PR 合并后推发新的补丁版本。

### 3. 项目进展
尽管今日没有 PR 被正式合并（4 个 PR 均为 Open 状态），但这些待审 PR 展现了项目在底层优化上的重要进展：
*   **网络与性能底层重构**：[#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) 为聊天记录 API 引入了分页和 GZip 压缩机制；[#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) 剔除了技能列表 API 中冗余的全文内容。这两个 PR 将从根本上重塑数据传输逻辑，大幅降低带宽需求。
*   **状态持久化修复**：[#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) 修复了插件来源的技能标签在重启后会丢失的问题，完善了本地配置与系统同步的逻辑。
*   **模型提供商对齐**：[#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) 修复了阿里云 coding plan 的模型列表，移除了不支持的 `glm-5.x` 并新增了 `qwen3.7-plus`，确保国内用户的 API 调用成功率。

### 4. 社区热点
今日最火热的互动集中在弱网环境下的系统可用性崩溃问题：
*   **热点 Issue**：[#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) 与 [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)
*   **深度分析**：用户 `Moonlit-Pages` 连续提交了两个高优的 Bug 报告，直指系统当前的一个设计缺陷——前端写死了 30 秒的 Fetch 超时，而后端 API（如 `/api/skills` 和 `/api/chats`）会一次性返回 MB 级别的未压缩全量数据。
*   **背后诉求**：这反映出 CoPaw 随着使用深度的增加，用户积累的对话记录和技能库体积会迅速膨胀。早期“一把梭”的全量拉取策略已无法满足生产环境或复杂场景的需求，社区迫切需要向企业级标准（分页、按需加载、数据压缩）演进。

### 5. Bug 与稳定性
按严重程度排列今日报告及处理的 Bug：
1.  **[P0 严重 - 弱网/大数据量导致控制台宕机] [已有 Fix PR]**
    *   **表现**：当 API 负载无法在 30 秒内传完时，技能池和工作空间页面直接崩溃无法加载。
    *   **修复 PR**：[#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) (排除列表全文字段), [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) (增加分页和压缩)。
2.  **[P1 高 - 技能标签状态丢失] [已有 Fix PR]**
    *   **表现**：在 UI 中设置好的 Skill tags，在 QwenPaw 重启后直接消失。
    *   **根因**：`reconcile` 函数粗暴地清除了找不到本地目录的清单条目。修复 PR: [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632)。
3.  **[P1 高 - API 模型调用报错] [已有 Fix PR]**
    *   **表现**：阿里云 coding plan 用户遭遇 'model unknown' 错误，部分通义千问模型缺失。修复 PR: [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631)。

### 6. 功能请求与路线图信号
*   **隐性的架构升级信号**：虽然近期用户反馈多为 Bug Report，但基于提交的 PR 来看，**“前后端数据交互的轻量化”**已成为项目下一阶段的重点路线。将大体积的 Markdown 文件从列表查询接口中剥离，意味着 CoPaw 正在为支持更大规模的 Skill 库做架构准备。
*   **下一版本预测**：下一版大概率将围绕“网络传输健壮性”和“国内大模型 API 的精准适配”发布 Minor 版本更新（如 v2.0.2）。

### 7. 用户反馈摘要
*   **真实痛点**：部分重度用户（拥有长对话历史或丰富技能库）在使用时面临极高的网络敏感度。30秒的超时阈值对于几兆大小的未压缩纯文本来说过于苛刻，导致体验降级。
*   **使用场景**：涉及复杂工作流的自动化处理时，用户往往配备了大量基于 Markdown 编写的 Skill 说明书，这导致首屏加载时的 API 请求极其庞大。
*   **满意度**：尽管遭遇阻塞性 Bug，但 Issue 提交者描述详尽、逻辑清晰，显示了高阶开发者对项目的期待与信心；维护团队的秒级响应响应 PR 也展示了极高的专业度和责任感。

### 8. 待处理积压
当前需要维护者 `agentscope-ai` 团队重点关注并推进 Code Review 的 Pull Requests（均处于 Open 待合并状态）：
*   **核心性能修复 PR 审查**：[#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) 和 [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) 正在阻塞等待合并，这决定了重度用户能否正常打开控制台。
*   **旧 Issue 的关联关闭**：PR [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) 和 [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) 分别关联了 Issue #6537 和 #6551，合并后应同步检查并关闭相关历史遗留 Issue，清理积压面板。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期**：2026-08-03
**数据统计周期**：过去 24 小时

---

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了极高的社区热度与工程迭代速度。项目一日内达成了** v0.8.4 稳定版**的发布里程碑，涵盖 49 位贡献者的 262 次提交。然而，新版本的发布也暴露了一些基础设施与流水线问题，导致 **50 个新开/活跃的 Issue 全部处于未关闭状态**，且 49 个待合并 PR 亟待维护者 Review。整体来看，项目处于“架构大刀阔斧重构”与“多渠道/内存控制面快速演进”的阵痛与红利并存期，社区对 Agent 安全边界（沙箱、工具权限）的诉求显著上升。

---

## 2. 版本发布
### ✨ ZeroClaw v0.8.4 (维护与强化版本)
- **发布概况**：一次重点聚焦于系统强化和生产环境可用性提升的维护版本。
- **核心更新**：
  - **控制面扩展**：大幅扩展了内存（Memory）与标准作业程序（SOP）的控制平面能力。
  - **可靠性与网关**：改进了模型提供方和渠道的可靠性，强化了沙箱与凭证的安全边界。
  - **发布管线与桌面端**：改进了桌面端应用体验及发布流水线，并首次将工作区成功发布至 `crates.io`（见 [PR #9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)）。
- **已知升级风险/阻碍**：因 Rust MSRV (最低支持版本) 提升至 1.96.1，导致基于 StageX (内含 Rust 1.95.0) 的 `all-features` Docker 镜像发布失败（详见 [Issue #9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676)）。升级或拉取镜像时需注意环境兼容性。

---

## 3. 项目进展
尽管过去 24 小时内合并的 PR 仅有 1 个，但主分支推进了极其关键的底层重构与凭证安全修复：
- **完成 crates.io 发布准备**：[PR #9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) 成功将核心包更名并推送到 crates.io，完成了微内核拆分以来的重要闭环，用户即将可以通过 `cargo install zeroclaw` 直接安装。
- **底层代码瘦身与清理**：[PR #9673](https://github.com/zeroclaw-labs/zeroclaw/pull/9673) 清理了 36 个不可达的渠道兼容代码文件，核心运行时进一步精简。
- **安全漏洞依赖修复**：[PR #9671](https://github.com/zeroclaw-labs/zeroclaw/pull/9671) 修复了 Nostr 协议库的多个安全漏洞（RUSTSEC 告警）。
- **守护进程目标任务强化**：[PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) 实现了在守护进程热重载期间，保持 `Running` 状态的 Goals 任务不被中断。

---

## 4. 社区热点
当前社区讨论极度聚焦于**项目治理、底层架构 RFC（意见征求）以及渠道集成**：
1. 🏆 **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) - RFC: Work Lanes, Board Automation... (17 评论)**
   - **背景**：由于项目规模扩大，维护者正推进工作泳道与标签自动化治理，旨在降低 Issue 路由的成本，社区正积极对齐发布节奏。
2. 🏆 **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) - RFC: ZeroClaw Chat Completions profile (14 评论)**
   - **背景**：用户强烈要求 ZeroClaw 原生支持 OpenAI Chat Completions 协议，以便无缝接入 Open WebUI、LobeChat、LangChain 等主流生态。
3. 🏆 **[Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) - RFC: 权威内存与可选富化连接器解耦 (11 评论)**
   - **背景**：探讨是否应将 Lucid 等工具从“底层存储后端”降级为“可选的数据增强连接器”，以明确系统边界。
4. 🏆 **[Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) - RFC: 保持 ZeroClaw 核心轻量化 (10 评论)**
   - **背景**：长尾集成功能应通过 MCP Server、插件或 CLI 外挂实现，避免核心代码膨胀。

---

## 5. Bug 与稳定性
今日报告了大量高危（S0/S1 级）安全与逻辑 Bug，集中在**多 Agent 权限越权**和**多模态解析**：
| 级别 | Issue | 描述与状态 |
| :--- | :--- | :--- |
| **S0 (极高)** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | **会话/频道读写工具缺乏 Agent 归属域隔离**：任意 Agent 可通过伪造参数读取/操控其他 Agent 的历史会话和 Discord 数据。已被接受。 |
| **S0 (极高)** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **知识图谱缺乏 Agent 归属域**：全局共享的知识图谱允许任何 Agent 篡改其他 Agent 捕获的知识。已被接受。 |
| **S1 (高)** | [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) | **多模态提供商凭证解析失败**：迁移后的 `vision_model_provider` 在通过 OpenRouter 调用时，无法解析带密钥的提供商，阻断图像输入。 |
| **S1 (高)** | [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | **拒绝语义丢失**：当操作员拒绝工具调用时，模型仅收到无语义的三个单词，导致模型产生幻觉并伪造拒绝原因。（修复见 [PR #9423](https://github.com/zeroclaw-labs/zeroclaw/pull/9423)） |
| **S1 (高)** | [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | **Telegram 审批卡片歧义**：同一条消息触发多个工具调用时，审批卡片未携带位置信息，操作员难以区分。 |

---

## 6. 功能请求与路线图信号
从当前活跃的 PR 和 RFC 中，可以清晰看到 **v0.9.0** 的演进信号：
- **MCP (Model Context Protocol) 深度强化**：[PR #9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405) 增加了对每个 MCP Server 自定义 CA 证书的支持；[PR #9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) 增加了资源 Blob 聚合预算预检。MCP 正在成为 ZeroClaw 的绝对核心工具链。
- **Shell 沙箱策略完善（跨平台）**：[PR #9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) 修复了 `git -C` 带来的安全校验绕过；[PR #9636](https://github.com/zeroclaw-labs/zeroclaw/pull/9636) 兼容了 Windows 的 `2>nul` 重定向。
- **ZeroCode (TUI) 体验升级**：[PR #9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) 实现了斜杠命令的单一真实数据源，极大优化了终端自动补全体验。
- **成本控制优化**：[Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) 请求向 OpenRouter 发送稳定的 `session_id`，以利用上游的 Prompt Cache 节约开销，极具落地价值。

---

## 7. 用户反馈摘要
从评论和数据中提炼出的真实用户反馈如下：
- **痛点 1：多 Agent 协同安全焦虑**：用户在进行复杂的 Delegate（委派）任务时，发现 Agent 之间可以随意篡改对方的状态和记忆（Issue #9646, #9647）。**用户迫切需要企业级的权限隔离（RBAC/ABAC）而非简单的全局共享**。
- **痛点 2：UI/UX 交互摩擦**：在 Telegram 频道使用时，连续的工具审批请求让人困惑（Issue #9655），且审批等待期间一直显示“正在输入”（Issue #9656），体验显得不够专业。
- **痛点 3：OpenAI 兼容性**：大量的 LobeChat / Open WebUI 用户希望直接通过标准的 HTTP API 拉起 ZeroClaw 智能体，对当前强绑定的 WebSocket/ACP 协议感到接入困难（Issue #8603）。
- **满意点**：社区对 ZeroClaw 积极修复安全漏洞（如 [PR #9671](https://github.com/zeroclaw-labs/zeroclaw/pull/9671) 修复 RUSTSEC）和拥抱 MCP 标准的速度表示高度认可。

---

## 8. 待处理积压
以下重要积压项需要核心维护者（如 @Audacity88）的介入：
- **[Issue #9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) [P1/S2]**：因 Rust 版本升级导致的 Docker `all-features` 发布流水线中断，当前 CI 处于降级状态，需尽快修复 StageX 基础镜像。
- **[Issue #9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) [RFC]**：提议加入分阶段的“产品级遥测”以辅助官方决策哪些功能用得多（比如 Qdrant 还是 Lucid）。当前需要维护者 Review，涉及隐私边界，决策难度较高。
- **[Issue #7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) [Tracker]**：跨 13 个模块的测试覆盖率与陈旧测试清理追踪器，目前标记为 Accepted 但推进缓慢，长期来看是技术债的定时炸弹。

</details>