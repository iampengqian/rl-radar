# OpenClaw 生态日报 2026-05-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-20 22:27 UTC

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

# 🐾 OpenClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持了极高的社区活跃度与开发热度。项目新增或活跃了 306 个 Issue，并成功关闭了 194 个，社区互动效率极高。然而，在拉取请求方面存在显著的积压与瓶颈，更新了 500 个 PR 中仅有 17 个被合并或关闭，待合并 PR 高达 483 个。今日项目发布了 `v2026.5.19` 正式版和 Alpha 版，重点转向了更规范的内部重构与插件 SDK 弃用路径规划。整体来看，项目在功能迭代上高歌猛进，但在多渠道接入、核心运行时的稳定性以及 PR 审核消化能力上正面临较大挑战。

## 2. 版本发布
今日连发两个版本，核心变更一致，主要聚焦于架构规范与依赖升级：
- **[v2026.5.19](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19)** 及 **[v2026.5.19-alpha.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-alpha.1)**
  - **Agents 规范调整**：明确要求后续修复应默认采用“整洁的有界重构”，精简内部逻辑，并为插件 SDK/API 提供明确的弃用路径。
  - **依赖项升级**：将 `@openclaw/proxyline` 升级至 0.3.3，Pi 包升级至 0.75.1。
  - **破坏性变更/迁移注意**：提高了对 Node.js 运行时的最低版本要求，需支持 Node.js 22 及以上版本。升级后需严格检查运行环境。

