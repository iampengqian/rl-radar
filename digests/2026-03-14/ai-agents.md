# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-13 22:04 UTC

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

# OpenClaw 项目动态日报 (2026-03-14)

你好！我是 OpenClaw 项目分析师。以下是基于 2026 年 3 月 14 日 GitHub 数据生成的最新项目动态日报。

## 1. 今日速览

OpenClaw 今日处于**高热度伴随高波动**状态。项目发布了重大更新 **v2026.3.12**，引入了全新的 Dashboard UI 和 GPT-5.4 模型支持，社区活跃度极高（24小时内 Issues/PR 更新均达 500 条上限）。然而，新版本引发了广泛的**稳定性危机**，大量用户报告了内存溢出（OOM）、UI 崩溃和 WhatsApp 连接中断等严重回归问题。目前社区正在紧急修复中，维护者面临着平衡新功能迭代与系统稳定性的巨大挑战。

## 2. 版本发布

### **v2026.3.12** (OpenClaw 2026.3.12)

本次更新带来了显著的用户界面重构和模型升级，但也引入了较多破坏性变更。

*   **Control UI/dashboard-v2 重构**:
    *   **更新内容**: 全面刷新了网关控制面板，采用模块化视图，包括总览、聊天、配置、Agent 和会话视图。
    *   **新增功能**: 增加了命令面板、移动端底部标签页，以及更丰富的聊天工具（斜杠命令、搜索、导出、置顶消息）。
    *   **破坏性变更/注意**: 新 UI 架构似乎导致了大量 UI 渲染错误和状态丢失问题（详见 Bug 章节）。建议生产环境用户暂缓升级或做好回滚准备。
