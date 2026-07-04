# OpenClaw 生态日报 2026-07-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-04 22:15 UTC

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

# 📊 OpenClaw 项目动态日报

**📅 日期**: 2026-07-05 | **🎯 领域**: AI 智能体与个人 AI 助手

---

## 1. 今日速览
<details>
<summary>展开查看整体状态</summary>

- **活跃度爆表，但积压严重**: 过去 24 小时内 Issues 与 PR 均触及 500 条更新上限，体现了社区极高的参与度，但 471 个活跃 Issue 对比仅 29 个被关闭，说明维护者处理能力与社区反馈速度严重脱节，积压正在扩大。
- **无新版本发布**: 今日没有释出任何 Release，主分支处于功能堆积与排错期。
- **PR 推进缓慢**: 500 条 PR 动态中，仅 138 条被合并或关闭，超过 360 个 PR 处于待处理状态。
- **核心焦点**: 当前社区高度关注**多智能体编排稳定性**、**上下文窗口成本优化**以及**沙盒安全边界**。

</details>

---

## 2. 项目进展与重大 PR
今日有数个关键 PR 被推入 `ready for maintainer look`（待维护者审核）状态，有望在近期合并：

- 🧠 **记忆系统隔离** ([PR #100057](https://github.com/openclaw/openclaw/pull/100057)): 为 `memory-core` 插件添加了基于 Agent 的白名单过滤，防止多智能体共享工作区时的记忆越权读写。
- 💸 **用量统计修复** ([PR #100054](https://github.com/openclaw/openclaw/pull/100054)): 修复了控制台面板导致内存泄漏和错误重启警告的 Bug，优化了 `sessions.usage` 的读取机制。
- 📝 **文件追加写入模式** ([PR #77127](https://github.com/openclaw/openclaw/pull/77127)): 引入了史诗级的功能增强，为 Agent `write` 工具增加了 `append` 追加模式，修复了定时任务覆盖共享文件的严重痛点。
- 🏗️ **UI 架构重构** ([PR #100024](https://github.com/openclaw/openclaw/pull/100024) & [PR #100095](https://github.com/openclaw/openclaw/pull/100095)): 对 Control UI 进行了大规模模块化重构，实现了页面的懒加载与状态隔离。

---

## 3. 社区热点与反馈
提炼了评论区最为热烈的讨论，反映了用户的真实使用场景与核心痛点：

### 🔥 焦点一：多渠道消息泄露与静默丢失
- **现象**: 用户反馈 Agent 在执行工具时的内部独白（如 `NO_REPLY`、错误堆栈、JSON 参数）被直接发送到 Slack、Discord 或 Telegram 聊天中。
- **诉求**: 强烈要求实现**上下文边界隔离**。
- **热点追踪**: 
  - [Issue #25592](https://github.com/openclaw/openclaw/issues/25592): 工具调用间的文本泄露至消息渠道 (👍 1, 评论 33)
  - [Issue #44905](https://github.com/openclaw/openclaw/issues/44905): Discord 泄露内部工具调用踪迹

### 🔥 焦点二：Token 消耗与成本焦虑
- **现象**: 每次会话加载完整的工具 JSON Schema 会固定消耗约 3500 Token；此外，很多用户抱怨 LiteLLM 代理忽略缓存策略导致费用飙升。
- **诉求**: 精细化 Token 管理，提供每 Agent 的成本预算硬限制。
- **热点追踪**: 
  - [Issue #42475](https://github.com/openclaw/openclaw/issues/42475): 网关级单 Agent 成本预算控制
  - [Issue #14785](https://github.com/openclaw/openclaw/issues/14785): 降低工具 Schema 开销 (~3,500 tok/session)
  - [Issue #46252](https://github.com/openclaw/openclaw/issues/46252): 成本看板漏算重置会话的账单

### 🔥 焦点三：定时任务的可靠性
- **现象**: 孤立的 Cron 会话经常静默超时、幻觉输出，甚至覆盖工作区文件。
- **诉求**: 提高 Agent 离线/后台运行时的容错与强一致性。
- **热点追踪**:
  - [Issue #49876](https://github.com/openclaw/openclaw/issues/49876): Cron 任务失败时返回幻觉结果

---

## 4. Bug 与稳定性预警
根据今天活跃的 Issue，按影响面（P1/P2）总结以下稳定性风险：

| 严重度 | 问题概要 | 影响 | 状态/关联 PR | 链接 |
|---|---|---|---|---|
| **P1** | Signal 守护进程 SIGUSR1 竞态条件 | 导致进程孤立与发送失败 | 🟡 有修复中 PR | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| **P1** | QMD 引导初始化阻塞回复 | 导致多智能体网关过载 | ⚠️ 无明确修复 PR | [#72015](https://github.com/openclaw/openclaw/issues/72015) |
| **P1** | Gemini 3.1 Pro 回归报错 | 导致嵌入式 Agent 崩溃 | ⚠️ 回归问题，需关注 | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| **P2** | 沙盒容器限制太死 | `none` 模式下工作区不可写 | 🟡 已挂载 PR | [#37634](https://github.com/openclaw/openclaw/issues/37634) |

---

## 5. 功能请求与路线图信号
从最新提交的 Issue 和 PR 中，捕捉到了以下演进方向：

- **🛡️ 严苛的安全与沙盒边界**: 社区正推动类 Unix DAC 的细粒度文件系统与执行权限控制。
  - *提案*: 路径级别的 RWX 权限映射 ([Issue #39979](https://github.com/openclaw/openclaw/issues/39979))
  - *提案*: 文件系统沙盒配置 ([Issue #7722](https://github.com/openclaw/openclaw/issues/7722))
- **🧩 分布式架构探讨**: 用户正尝试将单体网关拆分为控制平面和运行时。
  - *提案*: 分离控制面板与计算节点 ([Issue #42026](https://github.com/openclaw/openclaw/issues/42026))
- **🔌 更多渠道适配与优化**: 
  - *进展*: 支持 Telegram 商业版个人聊天 ([Issue #20786](https://github.com/openclaw/openclaw/issues/20786))
  - *修复*: MS Teams 超过 50 条后的线程回复丢失 ([PR #100100](https://github.com/openclaw/openclaw/pull/100100))

---

## 6. 待处理积压（维护者请注意 🚨）
以下带有极高价值标签（如 🦞 diamond lobster）的关键 Bug 长期处于 Open 且缺少有效修复 PR，正在引发社区抱怨：

1. **控制台上下文阻断** ([Issue #32473](https://github.com/openclaw/openclaw/issues/32473) - 已关闭但可能复发): HTTPS 安全上下文要求导致 VPS 用户无法登录。
2. **上下文压缩超时导致死循环** ([Issue #43661](https://github.com/openclaw/openclaw/issues/43661)): 当历史记录过长引发压缩超时时，Agent 会进入无限重复发送相同消息的死循环。
3. **A2A (Agent-to-Agent) 回声效应** ([Issue #39476](https://github.com/openclaw/openclaw/issues/39476)): 子 Agent 可以反向调用父 Agent 的 `sessions_send`，导致聊天频道被重复消息刷屏。

> **💡 分析师建议**: OpenClaw 目前已经是一个庞大且复杂的系统。建议核心团队在未来一到两周内**冻结新功能开发**，开启一次专门的稳定性与积压清理冲刺，优先处理 P1 级别的崩溃死循环和消息泄露问题。

---

## 横向生态对比

# 📊 AI 智能体与个人助手开源生态横向对比分析报告 (2026-07-05)

## 1. 生态全景
当前（2026年中）个人 AI 助手与智能体开源生态正处于**从“单体对话”向“多智能体编排与自动化执行”跨越的深水区**。各开源项目不仅在拼凑大模型能力，更在**工程可用性（跨平台兼容、并发容灾）**与**生产级安全性（沙盒边界、权限细粒度管控）**上展开激烈角逐。底层架构方面，从单体网关向分布式控制平面解耦（控制与计算分离）、从硬编码向标准作业流（SOP）演进的趋势愈发明显。

## 2. 各项目活跃度对比
今日有 8 个项目有实质性动态，其中头部项目与垂直/初创项目呈现出截然不同的开发节奏。

| 项目名称 | Issue 动态 | PR 动态 | Release | 健康度与阶段评估 |
| :--- | :---: | :---: | :---: | :--- |
| **OpenClaw** | ~500 (471 Open) | ~500 (138 Closed) | 0 | 🟠 **过载预警**：极度活跃但积压严重，处于功能堆积期，亟需清理技术债。 |
| **Hermes Agent** | 50 | 50 (5 Closed) | 0 | 🟢 **高优修复**：多平台网关与跨端能力迭代快，跨平台兼容性修复攻坚中。 |
| **ZeroClaw** | 50 (11 Closed) | 50 (3 Closed) | 0 | 🟢 **架构跃升**：“目标模式”底座落地，SOP工作流推动架构规范化。 |
| **IronClaw** | 10 | 50 (多栈合并) | 待发 (0.29.1) | 🟢 **重构深水区**：Reborn架构演进，CI测试与安全鉴权重构。 |
| **NanoBot** | 14 | 14 (7 Closed) | 0 | 🟢 **健康稳健**：敏捷修复P1/P2级崩溃，多端体验快速打磨。 |
| **NanoClaw** | N/A | 38 (22 Closed) | 0 | 🟢 **大扫除**：大规模清理历史死代码，执行链路修复，向v2稳定迈进。 |
| **CoPaw (QwenPaw)**| 10 (2 Closed) | 5 (2 Closed) | 0 | 🟡 **新版阵痛**：V2.0长程记忆与上下文压缩引发集中性Bug，修复迅速。 |
| **PicoClaw** | 4 | 7 | 0 | 🟡 **基建完善**：聚焦多Agent路由逻辑与底层加密通信库的安全替换。 |
| **LobsterAI** | 1 | 3 (2 Closed) | 0 | 🔴 **沉寂停滞**：开发推进但社区反馈极度平淡，历史积压严重。 |

*(注：NullClaw, TinyClaw, Moltis, ZeptoClaw 过去 24h 无活动)*

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与庞然大物**，OpenClaw 的社区规模和功能广度目前无可匹敌，但也面临着典型的“大企业/大项目病”。
*   **核心优势**：生态辐射极广，吸引了大量企业级用户和重度极客玩家。其多渠道接入（Slack/Teams/Discord/Telegram）和企业级安全诉求（沙盒边界）往往成为整个生态的风向标。
*   **当前困境**：相比 NanoBot 的敏捷修复或 IronClaw 的硬核重构，OpenClaw 当前陷入了严重的**处理能力脱节**（单日仅关闭 29 个 Issue，积压超 470 个）。超 360 个待处理 PR 表明其代码审查流程已成为瓶颈。
*   **分析师建议**：OpenClaw 亟需冻结新特性，发起针对 P1 级崩溃（如上下文死循环、A2A回声效应、消息泄露）的专项稳定性冲刺。

## 4. 共同关注的技术方向
跨项目横向对比显示，以下四大技术诉求正在密集爆发：
1.  **多渠道与跨端会话的无缝同步**：智能体网关层与桌面端/UI端的状态割裂是通病。（*涉及：OpenClaw, Hermes, NanoClaw*）。用户极度渴望在 IM（Slack/钉钉/TG）中的会话能实时、无损地在桌面端复用。
2.  **记忆管理的边界与成本控制**：从“能记”到“会记”。过长的上下文导致成本飙升（*OpenClaw: 3500 Token 工具开销*），而激进的压缩又会引发“失忆”（*CoPaw V2.0*）或“角色认知错乱”（*Hermes Agent*）。
3.  **细粒度安全与权限管控（最小权限原则）**：对 AI 拥有本地文件系统或 IM 发送权限的担忧，促使项目强化安全边界。（*涉及：OpenClaw 引入类 Unix DAC 权限；IronClaw 拆分 Slack 读写 OAuth；ZeroClaw 呼吁 `.ignore` 机制*）。
4.  **复杂任务编排与状态机隔离**：从单次问答转向后台长期任务执行，要求隔离的会话状态和定时任务容错。（*涉及：ZeroClaw 引入目标模式与 SOP 编排；PicoClaw 支持细粒度 Agent 覆盖配置；NanoBot 推进子代理 MCP 继承*）。

## 5. 差异化定位分析
*   **OpenClaw & ZeroClaw**：**“重型编排引擎”**。目标用户为企业和重度极客。OpenClaw 侧重于功能大而全的渠道分发；ZeroClaw 则在底层硬刚复杂工作流，推进 SOP（标准作业程序）和可视化编排。
*   **Hermes Agent & NanoBot**：**“跨平台贴身网关”**。高度聚焦于 Windows/Android 原生体验优化与多模型（小模型/端侧）路由。Hermes 致力于轻量化部署（适配 2B-14B 小模型），NanoBot 则发力企业级协作工具集成（钉钉/Mattermost）。
*   **NanoClaw & IronClaw**：**“企业级安全与架构重构者”**。两者都在经历深刻的底层重构。NanoClaw 清理 v1 历史包袱，强化宿主机稳定性与审批流安全；IronClaw 则在重构鉴权体系，用编译期强制约束杜绝错误静默吞没。
*   **CoPaw (QwenPaw)**：**“本地多模态助手”**。高度聚焦于本地模型（LM Studio / DeepSeek / Qwen）与云端 API 的融合调优，针对个人长程对话记忆进行专项优化。

## 6. 社区热度与成熟度
*   **“负重前行”型 (过载预警)**：**OpenClaw**。社区热度爆表但 QA与维护跟不上，处于积压引发抱怨的危险期。
*   **“高歌猛进”型 (快速迭代)**：**Hermes Agent, ZeroClaw, NanoBot**。每日保持着高 PR 合并率，功能边界（如目标模式、跨端鉴权）正在快速拓宽。
*   **“深水淬火”型 (质量巩固)**：**IronClaw, NanoClaw, CoPaw**。主要精力放在清理技术债、修复死锁、重构 CI/CD 和安全沙箱上，代码洁癖严重，为重大版本发布蓄力。
*   **“基础建设”型 (平稳微调)**：**PicoClaw**。聚焦于底层的加密库替换（vodozemac）和 Agent 运行时参数覆盖，处于稳步小跑阶段。

## 7. 值得关注的趋势信号
1.  **“过程透明度”成为核心体验指标**：用户对“静默执行”的容忍度正在降到冰点。无论是 LobsterAI 的长任务卡死无提示，还是 OpenClaw 定时任务的“幻觉输出”，都指向一个明确需求——**AI 必须具备可观测的思考状态输出和可靠的中间态容灾（如幂等重建）**。
2.  **IM 与 Agent 交互规范的进化**：简单的 Webhook 推送已过时。现在的诉求是“卡片级防欺骗防御”（NanoClaw Issue #2923）、“工具调用内部独白防泄露”（OpenClaw 焦点一）以及“UI 视觉审批隔离”。Agent 的前端展现形式正在企业级化。
3.  **模型路由的自愈与自适应**：随着大模型 API 愈发多样，**模型容灾机制（Fallback）**和**算力自适应路由**（CoPaw PR #5597, Hermes Issue #13663）正在成为开源框架的标配。框架不仅要能调模型，还要能在模型超时、格式错误（畸形 JSON）时自动纠错或降级，而不是让进程崩溃。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报**
**日期**: 2026-07-05 | **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
过去 24 小时内，NanoBot 项目保持着极高的开发热度与社区活跃度，共计处理了 14 条 Issue 和 PR 更新。项目当前处于**系统稳定性强化与多端体验优化阶段**，今日成功合并了 7 个 PR，集中修复了进程崩溃、并发竞态、系统兼容性等多个 P1/P2 级核心 Bug。此外，开发者对 WebUI 交互体验、MCP 工具继承机制以及新渠道接入进行了重点功能迭代。整体来看，项目推进迅速，代码质量控制与社区响应处于非常健康的状态。

### 2. 版本发布
* **本日无新版本发布 (0 个 Release)**。基于当前大量 Bug 修复 PR 的集中合并，推测项目正在为下一个 Minor 版本（可能为 Beta 或 RC 版）进行攻坚储备。

### 3. 项目进展
今日共有 **7 个 PR 被合并/关闭**，大幅提升了系统的健壮性，主要进展如下：
* **MCP 稳定性挽救**：合并了 [PR #4666](https://github.com/HKUDS/nanobot/pull/4666)，引入了对畸形 MCP 工具返回结果的异常捕获，避免内部错误直接导致进程崩溃。
* **并发安全修复**：合并了 [PR #4684](https://github.com/HKUDS/nanobot/pull/4684)，通过引入 `asyncio.Lock` 彻底解决了 GitHub Copilot Provider 在高并发下同时刷新 Token 的竞态条件。
* **多平台与渠道兼容性**：合并了 [PR #4690](https://github.com/HKUDS/nanobot/pull/4690) 修复了 Windows 环境下网关停止时的崩溃问题；合并了 [PR #4646](https://github.com/HKUDS/nanobot/pull/4646) 解决了钉钉渠道在系统关闭时的 WebSocket 泄漏问题。
* **数据持久化**：合并了 [PR #4653](https://github.com/HKUDS/nanobot/pull/4653)，恢复了 `pairing._save()` 的原子写入能力，防止系统崩溃导致配置损坏。
* **规范化**：合并了 [PR #4692](https://github.com/HKUDS/nanobot/pull/4692)，统一了配置文件中 `modelPresets` 的驼峰命名法。

### 4. 社区热点
今日的讨论与反馈高度聚焦于**系统异常处理与多渠道架构**：
* **[Issue #4652](https://github.com/HKUDS/nanobot/issues/4652) [CLOSED]**：关于 MCP 工具调用异常导致进程直接崩溃的问题引发了最多关注（关联合并的 PR #4666）。用户强烈呼吁系统需要具备容错能力，而非直接宕机。
* **[Issue #4302](https://github.com/HKUDS/nanobot/issues/4302) [OPEN]**：MCP 重连导致网关崩溃的 Bug 依然保持着极高的讨论热度，用户正在积极提供复现代码，表明网关层面的自动重连机制是目前生产环境的痛点。

### 5. Bug 与稳定性
今日处理的 Bug 按严重程度（Priority）排列如下：

* **🔴 [P1 严重] MCP 工具调用导致进程崩溃** 
  * **状态**：已修复 ([PR #4666](https://github.com/HKUDS/nanobot/pull/4666) 已合并)
  * **详情**：当 MCP 返回错误或空数据时，NanoBot 进程会直接崩溃。现已将其转换为结构化的工具错误，防止进程异常退出。
* **🔴 [P1 严重] 设备配对数据写入回归问题**
  * **状态**：已修复 ([PR #4653](https://github.com/HKUDS/nanobot/pull/4653) 已合并)
  * **详情**：底层辅助函数重构导致丢失了 `fsync` 同步机制，引发宕机后数据损坏的回归 Bug。
* **🟡 [P2 高] Token 刷新竞态条件**
  * **状态**：已修复 ([PR #4684](https://github.com/HKUDS/nanobot/pull/4684) 已合并)
  * **详情**：并发请求下 Copilot Token 过期会触发重复获取，导致请求失败甚至触发风控。
* **🟡 [P2 高] WebUI 窄屏界面溢出**
  * **状态**：待合并 ([PR #4694](https://github.com/HKUDS/nanobot/pull/4694) 开启中)
  * **详情**：移动端浏览器中，WebUI 的聊天框和输入框会被强制拉伸超过 `100vw`，导致内容被裁剪。

### 6. 功能请求与路线图信号
从待合并的 PR 中，可以看出项目接下来的演进方向：
* **子代理能力增强**：[PR #4697](https://github.com/HKUDS/nanobot/pull/4697) 提出允许特定子代理通过配置继承主代理的 MCP 服务器。这反映出用户正在将 NanoBot 用于更复杂的“多智能体编排”场景，对子代理的权限和工具复用有强烈需求。
* **新通信渠道扩展**：[PR #4459](https://github.com/HKUDS/nanobot/pull/4459) 正在推进对 Mattermost 渠道的支持（WebSocket + REST API，支持流式响应和自动重连），表明项目致力于覆盖更多开源/企业级协作平台。
* **WebUI 前端体验优化**：[PR #4696](https://github.com/HKUDS/nanobot/pull/4696) 提交了基于缓冲调度的流式 Markdown 渲染机制，解决了流式输出时原始标记符闪烁的问题，前端交互体验正向商业化产品级别看齐。

### 7. 用户反馈摘要
* **痛点 1：工具容错性低**。用户反馈（Issue #4652），在 MCP 调用发生异常时，系统的自我恢复能力不足，直接 Crash 导致服务中断，这与 AI Agent 应具备的“自主纠错”预期存在落差。
* **痛点 2：移动端体验割裂**。用户指出 WebUI 在移动端视口下的排版存在严重问题，长文本和 Markdown 链接导致整页横向滚动，说明存在大量有移动端办公/查阅需求的用户。
* **使用场景洞察**：从大量的 Windows、DingTalk、Mattermost 以及 Copilot 集成反馈可以看出，NanoBot 正在被广泛应用于企业级生产环境和本地多设备协同中，作为跨平台智能网关使用。

### 8. 待处理积压
* **⚠️ [Issue #4302](https://github.com/HKUDS/nanobot/issues/4302) 关注度极高的网关层崩溃 Bug**：自 6 月 11 日开起，至今仍为 Open 状态。用户明确指出 NanoBot 在会话终止尝试 MCP 重连时会导致网关级崩溃。此问题涉及底层网关生命周期管理，建议核心维护者（@tjc0726 等）优先排期跟进。
* **⏳ [PR #4459](https://github.com/HKUDS/nanobot/pull/4459) Mattermost 集成积压**：自 6 月 22 日提交以来已超过 10 天，需维护团队 review 是否满足合并标准，以回应社区对新增通信渠道的期待。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 开源项目动态日报**
**日期**: 2026-07-05 | **项目**: NousResearch/hermes-agent

---

### 1. 今日速览
在过去 24 小时内，Hermes Agent 展现出极高的社区活跃度与开发进度，共产生 50 条 Issue 更新与 50 条 PR 更新。虽然今日无新版本发布，但大量核心 Bug 得到修复，共有 5 个 PR 被合并。开发重点聚焦于跨平台兼容性（尤其是 Windows/Docker 环境）、安全沙箱边界强化，以及多平台网关（Telegram/WhatsApp）的会话状态同步。值得注意的是，针对“轻量化/小模型本地离线运行”的呼声正在迅速积累，成为近期最核心的用户诉求之一。

### 2. 版本发布
**本日无新版本发布（Releases: 0）。** 项目当前应仍处于 `0.18.0` 版本的迭代修复与攒发阶段。

### 3. 项目进展
今日共有 5 个 PR 被合并/关闭，推动了多个关键模块的发展：
*   **跨平台会话恢复打通** ([PR #58422](https://github.com/NousResearch/hermes-agent/pull/58422)): 允许通过 `--cross-platform` 标志跨平台恢复会话（例如从 Telegram 恢复 TUI 会话），移除了原本严格的源平台匹配 IDOR 守卫限制。
*   **Windows 兼容性修复** ([PR #58480](https://github.com/NousResearch/hermes-agent/pull/58480)): 修复了学习图谱渲染时使用 GNU 专有 `strftime("%-d")` 导致的 Windows 崩溃问题，替换为标准的 `dt.day`。
*   **面板安全鉴权优化** ([PR #58400](https://github.com/NousResearch/hermes-agent/pull/58400)): 修复了仪表盘在纯密码认证模式下的错误自动 SSO 重定向问题。
*   **断线重连修复** ([PR #58379](https://github.com/NousResearch/hermes-agent/pull/58379)): 修复了 Yuanbao 平台在 WebSocket 断线重连后，定时任务消息无法投递的三个独立根本原因。
*   **安全防范** ([PR #58516](https://github.com/NousResearch/hermes-agent/pull/58516)): 在文件面板列表中跳过转义的损坏符号链接。

### 4. 社区热点
今日讨论度最高的议题集中在**端侧小模型支持**和**凭证池鉴权**：
*   **端侧小模型/离线部署支持缺失** ([Issue #22930](https://github.com/NousResearch/hermes-agent/issues/22930), 👍8): 用户抱怨在使用 2B-14B 小模型（如 qwen3-8b）时，因强制要求 64k 的上下文窗口而报错，导致算力不足的设备无法正常离线运行 Agent。
*   **大模型厂商 OAuth 鉴权连环失效** ([Issue #48534](https://github.com/NousResearch/hermes-agent/issues/48534), 👍3) 与 ([Issue #44799](https://github.com/NousResearch/hermes-agent/issues/44799)): Anthropic 封锁了 `claude-cli` 的 User-Agent 导致 OAuth 404 报错；同时 OpenAI Codex 在遇到额度限制时，刷新令牌在冷却期直接过期。这反映出用户对官方维护第三方 API 鉴权时效性的急切需求。
*   **长期记忆引发“角色认知错乱”** ([Issue #21709](https://github.com/NousResearch/hermes-agent/issues/21709)): 上传长篇小说后，Agent 将小说内容存入长期记忆，导致后续会话中 AI 把自己当成了小说里的虚构角色。这是一个非常典型的 RAG/记忆清洗边界问题。

### 5. Bug 与稳定性
**高危级 (P0/P1 - 安全与基础阻断)**
*   **[已提交 Fix PR]** 视觉沙箱越界漏洞 (GHSA-gpxw-6wxv-w3qq): 读取本地图片字节时逃逸了安全策略。目前已有修复方案提交 ([PR #57890](https://github.com/NousResearch/hermes-agent/pull/57890) 和 [PR #58517](https://github.com/NousResearch/hermes-agent/pull/58517))。

**严重级 (P2 - 核心功能异常)**
*   **MoA 工具调用丢失** ([Issue #58437](https://github.com/NousResearch/hermes-agent/issues/58437)): 在静默模式下，MoA 在收集大模型流式响应时丢弃了 `tool_calls`，导致智能体崩溃。
*   **Telegram 轮询死循环** ([Issue #58484](https://github.com/NousResearch/hermes-agent/issues/58484)): 冲突重试计数器不递增，导致 Telegram Gateway 陷入无限重连循环。
*   **配置缓存失效** ([Issue #58514 相关 PR #58519](https://github.com/NousResearch/hermes-agent/pull/58519)): 当 `.env` 环境变量发生变化时，`load_config` 缓存未失效，导致 `${VAR}` 变量终身不更新。
*   **子代理任务结果被覆盖** ([Issue #58490](https://github.com/NousResearch/hermes-agent/issues/58490)): `verify-on-stop` 机制意外替换并清空了委托子代理的最终输出结果。

### 6. 功能请求与路线图信号
基于今日活跃的 Feature Request 与已有 PR，推测未来版本路线图将包含以下方面：
*   **推理算力自适应路由** ([Issue #13663](https://github.com/NousResearch/hermes-agent/issues/13663)): 赋予 Agent 根据任务复杂度（如简单翻译 vs 复杂架构设计）动态调整 `reasoning_effort` 的能力，以节省 Token 消耗。
*   **轻量化上下文窗口** ([Issue #32048](https://github.com/NousResearch/hermes-agent/issues/32048)): 强烈要求放宽 64k 最低上下文窗口的硬性限制，以适配 32k 甚至更小窗口的开源模型。
*   **原生 RAG 知识库系统** ([Issue #844](https://github.com/NousResearch/hermes-agent/issues/844)): 支持用户配置本地文档目录，自动进行嵌入与混合检索（由核心成员 teknium1 提出，极有可能在近期排期）。
*   **错误处理插件化** ([PR #58524](https://github.com/NousResearch/hermes-agent/pull/58524)): 新增 `classify_api_error` 钩子，允许各大模型提供商通过插件处理自身的专属 API 报错怪癖。

### 7. 用户反馈摘要
*   **痛点 1：桌面端模型路由不可靠**。用户反馈桌面版客户端有时会忽略已配置的特定提供商（如 OpenAI Codex），强制将请求路由至 Nous Portal ([Issue #58498](https://github.com/NousResearch/hermes-agent/issues/58498))；且自定义 OpenAI 兼容提供商在桌面端的模型选择器中经常不可见 ([Issue #58393](https://github.com/NousResearch/hermes-agent/issues/58393))。
*   **痛点 2：远程附件传递断裂**。当桌面端连接远程后端时，如果通过输入框附带图片或文件，经常仅传递了本地绝对路径，导致远程后端无法读取文件 ([Issue #40316](https://github.com/NousResearch/hermes-agent/issues/40316))。
*   **痛点 3：IM 平台会话不同步**。Telegram Gateway 产生的会话，在桌面端的会话列表中无法实时刷新，必须重启应用才能显示 ([Issue #38683](https://github.com/NousResearch/hermes-agent/issues/38683))。

### 8. 待处理积压
以下重要 Issue 长期处于打开状态或解决进展缓慢，需引起维护者关注：
*   **[长期优化]** **Windows 平台体验割裂** ([Issue #16201](https://github.com/NousResearch/hermes-agent/issues/16201)): 创建于 4 月底，用户反馈原生 Windows 体验存在诸多障碍，即便使用 WSL 也有诸多限制。
*   **[长期需求]** **Signal 平台功能缺失** ([Issue #39043](https://github.com/NousResearch/hermes-agent/issues/39043)): 用户希望能调用 signal-cli 原生的引用回复、编辑和远程删除功能。
*   **[长期积压]** **MCP 兼容性盲区** ([Issue #47963](https://github.com/NousResearch/hermes-agent/issues/47963)): Zoho Calendar 等特定 MCP 服务器在初始化握手时由于字段未被识别而失败。
*   **[潜在隐患]** **GitHub Copilot 隐式读取风险** ([Issue #33195](https://github.com/NousResearch/hermes-agent/issues/33195)): 即使用户未配置，Agent 也会利用本地的 `gh auth token` 自动将 Copilot 添加为可用提供商，可能引发不可预期的隐私或计费问题。

---
*分析师总结：Hermes Agent 的核心架构（MoA、多模型网关）正在变得愈发强大，但生态端的摩擦力（桌面端 UI 同步、第三方鉴权变更、Windows原生支持、小模型下沉适配）正在成为当前最大的阻力。近期高产的 Salvage PR（废弃代码抢救）表明社区代码贡献正趋于规范化。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026年07月05日**

### 1. 今日速览
在过去 24 小时内，PicoClaw 项目的整体活跃度保持在良好水平，共产生 4 条 Issue 更新与 7 条 PR 更新。项目当前的重心集中在多智能体路由逻辑优化、底层依赖库的安全替换以及各端国际化与容器化基建的完善。值得注意的是，今日合并与关闭的 PR 主要聚焦于修复多 Agent 环境下的逻辑缺陷及引入更灵活的运行时配置覆盖机制，推动项目在可用性与架构扩展性上稳步前进。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目在代码质量与多智能体架构上取得了实质性进展：
*   **多 Agent 状态修复推进**：PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 虽被关闭，但其聚焦的核心痛点（配置多个 Agent 且发生路由时，用户执行 `/clear` 错误清除了默认 Agent 的会话）已被明确记录。
*   **Agent 运行时灵活性提升**：新增 PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 提出支持针对特定 Agent 的运行时覆盖（允许在配置中单独定义 `max_tokens`、摘要阈值等），这标志着 PicoClaw 正在向更细粒度、更复杂的智能体编排架构迈进。
*   **回归问题处理**：PR [#3221](https://github.com/sipeed/picoclaw/pull/3221) 因导致日志导入错误，被及时回滚，保障了主干分支的稳定性。

### 4. 社区热点
今日讨论最密集的焦点集中在**端到端加密通信与安全性**方面：
*   **[高优先级] 弃用不安全的加密库**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088)（👍2，评论4）提出使用官方推荐的 `vodozemac` 替换当前已停止维护且存在安全隐患的 `libolm`。此需求被标记为高优先级，反映了核心社区对底层通信隐私安全的迫切诉求。
*   **AI 智能体“失忆”问题**：Issue [#3150](https://github.com/sipeed/picoclaw/issues/3150)（评论4）形象地报告了助手“给自己整失忆了”的严重 Bug，引发了多位开发者的探讨，该问题已于今日被关闭。

### 5. Bug 与稳定性
当前社区反馈的稳定性问题按严重程度排列如下：
1.  **[严重] Android 端服务无法启动**：Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) 报告在拥有完整权限的情况下，Android 端服务依然无法启动，且无法在设置中更改路径。（*状态：Open，暂无关联修复 PR*）
2.  **[较高] Matrix 加密消息接收失败**：Issue [#3194](https://github.com/sipeed/picoclaw/issues/3194) 指出在接收 Matrix 加密消息时系统报错 `crypto is not enabled`。此 Bug 与社区热议的加密库替换（#3088）高度相关。（*状态：Open，暂无关联修复 PR*）
3.  **[已修复] 多 Agent 环境 `/clear` 逻辑错误**：Issue/PR 显示当消息路由到非默认 Agent 时，`/clear` 会误清默认 Agent 状态。（*状态：已有 PR 尝试修复 #3224*）

### 6. 功能请求与路线图信号
结合近期的 Issue 与 PR 动态，可以洞察出项目接下来的演进方向：
*   **高度定制化的 Agent 配置**：PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 提交了 Agent 级别的运行时参数覆盖功能，这极有可能被纳入下一版本，以满足不同 Agent 承载不同业务场景（如不同 Token 上限、不同触发标志）的需求。
*   **安全通信基建升级**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3182) 呼吁将底层加密体系切换至官方主推的 Rust 库 `vodozemac`，这预示着项目将在安全通信矩阵上迎来一次重大重构。

### 7. 用户反馈摘要
*   **真实痛点**：移动端（特别是 Android）的兼容性问题极大影响了开箱即用的体验，用户难以自定义工作目录；同时，Matrix 协议下的加密通信依然脆弱，导致注重隐私的用户体验受挫。
*   **使用场景**：用户正越来越多地将 PicoClaw 用于复杂的“多智能体协作”场景（配置多个专职 Agent 并通过路由分发任务），因此对 Agent 会话隔离和独立参数配置提出了强烈需求。
*   **满意度反馈**：社区贡献者对国际化（i18n）和底层代码规范（如清理 `.gitignore`、处理接口关闭错误等，见 PR #3190, #3191, #3189, #3192）的积极响应，展现了项目具备良好的开源协作生态与代码洁癖。

### 8. 待处理积压
以下重要 Issue/PR 已被系统或管理员打上 `[stale]`（陈旧/积压）标签，且带有高优先级标签，需要维护团队投入精力进行跟进或 Code Review：
*   **[积压 PR]** [#3192](https://github.com/sipeed/picoclaw/pull/3192), [#3191](https://github.com/sipeed/picoclaw/pull/3191), [#3190](https://github.com/sipeed/picoclaw/pull/3190), [#3189](https://github.com/sipeed/picoclaw/pull/3189)：这一系列由贡献者 `chengzhichao-xydt` 提交的关于代码清理、i18n 同步和 Docker 基础镜像升级的 Chore PR 长时间处于 Open 且 Stale 状态，建议尽快 Review 合并以保持社区贡献者的积极性。
*   **[积压高优 Issue]** [#3088](https://github.com/sipeed/picoclaw/issues/3088)：替换废弃加密库的需求已提出近一个月，虽为高优但目前缺乏实质性代码推进，需评估排期。
*   **[积压 Bug]** [#3194](https://github.com/sipeed/picoclaw/issues/3194)：Matrix 加密消息处理报错问题近期无后续回复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份日报展示了 NanoClaw 项目在 2026 年 7 月 4 日至 5 日期间的显著维护与迭代动态。以下是基于 GitHub 数据生成的项目动态日报：

### 1. 今日速览
今日 NanoClaw 项目展现出**极高的代码重构与系统加固活跃度**。在过去的 24 小时内，项目虽然没有发布新版本，但成功合并与关闭了高达 22 个 PR，同时仍有 16 个待合并的新改进。核心维护者 `gavrielc` 进行了一次大规模的“代码大扫除”，清除了大量 v1 架构遗留的死代码和过时配置，并修复了宿主机线程阻塞、文件挂载等核心稳定性问题。此外，社区针对前端交互安全（UI 欺骗）和多模型路由功能提交了重要反馈与实现，标志着项目正在向更安全、更稳健的 v2 架构形态迈进。

### 2. 版本发布
**无新版本发布（0 个）。** 
*注：鉴于今日合并了大量清理与修复 PR（涉及核心配置、DB 处理和 API 逻辑），项目极有可能正在为下一个 Minor 或 Patch 版本（推测为 v2.1.39 或 v2.2.0）做预热准备。*

### 3. 项目进展
今日共有 22 个 PR 被合并或关闭，项目迎来了显著的向后迈进，主要体现在**架构净化**与**执行链路修复**两个方面：

*   **核心执行与状态修复：**
    *   [PR #2931](https://github.com/nanocoai/nanoclaw/pull/2931)：**重构镜像构建逻辑**。将同步阻塞的 `execSync` 改为异步 Promise，解决了构建容器镜像时导致单线程宿主机冻结长达 15 分钟的严重性能瓶颈。
    *   [PR #2942](https://github.com/nanocoai/nanoclaw/pull/2942)：**修复跨进程回复标记失效问题**。解决了 MCP server 作为独立 stdio 运行时无法读取上下文批处理状态的 Bug。
    *   [PR #2937](https://github.com/nanocoai/nanoclaw/pull/2937)：**增强状态自愈能力**。当 session 文件夹被操作员手动删除时，系统现在会自动幂等地重建文件夹和数据库，确保调试重置操作不中断。
*   **安全与环境配置优化：**
    *   [PR #2943](https://github.com/nanocoai/nanoclaw/pull/2943)：修复了挂载白名单不兼容只读配置（`readOnly`），以及缓存解析错误导致进程锁死的问题。
    *   [PR #2934](https://github.com/nanocoai/nanoclaw/pull/2934)：使出口锁定和环境变量限制（`CONTAINER_CPU_LIMIT` 等）在标准服务下生效。
*   **大规模历史包袱清理（v1 -> v2 迁移尾声）：**
    *   [PR #2946](https://github.com/nanocoai/nanoclaw/pull/2946) 删除了可能泄露敏感信息的 `.env` 镜像复制逻辑；[PR #2945](https://github.com/nanocoai/nanoclaw/pull/2945) 重写了安全文档；[PR #2940](https://github.com/nanocoai/nanoclaw/pull/2940)、[PR #2936](https://github.com/nanocoai/nanoclaw/pull/2936)、[PR #2935](https://github.com/nanocoai/nanoclaw/pull/2935) 均清除了大量无用的历史导出模块、废弃的垫片及无效 CLI 协议词汇。

### 4. 社区热点
*   **最高关注度 Issue：UI 欺骗安全漏洞** 
    [Issue #2923](https://github.com/nanocoai/nanoclaw/issues/2923) 报告了一个 `ask_user_question` 卡片的前端完整性欺骗漏洞。攻击者可以通过伪造点击覆盖卡片的显示文本，虽然不会影响后端 Agent 响应，但可能导致用户在审批时做出错误判断。目前社区已开始关注此跨站请求伪造/点击劫持的衍生问题。
*   **UI 易用性优化反馈：**
    [PR #2933](https://github.com/nanocoai/nanoclaw/pull/2933) 提出为 Slack 审批卡片增加颜色区分（绿色通过/红色拒绝），反映了一线企业用户在频繁审批时对交互效率的强烈诉求。

### 5. Bug 与稳定性
*   **【严重】宿主机事件循环阻塞**：因使用 `execSync` 执行 Docker Build，导致系统在审批期间完全卡死无响应。（已有 Fix: [PR #2931](https://github.com/nanocoai/nanoclaw/pull/2931) ✅ 已合并）
*   **【中等】白名单解析错误被永久缓存**：配置文件解析失败会导致错误状态被缓存整个进程生命周期，阻碍后续重试与挂载。（已有 Fix: [PR #2943](https://github.com/nanocoai/nanoclaw/pull/2943) ✅ 已合并）
*   **【中等】UI 状态欺骗**：`ask_user_question` 组件在鉴权完成前文本可被篡改。（状态：[Issue #2923](https://github.com/nanocoai/nanoclaw/issues/2923) 待修复）
*   **【低】Session 重置引发报错**：操作员按文档指引 `rm -rf` 删除卡死 session 目录后，引发数据库写入崩溃。（已有 Fix: [PR #2937](https://github.com/nanocoai/nanoclaw/pull/2937) ✅ 已合并）

### 6. 功能请求与路线图信号
从今日的 PR 动向来看，下一步的路线图明显指向**“多模型支持”**与**“安全合规标准化”**：
1.  **模型路由扩展**：开发者 `javexed` 连续提交了 3 个关于模型与容器管理的 PR，特别是 [PR #2949](https://github.com/nanocoai/nanoclaw/pull/2949) 引入了 `/add-litellm` 技能，以及 [PR #2951](https://github.com/nanocoai/nanoclaw/pull/2951) 关于 Opencode 的 URL 环境变量隔离。这表明项目正在积极构建本地多模型服务器的无缝路由接入层。
2.  **官方安全响应框架建立**：[PR #2954](https://github.com/nanocoai/nanoclaw/pull/2954) 添加了第一阶段安全报告和分类策略（SECURITY.md），标志着项目从“社区驱动”向“企业可用”的安全成熟度过渡。
3.  **僵尸审批清理机制**：[PR #2944](https://github.com/nanocoai/nanoclaw/pull/2944) 引入了对超过 7 天未处理的 module 审批请求的自动过期与清理机制，大幅提升系统的内存与任务流健康度。

### 7. 用户反馈摘要
*   **痛点 1：Agent 审批流交互过载**：在 Slack 等渠道中，大量需要人工干预的审批卡片导致用户视觉疲劳，用户（`gavrielc` 等）迫切需要颜色等视觉刺针来快速区分“允许”与“拒绝”。
*   **痛点 2：Sticky Session 逻辑混乱**：用户 `dim0627` 在 [PR #2955](https://github.com/nanocoai/nanoclaw/pull/2955) 中指出，当前 mention-sticky 会错误地将仅存在但未活跃的会话视为已订阅状态，导致频道根节点或累积型会话收到不该有的消息推送，引发信息过载。
*   **场景反馈**：操作员依赖手动删除文件夹（`rm -rf`）来解决卡死的 Agent 会话，这暴露了常规软重置手段在极端死锁情况下的不可靠性。

### 8. 待处理积压
以下今日创建或活跃的高价值 PR/Issue 需要维护者优先 Review，以免形成功能瓶颈：
1.  **[PR #2955](https://github.com/nanocoai/nanoclaw/pull/2955)**：`fix(router): mention-sticky...` 这是一个影响消息推送路由准确性的核心逻辑修正。
2.  **[PR #2954](https://github.com/nanocoai/nanoclaw/pull/2954)**：`Add Phase-1 security reporting...` 建立官方安全响应框架的草案，需要两名维护者签署才能合并。
3.  **[Issue #2923](https://github.com/nanocoai/nanoclaw/issues/2923)**：前端鉴权前的 UI 欺诈漏洞。虽然被判定为非后端级别风险，但考虑到 NanoClaw 常用于需要人工审批的高权限操作环境，建议尽快在卡片渲染层加上防伪造点击机制。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-05 | **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### 1. 今日速览
过去 24 小时内，IronClaw 项目保持极高的开发活跃度，共产生 10 条 Issue 更新与 50 条 PR 更新。项目的核心焦点依然集中在 **Reborn 架构的深度演进**、**Slack 个人 OAuth 授权体系的重构** 以及 **CI/测试基础设施的大规模优化**。其中，针对集成测试覆盖率和 CI 编译时间的硬骨头打响了攻坚战，多位核心贡献者提交了系统性的解决方案。整体而言，项目正处于架构重构的深水区，代码质量护栏正在快速搭建。

### 2. 版本发布
今日暂无新的正式版本发布。但当前有一个关键的发版 PR 正在推进中：[PR #5598 chore: release](https://github.com/nearai/ironclaw/pull/5598)。
该 PR 预告了即将到来的重大版本升级，其中 `ironclaw_common` 和 `ironclaw_skills` 将包含 **API 破坏性变更**，而核心的 `ironclaw` 将从 `0.24.0` 跃升至 `0.29.1`，这标志着 Reborn 架构的底层 API 正在趋于稳定。

### 3. 项目进展
今日项目在技术债务清理和测试基础设施上迈出了一大步，关闭了多个重量级 PR：

*   **集成测试套件重组落地**：[PR #5633 test(reborn): integration-suite restructure](https://github.com/nearai/ironclaw/pull/5633) 已关闭。该 PR 将集成测试移动至独立的 `tests/integration/` 目录，解耦了测试框架，并引入了单次运行覆盖率管线。这为后续精确追踪代码覆盖率奠定了基础。
*   **遗留 CI 缓存优化并入**：关闭了 [PR #5629 ci: use OVH sccache and mold](https://github.com/nearai/ironclaw/pull/5629) 和 [PR #5606 Add OVH sccache to Reborn gateway smoke](https://github.com/nearai/ironclaw/pull/5606)。经过基准测试验证，移除了无效的分布式编译策略，仅保留了高收益的 OVH Redis 缓存，有效缩减了旧版 Rust 作业的运行时间。
*   **主干 CI 修复**：[Issue #5590 Make main branch CI checks green again](https://github.com/nearai/ironclaw/pull/5590) 得到关闭，代码风格检查与浏览器 QA 失败问题已被阶段性修复。

### 4. 社区热点
当前社区与核心团队最关注的焦点是 **Slack 接入方式从老旧的 Pairing 迁移至个人 OAuth**。BenKurrek 提交了 4 个连续的 PR 栈来推进此工作：

*   **热点 PR**: [PR #5645 feat(reborn): swap Slack pairing codes for personal OAuth (stack 3/4)](https://github.com/nearai/ironclaw/pull/5645)
*   **衍生讨论**: [Issue #5650 Slack personal OAuth: per-capability scope split](https://github.com/nearai/ironclaw/pull/5650)
*   **诉求分析**: 在重构 OAuth 时，发现旧的授权方式会为所有能力（包含只读）强制赋予 `chat:write`（写入）权限。这引发了社区对**最小权限原则**的重视。新方案要求将 Slack 工具能力拆分为“读”与“写”独立授权，这反映了用户对 AI 助手权限管控安全性的高度敏感。

### 5. Bug 与稳定性
今日报告并追踪了多个系统底层的 Bug 与测试漏洞，目前核心团队已作出响应：

1.  **[高] 网桥工具元数据泄露 (Latent Bug)**: [Issue #5647 Bridged tool disclosure + narrowed capability allowlist strips the bridge meta-tools](https://github.com/nearai/ironclaw/pull/5647)。当工具目录超过 32 个启用网桥延迟加载时，合成的 `ironclaw.*` 网桥能力 ID 没有被纳入授权集，可能导致工具调用被静默拦截或权限绕过。
2.  **[中] 安全审计钩子在测试环境中失效**: [Issue #5640 Harness gap: no RecordingSecurityAuditSink double](https://github.com/nearai/ironclaw/pull/5640)。在集成测试中 `hook_security_audit_sink` 始终为 `None`，这意味着当前测试根本没有覆盖到安全审计落盘的逻辑。**（已有 Fix PR: [#5649](https://github.com/nearai/ironclaw/pull/5649)）**
3.  **[中] 铁路线缆偏移风险**: [Issue #5641 Wiring-parity guard: EXPECTED_PRODUCTION_SHAPE is hand-derived](https://github.com/nearai/ironclaw/pull/5641)。测试环境中的生产形态常量是手动转录的，一旦生产代码修改而忘记同步测试，就会产生漏网之鱼。**（已有 Fix PR: [#5642](https://github.com/nearai/ironclaw/pull/5642)）**
4.  **[低] Nightly E2E 测试失败**: [Issue #4108 Nightly E2E failed](https://github.com/nearai/ironclaw/pull/4108)。端到端定时任务再次亮红灯，需排查是否为环境抖动。

### 6. 功能请求与路线图信号
从今日的 Issue 和 PR 中，可以清晰看出 IronClaw 接下来的路线图信号：

*   **错误处理静态化/编译期约束**：[PR #5651 refactor(errors): static enforcement that failures surface, not swallow](https://github.com/nearai/ironclaw/pull/5651)。ilblackdragon 正在推动一个硬核改进：在编译期强制要求所有错误必须暴露给模型或用户，绝不能被静默吞掉。这将成为后续版本的一大架构亮点。
*   **平滑迁移工具支持**：[PR #5627 v1/engine-v2 → Reborn state migration tool](https://github.com/nearai/ironclaw/pull/5627)。引入了新的迁移二进制文件，确保老用户在升级到 Reborn 架构时数据无损，这是正式发布 Reborn 版本的前置条件。
*   **测试覆盖率从“参考”转向“硬门禁”**：[Issue #5638 ci(reborn): flip integration-tier coverage report from informational to ratchet](https://github.com/nearai/ironclaw/pull/5638)。团队正准备将覆盖率接入 CI 强制拦截（防倒退机制 Ratchet）。

### 7. 用户反馈摘要
*   **Agent 交互痛点**：从已关闭的 [PR #5042 fix(agent-loop): admit one-line answers](https://github.com/nearai/ironclaw/pull/5042) 可以看出，用户在使用 Agent 时，如果模型回复了单行带有工具标识（如 `web__fetch`）的最终结果，旧逻辑会将其误判为“重放攻击”而丢弃，导致正常的回答消失。用户期望 Agent 的对话循环更加宽容且智能。
*   **部署环境卡顿痛点**：从 [Issue #5636 CI: job-level if skips block Railway deploys](https://github.com/nearai/ironclaw/pull/5636) 反映出，部分用户使用 Railway 等 PaaS 平台部署，由于 IronClaw 某些 CI Job 存在跳过状态，触发了 Railway 的安全防御机制，阻断了生产部署。用户期望 CI 的聚合状态判定更加智能。

### 8. 待处理积压
*   **Subagent 生成失败修复**: [PR #5170 Fix subagent spawn run failure](https://github.com/nearai/ironclaw/pull/5170) 已开启两周，涉及核心的 Agent 任务分发与交接逻辑，目前仍处于待合并/审查状态，需要维护者重点关注。
*   **Reborn 架构深化追踪**: [Issue #3231 Follow-up architecture deepening after main substrate landing](https://github.com/nearai/ironclaw/pull/3231) 已处于开启状态 2 个月，作为 Reborn 架构落地的总跟踪 Issue，涉及诸多小规模重构，需要长期投入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-07-05 动态日报：

# LobsterAI 项目动态日报 (2026-07-05)

## 1. 今日速览
在过去 24 小时内，LobsterAI 项目整体活跃度呈“开发推进为主，社区反馈平淡”的状态。代码库迎来了 3 次 PR 更新，其中核心维护者成功合入了关于系统代理透传和身份配置迁移的重要修复。与此同时，Issue 端仅有 1 条更新，且集中于标记长期未活跃的遗留 Bug。当前项目处于典型的功能迭代与底层架构清理阶段，暂无新版本发布。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
今日共有 2 个 PR 被成功关闭/合并，项目在底层配置与网络代理方面完成了重要推进：
*   **代理透传修复**：PR [#2271](https://github.com/netease-youdao/LobsterAI/pull/2271) 修复了将系统代理传递给托管浏览器的机制。这对于需要 LobsterAI 进行 Web 浏览和抓取的 AI 智能体至关重要，解决了特定网络环境下的连通性问题。
*   **身份标识重构**：PR [#2272](https://github.com/netease-youdao/LobsterAI/pull/2272) 清理了嵌入在旧版 `AGENTS.md` 中的遗留身份内容，将其平滑迁移至受管理的 `IDENTITY.md` 文件，并加入了备份与安全跳过机制。这有效防止了多智能体身份冲突，是架构规范化的重要一步。

## 4. 社区热点
今日社区几乎没有新增热点讨论，活跃度较低。数据中更新的 Issue 均为标记为 `[stale]`（陈旧/停滞）的历史内容。
*   **长任务执行反馈**：Issue/PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) 虽然在分类中显示，但其实是用户在 4 月初反馈的深度诉求。用户反映生成技能时长时间阻塞且无中间态展示，甚至对比了同模型在 Openclaw 中的表现，认为 LobsterAI 的需求理解存在偏差。这反映了用户对**任务执行透明度**和**指令遵循准确度**的强烈诉求。

## 5. Bug 与稳定性
今日无新增 Bug 报告，系统核心稳定性无新增负面信号。历史遗留 Bug 仍处于待处理状态：
*   **[中等] UI 状态异常 / 交互阻断**：Issue [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) 指出，在任务对话框运行期间，点击上传附件无反应。这属于典型的状态机阻塞问题（任务执行中禁用了 UI 但未给出合理提示），目前已被标记为 `stale`，暂无对应的修复 PR。

## 6. 功能请求与路线图信号
从近期的 Issue 与已合并的 PR 中，可以捕捉到以下产品演进信号：
*   **执行过程可视化（待规划）**：用户强烈渴望看到 AI 的“中间思考过程态”（#1350）。未来可能会在渲染层（`area: renderer`）引入更细粒度的 Streaming UI 更新。
*   **多智能体协作与隔离（进行中）**：从 PR #2272 的标签 `[area: cowork]` 和修复内容可以看出，LobsterAI 正在深耕多智能体协作场景，确保每个 Agent 具备独立、清晰的身份边界。
*   **深度集成浏览器能力（已实现）**：PR #2272 涉及的 `[area: openclaw]` 及代理透传，印证了项目正在强化 AI 智能体对真实网络环境的操作与适应能力。

## 7. 用户反馈摘要
通过提炼 Issues 中的反馈，当前真实用户痛点主要集中在**“过程不透明”**带来的失控感：
*   **痛点**：当 AI 执行耗时任务（如创建本地技能）时，缺乏进度条或思考过程的展示，导致用户不知道系统是卡死了还是在正常运行。
*   **期望**：上传附件等基础交互不应该因为后台任务运行而被彻底锁死（#1352）。
*   **对比压力**：用户会将 LobsterAI 与业界其他优秀框架（如 Openclaw 内的同款模型）进行横向对比，对模型的 Prompt 消费和意图理解能力要求极高。

## 8. 待处理积压
维护者团队需要注意，有几个标记为 `[stale]` 的历史积压正在消耗社区耐心，建议进行分类清理：
1.  **Issue [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352)**：任务进行中附件无法上传（停滞 3 个月，今日有活跃标记）。
2.  **Issue/PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350)**：技能生成阻塞、无中间态展示、模型理解能力存疑（停滞 3 个月）。

*注：这两个积压问题严重影响了用户体验闭环。虽然项目在底层架构（如 IDENTITY 迁移、代理透传）上日趋完善，但建议尽快安排前端渲染层的交互优化和长任务超时处理机制。*

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

这里是为您生成的 2026-07-05 CoPaw (QwenPaw) 项目动态日报。报告基于过去 24 小时的开源社区数据，从客观、专业的视角对项目健康度与进展进行了深度剖析。

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-07-05)

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内项目共产生 10 条 Issue 更新（8 活跃/新开，2 关闭）与 5 条 PR 更新（3 待合并，2 已关闭），社区讨论热烈，且开发者提交补丁的速度非常迅速。
- **重心向 V2.0 与长程记忆倾斜**：从 Issue 反馈来看，大量用户已开始在内测或测试分支（如 `2.0.0b3`）体验新功能，尤其是 Auto-memory（自动记忆）和上下文压缩功能，这也成为当前 Bug 报告的集中爆发点。
- **底层鲁棒性持续提升**：今日有多名贡献者提交了关于模型重试、Fallback 机制以及记忆搜索重排的 PR，表明项目正在向企业级的高可用架构演进。

## 2. 版本发布
**本日无新版本发布**。
*(注：根据社区讨论，V2.0 正式版正处于密集的修复与打磨阶段，社区对此抱有极高期待。)*

## 3. 项目进展
今日有 2 个重要的 PR 被关闭，标志着特定功能分支的尘埃落定：
- **记忆搜索重排功能落地**：PR [#5647](https://github.com/agentscope-ai/QwenPaw/pull/5647) 与 [#5648](https://github.com/agentscope-ai/QwenPaw/pull/5648) 已关闭。这两个 PR 旨在为记忆搜索结果引入可配置的外部 Reranker（如 SiliconFlow），通过结合向量与 BM25 混合搜索来提升相关性。这表明记忆检索的准确性在底层得到了重要升级。
- *(注：今日暂无标记为 Merged 的代码合并进主分支，但有 3 个高价值的 Feature PR 正在等待 Review，进展蓄势待发。)*

## 4. 社区热点
今日社区焦点主要集中在 **QwenPaw V2.0 的新特性兼容性与稳定性** 上：
- **V2.0 正式版的期待**：Issue [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770) 中，用户直接表达了对 V2.0 正式版“惊艳所有人”的强烈期待，反映出市场对项目 UI 和功能跃升的认可。
- **长程对话的记忆与上下文管理**：关于 Auto-memory 和 Scroll 压缩的讨论（如 [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775), [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778)）引发了大量关注。用户在实际使用中发现，2.0 版本激进的上下文裁剪策略虽然节省了 Token，但容易导致 AI “失忆”或“跑偏”。这是当前亟待解决的核心痛点。

## 5. Bug 与稳定性
按严重程度排列，今日报告的关键 Bug 如下：

**P0 级别 (功能性完全阻断/核心逻辑受损):**
- **Scroll 压缩导致上下文丢失及 API 报错** ([#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778)): V2.0 默认的 Scroll 压缩策略丢失关键上下文，且在 thinking 模式下丢弃 `reasoning_content`，配合 auto_memory_search 会直接触发 API 400 错误。
- **Auto-memory 状态丢失** ([#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775)): 因请求级代理重构导致 `MemoryMiddleware` 状态丢失，`auto_memory_interval` 永远无法触发，记忆无法持久化到 `memory/` 目录。
- **IM 长会话上下文污染** ([#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776)): 在长生命周期的 QQ/IM 会话中，陈旧的置顶用户消息被误认为是当前活跃任务，导致 AI 行为异常。

**P1 级别 (特定渠道中断):**
- **OpenCode 渠道记忆搜索失效** ([#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773)): 开启记忆搜索导致 OCG 的 DeepSeek 模型请求被直接拒绝/超时。
- **Google Gemini 接口报错** ([#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774)): Google Gemini 格式端点发生 Traceback 级错误。

**P2 级别 (非阻断性/体验受损):**
- **LM Studio 模型切换导致多模态失效** ([#5772](https://github.com/agentscope-ai/QwenPaw/issues/5772)): *(注：此 Issue 今日已 CLOSED)*。HTTP 400 被误判为媒体拒绝，毒化多模态能力缓存。
- **日志级别误用刷屏** ([#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771)): `model_factory.py` 调试日志误用 `WARNING` 级别。

## 6. 功能请求与路线图信号
结合用户需求与活跃 PR，以下方向极有可能在近期被纳入主线：
- **Auto-memory 状态修复**：针对严重的 Bug [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775)，开发者 jinliyl 已迅速提交了 PR [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777)，引入了基于 Session 的状态追踪机制，预计很快合并。
- **LLM 模型容灾与 Fallback 机制**：PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) (后端) 和 [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) (前端 UI) 正在推进。允许 Agent 在当前模型重试耗尽后自动切换备用模型。这将极大提升作为“个人助手”的 24/7 在线稳定性，是项目迈向商业/重度可用的重要一步。
- **更丰富的 Agent 个性化**：Issue [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 提出支持自定义对话中的 Agent 名称与头像，该诉求清晰且符合产品演进方向。

## 7. 用户反馈摘要
- **痛点 1：V2.0 上下文管理过于激进**。真实用户反馈：“之前讨论的关键信息、决策被压缩成几句模糊标题，后续回复完全跑偏，牛头不对马嘴”。用户怀念低版本不丢失上下文的体验。
- **痛点 2：IM 渠道的复杂性**。长期挂机的 IM 机器人（如 QQ）会出现“陈旧任务错认”和“记忆不触发”的双重 Bug，说明高并发或长生命周期的 Middleware 隔离仍需打磨。
- **满意点**：社区对 CoPaw 的架构设计（如 ReMe 记忆管理器、多渠道分发）评价极高，尤其是将本地大模型、LM Studio 与云服务（DeepSeek、Gemini）融合的能力，受到开发者追捧。

## 8. 待处理积压
- **长期的 UI/体验优化请求**：Issue [#2830](https://github.com/agentscope-ai/QwenPaw/issues/2830)（提出于 4 月 2 日，今日有活跃更新）。用户呼吁桌面端增加“隐藏到托盘后台运行”以及“UI 意见反馈入口”。随着 V2.0 正式版临近，建议维护者评估此低开发成本、高体验回报的功能是否可排入近期的迭代计划。
- **Auto-memory 的边缘兼容性**：由 issues [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) 和 [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778) 可见，新引入的 `auto_memory_search` 与第三方网关（如 OpenCode Go）及 reasoning 模型的兼容性测试覆盖率可能不足，需要维护者予以关注。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期**: 2026-07-05
**项目定位**: 领先的开源 AI 智能体与个人 AI 助手框架
**数据来源**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览
过去 24 小时内，ZeroClaw 展现出极高的研发活跃度与社区参与度。项目共处理了 **50 条 Issue 更新**（其中新开/活跃 39 条，关闭 11 条）以及 **50 条 PR 更新**。
尽管没有发布新的正式版本，但底层架构迎来了重量级升级：备受期待的 **“目标模式”** 基础设施已拆分为多个大型 PR 提交。此外，核心维护者针对近期暴露的 Provider 兼容性（特别是 OpenAI 格式）和本地化（i18n）问题发起了集中修复，v0.8.3 的功能边界正在快速成型并收敛。

---

## 2. 版本发布
* **本日无新版本发布 (0 Releases)。**
* 当前开发重点正聚焦于 **v0.8.3** 的各项 Tracker 目标以及 **“目标模式”** 的底层重构，预计正在为下一个 Beta 或 RC 版本积蓄能量。

---

## 3. 项目进展
今日虽然仅有 3 个 PR 被合并/关闭，但大量关键代码已进入审核队列，项目在以下三个核心维度取得重大突破：

* **目标模式 基础设施落地**：维护者 `vrurg` 提交了 4 个 XL（超大型）堆栈式 PR，将目标导向任务的基础设施正式引入主干。包括：
  * [#8685 Goal 任务持久化存储](https://github.com/zeroclaw-labs/zeroclaw/pull/8685)：引入了 SQLite 支持的持久化任务注册表，支持暂停/阻塞/恢复。
  * [#8687 控制器与验证器](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) 及 [#8689 命令准入机制](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)。
* **系统集成与 WebUI 变现**：[#8590 可视化 SOP 编辑器](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 开始邀请 Beta 测试者，这将极大降低用户编写确定性 Agent 工作流的门槛。
* **文档与架构治理**：[#8697 从代码自动生成功能矩阵](https://github.com/zeroclaw-labs/zeroclaw/pull/8697) 解决了文档滞后于代码的长期痛点；[#8694 恢复并补充 ADR 决策记录](https://github.com/zeroclaw-labs/zeroclaw/pull/8694) 增强了架构的可追溯性。

---

## 4. 社区热点
今日讨论最热烈的问题围绕着**多平台兼容性**、**工作流管理机制**以及**运行时透明度**展开：

* **[Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (15 评论)**: **[已关闭]** 用户反馈在 TUI 会话中无法获取 MCP 工具，但 Gateway 却能正常识别。这反映出不同表层（TUI vs API）在工具发现机制上的状态同步存在缺陷。
* **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (13 评论)**: **RFC 提案** - 关于工作泳道、看板自动化与标签清理。说明社区对 ZeroClaw 的 Issue 看板管理自动化有着强烈诉求，维护者正在推进该治理方案。
* **[Issue #8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) (7 评论)**: “目标模式”实现拆分追踪器。标志着社区高度关注的复杂长程任务规划能力正在进入代码审查阶段。
* **[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) (7 评论)**: **RFC 提案** - 增加类似 `.gitignore` 的 `.ignore` 机制以保护工作区敏感文件。用户对 AI 读取本地配置（如 `.env`, `config.yaml`）的安全隐患感到担忧。

---

## 5. Bug 与稳定性
今日报告了多个高优先级（S1/S2）问题，部分已快速响应并提交修复 PR：

**🔴 S1 - 工作流阻断**
* **[Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) Skill-Review 崩溃 (SIGSEGV)**：在进行工具密集型对话时，后台审查进程因切片越界导致整个守护进程崩溃（退出码 139）。
  * ✅ **修复 PR**: [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) 针对压缩边界绑定了切片历史。
* **[Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) SOP 审批门禁绕过**：驱动程序可通过 `sop_advance` 绕过运行状态检查，越过人工审批节点。涉及核心安全流程。
* **[Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) OpenRouter/OpenAI 工具调用格式畸形**：模型输出格式不佳时，未经验证的 JSON 被直接重序列化发送，导致 Provider 返回 400 错误及空回复。

**🟠 S2 - 体验降级 / 数据安全**
* **[Issue #8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) 定时任务 潜意识泄露**：即使设置了 `uses_memory = false`，Cron 任务仍在调用记忆。
  * ✅ **修复 PR**: [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 将该标志暴露给 CLI、工具和 Gateway API 进行强制拦截。
* **[Issue #8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) 兼容性 Provider 误删内容**：无条件剥离 `<think>` 标签导致正常回复内容被静默删除。

---

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动向，推测 v0.8.3 的核心迭代方向：

* **高级工作流编排 (SOPs)**：除了 Bug 修复，用户希望 SOP 更加智能。如 [Issue #8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) 请求当 `when` 条件为假时， SOP 应推进到下一步，而不是直接结束运行，以支持多阶段 SOP。
* **更丰富的渠道集成**：[PR #8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) 正在为 Git forge 渠道添加 Gitea/Forgejo 提供商，打通了基于 Git 仓库的事件驱动 Agent 路径。
* **可观测性增强**：[PR #8622](https://github.com/zeroclaw-labs/zeroclaw/pull/8622) 为 WhatsApp/WeChat 的扫码登录引入了结构化日志事件，解决了无头模式下无法获取登录状态的痛点。

---

## 7. 用户反馈摘要
从评论和 Issue 摘要中，可以提炼出当前用户的几个核心痛点与赞赏点：

* **痛点 1：本地化 (i18n) 严重割裂**：多个 Issue（如 [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917), [#7139](https://github.com/zeroclaw-labs/zeroclaw/issues/7139)）指出，大量运行时工具描述和 Web 聊天按钮在非英语（如中文、日语）下静默回退为英文。好在维护者今日已通过 [PR #8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) 开始系统性地推进状态碎片的本地化。
* **痛点 2：OpenAI-compat 协议兼容脆弱**：接入了 vLLM、MiniMax、OpenRouter 等第三方模型。当模型输出不完全符合 OpenAI 规范时，ZeroClaw 容易发生“工具调用死循环”或直接崩溃。
* **满意点：架构透明度与安全意识**：社区对 ZeroClaw 引入 SOP（标准作业程序）评价极高，认为这是让 AI “按规矩办事”而非“自由发挥”的关键，用户正在积极推动更完善的审计日志和文件保护机制。

---

## 8. 待处理积压
*请维护团队关注以下因阻塞或缺乏响应而积压的高风险项目：*

* ⚠️ **[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) `.ignore` 机制 RFC**：目前状态为 `status:blocked` 且 `needs-author-action`。作为防止 AI 泄露敏感配置的防线，该功能对需要本地运行智能体的企业级用户至关重要，建议推进评估。
* ⚠️ **[Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) 泄露检测器 误报**：从 3 月份开启至今未解决。高熵启发式检测过度标记了 MD5 哈希和微信媒体文件，严重干扰了正常的文件处理任务。
* ⚠️ **[Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) WASM 插件 OCI 仓库 RFC**：作为 `runtime:wasm` 域的高风险提案，目前处于 `status:blocked`。如果计划在 0.8.x 稳定 WASM 插件生态，此项进度需要被明确。

</details>