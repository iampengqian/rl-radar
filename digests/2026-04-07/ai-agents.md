# OpenClaw 生态日报 2026-04-07

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-06 22:06 UTC

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

# OpenClaw 项目动态日报 (2026-04-07)

你好！我是开源项目分析师。以下是基于 OpenClaw GitHub 仓库最新数据生成的日报。

## 1. 今日速览

OpenClaw 项目今日处于**极高活跃度**状态，社区热度持续升温。过去 24 小时内共有 **500 条 Issue 更新** 和 **500 条 PR 更新**，显示项目迭代速度极快。然而，这种高强度的改动伴随着显著的稳定性挑战，特别是刚发布的 `v2026.4.5` 版本引入了较多的破坏性变更和回归 Bug。目前社区反馈主要集中在安装失败、配置迁移以及核心功能（如 Prompt 缓存和工具调用）的回归问题上。

## 2. 版本发布

### **v2026.4.5**
本次更新包含重大的配置架构调整，旨在清理历史遗留配置项。

-   **破坏性变更**:
    -   **移除旧版配置别名**: 废弃了 `talk.voiceId` / `talk.apiKey`、`agents.*.sandbox.perSession`、`browser.ssrfPolicy.allowPrivateNetwork` 等旧路径。
    -   **重构权限控制**: 废弃了 channel/group/room 级别的 `allow` 开关，统一迁移至标准的公共路径及 `enabled` 字段。
-   **迁移建议**: 升级前请务必检查 `openclaw.json`，将旧版配置项映射到新版 Canonical 路径，否则可能导致网关启动失败或功能异常。建议使用 `openclaw doctor --fix` 尝试自动修复。

## 3. 项目进展

尽管有大量 PR 处于待合并状态（323 个），今日仍关闭/合并了 **177 个 PR**，主要集中在安全性加固和错误修复：

-   **安全性修复**:
    -   **PR #62111**: 修复了低信任度的后台运行时输出被注入到受信任系统事件中的漏洞，防止潜在的提权风险。
    -   **PR #62150 & #62151**: 修复了 Nostr 和 QQBot 插件中存在的媒体 URL 处理漏洞，防止任意文件发送。
-   **功能增强**:
    -   **PR #62129**: 新增 `openclaw capability` CLI 命令，统一了推理工作流的调用入口，支持模型调用、媒体处理等。
    -   **PR #62127**: 恢复并增强了对 Google Gemma 4 模型的推理支持。
-   **依赖更新**:
    -   **PR #62148**: 将内置 ACPX 扩展升级至 0.5.1。

## 4. 社区热点

社区今日关注点集中在平台支持、成本控制及认证问题上：

