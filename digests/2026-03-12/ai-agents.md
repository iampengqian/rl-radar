# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 02:24 UTC

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

# OpenClaw 项目动态日报 (2026-03-12)

**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 项目今日保持**极高活跃度**，社区交互量持续高位运行。过去 24 小时内共产生 500 条 Issue 更新（新开/活跃 420 条，关闭 80 条）和 500 条 PR 更新（待合并 333 条，已合并/关闭 167 条）。尽管今日**无新版本发布**，但开发重心明显向修复近期版本（v2026.3.7/v2026.3.8）引入的回归问题倾斜，特别是针对 Kimi K2.5 模型的配置验证和工具调用失效问题。社区对多模态能力（视觉）、Cron 任务稳定性及模型提供商兼容性的关注度显著上升。

## 2. 版本发布

*   **状态**: 🈚 今日无新版本发布。
*   **分析**: 开发团队可能正在积蓄功能点或集中修复近期回归 Bug，预计下一个版本将包含大量针对 Kimi 模型、Cron 任务及 Web UI 连接性的修复补丁。

## 3. 项目进展

虽然主分支未发布新版本，但 PR 列表显示大量核心修复已提交审核，主要集中在以下领域：

*   **Agent 稳定性修复**: PR #43497 旨在解决网关重启后子代理运行状态丢失的问题，PR #43687 修复了文件监听器在启动后无法识别新目录的隐患。
*   **跨平台与客户端**: PR #43016 新增了鸿蒙OS 客户端应用，标志着 OpenClaw 正式向全平台覆盖迈进。
*   **通道与工具修复**: PR #42512 修复了 WhatsApp Web 的自动 TTS 交付链条，PR #42927 为 Discord 语音添加了 DAVE 加密支持，PR #43276 修复了群聊中无法发送附件的问题。
*   **数据与备份**: PR #41345 引入了基于文件夹的加密快照备份流程，显著提升了用户数据的安全性。

## 4. 社区热点

今日讨论最热烈的问题反映了用户在**模型兼容性**和**多模态能力**方面的迫切需求：

