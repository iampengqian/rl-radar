# OpenClaw 生态日报 2026-04-03

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-02 22:07 UTC

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

# OpenClaw 项目动态日报 (2026-04-03)

## 1. 今日速览
OpenClaw 项目今日继续保持高频迭代，社区活跃度极高，过去24小时内共有 500 条 Issue 更新和 500 条 PR 更新。项目刚刚发布了 **v2026.4.2** 版本，主要针对 xAI 插件进行了破坏性的配置重构。从 Issue 列表来看，当前社区关注点主要集中在 **多平台桌面客户端**、**工具调用权限管理** 以及 **特定模型（如 Kimi）的兼容性** 上。虽然新版本带来了一些配置迁移的挑战，但大量待合并的 PR（331条）显示出社区强劲的开发动力。

## 2. 版本发布
### **v2026.4.2** (发布于 2026-04-03)
[Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.4.2)

**💥 破坏性变更:**
*   **Plugins/xAI 配置迁移**: 将 `x_search` 的设置从核心 `tools.web.x_search.*` 路径迁移至插件自有路径 `plugins.entries.xai.config.xSearch.*`。
*   **认证标准化**: 统一使用 `plugins.entries.xai.config.webSearch.apiKey` 或环境变量 `XAI_API_KEY` 进行认证。
*   **自动迁移**: 版本包含了对旧配置格式的自动迁移逻辑，但建议用户检查配置文件以防万一。

## 3. 项目进展
今日项目在跨平台支持和生态扩展方面有显著推进：

