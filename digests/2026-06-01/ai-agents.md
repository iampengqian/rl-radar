# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-31 22:17 UTC

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

# 🤖 OpenClaw 项目动态日报 (2026-06-01)

> **数据来源**: [openclaw/openclaw](https://github.com/openclaw/openclaw) | **分析周期**: 过去 24 小时

---

## 1. 今日速览

OpenClaw 项目在今日继续保持**极高活跃度**，过去 24 小时内共处理了 500 条 Issue 更新（新开与活跃 315，关闭 185）和 500 条 PR 更新（待合并 205，已合并与关闭 295），展现了社区强大的贡献消化能力。项目刚刚进入 **2026.5.31 版本密集迭代期**，单日发布了 3 个测试版本，核心聚焦于运行时恢复机制的优化及跨平台渠道消息投递的稳定性提升。议题焦点高度集中于**会话上下文混乱、Codex 运行时超时及多渠道投递丢失**等核心痛点。整体来看，项目核心功能（Agent、Runtime、多渠道集成）正经历密集的稳定性打磨。

---

## 2. 版本发布

今日迎来了密集的 Beta 版本发布，最新版本为 **`v2026.5.31-beta.3`**。此系列版本的核心更新如下：

- **🚀 [v2026.5.31-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.3)**
- **🚀 [v2026.5.31-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.2)**
- **🚀 [v2026.5.31-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.1)**
- **🚀 [v2026.5.30-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.30-beta.1)**

### 核心更新内容
1. **Agent 与 CLI 运行时容错增强**：大幅优化了中断工具调用、过期会话绑定、上下文压缩交接以及媒体投递重试的恢复机制。
2. **多渠道消息投递稳定性**：改进了 Telegram、WhatsApp、iMessage 和 Slack 等渠道的投递可靠性。

*⚠️ **迁移注意**：由于处于高频 Beta 迭代期，建议生产环境谨慎跟进。同时 PR #88798 暴露出 QuickStart 可能会默认开启 `allowInsecureAuth`，升级后务必排查 Control UI 的安全配置。*

---

## 3. 项目进展

今日共有 **295 个 PR 被合并或关闭**，另有 205 个待合并。项目在**运行时健壮性、多渠道适配、安全边界控制**三个维度取得了显著进展。以下为今日关键进展 PR：

- **运行时与上下文管理优化**
  - [PR #88315](https://github.com/openclaw/openclaw/pull/88315): 为 CLI 后端引入了通用的原生上下文压缩所有权机制，解决 CLI 后端与 OpenClaw 上下文压缩冲突的问题。
  - [PR #88750](https://github.com/openclaw/openclaw/pull/88750): 将运行时设置贯穿到上下文引擎的整个生命周期，提升了状态管理的一致性。
  - [PR #87856](https://github.com/openclaw/openclaw/pull/87856): 优化了流式模型增量的计数方式，改为增量统计，大幅降低诊断时的性能开销。

- **多渠道消息体验**
  - [PR #87072](https://github.com/openclaw/openclaw/pull/87072): 为 Telegram 引入了可选的交错式进度展示通道，使 Agent 的推理过程可视化。
  - [PR #83988](https://github.com/openclaw/openclaw/pull/83988): 修复了 Telegram TTS 语音发送时的文本“闪烁/折腾”问题。

- **安全与调度修复**
  - [PR #88800](https://github.com/openclaw/openclaw/pull/88800): 修复了模型生成的 SecretRefs 意外以明文暴露的安全隐患。
  - [PR #87981](https://github.com/openclaw/openclaw/pull/87981): 修复了独立定时任务超时后 MCP 运行时未正确回收导致的调度死锁问题。

- **状态与存储迁移 (架构演进)**
  - [PR #88797](https://github.com/openclaw/openclaw/pull/88797) & [PR #88794](https://github.com/openclaw/openclaw/pull/88794): 正在将 iMessage 监控状态和插件安装索引从老旧的 JSON 文件迁移至 **SQLite**，这标志着 OpenClaw 底层存储架构的重大现代化升级。

---

## 4. 社区热点

今日社区讨论最热烈的问题集中在**会话状态丢失**和**多渠道/多模型接入时的复杂性**上。

1. 🔥 **[Issue #32296](https://github.com/openclaw/openclaw/issues/32296) [P1]**：**Agent 回复错位问题（13 条评论）**
   - **诉求**：Agent 经常回复上一条消息而非当前消息，导致严重的上下文错位。这是目前社区反馈最强烈的 P1 级阻断性问题。
2. 🔥 **[Issue #87307](https://github.com/openclaw/openclaw/issues/87307) [P1]**：**Matrix 渠道回复行为退化（11 条评论）**
   - **诉求**：升级到 `2026.5.22` 后，Matrix 话题回复变成了普通回复，且 `/status` 和 `/model` 命令完全静默无响应。
3. 🔥 **[Issue #13583](https://github.com/openclaw/openclaw/issues/13583) [P2]**：**强制执行前置 Hook 需求（11 条评论，2 👍）**
   - **诉求**：在金融、安全等高阶场景，用户强烈要求提供“硬性门控”，从代码层面强制 Agent 在调用特定工具前不得给出最终回答。
4. 🔥 **[Issue #86047](https://github.com/openclaw/openclaw/issues/86047) [P1]**：**Nextcloud Talk 中的 Codex 插件审批超时（7 条评论，3 👍）**
   - **诉求**：升级后 Codex 原生代理在处理耗时工具调用时极易中断。

---

## 5. Bug 与稳定性

今日报告了大量高危 Bug，其中大部分集中在**会话状态管理**和**外部模型提供商鉴权**。

| 严重度 | Issue / PR | 简述 | 状态与对策 |
| :--- | :--- | :--- | :--- |
| **P1 - 致命** | [Issue #83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试耗尽导致应用崩溃循环 | 🟡 待修复 |
| **P1 - 致命** | [Issue #85251](https://github.com/openclaw/openclaw/issues/85251) | Codex 发出 `turn/started` 后静默，导致会话卡死 360 秒 | 🟡 待修复 |
| **P1 - 数据丢失** | [Issue #45494](https://github.com/openclaw/openclaw/issues/45494) | LLM API 宕机时，Cron 定时任务未能快速失败，而是静默耗尽超时时间 | 🟡 已有相关 PR [#87981] |
| **P1 - 鉴权失效** | [Issue #88443](https://github.com/openclaw/openclaw/issues/88443) | `auth.cooldowns` 变更导致全量网关重启，直接丢弃正在进行的 CLI 会话 | 🟡 已关闭，待观察 |
| **P2 - 鉴权路由** | [Issue #67423](https://github.com/openclaw/openclaw/issues/67423) | Auth 路由忽略了配置中的 apiKey，导致分流提供商取错密钥 | 🟢 已通过 PR 修复 |
| **P2 - 平台特有** | [Issue #48780](https://github.com/openclaw/openclaw/issues/48780) | Windows 下 `exec()` 和 `read()` 工具调用输出被 `࿃>` 后缀破坏 | 🟢 已关闭 |
| **安全边界** | [PR #88798](https://github.com/openclaw/openclaw/pull/88798) | QuickStart 设置可能会错误地持久化开启 Control UI 的不安全鉴权 (`allowInsecureAuth`) | 🟢 修复 PR 已提交 |

---

## 6. 功能请求与路线图信号

从近期的 Feature Request 和提交的 PR 来看，OpenClaw 的演进路线图呈现出以下明确信号：

1. **复杂的 Skill 生态治理**
   - [Issue #88173](https://github.com/openclaw/openclaw/issues/88173) 提议构建 **Skill 依赖可视化工具**。目前 ClawHub 已有 800+ 技能，解决循环依赖和技能隔离成为当务之急。
2. **底层存储向 SQLite 迁移**
   - [PR #88797](https://github.com/openclaw/openclaw/pull/88797) (iMessage) 和 [PR #88794](https://github.com/openclaw/openclaw/pull/88794) (插件索引) 表明，项目正在**系统性地剥离文件系统状态依赖，全面拥抱 SQLite**，这将极大提升高并发下的状态可靠性。
3. **Agent 自主续签与工作委托**
   - [PR #85651](https://github.com/openclaw/openclaw/pull/85651) 提出了 `continue_work` / `request_compaction` 机制，允许 Agent 根据上下文压力**自我选择续签或压缩**，这是迈向长期自主 Agent 的关键一步。

---

## 7. 用户反馈摘要

从高热度 Issues 中提取的真实用户痛点如下：
- **多通道接入极其脆弱**：用户 [Pinghuachiu] 反馈 Telegram 投递队列在遇到网络抖动时，不仅会重发旧消息，还会在会话记录中产生重复条目 ([Issue #51628](https://github.com/openclaw/openclaw/issues/51628))。
- **本地/代理网络兼容性差**：中国大陆用户普遍反馈在使用代理访问 OpenAI-Codex 时遇到 Cloudflare JS 挑战导致的阻断 ([Issue #67670](https://github.com/openclaw/openclaw/issues/67670))，且本地 LM Studio 用户也遇到了极短的超时限制问题 ([Issue #87616](https://github.com/openclaw/openclaw/issues/87616))。
- **高级定制能力缺失**：重度用户希望针对不同的 Skills 和子代理设置独立的模型和思考策略，而不是吃大锅饭 ([Issue #8441](https://github.com/openclaw/openclaw/issues/8441))。

---

## 8. 待处理积压

以下重要高优先级 Issue 长期处于缺乏实质性修复进展的状态，需要维护团队重点关注：

1. 🚨 **[Issue #32296](https://github.com/openclaw/openclaw/issues/32296) [P1]**：**Agent 会话上下文错乱问题**。自 3 月初报告至今，虽然有大量讨论，但仍未从根本上解决，严重影响多轮对话体验。
2. 🚨 **[Issue #13583](https://github.com/openclaw/openclaw/issues/13583) [P2]**：**强制工具调用门控**。涉及安全审计，被标记为需产品侧决策，自 2 月份以来一直悬而未决。
3. 🚨 **[Issue #78308](https://github.com/openclaw/openclaw/issues/78308) [P2]**：**MCP 工具调用的通道审批机制**。对于需要高安全等级的 Mutate 操作（如发邮件、写库），目前缺乏统一的同意封装机制。
4. ⚠️ **[Issue #77930](https://github.com/openclaw/openclaw/issues/77930) [Bug]**：**Discord 渠道加载失败回归**。在特定的 Beta 版本中出现退化，但始终未能彻底定位根因，导致 Discord 用户版本被锁定在老旧版本。

---

## 横向生态对比

以下是为您生成的 2026 年 6 月 1 日 AI 智能体与个人 AI 助手开源生态横向对比分析报告：

---

# 📊 2026.06.01 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话交互”向“全平台全自主执行”跨越的关键演进期**。项目间的竞争核心已从底层模型对接能力，显著转移至**运行时会话管理的健壮性、多渠道（IM、IoT、桌面）网关的稳定性，以及 MCP（模型上下文协议）生态的安全治理**。同时，随着智能体停留时间的增长，**上下文无限拉长引发的内存泄漏、状态机错乱及僵尸进程问题**正成为各开源项目普遍面临的工程化“阿喀琉斯之踵”。

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃 (新/活) | PR 活跃 (新/合并) | 今日发布版本 | 核心 Focus | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 315 | 205 (合并295) | 3 个 Beta | 核心运行时稳定性、跨平台IM投递 | ⭐⭐⭐⭐⭐ (吞吐极高) |
| **Hermes Agent** | 48 | 48 (合并2) | 0 | 多网关适配、本地模型兼容 | ⭐⭐⭐ (积压严重) |
| **ZeroClaw** | 34 | 41 (合并9) | 0 (准备v0.8) | 多租户、IoT/硬件控制、架构重构 | ⭐⭐⭐⭐ (重构激进) |
| **CoPaw (QwenPaw)** | 14 | 未明 (合并1) | 0 | Windows端适配、并发调度、内存 | ⭐⭐⭐ (重型负载Bug多) |
| **NanoBot** | 2 | 12 (合并7) | 0 | WebUI安全修复、架构解耦 | ⭐⭐⭐⭐ (稳步演进) |
| **IronClaw** | 5 | 16 (合并7) | 0 | Auth重构、Triggers引擎 | ⭐⭐⭐⭐⭐ (架构清晰) |
| **PicoClaw** | 3 | 4 (合并4) | 1 个 Nightly | 流输出解析修复、Web多模态 | ⭐⭐⭐⭐ (平稳修复) |
| **NanoClaw** | 5 | 2 (合并0) | 0 | 容器自愈、多用户隔离、MCP | ⭐⭐⭐ (底层Bug待解) |
| **NullClaw** | 2 | 0 | 0 | Cron调度断裂修复 | ⭐⭐ (停滞/低频) |
| **Moltis / ZeptoClaw**| 0 | 1 | 0 | Codex流式解析、Webhook安全 | ⭐⭐⭐⭐ (稳定维护) |
| **LobsterAI** | 0 | 0 | 0 | 幽灵会话修复 (积压) | ⭐⭐ (几乎停滞) |

## 3. OpenClaw 在生态中的定位
作为生态内的**核心参照系与“事实标准”**，OpenClaw 展现出了压倒性的社区规模和工程消化能力。
* **优势对比**：其单日高达 500 的 Issue/PR 吞吐量远超其他项目总和。在多渠道适配（WhatsApp/iMessage/Telegram等）和底层架构演进（如全面剥离文件系统向 SQLite 迁移）上，OpenClaw 具备代差优势。
* **技术路线差异**：相较于 Hermes Agent 依赖社区“野蛮生长”带来严重的 PR 积压，以及 IronClaw 激进的 Rust 重构，OpenClaw 采取了**“高频 Beta 磨合 + 核心模块逐步重构”**的稳健策略。通过 `continue_work` 等机制的引入，其在迈向“长期自主 Agent”的路线图上走得最靠前。
* **核心挑战**：由于走得太快，OpenClaw 目前正经受复杂的上下文管理反噬（如致命的 Agent 回复错位 Bug #32296），面临从“功能全面”向“企业级高可用”跨越的阵痛。

## 4. 共同关注的技术方向
今日多个项目在底层架构上产生了奇妙的“共振”，揭示了 AI Agent 领域的共性痛点：
1. **Cron 定时任务与后台调度架构缺陷**：涉及 *OpenClaw, NullClaw, CoPaw, ZeroClaw*。智能体在处理定时任务时普遍存在抢占正常会话、状态同步断裂（幽灵会话）、绕过核心上下文管道的问题。重构调度器成为当务之急。
2. **底层存储向结构化数据库迁移**：涉及 *OpenClaw, LobsterAI*。随着多轮对话状态的膨胀，传统 JSON 文件读写已无法保证高并发下的数据一致性，向 SQLite 等轻量级数据库迁移是必然趋势。
3. **第三方 LLM 流式输出与 Tool Call 解析兼容**：涉及 *PicoClaw, Moltis, NanoBot, Hermes Agent*。OpenAI Codex 的空回复、国内模型（MiniMax, DeepSeek, GLM）的非标准 XML 输出、流式增量解析错误，正在大量消耗各框架的维护精力。
4. **执行权限与 MCP 供应链安全治理**：涉及 *IronClaw, NanoClaw, OpenClaw, ZeroClaw*。社区强烈要求引入“强制门控”、工具按需加载以及针对第三方 MCP Server 的反恶意授权审查机制。

## 5. 差异化定位分析
* **全栈 vs 专精**：
  * **OpenClaw, Hermes Agent** 定位为全栈式网关，力求在所有 IM 平台（Telegram/Discord/Slack）提供一致体验。
  * **ZeroClaw** 走差异化路线，大力投入 IoT 与硬件控制（ESP32），抢占“具身智能/边缘端”身位。
  * **CoPaw (QwenPaw)** 深度绑定 Windows 桌面端，主攻个人 PC 上的自动化工作流。
* **架构代差**：
  * **IronClaw** 底层重写 Rust，主打企业级 Auth 与安全隔离，面向 ToB 市场。
  * **NanoClaw, NanoBot** 聚焦轻量化和容器化部署，适合个人极客的 VPS/家庭主机场景。

## 6. 社区热度与成熟度
* **高频迭代期（激进/活跃）**：**OpenClaw, ZeroClaw, IronClaw**。项目正处于密集重构和新功能爆发期，社区参与度极高，但同时也引入了不稳定风险（如 OpenClaw 的 P1 级上下文错乱、ZeroClaw 的工具执行绕过）。
* **质量巩固期（稳步/打磨）**：**CoPaw, NanoBot, PicoClaw**。版本大更新后进入修 Bug 阶段。CoPaw 面临重型负载下的资源泄漏考验，PicoClaw/NanoBot 正在快速修复前端与协议 Bug。
* **沉寂/维护期（停滞/低频）**：**Hermes Agent, NullClaw, LobsterAI**。Hermes 热度高但核心维护者审查能力跟不上，导致积压；NullClaw 和 LobsterAI 活跃度极低，处于维护停滞甚至放弃的边缘状态。

## 7. 值得关注的趋势信号
1. **Agent 的“拟人化反馈”成为刚需**：NullClaw 和 Hermes 的 Telegram 用户对“点击内联按钮无 Typing 动画”或“流式闪烁”极其敏感。未来的 Agent 交互设计不仅要输出结果，还需要在**等待、思考、执行工具**的每个生命周期提供拟人的状态可视化。
2. **上下文与内存管理正在工程化“深水区”**：*CoPaw 的并发控制提案、OpenClaw 的自主续签机制*均表明，单纯拉长上下文窗口已失效。行业正在转向“上下文压缩调度”、“工具描述按需加载”等工程化手段来解决 Token 膨胀问题。
3. **“拿来即用”的终端体验竞争加剧**：无论是 Hermes 用户强烈要求的“直接用 Claude 订阅跑 Agent（免 API）”，还是 PicoClaw 用户要求的“LM Studio 0 配置接入”，都释放了一个强烈信号：**开发者厌倦了配置环境变量和 API Key，极低门槛的端侧部署能力将成为兵家必争之地**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 6 月 1 日 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-06-01)

## 1. 今日速览
NanoBot 在过去 24 小时内保持了**高活跃度与高迭代节奏**。项目今日共处理了 19 个 Pull Requests（其中 7 个已合并/关闭，12 个待处理），并消化了 6 个 Issues（关闭 4 个，新开 2 个），显示出维护团队对社区反馈的快速响应能力。今日的更新重心明显倾向于**安全加固**（如 WebSocket 鉴权漏洞修复）和**架构重构**（如解耦 HTTP 处理器和 Dream 定时任务）。整体来看，项目在稳定性修复和底层性能优化方面正在稳步推进，开发者参与度健康。

## 2. 版本发布
**无新版本发布。** 今日无新增 Release 或 Tag，项目当前处于密集的功能开发与代码合并期。

## 3. 项目进展
今日共合并/关闭了 7 个 PR，主要在 WebUI 渲染稳定性和安全性方面取得了实质性进展：
- **WebUI 渲染修复**：[#4117](https://github.com/HKUDS/nanobot/pull/4117) 修复了未指定语言的代码块导致 WebUI 白屏崩溃的问题，极大提升了前端容错率。
- **安全漏洞闭环**：[#4103](https://github.com/HKUDS/nanobot/pull/4103) 修复了 WebSocket token 签发路由未鉴权的严重漏洞（对应 Issue [#4077](https://github.com/HKUDS/nanobot/issues/4077)），目前已合并。
- **Heartbeat 逻辑优化**：[#4114](https://github.com/HKUDS/nanobot/pull/4114) 和 [#4112](https://github.com/HKUDS/nanobot/pull/4112) 彻底解决了 Heartbeat 在无任务时错误发送通知的缺陷，并引入了 fail-closed 机制，提升了后台任务的可靠性。
- **Agent 循环修复**：[#4121](https://github.com/HKUDS/nanobot/pull/4121) 优化了流式聊天渲染逻辑，修复了文件编辑动作导致的渲染异常。

## 4. 社区热点
- **Azure AAD 认证支持**：用户 kunalk16 提出了关于 Azure OpenAI Provider 支持 AAD 认证的请求（[#4125](https://github.com/HKUDS/nanobot/issues/4125)）。由于许多企业级 Azure 订阅强制要求基于身份的认证，该需求呼声较高，且作者已同步提交了对应 PR。
- **商业变现与工具推荐探讨**：Vest-ai-tools 提交的 [#4120](https://github.com/HKUDS/nanobot/issues/4120) 探讨了 AI Agent 在进行 SaaS 工具推荐时容易产生幻觉的问题，并提出了关于工具变现与集成的可能性。这反映了社区对 NanoBot 在未来接入更广泛的商业 MCP 工具生态的期待。

## 5. Bug 与稳定性
今日报告并处理的 Bug 集中在上下文记忆和前端渲染方面，整体已得到有效控制：
- **高严重度 (已修复)**：WebUI 白屏崩溃（[#4116](https://github.com/HKUDS/nanobot/issues/4116)）。因 Markdown 渲染组件无法处理空语言标识的代码块导致，已在 PR [#4117](https://github.com/HKUDS/nanobot/pull/4117) 中修复。
- **中严重度 (已修复)**：Heartbeat 错误发送 "All clear."（[#4111](https://github.com/HKUDS/nanobot/issues/4111)），已由核心成员通过 PR [#4114](https://github.com/HKUDS/nanobot/pull/4114) 修复。
- **中严重度 (待确认)**：用户消息在 else 分支下被重复归档（[#4128](https://github.com/HKUDS/nanobot/issues/4128)）。开发者 `huji820` 发现 `retain_recent_legal_suffix` 方法在处理特定上下文时可能导致 LLM 上下文不一致，目前尚无关联 fix PR，需维护者重点关注。

## 6. 功能请求与路线图信号
从目前的 Open PRs 来看，项目的下一步演进方向明确了几个关键信号：
- **多模型兼容性增强**：[#4124](https://github.com/HKUDS/nanobot/pull/4124) 正在解决 mimo/glm 等兼容模型将 tool calls 作为 XML 文本输出的问题。这表明 NanoBot 正在致力于扩大对非标准 OpenAI 协议模型的兼容边界。
- **安全防御纵深**：[#4119](https://github.com/HKUDS/nanobot/pull/4119) 阻止工作空间符号链接逃逸，[#4123](https://github.com/HKUDS/nanobot/pull/4123) 在 MCP 探测前拒绝不安全的 HTTP URL。项目在系统级执行和网络安全边界管控上正在收紧。
- **语音与本地 ASR 能力**：[#4122](https://github.com/HKUDS/nanobot/pull/4122) 集成了基于 FunASR 的本地语音转录功能，这可能成为下一个版本的重要特性。

## 7. 用户反馈摘要
通过今日的 Issue 提炼，真实用户的核心痛点在于：
1. **企业级安全合规受限**：强依赖 API Key 的 LLM 接入方式无法满足严格合规企业的需求（Issue [#4125](https://github.com/HKUDS/nanobot/issues/4125)）。
2. **第三方模型协议不规范**：部分开源模型（如 GLM-5.1、Mimo-v2.5）在 Tool Call 时输出不标准，导致聊天界面直接泄漏原始 XML 代码，严重影响体验（PR [#4124](https://github.com/HKUDS/nanobot/pull/4124)）。
3. **细微的上下文状态丢失**：高级用户对 Agent 的长程记忆有严苛要求，`session/manager.py` 中的边界处理逻辑引起了社区开发者的代码级审查与反馈（Issue [#4128](https://github.com/HKUDS/nanobot/issues/4128)）。

## 8. 待处理积压
- **重构架构 PR 需推进**：[#4115](https://github.com/HKUDS/nanobot/pull/4115)（解耦 HTTP 路由）和 [#3990](https://github.com/HKUDS/nanobot/pull/3990)（重构 Dream 类）是后续支持热更新等高级特性的基础，目前已停滞数天，需要维护者进行 Review 推进。
- **Heartbeat 逻辑彻底解耦**：由 `phelps-sg` 提交的长期 PR [#1443](https://github.com/HKUDS/nanobot/pull/1443)（将 Heartbeat 推理与通知剥离）自 3 月至今仍未合并，与今日密集修复的 Heartbeat Bug 息息相关，建议维护者重新评估该 PR 的合并价值。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-01)

## 1. 今日速览

Hermes Agent 今日维持了极高的社区热度，过去 24 小时内共有 50 条 Issue 更新（新开/活跃 48，关闭 2）和 50 条 PR 更新（待合并 48，合并/关闭 2），但**未发布任何新版本**。项目当前处于典型的“高输入低吞吐”状态：社区贡献和问题反馈非常活跃，但核心维护者的合并速度相对滞后，48 个待合并 PR 表明代码审查积压较严重。项目整体健康度依然良好，主要焦点集中在多平台 Gateway 适配（Telegram、Signal、Session）、多模型提供商兼容性以及 CLI/TUI 体验优化上。

## 2. 版本发布

无。今日无新版本发布。

## 3. 项目进展

今日仅关闭/合并了 2 个 Issue 和 2 个 PR，整体推进速度较慢。值得关注的变化：

- **[PR #35773] feat(model-picker): refresh provider descriptions + describe grouped rows** — 已关闭（可能被更大规模重构替代或暂缓）。该 PR 旨在优化 TUI、Telegram 等场景下的模型选择器描述文案。
- **[Issue #24000] provider: nous falls back to 32,768-token context** — 已关闭。Nous 提供商的上下文长度硬编码回退导致启动失败的问题得到解决。

大量关键修复 PR 仍处于 Open 状态等待审查（详见第 5 节），项目整体向前推进幅度有限。

## 4. 社区热点

按评论数和反应数排列的热点话题：

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 |
|------|----------|------|----|----------|
| 1 | [#2512 Native Windows Support](https://github.com/NousResearch/hermes-agent/issues/2512) | 10 | 6 | 社区长期强烈要求原生 Windows 支持，避免依赖 WSL2 |
| 2 | [#10359 native windows support](https://github.com/NousResearch/hermes-agent/issues/10359) | 9 | 8 | 与 #2512 重复，反映该需求普遍性极高 |
| 3 | [#27385 xAI OAuth loopback timeout on macOS](https://github.com/NousResearch/hermes-agent/issues/27385) | 8 | 0 | xAI Grok OAuth 本地回调成功但 Hermes 超时，macOS 用户受阻 |
| 4 | [#25267 Claude Agent SDK with subscription OAuth](https://github.com/NousResearch/hermes-agent/issues/25267) | 4 | **12** | 👍 最高：用户希望用 Claude 订阅直接跑 Hermes，避免双重付费 |
| 5 | [#7069 Infinite retry loop with local LLM prefill](https://github.com/NousResearch/hermes-agent/issues/7069) | 5 | 2 | 本地重型 LLM 的 prefill 阶段超过流式超时导致无限重试 |
| 6 | [#30411 + #27166 Telegram DM topic routing bugs](https://github.com/NousResearch/hermes-agent/issues/30411) | 3-4 | 1 | Telegram 网关的 DM 话题路由和多话题管理存在多处回归 |

**关键洞察**：Windows 原生支持和 Claude 订阅 OAuth 集成是社区呼声最高的两大功能诉求。Telegram 网关的稳定性问题持续困扰用户。

## 5. Bug 与稳定性

按严重程度（P1 > P2 > P3）排列今日报告和活跃的 Bug：

### P1 — 严重（影响核心功能）

| Bug | 状态 | Fix PR | 说明 |
|-----|------|--------|------|
| [#27166 Telegram DM topic response routing broken](https://github.com/NousResearch/hermes-agent/issues/27166) | OPEN | 无 | 会话分割后响应被路由到错误的 topic |
| [#30411 Telegram DM auto-topic-rename broken](https://github.com/NousResearch/hermes-agent/issues/30411) | OPEN | 无 | `_recover_telegram_topic_thread_id()` 导致根 DM 不再创建新 topic |
| [#25516 GPT pools type issue](https://github.com/NousResearch/hermes-agent/issues/25516) | OPEN | 无 | 所有 GPT 系提供商请求在 HTTP 发出前即失败 |
| [#32574 Gateway zombie connection detection](https://github.com/NousResearch/hermes-agent/issues/32574) | OPEN | 无 | 网关无通用机制检测僵尸连接 |

**相关安全修复 PR**：
- **[PR #36082] fix(gateway): scope resume lookups** — 修复网关 `/resume` 命令未按 source/user 过滤的权限问题，防止跨用户会话泄露。

### P2 — 中等（影响特定场景）

| Bug | 状态 | Fix PR | 说明 |
|-----|------|--------|------|
| [#27385 xAI OAuth timeout on macOS](https://github.com/NousResearch/hermes-agent/issues/27385) | OPEN | 无 | macOS 本地 OAuth 回调超时 |
| [#7069 Local LLM infinite retry loop](https://github.com/NousResearch/hermes-agent/issues/7069) | OPEN | [PR #35642](https://github.com/NousResearch/hermes-agent/pull/35642) 有限重试修复 | 本地重型模型的 prefill 超时 |
| [#19236 Slack DM cannot open](https://github.com/NousResearch/hermes-agent/issues/19236) | OPEN | 无 | Slack 无法按用户名/ID 发起 DM |
| [#27834 MiniMax/DeepSeek V4 XML tool calls](https://github.com/NousResearch/hermes-agent/issues/27834) | OPEN | 无 | 工具调用被渲染为文本而非执行 |
| [#23783 Telegram bot token conflict after update](https://github.com/NousResearch/hermes-agent/issues/23783) | OPEN | 无 | 更新后旧进程未释放 token |
| [#35908 GoogleDrive MCP login failure](https://github.com/NousResearch/hermes-agent/issues/35908) | OPEN | 无 | MCP 服务 OAuth 配置正确但登录失败 |
| [#36070 Gemini vision provider fails](https://github.com/NousResearch/hermes-agent/issues/36070) | OPEN | 无 | `image_url` 不被 gemini-2.0-flash 接受 |
| [#36054 Gateway image auto-routing ignores model overrides](https://github.com/NousResearch/hermes-agent/issues/36054) | OPEN | 无 | 网关图片路由未使用会话级模型覆盖 |
| [#36052 Bad HTTP MCP endpoint 60s block](https://github.com/NousResearch/hermes-agent/issues/36052) | OPEN | 无 | 错误配置的 MCP 端点阻塞发现 60 秒 |
| [#32737 Tirith shell scanner false positives](https://github.com/NousResearch/hermes-agent/issues/32737) | OPEN | 无 | 安全扫描器误报本地脚本管道操作 |
| [#20507 Camofox browser session closed](https://github.com/NousResearch/hermes-agent/issues/20507) | OPEN | [PR #20511](https://github.com/NousResearch/hermes-agent/pull/20511) | Camofox 浏览器会话过早关闭 |
| [#26157 Telegram streaming flicker](https://github.com/NousResearch/hermes-agent/issues/26157) | OPEN | 无 | DM 响应出现内容闪烁/回滚 |
| [#26436 `hermes doctor` missing credential check](https://github.com/NousResearch/hermes-agent/issues/26436) | OPEN | 无 | 未标记缺失的 OpenRouter 凭证 |
| [#36040 TUI skins not fully loading](https://github.com/NousResearch/hermes-agent/issues/36040) | OPEN | 无 | 自定义皮肤仅部分加载 |

**关键修复 PR（待合并）**：
- **[PR #36087]** — 修复 Anthropic `thinking blocks cannot be modified` 400 错误，路由至恢复路径
- **[PR #36086]** — 修复 Anthropic claude_code OAuth 刷新令牌竞态条件
- **[PR #35992]** — 修复 TUI 长会话恢复时 ANSI 转义序列导致的显示错乱
- **[PR #35987]** — 修复 TUI 超时后残留的 prompt overlay
- **[PR #35931]** — 修复 SQLite < 3.34 上 FTS5 tokenizer 不可用的问题
- **[PR #35642]** — 将 stall retry 从一次性替换为有界重试（默认 5 次）
- **[PR #36009]** — 修复 Telegram 长音频/语音消息时长显示为 0:00
- **[PR #35699]** — 修复代码块内的 `MEDIA:` 标签被错误提取
- **[PR #35764]** — 跳过 Warp 终端的 `clampStdoutDimensions` 防止布局崩溃

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 相关 PR | 纳入判断 |
|----------|------|---------|----------|
| **Native Windows Support** ([#2512](https://github.com/NousResearch/hermes-agent/issues/2512), [#10359](https://github.com/NousResearch/hermes-agent/issues/10359)) | 👍 6+8, 评论 19 | 无 | 🔴 尚无 PR，但需求极强，建议维护者优先排期 |
| **Claude 订阅 OAuth 集成** ([#25267](https://github.com/NousResearch/hermes-agent/issues/25267)) | 👍 12 | [PR #36086](https://github.com/NousResearch/hermes-agent/pull/36086) 部分相关 | 🟡 OAuth 修复已在进行，完整订阅集成尚远 |
| **ACP 客户端模式** ([#36057](https://github.com/NousResearch/hermes-agent/issues/36057)) | 新开 | 无 | 🟡 与 [#16028](https://github.com/NousResearch/hermes-agent/issues/16028) ACP Registry 互补 |
| **Rewind/Edit-and-resubmit** ([#21910](https://github.com/NousResearch/hermes-agent/issues/21910)) | 👍 5 | [PR #25074](https://github.com/NousResearch/hermes-agent/pull/25074) v2 实现已完成 | 🟢 PR 已就绪，待审查合并 |
| **Kanban per-task model override** ([#24206](https://github.com/NousResearch/hermes-agent/issues/24206)) | 评论 3 | 无 | 🔴 尚无 PR |
| **Collapsible Dashboard Sidebar** ([#19272](https://github.com/NousResearch/hermes-agent/issues/19272)) | 👍 1 | 无 | 🔴 低优先级 UI 改进 |
| **Session 去中心化消息网关** ([PR #6948](https://github.com/NousResearch/hermes-agent/pull/6948)) | 新功能 | PR Open | 🟡 已有完整实现，待审查 |
| **Hindsight 长期记忆模型注入** ([PR #36083](https://github.com/NousResearch/hermes-agent/pull/36083)) | 新功能 | PR Open | 🟢 增强记忆系统的个性化能力 |
| **CLI-shim 本地模型选择器** ([PR #36084](https://github.com/NousResearch/hermes-agent/pull/36084)) | 新功能 | PR Open | 🟢 基于 #26634 的端到端完善 |
| **Docker build context 排除运行时状态** ([#15221](https://github.com/NousResearch/hermes-agent/issues/15221)) | 评论 2 | 无 | 🔴 安全卫生改进 |

## 7. 用户反馈摘要

从 Issue 评论中提炼的核心痛点：

1. **Windows 用户被二等对待**：多个 Issue 反复出现，用户不希望被迫使用 WSL2，尤其是在企业环境中部署受限的场景。
2. **Claude 订阅用户的双重付费困境**：用户已支付 Claude Pro/Team 订阅，但使用 Hermes 时还需额外购买 API 额度，体验极差（[引用 #25267](https://github.com/NousResearch/hermes-agent/issues/25267)）。
3. **Telegram 网关不够稳定**：多个 P1/P2 级 Bug 集中在 Telegram 适配器——topic 路由混乱、更新后 token 冲突、流式响应闪烁。Telegram 是除 CLI 外最常用的交互界面。
4. **本地/开源模型用户遭遇超时地狱**：运行本地重型 LLM（如 Llama 70B）的用户频繁遇到 prefill 阶段超过默认 180s 流式超时，进而触发无限重试循环（[#7069](https://github.com/NousResearch/hermes-agent/issues/7069)）。
5. **`hermes doctor` 诊断不可靠**：用户依赖诊断工具排查配置问题，但它未能检测到缺失的 OpenRouter 凭证（[#26436](https://github.com/NousResearch/hermes-agent/issues/26436)）。
6. **多提供商工具调用解析不一致**：MiniMax-M2.7 和 DeepSeek V4 的 XML 格式工具调用被当作普通文本渲染而非执行（[#27834](https://github.com/NousResearch/hermes-agent/issues/27834)）。

## 8. 待处理积压

以下为长期活跃但尚未有明确解决方案或维护者响应的重要项目：

| Issue/PR | 存续时间 | 紧迫度 | 建议 |
|----------|----------|--------|------|
| [#2512 Native Windows Support](https://github.com/NousResearch/hermes-agent/issues/2512) | ~2 个月 | 🔴 极高 | 需要维护者明确表态是否接受，避免社区重复开 Issue |
| [#7069 Local LLM infinite retry](https://github.com/NousResearch/hermes-agent/issues/7069) | ~1.5 个月 | 🔴 高 | [PR #35642](https://github.com/NousResearch/hermes-agent/pull/35642) 提供了有界重试方案，应尽快审查 |
| [#27385 xAI OAuth timeout](https://github.com/NousResearch/hermes-agent/issues/27385) | ~2 周 | 🟠 高 | macOS 用户完全无法使用 xAI Grok OAuth |
| [#19236 Slack DM issue](https://github.com/NousResearch/hermes-agent/issues/19236) | ~1 个月 | 🟠 中 | Slack 集成的关键功能缺失 |
| [PR #6948 Session gateway](https://github.com/NousResearch/hermes-agent/pull/6948) | ~1.5 个月 | 🟡 中 | 完整的新网关实现，需维护者评估架构可行性 |
| [PR #25074 /rewind v2](https://github.com/NousResearch/hermes-agent/pull/25074) | ~2.5 周 | 🟡 中 | 功能完整，等待 #23445 v1 合并后可推进 |
| [#25267 Claude subscription OAuth](https://github.com/NousResearch/hermes-agent/issues/25267) | ~2.5 周 | 🟡 中 | 👍 最高（12），需要架构决策 |

**积压统计**：48 个待合并 PR、48 个活跃未关闭 Issue。建议维护团队进行一次 Bug Triage 和 PR Review 集中处理日，优先处理 P1 级 Telegram 网关问题和安全相关 PR（#36082）。

---

*数据来源：github.com/nousresearch/hermes-agent | 生成时间：2026-06-01 | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-01)

> 数据源：github.com/sipeed/picoclaw | 分析周期：过去 24 小时

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了**高度活跃**的迭代状态。系统共处理了 11 个 Pull Requests（其中 4 个已合并/关闭）和 7 个 Issues（3 个已解决）。从提交内容来看，开发重心明显向**运行稳定性、OAuth 兼容性及渠道交互体验**倾斜。Web 端迎来了期待已久的图片粘贴/拖拽上传功能，同时针对 OpenAI Codex 后端的空回复“顽疾”已出现确切修复方案。整体而言，项目正处于新版本发布后的错误修正期，展现出良好的项目健康度。

## 2. 版本发布
- **nightly: v0.2.9-nightly.20260531.1ce353ba**
  - **性质**：自动化夜间构建版本。
  - **注意事项**：官方提示该版本未经过全面人工测试，可能存在不稳定现象，不建议在生产环境中直接部署。生产环境请依然沿用最新的稳定标记版本。

## 3. 项目进展
今日共有 4 个 PR 顺利合并/关闭，有效推进了系统健壮性与用户体验：
- **修复 Codex OAuth 空回复核心 Bug**：PR [#2967](https://github.com/sipeed/picoclaw/pull/2967) 合并。该 PR 解决了使用 OpenAI Codex 后端时因流式数据丢失导致的空响应问题。
- **Web 前端支持图片上传**：PR [#2969](https://github.com/sipeed/picoclaw/pull/2969) 合并。为 Web UI 引入了图片粘贴和拖拽上传功能，极大改善了多模态交互体验。
- **富媒体消息能力初探**：PR [#2856](https://github.com/sipeed/picoclaw/pull/2856) 关闭（对应 Issue #2855），完善了底层消息管道对富媒体和附件的支持架构。
- **清理构建冗余**：PR [#2980](https://github.com/sipeed/picoclaw/pull/2980) 关闭，将调试输出文件加入 `.gitignore`。

## 4. 社区热点
今日社区讨论的焦点集中在模型接入与常见报错排查上：
- **最活跃 Issue - LM Studio 接入请求**：[#28 (Feat Request: LM Studio Easy Connect)](https://github.com/sipeed/picoclaw/issues/28)。该 Issue 拥有 21 条评论，表明大量用户希望在 Android 等设备上低成本接入本地模型（如 LM Studio），目前官方尚未提供开箱即用的便捷配置。
- **最多反响的 Bug - Codex 后端交互**：[#2674 (Codex OAuth: empty assistant response...)](https://github.com/sipeed/picoclaw/issues/2674) 获得了 4 个 👍。用户在使用 ChatGPT 后端时遇到普遍的空响应问题，这直接催生了今日合并的 PR #2967。
- **版本节奏关注**：中国开发者在 Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) 中集中反馈了版本发布频率、QQ 渠道重启循环以及 API 密钥管理不便等综合体验问题。

## 5. Bug 与稳定性
今日报告/处理的关键漏洞如下：
- **🔴 P0 - 上下文长度显示异常**：Issue [#2968](https://github.com/sipeed/picoclaw/issues/2968)。在使用 MiniMax 模型时，上下文始终卡在 76800 tokens，影响长文本记忆。目前暂无关联 Fix PR。
- **🟠 P1 - OpenAI/Codex 流输出解析失败**：Issues [#2674](https://github.com/sipeed/picoclaw/issues/2674) & [#2953](https://github.com/sipeed/picoclaw/issues/2953)。**已修复**（关联合并 PR #2967）。
- **🟡 P2 - 运行时崩溃与重载稳定性**：PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) 暴露出 `pkg/agent` 在热重载时存在 detached goroutine 泄漏及 panic 风险，目前该修复 PR 仍待合并。
- **🟡 P2 - 消息总线背压与状态可视**：PR [#2906](https://github.com/sipeed/picoclaw/pull/2906) 指出当消息队列饱和时会导致无限阻塞，目前待合并。

## 6. 功能请求与路线图信号
社区提出了多项功能扩展，部分已通过 PR 捷足先登：
- **供应商扩容**：用户请求添加 [OmniRoute](https://github.com/sipeed/picoclaw/issues/2978) 作为新的 Provider。
- **Telegram 渠道体验优化**：PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) 提议在群聊中，将“回复机器人消息”视同为“@提及”，大幅增强交互自然度，待合并。
- **Cron 任务管理增强**：PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) 为 Agent 的定时任务工具添加了 `get` 和 `update` 动作，防止任务重置，待合并。
- **SDK 兼容跟进**：PR [#2979](https://github.com/sipeed/picoclaw/pull/2979) 紧跟上游，适配了 `anthropic-sdk-go v1.46.0`，待合并。

## 7. 用户反馈摘要
综合今日 Issues，提炼出真实用户的三大核心痛点：
1. **部署门槛与设备兼容**：部分非专业用户（如 #28）在将 PicoClaw 与本地模型（LM Studio）结合部署在移动端时存在较高门槛。
2. **Provider 适配碎片化**：OpenAI Codex、MiniMax 等不同供应商在流式输出、Token 计算上的特殊逻辑（#2674, #2968），导致 PicoClaw 在跨模型泛化时容易触发边界错误。
3. **管理界面易用性**：用户呼吁 UI 层面改进（#2952），包括：记忆已有 Key 的提供商列表、支持下拉选择、提供 API 连通性测试以及一键拉取模型列表等便捷功能。

## 8. 待处理积压
以下重要/高活跃度的 Issue 和 PR 长期处于 Open 或 Stale 状态，需要核心团队关注推进：
- **[PR] Agent 循环重载崩溃修复**：PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) - 涉及底层运行时稳定性。
- **[PR] 消息总线背压处理**：PR [#2906](https://github.com/sipeed/picoclaw/pull/2906) - 解决高并发下的阻塞隐患。
- **[PR] 技能依赖缺失检测**：PR [#2936](https://github.com/sipeed/picoclaw/pull/2936) - 优化 Agent 对不可用工具的自动降级逻辑。
- **[Issue] QQ 渠道无限重启循环**：Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) - 严重影响特定渠道可用性，亟待验证修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 6 月 1 日 NanoClaw (qwibitai/nanoclaw) 项目动态日报。

---

# 📊 NanoClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，社区与开发者互动频繁。过去 24 小时内，项目新增/活跃了 **5 个 Issues** 和 **9 个 Pull Requests**，但暂无新版本发布。整体来看，项目当前的重心正从单一功能开发转向**系统稳定性增强、MCP（模型上下文协议）生态兼容以及多用户/多实例架构的支持**。今日出现了多个针对系统底层稳定性和资源泄漏的关键修复 PR，表明项目正处于打磨生产环境可用性的关键阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被关闭（未合并或被替代），有 7 个高质量 PR 处于待合并状态。核心进展集中在基础设施和集成能力上：

*   **MCP 传输能力扩展**：PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) 实现了 HTTP/SSE MCP 服务器支持。此前仅支持 stdio 模式，此更新将大幅增强项目接入远程和托管型 MCP 服务器的能力。
*   **容器生命周期管理优化**：PR [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) 修复了在无特权环境下（如 LXC/VM）Docker 守护进程无法停止容器导致的“僵尸容器”及内存泄漏问题。
*   **Skill 机制增强**：PR [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) 和 [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) 显著改善了用户自定义 Skill 的发现和挂载机制，支持将特定 Group 的技能注册为斜杠命令，并支持外部符号链接挂载。
*   **基础执行环境修复**：PR [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) 修复了 mnemon 设置在容器入口点未实际执行的逻辑漏洞。

## 4. 社区热点
今日最受关注的议题围绕着**多用户场景支持**与**供应链安全**展开：
*   **多用户/多 Bot 独立运行需求**：Issue [#2653](https://github.com/nanocoai/nanoclaw/issues/2653)（由 elancode 发起）探讨了在同一台宿主机（如家庭 Mac）上为不同用户运行独立 Telegram Bot 和 Agent 的场景，引发了关于当前数据模型隔离机制的讨论。
*   **MCP 供应链安全警告**：Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641)（由 NoamGit 发起）提醒社区注意 `@gongrzhe/server-gmail-autoauth-mcp` 存在的供应链风险（涉嫌窃取 Gmail 凭证）。这反映了 AI Agent 领域用户对 MCP 随意授权带来的安全隐忧日益加深。

## 5. Bug 与稳定性
今日报告了多个影响系统可用性的中高危 Bug，部分已有对应修复 PR：

*   🔴 **高严重度：单线程事件循环冻结** (Issue [#2665](https://github.com/nanocoai/nanoclaw/issues/2665))
    *   **描述**：Node.js 单线程在执行无界 `await` 或同步阻塞操作（如 `execSync`）时会导致整个 Host 冻结，且当前的 `/health` 接口无法检测到此种假死状态。
    *   **状态**：**暂无修复 PR**。
*   🟠 **中严重度：文件描述符耗尽导致网关宕机** (Issue [#2655](https://github.com/nanocoai/nanoclaw/issues/2655))
    *   **描述**：OneCLI 凭证网关在突发负载下突破了默认的 1024 软限制，导致直接抛出 OS Error 24 退出，造成所有 Agent 断网。
    *   **状态**：暂无针对性 PR，需调整系统 `ulimit` 配置。
*   🟡 **低严重度：故障自愈能力缺失** (Issue [#2657](https://github.com/nanocoai/nanoclaw/issues/2657))
    *   **描述**：系统具备故障检测能力但缺乏自愈能力，网关工作进程死亡后容器仍标记为 `Up`，未能触发自动重启。
    *   **状态**：**暂无修复 PR**。

## 6. 功能请求与路线图信号
通过近期的 Issue 和 PR 趋势，可以清晰看到项目的演进路线图信号：
*   **多用户架构支持**：Issue [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) 提出了明确需求。结合同日 PR [#2654](https://github.com/nanocoai/nanoclaw/pull/2654)（修复平台 ID 命名空间逻辑），项目正在为多通道、多用户的复杂隔离场景夯实基础。
*   **容器健壮性与自愈演进**：Issue [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) 和 Issue [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) 预示着项目下一步将重点引入进程监管机制（类似 PM2 或 supervisor 的守护逻辑）以及真正的异步非阻塞重构。

## 7. 用户反馈摘要
*   **本地化与家庭共享场景增加**：用户（@elancode）开始在家庭共享设备（Mac Mini）上部署 Agent，表明项目正在从极客开发者的 VPS 向更贴近 C 端的家庭私有服务器场景渗透。
*   **对 MCP 第三方插件存在不信任感**：Issue #2641 表明，随着 Agent 获取系统权限的增加，用户对未经审计的 npm MCP 包表现出强烈的安全焦虑。

## 8. 待处理积压
*   **关键架构问题需核心团队响应**：Issue [#2665](https://github.com/nanocoai/nanoclaw/issues/2665)（事件循环冻结）和 Issue [#2655](https://github.com/nanocoai/nanoclaw/issues/2655)（文件描述符泄漏）直接关系到生产环境的稳定性。目前这两个问题尚未有核心成员回复或提交修复 PR，建议维护者 @mshirel 及其他核心贡献者尽快介入评估。
*   **高价值 PR 等待合并**：PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) (HTTP/SSE MCP 支持) 和 PR [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) (容器泄漏修复) 已提交，建议尽快安排 Code Review 并合入主分支，以推进下一个版本的发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
过去 24 小时，NullClaw 项目的整体提交与合并活跃度处于低位，没有产生新的 Pull Requests 或代码合并。然而，社区（特别是 Telegram 渠道的重度使用者）保持了较高的反馈活跃度，**新增了 2 个高质量且定位清晰的缺陷报告（Issues #941, #942）**。整体而言，项目当前处于功能沉淀期的平稳阶段，暂无系统级崩溃或破坏性更新，但核心集成模块（如定时任务调度和 IM 端交互反馈）仍需重点关注和修复。

## 2. 版本发布
**本日无新版本发布。**
*(过去 24 小时内 Releases 数量为 0，无相关更新说明或破坏性变更。)*

## 3. 项目进展
**本日无新合并或已关闭的 PR。**
*(过去 24 小时 PR 更新数为 0，项目代码库今日未发生变更。)*

## 4. 社区热点
今日的社区热点完全集中在 Telegram 集成场景下的用户体验与可靠性问题。由同一核心贡献者/用户 [weissfl](https://github.com/weissfl) 提交的两个 Issue 引发了关注，反映出当前 AI 智能体在对接 Telegram 作为执行与交互终端时，后台调度机制与前端交互反馈存在脱节。
*   **Issue [#942](https://github.com/nullclaw/nullclaw/issues/942)**：聚焦于 Telegram 前端交互体验（Inline 按钮缺乏“正在输入”提示）。
*   **Issue [#941](https://github.com/nullclaw/nullclaw/issues/941)**：聚焦于底层定时任务（Cron jobs）的执行断裂问题。

## 5. Bug 与稳定性
今日共报告 2 个 Bug，均与 Telegram 渠道交付及调度相关，**目前均无对应的 fix PR**。按对系统功能的影响程度评估如下：

*   🔴 **[P1/高] 定时任务无法正常触发 Telegram 交付** | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941)
    *   **现象**：使用 `job_type: "agent"` 创建定时任务时，任务在系统中被标记为“已完成”，但 Agent 子进程从未启动，导致消息从未发送到 Telegram。
    *   **严重性**：核心功能失效。对于个人 AI 助手而言，自动化定时任务是核心卖点，该 Bug 导致依赖此机制的用户完全收不到预期推送，属于严重的逻辑断裂。
    *   **修复状态**：待修复 (Open，暂无 Fix PR)。

*   🟡 **[P2/中] Telegram 内联按钮缺少“正在输入”状态指示** | [Issue #942](https://github.com/nullclaw/nullclaw/issues/942)
    *   **现象**：当用户点击 Telegram 内联按钮（如 `nc_choices` 产生的回调）时，AI 处理请求期间不显示 "typing..." 动画，而在处理普通文本消息时显示正常。
    *   **严重性**：不影响最终结果的输出，但严重损害 AI 助手的“拟人化”体验，容易导致用户因无反馈而重复点击或认为系统卡死。
    *   **修复状态**：待修复 (Open，暂无 Fix PR)。

## 6. 功能请求与路线图信号
今日数据暂未体现新的功能需求，但通过 #941 和 #942 的 Bug 描述，向维护者释放了明确的**底层架构优化信号**：
1.  **回调/异步处理机制需要统一**：#942 表明主程序在处理 `callback_query` 和标准文本消息时，走的是不同的 Hook 逻辑，未来版本需要统一前端状态反馈的拦截器。
2.  **调度器与 Agent 运行时的解耦校验**：#941 暴露出 `schedule` 模块把任务标记为“完成”的逻辑与 Agent 子进程的实际生命周期存在严重错位。这提示项目在下一代版本迭代时，需要引入更健壮的任务状态机或消息队列（如确认子进程真实 PID 后再标记为 Delivered/Running）。

## 7. 用户反馈摘要
从今日的两个 Issue 中可以提炼出以下典型的用户画像与痛点：
*   **高频使用场景**：用户正在积极将 NullClaw 作为 Telegram 上的高级个人自动化助手使用（涉及复杂的 Inline 交互 UI 和基于时间的 Cron 调度）。
*   **核心痛点**：**“静默失败”**（#941 中任务标记成功但未执行）和 **“状态盲目”**（#942 中点击后无反馈）是当前最影响用户信任度的两个因素。用户需要 AI 助手在执行长耗时任务时具备透明的状态可见性。

## 8. 待处理积压
*   ⚠️ **新增积压预警**：今日新增的两个重要 Bug（[#941](https://github.com/nullclaw/nullclaw/issues/941) 和 [#942](https://github.com/nullclaw/nullclaw/issues/942)）目前评论数为 0，且无开发者在 Issue 下跟进。
    *   **建议**：项目维护者需尽快对 #941 进行本地复现（特别是 `schedule` 模块的 `job_type: "agent"` 分支逻辑），并在 Telegram Bot API 适配层排查 `callback_query` 的事件监听，以恢复 Telegram 渠道自动化执行与交互的基本可用性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🤖 IronClaw 项目动态日报 (2026-06-01)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日保持了**极高的开发活跃度与明确的工程主线**，正处于 "Reborn" 架构演进的核心攻坚期。过去 24 小时内，项目共处理了 **23 条 Pull Requests**（其中 16 条待合并，7 条已合并/关闭）和 **5 条 Issues**，显示了核心团队与开源社区的紧密协作。从 PR 分布来看，当前的重心深度聚焦于 **Auth (认证鉴权)**、**Triggers (触发器)** 与 **Outbound (出站通信)** 三大底层基础能力的搭建。整体而言，项目处于健康且高速迭代的状态，核心功能模块正在按计划稳步重构与扩展。

---

## 2. 版本发布

**无新版本发布。** 
当前项目正在密集进行底层依赖更新与核心架构重构，预计在当前阶段的 PR（尤其是 Triggers 和 Auth 核心模块）合并并稳定后，将会发布包含重大架构升级的下一版本。

---

## 3. 项目进展

今日推进的核心 PR 主要围绕 **Reborn 阶段的 Auth 体系完善**、**基础新能力的骨架搭建** 以及 **依赖的全面现代化升级** 展开：

*   **Auth 认证流与 WebUI 接入完善：**
    *   **已合并 PR [#4257](https://github.com/nearai/ironclaw/pull/4257)**：实现了 `AuthPromptView` 挑战富化功能，并为 WebUI v2 接入了 GSuite OAuth、Notion MCP OAuth 和 GitHub PAT 认证卡片。这标志着 WebUI 2.0 的核心身份验证体验已基本落地。
    *   **待合并 PR [#4269](https://github.com/nearai/ironclaw/pull/4269)** 与 **[#4239](https://github.com/nearai/ironclaw/pull/4239)**：进一步将 product-auth 的凭证要求向下传播至运行时，并在产品认证账户与运行时凭证代理之间建立单向投射机制，确保状态一致性。
*   **新核心模块骨架与引擎落地：**
    *   **已合并 PR [#4261](https://github.com/nearai/ironclaw/pull/4261)**：正式引入 `ironclaw_triggers` crate 骨架，定义了触发器领域类型、Cron 验证等核心逻辑。
    *   **待合并 PR [#4263](https://github.com/nearai/ironclaw/pull/4263)**：在 Triggers 模块中引入了基于 libSQL 的首个持久化存储后端。
    *   **待合并 PR [#4262](https://github.com/nearai/ironclaw/pull/4262)**：在 `ironclaw_outbound` 中新增出站通信解析引擎（P0 级别）。
*   **工程提效与依赖升级：**
    *   **已关闭 PR [#4033](https://github.com/nearai/ironclaw/pull/4033)** / **待合并 PR [#4268](https://github.com/nearai/ironclaw/pull/4268)**：Dependabot 持续进行 Rust 核心依赖及 GitHub Actions 的批量升级（包含 `agent-client-protocol`, `tokio` 生态等），保障项目底层依赖的安全性与前瞻性。

---

## 4. 社区热点

今日数据中虽未呈现超高评论数的 ISSUE，但从活跃交互和 Reactions 来看，以下议题最受关注：

*   **Issue [#2923](https://github.com/nearai/ironclaw/issues/2923) (👍 1, 评论 4)**：**stdio MCP 激活失败问题**。作者指出 v0.25.0 环境下 stdio 传输协议在激活预检阶段失败。此 Issue 之前被误关，当前已重新打开。这反映了社区中重度依赖本地 stdio 传输的 MCP 开发者对现有鉴权拦截逻辑的不满，迫切需要官方澄清 stdio 场景下的授权发现机制。
*   **社区贡献者提交端到端测试集**：**PR [#4265](https://github.com/nearai/ironclaw/pull/4265)** 由社区成员提交，为 CodeAct 场景补充了 7 个端到端测试。体现了项目在 AI 智能体执行（如代码生成、格式转换）方面的开发者粘性正在增强。

---

## 5. Bug 与稳定性

*   **🔴 P0 级别：Nightly E2E 流水线失败**
    *   **Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)**：自动化 Nightly E2E 测试失败。这对于当前正处于大规模重构期的项目是一个需要警惕的信号，可能意味着近期的某些底层改动引入了非预期的回归。
*   **🟡 P1 级别：Runtime HTTP 出口同步阻塞**
    *   **Issue [#4206](https://github.com/nearai/ironclaw/issues/4206) (已关闭)**：有开发者指出当前 Runtime 的 HTTP 出口请求从 `execute` 到底层网络传输全部是同步实现，这会严重影响 Agent 在并发 I/O 场景下的性能表现。目前 Issue 已关闭，**预估官方已着手进行端到端异步化改造**。
*   **🟡 P1 级别：能力查询缺陷导致 Agent 驱动报错**
    *   **PR [#4266](https://github.com/nearai/ironclaw/pull/4266)** 修复了一个关键交互体验 Bug：当 Agent 尝试调用猜测的或已过期的 Capability 时，系统会直接抛出致命的模型阶段错误，现在优化为将错误延后并返回模型可见的 `InvalidInput`，从而允许大模型进行自我纠正。

---

## 6. 功能请求与路线图信号

近期的 Issues 与 PRs 暴露出 IronClaw 正在向更加安全、自治的智能体架构演进，以下信号值得开发者关注：

*   **🛡️ 默认拒绝的子任务派发策略 (Agent 安全性增强)**
    *   **Issue [#228](https://github.com/nearai/ironclaw/issues/228)**：核心开发者提出，当前的 `CreateJobTool` 允许 LLM 无限制地创建子任务。为了防止 Prompt 注入导致的任务雪崩，提议引入默认拒绝的委派策略。**预测**：这极有可能在近期以 Capabilities 权限升级的形式在主分支落地。
*   **🌐 Web 网关支持 Routine (常规任务) 创建**
    *   **PR [#4264](https://github.com/nearai/ironclaw/pull/4264)**：新增了 `POST /api/routines` 端点，复用了底层的 Routine 构建逻辑。这意味着 IronClaw 的 WebGateway 正在将后端的调度能力逐步暴露给外部客户端，为构建更丰富的上层控制面板铺平道路。
*   **📅 持久化触发器机制**
    *   结合 **PR [#4261](https://github.com/nearai/ironclaw/pull/4261) (骨架)** 和 **PR [#4263](https://github.com/nearai/ironclaw/pull/4263) (libsql后端)**，可以预见 IronClaw Agent 即将具备基于 Cron 的持久化自触发能力，这是迈向 "自动驾驶" Agent 的重要一步。

---

## 7. 用户反馈摘要

从今日的 Issue 描述与互动中，可以提炼出以下真实用户的典型反馈：

*   **场景痛点：MCP 接入复杂度**：在 Issue [#2923](https://github.com/nearai/ironclaw/issues/2923) 中，用户明确表达了对 stdio MCP 激活失败的不解。用户期望 stdio 作为本地最简单的传输方式，不应被强行绑定复杂的 OAuth 端点发现逻辑。
*   **场景痛点：调试与排查困难**：用户 **PR [#4090](https://github.com/nearai/ironclaw/pull/4090)** 提出希望增加 `IRONCLAW_LOG_MAX_BYTES` 环境变量，因为默认的日志截断（500 bytes）导致在使用 Agent 进行复杂 Tool 调用时，无法在终端看到完整的 LLM 请求体，这反映了开发者在调试复杂 Agent 行为时的切肤之痛。

---

## 8. 待处理积压

以下高价值或高隐患的 Issue/PR 目前处于待处理或需持续跟进状态，提醒维护者优先关注：

1.  **Nightly E2E 测试失败亟待排查**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 处于 OPEN 状态，流水线红灯可能会阻塞后续的版本发布。
2.  **_stdio MCP 授权异常**：[Issue #2923](https://github.com/nearai/ironclaw/issues/2923) 涉及核心传输链路的可用性，需尽快确认是否为预检逻辑的误判。
3.  **大规模依赖升级 Pending**：目前有超过 5 个由 `dependabot[bot]` 发起的依赖升级 PR（如 [PR #4001](https://github.com/nearai/ironclaw/pull/4001) Tokio 生态升级）处于 OPEN 状态，长时间不合并可能导致后续代码冲突的风险加剧。

--- 
*分析师注：IronClaw 目前的架构重构（Reborn）十分坚决，直接触及了凭证、触发器和底层通信等核心模块。对于关注该项目的开发者，建议密切关注 `ironclaw_triggers` 和 `ironclaw_outbound` 这两个新增 crate 的最终合并动态。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 2026 年 6 月 1 日 LobsterAI (github.com/netease-youdao/LobsterAI) 项目动态日报：

---

# 📡 LobsterAI 项目动态日报 (2026-06-01)

### 1. 今日速览
过去 24 小时，LobsterAI 项目的整体活跃度处于**低位静默状态**。项目今日未进行任何代码合并（0 个 PR 合并，0 个 Issue 关闭），且没有发布新版本。然而，社区底层的代码维护仍在缓慢进行，今日有一项针对定时任务“幽灵会话”缺陷的重要修复 PR 产生了更新活动。综合来看，项目目前处于平稳迭代期，但需警惕部分 PR 由于长期未合并可能带来的维护滞后风险。

### 2. 版本发布
**本日无新版本发布。**

### 3. 项目进展
本日**无新合并的 PR 或关闭的 Issue**，项目代码库在最近 24 小时内没有实质性向前推进。

### 4. 社区热点
今日没有产生大量新评论的讨论，但有一条处于长期打开状态的 PR 因机器人标签或微量更新而进入视野，成为今日关注度最高的动态：
*   **🔗 [PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465) `[OPEN]`**: 修复已删除的定时任务在重启后作为幽灵会话重新出现的问题。
    *   **分析**：该 PR 深入触及了系统的数据清理机制。由于底层定时任务调度机制（涉及 OpenClaw 网关与本地 SQLite 的交互）存在同步缝隙，导致用户反复删除无效。这反映了在复杂网关架构下，本地状态与云端状态的一致性是开发者亟待解决的核心痛点。

### 5. Bug 与稳定性
今日无新增 Bug 报告。但根据今日活跃的 PR 提取到一项历史遗留的**中等严重程度**缺陷：
*   **🪲 定时任务“幽灵会话” Bug**
    *   **严重程度**：中等（P2）- 不影响系统核心运行，但严重影响受影响用户的使用体验。
    *   **表现**：用户删除定时任务并重启应用后，该任务会以空内容的“幽灵会话”反复出现在列表中。
    *   **根本原因**：调用 `cron.remove` 仅清除了网关侧记录，但未清理本地 SQLite 数据库 (`cowork_sessions` 表) 中由 `resolveOrCreateCronSession()` 创建的关联记录。
    *   **修复状态**：**已有修复 PR** -> 🔗 [PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)（目前状态：待合并，且带有 `[stale]` 标签）。

### 6. 功能请求与路线图信号
今日**无新增功能请求**。从目前的 PR 积压情况来看，项目近期的路线图信号集中在“系统底层稳定性与状态一致性的修复”上，而非新功能的扩张。

### 7. 用户反馈摘要
由于今日无新增 Issue 和评论，反馈数据源自历史遗留 PR 的摘要信息：
*   **用户痛点**：对本地缓存与网关数据不同步导致的“死灰复燃”现象感到困惑。用户执行了标准的 UI 删除操作（如取消定时任务），但在应用生命周期发生改变（如重启刷新）后，遇到了脏数据的干扰，这降低了用户对产品数据管理机制的信任度。

### 8. 待处理积压
⚠️ **维护者需要重点关注以下积压事项：**
1.  **过期/停滞的缺陷修复 PR**：🔗 [PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465) 自 4 月 4 日创建以来已接近 2 个月，目前被标记为 `[stale]`。考虑到该 PR 修复了一个会导致用户体验严重受损（幽灵会话反复出现）的数据残留 Bug，且已明确指出问题根源在于本地 SQLite 记录未随网关指令一同清理，**强烈建议维护团队尽快 Review 并合入该 PR**，以改善系统的数据一致性。

--- 
*数据来源：LobsterAI GitHub Repo (netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 6 月 1 日 Moltis 项目动态日报。

---

# 📊 Moltis 开源项目动态日报 (2026-06-01)

**数据源**: github.com/moltis-org/moltis  
**分析师**: AI 智能体与个人 AI 助手开源项目分析组

## 1. 今日速览
今日 Moltis 项目的整体活跃度呈现“低频高质”的状态。项目在过去 24 小时内未收到新的 Issue（新开与关闭均为 0），表明当前项目的 Bug 反馈趋于平静，且暂无新增功能诉求。项目组暂未发布任何新版本，整体处于版本迭代间的蓄力或稳固期。值得注意的是，项目接收到了 1 个全新的 Pull Request，主要聚焦于**完善 OpenAI Codex 模型的底层集成**。总体而言，项目目前处于稳定维护与深度优化的健康阶段。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日无已合并或已关闭的 PR。项目整体推进主要体现在新代码的提交与审核阶段：
*   **OpenAI Codex 流式解析优化**: 
    *   **PR**: [#1088 [OPEN] [codex] Handle OpenAI Codex final tool-call arguments](https://github.com/moltis-org/moltis/pull/1088)
    *   **核心进展**: 贡献者 `s-salamatov` 提交了针对 OpenAI Codex provider 的重要更新。该 PR 修复了在调用 Codex 模型时的工具调用参数解析逻辑。当没有发出参数增量时，它能够根据最终参数合成流式参数增量，并确保空的累积参数字符串能继续通过解码诊断。这一改动显著提升了 Moltis 作为 AI Agent 框架在处理 Codex 复杂工具调用时的稳定性和准确性。

## 4. 社区热点
今日社区无高频讨论的 Issues 或 PRs。唯一产生交互的动态是 PR #1088 的提交，目前暂无用户或维护者进行评论和点赞（👍: 0）。这表明该 PR 属于底层架构的先行优化，尚未引发大量终端用户的共鸣，但对开发者生态具有建设性意义。

## 5. Bug 与稳定性
*过去 24 小时内，项目未收到任何用户报告的 Bug、崩溃或回归问题。* 这通常意味着当前项目的最新版本（或主干分支）在常用场景下表现稳定。

## 6. 功能请求与路线图信号
今日无新增的功能请求。但从提交的 PR 中可以洞察到项目的**近期路线图信号**：
*   **深化 OpenAI 生态兼容**: PR #1088 暗示项目组正在致力于提升与 OpenAI 最新的 **Codex** 系列（通常与代码生成和复杂 Agent 工具链相关）的兼容性。预计在未来的版本中，Moltis 将提供更强大、更丝滑的 AI 自动编写代码及工具调用的原生支持。

## 7. 用户反馈摘要
由于今日没有新开 Issues 或相关评论，暂无法从 GitHub 动态中提炼具体的终端用户痛点或使用场景反馈。侧面反映出现有用户在基础功能使用上未遇到阻碍。

## 8. 待处理积压
*   **需要关注的新 PR**: 
    *   请求维护者重点关注今日新开的 [PR #1088](https://github.com/moltis-org/moltis/pull/1088)。由于该 PR 涉及底层大语言模型（Codex）的流式数据解析和诊断逻辑，建议尽早安排代码审查，以确保这一提升 Agent 执行稳定性的改进能够尽快合入主线。

---
*注：本报告基于 GitHub 公开数据自动分析生成。如有任何疑问或需进一步探讨特定 Issue/PR 的技术细节，请随时联系。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是为您生成的 2026-06-01 CoPaw (QwenPaw) 项目动态日报：

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-06-01)

## 1. 今日速览
CoPaw (QwenPaw) 项目在过去24小时内保持了**极高的社区活跃度**，单日新增/活跃 Issues 高达 14 条，显示社区用户正在深度测试并使用该智能体框架。当前项目的焦点高度集中在 **Windows 桌面端的系统级兼容性优化**以及**高并发/多工具场景下的资源调度与内存管理**。虽然今日无新版本发布且仅合并了1个前端优化 PR，但社区提出了多个具备架构级影响力的功能提案（如聊天并发控制、工具按需加载），为项目下一阶段的演进提供了明确的方向。

## 2. 版本发布
* **今日无新版本发布**。

## 3. 项目进展
今日共有 1 个 PR 被合并，1 个 Issue 闭环，整体进展侧重于控制台体验优化：
* **已合并 PR [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810)**: `feat(console): improve chat slash skill suggestions`。该 PR 优化了聊天输入框的斜杠命令（`/`）调用技能的提示体验，限制了下拉列表的可见数量并增加了滚动条，使多技能调用时的 UI 更加清爽紧凑。
* **已关闭 Issue [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)**: `[Bug] 定时任务与用户消息共享session导致任务被中断`。该高优先级 Bug 的修复标志着智能体在后台任务（Cron Job）与前台交互的会话隔离机制得到了完善。

## 4. 社区热点
今日讨论最活跃、受关注度最高的议题主要围绕**任务调度和 Windows 端体验**：
* **定时任务共享 Session 争议 ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653))**：以 8 条评论成为今日最热 Issue。用户在使用定时任务（如育儿提醒）时与正常消息发生冲突。这暴露了个人 AI 助手在“主动提醒”与“被动响应”并发时的状态管理难点。
* **幽灵任务无限执行问题 ([#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649))**：以 5 条评论紧随其后。当 `jobs.json` 更新时，旧任务未能从调度器 (APScheduler) 中清除，导致“僵尸任务”持续运行，消耗系统资源。
* **控制台闪窗问题 ([#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123))**：8 条评论。这是 Windows 端的长期痛点，每次执行 Shell 命令都会弹出黑色控制台窗口。

## 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度和影响面排序如下：

### 🔴 严重 / 核心逻辑与资源泄漏
* **Windows 端浏览器进程死锁 ([#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844))**: 浏览器调用结束后进程残留并锁定临时目录，导致级联故障（如无法备份）。
* **MCP Server 进程雪崩 ([#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842))**: 在配置 300+ 智能体时，MCP Server 进程数爆炸，直接导致系统资源耗尽。
* **v1.1.9 版本系统级降级故障 ([#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837))**: 升级后频繁触发硬编码的 Fallback 回复（“无法处理您的问题”），阻断正常对话。
* **配置文件单点故障 ([#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835))**: `jobs.json` 中只要有一个无效 Job（如缺少字段），整个工作空间直接崩溃无法启动。

### 🟡 中等 / 内存与交互体验
* **内存压缩代码报错 ([#4833](https://github.com/agentscope-ai/QwenPaw/issues/4833))**: `pre_reasoning hook` 阶段执行内存压缩失败。
* **服务重启进程堆积 ([#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834))**: 每次重启都会生成新的 MCP 进程而未清理旧的，导致控制台加载极慢。
* **Windows 闪窗复发 ([#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832))**: 明确指出缺少 `CREATE_NO_WINDOW` 标志，目前**尚无对应的 fix PR 被提出**。

## 6. 功能请求与路线图信号
今日出现了几个极具架构价值的高质量 Feature Request，可能深刻影响下个大版本的演进：
* **并发聊天模式提案 ([#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843))**: 提出引入 **Interrupt(打断)**、**Queue(排队)**、**Insert(插入)** 三种消息处理机制。这直指 [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 暴露的痛点，是完善 Agent 调度核心的必要路径。
* **工具定义按需加载 ([#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836))**: 提议将所有工具的 JSON Schema 从系统提示词中剥离，改为按需加载。在重度工具依赖场景下，可节省 55-65% 的初始 Token 消耗，极大优化延迟与成本。
* **UI 思考深度选择器 ([#4840](https://github.com/agentscope-ai/QwenPaw/issues/4840))**: 建议在聊天窗口 UI 增加“思考努力程度”下拉菜单，免去修改配置文件的麻烦。
* **静默工具执行 ([#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838))**: 允许在频道级别配置“静默”执行工具，只返回工具输出而不生成大模型的冗余总结文本。

## 7. 用户反馈摘要
从今日的 Issues 中可以清晰刻画出当前典型 CoPaw 用户的画像与痛点：
* **重度 Windows 桌面端依赖**：大量反馈集中在 Windows 系统（进程残留、黑框闪烁、升级残存目录 `~` 等），说明 Desktop App 是核心使用场景，但系统的底层兼容性（特别是子进程管理）亟待加强。
* **进阶高阶玩家涌现**：多位用户正在尝试配置**数十甚至上百个智能体**，或者配置**40+ 个工具集**。这表明项目正在从“极客尝鲜”向“生产力重型工作流”过渡，底层对并发、长上下文截断优化（如 Issue #4836）的诉求日益强烈。

## 8. 待处理积压
* **Windows 端执行命令闪窗的统一修复**: Issue [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4653)、[#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)、[#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) 本质上是同一个底层问题（缺少 `CREATE_NO_WINDOW` 标志），长期未被彻底修复，建议维护者优先排期并提交 PR。
* **待审核的 Provider 参数路由 PR ([#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689))**: 该 PR 解决了非标准大模型参数（如阿里云 DashScope 的 `enable_search`）被 OpenAI SDK 静默丢弃的问题，对于国内用户接入不同平台模型非常重要，目前已开启 5 天，需维护者介入 Review。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-01)

**分析仓库**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) 
**数据周期**: 2026-05-31 20:00 UTC - 2026-06-01 20:00 UTC

---

### 1. 今日速览
ZeptoClaw 项目在过去 24 小时内整体活跃度呈现出“低交互、高执行”的特点。尽管未产生任何用户侧的 Pull Request (PR) 或新开 Issue，且无新版本发布，但项目核心维护动作仍在稳步推进。今日最大的亮点是安全审计流程的自动化落地：一个关于 Webhook 身份路由安全扫描的 Issue 在创建当日即被顺利执行并关闭。整体而言，项目当前处于功能迭代放缓、重心转向底层安全与代码质量维护的平稳期。

### 2. 版本发布
今日无新版本发布。

### 3. 项目进展
今日虽无 PR 合并记录，但在 Issues 看板的推进上取得了具体的维护进展：
*   **安全扫描流程闭环**：Issue [#609](https://github.com/qhkm/zeptoclaw/issues/609) 于今日成功关闭。这标志着项目全局的 Codex Security 自动化扫描已顺利执行完毕，特别是针对 Webhook 请求在准入 和路由阶段的身份流验证已完成合规检查。这为项目未来的安全通信和 API 稳定性打下了坚实基础。

### 4. 社区热点
今日项目唯一的讨论和活动集中在安全审计领域：
*   **核心动态**：[#609 chore(security): repository-wide Codex Security scan for webhook identity routing](https://github.com/qhkm/zeptoclaw/issues/609) 
*   **背后诉求**：该 Issue 由核心贡献者 `daneschneider-oai` 通过自动化工作流触发（附带了 1 条评论互动）。这反映出项目团队对 ZeptoClaw 在处理外部 Webhook 触发时的身份鉴权机制高度重视。确保 Routing 层的安全无漏洞，是目前项目保障企业级或个人助手数据安全的首要任务。

### 5. Bug 与稳定性
过去 24 小时内，社区及自动化系统均未报告任何新的 Bug、崩溃或回归问题。当前项目主干分支处于稳定状态。

### 6. 功能请求与路线图信号
今日未收到任何新增的功能请求。但从今日关闭的安全扫描 Issue 可以推测出项目的**隐性路线图信号**：ZeptoClaw 正在强化其作为“个人 AI 助手/智能体”的底层基础设施。接下来的版本迭代中，我们可能会看到针对 Webhook 身份验证机制的更严格约束，甚至可能引入相关的破坏性变更以提升安全标准。

### 7. 用户反馈摘要
由于今日缺乏常规的功能开发 PR 或外部用户提交的日常 Issue，目前暂无直接的用户使用反馈。项目今日的活动完全由内部自动化安全工作流驱动，侧面说明项目近期运行平稳，未见大规模的用户阻碍性痛点爆发。

### 8. 待处理积压
今日无长期未响应的陈旧 Issue 或 PR 被重新唤醒。
*   **分析师建议**：鉴于今日项目在“隐形基础设施（安全扫描）”上的成功推进，建议维护者在近几日适时发布一次 Patch 版本（如无破坏性变更），或在 Discussion 板板同步近期的安全审查结果，以保持开源社区对项目健康度的感知与信心。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
ZeroClaw 项目在过去24小时内保持了**极高的社区活跃度与开发热度**。系统共处理了 50 条 Issue 更新（其中新开/活跃 34 条，关闭 16 条）以及 50 条 PR 更新（待合并 41 条，合并/关闭 9 条）。尽管今日没有发布新的稳定版本，但围绕 `v0.8.0-beta-2` 的集成测试（如 TUI、RPC 架构）和各个渠道的重构正在密集进行。总体来看，项目正处于功能大迭代阶段，重点聚焦于多租户安全、调度器底层架构优化以及硬件 IoT 场景的扩展。

## 2. 版本发布
*今日无新版本发布。* 但根据社区核心 PR 动态，项目正在紧锣密鼓地推进 `v0.8.0-beta-2` 的预发布准备工作。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，同时有大量核心 PR 进入待合并状态，主要进展如下：
*   **架构拆分与清理**：PR [#7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) 提取了 `channels-all` 聚合特性，优化了 Cargo 编译结构（该 PR 已关闭/合并），这将极大改善后续的编译速度与模块解耦。
*   **Provider 兼容性修复**：PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) 修复了 Kimi K2.6 模型因默认发送 `temperature: 0.7` 导致的 400 错误，提升了兼容性。
*   **硬件与 IoT 场景落地**：针对 ESP32 智能房间演示，一次性涌入了 [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045)（外设工具注册）、[#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046)（模拟器特性）和 [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047)（硬件能力修复）等多个 PR，标志着 ZeroClaw 在 AI Agent 控制物理硬件方面迈出实质性一步。
*   **通讯渠道增强**：核心开发者正在重构语音和文本的路由模型，如支持 OGG/Opus 编解码的 [#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050)，以及多租户路由重构的 Linq 渠道 feat [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041)。

## 4. 社区热点
今日社区讨论最热烈的问题反映了项目在企业级应用和底层架构上的痛点：
*   **Provider 架构重构呼声**：Issue [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)（9条评论）指出当前 `providers` 模块存在严重的代码重复和 `reqwest` 客户端管理碎片化问题，呼唤统一的架构重构。
*   **Cron 调度器底层逻辑缺陷**：RFC [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)（3条评论）指出当前的定时任务绕过了核心的消息管道和上下文管理，导致了一系列级联 Bug。社区倾向于将其彻底重构入编排器。
*   **企业级多租户与输出路由**：Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（8条评论，基于 RBAC）与 RFC [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)（3条评论，统一输出路由）引发了关于“如何让单一 Agent 实例根据不同用户权限路由回复”的深入讨论，这是 ToB 市场的核心刚需。

## 5. Bug 与稳定性
今日报告了多个高/中危 Bug，部分已验证并提交修复 PR：

*   **[S1 阻塞] web_fetch SSRF 保护失效**：Issue [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) 指出当域名解析为内网 IP 时，`allowed_private_hosts` 白名单失效，存在较高安全风险（**暂无关联 Fix PR**）。
*   **[S1 阻塞] 工具调用执行缺陷**：Issue [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) 暴露了 `allowed_tools` 字段仅在工具列举阶段生效，但在实际执行阶段未校验，导致可能越权执行（**暂无关联 Fix PR**）。
*   **[S1 阻塞] MCP 工具权限绕过**：Issue [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) 表明 `risk_profile` 无法限制 MCP 工具的调用，文档与实际行为存在割裂。
*   **[S1 阻塞] Kimi K2.6 兼容性**：Issue [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) 反馈 kimi-k2.6 因 `temperature` 参数报错退课。**已提 Fix PR**：[#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049)。
*   **[S1 阻塞] Telegram Bot 忽略回复**：Issue [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) 导致在开启 `mention_only` 时，直接回复机器人消息被忽略（**暂无关联 Fix PR**）。

## 6. 功能请求与路线图信号
通过近期打上 `type:rfc` 和 `accepted` 标签的 Issue，可以清晰看到 `v0.8.x` 甚至 `v0.9.0` 的路线图信号：
*   **桌面接管能力**：RFC [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 提议引入类似 OpenAI Codex 的 `computer-use` 能力（截屏与鼠标键盘控制），已被接受（`accepted`）。
*   **记忆层解耦**：RFC [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) 提议引入 `MemoryStrategy` trait，将高层记忆策略与底层存储解耦，将大幅增强 Agent 的长程记忆灵活性。
*   **Skill 生态安全隔离**：RFC [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) 提出在执行特定 Skill 时动态提权/激活受限工具，这是完善插件生态闭环的关键一步。
*   **邮件系统大升级**：PR [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) 为 Email 渠道引入了 XOAUTH2 和只读 IMAP 工具支持，弥补了现代邮件客户端集成的短板。

## 7. 用户反馈摘要
从真实用户的 Issue 描述中，提炼出以下几个典型体验反馈：
*   **新用户上手困惑**：Issue [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)（已关闭）表明，用户对于通过环境变量和配置文件配置 Web Dashboard 感到困惑，官方文档存在缺失，证明了目前的 onboarding 流程对新手仍有一定门槛。
*   **架构迁移的阵痛**：Issue [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) 中，一位从 Letta 迁移过来的高级用户抱怨 ZeroClaw 丢失了细粒度的输出控制（如：定时发送、强制语音回复），这反映出 ZeroClaw 在路由控制的灵活性上仍有追赶空间。
*   **ARM64 用户体验受损**：Issue [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) 指出树莓派设备上 `update` 命令下载了错误架构的二进制文件，说明 CI/CD 在多架构发布流程上存在纰漏。

## 8. 待处理积压
以下重要高优先级 Issue 长期未有实质性进展或卡在审核阶段，需要维护者关注：
*   **代码回滚恢复停滞**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪 3 月份丢失的 153 个提交，目前状态为 `in-progress`，但恢复进度可能比较复杂且缓慢。
*   **核心 Provider 原生方法失效**：Issue [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) 反映 Gemini CLI OAuth 根本无法工作，该 `P1` 级别 Bug 已开启超过两个月仍未解决。
*   **Ollama 工具调用受阻**：Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) 导致使用 Ollama 本地模型时无法正常调用工具，状态为 `in-progress`。
*   **庞大 PR 审核受阻**：PR [#6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148)（ESP32 智能房间 Demo）体量过大，已被要求按单一职责拆分（目前已开始拆分为 7045-7048），原作者需尽快完成清理以便合并。同样，全量重构 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (zerocode TUI) 也需要维护者进行首轮整体评审。

</details>