1.  **[Bug] API 速率限制误报 (#32828)**
    *   **热度**: 👍 7 | 💬 51
    *   **分析**: 尽管底层 API 正常，OpenClaw 仍错误报告所有限制。这表明网关层的速率限制检测逻辑可能存在误判，严重影响了用户体验。
    *   **链接**: [Issue #32828](https://github.com/openclaw/openclaw/issues/32828)

2.  **[Feature] 钉钉作为首选安装通道 (#26534)**
    *   **热度**: 👍 11 | 💬 44
    *   **分析**: 钉钉集成已存在但未在初始向导中显示，增加了企业用户的配置成本。用户强烈希望将其提升为一级支持通道。
    *   **链接**: [Issue #26534](https://github.com/openclaw/openclaw/issues/26534)

3.  **[Feature] 支持图片识别/视觉能力 (#28744)**
    *   **热度**: 👍 0 | 💬 12
    *   **分析**: 用户指出目前 OpenClaw 在接入飞书等平台时，未将图片数据传递给模型（如 MiniMax-Vision）。这阻碍了 Agent 向多模态交互演进。
    *   **链接**: [Issue #28744](https://github.com/openclaw/openclaw/issues/28744)

4.  **[Bug] Kimi K2.5 配置验证失败 (#41445, #41690)**
    *   **热度**: 💬 15+ | 状态: Closed
    *   **分析**: 大量用户反馈配置 Kimi 模型时出现 Zod 验证错误。这已成为近期最严重的回归问题之一。
    *   **链接**: [Issue #41445](https://github.com/openclaw/openclaw/issues/41445)

## 5. Bug 与稳定性

今日报告的 Bug 集中在**配置验证**、**运行时死锁**及**流式响应处理**，按严重程度排序如下：

### 🔴 严重 - 阻断性/回归问题
1.  **Kimi K2.5 模型配置全线崩溃 (Regression)**
    *   **表现**: 配置时报错 `Unrecognized key 'requiresOpenAiAnthropicToolPayload'`，导致无法使用该模型。
    *   **Issue**: [#41445](https://github.com/openclaw/openclaw/issues/41445), [#41690](https://github.com/openclaw/openclaw/issues/41690)
    *   **状态**: Issues 已关闭，推测修复代码已合入主分支待发布。

2.  **Cron 任务在 2026.3.8 版本中彻底失效 (Regression)**
    *   **表现**: 升级后 Cron 任务停止运行，或产生死锁，日志显示 `job execution timed out`。
    *   **Issue**: [#42883](https://github.com/openclaw/openclaw/issues/42883), [#42579](https://github.com/openclaw/openclaw/issues/42579)
    *   **修复 PR**: #43573 (ACP 会话持久化修复), #43497 (子代理恢复)

3.  **Web UI/本地连接 WebSocket 1006/1008 错误**
    *   **表现**: 本地 LM Studio 后端连接中断，Web Dashboard 提示 unauthorized。
    *   **Issue**: [#42270](https://github.com/openclaw/openclaw/issues/42270), [#17745](https://github.com/openclaw/openclaw/issues/17745)

### 🟠 中等 - 功能性错误
1.  **工具调用退化为纯文本**
    *   **表现**: Kimi 模型返回 `exec(...)` 文本而非结构化工具调用，导致 Agent 无法执行操作。
    *   **Issue**: [#39907](https://github.com/openclaw/openclaw/issues/39907)
    *   **相关 PR**: #41852 (已修复 Kimi provider 的工具格式强制转换)

2.  **Discord/Telegram 通道缺陷**
    *   **表现**: Discord 消息无法接收，Telegram 群聊媒体文件丢失。
    *   **Issue**: [#16314](https://github.com/openclaw/openclaw/issues/16314), [#40440](https://github.com/openclaw/openclaw/issues/40440) (PR #40470 已修复)

## 6. 功能请求与路线图信号

*   **视觉能力**: Issue #28744 的讨论表明，随着多模态模型的普及，OpenClaw 必须尽快在通道层（如飞书、Telegram）实现图片的 Base64/URL 转换与传递。
*   **Memory v2 架构优化**: Issue #28930 提出了基于关联遍历、显著性和访问频率的遗忘机制，这符合 Agent 长期记忆的发展方向。
*   **Android 预构建 APK**: Issue #9443 持续获得关注，表明移动端伴侣应用的需求依然强烈。
*   **细粒度权限控制**: Issue #39979 建议将 exec 权限从二进制级别改为路径级别的 RWX 控制，这将大幅提升 Agent 的安全性。

## 7. 用户反馈摘要

*   **痛点**: "配置验证错误" 是近期最让用户沮丧的问题，许多用户尝试通过修改配置文件绕过但失败；Cron 任务的不稳定性让自动化场景受阻。
*   **场景**: 大量用户尝试将 OpenClaw 接入本地模型 (LM Studio, Qwen) 或特定云服务 (Kimi, GPT-5 Codex)，显示其在 "AI 编排网关" 角色上的核心价值。
*   **满意度**: 用户对 OpenClaw 的灵活性表示认可，但对文档滞后（如配置 Schema 未公开 #22278）和近期版本的快速迭代引入的回归问题表示担忧。

## 8. 待处理积压

*   **🔴 Session 上下文无限增长 (#13938)**: 长期未解决，导致超出模型上下文限制并报错 400。需要引入自动摘要或截断机制。
*   **🟠 macOS Browser Control 失效 (#5047)**: 菜单显示开启但底层未启动，影响桌面端体验。
*   **🟠 WhatsApp Web listener 失效 (#41950)**: 导致计划任务无法发送消息。

---
**总结**: OpenClaw 正处于快速迭代期，近期引入的回归问题（特别是 Kimi 模型和 Cron）是当前的主要痛点。建议用户在升级至最新版本前备份配置，并关注近期即将发布的修复补丁。鸿蒙客户端的加入预示着项目正向更广阔的生态系统扩展。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-12)

## 1. 生态全景
今日开源 AI 智能体生态呈现出**“架构分层”与“渠道整合”**并行的态势。**OpenClaw** 作为核心参照系，正面临快速迭代带来的稳定性阵痛（Kimi/Cron 回归），而 **NanoClaw** 和 **PicoClaw** 等挑战者则通过多智能体架构和 Token 成本优化寻求差异化突围。生态整体正从单一的对话工具向具备多模态、多渠道（IM 集成）、高安全性的**分布式编排网关**演进。

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度/状态 | 核心关键词 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 0 | 🟡 高活/修复中 | Kimi 回归、鸿蒙OS、Cron 死锁 |
| **NanoBot** | 53 | 82 | 0 | 🟢 活跃/增强 | Z.AI 支持、安全修复、多渠道 |
| **Zeroclaw** | 49 | 50 | 2 (Beta) | 🟡 快速/重构中 | CI/CD 重构、Azure 支持、GLIBC |
| **PicoClaw** | 22 | 102 | 3 | 🟢 极高/进攻性 | 多 Agent 架构、Web UI、SOUL.md |
| **NanoClaw** | N/A | 39 | 0 | 🟢 活跃/成本优化 | Token 压缩、QQ/Discord、多实例 |
| **IronClaw** | 37+ | 26+ | v0.18.0 | 🔴 震荡/修复中 | v0.18.0 Bug、WASM 兼容、HMAC |
| **LobsterAI** | 10 | 7 | v0.2.3 | 🟢 稳健/集成 | IM 集成、Mac 修复、体验痛点 |
| **TinyClaw** | N/A | 6 | v0.0.10 | 🟡 重构/转型 | Monorepo、TinyAGI、品牌重塑 |
| **Moltis** | 23 | 20 | 0 | 🟢 高优/加固 | Docker 修复、Vulkan、安全 MCP |
| **CoPaw** | 50 | 50 | 0 | 🟢 活跃/维护 | 企业微信、Windows 兼容、上下文压缩 |
| **ZeptoClaw** | 12 | 13 | v0.7.6 | 🟢 极高/安全加固 | 安全重构、Ollama 云、CLI 增强 |
| **EasyClaw** | 1 | 0 | v1.6.6 | 🟢 平稳/修复 | macOS 兼容、OAuth Bug |

## 3. OpenClaw 在生态中的定位

*   **生态核心与流量中心**：OpenClaw 以单日 500+ 的 Issue/PR 活跃度远超同类，是事实上的**流量汇聚中心**。其主要角色正从单一应用转向**AI 编排网关**，承载了大量非官方模型（Kimi, GPT-5 Codex）的适配压力。
*   **技术路线**：采取**全平台覆盖**策略（从鸿蒙到 Web），但在**稳定性控制**上显得捉襟见肘。相比 NanoClaw 的成本优化和 ZeptoClaw 的安全加固，OpenClaw 当前更侧重于**广度**（渠道、模型、OS）的扩张。
*   **社区规模**：拥有最庞大的用户基数，但也因此背负了最重的“技术债”（如配置验证错误、Session 爆炸）。社区对文档滞后和回归问题的不满是其主要负面因素。

## 4. 共同关注的技术方向

1.  **Token 成本与上下文管理**
    *   **涉及项目**: NanoClaw, OpenClaw, CoPaw
    *   **诉求**: 随着对话增长，Token 消耗失控。NanoClaw 提出了完整的 Token 优化方案，CoPaw 用户呼吁 `/compact` 指令稳定化，OpenClaw 遭遇 Session 无限增长报错。**“降本”已成为刚需**。

2.  **多渠道 IM 集成**
    *   **涉及项目**: OpenClaw, CoPaw, LobsterAI, PicoClaw
    *   **诉求**: 钉钉、飞书、企业微信、QQ 等国内主流办公平台的**原生化接入**是普遍呼声。LobsterAI 和 CoPaw 在这方面进展最快，OpenClaw 仍停留在需求阶段。

3.  **安全与权限隔离**
    *   **涉及项目**: NanoBot, ZeptoClaw, IronClaw
    *   **诉求**: Agent 的自主执行能力引发了安全焦虑。NanoBot 暴露了 API Key 泄露风险，ZeptoClaw 进行了大规模安全重构，IronClaw 引入了 HMAC 签名。**沙箱逃逸和权限粒度控制**是核心议题。

4.  **多智能体协作**
    *   **涉及项目**: PicoClaw, TinyClaw, LobsterAI
    *   **诉求**: 从单体 Agent 向 Team Mode 演进。PicoClaw 合并了 Team 架构，TinyClaw 重构了通信层，LobsterAI 用户请求 Agent Teams SDK。

## 5. 差异化定位分析

*   **OpenClaw vs. NanoClaw**:
    *   **OpenClaw** 像一个**全能但臃肿的瑞士军刀**，试图兼容所有模型和平台，但稳定性受损。
    *   **NanoClaw** 像一个**精打细算的成本控制专家**，专注于 Token 优化和运行效率，适合对成本敏感的商业部署。

*   **PicoClaw vs. TinyClaw**:
    *   **PicoClaw** 侧重于**架构创新与交互体验**（Web UI, SOUL.md），试图定义 Agent 的“个性”与“协作标准”。
    *   **TinyClaw** 正在激进地**基础设施化**（Monorepo, TinyAGI），试图成为构建 AGI 应用的底层 OS。

*   **ZeptoClaw vs. IronClaw**:
    *   **ZeptoClaw** 极度强调**安全合规**（Merkle 审计、TOCTOU 修复），适合企业级安全场景。
    *   **IronClaw** 虽然也关注安全，但目前深陷**WASM 工具链**和**Webhook**的兼容性泥潭，属于激进技术栈的早期探索者。

## 6. 社区热度与成熟度

*   **第一梯队 (成熟/高活)**: OpenClaw, ZeptoClaw, PicoClaw。
    *   OpenClaw 属于“带病生存”的高热度期；ZeptoClaw 处于高质量交付阶段；PicoClaw 处于功能爆发期。
*   **第二梯队 (快速迭代/攻坚)**: NanoClaw, Zeroclaw, CoPaw, LobsterAI。
    *   这些项目都在解决特定痛点（Token、部署、IM 集成），社区增长稳定。
*   **第三梯队 (探索/重构)**: IronClaw, TinyClaw, Moltis。
    *   IronClaw 遇到版本危机；TinyClaw 正在进行破坏性重构；Moltis 在默默修复 Docker 痛点。

## 7. 值得关注的趋势信号

1.  **视觉能力的缺失已成为瓶颈**
    *   OpenClaw, PicoClaw 等项目的用户均在抱怨图片识别（Vision）能力的缺失或不稳定。**多模态（图片/语音）在 IM 场景下的穿透支持**将是下半年的竞争焦点。

2.  **从“能用”到“敢用”的安全跨越**
    *   ZeptoClaw 的安全重构和 NanoBot 的 API Key 泄露讨论表明，社区不再满足于简单的 Demo 级隔离。**细粒度权限控制（RWX）、审计追踪、密钥托管**将是企业采用的前置条件。

3.  **本地模型适配的“最后一公里”**
    *   尽管 Ollama/MLX 支持已普及，但在 Tool Calling 兼容性（如 Qwen/Ollama 经常退化为纯文本）上仍存在大量 Bug（见 Zeroclaw, PicoClaw）。**非 GPT 系模型的工具调用稳定性**是本地部署的最大痛点。

4.  **品牌与架构的“升维”**
    *   TinyClaw 重命名为 TinyAGI，PicoClaw 引入 `SOUL.md`。这预示着项目方认为单纯的“Assistant”定位已不足以支撑未来，正转向**具身智能**或**通用智能体平台**的概念。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-12)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，过去24小时内 Issues 更新达 53 条，PR 更新达 82 条，显示出社区贡献热情高涨。虽然今日无新版本发布，但代码库合并了大量修复与功能增强，主要集中在多渠道适配（Telegram、Matrix、WebUI）、模型兼容性（非视觉模型历史记录处理）以及安全性改进。社区对本地部署、多平台支持（微信/Discord）以及 API 密钥安全性的关注度持续上升，项目正处于功能快速迭代与稳定性修复并行阶段。

---

## 2. 版本发布
**无新版本发布。**
目前主分支代码活跃，多个功能 PR 正在审核中，预计下一版本将包含大量渠道与工具更新。

---

## 3. 项目进展
今日共有 **50 个 PR 被合并/关闭**，32 个 PR 待合并。重点进展如下：

*   **安全性与路径处理增强**：合并了 PR #1845，修复了 Shell 工具中 `restrictToWorkspace` 对 `~` 路径检测的遗漏，提升了工作区隔离安全性。
*   **模型兼容性修复**：合并了 PR #1892，修复了在非视觉模型（如 DeepSeek、Qianfan）下，会话历史中的 `image_url` 导致 API 报错的问题，显著提升了多模型切换体验。
*   **工具能力增强**：合并了 PR #1895，为 `ReadFileTool` 增加了分页读取功能（offset/limit），并优化了文件系统的输出格式，使其更接近 OpenCode 的实现。
*   **CLI 显示修复**：合并了 PR #1891，修复了命令行 `nanobot channels status` 中不显示 Matrix 渠道状态的问题。
*   **多实例支持探索**：虽然 PR #1581（多实例配置支持）已关闭，但相关的配置解耦讨论为后续架构优化提供了方向。

---

## 4. 社区热点
今日讨论最活跃的议题集中在**模型支持**与**安全性**方面：

1.  **[Issue #2](https://github.com/HKUDS/nanobot/issues/2) (👍 6 | 💬 19)**: **Z.AI (智谱 GLM) 原生支持**。
    *   **诉求**：用户强烈希望直接内置智谱 AI 最新 GLM-4.x 系列模型支持，而非通过兼容层。
    *   **分析**：作为国产模型头部厂商，其集成需求极高，社区期待官方原生适配以获得最佳性能。

2.  **[Issue #193](https://github.com/HKUDS/nanobot/issues/193) (💬 13)**: **Ollama API 支持**。
    *   **诉求**：本地部署用户希望像 vLLM 一样获得 Ollama 的直接支持。
    *   **状态**：目前 OPEN，社区贡献者正在评估实现方案。

3.  **[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) (💬 8)**: **API 密钥安全隐患**。
    *   **诉求**：用户指出 Agent 可通过 `exec()` 读取自身配置文件，导致密钥泄露风险。
    *   **分析**：这是一个严重的架构安全问题，用户建议重构运行权限或隔离配置，属于高优先级风险。

4.  **[Issue #1819](https://github.com/HKUDS/nanobot/issues/1819) (💬 5)**: **微信 App 支持**。
    *   **诉求**：国内用户强烈建议增加微信作为交互渠道，认为这是“非常重要”的功能。

---

## 5. Bug 与稳定性
今日报告了若干关键 Bug，主要集中在渠道连接与配置兼容性：

*   **[严重] 安全性缺陷**：[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) 指出 Agent 可能通过代码执行泄露 API Key。目前**尚无修复 PR**，需维护者紧急关注。
*   **[严重] 进程意外退出**：[Issue #1833](https://github.com/HKUDS/nanobot/issues/1833) 报告程序在运行约30分钟后收到 `SIGTERM` 信号退出且无日志，疑似内存溢出或外部中断。
*   **[中等] Matrix 渠道不可用**：[Issue #1300](https://github.com/HKUDS/nanobot/issues/1300) 启动报错。**已修复**：[PR #1891](https://github.com/HKUDS/nanobot/pull/1891) 修复了状态显示，但连接问题可能需进一步排查。
*   **[中等] OpenRouter 兼容性**：[Issue #842](https://github.com/HKUDS/nanobot/issues/842) 和 [Issue #1157](https://github.com/HKUDS/nanobot/issues/1157) 报告升级后 OpenRouter 认证失败及特定模型（StepFun）报 400 错误。相关修复已包含在 [PR #1901](https://github.com/HKUDS/nanobot/pull/1901)（过滤非视觉模型历史）中，待合并。
*   **[中等] WhatsApp 二维码生成失败**：[Issue #1879](https://github.com/HKUDS/nanobot/issues/1879) 无法生成登录二维码。

---

## 6. 功能请求与路线图信号
结合 Issue 与 PR，以下功能极有可能在近期纳入主线：

1.  **Telegram 上下文增强**：[PR #1900](https://github.com/HKUDS/nanobot/pull/1900) 实现了 `reply_to_message` 的读取，响应了 [Issue #1875](https://github.com/HKUDS/nanobot/issues/1875) 的需求，增强了多轮对话语境理解。
2.  **轻量级 Web UI**：[PR #1707](https://github.com/HKUDS/nanobot/pull/1707) 提出了基于 FastAPI + WebSocket 的零依赖 Web UI，占用内存仅 45MB，非常契合轻量化部署需求。
3.  **Mistral 原生支持**：[PR #1680](https://github.com/HKUDS/nanobot/pull/1680) 正在增加 Mistral Provider 及通用转录服务，扩展了非 OpenAI 生态。
4.  **命令输出可控截断**：[Issue #1871](https://github.com/HKUDS/nanobot/issues/1871) 提议增加环境变量控制长输出的截断方式（保留头部或尾部），[PR #1896](https://github.com/HKUDS/nanobot/pull/1896) 已提交实现，等待合并。

---

## 7. 用户反馈摘要
*   **本地部署痛点**：用户 [Claudioappassionato](https://github.com/HKUDS/nanobot/issues/855) 分享了在 RTX 3050 等低配环境下的艰难调试过程，指出小模型（8B/4B）表现不佳，且容易陷入工具循环，急需针对低算力环境的优化指南。
*   **文档本地化需求**：[Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) 显示国内用户对中文文档的需求强烈，认为这有助于降低上手门槛。
*   **稳定性担忧**：多位用户反馈程序在 CLI 模式下会无故退出（[Issue #1833](https://github.com/HKUDS/nanobot/issues/1833)），且错误信息晦涩，影响生产环境使用信心。
*   **渠道扩展渴望**：除了主流平台，用户对飞书 ([Issue #1557](https://github.com/HKUDS/nanobot/issues/1557))、钉钉、QQ ([Issue #91](https://github.com/HKUDS/nanobot/issues/91)) 等办公/社交软件的集成呼声依然很高。

---

## 8. 待处理积压
*   **[高优] 架构安全重构**：[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) 涉及核心安全架构，需官方尽快回应是否计划引入用户权限隔离机制。
*   **[功能] Ollama 原生支持**：[Issue #193](https://github.com/HKUDS/nanobot/issues/193) 讨论度高，建议官方 Review 社区是否已有相关实现提交，以解决本地化部署的一大痛点。
*   **[功能] 语音对话能力**：[Issue #1106](https://github.com/HKUDS/nanobot/issues/1106) 询问语音输入输出支持，这是迈向全能助理的关键一步，目前尚未有明确 Roadmap。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-12)

**分析师**: AI Open Source Analyst
**项目**: [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

Zeroclaw 项目今日展现出极高的社区活跃度与开发推进速度，正处于 **v0.1.7-beta** 版本的快速迭代期。过去 24 小时内，项目发布了 2 个新版本，主要聚焦于 CI/CD 流程重构与分支模型简化。社区反馈热烈，共产生 49 条 Issue 更新和 50 条 PR 更新，其中关闭了 30 个 Issue，解决了一批阻碍部署的关键 Bug。目前待合并 PR 数量达到 35 个，显示出大量新功能（如 Azure OpenAI 支持、UI 改进）正在排队审核，项目生态正在迅速扩张。

## 2. 版本发布

今日连续发布了 **v0.1.7-beta.28** 和 **v0.1.7-beta.30**，主要更新内容如下：

*   **CI/CD 重构**: 全面替换了旧的工作流，引入了简化的 CI/CD 管道 ([PR #2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895))。
*   **分支模型迁移**: 正式从多分支模型迁移至 **单一 master 分支** 模型，并更新了维护者信息 ([PR #2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928))。
    *   **⚠️ 迁移注意**: 所有贡献者需注意，默认开发分支已统一为 `master`，请弃用 `main` 分支以避免合并冲突（详见 [Issue #3061](https://github.com/zeroclaw-labs/zeroclaw/issues/3061)）。

## 3. 项目进展

尽管今日合并/关闭的 PR 数量为 15 条（相对较少），但待合并的 35 条 PR 暗示了下一次更新的重磅内容。今日进展主要集中在稳定性修复与文档规范：

*   **配置解析修复**: 修复了 `wire_api` 配置项的别名解析问题，现在支持 `openai-*` 等多种写法，解决了文档与代码不一致导致的配置失败 ([PR #3191](https://github.com/zeroclaw-labs/zeroclaw/pull/3191))。
*   **文档与分支清理**: 关闭了关于分支策略混淆的 Issue，确认了 `master` 分支的绝对地位，并删除了陈旧的 `main` 分支引用。
*   **依赖更新**: 合并了 Dependabot 的 Docker Buildx-action 更新，优化构建流程。

**整体评估**: 项目正在消化技术债务（CI/CD 重构），并为下一波功能合并做准备。

## 4. 社区热点

今日讨论最热烈的问题集中在**部署兼容性**与**模型支持**上：

1.  **[Bug] GLIBC 版本不兼容 (Issue #3070)**
    *   **热度**: 👍 2 | 评论 9
    *   **分析**: 用户在运行编译好的二进制文件时遇到 `GLIBC_2.39 not found` 错误。这表明最新版本的构建环境（可能基于非常新的 Linux 发行版）导致旧版操作系统（如 Ubuntu 20.04/22.04 或旧版 CentOS）无法运行程序。这是阻碍用户通过二进制文件直接部署的严重问题。
    *   **链接**: [Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)

2.  **[Feature] Azure OpenAI 支持 (Issue #3176 & PR #3007)**
    *   **热度**: 评论 3+
    *   **分析**: 企业级用户对 Azure OpenAI 的需求非常强烈，不仅是 API 调用，还包括认证方式（api-key header vs Bearer token）和部署 URL 的适配。目前已有相关 PR 提交，是社区迫切期待的功能。
    *   **链接**: [Issue #3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176), [PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007)

3.  **[Feature] Agent MCP 支持 (Issue #3153)**
    *   **热度**: 👍 1 | 评论 3
    *   **分析**: 用户发现 `zeroclaw agent` 命令目前无法加载 MCP 配置，仅限于内置工具。这限制了 Agent 模式的扩展性，是高级用户关注的痛点。

## 5. Bug 与稳定性

今日报告的 Bug 主要涉及运行环境、容器化部署及工具调用逻辑：

*   **🔴 S0/S1 - 运行时阻塞**:
    *   **GLIBC 不兼容**: 导致二进制无法在部分 Linux 系统启动 ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))。**状态**: Open，但已有 PR ([PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257)) 试图降低构建基线以修复此问题。
    *   **Docker 构建失败**: Rust 1.94 升级导致容器构建失败 ([Issue #3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207))。**状态**: Closed (建议回退 Rust 版本)。

*   **🟠 S2 - 功能降级**:
    *   **Matrix 频道缺失**: 官方构建版本未包含 `channel-matrix` flag，导致无法连接 Matrix ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953))。
    *   **Ollama Tool Calling 回归**: Qwen 模型在 Ollama 下经常只输出思考过程而不执行工具调用 ([Issue #3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079))。
    *   **Slack 线程丢失**: 适配器不订阅线程内消息事件 ([Issue #3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084))。

*   **🟢 S3 - 配置与 UI**:
    *   **Config 温度参数失效**: CLI 模式下忽略配置文件中的温度设置 ([Issue #3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033))。**状态**: 已有 Fix PR ([PR #3106](https://github.com/zeroclaw-labs/zeroclaw/pull/3106))。

## 6. 功能请求与路线图信号

结合 Issue 与 PR 走势，以下功能极有可能近期合并：

1.  **Azure OpenAI Provider**: 有多个 PR 正在竞争/互补（[PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007), [PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246)），这是目前最高优先级的新特性。
2.  **UI/UX 增强**: Web 端正在引入**多行输入框自动扩展** ([PR #3185](https://github.com/zeroclaw-labs/zeroclaw/pull/3185)) 和**消息复制按钮** ([PR #3178](https://github.com/zeroclaw-labs/zeroclaw/pull/3178))，提升基础交互体验。
3.  **配置安全性**: 社区提交了关于 Channel Secrets 加密存储的修复 PR ([PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255), [PR #3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256))，这可能意味着项目正在加强生产环境下的密钥管理合规性。

## 7. 用户反馈摘要

从评论中提炼出的核心用户画像与痛点：

*   **痛点**: **"配置难，兼容差"**。用户频繁遇到因文档与代码不一致（如分支名、API 配置项写法）导致的部署失败。此外，编译型语言带来的 GLIBC 依赖问题让非 Docker 用户感到困扰。
*   **场景**: 大量用户尝试将 Zeroclaw 作为中间件连接 Ollama/Azure 等不同后端，但在非 OpenAI 官方模型（如 Qwen + Ollama）的 Tool Calling 适配上遇到较多障碍。
*   **满意点**: 社区对项目定位（AI Agent 与个人助手）非常认可，积极贡献周边工具（如 [ByeByeClaw](https://github.com/zeroclaw-labs/zeroclaw/issues/3169) 卸载脚本），说明用户粘性较高。

## 8. 待处理积压

建议维护者优先关注以下积压或高优先级项目：

1.  **[PR #3257] Fix GLIBC Build**: 修复二进制兼容性是降低用户门槛的关键。
2.  **[Issue #3070] GLIBC Error**: 需要确认并在文档中声明支持的最低操作系统版本。
3.  **[PR #3007 / #3246] Azure Support**: 尽快合并其中之一以满足企业用户需求。
4.  **[Issue #2494] Feishu Channel**: 飞书连接问题长期存在，影响国内用户使用。

---
*日报生成时间: 2026-03-12 | 基于 GitHub 数据分析*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，开发迭代速度显著加快。过去24小时内共有 **102 个 PR 更新**（其中 40 个已合并/关闭）和 **22 个 Issue 更新**，显示了社区和核心团队的高效协作。项目发布了 **3 个新版本**（包括稳定版 v0.2.2 和每日构建版），重点优化了 Web 后端配置体验、Agent 核心架构以及消息渠道兼容性。整体来看，项目正处于功能快速集成与 Bug 修复的攻坚阶段，稳定性逐步提升。

## 2. 版本发布
今日发布了 3 个版本，标志着项目进入了 v0.2.2 的新迭代周期：

*   **v0.2.2 (Stable)**
    *   **更新重点**：增强了 Web 设置中的远程执行配置支持 (`exec allow_remote`)；合并了语音转录功能分支，提升了音频处理能力。
    *   **链接**：[v0.2.2 Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)
*   **v0.2.2-nightly.20260312.6612ca09 (Nightly)**
    *   **更新重点**：增加了对 **LongCat** 模型的支持；Matrix 频道现支持富文本消息；修复了直接代理模式下 MCP 初始化的问题。
    *   **链接**：[v0.2.2-nightly Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)

## 3. 项目进展
今日共有 **40 个 PR 被合并或关闭**，项目在多 Agent 架构、UI 交互和底层工具链上取得了实质性进展：

*   **多 Agent 架构 (Team Mode)**：核心 PR #915 已关闭/合并，这标志着 PicoClaw 正式引入了多智能体协作架构。Coordinator Agent 现在可以将复杂任务分解，并发调度多个子 Agent 执行。
    *   链接：[PR #915 Feat/team](https://github.com/sipeed/picoclaw/pull/915)
*   **Web UI 体验修复**：针对昨日用户反馈强烈的 Web 端对话体验问题，维护者迅速响应。PR #1385 修复了“每次打开都显示新对话”的问题，现在会恢复上次的会话状态；PR #1386 修复了 JSON 编辑器无法横向滚动的问题。
    *   链接：[PR #1385](https://github.com/sipeed/picoclaw/pull/1385) | [PR #1386](https://github.com/sipeed/picoclaw/pull/1386)
*   **工具与协议增强**：合并了清理旧版 `TOOLS.md` 引用的 PR #1388，简化了配置逻辑。PR #1355 确保 `TOOLS.md` 在 Agent 引导中被正确加载。
    *   链接：[PR #1388](https://github.com/sipeed/picoclaw/pull/1388)

## 4. 社区热点
今日社区讨论集中在 **Agent 架构重构** 和 **Logo 设计** 上：

1.  **Agent 重构定义 (#1218)**：由核心贡献者 @alexhoshina 发起，提议引入 `SOUL.md`（定义性格与价值观）和 `AGENT.md` 的双文件结构。该提案引发了深度讨论（13条评论），旨在解决当前 Agent 个性单一、难以定制的问题。
    *   链接：[Issue #1218](https://github.com/sipeed/picoclaw/issues/1218)
2.  **Logo 设计征集 (#297)**：项目官方发起的“皮皮虾” Logo 设计大赛已关闭。该帖获得了大量关注（虽然当前状态为 Closed，可能已选定方案或转为内部评审），体现了社区对品牌形象的高度热情。
    *   链接：[Issue #297](https://github.com/sipeed/picoclaw/issues/297)
3.  **事件驱动 Agent 循环 (#1316)**：这是对 Agent 内核的激进重构提案，旨在解决当前 Loop 无法被外部 Hook 或打断的痛点，获得了一致赞同。
    *   链接：[Issue #1316](https://github.com/sipeed/picoclaw/issues/1316)

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在**部署构建**和**Web UI**，部分已有修复方案：

*   **[P0/已修复] Web 会话保持问题**：Web 端每次点击都重置为新对话，严重影响使用。已由 PR #1385 修复。
    *   Issue: [Issue #1373](https://github.com/sipeed/picoclaw/issues/1373)
*   **[P1/已修复] JSON 编辑器横向滚动**：长行 JSON 在编辑器中被截断且无法滑动。已由 PR #1386 修复。
    *   Issue: [Issue #1369](https://github.com/sipeed/picoclaw/issues/1369)
*   **[P1/待处理] Windows 源码启动失败**：Windows 环境下 `go mod tidy` 报包引用错误，阻断了 Windows 用户的源码开发路径。
    *   Issue: [Issue #1348](https://github.com/sipeed/picoclaw/issues/1348)
*   **[P1/待处理] Docker Manifest 缺失**：通过 Docker Compose 部署 Launcher 时报错 `manifest not available`。
    *   Issue: [Issue #1350](https://github.com/sipeed/picoclaw/issues/1350)

## 6. 功能请求与路线图信号
结合今日的 Issues 和活跃 PR，以下功能极有可能在近期纳入主线：

*   **Telegram 实时流式响应 (#1098)**：用户强烈要求支持 Telegram 新推出的流式输出功能，这对于 AI 助手的交互体验至关重要。
    *   链接：[Issue #1098](https://github.com/sipeed/picoclaw/issues/1098)
*   **Zalo 渠道支持 (#1351)**：PR #1351 正在积极开发中，增加了对 Zalo 渠道的支持，表明项目正在积极拓展非英语市场的接入能力。
    *   链接：[PR #1351](https://github.com/sipeed/picoclaw/pull/1351)
*   **GitHub Copilot 集成 (#1347)**：请求实现 GitHub Device Code 认证，以便安全地接入 GitHub Copilot 模型。这是目前 Provider 领域最热门的请求之一。
    *   链接：[Issue #1347](https://github.com/sipeed/picoclaw/issues/1347)

## 7. 用户反馈摘要
从今日的 Issues 和评论中可以提炼出以下用户画像与痛点：

*   **Web 端用户**：对 UI 细节极其敏感（如 JSON 编辑器的滚动、会话的保持），期望 Web 端能达到生产级的管理体验。
*   **开发者/部署者**：在使用 Docker 部署和 Windows 本地开发时遇到了阻碍，说明项目在跨平台兼容性和 CI/CD 的产物交付上还有优化空间。
*   **Agent 定制者**：高级用户不再满足于简单的 Prompt 定制，而是渴望更深层次的架构控制（如 `SOUL.md`、事件钩子），这表明 PicoClaw 正在吸引更专业的 AI 应用开发者。

## 8. 待处理积压
以下重要 Issue 长期未彻底解决或需要持续关注：

*   **[Bug] Groq API 兼容性问题 (#748)**：Groq API 的 Tool Call 格式不兼容问题导致 Agent 调用失败，影响使用 Groq 作为后端的用户。
    *   链接：[Issue #748](https://github.com/sipeed/picoclaw/issues/748)
*   **[Enhancement] 持久化记忆后端 (#175)**：用户提议将基于文件的内存升级为数据库支持（如 Engram），以支持更长期的记忆检索。这是一个架构级的增强请求。
    *   链接：[Issue #175](https://github.com/sipeed/picoclaw/issues/175)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 **NanoClaw** 项目 2026-03-12 的动态日报。

---

# NanoClaw 项目日报 (2026-03-12)

## 1. 今日速览
NanoClaw 今日继续保持高活跃度，**PR 更新量达 39 条**，显示出核心开发团队与社区正在密集推进多项核心功能。今日重心明显向 **“降本增效”** 倾斜，社区贡献者 `@gm4leejun-stack` 发起了一套完整的 Token 优化方案，旨在通过内联压缩和自适应控制降低 LLM 使用成本。同时，**多渠道集成（QQ、Discord）与底层架构增强（多实例支持、OAuth 修复）** 也是当前的焦点。虽然无新版本发布，但大量 PR 处于待合并状态，预示着下一个版本将包含重大功能更新。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无 PR 合并记录，但有多项关键 PR 进入活跃状态，正在为项目带来显著推进：

*   **架构增强 - 多实例支持**: PR [#970](https://github.com/qwibitai/nanoclaw/pull/970) 提出了通过环境变量 `NANOCLAW_INSTANCE` 实现同机多实例共存的能力，解决了资源隔离和命名空间冲突问题。
*   **核心修复 - OAuth 自动刷新**: 针对 Token 过期导致服务中断的问题，PR [#930](https://github.com/qwibitai/nanoclaw/pull/930) 和优化版 PR [#969](https://github.com/qwibitai/nanoclaw/pull/969) 引入了自动刷新机制，修复了 401 鉴权错误。
*   **生态扩展 - QQ 机器人**: PR [#966](https://github.com/qwibitai/nanoclaw/pull/966) 新增了 QQ Bot 频道支持，补全了国内主流 IM 平台的接入能力。
*   **长期稳定性 - Session 轮转**: PR [#987](https://github.com/qwibitai/nanoclaw/pull/987) 解决了长时运行导致 Session 日志过大（>55MB）从而丢失上下文的问题，引入了日志轮转机制。

## 4. 社区热点
今日讨论焦点集中在 **成本控制** 与 **系统健壮性**：

*   **Token 优化方案系列 (Issues #983, #984, #985, #986)**: 用户 `@gm4leejun-stack` 提交了一套详尽的优化方案。
    *   **#983 [Tracking Issue]**: [Token Optimization: Smart Token Cost Reduction](https://github.com/qwibitai/nanoclaw/issues/983)
    *   **诉求**: 社区强烈关注 LLM 调用成本，特别是对话历史无限增长和 System Prompt 膨胀带来的隐形消费。该方案提议“零额外 Token 消耗”的内联压缩，获得了高度关注。
*   **安全架构质疑 (Issue #865)**: [Using containers alone doesn't make you more secure](https://github.com/qwibitai/nanoclaw/issues/865)
    *   **诉求**: 安全研究者指出当前架构过度信任容器内部环境，建议将脚本移出 Agent 层，引发了关于安全边界的深入讨论。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的关键 Bug，部分已有修复方案：

*   **[P0] Agent 无响应**: Issue [#958](https://github.com/qwibitai/nanoclaw/issues/958) 报告用户完成 Setup 后 Agent 无法回复。目前原因不明，需重点关注。
*   **[P1] WhatsApp 消息洪泛 (已有 Fix)**: Issue [#732](https://github.com/qwibitai/nanoclaw/issues/732) 指出流式输出导致发送大量碎片消息。PR [#965](https://github.com/qwibitai/nanoclaw/pull/965) 已提交修复，改为缓冲后单次发送。
*   **[P1] MCP 环境变量丢失**: Issue [#960](https://github.com/qwibitai/nanoclaw/issues/960) 指出凭据代理迁移后，第三方 MCP 服务器无法读取 `.env` 变量，导致集成失效。
*   **[P2] Setup 耗时过长**: Issue [#973](https://github.com/qwibitai/nanoclaw/issues/973) 抱怨设置流程极慢，质疑配置架构过于复杂。

## 6. 功能请求与路线图信号
*   **Token 成本控制 (高概率纳入)**: 基于 #983 系列 Issue 的完整设计，项目极可能在下个版本引入对话历史压缩和 Output 长度控制。
*   **多模态能力**: PR [#974](https://github.com/qwibitai/nanoclaw/pull/974) 为 Discord 增加了图片视觉和语音转文字功能，信号显示项目正从纯文本向多模态交互演进。
*   **替代运行时**: PR [#963](https://github.com/qwibitai/nanoclaw/pull/963) 提出支持 OpenAI Codex SDK 作为可选引擎，表明项目有意解除与 Anthropic SDK 的强绑定。

## 7. 用户反馈摘要
*   **痛点 - 部署体验**: 用户反馈 Setup 流程不仅慢，而且依赖复杂的 JSON 配置，新手体验不友好 (#973)。
*   **痛点 - 调试困难**: 多个 Issue (如 #958) 显示当 Agent 沉默时，用户缺乏有效的日志排查手段。
*   **正面反馈**: 尽管有上述问题，社区对 Podman 支持 (#957) 和 LanceDB 记忆功能 (#979) 表现出浓厚兴趣，认可 NanoClaw 在可扩展性上的设计。

## 8. 待处理积压
*   **长期未解 Issue**: Issue [#732](https://github.com/qwibitai/nanoclaw/issues/732) (消息洪泛) 自 3月5日 举报至今，虽有 PR #965 修复，但尚未合并，建议 Maintainer 优先 Review 以恢复通讯频道的正常使用。
*   **安全审计**: Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 提出的架构安全隐患涉及面较广，建议在路线图中明确重构计划。

---
*分析师注：NanoClaw 目前处于功能快速迭代期，社区贡献活跃，但核心稳定性（如 OAuth、MCP 变量注入）近期出现波动，建议优先合并 #969 和 #965 以稳固基础体验。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-03-12)

## 1. 今日速览
IronClaw 项目今日展现出极高的开发活跃度与迭代速度。随着 **v0.18.0** 版本的发布，项目合并了大量 PR，但也随之暴露了显著的质量问题，导致 Issues 激增（37 条新开）。虽然核心功能如 Discord Gateway 和 CLI 增强正在积极推进，但目前的焦点集中在修复新版本引入的严重稳定性问题，特别是 **WASM 工具兼容性** 和 **Telegram/Google 集成的深层次 Bug**。整体来看，项目处于“快速迭代伴随阵痛”的阶段，建议用户在升级前关注关键修复。

---

## 2. 版本发布
- **版本号**: v0.18.0
- **发布日期**: 2026-03-11
- **更新摘要**:
  - 这是一个包含大量累积更新的版本，主要通过 Staging 分支合并至 Main。
  - **关键变更**: 合并了 Webhook 认证向 HMAC-SHA256 签名机制的迁移，提升了安全性。
  - **破坏性变更/风险**:
    - 根据 Issue #840，新版本的 Onboarding 流程安装的默认 WASM 工具（如 github, web-search）与宿主 WIT 版本不兼容（需 0.3.0，但工具为 0.2.0），导致工具加载失败。
    - Registry 中的 WASM 制品 URL 曾存在 404 错误（需通过 PR #1007 修复）。
  - **迁移注意**: 建议用户在运行 `ironclaw onboard` 前检查网络环境，并关注后续补丁版本，若遇工具加载失败可尝试手动清理旧版工具缓存。

---

## 3. 项目进展
今日共有 **26 个 PR 被合并/关闭**，主要集中在安全性增强、稳定性修复及 CI 流程优化，但也包含部分功能迭代：

- **安全性增强**:
  - **PR #513**: 将 Webhook 认证迁移至 HMAC-SHA256，消除了 JSON Body 传输密钥的隐患。
  - **PR #522**: 修复了多线程环境下的 `env::set_var` 不安全调用，防止运行时竞争。
  - **PR #516**: 收紧了沙箱策略，现在需要显式开启 `SANDBOX_ALLOW_FULL_ACCESS` 才能绕过 Docker。

- **功能演进**:
  - **PR #758**: 将 GitHub Webhook 规范化逻辑下沉至工具层，提升了扩展性。
  - **PR #834**: 引入 `cargo-deny` 进行供应链安全检查，强化了依赖管理。

- **修复与维护**:
  - **PR #679 / #987**: 修复了 Setup Wizard 重复运行时会重置模型选择的问题。
  - **PR #514**: 为 Web Gateway 添加了 CSP 头以防御 XSS 攻击。

---

## 4. 社区热点
今日社区讨论主要集中在用户对核心功能的阻碍性体验上：

1.  **[Issue #142](https://github.com/nearai/ironclaw/issues/142) [CLOSED]**: "Why do I need to fork... NEAR AI auth thing?"
    - **热度**: 👍 1, 评论 9
    - **分析**: 用户强烈质疑为何必须进行 NEAR AI 认证。这反映了部分开发者对“去中心化/强制性身份验证”的抵触情绪，社区似乎倾向于更开放的本地化部署方案。

2.  **[Issue #733](https://github.com/nearai/ironclaw/issues/733) [CLOSED]**: "Bug: ngrok process becomes zombie..."
    - **热度**: 评论 5
    - **分析**: Ngrok 隧道进程僵死导致连接中断。这直接影响了远程访问功能的可用性，显示项目在子进程管理方面的健壮性仍需加强。

3.  **[Issue #840](https://github.com/nearai/ironclaw/issues/840) [OPEN]**: "onboard installs stale default WASM tool..."
    - **热度**: 评论 4
    - **分析**: 新用户上手即遇阻，Onboarding 安装的 WASM 工具因版本过旧无法运行。这是目前 v0.18.0 最紧急的“开箱即用”问题。

---

## 5. Bug 与稳定性
今日 Bug 报告激增，且多集中在 v0.18.0 发布后的兼容性与集成问题。以下按严重程度排列：

### 🔴 严重 - 阻碍核心流程
1.  **[Issue #840](https://github.com/nearai/ironclaw/issues/840)**: Onboard 安装的 WASM 工具与宿主 WIT 版本不匹配，导致工具无法加载。**(尚无 Fix PR)**
2.  **[Issue #875](https://github.com/nearai/ironclaw/issues/875)**: `ironclaw onboard` 依赖安装失败。**(尚无 Fix PR)**
3.  **[Issue #738](https://github.com/nearai/ironclaw/issues/738)**: Managed Tunnel 绑定错误端口 (3000 vs 8080)，导致所有 Webhook 失效。**(尚无 Fix PR)**
4.  **[Issue #994](https://github.com/nearai/ironclaw/issues/994)**: Routine 广播至 Telegram 时使用错误的 chat_id，导致通知静默失败。

### 🟠 中等 - 影响体验与特定功能
1.  **[Issue #993](https://github.com/nearai/ironclaw/issues/993)**: Google Sheets 工具在写入时 LLM 错误地将 values 序列化为 JSON 字符串而非数组。
2.  **[Issue #733](https://github.com/nearai/ironclaw/issues/733)**: Ngrok 进程僵死。
3.  **[Issue #890](https://github.com/nearai/ironclaw/issues/890)**: Stdio MCP Transport 跳过初始化握手，违反协议规范。

### ✅ 已有修复方案
- **Registry 404 修复**: [PR #1007](https://github.com/nearai/ironclaw/pull/1007) 已提交，修复了 Registry 制品 URL 错误及 Checksum 缺失问题。

---

## 6. 功能请求与路线图信号
1.  **第三方卸载工具**: [Issue #919](https://github.com/nearai/ironclaw/issues/919) 提到了社区工具 `ByeByeClaw`，表明用户有彻底清理环境的需求。
2.  **更灵活的认证**: 结合 Issue #142 的反馈，未来版本可能会考虑降低强制性认证的门槛或提供本地脱机模式。
3.  **MCP Server 配置**: [Issue #299](https://github.com/nearai/ironclaw/issues/299) 用户希望能通过 UI 直接编辑 `mcpServers` JSON 配置，这可能被纳入后续 Web Gateway 的改进中。

---

## 7. 用户反馈摘要
- **痛点**:
  - **上手难度大**: 新版 Onboarding 存在严重的工具版本兼容问题 (#840, #875)。
  - **远程连接不稳定**: Ngrok 僵尸进程和端口绑定错误让远程调试变得困难 (#733, #738)。
  - **集成缺陷**: Telegram 和 Google Sheets 的集成细节处理粗糙，存在静默失败或参数错误 (#993, #994)。
  - **UI 易用性**: "Error: Waiting for approval" 的提示语让用户误以为系统出错 (#997)。

- **满意点**:
  - 社区响应迅速，针对安全漏洞的修复（如 HMAC 迁移）非常及时。

---

## 8. 待处理积压
以下重要 Issue 尚未得到官方明确回复或 Fix PR，建议维护者优先关注：

1.  **[Issue #840](https://github.com/nearai/ironclaw/issues/840)**: **WASM 工具版本不匹配** - 影响所有新用户，属于 P0 级阻断性问题。
2.  **[Issue #738](https://github.com/nearai/ironclaw/issues/738)**: **Webhook 端口绑定错误** - 导致外部集成（Slack等）完全不可用。
3.  **[Issue #299](https://github.com/nearai/ironclaw/issues/299)**: **MCP 配置灵活性** - 长期未解决的配置体验问题，阻碍了高级用户接入自定义工具。

---
*本报告基于 2026-03-12 GitHub 数据生成*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-12)

你好，我是开源项目分析师。以下是基于 GitHub 数据生成的 LobsterAI 项目日报。

## 1. 今日速览
LobsterAI 今日保持**高度活跃**状态，社区互动频繁，开发迭代速度极快。项目刚刚发布了 **v0.2.3** 版本，主要修复了 Mac 端环境问题并增强了多平台接入能力。过去 24 小时内新增了 10 条 Issue 和多个功能 PR，显示出用户群体在快速扩大。然而，频繁的更新也带来了配置丢失的负面反馈，部分核心 Bug（如字符串处理和 Bash 执行性能）仍亟待解决。总体而言，项目处于功能快速扩展期，但需注意稳定性维护。

---

## 2. 版本发布
**最新版本：v0.2.3**
- **发布时间**：2026-03-11
- **更新重点**：
    - **多平台支持增强**：合并了 QQ、钉钉、企微（WeCom）对 openclaw 的支持实现 (PR #381, #378, #383)。
    - **体验改进**：主界面附件支持多文件选择 (PR #371)。
    - **关键修复**：修复了 Mac 端 Node 环境污染问题 (PR #375)，这可能导致之前 Mac 用户无法正常启动或运行卡顿。
- **升级建议**：Mac 用户强烈建议升级此版本以解决环境问题。但请注意，根据 Issue #382 反馈，升级可能需要重新填写设置，请提前做好配置备份。

---

## 3. 项目进展
今日共有 **7 个 PR 被合并**，主要集中在生态集成和连接稳定性上：
- **IM 平台集成推进**：开发者 [@liugang519] 密集提交了针对钉钉、QQ、企微机器人的支持 PR，标志着 LobsterAI 正在快速打通主流即时通讯工具，向 "Message as Interface" 的方向演进。
- **连接稳定性优化**：合并了 [@mjnhmd] 关于“防止 IM 平台超时”的修复 PR (PR #372, #373)。引入了异步消息处理和进度更新机制，这对于解决长时间任务导致 IM 接口超时的问题至关重要。
- **待合并功能**：
    - PR #376：计划任务增加“每小时”模式。
    - PR #380：Markdown 链接支持自定义 URI 协议（如 `obsidian://`）。

---

## 4. 社区热点
今日社区讨论最热烈的问题集中在**功能缺失与部署灵活性**上：
1.  **Issue #344 [OPEN]**：**字符串自动加空格 Bug**。
    - **热度**：评论 5 条，虽然点赞数为 0，但情绪强烈（"急！！"）。
    - **分析**：这是阻碍用户从竞品迁移的关键阻碍，属于核心体验的阻断性 Bug。
2.  **Issue #386 [OPEN]**：**支持 Docker 部署**。
    - **分析**：0 评论但受关注，用户希望脱离桌面端限制，寻求服务化部署方案。
3.  **Issue #384 [OPEN]**：**更新 Claude Agent SDK 以支持 Agent Teams**。
    - **分析**：技术型用户希望利用最新的多智能体协作能力，反映了用户对高级功能的渴求。

---

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及**性能、记忆和升级体验**，按严重程度排序如下：

| 严重等级 | Issue | 描述 | 状态/进展 |
| :--- | :--- | :--- | :--- |
| **Critical** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | **中文+数字自动加空格**：导致输出格式错误，影响代码/数据准确性。 | [OPEN] 暂无 Fix PR |
| **High** | [#382](https://github.com/netease-youdao/LobsterAI/issues/382) | **更新后设置丢失**：频繁更新导致配置重置，严重影响持续使用意愿。 | [OPEN] 用户体验痛点 |
| **High** | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | **Bash 执行极慢**：简单命令执行需数分钟，相比原生终端差距巨大。 | [OPEN] 性能瓶颈 |
| **Medium** | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | **图片读取卡死**：视觉功能不稳定。 | [OPEN] |
| **Medium** | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | **记忆能力差**：长期记忆功能弱于竞品。 | [OPEN] 长期未解决 |

---

## 6. 功能请求与路线图信号
结合 Issue 和 PR，社区对以下方向有明确诉求，部分已由贡献者实现：
- **1. 文件管理增强**：
    - 请求：Issue #379 希望点击文件图标能“打开所在路径”。
    - 进展：PR #371 已合并“多文件选择”，文件管理功能正在完善中。
- **2. 深度集成能力 (URI & Env)**：
    - 请求：Issue #377 请求支持环境变量配置；Issue #379/PR #380 涉及外部应用唤起。
    - 进展：PR #380 (自定义 URI) 已提交，大概率在下个版本合并，这将使 LobsterAI 成为工作流中心。
- **3. 部署多样化**：
    - 信号：Issue #273 (Linux) 和 Issue #386 (Docker) 表明用户不再满足于单一桌面端，服务化/容器化是强烈的需求信号。

---

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下真实声音：
- **迁移阻力**：核心 Bug（如 #344）导致用户无法信任 AI 输出，阻碍了从 OpenClaw 等工具的迁移。
- **体验痛点**：**“频繁更新导致配置重置”**（#382）是今日最突出的槽点，用户对反复填写 API Key 感到疲惫。
- **性能焦虑**：Bash 执行慢（#350）让用户感觉像是在用“阉割版”终端，极大地降低了工作效率。
- **期待**：用户对 **Agent Teams**（#384）和 **Docker 部署**（#386）抱有期待，希望项目不仅是个玩具，而是强大的生产力平台。

---

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或官方回应，建议维护者优先关注：
- **Issue #186 (记忆能力差)**：创建于 2 月底，至今未修复。记忆能力是 AI Agent 的核心竞争力，若长期缺失将导致用户流失。
- **Issue #350 (Bash 执行慢)**：严重影响开发者体验，需排查是环境问题还是 I/O 阻塞。
- **Issue #344 (格式化 Bug)**：阻断性 Bug，需立即排期修复。

---
*分析师结语：LobsterAI 正处于功能爆发期，IM 集成进展顺利。但“快速迭代”与“稳定性/配置持久化”之间的矛盾正在显现。建议团队在推进新功能（如 Agent Teams）前，优先解决配置持久化和核心格式化 Bug，以留住从其他平台迁移过来的用户。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-12)

**分析师摘要**：TinyClaw 今日处于极高强度的开发与迭代状态，标志着项目从单一工具向模块化生态（TinyAGI）演进的关键转折点。

---

### 1. 今日速览
今日 TinyClaw 项目展现出极高的活跃度与架构演进速度。随着 **v0.0.10** 的发布，项目进行了一次重大重构，将单体仓库拆分为 NPM Workspaces Monorepo 架构，并引入了新的 Avian AI 提供商。社区方面，随着 Web 端 **TinyOffice** 功能的完善，用户反馈主要集中在 UI 交互优化与模型提供商的扩展上。值得注意的是，项目中存在一个待合并的 **品牌重塑 PR (#191)**，预示着 "TinyClaw" 可能即将更名为 "TinyAGI"，这表明项目愿景正在从单纯的 Agent 工具扩展至更广泛的 AGI 基础设施。

### 2. 版本发布
- **版本号**: v0.0.10
- **更新性质**: 优化与维护性更新
- **主要变更**:
    - **界面优化**: 移除了 tmux 会话中独立的日志窗格，简化了界面。
    - **稳定性**: 增加了 Telegram 轮询看门狗的超时时间（从 2 分钟延长至 5 分钟），减少了误报或超时错误。
    - **代码质量**: 简化了 `heartbeat-cron.sh` 中的主目录检测逻辑，并将 Task/TaskStatus 类型进行了本地化迁移。
- **升级建议**: 建议所有使用 Telegram 接口或在 tmux 环境下长期运行的用户升级，以获得更稳定的监控体验。

### 3. 项目进展
今日共有 6 个 PR 被合并，推进了显著的功能迭代：
- **架构重构 (重头戏)**: [PR #186](https://github.com/TinyAGI/tinyclaw/pull/186) 完成了从单一代码库到 **npm workspaces monorepo** 的迁移。此举将代码解耦为 `core`, `teams`, `channels`, `server`, `visualizer` 五个包，并用轻量级的 SQLite 替代了 Redis/BullMQ 队列，大幅降低了部署依赖。
- **团队协作增强**: [PR #190](https://github.com/TinyAGI/tinyclaw/pull/190) 修复了团队通信逻辑，确保代理始终通过团队编排层进行交互，并实现了团队响应的实时流式传输。
- **交互体验升级**: [PR #182](https://github.com/TinyAGI/tinyclaw/pull/182) 增加了看板任务的自动触发功能（拖拽即运行）；[PR #183](https://github.com/TinyAGI/tinyclaw/pull/183) 精简了 UI 事件系统；[PR #185](https://github.com/TinyAGI/tinyclaw/pull/185) 将 CLI 交互迁移至 `@clack/prompts`，显著提升了终端交互体验。
- **生态扩展**: [PR #143](https://github.com/TinyAGI/tinyclaw/pull/143) 新增了对 **Avian AI** 提供商的支持。

### 4. 社区热点
今日讨论最活跃的领域集中在 **功能完整性** 与 **多模型支持**：
- **[Issue #66] 任务控制与追踪** (链接: [TinyAGI/tinyclaw Issue #66](https://github.com/TinyAGI/tinyclaw/issues/66)): 用户 @iamvince 发起了关于构建类似 "Mission Control" 的可观测性界面的讨论，希望能实现 Agent 调用链的可视化追踪。这反映了高级用户对 Agent 内部决策过程透明度的强烈需求。
- **[Issue #111] 本地模型支持** (链接: [TinyAGI/tinyclaw Issue #111](https://github.com/TinyAGI/tinyclaw/issues/111)): 这是一个长期存在的需求，用户强烈希望能集成 Ollama 或支持自定义 API Key，以便利用本地算力或更廉价的模型。

### 5. Bug 与稳定性
今日未报告严重的崩溃或阻塞性 Bug，大部分已关闭的 Issue 均为功能请求或已修复的问题：
- **已修复**: [Issue #91 Agent 不响应消息](https://github.com/TinyAGI/tinyclaw/issues/91) 已得到处理。
- **代码清理**: [Issue #63 关于 queue-processor 的 interval 清理](https://github.com/TinyAGI/tinyclaw/issues/63) 已被关闭，暗示相关逻辑可能已在重构中被优化。
- **风险提示**: 目前项目处于架构重构期（Monorepo + SQLite），旧版用户的升级可能面临潜在的迁移兼容性问题，需关注后续文档更新。

### 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中可以捕捉到明确的路线图信号：
- **品牌重塑**: [PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) 提议将项目重命名为 **TinyAGI**。虽然尚未合并，但结合架构拆分（Core/Visualizer/Teams），这预示着项目正在为构建一个更通用的 AGI 开发平台做准备。
- **TinyOffice 全栈化**: [Issue #194](https://github.com/TinyAGI/tinyclaw/issues/194) 和 [Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193) 提出了在 Web 端增加运行时控制面板和首次配置向导的需求。这表明项目正致力于降低 CLI 依赖，向 "Web-First" 的用户体验转型。
- **模型中立化**: 社区持续要求支持 GLM 4.7 ([Issue #103](https://github.com/TinyAGI/tinyclaw/issues/103)) 和更多 OpenAI 兼容端点，这推动项目向 "模型无关" 架构发展。

### 7. 用户反馈摘要
- **痛点**: 用户在使用 WhatsApp 等渠道时，曾遇到 Agent "正在输入" 后无响应的情况，对实时反馈的稳定性有较高要求。此外，CLI 配置对新手仍有一定门槛。
- **满意点**: 拖拽即运行的任务流 ([PR #182](https://github.com/TinyAGI/tinyclaw/pull/182)) 获得了积极反响，被认为是提升工作效率的关键更新。
- **场景**: 用户不仅在将其用作个人助理，还在尝试构建多 Agent 协作团队，并对团队间的通信链路稳定性提出了更高要求。

### 8. 待处理积压
- **[PR #191] 品牌重塑 (Open)**: 该 PR 涉及全代码库的重命名，是一个高风险、高影响的变更，建议维护者尽快审核或明确迁移时间表，以免阻碍后续开发。
- **[Issue #87] Zellij 支持**: 关于支持 Zellij 终端多路复用器的请求尚未解决，这可能影响到部分高级用户的终端体验。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project daily report for 2026-03-12.

---

# Moltis 项目动态日报 (2026-03-12)

## 1. 今日速览
Moltis 项目今日呈现**极高的维护活跃度**与**稳健的质量控制**态势。过去 24 小时内，项目核心贡献者 (@penso) 展开了密集的修复与优化工作，一口气提交了 **20 个 PR**（其中 19 个待合并），并成功关闭了 **23 个 Issues**。这波更新主要集中在修复 Docker 环境下的初始化痛点、提升 Web UI 的引导体验以及增强本地 LLM 的兼容性。尽管没有发布新的版本号，但主分支的代码质量显然正在进行一次大规模的“加固”升级，为下一次发布做准备。

## 2. 版本发布
*   **无新版本发布**。
    *   注：虽然今日无 Release，但考虑到大量 Pending PR 即将合并，预计近期会有包含大量修复的 Minor 版本更新。

## 3. 项目进展
今日共有 **5 个 PR 被合并**，**23 个 Issue 被关闭**，主要集中在提升安装成功率和修复运行时错误：

*   **本地模型支持增强**：合并了 [PR #397](https://github.com/moltis-org/moltis/pull/397)，修复了 MLX 流式输出中特殊字符（如 `<|im_end|>`）未过滤的问题，显著提升了 Apple Silicon 设备上的本地模型体验。
*   **Discord 集成修复**：合并了 [PR #399](https://github.com/moltis-org/moltis/pull/399)，修正了 Discord 频道自动压缩错误指向主会话的 Bug。
*   **Docker 部署修复**：随着 [Issue #346](https://github.com/moltis-org/moltis/issues/346) (无法从 Docker 添加节点) 和 [Issue #129](https://github.com/moltis-org/moltis/issues/129) (Docker 登录失败) 的关闭，表明 Docker 部署的稳定性已得到根本性解决。

## 4. 社区热点
社区今日最关注的问题集中在**部署配置**与**协议扩展**：

1.  **[Issue #181] [Bug]: Crons and heartbeat can't be setup and activate!**
    *   **热度**：8 条评论
    *   **分析**：这是影响定时任务和节点心跳的关键 Bug。虽然 Issue 显示为 Closed，但高评论量反映出用户对自动化任务稳定性的强烈需求。
    *   **链接**：[moltis-org/moltis Issue #181](https://github.com/moltis-org/moltis/issues/181)

2.  **[Issue #391] RFC: Node-Advertised Tools**
    *   **热度**：2 条评论（新提案）
    *   **分析**：这是一个关于扩展节点协议的技术提案，旨在让 Agent 在调度远程节点时不仅能执行 shell 命令，还能发现并调用节点声明的特定工具。这标志着 Moltis 正向更复杂的分布式 Agent 架构演进。
    *   **链接**：[moltis-org/moltis Issue #391](https://github.com/moltis-org/moltis/issues/391)

3.  **[Issue #414] z.ai 网络错误**
    *   **热度**：2 条评论
    *   **分析**：第三方 AI 服务集成问题，反映出用户对开箱即用体验的依赖。
    *   **链接**：[moltis-org/moltis Issue #414](https://github.com/moltis-org/moltis/issues/414)

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，但核心维护者响应极快，大部分已有对应修复方案：

*   **🔴 严重**:
    *   **Docker-in-Docker 挂载错误** ([Issue #102](https://github.com/moltis-org/moltis/issues/102)): 沙箱路径映射错误导致工作区为空。已关闭，修复已纳入主分支。
    *   **Soul 配置不持久化** ([Issue #348](https://github.com/moltis-org/moltis/issues/348)): Web UI 修改 Agent 人格后无法保存。已关闭。

*   **🟠 中等**:
    *   **Embeddings URL 双重 /v1** ([Issue #106](https://github.com/moltis-org/moltis/issues/106)): 导致 OpenRouter 等 Provider 404 错误。已通过配置逻辑修复关闭。
    *   **macOS 本地节点配对失败** ([Issue #366](https://github.com/moltis-org/moltis/issues/366)): 生成的 WebSocket 端点错误返回 HTML。已关闭。

*   **🟢 已修复**:
    *   **编译错误** ([Issue #314](https://github.com/moltis-org/moltis/issues/314)): 修正了子目录和扩展名问题。
    *   **Telegram 语音双重输出** ([Issue #173](https://github.com/moltis-org/moltis/issues/173)): 修复了语音消息处理逻辑。

## 6. 功能请求与路线图信号
今日的 PR 动向揭示了项目下一阶段的重点：**安全隔离**与**用户体验**。

*   **🚀 重点新功能 (开发中)**:
    *   **安全远程 MCP 集成** ([PR #416](https://github.com/moltis-org/moltis/pull/416)): 支持在 URL 和 Header 中注入密钥，并自动隐藏敏感信息。这将极大地增强工具链的安全性。
    *   **Agent 可写 Sidecar 文件** ([PR #413](https://github.com/moltis-org/moltis/pull/413)): 引入 `skills.enable_agent_sidecar_files` 开关，允许 Agent 在受控环境下管理技能文件，增加了自主性。
    *   **Vulkan GPU 支持** ([PR #408](https://github.com/moltis-org/moltis/pull/408)): 为 GGUF 模型添加 Vulkan 后端支持，这将利好 AMD 显卡用户及 Linux 环境下的本地推理。

*   **用户高频需求**:
    *   **Webhook 支持** ([Issue #272](https://github.com/moltis-org/moltis/issues/272)): 用户急需与外部系统集成的能力。
    *   **更多聊天渠道**: Whatsapp ([Issue #111](https://github.com/moltis-org/moltis/issues/111)) 和 Discord ([Issue #221](https://github.com/moltis-org/moltis/issues/221)) 支持的呼声依然很高。

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置复杂度高**：尤其是 Docker 环境下的 Provider 配置、Embedding URL 拼接以及密钥管理，让不少新手用户受挫（如 Issues #102, #106, #129）。
    *   **UI 反馈缺失**：在 `vault is sealed` 状态下 UX 不够友好 ([Issue #344](https://github.com/moltis-org/moltis/issues/344))，用户不知道下一步该做什么。
*   **满意点**:
    *   社区对 **Telegram Bot** 的功能反馈较好，尽管偶发语音 Bug，但作为交互入口被认为非常实用。
    *   对 **本地模型支持** 的持续优化（如 MLX, GGUF, Vulkan）深受技术型用户欢迎。

## 8. 待处理积压
*   **⚠️ 需关注**:
    *   **[Issue #261] Github Copilot provider errors**: 持续未解决，影响开发者群体使用 Copilot 作为后端。
        *   链接: [moltis-org/moltis Issue #261](https://github.com/moltis-org/moltis/issues/261)
    *   **[PR #406] Improve onboarding password autofill**: 目前处于 Open 状态，建议尽快合并以优化首次使用体验。
        *   链接: [moltis-org/moltis PR #406](https://github.com/moltis-org/moltis/pull/406)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-12)

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**状态，社区互动频繁。过去24小时内共有 **50 条 Issues 更新**（其中 16 条已关闭）和 **50 条 PR 更新**（其中 24 条已合并/关闭），显示维护团队响应迅速。虽然**无新版本发布**，但代码库主要聚焦于 v0.0.6.post1 版本后的 Bug 修复与功能增强。核心关注点集中在**多渠道集成**（飞书、钉钉、企业微信、QQ）的稳定性，以及**上下文压缩**功能引发的若干回归问题。

## 2. 版本发布
*   **无新版本发布**。
    *   当前主要稳定版仍为 v0.0.6 / v0.0.6.post1。
    *   大量修复 PR 已合并，预计将在未来版本中发布。

## 3. 项目进展
今日共有 24 个 PR 被合并，显著提升了项目的稳定性与功能性：

*   **渠道增强**:
    *   **企业微信支持**: 合并了 PR #1267，新增企业微信智能机器人长链接模式，完善了办公场景下的即时通讯覆盖。
    *   **钉钉优化**: PR #1135 处于 Open 状态但受关注，旨在支持媒体预览和 ACK 消息，改善钉钉用户体验。
*   **核心修复**:
    *   **Windows 兼容性**: 合并 PR #1260，修复了 `execute_shell_command` 在 Windows 环境下的 Bug，解决了可能导致会话卡死的问题。
    *   **异步性能**: 合并 PR #1236，使 Session 读写操作异步化，有助于提升高并发下的响应速度。
*   **UI/UX 改进**:
    *   合并 PR #1140（聊天模型选择）、#1121（工作区拖拽）、#1112（工具全选/全关功能），前端交互体验持续优化。

## 4. 社区热点
今日讨论最热烈的问题集中在**配置**与**渠道消息处理**：

1.  **[Issue #863] copaw app 终端报错** (评论: 9)
    *   **链接**: [agentscope-ai/CoPaw Issue #863](https://github.com/agentscope-ai/CoPaw/issues/863)
    *   **分析**: 用户反馈启动时出现 `websockets.legacy` 的 DeprecationWarning。虽然已关闭，但显示出用户对运行环境的整洁度较为敏感，建议后续版本升级依赖库。
2.  **[Issue #1292] 硅基流动添加模型连接失败** (评论: 5)
    *   **链接**: [agentscope-ai/CoPaw Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)
    *   **分析**: 用户在 v0.0.6 版本中集成第三方模型平台（硅基流动）时遭遇连接测试失败。这反映了用户对**自定义模型接入**的强需求，以及对兼容性问题的困扰。
3.  **[Issue #1100] & [Issue #1243] 飞书渠道消息重复与压缩失效** (评论: 5 & 4)
    *   **链接**: [Issue #1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | [Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)
    *   **分析**: 飞书用户报告了严重的消息重复问题，且 `/compact` 指令失效（摘要生成但不清理消息）。这表明 v0.0.6 在飞书渠道的适配层可能存在逻辑回归。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序：

*   **P0 - 核心功能失效/阻塞**:
    *   **Windows Shell 执行卡死** [Issue #1136]: 调用 `execute_shell_command` 导致整个智能体卡死。**(已有 Fix PR #1260 合并)**
    *   **消息压缩导致 API 崩溃** [Issue #1222]: 压缩后消息数量不匹配，引发智谱 GLM 等 API 报错 (错误码 1210)。
*   **P1 - 渠道功能异常**:
    *   **飞书重复回复** [Issue #1100]: 机器人重复回复历史问题。
    *   **飞书/钉钉上下文膨胀** [Issue #1288]: 长期对话导致 Token 消耗过大，且无法手动重置会话。
*   **P2 - 配置与 UI 问题**:
    *   **UI 模型选择异常** [Issue #1280]: 模型选择弹层鼠标移过即消失，无法操作。
    *   **Cline API 连接失败** [Issue #1287]: 无法解析特定 API 返回值。

## 6. 功能请求与路线图信号
用户对以下功能表现出强烈需求，部分已在开发中：

*   **飞书官方插件支持** [Issue #1297]: 用户希望集成 `openclaw-lark` 以支持读写云文档、日历。
    *   *状态*: Open，社区渴望度较高。
*   **用户白名单** [Issue #411]: 请求在 Channel 配置中增加 `allowed_users` 以实现权限控制。
    *   *状态*: Closed (可能已纳入规划或通过其他方式解决)，属于企业级部署刚需。
*   **内置 Skills 增强** [Issue #995]: 呼吁改进 `file_reader`, `xlsx` 等基础工具的解析能力。
    *   *状态*: Open，直接影响用户留存率。
*   **插件/钩子机制** [Issue #1283]: 开发者希望在调用模型前增加预处理钩子（如处理本地图片路径）。
    *   *状态*: Open，反映出高级用户对扩展性的需求。

## 7. 用户反馈摘要
*   **安装体验**: macOS 用户反馈安装脚本存在 `info: command not found` 错误 ([Issue #1291])，虽然手动可修，但阻碍了"一键安装"的流畅度。
*   **多模态痛点**: 多位用户提及图片处理报错（如 Kimi 模型不支持图片输入导致崩溃），反映出 CoPaw 在处理多模态输入时的容错机制尚待加强。
*   **Token 焦虑**: 用户对长对话导致的 Token 消耗非常敏感，频繁提及 `/compact` 失效和上下文过大问题 ([Issue #1277], [Issue #1243])。

## 8. 待处理积压
以下重要 Issue 或 PR 尚未得到解决或合并，建议维护者关注：

*   **PR #419**: `feat(provider): wire_api + custom headers`。该 PR 已开启数日，涉及 API 核心底层改造，对提升兼容性至关重要。
*   **PR #1290**: `feat(napcat): implement QQ bot channel`。QQ 渠道是高频需求，建议评审后尽快合并以扩大用户群。
*   **Issue #995**: `built-in skills improvement`。文件解析能力的提升是基础体验的关键，需排期优化。

---
*数据来源: GitHub CoPaw Repo Snapshot (2026-03-12)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
ZeptoClaw 今日迎来了极高强度的维护与更新，项目处于**非常活跃**状态。过去 24 小时内，项目连续发布了 **v0.7.5** 和 **v0.7.6** 两个版本，主要集中在加固系统安全性和提升 CLI 交互体验。维护者 @qhkm 关闭了 **12 个 Issues** 并合并了 **13 个 PRs**，高效解决了包括文件系统边界检查、Webhook 认证强化及 Telegram 用户名弃用等多项关键安全问题。整体来看，项目正在经历一次深度的安全重构与用户体验优化，代码质量与响应速度均表现出色。

## 2. 版本发布

### **v0.7.6** (最新版)
**更新重点**：安全加固与 CLI 增强
*   **CLI 交互**：新增交互模式下的斜杠命令自动补全功能。
*   **安全修复**：修复了入站认证和文件系统边界的安全隐患。
*   **体验优化**：修复了 Claude 订阅令牌警告在启动时重复打印 3 次的问题。
*   **详细变更**：
    *   [feat: slash command suggestions in CLI interactive mode](https://github.com/qhkm/zeptoclaw/pull/323) by @qhkm
    *   [fix: deduplicate Claude subscription token warning](https://github.com/qhkm/zeptoclaw/pull/320) by @qhkm

### **v0.7.5**
**更新重点**：功能清理与模型兼容性
*   **命令增强**：CLI 增加 `config reset` 和 `zeptoclaw uninstall` 命令。
*   **模型支持**：引入模型提供商兼容性验证。
*   **详细变更**：
    *   [feat(cli): add config reset command](https://github.com/qhkm/zeptoclaw/pull/306)
    *   [feat: model-provider compatibility validation](https://github.com/qhkm/zeptoclaw/pull/311)

## 3. 项目进展

今日项目取得了显著进展，主要体现在**安全防御体系**的构建和**依赖管理**上。

*   **核心安全加固**：
    核心贡献者 @qhkm 合并了大型安全 PR #324，旨在强化入站 Webhook 认证和文件系统边界。为了支撑这一变更，今日共关闭了 **6 个相关的安全增强 Issues**（#318, #319, #321, #327, #329, #330），涵盖了从 Webhook 签名验证到防止 TOCTOU 竞争条件攻击的各个方面。这表明项目正在从“功能可用”向“企业级安全”迈进。
    *   相关 PR: [fix: harden inbound auth and filesystem boundaries](https://github.com/qhkm/zeptoclaw/pull/324)

*   **生态兼容性扩展**：
    合并了 PR #316，正式支持 Ollama 云模型的无密钥认证。这解决了本地部署或私有云场景下必须配置哑密钥的痛点，降低了集成门槛。
    *   相关 PR: [feat: Ollama cloud model support (keyless auth)](https://github.com/qhkm/zeptoclaw/pull/316)

*   **依赖维护**：
    Dependabot 今日十分活跃，成功合并了 **9 个依赖更新 PR**，涉及 `jsonwebtoken` (升级至 v10.3.0)、`anyhow`、`rustls` 以及 GitHub Actions 等。这确保了底层依赖的安全性和时效性。

## 4. 社区热点

今日社区关注点集中在**配置安全**与**特定渠道支持**上。

*   **Telegram 安全性争议 (Issue #321)**：
    这是今日讨论较深的话题之一。项目决定**分阶段弃用基于用户名的 Telegram 白名单**，转而强制使用数字 ID，以防止因用户名更改导致的身份漂移风险。虽然这是一个破坏性变更，但社区（包括维护者）一致认为安全性优先于便利性。
    *   链接: [Issue #321](https://github.com/qhkm/zeptoclaw/issues/321)

*   **Ollama 云端支持 (Issue #284)**：
    用户 @rexzhang360 提出的 Ollama 云端模型支持需求今日得到响应并关闭。这反映了用户希望 ZeptoClaw 能更灵活地适配非标准 OpenAI 接口的自托管/托管模型服务。
    *   链接: [Issue #284](https://github.com/qhkm/zeptoclaw/issues/284)

## 5. Bug 与稳定性

今日报告的问题主要以**安全性改进**为主，功能性 Bug 较少，且修复速度极快。

*   **P1-Critical (严重)**：
    *   **文件系统与认证边界**: 多个 Issue (#318, #319) 指出写入路径的 TOCTOU 漏洞和 Webhook 认证不足。**状态**: 已通过 PR #324 修复并在 v0.7.6 中发布。
*   **P2-High (中等)**：
    *   **配置清理**: Issue #327 指出通道设置中未能正确清除陈旧的认证字段。**状态**: 已在今日修复。
    *   **WhatsApp 签名**: Issue #317 报告 WhatsApp Cloud Webhook 缺少 HMAC-SHA256 校验。**状态**: 已在今日修复。

目前看来，**所有今日报告的关键 Bug 均已在同日完成修复**，显示出维护者极强的把控能力。

## 6. 功能请求与路线图信号

*   **审计追踪 (Issue #221 - Open)**：
    用户请求构建基于 Merkle 树哈希链的审计日志，用于记录工具调用和 Shell 执行，以防止篡改。鉴于今日 v0.7.x 版本对安全的侧重，该功能极有可能被纳入未来的短期路线图（可能是 v0.8.0），作为"可验证安全"特性的一部分。
    *   链接: [Issue #221](https://github.com/qhkm/zeptoclaw/issues/221)

*   **CLI 体验升级**：
    v0.7.6 引入的斜杠命令自动补全 (PR #323) 响应了用户对 CLI 交互模式的期待，预示着项目将更加注重作为独立工具的易用性。

## 7. 用户反馈摘要

*   **痛点：身份验证机制的脆弱性**
    Issues (#321, #325) 的讨论揭示了用户对基于用户名/邮箱头的信任机制表示担忧。用户倾向于更严格的 ID 校验，即使牺牲一定的配置便利性。
*   **场景：混合云模型部署**
    Issue #284 表明部分用户正在尝试将 ZeptoClaw 连接到 Ollama 的云端实例或 vLLM，而非仅仅是本地 localhost，需要更灵活的认证配置（支持无密钥）。

## 8. 待处理积压

目前项目的响应速度极快，积压较少。唯一的 Open 状态功能性请求是 **Issue #221**。考虑到今日大量安全相关的修复已落地，建议维护者关注该 Issue，利用当前的势头推进更深层次的“可信计算”功能。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-12)

**分析师注**：本项目今日处于**高活跃度维护状态**。尽管代码合并量为零，但新版本发布与社区反馈的同步爆发表明项目正处于快速迭代期。以下是详细分析。

---

### 1. 今日速览
EasyClaw 今日正式发布了 **v1.6.6** 版本，主要针对 macOS 平台的安装体验进行了优化。社区侧活跃度显著提升，新增 1 条关于 OpenAI OAuth 认证的关键 Bug 反馈，另有 1 条针对 macOS 图标显示的 PR 正在待合并状态。整体来看，项目在修复 UI 细节的同时，正面临第三方 API 变更带来的认证兼容性挑战。

### 2. 版本发布
*   **[Release] v1.6.6** - [查看详情](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6)
    *   **更新重点**：本版本主要聚焦于 **macOS 兼容性修复**。
    *   **核心变更**：解决了 macOS Gatekeeper 安全机制拦截未签名应用导致提示“已损坏”的问题。Release Notes 提供了详细的终端命令行解决方案，降低了非技术用户的上手门槛。
    *   **破坏性变更/迁移注意**：无需迁移数据，但若 macOS 用户下载后无法打开，需按照说明在终端执行 `xattr` 命令解除隔离属性。

### 3. 项目进展
*   **[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) `fix: app icon in macos dock and system tray`**
    *   **状态**：待合并 - 更新于今日
    *   **进展分析**：由贡献者 @mylinkedai 提交，旨在修复 macOS 环境下程序坞和系统托盘图标显示异常的问题。虽然今日尚未合并，但鉴于昨日刚发布 v1.6.6 处理 macOS 安装问题，此 PR 若合并，将进一步完善 macOS 用户的体验闭环，预计将在下个小版本中交付。

### 4. 社区热点
*   **[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16) `OpenAI Oauth好像有问题`** 🔥
    *   **热度数据**：新建于昨日，已有 1 条评论。
    *   **诉求分析**：用户报告在使用 OpenAI OAuth 功能时遇到阻塞性问题。这反映了用户对**第三方账号一键登录**功能的强依赖。目前该问题尚未被标记为 Bug 或得到官方回复，需警惕这可能是一个影响新用户转化的普遍性问题。

### 5. Bug 与稳定性
*   **🔴 严重 - OpenAI OAuth 认证失败**
    *   **链接**：[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)
    *   **描述**：用户在使用 OpenAI 授权登录时，无论是便携版还是安装版均报错（见附图错误弹窗）。这属于核心链路阻断问题。
    *   **状态**：**尚无修复 PR**，等待维护者复现与确认。

### 6. 功能请求与路线图信号
*   **信号捕捉**：虽然今日无显式的新功能请求，但 PR #15 的存在暗示了项目在 **跨平台 UI 一致性** 方面仍有优化空间。结合 v1.6.6 的发布，可以看出近期路线图的重心在于**打磨 macOS 端的桌面集成体验**（从安装到图标显示）。

### 7. 用户反馈摘要
*   **痛点**：macOS 用户在安装初期极易遭遇“文件已损坏”的系统级拦截，这在非签名应用中非常常见，v1.6.6 的说明有效缓解了此焦虑。
*   **场景**：用户倾向于使用 OAuth（如 OpenAI 账号）快速登录，而非手动配置 API Key，表明产品需确保第三方登录服务的极高可用性。
*   **情绪**：目前反馈较为直接，主要集中在功能性阻断（登录报错），情绪偏向急迫等待解决。

### 8. 待处理积压
*   **需紧急响应**：[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16) (OpenAI OAuth 报错)。鉴于这是一个阻塞性功能，建议维护者 @gaoyangz77 优先确认是否为 API 变更或 Token 配置问题。
*   **需代码审查**：[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) (macOS 图标修复)。该 PR 已更新，建议尽快合并以修复视觉层面的不一致性。

</details>