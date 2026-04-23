# OpenClaw 生态日报 2026-03-21

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-20 22:02 UTC

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

以下是基于 2026-03-21 数据生成的 OpenClaw 项目动态日报。

---

# 📊 OpenClaw 项目日报 (2026-03-21)

## 1. 今日速览
OpenClaw 社区今日保持**极高活跃度**，24小时内 Issues 与 PR 更新量均达到 **500 条**，显示项目正处于快速迭代与功能扩展的高峰期。虽然今日无新版本发布，但社区围绕**多语言支持 (i18n)**、**搜索服务商更换**以及**上下文引擎**等核心议题展开了激烈讨论。开发者们主要致力于解决近期版本引入的回归问题（特别是 WebSocket 连接稳定性），并积极提交针对 WhatsApp、Discord 等渠道的体验优化 PR。整体来看，项目核心功能趋于稳定，正逐步完善生态兼容性与细节体验。

## 2. 版本发布
*   **今日无新版本发布。**

## 3. 项目进展
今日共有 **240 个 PR 被合并或关闭**（仍有 260 个待合并），主要进展集中在**稳定性修复**与**渠道功能增强**：

*   **核心架构优化**：
    *   [PR #51298](https://github.com/openclaw/openclaw/pull/51298) **修复了 Agent 死循环问题**：解决了当队列中存在旧消息时，Agent 在完成任务后会无限重播上一任务的重大 Bug。
    *   [PR #51191](https://github.com/openclaw/openclaw/pull/51191) **引入上下文引擎维护钩子**：为上下文引擎插件增加了 `maintain()` 生命周期，支持无停机上下文压缩，显著提升长对话稳定性。
    *   [PR #51267](https://github.com/openclaw/openclaw/pull/51267) **强化上下文截断健壮性**：防止因文本块格式错误导致的崩溃。

*   **渠道与集成增强**：
    *   [PR #51302](https://github.com/openclaw/openclaw/pull/51302) & [PR #51290](https://github.com/openclaw/openclaw/pull/51290) **完善 WhatsApp 引用回复功能**：支持在 WhatsApp Web 中显示原生引用回复。
    *   [PR #51291](https://github.com/openclaw/openclaw/pull/51291) **Telegram 投票支持**：修复了 `sendMessage` 无法正确发送投票的问题。
    *   [PR #50339](https://github.com/openclaw/openclaw/pull/50339) **SoundChain 集成**：提交了一个大型扩展，允许 Agent 在去中心化音乐社交网络中注册为真实用户。

*   **安全与修复**：
    *   [PR #48590](https://github.com/openclaw/openclaw/pull/48590) **权限提升安全修复 (Phase 1)**：修复了 "Always Allow" 可能被滥用于提权的漏洞，收紧了 Host Env 覆盖处理。
    *   [PR #51294](https://github.com/openclaw/openclaw/pull/51294) **Telegram 防崩溃**：增加了全局发送队列，防止并发任务触发 429 限流导致应用崩溃。

## 4. 社区热点
今日讨论最热烈的话题集中在**本地化支持**、**第三方服务变更**及**Agent 行为控制**：

1.  **国际化 (i18n) 支持困境** [Issue #3460](https://github.com/openclaw/openclaw/issue/3460) 👍 4 | 💬 106
    *   **核心诉求**：社区强烈希望 OpenClaw 支持多语言。官方回应承认需求合理性，但表示目前**维护带宽不足**以支持多语言长期维护。这引发了关于如何通过社区贡献机制来实现 i18n 的讨论。

2.  **Brave Search API 收费问题** [Issue #16629](https://github.com/openclaw/openclaw/issue/16629) 👍 5 | 💬 15
    *   **核心诉求**：Brave Search API 取消免费计划，导致 `web_search` 工具成本增加。社区正在讨论替代方案（如 DuckDuckGo 或 Tavily），这直接关联到 [Issue #12034](https://github.com/openclaw/openclaw/issue/12034) (添加 Tavily 支持，已关闭)。

3.  **外部记忆体 API 需求** [Issue #49233](https://github.com/openclaw/openclaw/issue/49233) 👍 0 | 💬 10
    *   **核心诉求**：高级用户提议引入外部记忆提供商 API，旨在将当前的 30-60 秒压缩停顿减少到 <100ms，实现零感知的上下文压缩。

4.  **文本泄露到消息频道** [Issue #25592](https://github.com/openclaw/openclaw/issue/25592) 👍 0 | 💬 11
    *   **核心诉求**：Agent 在工具调用间的内部思考文本（如错误处理、自言自语）意外发送到了 Slack/iMessage 等用户可见频道，严重影响用户体验。

## 5. Bug 与稳定性
今日报告了多个**影响使用的回归问题**，主要集中在连接稳定性与认证：

| 严重程度 | 问题 | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| 🔴 **高** | [Issue #6156](https://github.com/openclaw/openclaw/issue/6156) | **macOS Gateway 启动失败**：Setup Wizard 卡在 "Retry"，导致 macOS 用户无法初始化。 | Open |
| 🔴 **高** | [Issue #49191](https://github.com/openclaw/openclaw/issue/49191) | **Google Vertex ADC 认证失败**：使用默认凭证 (ADC) 时传递了错误的 sentinel key，导致 401 错误。 | Open |
| 🟠 **中** | [Issue #44906](https://github.com/openclaw/openclaw/issue/44906) | **UI 界面遮挡**：上下文限制警告图标在 Chrome/Safari 下异常放大，完全遮挡聊天视图。 | Open |
| 🟠 **中** | [Issue #45311](https://github.com/openclaw/openclaw/issue/45311) | **Slack Socket Mode 失效**：升级至 2026.3.12 后无法接收 inbound 事件。 | Open |
| 🟠 **中** | [Issue #46892](https://github.com/openclaw/openclaw/issue/46892) | **WS 握手超时**：3秒超时设置过于激进，导致繁忙时出现伪 "gateway closed" 错误。 | Closed (讨论中) |
| 🟢 **低** | [Issue #49228](https://github.com/openclaw/openclaw/issue/49228) | **Web UI 样式溢出**：Cron 任务条目超长文本溢出容器边界。 | Open |

**已修复 (PR 阶段):**
*   [PR #51298](https://github.com/openclaw/openclaw/pull/51298) 修复了 Agent loop 死循环问题。
*   [PR #51260](https://github.com/openclaw/openclaw/pull/51260) 修复了 Discord Codex resume picker 按钮立即过期的问题。

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动态，未来的版本可能会侧重于以下方向：

1.  **模块化搜索提供商**：鉴于 Brave Search 收费，社区提出的 [Issue #11399](https://github.com/openclaw/openclaw/issue/11399) (可扩展 web_search 插件) 和 [Issue #12034](https://github.com/openclaw/openclaw/issue/12034) (集成 Tavily) 极有可能被纳入优先开发计划。
2.  **会话标签 UI 增强**：[Issue #50077](https://github.com/openclaw/openclaw/issue/50077) 请求在 Control UI 头部显示 session label，改善多会话管理体验。
3.  **最新模型支持**：[Issue #50265](https://github.com/openclaw/openclaw/issue/50265) 要求支持 OpenAI 最新发布的 GPT-5.4 mini/nano 模型。
4.  **Exec 审批增强**：[PR #48567](https://github.com/openclaw/openclaw/pull/48567) 正在为 Slack 添加 Block Kit 审批按钮，这将统一跨平台的命令执行安全确认体验。

## 7. 用户反馈摘要
*   **痛点**：
    *   **连接稳定性**：用户反映在升级到 2026.3.13 版本后，WebSocket 连接极其不稳定，经常遇到 "gateway closed (1000)" 错误 ([Issue #50438](https://github.com/openclaw/openclaw/issue/50438))。
    *   **文档缺失**：高级用户抱怨缺乏 `openclaw.json` 的公开 JSON Schema，导致 IDE 无法自动补全，且配置错误难以排查 ([Issue #22278](https://github.com/openclaw/openclaw/issue/22278))。
    *   **环境兼容性**：在特定环境（如 nvm 安装的 Node.js、Arch Linux）下，TLS 证书问题导致 `web_fetch` 失效 ([Issue #49088](https://github.com/openclaw/openclaw/issue/49088))。

*   **好评/期待**：
    *   社区对 **SoundChain** 这种赋予 Agent "公民身份" 的扩展表现出浓厚兴趣。
    *   对于 **External Memory Provider API** 的提案反响积极，表明专业用户对长上下文处理的性能要求极高。

## 8. 待处理积压
以下重要 Issue 长期未获解决或处于 Stale 状态，建议维护者优先关注：

1.  **[Issue #11038](https://github.com/openclaw/openclaw/issue/11038) [Stale]**: 上下文损坏时，会将原始 API 错误直接发送到聊天界面，缺乏优雅处理。
2.  **[Issue #21001](https://github.com/openclaw/openclaw/issue/21001) [Stale]**: Telegram 中 `reactionNotifications=own` 配置无效，用户无法收到 DM 反应通知。
3.  **[Issue #22562](https://github.com/openclaw/openclaw/issue/22562) [Stale]**: Docker 构建失败，因 TypeScript 错误阻塞了通过 Docker 部署的用户。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-21)

## 1. 生态全景
2026年3月的开源 AI 智能体生态呈现出**"核心稳定、边缘爆发"**的态势。以 **OpenClaw** 为首的成熟项目已进入深水区，核心功能趋于稳定，正通过上下文引擎优化和 Security Fix 来巩固企业级可用性；而 **NanoBot**、**Zeroclaw** 等挑战者则处于功能井喷期，通过 Rust 重写、多模态支持和硬件集成寻求差异化突破。此外，**专业化分工**趋势明显：通用 Agent 框架之外，出现了针对边缘计算、去中心化社交网络和特定 IM 平台的垂直解决方案。

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 | PR 活跃度 | 今日发布 | 健康度/阶段 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥🔥🔥🔥🔥 (500+) | 🔥🔥🔥🔥🔥 (240 merged) | None | 🟢 **成熟稳定** (Security/i18n) | Security, Context Engine, i18n |
| **NanoBot** | 🔥🔥🔥 (38) | 🔥🔥🔥🔥 (69) | None | 🟡 **快速迭代** (Rust Refactor) | Rust MVP, Native Multi-modal, Feishu |
| **Zeroclaw** | 🔥🔥 (50) | 🔥🔥 (39 merged) | v0.5.4 | 🟡 **功能扩展** (Multi-model) | AliCloud, ARM64, Policy Security |
| **PicoClaw** | 🔥 (21) | 🔥🔥🔥 (64) | Nightly | 🟡 **积极开发** (Bug Fixing) | E2EE, TTS/ASR, Android DNS |
| **LobsterAI** | 🔥🔥🔥 (36) | 🔥 (11 merged) | v2026.3.20 | 🔴 **攻坚期** (Stability) | Privacy Leak, Feishu/WeCom, SQLite |
| **NanoClaw** | 🔥 (10) | 🔥🔥🔥 (25) | None | 🟡 **功能扩张** (Web/A2A) | A2A Protocol, Twilio, Mem0 |
| **CoPaw** | 🔥🔥🔥 (50) | 🔥🔥 (24 merged) | v0.1.0.post1 | 🟢 **稳步上升** (User Feedback) | Task Cancel, Feishu, Sandbox |
| **IronClaw** | 🔥 (45) | 🔥 (13 merged) | v0.21.0 | 🟢 **质量内修** (Concurrency) | SSRF Fix, TOCTOU, LRU Cache |
| **TinyClaw** | 🧊 (0) | 🔥🔥 (5) | v0.0.16 | 🟢 **架构重构** (UX Focus) | Zero-config, Adapter Pattern |
| **Moltis** | 🔥 (4) | 🔥 (1 closed) | None | 🟠 **维护期** (Backlog) | Windows Fix, Matrix, Gemini |
| **EasyClaw** | 🔥 (1) | 🔥 (2 closed) | v1.7.3 | 🟢 **体验优化** (UI/Install) | macOS Gatekeeper, UI Redesign |

## 3. OpenClaw 在生态中的定位

*   **核心参照物与连接器**：OpenClaw 是生态中的"基准"，其他项目（如 LobsterAI, Zeroclaw, Moltis）在架构设计、配置文件格式甚至 Issue 描述上均与之对标或兼容。它不仅是一个独立项目，更是某种事实上的"协议标准"。
*   **优势**：**生态规模与渠道广度**。OpenClaw 对主流 IM（WhatsApp, Discord, Slack, Telegram）的支持最为完善且经过实战检验。其上下文引擎维护钩子和安全策略机制比追赶者更成熟。
*   **技术路线差异**：相比 NanoBot 激进的 Rust 重写和 PicoClaw 的硬件化，OpenClaw 坚持在现有技术栈上进行**深度优化**（如上下文压缩、无停机维护），更注重企业级的**稳定性与安全性**（如修复提权漏洞），而非激进的架构替换。

## 4. 共同关注的技术方向

1.  **本地化与多模型支持**
    *   **现象**：Brave Search 收费引发 OpenClaw 社区震动；Zeroclaw 新增阿里云百炼；CoPaw 和 PicoClaw 用户强烈要求兼容国内模型（Qwen, DeepSeek）。
    *   **诉求**：**"去单一依赖"**。开发者和用户不再满足于 OpenAI 单一生态，强烈要求支持 OpenAI-Compatible API、本地模型及国产大模型。

2.  **长期记忆与上下文压缩**
    *   **涉及项目**：OpenClaw, NanoClaw, IronClaw, NanoBot。
    *   **趋势**：从简单的对话存储转向**智能记忆管理**。OpenClaw 引入 `maintain()` 钩子，NanoClaw 集成 Mem0 + Neo4j，IronClaw 讨论分层摘要。大家都在试图解决长对话下的 Token 成本和遗忘问题。

3.  **安全性与权限控制**
    *   **涉及项目**：OpenClaw, Zeroclaw, IronClaw, Moltis。
    *   **趋势**：随着 Agent 能力增强（如执行 Shell、Git 操作），安全回归视线。OpenClaw 修复提权漏洞，Zeroclaw 讨论策略配置复杂度，Moltis 防止 Git Hook 绕过。**"安全且可用"**（Secure but Usable）是共同的挑战。

4.  **IM 集成深化**
    *   **涉及项目**：几乎所有项目。
    *   **趋势**：**多模态交互**（WhatsApp 图片、Telegram TTS）和**实时流**成为标配功能。对飞书/企业微信/钉钉的支持是国内项目的必争之地。

## 5. 差异化定位分析

*   **OpenClaw & CoPaw**：**全能型通用助手**。
    *   侧重于广泛的渠道兼容性和企业级部署。CoPaw 更像是 OpenClaw 的一个轻量化、Web UI 更友好的分支，侧重于易用性和多租户管理。
*   **NanoBot & Zeroclaw**：**高性能与极客向**。
    *   NanoBot 试图通过 Rust 重写解决性能瓶颈，强调原生多模态；Zeroclaw 则强调 ARM/IoT 支持（RPi GPIO）和模块化工具链，吸引嵌入式和边缘 AI 开发者。
*   **LobsterAI**：**企业 IM 深度集成**。
    *   专注于解决国内企业环境（网易 POPO、飞书、企微）的特定痛点，虽然目前稳定性面临挑战，但方向明确。
*   **PicoClaw**：**端侧与隐私优先**。
    *   侧重于 Matrix E2EE 和 Android/RPi 等移动/边缘环境，强调隐私保护和去中心化。
*   **TinyClaw**：**极简主义**。
    *   通过 Adapter 模式解耦，追求零配置体验，试图成为开发者定制 Agent 的轻量级内核。

## 6. 社区热度与成熟度

*   **成熟稳定层**：**OpenClaw**。虽然今日无发版，但 PR 合并量巨大且多为修复和优化，社区讨论（i18n, Search API）具有战略性，显示出项目已度过"从 0 到 1"的混乱期，进入精细化运营。
*   **快速成长层**：**NanoBot, Zeroclaw, PicoClaw**。这些项目 Issue 和 PR 双高，功能更新频繁（Rust MVP, ARM support），处于争夺用户心智的关键期。
*   **攻坚/调整层**：**LobsterAI**。虽然热度高，但主要集中在 Bug 投诉（隐私泄露、安装失败），项目正处于架构承压期，需尽快解决稳定性问题以留存用户。
*   **垂直探索层**：**NanoClaw, IronClaw, TinyClaw**。在特定领域（A2A 协议、并发安全、零配置）进行深度挖掘，社区规模虽不及头部，但贡献者质量较高。

## 7. 值得关注的趋势信号

1.  **Agent 身份实体化**：OpenClaw 社区提及的 **SoundChain** 集成（Agent 在去中心化网络注册为真实用户）和 **NanoBot** 的 Telegram 投票功能，预示着 AI Agent 正在从"对话工具"转变为具有"数字公民身份"的实体，具备参与社交治理的能力。
2.  **模型提供商的"春秋战国"**：Brave Search 收费和阿里云百炼的快速集成信号表明，**模型路由层** 将成为 Agent 框架的标配组件。开发者应优先设计可插拔的 Provider 架构，以应对模型市场的频繁变动。
3.  **安全与易用性的博弈**：Zeroclaw 用户抱怨"安全策略太严无法使用"，而 OpenClaw 和 IronClaw 正在收紧权限。这表明 **"策略即代码"（Policy as Code）** 或 **分级权限管理** 将是下一个版本的必选项，需要在安全审计与用户体验之间找到平衡点。
4.  **非代码环境的部署挑战**：LobsterAI (Intel Mac), Moltis (Windows Lock), EasyClaw (macOS Gatekeeper) 均报告了安装问题。对于 Agent 开发者而言，**跨平台打包与分发**（尤其是处理 OS 级权限和依赖）仍是阻碍非技术用户 adoption 的最大门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-21)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，社区贡献与反馈呈现井喷态势。过去24小时内共有 **107 次 Issues/PR 更新**，其中 PR 活跃度（69条）超过 Issues（38条），显示出开发迭代正在全速推进。项目今日主要聚焦于**多渠道集成优化**（飞书、Telegram、WhatsApp、QQ、Teams）以及**底层架构增强**（Rust 重写、原生多模态、可观测性）。虽然无新版本发布，但多个功能性 PR 已合并至主线，预示着下一次更新将包含大量激动人心的新特性。

## 2. 版本发布
**无新版本发布。** 社区正在积极合并代码，积蓄力量准备下一次 major 或 minor 版本更新。

## 3. 项目进展
今日共有 **32 个 PR 被合并/关闭**，显著推进了以下核心功能：

- **渠道与连接性增强**：
  - **飞书话题群支持**：[PR #2307](https://github.com/HKUDS/nanobot/pull/2307) 解决了 Bot 在话题群中回复混乱的问题，现可精准回复至对应话题线程。
  - **文件上传优化**：[PR #2306](https://github.com/HKUDS/nanobot/pull/2306) 为 QQ 和企业微信增加了 Base64 媒体上传支持，摆脱了对公网 IP 的依赖。
  - **CLI 体验优化**：[PR #2123](https://github.com/HKUDS/nanobot/pull/2123) 合并，CLI 现支持 `-h` 短参数。

- **架构与生态演进**：
  - **Rust 版本初现**：[PR #2313](https://github.com/HKUDS/nanobot/pull/2313) 提交了 `nanobot-rs` MVP，标志着项目正式开启高性能 Rust 重写计划。
  - **Web 搜索多源支持**：[PR #2012](https://github.com/HKUDS/nanobot/pull/2012) 合并，新增 Tavily 搜索提供商，并支持自动故障转移。
  - **原生多模态感知**：[PR #2304](https://github.com/HKUDS/nanobot/pull/2304) 实现了 Agent 自主获取并理解图像上下文的能力，不再依赖外部 OCR。
  - **评估框架**：[PR #2283](https://github.com/HKUDS/nanobot/pull/2283) 引入了确定性评估框架，有助于量化模型在工具调用和任务完成上的表现。

## 4. 社区热点
今日社区讨论主要集中在**易用性**与**特定平台集成**上：

1.  **WebUI 需求强烈**：[Issue #1922](https://github.com/HKUDS/nanobot/issues/1922) (6👍, 6💬) 社区用户开发了第三方 Web 管理面板，反映了用户对可视化管理和多用户支持的迫切需求。
2.  **Telegram 消息重复显示**：[Issue #2235](https://github.com/HKUDS/nanobot/issues/2235) (6👍, 3💬) 严重影响用户体验，可能与流式响应机制有关。
3.  **飞书配置与连接**：[Issue #215](https://github.com/HKUDS/nanobot/issues/215) (24💬) 和 [Issue #218](https://github.com/HKUDS/nanobot/issues/218) (23💬) 依然占据讨论榜首，主要涉及长连接配置和“发给自己”的调试功能，显示飞书用户群体的活跃。
4.  **交互式配置向导**：[Issue #2018](https://github.com/HKUDS/nanobot/issues/2018) (9💬) 关于 `nanobot onboard` 的反馈积极，但 [Issue #2250](https://github.com/HKUDS/nanobot/issues/2250) 指出其尚不支持自定义配置文件路径（`-c` 参数），阻碍了多实例部署。

## 5. Bug 与稳定性
今日报告的关键 Bug 集中在**平台兼容性**和**工具调用循环**：

- **🔴 严重**：
  - **无限工具调用循环**：[Issue #2298](https://github.com/HKUDS/nanobot/issues/2298) 在使用小参数本地模型时极易触发，导致 Agent 假死。目前暂无合并的修复 PR。
  - **本地模型静默失败**：[Issue #2293](https://github.com/HKUDS/nanobot/issues/2293) 使用 Ollama + Qwen 时，一旦调用工具对话即中断，严重影响本地部署体验。
- **🟠 中等**：
  - **Telegram 重复响应**：[Issue #2235](https://github.com/HKUDS/nanobot/issues/2235) 可能与流式输出有关，影响视觉体验。
  - **企业微信服务重启端口占用**：[PR #2308](https://github.com/HKUDS/nanobot/pull/2308) 已提出修复方案（SO_REUSEPORT），等待合并。
  - **DashScope 不兼容**：[Issue #1927](https://github.com/HKUDS/nanobot/issues/1927) 因不支持 `tool_choice="required"` 导致记忆归档失败。

## 6. 功能请求与路线图信号
结合用户需求与开发动向，未来的路线图可能包含：

- **可观测性增强**：[Issue #2154](https://github.com/HKUDS/nanobot/issues/2154) 呼吁支持 LLM Trace（轨迹追踪），这在复杂 Agent 调试中至关重要。
- **思考模式可控**：[Issue #2240](https://github.com/HKUDS/nanobot/issues/2240) 用户希望手动开关模型的深度思考/推理模式。
- **多实例支持优化**：[Issue #2250](https://github.com/HKUDS/nanobot/issues/2250) 暴露了当前 CLI 在多配置文件管理上的短板，预计很快会有相关 PR 跟进。
- **Microsoft Teams 支持**：[PR #2129](https://github.com/HKUDS/nanobot/pull/2129) 正在开发中，预计很快合入 nightly 版本。

## 7. 用户反馈摘要
- **痛点**：
  - **幻觉与假执行**：[Issue #884](https://github.com/HKUDS/nanobot/issues/884) 用户反馈 Agent 有时会“假装”执行了任务，这在小模型上尤为明显，需要更强的验证机制。
  - **本地模型调试难**：频繁出现 Ollama 相关配置问题（#75, #45），且出错时往往静默或报模糊错误。
  - **飞书集成门槛高**：长连接和证书配置对新手不友好。
- **满意点**：
  - **`nanobot onboard`**：新用户对交互式配置向导评价很高，认为降低了上手难度。
  - **扩展性**：社区正在积极开发 WebUI 和各种 Channel（Teams, DingTalk），证明项目架构具备良好的可扩展性。

## 8. 待处理积压
- **[PR #2129 Microsoft Teams Channel](https://github.com/HKUDS/nanobot/pull/2129)**：已开启数日，建议维护者优先 Review 以支持更多办公场景。
- **[PR #2113 Web Search Fallback](https://github.com/HKUDS/nanobot/pull/2113)**：功能实用且影响面广，建议尽快推进合并以提升工具链稳定性。
- **[Issue #2154 LLM Trace](https://github.com/HKUDS/nanobot/issues/2154)**：作为企业级应用的关键能力，建议纳入中长期规划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-21)

你好！我是 AI 开源项目分析师。以下是 **Zeroclaw (zeroclaw-labs/zeroclaw)** 在 2026年3月21日的项目动态日报。

---

## 1. 今日速览

Zeroclaw 今日保持了**极高的开发活跃度**，单日发布了 **10 个版本**（从 v0.5.1-beta 到 v0.5.4 正式版），显示出项目正处于快速迭代和功能整合阶段。社区互动热烈，过去24小时内处理了 **50 条 Issues**（关闭 29 条）和 **50 条 PRs**（合并 39 条），不仅修复了多项关键 Bug，还新增了对阿里云百炼、Avian 等模型提供商的支持。整体来看，项目在**多渠道接入（QQ/Discord/Telegram）**和**底层工具链增强**方面取得了显著进展，但安全策略的默认配置引起了部分用户的困惑，值得团队关注。

## 2. 版本发布

今日连续发布了多个版本，最终定版为 **v0.5.4**。主要更新内容如下：

### **v0.5.4 (Latest)**
*   **新增功能**:
    *   **Channel**: 增强了 QQ 频道支持，新增富媒体消息和 Cron 定时发送功能。
    *   **Providers**: 新增 **Avian** 作为 OpenAI 兼容提供商 ([PR #4076](https://github.com/zeroclaw-labs/zeroclaw/pull/4076))。
    *   **Tools**: Jira 工具新增 `myself` 和 `list_projects` 操作 ([PR #4061](https://github.com/zeroclaw-labs/zeroclaw/pull/4061))。

### **v0.5.3**
*   **系统架构**: CI 流程新增 ARM 交叉编译目标，优化了对 SBC（单板计算机）的 support。
*   **Providers**: 新增 **阿里云百炼** 提供商支持。
*   **Tools**: 新增 Google Workspace 操作级白名单机制；添加文本浏览工具。
*   **配置**: Gateway 请求超时时间现可通过环境变量配置。

### **v0.5.2**
*   **交互控制**: 新增 `/stop` 命令以取消正在进行的任务。
*   **Channel 增强**:
    *   Discord 和 Mattermost 支持 `interrupt_on_new_message`（新消息打断）。
    *   Telegram 频道支持 TTS 语音回复。
*   **安全**: 优化了安全策略摘要的注入机制。

**⚠️ 升级注意**: v0.5.3 开始支持 ARM 架构，IoT 开发者值得关注；v0.5.2 引入的 `/stop` 命令可能改变了任务中断的逻辑，建议测试现有工作流。

---

## 3. 项目进展

今日共有 **39 个 PR 被合并**，项目在多模块并行开发上效率极高。

*   **功能增强**:
    *   **Slack 反应支持**: 实现了 Slack 频道的 `add_reaction` 和 `remove_reaction` 功能 ([PR #4089](https://github.com/zeroclaw-labs/zeroclaw/pull/4089))。
    *   **Git 工具增强**: `git_operations` 工具新增 clone, pull, fetch 等操作，并支持指定子目录 ([PR #4085](https://github.com/zeroclaw-labs/zeroclaw/pull/4085))。
    *   **硬件支持**: 正在审查对 RPi GPIO 和 I2C/SPI 的原生支持 ([PR #3517](https://github.com/zeroclaw-labs/zeroclaw/pull/3517))。
    *   **Dashboard UI**: 正在开发面向渠道、技能和 MCP 服务器的仪表盘界面 ([PR #4036](https://github.com/zeroclaw-labs/zeroclaw/pull/4036))。

*   **重要修复**:
    *   **Cron 语义修正**: 修复了 Cron 表达式中 `1-5` 被误解析为 Sun-Thu 而非 Mon-Fri 的问题 ([PR #4079](https://github.com/zeroclaw-labs/zeroclaw/pull/4079))。
    *   **技能安装**: 修复了从 ClawHub 安装技能时的 URL 解析问题 ([PR #4051](https://github.com/zeroclaw-labs/zeroclaw/pull/4051))。
    *   **ARM64 崩溃**: 解决了 daemon 在 ARM64 架构（如树莓派）上的静默崩溃问题 ([Issue #3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537))。

---

## 4. 社区热点

*   **🔥 [Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) [CLOSED] - "除了安全,什么功能也没有"**
    *   **热度**: 👍 6, 评论 43
    *   **分析**: 这是一个典型的新手入门摩擦问题。用户抱怨 Zeroclaw 的安全策略过于严格，导致在未手动配置的情况下无法安装 ffmpeg 或执行系统命令，认为 "Zeroclaw 只是聊天机器人"。
    *   **诉求**: 用户（尤其是个人玩家）希望有简单的“上帝模式”开关来禁用所有安全限制。这反映了**易用性与安全性之间的平衡**问题，文档引导可能需要优化。

*   **🌏 [Issue #3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) [CLOSED] - 支持阿里云百炼 Coding Plan**
    *   **热度**: 评论 9
    *   **分析**: 国内用户对阿里云百炼模型有强烈需求。该 Issue 提出后迅速得到响应并在 v0.5.3 中合并，显示了团队对**本地化模型生态**的重视和快速响应能力。

---

## 5. Bug 与稳定性

今日报告了多个影响体验的 Bug，部分已在最新版中修复：

*   **S0 - 严重风险 (已修复)**:
    *   [Issue #3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537): Daemon 在 ARM64 设备上静默退出。
    *   [Issue #4044](https://github.com/zeroclaw-labs/zeroclaw/issues/4044): DeepSeek API 返回 400 错误，提示上下文长度超限，可能是 Provider 侧配置问题。

*   **S1 - 阻塞工作流 (部分修复/待解决)**:
    *   [Issue #3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540): 编译了 Lark/Feishu 模块后无法启动。
    *   [Issue #4042](https://github.com/zeroclaw-labs/zeroclaw/issues/4042): Agent 无法发现或使用 MCP Server/Tools。
    *   [Issue #4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083): Web Search 工具在 CLI 可用，但在 Telegram/Feishu 等 Channel 中不可用。

*   **S3 - 边缘崩溃 (已修复)**:
    *   [Issue #4062](https://github.com/zeroclaw-labs/zeroclaw/issues/4062): 处理包含多字节字符（中文/日文）且超过 300 字节的工具参数时发生 Panic。此问题已被修复，涉及 UTF-8 边界处理。

---

## 6. 功能请求与路线图信号

*   **MCP Server 插件化**: [Issue #2856](https://github.com/zeroclaw-labs/zeroclaw/issues/2856) 请求支持将 MCP Server 作为插件配置，获得 3 个 👍。这符合 AI Agent 工具链标准化的趋势。
*   **长期记忆架构**: [Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) 提出基于 pgvector 和图数据库的 Database-first 记忆架构，这是一个架构级的重构提议，可能影响未来版本的数据层设计。
*   **Token 效率优化**: [Issue #3892](https://github.com/zeroclaw-labs/zeroclaw/issues/3892) 建议增加分析层以过滤不必要的上下文，这对在资源受限环境（如本地运行 Qwen）中运行 Zeroclaw 至关重要。

---

## 7. 用户反馈摘要

1.  **安全策略 vs. 易用性**: 多名用户反馈 Zeroclaw 相比 OpenClaw 配置更复杂，特别是安全策略导致工具无法执行，希望有更灵活的配置选项或更友好的错误提示。
2.  **Channel 功能不一致**: 用户指出某些工具（如 Web Search）仅在 CLI 模式下工作，在 IM 渠道（Telegram/Slack）中失效，希望实现功能对齐。
3.  **硬件/边缘计算支持**: 对 ARM64 和树莓派的支持受到社区欢迎，显示出 Zeroclaw 在 IoT 和边缘 AI 场景中的潜力。
4.  **模型提供商扩展**: 社区对国产大模型（阿里云百炼、DeepSeek）的集成需求迫切，且满意度较高（响应快）。

---

## 8. 待处理积压

*   **长期未解决的模块缺失**: [Issue #3753](https://github.com/zeroclaw-labs/zeroclaw/issues/3753) 指出旧分支中的部分工具在当前 Master 分支中丢失，标记为 S0 风险，目前仍未完全解决。
*   **Windows 安装体验**: [Issue #3693](https://github.com/zeroclaw-labs/zeroclaw/issues/3693) 提到 Windows 安装缺乏清晰的脚本（如 `.bat`），且功能模块开启逻辑复杂，影响了 Windows 用户的采纳。
*   **技能测试框架**: [Issue #3697](https://github.com/zeroclaw-labs/zeroclaw/issues/3697) 建议增加技能的自动化测试框架，目前尚未有官方 PR 跟进，这是提升生态质量的关键。

---
*日报生成时间: 2026-03-21T23:59:59Z | 数据来源: GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-03-21 的动态日报。

# PicoClaw 项目动态日报 (2026-03-21)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，社区贡献与核心功能迭代呈现井喷态势。过去24小时内共有 **21 条 Issue 更新** 和 **64 条 PR 更新**，其中待合并 PR高达 36 条，显示出社区贡献热情高涨但审核压力较大。项目发布了 `v0.2.3-nightly.20260320` 版本，持续集成流畅。今日重点聚焦于**多渠道适配（WhatsApp/Matrix端到端加密）**与**核心稳定性的修复（Cron任务/超时控制）**，整体处于快速迭代后的稳定性打磨期。

---

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.3-nightly.20260320)**
  - **类型**: 自动化构建 (Automated Build)
  - **更新内容**: 包含截至 `71ce2196` 提交的所有代码变更，主要涵盖了今日合并的文档修复、Android DNS 修复及 QQ 渠道文件上传功能。
  - **稳定性提示**: 官方标注 "may be unstable"，建议测试环境优先使用。
  - **变更日志**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展
今日共有 **28 条 PR 被合并或关闭**，主要集中在提升兼容性与修复阻塞性 Bug：

*   **核心修复**:
    *   **Android DNS 解析修复** ([#1835](https://github.com/sipeed/picoclaw/pull/1835)): 解决了 Android 环境下 DNS 解析异常的问题，提升了移动端部署的稳定性。
    *   **QQ 渠道本地文件上传** ([#1687](https://github.com/sipeed/picoclaw/pull/1687)): 修复了 Agent 生成的本地文件（如 PDF/HTML）无法通过 QQ 发送的问题，显著增强了 QQ 机器人的实用性。
*   **文档与国际化**:
    *   **大规模文档校对** ([#1819](https://github.com/sipeed/picoclaw/pull/1819), [#1837](https://github.com/sipeed/picoclaw/pull/1837)): 修复了 25+ 处文档描述不准确、15 个断裂链接，并补充了 5 种语言的翻译文件。这表明项目正致力于降低新手入门门槛。

---

## 4. 社区热点
今日社区讨论主要集中在 **扩展交互能力** 与 **架构增强**：

1.  **[Feature] 添加 TTS 和 ASR 支持** ([Issue #1648](https://github.com/sipeed/picoclaw/Issue/1648))
    *   **热度**: 16 条评论
    *   **分析**: 用户强烈希望赋予 PicoClaw 语音交互能力（听与说）。作者 `lxowalle` 提出了详细的架构设计，且已有相关 PR (#1642) 正在推进。这极有可能是下个版本的核心卖点。
2.  **[Feature] WebUI 支持 (重构中)** ([Issue #806](https://github.com/sipeed/picoclaw/Issue/806))
    *   **热度**: 7 点赞, 6 条评论
    *   **分析**: 核心路线图项目。旨在通过 Web UI 降低非技术用户的使用门槛。标记为 "Refactoring now"，表明目前正处于代码重构的关键期，社区对此期待值极高。
3.  **[Feature] LM Studio Easy Connect** ([Issue #28](https://github.com/sipeed/picoclaw/Issue/28))
    *   **热度**: 9 条评论
    *   **分析**: 用户希望更便捷地连接本地模型（如 LM Studio）。这反映了 PicoClaw 作为本地/私有 AI 网关的定位需求日益强烈。

---

## 5. Bug 与稳定性
今日报告了多个影响特定场景的关键 Bug，部分已有修复方案：

*   **P0 - 严重/阻塞**:
    *   **Cron 任务静默丢弃 LLM 响应** ([Issue #1058](https://github.com/sipeed/picoclaw/Issue/1058)): 当 `deliver=false` 时，LLM 的处理结果被静默丢弃，导致定时任务无效。已有修复 PR ([#1839](https://github.com/sipeed/picoclaw/pull/1839), [#1842](https://github.com/sipeed/picoclaw/pull/1842)) 提交，建议优先 Review。
*   **P1 - 功能异常**:
    *   **OpenRouter Free 模型无法使用** ([Issue #1790](https://github.com/sipeed/picoclaw/Issue/1790)): 报错 `minimax-m2.5:free is not a valid model ID`，疑似模型 ID 映射或兼容性问题。
    *   **aarch64 .deb 包无法安装** ([Issue #1763](https://github.com/sipeed/picoclaw/Issue/1763)): 依赖包冲突导致 ARM 架构安装失败。
    *   **配置加载失败** ([Issue #1491](https://github.com/sipeed/picoclaw/Issue/1491)): 持续报错 "no API key configured for model"。
*   **P2 - 安全与运维**:
    *   **CLI Provider 超时失效** ([PR #1847](https://github.com/sipeed/picoclaw/PR/1847)): 子进程无限期运行导致 Cron 任务失控。该 PR 已提交修复，增加了超时控制。

---

## 6. 功能请求与路线图信号
从 Open 状态的 PR 与 Issue 中，我们可以捕捉到 V0.3+ 版本可能的演进方向：

*   **端到端加密与隐私**:
    *   Matrix 渠道支持 E2EE 加密消息 ([Issue #1840](https://github.com/sipeed/picoclaw/Issue/1840) -> [PR #1841](https://github.com/sipeed/picoclaw/pull/1841))。这标志着项目开始触及高安全性通讯场景。
*   **多模态能力增强**:
    *   WhatsApp 原生多模态支持 ([PR #1843](https://github.com/sipeed/picoclaw/pull/1843))：增强图片/文件处理能力。
*   **Agent 智能化**:
    *   **事件驱动 Hooks 系统** ([Issue #1796](https://github.com/sipeed/picoclaw/Issue/1796)): 试图引入类似 OpenClaw 的被动触发机制，补齐 Agent 只能主动调用和定时触发的短板。
    *   **会话压缩** ([Issue #1836](https://github.com/sipeed/picoclaw/Issue/1836)): 解决长上下文导致的 Token 爆炸问题，这是长期记忆的关键前置功能。

---

## 7. 用户反馈摘要
从评论中提炼出的用户核心痛点：
*   **文档与引导不足**: 多个 Issue 提到配置困难，用户 `Sakurapainting` 直接指出项目 "provides insufficient guidance for users"，并提交了改进 PR ([#1830](https://github.com/sipeed/picoclaw/Issue/1830))。
*   **容错性期望**: 用户期望 LLM 调用失败（如 HTTP 500）时能自动重试，而不是直接挂起任务 ([Issue #629](https://github.com/sipeed/picoclaw/Issue/629))。
*   **Docker/Selinux 兼容性**: 在企业级 Linux 环境下的部署仍存在权限和安全策略冲突 ([Issue #1833](https://github.com/sipeed/picoclaw/Issue/1833))。

---

## 8. 待处理积压
*   **PR 审核积压严重**: 目前有 **36 个 PR 处于 Open 状态**，其中包含多个关键修复（如 Cron 修复 #1842, CLI 超时修复 #1847）。建议维护者尽快梳理并合并这些稳定性修复，以避免阻碍 Nightly 版本的质量。
*   **长期 Issue**:
    *   **LLM 失败重试机制** ([Issue #629](https://github.com/sipeed/picoclaw/Issue/629)): 2月提出至今未彻底解决，影响长时间运行任务的稳定性。
    *   **Telegram 实时流** ([Issue #1098](https://github.com/sipeed/picoclaw/Issue/1098)): 虽然 Issue 已关闭，但需确认是否已完全合并到主分支，社区对此功能需求较高。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-21 的动态日报。

### 1. 今日速览
NanoClaw 今日保持了极高的开发活跃度，社区贡献呈爆发式增长。过去 24 小时内新增了 **21 个待合并 PR**，涵盖 Web 端支持、Twilio WhatsApp 集成、Agent 间通信（A2A）等重磅功能，显示出项目正处于功能快速扩张期。虽然 Issues 中出现了关于数据库迁移和多租户隔离的 Bug 报告，但社区迅速响应并提交了修复 PR。总体而言，项目正从单一的 IM 机器人工具向多渠道、多模态的 AI Agent 平台演进。

### 2. 版本发布
- **无新版本发布**。目前项目处于密集的功能迭代阶段，大量 Feature PR 堆积在待合并状态，预计将在下一版本中集中释放。

### 3. 项目进展
今日共有 **4 个 PR 被合并/关闭**，主要集中在兼容性修复和功能扩展：
- **第三方 API 兼容性修复**：PR [#1203](qwibitai/nanoclaw PR #1203) 修复了 `ANTHROPIC_BASE_URL` 路径拼接问题，使得 NanoClaw 能够正确对接第三方兼容 API（如 `api.z.ai/api/anthropic`），这对私有化部署用户至关重要。
- **多渠道支持扩展**：
    - PR [#1298](qwibitai/nanoclaw PR #1298) 提议增加 Web Channel 和 Dashboard，虽然目前状态为 Closed（可能是草稿或需重新提交），但这表明项目正在探索图形化界面和多租户支持。
    - PR [#1294](qwibitai/nanoclaw PR #1294) 新增了 Twilio WhatsApp Channel，相比现有的 Baileys（逆向协议），提供了更稳定的官方 API 支持。

### 4. 社区热点
今日讨论焦点集中在**生态集成**与**用户体验增强**：
- **持久化记忆**：PR [#1256](qwibitai/nanoclaw PR #1256) 提议集成 Mem0 + Neo4j，通过复用现有向量数据库赋予 Agent 长期记忆能力，获得了较高关注。
- **容器化替代方案**：Issue [#957](qwibitai/nanoclaw Issue #957) 讨论了支持 Podman 替代 Docker，反映了部分 macOS/Linux 用户对无守护进程容器的需求。
- **文档不一致**：Issue [#1075](qwibitai/nanoclaw Issue #1075) 指出官网与 README 关于 Linux 支持状态的描述矛盾，虽是小问题，但影响了新用户的信任度。

### 5. Bug 与稳定性
今日报告了两个中等严重程度的 Bug，且均已出现修复方案，体现了社区的反应速度：
- **🔴 数据库迁移逻辑错误**：Issue [#1272](qwibitai/nanoclaw Issue #1272) 指出 Telegram 回填迁移错误地将所有私聊标记为群组（`is_group=1`），这将导致 Agent 上下文处理混乱。
- **🟠 运维风险**：Issue [#1284](qwibitai/nanoclaw Issue #1284) 报告了多租户环境下的命令串扰问题（IC01 处理了 IC00 的命令），暴露了共享 Operator 账户的安全隐患。
- **🟢 启动容错性**：Issue [#1289](qwibitai/nanoclaw Issue #1289) 提到缺少凭证时的“非快速失败”导致残留脏数据，PR [#1290](qwibitai/nanoclaw PR #1290) 已提交预检修复。

### 6. 功能请求与路线图信号
结合 Issues 和 PRs，可以看出项目下一阶段的路线图将聚焦于 **"连接"** 与 **"灵活性"**：
- **Agent 互联 (A2A)**：PR [#1295](qwibitai/nanoclaw PR #1295) 引入 A2A 协议，允许 NanoClaw 与 Claude Code、Cursor 等 IDE 工具联动，是迈向 Agentic Workflow 的关键一步。
- **去容器化运行**：PR [#1285](qwibitai/nanoclaw PR #1285) 提出直接运行模式（无需 Docker），大大降低了开发者的调试门槛和资源消耗。
- **多模态交互**：
    - Issue [#1288](qwibitai/nanoclaw Issue #1288) 请求支持读取 Emoji 反馈，增强 Agent 的感知能力。
    - PR [#1286](qwibitai/nanoclaw PR #1286) 正在完善 Telegram 的图片下载功能。

### 7. 用户反馈摘要
- **部署痛点**：用户强烈希望能摆脱 Docker Desktop 的限制（寻求 Podman 或 Direct Runner 支持），这表明核心用户群体倾向于轻量级、无干扰的运行环境。
- **机器人拟人化**：Issue [#1291](qwibitai/nanoclaw Issue #1291) 建议利用 WhatsApp 群描述作为 System Prompt，显示出用户希望根据不同群组场景快速定制 Agent 人格，而非修改全局配置。

### 8. 待处理积压
- **高风险 PR 积压**：目前有 **21 个待合并 PR**，其中包含多个大型功能（如 Web Channel, A2A, Mem0）。积压过多可能导致主分支落后于社区开发进度，增加未来合并冲突的风险，建议维护者优先进行代码冻结或分批合并。
- **长期未决 Issue**：Issue [#957](qwibitai/nanoclaw Issue #957)（Podman 支持）自 3 月 11 日开启至今，虽有点赞但无官方明确回应，建议标记为 "Help Wanted" 或列入路线图。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-21)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，随着 **v0.21.0** 版本的发布，项目重心明显转向**稳定性增强**与**性能优化**。Issue 活动总数达 45 条（17 条已关闭），PR 更新达 50 条，显示出维护团队对社区反馈的快速响应能力。自动化 CI 审查工具发现了多个关键并发问题，核心贡献者已迅速提交修复 PR，显示出成熟的项目治理能力。总体而言，项目正处于功能迭代与质量内修并重的健康阶段。

---

## 2. 版本发布

### **v0.21.0** (发布于 2026-03-20)
本次更新聚焦于**任务可靠性**、**搜索性能**与**扩展性**。

#### 核心更新:
*   **Failed Job 处理增强**: 为失败或卡住的任务添加了结构化回退产出，提升了 Agent 任务流的鲁棒性。([#236](https://github.com/nearai/ironclaw/pull/236))
*   **Workspace Search 性能优化**: 引入 LRU (最近最少使用) 嵌入缓存，显著降低 Workspace 搜索时的延迟与 Token 消耗。([#1423](https://github.com/nearai/ironclaw/pull/1423))
*   **Webhook 扩展**: 支持通过 Webhook 回调接收 Relay 事件，为外部监控系统集成提供了便利。([#1254](https://github.com/nearai/ironclaw/pull/1254))

#### 迁移建议:
*   **强烈建议**所有运行 v0.19.0 之前版本的用户在升级前检查数据库迁移脚本，特别是 `V6__routines.sql` 的校验和问题（详见 Issue #1328）。

---

## 3. 项目进展
今日共有 **13 个 PR 合并/关闭**，主要集中在安全修复与配置清理，显著提升了系统的安全性基础。

*   **🛡️ 安全性修复**
    *   **修复 SSRF 风险**: 关闭了 Issue #1103，修复了 Embedding Base URL 配置缺乏校验导致的服务端请求伪造风险。
    *   **清理配置冗余**: 合并 PR #1448，移除了初始化 `.env` 中不必要的 LLM 配置和 API Keys，降低了敏感信息泄露风险，明确了环境变量的职责边界。

*   **💅 UX 改进**
    *   **Web Gateway 亮色主题**: 响应社区强烈需求，Issue #761 已关闭，项目已添加亮色主题支持，改善了明亮环境下的可用性。

*   **🔧 维护性更新**
    *   **Routine 执行反馈**: Issue #697 已解决，修复了 Sandbox/Docker 不可用时 Routine 静默失败的问题，增强了运维可观测性。

---

## 4. 社区热点
今日讨论焦点集中在**认证阻塞**与**部署迁移**上，反映了用户在生产环境落地时的实际痛点。

1.  **[#902 Google OAuth 全面受阻](https://github.com/nearai/ironclaw/issues/902)**
    *   **热度**: 👍 0 | 💬 3
    *   **诉求**: 用户反馈 Google Suite WASM 工具在本地 v0.17.0 环境下 OAuth 认证被 Google 官方拦截页面阻断。由于涉及核心账号体系，社区迫切需要一个可选的 `gws fallback provider` 作为降级方案。
    *   **状态**: 相关修复方案正在 PR #931 中推进。

2.  **[#1328 v0.19.0 升级数据库迁移失败](https://github.com/nearai/ironclaw/issues/1328)**
    *   **热度**: 👍 2 | 💬 3
    *   **诉求**: 用户报告从旧版升级到 v0.19.0 时，`V6__routines` 迁移脚本的 Checksum 不匹配导致启动失败。这是一个典型的破坏性变更问题，影响了现有用户的平滑升级路径。

---

## 5. Bug 与稳定性
今日 Staging CI 自动审查表现出色，捕捉到了多个高严重级别的并发 Bug，且均已由核心团队认领修复。

| 严重级别 | Issue | 描述 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **🔴 CRITICAL** | [#1486](https://github.com/nearai/ironclaw/issues/1486) | **TOCTOU 竞态条件**：审批线程解析中存在 Time-of-check to time-of-use 漏洞。 | ⏳ 修复中 (PR [#1497](https://github.com/nearai/ironclaw/pull/1497)) |
| **🔴 CRITICAL** | [#1485](https://github.com/nearai/ironclaw/issues/1485) | **权限绕过**：跨通道审批线程劫持，允许恶意用户接管其他通道的会话。 | ✅ **已修复** (PR [#1495](https://github.com/nearai/ironclaw/pull/1495)) |
| **🔴 CRITICAL** | [#1429](https://github.com/nearai/ironclaw/issues/1429) | **性能隐患**：Embedding 缓存每次命中时都在克隆数据，导致不必要的内存拷贝。 | ✅ 已关闭 (已在 v0.21.0 中重构) |
| **🟠 HIGH** | [#1487](https://github.com/nearai/ironclaw/issues/1487) | **逻辑缺陷**：非现有审批线程的回退逻辑不完整。 | ⏳ 待确认 |
| **🟠 HIGH** | [#1431](https://github.com/nearai/ironclaw/issues/1431) | **惊群效应**：并发请求同一未缓存 Key 时缺乏锁机制，可能导致后端压力激增。 | ⏳ 待确认 |

---

## 6. 功能请求与路线图信号
今日涌现出大量关于 **Memory (记忆系统)** 和 **Debug (调试能力)** 的增强提案，显示出项目正向更智能、更易用的 Agent 框架演进。

*   **记忆系统智能化 (P1 优先级)**:
    *   **[#1474 自动提取结构化记忆](https://github.com/nearai/ironclaw/issues/1474)**: 提议 Agent 自动从对话中提取记忆，而非仅依赖手动调用 `memory_write`。
    *   **[#1473 分层上下文摘要](https://github.com/nearai/ironclaw/issues/1473)**: 引入 L0/L1 分层摘要机制，旨在将 Context 注入量减少 50%-75%。
    *   **[#1278 磁盘导出](https://github.com/nearai/ironclaw/issues/1278)**: 提议将 Workspace 核心文件（如 `MEMORY.md`）自动导出至磁盘，防止数据库重置导致配置丢失。

*   **调试与可观测性**:
    *   **[#1493 Web 端调试面板](https://github.com/nearai/ironclaw/issues/1493)**: 计划在 Web Gateway 中添加 Inspector 面板，用于查看 System Prompt、Tool 参数等隐藏信息。

*   **新贡献者动向**:
    *   **[#1491 Web UI 配置暴露](https://github.com/nearai/ironclaw/pull/1491)**: 新贡献者提交了将 `cheap_model` 和 `smart_routing` 暴露到 Web 设置界面的 PR，降低了模型切换的门槛。

---

## 7. 用户反馈摘要
*   **痛点：OAuth 生态隔离** (Issue #902): 企业用户受到 Google OAuth 策略限制影响严重，无法在内部 IronClaw 实例中使用 Google Workspace 工具，急需兼容性方案。
*   **痛点：文档缺失** (Issue #1174): 多名用户反映除了简单的 `.md` 文件外，缺乏关于 Tools Limits、Skills 和 Signal 的详细配置文档，导致进阶使用困难。
*   **痛点：Git 认证割裂** (Issue #1465): Secrets 管理目前无法作为环境变量注入到 Shell 命令中，导致无法在 Agent 内部执行需要认证的 Git Push/Clone 私有仓库操作。

---

## 8. 待处理积压
*   **[核心功能] #931 Google Workspace Bridge**: 作为解决 OAuth 阻塞的关键 PR，目前仍在 Open 状态，建议维护者优先 Review 并合并，以解除企业用户的阻塞。
*   **[文档] #1174 寻找文档**: 用户对文档的诉求持续存在，建议项目将扩充 `docs/` 目录或建立 Wiki 纳入近期计划。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-21)

## 1. 今日速览
LobsterAI 项目今日处于**极高活跃度**状态，社区反馈爆发。过去 24 小时内新增/活跃 Issue 高达 36 条，显示出用户基数增长带来的压力。项目刚刚发布了 **v2026.3.20** 版本，主要修复了构建过程中的依赖存根问题。然而，大量用户反馈集中在 **IM 通道集成（飞书/企微）** 的稳定性、**OpenClaw 网关** 的崩溃重启以及严重的 **UI/安全 Bug** 上。目前有 15 个 PR 待合并，社区正在积极贡献从性能优化（SQLite 异步化）到新功能（多智能体）的代码，项目正处于快速迭代与问题修复并行的关键期。

## 2. 版本发布
### Release 2026.3.20
- **发布日期**: 2026-03-20
- **更新内容**: 
  - **fix**: 停止在 OpenClaw 运行时环境中对 `playwright-core` 和 `pdfjs-dist` 进行存根（stubbing）操作 ([PR #548](https://github.com/netease-youdao/LobsterAI/pull/548))。
- **分析**: 这是一个针对性的构建/运行时修复，旨在解决特定依赖库在 OpenClaw 容器环境中的加载问题，可能与此前后报告的网关启动失败有关。

## 3. 项目进展
今日共有 **11 个 PR 合并/关闭**，重点推进了稳定性与集成能力：
- **安全性增强**: [PR #591](https://github.com/netease-youdao/LobsterAI/pull/591) 移除了配置文件中的明文密钥，改用环境变量注入，显著提升了安全性。
- **IM 集成优化**: 
  - [PR #558](https://github.com/netease-youdao/LobsterAI/pull/558) 新增飞书机器人“扫码创建”功能，降低配置门槛。
  - [PR #556](https://github.com/netease-youdao/LobsterAI/pull/556) 为泡泡（POPO）IM 支持 WebSocket 长连接模式，解决了 Webhook 的网络限制。
- **用户体验修复**: 
  - [PR #565](https://github.com/netease-youdao/LobsterAI/pull/565) 修复了手动停止任务时错误显示“超时”的问题。
  - [PR #569](https://github.com/netease-youdao/LobsterAI/pull/569) 重构了日志系统，支持按日轮转和大小限制。

## 4. 社区热点
今日讨论最热烈的问题集中在基础功能的可用性上：
1.  **[Issue #563](https://github.com/netease-youdao/LobsterAI/issues/563) [7 评论]**: **对话标题显示乱码**。这是一个严重的 UI 显示问题，直接影响用户对会话历史的管理，目前处于 Open 状态。
2.  **[Issue #579](https://github.com/netease-youdao/LobsterAI/issues/579) [2 评论]**: **Workspace 目录配置冲突**。用户误将 workspace 当作项目目录配置后，导致系统在错误路径下生成大量 `.openclaw` 和 `SOUL.md` 文件，且难以重置。
3.  **[Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561) [1 评论]**: **数据串号/隐私泄露风险**。有用户报告在自己的客户端看到了**其他人的飞书对话记录**。这是一个极其严重的隐私和数据隔离 Bug，需立即排查。

## 5. Bug 与稳定性
今日报告的 Bug 数量众多，按严重程度排序如下：

### 🔴 严重
- **隐私泄露**: [Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561) - 用户看到非本人的对话记录。
- **远程执行/路径遍历**: [Issue #543](https://github.com/netease-youdao/LobsterAI/issues/543) - `openclawMemoryFile.ts` 中存在路径验证缺失，高风险。
- **内核崩溃/无限重启**: [Issue #540](https://github.com/netease-youdao/LobsterAI/issues/540), [Issue #572](https://github.com/netease-youdao/LobsterAI/issues/572) - OpenClaw Gateway 频繁重启或无法拉起。
- **安装失败**: [Issue #551](https://github.com/netease-youdao/LobsterAI/issues/551) - Mac (Intel) 安装后重启导致图标变问号，必现。

### 🟠 中等
- **UI 乱码**: [Issue #563](https://github.com/netease-youdao/LobsterAI/issues/563) - 标题乱码。
- **模型配置无效**: [Issue #585](https://github.com/netease-youdao/LobsterAI/issues/585) - 切换模型后 IM 通道仍调用旧模型，需重启。
- **性能瓶颈**: [Issue #562](https://github.com/netease-youdao/LobsterAI/issues/562) - SQLite 同步写入阻塞主进程（已有修复方案 [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573)）。
- **飞书集成失效**: [Issue #511](https://github.com/netease-youdao/LobsterAI/issues/511) - 配置后机器人不回复。

### 🟢 已有修复 PR
- [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573): 修复 SQLite 阻塞主进程。
- [PR #576](https://github.com/netease-youdao/LobsterAI/pull/576): 改善 Windows 网关启动可靠性。
- [PR #590](https://github.com/netease-youdao/LobsterAI/pull/590): 防止手动停止的会话被自动重启。

## 6. 功能请求与路线图信号
用户对产品的智能化和集成度提出了更高要求：
- **多智能体协作**: [Issue #541](https://github.com/netease-youdao/LobsterAI/issues/541) 建议加入多 Agent 相互协调调用能力。这是目前 AI Agent 领域的热点，可能成为下一阶段核心方向。
- **Token 用量监控**: [Issue #582](https://github.com/netease-youdao/LobsterAI/issues/582) 用户急需查看各模型的 Token 消耗以控制成本。
- **离线部署支持**: [Issue #587](https://github.com/netease-youdao/LobsterAI/issues/587) 企业内网环境适配需求强烈。
- **交互优化**: [Issue #567](https://github.com/netease-youdao/LobsterAI/issues/567) 建议在输入框输入 `/` 时弹出技能选择列表，降低 Skill 使用门槛。

## 7. 用户反馈摘要
- **痛点**: **配置复杂且易出错**（Workspace 路径、图片输入配置隐晦）；**稳定性差**（网关频崩、安装后无法启动）；**隐私担忧**（数据串号）。
- **场景**: 主要用于对接企业 IM（飞书、企微、POPO）进行自动化问答和任务执行。
- **评价**: 用户对 LobsterAI 的潜力表示期待，但目前版本的 Bug（特别是 Intel Mac 上的安装问题和飞书对接问题）严重影响了使用信心。

## 8. 待处理积压
- **[Issue #543](https://github.com/netease-youdao/LobsterAI/issues/543)**: 路径遍历安全漏洞（待官方确认并修复）。
- **[Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561)**: 数据串号问题，涉及核心架构的数据隔离机制，需紧急响应。
- **[PR #589](https://github.com/netease-youdao/LobsterAI/pull/589)**: 大型基础设施重构 PR（CI/CD、模板等），虽然对代码质量至关重要，但可能因改动量大而积压，建议维护者尽快 Review 或分批合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-21)

你好，我是负责监测 TinyClaw (TinyAGI) 项目的分析师。以下是基于过去 24 小时 GitHub 数据的动态分析报告。

## 1. 今日速览

项目今日处于**高活跃度开发状态**，核心团队聚焦于代码重构与用户体验优化。尽管没有新的社区 Issue 产生，但维护者提交了密集的 PR（共 5 个），其中 4 个已顺利合并/关闭。项目发布了 **v0.0.16 版本**，核心亮点在于实现了“零配置开箱即用”的引导流程。此外，架构层面进行了大幅度重构，引入适配器模式并优化了前端事件系统，显示项目正在为支持更多 LLM 提供商和复杂前端交互打下坚实基础。

## 2. 版本发布

### [v0.0.16](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.16)
- **核心亮点**:
    - **零配置引导**: 彻底简化了首次运行体验。用户现在只需运行 `tinyagi` 命令，系统将自动创建默认配置、引导 Agent 工作区目录、检查依赖并启动守护进程，移除了以往的设置向导步骤。
- **影响评估**:
    - 此更新大幅降低了新用户的上手门槛，预计将显著改善“首次 Hello World”体验。
    - 默认工作区设定为 `~/tinyagi-workspace`，用户需注意路径变化。

## 3. 项目进展

今日共有 4 个关键 PR 被合并/关闭，标志着项目架构和 UI 层的重大迭代：

1.  **CLI 重构与体验优化**:
    - **PR [#244 refactor(cli): streamline onboarding](https://github.com/TinyAGI/tinyagi/pull/244) [CLOSED]**
      配合 v0.0.16 发布，此 PR 移除了设置向导，实现了依赖检查（tmux, jq 等）和自动化配置生成。
    - **PR [#242 refactor(core): extract CLI logic into adapter pattern](https://github.com/TinyAGI/tinyagi/pull/242) [CLOSED]**
      实施了重要的架构升级，将 `invoke.ts` 中的特定 CLI 调用逻辑抽取为独立的适配器模块（实现了 `AgentAdapter` 接口）。这将极大降低核心代码的复杂度，并使得未来新增 LLM 提供商变得更加容易（只需注册新适配器）。

2.  **前端交互重构**:
    - **PR [#245 refactor(office): redesign SSE events](https://github.com/TinyAGI/tinyagi/pull/245) [CLOSED]**
      重构了 SSE（Server-Sent Events）事件命名系统，移除了晦涩的 `chain_*` 命名，改为更清晰的 `message:*` 和 `agent:*` 事件（如 `agent:invoke`, `agent:response`）。同时将页面逻辑抽取为可复用的 Hooks 和组件，提升了代码的可维护性。
    - **PR [#212 feat(office): redesign live office workspace](https://github.com/TinyAGI/tinyagi/pull/212) [CLOSED]**
      对 `/office` 工作区进行了全面的 UI/UX 重设计，提供更好的实时交互体验。

## 4. 社区热点

虽然今日没有活跃的 Issue 讨论，但有一个重要的社区贡献正在等待审核：

- **PR [#243 feat: add Novita AI as a built-in LLM provider](https://github.com/TinyAGI/tinyagi/pull/243) [OPEN]**
  - **作者**: Alex-wuhu
  - **分析**: 该 PR 请求将 Novita AI 添加为内置的 LLM 提供商。由于 Novita 兼容 OpenAI 接口，作者复用了现有的 `codex harness`。
  - **诉求**: 社区用户对降低成本或使用多样化模型有需求。结合今日合并的 #242（适配器模式重构），该项目目前对集成新 Provider 持开放态度，且架构上已做好铺垫。

## 5. Bug 与稳定性

- **状况**: 过去 24 小时内**未报告新的 Bug 或崩溃问题**（Issues 数量为 0）。
- **潜在风险**: 今日合并的重构 PR (#242, #245) 涉及核心调用逻辑和事件系统，虽然目前看起来稳定，但通常架构调整后需要观察 1-2 天以确认是否有边缘情况的回归。

## 6. 功能请求与路线图信号

- **新增 Provider**: 社区通过 PR #243 明确发出了支持 Novita AI 的信号。考虑到今日核心团队已经重构了 Provider 适配器逻辑，预计该功能被合并的概率很高，这可能暗示项目未来的路线图包含“生态扩张”。
- **体验极简**: v0.0.16 的发布表明“极简安装”和“开箱即用”是当前产品迭代的核心 OKR。

## 7. 用户反馈摘要

- **正面信号**: 从 Release Notes 和合并的 PR 描述来看，开发团队正在积极解决“配置繁琐”这一痛点。自动化的工作流设计表明团队听取了早期用户关于环境搭建困难的反馈。
- **暂无负面反馈**: 今日无活跃 Issues，说明现有版本运行相对平稳，或社区处于观望新版本的阶段。

## 8. 待处理积压

- **PR #243 ([feat: add Novita AI](https://github.com/TinyAGI/tinyagi/pull/243))**: 这是目前唯一的活跃 PR，状态为 Open。建议维护者尽快 Review，以便顺应架构重构后的扩展趋势。

---
**总结**: TinyClaw 今日在**工程质量**（重构、适配器模式）和**产品体验**（零配置启动）上取得了双赢。随着架构解耦的完成，项目正迎来集成更多 AI 模型（如 Novita）的黄金窗口期。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-21)

您好，我是您的开源项目分析师。以下是基于 GitHub 数据生成的 Moltis 项目日报。

## 1. 今日速览
Moltis 项目在过去 24 小时内保持**高度活跃**状态，开发重心主要集中在修复平台兼容性问题和增强系统安全性。虽然今日无新版本发布，但 **Issues 增长明显（4 条）**，且集中在 Windows 端和配置体验的负面反馈上，值得维护者警惕。Pull Requests 方面呈现**“积压待合并”**态势，共有 **6 个待处理 PR**，其中包括关键的 Windows 文件锁修复和 Google Gemini 集成功能，社区贡献意愿强烈。总体来看，项目正处于功能累积与 Bug 修复的迭代期，但需加快 PR 审核速度以缓解积压。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日仅有 **1 个 PR 更新为已关闭/合并状态**（注：根据数据统计，该 PR 实际为关闭状态，非合并），进度推进较为缓慢：

*   **[CLOSED] [dependencies] PR #390**: 依赖更新 `quinn-proto` 从 0.11.13 至 0.11.14。该 PR 被关闭，可能是因为被今日新开的 PR #456（批量依赖更新）所取代。这表明维护者正在整理依赖管理策略，转向批量更新模式。

**待合并的重要进展（需重点关注）：**
*   **[OPEN] PR #436**: 修复了 Windows 平台上严重的文件锁定问题（LockFileEx os error 5），这对于 Windows 用户的可用性至关重要。
*   **[OPEN] PR #33**: 新增 Google Gemini 原生支持，扩展了 AI 模型生态。

## 4. 社区热点
今日社区关注点分散在功能扩展与系统防护上：

*   **[Feature] Issue #233**: **Matrix 协议支持**
    *   **数据**: 2 条评论，1 个点赞。
    *   **分析**: 尽管创建于 2 月，但昨日再次活跃。作为一个跨平台通信协议，Matrix 支持意味着 Moltis 可能正在寻求成为多渠道 AI 接入的中枢，这是用户呼声较高的路标信号。
    *   **链接**: [moltis-org/moltis Issue #233](https://github.com/moltis-org/moltis/issues/233)

*   **[Security] Issue #454 & PR #455**: **防止 Agent 绕过 Git Hooks**
    *   **数据**: 快速响应的 Issue 和 PR。
    *   **分析**: 用户 `tupe12334` 提出 Agent 运行 `git commit --no-verify` 会绕过质量门禁，并迅速提交了 `block-no-verify` 钩子的实现（PR #455）。这反映了企业级用户对 AI Agent 操控代码仓库的**安全性和合规性**有强烈需求。

## 5. Bug 与稳定性
今日报告了 2 个明确的 Bug，均与**系统环境兼容性**相关，显示出非 Linux 环境下的测试覆盖可能不足：

1.  **[High] Issue #457: Windows 安装程序缺失 `handler.sh`**
    *   **详情**: 用户 `jmikedupont2` 报告在 Windows 环境下安装时找不到 `handler.sh`。这属于**阻塞性 Bug**，直接影响 Windows 用户的安装体验。
    *   **状态**: 暂无官方回复，**尚无 Fix PR**。
    *   **链接**: [moltis-org/moltis Issue #457](https://github.com/moltis-org/moltis/issues/457)

2.  **[Medium] Issue #458: 配置导入缺失示例**
    *   **详情**: 从 `openclaw` 导入配置时，`moltis.toml` 中缺少必要的配置示例，导致用户配置困难。这属于**用户体验/文档类 Bug**。
    *   **状态**: 暂无 Fix PR。
    *   **链接**: [moltis-org/moltis Issue #458](https://github.com/moltis-org/moltis/issues/458)

3.  **[Fix Available] Issue #434 (PR #436): Windows 文件锁定错误**
    *   **详情**: Windows 上 `LockFileEx` 导致的 OS Error 5。
    *   **状态**: **已有修复 PR #436**，等待合并。

## 6. 功能请求与路线图信号
*   **Matrix 支持 (#233)**: 表明用户希望 Moltis 不仅作为 AI 后端，还能作为多聊天平台的前端适配器。
*   **Google Gemini 支持 (#33)**: 该 PR 已停滞约 1.5 个月，但功能完整（支持 OAuth 和流式传输）。若该 PR 被合并，将显著增强项目在多模型提供商方面的竞争力。
*   **安全合规 (#454)**: 增加 Git 操作的审计与拦截能力，暗示 Moltis 正在向更严肃的 DevOps/AI Ops 工具演进。

## 7. 用户反馈摘要
*   **痛点**: Windows 用户面临安装障碍（脚本缺失）和运行时错误（文件锁），体验明显差于 Linux/Mac 用户。
*   **场景**: 用户正在尝试将 Moltis 集成到现有的配置管理流程中（如引用 openclaw），但配置文档和默认值的缺失增加了上手难度。
*   **满意度**: 社区对代码质量要求较高，出现了主动提交安全防护 PR 的高级用户，说明核心开发者群体对项目有深度投入。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者优先 Review：

1.  **PR #33 (feat: Google Gemini provider)**: 已开启近 50 天。作为重要的模型供应商集成，长期未合并会挫伤贡献者积极性，且影响用户对模型选择的灵活性。
    *   **链接**: [moltis-org/moltis PR #33](https://github.com/moltis-org/moltis/pull/33)
2.  **PR #436 (fix: Windows file lock)**: 修复了严重的跨平台 Bug，建议优先合并以改善 Windows 用户体验。
    *   **链接**: [moltis-org/moltis PR #436](https://github.com/moltis-org/moltis/pull/436)

---
*分析师建议：今日需重点安抚 Windows 用户的情绪（Issue #457），并优先合并依赖更新与 Windows 修复 PR，以保持项目健康度。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是根据 CoPaw 项目 2026-03-21 的 GitHub 数据生成的动态日报。

---

# CoPaw 项目动态日报 (2026-03-21)

## 1. 今日速览
CoPaw 项目今日继续保持高热度，随着 **v0.1.0.post1** 版本的发布，社区反馈迎来小高峰。过去 24 小时内，Issue 和 PR 活动均十分活跃（各 50 条更新），共有 30 个 Issue 被关闭，显示出维护团队在处理用户反馈方面的高效执行力。然而，新版本引入的 Task Cancellation 错误以及飞书通道的兼容性问题成为用户投诉的焦点。社区贡献方面，多位首次贡献者提交了关于自定义频道、QQ 文件发送及沙箱环境的高质量 PR，项目生态正从核心功能向周边工具链拓展。

## 2. 版本发布
### **v0.1.0.post1**
*   **发布时间**: 2026-03-20
*   **更新要点**:
    *   **版本号升级**: 版本迭代至 `0.1.1b1` (PR #1882)。
    *   **稳定性修复**: 增加了针对 Anthropic 模型 "overloaded" 错误的 HTTP 529 状态码重试机制 (PR #1891)。
    *   **Bug 修复**: 修复了 token 使用量的统计问题 (PR 标题截断，推测为修复 token usage 计算错误)。

## 3. 项目进展
今日共有 24 个 PR 被合并或关闭，主要推进了以下方向：

*   **功能增强**:
    *   **全局停止指令** (PR #1913): 实现了跨所有通道的 `/stop` 命令，解决了 Agent 陷入死循环或长任务无法中断的痛点。
    *   **Docker 优化** (PR #1988): 优化了 Dockerfile 构建流程，减少了镜像层数和体积。
    *   **账户管理** (PR #1989): 新增 Web 端账户密码修改及登录页暗黑模式支持。
*   **Bug 修复**:
    *   **飞书/企微长消息** (PR #1937): 修复了 QQ 和企业微信通道因消息超长导致发送失败或被截断的问题。
    *   **Telegram 音频** (PR #1896): 修复了 Telegram 语音消息因数据字段路径不一致无法处理的问题。
    *   **Socks5 代理** (PR #1758): 解决了 HTTPX 库在 Socks5 代理环境下的兼容性报错。

## 4. 社区热点
今日讨论最热烈的问题集中在**稳定性**与**部署升级**体验上：

1.  **[Issue #1976] Unknown agent error: RuntimeError: Task has been cancelled!** (11 条评论)
    *   **链接**: [agentscope-ai/CoPaw Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976)
    *   **分析**: 这是今日最活跃的 Issue。用户在运行过程中频繁遇到任务被取消的运行时错误。据维护者回复，该问题已在 #1956 中修复，这表明新发布的版本可能仍包含部分未完全覆盖的边界情况，需用户尽快升级或打补丁。
2.  **[Issue #1711] v0.1.0b2 禁用/删除技能报错** (9 条评论)
    *   **链接**: [agentscope-ai/CoPaw Issue #1711](https://github.com/agentscope-ai/CoPaw/issues/1711)
    *   **分析**: 用户反馈 Web UI 界面删除技能无效，且文件会自动复原。这反映出前端状态同步与后端文件系统之间存在一致性 Bug，严重影响用户对技能管理的体验。
3.  **[Issue #1708] 为什么要从 huggingface.co 下载模型配置文件** (8 条评论)
    *   **链接**: [agentscope-ai/CoPaw Issue #1708](https://github.com/agentscope-ai/CoPaw/issues/1708)
    *   **分析**: 国内用户因网络原因无法访问 HuggingFace，导致启动报错。用户呼吁增加离线模式或镜像站配置，这是本地部署类 AI 项目在中国大陆面临的典型网络环境痛点。

## 5. Bug 与稳定性
今日 Bug 报告主要集中在**升级后的兼容性**及**特定通道的阻塞**，部分已有修复方案：

*   **严重**:
    *   **[Issue #1774] CPU 占用异常死循环**: 记忆压缩钩子在 Docker 环境下陷入无限循环，导致 CPU 100% 占用。
    *   **[Issue #1985] Google GenAI SDK 报错**: v0.1.0.post1 中 Google 模型初始化失败。
*   **中等**:
    *   **[Issue #1835] 飞书通道音频处理阻塞**: 发送音频后导致后续所有（含文本）消息报错 `InvalidSchema`。这表明本地文件路径处理逻辑存在缺陷。
    *   **[Issue #1786] 飞书登录认证失败**: 升级到 0.1.0b2/b3 后，即使配置了 Auth 环境变量，飞书通道仍返回 401 错误。
    *   **[Issue #1987] 自定义通道无法启动**: 配置文件解析逻辑错误，将 dict 当作对象处理。**已有 Fix PR #1991**。

## 6. 功能请求与路线图信号
用户对 **Multi-Agent（多智能体）** 架构的呼声日益高涨，同时希望提升易用性：

*   **多智能体调度** ([Issue #1990], [Issue #1587]): 用户强烈希望能支持主 Agent 自动调度子 Agent，而非手动切换。这是 CoPaw 从“单点助手”迈向“协作框架”的关键需求。
*   **会话级 Token 统计** ([Issue #1751]): 用户希望不仅仅看到总消耗，更能按会话维度查看 Token 成本。
*   **云沙箱集成** ([PR #1972]): 社区开发者正在贡献 OpenSandbox 后端集成，预示着项目将支持更安全的远程代码执行环境。
*   **本地模型优化** ([Issue #1076]): 社区正在积极调试和反馈 llama.cpp 本地模型的加载问题。

## 7. 用户反馈摘要
从评论区提炼出的真实用户体验画像：

*   **痛点**:
    *   **升级体验差**: 多个 Issue (#1711, #1694, #1555) 反映 pip 升级或 Docker 升级后出现依赖冲突、配置不兼容或服务无法启动。
    *   **中文适配不足**: 用户抱怨文档缺乏中文版，且官网不支持语言切换 ([Issue #1586])。
    *   **网络问题**: 强依赖 HuggingFace 导致国内用户部署困难。
*   **满意点**:
    *   **功能迭代快**: 每日都有新的 PR 针对具体通道（如 QQ 文件发送）进行功能增强。
    *   **社区响应快**: 对于自定义通道无法启动等关键 Bug，社区迅速提交了 PR 进行修复。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决或需持续关注：

*   **[Issue #1076] llama.cpp(Local) bug**: 这是一个长期存在的 Issue，涉及本地模型加载失败，对于注重隐私和本地化的用户群体影响较大。
*   **[PR #1972] OpenSandbox 集成**: 这是一个大型功能 PR，目前处于 Open 状态，建议维护者优先 Review，因为这涉及核心安全架构的变更。
*   **[Issue #1596] 记忆压缩导致对话失忆**: 尽管有讨论，但关于记忆管理机制导致上下文丢失的反馈依然存在，需要核心架构层面的优化。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-21)

**分析师：** AI Open Source Analyst
**项目：** EasyClaw (RivonClaw)
**日期：** 2026年3月21日

---

### 1. 今日速览
EasyClaw 项目今日保持较高的开发迭代速度，成功发布了 **v1.7.3** 版本，重点优化了 macOS 平台的安装体验与安全机制兼容性。代码仓库方面，今日有 2 个 PR 被关闭（涉及账户 UI 的重构工作），表明团队正在集中精力打磨用户交互界面。社区层面出现了一个关于 Windows 11 环境下 API 响应的潜在 Bug 报告，需引起注意。整体来看，项目处于活跃开发状态，UI 层面的重构正在稳步推进。

### 2. 版本发布
**Release: v1.7.3 (RivonClaw v1.7.3)**
*   **更新重点：** 修复 macOS 安全机制拦截问题。
*   **详细说明：** 此次更新主要针对 macOS 用户。由于应用未签名，常被 Gatekeeper 拦截并提示“已损坏”。v1.7.3 在文档或机制上优化了这一体验，并在 Release Note 中提供了详细的终端修复命令指南。
*   **安装注意：** macOS 用户若遇到“App is damaged”提示，需通过终端执行命令移除隔离属性（具体命令见 Release 说明）。
*   **链接：** [v1.7.3 Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.3)

### 3. 项目进展
今日共有 2 个 UI 相关的 PR 被关闭，标志着账户与认证模块的界面重构工作已基本完成（或主要代码已合并/终止）。

*   **PR #24 [CLOSED] Account UI redesign popover**
    *   **内容：** 将原本的 `/account` 导航页面重构为基于头像点击的 Popover 弹窗模式。
    *   **功能点：** 包含已登录（头像、邮箱、计划卡片、登出）与未登录（欢迎提示、登录/注册按钮）两种状态，风格与主题菜单保持一致。
    *   **链接：** [PR #24](https://github.com/gaoyangz77/rivonclaw/pull/24)
*   **PR #23 [CLOSED] feat(ui): redesign auth modal & account page**
    *   **内容：** 全面重构认证模态框与账户页面。
    *   **功能点：** 引入了药丸状切换器、密码可见性切换、密码强度条、验证码紧凑行以及隐私条款链接；账户页面采用了分卡片布局。
    *   **链接：** [PR #23](https://github.com/gaoyangz77/rivonclaw/pull/23)

### 4. 社区热点
今日社区活跃度主要集中在问题反馈，暂无高热度讨论的 PR。

*   **Issue #25: Windows 11 报错 "400 [] is too short - 'tools'"**
    *   **状态：** OPEN
    *   **分析：** 这是今日唯一的新增 Issue。用户在 Win11 系统 v1.7.2 版本下遇到 API 错误。从错误信息 `400 [] is too short - 'tools'` 推测，可能是客户端在调用模型接口时，传递了空的 `tools` 数组，导致后端校验失败。这可能与特定操作触发的空参数请求有关。
    *   **链接：** [Issue #25](https://github.com/gaoyangz77/rivonclaw/issues/25)

### 5. Bug 与稳定性
*   **🟠 中等风险 (API/Functional):** **Issue #25**
    *   **现象：** Windows 11 v1.7.2 版本，对话回复仅显示错误信息 `⚠ 400 [] is too short - 'tools'`。
    *   **影响范围：** 阻断正常对话流程。
    *   **修复状态：** 暂无 Fix PR，等待开发者确认复现路径。

### 6. 功能请求与路线图信号
*   **UI/UX 体验升级：** 从 PR #23 和 #24 的动向可以看出，项目正在向更加现代化、组件化的 UI 风格演进。**信号：** 未来的版本将更加注重表单的交互细节（如密码强度、自动注册逻辑）和轻量级的视图操作（Popover 替代跳转页面）。

### 7. 用户反馈摘要
*   **macOS 用户体验：** 官方在 v1.7.3 的 Release 中特别提及 macOS 的“应用已损坏”问题，侧面反映出此前版本中非签名应用对非技术用户造成了较大的安装阻碍。
*   **Windows 用户痛点：** Issue #25 反映了在特定场景下（可能是调用工具或特定对话模式）会出现接口报错，表明客户端对 API 参数的边界情况处理（如空数组）可能不够健壮。

### 8. 待处理积压
*   **Issue #25:** 该 Bug 导致用户无法正常使用核心对话功能，且涉及最新版本（v1.7.2），建议维护者优先排查是否为前端构建工具参数时的逻辑漏洞。

---
**数据来源：** GitHub EasyClaw Repository Analytics

</details>