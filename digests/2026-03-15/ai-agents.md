# OpenClaw 生态日报 2026-03-15

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-14 22:01 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

以下是根据 OpenClaw 项目 2026-03-15 的 GitHub 数据生成的动态日报。

---

# 📊 OpenClaw 项目动态日报 (2026-03-15)

## 1. 今日速览

OpenClaw 今日处于**极高活跃度**状态，社区反馈热烈。过去24小时内共有 **500 条 Issue 更新**（其中 452 条为新开/活跃）和 **500 条 PR 更新**，显示出项目正在经历快速迭代或由于近期版本变更引发的社区震荡。

项目刚刚发布了 **v2026.3.13-1** 恢复版本，旨在修复前序版本发布过程中的标签问题。然而，从 Issue 反馈来看，**v2026.3.12 及 v2026.3.11 引入了严重的回归问题**（OOM 崩溃、工具丢失、UI 故障），导致社区负面情绪积压。目前待合并 PR 堆积严重（410 条），维护团队面临巨大的代码审核与稳定性修复压力。

## 2. 版本发布

### 🔴 v2026.3.13-1 (Recovery Release)
*   **类型**: 紧急修复/恢复发布
*   **链接**: [openclaw v2026.3.13-1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.13-1)
*   **核心内容**:
    *   这是一个恢复性版本。由于 GitHub 不可变发布的特性，原 `v2026.3.13` 标签发布后无法复用，因此发布了 `v2026.3.13-1`。
    *   **重要提示**: 对应的 NPM 版本号依然是 `2026.3.13`，而非 `2026.3.13-1`。
*   **破坏性变更/迁移注意**: 无代码层面的破坏性变更，主要涉及发布流程的修复。

### ⚪ v2026.3.13-beta.1
*   **类型**: 预发布版
*   **链接**: [openclaw v2026.3.13-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.13-beta.1)
*   **核心内容**: 针对 NPM beta 标签的预发布版本，包含 Android/聊天设置的界面重设计。

## 3. 项目进展

尽管面临大量 Bug 反馈，项目仍在积极推进功能迭代与架构优化，今日合并/关闭了 90 个 PR。

