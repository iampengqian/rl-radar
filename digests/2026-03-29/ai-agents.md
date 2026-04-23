# OpenClaw 生态日报 2026-03-29

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-28 22:03 UTC

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

**OpenClaw 项目动态日报**
**日期：** 2026-03-29

---

### 1. 今日速览

OpenClaw 今日维持了极高的社区活跃度，过去 24 小时内共有 **500 条 Issue 更新** 和 **500 条 PR 更新**，显示出项目正处于快速迭代与激烈磨合期。虽然 **没有发布新版本**，但代码库中积压了 **351 个待合并 PR**，暗示下一次版本发布将包含大量修复与功能更新。目前社区重心主要集中在解决 2026.3.x 系列版本引入的 **认证回归** 和 **多渠道连接稳定性** 问题，同时关于 Linux/Windows 原生客户端的呼声依然高涨。

---

### 2. 版本发布

*   **无新版本发布** (Latest Release: None)
    *   虽无正式 Release，但大量 PR 已合并至主分支，建议关注 `main` 分支的 Nightly 构建以获取最新修复。

---

### 3. 项目进展

今日共有 **149 个 PR 被合并/关闭**，主要推进了以下关键领域：

*   **xAI Grok 全面支持升级** ([PR #56048](https://github.com/openclaw/openclaw/pull/56048)):
    *   重构了 xAI 提供商支持，从传统的 Chat Completions 迁移至 Responses API，并原生支持 `x_search`、`web_search` 和 `code_exec` 工具。这解决了长期以来的 Issue [#6872](https://github.com/openclaw/openclaw/issues/6872)。
*   **Matrix 渠道修复** ([PR #54566](https://github.com/openclaw/openclaw/pull/54566)):
    *   修复了 ESM 模块环境下 Matrix 插件无法加载 `matrix-sdk-crypto` 导致的端到端加密（E2EE）失败问题 (Issue [#54556](https://github.com/openclaw/openclaw/issues/54556))。
*   **Telegram 体验优化** ([PR #56620](https://github.com/openclaw/openclaw/pull/56620)):
    *   修复了发送纯空白消息导致的 GrammyError 400 崩溃问题，增强了消息发送的健壮性。
*   **安全性修复** ([PR #50075](https://github.com/openclaw/openclaw/pull/50075)):
    *   更新了安全审计的修复指令，引导用户正确配置 `tools.fs.workspaceOnly`，防止路径遍历攻击。

---

### 4. 社区热点

*   **Linux/Windows 原生客户端需求居高不下** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    *   **动态：** 该 Issue 今日新增大量评论，热度排名第一 (58 comments)。
    *   **诉求：** 用户强烈呼吁 OpenClaw 能够像 macOS 一样提供原生的 Linux 和 Windows 桌面应用，而不仅仅是命令行工具。
    *   **进展：** 已有相关 PR [#56005](https://github.com/openclaw/openclaw/pull/56005) 正在实现 Linux 原生网关客户端，目前处于 Open 状态。

*   **Native Agent 身份与信任验证 RFC** ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971))
    *   **动态：** 社区正在讨论引入基于 W3C DID 和 ERC-8004 标准的 Agent 身份验证体系。
    *   **诉求：** 随着 Agent 自主性增强，用户希望有一个标准化的信任链条，确保 Agent 的操作可追溯、可验证。

*   **Anthropic Token 认证失败** ([Issue #23538](https://github.com/openclaw/openclaw/issues/23538))
    *   **动态：** 大量用户反馈在 2026.2.21-2 版本后，Anthropic 的 `setup-token` 虽然能通过验证，但运行时报 401 错误。这是一个影响核心功能的阻塞性问题。

---

### 5. Bug 与稳定性

今日报告的回归和崩溃问题较多，且多集中在最新版本：

*   **[严重] API Key 丢失导致服务不可用** ([Issue #55672](https://github.com/openclaw/openclaw/issues/55672))
    *   **描述：** 最新构建版中，即使配置正确，系统也报 "No API key for provider"。此为 **Release Blocker**。
    *   **状态：** Closed (可能在 PR #56048 中通过重构 Provider 逻辑修复，待验证)。

*   **[严重] Discord 健康检查导致网关崩溃循环** ([Issue #54931](https://github.com/openclaw/openclaw/issues/54931))
    *   **描述：** 升级到 v2026.3.24 后，Discord 健康监测机制在检测到断连时触发未捕获异常，导致整个网关进程每 35 分钟崩溃一次。
    *   **修复：** 相关修复 PR [#56457](https://github.com/openclaw/openclaw/pull/56457) (优化分块) 和 [#54729](https://github.com/openclaw/openclaw/issues/54729) 正在处理中。

*   **[中等] OpenAI Codex 工具执行失效** ([Issue #53959](https://github.com/openclaw/openclaw/issues/53959))
    *   **描述：** v2026.3.23-2 版本后，`gpt-5.3-codex` 模型在调用工具（如执行代码、搜索）时静默失败。
    *   **修复：** PR [#56340](https://github.com/openclaw/openclaw/pull/56340) 提出将 Codex 从 WebSocket 传输层剥离，修复了此回归问题。

*   **[中等] Mistral API 422 错误** ([Issue #53363](https://github.com/openclaw/openclaw/issues/53363))
    *   **描述：** Mistral 适配器错误发送 `max_completion_tokens` 参数导致 API 拒绝请求。此问题反复出现。

---

### 6. 功能请求与路线图信号

*   **会话历史备份层** ([Issue #7598](https://github.com/openclaw/openclaw/issues/7598))
    *   用户建议增加历史记录备份功能，防止长对话被压缩导致的信息丢失。这符合构建长期记忆 Agent 的趋势。
*   **Baidu Web Search Provider** ([Issue #56304](https://github.com/openclaw/openclaw/issues/56304))
    *   针对中文检索场景，用户建议集成百度搜索作为 Web Search 的可选提供商。
*   **会话并行编排工具** ([PR #56607](https://github.com/openclaw/openclaw/pull/56607))
    *   提议增加 `sessions_await` 工具，允许 Orchestrator Agent 并行启动多个子 Agent 并等待结果。这是迈向多 Agent 协作的重要一步。

---

### 7. 用户反馈摘要

*   **Docker 环境痛点：** 用户反馈在 Docker 容器中安装 Skill 时遇到 "brew not installed" 错误 ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))，表明 OpenClaw 目前对容器化环境的依赖管理仍有缺陷。
*   **代理与网络环境：** 多个 Issues (如 [#29133](https://github.com/openclaw/openclaw/issues/29133), PR [#56564](https://github.com/openclaw/openclaw/pull/56564)) 提到在特定网络环境下（如需代理、Fake-IP DNS）连接失败，说明网络层的健壮性是用户的主要困扰之一。
*   **模型切换故障：** TUI 中的 `/model` 命令被指“伪切换”——UI 显示成功但实际底层未切换 ([Issue #29572](https://github.com/openclaw/openclaw/issues/29572))，这严重影响了多模型测试体验。

---

### 8. 待处理积压

*   **Google Antigravity Auth 插件丢失** ([Issue #29348](https://github.com/openclaw/openclaw/issues/29348))
    *   自 v2026.2.22 以来该插件目录为空，导致新用户无法配置 Google 相关模型。虽然已有 Workaround，但官方尚未修复核心分发问题。
*   **ACP Runtime 在 Windows 上不可用** ([Issue #29134](https://github.com/openclaw/openclaw/issues/29134))
    *   Windows 用户在使用 `acp` runtime 时持续报错，该 Issue 已存在一个月，尚未有明确的修复 PR 合并。

---
*分析师总结：OpenClaw 目前处于“大重构”后的阵痛期，虽然功能（如 xAI 支持、Linux 客户端）在快速推进，但认证回归和渠道稳定性问题严重影响了用户体验。建议维护者优先解决 #55672 和 #54931 这类阻塞性 Bug，以稳定版本质量。*

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-29)

## 1. 生态全景
当前开源 AI 助手生态正处于**从单一对话向多模态、多渠道、集群化演进**的关键转折期。各项目不再满足于仅仅作为 LLM 的 UI 包装，而是竞相构建包含**长期记忆**、**复杂任务编排**和**工具生态**的 Agent 操作系统。
同时，**IM 渠道集成** 和 **本地/国产模型适配** 成为争夺用户的核心战场，反映出用户对"无处不在"和"数据主权"的强烈需求。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | None (Nightly) | 🟡 拥挤 | 重构阵痛期，积压严重，功能迭代极快但稳定性堪忧 |
| **PicoClaw** | 37 | 90 | Nightly | 🟢 活跃 | 边缘计算/路由器部署探索，架构重构中 |
| **Zeroclaw** | 44 | 50 | None | 🟢 活跃 | 功能爆发期，集群化架构先行，企业级特性增加 |
| **NanoBot** | 20 | 39 | None | 🟢 稳健 | 快速响应期，修复迭代并行，社区贡献活跃 |
| **Moltis** | 4+ | 13+ | **4 Releases** | 🟢 极高 | 极速迭代，每日多版，功能修复并重 |
| **IronClaw** | 9 | 50 | None | 🟢 良好 | 架构重构期 (v2引擎)，安全性增强，积压较多 |
| **NanoClaw** | 7 | 34 | None | 🟢 良好 | 生态扩展期，重点关注 Web 端与安全架构 |
| **CoPaw** | 41 | 25 | None | 🟡 维护 | 文档与配置优化为主，存在较多阻塞性 Bug |
| **TinyClaw** | 7 | 15 | None | 🟢 整理 | 代码清理与安装体验重构，为大版本蓄力 |
| **LobsterAI** | 18 | 18 | **v2026.3.29** | 🟢 稳定 | 架构解耦，核心组件 (IM) 插件化迁移 |
| **ZeptoClaw** | 1 | 0 | None | 🔴 低谷 | 维护停滞，出现严重交互 Bug 无人响应 |
| **EasyClaw** | 2 | 0 | **v1.7.8** | 🟡 维护 | 仅修复安装问题，核心 API 逻辑存在未修复 Bug |

## 3. OpenClaw 在生态中的定位

*   **生态核心参照物**：OpenClaw 凭借单日 **500+ Issue/PR** 的惊人吞吐量，充当了整个开源生态的"试验田"和"事实标准"。
*   **技术路线**：采取**激进的集成策略**，最早支持 xAI Grok、OpenAI Codex 等最新模型 API，并在尝试 Native Client 等重前端特性。相比之下，LobsterAI 和 NanoBot 则更倾向于**模块化与插件化**架构。
*   **优势与隐忧**：其优势在于庞大的社区贡献量和极快的新特性覆盖速度。然而，对比 Moltis 的高频发布和 LobsterAI 的稳定性，OpenClaw 目前积压了 **351 个 PR** 且存在严重的认证回归问题，显示出其**稳定性与工程质量管理**落后于其功能迭代速度。

## 4. 共同关注的技术方向

1.  **多渠道 IM 集成与稳定性**
    *   **涉及项目**: OpenClaw, Zeroclaw, NanoBot, IronClaw, TinyClaw
    *   **核心诉求**: 社区不再满足于基本的 Telegram/Discord 支持，正转向 **Matrix (去中心化)**、**企业微信**、**飞书/Lark** 及 **钉钉**。且重点在于解决 E2EE 加密、长连接保活、Webhook 过期等深水区问题。

2.  **本地模型与国产模型适配**
    *   **涉及项目**: PicoClaw, EasyClaw, CoPaw, Moltis
    *   **核心诉求**: 针对 **Ollama** 连接难、配置复杂的问题，以及 **阿里云百炼**、**Kimi**、**Minimax** 等国产模型的 API 兼容性（如 Token 计费、参数校验）是当前的优化热点。

3.  **长期记忆与会话持久化**
    *   **涉及项目**: NanoBot, OpenClaw, CoPaw
    *   **核心诉求**: 超越简单的上下文窗口压缩，转向引入 **Mem0**、**Graphiti** 等专用记忆框架，以及解决 Docker/重启后的配置与历史丢失问题。

4.  **Agent 编排与协作**
    *   **涉及项目**: OpenClaw, PicoClaw, Zeroclaw
    *   **核心诉求**: 从单智能体向多智能体协作演进，引入 **SOP 工作流**、**DAG 引擎** 和 **Sessions 并行编排** 工具。

## 5. 差异化定位分析

*   **OpenClaw / Zeroclaw (平台化/全家桶)**
    *   侧重于成为全功能的 AI 接入网关，支持尽可能多的模型和渠道。Zeroclaw 甚至开始引入控制平面以支持集群部署，适合作为企业级 Gateway。

*   **LobsterAI / IronClaw (企业级/重构派)**
    *   侧重于架构的健壮性与安全性。LobsterAI 正在进行核心组件的插件化剥离；IronClaw 则致力于 v2 引擎重构和前端 Widget 系统，目标可能是特定的垂直领域或高安全要求场景。

*   **PicoClaw (边缘计算/极客向)**
    *   独树一帜地支持 **OpenWrt/路由器** 部署，强调轻量化和本地隐私，目标用户是硬核开发者和隐私敏感型用户。

*   **CoPaw / TinyClaw (易用性/开发者友好)**
    *   重点关注 Web UI 的配置体验和安装流程的简化，试图降低非技术用户的使用门槛。

## 6. 社区热度与成熟度

*   **快速迭代/激进区**: **OpenClaw** 虽然活跃度最高，但 Bug 率高，处于"大破大立"阶段。**Moltis** 展现了极高的工程效率，日更 4 版，成熟度快速提升。
*   **质量巩固/稳健区**: **NanoBot** 和 **LobsterAI** 处于良好状态，Issue 响应快，PR 合并有序，适合作为生产环境选型的参考。
*   **架构调整期**: **IronClaw** 和 **PicoClaw** 正在处理较大的架构重构 PR，短期内可能存在波动，但长期看好。
*   **维护停滞/低活跃区**: **ZeptoClaw** 和 **EasyClaw** 活跃度极低，且存在未修复的核心 Bug，建议谨慎用于生产环境。

## 7. 值得关注的趋势信号

1.  **MCP (Model Context Protocol) 标准化加速**
    *   LobsterAI 和 CoPaw 均在处理 MCP Server 的集成问题。这表明通过标准化协议连接外部工具（如 Notion, GitHub）正在取代私有 Plugin 接口，成为 Agent 连接世界的首选方案。
    *   *建议*: 开发者应优先考虑兼容 MCP 协议，而非构建私有工具生态。

2.  **Web 端配置正在取代 CLI**
    *   TinyClaw, CoPaw, NanoClaw 均有大量关于 Web Dashboard/Onboarding 的更新。用户（尤其是非开发者）强烈排斥通过 YAML/JSON 文件配置模型和提示词。
    *   *建议*: 新项目应默认提供 Web 端管理界面，CLI 应仅作为高级选项。

3.  **AI 智能体身份与安全重构**
    *   OpenClaw 讨论 DID 身份，NanoClaw 引入 Vault 代理，IronClaw 修复权限泄露。随着 Agent 自主性增强，**权限隔离** 和 **敏感信息保护** 已成为架构设计的核心关注点。

4.  **国产大模型出海的"最后一公里"难题**
    *   EasyClaw 和 Zeroclaw 的 Issue 显示，虽然硬件/模型能力强劲，但在 API 参数规范（如 Token 长度校验）和计费逻辑上与海外标准存在摩擦。
    *   *建议*: 针对国内大模型的适配层需要更精细的"软着陆"处理（如自动裁剪 Context）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

根据您提供的 NanoBot (HKUDS/nanobot) 项目 2026-03-29 的 GitHub 数据，以下是今日的项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-03-29)

## 1. 今日速览
NanoBot 项目今日保持着**极高的活跃度**，社区贡献与问题反馈呈现井喷态势。过去 24 小时内共有 **39 个 PR 更新**（其中 13 个已合并）和 **20 个 Issue 更新**，显示出版本迭代后的快速响应期特征。虽然今日无新版本发布，但社区通过高频 PR 修复了包括 Kimi 模型兼容性、Telegram 渲染在内的多个关键问题，并在 **Mattermost 集成**与**记忆框架重构**上取得了重要进展。整体来看，项目正处于功能扩展与稳定性修复并行的快速上升通道。

## 2. 版本发布
*   **无新版本发布**。
    *   *注：尽管无正式 Release，但大量 PR 已针对 `v0.1.4.post6` 版本暴露出的问题进行了针对性修复，预计近期可能会有补丁版本发布。*

## 3. 项目进展
今日共有 **13 个 PR 被合并**，显著提升了系统的健壮性与用户体验：

*   **核心逻辑修复**：PR [#2580](https://github.com/HKUDS/nanobot/pull/2580) 修复了 Agent 执行完工具后无响应的“空落地”问题，优化了最终响应的生成逻辑；PR [#2420](https://github.com/HKUDS/nanobot/pull/2420) 将心跳任务改为临时运行，解决了长期运行中的状态污染问题。
*   **配置与安全增强**：PR [#2212](https://github.com/HKUDS/nanobot/pull/2212) 和 [#2265](https://github.com/HKUDS/nanobot/pull/2265) 重构了配置系统，引入了运行时密钥引用功能，增强了敏感信息的安全性。
*   **Telegram 体验优化**：合并了多个针对 Telegram 渠道的改进，包括工具提示的静默发送与格式优化 (PR [#2577](https://github.com/HKUDS/nanobot/pull/2577))。
*   **Matrix 流式支持**：PR [#2447](https://github.com/HKUDS/nanobot/pull/2447) 成功合并，为 Matrix 渠道带来了流式响应支持。

## 4. 社区热点
*   **新增搜索提供商标准讨论** ([#2572](https://github.com/HKUDS/nanobot/issues/2572))：社区成员正在讨论制定新的搜索提供商接入标准，目前已有 Brave, Tavily 等支持，旨在避免低质量 Provider 涌入。
*   **架构优化建议：Agent 循环终结逻辑** ([#2576](https://github.com/HKUDS/nanobot/issues/2576))：用户深度分析了当前 Agent Loop 过度依赖 LLM 总结的缺陷，引发了关于底层架构可靠性的讨论。
*   **WhatsApp 原生语音支持** ([#2152](https://github.com/HKUDS/nanobot/issues/2152))：集成了 Fish Audio 的语音消息支持（STT+TTS）功能受到关注，用户呼吁将其原生集成以减少补丁维护成本。
*   **Telegram Markdown 渲染失效** ([#2568](https://github.com/HKUDS/nanobot/issues/2568))：升级后 Telegram 的 Markdown 渲染不稳定成为用户吐槽热点。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**模型兼容性**与**特定渠道稳定性**，部分已有修复方案：

*   **🔴 [严重] Kimi K2.5 思考模式兼容性** ([#2579](https://github.com/HKUDS/nanobot/issues/2579))
    *   *现象*：启用思考模式后，多次工具调用导致 `reasoning_content` 缺失报错。
    *   *状态*：**已有修复 PR** [#2580](https://github.com/HKUDS/nanobot/pull/2598)。
*   **🟠 [中等] Minimax Provider 失效** ([#2590](https://github.com/HKUDS/nanobot/issues/2590))
    *   *现象*：升级至 post6 后内置 Minimax 提供商无法工作。
    *   *状态*：Open，需排查 API Base 适配问题。
*   **🟠 [中等] Telegram 流式响应截断** ([#2559](https://github.com/HKUDS/nanobot/issues/2559))
    *   *现象*：长回复流式输出时触发 `Message_too_long` 错误。
    *   *状态*：Open，涉及消息分割逻辑。
*   **🟡 [轻微] CLI 终端输出乱码** ([#2591](https://github.com/HKUDS/nanobot/issues/2591))
    *   *现象*：思考状态动画重复输出，影响视觉体验。
    *   *状态*：Open。

## 6. 功能请求与路线图信号
*   **Mattermost 企业级支持** ([#2592](https://github.com/HKUDS/nanobot/pull/2592))：新增 Mattermost 渠道支持 PR，补全了企业协作软件版图，建议关注合并进度。
*   **可插拔记忆框架** ([#2515](https://github.com/HKUDS/nanobot/pull/2515))：提出重构 Memory 模块以支持 Mem0/Graphiti 等多后端，这是一个重大的架构演进信号。
*   **CLI 可观测性增强** ([#2589](https://github.com/HKUDS/nanobot/pull/2589))：提议增加 `status` 和 `health` 命令，提升运维友好度。

## 7. 用户反馈摘要
*   **升级痛点**：多位用户反馈从旧版升级到 `v0.1.4.post6` 后遇到兼容性问题（如 Minimax, OpenAI max_tokens 废弃 #2462），建议官方发布更详细的迁移指南。
*   **本地部署困惑**：部分用户在配置 Local Ollama (#2570) 和 Home Assistant (#2588) 时遇到工具调用失败或 404 错误，反映出文档在本地模型接入指引上可能存在不足。
*   **GitHub Copilot 登录**：OAuth 登录报错 (#2573) 显示部分认证接口尚未完全稳定。

## 8. 待处理积压
*   **Fallback 机制失效** ([#1121](https://github.com/HKUDS/nanobot/issues/1121))：关于 LLM 超时/503 错误未触发 Fallback 模型的问题自 2 月提出至今未彻底解决，严重影响生产环境高可用性，建议维护者优先关注。
*   **Matrix 认证问题** ([#1681](https://github.com/HKUDS/nanobot/issues/1681))：Olm 加密事件解密错误长期存在，虽然有 PR 尝试修复 E2EE (#2596)，但需持续验证。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-29)

**分析师**：AI Open Source Analyst
**项目**：Zeroclaw (zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
Zeroclaw 今日呈现出极高的开发活跃度与社区参与度，过去 24 小时内共有 **44 条 Issue 更新** 和 **50 条 PR 更新**。项目正处于功能大爆发阶段，大量社区贡献的 Feature PR（如企业微信、SearXNG 搜索、TUI 界面）被批量合并，显示出维护者正在积极收尾长周期的开发工作。虽然新开 Issue 中包含多个 S1 级别的阻塞问题（如 MQTT 配置失效、Webhook MCP 工具调用失败），但同时也伴随着大量 Bugfix 的合并，表明项目正在快速迭代中修复旧问题并引入新能力。

### 2. 版本发布
*   **无新版本发布**。
    *   注：虽然无正式 Release，但从 PR 合并情况看，主分支已积攒了大量重大更新（Control Plane, TUI, Email Push 等），预计近期会有较大的版本发布。

### 3. 项目进展
今日共有 **49 条 PR 被合并/关闭**，仅 1 条待合并，推进速度极快。重点进展如下：

*   **核心架构增强**：
    *   **[PR #3824]** 新增多节点控制平面：引入健康监控和节点注册，标志着 Zeroclaw 从单点工具向集群化 Gateway 演进。
    *   **[PR #3571]** 配置热重载：支持 `zeroclaw config reload`，解决了修改配置需重启导致会话丢失的痛点。
*   **新渠道集成**：
    *   **[PR #3305]** 企业微信 长连接 AI 机器人渠道合并。
    *   **[PR #4164]** Gmail Pub/Sub 推送通知支持，实现了邮件的实时处理而非轮询。
    *   **[PR #3401]** Bridge WebSocket 渠道，支持第三方流式集成。
*   **工具链与 SOP**：
    *   **[PR #3592]** 引入 SOP 工作流 DAG 引擎，支持并行执行和条件分支，大幅提升复杂任务编排能力。
    *   **[PR #3823]** 新增实验性 TUI (Terminal UI)，提供终端下的交互式仪表盘。

### 4. 社区热点
今日讨论最热烈的话题集中在 **云服务集成兼容性** 和 **端到端加密 (E2EE) 的稳定性** 上：

*   **[Issue #3882] Feature Request: Support 阿里云百炼 Coding Plan** (评论: 11)
    *   **分析**：用户强烈需求集成阿里云百炼的 Coding Plan，但遇到 401/405 错误。这反映出国内企业用户试图将 Zeroclaw 接入国内大模型服务时的适配障碍。
*   **[Issue #4657] Matrix channel: friction tracker** (评论: 9)
    *   **分析**：维护者发起的矩阵渠道问题追踪贴，被标记为 Umbrella issue。表明 Matrix 协议实现的复杂度较高，E2EE 和多线程上下文问题是目前的主要摩擦点。
*   **[Issue #4804] Matrix thread replies lack conversation context** (评论: 5)
    *   **分析**：用户反馈在 Matrix 线程中对话会丢失上下文，这是影响 IM 场景体验的核心 Bug。

### 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **S0 / S1 - 严重阻塞**:
    *   **[Issue #4893] MCP tools not executed via `/webhook` endpoint**: 通过 Webhook 调用时，MCP 工具被忽略。这在自动化集成场景中属于阻断性问题。(状态: Open)
    *   **[Issue #4877] MQTT channel configuration not working**: 配置被忽略，渠道无法启动。(状态: Open)
    *   **[Issue #4878] E2EE recovery never downloads room keys**: Matrix 加密房间在重置后无法恢复，导致加密 DM 不可用。(状态: Open)
*   **S2 - 降级体验**:
    *   **[Issue #4863] Open-Codex render results properly**: GPT-5.4-mini 在 openai-codex provider 下渲染异常。(状态: Open)
    *   **[Issue #4880] context_compression not triggered in daemon mode**: 上下文压缩仅在 CLI 模式生效，守护进程模式下失效，可能导致长对话 OOM。(状态: Open)
*   **已修复**:
    *   **[Issue #4810] History pruner severs tool_use/tool_result pairs**: 导致 Anthropic API 报 400 错误。相关逻辑已在近期 PR 中优化。
    *   **[Issue #3513] Agent chat sends multiple messages**: 修复了 Agent 发送碎片化消息的问题。

### 6. 功能请求与路线图信号
*   **[Issue #3882] 阿里云百炼支持**:
    *   **信号**：随着 PR #4911 (Zhipu JWT Auth) 的合并，项目正在加强对国产大模型 API 规范的兼容。阿里云百炼的支持极有可能在近期被纳入路线图。
*   **[Issue #4872] Multi-Model Fallback Documentation**:
    *   **信号**：用户对高可用性（HA）架构的关注度提升。虽然底层 Router 支持，但缺乏文档引导，预计社区会很快补充相关文档或示例。
*   **[Issue #4896] Anthropic-compatible endpoints in onboarding**:
    *   **信号**：用户希望 Onboarding 流程更加开放，不仅仅支持官方 Provider，还要兼容本地代理（如 Zhipu, Local proxies）。

### 7. 用户反馈摘要
*   **痛点：配置复杂性与文档滞后**
    *   多个用户（Issue #4863, #4851）表示 GitHub Copilot 和 Open-Codex 的配置缺乏指引，导致 "Workflow blocked"。用户在尝试使用高级特性（如 MCP, Custom Providers）时容易遇到 502 或 401 错误。
*   **痛点：渠道稳定性**
    *   Matrix 用户对 E2EE 的不稳定性感到沮丧（Issue #4878），认为这是普及的最大障碍。
*   **满意点**
    *   对 `zeroclaw config reload` 功能表示欢迎，认为这解决了“改配置需重启”的长期痛点。

### 8. 待处理积压
*   **[Issue #4878] E2EE recovery failure**: 这是一个 S1 级别的长期隐患，影响隐私敏感用户，需优先解决。
*   **[PR #4914] Tauri schema gitignore**: 一个简单的 XS 级 PR，解决构建噪音，建议维护者快速合并以保持仓库整洁。
*   **[Issue #4863] Open-Codex Docs**: 文档缺失导致用户无法正常使用 GPT-5.4 等新模型，需尽快补充。

---
*以上内容基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-29)

**分析师摘要**：PicoClaw 项目今日保持极高的活跃度，社区贡献呈现井喷态势。单日 PR 更新达 90 条，Issues 处理量达 37 条，且发布了一个新的 Nightly 版本。项目正处于功能快速迭代与架构重构的关键期，特别是在多智能体协作（Agent Refactor Phase 2）和生态兼容性方面取得了显著进展。

---

## 1. 今日速览
- **整体活跃度**：**极高**。过去 24 小时内共有 90 个 PR 更新（36 个待合并，54 个已合并/关闭）和 37 个 Issues 更新。
- **迭代速度**：项目发布了 `v0.2.4-nightly.20260328` 版本，显示主分支代码正在快速集成新功能。
- **社区焦点**：讨论集中在 **工具调用安全性**、**本地模型兼容性 (Ollama/OpenRouter)** 以及 **WebUI 配置持久化** 问题。
- **健康度**：Issue 关闭数（22）多于新开数（15），表明维护团队在积极清理积压，但在 WebUI 配置和底层 Provider 兼容性上仍存在需长期关注的技术债。

---

## 2. 版本发布
- **Version**: `nightly` (Nightly Build)
- **Tag**: `v0.2.4-nightly.20260328.60d7ec20`
- **说明**: 这是一个自动化构建版本，可能包含不稳定因素。
- **变更日志**: [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)
- **建议**: 开发者与测试用户可下载体验最新特性，生产环境建议等待 Stable 版本。

---

## 3. 项目进展
今日共有 **54 个 PR 被合并或关闭**，项目在跨平台支持、安全性和工具链增强方面取得了实质性突破：

- **跨平台与生态扩展**：
    - **OpenWrt 支持**：合并了 [PR #2130](https://github.com/sipeed/picoclaw/pull/2130)，新增 LuCI Web 管理界面，使 PicoClaw 能够在路由器设备上运行并可视化管理，这是向边缘计算设备下沉的重要一步。
    - **国际化**：合并了 [PR #1770](https://github.com/sipeed/picoclaw/pull/1770)，新增马来语支持。

- **Bug 修复与稳定性**：
    - **微信渠道修复**：[PR #2124](https://github.com/sipeed/picoclaw/pull/2124) 修复了 `context_token` 仅存储在内存导致重启后发送失败的问题，增强了微信通道的鲁棒性。
    - **WebUI 配置修复**：[PR #2118](https://github.com/sipeed/picoclaw/pull/2118) 修复了 Web 端保存配置时私密字段（如 `app_secret`）丢失的严重逻辑错误。

- **功能增强**：
    - **本地视觉能力**：[PR #2116](https://github.com/sipeed/picoclaw/pull/2116) 新增 `load_image` 工具，允许 Agent 直接分析本地图片文件，补全了视觉能力的闭环。
    - **定时任务修复**：[PR #2100](https://github.com/sipeed/picoclaw/pull/2100) 修复了 Cron 触发的任务无法发布响应的问题。

---

## 4. 社区热点
今日讨论最热烈的问题集中在配置复杂性和工具调用的误判上：

1.  **[Bug] 本地 Ollama 模型配置困惑** [Issue #1161](https://github.com/sipeed/picoclaw/Issue/1161)
    - **热度**：18 条评论
    - **核心诉求**：用户在配置本地 Ollama 模型时遇到阻碍，Agent 启动并调用模型但无最终响应。这反映了项目在适配本地/开源模型时的配置文档或兼容性逻辑仍有优化空间。
2.  **[Bug] 安全机制误拦截指令** [Issue #2107](https://github.com/sipeed/picoclaw/Issue/2107)
    - **热度**：14 条评论
    - **核心诉求**：用户反馈正常的 Python 脚本执行被 "Command blocked by safety guard" 错误拦截。这表明内置的安全防护策略可能过于严格或缺乏细粒度配置，影响了正常的高阶 Tool 使用。
3.  **[Bug] 配置被意外清空** [Issue #1941](https://github.com/sipeed/picoclaw/Issue/1941)
    - **热度**：12 条评论
    - **核心诉求**：升级或重启后配置文件丢失。配置持久化是用户体验的基石，此类 Bug 对用户信任度打击较大。

---

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及安全、配置和底层 Provider 逻辑，部分已有修复方案：

- **🔴 严重**:
    - **CPU 占用异常** [Issue #2001](https://github.com/sipeed/picoclaw/Issue/2001): v0.2.4 在空闲状态下 CPU 占用过高，影响在低功耗设备（如 FreeBSD/路由器）上的部署。
    - **WebUI 配置逻辑缺陷** [Issue #2052](https://github.com/sipeed/picoclaw/Issue/2052): 飞书渠道无法在网页端配置。[PR #2118](https://github.com/sipeed/picoclaw/pull/2118) 已尝试修复此类问题。

- **🟠 中等**:
    - **安全风险** [Issue #1529](https://github.com/sipeed/picoclaw/Issue/1529): 公共 Web 模式下若未配置 `allowed_cidrs` 会导致未授权访问（已 Closed，可能已在此版本修复）。
    - **工具调用提取缺陷** [Issue #2136](https://github.com/sipeed/picoclaw/Issue/2136): 现有的正则提取逻辑无法处理复杂的工具调用，可能导致 Agent 响应解析失败。

- **🟢 已修复**:
    - **Gateway 启动错误** [Issue #2105](https://github.com/sipeed/picoclaw/Issue/2105): 首次安装无 PID 的问题正在通过 [PR #2134](https://github.com/sipeed/picoclaw/pull/2134) (引入 PID 文件管理) 解决。

---

## 6. 功能请求与路线图信号
社区正在推动项目向更智能、更集成的方向发展：

- **多智能体协作**：
    - [Issue #1934](https://github.com/sipeed/picoclaw/Issue/1934) 提出了 "Agent Refactor Phase 2"，旨在实现单 Pico 内的多 Agent 协作。
    - [PR #1940](https://github.com/sipeed/picoclaw/pull/1940) 试图恢复并增强 `team` 工具，结合 SubTurn 机制实现任务分发。

- **平台支持**：
    - [Issue #2045](https://github.com/sipeed/picoclaw/Issue/2045) 请求支持 SiliconFlow 平台。
    - [Issue #1132](https://github.com/sipeed/picoclaw/Issue/1132) 及 [PR #2130](https://github.com/sipeed/picoclaw/pull/2130) 显示出社区对将 PicoClaw 部署在 **OpenWrt 路由器** 上的强烈需求。

- **用户体验优化**：
    - [Issue #1328](https://github.com/sipeed/picoclaw/Issue/1328) 建议在 Telegram 中使用表情反应代替文本回复，以减少干扰。

---

## 7. 用户反馈摘要
从 Issues 评论中提炼出的用户画像与痛点：

- **痛点**：
    - **配置门槛高**：特别是涉及到本地模型（Ollama）或特定 Provider（OpenRouter, Zhipu）时，配置项复杂且容易出错。
    - **移动端/边缘端部署难**：Termux 和 OpenWrt 环境下存在网络、权限和依赖库的各种兼容性问题。
    - **静默失败**：Agent 有时会在后台报错但前端无提示，或者执行工具无响应（如 Cron 任务），难以排查。

- **满意点**：
    - **架构灵活性**：用户对 `SOUL.md` 的自由度和 SubAgent 的概念表示认可。
    - **快速响应**：维护者对安全漏洞（如 symlink、权限问题）的响应非常迅速。

---

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护团队关注：

1.  **[PR #1814] Subagent 重构** (https://github.com/sipeed/picoclaw/pull/1814)
    - **状态**：Open
    - **重要性**：涉及核心架构，修复了 Subagent 总是使用全局 Provider 的问题，对多模型协作至关重要。
2.  **[PR #1460] OpenAI 兼容性修复** (https://github.com/sipeed/picoclaw/pull/1460)
    - **状态**：Open
    - **重要性**：修复了严格模式下的工具调用序列化问题，直接影响使用 OpenAI 兼容接口的用户。
3.  **[PR #1953] Launcher Dashboard 认证** (https://github.com/sipeed/picoclaw/pull/1953)
    - **状态**：Open
    - **重要性**：为 Launcher 增加了 Token 认证，是暴露在公网部署的安全刚需。

---
*日报生成时间: 2026-03-29 | 数据来源: PicoClaw GitHub*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-29)

**分析师：AI 开源项目观察员**

---

### 1. 今日速览
NanoClaw 项目今日呈现**高活跃度开发状态**，社区贡献热情高涨。过去 24 小时内共有 34 个 PR 更新（其中 20 个待合并）和 7 个 Issue 更新，显示项目正处于功能快速迭代与生态扩展期。核心关注点集中在**Web 端仪表盘**、**多媒体支持**以及**安全架构（OneCLI Vault 迁移）**三个方向。虽然今日无新版本发布，但大量待合并的功能 PR（如 Dashboard、Discord、Local Chat）预示着下一次版本更新将包含重大功能增强。

### 2. 版本发布
*   **无新版本发布** (0 releases)
    *   尽管无正式 Release，但 `main` 分支通过合并 PR 持续迭代，建议关注即将到来的功能积压释放。

### 3. 项目进展
今日共有 **14 个 PR 被合并或关闭**，主要集中在提升系统稳定性、兼容性和架构优化：

*   **架构与安全重构**：
    *   PR #1523 修复了 **Apple Container VM** 环境下的网络和挂载问题，提升了对非标准 Docker 环境的兼容性。
    *   PR #1115 合并了针对 **IPC 文件权限和过期会话** 的自愈修复，解决了以 root 运行时的静默故障。
    *   PR #1508 优化了审查代理的容器资源管理，确保草稿审批后自动关闭容器，防止内存泄漏。
*   **功能扩展**：
    *   PR #1521 引入了 **本地 PWA 聊天界面**，提供无需外部 API 的纯前端交互方式。
    *   PR #1513 添加了 **LazyLibrarian** 技能，扩展了在图书管理领域的应用场景。

### 4. 社区热点
今日讨论热度最高的问题集中在**多模型支持**和**服务可用性**：

*   **[Issue #80] 支持更多运行时与提供商**
    *   **热度**：👍 54, 评论 27
    *   **分析**：这是目前社区呼声最高的功能。用户担心 Anthropic 对第三方客户端的封禁会波及 NanoClaw，迫切希望引入 OpenCode、Gemini、Codex 等替代后端，以降低单点依赖风险。
*   **[Issue #1503] nanoclaw.dev SSL 证书失效**
    *   **热度**：评论 2
    *   **分析**：官方文档/演示站点 `nanoclaw.dev` 出现 SSL 配置错误，影响新用户的首次访问体验，属于需紧急修复的基础设施问题。

### 5. Bug 与稳定性
今日报告的安全与功能缺陷较多，部分已有对应的修复方案：

*   **[Critical] 安全：Gmail/Calendar OAuth 凭证明文暴露风险 ([Issue #1500])**
    *   **描述**：当前 OAuth refresh token 直接挂载入容器，存在被 Prompt Injection 攻击读取的风险。
    *   **状态**：**已有修复方案**。PR #1520 提出通过 OneCLI Vault 进行代理注入，PR #1511 讨论了彻底替换 credential-proxy 的架构。
*   **[High] 媒体文件处理缺失**
    *   **描述**：WhatsApp ([Issue #1522]) 和 Telegram ([PR #1507]) 的图片、语音Note仅保存占位符或 ID，Agent 无法理解内容。
    *   **状态**：Telegram 修复已在 PR #1507 中提交，WhatsApp 仍待解决。
*   **[Medium] 任务调度器并发与僵尸任务 ([PR #1519])**
    *   **描述**：长时间任务可能被重复触发，且重启后存在孤儿任务。
    *   **状态**：**待合并** (PR #1519)。

### 6. 功能请求与路线图信号
今日涌现大量功能增强 PR，暗示项目正在向**多渠道**和**可视化**方向演进：

*   **可视化监控**：
    *   [PR #1524] 和 [PR #1514] 均提议增加 **Web Dashboard**，用于监控服务状态、消息量和 Notion 连接情况。这表明用户对可观测性有强烈需求。
*   **多媒体与多渠道**：
    *   [PR #1517] 增加 **Discord 频道**并支持图片理解。
    *   [PR #836] (长期 PR) 增加 **QQ 频道**支持。
    *   [PR #1516] 提案 **Peer-to-Peer** 频道，实现 NanoClaw 实例间的直接通信。
*   **底层架构**：
    *   [PR #1499] 提议解耦硬编码路径，提升代码的可测试性和灵活性。

### 7. 用户反馈摘要
从 Issue 和 PR 描述中提炼出的核心用户画像如下：
*   **隐私与安全焦虑**：高级用户对容器内的权限控制和 Token 暴露非常敏感，积极推动 OneCLI Vault 等安全代理方案。
*   **多模态交互需求**：用户不再满足于文本交互，强烈需要 Agent 能“看懂”图片、“听懂”语音，这在 Telegram/WhatsApp 相关 Issue 中体现明显。
*   **部署环境多样化**：用户部署环境复杂（Apple Container VM, WSL, Root/Non-root），对跨平台兼容性修补（如 PR #1523）有刚性需求。

### 8. 待处理积压
以下重要 Issue 和 PR 长期未获最终合并，建议维护者优先关注：

*   **[PR #836] QQ 频道支持**：提交于 3 月 8 日，状态为 "Needs Review"，功能完整但未被合并，可能缺乏维护者审查资源。
*   **[PR #846] GitHub 集成技能**：提交于 3 月 8 日，状态为 "Needs Review"，对于开发者群体是高价值功能。
*   **[Issue #1512] 安全补丁同步**：建议从上游 Cherry-pick 5 个关键安全修复（包括命令注入防护），目前 Issue 已关闭，需确认代码是否已合入主分支。

---
*数据来源：NanoClaw GitHub Repository (2026-03-29 08:00 UTC Snapshot)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于 2026-03-29 数据生成的 **IronClaw** 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-29)

### 1. 今日速览
IronClaw 项目今日维持**极高的开发活跃度**，PR 更新量达到 **50 条**，其中待合并 PR 高达 37 条，显示出项目正处于密集的功能迭代与架构重构期（如 v2 引擎与前端重构）。虽然 Issue 数量相对较少（9 条），但社区反馈集中在**多渠道集成（Telegram/飞书）与 API 兼容性**上。安全性方面，项目组正在积极合并修复 API 信息泄露和权限校验的 PR，整体健康度良好，但需关注大量堆积的 XL 级 PR 带来的代码审查压力。

### 2. 版本发布
- **状态**：❌ **无新版本发布**
- **分析**：尽管没有正式 Release，但 Staging CI 正在频繁进行自动晋升（如 PR #1730, #1732），表明代码正在快速向测试分支合并，预计近期会有较大的版本更新。

### 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，主要集中在提升系统稳定性、安全性与 LLM 兼容性：

*   **稳定性修复**：
    *   **PR #1650 (CLOSED)**: 彻底重构了 `full_job` 执行逻辑，修复了导致任务静默失败、死循环和输出丢失的多个严重问题，显著提升了任务执行的可靠性。
*   **安全性增强**：
    *   **PR #1719 (OPEN/Merged context)**: 修复了 API 响应中泄露数据库错误细节的高危漏洞，统一了错误信息清洗逻辑。
    *   **PR #1590 (OPEN/Active)**: 阻止了跨频道审批线程劫持攻击，引入了 `source_channel` 字段以增强权限校验。
*   **LLM 生态扩展**：
    *   **PR #1613 (CLOSED)**: 新增了对通用 OpenAI Responses provider 的支持，允许通过 API Key 接入各类兼容 OpenAI 协议的网关。
*   **架构重构**：
    *   **PR #1725 (OPEN)**: 正在将前端提取为独立的 `ironclaw_frontend` crate 并引入 Widget 系统，为 UI 自定义化铺路。

### 4. 社区热点
今日社区讨论焦点主要集中在工具调用与渠道集成问题上：

*   **🔥 Issue #1676 [OPEN]**: **Telegram Bot 集成故障**
    *   **热度**：9 条评论
    *   **焦点**：用户报告 Telegram Bot 仅能单向工作，轮询新消息时出现 HTTP Tool 调用错误。用户对比了旧版 OpenClaw 指出新版存在回归问题。这反映了用户对**多模态通信渠道稳定性**的强烈需求。
    *   **链接**：[nearai/ironclaw Issue #1676](https://github.com/nearai/ironclaw/issues/1676)
*   **🔥 Issue #1673 [OPEN]**: **飞书/Lark 渠道配对卡死**
    *   **热度**：1 条评论，1 个点赞
    *   **焦点**：配置飞书应用后，系统一直卡在 "Awaiting Pairing" 状态，未生成配对码。这是影响中文用户使用的阻断性问题。
    *   **链接**：[nearai/ironclaw Issue #1673](https://github.com/nearai/ironclaw/issues/1673)

### 5. Bug 与稳定性
今日报告的 Bug 及其状态按严重程度排列如下：

*   **🚨 HIGH | API 信息泄露 [FIXED]**
    *   **Issue #1702 [CLOSED]**: 数据库异常直接格式化为 API 响应返回给客户端。
    *   **状态**：已在 PR #1719 中修复。
    *   **链接**：[nearai/ironclaw Issue #1702](https://github.com/nearai/ironclaw/issues/1702)
*   **⚠️ MEDIUM | WASM Tool Schema 不一致**
    *   **Issue #1303 [CLOSED]**: WASM 工具导出了强类型 Schema，但 IronClaw 向 LLM 广播的是空 `{}` Schema，导致模型调用失败。
    *   **状态**：已确认并关闭（可能已在上游修复）。
    *   **链接**：[nearai/ironclaw Issue #1303](https://github.com/nearai/ironclaw/issues/1303)
*   **⚠️ MEDIUM | Telegram HTTP Tool 错误**
    *   **Issue #1676 [OPEN]**: 如上所述，Telegram 消息轮询失败。
    *   **状态**：尚无关联 Fix PR。
*   **⚠️ MEDIUM | OAuth 校验过松**
    *   **Issue #1443 [CLOSED]**: 旧版 OAuth state 校验逻辑存在安全隐患。
    *   **状态**：已修复。

### 6. 功能请求与路线图信号
社区与核心团队正在推动以下关键功能，暗示了下个版本的重点：

1.  **前端可扩展性**：PR #1725 提出的 Widget 系统表明 IronClaw 正转向**平台化**，允许企业自定义 UI。
2.  **Slack 原生支持**：PR #1549 正在实现基于 WebSocket 的 Slack Socket Mode，旨在解决 NAT 穿透问题，无需公网 URL 即可接入 Slack，这对私有化部署用户极具价值。
3.  **配置热重载**：Issue #1119 和 #1350 均呼吁支持 LLM Provider 和配置的**热重载**。目前修改配置需重启进程，这被列为 P2 优先级，是提升用户体验的关键一环。
4.  **评测体系升级**：Issue #1731 建议用 `pass@k` 替代 `pass_rate`，表明项目正在认真对待**Agent 评测的科学性**。

### 7. 用户反馈摘要
从 Issues #1676 和 #1673 的反馈来看：
*   **痛点**：用户在生产环境对接通讯软件（Telegram, Feishu）时遇到阻碍，特别是**配对流程**和**长连接维护**不够健壮。
*   **迁移摩擦**：有用户提到旧版 "OpenClaw" 在某些功能上表现更好，暗示 IronClaw 的重构可能带来了短期的功能回归或体验下降。
*   **期待**：用户迫切希望 Web UI 上的配置更改（如切换模型）能即时生效（Issue #1350），而不是必须重启服务。

### 8. 待处理积压
以下重要 Issue 或 PR 长期未得到最终解决或合并，建议维护者优先关注：

*   **PR #1243 [OPEN]**: `feat(jobs): per-job MCP server filtering...`
    *   **状态**：XL 级改动，涉及作业执行架构，自 3 月 16 日开启至今未合并。这是一个高价值功能，允许为每个任务挂载不同的 MCP 服务器，但可能存在较大的架构设计争议。
*   **PR #944 [OPEN]**: `feat(discord): add gateway channel flow in wasm`
    *   **状态**：自 3 月 11 日开启，涉及复杂的 WASM 信道映射，对于扩展 IronClaw 的社交场景至关重要。
*   **Issue #1119 [OPEN]**: `feat: Unify configuration sources...`
    *   **状态**：标记为 P2 优先级，是配置系统重构的前置条件，目前尚未指派处理人。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI** 项目 2026年3月29日 的动态日报。

### 1. 今日速览
LobsterAI 今日保持着**极高的开发活跃度**，随着 `2026.3.29` 版本的正式发布，项目在**底层架构重构**（MCP Bridge、OpenClaw 迁移）和**用户体验增强**（UI 交互优化）两方面均取得了重大进展。过去 24 小时内共有 18 个 PR 更新，其中 12 个已合并，显示出维护者高效的代码审查与合并节奏。社区方面，用户对配置持久化及 MCP 标准化支持的诉求较为强烈，相关 Bug 修复已在路线上。总体而言，项目正处于功能快速迭代与稳定性修补并行的健康阶段。

---

### 2. 版本发布
**[Release 2026.3.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29)**

本次更新重点在于优化协同交互体验与修复底层日志问题，建议所有用户升级。
*   **新特性**:
    *   引入 `AskUserQuestion` 插件，删除了确认弹窗，转为结构化用户交互，提升了对话流畅度。
    *   UI 重构：消息导航样式更新为“迷你轨道”样式。
*   **修复**:
    *   修复了导出日志时的挂起问题及 "reply was never sent" 错误，提升了客户端稳定性。

---

### 3. 项目进展
今日共有 **12 个 PR 被合并**，主要集中在架构解耦、国际化支持及关键 Bug 修复：

*   **架构重构与迁移**:
    *   **[feat(im): migrate xiaomifeng to OpenClaw plugin #994](https://github.com/netease-youdao/LobsterAI/pull/994)**: 将"小蜜蜂"平台从核心代码中剥离，完全迁移至 OpenClaw 插件运行，进一步减少了核心包体积，统一了 IM 平台接入架构。
    *   **[fix(cowork): 移除 McpBridgeServer secret 鉴权 #1002](https://github.com/netease-youdao/LobsterAI/pull/1002)**: 优化 MCP 鉴权逻辑，移除了容易导致 401 错误的动态 Secret 校验，改为本地安全策略，显著提升了插件连接的稳定性。

*   **稳定性修复**:
    *   **[fix(openclaw): fix model name loss and gateway infinite restart loop #894](https://github.com/netease-youdao/LobsterAI/pull/894)**: **关键修复**。解决了自定义模型名称丢失以及由此引发的 Gateway 无限崩溃重启死循环问题。
    *   **[fix(cron): prevent gateway crash during scheduled task execution #993](https://github.com/netease-youdao/LobsterAI/pull/993)**: 修复了定时任务执行期间因配置写入触发的 Gateway 重启崩溃问题。
    *   **[fix(renderer): attachments disappear when change different task session #851](https://github.com/netease-youdao/LobsterAI/pull/851)**: 修复了切换会话时附件丢失或串台的严重数据 Bug。

*   **体验优化**:
    *   多项国际化（i18n）改进合并，包括预设 Agent 名称、描述及错误提示的汉化支持。

---

### 4. 社区热点
今日社区关注焦点集中在**配置持久化**与 **MCP 兼容性**上：

1.  **[Issue #1005 配置文件重启后被重置](https://github.com/netease-youdao/LobsterAI/issues/1005)** (已关闭但有代表性):
    *   **现象**: 用户反馈飞书流式输出等自定义配置在重启后被强制重置为默认值。
    *   **分析**: 这反映了当前版本的配置保护机制过于激进。虽然该 Issue 被关闭，但同类 Issue #1006 仍在 Open 状态，表明这是企业级用户（需持久化配置）的核心痛点。
2.  **[Issue #1003 Notion MCP 环境变量问题](https://github.com/netease-youdao/LobsterAI/issues/1003)**:
    *   **现象**: LobsterAI 的 MCP Bridge 启动 Notion MCP Server 时未能正确传递 Token，导致 401 错误。
    *   **分析**: 随着 MCP 协议的普及，用户对 LobsterAI 作为 MCP Host 的兼容性要求变高。目前 Bridge 层对环境变量的处理存在缺陷。

---

### 5. Bug 与稳定性
按严重程度排序的今日 Bug 清单：

*   **P0 (严重 - 导致服务不可用)**:
    *   **Gateway 无限重启循环**: 由 [Issue #859](https://github.com/netease-youdao/LobsterAI/issues/859) 报告，当配置无效时进程崩溃且无法自动停止。
        *   *状态*: **已修复** ([PR #894](https://github.com/netease-youdao/LobsterAI/pull/894))。
    *   **附件数据混乱**: 不同任务会话间切换导致附件丢失或显示错误。
        *   *状态*: **已修复** ([PR #851](https://github.com/netease-youdao/LobsterAI/pull/851))。

*   **P1 (高优 - 影响核心功能)**:
    *   **配置无法持久化**: [Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006) 指出 `openclaw.json` 和 `AGENTS.md` 每次重启被覆盖。
        *   *状态*: **待修复**。目前用户需依赖 cron job workaround，严重影响自定义使用。
    *   **MCP SSE/HTTP 传输失效**: [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) 指出当前仅支持 stdio 模式，SSE 模式配置不生效。
        *   *状态*: **待合并** (已有社区 PR 提交修复)。

---

### 6. 功能请求与路线图信号
从待合并的 PR 中可以窥见下一版本的功能重心：

1.  **交互效率大幅提升**:
    *   **[PR #999] Cmd+K 命令面板**: 引入类似 VS Code/Raycast 的命令面板，支持模糊搜索，旨在解决 UI 操作繁琐的问题。
    *   **[PR #998] 选中文本浮动工具栏**: 支持对 AI 回复的片段进行“引用、解释、翻译”等快捷操作，极大地优化了对话流的交互深度。
2.  **MCP 生态扩展**:
    *   社区开发者已提交 [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) 以支持 SSE 传输，这意味着未来 LobsterAI 将能连接更多基于 HTTP/SSE 的远程 MCP 服务。

---

### 7. 用户反馈摘要
*   **痛点**: "配置每次重启都没了" 是今日最响亮的负面反馈。用户认为 LobsterAI 作为一个"助手"，不应该在重启时像"恢复出厂设置"一样对待用户的配置文件 ([Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006))。
*   **认可**: 对日志导出、消息导航 UI 的优化表示认可。
*   **场景**: 开发者用户正在尝试将 LobsterAI 作为统一入口连接 Notion、飞书等工具，但受限于 MCP Bridge 的环境变量传递 Bug ([Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003))。

---

### 8. 待处理积压
建议维护者优先关注以下积压事项：

1.  **[Issue #1006 配置持久化缺失](https://github.com/netease-youdao/LobsterAI/issues/1006)**: 这是一个阻碍生产环境使用的严重问题，目前的 workaround 并非长久之计，需要从架构层面调整配置加载逻辑（区分"默认模板"与"用户配置"）。
2.  **[PR #1001 MCP SSE 支持](https://github.com/netease-youdao/LobsterAI/pull/1001)**: 这是一个高质量的功能增强 PR，建议尽快 Review 合并，以修复 Notion MCP 等远程服务的连接问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是为您生成的 **TinyClaw** 项目 2026年3月29日动态日报。

---

# 📊 TinyClaw 项目动态日报 (2026-03-29)

### 1. 今日速览
今日 TinyClaw 项目迎来了**极高强度的维护与整合日**。虽然没有发布新版本，但项目在一天内**关闭了 7 个 Issues 并合并了 15 个 PRs**，显示出核心团队正在为大版本发布做最后的代码清理和功能整合。重点集中在**安装体验重构**（迁移数据、统一安装脚本）、**Docker 环境修复**以及**TinyOffice 控制台的功能迭代**。项目健康度极高，不仅响应迅速，而且将大量积压的 Feature Request（如多代理支持、实时流式传输）转化为了合并代码。

### 2. 版本发布
*   **无新版本发布**。
    *   *分析*：鉴于今日关闭了大量涉及核心安装逻辑（`#239`, `#240`）和 Docker 架构（`#265`, `#266`）的 PR，推测团队正在积攒这些修复，预计近期将发布包含重大改进的 `v1.x` 或类似里程碑版本。

### 3. 项目进展
今日共有 **15 个 PR 被合并**，项目整体在稳定性和易用性上迈出了一大步：

*   **安装与部署重构 (核心重点)**:
    *   **PR #237 / #235**: 将 `curl` 脚本安装确立为默认方法，简化了用户入门流程。
    *   **PR #239**: 实现了从旧品牌 `~/.tinyclaw` 到新品牌 `~/.tinyagi` 的数据自动迁移，保证了老用户的平滑升级。
    *   **PR #240**: 修复了原生模块（`better-sqlite3`）在不同操作系统下的编译问题，并清理了冗余脚本。
*   **Docker 与运行时修复**:
    *   **PR #266**: 修复了 Docker 容器中 Codex 无法读取鉴权文件的严重权限问题，回退以 root 运行以确保功能可用。
    *   **PR #265**: 调整了 Docker 数据卷路径，确保 AI CLI 的状态文件能被正确持久化。
    *   **PR #218**: 引入了 5 分钟超时机制，强制杀死卡死的代理进程，防止队列死锁。
*   **TinyOffice (Web 控制台) 迭代**:
    *   **PR #268**: 重构了控制台布局，合并了 Providers 与 Services 页面，移除了独立的 Logs 页面，UI 更加精简。
    *   **PR #255**: 修复了仪表盘无法正确显示 "排队/处理中" 状态的问题。
*   **新功能与增强**:
    *   **PR #113**: 实现了 Telegram 频道的实时工具调用流式反馈，大幅提升了交互体验。
    *   **PR #168**: 合并了多代理支持以及对 Kimi2.5 和 Minimax2.5 模型的支持，扩展了后端生态。

### 4. 社区热点
今日社区最活跃的讨论集中在功能增强与平台支持上：

*   **Issue #193** (已关闭): **TinyOffice 首次运行配置向导**
    *   **热度**: 10 条评论
    *   **链接**: [TinyAGI/tinyagi Issue #193](https://github.com/TinyAGI/tinyagi/issues/193)
    *   **分析**: 用户强烈希望摆脱命令行配置，转向 Web 端的图形化初始设置。该 Issue 的关闭表明相关功能可能已经通过最近的 TinyOffice 更新实现或纳入直接开发计划。
*   **Issue #126** (已关闭): **Telegram Bot 断线重连失败**
    *   **热度**: 7 条评论
    *   **链接**: [TinyAGI/tinyagi Issue #126](https://github.com/TinyAGI/tinyagi/issues/126)
    *   **分析**: 这是一个中等严重程度的 Bug，影响了 IM 渠道的稳定性。随着 PR #113 (Telegram 流式传输) 的合并，该重连问题可能已作为整体重构的一部分被修复。

### 5. Bug 与稳定性
今日修复了多个影响核心流程的 Bug，无新增未处理的严重 Bug 报告：

*   **[HIGH] Docker 权限导致鉴权失败** (修复于 PR #266): 之前版本在 Docker 中使用 `gosu` 降权导致 Codex 无法读取 `/root/.codex/auth.json`，导致 500 错误。
*   **[HIGH] 代理进程假死** (修复于 PR #218): 之前的队列恢复机制仅重置数据库状态但不杀死进程，导致资源泄露和重复处理。现已加入 5 分钟强制 Kill 逻辑。
*   **[MEDIUM] 原生模块兼容性** (修复于 PR #240): 修复了 Linux 打包的 Release 在 macOS 上无法运行的问题（通过安装后重编译 `better-sqlite3` 解决）。
*   **[MEDIUM] 类型错误** (修复于 PR #264): 修复了 Strict 模式下的 TypeScript 构建错误。

### 6. 功能请求与路线图信号
*   **模型提供商扩展**: Issue #124 提出的对 `z.ai`, `kimi`, `openrouter` 等更多提供商的支持，随着 PR #168 (支持 Kimi2.5/Minimax2.5) 的合并已部分实现。这表明项目正致力于兼容主流和非主流的高性能模型。
*   **Docker Swarm 支持**: Issue #100 请求支持 Docker Swarm 以进行多代理编排。虽然该 Issue 已关闭，但 PR #168 中引入的 "Multi-agent support" 表明项目正在架构层面解决多实例编排问题，可能是对社区诉求的回应。
*   **Web 端全功能化**: Issue #194 (控制面板运行时控制) 和 Issue #193 (Onboarding) 的关闭，预示着下一个版本将极力推崇 "Web First" 的使用体验，减少对 CLI 的依赖。

### 7. 用户反馈摘要
*   **痛点**: 用户对 CLI 配置的繁琐感到疲劳，特别是 "首次运行设置" 和 "原始配置文件编辑" 体验较差（来源：Issue #193）。
*   **痛点**: WSL2 环境下的网络连接问题（ETIMEDOUT）困扰了部分 Windows 用户（来源：Issue #84）。
*   **场景**: 大量用户使用 Docker 进行部署，且非常依赖 Telegram 作为交互渠道（来源：近期 PR 修复重点）。
*   **满意度**: 社区对增加新模型（Kimi, Minimax）的反应积极，表明用户群体对成本敏感或需要多样化的模型选择以应对不同任务。

### 8. 待处理积压
*   **目前积压清理中**: 今日关闭了 7 个 Issues，其中包括 2 月份遗留的 Bug（#84, #100, #126）。这表明维护者正在积极清理技术债务。
*   **潜在关注点**: 虽然今日活跃度极高，但所有 PR 均来自少数核心开发者。如果社区希望能支持更多非核心的开发者贡献代码，可能需要维护者补充更详细的 `CONTRIBUTING.md` 或开发文档（目前 README 似乎正在重定向安装方式）。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于 2026-03-29 数据生成的 Moltis 项目动态日报。

---

# 📊 Moltis 项目日报 (2026-03-29)

### 1. 今日速览
Moltis 项目今日保持了**极高的迭代速度**，在过去24小时内发布了 **4个新版本**，同时合并了 **13个 PR**，显示出维护者正在密集地进行功能迭代与错误修复。项目重点集中在修复近期引入的回归问题（特别是自定义 LLM 提供商配置与聊天压缩逻辑）以及拓展生态集成（新增 Matrix、Fireworks.ai、Jina.ai 支持）。虽然仍有少量待处理的 Bug 报告，但整体**项目健康度良好**，社区贡献活跃，核心功能稳步增强。

### 2. 版本发布
今日连续发布了 4 个版本（从 `20260327.03` 到 `20260328.02`），频率极高，表明项目处于快速演进期。根据 PR 记录推断，这些版本主要包含以下更新内容：

*   **核心修复**：修复了 MiniMax 提供商的系统提示词提取问题，修复了手动压缩上下文导致聊天中断的严重 Bug。
*   **提供商支持**：新增 **Fireworks.ai** 作为主要提供商，并引入了 Anthropic 和 OpenRouter 的 Prompt Caching（提示词缓存）功能。
*   **渠道集成**：初步合并了 **Matrix** 协议的集成支持。
*   **Telegram 增强**：优化了 Telegram 论坛主题的会话隔离与文件读取能力。

### 3. 项目进展
今日共有 **13 个 PR 被合并**，显著提升了项目的稳定性与功能性：

*   **🛠️ 提供商与模型管理优化**：
    *   [PR #507] & [PR #506]：重构了自定义 OpenAI 兼容提供商的发现逻辑。现在，如果用户指定了具体模型，系统将跳过耗时的模型探测，解决了配置时的超时问题（关联修复 Issue #502, #504）。
    *   [PR #497]：正式集成 **Fireworks.ai**，支持 Kimi、DeepSeek V3、Llama 3.1 等模型的路由。
    *   [PR #495]：为 Anthropic 和 OpenRouter 添加了 Prompt Caching 支持，有助于降低长对话场景的延迟与成本。

*   **🧩 新渠道与新功能**：
    *   [PR #331] / [PR #500]：合并了 **Matrix** 协议的集成支持，允许用户通过 Matrix 客户端与 Moltis 交互。
    *   [PR #276]：增强了 Telegram 机器人的能力，现支持直接读取 `.txt` 和 `.md` 等纯文本附件。
    *   [PR #498]：实现了 Telegram 论坛主题的会话隔离，不同主题下的对话将互不干扰。

*   **🐛 关键稳定性修复**：
    *   [PR #505]：将上下文压缩摘要的角色从 `Assistant` 改为 `System`，修复了在 llama.cpp 等严格提供商下导致对话崩溃的问题。
    *   [PR #510]：恢复了 MiniMax 的顶层系统提示词提取，修复了因 API 规范差异导致的错误 2013。

### 4. 社区热点
今日社区关注点主要集中在**多渠道接入**与**本地/第三方模型支持**上：

*   **Matrix 集成 ([PR #331](https://github.com/moltis-org/moltis/pull/331))**：这是社区期待已久的功能，合并后标志着 Moltis 正式跨出单一即时通讯软件的范畴，向去中心化通讯协议迈进。
*   **本地 LLM 连接问题 ([Issue #514](https://github.com/moltis-org/moltis/issues/514))**：用户反馈大部分模型无法选中，结合 [PR #515] (增加探测超时时间) 来看，这反映了用户在使用本地部署（如 Ollama/vLLM）时遇到性能瓶颈或兼容性问题，维护者已在响应并优化。

### 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，部分已修复：

1.  **[严重] 模型无法选中** - [Issue #514](https://github.com/moltis-org/moltis/issues/514) [OPEN]
    *   **现象**：用户报告大部分模型无法被选中。
    *   **状态**：待进一步确认，可能与模型探测超时有关。
    *   **关联修复**：[PR #515](https://github.com/moltis-org/moltis/pull/515) 已提议将探测超时从 10s 增加到 30s。

2.  **[已修复] ARM64 安装失败** - [Issue #496](https://github.com/moltis-org/moltis/issues/496) [CLOSED]
    *   **现象**：Linux aarch64 环境下 `install.sh` 脚本下载包 404。
    *   **状态**：已关闭，推测已在最新版本中修复发布流程。

3.  **[已修复] 升级后聊天设置无效** - [Issue #508](https://github.com/moltis-org/moltis/issues/508) [CLOSED]
    *   **现象**：升级后聊天返回 "invalid chat setting" 错误。
    *   **状态**：已关闭，可能由 MiniMax 或上下文压缩的修复 PR 一并解决。

### 6. 功能请求与路线图信号
根据开放的 PR 分析，接下来的版本将重点关注以下领域：

*   **Web 搜索增强**：[PR #513](https://github.com/moltis-org/moltis/pull/513) 提议增加 **Jina.ai** 作为网络搜索提供商，表明项目正致力于提升 AI 的联网搜索能力。
*   **Session 召回与 SSH 运维**：[PR #503](https://github.com/moltis-org/moltis/pull/503) 引入了跨会话召回和托管 SSH 运行时体验，这暗示 Moltis 正试图从单纯的 Chatbot 向具备长期记忆的运维/开发助手转型。
*   **语音服务自定义**：[PR #499](https://github.com/moltis-org/moltis/pull/499) 允许为 OpenAI TTS/STT 配置 `base_url`，这将允许用户接入本地语音服务或兼容接口。

### 7. 用户反馈摘要
*   **痛点**：用户在配置自定义 OpenAI 兼容接口（如本地 LLM）时经常遇到超时和连接问题，这表明默认的超时设置（10s）对于消费级硬件加载大模型来说过于激进。
*   **场景**：大量用户尝试将 Moltis 接入 Telegram 论坛和 Matrix，说明**多平台聚合聊天**是一个核心用例。
*   **满意度**：Bug 修复速度极快（如同日报告同日修复），用户对维护者的响应速度表示认可。

### 8. 待处理积压
*   **[重要] 本地 LLM 探测超时**：[PR #515](https://github.com/moltis-org/moltis/pull/515) 仍处于 Open 状态，建议尽快合并以缓解本地部署用户的体验问题。
*   **[重要] GraphQL 服务绑定**：[Issue #494](https://github.com/moltis-org/moltis/issues/494) 指出 GraphQL 可能绕过了动态聊天服务绑定，虽然有 [PR #511](https://github.com/moltis-org/moltis/pull/511) 提出修复，但仍需关注其合并进度，以免影响 API 层的稳定性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-29)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区反馈热烈。过去24小时内共产生 **41 条 Issue 更新**（其中 38 条为新开/活跃）和 **25 条 PR 更新**，显示项目正处于快速迭代期。虽然没有新版本发布，但合并了 13 个 PR，主要涉及文档更新、配置修复和内存管理优化。社区关注焦点集中在 **Ollama/本地模型配置难**、**Web UI 易用性**（如粘贴图片、模型选择框消失）以及 **多渠道（钉钉/飞书）集成稳定性** 上。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **13 个 PR 被合并/关闭**，主要集中在稳定性修复与文档完善，具体包括：
*   **文档与配置优化**：合并了关于 MCP、Tools、Agent 及 Config 的多个文档更新 PR (#2444, #2450, #2461)，显著降低了用户的上手门槛。
*   **关键 Bug 修复**：
    *   修复了 Skill 中通道配置传递错误的问题 (#2436)。
    *   修复了创建 Workspace Skill 时的配置传递问题 (#2440)。
    *   改进了文件截断逻辑，优化了长文本（如小说）的阅读体验 (#2449)。
    *   优化了内存管理中 Skill 工具结果的截断策略 (#2410)。
*   **UI 调整**：合并了控制台样式调整 PR (#2352)，提升了前端视觉体验。

**整体评价**：项目在"修内功"方面取得了扎实进展，解决了多个影响用户体验的底层逻辑和配置问题，为后续更大功能的发布奠定了基础。

## 4. 社区热点
今日讨论最活跃的议题反映了用户在**部署配置**与**渠道集成**方面的强烈诉求：
*   **[OPEN] #2291 🐾 Help Wanted: Open Tasks** (评论: 32)
    *   **分析**：官方发布的任务认领帖引发了大量开发者关注，表明社区有强烈的贡献意愿，希望参与到核心功能的构建中。
*   **[OPEN] #2218 [Bug] CoPaw process pegged at 100% CPU** (评论: 10)
    *   **分析**：空闲状态下 CPU 占用 100% 是严重的性能问题，直接影响本地部署体验，急需解决。
*   **[OPEN] #2293 被QA agent弄翻了-进不了UI界面** (评论: 9)
    *   **分析**：Agent 操作导致 UI 崩溃且重装无效，反映了用户对系统**鲁棒性**和**容错机制**的担忧。
*   **[OPEN] #2298 [Bug]: 没有LLM的选择项，而且对ollama支持太难配置了** (评论: 6)
    *   **分析**：本地模型（Ollama）配置复杂且 UI 选项缺失是阻碍用户从 Web 模型转向本地模型的高墙，这是当前最痛的痛点之一。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，按严重程度排序如下：

*   **🔴 严重**：
    *   **CPU 空转 100% (#2218)**：导致机器卡顿，影响生产环境部署。暂无 Fix PR。
    *   **UI 彻底崩溃无法恢复 (#2293)**：Agent 误操作导致前端报错 `SyntaxError`，用户无法进入界面。暂无 Fix PR。
    *   **网关重启导致 Agent 永久卡死 (#2445)**：远程部署场景下的致命问题，需重启容器解决。暂无 Fix PR。

*   **🟠 中等**：
    *   **Ollama 配置困难 (#2298)**：文档缺失且 UI 不显示选项。
    *   **钉钉 Session Webhook 过期导致推送失败 (#2221)**：虽然 Issue 已关闭，但相关联的 Cron 任务稳定性问题 (#2153) 仍需关注。
    *   **Telegram 渠道消息轰炸 (#2464)**：单个任务触发数十条消息，严重影响阅读。
    *   **MCP ConfigWatcher 空值异常 (#2462)**：导致 CLI 工具不可用。

## 6. 功能请求与路线图信号
*   **[OPEN] #2434 Console Web 支持粘贴图片/文件功能**：符合现代聊天软件习惯，预计很快会被纳入开发（PR #2466 已优化键盘导航，显示前端体验正在优化中）。
*   **[OPEN] #2443 User Asset Backup & Migration**：已有对应 PR (#2457) 提交。该功能对于跨设备迁移和版本升级至关重要，极大概率会合并。
*   **[OPEN] #2418 Skills-Hub 管理页面**：用户希望更方便地下载和管理 Skills，这与目前 Skill 生态的扩展趋势一致。
*   **[OPEN] #2456 "/break" 魔法命令**：用户急需一种在飞书/钉钉中强制中断 Agent 执行的手段，这是提升交互控制权的关键功能。

## 7. 用户反馈摘要
*   **痛点**：
    *   **本地模型门槛高**：用户普遍反映 `pip install 'copaw[ollama]'` 遇到各种坑，且 UI 上找不到模型选择入口。
    *   **渠道集成不稳定**：飞书/钉钉的 Webhook 过期、消息重复、网络波动导致的超时问题频发。
    *   **交互中断**：Agent 容易陷入死循环（如 #2378 提到的 46 次迭代），且用户难以在 Channel 中优雅地打断。
*   **满意点**：
    *   社区对开放 "Help Wanted" 任务列表反应积极，认可项目的开放态度。
    *   对新增的 OAuth 支持（如 GitHub Copilot #2366, MiniMax #2448）表示期待，认为这简化了鉴权流程。

## 8. 待处理积压
*   **#2277 [Bug] BadRequestError 400 (auto tool choice)**：虽然声称在 #1570 修复，但在 v0.2.0 中仍然存在，影响了部分自定义模型的工具调用能力。
*   **#2378 [Bug] Tool-intensive skills cause infinite loop**：关于 `max_iters` 过高和内存压缩钩子的问题尚未得到官方明确回应，影响复杂任务的执行。
*   **#2291 Help Wanted List**：任务列表已发布，需关注维护者是否能及时响应认领请求，避免贡献者热情消退。

---
*数据来源: CoPaw GitHub Repository (2026-03-29)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-29)

**分析师摘要**：本日报基于 2026-03-29 GitHub 数据生成。

---

### 1. 今日速览
ZeptoClaw 项目今日整体活跃度处于**低位运行**状态，未观察到代码提交或版本发布活动。社区方面，过去 24 小时内仅有 1 条新开 Issue，无 PR 更新。值得注意的是，新增 Issue #461 报告了 Telegram 端的严重交互故障，涉及 Open-ended research 任务的无响应问题，虽然目前评论数为 0，但该问题可能严重影响移动端用户体验。项目当前维护重心似乎不在于代码迭代，需关注后续维护者对该关键 Bug 的响应速度。

### 2. 版本发布
本日无新版本发布。

### 3. 项目进展
本日无已合并或已关闭的 Pull Request，代码库无向前推进的变更。

### 4. 社区热点
今日社区最（唯一）活跃的议题是新开的 Bug 报告：
*   **[Issue #461](https://github.com/qhkm/zeptoclaw/issues/461) [OPEN] bug: research tasks via Telegram silently fail with no response**
    *   **数据**：👍 0，评论 0
    *   **分析**：尽管尚无讨论热度，但该 Issue 提出了一个非常具体的痛点——通过 Telegram 执行开放式研究任务（特别是涉及浏览器使用的场景）时，Agent 处理完成但用户收不到反馈。这表明项目在特定客户端（Telegram）的 I/O 处理或长耗时任务的回调机制上可能存在稳定性缺陷。

### 5. Bug 与稳定性
本日报告了 1 个功能性 Bug，按严重程度分析如下：

*   **🔴 高** | **Telegram 端 Research 任务静默失败**
    *   **Issue**: [#461](https://github.com/qhkm/zeptoclaw/issues/461)
    *   **现象**: 用户通过 Telegram 发起涉及浏览器的开放式研究任务时，Agent 内部处理完成，但消息未能成功推送给用户，导致“静默失败”。
    *   **根因分析**: 提交者初步分析指出，可能是 `render_telegram_html()` 函数生成的 HTML 标签格式错误（malformed tags），且缺乏降级处理机制，导致消息发送被拦截或丢弃。
    *   **状态**: Open，暂无 Fix PR。

### 6. 功能请求与路线图信号
本日无明确的新功能请求。但从 Issue #461 的描述中可以提取出以下隐性需求：
*   **健壮性需求**：系统急需针对消息渲染失败的容错机制（Fallback）。
*   **长任务处理**：涉及浏览器自动化的 Research 任务通常耗时较长，需要更可靠的状态同步与结果返回机制。

### 7. 用户反馈摘要
根据 Issue #461 的内容，提炼用户痛点如下：
*   **核心痛点**：**“做了不说”**。用户反馈 Agent 已经完成了繁重的后台研究工作（消耗了资源/时间），但因为前端展示层（Telegram HTML 渲染）的小问题导致结果全丢。这种“静默”体验比直接报错更令人沮丧，因为用户无法判断任务是否执行。
*   **使用场景**：用户倾向于将 ZeptoClaw 作为 Telegram 机器人使用，且用于执行复杂的自动化浏览/研究任务。

### 8. 待处理积压
*   **🚨 需立即关注**: **[Issue #461](https://github.com/qhkm/zeptoclaw/issues/461)** —— 这是一个阻断性 Bug，涉及核心交互闭环。鉴于其“静默失败”的特性，建议维护者优先排查 `render_telegram_html` 的异常捕获逻辑，以免影响 Telegram 端用户的正常使用。

---
*数据来源: GitHub (qhkm/zeptoclaw) | 统计时间窗: 2026-03-28 至 2026-03-29*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

以下是根据您提供的 GitHub 数据生成的 **EasyClaw** 项目动态日报（2026-03-29）。

---

# 📊 EasyClaw 项目动态日报 (2026-03-29)

### 1. 今日速览
EasyClaw 项目今日保持高频迭代态势，发布了最新的 **v1.7.8** 版本，重点优化了 macOS 平台的安装体验与安全机制绕过指引。社区活跃度显著提升，过去 24 小时内新增 2 条有效 Issue，均聚焦于多模型切换场景下的兼容性问题。虽然目前暂无代码合并记录，但用户反馈的 Bug 为后续修复提供了明确方向，主要集中在“百炼套餐”的 API 调用逻辑上。

### 2. 版本发布
- **[Release] RivonClaw v1.7.8** [View on GitHub](https://github.com/gaoyangz77/easyclaw/releases)
  - **更新重点**：本次更新主要针对 **macOS 用户**的安装体验。
  - **破坏性变更/注意事项**：
    - 解决了 macOS 上常见的 **"'RivonClaw' is damaged and can't be opened"** 错误。
    - **迁移指南**：该错误是由 macOS Gatekeeper 拦截未签名应用引起的。用户无需重新下载，只需在终端执行提供的命令即可解除封锁。这是 macOS 环境下常见的权限问题，非文件损坏。

### 3. 项目进展
- **代码合并**：今日无合并的 Pull Request。
- **进展评估**：项目当前处于 **维护与修整阶段**。尽管无新代码合入，但 v1.7.8 的发布表明维护者正在致力于降低用户的部署门槛。核心功能的推进暂时停滞，需等待社区反馈的 Bug 修复后再进行下一轮迭代。

### 4. 社区热点
今日社区讨论最集中的问题是关于多模型切换时的 API 报错，这反映了用户对 EasyClaw 作为“多模型聚合客户端”的高频使用需求。

- **[Issue #29] [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误** [查看详情](https://github.com/gaoyangz77/rivonclaw/issues/29)
  - **热度**：👍 0 | 💬 1
  - **分析**：该 Issue 由用户 `slowayear` 提出，详细描述了从 Qwen3.5 切换到 GLM/Kimi 时遇到的参数范围错误。评论区已有互动，表明该问题具有较高的复现率和社区关注度。
- **[Issue #28] [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误** [查看详情](https://github.com/gaoyangz77/rivonclaw/issues/28)
  - **热度**：👍 0 | 💬 0
  - **分析**：与 #29 高度相似，发生在 Windows 11 V1.7.7 版本环境下。两个 Issue 的同时出现表明这是一个**普遍存在的回归问题**。

### 5. Bug 与稳定性
今日报告的 Bug 集中在 API 调用层，属于**高严重度**问题，直接影响核心功能使用。

- **🔴 严重 (High): 百炼套餐模型切换导致 API 400 错误**
  - **表现**：用户在使用百炼套餐时，从 Qwen3.5 切换至 Kimi2.5 或 GLM5 等非默认模型后，API 返回 `HTTP 400: InternalError.Algo.InvalidParameter`。
  - **报错详情**：`Range of input length should be [1, 202752]`。这暗示切换模型后，请求体中的参数（可能是 Prompt 长度或上下文配置）未根据新模型的规范进行重置或裁剪。
  - **涉及 Issue**: [#28](https://github.com/gaoyangz77/rivonclaw/issues/28), [#29](https://github.com/gaoyangz77/rivonclaw/issues/29)
  - **修复状态**：❌ **暂无 Fix PR**。建议维护者优先排查模型切换时的参数校验逻辑。

### 6. 功能请求与路线图信号
- **信号**：虽然用户未直接请求新功能，但从 Bug 报告中可以看出，用户强烈依赖**跨模型无缝切换**的能力。
- **预测**：下一版本（预计 v1.7.9）极有可能包含针对“模型上下文长度自适应”或“API 参数映射”的修复补丁，以支持更广泛的第三方模型接入。

### 7. 用户反馈摘要
- **痛点**：**配置兼容性**是当前最大痛点。用户期望在切换模型（如从 Qwen 到 Kimi）时，软件能自动处理不同模型 API 的参数差异（特别是 Token 限制），而不是直接报错。
- **场景**：用户多在进行模型对比测试或针对不同任务切换模型时遇到阻碍。
- **满意度**：v1.7.8 对 macOS 安装问题的回应提升了安装阶段的满意度，但运行时的报错降低了使用评分。

### 8. 待处理积压
- **需立即响应**：Issue [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) 和 [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) 是目前仅有的活跃 Issue，且描述详细、复现步骤清晰。建议维护者尽快确认是否为 API 网关层面的参数传递错误，并合并这两个重复 Issue 进行统一修复。

---
*数据来源: EasyClaw GitHub Repository | 分析师: AI Analyst*

</details>