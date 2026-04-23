# OpenClaw 生态日报 2026-03-20

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-19 22:02 UTC

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

以下是 OpenClaw 项目 2026-03-20 的动态日报：

# 📊 OpenClaw 项目日报 (2026-03-20)

## 1. 今日速览
OpenClaw 今日维持了**极高的社区活跃度**，过去 24 小时内共有 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 达 346 条，待合并 PR 342 条。虽然无新版本发布，但社区贡献重心集中在**完善多平台客户端（Linux/Windows）**、**修复通讯渠道严重回归问题（WhatsApp/Matrix）**以及**增强基础设施稳定性（测试与内存泄漏）**。目前项目面临的主要挑战是近期版本引入的 WhatsApp 连接性 Bug 导致大量重复反馈，以及针对新模型（如 MiniMax M2.7）的适配需求。

## 2. 版本发布
**无新版本发布**。项目当前主要处理近期版本（v2026.3.12/13）引入的回归问题，尚未冻结下一个版本的代码。

## 3. 项目进展
今日共有 **158 条 PR 被合并或关闭**，重点推进了以下领域：

*   **Linux 原生应用落地 (PR #50532)**: 实现了 Linux GTK4 原生伴侣应用的初始版本，包含进程隔离架构，这是补齐跨平台体验的关键一步，响应了 Issue #75 的强烈诉求。
*   **模型供应商扩展**:
    *   **GigaChat 支持 (PR #48017)**: 完整集成了 GigaChat 的流式传输、认证与引导流程。
    *   **Anthropic Vertex AI (PR #43356)**: 推进了通过 GCP Vertex AI 调用 Claude 模型的支持。
*   **关键稳定性修复**:
    *   **测试基础设施 (PR #50652, #50654)**: 修复了低内存环境下的 Vitest OOM 问题，并引入了检测内存泄漏的工具，显著提升了 CI/CD 的可靠性。
    *   **用量统计修正 (PR #50653)**: 修复了重置归档的记录未被计入 Token 用量的问题，修正了高达 85% 的统计偏差。
    *   **网络代理修复 (PR #50650)**: 修复了在配置 `HTTPS_PROXY` 环境变量时 SSRF 防护绕过代理导致的连接失败。

## 4. 社区热点
今日讨论最热烈的话题集中在跨平台支持与安全警告：

1.  **[OPEN] Linux/Windows 客户端需求 (Issue #75)**
    *   **评论数**: 46 | 👍: 63
    *   **分析**: 这是目前呼声最高的功能请求。用户希望获得与 macOS 对等的 Linux 和 Windows 原生应用体验。今日合并的 PR #50532 (Linux GTK4 App) 标志着这一需求开始得到实质性响应。
2.  **[OPEN] ⚠️ 钓鱼诈骗警告 (Issue #49836)**
    *   **评论数**: 32 | 👍: 18
    *   **分析**: 社区迅速识别并公开讨论了一起冒充 OpenClaw 名义进行钱包连接钓鱼的事件。这显示了社区较高的安全警觉性，维护者需尽快在官方渠道发布辟谣声明。
3.  **[OPEN] Brave Search API 不再免费 (Issue #16629)**
    *   **评论数**: 14 | 👍: 4
    *   **分析**: 随着 Brave Search 取消免费套餐，用户迫切需要一个替代的网页搜索 API（如 DuckDuckGo），这直接影响到 Agent 的联网搜索能力。

## 5. Bug 与稳定性
今日报告了大量**严重的功能性回归问题**，主要集中在 **WhatsApp** 和 **网关连接** 模块，表明近期重构可能引入了不稳定性。

*   **🔴 严重 - WhatsApp 发送功能失效 (Issue #34741, #45171, #46659, #48109)**
    *   **现象**: 升级到 v2026.3.12/13 后，用户广泛报告 WhatsApp 显示已连接但无法发送消息，错误提示 `No active WhatsApp Web listener`。
    *   **状态**: **[OPEN]** - 这是一个高优先级的回归 Bug，自动回复正常但主动发送/CLI 发送失败，严重影响了生产环境使用。
*   **🟠 中等 - 网关握手超时/连接失败 (Issue #45504, #45560, #49510)**
    *   **现象**: 本地回环网关握手失败，CLI 命令（如 `logs --follow`, `devices list`）不可用。
    *   **相关修复**: PR #47533 提议延长探测超时时间，正在审查中。
*   **🟠 中等 - Matrix E2EE 验证失败 (Issue #7649)**
    *   **现象**: Bot 无法验证自己的账户以参与端到端加密通道。
    *   **状态**: **[CLOSED]** - 经过长期讨论，该问题已随相关更新关闭。
*   **🟡 一般 - vLLM 参数兼容性 (Issue #48713)**
    *   **现象**: OpenClaw 向 vLLM 发送了不支持的 `strict` 和 `store` 参数，导致报错。

## 6. 功能请求与路线图信号
用户需求正从基础功能转向**生态兼容性**和**高级架构支持**：

*   **MiniMax M2.7 模型支持 (Issue #50234)**: 用户请求迅速跟进 MiniMax 最新的 M2.7 和 Highspeed 模型。
*   **原生 MCP 客户端支持 (Issue #29053)**: 强烈请求支持连接外部 MCP (Model Context Protocol) 服务器。这表明用户希望 OpenClaw 能接入标准化的外部工具生态，而不仅限于内置工具。
*   **外部记忆提供者 API (Issue #49233)**: 请求支持零停机时间的上下文压缩，通过外部系统管理记忆，减少 Agent 黑屏时间。这反映了高级用户对长周期运行稳定性的关注。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的核心痛点如下：
*   **升级即崩溃**: 多数不满源于 v2026.3.12 之后的升级体验，特别是 WhatsApp 渠道的稳定性倒退让用户感到沮丧。
*   **时间感知缺陷**: 用户指出 Agent 设置提醒时常出错（Issue #10841），因为它“猜测”当前时间而不是确切知道，这影响了日程管理类的信任度。
*   **安装门槛**: 新用户在 Ubuntu 上通过一键脚本安装失败（Issue #39447），表明安装流程在特定环境下仍存在健壮性问题。

## 8. 待处理积压
以下重要 Issue 长期未彻底解决或处于 Stale 状态，建议维护者优先关注：

1.  **[OPEN] Agent 时间感知问题 (Issue #10841)** - 影响提醒和日程功能的准确性。
2.  **[OPEN] OAuth Token 刷新竞态条件 (Issue #26322)** - 多 Agent 共享 Auth Profile 时的认证失败问题。
3.  **[OPEN] 多 Agent 插件配置隔离 (Issue #25359)** - 缺乏针对单个 Agent 的插件插槽覆盖配置，限制了多 Agent 场景的灵活性。

---
*分析师结语：OpenClaw 目前处于功能快速迭代与稳定性磨合的阵痛期。Linux 原生应用的推出是一个重要里程碑，但必须尽快解决 WhatsApp 和 Gateway 的连接性回归问题，以恢复社区对版本质量的信心。*

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-20)

**分析师**：AI 智能体与个人 AI 助手开源生态资深技术分析师

---

## 1. 生态全景
当前 AI 智能体生态正处于从 **"单一对话" 向 "自主执行" 与 "多端协同"** 爆发式演进的关键节点。
以 **Zeroclaw** 和 **CoPaw** 为代表的项目正在突破 Agent 的能力边界，实现了自主技能创建与多智能体架构；以 **OpenClaw** 和 **PicoClaw** 为首的基础设施正在经历"客户端化"和"多渠道适配"的阵痛期，力求覆盖用户的全场景入口。
生态整体呈现出 **"功能快速迭代与稳定性回归并存"** 的特征，安全性与多模型兼容性成为所有项目必须面对的通用挑战。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 今日 Release | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (极高) | 500 (极高) | 无 | **⚠️ 高压状态**：社区极度活跃，但 WhatsApp 严重回归 Bug 引发大量投诉，急需质量修复。 |
| **CoPaw** | 50 (高) | 50 (高) | **v0.1.0** (里程碑) | **🚀 快速上升**：正式版发布，引入 Multi-Agent 架构，但随之而来的升级兼容性问题凸显。 |
| **Zeroclaw** | 43 (高) | 50 (高) | **v0.5.1** (重要) | **🌟 功能爆发**：自主技能创建是一大亮点，但默认安全策略过严导致用户挫败感强。 |
| **IronClaw** | 50 (高) | 50 (高) | **v0.20.0** | **🛡️ 稳健迭代**：引入自我修复机制与 Embedding 缓存，架构日益成熟，CI 自动化程度高。 |
| **PicoClaw** | 41 (高) | 104 (极高) | Nightly | **🔧 重构期**：合并了大量 PR，重点解决上下文管理与多渠道适配，内核正在变强。 |
| **LobsterAI** | 17 (中) | 33 (中) | 2026.3.19 | **🌏 区域深耕**：专注企微/飞书集成与 I18N，但在 OpenAI 新模型适配和升级体验上存在短板。 |
| **NanoBot** | 29 (中) | 53 (中) | 无 | **⚙️ 偿债期**：重点修补配置安全与可观测性，交互架构（中断/插话）面临重构压力。 |
| **NanoClaw** | 14 (中) | 32 (中) | 无 | **🛠️ 安全加固**：修复日志泄露漏洞，多渠道（Signal/Discord）扩展积极。 |
| **EasyClaw** | - | 3 (低) | **v1.7.2** | **🎨 体验优化**：完成了重大的 UI 架构重构，正聚焦于账户系统与交互细节打磨。 |
| **Moltis** | - | 2 (低) | 无 | **🔌 扩展集成**：主要推进 Novita AI 等新模型支持，处于平稳开发期。 |
| **ZeptoClaw** | - | 3 (低) | 无 | **🚧 协议修正**：ACP 协议实现发现安全缺陷，正在修补中。 |
| **TinyClaw** | 0 (低) | 2 (低) | 无 | **🏗️ 架构优化**：核心逻辑适配器模式重构中，社区较为沉寂。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 拥有远超同类项目的 Issue/PR 吞吐量（单日 500+），是生态中事实上的**流量与反馈中心**。
*   **全平台客户端的先行者**：相比其他项目多依赖 Web 或特定 IM，OpenClaw 正通过 Linux GTK4 和 Windows 原生应用补齐**操作系统级**的入口体验。
*   **技术路线**：采用**大而全**的集成策略，内置大量工具与渠道，但也因此背负了沉重的维护负担，近期 WhatsApp 的连接性 Bug 证明了**功能广度与稳定性之间的张力**。
*   **对比劣势**：相比 Zeroclaw 的"自主技能创建"和 CoPaw 的"Multi-Agent 原生架构"，OpenClaw 的 Agent 内核显得较为传统，目前更多扮演**超级连接器**而非**超级大脑**的角色。

## 4. 共同关注的技术方向

1.  **多模型兼容与负载均衡**
    *   **现象**：几乎所有的非官方项目都在努力适配 OpenAI 的新参数（如 `max_completion_tokens`）和国内模型（如阿里云百炼、DeepSeek、Kimi）。
    *   **涉及项目**：LobsterAI (#501), Zeroclaw (#3882), Moltis (PR #451), ZeptoClaw (PR #390)。
    *   **诉求**：开源生态拒绝被单一模型锁定，**Model Agnostic（模型无关性）** 是刚需。

2.  **安全性与易用性的博弈**
    *   **现象**：默认的安全沙箱过于严格，导致 Agent "除了聊天什么都不会"，引发了社区对"安全等级"可配置化的强烈呼声。
    *   **涉及项目**：Zeroclaw (Issue #1478 热度极高), NanoClaw (Git Hook 绕过), IronClaw (自我修复)。
    *   **诉求**：需要在**安全隔离**与**自主执行能力**之间找到平衡点，提供更友好的权限降级或引导机制。

3.  **长期记忆与上下文管理**
    *   **现象**：随着 Agent 运行时间变长，Context 耗尽、会话文件膨胀、历史记录压缩成为共性难题。
    *   **涉及项目**：PicoClaw (#1439), CoPaw (ReMe 记忆), Zeroclaw (Context 爆炸), OpenClaw (外部记忆 API)。
    *   **诉求**：迫切需要**分层记忆架构**和**智能压缩算法**来支撑长周期的任务执行。

## 5. 差异化定位分析

| 维度 | 主要代表 | 关键特征 | 目标用户 |
| :--- | :--- | :--- | :--- |
| **自主智能体** | **Zeroclaw**, **CoPaw** | 强调 **Self-Evolution** (自主技能)、Multi-Agent 协作、复杂的任务链。 | 开发者、极客、自动化重度用户。 |
| **全渠道网关** | **OpenClaw**, **PicoClaw**, **LobsterAI** | 强调 **Connectivity**，支持 Linux/Win 原生应用、企微/飞书/Telegram 全覆盖。 | 企业级部署、多端协同需求者。 |
| **轻量/嵌入式** | **NanoBot**, **NanoClaw**, **TinyClaw** | 强调 **Core/CLI**，关注配置安全、容器化、底层架构解耦。 | 资深开发者、喜欢 DIY 的技术控。 |
| **垂直/工程化** | **IronClaw**, **EasyClaw** | 强调 **Robustness**，自我修复、严格的 CI/CD、UI/UX 精细化。 | 追求稳定性的商业用户或团队。 |

## 6. 社区热度与成熟度

*   **第一梯队 (活跃迭代期)**：**OpenClaw, Zeroclaw, CoPaw, IronClaw, PicoClaw**
    *   这些项目正处于功能大爆炸阶段，社区噪音（Bug 报告）与信号（功能请求）并存，版本更新频繁，是当前创新的主要来源。
*   **第二梯队 (质量巩固期)**：**NanoBot, LobsterAI, NanoClaw**
    *   经历了早期的功能堆砌，现在正专注于修补安全漏洞、优化配置体验和解决特定平台（如 Windows/飞书）的顽固 Bug。
*   **第三梯队 (探索/萌芽期)**：**EasyClaw, Moltis, ZeptoClaw, TinyClaw**
    *   活跃度相对较低，主要集中在特定的架构重构或单一功能的深度优化，社区规模尚小。

## 7. 值得关注的趋势信号

1.  **Agent 正在"入侵"操作系统**：OpenClaw 的 Linux/Windows 原生应用、NanoClaw 的 Systemd 支持、Zeroclaw 的沙箱逃逸讨论，都预示着 Agent 正在从**浏览器/IM 走向操作系统底层**，试图接管用户的文件系统和进程。
2.  **"自主性"引发的安全焦虑**：Zeroclaw 用户关于"除了安全什么功能也没有"的吐槽是一个标志性事件。随着 Agent 能力增强（如修改配置文件、自主安装软件），**用户对失控的恐惧**正在成为阻碍采用的最大障碍。**安全策略的透明化**（让 LLM 知道为什么被拒绝）将是下一步优化的重点。
3.  **多智能体 从概念走向落地**：CoPaw 的 v0.1.0 架构升级和 IronClaw 的 Manager Agent 讨论，表明单打独斗的 Agent 已无法满足复杂需求。**编排与路由** 将成为下一阶段架构设计的核心。
4.  **协议标准化 的萌芽**：ZeptoClaw 对 ACP 协议的执着修正，以及多个项目对 MCP (Model Context Protocol) 的支持请求，揭示了社区对**统一接口标准**的渴望，旨在解决工具与模型间的碎片化问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

你好！我是 NanoBot 项目分析师。根据 2026-03-20 的 GitHub 数据，以下是为您生成的项目动态日报。

---

# 📊 NanoBot 项目日报 (2026-03-20)

## 1. 今日速览
NanoBot 项目今日保持**高度活跃**状态，社区互动与代码提交频繁。过去 24 小时内共有 **29 条 Issues 更新**（其中 22 条为新开/活跃）和 **53 条 PR 更新**，显示项目正处于快速迭代期。虽然今日无新版本发布，但合并了 12 个 PR，主要涉及配置安全性、Bug 修复和可观测性增强。目前有 41 个 PR 处于待合并状态，表明社区贡献热情高涨，但核心团队审核压力较大。整体来看，项目健康度良好，正在向更安全、更易用的方向发展。

## 2. 版本发布
*   **无新版本发布**：今日无 Release 更新。

## 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，主要集中在安全性增强和配置体验优化上：

*   **安全性增强**：PR #2218 与 #2265 的合并引入了对 `config.json` 中环境变量引用（`{env:VAR}`）的支持，解决了明文存储敏感信息的痛点。
*   **可观测性**：PR #1490 合并了 Langfuse 追踪支持，PR #2022 增加了 JSONL 格式的 Token 使用记录，大幅提升了生产环境下的监控能力。
*   **配置修复**：PR #2241 修复了交互式配置向导中无法不保存退出的用户体验问题。
*   **架构优化**：PR #2212 重构了配置运行时处理逻辑，为后续更复杂的密钥管理功能打下基础。

> **分析**：这些合并表明项目组目前重点关注**生产环境的安全性与可维护性**，正在积极修补配置管理方面的历史欠账。

## 4. 社区热点
今日讨论最热烈的话题集中在交互体验与平台适配上：

*   **[Issue #2133] 关于任务执行期间用户消息入列** (👍 0, 💬 18)
    *   **核心诉求**：用户指出当前 Agent Loop 模式下，用户无法在 Agent 执行长任务时插话或审批，必须等待结束或强制 `/stop`，体验割裂。这触及了 Agent 架构的核心——中断与交互机制。
    *   **链接**：[HKUDS/nanobot Issue #2133](https://github.com/HKUDS/nanobot/issues/2133)
*   **[Issue #1692] Telegram Bot 重复回复问题** (👍 4, 💬 8)
    *   **核心诉求**：Telegram 端收到两条消息（一条渲染 Markdown，一条纯文本），严重影响用户体验。虽已有多人反馈，但尚未彻底解决。
    *   **链接**：[HKUDS/nanobot Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)
*   **[Issue #2062] 飞书 会话管理难题** (👍 0, 💬 7)
    *   **核心诉求**：飞书 ID 持久化导致会话文件无限增大，用户无法优雅地重置会话，只能手动删文件。
    *   **链接**：[HKUDS/nanobot Issue #2062](https://github.com/HKUDS/nanobot/issues/2062)

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，部分已有修复方案：

*   **🚨 严重 - 配置崩溃 (已有 Fix PR)**
    *   **描述**：执行 `nanobot onboard` 并选择非默认选项时会导致程序崩溃且配置文件损坏。
    *   **状态**：PR #2266 已提交修复，待合并。
    *   **链接**：[PR #2266](https://github.com/HKUDS/nanobot/pull/2266)
*   **⚠️ 中等 - 多渠道重复/异常响应**
    *   **Telegram**：多个 Issue (#2208, #2235) 反馈消息重复显示，怀疑与 Faux Streaming 实现有关。
    *   **飞书**：Issue #2256 指出在话题群中 Bot 回复位置不正确；Issue #2242 指出无法处理图片消息。
*   **⚠️ 中等 - 兼容性问题**
    *   **MCP 工具**：Issue #2273 报告 `browser-use` MCP 在 GPT-5.4 下因 Schema 不兼容失败。
    *   **Anthropic**：Issue #2200 报告近期 Anthropic 提供商调用频繁报错。

## 6. 功能请求与路线图信号
从 Issue 和 PR 动向看，未来的版本可能会侧重以下方向：

*   **实时交互架构重构**：Issue #2133 的热烈讨论结合 PR #1224（双层架构 Steering Loop），预示项目可能会引入更复杂的**任务中断/插队机制**，以实现真正的实时交互。
*   **插件化系统**：Issue #2231 请求类似 Copilot CLI 的插件系统，社区对此有较高期待，可能成为下一阶段的重点。
*   **全平台文件支持**：PR #1667 (QQ文件支持) 和相关 Issue 表明，补齐各渠道（尤其是国内 IM 如飞书、QQ）的文件/图片收发能力是当前路线图的短期目标。
*   **模型灵活性**：Issue #2257 提议通过命令行动态切换模型，反映了用户在多模型成本/性能权衡上的需求。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置门槛**：虽然有 `onboard` 向导，但多实例配置（Issue #2250）和环境变量管理仍让新手困惑。
    *   **即时反馈缺失**：长任务执行时用户处于"盲等"状态，无法进行干预。
    *   **移动端体验**：Telegram Android 端的重复消息问题尤为明显。
*   **满意点**：
    *   用户对 `onboard` 交互式配置的新功能（Issue #2018）表示欢迎，认为比手动编辑 JSON 友好得多。
    *   社区正在积极贡献代码（如 QQ 通道、Langfuse 支持），显示了对项目潜力的认可。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到最终解决，建议维护者优先关注：

*   **[PR #1224] 双层架构（Steering Loop）**：这是一个解决实时交互痛点（Issue #2133）的关键 PR，自 2 月 26 日开启至今未合并，需要核心团队尽快 Review 以推动架构升级。
    *   链接：[PR #1224](https://github.com/HKUDS/nanobot/pull/1224)
*   **[PR #1053] 消息路由元数据修复**：修复了回复错乱（如 Slack 回复不在原线程）的问题，虽然评论不多但影响基础功能，建议尽快验证合并。
    *   链接：[PR #1053](https://github.com/HKUDS/nanobot/pull/1053)
*   **[Issue #1873] 安全架构缺陷**：关于 Agent 读取自身配置泄露 Key 的安全隐患，这是一个严重的安全架构问题，目前仅靠环境变量缓解，需要更彻底的隔离方案。
    *   链接：[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)

---
*分析师结语：NanoBot 正处于从"能用"向"好用"转型的关键期。今日的动态显示项目正在修补安全与配置的短板，但"长任务交互"这一 Agent 级别的痛点已成为社区关注焦点，解决这一问题将是项目迈向成熟的重要里程碑。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-20)

**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源**：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

Zeroclaw 项目今日呈现出极高的开发活跃度与社区参与度，过去24小时内 Issues 更新达 43 条，PR 更新达 50 条，并发布了包括 **v0.5.1 正式版**在内的 10 个新版本。本次更新标志着项目在**自主智能体**能力上取得了重大突破，引入了**自主技能创建**和**运行时模型切换**功能。社区方面，关于安全策略与用户体验的平衡问题引发了热烈讨论，多项关键 Bug 修复和功能增强已合并，整体项目健康度良好，正处于快速迭代期。

---

## 2. 版本发布

今日发布了 **v0.5.1** 正式版以及一系列 Beta 版本 (build 365 - 403)，核心更新内容如下：

### 🚀 核心新功能
- **自主技能创建**：智能体现可从多步骤任务中自动创建技能，大幅提升任务执行效率与复用性。
  *链接: [Release v0.5.1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.1)*
- **运行时模型切换**：新增 `model_switch` 工具，允许智能体在运行时动态切换底层 LLM 模型，优化成本与性能。
  *链接: [Release v0.5.1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.1)*

### ⚙️ 改进与优化
- **心跳机制优化**：默认心跳间隔从 30 分钟缩短至 5 分钟，并从自动保存中移除心跳数据，减少冗余 I/O。
- **配置灵活性**：子智能体的超时时间 现可通过 `config.toml` 进行配置。
- **国际化 (i18n)**：工具描述已外部化，便于社区进行多语言翻译。
- **Slack 集成**：新增 `thread_replies` 频道选项，优化 Slack 上的对话体验。

---

## 3. 项目进展

今日共有 **38 个 PR 被合并或关闭**，项目在安全性、渠道集成和可观察性方面取得了实质性进展：

- **安全性增强**：合并了将安全策略摘要注入 LLM 系统提示词的功能 ([PR #4002](https://github.com/zeroclaw-labs/zeroclaw/pull/4002))。这解决了 LLM 因不了解安全限制而反复试错的问题，显著提升了用户体验。
- **技能系统修复**：修复了 Compact 模式下技能加载不可靠的问题，引入了 `read_skill` 工具 ([Issue #3706](https://github.com/zeroclaw-labs/zeroclaw/issues/3706))。
- **渠道功能扩展**：
    - Telegram 渠道新增 TTS 语音回复支持 ([PR #3942](https://github.com/zeroclaw-labs/zeroclaw/pull/3942))。
    - 修复了 Docker 构建中的文件复制错误 ([PR #3840](https://github.com/zeroclaw-labs/zeroclaw/pull/3840))。
- **Web UI 改进**：新增主题系统和设置模态框，提升了用户界面的可定制性 ([PR #3986](https://github.com/zeroclaw-labs/zeroclaw/pull/3986))。

---

## 4. 社区热点

今日讨论最热烈的问题集中在**安全策略的易用性**与**新模型支持**上：

1.  **[Feature]: 除了安全,什么功能也没有 (#1478)**
    *   **评论数**: 42
    *   **核心诉求**: 用户抱怨默认安全策略过于严格，导致智能体几乎无法执行任何操作（如安装 ffmpeg），变成了单纯的聊天机器人。用户呼吁提供更便捷的“完全放开权限”配置选项，尤其是用于本地玩具环境时。
    *   **链接**: [Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
2.  **Feature Request: Support 阿里云百炼 Coding Plan (#3882)**
    *   **评论数**: 8
    *   **核心诉求**: 用户希望支持阿里云百炼的 Coding Plan API，以便利用该服务进行编程辅助。目前遇到 401/405 错误。
    *   **链接**: [Issue #3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882)
3.  **Extend HITL to Telegram (#1865) & Allow script files in skills (#1889)**
    *   **核心诉求**: 用户希望在 Telegram 上实现交互式确认，并希望能通过配置允许 Skills 中包含脚本文件（目前被安全策略拦截）。
    *   **链接**: [Issue #1865](https://github.com/zeroclaw-labs/zeroclaw/issues/1865), [Issue #1889](https://github.com/zeroclaw-labs/zeroclaw/issues/1889)

---

## 5. Bug 与稳定性

今日报告了多个 Bug，部分已有修复方案：

| 严重程度 | 描述 | 状态/PR | 链接 |
| :--- | :--- | :--- | :--- |
| **S0 - 安全风险** | **沙盒配置失效**：`[security.sandbox]` 配置存在但未生效，Shell 命令仍以宿主机权限运行。 | **已关闭 (可能需验证)** | [Issue #3983](https://github.com/zeroclaw-labs/zeroclaw/issues/3983) |
| **S0 - 安全风险** | **权限提升漏洞**：智能体可通过 `file_write` 修改 `config.toml`，将 `always_ask` 工具改为 `auto_approve`。 | **已关闭** | [Issue #2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) |
| **S1 - 阻塞** | **GPT-5.4/Codex 调用失败**：使用 GPT-5.4 时频繁出现 Provider 错误。 | **Open** | [Issue #3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786) |
| **S1 - 阻塞** | **Ollama Tool-Calling 失败**：本地 Ollama 无法进行工具调用握手，导致无法使用工具。 | **Open** | [Issue #3999](https://github.com/zeroclaw-labs/zeroclaw/issues/3999) |
| **S1 - 阻塞** | **Web UI 405 错误**：使用自定义 Provider headers 时，CLI 正常但 Web UI 返回 405。 | **Open** | [Issue #3764](https://github.com/zeroclaw-labs/zeroclaw/issues/3764) |
| **S1 - 阻塞** | **Homebrew 版本缺失前端**：通过 Homebrew 安装的版本没有前端界面。 | **已关闭** | [Issue #3991](https://github.com/zeroclaw-labs/zeroclaw/issues/3991) |
| **S2 - 降级** | **Context 上下文耗尽**：即使手动删除会话文件，运行不久仍报错 Context 过长。 | **已关闭** | [Issue #3987](https://github.com/zeroclaw-labs/zeroclaw/issues/3987) |

---

## 6. 功能请求与路线图信号

基于今日的 Issues 和 PRs，以下功能极有可能被纳入近期路线图：

1.  **安全策略透明化**：PR #4002 已合并，未来版本中 LLM 将能“看到”安全限制，减少无效尝试。
2.  **Jira 集成**：PR #3997 提议增加 Jira 工具，允许智能体读取、搜索和评论 Issue。鉴于工程团队广泛使用 Jira，此功能被合入的可能性较高。
3.  **计算器工具**：PR #4000 提议增加算术和统计计算工具，以解决 LLM 计算易出错的问题。
4.  **LiteLLM 支持**：Issue #2602 强烈建议增加 LiteLLM 作为 Provider 别名，以兼容更多 OpenAI 接口的服务。
5.  **完整版 Docker 镜像**：Issue #3642 建议发布包含 WhatsApp 等高级功能的“Full”版 Docker 镜像。

---

## 7. 用户反馈摘要

*   **痛点：安全与便利的冲突**
    *   大量反馈指出 Zeroclaw 的安全沙箱虽然严密，但配置复杂，默认设置过于保守，导致新手用户难以让智能体完成实质性任务（“除了聊天什么都不会”）。**建议**：提供预设的“安全等级”（如 High/Medium/Low/Off），并在文档中提供“极速体验”配置模板。
*   **痛点：模型兼容性**
    *   用户在使用 GPT-5.4、本地 Ollama 或特定国内模型（如阿里云百炼）时遇到较多适配问题。
*   **满意点：自主能力**
    *   v0.5.1 引入的自主技能创建功能备受期待，用户对智能体能自我进化表示赞赏。
*   **场景：树莓派/Raspberry Pi 部署**
    *   有用户在树莓派上部署并测试 Anthropic Haiku，但遇到了缓存命中率低和上下文耗尽的问题，表明轻量级边缘设备仍需优化。

---

## 8. 待处理积压

以下重要 Issue 尚未得到明显解决或响应，建议维护者关注：

1.  **[Feature] Support 阿里云百炼 Coding Plan (#3882)**：国内用户强需求，目前未分配。
2.  **[Bug] Ollama Tool-Calling Handshake Failure (#3999)**：影响本地模型用户体验，需优先排查。
3.  **[Bug] Web UI endpoint returns 405 (#3764)**：阻碍了使用自定义 Provider 的 Web 端用户。
4.  **[Enhancement] Provide a "full" docker image (#3642)**：可降低非技术用户的入门门槛，且已有 2 个点赞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

你好！我是 AI 智能体领域开源项目分析师。根据 PicoClaw 项目 2026年3月20日的 GitHub 数据，我为你整理了以下项目动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-03-20)

## 1. 今日速览
PicoClaw 项目今日保持**极高的活跃度**，发布了 `v0.2.3-nightly` 自动构建版本，标志着主分支代码已进入下一阶段的迭代测试。社区方面**讨论热度高涨**，共产生了 41 条 Issue 更新和 104 条 PR 更新，其中 11 个 Issue 被成功关闭，52 个 PR 被合并。开发重心主要集中在 **Agent 上下文管理重构**、**新渠道支持（如 Email/OpenIM）** 以及 **Web Dashboard 的功能增强**。值得注意的是，社区正在通过 PR 逐步完善“事件驱动钩子系统”和“多模态（TTS/ASR）”等高级功能，项目正从单一 AI 网关向全栈 AI 自动化平台演进。

## 2. 版本发布
- **Release**: `nightly` (Nightly Build)
- **Tag**: `v0.2.3-nightly.20260319.e73d9d95`
- **说明**: 这是一个自动化的每夜构建版本，包含了截至 `e73d9d95` 提交的所有最新代码。
- **警告**: 官方提示该版本可能不稳定，仅供测试用途，生产环境请谨慎使用。
- **变更日志**: [查看 v0.2.3...main 的完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. 项目进展
今日共有 **52 个 PR 被合并**，显示维护团队正在积极清理积压代码并整合新功能。重点推进如下：

- **文档与配置增强**:
    - PR #1740: 修复了文档中关于修改 Workspace `.md` 文件是否需要重启网关的疑问，明确了无需重启的机制，提升了用户体验。
    - PR #1788: 补充了 `Agent Bindings`（代理绑定）的路由配置文档，这对多租户或多 Agent 场景的路由管理至关重要。
    - PR #1782: 将 `docker/data` 目录加入 `.gitignore`，避免 Docker 容器数据污染仓库。

- **Bug 修复与稳定性**:
    - PR #1390: 修复了 Telegram 渠道在 LLM 失败或挂起时“正在输入”状态无法停止的问题，改善了交互反馈。
    - PR #1711: 修复了子代理（Subagent）无法继承工具注册表导致“tool not found”的严重功能缺陷。
    - PR #1460: 修正了 OpenAI 兼容提供商在处理 `tool_calls` 时的序列化问题，提高了兼容性。

- **依赖更新**: 大量 Dependabot PR（如 #1809, #1805, #1804 等）被合并，保持了对 `tailwindcss`、`mautrix`、`anthropic-sdk` 等核心库的更新。

## 4. 社区热点
今日讨论最热烈的 Issue 集中在**功能扩展**和**配置复杂性**上：

1.  **[#1648 [Feature] Adding TTS and ASR Support to PicoClaw](https://github.com/sipeed/picoclaw/issues/1648)**
    - **热度**: 14 条评论
    - **分析**: 社区对 PicoClaw 支持语音交互（TTS/ASR）的需求非常强烈。讨论涉及到架构设计，试图在不破坏网关核心逻辑的前提下灵活增加音频处理能力。已有相关 PR (#1642) 提交，集成工作正在推进中。

2.  **[#901 I can't add openrouter/free model in picoclaw](https://github.com/sipeed/picoclaw/issues/901)**
    - **热度**: 12 条评论
    - **分析**: 用户在使用 OpenRouter 的免费模型时遇到配置问题，导致 Agent 初始化失败。这反映了部分用户对 Provider 配置（特别是 API Key 和 Model 前缀）的配置逻辑感到困惑。

3.  **[#100 "I've completed processing but have no response to give."](https://github.com/sipeed/picoclaw/issues/100)**
    - **热度**: 11 条评论
    - **分析**: 这是一个关于 Agent 推理逻辑的典型反馈。Agent 在完成任务后没有生成最终回复给用户，这通常发生在使用特定 LLM（如 OpenRouter 上的模型）时，模型调用工具后未能正确生成总结性文本。

4.  **[#1439 Context management: boundaries, compression, and token budgeting](https://github.com/sipeed/picoclaw/issues/1439)**
    - **热度**: 6 条评论
    - **分析**: 这是一个高质量的架构设计讨论。核心开发者正在规划 Agent 重构的第 6 阶段——上下文管理，涉及历史记录边界、压缩策略和 Token 预算控制。这是提升 Agent 长期记忆和稳定性的关键步骤。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**配置继承**和**API 适配**方面，部分已有修复方案：

1.  **[P1-Config] [#1635 model_list does not inherit api_key/api_base](https://github.com/sipeed/picoclaw/issues/1635)** (已关闭)
    - **问题**: 在 `providers` 中定义了通用配置，但在 `model_list` 中引用时无法自动继承 `api_key`。
    - **状态**: 相关讨论已解决，这属于配置 DRY (Don't Repeat Yourself) 的问题，可能有相关修复或文档澄清。

2.  **[P1-Provider] [#1771 anthropic_messages returns 400 when tool call name is empty](https://github.com/sipeed/picoclaw/issues/1771)** (已关闭)
    - **问题**: 使用 Anthropic 格式时，如果 LLM 返回空的 tool call name，会导致 400 错误。
    - **状态**: 已确认并修复。

3.  **[P2-Agent] [#1641 max_tool_iterations error after running for a few days](https://github.com/sipeed/picoclaw/issues/1641)**
    - **问题**: 长期运行后出现 `max_tool_iterations` 错误，可能与内存泄漏或上下文无限膨胀有关。
    - **状态**: 正在调查中。

4.  **[P2-Channel] [#1767 飞书机器人频繁不回复消息](https://github.com/sipeed/picoclaw/issues/1767)**
    - **问题**: 飞书渠道出现断连且无自动重连机制。
    - **状态**: 待确认。

## 6. 功能请求与路线图信号
根据新提出的 Issues，社区对以下功能有明确期待，部分已进入开发阶段：

- **事件驱动系统 (Hooks)**: Issue [#1795](https://github.com/sipeed/picoclaw/issues/1795) 和 [#1796](https://github.com/sipeed/picoclaw/issues/1796) 提出引入类似 OpenClaw 的事件钩子系统，以支持自动化触发。**预计很快会有相关 PR 进入视野**。
- **更多 Channel 支持**:
    - **Email Channel**: Issue [#1794](https://github.com/sipeed/picoclaw/issues/1794) 建议增加邮件渠道，并利用白名单机制过滤垃圾邮件。
    - **OpenIM & OpenAI API 兼容 Channel**: Issues [#1372](https://github.com/sipeed/picoclaw/issues/1372) 和 [#1738](https://github.com/sipeed/picoclaw/issues/1738) 分别请求支持 OpenIM 插件和 OpenAI API 格式的对外接口，以便将 PicoClaw 嵌入现有系统。
- **Web Dashboard 增强**: Issue [#1797](https://github.com/sipeed/picoclaw/issues/1797) 希望在 Web 端管理 Cron 任务并查看 Token 消耗统计，这是企业级部署的刚需。
- **思考过程隐藏**: Issue [#1714](https://github.com/sipeed/picoclaw/issues/1714) 建议在前端增加开关以隐藏 `think` 标签内容，提升聊天界面的整洁度。

## 7. 用户反馈摘要
- **痛点**: 配置文件结构较为复杂，尤其是 `providers` 与 `model_list` 的映射关系让新手感到困惑（Issue #1635, #901）。部分用户在 32 位 ARM 设备（如旧款安卓或树莓派）上运行遇到困难（Issue #1778, #1675）。
- **场景**: 用户正尝试将 PicoClaw 用于长期运行的自动化任务（如定时任务、监控），这对系统的稳定性提出了更高要求（Issue #1641, #1757）。
- **满意度**: 用户对 PicoClaw 的多渠道适配能力表示认可，并积极提出改进建议（如飞书重连、Telegram 反馈），显示出较高的参与度和期待值。

## 8. 待处理积压
- **[Bug] [#629 Didn't retry if meet LLM call failed](https://github.com/sipeed/picoclaw/issues/629)**: 创建于 2 月，涉及 LLM 调用失败后的重试机制缺失。这是一个影响任务稳定性的关键问题，建议维护者优先确认状态。
- **[Feature] [#571 Add progress feedback during tool execution](https://github.com/sipeed/picoclaw/issues/571)**: 用户在执行长工具（如联网搜索）时界面无反馈，体验较差。该 Issue 创建较早，建议纳入 UX 改进路线图。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期：** 2026-03-20
**分析师：** AI 开源项目观察

---

### 1. 今日速览

NanoClaw 今日继续保持高强度的开发迭代，虽然未发布新版本，但社区贡献量显著。过去24小时内更新了 **14 条 Issues** 和 **32 条 PRs**，其中包含 10 个已完成合并/关闭的 PR，显示出核心团队对社区贡献的响应速度较快。

今日重点集中在 **多渠道适配** 与 **安全性补丁**。社区不仅修复了容器错误日志泄露用户 Prompt 的严重漏洞，还带来了 Signal、Discord、Email (OpenMail) 等多个新渠道的集成方案。此外，关于 Agent SDK 替换为 CLI 的架构重构讨论标志着项目可能正在经历底层调用的重大转变。

---

### 2. 版本发布

*   **无新版本发布**
    *   虽然有大量 PR 活动，但今日未观测到正式的 Release Tag 发布。推测项目正处于功能密集合并期，可能在为下一个 Minor 或 Major 版本做准备。

---

### 3. 项目进展

今日共有 **10 个 PR 被合并或关闭**，显著推进了项目的稳定性与功能边界：

*   **🛡️ 安全修复:** [PR #1191](https://github.com/qwibitai/nanoclaw/pull/1191) 已合并。修复了容器错误日志记录完整 `ContainerInput`（含用户 Prompt）的问题，防止敏感数据落盘或进入中央日志系统，关闭了高危 Issue #1150。
*   **🐧 Linux/VPS 体验优化:** [PR #651](https://github.com/qwibitai/nanoclaw/pull/651) 和 [PR #1281](https://github.com/qwibitai/nanoclaw/pull/1281) 已合并。前者将 Docker 停止超时从 10s 降至 1s，提升服务重启速度；后者修复了无头 Linux 服务器上浏览器启动静默失败的问题。
*   **🎤 新增技能:** [PR #1269](https://github.com/qwibitai/nanoclaw/pull/1269) 已合并。增加了 Telegram 语音消息转文字技能，通过本地 Whisper 服务支持语音交互。
*   **🛠️ 架构简化:** [PR #1268](https://github.com/qwibitai/nanoclaw/pull/1268) 已合并。涉及 Claude SDK 依赖的替换/重构，为后续架构调整铺路。

---

### 4. 社区热点

*   **🔥 架构重构争议:** [PR #1266](https://github.com/qwibitai/nanoclaw/pull/1266) 提出用 Claude Code CLI 替换 Agent SDK。这反映了对 TOS（服务条款）合规性的担忧，同时也可能改变 Agent 的调用延迟和控制粒度，是今日最具技术深度的讨论。
*   **💬 多渠道支持爆发:** 社区今日提交了多个渠道集成 PR，包括 [Signal (#1121)](https://github.com/qwibitai/nanoclaw/pull/1121)、[Discord Swarm (#1265)](https://github.com/qwibitai/nanoclaw/pull/1265) 和 [OpenMail (#1251)](https://github.com/qwibitai/nanoclaw/pull/1251)。这表明用户强烈希望将 NanoClaw 作为跨平台的统一 Agent 接入层。
*   **👀 Web 端替代方案:** [Issue #1273](https://github.com/qwibitai/nanoclaw/issues/1273) 提及了一个第三方实现的 Web Channel。这反映出部分用户对纯 IM（Telegram/WhatsApp）交互模式存在痛点，更习惯传统的 Web UI 操作。

---

### 5. Bug 与稳定性

*   **🔴 [已修复] 严重安全隐患 (Issue #1150):** 容器错误日志包含完整用户 Prompt。已在 [PR #1191](https://github.com/qwibitai/nanoclaw/pull/1191) 中修复，建议所有用户升级至最新主干代码。
*   **🟠 [OPEN] Git Hook 绕过风险 (Issue #1270):** 容器内的 Agent 仍可通过 `--no-verify` 绕过 Git Hooks。已提交 [PR #1271](https://github.com/qwibitai/nanoclaw/pull/1271) 尝试通过 `PreToolUse` Hook 阻止此行为，目前待合并。
*   **🟠 [OPEN] Telegram 数据库迁移错误 (Issue #1272):** 将 Telegram 私聊错误地标记为群组（`is_group=1`），可能导致私聊行为异常（如触发群组才有的欢迎语或逻辑）。
*   **🟡 [OPEN] Linux Systemd 支持 (Issue #413):** 在 SSH 环境下，Systemd 用户会话检测失败，直接回退到 `nohup`，导致服务管理不够优雅。这是一个长期存在的体验问题。

---

### 6. 功能请求与路线图信号

*   **API 统计与计费追踪:** [PR #1111](https://github.com/qwibitai/nanoclaw/pull/1111) 提出增加 API Usage 表，记录 Token 消耗和成本。随着 Agent 自主性增强，用量监控将成为刚需。
*   **OpenAI Codex 引擎支持:** [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) 试图引入 `AGENT_ENGINE=codex`。这表明社区希望 NanoClaw 不仅限于 Claude，而是成为通用的 Agent 容器编排框架。
*   **Telegram 表情反应:** [Issue #1282](https://github.com/qwibitai/nanoclaw/issues/1282) (已关闭，可能已实现或拒绝) 建议支持 Telegram 的 Emoji 反馈，让 Agent 显得更拟人化。

---

### 7. 用户反馈摘要

*   **部署痛点:** [Issue #413](https://github.com/qwibitai/nanoclaw/issues/413) 和 [PR #1281](https://github.com/qwibitai/nanoclaw/pull/1281) 暴露出在无显示器（Headless）的 Linux 服务器上部署仍有门槛，浏览器自动打开逻辑需优化。
*   **认证困惑:** [Issue #853](https://github.com/qwibitai/nanoclaw/issues/853) 显示用户对 `ANTHROPIC_AUTH_TOKEN` 和 `ANTHROPIC_API_KEY` 的区别感到困惑，Setup 流程需要更好的兼容性或提示。
*   **群组管理需求:** [Issue #1275](https://github.com/qwibitai/nanoclaw/issues/1275) 建议机器人被拉入新群组时应自动提示注册，而非静默忽略。这说明 NanoClaw 正从个人助手向团队协作工具演进。

---

### 8. 待处理积压

*   **⚠️ Skill 分支合并冲突:** 机器人自动发布的 [Issue #1279](https://github.com/qwibitai/nanoclaw/issues/1279) 及系列 Issues 显示，`skill/apple-container` 和 `skill/compact` 分支与主干存在持续合并冲突。这可能会阻碍相关技能的更新发布，需要维护者手动介入。
*   **🚧 凭证代理重构:** [PR #1237](https://github.com/qwibitai/nanoclaw/pull/1237) 提议用 OneCLI Gateway 替换内置的 Credential Proxy。这是一个较大的架构变动，目前处于 Open 状态，值得持续关注其对现有部署的影响。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-03-20)

**分析师**：AI Open Source Analyst
**项目**：nearai/ironclaw
**周期**：2026-03-19 (过去24小时)

---

## 1. 今日速览

IronClaw 今日迎来了重要的 **v0.20.0 版本发布**，标志着项目在自我修复能力和测试框架上迈出了关键一步。项目活跃度**极高**，过去24小时内共有 50 个 Issue 更新（关闭 37 个）和 50 个 PR 更新（合并/关闭 23 个），显示出维护团队正在高效地进行代码清理和功能迭代。Staging CI 自动化审查机器人表现抢眼，批量发现并推动了大量代码质量问题的修复。整体来看，项目正处于**快速迭代与稳定性加固并行**的阶段，社区贡献活跃，核心功能（如 Slack 集成、OAuth、LLM 路由）正在通过大型 PR 快速演进。

---

## 2. 版本发布

### **v0.20.0 (2026-03-19)**

最新的稳定版本已正式发布，主要聚焦于系统的**健壮性**和**可维护性**。

**更新亮点：**
*   **自我修复机制**：引入了 `stuck_threshold`（卡死阈值）、持久化存储及构建器模式，为 Agent 提供了自动检测并处理卡死状态的能力，大幅提升长时间运行任务的稳定性。
    *   *相关 PR*: [#712](https://github.com/nearai/ironclaw/pull/712)
*   **测试框架增强**：为 StubLlm 添加了 `FaultInjector`（故障注入器）框架，允许开发者在测试中模拟 LLM 故障场景，这对于验证 Agent 的重试和容错逻辑至关重要。
    *   *相关 PR*: [#1233](https://github.com/nearai/ironclaw/pull/1233)
*   **用户体验 (UX)**：网关设置页面进行了重构，增加了子标签页以统一配置入口，改善了管理界面的易用性。

---

## 3. 项目进展

今日共有 **23 个 PR 被合并或关闭**，主要集中在性能优化、Bug 修复以及 CI 自动化流程的改进上。

*   **性能优化 - Embedding 缓存**：随着 PR [#1423](https://github.com/nearai/ironclaw/pull/1423) 和 [#235](https://github.com/nearai/ironclaw/pull/235) 的推进（#235 已关闭，#1423 随后合并），项目引入了基于 LRU 的内存缓存机制。这解决了 Workspace 搜索中重复调用 Embedding 接口导致的性能瓶颈和成本问题。
*   **CI/CD 流程**：自动化发布流程 PR [#1424](https://github.com/nearai/ironclaw/pull/1424) 已合并，确保了 WASM 组件的校验和与版本 URL 能够随发版自动更新，减少了人工干预出错的可能。
*   **代码质量批量修复**：维护者提交了 [#1427](https://github.com/nearai/ironclaw/pull/1427)，针对 Staging CI 审查出的 50 个开放问题进行了分类和初步修复，整合了重试逻辑解析并修复了不稳定的测试用例。

---

## 4. 社区热点

今日讨论最热烈的话题集中在**部署兼容性**和**大型功能扩展**上。

1.  **升级阻碍**：
    *   Issue **[#1328](https://github.com/nearai/ironclaw/Issue/1328)** (👍 2): 升级至 v0.19.0 时出现 PostgreSQL 迁移校验和不匹配的问题。这引发了用户对数据库迁移策略的热烈讨论，表明用户非常关注升级路径的平滑性。
2.  **Slack 模式支持**：
    *   Issue **[#1155](https://github.com/nearai/ironclaw/Issue/1155)**: 用户呼吁支持 Slack "Socket Mode"，以便在不开放公网端口的情况下使用 Slack 集成。这直接催生了 PR [#333](https://github.com/nearai/ironclaw/pull/333) 的开发。
3.  **重量级功能 PR**：
    *   PR **[#1187](https://github.com/nearai/ironclaw/pull/1187)** (Adaptive Learning System): 这是一个巨大的功能性 PR，试图引入自适应学习、技能合成和会话搜索。虽然评论数未显示，但其体量和涉及的范围使其成为近期最受关注的核心功能演进。
    *   PR **[#744](https://github.com/nearai/ironclaw/pull/744)** (OpenAI Codex): 允许 ChatGPT 订阅用户直接使用 IronClaw，降低了用户的准入门槛。

---

## 5. Bug 与稳定性

今日 Bug 列表被 **Staging CI Review** 机器人大量占据，显示出项目采用了极为严格的自动化代码审查标准。以下是按严重程度筛选的关键问题：

### 🔴 Critical / High Severity
*   **[#1414](https://github.com/nearai/ironclaw/Issue/1414) [CRITICAL]**: Telegram 构件 URL 版本不匹配。这是一个发布流程中的阻断性问题，可能导致用户下载到错误版本的二进制文件。
*   **[#826](https://github.com/nearai/ironclaw/Issue/826) [HIGH]**: 常规工具循环中出现无界消息 Vec 增长。如果不加限制，会导致内存溢出（OOM）。
    *   *状态*: 已关闭 (推测已在 v0.20.0 中修复)。
*   **[#815](https://github.com/nearai/ironclaw/Issue/815) [HIGH]**: 用户提供的元数据绕过了 Token 预算验证。这是一个安全/资源滥用风险。
    *   *状态*: 已关闭。
*   **[#858](https://github.com/nearai/ironclaw/Issue/858) [HIGH]**: Secrets 凭证注入中存在 N+1 查询问题。这会严重影响涉及大量凭证场景下的响应速度。
    *   *状态*: 已关闭。

### 🟠 Medium Severity
*   **[#894](https://github.com/nearai/ironclaw/Issue/894)**: 字符串截断函数在短字符串时仍进行内存分配，属于微优化层面的性能问题。

> **分析师注**：绝大多数标记为 `staging-ci-review` 的 Issue（如 #816, #819, #871 等）在过去24小时内被批量关闭，这通常意味着相关修复 PR（如 #1427）已合并，代码质量防线正在有效运作。

---

## 6. 功能请求与路线图信号

综合今日的 Issue 和 PR，可以识别出以下明确的路线图信号：

1.  **多云/多平台 LLM 支持**：PR [#1356](https://github.com/nearai/ironclaw/pull/1356) (Gemini OAuth) 和 PR [#744](https://github.com/nearai/ironclaw/pull/744) (OpenAI Codex) 表明 IronClaw 正致力于成为**统一的 AI 网关**，消除不同 LLM 提供商之间的使用壁垒。
2.  **网络穿透与连接性**：PR [#1093](https://github.com/nearai/ironclaw/pull/1093) (Tunnel fixes) 和 PR [#333](https://github.com/nearai/ironclaw/pull/333) (Slack Socket Mode) 显示项目正在解决私有化部署中的网络连接痛点，致力于让 AI Agent 在任何网络环境下都能轻松接入。
3.  **细粒度权限控制**：PR [#1378](https://github.com/nearai/ironclaw/pull/1378) 提出的 "Per-channel MCP filtering"，暗示未来版本将支持更复杂的路由策略，即根据来源渠道（如 Slack vs Web）动态切换 AI 的能力范围。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼出的核心用户痛点：

*   **迁移恐惧**：用户对数据库迁移脚本的修改非常敏感（Issue #1328），任何对已有迁移文件的修改都会导致升级失败。**建议**：项目应严格遵循迁移脚本不可变原则，新增变更应通过新的迁移文件实现。
*   **内网部署需求**：对于 Slack Socket Mode 的强烈需求（Issue #1155）表明，IronClaw 的用户群中有相当一部分是企业级或注重隐私的用户，他们无法或不愿暴露公网端口。
*   **可见性需求**：Issue #1328 中用户反馈升级失败的具体报错信息虽然清晰，但预防措施不足。用户希望有更平滑的升级指南。

---

## 8. 待处理积压

虽然今日关闭了大量 Issue，但仍有几个长期开放的 PR 需要关注：

1.  **[#635](https://github.com/nearai/ironclaw/pull/635) [OPEN]**: 修复 Worker 中孤儿 tool_results 和并行合并问题。该 PR 由新贡献者提交，涉及核心 Worker 逻辑，虽然讨论活跃但尚未合并，可能需要更深入的核心维护者审查。
2.  **[#527](https://github.com/nearai/ironclaw/pull/527) [OPEN]**: CLI Logs v2。这个 PR 已经开放了近两周（创建于 03-04），似乎在 CI 和细节调整上遇到了阻碍，建议维护者确认是否卡在 Fork 权限问题上。

---
*报告生成时间: 2026-03-20*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-20 GitHub 数据生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 (2026-03-20)

## 1. 今日速览
LobsterAI 今日保持了**极高的开发与社区活跃度**，单日 Issues 互动量达 17 条，PR 更新高达 33 条，显示项目正处于快速迭代期。项目于昨日（3.19）发布了 `2026.3.19` 版本，重点升级了企业微信依赖与网关能力。然而，新版本引发了小范围的**升级回退与兼容性问题**（#500, #501），主要集中在 OpenAI 最新模型参数与 Windows 平台。社区方面，开发者积极响应了关于 **I18N（国际化）** 与 **暗黑模式** 的缺陷，并提交了多个高质量 PR 进行修复。整体来看，项目在功能扩展与稳定性打磨之间并行推进，但在多平台兼容性与升级体验上需加强测试。

## 2. 版本发布
### Release `2026.3.19`
- **发布时间**: 2026-03-19
- **更新摘要**:
  - **依赖升级**: 升级企业微信相关依赖 (PR #482)。
  - **网关优化**: 重启/启动逻辑优化 (PR #484)。
  - **文档更新**: 更新了关于 OpenClaw、i18n 及提交规范的文档。
- **破坏性变更/迁移注意**:
  - 无明确 Breaking Change 声明，但根据 Issues 反馈，Windows 升级可能存在配置丢失风险 (Issue #500)。

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，主要集中在稳定性修复与构建优化：

*   **核心修复**:
    *   **Windows 兼容性**: [PR #513](https://github.com/netease-youdao/LobsterAI/pull/513) 修复了工作目录设置在 Windows 盘符根目录（如 `D:\`）时的 `EPERM` 权限错误。
    *   **构建修复**: [PR #520](https://github.com/netease-youdao/LobsterAI/pull/520) 解决了 macOS 签名失败的问题。
    *   **网关守护**: [PR #528](https://github.com/netease-youdao/LobsterAI/pull/528) 修复了 Windows 端网关进程停止时的误重启问题。
*   **功能精简**: [PR #523](https://github.com/netease-youdao/LobsterAI/pull/523) 移除了沙箱功能（对应 Issue #496 的反馈）。

## 4. 社区热点
*   **OpenAI 模型兼容性危机** ([Issue #501](https://github.com/netease-youdao/LobsterAI/issues/501)): 用户报告最新版仍无法兼容 OpenAI 新模型，报错 `max_tokens` 不支持。这表明项目需紧跟 OpenAI API 规范变更，已有修复 PR ([PR #515](https://github.com/netease-youdao/LobsterAI/pull/515)) 提交。
*   **飞书/企微集成体验** ([Issue #521](https://github.com/netease-youdao/LobsterAI/issues/521)): 用户强烈希望飞书机器人支持像 Clawx 那样的实时流式返回，而非任务结束才推送，反映了即时通讯场景下的交互痛点。
*   **国际化 (I18N) 缺陷潮**: 多个 Issue ([#524](https://github.com/netease-youdao/LobsterAI/issues/524), [#531](https://github.com/netease-youdao/LobsterAI/issues/531)) 指出界面语言切换后存在大量硬编码中文未翻译，严重影响海外用户体验。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**兼容性**与**升级异常**，所幸社区响应迅速：

1.  **[Critical] OpenAI 参数不支持** ([Issue #501](https://github.com/netease-youdao/LobsterAI/issues/501))
    *   **现象**: 报错 `Unsupported parameter: 'max_tokens'`。
    *   **状态**: **已修复** ([PR #515](https://github.com/netease-youdao/LobsterAI/pull/515))，统一使用 `max_completion_tokens`。
2.  **[High] Windows 升级失败** ([Issue #500](https://github.com/netease-youdao/LobsterAI/issues/500))
    *   **现象**: 从 2.2 升级至 3.17 后无法运行，回退后正常，部分配置丢失。
    *   **状态**: 待确认，可能与路径处理 PR #513 相关。
3.  **[High] 会话卡死** ([Issue #446](https://github.com/netease-youdao/LobsterAI/issues/446))
    *   **现象**: 使用非 Anthropic 模型时界面冻住。
    *   **状态**: **已修复** ([PR #512](https://github.com/netease-youdao/LobsterAI/pull/512))，增加了空闲超时机制。
4.  **[Medium] 界面显示 NaN** ([Issue #318](https://github.com/netease-youdao/LobsterAI/issues/318))
    *   **现象**: 定时任务编辑后时间显示为 `nan:nan`。
    *   **状态**: **已修复** ([PR #517](https://github.com/netease-youdao/LobsterAI/pull/517))。

## 6. 功能请求与路线图信号
*   **双内核切换** ([Issue #497](https://github.com/netease-youdao/LobsterAI/issues/497)): 用户请求支持 OpenClaw 和 CoWorker 双内核自由切换。这表明用户对不同 Agent 执行引擎有差异化需求（如稳定性 vs 能力），可能成为下一阶段架构重构的重点。
*   **丰富的 Skills 扩展**: 社区正在积极贡献 Skills，如 [PR #538](https://github.com/netease-youdao/LobsterAI/pull/538) (二维码生成) 和 [PR #537](https://github.com/netease-youdao/LobsterAI/pull/537) (GitHub Profile 查询)，显示项目生态正在通过 Skills 机制自我繁衍。

## 7. 用户反馈摘要
*   **痛点**: "聊久了会复读机" (Issue #498)，暗示上下文管理或 Memory 机制可能存在死循环或提取错误。
*   **痛点**: "启动界面文案让人困惑" (Issue #519)，用户不理解 `Starting OpenClaw gateway...` 具体在做什么，建议优化文案引导。
*   **满意点**: 尽管有 Bug，用户提到 "你们其他都很好" (Issue #521)，对整体功能框架表示认可。

## 8. 待处理积压
*   **配置迁移问题** ([Issue #500](https://github.com/netease-youdao/LobsterAI/issues/500)): 虽然有相关 PR 合并，但升级导致配置丢失的问题仍需官方确认是否彻底解决。
*   **飞书流式响应** ([Issue #521](https://github.com/netease-youdao/LobsterAI/issues/521)): 目前仅是 Open 状态，涉及底层 IM 推送机制改造，可能需要较长时间规划。

---
*数据来源: GitHub netease-youdao/LobsterAI (2026-03-20)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-20)

**分析师摘要**：今日 TinyClaw 项目呈现出“低交互、高内部演进”的态势。虽然社区侧的 Issue 讨论沉寂，但核心开发活动依然活跃，主要集中在底层架构重构与前端体验优化两个关键维度。两个待合并的 PR 分别指向代码解耦和功能迭代，表明项目正处于架构优化期，为后续功能扩展铺路。

---

### 1. 今日速览
- **整体状态**：项目今日处于**中度活跃**状态，主要表现为代码层面的提交与更新，但缺乏社区互动。
- **活跃度评估**：Issue 为零，PR 活跃度为 2（均为 Open 状态），表明开发者在专注于代码产出，但社区反馈循环稍显滞后。
- **核心动向**：重点在于核心逻辑的适配器模式重构以及 Office 模块的体验重设计，显示出项目正在偿还技术债务并寻求功能突破。

### 2. 版本发布
- **无新版本发布**。建议关注正在进行的重构 PR 合并情况，这可能标志着下一个 Minor 版本的临近。

### 3. 项目进展
今日无代码合并记录，但有两个重要的功能分支正在推进：

- **架构解耦与重构**：PR [#242](https://github.com/TinyAGI/tinyagi/pull/242) 提议将 CLI 逻辑提取为适配器模式。这是一次重要的架构升级，旨在解决 `invoke.ts` 臃肿问题，通过标准化接口支持 Claude、Codex、OpenCode 等后端的即插即用。
- **功能体验升级**：PR [#212](https://github.com/TinyAGI/tinyagi/pull/212) 正在重设计 `/office` 实时工作空间。这表明项目正在探索多模态或协作办公场景的落地，试图提升用户在办公场景下的交互体验。

### 4. 社区热点
- **讨论冷清**：过去 24 小时内 Issues 为 0，PR 评论数为 undefined（推测为 0）。这表明项目目前主要由核心贡献者驱动，外部贡献者参与度较低。建议维护者在 PR 中增加上下文描述，以吸引社区 Review。

### 5. Bug 与稳定性
- **无新增 Bug 报告**：过去 24 小时未收到新的崩溃或回归问题报告，这可能意味着当前版本相对稳定，或者社区反馈渠道不够畅通。

### 6. 功能请求与路线图信号
- **模块化 CLI 后端**：从 PR [#242](https://github.com/TinyAGI/tinyagi/pull/242) 可以看出，项目正致力于成为**聚合型 Agent 网关**。未来路线图很可能包含“支持更多后端模型”和“统一 CLI 调用标准”。
- **沉浸式办公场景**：PR [#212](https://github.com/TinyAGI/tinyagi/pull/212) 释放出信号，TinyClaw 不仅仅是一个 CLI 工具，还在向 Web 端的实时协作或富交互应用方向探索。

### 7. 用户反馈摘要
- **数据缺失**：由于今日无 Issue 反馈，无法提炼用户痛点。但从 PR 动向反推，用户可能对现有的 `/office` 功能体验有更高期待，或对 CLI 的扩展性有潜在需求。

### 8. 待处理积压
- **需要关注的 PR**：
    - PR [#212](https://github.com/TinyAGI/tinyagi/pull/212)：已打开 7 天（创建于 03-13），今日更新。建议维护者尽快 Review 或合并，避免长周期分支造成的冲突风险。
    - PR [#242](https://github.com/TinyAGI/tinyagi/pull/242)：刚创建的重构 PR，涉及核心逻辑，需重点关注测试覆盖率，防止引入回归问题。

---
*以上数据基于 GitHub 2026-03-20 快照生成。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-20)

**分析师：** AI 智能体开源观察
**数据源：** github.com/moltis-org/moltis

---

### 1. 今日速览
Moltis 项目在过去 24 小时内保持了**中等活跃度**，社区交互主要体现在新问题的提出与功能扩展的代码贡献上。虽然今日无新版本发布且无 PR 被合并，但新增了 2 个待处理的 PR 和 2 个新 Issue，显示出持续的迭代动力。值得注意的是，平台在 Windows 环境下的稳定性及 Skill（技能）管理机制成为了今日的技术焦点。整体而言，项目处于稳步推进状态，但需关注 Bug 修复的合并进度以维护用户体验。

### 2. 版本发布
*   **无新版本发布**

### 3. 项目进展
今日虽无 PR 正式合并，但待处理队列中新增了关键的功能扩展与修复，预视了下一阶段的发展方向：

*   **生态扩展 - 新增 Novita AI 支持 ([PR #451](https://github.com/moltis-org/moltis/pull/451))**
    *   **详情：** 贡献者 `Alex-wuhu` 提交了集成 Novita AI 作为 LLM 提供商的 PR。
    *   **意义：** 该 PR 遵循 OpenAI 兼容标准，引入了 `kimi-k2.5`、`deepseek-v3.2` 等热门模型。这极大地扩展了用户在 Moltis 中选择低成本或高性能模型的空间，增强了平台的模型中立性和灵活性。

*   **跨平台修复 - Windows 文件锁问题 ([PR #436](https://github.com/moltis-org/moltis/pull/436))**
    *   **详情：** 贡献者 `vanduc2514` 针对 Windows 环境下的 `LockFileEx os error 5` 提出了修复方案，将 `append` 模式调整为 `write` + `seek` 组合。
    *   **意义：** 此修复旨在解决 Windows 用户在处理会话（Session）日志时可能遇到的文件占用冲突，对于提升 Moltis 在多操作系统下的兼容性至关重要。

### 4. 社区热点
今日社区讨论的焦点集中在工具检索功能的优化上：

*   **[Feature]: Tool search ([Issue #313](https://github.com/moltis-org/moltis/issues/313))**
    *   **数据：** 6 条评论，2 个 👍。
    *   **分析：** 这是一个长期活跃的 Enhancement 需求。随着 Moltis 集成的技能（Skills）越来越多，用户在众多工具中快速定位所需功能的痛点日益凸显。该 Issue 的持续活跃表明**工具管理和检索体验**将是提升 AI 智能体效率的关键一环，社区对此功能呼声较高。

### 5. Bug 与稳定性
今日新增一个较为隐蔽但对开发者体验影响较大的 Bug 报告：

*   **[High] Skills 安装静默失败/Bug ([Issue #452](https://github.com/moltis-org/moltis/issues/452))**
    *   **问题描述：** 当 Skill 的 `name` 不合法但 `slug` 合法时，文件会被解压到 `installed-skills`，但不会被写入 `skills-manifest.json`。
    *   **影响：** 导致 Skill 虽然存在于文件系统中却未被系统加载，且没有任何错误提示。这种"静默失败"极其难以排查，严重影响用户对 Skill 安装成功的判断。
    *   **状态：** 目前处于 Open 状态，尚无关联 Fix PR。

*   **[Medium] Windows 会话文件锁异常 ([Issue #434 相关](https://github.com/moltis-org/moltis/pull/436))**
    *   **状态：** 已有 [PR #436](https://github.com/moltis-org/moltis/pull/436) 提出修复方案，等待 Review 合并。

### 6. 功能请求与路线图信号
*   **模型负载均衡与架构优化 ([Issue #453](https://github.com/moltis-org/moltis/issues/453))**
    *   **诉求：** 用户 `thefortressentertainment-pixel` 提出了关于"管理型智能体（Manager Agent）"负载过重的问题，探讨是否应让其创建更多子智能体来分担业务压力。
    *   **路线图信号：** 这反映了部分高级用户正在将 Moltis 应用于复杂的**多智能体协作场景**。这暗示项目未来可能需要优化 Agent 编排逻辑，提供更细粒度的资源调度能力，而不仅仅是单一的任务执行。
*   **工具搜索 ([Issue #313](https://github.com/moltis-org/moltis/issues/313))**
    *   **预期：** 鉴于其活跃度，该功能极有可能被纳入近期的 Sprint 规划。

### 7. 用户反馈摘要
*   **痛点（Skill 开发）：** 用户 `ermaxinc` 在 Issue #452 中的反馈揭示了 Skill 开发中的元数据验证痛点。用户期望系统具备更强的容错或报错机制，而不是静默忽略。
*   **痛点（系统架构）：** Issue #453 指出了当前架构在应对大规模任务时，可能存在"管理者"单点瓶颈的问题，用户渴望更分布式的处理能力。
*   **需求（模型多样性）：** PR #451 的提交证明了社区对于集成最新、最强开源大模型（如 DeepSeek V3, Kimi K2.5）有着强烈的需求，希望 Moltis 能作为统一的接入网关。

### 8. 待处理积压
*   **关键 PR 等待合并：**
    *   [PR #436](https://github.com/moltis-org/moltis/pull/436) (Windows 文件锁修复)：已提交 6 天，目前仍在等待 Review。鉴于其解决了特定平台的阻塞性问题，建议维护者优先处理。
    *   [PR #451](https://github.com/moltis-org/moltis/pull/451) (Novita AI 支持)：作为功能增强，建议在通过测试后尽快合并，以丰富模型生态。

---
*以上内容基于 GitHub 追踪数据自动生成，分析结论仅供参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-20)

## 1. 今日速览
CoPaw 项目今日迎来重要里程碑，正式发布了 **v0.1.0** 正式版以及 **v0.1.0-beta.4**，标志着项目从早期的测试阶段迈向稳定可用阶段。社区活跃度空前高涨，过去24小时内 Issues 更新高达 50 条，其中新开/活跃议题 33 条，已关闭 17 条，显示出维护团队高效的响应速度。同时，PR 更新也达到 50 条，其中 20 条待合并，30 条已合并/关闭，开发迭代速度极快。整体来看，项目正处于功能完善与生态扩展的加速期，但也面临着版本升级带来的阵痛与用户反馈的挑战。

## 2. 版本发布
今日发布两个重要版本，详细更新如下：

*   **v0.1.0 (正式版)**
    *   **链接**: [Release v0.1.0](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0)
    *   **核心更新 (Added)**:
        *   **架构升级**: 引入 **Multi-Agent / Multi-Workspace 架构**。支持同时运行多个 Agent，每个 Agent 拥有独立的工作空间（包含隔离的配置、记忆、技能和工具），并配备控制台 Agent 选择器以便在多 Agent 间轻松切换 ([#13](https://github.com/agentscope-ai/CoPaw/pull/13))。
    *   **迁移注意**: 这是一个重大架构变更，建议用户在升级前备份旧版配置文件，并根据新版文档调整多工作空间设置。

*   **v0.1.0-beta.4**
    *   **链接**: [Release v0.1.0-beta.4](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.4)
    *   **功能增强**: 支持控制台多模态消息，允许上传图片和文件 ([#1772](https://github.com/agentscope-ai/CoPaw/pull/1772))。
    *   **Bug 修复**: 修复了 `model_factory` 中 `create_local_chat_model` 的导入错误 ([#1784](https://github.com/agentscope-ai/CoPaw/pull/1784))。

## 3. 项目进展
今日共有 **30 个 PR 被合并或关闭**，项目在架构重构、稳定性修复和功能扩展方面取得了实质性进展：

*   **版本迭代与重构**: 完成了 v0.1.0 正式版和 v0.1.0-beta.4 的版本号更新与 Release Note 发布 ([#1880](https://github.com/agentscope-ai/CoPaw/pull/1880), [#1870](https://github.com/agentscope-ai/CoPaw/pull/1870))。
*   **功能增强**:
    *   优化了 Agent 工具结果压缩的配置逻辑，引入了更细粒度的保留策略 ([#1867](https://github.com/agentscope-ai/CoPaw/pull/1867))。
    *   移除了媒体路径验证逻辑及相关警告，简化了消息处理流程 ([#1879](https://github.com/agentscope-ai/CoPaw/pull/1879))。
    *   更新了 README 中的控制台界面截图 ([#1872](https://github.com/agentscope-ai/CoPaw/pull/1872))。
*   **待合并重要 PR (Open)**:
    *   **频道路由**: PR [#1889](https://github.com/agentscope-ai/CoPaw/pull/1889) 提出支持将消息根据规则路由给不同 Agent，实现单通道服务多 Agent。
    *   **本地记忆嵌入**: PR [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) 增加了对本地嵌入模型的支持，解决隐私和离线使用痛点。
    *   **错误重试**: PR [#1891](https://github.com/agentscope-ai/CoPaw/pull/1891) 建议增加 HTTP 529 状态码重试，应对服务端过载。

## 4. 社区热点
今日社区讨论主要集中在旧版功能缺失、配置困惑以及新版升级后的兼容性问题：

1.  **QQ 频道私信支持** ([Issue #1641](https://github.com/agentscope-ai/CoPaw/issues/1641)): 用户强烈希望支持 QQ 频道中的机器人私信处理，目前 CoPaw 仅基于聊天子频道，无法处理直接私信。这反映了用户在特定社交平台集成上的迫切需求。
2.  **IP 白名单配置困惑** ([Issue #275](https://github.com/agentscope-ai/CoPaw/issues/275)): 多位用户对 QQ 配置中的 IP 白名单具体指向（服务器 IP 还是客户端 IP）感到困惑，文档说明亟待完善。
3.  **项目活跃度质疑** ([Issue #1846](https://github.com/agentscope-ai/CoPaw/issues/1846)): 有用户因一周未看到更新而担心项目停止维护。虽然这是误解（可能是版本发布前的沉寂期），但反映出用户对项目透明度和持续更新非常敏感。
4.  **多 Agent 协作需求** ([Issue #153](https://github.com/agentscope-ai/CoPaw/issues/153)): 用户呼吁原生支持多 Agent 协作，包括子 Agent 创建、通信和并行执行。这与今日发布的 v0.1.0 架构升级方向高度一致，显示出核心团队对社区声音的积极响应。

## 5. Bug 与稳定性
随着新版本的发布，部分升级问题凸显，同时一些底层 Bug 仍待解决：

*   **高危**:
    *   **升级导致 Context 超限** ([Issue #1873](https://github.com/agentscope-ai/CoPaw/issues/1873)): 用户升级到 v0.1.0b3 后报错 `context window exceeds limit`，严重影响使用。尚无 Fix PR。
    *   **任务执行卡死** ([Issue #1827](https://github.com/agentscope-ai/CoPaw/issues/1827)): v0.1.0b3 版本在执行任务时出现卡死现象。尚无 Fix PR。
*   **中危**:
    *   **CPU 占用异常** ([Issue #1774](https://github.com/agentscope-ai/CoPaw/issues/1774)): 内存压缩钩子陷入死循环导致 CPU 100% 占用。
    *   **模型配置丢失** ([Issue #1877](https://github.com/agentscope-ai/CoPaw/issues/1877)): v0.1.0b3 界面缺失模型配置选项。
    *   **飞书通道报错** ([Issue #1770](https://github.com/agentscope-ai/CoPaw/issues/1770), [#1786](https://github.com/agentscope-ai/CoPaw/issues/1786)): 升级后飞书通道出现登录错误或无响应。
*   **已有修复 PR 的 Bug**:
    *   ReMe 记忆摘要时区问题 ([PR #1814](https://github.com/agentscope-ai/CoPaw/pull/1814))。
    *   BGE-M3 嵌入模型兼容性 ([PR #1780](https://github.com/agentscope-ai/CoPaw/pull/1780))。

## 6. 功能请求与路线图信号
*   **多 Agent 协作**: 随着 v0.1.0 的发布，多工作空间已落地。下一步可能集中在 Agent 间通信和并行任务调度的优化上 ([Issue #153](https://github.com/agentscope-ai/CoPaw/issues/153))。
*   **本地模型与隐私**: 对本地嵌入模型的支持 ([PR #1789](https://github.com/agentscope-ai/CoPaw/pull/1789)) 和对 HTTP 529 错误的重试 ([PR #1891](https://github.com/agentscope-ai/CoPaw/pull/1891)) 显示出项目正在加强对自托管和稳定性的支持。
*   **通道扩展**: 社区对更多社交平台（如 QQ 频道私信）和现有平台（飞书、钉钉）的深度集成需求强烈，预计未来版本将继续增强 Channel 层的能力。

## 7. 用户反馈摘要
*   **痛点**: 版本升级带来的破坏性变更（如配置文件不兼容、界面变动）是当前最大的痛点。用户在连接本地模型（Ollama, Qwen）时仍常遇到连接或配置错误。
*   **满意点**: 用户对 Multi-Agent 架构表示期待，认为这是迈向复杂 AI 工作流的关键一步。控制台的多模态支持也获得了好评。
*   **场景**: 用户主要在个人助理、开发调试（Vscode 联动）、企业通讯（飞书/钉钉机器人）等场景使用 CoPaw。

## 8. 待处理积压
*   **Discord 语音消息 Bug** ([Issue #902](https://github.com/agentscope-ai/CoPaw/issues/902)): 自 03-07 报告以来，关于 `ogg` 格式不支持的问题仍未解决，影响了语音交互体验。
*   **自定义模型添加逻辑** ([Issue #1833](https://github.com/agentscope-ai/CoPaw/issues/1833)): 用户反馈智谱、OpenRouter 等自定义模型添加时的连通性判断逻辑存在问题，导致无法正常使用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是根据 ZeptoClaw 项目 2026-03-20 的 GitHub 数据生成的动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-03-20)

### 1. 🏄‍♂️ 今日速览
ZeptoClaw 项目今日维持中等程度的开发活跃度，核心关注点集中在 **Agent Client Protocol (ACP)** 的协议修正与生态扩展。虽然今日无代码合并或版本发布，但有 **3 个关键 PR** 处于待合并状态，显示出社区正在积极集成新提供商和开发工具。值得注意的是，刚合并的 ACP HTTP 实现已被发现存在协议级缺陷，社区迅速响应并开设了修复 Issue。整体来看，项目正处于功能快速迭代后的修整与纠错阶段。

### 2. 🚀 版本发布
*   **无新版本发布**。

### 3. 🛠️ 项目进展
尽管今日无 PR 合并，但以下待合并的 Pull Requests 标志着项目正在进行重要的功能性扩展和工程化建设：

*   **[PR #390](https://github.com/qhkm/zeptoclaw/pull/390) 集成 Novita AI 提供商**：
    *   新增了对 **Novita AI** 作为 LLM 提供商的支持，遵循现有的 OpenAI 兼容模式。这扩展了 ZeptoClaw 在模型推理侧的灵活性，允许用户通过环境变量快速接入 Novita 的 API。
*   **[PR #287](https://github.com/qhkm/zeptoclaw/pull/287) 开发工具链标准化**：
    *   旨在提供一致的本地开发/测试环境，确保 `cargo test` 和 `clippy` 检查在 PR 提交前的一致性。这是提升项目工程健康度、减少 CI 噪音的重要步骤。
*   **[PR #356](https://github.com/qhkm/zeptoclaw/pull/356) ACP 协议实现**：
    *   虽然此 PR 已经引入了 ACP stdio 和 HTTP 的实现，但正如 Issue #388 指出的那样，部分实现细节正在接受社区审视。

### 4. 🔥 社区热点
今日讨论最活跃的焦点是关于 **ACP 协议实现的安全性** 问题：

*   **[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388) bug(channels): fix ACP HTTP initialize and notification semantics**
    *   **状态**: Open | **评论**: 2
    *   **分析**: 该 Issue 精准指出了 PR #356 中引入的两个潜在安全隐患：一是 `initialize` 握手标志位被全局存储，导致后续客户端可能绕过认证；二是 HTTP 通知不应包含响应体。这种对协议语义的严格把控，反映了社区对核心通信层安全性的高度重视。

### 5. 🐛 Bug 与稳定性
今日报告了一个中等严重程度的协议逻辑 Bug：

*   **🟠 中等: ACP HTTP 初始化与通知语义错误**
    *   **链接**: [Issue #388](https://github.com/qhkm/zeptoclaw/issues/388)
    *   **详情**: 源于近期引入的 ACP HTTP 功能（PR #356）。主要问题在于初始化状态的全局共享可能导致未授权访问，以及 HTTP 通知响应格式的错误。
    *   **修复状态**: **暂无关联的 Fix PR**。鉴于 PR #356 尚处于 Open 状态或刚刚合并，建议优先在 PR #356 或新的 Fix PR 中解决此问题，以免污染主分支。

### 6. 🗺️ 功能请求与路线图信号
*   **模型生态扩展**: [PR #390](https://github.com/qhkm/zeptoclaw/pull/390) 表明项目正致力于兼容更多非标准的 OpenAI-compatible API，这符合 ZeptoClaw 作为 "AI 智能体网关" 的定位。
*   **协议标准化**: Issue #388 关于 ACP 协议的讨论暗示了项目路线图中，**多客户端并发支持**和**严格的安全握手**将成为接下来的重点优化方向。

### 7. 📢 用户反馈摘要
从 Issue #388 的讨论中可以看出，核心贡献者和用户对 **Agent Client Protocol (ACP)** 的实现细节非常敏感。他们不仅关注功能是否可用，更关注是否符合协议规范，特别是在多客户端并发场景下的行为一致性。这表明 ZeptoClaw 的用户群体具有较高的技术素养，倾向于将其用于生产环境，因此对连接稳定性和安全性有硬性要求。

### 8. 📥 待处理积压
*   **[PR #287](https://github.com/qhkm/zeptoclaw/pull/287) (Dev tools)**: 该 PR 已创建约 10 天，建议维护者尽快审查并合并，以统一贡献者的开发环境，减少后续 PR 的维护成本。
*   **[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388) (ACP Bug)**: 此 Bug 涉及核心通道的安全性，建议作为最高优先级处理，避免在下一个版本中引入回归问题。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-20)

**分析师**：AI Open Source Analyst
**项目**：EasyClaw (gaoyangz77/easyclaw)
**数据周期**：2026-03-19 ~ 2026-03-20

---

### 1. 今日速览
EasyClaw 今日保持着**高强度的开发迭代节奏**，随着 **v1.7.2 (RivonClaw)** 的正式发布，项目完成了重大的 UI 架构重构与功能增强。社区方面，开发者在 24 小时内快速响应并关闭了社群相关的 Issue，同时发起了 2 个全新的 UI 优化 PR，显示出维护团队正在积极推进用户体验（UX）的精细化打磨。整体来看，项目处于**功能扩展与体验优化并行的健康上升期**。

### 2. 版本发布
**[New Release] v1.7.2: RivonClaw v1.7.2**
此次更新是一个重要的里程碑版本，涉及架构层面的调整，建议所有用户升级。

*   **UI 架构重构**：完成了组件级重构与主题分离，重新设计了技能页面，提升了界面的可维护性与视觉一致性。
*   **功能增强**：
    *   **认证系统**：引入基于验证码的认证机制，并集中管理默认设置。
    *   **渠道管理**：新增 Channel group-allow-from 编辑器，账户配置现已支持 SQLite 后端存储。
    *   **开发者支持**：重构 Plugin SDK，加入国际化品牌支持。
*   **迁移注意事项**：由于涉及 UI 组件重构和设置管理的变更，建议开发者检查自定义主题或插件是否存在兼容性问题。

🔗 **链接**：[Releases v1.7.2](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.2)

### 3. 项目进展
今日共有 1 个关键 PR 被合并，直接促成了 v1.7.2 的发布；同时有 2 个新的 PR 正在审核中，预示着下个版本的方向。

*   **✅ [MERGED] UI Migration & Refactor (#20)**
    *   **内容**：这是 v1.7.2 发布的核心驱动力。合并了侧边栏底部操作按钮的组件化提取、图标系统统一以及主题分离逻辑。
    *   **意义**：极大提升了代码的模块化程度，为后续的 UI 扩展（如账户弹窗）奠定了基础。
    *   🔗 **链接**：[PR #20](https://github.com/gaoyangz77/rivonclaw/pull/20)

*   **🟢 [OPEN] feat(ui): redesign auth modal & account page (#23)**
    *   **内容**：对认证模态框进行了现代化重设计（药丸切换器、密码强度条、验证码行优化），并重新规划了账户页面的卡片布局。
    *   🔗 **链接**：[PR #23](https://github.com/gaoyangz77/rivonclaw/pull/23)

*   **🟢 [OPEN] Account UI redesign popover (#24)**
    *   **内容**：旨在移除独立的 /account 导航页，改为点击头像后的 Popover 下拉菜单，包含用户信息卡片和登出功能。
    *   🔗 **链接**：[PR #24](https://github.com/gaoyangz77/rivonclaw/pull/24)

### 4. 社区热点
今日社区活跃度适中，主要集中在功能咨询与社群建立。

*   **🔥 [DISCUSSION] 社群交流 (#12)**
    *   **状态**：已关闭
    *   **详情**：用户 `Geekbruce` 对 EasyClaw 的架构设计表示高度认可，并询问是否有技术交流群。该 Issue 在 24 小时内得到响应并关闭，推测维护者可能已通过其他渠道（如邮件或引导至 Discussions）解决了用户的社群入群需求。
    *   **链接**：[Issue #12](https://github.com/gaoyangz77/rivonclaw/issues/12)

### 5. Bug 与稳定性
*   **✅ 状态良好**：过去 24 小时内未收到新的 Bug 报告或崩溃反馈。v1.7.2 的发布似乎并未引入明显的回归问题，显示出测试流程较为稳健。

### 6. 功能请求与路线图信号
通过 Issue #22 和最新的 PR 动向，可以看出项目接下来的演进路径：

*   **🆕 功能咨询：多浏览器模式定义 (#22)**
    *   **用户诉求**：用户 `slowayear` 对“多浏览器”功能的定义感到困惑，询问是指多用户隔离还是多平台同步，并关注登录状态的影响。
    *   **信号**：这表明用户对**数据同步**和**身份隔离**有明确需求。若该功能尚未完善文档，建议团队在 README 或 Wiki 中补充相关说明。
    *   **链接**：[Issue #22](https://github.com/gaoyangz77/rivonclaw/issues/22)

*   **🚀 路线图预测**：
    结合 PR #23 和 PR #24 判断，下一版本将重点**重构账户系统与用户交互流程**。传统的独立账户页面可能被更灵活的 Popover 交互取代，登录/注册体验将更加现代化。

### 7. 用户反馈摘要
*   **架构认可**：用户 `Geekbruce` 反馈项目架构非常符合预期，这是一个强力的正面信号，表明项目的技术选型和结构设计具有吸引力。
*   **认知负荷**：关于“多浏览器”功能的疑问反映出用户在面对复杂功能时，缺乏清晰的上下文引导或文档说明。

### 8. 待处理积压
*   **⚠️ 需关注**：目前开放的 PR (#23, #24) 均由同一贡献者 `chinayin` 在昨日集中提交，目前处于待审核状态。建议维护者尽快介入 Review，以保持贡献者的积极性并推进 UI 迭代进度。
*   **⚠️ 文档待完善**：针对 Issue #22 提出的概念性疑问，建议将其转化为文档更新任务，避免重复解释。

---
*以上日报基于 GitHub 公开数据由 AI 自动生成。*

</details>