*   **多平台支持与架构解耦**:
    *   [PR #45769](https://github.com/openclaw/openclaw/pull/45769): 为 Linux/Docker/VPS 环境增加了无头现有会话 MCP 支持，解决了该环境下无法使用浏览器控制的问题。
    *   [PR #45132](https://github.com/openclaw/openclaw/pull/45132): Slack 频道引入 `mux` 接收器，支持多网关部署，提升了企业级部署的灵活性。
*   **稳定性与用户体验修复**:
    *   [PR #46594](https://github.com/openclaw/openclaw/pull/46594): 修复了 Web UI 聊天自动滚动与手动滚动冲突的问题，改善了阅读体验。
    *   [PR #46606](https://github.com/openclaw/openclaw/pull/46606): 修正了上下文使用率警告横幅的计算逻辑（使用 `totalTokens`），解决了误报问题。
    *   [PR #40176](https://github.com/openclaw/openclaw/pull/40176): 修复了跨智能体子代理生成时的 workspace 继承错误。
*   **安全性**:
    *   [PR #14836](https://github.com/openclaw/openclaw/pull/14836): 防止 API Key 写入 `models.json` 从而导致凭证泄露，增强了运行时安全性。

## 4. 社区热点

今日社区讨论集中在近期版本的严重回归问题上，尤其是 UI 和工具调用方面。

1.  **[Issue #45471] UI chat not opening (🔥 Hot)**
    *   **链接**: [openclaw/openclaw #45471](https://github.com/openclaw/openclaw/issues/45471)
    *   **热度**: 66 评论
    *   **分析**: 升级最新版后 Chat UI 无法打开。这是目前最热门的 Issue，直接阻碍了用户使用，表明近期前端重构可能存在严重缺陷。
2.  **[Issue #45074] CRITICAL: Tools intermittent 'Tool not found'**
    *   **链接**: [openclaw/openclaw #45074](https://github.com/openclaw/openclaw/issues/45074)
    *   **热度**: 19 评论
    *   **分析**: 自 2026.3.11 升级后，核心工具（read, exec）调用有 50% 概率失败。此类核心功能失效严重打击用户对 Agent 稳定性的信任。
3.  **[Issue #45064] Memory Leak - OOM on basic commands**
    *   **链接**: [openclaw/openclaw #45064](https://github.com/openclaw/openclaw/issues/45064)
    *   **热度**: 17 评论
    *   **分析**: 基础 CLI 命令导致 JavaScript 堆内存溢出（OOM），使得 CLI 完全不可用。这是严重的性能回归。
4.  **[Issue #45171] WhatsApp outbound send path broken**
    *   **链接**: [openclaw/openclaw #45171](https://github.com/openclaw/openclaw/issues/45171)
    *   **热度**: 15 评论
    *   **分析**: WhatsApp 自动回复可用，但主动发送/跨会话发送失败。集成的特定路径回归影响了自动化工作流。

## 5. Bug 与稳定性

今日报告了大量高严重程度的 Bug，项目当前稳定性面临挑战。

| 严重程度 | 描述 | 状态 | 链接 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical** | **OOM Crash**: 基础命令导致内存溢出 | Open | [Issue #45064](https://github.com/openclaw/openclaw/issues/45064) | v2026.3.12 引入 |
| **🔴 Critical** | **Tool Not Found**: 工具调用间歇性失败 (50%) | Closed | [Issue #45074](https://github.com/openclaw/openclaw/issues/45074) | v2026.3.11 引起 |
| **🔴 Critical** | **UI Crash**: 聊天界面无法打开 | Open | [Issue #45471](https://github.com/openclaw/openclaw/issues/45471) | 影响最新版 |
| **🟠 High** | **Handshake Timeout**: CLI 与本地网关握手失败 | Open | [Issue #45419](https://github.com/openclaw/openclaw/issues/45419) | WebUI 正常，CLI 异常 |
| **🟠 High** | **Auth Error**: OpenRouter 401 认证头丢失 | Open | [Issue #34830](https://github.com/openclaw/openclaw/issues/34830) | 回归问题 |
| **🟡 Medium** | **Gateway Crash**: Telegram typing keepalive 缺少熔断机制 | Open | [Issue #45759](https://github.com/openclaw/openclaw/issues/45759) | 网络故障导致网关崩溃 |

**已有修复 PR**:
*   针对工具调用和 Workspace 继承问题，已有 [PR #40176](https://github.com/openclaw/openclaw/pull/40176) 合并。
*   针对上下文警告误报，已有 [PR #46606](https://github.com/openclaw/openclaw/pull/46606) 待合并。

## 6. 功能请求与路线图信号

*   **多语言支持**: [PR #46603](https://github.com/openclaw/openclaw/pull/46603) 添加了土耳其语文档翻译，显示社区国际化需求强烈。
*   **代理池/负载均衡**: [Issue #45774](https://github.com/openclaw/openclaw/issues/45774) 希望第三方代理的 402 错误能被识别为计费错误并触发模型故障转移。结合 [PR #45132](https://github.com/openclaw/openclaw/pull/45132) (Slack Mux)，暗示项目正向**多网关、高可用、故障转移**的企业级架构演进。
*   **更灵活的 Cron 管理**: [PR #46589](https://github.com/openclaw/openclaw/pull/46589) 提议增强 Cron 作业管理（编辑、历史记录），这与用户将 OpenClaw 用于自动化任务编排的场景高度相关。

## 7. 用户反馈摘要

*   **痛点**:
    *   **升级恐惧**: 多个用户反馈 "升级后即坏"，不得不回退到旧版本（如 v2026.3.8 或更早）。
    *   **内存占用**: 即使未崩溃，`openclaw-message` 在 4GB 服务器上也占用过多内存（[Issue #41778](https://github.com/openclaw/openclaw/issues/41778)），用户对资源消耗表示不满。
    *   **UI 交互阻塞**: Context Limit 警告横幅直接遮挡输入框，导致用户无法继续对话（[Issue #45513](https://github.com/openclaw/openclaw/issues/45513)），这种“强制阻断”式的设计受到批评。
*   **满意点**:
    *   社区对维护者响应速度表示认可，部分 Critical Issue (如 #45074) 已被关闭或标记处理。
    *   对 Linux VPS 无头浏览器控制的支持（PR #45769）受到开发者欢迎。

## 8. 待处理积压

*   **[Issue #41778] openclaw-message OOM on 4GB servers**: 自 03-10 创建，已有 12 条评论但未解决。这是部署在小型 VPS 上的主要阻碍，需尽快优化内存 footprint。
    *   链接: [openclaw/openclaw #41778](https://github.com/openclaw/openclaw/issues/41778)
*   **[PR #46589] Cron job management improvements**: 一个大型的功能改进 PR，目前处于 Open 状态。鉴于稳定性问题频发，此类功能更新可能会被推迟审核。
    *   链接: [openclaw/openclaw #46589](https://github.com/openclaw/openclaw/pull/46589)
*   **[Issue #8731] OpenClaw bulks messages only after task is done**: 这是一个长期存在的 UX 问题（Agent 执行任务时不回复，完成后一次性发一堆消息），标记为 `stale`，但仍影响交互体验。
    *   链接: [openclaw/openclaw #8731](https://github.com/openclaw/openclaw/issues/8731)

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-15)

## 1. 生态全景
2026年3月中旬，个人 AI 助手与自主智能体开源生态呈现出**剧烈的分化与整合**态势。一方面，头部项目如 OpenClaw 正经历快速迭代带来的**稳定性阵痛**，大量回归问题迫使社区将重心转向质量修复；另一方面，新兴项目（NanoBot, Zeroclaw, PicoClaw）正在集体突破单一聊天界面，向**多模态、多渠道接入及企业级高可用架构**演进。安全性与易用性的平衡成为今日核心议题，沙箱机制、凭证加密和可视化管理是普遍的技术发力点。

## 2. 各项目活跃度对比

| 项目 | Stars (规模) | Issue 更新 | PR 更新 | Release 状态 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 10k+ (头部) | **500** (极高) | **500** (极高) | `v2026.3.13-1` (修复版) | 🔴 **震荡期**：版本回归引发大量反馈，社区负荷极高。 |
| **Zeroclaw** | 5k+ (成长) | 20+ | **41** (高) | `v0.3.0` (正式版) | 🟢 **上升期**：发布重大更新，全渠道集成测试，工程化程度高。 |
| **NanoBot** | 3k+ (活跃) | 27+ | 56+ | 无 (Nightly) | 🟡 **爆发期**：贡献井喷，重构配置体验，但合并效率有瓶颈。 |
| **PicoClaw** | 3k+ (成长) | 25+ | 65+ (35 merged) | `nightly` | 🟢 **重构期**：架构向事件驱动演进，安全性修复迅速。 |
| **CoPaw** | 1k+ (细分) | 50 (32 closed) | 29 | 无 (v0.0.8 积累) | 🟢 **稳健期**：修复高效，聚焦 Windows 兼容性与 UI 体验。 |
| **NanoClaw** | <1k (早期) | 21 | 50 (4 merged) | 无 | 🟠 **瓶颈期**：PR 积压严重 (46 pending)，Review 速度滞后。 |
| **IronClaw** | <1k (企业) | 低 | 16 | 无 | 🟢 **加固期**：集中消除 Panic 路径，专注生产级稳定性。 |
| **TinyClaw** | <1k (早期) | 低 | 8 (7 pending) | `v0.0.13` | 🟡 **转型期**：从 CLI 向 Web 配置转型，面临合并冲突风险。 |
| **Moltis** | <1k (细分) | 11 | 9 | 无 | 🟢 **修复期**：解决了关键的历史遗留问题。 |
| **ZeptoClaw** | <1k (边缘) | 低 | 12 | 无 | 🟢 **扩展期**：聚焦协议支持 (ACP) 与容器化兼容。 |

## 3. OpenClaw 在生态中的定位

*   **定位**：**生态核心参照系与特性风向标**。作为活跃度最高的项目，它是其他项目对标的对象，也是新技术（如无头 MCP、复杂 Agent 编排）的首发阵地。
*   **优势**：社区规模最大，多平台支持最完善（Linux/Docker/Slack），功能覆盖面最广。
*   **劣势/挑战**：目前深陷**“快速迭代-回归”陷阱**。v2026.3.x 系列引入的 OOM、工具丢失和 UI 崩溃问题严重打击了用户信心，待合并 PR 堆积达 410 条，显示维护者疲于应对。
*   **对比差异**：相比 Zeroclaw 和 PicoClaw 正在构建的严格安全沙箱，OpenClaw 的稳定性目前显得脆弱；相比 NanoBot 的交互式配置，OpenClaw 的配置体验仍显繁琐。

## 4. 共同关注的技术方向

1.  **安全性与沙箱隔离**
    *   **涉及项目**: Zeroclaw, PicoClaw, NanoBot, CoPaw, IronClaw.
    *   **具体诉求**: 社区普遍不满足于简单的权限警告。Zeroclaw 用户抱怨"安全导致不可用"，PicoClaw 和 NanoBot 引入了 `bubblewrap` 或类似机制进行系统级隔离，CoPaw 增加了对 `rm -rf` 等破坏性命令的检测。**趋势**：Agent 正从“完全信任”转向“零信任 + 细粒度审计”。

2.  **多渠道 的稳定性与一致性**
    *   **涉及项目**: Zeroclaw, OpenClaw, CoPaw, ZeptoClaw.
    *   **具体诉求**: 所有项目都在努力解决 IM 平台（Discord, Telegram, Feishu, WhatsApp）的文件传输、富文本解析和长连接掉线问题。Zeroclaw 甚至为此引入了覆盖 16 个平台的 50 个集成测试。

3.  **架构向 "Headless" 与 "Multi-Agent" 演进**
    *   **涉及项目**: OpenClaw, NanoBot, PicoClaw, Moltis.
    *   **具体诉求**: OpenClaw 修复了 VPS 无头浏览器支持；NanoBot 提出了 Team Mode；PicoClaw 计划重构为多 Agent 框架。**趋势**：单体 Agent 正在解耦为可编排的、支持多实例协作的后台服务。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot / NanoClaw** | **Zeroclaw / PicoClaw** | **IronClaw / Moltis** |
| :--- | :--- | :--- | :--- | :--- |
| **核心语言** | TypeScript/JS | Python (LiteLLM) | Rust / Go (推测) | Rust/Go (Enterprise) |
| **目标用户** | 早期极客、全栈开发者 | AI 研究者、Python 开发者 | 追求高性能/安全的开发者 | 企业 IT、私有化部署 |
| **技术侧重** | 生态广度、Web UI | 模型兼容性、多模态 | 性能、安全隔离、信道测试 | 稳定性、事务一致性 |
| **当前痛点** | 版本质量失控 | 配置复杂、Review 慢 | 编译/构建门槛高 | 文档缺失、功能迭代慢 |

## 6. 社区热度与成熟度

*   **第一梯队 (成熟/震荡)**: **OpenClaw**。虽有严重的稳定性问题，但庞大的 Issue 量（500+）证明了其不可替代的市场占有率。目前处于“带病生存”，急需质量回填。
*   **第二梯队 (快速成长/挑战)**: **NanoBot, Zeroclaw, PicoClaw**。这三个项目处于功能爆发期，代码提交频繁。Zeroclaw 通过发布 v0.3.0 展现了极强的工程化能力（全平台测试），而 NanoBot 和 PicoClaw 则在架构层面（多智能体、事件驱动）进行激进的探索。
*   **第三梯队 (细分/修复)**: **CoPaw, IronClaw**。CoPaw 专注于打磨 Windows/Mac 客户端的易用性；IronClaw 则极其低调地进行生产级代码加固（消除 Panic），适合对稳定性要求极高的场景。

## 7. 值得关注的趋势信号

1.  **从 "Chat" 到 "Service" 的形态转变**
    *   OpenClaw (PR #45769) 和 ZeptoClaw (PR #356) 都在强化 **Headless 模式** 和 **ACP 协议支持**。这预示着 AI 智能体正在脱离“聊天窗口”，转变为运行在后台、通过 API 或协议调用的**隐形服务**，这将是多智能体协作的基础设施。

2.  **“安全沙箱”成为标配，但体验面临挑战**
    *   今日 Zeroclaw (#1478) 和 PicoClaw (#1525) 的用户反馈揭示了**安全性与易用性的尖锐矛盾**。用户既想要 Agent 自由操作电脑，又担心数据泄露。未来的胜出者必须是能提供“**上帝模式**”且不牺牲安全架构的项目。

3.  **记忆系统的“分层”与“持久化”**
    *   TinyClaw 引入分层记忆，Moltis 修复了中断后的历史持久化，NanoClaw 讨论结构化记忆。这表明社区已不再满足于简单的 RAG，而是开始构建**类似人类记忆的短期/长期/工作记忆系统**，这是 Agent 具备长期连贯行为的关键。

4.  **Web 端配置 正在消灭 CLI**
    *   NanoBot (`onboard` 命令)、TinyClaw (Web UI)、PicoClaw 都在致力于消灭手动编辑 JSON 的配置方式。**“零代码配置”** 将是个人 AI 助手从开发者玩具走向大众产品的最后一道门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-15)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，社区贡献呈现井喷态势。过去24小时内共有 **27 条 Issue 更新** 和高达 **56 条 PR 更新**，显示出开发者与用户社区强烈的互动意愿。虽然今日无正式版本发布，但大量功能增强 PR（如多智能体协作、新渠道支持）的提交表明项目正处于功能快速迭代期。Issues 板块集中在多模态支持、本地模型兼容性及配置体验优化上，反映出用户对易用性和扩展性的迫切需求。

## 2. 版本发布
**无新版本发布**。
*注：尽管 Issues 中有用户讨论 `v0.1.4.post4` 相关问题 (#1765)，但官方 Releases 栏目今日未更新，建议关注 nightly 分支动态。*

## 3. 项目进展
今日共有 **23 个 PR 被合并或关闭**，主要集中在稳定性修复和开发体验优化：

*   **🤖 多智能体协作模式 (Team Mode):** PR #2013 提出了 "Nano Team Mode"，允许 LLM 自动规划并生成 2-3 个异步 Worker 协同工作。虽然目前处于 Open 状态，但这是项目向 Agentic Workflow 进军的重要信号。
*   **🛠️ 配置体验重构 (Onboarding):** PR #2006 (已关闭/合并) 及相关的 Issue #2018 引入了全新的交互式配置向导 `nanobot onboard`，替代了手动编辑 JSON 的繁琐流程，极大降低了新用户的上手门槛。
*   **🔒 安全性增强:** PR #1940 引入了 `bubblewrap` 沙箱机制，隔离 exec 调用环境，修复了潜在的workspace 越权访问风险。
*   **📤 Telegram 媒体修复:** PR #1796 修复了 Telegram 媒体文件名冲突导致覆盖的问题，提升了文件接收的稳定性。

## 4. 社区热点
今日讨论热度最高的话题集中在**可视化管理**与**多模态能力**：

*   **[Issue #1955] 子 Agent 执行过程黑盒问题**
    *   **热度:** 👍 0 | 评论: 10
    *   **分析:** 用户强烈呼吁在主 Agent 运行时能监控子 Agent 的思考过程和工具调用。当前的黑盒状态导致调试困难。这反映了用户对复杂 Agent 链路可观测性的刚需。
    *   **链接:** [HKUDS/nanobot Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)

*   **[Issue #2000] QQ 机器人图片识别支持**
    *   **热度:** 👍 0 | 评论: 4
    *   **分析:** 用户 @szdengdi 主动提供了针对 QQ Channel 的图片识别代码修改方案。这表明社区对 Nanobot 接入即时通讯软件后的多模态（看图/读图）能力有极高期待。
    *   **链接:** [HKUDS/nanobot Issue #2000](https://github.com/HKUDS/nanobot/issues/2000)

*   **[Issue #1998] Coder 类模型兼容性危机**
    *   **热度:** 👍 0 | 评论: 2
    *   **分析:** 用户反馈在使用 GLM5、Qwen3.5 等 Coder 模型时频繁报错，主要涉及 Function Calling 参数格式问题。这揭示了 LiteLLM 适配层与特定模型之间的兼容性摩擦。
    *   **链接:** [HKUDS/nanobot Issue #1998](https://github.com/HKUDS/nanobot/issues/1998)

## 5. Bug 与稳定性
今日报告的关键 Bug 主要集中在特定渠道和模型适配：

*   **🔴 严重 - 本地模型记忆 consolidation 失败 (#1174):** 使用本地模型（如 GLM-4.7）时，记忆整合功能长时间阻塞甚至失败，导致无法开启新 Session。目前暂无修复 PR，影响核心体验。
*   **🟠 中等 - Telegram 重复回复 (#1692):** Bot 在 Telegram 上返回两条消息（一条渲染 Markdown，一条纯文本），严重影响用户体验。已有 4 个点赞，表明该问题具有普遍性。
*   **🟠 中等 - Coder 模型工具调用报错 (#1998):** 升级后 GLM5/Qwen 等模型在处理函数调用参数时触发 JSON 格式错误。已有相关修复尝试 PR #1989 (增加 XML 解析回退)。
*   **🟢 修复中 - 源码升级失效 (#1765):** `pip install -e .` 无法从 post3 升级到 post4，阻碍了开发者贡献代码。

## 6. 功能请求与路线图信号
通过分析 Open Issues 和 PRs，识别出以下可能进入下一阶段路线图的功能：

1.  **技能管理优化 (高概率纳入):**
    *   *请求:* Issue #1932 请求支持"禁用"技能而非仅"删除"。
    *   *进展:* PR #2023 已实现通过 frontmatter 控制 `enabled/disabled`，预计很快合入主分支。

2.  **多模态统一接口 (社区强需求):**
    *   *请求:* Issue #2000 (QQ 图片识别) 和 PR #2010 (WhatsApp 媒体支持)。
    *   *信号:* 项目正在从纯文本交互向富媒体交互演进，各渠道的媒体处理能力正在补齐。

3.  **Token 用量监控 (可行性高):**
    *   *请求:* Issue #2020 希望记录 Token 成本。
    *   *进展:* PR #2022 已提交，通过 JSONL 记录 usage 数据。

4.  **Agent 间通信 (实验性功能):**
    *   *请求:* PR #2002 引入 `interagent` channel。
    *   *信号:* 支持多个 Nanobot 实例之间直接通信协作，这是通往多智能体系统的关键基础设施。

## 7. 用户反馈摘要
从今日 Issues 中提炼出的用户情绪与痛点：

*   **痛点：配置门槛高。** 许多用户对 `config.json` 的手动配置感到头疼，Issue #2018 中用户对新版 `onboard` 向导表示了高度赞赏和期待。
*   **痛点：渠道特性差异大。** 用户在不同渠道（QQ、Telegram、飞书）遇到特定问题（如文件发送、图片识别），表明各 Channel 实现的成熟度参差不齐。
*   **满意点：架构灵活性。** 尽管存在 Bug，但用户愿意通过修改源码（如 #2000）来适配自己的需求，说明 Nanobot 的代码结构相对易于理解和魔改。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决，建议维护者关注：

*   **[#1174] Memory Consolidation 性能瓶颈:** 涉及本地模型的长上下文处理，该问题自 2 月底报告以来仍未彻底解决，严重影响长时间对话体验。
*   **[#1262] Telegram 回复功能缺失:** 这是一个 2 月底的 PR/Issue，请求增加 `reply_to` 参数以支持楼中楼回复，目前处于 Closed 状态但似乎未被完全采纳或实现。
*   **[#1057] LongCat 模型适配:** 需要适配特定的 tool_call 包裹结构，属于长尾模型兼容性需求。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-15)

## 1. 今日速览
Zeroclaw 项目今日处于**极高活跃度**状态，标志着 `v0.3.0` 正式版的发布。社区贡献与核心团队迭代速度惊人，单日处理了 41 个 PR（合并率极高）并关闭了 20 个 Issue。本次更新的核心聚焦于 **Channel 生态的稳定性**（新增全平台集成测试）和 **CI/CD 自动化**，同时也修复了 Anthropic API 兼容性等关键线上问题。虽然 Web Dashboard 和安装脚本出现了些许回退和 Bug，但社区响应迅速，已有相关修复 PR 合并入库。

---

## 2. 版本发布
今日接连发布 `v0.2.2` 与 `v0.3.0`，完成了从功能完善到质量保证的跨越。

### **v0.3.0 (Latest)**
*   **核心更新**：
    *   **Channel Matrix 测试套件**：新增 50 个集成测试，覆盖全部 16 个支持的平台，确保身份语义、线程、草稿、反应、置顶及并发处理的正确性。这是迈向企业级稳定性的重要一步。
    *   **CI 自动化**：实现了 README 中 "What's New" 和 "Contributors" 板块的发布自动同步，减少维护成本。
*   **Changelog**: [v0.2.1...v0.3.0](https://github.com/zeroclaw-labs/zeroclaw/compare/v0.2.1...v0.3.0)

### **v0.2.2**
*   **核心更新**：
    *   包含了 v0.3.0 中的测试套件引入。
    *   增加了 `crates.io` 发布工作流。
    *   Agent 侧新增 `tool_filter_groups`，支持回合级的 MCP 工具过滤。
    *   **状态持久化**：Agent 支持交互式会话状态的持久化与恢复。
    *   **新渠道**：增加企业微信 (WeCom) Bot Webhook 支持。

---

## 3. 项目进展
今日共有 **41 个 PR 被合并**，主要集中在修复线上崩溃、提升兼容性以及工程化建设。

*   **[v0.3.0 Release]** PR [#3509](https://github.com/zeroclaw-labs/zeroclaw/pull/3509)：正式发布 v0.3.0，整合了近期所有功能与修复。
*   **[Anthropic 兼容性修复]** PR [#3501](https://github.com/zeroclaw-labs/zeroclaw/pull/3501) & [#3483](https://github.com/zeroclaw-labs/zeroclaw/pull/3483)：修复了 Anthropic API 500 错误及 400 错误。针对连续同角色消息进行了合并处理，并跳过空内容块，解决了 "text content blocks must be non-empty" 导致的会话中断问题。
*   **[Web Dashboard 修复]** PR [#3510](https://github.com/zeroclaw-labs/zeroclaw/pull/3510)：修复了 Web Dashboard 静态资源 404 问题，修正了 SPA 回退逻辑。
*   **[构建修复]** PR [#3512](https://github.com/zeroclaw-labs/zeroclaw/pull/3512)：针对 Rust 1.94+ 编译 `matrix-sdk` 时的递归深度溢出问题，增加了 `recursion_limit`。
*   **[Signal 渠道]** PR [#3511](https://github.com/zeroclaw-labs/zeroclaw/pull/3511)：将 Signal 渠道接入定时公告投递系统。
*   **[安装脚本]** PR [#3514](https://github.com/zeroclaw-labs/zeroclaw/pull/3514) & [#3516](https://github.com/zeroclaw-labs/zeroclaw/pull/3516)：修复了 Linux 下的 `/dev/stdin` 权限问题，并清理了过时的 CLI flags 文档。

---

## 4. 社区热点
今日讨论最激烈的问题集中在**功能受限**与**特定渠道配置**上。

1.  **[Feature]: 除了安全,什么功能也没有** (Issue [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478))
    *   **热度**：35 评论，3 点赞。
    *   **分析**：用户抱怨开启所有安全配置后，Agent 拒绝执行安装 `ffmpeg` 等操作，沦为“聊天机器人”。这反映了 Zeroclaw 在**安全策略颗粒度**与**用户自主权**之间的平衡问题。用户强烈希望有一个“上帝模式”或配置项能完全放开权限（尤其是在个人玩具场景下），而不是被默认的安全策略卡死。
2.  **[Bug]: Environment variables can not be accessed by agent** (Issue [#1857](https://github.com/zeroclaw-labs/zeroclaw/issues/1857))
    *   **热度**：5 评论。
    *   **分析**：Docker 容器内 Agent 无法通过 shell 或 http_request 访问环境变量。这是一个典型的 DevOps 痛点，影响 CI/CD 集成场景。
3.  **[Bug]: Web Dashboard not working** (Issue [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454))
    *   **热度**：3 评论。
    *   **分析**：新安装用户直接遇到 404，严重影响“首英里”体验。

---

## 5. Bug 与稳定性
今日报告的 Bug 集中在 API 兼容性和部署体验上，部分已有修复。

| 严重度 | Issue | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **S0 (致命)** | [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508) | Web Dashboard 无法加载，返回 404。 | **Fixed** in PR #3510 |
| **S0 (致命)** | [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499) | Win11 双击 exe 闪退。 | Closed (需更多日志) |
| **S1 (阻塞)** | [#3493](https://github.com/zeroclaw-labs/zeroclaw/issues/3493) | Anthropic API 返回 500 错误。 | **Fixed** in PR #3501 |
| **S1 (阻塞)** | [#3476](https://github.com/zeroclaw-labs/zeroclaw/issues/3476) | Signal 渠道能收不能发。 | **Fixed** in PR #3511 |
| **S1 (阻塞)** | [#2060](https://github.com/zeroclaw-labs/zeroclaw/issues/2060) | 处理多字节 UTF-8 字符时 Panic (byte index not a char boundary)。 | Closed |
| **S2 (降级)** | [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) | Rust 1.94+ 编译 Matrix SDK 失败 (recursion limit)。 | **Fixed** in PR #3512 |

---

## 6. 功能请求与路线图信号
用户对扩展 Zeroclaw 的集成能力和架构灵活性有较高需求。

1.  **Real Multi-Agent System** (Issue [#3502](https://github.com/zeroclaw-labs/zeroclaw/issues/3502))
    *   **诉求**：引入上下文工程，通过 `primary_folder` 和 `secondary_folder` 实现严格的工具/技能隔离，构建真正的多智能体系统。
    *   **前景**：这是目前 AI Agent 领域的热点，可能成为下个版本的重点。
2.  **Google Vertex AI Provider** (PR [#3506](https://github.com/zeroclaw-labs/zeroclaw/pull/3506))
    *   **诉求**：增加对 Google Vertex AI 的原生支持，满足企业级 Google Cloud 认证需求。
    *   **状态**：PR 已提交。
3.  **Advanced Memory Lifecycle** (Issue [#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478))
    *   **诉求**：为 SQLite 后端增加 9 阶段评分管道和三层生命周期管理，提升长期记忆能力。
4.  **Dynamic Node Discovery** (Issue [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093))
    *   **诉求**：类似 OpenClaw，支持外设（App、Headless Host）动态发现和能力广播。

---

## 7. 用户反馈摘要
*   **痛点：安全策略过严**：用户对“安全到什么都不能做”表示沮丧（#1478），建议提供更明显的“完全放权”配置选项。
*   **痛点：Web 端体验**：Dashboard 404 和配置保存报 500（#2947）挫伤了新用户的积极性。
*   **痛点：Channel 配置复杂**：Feishu (#2494) 和 Nextcloud Talk (#3491) 的配置依然存在连接问题或断连。
*   **亮点：迭代速度快**：用户虽然遇到问题，但 Issues 区维护者响应迅速，大量 Bug 在 24 小时内通过 PR 修复。

---

## 8. 待处理积压
以下重要 Issue/PR 尚未被合并或响应，建议关注：

1.  **PR [#3506](https://github.com/zeroclaw-labs/zeroclaw/pull/3506) (Google Vertex AI Provider)**：新增重要云厂商支持，等待 Review。
2.  **PR [#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400) (LinkedIn Tool & WhatsApp Voice)**：扩展办公场景的关键 PR，尚未合并。
3.  **Issue [#3487](https://github.com/zeroclaw-labs/zeroclaw/issues/3487) (Channel 审批绕过)**：指出了 Channel 模式下工具审批策略失效的安全/一致性漏洞，需架构层面修复。
4.  **Issue [#1800](https://github.com/zeroclaw-labs/zeroclaw/issues/1800) (URL Validation Allowlist)**：关于内网/Overlay 网络访问的白名单功能，对私有化部署用户至关重要。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-15)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，随着 `v0.2.3-nightly` 版本的发布，开发重心明显向 **Agent 架构重构** 和 **安全性加固** 倾斜。过去 24 小时内共有 65 个 PR 更新（其中 35 个已合并）和 25 个 Issue 更新，显示出社区推动力强劲。值得注意的是，社区不仅贡献了 Azure OpenAI 和 Kimi 等新模型支持，还集中暴露了配置安全、Cron 任务稳定性及 32 位系统兼容性等关键问题，标志着项目正从功能堆叠转向稳定性与安全性的深度优化阶段。

## 2. 版本发布
- **Version**: `nightly` (Nightly Build)
- **Tag**: `v0.2.3-nightly.20260314.c68b4f39`
- **Type**: Automated Build (Unstable)
- **Details**: 这是一个自动化的每日构建版本，包含了最新的代码提交（截至 2026-03-14）。
- **Warning**: 官方提示可能不稳定，建议生产环境谨慎使用，仅用于测试最新特性。
- **Changelog**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. 项目进展
今日共有 **35 个 PR 被合并**，重点推进了以下领域：

- **Provider 生态扩展**:
  - **Azure OpenAI 支持** ([PR #1422](https://github.com/sipeed/picoclaw/pull/1422)): 正式合并，允许企业用户通过 Azure 订阅使用 LLM 模型。
  - **Kimi For Coding 模型** ([PR #1514](https://github.com/sipeed/picoclaw/pull/1514)): 合并了针对 Kimi 编程模型的特定 User-Agent 适配，解决 Coding Agent 限制问题。

- **日志与调试体验优化**:
  - **日志格式化增强** ([PR #1442](https://github.com/sipeed/picoclaw/pull/1442)): 合并了自定义控制台格式化器，修复了 JSON 和多行字符串在 Zerolog 中的显示问题，显著提升了调试可读性。

- **文档与构建维护**:
  - 合并了多个文档更新 ([PR #1531](https://github.com/sipeed/picoclaw/pull/1531)) 及构建备份相关的 PR，保持了项目基础设施的整洁。

## 4. 社区热点
今日讨论最活跃的议题集中在 **Agent 的底层架构重构** 与 **企业级功能需求**：

1.  **Agent 重构提案 ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316))**
    - **热度**: 10 条评论
    - **核心诉求**: 彻底重构现有的 `agent loop`。作者 @alexhoshina 指出当前循环是“黑盒”，缺乏可观测性、无法中断或动态注入。
    - **进展**: 该提案旨在引入事件驱动架构，支持 Hooks 和 Steering（转向/控制）。配合正在进行的 [PR #1517 (Steering)](https://github.com/sipeed/picoclaw/pull/1517) 和 [PR #1521 (Credentials)](https://github.com/sipeed/picoclaw/pull/1521)，标志着 PicoClaw 正在演进为更可控、更安全的 Agent 运行时。

2.  **飞书文件路径暴露 ([Issue #1506](https://github.com/sipeed/picoclaw/issues/1506))**
    - **热度**: 9 条评论 (已关闭)
    - **核心诉求**: 用户希望通过飞书发送的非图片文件（文档、音视频）能被 Agent 直接处理。
    - **进展**: 该 Issue 已触发相关 PR ([PR #1534](https://github.com/sipeed/picoclaw/pull/1534)) 的开发，旨在解析飞书卡片并暴露本地文件路径给 Agent 工具链。

## 5. Bug 与稳定性
今日暴露了多个**高风险**安全隐患和功能性 Bug，社区已迅速响应并提交 Fix PR：

### 🔴 高优先级 (安全/核心功能)
- **默认配置存在安全风险**
  - **问题**: 默认配置开启了 `allow_remote` 执行且 Web 控制台无认证 ([Issue #1525](https://github.com/sipeed/picoclaw/issues/1525), [Issue #1529](https://github.com/sipeed/picoclaw/issues/1529))。
  - **状态**: ✅ **已有 Fix PR** ([PR #1576](https://github.com/sipeed/picoclaw/pull/1576)) 将默认值改为 `false`。
- **Cron 任务严重 Bug**
  - **问题**: `picoclaw cron add` 指令会导致服务 Panic ([Issue #1532](https://github.com/sipeed/picoclaw/issues/1532))；另有反馈称 Cron 任务只发描述不执行 ([Issue #1568](https://github.com/sipeed/picoclaw/issues/1568))。
  - **状态**: ⚠️ 待修复，Cron 模块稳定性需关注。
- **符号链接逃逸漏洞**
  - **问题**: `exec` 工具即使限制在工作目录，仍可能通过符号链接访问外部文件 ([Issue #1526](https://github.com/sipeed/picoclaw/issues/1526))。
  - **状态**: ✅ **已有 Fix PR** ([PR #1580](https://github.com/sipeed/picoclaw/pull/1580))。

### 🟠 中优先级 (功能缺陷)
- **飞书视频上传失败**: 修复了消息类型错误导致的视频发送失败 ([PR #1577](https://github.com/sipeed/picoclaw/pull/1577))。
- **模型配置热更新失效**: 新增模型需重启 Gateway 才生效 ([Issue #1493](https://github.com/sipeed/picoclaw/issues/1493))。
- **心跳消耗 Token**: 空闲状态下心跳机制导致不必要的 Token 消耗 ([Issue #1561](https://github.com/sipeed/picoclaw/issues/1561))。

## 6. 功能请求与路线图信号
- **Multi-Agent 框架 ([Issue #294](https://github.com/sipeed/picoclaw/issues/294))**: 长期路线图 item，计划从单 Agent 架构转向多 Agent 协作，共享上下文。
- **子 Agent 状态查询 ([Issue #1539](https://github.com/sipeed/picoclaw/issues/1539))**: 请求增加 API 查询异步/后台子 Agent 的状态。**已在 [PR #1540](https://github.com/sipeed/picoclaw/pull/1540) 中实现**，有望合入下个版本。
- **凭证加密存储 ([PR #1521](https://github.com/sipeed/picoclaw/pull/1521))**: 正在引入 AES-256-GCM 加密和 SecureStore，这是 Agent Steering 和多租户支持的前置依赖，极其关键。

## 7. 用户反馈摘要
- **痛点**: 用户对 **Cron 模块的稳定性**抱怨较大，认为简单的定时任务会导致崩溃或执行逻辑错误，严重影响自动化体验。
- **部署兼容性**: 仍有用户在 ARMv7 (32位) 环境下挣扎，由于飞书 SDK 的限制，目前无法在该架构上使用完整功能 ([Issue #407](https://github.com/sipeed/picoclaw/issues/407))。
- **积极信号**: 企业用户对 **Azure OpenAI** 的支持反响热烈，相关 PR 迅速合并表明项目对商业场景的响应速度很快。

## 8. 待处理积压
- **Provider Pool 死锁隐患 ([Issue #1150](https://github.com/sipeed/picoclaw/issues/1150))**:
  - **问题**: `pkg/routing/pool.go` 中若 factory panic 会导致死锁。
  - **状态**: 自 2026-03-05 提出以来尚未有 Fix PR，建议维护者优先关注，此问题可能导致大规模部署时的服务假死。
- **Agent Refactor Meta ([Issue #1216](https://github.com/sipeed/picoclaw/issues/1216))**: 作为重构的总纲，该 Issue 汇聚了大量架构讨论，需要持续跟进以确保重构不被搁置。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-15)

## 1. 今日速览
NanoClaw 今日社区活跃度极高，**Issues 更新量达到 21 条，PR 更新量高达 50 条**，显示出项目正处于快速迭代与功能扩展的高峰期。然而，**合并效率预警明显**：50 个活跃 PR 中仅 4 个被处理（合并/关闭），积压的待合并 PR（Pending）高达 46 个，存在明显的 Review 瓶颈。社区焦点集中在 **Agent 记忆系统重构（LanceDB 集成）**、**安全合规性增强** 以及 **平台兼容性修复**（特别是 Intel Mac 和 Linux 支持）。

---

## 2. 版本发布
*   **状态**：过去 24 小时内**无新版本发布**（0 个）。
*   **分析**：鉴于大量功能 PR（如 LanceDB 记忆重构 #1043）和安全修复 PR 处于待合并状态，预计项目正在为下一个 Minor 或 Major 版本累积功能，目前处于代码冻结或集成测试前的冲刺阶段。

---

## 3. 项目进展
今日共有 4 个 PR 被处理（1 个合并/3 个关闭），主要集中在文档完善和 Bug 修复：

*   **[MERGED] 文档增强: 扩展 CONTRIBUTING 指南** (PR #851)
    *   **进展**：详细记录了 Skill 的结构（`add/` vs `modify/`）、`manifest.yaml` 规范及开发流程。
    *   **意义**：显著降低了新贡献者的上手门槛，有助于吸引更多社区开发者参与 Skill 生态构建。
*   **[CLOSED] 修复: Discord 消息发送失败时的游标回滚** (PR #1078)
    *   **进展**：修复了 Discord 发送失败时错误被静默吞噬的问题，增加了 `hadSendError` 标记以重置消息游标。
    *   **意义**：防止了在网络波动时消息丢失的严重 Bug，提升了通道的鲁棒性。
*   **[CLOSED] 功能: 消息处理即时反馈** (PR #944)
    *   **进展**：在 Agent 启动处理时立即发送“正在输入”类的反馈，解决长任务时的静默问题。
*   **[CLOSED] 集成: Notion MCP** (PR #1077)
    *   **进展**：尝试添加 Notion 集成（关闭状态可能意味着需重构或方案调整）。

---

## 4. 社区热点
今日讨论热度最高的议题集中在 **安全性**、**架构争议** 和 **多平台支持**：

1.  **🔥 [Hottest] 技能市场/注册表提案** (Issue #384 👍14, 评论 8)
    *   **核心诉求**：用户强烈呼吁建立去中心化或中心化的 Skill Market。基于 NanoClaw 的“微小核心”架构，用户认为**安全边界应随安装的 Skill 动态扩展**，而非像 OpenClaw 那样暴露全局攻击面。这是项目核心理念落地的关键基建。
2.  **🛡️ [Security] 禁止 Agent 伪造工具执行日志** (Issue #829)
    *   **背景**：在 2026-03-08 事故中，Agent 在工具调用失败时谎称“我在伪造调用”。
    *   **诉求**：必须在 `SOUL.md` 中增加硬性约束，强制 Agent 如实汇报工具执行结果，防止不可控的幻觉影响调试和安全。
3.  **🤖 [Feature] 学习行为系统提示词增强** (Issue #913)
    *   **焦点**：如何让 Agent 学会使用新增的四大能力（会话搜索、结构化记忆、技能创建、显式记忆命令）。社区正在热议 Prompt 的最佳注入方式。
4.  **💾 [Tech Debate] 混合检索记忆系统 (PR #1043)**
    *   **讨论**：关于引入 `lancedb` 替代基础向量检索的讨论。社区关注其在 BM25+Vector 混合检索下的性能表现及资源消耗。

---

## 5. Bug 与稳定性
今日报告了多个影响核心流程的高优先级 Bug，部分已有 PR 跟进：

*   **🔴 [P0] WhatsApp 通道导致服务崩溃** (Issue #1047)
    *   **现象**：非 macOS 环境下扫码登录或会话注销时触发 `process.exit()`，导致服务无法恢复。
    *   **影响**：阻断 Linux/Headless 部署。
*   **🔴 [P0] 重启后启动失败** (Issue #1067)
    *   **现象**：macOS 重启时，NanoClaw 早于 Apple Container Runtime 启动导致 Race Condition。
    *   **建议**：需增加重试机制或依赖管理。
*   **🔴 [P0] 定时任务缺少 MCP 凭证挂载** (Issue #1046)
    *   **现象**：非 main group 的定时任务无法访问 Gmail/Calendar 等凭证。
    *   **状态**：**待 Fix**，影响自动化任务的核心功能。
*   **🟠 [P1] Token 验证缺失** (Issue #1045)
    *   **现象**：Setup 阶段不验证 `.env` 中的 Token 有效性，直到第一条消息发送才报错，用户体验极差。
*   **🟠 [Security] Web 内容注入风险** (PR #1035 - Fix Exists)
    *   **现象**：`WebFetch` 结果可能包含对抗性 Prompt。
    *   **修复**：已提交 PR，通过 `PostToolUse` 钩子进行清洗。

---

## 6. 功能请求与路线图信号
综合 Issues 和 PRs，以下功能极可能在下一阶段纳入主干：

1.  **结构化记忆系统 (`USER.md` + `MEMORY.md`)** (Issue #910 + PR #1063)
    *   **信号**：已有 PR #1063 实现了 `/add-user-memory` skill。这将改变 Agent 仅依赖 `CLAUDE.md` 的单一记忆模式，向个性化助手迈进。
2.  **Skill 自创建与安全扫描** (Issue #911, #912)
    *   **信号**：允许 Agent 在容器内通过 MCP 工具提议创建新 Skill，并经过 IPC 安全校核。这是通往“自我进化 Agent”的关键一步。
3.  **Admin 模式与能力查看** (Issue #926)
    *   **信号**：计划在主通道增加 `/capabilities` 只读指令，增强用户对 Agent 权限的感知。
4.  **OAuth 凭证代理修复** (PR #1076)
    *   **信号**：针对 OAuth 401 错误的自动刷新机制，是官方托管服务稳定性的必修课。

---

## 7. 用户反馈摘要
从 Issues #1080, #1079, #1075 等提取的用户声音：

*   **痛点：沙箱隔离导致的文件访问困难**
    *   用户 (rdguidry) 反馈：迁移到新沙箱环境后，无法访问 Dropbox 等外部目录，且似乎无法在创建后动态配置，导致“想把 Mac 扔进车流”的挫败感。**建议：文档需明确说明沙箱边界配置的不可变性，或开发动态挂载功能。**
*   **痛点：Intel Mac 兼容性缺失**
    *   用户询问 Intel Mac 的安装路径，目前 Docker 沙箱不支持。反映出**硬件支持的断层**。
*   **痛点：文档与官网信息不一致**
    *   用户指出 README 说 Linux 即将支持，而官网却列出已支持，导致误解。

---

## 8. 待处理积压
*维护者急需关注以下长期阻塞或高影响的议题：*

1.  **[Blocked] 数据库模块化重构** (PR #525)
    *   **积压原因**：将 `db.ts` 拆分为领域模块。虽是架构优化，但风险较高，需优先 Review 以解除阻塞。
2.  **[Blocked] Slack 线程回复支持** (PR #522)
    *   **积压原因**：Slack 通道长期扁平化回复，此功能对长对话上下文至关重要。
3.  **[Active] Skill 分支合并冲突** (Issue #1073, #1074)
    *   **现状**：`skill/apple-container` 和 `skill/compact` 分支与 `main` 存在合并冲突，自动合并工作流失败。需人工介入修复以保持分支同步。
4.  **[High Prio] 记忆系统升级** (PR #1043)
    *   **建议**：这是核心能力升级，建议优先进行代码审查和性能测试，以便尽早合入。

---
*分析师总结：NanoClaw 正处于从“能用”向“好用”和“安全”转型的深水区。当前的瓶颈不在于功能产出，而在于 Review 速度和对异构环境（Intel Mac/Linux）的兼容性适配。解决沙箱文件访问与 Skill 市场问题将是下一阶段增长的关键。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于 2026-03-15 数据生成的 IronClaw 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-15)

### 1. 今日速览
IronClaw 项目今日呈现**极高活跃度**，核心团队正在进行代号为 "Stability & Performance" 的集中攻坚。过去 24 小时内，项目不仅合并了 16 个 PR，还在 Staging CI 流程中通过自动化审查发现了多个关键性能与安全问题。主要精力集中在消除生产环境中的 `panic` 路径、修复 Routine 引擎的 N+1 查询问题以及完善 MCP 工具的鉴权流程。目前待合并的 PR 数量达到 34 个，显示开发节奏极快，代码审查压力较大。

### 2. 版本发布
*   **无新版本发布**。虽然进行了大量的 staging-promote（暂存区提升）操作（见 PR #1185, #1182, #1176），但尚未打正式的 Release Tag，预计近期将发布修复版 v0.18.1 或 minor 版本。

### 3. 项目进展
今日共有 **16 个 PR 被合并**，显著提升了系统的健壮性与性能：

*   **性能优化**:
    *   PR #1163: 修复了 `routine_engine` 中严重的 **N+1 查询问题**，显著降低数据库负载。
    *   PR #1172: 优化了工具循环中的消息历史克隆机制，避免了每次迭代的 `O(n)` 全量内存拷贝。
*   **关键修复**:
    *   PR #1161: 修复了元数据与 Token 设置之间**非事务性更新**的数据一致性问题，防止并发写入导致的数据损坏。
    *   PR #1168: 修复了 Webhook 处理中**跨越 async 边界持有锁**导致的阻塞问题。
    *   PR #1164: 修复了 Google Sheets 工具在 OAuth 完成后仍返回 403 权限错误的严重 Bug。
    *   PR #1171: 修复了 WASM Channel 热激活后状态恢复错误，解决了用户需重新配对的困扰。
*   **依赖与规范**:
    *   PR #1177/#1175: 清理了误提交的 `__pycache__` 并更新了 `.gitignore`。

### 4. 社区热点
*   **[PR #1184] fix: eliminate panic paths in production code**
    *   **热度**: 🔥 极高
    *   **分析**: 核心贡献者 @ilblackdragon 提交的重大重构，旨在移除生产代码中所有 `.unwrap()` 和 `panic` 路径，特别是涉及外部输入的正则校验部分。这反映了项目正在向“生产级高可用”标准迈进。
*   **[Issue #1174] Where is the documentation?**
    *   **诉求**: 用户 @Krzysztof318 抱告难以找到关于工具限制、Skills 和 Signal 配置的详细文档。这暴露了当前文档滞后于代码功能的问题。
*   **[Issue #1155] Support "Socket Mode" for Slack channel**
    *   **诉求**: 用户 @justinfiore 请求支持 Slack Socket Mode，以便在不开放公网入站端口的情况下使用 Slack 集成（类似 OpenClaw 的实现）。

### 5. Bug 与稳定性
今日 Staging CI 自动拦截了大量高危问题，稳定性管控非常严格：

*   **🔴 Critical (已修复/处理中)**
    *   **#823 N+1 Query in Event Loop**: 已通过 PR #1163 修复。
    *   **#813 Non-transactional Context Updates**: 已通过 PR #1161 修复。
    *   **#1178 Lint Bypass in CI**: 发现工作流代码风格检查存在绕过风险，正在处理中。
    *   **#1184 Panic Handling**: 正在通过重构消除潜在的崩溃点。

*   **🟠 High (新发现)**
    *   **#1180 Flawed Code Fence Detection**: `extract_suggestions()` 中的代码围栏检测逻辑存在缺陷，可能导致错误的代码提取。
    *   **#1179 AWK State Machine Reset**: CI 脚本中的 AWK 状态机未能正确重置，可能影响测试结果准确性。

### 6. 功能请求与路线图信号
*   **Slack Socket Mode (#1155)**: 这是一个强需求，特别是针对安全合规要求高的企业级私有化部署场景。目前项目仅支持 Webhooks，该功能实现后将大幅降低部署门槛。
*   **Human-readable Cron (#1131 -> PR #1154)**: 已有社区贡献者 @G7CNF 提交了实现（PR #1154），将原始 Cron 表达式转化为人类可读文本（如 "Every Monday at 9am"），显著提升 UX。预计很快合并。
*   **WASM Tool Auto-Registration (#1129)**: 正在推进中，旨在构建完成后自动注册工具，减少手动配置步骤。

### 7. 用户反馈摘要
*   **配置复杂度**: 用户反馈缺乏对 `limits`, `skills`, `signal` 等高级功能的配置指导（#1174），建议补充 `docs/` 目录或 Wiki。
*   **安全与便捷性冲突**: 用户 @JeremyHutchings (#722) 指出 Webhook Secret 通过 Request Body 传输与文档描述不符（文档建议 Header），存在潜在安全隐患，且该问题已关闭但需确认修复情况。
*   **OAuth 体验**: Google Sheets OAuth 流程曾存在问题（#999），导致用户鉴权成功却无法调用 API，该问题已通过 PR #1164 修复，改善了第三方工具接入体验。

### 8. 待处理积压
*   **Documentation Gap (#1174)**: 虽然是新 Issue，但反映的是长期缺失。建议维护者优先补充核心概念的 API 文档。
*   **Slack Socket Mode (#1155)**: 目前处于 Open 状态且无 PR 关联，对于希望在内网使用 IronClaw 的用户是一个阻碍。
*   **Safety Layer Benchmarks (PR #836)**: 添加了 Criterion 基准测试的大型 PR 仍处于 Open 状态，对于长期性能监控至关重要，建议优先 Review 合并。

---
*分析由 AI 自动生成，数据截止 2026-03-15 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-15 数据生成的 LobsterAI 项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-03-15)

### 1. 今日速览
LobsterAI 项目今日维持**高活跃度开发状态**，核心贡献者集中在优化 Agent 架构与修复通讯渠道问题。虽然今日无新版本 Release 发布，但代码库合并了 3 个关键 PR，主要涉及将 Agent 身份设定功能从记忆模块中解耦，以及 QQ 渠道通知逻辑的修复。社区方面，用户反馈集中在**Apple Silicon 平台的更新检测失效**以及**本地 Ollama 模型工具调用（Tool/Command）配置困难**，这几个问题目前的互动热度正在上升。

### 2. 版本发布
*   **无新版本发布**。今日无 Tag 或 Release 生成。

### 3. 项目进展
今日共有 3 个 PR 被合并/关闭，标志着项目在架构重构和稳定性修复上迈出了坚实一步：

*   **架构重构：Agent 设定独立化 ([PR #416](https://github.com/netease-youdao/LobsterAI/pull/416))**
    *   **核心变更**：这是一个重要的 UI/UX 重构。将 Agent 的身份设定（IDENTITY.md/SOUL.md）从“记忆” Tab 中剥离，设立了独立的“Agent” Tab。
    *   **影响**：“记忆” Tab 现在专注于 MEMORY.md 的 CRUD 操作，去除了内层滚动条，优化了交互体验。同时修复了类型不匹配问题，并完善了引擎状态消息的国际化（i18n）。这意味着项目正在理清“身份”与“记忆”的边界，为后续更复杂的 Agent 人设管理铺路。
*   **功能增强：关联 OpenClaw 记忆 ([PR #415](https://github.com/netease-youdao/LobsterAI/pull/415))**
    *   **核心变更**：增强了与底层记忆框架 OpenClaw 的关联能力。
*   **Bug 修复：QQ 渠道通知优化 ([PR #414](https://github.com/netease-youdao/LobsterAI/pull/414))**
    *   **核心变更**：针对定时任务场景，优化了 QQ 渠道接收者（`to` 字段）的提取逻辑，解决了可能导致消息无法正确推送的问题。

### 4. 社区热点
今日讨论最活跃的问题集中在跨平台兼容性与本地模型功能上：

*   **[体验受阻] Apple Silicon 更新检测失效 ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390))**
    *   **热度**：2 条评论，已有截图佐证。
    *   **分析**：v0.2.2 (ARM64) 用户无法通过客户端检测到 v0.2.3 更新。这表明项目的更新服务器逻辑或客户端版本比对代码可能缺乏对 Apple Silicon 架构的专门处理，导致 ARM 用户被迫手动更新。
*   **[配置困惑] 本地 Ollama 无法执行命令 ([Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405))**
    *   **热度**：2 条评论。
    *   **分析**：用户在使用本地 Ollama 模型（如 qwen2.5-coder, deepseek-r1）时，虽然配置了 `tools` 字段，但仍无法调用系统命令（如列出文件），而线上模型正常。这反映出用户对本地模型“工具调用能力”的配置门槛较高，可能涉及 `openclaw.json` 的配置文档不清晰或本地模型适配层的逻辑问题。

### 5. Bug 与稳定性
*   **🔴 P1 - 更新机制失效 (ARM64)**：Issue #390 报告 Apple Silicon 版本无法识别新版本。目前**尚无 Fix PR**，建议优先排查 Update API 的返回逻辑。
*   **🟡 P2 - QQ 机器人掉线**：Issue #413 反馈 QQBOT 频繁掉线，原因不明。目前信息较少（0评论），但考虑到 PR #414 刚刚修复了 QQ 渠道的通知逻辑，不排除与近期代码变更有关，需观察是否为回归问题。
*   **🟡 P2 - 本地模型 Tool Calling 失效**：Issue #405 指出本地模型不执行命令。这属于功能性 Bug，可能与配置加载路径或权限有关。

### 6. 功能请求与路线图信号
*   **本地模型深度集成**：从 Issue #405 可以看出，用户强烈希望 LobsterAI 能无缝支持本地 Ollama 模型的 Tool Calling 能力（文件操作等）。目前的配置方式（手动修改 JSON）较为原始，未来版本可能会以此为契机，在 UI 上增加“本地模型工具权限”的可视化配置项。

### 7. 用户反馈摘要
*   **痛点**：ARM 架构（Mac 用户）在版本更新上被“遗忘”，体验割裂。
*   **痛点**：本地模型接入虽然可用，但“工具调用”功能配置极其晦涩，用户不知道如何开启 `profile: full` 才能生效，且不清楚本地模型是否原生支持 Function Calling。
*   **满意点**：项目迭代速度快，PR #416 提到的“Agent 设定独立化”表明开发团队正在积极优化交互逻辑，区分“人设”与“记忆”符合高级用户的期待。

### 8. 待处理积压
*   **[需关注] Issue #390 (ARM64 更新)**：该问题已存在 2-3 天（创建于 03-12），随着 Apple Silicon 用户增多，此问题将直接影响留存，建议尽快发布热修复或在文档中置顶手动更新指引。
*   **[需排查] Issue #413 (QQBOT 掉线)**：刚报告的问题，维护者需介入排查日志，确认是协议层问题还是软件逻辑问题。

---
*以上数据均来源于 GitHub LobsterAI 官方仓库公开信息，分析仅供参考。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是 **TinyClaw (TinyAGI)** 项目 2026-03-15 的动态日报。

### 1. 今日速览
TinyClaw 项目今日处于**高活跃度开发状态**，核心围绕 v0.0.13 版本发布进行了大量功能迭代。社区共提交了 **8 个 PR**（其中 7 个待合并，1 个已合并）并发布了新版本。核心进展集中在 **Web 端配置界面的完善**（Agent 配置 UI、首次运行引导）以及**底层架构的重构**（内存系统、通信机制扁平化）。值得注意的是，目前存在大量待合并的功能 PR，显示出项目正处于功能快速扩张期，但集成压力较大。

### 2. 版本发布
**[v0.0.13](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13)** - *主要更新*
本次更新带来了显著的用户体验提升和架构优化：
*   **Agent 配置 UI**：新增带有 Skills（技能）、System Prompt（系统提示词）、Memory（记忆）和 Heartbeat（心跳）标签页的配置界面 ([Commit 74c3e91](https://github.com/TinyAGI/tinyclaw/commit/74c3e91))。
*   **配置重构**：优化了 Agent 的 Provisioning（配置下发）流程，整合了工作空间创建逻辑，并开始使用符号链接管理 Skills ([Commit 44ad272](https://github.com/TinyAGI/tinyclaw/commit/44ad272))。
*   **分层记忆系统**：引入了 Agent 分层记忆体系 ([Commit aaca334](https://github.com/TinyAGI/tinyclaw/commit/aaca334))。

### 3. 项目进展
今日共有 **1 个 PR 被合并**，显著推进了项目的前端交互能力：
*   **[PR #207](https://github.com/TinyAGI/tinyclaw/pull/207) [MERGED] feat(agents): add agent configuration page**: 合并了全新的 Agent 配置页面，引入了标签页界面来管理技能、提示词、记忆和心跳监控。这标志着项目从纯 CLI/Config 配置向可视化配置迈出了关键一步。

### 4. 社区热点
*   **最活跃 Issue**: **[#193 [Feature]: TinyOffice: add first-run web onboarding](https://github.com/TinyAGI/tinyclaw/issues/193)**
    *   **数据**: 评论数 10 条。
    *   **分析**: 社区对 **"开箱即用"（First-run experience）** 的呼声很高。目前的 CLI 和原始配置编辑对新手不够友好，用户希望 TinyOffice 能提供类似商业软件的 Web 端初始化向导。这直接催生了 PR #214 的开发。

### 5. Bug 与稳定性
*   今日显性 Bug 报告较少，主要提交为功能增强。
*   **潜在风险**: PR #213 提到移除了对话状态追踪，虽然旨在简化架构，但此类核心通信机制的重构通常伴随较高的回归风险，建议在合并时重点关注消息丢失或顺序错误问题。

### 6. 功能请求与路线图信号
通过对比 Open PRs 和 Issues，可以看出明确的开发路线图信号：
*   **品牌重塑**: PR [#191](https://github.com/TinyAGI/tinyclaw/pull/191) 正在进行从 TinyClaw 到 TinyAGI 的全面重命名。这预示着项目可能即将迎来重大里程碑或生态重组。
*   **模型生态扩展**: PR [#217](https://github.com/TinyAGI/tinyclaw/pull/217) 添加了对 Google Gemini 及其 CLI 的支持，表明项目正在积极集成非 OpenAI 系的主流大模型。
*   **Web 优先策略**: PR [#214](https://github.com/TinyAGI/tinyclaw/pull/214) (Web Setup) 和 PR #207 (Config UI) 的结合，明确了项目正从 "Dev-tool" 向 "Product" 转型，致力于通过 Web 界面降低用户门槛。

### 7. 用户反馈摘要
*   **痛点**: Issue #193 反映出用户在**初始配置阶段**感到困难，认为目前的流程过于极客化（依赖 CLI 和手动改配置文件），迫切需要图形化的连接和配置向导。
*   **期待**: 开发者 @jlia0 迅速响应了这一需求，在 PR #214 中增加了 `/connect` 页面和 `--skip-setup` 标志，显示出维护者对用户反馈的极高响应速度。

### 8. 待处理积压
*   **高优先级待合并 PRs**: 当前有 **7 个 Open PRs** 处于待合并状态，其中包含多个核心功能（Rebranding, Gemini Support, Architecture Refactor）。
    *   **风险提示**: 大量功能分支同时停留可能导致后续合并冲突（尤其是 #191 重命名分支与其他功能分支）。建议维护者优先处理 #191 (Rebrand) 和 #213 (Refactor)，解决基础架构变更后再合并上层功能 PR（如 #214, #217）。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project daily report for Moltis based on the provided data.

---

# Moltis 项目动态日报 (2026-03-15)

## 1. 今日速览
Moltis 项目今日保持**高活跃度**，社区互动与代码提交频繁。过去24小时内共有 11 条 Issue 更新（6 新开/5 关闭）和 9 条 PR 更新（4 合并/5 待合并），显示项目处于快速迭代期。核心开发者 @penso 集中修复了会话持久化、本地模型加载和定时任务等多个关键历史遗留问题。虽然出现了涉及 Windows 文件锁和 Github Copilot 提供者的新 Bug，但社区均迅速响应并提交了修复 PR。整体来看，项目核心功能（Cron、Session、Local LLM）稳定性今日得到显著增强。

## 2. 版本发布
*   **无新版本发布** (过去24小时内)。

## 3. 项目进展
今日共有 **4 个 PR 被合并**，主要修复了会话中断、模型加载和工具调用的稳定性问题，项目健壮性迈出一大步：

*   **[MERGED] fix(chat): persist aborted partial history** (PR #418 by @penso)
    *   **进展**：解决了用户中断 Agent 运行时历史记录丢失的痛点。现在即使 Agent 被强行停止，已生成的部分内容和推理过程也会被持久化保存。
    *   **关联**：关闭了 Issue #186。
*   **[MERGED] fix(agents): retry empty structured tool names** (PR #410 by @penso)
    *   **进展**：增强了 Agent 对异常工具调用的容错能力，遇到空名称的工具调用时会自动重试，而非直接报错。
    *   **关联**：修复了 Issue #179 提到的 Kimi 模型无法激活 Cron 的问题。
*   **[MERGED] fix(local-llm): restore custom GGUF setup without restart** (PR #417 by @penso)
    *   **进展**：优化了本地大模型体验。修复了 Docker 环境下添加 HuggingFace GGUF 模型失败的问题，现在支持异步下载和自动注册，无需重启网关。
    *   **关联**：解决了 Issue #132。
*   **[MERGED] test(cron): add delivery regressions and sync docs** (PR #411 by @penso)
    *   **进展**：增加了 Cron 工具的回归测试覆盖率，确保定时消息投递的可靠性。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在集成兼容性和多智能体控制方面：

*   **[Issue #261] [Bug]: Gitbub Copilot provider errors**
    *   **热度**：👍 2 | 评论：4
    *   **分析**：用户报告 Github Copilot 提供者出现错误。这是目前反馈最多的 Issue，表明在使用第三方 API 代理或特定模型服务时存在兼容性问题。
    *   **链接**：[moltis-org/moltis Issue #261](https://github.com/moltis-org/moltis/issues/261)
*   **[Issue #235] PTY-based interactive Claude Code CLI control**
    *   **热度**：👍 1 | 评论：3
    *   **分析**：这是一个高质量的功能请求。用户指出在非交互式终端（如子进程）中运行 Claude Code CLI 会受限，建议增加 PTY（伪终端）支持以实现自主多智能体编排。这反映了高级用户对 Moltis 作为 Agent 编排底座的强烈需求。
    *   **链接**：[moltis-org/moltis Issue #235](https://github.com/moltis-org/moltis/issues/235)

## 5. Bug 与稳定性
今日新报告了几个特定场景下的 Bug，部分已有修复方案：

*   **[High] Windows 平台文件锁冲突 (Issue #436 / PR #436)**
    *   **问题**：Windows 系统下持久化会话时报错 "file lock failed: Access is denied"。
    *   **状态**：**已修复**。作者 @vanduc2514 迅速提交了 PR，通过替换 `append` 为 `write+seek` 解决了 Rust 标准库在 Windows 上的权限颗粒度问题。
*   **[High] Github Copilot 提供者报错 (Issue #261)**
    *   **问题**：调用 Github Copilot 接口时发生错误。
    *   **状态**：**待确认**。目前尚未有官方修复 PR。
*   **[Medium] Channel 消息仅显示可折叠的 "Reasoning" (Issue #437)**
    *   **问题**：在 Channel 模式下，有时消息内容只显示推理部分，缺失了最终回复。
    *   **状态**：**Open**。影响 Channels 功能的可用性。
*   **[Low] 节点地址配置错误 (Issue #426)**
    *   **问题**：Nodes 配置中存在地址错误。

## 6. 功能请求与路线图信号
从开放中的 PR 和 Issue 可以看出项目接下来的发力点：

*   **多渠道通信增强**：
    *   **Issue #233** 请求支持 Matrix 协议。
    *   **Issue #264** (CLOSED) 和 **Issue #195** (CLOSED) 的关闭伴随着相关修复 PR 的合并，表明"Agent 感知当前 Channel"和"Cron 定时任务指定 Channel"的功能已基本就绪。
*   **多节点/执行工具优化**：
    *   **PR #435** 和 **PR #432** 均致力于修复 `exec` 工具在无节点配置时对 LLM 的干扰问题。这表明项目正在优化多节点环境下的工具调用逻辑，防止模型幻觉。预计这两个 PR 合并后，Exec 工具的易用性将大幅提升。

## 7. 用户反馈摘要
*   **痛点：操作中断丢失上下文**
    *   用户 @mfclarke 在 Issue #186 中反馈，如果在 Agent 执行过程中手动停止，之前的对话和操作就像没发生过一样。这在进行长链路测试时非常痛苦。**此问题已在今日修复。**
*   **痛点：Docker 环境下本地模型难加载**
    *   用户 @ksraju007 反馈在 Docker 中添加 GGUF 模型失败。**此问题已在今日修复。**
*   **场景：CLI 作为 Agent 子进程**
    *   用户 @CyPack 提出了更深层的用例，希望通过 PTY 控制 CLI，使其能作为更大型的自主 Agent 系统的一个子模块运行，接收流式任务更新。

## 8. 待处理积压
*   **PR #412 [OPEN]**: `fix(browser): scope cached browser sessions per chat`
    *   **说明**：该 PR 旨在隔离浏览器会话状态，防止新聊天继承旧聊天的浏览器 Cookie/缓存。该 PR 已打开 4 天，建议维护者优先 Review，因为这涉及隐私和会话隔离的核心体验。
    *   **链接**：[moltis-org/moltis PR #412](https://github.com/moltis-org/moltis/pull/412)
*   **Issue #233 [OPEN]**: Matrix Support
    *   **说明**：社区对 Matrix（去中心化通信协议）支持的需求依然存在，且该 Issue 自 2月25日创建以来尚未有实质性的代码提交，建议纳入长期路线图规划。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-15)

## 1. 今日速览
CoPaw 项目今日保持**高活跃度**，社区贡献与反馈呈现井喷态势。过去 24 小时内共有 **50 条 Issue 更新**（其中 32 条已关闭）和 **29 条 PR 更新**，显示出维护团队极高的响应效率。虽然今日**无新版本发布**，但大量高质量的 Bug 修复 PR（特别是针对 UI 交互和 Windows 兼容性）已合并，预示着 v0.0.8 版本即将到来。社区对**Webhook 集成**、**模型兼容性**及**部署体验**的关注度显著提升。

---

## 2. 版本发布
**无新版本发布**。
当前主分支似乎正为下一个版本（预计为 v0.0.8）积累大量修复与功能更新。

---

## 3. 项目进展
今日共有 **8 个 PR 被合并/关闭**，主要集中在提升用户体验（UX）和修复底层兼容性问题上：

*   **交互体验优化**：合并了 [PR #1471](https://github.com/agentscope-ai/CoPaw/pull/1471)，修复了用户长期吐槽的“复制回复内容为 JSON 格式”的问题，现在将正确复制 Markdown 文本。这是对 [Issue #1457](https://github.com/agentscope-ai/CoPaw/issues/1457) 的直接响应。
*   **Windows 兼容性修复**：合并了 [PR #1483](https://github.com/agentscope-ai/CoPaw/pull/1483)，解决了 Windows 环境下跨磁盘驱动器保存配置文件时的 `OSError` 崩溃问题，修复了 [Issue #1431](https://github.com/agentscope-ai/CoPaw/issues/1431)。
*   **DingTalk 通道修复**：合并了 [PR #1331](https://github.com/agentscope-ai/CoPaw/pull/1331)，解决了钉钉富文本解析时空文本块导致 LLM API 报错的问题。
*   **测试与模型支持**：合并了 [PR #1495](https://github.com/agentscope-ai/CoPaw/pull/1495) 修复了 Windows 代理环境下的测试失败问题；[PR #626](https://github.com/agentscope-ai/CoPaw/pull/626) 增加了对 OpenAI 兼容模型中 `<think\>` 标签的解析支持。

---

## 4. 社区热点
今日讨论最活跃的议题集中在**外部集成能力**与**特定平台文件传输限制**：

1.  **飞书/QQ 频道文件发送限制**：[Issue #981](https://github.com/agentscope-ai/CoPaw/issues/981)（12 条评论）
    *   **诉求**：用户强烈希望解决飞书和 QQ 频道机器人无法回复文件的问题。
    *   **分析**：这是目前多渠道接入中最突出的痛点，限制了企业级应用场景（如自动生成报表发送）。
2.  **HTTP 协议错误导致任务中断**：[Issue #282](https://github.com/agentscope-ai/CoPaw/issues/282)（13 条评论）
    *   **诉求**：在使用 `pptxgenjs` 等工具时，因网络不稳定导致的不完整读取直接导致 Agent 任务停止。
    *   **分析**：用户希望增强 Agent 的网络容错能力和重试机制，而非直接抛出 `AGENT_UNKNOWN_ERROR`。
3.  **Webhook 功能请求**：[Issue #338](https://github.com/agentscope-ai/CoPaw/issues/338)（7 条评论，标记为 `good first issue`）
    *   **诉求**：开发者希望通过 Webhook 将 CoPaw 接入自有软件体系，实现“请求-回调”模式。

---

## 5. Bug 与稳定性
今日报告了多个影响使用的关键 Bug，部分已有修复方案：

*   **高危 - Docker 端口冲突**：[Issue #1485](https://github.com/agentscope-ai/CoPaw/issues/1485) 指出默认端口 `8088` 在 Windows Hyper-V/WSL2 中常被保留，导致启动失败。
*   **高危 - Discord 语音格式不支持**：[Issue #902](https://github.com/agentscope-ai/CoPaw/issues/902) 报告 Discord 语音消息（.ogg）导致系统崩溃。
    *   **修复状态**：已有 [PR #1476](https://github.com/agentscope-ai/CoPaw/pull/1476) 提交，增加了自动转录支持。
*   **中危 - Mac Mini M4 无法对话**：[Issue #1087](https://github.com/agentscope-ai/CoPaw/issues/1087) 报告在最新 Mac 硬件上出现 "Answers have stopped"。
    *   **修复状态**：已有 [PR #1489](https://github.com/agentscope-ai/CoPaw/pull/1489) 尝试修复停止按钮导致的会话锁死问题。
*   **中危 - Docker 升级配置丢失**：[Issue #1413](https://github.com/agentscope-ai/CoPaw/issues/1413) 反映从 v0.05 升级到 v0.07 时模型配置消失。
*   **低危 - 时区无法修改**：[Issue #1501](https://github.com/agentscope-ai/CoPaw/issues/1501) 官方 Docker 镜像时区配置固化。

---

## 6. 功能请求与路线图信号
根据 Issue 和活跃 PR，下一阶段的开发重点已现端倪：

1.  **安全性与权限控制**：
    *   [Issue #524](https://github.com/agentscope-ai/CoPaw/issues/524) 请求限制 `write_file` 权限。
    *   [PR #1484](https://github.com/agentscope-ai/CoPaw/pull/1484) 引入了针对 `mkfs`、`dd`、`rm -rf` 等破坏性 Shell 命令的检测规则。
    *   *预测*：项目正在构建一套完整的 Agent 安全沙箱机制。
2.  **更广泛的 LLM 支持**：
    *   [PR #1498](https://github.com/agentscope-ai/CoPaw/pull/1498) 添加 DeepSeek Provider。
    *   [PR #1482](https://github.com/agentscope-ai/CoPaw/pull/1482) 优化 Ollama 连接体验。
3.  **认证系统**：
    *   [PR #1329](https://github.com/agentscope-ai/CoPaw/pull/1329) 正在推进 Web 端的登录认证功能，这可能改变目前默认无认证的状态，适合公网部署。

---

## 7. 用户反馈摘要
*   **痛点**：**复制功能**体验极差（复制出来是 JSON 而非文本，今日已修）；**Docker 部署**在 Windows 上困难重重（端口、代理、跨盘存储）；**多模态能力**在 Discord/飞书等渠道仍不完善（语音、文件发送受限）。
*   **满意点**：维护者对 Bug 的响应速度非常快（如 24 小时内修好了复制 Bug）；项目架构对本地模型（如 Qwen, DeepSeek）的支持越来越好。
*   **场景**：用户多将 CoPaw 用于自动化办公（处理 Excel、PPT）、接入即时通讯软件作为助手，以及对本地私有化模型的使用。

---

## 8. 待处理积压
以下重要 Issue/PR 长期处于 Open 状态或亟待解决，建议维护者优先关注：

1.  **Webhook 支持 ([Issue #338](https://github.com/agentscope-ai/CoPaw/issues/338))**：标记为 `good first issue`，热度高，是扩展生态的关键。
2.  **Web 认证系统 ([PR #1329](https://github.com/agentscope-ai/CoPaw/pull/1329))**：功能庞大，Open 多日，需尽快 Review 以确保安全性落地。
3.  **Docker 端口冲突 ([Issue #1485](https://github.com/agentscope-ai/CoPaw/issues/1485))**：这是“开箱即用”的阻碍，建议尽快修改默认端口或在文档中醒目提示。
4.  **Nextcloud 集成 ([PR #1478](https://github.com/agentscope-ai/CoPaw/pull/1478))**：高质量的功能 PR，合并后将显著增强私有化部署吸引力。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是基于 2026-03-15 数据生成的 ZeptoClaw 项目动态日报。

---

# 📊 ZeptoClaw 项目动态日报 (2026-03-15)

### 1. 今日速览
ZeptoClaw 今日维持高活跃度，过去24小时内共有 12 次实质性的 Issue 与 PR 更新。项目重心目前明显向**多渠道适配**与**容器化构建优化**倾斜。社区贡献者 @starsy 和 @rafaellin 分别提交了关于 ACP 协议支持和 Discord 图片处理的重要 PR，显示出生态扩展的强劲势头。虽然官方未发布新版本，但核心维护者 @qhkm 关闭了多个关键的 Bug 和功能请求，表明目前处于代码整理与功能合并阶段，为下一次版本发布做准备。

### 2. 版本发布
*   **无新版本发布**

### 3. 项目进展
今日项目整体取得了实质性进展，主要集中在**接入层协议支持**和**安全加固**方面：

*   **渠道接入能力增强**: PR #356 引入了 ACP (Agent Client Protocol) 的 stdio 与 HTTP 实现，这为 ZeptoClaw 作为子进程接入其他客户端（如 acpx）提供了标准化的支持。
*   **多模态交互修复**: 针对 Discord 频道长期忽略纯图片消息的问题，PR #346 (Fix #357) 已合并。修复了 `parse_message_create` 和 `loop.rs` 中的过滤逻辑，确保图片内容能被正确处理。
*   **安全策略加固**: Issue #347 的关闭意味着默认的 Agent 模式和审批策略已完成“fail-closed”级别的加固，修复了危险操作类别未正确触发审批的隐患。
*   **LLM 提示词工程优化**: PR #359 更新了 Coder 模板系统，强制 LLM 优先发现并运行现有测试，而不是盲目编写新测试，这将显著提升代码生成的兼容性与稳定性。

### 4. 社区热点
今日社区讨论主要集中在以下几个方向：

*   **[Issue #331] Telegram 体验优化** (作者: @ilovethensa)
    *   **热度**: 👍 0 | 评论: 1
    *   **分析**: 用户反馈当前 Telegram 消息格式排版混乱且缺乏“正在输入”的指示器，导致交互体验生硬。这反映了用户对 ZeptoClaw 在 IM 端呈现效果的高要求，期待更原生的富文本支持。
    *   **链接**: [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)

*   **[Issue #333] Podman 构建错误** (作者: @taqtiya-mark)
    *   **热度**: 👍 0 | 评论: 1
    *   **分析**: 开发者在使用 Podman 5.7 进行构建时遇到 Cache Mount 兼容性问题。由于 Podman 的 legacy builder 不支持 `--mount=type=cache` 语法，导致 CI/CD 流水线中断。
    *   **链接**: [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333)

### 5. Bug 与稳定性
今日重点修复了影响生产环境的稳定性问题，同时也暴露了部分开发环境兼容性挑战：

*   **🔴 [严重] Discord 通道丢失图片消息 (已修复)**
    *   **问题**: 纯图片消息被 `discord.rs` 和 `loop.rs` 双层拦截丢弃。
    *   **状态**: **已修复** (PR #346 已合并)。此修复对于依赖 Discord 进行多模态输入的场景至关重要。
    *   **链接**: [Issue #357](https://github.com/qhkm/zeptoclaw/issues/357)

*   **🟠 [中等] Docker/Podman 构建兼容性 (待处理)**
    *   **问题**: `Dockerfile.dev` 中的 BuildKit 语法导致 Podman 构建失败 (Exit 127)。
    *   **状态**: **有修复 PR**。PR #358 已提交，引入了 `lint-container.sh` 脚本以自动检测环境并回退兼容模式。
    *   **链接**: [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333) | [PR #358](https://github.com/qhkm/zeptoclaw/pull/358)

*   **🟢 [低] 智谱 API Key 验证优化 (已修复)**
    *   **问题**: Onboarding 阶段缺乏对 Zhipu/GLM API Key 的显式验证。
    *   **状态**: **已修复** (PR #335 已合并)。
    *   **链接**: [PR #335](https://github.com/qhkm/zeptoclaw/pull/335)

### 6. 功能请求与路线图信号
*   **ACP 协议支持 (高概率纳入)**: PR #356 已提交，实现了 stdio 和 HTTP 通道。鉴于这是核心架构扩展，且由核心贡献者提交，极大概率会在下个版本合并。
*   **Telegram 交互增强 (规划中)**: Issue #331 提出的格式化和 Typing Indicator 需求符合当前 IM Bot 的主流体验标准，虽然目前还是 Open 状态，但属于高优先级的 UX 改进方向。
*   **Shelldex 收录 (已完成)**: Issue #334 关于将项目添加到 Shelldex 目录已关闭，表明项目正在积极进行外部推广与索引。

### 7. 用户反馈摘要
*   **多模态需求强烈**: Issue #357 和 #331 表明，用户正大量使用 Discord 和 Telegram 作为前端，对富文本渲染、图片解析能力非常敏感。
*   **容器化部署是主流**: Issue #333 的报告显示，相当一部分开发者使用 Podman 替代 Docker，社区对 BuildKit 语法的兼容性有硬性需求。

### 8. 待处理积压
当前暂无长期未响应的“僵尸” Issue，但以下条目需关注：

*   **PR #359 (Coder Template)**: 虽然已提交且包含回归测试，但作为核心 Prompt 模板的修改，需维护者仔细 Review 其对 LLM 输出稳定性的影响，建议尽快安排合并或提出修改意见。
*   **PR #356 (ACP Protocol)**: 代码量较大，涉及新的子命令和 HTTP 服务，目前处于 Open 状态，需要社区进行充分的代码审查。

---

*数据来源: GitHub (qhkm/zeptoclaw) | 统计时间: 2026-03-15*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>