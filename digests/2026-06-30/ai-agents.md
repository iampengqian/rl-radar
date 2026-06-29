# OpenClaw 生态日报 2026-06-30

> Issues: 387 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-29 22:20 UTC

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

以下是 **OpenClaw** 开源项目 2026 年 6 月 30 日的动态发展日报。

---

### 1. 今日速览
OpenClaw 项目今日维持着极高的活跃度与社区热度，单日共处理了 **387 条 Issue 动态**（新开/活跃 306 条，关闭 81 条）以及 **500 条 PR 动态**（待合并 445 条，合并/关闭 55 条）。项目刚发布了 **v2026.6.11-beta.2** 版本，重点增强了多渠道（Slack, Mattermost）的控制能力与自动化水平。然而，社区当前最大的痛点集中在**底层会话状态管理（Session State）与网关消息投递**上，大量高优先级（P1）Bug 反映出在复杂多级 Agent 嵌套和异步高并发场景下，系统存在写锁阻塞与消息静默丢失的风险。

### 2. 版本发布
**最新版本：[v2026.6.11-beta.2](https://github.com/openclaw/openclaw/releases)**
- **核心亮点**：更强大的渠道控制能力。
- **功能更新**：
  - 引入 **Slack 中继模式**。
  - 支持 Mattermost 原生指令 `/oc_queue`。
  - 支持在私聊（DM）级别进行模型覆盖，使渠道运营更容易实现自动化和精细调优。
- **致谢**：感谢社区开发者 @sjf-oa, @amknight, @xydigit-zt, @thomaszta, 以及 @gandalf-at-lerian 的贡献。

### 3. 项目进展
今日共有 55 个 PR 被合并或关闭，项目在网关兼容性、UI 体验和内存管理上取得了实质性进展：
- **多渠道网关与协议优化**：[PR #89038](https://github.com/openclaw/openclaw/pull/89038) 修复了 qqbot WebSocket 重连时返回无效插件导致消息队列丢失的问题；[PR #86386](https://github.com/openclaw/openclaw/pull/86386) 优化了飞书 SDK 走系统代理的网络层逻辑。
- **内存与上下文引擎改进**：[PR #87206](https://github.com/openclaw/openclaw/pull/87206) 修复了网关在子智能体运行后过早归档会话，导致内存核心（memory-core）叙述性文本提取被静默丢弃的 Bug；[PR #97175](https://github.com/openclaw/openclaw/pull/97175) 为上下文引擎的延迟维护任务增加了超时限制，防止任务卡死阻塞用户消息。
- **前端与工具集成**：[PR #87941](https://github.com/openclaw/openclaw/pull/87941) 为聊天 UI 增加了 KaTeX 数学公式渲染支持。

### 4. 社区热点
今日社区讨论最为热烈的 Issue 集中在**跨平台支持缺失**以及**核心架构的重构诉求**：
- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面端应用缺失 (👍 81, 💬 110)**：这是今日热度最高的 Issue。用户指出目前已有 macOS, iOS 和 Android 客户端，但强烈要求提供功能对等的 Linux 和 Windows 原生应用。
- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 追踪核心会话 SQLite 迁移 (💬 36)**：维护者与核心贡献者正在深入讨论将底层的 JSONL 存储全面切换到 SQLite 存储的访问器接缝重构方案。
- **[Issue #94518](https://github.com/openclaw/openclaw/issues/94518) 升级 6.x 后 DeepSeek 缓存命中率跌破 10% (💬 6, 👍 8)**：多位用户反馈在升级到 2026.6.x 版本后，DeepSeek 的提示词缓存机制遭到破坏，导致 API 成本剧增。

### 5. Bug 与稳定性
按严重程度（P1）排列，今日报告的关键稳定性问题主要涉及并发冲突、锁机制和提供商适配：

- **🔴 [P1] 会话写锁超时阻塞子智能体投递 ([Issue #86538](https://github.com/openclaw/openclaw/issues/86538))**
  - **状态**：已有修复 PR [PR #86539](https://github.com/openclaw/openclaw/pull/89039)
  - **详情**：Session JSONL 写锁超时不仅会阻断主线程、cron 任务，还会导致子智能体的交付通道发生带外故障。
- **🔴 [P1] Telegram 消息静默丢失，无 sendMessage 记录 ([Issue #80520](https://github.com/openclaw/openclaw/issues/80520))**
  - **状态**：排查中，等待复现
  - **详情**：网关接收并处理了消息，但未记录 sendMessage API 调用，用户无法收到任何回复。
- **🔴 [P1] GPT-4o 智能体执行一次文本响应后异常退出，未继续工具循环 ([Issue #81567](https://github.com/openclaw/openclaw/issues/81567))**
  - **状态**：等待维护者审查
  - **详情**：配置为 GPT-4o 的 Agent 在完成单次文本输出后直接结束会话，未能像 Claude 模型那样持续迭代调用工具完成任务。
- **🟠 [P2] Codex/OAuth 路径极微小请求延迟高达 28 秒 ([Issue #95121](https://github.com/openclaw/openclaw/issues/95121))**
  - **状态**：等待产品决策
  - **详情**：更新至 2026.6.8 后，即使请求体极小且未调用工具，通过 Codex/OAuth app-server 路径的响应也变得极其缓慢。

### 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以清晰看出项目近期的演进路线图：
- **数据层全面拥抱 SQLite**：多个 Issue（如 [Issue #79902](https://github.com/openclaw/openclaw/issues/79902), [Issue #79904](https://github.com/openclaw/openclaw/issues/79904)）呼吁在新的数据库优先运行时之上，提供基于游标的 SQLite 读取 API，以便第三方高级消费者无需抓取不透明的 JSONL Blob 即可重建会话状态。
- **免 AI 轻量级网关模式**：[Issue #86881](https://github.com/openclaw/openclaw/issues/86881) 提出了“Gateway-lite”模式，希望在没有配置大模型时，仅运行渠道网关、Webhook 和定时任务，以实现确定性的轻量化部署。
- **更强大的插件 SDK**：[Issue #81913](https://github.com/openclaw/openclaw/issues/81913) 请求为已安装的技能暴露稳定且小型的公共 SDK 接口。同时 [Issue #80213](https://github.com/openclaw/openclaw/issues/80213) 请求增加技能开发者自定义的 `setup.script` 安装钩子。

### 7. 用户反馈摘要
- **痛点 1：会话状态上下文频繁断裂**。用户极其沮丧于因 session write-lock 或 `EmbeddedAttemptSessionTakeoverError` 导致的上下文不同步与消息丢失（[Issue #80040](https://github.com/openclaw/openclaw/issues/80040) 提到了 OAuth 失效引发的连锁雪崩）。
- **痛点 2：启动与 CLI 冷启动耗时过长**。多名开发者指出，非默认 Agent 的处理有 10-17 秒的 `embedded_run` 初始化开销（[Issue #80607](https://github.com/openclaw/openclaw/issues/80607)）；此外 CLI 冷启动在 Linux 上也出现了约 14 秒的延迟（[Issue #82070](https://github.com/openclaw/openclaw/issues/82070)），严重影响开发体验。
- **需求反馈：国产/开源模型适配亟待改善**。MiniMax 和 DeepSeek 的用户反馈在最新版本中遇到了用量显示反转（[Issue #81156](https://github.com/openclaw/openclaw/issues/81156)）或缓存机制失效的问题。

### 8. 待处理积压
以下重要 Issue/PR 长期未得到彻底解决或仍处于待合并状态，建议维护者优先关注：
- **[PR #89039](https://github.com/openclaw/openclaw/pull/89039)**：修复静默消息丢失。状态为“等待维护者审查”，涉及 `session-state` 和 `message-delivery`，风险较高且阻塞了相关 Issue。
- **[Issue #97877](https://github.com/openclaw/openclaw/issues/97877)**：[Bug] 在执行任何先前工具调用后，瞬时 5xx 错误被安全防护机制拦截，导致静默终止且无法重试。今日新提交的 P1 级别严重 Bug。
- **[Issue #49104](https://github.com/openclaw/openclaw/issues/49104)**：[stale] Telegram HTML 解析模式静默截断包含 `<think>` 等标签的回复。自 3 月提出至今未完全修复。
- **[Issue #94147](https://github.com/openclaw/openclaw/issues/94147)**：macOS 客户端 `CLLocationManager` 每秒重建导致疯狂弹出 TCC 权限请求（系统隐私控制），严重影响 Mac 用户的桌面端体验。

---

## 横向生态对比

作为专注于 AI 智能体开源生态的资深技术分析师，基于 2026 年 6 月 30 日各开源项目的社区动态数据，为您生成横向对比分析报告。

---

# 📊 个人 AI 助手与智能体开源生态横向分析日报 (2026-06-30)

### 1. 生态全景
当前个人 AI 助手/自主智能体开源生态正处于**“从单体对话向多智能体协同与全渠道网关演进”**的爆发期。开发者的关注点已从早期的“模型接入”全面转向**复杂上下文状态管理、底层存储架构重构（如全面拥抱 SQLite）、以及 A2A 通讯协议的标准化**。随着智能体执行链路的加深，系统在**高并发锁机制、长程记忆防丢失、跨平台安全沙箱隔离**及 **API 缓存降本**等方面的工程化痛点集中爆发。整个生态正在经历一轮由“功能堆砌”向“企业级稳定性与防御性编程”的深度洗礼。

### 2. 各项目活跃度对比
今日有 7 个主要项目呈现显著活跃态势（TinyClaw、Moltis、ZeptoClaw 无活动未计入），整体活跃度呈现明显的头部效应。

| 项目名称 | Issue 动态 | PR 动态 | 版本发布 | 健康度评估 | 核心当前状态 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 387 | 500 | `v2026.6.11-beta.2` | 🟢 极度活跃 | 核心底层重构期，网关能力增强，P1级并发Bug亟待解决 |
| **IronClaw** | 13 | 50 | 无 | 🟢 高度活跃 | Reborn (WebUI v2) QA 攻坚，测试基建整合，准备大版本跃升 |
| **CoPaw** | 30 | 50 | 无 (Beta中) | 🟢 高度活跃 | v2.0.0 架构融合冲刺，测试覆盖率大幅提升，IM渠道深度修复 |
| **ZeroClaw** | 43+ | 50+ | 无 | 🟢 高度活跃 | v0.8.3 密集重构，SOP引擎与WASM插件生态建设 |
| **NanoBot** | 5 | 31 | 无 | 🟠 稳步迭代 | 大规模架构优化，原生A2A机制重构，极致压缩上下文 |
| **Hermes Agent**| 49 | 47 | 无 | 🟠 稳步迭代 | 安全边界加固，桌面端内存优化，工作空间群智协作引入 |
| **LobsterAI** | 11 | 39+ | `2026.6.29` | 🟠 稳步迭代 | 底层OpenClaw集成深化，全平台IM网关化落地 |
| **NanoClaw** | 0 | 10 | 无 | 🟡 内部攻坚 | 集中修复安全漏洞，加速多渠道（Discord/Slack）适配 |
| **NullClaw** | 0 | 4 | 无 | 🟡 基础维护 | 核心流式工具调用架构解耦，CLI交互深度打磨 |
| **PicoClaw** | 3 | 3 | 无 | 🟡 基础维护 | 聚焦去中心化私密通信网关接入与精细化Token监控 |

### 3. OpenClaw 在生态中的定位
**生态核心基石与“试金石”**：
OpenClaw 在今日以单日 300+ Issue 和 500+ PR 的数据呈现压倒性活跃度，其定位已从单纯的 Agent 框架演变为**生态级的底座运行时**（如 LobsterAI 明确在其新版本中深度集成 OpenClaw）。
*   **技术路线差异**：相较于其他项目仍在探索沙箱或基础网关，OpenClaw 已经深入到**非阻塞式并发控制（写锁优化）、数据层全面 SQLite 化、以及免 AI 的轻量级确定性网关**等深水区。
*   **优势**：拥有最庞大的核心贡献者群和跨平台（macOS/iOS/Android/各类IM）覆盖能力。
*   **挑战**：系统过重导致“并发冲突”与“冷启动延迟”成为最致命的体验瓶颈。

### 4. 共同关注的技术方向
从多项目今天的动态中，可以清晰提取出智能体生态高度共鸣的技术诉求：
*   **A2A（Agent-to-Agent）原生协同编排**：智能体正在打破单点运行模式。(**NanoBot** PR #4571 重构原生点对点委托，**NanoClaw** 修复 A2A 文件越权，**Hermes Agent** 引入 Kanban 群智协作，**ZeroClaw** 发起 A2A 发现机制 RFC)。
*   **细粒度成本控制与缓存击穿防御**：大模型 API 昂贵，智能体框架开始向“抠字节”演进。(**OpenClaw** DeepSeek 缓存命中率跌破10%引发高优 Bug，**CoPaw** 探讨前缀缓存命中率，**NanoBot** 截断子代理输出疯狂压缩 Token，**PicoClaw** 推进每轮 Token 用量底层输出)。
*   **长程记忆治理与上下文防雪崩**：复杂任务导致上下文爆炸。(**CoPaw** 呼吁在记忆搜索加入专用 Reranker 防止级联失败，**Hermes Agent** 修复 USER.md 字符上限导致的死锁，**OpenClaw** 优化上下文引擎延迟维护)。
*   **网关全量即时通讯(IM)接管**：(**LobsterAI** 一口气适配钉钉/飞书/QQ，**OpenClaw** 增强 Slack 中继，**PicoClaw** 探索去中心化 SimpleX/Delta Chat)。

### 5. 差异化定位分析
*   **基建与底座型**：**OpenClaw** 致力于做最稳固、最全面的底层抽象；**IronClaw** 则借着 Reborn 版本死磕企业级 E2E 测试与 RBAC 多租户权限隔离。
*   **极致轻量与极客工具型**：**NullClaw** 专注于本地 CLI/REPL 体验与流式工具调用的零内存损耗；**PicoClaw** 瞄准树莓派等 ARM 边缘设备，主打去中心化抗审查私有网关。
*   **多代理与工作流驱动型**：**NanoBot** 和 **Hermes Agent** 明显向多代理并行处理倾斜，强调工作流编排（如 Hermes 引入高级电子表格处理技能）。
*   **全渠道集成应用型**：**LobsterAI** 和 **CoPaw** 致力于将复杂的底层运行时包装成开箱即用的办公自动化平台，高度依赖国内 IM 生态（飞书、钉钉、微信）。

### 6. 社区热度与成熟度
*   **第一梯队（快速迭代与大重构期）**：**OpenClaw、CoPaw、ZeroClaw、IronClaw**。这几个项目正处于引入破坏性更新（如 IronClaw 即将升级底层 Crate 版本，ZeroClaw 引入 WASM 插件）的密集开发期，PR 合并率高，但系统脆弱性也同步增加。
*   **第二梯队（稳定性巩固与防御性编程期）**：**NanoBot、Hermes Agent**。这两个项目今日的 Issue/PR 集中在安全边界裁剪（如防 OOM、路径越权修复）、凭证脱敏等方面，标志着其正在向生产级稳定性迈进。
*   **第三梯队（核心内部维护与长尾期）**：**NullClaw、PicoClaw、NanoClaw**。外部 Issue 趋零，由核心 Maintainer 驱动底层 DX（开发者体验）或极其细分的场景优化。

### 7. 值得关注的趋势信号
对于 AI 智能体开发与技术决策者，今日的社区反馈释放了三个强烈的行业信号：

1.  **“提示词缓存保卫战”成为工程重心**：随着上下文长度增加，如果框架的消息截断/拼接逻辑破坏了 LLM 厂商（如 DeepSeek）的前缀缓存机制，将导致 API 成本成十倍激增（**OpenClaw 与 CoPaw 均遭痛击**）。未来的框架必须在底层对消息数组的稳定性做强约束。
2.  **“静默失败”是当前用户最大的体验梦魇**：当 Agent 执行 20+ 次工具调用或遭遇底层鉴权失败时，直接陷入静默无响应或疯狂重试死循环（**如 IronClaw 的 Google Sheets 工作流崩溃、OpenClaw 的 Telegram 静默丢包**）。引入“最终回答轻推”和全局状态透传机制已成为刚需。
3.  **“确定性执行”需求崛起**：用户对“遇事不知调 AI”感到疲倦。社区强烈呼吁在无 AI 参与的情况下，仅运行纯逻辑网关或定时任务（**OpenClaw 提出 Gateway-lite**），这预示着“AI 逻辑”与“确定性自动化逻辑”在未来架构中必须物理剥离。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-06-30  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
* NanoBot 今日保持极高的研发与社区活跃度，虽然无新版本发布，但过去 24 小时内处理了 31 个 PR（待合并 21 个，已合并/关闭 10 个）和 5 个 Issue。
* 项目当前正处于**大规模架构优化与稳定性加固**阶段，提交重点集中在安全沙箱、上下文治理、多模型路由以及 WebUI 体验升级。
* 社区开发者（如 chengyongru, hamb1y, xiaweiwei67-stack 等）贡献了大量高质量的代码，涵盖了从底层 Bug 修复到复杂 A2A（Agent-to-Agent）通信机制的重构。

### 2. 版本发布
* **今日无新版本发布。** 考虑到目前有 21 个待合并 PR 正在推进中，推测项目正在为下一个包含重大架构升级的版本做准备。

### 3. 项目进展
今日共有 10 个 PR 被合并或关闭，标志着项目在以下维度取得了实质性突破：
* **安全防护升级**：修复了 ExecTool 的路径提取漏洞（[PR #4594](https://github.com/HKUDS/nanobot/pull/4594)），强化了工作区限制策略。
* **内存与上下文治理**：Dream 模块引入了写入保护机制，防止重复创建相同技能（[PR #4554](https://github.com/HKUDS/nanobot/pull/4554)），并添加了内存清理指令（[PR #4589](https://github.com/HKUDS/nanobot/pull/4589)），有效控制了 MEMORY.md 的冗余膨胀。
* **复杂度收敛**：关闭了重复的子代理模型重写功能 PR（[PR #4570](https://github.com/HKUDS/nanobot/pull/4570)），为原生 A2A 机制（[PR #4571](https://github.com/HKUDS/nanobot/pull/4571)）让路。

### 4. 社区热点
* **架构定义争议**：Issue [#660](https://github.com/HKUDS/nanobot/issues/660) 引发了热烈讨论（15 条评论）。用户 besoeasy 指出项目自称“超轻量级”，但 Dockerfile 中却强依赖 Python 和 Node.js。这反映出核心用户群体对项目**底层包体积和部署成本**存在较高诉求。（该 Issue 今日已关闭）
* **推理深度控制诉求**：Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) 讨论了自动推理努力级别的升级机制。用户希望针对复杂问题，AI 能自动加深思考层级，这暴露出当前静态配置已无法满足高级 Agent 的动态决策需求。

### 5. Bug 与稳定性
今日报告并修复了多个关键 Bug，整体稳定性得到提升：
* 🔴 **高危 - 命令注入绕过**：Issue [#4592](https://github.com/HKUDS/nanobot/issues/4592) 指出，当开启 `restrictToWorkspace` 时，`curl --output=/etc/passwd` 这类带等号的绝对路径能绕过安全检查。（**状态**：已由 [PR #4594](https://github.com/HKUDS/nanobot/pull/4594) 修复）
* 🟠 **中危 - 凭证泄露风险**：MCP Server URL 中包含的账号密码或 Token 可能会被记录到日志中。（**状态**：已提交 [PR #4584](https://github.com/HKUDS/nanobot/pull/4584) 进行脱敏处理）
* 🟠 **中危 - 缓存失效**：Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) 报告 `max_messages` 截断机制导致前缀几乎每轮都在漂移，彻底击穿了 Prompt 缓存，造成 API 成本飙升。（**状态**：已关闭，推测已修复）
* 🟡 **低危 - 配置解析**：[PR #4583](https://github.com/HKUDS/nanobot/pull/4583) 修复了 `tools.exec` 为空值时导致的迁移报错问题。

### 6. 功能请求与路线图信号
从近期的 Issue 与 PR 交叉比对来看，NanoBot 的下一步演进路线图非常清晰：
* **信号一：极致的成本与上下文压缩** 
  Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) 提到了推理成本，而 [PR #4581](https://github.com/HKUDS/nanobot/pull/4581) 和 [PR #4588](https://github.com/HKUDS/nanobot/pull/4588) 正在疯狂优化，通过压缩历史记录、截断子代理输出等方式，大幅减少输入 Token。
* **信号二：Agent 互通与多模型编排** 
  [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) 允许子代理使用不同的模型预设，结合 [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) 原生 A2A 机制，预示着 NanoBot 正在向**多智能体协同网络**演进。
* **信号三：外部触发与全平台集成** 
  [PR #4591](https://github.com/HKUDS/nanobot/pull/4591) 增加了本地文件系统触发器，[PR #4567](https://github.com/HKUDS/nanobot/pull/4567) 修复了微信渠道的流式输出问题，表明项目正在强化作为“全天候个人助手”的全渠道接入能力。

### 7. 用户反馈摘要
通过提炼 Issue 与 PR 描述，真实用户的核心反馈如下：
* **痛点 1：本地开发环境隔离困难**。Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580) 用户呼吁，执行工具默认使用系统主环境会导致依赖混乱，急需无缝接入 Conda 或虚拟环境。
* **痛点 2：OAuth 登录配置反人类**。[PR #4573](https://github.com/HKUDS/nanobot/pull/4573) 作者反馈，设置纯 OAuth 提供商时因未默认勾选，浪费了大量时间。
* **痛点 3：微信渠道不稳定性**。部分中转 API 在微信非流式接口下会丢失 `tool_use` 数据，严重影响国内微信端用户的使用体验。
* **满意点**：开发者对项目底层的可扩展性（如 MCP 集成、Provider 自定义代理 [PR #4578](https://github.com/HKUDS/nanobot/pull/4578)）表示高度认可，认为其具备生产级潜力。

### 8. 待处理积压
以下重要 Issue/PR 处于开放且待处理状态，建议核心团队重点关注：
* ⚠️ **Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580)**：虚拟环境支持请求。这是 AI 助手执行本地代码的刚需，积压将影响开发者的深度体验。
* ⚠️ **PR [#4571](https://github.com/HKUDS/nanobot/pull/4571)**：原生 A2A 点对点委托机制。这是一个超过几天的重构级 PR，涉及跨代理深度防护，需要维护者进行严密的 Code Review。
* ⚠️ **Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419)**：关于推理深度自适应控制。目前只有 4 条评论，但代表了高级 Agent 的核心诉求，需要团队给出 Roadmap 上的回应。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

这份日报基于 Hermes Agent 在 2026 年 6 月 29 日的 GitHub 数据生成。从数据来看，Hermes Agent 目前正处于一个**功能大爆发与边界安全加固并重**的阶段，社区活跃度极高。

以下是 2026-06-30 的 Hermes Agent 项目动态日报：

### 1. 今日速览
- **社区互动热度创近期新高**：过去 24 小时内，项目新增或活跃的 Issues 达 49 条，PR 提交达 47 条，开发者讨论热情高涨，且 PR 闭合（合并/关闭）率较低，表明项目正处于大量代码提交的积累期。
- **开发重心向“边界安全”倾斜**：社区贡献者（尤其是 `ooiuuii`、`Stoltemberg` 等）集中提交了数十个修复未限制的 HTTP 响应体、UTF-16 字段裁剪的 PR，表明项目正从“能跑就行”向企业级稳定性与防 OOM（内存溢出）推进。
- **多模型与桌面端迎来重要更新**：针对 Bedrock、Gemini、Qwen 的适配 Bug 被集中反馈，同时桌面端（Electron）和 iMessage 等网关接入的底层逻辑正在经历重构与优化。

### 2. 版本发布
*今日无新版本发布。项目主分支正在大量蓄积 PR，预计近期会有一次包含大量安全边界修复和功能叠加的大版本更新。*

### 3. 项目进展
今日有 3 个 PR 被合并或关闭，开发者 `Stoltemberg` 和 `ooiuuii` 是今日最核心的贡献者：
*   **网关与记忆模块核心修复**：针对 `memory replace` 导致的死循环（PR [#55229](https://github.com/NousResearch/hermes-agent/pull/55229)），以及网关会话空闲 TTL 导致的僵尸会话问题（PR [#55232](https://github.com/NousResearch/hermes-agent/pull/55232)），均已提交修复并处于待合并核心队列。
*   **网关安全防线建立**：针对 Signal 网关因无法编码孤立的 UTF-16 代理对而崩溃的问题，已提交清洗代码（PR [#55223](https://github.com/NousResearch/hermes-agent/pull/55223)）；针对上游模型报错（如 401）将鉴权报文直接透传给用户的严重隐患，也已有修复方案在推进中（PR [#55222](https://github.com/NousResearch/hermes-agent/pull/55222)）。
*   **待合并积压庞大**：高达 47 个待合并 PR 表明维护者需要大量精力进行 Code Review，项目在集成层面存在一定瓶颈。

### 4. 社区热点
今日讨论度最高的问题反映了用户在**多模型接入**和**底层内存管理**上的痛点：
*   **[Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866) (评论: 6)**：使用 `Qwen3.6-27B` 配合 vLLM 时，辅助任务频繁报 `System message must be at the beginning` 错误。这说明 Hermes 的内部 Agent 调度机制与部分第三方模型的 prompt 格式强校验存在严重冲突。
*   **[Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438) (评论: 5)**：请求引入原生的高级电子表格 处理技能。用户厌倦了让 AI 现学现用 `pandas` 和 `openpyxl`，希望 Agent 能像拥有终端工具一样，拥有结构化的数据处理 Skill。
*   **[Issue #37897](https://github.com/NousResearch/hermes-agent/issues/37897) (评论: 4)**：要求桌面端提供 i18n 国际化支持。CLI/TUI 已有多语言包，但迅速崛起的 Electron 桌面端目前仍是纯英文硬编码，阻碍了非英语母语用户的采用。

### 5. Bug 与稳定性
今日报告了大量关键 Bug，主要集中在**内存崩溃**、**鉴权异常**和**多模态解析错误**：

**P1 / 严重级别：**
*   **静默死锁导致无响应**：当 `USER.md` 达到字符上限时，Agent 尝试替换记忆但因匹配失败陷入无限重试，最终耗尽算力且不给用户任何反馈（[Issue #42405](https://github.com/NousResearch/hermes-agent/issues/42405)）。*(修复 PR: [#55229](https://github.com/NousResearch/hermes-agent/pull/55229))*
*   **Matrix 网关 inbound 失效**：在引入 `mautrix` 替换 `nio` 客户端的 PR 合并后，Tuwunel homeserver 上的所有入站消息分发全部失效（[Issue #46142](https://github.com/NousResearch/hermes-agent/issues/46142)）。*(目前为 CLOSED 状态，可能已回滚或修复)*

**P2 / 高风险级别：**
*   **macOS 桌面端频发 OOM 崩溃**：当对话上下文达到约 128K token 的压缩阈值时，Electron 渲染进程陷入崩溃重载死循环，导致窗口冻结（[Issue #55191](https://github.com/NousResearch/hermes-agent/issues/55191)）。
*   **鉴权信息泄露**：网关未过滤以 `unexpected status 401 Unauthorized` 开头的上游报错，直接将底层鉴权错误信封推送到了面向人类的聊天窗口中（[Issue #55071](https://github.com/NousResearch/hermes-agent/issues/55071)）。

### 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以清晰看出 Hermes Agent 未来的进化方向：
*   **工作流与群智协同**：PR [#55228](https://github.com/NousResearch/hermes-agent/pull/55228) 引入了 Kanban（看板）工作空间群智协作模式，允许为每个 Worker 指定特定的底层模型。
*   **高级多媒体与浏览器集成**：PR [#19777](https://github.com/NousResearch/hermes-agent/pull/19777) 集成了 ElevenLabs Scribe，改善了语音转文字的多重 key 配额轮换机制；同时社区正在强化 Cloud Browser provider 的稳定性。
*   **下一个版本预期**：预计即将发布的版本将是一个**“防御性编程与网关大修复”**版本。今日激增的近 20 个关于 HTTP 响应体大小限制、UTF-16 边界裁剪的 PR，必将大幅提升系统抵抗恶意 API 响应和内存泄漏的能力。

### 7. 用户反馈摘要
通过提炼 Issue 讨论，当前用户的真实体验呈现两极分化：
*   **满意点**：项目极其强大的集成能力（支持同时接入 Telegram/WhatsApp、Ollama/OpenRouter、Google Drive 等）以及不断创新的 UI（如 EVE 风格的技能星图 PR [#55226](https://github.com/NousResearch/hermes-agent/pull/55226)），让用户感受到了极强的赛博朋克感与极客满足感。
*   **核心痛点**：
    1.  **状态管理脆弱**：如 Issue [#27933](https://github.com/NousResearch/hermes-agent/issues/27933) 反映，在复杂配置下（双 Agent、多网关并发），极易出现内存溢出或 Session 状态混乱。
    2.  **跨平台一致性差**：Windows 桌面端的通知声极小且无任务栏强提醒（[Issue #55179](https://github.com/NousResearch/hermes-agent/issues/55179)），macOS 端重度对话易崩溃。
    3.  **配置反直觉**：如环境变量 `TELEGRAM_BOT_TOKEN` 会无脑强制覆盖 `config.yaml` 里的 `false` 设置（[Issue #55113](https://github.com/NousResearch/hermes-agent/issues/55113)），让追求精细控制的开发者感到沮丧。

### 8. 待处理积压
*   **[Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866)** (创建于 5 月 6 日)：Qwen3.6 的 System message 位置冲突问题已存在近 2 个月，影响所有依赖 vLLM 部署该模型的用户，急需在消息构建层做兼容处理。
*   **[Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438)** (创建于 4 月 1 日)：Rich Spreadsheet 技能需求被广泛讨论，但迟迟没有对应的 PR 立项，建议维护团队考虑将其纳入官方 Tool/Skills 路线图。
*   **[Issue #53329](https://github.com/NousResearch/hermes-agent/issues/53329)**：6 月 25 日大改版引入的 "Projects Paradigm" 导致非 Git 文件夹显示重复的 Lanes，影响基础 UI 体验，需要尽快打补丁。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-06-30  
**项目定位**: AI 智能体与个人 AI 助理开源基础设施

---

### 1. 今日速览
过去 24 小时内，PicoClaw 社区保持着稳健的活跃度，共处理了 3 条 Issue 更新和 3 条 Pull Request 更新。项目当前的重心明显聚焦于**通信网关生态的拓展**以及**底层 LLM 调用成本与状态管理的优化**。虽然今日无新版本发布，且有 3 个功能性 PR 处于待合并状态，但通过关闭旧版 iOS 兼容性 Bug，项目在代码库的轻量化维护方面取得了积极进展。整体来看，项目健康度良好，正在为大版本（预计为 v0.3.0）积蓄功能。

### 2. 版本发布
* **今日无新版本发布**。

### 3. 项目进展
今日虽然没有 PR 被合并，但在 Issue 追踪和功能演进上取得了实质性进展：
* **环境与兼容性清理**：成功关闭了关于旧版 iOS (16.4 以下) Safari 面板失效的 Bug ([Issue #3090](https://github.com/sipeed/picoclaw/issues/3090))，表明项目在前端兼容性边界上已做出明确决策或修复。
* **底层能耗与成本优化**：针对大模型实际使用情况的反馈机制正在完善，待合并的 PR 将支持在 Pico 通道中输出每轮对话的 LLM token 消耗量（区分输入/输出）([PR #3156](https://github.com/sipeed/picoclaw/pull/3156))，这将极大提升下游应用的计费与监控能力。

### 4. 社区热点
今日的社区焦点集中在**去中心化通信网关的接入**上，反映出用户强烈希望将 PicoClaw 作为私有化、抗审查个人 AI 助理的诉求：
* **Issue #3093 [OPEN]**: 用户 `Damian-o2` 提出对 SimpleX、Wire 或 Tox 等隐私通讯协议网关的需求 ([sipeed/picoclaw Issue #3093](https://github.com/sipeed/picoclaw/issues/3093))。该 Issue 反映了部分极客用户对数据隐私的极致追求。
* **PR #3063 [OPEN]**: 开发者 `trufae` 提交了 Delta Chat 网关的实现 ([sipeed/picoclaw PR #3063](https://github.com/sipeed/picoclaw/pull/3063))。这与上述 SimpleX/Tox 的功能请求形成了呼应，预示着 PicoClaw 未来可能在去中心化聊天矩阵中扮演核心 AI 节点的角色。

### 5. Bug 与稳定性
今日关注的稳定性问题主要涉及特定模型和特定环境的边界测试：
1. **[高] 火山引擎 Doubao 模型工具调用泄漏** ([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153))
   * **表现**: 使用 `doubao-seed-2.0-pro` 时，Tool Calls 偶发性地未被执行，而是将原始的 `<seed:tool_call>` XML 文本直接返回给用户。
   * **状态**: 当前处于 OPEN 状态，尚无直接对应的 fix PR。这是由于特定模型输出格式未正确解析引起的严重体验降级，需优先排查解析器逻辑。
2. **[低/已解决] iOS < 16.4 Safari 面板白屏/失效** ([Issue #3090](https://github.com/sipeed/picoclaw/issues/3090))
   * **状态**: 今日已关闭。

### 6. 功能请求与路线图信号
通过对近期 Issues 和 PRs 的交叉比对，我们捕捉到了 PicoClaw 近期的演进路线图：
* **云厂商集成深化（降本增效）**：开发者 `loafoe` 提交了 AWS Bedrock 的 Prompt 缓存功能 PR ([PR #3163](https://github.com/sipeed/picoclaw/pull/3163))。通过利用 Converse API 的缓存点，大幅降低读取和写入的成本。结合前面提到的 Token 用量监控 PR，**“精细化成本控制”**显然是下一个版本的核心主题之一。
* **扩展通讯协议支持**：社区对 Telegram/Discord 之外的私密通讯协议（SimpleX, Tox, Delta Chat）需求旺盛，这可能会成为 PicoClaw 差异化竞争的特色功能。

### 7. 用户反馈摘要
从评论和 Issue 摘要中可以看出：
* **痛点 1：特定模型兼容性粗糙**。用户在使用非 OpenAI 系模型（如国产的豆包大模型）时，经常遭遇 Agent 工具调用失败的窘境，说明多模型适配层的鲁棒性仍需加强。
* **痛点 2：可观测性不足**。开发者迫切需要知道 Agent 在底层消耗了多少 Token（[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) 评论区的讨论反映了这点），以便评估 AI 助手的运行成本。
* **使用场景**：用户正积极将 PicoClaw 部署在树莓派（Debian 13）等轻量级 ARM 设备上，作为随时通过手机浏览器访问的私有 AI 网关。

### 8. 待处理积压
以下条目已被系统打上 `[stale]`（陈旧/停滞）标签，需要维护团队评估是否继续推进或资源倾斜：
* **[PR #3156]**: `feat(pico): emit per-turn LLM token usage...` ([sipeed/picoclaw PR #3156](https://github.com/sipeed/picoclaw/pull/3156))。此功能对企业级落地十分重要，但已停滞数日，建议维护者尽快 Review 并推进合并。
* **[Issue #3153]**: 豆包大模型 Tool Call 泄漏 Bug ([sipeed/picoclaw Issue #3153](https://github.com/sipeed/picoclaw/issues/3153))。由于涉及核心的 Agent 执行链路，不应被标记为 stale，建议提升优先级并指派开发者调查 XML 解析模块。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份 NanoClaw 项目日报基于过去 24 小时的 GitHub 数据，为您客观梳理项目的最新进展与健康度。

---

# 📊 NanoClaw 项目动态日报 (2026-06-30)

### 1. 今日速览
NanoClaw 今日整体活跃度较高，开发重心主要集中在**多渠道集成（Discord/Slack）**、**安全漏洞修复**以及**语音播报体验优化**上。项目今日处理了 10 个 PR（合并/关闭 3 个，新开 7 个），但值得注意的是，**Issues 活跃度为 0**，表明目前主要是核心贡献者在进行集中攻坚和内部代码重构，新引入的外部问题报告较少。整体代码库正在向更安全、多平台兼容的方向迈进。

---

### 2. 版本发布
**今日无新版本发布 (0 Release)。**
项目当前仍处于主干分支的密集开发与修复阶段，考虑到有多个涉及安全和核心功能的 PR（如 Discord 适配器、安全边界修复）仍在待合并状态，预计项目将在完成这批关键 PR 合并后进行下一次版本 tagging。

---

### 3. 项目进展
今日共有 3 个 PR 被合并或关闭，推进了系统的健壮性和开发者体验：

*   🛑 **关闭/修复 意图分流语音系统** ([nanocoai/nanoclaw PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883))
    作者 `tier2tech-tian` 完成了 `voice-notify v3` 的开发。该更新将原本“一刀切”的语音播报改为 5 类意图分流（行动/静音/导航/技术状态/通知），自动跳过冗长的代码块和表格，并加入了运行时一键关闭的 kill-switch。
*   🛠 **关闭/修复 CLI 群组创建报错** ([nanocoai/nanoclaw PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882))
    作者 `omri-maya` 修复了 `ncl messaging-groups create` 命令因缺少 `instance` 字段导致的 `NOT NULL` 约束报错问题，恢复了 CLI 工具的正常可用。
*   🔒 **关闭/修复 智能体间文件转发越权** ([nanocoai/nanoclaw PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879))
    作者 `johnmathews` 修复了 Agent-to-Agent 附件转发时可能因软链接逃逸出会话根目录的安全隐患（关联 Issue #2828）。

---

### 4. 社区热点
*   **语音播报体验升级** ([PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883))
    该 PR 反映了用户在使用 AI 助手时对**长文本和代码的听觉疲劳**痛点。将其拆分为意图识别并过滤无用信息，证明项目正在追求“拟人化、高信息密度”的语音交互体验，也是个人 AI 助手落地场景的一大进步。
*   **部署与监控集成需求** ([PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871), [PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875))
    社区开发者贡献了 Dashboard 状态推送器（支持 OpenCode）以及 Coolify 部署脚本。这表明用户群体对 **PaaS 一键部署**和**实例状态可视化监控**有强烈诉求，自托管个人 AI 助手的工程化配套设施正在完善。

---

### 5. Bug 与稳定性
今日无新开 Issue 报告，但在待合并的 PR 中暴露了几个关键的系统 Bug，按严重程度排列如下：

1.  **【严重 / 安全】宿主机任意文件写入漏洞** (已有 Fix PR)
    **状态**：[PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) 待合并。
    **详情**：暴露了 CWE-59 漏洞。被入侵的 Agent 可在会话目录放置软链接，导致宿主机在写入文件时被欺骗，从而写入宿主机任意位置。该 PR 提供了文件写入路径双重验证的修复。
2.  **【中等 / 功能阻断】单 Provider 初始化 401 错误** (已有 Fix PR)
    **状态**：[PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886) 待合并。
    **详情**：将 NanoClaw 连接到新渠道并注册新 Agent 时，系统强制使用默认的 Claude provider，导致如果用户是单一本地/其他模型安装，会直接触发 401 鉴权失败。
3.  **【中等 / 交互阻断】Discord 审批按钮失效** (已有 Fix PR)
    **状态**：[PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881) 与 [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884) 待合并。
    **详情**：Discord 适配器中，由于 `custom_id` 包含换行符定界符解析错误，导致所有 DM 审批卡片按钮点击无效，Agent 无法被正确授权。

---

### 6. 功能请求与路线图信号
基于最近提交的 PR，可以看出项目下一步的演进路线图：

*   **路线图信号 1：全渠道适配加速**
    - [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884) 引入了完整的 Discord 适配器支持。
    - [PR #2885](https://github.com/nanocoai/nanoclaw/pull/2885) 补齐了 Slack Socket Mode 的引导式配置。
    *分析：NanoClaw 正在从单一的 Web/Slack 交互，迅速扩展到支持 Discord 等主流即时通讯平台，发力“全平台个人 AI 助理”的定位。*
*   **路线图信号 2：多 Agent 编排与监控**
    - [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871) 增加了全局状态推送机制。
    *分析：配合近期修复合并的 A2A (Agent-to-Agent) 通讯机制，NanoClaw 正在构建一个多智能体协同的底层基座，有望在后续版本中推出多 Agent 编排面板。*

---

### 7. 用户反馈摘要
虽然今日 Issues 为 0，但从代码提交的描述中可以提炼出当前自托管用户的真实反馈：
*   **网络环境限制痛点**：单一 Provider 强制绑定默认模型的问题（#2886）侧面反映出，部分用户（特别是在某些网络环境受限地区）使用的是本地模型或非 Claude 模型，系统需要更灵活的 Provider fallback 机制。
*   **部署门槛痛点**：针对 Coolify 的部署 PR（#2875）和 CLI 报错修复（#2882），体现出非硬核开发者在使用命令行初始化和跨平台部署时仍然面临摩擦，社区正致力于降低这一门槛。

---

### 8. 待处理积压
请维护者关注以下待合并的重要 PR 积压（共计 7 个 Open 状态）：

*   ⚠️ **安全修复优先级**：强烈建议立即 Review 并合并 [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)（软链接越权写入），该漏洞级别较高，影响宿主机安全。
*   **核心功能阻断**：[PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886)（单 Provider 401 报错）和 [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881) / [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884)（Discord 相关集成修复），这些直接关系到新用户的第一印象和渠道打通，建议尽快推进 CI 测试并合并入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**报告日期**: 2026-06-30
**项目**: NullClaw (github.com/nullclaw/nullclaw)
**分析师**: AI 智能体与个人 AI 助手开源项目分析组

---

### 1. 今日速览
* 今日 NullClaw 仓库整体处于**低讨论、稳研发**的状态，无新增 Issue 或版本发布。
* 代码贡献方面保持平稳推进，过去 24 小时内有 4 个 PR 更新，其中核心开发者 `vernonstinebaker` 在 AI Agent 核心流式工具调用与 CLI 交互体验上取得了实质性进展。
* 虽然今日缺乏社区层面的高频互动（0 条 Issue 更新），但底层的功能迭代与依赖维护（如 Dependabot）仍在按部就班进行，项目健康度总体保持稳健。

### 2. 版本发布
* 本日无新版本发布。

### 3. 项目进展
今日项目在智能体底层能力与开发者体验（DX）上迈出了坚实的一步，共处理了 4 个关键 PR：
* **🟢 已合并/关闭: CLI 交互体验重构 ([PR #960](https://github.com/nullclaw/nullclaw/pull/960))**
  此前为修复 `nullclaw agent` REPL（交互式命令行）中无法正常处理方向键、历史记录导航和退格键等问题而创建的 PR，已于今日关闭（推测已被新版本逻辑替代或合并）。这标志着终端交互体验的打磨告一段落。
* **🟡 进行中: 原生流式工具调用支持 ([PR #971](https://github.com/nullclaw/nullclaw/pull/971))**
  这是今日最核心的架构级更新。该 PR 将**原生工具调用与 SSE（Server-Sent Events）流式传输路径解耦**。过去，只要附加了流回调，Agent 就会禁用原生工具，强制降级为提示词注入的方式，严重影响了工具执行的准确性和延迟。此 PR 将使支持流式原生工具的 Provider 能够直接触发执行。
* **🟡 进行中: CLI 替代/优化版本 ([PR #970](https://github.com/nullclaw/nullclaw/pull/970))**
  引入了一个零分配的行编辑器，并为 TTY 会话启用 POSIX 原始模式输入。这是对 #960 的延续或替代方案，进一步优化命令行助手的内存占用与输入响应。
* **🟡 进行中: 基础设施升级 ([PR #956](https://github.com/nullclaw/nullclaw/pull/956))**
  由 Dependabot 自动发起，将 Docker 基础镜像 Alpine 从 3.23 升级至 3.24，保障容器化部署的安全性与前沿兼容。

### 4. 社区热点
* **数据表现**: 过去 24 小时内，GitHub Issues 活跃度为 0，所有相关 PR 的评论数也极低（undefined/0 👍）。
* **状态解读**: 当前项目处于典型的**"内部迭代期"或"核心维护者主导期"**。社区并未就某一公共 Bug 或新特性展开爆发式讨论，目前的驱动力完全来自于核心开发团队（如 `vernonstinebaker`）对 AI Agent 执行链路和 CLI 基础体验的深度优化。

### 5. Bug 与稳定性
* 今日没有由社区报告的新增 Bug（0 条 Issue）。
* **已知修复进展**: 命令行中方向键被识别为控制字符并直接打印（如 `^[[A`）的问题，现已通过今日推进的 [PR #970](https://github.com/nullclaw/nullclaw/pull/970) 和关闭的 [PR #960](https://github.com/nullclaw/nullclaw/pull/960) 得到妥善处理。
* **隐患排查**: 之前限制流式输出期间使用原生工具调用的逻辑是一个已知的设计痛点（影响 AI 辅助工具的稳定性），目前正通过 [PR #971](https://github.com/nullclaw/nullclaw/pull/971) 进行深度修复。

### 6. 功能请求与路线图信号
虽然今日无用户主动提交功能请求，但从合并与待合并的 PR 中，可以敏锐捕捉到 NullClaw 接下来的**路线图信号**：
1. **追求极致的实时交互能力**: [PR #971](https://github.com/nullclaw/nullclaw/pull/971) 表明项目正在消除"流式输出"与"Function Calling/工具调用"之间的隔阂。一旦合并，AI 智能体在边输出文本边调用外部 API 时，将拥有更低的延迟和更原生的表现。
2. **打造生产级/本地优先的 Agent REPL**: 连续两个 PR（#970, #960）死磕命令行交互细节（零内存分配行编辑器、POSIX raw-mode），说明 NullClaw 非常重视开发者将 NullClaw 作为个人本地 AI 助手的体验。

### 7. 用户反馈摘要
由于今日无新增 Issue 评论，无法直接提炼终端用户的即时段反馈。但从开发者在 PR 中的 Summary 推断，**核心痛点**在于：以往在流式响应中，工具调用的能力被大幅削弱甚至截断，这对于依赖 NullClaw 构建 Automation Workflow（自动化工作流）的用户来说体验极差。[PR #971](https://github.com/nullclaw/nullclaw/pull/971) 正是对这一幕后痛点的精准打击。

### 8. 待处理积压
* **提醒关注**: 虽然 [PR #971](https://github.com/nullclaw/nullclaw/pull/971) 和 [PR #970](https://github.com/nullclaw/nullclaw/pull/970) 为今日最新更新，但由于缺乏评论数据，它们仍处于 `[OPEN]` 待合并状态。建议维护者尽快进行 Code Review 并推进 CI/CD 测试，以便在下一个版本中释出这些重磅的 Agent 能力升级。
* [PR #956](https://github.com/nullclaw/nullclaw/pull/956) 已开启 15 天，建议确认 Alpine 3.24 的兼容性后尽快合并，避免供应链安全滞后。

---
*免责声明：本报告基于 GitHub 过去 24 小时的静态数据生成。各项 PR 的具体合并状态及内部逻辑变更请以仓库主分支实际代码为准。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-06-30 | **分析数据源**: 过去 24 小时 GitHub 活动

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持了**极高的开发与测试活跃度**，共处理了 50 个 PR 更新与 13 个 Issue 更新。从提交标签和内容来看，项目正处于 **IronClaw Reborn (WebUI v2) 的密集打磨与 QA 攻坚阶段**。核心团队（如 `ilblackdragon`, `serrrfirat`, `henrypark133`）正大范围重构端到端（E2E）测试框架、迁移遗留浏览器覆盖用例，并针对近期 QA Bash 发现的多个体验与协议层缺陷进行定点修复。整体项目健康度良好，工程化推进极其迅速，但底层大模型（如 DeepSeek-V4-Flash）与多工具复杂链路的兼容性仍是目前的痛点。

## 2. 版本发布
今日无正式 Release 版本发布。但值得关注的是，自动化发版 PR **#5311 [chore: release]** 正在进行中。
该 PR 计划将主版本从 `0.24.0` 跨跃升级至 **`0.29.1`**，并包含多个底层 Crate 的破坏性变更：
* `ironclaw_common`: 0.4.2 -> 0.5.0 (⚠️ API 破坏性变更)
* `ironclaw_skills`: 0.3.0 -> 0.4.0 (⚠️ API 破坏性变更)
这意味着下一个正式版本发布时，外部插件或依赖这些库的开发者将需要进行代码迁移。

## 3. 项目进展
今日项目在测试基建和体验闭环上迈出了一大步，共合并/关闭了 22 个 PR，关键进展如下：
* **测试基建整合**: [PR #5392](https://github.com/nearai/ironclaw/pull/5392) 合并，引入了全新的 Reborn 集成测试框架（涵盖 LibSql 矩阵、HTTP 匹配器、MCP/OAuth 等），大幅提升内部真实栈的测试覆盖能力。
* **WebUI 测试迁移**: 关闭了多个由 `ilblackdragon` 提交的 XL 体积 PR，包括 [PR #5372](https://github.com/nearai/ironclaw/pull/5372)（认证与审批 UX 覆盖）和 [PR #5371](https://github.com/nearai/ironclaw/pull/5371)（聊天历史覆盖），彻底将遗留的浏览器测试平稳过渡到新架构。
* **QA 自动化闭环**: [PR #5406](https://github.com/nearai/ironclaw/pull/5406) 和 [PR #5424](https://github.com/nearai/ironclaw/pull/5424) 合并，优化了 Reborn 实时 QA 机制，使其直接调用 QA 表格中的 Prompt，并将失败用例的详细 Trace 链接推送到 Slack，大幅提升排查效率。
* **错误透传优化**: [PR #5403](https://github.com/nearai/ironclaw/pull/5403) 正在推进，改变过去将错误细节“过度打码”为泛泛分类的做法，现在除了机密信息外，将真实的报错堆栈和 Provider 错误透传给大模型和用户，极大有利于 Agent 自我纠错。

## 4. 社区热点
今日活动聚焦于 IronClaw Reborn 环境下的复杂 Agent 交互场景与兼容性排错：
* **[Issue #5411](https://github.com/nearai/ironclaw/issues/5411) (每日失败分类学分析)**: 核心开发者 `pranavraja99` 发起的每日 Bench 结果分析。指出在使用慢速模型（DeepSeek-V4-Flash）时，111 个未通过的任务中绝大多数是因为 Agent 陷入 HTTP 循环或提前结束回答，直接催生了 [PR #5353](https://github.com/nearai/ironclaw/pull/5353) 和 [PR #5304](https://github.com/nearai/ironclaw/pull/5304) 的修复。
* **[Issue #5413](https://github.com/nearai/ironclaw/issues/5413) (OAuth 刷新静默失败)**: 开发者 `thisisjoshford` 指出 OAuth 刷新未生效时系统静默失败，导致诊断极其困难。该 Issue 已被迅速关闭，相关暴露错误的补丁应该已合并。
* **[PR #5313](https://github.com/nearai/ironclaw/pull/5313) (存储压力测试)**: `serrrfirat` 引入了针对文件系统资源管理器的压力测试组件，支持 LibSQL 和 Postgres，表明项目正在为更高并发的数据持久化做性能侧的准备。

## 5. Bug 与稳定性
昨日（6月29日）的 QA Bash 集中暴露了大量交互与逻辑 Bug，按严重程度排序如下：

**P1 严重**
* **[Issue #5415](https://github.com/nearai/ironclaw/issues/5415): 多工具 Google Sheets 工作流协议冲突崩溃**
  * 表现: 当 Agent 执行“读取邮件 -> 提取 -> 写入 Google 表格”这种需要 18-25 次工具调用的长链路任务时，必定因 "protocol violation" 崩溃。
  * 状态: 暂无专属 Fix PR，属于核心阻断性问题。

**P2 高优**
* **[Issue #5421](https://github.com/nearai/ironclaw/issues/5421): Web 搜索无法实现 Zero-Config**
  * 表现: 聊天正常，但一旦触发 Web 搜索，就要求用户输入 NEAR AI API Key。捆绑的默认搜索能力未自动激活。
* **[Issue #5420](https://github.com/nearai/ironclaw/issues/5420): 自动化任务全局作用域污染**
  * 表现: 自动化派发目标是基于账户的“全局默认”而非“单个任务”。设置一个任务推送到 Slack，会导致所有的邮件摘要任务也跑到 Slack。
* **[Issue #5417](https://github.com/nearai/ironclaw/issues/5417): 错误的技能被激活**
  * 表现: 请求搜索 Hacker News 时，Agent 激活了 `tech-debt-tracker` 而不是 Web 搜索技能。
* **[Issue #5196](https://github.com/nearai/ironclaw/issues/5196) [已关闭]: 工具重复授权死循环**。触发“每次询问”时，点击同意后依然报 Authorization 错误并再次弹窗要求授权。

**P3 普通**
* **[Issue #5416](https://github.com/nearai/ironclaw/issues/5416)**: 错误的 Gmail 连接状态导致对话逻辑自相矛盾。
* **[Issue #5418](https://github.com/nearai/ironclaw/issues/5418)**: UI 渲染乱序，Agent 回复浮在了工具执行进度块的前面。
* **[Issue #5419](https://github.com/nearai/ironclaw/issues/5419)**: 无法重命名系统自动生成的长串自动化任务名称。
* **[Issue #5412](https://github.com/nearai/ironclaw/issues/5412) [已修复]**: WebUI 日志不可选中复制。已由 [PR #5414](https://github.com/nearai/ironclaw/pull/5414) 修复并关闭。

## 6. 功能请求与路线图信号
* **基于上下文的自动批准优化**: [Issue #4776](https://github.com/nearai/ironclaw/issues/4776) (已关闭) 与 [PR #5247](https://github.com/nearai/ironclaw/pull/5247) 表明，团队正在重构 WebUI v2 的权限面板。用户将在审批弹窗中直接看到“始终允许”的全局快捷设置，降低多步工具调用的打断感。
* **更智能的 Agent 兜底机制**: [PR #5304](https://github.com/nearai/ironclaw/pull/5304) 引入了 `final-answer nudge`（最终回答轻推）。如果 Agent 在执行完工具但忘记总结回答（即空回复退出）时，系统会自动介入合成一段结束语，极大提升普通用户的体验。
* **RBAC 权限收敛**: [PR #5425](https://github.com/nearai/ironclaw/pull/5425) 提交了多用户 RBAC 的设计规范，原则是“尽可能复用现有逻辑，不引入新的权限分层”，为多租户场景铺路。

## 7. 用户反馈摘要
* **痛点 1：复杂工作流容易断裂**。用户在尝试将 Gmail 数据同步到 Sheets 时遭遇阻断（#5415），证明在涉及 20+ 次工具连跳的复杂场景下，Agent Loop 的稳定性仍面临严峻考验。
* **痛点 2：认证体验割裂**。用户反馈 Web Search 仍脱离不了 API Key 的梦魇（#5421），且 OAuth 状态判断混乱（#5416），说明“零配置开箱即用”的愿景在 Reborn 架构下还需要进一步打磨。
* **痛点 3：UI 动态时序错乱**。多个反馈指出自动化设置串台（#5420）和聊天记录顺序错乱（#5418），反映出前端在处理异步 Tool Activity 与主聊天流渲染时存在竞态条件问题。

## 8. 待处理积压
* **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 测试失败**: 自 5 月 27 日创建至今未关闭，自动化流水线在 `features` 测试集上依然存在阻断，需要关注是否与今日合并的几个 E2E 重构 PR 有关。
* **体积庞大且尚未合并的 XL PR 积压**: 目前有多个被标记为 `size: XL` 的 PR 处于 Open 状态（如 [PR #5313](https://github.com/nearai/ironclaw/pull/5313), [PR #5394](https://github.com/nearai/ironclaw/pull/5394), [PR #5402](https://github.com/nearai/ironclaw/pull/5402)），核心团队的 Review 压力较大，可能会影响后续功能分支的合并速度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报**
**日期**: 2026-06-30
**分析数据源**: netease-youdao/LobsterAI

---

### 1. 今日速览
过去 24 小时内，LobsterAI 项目展现出极高的开发活跃度与工程推进效率。团队于昨日（6月29日）密集合并了 39 个 PR，并成功发布了全新的 `2026.6.29` 版本。本次更新的核心聚焦于底层架构 OpenClaw 的深度集成与稳定性优化，以及任务定时调度的体验升级。社区方面交流活跃，共有 11 个 Issue 更新（包含 8 个活跃/新建 Issue），用户对任务流连续性及 Token 消耗等核心体验提出了针对性建议。整体而言，项目正处于功能整合与系统稳健性打磨的关键快车道上。

### 2. 版本发布
**最新 Release: LobsterAI 2026.6.29** 
🔗 [查看 Release 详情](https://github.com/netease-youdao/LobsterAI)
- **集成与稳定性**: 显著提升 OpenClaw 集成的稳定性，修复了用户对话轮次缓存（turn cache）稳定性问题，保持 agent bootstrap workspace 与 task cwd 的隔离，防止 agent 身份与人设记忆（如 SOUL.md）丢失 ([PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227))。
- **权限与网关路由**: 将插件审批路由通过 Cowork 权限系统进行规范 ([PR #2217](https://github.com/netease-youdao/LobsterAI/pull/2217))；将 OpenAI OAuth 正确路由至 ChatGPT responses provider ([PR #2221](https://github.com/netease-youdao/LobsterAI/pull/2221))。
- **定时任务**: 保留并修复 cron 运行的后续历史记录，避免历史数据被破坏性替换 ([PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220))。
- **UI 导航**: 修复并重新应用了会话侧边栏的导航预览、悬浮样式及懒加载修复 ([PR #2226](https://github.com/netease-youdao/LobsterAI/pull/2226))。
- **迁移注意事项**: 新版本网关启动前会自动检测并迁移旧版的 OpenClaw cron JSON/run-log 存储，升级过程对用户平滑过渡 ([PR #2189](https://github.com/netease-youdao/LobsterAI/pull/2189))。

### 3. 项目进展
今日项目整体向前迈进了重要一步，完成了约 40 项代码块的更新与合并，标志着 OpenClaw 核心运行时的成熟：
- **IM 插件生态扩充**: 预装并适配了 OpenClaw 2026.6.1 的 IM 官方插件，新增对 QQ、Discord ([PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198)) 以及钉钉、飞书、企业微信、POPO 的支持升级 ([PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182))。
- **任务调度生命周期优化**: 同步了 cron 运行会话（[PR #2190](https://github.com/netease-youdao/LobsterAI/pull/2190)），并在 UI 层明确了定时任务的启动、加载、就绪和错误状态，减少了用户等待焦虑 ([PR #2191](https://github.com/netease-youdao/LobsterAI/pull/2191))。
- **代码与测试质量**: 完善了仓库贡献指南与 lint 策略 ([PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184))，并同步了 OpenClaw 的元数据测试对齐 ([PR #2187](https://github.com/netease-youdao/LobsterAI/pull/2187))。

### 4. 社区热点
今日活跃的 Issue 主要集中在“产品体验痛点”与“生态支持诉求”上：
- **生态支持诉求**: [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131) 用户积极询问 LobsterAI 是否有计划支持 `hermes agent`，反映出社区对扩展 Agent 兼容性的期待。
- **UI 展示与体验**: [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 用户详细反馈了在 2K/高分屏下技能界面双列展示不佳的问题，建议改为 3 列；同时提议加入“预输入下一个任务”功能以提升连贯性。
- **订阅机制争议**: [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081) 已关闭，用户反映订阅的积分在月底未使用即被清零，引发对商业计费策略的不满，需引起运营团队关注。

### 5. Bug 与稳定性
按严重程度排列的 Bug 及报告：
- **高危 - 内存/Token 异常消耗**: 
  [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 用户发现 Agent 出现重复输出文本的现象，担忧会大量且无意义地消耗 Token。*目前尚未见到明确的针对性 fix PR，需重点关注排查。*
- **中危 - 长时间任务执行中断**: 
  [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 用户在进行数据获取脚本监控时，遭遇 `terminated` 提示，导致脚本虽在运行但 Agent 监控停止。
- **中危 - 执行结果窗口假死**: 
  [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079) 2026.5.27 版本可复现的 Bug：执行结果窗口滚动到顶端时会出现 UI 假死。
- **低危 - 定时任务更新无响应 (陈旧历史遗留)**: 
  [Issue #1390](https://github.com/netease-youdao/LobsterAI/issues/1390) 设置定时任务后点击编辑并更新，偶发点击无响应的情况。

### 6. 功能请求与路线图信号
- **多 IM 平台接入 (已落地)**: 从今日合并的 [PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198) 和 [PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182) 可以看出，**“全平台 IM 消息网关化”** 是当前的明确路线图。LobsterAI 正迅速补齐 QQ、Discord、钉钉、飞书等主流通讯软件的打通。
- **任务流连续性优化 (探索中)**: [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 提出的“任务排队与预输入”功能非常契合自动化办公场景，随着当前版本 cron 稳定性的修复（[PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220)），该功能极有希望被纳入下一版本的迭代计划中。

### 7. 用户反馈摘要
- **核心痛点**: 用户最担忧的是**稳定运行时长**与**成本**。长时间执行任务被系统意外 `terminated`，以及疑似 Bug 导致的重复输出“狂吃 Token”（[Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)），直接影响了用户信任。
- **使用场景**: 用户正在尝试将 LobsterAI 作为“长期数据监控与抓取脚本”的执行宿主，这要求底层具备更强的进程防挂起机制和超时容忍度。
- **满意点**: 用户对技能的丰富度和系统的快速迭代有较高认可，高分屏用户的审美需求（UI 列数展示）也从侧面印证了用户将其作为日常主力工具的倾向。

### 8. 待处理积压
系统中有几个超过 2 个月未彻底解决的陈旧 Issue，建议维护团队集中进行一次清理或状态更新：
- [Issue #1389](https://github.com/netease-youdao/LobsterAI/issues/1389) **国际化 Bug**: 切换英文后，中文选项仍显示英文（标记为 `[stale]`）。
- [Issue #1386](https://github.com/netease-youdao/LobsterAI/issues/1386) **分享功能 Bug**: 聊天内容过长时，分享生成的长图存在内容截断不全的情况。
- [Issue #1388](https://github.com/netease-youdao/LobsterAI/issues/1388) **邮箱配置 Bug**: 点击测试邮箱连通性后卡死在连接中状态。
- **机器人依赖更新**: [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Dependabot 提交的 Electron (40.2.1 升至 42.5.0) 跨版本升级 PR 已挂起近 3 个月，需评估是否合并以防止底层依赖脱节过远。

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

# CoPaw (QwenPaw) 项目动态日报
**报告日期**: 2026-06-30
**数据来源**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

### 1. 今日速览
CoPaw 项目当前处于**极度活跃**的开发与迭代状态，过去 24 小时内共处理了 30 条 Issue 更新（21 活跃/9 关闭）和高达 50 条 PR 更新（31 待合并/19 已合并或关闭）。项目正处于向 **v2.0.0 正式版** 迈进的冲刺阶段（已发布 v2.0.0-beta.1），核心关注点集中在 **AgentScope 2.0 架构融合、上下文/记忆管理优化、IM 渠道（飞书/钉钉）体验修复** 以及**前端控制台的海量单元测试覆盖**上。整体项目健康度优秀，社区参与度极高，多项关键 Bug 已迅速得到社区贡献者的 PR 修复。

---

### 2. 版本发布
* **今日无新正式版发布**。
* **正在进行**: 根据 [Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) 显示，团队正在紧密推进 **v2.0.0-beta.1 (Beta)** 的发布与跨平台安装验证工作。

---

### 3. 项目进展
今日项目在架构重构、安全文档和测试覆盖率上取得了重大进展，共关闭/合并了 19 个 PR：
* **安全与文档完善**: PR [#5621](https://github.com/agentscope-ai/QwenPaw/pull/5621) 全新添加了沙盒安全文档，详细阐述了 macOS Seatbelt 和 Linux Bubblewap 的内核级隔离机制。
* **2.0 架构遗留修复**: PR [#5511](https://github.com/agentscope-ai/QwenPaw/pull/5511) 恢复了在 2.0 分支合并时丢失的 Langfuse 链路追踪功能；PR [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) 修复了运行时重构导致第三方 IM 渠道无法接收工具审核通知的问题。
* **测试覆盖率大幅提升**: 合并了多个针对前端控制台和核心模块的单元测试 PR（如 PR [#5423](https://github.com/agentscope-ai/QwenPaw/pull/5423) crons 模块 51 个用例，PR [#5422](https://github.com/agentscope-ai/QwenPaw/pull/5422) chats 模块 38 个用例），为 v2.0.0 的稳定性保驾护航。

---

### 4. 社区热点
今日社区讨论焦点主要围绕**大模型接入成本、长文本处理与多 Agent 稳定性**：
* **API 成本优化探讨**: [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) 讨论了 DeepSeek 系列模型前缀缓存命中率仅 95% 的问题。由于缓存未命中的 token 价格是命中的 4-20 倍，社区呼吁从底层优化命中率以降低高昂的 API 开销。
* **多 Agent 并发死锁**: [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 报告了同时开启两个子 Agent 会导致主 Agent 陷入无限快速轮询，且在飞书端无法打断。这暴露出在复杂任务编排下的并发控制缺陷。
* **工具调用结果截断与上下文保护**: [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) 深入讨论了在 LLM 调用失败（如 502）时，历史工具结果未被修剪导致上下文爆炸的级联失败问题。

---

### 5. Bug 与稳定性
按严重程度排列的今日重点 Bug 及其修复状态：
1. **【P0 严重 - 数据丢失】异常中断导致对话记录丢失**: [Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) 指出在宿主机重启或服务崩溃时，当前对话进度直接消失，缺乏断点保存机制。*(暂无对应修复 PR)*
2. **【P1 高 - 功能阻断】MiniMax-M3 视觉请求被误杀**: [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) (已关闭)，安全审核报错被系统误判缓存为模型不支持图片，导致后续图片被剥离。*(已被官方确认并修复)*
3. **【P1 高 - 功能阻断】DeepSeek V4 兼容性 400 错误**: [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) 在 OpenAI 兼容端点开启 thinking 模式时，因 Schema 包含 `null` 类型导致必现的 400 报错。
4. **【P2 中 - UI 交互】前端工具卡片计数恒为 1**: [Issue #5624](https://github.com/agentscope-ai/QwenPaw/issues/5624) / [Issue #5626](https://github.com/agentscope-ai/QwenPaw/issues/5626) 文件检索工具返回几百个文件，前端始终只显示“1文件”。*(已提交修复 PR: [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628))*
5. **【P2 中 - 噪音污染】控制台疯狂打印轮询日志**: [Issue #5591](https://github.com/agentscope-ai/QwenPaw/issues/5591) (已关闭) UOS 系统下一晚打印数万条 inbox/events 请求日志。*(已修复)*

---

### 6. 功能请求与路线图信号
从今日的 Issue 和 PR 活跃度来看，以下几个维度的功能需求极有可能被纳入 v2.0.0 正式版路线图：
* **记忆与上下文管理强化**: 
  * [Issue #5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) 请求在记忆搜索中加入专用 Reranker 模型实现两阶段精准检索。
  * [PR #5629](https://github.com/agentscope-ai/QwenPaw/pull/5629) 正在修复系统提示词，以抑制 Agent 过度热情的记忆写入行为，避免浪费 Token。
* **高可用与容灾机制**:
  * [Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) 强烈请求支持**模型自动降级**（配额耗尽/超时自动切换备用模型），这对长时间运行的自动化任务至关重要。
* **IM 渠道深度适配**:
  * 钉钉渠道迎来多个细节优化请求，包括：支持 Agent 之间互相 `@` ([Issue #5564](https://github.com/agentscope-ai/QwenPaw/issues/5564))、将本地图册以预览图形式发送而非文件 ([Issue #5593](https://github.com/agentscope-ai/QwenPaw/issues/5593))。

---

### 7. 用户反馈摘要
通过提炼 Issue 评论，总结真实用户的核心痛点与反馈如下：
* **企业级场景的脆弱性**: 用户大量使用 CoPaw 接入飞书、钉书进行办公自动化，但长文本发送失败 ([Issue #5561](https://github.com/agentscope-ai/QwenPaw/issues/5561))、流式输出过慢 ([Issue #5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)) 以及无预警的任务中断 ([Issue #5616](https://github.com/agentscope-ai/QwenPaw/issues/5616)) 极大影响了工作效率。
* **第三方中转 API 的兼容性痛点**: 很多用户通过第三方兼容站点使用 DeepSeek、Qwen 等模型，但由于中转站对 Schema 的校验标准不一（如对 `null` 类型的处理），导致频繁出现 400 错误，用户期望官方能做更多的“兜底清洗” ([Issue #5543](https://github.com/agentscope-ai/QwenPaw/issues/5543))。
* **本地部署体验**: 开发者希望在 Windows 上有更优雅的后台静默运行方案 ([Issue #5622](https://github.com/agentscope-ai/QwenPaw/issues/5622))。

---

### 8. 待处理积压
请维护者关注以下具有一定讨论热度但尚未彻底解决或需持续跟进的条目：
* **PR #5296** [OPEN]: 关于 ADBPG (阿里云 AnalyticDB PostgreSQL) 长期记忆仅保留 REST 模式的重构，已开启 11 天，等待最终 Review。
* **PR #5510** [OPEN]: 添加工具响应的硬限制以防止上下文爆炸，作为防御性编程的关键一环，等待合并。
* **Issue #5584** [OPEN]: 用户报告从 1.1.7 升级后，无法连接自定义的 ascend-vllm 模型（报 APIConnectionError），疑似近期版本的回归 Bug，需排查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这份报告基于 ZeroClaw 项目过去 24 小时的 GitHub 追踪数据，为您生成 2026-06-30 的项目动态日报。

### 1. 今日速览
ZeroClaw 今日呈现出极高的开源项目活跃度，数据处理量达到或超过单日 50 个 Issue 和 50 个 PR 的更新阈值（其中包含 43 个活跃/新开 Issue，40 个待处理 PR）。
项目目前正处于 **v0.8.3 版本** 的密集开发与重构周期中，核心焦点集中在 **SOP（标准操作程序）执行引擎的引入、WASM 插件体系的重构、以及多通道（Channel）能力的横向扩展**。
尽管今日无新版本发布，但代码合并率稳健，且社区在多项高风险（Risk:High）RFC 架构讨论上达成了共识，项目整体处于非常健康且快速迭代的上升期。

### 2. 版本发布
**本日无新版本发布（0 Releases）。**
当前主干分支正在为 `v0.8.3` 版本进行大量特性积攒与底层重构，开发者建议在生产环境中谨慎直接拉取 master 分支，待官方版本打包发布。

### 3. 项目进展
今日团队合并/关闭了 10 个 PR，取得了多项关键进展，标志着 ZeroClaw 正在向更强的安全性与多通道兼容性迈进：
*   **SOP 引擎安全护栏上线：** [PR #8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502) 完成了 SOP 载荷安全防护的引入，加入了不可信触发器限制和外发信息脱敏（Redaction）功能。同时，[PR #8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493) 强制实施了 SOP 步骤级别的工具作用域控制。
*   **多模态视觉路由修复：** [PR #8468](https://github.com/zeroclaw-labs/zeroclaw/pull/8468) 修复了一个影响视觉处理的严重降级问题。此前如果配置了独立的 `vision_model_provider`，媒体管道会错误地剥离图片字节，现已纠正。
*   **文档与兼容性优化：** [PR #8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436) 完善了关于历史消息记录截断（`max_history_messages`）的文档；[PR #8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441) 修复了 Groq 原生工具调用缺乏 `name` 字段导致请求报错的问题。

### 4. 社区热点
社区今日的讨论热度极高，焦点集中在**底层模型提供商兼容性与系统级架构扩展**上：
*   **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (11条评论):** Kimi-Code 提供商在流式输出调用工具时触发 API 报错（`thinking is enabled but reasoning_content is missing`）。这反映出社区对深度适配国产/新兴大模型 API 规范的强烈需求。
*   **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9条评论):** 系统提示词中的“工具可用性”在不同入口点（WebSocket、多模态、/think）表现不一致。高互动量表明开发者在复杂 Agent 工作流中深受“提示词与实际工具状态脱节”的困扰。
*   **[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6条评论):** RFC：请求增加桌面端 Computer-use 能力（屏幕截图与键鼠控制）。对标 OpenAI Codex 等竞品，这是个人 AI 助手迈向全自动执行的关键一环。

### 5. Bug 与稳定性
今日报告了数个高优先级（P1/High）的 Bug，部分核心工作流被阻塞：
*   **S1 级 - 频道阻塞:** [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) 报告 Telegram 频道无法配置，`channels doctor` 报错且机器人无响应，当前工作流被完全阻断，尚在排查中。
*   **S1 级 - 历史遗留 Bug 修复推进:** [Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) 报告多模态设置 `vision_provider` 被静默忽略。目前已被 [PR #8468](https://github.com/zeroclaw-labs/zeroclaw/pull/8468) 解决。
*   **S2 级 - 静默数据泄漏:** [Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) 指出国际化翻译工具在修复泄漏后，会留下导致泄漏文本重新被写入 PO 文件的陈旧条目，属静默数据丢失，正在处理中。
*   **S2 级 - 消息冗余发送:** [Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) 及衍生 Issue [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) 指出，Cron 定时任务和频道任务在无需回复的场景下，仍会向用户发送字面量 `NO_REPLY`，造成消息打扰。

### 6. 功能请求与路线图信号
基于数据，我们可以清晰看到 ZeroClaw 下一阶段（v0.8.3 及后续）的技术路线图：
*   **全量拥抱 WASM 插件化：** [Issue #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)（v0.8.3 WASM 插件追踪）、[Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)（默认启用 WASM 插件运行时，消除 Node.js 依赖）、以及 [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)（使用 OCI 容器镜像仓库作为插件分发机制）。
*   **标准化 Agent 通信协议：** [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) 提议支持 A2A（Agent-to-Agent）发现机制，通过 `.well-known/agent-card.json` 实现多 Agent 安装实例的互相寻址。
*   **全新的 Channel 接入：** 多个 XL 体积的 PR（如 [PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) 接入 Inkbox 支持 Email/SMS/Voice；[PR #8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) 接入 GitHub App 事件作为 Channel）表明 ZeroClaw 正试图接管开发者和极客用户的全生命周期通讯入口。

### 7. 用户反馈摘要
从 Issue 描述和评论中可以提炼出以下核心用户反馈：
*   **痛点 1：桌面端体验割裂。** [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) 指出 macOS 客户端的快捷键（ZeroCode TUI）混乱且难以触发，用户在操作时感到“被误导”。
*   **痛点 2：定时任务不够智能。** 用户反馈 Cron 任务往往只是机械地执行并汇报，即使没有异常也会发 `NO_REPLY` 打扰用户（[Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)）。用户期望 Agent 具备“静默判断”的能力。
*   **期待：更强的自动化执行。** 开发者社区对“Computer Use”（[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)）表现出浓厚兴趣，期望 Agent 能跨越纯 API 调用，直接干预本地桌面 GUI。

### 8. 待处理积压
*   **未恢复的批量回滚代码：** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪了此前因紧急回滚而丢失的 153 个提交。这是一个长期且需要持续关注的任务（标记为 `help wanted`），需要社区协助审计以恢复丢失的修复补丁，可能存在已被遗忘的安全/功能隐患，维护者需重点关注。

</details>