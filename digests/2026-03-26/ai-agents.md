# OpenClaw 生态日报 2026-03-26

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-25 22:07 UTC

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

# OpenClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
OpenClaw 项目今日呈现出极高的活跃度，过去 24 小时内 Issues 和 PRs 更新量均达到 **500 条**，显示出社区与开发团队之间的高频互动。项目刚刚发布了 **v2026.3.24** 正式版及两个 Beta 版本，重点增强了 OpenAI API 兼容性（支持 Embeddings 和模型覆盖）并修复了文件系统策略相关的安全边界问题。然而，伴随新版本发布，社区涌现出大量关于**插件兼容性**、**OAuth 认证**及**UI 资产缺失**的反馈，尤其是微信插件和 Matrix E2EE 的兼容性问题引发了激烈讨论。

---

## 2. 版本发布
今日连续发布了 3 个版本，核心更新如下：

### **v2026.3.24 (Latest)**
- **新增功能**:
  - **Gateway/OpenAI 兼容性**: 新增 `/v1/models` 和 `/v1/embeddings` 端点，并在 `/v1/chat/completions` 和 `/v1/responses` 中转发显式的模型覆盖参数，极大地提升了与第三方客户端及 RAG 应用的兼容性。 (感谢 @vincentkoc)
  - **工具显示优化**: `/tools` 端点现在能更清晰地展示当前代理可用的工具列表。
- **链接**: [Release v2026.3.24](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24)

### **v2026.3.24-beta.2**
- **重要修复**:
  - **出站媒体/本地文件访问**: 修复了文件系统策略 (`fs policy`) 的行为逻辑。当 `workspaceOnly` 关闭时，主机本地文件和入站媒体路径现在可以正常发送；同时，严格的 workspace-only 代理仍保持沙箱化，确保安全性。
  - **运行时环境**: 将 Node.js 22 的最低支持版本降低至 `22.14`，扩大了兼容范围。
- **链接**: [Release v2026.3.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.2)

---

## 3. 项目进展
今日共有 **143 个 PR 被合并或关闭**，重点推进了以下领域：

