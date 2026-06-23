# OpenClaw 生态日报 2026-06-24

> Issues: 190 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 22:22 UTC

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

# 🐾 OpenClaw 项目动态日报
**报告日期**: 2026-06-24  
**数据来源**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

### 1. 今日速览
OpenClaw 在过去 24 小时内保持了极高的社区活跃度与开发推进速度，共计处理了 **190 条 Issue 更新**（139 条新开/活跃）以及 **500 条 PR 更新**（34 条已合并/关闭）。当前项目的工程焦点高度集中在 **Session 状态管理、上下文压缩 以及第三方模型 API 兼容性** 的底层重构上。虽然今日无新版本发布，但核心维护者正在审查大量针对消息丢失和崩溃循环的 P1 级关键修复。庞大的 PR 积压（当前仍有 466 个待合并）表明项目正处于架构转型的阵痛期，亟需扩充维护者团队以应对企业级部署日益增长的稳定性需求。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)。** 项目当前主线开发似乎仍聚焦于 `2026.6.x` 分支的底层打磨与稳定性强化。

### 3. 项目进展
今日共有 **34 个 PR 被合并或关闭**，整体进展主要体现在以下几个方面：
*   **会话管理与消息投递核心修复**：[PR #89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊会话卡死在 `failed` 状态后静默丢弃后续所有消息的严重问题；[PR #88968](https://github.com/openclaw/openclaw/pull/88968) 隔离了记忆刷盘失败对用户正常回复流的影响。
*   **TTS 与渠道集成优化**：[PR #83988](https://github.com/openclaw/openclaw/pull/83988) 彻底解决了 Telegram 机器人在 `final` TTS 模式下文本和语音条交替闪烁的体验问题。
*   **底层架构重构**：核心维护者 `@jalehman` 提交的 [PR #96206](https://github.com/openclaw/openclaw/pull/96206) 正在持续推进 SQLite 迁移的 Path 3 阶段，将文件缓存逻辑从 Agent 边界剥离，统一交由会话访问器处理，这将为后续的高并发打下基础。

### 4. 社区热点
今日讨论度最高的问题反映了用户在多模型、长对话场景下的核心痛点：
*   🥇 **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (评论: 50)**: **核心 Session/记录 SQLite 迁移**。作为目前的重构核心，维护者和贡献者在讨论底层访问器接缝的适配进度，标志着 OpenClaw 正式向生产级关系型存储演进。
*   🥈 **[Issue #90991](https://github.com/openclaw/openclaw/issues/90991) (评论: 14)**: **Cron 定时任务污染全局运行时状态**。用户反馈计划任务导致系统全局过载和闪断，该 Bug 已被关闭，说明核心团队已找到并修复了状态污染源。
*   🥉 **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (评论: 13)**: **Anthropic 思考签名失效**。开发者反馈在重放流式 `thinking` 块时，因 API 错误文本被泛化，导致恢复包装器无法触发，长对话容易直接报错。

### 5. Bug 与稳定性
按严重程度（P1）及影响面排列今日报告的关键缺陷：

*   🔴 **[Issue #92043](https://github.com/openclaw/openclaw/issues/92043) [P1]**: **180 秒压缩超时硬截断**。`EMBEDDED_COMPACTION_TIMEOUT_MS` 缺乏部分进度复用机制，长历史对话或慢速模型（如本地部署）在遇到超时后，每一轮都会触发相同的致命失败。（暂无公开修复 PR）
*   🔴 **[Issue #94228](https://github.com/openclaw/openclaw/issues/94228) [P1]**: **原生 Anthropic 路径长对话锁死**。长周期多轮工具调用会话最终会因 `thinking block 签名无效` 返回 HTTP 400 错误，导致会话永久 "变砖"（Bricked）。
*   🟠 **[Issue #95760](https://github.com/openclaw/openclaw/issues/95760) [P2]**: **NVIDIA Build 供应商流式截断**。使用 GLM 5.1 等模型时，流式输出在执行工具调用期间静默中断，会话进入僵尸状态。（已关闭，可能已修复）
*   🟠 **[Issue #95833](https://github.com/openclaw/openclaw/issues/95833) [P1]**: **子智能体锁死会话**。超时中断机制触发后未能释放 `.jsonl.lock` 文件，导致整个会话永久锁定并报错，直至手动清理。

### 6. 功能请求与路线图信号
结合社区诉求与待合并的 PR，以下功能极有希望在下一个版本中落地：
*   **MathJax/LaTeX 渲染支持**: [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (👍7) 呼吁在控制台 UI 原生支持数学公式渲染，这对科研和学术领域的 AI 助手极为重要。
*   **MCP Apps UI 元数据解析**: [PR #69039](https://github.com/openclaw/openclaw/pull/69039) 正在将 MCP 服务器转变为更丰富的 UI 提供者。如果合并，OpenClaw 将能够渲染受信任的 MCP 结构化前端。
*   **话题与会话族隔离**: [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) 提出了 `Topic-session families` 概念，允许一个助手在不同的命名上下文车道中保持独立的短期记忆，同时共享持久记忆。

### 7. 用户反馈摘要
从大量 Issue 描述与讨论中，提炼出当前用户的三个核心体验痛点：
1.  **第三方模型 API 兼容性脆弱**：用户大量使用 OpenRouter、DeepSeek、MiniMax 等 Anthropic 兼容接口。但这些模型在输出 `tool_use` 时经常不符合严格的结构化规范（如 [Issue #90288](https://github.com/openclaw/openclaw/issues/90288) 反馈直接输出纯文本 `[tool: exec]`），导致工具调用失败。
2.  **长上下文与记忆管理的黑盒焦虑**：用户难以感知上下文压缩的具体时机，当压缩导致重要指令丢失或报错时（如 [Issue #38520](https://github.com/openclaw/openclaw/issues/38520)），用户感到失控，强烈要求增加压缩前的通知与延迟机制。
3.  **CLI 进程树稳定性欠佳**：在 Windows 环境下，大量用户反馈 ACPX 运行时存在底层的 Spawn 错误（如 [Issue #93465](https://github.com/openclaw/openclaw/issues/93465)），Windows 端的可用性显著落后于 macOS/Linux。

### 8. 待处理积压
以下高价值或长期滞留的议题需要维护者团队的紧急关注：
*   📌 **[PR #69039](https://github.com/openclaw/openclaw/pull/69039) - MCP Apps 支持**: 规模为 XL（已等待 2 个月），涉及安全边界和兼容性，处于 `waiting on author` 状态，阻塞了 MCP 生态的深度集成。
*   📌 **[Issue #49931](https://github.com/openclaw/openclaw/issues/49931) - Windows 可配置 Shell**: Windows 用户苦于硬编码的 PowerShell 久矣，强烈要求支持 `tools.exec.shell` 配置项以使用 Git Bash 等工具，该 Issue 已滞留且标记为 `stale`。
*   📌 **[Issue #94518](https://github.com/openclaw/openclaw/issues/94518) - DeepSeek 缓存击穿**: 6.x 升级导致 DeepSeek 提示词缓存命中率跌破 10%，极大增加了企业级用户的 API 成本，目前仍在等待产品决策。

---

## 横向生态对比

以下是基于 2026 年 6 月 24 日各开源项目社区动态数据的横向对比分析报告：

# 个人 AI 助手与智能体开源生态横向分析报告 (2026-06-24)

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话工具”向“全平台、多模态、自动化调度系统”演进的关键重构期**。各项目核心架构正在经历深度阵痛，底层数据存储（如向 SQLite 迁移）与状态管理（如多会话隔离、内存防泄漏）的稳定性成为最大的工程挑战。同时，**跨平台多渠道网关集成（IM、桌面、移动端）与对非标第三方大模型的容错适配**，构成了各家抢占用户的战略焦点。

### 2. 各项目活跃度对比
*活跃度基准：基于过去 24 小时的 Issue 更新与 PR 状态流转（活跃/新开/合并）评估。*

| 项目名称 | 活跃度评估 | 数据指标 (Issue 更新 / PR 更新) | 版本发布 | 健康度与工程状态 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🟢 极高 | 190 (活跃 139) / 500 (合并 34) | 0 | 阵痛期：积压 466 个 PR，重心在底层架构重构与 P1 级阻断 Bug 修复。 |
| **CoPaw** | 🟢 极高 | 38 (活跃 28) / 50 (合并 21) | v1.1.12.post2 | 迭代迅猛：移动端适配与底层清理并行，受内存泄漏与配置回归困扰。 |
| **Hermes Agent**| 🟢 高 | 100 (活跃 50) / 50 (合并 20) | 0 | 扩张期：网关稳定性大幅提升，但面临多并发下的严重状态隔离问题。 |
| **IronClaw** | 🟢 高 | 22 (活跃 15) / 41 (合并 20) | 0 | 重构期：“Reborn” 架构推进中，CI 阻塞多，Token 成本优化见效。 |
| **ZeroClaw** | 🟢 高 | 29 (活跃 16) / 50 (合并 18) | v0.8.2 (前置) | 稳健：即将发布新版，插件安全边界与多渠道流式输出进展显著。 |
| **NanoBot** | 🟡 中高 | 11 (活跃) / 39 (合并 7) | v0.2.2 | 稳固期：刚发布健壮性版本，测试覆盖增强，重点攻坚 PWA 移动端。 |
| **NanoClaw** | 🟡 中高 | 未知 / 12+ (合并 8) | 0 | 健康演进：底层 SDK 大版本升级，深化本地部署与可插拔架构。 |
| **PicoClaw** | 🟡 中 | 未知 / 17 (合并 6) | 0 | 功能拓展：多渠道连接基建完善中，探索向移动端设备控制延伸。 |
| **LobsterAI** | 🟡 中 | 未知 / 11 (合并 5) | 0 | 滞缓/预警：开发活跃，但存在高危安全 PR 与阻断性 Bug 积压。 |
| **NullClaw** | 🟠 低 | 0 / 0 | 0 | 沉淀期：社区无交互，长线推进 Cron 定时内核。 |
| **Moltis** | 🟠 低 | 0 / 0 | 0 | 静默期：清理历史代码，核心流水线运行稳定无缺陷报告。 |

### 3. OpenClaw 在生态中的定位
* **生态定位**：OpenClaw 无可争议地是当前生态中**体量最大、社区最活跃的“参照系”项目**。单日近 500 条 PR 更新和庞大的 Issue 量级表明其拥有最庞大的用户基数和最复杂的应用场景。
* **技术路线差异**：相较于其他项目还在优化单次对话或简单的 Web 交互，OpenClaw 已经在攻坚**生产级重度场景**——如深层 SQLite 关系型存储迁移、复杂的子智能体并发锁控制（`.jsonl.lock`）、原生 MCP 结构化 UI 渲染。
* **优劣势对比**：
  * *优势*：生态繁荣，极度敏感于真实的重度企业级痛点（如长对话压缩、DeepSeek 缓存击穿成本问题）。
  * *劣势*：项目正处于架构转型的“深水区”，庞大的 PR 积压（466+）暴露出维护者团队审查能力达到瓶颈；且对 Windows 环境及第三方非标大模型的兼容性劣于轻量级竞品。

### 4. 共同关注的技术方向
跨多个项目，今日涌现出强烈的共性需求与技术共振：
1. **第三方大模型 API 容错与适配**：各项目深受模型不按标准输出之苦。
   * *涉及项目*：OpenClaw（`tool_use` 纯文本输出、思考签名失效）、PicoClaw（豆包 Seed 模型泄露 XML）、NanoBot（Kimi Coding 的 ID 冲突）、ZeroClaw（Groq 模型拒收思考块）、CoPaw（DeepSeek 思考卡死）。
   * *诉求*：要求 AI 助手框架在引擎层建立更强的容错解析与强制结构化干预机制。
2. **Cron 定时任务与自主记忆演进**：从被动响应走向主动执行。
   * *涉及项目*：NullClaw、LobsterAI、OpenClaw、CoPaw、IronClaw、NanoBot。
   * *诉求*：将大模型接入定时调度系统，引入“梦境任务/夜间总结”，并实现长短期记忆的自动归档与按需召回。
3. **跨平台移动端与多渠道网关 (IM PWA)**：打破 Web 端局限。
   * *涉及项目*：CoPaw、NanoBot（PWA 支持）、Hermes Agent（Discord/Telegram 死锁修复）、PicoClaw（WhatsApp 保活）、NanoClaw（Slack Socket）。
   * *诉求*：将 Agent 无缝、稳定且美观地接入各类主流 IM 软件及手机端桌面。
4. **人机协同机制 (HITL)**：注重生产环境的安全护栏。
   * *涉及项目*：NanoClaw（拒绝附原因）、IronClaw（技能学习门控）、ZeroClaw（跨渠道审批路由）。

### 5. 差异化定位分析
* **基建夯实型（OpenClaw、ZeroClaw）**：强调底层全盘重构、高并发支持与关系型数据库迁移，面向具有极高并发诉求和复杂工作流的企业级/极客用户。
* **体验与多端协同型（Hermes Agent、IronClaw）**：Hermes 专注打造“AI 中枢”（如 ACP 客户端统编排、桌面端 IDE 化），IronClaw 则在深度整合 Google Workspace 等云服务生态，面向办公提效人群。
* **移动优先与轻量创新型（CoPaw、NanoBot、NanoClaw）**：UI/UX 迭代极快，高度关注响应式布局、PWA 支持、内存开销控制，主要面向轻量化部署、移动端操作和本地/内网隐私诉求强烈的个人用户。
* **跨界探索型（PicoClaw）**：独树一帜地引入 Android ADB 远程操作工具，探索从“纯软件 AI 助手”向“控制移动智能硬件的 AI 智能体”拓展。

### 6. 社区热度与成熟度
* **快速扩张与阵痛期**：`OpenClaw`（重度重构）、`Hermes Agent`（多并发状态隔离出现高危 Bug）、`CoPaw`（架构迁移清理）。这些项目功能极速膨胀，但均面临“内存占用大、锁死、会话污染”等复杂系统级挑战。
* **质量巩固与稳固期**：`NanoBot`（强推回归测试）、`IronClaw`（关注 CI 流水线健壮性、Token 成本控制）。这类项目开始注重内部代码质量与防回归机制。
* **静默或发展初期**：`Moltis`（积压代码清理，无新 Bug）、`NullClaw`（专注长线 Cron 研发，社区零互动），处于平稳迭代或功能酝酿阶段。

### 7. 值得关注的趋势信号
对于 AI 智能体开发者的核心启发：
1. **“Context Token 极限压缩”成为刚需**：IronClaw 的数据表明，全量工具的 Schema 每轮重发消耗极大，极易导致模型超时。**“渐进式工具展示”与“按需召回”**将成为未来 Agent 框架的标配优化方向。
2. **安全过滤与工具调用的冲突加剧**：IronClaw 发现大模型安全词黑名单会误杀正常 API 词汇（如 "Bearer"）。开发者在构建工具系统时，需谨慎处理 Schema 描述，避免意外触雷。
3. **WASM 插件安全边界成型**：ZeroClaw 暴露的 WASM 插件 SSRF 和越权读取环境变量问题预示着，未来的 Agent 扩展架构必须具备细粒度的**网络与系统变量白名单沙盒机制**。
4. **长上下文管理已逼近物理极限**：OpenClaw 的 180 秒压缩截断 Bug 反映出，长周期对话的上下文压缩不能依赖“一锤子买卖”，必须支持部分进度复用与更智能的记忆断点续传。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-06-24  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内保持了极高的社区活跃度与开发迭代节奏。项目正式发布了以**系统健壮性与前端体验**为核心的 `v0.2.2` 版本，单版本合并了高达 140 个 PR 并迎来 21 位新贡献者。今日共计更新 39 个 PR（其中 32 个处活跃待合并状态）和 11 个 Issues，开发重心明显向 **PWA 移动端支持、记忆生命周期管理以及多模型适配（如 Kimi、OpenCode）** 倾斜。整体数据表明，NanoBot 在快速扩张的同时，正通过强化的回归测试和架构解耦来巩固其底层稳定性。

### 2. 版本发布
- **v0.2.2** ([Release 链接](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2))
  - **核心主题：健壮性**。针对真实复杂使用场景，WebUI 对话的生存能力大幅提升：对话记录从单一易损坏文件改为分段存储；分支对话能更可靠地保留上下文。
  - **规模性里程碑**：本版本共计合并 140 个 PR，并迎来了 21 位新贡献者，标志着项目社区生态的快速繁荣。

### 3. 项目进展
今日共有 7 个 PR 被合并/关闭，多项核心修复与测试用例已落地：
- **测试覆盖增强**：PR [#4393](https://github.com/HKUDS/nanobot/pull/4393) 增加了工作区子目录下 Git 命令的端到端回归测试，完善了沙箱安全边界。
- **配置回退修复**：PR [#4387](https://github.com/HKUDS/nanobot/pull/4387) 优化了上下文加载逻辑，在缺失项目本地 `SOUL.md`/`USER.md` 时能够平滑回退到默认工作区配置。
- **CI/CD 优化**：PR [#4417](https://github.com/HKUDS/nanobot/pull/4417) 修复了 MCP 超时回归测试中依赖不可解析 URL 的问题，使测试更加稳健。

### 4. 社区热点
今日社区的讨论与开发焦点高度集中在**移动端体验**与**记忆/后台任务系统**：
- **WebUI PWA 支持**：由开发者 `zpljd258` 连续提交的 Issue [#4479](https://github.com/HKUDS/nanobot/issues/4479) 与 PR [#4480](https://github.com/HKUDS/nanobot/pull/4480) 引入了完整的 PWA 支持与移动端侧边栏滑动手势。这反映出用户强烈希望将 NanoBot 作为原生 App 安装在手机端的诉求。
- **Dream 记忆系统演进**：PR [#4477](https://github.com/HKUDS/nanobot/pull/4477) 提出了生命周期感知的 Wiki 记忆写入器，而 Issue [#4467](https://github.com/HKUDS/nanobot/issues/4467) 则指出 Dream 模块在迭代时反复创建重复技能的痛点，表明社区在推动 NanoBot 具备更持久、更智能的自动化记忆能力。

### 5. Bug 与稳定性
今日报告了多个与最新网络网关及流式输出相关的 Bug，部分已产生修复 PR：
- **Telegram 网关显示异常 (严重)**：Issue [#4470](https://github.com/HKUDS/nanobot/issues/4470) 报告了 v0.2.2 版本中 Telegram 消息丢失换行符，以及在流式生成时网关不断重绘消息导致屏幕频闪。**已有修复 PR** [#4472](https://github.com/HKUDS/nanobot/pull/4472) 提出在存在流式预览时跳过 `sendRichMessage`。
- **工具调用 ID 冲突 (高)**：Issue [#4473](https://github.com/HKUDS/nanobot/issues/4473) 指出在使用 Kimi Coding 等基于 Anthropic 兼容端点时，并行调用的 `tool_use.id` 容易发生重复导致 400 报错。**已有修复 PR** [#4474](https://github.com/HKUDS/nanobot/pull/4474) 与 [#4444](https://github.com/HKUDS/nanobot/pull/4444) 提供了去重逻辑。
- **WebUI 推理标签泄漏 (中)**：Issue [#4465](https://github.com/HKUDS/nanobot/issues/4465) 指出前端直接将 `<thinking/>` 标签作为普通文本渲染，而非解析为推理过程块。
- **Dream 游标导致提示词膨胀 (中)**：PR [#4481](https://github.com/HKUDS/nanobot/pull/4481) 修复了当 Dream 被禁用时游标不前进，导致历史记录被持续全量注入 Prompt 的性能隐患。

### 6. 功能请求与路线图信号
结合用户诉求与已有 PR，以下方向具有极高的合入潜力，构成了下个版本的路线图信号：
- **自定义模型推理样式适配**：PR [#4482](https://github.com/HKUDS/nanobot/pull/4482) 允许自定义提供商（如火山引擎/豆包）配置非标准的思考参数，这将极大拓宽 NanoBot 接入国产多模型的兼容性。
- **外部平台与模型集成扩展**：Issue [#4475](https://github.com/HKUDS/nanobot/issues/4475) 和 Issue [#4463](https://github.com/HKUDS/nanobot/issues/4463) 分别请求内置支持 OpenCode Zen/Go 提供商以及 Kimi Coding 订阅端点，相关的实现 PR [#4476](https://github.com/HKUDS/nanobot/pull/4476) 已提交。
- **动态记忆整合与溯源**：PR [#4402](https://github.com/HKUDS/nanobot/pull/4402) (可选的即时记忆归档) 与 PR [#4424](https://github.com/HKUDS/nanobot/pull/4424) (带来源上下文的归档机制) 正在重构底层的长短期记忆调度链路。

### 7. 用户反馈摘要
- **工作流痛点**：重度用户（Issue [#4467](https://github.com/HKUDS/nanobot/issues/4467)）反映 NanoBot 每次运行都会重建已存在的自定义技能，打断了用户对单一 Workspace Skill 的持续迭代与维护习惯，产生了强烈的割裂感。
- **移动端体验预期**：用户对手机端使用 AI Agent 的要求越来越高，不仅仅满足于响应式网页，更期待通过 PWA 获得类原生的手势滑动交互（PR [#4480](https://github.com/HKUDS/nanobot/pull/4480)）。
- **隐蔽的行为变更**：Issue [#4410](https://github.com/HKUDS/nanobot/issues/4410) 反映升级后，即使大模型判断无需发送消息，Cron Job 心跳机制仍会强制触发消息推送，干扰了用户预期。

### 8. 待处理积压
- **Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298)**：自 3 月 20 日创建至今，用户持续报告小模型极易陷入**无限工具调用死循环**（Endless tool calling loops）。该问题存在 3 个月未被彻底解决，由于近期接入外部小模型（如 OpenCode Go）的需求增加，建议维护者优先引入基于相同参数输入的防环熔断逻辑。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

这里是为您生成的 Hermes Agent 项目动态日报（2026-06-24）。

---

# 📊 Hermes Agent 开源项目日报 (2026-06-24)

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内项目共录得 100 次代码仓库活动（50 条 Issue 更新，50 条 PR 更新），社区互动密集。
- **修复步伐加快**：今日有 8 个 Issue 被关闭，20 个 PR 被合并/关闭，显示出维护团队正在高效清理积压问题，特别是在多平台网关（Discord、Telegram）的稳定性上取得了重大进展。
- **焦点转移至桌面端与状态隔离**：从热门 PR 和 Issue 看，项目正在向「一等公民桌面端项目支持」演进，同时社区高度关注多会话/多进程下的内存与状态泄漏问题。

## 2. 版本发布
**本日无新版本发布 (0 Releases)**。目前项目似乎仍处于 `v0.17.0` 后的迭代周期中，大量修复和功能正在通过主分支积攒，可能即将迎来 `v0.18.0`。

## 3. 项目进展
今日合并/关闭的 PR 极大地提升了网关和核心代理的稳定性，项目整体在**多平台消息防抖**和**会话死锁恢复**方面迈出了一大步：
- **Discord 消息防重发机制完善**：合并了三个相关 PR（[#51153](https://github.com/NousResearch/hermes-agent/pull/51153), [#51129](https://github.com/NousResearch/hermes-agent/pull/51129), [#51552](https://github.com/NousResearch/hermes-agent/pull/51552)），彻底修复了 Discord 自动开线程导致用户消息触发两次、引发双重 Agent 运行的问题。
- **网关死锁与并发崩溃修复**：合并了修复飞书及通用网关下因 guard 互换引发会话死锁的 PR（[#51553](https://github.com/NousResearch/hermes-agent/pull/51553)），并修复了并发工具调用时解释器关闭导致的崩溃（[#51549](https://github.com/NousResearch/hermes-agent/pull/51549)）。
- **核心性能优化**：早期关于 Web 工具稳定性和速度的基础架构 PR 也被关闭（[#14](https://github.com/NousResearch/hermes-agent/pull/14)），底层基建趋于稳定。

## 4. 社区热点
今日讨论度最高的功能与 Bug 集中在**跨端协同**与**凭据管理**：
- **泛化 ACP 客户端提案 (16 👍 / 11 评论)**：[Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257) 提议将 Hermes 作为客户端，统一编排 Claude、Cursor 等 ACP 兼容的编码代理。这表明社区强烈渴望将 Hermes 打造为**“AI Agent 的中枢指挥系统”**。
- **隐私安全痛点 (8 评论)**：[Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083) 报告密码被星号脱敏后，模型在读取自身历史上下文时无法解析，导致二次工具调用失败。这是一个典型的过度安全过滤影响可用性的案例。
- **OpenAI-Codex 凭据丢失 (8 评论)**：[Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566) 指出在并发凭证轮换时，新添加的 Codex 凭据可能被旧进程重写的 `auth.json` 覆盖丢失。

## 5. Bug 与稳定性
今日报告的 Bug 中，多个 P1 级别问题严重影响了生产可用性：

**🔴 P1 严重级别 (高危/阻断性)**
- **跨会话历史泄漏**：[Issue #49106](https://github.com/NousResearch/hermes-agent/issues/49106) Web/微信会话中，不同活跃会话之间发生对话历史泄漏（严重隐私问题，当前无完美修复方案）。
- **OpenAI 路由全线报错**：[Issue #51045](https://github.com/NousResearch/hermes-agent/issues/51045) Nous Portal 路由 `gpt-5.5` 请求时，6月20日起持续返回 Azure 后端 500 错误。
- **Telegram 网关无限死循环**：[Issue #48648](https://github.com/NousResearch/hermes-agent/issues/48648) 流式回复超过 4096 字符限制时，触发嵌套回复死循环。（已有相关网关修复动作）

**🟠 P2 / P3 稳定性与兼容性**
- **跨平台网关与连接问题**：Telegram 打字指示器无限卡死（[#28004](https://github.com/NousResearch/hermes-agent/issues/28004)）、MCP OAuth 405 错误（[#51535](https://github.com/NousResearch/hermes-agent/issues/51535)）。
- **视觉处理回退失效**：Gemini 503 错误未触发备用提供商（[#25822](https://github.com/NousResearch/hermes-agent/issues/25822)），且视觉回退链路中错误使用 await 导致彻底瘫痪（[#49586](https://github.com/NousResearch/hermes-agent/issues/49586)）。
- **Codex 推理重放 400 报错**：[Issue #51512](https://github.com/NousResearch/hermes-agent/issues/51512)（*注：已有正在进行的修复 PR [ #51521](https://github.com/NousResearch/hermes-agent/pull/51521)*）。

## 6. 功能请求与路线图信号
结合 Issue 需求与当前开启的 PR，以下方向极可能在下一个版本中落地：
- **桌面端「工作空间/项目」深度整合**：PR [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) 正在重构桌面端，引入侧边栏项目树、Codex 风格的代码审查面板。配合用户提出的“左侧栏增加快速创建工作空间按钮”请求（[Issue #51548](https://github.com/NousResearch/hermes-agent/issues/51548)），桌面端 IDE 化已成明确路线。
- **更多原生云服务与鉴权支持**：
  - PR [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) 即将合入对 Google Vertex AI（Gemini 企业版）的原生支持。
  - PR [#22648](https://github.com/NousResearch/hermes-agent/pull/22648) 将 Ollama Cloud 作为插件化搜索/提取提供商引入。
- **Slack 结构化输出**：[Issue #51363](https://github.com/NousResearch/hermes-agent/issues/51363) 请求支持 Slack AI App 的思考步骤和任务卡片，提升办公协同体验。

## 7. 用户反馈摘要
从今日的 Issue 描述与评论中，可以提炼出以下用户核心反馈：
- **多环境部署的痛点**：Linux 桌面版不生成 `.desktop` 文件导致无法通过图标启动（[#49171](https://github.com/NousResearch/hermes-agent/issues/49171)）；`npm 11` 环境下锁文件不同步导致干净构建失败（[#44121](https://github.com/NousResearch/hermes-agent/issues/44121)）。用户对跨端打包细节颇有微词。
- **移动端体验差强人意**：用户反馈移动端打开内容卡片分辨率过低/模糊（[#32837](https://github.com/NousResearch/hermes-agent/issues/32837)），且缩略图创建器渲染了错误的语音控件（[#32836](https://github.com/NousResearch/hermes-agent/issues/32836)）。
- **复杂上下文处理的不满**：长文本提示在桌面端置顶会占据整个可视区域，遮挡 AI 回复（[#39721](https://github.com/NousResearch/hermes-agent/issues/39721)）。

## 8. 待处理积压
以下重要 PR/Issue 长期未合并/关闭，需要维护团队关注：
- **[长期未合并 PR] 桌面端 Ad-Hoc 签名修复**：[PR #41524](https://github.com/NousResearch/hermes-agent/pull/41524)（5月7日提交），修复本地 macOS 构建时自动发现钥匙串签名导致的失败。积压已久，影响本地开发体验。
- **[长期未合并 PR] OpenViking 重载鉴权刷新**：[PR #21138](https://github.com/NousResearch/hermes-agent/pull/21138)（5月7日提交），修复环境变量重载后鉴权密钥不更新的问题。
- **[积压重要 Issue] Telegram HTTP 代理句柄泄漏**：[Issue #31599](https://github.com/NousResearch/hermes-agent/issues/31599)（5月24日提交），在 HTTP 代理下运行 2 天后会耗尽 macOS 文件描述符上限导致崩溃，对长期常驻服务影响极大。

---
*分析结论：Hermes Agent 目前正处于功能快速扩张与 Bug 阵痛期并存阶段。网关和多平台适配有条不紊地修复，但底层的并发状态管理（如凭证轮换竞态、会话隔离）亟需架构级的审视。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 (2026-06-24)**
> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 分析周期：过去 24 小时

### 1. 今日速览
PicoClaw 项目今日保持高度活跃的开发势头，虽然无新版本发布，但在代码质量与生态兼容性上取得了显著进展。过去 24 小时内共有 17 个 PR 更新（其中 6 个顺利合并/关闭，11 个处于待合并审查状态），核心维护者 `danmobot` 和 `Jh123x` 贡献了多项关键安全与稳定性修复。社区层面，报告了关于 AI 任务调度混乱的新 Bug，整体项目正处于功能快速迭代与系统深层次加固并重的健康阶段。

### 2. 版本发布
**本报告周期内无新版本发布。**

### 3. 项目进展
今日项目在多渠道稳定性、系统安全性以及大模型适配方面迈出了重要一步，共合并/关闭了以下关键 PR：
*   **WhatsApp 连接稳定性大修**：[PR #3162](https://github.com/sipeed/picoclaw/pull/3162) 已关闭/合并。引入了异步消息处理、心跳保活（Pong handler）以及指数退避自动重连机制，彻底修复了 WhatsApp 渠道 WebSocket 频繁断连的痛点。
*   **大模型工具调用兼容性修复**：[PR #3154](https://github.com/sipeed/picoclaw/pull/3154) 已关闭/合并。针对火山引擎豆包 Seed 模型将工具调用以原始 `<seed:tool_call>` XML 泄露在文本输出中的问题进行了拦截与格式恢复。
*   **安全审查与代码清理**：移除了长期停滞的陈旧代码，如 [PR #3059](https://github.com/sipeod/picoclaw/pull/3059)（优化资源关闭错误处理）和 [PR #3054](https://github.com/sipeed/picoclaw/pull/3054)（修复 LINE 渠道类型断言引发的 Panic）被关闭清理，代码健壮性进一步提升。

### 4. 社区热点
当前社区的关注点主要集中在跨渠道接入能力和底层执行工具的安全性上。
*   **期待完善的 Telegram 交互体验**：由社区开发者提交的 [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) 引发了较高关注，该 PR 意在使 Telegram 群聊中“回复机器人消息”等同于“@提及”。这反映出用户在群组场景中使用 PicoClaw 时，渴望更自然、符合直觉的交互方式。
*   **开发者对系统底座的贡献**：Docker 环境下 Pico WebSocket 远程模式的引入（[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)）和前端依赖库的常规升级（如 shadcn 升级 [PR #3104](https://github.com/sipeed/picoclaw/pull/3104)）表明，社区开发者正在积极将 PicoClaw 部署到更复杂的分布式或容器化环境中。

### 5. Bug 与稳定性
今日共记录 1 条新开高优先级 Bug，严重程度中等：
*   **[高/中] AI 上下文串台与重复执行任务** ([Issue #3159](https://github.com/sipeed/picoclaw/issues/3159))
    *   **表现**：在连续提问（如先问美国新闻，再问法国新闻）时，AI 会错误地在后续任务中重复执行前一个任务，导致响应效率低下和逻辑混乱。
    *   **环境**：Debian 13，模型为 deepseek-v4-flash-free。
    *   **状态**：*目前暂无对应的修复 PR*。这可能与模型的指令遵循能力较差有关，但也暴露了 PicoClaw 在清理历史上下文或工具调用结果时可能存在冗余。

### 6. 功能请求与路线图信号
从当前 Open 状态的 PR 中，可以清晰看出 PicoClaw 下一阶段的演进路线：
*   **进军移动端设备控制**：[PR #3157](https://github.com/sipeed/picoclaw/pull/3157) 引入了实验性的 Android ADB 远程操作工具，支持截屏、UI 树解析、点击、滑动等固定原语。这预示着 PicoClaw 正从纯软件环境的 AI 助手，向**控制物理/移动智能设备的 AI 智能体**拓展。
*   **企业级安全与沙箱加固**：维护者提交了多个硬核安全 PR，包括拦截跨站点启动密码设置请求（[PR #3160](https://github.com/sipeed/picoclaw/pull/3160)）、确保自定义允许规则下仍激活拒绝模式以防止环境变量泄露（[PR #3161](https://github.com/sipeed/picoclaw/pull/3161)），以及增强 Windows 路径处理的测试覆盖（[PR #3158](https://github.com/sipeod/picoclaw/pull/3158)）。
*   **大厂云服务深度集成**：[PR #3163](https://github.com/sipeed/picoclaw/pull/3163) 正在为 AWS Bedrock 接入 Prompt 缓存点支持，旨在大幅降低企业级调用成本。

### 7. 用户反馈摘要
*   **痛点：多渠道连接脆弱**：从早期被标记为 stale 的 QQ 渠道连接超时问题（[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)）到今日修复的 WhatsApp 断连问题，可以看出**长连接维持和重连机制**一直是用户实际部署中的核心痛点。用户期望 PicoClaw 能有像“保活/自动重连”这样的默认基建支持。
*   **痛点：弱模型兼容性**：用户使用免费的第三方/OpenCode 代理模型（如 Issue #3159 中的 deepseek-v4-flash-free）时，极易遇到模型不遵循标准工具调用 JSON 格式的问题（如 Issue #3153 中豆包模型的 XML 泄露）。用户期望 PicoClaw 能在引擎层面对这些“不守规矩”的开源/免费模型具备更高的容错兜底能力。

### 8. 待处理积压
*   **陈旧 Issues/PRs 清理**：今日有多个长期未活动（stale）的记录被系统自动关闭（如 [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) 和 [PR #2888](https://github.com/sipeed/picoclaw/pull/2888)），显示了项目维护者在积极管理看板。
*   **需关注的新 Bug**：[Issue #3159](https://github.com/sipeed/picoclaw/issues/3159) 报告的任务重复执行问题目前尚无任何人回应，建议维护团队尽快介入确认是 Core 逻辑的上下文注入问题，还是用户所使用免费模型的“幻觉/注意力涣散”导致，必要时在系统提示词层面增加防重复执行的约束。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 **NanoClaw** 开源项目 2026-06-24 动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-06-24)

### 1. 今日速览
过去 24 小时内，NanoClaw 项目展现了极高的研发活跃度与出色的迭代效率。团队今日**一口气合并/关闭了 8 个核心 PR**，主要聚焦于将底层 Chat SDK 全局平滑升级至 4.29.0，并顺带理顺了多分支的代码合并冲突。在功能层面，Slack Socket Mode 的引入大幅降低了本地开发与内网部署的门槛，同时对 Agent 审批机制和浏览器运行时的稳定性进行了关键加固。目前社区有 4 个功能增强型 PR 正在待合并状态，整体项目处于健康且快速演进的阶段。

### 2. 版本发布
*今日无新版本发布。* 但考虑到今日底层 SDK 的大规模升级与多项核心功能的落地，推测项目正在为下一个大版本或 Minor 版本进行代码储备。

### 3. 项目进展
今日团队高效合并了多项重要代码，推动项目显著向前迈进：
*   **底层依赖大版本升级**：核心库 `chat` 及相关渠道适配器全面锁定至 **4.29.0** ([PR #2834](https://github.com/nanocoai/nanoclaw/pull/2834), [PR #2835](https://github.com/nanocoai/nanoclaw/pull/2835), [PR #2836](https://github.com/nanocoai/nanoclaw/pull/2836))。由于适配器与桥接器存在强类型检查依赖，此次升级进行了精密的版本锁定，确保了底层通讯架构的稳定性。
*   **Slack 通讯基建优化**：通过 [PR #2837](https://github.com/nanocoai/nanoclaw/pull/2837) 引入了 Slack Socket Mode，Agent 现在可以通过出站 WebSocket 连接，无需暴露公网 HTTPS 端点即可运行。同时清理了分支合并遗留的冗余代码 ([PR #2839](https://github.com/nanocoai/nanoclaw/pull/2839))。
*   **更新流程修复**：[PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) 修复了主机更新时用户容易跳过技能更新的问题，强制在重新应用时重建容器，防止用户漏掉关键修复。
*   **安全扩展与防护**：合并了 Hook 接口的安全防护机制 ([PR #2833](https://github.com/nanocoai/nanoclaw/pull/2833))，并在底层清理了通用扩展点遗留 ([PR #2841](https://github.com/nanocoai/nanoclaw/pull/2841))。

### 4. 社区热点
今日社区焦点集中在**本地/内网部署体验**以及**扩展性架构**的讨论上：
*   **本地部署网络痛点**：[Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) 反映了在进行 Slack 集成时，外部主机 IP 的 3000 端口被默认占用，导致隧道方案失效。这反映出用户在复杂网络环境或内网环境下部署时，对端口接管机制的刚性需求。
*   **深度定制与 Fork 友好度**：[PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842) 提出了一套通用的“惰性扩展点”（inert extension-point seams）。这表明高级开发者和下游分支非常看重 NanoClaw 的可插拔能力，希望在不需要硬编码（fork）的情况下无缝注入自定义逻辑。

### 5. Bug 与稳定性
*   🔴 **高优先级：外部端口强占 Bug** ([Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840))
    *   **详情**：安装 Slack 时，端口 3000 被直接绑定在外部 IP 上，破坏了隧道转发的安全意义。
    *   **状态**：目前尚无对应的 Fix PR。（*注：今日合并的 [PR #2837](https://github.com/nanocoai/nanoclaw/pull/2837) Slack Socket Mode 支持 0 端点暴露，从侧面提供了一种绕过此 Bug 的解决方案*）。
*   🟠 **中优先级：Agent 容器共享内存不足导致崩溃风险** ([PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771))
    *   **详情**：由于 Docker 默认的 `/dev/shm` 只有 64MB，运行内置无头浏览器 的 Agent 极易崩溃。该 PR 建议加入 `--shm-size=1g` 和 `--init`。
    *   **状态**：Fix PR 已提交（待合并）。
*   🟡 **低优先级：Agent 交互断点**：过去审批被拒绝时，Agent 缺乏反馈。目前已通过待合并的 [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) 提出“附 reason 拒绝”方案进行修复。

### 6. 功能请求与路线图信号
结合今日的 Issue 与待合并 PR，可以洞察出项目接下来的演进方向：
*   **多模型路由支持**：[PR #2838](https://github.com/nanocoai/nanoclaw/pull/2838) 正在添加 Manifest 模型路由提供程序。这预示着 NanoClaw 将进一步解耦底层模型绑定，支持更灵活的多模型调度。
*   **Human-in-the-loop (HITL) 体验深化**：[PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) 让审批流变得更智能。Agent 在被拒绝后能获得具体原因，从而进行自我纠错和重试，这是走向成熟自主智能体的关键标志。
*   **企业级容器高可用**：[PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) 表明项目正在努力确保包含复杂浏览器渲染任务的 Agent 也能在容器中长期稳定运行。

### 7. 用户反馈摘要
*   **安全与网络配置诉求强烈**：用户 (@sirpy) 明确指出直接绑定外部 IP 违背了安全最佳实践，表明真实部署场景中，用户极其看重进程隔离和网络隧道的安全性。
*   **自动化更新体验存在盲区**：从 [PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) 的背景可知，用户在执行 `/update-nanoclaw` 时经常“无感漏更”相关渠道代码。用户期望框架的更新是**全链路、强一致**的，而不是依赖手动介入。

### 8. 待处理积压
*   ⏳ **[PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) 容器高可用改造**：由 @ankushchadha 在 6 月 15 日提交，至今日已搁置 9 天。考虑到其涉及所有 Agent 容器的启动参数（`--shm-size=1g` + `--init`），对防崩溃至关重要，建议维护者尽快 review 合并。
*   ⏳ **[Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) 端口占用问题**：今日新开 Issue，虽未长期积压，但由于其直接阻断了标准 Slack 集成流程，且目前无修复 PR，需提级处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是 **NullClaw** 项目 2026-06-24 的动态日报。作为专注于 AI 智能体与个人 AI 助理的开源项目，今日的整体数据呈现出“社区侧趋于平稳、底层核心功能持续推进”的态势。

---

### 1. 今日速览
在过去 24 小时内，NullClaw 项目的整体活跃度呈现“重底层推进、轻社区交互”的特征。项目今日无新版本发布，且无新增的 Issue 或 PR，但核心维护工作仍在稳步进行。社区侧成功关闭了 1 个影响较高比例用户的 API 响应解析 Bug，开发侧则维持着对重磅功能（Cron 定时任务子系统）的长线投入。目前仍有 1 个关键功能 PR 处于待合并状态，整体项目处于功能沉淀与架构加固阶段。

### 2. 版本发布
**无**。
项目当前最新发布版本仍停留在 `v2026.5.29`。今日未产生新的 Release，也没有破坏性变更或迁移指南需要关注。

### 3. 项目进展
今日项目无新合并的 PR，但取得了以下实质性进展：
*   **社区侧修复闭环**：成功关闭了 Issue #967，表明维护者针对部分模型（如 Agnes-2.0-Flash）在 Windows 环境下的 API 兼容性或响应解析问题进行了确认或修复。
*   **核心架构推进**：PR #783（Cron 定时子代理引擎）依然处于 OPEN 状态并在持续更新。该 PR 旨在引入数据库支持的调度器，若成功合并，将使 NullClaw 从“单次对话工具”向“具备定时自动执行能力的 AI 智能体平台”迈出极其重要的一步。

### 4. 社区热点
今日讨论热度最高的是 **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)**（2 次评论互动）。
*   **背后诉求**：用户在 Windows 11 环境下使用时，发现程序报 `NoResponseContent` 错误。这反映了用户对 **跨平台兼容性** 以及 **多模型 API 适配鲁棒性** 的强烈诉求。用户期望 NullClaw 能够像同类的成熟工具（如 picoclaude）一样，对不同大模型的底层响应格式有更宽容的解析和更稳定的输出。

### 5. Bug 与稳定性
*   **[严重] API 响应内容解析失败 (已关闭)**
    *   **问题**: **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)** `[bug] error: NoResponseContent`
    *   **详情**: 在 Win11 系统的 `v2026.5.29` 版本中，使用特定模型时发生高频崩溃/无响应，故障率超过 50%（21次对话出现12次）。
    *   **状态**: 该 Issue 今日已被关闭，推测问题已在底层修复或已在最新的主干代码中提供解决方案。目前暂无单独的 Hotfix PR 链接。

### 6. 功能请求与路线图信号
虽然今日无新增功能请求，但通过现有活跃 PR，我们可以清晰捕捉到项目的 **路线图信号**：
*   **信号一：AI 智能体自动化运行**
    正在进行的 **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** 引入了 Cron（定时任务）子代理。这意味着未来的版本中，NullClaw 将支持定时触发 Skill（技能）、Agent（代理）或 Shell 脚本，并具备时区偏移设置和历史记录追踪功能。
*   **信号二：面向程序员的系统化集成**
    该 PR 还增加了 `cron list --json` 等 JSON 格式的 CLI 输出，释放出 NullClaw 将增强与外部系统（如监控系统、自动化脚本）集成的强烈信号。这部分功能极有可能会在下一个主要版本中发布。

### 7. 用户反馈摘要
通过 **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)** 的反馈，提炼出当前真实用户的核心痛点：
*   **痛点**：在 Windows 环境下程序的稳定性未达预期，特别是在处理高频或特定模型的 API 返回时，容易出现流中断或内容解析为空的问题。
*   **使用场景**：用户主要在 Windows 本地环境通过命令行直接调用大模型 API 进行日常 AI 助理交互。
*   **满意度**：受影响的用户倾向于寻找替代方案，说明在核心功能（如对话连续性、API 适配）上，项目的稳定性和容错机制仍需持续优化。

### 8. 待处理积压
*   **重量级功能 PR 迟迟未合并**：**[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**（Cron 子代理及安全加固）自 2026-04-07 创建至今已逾两个月，期间持续更新，但点赞数为 0 且尚未合并。
    *   *维护者提醒*：该 PR 涉及引入数据库表、调度器、CLI 输出规范及安全加固，是一个 Large PR。建议项目维护者尽快安排核心贡献者进行 Code Review，或考虑拆分为多个小 PR（如分为数据库引擎、CLI解析、安全模块）以降低合并风险，避免该核心功能长期积压导致社区贡献者流失。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-06-24)**

作为 AI 智能体与个人 AI 助手领域的重点开源项目，IronClaw 今日展现出极高的研发活跃度。以下是基于过去 24 小时（2026-06-23）GitHub 数据的项目动态分析：

### 1. 今日速览
过去 24 小时内，IronClaw 项目保持了高度活跃的研发节奏，共产生 **22 条 Issue 更新**（15 个活跃/新开，7 个关闭）以及高达 **41 条 PR 更新**（21 个待合并，20 个已合并/关闭）。今日项目没有发布新的正式版本，但主线开发重点围绕 **"Reborn" 架构（新一代 WebUI 与底层重构）** 展开，核心开发团队（如 serrrfirat, BenKurrek, think-in-universe）在内存管理、Slack 集成、上下文 Token 优化以及 Google 插件鉴权方面进行了大量修复与重构。CI 流水线及端到端（E2E）测试的稳定性是目前维护者关注的侧重点。

### 2. 版本发布
**本日无新版本发布。** (0 个 Release)

### 3. 项目进展
今日共有 20 个 PR 被合并或关闭，项目在底层架构和功能集成上迈出了坚实的一步：
*   **Google 插件鉴权修复：** [PR #4969](https://github.com/nearai/ironclaw/pull/4969) 修复了 Google WASM 工具（Drive, Docs, Sheets, Slides）在遇到 401 错误时未返回 `auth_required` 结构化错误的问题。
*   **Slack 集成大重构：** 合并了多个 Slack 相关 PR，包括将 Slack 配置与设置转移至 WebUI 管理（[PR #5152](https://github.com/nearai/ironclaw/pull/5152)），恢复了 Slack 常规出站目标（[PR #5164](https://github.com/nearai/ironclaw/pull/5164)），以及接通动态 Slack 消息分发（[PR #5166](https://github.com/nearai/ironclaw/pull/5166)）。
*   **自动化管理：** [PR #5133](https://github.com/nearai/ironclaw/pull/5133) 增加了对 Reborn 自动化的删除支持，完善了 WebUI v2 的界面控制。
*   **Reborn 设置向导：** [PR #4859](https://github.com/nearai/ironclaw/pull/4859) 完成了首次部署时的操作员设置状态校验。

### 4. 社区热点
今日讨论与关注最多的焦点主要集中在 **Reborn 工作流稳定性** 与 **Google 授权机制**：
*   **[Issue #5169](https://github.com/nearai/ironclaw/issues/5169)**：内置技能的提示词中包含常规 API 词汇（如 "Authorization", "Bearer"），意外触发了模型安全词汇黑名单，导致正常的用户请求被强行终止。这暴露了安全过滤机制与内置工具间的冲突。
*   **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)**：报告了 `main` 分支上的一个严重回归问题，导致 web/research 任务在初始化时挂起（0 次 LLM 调用），直接导致今日 PinchBench 基准测试中 21/147 的任务归零。
*   **[Issue #4991](https://github.com/nearai/ironclaw/issues/4991)（已关闭）**：WASM `google-drive` 插件在 Token 过期时直接抛出通用的 `operation_failed`，没有提供刷新重试机制，引发社区对糟糕的错误提示的吐槽。

### 5. Bug 与稳定性
按严重程度排列，今日报告的关键 Bug 及阻塞问题如下：
*   **🔴 严重 / 任务死锁：** [Issue #5148](https://github.com/nearai/ironclaw/issues/5148) - 调度器心跳在运行任务转换状态时获取了同一异步存储锁，导致 Turn 调度器自死锁，任务永久卡死。
*   **🔴 严重 / 功能回归：** [Issue #5139](https://github.com/nearai/ironclaw/issues/5139) - Research 任务在初始化阶段挂起导致超时（目前无关联修复 PR）。
*   **🟡 中等 / 插件错误阻断：** [Issue #5169](https://github.com/nearai/ironclaw/issues/5169) - 安全黑名单误杀导致对话流中断（目前无关联修复 PR）。
*   **🟡 中等 / UI 幻觉：** [Issue #3733](https://github.com/nearai/ironclaw/issues/3733) - 输入无效的 Gmail Token 时，系统弹出“激活成功”的 Toast 提示，但随后又要求重新授权。
*   **🟠 CI 阻塞：** [Issue #5147](https://github.com/nearai/ironclaw/issues/5147) - 测试用例 `trigger_poller_does_not_submit_turn_for_unpaired_actor` 存在约 33% 的随机失败率，直接阻塞了合并队列（如踢出了 #5061）。

### 6. 功能请求与路线图信号
从近期的 Issue 和活跃的 PR 中，可以清晰看出 IronClaw “Reborn”（重生）路线图的核心方向：
*   **上下文成本与延迟优化：** [PR #5149](https://github.com/nearai/ironclaw/pull/5149) 引入了“渐进式工具展示”。当前每次模型调用都会发送全量 91 个工具的 Schema（约 25.8k Tokens，每轮重发 4 次），导致 NEAR AI 频繁触发 120 秒超时。该 PR 尝试进行上下文裁剪，这是走向生产级别的关键一步。
*   **安全的工作流自动化：** [Issue #5151](https://github.com/nearai/ironclaw/issues/5151) 揭示了 Claude 在处理自动化任务时的不确定性；而 [PR #5156](https://github.com/nearai/ironclaw/pull/5156) 紧接着引入了“技能学习”的审批门控，新学习的技能必须经过人工审核才能被激活，提升了系统的护栏能力。
*   **工程化清理：** 社区贡献者提出 [Issue #5167](https://github.com/nearai/ironclaw/issues/5167)，要求停止在 Git 中追踪 `dist` 目录，改由发布流水线打包，以减少每次 PR 带来的无意义代码冲突。

### 7. 用户反馈摘要
通过提炼 Issue 详情，真实用户痛点主要集中在以下三个方面：
1.  **错误提示反直觉：** 面对鉴权失败，系统经常给出 "temporary system issue"（临时系统错误）的误导性提示（如 [Issue #5169](https://github.com/nearai/ironclaw/issues/5169)），用户无法分辨是自己的配置错误还是系统宕机。
2.  **UI 状态不一致：** 如 [Issue #3732](https://github.com/nearai/ironclaw/issues/3732) 反映，在不同的会话中，Gmail 授权界面时而显示 OAuth 链接，时而变成手动输入 Token 框，体验割裂。
3.  **日历查询不符合预期：** [Issue #4640](https://github.com/nearai/ironclaw/issues/4640) 指出，询问“接下来的会议”时，Google Calendar API 返回的竟然是最古老的历史事件，由于底层缺少 `timeMin` 和 `orderBy` 参数，导致助手给出的答案完全不可用。

### 8. 待处理积压
以下重要但可能被暂时搁置的 Issue 需要维护者关注：
*   **长期遗留 Bug：** [Issue #4640](https://github.com/nearai/ironclaw/issues/4640) - Reborn gsuite 日历查询排序问题（创建于 2026-06-09，至今未修复，严重影响日程助理的基础体验）。
*   **CI 健康度：** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E 定时测试持续失败，可能暗示底层的集成测试环境或深层逻辑存在未解决的债务。
*   **WebUI 可用性：** [Issue #5146](https://github.com/nearai/ironclaw/issues/5146) - 扩展管理页面缺少“停用”按钮，用户无法从前端直接禁用已安装的扩展。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目动态日报（2026-06-24）：

### 📈 LobsterAI 项目动态日报（2026-06-24）

#### 1. 今日速览
在过去 24 小时内，LobsterAI 项目的核心开发活动迎来了一次爆发，共有 11 个 PR 产生更新，其中 5 个重要的基础架构与功能优化 PR 已被合并或关闭。开发团队在 **OpenClaw 网关集成、定时任务状态管理及 Plan Mode 协同**方面取得了实质性进展。然而，社区侧的 Issue 处理稍显滞后，特别是针对 v4.1 版本升级导致的严重阻塞性问题，目前仍处于 `[stale]` 状态，亟需官方介入排查。整体来看，项目处于“研发推进迅速，但社区高危反馈响应迟缓”的状态。

#### 2. 版本发布
* **无新版本发布**。

#### 3. 项目进展
今日开发团队合并/关闭了 5 个关键 PR，极大地推进了应用的核心体验和底座稳定性：
* **定时任务与 OpenClaw 网关深度优化**：合并了 [PR #2191](https://github.com/netease-youdao/LobsterAI/pull/2191)（细化了定时任务的启动、加载、就绪和错误状态），以及 [PR #2190](https://github.com/netease-youdao/LobsterAI/pull/2190)（规范化 OpenClaw 运行域的 cron 会话缓存键），解决了多次任务运行导致本地会话重复生成的问题。
* **兼容性与历史数据迁移**：合并了 [PR #2189](https://github.com/netease-youdao/LobsterAI/pull/2189)，项目现已在网关启动前自动检测并迁移旧版的 OpenClaw cron JSON/run-log 存储，大幅降低了老用户升级的成本。
* **协同交互增强**：[PR #2192](https://github.com/netease-youdao/LobsterAI/pull/2192) 引入了持久化的计划确认流程（Plan Mode），使得 Agent 计划在草稿或会话期间保持活跃，直到用户确认执行或调整，大幅增强了多轮对话的连贯性。

#### 4. 社区热点
今日活跃度最高、反馈最强烈的是关于版本升级的阻塞性问题：
* **[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400) [stale] 4.1版本严重bug，网关反复启动失败，无限循环！**
  * **数据表现**：更新于昨日，共 6 条评论。
  * **背后诉求**：用户从 v3.30 升级至 v4.1 后系统彻底瘫痪（无限重启）。同时反馈了自定义大模型（qwen3.5-plus）在未启用 web-search 时强制调用 web-extractor 导致的报错。这反映出两点诉求：一是 v4.1 的升级迁移机制可能存在严重缺陷或环境兼容性 Bug；二是 LLM 调用链路中“工具依赖关系”的校验逻辑过于生硬，缺乏优雅降级机制。

#### 5. Bug 与稳定性
根据今日更新数据，主要 Bug 及稳定性隐患如下（按严重程度排列）：
1. **🔴 [严重/P0] v4.1 网关无限重启**：详见 [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)，导致用户系统无法启动，目前已有 6 次互动但官方尚未在 Issue 中给出明确解法。
2. **🟠 [高危] SSE 流式请求安全性漏洞**：详见 [PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401)。社区指出当前请求 ID 使用伪随机数 `Math.random()`，极易被预测，导致跨用户的数据流窃听。该 PR 已提供基于 `crypto.randomUUID()` 的修复方案，但目前处于 `[stale]` 未合并状态。

#### 6. 功能请求与路线图信号
从当前的 PR 列表中，可以明确捕捉到项目近期的演进方向：
* **多模型路由支持（强信号）**：今日新开的 [PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193) 提出将 [LiteLLM](https://litellm.ai) 作为 AI 网关提供商，复用现有的 OpenAI 兼容接口。一旦合并，LobsterAI 将能无缝对接 100+ 种大模型，极大增强扩展性。
* **UI/UX 定制化（中信号）**：[PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404) 请求重构定时任务界面中原生的 `<input type="time">` 和 `<select>` 控件，以解决 Electron 环境下交互生硬、无法贴合应用主题（圆角、暗黑模式）的问题。

#### 7. 用户反馈摘要
从近期 Issues 和 PRs 的沉淀中，提炼真实用户痛点如下：
* **升级体验割裂**：用户非常渴望平滑的版本过渡，但 v4.1 的底层变动过大，自动配置与用户自定义配置（如默认大模型的接管）发生冲突，引发恐慌。
* **细节本地化不到位**：如 [PR #1403](https://github.com/netease-youdao/LobsterAI/pull/1403) 指出，中文 UI 下竟然出现了未被翻译的英文 `delete` 字样；以及 [PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402) 指出的多选附件仅能保留最后一个文件的闭包逻辑 Bug，均说明应用在边界场景的测试覆盖仍有欠缺。

#### 8. 待处理积压
当前有一批高价值的社区贡献和反馈因标记为 `[stale]` 而积压，强烈建议维护团队及时清理跟进：
* **安全修复积压**：[PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401)（SSE 请求 ID 伪随机性问题），涉及底层安全，建议尽快审计合并。
* **高危 Bug 积压**：[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)（v4.1 无限重启），需尽快提供排查指南或回滚建议。
* **体验优化积压**：包括 [PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402)（多选附件丢失）、[PR #1406](https://github.com/netease-youdao/LobsterAI/pull/1406)（IM 筛选为空时通知渠道消失）及 [PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404)（UI 控件优化）。这些低成本高收益的 PR 积压长达数月，容易挫伤社区贡献者的积极性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📊 Moltis 项目动态日报
**日期**: 2026-06-24 | **追踪仓库**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. 📈 今日速览
过去 24 小时内，Moltis 仓库整体活跃度呈现“低交互、稳推进”的状态。今日项目没有新的缺陷报告（Issues 0 条）或新版本发布，但维护者对积压的代码进行了集中清理。最显著的变动是关闭了一项停滞达 4 个月之久的图像发送功能 PR。整体来看，项目当前处于功能整合与代码维护期，核心流水线运行稳定，未见引发社区波动的异常事件。

### 2. 🚀 版本发布
**无新版本发布。** (当前代码库可能处于两次版本迭代之间的静默期或功能开发期)

### 3. 🛠️ 项目进展
今日项目主要推进了历史积压代码的处理，对多渠道消息触达能力进行了技术路线确认：
*   **关闭/废弃 PR #215**: [`[CLOSED] feat(tools): add send_image tool for channel image delivery`](https://github.com/moltis-org/moltis/pull/215)
    *   **进展解析**: 该 PR 旨在为 AI 技能提供一个 `send_image` 工具，使其能够将本地图片（PNG, JPEG 等）发送至 Telegram 等外部渠道。其技术实现复用了现有的截图流水线（通过 `data:` URI 格式传递）。
    *   **项目迈进**: 该 PR 于今日被正式关闭。这表明维护团队可能对该功能的底层实现架构（是否直接复用 `screenshot` 键值）有了新的考量，或者已将其合并到其他重构分支中。这为后续多模态（图像）消息在个人助手与终端用户之间的顺畅流转扫清了早期的技术验证障碍。

### 4. 🔥 社区热点
**过去 24 小时内社区无高热度讨论。**
*   Issues 与 PR 均无新增点赞（👍 为 0）或评论互动。这反映出在缺乏重大版本发布或新功能预览时，社区处于静默观望状态。当前历史 PR 的关闭属于核心维护团队的单方面代码库治理行为。

### 5. 🐛 Bug 与稳定性
**今日无新增 Bug 报告。**
*   过去 24 小时内未收到任何关于系统崩溃、性能回退或逻辑缺陷的 Issue。在 AI 助手类项目中，连续数日零 Bug 报告通常意味着当前主干分支在既定核心功能（如对话编排、基础工具调用）上保持了良好的鲁棒性。

### 6. 🗺️ 功能请求与路线图信号
虽然今日无新开 Issue，但从 [PR #215](https://github.com/moltis-org/moltis/pull/215) 的生命周期中可以捕捉到明确的产品路线图信号：
*   **多模态/富媒体交互需求**: AI 助手正在跨越纯文本边界。团队正在探索（或已通过其他方式实现）让 Agent 的 Skills 主动向 Telegram 等即时通讯平台推送图像、GIF 等内容。
*   **底层架构的复用**: 曾经的设想是“图像发送”与“屏幕截图”共用一套 Runner 管道。这种架构设计有助于减小系统的冗余代码，暗示未来版本的 Moltis 将拥有高度统一的媒体数据处理中枢。

### 7. 💬 用户反馈摘要
由于近期 Issues 动态清零，无法从最新评论中提取实时用户痛点。
*   **隐性痛点推测**: 结合 [PR #215](https://github.com/moltis-org/moltis/pull/215) 的摘要，真实用户在深度使用 Moltis 时，对“将 Agent 生成的图表/本地分析图片同步发送至手机端（Telegram）”存在刚性需求。富媒体输出能力是评估个人 AI 助手体验完整度的重要指标之一。

### 8. ⏳ 待处理积压
*   ⚠️ **代码库积压清理**: 今日关闭的 [PR #215](https://github.com/moltis-org/moltis/pull/215) 创建于 2026 年 2 月 23 日，直至 6 月 23 日才被关闭，生命周期长达 4 个月。
    *   **维护者提醒**: 建议项目组审视当前的 PR 审查与跟进机制。长时间挂起的 Feature PR 极易与最新的主干代码产生冲突。建议在未来的开发流程中，对停滞超过 30 天的 PR 打上 `stale` 标签，并定期与贡献者（如 @maximilize）同步进度，以保持开源社区的健康协作体验。

---
*数据声明：本报告基于 GitHub 过去 24 小时静态抓取数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这是一份基于 2026-06-24 GitHub 数据生成的 CoPaw (QwenPaw) 项目动态日报。

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-06-24)

## 1. 今日速览
今日 CoPaw 项目保持着极高的社区热度与工程迭代速度，过去 24 小时内共处理了 **38 条 Issue 更新**（新开/活跃 28，关闭 10）以及 **50 条 PR 更新**（待合并 29，已合并/关闭 21）。
从提交记录来看，项目目前正处于**移动端响应式布局全面适配**和 **AgentScope 2.0 架构迁移后的深度清理（Ponytail cleanup）**阶段。虽然核心功能在不断完善，但用户对于内存占用、定时任务稳定性以及版本升级带来的配置重置问题表达了较高关注。

---

## 2. 版本发布
- **v1.1.12.post2** [🔗Release](https://github.com/agentscope-ai/QwenPaw)
  - **更新内容**：主要为控制台与聊天体验的细节修复。包括修复删除当前会话后无法正确导航到新聊天的问题（PR #5376），以及增强了文件预览功能以支持相对路径（PR #5377）。
  - **注意事项**：这是一个平滑的补丁版本，无破坏性变更，建议已升级至 v1.1.12 的用户直接更新。

---

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，项目大步迈向更完善的 UI/UX 与系统稳定性：
- **移动端体验大升级**：社区贡献者（如 @lecheng2018, @yaozy2020）集中提交并推进了多个页面的移动端响应式适配，包括 [Agent 配置页 (PR #5366)](https://github.com/agentscope-ai/QwenPaw/pull/5366)、[设置-模型页 (PR #5397)](https://github.com/agentscope-ai/QwenPaw/pull/5397)、[聊天头部组件 (PR #5350)](https://github.com/agentscope-ai/QwenPaw/pull/5350) 等。
- **AgentScope 2.0 迁移后遗症修复**：[PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) 是一个极其精简的清理 PR（+4 行，-1493 行），修复了 2.0 迁移后遗留的冗余代码和异常捕获逻辑。
- **测试覆盖率提升**：合并了前端控制台的多个单元测试模块（如 [Issue #5433](https://github.com/agentscope-ai/QwenPaw/issues/5433) 提到的 M1/M3 阶段测试），为前端稳定性打下基础。

---

## 4. 社区热点
今日讨论度最高的问题集中在**系统资源消耗**和**工作流卡死**：
1. **[Bug]: 刚启动内存占用已达 1.4G** ([Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) / [Issue #5439](https://github.com/agentscope-ai/QwenPaw/issues/5439))：评论数居多，用户反馈在未执行任何任务的情况下，启动即吃掉 1.4GB 内存，引发对轻量化部署的担忧。
2. **[Bug]: DeepSeek 模型思考过程中频繁卡死** ([Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328))：用户反馈在多端（Web/Console/Tauri）使用 DeepSeek 时，Agent 经常在 thinking 阶段无限循环，必须手动干预。
3. **[Bug]: 升级后被禁用的内置技能重新启用 2.0** ([Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))：这是一个 regress（回归）问题，用户强烈诉求版本升级能保留对内置工具（如 docx, xlsx）的禁用状态，以免误消耗 Token。

---

## 5. Bug 与稳定性
按严重程度排列今日暴露的核心 Bug：
- 🔴 **严重：定时调度任务全面失效**
  - [Issue #5398](https://github.com/agentscope-ai/QwenPaw/issues/5398)：进程存活且任务启用状态下，Cron 任务停止分发。
  - [Issue #5402](https://github.com/agentscope-ai/QwenPaw/issues/5402)："Dream Task"（梦境任务/夜间总结任务）执行报错。
  - *状态：已关闭/排查中，可能与底层调度器被阻塞有关。*
- 🟠 **较高：前端崩溃与上下文截断**
  - [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)：包含大量工具调用历史的会话导致 Console 前端白屏崩溃（数据块解析类型不匹配）。
  - [Issue #5416](https://github.com/agentscope-ai/QwenPaw/issues/5416)：部分模型将回复放入 `thinking` 且 `content` 为空，导致上下文截断，用户完全看不到回复。
- 🟡 **中等：Shell 执行器解析缺陷**
  - [Issue #5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)：Agent 的 Shell 工具无法正确解析管道符(`|`)、重定向(`>`)等标准语法。

---

## 6. 功能请求与路线图信号
从 Open Issues 和活跃 PR 中，可以捕捉到下一阶段的演进方向：
- **记忆管理架构重塑**：[PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 提出了 **scroll 上下文管理策略**，将完整对话持久化到 SQLite 并按需召回，这可能是对 [Issue #3995](https://github.com/agentscope-ai/QwenPaw/issues/3995)（增强记忆管理与召回机制）的重磅响应。
- **浏览器实例多路复用**：[PR #5413](https://github.com/agentscope-ai/QwenPaw/pull/5413) 引入了浏览器实例共享与页面隔离机制，这将大幅降低多 Agent 并发浏览网页时的内存开销。
- **桌面端公式渲染**：[Issue #5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) 呼吁增加 KaTeX/LaTeX 支持，这是科研/学术用户的强需求。

---

## 7. 用户反馈摘要
提炼今日 Issues 中的真实用户声音：
- **痛点 1：Python 环境割裂**。Tauri 桌面端用户找不到内置的 Conda 环境（[Issue #5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)）；Python 3.13 用户因缺失 `imghdr` 模块无法安装 TeamChat 插件（[Issue #5166](https://github.com/agentscope-ai/QwenPaw/issues/5166)）。**诉求：希望内置环境能更健壮，或对高版本 Python 有更好的兼容。**
- **痛点 2：外部渠道交互断层**。子 Agent 的审批请求（如删除文件）无法推送到 QQ 等外部聊天渠道（[Issue #5295](https://github.com/agentscope-ai/QwenPaw/issues/5295)），破坏了移动端使用的连贯性。
- **满意点**：用户对 QwenPaw 支持 OMLX 等本地自定义 OpenAI 兼容提供商表现出浓厚兴趣（[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)），虽然目前不支持 Function Calling，但证实了社区对隐私和本地化部署的高度重视。

---

## 8. 待处理积压
以下重要 Issue 目前仍处于 Open 状态，需维护者重点关注：
- **[Issue #5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) (思考输出/截断问题)**：影响主流推理模型的正常输出，阻塞性较强，需尽快在下个版本修复前端/解析逻辑。
- **[Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) (1.4G 内存占用)**：违背了个人 AI 助手轻量化的初衷，急需进行内存泄漏排查或资源懒加载优化。
- **[Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) (升级导致禁用技能复活)**：这是第二次被提出（2.0版本），说明此前的修复未生效，严重影响用户升级体验。

---
*分析师观点：CoPaw (QwenPaw) 目前处于功能丰富度与稳定性/资源消耗的博弈期。AgentScope 2.0 的底层重构带来了短期 Bug，但社区贡献者极快地跟进了修复。建议维护团队在近期优先冻结新特性开发，集中精力解决内存开销、上下文截断以及历史配置保留等核心体验问题。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-06-24 | **追踪仓库**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
ZeroClaw 项目在过去 24 小时内保持了**极高的活跃度**，共处理了 29 条 Issue 更新（16 条活跃，13 条关闭）和 50 条 PR 更新（32 条待合并，18 条已合并/关闭）。虽然没有发布新的正式版本，但通过 [PR #8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234) 可以明确看出项目正处于 **v0.8.2 版本的发布前夕**。当前开发重心主要集中在**多渠道（IM 平台）支持、Agent 运行时的工具调用与上下文控制，以及 WASM 插件系统的底层安全加固（防 SSRF/环境变量隔离）**。

### 2. 版本发布
**今日无新版本发布。**
*注：主仓库版本已于今日通过 [PR #8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234) 提交版本号提升至 `v0.8.2`，预计近期将正式打包发布。*

### 3. 项目进展
今日项目整体向前推进了坚实的一步，重点修复了影响工作流的核心 Bug，并进一步完善了多 Agent 与成本追踪能力：
*   **运行时与上下文控制优化**：合并了 [PR #8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048)，修复了 Agent 强制裁剪历史记录时硬编码覆盖配置的问题，现在能正确遵循 `history_pruning` 配置。
*   **核心组件修复**：通过添加内置回退机制（当系统无 `rg` 或 `grep` 时），大幅提升了文件搜索工具的跨平台稳定性 ([PR #8060](https://github.com/zeroclaw-labs/zeroclaw/pull/8060)，已关闭/合并)。
*   **MCP 工具可见性修复**：关闭了 [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)，修复了 Zerocode TUI 会话中无法获取 MCP 工具的 S1 级严重阻断性 Bug。
*   **渠道稳定性**：修复了 Telegram 轮询错误导致 Bot API Token 在日志中泄露的安全漏洞 ([Issue #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091))。
*   **定时任务健壮性**：修复了耗时较长的 Cron 任务会被调度器重复触发（爆发式启动20次）的严重 Bug ([Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037))。

### 4. 社区热点
今日讨论度最高、影响最深远的话题集中在**插件安全边界**与**跨提供商兼容性**上：
*   🔥 **[Issue #5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) (评论: 6)**: WASM 插件 `zc_env_read` 权限过大问题。社区/开发者提出需要使用白名单机制，限制插件只能读取特定的环境变量（如自己的 API Key），防止越权读取系统敏感密钥。
*   🔥 **[Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (评论: 4)**: TUI 端 MCP 工具丢失问题。多位用户反馈在网关能看到工具，但 TUI 无法加载，引发了关于架构一致性的讨论。
*   🔥 **[Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) (评论: 3)**: 深入探讨了插件系统底层架构，提议放弃 Extism，直接转向 `wasmtime` 组件模型（`wasm-wasip2` 标靶），表明项目正在酝酿一次重大的底层重构。

### 5. Bug 与稳定性
今日报告了多个高危/阻断性 Bug，部分已提交修复 PR：
*   **[S1 - 阻断] Matrix 渠道多模态丢失** ([Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)): 延迟处理的图片附件在缓存历史中丢失引用，导致 Agent 之后拒绝承认看到过该图片。
*   **[S1 - 阻断] 技能包加载遗漏** ([Issue #8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202)): 新建会话时刷新系统提示词，导致无法加载全局打包的 Skills。
*   **[S2 - 严重] Groq 模型多轮工具调用失败** ([Issue #8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)): `gpt-oss-120b` 在第二轮工具循环中，由于 `reasoning_content` 被拒导致报错 400。**已提交修复 [PR #8232](https://github.com/zeroclaw-labs/zeroclaw/pull/8232)**。
*   **[S2 - 严重] 编译构建阻断** ([Issue #8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236)): `voice_wake.rs` 结构体缺少 `subject` 字段，导致开启 `--all-features` 构建时失败。

### 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以清晰地看出 v0.8.2 及后续版本的演进路线：
*   **多渠道流式输出**：用户迫切要求支持钉钉 ([Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228))、QQ/企微/飞书 ([Issue #7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531)) 的流式卡片消息，以减少长任务时的用户焦虑。
*   **精细化成本控制**：[PR #8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) 提出了从网关实时拉取价格，填补未定价模型的使用成本，说明企业级 Token 预算追踪正在完善。
*   **多 Agent 架构演进**：[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) 和 [Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) 分别请求了「每个 Agent 独立的环境变量配置」和「专家 Agent 独立委派模式」，基于这些需求，[PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) 已经开始实现了 Agent 级别的配置重写功能。
*   **跨渠道 HITL (人机协同)**：[PR #8231](https://github.com/zeroclaw-labs/zeroclaw/pull/8231) 增加了将工具审批请求路由到其他特定渠道的功能，增强了生产环境下的审批安全性。

### 7. 用户反馈摘要
*   **痛点：权限与风险配置迷惑性强**：多位用户在快速入门时，被严格的限制性配置挡住。开发者提议在 quickstart 中直接默认 `yolo`（放权）风险预设，以提供丝滑的初次体验 ([Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125))。
*   **痛点：Web 端管理割裂**：用户反馈目前检查更新或应用配置变更，必须在终端和 Web 端来回切换，期望能在 Web 仪表盘中直接进行原地升级和受控重启 ([Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170))。
*   **满意度与认可**：用户对 ZeroClaw 在多模型兼容（如支持 NVIDIA NIM 视觉模型 [PR #8100](https://github.com/zeroclaw-labs/zeroclaw/pull/8100)）和多 IM 渠道集成方面的努力表示认可，社区积极提交代码恢复丢失的功能（如 [PR #8011](https://github.com/zeroclaw-labs/zeroclaw/pull/8011) 恢复 `/thinking` 命令）。

### 8. 待处理积压
*   ⚠️ **历史遗留回滚事故追踪**：[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 仍在追踪此前因单次大批量回滚（`c3ff635`）丢失的 153 个提交的恢复工作，此项进度较慢，需要持续投入精力审计。
*   ⚠️ **系统提示词不一致残留**：[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) 反映了深层架构问题（工具可用性提示在不同入口不匹配），目前状态为 `blocked`，等待跨模块重构。
*   ⚠️ **安全模块急需 Review**：[Issue #5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) 暴露了 WASM 插件 `zc_http_request` 存在严重的 SSRF 漏洞（可访问内网 RFC-1918 地址），当前标记为高风险且 `accepted`，急需维护者合并对应的防护 PR。

</details>