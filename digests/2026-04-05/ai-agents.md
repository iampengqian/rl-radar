# OpenClaw 生态日报 2026-04-05

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-04 22:03 UTC

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

# OpenClaw 项目动态日报 (2026-04-05)

## 1. 今日速览
OpenClaw 项目今日继续保持**极高的活跃度**，过去 24 小时内 Issues 和 PRs 的更新量均达到 **500 条**。虽然今日无新版本发布，但社区反馈强烈，共发起了 **279 个新 Issue**，同时关闭了 **221 个**，显示出维护团队正在积极消化反馈。PR 方面有 **288 个处于待合并状态**，显示出强劲的开发动力。今日焦点主要集中在 **国际化支持（i18n）的呼声**、**MCP 客户端的原生支持请求** 以及 **v2026.3.x 版本引入的多个回归问题（Regression）**，尤其是涉及 Discord、Exec 工具和认证相关的稳定性问题。

## 2. 版本发布
**无新版本发布。** 当前社区主要关注点在于修复近期版本（特别是 v2026.3.31）引入的回归问题。

## 3. 项目进展
尽管没有发布新版本，今日仍有 **212 个 PR 被合并或关闭**，重点修复了多个用户体验和稳定性问题：

*   **用户体验优化**：
    *   合并了 [PR #60394](https://github.com/openclaw/openclaw/pull/60394)，优化了 Control UI 中 Cron 刷新按钮的加载样式，解决了用户误以为页面未更新的困惑。
    *   合并了 [PR #56924](https://github.com/openclaw/openclaw/pull/56924)，修复了 Overview 页面在窄屏下布局重叠的问题。
*   **浏览器兼容性修复**：
    *   合并了 [PR #60682](https://github.com/openclaw/openclaw/pull/60682)，移除了 `fromSurface: false` 参数以兼容 Chrome 146+ 的截图功能，解决了 "Unable to capture screenshot" 错误。
*   **关键 Bug 修复**：
    *   合并了 [PR #60778](https://github.com/openclaw/openclaw/pull/60778)，修复了 Avatar 头像源解析逻辑，现在能正确读取 `ui.assistant.avatar` 配置。
    *   合并了 [PR #61045](https://github.com/openclaw/openclaw/pull/61045)，修复了 WhatsApp 频道的自我消息无限回复循环问题。

## 4. 社区热点
今日社区讨论最热烈的话题集中在功能扩展和跨平台支持上：

*   **[Issue #3460](https://github.com/openclaw/openclaw/issues/3460) [enhancement] Internationalization (i18n) & Localization Support**
    *   **热度**：评论 119 条 | 👍 7
    *   **分析**：这是今日讨论度最高的话题。社区强烈希望能将 OpenClaw 推广到非英语国家。维护者表示目前**没有足够的带宽（bandwidth）**来支持多语言，这引发了大量用户讨论如何贡献翻译或分叉实现的方案。
*   **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [enhancement, help wanted] Linux/Windows Clawdbot Apps**
    *   **热度**：评论 69 条 | 👍 67
    *   **分析**：作为第二热门的 Issue，用户迫切希望官方能提供 Linux 和 Windows 原生客户端，目前仅有 macOS 和移动端支持。这表明 OpenClaw 在开发者群体中有很大的桌面端跨平台需求。
*   **[Issue #29053](https://github.com/openclaw/openclaw/issues/29053) [Feature Request] MCP Client: Native support**
    *   **热度**：评论 14 条 | 👍 16
    *   **分析**：随着 MCP (Model Context Protocol) 逐渐成为行业标准，用户希望 OpenClaw 能原生支持连接外部 MCP 服务器，而不仅仅是使用内置的工具系统，以实现更好的生态互通。

## 5. Bug 与稳定性
今日报告了大量 Bug，且多集中在 **v2026.3.31** 版本引入的回归问题上，显示出近期版本的稳定性有所波动。

*   **严重/阻断性问题**：
    *   **[Issue #53959](https://github.com/openclaw/openclaw/issues/53959) [Bug]: GPT-5.3-codex 更新后停止执行任何工具**
        *   **现状**：更新至 2026.3.23-2 后，Agent 确认请求但不执行工具。**暂无修复 PR**。
    *   **[Issue #59085](https://github.com/openclaw/openclaw/issues/59085) [Security] @openclaw/matrix 插件发现危险代码模式**
        *   **现状**：官方已阻止该插件安装，涉及凭证窃取风险。**已关闭处理**。
*   **功能回归**：
    *   **[Issue #59330](https://github.com/openclaw/openclaw/issues/59330) [Bug]: Control UI Raw mode 永久禁用**
        *   **现状**：Config 编辑器强制仅显示 Form 模式。
        *   **修复进度**：已有修复 PR [PR #59336](https://github.com/openclaw/openclaw/pull/59336) 提交，等待合并。
    *   **[Issue #58941](https://github.com/openclaw/openclaw/issues/58941) [Bug]: Discord exec approvals 停止工作**
        *   **现状**：v2026.3.31 导致 Discord 上的执行批准流程失效。**暂无修复 PR**，需回滚至 3.28 版本。
    *   **[Issue #31583](https://github.com/openclaw/openclaw/issues/31583) [Bug]: exec tool 不继承环境变量**
        *   **现状**：Skills 配置的 secrets 无法传递给 exec 子进程。**暂无修复 PR**。
*   **用户体验问题**：
    *   **[Issue #59510](https://github.com/openclaw/openclaw/issues/59510) [Feature]: Simplify exec approval process**：用户抱怨当前的命令批准流程过于繁琐，每个命令都需要单独授权。

## 6. 功能请求与路线图信号
从 Issues 和活跃的 PRs 来看，未来的路线图可能包含以下内容：

*   **MCP 原生支持** ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053))：社区呼声高，符合 AI Agent 互联趋势。
*   **自适应记忆管理** ([Issue #59095](https://github.com/openclaw/openclaw/issues/59095))：提议内置分层记忆架构，这可能成为 OpenClaw 的核心差异化功能。
*   **执行上下文降级模式** ([PR #60984](https://github.com/openclaw/openclaw/pull/60984))：正在开发中，旨在当模型回退（fallback）到较小模型时能自动调整上下文，防止错误。这是一个重要的鲁棒性改进。
*   **i18n 基础设施**：尽管官方表示目前无力支持，但鉴于 Issue #3460 的热度，社区可能会推动第三方翻译方案的标准化。

## 7. 用户反馈摘要
*   **痛点：认证与配置繁琐**：多位用户在 [Issue #44851](https://github.com/openclaw/openclaw/issues/44851) 和 [Issue #29348](https://github.com/openclaw/openclaw/issues/29348) 中反映第三方模型（如 Kimi）或 Google 认证的配置过程容易出错，且插件更新后配置丢失。
*   **痛点：版本更新导致功能不可用**：用户对近期频繁的 Regression（回归问题）感到沮丧，特别是 Discord 和 Exec 工具相关功能的失效 ([Issue #58941](https://github.com/openclaw/openclaw/issues/58941), [Issue #53959](https://github.com/openclaw/openclaw/issues/53959))。
*   **满意：快速响应**：在 [Issue #59085](https://github.com/openclaw/openclaw/issues/59085) 中，用户对官方迅速封禁存在安全隐患的 Matrix 插件表示认可。

## 8. 待处理积压
以下重要 Issue 长期未解决或未被合并，建议维护者关注：

*   **[Issue #40631](https://github.com/openclaw/openclaw/issues/40631) Recurring execution stall**：Agent 确认任务但无实际动作的“假启动”问题，每月发生 1-2 次，难以复现但严重影响自动化信任度。
*   **[PR #46303](https://github.com/openclaw/openclaw/pull/46303) fix: drain inbound debounce buffer...**：一个大型 PR，旨在解决 SIGUSR1 重载导致的消息丢失问题，涉及多个频道的缓冲区处理，由于改动较大一直处于 Open 状态。
*   **[Issue #17890](https://github.com/openclaw/openclaw/issues/17890) macOS app: Skill binary detection...**：macOS 客户端无法识别 Homebrew 安装的二进制文件，影响 Apple Silicon 用户的 Skill 使用体验。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-04-05)

## 1. 生态全景
2026 年 4 月的 AI 智能体开源生态呈现出**应用层快速膨胀与底层架构解耦**并行的态势。**MCP (Model Context Protocol)** 已成为连接工具与外部世界的既定标准，各项目均在争相实现原生支持。随着 GPT-5 等新模型的发布，**多运行时架构** 正在取代单一后端模式，旨在解耦对特定大模型厂商的强依赖。此外，**内存管理** 和 **沙箱安全** 正成为区分“玩具项目”与“生产级应用”的分水岭。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues | 今日 PRs | 版本发布 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 279 (新) | 288 (待合并) | 无 | ⚠️ 波动 | 回归问题、i18n、MCP 支持 |
| **NanoBot** | 14 | 23 | 无 | ✅ 高 | 内存重构、GPT-5 适配、SSRF 防护 |
| **NanoClaw** | 高 (多热点) | 21 | 无 | 🚀 极高 | 多运行时、OAuth 计费、容器安全 |
| **IronClaw** | 16 | 44 | 无 | 🔥 热烈 | Engine v2、K8s 支持、OAuth 故障 |
| **LobsterAI** | 6 | 15 | 无 | 🛡️ 稳健 | UX 修复、数据防丢失、多 Agent |
| **CoPaw** | 23 | 12 | v1.0.2b1 (预) | 📈 上升 | WhatsApp/QQ 集成、CPU 空转 |
| **Moltis** | 6 | 2 | 无 | 🔄 迭代 | Provider 管理、MCP HTTP、Proxy |
| **TinyClaw** | - | - | - | 💤 静默 | - |
| **ZeptoClaw** | - | - | - | 💤 静默 | - |
| **EasyClaw** | - | - | - | 💤 静默 | - |

> *注：OpenClaw 虽活跃度极高，但大量 Issue 源于近期版本的回归问题，处于“高负载修复”状态；NanoClaw 与 IronClaw 则处于“功能激进开发”阶段。*

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照系**，OpenClaw 拥有最庞大的用户基数和最广泛的渠道覆盖。

*   **优势**：
    *   **生态广度**：拥有最成熟的插件和渠道生态。
    *   **社区规模**：Issue 讨论量（如 i18n）远超其他项目，具备极强的网络效应。
*   **劣势与挑战**：
    *   **稳定性波动**：v2026.3.x 版本引入了大量回归问题（Discord、Exec 工具故障），显示出快速迭代下的质量控制压力。
    *   **跨平台短板**：缺乏原生的 Linux/Windows 客户端，这在开发者群体中是一个明显的痛点，导致部分用户流向 NanoBot。
*   **技术路线差异**：OpenClaw 目前更侧重于**功能的广度与国际化**，而 NanoBot/IronClaw 则更侧重于**底层架构的现代化（如内存重构、K8s 支持）**。

## 4. 共同关注的技术方向

通过对各项目 Issue 和 PR 的聚类分析，以下三个技术方向正在形成行业共识：

1.  **MCP (Model Context Protocol) 原生支持**
    *   **涉及项目**：OpenClaw (#29053), Moltis (#555), IronClaw。
    *   **趋势**：智能体不再满足于内置工具，而是急需通过标准协议连接外部 MCP 服务器，实现能力的无限扩展。

2.  **上下文与记忆管理**
    *   **涉及项目**：NanoBot (#2717 "Dream" 机制), OpenClaw (#59095 自适应记忆)。
    *   **趋势**：随着对话变长，简单的滑窗截断已无法满足需求。分层记忆（短期/长期）和自动整理（Dreaming/Consolidation）成为解决 Context Overflow 和 Token 成本的关键。

3.  **多运行时与模型解耦**
    *   **涉及项目**：NanoClaw (OpenCode/Codex PR), IronClaw (v2 Engine), OpenClaw (GPT-5 问题)。
    *   **趋势**：受限于单一厂商（如 Anthropic）的封禁风险或计费策略变更（NanoClaw #1620），社区强烈要求支持多模型切换和 OpenAI SDK 兼容。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot / NanoClaw | IronClaw | LobsterAI / CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | 通用型个人助手 | **稳定性与架构先进性** | **企业级/去中心化安全** | **特定场景/区域优化** |
| **目标用户** | 普通用户 & 极客 | 开发者 & 技术极客 | 企业开发者 & Web3 用户 | 国内企业/IM 重度用户 |
| **架构特征** | 插件化能力强 | 内存管理精细 | 引擎 v2, WASM/K8s 探索 | 前端交互优化 |
| **独特卖点** | 社区庞大，渠道全 | Windows 稳定性极佳 | 硬件级安全/ZK 证明探索 | 深度适配飞书/钉钉/QQ |

*   **NanoBot** 在稳定性上口碑突出，特别是解决了 Windows 下的常见崩溃问题。
*   **IronClaw** 正在尝试引入 K8s 和 ZK 证明，试图解决 Agent 在生产环境中的隔离与信任问题。
*   **LobsterAI** 和 **CoPaw** 专注于特定 IM 平台（如微信、QQ、飞书）的深度集成，解决了国内环境的特殊需求。

## 6. 社区热度与成熟度

*   **成熟期（维护为主）**：**OpenClaw**。虽然活跃度最高，但主要精力在于修复回归 Bug 和维持社区运转，架构变动趋于保守。
*   **快速成长期（激进迭代）**：**NanoClaw, IronClaw, NanoBot**。这三个项目正在进行大规模的架构重构（如内存系统、多运行时），PR 合并频繁，功能边界扩张极快。
*   **细分领域深耕期**：**CoPaw, LobsterAI, Moltis**。专注于特定的渠道集成（WhatsApp/QQ）或特定功能（Provider 管理），服务于特定的长尾需求。

## 7. 值得关注的趋势信号

1.  **OAuth 认证的风险警示**：
    *   NanoClaw 和 IronClaw 均报告了 OAuth 相关的严重问题（计费变更、连接失败）。这预示着**第三方客户端正在面临厂商（如 Anthropic/Google）的合规挤压**。建议开发者在设计架构时，优先考虑标准的 API Key 或自托管网关，减少对 OAuth 的依赖。
2.  **从“工具调用”到“工作流编排”**：
    *   LobsterAI (#1462) 和 CoPaw (#2922) 的用户都在呼吁“多 Agent 协作”和“Manager 模式”。用户不再满足于单打独斗的 Chatbot，而是希望看到能够自主调度专家 Agent 的**编排系统**。
3.  **本地执行的安全边界**：
    *   NanoClaw 曝光的容器逃逸风险和 IronClaw 对 WASM/K8s 的探索表明，随着 Agent 权限的增加（如执行 Shell），**沙箱隔离**将成为下一个季度的安全研发重点。
4.  **模型切换的刚需化**：
    *   随着 GPT-5 的发布和 Gemma 等开源模型的进步，用户对“Model Agnostic”（模型无关）的需求从“备选”变成了“刚需”。项目如果不能快速适配新模型或支持灵活切换，将面临用户流失风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-04-05 动态日报。

---

# NanoBot 项目动态日报 (2026-04-05)

## 1. 今日速览
NanoBot 今日保持**极高活跃度**，过去24小时内共有 14 条 Issue 更新和 23 条 PR 更新。项目正处于**功能快速迭代与架构优化阶段**，社区贡献者重点攻克了长期困扰用户的上下文记忆管理和工具调用安全问题，合并了包括 GPT-5 支持、内存“梦境”整理机制及 SSRF 白名单在内的多个高质量 PR。虽然未发布新版本，但主分支代码已发生显著变化，为下一版发布积蓄了大量实质性改进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **12 个 PR 被合并**，显著提升了项目的稳定性与扩展性，主要进展如下：

*   **模型生态支持**：合并了 [#2788](https://github.com/HKUDS/nanobot/pull/2788)，正式添加对 GPT-5 系列模型的支持，修复了新模型拒绝 `max_tokens` 参数的兼容性问题。
*   **内存系统重构**：合并了重大功能 PR [#2717](https://github.com/HKUDS/nanobot/pull/2717)，引入 "Consolidator + Dream" 两阶段记忆系统。旨在解决长期对话中历史记录无限膨胀导致 Agent 卡死的问题（关联 Issue #2638）。
*   **安全性与访问控制**：合并了 [#2715](https://github.com/HKUDS/nanobot/pull/2715)，新增 `ssrfWhitelist` 配置项，解决了 Tailscale 等 CGNAT 网络环境被误拦截的问题；同时合并了 [#2722](https://github.com/HKUDS/nanobot/pull/2722)，优化了 Prompt 缓存策略，减少了 MCP 工具变动导致的缓存失效。
*   **关键 Bug 修复**：[#2786](https://github.com/HKUDS/nanobot/pull/2786) 修复了导致模型 "思考过程"（reasoning_content）丢失的严重退化问题；[#2789](https://github.com/HKUDS/nanobot/pull/2789) 修复了 Telegram 线程回复错位的 Bug。
*   **架构优化**：[#2787](https://github.com/HKUDS/nanobot/pull/2787) 和 [#2794](https://github.com/HKUDS/nanobot/pull/2794) 重构了工具注册与 Hook 调用逻辑，提升了代码可维护性。

## 4. 社区热点
今日讨论最热烈的话题集中在**配置报错与竞品对比**上：

*   **[Issue #2343](https://github.com/HKUDS/nanobot/issues/2343) - 上下文溢出报错 (15条评论)**
    *   **诉求**：用户配置了较小的 `contextWindowTokens` 仍报错 "maximum context length is 32768 tokens"。
    *   **分析**：这反映了用户对 Token 管理机制的困惑。虽然代码层面有处理，但用户期望能更“自动”地裁剪历史记录而不报错。今日合并的内存重构 PR #2717 预计将大幅缓解此类痛点。
*   **[Issue #2774](https://github.com/HKUDS/nanobot/issues/2774) - 与 OpenClaw 的对比 (5条评论)**
    *   **诉求**：用户发帖称赞 NanoBot 在 Windows 下的稳定性“完爆” OpenClaw。
    *   **分析**：正面反馈。表明项目在核心稳定性上已建立良好口碑，尤其是相比其他竞品，NanoBot 在长时间运行和防崩溃方面表现优异。
*   **[Issue #2760](https://github.com/HKUDS/nanobot/issues/2760) - 重试风暴风险 (9条评论)**
    *   **诉求**：用户指出应用层重试 + SDK 层重试可能导致对上游 API 的 DDoS 攻击。
    *   **分析**：这是一个高级架构问题。正在审议的 PR #2800（429 降级机制）正是为了解决此类流量控制问题。

## 5. Bug 与稳定性
今日报告了若干影响体验的 Bug，部分已有修复方案：

*   **🔴 严重: 升级后 Telegram 思考过程泄露**
    *   **Issue**: [#2795](https://github.com/HKUDS/nanobot/issues/2795)
    *   **详情**: 从旧版升级后，Agent 的内部思考过程（thinking）会直接发送给用户，暴露了 Prompt 细节。
    *   **状态**: **Open**，等待修复。
*   **🟠 中等: 上下文管理失效导致 Agent 无响应**
    *   **Issue**: [#2638](https://github.com/HKUDS/nanobot/issues/2638)
    *   **详情**: 记忆整理失败时，历史记录无限增长直至超出模型限制。
    *   **状态**: **已修复** (通过今日合并的 PR #2717 解决)。
*   **🟠 中等: 本地服务 (Localhost) 被安全策略拦截**
    *   **Issue**: [#2796](https://github.com/HKUDS/nanobot/issues/2796)
    *   **详情**: 新的 SSRF 防护过于严格，导致无法连接本地的 PinchTab 等服务。
    *   **状态**: **Open**。需扩展今日合并的白名单功能 #2715 来覆盖 localhost 场景。
*   **🟡 一般: 自定义模型输出 Reasoning Content 乱码/Bug**
    *   **Issue**: [#2777](https://github.com/HKUDS/nanobot/issues/2777)
    *   **状态**: **已修复** (通过今日合并的 PR #2786 恢复了对 reasoning_content 的处理)。

## 6. 功能请求与路线图信号
社区正在推动向更智能的交互和更强的集成能力发展：

*   **交互体验优化**：PR [#2791](https://github.com/HKUDS/nanobot/pull/2791) 提出了 `ask_user` 工具，允许 Agent 在执行中暂停并询问用户。这是迈向 Agentic Workflow（自主工作流）的关键一步，避免 Agent 盲目猜测用户意图。
*   **多模态与 Provider 解耦**：Issue [#2339](https://github.com/HKUDS/nanobot/issues/2339) 呼吁支持独立的视觉模型。目前的架构混合了文本和视觉请求，用户希望在使用强大代码模型的同时，搭配专门的视觉模型处理图片。
*   **跨平台会话同步**：Issue [#2798](https://github.com/HKUDS/nanobot/issues/2798) 请求实现“统一会话”，允许用户在 Telegram 和 Discord 之间无缝切换对话而不丢失上下文。
*   **搜索能力增强**：PR [#2754](https://github.com/HKUDS/nanobot/pull/2754)（已关闭/合并？）提议内置 `grep` 和 `glob` 搜索工具，减少对 Shell 命令的依赖，提高跨平台兼容性。

## 7. 用户反馈摘要
*   **痛点**：**Token 计数与截断机制不透明**。多名用户遇到 "Context length exceeded" 错误，不清楚如何有效配置 `contextWindowTokens` (#2343)。
*   **痛点**：**本地开发受阻**。安全策略的加强意外阻断了 localhost 调用 (#2796)，影响开发调试体验。
*   **满意点**：**稳定性极佳**。相比竞品 OpenClaw，用户高度认可 NanoBot 在 Windows 环境下的鲁棒性和长运行能力 (#2774)。
*   **关注点**：用户非常关注 **GPT-5 等新模型的适配**情况，今日相关 PR 的合并将满足这一需求。

## 8. 待处理积压
*   **[Issue #2343](https://github.com/HKUDS/nanobot/issues/2343)**: 尽管内存系统已重构，但该 Issue 仍未关闭。建议维护者确认新版本是否彻底解决了 `contextWindowTokens` 的校验逻辑，并在文档中更新最佳配置实践。
*   **[Issue #2796](https://github.com/HKUDS/nanobot/issues/2796)**: 本地服务被拦截问题急需解决。考虑到 PR #2715 刚刚引入了 `ssrfWhitelist`，建议维护者尽快更新文档或默认配置，指导用户放行 `127.0.0.1`。
*   **[PR #2800](https://github.com/HKUDS/nanobot/pull/2800)**: 关于 Rate-Limit 降级的 PR 目前处于 Open 状态。鉴于 Issue #2760 提出的“重试风暴”风险，建议优先评审此 PR，以保护用户免受上游 API 封禁的影响。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-05)

**分析师注**：今日 NanoClaw 项目呈现出极高的社区活跃度，虽然官方未发布新版本，但社区贡献的功能 PR 呈井喷态势。重点关注多运行时支持的进展以及 OAuth 计费策略变更带来的用户困扰。

---

### 1. 今日速览
NanoClaw 今日维持了**极高的社区开发热度**，过去 24 小时内 PR 更新量高达 21 条，其中大部分为功能增强和新渠道集成。项目正处于从单一 Claude 后端向**多模型/多运行时架构**转型的关键时期，出现了 OpenAI Codex 和 OpenCode 等替代引擎的 PR。同时，Anthropic 针对 OAuth Token 的新计费策略在用户中引发了不小震动，文档更新已成为急需解决的问题。整体来看，项目功能边界正在快速扩张，但核心代码合并速度稍显滞后（待合并 PR 达 15 条）。

### 2. 版本发布
**无新版本发布**。

### 3. 项目进展
尽管没有官方 Release，今日仍有 6 个 PR 被合并或关闭，主要集中在代码重构与清理，为后续大功能合并做铺垫：

*   **架构重构与清理**：
    *   PR #1632 (已关闭) `feat: auto-prune stale session artifacts`：引入了自动清理旧会话数据（JSONLs, logs）的脚本，有助于解决长期运行后的磁盘占用问题。
    *   PR #1625 (已关闭) `feat: VRC-AI-Bot由来のPlaceType/ActorRole型を導入`：从 VRC-AI-Bot 移植了类型定义，增强了 Discord 频道的上下文感知能力（如区分私有线程）。
*   **Skills 生态**：
    *   多个迁移类 Skills（如 `migrate nanoclaw`, `migrate from openclaw`）的 PR 被处理，表明社区正在努力降低用户从其他框架迁移至 NanoClaw 的门槛。

### 4. 社区热点
今日讨论热度最高的问题集中在**可用性**与**计费策略**：

*   **[Issue #80] Support runtimes and providers other than Claude/Anthropic** (👍 56, 评论 31)
    *   **链接**：[qwibitai/nanoclaw Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)
    *   **分析**：这是目前呼声最高的功能请求。用户担心 Anthropic 封禁第三方客户端（如 OpenClaw）导致服务中断，强烈要求集成 OpenCode、Gemini 等替代后端。这直接催生了今日多个关于替代运行时的 PR。
*   **[Issue #1620] OAuth token auth now bills as extra usage** (新开)
    *   **链接**：[qwibitai/nanoclaw Issue #1620](https://github.com/qwibitai/nanoclaw/issues/1620)
    *   **分析**：Anthropic 调整政策，使用 OAuth 的第三方 Harness（包括 NanoClaw）将不再消耗订阅额度，而是按额外用量计费。这给用户带来了直接的经济损失，社区急需文档指引回归 API Key 的最佳实践。

### 5. Bug 与稳定性
今日暴露了几个关键的安全与稳定性隐患，部分已有社区修复方案：

*   **[严重] 安全漏洞：端口暴露与默认凭证** (已有 Fix PR)
    *   **问题**：OneCLI 安装生成的 Docker 配置会将 PostgreSQL (5432) 和 Gateway 端口暴露在公网，且使用默认弱口令，绕过 UFW 防火墙。
    *   **修复**：[PR #1629](https://github.com/qwibitai/nanoclaw/pull/1629) 提出了针对公网服务器的加固方案。
*   **[严重] 容器逃逸风险：Runner 源码可被篡改** (已有 Fix PR)
    *   **问题**：Agent 容器以读写模式挂载了 runner 源码目录，且拥有 `bypassPermissions` 权限，Agent 理论上可以修改自身的运行代码并持久化。
    *   **修复**：[PR #1630](https://github.com/qwibitai/nanoclaw/pull/1630) 建议将挂载改为只读模式。
*   **[中等] 死锁问题** (已有 Fix PR)
    *   **问题**：消息通过 `soft-busy` 管道传入活跃容器时，会导致长达 30 分钟的死锁。
    *   **修复**：[PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) 修复了消息流关闭的时序逻辑。
*   **[低] 用户体验问题**：
    *   [Issue #1608](https://github.com/qwibitai/nanoclaw/issues/1608) 指出从 API Key 切换到 OAuth 的流程混乱，存在 `placeholder` 环境变量干扰的问题。

### 6. 功能请求与路线图信号
今日的 PR 列表几乎勾勒出了下一阶段的核心路线图：**去中心化与多模态**。

1.  **多运行时支持**：
    *   [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) OpenAI Codex SDK 支持。
    *   [PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628) OpenCode SDK 支持。
    *   **预测**：这两个功能极有可能在下一版本中作为 Beta 功能引入，以解决 Issue #80 的痛点。
2.  **全频道覆盖**：
    *   [PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal 频道。
    *   [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix 频道（支持 E2EE）。
    *   [PR #1626](https://github.com/qwibitai/nanoclaw/pull/1626) Telegram 话题隔离。
    *   **预测**：项目正在向通用的 "AI Mesh" 消息路由中枢演进。

### 7. 用户反馈摘要
从 Issues #1608 和 #1620 的反馈中可以看出：
*   **痛点**：用户对 Anthropic 的账户封禁和计费策略变动极其敏感。目前的 OAuth 设置文档不仅缺失，而且存在误导性配置（如 placeholder key），导致用户在配置过程中频繁受挫。
*   **诉求**：用户强烈希望 NanoClaw 能解耦对 Claude/Anthropic 的强依赖，不仅是为了规避封禁，也是为了成本控制（使用其他模型）。
*   **满意点**：社区对 Skills 架构的扩展能力表示认可，Signal 和 Matrix 的快速集成证明了该架构的灵活性。

### 8. 待处理积压
*   **[PR #954] Fix OpenRouter routing**：该修复 PR 已提交近一个月，目前状态仍为 "Needs Review"。由于 Issue #80 表明用户正在流失到其他平台，合并此 PR 以支持 OpenRouter 路由变得至关重要。
    *   **链接**：[qwibitai/nanoclaw PR #954](https://github.com/qwibitai/nanoclaw/pull/954)
*   **[PR #546] Mattermost channel**：企业级通讯工具集成 PR 等待审查时间较长，建议优先处理以拓展企业用户群。
    *   **链接**：[qwibitai/nanoclaw PR #546](https://github.com/qwibitai/nanoclaw/pull/546)

---
*分析师总结：NanoClaw 正处于 "从工具到平台" 的蜕变期。当前最大的风险不在于代码，而在于 Anthropic 的政策变动。建议维护者优先处理文档（OAuth vs API Key）和替代运行时（OpenCode/Codex）的合并工作，以留住因封号风险而动摇的用户。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026-04-05 IronClaw 项目动态日报。

---

# IronClaw 项目日报 (2026-04-05)

## 1. 今日速览
IronClaw 项目在过去 24 小时内呈现出**极高的开发活跃度**与**社区反馈热度**。虽然今日无新版本发布，但代码提交频繁，共有 44 个 PR 更新（其中 13 个合并/关闭），且社区提交了 16 个 Issue，显示出用户正在深度测试最新功能（特别是 Engine v2 和 Routines）。**Engine v2 的稳定性**以及**OAuth 集成的可用性**是目前社区反馈的焦点，多个高优先级 Bug 已被识别。项目正处于功能快速迭代与缺陷修复并行的关键阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 13 个 PR 合并或关闭，主要集中在提升系统稳定性、扩展渠道支持以及修复工具调用逻辑：

*   **重要合并与关闭**:
    *   **PR #1912 (CLOSED)** `feat: nearai mcp by env`: 优化了 NEAR AI MCP 服务器的环境变量派生逻辑，移除了持久化凭证写入，提升了安全性。
    *   **PR #2016 (CLOSED)** `feat: add proof_of_claw crate`: 虽已关闭（可能为草稿或合并到其他分支），但引入了 ZK 证明和硬件批准的尝试值得后续关注。

*   **核心功能推进 (待合并 PR)**:
    *   **PR #2019 [OPEN]** `feat: native Matrix channel`: 新增原生 Matrix 渠道支持，包含 E2EE 加密功能，显著扩展了 Agent 的通信场景。
    *   **PR #2021 [OPEN]** `Feat/0g ironclaw integration`: 试图集成 0G 存储，可能旨在为 Agent 提供链上数据可用性层。
    *   **PR #1470 [OPEN]** `fix(routines)`: 优化了例行任务的通知摘要，修复了长文本截断问题，改善了用户体验。
    *   **PR #2003 [OPEN]** `fix(tools)`: 修复了已禁用的工具模式（如 `claude_code`）仍被 LLM 误选的问题，增强了配置管控能力。

## 4. 社区热点
今日讨论最活跃的领域集中在 **Engine v2 的行为差异**与**企业级部署需求**：

1.  **Engine v2 工具审批失效** ([Issue #2010](https://github.com/nearai/ironclaw/issues/2010)):
    *   **热度**: 高
    *   **分析**: 用户发现环境变量 `AGENT_AUTO_APPROVE_TOOLS=true` 在 Engine v2 中被静默忽略，导致自动化流程被阻断。这反映了用户在从旧引擎迁移到 v2 时遇到的兼容性和配置痛点。
2.  **Kubernetes 原生支持需求** ([Issue #2023](https://github.com/nearai/ironclaw/issues/2023)):
    *   **热度**: 高
    *   **分析**: 用户强烈建议放弃硬编码的 Docker 隔离，转而支持 Kubernetes 原生运行时。这表明 IronClaw 正在从个人桌面工具向企业级/云端基础设施演进，现有的 Docker-in-Docker 方案在生产环境中被认为过于脆弱。
3.  **安全编排与 WASM 隔离** ([Issue #2018](https://github.com/nearai/ironclaw/issues/2018)):
    *   **分析**: 社区提出了基于 DID 身份和 WASM 隔离的“默认安全”多智能体编排方案。这显示了高级用户对 Agent 间通信安全性的深度关切。

## 5. Bug 与稳定性
今日报告了大量功能性 Bug，主要集中在 **OAuth 连接** 和 **Routine 执行** 模块，部分已导致功能不可用：

*   **严重 - 功能阻断**:
    *   **[PROD] Routine 运行失败** ([Issue #1996](https://github.com/nearai/ironclaw/issues/1996)): 生产环境中 Routine 启动后因 "Tools Disabled" 直接失败，导致自动化任务不可用。
    *   **Google OAuth 400 错误** ([Issue #1992](https://github.com/nearai/ironclaw/issues/1992)): Google 认证流程完全阻断，提示不符合 OAuth 2.0 安全策略。**尚无 Fix PR**。
    *   **LLM 502 Bad Gateway** ([Issue #1994](https://github.com/nearai/ironclaw/issues/1994)): 频繁的 LLM 提供商 502 错误，且伴随状态幻觉（Agent 声称完成但实际未执行），严重影响交互信任度。

*   **中等 - 体验受损**:
    *   **Engine v2 缺失 Mission Actions** ([Issue #2011](https://github.com/nearai/ironclaw/issues/2011)): v2 引擎能够推理 `mission_create` 但无法执行（Callable Action 未暴露）。**已关闭 (可能已修复或确认为配置问题)**。
    *   **Slack/Gmail 集成故障** ([Issue #1998](https://github.com/nearai/ironclaw/issues/1998), [Issue #2001](https://github.com/nearai/ironclaw/issues/2001)): Slack 机器人在提供 Token 后仍无响应；Gmail OAuth 链接首次请求不生成。
    *   **Skill 名称空格导致安装失败** ([Issue #1999](https://github.com/nearai/ironclaw/issues/1999)): 包含空格的技能名无法通过正则校验。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，识别出以下潜在的技术路线图信号：

*   **云原生与隔离架构重构**: 不仅是 Kubernetes 支持 ([#2023](https://github.com/nearai/ironclaw/issues/2023))，还有对 WASM 隔离的探讨 ([#2018](https://github.com/nearai/ironclaw/issues/2018))。这预示着项目可能会在未来版本中解耦沙箱环境，以适应 Serverless 或 K8s 部署环境。
*   **确定性工作流**: Issue #2017 提出了对确定性 SOP 引擎的需求，表明用户希望 Agent 在处理审计、部署等严肃任务时，不仅安全，还要严格遵循预定路径，而非完全由 LLM 自由发挥。
*   **外部 Hook 集成**: Issue #2002 请求在工具执行前增加外部 HTTP 回调，显示出用户需要将 IronClaw 接入更广泛的 CI/CD 或审批系统的强烈意愿。

## 7. 用户反馈摘要
*   **痛点**: **OAuth 连接极其脆弱**（Google/Slack/Gmail 均有报错），导致初次接入体验差；**Engine v2 的文档或行为一致性不足**，环境变量配置经常不生效。
*   **场景**: 用户正在尝试将 IronClaw 用于 **Telegram 机器人**、**自动化信息推送** 以及 **NEAR Intents Solver** 的运行环境。
*   **情绪**: 开发者对 IronClaw 的潜力表示期待（尤其是安全性和沙箱机制），但对目前的稳定性（502 错误、Routine 失效）感到沮丧。

## 8. 待处理积压
以下重要 Issue 目前处于 Open 状态且尚未有明确的修复 PR 关联，建议维护者优先关注：

1.  **[Bug] Google OAuth 400 Error** ([Issue #1992](https://github.com/nearai/ironclaw/issues/1992)): 这是一个阻碍用户登录和授权的关键路径 Bug。
2.  **[Feature] Kubernetes Runtime Support** ([Issue #2023](https://github.com/nearai/ironclaw/issues/2023)): 社区呼声高，涉及架构层面的调整，需要维护者尽早决策是否纳入 Roadmap。
3.  **[Bug] Agent False Completion Report** ([Issue #1993](https://github.com/nearai/ironclaw/issues/1993)): Agent 在出错后谎报任务完成，这是严重的可靠性问题，涉及 Agent 的核心逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-05)

**分析师摘要**：今日 LobsterAI 项目呈现“高修复、零发布”的维护状态。社区贡献者集中修复了前端交互中的数据丢失隐患（UX Regression），并针对 macOS 体验进行了优化。虽然出现了一个关于微信插件依赖的 PR 关闭，但整体代码质量向好的方向发展。

---

## 1. 今日速览

今日项目活跃度主要集中在**代码质量优化与交互体验修复**。共有 **15 个 PR 更新**（绝大多数为修复性质）和 **6 个新开 Issue**。值得注意的是，贡献者 `MaoQianTu` 集中提交了 5 个关于“静默丢失”问题的修复，显著提升了应用的数据安全性。虽然目前有 14 个 PR 处于待合并状态，且无新版本发布，但项目正在为下一次稳定版更新积累高质量的代码补丁。

## 2. 版本发布

**无**。
*(注：当前未有新版本发布，建议关注即将合并的 PR 列表，预计将在合并后发布包含大量 UX 修复的版本。)*

## 3. 项目进展

今日没有合并新的 PR，但关闭了 1 个 PR，并有大量针对性的修复 PR 提交：

*   **前端体验专项修复**：贡献者提交了针对 `AgentCreateModal`、`AgentSettingsPanel`、`McpServerFormModal` 等核心组件的修复，防止用户在未保存的情况下关闭窗口导致配置丢失 ([PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475))。
*   **输入法与草稿修复**：修复了快速切换会话导致输入框草稿丢失的问题 ([PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476))，以及重编辑历史消息时覆盖输入框无提示的问题 ([PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477))。
*   **平台适配**：修复了 macOS 设置页面快捷键显示 `Ctrl` 而非 `Cmd` 的问题 ([PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467))。
*   **代码清理**：关闭了关于修复微信插件启动失败的 PR ([PR #797](https://github.com/netease-youdao/LobsterAI/pull/797))，该问题可能通过其他方式解决或不再适用。

## 4. 社区热点

今日最活跃的讨论集中在**多 Agent 协作能力**的缺失上。

*   **[Issue #1462 许愿：期望每个agent能够单独绑定模型、期望有正式的多agent协作能力](https://github.com/netease-youdao/LobsterAI/issues/1462)**
    *   **分析**：用户对目前的单 Agent 模式提出了更高要求。作者明确指出希望引入“Manager”角色来调度其他 Agent，并实现 Agent 级别的模型绑定。这反映了高级用户将 LobsterAI 从“个人助手”向“团队模拟器”进阶的强烈诉求。同时，用户反馈阿里的竞品交互体验不如 LobsterAI，这是项目的一大优势。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在**数据持久化与状态管理**的边缘情况，属于严重度中等但影响用户体验的问题。**好消息是：绝大多数 Bug 已有对应的 Fix PR。**

| 严重度 | 问题 | 状态 | 是否有 PR |
| :--- | :--- | :--- | :--- |
| **中** | [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 快速切换视图导致输入草稿丢失 | OPEN | **Yes** ([PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476)) |
| **中** | [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 重编辑历史消息静默覆盖当前输入 | OPEN | **Yes** ([PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477)) |
| **中** | [Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469) Agent 设置面板关闭时未保存提示缺失 | OPEN | **Yes** ([PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474)) |
| **低** | [Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468) 创建 Agent 弹窗关闭无确认 | OPEN | **Yes** ([PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473)) |
| **低** | [Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470) MCP 配置弹窗关闭无确认 | OPEN | **Yes** ([PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475)) |

*注：今日报告的 6 个 Issue 中，有 5 个是关于“静默丢失/无确认提示”的 UX 问题，且均在同一天由提交者完成了修复 PR，显示了极快的响应速度。*

## 6. 功能请求与路线图信号

*   **多 Agent 编排**：如热点所述，[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 提出的 Agent 小组模式是未来重要方向。
*   **IM 实例重复校验**：[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 增加了对钉钉、飞书、QQ 实例名称和凭证的重复校验，这表明项目正在强化其作为 IM 机器人的企业级部署能力。
*   **技能系统健壮性**：[PR #1479](https://github.com/netease-youdao/LobsterAI/pull/1479) 防止重复安装本地技能，[PR #1480](https://github.com/netease-youdao/LobsterAI/pull/1480) 增加了安装后的刷新提示，说明 Skills 生态正在完善。

## 7. 用户反馈摘要

*   **痛点**：用户对**内容丢失**极其敏感。今日大量的 Issue 都围绕着“写了半天东西因为误操作或切换页面没了”这一核心焦虑。PR 的修复（增加确认弹窗、组件卸载时强制同步）精准击中了这一痛点。
*   **满意度**：尽管有 Bug，但用户对 LobsterAI 的交互流畅度给予了肯定，明确表示优于某些大厂竞品（如 hiclaw），这是项目留住用户的核心竞争力。

## 8. 待处理积压

*   **PR 积压**：目前有 **14 个待合并 PR**，且大多已准备好。建议维护者优先 Review 并合并以下几类 PR：
    1.  数据安全性修复类（防止内容丢失）。
    2.  IM 实例管理类 ([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464))。
*   **Issue 积压**：[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 关于多 Agent 的需求虽然实现难度大，但建议官方给出初步的 Roadmap 或回应，以引导社区预期。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-04-05)**

**分析师备注**: 本日报基于 2026-04-05 抓取的 GitHub 数据生成。

---

### 1. 今日速览
Moltis 项目今日保持高度活跃，社区反馈主要集中在**模型兼容性**与**提供商配置**的细节优化上。过去 24 小时内新增 6 条活跃 Issue 和 2 条待合并 PR，显示出用户正在深入测试多模型集成功能。虽然未见新版本发布，但针对 MCP 协议和 Telegram 代理支持的 PR 表明项目正在扩展其连接能力和通信渠道。整体来看，项目处于功能迭代与缺陷修复并行的阶段，健康度良好。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日无已合并的 PR，但有 2 个重要的功能性 PR 处于 Open 状态，正在等待 Review：

*   **[PR #555] Add streamable http mcp server support**
    *   **贡献者**: volfco
    *   **进展**: 提交于昨日，目前待合并。
    *   **分析**: 该 PR 旨在增加对 Streamable HTTP MCP Server 的支持（关联 Issue #294）。这标志着 Moltis 正在增强其作为 AI 智能体中间件的标准兼容性，特别是针对需要流式数据传输的复杂工具调用场景。
    *   **链接**: [moltis-org/moltis PR #555](https://github.com/moltis-org/moltis/pull/555)

*   **[PR #550] feat: support optional channel-level proxy for telegram**
    *   **贡献者**: BLumia
    *   **进展**: 提交于昨日，目前待合并。
    *   **分析**: 增加了 Telegram 频道级别的可选代理支持。这对于网络受限地区的用户连接 Telegram Bot 至关重要，解决了部署环境的访问痛点。
    *   **链接**: [moltis-org/moltis PR #550](https://github.com/moltis-org/moltis/pull/550)

### 4. 社区热点
今日讨论最密集的问题集中在**模型管理**与**桌面端兼容性**：

*   **[Issue #549] MacOS Desktop App OAuth 流程故障**
    *   **热度**: 👍 0 | 评论: 1
    *   **分析**: 用户报告在 MacOS 客户端中使用 Codex 时 OAuth 认证无法触发。这是目前唯一涉及桌面端特定平台的问题，对于桌面版用户体验有较大影响。
    *   **链接**: [moltis-org/moltis Issue #549](https://github.com/moltis-org/moltis/issues/549)

*   **[Issue #554] 探测现有 Provider 时报 "Service unavailable"**
    *   **热度**: 👍 0 | 评论: 1
    *   **分析**: 用户在使用有效 API Key 进行 Provider 探测时遇到服务不可用错误，直接阻碍了新模型的接入流程。
    *   **链接**: [moltis-org/moltis Issue #554](https://github.com/moltis-org/moltis/issues/554)

### 5. Bug 与稳定性
今日报告了 5 个 Bug（其中部分可能涉及功能限制），主要集中在**模型接入层**：

1.  **[高] Provider 配置与探测逻辑缺陷**
    *   **Issue #554**: API Key 验证环节报错，导致无法添加服务。
    *   **Issue #552**: 架构限制问题，用户无法从同一个 Provider 添加多个模型（如同时使用 GPT-4 和 GPT-3.5），被迫只能选一个，严重限制了多模型切换场景。
    *   **Issue #551**: "Detect all models" 功能失效，仅探测已存在的模型而非刷新列表。
    *   **链接**: [#554](https://github.com/moltis-org/moltis/issues/554) | [#552](https://github.com/moltis-org/moltis/issues/552) | [#551](https://github.com/moltis-org/moltis/issues/551)

2.  **[中] 视觉能力识别缺失**
    *   **Issue #556**: Mistral 和 Qwen 的某些模型支持 Vision，但 Moltis 未能识别此能力，导致无法在聊天中传递图片。
    *   **链接**: [moltis-org/moltis Issue #556](https://github.com/moltis-org/moltis/issues/556)

3.  **[中] MacOS 客户端 OAuth 故障**
    *   **Issue #549**: Codex 登录流程卡死。
    *   **链接**: [moltis-org/moltis Issue #549](https://github.com/moltis-org/moltis/issues/549)

*目前尚无针对上述 Bug 的修复 PR 提交。*

### 6. 功能请求与路线图信号
*   **[Issue #553] 增加 Agent 级别的回环和超时设置**
    *   **分析**: 用户 `bsarkisov` 提出 Agent 执行任务时需要更细粒度的控制（如超时时间）。这反映了部分用户正在将 Moltis 用于生产环境，对任务执行的稳定性有更高要求。
    *   **路线图推测**: 结合 PR #555 (MCP Support)，可以看出项目正向**高可定制化、高稳定性的 Agent 编排平台**演进。
    *   **链接**: [moltis-org/moltis Issue #553](https://github.com/moltis-org/moltis/issues/553)

### 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下用户画像与痛点：
*   **重度模型使用者**: 用户 `bsarkisov` 提交了 3 个 Issue，显示其正尝试在 Moltis 中整合多个 LLM 提供商。他对目前的模型管理机制感到困惑（如不能同 Provider 多模型、探测功能不准），说明目前的 Provider 管理界面逻辑可能过于简化，无法满足高级用户需求。
*   **多模态需求**: 用户期望 Moltis 能自动识别并启用模型的 Vision 能力，而不是手动配置或默认禁用。
*   **网络环境差异**: PR #550 表明部分用户需要在复杂网络环境下部署 Telegram Channel，代理支持是刚需。

### 8. 待处理积压
*   **重点关注**: Issue #549 (MacOS OAuth) 和 Issue #552 (同 Provider 多模型限制) 直接影响基础功能的使用体验，建议维护者优先响应。
*   **PR Review**: PR #550 (Telegram Proxy) 和 #555 (MCP HTTP) 已提交但未合并，建议团队尽快 Review 以推动版本迭代。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是 CoPaw 项目 2026-04-05 的动态日报。

---

# CoPaw 项目动态日报 (2026-04-05)

**分析师**：AI 开源项目观察员
**数据周期**：过去 24 小时

## 1. 今日速览
CoPaw 项目今日保持**极高的社区活跃度**，共有 23 个 Issue 更新和 12 个 PR 更新。虽然未发布正式新版本，但维护者合并了 8 个 PR，显示出高效的功能迭代和问题修复节奏。

今日重点集中在**生态集成**与**关键 Bug 修复**。社区贡献者成功合并了 WhatsApp 通讯渠道和 OneBot (QQ) 集成，显著扩展了 CoPaw 的社交边界。同时，针对 Feishu 消息渲染和 Local Model 更新的修复也顺利合入。然而，底层并发库 (`anyio`) 导致的 CPU 空转问题成为今日用户反馈的焦点，需引起核心团队重视。

## 2. 版本发布
*   **正式版本**：过去 24 小时内无新 Release 发布。
*   **开发版本**：已合入 `bump version to 1.0.2b1` ([PR #2942](https://github.com/agentscope-ai/CoPaw/pull/2942))，预示着 v1.0.2 版本即将发布，主要包含 Local Model 更新和部分 UI 修复。

## 3. 项目进展
今日共有 **8 个 PR 被合并**，项目在多渠道支持和系统稳定性上取得实质性进展：

*   **新增 WhatsApp 通讯渠道**：合并了基于 `neonize` 的 WhatsApp 频道支持 ([PR #2946](https://github.com/agentscope-ai/CoPaw/pull/2946))，支持二维码和配对码登录，极大地丰富了个人助手的应用场景。
*   **新增 OneBot v11 (QQ) 集成**：合并了 NapCat/QQ 频道支持 ([PR #2870](https://github.com/agentscope-ai/CoPaw/pull/2870))，打通了与国内主流 IM 生态的连接。
*   **本地模型管理增强**：支持在 CoPaw Local 页面直接更新 Llama.cpp ([PR #2889](https://github.com/agentscope-ai/CoPaw/pull/2889))，解决了本地模型部署的维护痛点。
*   **消息机制优化**：合入了消息分割功能，支持使用 `[SPLIT]` 分隔符发送多条独立消息 ([PR #2940](https://github.com/agentscope-ai/CoPaw/pull/2940))，使 Agent 交互更拟人化。
*   **UI/UX 修复**：修复了定时任务页面在深色模式下的渲染问题 ([PR #2804](https://github.com/agentscope-ai/CoPaw/pull/2804))。

## 4. 社区热点
今日讨论最热烈的话题集中在性能问题和新模型兼容性上：

1.  **[Bug] 高 CPU 占用与空转问题** ([Issue #2888](https://github.com/agentscope-ai/CoPaw/issues/2888))
    *   **热度**：7 条评论
    *   **分析**：用户报告在空闲状态下 CoPaw 进程占用单核 100% CPU。讨论指出问题根源可能在于 `anyio` 库的取消处理机制导致的死循环。这是一个影响生产环境资源成本的关键问题。
2.  **[Bug] Feishu 消息换行符丢失** ([Issue #2923](https://github.com/agentscope-ai/CoPaw/issues/2923))
    *   **热度**：7 条评论
    *   **分析**：用户反馈飞书推送的消息中换行符失效。经过深入讨论，定位到并非构建函数的问题，而是 `shell.py` 中的 `_collapse_embedded_newlines` 误删了参数中的换行符。社区已提交修复 PR ([PR #2924](https://github.com/agentscope-ai/CoPaw/pull/2924))。
3.  **[Bug] Gemma4 模型陷入工具调用死循环** ([Issue #2947](https://github.com/agentscope-ai/CoPaw/issues/2947))
    *   **热度**：2 条评论
    *   **分析**：使用 Google Gemma-4 模型时，Agent 会无休止地调用 `execute_shell_command`。这反映了特定模型对 Agent 工具调用协议的兼容性问题。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及资源管理、兼容性和 UI 交互：

*   **[严重] CPU 空转 (Busy Loop)** ([Issue #2888](https://github.com/agentscope-ai/CoPaw/issues/2888))：导致高功耗，目前尚无 Fix PR，需优先排查。
*   **[严重] 浏览器进程泄漏** ([Issue #2934](https://github.com/agentscope-ai/CoPaw/issues/2934))：使用 `browser_use` 时，旧的 Chromium 进程未被正确关闭，可能导致内存耗尽。
*   **[中等] Gemma4 死循环** ([Issue #2947](https://github.com/agentscope-ai/CoPaw/issues/2947))：模型兼容性问题，导致 Agent 无法终止任务。
*   **[中等] Windows 初始化挂起** ([Issue #2943](https://github.com/agentscope-ai/CoPaw/issues/2943))：`copaw init` 在安全警告处卡死，影响 Windows 用户的首次体验。
*   **[已修复] Feishu 换行问题** ([Issue #2923](https://github.com/agentscope-ai/CoPaw/issues/2923))：已有 PR #2924 待合并。

## 6. 功能请求与路线图信号
用户对多智能体协作和界面交互提出了明确需求：

*   **多智能体协作增强**：用户强烈请求类似 Claude Code 的 "Agent Team" 功能 ([Issue #2922](https://github.com/agentscope-ai/CoPaw/issues/2922))，解决当前多 Agent 交互生硬、上下文不对称的问题。
*   **GUI 交互优化**：请求将 GUI 中的 "Approve" 操作从输入框改为按钮 ([Issue #2945](https://github.com/agentscope-ai/CoPaw/issues/2945))，以及隐藏 Windows 上执行 Shell 命令时的黑框 ([Issue #2933](https://github.com/agentscope-ai/CoPaw/issues/2933))。
*   **多消息支持 (已实现)**：关于单次发送多条消息的请求 ([Issue #2939](https://github.com/agentscope-ai/CoPaw/issues/2939)) 已通过 PR #2940 合并，预计将在下个版本上线。

## 7. 用户反馈摘要
*   **连接性问题**：多位用户反馈使用第三方代理/中转服务连接模型时失败 ([Issue #2941](https://github.com/agentscope-ai/CoPaw/issues/2941))，表明 CoPaw 对非标准 API 端点的兼容性测试可能不足。
*   **操作体验**：用户对频繁弹出的 CMD 窗口表示不满 ([Issue #2933](https://github.com/agentscope-ai/CoPaw/issues/2933))，认为这打断了工作流。
*   **配置管理**：有用户反映新建 Agent 后技能配置会自动全选 ([Issue #2931](https://github.com/agentscope-ai/CoPaw/issues/2931))，且配置文件可能在重启后被重置 ([Issue #2930](https://github.com/agentscope-ai/CoPaw/issues/2930))。

## 8. 待处理积压
*   **[Bug] CPU 占用过高** ([Issue #2888](https://github.com/agentscope-ai/CoPaw/issues/2888))：作为影响性能的关键问题，目前仍处于 Open 状态，建议核心团队尽快介入。
*   **[PR] OpenRouter Provider 增强** ([PR #1192](https://github.com/agentscope-ai/CoPaw/pull/1192))：该 PR 已开启近一个月，增加了 HTTP-Referer 头等特性，建议维护者进行 Review 以推动合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>