1.  **[Issue #75] Linux/Windows 原生客户端请求** (👍 67 | 评论 74)
    -   **诉求**: 用户强烈呼吁提供 Linux 和 Windows 原生桌面客户端（目前仅有 macOS/iOS/Android）。
    -   **分析**: 桌面端缺失是阻碍 OpenClaw 在开发者群体中普及的重要痛点。
2.  **[Issue #22278] 发布配置 JSON Schema** (👍 11 | 评论 11)
    -   **诉求**: 开发者请求公开 `openclaw.json` 的 JSON Schema 以支持 IDE 自动补全和校验。
    -   **分析**: 反映出用户对配置体验的重视，目前的手动配置容易出错且缺乏指引。
3.  **[Issue #31708] API 成本因 Prompt 缓存失效激增 5 倍** (评论 12)
    -   **诉求**: 用户发现 Prompt Caching 机制失效，导致 Token 消耗和成本大幅上升。
    -   **分析**: 这是企业级用户最敏感的“钱包痛点”，需优先解决。

## 5. Bug 与稳定性

v2026.4.5 发布后，出现了一系列严重的安装和运行时回归问题，部分已确认有修复方案：

### 🔴 严重
-   **[Issue #61911] Windows 安装失败 (ERR_UNSUPPORTED_ESM_URL_SCHEME)**
    -   **状态**: 活跃
    -   **详情**: Windows 10/11 上安装最新版后直接报错，无法启动，原因是 ESM 加载器对 `c:` 协议路径处理不当。
    -   **链接**: [openclaw/openclaw Issue #61911](https://github.com/openclaw/openclaw/issues/61911)
-   **[Issue #61686] npm 更新后 CLI 崩溃 (缺少依赖)**
    -   **状态**: 活跃
    -   **详情**: 通过 npm 更新至 2026.4.5 后，核心命令因缺少打包插件的运行时依赖而失效。
    -   **链接**: [openclaw/openclaw Issue #61686](https://github.com/openclaw/openclaw/issues/61686)

### 🟠 中等
-   **[Issue #53959] GPT-5.3-codex 拒绝执行工具** (回归)
    -   **详情**: 更新后模型不再调用任何工具，导致 Agent 失去执行能力。
    -   **链接**: [openclaw/openclaw Issue #53959](https://github.com/openclaw/openclaw/issues/53959)
-   **[Issue #45110] Prompt 前缀变更导致缓存失效**
    -   **详情**: 系统自动修改 Prompt 前缀，导致每条消息都无法命中缓存，计算量激增。
    -   **链接**: [openclaw/openclaw Issue #45110](https://github.com/openclaw/openclaw/issues/45110)
-   **[Issue #61793] Claude Opus 4.5+ 缓存被破坏**
    -   **状态**: 已关闭 (可能已有修复)
    -   **详情**: `dropThinkingBlocks` 设置导致新版 Claude 模型的 Prompt 缓存失效。
    -   **链接**: [openclaw/openclaw Issue #61793](https://github.com/openclaw/openclaw/issues/61793)

## 6. 功能请求与路线图信号

-   **硬性门控**: [Issue #13583](https://github.com/openclaw/openclaw/issues/13583) 请求在 Agent 回复前强制执行特定工具调用或策略规则（如金融场景的合规检查），目前标记为 `enhancement`。
-   **Agent 间任务委托协议**: [Issue #28106](https://github.com/openclaw/openclaw/issues/28106) 提出 "Agent Economy" 概念，允许不同 OpenClaw 实例间的 Agent 进行任务委托和协商，这是一个宏大的架构演进方向。
-   **上下文压缩策略改进**: [PR #62138](https://github.com/openclaw/openclaw/pull/62138) 提出了 "Pointer Compaction Mode"，旨在保留原始对话细节而非仅依赖 LLM 摘要，这对长周期记忆至关重要。

## 7. 用户反馈摘要

-   **配置复杂度高**: 多个 Issue 提到配置项繁多且缺乏校验，v2026.4.5 的破坏性变更加剧了这一困扰。
-   **Token 消耗敏感**: 用户对 Prompt 注入和缓存失效非常敏感，尤其是 [Issue #9157] 提到的“Workspace 文件每次对话都重复注入”问题，被认为是严重的资源浪费。
-   **多模态体验待完善**: Telegram 语音转录、Discord 语音连接等功能的稳定性仍有待提高。

## 8. 待处理积压

-   **[Issue #23538] Anthropic setup-token 认证失效** (创建于 2026-02-22): 尽管标记为 Stale，但仍有用户持续反馈 401 错误，影响 Anthropic 模型的正常使用。
-   **[Issue #28191] 端口冲突导致 Gateway 崩溃循环**: 启动时的端口检测逻辑未在加载主程序前进行，导致 systemd 重启风暴。
-   **[Issue #50070] SIGTERM 后无法自动重启**: 在 macOS launchd 下，Gateway 退出后无法由守护进程自动拉起，导致长时间停机。

---
*本报告由 AI 自动生成，数据截至 2026-04-07。*

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-04-07)

## 1. 生态全景
2026 年 4 月的开源 AI 智能体生态正经历从“单一对话工具”向“多模态自动化平台”的剧烈转型。**OpenClaw** 凭借极高的社区活跃度和激进的架构重构确立了其作为生态“内核”的地位，但同时也正经历着大规模迁移带来的阵痛；**NanoBot** 和 **CoPaw** 等新生代项目则正在快速补齐多渠道通信（如 WhatsApp/Discord）和本地模型集成的短板，向消费级市场渗透。与此同时，安全性（沙箱逃逸、多租户隔离）和成本控制（Prompt 缓存失效）已成为阻碍项目从“玩具”走向“生产环境”的两大核心瓶颈。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 (24h) | PRs 活跃度 (24h) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (极高) | 500 (极高) | v2026.4.5 | 🟡 **动荡** | 架构重构期，Bug 与修复并存，社区焦虑度高 |
| **NanoBot** | 25 (高) | 57 (高) | v0.1.5 | 🟢 **成长** | 里程碑发布，文档完善，功能快速迭代 |
| **CoPaw** | 28 (高) | 15 (中) | 无 | 🟢 **活跃** | 修复关键 Hot Reload/MCP 问题，拓展渠道 |
| **IronClaw** | 29 (高) | 50 (高) | v0.24.1 (筹备) | 🟠 **攻坚** | V2 架构迁移，聚焦多租户安全模型 |
| **Moltis** | 11 (中) | 8 (中) | 2个版本 | 🟢 **稳健** | 企业级特性增强，桥接能力提升 |
| **LobsterAI** | 0 (低) | 11 (中) | 无 | 🔵 **开发** | 静默开发期，集中重构定时任务模块 |
| **ZeptoClaw** | 4 (低) | 8 (中) | 无 | 🟢 **修复** | 修复 API 兼容性与 Telegram 集成 |
| **EasyClaw** | 0 (低) | 0 (低) | v1.7.8 | 🟢 **稳定** | 维护期，聚焦国际化与系统兼容性 |
| **PicoClaw** | 0 | 0 | 无 | ⚪ **静默** | 过去 24h 无活动 |
| **NanoClaw** | 0 | 0 | 无 | ⚪ **静默** | 过去 24h 无活动 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ **静默** | 过去 24h 无活动 |

## 3. OpenClaw 在生态中的定位

*   **核心参照物**：作为生态中 Issue 和 PR 数量级遥遥领先的项目，OpenClaw 扮演着**功能定义者**和**流量入口**的角色。
*   **优势**：
    *   **生态规模**：177 个 PR 合并量和 500+ Issue 讨论显示了极强的网络效应。
    *   **功能深度**：率先引入了复杂的 CLI 命令（`openclaw capability`）和配置架构重构，试图建立行业标准。
*   **劣势与挑战**：
    *   **稳定性债务**：v2026.4.5 引入了大量破坏性变更（配置路径废弃、Windows 安装失败），导致目前处于“高故障率”状态。
    *   **对比 NanoBot/Moltis**：OpenClaw 在多渠道支持（如 WhatsApp/Matrix）和轻量级部署上不如新兴项目灵活，它更像一个重型“操作系统”，而非单一应用。
*   **技术路线差异**：不同于 Moltis 侧重 Rust 的安全与性能，或 IronClaw 侧重链上/多租户架构，OpenClaw 选择了全功能、平台化的 JS/TS 技术栈，牺牲了部分轻量性以换取扩展性。

## 4. 共同关注的技术方向

1.  **Prompt 缓存与成本控制**
    *   **涉及项目**: OpenClaw, Moltis
    *   **具体诉求**: OpenClaw Issue #31708 和 #45110 反映了 Prompt Caching 失效导致成本激增 5 倍的问题。这表明在 2026 年，**Token 成本**已成为开源项目在生产环境部署时的首要敏感指标，缓存机制的稳定性直接决定了项目的可用性。

2.  **沙箱安全与权限隔离**
    *   **涉及项目**: OpenClaw, NanoBot, IronClaw, CoPaw
    *   **具体诉求**: IronClaw 正在重构多租户凭证隔离 (#2068)；NanoBot 报告了 `restrictToWorkspace` 失效 (#2826)；CoPaw 修复了 Shell 命令绕过 File Guard (#2967)。
    *   **趋势**: 随着智能体获得执行代码和操作文件的能力，**安全边界**正成为比功能实现更紧迫的挑战。

3.  **多渠道 原生集成**
    *   **涉及项目**: CoPaw, NanoBot, ZeptoClaw, Moltis
    *   **具体诉求**: CoPaw 正在合并 WhatsApp 支持 (#2962)；Moltis 和 NanoBot 均在优化 Telegram/Discord/Matrix 的连接。AI 智能体正从 Web UI 走向 IM 聊天窗口，成为随时随地的个人助理。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot / CoPaw** | **IronClaw / Moltis** |
| :--- | :--- | :--- | :--- |
| **核心定位** | **全功能 Agent 操作系统** | **轻量级多渠道助手** | **企业级/主权 Agent 平台** |
| **目标用户** | 开发者、极客、高级玩家 | 普通用户、个人爱好者 | 企业开发者、Web3 用户 |
| **架构重心** | 配置复杂度极高，模块化，插件生态 | 追求易用性，多语言文档，快速部署 | 侧重安全性、多租户、Rust 高性能/链上交互 |
| **当前痛点** | 升级导致的配置崩溃、回归 Bug | 本地模型 (Ollama) 兼容性、系统挂起 | OAuth 流程复杂、V2 架构迁移成本 |

## 6. 社区热度与成熟度

*   **快速迭代期**:
    *   **OpenClaw**: 处于“破旧立新”的阶段，虽然热度最高，但伴随着大量噪音和不满，需警惕社区因频繁 Breaking Changes 产生的疲劳感。
    *   **NanoBot**: 借助 v0.1.5 和官网发布，正处于“低摩擦增长”期，社区反馈积极，问题修复速度快。

*   **质量巩固期**:
    *   **IronClaw**: 活跃度虽高，但主要集中在修复 V2 迁移后的安全漏洞和逻辑错误，属于典型的架构升级后的“填坑”阶段。
    *   **LobsterAI**: 典型的“静默开发”，无社区噪音，通过大量内部 PR 重构核心模块（如定时任务），表明产品正在憋大招，准备下一次功能跃迁。

## 7. 值得关注的趋势信号

1.  **“静默失败” 是体验杀手**:
    *   ZeptoClaw (#462) 和 OpenClaw 的反馈均指出，当 Agent 执行长任务或出错时，若无反馈，用户体验极差。**反馈机制（进度条、错误降级、思考过程隐藏）** 的优劣将成为留存用户的关键。

2.  **本地模型工具调用 的不稳定性**:
    *   NanoBot (#2829) 和 CoPaw (#2988) 均报告了 Ollama/Gemma 等本地模型的工具调用失败问题。这表明在 2026 年，**本地模型与云端模型在 Function Calling 协议上的兼容性**仍是开源生态的一大技术债。

3.  **Agent 间通信协议的萌芽**:
    *   OpenClaw 的 Issue #28106 (Agent Economy) 和 Moltis 的外部 Agent 桥接 PR (#566) 暗示，生态正从“单智能体”向“多智能体协作”演进。未来的竞争将不仅是单一 Agent 的能力，而是其**连接其他 Agent 或 CLI 工具的协议开放性**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-07)

**分析师摘要**：NanoBot 今日迎来了重要里程碑版本 `v0.1.5`，标志着项目正式拥有独立官网和多语言文档。社区活跃度极高，Issues 讨论聚焦于安全策略与多模型兼容性，PR 更新主要集中在渠道插件优化与核心 Bug 修复。

---

## 1. 今日速览

NanoBot 项目今日保持**极高活跃度**，共处理 **25 条 Issues**（17 新开/8 关闭）和 **57 条 PRs**（31 待合并/26 已合并）。项目正式发布 **v0.1.5** 版本，引入了官网支持和 27 位新贡献者。社区重点关注本地服务安全策略过严、Ollama 工具调用兼容性以及 Web 搜索挂起等关键问题。整体来看，项目正处于快速迭代期，核心功能稳步增强，但需警惕新版本引入的配置兼容性与环境变量解析问题。

## 2. 版本发布

### 🎉 v0.1.5 正式发布
- **更新亮点**：合并了 66 个 PR，迎来了 27 位新贡献者，这是第一个拥有独立官网的版本。
- **官网与文档**：正式上线 [nanobot.wiki](https://nanobot.wiki)，支持英语、中文、日语、韩语、西班牙语等多语言文档。
- **破坏性变更/迁移注意**：暂无明确列出的 Breaking Changes，但建议用户关注以下潜在的配置迁移问题：
  - Windows 环境下 `exec` 工具强制使用 Bash 可能导致的兼容性问题 (#2868)。
  - 配置文件中 `__version__` 显示不一致（显示 0.4.1 而非 0.1.5）已由 PR #2860 修复。

## 3. 项目进展

今日共有 **26 个 PR 被合并**，显著推进了以下领域：

- **渠道扩展与修复**：
  - **Discord/Matrix 优化**：PR #2873 修复了 Discord 转发消息的丢失问题，PR #2872 优化了 Matrix 的 HTML 渲染。
  - **飞书全球化支持**：PR #2674 增加了 Lark 域名配置，支持飞书国际版。
  - **Web 聊天界面**：PR #2871 提交了基于 SSE 流式传输的 Web 聊天渠道，无需修改核心代码。

- **核心稳定性修复**：
  - **会话保持**：PR #2526 修复了使用 `/stop` 命令后用户消息和工具调用丢失的问题。
  - **文件工具修正**：PR #2865 修正了 `WriteFileTool` 将字符数误报为字节数的问题。
  - **版本管理**：PR #2860 统一了版本号的获取方式，解决了版本不一致问题。

## 4. 社区热点

今日讨论最活跃的话题集中在安全限制与模型集成：

1.  **本地访问安全策略过严** ([#2796](https://github.com/HKUDS/nanobot/issues/2796))
    - **诉求**：安全模块默认拦截所有指向 `localhost` 的请求，导致用户无法集成 PinchTab 等本地自动化服务。
    - **分析**：SSRF 防护与本地开发便利性之间的冲突，用户希望有更灵活的白名单配置。

2.  **DuckDuckGo 搜索导致系统挂起** ([#2828](https://github.com/HKUDS/nanobot/issues/2828))
    - **诉求**：使用 DuckDuckGo 进行网页搜索会导致整个系统无响应，甚至无法通过 `Ctrl+C` 终止。
    - **分析**：严重的阻塞性 Bug，影响系统基础稳定性，可能与网络请求的超时处理有关。

3.  **Ollama 工具调用损坏** ([#2829](https://github.com/HKUDS/nanobot/issues/2829))
    - **诉求**：使用 Ollama 模型（如 gemma4:e4b）时无法正确调用工具，格式疑似出错。
    - **分析**：本地模型集成的关键痛点，影响了无 API 依赖用户的使用体验。

## 5. Bug 与稳定性

按严重程度排序的今日 Bug 报告：

- **🔴 严重**:
  - **系统挂起**：DuckDuckGo 搜索导致系统级死锁 ([#2828](https://github.com/HKUDS/nanobot/issues/2828))。
  - **沙箱逃逸风险**：即使开启 `restrictToWorkspace=true`，仍可删除工作区外文件 ([#2826](https://github.com/HKUDS/nanobot/issues/2826))。

- **🟠 中等**:
  - **Windows 兼容性**：`exec` 工具强制使用 Bash 导致 Windows/WSL 报错 ([#2868](https://github.com/HKUDS/nanobot/issues/2868))。
  - **工具调用格式错误**：LLM 返回无效的函数参数 JSON 字符串 ([#2858](https://github.com/HKUDS/nanobot/issues/2858))。**[已有 Fix PR #2859]**
  - **配置失效**：Web 搜索无法通过配置禁用 ([#2839](https://github.com/HKUDS/nanobot/issues/2839))。

- **🟡 轻微**:
  - **CLI 崩溃**：输入特殊字符导致 `UnicodeEncodeError` ([#2846](https://github.com/HKUDS/nanobot/issues/2846))。**[已有 Fix PR #2869]**
  - **版本号显示错误**：`__init__.py` 与 `pyproject.toml` 版本不一致 ([#2857](https://github.com/HKUDS/nanobot/issues/2857))。**[已有 Fix PR #2860]**

## 6. 功能请求与路线图信号

结合 Issue 与 PR，以下功能可能进入下一阶段开发：

1.  **MCP 协议全功能支持**：Issue #2854 指出当前仅支持 MCP Tools，忽略了 Prompts 和 Resources。PR #2861 已尝试将其作为只读工具暴露，预计将增强 Agent 的外部服务集成能力。
2.  **WhatsApp 隐私隔离**：Issue #2836 请求为每个聊天 ID 分离工作区，防止隐私泄露。这符合个人助理隐私保护的趋势。
3.  **用户反馈作为记忆信号**：Issue #2870 (RFC) 建议接收用户对消息的反应（如 👍）作为反馈信号，用于强化学习或记忆调整。
4.  **Web 渠道原生支持**：PR #2871 提交了 Web 聊天界面，表明项目正从单纯的 IM Bot 转向多端通用的 AI Agent 平台。

## 7. 用户反馈摘要

- **痛点**：
  - **配置复杂性**：多个用户反馈配置项（如环境变量 `${DEEPSEEK_API_KEY}` 读取失败 #2849，E2EE 配置别名无效 #2851）导致部署受阻。
  - **“思考”泄露**：升级后，Telegram 机器人会展示内部思考过程（"the user is asking..."），而非直接给出结果 (#2795)。
  - **沙箱安全性**：用户对 `restrictToWorkspace` 的实际安全性表示担忧 (#2826)。

- **满意点**：
  - 官网上线和多语言文档受到欢迎，降低了入门门槛。
  - 新增的 Web Channel (PR #2871) 被认为是非常实用的补充。

## 8. 待处理积压

以下重要议题需维护者关注：

- **PR #2871 (Web Chat)**：作为新增核心渠道，尚未合并，需进行详细的安全与性能审查。
- **Issue #2826 (沙箱安全)**：涉及核心安全机制，需尽快确认修复方案。
- **Issue #2828 (系统挂起)**：影响极其严重，需定位是否为依赖库问题或死循环。
- **Issue #2757 (OpenAI API)**：`max_tokens` 兼容性问题尚未解决，影响最新模型的使用。

---
*数据来源：NanoBot GitHub Repository (2026-04-07 08:00 UTC 截止)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 IronClaw 项目 2026-04-07 动态日报。

---

# IronClaw 项目日报 (2026-04-07)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，社区与核心团队正集中精力处理 **v2 架构迁移后的所有权模型** 及安全性问题。过去 24 小时内共有 **29 个 Issue 更新** 和 **50 个 PR 更新**，显示出项目正在经历密集的代码重构与漏洞修复阶段。虽然今日没有正式版本发布，但 `v0.24.1` 的发布准备工作已在 PR 阶段，且大量 PR 聚焦于修复多租户环境下的凭证安全、Web UI 的 SSE 事件排序错误以及 WASM 通道的兼容性问题。整体来看，项目正在为下一个稳定版本进行冲刺，重点在于提升系统的安全性和多用户隔离能力。

## 2. 版本发布
*   **无正式版本发布**。
*   **注意**：PR #2075 显示 `v0.24.1` 已处于准备阶段，主要包含 API 兼容性变更和标签迁移修复。

## 3. 项目进展
今日共有 **4 个 PR 被合并/关闭**，另有大量 PR 处于活跃状态，主要集中在以下方向：

*   **v2 架构稳定性修复**：PR #2050 正在通过统一认证/授权门控路径来稳定 v2 引擎，修复了包括 OAuth 恢复、多租户凭证作用域在内的多个回归问题。
*   **关键 Bug 修复**：
    *   **SSE 事件排序 (PR #2083)**：修复了 Web UI 消息“卡顿”直到刷新才显示的问题，确保 `Done` 状态在响应之后发送。
    *   **Ollama 连接 (PR #2081)**：修复了 Windows 用户访问 Ollama 时出现 502 错误的问题，默认 URL 改为 `127.0.0.1`。
    *   **Telegram WASM 通道 (PR #2051)**：解除了对 "telegram" 通道名称的保留限制，修复了该通道静默失败的问题。
*   **安全加固 (PR #1958)**：针对 v2 编排器和沙箱环境进行了安全加固，增加了自我修改的审批门控和语法验证。
*   **新功能拓展**：PR #1446 正在尝试增加对阿里云百炼编码计划的支持，PR #1973 正在移植全功能的 Ratatui 终端 UI。

## 4. 社区热点
今日讨论最集中的话题是 **“多租户所有权模型引入的安全与隔离问题”**。

*   **核心争议：所有权模型的安全性**
    *   作者 `henrypark133` 连续提交了多个高优先级 Issue (如 #2068, #2069, #2071)，详细指出了当前实现中存在的跨租户凭证回退风险（MT-1 至 MT-6）。这些 Issue 指出 WASM 工具执行、MCP 会话和动态工具数据库中缺乏 `user_id` 隔离，可能导致严重的安全漏洞。
    *   [Issue #2068: Sandbox jobs use owner's secrets regardless of job creator](https://github.com/nearai/ironclaw/issues/2068)

*   **用户痛点：集成与配置体验**
    *   Issue #1992 和 #1998 报告了 Google OAuth 和 Slack Connect 流程的阻断性错误，显示第三方集成目前的易用性仍有待提高。
    *   [Issue #1992: Google OAuth returns 400](https://github.com/nearai/ironclaw/issues/1992)

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且部分严重影响生产环境使用。

*   **P0 / Critical (严重)**
    *   **[已修复] Web UI SSE 事件乱序**：导致聊天消息卡顿，直到刷新页面才显示。由 PR #2083 修复。
        *   [Issue #2079: web UI messages stuck until refresh](https://github.com/nearai/ironclaw/issues/2079)
    *   **Routine 运行失败**：生产环境中，Routine 因工具被禁用而无法完成任务。
        *   [Issue #1996: Routine runs fail with "Task Cannot Complete"](https://github.com/nearai/ironclaw/issues/1996)
    *   **安全漏洞：WASM API URL 重写器**：生产代码中保留了测试用的环境变量控制重写器，可能被利用篡改 API 端点。
        *   [Issue #2056: SECURITY: Remove env-var-controlled API URL rewriters](https://github.com/nearai/ironclaw/issues/2056)

*   **P1 / High (高)**
    *   **Gateway 用户技能不可见**：Engine V2 引入 `resolve_user_project` 后，Web/API 用户无法看到任何技能，导致技能注入失效。
        *   [Issue #2084: skills not visible to gateway users](https://github.com/nearai/ironclaw/issues/2084)
    *   **跨租户凭证回退**：WASM 工具执行时静默回退到 "default" 凭证。
        *   [Issue #2069: Silent cross-tenant credential fallback](https://github.com/nearai/ironclaw/issues/2069)

*   **P2 / Medium (中)**
    *   **Onboard 数据库错误**：`ironclaw onboard` 最后一步报错，但后续启动正常。
        *   [Issue #846: `onboard` fails with database error](https://github.com/nearai/ironclaw/issues/846)

## 6. 功能请求与路线图信号
*   **LLM 提供者热重载 (Issue #1350)**：用户强烈希望切换模型/提供商后无需重启进程即可生效。这是一个高价值需求，目前标记为 enhancement。
    *   [Issue #1350: Support hot-reload of LLM provider](https://github.com/nearai/ironclaw/issues/1350)
*   **自改进循环 (Issue #2082)**：社区提出了基于 Trace 驱动的自我改进循环 RFC，试图将测试、反馈和内存系统串联起来，这可能是未来 Agent 智能化的重要方向。
    *   [Issue #2082: RFC: trace-driven self-improvement loop](https://github.com/nearai/ironclaw/issues/2082)
*   **链上合约源码公开 (Issue #2077)**：外部开发者希望公开 `market.near.ai` 的合约源码，以支持持有自己密钥的“主权 Agent”直接链上交互。
    *   [Issue #2077: contract source for market near ai](https://github.com/nearai/ironclaw/issues/2077)

## 7. 用户反馈摘要
*   **Engine V2 迁移阵痛**：多个 Bug 报告（#2084, #2010）表明，用户在升级到 V2 架构后遇到了工具不可用、配置不生效等问题，V2 的稳定性是目前最大的吐槽点。
*   **安装与初始化体验**：Issue #846 显示，尽管安装过程报错，但系统实际上能正常运行，这给用户造成了困惑，降低了信任感。
*   **集成障碍**：Google 和 Slack 的集成问题（#1992, #1998）表明，非技术用户在配置标准第三方服务时仍面临较高门槛。

## 8. 待处理积压
*   **长期未决的功能请求**：Issue #70 (Feed System) 虽然创建于 2 月，但今日仍有活跃更新，表明团队仍在规划或推进该功能，这是构建持久化 Agent 记忆的关键。
    *   [Issue #70: feat: Feed](https://github.com/nearai/ironclaw/issues/70)
*   **积压的 Bug Bash 问题**：有一批标记为 `[bug_bash]` 的 Issue（如 #1997 Slack App 不可用，#1999 技能名称空格限制）尚未得到解决，建议维护者优先处理以提升 Hackathon 或新用户的上手体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 LobsterAI 项目 2026-04-07 的动态日报：

---

# 📊 LobsterAI 项目日报 (2026-04-07)

## 1. 今日速览
LobsterAI 项目今日呈现出**高开发活跃度、低社区互动**的显著特征。过去 24 小时内虽然没有新版本发布或 Issue 反馈，但团队提交了 **11 个功能与优化 PR**，主要集中在“定时任务”模块的深度重构与体验升级。项目正处于功能密集迭代阶段，重点解决定时任务的历史记录管理、UI 交互以及底层依赖的现代化更新。

## 2. 版本发布
**无**。
*注：虽然今日无版本发布，但积压的 11 个待合并 PR 预示着下一次版本更新将包含重大的 UI 调整和功能增强。*

## 3. 项目进展
今日无已合并的 PR，所有 11 个 PR 均处于 **OPEN** 状态，主要集中在以下两个方向的开发：

*   **定时任务 重构与增强**：
    *   **UI 全面升级**：PR [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 将任务列表从表格改为卡片网格，增加了日期分组和搜索功能，显著提升用户体验。
    *   **执行记录管理**：PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 解决了定时任务执行记录在侧边栏无限堆积的痛点，引入了折叠分组展示机制。
    *   **调试与通知优化**：PR [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) 新增“测试任务”按钮，缩短调试路径；PR [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) 引入了本地 macOS 通知渠道；PR [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) 修复了编辑后通知渠道不更新的 Bug。

*   **底层架构与依赖维护**：
    *   **状态管理重构**：PR [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) 将技能选择状态从全局改为按会话独立管理，修复了跨会话状态污染的问题。
    *   **依赖批量更新**：Dependabot 提交了 5 个 PR ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278), [#1491](https://github.com/netease-youdao/LobsterAI/pull/1491), [#1492](https://github.com/netease-youdao/LobsterAI/pull/1492), [#1493](https://github.com/netease-youdao/LobsterAI/pull/1493))，涉及 Electron 41 升级、Anthropic SDK 更新以及 GitHub Actions 的大版本跨越。

## 4. 社区热点
*   **最活跃/受关注 PR**：由于今日无用户评论（0 Comments），热点主要集中在**代码提交量**上。
    *   **PR [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) (定时任务 UI 升级)** 和 **PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) (执行记录分组)** 是今日最核心的改动，直接针对用户在使用定时任务时的核心痛点（列表混乱、查找困难）。
    *   **分析**：虽然缺乏公开的社区讨论数据，但从提交内容看，维护者正在积极补齐产品在“任务调度与通知”方面的短板，试图将 LobsterAI 从单纯的对话工具转向更强大的自动化 Agent 平台。

## 5. Bug 与稳定性
今日修复了 2 个功能逻辑缺陷，均在 PR 中提交了修复方案（待合并）：

*   **🟡 中等 - 编辑定时任务后通知渠道未更新**
    *   **描述**：修改定时任务的通知方式（如从飞书改为“不通知”）后，详情页仍显示旧配置。
    *   **修复状态**：已有 Fix PR [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490)。
*   **🟡 中等 - 技能选择状态全局污染**
    *   **描述**：在会话 A 中选择了特定技能，切换到会话 B 后技能状态依然保留，导致逻辑混乱。
    *   **修复状态**：已有 Fix PR [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494)，通过状态隔离解决。

## 6. 功能请求与路线图信号
虽然没有显式的 Issue 讨论，但今日的 PR 提交揭示了明确的**产品演进路线图**：

1.  **自动化任务增强**：从简单的定时执行向完善的任务管理演进（支持测试运行 PR [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486)、本地通知 PR [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489)）。
2.  **多模态/多渠道支持**：引入了对 Anthropic SDK 的更新 (PR [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278)) 和本地通知渠道，暗示未来可能支持更多模型或通知方式。
3.  **架构现代化**：Electron 升级至 v41 (PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) 和 CI Actions 升级 (PR [#1491](https://github.com/netease-youdao/LobsterAI/pull/1491), [#1492](https://github.com/netease-youdao/LobsterAI/pull/1492))，表明项目正在为长期维护和新特性支持打下基础。

## 7. 用户反馈摘要
*   **数据缺失**：过去 24 小时内无新增 Issue 或 PR 评论。
*   **隐性反馈推断**：根据 PR 描述中的“[问题]”部分，可以推断用户（或内部测试人员）主要痛点在于：
    *   定时任务执行记录杂乱，难以管理。
    *   任务创建流程繁琐，缺乏即时反馈（无法立即测试）。
    *   跨会话的状态管理不够精细化。

## 8. 待处理积压
目前项目有 **11 个待合并 PR**，形成了短期的“PR 积压”。建议维护者优先关注以下两项以保持项目健康度：

*   **依赖更新合并**：Dependabot 的 PR ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278) 等) 已开启数天，建议尽快完成兼容性测试并合并，特别是 Electron 41 的升级可能带来显著的性能提升。
*   **核心功能 Review**：PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 和 [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 涉及大量 UI 和逻辑变动，需尽快进行 Code Review 以避免后续合并冲突。

---
*分析师建议：今日项目无社区噪音，纯粹是开发者的“施工日”。建议在合并这批 PR 后发布一个 Beta 或 Minor 版本，以验证新的定时任务 UI 是否符合用户预期。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-07)

你好！我是 Moltis 开源项目分析师。以下是基于 2026年4月7日 GitHub 数据生成的项目日报。

## 1. 今日速览
Moltis 项目今日保持**极高的开发活跃度**，呈现出“快速迭代、边修边加”的特征。过去24小时内共有 11 条 Issue 更新和 8 条 PR 更新，并发布了 2 个新版本。核心贡献者 `penso` 提交了多项关键 PR，不仅修复了 Copilot 企业版代理和 Telegram 频道的问题，还引入了 Webhooks 和外部 Agent 桥接等高级架构功能。与此同时，社区对新渠道（如 Matrix）和文件处理能力（PDF）的需求日益高涨。

## 2. 版本发布
今日连续发布了两个版本，显示出持续的交付节奏：
*   **[Release 20260406.04](https://github.com/moltis-org/moltis/releases/tag/20260406.04)**
*   **[Release 20260405.06](https://github.com/moltis-org/moltis/releases/tag/20260405.06)**
    *   *注：Release Note 未提供详细描述，但结合提交记录推测，这两个版本主要包含了 Telegram 代理支持、Copilot 修复以及 Web 界面的优化。*

## 3. 项目进展
今日共有 **5 个 PR 被合并**，显著提升了项目的稳定性与扩展性：

*   **🤖 企业级与代理支持增强**
    *   **[PR #355](https://github.com/moltis-org/moltis/pull/355) [MERGED]**: 修复了 Copilot 企业版 Token 的路由问题。通过解析并持久化 `proxy-ep`，强制企业版 API 走代理端点，解决了 421 错误。
    *   **[PR #550](https://github.com/moltis-org/moltis/pull/550) [MERGED]**: 为 Telegram 频道增加了可选的通道级代理支持，解决了部分网络环境下的连接问题。

*   **🧹 运维与自动化**
    *   **[PR #564](https://github.com/moltis-org/moltis/pull/564) [MERGED]**: 实现了孤儿 Cron 会话的自动清理和沙箱容器的修剪机制，优化了长期运行时的资源占用。

*   **🌐 前端与品牌**
    *   **[PR #567](https://github.com/moltis-org/moltis/pull/567) [MERGED]**: 更新了官网主页，增加了支持的 LLM 提供商和频道的“药丸”展示，并更新了 Slogan 为 "A secure persistent personal agent server in Rust"。
    *   **[PR #573](https://github.com/moltis-org/moltis/pull/573) [MERGED]**: 修复了 Web 端会话侧边栏的链接问题，支持 Cmd/Ctrl+点击在新标签页打开会话。

## 4. 社区热点
*   **[Issue #233 [OPEN]](https://github.com/moltis-org/moltis/issues/233)**: **Matrix 协议支持**。
    *   **热度**: 👍 5, 评论 4
    *   **分析**: 这是一个长期存在的 Feature Request，今日再次活跃。配合今日报告的 Bug (#569)，说明社区非常渴望 Moltis 能支持去中心化通讯协议 Matrix，作为 Telegram/Discord 之外的补充。
*   **[Issue #549 [CLOSED]](https://github.com/moltis-org/moltis/issues/549)**: **MacOS Codex OAuth 流程问题**。
    *   **热度**: 评论 3
    *   **分析**: 桌面端集成 LLM 的痛点。虽然 Issue 被关闭，但这反映了桌面客户端在处理本地 OAuth 验证时的复杂性。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，主要集中在**配置绑定**和**渠道集成**：

1.  **🔴 严重: 登录失败与网络绑定**
    *   **[Issue #565](https://github.com/moltis-org/moltis/issues/565)**: 当绑定地址更改为 `0.0.0.0` 或局域网 IP 时，登录系统性地失败。这对于想在家庭网络或公网部署的用户是阻断性问题。

2.  **🟠 中等: Matrix 配置解析失败**
    *   **[Issue #569](https://github.com/moltis-org/moltis/issues/569)**: 用户尝试在配置中手动添加 "matrix" 渠道但无法解析。这表明 Matrix 支持可能处于未完成的半成品状态，或者文档滞后。

3.  **🟠 中等: LLM 提供商列表获取失败**
    *   **[Issue #568](https://github.com/moltis-org/moltis/issues/568)**: 已注册的提供商无法获取 LLM 列表，影响模型切换体验。

4.  **🟢 已解决: Telegram 账号未找到**
    *   **[Issue #572](https://github.com/moltis-org/moltis/issues/572) [CLOSED]**: 随着今日 Telegram 代理支持的合并，相关连接问题可能已得到缓解或解决。

## 6. 功能请求与路线图信号
用户对 Moltis 的期望正从单纯的“聊天”转向“全能 AI 助手”：

*   **高级交互能力**
    *   **[Issue #563](https://github.com/moltis-org/moltis/issues/563)**: 请求支持接收和处理 PDF 文件。这是 RAG（检索增强生成）场景的基础需求。
    *   **[Issue #571](https://github.com/moltis-org/moltis/issues/571)**: 请求添加 Prompt Caching（提示词缓存），旨在降低 API 成本和延迟。

*   **架构与扩展 (开发者导向)**
    *   **[PR #575 [OPEN]](https://github.com/moltis-org/moltis/pull/575)**: **通用 Webhook 入口**。允许外部事件（GitHub, Stripe 等）触发 AI Agent，这是 Moltis 迈向自动化工作流核心的关键一步。
    *   **[PR #566 [OPEN]](https://github.com/moltis-org/moltis/pull/566)**: **外部 Agent 桥接**。允许 CLI 工具（如 Claude Code, Codex CLI）接入 Moltis 会话。
    *   **[Issue #574](https://github.com/moltis-org/moltis/issues/574)**: 请求基于 Topic（话题）进行模型路由，而非全局模型设置。

## 7. 用户反馈摘要
*   **部署体验**: 用户倾向于将 Moltis 部署在服务器端（通过 `0.0.0.0` 绑定），但当前的登录逻辑对此支持不佳 (#565)，这是一个急需解决的痛点。
*   **功能渴望**: 用户不仅满足于文本对话，更希望集成文件处理 (PDF) 和更多通讯平台。
*   **开发者体验**: `penso` 等核心开发者正在通过 Webhooks 和外部 Agent 桥接将 Moltis 打造为一个“Agent Hub”，这与用户期待的“个人 AI 服务器”定位高度契合。

## 8. 待处理积压
*   **[Issue #233: Matrix Support](https://github.com/moltis-org/moltis/issues/233)**: 自 2 月创建以来持续受到关注，今日再次活跃。鉴于已有用户尝试强行配置 Matrix 导致报错 (#569)，建议维护者明确该功能的排期或提供临时的配置指引。
*   **[PR #535: Langfuse Tracing](https://github.com/moltis-org/moltis/pull/535)**: 该 PR 已开启数日，引入了重要的可观测性功能，建议尽快 Review 合并，以增强企业级调试能力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-07)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区反馈与代码提交呈现井喷态势。过去24小时内共有 **28 条 Issue 更新** 和 **15 条 PR 更新**，显示项目正处于快速迭代与功能完善阶段。虽然无新版本 Release 发布，但核心开发者与社区贡献者集中修复了 Hot Reload 稳定性、MCP 客户端生命周期管理及本地模型兼容性等关键问题。今日动态表明项目正在从单纯的 Agent 框架向更健壮的多渠道（WhatsApp/Discord/Telegram）AI 助手平台演进。

## 2. 版本发布
**无**。
虽然无正式版本发布，但根据 PR 动态，预计下一个版本将重点解决 Hot Reload 导致的资源泄漏和 CPU 飙升问题。

## 3. 项目进展
今日共有 **3 个 PR 被合并/关闭**，主要集中在功能增强与构建优化：
*   **[CLOSED] PR #2889 Feature(provider): Support CoPaw Local Update**: 增强了 CoPaw Local 页面的 Llama.cpp 更新逻辑，并修复了解析错误。这表明本地模型管理的用户体验正在优化。
    *   链接: [agentscope-ai/CoPaw PR #2889](https://github.com/agentscope-ai/CoPaw/pull/2889)
*   **[CLOSED] PR #2998 fix(agents): cache MCP client registration**: 修复了高频聊天请求下 MCP 客户端重复注册导致的连接崩溃问题，显著提升了系统稳定性。
    *   链接: [agentscope-ai/CoPaw PR #2998](https://github.com/agentscope-ai/CoPaw/pull/2998)
*   **[OPEN] PR #2962 (Key Progress) feat(channels): add WhatsApp channel**: 虽然处于 Open 状态，但该 PR 引入了基于 `neonize` 的 WhatsApp 频道支持，是今日最受关注的功能性提交之一，标志着 CoPaw 正式突破传统 IM 限制。
    *   链接: [agentscope-ai/CoPaw PR #2962](https://github.com/agentscope-ai/CoPaw/pull/2962)

## 4. 社区热点
今日讨论最热烈的问题集中在**系统稳定性**与**本地模型支持**：
*   **[Bug]: High CPU usage / power consumption - when idle (#2888)**
    *   **热度**: 9 条评论
    *   **分析**: 这是一个严重回归问题，涉及 `AnyIO` 的取消循环导致空闲状态下 CPU 满载。这直接影响了用户将 CoPaw 作为后台服务运行的意愿。
    *   链接: [agentscope-ai/CoPaw Issue #2888](https://github.com/agentscope-ai/CoPaw/issues/2888)
*   **[Bug]: 无法安装llama.cpp (#2955)**
    *   **热度**: 8 条评论
    *   **分析**: 用户在下载本地模型后界面未刷新，暴露了本地模型管理器的前后端状态同步问题。
    *   链接: [agentscope-ai/CoPaw Issue #2955](https://github.com/agentscope-ai/CoPaw/issues/2955)
*   **[Feature]: Hope the skill ecosystem can be launched soon! (#2361)**
    *   **热度**: 2 条评论，2 个点赞
    *   **分析**: 用户对 Skill 生态系统的呼声很高，期待更丰富的技能支持以脱离"玩具"属性。
    *   链接: [agentscope-ai/CoPaw Issue #2361](https://github.com/agentscope-ai/CoPaw/issues/2361)

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且多处涉及核心流程，按严重程度排序如下：

*   **Critical (系统挂起/崩溃)**
    *   **#2960 MCP Client Not Cleaned Up on Hot Reload**: 配置更改触发热重载导致 MCP 客户端重复初始化，引发 CPU 持续飙升。（已有修复 PR #2979）
        *   链接: [Issue #2960](https://github.com/agentscope-ai/CoPaw/issues/2960)
    *   **#2999 Repeated MCP client registration**: 每次请求重新注册 MCP 导致任务取消。（已由 PR #2998 修复）
        *   链接: [Issue #2999](https://github.com/agentscope-ai/CoPaw/issues/2999)
*   **High (功能失效)**
    *   **#2991 Stop button does not work**: 用户无法中断 Agent 的响应，前端控制失效。（已有修复 PR #2987）
        *   链接: [Issue #2991](https://github.com/agentscope-ai/CoPaw/issues/2991)
    *   **#2967 execute_shell_command may bypass File Guard**: 安全沙箱绕过风险，Agent 可通过 Shell 命令访问受保护目录。（已有修复 PR #2978）
        *   链接: [Issue #2967](https://github.com/agentscope-ai/CoPaw/issues/2967)
*   **Medium (兼容性问题)**
    *   **#2988 Ollama 本地模型无法调用工具**: Ollama 后端的 tool calling 解析失败。
        *   链接: [Issue #2988](https://github.com/agentscope-ai/CoPaw/issues/2988)
    *   **#2992 Garbled multilingual output**: 上下文超长时输出乱码。
        *   链接: [Issue #2992](https://github.com/agentscope-ai/CoPaw/issues/2992)

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以明显看出项目接下来的发展方向：
1.  **多渠道集成**: PR #2962 (WhatsApp) 和 PR #2995 (WhatsApp/Signal 回复功能) 表明项目正致力于打通主流即时通讯软件，这通常是 AI Agent 走向消费级市场的关键一步。
2.  **技能系统增强**: Issue #2323 提出基于 Tags 的技能检索，Issue #2418 呼吁 Skills Hub 管理页面。这显示当前的技能管理方式（纯语义/LLM路由）在规模化后效率低下，结构化索引将成为下个版本的优化重点。
3.  **多模态内存管理**: PR #2997 提议压缩历史记录中的图片/视频块以防止 API 溢出，说明 CoPaw 正在适配长上下文的多模态交互场景。

## 7. 用户反馈摘要
*   **痛点**: Windows 客户端稳定性较差，存在自动关闭 (#2911)、输入法兼容性问题 (#2970) 以及本地模型下载识别错误 (#2955)。
*   **交互体验**: Web 端聊天管理逻辑被诟病，用户希望切换 Agent 后能保持上次会话上下文 (#2982)，且 Markdown 渲染需要优化 (#2983, #2975)。
*   **积极信号**: 开发者对 Issues 的响应速度极快，许多今日报告的 Bug（如 MCP 注册、Shell 安全绕过）当天即有对应的 PR 提交修复，社区活跃度健康。

## 8. 待处理积压
*   **#2366 Add GitHub Copilot provider**: 这是一个由社区贡献的 PR，旨在支持 GitHub Copilot 作为 LLM 提供商。该 PR 已提交多日但目前仍处于 Open 状态，建议维护者尽快 Review 以丰富模型生态。
    *   链接: [agentscope-ai/CoPaw PR #2366](https://github.com/agentscope-ai/CoPaw/pull/2366)
*   **#2032 Support global/shared skills directory**: 关于多 Agent 场景下共享技能的需求，讨论已持续一周，尚未有明确的排期或 RFC，建议纳入路线图讨论。
    *   链接: [agentscope-ai/CoPaw Issue #2032](https://github.com/agentscope-ai/CoPaw/issues/2032)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报 (2026-04-07)**

这里是 ZeptoClaw 项目日报。今日项目在 API 兼容性和工具调用能力上取得了显著进展，虽然无新版本发布，但核心功能 PR 的提交表明项目正在向更成熟的阶段演进。

### 1. 今日速览
ZeptoClaw 今日保持高度活跃，核心维护者与社区贡献者同步推进了多项关键更新。虽然没有发布新版本，但代码库迎来了 **8 个 PR 更新**（其中 2 个已合并）和 **4 个 Issue 更新**。重点集中在两个方面：一是 **OpenAI 兼容性 API 的完善**（支持 Tool Calling），二是 **Telegram 集成的稳定性修复**。总体来看，项目正在积极填补流式传输和自定义工具场景下的功能缺口。

### 2. 版本发布
*   **无新版本发布**

### 3. 项目进展
今日共有 2 个 PR 合并至主分支，显著提升了外部集成（Telegram）和 API 交互的健壮性：

*   **[MERGED] 修复 Telegram 静默失败与消息分块** ([PR #462](https://github.com/qhkm/zeptoclaw/pull/462))
    *   **内容**：解决了通过 Telegram 进行开放式研究任务时 Agent 静默失败的问题。
    *   **价值**：通过引入消息分块（适应 Telegram 4096 字符限制）和纯文本错误降级机制，确保了用户在长对话场景下总能收到反馈，极大改善了移动端体验。
*   **[MERGED] Telegram 消息分块与错误降级** ([PR #458](https://github.com/qhkm/zeptoclaw/pull/458))
    *   **内容**：针对 Telegram 的 UTF-16 限制进行了底层的分块逻辑优化。
    *   **价值**：作为 #462 的补充或前置，彻底解决了长 AI 回复导致的 "message is too long" 报错。

### 4. 社区热点
今日的讨论焦点在于**系统的并发能力**与**浏览器工具的实现**：

*   **[OPEN] 真正的并发/非阻塞设计** ([Issue #486](https://github.com/qhkm/zeptoclaw/issues/486))
    *   **热度**：👍 0 | 评论: 1
    *   **分析**：用户 `superhero75` 提出了一个中高优先级的需求，指出当前 Agent 在执行长任务时会阻塞用户响应。提议参考 `spacedriveapp/spacebot` 的架构。这反映了 ZeptoClaw 目前可能在多任务并行处理上存在架构瓶颈，社区对**异步交互体验**有强烈诉求。
*   **[OPEN] 浏览器自动化工具** ([PR #459](https://github.com/qhkm/zeptoclaw/pull/459))
    *   **热度**：由核心贡献者提交，涉及复杂的集成。
    *   **分析**：引入 `agent-browser` 引擎，旨在解决之前可能存在的 Web 交互能力不足问题。该 PR 仍在活跃状态，是社区期待的重要功能。

### 5. Bug 与稳定性
今日暴露了两个关键的技术债，主要集中在 API 流式传输和 Shell 交互：

1.  **[严重] OpenAI 流式 API 丢失 Tool Calls** ([Issue #488](https://github.com/qhkm/zeptoclaw/issues/488))
    *   **问题**：在使用 `stream=true` 调用 `/v1/chat/completions` 时，Tool Calls 信息被丢弃，导致客户端无法接收到工具调用指令。
    *   **状态**：**已有修复 PR** ([PR #489](https://github.com/qhkm/zeptoclaw/pull/489))。该 PR 实现了完整的 SSE 流式工具调用支持，正在等待合并。
2.  **[中等] 自定义工具 Shell 转义破坏 CLI 包装器** ([Issue #466](https://github.com/qhkm/zeptoclaw/issues/466))
    *   **问题**：使用 `&#123;&#123;args&#125;&#125;` 传递完整命令行时，系统强制进行单引号转义，导致命令无法被正确解析。
    *   **状态**：**已有修复 PR** ([PR #467](https://github.com/qhkm/zeptoclaw/pull/467))。引入了 `raw_string` 类型以跳过转义，正在等待合并。

### 6. 功能请求与路线图信号
*   **非阻塞架构重构** ([Issue #486](https://github.com/qhkm/zeptoclaw/issues/486))：这是一个 "Large" 级别的变更请求。虽然维护者目前未确认实施，但随着 Agent 复杂度增加（如集成浏览器工具），异步执行将是绕不开的门槛。
*   **上下文压缩** ([PR #460](https://github.com/qhkm/zeptoclaw/pull/460))：虽然今日未合并，但该 PR 处于活跃状态，旨在解决长对话导致的 Token 溢出崩溃问题。这表明项目正在积极寻求**上下文窗口管理**的最佳实践。

### 7. 用户反馈摘要
从 Issue #461 和 #466 的反馈中可以提炼出以下痛点：
*   **"Silent Failure" (静默失败) 是最大痛点**：用户非常反感 Bot 在处理复杂任务时没有任何反馈（既不返回结果也不报错）。今日合并的 PR #462 直接回应了这一问题。
*   **CLI 集成需要更灵活的参数控制**：高级用户习惯使用 CLI 包装器（wrapper），过于严格或自动化的 Shell 转义会破坏他们的工作流，`raw_string` 类型的引入将满足这一需求。

### 8. 待处理积压
以下重要 PR 已提交但尚未合并，建议优先关注：
*   **[PR #489] OpenAI 兼容 Tool Calling**：修复了核心 API 功能，建议尽快 Review 并合并。
*   **[PR #467] 自定义工具 raw_string 支持**：解决了参数传递的阻塞问题。
*   **[PR #460] 多层上下文压缩**：防止 Token 溢出的关键防御机制。

---
*数据来源: ZeptoClaw GitHub Repository (2026-04-07)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-07)

**数据来源**: [EasyClaw GitHub](https://github.com/gaoyangz77/easyclaw)  
**分析师**: AI Open Source Analyst

---

### 1. 今日速览
EasyClaw 项目今日整体呈现 **“版本驱动，静默更新”** 的态势。虽然 Issue 反馈区今日为零活跃，但项目并未停滞，刚刚发布了 **v1.7.8** 正式版本，重点解决了 macOS 平台的签名验证问题。与此同时，社区贡献者提交了一项重要的国际化 PR（#21），计划引入包括中日韩在内的 5 种新语言支持，目前该 PR 处于待合并状态。总体来看，项目核心功能趋于稳定，当前阶段主要致力于提升兼容性与全球化覆盖。

### 2. 版本发布
本次发布主要针对 macOS 用户体验的修复与优化。

*   **版本号**: **v1.7.8 (RivonClaw)**
*   **发布日期**: 2026-04-07
*   **更新重点**:
    *   **macOS 兼容性修复**: 重点解决了 macOS Gatekeeper 拦截未签名应用导致提示“已损坏”的问题。Release Notes 提供了详细的手动修复指引（通过 Terminal 移除隔离属性），降低了新手用户的门槛。
*   **迁移建议**: macOS 用户在更新至 v1.7.8 后若遇无法打开的情况，需参照 Release 说明在终端执行 `xattr` 命令解除隔离。

### 3. 项目进展
今日无已合并的 PR，但在代码审查队列中有显著的功能进展。

*   **国际化扩展 (i18n)**:
    *   PR **#21** `feat(i18n): add 5 new languages` 正在等待合并。
    *   **进展详情**: 该 PR 由贡献者 `chinayin` 发起，一次性新增了 **5 种语言**（繁体中文、日语、韩语、越南语、印地语）。不仅新增了文件，还完成了对 1333 个翻译键值的全量覆盖，并更新了索引配置。
    *   **意义**: 一旦合并，EasyClaw 将正式具备东亚及南亚主要语种的覆盖能力，极大拓展潜在用户群。

### 4. 社区热点
*   **讨论焦点**: 今日无活跃的 Issue 讨论，用户反馈渠道稍显沉寂。
*   **潜在关注点**: PR **#21** 虽然没有在 Issues 列表显示评论数（显示 undefined），但其体量大（1333 keys），预计是维护者接下来的审查重点。
    *   链接: [PR #21 - Add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)

### 5. Bug 与稳定性
*   **已知问题 (来自 Release Notes)**:
    *   **平台**: macOS
    *   **现象**: 应用被系统判定为“已损坏”无法启动。
    *   **严重程度**: 中（阻塞启动，但有解法）。
    *   **状态**: 官方已在 v1.7.8 发布说明中提供 Workaround（绕过方法），尚未从代码层面完全解决签名认证问题（或尚未购买 Apple 开发者证书）。
*   **今日新增 Bug**: 无报告。

### 6. 功能请求与路线图信号
*   **明确的国际化路线**: PR **#21** 释放了强烈的国际化信号。鉴于其包含 `zh-TW`（繁体中文）和 `ja`（日语），推测项目方可能在为进入港台、日本及东南亚市场做准备。
*   **预测**: 若 PR #21 测试通过，预计将在下个版本（v1.7.9 或 v1.8.0）中正式上线多语言切换功能。

### 7. 用户反馈摘要
由于今日无 Issue 更新，反馈主要源自 v1.7.8 的 Release Notes 暗示：
*   **痛点**: macOS 用户长期以来深受“文件已损坏”错误提示的困扰，特别是在升级新版系统后。
*   **满意度**: 官方在 Release 中直接提供 Terminal 解决方案，表明开发团队对用户常见痛点响应迅速，虽然无法立即解决签名问题，但提供了清晰的文档支持。

### 8. 待处理积压
*   **核心 PR 待定**: **PR #21** 自 3 月 18 日创建至今已有 20 天，虽然今日有更新，但仍处于 OPEN 状态。建议维护者尽快完成代码审查（特别是翻译准确性校验）并合并，以推动项目国际化进程。
*   **长期风险**: macOS 签名问题若长期依赖用户手动输入命令解决，可能会影响非技术背景用户的留存率。

---
**项目健康度评分**: 🟢 **良好**
*虽然社区交互频率（Issue/Comment）今日较低，但版本发布节奏稳定，且有高质量的 Feature PR 推进，项目处于稳健的开发迭代期。*

</details>