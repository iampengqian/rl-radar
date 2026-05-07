# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-07 22:18 UTC

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

# 📊 OpenClaw 项目动态日报 (2026-05-08)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

过去 24 小时，OpenClaw 项目保持**极高活跃度**，Issue 与 PR 更新均达到 500 条上限（Issues 新开/活跃 269，关闭 231；PR 待合并 354，合并/关闭 146）。项目核心团队与社区正在集中处理 `v2026.5.4`~`v2026.5.6` 带来的**通道 API 破坏性变更及网关性能回归**。同时，项目迎来了一个重要的底层架构重构 PR（将运行时状态迁移至 SQLite），预示着项目在数据持久化稳定性方面正迈出关键一步。

---

## 2. 版本发布

### [v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)
- **更新重点**：主要修复了插件发布与打包管道的稳定性问题。
- **详细内容**：
  - **重试瞬态故障**：针对 ClawHub CLI 依赖安装过程中的瞬时失败增加了重试机制。
  - **容错提升**：在预览测试中，即使单个预览单元出错，也允许预览通过的插件继续发布，提高了发布流程的鲁棒性。
  - **版本校验**：在发布后增加对所有预期 ClawHub 包版本的验证，使得维护版本能够更快恢复，降低了发布失败的风险。
- **迁移注意**：本次为纯粹的构建/发布管道修复，对终端用户无破坏性变更，无需额外迁移操作。

---

## 3. 项目进展

今日虽然以修 Bug 为主，但也合并/推进了多个关键 PR，项目整体在**网关稳定性、多通道兼容性及 CLI 体验**上取得进展：