*   **Linux 原生客户端落地**: PR #59859 提交了基于 GTK 的原生 Linux App，这标志着 OpenClaw 正式补全了桌面端（macOS/Windows/Linux）的最后一块拼图，响应了 Issue #75 的强烈需求。
    *   [PR #59859](https://github.com/openclaw/openclaw/pull/59859)
*   **Databricks 生态支持**: PR #59899 引入了 Databricks 外部插件，扩展了 OpenClaw 在企业级数据平台的应用场景。
    *   [PR #59899](https://github.com/openclaw/openclaw/pull/59899)
*   **Agent 功能增强**:
    *   PR #59891 实现了按 Agent 配置 TTS（语音合成），提升了多 Agent 场景下的语音交互体验。
    *   PR #59923 为 Heartbeat（心跳/定时任务）增加了批量任务支持。
*   **稳定性修复**: PR #59915 修复了浏览器 CDP 竞争后导致的执行失步问题，这是一个关键的稳定性修复。

## 4. 社区热点
今日讨论最热烈的话题集中在平台扩展和系统稳定性上：

1.  **[OPEN] Linux/Windows Clawdbot Apps (#75)**
    *   **热度**: 👍 66 | 💬 65
    *   **分析**: 用户对 Linux 和 Windows 原生客户端的需求极为迫切。虽然 macOS 已有成熟方案，但桌面端的缺失限制了 OpenClaw 在开发者群体中的普及。今日的 PR #59859 正是对此的回应。
    *   [Issue #75](https://github.com/openclaw/openclaw/issue/75)

2.  **[OPEN] RFC: Native Agent Identity & Trust Verification (#49971)**
    *   **热度**: 💬 53
    *   **分析**: 这是一个高级别的架构讨论，提议为 OpenClaw 引入去中心化身份（DID）和信任验证机制。这表明项目正在探索超越单纯 "Chatbot" 的方向，向更安全、可验证的 Autonomous Agent（自主智能体）网络演进。
    *   [Issue #49971](https://github.com/openclaw/openclaw/issue/49971)

3.  **[OPEN] Dashboard 500 Error on v2026.3.31 (#58814)**
    *   **热度**: 👍 5 | 💬 18
    *   **分析**: 升级后网关启动正常但 Dashboard 无法访问的严重问题，影响了 Homebrew 用户的升级体验。
    *   [Issue #58814](https://github.com/openclaw/openclaw/issue/58814)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在权限控制、超时设置和特定模型兼容性：

*   **🔴 严重**:
    *   **LLM 请求超时设置失效 (#46049)**: 配置的超时时间被忽略，导致请求提前终止。尚无对应 Fix PR。
    *   **Dashboard 500 错误 (#58814)**: 升级后无法访问控制面板。
    *   **Kimi 模型工具调用失败 (#58817)**: 使用 Kimi 模型时工具调用缺失参数，失败率高达 85%。

*   **🟠 中等**:
    *   **Exec 审批配置失效 (#58691)**: 升级后安全配置 `ask='off'` 不生效，强制要求审批，严重影响自动化流程。
    *   **工具调用间文本泄露 (#25592)**: Agent 思考/调试过程中的内部文本被发送到 Slack/IM 等外部渠道，造成信息噪音。
    *   **Browser CLI "unknown method" (#57084)**: 浏览器服务就绪但调用失败。已有 [PR #59915](https://github.com/openclaw/openclaw/pull/59915) 尝试修复相关问题。

*   **🟢 已修复/有关联 PR**:
    *   **Plugin SDK 导出缺失 (#59326)**: 已有相关修复 PR。
    *   **Exec 审批在 Windows 上不生效 (#59774)**: 已关闭，可能已在最新版修复。

## 6. 功能请求与路线图信号
*   **A2A Protocol Support (#6842)**: 用户希望支持 Agent-to-Agent 协议，实现多 Agent 互联。这与目前的 Identity RFC 结合，显示出 OpenClaw 向 "Agent Mesh" 发展的趋势。
*   **Async Exec Callback (#18237)**: 请求长时运行任务完成后能异步回调注入结果，而非阻塞 Agent。这对于本地代码编译等场景至关重要。
*   **Filesystem Access Control (#52621)**: 细粒度的文件系统访问控制（allowedPaths），表明用户在将 OpenClaw 用于生产环境时对安全隔离的需求日益增加。

## 7. 用户反馈摘要
*   **痛点 - 配置变更频繁**: Issue #57898 中用户抱怨频繁的 Breaking Changes 导致工具链反复中断，希望能有更稳定的发布周期。
*   **痛点 - 图像识别缺失**: Issue #28744 和 #24662 指出 Webchat 和飞书端无法接收/识别图片，导致多模态能力在特定渠道缺失。
*   **场景 - 多平台桌面需求**: 大量用户在 #75 下留言表示需要在 Linux/Windows 上运行原生客户端，而非依赖 Docker 或 CLI。
*   **满意度 - 功能深度**: 尽管有 Bug，用户对 OpenClaw 的工具集成深度（如 Exec, Memory, Browser）表示认可，并积极提交特定模型（Kimi, Ollama）的适配问题，说明在本地/国产模型集成方面用户粘性较高。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决或回应，建议维护者优先关注：

*   **[#28744] 支持Agent接收并识别图片内容**: 标记为 `[stale]`，但在多模态时代这是核心功能，不应搁置。
*   **[#12590] `memoryFlush` 不可靠**: 内存管理机制存在逻辑缺陷，可能导致上下文处理异常。
*   **[#46049] LLM 超时设置失效**: 影响长耗时任务（如代码生成、深度分析）的核心体验。

---
*分析师: AI Open Source Observer | 数据来源: GitHub OpenClaw Repository*

---

## 横向生态对比

# 2026-04-03 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从"单一对话"向"多模态、跨平台、自主执行"转型的关键爆发期**。各项目竞争焦点已不再局限于模型对接，而是转向**深度工具集成、持久化记忆架构**以及**多端原生体验**。同时，**企业级安全合规**（如 TLS、访问控制）与**对大模型供应商的解耦**（防封号、多云切换）成为生产环境下的核心诉求。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 最新版本 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (更新) | 500 (更新) | **v2026.4.2** | 🟢 **极高** (社区引擎，功能全面，有 Breaking Change) |
| **PicoClaw** | 22 | 68 (36 merged) | v0.2.4-nightly | 🟢 **高** (快速迭代，架构重构中，核心记忆引擎落地) |
| **LobsterAI** | 34 | 50 (20 merged) | - | 🟡 **中高** (Bug 较多，处于修复攻坚期，功能回滚) |
| **CoPaw** | 50 (35 new) | 41 (21 merged) | **v1.0.1-beta.1** | 🟡 **中高** (Beta 发布期，非 GPT 模型兼容性问题爆发) |
| **IronClaw** | 28 | 50 (14 merged) | - | 🟡 **中** (架构重构 v2 前夜，DB 迁移与安全审计) |
| **NanoBot** | 21 | 41 (11 merged) | - | 🟡 **中** (重试/记忆机制重构，性能回归排查中) |
| **NanoClaw** | 7 | 35 (8 merged) | - | 🟠 **中低** (Feature PR 积压严重，受上游封号影响大) |
| **ZeptoClaw** | 0 (关闭 10) | 0 | - | 🔵 **低** (重大重构规划中，代码库清洗阶段) |
| **Moltis** | 3 | 2 | - | 🔵 **低** (关键连接 Bug 修复中，UI 功能开发中) |
| **EasyClaw** | 0 | 0 | **v1.7.8** | ⚪ **平稳** (稳定维护，推进国际化) |
| **TinyClaw** | 0 | 0 | - | ⚪ **静默** |

> **注**: 健康度评估综合考虑了迭代速度、Bug 严重程度及社区反馈密度。

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系与事实标准**，OpenClaw 展现出了明显的领跑优势：

*   **社区规模**: 500+ Issue/PR 的日更量级远超同类（NanoBot/PicoClaw 约为 20-70），具有压倒性的社区贡献基数。
*   **生态广度**: 它是唯一全平台覆盖且插件生态最完善的项目。当其他项目（如 PicoClaw）还在解决 Linux 适配时，OpenClaw 已通过插件实现了 Databricks 等企业级集成。
*   **技术影响力**: 多个项目（如 LobsterAI）直接基于或兼容 OpenClaw 的配置/引擎，其 API 设计（如 `x_search` 迁移）往往成为生态内的风向标。
*   **痛点**: 高频迭代带来的 **Breaking Changes**（如 v2026.4.2 的配置迁移）是其主要劣势，导致用户升级维护成本高昂，给了 PicoClaw 等竞品“更稳定”的切入机会。

## 4. 共同关注的技术方向

1.  **记忆系统架构重构** (PicoClaw, NanoBot, IronClaw)
    *   **诉求**: 简单的上下文窗口已无法满足长程任务。
    *   **动态**: PicoClaw 引入了基于 SQLite+DAG 的 LCM 引擎；NanoBot 探索 "Consolidator + Dream" 两阶段机制；IronClaw 规划统一 VFS 抽象。
    *   **趋势**: 记忆正在从“历史记录”演变为具备检索、压缩、回放的独立子系统。

2.  **多渠道/跨平台客户端** (OpenClaw, NanoClaw, ZeptoClaw)
    *   **诉求**: 摆脱 Web/Docker 依赖，实现原生桌面与移动端覆盖。
    *   **动态**: OpenClaw 补齐了 Linux GTK 客户端；NanoClaw 大力集成微信/WhatsApp/QQ；ZeptoClaw 专注于 Telegram 的健壮性。

3.  **多云/本地模型解耦** (CoPaw, NanoClaw, NanoBot, IronClaw)
    *   **诉求**: 应对 Anthropic 封号风险，以及成本控制。
    *   **动态**: NanoClaw 用户强烈呼吁支持非 Anthropic 运行时；CoPaw 接入 DeepSeek/MiniMax；IronClaw 修复 OpenAI 兼容路径。
    *   **趋势**: "Model Agnostic"（模型无关）正成为生存必需品，对 Ollama/Goose 等本地模型的支持权重上升。

4.  **安全性与权限控制** (OpenClaw, IronClaw, PicoClaw, CoPaw)
    *   **诉求**: 防止 Agent “发疯”或泄露数据。
    *   **动态**: OpenClaw 讨论 Native Identity；IronClaw 暴露 CI 注入风险；PicoClaw 引入凭证加密存储；CoPaw 增强 Approve 交互。

## 5. 差异化定位分析

*   **OpenClaw**: **全能型巨无霸**。架构最复杂，功能最全，适合作为企业级 Agent 平台的底座，但不易掌控。
*   **PicoClaw**: **端侧与自动化专家**。专注于 Android 自动化控制和内存效率，吸引了对“AI 操作手机/硬件”感兴趣的开发者。
*   **LobsterAI**: **办公协作助手**。侧重于 GUI 易用性、定时任务和日常办公场景（如 Pageant 管理），受众偏向非技术白领。
*   **IronClaw**: **基础设施与协议先锋**。深耕 NEAR 生态与底层引擎重构（Thread-Capability-CodeAct），更适合作为科研或高性能 Agent 的内核。
*   **NanoClaw**: **集成狂魔**。主打“All-in-one”通信渠道（微信/Slack/Discord），适合作为 IM 机器人中枢。
*   **ZeptoClaw**: **轻量级/重构派**。目前处于“Crucible”架构清洗期，意在打造极简、健壮的单一功能体。

## 6. 社区热度与成熟度

*   **第一梯队 (活跃迭代)**: **OpenClaw**。处于功能爆发与标准确立阶段，虽有配置动荡，但生态粘性极强。
*   **第二梯队 (攻坚/爬坡)**: **PicoClaw, CoPaw, IronClaw**。
    *   PicoClaw 正在经历架构升级的阵痛与红利。
    *   CoPaw 处于 Beta 质量打磨期，深受多模型适配之苦。
    *   IronClaw 处于 v2 前夜的深度重构期。
*   **第三梯队 (垂直/修复)**: **LobsterAI, NanoBot, NanoClaw**。
    *   主要精力在修复特定场景 Bug 和响应特定的功能请求，架构相对定型。
*   **第四梯队 (调整/平稳)**: **ZeptoClaw, Moltis, EasyClaw**。
    *   ZeptoClaw 正在“憋大招”重构；Moltis 和 EasyClaw 处于按需迭代的平稳期。

## 7. 值得关注的趋势信号

1.  **Anthropic 封号引发的“去中心化”焦虑**:
    *   **信号**: NanoClaw (#80) 的高赞讨论表明，过度依赖 Claude API 已成为开发者的重大风险源。
    *   **建议**: 开发者需尽快在架构层面预留 **OpenAI/Codex/Local LLM** 的热切换接口，避免单点依赖。

2.  **Agent 身份与信任网络**:
    *   **信号**: OpenClaw (#49971) 关于 DID 和 RFC 的讨论，以及 IronClaw 对 ACP 协议的支持。
    *   **建议**: 未来的 Agent 将不仅是工具，更是具备身份的“网络节点”。开发者应关注 **Agent-to-Agent (A2A)** 通信协议的标准化机会。

3.  **桌面端“原生体验”回归**:
    *   **信号**: OpenClaw Linux 客户端的落地和 PicoClaw Launcher 的重构。
    *   **建议**: 用户厌倦了 Docker 和 CLI，**原生桌面应用**（尤其是 GTK/跨平台方案）是提升留存率的关键，且利于调用本地 OS 权限（如文件系统、通知）。

4.  **安全供应链风险凸显**:
    *   **信号**: IronClaw CI 中的 Docker Tag 注入和命令注入风险，以及 CoPaw 的认证绕过修复。
    *   **建议**: 在引入复杂 Agent 工具链时，**容器安全**和**执行沙箱**（如 PicoClaw 的 Security Shield）应被提升至最高优先级，防止 Agent 被“投毒”或误操作导致宿主崩溃。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-04-03 NanoBot 项目动态日报。

---

# 🤖 NanoBot 项目日报 (2026-04-03)

### 1. 今日速览
NanoBot 今日呈现出**极高的社区活跃度与开发迭代速度**。过去24小时内共有 41 个 PR 更新（其中 30 个待合并）和 21 个 Issue 更新，表明项目正处于功能快速扩张与稳定性攻坚并行的阶段。核心关注点集中在 **重试机制的稳健性** 和 **记忆系统的架构重构** 上。虽然无新版本发布，但多个关键修复 PR（如 OpenAI 参数适配、重试放大效应修复）已提交，显示维护者正在为下一个稳定版本积蓄力量。

### 2. 版本发布
*   **无新版本发布**。项目当前主要活跃在 `nightly` 分支及未合并的 PR 队列中，预计上述核心 PR 合并后将迎来新的 Release。

### 3. 项目进展
今日共有 **11 个 PR 被合并/关闭**，重点推进了以下领域：

*   **内核稳定性增强**: PR [#2733](https://github.com/HKUDS/nanobot/pull/2733) 已合并，显著增强了 Agent 运行时在处理长任务、大型工具输出及提供商抖动情况下的稳定性。
*   **Provider 生态扩展**: 合并了百度千帆 Provider 支持 ([#2699](https://github.com/HKUDS/nanobot/pull/2699)) 及 Telegram 单元测试补全 ([#1434](https://github.com/HKUDS/nanobot/pull/1434))。
*   **CLI 体验优化**: 合并了 [#2740](https://github.com/HKUDS/nanobot/pull/2740)，允许在 `channels login` 和 `status` 命令中指定配置文件路径，提升了多实例管理的便捷性。
*   **架构清理**: 关闭了关于 Matrix/Discord 依赖门控不一致的 Issue ([#2695](https://github.com/HKUDS/nanobot/issues/2695))，相关测试依赖问题已得到确认或修复。

### 4. 社区热点
今日讨论最热烈的问题反映了用户对**性能**和**模型兼容性**的焦虑：

*   **[性能回归] v0.1.4.post6 响应极度缓慢** ([#2713](https://github.com/HKUDS/nanobot/issues/2713))
    *   **热度**: 👍 0 | 评论: 3
    *   **分析**: 用户报告升级后响应时间从 1s 飙升至 3min。这引发了关于新版内存管理或底层轮询机制可能存在性能瓶颈的讨论。
*   **[登录失效] GitHub Copilot OAuth 登录报错** ([#2573](https://github.com/HKUDS/nanobot/issues/2573))
    *   **热度**: 👍 9 | 评论: 3
    *   **分析**: 获得了最高点赞数（👍9）。由于 Copilot 是免费/低成本使用 GPT-4 的重要途径，其认证失败严重影响了开发者体验，用户迫切期待修复。
*   **[中文教程] Windows + DeepSeek 配置指南** ([#2714](https://github.com/HKUDS/nanobot/issues/2714))
    *   **热度**: 评论: 4
    *   **分析**: 由社区驱动的中文教程填补了官方文档的空白，显示出 NanoBot 在中文开发者群体中的受关注度正在上升。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在**底层请求处理**和**文件权限**，部分已有对应修复：

*   🔴 **严重 | Retry 放大风险导致上游负载倍增**
    *   Issue: [#2760](https://github.com/HKUDS/nanobot/issues/2760)
    *   现象: 应用层重试 + SDK 内部重试叠加，可能导致单一请求产生 12 次上游调用。
    *   **状态**: ✅ **已有修复 PR** [#2759](https://github.com/HKUDS/nanobot/pull/2759)（建议禁用 SDK 自动重试）。
*   🔴 **严重 | Memory consolidation 致 Agent 停止工作**
    *   Issue: [#2737](https://github.com/HKUDS/nanobot/issues/2737)
    *   现象: 升级后 LLM 未调用 `save_memory`，导致流程中断。
    *   **状态**: 🚧 待确认，可能与新版 Memory 逻辑有关。
*   🟠 **中等 | 工作区文件读取权限错误**
    *   Issue: [#2660](https://github.com/HKUDS/nanobot/issues/2660)
    *   现象: 启用 `restrictToWorkspace` 后，Bot 无法读取通过通道接收的媒体文件（路径在 `~/.nanobot/media` 而非 workspace）。
*   🟠 **中等 | OpenAI Provider 参数错误**
    *   Issue: [#2757](https://github.com/HKUDS/nanobot/issues/2757)
    *   现象: 仍在发送即将废弃的 `max_tokens` 而非 `max_completion_tokens`。
    *   **状态**: ✅ **已有修复 PR** [#2758](https://github.com/HKUDS/nanobot/pull/2758)。

### 6. 功能请求与路线图信号
社区正在积极推动 NanoBot 向**更智能的记忆**和**更丰富的交互**演进：

*   **记忆系统重构**: PR [#2717](https://github.com/HKUDS/nanobot/pull/2717) 提出了 "Consolidator + Dream" 两阶段记忆系统，旨在模仿人类睡眠整理记忆的机制。同时 Issue [#2736](https://github.com/HKUDS/nanobot/issues/2736) 提出了基于 SQLite 的原生持久化方案。这表明现有的文件式/易失性记忆系统将在下个版本迎来大改。
*   **子 Agent 隔离**: Issue [#2746](https://github.com/HKUDS/nanobot/issues/2746) 建议增强子 Agent 的消息流独立性，以支持更复杂的长期任务编排。
*   **Microsoft Teams 支持**: PR [#2600](https://github.com/HKUDS/nanobot/pull/2600) 正在推进中，预示着 NanoBot 即将正式支持企业级 IM 渠道。

### 7. 用户反馈摘要
*   **痛点**: 用户对版本升级带来的**性能回归**（响应慢）和**架构变更**（Prompt/History 不兼容）感到困扰（[#2463](https://github.com/HKUDS/nanobot/issues/2463), [#2713](https://github.com/HKUDS/nanobot/issues/2713)）。
*   **场景**: 大量用户尝试接入 **DeepSeek** 等国产模型及 **GitHub Copilot**，说明成本控制是重要驱动力。
*   **满意度**: 社区对新增功能的响应速度快（如 PR 修复及时），但文档更新滞后，依赖社区撰写教程（[#2714](https://github.com/HKUDS/nanobot/issues/2714)）来填补空白。

### 8. 待处理积压
*   ⚠️ **架构冲突**: Issue [#2463](https://github.com/HKUDS/nanobot/issues/2463) 指出 NanoBot 持久化对话历史的方式与 OpenAI 状态流存在根本性冲突，长期未解决，可能影响多轮对话的准确性。
*   ⚠️ **Matrix 集成**: Issue [#1851](https://github.com/HKUDS/nanobot/issues/1851) 中 Matrix 频道报错刷屏的问题仍偶有复现，需关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-04-03 的动态日报。

# PicoClaw 项目动态日报 (2026-04-03)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，核心开发与社区贡献并驾齐驱。过去24小时内共有 **68 个 PR 更新**（其中 36 个已合并/关闭）和 **22 个 Issue 更新**，代码吞吐量大。项目发布了最新的 **v0.2.4-nightly** 自动构建版本，持续迭代核心功能。重点进展包括引入了短期记忆引擎（LCM）、增强了凭证加密存储机制以及自更新功能的完善。社区反馈集中在 WebUI 连接稳定性、Channel（QQ/Telegram）配置及特定模型路由问题上，整体处于快速迭代修 bug 阶段。

## 2. 版本发布
- **Version**: `nightly` (Nightly Build)
- **Tag**: `v0.2.4-nightly.20260402.415abc8c`
- **说明**: 这是一个自动化构建版本，可能包含不稳定的变更，仅供测试使用。
- **变更日志**: [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)
- **警告**: ⚠️ 生产环境请谨慎使用，建议等待 Stable 版本发布。

## 3. 项目进展
今日合并/关闭了多个关键 PR，显著提升了项目的健壮性和易用性：

*   **短期记忆引擎**: PR [#2285](https://github.com/sipeed/picoclaw/pull/2285) 开启了基于 SQLite 和 DAG 的短期记忆（LCM）实现，旨在解决 Agent 上下文压缩和检索问题，这是迈向长程记忆的重要一步。
*   **凭证安全存储**: PR [#1521](https://github.com/sipeed/picoclaw/pull/1521) 合并，引入 AES-256-GCM 加密和 `SecureStore`，大幅提升了敏感配置的安全性，支持密钥绑定。
*   **自更新机制优化**: PR [#2201](https://github.com/sipeed/picoclaw/pull/2201) 合并，重构了自更新逻辑，增强了提取和选择的鲁棒性，默认支持 Nightly 版本更新。
*   **UI/UX 重构**: PR [#924](https://github.com/sipeed/picoclaw/pull/924) 合并，将 Launcher UI 迁移至 Bulma 布局，并采用了离线 CodeMirror，改善了配置体验。
*   **会话管理**: PR [#1032](https://github.com/sipeed/picoclaw/pull/1032) 合并，新增 `/new` 和 `/clear` 命令，允许用户在不重启服务的情况下重置会话上下文。
*   **依赖更新**: 多个 Dependabot PR 已合并，包括 `zerolog`、`openai-go`、`anthropic-sdk-go` 及前端相关依赖（React Query, i18next 等），保持了依赖库的现代化。

## 4. 社区热点
今日讨论最活跃或影响较大的话题：

*   **WebUI 网关连接失败 ([#2213](https://github.com/sipeed/picoclaw/issues/2213))**: 
    *   **热度**: 👍 1, 评论 7
    *   **分析**: 用户在使用 `picoclaw-launcher` 启动 WebUI 时遇到网关连接问题。这是一个阻塞性问题，直接影响到桌面/可视化用户的使用体验，目前尚在排查中。
*   **ReadFileTool 分页重构提案 ([#1974](https://github.com/sipeed/picoclaw/issues/1974))**: 
    *   **状态**: Closed
    *   **分析**: 讨论了从基于字节分页改为基于行分页的提案。虽然字节分页效率高，但不够直观，该提案被关闭可能意味着暂时维持现状或采用了其他折中方案，涉及 AI 读取文件的核心逻辑。
*   **Android 自动化控制 ([#292](https://github.com/sipeed/picoclaw/issues/292))**: 
    *   **热度**: Priority High
    *   **分析**: 这是一个高优先级的 Roadmap 特性，旨在让 PicoClaw 像Botdrop一样控制 Android 设备。持续的活跃表明这是社区极其期待的功能（AI 操作手机）。

## 5. Bug 与稳定性
今日报告了多个功能性 Bug，部分已有修复或调查进展：

*   **严重 (High)**:
    *   **WebUI 启动失败 ([#2213](https://github.com/sipeed/picoclaw/issues/2213))**: Gateway 进程启动后 WebUI 无法连接。
    *   **QQ 渠道在 Windows 下不可用 ([#2080](https://github.com/sipeed/picoclaw/issues/2080))**: 系统兼容性问题，影响 Windows 用户。
*   **中等**:
    *   **Cron 任务路由错误 ([#2275](https://github.com/sipeed/picoclaw/issues/2275))**: 定时任务触发后，消息被路由到内部 session 而非 Telegram 聊天窗口，导致用户收不到反馈。
    *   **配置读取错误 ([#2286](https://github.com/sipeed/picoclaw/issues/2286))**: 当 `model` 和 `model_name` 不同时，无法读取 `thinking_level` 配置。
    *   **Docker 挂载路径硬编码 ([#2269](https://github.com/sipeed/picoclaw/issues/2269))**: `docker-compose.full.yml` 中硬编码了 `/root/.picoclaw`，导致非 root 环境下运行异常。
    *   **文件写入转义 Bug ([#2283](https://github.com/sipeed/picoclaw/issues/2283))**: AI 写入代码文件时，`\n` 被错误地转义为换行符，导致脚本语法错误。
*   **已修复/已关闭**:
    *   **模型路由日志与实际不符 ([#2268](https://github.com/sipeed/picoclaw/issues/2268))**: Light model 选中日志打出但实际请求主模型（已关闭，可能已修复或无法复现）。
    *   **Prompt Cache Key 错误 ([#1574](https://github.com/sipeed/picoclaw/issues/1574))**: 已关闭。

## 6. 功能请求与路线图信号
*   **Zalo Chat 集成 ([#2261](https://github.com/sipeed/picoclaw/issues/2261))**: 用户请求增加对 Zalo（越南常用聊天软件）的支持，表明 PicoClaw 正在向更多元的即时通讯平台扩展。
*   **Flex Service Tier 支持 ([#2271](https://github.com/sipeed/picoclaw/issues/2271))**: 建议为非时间敏感的后台任务（如 Cron）调用 OpenAI 的 Flex API 以降低成本。这是一个很好的成本优化方向，可能在未来版本中纳入配置逻辑。
*   **安全防护盾 ([PR #2138](https://github.com/sipeed/picoclaw/pull/2138))**: 社区贡献者提交了 Security Shield 功能，虽然目前仍处于 Open 状态，但显示出社区对 Agent 安全执行环境的强烈需求。

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置复杂性**: 多个 Issue (#2280, #2286) 反映配置模型（尤其是不同 Provider 混用、Thinking Level 设置）时逻辑较为混乱，容易遇到字段不匹配问题。
    *   **Docker 体验**: 硬编码路径问题 (#2269) 暴露了 Docker 部署时的细节不够人性化。
    *   **转义问题**: AI 在写文件时的转义字符处理 (#2283) 是一个典型的“LLM 与操作系统交互”的边缘 Case，影响代码生成能力。
*   **满意点**:
    *   社区对 **Android 自动化** 的期待值极高，认为这是 PicoClaw 区别于普通 Chatbot 的杀手级功能。
    *   对 **Agent 记忆能力** 的增强（LCM 引擎）持积极观望态度。

## 8. 待处理积压
*   **[#2213 WebUI 无法连接](https://github.com/sipeed/picoclaw/issues/2213)**: 作为目前最活跃且阻碍使用的 Bug，建议维护者优先排查 Gateway 启动参数或网络监听配置。
*   **[#2138 Security Shield](https://github.com/sipeed/picoclaw/pull/2138)**: 这是一个大型功能 PR，需要维护者进行详细的代码审查和安全评估，目前处于 Open 状态，建议排期 Review。

---
*数据来源: GitHub PicoClaw Repository (2026-04-03)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 **NanoClaw** 项目 2026-04-03 动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-04-03)

**分析师备注**：今日 NanoClaw 项目呈现出极高的社区活跃度，主要体现在新功能 PR 的爆发式增长（特别是多渠道集成和模型支持）以及对底层架构的深度讨论。虽然无新版本发布，但代码库正处于快速迭代期。

## 1. 今日速览
过去 24 小时内，NanoClaw 仓库极其活跃，共产生了 **35 个 PR 更新**（其中 27 个待合并）和 **7 条 Issue 更新**。社区开发重心明显向**扩展性**倾斜，不仅新增了微信、Goose 本地模型等多个重要集成，还针对 Anthropic 账号风控风险提出了对 OpenAI/Codex 等替代运行时的支持需求。项目目前处于功能快速累积阶段，建议维护者关注 PR 积压情况。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **8 个 PR 被合并或关闭**，主要集中在增强 AI 模型支持、工作流优化和社区规范建设：

*   **本地模型与工具支持**：PR [#1600](https://github.com/qwibitai/nanoclaw/pull/1600) 已合并，增加了对本地模型 **Goose** 的 MCP 工具和图像支持，这标志着 NanoClaw 正式向非 Claude 模型生态兼容迈出实质性一步。
*   **多代理协作**：PR [#1602](https://github.com/qwibitai/nanoclaw/pull/1602) 合并，引入了 "Agent Team Profiles" 功能，允许将单一助手转换为包含 11 种专家角色的 CTO 领导团队模式，显著增强了复杂任务的处理能力。
*   **基础设施优化**：PR [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) 关闭/合并，将内存模块升级为 `memory-lancedb-pro`，引入了混合检索（BM25+向量）和重排序功能，将提升 AI 的长期记忆准确度。
*   **社区规范**：添加了贡献者公约行为准则 (PR [#1595](https://github.com/qwibitai/nanoclaw/pull/1595))。

## 4. 社区热点
今日讨论最热烈的话题集中在**平台风控应对**和**底层安全性**：

1.  **关于支持非 Anthropic 运行时的讨论** (🔥 热度最高)
    *   **Issue**: [#80 Support runtimes and providers other than Claude/Anthropic](https://github.com/qwibitai/nanoclaw/issues/80)
    *   **分析**：该 Issue 获得了 **56 个点赞**和 **29 条评论**。起因是 Anthropic 开始封禁使用类似 OpenClaw 客户端的用户。社区强烈呼吁 NanoClaw 尽快解耦对 Claude/Anthropic 的硬依赖，转而支持 OpenCode、Gemini 或 Codex 等后端。这反映了用户对服务稳定性和供应链锁定风险的深度担忧。

2.  **关于 AI 联合署名与知识产权的法律风险**
    *   **Issue**: [#1591 Audit and resolve AI co-authorship attribution](https://github.com/qwibitai/nanoclaw/issues/1591)
    *   **分析**：虽然已被关闭，但该 Issue 提出了一个尖锐的法律问题。Claude Code 默认在 Git 提交中添加 `Co-Authored-By: Claude`，这可能在未获用户同意的情况下引发知识产权纠纷。这是一个极具前瞻性的合规性警告。

## 5. Bug 与稳定性
今日报告了若干影响系统稳定性和兼容性的问题：

*   **[高] Apple Silicon 设备服务崩溃**：Issue [#1604](https://github.com/qwibitai/nanoclaw/pull/1604) 指出，由于 PATH 环境变量配置缺失 `/opt/homebrew/bin`，导致基于 Apple Silicon 的 Macs 在启动服务时崩溃。
    *   *状态*：已有 Fix PR 等待合并。
*   **[中] 任务调度阻塞主线程**：Issue [#1603](https://github.com/qwibitai/nanoclaw/issues/1603) 报告当使用 `return_to_caller` 时，调用者群组在整个任务期间会完全失去响应。
    *   *状态*：Open，暂无 Fix。
*   **[中] CLI 登录状态异常**：Issue [#1599](https://github.com/qwibitai/nanoclaw/issues/1599) 显示在使用 `onecli` 正常的情况下，使用内置 `claw cli` 却被强制要求重新登录。
    *   *状态*：Open，暂无 Fix。

## 6. 功能请求与路线图信号
社区今日提交了大量新功能 PR，显示出将 NanoClaw 打造为**全能型 AI 中枢**的趋势：

*   **多渠道通信集成**：
    *   **微信集成**：PR [#1594](https://github.com/qwibitai/nanoclaw/pull/1594) 试图通过腾讯 iLink Bot API 接入微信。
    *   **Twilio WhatsApp**：PR [#1294](https://github.com/qwibitai/nanoclaw/pull/1294) 增加了官方 WhatsApp Business API 支持。
    *   **QQ 频道**：PR [#966](https://github.com/qwibitai/nanoclaw/pull/966) 继续等待审核。
*   **企业级特性**：
    *   **Google Vertex AI 支持**：PR [#478](https://github.com/qwibitai/nanoclaw/pull/478) 允许通过 GCP 凭证调用 Claude，这对企业用户至关重要。
*   **容器化安全**：Issue [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) 强烈建议将 NanoClaw 本身容器化，以避免宿主机直接运行 curl 脚本带来的供应链攻击风险。

## 7. 用户反馈摘要
*   **安全焦虑**：用户对直接在 Host OS 运行脚本表示“非常恶心”和“极度脆弱”，迫切需要 Docker 化部署方案。
*   **风控恐慌**：Anthropic 的封号潮使得“支持多模型后端”从锦上添花变成了雪中送炭，用户急需 Plan B。
*   **开发体验**：用户对于不同客户端（onecli vs claw cli）之间的认证状态不互通感到困惑。

## 8. 待处理积压
*   **大量 Feature PR 待审核**：目前有 **27 个 PR 处于 Open 状态**，其中包含 Twilio、Google Vertex AI、QQ 频道等关键功能。建议维护团队优先处理 #478 (Vertex AI) 和 #1604 (MacOS 修复)，以缓解企业用户和 Mac 用户的痛点。
*   **长期讨论 Issue**：Issue #80 (支持多运行时) 持续活跃，需维护者给出明确的 Roadmap 回应。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 - 2026年04月03日**

---

### 1. 今日速览

IronClaw 项目今日呈现极高的活跃度，正处于架构升级与生态扩展的关键时期。过去24小时内，社区提交了 **50个 PR 更新**（其中36个待合并）和 **28个 Issue 更新**，显示出核心团队与贡献者正在全速推进 v2 版本。虽然没有发布新版本，但主要精力集中在统一执行引擎重构、多模型兼容性增强（如 Bedrock 和 Aliyun）以及部署流程的标准化上。同时，自动化 CI 系统检测到了一系列关于 Docker 构建的严重安全问题，提示项目在快速迭代中需警惕基础设施风险。

### 2. 版本发布

*   **新版本发布**: 本日无新版本发布。

### 3. 项目进展

今日共有 **14个 PR 被合并或关闭**，主要聚焦在数据库迁移修复、部署优化和集成测试上：

*   **数据库迁移对齐**：核心贡献者 `ilblackdragon` 连续合并了 `fix(db): align V15 migration` 和 `fix(db): swap V16/V17` 等多个修复 PR ([#1923](https://github.com/nearai/ironclaw/pull/1923), [#1928](https://github.com/nearai/ironclaw/pull/1928), [#1931](https://github.com/nearai/ironclaw/pull/1931))，成功解决了生产环境与开发环境数据库迁移版本号不一致的问题，为后续新功能（如用户身份系统）的上线扫清了障碍。
*   **Docker 构建与运行时修复**：社区贡献者 `Evrard-Nil` 的 PR `fix(docker): switch to glibc` ([#1930](https://github.com/nearai/ironclaw/pull/1930)) 被合并，修复了 Alpine/musl 环境下 libSQL 导致的段错误，显著提升了容器的稳定性。
*   **文档与集成优化**：PR `add smart remittance` ([#1892](https://github.com/nearai/ironclaw/pull/1892)) 合并，优化了 Abound 集成示例的打包方式，使其更符合标准技能的发布流程。

**待合并重点 PR**（影响较大的未合并项）：
*   **v2 架构引擎**：PR `feat(engine): Unified Thread-Capability-CodeAct` ([#1557](https://github.com/nearai/ironclaw/pull/1557)) 仍在更新中，这是项目迈向下一代的基石。
*   **单元测试脱网**：PR `fix: make 49 unit tests pass without network` ([#1895](https://github.com/nearai/ironclaw/pull/1895)) 试图解决长期以来的测试依赖外部网络问题，将极大提升 CI 的稳定性。

### 4. 社区热点

今日社区与开发讨论集中在以下几个高活跃度 Issue/PR：

*   **统一工作区 VFS 抽象** ([Issue #1894](https://github.com/nearai/ironclaw/issues/1894))：核心成员 `ilblackdragon` 提出的一项重大架构改进，计划通过挂载点抽象统一本地文件系统、数据库和远程存储，解决当前工具在三种部署模式下行为不一致的问题。这可能预示着 IronClaw 将具备更强的云端与本地混合管理能力。
*   **ACP (Agent Client Protocol) 支持** ([Issue #1506](https://github.com/nearai/ironclaw/issues/1506))：该功能允许 IronClaw 将任务委托给任何兼容 ACP 的编码智能体，已关闭并进入实现阶段，标志着项目正向"智能体协调者"的角色演进。

### 5. Bug 与稳定性

今日暴露了较多严重的稳定性与安全问题，主要集中在 CI/CD 和特定配置下：

*   **严重 (CRITICAL) - CI/CD 安全漏洞**：自动化审查机器人 `ironclaw-ci[bot]` 在 PR #1896 的审查中发现了一系列严重问题 ([Issue #1901](https://github.com/nearai/ironclaw/issues/1901), [#1902](https://github.com/nearai/ironclaw/issues/1902))。
    *   **命令注入风险**：从 `Cargo.toml` 提取版本号并在 shell 中使用时未经过滤。
    *   **Docker Tag 注入**：用户输入 `inputs.tag` 直接拼接到镜像标签中。
    *   *状态*：已识别，需要立即修复。
*   **高 (HIGH) - 运行时与环境问题**：
    *   **LibSQL 段错误**：在 Alpine 环境下重启容器时崩溃，已通过切换至 glibc 修复 ([#1930](https://github.com/nearai/ironclaw/pull/1930))。
    *   **用户目录缺失**：Dockerfile 中 `adduser -D` 配置错误可能导致运行时故障 ([Issue #1899](https://github.com/nearai/ironclaw/issues/1899))。
*   **中等 (MEDIUM) - 模型配置兼容性**：
    *   **OpenAI 兼容接口路径问题**：迁移到 rig-core 后，`LLM_BASE_URL` 必须手动添加 `/v1` 后缀，否则 404 报错 ([Issue #1934](https://github.com/nearai/ironclaw/issues/1934))。
    *   **私有网络限制**：非 localhost 的 HTTP 端点被强制拦截，影响本地自部署模型的使用 ([Issue #1754](https://github.com/nearai/ironclaw/issues/1754))。

### 6. 功能请求与路线图信号

*   **Prompt Caching (Bedrock)**：`rajulbhatnagar` 同时提交了 Issue ([#1926](https://github.com/nearai/ironclaw/issues/1926)) 和 PR ([#1935](https://github.com/nearai/ironclaw/pull/1935))，要求为 AWS Bedrock 添加 Prompt 缓存支持，旨在降低成本和延迟。该 PR 目前处于待合并状态，预计很快会上线。
*   **对话删除功能**：用户强烈请求在 Web UI 中增加删除对话/线程的功能 ([Issue #1907](https://github.com/nearai/ironclaw/issues/1907))。这是基础交互体验的重要缺失，预计会被纳入近期的前端迭代计划。
*   **社交登录集成**：Apple Sign In 和 NEAR 钱包认证的 Issue ([#1807](https://github.com/nearai/ironclaw/issues/1807)) 已关闭，表明后端 Auth Epic 已完成规划，进入实现阶段。

### 7. 用户反馈摘要

从今日的 Issue 反馈来看，用户的痛点主要集中在**部署复杂度**和**配置严格性**上：

1.  **配置过于严格**：有用户反馈在私有网络部署模型时，系统强制要求 HTTPS 或仅允许 localhost，导致无法正常连接内部推理服务 ([Issue #1754](https://github.com/nearai/ironclaw/issues/1754))。
2.  **接口细微变动导致服务不可用**：关于 `/v1` 后缀的问题 ([Issue #1934](https://github.com/nearai/ironclaw/issues/1934)) 反映了底层依赖库迁移带来的隐蔽破坏性变更，增加了用户的调试成本。
3.  **UI 基础功能缺失**：无法删除历史对话是用户体验的一个明显短板 ([Issue #1907](https://github.com/nearai/ironclaw/issues/1907))。

### 8. 待处理积压

*   **Tool Schema Discovery 优化系列**：标记为 `bug_bash` 和 `on hold` 的系列 Issues ([#1338](https://github.com/nearai/ironclaw/issues/1338), [#1337](https://github.com/nearai/ironclaw/issues/1337)) 旨在改善模型对工具 Schema 的理解，虽然风险标记为 Medium，但涉及核心工具调用能力，建议团队尽早排期。
*   **CI 安全审计**：针对 Docker 构建流程的 5 个 CRITICAL/HIGH 级别安全问题 ([#1901](https://github.com/nearai/ironclaw/issues/1901) - #1905) 目前状态为 Open，鉴于其涉及供应链安全，建议维护者优先处理 PR #1896 的修正提交。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-03)

## 1. 今日速览
LobsterAI 今日保持**极高活跃度**，社区反馈与开发迭代均进入白热化阶段。过去24小时内共有 **34 条 Issue 更新**（绝大多数为新报 Bug）和 **50 条 PR 更新**，显示项目正处于功能密集开发与快速修bug的并行期。虽然**无新版本发布**，但核心开发者在合并大量修复的同时，也开启了不少新功能 PR（如模型独立绑定、搜索增强），预示着下个版本将包含重大改进。整体来看，项目**健康度良好**，但对稳定性的测试需求上升。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **20 个 PR 被合并/关闭**，主要集中在稳定性修复、用户体验优化和架构重构：
- **关键架构调整**：PR #1380 **Revert 了** #1374（会话独立绑定 AI 模型）。虽然该功能备受期待，但因 OpenClaw session 快照机制导致全局模型切换失效，被暂时回滚以重新设计，体现了团队对质量的严格把控。
- **核心修复**：
    - PR #1368 修复了 Qwen 模型在特定模式下因自动注入工具导致的 HTTP 400 错误。
    - PR #1363 优化了 OpenClaw 配置写入机制，移除了不必要的硬重启，提升了响应速度。
    - PR #1372 修复了会话中多文件上传仅保留最后一个的严重 Bug。
    - PR #1365 恢复了 IM 会话输入框的正确样式。
- **体验优化**：PR #1370 将 GitHub Copilot 默认模型更新为免费层级，降低用户使用门槛。

## 4. 社区热点
今日社区关注点集中在**特定模型的兼容性**与**自动化任务的稳定性**：
- **[#1354 让龙虾帮忙启动pageant后电脑蓝屏](https://github.com/netease-youdao/LobsterAI/issues/1354)**：用户报告在使用 "启动 pageant" 功能时偶现系统蓝屏（BSOD），这是最严重的反馈，涉及系统底层稳定性。
- **[#1295 套餐模型 Cmd+V 粘贴图片后 AI 无法识别](https://github.com/netease-youdao/LobsterAI/issues/1295)**：涉及特定模型（Doubao/Qwen 等）的多模态能力失效，影响核心对话体验，已迅速修复并关闭。
- **[#1299 bug: LLM judge cache eviction uses Map insertion order instead of true LRU](https://github.com/netease-youdao/LobsterAI/issues/1299)**：开发者指出了底层缓存机制实现上的算法缺陷，可能影响 AI 决策的准确性。

## 5. Bug 与稳定性
今日报告了大量功能性 Bug，严重程度分布如下：

### 🔴 严重
1.  **系统崩溃**：[#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) - 启动 pageant 导致 Windows 蓝屏 (偶现)。
2.  **自动化任务数据残留**：[#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) - 已删除的任务在重启后“复活”且内容为空，影响数据一致性。
3.  **功能失效**：[#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) - “帮我开启 pageant” 幻觉问题，回答已启动但实际未运行。
4.  **模型幻觉与指令遵循**：[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) - 上传长图解析导致页面崩溃，且后续新任务受污染一直报错。

### 🟠 中等
1.  **多模态缺陷**：[#1295](https://github.com/netease-youdao/LobsterAI/issues/1295) - 套餐模型粘贴图片无法识别 (已通过 #1368 等修复关闭)。
2.  **UI/交互阻断**：
    - [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) - 任务运行中无法上传附件。
    - [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358) - 定时任务点击启动无交互反馈。
    - [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) - 输入极短内容误报“超出模型限制”。
    - [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) - 模型提供商配置面板关闭后无法编辑其他配置。
3.  **MCP 扩展问题**：[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) - 自定义 HTTP MCP 无法被 OpenClaw 引擎调用 (仅 SSE 可用)。

## 6. 功能请求与路线图信号
用户对 **Cowork (协作/任务)** 模块的完善提出了大量细致的需求，集中在“历史管理”和“输入效率”：
- **历史与导出**：请求支持 **Markdown 导出** ([#1345](https://github.com/netease-youdao/LobsterAI/issues/1345)) 和 **会话列表按时间分组** ([#1337](https://github.com/netease-youdao/LobsterAI/issues/1337))。
- **搜索增强**：强烈建议支持 **对话内容全文搜索** ([#1343](https://github.com/netease-youdao/LobsterAI/issues/1343))，目前仅支持标题搜索。值得注意的是，PR [#1369](https://github.com/netease-youdao/LobsterAI/pull/1369) 已经开始着手解决此问题。
- **输入体验**：请求支持 **方向键回溯历史指令** ([#1341](https://github.com/netease-youdao/LobsterAI/issues/1341)) 和 **侧边栏宽度拖拽调整** ([#1314](https://github.com/netease-youdao/LobsterAI/issues/1314))。
- **定时任务**：请求增加 **通知渠道选项** ([#1329](https://github.com/netease-youdao/LobsterAI/issues/1329)) 和 **名称重复校验** ([#1348](https://github.com/netease-youdao/LobsterAI/issues/1348))。

## 7. 用户反馈摘要
- **痛点**：用户对 **定时任务** 模块的不完善感知强烈（无通知选项、交互无反馈、历史记录错乱）。Pageant 相关的系统级操作（启动/关闭）引发的不稳定性严重影响了“AI 操作电脑”的可信度。
- **场景**：大量用户使用 LobsterAI 进行 **日常办公自动化**（发消息、传文件、执行 SSH 相关操作），以及利用 **多模型切换** 处理图文混合任务。
- **评价**：社区反馈虽然 Bug 较多，但多为具体场景下的功能缺陷，说明用户正在深度使用并尝试突破软件边界。开发者的响应速度（如 PR #1372 修复文件上传）得到了隐性认可。

## 8. 待处理积压
- ** [#1354 蓝屏问题](https://github.com/netease-youdao/LobsterAI/issues/1354)**：涉及操作系统底层稳定性，需高优先级排查日志。
- ** [#1293 MCP 兼容性](https://github.com/netease-youdao/LobsterAI/issues/1293)**：限制了 Agent 的扩展能力，需确认 OpenClaw 引擎对 HTTP MCP 的支持计划。
- ** [#1380 Revert 后的模型绑定功能](https://github.com/netease-youdao/LobsterAI/pull/1380)**：该功能的重新设计方案是下阶段架构重点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是 **Moltis (github.com/moltis-org/moltis)** 项目 2026-04-03 的动态日报。

# Moltis 项目日报 (2026-04-03)

## 1. 今日速览
过去 24 小时内，Moltis 项目保持中度活跃，社区关注点集中在 **连接性与兼容性** 上。Issue 板块出现了 2 个关于核心通讯功能（GraphQL 会话、Slack TLS）的 Bug 报告，同时 1 个前端渲染问题已被修复关闭。PR 方面，虽然合并数较少，但针对 GraphQL 会话管理的修复补丁（#544）响应迅速，显示出维护者对数据一致性的重视。目前项目正在并行推进交互式浏览器 UI 与模型列表优化等大型功能，整体处于功能迭代与缺陷修复并行的阶段。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **1 个 PR 被关闭/拒绝**，**2 个 PR 处于活跃待定状态**。

*   **🚫 关闭: feat(providers): improve model list UX (#540)**
    *   **链接:** [moltis-org/moltis PR #540](https://github.com/moltis-org/moltis/pull/540)
    *   **进展:** 该 PR 旨在优化模型列表的用户体验（包括折叠、排序和内联错误显示），试图解决 OpenAI 等提供商模型过多导致的界面杂乱问题。
    *   **分析:** 该 PR 已被关闭（状态: CLOSED），虽然代码改动较大，但可能因方向调整或实现细节未达标而暂缓/拒绝。这意味着模型列表的 UI 优化工作暂时告一段落或需要重新规划。

## 4. 社区热点
今日讨论焦点主要围绕新报告的稳定性问题，暂无高赞功能讨论。

*   **🔴 严重: Slack Client 缺少 TLS 支持 (#543)**
    *   **链接:** [moltis-org/moltis Issue #543](https://github.com/moltis-org/moltis/issues/543)
    *   **分析:** 用户 `affanshahid` 报告 Slack 客户端在构建时未包含 TLS 支持，这将直接导致安全连接受阻。作为一款依赖第三方 API 的智能体，网络层的兼容性至关重要，此问题亟需维护者确认构建配置。
*   **🟡 关注: GraphQL sessionKey 被忽略 (#542)**
    *   **链接:** [moltis-org/moltis Issue #542](https://github.com/moltis-org/moltis/issues/542)
    *   **分析:** 用户 `letsrock85` 指出在 GraphQL 流程中 `chat.send` 和 `history` 忽略了公开的 `sessionKey`。这会导致会话上下文混乱，影响多会话并发的准确性。该 Issue 已迅速获得对应的 Fix PR (#544)。

## 5. Bug 与稳定性
今日共处理/新增 **3 个 Bug Issue**。

*   **🟥 严重: [Bug]: Slack Client Built Without TLS support (#543)**
    *   **状态:** Open
    *   **描述:** Slack 客户端构建缺失 TLS，影响连接安全性。
    *   **Fix PR:** 暂无。
*   **🟧 中等: [Bug]: GraphQL sessionKey is ignored for chat.send/history (#542)**
    *   **状态:** Open
    *   **描述:** GraphQL 接口未能正确识别 sessionKey，导致消息发送和历史记录获取可能针对错误的会话。
    *   **Fix PR:** [PR #544](https://github.com/moltis-org/moltis/pull/544) (已提交，待合并)。
*   **🟩 已修复: bug(web): channel connect modals don't open (#536)**
    *   **状态:** Closed
    *   **描述:** 点击设置中的连接按钮无法弹出模态框。
    *   **分析:** 问题源于 Preact signal 在嵌套渲染中的响应式失效。该问题已修复并关闭，前端交互稳定性得到恢复。

## 6. 功能请求与路线图信号
*   **浏览器交互能力持续增强 (PR #531):**
    *   **链接:** [moltis-org/moltis PR #531](https://github.com/moltis-org/moltis/pull/531)
    *   **信号:** `penso` 提交的长篇 PR 正在为 Moltis 增加完整的浏览器查看和交互 UI（基于 CDP screencast）。这预示着 Moltis 正从一个纯文本/语音 AI 助手向具备**视觉交互能力的智能体**演进，支持 Cookie 隔离和动作日志回放，极大地扩展了 Agent 的自动化场景。

## 7. 用户反馈摘要
*   **痛点：模型列表过长** (来源: PR #540 描述)
    *   用户反馈在设置和引导流程中，直接展示所有模型（如 OpenAI 的 111 个模型）过于混乱。用户更倾向于只看前 3 个，并通过“展示更多”来查看其余。
*   **痛点：连接配置隐形错误** (来源: Issue #536)
    *   用户在尝试连接 Channel (Telegram/Discord 等) 时，点击按钮无反应（不弹窗），这造成了配置功能不可用的错觉，影响了多平台接入的体验。

## 8. 待处理积压
*   **PR #531 (feat: interactive browser UI):** 此大型 PR 自 3 月 31 日创建至今仍未合并，涉及复杂的 UI 和 CDP 交互逻辑，建议维护者尽快进行 Code Review 以防分支冲突。
*   **PR #544 (fix: GraphQL sessionKey):** 针对今日新发 Issue #542 的修复，需尽快 Merge 以恢复 GraphQL 用户的会话管理功能。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-03)

## 1. 今日速览
CoPaw 项目今日保持**极高的社区活跃度**，随着 **v1.0.1-beta.1** 的发布，项目进入快速迭代期。过去24小时内共有 **50 条 Issue 更新**（35 新增）和 **41 条 PR 更新**，显示社区贡献与反馈均十分热烈。然而，大量新增 Issue 集中在模型兼容性（MiniMax, Gemini）、本地部署 GPU 调用失败以及工具调用参数缺失等核心功能上，表明 v1.0.x 版本在稳定性与多模型适配上仍面临挑战。

## 2. 版本发布
### [v1.0.1-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.1-beta.1)
本次更新主要为 bug 修复与控制台体验优化，为正式版 v1.0.1 做准备。
- **主要更新**:
    - **控制台修复**: 修复了工作区文件时间戳显示为 "NaNd ago" 的问题 ([PR #2793](https://github.com/agentscope-ai/CoPaw/pull/2793))。
    - **版本号更新**: 调整为 1.0.1b1。
- **注意事项**: 这是一个 Beta 版本，主要验证时间戳修复的稳定性，建议开发者和测试用户升级，生产环境可等待正式版。

## 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，主要聚焦在 **Bug 修复** 与 **新功能扩展**，显著提升了系统的健壮性。

- **功能增强**:
    - **解析器增强** ([PR #2832](https://github.com/agentscope-ai/CoPaw/pull/2832)): 增加了对工具调用解析的容错处理，修复了因模型输出格式微小错误导致的 `Failed to parse input` 问题。
    - **配置现代化** ([PR #2849](https://github.com/agentscope-ai/CoPaw/pull/2849)): 正在进行中，计划使用 Pydantic Settings 重构配置系统，未来将极大改善环境变量管理。
    - **飞书流式输出** ([PR #2862](https://github.com/agentscope-ai/CoPaw/pull/2862)): 新增飞书渠道的打字机流式卡片效果。

- **关键修复**:
    - **Shell 工具超时** ([PR #2834](https://github.com/agentscope-ai/CoPaw/pull/2834)): 优化了 Shell 工具的超时处理与命令参数命名。
    - **安全修复** ([PR #2840](https://github.com/agentscope-ai/CoPaw/pull/2840)): 社区贡献者移除了本地 API 认证绕过漏洞，防止反向代理场景下的安全风险。

## 4. 社区热点
今日讨论最激烈的问题集中在**多模型兼容性**与**任务执行稳定性**。

1.  **[Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291) [OPEN] 🐾 Help Wanted: Open Tasks**
    - **热度**: 41 评论
    - **分析**: 官方发布的任务认领列表持续吸引贡献者关注，社区正在积极认领 P0/P1 优先级任务，显示出良好的开源协作氛围。

2.  **[Issue #2348](https://github.com/agentscope-ai/CoPaw/issues/2348) [OPEN] Worker processes show 100% CPU usage**
    - **热度**: 9 评论
    - **分析**: 空载下 CPU 占用 100% 的严重性能问题。用户反馈该问题在 v0.2.0 及后续版本中持续存在，目前尚无明确修复方案，是影响本地部署体验的关键阻碍。

3.  **[Issue #2811](https://github.com/agentscope-ai/CoPaw/issues/2811) [OPEN] 借鉴 Claude code**
    - **热度**: 4 评论 + 1 点赞
    - **分析**: 用户希望官方能借鉴 Claude Code 的实现逻辑来优化 CoPaw。这反映了用户对 Agent 自主编程能力和推理深度的更高期待。

## 5. Bug 与稳定性
今日 Bug 报告激增，主要集中在**本地模型**与**工具调用**层面，部分已有修复方案。

| 严重程度 | Issue/PR | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **Critical** | [Issue #2828](https://github.com/agentscope-ai/CoPaw/issues/2828) | **MiniMax 模型不可用**：无论是内置还是自定义供应商均配置失败，导致服务不可用。 | **Open** (待修复) |
| **Critical** | [Issue #2725](https://github.com/agentscope-ai/CoPaw/issues/2725) | **本地 GPU 失效**：Llama.cpp 引擎无法调用 GPU，仅使用 CPU，导致推理极慢。 | **Open** |
| **High** | [Issue #2826](https://github.com/agentscope-ai/CoPaw/issues/2826) | **Skill 文件误删**：修改 Skill 内容保存后，同目录下其他文件被清空。 | **Closed** (已定位) |
| **High** | [Issue #2816](https://github.com/agentscope-ai/CoPaw/issues/2816) | **工具调用参数缺失**：AI 急于执行任务但未填入参数，导致循环报错。 | **Open** (关联 PR #2832) |
| **Medium** | [Issue #2033](https://github.com/agentscope-ai/CoPaw/issues/2033) | **Gemini API 兼容性**：`Corrupted thought signature` 及验证错误。 | **Open** |

## 6. 功能请求与路线图信号
- **模型支持扩展**: 用户强烈请求支持 **CoPaw-Flash-27B/35B** ([Issue #2806](https://github.com/agentscope-ai/CoPaw/issues/2806))，同时也出现了对 **GPT-5.x** 系列参数适配的需求 ([PR #2819](https://github.com/agentscope-ai/CoPaw/pull/2819))。
- **架构优化**: 有 PR 提出了 **Closed Learning Loop (闭环学习)** 设计 ([PR #2860](https://github.com/agentscope-ai/CoPaw/pull/2860))，允许 Agent 在后台自我分析并生成 Skill，这可能成为下一阶段 Agent 自主进化的核心特性。
- **用户体验**: 桌面端用户请求增加**自动更新功能**及修复 Windows 任务栏图标问题 ([Issue #2846](https://github.com/agentscope-ai/CoPaw/issues/2846))。

## 7. 用户反馈摘要
- **痛点**:
    - **配置困难**: 多位用户反馈 Ollama 和本地模型配置极其复杂，文档缺失严重 ([Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298))。
    - **上下文溢出**: 定时任务执行次数过多后，上下文长度失控导致报错 ([Issue #2789](https://github.com/agentscope-ai/CoPaw/issues/2789))。
    - **权限确认交互**: CoPaw 在申请 Approve 时，关键操作描述在折叠的 Thinking 中，不易识别，用户体验不友好 ([Issue #2845](https://github.com/agentscope-ai/CoPaw/issues/2845))。
- **满意点**: 社区对官方快速响应 PR 以及开放 Task List 的做法表示认可。

## 8. 待处理积压
- **[Issue #2033](https://github.com/agentscope-ai/CoPaw/issues/2033) (Gemini API 报错)**: 自 3 月 21 日创建以来，Gemini 模型的调用问题仍未彻底解决，影响部分用户使用。
- **[Issue #2348](https://github.com/agentscope-ai/CoPaw/issues/2348) (CPU 100%)**: 空载高 CPU 占用问题持续超过一周，严重影响服务器部署成本，建议维护者优先排查。

---
**分析师点评**: CoPaw 目前处于功能爆发期，社区贡献意愿强（如安全修复、新模型支持）。但 v1.0.x 版本暴露出的**非 GPT 系模型兼容性**（尤其是国内模型和本地模型）是当前最大短板。建议团队在冲刺新功能前，优先解决 **Issue #2828 (MiniMax)** 和 **Issue #2348 (CPU占用)** 两个严重阻碍，以稳固用户基础。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是 **ZeptoClaw** 项目 2026-04-03 的动态日报。

### 1. 今日速览
ZeptoClaw 项目今日处于**高强度的内部重构与规划阶段**。过去24小时内，项目虽然没有任何代码合并或版本发布，但关闭了 **10 条**与 "Crucible" 迁移相关的规划类 Issue，显示出项目正在为重大架构调整做最后的文档与流程梳理。目前仅有一个关于 Telegram 消息故障修复的 PR (#462) 处于待合并状态，整体代码库表面平静，但底层正在积蓄重大变更的能量。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日虽然无 PR 合并，但通过关闭大量 RFC（意见征求）和文档 Issue，项目明确了以下进展：
*   **Crucible 迁移计划落地**：关闭了 #477, #478, #480 等多个 RFC Issue，确定了从 ZeptoClaw 到 Crucible 的 "fork-and-trim"（分叉与精简）迁移策略。这标志着项目已完成了从 "提议" 到 "执行" 的阶段转换。
*   **代码库清洗准备**：通过关闭 #479 (Cleanup) 和 #483 (Audit)，维护者已确定了清理未使用代码、遗留配置和过时文档的范围，为引入更精简的 Crucible 架构扫清障碍。
*   **二进制插件协议修复**：Issue #485 的关闭表明团队已确认将 JSON-RPC 调用方式从 `execute` 统一修正为 `tools/call`，这可能是 Crucible 架构的一个前置修复。

### 4. 社区热点
今日没有活跃的用户讨论，所有动态均来自核心维护者 **stuartbowness** 的规划性工作。
*   **最密集的议题组**：围绕 **Crucible Migration** 的系列 Issue（#477 - #485）。
    *   **诉求分析**：这一系列动作表明维护者正在解决技术债务，可能试图剥离 ZeptoClaw 中不属于核心 AI 助手功能的冗余代码，打造一个名为 "Crucible" 的精简版或衍生版。
    *   链接：[Issue #477](https://github.com/qhkm/zeptoclaw/issues/477), [Issue #478](https://github.com/qhkm/zeptoclaw/issues/478)

### 5. Bug 与稳定性
今日报告并确认（关闭）了以下 Bug，主要用于指导修复方向：
*   **严重 (Critical)** - **Telegram 触发的工具调用失败**：
    *   **描述**：二进制插件使用 JSON-RPC 方法 `execute` 调用时，后端预期 `tools/call`，导致 Telegram 机器人触发工具时报错 `Unsupported JSON-RPC method: execute`。
    *   **状态**：Issue #485 已关闭，意味着修复方案已定义，很可能在待合并的 PR 或私有分支中已解决。
    *   **链接**：[Issue #485](https://github.com/qhkm/zeptoclaw/issues/485)
*   **高优先级** - **Telegram 长文本导致静默失败**：
    *   **描述**：PR #462 旨在解决当 AI 生成内容过长时，Telegram 机器人直接“失声”（无响应也无报错）的问题。该问题由广泛的任务（如 "研究 Rust 社区"）触发。
    *   **状态**：有对应 PR 待合并。
    *   **链接**：[PR #462](https://github.com/qhkm/zeptoclaw/pull/462)

### 6. 功能请求与路线图信号
*   **架构演进**：从 #476 (ZeptoClaw vs PicoClaw 分析) 和 #477 (OpenSpec 计划) 可以看出，项目路线图正指向**模块化与精简**。未来的版本可能会显著减少依赖项或剔除未使用的 Provider/Channel。
*   **健壮性提升**：#462 的修复暗示未来版本将具备更好的**消息分块** 和**纯文本降级** 能力，以适应 LLM 生成的长文本场景。

### 7. 用户反馈摘要
*   **痛点**：目前最大的用户痛点集中在 **Telegram 集成**上。用户反馈在进行复杂任务时，机器人经常“静默”，没有任何反馈，导致用户体验极其糟糕。
*   **场景**：主要发生在长对话或需要调用外部工具的复杂查询场景中。
*   **评价**：虽然核心功能在短任务下表现尚可，但在处理大规模输出时的稳定性是目前的主要短板。

### 8. 待处理积压
*   **PR #462 - fix(telegram): prevent silent message failures**：
    *   **状态**：Open (创建于 2026-03-28，已持续 6 天)。
    *   **建议**：这是一个解决用户核心痛点（Telegram 无响应）的关键修复。鉴于今日维护者主要在处理文档和规划 Issue，建议尽快审查并合并此 PR，以恢复 Telegram 渠道的稳定性。
    *   **链接**：[PR #462](https://github.com/qhkm/zeptoclaw/pull/462)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-03)

**分析师摘要**：本项目日报基于 GitHub 公开数据生成，重点关注 `EasyClaw` (RivonClaw) 的最新动态。

---

### 1. 今日速览
EasyClaw 项目今日整体呈现**“稳中有进”**的态势。虽然社区 Issue 讨论区较为沉寂（0 条更新），但开发侧动作明显，不仅发布了最新的 **v1.7.8 稳定版**，还维持了一个高价值的多语言国际化 PR 处于活跃待合并状态。项目目前重点在于优化跨平台兼容性（特别是 macOS）以及打破语言障碍以扩大用户群。

### 2. 版本发布
📅 **v1.7.8: RivonClaw v1.7.8**
*   **更新重点**：本次更新主要针对 **macOS 用户的安装体验**进行了修复。
*   **详细说明**：解决了 macOS Gatekeeper 安全机制拦截未签名应用的问题。很多用户在安装时会遇到 `'RivonClaw' is damaged and can't be opened` 的错误提示，v1.7.8 提供了明确的指引（通过终端命令移除隔离属性），虽然这更多是签名证书缺失导致的问题，但新版本更新了文档或引导流程以降低用户困惑。
*   **破坏性变更/迁移注意**：无核心 API 变更。macOS 用户若遇“已损坏”提示，需按照 Release Notes 在终端执行 `xattr -cr` 相关命令（Release Notes 中有截断，建议查看原文）。
*   **链接**：[Release v1.7.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)

### 3. 项目进展
今日无已合并/关闭的 PR，但有一个**极具战略意义**的 PR 正在等待合并，这将是项目近期的重要里程碑。

*   **PR #21: [OPEN] feat(i18n): add 5 new languages**
    *   **作者**：chinayin
    *   **进展**：该 PR 创建于 3 月 18 日，并于 4 月 1 日更新，目前状态为 **Open (待合并)**。
    *   **内容**：一次性增加了 **5 种主流语言**支持（繁体中文、日语、韩语、越南语、印地语）。代码变更显示作者非常严谨，新增语言文件包含了与英文基准完全对应的 **1333 个翻译键值对**，并更新了索引配置。
    *   **意义**：一旦合并，将极大地提升 EasyClaw 在东亚及南亚市场的普及度，标志着项目从单一/双语环境向全球化迈出关键一步。
    *   **链接**：[PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)

### 4. 社区热点
*   **现状**：过去 24 小时内 Issues 和 PR 评论数为 0，社区讨论热度处于低点。
*   **潜在热点**：尽管今日无活跃讨论，但 **PR #21** 涉及的多语言支持通常是社区极其关注的功能。该 PR 更新于 4 月 1 日，且体量较大，预计维护者近期会进行 Code Review，这可能成为下一阶段社区关注的焦点。

### 5. Bug 与稳定性
*   **已知问题（非代码 Bug）**：v1.7.8 Release Notes 再次确认了 macOS 上存在的 **“应用已损坏”** 假象。这属于操作系统安全策略导致的部署问题，并非软件逻辑崩溃。
*   **状态**：已提供 Workaround（临时解决方案）。建议项目后续考虑申请 Apple 签名证书以彻底根除此类“软性 Bug”。

### 6. 功能请求与路线图信号
*   **国际化路线**：PR #21 的出现表明项目正在或即将大力推行本地化策略。
*   **预测**：随着 5 种新语言的加入，下一版本（可能是 v1.7.9 或 v1.8.0）预计将正式包含这些翻译。这暗示项目核心功能已趋于稳定，当前阶段重点在于**用户体验优化与市场扩张**。

### 7. 用户反馈摘要
*   由于今日缺乏新增 Issue 评论，反馈主要源自 Release Notes 中的常见问题。
*   **痛点**：macOS 用户对于“无法打开应用”感到困惑，这通常是该平台用户反馈最多的阻碍点。
*   **期待**：鉴于 PR #21 的内容，社区（尤其是中日韩用户）对于原生语言支持有潜在的高需求。

### 8. 待处理积压
*   **重点积压 PR**：**[#21 feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)**
    *   **状态**：开启已逾两周（3月18日-4月3日）。
    *   **建议**：该 PR 代码质量高（1333 keys 对齐），属于纯增量更新，风险低且收益高。**强烈建议维护者尽快 Review 并合并**，以便在下一版本中释放多语言功能。

---

*数据来源：EasyClaw GitHub Repository (2026-04-03 Snapshot)*

</details>