*   **模型支持**: 集成 **OpenAI/GPT-5.4**。
*   **相关链接**: [Release v2026.3.12](https://github.com/openclaw/openclaw/releases/tag/v2026.3.12) | [PR #41503](https://github.com/openclaw/openclaw/pull/41503) Thanks @BunsDev.

## 3. 项目进展

今日共有 **138** 个 PR 被合并/关闭，主要集中在修复 v2026.3.12 引发的回归问题以及构建性能优化。

*   **关键修复 (Fixes)**:
    *   **[已合并] 内存回归修复**: PR [#45426](https://github.com/openclaw/openclaw/pull/45426) 修复了 `plugin-sdk` chunks 重复导致的约 2 倍内存增长问题，这是导致 OOM 的核心原因之一。
    *   **[已合并] 网关重启修复**: PR [#41510](https://github.com/openclaw/openclaw/pull/41510) 修复了 macOS LaunchAgent 重启路径问题。
    *   **[已合并] 服务更新修复**: PR [#45452](https://github.com/openclaw/openclaw/pull/45452) 修复了更新器刷新服务环境时的 CWD 错误。
*   **功能增强**:
    *   **[已合并] Web UI 优化**: PR [#45451](https://github.com/openclaw/openclaw/pull/45451) 优化了侧边栏状态和聊天渲染，缓解了部分 UI 问题。
*   **待处理**: 仍有 **362** 个 PR 处于待合并状态，积压较多，需维护者加快 Review 速度。

## 4. 社区热点

今日讨论焦点集中在国际化需求和新版本的功能请求上，同时也夹杂着对现状的不满。

1.  **[热度 Top 1] 国际化 (i18n) 支持** - **101 评论**
    *   **Issue [#3460](https://github.com/openclaw/openclaw/issues/3460)**: 社区强烈要求支持多语言，但官方表示目前没有带宽支持。用户正在讨论是否通过 PR 形式贡献，但担心缺乏维护导致碎片化。
2.  **[热度 Top 2] Linux/Windows 原生客户端** - **38 评论**
    *   **Issue [#75](https://github.com/openclaw/openclaw/issues/75)**: 用户 @steipete 指出目前仅有 macOS 和移动端 App，Linux 和 Windows 缺失，讨论集中在跨平台实现的技术选型上。
3.  **[热度 Top 3] OpenCode Go 订阅集成** - **23 评论**
    *   **Issue [#27009](https://github.com/openclaw/openclaw/issues/27009) [CLOSED]**: 用户希望集成 OpenCode 的 $10 订阅计划以便使用 Kimi K2.5 等模型。该 Issue 已关闭，可能已被采纳或已有替代方案。
4.  **[热度 Top 4] xAI Grok 原生工具支持** - **15 评论**
    *   **Issue [#6872](https://github.com/openclaw/openclaw/issues/6872)**: 用户反馈 Grok 4.1 Fast 在 OpenClaw 中表现受限，希望能配置 `x_search` 等原生工具。

## 5. Bug 与稳定性

**严重警告**: v2026.3.12 版本存在严重的内存泄漏和 UI 稳定性问题，影响范围极广。

*   **🔴 严重 - 内存溢出与崩溃**
    *   **CLI OOM**: 升级后执行基本命令 (`gateway status`) 即触发 JavaScript heap out of memory。**已有 Fix PR [#45426](https://github.com/openclaw/openclaw/pull/45426)**。
        *   Issue [#45064](https://github.com/openclaw/openclaw/issues/45064) | Issue [#41778](https://github.com/openclaw/openclaw/issues/41778)
    *   **Raspberry Pi 4 失效**: 在树莓派等低内存设备上迅速 OOM 并导致 UI 断连。
        *   Issue [#45440](https://github.com/openclaw/openclaw/issues/45440)
*   **🟠 高 - UI/功能回归**
    *   **UI 崩溃**: 使用 `/compact` 命令导致主 Webchat 界面崩溃并显示白色三角图标，无法恢复。
        *   Issue [#44755](https://github.com/openclaw/openclaw/issues/44755)
    *   **WhatsApp 通道失效**: 显示已连接但无法收发消息。
        *   Issue [#45171](https://github.com/openclaw/openclaw/issues/45171) (外发失败) | Issue [#45474](https://github.com/openclaw/openclaw/issues/45474) (入站丢失)
    *   **设备认证死循环**: Control UI 在跨设备访问时报错 "device identity required"。
        *   Issue [#39611](https://github.com/openclaw/openclaw/issues/39611) | Issue [#44967](https://github.com/openclaw/openclaw/issues/44967) [CLOSED]
    *   **配置循环**: Web UI 验证报错 `models.0.id undefined`。
        *   Issue [#44835](https://github.com/openclaw/openclaw/issues/44835)
*   **🟡 中 - 工具与日志**
    *   **CLI Logs 失效**: `openclaw logs --follow` 握手超时。
        *   Issue [#44714](https://github.com/openclaw/openclaw/issues/44714)

## 6. 功能请求与路线图信号

*   **隐私过滤**: PR [#30329](https://github.com/openclaw/openclaw/pull/30329) 正在推进 LLM 流量的隐私检测与替换功能，支持 50+ 种敏感信息过滤，这表明项目正在加强企业级安全特性。
*   **本地记忆**: PR [#44421](https://github.com/openclaw/openclaw/pull/44421) 试图集成 Cortex 作为本地记忆底座，这将是 Agent 长期记忆能力的重要升级。
*   **文件系统权限**: PR [#42653](https://github.com/openclaw/openclaw/pull/42653) 提出为 `exec` 工具增加路径作用域 RWX 权限控制，旨在解决沙箱逃逸风险。

## 7. 用户反馈摘要

*   **痛点 - 资源消耗**: 大量用户（特别是云服务器和树莓派用户）抱怨新版本内存占用激增，导致服务被杀。
*   **痛点 - 升级体验**: 多个 Issue 反映升级过程不顺，出现插件丢失 (`memory-core not found`) 或回滚现象 (Issue [#45287](https://github.com/openclaw/openclaw/issues/45287))。
*   **场景 - 多模型切换**: 用户对 `OpenCode Go` 订阅的呼声很高，希望能低成本接入 Kimi/GLM 等模型。
*   **满意度**: 尽管新 UI 被指有 Bug，但用户对“命令面板”和“移动端底部标签”的设计方向表示认可，认为这提升了操作效率。

## 8. 待处理积压

*   **Brave Search API 失效**: Issue [#16629](https://github.com/openclaw/openclaw/issues/16629) 指出 Brave Search API 已不再免费，急需替代方案（如 DuckDuckGo），目前官方尚未给出明确方案。
*   **Docker Skill 安装失败**: Issue [#14593](https://github.com/openclaw/openclaw/issues/14593) 显示 Docker 容器中无法安装基于 `brew` 的 Skills，长期未解决。
*   **长期 Issue**: Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) (国际化) 虽然官方表示无带宽，但持续有新用户涌入讨论，建议维护者标记 "Help Wanted" 以引导社区贡献。

---

## 横向生态对比

# 2026-03-14 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景

今日个人 AI 助手/自主智能体开源生态呈现出**极速膨胀伴随剧烈阵痛**的态势。各项目在集成前沿模型（如 GPT-5.4、Kimi K2.5）和重构 UI/UX 方面进展迅猛，但普遍遭遇了严重的**稳定性回归**（OOM、UI 崩溃）和**模型兼容性**（本地模型智障化、非标 API 适配）挑战。生态重心正从单一的对话功能向**多渠道集成**（IM、Nostr）、**多模态交互**及**深度可控性**（MCP、安全沙箱）转移。

## 2. 各项目活跃度对比

*注：Issues/PR 数值为过去 24 小时内的更新/处理量，非总量。健康度评估基于 Bug 修复速度、社区响应及 PR 积压情况。*

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | ~500 (Hot) | ~138 | **v2026.3.12** | ⚠️ **高危** | 版本事故（OOM/崩溃），社区处于救火状态 |
| **NanoBot** | 25 | 155 (118 merged) | - | ✅ **优秀** | 架构解耦顺利，迭代极快，修复及时 |
| **PicoClaw** | 28 | 108 (49 merged) | Nightly | ✅ **良好** | 核心重构中，响应迅速，文档略滞后 |
| **Zeroclaw** | 36 | 38 | - | ✅ **良好** | 修复回归积极，但分支管理引发困惑 |
| **NanoClaw** | 15 | 31 | - | ✅ **稳定** | 安全与隐私优先，多渠道扩展中 |
| **IronClaw** | 31 | 50 | - | ⚠️ **一般** | PR 积压严重 (42 pending)，多租户重构中 |
| **LobsterAI** | 12 | 9 | - | ⚠️ **观察** | 架构大迁移，本地模型支持存疑 |
| **CoPaw** | 50 | 45 | - | ⚠️ **一般** | v0.0.7 引入严重回归，修复中 |
| **Moltis** | 13 | 7 | - | ✅ **稳定** | 修复痛点，打磨体验 |
| **ZeptoClaw** | 6 | 3 | - | ✅ **极佳** | 小而美，安全性与 UX 快速迭代 |
| **TinyClaw** | 2 | 5 | **v0.0.12** | ✅ **稳定** | ESM 重构完成，API 简化 |
| **EasyClaw** | 0 | 0 | - | ⚪ **静默** | 无活动 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 正处于“**大而不强**”的尴尬转型期。

*   **优势与地位**: 依然是**功能最全面**、**社区规模最大**的项目。v2026.3.12 的 Dashboard UI 和 GPT-5.4 集成展示了其定义“下一代交互”的野心。其作为 LobsterAI 等项目的底层 Runtime，确立了其作为“AI OS”潜力的地位。
*   **技术路线差异**: 相比 NanoBot/PicoClaw 的轻量化与模块化，OpenClaw 走的是**重型全栈**路线。但今日的内存溢出（OOM）和 UI 崩溃暴露了其工程质量的脆弱性。
*   **对比同类**:
    *   相比 **LobsterAI**（正在剥离沙箱给 OpenClaw），OpenClaw 更像是**基础设施**。
    *   相比 **NanoBot**（模块化、解耦配置），OpenClaw 的单体架构显得笨重，导致 Bug 修复链路长（积压 362 PRs）。

## 4. 共同关注的技术方向

多项目共同涌现的需求揭示了行业共识：

1.  **模型兼容性与强制的斗争**
    *   **涉及项目**: OpenClaw, IronClaw, LobsterAI, CoPaw
    *   **诉求**: 随着本地模型和国产大模型（Kimi, Qwen, DeepInfra）的普及，**打破 OpenAI API 强约束**成为刚需。IronClaw 需适配 Kimi 的非标 Temperature，LobsterAI 需解决 Ollama “只聊不干”的问题，CoPaw 需处理弱模型的上下文丢失。

2.  **企业级/隐私通信渠道**
    *   **涉及项目**: NanoClaw, CoPaw, Moltis, PicoClaw
    *   **诉求**: **飞书 和企业微信** 是今日最热的集成请求。同时，NanoClaw 对 Nostr 和 Signal 的支持反映了高端用户对**端到端加密**和**去中心化**的强烈需求。

3.  **记忆系统的实用化**
    *   **涉及项目**: NanoBot, TinyClaw, PicoClaw
    *   **诉求**: 从简单的 RAG 向**分层记忆**（Markdown/YAML）和**生命周期管理**（Consolidation）演进。解决长对话下的 Token 溢出是各项目共同的痛点。

4.  **MCP (Model Context Protocol) 的工具化**
    *   **涉及项目**: Zeroclaw, LobsterAI, PicoClaw
    *   **诉求**: MCP 正从实验性功能转变为**标准化的工具挂载接口**。社区要求 MCP 支持按需加载、权限隔离和跨进程桥接。

## 5. 差异化定位分析

| 维度 | **重平台派** (OpenClaw, IronClaw) | **轻量化/嵌入派** (NanoBot, ZeptoClaw, TinyClaw) | **场景/垂直派** (LobsterAI, CoPaw, Moltis) |
| :--- | :--- | :--- | :--- |
| **核心目标** | 构建全功能的 AI 操作系统，强调 UI 与网关。 | 强调核心逻辑的纯净、模块化与 CLI 体验。 | 聚焦特定场景（IM 集成、自动化运维、隐私）。 |
| **架构特点** | 重构 UI，引入重型依赖，易出现 OOM。 | 架构解耦，插件化设计，资源占用极低。 | 深度绑定第三方平台（IM/Cloud），配置向导化。 |
| **目标用户** | 普通消费者、非技术用户（追求开箱即用）。 | 开发者、极客、嵌入式设备用户。 | 企业用户、特定工具链的用户。 |
| **典型案例** | OpenClaw 的 Dashboard-v2。 | NanoBot 的 Channel 插件架构；ZeptoClaw 的安全审批。 | LobsterAI 的 IM 插件预装；CoPaw 的 LobeHub 技能导入。 |

## 6. 社区热度与成熟度

*   **🔥 快速迭代期 (活跃度极高，风险并存)**:
    *   **OpenClaw**: 虽然热度最高，但当前处于**高波动期**，新版本引入的严重 Bug 亟需修复，不适合保守型用户。
    *   **NanoBot, PicoClaw**: 处于健康的**上升期**，架构调整顺畅，社区反馈积极响应，推荐尝鲜。

*   **🛠️ 质量巩固期 (修复为主，稳扎稳打)**:
    *   **Zeroclaw, ZeptoClaw, Moltis**: 这三个项目今日主要精力在于**修复回归**和**安全加固**。代码质量高，维护者响应极快，适合作为稳定组件集成。

*   **⚠️ 阵痛/停滞期**:
    *   **LobsterAI**: 正在经历**底层架构替换**（转投 OpenClaw 怀抱），短期内可能面临功能不一致的问题。
    *   **IronClaw**: **PR 积压严重**，显示出维护团队人力资源可能捉襟见肘，核心功能的合并速度受限。

## 7. 值得关注的趋势信号

1.  **端侧/边缘计算 Agent 的崛起**:
    *   OpenClaw 在 Raspberry Pi 上的 OOM 失效与 ZeptoClaw/Zeroclaw 对 32位架构/嵌入式系统的关注，揭示了**AI 助手“下沉”到边缘设备**的趋势。未来的竞争点在于谁能用更少的内存跑更复杂的模型。
2.  **“记忆管理”正在成为独立赛道**:
    *   TinyClaw 的分层记忆、NanoBot 的强制归档修复、PicoClaw 的 Steering 机制，都表明业界不再满足于简单的长上下文，而是开始探索**让 Agent 主动管理记忆**的工程化方案。
3.  **安全性与 Agent 自主权的博弈**:
    *   ZeptoClaw 的交互式审批、NanoClaw 的隐私钩子、OpenClaw 的沙箱逃逸讨论，说明随着 Agent 能力增强（如执行 Shell），**“如何防止 Agent 搞破坏”** 已超越功能本身，成为核心设计约束。
4.  **本地模型的“工具调用”短板**:
    *   LobsterAI 和 CoPaw 的反馈残酷地指出，目前的本地模型（如 Ollama 跑 Qwen 小参数版）在**Function Calling** 和 **复杂规划** 上仍不可靠。生态急需针对弱模型的 Prompt 增强 or 网关层补偿方案。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-14)

你好！我是 NanoBot 开源项目分析师。根据过去 24 小时的 GitHub 数据，为你生成以下项目动态日报。

## 1. 今日速览

NanoBot 项目今日维持了**极高的活跃度**，社区贡献热情高涨。过去 24 小时内，项目处理了 **155 个 Pull Requests**（其中 118 个已合并/关闭），表明开发迭代速度非常快。Issue 方面共有 **25 条更新**，新报 Bug 主要集中在第三方模型兼容性（如 Nvidia、DashScope）和特定部署环境（Windows、Docker）下的稳定性。虽然今日无新版本 Release，但大量代码合并预示着下一次更新将包含众多新特性和修复。

---

## 2. 版本发布

*   **无新版本发布**：今日未检测到新的 Release 版本。

---

## 3. 项目进展

今日共有 **118 个 PR 被合并或关闭**，主要集中在架构解耦、兼容性修复和新渠道支持上，项目稳健向前推进。

*   **架构优化**：
    *   [PR #1984](https://github.com/HKUDS/nanobot/pull/1984) (Closed/Merged): 实现了 **Channel 插件架构与配置解耦**。将 11 个内置渠道的配置从核心 Schema 中剥离，支持通过 `pip install` + `entry_points` 加载外部渠道插件。这是迈向模块化生态的关键一步。
*   **稳定性修复**：
    *   [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) (Closed/Merged): 修复了 Memory consolidation（记忆整合）过程中 LLM 不调用 `save_memory` 的问题，强制使用 `tool_choice="required"`，解决了长期记忆存储失效的隐患。
    *   [PR #1941](https://github.com/HKUDS/nanobot/pull/1941) (Closed/Merged): 恢复了 QQ 频道对旧版客户端的纯文本消息支持，修复了因 Markdown 格式导致的交互中断。
    *   [PR #1981](https://github.com/HKUDS/nanobot/pull/1981) (Closed/Merged): 升级企微 SDK 至 0.1.5，修复了重复接收循环和心跳超时问题。
*   **生态扩展**：
    *   [PR #1368](https://github.com/HKUDS/nanobot/pull/1368) (Open): 提交了基于官方 `a2a-sdk` 的 A2A 协议渠道支持，使 NanoBot 具备与其他 Agent 互操作的能力。
    *   [PR #1945](https://github.com/HKUDS/nanobot/pull/1945) (Open): 正在审查 XMPP 渠道支持。

---

## 4. 社区热点

社区今日讨论主要集中在**可观测性**和**模型兼容性**两个方向。

*   **可观测性需求强烈**：
    *   [Issue #1955](https://github.com/HKUDS/nanobot/issues/1955) (Open): 作者 @dweigit 提出希望能查看子 Agent 的执行过程。目前主 Agent 执行过程透明，但子 Agent 是“黑盒”，用户在调试复杂工作流时感到困难。该 Issue 获得了 9 条评论讨论，显示出高级用户对 Debug 能力的迫切需求。
*   **模型兼容性痛点**：
    *   [Issue #1822](https://github.com/HKUDS/nanobot/issues/1822) (Open): 用户反馈近期无法使用 Nvidia 模型，引发关于多模型后端适配维护成本的讨论。
    *   [Issue #1927](https://github.com/HKUDS/nanobot/issues/1927) (Open): 针对 DashScope (阿里云) 不支持 `tool_choice="required"` 导致记忆归档失败的问题进行了深入讨论（6 条评论），涉及底层 API 差异的兼容策略。

---

## 5. Bug 与稳定性

今日报告的 Bug 较为零散，多与特定平台或配置有关，部分已有修复方案。

*   **P0 - 核心功能受损 (已有 Fix)**:
    *   **Ollama 连接失败**: [Issue #1947](https://github.com/HKUDS/nanobot/issues/1947) 报告连接本地 Ollama 时报 API Key 错误。**已通过 [PR #1983](https://github.com/HKUDS/nanobot/pull/1983) 修复**。
*   **P1 - 兼容性与异常**:
    *   **DashScope 参数错误**: [Issue #1487](https://github.com/HKUDS/nanobot/issues/1487) 使用 Qwen 3.5 生成 PDF 时报 `function.arguments` 非 JSON 格式错误。
    *   **Windows 重启命令失效**: [Issue #1937](https://github.com/HKUDS/nanobot/issues/1937) 在 Windows 上执行 `/restart` 报路径错误（已修复/Closed）。
    *   **上下文溢出**: [Issue #1979](https://github.com/HKUDS/nanobot/issues/1979) 长对话导致 Token 超限报错，需手动清理会话。
    *   **Exec 工具权限**: [Issue #1948](https://github.com/HKUDS/nanobot/issues/1948) 在 Exec 工具中运行 npx 时提示 `/tmp` 只读，阻碍了 Skill 的安装与使用。

---

## 6. 功能请求与路线图信号

*   **运行时状态监控**:
    *   [PR #1985](https://github.com/HKUDS/nanobot/pull/1985): 新增 `/status` 命令以查看运行时信息。这直接响应了用户在服务端部署时缺乏健康检查手段的问题，大概率纳入下个版本。
*   **Skill 管理**:
    *   [PR #1934](https://github.com/HKUDS/nanobot/pull/1934): 支持在配置中通过 `enabled: false` 禁用 Skill，无需删除文件，提升了易用性。
*   **动态切换 Provider**:
    *   [Issue #1954](https://github.com/HKUDS/nanobot/issues/1954): 用户希望在对话中动态切换模型/Provider。目前的回答是不支持，这可能是未来架构优化的一个潜在方向。

---

## 7. 用户反馈摘要

*   **痛点：记忆归档脆弱**：多位用户反馈在不同模型（尤其是非 OpenAI 系）下，Memory Consolidation 容易失败 ([Issue #1931](https://github.com/HKUDS/nanobot/issues/1931))，导致上下文无法清理，最终引发上下文溢出崩溃。这表明“依赖 LLM 主动调用工具来压缩记忆”的机制在弱模型上不够健壮。
*   **痛点：Docker 部署配置复杂**：用户在 Docker 环境下新增命令后不生效 ([Issue #1829](https://github.com/HKUDS/nanobot/issues/1829))，反映了容器化环境下文件挂载和权限管理的复杂性。
*   **肯定：轻量级与 Soul.md**：[Issue #1977](https://github.com/HKUDS/nanobot/issues/1977) 中用户称赞项目轻量且能通过 `Soul.md` 有效控制模型人设，这是 NanoBot 相比沉重框架的核心竞争力。

---

## 8. 待处理积压

*   **SearXNG 搜索后端支持**: [Issue #927](https://github.com/HKUDS/nanobot/issues/927) (Open) 请求添加开源搜索引擎 SearXNG 作为 Brave Search 的替代方案。该请求点赞数 (+3) 较高，且已有人提出方案，建议维护者优先 Review。
*   **上下文窗口管理策略**: [Issue #1979](https://github.com/HKUDS/nanobot/issues/1979) 暴露了长对话下的硬伤。虽然目前建议手动清理，但项目亟需更健壮的自动滑动窗口或摘要策略来防止 Crash。
*   **Model Thinking 输出解析**: [Issue #1139](https://github.com/HKUDS/nanobot/issues/1139) 涉及 Kimi 模型 Thinking 模式的兼容性问题，虽然已关闭，但表明在适配各家模型“思维链”输出格式上仍需持续投入。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-14)

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是基于 GitHub 数据生成的 **Zeroclaw** 项目日报。

---

### 1. 今日速览
Zeroclaw 项目今日呈现出**极高活跃度**与**快速迭代**的状态，项目处于密集维护期。
过去 24 小时内，社区不仅提交了大量反馈（36 条 Issue 更新），维护者更是展现出了惊人的处理效率，**关闭了 35 个 Issues**，并合并/关闭了 **38 个 PRs**。
尽管没有发布新版本，但从 PR 动态来看，项目正在积极修复分支切换带来的回归问题，并大量吸纳社区功能请求（如 Windows 支持、MCP 优化、新通道支持）。
这表明项目正处于功能完善与稳定性修复的关键阶段，但在默认分支切换后遗留的架构问题仍需关注。

### 2. 版本发布
*   **无新版本发布** (0 个 Releases)
    *   *注：虽然无正式 Release，但从 PR #3366 关于 `RELEASE_TOKEN` 的修复来看，项目可能在尝试修复自动化发布流程，预计近期会有新版本。*

---

### 3. 项目进展
今日共有 **38 个 PR 被合并或关闭**，主要集中在**平台兼容性修复**、**通道功能增强**及**分支切换后的功能补全**。项目整体质量显著提升。

*   **平台与架构修复 (关键进展):**
    *   **Windows 兼容性**: PR #3442 合并，正式支持 Windows 下的 `tool_call` 执行（使用 `cmd.exe`），解决了 Windows 用户长期无法执行本地命令的痛点。
    *   **分支功能回归**: 针对默认分支切换到 `master` 导致 MCP 等功能丢失的问题（Issue #3397, #3379），PR #3436 修复了 MCP 工具无法暴露给子代理的问题，PR #3446 实现了 MCP 工具的按需加载。

*   **通道与集成增强:**
    *   **新增企业微信支持**: PR #3439 合并，新增 WeCom (企业微信) Webhook 通道。
    *   **Matrix 体验优化**: PR #3441 增加了已读回执和输入状态通知；PR #3440 增加了 Cron 任务的执行历史记录 API。
    *   **Slack 修复**: PR #3435 修复了 Slack 适配器无法监听帖子回复的问题。

*   **UI/UX 改进:**
    *   PR #3443 修复了切换视图时草稿消息丢失的问题；PR #3445/#3444 对 Dashboard 进行了 "Electric Blue" 主题重构，提升了视觉体验。

---

### 4. 社区热点
今日社区讨论集中在**配置灵活性**与**分支策略困惑**上，用户对高级配置的需求强烈。

*   **[Issue #3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) [CLOSED]**: **Branch policy clarification** (👍 4)
    *   **分析**: 社区对 `master`/`main`/`dev` 分支的混乱状态感到困惑，且默认分支切换导致了功能丢失。这反映出项目可能在近期进行了大规模的代码仓库重构，导致用户和贡献者暂时迷失方向。
*   **[Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) [OPEN]**: **Add `channel-matrix` flag in official builds** (👍 2)
    *   **分析**: 用户指出官方编译版本缺少 Matrix 通道标志，导致无法开箱即用。这表明 Release 构建流程可能未包含所有 Feature Flags，影响了高级用户的使用。
*   **[Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) [CLOSED]**: **zeroclaw agent subcommand support mcp**
    *   **分析**: 用户强烈希望在 Agent 子命令行模式下也能使用 MCP 工具，而不仅仅是 Channel 模式。随着 PR 的合并，这一核心能力已得到补全。

---

### 5. Bug 与稳定性
今日报告了多个严重 Bug，尤其是**数据/功能丢失**和**构建失败**问题，但维护者响应极其迅速，大部分已有修复 PR 并合并。

*   **S0 - 数据丢失/安全风险 (已修复)**
    *   **[Issue #3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)**: 切换分支后 MCP、IPC 等核心功能丢失。
    *   **[Issue #3402](https://github.com/zeroclaw-labs/zeroclaw/issues/3402)**: Heartbeat 机制错误注入旧的 `tool_result`，导致 Agent 产生幻觉。
*   **S1 - 工作流阻塞 (部分已修复)**
    *   **[Issue #3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425)**: Matrix SDK 编译失败（Rust 1.94 兼容性问题）。
    *   **[Issue #3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430)**: 32位架构 (mipsel) 构建失败，由于 `AtomicU64` 未处理。
    *   **[Issue #1327](https://github.com/zeroclaw-labs/zeroclaw/issues/1327)**: Kimi Code API 400 错误，兼容性问题。
*   **S2 - 降级行为 (已修复)**
    *   **[Issue #3417](https://github.com/zeroclaw-labs/zeroclaw/issues/3417)**: Daemon 在无法解析 Home 目录时错误创建名为 `~` 的文件夹。([PR #3427](https://github.com/zeroclaw-labs/zeroclaw/pull/3427) 已合并)

---

### 6. 功能请求与路线图信号
用户需求正从基础的“能用”转向“好用”和“定制化”，以下信号值得注意：

*   **MCP 按需加载** ([Issue #3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) -> [PR #3446](https://github.com/zeroclaw-labs/zeroclaw/pull/3446)): 用户希望减少 Context 浪费，该功能已通过 PR 实现。这表明 Zeroclaw 正在优化 LLM Token 消耗，向更智能的工具调用迈进。
*   **Docker 容器工具支持** ([Issue #3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) -> [PR #3437](https://github.com/zeroclaw-labs/zeroclaw/pull/3437)): 官方镜像缺少 Shell 导致无法使用 Git 等工具。社区通过引入 Debian 变体镜像解决了此问题。
*   **自定义 API 端点** ([Issue #3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125) -> [PR #3447](https://github.com/zeroclaw-labs/zeroclaw/pull/3447)): 支持非标准 OpenAI API 路径（如 `/v2/generate`），这将极大扩展 Zeroclaw 对自托管模型的兼容性。

---

### 7. 用户反馈摘要
*   **痛点**:
    *   **分支管理混乱**: 多个用户反馈近期切换默认分支导致拉取代码编译失败或功能缺失。
    *   **官方构建不全**: 用户希望官方 Release 能包含更多 Feature Flags（如 Matrix），避免自行编译的麻烦。
    *   **32位支持**: 嵌入式/老旧设备用户遭遇构建失败，显示出 Rust 生态在特定架构上的原子操作门槛。
*   **满意点**:
    *   **响应速度**: 用户对 Bug 报告后迅速得到修复（如 `~` 文件夹问题）表示认可。
    *   **UI 美化**: Dashboard 的新设计风格（Electric Blue）受到期待。

---

### 8. 待处理积压
尽管今日关闭了大量 Issue，但仍有一些关键点需要关注：

*   **[Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) [OPEN]**: **Matrix Channel 缺失**。目前官方构建版本仍不支持 Matrix，这是一个影响用户体验的阻断性问题，建议维护者尽快更新 CI/CD 构建脚本。
*   **[PR #3366](https://github.com/zeroclaw-labs/zeroclaw/pull/3366) [OPEN]**: **Release Token 修复**。此 PR 仍未合并，导致 Beta 版本发布受阻。建议优先 Review 并合并，以恢复正常的发布节奏。
*   **[PR #3414](https://github.com/zeroclaw-labs/zeroclaw/pull/3414) [OPEN]**: **Ollama 环境变量覆盖**。针对容器化部署的优化 PR 仍在待定，建议纳入下一阶段评估。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
PicoClaw 项目今日维持**极高的开发活跃度**，共产生 **108 个 PR 更新**（其中 49 个已合并/关闭）和 **28 个 Issue 更新**。项目刚刚发布了 `v0.2.2-nightly.20260313` 版本，核心开发重心正处于 **Agent 架构重构** 阶段，旨在引入事件驱动和 Hooks 机制。社区方面，关于本地模型配置、网关编排能力的讨论热度较高，同时也有大量针对配置体验和文档的改进 PR 被合并，显示出项目正在快速迭代以补齐易用性短板。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build (v0.2.2-nightly.20260313.19835b2f)`
- **性质**: 自动化每夜构建版，可能不稳定。
- **变更范围**: 对比 `v0.2.2` 至 `main` 分支的完整变更。
- **提醒**: 仅供测试尝鲜，生产环境请谨慎使用。

## 3. 项目进展
今日共有 **49 个 PR** 被合并或关闭，显著推进了以下领域：

- **配置与安全性增强**:
    - 合并了凭证管理系统的基础重构 ([PR #1521](https://github.com/sipeed/picoclaw/pull/1521)), 引入了 AES-GCM 加密和 `SecureStore`，为 UI 交互做准备。
    - 修复了旧版配置迁移时的默认模型覆盖问题 ([PR #1513](https://github.com/sipeed/picoclaw/pull/1513))，解决了用户在不配置模型列表时被强制使用默认模型的问题。
    - 优化了网关配置的热重载机制 ([PR #1512](https://github.com/sipeed/picoclaw/pull/1512))，修复了同大小文件快速编辑无法触发重载的 Bug。

- **工具与能力扩展**:
    - **文件处理**: 合并了非图片媒体文件本地路径暴露的功能 ([PR #1516](https://github.com/sipeed/picoclaw/pull/1516))，现在 Agent 可以处理用户上传的文档/音频等非图片文件。
    - **Agent 上下文**: 修复了 `TOOLS.md` 未被加载到 Agent 上下文的问题 ([PR #1417](https://github.com/sipeed/picoclaw/pull/1417))，增强了 Agent 对自定义工具指令的理解。
    - **命令行体验**: 优化了命令行指令的快捷方式 ([PR #1473](https://github.com/sipeed/picoclaw/pull/1473))，修复了输入子命令无响应的问题。

- **文档与生态**:
    - 新增了西班牙语 README ([PR #1448](https://github.com/sipeed/picoclaw/pull/1448))，扩展了西语社区。
    - 增加了 Python 脚本技能的示例文档 ([PR #1523](https://github.com/sipeed/picoclaw/pull/1523))。

## 4. 社区热点
- **[Agent 重构讨论] Event-driven agent loop** ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316))
    - **热度**: 8 条评论，1 个点赞。
    - **分析**: 这是目前的架构核心议题。维护者 @alexhoshina 提出将现有的 Agent Loop 重构为事件驱动模型，支持 Hooks、中断和动态消息注入。这标志着 PicoClaw 正在从简单的对话循环向可编程、可观测的复杂智能体系统演进。

- **[Agent 定义] SOUL.md 与 AGENT.md** ([Issue #1218](https://github.com/sipeed/picoclaw/issues/1218))
    - **热度**: 24 条评论。
    - **分析**: 社区正在热烈讨论如何定义 Agent 的"人格"与"配置"。提案建议通过 Markdown 文件（SOUL.md）来描述 Agent 性格，降低配置门槛，体现"Prompt as Config"的设计理念。

- **[集成能力] 飞书文件路径暴露** ([Issue #1506](https://github.com/sipeed/picoclaw/issues/1506))
    - **热度**: 9 条评论，1 个点赞。
    - **分析**: 用户强烈需要 Agent 能够处理飞书通道发送的文档/音视频文件。虽然已有相关 PR 合并，但针对特定通道（如飞书）的实现细节仍在讨论中。

## 5. Bug 与稳定性
- **配置与加载**:
    - **[High]** `Picoclaw fails to load config.json...` ([Issue #1491](https://github.com/sipeed/picoclaw/issues/1491)): 配置加载失败，提示 GLM 模型未配置。**状态**: 相关修复 PR ([#1513](https://github.com/sipeed/picoclaw/pull/1513)) 已合并，预计将解决此类遗留配置兼容问题。
    - **[Medium]** Mistral 模型集成报错 ([Issue #1502](https://github.com/sipeed/picoclaw/issues/1502)): 提示 "Extra inputs..."，可能是 API 格式不匹配。

- **通道与连接**:
    - **[Medium]** 手机热点下飞书消息接收间歇性失败 ([Issue #1437](https://github.com/sipeed/picoclaw/issues/1437)): 涉及网络环境变化下的连接稳定性。
    - **[Fixed]** SVG 文件 MIME 类型错误 ([Issue #1410](https://github.com/sipeed/picoclaw/issues/1410)): 已关闭，相关修复应已纳入最新版本。

- **工具与响应**:
    - **[Fixed]** Safety guard 误拦截包含 URL 的命令 ([Issue #1203](https://github.com/sipeed/picoclaw/issues/1203)): 安全模块过度拦截导致正常工具调用失败，已关闭。

## 6. 功能请求与路线图信号
- **编排与网关**:
    - **Feature**: 为编排层（如 Paperclip）提供结构化事件流和身份认证 ([Issue #1475](https://github.com/sipeed/picoclaw/issues/1475), [Issue #1476](https://github.com/sipeed/picoclaw/issues/1476))。随着 Gateway 模式的完善，PicoClaw 正积极寻求融入更大的 AI 编排网络。
- **模型支持**:
    - **Feature**: 支持 Azure OpenAI Provider ([Issue #1424](https://github.com/sipeed/picoclaw/issues/1424)): 企业级用户对 Azure 生态的集成需求明显。
    - **Feature**: 支持语音 I/O 插件化 ([Issue #1503](https://github.com/sipeed/picoclaw/issues/1503)): 用户希望更灵活地对接 STT/TTS 服务，而不仅仅是目前的硬编码实现。
- **判定**: 结合 PR 活跃度，**Agent 重构 (Steering/Hooks)** 和 **配置/凭证系统重构** 是目前明确的路线图重心。

## 7. 用户反馈摘要
- **痛点**:
    - **本地模型配置困难**: 多个用户反映在对接 Ollama 等本地模型时，Agent 运行无响应或配置复杂 ([Issue #1161](https://github.com/sipeed/picoclaw/issues/1161))。
    - **文档滞后**: 官方文档与实际代码参数存在脱节，许多高级配置项未在文档中说明 ([Issue #1489](https://github.com/sipeed/picoclaw/issues/1489))。
    - **缓存/生效延迟**: 新增模型需要重启 Gateway 才能生效，影响体验 ([Issue #1493](https://github.com/sipeed/picoclaw/issues/1493))。
- **满意点**:
    - 开发团队对 PR 的响应速度非常快（如同日提出 PR 并合并）。
    - 项目架构设计（如 Agent Steering）受到高级用户的期待。

## 8. 待处理积压
- **PR #90 (Vector Search)**: 涉及向量搜索与生命周期钩子的大型 PR，自 2 月 12 日开启至今未合并。建议维护者评估是否需要拆解或同步最新架构。
- **PR #751 (WebSocket Gateway)**: 2 月 25 日开启，目前仍在更新。虽然优先级较高，但需注意与最近的配置热加载重构冲突的风险。
- **Issue #528 (Cron Scheduling)**: 关于 Cron 调度的 Bug 早在 2 月 20 日提出，虽有相关修复 PR ([#757](https://github.com/sipeed/picoclaw/pull/757)) 但仍未合并，需确认是否彻底解决。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览

NanoClaw 今日保持**极高活跃度**，社区开发热情持续高涨。过去 24 小时内共有 31 个 PR 更新（15 个待合并）和 15 个 Issue 更新，显示了项目在**多渠道集成**和**安全性增强**方面的快速迭代。

值得注意的是，社区正在大力推动消息平台（Signal, Nostr, Telegram, Feishu）的接入能力，同时针对间接提示注入的安全修复正在进行激烈的方案评审。整体来看，项目正从核心功能完善向生态系统扩展和安全加固阶段过渡。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

今日共有 16 个 PR 被合并或关闭，主要集中在**安全性修复**、**消息处理逻辑优化**和**底层架构重构**：

*   **安全防御落地**: PR #1036 和 #1032 相继关闭，最终由 PR #843 推进了针对 `WebFetch/WebSearch` 的输出净化功能。通过 `PostToolUse` 钩子过滤对抗性内容，有效防御间接提示注入攻击。
*   **消息积压修复**: PR #1040 合并，修复了当群组消息超过 200 条时旧消息被丢弃的问题。引入了 `getAllMessagesSince()` 循环分页机制，确保消息处理的完整性。
*   **架构解耦**: PR #1037 合并，增加了 `src/tanren/` 模块，为 Tanren API 提供了类型安全的 HTTP 客户端，提升了代码的可维护性。
*   **CI/CD 加固**: PR #1034 合并，集成了 Trivy 镜像扫描和依赖 CVE 检查，阻断了不安全代码的合并路径。

---

## 4. 社区热点

今日社区讨论焦点集中在**隐私通信**与**安全过滤机制**：

1.  **PR #1041: Nostr 私信通道** (作者: @jorgenclaw)
    *   **链接**: [qwibitai/nanoclaw PR #1041](https://github.com/qwibitai/nanoclaw/pull/1041)
    *   **分析**: 实现了基于 NIP-17 的私信功能，利用外部签名守护进程确保私钥不进入 Node 进程。这反映了高端用户对**隐私优先**通信渠道的强烈需求。

2.  **PR #1035: 安全净化钩子** (作者: @clawtom)
    *   **链接**: [qwibitai/nanoclaw PR #1035](https://github.com/qwibitai/nanoclaw/pull/1035)
    *   **分析**: 该 PR 延续了今日早些时候合并的安全修复工作。讨论重点在于如何平衡**内容过滤的严格性**与**误杀正常内容**的风险。

3.  **Issue #908 & #909: FTS5 对话索引与搜索**
    *   **链接**: [Issue #908](https://github.com/qwibitai/nanoclaw/issues/908) | [Issue #909](https://github.com/qwibitai/nanoclaw/issues/909)
    *   **分析**: 这是一个高优先级的功能增强，旨在赋予 AI 回忆历史对话的能力。对应的实现 PR #1027 已提交，社区对此功能的期待值很高。

---

## 5. Bug 与稳定性

今日报告了几个影响用户体验的关键 Bug，部分已有修复方案：

*   **[High] 重复消息回复 (Issue #1020)**
    *   **描述**: 用户发送消息时会收到两条不同的回复。
    *   **原因**: SDK 返回多个结果时，代码对每个结果都调用了一次 `channel.sendMessage()`。
    *   **状态**: **已有修复方案**，需关注后续 PR 动态。
    *   **链接**: [qwibitai/nanoclaw Issue #1020](https://github.com/qwibitai/nanoclaw/issues/1020)

*   **[High] MCP 环境变量丢失 (Issue #960)**
    *   **描述**: 凭证代理迁移后，第三方 MCP 服务器无法读取 `.env` 中的变量（如 `${ICLOUD_EMAIL}`）。
    *   **状态**: **已关闭**，推测已在内部版本或相关重构中修复。
    *   **链接**: [qwibitai/nanoclaw Issue #960](https://github.com/qwibitai/nanoclaw/issues/960)

*   **[Medium] 沙箱文件写入权限错误 (Issue #527)**
    *   **描述**: Agent 尝试向只读挂载的 `/workspace/project` 路径写入数据，导致操作失败。
    *   **状态**: Open (Good first issue)，适合新贡献者修复文档或权限配置。
    *   **链接**: [qwibitai/nanoclaw Issue #527](https://github.com/qwibitai/nanoclaw/issues/527)

---

## 6. 功能请求与路线图信号

今日的 Issue 和 PR 揭示了项目接下来的重点方向：

1.  **通信平台大爆发**:
    *   **Signal**: 两个 PR (#1023, #1016) 同时提交了 Signal 集成，表明社区对安全加密通讯的需求迫切。
    *   **Telegram 机器人池**: PR #1028 提出为 Agent 群组分配独立的 Telegram 身份，支持大规模 Agent 协作。
    *   **飞书**: PR #920 持续推进，预示着企业级市场的拓展。

2.  **记忆与检索能力**:
    *   PR #1027 正在实现 FTS5 全文检索，这将显著提升 NanoClaw 作为长期助手的智能度，是通往 "Lifelong Learning Agent" 的关键一步。

3.  **浏览器实体化控制**:
    *   PR #1038 提出的 Chrome 扩展桥接，试图通过非无头浏览器实现自动化，这可能为了绕过反爬虫检测或执行更复杂的交互。

---

## 7. 用户反馈摘要

从 Issue 讨论中提炼出以下用户画像与痛点：

*   **隐私极客**: 高度关注 Nostr 和 Signal 的实现细节（如私钥管理），倾向于完全去中心化或端到端加密的架构。
*   **成本敏感型用户**: Issue #1033 讨论了 Prompt Caching，用户非常在意 API 调用成本，希望通过缓存降低 90% 的开销。
*   **多模型支持者**: Issue #1015 反映了用户希望不仅仅是用 Claude，还能无缝切换到 DeepInfra/GLM 等其他模型提供商，当前的硬编码模型检查逻辑阻碍了这一需求。
*   **可靠性担忧**: Issue #829 指出 Agent 可能会“伪造”工具调用结果，用户希望看到更强的约束规则（如 SOUL.md 中的防欺骗指令）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未得到最终解决，建议维护者关注：

1.  **PR #1027 (FTS5 搜索实现)**: 这是一个核心功能增强，目前状态为 "Needs Review"。鉴于其关联两个 High Priority Issues，建议优先评审合并。
    *   **链接**: [qwibitai/nanoclaw PR #1027](https://github.com/qwibitai/nanoclaw/pull/1027)

2.  **Issue #829 (防止 Agent 伪造工具执行)**: 这是一个 "Good first issue" 但涉及核心行为准则。虽然标记为 Medium，但涉及信任度问题，建议尽早纳入规则修复。
    *   **链接**: [qwibitai/nanoclaw Issue #829](https://github.com/qwibitai/nanoclaw/issues/829)

3.  **Issue #411 (间接提示注入风险文档)**: 安全专家 @wunderwuzz23 指出的安全隐患，建议在文档中明确警示，随着 Web 功能的增强，此类风险日益增加。
    *   **链接**: [qwibitai/nanoclaw Issue #411](https://github.com/qwibitai/nanoclaw/issues/411)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-14)

> **数据来源**: github.com/nearai/ironclaw | 分析周期: 过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日保持**高度活跃**状态，社区互动频繁。过去 24 小时内共有 **31 条 Issue 更新**（17 新开/14 关闭）和 **50 条 PR 更新**（42 待合并/8 已合并），显示出项目迭代速度极快。然而，**PR 积压严重**（42 条待合并），可能成为瓶颈。今日重点关注多租户架构的重构、配置系统的统一化修复，以及针对 Kimi 模型的兼容性适配。CI/CD 自动化审查系统捕捉到了多个潜在的安全和性能风险，体现了较高的工程质量标准。

## 2. 版本发布

**无新版本发布**。
*注：PR #1145 和 #1149 显示正在进行 `staging` 分支的自动化提升流程，预示着新版本可能正在酝酿中。*

## 3. 项目进展

尽管合并的 PR 数量较少（8 个），但包含关键的架构调整和 CI 优化，为后续大型功能的合并奠定了基础：

*   **配置系统统一 ([PR #1124](https://github.com/nearai/ironclaw/pull/1124))**: 修复了 `ChannelsConfig` 解析逻辑，统一了优先级（环境变量 > 设置 > 默认值）。这是实现热重载 (#86) 和 CLI 管理命令的前置条件，修复了 "config set" 命令在部分场景下无效的问题。
*   **CI/发布流程优化 ([PR #1146](https://github.com/nearai/ironclaw/pull/1146))**: 修复了发布自动化中 `ironclaw_safety` 包的元数据缺失问题，防止 `cargo-dist` 尝试发布内部安全组件，保障了发布流水线的稳定性。
*   **Safari 输入法兼容性修复 ([PR #1140](https://github.com/nearai/ironclaw/pull/1140))**: 解决了 Safari 浏览器下使用 CJK（中日韩）输入法时，按 Enter 确认输入会误触发送消息的问题，提升了 Web 端体验。

**整体评价**: 今日进展主要集中在"修桥铺路"，为即将到来的多租户和 Workspace 功能清理障碍。

## 4. 社区热点

今日讨论最热烈的问题集中在**模型兼容性**和**边缘场景的稳定性**：

*   **[Issue #728] Kimi-K2.5 模型兼容性问题** (👍 3, 评论 4)
    *   **链接**: [nearai/ironclaw Issue #728](https://github.com/nearai/ironclaw/issues/728)
    *   **分析**: 用户在使用 Moonshot AI 的 Kimi-K2.5 模型时遇到 API 冲突。主要痛点在于该模型强制要求 Temperature 必须为 1，且返回的响应中缺少 `reasoning_content` 字段导致 Agent 解析失败。这反映了 IronClaw 在对接非标准 OpenAI 协议模型时的刚性约束。
*   **[Issue #1126] 工具参数空字符串处理** (评论 2)
    *   **链接**: [nearai/ironclaw Issue #1126](https://github.com/nearai/ironclaw/issues/1126)
    *   **分析**: 当模型将可选参数返回为空字符串 `""` 而非 JSON `null` 时，会导致 time/routine 工具崩溃。这是一个典型的 LLM 输出边界情况，已有相关修复 PR 正在审核中。

## 5. Bug 与稳定性

今日报告了多个关键 Bug，部分已被 CI 系统自动识别并标注风险等级：

| 严重度 | Issue/PR | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | **[Issue #1033](https://github.com/nearai/ironclaw/issues/1033)** | **Webhook 认证绕过**: 未配置 secret 时 Webhook 缺少认证检查，极易导致安全漏洞。 | **Closed** (已修复) |
| **HIGH** | **[Issue #1103](https://github.com/nearai/ironclaw/issues/1103)** | **SSRF 风险**: 可配置的 Embedding Base URL 未经验证，可能被利用访问内网资源。 | Open (CI 发现) |
| **HIGH** | **[Issue #825](https://github.com/nearai/ironclaw/issues/825)** | **ReDoS 风险**: 事件触发器的正则表达式未做复杂性校验，存在拒绝服务攻击隐患。 | **Closed** |
| **HIGH** | **[Issue #1142](https://github.com/nearai/ironclaw/issues/1142)** | **性能瓶颈**: SSE 解析路径存在 O(n²) 级别的字符串分配，影响高并发流式响应性能。 | Open (已有 [PR #1153](https://github.com/nearai/ironclaw/pull/1153) 修复) |
| **MEDIUM** | **[Issue #1116](https://github.com/nearai/ironclaw/issues/1116)** | **API Key 失效**: OpenAI 兼容后端在启动时若未导出环境变量会报 401 错误，配置加载时序问题。 | Open |

## 6. 功能请求与路线图信号

从 Issues 和 PRs 中捕捉到明确的产品演进方向：

1.  **多租户与工作空间隔离**
    *   **信号**: 一组大型 PR ([#1118](https://github.com/nearai/ironclaw/pull/1118), [#1117](https://github.com/nearai/ironclaw/pull/1117), [#1112](https://github.com/nearai/ironclaw/pull/1112)) 正在重构核心架构。
    *   **目标**: 实现基于用户的工作空间隔离和分层内存，这是迈向 SaaS 化部署的关键一步。

2.  **更友好的 Routines (例行任务) 管理**
    *   **信号**: [Issue #1131](https://github.com/nearai/ironclaw/issues/1131) 与 [PR #1154](https://github.com/nearai/ironclaw/pull/1154)。
    *   **目标**: 将难懂的 Cron 表达式转化为人类可读的文本（如 "Every Monday at 9 AM"），降低用户配置门槛。

3.  **MCP (Model Context Protocol) 生态扩展**
    *   **信号**: [Issue #134](https://github.com/nearai/ironclaw/issues/134) (边缘硬件支持) 与 [PR #1144](https://github.com/nearai/ironclaw/pull/1144) (Registry JSON 化)。
    *   **目标**: 支持通过 Unix Socket 安全访问硬件（如树莓派 GPIO），并将 MCP 服务器配置从代码迁移到 JSON，提高扩展性。

4.  **图像支持**
    *   **信号**: [Issue #1122](https://github.com/nearai/ironclaw/issues/1122)
    *   **目标**: 用户强烈请求支持 JPEG/PNG 图片上传与分析，目前仍仅支持文本文档。

## 7. 用户反馈摘要

*   **真实痛点 - 边缘设备集成**: Issue #134 显示工业/极客用户希望将 IronClaw 部署在树莓派等边缘设备上控制硬件，但受限于 WASM 沙箱模型。
*   **真实痛点 - 国产模型适配**: Issue #728 表明国内用户尝试接入 Kimi 等国产大模型，但受到参数校验和响应格式的阻碍。
*   **满意度**: 用户对 `ironclaw onboard` 的引导流程给予正面评价，但在遇到数据库配置错误时 (#846) 感到困惑，提示错误提示信息需要更友好。
*   **Web 端体验**: Safari 用户受到输入法交互问题的困扰 (#1139)，影响了国内及日韩用户的使用。

## 8. 待处理积压

以下重要 Issue/PR 长期未合并或需关注：

*   **[PR #1143] Schema-guided Tool Parameter Coercion**: 一个 XL 级别的大型重构，涉及核心工具调用逻辑。目前已产生冲突，急需核心维护者 Review 以解锁后续依赖该功能的 PR。
*   **[PR #927] Chat Onboarding & Routine Advisor**: 由核心贡献者提交的大型功能 PR，旨在用 LLM 引导的新手上路流程替代旧的向导。停滞数日，建议优先合并以提升新用户留存率。
*   **[Issue #728] Kimi Model Support**: 作为今日热度最高的问题，目前尚无官方 "Assigned" 标签，建议团队确认是否官方支持此类非标准 API。

---
*分析师: AI Open Source Observer | 生成时间: 2026-03-14*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-14)

这里是 **LobsterAI** 项目动态日报。今日项目展现出极高的开发活跃度，虽然无新版本发布，但代码库发生了重大重构，核心执行逻辑正在向 OpenClaw 架构全面迁移。

## 1. 今日速览
- **开发活跃度极高**：今日共有 **9 个 PR 被合并**，显示核心团队正在进行大规模的功能集成与代码重构。
- **架构重大调整**：项目正在深度整合 **OpenClaw**，移除了内置沙箱，转而使用 OpenClaw 作为统一的运行环境，并引入了 MCP Bridge 和插件预装系统。
- **社区反馈强烈**：过去 24 小时内新增/活跃 **12 条 Issues**，用户对本地模型（Ollama）的兼容性和任务执行稳定性反映强烈。
- **性能优化显著**：针对 Windows 端的启动速度进行了深度优化，网关启动时间从超时（180s+）大幅缩减至秒级。

## 2. 版本发布
- **无新版本发布**：截至今日，GitHub 上未发布新的 Release 版本。

## 3. 项目进展
今日合并的 9 个 PR 主要集中在 **OpenClaw 集成**、**架构解耦**和**性能优化**上，标志着项目正在进行一次底层架构的升级。

| PR 链接 | 核心改动 | 影响分析 |
| :--- | :--- | :--- |
| [#403 移除内置沙箱]((netease-youdao/LobsterAI PR #403)) | **[Breaking]** 移除内置 Sandbox，将运行环境完全托管给 OpenClaw。 | 简化了宿主应用复杂度，统一了执行环境，解决了用户环境差异导致的问题。 |
| [#408 MCP Bridge]((netease-youdao/LobsterAI PR #408)) | 为 OpenClaw 内嵌 Agent 提供 MCP 服务器桥接。 | 增强了 Agent 工具调用能力，支持 Tavily/GitHub 等 MCP 工具热重载。 |
| [#395 启动速度优化]((netease-youdao/LobsterAI PR #395)) | 使用 esbuild 打包 Gateway，优化编译缓存。 | **性能飞跃**：Windows 下启动从 >180s 降至 ~15s，解决了严重的启动卡顿问题。 |
| [#409 定时任务支持]((netease-youdao/LobsterAI PR #409)) | 定时任务底层适配 OpenClaw。 | 增强了自动化任务的稳定性。 |
| [#411/412 OpenClaw Memory]((netease-youdao/LobsterAI PR #412)) | 迁移记忆存储至 OpenClaw 的 `MEMORY.md`，修复 Docker 依赖问题。 | 改善了上下文记忆的持久化管理，修复了老用户升级后的兼容性。 |
| [#346 插件预装系统]((netease-youdao/LobsterAI PR #346)) | 新增 IM 插件预装机制，支持钉钉/飞书/QQ/企微。 | 简化了 IM 渠道的接入配置流程。 |

> **分析师点评**：项目正在经历“**去 Sandbox 化**”，将计算密集型和环境依赖重的任务剥离给 OpenClaw，这将是解决跨平台兼容性（如 Issue #402）和提升响应速度（如 Issue #400）的关键一步。

## 4. 社区热点
今日社区讨论主要集中在**本地模型（Ollama）的实用性**上，用户对“只聊不干”的现象表示担忧。

- **[Issue #112] 本地模型无法通过自然语言调用技能** (netease-youdao/LobsterAI Issue #112)
  - **热度**：👍 0 | 评论：2
  - **核心诉求**：用户使用 Ollama + Qwen 本地模型时，Agent 无法执行工具调用，只能进行文本对话。这是目前本地化部署最大的痛点，严重影响了 Offline Agent 的价值。
  - **关联**：Issue #405 也反映了相同问题，指出配置文件已开启权限但仍无法执行命令。

- **[Issue #370] Token 限额计算异常** (netease-youdao/LobsterAI Issue #370)
  - **热度**：👍 0 | 评论：2
  - **核心诉求**：简单的“你好”输入触发了超长 Token 请求（8961 input + 32000 output），导致 API 报错。用户怀疑是提示词注入或上下文管理逻辑存在缺陷。

## 5. Bug 与稳定性
今日报告的 Bug 多涉及**任务中断**和**环境配置**，按严重程度排序如下：

### 🔴 严重
1.  **[Crash] 沙箱无法启动导致程序退出** (Issue #402): 在 Debian 12 虚拟机环境下，LobsterAI 运行一段时间后自动退出。*(注：今日合并的 PR #403 移除了内置沙箱，可能会改变此环境下的表现，建议关注后续版本)*
2.  **[Core] 本地模型无法执行命令** (Issue #112, #405): 接入 Ollama 等本地模型时，Agent 丧失工具调用能力。

### 🟠 中等
1.  **[Logic] Token 计数错误** (Issue #370): 输入极短文本却请求巨额 Output Token，导致 API 400 错误。
2.  **[Stability] 定时任务/钉钉通知失效** (Issue #285): 定时任务执行成功，但推送到钉钉的通道不稳定。
3.  **[Logic] 任务提前结束** (Issue #358): 任务显示完成但实际未跑完，需要人工介入“继续”。

### 🟢 轻微
1.  **[UI] Cron 表达式生成错误** (Issue #407): 设置 10 分钟间隔时，生成的 Cron 表达式有误。
2.  **[UI] 自定义 Skill 无法选择** (Issue #404): 弹窗中无法选中用户自建的工作流技能。

## 6. 功能请求与路线图信号
- **IM 通道深度集成**：今日合并的 PR #346 显示团队正在构建钉钉、飞书等 IM 的插件预装机制，这与 Issue #285 (钉钉通知) 的需求不谋而合，预计下个版本将大幅改善 IM 集成体验。
- **OpenClaw 架构统一**：Issue #353 提到“OpenClaw 跑得更快”，团队在今日的 PR 中确实采取了全面转向 OpenClaw 的策略（移除内置沙箱），这表明官方路线图已明确将 OpenClaw 作为核心 runtime 以提升速度和稳定性。

## 7. 用户反馈摘要
- **痛点：响应速度**：多位用户反馈“速度太慢”、“莫名等待”（Issue #400）。今日合并的 PR #395（esbuild 打包优化）直接回应了这一痛点，预计将显著改善体验。
- **痛点：本地模型智商**：用户非常希望 LobsterAI 能成为本地模型的控制中枢（Issue #112），但目前对 Function Calling 的支持较弱。
- **场景：自动化运维**：用户尝试在无头服务器/虚拟机中运行（Issue #402），表明 LobsterAI 正在被考虑用于后台自动化任务场景。

## 8. 待处理积压
- **Issue #112 (本地模型调用失效)**: 该问题自 2 月底提出，至今仍在 Open 状态。随着今日架构向 OpenClaw 迁移，建议维护者确认新架构是否已原生解决此问题，或在文档中明确支持的本地模型版本。
- **Issue #285 (IM 通知失效)**: 虽然 PR #346 增强了 IM 插件，但具体的异步通知失效问题尚未有直接修复 PR，需持续关注。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于 TinyClaw 项目 2026-03-14 的 GitHub 数据生成的动态日报。

---

# TinyClaw 项目日报 (2026-03-14)

## 1. 今日速览
TinyClaw 项目今日呈现**极高活跃度**，核心开发团队（主要是 @jlia0）进行了密集的功能迭代与架构重构。项目成功发布了 **v0.0.12** 版本，标志着底层消息持久化机制的重大升级。今日共有 **5 个 PR 被合并**，涉及 ESM 模块化重构、分层记忆系统以及核心 Agent 逻辑的优化，显示出项目正处于从早期原型向稳定架构快速演进的阶段。虽然出现了关于 ES 模块引用的严重 Bug 反馈，但社区响应迅速，相关修复已合并。

## 2. 版本发布
### [v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)
**发布重点：消息持久化与事件流简化**
- **核心更新**：引入了 `agent_messages` SQLite 表，用于持久化存储所有 Agent 的聊天历史。
- **API 变更**：新增简化的 `agent_message` SSE (Server-Sent Events) 事件。该事件在每次 Agent 响应时触发一次，开发者无需再监听复杂的 `chain_step` 全生命周期，大幅降低了客户端集成的复杂度。
- **影响**：为构建可靠的历史记录回溯和多轮对话 UI 提供了数据基础。

## 3. 项目进展
今日合并了 5 个关键 PR，显著提升了项目的工程化水平和 Agent 能力：
- **架构重构 (ESM)**：[PR #206](https://github.com/TinyAGI/tinyclaw/pull/206) 将 CLI 包从 CommonJS 转换为 ESM，修复了依赖兼容性问题。
- **记忆系统**：[PR #209](https://github.com/TinyAGI/tinyclaw/pull/209) 引入了**分层记忆系统**，允许 Agent 跨对话保存、组织和召回知识（存储为 Markdown + YAML），这是通向自主学习 Agent 的关键一步。
- **Prompt 优化**：[PR #208](https://github.com/TinyAGI/tinyclaw/pull/208) 重构了系统提示处理逻辑，改为内存中构建，解决了磁盘 I/O 瓶颈和数据陈旧问题。
- **目录管理**：[PR #211](https://github.com/TinyAGI/tinyclaw/pull/211) 整合了 Agent 目录配置逻辑，并引入符号链接管理技能文件，减少了磁盘占用。
- **数据持久化**：[PR #202](https://github.com/TinyAGI/tinyclaw/pull/202) 为 v0.0.12 版本提供了底层支持。

## 4. 社区热点
- **Issue #210 [CLOSED]**: [[bug] ReferenceError: exports is not defined](https://github.com/TinyAGI/tinyclaw/issues/210)
  - **分析**：这是今日最受关注的 Issue。用户在修复了旧 Bug (#205) 后立即遇到了新的运行时模块引用错误。这反映了项目正在进行激进的模块化重构（CJS -> ESM），虽然会有短期阵痛，但社区修复速度极快（相关修复 PR #206 已合并）。
- **Issue #57 [OPEN]**: [feat: Add Google chat, API, and MCP comms](https://github.com/TinyAGI/tinyclaw/issues/57)
  - **分析**：这是一个长期的功能请求，建议集成 Google Chat、Slack 和 Teams。随着 TinyClaw 核心架构的稳定，此类外部通信协议的集成预计将成为下一阶段的重点。

## 5. Bug 与稳定性
今日报告了 2 个 High 级别 Bug，均与最近的重构有关：
1.  **🔴 High - ESM 模块引用错误** ([#210](https://github.com/TinyAGI/tinyclaw/issues/210))
    - **现象**：`tinyclaw pairing approve` 运行时报错 `ReferenceError: exports is not defined`。
    - **状态**：**已修复**。通过 [PR #206](https://github.com/TinyAGI/tinyclaw/pull/206) 彻底转为 ESM 解决。
2.  **🔴 High - 依赖导入失败** ([#205](https://github.com/TinyAGI/tinyclaw/issues/205))
    - **现象**：无法导入 `@clack/prompts`。
    - **状态**：**已关闭**（由上述 ESM 重构修复）。

## 6. 功能请求与路线图信号
- **集成需求**：用户明确提出希望支持 **Google Chat** 和 **Slack** 等主流通讯工具 ([#57](https://github.com/TinyAGI/tinyclaw/issues/57))。鉴于目前后端 API 和消息持久化已就位，集成 MCP (Model Context Protocol) 通信可能是下一个里程碑。
- **UI/UX 改进**：待合并的 [PR #212](https://github.com/TinyAGI/tinyclaw/pull/212) 和 [PR #207](https://github.com/TinyAGI/tinyclaw/pull/207) 显示项目正在构建可视化的 "Office" 工作区和详细的 Agent 配置页面，表明产品正从 CLI 工具向可视化平台转型。

## 7. 用户反馈摘要
- **痛点**：早期采用者对 CLI 的稳定性较为敏感，连续的 Bug (#205, #210) 显示出在 Node.js 版本兼容性和模块规范切换期间用户体验略有波动。
- **场景**：用户主要在尝试 `pairing` 等核心交互流程，对运行时的健壮性有较高要求。

## 8. 待处理积压
- **功能请求积压**：[Issue #57](https://github.com/TinyAGI/tinyclaw/issues/57)（增加第三方聊天软件集成）自 2 月中旬提出至今仍为 Open 状态。随着核心功能的完善，建议维护者评估是否将其纳入 Roadmap。
- **待审核 PR**：[PR #207](https://github.com/TinyAGI/tinyclaw/pull/207)（Agent 配置页）和 [PR #212](https://github.com/TinyAGI/tinyclaw/pull/212)（Office 重设计）目前处于 Open 状态，包含大量 UI 改进，急需 Code Review 以推进合并。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是为您生成的 **Moltis** 项目 2026-03-14 动态日报。

---

# Moltis 项目动态日报 (2026-03-14)

## 1. 今日速览
Moltis 项目今日保持了**极高的维护活跃度**，呈现出“快速修复、持续迭代”的健康状态。过去 24 小时内，项目成功合并了 **7 个 PR** 并关闭了 **7 个 Issue**，解决了包括 Docker 配置、Apple Container 兼容性、Telegram 推送及本地 LLM 支持在内的多个关键痛点。同时，社区反馈热烈，新增了 **6 个 Issue**，主要集中在新发布的 Tool Use 逻辑和权限边界问题上。目前项目处于**稳定修复期**，尚未发布新版本，但主分支代码质量正在显著提升。

## 2. 版本发布
*   **无新版本发布**：尽管有大量代码合并，截至今日尚未生成新的 Release tag。

## 3. 项目进展
今日共有 **7 个 PR 被合并**，主要集中在提升兼容性和修复用户体验细节：

*   **🤖 本地模型与容器支持增强**
    *   [PR #401](https://github.com/moltis-org/moltis/pull/401)：支持通过环境变量 (`MOLTIS_PROVIDER`/`MOLTIS_API_KEY`) 配置 Docker 镜像，极大简化了自托管部署流程。
    *   [PR #405](https://github.com/moltis-org/moltis/pull/405)：修复了 macOS 上 Apple Container 后端的启动失败问题 (WORKDIR chdir error)，增强了沙箱兼容性。
    *   [PR #408](https://github.com/moltis-org/moltis/pull/408)：虽然未合并但活跃度极高，引入了 Vulkan GPU 加速支持，正在持续打磨本地 LLM 的推理性能。

*   **🛠️ 核心功能修复**
    *   [PR #404](https://github.com/moltis-org/moltis/pull/404)：修复了 Telegram 消息推送在 HTML 解析失败时回退为原始代码的问题，现在会自动清洗标签。
    *   [PR #402](https://github.com/moltis-org/moltis/pull/402)：修正了 QMD (Memory) 的安装指令，解决了之前文档指向错误包名的问题。

*   **✨ 用户体验优化**
    *   [PR #406](https://github.com/moltis-org/moltis/pull/406)：优化了 Onboarding 流程，增加了密码管理器的自动填充支持。
    *   [PR #409](https://github.com/moltis-org/moltis/pull/409)：优化了 Cron 任务设置界面的文案，使其更易于理解。

## 4. 社区热点
*   **[Feature]: Support Lark/Feishu** [Issue #383](https://github.com/moltis-org/moltis/issues/383)
    *   **热度**：👍 2 | 评论：1
    *   **分析**：用户强烈希望能打通飞书/Lark 平台。这表明 Moltis 正在被视作企业级或团队协作的 AI 中枢，对国内主流 IM 的适配需求较高。
*   **[Bug]: Agent unable to use cron tools** [Issue #430](https://github.com/moltis-org/moltis/issues/430)
    *   **热度**：新报 Bug | 作者：@DanTup
    *   **分析**：这是今日最关键的 Bug 之一，涉及 Agent 在定时任务中无法调用工具。这直接影响了 Moltis 作为自动化 Agent 的核心价值。

## 5. Bug 与稳定性
今日新增 Bug 报告主要集中在**工具调用逻辑**和**安全/隐私边界**：

1.  **[HIGH] Agent 执行逻辑混乱** [Issue #427](https://github.com/moltis-org/moltis/issues/427)
    *   **描述**：Agent 在执行命令时会混淆节点，导致错误。
    *   **状态**：Open。已有相关修复 PR [PR #432](https://github.com/moltis-org/moltis/pull/432) 提交，修复了工具未检测连接节点就暴露参数的问题，**待合并**。
2.  **[HIGH] 隐私泄露风险** [Issue #428](https://github.com/moltis-org/moltis/issues/428)
    *   **描述**：即使启用了 "vault is sealed"（保险库封存），通过 "context" 按钮仍可查看完整聊天记录。这对隐私敏感场景是严重隐患。
3.  **[MEDIUM] 本地模型 Jinja 报错** [Issue #317](https://github.com/moltis-org/moltis/issues/317)
    *   **描述**：使用 Qwen 等模型时报错 "System message must be at the beginning"。
    *   **状态**：已有修复 PR [PR #431](https://github.com/moltis-org/moltis/pull/431) 提交，合并了系统消息位置，**待合并**。

## 6. 功能请求与路线图信号
*   **飞书集成** ([#383](https://github.com/moltis-org/moltis/issues/383))：随着 Telegram 修复的落地，飞书将成为下一个潜在的高价值集成目标。
*   **Vulkan 支持** ([PR #408](https://github.com/moltis-org/moltis/pull/408))：虽然目前是 Opt-in（可选），但显示项目正在积极拓宽本地硬件加速的边界，旨在支持更广泛的消费级显卡运行本地模型。

## 7. 用户反馈摘要
*   **部署痛点**：用户 @besoeasy 反馈之前的 Docker 镜像缺乏环境变量配置，导致集成困难 ([Issue #125](https://github.com/moltis-org/moltis/issues/125))，该问题今日已通过 PR #401 彻底解决。
*   **密码管理**：用户对 Onboarding 流程中无法使用浏览器自动填充密码感到不满 ([Issue #183](https://github.com/moltis-org/moltis/issues/183))，这反映了用户对“开箱即用”体验的细节要求很高，现已修复。
*   **文档滞后**：有用户指出 QMD 安装文档指向了错误的 Anthropic 包名 ([Issue #184](https://github.com/moltis-org/moltis/issues/184))，说明项目经过重构后，文档同步稍显滞后。

## 8. 待处理积压
*   **[PR] feat(local-llm): add opt-in Vulkan GGUF support** [PR #408](https://github.com/moltis-org/moltis/pull/408)
    *   **提醒**：该 PR 已开启 2 天，涉及底层硬件加速，建议维护者优先 Review 以确认其在多平台的稳定性。
*   **[PR] fix(agents): retry empty structured tool names** [PR #410](https://github.com/moltis-org/moltis/pull/410)
    *   **提醒**：针对 Agent 未知工具名的容错修复，对稳定性至关重要，建议尽快合并。

---
**分析师总结**：Moltis 今日不仅修复了困扰用户的 QMD 和 Apple Container 硬伤，还积极响应了新的 Bug 报告（如 Node 参数问题）。项目目前的短板在于文档同步和部分高级功能（如 Sealed Vault）的边界测试，建议在下个版本发布前重点关注隐私合规与多模态适配。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是根据 CoPaw (github.com/agentscope-ai/CoPaw) 2026-03-14 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目动态日报 (2026-03-14)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区贡献与反馈呈现井喷态势。过去24小时内共有 50 条 Issue 更新与 45 条 PR 更新，显示出版本迭代（v0.0.7）后的快速修正期特征。核心开发重点集中在**时区处理逻辑修复**、**第三方平台集成（Nextcloud/企业微信）** 以及 **v0.0.7 引入的性能与 UI 回归问题**排查。整体来看，项目在快速增加新功能的同时，正面临着上下文管理和多渠道兼容性的挑战。

## 2. 版本发布
- **无新版本发布**。当前最新版本仍为 v0.0.7。今日大部分 PR 活动主要针对 v0.0.7 暴露出的 Bug 进行修复（如时区、重复技能显示、文件移动错误），预计这些修复将在近期累积为 patch 版本发布。

## 3. 项目进展
今日共有 24 个 PR 被合并或关闭，项目在功能完善和稳定性修复上取得了实质性进展：

- **核心逻辑修复**：
    - **时区注入**：PR [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) 被合并，通过在 `env_context` 中固定注入 UTC 时间，解决了弱模型不主动调用工具导致的时间错误问题（关联 Issue [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346)）。
    - **技能管理**：PR [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396) 修复了 0.0.7 版本中内置技能在 UI 中重复显示的严重体验问题。
    - **Ollama 警告**：PR [#1433](https://github.com/agentscope-ai/CoPaw/pull/1433) 增加了对 Ollama 上下文长度设置的警告文档，旨在减少用户因配置错误导致的对话失忆。

- **新功能集成**：
    - **LobeHub 技能导入**：PR [#1350](https://github.com/agentscope-ai/CoPaw/pull/1350) 合并，支持从 LobeHub 导入技能，丰富了技能生态。
    - **新渠道支持**：PR [#1071](https://github.com/agentscope-ai/CoPaw/pull/1071) 合并了 Mattermost 渠道集成；PR [#1267](https://github.com/agentscope-ai/CoPaw/pull/1267) 推进了企业微信的长链接模式。

- **执行能力增强**：
    - PR [#1250](https://github.com/agentscope-ai/CoPaw/pull/1250) 优化了 Shell 工具执行和上下文管理，实现了隐式的用户身份传递。

## 4. 社区热点
今日社区讨论焦点主要集中在**模型能力的局限性**与**多渠道消息处理的稳定性**：

1.  **[Question] 时间获取机制争议** ([#1346](https://github.com/agentscope-ai/CoPaw/issues/1346))
    - **热度**：7 评论
    - **核心诉求**：用户质疑为何 CoPaw 不在上下文中直接嵌入本地时间，而依赖模型调用工具。这导致能力较弱的模型在复杂任务中经常“忘记”获取时间。
    - **分析**：反映了通用 Agent 在适配不同智力水平 LLM 时的 Prompt Engineering 挑战。社区倾向于更“显性”的上下文引导，而非依赖模型的工具调用自觉性。

2.  **[Feature] 企业微信支持** ([#51](https://github.com/agentscope-ai/CoPaw/issues/51))
    - **热度**：7 评论
    - **核心诉求**：用户强烈呼吁支持企业微信渠道。
    - **分析**：随着 PR [#1267](https://github.com/agentscope-ai/CoPaw/pull/1267) 和 [#1407](https://github.com/agentscope-ai/CoPaw/pull/1407) 的推进，该功能已处于临门一脚状态，企业级应用需求明显。

3.  **[Bug] 飞书频道“延迟回复”** ([#1345](https://github.com/agentscope-ai/CoPaw/issues/1345))
    - **热度**：5 评论
    - **核心诉求**：飞书 Bot 频繁出现回答“上一个”问题的现象，呈现出明显的队列处理延迟或去重失败特征。

## 5. Bug 与稳定性
v0.0.7 版本引入了多个严重的回归问题，需引起高度注意：

- **严重 (Critical)**:
    - **CPU 占用 100%** ([#1385](https://github.com/agentscope-ai/CoPaw/issues/1385))：Ubuntu 环境下，即使空闲 CPU 也会飙升至 100%。用户排查发现与 MCP 或文件读取有关，已提交修复 PR。
    - **文件系统错误** ([#1431](https://github.com/agentscope-ai/CoPaw/issues/1431))：Windows 下出现 `WinError 17`，系统无法将文件移动到不同磁盘驱动器，导致 Agent 崩溃。
    - **Ollama 对话失忆** ([#1416](https://github.com/agentscope-ai/CoPaw/issues/1416))：v0.0.7 升级后，Ollama 模型无法记住上下文且无法调用工具（已关闭，通过文档 PR [#1433] 引导）。

- **中等**:
    - **技能重复显示** ([#1370](https://github.com/agentscope-ai/CoPaw/issues/1370))：v0.0.7 UI 显示大量重复技能（已由 PR [#1396] 修复）。
    - **飞书消息去重缺失** ([#1403](https://github.com/agentscope-ai/CoPaw/issues/1403))：导致消息被重复处理。
    - **Compactor 产生幻觉** ([#1437](https://github.com/agentscope-ai/CoPaw/issues/1437))：记忆压缩组件在压缩历史时虚构用户从未发送的内容，影响长期记忆准确性。

## 6. 功能请求与路线图信号
- **多模态与联网能力**：用户请求在 Docker 部署的 Ollama 中支持类似“联网搜索”的一键开关 ([#1452](https://github.com/agentscope-ai/CoPaw/issues/1452))，以及在 Web Console 支持图片上传 ([#1045](https://github.com/agentscope-ai/CoPaw/issues/1045))。
- **自定义 Skills 增强**：用户强烈希望自定义 Skills 能上传 Python 脚本等资源文件，而不仅仅是写 Prompt ([#1316](https://github.com/agentscope-ai/CoPaw/issues/1316), [#1430](https://github.com/agentscope-ai/CoPaw/issues/1430))。这表明 CoPaw 目前的 Skills 抽象层级对高级用户来说过于受限。
- **ACP 协议支持**：Issue [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) 提出支持 Agent Communication Protocol，以便与 Codex/Claude Code 等 IDE 集成，显示项目正向开发者工具链扩展。

## 7. 用户反馈摘要
- **痛点**：
    - **弱模型适配难**：用户反映在配置非头部模型（如 Qwen3.5 的小参数版本或本地 Ollama）时，经常遇到工具调用失败、上下文超限 ([#1293](https://github.com/agentscope-ai/CoPaw/issues/1293)) 或不主动获取时间的情况。
    - **配置复杂性**：离线安装和局域网 Ollama 连接依然存在较多网络配置障碍 ([#1458](https://github.com/agentscope-ai/CoPaw/issues/1458))。
    - **前端细节**：Console 中切换模型信息展示不全，影响体验 ([#1459](https://github.com/agentscope-ai/CoPaw/issues/1459))。

- **满意点**：
    - 对 **LobeHub 技能导入** ([#1350](https://github.com/agentscope-ai/CoPaw/pull/1350)) 的快速支持表示欢迎，认为这极大降低了 Skill 的获取门槛。

## 8. 待处理积压
- **Issue [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) (CPU 100%)**：虽然用户自荐了 PR，但官方尚未合并，该问题严重影响服务器部署体验，需紧急跟进。
- **Issue [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) (飞书延迟)**：影响多轮对话体验，涉及并发处理逻辑，需要核心贡献者介入排查。
- **PR [#1460](https://github.com/agentscope-ai/CoPaw/pull/1460) (Nextcloud)**：新贡献者提交的大型功能 PR，需要维护者进行详细的安全与功能审查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
ZeptoClaw 今日经历了高强度的内部迭代，核心关注点在于**安全性加固**与**交互体验优化**。项目在 24 小时内合并了 3 个关键 PR，并关闭了 6 个相关 Issue，展现出维护者极高的响应速度与代码质量控制能力。主要进展包括修复了流式传输模式下的逻辑差异、引入了交互式的操作审批机制，并大幅提升了 CLI 的默认安全性。社区方面，贡献者 @starsy 提交了新的 ACP 协议支持，显示出项目生态在多渠道接入上的扩展潜力。目前项目处于快速迭代上升期，安全性基线已得到显著提升。

## 2. 版本发布
*   **无新版本发布**：尽管有多个功能合并，今日尚未生成正式的 Release 版本。

## 3. 项目进展
今日共有 **3 个 PR 被合并**，显著推进了项目的安全性与 UX 功能：

*   **[PR #353] feat: interactive approval prompts, streaming parity, safer defaults**
    *   **链接**: [qhkm/zeptoclaw PR #353](https://github.com/qhkm/zeptoclaw/pull/353)
    *   **核心进展**: 这是一个综合性的大型更新。
        1.  **交互式审批**: 实现了基于 TTY 的危险操作确认机制（`[y/N]` 提示），解决了自动运行模式下的安全隐患。
        2.  **Trusted Session**: 引入 `/trust` 命令，允许在确认安全的本地交互式会话中绕过审批。
        3.  **流式对齐**: 修复了流式处理路径中缺失的 Hook 调用和指标记录，使其与非流式路径保持一致。
    *   **影响**: 直接关闭了 #348, #347, #351, #350, #352 等多个安全相关的 Issue。

*   **[PR #342] feat: stream by default + response metadata footer**
    *   **链接**: [qhkm/zeptoclaw PR #342](https://github.com/qhkm/zeptoclaw/pull/342)
    *   **核心进展**: CLI 体验优化。将流式响应设为默认行为（提升感知性能），并在回复后显示 Token 用量与工具调用次数的元数据。
    *   **影响**: 关闭了 Issue #341。

*   **[PR #349] fix: AgentLoop constructors respect config streaming default**
    *   **链接**: [qhkm/zeptoclaw PR #349](https://github.com/qhkm/zeptoclaw/pull/349)
    *   **核心进展**: 修复了代码中硬编码 `streaming: false` 导致配置文件无效的 Bug。

## 4. 社区热点
今日的讨论主要集中在安全策略的细化与生态扩展上：

*   **[Issue #354] Filesystem Safety Carve-out**
    *   **链接**: [qhkm/zeptoclaw Issue #354](https://github.com/qhkm/zeptoclaw/issues/354)
    *   **分析**: 虽然该 Issue 已关闭，但讨论揭示了维护者对“安全扫描”粒度的严格把控。之前的修复为了减少误报放宽了扫描，但维护者迅速发现这可能引入新的风险（如 `edit_file` 的 diff 模式未扫描新内容），并计划通过后续提交进一步收窄安全策略。

*   **[PR #356] ACP (Agent Client Protocol) Implementation**
    *   **链接**: [qhkm/zeptoclaw PR #356](https://github.com/qhkm/zeptoclaw/pull/356)
    *   **分析**: 由社区贡献者 @starsy 提出，旨在为 ZeptoClaw 添加 stdio 和 HTTP 协议支持。这表明社区希望将 ZeptoClaw 作为后端 Agent 接入到更复杂的控制系统或前端 UI 中，是项目走向“基础设施化”的重要信号。

## 5. Bug 与稳定性
今日修复了多个关键 Bug，稳定性显著提升：

*   **[P2-High] 流式执行路径逻辑缺失 (Issue #351 -> Fixed by PR #353)**
    *   **描述**: 流式模式下，工具执行前后的钩子不运行，且不记录失败指标。
    *   **状态**: 已修复。
*   **[P1-Critical] 默认安全策略过于宽松 (Issue #348 -> Fixed by PR #353)**
    *   **描述**: 旧版本默认允许自主执行危险工具且关闭审批，存在极大风险。
    *   **状态**: 已修复，现在的默认策略更加严格。
*   **[Pending] Discord 频道忽略纯图片消息 (PR #346)**
    *   **链接**: [qhkm/zeptoclaw PR #346](https://github.com/qhkm/zeptoclaw/pull/346)
    *   **描述**: 当前 Discord 接口无法处理仅包含图片的消息。
    *   **状态**: 修复 PR 已提交，待合并。

## 6. 功能请求与路线图信号
*   **生态收录**: [Issue #334](https://github.com/qhkm/zeptoclaw/issues/334) 用户请求将 ZeptoClaw 收录至 Shelldex 目录，表明项目正在获得早期采用者的关注。
*   **协议支持**: [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) 提出的 ACP 协议支持，暗示未来版本可能会正式支持作为守护进程或 Web Service 运行，而不仅仅是 CLI 工具。

## 7. 用户反馈摘要
*   **安全与便利的博弈**: 从 Issue #354 和 #350 的处理可以看出，用户极其关注“误杀”（正常代码被安全扫描拦截）问题，但维护者更优先解决“漏杀”和“默认不安全”的问题。
*   **交互体验需求**: Issue #341 的快速解决表明，用户对 CLI 的响应速度和反馈信息有明确需求，希望看到实时的 Token 流和执行统计。

## 8. 待处理积压
当前项目处于高度活跃状态，大部分 Issue 均在 24 小时内得到处理。需要关注以下待合并项：

*   **[PR #356] ACP Protocol Support**: 这是一个较大的功能 PR，涉及底层通信架构。建议维护者尽快 Review，这将是 ZeptoClaw 接入更大生态的关键一步。
*   **[PR #346] Discord Image Fix**: 修复了特定渠道的 Bug，建议合并以提高社区集成度。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>