1. **[PR #79110] 网关 Watch 模式同步追踪优化**：将网关的 sync I/O 诊断行为从默认开启改为 opt-in（按需开启），大幅减少了 Node.js 同步 I/O 产生的噪音日志。
2. **[PR #79095] 技能监控器遍历边界修复**：限制了 skills watcher 的目录遍历深度（仅扫描当前及一级子目录），避免了在大型非技能文件树下发生的递归监听，显著降低系统资源消耗。
3. **[PR #79016] CLI 向导国际化支持**：引入了 CLI 安导向导 (`openclaw setup`) 的国际化架构，并率先支持了简体中文，打破了非英语用户的首次运行语言壁垒。
4. **[PR #79112] 运行时别名兼容性修复**：修复了遗留兼容性包装器导致稳定根运行时别名不可写的问题，确保旧版平滑升级。

---

## 4. 社区热点

今日社区讨论焦点高度集中在**通道兼容性崩溃**与**凭证安全/花费控制**上：

- 🥇 **[Issue #9443]** 预编译 Android APK 请求 (👍 1, 评论 24)
  - **诉求**：社区强烈希望官方能直接在 GitHub Releases 中提供预编译的 Android 伴侣应用 APK，而不是让用户自行从源码编译。
- 🥈 **[Issue #78407]** 升级导致 ChatGPT OAuth 用户被锁 (👍 3, 评论 16)
  - **诉求**：从 `2026.5.4` 升级后，`openclaw doctor --fix` 自动重写了模型引用，导致 OAuth 凭证失效。用户呼吁修改自动迁移脚本的行为。
- 🥉 **[Issue #10659]** 掩码密钥防止 API Key 泄露 (👍 4, 评论 12)
  - **诉求**：建议引入“掩码密钥”机制，允许 AI Agent 调用 API 但无法直接“看到”明文，以防范 Prompt 注入窃取凭证。
- 🔥 **[Issue #38248]** 按小时设置消费上限 (评论 8)
  - **诉求**：当主模型触发限流时，故障转移链会使用昂贵的备用模型，导致资金快速消耗。社区强烈要求加入**基于成本的熔断开关**。
- 🔥 **[Issue #76804]** WebChat 响应未持久化回归问题 (👍 5, 评论 6)
  - **诉求**：在 5.2 版本中，通过 WebChat 产生的对话记录未能写入 transcript，严重影响了审计和上下文连贯性，引起运营人员强烈不满。

---

## 5. Bug 与稳定性

近期发布的版本引入了部分严重回归，目前社区和核心团队正在紧急修复中：

**🔴 严重**
- **[Issue #78232] & [Issue #77837] 微信插件不兼容及获取更新失败**：
  - **现象**：升级至 `2026.5.4` 后，`openclaw-weixin` 插件因 `channelRuntime` API 变更导致消息处理中断，持续抛出 `TypeError: fetch failed`。
  - **状态**：已定位为 API 破坏性变更导致的模块实例隔离问题 ([Issue #78376](https://github.com/openclaw/openclaw/issue/78376))，等待官方兼容性修复。
- **[Issue #78402] 网关连接频繁断开 (1000/1005/1006)**：
  - **现象**：由于卡顿的工具调用导致事件循环饥饿，网关在启动后不久即停止响应，UI 频繁掉线。
- **[Issue #76562] 升级后 CPU 占用 100% 且控制面延迟极高**：
  - **现象**：从 `2026.4.24` 升级到 `2026.5.2` 后出现严重的性能退化。

**🟡 中等**
- **[Issue #78262] 飞书话题 Session Key 不匹配**：首条消息使用 `messageId`，后续使用 `thread_id`，导致会话上下文被割裂。
- **[Issue #77551] AWS Bedrock 凭证刷新失效**：`v2026.5.3` 后网关无法在运行时获取 AWS 刷新后的凭证，导致 `ExpiredTokenException`。

---

## 6. 功能请求与路线图信号

结合近期的 PR 动向，以下功能请求极有可能在后续版本中落地：

1. **底层数据存储重构**
   - **相关 Issue**：Session 丢失、上下文压缩问题频发（如 [Issue #2597](https://github.com/openclaw/openclaw/issue/2597)）。
   - **关联 PR**：核心开发者 @steipete 提交了 [PR #78595] "Refactor runtime state into SQLite"，旨在将散落的 JSON/JSONL 文件统一迁移到类型化的 SQLite 数据库中。这将是未来版本的基石。
2. **MCP 工具调用的审批流**
   - **相关 Issue**：[Issue #78308] 请求为 MCP 服务器增加通道介导的审批机制（Consent Envelope）。
   - **关联 PR**：[PR #79106] 正在为网关暴露显式白名单的 `/tools/invoke`，为外部工具的安全接入铺路。
3. **执行审批黑名单**
   - **相关 Issue**：[Issue #6615] (👍 7) 呼吁增加 `exec-approvals` 的拒绝名单。
   - **现状**：该特性呼声极高，符合项目近期“安全零信任”的演进方向，预计近期会有人提交对应 PR。

---

## 7. 用户反馈摘要

从近期的 Issues 提取的真实用户声音：

- **发布与自动化痛点**：大量用户在升级时遇到阻断问题，特别是 `openclaw doctor` 执行的自动配置重写破坏了原有设定，引发生产环境恐慌。用户建议“不要自作主张改我的 config”。
- **云部署文档匮乏**：[Issue #13597] 反映目前文档严重缺乏 AWS 等云环境的部署指南，用户在配置 ECS/Lambda 时只能摸着石头过河。
- **Memory 机制不够智能**：[Issue #68449] 和相关 PR 表明，目前的 Dreaming（记忆沉淀）机制存在脏数据（如把 "assistant" 当作高频主题），用户希望记忆召回能更精准，不干扰正常推理。
- **多 Agent 协同缺陷**：主代理与子代理之间的沟通存在阻碍，[Issue #77908] 显示某些通道下子代理的回复仅能在 WebUI 显示却无法推送到 IM 话题中，破坏了自动化工作流。

---

## 8. 待处理积压

以下重要问题悬而未决或缺乏核心维护者的实质性回复，建议团队关注：

- **长期架构痛点**：
  - [Issue #2597] 上下文窗口使用量不透明导致意外压缩丢失状态（悬而未决数月，期待 SQLite 重构能根治）。
  - [Issue #1210] Discord 图片以 Base64 形式存入 session，极易撑爆 200K Token 限制。
- **高优功能请求**：
  - [Issue #10659] 敏感信息（API Key）掩码防泄露，涉及核心安全，需尽快排期。
  - [Issue #9443] 提供 Android 预编译包，降低移动端用户门槛。
- **需要推进的大型 PR**：
  - [PR #79092] 通道入口访问权限集中化重构（涉及几乎所有的通道插件，需谨慎 Review 合并）。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 8 日的主要开源项目动态，为您输出如下横向对比与生态洞察报告。

---

# 📊 个人 AI 助手与自主智能体开源生态横向对比报告 (2026-05-08)

## 1. 生态全景
当前 AI 智能体与个人助手开源生态正处于**“底层架构重构与多端通道爆发”的阵痛与机遇并存期**。项目重心已从单一的 LLM 对话封装，全面转向**长期记忆持久化、多模态/多通道网关路由、以及复杂 Agentic 工作流的编排**。同时，生态呈现出明显的两极分化：一方面极力适配企业级高并发场景，另一方面在端侧计算和本地隐私化部署上寻求极致突破。整体而言，随着底层模型能力的跃升，智能体正在经历从“玩具”向“自动化生产工具”的实质性跨越。

## 2. 各项目活跃度对比
*(注：部分项目如 TinyClaw、ZeptoClaw 过去 24 小时无活动，未列入统计)*

| 项目名称 | 活跃 Issues (新/评论) | 活跃 PRs (新/合并) | 版本发布情况 | 核心事件 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (达上限) | 500 (达上限) | **v2026.5.7** | 修复网关回归，推进 SQLite 持久化架构 | 🟢 极高 (稍显拥挤) |
| **IronClaw** | 23 | 50 (合并31) | **v0.28.0** | "Reborn"架构落地，WASM与数据库重构 | 🟢 极佳 (重构期) |
| **CoPaw** | 50 | 33 (合并22) | 无 | 备份恢复优化，前端 TokenUsage 重构 | 🟢 健康 (快速迭代) |
| **ZeroClaw** | 50 | 50 (合并 0) | 无 | 大量PR积压待审查，爆发底层兼容Bug | 🟡 积压严重 (停滞风险) |
| **PicoClaw** | 14 | 18 (合并18) | Nightly 构建 | Go底层安全升级，MCP工具健壮性修复 | 🟢 健康 (稳步推进) |
| **NanoBot** | 10 | 30 (处理11) | 无 | 核心会话记忆与摘要机制重构 | 🟢 健康 |
| **NanoClaw** | 5 | 31 (合并23) | 无 | 修复 A2A(智能体间) 消息路由错乱 | 🟢 健康 (修复期) |
| **Hermes Agent**| 50 | 50 | **v0.13.0** | "The Tenacity Release"，强化长周期任务 | 🟢 极高 (版本大更新) |
| **LobsterAI** | 数据缺失 | 45 (合并36) | **2026.5.7** | 架构分页突破，修复流式输出吞字 | 🟢 健康 |
| **Moltis** | 4 (关闭4) | 10 (合并9) | 双版本连发 | 引入 Ed25519 去中心化身份与电话网络支持 | 🟢 极佳 (轻快敏捷) |
| **NullClaw** | 6 | 7 (合并2) | 无 | 适配 ACP 协议，聚焦低资源设备 | 🟡 良好 (稳步开发) |

## 3. OpenClaw 在生态中的定位
*   **绝对的体量与生态枢纽**：OpenClaw 的单日 Issue/PR 活动量双双触及 500 上限，远超同类项目，是当之无愧的生态核心参照系。其社区规模和插件生态（如微信、飞书通道插件）最为庞大。
*   **技术路线：企业级网关与控制并重**：与 Hermes Agent（专注本地端侧）或 NullClaw（追求极致轻量）不同，OpenClaw 正在向复杂的**企业级零信任安全网关**演进。其对 MCP 审批流、掩码密钥防泄露、按小时消费熔断的探讨，反映了其在应对生产环境高阶需求上的领先。
*   **当前痛点与同类对比**：OpenClaw 当前深受“破坏性 API 变更”导致的通道兼容性崩溃（如微信插件失效）之苦。相比之下，PicoClaw 在多渠道并发的状态机管理上做得更精细，而 IronClaw 在底层数据库持久化（libSQL/Postgres）的步伐甚至更快一步。

## 4. 共同关注的技术方向 (行业共识)
从多项目并发解决的痛点中，可以提炼出当前智能体开发的核心技术共识：
1.  **底层数据持久化重构**：**OpenClaw** (迁移至 SQLite)、**IronClaw** (引入 libSQL/Postgres)、**PicoClaw** 均在试图摆脱简单的 JSON/内存存储，以彻底解决长周期上下文丢失和会话状态损坏的问题。
2.  **多模态/多平台消息路由与重试**：跨平台（WhatsApp/Telegram/微信/飞书）消息错发、静默丢弃、重连机制羸弱是全行业的痛点。**NanoClaw** 重构了 A2A 路由，**NanoBot** 修复了 SSE 压缩降级，**ZeroClaw** 遭遇了 WhatsApp 协议大面积阻断。
3.  **本地/离线大模型的一等公民支持**：私有化部署需求激增。**Hermes Agent** 原生集成了 `llama.cpp`，**NullClaw** 呼吁轻量级搜索适配，**Moltis** 引入了 `whisper-local`，均反映出社区对脱离云端 API 束缚的强烈渴望。
4.  **Agentic 执行的安全与审批隔离**：对 AI 行为的确定性要求变高。**OpenClaw** 探讨 MCP 审批流与执行黑名单，**ZeroClaw** 引入 Shell 命令的 TOTP 双因子认证，**PicoClaw** 强化了 exec 沙箱的默认拒绝策略。

## 5. 差异化定位分析
*   **极客与隐私至上**：**Hermes Agent** (集成 llama.cpp, SearXNG) 和 **NullClaw** (主打低资源设备，Zig 构建) 瞄准的是注重隐私、喜欢在本地折腾的极客群体。
*   **多智能体社会网络探索者**：**Moltis** 引入了 Ed25519 挑战-响应验证，**NanoClaw** 完善了 A2A 寻址逻辑，这两个项目正在构思多节点、跨实例的去中心化智能体协同网络。
*   **企业级与 SRE 自动化**：**OpenClaw** 专注成本控制与企业合规，**IronClaw** 凭借 Reborn 架构和 WASM 扩展切入大型企业工作流（Teams/Slack 集成），**CoPaw** 则在深耕复杂任务的自动拆解。
*   **全平台网关中枢**：**PicoClaw** 和 **ZeroClaw** 致力于将所有主流 IM 平台打通，作为统一的 Agent 接入网关使用，对消息格式兼容性极其敏感。

## 6. 社区热度与成熟度分层
*   **第一梯队 (规模扩张与架构重构并存)**：**OpenClaw, IronClaw, Hermes Agent**。Issue 动辄数十上百条，社区热度极高，正经历从单体向模块化/重构演进必经的阵痛（频繁的破坏性变更和 P0 级 Bug）。
*   **第二梯队 (敏捷迭代与收敛打磨)**：**CoPaw, PicoClaw, NanoBot, NanoClaw, LobsterAI, Moltis**。项目治理极度健康，能做到“今日报 Bug，次日甚至当日合并 Fix PR”。它们处于快速吸收核心用户、稳步完善功能闭环的阶段。
*   **第三梯队 (瓶颈与停滞期)**：**ZeroClaw**。虽然社区热度高（大量 Issue/PR 产生），但由于 0 PR 合并、0 Issue 关闭，暴露出明显的 Maintainer 审查瓶颈，长此以往有流失社区信心的风险。

## 7. 值得关注的趋势信号 (开发者的参考指南)
1.  **Agent 记忆机制的“由虚转实”**：随着智能体执行任务的时间拉长，仅靠上下文拼接已彻底失效。全面迁移至关系型/文档型数据库，并引入独立的工作目录（如 LobsterAI、IronClaw 所为），是构建可靠 Agent 的必经之路。
2.  **安全隔离成为核心护城河**：单纯的 Prompt 注入防御已不够。工具级别的沙箱隔离、基于 TOTP 的高危操作二次确认（ZeroClaw）、针对 MCP 的安全过滤（Hermes Agent）正在成为开源项目的标准基线。
3.  **“静默失败”是当前最大的体验杀手**：无论是微信掉线、WebSocket 丢弃媒体，还是工具执行超时无重试（各项目高频反馈的痛点），开发者必须意识到：**在 Agentic 工作流中，没有明确的报错比报错本身更可怕**。构建具备指数退避重试和详尽异常捕获的系统迫在眉睫。
4.  **Docker / 复杂环境部署依然是重灾区**：多个项目暴露出嵌套 Docker 挂载失败、架构不兼容等问题。提供一键式 CLI 管理工具（如 CoPaw 的 backup 命令）和清晰的升级迁移脚本，将极大降低企业级部署的门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026年5月8日 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-08)

## 1. 今日速览
过去 24 小时内，NanoBot 项目保持着**高水平的社区活跃度与强劲的开发势头**。项目共处理了 10 条 Issue（关闭 6 个）和 30 条 Pull Request（处理 11 个，新增待合并 19 个），展现出维护者团队高效的需求消化能力和极高的社区贡献热情。今日的核心焦点集中在**底层会话记忆架构的重构（会话窗口丢失与摘要合并）**以及**多渠道（WebSocket、微信、WhatsApp）的稳定性修复**。整体来看，项目正处于积极收敛底层 Bug、夯实核心稳定性的关键迭代期。

## 2. 版本发布
**无新版本发布。**（项目近期正通过大量的底层修复 PR 积蓄力量，预计在当前的会话记忆架构和渠道异常处理完善后，将迎来一次较为集中的版本更新）。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在底层架构健壮性、日志可观测性及 CI 代码规范方面取得了实质性进展：

*   **核心记忆机制修复**：PR [#3687](https://github.com/HKUDS/nanobot/pull/3687) 修复了历史会话整合受限于重放窗口导致上下文丢失的问题；同时 PR [#3660](https://github.com/HKUDS/nanobot/pull/3660) 恢复了 Dream 模块在还原时缺失的内存游标状态，大幅增强了智能体的持久化记忆能力。
*   **异常捕获与日志规范化**：由核心开发者推动的 PR [#3678](https://github.com/HKUDS/nanobot/pull/3678) 对底层异常处理块进行了重构，统一使用 `logger.exception` 保留完整的堆栈追踪，显著提升了线上问题的排查效率。
*   **SSE 流式输出修复**：PR [#3677](https://github.com/HKUDS/nanobot/pull/3677) 移除了导致 HTTP 压缩缓冲的 `enable_compression`，彻底修复了 SSE 流式响应看起来像批量返回的降级体验。
*   **CI/CD 质量把控**：PR [#3672](https://github.com/HKUDS/nanobot/pull/3672) 启用了 Ruff 全量 F 规则检查并修复了历史遗留的不规范代码，提升了整体代码质量。

## 4. 社区热点
根据互动量及影响面，今日社区最关注的讨论聚焦于**多模态支持**与**个性化配置**：

*   **语音转写能力的深度重构**：PR [#3513](https://github.com/HKUDS/nanobot/pull/3513) 提出统一转录提供者并增加本地 Whisper 支持，直击现有语音模块静默失败和缺乏本地化部署方案的痛点，引发了大量讨论。
*   **WhatsApp 业务流同步**：Issue [#3688](https://github.com/HKUDS/nanobot/issues/3688) 提出新增 `/sync-meta` 命令以将交互组件推送到 Meta 平台，这反映了重度 ToB 用户在部署复杂 AI 业务流时的强烈诉求。
*   **客户端深度定制化**：Issue [#3650](https://github.com/HKUDS/nanobot/issues/3650) 与 Issue [#3652](https://github.com/HKUDS/nanobot/issues/3652) 均反映了用户对修改 Bot 默认名称、图标以及按需关闭特定功能（如 Dream 模块）的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响稳定性的关键问题，部分已由社区迅速提交修复 PR：

*   **🔴 P0 级：WebSocket 连接与媒体丢失**
    *   Issue [#3682](https://github.com/HKUDS/nanobot/issues/3682) 与 Issue [#3683](https://github.com/HKUDS/nanobot/issues/3683) 报告了 Gateway 的 WebSocket 握手失败及跨平台访问鉴权异常（已关闭/已有处理方案）。
    *   Issue [#3674](https://github.com/HKUDS/nanobot/issues/3674) 指出 WebSocket 渠道会静默丢弃客户端发送的 `media` 媒体字段（**待修复**）。
*   **🟠 P1 级：大模型 API 调用异常**
    *   Issue [#3665](https://github.com/HKUDS/nanobot/issues/3665) 报告了 DeepSeek-v4-flash 在思考模式下由于未回传 `reasoning_content` 导致的 API 报错（已关闭）。
    *   Issue [#3681](https://github.com/HKUDS/nanobot/issues/3681) 反映 LLM 调用频繁出现 `timed out after 300s` 超时错误，可能需要优化底层网络重试机制。
*   **🟡 P2 级：微信渠道消息静默丢失**：PR [#3684](https://github.com/HKUDS/nanobot/pull/3684) 修复了微信渠道因 Token 过期或异常被吞没导致的静默掉线问题。
*   **🟡 P2 级：历史会话数据损坏**：Issue/PR 提交了关于 `last_consolidated` 超出消息条数时导致会话清空的防护性修复 ([#3680](https://github.com/HKUDS/nanobot/pull/3680))。

## 6. 功能请求与路线图信号
综合今日的需求与代码提交，可以看出项目在下一阶段的演进方向：

*   **离线与本地化增强**：PR [#3662](https://github.com/HKUDS/nanobot/pull/3662) 避免了 Token 估算时的网络请求，结合上述提到的本地 Whisper 转写，项目正在强化“完全内网/离线可用”的特性。
*   **沙盒执行安全性**：PR [#3642](https://github.com/HKUDS/nanobot/pull/3642) 允许用户为 `bwrap` 沙盒自定义挂载目录，预示着 AI Agent 的代码执行工具将具备更灵活的安全隔离边界。
*   **个性化与定制化体验**：允许配置自定义 Bot 名称和图标 ([#3650](https://github.com/HKUDS/nanobot/issues/3650))，以及 CLI 端支持展示模型的推理/思考过程 ([#3655](https://github.com/HKUDS/nanobot/pull/3655))，表明项目正致力于改善终端用户的交互体验。

## 7. 用户反馈摘要
从 Issue 细节中可以提炼出以下典型的用户真实体验反馈：
*   **场景广泛，多端接入需求强**：大量报错集中在微信、WhatsApp、WebSocket 和 Matrix 等渠道，说明用户正积极将 NanoBot 接入各种第三方 IM 系统作为私域/客服机器人。
*   **“静默失败”是最大痛点**：多个 Bug 报告提到“静默丢弃”或异常被吞没（如微信、语音下载、WebSocket 媒体），说明用户对 AI 行为的确定性要求极高，Debug 极其困难。
*   **深度对接 ToB 业务流**：如要求同步 Meta 自动化指令、处理企业级并发时的网络超时等，表明 NanoBot 已经吸引了一部分构建生产级商业应用的开发者。

## 8. 待处理积压
以下高价值且长期未得到最终处理的议题/代码需要维护团队重点关注：

*   **核心 PR 积压需合并**：涉及心跳机制优化以节省 Token 的 PR [#1939](https://github.com/HKUDS/nanobot/pull/1939) 和解耦心跳推理的 PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) 均已 open 超过一个月，建议优先 Review 以解决相关的性能与计费痛点。
*   **复杂新渠道接入**：支持强加密通讯的 SimpleX 频道 PR [#3486](https://github.com/HKUDS/nanobot/pull/3486) 仍待合并，需评估其代码质量与安全合规性。
*   **新暴露的严重稳定性问题**：Nightly 分支中发现的“运行时上下文脚手架泄漏到历史记录”的 Bug ([#3670](https://github.com/HKUDS/nanobot/issues/3670)) 和“上下文重组丢失”问题 ([#3685](https://github.com/HKUDS/nanobot/pull/3685)) 尚需确认并合并修复代码。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-08)

作为开源 AI 智能体与个人 AI 助手领域的分析师，以下是依据 `github.com/nousresearch/hermes-agent` 最新数据为您生成的 5月8日项目动态日报。

---

## 1. 今日速览
Hermes Agent 项目今日处于**高度活跃**状态，社区热度居高不下。过去24小时内，项目迎来了重大版本 **v0.13.0 "The Tenacity Release"** 的发布，标志着项目在稳定性和长周期任务处理上迈出了关键一步。Issues 和 PR 活动频繁（各有 50 条更新），表明开发者在积极修复底层 Bug 的同时，社区也在大量涌入关于多平台网关、本地模型适配以及工具链扩展的需求反馈。总体来看，项目处于快速迭代上升期，生态系统正在迅速扩张。

---

## 2. 版本发布
- **[v2026.5.7: Hermes Agent v0.13.0 (The Tenacity Release)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7)**
  - **更新规模**：自 v0.12.0 以来，包含 **864 commits**，合并了 **588 个 PRs**，涉及 **829 个文件修改**，新增代码 128,366 行。
  - **质量控制**：成功关闭了 **282 个 Issues**，其中包括 13 个 P0 级和 36 个 P1 级严重缺陷。
  - **社区贡献**：共有 **295 位社区贡献者**（包含联合作者参与）。
  - *注：官方 Release 提示被截断，推测 "The Tenacity" 主题侧重于提升 Agent 上下文记忆的长待机与复杂任务完成能力。升级时建议重点测试本地 Ollama 及内存记忆相关的兼容性。*

---

## 3. 项目进展
今日共合并/关闭了 6 个 PRs（绝大多数为针对 v0.13.0 发布后的即时修复），主要推进了以下工作：

- **安全防线增强**：[PR #21533](https://github.com/NousResearch/hermes-agent/pull/21533) 修复了 MCP 工具描述的潜在注入风险，默认对不可信的 MCP 工具描述进行安全过滤。
- **本地大模型支持优化**：[PR #21531](https://github.com/NousResearch/hermes-agent/pull/21531) 引入了对 `llama.cpp` 的一等公民支持，实现了零配置的仪表盘数据呈现，大幅降低本地部署门槛。
- **网关与平台修复**：
  - [PR #21529](https://github.com/NousResearch/hermes-agent/pull/21529) 修复了 Kanban 模块在并发情况下的列迁移崩溃问题（合并了对应 Issue）。
  - [PR #21535](https://github.com/NousResearch/hermes-agent/pull/21535) 修复了自定义 Provider 返回非 SSE JSON 流时的死循环重试问题。
- **生态集成拓展**：[PR #20989](https://github.com/NousResearch/hermes-agent/pull/20989) 成功将注重隐私的 **Brave Search** 添加为原生网络搜索后端。

---

## 4. 社区热点
今日社区讨论的核心聚焦在**长上下文记忆丢失**以及**本地模型集成体验**上：

- **🔥 上下文记忆读取失败**：[Issue #14420](https://github.com/NousResearch/hermes-agent/issues/14420) (评论数 10)
  - **分析**：多名用户反馈在使用 Ollama 提供商时，Agent 无法根据之前的上下文和记忆进行回答。这揭示了轻量级本地模型在复杂指令或长上下文提取上存在天然瓶颈，也可能是 Hermes 的 memory tool 解析逻辑存在兼容性遗漏。
- **🚀 动态模型路由**：[Issue #20249](https://github.com/NousResearch/hermes-agent/issues/20249) (评论数 5)
  - **分析**：开发者呼吁实现 "按需升级模型" 功能（如日常使用 Flash，遇到复杂代码推理自动切换至 Opus），反映了社区对成本控制与高性能计算平衡的强烈诉求。
- **🔌 SearXNG 搜索引擎支持**：[Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941) (👍 28)
  - **分析**：获得最高点赞数的功能请求，社区极度渴望集成可自建、完全开源隐私的 SearXNG 作为默认搜索选项。
- **🐾 原生 Brave Search 支持**：[Issue #10644](https://github.com/NousResearch/hermes-agent/issues/10644) (👍 22)
  - **分析**：随着今天相关 PR (#20989) 的落地，这一高热度需求已得到官方正式回应。

---

## 5. Bug 与稳定性
今日报告了大量网关与集成层面的 Bug（新增 45 个活跃 Issue），其中几个 P1/P2 级问题值得高度关注：

- **🚨 [P1] TUI 仪表盘子进程泄漏**：[Issue #21467](https://github.com/NousResearch/hermes-agent/issues/21467)
  - **现象**：使用 `hermes dashboard --tui` 时，`slash_worker` 子进程未按预期复用，导致在 128 个 worker 下将一台 7.8GB 内存的主机 Swap 耗尽。
  - **状态**：尚无关联 Fix PR，可能引发 OOM 崩溃，影响重度 TUI 用户。
- **🚨 [P1] 重复运行安装脚本导致死循环**：[Issue #21454](https://github.com/NousResearch/hermes-agent/issues/21454)
  - **现象**：重复执行 `install.sh` 会覆盖 venv 入口，生成一个无限递归调用的 bash shim，导致 CLI 直接卡死。
  - **状态**：需立即修复文档或安装脚本逻辑。
- **⚠️ [P2] 自定义 Provider 的 max_output_tokens 被静默丢弃**：[Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498)
  - **现象**：配置文件标准化过程中 `max_tokens` 参数丢失，导致输出全部卡在默认的 2048 长度。
- **⚠️ [P2] Telegram 长时间断网后永远无法自恢复**：[Issue #17063](https://github.com/NousResearch/hermes-agent/issues/17063), [Issue #12607](https://github.com/NousResearch/hermes-agent/issues/12607)
  - **现象**：网络波动超过重试次数（20次）后，Telegram 适配器直接"躺平"，必须手动重启 Gateway。

---

## 6. 功能请求与路线图信号
通过近期的 Issues 与 PR 动态，可以梳理出项目下一阶段的演进路线图：

- **模型动态调度**：[Issue #20249](https://github.com/NousResearch/hermes-agent/issues/20249) 提出的专家模型按需路由，与 [Issue #16525](https://github.com/NousResearch/hermes-agent/issues/16525) 要求的 `model_switch` 暴露为 Agent tool 相呼应。未来版本可能会原生支持 Agent 自主根据任务复杂度切换大模型。
- **本地推理零门槛化**：[PR #21531](https://github.com/NousResearch/hermes-agent/pull/21531) 已经实现了 `llama.cpp` 的原生支持，结合今日暴露的本地 Ollama 内存读取问题 ([#14420](https://github.com/NousResearch/hermes-agent/issues/14420))，**全面优化本地端侧模型的兼容性**显然是下个版本的核心目标。
- **企业级协同与插件化**：
  - Microsoft Teams 会议管道的 PR 拆分提交（如 [PR #21409](https://github.com/NousResearch/hermes-agent/pull/21409), [PR #21410](https://github.com/NousResearch/hermes-agent/pull/21410)）表明官方正在深耕企业办公场景。
  - Slack 的事故自动响应机制 ([PR #21416](https://github.com/NousResearch/hermes-agent/pull/21416)) 暗示 Hermes 正从一个单纯的 Chatbot 向自动化 SRE/运维中枢进化。

---

## 7. 用户反馈摘要
从今日的 Issue 描述和评论中，可以提炼出真实用户的几个典型画像和痛点：

1. **隐私敏感型极客**：大量用户希望完全脱离云端 API（如呼吁集成 SearXNG、Brave Search、llama.cpp）。用户痛点在于目前的本地部署虽然可行，但配置复杂，且常常遇到工具调用参数丢失的问题。
2. **多平台重度依赖者（Telegram/Slack）**：用户在实际生产环境中使用 Hermes 作为网关中枢，但经常被“静默断连”困扰（尤其是重连机制不够 Tenacity）。他们强烈期望平台重连机制能更加强健，并支持多 Bot 路由。
3. **安装与升级受挫的新手**：目前 `install.sh` 脚本在覆盖安装或 root 权限处理上存在缺陷（如死循环、uv路径越权），导致新用户体验卡在第一步。
4. **企业协同用户**：对于钉钉、Teams 的支持需求旺盛，特别是富媒体（图片发送）和会议纪要管道的打通。

---

## 8. 待处理积压
以下重要的高优先级/高热度问题仍处于 Open 状态，且部分已沉淀多日，建议核心维护团队重点关注：

- **Telegram 网关稳定性积压**：
  - [Issue #5729](https://github.com/NousResearch/hermes-agent/issues/5729) (冷启动解析失败)
  - [Issue #10452](https://github.com/NousResearch/hermes-agent/issues/10452) (支持多 Telegram Bot 路由)
- **核心工具与配置缺陷**：
  - [Issue #10221](https://github.com/NousResearch/hermes-agent/issues/10221) (CLI `/skills` 命令失效)
  - [Issue #12534](https://github.com/NousResearch/hermes-agent/issues/12534) (Docker sandbox 环境变量转发失败，阻碍云原生自动化部署)
- **开发者体验/插件系统完善**：
  - [Issue #18988](https://github.com/NousResearch/hermes-agent/issues/18988) (请求添加 `pre_tool_call` 参数重写钩子，提供与 Claude Code 同等灵活度的扩展性)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project daily report for PicoClaw based on the provided data.

---

# PicoClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
PicoClaw 项目今日保持极高的开发活跃度与社区互动热度。过去 24 小时内，项目新增/活跃了 14 个 Issue，并高效关闭了 22 个 Issue，同时有 18 个 PR 被合并，项目治理健康度极佳。今日发布了 `v0.2.8-nightly.20260507` 自动构建版本，底层工具链（Go 1.25.10 升级）和多渠道体验优化正在密集推进中。社区方面，开发者对多渠道（飞书、Telegram、Discord）的并发会话、历史记录隔离以及 LLM 调用的健壮性提出了深度反馈，反映出项目正从早期功能构建向企业级高可用阶段演进。

## 2. 版本发布
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)** 
  - **版本号**: `v0.2.8-nightly.20260507.788cda5c`
  - **更新说明**: 这是一个自动化发布的每日构建版本，主要包含近期合并到 `main` 分支的最新代码。由于是 nightly 版本，官方提示可能存在不稳定性，生产环境部署需谨慎。
  - **完整更新日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 18 个 PR 被合并/关闭，这些贡献显著提升了项目的稳定性、跨平台兼容性和工具链安全性：
- **Go 工具链安全基线更新**：多个 PR（如 #2818, #2821）致力于将 Go 版本从 `1.25.9` 升级至 `1.25.10`，修复了标准库中 `net/http` 相关的关键安全漏洞，保障了底层网关和 HTTP 代理的安全性。
- **多渠道体验修复**：
  - [PR #2091](https://github.com/sipeed/picoclaw/pull/2091) 修复了飞书群聊中机器人的 `@mention` 误判问题。
  - [PR #2090](https://github.com/sipeed/picoclaw/pull/2090) 解决了 Telegram 流式输出时的草稿残留和 Forums/Topics 路由错误。
- **MCP 工具健壮性**：[PR #2460](https://github.com/sipeed/picoclaw/pull/2460) 修复了 MCP 服务器在无参数调用时传递 `nil` 导致基于 Zod 验证的 TS 服务端报错的兼容性问题。
- **底层执行安全**：[PR #2298](https://github.com/sipeed/picoclaw/pull/2298) 增强了 `exec` 沙箱的安全性，对模糊的脚本预检强制采用“默认拒绝”策略。

## 4. 社区热点
今日社区讨论聚焦于 LLM 调用的健壮性和多用户场景的上下文管理：
- **[Issue #629](https://github.com/sipeed/picoclaw/Issue/629) (13 评论)**: 长期高优问题。用户反馈在执行长任务遇到 HTTP 500 时，LLM 调用缺乏重试机制导致任务挂起。这反映出社区对生产环境容错机制的强烈需求。
- **[Issue #2408](https://github.com/sipeed/picoclaw/Issue/2408) (11 评论)**: 提出了“弹夹式”API Key 轮询机制，以应对大模型的速率限制和配额耗尽问题。
- **[Issue #2171](https://github.com/sipeed/picoclaw/Issue/2171) (10 评论)**: 提出了底层架构重构建议，希望将 OpenAI 的端点从 Chat Completions API 迁移至官方推荐的 OpenAI Responses API。
- **[Issue #1042](https://github.com/sipeed/picoclaw/Issue/1042) (8 评论, 👍2)**: 开发者指出 `exec` 沙箱的安全路径正则校验过于简单粗暴，导致正常的非路径类命令被误杀（该痛点今日已产生修复 PR #2814）。

## 5. Bug 与稳定性
今日报告并处理的 Bug 集中在多端适配、历史会话和外部调用上：
1. **P0 - 历史记录丢失与截断**:
   - [Issue #2796](https://github.com/sipeed/picoclaw/Issue/2796): 一次对话包含多条用户消息时，历史记录仅显示最后一条，先前消息丢失（可能是为适配大模型上下文窗口压缩策略导致的副作用）。
   - [Issue #2721](https://github.com/sipeed/picoclaw/Issue/2721): Anthropic API 依然在 v0.2.5 版本中出现 `tool_use_id` 400 错误，历史会话竞态问题仍未彻底根除。
2. **P1 - 多频道与并发处理缺陷**:
   - [Issue #2702](https://github.com/sipeed/picoclaw/Issue/2702): Discord/飞书等群组频道中，多用户共享会话时，系统提示词中的“发送者”身份未能贯穿整个历史记录。
   - [Issue #2446](https://github.com/sipeed/picoclaw/Issue/2446): 多频道并发处理时，若某频道任务未完成，另一频道发出的消息会被直接错误回显。
3. **P1 - 环境与平台 Bug (已有修复)**:
   - [Issue #1763](https://github.com/sipeed/picoclaw/Issue/1763) (已关闭): `aarch64` 架构的 `.deb` 包依赖问题已解决。
   - [Issue #2472](https://github.com/sipeed/picoclaw/Issue/2472) (已关闭): Windows 下路径分隔符导致 `list_dir` 失败的问题已解决。

## 6. 功能请求与路线图信号
结合社区诉求与当前活跃的 PR，以下方向极有可能在后续版本落地：
- **会话管理的无损重置**：[Issue #2820](https://github.com/sipeed/picoclaw/Issue/2820) 呼吁支持不删除 SQLite 历史的“非破坏性会话重置”。对应已提出草稿 [PR #2819](https://github.com/sipeed/picoclaw/pull/2819)，预计很快会进入主干。
- **通道能力扩展**：
  - [Issue #2465](https://github.com/sipeed/picoclaw/Issue/2465): 请求增加 SMTP 邮件发送通道，以支持定时任务（Cron）将周报等结果推送到邮箱。
  - [Issue #348](https://github.com/sipeed/picocaw/Issue/348) (高优路线图): 通用附件处理支持。相关的 [PR #2758](https://github.com/sipeed/picoclaw/pull/2758) (Telegram 相册媒体组批处理) 已经就绪，这将极大增强机器人的多模态感知力。
- **Agent 调度精细化**：[PR #2790](https://github.com/sipeed/picoclaw/pull/2790) 正在实现将 `spawn` 工具的子任务路由到特定配置的 `agent_id`，标志着 PicoClaw 正向多智能体协同架构迈进。

## 7. 用户反馈摘要
从 Issues 动态中可以提取出用户的核心使用体验：
- **企业级自建模型痛点**：使用 OpenRouter 或本地部署（如 MLX-lm, 硅基流动）的用户频繁遇到接口兼容性、双重 Head 认证（[Issue #2169](https://github.com/sipeed/picoclaw/Issue/2169)）和权重模型 Tool Call 失败的问题，亟需完善异构 Provider 的容错处理。
- **部署环境复杂性**：用户在 Docker `ReadonlyRootfs`、Android Termux 等非标准环境部署时遇到文件系统写入限制和字符集乱码（[Issue #2377](https://github.com/sipeed/picoclaw/Issue/2377)）问题。
- **安全与易用性的博弈**：`exec` 工具的安全沙箱（如 `guardCommand`）引发了开发者的吐槽。用户认为当前的安全防御“误杀率”过高，在限制相对路径时影响了天气查询、外部脚本等正常工具的调用。

## 8. 待处理积压
以下关键问题近期虽有讨论但仍处于 Open 状态，或存在长期未彻底解决的回归，建议维护团队关注：
- **多用户/群组会话隔离机制**：[Issue #2702](https://github.com/sipeed/picoclaw/Issue/2702) 暴露出当前基于 `chat` 维度的会话设计在多人群组中缺乏上下文发送者归属，是向社群应用拓展的重大阻碍。
- **LLM 调用重试与熔断机制**：[Issue #629](https://github.com/sipeed/picoclaw/Issue/629) 自 2 月份提出至今仍未有实质性代码合并，对于网络波动和企业级长时间任务极其关键。
- **Anthropic 接口竞态条件**：[Issue #2721](https://github.com/sipeed/picoclaw/Issue/2721) 表明旧版本的 `tool_use_id` 竞态问题在 v0.2.5 依然存在，可能需要更深层的异步状态机重构。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了**极高的开发活跃度与社区参与度**，共处理了 31 个 Pull Requests（其中 23 个顺利合并/关闭），并有 5 个 Issues 更新（4 新开，1 关闭）。今日更新重心集中在**核心架构修复**与**用户体验优化**两端：一方面深度重构了 A2A（Agent-to-Agent）消息路由与会话寻址机制，修复了多通道场景下的严重消息错乱问题；另一方面，新增了多项实用技能（Skills）与容器构建修复。整体来看，项目处于“快速迭代修复缺陷+横向扩展集成能力”的健康阶段，但 A2A 路由重构带来的代码变动面较大，短期内需重点关注回归稳定性。

## 2. 版本发布
今日**无新版本发布**。考虑到目前合并了大量核心消息路由和容器构建的修复代码，预计项目正在为下一个具备里程碑意义的版本进行代码收拢与稳定性测试。

## 3. 项目进展
今日共有 23 个 PR 被合并或关闭，项目在多线程消息路由、容器环境构建和 Skill 生态三个方面取得了显著进展：

*   **核心路由与 A2A 架构修复**：合并了多个针对 Agent 通信寻址的重磅修复。PR [#2329](https://github.com/qwibitai/nanoclaw/pull/2329) 和 [#2328](https://github.com/qwibitai/nanoclaw/pull/2328) 彻底重构了多目标组中的消息分发与默认路由机制；[#2277](https://github.com/qwibitai/nanoclaw/pull/2277) 和 [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) 则修复了查询中路由刷新及 A2A 恢复到源会话的核心逻辑。
*   **上下文与网关稳定性提升**：PR [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) 解决了 Claude Code SDK 在自动压缩上下文后导致 Agent 学习到的工具使用模式丢失的痛点；[#2333](https://github.com/qwibitai/nanoclaw/pull/2333) 为网关监听器加入了指数退避重连机制，避免了死循环风暴。
*   **Skill 生态与集成扩充**：新增了多个实用技能，包括 AWS CLI 访问 ([#2319](https://github.com/qwibitai/nanoclaw/pull/2319))、持久化语义记忆工具 Mnemon ([#2318](https://github.com/qwibitai/nanoclaw/pull/2318))、OneCLI 网关容器技能 ([#2321](https://github.com/qwibitai/nanoclaw/pull/2321))，并对大量既有技能文档进行了同步更新 ([#2320](https://github.com/qwibitai/nanoclaw/pull/2320))。
*   **容器与构建系统修复**：针对 pnpm v11 导致 `claude` 二进制文件安装失败的严重问题，项目采取了双管齐下的策略：将主版本回退并固定至 10.33.0 ([#2335](https://github.com/qwibitai/nanoclaw/pull/2335))，同时针对 v11 的依赖机制进行了定向修复 ([#2336](https://github.com/qwibitai/nanoclaw/pull/2336))。

## 4. 社区热点
今日社区热点主要围绕**消息路由错乱**与**认证体验**展开：

*   **多通道 A2A 路由问题引发密集关注**：今日有多个 Issues ([#2332](https://github.com/qwibitai/nanoclaw/issues/2332), [#2331](https://github.com/qwibitai/nanoclaw/issues/2331)) 和 PRs ([#2002](https://github.com/qwibitai/nanoclaw/pull/2002), [#2267](https://github.com/qwibitai/nanoclaw/pull/2267)) 聚焦于 A2A 回复在多会话并存时路由到错误会话的 Bug。这表明在复杂的生产环境（如将 Agent 接入多个频道）中，消息串联的准确性是当前用户最关心的核心稳定性指标。
*   **精细化凭证管理的强烈诉求**：Issue [#869](https://github.com/qwibitai/nanoclaw/issues/869) 提出了“按组划分凭证”的需求。目前所有组共享 `.env` 中的 Claude 凭证，不仅导致 API 额度互相挤占，还无法实现多身份隔离。该 Issue 虽未在今日合并，但其背后反映出多租户/重度用户的刚性痛点。
*   **新手引导（Setup）流程的体验优化**：社区维护者积极优化了引导流程，去除了“E.164”等技术行话 ([#2315](https://github.com/qwibitai/nanoclaw/pull/2315))，并增加了“稍后连接”的退出选项 ([#2324](https://github.com/qwibitai/nanoclaw/pull/2324))，极大降低了非技术用户的冷启动门槛。

## 5. Bug 与稳定性
今日报告并处理的 Bug 较多，其中部分属于系统核心架构级缺陷（现已通过 PR 修复）：

1.  **[严重] pnpm v11 导致 Claude 二进制文件失效**：在全新构建的镜像中，`claude` 变成了 500 字节的空壳文件，导致所有消息报错 `code 1`。已通过 PR [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) 将 pnpm 锁定回 v10 修复。
2.  **[严重] A2A 消息在多会话/多通道中错发**：`findSessionByAgentGroup` 的旧逻辑导致 Agent 总是回复到最新的 Session 而非发起方 Session。已由 PR [#2329](https://github.com/qwibitai/nanoclaw/pull/2329) 和 [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) 彻底重构修复。
3.  **[严重] SDK 上下文压缩丢失路由规则**：长对话后 Agent 忘记如何使用多目标路由标签。已通过 PR [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) 在压缩后重新注入目标提醒修复。
4.  **[中等] OneCLI 代理与 Axios 不兼容**：由于网关仅支持 CONNECT，导致 Axios 的请求被拒绝（HTTP 400）。目前已有 PR [#2330](https://github.com/qwibitai/nanoclaw/pull/2330) 正在处理此问题，待合并。
5.  **[低] Telegram Markdown 解析破坏含有下划线的链接**：旧清洗逻辑粗暴去除了 `_` 和 `*`。已提报修复 PR [#2338](https://github.com/qwibitai/nanoclaw/pull/2338)，改用转义替代剥离。

## 6. 功能请求与路线图信号
从今日的动态中，可以清晰看出项目近期的演进路线图信号：

*   **Web 端能力补齐**：Issue [#2334](https://github.com/qwibitai/nanoclaw/issues/2334) 提出了对 Web UI 文件附件支持的需求（支持拖拽、粘贴、发送给 Agent 处理）。随着 Web 端交互逐渐对齐移动端，文件多模态处理将成为近期优先开发的特性。
*   **跨大模型提供商支持**：PR [#2337](https://github.com/qwibitai/nanoclaw/pull/2337) 试图将 Claude Code 的技能目录暴露给非 Claude 模型（如 OpenAI 等）。这释放了明确的路线图信号：**NanoClaw 正在从单纯的 Claude 原生客户端，向“多模型 AI 编排与托管平台”转型**。
*   **持久化与记忆能力**：引入 `/add-mnemon` ([#2318](https://github.com/qwibitai/nanoclaw/pull/2318)) 技能表明项目正在探索超越单一会话限制的长期知识图谱和记忆机制，这对于长期运行的个人 AI 助手至关重要。

## 7. 用户反馈摘要
基于 Issues 和 PR 描述，目前用户的真实反馈呈现出明显的两极特征：
*   **痛点与不满**：早期采用者和开发者在**复杂路由配置（A2A）**和**容器构建（pnpm 偶发失败）**上耗费了大量精力。另外，共享 API 额度导致超额使用的问题让部分重度多组并发的用户感到受限（#869）。
*   **满意与期待**：用户对 NanoClaw 强大的**跨平台 Channel 编排能力（Signal、iMessage、Email等）**表示高度认可。新增的 Skill 体系（如一键接入 AWS、Vercel 等）让用户能够以低代码方式拓展 Agent 能力边界，极大地丰富了个人助手的应用场景。

## 8. 待处理积压
*   **[长期未决的重要需求] 凭证与多租户隔离**：[Issue #869](https://github.com/qwibitai/nanoclaw/issues/869) 提出了近两个月，获得了较高优先级标记，但目前仍未有对应的 PR 进入开发阶段。考虑到其对多组并行使用的影响，建议维护者将其纳入核心 Backlog 并排期。
*   **[待合并的底层网络修复] Axios MCP 代理兼容性**：[PR #2330](https://github.com/qwibitai/nanoclaw/pull/2330) 修复了 Axios 系工具在 OneCLI 代理下的阻断性问题，目前已开启但未合并，建议尽快进行 Code Review 并合入主分支，以恢复相关工具的正常网络请求能力。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这份报告由 AI 智能体与个人 AI 助手领域开源项目分析师基于 2026-05-08 的 NullClaw GitHub 数据生成。

---

# NullClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
过去 24 小时，NullClaw 项目呈现出**高活跃度与强烈的底层重构/扩展趋势**。社区层面共产生了 6 条 Issue 更新（5 新开/活跃，1 关闭）和 7 条 PR 更新（5 待合并，2 合并/关闭）。项目当前正处于密集整合外部协议适配（如 ACP）、企业级通讯渠道优化（如 Lark/飞书）以及底层构建工具（Zig）兼容性升级的阶段。虽然今日无新版本发布，但待合并的高质量 PR 预示着项目正在为下一次重要版本发布积蓄力量。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日共有 2 个 PR 被关闭，在底层 Provider 兼容性方面取得了实质性进展：
*   **已合并/关闭 PR：**
    *   **[#790 fix(providers): Responses API tool schema and null error handling](https://github.com/nullclaw/nullclaw/pull/790)**：修复了 OpenAI 兼容提供商 Responses API 路径中的关键 Bug。该 PR 修正了工具 Schema 的错误嵌套格式，并改善了空值错误处理，显著提升了与 OpenAI 新版 API 交互的稳定性。
    *   **[#893 feat(toolkit): integrate zig-qm-toolkit](https://github.com/nullclaw/nullclaw/pull/893)**：该 PR 旨在集成 `zig-qm-toolkit`，包含大量 hooks、agents 配置和四级验证机制，目前已被关闭（可能由于范围过大或调整接入策略）。

*   **核心待合并 PR（开发重点）：**
    *   原生协议支持：[#896 Add native ACP stdio adapter](https://github.com/nullclaw/nullclaw/pull/896) 在主程序中添加了 Agent Client Protocol 原生适配器。
    *   定时任务引擎：[#783 feat(cron)](https://github.com/nullclaw/nullclaw/pull/783) 引入了基于数据库的 Cron 子代理引擎，极大增强了自动化能力。
    *   编译维护：[#887 Fix build with zig v0.16](https://github.com/nullclaw/nullclaw/pull/887) 确保了项目在最新版 Zig 上的顺利编译。

## 4. 社区热点
今日社区讨论的焦点集中在**轻量化部署与系统兼容性**上：
*   **[#871 Critical: web_search is impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871)** (7 评论)：引发了关于 NullClaw 核心定位的讨论。用户指出，在弱计算资源设备上，当前的 Brave Search API 等方案过于笨重，强烈呼吁原生支持 DuckDuckGo 等轻量级搜索方案，这直击 NullClaw “轻量级 AI 智能体”的核心痛点。
*   **[#167 why cannot use the shell command "curl and wget"](https://github.com/nullclaw/nullclaw/issues/167)** (10 评论, 1 👍)：该 Issue 虽然今日关闭，但引发了长篇讨论。涉及系统底层权限、沙盒安全性与工具调用限制的博弈。
*   **[#820 How to install Zig on Debian?](https://github.com/nullclaw/nullclaw/issues/820)** (5 评论)：反映了新开发者在环境配置时遇到的阻碍，直接促成了文档修复 PR 的产生。

## 5. Bug 与稳定性
今日报告的 Bug 集中在 API 接口和低资源设备的可用性上，按严重程度排列如下：
*   **P1 (高优先级)：[#871 web_search 在低资源设备上不切实际](https://github.com/nullclaw/nullclaw/issues/871)**。核心功能在目标硬件（廉价/低性能设备）上不可用。目前暂无对应的 fix PR，但社区正在讨论替代 API。
*   **P0 (已修复)：[#790 Responses API tool schema 格式错误](https://github.com/nullclaw/nullclaw/pull/790)**。此 Bug 曾导致使用 OpenAI Responses API 时工具调用失败，已在今日通过 PR 合并修复。
*   **P2 (构建系统)：[#887 Fix build with zig v0.16](https://github.com/nullclaw/nullclaw/pull/887)**。在使用最新版 Zig (v0.16) 编译时存在构建失败问题，目前已提交修复 PR 待合并。

## 6. 功能请求与路线图信号
从近期的 Issue 密集爆发来看，NullClaw 正在积极拓展其作为“个人 AI 助手”的边界，以下信号值得路线图关注：
*   **企业级 IM 深度集成**：用户 LiWeny16 连续提交了两个关于 Lark（飞书）的定制化请求 —— [#895 控制输入状态提示/撤回行为](https://github.com/nullclaw/nullclaw/issues/895) 和 [#894 配置机器人在群聊中响应所有消息（而不仅限于@）](https://github.com/nullclaw/nullclaw/issues/894)。这表明 NullClaw 正在被更多应用于企业群组自动化场景。
*   **高级数据治理**：PR [#885 Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) 提出了数据治理层的概念，为 AI 智能体在企业级应用中的合规性打下基础。
*   **下一版本预期**：结合待合并的 Cron（定时任务）、ACP（协议适配）以及 Zig 构建修复，**下一个版本预计将是一个包含底层架构升级和定时任务自动化的 Major/Minor 版本**。

## 7. 用户反馈摘要
分析近期的 Issues 评论，可以提炼出以下用户画像与真实反馈：
*   **痛点 1：环境搭建门槛较高**：基于 Zig 的构建对于习惯 `apt-get` 的 Debian 用户依然不够友好（Issue #820），需要官方提供更开箱即用的二进制文件或非 Docker 的原生安装指引（PR #897 正在解决此问题）。
*   **痛点 2：核心定位的矛盾**：部分用户将 NullClaw 部署在树莓派或低端 VPS 上，对内存和网络请求极其敏感（Issue #871）。任何强依赖外部重量级 API 的改动都会引发核心用户群体的担忧。
*   **满意度/期待**：开发者对 NullClaw 提供的 Hook 和 Agent 机制兴趣浓厚（PR #885, #893），表明其在作为一个“可编程的本地智能体框架”方面具有较高吸引力。

## 8. 待处理积压
以下重要 Issue/PR 长期未获解决或处于停滞状态，提醒维护者关注：
*   **[长期未决的配置质疑] - [#473 README changes](https://github.com/nullclaw/nullclaw/issues/871)**：自 3 月 13 日提出以来，用户指出 README 中的基准测试数据（如二进制文件小于 1MB）已经失效。这容易对新用户产生误导，建议维护团队尽快更新基准快照。
*   **[超期待合并的大型 PR] - [#783 feat(cron)](https://github.com/nullclaw/nullclaw/pull/783)**：自 4 月 7 日提交至今已满一月，该 PR 包含了极为丰富的定时任务功能，但目前仍处于待合并状态。建议维护者评估其合并阻力（如代码冲突、测试覆盖率），尽快推进合入。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
IronClaw 项目在过去24小时内呈现出极高的开发活跃度，正处于重大架构演进与密集 Bug 修复并行的关键阶段。今日共监控到 **23 条 Issue 更新**（16 新开/活跃，7 关闭）和高达 **50 条 PR 更新**（19 待合并，31 已合并/关闭）。项目正式发布了酝酿已久的 **v0.28.0 版本**，核心底座开始向名为 "Reborn" 的下一代架构全面迁移。整体来看，项目在工程基建（数据库持久层、WASM扩展）上取得了突破性进展，但近期上线的 Telegram 集成和多 LLM 切换功能也暴露出一些影响用户体验的关键 Bug。

---

## 2. 版本发布
**[ironclaw-v0.28.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0) - 发布于 2026-05-07**

- **更新内容**：
  - **引入 "Reborn" 集成基座**：正式将 `reborn-integration` 合入主干，带来底层重构的宿主基础 crates、能力宿主、运行时调度器、进程生命周期管理、文件系统、密钥管理、网络以及扩展清单注册边界。
  - **WASM 工具链增强**：新增兼容 WIT 的 WASM 工具集。
- **迁移注意事项**：此次更新包含大量底层架构重构（涉及 `ironclaw_common` 升级至 0.4.1），且多个今日合并的 PR（如[#3369](https://github.com/nearai/ironclaw/pull/3369)）引入了**数据库结构变更（DB MIGRATION）**。部署时请务必关注数据库迁移脚本的执行情况。

---

## 3. 项目进展
今日合并了多达 31 个 PR，项目在底层持久化存储、Reborn 架构迁移和状态机健壮性上迈出了巨大步伐：

- **Reborn 架构基座落地**：
  - [PR #3351](https://github.com/nearai/ironclaw/pull/3351)：添加 `ProductAdapter` 核心契约，定义了入站/出站 DTO、协议认证等。
  - [PR #3377](https://github.com/nearai/ironclaw/pull/3377)：引入 `AgentLoopHost` 门面契约，重新定义了驱动层的运行边界。
- **持久化与状态管理重大升级**：
  - [PR #3369](https://github.com/nearai/ironclaw/pull/3369) / [PR #3379](https://github.com/nearai/ironclaw/pull/3379)：为会话线程和对话状态新增了 libSQL/Postgres 的持久化后端支持。
  - [PR #3349](https://github.com/nearai/ironclaw/pull/3349) / [PR #3368](https://github.com/nearai/ironclaw/pull/3368)：引入持久的运行状态和 capability 租约存储。
- **工作流与稳定性修复**：
  - [PR #3366](https://github.com/nearai/ironclaw/pull/3366)：修复了长时间任务在 OAuth 或审批门被挂起后无法自动恢复的痛点。
  - [PR #3364](https://github.com/nearai/ironclaw/pull/3364)：解决了前端设置面板重启模态框卡死的问题。

---

## 4. 社区热点
今日讨论最活跃的问题主要集中在系统的深度集成测试和 Telegram 等外部通道的验证：

- **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067) (28 条评论)**：讨论为 Reborn 架构引入垂直切面的集成测试。这反映了核心团队对重构期质量保障的极高要求，旨在通过公共入口点而非局部的单元测试来验证系统健壮性。
- **[Issue #3022](https://github.com/nearai/ironclaw/issues/3022) (9 条评论)**：Reborn 切换的阻碍项，要求增加事件基座的跨服务集成测试，确保所有 V1 事件生产者写入的事件是可脱敏、可限定范围且可重放的。
- **[Issue #3016](https://github.com/nearai/ironclaw/issues/3016) (7 条评论)**：关于增加 `AgentLoopHost` 参考实现的讨论，配合今日合并的 #3377 PR，标志着核心调度逻辑的 API 边界已达成共识。

---

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已提交修复 PR：

**P0 / 严重**
- **[Issue #3229](https://github.com/nearai/ironclaw/issues/3229) [Critical]**：LLM 提供商的回退机制在启动时被错误地持久化到数据库，导致用户自定义的模型/提供商配置在重启后被永久覆盖。（目前尚处于追踪阶段，需高度关注）

**P1 / 高优先级**
- **[Issue #3317](https://github.com/nearai/ironclaw/issues/3317) / [Issue #3319](https://github.com/nearai/ironclaw/issues/3319) / [Issue #3320](https://github.com/nearai/ironclaw/issues/3320)**：Telegram 端配置失败、Gmail 认证失败且无法恢复导致对话卡死。
  - 🛠️ **状态**：已提修复 PR [PR #3381](https://github.com/nearai/ironclaw/pull/3381)，通过收紧跨通道（Telegram -> Gmail OAuth）的配对和恢复逻辑解决。
- **[PR #3365](https://github.com/nearai/ironclaw/pull/3365)**：修复了审批门导致的死锁问题（Agent 循环在等待审批时，后续提交被无限期排队）。

**P2 / 一般**
- **[Issue #3225](https://github.com/nearai/ironclaw/issues/3225)**：Gemini 3.1-flash-lite-preview 模型在执行 tool-calling 时由于缺少 `thought_signature` 导致必定失败。
- **[Issue #3274](https://github.com/nearai/ironclaw/issues/3274)**：从 0.26.0 升级到 0.27.0 后，UI 前端数据首次加载不显示，需手动刷新。

---

## 6. 功能请求与路线图信号
从近期的 Issue 动态可以看出 IronClaw 接下来几个版本的明确演进路线：

- **多工作区架构演进**：
  - **[Issue #3334](https://github.com/nearai/ironclaw/issues/3334)**：用户请求支持一个 IronClaw 实例跨多个 Slack 工作区。这验证了系统向多租户、跨渠道网关架构发展的必要性。
- **AI 推理过程可视化**：
  - **[Issue #3327](https://github.com/nearai/ironclaw/issues/3327)**：请求端到端展示并持久化 LLM 的思考过程（`reasoning_content` 等数据），以便复现和调试。配合已提出的 [PR #3326](https://github.com/nearai/ironclaw/pull/3326)，此功能极有可能在近期合入主分支。
- **Reborn 产品面迁移计划**：serrrfirat 集中提出了多个迁移提案，构成了清晰的路线图：
  - [Issue #3289](https://github.com/nearai/ironclaw/issues/3289)：密钥、OAuth 和认证流程迁移。
  - [Issue #3288](https://github.com/nearai/ironclaw/issues/3288)：扩展、技能和 WASM 生命周期迁移。
  - [Issue #3287](https://github.com/nearai/ironclaw/issues/3287)：内存和工作区产品面迁移。

---

## 7. 用户反馈摘要
通过提炼近期的 Bug 报告和功能请求，真实用户痛点主要集中在以下三个方面：

1. **升级体验断裂**：用户在版本升级（如 v0.26 -> v0.27）时遇到了前端数据缓存失效（白屏）和数据库结构兼容性导致的异常，希望系统提供更平滑的无感升级路径。
2. **跨平台通道互联脆弱**：虽然支持 Telegram、Slack 等通道，但用户在进行跨平台操作（如在 Telegram 中触发 Gmail 授权）时极易遇到流程卡死。多通道的状态同步是当前最大的易用性短板。
3. **LLM 提供商切换风险**：用户希望无缝切换不同模型（如 DeepSeek, Gemini），但在切换非默认模型时，遇到了工具调用失败、配置被意外重置等严重阻碍使用的回归问题。

---

## 8. 待处理积压
以下重要积压问题需要核心维护团队关注，以防阻塞下游或引发线上故障：

- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：`crates.io` 发布版本严重滞后（最新仅 0.24.0，而 GitHub 已发布 0.28.0）。下游依赖由于 wasmtime 28.x 的 CVE 漏洞被迫锁定在旧版本，存在极大的安全风险，需立即进行包发布流水线的排查。
- **[Issue #3323](https://github.com/nearai/ironclaw/issues/3323)**：Nightly E2E 自动化测试已失败，需排查工作流取消的原因，防止带病代码合入主干。
- **[Issue #3333](https://github.com/nearai/ironclaw/issues/3333)**：Reborn 栈中仍存在大量 fake/no-op 的内存实现等待替换为真实组件，此技术债需按计划清理以保证 Reborn 架构的如期落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI** (github.com/netease-youdao/LobsterAI) 2026-05-08 的项目动态日报。

### 1. 今日速览
LobsterAI 在过去 24 小时内保持了**极高**的开发与迭代活跃度。项目于昨日顺利发布了 `2026.5.7` 新版本，紧接着在今日集中合入了高达 36 个 PR，为即将到来的 `2026.5.8` 发版分支进行了大规模的功能拉取和缺陷修复。虽然核心开发团队（如 @liuzhq1986, @fisherdaddy 等）在底层架构（如分页机制、独立工作目录）和模型兼容性上取得了突破性进展，但社区侧也暴露出一些亟待解决的用户体验问题（如登录失败和 IM 验证码缺失），整体项目处于“快速迭代与修修补补并存”的攻坚期。

### 2. 版本发布
**[LobsterAI 2026.5.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7)** (发布于 2026-05-07)
*   **更新内容**：
    *   优化了 Windows 环境下 Skill 删除的可靠性及导入反馈机制。
    *   升级了 `youdaonote` 技能至 1.0.8 版本。
    *   进行了部分底层代码重构。
*   **破坏性变更与迁移注意**：本次更新无破坏性 API 变更。但结合今日合入的 PR 来看，底层 ESLint 进行了全面对齐，后续外部贡献者同步代码时需注意 import 规范。

### 3. 项目进展
今日项目共有 **36 个 PR 被合并/关闭**，另有 9 个待合并，整体向前迈出了一大步，重点推进了以下几项核心功能与优化：
*   **架构与性能突破**：正式合入了会话列表与消息历史的分页加载机制（[PR #1907](https://github.com/netease-youdao/LobsterAI/pull/1907), [PR #924](https://github.com/netease-youdao/LobsterAI/pull/924)），彻底解决了长对话和海量会话导致的内存占用与渲染卡顿问题。
*   **Agent 隔离性增强**：新增了每个 Agent 支持独立工作目录的功能（[PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904)），大幅提升了多 Agent 并发执行任务的隔离性与安全性。
*   **大模型生态兼容**：集中修复了自定义供应商使用 DeepSeek V4 模型及工具调用的痛点（[PR #1819](https://github.com/netease-youdao/LobsterAI/pull/1819), [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847)），并新增了对 ChatGPT OAuth 登录（[PR #1830](https://github.com/netease-youdao/LobsterAI/pull/1830)）及小米 mimo 模型 coding plan（[PR #1862](https://github.com/netease-youdao/LobsterAI/pull/1862)）的支持。
*   **工程化与稳定性**：修复了代码库中全部 165 个 ESLint error（[PR #1498](https://github.com/netease-youdao/LobsterAI/pull/1498)），清除了技术债；修复了流式输出时特定后缀字符（如 `.pptx`）被误吞的严重渲染 Bug（[PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908)）。

### 4. 社区热点
*当前数据中未抓取到具体的评论数（显示为 undefined），但根据 Issues 的热度与描述长度，以下两个问题是今日的社区关注焦点：*
*   **[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) - IM机器人微信接口配置断层**：用户在微信端扫码后，客户端未能提供 6 位数字验证码的输入界面。该问题阻断了微信机器人的正常接入，影响面较大。
*   **[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903) - 会员登录频繁失败**：用户反馈核心使用链路（登录网易付费模型）受阻，且已有其他用户参与跟进讨论，属于高优的体验阻塞问题。

### 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：
*   **【严重 - P0】会员登录异常**：[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)。直接影响用户的日常使用与付费转化，目前**尚无对应的 fix PR**，需立即响应。
*   **【严重 - P1】Windows 文件预览及路径解析错乱**：[PR #1909](https://github.com/netease-youdao/LobsterAI/pull/1909)。Windows 环境下出现文件预览重复卡片及 `D:\D:\path` 级联路径错误，目前**已提交并合入修复 PR**。
*   **【中等 - P2】初始化假死与流式输出字符丢失**：启动初始化超时误报（[PR #1910](https://github.com/netease-youdao/LobsterAI/pull/1910)）及流式合并吞字（[PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908)）。此类问题降低了用户操作的确定性，目前**均已有 PR 合并修复**。
*   **【低 - P3】Markdown 表格并发截断**：并发场景下 Markdown 表格流式渲染降级问题，已通过 [PR #1900](https://github.com/netease-youdao/LobsterAI/pull/1900) 修复。

### 6. 功能请求与路线图信号
*   **IM 多平台无缝接入诉求**：结合 [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 可以看出，用户对将 LobsterAI 作为 IM 机器人接入外部平台（如微信）的需求强烈，目前 OpenClaw 组件在 UI 交互适配上存在盲区，下一版本需重点补齐验证码输入等交互 UI。
*   **网络与代理环境兼容性**：[PR #1818](https://github.com/netease-youdao/LobsterAI/pull/1818) 修复了开启代理后 OpenAI 模型无法访问的问题。这释放了一个信号：LobsterAI 的用户群体中存在大量需要通过代理访问原厂模型的开发者，后续版本需持续强化网络代理配置的鲁棒性。

### 7. 用户反馈摘要
*   **痛点 1：基础登录链路脆弱**：用户反馈“会员登录频繁失败”，并指出因为登录不进去导致无法使用网易付费模型。这表明桌面端在鉴权保活、网络异常重试等用户无感知的底层机制上存在短板。
*   **痛点 2：第三方接入 UI 闭环缺失**：针对微信接口扫码配置，用户明确指出了“客户端未给出输入界面”的割裂感。说明项目在跨端联动（Web 端扫码触发桌面端 UI 响应）的设计上仍有优化空间。

### 8. 待处理积压
*   **[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) - IM机器人扫码无法输入验证码**：创建于 4 月 30 日，至今已有一周，目前状态依然为 OPEN，且无开发者认领或指派修复 PR。建议维护团队 @netease-youdao 尽速评估是否为 OpenClaw 组件的 UI 缺陷，并排期修复。
*   **[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903) - 会员登录失败**：昨日集中爆发的问题，目前仅有 1 条评论，未见官方明确排期或排查进展，需提高关注优先级。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 8 日 Moltis 开源项目动态日报：

---

# 📊 Moltis 项目动态日报 (2026-05-08)

## 1. 今日速览
过去 24 小时内，Moltis 项目展现出了**极高的开发活跃度与出色的社区问题解决能力**。团队在一天之内连续推送了 2 个新版本，成功合并了 9 个高质量的 Pull Requests，并 100% 清空了过去 24 小时内的所有活跃 Issue（共关闭 4 个）。这些更新不仅修复了关键的 Docker 环境运行时 Bug，还为项目引入了基于 Ed25519 的去中心化身份验证和图像生成等重量级新特性。目前项目轨道运行顺畅，功能迭代与 Bug 修复呈现出高度同步的健康状态。

## 2. 版本发布
- **20260507.05** (2026-05-07)
- **20260507.04** (2026-05-07)

*分析备注*：官方在昨日连续切割了两个发行版，这通常意味着核心功能的快速上线或重要 Hotfix 的全量推送。结合今日合并的基础设施和核心功能 PR 来看，项目正处于密集的集成发布阶段。（注：Release 具体更新日志需参考仓库 Release 页面详细比对）

## 3. 项目进展
今日共有 **9 个 PR 被成功合并/关闭**，1 个待合并，大幅提升了项目的多端协同、扩展性与多媒体处理能力。主要进展如下：

- **通信与语音支持扩展**：
  - [PR #920](https://github.com/moltis-org/moltis/pull/920)：合并了基于 Twilio 的电话呼叫支持，集成了 PCM→mu-law 音频转换和完整的通道插件集成，标志着 Moltis 正式跨界进入传统电话网络通信领域。
  - [PR #981](https://github.com/moltis-org/moltis/pull/981)：新增了 `whisper-local` 本地 STT 提供商，为注重隐私的用户提供本地化语音转文本方案。

- **去中心化与多节点协同**：
  - [PR #979](https://github.com/moltis-org/moltis/pull/979)：引入了具有划时代意义的 Ed25519 挑战-响应节点身份验证（TOFU 模型），摒弃了传统的 Token 验证。结合 [PR #976](https://github.com/moltis-org/moltis/pull/976) 新增的代理身份与注册协议集成指南，Moltis 在“多智能体去中心化互联”上迈出了坚实的一步。

- **沙盒与执行环境**：
  - [PR #942](https://github.com/moltis-org/moltis/pull/942)：合并了远程和多后端沙盒支持（支持 Vercel, Daytona, Firecracker），彻底解决了云端部署（如 Fly.io, Render）无法使用 Docker-in-Docker 的痛点。

## 4. 社区热点
尽管今日关闭的 Issues 和 PRs 在纯评论数量上较少，但在底层架构和合规/隐私方面的演进引发了功能性共振：
- **[Issue #973](https://github.com/moltis-org/moltis/issues/973)**：用户 `vystartasv` 提出了建立可互操作的个人代理服务器“身份与入驻协议”的提案。这反映了社区对 Moltis 的期待已经超越了“单点智能体”，正向“多节点智能体社会网络”演进。该提案已在当天通过 [PR #976](https://github.com/moltis-org/moltis/pull/976) 落地为文档。
- **[PR #981](https://github.com/moltis-org/moltis/pull/981)**：本地语音转文字（whisper-local）的实现，准确击中了隐私敏感型用户群体的痛点，是社区对本地优先架构呼声的积极响应。

## 5. Bug 与稳定性
今日追踪到 2 个较严重的运行时/兼容性 Bug，且**均已在同一天通过 PR 修复并关闭**，展现了开发团队极强的响应速度：

1. **🟡 中度严重：Docker 环境下浏览器沙盒启动失败**
   - **现象**：当 Moltis 运行在 Docker (Proxmox LXC) 中并挂载 Docker Socket 时，浏览器工具由于无法创建 `/data/browse` 目录而持续崩溃（[Issue #977](https://github.com/moltis-org/moltis/issues/977)）。
   - **状态**：已通过 [PR #980](https://github.com/moltis-org/moltis/pull/980) 修复，优化了宿主机持久化配置文件的绑定挂载路径解析。

2. **🟡 中度严重：工具调用参数解析异常导致执行中断**
   - **现象**：在模型成功激活 `exec` 工具后，间歇性出现 `missing=command` 报错，导致预分派模式验证拦截了正常的工具调用（[Issue #963](https://github.com/moltis-org/moltis/issues/963)）。
   - **状态**：已通过 [PR #983](https://github.com/moltis-org/moltis/pull/983) 修复，重构了有效载荷解析逻辑，保留了参数诊断信息，防止其塌缩为无效的 `{}`。

## 6. 功能请求与路线图信号
- **新增图像生成能力**：用户 `bashrusakh` 请求增加对 `gpt-image-2` 的支持（[Issue #956](https://github.com/moltis-org/moltis/issues/956)）。**该需求已被秒级响应**，[PR #982](https://github.com/moltis-org/moltis/pull/982) 已合并，新增了基于 Codex OAuth 的图像生成提供商，并内置了 `generate_image` 工具。此功能极大概率已包含在最新发布的版本中。
- **OpenAI 实时模型适配优化**：目前仍有 [PR #984](https://github.com/moltis-org/moltis/pull/984) 处于 Open 状态，旨在 surfaced OpenAI 的实时语音模型 ID 及 STT 模型的最佳实践指导，防止用户误配置，这是完善 Voice 模块闭环的重要一环。

## 7. 用户反馈摘要
从今日的 Issue 标题与解决路径中，可以提炼出真实用户的典型部署场景及痛点：
- **私有化与安全合规**：用户高度关注数据隐私，倾向于使用本地部署（Whisper-local）和身份验证（Ed25519/TOFU）。
- **复杂的宿主-容器嵌套环境**：许多用户将 Moltis 部署在 Proxmox LXC 中的 Docker 容器内，并通过挂载 Socket 使用沙盒功能，这种双层嵌套对 Moltis 的设备/文件系统映射机制提出了极高要求。
- **多智能体协同**：极客及企业级用户正在尝试让不同的 Moltis 实例相互发现并验证，亟需标准化的跨域协议。

## 8. 待处理积压
今日的开发者火力全开，清理了所有近期活跃的 Issue。
- 当前唯一待处理的重要 PR 为 **[PR #984](https://github.com/moltis-org/moltis/pull/984) (feat(voice): surface OpenAI realtime model guidance)**。鉴于该项目对代码准确性要求极高，建议维护者尽快审阅该 PR 的 Playwright 覆盖范围并完成合并，以便让语音模块的配置体验更加完善。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是 **CoPaw (QwenPaw)** 项目 2026-05-08 的开源项目动态日报。

### 1. 今日速览
CoPaw 项目在过去 24 小时内保持了**极高的社区活跃度与开发推进速度**。今日共处理了 50 条 Issue（新开与活跃 30 条，关闭 20 条）以及 33 条 PR（待合并 11 条，已合并/关闭 22 条）。项目的重心目前明显聚焦于**系统底层的稳定性打磨**（如备份恢复、日志轮转、打包兼容）和**前端 UI 管理体验的重构优化**。多渠道集成和复杂任务的并发处理是当前用户侧反馈的核心焦点。整体而言，项目处于高度健康的快速迭代期。

### 2. 版本发布
**今日无新版本发布**。从 Issue 描述和 PR 提交记录来看，大量变更正持续合入 `main` 分支，主要面向系统稳定性与用户体验打磨，预计项目正在为下一个重要版本（推测为 v1.1.6 或 v1.2.0）做代码储备。

### 3. 项目进展
今日共有 22 个 PR 被合并或关闭，显著提升了项目的健壮性和可用性，主要体现在以下几个维度：

*   **运维与核心组件优化**：
    *   **PR #4092**: 修复了 Windows 系统代理设置拦截 QwenPaw 本地环回 API 调用的问题，增强了跨平台兼容性。
    *   **PR #3896**: 优化了后端 Agent 配置的更新 API，支持部分字段更新，提升了 API 的健壮性。
*   **前端 UI 重构与体验打磨**：
    *   **PR #4091**: 增加了前端技能板块的“批量启用/禁用”功能按钮，解决了长期的管理痛点。
    *   **PR #4094** 与 **PR #4052**: 重构了 TokenUsage 页面，解决了前端数据轮询导致的重复渲染和性能损耗问题。
    *   **PR #4085** 与 **PR #3934**: 优化了语言切换 UI，并修复了会话重命名时无法输入中文的顽疾。
*   **多渠道能力增强**：
    *   **PR #4055** 与 **PR #4098**: 飞书渠道的重大体验升级，将用户的真实显示名称（昵称）传递给 Agent 环境，使 Agent 能够识别具体的交互对象。

### 4. 社区热点
今日社区讨论最密集的话题集中在**内置功能扩展**与**复杂任务/长上下文处理**：

*   **内置技能与 MCPs 的探讨（27条评论）**：[#280 Discussion](https://github.com/agentscope-ai/QwenPaw/issues/280) 依然是社区最活跃的讨论串。用户与开发者正在探讨哪些高频 Skills 和 MCPs 应该被内置并提供“开箱即用”的体验，这反映了用户对降低部署门槛的强烈诉求。
*   **超长对话上下文导致任务中断（8条评论）**：[#4059 长对话执行中断](https://github.com/agentscope-ai/QwenPaw/issues/4059) 引发热议。用户反映在执行同一个长期任务时，即使使用 `/compact` 指令，依然会出现对话处理截断的现象。这暴露出当前架构在处理超大上下文或需要极长执行链路时的稳定性瓶颈。
*   **工作区存储路径分离（4条评论）**：[#3967 核心配置区与用户工作区分离](https://github.com/agentscope-ai/QwenPaw/issues/3967) 获得了用户的共鸣。当前所有文件混在一个工作区，极易导致用户误删核心配置文件，社区呼吁将系统文件与用户业务文件隔离。

### 5. Bug 与稳定性
今日报告的 Bug 重点关注**特定平台表现**与**渠道稳定性**，大部分已有关联修复：

*   **高危：飞书渠道消息重复消费与死循环风险**：[#1403 飞书消息去重](https://github.com/agentscope-ai/QwenPaw/issues/1403) 缺乏去重机制，可能导致业务重复执行。类似问题还有 [#4088 Agent之间无限创建新会话](https://github.com/agentscope-ai/QwenPaw/issues/4088)，严重影响资源消耗。
*   **高危：微信渠道在正常网络下丢失消息（4条评论）**：[#4056 WeChat Channel Message Loss](https://github.com/agentscope-ai/QwenPaw/issues/4056)。Agent 偶尔停止响应，这是多渠道部署中的致命稳定性问题，目前暂无明确 Fix PR。
*   **中危：微信 Cron 定时任务 KeyError（4条评论）**：[#3573 Cron 执行报错](https://github.com/agentscope-ai/QwenPaw/issues/3573) `KeyError('channel not found: weixin')`。相关修复已通过 **PR #3605** (重构微信渠道的底层数据迁移) 推进。
*   **中危：Windows 桌面版打包冲突**：[#3988 conda-pack 与 pip 冲突](https://github.com/agentscope-ai/QwenPaw/issues/3988) 导致无法正确打包，此问题已通过 **PR #4093** 修复。

### 6. 功能请求与路线图信号
从今日的 Feature Requests 和开放的 PRs 中，可以洞察到项目下一步的重点演进方向：

*   **任务规划能力（实验性）**：**PR #3238** 正在引入 `PlanNotebook` 支持，旨在让 Agent 能够自动拆解复杂任务并按步骤执行。这是从“单次对话回复”向“自主工作流 Agent”跨越的重要信号。
*   **CLI 管理能力补全**：**PR #4095** 新增了 `qwenpaw backup` 命令行管理模块；**PR #3999** 新增了 `qwenpaw skills test` 命令，允许用户在分配技能前进行本地验证。CLI 正在变得和 Web Console 一样强大。
*   **支持更多主流大模型底层**：[#4030 请求增加 Vertex AI Gemini provider](https://github.com/agentscope-ai/QwenPaw/issues/4030) 以及 [#4051 DeepSeek V4 think 标签解析问题](https://github.com/agentscope-ai/QwenPaw/issues/4051)，表明项目正在积极适配除阿里云系外的国内外头部模型，致力于成为真正的“模型无关”Agent 平台。
*   **Web 控制台一键升级**：[#2235 Web 控制台升级](https://github.com/agentscope-ai/QwenPaw/issues/2235) 是一个强烈信号，用户极度渴望摆脱 SSH 进服务器拉取镜像的手工升级方式。

### 7. 用户反馈摘要
从今日的 Issues 交流中，可以提炼出以下真实用户画像与反馈：
*   **真实使用场景比想象中更重**：用户正在使用 CoPaw 进行“从零构建项目 V1/V2 版本的工程级代码迭代”（[#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)），这要求平台能够支撑 200 轮以上的超多轮对话而不卡顿。
*   **“数据安全”与“容灾”成为刚需**：生产环境用户（[#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008)）提出需要“全量完整聊天记录导出与评测功能”以便向领导汇报；同时，Docker 部署下常常发生配置丢失或忘记挂载导致数据清空，用户对配置分离和备份的需求极为迫切。

### 8. 待处理积压
以下重要 Issue 或 PR 停留时间较长或处于高风险状态，建议核心维护者重点关注：

*   **[开放 PR] 长时间挂起：PR #3916 (Docker 卷备份恢复)**：修复了 Docker volume 挂载点在备份恢复时的 `EBUSY` 错误，涉及关键数据安全，建议尽快排期合入。
*   **[开放 Issue] 影响体验的前端 Bug：#4036 (添加模型步骤繁琐)**：用户抱怨添加一个新模型需要多达 5 步的来回点击，由于被标记为 `good first issue`，建议社区开发者认领优化。
*   **[开放 Issue] 模型兼容性：#4006 (Reasoning Content 未过滤)**：使用 OpenAI 兼容 API 时，部分模型的内部思考过程未被正确解析，这会干扰 Agent 的最终输出质量。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目保持了极高的社区热度与活跃度，共产生了 50 条 Issue 更新和 50 个 Pull Request 更新。然而，项目的**“吞吐量”（Throughput）目前处于停滞状态**——今日无任何新版本发布，且 50 个活跃 PR 均处于待合并状态，0 个 Issue 被关闭。这表明项目目前可能正面临积压审查，或者正在为下一个大版本进行长期酝酿。从议题分布来看，社区当前焦点高度集中在 **多渠道支持（WhatsApp/Telegram）的兼容性、桌面端（Tauri）的深度打磨、以及多模型提供商（Llama.cpp/vLLM/自定义端点）的协议适配**上。

## 2. 版本发布
**今日无新版本发布。** 项目最新代码仍停留在主分支的日常提交中，尚未冻结发版。

## 3. 项目进展
尽管今日没有 PR 被合并，但大量核心功能的修复与增强 PR 正在积极推送与更新中，等待着 Maintainer 的审查。这些 PR 为项目的下一步跨越奠定了基础：
*   **桌面端重大重构推进**：[#5265 (feat(desktop): menu bar chat agent)](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) 正在将 Tauri 应用从完整的仪表盘转变为轻量级的菜单栏聊天代理，支持语音和图像上传。
*   **大模型推理兼容性深度修复**：[#5892 (fix: three production blockers)](https://github.com/zeroclaw-labs/zeroclaw/pull/5892) 集中解决了 vLLM 0.19+ 的 `tool_choice` 报错、孤立的 `tool_use` 及视觉能力等生产环境阻断问题；[#6029](https://github.com/zeroclaw-labs/zeroclaw/pull/6029) 修复了 Ollama 在回退路径上的原生工具载荷错误。
*   **Agentic 能力与安全增强**：[#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) 为 Shell 工具引入了基于 TOTP 的特定高危命令双因子认证机制；[#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) 为 Anthropic/Bedrock 引入了原生扩展思考能力。
*   **新提供商与 CI 现代化**：[#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) 添加了 `atomic-chat` 本地提供商；[#6447](https://github.com/zeroclaw-labs/zeroclaw/pull/6447) 将 GitHub Actions 升级至 Node 24，以应对即将到来的 Node 20 弃用。

## 4. 社区热点
今日讨论热度最高的议题集中在**核心通信渠道的中断与配置逻辑的缺失**：
*   🔥 **WhatsApp 渠道大面积瘫痪**：[#6246 [Bug]: WhatsApp Web pair succeeds but messages don't flow](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)（6条评论）。由于 2026 年 4 月底 WhatsApp 服务端强制升级了协议，导致 ZeroClaw 现有的 `wa-rs` 依赖失效，用户配对成功但无法收发消息。这是目前社区反馈最集中的 S1 级阻断问题。
*   🧩 **沙箱环境隔离缺陷**：[#6516 [Bug]: ACP "cwd" change can lock agent out](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)（2条评论）。用户在使用 ACP 会话更改工作目录（`cwd`）后，Agent 丢失了读取自身技能文件的权限，导致 S1 级工作流受阻。
*   💸 **Telegram Prompt 缓存失效**：[#6360 [Bug]: Prompt Caching does not work with telegram](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)（2条评论）。通过 Telegram 聊天时无法命中缓存，导致 Token 消耗和延迟剧增。
*   ⚙️ **V3 环境变量覆写机制缺失**：[#6375 [Feature]: V3 env-var override mechanism](https://github.com/zeroclaw-labs/zeroclaw/issues/6375)（1条评论）。之前的重构移除了 `.env` 平滑路由的功能，导致运维人员难以通过环境变量动态配置凭证，呼声很高。

## 5. Bug 与稳定性
今日报告了大量影响实际使用的 Bug，按严重程度排列如下：

**S1 级别 (工作流完全阻断)：**
*   **Shell 工具失效**：[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) 即使在 `[autonomy] level = "full"` 配置下，Shell 工具调用依然被拒绝。
*   **多模态文件路径错误**：[#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) 自定义远程提供商（如 vLLM）发送本地图片路径而非 Data URL，导致多模态请求直接报错。
*   **Bash 补全栈溢出**：[#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) Tab 补全会引发无限递归，直接耗尽堆栈并导致 SSH 会话崩溃。
*   **Windows 命令行适配**：[#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) Windows 下 `google_workspace` 工具无法解析 `.cmd` 后缀，且 JSON 参数在回退处理时被破坏。
*   **Llama.cpp 500错误**：[#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) Llama.cpp 没有默认使用 "responses" 模式，导致工具调用抛出 500 错误。

**S2 级别 (行为降级)：**
*   **数据库运行时冲突**：[#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) Gateway 无法使用 Postgres 数据库，发生 `Cannot start a runtime from within a runtime` 的 Panic。
*   **Docker 部署挂载阴影**：[#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) Bind mount 覆盖了 Dockerfile 中预建的 Web Dashboard 文件，导致前端无法访问。

*(注：以上大多数 Bug 目前处于 `status:accepted` 或 `needs-maintainer-review` 状态，少数如 Llama.cpp 适配已有相关修复 PR 如 #5254 处于等待合并状态。)*

## 6. 功能请求与路线图信号
从近期的 Feature Request 暴露出 ZeroClaw 在**多提供商接入**和**桌面端体验**上的演进方向：
*   **更包容的 LLM 生态支持**：[#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) 呼吁提供对 Kimi K2.5 等各类 OpenAI 兼容模型的一等公民支持，简化冗长的配置绕路方案。结合 PR #6513 和 #5088，预计下一版本在 `onboard` 向导中将引入更泛化的自定义端点接入能力。
*   **桌面端 的全面战争**：维护者/贡献者正在大力推进桌面应用。未来版本预计将包含：系统托盘菜单完善 [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329)、macOS Universal Binary (Arm/Intel 双架构合并) [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339)、以及基于 Tauri Updater 的自动更新 [#6332](https://github.com/zeroclaw-labs/zeroclaw/issues/6332)。
*   **智能化定时任务**：[#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) 建议为 Cron 任务增加 `delivery.mode = "announce"`，只发送最终结果而不是每一步的中间推理文本，这标志着 ZeroClaw 在 Agent 自动化执行上对用户体验的进一步打磨。

## 7. 用户反馈摘要
通过对 Issue 的数据分析，提炼出当前用户的真实痛点：
1.  **文档与 Docker 镜像严重脱节**：多位用户反馈（如 [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393)、[#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500)），官方文档提供的 Docker 安装指南和镜像名（如 `zeroclawlabs/tool-runner`）在真实环境中无法拉取或运行失败。这严重挫伤了新用户的首日体验。
2.  **Agentic 幻觉问题**：[#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) 反映在超长对话中，若触发上下文溢出，机器人会产生严重的幻觉和主题偏移，表明项目在上下文裁剪策略及历史记录处理上存在短板（目前有 PR #6515 正在尝试修复此问题）。
3.  **不同 OS 的体验不一致**：Windows 用户提供路径和命令后缀经常被破坏，而 macOS 用户则对 Apple Silicon 的原生支持提出了更高要求。

## 8. 待处理积压
项目当前面临一定的代码审查瓶颈（**今日 0 PR 合并，0 Issue 关闭**），以下长期积压亟待 Maintainer 团队介入：
*   **长尾阻断型 PR**：[#5892 (fix: three production blockers)](https://github.com/zeroclaw-labs/zeroclaw/pull/5892) 和 [#5265 (feat(desktop))](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) 等核心 PR 已打开数周，处于 `needs-maintainer-review` 状态，它们的积压直接影响系统的生产可用性。
*   **S1 级别未修复 Bug**：[#6246 (WhatsApp 协议阻断)](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 和 [#6434 (Shell 工具阻断)](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) 严重阻碍了特定场景的用户，目前未见官方明确的修复时间表或相关修复 PR。
*   **CI 流水线隐患**：[#6447 (Update github actions to Node 24)](https://github.com/zeroclaw-labs/zeroclaw/pull/6447) 需尽快合并，否则面临 GitHub 官方强制废弃导致 CI 停摆的风险。

---
*💡 分析师建议：当前项目处于功能大爆炸后的重构期。Maintainer 应优先处理 CI 依赖 (#6447)、核心运行时阻断缺陷 (#6434) 以及文档死链问题，以恢复社区信心，随后再进行大规模的 PR 合并与版本发布。*

</details>