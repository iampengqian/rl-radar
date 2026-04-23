# OpenClaw 生态日报 2026-04-21

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-20 22:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# 📊 OpenClaw 项目动态日报 (2026-04-21)

> 数据统计周期：过去 24 小时 | 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目继续保持**高度活跃**的状态。社区共产生了 **500 条 Issue 更新**（新开/活跃 301 条，关闭 199 条）和 **500 条 PR 更新**（待合并 332 条，合并/关闭 168 条），吞吐量表现出色。项目今日无新版本发布，但核心维护者 `steipete` 提交了针对 Telegram 通道稳定性的重大修复 PR，多位活跃贡献者（如 `Jerry-Xin`）集中优化了网关的多媒体处理与模型回退逻辑。整体来看，项目正处于**高强度修 Bug 与通道稳定性攻坚阶段**。

---

## 2. 版本发布

*今日无新版本发布。*

---

## 3. 项目进展

今日共处理 168 个 PR（合并/关闭），以下是推进项目向前迈进的核心 PR：

### 🛠️ 核心框架与网关优化
- **[PR #69476](https://github.com/openclaw/openclaw/pull/69476) [CLOSED]** - **Telegram 长轮询生命周期硬ening**：由核心维护者 `steipete` 亲自提交，整合了此前多个 PR（#68128, #69243, #64333, #51931），彻底修复了 Telegram 连接泄漏、HTTP/2 导致的轮询挂起以及错误触发重启的问题。这是今日**最重要的稳定性修复**。
- **[PR #47994](https://github.com/openclaw/openclaw/pull/479994) [OPEN]** - **修复 Fallback 模型永久覆盖配置**：添加 `modelIsFromFallback` 标志，防止回退模型在会话中永久覆盖用户设定的主模型。
- **[PR #67146](https://github.com/openclaw/openclaw/pull/67146) [CLOSED]** - 修复了扩展重载后 Pi Compaction 设置丢失的问题。

### 📡 通道修复
- **[PR #69474](https://github.com/openclaw/openclaw/pull/69474) [OPEN]** - 恢复了 Webchat 纯图片消息的正常处理逻辑，修复了发送无标题图片导致崩溃的问题。
- **[PR #69194](https://github.com/openclaw/openclaw/pull/69194) [CLOSED]** & **[PR #69022](https://github.com/openclaw/openclaw/pull/69022) [OPEN]** - 均致力于修复 Telegram 通道忽略 `humanDelay`（拟人延迟）配置的问题。
- **[PR #67634](https://github.com/openclaw/openclaw/pull/67634) [OPEN]** - 当主模型为纯文本模型时，支持自动降级使用 `imageModel` 解析图片，避免会话崩溃。

### 🤖 多模态与模型支持扩展
- **[PR #69477](https://github.com/openclaw/openclaw/pull/69477) [OPEN]** - 将 Moonshot 提供商的默认模型升级至最新的 `Kimi 2.6`。
- **[PR #69321](https://github.com/openclaw/openclaw/pull/69321) [OPEN]** - 为 Gemini TTS 添加了 `audioProfile` 支持，增强语音合成个性化。
- **[PR #68694](https://github.com/openclaw/openclaw/pull/68694) [OPEN]** - 为 xAI (Grok) 扩展增加了 TTS 和图像生成支持。

---

## 4. 社区热点

今日讨论最热烈的需求与问题集中在**跨平台客户端、令牌认证以及稳定性**上：

1. **🔥 最热需求：Linux/Windows 客户端 ([Issue #75](https://github.com/openclaw/openclaw/issues/75))**
   - **数据**：87 条评论，71 👍
   - **分析**：作为目前点赞数最高、讨论最激烈的 Issue，社区对 OpenClaw 脱离浏览器、推出原生的 Linux 和 Windows 桌面客户端（Clawdbot Apps）的呼声极高。目前项目仅有 macOS 和移动端 App，桌面端的缺失是阻碍企业级用户全面部署的一大痛点。
2. **⚠️ 令牌与鉴权痛点：OAuth 刷新竞态条件 ([Issue #26322](https://github.com/openclaw/openclaw/issues/26322))**
   - **数据**：21 条评论，15 👍
   - **分析**：多 Agent 共享同一 OAuth 时并发刷新导致 `refresh_token_reused` 错误。这反映了 OpenClaw 在多并发 Agent 架构下的底层鉴权机制仍存在健壮性缺陷。
3. **💬 会话上下文损坏 ([Issue #37834](https://github.com/openclaw/openclaw/issues/37834))**
   - **数据**：10 条评论
   - **分析**：中止操作后，孤立的 `tool_use` ID 导致 Agent 陷入 400 错误死循环，必须重建会话。这暴露了长会话状态机的异常处理漏洞，引发深度用户的热烈讨论。

---

## 5. Bug 与稳定性

今日报告/更新的 Bug 集中在**网关崩溃重启、401 鉴权失败以及沙箱环境隔离**。按严重程度排列如下：

### P0 - 崩溃与死锁级
- **网关无限期死亡 ([Issue #40089](https://github.com/openclaw/openclaw/issues/40089))**：自动更新后 `launchctl bootstrap` 未执行，导致 macOS 网关永久离线，需人工介入。目前无对应 Fix PR。
- **系统提示词打字错误引发上下文异常 ([Issue #37757](https://github.com/openclaw/openclaw/issues/37757))**：`IDENTITITY.md` 拼写错误。虽说是表层 Bug，但会误导 LLM 的文件识别。

### P1 - 核心功能阻断
- **Azure Foundry GPT 模型工具调用失效 ([Issue #65603](https://github.com/openclaw/openclaw/issues/65603))**：升级到 `2026.4.11` 后，推理模型和 Tool Calling 能力被架构拒绝。属于严重的回归问题。
- **Slack 子 Agent 消息路由错乱 ([Issue #64454](https://github.com/openclaw/openclaw/issues/64454))**：子 Agent 完成任务后的消息发送到了主频道而非原话题。
- **Docker 沙箱工作空间无法挂载 ([Issue #31331](https://github.com/openclaw/openclaw/issues/31331))**：DinD 环境下路径映射错误。目前无彻底修复的 PR。

### P2 - 已有修复 PR 的Bug
- **纯文本模型接收图片导致崩溃** -> 修复于 [PR #67634](https://github.com/openclaw/openclaw/pull/67634)
- **Telegram 消息重复发送与延迟** -> 修复于 [PR #69476](https://github.com/openclaw/openclaw/pull/69476)

---

## 6. 功能请求与路线图信号

结合今日的 Issues 与 PRs，以下是可能被纳入下个版本迭代的路线图信号：

1. **多模态生态扩充**：
   - 社区积极提交了 xAI 图像生成 ([PR #68694](https://github.com/openclaw/openclaw/pull/68694))、Gemini 个性化 TTS ([PR #69321](https://github.com/openclaw/openclaw/pull/69321)) 和 Typecast 亚洲语言 TTS ([PR #10356](https://github.com/openclaw/openclaw/pull/10356))。
   - **信号**：OpenClaw 正在迅速从一个"纯文本对话网关"向"全能多模态调度中心"演进。
2. **原生 MCP 集成支持 ([Issue #34097](https://github.com/openclaw/openclaw/issues/34097))**：
   - 用户要求无需 CLI 桥接，直接原生接入 Model Context Protocol (MCP) 服务器。这符合 AI 智能体行业的发展趋势，有望在后续大版本中作为主打特性推出。
3. **可观测性增强**：
   - [PR #69463](https://github.com/openclaw/openclaw/pull/69463) 提出为外部监控面板（如 Helicone）增加 Session 级别的请求追踪 Header，表明项目正在为大规模企业级部署做性能监控方面的准备。

---

## 7. 用户反馈摘要

从今日的 Issue 互动中，可以提炼出用户的几个核心反馈点：

- **痛点：多端同步与鉴权机制极其脆弱**。大量用户反馈（如 [Issue #52037](https://github.com/openclaw/openclaw/issues/52037), [#34117](https://github.com/openclaw/openclaw/issues/34117)）Token 刷新失败、持久化失败，导致需要频繁重新登录，严重影响 7x24 小时无人值守 Agent 的运行。
- **痛点：流式输出在第三方应用的适配体验差**。飞书流式卡片消息重复/截断 ([Issue #65993](https://github.com/openclaw/openclaw/issues/65993))、Telegram 消息在流式传输时变成"置顶消息"等，说明 OpenClaw 在对接不同 IM 协议时的底层流处理需要进一步抽象和统一。
- **满意点：对多模型 fallback 机制的认可**。虽然有 Bug（[#47994](https://github.com/openclaw/openclaw/pull/47994)），但用户广泛在使用并依赖 OpenRouter、Ollama Cloud 等多模型容灾架构。

---

## 8. 待处理积压

以下重要长期 Issue/PR 存在积压或长期未彻底解决，建议核心维护者关注：

1. **📌 [Issue #75](https://github.com/openclaw/openclaw/issues/75) - Linux/Windows 客户端支持**：开放于 1 月 1 日，高达 71 赞，至今仍无官方确定的时间表或 Assignees。
2. **📌 [Issue #37623](https://github.com/openclaw/openclaw/issues/37623) - GPT-5.4 虚假支持**：配置中可选但运行时报错 404。这种"配置与运行时不一致"的体验极度损害开发者信任。
3. **📌 [PR #68936](https://github.com/openclaw/openclaw/pull/68936) - PR 自动修复机器人流水线**：一个超过 700 行的巨大脚本，对项目维护提效极具价值，但目前处于 Open 状态等待核心维护者 Review。
4. **📌 [Issue #35807](https://github.com/openclaw/openclaw/issues/35807) - Windows PowerShell 执行破坏**：对企事业 Windows 环境用户极不友好，该 Bug 已确认为历史遗留且迟迟未修复。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 4 月 21 日的各大开源项目社区动态，为您生成横向对比与技术生态分析报告如下：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话玩具”向“企业级多模态调度中心”与“群体智能协作”全面跃迁**的阶段。**多渠道集成（IM、邮件、API）与模型路由的稳定性**已成为各项目的生死线，而以 MCP（模型上下文协议）为代表的工具集成标准正迅速从加分项转变为基础架构的核心组件。此外，在底层技术上，**多租户隔离、本地化隐私部署（如 Ollama、端到端加密通道）以及 Agent 的长期记忆与自进化闭环**，正成为开源社区攻坚的下一个高地。总体而言，生态呈现出强烈的“工程化落地”和“去中心化/私有化”双重特征。

### 2. 各项目活跃度对比

| 项目名称 | Issues 动态 (新开/活跃) | PRs 动态 (待处理/合并) | 今日 Release | 健康度与开发节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (活跃301/关199) | 500 (待332/合168) | 无 | **极高**。巨头级流量，正进行高强度的通道与网关稳定性攻坚。 |
| **CoPaw** | 42 (活跃27/关15) | 50 (待16/合34) | **v1.1.3-beta.1** | **极高**。处于快速演进期，核心架构向多智能体协作切换。 |
| **IronClaw** | 50 (活跃37/关13) | 50 (活跃35/合15) | 无 | **极高**。伴随 Engine V2 重构，正进行密集的 Bug Bash 与测试。 |
| **NanoBot** | 12 (活跃4/关8) | 53 (活跃29/合24) | 无 | **优秀**。高质量迭代，重心在 MCP 路由与上下文保留机制。 |
| **Moltis** | 9 (关闭9) | 12 (合并12) | **20260420.02** | **极佳**。极快的响应与“灭虫”速度，工程执行力强悍。 |
| **LobsterAI** | 1 (新开1) | 28 (合并28) | 无 | **优秀**。重心在依赖大版本升级(React 19/Vite 8)与平台体验打磨。 |
| **PicoClaw** | 13 (新开11/关2) | 114 (待合并为主) | nightly (破坏性) | **承压**。v0.2.6 导致严重回归，大量 PR 积压，Review 节奏跟不上。 |
| **NanoClaw** | 2 (新开2) | 26 (待18/合8) | 无 | **良好**。专注于 v1 到 v2 架构的底层解耦与路由重构。 |
| **TinyClaw** | 0 | 1 (关闭修复) | 无 | **平稳**。低活跃度，处于底层配置逻辑的精细化修复期。 |
| **EasyClaw** | 0 | 0 | **v1.8.0** | **平稳**。重交付轻互动，解决跨平台签发的体验问题。 |

### 3. OpenClaw 在生态中的定位
作为生态内的**核心参照物与流量入口**，OpenClaw 扮演着类似“Android 开源项目”的基座角色：
*   **优势（体量与广度）**：其 Issue/PR 吞吐量是其他单一项目的 10 倍以上，拥有庞大的社区用例库。在多模态支持和第三方模型（如 xAI、Gemini、Kimi）的广度接入上遥遥领先。
*   **技术路线差异**：相比其他项目在探索底层 Agent 架构重构（如 CoPaw 的 Plan Mode、NanoClaw 的 v2 路由），OpenClaw 当前正处于**艰难的“深水区修 Bug 阶段”**，特别是处理 HTTP/2 泄漏、OAuth 竞态和流式传输适配，体现了其作为大型网关的工程复杂性。
*   **社区规模对比**：其痛点（如要求 Linux/Windows 客户端）反映了大量企业级用户正试图将其作为生产力中枢全面铺开，其社区画像比其他项目更具“商业化部署”色彩。

### 4. 共同关注的技术方向
*   **1. MCP (Model Context Protocol) 生态的原生化与规范化**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw, Moltis。
    *   **具体诉求**：社区强烈要求摒弃 CLI 桥接，实现 MCP 的原生支持（包括 SSE 传统协议兼容），解决工具调用时的参数传 `null` 异常，以及实现针对特定群组的精准 MCP 路由。
*   **2. 模型路由的容错与降级机制**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw。
    *   **具体诉求**：针对第三方大模型 API 的脆弱性，项目普遍在引入或优化 Fallback 模型列表，以防止主模型宕机或限流导致智能体瘫痪。
*   **3. 多渠道流式传输的“最后一公里”适配**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw, CoPaw。
    *   **具体诉求**：Telegram 的长文本分段、飞书卡片的截断与重复、Web 端的渲染崩溃。各项目都在为不同 IM 平台的底层协议差异付出巨大的适配成本。
*   **4. 智能体生命周期与中断控制**
    *   **涉及项目**：NanoBot, CoPaw, LobsterAI。
    *   **具体诉求**：解决 `/stop` 指令带来的上下文丢失、后台任务（如爬虫、Cron）无法真正终止的资源泄露问题。

### 5. 差异化定位分析
*   **架构演进方向差异**：
    *   **OpenClaw** 定位于“全能型多模态网关”，横向铺面广。
    *   **CoPaw (QwenPaw) & IronClaw** 正在向“多智能体协作与自进化”深水区演进（如 CoPaw 的 Plan Mode，IronClaw 的 Engine V2 多路由调度）。
    *   **NanoClaw** 定位于“去中心化与极客隐私”，强调端到端加密和本地化部署。
*   **目标用户画像差异**：
    *   **OpenClaw/PicoClaw**：面向需要接入多平台 API 的泛开发者和中小企业用户。
    *   **LobsterAI**：瞄准 ToB 企业协同办公场景（钉钉、PoPo 深度集成）。
    *   **Moltis/NanoClaw**：面向关注数据隐私、使用 Docker/Unraid 本地自建的极客群体。
*   **技术栈代际**：**LobsterAI** 展现了极为现代的前端基建（React 19, Vite 8, Electron 41），而 **IronClaw** 则在底层使用 Rust 重构关键错误链，显示出对性能和内存安全的极致追求。

### 6. 社区热度与成熟度
当前生态呈现出明显的分层：
*   **第一梯队（快速迭代/重构阵痛期）**：**OpenClaw、IronClaw、CoPaw**。它们拥有最高的社区热度，但因底层架构正在经历巨变（如品牌更名、Engine V2 上线），目前正遭遇阵痛，面临向后兼容性和大量回归 Bug 的挑战（如 CoPaw 的目录混乱、OpenClaw 的鉴权失效）。
*   **第二梯队（质量巩固与极速响应期）**：**Moltis、NanoBot、LobsterAI**。这几个项目热度中等偏上，但健康度极佳。特别是 Moltis 展现了“当日 Bug 当日清”的强悍维护能力，LobsterAI 则专注于通过完善测试用例来提升 UI/UX 稳定性。
*   **第三梯队（底层夯实/静默开发期）**：**NanoClaw、PicoClaw、TinyClaw**。NanoClaw 正在潜心重构底层路由；PicoClaw 则因大量 PR 积压导致严重的质量滑坡（发布破坏性 nightly 版本）；TinyClaw 等则处于低频维护状态。

### 7. 值得关注的趋势信号
1.  **Agent “自进化”与“自治”闭环的出现**：Moltis 引入了自主技能改进机制，CoPaw 社区呼吁 Agent 的自我进化。这标志着开源社区正在从单纯的人工配置技能，向 LLM 驱动的自动化工作流编排演进。
2.  **企业级 IM 的深度集成成为发力点**：对飞书、钉钉、企微的支持不再是简单的收发消息，而是深入到审批流、扫码登录、云文档交互。对于 AI 创业者而言，**打通国内办公生态的 AI 智能体部署是一个极具商业价值的刚需痛点**。
3.  **端侧与隐私计算的觉醒**：NanoClaw 对 Signal E2EE 的支持、本地 Whisper 语音转文字的集成，以及 Ollama 提供商的普遍接入，反映了高净值用户对数据不出域的强烈诉求。未来，内置本地小模型+云端大模型的混合路由架构将成为个人 AI 助手的标配。
4.  **底层错误的“用户友好化”包装**：IronClaw 将 Rust 堆栈包装为用户可读提示，反映了开源项目正跨越“极客玩具”阶段，开始重视非技术用户的交互体验。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-04-21 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时内，NanoBot 项目保持了**高度活跃**的开发与社区互动状态。项目共处理了 12 条 Issue（其中 8 条被顺利关闭）和 53 条 PR 更新。核心开发团队及社区贡献者将重心放在了**系统稳定性修复**（如 MCP 连接、上下文保留、内存泄漏）以及**多渠道体验优化**上。虽然今日无新版本发布，但大量高质量 Bugfix 和 Feature PR 的合并，表明项目正处于为下一个重要版本进行密集迭代和打地基的阶段。总体而言，项目健康度良好，社区响应迅速。

## 2. 版本发布
* **无新版本发布**。今日无新增 Release 或 Tag。

## 3. 项目进展
今日共有 24 条 PR 被合并或关闭，推动了多项关键功能的演进与底层的加固：

* **会话上下文保留机制完善**：一直以来用户抱怨执行 `/stop` 会导致当次上下文丢失。今日 [PR #3299](https://github.com/HKUDS/nanobot/pull/3299) 成功合并，修复了该问题。此外，针对同一问题的历史 PR（如 [PR #2526](https://github.com/HKUDS/nanobot/pull/2526)）也恢复了活跃，标志着智能体中断恢复机制得到了根本性解决。
* **MCP 生态与路由能力增强**：
  * [PR #2416](https://github.com/HKUDS/nanobot/pull/2416) 合并，支持处理 MCP 工具返回的 `ImageContent`，修复了二维码等图片显示乱码的问题。
  * [PR #2424](https://github.com/HKUDS/nanobot/pull/2424) 合并，引入了 `allowedChats` 字段，实现了特定群组与特定 MCP 服务的精准路由绑定。
  * [PR #2523](https://github.com/HKUDS/nanobot/pull/2523) 合并，阻止了需要 MCP 依赖的任务被子代理（subagents）错误接管而导致的静默失败。
* **模型容错与兼容性**：
  * [PR #2417](https://github.com/HKUDS/nanobot/pull/2417) 合并，增加了备用模型列表支持，当主模型遇到限流或宕机时自动降级。
  * [PR #3297](https://github.com/HKUDS/nanobot/pull/3297) 合并，修复了 Anthropic 模型因历史记录末尾包含 assistant 消息而导致的 400 报错。
* **系统安全与防呆设计**：
  * [PR #3240](https://github.com/HKUDS/nanobot/pull/3240) 合并，加固了防止 Shell 扩展绕过受保护文件（如 `history.jsonl`）的防御机制。

## 4. 社区热点
根据评论数和互动频率，今日社区关注焦点如下：

* **[Issue #3143](https://github.com/HKUDS/nanobot/issues/3143) (9 条评论)**：关于 LLM 返回 `code: 1214` 消息参数非法的错误。多位用户反馈该错误在飞书等渠道发生频率较高，主要与 Token 超长截断机制（chunk=13 msgs）有关，是当前社区反馈最频繁的痛点。
* **[Issue #3206](https://github.com/HKUDS/nanobot/issues/3206) (5 条评论)**：关于 Gemini 渠道因多重身份验证凭证导致的 API 报错。
* **[Issue #2389](https://github.com/HKUDS/nanobot/issues/2389) (3 条评论，持续活跃)**：用户提议将 OpenWebUI 作为 Nanobot 的官方接入渠道，反映了社区对本地化 WebUI 部署方案的强烈需求。
* **[PR #3158](https://github.com/HKUDS/nanobot/pull/3158) (长篇分析)**：贡献者提交了针对代理性能、响应速度和正确性增强的综合性优化 PR，正在接受深度 Review。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已产生修复 PR：

**高危/核心逻辑问题：**
* **智能体陷入无限循环**：[Issue #3073](https://github.com/HKUDS/nanobot/issues/3073) 指出，在处理特定提问时，智能体会无限循环调用 `read_file` 读取 `history.jsonl`。已于今日关闭（已确认通过底层 cursor 修复解决）。
* **定时任务泄露工具提示**：[Issue #3319](https://github.com/HKUDS/nanobot/issues/3319) 指出 Cron job 在执行时，会将中间工具的提示信息提前暴露给用户。已关闭。

**中危/平台与渠道兼容问题：**
* **Windows MCP 集成故障**：[Issue #3324](https://github.com/HKUDS/nanobot/issues/3324) 报告了 Windows 环境下集成 chrome-devtools-mcp 时出现 `WinError 193`。
* **DeepSeek 反序列化失败**：[Issue #3328](https://github.com/HKUDS/nanobot/issues/3328) 反映升级到 `0.1.5.post1` 后 Telegram 渠道与 DeepSeek 的对接全面失败。
* **Telegram 超长消息报错**：[Issue #3315](https://github.com/HKUDS/nanobot/issues/3315) 指出模型流式输出过长时，单条消息发送失败。

**已提交修复 PR 的重要 Bug：**
* 针对历史游标损坏导致的崩溃：[PR #3340](https://github.com/HKUDS/nanobot/pull/3340) 提出了对非整数非法 cursor 值的容错处理。
* 针对网络波动导致的 MCP 连接中断：[PR #3338](https://github.com/HKUDS/nanobot/pull/3338) 增加了一次自动重试机制。

## 6. 功能请求与路线图信号
结合今日新开的 Issues 和 PRs，项目未来的迭代可能包含以下功能：

* **支持接收 MCP 根级通知**：[Issue #3326](https://github.com/HKUDS/nanobot/issues/3326) 请求支持 `notifications/scheduled-reminder` 等底层推送，表明用户希望将 NanoBot 从“被动回复”转向“主动定时提醒”。
* **人工接管机制**：[Issue #3322](https://github.com/HKUDS/nanobot/issues/3322) 请求增加 `/bot on/off` 指令，允许在 WhatsApp 等场景下一键暂停机器人回复，这是客服场景的强需求。
* **流式传输支持扩展**：[Issue #3333](https://github.com/HKUDS/nanobot/issues/3333) 询问 QQ 渠道的流式传输支持，避免因响应过慢被平台风控。
* **文件解析能力扩展**：[PR #3336](https://github.com/HKUDS/nanobot/pull/3336) 正在为 `read_file` 工具增加对 DOCX, XLSX, PPTX 等办公文档的解析支持，极大地拓宽了办公场景。

## 7. 用户反馈摘要
从今日的 Issue 描述和评论中，可以提炼出以下真实用户画像和痛点：
* **痛点 1：Token 限制与截断逻辑生硬**。飞书等渠道的超长对话容易触发 `parameter is illegal`，用户期望有更平滑的自动摘要或历史清洗机制，而非直接报错。
* **痛点 2：长文本输出体验差**。Telegram 用户尤其受困于模型“一言堂”输出超长文本导致的消息发送失败，急需底层自动分段发送的支持。
* **痛点 3：版本升级导致的“暗病”**。部分用户（如对接 DeepSeek 的用户）在升级微小版本（post1）后遇到阻塞性问题，且配置回滚无效，表明项目在向后兼容性测试上仍有提升空间。

## 8. 待处理积压
建议维护者关注以下需要响应或进一步推动的重要条目：

* **[PR #3202](https://github.com/HKUDS/nanobot/pull/3202)**：修复了可能导致内存无限增长的 MessageBus 队列限制问题。这是一个关键的内存泄漏修复，目前处于待合并状态，建议尽快完成 Review。
* **[PR #3286](https://github.com/HKUDS/nanobot/pull/3286)**：关于 WebSocket 会话生命周期和流式传输的大型重构 PR，涉及面较广，需要核心架构师介入评估。
* **[Issue #3328](https://github.com/HKUDS/nanobot/issues/3328)**：DeepSeek 反序列化错误导致 Telegram 等渠道瘫痪，由于是升级引发的问题，建议优先确认是否为普遍性回归 Bug。
* **[PR #3339](https://github.com/HKUDS/nanobot/pull/3339)**：关于“通过工作区文件和 Dream 进行行为学习”的文档级 PR，展现了在 Agent 持久化记忆方面的高级用法，有助于丰富生态文档。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 [PicoClaw](https://github.com/sipeed/picoclaw) 项目 2026-04-21 动态日报。

---

# PicoClaw 开源项目动态日报 (2026-04-21)

## 1. 今日速览
PicoClaw 在过去 24 小时内保持着**高活跃度的迭代状态**。项目在昨日自动化发布了 `v0.2.6` 的最新 nightly 构建版本，但该版本引发了针对 Provider 鉴权和 Web UI 的严重回归问题，导致 Bug 反馈数量激增。今日共有 13 个 Issue 得到更新（11 新开，2 关闭），同时积压了高达 114 个待合并的 Pull Request。从整体来看，项目正处于 v0.2.6 发布前的密集重构与修Bug阶段，社区关注度极高，但代码审查和合并速度正面临一定压力。

## 2. 版本发布
- **新版本发布**：[`nightly: Nightly Build v0.2.6-nightly.20260420.6126ede9`](https://github.com/sipeed/picoclaw/releases/tag/nightly)
- **更新内容**：属于自动化构建的每日尝鲜版，包含 main 分支上的最新代码提交。
- **迁移注意事项 ⚠️**：该 nightly 版本目前**存在明显的破坏性变更**。大量用户反馈在升级后出现了 HTTP 授权头丢失（导致 API 报 401）、WebUI 无法正常加载以及模型配置不生效等致命错误。建议生产环境谨慎升级，等待主干分支修复。

## 3. 项目进展
今日项目合入/关闭了 8 个 PR/Issue，主要推进了系统底层的健壮性与合规性修复：
- **Provider 兼容性修复**：[`PR #2343`](https://github.com/sipeed/picoclaw/pull/2343) (已合并) 升级了 Antigravity 客户端版本至 1.25.0，修复了无法访问最新 `gemini-3.1` 系列模型的问题。
- **配置加载修复**：[`Issue #2597`](https://github.com/sipeed/picoclaw/issues/2597) 和 [`Issue #2584`](https://github.com/sipeed/picoclaw/issues/2584) (已关闭) 修复了模型标识符包含大写字母时网关崩溃的问题，以及部分因配置引起的 401 认证报错。

## 4. 社区热点
今日讨论最热烈的问题集中在**API 密钥认证与配置丢失**上，这严重影响了用户将 PicoClaw 作为个人 AI 助手的核心体验：
- 🔥 **[OPEN] [`Issue #2578`](https://github.com/sipeed/picoclaw/issues/2578)：openai_compat 提供者不发送 Authorization header (11条评论)**
  - **分析**：这是当前最严重的回归问题。在 v0.2.6 中，无论用户如何配置 API 密钥，系统在向上游发送请求时都会静默丢弃 `Authorization` header，导致所有基于 OpenAI 兼容格式的模型请求全部失败。
- 🗣️ **[OPEN] [`Issue #1757`](https://github.com/sipeed/picoclaw/issues/1757)：定时任务导致 Channel 错误 (4条评论)**
  - **分析**：用户在让 Agent 执行每小时循环任务时触发频道报错，反映出 PicoClaw 在处理长时间运行的 Cron 任务时可能存在连接断开或上下文溢出的缺陷。

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕 v0.2.6 nightly 版本的**配置解析、网络请求和前端渲染**，按严重程度排列如下：

**🔴 P0 - 致命级**
- **[OPEN] [`Issue #2598`](https://github.com/sipeed/picoclaw/issues/2598)：升级 v0.2.6 后 WebUI 彻底无法工作**。Gateway 启动正常，但前端页面无法加载。
- **[OPEN] [`Issue #2578`](https://github.com/sipeed/picoclaw/issues/2578) / [`Issue #2602`](https://github.com/sipeed/picoclaw/issues/2602)：OAuth 与 API Key 鉴权双双失效**。静默丢弃 Auth Header 导致核心对话功能瘫痪（目前暂无对应 fix PR 标记为就绪）。

**🟠 P1 - 严重级**
- **[OPEN] [`Issue #2600`](https://github.com/sipeed/picoclaw/issues/2600)：MCP arguments 传参异常**。当参数可选或为空时，传递了 `null` 而不是空 object，违反了 MCP 规范并导致部分 MCP 工具调用失败。（注意：[`PR #1460`](https://github.com/sipeed/picoclaw/pull/1460) 正在修复类似层面的 openai tool serialization 序列化问题）。
- **[OPEN] [`Issue #2368`](https://github.com/sipeed/picoclaw/issues/2368)：Web 端配置模型后依然显示“未配置”**。

**🟡 P2 - 一般级**
- **[OPEN] [`Issue #2367`](https://github.com/sipeed/picoclaw/issues/2367)：WebUI 国际化 i18n 遗漏**。切换英文后，最后一个界面的标题依然显示中文。
- **[OPEN] [`Issue #1175`](https://github.com/sipeed/picoclaw/pull/1175) (关联PR)**：飞书频道因包含超过 5 个 Markdown 表格而触发 API 限制导致发送失败。

## 6. 功能请求与路线图信号
社区正在积极拓展 PicoClaw 作为 Agent 的边界，以下是可能重塑下个版本形态的重要功能倡议及对应 PR：
- **统一通讯底层**：[`Issue #2421`](https://github.com/sipeed/picoclaw/issues/2421) 提议增加 **Email 作为原生 Channel**，以适应企业和严肃办公场景。相关的 Channel 重构正在推进中，例如引入官方 LINE SDK 的 [`PR #2413`](https://github.com/sipeed/picoclaw/pull/2413)。
- **Agent 安全与多用户隔离**：[`PR #2313`](https://github.com/sipeed/picoclaw/pull/2313) 提出了极其重要的 **"Agent Shield" 安全集成与多用户支持**，试图引入 Skills 白名单和环境变量隔离（配合 [`PR #1261`](https://github.com/sipeed/picoclaw/pull/1261) 的环境变量净化），这对于个人 AI 助手迈向生产环境至关重要。
- **记忆与工具集成**：[`PR #1124`](https://github.com/sipeed/picoclaw/pull/1124) 集成了 Affine Workspace（支持语义搜索），以及 [`PR #2345`](https://github.com/sipeed/picoclaw/pull/2345) 集成了 Engram MCP 记忆服务器。这表明项目在“长期记忆”能力上的生态正在快速繁荣。

## 7. 用户反馈摘要
从大量 Issues 和 PR 描述中，可以提炼出以下真实用户画像和痛点：
1. **边缘设备/极客玩家增多**：不少用户正在 Raspberry Pi (甚至是 Zero W) 和 ARM 设备上运行 PicoClaw，结合 Ollama (如 glm-4.7-flash) 运行本地模型，对内存和并发控制（如 [`PR #1666`](https://github.com/sipeed/picoclaw/pull/1666)）提出了更高要求。
2. **配置体验不够平滑**：v0.2.6 版本默认配置覆盖用户配置的问题（[`PR #957`](https://github.com/sipeed/picoclaw/pull/957)）引发了诸多抱怨，用户希望在只提供部分参数时不要被错误的默认值（如错误的 api_base）覆盖。
3. **高度依赖第三方 OpenAI 兼容 API**：用户大量使用 DeepSeek、Qwen、Groq 等模型，极度依赖 `openai_compat` provider，因此对 Provider 层的健壮性（重试机制 [`PR #1342`](https://github.com/sipeed/picoclaw/pull/1342)、鉴权兼容性）极其敏感。

## 8. 待处理积压
目前项目存在高达 **106 个待合并的 PR** 和大量未响应的 Issue，以下重要事项亟待核心团队介入：
- **严重回归问题悬而未决**：[`Issue #2578`](https://github.com/sipeed/picoclaw/issues/2578)（API Key 丢失）自 4-17 发现至今已引发大量跟进，但未见官方在 Issue 中给出确切的 workaround 或合并修复。
- **大型重构 PR 处于停滞风险**：[`PR #1229`](https://github.com/sipeed/picoclaw/pull/1229)（OpenAI Responses API 适配）和 [`PR #1666`](https://github.com/sipeed/picoclaw/pull/1666)（MCP 生命周期重构）涉及核心架构改动，长期未合并可能导致与主分支产生严重冲突。
- **文档与小型修复被阻塞**：[`PR #1365`](https://github.com/sipeed/picoclaw/pull/1365)（修复内置 Skills 安装失败）这种高优的 Bugfix 也处于堆积状态，提示维护者需要加快 CI/CD 的响应和 Review 节奏，以免挫伤社区贡献者的积极性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-04-21 NanoClaw 项目动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时内，NanoClaw 仓库保持着**极高的开发与社区活跃度**。尽管今日没有发布新的稳定版本，但共有 **26 个 PR 发生状态变更**（其中 8 个被合并或关闭，18 个待处理），同时新增了 2 个 Issue。项目近期的核心主线正经历从 v1 到 v2 的架构重构与整合（特别是路由与通道管理的解耦）。此外，社区在本地模型集成（Ollama, Codex）、隐私通信渠道和自托管工具链方面展现出强烈需求，项目生态系统正在快速扩张。

## 2. 版本发布
今日**无新版本发布**。

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，标志着项目在架构重构、安全性与第三方模型支持方面取得了实质性进展：
*   **架构重构 (v2 推进):** PR [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) 落地了 v1 升级至 v2 的 5 项核心行动清单，清理了废弃的轮询常量并优化了时区处理。PR [#1877](https://github.com/qwibitai/nanoclaw/pull/1877) 重构了通道路由层，将参与策略移至路由器，并新增了未知频道的注册与所有者审批流程。
*   **第三方 Agent 支持:** PR [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) 引入了基于 JSON-RPC 的 Codex 提供者，实现了使用非 Claude 模型作为规划核心的完整 Agent 循环。
*   **本地模型集成:** PR [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) 添加了 Ollama 提供商支持，允许用户将代理路由到本地运行的 Ollama 实例。
*   **稳定性与安全修复:** PR [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) 修复了 OpenCode SDK/CLI 因静默升级导致的破坏性会话 API 变更；PR [#1873](https://github.com/qwibitai/nanoclaw/pull/1873) 完善了 `.env*` 变体文件的 `.gitignore` 规则，防范凭据泄露。

## 4. 社区热点
目前评论区互动最密集的集中在底层的 v2 架构重构以及高度自定义的集成技能上：
*   **架构重构讨论:** PR [#1877](https://github.com/qwibitai/nanoclaw/pull/1877) (Router 解耦) 和 PR [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) (v2 清理) 是核心开发团队今日的重点关注对象，决定了项目未来的模块化方向。
*   **自托管与本地化工具链:** PR [#1875](https://github.com/qwibitai/nanoclaw/pull/1875) (原生 Signal 通道适配) 和 PR [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) (Home Assistant REST API 集成) 吸引了大量极客用户的关注，反映了社区对隐私通信和智能家居控制的高度诉求。

## 5. Bug 与稳定性
*   **🟡 中等 - 助手名称配置失效:** Issue [#1870](https://github.com/qwibitai/nanoclaw/issues/1870) 报告了 `.env` 中设置的 `ASSISTANT_NAME` 无法在 channel skills 注册群组时生效，导致机器人依然自称 "Andy"。该缺陷影响了用户自定义品牌体验，目前暂无关联 fix PR。
*   **🟢 已解决 - 第三方 SDK 破坏性更新引发的崩溃:** OpenCode 的 `@latest` 静默升级导致会话前缀从 UUID 变为 `ses_`，引发系统不兼容。此问题已通过 PR [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) 将版本硬锁定在 1.4.17 予以解决。

## 6. 功能请求与路线图信号
*   **容器环境变量透传 (Issue [#1867](https://github.com/qwibitai/nanoclaw/issues/1867)):** 作者 `dimatosj` 请求在 `ContainerConfig` 中增加 `env` 字段。随着自托管后端接入 NanoClaw 的需求增加，允许容器级注入 API Key 和 URL 是强诉求。可能被纳入下一版本迭代。
*   **本地语音转文字能力 (PR [#1876](https://github.com/qwibitai/nanoclaw/pull/1876)):** 引入了基于本地 whisper 的语音转录技能，完全免费且私有化部署。这是 AI 助手迈向多模态交互的关键一环。
*   **YouTube 历史记录检索 (PR [#1872](https://github.com/qwibitai/nanoclaw/pull/1872)):** 提出了绕过官方缺失的 API，通过其他方式获取用户观看历史的能力，拓展了个人 AI 助手的数据感知边界。

## 7. 用户反馈摘要
从近期的 Issues 和 PRs 描述中，可以提炼出以下核心用户画像与痛点：
*   **强烈的本地化/去平台化需求:** 用户希望绕过 Anthropic 等官方 API，通过 Ollama、Codex app-server 或代理网关，实现真正的本地或私有化部署。
*   **Docker 与 Unraid 环境体验待优化:** 多个长期 PR（如 [#1188](https://github.com/qwibitai/nanoclaw/pull/1188), [#1290](https://github.com/qwibitai/nanoclaw/pull/1290)）指出，在 Unraid 等环境中启动 NanoClaw 时，凭据预检缺失、文件系统只读挂载（EROFS crash，见 PR [#1090](https://github.com/qwibitai/nanoclaw/pull/1090)）会导致大量隐蔽错误。
*   **高度关注数据授权与隐私:** Signal E2EE（端到端加密）频道的适配，以及本地 Whisper 语音转文字方案的提出，说明目标用户群体对隐私极为敏感。

## 8. 待处理积压
以下高价值的长期 PR 处于 OPEN 状态较久，建议维护团队评估合入进度：
1.  **[PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624):** Matrix E2EE 端到端加密频道支持，已打开超过 17 天，是完善去中心化通信的重要一环。
2.  **[PR #1090](https://github.com/qwibitai/nanoclaw/pull/1090):** 防止 `.claude.json` 只读挂载导致 EROFS 崩溃的修复。已存在 36 天，严重影响部分容器的稳定性。
3.  **[PR #1290](https://github.com/qwibitai/nanoclaw/pull/1290):** Docker 启动前的凭据预检机制，已存在 31 天。能极大减少新用户因配置不当导致的“启动即损坏（产生脏数据）”问题。

--- 
*分析说明：本报告基于 GitHub 数据生成，客观呈现项目动态。部分未显示具体评论数的 PR，依据其频繁的状态变更和大量的代码变更行数（LOC）评估其活跃度。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026-04-21 IronClaw 项目动态日报：

# 📊 IronClaw 项目动态日报 (2026-04-21)

## 1. 今日速览
IronClaw 项目今日维持了极高的开发与测试活跃度。过去24小时内，项目共处理了 **100 个变更请求**（Issues 和 PR 各 50 个），其中新开和活跃的 Issue 达到 37 个，说明社区和 QA 团队正在进行密集的测试（特别是近期的 Bug Bash 活动）。核心开发团队同步推进了大量修复，合并/关闭了 15 个 PR。当前项目重心明显聚焦于 **Engine V2 的质量提升**、**多渠道集成的稳定性（特别是 Telegram 和 Slack）**以及 **Web Gateway 的架构边界治理**。

## 2. 版本发布
过去24小时内**无**新版本发布。目前测试环境主要集中在 `staging` 分支（版本号 `v0.25.0`），核心代码正在经历密集的 Bug 修复和架构重构，预计将在测试套件全量绿灯后推送正式版。

## 3. 项目进展
今日项目在稳定性修复和架构优化上取得了显著进展，共合并/关闭了 15 个 PR，以下是核心推进的模块：

- **用户侧错误提示优化**：合并了 PR #2747，引入了 `FailureCategory` 分类器，将底层的 Rust 错误链、Python 堆栈和 HTTP 502 等原始报错转化为用户友好的提示信息，大幅提升了用户体验。
- **自动化测试与 CI 修复**：PR #2744 成功清除了积累的 12 个 Rust 测试失败和 14 个 Playwright E2E 测试失败，目前 staging 分支测试套件已达到全量绿灯状态（401 个通过）。
- **前端与交互修复**：合并了 PR #2632（防止浏览器恢复不可写的外部渠道线程）和 PR #2630（修复 REPL 模式下鉴权时标准输入死锁问题）。

## 4. 社区热点
今日社区与 QA 团队讨论最热烈的焦点是**第三方服务集成的可用性**：
- 🔥 **[Issue #2229](https://github.com/nearai/ironclaw/issues/2229)** (评论: 10)：Google Sheets OAuth 授权在 Staging 环境中被阻挡（Error 400 invalid_request）。这反映出用户对 IronClaw 作为中枢调度 Google Suite 资产的强烈需求，当前 OAuth 鉴权流的兼容性是核心痛点。
- 🔥 **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537)** (评论: 4)：在 NEAR AI 托管的 TEE 环境中，Wasm 凭证注入失败。该问题涉及底层的密钥管理和安全沙箱机制，引发了核心开发者对运行时环境变量注入逻辑的深入讨论。
- 🏗️ **[Issue #2721](https://github.com/nearai/ironclaw/issues/2721)** (评论: 2)：Engine V2 质量里程碑设计。提出减少对单一 CodeAct 路径的依赖，引入多路由执行机制，标志着项目在底层 Agent 调度架构上的重大演进。

## 5. Bug 与稳定性
今日报告了大量 Bug（主要来自 Bug Bash 4/20），按严重程度和影响面排列如下：

**P0/P1 - 核心逻辑与 UI 阻断**
- **[Issue #2736](https://github.com/nearai/ironclaw/issues/2736)**：失败的 Mission 会无限复活并创建失控线程，导致任务计数器膨胀。（已提交修复 PR [#2760](https://github.com/nearai/ironclaw/pull/2760)）
- **[Issue #2731](https://github.com/nearai/ironclaw/issues/2731)**：Telegram 消息未能统一汇聚为单个会话线程，而是渲染成独立的会话，破坏了多轮对话的连贯性。
- **[Issue #2581](https://github.com/nearai/ironclaw/issues/2581)**：Agent 将内部推理过程暴露给最终用户，发生 Chain-of-Thought 泄露。
- **[Issue #2737](https://github.com/nearai/ironclaw/issues/2737)**：Web UI 聊天框中，点击图片上传后无任何响应。（已提交修复 PR [#2759](https://github.com/nearai/ironclaw/pull/2759)）

**P2 - 边缘场景与体验优化**
- **[Issue #2408](https://github.com/nearai/ironclaw/issues/2408)**：上下文长度溢出，输入超出了模型 200K Token 的限制，缺乏有效拦截。
- **[Issue #2543](https://github.com/nearai/ironclaw/issues/2543)**：Linear MCP 完成 OAuth 设置后，Agent 依然提示未授权。

## 6. 功能请求与路线图信号
- **多租户架构支持**：[PR #2762](https://github.com/nearai/ironclaw/pull/2762) 正在将 Gateway 的多租户模式从“依赖数据库内容推断”重构为“配置驱动”，这是 IronClaw 走向大型 SaaS 化部署的关键一步。
- **多云 AI 厂商支持**：[PR #1446](https://github.com/nearai/ironclaw/pull/1446) 提出了对阿里云百炼 Coding Plan 的支持。不仅扩展了 LLM Provider，还针对国内环境适配了 HTTP/1.1，显示出社区对多地域、多模型部署的强烈需求。
- **细粒度工具路由**：[PR #1378](https://github.com/nearai/ironclaw/pull/1378) 提出了按渠道过滤 MCP 和内置工具的 JSON 配置系统，预计将在下一阶段合入，极大增强多渠道部署的灵活性。

## 7. 用户反馈摘要
从近期的 Issue 提炼出真实用户的三大核心痛点：
1. **鉴权状态不同步**：用户在 UI 上配置好 Telegram 或 Slack 后，Agent 经常“失忆”，要求重新开启或激活（如 [Issue #1595](https://github.com/nearai/ironclaw/issues/1595)），说明状态机的同步逻辑存在漏洞。
2. **多平台应用商店上架**：用户期望开箱即用的集成体验，但目前使用 Slack 时需要自己创建 App（[Issue #1997](https://github.com/nearai/ironclaw/issues/1997)），提高了非技术用户的使用门槛。
3. **底层错误直接抛给用户**：用户在遇到 502 或内部错误时，看到了包含内部文件路径的 Traceback（[Issue #2546](https://github.com/nearai/ironclaw/issues/2546)），引发恐慌，此问题已在今日的 PR #2747 中解决。

## 8. 待处理积压
以下重要 Issue 虽有讨论或 PR，但仍处于待处理/未完全解决状态，建议维护者重点关注：

- 🛑 **[Issue #2229](https://github.com/nearai/ironclaw/issues/2229)** (Google Sheets OAuth 400 错误)：热度最高的 Issue，严重影响 Google 生态集成，亟待排查 Staging 环境的重定向配置。
- 🛑 **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537)** (WASM 凭证注入失败)：涉底层安全架构，当前 PR #2754 正在重构整个 Secrets 绑定批准流程，需持续跟进合并进度。
- ⚠️ **[Issue #2599](https://github.com/nearai/ironclaw/issues/2599)** (Web Gateway 架构边界)：目前的重构 Epic 仍在推进中，随着功能叠加，亟需合入 CI 边界防护代码以防止代码库腐化。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-04-21 动态日报：

# 📅 LobsterAI 项目动态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时内，LobsterAI 项目展现出了**极高的开发活跃度**，主分支共处理了 28 个 Pull Requests（包含合并与关闭），项目正处于密集的迭代重构与稳定性提升阶段。开发团队及社区贡献者重点聚焦于**底层架构升级（如 React 19、Vite 8、Electron 41 的依赖大版本跃迁）**以及**核心用户体验优化（如 SQLite 自动备份、头像图片支持、更新机制修复）**。虽然未发布新的正式 Release 版本，但从合并的 PR 来看，项目正在为下一次重大更新积蓄力量，整体健康度与工程化质量稳步提升。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 28 个 PR 被合并或关闭，项目在功能增强、平台适配上取得了实质性进展：

- **数据安全与稳定性大幅增强**：PR [#1752](https://github.com/netease-youdao/LobsterAI/pull/1752) 合并，引入了 SQLite 自动备份与故障恢复机制，能在启动时检测损坏并恢复至最近的健康快照，显著提升了本地数据的安全性。
- **Agent 个性化表达升级**：PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) 提交了一项重要改进，将 Agent 头像从单一的 Emoji 升级为“Emoji + 图片”双轨支持，大幅增强了多 Agent 场景下的视觉辨识度。
- **平台兼容性与更新机制修复**：PR [#1759](https://github.com/netease-youdao/LobsterAI/pull/1759) 解决了 Windows 覆盖安装时用户自建技能被误删的痛点；PR [#1754](https://github.com/netease-youdao/LobsterAI/pull/1754) 优化了版本更新逻辑，将自动预下载与手动检查解耦，避免了强制下载造成的用户困扰。
- **通讯集成修复**：修复了钉钉集成的若干问题，包括 PR [#1757](https://github.com/netease-youdao/LobsterAI/pull/1757) 修复的 `_agentBinding` 配置问题，以及 PR [#1758](https://github.com/netease-youdao/LobsterAI/pull/1758) 修复的 OpenClaw 路径不匹配问题。同时，PR [#1761](https://github.com/netease-youdao/LobsterAI/pull/1761) 增加了钉钉扫码配置机器人的功能。

## 4. 社区热点
*(注：受限于当前数据接口展示，以下提取最具代表性的交互与讨论 PR/Issue)*
- **定时任务通知文案问题 ([#1751](https://github.com/netease-youdao/LobsterAI/issues/1751))**：这是今日唯一新开的 Issue。用户反馈在开启定时任务时，特定通知方式下的文案展示异常。这反映了用户正在深入使用 LobsterAI 的自动化任务能力，对细节体验提出了更高要求。
- **长期演进的功能请求 ([#544](https://github.com/netease-youdao/LobsterAI/pull/544))**：一个历史较久的 PR 今日重新活跃，建议添加“技术专家、虚拟女友”等 Agent 人设选择功能。这表明社区对于 LobsterAI 作为个人情感/专业陪练助手的预设模板需求较高。
- **依赖大版本升级讨论**：Dependabot 今日提交了多个核心依赖的跨大版本升级 PR，包括 React 19 ([#1764](https://github.com/netease-youdao/LobsterAI/pull/1764)) 和 Vite 8 ([#1766](https://github.com/netease-youdao/LobsterAI/pull/1766))。这些跨大版本的升级通常需要经过严格的渲染层兼容性评估。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性得到进一步巩固：
- **P1 - 任务无法终止的严重流失体验 Bug**：Issue [#1756](https://github.com/netease-youdao/LobsterAI/pull/1756) 修复了用户在停止爬虫任务（如影视搜索）后，后台爬虫依然继续执行的严重问题。根因在于停止 Session 时的异步时序漏洞，目前已提交 Fix PR。
- **P2 - Windows 端升级覆盖问题**：用户在 Windows 桌面端进行覆盖安装时，自建的 Skills 会被清除。已通过 PR [#1759](https://github.com/netease-youdao/LobsterAI/pull/1759) 优化了安装脚本的时序予以解决。
- **P2 - 钉钉路径与配置错误**：由于环境变量指向错误，导致审批路径失效及消息同步异常。已通过 PR [#1758](https://github.com/netease-youdao/LobsterAI/pull/1758) 和 [#1757](https://github.com/netease-youdao/LobsterAI/pull/1757) 修复。
- **P3 - MCP 工具误导性日志**：PR [#1755](https://github.com/netease-youdao/LobsterAI/pull/1755) 关闭了内置的 `mcporter`，避免其输出无关的 "scanning MCP servers" 日志从而误导用户。

## 6. 功能请求与路线图信号
根据今日的动态，可以洞察出项目未来的演进方向：
1. **深度拥抱 AI Agent 生态**：从支持图片头像 ([#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)) 到人设预设 ([#544](https://github.com/netease-youdao/LobsterAI/pull/544))，项目正在强化其作为“多 Agent 调度平台”的定位，个性化是下一步的重点。
2. **企业级 IM 集成加深**：PR [#1761](https://github.com/netease-youdao/LobsterAI/pull/1761) 引入钉钉扫码授权及 PR [#1762](https://github.com/netease-youdao/LobsterAI/pull/1762) 支持 PoPo 云文档/群历史，表明项目在 ToB 协同办公场景的渗透正在加速。
3. **底层技术栈大换血**：目前积累了大量前沿依赖的升级待合并（React 19, Vite 8, Electron 41）。预计在完成这一轮渲染层测试后，应用的启动速度和渲染性能将迎来显著提升。

## 7. 用户反馈摘要
从 Issue 和 PR 描述中提炼出的真实用户使用场景包括：
- **自动化运维场景**：用户尝试利用定时任务发送通知，但由于文案配置不够直观遇到阻碍 ([#1751](https://github.com/netease-youdao/LobsterAI/issues/1751))。
- **重度信息检索场景**：用户通过 Agent 执行长耗时的爬虫任务（音乐、影视搜索），对任务生命周期的控制（开始/停止）有强需求，此前无法停止的问题极大地影响了体验 ([#1756](https://github.com/netease-youdao/LobsterAI/pull/1756))。
- **资产保护诉求**：Windows 用户在应用迭代更新时，极其看重自己配置的本地 Skills 资产是否安全，不容许数据被静默清除。

## 8. 待处理积压
建议维护团队及社区关注以下积压任务：
- **高优先级依赖审查**：存在大量需要人工介入测试的框架级升级 PR，如 [React 19 升级 (#1764)](https://github.com/netease-youdao/LobsterAI/pull/1764)、[Vite 8 升级 (#1766)](https://github.com/netease-youdao/LobsterAI/pull/1766)、[Electron 41 升级 (#1277)](https://github.com/netease-youdao/LobsterAI/pull/1277)。这些 PR 涉及底层重构，需尽快安排 UI 回归测试。
- **UI/UX 优化提案待定**：如 PR [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) 提出的为 Cowork 初始化添加骨架屏，以及 PR [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) 完善各列表的空状态，目前均处于 Open 状态，期待合并以进一步提升产品质感。
- **Issue #1751 待回应**：今日报告的定时任务文案 Bug 暂未看到官方回应或关联 Fix PR，需开发团队确认排查。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-21)

> **数据源**: [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyagi)  
> **分析周期**: 2026-04-20 00:00 - 2026-04-21 00:00 UTC

---

## 1. 今日速览
TinyClaw 项目在过去 24 小时内整体活跃度呈现**低位平稳**态势。今日未产生任何新增 Issues 或新版本发布，开发与维护节奏相对平缓。不过，仓库关闭了一条关键的修复类 Pull Request（#276），成功解决了系统在心跳配置逻辑上的缺陷。这表明项目核心维护者仍在持续跟进并清理历史积压的底层代码问题，项目的稳定性与代码质量正在逐步夯实。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目的主要推进集中在对底层逻辑的修复与完善上，整体向前迈进了稳健的一小步：
*   **[CLOSED] [fix(heartbeat): honor top-level heartbeat.enabled=false setting](https://github.com/TinyAGI/tinyagi/pull/276)**
    *   **作者**: ZVNC28
    *   **进展概述**: 该 PR 修复了一个配置层级失效的 Bug。此前，`settings.json` 中设置的顶层 `heartbeat.enabled=false` 会被系统静默忽略，导致主入口文件 (`packages/main/src/index.ts:272`) 无条件触发 `startHeartbeat()`。该 PR 的关闭意味着系统现已能够准确识别并响应全局心跳开关，控制粒度得到了优化，避免了不需要心跳检测时产生的无效系统开销。

## 4. 社区热点
过去 24 小时内，项目未出现新增的 Issue 或引发热烈讨论的 PR，社区互动热度处于低位。

## 5. Bug 与稳定性
今日无**新增**报告的 Bug、崩溃或回归问题。
*注：今日关闭的 [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) 实质上修复了一个历史遗留的配置解析 Bug，该问题曾导致用户的全局禁用配置失效，对稳定性有潜在的负面影响，现已通过该 PR 彻底消除。*

## 6. 功能请求与路线图信号
今日未收集到新的功能请求。从近期的代码合并动向（如全局配置生效）来看，项目当前的重心倾向于**完善内部配置架构的严谨性**和**修复边缘逻辑缺陷**，而非急于扩张新功能。建议持续关注后续是否有关于配置系统重构的进一步 PR，以研判下一版本的迭代方向。

## 7. 用户反馈摘要
由于今日无活跃的 Issue 评论或新发 PR 反馈，暂无法提取直接的用户声音。但从 [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) 修复的背景可以间接推断：部分在复杂场景下部署 TinyClaw 的用户，对于**精细化控制智能体生命周期行为（如心跳机制）**有明确需求，期望系统能够严格遵循全局配置文件中的开关设定。

## 8. 待处理积压
今日无长期未响应且处于活跃状态的积压 Issue 或 PR。整体来看，项目当前的健康度良好，工单积压压力较小。建议维护者在后续迭代中继续保持对配置解析、系统冗余调用等底层机制的审查力度。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-21)

## 1. 今日速览
Moltis 项目在过去24小时内展现了**极高的维护活跃度与强悍的“灭 Bug 能力”**。团队在今日一次性关闭了 9 个 Issues 和 12 个 Pull Requests，且所有关闭的 PR 均为成功合并状态，表明项目目前处于**高质量、高执行力的快速迭代期**。核心开发者 `penso` 今日表现尤为活跃，主导了包括沙箱环境修复、模型提供商适配、MCP 协议支持及自进化 Agent 等多项核心特性的合并。配合新版本的发布和 4 批次自动化文档的同步更新，项目整体健康度极佳，工程化落地正在全面加速。

---

## 2. 版本发布
- **最新版本**: [20260420.02](https://github.com/moltis-org/moltis/releases/tag/20260420.02)
- **更新评估**: 官方虽未在 Release Notes 中详细列出具体变更（仅标记为 20260420.02），但结合今日合并的 12 个 PR 来看，此版本属于**重磅功能更新与关键稳定性修复**。涵盖底层架构（指令注册中心）、Provider 适配（Kimi K2.6, Fireworks, Gemini）及前端 UI 渲染升级。

---

## 3. 项目进展
今日共合并 **12 个 Pull Requests**，极大地推动了项目的整体演进，重点进展包括：
- **Agent 自主进化闭环**：PR [#803](https://github.com/moltis-org/moltis/pull/803) 合并，引入了自主技能改进和代理记忆生命周期管理，使 Agent 具备了“自学习、自完善”的能力，是项目迈向 AGI 的重要一步。
- **底层命令架构重构**：PR [#794](https://github.com/moltis-org/moltis/pull/794) 建立了跨频道（Telegram/Discord/Slack）的集中式命令注册中心，彻底解决了不同平台间的命令行为不一致问题。
- **多渠道集成与修复**：
  - 支持 Kimi K2.6 新模型 ([#809](https://github.com/moltis-org/moltis/pull/809))。
  - 新增 MCP 传统 SSE 传输协议支持 ([#805](https://github.com/moltis-org/moltis/pull/805))。
  - 彻底修复 Slack 斜杠命令解析异常 ([#804](https://github.com/moltis-org/moltis/pull/804))。
- **沙箱与底层优化**：沙箱环境正式升级至 Node.js 22 LTS ([#807](https://github.com/moltis-org/moltis/pull/807))，并修复了 Podman 底层镜像丢失的严重问题 ([#811](https://github.com/moltis-org/moltis/pull/811))。
- **UX 升级**：Web 端聊天界面正式引入 `marked` 库以提供完整的 Markdown/GFM 渲染能力 ([#808](https://github.com/moltis-org/moltis/pull/808))。
- **默认技能池**：引入 101 个预置技能库 ([#797](https://github.com/moltis-org/moltis/pull/797))，极大丰富了开箱即用的体验。

---

## 4. 社区热点
- **[Docs] 心跳/Cron 多智能体行为澄清**：[Issue #769](https://github.com/moltis-org/moltis/issues/769)（👍 0，评论 5）。该 Issue 活跃度最高，用户 `supergeoff` 深入探讨了全局工作空间心跳与多 Agent 上下文在会话历史中的调度关系。尽管已被关闭，但其揭示了高级用户在构建复杂多 Agent 编排时对底层生命周期控制的迫切需求。
- **文档同步井喷**：以 `Cstewart-HC` 为主提交了 4 个自动化文档 PR（[#799](https://github.com/moltis-org/moltis/pull/799), [#800](https://github.com/moltis-org/moltis/pull/800), [#801](https://github.com/moltis-org/moltis/pull/801), [#802](https://github.com/moltis-org/moltis/pull/802)），涵盖了核心配置、语音、检查点等关键模块，表明项目在快速发展功能的同时，文档自动化基建已趋于成熟。

---

## 5. Bug 与稳定性
今日报告并修复了大量外围集成与特定环境下的 Bug，整体稳定性（特别是多模型支持和多端适配）得到大幅加固。按严重程度排序：

1. **🔴 P0 严重 - Podman 沙箱环境崩溃**：
   - [Issue #796](https://github.com/moltis-org/moltis/issues/796)：在 rootless Podman 环境下，BuildKit 构建完成后沙箱镜像丢失，导致容器无法启动。
   - **状态**：✅ **已由 PR [#811](https://github.com/moltis-org/moltis/pull/811) 修复并合并**。
2. **🟠 P1 高 - 多个主流大模型 API 400 报错**：
   - Google Gemini 函数调用缺失签名 ([Issue #375](https://github.com/moltis-org/moltis/issues/375)，👍 3) -> ✅ 已由 PR [#795](https://github.com/moltis-org/moltis/pull/795) 修复。
   - Fireworks (Kimi K2.5 Turbo) 报错 400 ([Issue #810](https://github.com/moltis-org/moltis/issues/810)) -> ✅ 已由 PR [#812](https://github.com/moltis-org/moltis/pull/812) 修复。
   - Openrouter + Google AI Studio 400 错误 ([Issue #793](https://github.com/moltis-org/moltis/issues/793)) -> ✅ 关闭（可能已在其他底层 PR 中收敛）。
3. **🟡 P2 中 - 特定渠道集成故障**：
   - [Issue #798](https://github.com/moltis-org/moltis/issues/798)：Slack 斜杠命令无法识别 -> ✅ 已由 PR [#804](https://github.com/moltis-org/moltis/pull/804) 修复。
   - [Issue #278](https://github.com/moltis-org/moltis/issues/278)：无法添加 SSE 类型的 MCP 服务器（长期遗留问题） -> ✅ 已由 PR [#805](https://github.com/moltis-org/moltis/pull/805) 修复。

---

## 6. 功能请求与路线图信号
- **弱网/长操作干预机制**：用户在 [Issue #788](https://github.com/moltis-org/moltis/issues/788) 中提出在 Telegram 端支持“中止当前操作”以及模型失败时的 fallback 机制。虽然该 Issue 已被关闭，但随着今日自进化 Agent ([#803](https://github.com/moltis-org/moltis/pull/803)) 中生命周期管理的引入，** fallback 与中断机制极有可能在下一版本作为 Agent 控制环的一部分被纳入核心路线图**。
- **Nix 生态支持**：[PR #745](https://github.com/moltis-org/moltis/pull/745) 提供了 Nix Flake 的支持，目前仍处于 Open 状态，等待核心团队 Review。这标志着项目正在吸引更底层的系统级开发者参与。

---

## 7. 用户反馈摘要
通过对今日关闭的 Bug 报告进行分析，得出以下真实用户画像与痛点：
- **痛点 1：复杂沙箱环境的兼容性**：使用 Debian 13 + rootless Podman 的高级用户在生产环境中遇到了底层容器运行时的脱节问题（`buildx` 与 `podman store` 的不互通），项目对此的响应和修复非常及时。
- **痛点 2：Provider 适配的碎片化**：大量用户（如 #375, #793, #810）反馈在使用不同中间商平台（Fireworks, Openrouter）和特定闭源模型时遇到 Schema 兼容问题。用户期望 Moltis 能作为一层完美的“屏蔽层”，抹平不同 API 之间的细微差异。
- **痛点 3：MCP 生态的陈旧协议兼容**：用户尝试接入 Baserow 等基于旧版 SSE 的 MCP 服务时频频受阻（#278）。Moltis 在兼容最新协议的同时回退支持了 Legacy SSE，获得了社区的好评。

---

## 8. 待处理积压
当前项目的“响应即修复”速度极快，积压较少，但仍需关注以下待合并/审核的 PR：
- **[PR #745](https://github.com/moltis-org/moltis/pull/745) Feature: Nix Flake**：已开启 4 天，提供 NixOS 原生支持，对于拓展 Moltis 在极客群体和服务器集群中的部署意义重大，建议维护团队优先分配时间进行架构安全审查。
- **4 个 AutoDoc 批次 PR ([#799](https://github.com/moltis-org/moltis/pull/799), [#800](https://github.com/moltis-org/moltis/pull/800), [#801](https://github.com/moltis-org/moltis/pull/801), [#802](https://github.com/moltis-org/moltis/pull/802))**：目前处于 Open 状态，由于涉及大规模的文档覆盖更新，建议尽快执行 CI 渲染测试与内容 Merge，以保证官方文档站点与最新代码功能保持对齐。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期**: 2026-04-21 | **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览
CoPaw（当前主要代码库表现为 QwenPaw）在过去的 24 小时内呈现出**极高的社区活跃度与开发推进速度**。项目今日共处理了 42 条 Issue 动态（其中新开/活跃 27 条，顺利关闭 15 条）和 50 条 PR 动态（待合并 16 条，已合并/关闭 34 条）。团队刚刚发布了 **v1.1.3-beta.1** 版本，核心聚焦于控制台插件系统的增强。总体而言，项目正处于从 1.1.x 向 1.2.0 稳定版演进的快速迭代期，社区对新功能（如 Plan 模式、长期记忆重构）反响热烈，但 Windows 环境的兼容性及平滑升级体验仍存在一定痛点。

---

## 2. 版本发布
**最新版本: [v1.1.3-beta.1](https://github.com/agentscope-ai/QwenPaw/releases)** (发布于 2026-04-20)
*   **更新内容**：
    *   控制台插件系统增强及相关文档补充（PR [#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357)）。
    *   基础设施：版本号升级至 `1.1.3b1`（PR [#3524](https://github.com/agentscope-ai/QwenPaw/pull/3524)）。
*   **破坏性变更与迁移注意**：当前 Issue 列表显示，项目从 CoPaw 更名为 QwenPaw 的过渡期存在历史遗留问题。全新安装后，`WORKING_DIR` 环境变量可能仍指向旧目录 `.copaw` 而非 `.qwenpaw`，导致系统内同时存在两个工作目录并产生数据写入混乱。升级用户需密切关注此问题。

---

## 3. 项目进展
今日共有大量核心功能的 PR 被合并或取得重大进展，项目在多智能体协同、通道修复和安全性上迈进了一大步：
*   **ACP 协议与外部智能体集成**：[PR #3589](https://github.com/agentscope-ai/QwenPaw/pull/3589) 采用了官方 ACP Python SDK 并升级了委托工作流，为多智能体任务移交打下基础。
*   **Shell 执行安全加固**：[PR #3400](https://github.com/agentscope-ai/QwenPaw/pull/3400) 引入了 `ShellEvasionGuardian`，防止通过 `execute_shell_command` 进行命令混淆/逃逸。
*   **多通道消息与 UI 修复**：
    *   修复了钉钉 Webhook 回复中 `bot_prefix` 未生效的问题（[PR #3614](https://github.com/agentscope-ai/QwenPaw/pull/3614)）。
    *   修复了飞书发送消息时无法保留双换行符（段落分割）的体验问题（[PR #2924](https://github.com/agentscope-ai/QwenPaw/pull/2924)）。
    *   修复了 Windows 环境执行 Shell 命令时反复弹出黑色 CMD 控制台窗口的严重体验问题（[PR #2950](https://github.com/agentscope-ai/QwenPaw/pull/2950)）。
*   **重点开发中（未合并）**：
    *   **Plan Mode (规划模式)**：[PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) 正在审查中，允许通过 `/plan` 自动生成多步骤执行计划。
    *   **长期记忆重构**：[PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 对齐了 As2.0 接口，重构了底层长期记忆模块。

---

## 4. 社区热点
今日社区讨论最为热烈的话题集中在**系统升级带来的环境混乱**以及**多智能体协作能力**上：
*   **🔥 品牌更名引发的工作目录双写危机**：[Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) (20 条评论) 和 [Issue #3598](https://github.com/agentscope-ai/QwenPaw/issues/3598) (2 条评论)。大量 Windows 用户反馈升级后，底层仍在向 `.copaw` 写入数据，导致配置和数据迁移失败。
*   **🔥 社区贡献者悬赏任务板**：[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) (58 条评论)。官方发布的 `Help Wanted` 任务板引发了大量开发者认领和讨论，显示出极高的开源参与热情。
*   **🔥 多智能体会话与任务交接**：[Issue #3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) 讨论了架构师智能体定稿后，如何无缝移交上下文给执行智能体并保持反馈闭环。结合正在推进的 Plan Mode，这代表了社区对 CoPaw 从“单体助理”向“群体智能”演进的强烈诉求。

---

## 5. Bug 与稳定性
今日报告了数个影响核心业务流程的 Bug，按严重程度排列如下：

*   **P0 - 导致系统完全崩溃/不可用**：
    *   **Skill YAML 格式错误引发全局崩溃**：[Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568)（已关闭）。当一个技能的 `SKILL.md` 存在无效 YAML 时，会导致整个 QwenPaw 停止响应所有消息。（注：该问题已被快速 Close，推测已在 beta 版中修复）。
    *   **白板无法运行**：[Issue #3578](https://github.com/agentscope-ai/QwenPaw/issues/3578)（已关闭）。Desktop 版本启动后显示白板。
*   **P1 - 核心功能受阻/安全漏洞**：
    *   **Localhost 认证绕过失效 (401)**：[Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582)。根据官方文档，本地请求（`127.0.0.1`）应跳过认证，但实际返回 401 错误。
    *   **Cron 定时任务微信通道 KeyError**：[Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573)。指定 channel=weixin 执行定时任务时，系统报错找不到渠道。
*   **P2 - 平台兼容性及局部功能异常**：
    *   **Windows 梦境系统 OSError(22)**：[Issue #3597](https://github.com/agentscope-ai/QwenPaw/issues/3597)。基于 Dream 的记忆优化功能在 Windows 上触发系统报错。
    *   **send_file_to_user 文件发送报错**：[Issue #3613](https://github.com/agentscope-ai/QwenPaw/issues/3613)（已有对应修复 PR [#3625](https://github.com/agentscope-ai/QwenPaw/pull/3625) 解决了路径非 ASCII 字符的编码问题）。
    *   **前端图片短暂显示后 404**：[Issue #3600](https://github.com/agentscope-ai/QwenPaw/issues/3600)。

---

## 6. 功能请求与路线图信号
用户提出了一系列功能需求，部分已有对应的 PR 或官方回应，暗示了下一阶段的演进方向：
*   **多智能体自治与进化**：[Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) 提出引入 Hermes 理念促使 Agent 自主进化，这可能与当前的 Plan Mode ([PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)) 产生联动。
*   **Cron 任务免审批机制**：[Issue #3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)。用户指出定时任务如果每次都需要 `/approve` 就失去了自动化的意义。这是一个极好的产品体验优化信号。
*   **精细化的 Agent 配置**：[Issue #3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) 建议在 `agent.json` 中开放 `execute_shell_command` 的 timeout 参数配置；同时 [PR #3599](https://github.com/agentscope-ai/QwenPaw/pull/3599) 已经实现了在前端为每个 Agent 独立分配 Model 的功能。项目正朝着更加模块化、可配置的架构发展。
*   **UI/UX 现代化**：[Issue #3627](https://github.com/agentscope-ai/QwenPaw/issues/3627) 有用户呼吁前端 UI 应参考 Claude Code 的现代设计风格进行重构。

---

## 7. 用户反馈摘要
从今日的 Issue 交流中，可以提炼出用户生态的真实切面：
*   **痛点（企业微信/WeCom 占用大量精力）**：企业微信通道是目前 Bug 的重灾区，包括群聊识别图片失败 ([Issue #3628](https://github.com/agentscope-ai/QwenPaw/issues/3628))、群聊消息重复生成空 user_id 的 chat 记录 ([Issue #3523](https://github.com/agentscope-ai/QwenPaw/issues/3523))，以及无法识别不同发言人 ([Issue #3621](https://github.com/agentscope-ai/QwenPaw/issues/3621))。说明 CoPaw 被大量用户尝试作为企业内部的知识库/办事助手部署。
*   **痛点（第三方 API 的兼容性）**：用户大量接入了 OpenRouter、MiniMax ([Issue #3624](https://github.com/agentscope-ai/QwenPaw/issues/3624))、Azure 代理网关以及火山方舟等第三方服务，但在视觉多模态适配、Token 扣费计费拦截 (402/400 错误) 上遭遇较多壁垒。
*   **满意度/亮点**：开发者对 CoPaw 提供的底层工具（如 Browser use、Shell execution）表现出浓厚兴趣，尤其是新增的参数自定义 ([PR #3556](https://github.com/agentscope-ai/QwenPaw/pull/3556)) 获得了积极反馈。

---

## 8. 待处理积压
以下重要 Issue 和 PR 活跃度高但悬而未决，需提请核心维护者重点关注：
*   **严重阻碍升级体验的 Bug**：[Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)（`.copaw` 与 `.qwenpaw` 目录双写混乱）。此问题涉及系统底层的安装与更新逻辑，若不及时修复并给出迁移脚本，将严重影响老用户向 1.1.3+ 版本的过渡。
*   **长期审查的大型 PRs**：
    *   [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) (语义化 Skill 路由)：通过 embedding 检索降低长技能列表的 Token 消耗，该特性对重度用户是极大福音，但标记为 `need discussions`，需加快评审。
    *   [PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) (Plan mode) 及 [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) (Memory 重构)：这两个核心架构 PR 已开启审查多日，关乎项目下一阶段的核心能力，建议尽早安排合入或发布 Beta 独立测试版。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# 📊 EasyClaw 项目动态日报 (2026-04-21)

> **数据源**: [EasyClaw (github.com/gaoyangz77/easyclaw)](https://github.com/gaoyangz77/easyclaw) | **分析师**: AI 开源项目观察员

---

### 1. 📈 今日速览

今天 EasyClaw 项目呈现出**“低交互运维，重版本交付”**的典型特征。在过去 24 小时内，项目社区互动保持静默，Issues 和 Pull Requests 均无新增或更新（活跃度为 0）。然而，在代码交付端，维护者今日正式发布了具有里程碑意义的 **v1.8.0 版本**，这表明项目目前处于稳定的功能迭代期，核心精力聚焦在软件开发与发布上。整体来看，虽然社区讨论热度暂歇，但项目健康度依靠坚实的版本更新得以维持，属于健康的“静默开发期”。

### 2. 🚀 版本发布

项目于今日正式发布了新版本，包含了重要的平台适配支持：

- **[v1.8.0: RivonClaw v1.8.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.0)**

**更新内容与重点说明**：
此版本的 Release Notes 聚焦于 **macOS 平台的安装与兼容性指引**。针对 macOS 用户，详细说明了由于系统 Gatekeeper 安全机制拦截未签名应用而导致的“应用已损坏”误报问题，并明确指出文件本身并未损坏，随后提供了通过终端解除隔离属性的解决方案。
- **破坏性变更/迁移注意**：本次说明未列出具体的底层 API 破坏性变更或代码级迁移指南。建议升级用户重点关注在 macOS 环境下的初次启动流程，并确认是否需要执行绕过 Gatekeeper 的终端指令。

### 3. 🛠️ 项目进展

由于今日无任何活跃或已合并/关闭的 Pull Requests，暂无通过 PR 途径向前推进的代码级修改。今日项目的核心进展完全体现在 v1.8.0 的发布及对 macOS 端用户体验的文档级优化上。

### 4. 🔥 社区热点

今日无讨论最活跃、评论最多或反应最多的 Issues 与 PRs。社区反馈渠道目前处于消息真空期。

### 5. 🐛 Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。结合 Release Notes 来看，v1.8.0 重点排除了 macOS 平台下的特定安装环境异常，侧面反映了项目在跨平台分发时的稳定性正在不断被打磨。

### 6. 🗺️ 功能请求与路线图信号

今日未收集到来自开源社区的新功能需求或 Issues。关于下一版本的演进方向，需等待维护者后续提交代码或更新 Roadmap 文档后方可明确。

### 7. 🗣️ 用户反馈摘要

虽然今日无新增评论，但从最新发布的 v1.8.0 Release Notes 可以**逆向提炼出真实用户痛点**：
- **痛点场景**：部分核心用户群在 macOS 平台上进行客户端安装与初次启动。
- **体验反馈**：由于应用缺少苹果官方认可的签名证书，触发了系统级安全拦截，导致非极客用户产生“文件已损坏”的困惑，甚至可能导致用户流失。
- **满意度预期**：维护者在 Release 中提供双语（中/英）且详尽的错误排查指引，预计将大幅提升受影响用户的自助解决体验与满意度。

### 8. ⚠️ 待处理积压

过去 24 小时内，无新增的待处理积压，且系统未探测到带有“长期未响应”标签的老旧 Issue 或 PR 被重新激活。建议维护者在后续 v1.8.x 的日常维护中，主动回顾 GitHub Issue 列表，确保历史遗留问题得到定期排查与清理。

</details>