## 3. 项目进展
今日尽管 PR 合并数量不多（17个），但社区提交了大量前瞻性修复与架构优化 PR，项目整体在**性能优化**和**通道健壮性**上迈进了重要一步。
- **TUI 启动性能大幅优化**：核心开发者提交了多个 PR 以降低 TUI 冷启动时间，包括延迟导入后端模块（[#84701](https://github.com/openclaw/openclaw/pull/84701)）、跳过远程启动时的插件元数据加载（[#84686](https://github.com/openclaw/openclaw/pull/84686)），以及削减插件系统的初始化开销（[#84649](https://github.com/openclaw/openclaw/pull/84649)）。
- **通道与消息修复**：修复了 Signal 通道重启时未正确等待守护进程关闭的问题（[#71863](https://github.com/openclaw/openclaw/pull/71863)），改善了飞书通道的正常回复钩子触发（[#72138](https://github.com/openclaw/openclaw/pull/72138)）。
- **安全与基础设施**：恢复了 `tryReadSecretFileSync` 中对符号链接的安全拦截（[#84711](https://github.com/openclaw/openclaw/pull/84711)），防止潜在的秘钥读取漏洞。

## 4. 社区热点
今日讨论最热烈的问题集中在**渠道连接稳定性**、**资源消耗**和**底层会话状态异常**上：
- **Slack 静默断连危机** ([#72808](https://github.com/openclaw/openclaw/issues/72808)，18条评论)：用户报告在向朋友演示时，Slack 机器人毫无反应且无报错，暴露了长连接维持机制的缺陷。
- **API 密钥安全路线图之争** ([#11829](https://github.com/openclaw/openclaw/issues/11829)，17条评论)：关于如何防止 Agent 意外泄露 API 密钥的讨论，用户强烈呼吁引入分层加密保护机制。
- **高负载与内存溢出** ([#76552](https://github.com/openclaw/openclaw/issues/76552)，9条评论)：在运行 Codex 任务时导致 Linux 主机 CPU 飙升，引发了关于 Hook 继电器和会话历史管理效率的深度探讨。
- **升级后的会话锁死** ([#84059](https://github.com/openclaw/openclaw/issues/84059)，8条评论，👍6)：升级至 5.18 后，所有嵌入式 Agent 运行均抛出 `EmbeddedAttemptSessionTakeoverError`，成为影响极广的痛点。

## 5. Bug 与稳定性
今日暴露了大量影响核心功能的 Bug 与回归问题，特别是升级后的兼容性：
- **🔥 严重 (P1 / 数据丢失 / 认证失败)**
  - `doctor --fix` 导致配置被静默迁移，破坏 PI+OAuth 并导致 Token 消耗激增 3-4 倍（[#84038](https://github.com/openclaw/openclaw/issues/84038)）。
  - 升级 5.x 后，Codex App-server 在 `item/completed` 后停滞且无法恢复（[#84076](https://github.com/openclaw/openclaw/issues/84076)）。
  - MCP 工具始终无法到达出站请求体，跨多个稳定版本复现（[#80909](https://github.com/openclaw/openclaw/issues/80909)）。
- **⚠️ 会话状态与资源 (Crash / OOM)**
  - 长时间运行网关在文件扫描期间发生 JavaScript 堆内存耗尽（OOM）（[#57349](https://github.com/openclaw/openclaw/issues/57349)）。
  - 在 Apple Silicon 上使用本地内存嵌入时，ggml-metal 会导致网关崩溃（[#44202](https://github.com/openclaw/openclaw/issues/44202)）。

## 6. 功能请求与路线图信号
结合用户诉求与已有 PR，以下方向极有可能在后续版本中落地：
- **语音模式 升级**：用户呼吁在 macOS Talk Mode 中直接接入 OpenAI Realtime API 以实现端到端语音通话（[#71195](https://github.com/openclaw/openclaw/issues/71195)），取代现有低效的 STT→Chat→TTS 链路。
- **Control UI 文件上传限制开放**：要求开放当前硬编码的 5MB 上传限制（[#71142](https://github.com/openclaw/openclaw/issues/71142)），以适应日益增强的多模态解析需求。
- **更精细的策略与计费管控**：PR [#80783](https://github.com/openclaw/openclaw/pull/80783) 和 [#80056](https://github.com/openclaw/openclaw/pull/80056) 正在引入模型、网络和工具元数据的运行时合规检查，满足企业级治理需求。
- **多提供商 API 密钥管理面板**：PR [#67579](https://github.com/openclaw/openclaw/pull/67579) 提议在 Web UI 中加入多模型提供商密钥管理，极大降低用户入门门槛。

## 7. 用户反馈摘要
- **升级体验极差**：大量反馈指出从 4.x 升级到 5.x 后遭遇“组合拳”般的报错（如 #84059, #84604），用户强烈建议官方强化升级迁移脚本或提供向后兼容机制。
- **消息静默丢失引发恐慌**：在 Telegram、Discord 和 Slack 中，由于沙盒权限或状态残留，经常发生“机器人在思考但无回复”的情况，让用户对系统可靠性产生怀疑。
- **生命周期管理痛点**：用户在多通道并行时发现，关闭通道的僵尸进程无法彻底清理（#71412），系统级的健康自检机制亟待完善。

## 8. 待处理积压
目前项目积累了大量高优先级且处于阻塞状态的 Issue，且部分核心修复 PR 缺乏 maintainer 的及时 Review，需官方团队重点关注：
- **架构级 RFC 亟待定论**：
  - 关于 Control UI 插件贡献槽的控制权 RFC（[#71736](https://github.com/openclaw/openclaw/issues/71736)），决定了后续 UI 扩展的走向，目前仍挂着 `needs-product-decision` 标签。
  - 网关服务身份与用户身份的分离提案（[#69066](https://github.com/openclaw/openclaw/issues/69066)），是解决多组件大规模崩溃的前提。
- **长期未合并的大型 PR (需 Review 加速)**：
  - 包含严格安全策略的 `feat(matrix)` 线程隔离 PR（[#71738](https://github.com/openclaw/openclaw/pull/71738)）。
  - 旨在优化 CLI 外部网关重启机制的 PR（[#72224](https://github.com/openclaw/openclaw/pull/72224)），虽已提供证明但仍处于 `waiting on author` 状态。

---

## 横向生态对比

作为一名专注 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 21 日的主流项目社区动态，为您生成如下横向对比与生态分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“架构重构与多模态/多通道爆发”的阵痛与升级期**。项目正经历从早期的“单体对话玩具”向“多端协作、具备持久记忆、支持多 Agent 编排”的基础设施底座演进。在这一过程中，**多通道的稳定性**（如 Slack、飞书、WhatsApp）、**配置与状态管理的复杂性**以及**大模型 API 兼容性（尤其是新一代思考模型）**成为全行业共同的挑战。

### 2. 各项目活跃度对比
*注：健康度评估综合考量了 Bug 修复速度、社区响应度与 PR 积压情况。*

| 项目名称 | 活跃 Issues (新/活/关) | 活跃 PRs (待合并/合并) | Release 情况 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 306 (活跃) / 194 (关) | 483 (待) / 17 (合) | `v2026.5.19` 正式版 | ⚠️ 亚健康 | **PR 严重积压**，核心功能高歌猛进但审核消化不足。 |
| **ZeroClaw** | 30 (19新活/11关) | 47 (待) / 3 (合) | 无 (v0.8.0攻坚) | ⚠️ 亚健康 | 多智能体 RFC 落地，但底层 Schema 重构引发大量阻断 Bug。 |
| **CoPaw** | 38 (16新活/22关) | 20 (待) / 17 (合) | `v1.1.8.post1` | ✅ 健康 | 高频迭代，桌宠与 IDE 功能拓展中，社区闭环快。 |
| **IronClaw** | 30 (23新活/7关) | 25 (待) / 15 (合) | 无 | ✅ 健康 | 底层 "Reborn" 架构重构顺利，安全与沙箱机制强化。 |
| **LobsterAI** | 3 (新) / (7合并PR) | 17 (待) / 7 (合) | 无 | ✅ 健康 | 专注于 DPI 适配、流式渲染等 UI/UX 稳定性打磨。 |
| **NanoBot** | 11 (新) / 27 (合) | 若干 / 27 (合) | 无 | 🌟 极佳 | 极高的社区合并率，底层架构与通道解耦进展顺利。 |
| **PicoClaw** | 8 (活跃) / 11 (合) | 16 (待) / 11 (合) | `nightly v0.2.8` | 🌟 极佳 | 核心稳定，安全加固与底层防崩溃修复响应迅速。 |
| **NanoClaw** | 5 (活跃) / 6 (合) | 若干 / 6 (合) | 无 | ✅ 健康 | 聚焦 WhatsApp 等通道的群组交互与安装部署体验优化。 |
| **Hermes Agent**| 49 (活跃) / 8 (合) | 42 (待) / 8 (合) | 无 | ⚠️ 亚健康 | 配置覆写逻辑混乱引发用户不满，陷入“高输入低输出”瓶颈。 |
| **Moltis** | 2 (新) / 3 (合) | 1 (待) / 3 (合) | 无 | ✅ 健康 | 低频高质，专注底层进程泄漏与嵌套记忆架构修复。 |
| **ZeptoClaw** | 0 (新) / 0 (合) | 1 (待) / 0 (合) | 无 | ✅ 健康 | 静默维护期，精准修复 Provider 路由底层逻辑。 |
| **NullClaw** | 0 (新) / 0 (合) | 2 (长期待) | 无 | 🤖 沉寂 | 核心功能测试与审查阶段，无新增交互。 |

### 3. OpenClaw 在生态中的定位
作为该领域的**核心参照系与流量入口**，OpenClaw 具备明显的生态规模优势：
* **优势对比：** 拥有压倒性的社区参与度（单日 306 个 Issue 活跃），功能覆盖面极广（从 TUI 到多端网关，从 MCP 到 Control UI）。
* **技术路线差异：** 与其他项目相比，OpenClaw 在多租户、企业级计费管控和 Web Control UI 的探索上更为靠前。但代价是架构日益庞大，它正在经历 Hermes Agent 和 ZeroClaw 正在经历的阵痛——**配置系统的极度复杂化导致的“不可控感”**（如 Token 消耗激增、静默迁移配置）。
* **社区规模对比：** 虽然社区最大，但由于 Maintainer 审核能力遭遇瓶颈（483 个 PR 待合并），其工程交付效率已落后于 NanoBot、IronClaw 等聚焦底层的项目。

### 4. 共同关注的技术方向
从今日多项目的交汇点来看，以下技术需求正在集中爆发：
* **复杂推理模型的适配：** DeepSeek-v4、Claude 3.5 等带有的 `thinking/reasoning` 模式对现有的流式输出（SSE）和 Token 解析机制造成冲击。**[涉及：OpenClaw, ZeroClaw, PicoClaw, LobsterAI]**
* **工具调用安全与沙箱隔离：** 防止 Agent 通过符号链接、`find /` 等指令逃逸工作区，以及对敏感操作引入人工审批。**[涉及：OpenClaw, PicoClaw, IronClaw, NanoBot, NanoClaw]**
* **消息通道的流式与富媒体支持：** 纯文本回复已无法满足用户，要求在 Telegram/飞书/Slack 中支持打字机效果、图文混排和 Emoji 解析。**[涉及：OpenClaw, PicoClaw, Hermes Agent, LobsterAI, CoPaw]**
* **上下文与记忆隔离：** 当多个用户/群组共享一个 Agent 时，如何防止记忆串线，需要引入更细粒度的 Session 隔离。**[涉及：NanoBot, Hermes Agent, NanoClaw]**

### 5. 差异化定位分析
* **OpenClaw / ZeroClaw：企业级与全能型底座。** 致力于成为融合网关、多租户、复杂 UI 的超级应用，适合团队级部署。
* **NanoBot / PicoClaw / NanoClaw：极客与轻量级多端枢纽。** 高度关注 IM（飞书/WhatsApp/Signal）的打通，轻量级部署，适合个人开发者和轻量级群管场景。
* **IronClaw：安全与高规范沙箱。** 核心在于“Reborn”架构的重构，强调凭证管理与宿主安全，适合对数据隐私要求高的本地沙箱环境。
* **Hermes Agent / CoPaw：体验与插件创新。** 前者关注 TUI 体验和多平台网关细节，后者（CoPaw）甚至引入了桌面宠物（Pet）和内置 Web IDE，侧重于 C 端交互形态的探索。
* **LobsterAI：商业级桌面端应用。** 重点关注 Windows 多屏 DPI、UI 美化与前端预览等“端侧”体验，偏向于提供类似 ChatBox 的商业替代品。

### 6. 社区热度与成熟度
* **快速迭代与膨胀期（OpenClaw, ZeroClaw, Hermes Agent）：** 面临技术债累积、Issue 爆发和 PR 审核阻塞的问题，处于 **“需重构以求进一步发展”** 的阶段。
* **高质量演进期：** 社区活跃且代码合并健康，方向明确聚焦于底层解耦和架构升级，开发节奏把控良好。
* **垂直打磨与稳定期：** 处于为下一个 Minor 版本积蓄力量的阶段，重心在边缘 Bug 修复、UI 优化和底层稳定性加固。

### 7. 值得关注的趋势信号
1. **“多模型路由”正演变为底层基础设施：** 从 ZeptoClaw 的专向修复可以看出，系统对本地 API、云端代理、各类服务商端点的智能路由和容错，正在成为 Agent 的核心能力。
2. **配置的声明式与版本控制成为痛点：** 用户深受“静默覆写”和“升级迁移失败”其害。未来，基于 Schema v3（如 ZeroClaw）或声明式 JSON 的严格配置生命周期管理，将成为降低运维复杂度的关键。
3. **本地开发者体验（DX）的融合：** CoPaw 尝试引入内置 IDE，IronClaw 强化凭证管理。个人 AI 助手不再只是“聊天框”，正逐渐演变为开发者的 OS-level Copilot，负责接管文件系统、终端命令和代码编辑。

**专家建议：** 对于正在选型的开发者，若追求**快速上手与多端接入**，建议关注 NanoBot/PicoClaw；若构建**内部安全沙箱环境**，可跟进 IronClaw；若需要**丰富的 GUI 桌面体验**，LobsterAI 和 CoPaw 是较好的选择。而对于 OpenClaw 和 ZeroClaw，建议等待其当前的架构重构 RFC 落地及新版本发布后再进行大规模跟进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-05-21 动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时内，NanoBot 项目展现出**极高的社区活跃度与核心开发推进力度**。社区提交了 11 个 Issue（包含大量新功能请求与 Bug 报告），而 PR 更新高达 40 条，其中核心维护者与社区开发者合并了多达 27 个 PR。项目当前处于**高速功能迭代与架构优化并行**的阶段，特别是在多渠道集成（Signal、WebSocket）、底层架构重构（Agent 生命周期、上下文管理）以及新增 LLM 提供商支持等方面取得了重大进展。整体来看，项目健康度极高，社区反馈积极响应。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **27 个 PR 被合并或关闭**，核心进展集中在以下几个领域：

*   **全新通信渠道支持**：
    *   PR [#3935](https://github.com/HKUDS/nanobot/pull/3935) 成功合并，正式引入了 Signal 渠道支持，允许通过 signal-cli 接入。这是一个重要的安全即时通讯扩展。
*   **核心架构重构与健壮性提升（核心提交者 JackLuguibin 推进）**：
    *   **WebSocket 重构**：合并了多个重要 PR，包括 WebSocket 工具、会话生命周期及增量流式处理 ([#3286](https://github.com/HKUDS/nanobot/pull/3286), [#3179](https://github.com/HKUDS/nanobot/pull/3179))。
    *   **会话与上下文优化**：引入了仅追加的会话记录功能 ([#3224](https://github.com/HKUDS/nanobot/pull/3224))；重构了上下文与心跳服务的模板渲染逻辑 ([#2813](https://github.com/HKUDS/nanobot/pull/2813))。
    *   **底层解耦**：统一了工具注册函数 ([#2787](https://github.com/HKUDS/nanobot/pull/2787))，网关初始化重构为工厂模式 ([#2852](https://github.com/HKUDS/nanobot/pull/2852))。
*   **LLM 提供商与 Token 统计**：
    *   重构了 provider 配置以支持列表格式，兼容多端点 ([#3026](https://github.com/HKUDS/nanobot/pull/3026))。
    *   新增了 Token 使用的 JSONL 持久化记录器 ([#2932](https://github.com/HKUDS/nanobot/pull/2932))。
*   **问题修复**：
    *   修复了 DeepSeek-v4-pro 思考模式在 CLI 中逐字换行的页面渲染问题 ([#3907](https://github.com/HKUDS/nanobot/issues/3907)，对应 Issue 已关闭)。

## 4. 社区热点
今日最受关注的讨论主要集中在多端协同、安全通信和团队使用场景：
*   **[#49](https://github.com/HKUDS/nanobot/issues/49) (👍 5, 评论 4)**：请求添加 Signal 通信渠道。这是一个长期需求，今日随着相关 PR 的合并，该需求已得到完美解决。
*   **[#3744](https://github.com/HKUDS/nanobot/issues/3744) (评论 4)**：关于团队多用户共享同一个 Agent 时的 Session 级别 Memory 机制讨论。这反映了 NanoBot 从“个人工具”向“团队协作 AI 智能体”演进过程中遇到的核心痛点——多用户上下文隔离。

## 5. Bug 与稳定性
今日新报告了多个关键 Bug，部分已有对应的修复 PR 提交：

1.  **[高] WebUI 会话生命周期故障**：[#3884](https://github.com/HKUDS/nanobot/issues/3884) 报告了在 WebSocket 渠道中，WebUI 在收到首次响应后对话即自动关闭，严重影响了前端交互体验。（状态：暂未修复）
2.  **[中] 沙箱安全策略误杀**：[#3931](https://github.com/HKUDS/nanobot/issues/3931) 报告开启 `restrictToWorkspace=true` 后，正常的 Web 请求（如 `curl`）被安全守卫错误拦截。（状态：暂未修复）
3.  **[中] Moonshot API 参数冲突**：[#3939](https://github.com/HKUDS/nanobot/issues/3939) 指出调用 kimi-k2.5/k2.6 时，系统同时发送 `thinking` 和 `reasoning_effort` 导致 API 报错。
    *   *进展*：已有社区开发者提交了修复 PR [#3940](https://github.com/HKUDS/nanobot/pull/3940)，去除了冗余参数。
4.  **[中] Python 虚拟环境隔离失效**：[#3934](https://github.com/HKUDS/nanobot/issues/3934) 指出 `exec` 工具在追加本地虚拟环境路径时，由于 `$PATH` 优先级问题导致仍使用系统环境，无法正常安装第三方库。（状态：暂未修复）

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 可以明显看出项目的发展方向：

*   **更完善的工具执行安全**：Issue [#3934](https://github.com/HKUDS/nanobot/issues/3934) 反映的 pip 安装问题，结合今日新开的 PR [#3937](https://github.com/HKUDS/nanobot/pull/3937)（为危险命令引入用户确认机制），表明项目正在着力优化代码执行沙箱的**安全性与可用性**。
*   **更多 LLM 提供商接入**：PR [#3927](https://github.com/HKUDS/nanobot/pull/3927) 添加了 Novita AI 提供商支持；PR [#3936](https://github.com/HKUDS/nanobot/pull/3936) 添加了 xAI Grok OAuth 支持功能。显示项目在极力拓宽兼容的模型生态。
*   **本地化与图像生成能力拓展**：Issue [#3941](https://github.com/HKUDS/nanobot/issues/3941) 建议增加 Ollama 的图像生成支持；PR [#3930](https://github.com/HKUDS/nanobot/pull/3930) 完善了多语言文档。这表明社区对本地多模态模型和国际化文档有着强烈诉求。

## 7. 用户反馈摘要
*   **痛点：群聊体验不佳**：用户反馈（[#3938](https://github.com/HKUDS/nanobot/issues/3938)）在飞书和 Telegram 群组中使用时，连续发送的消息会分别触发处理，导致回复碎片化。用户迫切需要**消息防抖/缓冲机制**。
*   **痛点：多用户记忆隔离**：使用者明确表达了在多人复用同一个机器人时，底层 `USER.md` 和 `MEMORY.md` 发生冲突的困扰（[#3744](https://github.com/HKUDS/nanobot/issues/3744)）。
*   **痛点：特定国内服务的兼容性**：用户花大量精力排查并分享了 163 邮箱 IMAP 登录的安全限制问题及修复方案（[#1123](https://github.com/HKUDS/nanobot/issues/1123)），反映出真实企业场景中对邮箱集成的强需求。

## 8. 待处理积压
*   **[#1123](https://github.com/HKUDS/nanobot/issues/1123) (更新于 05-20)**：针对 163.com 邮箱的特殊 IMAP 登录限制，用户在三个月前就提出了完整的解决方案，但至今未有官方 PR 介入。建议维护者评估并予以合入。
*   **群聊体验相关 Issue（[#3938](https://github.com/HKUDS/nanobot/issues/3938), [#3744](https://github.com/HKUDS/nanobot/issues/3744)）**：随着项目被越来越多团队采用，群聊场景下的消息去重和会话记忆隔离已成为核心短板，需尽早纳入架构规划。
*   **WebUI 稳定性（[#3884](https://github.com/HKUDS/nanobot/issues/3884)）**：WebSocket 断连问题直接打击前端用户体验，需高度优先排查。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-21)

## 1. 今日速览
Hermes Agent 今日维持了**高度活跃**的开发与社区讨论状态。过去 24 小时内，项目共收到 49 条新增/活跃 Issue，以及 42 条待合并 Pull Request，但仅有 1 条 Issue 被关闭、8 条 PR 被合并/关闭，显示出明显的“高输入、低输出”特征。目前项目正处于 v0.14.0 版本发布后的密集反馈与缺陷修复期。社区关注点主要集中在**多平台网关（飞书、WhatsApp、Discord）的适配问题**、**认证与 Provider 覆写逻辑混乱**以及针对**本地模型与记忆系统的高级定制化需求**上。项目当前虽无新版本发布，但主分支正为提升稳定性和扩展 Plugin 生态积蓄代码。

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展
今日共处理（合并/关闭）了 8 个 PR，主要聚焦于修复合并冲突、文档纠正及历史遗留问题清理。整体向前推进了错误诊断与底层工具链的准确性。

- **PR #29490** (已关闭): 修复了 Skills-hub 搜索结果去重逻辑，将基于名称（`name`）的去重改为基于唯一标识符（`identifier`），解决了 Airbnb、Zillow 等不同网站同名技能被错误覆盖的问题。[链接](https://github.com/NousResearch/hermes-agent/pull/29490)
- **PR #29441** (已关闭): 上述去重问题的早期提交版本，被 #29490 救援并替代。[链接](https://github.com/NousResearch/hermes-agent/pull/29441)
- **PR #16230** (已关闭): 修复了语音转文字（STT）功能，使其能正确读取 `config.yaml` 中的本地命令配置，而非仅依赖环境变量。[链接](https://github.com/NousResearch/hermes-agent/pull/16230)

---

## 4. 社区热点
今日讨论热度最高的话题集中在**核心配置被静默覆写**以及**TUI 终端体验**上：

- **配置与认证优先级危机 ([Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285))**: 
  本日最受关注的 Bug 之一（P1 级别）。多位用户反馈 `auth.json` 中的 `active_provider` 会在运行时静默覆盖用户在 `config.yaml` 中显式配置的 `model.provider`，导致模型路由完全偏离预期。这暴露出多层级配置系统的优先级设计存在严重逻辑缺陷。
- **TUI 输入框遭遇 ANSI 转义序列洪水 ([Issue #28419](https://github.com/NousResearch/hermes-agent/issues/28419))**: 
  评论数达 4 条。当 Gateway 管道破裂重启后，本应输出到 stdout 的 UI 渲染控制代码会泄漏到 stdin（用户输入框），严重影响终端界面的可用性。
- **对标 Claude Code 的“时光倒流”功能请求 ([Issue #21910](https://github.com/NousResearch/hermes-agent/issues/21910))**: 
  获得 4 个 👍。用户强烈希望引入类似 Claude Code 的双击 `Esc` 撤销/重置对话功能，以应对 Agent 陷入死循环或错误工具调用的场景。这反映了重度用户对精细化上下文控制的高阶诉求。

---

## 5. Bug 与稳定性
今日报告了大量 Bug，部分涉及安全和底层架构，按严重程度排列如下：

### 严重 (P1 / P2)
- **[P1] 会话恢复上下文泄漏漏洞 ([Issue #27156 相关 PR #27432](https://github.com/NousResearch/hermes-agent/pull/27432))**: 
  恢复 CLI 会话时，会将之前的原始工具调用和调试上下文直接暴露，构成隐私/安全风险。（已有 Fix PR 提交等待合并）。
- **[P2] auth.json 静默覆盖 config.yaml 配置 ([Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285))**: 如上文所述，破坏了用户对模型选择的绝对控制权。
- **[P2] OpenRouter API Key 优先级过高 ([Issue #5358](https://github.com/NousResearch/hermes-agent/issues/5358))**: 环境变量中存在 `OPENROUTER_API_KEY` 时，会强制劫持所有请求，忽略显式配置的其他 Provider。
- **[P2] Kanban Swarm 引用缺失导致崩溃 ([Issue #29415](https://github.com/NousResearch/hermes-agent/issues/29415))**: `kanban_swarm.py` 中硬编码了不存在的 skill `avoid-ai-writing`，导致 synthesizer 在重试循环中直接崩溃。

### 中等 (P3)
- **[P3] 飞书（Feishu）平台消息路由与渲染双重故障**:
  - 回复私聊消息被错误路由到线程中 ([Issue #29466](https://github.com/NousResearch/hermes-agent/issues/29466))。已有对应修复 PR ([PR #29510](https://github.com/NousResearch/hermes-agent/pull/29510))。
  - 长文本分片时，第一片使用了 `msg_type=text` 导致 Markdown 原文暴露，未渲染 ([Issue #29471](https://github.com/NousResearch/hermes-agent/issues/29471))。
- **[P3] 智能审批 Token 预算硬编码缺陷 ([PR #29517](https://github.com/NousResearch/hermes-agent/pull/29517))**: `max_tokens` 被写死为 16，导致在使用推理模型时静默失败并降级为人工审批。

---

## 6. 功能请求与路线图信号
从近期的 Feature Request 和 PR 走势，可以看出 Hermes Agent 正向**多 Agent 协作**、**记忆系统增强**和**操作可定制化**方向演进：

- **Agent 间协作与大脑接入**:
  - **[Feature #1265](https://github.com/NousResearch/hermes-agent/issues/1265)**: 提出基于 MCP 和 GitHub 支持的 Hermes-to-Hermes 任务委派机制。多智能体分布式协作呼声极高。
  - **[PR #29516](https://github.com/NousResearch/hermes-agent/pull/29516)) (已关闭)**: 尝试引入基于 Kuzu 图数据库的 Graphiti 本地记忆架构。这表明社区对超越纯文本的图谱记忆有强烈需求。
- **记忆与后台任务固化**:
  - **[Feature #10835](https://github.com/NousResearch/hermes-agent/issues/10835)**: 请求通过 MCP 协议暴露 Hermes 的核心记忆文件 (MEMORY.md)，打通与其他 AI 客户端的记忆共享。
  - **[Feature #16946](https://github.com/NousResearch/hermes-agent/issues/16946)**: 要求为后台任务 (`/background`) 增加历史记录归档功能，目前进程重启后记忆全无。
- **可预测的下个版本纳入**:
  - 飞书网关 Markdown 解析修复 ([PR #29510](https://github.com/NousResearch/hermes-agent/pull/29510)) 极大概率在近期版本合入。
  - Cron 任务调度逻辑修复 ([PR #29455](https://github.com/NousResearch/hermes-agent/pull/29455)) 和标题生成开关 ([Issue #29456](https://github.com/NousResearch/hermes-agent/issues/29456)) 也是低风险、高收益的合入候选。

---

## 7. 用户反馈摘要
通过对 Issue 描述的分析，提炼出当前用户的三个核心情绪与痛点：

1. **“失去掌控感”的无力感**：大量关于配置不生效（如 Auth 覆写、OpenRouter 劫持）的反馈表明，高级用户对 Agent “自作主张”的路由逻辑感到非常沮丧。他们期望代码逻辑遵循“显式配置大于隐式推断”的 Unix 哲学。
2. **本地/开源模型用户的边缘化体验**：使用本地模型（如 Ollama、LM Studio）的用户反馈，标题生成拖慢速度 ([Issue #29456](https://github.com/NousResearch/hermes-agent/issues/29456))、以及缺少 Vision 模型导致 `computer_use` 失效 ([Issue #29407](https://github.com/NousResearch/hermes-agent/issues/29407))。这表明架构仍有较强的“云端大模型依赖”。
3. **多平台网关的“雷区”**：飞书和 WhatsApp 开发者在群聊静音、消息分片、线程拆分等细节上遇到大量阻碍，说明 Gateway 层在处理不同 IM 协议的边缘情况时仍需大量打磨。

---

## 8. 待处理积压
以下高价值或高优先级项仍处于 Open 状态且缺乏明确的解决时间表，需引起维护团队关注：

- **[PR #27432 [P1]](https://github.com/NousResearch/hermes-agent/pull/27432)**: **会话历史上下文泄漏安全修复**。涉及核心架构，已提交 4 天但尚未合并，建议立即进行代码审查并推进。
- **[Issue #29285 [P1]](https://github.com/NousResearch/hermes-agent/issues/29285)**: **认证系统覆写配置问题**。涉及底层状态机，目前尚无关联的 Fix PR，需尽快确认修复方案以恢复用户信任。
- **[Issue #26847 [P3]](https://github.com/NousResearch/hermes-agent/issues/26847)**: **xAI OAuth 对标准订阅用户返回 403**。此为外部上游 API 故障，但影响了大量新接入的 Grok 用户，需要社区明确给出 workaround 或上游沟通进展。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-05-21 的开源项目动态日报。

### 1. 今日速览
过去 24 小时内，PicoClaw 项目呈现出极高的社区活跃度与开发推进速度，整体处于健康且快速迭代的上升期。
- **代码提交与合并活跃**：单日产生 27 个 PR 更新，其中 16 个处于待合并状态，11 个已顺利合并或关闭，显示核心维护者正在高频审查代码。
- **社区参与度高**：Issues 板块共有 8 条更新（7 条新开或活跃，1 条关闭），包含多个长草后重新激活的讨论，表明社区对项目走向保持持续关注。
- **底层架构持续加固**：今日的 PR 集中在安全防护、Agent 循环稳定性、背压处理和上下文超时等底层核心模块，项目正在向企业级稳定性迈进。
- **生态扩展**：新增了对 DeepSeek 思考模式映射、Android Termux 环境运行等生态请求。

### 2. 版本发布
- **[ nightly ] v0.2.8-nightly.20260520.639b3270** ([Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main))
  - **更新说明**：自动化的 Nightly 构建版本。该版本包含了今日合并的多个关键性修复（如安全头、MCP 初始化、ChatGPT OAuth 修复等）。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定情况，建议测试环境优先验证。

### 3. 项目进展
今日共有 11 个 PR 被合并或关闭，显著提升了系统的**安全性**、**兼容性**与**工具链丰富度**：
- **安全防护加固**：合并了 PR #2900，增加了 CSRF 保护、路径遍历验证和安全响应头，大幅提升了 Web 后端的安全性。
- **工具链与协议支持扩展**：
  - PR #2691 合并，正式引入了 `get_current_time` 工具，弥补了智能体对时间感知的短板。
  - PR #2757 关闭，优化了 OpenAI OAuth 认证流程，修复了 Codex 和转录功能的流式输出问题。
- **系统鲁棒性提升**：PR #2725 的合并使得 MCP（Model Context Protocol）服务器初始化失败时不再导致应用崩溃，有效杜绝了网关“僵尸状态”。
- **沙箱逃逸修复**：PR #2693 修复了通过 `find /` 和 `ls /` 绕过工作区沙箱的严重隐患。

### 4. 社区热点
当前社区讨论最热烈的话题集中在**流式处理**与**多渠道富媒体支持**上：
- **Web Chat 流式输出需求 (Issue #1950，9 条评论)**：用户强烈希望 Web 聊天支持 Server-Sent Events (SSE) 流式输出。该需求与 Issue #2404（请求在配置中支持流式 HTTP 请求）产生强烈共鸣，表明**“打字机效果”已成为阻碍 Web 端用户体验的核心痛点**。
- **富媒体消息支持 (Issue #2855 & PR #2856，联动)**：开发者 bogdanovich 提议扩展 `message` 工具以支持多媒体附件。这反映了用户不再满足于纯文本交互，希望在 Telegram 等 Channel 中实现图文混排的富媒体发送体验。

### 5. Bug 与稳定性
今日报告了数个关键的稳定性与兼容性 Bug，部分已有对应修复 PR：
- **[P0 致命] 单例 PID 检测导致崩溃循环 (Issue #2720)**：
  - **问题**：网关重启时，若旧的 PID 被系统复用（如分配给 `systemd-resolved`），会导致网关无限崩溃。
  - **状态**：✅ **已有修复 PR #2813**，正在审查中。
- **[P1 高危] 系统崩溃后的内存元数据漂移 (Issue #2907 相关)**：
  - **问题**：JSONL 存储在崩溃后可能出现数据与元数据不一致。
  - **状态**：✅ **已有修复 PR #2907**，提出了解决写入间隙的方案。
- **[P1 稳定性] Agent 循环重载引发 Panic 与泄漏**：
  - **问题**：Agent 在重载配置时存在 goroutine 泄漏和崩溃风险。
  - **状态**：✅ **已有修复 PR #2904**，重构了生命周期管理。
- **[P2 中危] MQTT 频道 TLS 验证绕过**：
  - **问题**：硬编码了 `InsecureSkipVerify: true`，存在中间人攻击风险。
  - **状态**：✅ **已有修复 PR #2899**，将其改为可配置项并默认关闭。

### 6. 功能请求与路线图信号
今日的新 Feature 请求释放了明确的社区扩容信号：
- **DeepSeek 思考模式映射 (Issue #2903)**：要求针对 DeepSeek 模型的 `thinking_level` 进行原生的 1:1 适配，而非粗暴套用 OpenAI 协议。这反映出**用户对国产大模型的精细化适配需求正在增加**。
- **GPT4Free 接入支持 (Issue #2901)**：用户希望在轻量级硬件（如树莓派）上通过 GPT4Free 接入免费的推理后端。如果合并，将极大降低个人玩家的部署成本。
- **出厂重置功能 (PR #2891 已关闭/重构中)**：面对版本快速迭代带来的配置文件不兼容问题，引入一键恢复出厂设置功能显得尤为必要，相关实现正在调整中。

### 7. 用户反馈摘要
通过近期的 Issue 提取，真实用户反馈呈现以下画像：
- **使用场景**：大量用户将 PicoClaw 部署在 **Raspberry Pi (ARM64)** 甚至 **Android Termux** 环境中作为个人 AI 助手。此外，通过 WhatsApp、Telegram 等社交软件控制 AI 也是主流玩法。
- **核心痛点**：
  1. **认证机制脆弱**：Issue #2769 反映在多个 Provider 间容易出现 401 验证失败。
  2. **配置升级繁琐**：版本迭代过快导致配置文件失效，急需重置功能兜底。
  3. **视觉体验缺失**：Web 端无流式输出、消息不支持图文混排，体验不够现代。

### 8. 待处理积压
以下重要 Issue/PR 已经被标记为 `stale`（长草）或有待 Close，需要核心团队及时介入：
- **[PR #2856] 支持 Telegram 富媒体发送**：代码已提交但缺乏足量 Review，建议维护者优先推进，以完善多模态体验。
- **[PR #2768] 暂时性 LLM HTTP 错误的重试机制**：目前 OpenRouter 等 500 错误极易导致 Agent 直接挂起，该 PR 对稳定性至关重要，建议尽快排期合并。
- **[Issue #2625] 提供 WhatsApp 支持的预编译版本**：用户反馈目前的默认 ARM 构建去除了 WhatsApp 支持，导致树莓派玩家需手动编译，增加了门槛。
- **[PR #2858] 安全执行 Markdown Heredoc**：该 PR 解决了安全拦截机制误杀正常 Markdown 代码块的问题，等待合并以优化开发者体验。

---
*数据分析截止时间：2026-05-21 08:00 UTC | 数据来源：GitHub sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
NanoClaw 在过去 24 小时内保持了极高的开发活跃度，共产生 **23 个 PR 更新**（其中 6 个已合并/关闭）和 **5 个 Issue 更新**（2 个已关闭）。项目当前的焦点明显集中在 **多通道（特别是 WhatsApp）集成的稳定性修复**、**容器运行时安全加固**以及**底层架构（ACP协议、DB抽象）的扩展**。尽管没有发布新版本，但大量高质量的修复 PR 被合并，表明项目正在为下一个稳定版本进行密集的缺陷打磨。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，标志着项目在**安装体验、群组消息处理和系统稳定性**上迈出了实质性的一步：
*   **WhatsApp @提及机制修复**：合并了 [PR #2565](https://github.com/nanocoai/nanoclaw/pull/2565)，通过 `contextInfo.mentionedJid` 准确检测群组 @提及，解决了底层路由错误的痛点，并随之关闭了 [Issue #2560](https://github.com/nanocoai/nanoclaw/issues/2560)。
*   **安装部署体验优化**：合并了来自 `dooha333` 的系列安装脚本修复 PR：
    *   [PR #2052](https://github.com/nanocoai/nanoclaw/pull/2052)：自动引导本地 OneCLI 管理员，确保首次安装顺利完成。
    *   [PR #2054](https://github.com/nanocoai/nanoclaw/pull/2054)：修复了由 spinner 驱动的设置步骤中 `sudo` 提示不可见导致的挂起问题。
    *   [PR #2056](https://github.com/nanocoai/nanoclaw/pull/2056)：增加 LXC 环境检测并静音 polkit 噪音。
    *   [PR #2057](https://github.com/nanocoai/nanoclaw/pull/2057)：使 systemd 可在 LXC 容器中安装。
*   **权限管控优化**：关闭了 [PR #2143](https://github.com/nanocoai/nanoclaw/pull/2143)，引入了管理员取消活动代理运行的能力。

## 4. 社区热点
当前社区最关注的话题集中在**协议扩展**与**资源开销优化**：
*   **Agent Client Protocol (ACP) 接入**：[PR #2575](https://github.com/nanocoai/nanoclaw/pull/2575) 提出了添加 `claw-acp` 功能，使 NanoClaw 可以作为 ACP 服务器供 WebStorm、Zed 等 IDE 作为 AI 后端使用。这标志着 NanoClaw 正试图打破单一助手边界，向泛用型 AI 基础设施演进。
*   **上下文窗口感知**：[PR #2573](https://github.com/nanocoai/nanoclaw/pull/2573) 提出将上下文窗口使用情况暴露给 Agent 自身。这一改进直击大模型应用的核心痛点——"自我认知"缺失导致的上下文溢出或过早压缩。
*   **Token 消耗优化请求**：[PR #2571](https://github.com/nanocoai/nanoclaw/pull/2571) 建议引入 `/add-rtk` 技能，通过 CLI 代理为开发命令节省 60-90% 的 Token 消耗，反映了用户在规模化部署 AI 智能体时对成本控制的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，部分已有修复方案：
*   **🔴 High - WhatsApp 共享号码模式误触发**：[Issue #2570](https://github.com/nanocoai/nanoclaw/issues/2570)。在共享模式下，@提及人类操作员会错误唤醒 AI 智能体。目前暂无关联 Fix PR。
*   **🔴 High - 上下文压缩导致死循环**：[Issue #2561](https://github.com/nanocoai/nanoclaw/issues/2561)（已关闭）。当上下文超过约 165k token 触发压缩后，Agent 无法输出标准 message block，导致无限重试且无熔断机制。
*   **🟠 Medium - 表情符号响应失败**：[Issue #2569](https://github.com/nanocoai/nanoclaw/issues/2569)。处理程序传递了原始表情符号而非 Shortcode，导致 WhatsApp 和 Discord 渠道抛出异常。目前暂无关联 Fix PR。
*   **🟠 Medium - 数据库写入权限错误**：[PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496)。`writeOutboundDirect` 仅以只读模式打开数据库，导致静默写入失败。
*   **🟡 Low - Rootless Podman 运行双重错误**：[PR #2572](https://github.com/nanocoai/nanoclaw/pull/2572) 已提交修复。解决 UID 映射和挂载点错误导致的容器启动失败。

## 6. 功能请求与路线图信号
基于近期动态，项目未来的迭代方向显露端倪：
*   **企业级数据库支持**：[PR #1723](https://github.com/nanocoai/nanoclaw/pull/1723) 正在推进基于 SQLite + SeekDB 的可插拔中央管理数据库重构。这暗示项目正在为更高并发的企业级部署做准备。
*   **深度安全隔离强化**：`Hinotoi-agent` 提交了多个安全加固 PR，包括拒绝符号链接目录（[PR #1999](https://github.com/nanocoai/nanoclaw/pull/1999)）、限制通道信任源（[PR #2004](https://github.com/nanocoai/nanoclaw/pull/2004)）、限制通道审批目标（[PR #2566](https://github.com/nanocoai/nanoclaw/pull/2566)）以及 Agent 间通信授权（[PR #2383](https://github.com/nanocoai/nanoclaw/pull/2383)）。这一系列动作表明项目正在为支持多租户或高敏感环境扫清安全障碍。
*   **本地化记忆增强**：[PR #2567](https://github.com/nanocoai/nanoclaw/pull/2567) 提出修复 `CLAUDE.local.md` 的导入问题，确保群组级别的隔离记忆能够真正触达 Agent。

## 7. 用户反馈摘要
从 Issue 提交细节来看，核心用户的痛点集中在以下几个方面：
*   **多租户/共享模式下的边界模糊**：用户 `jonazri` 提出的 [Issue #2570](https://github.com/nanocoai/nanoclaw/issues/2570) 和 [Issue #2569](https://github.com/nanocoai/nanoclaw/issues/2569) 表明，当 NanoClaw 作为"共享机器人"运行时，如何精准区分"人类"与"AI"、不同平台标准（如 Emoji Shortcode）的差异兼容，是实际部署中极易踩坑的盲区。
*   **运行态资源失控**：用户 `yg-dev-git` 报告的 [Issue #2561](https://github.com/nanocoai/nanoclaw/issues/2561) 揭示了长对话场景下由于压缩机制引发的死循环，表明社区对**容错机制（如 Circuit Breaker）**的诉求强烈。

## 8. 待处理积压
*   **陈旧分支警告**：[Issue #2574](https://github.com/nanocoai/nanoclaw/issues/2574) 指出 `skill/apple-container` 分支相对于主分支严重滞后。如果强行合并，会导致近期的容器化基础设施工作丢失。建议维护者尽快评估是否重构该分支或宣布废弃。
*   **消息重复发送问题**：[PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) 提出已 2 天，旨在修复轮询循环中 `send_message` 导致的文本重复发送问题，尚待维护者审查合并。
*   **群组名称冲突**：[PR #2564](https://github.com/nanocoai/nanoclaw/pull/2564) 和 [PR #2563](https://github.com/nanocoai/nanoclaw/pull/2563) 均涉及群组消息目标和名称作用域的隔离修复，亟待合并以提升多群组部署的稳定性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度呈现**低频整理状态**。项目今日无新开或关闭的 Issue，无代码合并，也无新版本发布。然而，两个重量级的待合并 Pull Requests 均在昨日（5月20日）产生了更新动向，显示出核心开发者在底层网络兼容性和高级调度功能上的持续推进。整体而言，项目当前处于功能迭代后期的代码审查与测试完善阶段，项目健康度保持稳定。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
*今日无已合并的 PR 或已关闭的 Issue。* 

但值得注意的是，项目资源目前正集中在两个长期活跃且非常关键的开放性 PR 上：
*   **网络底层修复的测试覆盖**：针对 Windows `getAddressList` 的 PR [#892](https://github.com/nullclaw/nullclaw/pull/892) 正在增加回归测试。
*   **定时任务子智能体引擎**：Cron 子智能体功能的 PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 正在进行持续的安全加固与代码更新。

## 4. 社区热点
今日没有新开的热点讨论，但以下两个 PR 构成了目前社区（及核心贡献者）的关注焦点：

*   🔗 [PR #783 feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783) | 作者: yanggf8
    *   **动态**：昨日（5月20日）更新。
    *   **分析**：该 PR 旨在为 NullClaw 引入强大的定时任务调度引擎。它不仅包含基于数据库的后端调度器（记录运行历史），还引入了 JSON CLI 输出和安全加固机制。作为个人 AI 助手，Cron 子智能体是实现“自动化执行”的关键诉求，反映出项目正从“对话式 AI”向“自主执行智能体”演进。
*   🔗 [PR #892 test(compat/net): add Windows getAddressList regression tests](https://github.com/nullclaw/nullclaw/pull/892) | 作者: fatihaziz
    *   **动态**：昨日（5月20日）更新。
    *   **分析**：该 PR 修复了 Windows 环境下的一个致命网络解析问题，并为之前的修复添加了回归测试。这体现了项目对跨平台稳定性的重视。

## 5. Bug 与稳定性
今日无新报告的 Bug。

**历史关键 Bug 追踪**：
在 [PR #892](https://github.com/nullclaw/nullclaw/pull/892) 中追踪了此前存在的一个**严重级别 Bug**：
*   **问题表现**：在 Windows 环境下，`getAddressList` 此前仅作为 `localhost-only` 的存根代码存在。这导致所有需要预解析主机名的 provider chat completion（即与大模型 API 的通信）都会以 `HostResolutionFailed` 崩溃。
*   **当前状态**：该问题已在 `main` 分支通过 `getAddressListWindows` 解析器修复（涉及提交 973bfa4 等），PR #892 正在为其补充回归测试以防未来再次破坏。

## 6. 功能请求与路线图信号
虽然今日无新增功能请求 Issues，但从目前开放的 PR 中可以提取出明确的项目路线图信号：

1.  **高度自动化的任务调度（即将合并）**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 预示着 NullClaw 很快会原生支持定时技能触发、Agent 调用和 Shell 任务，支持时区偏移和路由分发。这极有可能是下一个大版本的核心卖点。
2.  **多平台网络兼容性完善**：从 [PR #892](https://github.com/nullclaw/nullclaw/pull/892) 看出，团队正在努力消除 Windows 平台上的网络层 Stub（存根），这意味着未来 Windows 用户在使用各种第三方 LLM Provider 时将获得与 Linux/macOS 一致的稳定性。

## 7. 用户反馈摘要
*过去 24 小时内未捕捉到新的用户评论反馈。*

结合 PR 提交信息推断，**Windows 用户此前遭遇了无法正常调用大模型 API 的严重痛点**（由于域名解析失败），该痛点现已在底层被解决，正在等待随新版本发布正式释出。

## 8. 待处理积压
目前项目有 2 个活跃的 PR 处于待合并状态长达数周，需要维护者重点关注以推进版本迭代：

*   ⚠️ **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**：开放状态已达 **44 天**（自 2026-04-07）。鉴于其涉及庞大的 Cron 子系统（包括 DB 历史表、Worker、安全模块等），维护者需重点审查其架构设计及潜在的内存泄漏风险。
*   ⚠️ **[PR #892](https://github.com/nullclaw/nullclaw/pull/892)**：开放状态已达 **16 天**（自 2026-05-05）。属于底层网络兼容性测试，建议在确认 CI 流水线通过后尽快合入 `main`，以改善 Windows 用户的开发与使用体验。

---
*本报告由 AI 智能体基于 GitHub 数据自动生成，数据分析截止于 2026-05-21。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026年5月21日 IronClaw (github.com/nearai/ironclaw) 项目动态日报：

# 📊 IronClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时，IronClaw 项目保持了极高的开发活跃度，整体处于**架构快速演进与功能重构**阶段。
项目当前的重心全面聚焦于底层架构 **"Reborn"** 的升级，旨在重塑宿主运行时、代理循环及安全内核。今日共产生 **30 条 Issue 更新（23 新开/活跃，7 关闭）** 和 **40 条 PR 更新（25 待合并，15 已合并/关闭）**，虽然未发布任何稳定版本，但核心代码库正在经历高频的重构与集成。安全管控、技能系统和 WebUI 的解耦是今日最亮眼的工程进展，项目架构健康度持续向好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，核心团队在多个关键模块取得了实质性突破：

*   **Reborn 核心能力移植与安全管控**：
    *   **PR #3816**：成功将 Shell 执行移植为 Reborn 的内置能力（`builtin.shell`），统一了第一方能力的派发路径。
    *   **PR #3820**：在宿主能力派发前强制执行运行时策略，增加了网络安全拒绝覆盖，大幅提升了沙箱安全性。
    *   **PR #3818**：强化了凭证管理，生产环境的 HTTP 出站服务开始拒绝直接传递凭证，强制使用分阶段的凭证注入。
*   **运行时与技能扩展体系**：
    *   **PR #3823**：打通了 Reborn 运行时的技能上下文输入源，使得模型调用能够准确获取技能上下文。
    *   **PR #3824**：定义了 Reborn 的技能扩展合约，明确划分了核心策略注入与扩展生命周期的边界。
*   **WebUI v2 Beta 基础建设**：
    *   **PR #3782**：添加了 CLI 的 `serve` 命令交接，为 Reborn WebUI 路径铺平了本地开发入口。
    *   随着多个 M2 (Inbound Workflow) 相关的 Issues（如 #3612, #3627, #3628, #3629, #3630）被集中关闭，WebUI Beta 版的门面 API、错误分类及 DTO 生命周期设计已基本敲定。

## 4. 社区热点
今日社区与核心开发者的互动主要围绕核心架构的顶层设计展开：

*   **E2E 测试框架重构**：由 henrypark133 提出的 **Issue #3702** 讨论热烈（4 条评论）。该 Issue 旨在重新审视并实现二进制端到端测试框架，反映了社区/团队对重构后代码质量的严格把控。
*   **子代理生成架构设计**：**Issue #3798** 提出了 Reborn 代理循环下的子代理生成设计方案。这是迈向多代理协作的关键一步，目前正在广泛征求意见。
*   **v0.28.2 回归问题确认**：**Issue #3734** 确认了在 Non-TEE 环境下 v0.28.2 版本中提供商配置 UI 控件丢失的严重回归问题，引起了使用者的广泛关注。

## 5. Bug 与稳定性
今日发现的缺陷主要集中在线程状态恢复与 UI 控件丢失上，需重点关注：

*   🔴 **P0 级别 UI 回归**：**Issue #3734** - v0.28.2 版本中，设置里的 Inference provider 无法显示 API Key 和 Fetch available models 控件（v0.28.1 正常）。目前尚无修复 PR。
*   🟠 **状态注入阻断**：**Issue #3821** - `Thread::restore_from_messages` 函数在按时间顺序重建上下文时会丢弃孤立的 assistant 行，导致无法在带外注入上下文。此 bug 可能影响多轮对话的连贯性。
*   🟡 **Nightly E2E 失败**：**Issue #3447** - 常规的端到端夜间测试构建失败，工作流全量跑挂，需要 CI/CD 团队排查介入。

## 6. 功能请求与路线图信号
从近期新开的 Issues 可以清晰看出 IronClaw 接下来几个月的路线图图谱：

*   **主流第三方工具的原生集成（Lane 计划）**：
    *   **Issue #3803 / #3805**：在密钥基座准备好后，将实现 Notion MCP 和生产工具组合。
    *   **Issue #3806**：实现 GitHub WASM 的读写能力路径。
    *   **Issue #3829**：实现 Google Calendar 和 Gmail 的 extension-v2 原生能力。
*   **WebUI 彻底独立**：**Issue #3580** 正在规划将 WebUI/Web Gateway 完全移植到 Reborn 原生托管表面，摆脱历史包袱。
*   **多租户权限模型升级**：**Issue #3796** 提出增加租户范围的群组和项目 ACL，表明 IronClaw 正在向面向团队和企业级的 SaaS 化部署迈进。
*   **评测体系完善**：**PR #3808** 提议增加 `/benchmark` 斜杠命令，以便在 PR 级别触发 nearai-bench 基准测试，说明项目越来越看重模型推理能力的量化评估。

## 7. 用户反馈摘要
通过提炼今日的 Issue，开发者和用户的核心诉求集中在以下三点：
1.  **上下文连贯性痛点**：用户对于底层上下文重建逻辑导致的上下文丢失非常敏感。确保 agent 不丢失“记忆”和中间状态，是目前关注的焦点。
2.  **UI 设置的易用性**：v0.28.2 的配置项遮挡（#3734）让用户无法正常配置模型提供商，这是阻碍正常使用的严重体验问题。
3.  **异步通知缺乏上下文**：**Issue #1519** 指出，当代理执行长期任务发送通知时，由于在后台线程处理，用户在聊天界面缺乏足够的前后文感知。这表明用户对 AI 自治任务的可视化追踪有强烈需求。

## 8. 待处理积压
以下重要 Issue 虽然标记为高优先级（P0/P1），但近期主要停留在规划阶段或缺乏实质性进展，需提醒维护者推进：

*   **审批与授权交互机制（P0）**：**Issue #3094** - 挂起近一个月，需要为 Reborn 添加 approval/auth 交互服务，这是安全管控闭环的重要一环。
*   **文件系统错误类型化（P0）**：**Issue #3610** - 需要保留类型化的文件系统错误，避免退化为脆弱的字符串匹配，目前尚未有相关修复 PR 动静。
*   **事件流管理器（P0）**：**Issue #3281** - 用于持久化投影扇出的 EventStreamManager，是 WebUI 实时响应的核心基座，需持续投入。
*   **Telegram v2 入站追踪（PR）**：**PR #3590** - 作为一项超大型的数据库迁移与通道重构 PR，已打开 8 天，亟待核心团队进行深度 Code Review 以防阻塞后续的通道适配工作。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 2026 年 5 月 21 日 LobsterAI 项目动态日报：

# 📊 LobsterAI 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时，LobsterAI 项目展现出**极高的开发活跃度与良好的社区参与度**。项目核心团队今日集中发力，一口气合并了 **7 个核心 Pull Requests**，重点攻克了多显示器 DPI 适配、流式对话中的 Thinking Block 渲染、SSE 竞态条件以及底层网关稳定性等痛点。社区侧同样保持活跃，新增了 3 个 Issue，其中包含多应用网关端口冲突的严重阻断性 Bug 报告。目前仍有 17 个 PR 处于待合并状态，涵盖大量 UI/UX 优化及底层架构改进，项目正朝着更加稳定和功能丰富的下一版本稳步推进。

## 2. 版本发布
*   **最新 Releases**：今日无新版本发布。鉴于当前有大量累积的待合并 PR 和刚合并的稳定性修复，预计项目将在近期进行版本集结与发布。

## 3. 项目进展 (已合并/关闭的 PR)
今日共有 7 个 PR 被合并/关闭，主要针对运行时稳定性、前端渲染体验和核心功能扩展，标志着项目在**工程健壮性**和**交互体验**上迈出了一大步：

*   **模型思考过程可视化与自定义参数支持** ([PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019))：
    *   新增 per-model Custom Params 支持（透传 `temperature`、`thinking` 等参数），并实现了独立生命周期的 Thinking Block 流式渲染展示。
*   **上下文窗口控制优化** ([PR #2021](https://github.com/netease-youdao/LobsterAI/pull/2021))：
    *   套餐模型开始支持 `contextWindow` 配置，允许客户端通过 `openclaw.json` 精准控制上下文截断长度，且保持了向后兼容。
*   **前端预览体验与稳定性修复** ([PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) & [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023))：
    *   优化了 HTML 预览与源码展示（大文件懒加载、明暗主题适配），大幅提升了浏览器和 webfetch 的请求成功率与稳定性。
*   **网关与底层稳定性提升** ([PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018) & [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015))：
    *   修复了 token 刷新导致 openclaw gateway 异常重启的问题，并妥善处理了上下文压缩重试和工具调用结果的间隙问题。
*   **Windows 跨 DPI 多显示器 Bug 修复** ([PR #2020](https://github.com/netease-youdao/LobsterAI/pull/2020))：
    *   彻底解决了在 Windows 不同 DPI 的多屏环境下，无边框窗口尺寸异常缩小（如 800×600 变成 400×300）的痛点问题。

## 4. 社区热点
今日社区讨论的焦点主要集中在**不同生产力工具的共存冲突**以及**本地化部署体验**上：
*   **多应用网关冲突** ([Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698))：用户报告在运行“有道龙虾”时安装“智企帝王蟹”会必现 Gateway 端口冲突和鉴权失败。此 Issue 引起了较多共鸣，反映出企业用户在本地同时运行多个 AI Agent 框架时的刚性诉求。
*   **本地运行时缺失阻断使用** ([Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017))：多位用户反馈本地打包或运行时提示“未检测到内置 OpenClaw runtime (cfmind)”，导致无法正常输入和建任务，暴露出本地初始化引导或依赖检测机制仍有优化空间。

## 5. Bug 与稳定性
按严重程度排序，今日重点 Bug 及修复状态如下：
1.  **[P0 严重] 端口与进程冲突** ([Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698))：与智企帝王蟹应用存在 Gateway 端口强占和进程竞争，导致其中一方无响应。（*目前暂未看到对应的 fix PR*）
2.  **[P1 阻断] 本地 Runtime 初始化异常** ([Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017))：由于缺少 cfmind runtime 导致本地功能完全不可用。（*已有类似历史修复记录，需验证回归情况*）
3.  **[P2 已修复] SSE 监听器竞态条件** ([PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576) - 待合并)：快速连续发送消息时，旧请求的 abort 回调会错误清理新请求的 SSE 流，导致消息静默丢失。
4.  **[P2 已修复] 定时任务状态覆盖** ([PR #1570](https://github.com/netease-youdao/LobsterAI/pull/1570) - 待合并)：编辑已禁用的定时任务并保存时，任务会被强制重新开启。

## 6. 功能请求与路线图信号
从近期的 PR 与 Issues 来看，项目的发展路线图呈现出明显的信号：
*   **更深度的模型推理控制**：([PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019)) 透传 Custom Params 和 Thinking block 展示，表明 LobsterAI 正在积极适配具有深度思考能力的前沿大模型（如 Claude 3.5 Sonnet, o1 等）。
*   **IM 集成与斜杠命令**：([PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573)) 社区正在为 Telegram/钉钉/飞书等 IM 渠道引入 `/help`、`/status`、`/new` 等斜杠命令，大幅提升泛化端侧控制能力。
*   **拟人化/数字人引擎支持**：([Issue #2016](https://github.com/netease-youdao/LobsterAI/issues/2016)) 有用户提出增加 `openhuman` 引擎功能，提示项目未来可能会在多模态交互或数字人领域拓展。

## 7. 用户反馈摘要
通过提炼 Issue 细节，梳理出真实用户的三大核心反馈：
1.  **环境搭建门槛依然较高**：用户在本地构建（如 macOS 的 sha256sum 兼容问题 [PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)）和 runtime 嗅探阶段经常遇到阻塞，期望提供更健壮的一键初始化脚本。
2.  **视觉与交互体验需求升级**：用户对细节要求提高，例如希望看到代码高亮、耗时计时器（[PR #1548](https://github.com/netease-youdao/LobsterAI/pull/1548)）、文件分屏预览（[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)）以及图片缩略图预览（[PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580)），说明产品正从“极客可用”向“大众好用”阶段过渡。
3.  **生态集成兼容性呼声强烈**：用户希望 LobsterAI 能更好地与操作系统底层及其他 AI 应用和平共处（如端口冲突、多屏 DPI 渲染问题）。

## 8. 待处理积压
目前项目中有 **17 个待合并的 PR** 和部分长期未解决的 Issue，提醒维护者关注以下高价值但被搁置的贡献：
*   **长期挂起的高价值 PR**：
    *   [PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576)：修复 SSE 流监听器竞态条件（防数据丢失）。
    *   [PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560)：修复 Agent 编辑后无法切回聊天界面的 UI 逻辑 Bug。
    *   [PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557)：设置面板侧栏增加搜索筛选功能。
*   **长期未响应的关键 Issue**：
    *   [Issue #1568](https://github.com/netease-youdao/LobsterAI/issues/1568)（已关闭）：关于钉钉流式消息的接入配置问题，反映出现有文档或接入引导可能不够清晰，建议补充相关 Best Practice 文档。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 21 日 Moltis 项目动态日报：

---

# 📊 Moltis 开源项目日报 (2026-05-21)

## 1. 今日速览
过去 24 小时，Moltis 项目整体处于**高活跃、稳推进**的健康状态。社区端迎来了 2 个全新的功能增强提议（Issues #1027, #1028），表明用户正积极探索更丰富的 Provider 支持与 Agent 知识库边界。在研发端，核心团队与贡献者集中处理了 3 个关键 Pull Requests，成功合并/关闭了涵盖**内存管理增强、进程泄漏修复以及安全 Vaults 密码同步**的重要代码。整体来看，项目今日在提升运行稳定性（Rust 层进程控制）和拓展基础能力（文件系统与安全机制）方面迈出了扎实的一步。

## 2. 版本发布
**无**。今日无新版本发布。考虑到近期合并的内存管理架构优化（PR #1009, #1010）和安全修复，预计项目正在为下一个 Minor/Patch 版本进行代码储备。

## 3. 项目进展
今日共有 3 个 PR 被标记为 [CLOSED]（包含合并或关闭），项目的核心底层能力得到显著强化：

*   **feat(memory): 允许嵌套子目录和集合感知写入 (PR [#1010](https://github.com/moltis-org/moltis/pull/1010))**
    *   **进展评价**：大幅增强了 Agent 的长期记忆管理能力。此前 Agent 仅支持单层目录或单一的 `MEMORY.md` 文件，此次更新使底层 QMD 能够支持任意目录结构（如 `agents/**` 等）。这让多 Agent 协作、分类存储知识库成为可能。
*   **fix(qmd): 修复超时时的子进程泄漏问题 (PR [#1009](https://github.com/moltis-org/moltis/pull/1009))**
    *   **进展评价**：关键的底层稳定性修复。修复了 `run_with_timeout` 到期时，由于未设置 `kill_on_drop` 导致 Node/QMD 子进程变为僵尸进程泄漏内存的问题。极大提升了长时间运行下的宿主机资源健康度。
*   **fix(vault): 保持身份验证密码同步 (PR [#1026](https://github.com/moltis-org/moltis/pull/1026))**
    *   **进展评价**：提升了安全模块的健壮性。解决了身份验证密码更改与 Vault 密码轮换不一致的问题，并拒绝可能导致密码不匹配的重置操作，同时补充了相关的回归测试。

## 4. 社区热点
今日社区最活跃的话题集中在**智能化体验**与**生态扩展**两个方面，用户提出了 2 个高价值的新 Feature 请求：

*   **Agent 开箱即用访问官方文档的请求 (Issue [#1028](https://github.com/moltis-org/moltis/issues/1028))**
    *   **诉求分析**：作者 @IlyaBizyaev 提出，Agent 应当能够自带（OOTB）访问 Moltis 文档的能力。这反映出用户在构建 Agent 时，希望智能体能自我学习平台使用手册，从而降低系统 Prompt 的构建门槛。
*   **支持 Google Antigravity SDK 作为 Provider (Issue [#1027](https://github.com/moltis-org/moltis/issues/1027))**
    *   **诉求分析**：作者 @BrandonStudio 希望接入新的 LLM 提供商。表明 Moltis 社区对前沿大模型 SDK 的跟进需求非常迫切，多 Provider 兼容性仍是用户选择框架的重要考量。

## 5. Bug 与稳定性
*   **[中等] Docker 环境下浏览器沙箱启动失败 (Issue [#977](https://github.com/moltis-org/moltis/issues/977))**
    *   **状态**：已关闭 [CLOSED]
    *   **详情**：在 Proxmox LXC 容器挂载 Docker Socket 运行时，Browser tool 持续报错 `Failed to create /data/browse...`。该问题在创建后经过多日追踪（评论数 3 条），已于昨日解决关闭。这是虚拟化/容器化部署用户常遇到的权限与挂载痛点，修复后提升了云端部署的稳定性。

## 6. 功能请求与路线图信号
综合今日的 Issues 和已合并的 PR，可以看出 Moltis 近期的**路线图信号**非常明确：
1.  **存储与记忆架构升级**：结合今日合并的嵌套目录记忆功能（PR #1010）和子进程超时机制（PR #1009），项目正在重构其 RAG 和记忆底座，预计未来几周将推出更高级的基于文件夹的知识库管理 UI。
2.  **Provider 生态扩展**：针对今日提出的 Google Antigravity SDK 需求（Issue #1027），如果社区反响热烈，极有可能在下一个版本中被纳入开发计划。
3.  **开箱即用的智能化**：Issue #1028 暗示项目可能会在后续版本中内置 RAG 文档检索链，让 Agent 在面对用户提问时，能自动查阅官方文档进行作答。

## 7. 用户反馈摘要
从近期的 Issue 正文和交互中，可以提炼出以下真实用户画像与痛点：
*   **高级部署需求普遍**：用户会在 Proxmox 环境下使用 LXC 容器嵌套运行 Docker（Issue #977），说明有不少玩家将其作为自托管（Self-hosted）的核心服务，对沙箱环境的隔离与权限控制要求极高。
*   **文件组织痛点**：PR #1010 的合并反映出，用户在此前受够了“只能单一文件/扁平目录”的限制，对于“分类存储 Agent 思考过程/记忆”的需求非常强烈。
*   **安全性不能妥协**：PR #1026 表明，企业级或高阶用户在使用 Vault 管理密钥时，非常看重状态的一致性，任何密码/认证不同步都是不可接受的底线。

## 8. 待处理积压
*   **新提议待响应**：Issue [#1027](https://github.com/moltis-org/moltis/issues/1027) (支持 Google Antigravity SDK) 与 Issue [#1028](https://github.com/moltis-org/moltis/issues/1028) (Agent 访问文档) 为昨日刚刚创建，目前仍无官方 Core Team 成员回复。建议维护者在 48 小时内进行初步评估和打标（如 `label: enhancement` 或 ` backlog`），以维持社区贡献者的热情。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw (QwenPaw) project daily report for 2026-05-21, based on the provided GitHub data.

---

# CoPaw (QwenPaw) 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目保持了极高的社区热度与迭代速度。项目共处理了 **38 条 Issues（关闭 22 个，新开/活跃 16 个）** 和 **37 条 PRs（合并/关闭 17 个，待处理 20 个）**，并发布了最新的 `v1.1.8.post1` 补丁版本。当前社区的焦点主要集中在 `v1.1.8` 引入的 Pet 桌宠插件导致 Windows 端的崩溃问题，以及 WebUI 在管理大量 Agent 时的性能瓶颈。整体来看，项目处于**高度活跃且快速演进**的健康状态，核心团队及社区贡献者正在积极通过架构优化（如引入 Coding Mode、Skill Market）拓展产品的边界。

## 2. 版本发布
- **Release: [v1.1.8.post1](https://github.com/agentscope-ai/QwenPaw/releases/)** (发布于 2026-05-20)
  - **更新内容**：
    - `docs(install)`: 增加了备份目录说明 ([PR #4534](https://github.com/agentscope-ai/QwenPaw/pull/4534))
    - `feat(provider)`: 新增 OpenCode Go 模型支持，通过 `meta.base_url_options` 进行端点切换 ([PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536))
  - **迁移注意**：从低版本升级到 1.1.8 及其后缀版本的用户，需注意备份和恢复 Secrets 时的兼容性机制。

## 3. 项目进展
今日共合并/关闭了 17 个 PR，项目在通道兼容性、前端体验和系统稳定性上取得了实质性进展：
- **通道与模型支持**：[PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) 被合并，正式支持了 OpenCode Go 端点。此外，[PR #2862](https://github.com/agentscope-ai/QwenPaw/pull/2862) 合并，为飞书通道引入了流式打字机卡片效果。
- **Pet 桌面宠物优化**：针对桌宠的多个问题，[PR #4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) 被合并，重写了 Windows 下的进程检测逻辑并修复了生命周期管理。
- **备份与权限修复**：[PR #4563](https://github.com/agentscope-ai/QwenPaw/pull/4563) 修复了 Docker 部署下由于 Host 白名单校验导致 localhost 访问备份接口返回 403 的问题。
- **前端稳定性**：[PR #4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) 修复了控制台中会话 ID（displayId 与 realId）不一致导致的无限切换死循环。

## 4. 社区热点
- **[Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)** (评论: 13)：微信 iLink 通道的定时任务推送失败问题。由于 `context_token` 过期且无重试逻辑，导致隔夜消息发送静默失败，引发了重度企业微信用户的激烈讨论。目前已有对应的 [PR #4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) 提交修复。
- **[Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4477)** (评论: 13)：关于升级后系统提示词错误加载内置默认 `AGENTS.md` 而非工作区文件的 Bug。该问题直接影响到 Agent 的人设一致性，目前已被标记为 `invalid` 或已给出临时解决方案。
- **[Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)** (评论: 7)：当 Agent 数量超过 40 个时，Web UI 访问严重卡顿。这暴露了在前端渲染或后端 Agent 列表接口上可能存在 O(n) 复杂度的性能瓶颈。

## 5. Bug 与稳定性
按严重程度排列今日报告的关键 Bug：
- **🔴 严重（核心进程崩溃）**：
  - **Windows 桌宠闪退**：[Issue #4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) 和 [Issue #4575](https://github.com/agentscope-ai/QwenPaw/issues/4575) 报告了开启 Pet 插件后，发送首条消息会触发 `ConnectTimeout` 导致主程序进程直接被 Kill。**状态：已有 Fix PR ([#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564))。**
- **🟠 高（功能不可用/数据丢失）**：
  - **长期记忆丢失**：[Issue #4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) 指出在多模型切换时，Agent 的 `MEMORY.md` 可能被意外清空。**状态：待修复。**
  - **Docker 密钥恢复失败**：[Issue #4583](https://github.com/agentscope-ai/QwenPaw/issues/4583) 报告在容器化部署下，从历史备份恢复 Secrets 失败。
- **🟡 中（API/通道异常）**：
  - **飞书流式输出失效**：[Issue #4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) 发现飞书 CardKit 的 sequence 初始值设为 0 导致 API 报错。**状态：已有 Fix PR ([#2862](https://github.com/agentscope-ai/QwenPaw/pull/2862))。**
  - **特定 API 模型测试失败**：[Issue #4542](https://github.com/agentscope-ai/QwenPaw/issues/4542) 指出因 `max_tokens=1` 硬编码，导致部分 API（如 B.AI）无法通过连通性测试。

## 6. 功能请求与路线图信号
从社区的 Feature Request 和活跃的 PR 可以窥见项目接下来的演进方向：
- **内置浏览器 IDE (Coding Mode)**：[PR #4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) 正在试图将类 VS Code 的编辑器直接嵌入 QwenPaw 聊天面板。这暗示项目正从“纯对话助手”向“开发环境工具链”拓展。
- **Skill 统一市场**：[PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) 提议引入异步并发的 Skill Market，重构当前的 Hub 客户端，预计将在下个版本大幅提升技能的检索和安装体验。
- **免配置多模态路由**：[Issue #4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) 呼吁实现“用户发图片自动走视觉模型，发语音走语音模型”的智能路由，契合个人 AI 助手傻瓜化的发展趋势。
- **Tauri 桌面端重构**：[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 正在推进使用 Tauri 2.x 替换当前的打包方案，有望彻底解决现有桌面端的诸多兼容性顽疾。

## 7. 用户反馈摘要
- **升级痛点**：部分用户对 Desktop 版本需要“卸载重装”才能升级表示担忧，害怕丢失本地配置（[Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430)）。
- **离线体验不足**：内网环境下 Pet 插件尝试拉取外部 CDN 图片导致报错（[Issue #4554](https://github.com/agentscope-ai/QwenPaw/issues/4554)），表明项目在私有化部署/纯离线场景下的兜底策略还需加强。
- **API 集成需求**：开发者希望 API 调用具备更高的灵活性，如 [PR #4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) 提出的 `extraSystemPrompt` 支持，以便将 QwenPaw 更好地嵌入到第三方业务系统中。

## 8. 待处理积压
- **[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Tauri 2.x 桌面端支持)**：该重大重构 PR 自 4月24日开启至今已达近一个月，状态仍为 `Under Review`，建议维护团队尽快评估合并进度或给出里程碑计划。
- **[Issue #4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) (子 Agent 继承全局配置讨论)**：关于 MCP/ACP 配置是否向下继承的设计讨论尚未得出明确结论，这会影响到复杂多 Agent 架构的最佳实践，需要官方尽快定调。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 ZeptoClaw 项目 2026-05-21 动态日报：

---

# ZeptoClaw 项目动态日报 (2026-05-21)

### 1. 今日速览
过去 24 小时，ZeptoClaw 项目整体处于**低频但高价值的修复维护状态**。项目未收到新的 Issue 反馈，也无新版本发布，但核心贡献者提交了一项关键错误修复（PR #592）。该 PR 精准定位并修复了底层 Provider 路由机制中的一个严重逻辑缺陷（关键词回退策略忽略了已配置的可用性检查）。整体来看，虽然社区交互数据为零，但针对生产环境崩溃的底层代码维护仍在稳步推进，项目处于健康且聚焦的迭代周期。

### 2. 版本发布
*过去 24 小时内项目无新版本发布。*

### 3. 项目进展
今日无已合并或已关闭的 PR。项目目前有 1 个待合并的修复项正在等待 Maintainer 的 Review：
*   **PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) [OPEN] fix(providers): keyword fallback must not claim unconfigured provider**
    *   **进展说明：** 该 PR 修复了模型提供商推断逻辑（`infer_provider_name_for_model`）中的一个隐患。此前，基于关键词的最终回退机制未校验目标 Provider 是否在用户的可用列表（`available_providers`）中，导致系统会错误地将请求路由到未配置的服务商。这项修复直接解决了特定生产环境下 100% 请求报错的阻断性问题，提升了路由引擎的鲁棒性。

### 4. 社区热点
*今日项目无新开的 Issue 或引发大量讨论/评论的活跃 Issue 与 PR。*

### 5. Bug 与稳定性
*   **P0/P1 级别（严重 - 已有修复 PR）**
    *   **问题描述：** 当模型 ID 包含特定关键词（如 `openai/gpt-oss-120b`）时，系统的关键词回退机制会将其错误匹配并声明到一个用户未配置的 Provider，导致请求 100% 失败。该问题已在部署 NIM-served Photon 实例的生产环境中暴露。
    *   **修复状态：** 已提交修复 PR [#592](https://github.com/qhkm/zeptoclaw/pull/592)。修复方案强制要求回退机制必须遵守 `available_providers` 的约束，确保不会将流量分配给未初始化的提供者。

### 6. 功能请求与路线图信号
*今日无新增的功能请求（Issues）。从当前 PR 趋势来看，项目近期的路线图信号高度聚焦于增强作为“个人 AI 助手”底座的“模型路由与多 Provider 负载均衡”的稳定性。*

### 7. 用户反馈摘要
*过去 24 小时内暂无来源于 Issue 的新增用户反馈。*
*(注：从 PR #592 的背景描述中可以侧面提取到一个高价值用户场景：部分企业/进阶用户正在生产环境使用 NIM 提供 Alibaba 的 Qwen1.5-72B-Instruct (Photon) 模型实例，表明项目在高规格本地化/私有化大模型部署场景中有实际使用需求。)*

### 8. 待处理积压
*   **待 Review 的关键 PR**：
    *   如前文所述，由 @Sisuthros 提交的修复 PR [qhkm/zeptoclaw PR #592](https://github.com/qhkm/zeptoclaw/pull/592) 当前仍处于 `[OPEN]` 状态。鉴于该问题会导致特定配置下的生产环境发生阻断性报错（100% 错误率），建议项目维护者（Maintainer）优先进行 Code Review 并安排合并发版，以降低对终端用户的影响。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持了**高度活跃**的开发与社区互动状态。今日共处理了 30 条 Issue（19 条新开/活跃，11 条关闭）和 50 条 PR（仅 3 条合并/关闭，47 条待合并）。
虽然今天**没有发布新版本**，但项目正处于 **v0.8.0 版本发布前的密集攻坚期**。值得注意的是，社区核心开发者正在推进 Multi-agent（多智能体）架构和 V3 配置schema的重大重构，并由此引发了若干底层配置失效的阻断性 Bug。庞大的待合并 PR 数量（47条）表明项目正在积蓄大量功能更新，正等待核心里程碑合并后进行统一校验。

## 2. 版本发布
无。今日暂未发布新的 Release 版本。核心开发精力集中在主分支集成和 `integration/v0.8.0` 分线的稳定性修复上。

## 3. 项目进展
今日仅合并/关闭了 3 条 PR，整体合并节奏依然谨慎，这与项目正在进行的 V3 配置系统重构密切相关：
* **V3 多智能体与配置架构落地确认：** 今日关闭了多个关键的 RFC 和功能追踪 Issue，包括 **RFC: Multi-agent UX flow design ([#5890](zeroclaw-labs/zeroclaw Issue #5890))** 和 **Multi-agent v1 tracker ([#5891](zeroclaw-labs/zeroclaw Issue #5891))**。这标志着多智能体交互的顶层设计已获核心团队批准。
* **Schema v3 迁移推进：** 涉及破坏性字段迁移的 **Schema v3 batch ([#5947](zeroclaw-labs/zeroclaw Issue #5947))** 及相关环境变量覆写机制 **V3 env-var override ([#6375](zeroclaw-labs/zeroclaw Issue #6375))** 均已关闭并被接受，说明底层配置引擎的重构已初步具备合并条件。

## 4. 社区热点
* **[Bug]: Incompatible with DeepSeek-V4 API format ([#6059](zeroclaw-labs/zeroclaw Issue #6059))**
  **热度：** 👍 4 | 评论：11
  **分析：** 随着大模型厂商 API 的迭代，DeepSeek-V4 Pro/Flash 引入的 "thinking mode" 导致 ZeroClaw 出现接口不兼容。该问题引发了较多用户共鸣（标记为 P1 和 S2 级别降级），目前已被核心团队接手并处于修复中。
* **[Feature]: prefer lighter ZeroClaw ([#6165](zeroclaw-labs/zeroclaw Issue #6165))**
  **热度：** 评论：2 | 标签：RFC / Architecture
  **分析：** 社区提出了“精简 ZeroClaw”的架构建议，主张将 GitHub、Jira 等特定集成工具从核心代码库中剥离，转而使用统一的 Skills (MCP) 机制实现。这反映了用户对轻量化 Runtime 和解耦架构的强烈诉求。
* **RFC: Work Lanes, Board Automation, and Label Cleanup ([#6808](zeroclaw-labs/zeroclaw Issue #6808))**
  **分析：** 针对 ZeroClaw 当前 Issue 与 PR 堆积严重的问题，社区发起了关于治理流程自动化的 RFC，提议引入轻量级的 PR Lane 机制和自动化标签管理，以提高维护者的审核效率。

## 5. Bug 与稳定性
今日报告了多个高危级别的阻断性 Bug，部分集中在新引入的配置项解析逻辑失效上：

* **[S1 工作流阻断] SecurityPolicy 误杀多行 Heredocs ([#6771](zeroclaw-labs/zeroclaw Issue #6771))**：ZeroClaw 的安全策略错误地拦截了官方推荐的 PR 提交 Skill 中使用的 HEREDOC 语法，导致用户无法正常提 PR。
* **[P1 高危] MCP 工具 `tool_filter_groups` 前缀匹配失效 ([#6699](zeroclaw-labs/zeroclaw Issue #6699))**：配置项虽然能正常解析，但在运行时对真实的 MCP 工具完全不生效，且未与延迟加载集成。*(暂无对应 Fix PR)*
* **[P1 高危] `purge_namespace` 逻辑错误删除数据 ([#6801](zeroclaw-labs/zeroclaw Issue #6801))**：SQLite 记忆模块在执行清除命名空间操作时，错误地使用了 `category` 字段作为删除条件，存在严重的数据误删风险。*(已有 Fix PR: [#6777](zeroclaw-labs/zeroclaw PR #6777))*
* **[P2 配置失效] 多项 Agent 配置变成“死代码”**：
  * OpenAI 原生 Provider 忽略 `timeout_secs` 硬编码 120s ([#6723](zeroclaw-labs/zeroclaw Issue #6723))
  * 上下文感知工具过滤配置 `context_aware_tools` 未被读取 ([#6720](zeroclaw-labs/zeroclaw Issue #6720))
  * 记忆重排配置 `rerank_enabled` / `rerank_threshold` 未被读取 ([#6722](zeroclaw-labs/zeroclaw Issue #6722))
* **[P2 崩溃循环] Channels supervisor 因 `enabled=false` 无限重启 ([#6724](zeroclaw-labs/zeroclaw Issue #6724))**：用户在 Dashboard 配置了通道但未填写凭证时触发，Supervisor 检测无可用通道后不断重启（每2秒一次）。*(暂无对应 Fix PR)*

## 6. 功能请求与路线图信号
从今日的 PR 动向来看，以下几个重要的功能可能在不久的将来（可能在 v0.8.0）合入主干：
* **多文件原子化上传工具 `file_upload_bundle` ([PR #6775](zeroclaw-labs/zeroclaw PR #6775))**：允许 Agent 在一次请求中上传多个文件，提高了多模态交互的稳定性。
* **严格的 Tool 解析模式 ([PR #6675](zeroclaw-labs/zeroclaw PR #6675))**：引入 `strict_tool_parsing`，帮助混合模型部署环境下的用户屏蔽非原生工具调用的干扰。
* **通讯渠道交互增强 ([PR #6297](zeroclaw-labs/zeroclaw PR #6297))**：为 Signal、WhatsApp 等渠道暴露了投票和交互式回复事件。
* **自定义 Telegram Web API 端点支持 ([#6807](zeroclaw-labs/zeroclaw Issue #6807))**：企业级部署诉求，用户因网络限制需要指定自定义的 Telegram API 路由。

## 7. 用户反馈摘要
* **本地化部署与企业内网痛点：** 有用户反馈在本地 PKI 环境下无法使用自定义推理端点（Issue [#1458](zeroclaw-labs/zeroclaw Issue #1458)），以及 Telegram 400 错误导致必须自定义 API 端点（Issue [#6807](zeroclaw-labs/zeroclaw Issue #6807)）。表明 ZeroClaw 在被用于完全隔离的内部网络时，仍存在网络认证层的阻碍。
* **多设备配置体验不佳：** 关于 WeChat 通道重启丢 Token 需重复扫码的痛点已有社区开发者提交修复（[PR #6238](zeroclaw-labs/zeroclaw PR #6238)），说明在长连接通道的持久化状态管理上曾让用户感到繁琐。
* **Homebrew 安装路径解析错误：** 桌面版用户反馈通过 Homebrew 安装时遇到了严重的配置目录读取错误，目前已有 PR ([#6639](zeroclaw-labs/zeroclaw PR #6639)) 等待合并。

## 8. 待处理积压
当前项目存在明显的“PR 堆积（PR backlog）”现象，建议维护者优先审视以下亟待推进的 PRs 与 Issues：
* **集成测试阻断：** `zeroclaw-channels` 模块在无默认 features 下编译失败（Issue [#6158](zeroclaw-labs/zeroclaw Issue #6158)），影响 CI 流水线稳定性。
* **老旧 PR 积压：** PR 数量已达到 Issues 的近 3 倍（超过 286 个 Open 状态），许多 `size: S` 和 `size: XS` 的 Bug 修复 PR（如针对 WeChat、Homebrew、CI workflow 等的修复）被标记为 `needs-author-action` 或长期未获核心团队 Code Review。
* **历史遗留 Bulk Revert 清理：** 社区开发者曾尝试追踪早前被迫回滚的 153 个 Commits（Issue [#6074](zeroclaw-labs/zeroclaw Issue #6074)），以恢复丢失的优化代码（如 Groq API key 扫描器恢复 [PR #6812](zeroclaw-labs/zeroclaw PR #6812)），这是一项重要的技术债。

</details>