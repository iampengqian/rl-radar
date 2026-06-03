# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-03 22:40 UTC

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

# 📊 OpenClaw 项目动态日报 (2026-06-04)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

OpenClaw 在过去 24 小时内保持了**极高的社区活跃度与开发迭代速度**。项目共产生了 500 条 Issue 动态（其中 358 条新开/活跃，142 条已关闭）以及 500 条 PR 动态（388 条待合并，112 条已合并/关闭）。今天项目正式发布了 **v2026.6.1** 稳定版及对应的 Beta 版，重点修复了多通道消息传递的稳定性问题。从积压的 388 条待合并 PR 来看，项目正处于**功能大重构与深度修复并行的密集开发期**，特别是 SQLite 迁移、会话状态管理及 MCP 工具链相关的基础设施升级正在全面推进。

---

## 2. 版本发布

今天项目迎来了重要的 6 月度版本更新，一次性发布了稳定版和 Beta 版，两者的核心亮点高度一致，主要聚焦于**运行时容错恢复与多平台通道稳定性**：

### 🚀 [v2026.6.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1)
**更新亮点：**
- **Agent 与 CLI 运行时恢复机制增强**：针对中断的工具调用、过期会话绑定、压缩移交以及媒体交付重试，Agent 现在能够更加优雅地进行状态恢复和自愈，降低了长时间运行会话的崩溃率。
- **跨平台通道消息投递更稳定**：针对 Telegram、WhatsApp、iMessage 和 Slack 的消息通道进行了底层稳定性优化。

### 🧪 [v2026.6.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.3)
- 包含与稳定版相同的修复内容，作为发布前的最终验证版本。

> **⚠️ 迁移注意事项**：结合今日活跃的 PR #89102（Auth profiles SQLite 迁移）和 #90035（修复 Node 23 兼容性），建议升级前确认当前 Node.js 版本，若使用 Node 23.0-23.10，需关注升级后的 `openclaw doctor` 崩溃风险。

---

## 3. 项目进展

今日共有 112 个 PR 被合并或关闭，项目在**多通道集成、会话状态恢复、基础设施重构**上取得了实质性进展：