- **安全与权限重构**: PR [#48590](https://github.com/openclaw/openclaw/pull/48590) 实施了“渐进式权限模式”的第一阶段，修复了“始终允许”按钮可能导致的权限提升漏洞，增强了 `exec` 执行的安全性。
- **渠道增强**:
  - **QQ 渠道支持**: PR [#52986](https://github.com/openclaw/openclaw/pull/52986) 新增了 QQ 机器人的原生支持，扩展了 OpenClaw 在国内社交平台的触达范围。
  - **WhatsApp 稳定性**: PR [#54183](https://github.com/openclaw/openclaw/pull/54183) 为 WhatsApp 渠道增加了可配置的指数退避重试机制，显著改善了网络抖动下的消息送达率。
  - **Slack 审批流**: PR [#48567](https://github.com/openclaw/openclaw/pull/48567) 引入了基于 Block Kit 的交互式执行审批按钮，提升了 Slack 中的操作体验。
- **测试与基础设施**: PR [#54650](https://github.com/openclaw/openclaw/pull/54650) 引入了基于 Planner 的测试运行器，旨在解决近期测试调度不稳定和 Windows 平台脆弱性问题。

---

## 4. 社区热点
今日社区讨论主要集中在跨平台客户端支持及新版本带来的兼容性挑战：

1.  **[OPEN] Linux/Windows 原生客户端请求** ([#75](https://github.com/openclaw/openclaw/issues/75))
    - **热度**: 👍 65 | 💬 49
    - **分析**: 这是长期热门需求。用户希望获得与 macOS/iOS 一致的 Linux 和 Windows 原生应用体验。鉴于 OpenClaw 的 AI 助手定位，桌面端覆盖对于吸引开发者群体至关重要。
2.  **[OPEN] 微信插件兼容性问题** ([#52885](https://github.com/openclaw/openclaw/issues/52885))
    - **热度**: 💬 40
    - **分析**: 微信插件 `@tencent-weixin/openclaw-weixin` 在最新版本中无法加载 (`Cannot find module 'openclaw/plugin-sdk'`)。由于微信在国内的核心地位，此问题严重阻碍了国内用户的升级路径，急需官方介入或 SDK 文档更新。
3.  **[OPEN] UI 资产缺失回归问题** ([#52823](https://github.com/openclaw/openclaw/issues/52823))
    - **热度**: 👍 12 | 💬 34
    - **分析**: 部分用户升级后遇到 `Control UI assets not found` 错误。虽然提供了 `pnpm ui:build` 的临时方案，但这暴露了发布包或安装脚本中可能存在的文件缺失问题，影响了“开箱即用”的体验。

---

## 5. Bug 与稳定性
今日报告的 Bug 集中在认证、UI 和特定模型集成上，部分已有修复方案：

| 严重程度 | 问题 | 状态/PR | 描述 |
| :--- | :--- | :--- | :--- |
| **高** | **Kimi web_search 401 错误** | [Issue #44851](https://github.com/openclaw/openclaw/issues/44851) | Kimi 模型的搜索工具调用认证失败，但 Chat API 正常，阻塞了使用 Kimi 模型的 RAG 功能。 |
| **高** | **OAuth Token 刷新竞态** | [Issue #26322](https://github.com/openclaw/openclaw/issues/26322) | 多代理共享 OAuth 时导致 Token 刷新失败 (`refresh_token_reused`)，影响多机器人场景的稳定性。 |
| **中** | **Mistral API 422 错误** | [Issue #47079](https://github.com/openclaw/openclaw/issues/47079) | 适配器发送了 Mistral 不支持的 `max_completion_tokens` 参数，导致请求被拒。 |
| **中** | **UI 麦克风权限被拦截** | [Issue #51085](https://github.com/openclaw/openclaw/issues/51085) | Gateway 的默认安全头部 (`Permissions-Policy`) 阻止了 Web UI 的语音输入功能。 |
| **低** | **UI 白色感叹号覆盖** | [Issue #46818](https://github.com/openclaw/openclaw/issues/46818) | Web UI 随机出现全屏覆盖图标，影响视觉体验，点击即可消失，属 UI 层 Bug。 |

**修复亮点**: v2026.3.24-beta.2 已修复了本地文件访问策略混乱的问题，解决了潜在的沙箱逃逸风险。

---

## 6. 功能请求与路线图信号
结合 Issue 和 PR 动态，未来版本可能会重点关注以下方向：

- **跨平台桌面端**: Issue [#75](https://github.com/openclaw/openclaw/issues/75) 的高热度可能推动 Linux/Windows 客户端的开发优先级。
- **混合记忆系统**: PR [#32154](https://github.com/openclaw/openclaw/pull/32154) 提出了结合知识图谱和 LanceDB 的混合记忆插件，并支持免费 Gemini 嵌入，显示项目正向更复杂的长期记忆能力演进。
- **外部记忆集成**: PR [#54712](https://github.com/openclaw/openclaw/pull/54712) 正在增加 `agentMemo` 作为 `memorySearch` 提供者，表明 OpenClaw 正致力于解耦记忆层，支持接入外部专业记忆服务。
- **Discord 新成员欢迎**: PR [#32306](https://github.com/openclaw/openclaw/pull/32306) 正在测试 GUILD_MEMBER_ADD 事件路由，未来将支持自动欢迎新成员功能。

---

## 7. 用户反馈摘要
从评论和 Issue 描述中提炼出以下用户画像与痛点：

- **痛点**:
  - **升级焦虑**: 多个 Issue (如 #52885, #52823) 表明用户在跟随版本升级时经常遇到依赖缺失或配置失效，渴望更平滑的升级路径。
  - **认证复杂性**: OAuth、API Key 和代理环境下的认证配置对新手来说仍然过于复杂，且容易遇到超时或刷新失败。
  - **Token 消耗**: Issue [#9157](https://github.com/openclaw/openclaw/issues/9157) 指出工作区文件注入消耗了大量 Token，用户希望更智能的上下文管理策略。
- **满意点**:
  - **多渠道集成**: 用户对 OpenClaw 能够统一管理 Discord, Telegram, Slack, 甚至 QQ 和微信 表示高度认可。
  - **开源与可扩展**: 社区活跃地提交 PR (如 Cortex Memory, QQ Channel)，表明高级用户非常认可其开源架构和插件化能力。

---

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决或近期复燃，建议维护者关注：

- **[OPEN] Token 预算浪费 (Issue #9157)**: 工作区文件注入策略导致 93.5% 的 Token 被浪费，这在长对话中是致命的性能瓶颈。
- **[OPEN] 微信插件兼容性 (Issue #52885)**: 虽然是第三方插件，但作为中国市场的关键入口，建议官方提供兼容性指导或 SDK 协助。
- **[OPEN] Docker Skill 安装失败 (Issue #14593)**: Docker 环境下因缺少 `brew` 导致 Skill 安装失败，影响了容器化部署的易用性。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-26)

## 1. 生态全景
2026 年 3 月的 AI 智能体开源生态呈现出**从“单体工具”向“多智能体协作平台”与“多模态通讯中枢”演进**的明确趋势。各项目不再局限于单一的 Chat UI，而是竞相通过插件化架构（Skills/Plugins）打通 Telegram、微信、Discord 等主流 IM 平台，力求成为用户数字生活的统一入口。底层架构上，为了应对日益复杂的任务链与安全性挑战，**混合记忆系统（RAG+Graph）**、**权限沙箱**与**多模型路由**成为标配，同时社区对供应链安全（如对第三方 SDK 的依赖）的敏感度达到了前所未有的高度。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 状态 | 健康度与节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (高互动) | 143 (合并) | **v2026.3.24** (正式版) | ⭐⭐⭐⭐⭐ **生态核心**<br>版本迭代快，社区互动极高，虽有插件兼容性阵痛但修复迅速。 |
| **PicoClaw** | 170 (清理中) | 243 (合并) | **v0.2.4** | ⭐⭐⭐⭐⭐ **迅猛迭代**<br>惊人的 PR 合并量，表明正在进行大规模架构重构与功能整合。 |
| **NanoBot** | 16 (新增) | 35 (Open/合并) | 无 | ⭐⭐⭐⭐ **架构重塑**<br>处于移除核心依赖 的阵痛期，功能爆发与重构并行。 |
| **CoPaw** | 50 (反馈多) | 29 (合并) | **v0.2.0.post1** | ⭐⭐⭐ **磨合期**<br>新版本发布后收到大量 Bug 反馈，处于高频修复阶段。 |
| **ZeptoClaw** | 11 | 22 (合并) | 无 | ⭐⭐⭐⭐ **功能完善**<br>专注于特定渠道的体验优化与底层协议实现。 |
| **NanoClaw** | 34 | 30 (合并) | 无 | ⭐⭐⭐⭐ **安全加固**<br>快速响应安全审计，功能扩展与稳定性修复并重。 |
| **IronClaw** | 10 | 11 (合并) | 无 | ⭐⭐⭐ **基建夯实**<br>聚焦底层 REPL 与调度引擎的稳定性，为高级功能铺路。 |
| **LobsterAI** | 37 | 50 (45 Open) | **2026.3.25** | ⭐⭐⭐ **转型期**<br>PR 积压严重，正从工具向平台化（登录/付费）转型，稳定性待验证。 |
| **Zeroclaw** | 38 | 13 (合并) | 无 | ⭐⭐⭐ **修复优先**<br>集中修复严重回归问题（流式响应/安全），处于救火状态。 |
| **Moltis** | 3 | 2 (合并) | 无 | ⭐⭐ **稳健开发**<br>代码重构深入，关注多智能体架构设计，社区规模尚小。 |
| **TinyClaw** | 0 | 2 (合并) | 无 | ⭐ **静默重构**<br>无社区讨论，核心团队在进行底层架构标准化。 |
| **EasyClaw** | 0 | 0 | 无 | 🔴 **沉寂**<br>无活动。 |

## 3. OpenClaw 在生态中的定位

**定位：全渠道兼容的“中间件”生态枢纽**

*   **优势对比**：
    *   **渠道覆盖广度**：相比 NanoBot/Zeroclaw 侧重通用协议，OpenClaw 对 **QQ、微信、Slack** 等具体平台的适配最为激进，且社区活跃度远超同类，是当前事实上的**生态参照系**。
    *   **API 兼容性**：通过强化 OpenAI API 兼容层（Embeddings/Models），OpenClaw 正试图成为所有 LLM 应用的统一网关，这一点比仅作为 Agent 运行时的 PicoClaw/CoPaw 更具平台潜力。
*   **技术路线差异**：
    *   不同于 NanoBot 的“学术/实验性架构”（如尝试移除 LiteLLM 自建路由），OpenClaw 走的是**实用主义路线**，优先解决文件系统策略、UI 资产打包等工程问题，使其更适合作为生产环境部署。
*   **社区规模**：500+ 的日更新量级远超其他项目，显示出极强的网络效应。其痛点（如微信插件兼容性）往往能迅速引发社区大规模讨论，具备定义行业标准的话语权。

## 4. 共同关注的技术方向

1.  **多渠道的无缝集成**
    *   **涉及项目**：OpenClaw, PicoClaw, NanoBot, ZeptoClaw
    *   **具体诉求**：不仅是简单的消息收发，更强调**线程回复**、**长文本分割 (Split Mark)** 以及 **富媒体渲染**。项目都在努力解决 IM 平台（如微信、飞书、Discord）的协议差异，力求让 Agent 在任何端都能保持上下文连贯。
2.  **记忆系统的架构升级**
    *   **涉及项目**：OpenClaw, CoPaw, Moltis
    *   **具体诉求**：简单的对话历史已无法满足需求。社区正转向**混合记忆**（OpenClaw 提议 Graph+LanceDB）或**外部记忆服务**（OpenClaw 的 agentMemo），并强烈呼吁解决**Token 浪费**问题（CoPaw, OpenClaw 均有相关 Issue），要求更智能的上下文压缩与检索策略。
3.  **去依赖化与原生模型适配**
    *   **涉及项目**：NanoBot, Moltis, PicoClaw
    *   **具体诉求**：出于对 PyPI 投毒（如 LiteLLM 事件）和性能的考虑，项目正在积极**移除中间件 SDK**，转而编写原生的 Provider 适配器（NanoBot 移除 LiteLLM，Moltis 重写 OpenAI 客户端）。
4.  **本地化与边缘部署**
    *   **涉及项目**：PicoClaw, Zeroclaw, NanoClaw
    *   **具体诉求**：支持 **Ollama** 接入、**树莓派/Android** 部署、以及**Docker 镜像的轻量化**，显示出用户对数据隐私和离线运行能力的强烈需求。

## 5. 差异化定位分析

*   **OpenClaw (全能型)**：主打企业级集成与高兼容性，适合需要接入多种办公软件（Slack/微信）的团队。
*   **PicoClaw (多模态/重构型)**：正经历剧烈架构升级，侧重语音/图像多模态与消息处理的底层优化，适合极客用户。
*   **NanoBot (学术/前沿型)**：HKUDS 背景使其更敢于尝试激进架构（如多智能体团队模式），适合研究复杂的 Agent 协作机制。
*   **CoPaw (用户体验导向)**：虽受稳定性困扰，但对 UI 交互（如任务中断、多智能体切换）的关注度最高，试图降低用户门槛。
*   **ZeptoClaw (协议/工具型)**：专注于浏览器自动化工具和底层协议（ACP），更像是其他 Agent 的“工具库”或“后端引擎”。
*   **IronClaw (基础设施)**：深耕调度与 REPL 稳定性，类似于生态中的“操作系统内核”。

## 6. 社区热度与成熟度

*   **成熟稳定期**：
    *   **OpenClaw**：流量巨大，虽然 Bug 不少，但社区自救能力强，文档和响应速度跟得上，属于“繁忙但有序”。
*   **快速迭代/动荡期**：
    *   **PicoClaw, NanoBot**：代码变更量极大，一天合并上百个 PR。功能增长极快，但伴随高风险（如 NanoBot 的死锁、PicoClaw 的兼容性）。
    *   **CoPaw, Zeroclaw**：正经历“发布灾难”，新版本引入的回归问题导致社区反馈以负面为主，处于关键的信誉修复期。
*   **潜伏开发期**：
    *   **IronClaw, Moltis, TinyClaw**：Issue 较少，PR 多为内部重构。这类项目在憋大招，关注底层质量胜过营销。

## 7. 值得关注的趋势信号

1.  **供应链安全成为新瓶颈**：
    *   NanoBot 因 `litellm` 被植入后门而遭到社区质疑，这给所有依赖重型 SDK 的 Agent 项目敲响了警钟。**“去 SDK 化”和原生实现**将成为下一季度的主流趋势。
2.  **Agent 的“感官”正在觉醒**：
    *   ZeptoClaw 和 PicoClaw 对浏览器工具和语音处理的投入表明，Agent 正在从单纯的文本逻辑处理者，进化为具备**视觉（截图/识别）、听觉（语音）和操作能力（浏览器控制）**的实体。
3.  **上下文管理引发焦虑**：
    *   用户对“Token 浪费”和“对话历史污染”的抱怨集中在各项目的 Issue 区。**“精准的上下文压缩”和“会话重置/分支管理”**是继模型能力之后最影响体验的功能点。
4.  **多智能体从概念走向落地**：
    *   Moltis 和 NanoBot 分别在架构设计和功能实现上推进多智能体。这意味着单一 Prompt 的调优已到瓶颈，未来的竞争在于**Prompt 链的编排**和**Agent 间的通信协议**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-26)

你好！我是 NanoBot 开源项目分析师。根据 2026-03-26 的 GitHub 数据，为您生成以下项目动态日报。

---

## 1. 今日速览

NanoBot 项目今日保持**极高的开发活跃度**，社区贡献呈现出“功能大爆发”与“架构重构”并行的态势。虽然过去 24 小时内**没有发布新版本**，但**新增了 16 个活跃 Issue** 和 **35 个待合并 PR**，显示出社区正在密集开发新特性。今日关注的焦点集中在**多智能体协作、底层 Provider 架构调整（移除 LiteLLM 后的阵痛与重构）以及更多第三方模型/平台的适配**。整体来看，项目正在经历一次重大的架构升级期，代码变更量大，功能迭代迅速。

## 2. 版本发布

*   **无新版本发布**。
    *   **分析**：虽然无正式 Release，但大量 PR（如 Bedrock 支持、Discord 重构、Nano Team Mode）的提交表明核心团队正在为下一个大版本（可能是 v1.1.0 或 v2.0）积累重大更新。

## 3. 项目进展

今日共有 **15 个 PR 被合并或关闭**，主要集中在基础设施增强、Provider 适配和系统稳定性方面。项目在多模型支持和架构解耦上迈出了坚实一步。

*   **新增 Step Fun (阶跃星辰) Provider 支持** ([PR #2472](https://github.com/HKUDS/nanobot/pull/2472))
    *   **进展**：已合并。响应了社区对国产大模型 Step Fun 的接入需求，进一步扩大了 NanoBot 的模型生态。
*   **引入时区感知上下文** ([PR #2477](https://github.com/HKUDS/nanobot/pull/2477))
    *   **进展**：已合并。这是一个看似微小但重要的修复，使得 Agent 对时间的感知不再依赖部署环境的系统时间，提升了任务调度的准确性。
*   **参数类型自动转换** ([PR #1610](https://github.com/HKUDS/nanobot/pull/1610))
    *   **进展**：已合并。增强了 Tool calling 的鲁棒性，允许 LLM 生成的参数（如将数字生成字符串）自动适配 Schema，减少调用失败。
*   **消息发送重试机制** ([PR #2478](https://github.com/HKUDS/nanobot/pull/2478))
    *   **进展**：已合并。为 Channel 层增加了指数退避重试逻辑，显著提升了 Telegram 等不稳定网络环境下的消息到达率。

## 4. 社区热点

今日讨论最热烈的话题集中在**架构缺陷**与**被隔离依赖**引发的安全担忧。

1.  **[热度最高] 系统死锁与 SSH 锁定问题** ([Issue #2456](https://github.com/HKUDS/nanobot/issues/2456))
    *   **现象**：用户报告 `nanobot onboard` 命令在多用户 Linux 环境下会导致严重的系统死锁，甚至阻断 SSH 连接。
    *   **诉求**：这是一个严重的阻塞性问题，用户急需官方确认根因（是否是资源抢占或权限问题）并提供规避方案。
2.  **[安全关注] LiteLLM 依赖被隔离** ([Issue #2443](https://github.com/HKUDS/nanobot/issues/2443))
    *   **现象**：核心依赖库 `litellm` 因包含凭据窃取代码被 PyPI 隔离。
    *   **分析**：这直接导致了 [Issue #2493](https://github.com/HKUDS/nanobot/issues/2493) (LangSmith 集成失效) 和部分模型调用失败。社区正在密切关注官方移除 LiteLLM 后的替代方案进展（如 [PR #2485](https://github.com/HKUDS/nanobot/pull/2485)）。
3.  **[架构讨论] Prompt 前缀不一致** ([Issue #2463](https://github.com/HKUDS/nanobot/issues/2463))
    *   **现象**：用户指出 NanoBot 存储的对话历史与发送给 LLM 的实际 Prompt 前缀不一致，这破坏了 OpenAI 等模型的状态管理机制。
    *   **深度**：这是一个深层次的架构设计问题，涉及上下文记忆的准确性，引发了资深用户的担忧。

## 5. Bug 与稳定性

今日 Bug 报告主要涉及**API 兼容性**和**运行时崩溃**，部分已有修复方案。

*   **🔴 严重**
    *   **多用户环境系统死锁** ([Issue #2456](https://github.com/HKUDS/nanobot/issues/2456))：导致系统不可用，目前尚未有明确 Fix PR，需紧急关注。
*   **🟠 中等**
    *   **Qwen-3.5 调用报错** ([Issue #2469](https://github.com/HKUDS/nanobot/issues/2469))：调用通义千问时出现 `function.arguments` 格式错误。
    *   **OpenAI Compat Provider 参数冲突** ([Issue #2476](https://github.com/HKUDS/nanobot/issues/2476))：部分提供商不支持 `max_tokens` 和 `max_completion_tokens` 共存。
        *   *Fix PR*: [PR #2491](https://github.com/HKUDS/nanobot/pull/2491) (已提交，待合并)。
    *   **RoutingProvider 强制使用 LiteLLM 导致 OAuth 失效** ([Issue #2465](https://github.com/HKUDS/nanobot/issues/2465))：导致 OpenAI Codex 等基于 OAuth 的提供商无法正常路由。
*   **🟢 轻微**
    *   **Telegram 消息重复** ([Issue #2208](https://github.com/HKUDS/nanobot/issues/2208))：仅在 Android 端出现，可能与客户端处理逻辑有关。

## 6. 功能请求与路线图信号

社区正在通过 PR 积极推动项目向**多智能体**和**更强集成能力**发展。

*   **多智能体团队模式** ([PR #2013](https://github.com/HKUDS/nanobot/pull/2013))
    *   **内容**：引入 LLM 规划的 2-3 人微型团队，通过共享任务板异步协作。
    *   **状态**：PR Open。如果合并，将是 NanoBot 从“个人助手”迈向“团队编排”的关键里程碑。
*   **原生 AWS Bedrock 支持** ([PR #2485](https://github.com/HKUDS/nanobot/pull/2485))
    *   **内容**：在移除 LiteLLM 后，通过原生 SDK 支持 Claude on Bedrock。
    *   **信号**：项目正在致力于去 LiteLLM 化，转而建立更安全、可控的原生 Provider 体系。
*   **Discord 频道重构** ([PR #2486](https://github.com/HKUDS/nanobot/pull/2486))
    *   **内容**：放弃自定义 Websocket，转而使用官方 `discord.py` 库。
    *   **价值**：牺牲少量依赖简洁性，换取长期稳定性和协议兼容性。
*   **显式技能注入** ([Issue #2489](https://github.com/HKUDS/nanobot/issues/2489) / [PR #2488](https://github.com/HKUDS/nanobot/pull/2488))
    *   **内容**：增加 `/skill` 命令，允许用户手动激活技能，而非完全依赖 Agent 隐式判断。

## 7. 用户反馈摘要

*   **痛点：依赖安全与断供风险**：用户对 `litellm` 被隔离一事反应强烈，不仅是因为功能不可用，更引发了对其项目供应链安全的担忧。用户希望官方尽快完全切断对该库的硬依赖。
*   **痛点：配置复杂性**：有用户反馈 OpenAI 兼容性配置中 `max_tokens` 的废弃逻辑令人困惑 ([Issue #2462](https://github.com/HKUDS/nanobot/issues/2462))，说明 API 适配层的文档或错误提示需要优化。
*   **场景：微信/飞书集成需求**：多个 Issue 提到了微信插件适配 ([Issue #2429](https://github.com/HKUDS/nanobot/issues/2429)) 和飞书通用桥接需求 ([Issue #2484](https://github.com/HKUDS/nanobot/issues/2484))，显示出 NanoBot 在作为企业 IM 机器人方面的强劲需求。

## 8. 待处理积压

以下重要 Issue 长期未得到根本解决或处于 Open 状态，建议维护者关注：

1.  **Matrix 认证问题** ([Issue #1681](https://github.com/HKUDS/nanobot/issues/1681))：涉及加密消息解密失败，自 3 月 7 日以来仍未解决，影响 Matrix 通道的可用性。
2.  **Gemini API Key 强依赖** ([Issue #144](https://github.com/HKUDS/nanobot/issues/144))：配置 Gemini 时对环境变量的强依赖导致通过 OpenRouter 调用失败，这是一个长期存在的配置层逻辑缺陷。
3.  **微信入群限制** ([Issue #2467](https://github.com/HKUDS/nanobot/issues/2467))：虽然可能属于平台限制，但缺乏文档说明或解决方案，导致用户困惑。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-26)

**分析师摘要**：Zeroclaw 今日处于**高活跃度开发状态**，社区反馈热烈。虽然无新版本发布，但核心团队正在集中精力修复 v0.6.x 版本带来的回归问题（特别是流式响应和 Matrix 渠道），并重构底层存储架构。今日共有 50 个 PR 更新（含 13 个合并）和 38 个 Issue 更新，显示出项目正在快速迭代以修复关键稳定性问题。

---

### 1. 今日速览
项目今日呈现**高强度修复与重构并行**的态势。
- **活跃度**：极高。Issue 互动量达 38 条，PR 更新达 50 条，表明社区与开发团队互动频繁。
- **核心动向**：主要集中在修复 v0.6.1/v0.6.2 引入的“流式响应中断”严重 Bug，以及对 Matrix 渠道功能的深度完善。
- **架构调整**：出现移除 PostgreSQL 支持的重构 PR，暗示项目正在简化存储后端依赖，聚焦 SQLite。
- **用户体验**：针对 Docker 部署和 Web UI 的报错反馈较多，开发者已响应并提交修复。

### 2. 版本发布
- **无新版本发布**。
- **注意**：虽然无正式 Release，但主分支正处于活跃开发中，建议关注 nightly builds 或等待下一个补丁版本以修复当前的流式响应问题。

### 3. 项目进展
今日共有 **13 个 PR 被合并**，重点修复了 Web 端流式错误、配置覆写和部分渠道兼容性问题：

*   **关键修复**：
    *   **[#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675) [agent]**: 修复了 v0.6.1 版本中所有模型在 WebSocket 下返回 "unknown does not support streaming" 的严重回归问题，增加了流式失败后的自动降级处理。
    *   **[#4684](https://github.com/zeroclaw-labs/zeroclaw/pull/4684) [onboard]**: 修复了 `onboard --channels-only` 命令会意外覆写所有渠道配置的问题，现在改为合并模式。
    *   **[#4691](https://github.com/zeroclaw-labs/zeroclaw/pull/4691) [gateway]**: 修复了配置 `path_prefix` 后管理接口 (admin endpoints) 404 的问题。
*   **功能增强**：
    *   **[#4664](https://github.com/zeroclaw-labs/zeroclaw/pull/4664) [ci]**: CI 现在会检查所有可选功能的 Clippy 警告，防止 Matrix 等非默认模块的代码质量问题逃逸到主分支。
    *   **[#4705](https://github.com/zeroclaw-labs/zeroclaw/pull/4705) [channel:whatsapp]**: 优化 WhatsApp 群组上下文注入，增加了时间戳，提升 LLM 对对话时序的理解能力。
*   **视觉更新**：
    *   **[#4694](https://github.com/zeroclaw-labs/zeroclaw/pull/4694)**: 更新了 README 的 Banner 图片，去掉了旧的龙虾形象。

### 4. 社区热点
今日讨论最集中的话题围绕**部署体验**与**功能缺失**：

1.  **提供全量 Docker 镜像** **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)**
    *   **热度**：👍 2 | 评论：4
    *   **诉求**：用户希望提供一个开启所有功能（如 WhatsApp）的“全量版” Docker 镜像。目前的默认镜像为了轻量化禁用了部分功能，导致非技术用户自行编译门槛过高。
2.  **Matrix 渠道摩擦追踪** **[#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)**
    *   **热度**：👍 1 | 评论：2
    *   **诉求**：开发者正在集中清理 Matrix 渠道的遗留问题（如 E2EE 加密重试循环、多房间监听失效），这是目前重点攻坚的渠道之一。

### 5. Bug 与稳定性
今日报告了多个**严重 (S0/S1)** 级别的 Bug，主要集中在 v0.6.x 版本的回归问题：

| 严重度 | Issue | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **S0 (数据/安全)** | [#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672) | **Groq API Key 未脱敏**：UI 中直接暴露了 Groq 的 API 密钥。 | **OPEN** 🔴 |
| **S0 (数据/安全)** | [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) | **Mattermost 集成导致 502**：配置自定义 OpenAI 提供者并集成 Mattermost 后服务停止响应。 | **OPEN** 🔴 |
| **S1 (阻塞)** | [#4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) | **流式响应全面失效**：升级到 v0.6.1 后，所有 WebSocket 请求返回 "unknown does not support streaming"。 | **FIX PR #4675** 🟢 |
| **S1 (阻塞)** | [#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652) | **Docker 安装失败**：`install.sh --docker` 在 Ubuntu/WSL 环境下失败。 | **OPEN** 🔴 |
| **S2 (性能)** | [#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699) | **内存无限增长**：多发送人场景下，未限制的 `ConversationHistoryMap` 导致 OOM。 | **FIX PR #4706** 🟢 |

### 6. 功能请求与路线图信号
结合 Issues 与未合并的 PRs，观察到以下技术演进方向：

1.  **存储后端简化**：
    *   **PR [#4714](https://github.com/zeroclaw-labs/zeroclaw/pull/4714)** 提议完全移除 PostgreSQL 后端，将知识图谱功能迁移至 SQLite。这表明项目倾向于“单二进制、零依赖”的极简部署路线，可能与 Issue [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) (请求 MariaDB 支持) 的企业级诉求背道而驰。
2.  **Agent 互操作性 (A2A)**：
    *   **PR [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)** 正在推进 Agent-to-Agent 协议支持，配合 Issue [#4643](https://github.com/zeroclaw-labs/zeroclaw/issues/4643) (局域网自动发现)，预示着 ZeroClaw 正在构建多智能体协作网络。
3.  **边缘设备支持**：
    *   **PR [#4713](https://github.com/zeroclaw-labs/zeroclaw/pull/4713)** 增加了树莓派部署指南，响应了 Issue [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) 关于在低端设备上编译 OOM 的问题，强化其“边缘 AI”定位。

### 7. 用户反馈摘要
*   **痛点：Web UI 易用性**
    *   多名用户反馈 Web 端“健忘” (**[#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644)**) 和工具调用无反应 (**[#4478](https://github.com/zeroclaw-labs/zeroclaw/issues/4478)**)，显示出对 Web 端作为主要交互界面的稳定性仍有待提升。
*   **痛点：配置复杂性**
    *   用户认为目前的 `install.sh` 和 `onboard` 流程在处理非标准配置（如自定义 Provider、Matrix）时容易出错，缺乏明确的文档指引 (**[#4646](https://github.com/zeroclaw-labs/zeroclaw/issues/4646)**)。
*   **认可**：
    *   社区对“更换 Logo” (**[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)**) 表现出积极兴趣，已有用户提交了新的设计稿。

### 8. 待处理积压
*   **安全问题**：**[#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672)** (API Key 泄露) 虽然刚提出，但属于 S0 级别，建议维护者立即确认并修复。
*   **Docker 部署**：**[#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652)** (WSL/Ubuntu 安装失败) 阻碍了新用户入场，目前尚无官方回复。
*   **长期功能请求**：**[#2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972)** (插件沙箱安全) 虽然已关闭/活跃，但安全隔离是插件生态的关键，建议持续关注其后续实现方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
PicoClaw 项目今日呈现出极高的维护活跃度，展现出强大的 Issue 处理能力。过去 24 小时内，项目不仅发布了 **v0.2.4** 新版本，还惊人地关闭了 **170 个 Issues** 和合并了 **243 个 PRs**，这表明项目正在进行大规模的代码重构、功能合并或 Milestone 清理。社区方面，用户对多模态能力（语音/图像）、本地模型兼容性（Ollama/Gemini）以及企业级应用（微信/Discord）表现出强烈关注。目前有 33 个 PR 待合并，整体开发势头迅猛。

---

## 2. 版本发布
### **v0.2.4**
本次更新带来了重要的架构优化和配置体验改进：
*   **配置热重载**: Workspace 配置文件现已支持热重载，无需重启服务即可生效 ([Commit 14a28ae](https://github.com/sipeed/picoclaw/commit/14a28ae93e08ab7f08c577af30e61e1cc218f3c5))。
*   **Agent 稳定性**: 重构了 SubTurn 的错误处理与日志记录逻辑，提升了子代理运行的健壮性 ([Commit 2fec249](https://github.com/sipeed/picoclaw/commit/2fec249be1c3de5828d314f14aa09733310f4b9a))。
*   **日志系统**: 引入了可配置的 Logger，方便开发者和高级用户调试 ([Commit 3293220](https://github.com/sipeed/picoclaw/commit/329322075df3f077a39530b9cd780fc2dd2b8396))。

---

## 3. 项目进展
今日共有 **243 个 PR 被合并/关闭**，显示出项目正在整合大量功能，主要进展包括：
*   **多模态能力突破**: PR #[1939](https://github.com/sipeed/picoclaw/pull/1939) 正在重构 ASR/TTS（语音识别与合成）功能，预计将支持 Discord、Telegram 和微信的语音收发。
*   **消息处理增强**: 合并了 PR #[2008](https://github.com/sipeed/picoclaw/pull/2008)，引入了 `<|[SPLIT]|>` 标记，允许 LLM 主动将长回复拆分为多条独立消息发送，优化阅读体验。
*   **上下文处理优化**: PR #[2016](https://github.com/sipeed/picoclaw/pull/2016) 和 #[2014](https://github.com/sipeed/picoclaw/pull/2014) 显著改进了上下文溢出的检测与分类，修复了对 Anthropic、智谱 AI 等 Provider 的 Token 估算偏差问题。
*   **依赖升级**: 修复并升级了 `pty` 和 `sqlite` 依赖 ([PR #2012](https://github.com/sipeed/picoclaw/pull/2012))，解决了潜在的构建问题。

---

## 4. 社区热点
今日讨论最热烈的话题集中在配置复杂性与多平台适配上：
*   **OpenRouter 配置困惑 ([Issue #694](https://github.com/sipeed/picoclaw/issues/694))**: 尽管已关闭，但该 Issue 有 15 条评论，反映了用户在配置 OpenRouter 作为后端时对模型参数和 API 格式的困惑。
*   **企业微信机器人接入 ([Issue #1210](https://github.com/sipeed/picoclaw/issues/1210)): 11 条评论显示国内用户对 PicoClaw 落地企业微信场景有极高需求，用户正在寻求最佳配置实践。
*   **本地模型支持 ([Issue #75](https://github.com/sipeed/picoclaw/issues/75))**: 获得了 7 个 👍，表明"去云化"、使用本地 LLM（如 Ollama）是核心用户群体的强痛点。
*   **Android 端运行指南 ([Issue #190](https://github.com/sipeed/picoclaw/issues/190))**: 用户希望在移动端（Android）部署 Agent，拓展了 PicoClaw 的潜在使用场景。

---

## 5. Bug 与稳定性
今日大量 Bug 修复被合并，主要集中在 Provider 兼容性和工具调用：
*   **[严重] Gemini 3 Function Call 失败 ([Issue #79](https://github.com/sipeed/picoclaw/issues/79), [Issue #161](https://github.com/sipeed/picoclaw/issues/161))**: 由于缺少 `thought_signature`，Gemini 3 模型工具调用失败。这是近期 Gemini API 变更导致的兼容性问题，需关注是否已彻底修复。
*   **[严重] Ollama 本地超时 ([Issue #430](https://github.com/sipeed/picoclaw/issues/430))**: 本地模型因 HTTP 120s 硬编码超时而崩溃，影响了本地私有化部署的稳定性。
*   **[中等] Discord 令牌持久化失败 ([PR #2024](https://github.com/sipeed/picoclaw/pull/2024))**: 修复了 v0.2.4 引入的回归问题，Discord Token 在 Web 端保存后丢失。
*   **[中等] Mistral API 422 错误 ([PR #2019](https://github.com/sipeed/picoclaw/pull/2019))**: 修复了发送 `reasoning_content` 字段导致 Mistral 拒绝请求的问题。
*   **[修复] 微信同步目录权限 ([PR #2017](https://github.com/sipeed/picoclaw/pull/2017))**: 解决了 HOME 目录不可写时微信通道无法启动的问题。

---

## 6. 功能请求与路线图信号
社区需求正推动项目向更强的自主性和多渠道发展：
*   **子代理工具继承 ([Issue #1278](https://github.com/sipeed/picoclaw/issues/1278))**: 用户希望 Subagent 能继承父代理的工具（如文件读写、Web搜索），这对自动化工作流至关重要。PR #[2020](https://github.com/sipeed/picoclaw/pull/2020) 似乎正在着手解决工具注册表的继承问题。
*   **Telegram Forum 支持 ([Issue #1270](https:///sipeed/picoclaw/issues/1270))**: 请求支持 Telegram 的 Forum Topics 功能，以便在群组中隔离不同话题的上下文。
*   **HTTP 消息入口 ([PR #1657](https://github.com/sipeed/picoclaw/pull/1657))**: 新增 `POST /pico/message` 端点，这将允许外部系统直接触发 Agent，是实现自动化的关键信号。

---

## 7. 用户反馈摘要
*   **痛点**: 配置门槛较高，特别是 API Key 的识别逻辑（如 Issue #109, #96）让新手感到困惑；默认超时设置（120s）对本地慢速模型不友好。
*   **场景**: 用户不仅将其作为 CLI 工具，更试图部署在 Android 手机、企业微信、Discord 等多样化环境中。
*   **评价**: 用户对项目的开源属性和扩展性表示赞赏（如 Issue #148 对 Skills 的期待），但也对某些核心组件（如身份设定 soul.md）修改后的生效机制感到不解（Issue #288）。

---

## 8. 待处理积压
*   **Docker 镜像可见性 ([Issue #302](https://github.com/sipeed/picoclaw/issues/302))**: 用户请求将 ghcr.io 上的 Docker 镜像设为公开，目前仍为私有状态，阻碍了部分部署流程。
*   **自升级功能 ([Issue #618](https://github.com/sipeed/picoclaw/issues/618))**: 用户强烈希望内置 `self-upgrade` 命令，以简化版本迭代流程。
*   **多用户支持 ([Issue #995](https://github.com/sipeed/picoclaw/issues/995))**: 目前单实例难以共享，Memory 全局化导致多用户场景冲突，这是向多租户架构演进的重要阻碍。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
NanoClaw 项目今日维持了**极高的活跃度**，社区贡献与核心修复并进。过去24小时内共有 84 次更新（34 Issues + 50 PRs），其中 30 个 PR 被成功合并，25 个 Issue 得到解决，显示出维护者高效的响应速度。今日重点在于**安全漏洞修复**与**多渠道集成能力的扩展**，同时社区针对容器化部署的稳定性（如 Linux 环境、K8s 限制）提出了关键挑战。

---

## 2. 版本发布
**无新版本发布**。虽然合并了大量修复，但截至 2026-03-26 23:59 尚未生成新的 GitHub Release。

---

## 3. 项目进展
今日共有 **30 个 PR 合并**，主要推进了以下核心功能与修复：

*   **安全与合规性增强**：
    *   合并了针对安全审计 (#1431) 的关键修复，涉及命令注入与竞态条件的修补。
    *   新增了安全策略引擎 ([PR #1360](https://github.com/qwibitai/nanoclaw/pull/1360))，从基于提示词的软约束转向代码层面的硬性访问控制。
*   **渠道集成扩展**：
    *   **Emacs 渠道**：合并了 `add-emacs` 技能 ([PR #1375](https://github.com/qwibitai/nanoclaw/pull/1375))，支持通过本地 HTTP 桥接控制。
    *   **Paperclip 集成**：新增 HTTP 适配器 ([PR #1371](https://github.com/qwibitai/nanoclaw/pull/1371))，支持与 Paperclip 任务管理平台联动。
*   **核心稳定性修复**：
    *   修复了 Telegram 迁移错误标记群组的 Bug ([PR #1367](https://github.com/qwibitai/nanoclaw/pull/1367))。
    *   修复了 Agent 运行器在成功输出后错误退出的问题 ([PR #1368](https://github.com/qwibitai/nanoclaw/pull/1368))。
    *   修复了注册群组时 `CLAUDE.md` 丢失的问题 ([PR #1353](https://github.com/qwibitai/nanoclaw/pull/1353))。

---

## 4. 社区热点
今日讨论最活跃的话题集中在部署安全与上下文管理：

1.  **[安全审计] Command injection and race conditions ([Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431))**
    *   **热度**：评论数 1 (High Priority)
    *   **分析**：这是今日最重要的议题。安全审计发现了 `exec()` 中的命令注入漏洞（Critical）和竞态条件。这直接触发了维护者对安全架构的紧急重构（见 PR #1360）。
2.  **[功能请求] Add /new command to reset session context ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211))**
    *   **热度**：评论数 3, 👍 2
    *   **分析**：用户强烈需要“重新开始对话”的能力，以解决 Token 浪费和上下文混淆问题。这反映出当前会话生命周期管理在长期运行场景下的短板。
3.  **[部署挑战] Challenges deploying in restricted K8s environments ([Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184))**
    *   **热度**：评论数 2, 👍 1
    *   **分析**：用户在生产环境（Sealos/K8s）中遭遇受限权限问题，表明项目目前的容器运行时假设（可能需要特权模式）与云原生最佳实践存在冲突。

---

## 5. Bug 与稳定性
今日报告了多个严重影响使用体验的 Bug，部分已修复：

*   **🔴 Critical - Linux 部署多重故障 ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))**
    *   **描述**：在 Ubuntu/Hetzner 环境下，LID JID 转换导致私信丢失、防火墙拦截以及 `.env` 文件损坏。
    *   **状态**：Open，尚未修复。这是阻碍 Linux 用户落地的严重障碍。
*   **🟠 High - 无中间反馈导致长任务卡死感 ([Issue #1440](https://github.com/qwibitai/nanoclaw/issues/1440))**
    *   **描述**：Agent 处理复杂任务超过 10 分钟无反馈，用户无法区分是运行中还是崩溃。
    *   **状态**：Open。
*   **🟠 High - 调度任务幂等性缺失 ([Issue #783](https://github.com/qwibitai/nanoclaw/issues/783))**
    *   **描述**：`schedule_task` 无幂等机制，跨会话重复创建相同的定时任务。
    *   **状态**：Closed (已通过 PR #1349 添加 pre-hook 逻辑缓解)。
*   **✅ Fixed - Telegram 元数据丢失**
    *   修复了 Telegram Reply-to 上下文不传递的问题 ([Issue #1439](https://github.com/qwibitai/nanoclaw/issues/1439))。
    *   修复了 Telegram Topics (Threads) 不支持的问题 ([Issue #1420](https://github.com/qwibitai/nanoclaw/issues/1420))。

---

## 6. 功能请求与路线图信号
结合 Open Issues 与待合并 PR，未来的版本可能会侧重于以下方向：

*   **本地 LLM 支持**：[PR #1331 (Ollama MCP skill)](https://github.com/qwibitai/nanoclaw/pull/1331) 正在审核中，表明项目正积极向“脱离云端依赖”迈进，满足隐私敏感用户需求。
*   **后端 CLI 化**：[PR #1343 (CLI Backend)](https://github.com/qwibitai/nanoclaw/pull/1343) 试图用 `claude -p` 替代 SDK，以合规使用订阅 Token。这是一个重要的架构调整信号。
*   **企业级集成**：[PR #546 (Mattermost)](https://github.com/qwibitai/nanoclaw/pull/546) 和 [PR #1355 (AstrBot)](https://github.com/qwibitai/nanoclaw/pull/1355) 显示出社区正在推动 NanoClaw 成为跨平台的统一 Agent 接入层。

---

## 7. 用户反馈摘要
从今日的 Issue 评论中可以提炼出以下用户画像与痛点：

*   **痛点：上下文“污染”**：用户非常在意对话历史的无限增长，担心 Token 消耗和 Agent 注意力分散，迫切需要 `/new` 或重置机制。
*   **痛点：Linux 是二等公民**：多位用户反馈文档与实际支持情况不符，且在 Linux 上遇到防火墙、消息丢失等底层问题。
*   **场景：生产环境受限**：K8s 用户希望在无特权容器中运行，目前项目可能过度依赖特权操作（如 Docker socket 挂载）。
*   **满意点：架构灵活性**：用户赞赏 Skill 系统，认为这是扩展功能的正确方式（如 Emacs, Paperclip 集成）。

---

## 8. 待处理积压
以下高价值 PR/Issue 长期处于 Open 状态，建议维护者优先关注：

1.  **[PR #546] Add Mattermost channel skill**
    *   **状态**：Open (Blocked)
    *   **建议**：该 PR 已停留近一个月，是目前最成熟的企业通讯软件集成请求，阻塞原因可能在于架构匹配或测试覆盖，建议优先排障。
2.  **[PR #1331] feat: add Ollama MCP skill**
    *   **状态**：Open
    *   **建议**：本地模型支持是高频需求，该 PR 功能完整，建议尽快 Review 合并。
3.  **[Issue #1445] Linux setup issues**
    *   **状态**：Open (今天创建)
    *   **建议**：虽然刚创建，但鉴于其 Critical 级别，若不解决将严重影响 3 月份的 Linux 用户增长。

---

*分析师结语：NanoClaw 正处于功能爆发期，社区贡献极其活跃。今日的安全修复表明项目正在从“能用”向“安全、稳定”转型。然而，Linux 端的严重 Bug (#1445) 和 Skill 分支的频繁合并冲突 提醒我们，随着代码库膨胀，CI/CD 流程和跨平台兼容性测试需要进一步加强。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是 **IronClaw** 项目 2026-03-26 的动态日报。

### 1. 今日速览
IronClaw 今日保持了极高的开发活跃度，重心明显向**系统稳定性与测试覆盖**倾斜。过去24小时内共有 **41 个 PR 更新**（其中 11 个已合并）和 **10 个 Issue 更新**，核心贡献者 `henrypark133` 和 `ilblackdragon` 领导了针对 REPL 运行时、Routine 引擎及权限范围的重构与修复。虽然新增功能不多，但大量回归测试的引入和关键 Bug 的修复（如 Bedrock 兼容性、REPL 挂起）显著提升了项目的健壮性，为后续更复杂的用户管理功能（DB-backed）打下了基础。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 11 个 PR 被合并，主要集中在修复关键回归问题和增强 CI/CD 流程：

*   **REPL 与 CI 稳定性修复 ([PR #1643](https://github.com/nearai/ironclaw/pull/1643))**:
    *   修复了 REPL 在单消息模式下会挂起以及过早退出导致事件触发例程中断的问题。
    *   增加了 CI 测试步骤的超时限制，防止卡死的测试进程阻塞流水线。
*   **Prompt 权限范围修复 ([PR #1651](https://github.com/nearai/ironclaw/pull/1651))**:
    *   修复了 `libsql` 提示词作用域的回归 Bug，确保系统提示生成正确作用于传入消息的用户工作区，而非所有者工作区。
    *   修复了测试数据播种时的作用域错误。
*   **Cron 调度标准化 ([PR #1648](https://github.com/nearai/ironclaw/pull/1648))**:
    *   修复了 `routine_create` 存储 Cron 表达式时未标准化的问题，确保创建和更新使用相同的持久化格式。
*   **MCP 生命周期修复 ([PR #1646](https://github.com/nearai/ironclaw/pull/1646))**:
    *   修复了高级 MCP 生命周期追踪测试中的用户作用域不一致问题。
*   **Reasoning 端到端支持 ([PR #1513](https://github.com/nearai/ironclaw/pull/1513))**:
    *   合并了一个大型功能 PR，实现了从 Provider 到会话、API 接口及数据库持久化的全链路 LLM 推理过程记录，支持 `/reasoning` 命令查看。

### 4. 社区热点
今日社区关注点集中在**Routine 引擎的改进**和**Sandbox 执行异常**上：

*   **[PR #1650] Routine 全量日志持久化**: 核心贡献者提出了重大改进，旨在将 Routine 执行过程中的所有 LLM 消息实时持久化，取代原有的单行摘要。这将极大提升后台任务的可见性。
*   **[Issue #1637] Sandbox 死循环**: 用户报告在 Sandbox 中执行简单命令时触发了超过 50 次的循环调用，导致工具执行失败。这暴露了 Sandbox 环境或工具调用逻辑中可能存在的无限递归风险。
*   **[Issue #1631] 大上下文截断问题**: 讨论了当 Tool Result 过大（如 145KB）时，LLM 在 `max_tokens=1024` 限制下尝试回显数据导致的截断问题。

### 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，部分已有修复方案：

*   **[Critical] Bedrock API 验证错误 ([Issue #1629](https://github.com/nearai/ironclaw/issues/1629))**:
    *   **问题**: AWS Bedrock API 在请求中包含 `toolUse` 但未配置 `toolConfig` 时会报错。
    *   **状态**: 已有修复 PR #1632 (针对截断问题) 相关的讨论，需剥离 tool blocks。
*   **[High] REPL 单消息模式挂起 ([Issue #1644](https://github.com/nearai/ironclaw/issues/1644))**:
    *   **问题**: 之前版本在 `-m` 模式下会挂起。
    *   **状态**: **已修复** (见 PR #1643)。
*   **[Medium] 飞书通道配置缺失 ([Issue #1633](https://github.com/nearai/ironclaw/issues/1633))**:
    *   **问题**: 飞书 `on_respond` 失败，提示 `app_id not configured`。
    *   **状态**: Open。
*   **[Medium] Cargo.toml 解析错误 ([Issue #1640](https://github.com/nearai/ironclaw/issues/1640))**:
    *   **问题**: Agent 构建 Rust WASM 工具时，依赖解析类型错误。

### 6. 功能请求与路线图信号
*   **Anti-Drift 自检机制 ([Issue #1634](https://github.com/nearai/ironclaw/issues/1634))**: 提议在 Agentic Loop 中加入轻量级 `DriftMonitor`，基于规则检测常见的失败模式（如死循环）并注入纠正性系统消息，无需额外 LLM 调用。这表明项目正在寻求降低 Agent 运行成本和提高自主纠错能力。
*   **Web UI 自定义 LLM Provider ([PR #1340](https://github.com/nearai/ironclaw/pull/1340))**: 社区贡献者正在推进通过 Web UI 配置自定义 LLM Provider 的功能，减少对环境变量的依赖。
*   **Aliyun Coding Plan 支持 ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))**: 持续推进对阿里云百炼 Coding Plan 的原生支持。

### 7. 用户反馈摘要
*   **Sandbox 易用性/稳定性**: 用户在测试 Sandbox 时遇到莫名其妙的循环调用（Issue #1637），显示 Sandbox 的错误处理和循环检测机制仍需加强。
*   **构建工具链痛点**: 用户尝试构建 Rust WASM 工具时遇到 TOML 解析问题（Issue #1640），表明 `build_software` 工具对复杂的 `Cargo.toml` 配置兼容性不足。
*   **多租户需求**: Issue #1637 中的配置 JSON 显示用户正在尝试在无图形界面的服务器环境下部署和测试 Agent，对命令行和配置文件的依赖较强。

### 8. 待处理积压
*   **[Stale/Long-running] LLM Routine 400 错误 ([Issue #763](https://github.com/nearai/ironclaw/issues/763))**: 关于 NEAR AI API 报错 "No user query found" 的老问题虽然今日被关闭，但需确认是否彻底解决了 Routine Engine 构建消息历史缺失用户角色的问题。
*   **[Security] Approval Thread Safety ([PR #1591](https://github.com/nearai/ironclaw/pull/1591))**: 关于审批流程中 TOCTOU 竞态条件的安全加固 PR 仍处于 Open 状态，建议维护者尽快 Review 合并，以防并发操作导致审批丢失。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-26 数据生成的 LobsterAI 项目动态日报。

---

# 📅 LobsterAI 项目日报 (2026-03-26)

## 1. 今日速览
LobsterAI 今日保持了**极高的开发与社区活跃度**。项目发布了一个新版本 `2026.3.25`，带来了登录功能、加油包及安全授权等关键更新。社区层面，过去 24 小时内产生了 **37 条 Issue 更新** 和 **50 条 PR 更新**，其中大部分 PR（45条）处于待合并状态，显示出项目正处于功能快速迭代与重构的密集开发期。今日社区反馈聚焦于 **MCP 配置**、**OpenClaw 网关稳定性** 以及 **数据库底层性能优化**，多位贡献者提交了针对 SQLite 性能和 Electron 主进程稳定性的深度优化代码。

## 2. 版本发布
### `2026.3.25` (Released on 2026-03-25)
本次更新主要涉及功能增强与体验修复：
*   **新功能**：
    *   **登录 & 加油包**：添加了用户登录体系及付费加油包功能 (by @liuzhq1986 in #779)。
    *   **安全授权**：桌面端新增危险命令分级授权机制，提升了本地执行安全性 (by @liuzhq1986 in #796)。
*   **修复**：修复了 IM 聊天同步权限相关问题 (by @liugang519 in #780)。

🔗 **链接**：[Release 2026.3.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.25)

## 3. 项目进展
尽管今日仅合并了 5 个 PR，但待合并队列（45个）中包含了大量重构与优化工作，预示着下个版本将有显著性能提升。

*   **性能与架构优化**：
    *   **SQLite 性能飞跃**：PR #812 提出对 `save()` 操作进行防抖和异步化处理，旨在解决 Electron 主线程阻塞问题，预计将大幅改善高频读写时的卡顿。
    *   **渲染性能**：PR #809 引入 `createSelector` 拆分 Redux selector，解决 cowork 模块无效重渲染问题。
*   **功能增强**：
    *   **GitHub Copilot 集成**：PR #707 正在集成 GitHub Copilot 认证及 API 支持，支持 GPT-4o、Claude 3.5 等模型。
    *   **分享功能增强**：PR #880 新增了消息勾选分享及图片品牌化功能。
*   **稳定性修复**：
    *   PR #852 修复了窗口销毁后导致的主进程崩溃问题。

## 4. 社区热点
今日讨论最热烈的问题集中在配置与基础功能异常：
*   **MCP 服务配置失败 (#728, #724)**：多个用户反馈 MCP 配置后显示 "0 tools" 无法调用。
    *   链接：[Issue #728](https://github.com/netease-youdao/LobsterAI/issues/728), [Issue #724](https://github.com/netease-youdao/LobsterAI/issues/724)
*   **OpenClaw 网关重启问题 (#844)**：用户抱怨切换模型时 Gateway 频繁重启且速度慢，影响体验。PR #870 已尝试修复此问题。
    *   链接：[Issue #844](https://github.com/netease-youdao/LobsterAI/issues/844)
*   **第三方模型兼容性 (#831)**：用户反馈最新版不支持自定义 Gemini 中转模型。
    *   链接：[Issue #831](https://github.com/netease-youdao/LobsterAI/issues/831)

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

| 严重程度 | 问题描述 | 状态/修复 PR |
| :--- | :--- | :--- |
| 🔴 **高危** | **数据库膨胀**：外键约束未启用，删除 session 不级联删除 messages，导致磁盘空间持续增长。 | 已有修复 PR [#881](https://github.com/netease-youdao/LobsterAI/pull/881) |
| 🔴 **高危** | **无限崩溃循环**：无效配置导致 Gateway 无限崩溃重启，需手动干预。 | Issue [#859](https://github.com/netease-youdao/LobsterAI/issues/859) |
| 🟠 **中危** | **桌面端命令失效**：Windows 客户端所有斜杠命令（如 /help）均无效。 | Issue [#883](https://github.com/netease-youdao/LobsterAI/issues/883) |
| 🟠 **中危** | **定时任务僵尸**：任务关闭后仍触发执行；触发异常后无法自动恢复。 | Issue [#850](https://github.com/netease-youdao/LobsterAI/issues/850), [#837](https://github.com/netease-youdao/LobsterAI/issues/837) |
| 🟡 **低危** | **POPO 消息格式**：POPO 渠道换行符显示为原始 `<br />` 标签。 | 已有修复 PR [#882](https://github.com/netease-youdao/LobsterAI/pull/882) |

## 6. 功能请求与路线图信号
*   **精细化模型管理**：用户希望不同任务（如写作、编程）能独立配置模型，而非全局切换 (Issue #856)。
*   **技能市场扩展**：有开发者建议增加 `git worktree` 技能及 PRD 转换工具 (Issue #873)。
*   **安全加固**：社区贡献者提交了针对 `shell.openExternal` 的 URL 协议白名单校验 (PR #877, #869)，表明项目正在加强对抗潜在远程代码执行风险的能力。

## 7. 用户反馈摘要
*   **痛点**：**MCP 配置复杂且容错率低**是目前用户最大的槽点，许多用户在配置自定义 MCP 时遇到 "0 tools" 的情况。此外，**打包后的客户端与开发环境表现不一致**（如 Issue #820 提到打包后 MCP 不可用）增加了排查难度。
*   **场景**：用户广泛使用 LobsterAI 连接内部 POPO/钉钉 机器人以及阿里云百炼等国产模型。
*   **评价**：用户对集成登录和加油包表示欢迎，但对客户端的稳定性（特别是 Gateway 进程和数据库）表示担忧。

## 8. 待处理积压
*   **Issue #711 (打包失败)**：关于 `npm.nie.netease.com` 无法访问导致打包失败的问题，已获得 👍 但尚未有明确解决响应，可能影响部分内部开发者。
    *   链接：[Issue #711](https://github.com/netease-youdao/LobsterAI/issues/711)
*   **PR 队列积压**：当前有 **45 个待合并 PR**，其中包括 GitHub Copilot 支持 (#707) 和核心性能优化 (#812) 等重要功能。建议维护者尽快进行 Code Review 以避免分支冲突和功能延期。

---
*分析师注：项目正处于从单一工具向平台化（登录、付费、插件市场）转型的关键期，稳定性与功能迭代的速度同样重要。建议下个版本优先解决数据库与 Gateway 的稳定性问题。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-26)

**分析周期**：2026-03-25 至 2026-03-26
**数据来源**：[TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

## 1. 今日速览
TinyClaw 项目今日整体活跃度主要集中在**代码重构与架构标准化**。尽管没有新版本发布或新的 Issue 讨论，但核心贡献者完成了 2 个重要的 PR 合并，显著提升了项目的部署标准化程度（引入纯 Node.js 入口和 Docker 支持）及认证模块的一致性。目前仍有 1 个关于 UI 布局重构的 PR 处于打开状态，显示项目正在经历一次较大的内部架构与前端交互调整期。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 **2 个 PR 被合并**，标志着项目在基础设施和认证体系上迈出了坚实的一步：

*   **架构去 Shell 化与容器化支持**：
    PR [#260](https://github.com/TinyAGI/tinyagi/pull/260) 已合并。该变更极具战略意义，它移除了对 `tmux`, `jq`, `curl`, `bash` 等外部运行时环境的依赖，将进程管理完全迁移至 `packages/main/src/index.ts` 的纯 Node.js 环境中。这不仅降低了运行环境的复杂度，还通过引入多阶段 Dockerfile 原生支持了 Docker 部署，大大提升了项目的可移植性。

*   **认证凭证标准化**：
    PR [#261](https://github.com/TinyAGI/tinyagi/pull/261) 已合并。此次更新统一了各 LLM 提供商的凭证字段命名（将 `auth_token` 统一为 `api_key`），并为 Anthropic 增加了 OAuth 支持。这解决了不同提供商之间配置不一致的问题，为后续接入更多模型提供了标准化的认证模板。

## 4. 社区热点
今日无活跃的 Issues 或带有大量评论的 PRs。社区互动主要集中在代码层面的合并审核，表明目前项目处于由核心团队主导的深度开发/重构阶段。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。
*注：PR #261 涉及认证字段的重命名（`auth_token` -> `api_key`），虽然属于功能更新，但现有用户更新代码后可能需要调整环境变量配置，需留意潜在的 "配置错误" 类运行时问题。*

## 6. 功能请求与路线图信号
*   **UI 交互优化信号**：
    正处于 Open 状态的 PR [#249](https://github.com/TinyAGI/tinyagi/pull/249) 提出了重构 Office 布局的计划，意图将侧边栏导航移至顶部，并增加 Agent 角色的点击交互。这表明项目的下一个重点是将 **"工作流/办公场景"** 的用户体验做得更直观，从单纯的工具链向集成化工作台演进。

## 7. 用户反馈摘要
由于今日无新增 Issues，暂无直接的用户反馈数据。但从合并的 PR 来看，开发者正致力于解决 "环境依赖繁琐" 和 "配置不统一" 这两个隐含的痛点，这通常能显著改善高级用户的部署体验。

## 8. 待处理积压
*   **前端布局重构待定**：
    PR [#249](https://github.com/TinyAGI/tinyagi/pull/249)（refactor(office): reorganize office layout）已打开 3 天（自 03-23 创建），目前仍未合并。这是一个较大的 UI 变动，建议维护者尽快Review 或合并，以避免阻塞后续基于新布局的功能开发。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于 2026-03-26 数据生成的 Moltis 项目动态日报。

---

# Moltis 项目动态日报 (2026-03-26)

## 1. 今日速览
Moltis 项目今日整体呈现**高研发活跃度**，核心聚焦于**架构优化**与**底层依赖升级**。虽然无新版本发布，但代码合并活跃，共处理了 4 个 PR 更新（2 个合并）和 3 个 Issue 更新（2 个关闭）。社区方面，WhatsApp 集成的 Bug 修复受到关注，同时出现了关于“本地思考”能力的重复功能请求，显示出用户对端侧推理能力的强烈需求。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日合并了 2 个重要的 PR，显著提升了项目的扩展性和依赖健康度：
*   **MCP 服务器自定义名称 ([PR #439](https://github.com/moltis-org/moltis/pull/439))**: 已合并。该更新允许用户为 MCP 服务器配置友好的 `display_name`，区分了技术标识符与用户可见标签，优化了 UI 展示体验。
*   **多智能体架构设计 ([PR #34](https://github.com/moltis-org/moltis/pull/34))**: 已合并。这是一个重大功能的基石，引入了多智能体支持的基础设计，涵盖了预设、工具策略及系统提示词定制。这标志着 Moltis 正式向复杂的多智能体协作场景迈进。

## 4. 社区热点
*   **最活跃 Issue**: **[Bug]: WhatsApp Integration is not working ([Issue #460](https://github.com/moltis-org/moltis/issues/460))**
    *   **状态**: 已关闭
    *   **热度**: 👍 3
    *   **分析**: WhatsApp 集成作为关键的对外连接渠道，其故障受到用户重点关注。该 Issue 的迅速关闭表明维护团队对核心集成通道的响应非常及时，稳定性维护较好。

## 5. Bug 与稳定性
*   **已修复**:
    *   **[Bug]: WhatsApp Integration is not working ([Issue #460](https://github.com/moltis-org/moltis/issues/460))**: 影响外部通讯集成，已由维护者修复并关闭，无需迁移操作。
*   **新报告**:
    *   无严重的新增 Bug 报告。

## 6. 功能请求与路线图信号
今日出现了明显的**本地化推理**信号：
*   **信号**: 用户连续提交了两个关于“Local Thinking”（本地思考）的 Issue（[#489](https://github.com/moltis-org/moltis/issues/489) 已关闭，[#490](https://github.com/moltis-org/moltis/issues/490) 开放中）。
*   **分析**: 用户希望 Moltis 能够支持本地模型进行“思考”过程，以降低延迟或保护隐私。虽然 [#489] 因重复被关闭，但 [#490] 保留了讨论。结合今日合并的多智能体架构 ([PR #34](https://github.com/moltis-org/moltis/pull/34))，未来版本极可能会强化本地模型作为子代理的推理能力。

## 7. 代码重构与依赖更新
开发者 `fortunto2` 提交了两个关键的技术债务处理 PR，虽未合并但值得注意：
*   **依赖升级**: **[PR #488](https://github.com/moltis-org/moltis/pull/488)** 将 `reqwest` 从 0.12 升级至 0.13。这是为了解锁下游 Provider 重构的前置工作。
*   **架构重构**: **[PR #487](https://github.com/moltis-org/moltis/pull/487)** 提议引入 `openai-oxide` 替代现有的 `openai.rs` 实现。
    *   **亮点**: 用 **888 行** Rust 代码替换了原有 **5300+ 行** 逻辑，大幅提升了代码的可维护性和编译效率。这显示出项目正在经历一次深度的“瘦身”与现代化重构。

## 8. 用户反馈摘要
*   **痛点**: 用户对云端 API 的延迟或成本敏感，迫切需要将部分推理步骤下放到本地执行，而不是仅依赖云端模型。
*   **满意度**: 对多智能体架构的合并反响积极，认为这是项目发展的关键一步。

## 9. 待处理积压
*   **[PR #487](https://github.com/moltis-org/moltis/pull/487) & [PR #488](https://github.com/moltis-org/moltis/pull/488)**: 这两个 PR 互相关联，目前状态为 Open。建议维护者优先 Review，因为 `reqwest` 的升级是引入新 Provider 的前提，且能显著改善代码库结构。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-26)

## 1. 今日速览
CoPaw 项目在今日保持了**极高的活跃度**，随着 **v0.2.0.post1** 的发布，社区针对新版本的反馈如潮水般涌来。过去24小时内共有 **50 条 Issue 更新** 和 **49 条 PR 更新**，显示出开发团队正在高速迭代以修复 v0.2.0 引入的回归问题。讨论焦点主要集中在**多智能体配置**、**系统资源占用（CPU 100%）** 以及 **记忆系统（MEMORY.md）的效率** 上。整体来看，项目处于功能快速扩张后的稳定性磨合期。

## 2. 版本发布
### 🚀 v0.2.0.post1
CoPaw 今日发布了 **v0.2.0.post1**，作为 v0.2.0 大版本后的首个补丁更新。
- **更新内容**:
  - **文档更新**: 更新了 v0.2.0 的 Release Note ([PR #2212](https://github.com/agentscope-ai/CoPaw/pull/2212))。
  - **功能增强**: 改进了工具调用解析逻辑，现在支持从 `thinking` 和 `text` 内容中解析工具调用，提升了 Agent 意图识别的准确率 ([PR #2192](https://github.com/agentscope-ai/CoPaw/pull/2192))。
  - **版本号同步**: 将版本号更新至 `0.2.0.post1`。

## 3. 项目进展
今日共有 **29 个 PR 被合并或关闭**，主要集中在修复 v0.2.0 带来的多智能体配置混乱和 UI 交互问题上。
- **多智能体配置修复**: 修复了在多标签页或切换智能体时，模型配置相互覆盖的严重 Bug ([PR #2283](https://github.com/agentscope-ai/CoPaw/pull/2283))。
- **配置文件保护**: 修复了升级版本后用户自定义的 `agents.md` 被默认配置覆盖的问题 ([PR #2285](https://github.com/agentscope-ai/CoPaw/pull/2285))。
- **Telegram 通道优化**: 修复了 Telegram 长轮询超时导致的频繁重试和资源占用问题 ([PR #2280](https://github.com/agentscope-ai/CoPaw/pull/2280))。
- **文档补充**: 增加了多智能体模式的使用文档 ([PR #2290](https://github.com/agentscope-ai/CoPaw/pull/2290))。

## 4. 社区热点
今日社区讨论最为热烈的话题集中在**新版本的稳定性**与**多智能体功能的易用性**：
1.  **[channel] 小艺集成故障** ([Issue #1911](https://github.com/agentscope-ai/CoPaw/Issue/1911)): 尽管配置正确且通过白名单，但在手机端调用时频繁返回“网络拥堵”，对话记录也无法在 CoPaw 端同步，引发了关于是小艺平台 Bug 还是 CoPaw 适配问题的激烈讨论（18 条评论）。
2.  **飞书频道“延迟回复”顽疾** ([Issue #1345](https://github.com/agentscope-ai/CoPaw/Issue/1345)): 飞书 Bot 经常忽略当前问题而回答上一个问题，这种“错位”现象严重影响了办公场景下的体验（12 条评论）。
3.  **CPU 空转 100% 问题** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/Issue/2218)): 用户报告即使无任务，CoPaw 进程也持续占用 100% CPU，疑似忙轮询（busy-polling）导致，引发了用户对资源消耗的担忧（9 条评论）。
4.  **多智能体模型配置需求** ([Issue #2288](https://github.com/agentscope-ai/CoPaw/Issue/2288)): 用户强烈希望能为不同的智能体（如编程、创意）分别配置不同的模型和参数（如 Temperature），而非全局共用。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且多与 v0.2.0 升级有关，按严重程度排序如下：

### 🔴 严重
- **CPU 100% 空转** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/Issue/2218)): 进程启动后 CPU 持续满载。
  - *状态*: 待修复，可能与内存压缩钩子或底层循环有关。
- **Docker 升级后无法访问** ([Issue #2254](https://github.com/agentscope-ai/CoPaw/Issue/2254)): 升级到 0.2.0 后容器运行正常但网页无法打开（8088 端口）。
  - *状态*: 待确认。

### 🟠 中等
- **定时任务 Cron 报错 503** ([Issue #2230](https://github.com/agentscope-ai/CoPaw/Issue/2230)): 升级 0.2.0 后无法创建计划任务。
  - *状态*: 已有相关修复 PR ([PR #2276](https://github.com/agentscope-ai/CoPaw/pull/2276)) 被合并，待验证。
- **配置文件被覆盖** ([Issue #2236](https://github.com/agentscope-ai/CoPaw/Issue/2236)): 升级导致自定义 Agent 配置丢失。
  - *状态*: 已修复 ([PR #2285](https://github.com/agentscope-ai/CoPaw/pull/2285))。
- **多智能体模型覆盖** ([Issue #2274](https://github.com/agentscope-ai/CoPaw/Issue/2274)): 不同 Agent 间模型配置互相干扰。
  - *状态*: 已修复 ([PR #2283](https://github.com/agentscope-ai/CoPaw/pull/2283))。

### 🟡 轻微
- **乱码输出** ([Issue #2295](https://github.com/agentscope-ai/CoPaw/Issue/2295)): 模型输出偶尔出现非预期字符。
- **Mac 退出后进程驻留** ([Issue #2287](https://github.com/agentscope-ai/CoPaw/Issue/2287)): APP 退出后后台进程未清理。

## 6. 功能请求与路线图信号
用户对 CoPaw 的期望正从“能用”转向“好用”和“专业化”：
1.  **记忆系统优化** ([Issue #2289](https://github.com/agentscope-ai/CoPaw/Issue/2289)): 用户指出基于文本文件的 `MEMORY.md` 在高频使用后体积膨胀，导致检索效率下降。建议引入更高效的存储或检索机制。
2.  **异步并发通信** ([Issue #2225](https://github.com/agentscope-ai/CoPaw/Issue/2225)): 用户希望多智能体之间支持异步并发执行（如同时进行数据抓取和分析），而非目前的串行或阻塞模式。这与目前重构上下文管理的 PR ([PR #2300](https://github.com/agentscope-ai/CoPaw/pull/2300)) 方向一致。
3.  **任务中断功能** ([PR #2067](https://github.com/agentscope-ai/CoPaw/pull/2067) & [Issue #2302](https://github.com/agentscope-ai/CoPaw/Issue/2302)): 社区强烈需求跨平台的 `/stop` 指令，以便在聊天界面随时中断正在运行的冗长任务。该功能正在开发中。

## 7. 用户反馈摘要
- **痛点**: **升级体验差**。多个用户反馈升级过程繁琐，甚至出现服务不可用或配置丢失的情况（[Issue #1895](https://github.com/agentscope-ai/CoPaw/Issue/1895), #2236）。用户强烈建议增加**一键更新**按钮 ([Issue #2301](https://github.com/agentscope-ai/CoPaw/Issue/2301))。
- **痛点**: **多智能体交互割裂**。目前通过多开网页标签页来管理不同 Agent 的体验被描述为“太差劲”，用户急需在同一页面内通过下拉菜单或 Tab 切换 Agent ([Issue #2281](https://github.com/agentscope-ai/CoPaw/Issue/2281))。
- **场景**: 用户正在尝试将 CoPaw 接入公司内部私有化 LLM 网关，这表明 CoPaw 正在进入企业级部署场景，对自定义 API 接口的支持需求增加 ([Issue #2296](https://github.com/agentscope-ai/CoPaw/Issue/2296))。

## 8. 待处理积压
- **飞书图片消息崩溃** ([Issue #1383](https://github.com/agentscope-ai/CoPaw/Issue/1383)): 飞书发送图片导致不支持 Vision 的模型直接报错 400，该 Issue 虽已关闭但用户反馈仍有问题，建议复查。
- **钉钉 Webhook 过期** ([Issue #2153](https://github.com/agentscope-ai/CoPaw/Issue/2153)): 钉钉 `sessionWebhook` 过期时间未保存导致定时推送失败，涉及核心 Channel 功能，需尽快处理。
- **Help Wanted 任务列表** ([Issue #430](https://github.com/agentscope-ai/CoPaw/Issue/430)): 维护者列出的待认领任务列表，欢迎社区贡献者参与。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026-03-26 动态日报。

---

# ZeptoClaw 项目动态日报 (2026-03-26)

**数据来源**: github.com/qhkm/zeptoclaw
**分析周期**: 过去 24 小时

## 1. 今日速览
ZeptoClaw 今日处于**极高活跃度**状态，社区与核心团队进行了大量代码合并与功能迭代。过去 24 小时内共有 **30 个 PR 更新**（其中 22 个已合并/关闭）和 **11 个 Issues 更新**。项目重心明显向 **Telegram 集成增强**（消息线程、UI 反馈）和 **底层工具链稳定性**（容器检测、浏览器自动化）倾斜。虽然未发布新版本，但大量功能分支的落地表明版本迭代已接近成熟阶段。

## 2. 版本发布
- **状态**: 本日无新版本发布。
- **分析**: 尽管 Release 为空，但合并了多项关键功能（ACP 协议、浏览器工具、Telegram 改进），推测核心团队正在进行大规模的 `main` 分支集成，预计近期会有新版本 Tag 诞生。

## 3. 项目进展
今日共有 **22 个 PR 被合并**，主要集中在“Agent 交互体验”与“底层协议支持”两大方向：

*   **🌐 浏览器自动化支持**:
    合并了 `feat(tools): add BrowserTool` ([PR #436](https://github.com/qhkm/zeptoclaw/pull/436))，引入了基于 `agent-browser` 的 CLI 工具，并实现了 Lightpanda 与 Chrome 的智能回退机制。这标志着 ZeptoClaw 现在具备了原生 Web 交互与自动化能力。
*   **📱 Telegram 体验大幅优化**:
    *   **消息线程**: [PR #432](https://github.com/qhkm/zeptoclaw/pull/432) 实现了 Telegram 消息的 "reply-to" 线程模式，解决了群聊中消息混乱的问题。
    *   **UI 反馈**: [PR #430](https://github.com/qhkm/zeptoclaw/pull/430) 增加了 "眼睛" 👀 (收到) 和 "勾" ✅ (完成) 的 Emoji 反应，提升了机器人的响应感知。
    *   **格式修复**: [PR #437](https://github.com/qhkm/zeptoclaw/pull/437) 修复了 HTML 链接渲染中的属性转义问题，防止潜在的 XSS 风险。
*   **🔒 安全性与协议加固**:
    *   [PR #440](https://github.com/qhkm/zeptoclaw/pull/440) 加固了 ACP HTTP 通道的安全性，增加了 CORS 限制和路径遍历验证。
    *   [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) 正式落地了 ACP (Agent Client Protocol) 的 stdio 与 HTTP 实现，为作为子进程集成到其他客户端铺平了道路。
*   **🛠️ 开发体验**:
    [PR #426](https://github.com/qhkm/zeptoclaw/pull/426) 及后续修复优化了 `lint-container.sh` 对 Podman/Docker 的检测逻辑，解决了混合环境下的构建失败问题。

## 4. 社区热点
*   **最活跃 Issue**: **[bug] scripts/lint-container.sh abends** ([Issue #424](https://github.com/qhkm/zeptoclaw/issues/424))
    *   **热度**: 8 条评论
    *   **分析**: 用户报告在使用 Podman 时脚本崩溃。讨论揭示了在 Docker/Podman 混合安装环境下，CLI 兼容性检测的复杂性。虽然 [PR #426](https://github.com/qhkm/zeptoclaw/pull/426) 已尝试修复，但维护者 `qhkm` 随即发起了更深入的改进 ([Issue #435](https://github.com/qhkm/zeptoclaw/issues/435))，表明团队对开发环境兼容性的重视。
*   **备受期待的功能**: **Improve Telegram support** ([Issue #331](https://github.com/qhkm/zeptoclaw/issues/331))
    *   随着今日一系列 Telegram 相关 PR 的合并，该 Issue 正式关闭，用户对格式化渲染和交互反馈的需求已得到满足。

## 5. Bug 与稳定性
本日报告并处理了多个关键 Bug，修复响应速度极快：

*   **P1-Critical | 模型发现回归**: [Issue #416](https://github.com/qhkm/zeptoclaw/issues/416)
    *   **问题**: 之前的合并导致带有前缀的模型 ID（如 `anthropic/...`）路由失败。
    *   **状态**: 已在今日修复并关闭。
*   **Bug | Telegram 照片静默丢弃**: [Issue #419](https://github.com/qhkm/zeptoclaw/issues/419)
    *   **问题**: 机器人忽略图片消息。
    *   **状态**: 已修复，现已支持图片处理。
*   **Bug | 竞态条件**: [Issue #415](https://github.com/qhkm/zeptoclaw/issues/415)
    *   **问题**: 并发消息导致输入指示器 错乱。
    *   **状态**: 已通过重构逻辑修复。
*   **安全 | ACP CORS 风险**: [Issue #434](https://github.com/qhkm/zeptoclaw/issues/434)
    *   **问题**: 配置 `auth_token` 时仍允许任意源跨域请求。
    *   **状态**: [PR #440](https://github.com/qhkm/zeptoclaw/pull/440) 已通过移除特定条件下的 `Access-Control-Allow-Origin: *` 解决。

## 6. 功能请求与路线图信号
*   **Web 浏览器工具**: 随着今日 [PR #442](https://github.com/qhkm/zeptoclaw/pull/442) 的提出（基于已合并的 #436），项目正在完善 Web 自动化能力，支持 Lightpanda 和 Chrome 回退。
*   **Github Skill 深度扫描**: [Issue #285](https://github.com/qhkm/zeptoclaw/issues/285) 提出的 `SKILL.md` 检测功能已合并。这将显著提高 Agent 在 Github 仓库中查找技能定义的准确性。
*   **智能容器检测**: [Issue #435](https://github.com/qhkm/zeptoclaw/issues/435) 指出当前的硬编码偏好逻辑不可持续，提出了更智能的运行时检测方案，对应的 [PR #441](https://github.com/qhkm/zeptoclaw/pull/441) 正在待合并状态。

## 7. 用户反馈摘要
*   **痛点 - 容器工具链**: 开发者 `taqtiqa-mark` 反馈在 Podman 环境下构建极其困难，且错误信息不够直观。用户期望 `make lint` 等命令能“开箱即用”，无需手动配置环境变量。
*   **痛点 - Telegram 交互**: 用户反馈之前的机器人像“无头苍蝇”，没有输入提示也没有已读回执，发送图片没反应。今日的更新彻底解决了这些体验问题。
*   **场景 - 自动化测试**: 有用户尝试将 ZeptoClaw 集成到 ACP 客户端中（[Issue #434](https://github.com/qhkm/zeptoclaw/issues/434) 评论），显示出该项目作为后端 Agent 引擎的潜力。

## 8. 待处理积压
*   **关键 PR 等待合并**:
    *   [PR #441 (fix: smarter container engine detection)](https://github.com/qhkm/zeptoclaw/pull/441): 旨在彻底解决 Docker/Podman 检测问题，建议维护者优先 Review 以改善开发者体验。
    *   [PR #442 (BrowserTool)](https://github.com/qhkm/zeptoclaw/pull/442): 扩展浏览器功能，依赖项较多，需关注测试覆盖率。
*   **长期未响应**:
    *   暂无长期搁置的高优 Issue，项目处于活跃清理积压状态。

---
*本报告由 AI 自动生成，基于 GitHub 2026-03-26 数据快照。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>