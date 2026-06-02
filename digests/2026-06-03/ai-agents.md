# OpenClaw 生态日报 2026-06-03

> Issues: 464 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-02 22:38 UTC

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

以下是为您生成的 2026年6月3日 OpenClaw 项目动态日报：

# 📊 OpenClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
今日 OpenClaw 项目保持极高的社区活跃度与开发热度。过去 24 小时内，项目共处理了 **464 条 Issue**（新开/活跃 280 条，关闭 184 条）以及 **500 条 PR**（待合并 389 条，合并/关闭 111 条）。尽管今日无新版本发布，但开发重心明显向底层架构重构（如 SQLite 迁移）和系统健壮性修复倾斜。当前积压的待合并 PR 数量较多（389条），项目整体处于密集迭代与架构优化的震荡期，多个历史遗留的高优先级（P1）回归 Bug 正在得到集中攻坚。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
虽然待合并的 PR 数量庞大，但今日维持了 111 个 PR 的合入/关闭速度，整体开发进度稳步推进。重点关注以下已关闭/取得重大进展的修复：
*   **飞书通道严重崩溃修复**：[#87646](https://github.com/openclaw/openclaw/issues/87646)（TypeError 导致消息无法投递）已于今日关闭，相关问题 [#88234](https://github.com/openclaw/openclaw/issues/88234) 的修复补丁已提交。
*   **凭证审计误报修复**：[#84376](https://github.com/openclaw/openclaw/issues/84376) 修复了 `openclaw secrets audit` 将 Codex 内部标记误报为明文密钥（PLAINTEXT_FOUND）的问题。
*   **模型回退逻辑修复**：[#88039](https://github.com/openclaw/openclaw/issues/88039) 修复了会话选定的模型被错误加入 Fallback 列表的回归问题。
*   **会话状态路由重构**：[#89330](https://github.com/openclaw/openclaw/issues/89330) 修复了非持久化 Responses 路由重放过期 Item ID 的缺陷。
*   **子代理权限与生命周期优化**：[#87436](https://github.com/openclaw/openclaw/issues/87436) 修复了 Codex 运行时旧版路由状态复现的问题。

## 4. 社区热点
今日讨论最热烈的问题集中在**多代理会话丢失**、**底层架构迁移**以及**Cron 调度与特定模型的兼容性**：
*   **会话状态丢失引发广泛共鸣**：[#52875](https://github.com/openclaw/openclaw/issues/52875)（21条评论）。自 3 月底升级后，主代理无法通过 `session_send` 联系其他代理。大量用户反馈遇到类似的多代理通信瘫痪问题。
*   **SQLite 迁移架构讨论**：[#88838](https://github.com/openclaw/openclaw/issues/88838)（17条评论）。维护者及核心贡献者在讨论通过“抽象接缝”将核心会话/转录运行状态迁移至 SQLite，以避免高风险的大规模重写。
*   **OpenAI 模型调用参数不兼容**：[#63918](https://github.com/openclaw/openclaw/issues/63918)（17条评论）。Cron 任务在调用 `gpt-5-nano` 时发送了不支持的 `thinking=none` 参数，导致 400 报错，这暴露了底层调度器与最新大模型 API 适配的痛点。

## 5. Bug 与稳定性
今日暴露了多个影响消息收发和系统崩溃的 **P1 级（高优）严重 Bug**：
*   **[P1] sessions.json 无限增长导致 OOM**：[#55334](https://github.com/openclaw/openclaw/issues/55334)
    *   现象：网关内存以 50-100 MB/min 泄漏，最终无响应。原因系 `sessions.json` 从不修剪，且每次包含完整的 `skillsSnapshot`。
    *   状态：**待修复**。
*   **[P1] Windows Web UI 渲染回归**：[#67035](https://github.com/openclaw/openclaw/issues/67035)
    *   现象：输入文本被吞，流式回复需刷新才可见，多发生于 Windows 环境的 Chat 界面。
    *   状态：**待修复**。
*   **[P1] Codex Turn 完成停滞回归**：[#88312](https://github.com/openclaw/openclaw/issues/88312)
    *   现象：5.27 版本在多工具代理回合中，Codex 经常在确认回合完成前停止（以往版本正常）。
    *   状态：**待修复**。
*   **[P1] Telegram 代理重复回复 2-10 次**：[#86519](https://github.com/openclaw/openclaw/issues/86519)
    *   现象：自 5.20 升级后，Telegram 消息会出现严重的重复投递现象。
    *   状态：**待修复**。
*   **[P1] 嵌入式 Cron 自我死锁冲突**：[#88369](https://github.com/openclaw/openclaw/issues/88369)
    *   现象：专用 Cron 代理在运行时仍会抛出 `EmbeddedAttemptSessionTakeoverError`。
    *   状态：**已有对应 PR (#89039) 提交修复**。

## 6. 功能请求与路线图信号
结合近期 Issues 与活跃的 PRs，项目下一个阶段的演进方向明确指向**安全管控**与**通道体验优化**：
*   **内网访问安全控制**：[#39604](https://github.com/openclaw/openclaw/issues/39604) 建议增加 `tools.web.fetch.allowPrivateNetwork` 配置，允许 `web_fetch` 打通本地/内网地址。该需求获得 9 个赞，正等待安全团队审查。
*   **预授权访问与分组 DM 白名单**：PR [#89569](https://github.com/openclaw/openclaw/issues/89569) 提出为 Telegram 和 WhatsApp 添加静默访问请求工作流，支持分组白名单，极大增强了群控机器人的灵活性。
*   **Vault 密钥集成**：PR [#89255](https://github.com/openclaw/openclaw/issues/89255) 提出集成 HashiCorp Vault 插件，以满足企业级安全密钥管理需求。
*   **无缝接入本地大模型**：PR [#89618](https://github.com/openclaw/openclaw/issues/89618) 请求将 Atomic Chat 作为内置的本地模型提供商，简化本地算力的接入门槛。

## 7. 用户反馈摘要
*   **多通道对接痛点**：飞书用户反馈近期升级后极易出现通道彻底断联（如 `Cannot read properties of undefined`），Web UI 用户强烈抱怨输入框“吞字”和流式输出不可见的问题。
*   **内存与资源焦虑**：长期运行的重度用户（如大型 Discord 频道）指出网关的内存泄漏极其明显，亟待 `sessions.json` 的瘦身和修剪机制。
*   **Agent 身份丢失**：本地部署用户（如 Ollama）反馈在重装或升级后，代理会变成“失忆的通用状态”，完全无视工作空间设定的身份和技能。

## 8. 待处理积压
以下关键问题挂起时间较长，且未得到有效解决或合并，需维护团队重点关注：
*   **WebUI 渲染缺陷**：[#77136](https://github.com/openclaw/openclaw/issues/77136)（WebChat 无法渲染部分 assistant 消息）已挂起近一个月，数据未丢但 UI 不显示，严重影响前端体验。
*   **系统内存泄漏**：[#55334](https://github.com/openclaw/openclaw/issues/55334) 导致网关 OOM 的问题属于系统性风险，目前仍标记为 `needs-maintainer-review`。
*   **ACP 父子会话卡死**：[#52249](https://github.com/openclaw/openclaw/issues/52249) 父会话等待子会话完成时陷入停滞，该问题自 3 月底报告至今未能合入有效修复。
*   **消息队列无法持久化**：PR [#82572](https://github.com/openclaw/openclaw/issues/82572) 提议在网关重启时持久化后续队列，防止消息静默丢失。该 PR 体积庞大且对核心架构有较大改动，目前仍在等待验证测试，这是一个亟待解决的可靠性痛点。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 6 月 3 日的各大项目社区动态，为您呈现横向对比与生态深度分析报告。

---

# 📊 2026年 AI 智能体与个人助手开源生态横向分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多模型协同与多端集群”演进的关键架构重构期**。项目普遍面临着**前沿大模型（如 DeepSeek V4、Claude Opus 4.8）API 高频非兼容更新带来的适配阵痛**，以及**本地算力/长上下文与企业级安全隐私需求之间的博弈**。同时，MCP（Model Context Protocol）正在成为事实上的工具调用标准，多通道（IM、桌面端、WebUI）的异构流式输出兼容性及长周期运行下的系统资源泄漏（OOM），是当前全行业亟待解决的共性工程瓶颈。

## 2. 各项目活跃度对比
以下是各项目在过去 24 小时内的核心数据与健康度评估（以处理量Top 6为代表）：

| 项目名称 | Issues 动态 (新/活 -> 关) | PRs 动态 (待合 -> 已合/关) | Release 情况 | 核心焦点 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 464 (280 -> 184) | 500 (389 -> 111) | 无 | 底层 SQLite 迁移、P1 级 OOM 及多代理会话状态丢失修复。 | 🟡 **震荡期** (积压严重，P1 Bug 集中爆发) |
| **LobsterAI** | 0 (0 -> 0) | 47+ (3 -> 47) | 无 | 模型多模态升级、MCP 性能调优、IM 多实例重构。 | 🟢 **极佳** (内部工程团队高效运转，冲刺下一大版本) |
| **ZeroClaw** | 50 (33 -> 17) | 50 (33 -> 17) | **v0.8.0-beta-2** | 发布多智能体运行时与 TUI、DeepSeek V4 适配、通道安全修复。 | 🟢 **活跃** (架构快速演进，响应积极) |
| **IronClaw** | 34 (32 -> 2) | 50 (19 -> 31) | 无 | "Reborn" 底层架构重构、OAuth 集成、异构模型流式响应兼容。 | 🟠 **攻坚期** (底层重构导致前沿模型适配 Bug 频发) |
| **CoPaw** | 48 (26 -> 22) | 32 (23 -> 9) | v1.1.11b1 (预备) | AgentScope 2.0 迁移、**高危安全漏洞(鉴权/路径遍历)集中修复**。 | 🔴 **高危预警** (白帽提交多个 P0 级安全漏洞) |
| **PicoClaw** | - | - | Nightly 构建 | Goroutine 内存泄漏修复、多模型网关参数容错。 | 🟢 **稳健** (快速修复，边界条件打磨) |
| **Hermes Agent**| 50 (47 -> 3) | 50 (47 -> 3) | 无 | 桌面端体验修复、网关 FD 泄漏修复、百万上下文适配。 | 🟡 **积压期** (核心 PR 严重积压，拖累系统稳定性) |

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与重度基座项目**，OpenClaw 具有最庞大的用户基盘和最复杂的接入层。
*   **对比优势**：生态广度第一，全渠道覆盖极深（飞书、Telegram、Discord 等），且正在推进企业级安全管控。其架构具备成为“AI 时代统一通信网关”的潜力。
*   **技术路线差异**：相较于 PicoClaw/LobsterAI 侧重于单机体验优化，OpenClaw 和 ZeroClaw 明显在向**多智能体集群调度**（如父子会话、代理委派）发力。然而，OpenClaw 目前正遭受历史技术债反噬（如 `sessions.json` 导致的 OOM），亟需通过底层数据库迁移（如 SQLite）来解耦内存压力。
*   **社区规模对比**：OpenClaw 拥有最高的绝对数据量（单日近千条 Issue/PR 动态），但同时也背负了最沉重的维护成本（389个待合并PR）；相比之下，NanoBot、LobsterAI 等中大型项目展现出更轻盈、健康的迭代节奏。

## 4. 共同涌现的技术方向与诉求
跨项目分析发现，开发社区正在高度共振于以下几个技术痛点：

1.  **前沿大模型 API 兼容性危机**（涉及 OpenClaw, PicoClaw, IronClaw, ZeroClaw）
    *   **诉求**：各家大模型厂商（如 Anthropic 抛弃 `temperature`，DeepSeek 强制附带 `thinking` 参数）频繁进行破坏性更新。智能体项目急需建立一套**高度灵活的动态参数映射与清洗机制**，避免因硬编码导致的全局 400 报错瘫痪。
2.  **多智能体协同与工具作用域**（涉及 OpenClaw, NanoBot, IronClaw）
    *   **诉求**：单兵作战已无法满足需求，社区强烈要求支持 `delegate_task`、`spawn_subagent` 以及**子代理继承父级 MCP 工具权限**的能力，多模型路由与委员会机制呼声极高。
3.  **MCP 集成稳定性与生命周期管理**（涉及 NanoBot, LobsterAI）
    *   **诉求**：MCP 工具虽被广泛采用，但长连接易断开、启动解析慢的问题突出。开发者需要更健壮的心跳重连机制以及宿主级插件生命周期管理。
4.  **上下文压缩与 Token 降本增效**（涉及 Hermes Agent, CoPaw）
    *   **诉求**：面对百万级上下文窗口，全局唯一的压缩策略不再适用。按模型动态覆盖压缩阈值、按需加载系统提示词以降低 50%+ 的初始 Token 消耗，成为企业级部署的刚需。

## 5. 差异化定位与架构分析
*   **企业级网关 vs 个人本地助手**：OpenClaw 和 ZeroClaw 定位为企业级的消息路由与多智能体网关（强依赖 WebSocket、Webhook、IM Channels）；而 Hermes Agent 则侧重于本地高级用户（TUI/CLI 爱好者）的极致工作站体验。
*   **应用层封装 vs 架构级重构**：NanoBot 和 LobsterAI 目前处于应用层功能大爆发期（如 WebUI Fork、语音权限热切换）；而 IronClaw 则在进行 `reborn-loop` 这种伤筋动骨的底层安全重构；CoPaw 正在经历底层引擎的全面替换（AgentScope 1.x -> 2.0）。
*   **安全防御策略的差异**：CoPaw 遭遇了严重的输入/输出路径遍历与鉴权绕过漏洞，属于**被动防御补救**；而 NullClaw 则在 Zig 层面死磕默认开启的 PII 脱敏引擎，属于**原生安全内置**。

## 6. 社区热度与成熟度分层
*   **快速迭代扩张期**：**ZeroClaw, NanoBot, PicoClaw**。这三个项目外部贡献者活跃，PR 合并丝滑，功能密集上线，正处于势头强劲的上升期。
*   **重构阵痛与质量巩固期**：**OpenClaw, Hermes Agent, IronClaw, CoPaw**。它们都在处理庞大系统带来的反噬问题（内存泄漏、架构重构、高危漏洞、核心 PR 严重积压）。OpenClaw 和 Hermes 面临的最大风险是**维护者精力瓶颈**，大量关键修复未能及时合入。
*   **内部主导冲刺期**：**LobsterAI**。展现出极高的内部工程效率（单日合并 47 PR），外部声音虽少，但代码库正为重大发布做准备。

## 7. 值得关注的趋势信号与开发者建议
1.  **提示词与工具调用的“幻觉隔离”成为标配**：从 ZeroClaw 的思考链泄露到 NullClaw 的 PII 误判可以看出，智能体与底层模型之间的“原始通信”绝不能再直接透传给终端用户。**建议开发者**在 UI 渲染与 Channel 层强制增加一层正则清洗/拦截机制。
2.  **算力下沉与本地网关的崛起**：无缝接入本地大模型以及支持气隙隔离执行模式的出现，意味着企业对数据隐私的严防死守。**建议开发者**在架构设计之初就预留本地/内网 Provider 的统一接入层。
3.  **异步自治工作流爆发**：如 CoPaw 中的 Skill 自动生成与 IronClaw 的分布式编排。未来的 AI 助手将不再只是“被动的对话框”，而是需要后台守护进程与定时调度。**建议开发者**重点关注长周期运行下的内存泄漏与死锁问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 6 月 3 日 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-06-03)

## 1. 今日速览
NanoBot 项目在过去 24 小时内维持了**极高的活跃度与健康的迭代节奏**。社区共提交了 10 个 Issue（7 新开，3 关闭）和 27 个 PR（18 个顺利合并/关闭）。今日的开发重心主要集中在**多渠道接入（QQ、邮件附件）、WebUI 交互体验优化、以及 MCP 协议稳定性的提升**。特别是多名外部贡献者提交了高质量的 Bugfix 和 PR，显示项目社区参与度正处于高峰期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，项目在多渠道支持、WebUI 体验和系统健壮性上迈出了坚实的一步：
* **多渠道接入与完善**：
  * 成功合入 QQ（Napcat）频道支持，基于 OneBot v11 实现了私聊和群聊的 Forward WebSocket 接入 ([PR #4146](https://github.com/HKUDS/nanobot/pull/4146))。
  * 增加了 Email 渠道的媒体文件附件支持，包含附件大小限制与优雅降级 ([PR #4162](https://github.com/HKUDS/nanobot/pull/4162))。
* **WebUI 体验全面升级**：
  * 修复了侧边栏“Chats”分组无法按时间排序的问题 ([PR #4151](https://github.com/HKUDS/nanobot/pull/4151))。
  * 实现了刷新页面时路由状态与活动会话的持久化恢复 ([PR #4150](https://github.com/HKUDS/nanobot/pull/4150))。
  * 优化了回复复制功能，在不支持 Clipboard API 的环境中提供兜底方案 ([PR #4149](https://github.com/HKUDS/nanobot/pull/4149))。
  * 修复了启动时 Fetch 请求无限挂起的问题 ([PR #4157](https://github.com/HKUDS/nanobot/pull/4157))，新增了 Prompt 轨迹追踪以提升长对话体验 ([PR #4156](https://github.com/HKUDS/nanobot/pull/4156))。
* **架构重构与稳定性**：
  * 完成了对 WebUI Gateway 依赖的拆分，将 HTTP 路由从 WebSocket 中解耦，提升了网关可维护性 ([PR #4115](https://github.com/HKUDS/nanobot/pull/4115))。
  * 修复了 `read_file` 在结果过大被卸载到磁盘后引发的无限循环死结 ([PR #4155](https://github.com/HKUDS/nanobot/pull/4155))。
  * 重构了 Dream 类，将其统一到标准的 agent loop 中，降低了系统复杂度 ([PR #3990](https://github.com/HKUDS/nanobot/pull/3990))。

## 4. 社区热点
今日社区关注焦点集中在**多模型 API 兼容性**、**MCP 连接稳定性**以及**部署成本优化**上：
* **[讨论] API 缓存未命中成本优化** ([Issue #4142](https://github.com/HKUDS/nanobot/issues/4142))：作者 hamb1y 针对 DeepSeek v4 等热门模型的 API 缓存特性，探讨了如何在 NanoBot 中优化 cache-miss input tokens 以降低使用成本，引发了社区对大模型计费策略底层适配的关注。
* **MCP 服务偶发性断开** ([Issue #4168](https://github.com/HKUDS/nanobot/issues/4168))：用户 tjc0726 报告在使用一段时间后 MCP 服务会意外终止（抛出 `McpError: Session terminated`），反映出当前在维持长周期 MCP 连接时可能存在心跳或重连机制缺陷。
* **WebUI pip 安装失败** ([Issue #4158](https://github.com/HKUDS/nanobot/issues/4158))：当使用 `uv tool` 安装并启动 NanoBot 时，通过 WebUI 安装 CLI App 会报错（找不到 pip 模块），此痛点迅速得到了社区的 PR 修复响应。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已具备修复方案：
* **🔴 严重：对话历史出现孤立 Tool Result** ([Issue #4006](https://github.com/HKUDS/nanobot/issues/4006))
  * **现象**：由于 `tool_call_id` 匹配错误，导致对话历史中出现无法配对的 `role: "tool"` 消息。
  * **影响**：导致严格校验的 API（如 OpenAI / Anthropic）直接拒绝请求，甚至引发轨迹渲染崩溃。目前尚在排查解决中。
* **🟠 中度：MCP 服务连接随机断开** ([Issue #4168](https://github.com/HKUDS/nanobot/issues/4168))：导致 Agent 在执行长任务时突然失去工具能力，必须重启系统，目前无修复 PR。
* **🟡 低度：OpenAI 兼容 API 生成图片失败** ([Issue #4167](https://github.com/HKUDS/nanobot/issues/4167))：部分第三方 API 不支持 `response_format` 参数导致报错。结合今天提出的自定义 Provider 功能请求 ([Issue #4132](https://github.com/HKUDS/nanobot/issues/4132))，可作为一块优化。
* **✅ 已修复：`read_file` 卸载循环死结** ([Issue #4153](https://github.com/HKUDS/nanobot/issues/4153) / [PR #4155](https://github.com/HKUDS/nanobot/pull/4155))。
* **✅ 已修复：Email 渠道空邮件发送问题** ([PR #4165](https://github.com/HKUDS/nanobot/pull/4165))。

## 6. 功能请求与路线图信号
根据最新的 Issue 和 PR 动向，项目下一步的演进方向释放出以下信号：
* **子代理 MCP 权限共享**：用户提出子 Agent（`spawn()` 方法）目前无法访问父级 MCP 服务的工具 ([Issue #4166](https://github.com/HKUDS/nanobot/issues/4166))。这表明社区正在将 NanoBot 应用于复杂的多智能体协同场景，增强 Tool 的作用域配置是必然需求。
* **更灵活的图像生成 Provider 适配**：用户呼吁支持通过 `config.json` 动态配置自定义图像生成 API ([Issue #4132](https://github.com/HKUDS/nanobot/issues/4132))。
* **一键云端部署支持**：正在审核的 PR ([PR #4139](https://github.com/HKUDS/nanobot/pull/4139)) 提出新增针对 HuggingFace Spaces 和 ModelScope 的零依赖云平台检测与部署层，这将极大降低用户的部署门槛。
* **WebUI 会话分支能力**：正在审核的 PR ([PR #4163](https://github.com/HKUDS/nanobot/pull/4163)) 引入了基于历史消息的 "Fork from here" 功能，允许用户从任意节点重新发起对话，这将大幅提升 WebUI 上的提示词调试效率。

## 7. 用户反馈摘要
从 Issue 提炼出的真实用户痛点和使用场景如下：
* **生态工具兼容性**：用户大量尝试将 NanoBot 接入个人知识库和第三方模型（如 Notion MCP、Agnes AI），但常常卡在 API 规范不完全兼容上，呼吁工具模块提供更宽容的降级策略和灵活的自定义配置入口。
* **并发与内存管理**：开发者反馈在极长上下文或多并发写入时存在游标冲突（如 [Issue #4081](https://github.com/HKUDS/nanobot/issues/4081)），表明在高级生产力场景下，底层的异步锁和文件状态管理仍需加固。
* **异步工作流期望**：针对 `uv tool` 的安装兼容问题修复快速被提出（[PR #4164](https://github.com/HKUDS/nanobot/pull/4164)），反映出开发者群体正在快速拥抱现代化的 Python 包管理工具（如 uv），要求 NanoBot 在各种包管理器下都能表现完美。

## 8. 待处理积压
以下是值得维护团队关注的积压或长期追踪议题：
* **[OPEN] Notion MCP 接入失败** ([Issue #1168](https://github.com/HKUDS/nanobot/issues/1168))：自 2 月份开启至今，多名用户核实 API 无误但无法连接，维护者需关注是否为底层 WebSocket/SSE 处理缺陷。
* **[OPEN] 并发写入游标分配重复** ([Issue #4081](https://github.com/HKUDS/nanobot/issues/4081))：`MemoryStore.append_history()` 缺乏文件锁导致高并发下可能出现数据损坏，这是一个深层的数据安全性隐患。
* **[OPEN] WebSocket 校验权限拒绝未抛出事件** ([PR #4134](https://github.com/HKUDS/nanobot/pull/4134))：已提交修复代码但尚未合并，该问题可能导致客户端无法感知消息被拒绝的状态，建议优先排期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-03)

> **数据来源**: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | **分析周期**: 过去24小时

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持了**极高的社区活跃度**，共产生 50 条 Issue 更新（47 条新开/活跃，3 条已关闭）和 50 条 PR 更新（47 条待合并，3 条已合并/关闭）。项目的关注焦点明显呈现**两极分化**：一方面，社区对 Desktop 桌面端客户端的兼容性与 UI 体验提出了大量反馈；另一方面，核心网关 的稳定性（如内存泄漏、僵尸任务）和高并发路由问题亟待官方修复。今日**无新版本发布**，大量积压的 Bug 修复 PR（尤其是来自核心贡献者 deepujain 的系列提交）仍在等待合并，预示着项目可能正在为下一个重要的小版本更新进行蓄力。

## 2. 版本发布

**今日无新版本发布。** 
目前项目仍处于大量收集缺陷和集中修复阶段，v0.15.x 系列遗留问题正在被集中处理。

---

## 3. 项目进展

今日共有 3 个 PR 被合并/关闭，标志着项目在平台适配和底层架构优化上取得了具体进展：

*   **feat(gateway): structured stream-event protocol + Telegram draft formatting parity** ([PR #37250](https://github.com/NousResearch/hermes-agent/pull/37250))
    *   **进展意义**: 重构了 Gateway 的流式事件渲染逻辑，引入了 `smart-agent/smart-gateway` 分离架构。使得 Agent 不再需要硬编码各平台的格式，从根本上改善了 Telegram 平台上的流式输出体验。这是向多平台高度一致性迈出的重要架构级一步。
*   **fix(discord): render markdown tables readably** ([PR #37676](https://github.com/NousResearch/hermes-agent/pull/37676))
    *   **进展意义**: 改善了 Discord 适配器的 Markdown 渲染能力，将 GFM 表格转换为对齐的纯文本代码块，解决了 Discord 用户端长文本阅读体验差的问题。

---

## 4. 社区热点

今日讨论度最高、最受关注的话题集中在**上下文策略、安全防御误报与 Desktop 架构**：

1.  **🔥 [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) (👍 3, 💬 5) - 按模型/提供商覆盖压缩阈值**
    *   **诉求**: 随着百万级上下文模型（DeepSeek V4 Flash, Gemini 2.5 Pro 等）的普及，全局唯一的 `compression.threshold` 成为瓶颈。社区呼吁引入细粒度的压缩策略，以平衡长上下文窗口与高昂的 Token 成本。
2.  **🔥 [Issue #37549](https://github.com/NousResearch/hermes-agent/issues/37549) (👍 2, 💬 2) - Desktop 聊天记录界面疯狂闪烁**
    *   **诉求**: Desktop 用户强烈吐槽在流式输出时，滚动条会自动跳回底部，严重干扰阅读中间部分的内容。这暴露了当前前端 UI 状态管理的缺陷。
3.  **🔥 [Issue #36934](https://github.com/NousResearch/hermes-agent/issues/36934) (💬 3) - `/steer` 指令被高防御模型误判为注入攻击**
    *   **诉求**: 在使用 Claude Opus 4.8 等高级模型时，通过 tool-channel 传递的 `/steer` 人工干预指令触发了安全防御机制。社区希望在系统提示与底层工具投递机制之间找到更安全的通道隔离方案。

---

## 5. Bug 与稳定性

今日报告了多个高危 Bug，主要集中在**系统资源泄漏、底层通信阻塞和安装阻断**，按严重程度排列如下：

### P0/P1 级（严重阻碍核心功能）
*   **[Issue #37011](https://github.com/NousResearch/hermes-agent/issues/37011) [P1] - Gateway 文件描述符泄漏导致僵尸状态**
    *   **现象**: 网关在长时间运行（约12小时）或遭遇断线重连时，未正确关闭 `sqlite3` 连接，导致耗尽系统 fd 限制而崩溃静默。
    *   **状态**: **已提交针对性修复**，见 [PR #37679](https://github.com/NousResearch/hermes-agent/pull/37679)。
*   **[Issue #37677](https://github.com/NousResearch/hermes-agent/issues/37677) [P1] - 超大图片永久性损坏对话线程**
    *   **现象**: 上传超过 8000px 的图片（特别是触发 `browser_vision` 时）会绕过尺寸校验（目前仅检查字节数），导致随后每一轮对话都重放该图片，触发 Anthropic API 报错，**该对话线程永久报废**。
*   **[Issue #7725](https://github.com/NousResearch/hermes-agent/issues/7725) [P1] - `session_search` 严重挂起**
    *   **现象**: 升级后，复杂搜索会导致进程挂起超过 5 分钟，且无视设定的超时和取消机制。
*   **[Issue #37680](https://github.com/NousResearch/hermes-agent/issues/37680) [P2] - TUI 模式下 Shift+字母失效**
    *   **现象**: 终端界面（如 Ghostty）中，由于对 Kitty 键盘协议的处理缺陷，大写字母输入失效。

### P2 级（环境与网络兼容性）
*   **[Issue #37662](https://github.com/NousResearch/hermes-agent/issues/37662) [P2] - IPv6 导致网络请求无限挂起**
    *   **现象**: `httpx` 优先尝试 IPv6 导致部分提供商（如 opencode.ai）连接卡死，社区建议引入 Happy Eyeballs 算法。
*   **[Issue #36980](https://github.com/NousResearch/hermes-agent/issues/36980) [P2] - macOS 安装器编译失败**

---

## 6. 功能请求与路线图信号

从今日的 Feature Request 中，可以清晰看到项目正在向**多智能体协作**和**分布式部署**演进：

*   **多模型协作委员会机制**：[Issue #37569](https://github.com/NousResearch/hermes-agent/issues/37569) 提出引入 `/council` 命令，允许多个前沿模型独立生成方案，并由评审模型进行汇总。结合 [Issue #35437](https://github.com/NousResearch/hermes-agent/issues/35437) 呼吁为 `delegate_task` 增加模型路由参数，**“多模型调度与任务委派”** 极有可能是下个版本的核心更新方向。
*   **Desktop 客户端“瘦模式”**：[Issue #36970](https://github.com/NousResearch/hermes-agent/issues/36970) 和 [Issue #37663](https://github.com/NousResearch/hermes-agent/issues/36970) 强烈呼吁 Desktop 端支持一键连接远程 VPS 上的 Hermes 实例，而不必在本地重头安装。
*   **生态与插件扩展**：
    *   [Issue #36196](https://github.com/NousResearch/hermes-agent/issues/36196): 支持具备 100 万上下文能力的 MinimaxM3 模型。
    *   [Issue #37661](https://github.com/NousResearch/hermes-agent/issues/37661): 社区开发者已经为 Mem0 构建了带时间维度的记忆去重插件，期望官方集成。

---

## 7. 用户反馈摘要

通过分析今日 Issues，当前用户的真实体验反馈如下：
*   **👎 痛点 1：Desktop 客户端与后端状态不同步**：用户在使用 Windows/Mac 客户端时，经常遇到 OAuth 登录成功但仍提示无法解析提供商的问题（[Issue #37515](https://github.com/NousResearch/hermes-agent/issues/37515)），且部分环境变量（如 `.env`）在工具加载时未被正确读取。
*   **👎 痛点 2：自动化任务失控**：在无人值守的 Kanban 场景中，由于缺乏完善的熔断机制，一个简单的协议违例可能导致任务在短时间内重试数千次（[Issue #37689](https://github.com/NousResearch/hermes-agent/issues/37689)），消耗大量 API 额度。
*   **👍 满意点**：社区对 Hermes 支持丰富的前沿模型（如各种百万级上下文大模型）表示认可，并且高级用户开始深度依赖其 TUI 和 CLI 模式进行复杂的自动化工作流编排。

---

## 8. 待处理积压

以下重要领域存在明显的积压，需要核心团队投入精力进行 Review 和 Merge：

1.  **核心贡献者 deepujain 的系列修复 PR**：该贡献者在 5 月 23 日集中提交了大量针对核心组件（如 MCP 空闲保活、SQLite WAL 锁、Kanban 数据库防护等）的修复 PR（[PR #30692](https://github.com/NousResearch/hermes-agent/pull/30692) 至 [PR #30702](https://github.com/NousResearch/hermes-agent/pull/30702)）。**这 10 余个 PR 至今已积压 10 天未被合并**，严重阻碍了系统稳定性的更新。
2.  **Desktop 架构重构需求悬而未决**：大量关于 Desktop 端的 bug 报告和架构重构请求（如安装器逻辑、UI 闪烁修复）目前多为 Open 状态，需要前端维护者进行统一规划。
3.  **跨平台适配优化**：包括 Nix 构建哈希不匹配（[Issue #37692](https://github.com/NousResearch/hermes-agent/issues/37692)）等包管理器级别的问题亟待响应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the daily dynamic report for the PicoClaw project based on the provided data.

---

# PicoClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
PicoClaw 项目在 past 24 小时内保持了**极高的开发活跃度与健康度**。项目成功合并了 5 个关键 PR，并成功发布了 `v0.2.9-nightly.20260602.426046fc` 版本。当前开发重心高度聚焦于**系统稳定性、多模型兼容性（如 Claude 和智谱）以及 Agent 底层机制优化**。值得一提的是，核心开发者在一天内密集提交了多个高质量修复，有效清空了近期由于底层重构引发的会话管理、上下文压缩和渠道通信等核心缺陷。目前仍有 9 个待合并 PR 正在审阅中，显示出项目充沛的后续发力空间。

## 2. 版本发布
- **Nightly Build: v0.2.9-nightly.20260602.426046fc**
  - **更新性质**：自动化的每日构建版本。
  - **包含内容**：主要整合了今日合并的几项重要修复，包括 Zhipu API 视觉模型错误处理、LLM HTTP 瞬态错误重试机制，以及关键的 Goroutine 内存泄漏修复。
  - **迁移/注意事项**：官方提醒此为自动化构建，可能存在不稳定性，建议测试环境优先验证，生产环境谨慎更新。
  - **完整变更日志**：[v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共合并/关闭了 **5** 个 PR，在底层稳定性和多渠道兼容性上迈出了坚实的一步：
- **强化 LLM 容错与重试**：[PR #2991](https://github.com/sipeed/picoclaw/pull/2991) 重构了 LLM HTTP 瞬态错误的分类器，修复了在没有备用模型时直接崩溃的问题，显著提升了网关鲁棒性。
- **解决核心内存泄漏**：[PR #2986](https://github.com/sipeed/picoclaw/pull/2986) 为 `SessionManager` 添加了 `Stop()` 机制，修复了长期困扰测试和多实例场景的 Goroutine 泄漏问题。
- **多模态渠道适配**：[PR #2989](https://github.com/sipeed/picoclaw/pull/2989) 加入了对智谱 API 错误码 1210 的识别，使微信渠道发送图片时的降级重试机制得以正常触发。
- **文档与冗余清理**：新增了专门针对 PicoClaw 的 Agent Skill 详细操作指南（[PR #2994](https://github.com/sipeed/picoclaw/pull/2994) 合并，同时关闭了重复的 [PR #2993](https://github.com/sipeed/picoclaw/pull/2993)）；另外关闭了一个修改 Docker 特权的陈旧 PR [PR #2239](https://github.com/sipeed/picoclaw/pull/2239)。

## 4. 社区热点
- **流式响应与请求配置** ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404))：该项目中今日讨论最火热的 Issue（评论数 10）。用户强烈建议在全局配置中增加 `streaming: true` 选项，以完美兼容 OpenAI 等主流客户端的流式交互范式。这反映出用户对 PicoClaw 作为 AI 中转网关时的响应实时性有极高要求。
- **WebSocket 协议确定性** ([Issue #2984](https://github.com/sipeed/picoclaw/issues/2984))：由社区开发者在昨日提出，诉求是要求 Pico Protocol 的 WS 客户端增加明确的话轮完成信号，表明外部生态开发者正在深度集成 PicoClaw，对协议状态机的严谨性提出了更高要求。

## 5. Bug 与稳定性
今日报告/处理了多个核心 Bug，绝大部分已被开发者在当天快速定位并提交 PR 修复：
- **🔥 [High] 微信渠道+智谱 GLM-5 视觉 API 兼容崩溃**：发送图片触发参数错误 ([Issue #2943](https://github.com/sipeed/picoclaw/issues/2943))。
  - *状态*：**已修复**。通过 [PR #2989](https://github.com/sipeed/picoclaw/pull/2989) 完善了错误正则匹配。
- **🔥 [High] v0.2.9 升级导致 Web UI 会话历史错乱**：新会话加载了旧会话的消息 ([Issue #2972](https://github.com/sipeed/picoclaw/issues/2972)，见 PR 描述)。
  - *状态*：**已修复**。通过 [PR #2992](https://github.com/sipeed/picoclaw/pull/2992) 修复了别名提升时的历史记录污染逻辑。
- **🔥 [High] 流式会话中工具调用意外被丢弃**：[Issue #2958](https://github.com/sipeed/picoclaw/issues/2958)
  - *状态*：**已修复**。[PR #2987](https://github.com/sipeed/picoclaw/pull/2987) 调整了过滤逻辑，防止 `tool_calls` 被当做辅助消息清除。
- **⚠️ [Medium] Web UI 多轮对话无法显示完整历史**：[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)
  - *状态*：**已修复**。[PR #2990](https://github.com/sipeed/picoclaw/pull/2990) 修复了读取 JSONL 历史时的分页/Skip 逻辑。
- **⚠️ [Medium] Goroutine 泄漏导致内存持续增长**：
  - *状态*：**已修复**。[PR #2986](https://github.com/sipeed/picoclaw/pull/2986)。

## 6. 功能请求与路线图信号
- **前沿大模型快速适配**：Claude Opus 系列模型抛弃了 `temperature` 参数，导致 PicoClaw 出现 400 错误。[PR #2948](https://github.com/sipeed/picoclaw/pull/2948) 提出了针对性适配。这释放了一个信号：项目需要建立一套**更加灵活的模型参数映射机制**，以应对闭源大模型厂商频繁的非兼容性 API 更新。
- **Web 搜索工具兼容性升级**：[PR #2951](https://github.com/sipeed/picoclaw/pull/2951) 将原生的 Web Search 转换为标准的 `function` 类型，这表明 PicoClaw 正在致力于提高各种 OpenAI 兼容派生 API 的通用接入能力。
- **独立追踪器（可观测性）**：[PR #2945](https://github.com/sipeed/picoclaw/pull/2945) 提议开发 `picoclaw-tracer`。如果合并，将极大增强本地开发者的 Debug 体验，这极有可能会作为 v0.3.0 的重要附属工具纳入版本规划。

## 7. 用户反馈摘要
从近两天的 Issue 和 PR 描述中，可以提炼出以下典型用户画像与痛点：
1. **私有化部署与网关代理用户**：大量用户将 PicoClaw 作为多模型（OpenAI, Claude, 智谱）的统一中转网关。API 厂商的任何微小参数变动（如参数抛弃、非标错误码）都会在 PicoClaw 放大为系统级故障。
2. **Web UI 重度使用者**：会话历史显示错误、`/context` 参数显示不直观是高频吐槽点，表明前端 UI 与底层 JSONL 会话记录同步逻辑需要系统性重构。
3. **可观测性缺失**：用户在配置复杂 LLM 提示词和工具链时，急需得知底层真实的 Token 消耗和上下文压缩触发阈值（如 [PR #2988](https://github.com/sipeed/picoclaw/pull/2988) 和 [PR #2985](https://github.com/sipeed/picoclaw/pull/2985) 所述），说明用户对成本控制极其敏感。

## 8. 待处理积压
以下重要 PR/Issue 已被标记为 `stale` 或长期悬而未决，需核心维护者及时介入Review，避免社区贡献者流失：
- [PR #2951](https://github.com/sipeed/picoclaw/pull/2951)：修复 OpenAI web_search 兼容性问题。
- [PR #2948](https://github.com/sipeed/picoclaw/pull/2948)：修复 Claude Opus 模型温度参数报错（该问题严重影响新版模型调用）。
- [PR #2945](https://github.com/sipeed/picoclaw/pull/2945)：新增 `picoclaw-tracer` 调试工具，属于重大功能新增，需尽快评估合并价值。
- [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)：全局 HTTP 流式请求配置，该需求呼声极高，需要官方明确表态是纳入排期还是存在架构冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 NanoClaw (github.com/qwibitai/nanoclaw) 项目 2026-06-03 动态日报：

# 📊 NanoClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目呈现出**中等偏高的活跃度**。社区共产生了 7 项 Pull Request 更新（其中 4 项成功合并/关闭，3 项待处理），同时有 1 个新 Issue 创建。从合并的 PR 来看，项目当前正处于**基础设施加固与安全修复阶段**，核心贡献者集中处理了容器安全、运行时消息标准化以及插件钩子等底层架构优化。今日没有发布新版本，代码库处于稳步迭代状态。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 4 个重要的 Pull Request 被合并或关闭，显著提升了项目的稳定性和安全性：

*   **🛡️ 安全漏洞修复 (CWE-78)**：由 @sebastiondev 提交的 [PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538) 被关闭。该 PR 修复了容器运行时 (`container-runner`) 中的 OS 命令注入漏洞，在 Dockerfile 插值前增加了包名验证，极大增强了平台抵御恶意构造攻击的能力。
*   **🤖 运行时状态机制标准化**：由 @pinetreelic 提交的 [PR #2674](https://github.com/nanocoai/nanoclaw/pull/2674) 被关闭。引入了机械化的长运行状态标签、元数据以及内部通道防护，有效防止了 Agent 运行时的“自循环”问题。
*   **🔌 插件生命周期系统落地**：由 @cyber-rye 提交的 [PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193)（历经数月）终于关闭。新增了宿主端插件钩子 (`onStartup/onShutdown`)，允许插件在消息循环前启动长服务，为未来的生态扩展打下基础。
*   **🌐 Webchat 技能集成**：由 @javexed 提交的 [PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069) 被关闭，标志着 Webchat 频道功能相关代码已就绪。

## 4. 社区热点
今日新增的唯一 Issue 是一个极具时代特色的应用场景探讨：
*   **AI 教育自动化应用**：[@smartgain2026](https://github.com/smartgain2026) 提交了 [Issue #2673](https://github.com/nanocoai/nanoclaw/issues/2673) (Automated Student Grading System)。该 Issue 详细描述了通过 AI Video Prompt 生成一个适用于巴布亚新几内亚中学的“学生自动评分与排名系统”的愿景（包含手机端查看表格等 UI 设定）。虽然目前评论数和点赞数为 0，但这反映了社区正在尝试将 NanoClaw 的 AI 智能体能力下沉到垂直领域的真实工作流中。

## 5. Bug 与稳定性
今日维护者和社区集中修复并提交了多个 Bug fix PR，涉及通信、接口和容器挂载问题：

*   **严重 (Medium) - MCP 配置与网络代理兼容性失效**：[@apparentsoft](https://github.com/apparentsoft) 提交了 [PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672) 修复 Codex provider 分支中 MCP 配置不支持最新联合类型，以及代理环境下仅使用 HTTP 传输的 bug。*(状态: Open)*
*   **中等 (Medium) - Agent 容器内附件读取失败**：[@Ari-CMC](https://github.com/Ari-CMC) 提交了 [PR #2671](https://github.com/nanocoai/nanoclaw/pull/2671) 修复了频道适配器格式化引用目标不存在的问题，通过只读绑定挂载解决容器内工作区路径缺失。*(状态: Open)*
*   **低 (Low) - CLI 平台 ID 命名空间冗余**：[@alex-shepel](https://github.com/alex-shepel) 提交的 [PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187) 为 CLI 频道添加了例外处理，防止其被错误地添加命名空间前缀。*(状态: Open，已持续一个月)*

## 6. 功能请求与路线图信号
*   **教育领域自动化工作流**：如 [Issue #2673](https://github.com/nanocoai/nanoclaw/issues/2673) 所示，结合刚刚合并的插件钩子系统 ([PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193)) 和 Webchat 技能 ([PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069))，预示着 NanoClaw 未来可能极易于被封装为“开箱即用”的垂直行业 AI 助手（如教育评分机器人）。
*   **对 MCP (Model Context Protocol) 的深化支持**：[PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672) 表明项目正在深度集成和适配业界最新的 MCP 传输标准，这将是接入更广泛的 LLM 工具生态的关键一步。

## 7. 用户反馈摘要
*   **痛点 - 本地容器挂载隔离性过严**：[PR #2671](https://github.com/nanocoai/nanoclaw/pull/2671) 暴露出用户在使用多通道适配器处理文件时，由于容器机制设计导致了路径不可达。这表明部分高级用户正在积极将 NanoClaw 部署于需要处理大量文件附件的生产环境。
*   **期待 - 标准化状态输出**：从 [PR #2674](https://github.com/nanocoai/nanoclaw/pull/2674) 的关闭可以推断，此前社区对“Agent 长时间运行时状态不清晰”或“内部消息死循环”有过负面反馈，现已通过元数据打标在底层得到解决。

## 8. 待处理积压
*   **长期未合并的修复 PR**：[@alex-shepel](https://github.com/alex-shepel) 的 [PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187) 自 5 月初提交以来一直处于 Open 状态，最后一次更新在昨日。建议维护者评估该 CLI 修复的优先级并予以合并或反馈。
*   **高优网络/接口修复亟待 Review**：今日新开的 [PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672) (MCP 兼容性) 和 [PR #2671](https://github.com/nanocoai/nanoclaw/pull/2671) (附件挂载) 直接影响用户在复杂网络环境下的核心使用体验，建议维护团队优先进行 Code Review。

---
*本报告由 AI 智能体基于 GitHub 公共数据自动生成，数据截止至 2026-06-03。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是为您生成的 2026 年 6 月 3 日 NullClaw 项目动态日报：

# 🐾 NullClaw 项目动态日报 (2026-06-03)

### 1. 今日速览
过去 24 小时，NullClaw 项目整体处于**稳步向前但相对平静**的状态，未发布新的软件版本。项目今日共有 1 个 Issue 和 1 个 PR 产生更新，社区活跃度呈现“低讨论量、高针对性”的特点。当前的核心焦点集中在 PII（个人身份信息）脱敏模块的误判问题上，开发者展现出极快的响应速度，在问题暴露的同时即提交了修复方案。整体来看，项目健康度良好，正致力于打磨系统级边缘场景的稳定性。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
*今日无已合并的 PR 或已关闭的 Issue。*
- 项目当前正处于 **PR #945** 的代码审查阶段。该 PR 旨在解决脱敏模块的边界场景缺陷，一旦合并，将显著提升智能体在处理系统时间时的准确性。这标志着项目正从“基础功能实现”向“提升细粒度体验”的阶段迈进。

### 4. 社区热点
今日社区最活跃的讨论集中在 PII 脱敏机制的误伤问题上：
- **核心问题**: [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) 报告了一个影响用户体验的关键缺陷。由于 PII 脱敏器（自 2026 年 5 月的 `41cdb493` 提交后默认开启）过于激进，导致智能体在执行 `date` 等系统时间命令时，输出结果中的数字被错误识别为电话号码并被替换为 `[PHONE_X]` 占位符。
- **诉求分析**: 这一问题反映了社区对**AI 智能体执行终端命令可靠性**的高度关注。PII 隐私保护固然重要，但不能以牺牲基本的系统状态输出为代价。用户期望在安全与可用性之间找到平衡。

### 5. Bug 与稳定性
按严重程度评估，今日报告了 1 个影响业务逻辑的 Bug：
- **🟡 中等严重度 Bug**: PII 脱敏器将日期/时间误判为电话号码
  - **表现**: 智能体运行 `date` 命令时，时间戳被错误替换，导致后续依赖时间输出的逻辑可能失效。
  - **状态**: **已有 Fix PR**。
  - **修复进度**: 开发者 `vernonstinebaker` 已在同一时间提交了 [PR #945](https://github.com/nullclaw/nullclaw/pull/945)。该方案在 `src/redaction.zig` 的 `matchPhone` 函数中引入了 `isDateLike()` 守卫机制，能够有效拦截并放行符合 ISO 日期格式（如 `YYYY-MM-DD hh` 和 `DD-MM-YYYY hh`）的字符串。

### 6. 功能请求与路线图信号
- 今日无新增的显性功能请求。
- **路线图信号**: 通过 [PR #945](https://github.com/nullclaw/nullclaw/pull/945) 的细节可以看出，NullClaw 正在加强其**内置安全与合规性（Default On PII Redaction）**。未来项目在强化默认隐私保护的同时，可能会持续优化规则引擎，以减少正则匹配带来的 False Positives（误报）。下一版本预计将包含对各种系统输出格式的更鲁棒的识别。

### 7. 用户反馈摘要
- **痛点**: 从 [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) 中可以提炼出用户的典型痛点：**AI 智能体在处理底层系统交互时的“幻觉”或“输出失真”**。用户运行时间命令通常是为了进行定时任务、日志记录或作为后续推理的上下文。脱敏器的介入直接破坏了这一上下文链条，导致用户对 AI 执行结果的信任度下降。
- **反馈表现**: 目前 Issue 评论数为 0，说明该问题属于较易复现的逻辑盲区，用户可能正在等待 [PR #945](https://github.com/nullclaw/nullclaw/pull/945) 的合并验证。

### 8. 待处理积压
- 虽然今日的 Issue 响应极其迅速，但仍需提醒项目维护者关注 **待办队列中的存量旧 Issue**。今日的 PR 修复了 ISO 标准格式的日期，但建议在 PR Review 时考虑：其他非标准日期格式（如美式 `MM/DD/YYYY` 或纯数字时间戳 `Unix Epoch`）是否也会触发同样的 `matchPhone` 误报？是否需要在本次修复中一并覆盖，以避免未来产生重复的 Bug 报告。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-03)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览
IronClaw 项目今日保持**极高的开发活跃度**，核心贡献者团队正在全力推进底层架构的 `reborn` 迭代与多渠道集成工作。过去 24 小时内，项目共处理了 50 个 Pull Requests（其中 31 个已合并/关闭），并产生了 34 条 Issue 动态（新开/活跃 32 条，仅关闭 2 条）。

今日的动态呈现出明显的**“重 PR、重构与安全加固为主”**的特征。核心开发者 `henrypark133` 和 `serrrfirat` 集中提交了大量针对 Agent Loop、子代理（Subagent）和主机内核的安全防护与架构重构 PR。同时，QA 团队基于新接入的 Qwen 和 MiniMax 模型进行了一轮高强度的集成测试，暴露了前端 UI 和模型兼容性方面的多个阻断性问题。

整体而言，项目正处于底层核心重构（Reborn）的攻坚期与多模型适配的阵痛期，代码更迭量巨大，系统稳定性正在通过密集的测试和修复快速收拢。

---

## 2. 版本发布
**本日无新版本发布。**
结合当前密集的 DB Migration、Reborn 架构调整和 OAuth 集成 PR 来看，项目正在为下一个大版本（可能是 v2.0 正式版）积累代码，目前尚未进入 Release 冻结期。

---

## 3. 项目进展
今日共有 **31 个 PR 被合并或关闭**，项目的推进主要集中在以下三个关键领域：

*   **WebUI v2 与第三方 OAuth 集成落地**
    *   合并了 **[#4332 Enable WebUI v2 DCR extension setup](https://github.com/nearai/ironclaw/pull/4332)**，使 WebUI v2 能够支持 DCR 支持的扩展 OAuth 设置。
    *   集中修复了 Google OAuth 在运行时的授权门禁问题，包括 **[#4337 Fix Google OAuth prompts for runtime auth gates](https://github.com/nearai/ironclaw/pull/4337)**、**[#4346 Fix Gmail OAuth auth gate requirements](https://github.com/nearai/ironclaw/pull/4346)** 和 **[#4345 Wire Notion DCR OAuth for Reborn WebUI](https://github.com/nearai/ironclaw/pull/4345)**。这标志着 WebUI v2 在生产级身份认证对接上迈出了关键一步。
*   **Agent Loop (Reborn) 稳定性与边界条件修复**
    *   合并了 **[#4318 PR17: Add trigger first-party capabilities](https://github.com/nearai/ironclaw/pull/4318)**，引入了触发器相关的一等公民能力。
    *   修复了本地开发环境的内存挂载问题 **[#4357 Fix local-dev Reborn memory mount](https://github.com/nearai/ironclaw/pull/4357)**。
    *   修复了上下文压缩的重试幂等性问题 **[#4370 Fix compaction summary retry idempotency](https://github.com/nearai/ironclaw/pull/4370)**。
*   **数据安全与协议合规**
    *   合并了 **[#4372 Zeroize HTTP credential carriers](https://github.com/nearai/ironclaw/pull/4372)**，在 HTTP 请求生命周期结束后对包含凭证的缓冲区进行归零擦除，显著提升了内存安全基线。

---

## 4. 社区热点
由于今日主要处于高强度的代码提交期，社区讨论以核心开发者的架构设计追踪为主。

*   **最活跃的架构拆解：**
    用户/开发者 `henrypark133` 今日集中提出了近 20 个带有 `[reborn-loop]` 和 `[reborn-subagent]` 标签的架构重构 Issue。其中 **[#4358 L1: Gate replay re-validates current policy](https://github.com/nearai/ironclaw/issues/4358)** 和 **[#4359 L2: Prompt safety wiring](https://github.com/nearai/ironclaw/issues/4359)** 奠定了下一阶段 Agent 循环的安全基础。这些 Issue 深入剖析了当前系统在重放攻击、提示词注入绕过等方面的隐患。
*   **核心模型兼容性挑战：**
    **[#4334 Claude Opus 4.7/4.8 unusable: temperature always sent](https://github.com/nearai/ironclaw/issues/4334)** 指出系统当前强制发送 `temperature` 参数，导致直接被 Anthropic 最新模型拒绝（400 错误）。这引发了关于 LLM Provider 抽象层如何优雅处理不同模型互斥参数的讨论。

---

## 5. Bug 与稳定性
今日 QA 团队（`joe-rlo`）针对最新接入的开源模型进行了压力测试，报告了大量 P2 级别的阻断性 Bug，反映出前端 UI 渲染与特定模型的推理流存在严重不兼容。

🔴 **严重阻断：**
1.  **[#4334 Claude Opus 4.7/4.8 unusable](https://github.com/nearai/ironclaw/issues/4334)**：因为硬编码发送 `temperature` 导致最新 Claude 模型完全不可用。（暂无对应 fix PR）
2.  **[#4339 Provider tool calls rejected as InvalidInvocation](https://github.com/nearai/ironclaw/issues/4339)**：MiniMax-M2.7 模型的工具调用被错误拒绝，导致 Agent 能力瘫痪。（暂无对应 fix PR）

🟠 **前端交互与 UI 渲染：**
1.  **[#4344 Agent mirrors user message](https://github.com/nearai/ironclaw/issues/4344)**：使用 Qwen3.6 时，UI 会将用户发送的消息错误镜像为 Agent 的回复。相关的 UI 修复可能包含在已开启的 **[#4336 Fix WebUI v2 pending message echo](https://github.com/nearai/ironclaw/pull/4336)** 中。
2.  **[#4341 THINKING chain-of-thought exposed to user](https://github.com/nearai/ironclaw/issues/4341)**：Qwen 模型的思维链直接暴露给用户，并且偶尔会陷入死循环。
3.  **[#4340 Content field blank validation error](https://github.com/nearai/ironclaw/issues/4340)**：消息提交时触发空内容校验报错阻断交互。

---

## 6. 功能请求与路线图信号
根据今日开启的 PR 和 Issue，可以清晰看到项目即期的演进路线：

1.  **标准化 OAuth 接入面板**：随着 WebUI v2 的 OAuth 路由打通，接下来将提供统一的第三方集成（Google, GitHub, Notion, Slack）配置界面。PR 如 **[#4321 Slack Reborn final reply delivery](https://github.com/nearai/ironclaw/pull/4321)** 预示着 Slack 集成即将完成。
2.  **精细化工具禁用控制**：**[#3548 Add DISABLE_TOOLS_LIST flag](https://github.com/nearai/ironclaw/pull/3548)** 提出引入全局黑名单机制，从注册和分发双重层面禁用特定工具，这将极大增强生产环境的安全管控粒度。
3.  **飞书生态支持**：**[#4178 feat: add Feishu websocket event intake](https://github.com/nearai/ironclaw/pull/4178)** 正在推进，表明 IronClaw 正在将国内的飞书/Lark 纳入第一方支持的聊天渠道。

---

## 7. 用户反馈摘要
从今日的 QA 测试反馈来看，用户/测试人员在**接入第三方开源大模型**时的体验非常坎坷：
*   **痛点 1：强类型参数不兼容**：系统缺乏对不同大模型 API 参数支持的动态自适应能力（如 `temperature` 废弃问题），导致切换模型时容易直接报错。
*   **痛点 2：异构流式响应解析困难**：部分模型（如 Qwen, MiniMax）在思考状态输出、多轮 Tool 调用时的格式与前端 UI 的渲染逻辑存在冲突，出现“复读机”、“渲染假死”或“内容消失”等异常。
*   **正面反馈**：社区开发者对底层架构的重构动作反应迅速，能够通过代码提交积极呼应 Issue 中关于“内存生命周期”、“权限门禁校验”等深层次的代码质量诉求。

---

## 8. 待处理积压
建议维护者重点关注以下积压或高优先级的问题：

1.  **🔥 [Nightly E2E failed - #4108](https://github.com/nearai/ironclaw/issues/4108)**：自动化端到端测试流水线已报错。在进行如此高频的底层重构（特别是涉及 DB Migration 和 Reborn Loop）时，持续失败的 E2E 测试可能掩盖严重的回归缺陷。
2.  **⏳ [engine v2: expose channel-supplied thread/response ids - PR #3669](https://github.com/nearai/ironclaw/pull/3669)**：这个 XL 级别的 PR 已经开启了近 20 天，且关联 Issue **#4355** 已经关闭。需尽快评估该 PR 的合并进度，避免成为后续集成的瓶颈。
3.  **⚠️ 紧急模型兼容性修复**：需立即排期处理 **[#4334](https://github.com/nearai/ironclaw/issues/4334)**（Claude 参数不兼容）和 **[#4344](https://github.com/nearai/ironclaw/issues/4344)**（UI 消息镜像），这两个问题直接阻塞了用户使用最新模型进行基础对话。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目动态日报（2026-06-03）。

---

# 📊 LobsterAI 项目动态日报 (2026-06-03)

## 1. 今日速览
过去 24 小时，LobsterAI 项目展现出了**极高的开发活跃度与工程迭代速度**。团队在今天集中合并/关闭了高达 **47 个 Pull Requests**，且无新增或待处理的 Issues，这表明项目正处于**功能密集交付期或重大版本的冲刺阶段**，且代码审查流程运转高效。今日核心推进了 AI 模型能力扩展、MCP 底层性能优化、安全监控引入以及 IM 机器人管理重构等重要工作。目前暂无新版本 Release 发布，预计团队正在为下一个大版本进行代码封板与测试。

## 2. 版本发布
**无新版本发布**。虽然今日无 Tag 或 Release 产出，但考虑到高达 47 个 PR 的合入量，预计近期会有包含大量功能更新和性能优化的正式版本发布。

## 3. 项目进展
今日推进的 PR 覆盖了模型、内核、插件、UI 等多个维度，标志着项目在智能化与稳定性上迈出了重要一步：

*   **模型能力升级**：
    *   PR [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093)：修复了 MiniMax-M3 模型的硬编码限制，正式**启用了对该模型的图片输入支持**。
    *   PR [#388](https://github.com/netease-youdao/LobsterAI/pull/388)：（目前仍为 OPEN 状态）计划将 MiniMax 默认模型升级至 M3，并清理老旧版本模型。
*   **底层架构与性能优化 (MCP & OpenClaw)**：
    *   PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091)：**重点优化了 MCP 启动解析性能**，将 `npx` 慢路径前置转换为稳定的 `node` 绝对路径，并增加了首次响应计时日志，显著改善 MCP 启动耗时瓶颈。
    *   PR [#2015](https://github.com/netease-youdao/LobsterAI/pull/2095)、[#2018](https://github.com/netease-youdao/LobsterAI/pull/2018)、[#2024](https://github.com/netease-youdao/LobsterAI/pull/2024)：集中修复了 OpenClaw 网关的稳定性问题，包括避免 Token 刷新时的网关重启、优化压缩重试机制以及网关重启策略。
    *   PR [#2023](https://github.com/netease-youdao/LobsterAI/pull/2023)：提升了浏览器和 webfetch 工具的稳定性和成功率。
*   **功能演进与 UI 交互**：
    *   PR [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985)：引入了会话级别的 **Thinking Level (思考深度) 控制**，支持 Off 到 Adaptive 多个档位，完成了全链路集成。
    *   PR [#2025](https://github.com/netease-youdao/LobsterAI/pull/2025) & [#2028](https://github.com/netease-youdao/LobsterAI/pull/2028)：全面重构了 IM 机器人管理界面并更新了相关 UI。
    *   PR [#2092](https://github.com/netease-youdao/LobsterAI/pull/2092) & [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022)：优化了 Artifacts（组件/产物）的 HTML 预览体验，包括懒加载和主题适配。
*   **安全与系统体验**：
    *   PR [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962)：新增了 `nsp-clawguard` 安全监控插件的**热切换**功能，提升了系统运行时安全性。
    *   PR [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952)：修复了 macOS 语音输入权限被拒绝后无反馈的问题，改为弹出 Toast 引导用户开启权限。

## 4. 社区热点
今日由于 Issues 动态为 0，且新合入的 PR 评论数均未公开显示具体数值，社区讨论主要集中在代码提交层面。不过，从核心维护者（`btc69m979y-dotcom`, `fisherdaddy`, `liugang519`）的高频提交可以看出，内部开发团队正在紧密协作。
特别关注来自 `dependabot[bot]` 的 PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（Electron 核心大版本升级 40.2.1 -> 42.3.1），该 PR 仍然处于 OPEN 状态，此类破坏性较大的底层依赖升级通常需要社区或内部测试团队的广泛验证。

## 5. Bug 与稳定性
今日无用户在外部提交新的 Bug Issue。合入的 PR 中包含了大量自发性的 Bug 修复和体验优化，有效提升了系统稳定性：
1.  **[系统修复]** 网关 Token 刷新导致非必要重启的问题（已修复：[PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018)）
2.  **[系统修复]** OpenClaw Compaction 重试机制及工具结果间隙处理（已修复：[PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015)）
3.  **[UI 修复]** macOS 语音权限拒绝无反馈问题（已修复：[PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952)）
4.  **[配置修复]** 浏览器配置失效问题（已修复：[PR #2031](https://github.com/netease-youdao/LobsterAI/pull/2031)）

## 6. 功能请求与路线图信号
虽然今日无公开的功能请求 Issue，但从刚合入的代码中可以明显识别出项目近期的**路线图信号**：
1.  **深度推理能力增强**：引入 Thinking Level 控制，预示着 LobsterAI 正在尝试适配和利用具备慢思考/深度推理能力的前沿大模型。
2.  **多实例与企业级 IM 集成**：钉钉、飞书、QQ 的 IM 多实例管理重构，暗示项目正在向更复杂的团队协作/企业级应用场景发力（关联 PR：[#2025](https://github.com/netease-youdao/LobsterAI/pull/2025), [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)）。
3.  **多模态常态化**：MiniMax-M3 图片输入的解禁，表明项目正在持续打通各主流模型的多模态视觉能力。

## 7. 用户反馈摘要
由于过去 24 小时无新增 Issue 和外部评论，无法直接提取终端用户的反馈摘要。但从开发侧解决的痛点（如：MCP 启动慢、macOS 语音权限无响应、HTML 大文件预览卡顿等）可以看出，开发者正致力于扫除日常高频使用场景中的基础体验障碍。

## 8. 待处理积压
目前有 **3 个待合并** 的 PR 值得维护者和贡献者重点关注，以保持项目开发节奏：

*   ⚠️ **[重大依赖更新] PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**: `chore(deps-dev): bump the electron group...`
    *   **状态**：OPEN (自 2026-04-02 创建，已停滞 2 个月)
    *   **关注点**：Electron 大版本跨越升级（40.x -> 42.x），可能涉及底层 API 破坏性变更，需尽快评估兼容性并推进测试，避免成为技术债。
*   **[模型配置更新] PR [#388](https://github.com/netease-youdao/LobsterAI/pull/388)**: `feat: upgrade MiniMax default model to M3`
    *   **状态**：OPEN (自 2026-03-12 创建，已停滞近 3 个月)
    *   **关注点**：与昨日合入的 M3 图片输入支持紧密相关，需确认该 PR 是否具备合并条件，以便让用户尽早使用到默认的 M3 模型。
*   **[IM 多实例校验] PR [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)**: `fix(im): add duplicate validation for instance name...`
    *   **状态**：OPEN (自 2026-04-04 创建)
    *   **关注点**：防止 IM 机器人重复添加导致消息冲突。考虑到今日刚合入了 IM UI 重构，建议将该校验逻辑与最新 UI 进行联调验证后尽快合入。

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

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-06-03)

> **数据来源**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) 
> **分析师建议**：项目处于高频迭代期，安全漏洞集中爆发，建议优先处理鉴权与路径遍历相关缺陷。

---

### 1. 今日速览
过去24小时内，CoPaw (QwenPaw) 展现出极高的社区活跃度，共产生 **48 条 Issue 更新**（新开/活跃 26 条，关闭 22 条）和 **32 条 PR 更新**（待合并 23 条，合并/关闭 9 条）。项目当前正处于底层架构升级（迁移至 AgentScope 2.0）和功能快速拓展的并行期。值得注意的是，白帽子安全研究人员今日集中提交了多个高危漏洞（鉴权绕过、路径遍历和敏感信息泄露），这些安全修复将是近期维护的重中之重。

### 2. 版本发布
**无新正式版本发布**。不过，维护者已合并/关闭了将版本号升级至 `v1.1.11b1` 的 PR ([#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907))，预示着包含最新修复的 Beta 版或正式版即将发布。

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，重点推进了底层架构重构、渠道稳定性及浏览器工具的优化：
*   **架构重构迈出关键一步**：备受瞩目的 `[Breaking Change]` 重构 PR ([#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)) 持续推进，将底层依赖从 AgentScope 1.x 迁移至 2.0。同时 `Decouple plugin loader` ([#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900)) 的提交从根本上解决了 Tauri 桌面端插件加载器未初始化的 503 报错。
*   **渠道与消息推送修复**：修复了定时任务无法推送到微信/企业微信的 Bug ([#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883))，以及修复了腾讯元宝渠道因缺少 proto 文件导致的无限重连问题 ([#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899))。
*   **浏览器工具稳定性提升**：合并了修复 Windows 环境下浏览器进程树及锁定文件无法清理的 PR ([#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853))。

### 4. 社区热点
今日讨论最热烈的主题集中在**系统架构升级**与**系统易用性反馈**：
*   **AgentScope 2.0 迁移讨论**：Issue [#4885](https://github.com/agentscope-ai/QwenPaw/issues/4885) 和带 `[Breaking Change]` 标签的 Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 引发了社区对于升级方向和 API 变动的关注。维护者已明确正在进行全面重构。
*   **前端 UI 体验痛点**：用户 ([#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904)) 指出侧边栏菜单设计过于复杂，高频使用的聊天会话被隐藏，呼吁参考 Codex 或 Claude Desktop 做减法。
*   **上下文 token 优化探讨**：开发者针对 Agent 初始上下文臃肿提出优化方案 ([#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836))，建议工具定义按需加载以减少 55-65% 的初始 Token 消耗。

### 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，以及一批严重的安全漏洞：

**🔴 严重安全漏洞 - 需立即响应**
*   **未授权的全局设置修改**：`PUT /api/settings/language` 接口缺乏鉴权，可导致持久化全局设置被篡改 ([#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908))。
*   **路径遍历读取本地文件**：`system_prompt_files` 参数未进行路径限制，攻击者可借此将本地敏感文件内容发送到外部 LLM API ([#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913))。
*   **工作区导出密钥泄露**：下载 workspace 导出包会暴露 `agent.json` 中的渠道和集成 secrets ([#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914))。
*   **ToolGuard 安全审批绕过**：API 调用者可通过 `request_context` 控制并禁用危险命令的审批机制 ([#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909))。

**🟠 高危稳定性 Bug**
*   **DeepSeek 推理模型多轮对话 500 错误**：`reasoning_content` 未正确回传导致 API 报错中断 ([#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)，已关闭/修复)。
*   **UI 状态异常**：切换聊天时出现不可逆的加载状态 ([#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903))。
*   **图片压缩无限死循环**：上传图片后系统陷入“压缩-重新注入”的死循环，导致 Token 消耗飙升和 AI 幻觉 ([#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895))。

### 6. 功能请求与路线图信号
从近期的 Feature Request 和 PR 动向来看，**多模型调度**和**Agent 自治进化**是明确的路线图演进方向：
*   **多模型协作**：用户呼吁在 `spawn_subagent` 时支持指定不同的模型，以实现“简单任务用廉价模型，复杂推理用强模型”的降本增效模式 ([#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901))。
*   **Skill 技能的自演化**：合并中的 PR ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857)) 正在改进 `make-skill` 流程，支持在后台通过 `spawn_subagent` 异步生成和迭代技能。
*   **更好的桌面端文件支持**：呼声极高的特性包括 Windows 版去除不必要的大文件上传限制 ([#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893)) 以及支持拖拽多文件上传 ([#4894](https://github.com/agentscope-ai/QwenPaw/issues/4894))。

### 7. 用户反馈摘要
*   **桌面端体验仍需打磨**：用户反馈字体太小且无法调节 ([#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154))，且安装脚本更新时经常意外重置虚拟环境，导致依赖包丢失需重新安装 ([#4875](https://github.com/agentscope-ai/QwenPaw/issues/4875))。
*   **降级容错引发困惑**：自 v1.1.9 起，部分用户遇到 Agent 频繁回复“无法处理您的问题”的系统级降级反馈，而非大模型的真实输出 ([#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837))。
*   **多租户隔离需求显现**：有部署者指出，当前 Web 端账号体系偏向管理员，缺乏针对单个 Agent 的账号隔离机制，存在越权操作其他 Agent 的风险 ([#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859))。

### 8. 待处理积压
*   **新建会话引发配置丢失**：Issue [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) 导致模型配置页丢失且无法加载，属于严重阻断性 Bug，目前仍处于 OPEN 状态，需维护者立即介入。
*   **长时间对话上下文丢失**：Issue [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) 提出的“无损上下文压缩”需求讨论多日仍未有对应的官方 PR 推进，可能需要社区共建。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-03)

> **数据驱动 | 开源项目健康度分析**
> 分析师：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

ZeroClaw 项目今日保持**高度活跃**的开发与社区互动状态，各项核心指标均表现强劲。过去 24 小时内，项目共处理了 **50 条 Issue 更新**（新开/活跃 33，关闭 17）和 **50 条 PR 更新**（待合并 33，合并/关闭 17），显示出维护团队极高的响应和清积压效率。

最重磅的消息是官方正式发布了 **v0.8.0-beta-2** 版本，该版本引入了全新的终端 UI `zerocode` 以及多智能体运行时，标志着项目在本地化操作体验上迈出了关键一步。同时，社区针对 DeepSeek-V4 API 的兼容性展开了热烈讨论，并暴露出通道安全过滤等高危漏洞，目前均已被快速响应并修复。

---

## 2. 版本发布

### [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2) 
- **更新亮点**：这是 v0.8.0 系列的第二个测试版，也是自 v0.7.5 以来最大的版本更新。核心亮点是推出了 **`zerocode`**——一个功能完备的终端 UI，允许用户在不离开终端的情况下运行和操作智能体。
- **架构升级**：围绕 `zerocode`，项目正式交付了**多智能体运行时**，为后续更复杂的 AI 智能体编排打下基础。
- **迁移注意事项**：由于引入了多智能体和终端 UI 架构，建议关注配置文件的加载逻辑是否兼容现有单智能体模式，开发团队已针对 TUI 和 Web UI 路径配置进行了优化。

---

## 3. 项目进展

今日共有 17 个 PR 被合并/关闭，项目在安全性、通道适配、硬件支持和文档完善等多个维度取得实质性进展：

- **安全漏洞紧急修复**：PR [#7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) 成功修复了 Channel 代理绕过工具白名单的高危漏洞，强化了多智能体场景下的权限隔离。
- **通道与 TTS 稳定性提升**：PR [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) 修复了 Telegram/WhatsApp 语音回复在多智能体配置中解析错误的问题；PR [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) 解决了 WhatsApp 回复由于 LID 格式导致的投递失败。
- **周边生态与基础设施**：PR [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) 引入了 Smartroom 硬件设备工具与外设支持，扩展了智能体在 IoT 领域的边界；PR [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046) 添加了 `dev-sim` 特性以支持硬件模拟。
- **开箱即用体验优化**：PR [#6961](https://github.com/zeroclaw-labs/zeroclaw/pull/6961) 为 `self-test` 增加了对 `~` 和 `$HOME` 路径的检查警告，避免了 Web UI 启动静默失败。

---

## 4. 社区热点

今日社区围绕大模型兼容性和多端通道展开密集讨论：

1. **DeepSeek-V4 API 兼容性危机 ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))**
   - **热度**：15 条评论 | 👍 4
   - **分析**：用户在使用 DeepSeek-V4-Pro/Flash 时，因思考模式导致 API 报错。这反映出用户对前沿模型的高速迭代诉求，以及 ZeroClaw 在快速跟进新模型 API 格式时面临的技术压力。
2. **Kimi-Code 流式调用工具失败 ([Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600))**
   - **热度**：9 条评论 | 👍 1
   - **分析**：流式输出中 `reasoning_content` 缺失导致系统报错。表明在处理具有深度思考能力的国产大模型时，流式解析器需要更强的容错机制。
3. **Mattermost 私信功能缺失 ([Issue #5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604))**
   - **热度**：3 条评论
   - **分析**：企业级用户希望将 ZeroClaw 接入内部通讯平台，但目前仅支持频道内对话，缺乏 1v1 私信支持，暴露了向 ToB 场景拓展时的功能短板。

---

## 5. Bug 与稳定性

今日报告并处理了多个严重 Bug，整体稳定性正在经历边缘场景的阵痛期：

- **[P1 高危] Telegram 泄露 Codex 内部思维链/工具记录 ([Issue #7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068))**
  - **状态**：Open | 无修复 PR
  - **详情**：当使用 Codex 作为后端时，Telegram 机器人会直接将内部的 Scratchpad 思考过程或工具调用记录发送给用户，严重影响用户体验与预期管理。
- **[P1 高危] Webhook 泄露 reasoning 内容 ([Issue #6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040))**
  - **状态**：Closed | **已有修复 PR** ([#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796))
  - **详情**：Webhook 通道未能有效剥离 `<tool_result>` 和推理内容。目前已通过剥离 XML 标签逻辑解决。
- **[P2 中危] `zeroclaw check` 命令 WebSocket 鉴权失败 ([Issue #7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038))**
  - **状态**：Open | 需要用户提供复现环境
  - **详情**：即便配置了正确的 Auth Profile，健康检查依然会在 WebSocket 环节 11/11 报 401 错误。

---

## 6. 功能请求与路线图信号

从近期的 Issues 中，可以观察到项目下一步演进的清晰信号：

- **集群与多机管理（v0.8.x 展望）**：[Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 提出了通过 CLI 添加远程节点的需求。结合 [Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 关于守护进程心跳追踪的提案，ZeroClaw 正在为构建分布式多节点“AI 智能体舰队”铺路。
- **企业级安全基线提升**：[Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 要求将默认的 6 位纯数字配对码升级为 32 位复杂密码。**已纳入 v0.8.0 发布队列 ([Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112))，预计在下个版本落实。**
- **Windows 运行环境标准化**：[Issue #7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) 正在评估在 Windows 上使用 PowerShell 替代 `cmd.exe` 的可能性。这是扩展非开发者受众群体的关键一步。
- **气隙隔离执行模式**：[Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 提出了离线安全容器结合 Unix Socket 通信的 RFC，表明项目对极致安全和企业级隔离场景的野心。

---

## 7. 用户反馈摘要

通过对活跃 Issue 的分析，勾勒出当前用户的真实体验画像：

- **痛点**：
  1. **大模型接入不稳定**：用户对 ZeroClaw 接入最新大模型（如 DeepSeek-V4, Kimi）的表现颇有微词，API 格式的非标准响应（尤其是 thinking mode）容易导致运行时崩溃。
  2. **通道输出污染**：原始的 `<tool_result>` 或推理内容频繁泄露到 Telegram 等终端用户界面，破坏了 AI 应有的“黑盒”体验感。
  3. **文档与实际不符**：Discord 邀请链接失效 ([Issue #7037](https://github.com/zeroclaw-labs/zeroclaw/issues/7037))、Twitter 通道存在于文档但在默认二进制中不可用 ([Issue #7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069))，影响了新用户的初体验。
- **满意点**：
  1. **快速迭代与响应**：社区高度赞赏维护团队对关键 Bug 的响应速度，例如通道越权漏洞在 24 小时内即被 PR 修复。
  2. **架构灵活性**：从企业用户尝试通过 Mattermost 或私有部署接入来看，ZeroClaw 的模块化通道设计正中下怀，市场定位准确。

---

## 8. 待处理积压

尽管团队极其活跃，但系统底层仍存在历史遗留和复杂架构调整带来的积压，需密切关注：

- **遗留代码灾难恢复**：[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪由于 3 月份大批量回滚代码丢失的 153 个 Commit。虽然评估工作正在进行中，但代码库的长期稳定性受到威胁，亟需更精细的代码恢复策略。
- **底层核心重构停滞**：[Issue #7053](https://github.com/zeroclaw-labs/zeroclaw/pull/7053) 关于将 `MemoryLoader` 迁移至 `MemoryStrategy` 的重构目前暂无新进展。随着多智能体运行时的发布，底层的内存状态管理将成为下一个性能瓶颈。
- **邮箱通道大特性的长周期合并**：[PR #7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) 试图引入支持 XOAUTH2 和只读 IMAP 工具的完整邮箱通道体系，由于涉及高风险依赖和安全性评估，该 PR 仍需较长周期的 Review。

</details>