- **核心状态管理修复**：PR[#88964](https://github.com/openclaw/openclaw/pull/88964) 修复了上下文引擎 tool-result 配对错误，避免了 free-floating toolResult 导致的序列化失败。
- **子代理通信完善**：PR[#89939](https://github.com/openclaw/openclaw/pull/89939) 修复了 ACP 子代理 `streamTo="parent"` 时的消息投递丢失问题，保持了实时 UX 增强。
- **执行安全分类细化**：PR[#89548](https://github.com/openclaw/openclaw/pull/89548) 对 `exec`/`bash` 命令的只读/变异操作进行了精细化分类，只读命令不再触发不必要的变更审批。
- **基础设施升级**：PR[#90035](https://github.com/openclaw/openclaw/pull/90035) 修复了 v2026.6.1 引入的 Node 23.0-23.10 兼容性回归，解决了 `StatementSync.columns()` 缺失导致的崩溃。
- **认证体系重构推进**：PR[#89102](https://github.com/openclaw/openclaw/pull/89102) 正在进行 Auth profiles 向 SQLite 的大规模迁移，旨在消除 JSON 状态文件带来的并发和一致性问题。

---

## 4. 社区热点

今日讨论最密集的议题集中在**会话状态持久化、内存/上下文膨胀、以及消息防丢**三大痛点：

### 🔥 最受关注 Issues
1. **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)** (👍1, 💬17) — **SQLite 会话迁移策略**：维护者发起的轨道议题，计划通过抽象分支 seams 将核心会话转录以小步 PR 拆分迁移，避免一次性高风险重写。这直接影响了项目的底层架构走向。
2. **[Issue #65161](https://github.com/openclaw/openclaw/issues/65161)** (👍1, 💬14) — **心跳隔离模式多重故障**：用户报告心跳调度停滞、事件误标、上下文未释放等复合问题，属于长时间未解决的深层状态管理缺陷。
3. **[Issue #67035](https://github.com/openclaw/openclaw/issues/67035)** (💬14, 已关闭) — **Windows Chat UI 严重退化**：输入框吞字、流式回复不可见，影响了 Windows 平台的基础使用体验。
4. **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312)** (👍2, 💬12) — **Codex 轮次完成停滞回归**：特定版本多工具 Agent 轮次可靠失败，是关键的业务阻塞型回归。

### 🌟 最受关注 PRs
1. **[PR #88968](https://github.com/openclaw/openclaw/pull/88968)** — 防止内存刷入失败中断用户回复，直接关系到消息可靠性。
2. **[PR #90003](https://github.com/openclaw/openclaw/pull/90003)** — 引入 `exec-approvals.json` 策略工件，扩展安全边界管控能力。

---

## 5. Bug 与稳定性

今日报告/活跃的 Bug 集中在**会话生命周期管理、多平台通道集成、以及认证凭证流转**三大高危区域：

### 🔴 P1 级严重问题（核心功能受损/回归）
| 问题 | 状态 | 现有修复 PR | 影响面 |
|------|------|------------|--------|
| [Codex 轮次完成停滞回归](https://github.com/openclaw/openclaw/issues/88312) | OPEN | 暂无 | ChatGPT Plus 多工具调用完全中断 |
| [Codex 客户端大型 SQLite 日志中断请求](https://github.com/openclaw/openclaw/issues/86214) | OPEN | 暂无 | 图片/工具请求中途断连 |
| [Mattermost 斜杠命令 503 错误](https://github.com/openclaw/openclaw/issues/68113) | OPEN | 暂无 | 整个平台命令不可用 |
| [会话转录死循环导致 OOM](https://github.com/openclaw/openclaw/issues/63998) | OPEN | 暂无 | 网关内存溢出崩溃 |
| [MCP 工具未注入子代理](https://github.com/openclaw/openclaw/issues/85030) | OPEN | [PR#90041](https://github.com/openclaw/openclaw/pull/90041) 相关 | 子代理无法使用外部工具 |
| [MiniMax OAuth 无法自动刷新](https://github.com/openclaw/openclaw/issues/77467) | OPEN | 暂无 | 每 2 小时需手动重新认证 |

### 🟡 P2 级中等问题
- [内存梦境阶段未提炼直接写入 MEMORY.md](https://github.com/openclaw/openclaw/issues/67363) (OPEN) — 导致原始日志碎片污染长期记忆。
- [WebChat 不渲染部分助手消息](https://github.com/openclaw/openclaw/issues/77136) (OPEN) — TUI 正常但 Web 端丢失。
- [飞书群聊提及报错](https://github.com/openclaw/openclaw/issues/64783) (OPEN) — ReferenceError 阻止机器人响应。

---

## 6. 功能请求与路线图信号

今日社区提出了多个具有战略价值的功能需求，部分已有配套 PR 推进：

### 📋 高信号功能请求
1. **[外部安全/护栏标准接口](https://github.com/openclaw/openclaw/issues/72741)** — 为 Agent 操作添加标准化安全检查接口，统一第三方安全系统集成。这与 [PR#90003](https://github.com/openclaw/openclaw/pull/90003) 的 `exec-approvals` 策略框架方向一致，**极有可能在下一迭代被纳入**。
2. **[多索引嵌入记忆 + 模型感知故障转移](https://github.com/openclaw/openclaw/issues/63990)** — 解决单嵌入模型记忆无故障转移的问题，属于生产环境关键需求。
3. **[Anthropic advisor 工具支持](https://github.com/openclaw/openclaw/issues/63930)** — 接入 Anthropic 新推出的服务端 beta 工具。
4. **[远程 Reranker 端点支持](https://github.com/openclaw/openclaw/issues/64438)** — 扩展记忆检索能力。
5. **[Discord 语音通道桥接文本会话](https://github.com/openclaw/openclaw/issues/73699)** (已关闭) — 将语音 I/O 直接桥接到现有文本 Agent 会话。

### 🗺️ 路线图信号判断
结合维护者议题 [#88838](https://github.com/openclaw/openclaw/issues/88838) 和今日密集的 SQLite 迁移 PR，**v2026.7.x 的核心方向将是以 SQLite 为底座的全状态重构**，重点解决长期困扰的会话状态一致性和大上下文管理问题。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼出的核心用户反馈：

### 😣 主要痛点
- **消息丢失恐惧症**：多个用户反复提及"回复消失"问题（[#67035](https://github.com/openclaw/openclaw/issues/67035), [#77136](https://github.com/openclaw/openclaw/issues/77136), [#64810](https://github.com/openclaw/openclaw/issues/64810)），即使底层数据存在，Web 端不可见也让用户缺乏信任感。
- **Token 消耗焦虑**：[#67419](https://github.com/openclaw/openclaw/issues/67419) 指出 Bootstrap 文件每轮重注导致 20-30% Token 浪费，对于成本敏感用户是硬伤。
- **多平台体验不一致**：WebChat、Telegram、Discord 功能表现差异大（[#67735](https://github.com/openclaw/openclaw/issues/67735)），用户期望跨平台行为一致。
- **升级即损坏**：[#68113](https://github.com/openclaw/openclaw/issues/68113)、[#88312](https://github.com/openclaw/openclaw/issues/88312) 等回归问题让用户对升级产生恐惧，有用户明确表示"不敢更新"。

### 😊 正面反馈
- 用户对 v2026.6.1 发布的多通道恢复能力表示期待。
- [PR#89548](https://github.com/openclaw/openclaw/pull/89548) 细化命令分类后，CLI 用户反馈工作流更流畅。

### 🎯 典型使用场景
- 企业内部通过 Mattermost/Discord 部署多 Agent 协作
- 长时间运行的个人 AI 助手（跨 Telegram/WhatsApp）
- 基于 Codex 的自动化代码审查工作流

---

## 8. 待处理积压

以下高优先级 Issue 长期处于待处理状态，需维护团队重点关注：

### 🚨 需立即关注的积压

| 优先级 | Issue | 积压时长 | 核心风险 |
|--------|-------|---------|---------|
| P1 | [#65161 心跳隔离模式复合故障](https://github.com/openclaw/openclaw/issues/65161) | ~53 天 | 长会话 Agent 健康检查完全失效 |
| P1 | [#63216 硬重置循环](https://github.com/openclaw/openclaw/issues/63216) | ~57 天 | 特定会话 Key 无法恢复 |
| P1 | [#63998 会话转录 OOM 死循环](https://github.com/openclaw/openclaw/issues/63998) | ~55 天 | 网关级别崩溃 |
| P1 | [#68691 Sandbox 僵尸进程堆积](https://github.com/openclaw/openclaw/issues/68691) | ~47 天 | 生产环境 PIDs 耗尽风险 |
| P1 | [#68751 会话记忆导致自主重执行](https://github.com/openclaw/openclaw/issues/68751) | ~46 天 | **安全隐患**：旧命令自动重新执行 |
| Security | [#65624 Mattermost 明文回调暴露 Token](https://github.com/openclaw/openclaw/issues/65624) | ~52 天 | CVSS 7.6+ 安全漏洞 |
| P2 | [#64500 熔断器不阻止 Ping-Pong 循环](https://github.com/openclaw/openclaw/issues/64500) | ~55 天 | Token 快速耗尽 |

### 💡 建议
1. **安全优先**：[#65624](https://github.com/openclaw/openclaw/issues/65624) 的明文 Token 暴露问题已积压 52 天，CVSS 评分 High，建议立即排期修复。
2. **状态管理专项**：多个 P1 积压都指向同一根源——会话生命周期管理，建议与 SQLite 迁移计划 ([#88838](https://github.com/openclaw/openclaw/issues/88838)) 统筹解决。
3. **僵尸进程清理**：[#68691](https://github.com/openclaw/openclaw/issues/68691) 是生产环境定时炸弹，Sandbox 隔离层需要主动 reap 机制。

---

*本报告由 AI 自动生成，数据截止至 2026-06-04 00:00 UTC。如有疑问或建议，请在 [openclaw/openclaw](https://github.com/openclaw/openclaw) 提交 Issue。*

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 6 月 4 日的社区动态数据，为您输出以下横向对比与深度分析报告：

# 📊 2026-06-04 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多智能体协同与深度工具链集成”跨越的密集重构期**。项目普遍面临由长上下文记忆膨胀、复杂 MCP 工具调用激增引发的状态管理和算力消耗瓶颈。底层架构正在加速演进，以 SQLite 为代表的轻量级本地数据库正逐步替代 JSON 文件，成为解决状态持久化和并发一致性的行业基座。此外，跨平台网关集成与严格的安全隔离机制已不再是可选项，而是项目迈向企业级生产环境的必考题。

## 2. 各项目活跃度对比
*(按 Issue/PR 绝对活跃度降序排列)*

| 项目名称 | Issue 动态 (新开+活跃/关闭) | PR 动态 (待合并/已合并) | Release 情况 | 核心聚焦 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (358 / 142) | 500 (388 / 112) | **v2026.6.1** 稳定版 | 全面重构 (SQLite迁移、多通道恢复) | 🟡 高压开发期 (PR积压严重，需防患重度摩擦) |
| **Hermes Agent**| 50 (45 / 5) | 50 (44 / 6) | 无 | 桌面端UI、网关路由、视觉回退 | 🟠 阻塞期 (新Bug集中爆发，合并率极低) |
| **IronClaw** | 19 (13 / 6) | 50 (25 / 25) | **v0.29.1** | Reborn架构重构、Slack集成 | 🟢 极佳 (核心架构稳步落地，PR吞吐健康) |
| **CoPaw** | 48 (活跃) | 50 (29 / 21) | 无 (备战 v1.1.11) | 记忆系统、Tauri桌面端、协议扩展 | 🟢 良好 (响应迅速，底层打磨期) |
| **ZeroClaw** | 50 (24 / 26) | 50 (41 / 9) | 无 (备战 v0.8.0) | 安全沙箱、可插拔鉴权、配置重构 | 🟡 审查积压 (关闭率高，但待合并负载重) |
| **NanoBot** | 32 (26 / 6) | 30 (14 / 16) | 无 | 多智能体编排、事件总线重构 | 🟢 良好 (架构解耦平稳推进) |
| **Moltis** | 14 (5 / 9) | 3 (3 / 0) | **双版本连发** | 容器化部署、UI精细化、文档集成 | 🟢 优秀 (高频发布，Bug闭环极快) |
| **LobsterAI** | 活跃 (关闭多) | 16 (2 / 14) | **2026.6.3** | Cowork(多角色协同)、MCP健壮性 | 🟢 优秀 (协同工作流快速演进) |
| **PicoClaw** | 3 | 7 (4 / 3) | **Nightly** (v0.2.9) | 底层安全、流式HTTP支持 | 🟢 稳健 (轻量迭代，按部就班) |
| **NanoClaw** | 1 | 9 (9 / 0) | 无 | 调度模块、混合检索(RAG) | 🔴 停滞 (维护者缺位，PR全部积压) |
| **NullClaw** | 0 | 1 (1 / 0) | 无 | MCP动态路由过滤、Token优化 | 🟢 平静 (低频高质，底层机制优化) |
| *(其他)* | 无活动 | 无活动 | 无 | - | - |

## 3. OpenClaw 在生态中的定位
*   **生态角色：** 绝对的**核心参照系与流量入口**。其今日单日 1000+ 的 Issue/PR 交互量远超其他项目总和，具有压倒性的社区规模。
*   **优势对比：** 跨平台通道支持最深（TG/WhatsApp/iMessage/Slack等全线接入），生态插件（MCP工具链）最丰富。
*   **技术路线差异：** 相比于 NanoBot 早期追求的“极简代码架构”或 NullClaw 的“底层机制实验”，OpenClaw 采取的是**大而全的重工业化路线**，但也因此背负了沉重的历史包袱。
*   **当前痛点：** 正在经历“补课期”。其高达 388 个的待合并 PR 积压反映出项目正试图通过暴力重构（如全面转向 SQLite）来解决长期存在的状态一致性和 OOM 问题，但社区出现了“升级即损坏”的信任摩擦。

## 4. 共同关注的技术方向 (行业共鸣点)
从多项目动态中，可以提炼出当前 AI Agent 底层基础设施的 4 大共性痛点与需求：
1.  **状态持久化的全面 SQLite 化**：**OpenClaw, NanoBot, CoPaw** 均在处理长期会话状态、认证凭证或记忆文件的并发丢失问题。JSON 文件读写已见顶，向 SQLite 迁移是共识。
2.  **Token 消耗优化与上下文剪枝**：**OpenClaw, NullClaw, Hermes, CoPaw** 均遭遇了上下文膨胀导致的 OOM 或成本灾难。NullClaw 提出 `tool_filter_groups` 动态过滤工具提示词，Moltis 提出截断工具结果，**“精细化上下文管理”成为刚需**。
3.  **MCP (模型上下文协议) 的生产级加固**：**LobsterAI, ZeroClaw, Moltis, PicoClaw** 均在修复 MCP 连接超时、环境变量丢失、动态 Header 注入等边界问题。MCP 已成为外部工具调用的标准，但其健壮性仍需大量补丁。
4.  **安全沙箱与权限隔离机制**：**ZeroClaw, IronClaw, NanoBot** 社区都在呼吁更细粒度的安全策略。ZeroClaw 引入可插拔安全 Provider，NanoBot 修补文件系统越权访问，**防止 AI 执行危险命令（如 rm -rf）已成为项目上生产的红线**。

## 5. 差异化定位分析
*   **“企业级协同工作台” vs “个人极客助手”**：
    *   **LobsterAI** 和 **IronClaw** 明显偏向企业级工作流，重点发力多角色协同、会话分叉以及深度集成企业通讯软件。
    *   **Moltis** 和 **PicoClaw** 则更侧重于 Docker 容器化部署和轻量级网关，适合极客单机或小型私有化部署。
*   **架构演进阶段**：
    *   **Hermes Agent** 和 **ZeroClaw** 处于底层安全与网关路由的“深水区”重构，正在构建复杂的多对多fallback机制和沙箱。
    *   **NanoBot** 还在补齐基础的多智能体编排能力（Supervisor模式）。

## 6. 社区热度与成熟度
*   **快速扩张的“高压区”**：以 **OpenClaw** 为代表，功能极度丰富但处于新旧架构交替的阵痛期，Issue 和 PR 泛滥，维护者面临巨大的 Review 压力。
*   **高质量迭代的“成熟区”**：**IronClaw, Moltis, LobsterAI** 表现出极高的成熟度。特点是：PR 粒度适中，Issue 关闭率极高，版本发布节奏稳定且不引入破坏性变更。
*   **亟待社区运营的“停滞区”**：**NanoClaw** 暴露出典型的开源项目“维护者单点故障”风险，核心架构修改被搁置 10 天以上，挫伤贡献者积极性。

## 7. 值得关注的趋势信号
1.  **本地小模型与 Agent 框架的深度适配拉开帷幕**：Moltis 针对 Gemma 4 优化空参数兼容性，ZeroClaw 适配 DeepSeek 的 `reasoning_content` 压缩。这暗示开发者不再满足于只接 OpenAI API，**“本地开源大模型 + 私有 Agent 框架”** 正在成为极具商业潜力的落地范式。
2.  **可插拔的安全护栏成为下一个发力点**：单纯依赖大模型“自觉”或简单的正则拦截已不够。OpenClaw 的 `exec-approvals` 和 ZeroClaw 的可插拔执行层预示着，**Agent 框架将标配类似“WAF（Web应用防火墙）”级别的网关安全拦截机制**。
3.  **多端状态实时同步成为体验分水岭**：用户对 Telegram 聊天后 Desktop 客户端未同步的容忍度正在降至冰点（Hermes 暴露此问题）。未来的个人 AI 助理必须具备类似 IM 软件般的**多端状态最终一致性**能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-04)

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

## 1. 今日速览
NanoBot 项目在过去 24 小时内保持**高活跃度**。社区互动方面，共有 **32 条 Issue 更新**（新开/活跃 26 条，关闭 6 条）和 **30 条 PR 更新**（待合并 14 条，已合并/关闭 16 条）。虽然今日无新版本发布，但核心开发团队仍在密集处理内部架构重构、多智能体协作和系统稳定性问题。大量新开的 Issue 表明社区对多智能体编排、安全性和新渠道接入的需求正在激增。

## 2. 版本发布
今日**无新版本发布**。

## 3. 项目进展
今日共有 **16 个 PR 被合并或关闭**，项目在底层架构、稳定性和 WebUI 体验上取得了显著进展：
*   **架构与生命周期重构**: 
    *   PR [#4135](https://github.com/HKUDS/nanobot/pull/4135) 将 WebUI 运行时状态重构至 Event Bus（事件总线），大幅提升了状态管理解耦能力。
    *   PR [#4176](https://github.com/HKUDS/nanobot/pull/4176)（待合并）引入了 Run-level 的 Agent Hook 生命周期管理，为后续监控和拦截 Agent 运行提供了标准接口。
*   **核心 Bug 修复**: 
    *   PR [#3932](https://github.com/HKUDS/nanobot/pull/3932) 修复了流模式下 OpenAI 兼容 Provider 产生重复 `tool_call_id` 导致 API 报错的严重问题。
    *   PR [#3999](https://github.com/HKUDS/nanobot/pull/3999) 修复了执行长期任务（sustained goal）时，Agent 提前异常退出的阻断性 Bug。
*   **记忆与认知系统优化**: 
    *   PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) 用简单的 cron + `process_direct` 替换了旧的双阶段 Dream 类。
    *   PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) 优化了长期记忆提示词，解决了 `MEMORY.md` 信息冗余膨胀的问题。

## 4. 社区热点
今日最受关注和讨论的议题集中在**多智能体架构**、**安全性**和**长期记忆**：
*   **多智能体编排诉求强烈**: 
    *   Issue [#222](https://github.com/HKUDS/nanobot/issues/222)（评论 10，👍 7）和 Issue [#4179](https://github.com/HKUDS/nanobot/issues/4179) 持续引发热议，用户强烈希望原生支持 Multi-Agent 设置（如 Supervisor 模式）。
    *   对应的 PR 动态：PR [#3461](https://github.com/HKUDS/nanobot/pull/3461) 已合并基于文件系统的多智能体邮箱通道插件；PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) 正在推进跨实例消息总线功能。
*   **安全性隐患引发担忧**: 
    *   Issue [#979](https://github.com/HKUDS/nanobot/issues/979)（评论 5）开发者反馈无法有效阻止 AI 执行 `rm -rf` 等破坏性指令。
    *   Issue [#143](https://github.com/HKUDS/nanobot/issues/143)（评论 2，👍 4）指出文件系统工具未强制执行工作区限制，存在越权访问宿主机的风险。
*   **长期任务执行可靠性**:
    *   Issue [#1022](https://github.com/HKUDS/nanobot/issues/1022)（评论 4，👍 3）反馈 Agent 在处理耗时较长的复杂任务时经常卡死或无响应。

## 5. Bug 与稳定性
根据今日 Issue 与 PR 动态，整理当前系统的稳定性威胁如下：
*   **高危（阻断性功能失效）**:
    *   **长时间任务卡死**: 复杂的长链条任务触发后，Agent 假死不执行（[Issue #1022](https://github.com/HKUDS/nanobot/issues/1022)）。目前核心逻辑已通过 [PR #3999](https://github.com/HKUDS/nanobot/pull/3999) 修复合并。
*   **中高危（安全与边界）**:
    *   **沙箱隔离失效**: 文件系统工具可绕过 `restrict_to_workspace` 限制读取宿主机文件（[Issue #143](https://github.com/HKUDS/nanobot/issues/143)）。
    *   **MCP Server 连接超时**: 远程 MCP 的 HTTP/SSE 连接经常超时并引发 `asyncio.CancelledError`（[Issue #935](https://github.com/HKUDS/nanobot/issues/935)）。[PR #4123](https://github.com/HKUDS/nanobot/pull/4123) 已提交修复，增加了不安全 URL 的过滤。
*   **低危（UI与体验）**:
    *   **流式输出内层泄漏**: 进度流式传输时，将内部的 `exec()` 等工具调用暴露给了用户（[Issue #954](https://github.com/HKUDS/nanobot/issues/954)）。
    *   **WebUI 启动挂起**: WebUI 初始化拉取数据无超时限制，可能导致页面永久加载（[PR #4157](https://github.com/HKUDS/nanobot/pull/4157) 已修复）。

## 6. 功能请求与路线图信号
通过梳理近期的 Feature Requests 和活跃 PR，项目近期的路线图重点已非常清晰：
1.  **多智能体协作矩阵（核心演进方向）**: 
    社区正在从“单打独斗”向“Agent 团队”演进。Issue [#1006](https://github.com/HKUDS/nanobot/issues/1006) 提出需要控制平面（list/kill）来管理子代理；Issue [#936](https://github.com/HKUDS/nanobot/issues/936) 呼吁提供多租户网关以降低多实例资源消耗。
2.  **记忆系统轻量化与技能化**: 
    Issue [#80](https://github.com/HKUDS/nanobot/issues/80) 建议引入 BM25/TF-IDF 检索以替代全量上下文注入来降低 Token 消耗；Issue [#135](https://github.com/HKUDS/nanobot/issues/135) 寻求跨会话的持久化长期记忆。未来版本极有可能集成 Vector DB 或轻量级检索算法。
3.  **企业级渠道与身份集成**: 
    *   接入需求：支持 Mattermost（[#1011](https://github.com/HKUDS/nanobot/issues/1011)）、微信（[#192](https://github.com/HKUDS/nanobot/issues/192)）、SimpleX（[#240](https://github.com/HKUDS/nanobot/issues/240)）。
    *   认证演进：[PR #4126](https://github.com/HKUDS/nanobot/pull/4126) 和 [PR #3221](https://github.com/HKUDS/nanobot/pull/3221) 正在推进对 Azure AAD 认证的原生支持和 OAuth 设备流授权，为企业级部署铺路。

## 7. 用户反馈摘要
*   **痛点 1：Token 消耗过大与幻觉**: 用户反馈在处理复杂任务时，Agent 容易产生工具调用幻觉（[Issue #937](https://github.com/HKUDS/nanobot/issues/937)），同时全量记忆注入导致 Token 开销居高不下。
*   **痛点 2：本地化运行与隔离的矛盾**: 在 Docker/沙箱环境中运行时，AI 无法访问宿主机的媒体文件和本地工作区，导致 Whisper 本地转录等技能失效（[Issue #940](https://github.com/HKUDS/nanobot/issues/940)）。
*   **正面反馈**: 社区高度赞扬了 NanoBot “4k 行代码实现复杂 Agent”的轻量化架构设计（[Issue #97](https://github.com/HKUDS/nanobot/issues/97)），认为其极具二次开发潜力，但同时也期望官方能提供更友好的新手入门文档（[PR #4177](https://github.com/HKUDS/nanobot/pull/4177)）。

## 8. 待处理积压
以下高价值/高关注度 Issue 处于长期未实质性解决的状态（标记为 Stale），建议核心团队重点关注：
*   **安全缺陷**: 文件系统越权访问问题（[Issue #143](https://github.com/HKUDS/nanobot/issues/143)），对生产环境构成潜在威胁。
*   **长期任务稳定性**: 执行耗时代理任务时卡死的问题（[Issue #1022](https://github.com/HKUDS/nanobot/issues/1022)），严重影响自动化体验。
*   **通信渠道异常**: WhatsApp 频道在 Linux 环境下 WebSocket 频繁断连的问题（[Issue #150](https://github.com/HKUDS/nanobot/issues/150)）一直未彻底解决。
*   **架构冗余**: Provider 逻辑冗余和代码检查不合规问题（[Issue #141](https://github.com/HKUDS/nanobot/issues/141)）待重构清理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-04)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，且重心明显向多平台网关兼容性与核心工具链的鲁棒性倾斜。过去24小时内，社区共产生了 **50 条 Issues 更新**（其中 45 条新开或活跃，5 条已关闭）以及 **50 条 PR 更新**（其中 6 条合并或关闭，44 条待合并）。尽管今日 **0 个新版本发布**，但大量针对网关、视觉路由、MCP 重连机制以及桌面端用户体验的 Bug 修复 PR 正在密集 review 中。当前 Issue 与 PR 的关闭/合并比例偏低，表明项目正处于新问题集中爆发与代码提交的“高压开发期”，维护者需注意积压处理。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，主要集中在前端体验优化和底层冗余逻辑的初步清理。项目整体在**桌面端交互**和**插件生命周期管理**上迈出了小步。重点推进如下：
* **桌面端主题与缩放控制添加** ([PR #38513](https://github.com/NousResearch/hermes-agent/pull/38513))：引入了 `Dark Glass` 和 `Veritas` 内置主题，并支持浏览器风格的快捷键缩放，大幅提升了桌面 UI 的定制能力。
* **Kanban 状态对齐与看板增强** ([Issue #37108](https://github.com/NousResearch/hermes-agent/issues/37108), [Issue #37109](https://github.com/NousResearch/hermes-agent/issues/37109) 已关闭)：后端规范化了看板的计划/审查状态列，并新增了执行者活跃面板，为复杂多任务调度提供了可视化支持。
* **远程后端状态提示修复** ([Issue #37869](https://github.com/NousResearch/hermes-agent/issues/37869) 已关闭)：修复了本地端口冲突清理后，桌面客户端依然错误报错“远程连接失败”的残留状态问题。

## 4. 社区热点
今日讨论热度最高的问题集中在**视觉工具链的不可用**以及**特定平台网关的严重阻塞 Bug**，反映出用户对多模态能力和跨平台部署的强烈诉求：
* **TUI + Byterover 内存导致网关崩溃** ([Issue #14036](https://github.com/NousResearch/hermes-agent/issues/14036) | 5 评论)：在 `--tui` 模式下配合 byterover 内存提供商时，Python 网关进程因 `SIGPIPE` 洪流中途静默退出（exit 0），导致会话彻底不可用。
* **Gemini 503 错误未触发视觉回退** ([Issue #25822](https://github.com/NousResearch/hermes-agent/issues/25822) | 4 评论)：当 Gemini 视觉接口返回 503 过载时，系统未按预期调用 `fallback_provider`，导致多模态请求直接失败。
* **Docker 中 Matrix 网关无法启动** ([Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) | 4 评论)：Docker 镜像未内置 `mautrix[encryption]` 依赖，且只读文件系统导致无法热安装，严重阻碍了 Matrix 协议的私有化部署。

## 5. Bug 与稳定性
今日报告了多个影响核心稳定性的严重 Bug (P1/P2)，部分已有对应的修复 PR 提交：

### 严重级别 (P1)
* **Windows 更新导致环境彻底损坏** ([Issue #37881](https://github.com/NousResearch/hermes-agent/issues/37881) | 2 👍)：`hermes update` 在 Windows 上重建 venv 失败，留下一个没有 `pyvenv.cfg` 的损坏环境，导致 CLI 彻底无法启动 (`ModuleNotFoundError`)。
  * *状态*：**已有修复 PR** ([PR #38511](https://github.com/NousResearch/hermes-agent/pull/38511))，计划引入 `uv venv --clear` 逻辑并增加重建验证。
* **Cron 调度器全局锁阻塞** ([PR #27492](https://github.com/NousResearch/hermes-agent/pull/27492))：由于 `tick()` 在任务执行期间未释放文件锁，导致长时间运行的代理任务会饿死后续所有的定时任务。

### 高级别 (P2)
* **视觉回退链 TypeError 静默失效** ([Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876) | 3 评论)：`_resolve_single_provider` 参数传递错误，导致在 Gemini 配额耗尽时，视觉工具的回退链完全瘫痪。
  * *状态*：**已有修复 PR** ([PR #38521](https://github.com/NousResearch/hermes-agent/pull/38521))。
* **MCP 服务器瞬断后永久死亡** ([Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488))：MCP 后端一旦遭遇超过 30 秒的瞬时断开，将永久被标记为死亡，必须重启网关。
  * *状态*：**已有修复 PR** ([PR #38509](https://github.com/NousResearch/hermes-agent/pull/38509))。
* **Orphaned TUI 进程榨干 CPU** ([Issue #38425](https://github.com/NousResearch/hermes-agent/issues/38425))：关闭应用后，Node.js TUI 进程变为孤儿进程并在用户态死循环，持续占用约 96% CPU。

## 6. 功能请求与路线图信号
今日的功能请求呈现出向**企业级集成**和**底层并发调度**演进的信号：
* **上下文预检** ([Issue #36053](https://github.com/NousResearch/hermes-agent/issues/36053))：提出强制 Agent 在采取行动前进行内部“反思与校验”，旨在减少幻觉和危险操作，这一设计可能成为后续 Agent Loop 的核心改进方向。
* **Linear AIG webhook 适配器** ([PR #38356](https://github.com/NousResearch/hermes-agent/pull/38356))：开始支持 Linear 的 Agent Interaction webhook，表明项目正在向项目管理 (Jira/Linear) 的深度集成扩展。
* **新增 Inception 与 Nebius 提供商** ([PR #38518](https://github.com/NousResearch/hermes-agent/pull/38518), [PR #38009](https://github.com/NousResearch/hermes-agent/pull/38009))：模型提供商插件化机制成熟，社区正快速泛化 Hermes 对非主流/特定区域推理后端的支持。

## 7. 用户反馈摘要
* **跨平台痛点 (Windows/Crostini)**：除了 Windows 更新必现的毁坏安装问题外，用户反馈 Windows 端 Docker 会话错误注入宿主机工作目录 ([Issue #38156](https://github.com/NousResearch/hermes-agent/issues/38156))，且 Chromebook Crostini 环境下日文输入法完全失效 ([Issue #38515](https://github.com/NousResearch/hermes-agent/issues/38515))，表明跨端适配仍需大量补课。
* **多端状态不同步**：用户抱怨通过 Telegram 与 Agent 聊天时，Desktop 客户端无法实时感知会话状态，必须手动刷新 ([Issue #38270](https://github.com/NousResearch/hermes-agent/issues/38270))；此外 `/update` 升级时网关断开重连导致丢失升级成功/失败的通知 ([Issue #38522 fix PR](https://github.com/NousResearch/hermes-agent/pull/38522))。
* **桌面端细节打磨不足**：截图粘贴会产生双重复件 ([Issue #38435](https://github.com/NousResearch/hermes-agent/issues/38435))；长 Cron 任务输入框撑满屏幕导致无法查看 Agent 回复 ([Issue #38452](https://github.com/NousResearch/hermes-agent/issues/38452))。

## 8. 待处理积压
以下高价值且长期未得到根本解决的 Issue 和 PR 需要维护团队重点关注，以防严重阻碍项目质量：
1. **双 fallback 系统割裂问题** ([Issue #24039](https://github.com/NousResearch/hermes-agent/issues/24039) | 2 👍, 3 评论)：目前 Hermes 存在两套独立的 fallback 机制且互不通信，导致路由逻辑混乱，强烈建议在下一版本重构统一。
2. **Auxiliary Vision 兼容性欠佳**：Gemini 2.5+ 模型在视觉处理白名单中被遗漏，强制走降级文本管道 ([Issue #30704](https://github.com/NousResearch/hermes-agent/issues/30704))，且 `computer_use` 驱动过于脆弱，极易导致路由中断 ([Issue #32766](https://github.com/NousResearch/hermes-agent/issues/32766))。
3. **macOS 构建必现失败** ([Issue #36980](https://github.com/NousResearch/hermes-agent/issues/36980))：由于 `@testing-library/dom` 类型定义解析问题，导致新版在 macOS 上的全新安装直接抛出致命错误，急需 CI 流水线拦截和修复。
4. ** Nous 推理 API 流式超时** ([Issue #29418](https://github.com/NousResearch/hermes-agent/issues/29418))：使用 Nous 自家网关调用 DeepSeek-v4 时，Agent 级别的长上下文流式传输极易触发超时中断（非流式正常），属于核心推理通道的阻塞问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 PicoClaw 开源项目 2026-06-04 动态日报：

# 📊 PicoClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持了**高度活跃且稳健**的开发态势。项目今日顺利合入了一个新的 nightly 版本，并在底层依赖安全、核心会话机制及工具调用稳定性上取得了重要进展。社区方面，共有 3 个 Issue 产生新的讨论，其中流式 HTTP 请求的特性需求持续引发共鸣。此外，开发团队及贡献者今日提交了 4 个针对系统稳定性和文档的修复 PR，项目整体处于**健康迭代、积极修复**的阶段。

## 2. 版本发布
- **[nightly] Nightly Build for v0.2.9-nightly.20260603.a502aa7f**
  - **更新性质**：自动构建的测试版本（可能存在不稳定）。
  - **更新范围**：从 `v0.2.9` 到 `main` 分支的最新提交，包含了近期所有的底层优化、依赖升级（如 Go 1.25.11）及 Bug 修复。
  - **迁移注意**：因属于 Nightly 版本，不建议直接用于生产环境。如需体验最新功能，请谨慎部署并关注可能出现的回归问题。
  - **详细变更日志**：[v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 **3 个 Pull Requests 被关闭/合并**，极大提升了项目的健壮性：
- **🔧 修复底层安全与依赖漏洞 ([PR #2997](https://github.com/sipeed/picoclaw/pull/2997))**：将 Go 版本从 1.25.10 升级至 1.25.11，修复了 `net/textproto` 中头部名称未转义导致的安全漏洞 (GO-2026-5039)，增强了网关底层的免疫能力。
- **📖 完善项目文档 ([PR #2995](https://github.com/sipeed/picoclaw/pull/2995))**：补充了 v0.2.5 至 v0.2.9 版本的高亮更新日志到 README 中，解决了版本说明断更的问题（Closes #2981）。
- **🤖 规范化 Agent 技能描述 ([PR #2994](https://github.com/sipeed/picoclaw/pull/2994))**：增加了 `picoclaw-agent` 技能文件，为 Agent 提供了包含 CLI 使用和工作流的标准化操作指南。

## 4. 社区热点
- **流式请求配置需求热度不减 ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404))**：该 Issue 于昨日再次活跃，目前已有 **11 条评论和 1 个点赞**。用户强烈呼吁在配置文件中增加 `"streaming": true` 选项以支持对接 LLM 后端的 HTTP 流式传输，这反映出社区对实时交互体验（如打字机效果）的高频需求。

## 5. Bug 与稳定性
今日暴露了几个涉及多渠道和会话管理的 Bug，部分已由社区快速提交修复（等待合并）：
- **🟡 中等：Web UI 新会话加载历史遗留消息 ([Issue #2972 相关, PR #2992](https://github.com/sipeed/picoclaw/pull/2992))**：升级至 v0.2.9 后，新建的 Web UI 会话会错误挂载旧的代理消息。目前 **已有修复 PR**，通过跳过主会话别名的 `PromoteAliasHistory` 来解决。
- **🟡 中等：Pico 通道连续请求丢失 `tool_calls` ([Issue #2958](https://github.com/sipeed/picoclaw/issues/2958), [PR #2957](https://github.com/sipeed/picoclaw/pull/2957))**：通过 WebSocket 连续请求调用工具时，后续请求的 `tool_calls` 会被错误过滤。目前 **已有修复 PR** 引入了 `outboundMessageIsToolCalls()` 辅助函数。
- **🟢 低：Shell 工具响应 JSON 序列化失败静默处理 ([PR #2996](https://github.com/sipeed/picoclaw/pull/2996))**：`pkg/tools/shell.go` 中存在 7 处 `json.Marshal` 错误被忽略的情况，可能导致 LLM 收到空字符串响应。现已提交 PR 改进错误回传机制。

## 6. 功能请求与路线图信号
- **Provider 层面的流式支持 ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404))**：用户对 `streaming HTTP` 的需求非常明确，如果合入，PicoClaw 在处理大段文本输出时的用户体验将大幅提升，有望成为下个小版本的重点特性。
- **MCP 动态请求头注入 ([PR #2696](https://github.com/sipeed/picoclaw/pull/2696))**：该 PR 支持通过 `mcp:` 前缀将上下文的 Header 转发给 MCP 服务器，对需要每次请求进行身份验证（如 Bearer Token）的场景至关重要，进一步完善了 Tool/Channel 生态的安全性。

## 7. 用户反馈摘要
从近期的 Issues 和 PRs 提取到以下核心用户反馈：
- **移动端适配存在短板**：有用户反馈当前系统**不支持 32 位 Android 系统** ([Issue #2954](https://github.com/sipeed/picoclaw/issues/2954))，说明在 Termux 或轻量级环境下的交叉编译存在受众需求。
- **安全配置容易导致功能失效**：用户在配置 `.security.yml` 时，若未显式设置 `enabled: true`，会导致原先在 `config.json` 启用的 Channel 被意外禁用 ([PR #2956](https://github.com/sipeed/picoclaw/pull/2956))，说明配置合并逻辑需要更加健壮或提供更好的文档指引。

## 8. 待处理积压
截至当前，项目有 **7 个待合并的 PRs 和 3 个未关闭的 Issues**。以下两项需要维护者重点关注：
- **单例进程 PID 校验误报 ([PR #2955](https://github.com/sipeed/picoclaw/pull/2955))**：由于系统复用 PID（如被 `systemd-resolved` 占用），导致网关启动失败。该 PR 提议验证进程身份，是一个提升系统鲁棒性的关键修复，建议尽快排期合并。
- **MQTT Channel TLS 验证硬编码问题 ([PR #2899](https://github.com/sipeed/picoclaw/pull/2899))**：目前处于 Closed 状态。原提议将 `InsecureSkipVerify` 默认设为 false 以防范 MITM 攻击，对于提供公网服务的 AI 网关而言，此安全修复至关重要，建议确认关闭原因并重新审视该安全策略。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-04)

> 数据来源：[NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw) 
> 分析周期：过去 24 小时

---

### 1. 今日速览
过去 24 小时内，NanoClaw 项目呈现出**极高的社区提交活跃度，但核心维护者审核进度相对滞后**的状态。今日新增了 1 个关于系统兼容性的 Bug 反馈，同时社区一次性涌现了 9 个 Pull Requests（全部为待合并状态，无已合并/关闭记录）。这些 PR 高度聚焦于**调度模块的健壮性**以及**集成工具链的边界问题处理**。整体来看，项目正处于功能修补与跨平台适配的密集开发期，但需注意代码审查积压问题。

### 2. 版本发布
**无**。今日未发布任何新版本。

### 3. 项目进展
由于今日无 PR 被合并或关闭，项目的“硬性”代码推进处于停滞状态。但从待合并的 PR 意图来看，开发社区正在重点推动以下模块的升级：
*   **调度模块大修**：社区开发者在今日集中提交了 3 个针对调度系统的修复（PR #2679, #2678, #2677），试图完善任务失败时的重试、重新调度及用户通知机制。
*   **安全与代理机制完善**：PR #2605 试图引入继承父代理权限的功能，这将极大提升多智能体协作时的权限管理安全性。

### 4. 社区热点
今日所有 Issue 和 PR 均为刚开启状态（0 评论，0 点赞），暂未形成长尾的热烈讨论。但值得注意的是，**开发者 yairixStudio 和 shrwnsan 表现最为活跃**，他们不仅各自连续提交了多个关键修复，也代表了当前社区最关注的痛点——**提升任务调度的可靠性与网络代理的兼容性**。

### 5. Bug 与稳定性
今日报告了 1 个中等优先级的系统级 Bug，且有多个针对潜在稳定性和边界问题的修复 PR：

*   🟡 **[Medium] 核心启动失败：加密家目录下的 Linger 兼容性问题**
    *   **现象**：在用户级加密文件系统（如 ecryptfs, gocryptfs）下，启用 linger 后，NanoClaw 服务在系统启动时静默失败。
    *   **状态**：已认领，且作者 **已提交 Fix PR**。
    *   **链接**：[Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680) | [修复 PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681)
*   🔵 **[Fix] 调度任务静默失败无提示**：永久失败的计划任务未能转化为用户通知。([PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679))
*   🔵 **[Fix] 调度任务重试逻辑缺陷**：发生彻底失败时，未能重新触发后续的循环任务。([PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678))
*   🔵 **[Fix] Slack 集成消息丢弃**：超过 3000 字符的 Slack 区块导致消息发送失败（`invalid_blocks`）。([PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675))

### 6. 功能请求与路线图信号
虽然今日没有明确的“Feature Request” Issue，但从提交的 PR 中可以捕捉到项目能力扩展的信号：
*   **混合检索能力增强**：PR #2683 引入了 **QMD (Query Markdown Documents)** 容器技能，为智能体提供 BM25 + 向量混合搜索能力。这表明项目正在向 **RAG（检索增强生成）与本地知识库管理** 方向演进。([PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683))
*   **架构升级与清理**：PR #2682 在更新技能时增加了跳过 v1-only 分支的逻辑，暗示项目正在进行底层架构的版本迭代（向 v2 过渡）。([PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682))

### 7. 用户反馈摘要
从 Issue #2680 中可以提取出典型的高级用户使用场景：
*   **用户痛点**：Linux 高级用户倾向于使用基于 PAM 的用户级目录加密（而非全盘 LUKS）来保护个人数据。NanoClaw 作为个人 AI 助手，如果在 linger（用户未登录状态保持服务运行）场景下无法启动，将严重违背“全天候待命助手”的产品承诺。用户期望在系统重启后，无需手动登录即可实现服务的无感恢复。

### 8. 待处理积压
当前项目的核心风险在于 **PR 审核积压**：
*   **存在 9 个待合并 PR，且无任何被关闭/拒绝记录**。其中甚至包含 10 天前（5月24日）提交的底层权限架构修改（[PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605)）。
*   **建议**：项目维护者需要尽快分配精力进行代码走查，特别是今日集中爆发的调度模块 PR 之间存在逻辑依赖（#2677, #2678, #2679），合并顺序和兼容性测试需要重点关注，以避免挫伤活跃贡献者的积极性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-04)

**数据统计周期**：2026-06-03 至 2026-06-04
**分析师**：AI 智能体与个人 AI 助手开源项目分析组

---

## 1. 今日速览
过去 24 小时，NullClaw 项目整体呈现**低活跃度、高价值聚焦**的状态。项目在 Issue 板块无新增或关闭记录，社区互动较为平静；但在代码提交端，核心贡献者提交了一项关键的架构优化 PR。该 PR 聚焦于 AI 智能体的工具调用与提示词工程机制，旨在优化系统提示词的上下文空间管理。整体来看，项目今日无紧急 Bug 报告，处于平稳迭代与底层机制完善阶段。

## 2. 版本发布
**无新版本发布**。
*(注：当前项目可能正处于功能积累期，预计待核心机制优化完善后将进行版本迭代。)*

## 3. 项目进展
今日项目**无已合并或已关闭的 PR**，但有 **1 条高价值待合并 PR** 正在审查中，代表了项目最新的演进方向：

*   🟡 **PR [#946](https://github.com/nullclaw/nullclaw/pull/946) [OPEN]**: `fix(agent): filter tools in system prompt text by tool_filter_groups`
    *   **作者**: vernonstinebaker
    *   **进展概述**: 这是一个针对 AI Agent 基础架构的重要修复与优化。该 PR 引入了 `filterToolsForPromptText` 机制，优化了系统提示词中的工具列表呈现逻辑。现在，基于文本的系统提示词将仅包含内置工具和标记为 `always` 的 MCP（Model Context Protocol）工具。动态分组的 MCP 工具将被移出文本提示以节省 Token 空间，但它们的 Schema 仍会通过原生 API 的 tool-calling 能力在关键词匹配时触发。
    *   **项目影响**: 此项推进大幅优化了 Agent 处理大量 MCP 工具时的上下文窗口利用率，降低了提示词干扰和 Token 消耗，标志着 NullClaw 在多工具调度和精细化路由控制上迈出了重要一步。

## 4. 社区热点
过去 24 小时内，社区无高热度讨论的 Issues 或 PRs。
唯一的活动来源为上述的 **PR [#946](https://github.com/nullclaw/nullclaw/pull/946)**，目前尚未积累评论或点赞（👍: 0）。尽管互动数据较低，但该 PR 涉及的“大模型上下文裁剪与 MCP 动态路由”是当前 AI Agent 领域的重点技术攻坚方向。

## 5. Bug 与稳定性
*   **今日新增 Bug 报告**: 0 条
*   **崩溃/回归问题**: 无
*   **稳定性评估**: 项目的稳定性未受到新的挑战，整体系统表现呈健康状态。PR #946 实际上从侧面修复了可能存在的“系统提示词过长”或“工具选择失焦”的潜在风险。

## 6. 功能请求与路线图信号
*   **今日新增功能请求**: 0 条
*   **路线图信号挖掘**: 
    尽管 Issue 板块未提供明确的路线图信号，但从 **PR [#946](https://github.com/nullclaw/nullclaw/pull/946)** 的代码行为可以读出明确的项目演进趋势：**NullClaw 正在积极深化对 MCP（Model Context Protocol）动态工具的支持**。项目正在从“把所有工具塞入 Prompt”的初级阶段，向“基于意图/关键词动态加载工具”的高级 Agent 架构演进。预计未来版本将更加侧重于长上下文管理、RAG 与 MCP 的深度结合。

## 7. 用户反馈摘要
由于今日新增 Issues 和 PR 评论数均为 0，暂无法提炼直接的用户反馈。
但从近期代码层面的动向可以推断，用户在复杂场景下接入大量 MCP 工具时，可能遇到过 Token 溢出或模型调用非预期工具的痛点，促使维护者 vernonstinebaker 提交了针对性的过滤优化代码。

## 8. 待处理积压
今日数据抓取范围内，**无长期未响应的特定 Issue 或 PR 需要紧急警告**。
但建议维护者关注 **PR [#946](https://github.com/nullclaw/nullclaw/pull/946)** 的后续测试与合并进度。鉴于其修改了底层的工具过滤逻辑，建议在合并前确保对不同大模型 API（支持原生 Tool Calling 的模型 vs 仅支持纯文本补全的模型）的兼容性测试，避免引入边缘情况的回归 Bug。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🪶 IronClaw 项目动态日报 (2026-06-04)

> 分析师寄语：IronClaw 项目今日展现出极高的研发活跃度。随着新一代架构 "Reborn" 的逐步落地与 v0.29.1 的发布，项目在 Slack 集成、底层安全和系统稳定性方面取得了实质性进展。

---

## 1. 今日速览

过去 24 小时内，IronClaw 仓库保持着**高度活跃**的开发节奏。项目今日成功发布了 `v0.29.1` 版本，主要修复了上下文历史记录作用域的问题。在开源协作方面，社区共产生了 **19 条 Issue 更新**（13 条新开/活跃，6 条关闭）和高达 **50 条 PR 更新**（25 条待合并，25 条已合并/关闭）。从 PR 和 Issue 的标签可以看出，核心团队当前正全面聚焦于 **Reborn 架构的重构**，特别是 Slack 应用集成、Trigger（触发器）系统的加固，以及底层安全凭证管理的优化。

---

## 2. 版本发布

### 🚀 [ironclaw-v0.29.1](https://github.com/nearai/ironclaw/releases/tag/v0.29.1) (发布于 2026-06-04)

本次属于常规补丁更新，未引入破坏性变更（Breaking Changes），建议用户平滑升级。
*   **Added**: Web 端支持通过 Responses API 传递 temperature 参数 ([PR #3641](https://github.com/nearai/ironclaw/pull/3641))。
*   **Fixed**: 修复了引擎层面 Channel 会话的 v1 历史记录作用域问题 ([PR #4320](https://github.com/nearai/ironclaw/pull/4320))，这有助于稳定多轮对话的上下文加载。
*   **CI / Release**: 发布流中新增了 WeCo 集成。

---

## 3. 项目进展

今日有大量核心 PR 被合并或关闭，标志着 Reborn 架构的多个关键拼图已经就位：

*   **WebUI 与前端体验优化**：
    *   [PR #4417](https://github.com/nearai/ironclaw/pull/4417) (已合并): 修复了 WebUI 实时投影光标恢复的问题，拆分了光标逻辑，防止合成进度更新覆盖持久运行时光标。
    *   [PR #4412](https://github.com/nearai/ironclaw/pull/4412) (已合并): 将本地开发运行时的身份作用域绑定到 Run Actor，完善了 SSO 场景下的权限隔离。
*   **测试与健壮性**：
    *   [PR #4415](https://github.com/nearai/ironclaw/pull/4415) (已关闭): 引入了针对 Trigger Poller 的全路径集成测试，显著提升了后台任务调度的可靠性。

---

## 4. 社区热点

今日讨论最活跃、关注度最高的问题集中在多平台适配和架构整合上：

*   **[Issue #3857](https://github.com/nearai/ironclaw/issues/3857) [Reborn] Lane 10: add Slack ProductAdapter MVP** (6 条评论)
    *   **诉求分析**：社区及核心开发者正在推进带有预配置凭证的 Slack 适配器 MVP。讨论集中在如何通过 Reborn 服务异步处理 DM 和应用提及，这是实现 AI 助理全平台覆盖的关键一步。
*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [Reborn] Add ProductWorkflow and InboundTurnService facade** (5 条评论)
    *   **诉求分析**：这是架构重构的核心大脑。讨论如何在外部平台适配器和 Reborn 宿主层之间建立优雅的门面模式，解耦业务逻辑。

---

## 5. Bug 与稳定性

今日报告了多个关键底层 Bug，尤其是在系统恢复、状态管理和并发控制方面。团队响应迅速，部分已提交 Fix PR：

*   🔴 **P0 级别：上下文溢出恢复失效**
    *   [Issue #4310](https://github.com/nearai/ironclaw/issues/4310) (已关闭): Reborn 在上下文溢出时虽然发出了 `ShrinkContext` 指令，但执行器在重试时并未真正缩减上下文，导致可能无限循环提交超大 Prompt。已有对应修复逻辑落地。
*   🟠 **高严重度：系统启动失败与状态卡死**
    *   [Issue #4400](https://github.com/nearai/ironclaw/issues/4400) (OPEN): 生产环境中 IronClaw 会因陈旧的 PID 文件导致启动失败，且无法自动恢复。
    *   [Issue #4309](https://github.com/nearai/ironclaw/issues/4309) (已关闭): 压缩摘要写入比检查点存活时间更长，导致重试阻断。目前已修复。
*   🟡 **一般严重度：安全与逻辑漏洞**
    *   [Issue #4351](https://github.com/nearai/ironclaw/issues/4351) (已关闭): 子代理的安全扫描可能被静默跳过，已通过 Fail-closed 机制修复。
    *   [Issue #4420](https://github.com/nearai/ironclaw/issues/4420) (OPEN): Trigger 的 `CompleteAfterFirstFire` 策略未被底层 Worker 正确读取，导致设定为仅触发一次的触发器会无限循环触发。

---

## 6. 功能请求与路线图信号

根据近期 Issue 和 PR 动向，项目下一阶段的功能演进路线已十分清晰：

*   **深度集成 Slack 宿主环境**：
    [PR #4418](https://github.com/nearai/ironclaw/pull/4418) 正在将 Slack 的 Host-beta 路由完全接入 Reborn 运行时。结合 [PR #4421](https://github.com/nearai/ironclaw/pull/4421)（绑定 Slack Actors），预计完整支持 Slack 工作空间指日可待。
*   **产品级授权体验优化**：
    [Issue #4382](https://github.com/nearai/ironclaw/issues/4382) 提出“一次授权，永不弹窗”的构想。用户设定默认 OAuth 账号后，后续调用能力将静默解析，极大提升多工具调用时的用户体验。
*   **Hooks 机制的全面成熟**：
    [PR #3951](https://github.com/nearai/ironclaw/pull/3951) 等一系列由核心贡献者提交的 PR，正在引入第三方扩展钩子、持久化后端支持（Postgres/libSQL）以及严格的安全奇偶校验测试。这表明 IronClaw 正在构建一个高安全性、可扩展的插件生态。

---

## 7. 用户反馈摘要

从真实的 Issue 报告中，可以提炼出以下用户痛点和使用反馈：

*   **多模型切换体验不一致**：用户反映（[Issue #4377](https://github.com/nearai/ironclaw/issues/4377)），在使用 NEAR AI provider 时，WebUI 调用 `/model` 返回的是 `GPT OSS 120B` 等展示用名称，无法直接用于 API 切换。这暴露了内部标识符与 UI 展示层映射不一致的问题。
*   **安全性透明度要求高**：外部贡献者对于 HTTP 凭证的内存处理非常敏感（[Issue #4376](https://github.com/nearai/ironclaw/issues/4376)），要求使用 Non-clone 类型防止凭证在内存中意外复制和泄露，说明项目在企业级安全场景中正面临更严苛的审视。

---

## 8. 待处理积压

以下长期/重要任务需要维护团队持续关注，以保障项目健康度：

1.  **Nightly E2E 测试失败** ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108))：自动化的端到端测试持续失败。此类基础设施问题容易掩盖代码层面的深层 Bug，需尽快排查 `749f584` 提交引发的回归。
2.  **Provider 工具数量限制未适配** ([Issue #4407](https://github.com/nearai/ironclaw/issues/4407))：随着 Reborn 暴露的能力越来越多，单一请求可能超出 OpenAI 等提供商的 `tools` 数组限制。这是一个架构级隐患，目前尚无解法，需要设计模型可见性过滤机制。
3.  **CLI 迁移大工程** ([PR #4379](https://github.com/nearai/ironclaw/pull/4379))：社区成员 `denbite` 提交了将只读命令迁移至 Reborn 架构的 XL 级 PR，目前处于 Open 状态，需要维护者投入时间进行 Review，以避免社区贡献者流失。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 (2026-06-04)**

### 1. 今日速览
过去24小时内，LobsterAI 项目展现出了**极高的开发活跃度与迭代速度**。团队在一天内集中 review 并关闭了 14 个 Pull Requests，涵盖了多角色协同、HTML分享 和 MCP (模型上下文协议) 等核心模块的重构与缺陷修复。项目刚刚发布了 `2026.6.3` 版本，目前有 2 个待合并的 PR 正在处理中，整体代码库健康且处于快速演进阶段。

### 2. 版本发布
- **Release: LobsterAI 2026.6.3**
  - **更新内容**：
    - `feat(mcp)`: 优化了通过 npx 启动 MCP 的解析逻辑，并增加了首次响应时间的日志记录（贡献者 @btc69m979y-dotcom）。
    - `feat`: 优化了 HTML 分享功能的体验（贡献者 @liugang519）。
    - `feat(cowork)`: 新增了多项多角色协同功能支持（承接了前期的 PR 迭代）。
  - **破坏性变更与迁移注意**：当前 Release Notes 中未明确标记破坏性变更。但由于对 MCP 解析和本地工具链依赖注入进行了优化，开发者如有自定义 MCP 服务接入，建议测试新版本的兼容性表现。

### 3. 项目进展
今日合并/关闭的 PR 极大地丰富了 Cowork 模块的交互，并修复了多项 UI 和网络配置漏洞，主要进展如下：

- **协同工作流 增强**：
  - **本地会话分叉** ([PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085)): 支持从特定助手消息创建本地会话分支，并在长会话分叉时保留压缩上下文。
  - **上下文精准引用** ([PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098), [PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)): 支持从助手消息或 Artifact 预览中选择特定文本，作为上下文片段添加到当前草稿中，极大提升了多轮对话的精准度。
  - **会话同步优化** ([PR #2108](https://github.com/netease-youdao/LobsterAI/pull/2108)): 改进了频道会话的同步与清理机制。
- **MCP 底层健壮性提升**：
  - **远程配置校验** ([PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)): 增加了对远程服务器 URL 的共享验证，拦截无效 URL 并本地化显示错误。
  - **Node 环境感知** ([PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100)): 为托管的 MCP npm 安装命令注入解析后的 Node 工具链路径，修复了因环境变量丢失导致的启动失败问题。
  - **网关重载优化** ([PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104)): 修复了在网关配置重载期间可能导致的会话超时问题。
- **UI / 交互优化**：
  - **HTML 分享重构** ([PR #2099](https://github.com/netease-youdao/LobsterAI/pull/2099), [PR #2105](https://github.com/netease-youdao/LobsterAI/pull/2105)): 重新设计了分享对话框状态，优化了分享链接与代码的复制体验。
  - **UI 缺陷修复** ([PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106)): 修复了 ModelSelector 悬浮卡片溢出视口的问题，改善了 SkillsPopover 的交互。

### 4. 社区热点
今日社区最活跃的讨论来自关于**订阅计费机制**的反馈：
- **Issue #2081 [订阅]**(https://github.com/netease-youdao/LobsterAI/issue/2081): 该 issue 由用户 @zjk648491625 创建，今日新增了 2 条评论。用户抱怨其购买的 5500 积分在月底未使用的情况下被强制清零。
  - *诉求分析*：这反映了 SaaS 化积分消耗策略的痛点。企业用户通常期望积分具有长久有效性，此规则可能导致用户对产品产生不信任感。建议产品团队在此处予以明确解释或优化计费策略。

### 5. Bug 与稳定性
今日通过 PR 修复了多个已知 Bug，部分未解决的历史问题如下：
- **UI 溢出与状态异常**：已于今日通过 [PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106) (修复视口溢出) 和 [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102) (修复用户配置上下文窗口被覆盖的问题) 解决。
- **长期存在的 Modal 标题溢出 Bug**：[PR #1463](https://github.com/netease-youdao/LobsterAI/pull/1463) 旨在修复长期标题导致的弹窗布局错乱 ([Issue #1435](https://github.com/netease-youdao/LobsterAI/issue/1435))。虽然修复代码已提交，但目前仍处于 `OPEN` 且标记为 `[stale]`，合并进度停滞。

### 6. 功能请求与路线图信号
从近期的高频 PR 合并可以看出，LobsterAI 的下一阶段路线图**高度聚焦于多智能体协同 与外部工具调用 (MCP)**。
- 结合今日合并的文本选择上下文引用 ([PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098)) 及快捷键全面改造的 PR 提交 ([PR #2109](https://github.com/netease-youdao/LobsterAI/pull/2109))，项目正在向**“专业级、深度交互的桌面端 AI 工作台”**演进。
- 另外，针对 MCP 启动容错的连串修复 ([PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100), [PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)) 表明团队正致力于打通本地 Electron 环境与外部 Agent 通信的最后一公里。

### 7. 用户反馈摘要
通过对 Issue 的分析，用户的真实痛点集中在以下方面：
- **不满意的点**：**积分清零策略**（[#2081](https://github.com/netease-youdao/LobsterAI/issue/2081)）。这触及了付费用户的敏感神经，用户认为“用不完直接清零”非常不合理，呼吁引入“延期”或“永不作废”机制。
- **高频使用场景**：结合开发重心的推断，重度用户正大量使用“Artifact 生成与分享”以及“多段文本对照分发（Cowork 选中文本发送）”，这表明 LobsterAI 在编程、长文写作等复杂生产力场景中具有较高采用率。

### 8. 待处理积压
- **依赖项自动升级 PR**：由 Dependabot 创建的 [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（旨在将 Electron 从 v40.2.1 升级至 v42.3.1）已搁置 2 个月。考虑到 Electron 大版本升级可能带来底层 API 的变更，建议 QA 团队尽快安排测试排期，避免技术债累积。
- **Stale PR 唤醒**：[PR #1463](https://github.com/netease-youdao/LobsterAI/pull/1463) 提供了基础的 UI 截断修复方案，但已被标记为 `[stale]`，建议维护者 @leedalei 及核心团队重新评估此 PR 的合并价值，及时关闭对应 Issue。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-06-04)**

基于对 github.com/moltis-org/moltis 仓库过去24小时的数据追踪与分析，以下为项目最新动态报告。

---

### 1. 今日速览
Moltis 项目今日保持极高的迭代活跃度，社区反馈与维护者的修复节奏呈现出良性的“共振”状态。过去24小时内，项目共处理了 14 条 Issue 更新，其中关闭了 9 个历史遗留 Bug，同时新增了 5 个活跃 Issue。项目连续发布了 `20260603.01` 和 `20260602.05` 两个迭代版本，显示出主分支正处于高频集成与发布阶段。目前有 3 个高质量 Pull Requests 正在等待合并，整体项目健康度优秀，正处于功能完善与稳定性提升的快车道。

---

### 2. 版本发布
过去24小时内，项目连发两个新版本，表明近期合并的代码（特别是针对历史 Bug 的修复）已正式交付：
- **[Release 20260603.01](https://github.com/moltis-org/moltis/releases/tag/20260603.01)**
- **[Release 20260602.05](https://github.com/moltis-org/moltis/releases/tag/20260602.05)**
*注：维护者未在 Release Notes 中详细列出破坏性变更，考虑到近期密集的 Bug 修复（如 Vault 密码、UI 显示等），建议升级用户重点测试 MCP 配置、Vault 及会话标题生成等功能。*

---

### 3. 项目进展
尽管今日没有合并 PR（0 merged），但大量 Issue 的关闭（9 closed）证明主分支近期已合入了关键代码。当前有 3 个核心 PR 正在进行 Review，为下一个版本做准备：
- **[PR #1093](https://github.com/moltis-org/moltis/pull/1093) Add channel activity log visibility settings**：响应了社区对工具调用日志可配置化的需求，支持按账户/频道/用户精细控制活动日志的显示策略。
- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089) Cap persisted tool results before rehydration**：优化了会话记忆重新加载时的性能，对过长的工具结果进行截断，有助于降低 Token 消耗和防止上下文溢出。
- **[PR #1098](https://github.com/moltis-org/moltis/pull/1098) fix(browser): tolerate null optional params**：提升了 Agent 对不同 LLM（尤其是 Gemma 4 等本地模型）生成参数的兼容性。

---

### 4. 社区热点
今日社区焦点主要集中在 **外部集成环境的可用性** 和 **交互体验的细节打磨** 上。
- **[Issue #1097](https://github.com/moltis-org/moltis/issues/1097) Telegram edit-in-place streaming mixes intermediate output**：由开发者 s-salamatov 提出，指出 Telegram 端的流式输出（边生成边修改）将中间过程混入最终结果。此问题直接影响终端用户的聊天体验。
- **[Issue #1092](https://github.com/moltis-org/moltis/issues/1092) Add a config option to disable channel Activity log**：同样由 s-salamatov 提出，呼吁提供隐藏工具执行日志的开关。维护者反应迅速，对应的修复 PR ([#1093](https://github.com/moltis-org/moltis/pull/1093)) 已经提交。
- **[Issue #1028](https://github.com/moltis-org/moltis/issues/1028) [Feature]: Agent should have access to Moltis docs OOTB**：今日已正式关闭，这意味着 Agent 现在已经原生集成了查阅自身文档的能力（RAG），是 Agent 自主进化的一大步。

---

### 5. Bug 与稳定性
今日报告了多个关键 Bug，主要集中在容器化部署和客户端交互层面：

**🔴 高优先级（核心功能受阻/环境兼容性）**
- **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095) Podman is not working via moltis**：Moltis 无法与 Podman 协同工作。由于大量用户依赖容器化部署本地 AI，此兼容性问题影响较大。*(暂无关联 Fix PR)*
- **[Issue #1096](https://github.com/moltis-org/moltis/issues/1096) `Read`/`Write`/`Edit` tools don't work in Docker**：在 Docker 环境下，Agent 的核心文件操作工具失效，这将直接阻断 Agent 的代码编写与文件管理能力。*(暂无关联 Fix PR)*

**🟡 中优先级（UI/配置/流输出）**
- **[Issue #1094](https://github.com/moltis-org/moltis/issues/1094) [Bug]: De-Preferring Models**：用户反馈在模型选择时出现优先级错乱问题。
- **[Issue #1097](https://github.com/moltis-org/moltis/issues/1097) Telegram edit-in-place streaming mixes...**：如上文所述，Telegram 流式输出混淆。

**✅ 已修复（今日关闭的重要 Bug）**
- Vault 密码设定异常 ([#1046](https://github.com/moltis-org/moltis/issues/1046))
- 无法单独启用/禁用某个特定 Skill ([#1083](https://github.com/moltis-org/moltis/issues/1083))
- MCP Server 配置中的环境变量泄露给 LLM ([#1054](https://github.com/moltis-org/moltis/issues/1054)) - *安全隐患已修复*

---

### 6. 功能请求与路线图信号
结合近期的 Feature Request 与开发动向，项目接下来的重点演进方向明确：
- **精细化控制与权限管理**：从 [Issue #1092](https://github.com/moltis-org/moltis/issues/1092) 可以看出，项目正从“能用”向“高度可定制”过渡。用户希望能控制 UI 上的每一处细节（如 Activity log 的隐藏）。
- **本地/开源模型兼容性提升**：[PR #1098](https://github.com/moltis-org/moltis/pull/1098) 表明团队正在关注 Gemma 等本地小模型在 Moltis 上的表现。让 Agent 框架不再仅依赖 GPT-4/Claude 等闭源模型，而是兼容各种本地模型的输出范式。
- **深度文档集成**：[Issue #1028](https://github.com/moltis-org/moltis/issues/1028) 的关闭与 [Issue #1036](https://github.com/moltis-org/moltis/issues/1036)（Web UI 支持任意文件附件）的落地，标志着 Moltis 在多模态文档处理和自我认知（读取自身文档）方面取得了实质性进展。

---

### 7. 用户反馈摘要
从近期 Issue 标题及解决情况中提炼出以下用户画像与痛点：
- **Docker/容器化用户是主力军**：大量 Bug 集中在 Docker 环境下（文件读写失效 [#1096](https://github.com/moltis-org/moltis/issues/1096)、发送图片失败 [#1037](https://github.com/moltis-org/moltis/issues/1037)）。用户倾向于将 Moltis 作为独立服务部署，因此文件系统权限和容器隔离机制亟待完善。
- **Telegram 端体验备受关注**：用户在即时通讯场景下对输出质量要求极高。中间过程的暴露（[#1097](https://github.com/moltis-org/moltis/issues/1097)）降低了非技术用户对 AI 的信任感。
- **安全性意识提升**：环境变量泄露给 LLM ([#1054](https://github.com/moltis-org/moltis/issues/1054)) 的修复，反映了用户对 AI Agent 框架安全性的高度敏感。

---

### 8. 待处理积压
- **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095) (Podman 失败)** 与 **[Issue #1096](https://github.com/moltis-org/moltis/issues/1096) (Docker 文件工具失效)** 是今日刚爆发的严重环境缺陷，目前尚未看到对应 PR 被提交，强烈建议维护者优先介入调查，防止影响即将到来的正式版发布。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-04)

## 1. 今日速览
过去 24 小时，CoPaw (QwenPaw) 项目保持了极高的社区活跃度与开发推进速度，共产生 48 条 Issue 更新和 50 条 PR 更新。项目当前的重心明显聚焦于**系统底层稳定性修复**（尤其是记忆、上下文压缩和桌面端插件系统）以及**核心功能的横向扩展**（如 ACP 协议增强、MiniMax M3 模型接入）。虽然今日无新版本发布，但核心开发者与社区贡献者集中合并了大量基础架构修复，为下一个稳定版本的发布打下了坚实基础。整体来看，项目健康度良好，社区反馈闭环迅速。

---

## 2. 版本发布
**无**。
*注：虽无正式版发布，但从合并的 PR 来看，项目正在为 `v1.1.11` 做密集的代码整合与测试准备。*

---

## 3. 项目进展
今日共有 **21 个 PR 被合并/关闭**，另有 29 个待合并。以下是推进项目向前迈进的核心 PR：

*   **核心稳定性修复**：
    *   [PR #4933](https://github.com/agentscope-ai/QwenPaw/pull/4933)：修复了上下文媒体块处理中 `source` 对象非字典类型导致的解析崩溃问题（关联 #4811）。
    *   [PR #4935](https://github.com/agentscope-ai/QwenPaw/pull/4935)：更新 `reme-ai` 依赖至 0.3.1.10，修复了 File Watcher 重启时 stop-event 未重置导致的热加载失效问题。
*   **功能完善与协议扩展**：
    *   [PR #4942](https://github.com/agentscope-ai/QwenPaw/pull/4942)：更新了项目官方路线图文档。
    *   [PR #4821](https://github.com/agentscope-ai/QwenPaw/pull/4821)：为飞书渠道增加了群会话共享模式（`share_session_in_group`），统一了多渠道的群聊上下文隔离策略。
    *   [PR #4737](https://github.com/agentscope-ai/QwenPaw/pull/4737)：为 Telegram 渠道增加了基于 InlineKeyboard 的交互式工具审批卡片。
*   **测试与质量保证**：
    *   [PR #4943](https://github.com/agentscope-ai/QwenPaw/pull/4943) (关联 [#4896](https://github.com/agentscope-ai/QwenPaw/pull/4896))：新增了 55 个 P0 级别的集成测试用例，大幅覆盖了插件、MCP OAuth 及技能生命周期等核心路由。
    *   [PR #4940](https://github.com/agentscope-ai/QwenPaw/pull/4940)：修复了上游上传大小限制更改导致的测试崩溃，并增强了插件加载器的超时容错性。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**浏览器工具的可用性**、**智能体自我进化（Hermes 理念）**以及**记忆与上下文管理**：

*   🔥 **[Issue #4919](https://github.com/agentscope-ai/QwenPaw/issues/4919)** (评论: 6 | 👍: 0)：`browser_use` 启动失败导致浏览器闪退。用户在多浏览器环境下遭遇严重的 CDP 超时，该问题直接影响 Agent 的网页自动化能力。（*注：已有对应修复 PR #4944 待合并*）
*   🔥 **[Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) & [Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516)** (评论均: 4)：社区对 Agent 具备类似 Hermes 的“自我进化/经验积累”能力表现出强烈需求，期待底层架构能够支持智能体自动优化自身。
*   💬 **[Issue #4920](https://github.com/agentscope-ai/QwenPaw/issues/4920)** (评论: 4)：控制台体验细节问题，用户呼吁修改“键盘上键”在输入框的行为逻辑（从“调出历史消息”改为“光标移至行首”）。

---

## 5. Bug 与稳定性
今日暴露的 Bug 较多集中在记忆系统膨胀和桌面端（Tauri），按严重程度排列如下：

**🔴 严重 (P0 - 系统崩溃/核心功能受损)**
*   **[Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)**：ChromaDB Rust binding 底层引发段错误 (SIGSEGV)，直接杀死整个 QwenPaw 进程，且无法被 Python 捕获。
*   **[Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)**：向量数据库无限膨胀。正常使用 3 个月后 ChromaDB 索引高达 37GB，导致 `memory_search` 频繁崩溃。
*   **[Issue #4888](https://github.com/agentscope-ai/QwenPaw/issues/4888)**：路径穿越 Bug。Dream agent 执行 `write_file` 时因相对路径解析错误，覆盖了其他 workspace 的核心记忆文件。👉 *已有修复 PR: [#4936](https://github.com/agentscope-ai/QwenPaw/pull/4936)*

**🟠 中等 (P1 - 功能异常/体验受阻)**
*   **[Issue #4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) & [Issue #4877](https://github.com/agentscope-ai/QwenPaw/issues/4877)**：Tauri 桌面版插件加载器无法启动；Custom channel 每次保存设置会异常停止监听。👉 *已有修复 PR: [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900)*
*   **[Issue #4924](https://github.com/agentscope-ai/QwenPaw/issues/4924) & [Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448)**：上下文压缩 频繁失败，旧格式数据或格式不规范导致历史消息无法被正确精简。
*   **[Issue #4922](https://github.com/agentscope-ai/QwenPaw/issues/4922)**：权限异常未正确释放。尝试读取未授权图片失败后，陷入“不管问什么都报同一个错”的死循环状态。

---

## 6. 功能请求与路线图信号
通过分析近期的 Feature Request 和开放的 PR，可以观察到项目未来版本的演进方向：

*   **模型生态扩张**：用户对超长上下文模型需求强烈，[Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) 反馈了 `/compact` 命令未适配 512K 上下文的问题。[PR #4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) 已准备将 MiniMax M3 纳入内置模型列表。
*   **记忆系统 2.0 演进**：社区和官方正合力重塑记忆系统。[PR #4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) 提出了基于标题比对的“记忆蒸馏引擎”；[Issue #4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) 提出了“会话结束自动总结”的 RFC。
*   **桌面端独立闭环**：[PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 正在为 Tauri 桌面版引入自动更新机制，结合插件加载器的重构，桌面端的可用性将大幅提升。

---

## 7. 用户反馈摘要
从今日的 Issues 互动中，可以提取出以下真实用户画像与反馈：
1.  **记忆与上下文管理是核心双刃剑**：用户对 QwenPaw 的长期记忆能力非常依赖，但也深受其苦。向量库体积失控 ([#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)) 和 Dream agent 乱写文件 ([#4888](https://github.com/agentscope-ai/QwenPaw/issues/4888)) 打破了“信任边界”。
2.  **私有化部署与硬件接入诉求**：用户尝试通过微信/飞书等渠道让 Agent 操作本地文件（如 NAS 路径 `/vol4/1000/...`），但常受困于权限管理机制 ([#4922](https://github.com/agentscope-ai/QwenPaw/issues/4922))。
3.  **UI 细节需要打磨**：诸如“键盘上键行为” ([#4920](https://github.com/agentscope-ai/QwenPaw/issues/4920))、“子代理进度无法查看” ([#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923)) 等反馈表明，随着功能增加，用户对 Console 前端的交互精细度提出了更高要求。

---

## 8. 待处理积压
以下高价值或高频讨论的 Issue/PR 目前处于 Open 状态，建议维护团队优先关注响应：

*   **长期记忆核心隐患**：
    *   [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)：ChromaDB 底层 C++ 段错误导致进程被杀（无优雅降级方案）。
    *   [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)：向量索引无限膨胀至 37G 的性能灾难。
*   **重要功能停滞**：
    *   [PR #4171](https://github.com/agentscope-ai/QwenPaw/pull/4171)：`memory-distill` 记忆蒸馏插件已开启 Review 一段时间，需尽快推进合入以优化现有臃肿的记忆体系。
    *   [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)：Tauri 自动更新功能，对提升桌面端用户体验至关重要，需加速测试进度。
*   **亟待合并的关键热修复**：
    *   [PR #4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) (浏览器隔离与超时修复)、[PR #4936](https://github.com/agentscope-ai/QwenPaw/pull/4936) (Dream agent 路径修复)、[PR #4941](https://github.com/agentscope-ai/QwenPaw/pull/4941) (技能包下载大小限制修复)。这些 PR 直接解决了今日最紧急的用户痛点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
过去 24 小时内，ZeroClaw 项目展现了**极高的开发活跃度与社区关注度**。项目共处理了 50 条 Issue 更新（新增/活跃 24 条，关闭 26 条），以及 50 条 PR 更新。虽然仍有 41 个 PR 处于待合并状态且今日无新版本发布，但大量关键 Bug（尤其是涉及安全沙箱、运行时与网关的阻断性问题）被集中修复并关闭。此外，社区在探讨引入可插拔安全架构和会话分叉等高级特性，显示出项目正稳步向更成熟、更稳定的 v0.8.0 乃至 v0.9.0 版本迈进。

## 2. 版本发布
**无新版本发布**。
项目当前正在积极整合大量修复与功能，结合 Issue #7112 (v0.8.0 release queue) 的状态，推测团队正在为下一个正式版本的发布做密集的代码清理与 PR 合并准备。

## 3. 项目进展
今日合并或关闭了多项关键 PR 和 Issue，极大提升了系统的稳定性和安全性：
*   **Provider 修复**：修复了 Llamacpp 提供者在设置 `wire_api = "responses"` 时被忽略的问题（[PR #7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172)）。
*   **配置与运行时核心清理**：关闭了多个历史遗留的高优 Bug，例如 `SkillForge` 自动生成器输出不规范字段的问题（[Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)）以及初始安装时 `default_model` 报错阻断工作流的问题（[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)）。
*   **安全策略厘清**：明确了技能审计仅限于结构化检查的边界，将命令内容安全执行权收归底层策略执行器（[Issue #5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956)）。

## 4. 社区热点
今日讨论最活跃、关注度最高的问题集中在**安全鉴权架构演进**与**核心工作流受阻**：
*   **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) / [Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (评论: 3)**：由开发者 `singlerider` 提出的架构级增强，计划在 RPC/WSS 传输层增加 OIDC 认证支持，并将安全执行层抽象为可插拔的 Provider 接口。这标志着 ZeroClaw 正在向企业级安全标准演进。
*   **[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (评论: 18)**：关于全新安装时配置初始化引发 S1 级阻断的 Bug，引发了社区对配置引导流程可靠性的深度复盘。
*   **[Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (评论: 6)**：开发者反馈默认的 Shell 沙箱配置过于严格，拦截了所有实际的 Python Skill 运行模式，引发了关于“默认安全策略”与“开箱即用体验”之间平衡的讨论。

## 5. Bug 与稳定性
今日报告并处理的 Bug 涵盖多个组件，按严重程度排列如下：

**S1 级 (阻断工作流 / Workflow Blocked)：**
*   **Web UI 审批绕过**：通过 Websocket 网关通信时，Supervised 模式下的工具审批流失效，用户无法看到审批弹窗（[Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)）。
*   **ACP 目录锁定**：使用 ACP 协议会话时，修改工作目录会导致 Agent 无法读取自身的 skill 文件（[Issue #6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)）。
*   **Clawhub 安装 Panic**：使用 `zeroclaw skills install clawhub:*` 时因异步运行时冲突导致程序直接崩溃（[Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)）。

**S2 级 (行为退化 / Degraded behavior)：**
*   **Context 压缩丢失推理内容**：对于需要“深度思考”的模型（如 DeepSeek），长对话触发压缩后会丢失 `reasoning_content`，导致模型表现显著下降（[Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)）。
*   **本地图片读取失败**：Skill 生成的本地图片路径无法被 API模型 正确读取识别（[Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)）。
*   **安全策略误杀**：命令行中含有引号或 Heredoc 内的 `~` 符号会触发路径安全策略的拦截，产生误报（[Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133)）。

## 6. 功能请求与路线图信号
*   **会话分支**：用户强烈请求支持“会话分叉”功能，允许用户在任一历史节点拉出一条独立的对话分支，以便进行“What-if”探索而不影响主线程（[Issue #7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168)）。
*   **v0.8.0 路线图**：[Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) 正在紧密追踪 v0.8.0 的发布前置条件，重点聚焦于配置和工具解析的稳定性跃升以及 Schema 破坏性变更的清理。
*   **评估测试套件**：引入真实的 Agent 评估测试框架（[PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067)），通过确定性的重放机制来对 Agent 行为进行自动化打分。

## 7. 用户反馈摘要
*   **Sandbox 过于保守**：高级用户在开发复杂的 Skill 时，发现默认的安全沙箱经常阻碍常规操作（如 Python 脚本执行、访问特定目录）。团队正在调整策略，如合并 [PR #7120](https://github.com/zeroclaw-labs/zeroclaw/pull/7120) 以防止交互式子进程被误拦截。
*   **多平台体验割裂**：用户指出 Web 界面（Dashboard）与网关之间存在功能不同步的问题。例如，Dashboard 无法处理图片标记（[Issue #5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)），以及 UI 气泡存在多出空行和排版问题（[Issue #6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702)）。
*   **多语言与国际化支持不足**：社区迅速响应了 30 种非英语语言的 Agent 翻译缺失问题，并提交了修复（[PR #7140](https://github.com/zeroclaw-labs/zeroclaw/pull/7140)），显示海外用户群正在快速增长。

## 8. 待处理积压
*   **高优依赖问题等待合并**：目前仍有 41 个 PR 待合并，其中包括大量涉及高风险的核心重构，例如移除 Channel 层的默认模型提供者后门（[PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066)）和重写设备轮换时的 Bearer Token 失效逻辑（[PR #6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988)）。建议维护团队加快 Review 进度，以解除当前分支上的功能阻塞。
*   **遗漏的配置端口引导**：用户反馈在通过 `quickstart` 配置 Webhook 时，由于无法选择端口，导致最终生成的 Agent 报错（[Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173)）。此问题刚刚开立，需要开发团队尽快介入修复。

</details>