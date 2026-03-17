# OpenClaw 生态日报 2026-03-18

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-17 22:06 UTC

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

# OpenClaw 项目日报 (2026-03-18)

## 1. 今日速览
OpenClaw 项目今日继续保持极高的社区活跃度，过去24小时内共有 **500 条 Issues 更新**（其中 432 条为新开/活跃）和 **500 条 PR 更新**，显示出该项目正处于快速迭代期。尽管没有新的官方版本发布，但合并/关闭的 PR 数量达到 378 条，表明维护团队正在全力处理社区贡献和修复积压问题。今日焦点集中在 **多模态视觉能力支持**、**客户端稳定性（Windows/Linux）** 以及 **Mistral/MiniMax 等模型提供商的兼容性修复**。

## 2. 版本发布
**无新版本发布**。项目目前似乎正积攒变更，建议关注下一个 patch 或 minor 版本的发布动态。

## 3. 项目进展
今日共有 **378 条 PR 被合并或关闭**，重点推进了以下领域：

*   **核心架构优化**：
    *   **CLI 稳定性**：PR [#49262](https://github.com/openclaw/openclaw/pull/49262) 将 WebSocket 握手超时从 3s 增加到 10s，解决了高负载下 CLI 频繁断连的问题 ([#46892](https://github.com/openclaw/openclaw/issues/46892))。
    *   **Ollama 集成**：PR [#49179](https://github.com/openclaw/openclaw/pull/49179) 为 Ollama 提供商引入了增量流式传输和工具调用回退机制，显著提升了开源模型体验。
    *   **Cron 安全**：PR [#49174](https://github.com/openclaw/openclaw/pull/49174) 修复了 Cron 任务跨会话可见的安全漏洞，增强了多用户环境下的隔离性。
*   **渠道与插件**：
    *   **飞书/Feishu**：PR [#48917](https://github.com/openclaw/openclaw/pull/48917) 修复了安装独立插件时的重复警告问题；PR [#49265](https://github.com/openclaw/openclaw/pull/49265) 修复了 WebChat 图片未持久化的问题。
    *   **Matrix 重构**：PR [#40946](https://github.com/openclaw/openclaw/pull/40946) 正在用官方 `matrix-js-sdk` 替换旧的 SDK，这将大幅提升 Matrix 协议的支持能力。
    *   **Discord 体验**：PR [#43366](https://github.com/openclaw/openclaw/pull/43366) 引入了基于生成内容的自动线程命名策略。
*   **构建与测试**：多个 PR（如 [#49244](https://github.com/openclaw/openclaw/pull/49244), [#49204](https://github.com/openclaw/openclaw/pull/49204)）致力于修复 CI 流水线中的契约测试和 Windows 路径兼容性问题。

## 4. 社区热点
今日讨论最热烈的 Issues 集中在功能扩展和系统稳定性：

*   **[#3460 [OPEN] Internationalization (i18n) Support](https://github.com/openclaw/openclaw/issues/3460)**
    *   **热度**：102 评论 | 👍 3
    *   **分析**：尽管官方表示目前没有带宽支持多语言，但社区对此需求极高。这是一个长期的高优先级需求，可能需要依赖社区 PR 来推进。
*   **[#75 [OPEN] Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
    *   **热度**：41 评论 | 👍 62
    *   **分析**：这是目前点赞数最高的 Issue。用户强烈希望除了 macOS/iOS 外，能在 Linux 和 Windows 上拥有原生的 Clawdbot 客户端，填补桌面端的空白。
*   **[#28744 [OPEN] 支持Agent接收并识别图片内容 (视觉能力)](https://github.com/openclaw/openclaw/issues/28744)**
    *   **热度**：19 评论
    *   **分析**：随着多模态模型的普及，用户迫切需要 Agent 能“看懂”飞书等平台发送的图片。这是目前功能请求中最具共识的方向之一。
*   **[#48205 [OPEN] Gateway Restarts Every ~50 Minutes](https://github.com/openclaw/openclaw/issues/48205)**
    *   **热度**：20 评论
    *   **分析**：这是一个严重的稳定性问题，导致网关定期重启，严重影响了生产环境的可用性，正在引起用户的广泛恐慌和排查。

## 5. Bug 与稳定性
今日报告了大量回归和崩溃问题，主要集中在 **最近几个版本（2026.3.11 - 2026.3.13）**：

*   **🔴 严重**
    *   **[#48205 Gateway Periodic Restarts](https://github.com/openclaw/openclaw/issues/48205)**: 网关每约 50 分钟无理由自动重启。目前无 Fix PR。
    *   **[#48189 Installation/Onboarding Issue](https://github.com/openclaw/openclaw/issues/48189)**: 新版本安装过程中出现 `ERR_MODULE_NOT_FOUND`，阻塞新用户入门。目前无 Fix PR。
*   **🟠 中等**
    *   **[#45227 & #41293 Mistral 422 Error](https://github.com/openclaw/openclaw/issues/45227)**: 使用 Mistral 模型时返回 422 无正文错误。可能与 PR [#49235](https://github.com/openclaw/openclaw/pull/49235) (GPT-5.4 元数据修复) 相关，需验证。
    *   **[#48109 WhatsApp Tool Fails](https://github.com/openclaw/openclaw/issues/48109)**: `message` 工具报 "No active listener"，但自动回复正常。疑似状态管理 Bug。
    *   **[#44714 Logs --follow Handshake Timeout](https://github.com/openclaw/openclaw/issues/44714)**: 升级后 CLI 日志流功能失效。**已有 Fix PR [#49262](https://github.com/openclaw/openclaw/pull/49262)**。
    *   **[#49191 Google Vertex ADC Auth Broken](https://github.com/openclaw/openclaw/issues/49191)**: Google Vertex 凭证认证在 Windows 上失效。**已有 Fix PR [#49235](https://github.com/openclaw/openclaw/pull/49235)**。

## 6. 功能请求与路线图信号
*   **视觉能力**：[#28744](https://github.com/openclaw/openclaw/issues/28744) 强烈建议增加图片识别支持。考虑到 MiniMax 等模型已支持，这可能是下一阶段的重点。
*   **MCP 协议支持**：[#29053](https://github.com/openclaw/openclaw/issues/29053) 请求原生支持 MCP Client，以连接外部工具生态。这符合 Agent 标准化的行业趋势。
*   **高级记忆系统**：[#13991](https://github.com/openclaw/openclaw/issues/13991) (CLOSED) 提到了 "TinkerClaw" 分支实现的“联想层级记忆”。虽然官方未合并，但此类认知架构的探索值得关注。
*   **成本控制**：[#31708](https://github.com/openclaw/openclaw/issues/31708) 报告 Prompt Caching 失效导致成本激增 5 倍。PR [#49181](https://github.com/openclaw/openclaw/pull/49181) (CLI Usage Analytics) 将有助于监控此类问题。

## 7. 用户反馈摘要
*   **痛点**：
    *   **不稳定性**：大量用户反馈最近版本（特别是 3.12 和 3.13）存在回归 Bug，导致命令无法运行 ([#39691](https://github.com/openclaw/openclaw/issues/39691))、文件写入失败 ([#44372](https://github.com/openclaw/openclaw/issues/44372))。
    *   **API 兼容性**：用户对 OpenAI、Mistral、Perplexity 等不同提供商的 API 细微差别感到沮丧（如 401, 422 错误频发）。
    *   **多模态缺失**：用户在飞书/Telegram 场景下非常渴望 Agent 能处理图片。
*   **满意点**：
    *   社区对 Ollama 的优化反应积极，期待更流畅的本地模型体验。
    *   对 `openclaw usage` 命令的引入表示欢迎，解决了成本不可见的问题。

## 8. 待处理积压
*   **[LTS Goal] Linux/Windows Apps ([#75](https://github.com/openclaw/openclaw/issues/75))**：长期高赞 Issue，目前官方精力似乎集中在 Gateway 和 WebUI，桌面客户端进展缓慢。
*   **[Stale] Nextcloud Talk Plugin ([#19854](https://github.com/openclaw/openclaw/issues/19854))**：存在导致崩溃循环的 Bug，长期未彻底解决。
*   **[Regression] Perplexity Search API ([#36182](https://github.com/openclaw/openclaw/issues/36182))**：通过 OpenRouter 使用 Perplexity 搜索失败，影响依赖搜索能力的 Agent。
*   **[Feature] MCP Client ([#29053](https://github.com/openclaw/openclaw/issues/29053))**：虽然点赞数不多，但对扩展性至关重要，目前尚无官方实施计划。

---
*分析师建议：当前项目处于“快速迭代伴随阵痛”期。建议维护者优先解决 2026.3.13 版本引入的认证和连接性回归问题，特别是 Windows 平台的 ADC 认证和 Gateway 重启问题，以恢复生产环境的稳定性信心。*

---

## 横向生态对比

# 2026-03-18 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
今日开源 AI 智能体生态呈现出**爆发式功能迭代与稳定性阵痛并存**的态势。项目普遍从单一的聊天机器人向**多模态、多渠道、长时记忆的自主智能体**进化。**MCP（Model Context Protocol）** 协议和 **RAG（检索增强生成）** 已成为标配，而如何在复杂的工具调用和多步推理中保障系统稳定性（特别是 Gateway 和 CLI），成为各项目面临的共同挑战。同时，生态正在分化：一类追求全功能平台化，另一类则专注于轻量化、特定场景的落地。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 今日发布版本 | 核心动态 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** | **500** | 无 | 快速迭代，积压大量 PR (378 merged)，核心架构优化 | 🟡 **高负荷/阵痛期** (高活跃，但回归 Bug 多) |
| **Zeroclaw** | 41 | 50 | **v0.4.3 -> v0.5.0** | 激进发布 (10个版本)，引入知识图谱，多渠道扩展 | 🟠 **激进/不稳定** (发布频繁，CI/部署问题多) |
| **PicoClaw** | 18 | 84 | **v0.2.3** | 发布正式版，引入跨平台系统托盘，重构 Context | 🟢 **良性迭代** (快速响应，修复积极) |
| **CoPaw** | 50 | 50 | v0.1.0-beta.1/2 | 冲刺 v1.0，记忆管理增强，本地模型兼容性修复 | 🟢 **关键冲刺期** (功能收敛，SDK 升级) |
| **NanoBot** | 36 | 94 | 无 | TUI 交互，隐私保护，长期记忆集成 | 🟢 **稳定演进** (质量导向，功能增强) |
| **IronClaw** | 44 | 50 | v0.19.0 | Routines 系统重构，多渠道 OAuth 增强 | 🟡 **重构期** (功能强但引入兼容性问题) |
| **NanoClaw** | 29 | 50 | 无 | 安全架构大讨论，多模型后端支持呼声高 | 🔵 **设计/规划期** (社区提案多，核心变更慢) |
| **LobsterAI** | 11 | 24 | 2026.3.17 | 修复回归 Bug，OpenClaw 插件化迁移 | 🟢 **维护/修复期** (跟随核心，修复为主) |
| **TinyClaw** | 4 | 4 | 无 | 架构重构 (无状态化)，SSE 流式修复 | 🔵 **架构调整期** (改动大，积压待合并) |
| **Moltis** | 1 | 5 | 无 | Qwen 等模型兼容性修复，企业级安全增强 | 🟢 **稳健维护** (小步快跑) |
| **ZeptoClaw** | 6 | 15 | 无 | 依赖升级，安全策略提案 | 🟢 **基建夯实期** (侧重安全与工具链) |
| **EasyClaw** | 0 | 1 | **v1.7.0** | macOS 体验优化，图标修复 | 🟢 **交付/静默期** (发布即静默) |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了明显的"中枢"特征：

*   **优势**：
    *   **生态吸附力**：作为核心节点，它不仅是独立产品，还是 LobsterAI 等项目的底层运行时，具备事实上的标准地位。
    *   **迭代速度**：日更 500 级别的 Issues/PRs 显示了极强的社区驱动力和核心团队执行力，尤其是在 Ollama 集成和多模态支持上。
*   **技术路线差异**：
    *   相比 **Zeroclaw/PicoClaw** 的"全功能/跨平台 UI"路线，OpenClaw 更侧重于 **Gateway 网关与 CLI 的稳定性**，但在桌面端落后于 PicoClaw。
    *   相比 **NanoBot** 的"轻量级/学术风"，OpenClaw 显得更"重"，致力于解决高并发和复杂的企业级集成（如飞书/Matrix）。
*   **社区规模**：
    *   OpenClaw 的活跃度（500+）远超其他项目（通常 <100），但也面临着更严峻的"大教堂与集市"冲突——大量社区贡献导致回归 Bug 频发（如 Gateway 重启），急需稳定性收敛。

## 4. 共同关注的技术方向

1.  **多模态视觉能力**
    *   **涉及项目**：OpenClaw, Zeroclaw, NanoClaw, NanoBot。
    *   **诉求**：不仅是"看图"，还包括处理飞书/WhatsApp 等渠道的图片持久化和 Base64 转换。这是 Agent 从"聊天"转向"助手"的关键。

2.  **MCP (Model Context Protocol) 标准化**
    *   **涉及项目**：OpenClaw, PicoClaw, Zeroclaw, LobsterAI。
    *   **诉求**：项目纷纷原生支持或通过插件支持 MCP Client，以标准化方式连接外部工具（如 Notion, Filesystem），打破孤岛效应。

3.  **记忆与上下文管理**
    *   **涉及项目**：NanoBot (Honcho 集成), CoPaw (Token 计数), IronClaw (Routines), PicoClaw (Context 重构)。
    *   **诉求**：从简单的滑动窗口转向"联想层级记忆"和"长期记忆"，解决长对话中的遗忘和幻觉问题。

4.  **本地模型兼容性**
    *   **涉及项目**：Moltis (Qwen 修复), CoPaw, OpenClaw (Ollama 优化)。
    *   **诉求**：针对 Qwen, GLM, Llama 等本地模型在 Jinja 模板、工具调用格式上的特异性进行适配（如修复 System Prompt 重复注入导致的 422 错误）。

## 5. 差异化定位分析

*   **全渠道覆盖型**：致力于连接一切社交/通讯平台，追求极致的渠道数量，但面临构建复杂度过高的问题。
*   **轻量/嵌入式**：NanoBot, ZeptoClaw。主打精简内核，适合边缘设备（树莓派/ARM）或嵌入现有系统，强调 Rust 层面的性能和安全性。
*   **垂直场景/企业级**：
    *   **LobsterAI**：深耕国内企业生态（网易 POPO/POPO），基于 OpenClaw 做上层封装。
    *   **Moltis**：侧重特定模型（如 MiniMax/Qwen）的深度兼容和安全网关。
    *   **IronClaw**：聚焦于 NEAR AI 生态的 Web3/区块链场景结合，强调定时任务。
*   **开发/调试导向**：
    *   **NanoClaw**：专注于为 AI 代码生成提供容器化沙箱和安全隔离。
    *   **TinyClaw**：尝试无状态化的流式架构，探索下一代 Backend 架构。

## 6. 社区热度与成熟度

*   **第一梯队 (活跃爆发期)**：**OpenClaw**。不仅量大，且讨论深度涉及核心架构（如 Cron 安全）。但也处于"青春期躁动"，稳定性亟待加固。
*   **第二梯队 (快速迭代期)**：**Zeroclaw, CoPaw, PicoClaw, IronClaw**。发布频繁，功能激进。Zeroclaw 和 CoPaw 正在冲刺大版本，PicoClaw 刚完成一次重要交付。
*   **第三梯队 (稳健演进期)**：**NanoBot, NanoClaw, Moltis**。PR 合并较少但质量高，社区讨论偏向设计提案和底层逻辑，节奏较稳。
*   **第四梯队 (维护/起步期)**：**LobsterAI, TinyClaw, ZeptoClaw, EasyClaw**。主要工作是修复依赖、跟随上游更新或处理部署文档。

## 7. 值得关注的趋势信号

1.  **安全性焦虑与沙箱演进**：
    *   用户在 **ZeptoClaw** 和 **NanoClaw** 中强烈要求更细粒度的网络策略（"默认拒绝"）和凭证管理。单纯的容器隔离已不足以满足需求，"Agent 专用防火墙"和"凭证代理"将成为新热点。

2.  **"人机协同" (HITL) 的具体化**：
    *   **NanoBot** 和 **IronClaw** 的社区讨论表明，用户不再满足于"一次性指令"，而是希望 Agent 在执行长任务（如复杂搜索、定时任务）时能**暂停并等待人类审批**，或提供实时进度反馈。

3.  **本地化部署的痛点下沉**：
    *   **Moltis** 和 **CoPaw** 的 Bug 报告显示，用户在使用非 GPT 模型（如 Qwen/GLM）时，常遇到 Prompt 模板不兼容的问题。项目方需要投入更多精力在 **Prompt 适配层** 的开发上，而不仅仅是 API 连通性。

4.  **Web UI 与 CLI 的此消彼长**：
    *   **PicoClaw** (Systray UI), **NanoBot** (TUI), **EasyClaw** (App 化) 的动向显示，为了降低使用门槛，AI Agent 正在迅速**应用化**，纯 CLI 工具的市场正在萎缩。

**建议开发者**：优先关注 **MCP 协议集成** 和 **本地模型的 Prompt 兼容性**，这是目前跨项目通用的"最大公约数"需求。同时，在引入新功能时，务必加强 **回归测试**（尤其是网关和鉴权模块），当前生态正饱受"快速迭代带来的崩溃"之苦。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-18)

**分析师**: AI Open Source Analyst
**数据来源**: github.com/HKUDS/nanobot

---

### 1. 今日速览
NanoBot 今日保持了极高的社区活跃度，过去24小时内共有 **36 条 Issue 更新** 和 **94 条 PR 更新**，显示出项目正处于快速迭代与功能扩展期。社区对 **多渠道适配（如 WhatsApp、企业微信）**、**运行时模型切换** 以及 **交互体验（TUI）** 表现出浓厚兴趣。虽然未有新版本 Release 发布，但合并了大量修复与功能增强 PR，尤其是在隐私保护和工具调用体验上做了显著优化。整体来看，项目生态系统正在从单一的 Bot 框架向多模态、多端支持的智能体平台演进。

---

### 2. 版本发布
*   **无新版本发布**。
    *   注：虽然 Issues 中出现了 `v0.1.4.post5` 的回归问题报告，且代码库中存在版本号不一致的讨论，但今日 GitHub 上并未标记新的正式 Release。建议关注 Nightly 构建或 `feat/onboard_question` 等分支的动态。

---

### 3. 项目进展
今日共有 **46 个 PR 被合并或关闭**，主要集中在提升系统易用性、修复边界情况错误以及扩展生态集成：

*   **交互与易用性增强**：
    *   PR #2155 引入了 **TUI (Terminal User Interface)**，用户现在可以通过 `nanobot tui` 命令在终端获得图形化的交互体验，无需依赖外部聊天软件即可调试。
    *   PR #2107 优化了 Cron 定时任务的展示，增加了下次运行时间和错误状态的详细信息。

*   **隐私与安全优化**：
    *   PR #2140 及其后续修复 PR #2174 解决了在开启工作区限制时，工具日志中可能泄露绝对路径的问题，提升了隐私保护。
    *   PR #2177 修复了 `message` 工具在开启提示时导致的双重消息问题，净化了聊天界面。

*   **多模态与渠道修复**：
    *   PR #2109 修复了 Telegram 渠道无法发送 URL 形式媒体文件的 Bug。
    *   PR #2104 修复了子智能体消息角色记录错误的 Bug，保证了上下文构建的正确性。

---

### 4. 社区热点
今日社区讨论焦点集中在 **Agent 的实时控制** 和 **网络依赖/配置** 上：

1.  **关于任务执行期间用户消息入列的讨论** [Issue #2133](https://github.com/HKUDS/nanobot/issues/2133)
    *   **热度**: 👍 0 | 评论 13
    *   **分析**: 用户 @PaomianPomix 提出了一个核心痛点——当前 Agent 在循环执行中无法实时响应用户的中断或审批。目前的 `/stop` 机制不够优雅。这反映了用户对 **"人机协同"** 的强烈需求，希望 Agent 能在长任务中 "停下来听我说"。社区正在探讨通过修改底层队列逻辑或规范 Prompt 策略来解决。

2.  **企业微信 (Wecom) 配置失效问题** [Issue #1988](https://github.com/HKUDS/nanobot/issues/1988)
    *   **热度**: 👍 0 | 评论 12
    *   **分析**: 多名用户反馈升级后配置文件中缺少 Wecom 配置，导致 "No Channels Enabled"。这表明近期版本的配置迁移或默认模板生成逻辑存在缺陷，对国内企业用户造成了阻碍。

3.  **项目依赖"臃肿"争议** [Issue #660](https://github.com/HKUDS/nanobot/issues/660)
    *   **热度**: 👍 4 | 评论 8
    *   **分析**: 用户质疑标榜 "ultra-lightweight" 的项目为何同时依赖 Python 和 Node.js。这引发了关于架构纯净度的讨论，维护者可能需要权衡 Docker 镜像大小与功能完整性（部分 Python 库可能依赖 Node 工具链）。

---

### 5. Bug 与稳定性
今日报告了若干影响使用体验的回归问题和环境兼容性错误，按严重程度排序：

*   **[P0 - 严重] 语音转写功能在 v0.1.4.post5 失效** [Issue #2141](https://github.com/HKUDS/nanobot/issues/2141)
    *   **现象**: 升级后 Telegram 语音消息无法转写，提示缺少 summarize skill。
    *   **状态**: Open，疑似依赖打包或安装脚本回归。
*   **[P1 - 较高] 飞书/企业微信通道无响应或崩溃** [Issue #2134](https://github.com/HKUDS/nanobot/issues/2134), [Issue #2142](https://github.com/HKUDS/nanobot/issues/2142)
    *   **现象**: 配置正确但收到消息不回复，或 WebSocket 连接失败。
    *   **状态**: 前者 Open，后者已 Closed（可能是临时性网络问题）。
*   **[P2 - 中等] 网络隔离环境下启动超时** [Issue #2145](https://github.com/HKUDS/nanobot/issues/2145)
    *   **现象**: 在无法访问外网的环境下，LiteLLM 和 tiktoken 尝试拉取远程资源导致启动卡顿或失败。
    *   **建议**: 需增加离线模式开关或预缓存机制。
*   **[P2 - 中等] 版本号显示不一致** [Issue #608](https://github.com/HKUDS/nanobot/issues/608)
    *   **现象**: `nanobot -v` 显示 `0.1.0`，而实际为 `0.1.3.post7`。源于 `__init__.py` 硬编码。

---

### 6. 功能请求与路线图信号
社区正积极推动 NanoBot 向更专业、更集成的方向发展：

*   **长期记忆**:
    *   [PR #2183](https://github.com/HKUDS/nanobot/pull/2183) 提出了集成 Honcho 以实现长期记忆的功能。这是 Agent 具备"个性化"能力的关键一步，**极有可能**被合并。
*   **运行时模型切换**:
    *   [PR #2179](https://github.com/HKUDS/nanobot/pull/2179) 添加了 `/model` 命令，允许在不重启服务的情况下动态切换 LLM（如从 GPT-4 切换到 Claude 3）。这对开发和成本控制非常实用。
*   **更多模型与渠道支持**:
    *   [PR #2181](https://github.com/HKUDS/nanobot/pull/2181) 添加了 **小米 MiMo** 模型支持。
    *   [PR #2152](https://github.com/HKUDS/nanobot/pull/2152) 及相关 Issue 呼吁原生的 WhatsApp 语音支持。
*   **可观测性**:
    *   [Issue #2154](https://github.com/HKUDS/nanobot/issues/2154) 和 [Issue #2158](https://github.com/HKUDS/nanobot/issues/2158) 强烈建议增加 **Trace ID** 和 **LLM 轨迹追踪**，以便于调试复杂的 Agent 行为。

---

### 7. 用户反馈摘要
从评论和 Issue 描述中，我们提炼出以下用户画像与痛点：

*   **部署运维痛点**: 用户非常依赖 Docker 和 Systemd，但对配置文件（`config.json`）的版本迁移感到头疼 [Issue #2163]。希望有类似 `nanobot onboard` 的向导或自动迁移工具。
*   **国内用户关注点**: 飞书和企业微信的稳定性是核心关注点，近期的不稳定性（不回复、WebSocket 崩溃）影响了信任度。
*   **进阶用户诉求**: 高级用户希望打破 "Black Box"，通过 Hooks [Issue #2182] 和 Trace ID 深度介入 Agent 生命周期，以便与企业内部系统（如 1Password [Issue #2172]）集成。
*   **对 "Lightweight" 的敏感度**: 用户对依赖项非常敏感，任何被认为 "不必要" 的依赖都会引发对项目定位的质疑。

---

### 8. 待处理积压
以下重要议题长期悬而未决或刚刚提出但需紧急关注：

1.  **多租户数据隔离** [Issue #2102](https://github.com/HKUDS/nanobot/issues/2102): 随着企业级采用增加，多用户数据隔离成为刚需，目前尚无明确方案。
2.  **SearXNG 集成** [Issue #405](https://github.com/HKUDS/nanobot/issues/405): 一个早期的功能请求，旨在提供隐私友好的搜索替代方案，至今仍 Open，建议维护者评估是否纳入 Roadmap。
3.  **本地运行成本问题** [Issue #134](https://github.com/HKUDS/nanobot/issues/134): 很多用户询问如何完全本地化运行以避免 API 费用，这需要文档层面的 "Local LLM Best Practice" 指南。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-18)

## 1. 今日速览
Zeroclaw 项目今日呈现**极高活跃度**，不仅单日发布了 **10 个版本**（从 v0.4.3 系列快速迭代至 v0.5.0-beta），且社区互动频繁，共有 41 个 Issue 更新和 50 个 PR 变动。这表明项目正处于**激进的功能开发与重构阶段**，重点转向多渠道适配（Reddit/Bluesky/WhatsApp）和知识图谱集成。然而，快速迭代也带来了一系列部署稳定性问题（特别是 Docker 和 ARM64 环境），社区正集中精力修复回归 Bug 和优化 CI 流程。

## 2. 版本发布
今日发布了从 `v0.4.3-beta.311` 到 `v0.5.0-beta.341` 共 10 个版本，显示出极其激进的迭代策略。

**核心更新亮点 (v0.5.0-beta.341):**
*   **多渠道支持**: 新增 Reddit, Bluesky, 通用 Webhook 适配器。
*   **知识图谱**: 新增知识图谱功能，用于专业知识捕获与复用。
*   **持久化**: Gateway 的 WebSocket 聊天会话现在支持跨重启持久化。
*   **工具集成**: 新增 LinkedIn 工具、WhatsApp 语音笔记、Anthropic 支持。
*   **CI/构建**: Docker 镜像开始使用预编译二进制文件以加快构建速度。

**历史版本补充:**
*   `v0.4.3`: 引入了双层响应缓存、X/Twitter 集成、健康指标监控。
*   `v0.4.3-beta` 系列: 逐步引入了 Speech-to-Text (STT) 多提供商支持、Google Workspace CLI 集成及 OAuth 修复。

**⚠️ 破坏性变更与迁移注意:**
*   **Web Dashboard**: 新版本似乎不再预构建 Web 前端，用户需手动运行 `cd web && npm ci && npm run build` (Issue #3580)。
*   **二进制大小**: 有用户反馈 `latest` Docker 镜像仅包含 292KB 的 dummy 二进制文件而非正常的 ~9MB，这可能是 CI 流程变更导致的发布故障 (Issue #3687)。

## 3. 项目进展
今日共有 **27 个 PR 被合并/关闭**，主要集中在修复构建流程、增强 Gateway 稳定性和扩展工具链。

*   **关键修复**:
    *   **CI/构建优化**: PR #3814 修复了 Debian Docker 镜像的构建超时问题，改用预编译二进制文件。
    *   **Gateway 稳定性**: PR #3813 实现了 WebSocket 会话的跨重启持久化，修复了重启丢失上下文的痛点。
    *   **前端修复**: PR #3812 修复了 Turkish 语言包的重复键值导致的构建失败。
*   **功能演进**:
    *   PR #3639 补充了 Docker/Podman 的运维文档。
    *   虽然主要是 CI 调整，但 v0.5.0 系列的发布意味着 LinkedIn、Bluesky 等新渠道已经合并入主分支。

## 4. 社区热点
今日讨论最热烈的话题集中在**安全性配置与易用性的冲突**以及**ARM64 架构支持**上。

1.  **[Enhancement] 安全策略过于严格导致不可用** (Issue #1478)
    *   **评论数**: 40
    *   **核心诉求**: 用户抱怨开启所有安全配置后，Bot 几乎拒绝执行所有操作（如安装 ffmpeg），变成了纯粹的聊天机器人。用户呼吁提供简单的“上帝模式”开关以禁用所有沙箱限制。
    *   **分析**: 这是 Agent 类产品的普遍痛点——如何在安全与能力之间取得平衡。

2.  **[Bug] ARM64 架构静默崩溃** (Issue #3537)
    *   **评论数**: 6
    *   **核心诉求**: Raspberry Pi 4 (ARM64) 上运行时，v0.2.1 之后的版本均无输出直接退出。用户怀疑是编译目标或依赖库问题。

3.  **[Bug] Matrix 渠道标志缺失** (Issue #2953)
    *   **评论数**: 5
    *   **核心诉求**: 官方发布版未包含 `channel-matrix` feature flag，导致无法使用 Matrix 协议。

## 5. Bug 与稳定性
今日 Bug 报告主要集中在**部署**和**模型调用**层面，反映出新版本快速迭代带来的不稳定性。

*   **S0 / S1 级别 (严重阻塞)**:
    *   **Docker 镜像损坏** ([#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687)): Latest 镜像二进制文件仅 292KB，导致容器启动即退出。
    *   **Web Dashboard 缺失** ([#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580)): 需手动构建前端，否则无法访问 UI。
    *   **Glibc 版本不匹配** ([#3783](https://github.com/zeroclaw-labs/zeroclaw/issues/3783)): Dockerfile.debian 构建与运行时 GLIBC 版本冲突。
    *   **OpenAI Codex/GPT-5.4 调用失败** ([#3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786)): 流式响应解码失败。*(已有修复 PR #3811 尝试回退至非流式请求)*

*   **S2 级别 (功能受损)**:
    *   **MCP 工具在 Daemon 模式不可用** ([#3782](https://github.com/zeroclaw-labs/zeroclaw/issues/3782)): 配置了远程 MCP 但在 API 调用时不可见。
    *   **SOUL.md 非加载** ([#3819](https://github.com/zeroclaw-labs/zeroclaw/issues/3819)): 在非 TTY 会话（如 crontab）中人格设定未加载。

## 6. 功能请求与路线图信号
用户对**企业级特性**和**更多渠道支持**的需求强烈。

*   **企业级监控与安全**:
    *   Issue #3767 提出跨频道的 TOTP 双因素认证，特别是针对 Shell 等高危操作的二次验证。
    *   Issue #3679 指出成本追踪功能在分支合并中丢失，呼吁恢复该企业级核心功能。
*   **架构与部署**:
    *   Issue #2765 提出了多工作空间路由的设计提案，旨在支持多租户托管部署。
    *   Issue #3759 强烈请求提供 ARMv7 的预编译二进制文件。
*   **已纳入开发的信号**:
    *   多个 PR (如 #3589 Mastodon, #3607 Voice-loop) 处于 Open 状态，表明社区正在积极贡献新的 Channel 适配器，项目正向“全渠道 AI Agent”演进。

## 7. 用户反馈摘要
*   **痛点**:
    *   **安全性反噬**: 用户因安全策略过于严格而感到沮丧，认为这扼杀了 Agent 的自主性 (#1478)。
    *   **部署门槛**: Docker 镜像问题频发（ARM64 支持、GLIBC 错误、Dummy Binary），导致“开箱即用”体验下降。
    *   **功能回归**: 从 `main` 迁移到 `master` 分支导致部分功能（如成本追踪、Copilot 提供商）丢失，引发老用户不满 (#3818)。
*   **满意点**:
    *   对新增渠道（Reddit, Bluesky）和知识图谱功能表示期待，认为这大大扩展了 Agent 的应用场景。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者优先关注：

1.  **PR #3571 - Config Hot-Reloading**: 允许在不重启 Daemon 的情况下重载配置，对于生产环境运维至关重要。
2.  **PR #3588 - Resilience Patterns**: 引入熔断和背压机制，是提升系统稳定性的关键基础设施更新。
3.  **PR #3585 - Taint Tracking**: 信息流污点追踪，这对解决 #1478 提出的安全与易用性矛盾提供了底层技术支撑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-18)

你好！我是 AI 开源项目分析师。以下是关于 PicoClaw (sipeed/picoclaw) 项目 2026年3月18日的动态日报。

---

## 1. 今日速览

PicoClaw 项目今日保持了**极高的活跃度**，随着 **v0.2.3** 正式版的发布，项目进入了密集的维护与功能迭代期。过去24小时内共有 **84 个 PR 更新**（其中 43 个待合并）和 **18 个 Issue 更新**，显示社区正在积极修复旧版本问题并探索新功能边界。本次更新重点在于**跨平台系统托盘 UI 的实现**以及对 GLM 模型输入处理的修复。虽然新版本带来了大量改进，但也暴露了网关 API 配置和 ARMv7 兼容性等新问题，整体呈现出“快速迭代、社区响应迅速”的健康状态。

---

## 2. 版本发布

### **v0.2.3 (Latest Release)**
- **发布时间**: 2026-03-18
- **更新重点**:
  - **UI 增强**: 新增了全平台（Windows/macOS/Linux）的系统托盘 UI (`systray ui`)，移除了冗余的 Darwin 托盘存根，提升了桌面端的易用性。
  - **核心修复**: 修复了 GLM 模型在处理空输入时的潜在崩溃问题 (`fix/glm-nil-input`)。
- **链接**: [v0.2.3 Release Note](https://github.com/sipeed/picoclaw/releases/tag/v0.2.3)

### **Nightly Build (v0.2.3-nightly.20260317)**
- **发布时间**: 2026-03-18
- **说明**: 自动化构建版本，包含最新的社区提交代码，可能存在不稳定性，仅供测试用途。
- **链接**: [Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)

---

## 3. 项目进展

今日共有 **41 个 PR 被合并或关闭**，主要围绕稳定性修复和架构重构：

- **配置与路由逻辑修复**: PR #1702 修复了模型负载均衡中 `model_name` 重复时的轮询逻辑，确保选择顺序正确。
- **Agent 上下文重构**: PR #1490 重构了 Agent 的上下文边界检测与压缩机制，解决了 ContextWindow 与 MaxTokens 混淆的问题，提升了长对话的稳定性。
- **日志系统修复**: PR #1640 修复了文件日志字段丢失的 Bug，确保日志记录的完整性。
- **事件驱动优化**: PR #1313 将 Cron 调度器重构为事件驱动模型，显著降低了 CPU 占用。

> **分析**: 随着合并入 PR #1490 (Agent Context) 和 PR #1702 (Config Round Robin)，项目在**多轮对话记忆管理**和**高可用负载均衡**方面迈出了坚实的一步。

---

## 4. 社区热点

今日社区讨论最热烈的话题集中在模型兼容性与架构扩展上：

1.  **Issue #1498 - [Feature] 模型端搜索与 FastEmbed**
    - **作者**: @nnhq
    - **热度**: 👍 0 | 评论: 8
    - **诉求**: 用户强烈希望能够原生支持模型端搜索（RAG增强）和轻量级 Embedding 模型 FastEmbed，以降低本地部署门槛。
    - **链接**: [Issue #1498](https://github.com/sipeed/picoclaw/issues/1498)

2.  **Issue #1615 - [Feature] 动态上下文包含发送者信息**
    - **作者**: @huer512
    - **热度**: 👍 0 | 评论: 5
    - **状态**: CLOSED (已通过 PR #1696 实现)
    - **分析**: 这是一个典型的“交互体验优化”需求，用户希望 Agent 在群聊（飞书/Slack）中能识别“谁在说话”，从而做出更精准的回复。该功能已在今日合并。

---

## 5. Bug 与稳定性

今日报告了若干影响使用的关键 Bug，特别是针对新版本 v0.2.3：

| 严重度 | Issue | 描述 | 状态/关联 PR |
| :--- | :--- | :--- | :--- |
| **高** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) | **Gateway REST API 不可用**: 升级到 v0.2.3 Docker 版后，网关仅健康检查端点可用，`/chat` 等 API 失效。 | **待修复** |
| **高** | [#1652](https://github.com/sipeed/picoclaw/issues/1652) | **GLM Coding Plan 兼容性**: 使用智谱 GLM Coding 计划时报错 429 (余额不足/资源包问题)，怀疑是模型路由错误。 | Open |
| **中** | [#1678](https://github.com/sipeed/picoclaw/issues/1678) | **Subagent 模型 ID 错误**: 异步子代理向 OpenRouter 发送了错误的原始模型 ID，导致 400 错误。 | Open |
| **中** | [#1658](https://github.com/sipeed/picoclaw/issues/1658) | **Claude Tool Use 空字符**: Claude 模型调用 Tool 时 name 字段为空导致 400 错误。 | Open |
| **低** | [#1704](https://github.com/sipeed/picoclaw/issues/1704) | **TUI 启动失败**: 在 Android Termux 环境下 Launcher TUI 无法启动。 | Open |

---

## 6. 功能请求与路线图信号

通过分析今日的 Issues 和 PRs，以下功能极有可能被纳入近期的开发路线图：

1.  **语音交互支持 (TTS/ASR)**: Issue #1648 提出了详细的 PicoClaw 音频架构设计，旨在支持语音输入输出。这符合 AI Agent 向“语音助手”演变的趋势。
2.  **多 API Key 故障转移**: PR #1707 正在开发中，支持配置多个 API Key 并自动故障转移。这对于高并发生产环境至关重要。
3.  **跨设备 Agent 通信 (TPCP)**: PR #1712 提出了基于 TCP 的跨设备通信适配器。这标志着 PicoClaw 正在尝试突破单机限制，向**分布式 Agent 集群**演进。

---

## 7. 用户反馈摘要

从今日的 Issue 评论中提炼出的真实用户痛点：

- **部署与兼容性**: 用户在非标准环境（如 **Android Termux** 和 **ARMv7 设备**）中运行遇到阻碍（Issue #1675, #1704），表明社区对边缘计算设备（如树莓派、移动端）有强需求，但当前兼容性测试不足。
- **模型配置复杂性**: Issue #1297 和 #1652 反映了在配置第三方模型（特别是 OpenRouter 和智谱 GLM 的特定套餐）时，路由逻辑不够透明，用户难以排查“余额不足”或“模型未匹配”的具体原因。
- **文档与网关**: Issue #1708 指出 Docker 镜像的行为与文档不一致，说明**文档更新滞后于代码迭代**，需引起重视。

---

## 8. 待处理积压

以下重要议题尚未得到维护者的明确回复或解决，建议关注：

1.  **Issue #1652 - GLM Coding Plan 不支持**: 涉及计费和模型路由的核心问题，影响国内用户体验。
2.  **Issue #1708 - Gateway API Missing**: 阻碍 v0.2.3 版本在 Docker 环境下的升级，属于回归问题，需紧急处理。
3.  **Issue #1475 - 结构化事件流**: 这是一个关于系统架构的高质量提议，旨在方便外部监控系统对接，目前仅维持讨论状态，尚未有实质性代码提交。

---
*日报生成时间: 2026-03-18 | 数据来源: GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-18 的动态日报。

---

# 📊 NanoClaw 项目日报 (2026-03-18)

## 1. 今日速览
NanoClaw 今日呈现出极高的社区活跃度，尤其是在功能提议和安全增强方面。过去 24 小时内，Issues 更新高达 29 条，其中包含大量高质量的功能设计提案（主要由 @butterandcode 发起）。PR 端虽有 50 条更新，但大部分处于待合并状态（38 条），仅有 12 条合并/关闭，显示出核心团队可能在处理积压或审核新特性时存在一定瓶颈。整体来看，社区正推动项目从单纯的 Claude Code 容器化工具向更健壮、更安全的 Multi-agent 平台演进。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，主要集中在生态兼容性、集成能力与错误处理方面：

*   **任务管理集成**：PR #1201 合并了 [Sunsama](https://github.com/qwibitai/nanoclaw/pull/1201) 任务管理集成，取代了原有的 `tasks.md`，提供了更完善的 CRUD 和同步能力。
*   **多端口支持**：PR #1199 解决了多 Group 运行时端口冲突的问题，允许通过配置暴露 DB Explorer 端口，提升了多实例部署的灵活性。
*   **安全性与错误修复**：
    *   PR #871 关闭，该 PR 旨在加固凭证代理，通过无条件 OAuth 注入修复凭证泄露风险，显著提升了安全性。
    *   PR #1191 停止在容器错误日志中记录用户 Prompt 内容，保护了用户隐私。
*   **多模态能力**：PR #1194 关闭，引入了 **WhatsApp 图片视觉支持**和**本地 Whisper 语音转录**功能，增强了 Agent 的多模态交互能力。

## 4. 社区热点
今日讨论最活跃、关注度最高的话题集中在**架构扩展**与**安全模型**上：

*   **🔥 逃离 Claude 生态锁定**：Issue [#80](https://github.com/qwibitai/nanoclaw/issues/80) (👍 47) 再次活跃。由于 Anthropic 开始封禁使用第三方客户端（如 OpenClaw）的账号，社区强烈呼吁支持 OpenCode、Codex、Gemini 等非 Claude 运行时，以降低供应链风险。Issue [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) 也提出了类似的并行支持请求。
*   **🛡️ 安全架构大讨论**：Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 指出“仅使用容器并不等于安全”，引发了关于信任边界和脚本存放位置的深度讨论。此外，Issue [#1149](https://github.com/qwibitai/nanoclaw/issues/1149) 有用户申请提交安全漏洞报告，表明项目正在受到白帽黑客的关注。
*   **💡 功能“轰炸”**：用户 @butterandcode 在今日集中提交了约 **15 个高质量的 Feature Request**（如社区技能注册表 [#1181](https://github.com/qwibitai/nanoclaw/issues/1181)、SQLite 全文搜索 [#1173](https://github.com/qwibitai/nanoclaw/issues/1173) 等），这些提案设计完善、动机明确，为项目路线图提供了丰富的候选目标。

## 5. Bug 与稳定性
今日报告了数个影响用户体验的关键 Bug，部分已有修复方案：

*   **🔥 严重：Agent SDK 版本过旧导致模型回退**：Issue [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) 指出容器默认搭载的 Agent SDK 版本过旧，导致默认使用旧版模型而非最新模型。
    *   *状态*：已有 PR [#1192](https://github.com/qwibitai/nanoclaw/issues/1192) 尝试在代码中显式指定模型以解决此问题。
*   **🔥 严重：Apple Container 网络故障**：Issue [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) 指出在 macOS 上使用 Apple Container 时，由于网络栈差异，容器无法访问宿主机的 `127.0.0.1`，导致凭证代理失效。
*   **⚠️ 中等：文档路径失效**：Issue [#1143](https://github.com/qwibitai/nanoclaw/issues/1143) 指出 Skills 文档中引用的 `/data/env` 路径已不存在，阻碍新用户配置。
*   **⚠️ 中等：Unicode 字符导致 Crash**：Issue [#889](https://github.com/qwibitai/nanoclaw/issues/889) 指出 Bash 工具输出中包含孤立的 Unicode 代理对会损坏 JSONL 转录文件，导致下一次 API 调用返回 HTTP 400。

## 6. 功能请求与路线图信号
结合今日的 Issues 爆发，社区明确希望 NanoClaw 演进为**更安全、更开放的 Agent 操作系统**：

1.  **生态开放**：支持多 LLM 后端已成为高优需求（#80, #1163）。
2.  **可观测性**：PR #1202 提交了带 Web UI 的 Agent 追踪功能，结合社区提出的 Token 用量追踪（#1169）和审计日志（#1174），显示“可观测性”是下一阶段重点。
3.  **安全增强**：社区提出了包括 SSRF 防护（#1170）、Prompt 注入检测（#1164）、敏感信息扫描（#1165）在内的一整套安全防御体系。
4.  **记忆与技能系统**：标准化 Skill 格式（#1178）和全量记忆导出（#1180）也是热门需求。

## 7. 用户反馈摘要
*   **痛点**：用户在受限的 K8s 环境（如 Sealos）中部署遇到困难（#1184），且对“仅支持 Claude”表示担忧（#80）。
*   **场景**：用户正在尝试将 NanoClaw 接入 WhatsApp（#1183）和 Slack（#876），并利用其进行长期的个人助理记忆管理。
*   **评价**：用户普遍认可 NanoClaw 的“轻量级”哲学，认为它相比笨重的 Agent 框架是一个清流（#1184），但对默认的安全配置（#865）和 SDK 版本管理（#1142）表示不满。

## 8. 待处理积压
*   **PR #586 (跨群组消息)** 与 **PR #565 (PID 锁文件)**：这两个核心功能 PR 已停留数周未合并，建议维护者优先 Review，以避免多实例竞争问题。
*   **PR #1202 (可观测性 UI)**：这是一个非常实用的调试工具 PR，建议尽快评估并入，将极大提升开发者体验。
*   **PR #1192 (显式模型指定)**：针对严重的模型回退 Bug（Issue #1142），该修复 PR 应优先合并。

---
*分析师：AI Open Source Analyst | 数据来源：NanoClaw GitHub Repository*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

基于您提供的 GitHub 数据，以下是 **IronClaw** 项目 2026-03-18 的动态日报。

---

# IronClaw 项目日报 (2026-03-18)

## 1. 今日速览
IronClaw 项目今日保持了**极高的活跃度**，随着 **v0.19.0** 的正式发布，项目重心正迅速向 **v0.19.1** 的补丁迭代转移。过去 24 小时内共有 44 条 Issue 更新和 50 条 PR 更新，社区互动频繁。开发重点集中在完善 **Routines（例程/定时任务）** 系统的健壮性、扩展多渠道集成能力（如 Telegram 语音、Webhook 回调）以及修复 v0.19.0 引入的部署问题。整体来看，项目处于快速功能扩张与稳定性收敛并行的阶段。

## 2. 版本发布
### ✨ v0.19.0 (2026-03-17 发布)
这是一个重要的功能性更新，主要引入了 Telegram 激活验证和配置系统的重构。
- **新增功能**:
  - **Telegram 激活验证**: 在热激活期间增加 Telegram 所有者验证 ([#1157](https://github.com/nearai/ironclaw/pull/1157))。
  - **配置重构 (Phase 2)**: 统一配置解析逻辑，增加了 `Settings` 回退机制 ([#1203](https://github.com/nearai/ironclaw/pull/1203))。
  - **Sandbox 重试逻辑**: 增加了沙盒环境的重试机制。
- **注意**: 伴随新版本发布，已有用户反馈 Webhook 路由丢失等兼容性问题，建议升级前做好测试。

## 3. 项目进展
今日合并/关闭的 PR 推动了多个关键功能的落地：
- **Telegram 集成增强**: 合并了 PR [#1295](https://github.com/nearai/ironclaw/pull/1295)，修复了现有机器人在配对流程中需要手动发送消息的体验问题，完善了 OAuth 流程。
- **Webhook 机制优化**: PR [#465](https://github.com/nearai/ironclaw/pull/465) 推进了多渠道（WhatsApp/Telegram）的历史消息加载和批量处理逻辑，解决了非 UUID 渠道的线程匹配问题。
- **CI/CD 质量控制**: PR [#1304](https://github.com/nearai/ironclaw/pull/1304) 正在推进，旨在对状态机和弹性代码（如重试、熔断逻辑）强制要求回归测试，这将显著提升核心模块的 "火星探测器级" 可靠性。

## 4. 社区热点
今日讨论最热烈的话题集中在 **API 变更** 和 **Routines 功能的深度优化**：
1.  **Brave Search API 收费争议** ([#1307](https://github.com/nearai/ironclaw/Issue/1307)):
    - 用户发现 Brave Search API 不再免费（$5/1000次请求），导致现有工具链断链。
    - **诉求**: 社区急需寻找替代方案或更新配置指引，这是一个影响面较广的阻断性问题。
2.  **Routines 功能的 UX 与底层逻辑重构**:
    - 多个 Issue (如 [#1320](https://github.com/nearai/ironclaw/Issue/1320), [#1325](https://github.com/nearai/ironclaw/Issue/1325)) 深入探讨了 Routines 的自愈能力、UI 编辑体验和并发控制。
    - **关注点**: 核心贡献者正在通过 "bug_bash" 形式系统性地理顺 `full_job` 的生命周期管理，显示出项目正试图将 Routines 从“能用”推向“生产可用”。

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕 v0.19.0 升级后的兼容性及核心调度逻辑：
- **🔴 P1 - v0.19.0 升级导致 Webhook 失效** ([#1327](https://github.com/nearai/ironclaw/Issue/1327)):
    - 升级后 Telegram Webhook 路由丢失，且发布的 Artifact 似乎过期。这直接影响了通过 Homebrew 安装的用户。
    - *状态*: OPEN，暂无关联 Fix PR。
- **🔴 P1 - Routines `full_job` 生命周期管理缺陷** ([#1317](https://github.com/nearai/ironclaw/Issue/1317)):
    - `full_job` 在调度器接受任务后立即标记为 `ok`，而非等待实际任务完成。这导致并发限制失效。
    - *状态*: OPEN，属于核心逻辑缺陷。
- **🟡 P2 - Google OAuth 参数错误** ([#992](https://github.com/nearai/ironclaw/Issue/992)):
    - Telegram 渠道发起的 Google OAuth URL 存在参数错误 (`clientid` -> `client_id`)。
    - *状态*: CLOSED (已修复)。

## 6. 功能请求与路线图信号
结合 Issue 和 PR 动向，以下功能极有可能在近期版本落地：
1.  **通用用户白名单** ([#1272](https://github.com/nearai/ironclaw/Issue/1272) + PR [#1300](https://github.com/nearai/ironclaw/pull/1300)):
    - 这是一个已提交 PR 的高优先级安全功能，允许通过环境变量限制访问 Agent 的用户 ID，防止恶意调用。
2.  **Web 端 Omnisearch 全局搜索** ([#1022](https://github.com/nearai/ironclaw/Issue/1022) + PR [#1298](https://github.com/nearai/ironclaw/pull/1298)):
    - 计划在 Web Gateway 引入类似 VS Code 的 `Cmd+K` 命令面板，支持跨线程、记忆库和工具的异步搜索。PR 已提交，进入审核阶段。
3.  **PDF 解析引擎替换** ([#1311](https://github.com/nearai/ironclaw/Issue/1311)):
    - 提议将 `pdf-extract` 替换为 `pdf_oxide`，以支持布局感知和表格提取，解决复杂文档解析乱码问题。

## 7. 用户反馈摘要
- **痛点**: 用户对第三方 API（如 Brave Search）的突然收费感到沮丧，且发现文档/配置未及时更新。此外，Telegram 机器人的首次配对流程此前过于隐晦（无提示），造成了用户困惑。
- **部署体验**: 有用户反映通过 Homebrew 安装的二进制文件与配置向导指令不一致（`ironclaw secret` 命令不存在），导致 HTTP Webhook 设置失败 ([#1308](https://github.com/nearai/ironclaw/Issue/1308))。
- **积极信号**: 社区对 Routines 的关注度极高，提交了大量高质量的增强建议（如自愈机制、UI 改进），表明核心用户群体正在重度使用该功能，并希望其更加成熟。

## 8. 待处理积压
- **Issue #857 (NEAR AI 托管感知)**: 这是一个关于 Agent 自我认知的长期 Issue，Agent 目前不知道自己运行在 NEAR AI 基础设施上，导致回答过于通用。
- **Issue #1230 (回归测试覆盖率)**: 关于强制要求状态机变更必须包含测试的提案，目前处于 OPEN 状态，需要核心维护者审批合并，这对项目长期维护至关重要。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-18 数据的 LobsterAI 项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-03-18)

### 1. 今日速览
LobsterAI 今日保持着**极高的开发活跃度**，共处理了 **24 个 PR**（其中 21 个已合并）和 **11 个 Issue**。项目刚刚发布了 **`2026.3.17`** 正式版，该版本主要聚焦于修复前几个版本的回归问题，特别是针对 OpenClaw 会话、频道消息顺序以及编码格式的修复。社区方面，用户对沙箱环境的功能缺失及自定义模型连接问题反馈强烈，建议升级用户重点关注本次版本中的配置兼容性修复。

### 2. 版本发布
- **Release: `2026.3.17`** (发布于 2026-03-17)
  - **更新重点**：这是一个稳定性修复版本，主要解决了 OpenClaw 会话管理中的系统提示词注入逻辑，并修复了频道消息乱序问题。
  - **主要变更**：
    - **系统提示词优化**：修复了系统提示词在每一轮对话中都被重复注入的问题，现仅在会话首轮注入 ([PR #456](https://github.com/netease-youdao/LobsterAI/pull/456))。
    - **消息显示修复**：修复了频道中用户消息显示在 AI 回复之后的顺序错乱问题 ([PR #401](https://github.com/netease-youdao/LobsterAI/pull/401))。
    - **初始化逻辑**：移除了导致 20 秒阻塞超时的 Model Probe 探测逻辑 ([PR #457](https://github.com/netease-youdao/LobsterAI/pull/457))。

### 3. 项目进展
今日共有 **21 个 PR 被合并**，项目在底层架构重构（特别是 OpenClaw 插件化）和稳定性修复方面取得了显著进展：

- **架构重构与集成**：
    - **NIM 迁移**：将 NIM（网易即时通讯）从本地 SDK 网关迁移至 OpenClaw 插件架构，统一了通讯通道模式 ([PR #473](https://github.com/netease-youdao/LobsterAI/pull/473))。
    - **新增 POPO 支持**：集成了 POPO 聊天机器人作为 OpenClaw 插件 ([PR #472](https://github.com/netease-youdao/LobsterAI/pull/472))。
    - **Skills 加载重构**：使用 OpenClaw 原生 Skills 加载替代了之前的 AGENTS.md 内嵌方式 ([PR #471](https://github.com/netease-youdao/LobsterAI/pull/471))。

- **关键 Bug 修复**：
    - **API Key 兼容性**：修复了无鉴权 Provider（如 Ollama, vLLM）报错 "No API key found" 的问题，自动填充占位符 Key ([PR #470](https://github.com/netease-youdao/LobsterAI/pull/470))。
    - **编码问题**：解决了短中文字符串（如 "你好"）被错误识别为 GB18030 导致乱码的问题 ([PR #461](https://github.com/netease-youdao/LobsterAI/pull/461))。
    - **定时任务迁移**：实现了历史定时任务数据的自动迁移，修复了非 IM 通道定时任务失效的问题 ([PR #465](https://github.com/netease-youdao/LobsterAI/pull/465), [PR #469](https://github.com/netease-youdao/LobsterAI/pull/469))。
    - **系统代理**：OpenClaw 运行时现已支持系统代理设置 ([PR #466](https://github.com/netease-youdao/LobsterAI/pull/466))。

### 4. 社区热点
今日社区讨论主要集中在**产品相似性**和**版本升级后的兼容性**上：

- **界面抄袭争议**：Issue [#435](https://github.com/netease-youdao/LobsterAI/issues/435) 中，用户指出 "Zeelin Claw" 等竞品界面与 LobsterAI 高度相似，怀疑是基于开源版本的未授权修改版。这反映了市场对 LobsterAI UI/UX 设计的认可，但也暴露了开源协议合规执行的挑战。
- **Token 消耗激增**：Issue [#453](https://github.com/netease-youdao/LobsterAI/issues/453)（已关闭）中用户抱怨 System Prompt 过长导致 Token 消耗巨大。虽然 Issue 已关，但结合今日 PR #456 的修复（仅在首轮注入），说明官方已从技术层面回应并解决了此问题。

### 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已在最新版本中修复：

- **🔴 严重 - 沙箱环境不可用**：Issue [#458](https://github.com/netease-youdao/LobsterAI/issues/458) 指出沙箱模式缺少 Python 等基础运行时，导致大量技能无法使用。
- **🔴 严重 - 配置丢失/不兼容**：Issue [#474](https://github.com/netease-youdao/LobsterAI/issues/474) 报告升级后定时任务消失且 Sandbox 设置选项被移除。
- **🟡 中等 - 模型连接 401**：Issue [#248](https://github.com/netease-youdao/LobsterAI/issues/248) 反映 DeepSeek/Qwen 测试连接成功但实际调用报 401 错误。
- **🟡 中等 - MCP 集成失效**：Issue [#459](https://github.com/netease-youdao/LobsterAI/issues/459) 指出新版内置 Agent 无法访问桌面版配置的 MCP（如 Notion）。
- **🟢 已修复 - 升级报错**：Issue [#452](https://github.com/netease-youdao/LobsterAI/issues/452) 报告的 `No API key found` 错误，已通过 PR #470 修复。

### 6. 功能请求与路线图信号
- **本地模型支持增强**：PR [#428](https://github.com/netease-youdao/LobsterAI/pull/428) 提议增加 **LM Studio** 作为模型提供商。鉴于其与 Ollama 相似的模式及社区对本地推理的需求，该功能极有可能被合入下个版本。
- **构建与打包**：PR [#475](https://github.com/netease-youdao/LobsterAI/pull/475) 试图解决 Windows 下 Python 运行时打包后的递归错误，这对提升 Windows 用户的技能使用体验至关重要。

### 7. 用户反馈摘要
- **痛点**：**自动加空格**问题（Issue #344）仍是顽固痛点，严重影响中文+数字混合文本的处理；**沙箱功能**在最新版的变动让高级用户感到困惑和不适。
- **场景**：用户普遍尝试将 LobsterAI 作为 OpenClaw 的替代品进行自动化任务处理，对 Token 消耗和 API 稳定性非常敏感。
- **评价**：虽然存在 Bug，但用户对修复速度（如 System Prompt 重复注入问题）表示了认可，并对界面设计给予高度评价（以至于被竞品抄袭）。

### 8. 待处理积压
- **Issue #344** ([链接](https://github.com/netease-youdao/LobsterAI/issues/344))：**中文数字间自动加空格**问题已持续多日，用户情绪从反馈转为焦躁，建议开发团队优先排查文本清洗逻辑。
- **Issue #368** ([链接](https://github.com/netease-youdao/LobsterAI/issues/368))：Ubuntu 24.04 自行编译版本白屏问题仍未有官方回应，可能影响开发者社区的参与度。
- **Issue #435** ([链接](https://github.com/netease-youdao/LobsterAI/issues/435))：关于竞品抄袭的法律/合规问题，虽然不是代码问题，但建议维护者在社区层面给予适当的回应或声明。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于 2026-03-18 数据生成的 TinyClaw 项目动态日报。

---

# 📊 TinyClaw 项目日报 (2026-03-18)

### 1. 今日速览
TinyClaw 项目今日保持**高活跃度开发状态**，重点关注 **TinyOffice** 工作空间的重构与稳定性修复。尽管过去 24 小时内无新版本发布，但社区贡献了 4 个待合并的高质量 PR，显示出核心团队正在为下一次重大更新积蓄力量。值得警惕的是，CLI 配置模块报告了一个严重等级较高的 Bug，可能影响用户环境稳定性。此外，针对 Next.js SSE 流媒体传输的架构优化正在进行中，预示着前端体验将有显著提升。

### 2. 版本发布
*   **无新版本发布**：截至 2026-03-18，官方暂未发布新的 Release 版本。建议开发者关注 `main` 分支动态，特别是 `feat(office)` 相关分支的变更。

### 3. 项目进展
今日无已合并的 PR，但有 4 个关键 PR 处于 **Open/待合并** 状态，涵盖了架构重构、功能增强和 Bug 修复：

*   **架构重构 (核心)**：PR [#213](https://github.com/TinyAGI/tinyclaw/pull/213) 提议大幅简化队列模式，移除会话状态，转而使用扁平化 DM 通信。这标志着项目正在向**轻量化、流式响应架构**转型。
*   **前端重设计**：PR [#212](https://github.com/TinyAGI/tinyclaw/pull/212) 正在对 `/office` 页面进行彻底重设计，旨在提升用户交互体验。
*   **部署与配置增强**：PR [#214](https://github.com/TinyAGI/tinyclaw/pull/214) 引入了 Web 端初始化设置和自定义 API URL 配置，降低新用户通过 CLI 配置的门槛。
*   **流式响应修复**：PR [#232](https://github.com/TinyAGI/tinyclaw/pull/232) 针对 TinyOffice 的 SSE 连接问题提供了修复方案，绕过了 Next.js 的缓冲机制。

### 4. 社区热点
今日社区讨论主要集中在以下两个痛点：

*   **Issue #228 [Bug]: Changing heartbeat resets complete agents**
    *   **链接**: [TinyAGI/tinyclaw Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228)
    *   **分析**: 这是一个**严重级别**的问题。用户在使用 CLI 修改心跳配置时，意外触发了完整 Agent 设置的重置。这反映出当前的 CLI 配置修改逻辑可能缺乏必要的边界检查或数据保护机制。已有 2 条评论讨论此问题，显示该问题复现率较高。
*   **Issue #231 TinyOffice SSE always shows Disconnected**
    *   **链接**: [TinyAGI/tinyclaw Issue #231](https://github.com/TinyAGI/tinyclaw/issues/231)
    *   **分析**: 用户报告 TinyOffice 界面始终显示“断开连接”。社区迅速定位了根因为 Next.js Rewrite 规则缓冲了 SSE 流。该 Issue 随后产生了对应的修复 PR (#232)，体现了社区从“发现问题”到“提出方案”的高效闭环。

### 5. Bug 与稳定性
今日报告的 Bug 主要影响用户体验和配置安全性：

1.  **🔴 严重 - CLI 配置导致数据丢失**
    *   **Issue**: [#228](https://github.com/TinyAGI/tinyclaw/issues/228)
    *   **描述**: 用户尝试通过 `tinyclaw setup` 修改心跳设置，结果导致整个 Agent 设置被销毁/重置。
    *   **状态**: 目前尚无针对此特定 Bug 的修复 PR（PR #214 虽涉及 setup 但侧重于 Web 端），需核心团队紧急关注。
2.  **🟡 中等 - 前端 SSE 连接状态误报**
    *   **Issue**: [#231](https://github.com/TinyAGI/tinyclaw/issues/231)
    *   **描述**: Next.js 代理层缓冲了 Event Stream，导致前端无法实时接收状态，误显示为 Disconnected。
    *   **修复状态**: **已有修复 PR** [#232](https://github.com/TinyAGI/tinyclaw/pull/232)，建议优先 Review。

### 6. 功能请求与路线图信号
*   **Web 端初始化**: Issue #228 暴露的 CLI 痛点与 PR [#214](https://github.com/TinyAGI/tinyclaw/pull/214) 提出的 `--skip-setup` 及 Web 配置页面的功能不谋而合。这表明项目正在尝试**摆脱对 CLI 交互式配置的强依赖**，转向更安全的 Web UI 配置方式，这极有可能成为下个版本的重点。
*   **无状态架构**: PR [#213](https://github.com/TinyAGI/tinyclaw/pull/213) 暗示了项目未来的技术路线——**去状态化**，通过即时流式响应替代复杂的会话追踪，这通常意味着更好的水平扩展能力。

### 7. 用户反馈摘要
*   **痛点**: CLI 的 `setup` 向导缺乏对特定参数（如 heartbeat）的单独修改能力，容易导致“牵一发而动全身”的配置重置，令用户感到沮丧。
*   **场景**: 用户需要在保持现有 Agent 配置不变的情况下，动态调整心跳或连接参数。
*   **技术反馈**: 开发者对 Next.js 在 SSE 场景下的默认行为感到困扰，倾向于直连 API 端口以规避框架限制。

### 8. 待处理积压
*   **PR Review 积压**: 目前有 4 个功能性 PR ([#213](https://github.com/TinyAGI/tinyclaw/pull/213), [#232](https://github.com/TinyAGI/tinyclaw/pull/232), [#212](https://github.com/TinyAGI/tinyclaw/pull/212), [#214](https://github.com/TinyAGI/tinyclaw/pull/214)) 处于 Open 状态，且均无近期合并迹象。建议维护者优先处理 **修复类 PR #232** 和 **架构类 PR #213**，以便推进后续测试。
*   **严重 Bug 验证**: Issue [#228](https://github.com/TinyAGI/tinyclaw/issues/228) 涉及数据安全，建议维护者尽快确认并在主分支打补丁。

---
*数据来源: GitHub TinyClaw Repository | 分析时间: 2026-03-18*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是 **Moltis** 项目 2026-03-18 的日报分析。

# Moltis 项目动态日报 (2026-03-18)

## 1. 今日速览
Moltis 项目今日整体呈现**高研发活跃度**状态，核心开发重心集中在**多模型兼容性修复**与**系统安全性增强**。过去24小时内共有 5 个 PR 更新，其中 2 个修复性 PR 已合并，显著提升了对 Qwen 等模型的兼容性及执行工具的稳定性。社区方面，关于 Lark/Feishu 集成的需求热度较高，显示企业级协作工具集成是当前用户的主要痛点之一。目前有 3 个功能性 PR 处于待合并状态，预示着网关安全性与 MCP 自定义功能即将迎来更新。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 **2 个 PR 被合并**，主要解决了模型推理和工具调用的稳定性问题，项目健壮性得到提升：

*   **[MERGED] 修复 Qwen 等模型的 Jinja 模板报错** (PR #431)
    *   **内容**：解决了通过 llama.cpp 使用 Qwen 模型时，因多个 system 消息或顺序错误导致的 `Jinja Exception` 崩溃问题。合并了 system 消息的处理逻辑。
    *   **价值**：显著改善了本地/兼容 API 模型（特别是 GGUF 格式）的用户体验，降低了推理中断率。
    *   **链接**：[moltis-org/moltis PR #431](https://github.com/moltis-org/moltis/pull/431)

*   **[MERGED] 优化无节点配置时的执行逻辑** (PR #435)
    *   **内容**：当未配置节点时，隐藏执行工具中的 `node` 参数，防止模型（如 Qwen3-Coder）产生幻觉去猜测参数值导致反复执行失败。
    *   **价值**：减少了无效的工具调用循环，提升了 Agent 执行任务的成功率。
    *   **链接**：[moltis-org/moltis PR #435](https://github.com/moltis-org/moltis/pull/435)

## 4. 社区热点
今日最受关注的讨论是关于扩展即时通讯平台的支持：

*   **[Feature]: Support Lark/Feishu** (Issue #383)
    *   **状态**：Open | 👍：3 | 评论：2
    *   **分析**：用户强烈希望能将 Moltis 接入飞书/Lark 生态。这表明 Moltis 的用户群体中存在相当比例的企业级/团队协作场景需求。目前的 3 个点赞和讨论显示这是一个高优先级的功能缺口。
    *   **链接**：[moltis-org/moltis Issue #383](https://github.com/moltis-org/moltis/issues/383)

## 5. Bug 与稳定性
今日无新报告的严重崩溃或回归问题，主要以修复已知问题的 PR 为主（见第3部分）。值得注意的是，今日的更新主要针对**特定模型（Qwen, MiniMax）的兼容性**和**工具调用的容错性**，建议用户更新至最新代码以获得最佳稳定性。

*   **待观察**：PR #448 提到 MiniMax 模型在系统消息历史记录处理上存在逻辑差异，目前已有修复方案待合并。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，项目下一阶段的迭代方向显现出以下信号：

*   **安全性增强**：PR #449 引入了通道配置的敏感信息掩码和清洗机制，表明项目正在加强企业级数据安全防护，为生产环境部署做准备。
    *   [PR #449 feat(gateway): sanitize channel config](https://github.com/moltis-org/moltis/pull/449)
*   **MCP (Model Context Protocol) 易用性**：PR #439 增加了 MCP 服务器的自定义显示名称功能，显示出团队正在致力于优化开发者和用户在配置管理上的体验。
    *   [PR #439 feat(mcp): add custom display names](https://github.com/moltis-org/moltis/pull/439)
*   **平台集成**：Issue #383 (Lark/Feishu) 的活跃度暗示多平台网关可能是未来版本的重点。

## 7. 用户反馈摘要
*   **痛点**：在使用本地模型（特别是 Qwen 系列）或特定兼容 API（MiniMax）时，消息格式处理较为敏感，容易触发模板错误或丢失上下文，今日的 PR #431 和 #448 正是对此反馈的积极响应。
*   **场景**：用户倾向于在少样本或无明确指引的情况下让 Agent 自主执行命令，因此工具参数的显隐（PR #435）对模型能否“自主纠错”至关重要。

## 8. 待处理积压
*   **PR #448, #449, #439**：这三个功能性/修复性 PR 目前仍处于 Open 状态，建议维护者优先 Review 并合并，特别是 PR #448 涉及 MiniMax 提供商的核心逻辑修复。
*   **Issue #383 (Lark/Feishu)**：鉴于其活跃度较高，建议团队评估将其纳入近期 Roadmap 或邀请社区贡献者参与开发。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 **CoPaw** 项目 2026-03-18 动态日报。

---

# CoPaw 项目动态日报 (2026-03-18)

## 1. 今日速览
CoPaw 项目今日保持了**极高的活跃度**，正在经历从 `0.0.7` 向 `0.1.0` 正式版过渡的关键阶段。过去 24 小时内，项目发布了 **2 个 Beta 版本** (v0.1.0-beta.1, v0.1.0-beta.2)，主要解决了底层 SDK 的破坏性变更问题。社区参与度高涨，Issue 更新达 50 条，PR 更新 50 条，其中合并了 32 个 PR。目前的开发重心集中在 **记忆管理的稳定性**、**多渠道适配（飞书/钉钉/Nextcloud）** 以及 **本地模型调用的兼容性** 上。

## 2. 版本发布
今日连续发布两个 Beta 版本，标志着 v0.1.0 正式版即将到来：

*   **v0.1.0-beta.2**
    *   **类型**: 紧急修复/依赖升级
    *   **核心变更**: 修复了 `a2a-sdk~=1.0.0` 引入的破坏性变更，升级 `agentscope-runtime` 至 1.1.1。
    *   **迁移注意**: 这是一个强制升级版本，旧版 SDK 可能导致运行时错误。
    *   **详情链接**: [GitHub Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.2) | [PR #1684](https://github.com/agentscope-ai/CoPaw/pull/1684)

*   **v0.1.0-beta.1**
    *   **类型**: 版本冻结/初步修复
    *   **核心变更**: 版本号冲刺至 0.1.0；修复了前端页面刷新重定向问题；修复了 Skill 导入路径包含 `/` 时的失败问题。
    *   **详情链接**: [GitHub Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.1)

## 3. 项目进展
今日共有 **32 个 PR 被合并**，显示出维护团队高效的代码审查和迭代速度。主要进展如下：

*   **架构与稳定性**:
    *   [PR #1664](https://github.com/agentscope-ai/CoPaw/pull/1664) **实现 Agent 零停机重载**：解决了修改 Agent 配置导致服务中断的痛点，显著提升用户体验。
    *   [PR #1670](https://github.com/agentscope-ai/CoPaw/pull/1670) 修复了多 Agent 心跳检测问题。
*   **模型与内存**:
    *   [PR #1676](https://github.com/agentscope-ai/CoPaw/pull/1676) 为非多模态 LLM 增加了过滤媒体块的功能，防止因发送不支持的文件导致 API 报错。
    *   [PR #1628](https://github.com/agentscope-ai/CoPaw/pull/1628) 增强了内存管理，引入了 Token 计数器和历史记录管理功能。
*   **生态集成**:
    *   [PR #1478](https://github.com/agentscope-ai/CoPaw/pull/1478) (待合并/Open) 社区贡献了 **Nextcloud Talk** 频道集成。
    *   [PR #1673](https://github.com/agentscope-ai/CoPaw/pull/1673) 增加了 ModelScope SkillHub 支持。

## 4. 社区热点
今日社区讨论聚焦于 **本地部署体验** 和 **记忆管理的可靠性**：

1.  **[Issue #1610] 容器化部署的强依赖性问题**
    *   **热度**: 14 评论
    *   **痛点**: NAS 用户反馈关闭 Web 前端后，当前任务会被强制中断。用户期望 AI 助手能作为后台服务 24 小时运行，而不是依赖浏览器会话保持活跃。
    *   **链接**: [Issue #1610](https://github.com/agentscope-ai/CoPaw/issues/1610)

2.  **[Issue #1682] Windows 新版本启动失败**
    *   **热度**: 12 评论
    *   **痛点**: v0.1.0b 版本在 Windows 环境下安装后无法启动，出现模块导入错误 (`ModuleNotFoundError` 或类似 Traceback)。
    *   **链接**: [Issue #1682](https://github.com/agentscope-ai/CoPaw/issues/1682)

3.  **[Issue #1345] 飞书频道“延迟回复”问题**
    *   **热度**: 8 评论
    *   **痛点**: 这是一个典型的“请求-响应”错位问题。Bot 经常忽略当前问题，回答上一个问题，严重影响对话体验。
    *   **链接**: [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345)

## 5. Bug 与稳定性
今日报告的 Bug 集中在新版本兼容性和内存模块，部分已有修复方案：

*   **🔴 严重 - 启动崩溃**:
    *   [Issue #1682](https://github.com/agentscope-ai/CoPaw/issues/1682): Windows 0.1.0b 版本无法启动 (Traceback 涉及 `lazy_loader`)。
    *   [Issue #1687](https://github.com/agentscope-ai/CoPaw/issues/1687): Windows 安装极慢且安装后无界面响应。
*   **🟠 中等 - 记忆与上下文**:
    *   [Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222): 消息压缩后数量不匹配导致 API 调用失败。**注意**: 社区已提交 [PR #1557](https://github.com/agentscope-ai/CoPaw/pull/1557) 试图修复 `reasoning_content` 注入顺序问题，但尚未合并。
    *   [Issue #1454](https://github.com/agentscope-ai/CoPaw/issues/1454): 记忆压缩时，Summarizer 的输出发送到了错误的通道（日志而非用户对话）。
*   **🟡 一般 - 配置持久化**:
    *   [Issue #1604](https://github.com/agentscope-ai/CoPaw/issues/1604): 语言设置（中文）重启后失效，恢复为英文。

## 6. 功能请求与路线图信号
*   **多 Agent 编排**: [Issue #508](https://github.com/agentscope-ai/CoPaw/issues/508) 呼吁实现 Multi-Agent 网关。当前架构仍为单 Agent，用户希望能支持主 Agent 调用子 Agent 并行处理复杂任务。
*   **轻量化部署**: [Issue #1648](https://github.com/agentscope-ai/CoPaw/issues/1648) 建议发布 Lite 版本 Docker 镜像，剔除 `transformers`, `llama.cpp` 等重型依赖，适合外部调用 API 的用户。
*   **飞书深度集成**: [Issue #1657](https://github.com/agentscope-ai/CoPaw/issues/1657) 请求适配飞书官方插件以获得文档编辑权限，这表明企业级用户对自动化办公的需求强烈。

## 7. 用户反馈摘要
*   **本地模型支持尚需打磨**: 使用 Ollama 或 `llama.cpp` 部署本地模型（如 Qwen3.5）的用户遇到了较多错误（如 Issue #823, #1655），主要集中在模型加载失败和指令集不兼容（Windows CPU指令集报错）。
*   **记忆机制“过拟合”**: 用户反馈记忆压缩机制过于激进，有时会压缩几秒前的对话，导致短期记忆丢失，或者引用很久以前不相关的信息（Issue #1596）。
*   **对 24h 运行的渴望**: 多位 NAS 用户强调了后台静默运行的重要性，不希望前台网页状态影响后台任务。

## 8. 待处理积压
*   **[PR #1557] Memory Mismatch 修复**: 该 PR 解决了 API 调用时 Message Count 不匹配的严重问题，目前状态为 Open，建议维护者优先 Review 并合并。
*   **[Issue #352] 多用户隔离**: 这是一个较早提出的架构性问题（记忆和 Skill 按用户维度隔离），目前仍处于 Open 状态，随着多用户场景增加，需提上日程。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是根据 ZeptoClaw 项目 2026-03-18 的 GitHub 数据生成的动态日报。

---

# ZeptoClaw 项目动态日报 (2026-03-18)

## 1. 今日速览
ZeptoClaw 项目今日保持**高活跃度**的开发状态，重点关注基础设施维护与安全性增强。
- **Issue 活跃**：共更新 6 条 Issues，其中 3 条为新开的功能提案，3 条已顺利关闭，显示了维护者高效的响应速度。
- **PR 动态**：PR 池迎来大幅更新，新增 15 条 PR，绝大部分为 Dependabot 提交的依赖升级（涵盖 Rust、JS、Actions 和 Docker），表明项目正在积极进行技术栈的现代化与安全补丁更新。
- **整体健康度**：项目处于“稳健迭代期”，虽然在核心功能上没有发布新版本，但在安全性（网络策略、凭证存储）和工具链完善度（容器化模板）上有显著的规划落地。

## 2. 版本发布
- **无新版本发布**。
    - 当前项目重心似乎在于积攒功能特性与维护依赖稳定性，尚未达到发布新 Release 的节点。

## 3. 项目进展
今日有 **1 个 PR 被关闭**（#370），以及 **3 个 Issue 被解决**，主要集中在开发环境修复与 bug 修正：

- **开发环境修复**：Issue #369 修复了在 Rootless Podman 环境下运行 Lint 容器时的权限问题。通过重新映射 `CARGO_HOME`，解决了非 root 用户无法写入缓存的问题，这对 CI/CD 流畅度至关重要。
    - 链接: [Issue #369](https://github.com/qhkm/zeptoclaw/issues/369)
- **Bug 修复**：Issue #368 解决了一个关键的 Agent 逻辑问题——在多轮对话工具调用中图片未能转换为 base64。该修复确保了多模态交互的稳定性。
    - 链接: [Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)
- **PR 关闭**：PR #370 (`feat/webex channel`) 被关闭。虽然未合并，但标志着对特定频道支持的初步探索已告一段落（可能是功能重构或暂缓）。
    - 链接: [PR #370](https://github.com/qhkm/zeptoclaw/pull/370)

## 4. 社区热点
今日最活跃的讨论集中在几个高优先级的**功能增强提案**上，反映了社区对安全性和扩展性的强烈需求：

- **安全性架构升级**：Issue #373 提议将 API 密钥从 `config.json` 中剥离，存入独立的凭证文件（类似 NemoClaw 模式）。这反映了用户对配置文件共享时的隐私安全顾虑。
    - 链接: [Issue #373](https://github.com/qhkm/zeptoclaw/issues/373)
- **网络防御机制**：Issue #371 建议引入“默认拒绝”的 YAML 网络出口策略。讨论热度较高，表明在企业级或高安全场景下，用户需要更细粒度的网络控制能力。
    - 链接: [Issue #371](https://github.com/qhkm/zeptoclaw/issues/371)
- **容器化与隔离**：Issue #387 提出了基于 Containerfiles 的 "ZeptoCapsules" 概念，旨在将编码代理框架容器化。该提议虽然具有争议性，但切中了当前 AI Agent 环境配置复杂、依赖冲突的痛点。
    - 链接: [Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)

## 5. Bug 与稳定性
今日报告并确认/解决的问题如下，整体稳定性有所提升：

1.  **[P2-High] 工具循环中图片未解析 (已修复)**
    - **问题**：Agent 在后续工具调用中未将图片路径转为 base64，导致 LLM API 调用失败。
    - **状态**：Issue #368 已关闭，推测已在主分支修复。
    - **链接**: [Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)

2.  **[P2-High] Rootless Podman CI 失败 (已修复)**
    - **问题**：`lint-container.sh` 在非 root 容器中因权限问题无法写入 Cargo 缓存。
    - **影响**：影响开发者本地 CI 流程。
    - **状态**：Issue #369 已关闭，已通过环境变量重定向解决。
    - **链接**: [Issue #369](https://github.com/qhkm/zeptoclaw/issues/369)

## 6. 功能请求与路线图信号
从今日的 Issues 可以清晰地看出 ZeptoClaw 的下一阶段路线图信号：

- **信号 1：向生产级安全标准靠拢**
    - **凭证分离 (#373)** 和 **网络出口策略 (#371)** 的提出，标志着项目正从“开发工具”向“生产环境可信代理”转型。
- **信号 2：提升长时间任务的体验**
    - **结构化进度协议 (#372)** 请求为长时间运行的工具（如网页抓取）提供进度反馈。这将显著改善用户体验，减少因等待超时导致的误操作。
- **信号 3：底层依赖全面升级**
    - 14 个待合并的依赖更新 PR（包括 `rustyline`, `toml`, `docker actions` 等）表明项目正在为下一阶段的开发夯实基础，特别是 Docker Actions 的大版本升级（v4/v7）可能预示着 CI/CD 流程的重大变更。

## 7. 用户反馈摘要
从 Issue 详情中提炼出的用户心声：

- **痛点：配置分享的安全风险**。用户不希望为了分享非敏感配置而意外泄露 API Key（Issue #373）。
- **痛点：执行长任务时的“黑盒”感**。用户希望看到爬虫或复杂任务执行的百分比进度，而不是单纯等待（Issue #372）。
- **痛点：环境一致性**。开发者希望在 Rootless Podman 等非标准环境下也能顺畅运行 Lint 工具（Issue #369）。

## 8. 待处理积压
虽然今日活跃度较高，但仍需关注以下积压项：

- **PR #287 (Dev Tools)**：该 PR 旨在提供一致的预发布状态环境，已创建多日但今日仅活跃未合并。这是一个“Blocker”级别的改进，建议优先 Review 并合并，以统一开发者的贡献基准。
    - 链接: [PR #287](https://github.com/qhkm/zeptoclaw/pull/287)
- **大量 Dependabot PRs**：共有 14 个依赖更新 PR 待合并。建议维护者进行批量测试和合并，以防止依赖版本落后带来的安全风险。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-18)

**分析师**：AI OpenSource Analyst
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体呈现**低交互、高交付**的稳健状态。虽然社区侧的 Issues 讨论暂时沉寂（0 条更新），但核心开发团队并未停滞，一次性发布了 **v1.6.8** 和 **v1.7.0** 两个版本，显示出功能迭代正在加速。随着 PR #15 的合并，项目重点明显转向了 macOS 平台的体验优化。整体来看，项目处于功能完善期，暂无明显的社区冲突或阻塞问题。

### 2. 版本发布
今日连续发布两个版本，建议用户优先升级至 **v1.7.0**。

*   **[v1.7.0: RivonClaw v1.7.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)**
    *   **更新重点**：这是目前的最新稳定版。
    *   **已知问题/提示**：macOS 用户可能会遇到 **"'RivonClaw' is damaged and can't be opened"** 的错误。这是 macOS Gatekeeper 对未签名应用的拦截，并非文件损坏。
    *   **解决方案**：需通过终端 (Terminal) 执行移除隔离属性命令（详见 Release Note）。

*   **[v1.6.8: EasyClaw v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8)**
    *   **更新重点**：作为 v1.7.0 的前置版本，同样包含了对 macOS 安装流程的说明更新。
    *   **注意**：若从旧版本跨版本升级，建议检查配置文件兼容性（虽 Release Note 未提及 Breaking Changes，但跨越两个小版本建议备份配置）。

### 3. 项目进展
今日有一项关键代码合并，直接提升了桌面端的集成度。

*   **[[PR #15] fix: app icon in macos dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15)**
    *   **状态**：已关闭/合并
    *   **贡献者**：@mylinkedai
    *   **分析**：该 PR 修复了应用在 macOS Dock（程序坞）和系统托盘（菜单栏）中图标显示不正确的问题。这通常是桌面应用打包阶段的细节问题，该修复显著提升了应用在 macOS 上的原生化体验和品牌识别度。结合今日发布的 v1.7.0，该修复已包含在最新版本中。

### 4. 社区热点
*   **数据表现**：过去 24 小时内 Issues 更新为 0 条。
*   **分析**：社区目前处于"观察期"或"消化期"。考虑到刚刚发布了大版本更新（v1.7.0），通常用户需要几天时间试用后才会产生新的反馈。目前无热点讨论。

### 5. Bug 与稳定性
*   **潜在风险（非代码级）**：今日 Releases 中重点标注了 **macOS Gatekeeper 拦截问题**。虽然这严格来说不是代码 Bug，但属于严重影响 macOS 用户体验的**P0级阻碍**。
    *   **严重程度**：高（会导致普通用户无法启动应用）。
    *   **状态**：官方已在 Release Note 中提供手动解决方案（Terminal 命令），暂无代码层面的自动修复（如申请签名证书）。
*   **已修复 Bug**：macOS 图标显示异常（通过 PR #15 修复）。

### 6. 功能请求与路线图信号
*   **信号**：今日无新增功能请求。
*   **推测**：从 v1.6.8 跳跃至 v1.7.0 来看，项目可能正处于功能收敛或重构阶段（Release Note 中应用名从 EasyClaw 变为 RivonClaw，暗示可能有品牌或架构调整）。目前的路线图重点似乎是**多平台兼容性**（特别是 macOS 的签名与 UI 适配）。

### 7. 用户反馈摘要
*   由于今日无 Issue 评论数据，反馈主要来源于 Release Notes 的预设内容。
*   **核心痛点**：macOS 用户对“应用已损坏”的提示感到困惑，这是当前最大的上手门槛。
*   **建议**：维护者未来可考虑申请 Apple Developer 证书进行签名，以彻底解决此体验问题。

### 8. 待处理积压
*   **当前状态**：由于今日无活跃 Issues，暂无明显的“长期未响应”积压项目暴露。
*   **维护建议**：鉴于今日发布了新版本，建议维护者在接下来的 24-48 小时内密切监视 Issue Tracker，以应对 v1.7.0 发布后可能涌现的兼容性反馈。

---
**总结**：EasyClaw 今日完成了从修图（PR #15）到发版（v1.7.0）的闭环，项目健康度良好，主要挑战在于 macOS 的分发体验。

</details>