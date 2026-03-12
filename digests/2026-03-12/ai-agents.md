# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 15:28 UTC

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

> **数据来源**: OpenClaw GitHub Repository
> **分析师**: AI Open Source Analyst
> **报告周期**: 过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日处于**极高活跃度**状态，社区交互频繁（Issues 与 PR 更新均达到 500 条上限）。项目组发布了 **v2026.3.11** 正式版与 Beta 版，重点修复了一个影响严重的安全漏洞（跨站 WebSocket 劫持）。功能开发方面，核心贡献者 `@akoscz` 提交了多项关于**密钥管理系统**的重磅 PR，引入了对 HashiCorp Vault、AWS、Azure 等企业级密钥存储的支持，标志着项目正向更安全、更企业级的架构演进。虽然社区对国际化（i18n）和视觉能力的呼声很高，但稳定性问题（特别是 macOS Gateway 和 Cron 任务）仍是当前用户反馈的焦点。

## 2. 版本发布

### 🔐 [v2026.3.11](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11) & [v2026.3.11-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11-beta.1)

本次更新主要聚焦于安全性修复：

-   **安全性更新**:
    -   **修复跨站 WebSocket 劫持漏洞 (GHSA-5wcw-8...)**: 在 `trusted-proxy` 模式下，网关强制对所有浏览器发起的连接进行 Origin 校验。此前，该模式下的校验缺失可能导致未受信任的源获得 `operator.admin` 访问权限。
-   **建议**: 所有启用了 `trusted-proxy` 模式并在公网或不可信网络环境中部署的用户**必须立即升级**。

---

## 3. 项目进展

今日共有 **136** 个 PR 被合并/关闭。以下是具有代表性的重要进展：

-   **密钥管理架构重构 (Secrets Management)**: 核心贡献者 `@akoscz` 提交了一系列 "Size: XL" 的 PR，彻底重构了 OpenClaw 的敏感信息处理方式。
    -   [PR #43645](https://github.com/openclaw/openclaw/pull/43645): 新增 **HashiCorp Vault KV v2** 支持。
    -   [PR #43641](https://github.com/openclaw/openclaw/pull/43641): 新增 **Keyring (OS native)** 和 **1Password** 支持。
    -   [PR #43643](https://github.com/openclaw/openclaw/pull/43643) / [PR #43644](https://github.com/openclaw/openclaw/pull/43644): 分别增加 **AWS Secrets Manager** 和 **Azure Key Vault** 支持。
    -   [PR #43646](https://github.com/openclaw/openclaw/pull/43646): 引入密钥轮换提醒和自动轮换机制。
    -   **分析师点评**: 这组 PR 极大地提升了 OpenClaw 在企业级部署中的安全性与合规性，解决了硬编码 API Key 的风险。

-   **Matrix 协议重构**:
    -   [PR #40946](https://github.com/openclaw/openclaw/pull/40946): 移除旧的 SDK，改用官方 `matrix-js-sdk` 重构了 Matrix 集成，为未来的 Matrix 高级功能铺平道路。

-   **备份与恢复功能**:
    -   [PR #44111](https://github.com/openclaw/openclaw/pull/44111): 引入加密快照备份流程 (`backup setup/run/status/list/restore`)，解决了用户长期以来的灾备痛点。

---

## 4. 社区热点

今日社区讨论主要集中在功能请求与平台集成上：

1.  **国际化支持 (i18n)** - [Issue #3460](https://github.com/openclaw/openclaw/issues/3460)
    -   **热度**: 👍 2 | 💬 97 评论
    -   **诉求**: 全球用户强烈希望支持多语言。官方回应目前带宽不足，暂不支持，但欢迎社区 PR。
    -   **信号**: 这是典型的“高需求低优先级”任务，适合外部贡献者介入。

2.  **钉钉集成优化** - [Issue #26534](https://github.com/openclaw/openclaw/issues/26534)
    -   **热度**: 👍 19 | 💬 60 评论
    -   **诉求**: 用户希望在首次安装向导中直接选择“钉钉”作为通道，而非手动配置。
    -   **进展**: 钉钉通道已实现，但 UI 引导缺失。

3.  **视觉能力** - [Issue #28744](https://github.com/openclaw/openclaw/issues/28744)
    -   **热度**: 💬 14 评论
    -   **诉求**: 用户希望 Agent 能接收并识别图片（如飞书图片），利用模型的视觉能力。
    -   **现状**: 目前平台层未传递图片数据给模型。

---

## 5. Bug 与稳定性

今日报告了多个影响体验的回归问题，主要集中在 **macOS 客户端** 和 **会话管理**：

| 严重程度 | 问题 | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| 🔴 **高** | [Issue #43858](https://github.com/openclaw/openclaw/issues/43858) | **Edit 工具导致文件丢失**: 文件编辑工具在替换文本时静默将文件清空为 0 字节，报告成功但实际数据丢失。 | Open |
| 🔴 **高** | [Issue #6156](https://github.com/openclaw/openclaw/issues/6156) | **macOS Gateway 启动失败**: Setup Wizard 卡在 "Retry"，Gateway 无法就绪。 | Open (已有 [PR #44161](https://github.com/openclaw/openclaw/pull/44161) 尝试修复) |
| 🟠 **中** | [Issue #42883](https://github.com/openclaw/openclaw/issues/42883) | **Cron 任务失效**: 升级到 v2026.3.8 后，定时任务停止运行。 | Open |
| 🟠 **中** | [Issue #32828](https://github.com/openclaw/openclaw/issues/32828) | **误报 API 限流**: 即使 API 正常，OpenClaw 仍显示 "API rate limit reached"。 | Closed |
| 🟠 **中** | [Issue #40396](https://github.com/openclaw/openclaw/issues/40396) | **升级后死循环**: 升级到 v2026.3.7 后，Agent 在 WhatsApp 上陷入无限思考循环。 | Open |
| 🟠 **中** | [Issue #36822](https://github.com/openclaw/openclaw/issues/36822) | **macOS 重启超时**: 配置变更触发的重启导致 Gateway 进入降级状态。 | Closed |

**分析师点评**: `Edit` 工具的文件清空问题极其危险，建议用户在修复前避免让 Agent 直接编辑关键文件。macOS 客户端的稳定性仍需重点打磨。

---

## 6. 功能请求与路线图信号

根据用户反馈与 PR 动向，推测以下功能可能进入近期路线图：

1.  **多模态视觉支持**: 结合 Issue #28744 和近期 AI 模型的发展，视觉能力的缺失已成为明显的短板，预计社区会加大这方面的投入。
2.  **OpenCode Go 订阅集成**: [Issue #27009](https://github.com/openclaw/openclaw/issues/27009) 提到集成 OpenCode 的新订阅计划，这属于模型供应商的快速接入需求。
3.  **实时语音通话**: [Issue #7200](https://github.com/openclaw/openclaw/issues/7200) 请求支持 Twilio/WebRTC 实时语音流，虽然技术复杂度高，但属于差异化竞争的关键功能。

---

## 7. 用户反馈摘要

-   **痛点**:
    -   **稳定性焦虑**: 大量关于 "Upgrade -> Break" 的反馈，特别是 macOS 客户端和 Cron 任务，用户对升级持谨慎态度。
    -   **配置门槛**: 钉钉等国产软件的接入不够开箱即用，需要手动配置文件。
    -   **上下文管理**: 用户抱怨会话上下文无限累积导致超出模型限制 ([Issue #13938](https://github.com/openclaw/openclaw/issues/13938))，且内存压缩机制失效 ([Issue #14143](https://github.com/openclaw/openclaw/issues/14143))。
-   **满意点**:
    -   **社区响应**: 用户在 Issue 中反馈 Bug 后，往往能得到详细的排查建议。
    -   **生态扩展**: 对引入 HashiCorp Vault 等企业级功能表示高度认可。

---

## 8. 待处理积压

以下重要 Issue 长期未被解决或未收到官方明确回应，建议维护者关注：

1.  [Issue #75](https://github.com/openclaw/openclaw/issues/75) - **Linux/Windows 客户端缺失** (👍 60): 虽然有 Web 端，但原生桌面端的需求依然巨大。
2.  [Issue #13938](https://github.com/openclaw/openclaw/issues/13938) - **会话上下文无限累积**: 这是一个会导致服务不可用的结构性问题，目前似乎没有完美的自动清理机制。
3.  [Issue #25145](https://github.com/openclaw/openclaw/issues/25145) - **消息发送审批门禁**: 防止 Agent 滥发邮件或消息的安全控制功能，对于生产环境至关重要。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-12)

**分析师**: AI Open Source Analyst  
**报告日期**: 2026-03-12

---

## 1. 生态全景

2026年3月的开源 AI 智能体生态呈现出**功能整合深化**与**企业级安全觉醒**的双重特征。
随着 LLM 能力的同质化，竞争焦点已从单纯的对话能力转向**多模态交互**（视觉/语音）、**持久化记忆**以及**安全可控的 Tool Use**。
生态内部分化明显：以 OpenClaw 为首的成熟项目正在构建 Vault 集成、RBAC 等企业级护城河，而新兴项目（如 NanoBot, PicoClaw）则在 WebUI、多渠道接入（IM 集成）和轻量化部署上寻求差异化突破。
此外，**MCP (Model Context Protocol)** 协议正在成为连接外部工具的事实标准，社区对降低部署门槛和 Token 成本的呼声达到了新高。

---

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues 活跃度 | 今日 PR 活跃度 | 版本发布情况 | 健康/成熟度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥🔥🔥🔥🔥 (极高) | 🔥🔥🔥🔥🔥 (136 merged) | **v2026.3.11** (安全修复) | **成熟期**。社区带宽瓶颈显现，核心功能稳定，重点转向安全架构重构。 |
| **PicoClaw** | 🔥🔥🔥🔥 (高) | 🔥🔥🔥🔥 (121 PRs, 47 merged) | **v0.2.2-nightly** | **快速成长期**。架构重构中，多渠道安全性增强，社区贡献活跃。 |
| **NanoBot** | 🔥🔥🔥🔥 (高) | 🔥🔥🔥🔥 (80 PRs) | 无 | **扩张期**。WebUI 补齐短板，功能迭代极快，但文档滞后问题突出。 |
| **CoPaw** | 🔥🔥🔥🔥 (高) | 🔥🔥🔥🔥 (23 merged) | **v0.0.7** (安全增强) | **关键转折期**。引入安全沙箱机制，正在从工具向多工作区平台演进。 |
| **Zeroclaw** | 🔥🔥🔥 (中高) | 🔥🔥🔥 (50 updates) | **v0.1.7-beta.30** | **震荡期**。CI/CD 重构导致环境兼容性问题，待处理积压较多。 |
| **NanoClaw** | 🔥🔥🔥 (中高) | 🔥🔥🔥 (30 PRs) | 无 | **优化期**。专注 Token 成本控制与生产部署支持。 |
| **IronClaw** | 🔥🔥🔥 (中高) | 🔥🔥🔥 (27 merged) | **v0.18.0** | **工程化阶段**。高强度代码审查，飞书与搜索引擎集成是亮点。 |
| **TinyClaw** | 🔥🔥 (中) | 🔥🔥 (6 PRs) | **v0.0.11** | **孵化期**。解决安装阻塞性问题，Web 端控制台正在萌芽。 |
| **Moltis** | 🔥🔥 (中) | 🔥🔥 (26 updates, 7 merged) | 无 | **修复期**。高频修复 Docker 和本地模型问题，维护者极其活跃。 |
| **LobsterAI** | 🔥 (低中) | 🔥 (12 updates) | **v0.2.3** | **稳定维护期**。性能优化显著，但升级体验和配置持久化存在痛点。 |
| **ZeptoClaw** | 🔥 (低) | 🔥 (4 updates) | **v0.7.6** | **精品维护期**。关注安全加固与 CLI 体验，社区规模小但质量高。 |
| **EasyClaw** | 🔥 (低) | 🔥 (1 PR) | **v1.6.7** | **起步期**。集中解决 macOS 签名与认证问题。 |

---

## 3. OpenClaw 在生态中的定位

**定位：企业级 AI 智能体平台的 "Linux Kernel"**

*   **核心优势**：
    *   **架构深度**：相比于其他项目还在解决基本连接问题，OpenClaw 已经通过 `@akoscz` 的系列 PR 实现了对 **HashiCorp Vault, AWS, Azure** 等企业级密钥管理的原生支持，确立了其在安全合规领域的统治力。
    *   **生态规模**：单日 136 个 PR 的合并量远超其他项目，拥有最庞大的贡献者基数和插件生态。
*   **技术路线差异**：
    *   **稳重为先**：在视觉能力等前沿功能上相对保守（社区呼声高但官方优先级低），优先解决 WebSocket 劫持等安全漏洞。
    *   **全栈解决方案**：不同于 PicoClaw/TinyClaw 的轻量化路线，OpenClaw 倾向于提供包含 Gateway、Cron、Backup 在内的全套重型设施。
*   **劣势与挑战**：
    *   **响应迟滞**：Issues 达到 500 条上限，核心维护者带宽不足，导致 macOS 客户端稳定性等长尾问题长期得不到解决。
    *   **配置复杂度**：相比 NanoBot 等竞品，上手门槛依然较高。

---

## 4. 共同关注的技术方向

1.  **安全性与权限控制**
    *   **涉及项目**: OpenClaw, CoPaw, ZeptoClaw, NanoClaw.
    *   **诉求**: 社区不再满足于"能用"，开始强烈抵制硬编码 API Key 和随意执行 Shell 命令。
    *   **趋势**: CoPaw 引入了 `/approve` 审批流；OpenClaw 接入 Vault；NanoClaw 甚至在讨论 Agent 级别的脚本不可信问题。**"零信任" 正在进入智能体架构。**

2.  **多模态交互**
    *   **涉及项目**: PicoClaw, IronClaw, NanoBot, Zeroclaw.
    *   **诉求**: 仅支持文本已无法满足需求。
    *   **趋势**: 
        *   **视觉**: 飞书/钉钉图片识别 是刚需。
        *   **语音**: WhatsApp/Telegram 语音转录 正在成为标配功能。

3.  **国内办公生态集成**
    *   **涉及项目**: IronClaw, Zeroclaw, NanoBot, CoPaw.
    *   **诉求**: 钉钉、飞书、企业微信 是中国市场的水电煤。
    *   **趋势**: IronClaw 和 Zeroclaw 正在完善飞书/企微的 WebSocket 原生支持，NanoBot 也在通过 PR 修补钉钉文件支持。

4.  **Token 成本与上下文管理**
    *   **涉及项目**: NanoClaw, OpenClaw, PicoClaw.
    *   **诉求**: 无限累积的上下文导致 API 费用爆炸或模型崩溃。
    *   **趋势**: NanoClaw 提出 "Inline Compaction" (无需额外 LLM 调用的压缩)，OpenClaw 用户抱怨内存压缩失效。**如何低成本地管理长期记忆**是共同的攻坚战。

---

## 5. 差异化定位分析

*   **OpenClaw (传统豪强)**: 
    *   **侧重**: 安全性、企业级集成、稳定性。
    *   **目标**: 需要私有化部署且对安全有严格要求的企业团队。
*   **NanoBot / PicoClaw (敏捷挑战者)**:
    *   **侧重**: **IM 连接器**。这两个项目不仅是 Agent，更像是 "LLM to IM" 的万能适配器。
    *   **目标**: 个人开发者和极客，希望快速将 AI 接入微信/飞书/钉钉。
*   **CoPaw (安全新秀)**:
    *   **侧重**: **本地工具链安全**。凭借 v0.0.7 的工具护卫 功能，切中了本地部署怕删库的痛点。
    *   **目标**: 在本地电脑上运行 AI 辅助编程或运维的谨慎型用户。
*   **NanoClaw (成本杀手)**:
    *   **侧重**: **生产环境部署成本**。Docker Compose 支持和 Token 优化引擎是其杀手锏。
    *   **目标**: 云端大规模部署、对 API 成本敏感的创业团队。
*   **IronClaw (技术探索者)**:
    *   **侧重**: **底层架构与协议**。关注 WASM、搜索索引和 MCP 协议深度集成。
    *   **目标**: 需要深度定制底层 Agent 逻辑的高级开发者。

---

## 6. 社区热度与成熟度

*   **第一梯队 (成熟/稳定)**: **OpenClaw, IronClaw**。
    *   特征：拥有明确的版本发布周期，Issue 讨论往往涉及架构设计而非基础用法，CI/CD 流程严格（IronClaw 自动生成 Security Issue）。
*   **第二梯队 (快速扩张/野蛮生长)**: **NanoBot, PicoClaw, Zeroclaw, CoPaw**。
    *   特征：PR/Issue 数量激增，功能日新月异，但伴随大量 Bug（如 Zeroclaw 的 GLIBC 问题，CoPaw 的升级故障）。这是"能用"到"好用"之间的阵痛期。
*   **第三梯队 (垂直/孵化)**: **NanoClaw, TinyClaw, LobsterAI, Moltis**。
    *   特征：专注于特定领域（如 NanoClaw 的成本优化，TinyClaw 的 Web 控制台），或者处于早期修 Bug 阶段，核心依赖单一维护者或小团队驱动。

---

## 7. 值得关注的趋势信号

1.  **MCP (Model Context Protocol) 正在统一工具层**
    *   **信号**: PicoClaw, IronClaw, Moltis 均在最近版本中增强或修复了 MCP 相关功能。
    *   **价值**: 开发者应优先考虑兼容 MCP 协议，这将使你的 Agent 能够无缝接入这一新兴生态，复用标准化的工具链（如 Chrome 浏览器控制、文件系统访问等）。

2.  **WebUI 成为必选项，CLI 退居二线**
    *   **信号**: NanoBot 的 WebUI PR (#1922) 获得极高关注；TinyClaw 致力于构建 TinyOffice；CoPaw 修复前端 Bug。
    *   **价值**: 纯 CLI 工具的时代正在过去，用户需要一个可视化的仪表盘来管理 Agents、查看 Logs 和配置 Skills。没有好 Web UI 的项目将流失大量小白用户。

3.  **部署体验决定生死**
    *   **信号**: Zeroclaw 因 GLIBC 问题导致用户流失；EasyClaw 连续两版修复 macOS 签名；CoPaw 升级脚本导致版本不同步。
    *   **价值**: 在同类竞品众多的当下，**"一键安装/Docker run"** 的稳定性比新功能更重要。对于个人助手类项目，跨平台（特别是 macOS/Windows 的 GUI 支持）是硬指标。

4.  **智能体架构向 "SOUL" 分离演进**
    *   **信号**: PicoClaw 提出 `SOUL.md` (性格) 与 `AGENT.md` (能力) 分离的设计。
    *   **价值**: 这预示着 Agent 的开发模式正从硬编码逻辑转向配置化驱动。通过解耦“人格”与“工具”，Agent 将具备更强的可移植性和个性化潜力，值得架构师参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-12)

这里是 **NanoBot** (github.com/HKUDS/nanobot) 的开源项目分析师为您生成的 2026年3月12日 项目动态日报。

---

### 1. 今日速览
NanoBot 今日保持了极高的社区活跃度，**Issues 更新量达到 49 条，PR 更新量高达 80 条**，显示出项目正处于快速迭代与功能扩展期。虽然没有发布新版本，但社区贡献了大量高质量的 Feature PR，涵盖了 **WebUI 界面、钉钉文件支持、Skills 开关控制** 等关键功能。社区对 **Web 搜索引擎的可扩展性** 以及 **飞书/微信等国内渠道的适配** 表现出强烈关注。整体来看，项目生态正在迅速丰富，但核心代码的合并速度和 Bug 修复响应面临一定压力。

### 2. 版本发布
*   **无新版本发布**：过去 24 小时内无官方 Release。目前社区仍在等待 Pypi 最新版本的同步 (#1059)。

### 3. 项目进展
今日虽然没有合并大量 PR，但提交的 PR 质量较高，主要集中在功能增强和生态完善：
*   **Web 管理面板**：开发者 @Good0007 发布了 `[nanobot-webui]`，这是一个自托管的 Web 管理面板，支持实时聊天和配置管理，极大降低了使用门槛。([Issue #1922](https://github.com/HKUDS/nanobot/issues/1922))
*   **钉钉渠道增强**：PR #1925 提交了对钉钉文件、图片和富文本消息的接收支持，修复了此前收到文件报错的问题。([PR #1925](https://github.com/HKUDS/nanobot/pull/1925))
*   **Skills 管理优化**：针对用户无法灵活禁用技能的痛点，PR #1934 引入了 `enabled: false` 配置项，允许在不删除文件的情况下禁用技能。([PR #1934](https://github.com/HKUDS/nanobot/pull/1934))
*   **子代理工作流隔离**：PR #1935 为 `spawn` 工具添加了 `working_dir` 参数，允许子代理在特定项目目录下工作，更好地隔离上下文。([PR #1935](https://github.com/HKUDS/nanobot/pull/1935))

### 4. 社区热点
今日讨论最热烈的话题集中在渠道配置、多模态支持及安全性上：
1.  **飞书配置受阻**：#176 讨论了飞书 Bot 配置后无法启动频道的问题，显示该渠道的文档或默认配置仍存在障碍。([Issue #176](https://github.com/HKUDS/nanobot/issues/176))
2.  **文档语言争议**：#1617 关于“为何没有中文文档”的讨论引发了较高关注（+1 👍），反映了中文用户群体对本地化文档的迫切需求。([Issue #1617](https://github.com/HKUDS/nanobot/issues/1617))
3.  **Web 搜索后端扩展**：#1719 获得了 10 个点赞，用户强烈希望能解耦 Brave 搜索，支持 SearXNG、Tavily 等更多后端。([Issue #1719](https://github.com/HKUDS/nanobot/issues/1717))
4.  **安全性隐患**：#1873 指出 Agent 可能通过 `exec()` 访问并泄露 `config.json` 中的密钥，建议在架构层面进行权限隔离。([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873))

### 5. Bug 与稳定性
今日报告的 Bug 主要涉及渠道连接和模型兼容性：
*   **严重 [安全]**：Agent 具备读取自身配置文件密钥的风险。([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)) - *暂无 Fix PR*
*   **高 [渠道]**：Matrix 频道无法启动。([Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)) - *暂无 Fix PR*
*   **中 [模型]**：使用 OpenRouter 调用 StepFun 模型报 400 错误。([Issue #1157](https://github.com/HKUDS/nanobot/issues/1157)) - *暂无 Fix PR*
*   **中 [UI/CLI]**：命令行调用子代理返回信息显示乱码。([Issue #1904](https://github.com/HKUDS/nanobot/issues/1904)) - *已有 Fix PR ([PR #1930](https://github.com/HKUDS/nanobot/pull/1930))*

### 6. 功能请求与路线图信号
*   **自定义 API 与代理**：用户强烈请求支持自定义 API 接口以接入第三方服务，并支持网络代理配置。([Issue #83](https://github.com/HKUDS/nanobot/issues/83))
*   **语音对话支持**：#1106 请求支持语音输入输出，这是向多模态个人助理迈进的重要信号。([Issue #1106](https://github.com/HKUDS/nanobot/issues/1106))
*   **GitHub Copilot 支持**：#140 询问是否计划支持 GitHub Copilot 作为 Provider，可能吸引更多开发者用户。([Issue #140](https://github.com/HKUDS/nanobot/issues/140))

### 7. 用户反馈摘要
*   **痛点**：配置文档与实际代码不同步（特别是 config.json 格式）；飞书、WhatsApp 等渠道的连接稳定性较差；命令行输出格式偶尔混乱。
*   **满意点**：社区响应速度快，特别是针对新功能的 PR 提交非常积极；WebUI 的出现受到了早期用户的欢迎。
*   **场景**：用户主要将 NanoBot 用于连接即时通讯软件（飞书、微信、钉钉）构建个人助理，并希望通过 OpenRouter 接入多样化的模型。

### 8. 待处理积压
*   **OpenRouter 认证问题**：#842 反馈升级后 OpenRouter 端点失效，涉及核心 LLM 调用，建议优先修复。([Issue #842](https://github.com/HKUDS/nanobot/issues/842))
*   **Telegram 空消息崩溃**：#100 指出特定情况下 Telegram Bot 会因空消息崩溃，该问题存在已久，建议作为 Good First Issue 处理。([Issue #100](https://github.com/HKUDS/nanobot/issues/100))
*   **模型支持范围**：#1822 指出最近无法使用 Nvidia 模型，需确认是否为上游 API 变更或兼容性破坏。([Issue #1822](https://github.com/HKUDS/nanobot/issues/1822))

---
*分析师注：NanoBot 正处于从“能用”到“好用”的过渡期，WebUI 的引入将是项目普及的关键转折点，但需注意快速迭代带来的配置兼容性问题。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这里是 **Zeroclaw** 项目 2026-03-12 的动态日报。

# Zeroclaw 项目日报 (2026-03-12)

## 1. 今日速览
Zeroclaw 今日呈现出**极高的活跃度与转型震荡期特征**。项目刚刚完成了代码仓库的重大重构（由多分支模型迁移至单一 `master` 分支），并连续发布了两个 Beta 版本（v0.1.7-beta.28/30）以适配新的 CI/CD 流程。社区方面，Issue 和 PR 的更新量均达到 50 条，显示出生态的快速迭代。然而，频繁的变动也带来了 GLIBC 版本不兼容、WebUI 连接失败等阻塞性问题，且待合并 PR 堆积（38 个）表明代码审核面临一定压力。

---

## 2. 版本发布
今日连续发布了 **v0.1.7-beta.28** 和 **v0.1.7-beta.30**，核心变更集中在工程化设施升级：

*   **核心变更**：
    *   **CI/CD 重构**：由 `@JordanTheJet` 提交，简化并替换了所有工作流。
    *   **分支模型迁移**：正式迁移至单一 `master` 分支模型，并更新了维护者信息。
*   **迁移注意事项**：
    *   根据Issue #3247，仓库已完成 574 个分支的清理与合并。**所有贡献者需立即将本地分支同步至 `master`**，旧的开发分支将不再维护。
    *   注意潜在的构建环境依赖变化，已有用户反馈 GLIBC_2.39 依赖导致旧系统无法运行的问题 (#3070)。

---

## 3. 项目进展
尽管今日合并/关闭的 PR 数量（12条）相对较少，但在功能增强和系统修复上有重要推进：

*   **关键修复与重构**：
    *   **Cron 任务可视化**：PR #3300 增加了运行历史 API 和仪表盘视图，提升了运维可观测性。
    *   **前端兼容性**：PR #3307 修复了旧版浏览器/Electron 环境下 `crypto.randomUUID` 报错的问题。
*   **重要功能提交（Pending/Review）**：
    *   **企业微信支持**：PR #3305 提交了 WeCom AI 机器人支持，补齐了国内办公场景的重要一环。
    *   **多渠道修复**：针对 Discord 网关静默断连 (#2896) 和 WebUI 认证逻辑 (#2879, #2884) 的修复 PR 已提交（#3332, #3330, #3331），正在等待合并。

---

## 4. 社区热点
今日讨论最热烈的话题集中在**兼容性**与**核心功能缺失**：

1.  **[Bug] GLIBC_2.39 not found (#3070)**
    *   **热度**：9 评论 | 👍 2
    *   **分析**：这是新版本发布后最严重的阻塞性问题。用户报告在旧版 Linux 发行版上无法运行二进制文件，这表明项目的构建环境可能过于超前，导致向后兼容性受损。目前该 Issue 已关闭，需关注官方是否提供了静态编译或降级方案。
2.  **[Feature] 飞书 功能缺陷 (#3012)**
    *   **热度**：9 评论 | 👍 1
    *   **分析**：用户指出飞书频道功能命名混乱且默认未开启，导致配置困难。这反映了文档滞后于代码实现的问题，社区对于国内主流 IM 的支持需求非常强烈。
3.  **[Feature] Azure OpenAI 支持 (#3176)**
    *   **热度**：4 评论
    *   **分析**：企业级用户对 Azure 的呼声很高，希望能直接利用现有的 Azure 订阅，而不是仅限于 OpenAI 官方端点。

---

## 5. Bug 与稳定性
今日报告的 Bug 较多，且部分严重影响了使用体验：

*   **P0 - 严重/阻塞**:
    *   **环境不兼容**: `GLIBC_2.39` 依赖导致二进制无法在部分系统启动 (#3070)。
    *   **WebUI 瘫痪**: v0.1.8 版本中 WebUI Agent 出现 "Connection error" 且不断重连 (#2910)，严重影响了通过 Web 界面交互的用户。
    *   **中文处理崩溃**: `loop_.rs` 中处理中文切片时发生 Panic，导致 Agent 崩溃 (#3024)。
*   **P1 - 功能受损**:
    *   **Discord 掉线**: Websocket 连接在首条消息后静默停止接收事件 (#2896)。已有修复 PR #3332。
    *   **安全策略误杀**: 工具访问工作区路径时被安全策略错误拦截 (#2880)。
    *   **URL 路径被清洗**: 安全过滤器误将 URL 路径段识别为高熵敏感信息并进行了清洗 (#3064)。

---

## 6. 功能请求与路线图信号
根据 Issue 和 PR 动态，下一版本的重点方向非常明确：

1.  **MCP (Model Context Protocol) 增强**：Issue #3153 请求 Agent 子命令支持 MCP 配置。目前工具仅在 `start_channels` 中加载，用户希望在独立 Agent 模式下也能调用 MCP 工具。
2.  **多模态能力扩展**：
    *   **语音消息**：PR #2920 正在为 WhatsApp Web 添加语音转录支持，利用 Whisper API 处理音频。
    *   **企业微信**：PR #3305 提交了企业微信的支持，填补了重要空白。
3.  **网络与代理**：Issue #3262 请求为频道（如 Telegram）添加 HTTP/Socks5 代理支持，这对于特定网络环境下的用户至关重要。

---

## 7. 用户反馈摘要
从 Issue 评论中提炼出的核心痛点如下：
*   **部署门槛升高**：用户对 GLIBC 版本强依赖表示不满，希望提供更通用的二进制包或 Docker 镜像。
*   **配置体验割裂**：飞书 和 Matrix 等频道的配置过程过于复杂，且文档缺失或误导，用户希望能有更简单的向导式配置或默认开启。
*   **前端交互问题**：Web 端的认证逻辑（Token 处理）存在前后端不一致的情况，导致即使配置了 `require_pairing = false` 仍然弹窗要求配对。

---

## 8. 待处理积压
以下高价值 Issue/PR 长期未被合并或响应，建议维护者优先关注：

*   **[PR] feat(whatsapp-web): add voice message transcription support (#2920)**
    *   状态：自 03-06 开启至今未合并。
    *   重要性：极大增强 WhatsApp 频道的实用性，补齐多模态短板。
*   **[PR] feat(tunnel): add OpenVPN tunnel provider (#3004)**
    *   状态：03-08 开启。
    *   重要性：企业级组网的关键组件，对于私有化部署非常重要。
*   **[Issue] [Bug]: Discord websocket silently stops... (#2896)**
    *   状态：虽然已有 PR (#3332) 修复，但原 Issue 影响面广（S0 级别），需确认修复 PR 的合并进度。

---

*分析师注：目前项目处于功能快速扩张与基础设施重构的叠加期，建议测试团队重点关注 v0.1.7-beta.30 的兼容性测试，特别是 WebUI 和 Docker 环境。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
PicoClaw 项目今日呈现出极高的活跃度，正处于 **v0.2.2** 版本的快速迭代期。过去 24 小时内，社区贡献了 **121 个 PR**（其中 47 个已合并）和 **30 个 Issue**，显示出项目在功能扩展和稳定性修复方面的强劲势头。今日主要围绕 **Agent 重构**（SOUL.md/AGENT.md 定义）、**多渠道安全性增强**（Matrix/LINE DoS 修复）以及 **提供商兼容性**（Azure/OpenRouter/Ollama）展开工作。整体来看，项目正在从单一 AI 工具向可扩展、可插拔的智能体平台演进，但在配置复杂度和部分渠道的稳定性上仍有优化空间。

## 2. 版本发布
今日发布了两个 Nightly 版本，主要聚焦于功能增强和关键 Bug 修复。

- **[v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)**
    - **新增功能**:
        - **LongCat 模型提供商支持**：新增了对 LongCat 模型的原生支持 ([#1317](https://github.com/sipeed/picoclaw/pull/1317))。
        - **Matrix 渠道富文本支持**：现在可以在 Matrix 频道中发送富文本消息，提升阅读体验 ([#1370](https://github.com/sipeed/picoclaw/pull/1370))。
    - **关键修复**:
        - **Agent 模式 MCP 初始化**：修复了在直连 Agent 模式下 MCP (Model Context Protocol) 无法初始化的问题，这对依赖外部工具的 Agent 至关重要。

- **[nightly (v0.2.2-nightly.20260312.6460a0a7)](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
    - 自动化构建版本，包含最新的代码提交，可能不稳定，仅供测试使用。

## 3. 项目进展
今日共有 **47 个 PR 被合并或关闭**，项目在安全性、兼容性和架构重构方面取得了实质性进展。

- **安全性修复**:
    - **Matrix/LINE DoS 漏洞修补**：合并了针对 Matrix ([#1431](https://github.com/sipeed/picoclaw/pull/1431)) 和 LINE ([#1428](https://github.com/sipeed/picoclaw/pull/1428)) 渠道的内存耗尽/DoS 攻击修复。通过引入流式下载和请求体大小限制，显著提升了公网部署的安全性。
    - **SVG MIME 类型修复**：修复了 Web 端 SVG 文件因 MIME 类型错误导致图标无法显示的问题 ([#1429](https://github.com/sipeed/picoclaw/pull/1429))。

- **架构与重构**:
    - **Spawn 逻辑修正**：修复了子 Agent 错误继承父 Agent 模型配置的问题，现在子 Agent 将正确使用自身配置的模型 ([#1435](https://github.com/sipeed/picoclaw/pull/1435))。
    - **配置迁移准备**：重构了配置结构以支持版本控制和迁移，移除了废弃的 `AuthMethod` 字段 ([#1352](https://github.com/sipeed/picoclaw/pull/1352))。

- **功能增强**:
    - **Azure OpenAI 支持**：合并了对 Azure OpenAI 提供商的支持，方便企业用户使用 Azure 订阅 ([#1422](https://github.com/sipeed/picoclaw/pull/1422))。
    - **错误重试机制优化**：改进了 OpenRouter 等提供商在网络传输层错误（如连接重置）时的重试逻辑，不再直接中断 Fallback 链 ([#1430](https://github.com/sipeed/picoclaw/pull/1430))。

## 4. 社区热点
今日讨论最热烈的话题集中在 **Agent 的架构定义** 和 **本地模型配置** 上。

1.  **[Agent refactor] What an Agent is ([#1218](https://github.com/sipeed/picoclaw/issues/1218))**
    - **热度**: 16 条评论
    - **分析**: 这是一个关于项目核心架构的重大讨论。维护者 @alexhoshina 提议定义 `SOUL.md`（定义性格/价值观）和 `AGENT.md`（定义配置/能力）作为 Agent 的双重核心文件。这标志着 PicoClaw 正试图将 Agent 的“人格”与“工具”解耦，使其更具可定制性和可移植性。

2.  **[BUG] How to correctly configure PicoClaw with local Ollama models? ([#1161](https://github.com/sipeed/picoclaw/issues/1161))**
    - **热度**: 15 条评论
    - **分析**: 许多用户尝试结合 PicoClaw 的 Agent 能力与 Ollama 的本地模型，但遇到了“无响应”或配置错误。这反映出当前配置文件（`config.json`）对于本地模型_endpoint_和参数的配置门槛较高，文档或默认配置急需优化。

3.  **[Agent refactor] Event-driven agent loop ([#1316](https://github.com/sipeed/picoclaw/issues/1316))**
    - **热度**: 7 条评论
    - **分析**: 提议将当前的“黑盒” Agent Loop 重构为事件驱动架构，支持 Hooks、中断和实时状态监控。这是响应社区对 Agent 可观测性（Observability）和精细控制能力的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已由社区快速响应并提交修复。

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高危** | [#1405](https://github.com/sipeed/picoclaw/issues/1405) / [PR #1431](https://github.com/sipeed/picoclaw/pull/1431) | **Matrix 渠道内存耗尽 DoS**：下载大文件无限制导致内存泄露。 | **已修复** (Merged) |
| **高危** | [#1407](https://github.com/sipeed/picoclaw/issues/1407) / [PR #1428](https://github.com/sipeed/picoclaw/pull/1428) | **LINE Webhook 无限制读取**：可能导致服务崩溃。 | **已修复** (Merged) |
| **中** | [#1426](https://github.com/sipeed/picoclaw/issues/1426) | **QQ 渠道无法使用**：用户反馈 QQ 通道连接失败。 | **待确认** |
| **中** | [#1419](https://github.com/sipeed/picoclaw/issues/1419) / [PR #1430](https://github.com/sipeed/picoclaw/pull/1430) | **OpenRouter 连接重置导致 Fallback 失效**：网络波动直接导致任务失败。 | **已修复** (Merged) |
| **低** | [#1323](https://github.com/sipeed/picoclaw/issues/1323) / [#1212](https://github.com/sipeed/picoclaw/issues/1212) | **Telegram 一直显示“正在输入”**：状态同步逻辑死循环。 | **已修复** (Closed) |
| **低** | [#1287](https://github.com/sipeed/picoclaw/issues/1287) | **Tool Calling 失败**：JSON 解析错误，可能与特定模型输出格式有关。 | **已修复** (Closed) |

## 6. 功能请求与路线图信号
社区正在积极通过 Issue 和 PR 推动项目支持更广泛的生态。

- **企业级集成**: 用户请求增加对 **魔搭社区** 模型的配置支持 ([#1438](https://github.com/sipeed/picoclaw/issues/1438))，这与已合并的 Azure OpenAI 支持相呼应，表明 PicoClaw 正在向兼容多种云端/本地推理服务的方向努力。
- **交互体验优化**: 提议为 Telegram 增加 **Emoji 反应** 功能 ([#1328](https://github.com/sipeed/picoclaw/issues/1328))，用低干扰的方式确认收到消息，这符合“隐形 AI 助手”的理念。
- **Docker 增强**: 建议在 Docker 镜像中预装 Node.js 环境 ([#1371](https://github.com/sipeed/picoclaw/issues/1371))，以便运行依赖 JS 的工具或插件，显示出用户对插件化能力的渴望。

## 7. 用户反馈摘要
从 Issues 和 PR 评论中提炼出以下用户画像与痛点：

- **痛点 - 配置复杂度高**: 多个用户在配置 Ollama ([#1161](https://github.com/sipeed/picoclaw/issues/1161)) 或 Groq ([#748](https://github.com/sipeed/picoclaw/issues/748)) 时遇到困难。用户希望有更直观的“配置向导”或针对特定平台的预设模板。
- **痛点 - 迭代限制**: 当前默认的 `max_tool_iterations: 20` 导致复杂任务（如长代码生成）中途夭折 ([#440](https://github.com/sipeed/picoclaw/issues/440))。用户建议改用上下文窗口边界检测来替代硬性迭代次数限制。
- **满意 - 快速响应**: 用户对维护者快速修复 Web 端 Bug（如 JSON 编辑器高度崩溃 [#1364](https://github.com/sipeed/picoclaw/issues/1364)）表示赞赏。
- **场景 - 持久化记忆**: 有用户请求集成 Engram 作为后端 ([#175](https://github.com/sipeed/picoclaw/issues/175))，表明部分高阶用户正在尝试将 PicoClaw 用于长期记忆的数字伴侣场景。

## 8. 待处理积压
以下重要 Issue 尚未得到有效解决或响应，建议维护者关注：

1.  **[P1] Config file race condition ([#1151](https://github.com/sipeed/picoclaw/issues/1151))**: TUI 界面并发写入配置文件可能导致数据损坏，属于潜在的稳定性隐患。
2.  **[P1] Groq API Tool Call 格式错误 ([#748](https://github.com/sipeed/picoclaw/issues/748))**: 这是一个长期存在的问题，导致 Groq 用户无法正常使用 Tool calling 功能。
3.  **[P2] 上下文管理策略 ([#1439](https://github.com/sipeed/picoclaw/issues/1439))**: 随着 Agent 能力增强，如何管理历史记录、摘要和 Token 预算成为瓶颈，需要确立架构方案。

---
*数据来源: GitHub PicoClaw Repository | 分析时间: 2026-03-12*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-12 的动态日报。

### 1. 今日速览
NanoClaw 今日呈现出极高的社区活跃度，正处于从核心功能完善向性能优化和生态扩展转型的关键时期。过去24小时内共有 53 次交互（23 个 Issues, 30 个 PRs），显示出贡献者对项目的高度热情。核心团队与社区正集中火力解决 **Token 消耗过高** 这一痛点，提出了一套完整的 "Smart Token Optimization" 方案。同时，多渠道集成（Google Chat, Telegram, Discord）的修复与增强表明项目正致力于提升多平台支持的稳定性。

### 2. 版本发布
*   **无新版本发布**：今日无正式 Release，主要处于代码合并与功能迭代阶段。

### 3. 项目进展
今日共有 **6 个 PR 被合并/关闭**，显著提升了系统的健壮性与部署便利性：

*   **生产部署支持**：PR [#1004](https://github.com/qwibitai/nanoclaw/pull/1004) 合并，引入了 `Docker Compose` 和 `Dokploy` 部署支持，实现了 Docker-out-of-Docker (DooD)，大大降低了生产环境部署门槛。
*   **Google Chat 稳定性修复**：PR [#1000](https://github.com/qwibitai/nanoclaw/pull/1000) 实现了线程级对话历史隔离，修复了上下文污染问题；PR [#1001](https://github.com/qwibitai/nanoclaw/pull/1001) 修复了热容器重用导致的 `thread_id` 错误。
*   **Token 优化奠基**：Issue [#980](https://github.com/qwibitai/nanoclaw/issues/980), [#981](https://github.com/qwibitai/nanoclaw/issues/981), [#982](https://github.com/qwibitai/nanoclaw/issues/982) 相关的设计任务已完成，为后续实现零成本的对话历史压缩和响应长度控制铺平了道路。

### 4. 社区热点
今日最热门的讨论集中在 **成本控制** 与 **底层架构安全性**：

*   **Token 优化大计**：由 @gm4leejun-stack 发起的 [Token Optimization Tracking Issue #983](https://github.com/qwibitai/nanoclaw/issues/983) 及其子 PR [#988](https://github.com/qwibitai/nanoclaw/pull/988) 引入了一套无需额外调用 LLM 的 "Inline Compaction" 机制，通过在正常回复流中注入压缩指令来节省 Token。这直击用户痛点，是今日最受关注的功能性进展。
*   **容器安全架构争议**：Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 提出了尖锐的架构质疑，指出"仅使用容器并不等于安全"，认为 Agent 级别的脚本不可信，建议重构信任边界。这引发了关于 NanoClaw 安全模型的深度讨论。

### 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已有修复方案：

*   **[High] Gemini Pro 响应极慢**：Issue [#989](https://github.com/qwibitai/nanoclaw/issues/989) 指出 Gemini Pro 容器延迟高达 3.5 分钟。
    *   *状态*：已有修复 PR [#994](https://github.com/qwibitai/nanoclaw/pull/994)，通过裁剪上下文和提前退出机制将速度提升 2-3 倍。
*   **[High] OAuth Token 隔夜失效**：Issue [#730](https://github.com/qwibitai/nanoclaw/issues/730) 报告 `.env` 中的 `CLAUDE_CODE_OAUTH_TOKEN` 几小时后过期导致服务 401 崩溃。
    *   *状态*：Open，目前尚无自动刷新 Token 的机制。
*   **[High] Agent 回复静默丢失**：PR [#995](https://github.com/qwibitai/nanoclaw/pull/995) 修复了一个严重 Bug：当 Agent 回复文本后紧接着调用工具（如写记忆）时，文本回复会被 SDK 丢弃。
*   **[Medium] Podman 休眠断连**：Issue [#993](https://github.com/qwibitai/nanoclaw/issues/993) 报告 macOS 休眠唤醒后 Podman SSH 连接静默失效。
    *   *状态*：Workaround 为重启 Podman machine。

### 6. 功能请求与路线图信号
*   **多云凭证代理**：Issue [#878](https://github.com/qwibitai/nanoclaw/issues/878) 及 PR [#999](https://github.com/qwibitai/nanoclaw/pull/999) 提议将现有的凭证代理机制扩展至 Groq 和 OpenAI，防止 API Key 泄露进容器。这是强化企业级安全的重要一步。
*   **长期记忆增强**：PR [#979](https://github.com/qwibitai/nanoclaw/pull/979) 提议集成 **LanceDB** 作为容器的长期向量记忆库，解决 Agent 跨会话失忆的问题。
*   **基础设施支持**：Issue [#957](https://github.com/qwibitai/nanoclaw/issues/957) 强烈建议官方文档明确支持 **Podman** 作为 Docker 的替代品，以满足 Rootless 容器需求。

### 7. 用户反馈摘要
*   **痛点：Token 成本**：社区对 Token 消耗极为敏感，今日多个高优先级 Issue 均与此相关（如 Gemini 慢是由于输入了 123k tokens），用户迫切需要"省钱"模式。
*   **痛点：Setup 困难**：Issue [#973](https://github.com/qwibitai/nanoclaw/issues/973) 和 #958 反映 Setup 流程过于复杂且耗时，用户期望更简单的配置方式（如纯 JSON 配置）。
*   **场景：多平台接入**：大量 PR 针对 Telegram, Google Chat, Discord 等特定平台的 Bug 修复，说明用户大量使用 NanoClaw 作为 IM 机器人接入层。

### 8. 待处理积压
*   **安全架构重构**：Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 提出的安全模型问题涉及核心架构，虽讨论热烈但尚未有明确的重构计划，建议维护者尽快定性。
*   **Setup 体验优化**：Setup 过慢 (#973) 和 Verify 脚本不兼容 `ANTHROPIC_AUTH_TOKEN` (#853) 是阻碍新用户入坑的高墙，需优先处理。
*   **协议合规性**：Issue [#827](https://github.com/qwibitai/nanoclaw/issues/827) 指出的 `ToolUse` 协议违规虽已有 PR [#1003](https://github.com/qwibitai/nanoclaw/pull/1003) 修复，但尚未合并，需尽快 Review 以防止模型行为异常。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，呈现出"大版本发布+高强度代码审查"的特征。随着 **v0.18.0** 的正式发布，项目自动化 CI 机制同步对 staging 分支发起了大规模的代码审查，单日生成了近 20 个代码质量问题 Issue。社区方面，功能请求主要集中在**集成扩展**（飞书、Composio）和**底层架构优化**（安全模块重构、全文本搜索）上。虽然待合并 PR 数量较多（23个），但合并速度依然稳健，显示出核心团队强大的吞吐能力。

## 2. 版本发布
### **v0.18.0** - 2026-03-11
- **更新性质**: 主要是依赖更新与稳定版合并。
- **主要内容**:
  - 合并了 Staging 分支的累积更新 (PR #865)。
  - **更新了 WASM arti** 组件，可能涉及 WebAssembly 运行时或网络相关的底层依赖升级。
- **影响**: 属于常规迭代版本，暂未发现破坏性变更说明，建议用户按常规流程升级。

## 3. 项目进展
今日共有 **27 个 PR 被合并/关闭**，显著推进了以下领域：

- **渠道与模型支持增强**:
  - **飞书 Native 支持** (PR #854): 合并了原生飞书 WebSocket 渠道和 Gemini 原生 LLM Provider，大幅扩展了在中文办公市场和多模态模型领域的适用性。
  - **CLI 功能补全** (PR #933): 新增 `ironclaw channels list` 子命令，改善了命令行下的状态可见性。
  - **Z.AI 支持** (PR #938): 新增 Z.AI 提供商支持。

- **文档与测试**:
  - 修复了因依赖升级导致的 HTML 转 Markdown 测试失败 (PR #1016)，确保了主分支的 CI 通过率。

> **分析师注**: 今日合并的 PR 多为昨日开启的大型功能 PR，表明项目处于快速消化新功能的阶段。

## 4. 社区热点
今日讨论热度最高的议题集中在**集成痛点**与**核心功能缺失**：

1.  **[Bug] Ngrok 进程僵尸化** ([Issue #733](https://github.com/nearai/ironclaw/Issue/733))
    - **热度**: 5条评论
    - **焦点**: 用户报告在使用 Ngrok 隧道时，子进程在获取 URL 后变为僵尸进程 (`<defunct>`)，导致隧道掉线。这直接影响了需要内网穿透的远程调试场景。
2.  **请求：Chat API 增加搜索能力** ([Issue #548](https://github.com/nearai/ironclaw/Issue/548))
    - **热度**: 3条评论
    - **焦点**: 开发者希望 IronClaw 默认具备网络搜索能力，这反映了用户对 Agent "开箱即用" 能力的更高期待。
3.  **安装依赖校验失败** ([Issue #875](https://github.com/nearai/ironclaw/Issue/875))
    - **热度**: 2条评论 + 1 👍
    - **焦点**: `ironclaw onboard` 流程中 GitHub 工具包校验和验证失败，阻断了新用户的初次配置。

## 5. Bug 与稳定性
今日安全性相关 Issue 激增，主要由 CI Bot 自动生成，需重点关注：

- **[CRITICAL] Webhook 认证绕过** ([Issue #1033](https://github.com/nearai/ironclaw/Issue/1033))
  - **描述**: 当未配置 secret 时，Webhook 存在认证绕过风险。
  - **状态**: **OPEN** (由 Staging CI 检出，尚无对应 Fix PR)。

- **[HIGH] 多项安全与性能隐患**:
  - [Issue #1039](https://github.com/nearai/ironclaw/Issue/1039): 热路径中频繁创建 HTTP 客户端。
  - [Issue #1037](https://github.com/nearai/ironclaw/Issue/1037): API 破坏性变更，`auth()` 签名改变未废弃。
  - [Issue #1035](https://github.com/nearai/ironclaw/Issue/1035): HMAC 签名验证操作顺序错误。

- **用户侧功能性 Bug**:
  - **DeepSeek Key 配置失效** ([Issue #1047](https://github.com/nearai/ironclaw/Issue/1047)): 用户无法设置 DeepSeek API Key，返回 401 错误。
  - **Linux 旧版 glibc 兼容性** ([Issue #1008](https://github.com/nearai/ironclaw/Issue/1008)): 安装程序在 glibc < 2.35 的系统上失败，影响 Amazon Linux 2023 等环境。

## 6. 功能请求与路线图信号
结合用户请求与活跃 PR，以下功能极有可能在近期落地：

1.  **统一搜索**:
    - 用户请求 ([Issue #1022](https://github.com/nearai/ironclaw/Issue/1022)): 增加 Omnisearch 全局搜索 UI。
    - 对应 PR: 已有 PR 正在添加会话记录的全文搜索索引 ([Issue #1020](https://github.com/nearai/ironclaw/Issue/1020))。
    - **预测**: 搜索能力的整合将是下一阶段的重点。

2.  **第三方集成**:
    - 新增 PR ([PR #920](https://github.com/nearai/ironclaw/pull/920)): 原生集成 Composio 工具，支持第三方 App 连接。
    - 用户请求 ([Issue #1046](https://github.com/nearai/ironclaw/Issue/1046)): 支持飞书。

3.  **安全模块重构**:
    - PR ([PR #1024](https://github.com/nearai/ironclaw/pull/1024)): 将 `safety` 模块提取为独立 crate `ironclaw_safety`。这表明项目正在进行架构解耦，为更严格的安全测试做准备。

## 7. 用户反馈摘要
从 Issues 中提炼出的用户画像如下：
- **部署环境多样化**: 用户尝试在 Amazon Linux 2023、各种 Linux 发行版上部署，对安装脚本的兼容性（glibc 版本、musl 回退）有强需求。
- **模型选择自由度**: 用户强烈希望能方便地切换和使用非 OpenAI 模型，如 DeepSeek、Qwen (Alibaba Coding Plan) 和 Z.AI。
- **对 Agent "自主性" 的期待**: 不仅是聊天，用户希望 Agent 能执行更复杂的任务（如通过 Chrome MCP 进行 E2E 测试，Issue #1044），这要求 IronClaw 具备更强的工具调用和错误恢复能力。

## 8. 待处理积压
以下重要 Issue/PR 长期未决或需紧急关注：

- **PR #1032 (Staging -> Main)**: 目前处于 OPEN 状态且带有 `risk: high` 标签。由于触发了大量 CI 安全审查 Issue，该 PR 可能会被暂时阻塞，直到安全漏洞修复。
- **PR #693 (ChatGPT Backend OAuth)**: 旨在复用 Codex CLI 的 OAuth Token，允许无 Key 使用 ChatGPT。这是一个巨大的用户体验提升点，但目前仍处于 OPEN 状态，建议维护者优先 Review。
- **PR #927 (Advisor Refactor)**: 重构 Onboarding 流程，涉及核心交互逻辑，需核心贡献者投入时间测试。

---
*日报由 AI 自动生成，数据截止至 2026-03-12*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-12)

## 1. 今日速览
LobsterAI 今日保持**高度活跃**状态，随着 **v0.2.3** 版本的正式发布，项目进入了密集的修复与优化周期。过去 24 小时内共有 12 个 PR 更新（9 个已合并）和 11 条 Issue 更新，显示出维护团队在发布新版本后正迅速解决遗留问题。社区方面，用户对新版本的升级体验（特别是 ARM 架构和配置保留）反馈强烈，同时开发者社区贡献了包括启动速度优化、URI 协议支持等高质量 PR，项目整体健康度良好，迭代速度极快。

## 2. 版本发布
今日发布了 **v0.2.3** 版本。
- **主要更新**：
  - 修复了 IM（即时通讯）渠道的集成问题 (PR #348)。
  - 优化了聊天分页逻辑 (PR #355)。
  - **功能增强**：主界面附件上传现已支持多文件选择 (PR #371)。
- **潜在影响**：虽然更新日志被截断，但结合今日 Issue #382 的反馈，此次更新可能涉及配置文件结构的变动，导致部分用户升级后设置丢失。

## 3. 项目进展
今日共有 **9 个 PR 被合并**，主要集中在稳定性修复与性能优化，显著提升了产品质量：
- **性能大幅优化**：PR #395 通过 esbuild 打包和编译缓存，成功将 Windows Electron 环境下的 Gateway 启动时间从 **>180s (超时)** 缩短至 **~15s**，解决了严重性能瓶颈。
- **功能增强**：
  - PR #380 新增了对 Markdown 链接自定义 URI 协议（如 `obsidian://`, `vscode://`）的支持，增强了互操作性。
  - PR #393 修复了 IM 渠道连接性测试引起的 Bug。
- **构建修复**：PR #387 解决了 macOS 代码签名失败的问题，确保了 Mac 端发行的稳定性。

## 4. 社区热点
今日讨论热度最高的问题集中在**文本处理准确性**与**升级体验**：
- **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)**：用户强烈反馈“中文+数字”组合中自动插入空格的问题，认为这是阻碍替代 OpenClaw 的严重 Bug，评论数达 5 条。
- **[Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382)**：用户抱怨更新频繁但每次更新都会清空设置，体验极差。
- **[Issue #350](https://github.com/netease-youdao/LobsterAI/issues/350)**：Bash 命令执行耗时过长，缺乏对无返回值命令的处理，影响使用体验。

## 5. Bug 与稳定性
今日报告的 Bug 较多，且部分影响核心体验：
- **🔴 严重 (Critical)**：
  - **[Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)**：Apple Silicon (ARM64) 版本 v0.2.2 无法检测到 v0.2.3 更新。
    - *状态*：Open，暂无 Fix PR。
  - **[Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382)**：更新版本后用户配置被重置。
    - *状态*：Open，属于迁移体验问题。
- **🟠 中等**：
  - **[Issue #357](https://github.com/netease-youdao/LobsterAI/issues/357)**：读取图片时应用卡死。
  - **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)**：中文数字间强制加空格的格式化 Bug。
- **已修复**：
  - Bash/Gateway 启动慢的问题有望通过今日合并的 PR #395 得到缓解。

## 6. 功能请求与路线图信号
社区提出了多个具有建设性的功能请求，部分已有社区 PR 支持但尚未合并：
- **定时任务增强**：PR #376 提出增加“每小时”定时任务模式，目前状态为 Open，有望合入下个版本。
- **部署方式**：Issue #386 呼吁支持 Docker 部署，目前暂无官方回应。
- **易用性改进**：Issue #391 建议增加“提示词优化”按钮，降低小白用户使用门槛。
- **模型支持**：PR #388 更新了 MiniMax 提供商的配置，反映了社区对扩展模型生态的需求。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出的用户核心痛点如下：
- **记忆能力**：多个用户（如 Issue #186）反馈记忆功能较弱，不如原版 OpenClaw，且切换模型无改善。
- **执行效率**：Bash 命令执行等待时间过长，对于无输出命令缺乏即时反馈机制（Issue #350）。
- **格式化干扰**：自动添加空格的问题（Issue #344）干扰了代码或特定文本的复制使用，用户急切需要修复。
- **运维痛点**：配置持久化（Issue #382）和 Linux/Docker 支持（Issue #273, #386）是企业级/极客用户的主要诉求。

## 8. 待处理积压
- **[Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186)**（记忆能力差）：自 2 月底提出，至今仍未有实质性解决方案，属于核心功能缺陷，需重点关注。
- **[PR #240](https://github.com/netease-youdao/LobsterAI/pull/240)**（Workflow 增强）：提出了基于 Agent 职责的 Workflow 机制，已挂起数日，等待官方 Review。
- **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**（MiniMax 更新）：今日提出，等待合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是 **TinyClaw** 项目 2026-03-12 的动态日报。

---

# 📊 TinyClaw 项目动态日报 (2026-03-12)

### 1. 今日速览
TinyClaw 今日处于**高活跃度开发状态**，单日输出了 2 个版本更新和 6 个 PR，显示维护团队正在密集修复部署问题并推进功能迭代。核心关注点在于**v0.0.10 的安装严重故障修复**以及**Telegram 连接稳定性的深度优化**。同时，项目正在进行大规模的重构工作（重命名及架构调整），并针对 Web 端 TinyOffice 提出了多项重要的体验改进。整体来看，项目正在从纯 CLI 工具向更现代化的 Web 端控制台演进。

### 2. 版本发布
今日连续发布了 **v0.0.10** 和 **v0.0.11**，重点在于精简架构与修复。

*   **v0.0.11** [Link: None]
    *   **内容**：版本号迭代。
    *   **贡献者**：由 Claude Opus 4.6 协助发布，体现了 AI 辅助开发的流程集成。

*   **v0.0.10**
    *   **主要内容**：
        *   **界面简化**：移除了 tmux 会话中独立的日志窗格 (`daemon.sh`)，简化了主目录检测逻辑。
        *   **稳定性提升**：将 Telegram 轮询看门狗 的超时时间从 2 分钟延长至 5 分钟。
        *   **重构**：将 Task/TaskStatus 类型定义进行了迁移。
    *   **已知影响**：该版本导致了首次安装失败（见 Bug 章节），需注意升级或安装时的脚本兼容性。

### 3. 项目进展
今日共有 **2 个 PR 合并/关闭**，主要集中在修复阻塞性安装问题和底层架构转型。

*   **🔧 [CLOSED] PR #198: fix: remove stale setup-wizard.sh references**
    *   **意义**：**关键修复**。修复了因旧脚本引用导致 v0.0.10 首次安装失败的问题，将设置向导迁移至纯 Node.js 实现。
    *   **链接**：[TinyAGI/tinyclaw PR #198](https://github.com/TinyAGI/tinyclaw/pull/198)
*   **🔧 [CLOSED] PR #195: fix: convert send_message skill from TS to plain Node.js**
    *   **意义**：解决了因 `@types/node` 缺失导致的 ts-node 编译失败问题，通过去 TypeScript 化（转为 plain JS）提高了特定脚本的执行兼容性。
    *   **链接**：[TinyAGI/tinyclaw PR #195](https://github.com/TinyAGI/tinyclaw/pull/195)

### 4. 社区热点
*   **🔥 [OPEN] Issue #126: Bug Report: Telegram Bot Auto-Reconnect Failure**
    *   **热度**：评论 5 条 (今日活跃)
    *   **分析**：虽然是一个较早的 Issue，但在今日重新活跃，且有对应的修复 PR (#200) 提出。这表明 Telegram 连接的稳定性是目前用户在真实网络环境下的核心痛点。
    *   **链接**：[TinyAGI/tinyclaw Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126)

### 5. Bug 与稳定性
今日报告了 1 个严重 Bug（已修）和 1 个待修复的功能性问题。

*   **🔴 Critical (Fixed): 首次安装脚本缺失**
    *   **Issue**: #197 - v0.0.10 安装包中缺少 `setup-wizard.sh`，导致 `chmod` 报错，系统无法初始化。
    *   **状态**：已由 PR #198 修复。
    *   **链接**：[TinyAGI/tinyclaw Issue #197](https://github.com/TinyAGI/tinyclaw/issues/197)
*   **🟠 Medium (Open): Telegram 断线重连失败**
    *   **Issue**: #126 - Telegram 客户端在网络波动后无法自动重连。
    *   **修复进度**：已有 PR #200 提出修复方案，增加了客户端超时和恢复机制。
    *   **链接**：[TinyAGI/tinyclaw Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126)

### 6. 功能请求与路线图信号
今日涌现了大量关于 **TinyOffice (Web 门户)** 的功能增强请求，显示出项目正在向**可视化控制**方向演进。

*   **Web 端看板与控制台**：Issue #194 建议在 TinyOffice 中增加对守护进程、队列和心跳的运行时控制面板。
*   **UX 改进**：Issue #192 指出当前 Web 聊天是临时的，无法查看历史记录，建议增加会话保持功能。
*   **新手引导**：Issue #193 建议增加 Web 端的首次配置向导，减少对 CLI 的依赖。
*   **品牌重塑**：**PR #191** 提出将项目从 TinyClaw 重命名为 **TinyAGI**。这是一个巨大的信号，预示着项目定位可能从单一的 "Claw" (抓取/工具) 转向更通用的 "AGI" 智能体平台。
    *   **链接**：
        *   [PR #191 (Rebrand)](https://github.com/TinyAGI/tinyclaw/pull/191)
        *   [Issue #194 (Control Panel)](https://github.com/TinyAGI/tinyclaw/issues/194)
        *   [Issue #199 (Chat Rooms)](https://github.com/TinyAGI/tinyclaw/pull/199)

### 7. 用户反馈摘要
从 Issue #197 和 #126 的讨论中提炼出以下痛点：
1.  **部署脆弱性**：用户 @crisdias 反映安装包内容的微小变动（如文件缺失）会导致整个安装流程中断，目前的安装脚本缺乏容错机制。
2.  **网络鲁棒性**：用户 @dpbmaverick98 指出在复杂网络环境下，Telegram Bot 的长连接容易僵死，现有机制无法有效检测并恢复连接。

### 8. 待处理积压
*   **⚠️ PR #191 (Rebrand to TinyAGI)**：这是一个涉及全代码库的大型 PR，目前状态为 Open。维护者需重点审查此 PR，因为它将改变所有的包名和环境变量，可能会对现有用户造成破坏性升级影响。
*   **⚠️ PR #196 (Agent Streaming)**：引入了 Agent 执行进度的实时流式传输，这是一个核心功能的增强，目前待合并，建议优先 Review 以提升交互体验。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-12)

## 1. 今日速览
Moltis 项目今日呈现**高活跃度、高修复率**的积极态势。社区互动频繁，过去24小时内共有 **36 条 Issues 更新**（其中 26 条已关闭）和 **26 条 PRs 更新**。项目维护者 @penso 表现极其活跃，一次性提交了十余个修复和功能 PR，集中解决了安装引导、本地模型、浏览器工具和 Docker 环境下的多个痛点。虽然仍有少量新 Bug 报告（如 Docker 沙箱路径和 Web 抓取问题），但整体代码质量和用户体验正在通过高频迭代迅速优化。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **7 个 PR 被合并/关闭**，主要集中在提升系统健壮性和修复遗留 Bug，显著提升了多平台下的兼容性。

*   **[web] 优化安装与引导流程**：合并了 [PR #398](https://github.com/moltis-org/moltis/pull/398)，修复了 Tailscale 连接状态显示错误及部分 UI 字段不匹配问题，改善了新用户的首次安装体验。
*   **[chat] 修复会话压缩与持久化**：合并了 [PR #399](https://github.com/moltis-org/moltis/pull/399)，确保频道消息能正确压缩到对应的会话中，防止主会话被错误污染；同时 [PR #418](https://github.com/moltis-org/moltis/pull/418)（待合并）修复了中断聊天时部分历史的丢失问题。
*   **[local-llm] MLX 流式输出修复**：合并了 [PR #397](https://github.com/moltis-org/moltis/pull/397)，解决了 MLX 模型流式输出时 Stop Token 未被剥离导致输出乱码的问题。
*   **[config] 兼容旧版配置**：合并了 [PR #400](https://github.com/moltis-org/moltis/pull/400)，使系统兼容旧版 `memory` 配置字段，降低了用户升级配置文件的门槛。
*   **[mcp] 增强远程连接能力**：合并了 [PR #416](https://github.com/moltis-org/moltis/pull/416)，支持在 MCP URL 中携带 Query String 和 Header，方便接入需要认证的远程 MCP 服务。

## 4. 社区热点
今日讨论主要集中在**功能扩展**和**部署难题**上，显示了用户对灵活集成的渴望。

*   **[Issue #176] 添加系统提示词时间上下文** (👍 1, 评论 13)
    *   **链接**: [moltis-org/moltis Issue #176](https://github.com/moltisorg/moltis/issues/176)
    *   **分析**: 这是一个热度极高的增强请求。用户希望 Agent 能在系统提示词中自动获取当前日期时间，这对于日程安排、时间敏感型任务至关重要。该功能尚未实现，需求强烈。
*   **[Issue #181] Crons 和 Heartbeat 无法激活** (评论 8)
    *   **链接**: [moltis-org/moltis Issue #181](https://github.com/moltisorg/moltis/issues/181)
    *   **分析**: 虽然该 Issue 已被关闭，但长篇讨论反映了定时任务和心跳机制在特定配置下的不稳定性。社区对后台任务的可靠性给予了高度关注。
*   **[Issue #391] RFC: 节点广播工具协议** (评论 2)
    *   **链接**: [moltis-org/moltis Issue #391](https://github.com/moltisorg/moltis/issues/391)
    *   **分析**: 这是一个高质量的架构级讨论。作者建议扩展现有的 Node 协议，允许远程节点向中心 Agent 广播其支持的工具（而不仅仅是执行 Shell 命令）。这标志着项目正从单体 Agent 向分布式 Agent 网络演进，具有重要的战略意义。

## 5. Bug 与稳定性
今日新增/活跃的 Bug 报告主要涉及 Docker 沙箱和 Web 工具，部分已有对应的修复 PR。

*   **[严重] Docker 沙箱路径挂载错误** (`无法运行工具`)
    *   **Issue**: [Issue #423](https://github.com/moltis-org/moltis/issues/423) (新开)
    *   **描述**: 在 Docker 容器内运行 Moltis 并使用 Docker-in-Docker 创建沙箱时，工作空间挂载路径错误，导致工具无法访问文件。
    *   **状态**: **已定位**，[PR #405](https://github.com/moltis-org/moltis/pull/405) 正在加强 Apple Container 和 Docker 的路径处理逻辑。
*   **[严重] Trusted-Network 代理立即关闭**
    *   **Issue**: [Issue #367](https://github.com/moltis-org/moltis/issues/367)
    *   **描述**: 当配置 `network = "trusted"` 时，代理服务启动后立即关闭，导致所有 HTTP 工具失效。
    *   **状态**: 处于 Open 状态，等待修复。
*   **[中等] Web Fetch 遇非 UTF-8 页面崩溃**
    *   **Issue**: [Issue #420](https://github.com/moltis-org/moltis/issues/420) (新开)
    *   **描述**: `web_fetch` 工具在抓取旧式或非 UTF-8 编码网页时发生 Panic。
*   **[中等] z.ai 开箱即用网络错误**
    *   **Issue**: [Issue #414](https://github.com/moltis-org/moltis/issues/414)
    *   **描述**: 用户反馈 z.ai 集成默认配置下存在网络连接问题。

## 6. 功能请求与路线图信号
*   **[Feature] Webhook 支持** ([Issue #272](https://github.com/moltisorg/moltis/issues/272)): 用户迫切需要 Webhook 功能以实现事件驱动的集成，目前仍处于 Open 状态，建议纳入近期路线图。
*   **[Feature] Discord/WhatsApp 支持** ([Issue #221](https://github.com/moltisorg/moltis/issues/221), [Issue #111](https://github.com/moltisorg/moltis/issues/111)): 多渠道接入需求依然旺盛。
*   **[Roadmap] MCP 增强**: [PR #419](https://github.com/moltis-org/moltis/pull/419) 提议使 MCP 请求超时可配置，[PR #416](https://github.com/moltis-org/moltis/pull/416) 增加了头部支持。这表明项目正在持续强化 MCP (Model Context Protocol) 生态的兼容性。

## 7. 用户反馈摘要
*   **Docker 部署仍是最大痛点**: 多个 Issue (#423, #102, #346) 均涉及 Docker 环境下的路径、权限或网络问题，说明容器化部署的健壮性仍需打磨。
*   **对本地模型支持要求高**: 用户对 Vulkan GGUF ([PR #408](https://github.com/moltis-org/moltis/pull/408)) 和 MLX 的修复反应迅速，说明有相当一部分用户在本地运行 Moltis，且硬件环境多样。
*   **对 Agent 记忆能力有更高期待**: Issue #176 提出的时间感知需求，反映了用户希望 Agent 具备更接近真人的上下文感知能力，而不仅仅是处理文本。

## 8. 待处理积压
*   **[Issue #176] 系统提示词添加日期时间**: 作为讨论热度最高且点赞数最多的功能请求，长期未得到官方 "Enhancement" 标签的实质性代码响应，建议优先排期。
*   **[Issue #367] Trusted Network 代理稳定性**: 该 Bug 导致网络工具完全不可用，且已挂起一段时间，建议尽快由核心贡献者介入排查。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-12)

你好！我是 CoPaw 项目分析师。今日 CoPaw 项目迎来了 **v0.0.7** 版本的重要更新，项目活跃度极高（单日 Issues/PR 更新均达 50 条）。今日重心集中在**安全性增强**、**升级机制修复**以及**多工作区架构**的预览。

以下是今日详细动态：

---

### 1. 今日速览

- **整体状态**：项目处于高度活跃期，随着 v0.0.7 的发布，团队重点转向了安全性与用户体验优化。
- **核心更新**：发布 **v0.0.7**，引入了关键的工具调用安全层，防止高风险命令执行。
- **社区聚焦**：**版本升级问题**依然是用户反馈的焦点，多个用户报告 v0.0.6 升级后前端未生效的问题。
- **架构演进**：出现了关于 **Multi-agent/Multi-workspace（多智能体/多工作区）** 的重大架构重构 PR，预示着项目功能的下一次大跨越。

### 2. 版本发布

今日发布了 **[v0.0.7](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.7)**。

- **✨ 核心新增**：
  - **工具护卫**：新增工具执行前安全扫描层。系统会自动检测工具参数中的风险模式（如 Shell 命令中的 `rm`, `mv`）。
  - **审批机制**：风险调用将被拦截，用户需通过 `/approve` 指令批准后方可执行；被拒绝的工具将被永久阻止。
  - **安全设置**：新增安全设置页面，方便用户管理安全策略。
- **⚠️ 迁移注意**：升级后默认开启安全扫描，涉及系统级操作的 Skills 可能需要用户在首次使用时进行人工审批。

### 3. 项目进展

今日共有 **23 个 PR 被合并/关闭**，主要修复了多个影响用户体验的关键 Bug。

- **UI 交互修复**：[PR #1371](https://github.com/agentscope-ai/CoPaw/pull/1371) 修复了控制台中复制按钮失效及模型选择器溢出的问题。
- **Skill 导入修复**：[PR #1369](https://github.com/agentscope-ai/CoPaw/pull/1369) 修复了当 Skill 名称包含 `/` 符号时导入失败的问题。
- **页面刷新体验**：[PR #1373](https://github.com/agentscope-ai/CoPaw/pull/1373) 修复了页面刷新后重定位到聊天窗口的问题。
- **配置上下文修复**：[PR #1262](https://github.com/agentscope-ai/CoPaw/pull/1262) 修复了定时任务覆盖请求上下文的 Bug，确保 `request.user_id` 不会被错误篡改。

### 4. 社区热点

今日讨论最激烈的问题集中在**内置功能扩展**与**版本升级故障**。

- **🔥 [Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280) (18 评论)**：社区正在讨论应内置哪些 Skills 和 MCPs。用户希望能预装流行的工具以实现开箱即用，这表明用户对降低配置门槛有强烈需求。
- **🐛 [Issue #1195](https://github.com/agentscope-ai/CoPaw/issues/1195) (14 评论) & [Issue #1315](https://github.com/agentscope-ai/CoPaw/issues/1315) (8 评论)**：大量用户反馈通过 `pip` 升级后端至 0.0.6+ 后，Web UI 仍显示旧版本 (v0.0.5)。这暴露了前后端版本同步或静态文件更新的机制性缺陷。
- **🛠️ [Issue #1370](https://github.com/agentscope-ai/CoPaw/issues/1370) (2 评论)**：用户报告 v0.0.7 中技能列表显示大量重复。这是一个回归问题，需引起注意。

### 5. Bug 与稳定性

今日报告了多个影响核心功能的 Bug，部分已有修复方案。

- **严重**：
  - **升级失败/版本不同步**：后端更新后前端未更新 ([#1195](https://github.com/agentscope-ai/CoPaw/issues/1195), [#1315](https://github.com/agentscope-ai/CoPaw/issues/1315))。维护者需检查 `copaw app` 启动时的静态文件服务逻辑。
  - **消息压缩导致 API 崩溃**：长对话压缩后消息数量不匹配，导致 GLM 等模型调用失败 ([#1222](https://github.com/agentscope-ai/CoPaw/issues/1222))。
- **中等**：
  - **v0.0.7 Skill 列表重复**：显示 active, customized 及 venv 中的重复项 ([#1370](https://github.com/agentscope-ai/CoPaw/issues/1370))。
  - **Base URL 无法填写**：v0.0.6 版本中配置页面无法输入 base_url ([#1358](https://github.com/agentscope-ai/CoPaw/issues/1358))，已关闭可能已修复。
- **已有 Fix PR**：
  - **CLI 更新命令**：[PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278) 提出了 `copaw update` 命令，旨在自动化解决升级难题。
  - **DingTalk 会话过期**：Issue [#1304](https://github.com/agentscope-ai/CoPaw/issues/1304) 提到多端登录导致 Cronjob 推送失败，需关注连接保活机制。

### 6. 功能请求与路线图信号

- **多工作区架构**：[PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375) 提出了完整的多智能体/多工作区架构。虽然目前是 WIP 状态，但这表明项目正朝着支持并行运行多个独立 Agent 的方向演进，这是迈向 Multi-Agent 系统的关键一步。
- **模型支持扩展**：
  - [PR #1376](https://github.com/agentscope-ai/CoPaw/pull/1376) 添加了 **MiniMax** 作为内置 LLM 提供商，支持 20万 Token 上下文。
  - [PR #1012](https://github.com/agentscope-ai/CoPaw/pull/1012) 增加了 MCP OAuth 2.1 自动发现支持，提升了 MCP 集成的安全性。
- **飞书增强**：[PR #1231](https://github.com/agentscope-ai/CoPaw/pull/1231) 为飞书通道增加了 Card V2 格式支持，优化富文本与图片消息体验。

### 7. 用户反馈摘要

- **痛点**：
  - **升级体验差**：用户普遍反映 Python 包升级后，Web 界面经常无法同步更新，导致困惑 ([#1195](https://github.com/agentscope-ai/CoPaw/issues/1195))。
  - **配置复杂**：自定义模型（如 DeepSeek, 硅基流动）配置失败率高，报错信息模糊（如 `AGENT_UNKNOWN_ERROR`），难以排查 ([#1319](https://github.com/agentscope-ai/CoPaw/issues/1319), [#1292](https://github.com/agentscope-ai/CoPaw/issues/1292))。
- **满意点**：
  - 社区对 **Tool Guard**（工具护卫）功能表示欢迎，认为这是提升本地部署安全性的必要手段。
  - 对 Skill 和 MCP 扩展性的讨论热烈，显示用户对 CoPaw 的潜力有很高期待。

### 8. 待处理积压

- **Issue #280 (Discussion)**：关于内置 Skills/MCPs 的讨论已持续 10 天，仍有新回复，建议维护者尽快给出官方 Roadmap 或投票机制。
- **Multi-agent PR ([#1375](https://github.com/agentscope-ai/CoPaw/pull/1375))**：这是一个破坏性更新，目前处于 Preview 阶段，需要社区和核心开发者进行详尽审查。
- **Issue #1188**：用户请求提供更明确的更新/升级途径，建议优先合并 [PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278) 以缓解升级痛点。

---
**分析师建议**：鉴于 v0.0.7 刚刚发布，建议团队优先处理 v0.0.6 遗留的**前端版本同步**问题，并密切关注新引入的 **Skill 列表重复** Bug ([#1370](https://github.com/agentscope-ai/CoPaw/issues/1370))。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是基于 ZeptoClaw 项目 2026-03-12 的 GitHub 动态生成的日报。

# ZeptoClaw 项目日报 (2026-03-12)

## 1. 今日速览
ZeptoClaw 项目今日保持了**极高的维护活跃度与迭代速度**。核心开发者 @qhkm 发布了 **v0.7.6 版本**，重点修复了认证安全与文件系统边界问题，并增强了 CLI 交互体验。过去 24 小时内共有 **11 条 Issue 更新**（关闭 8 条，新增 3 条）和 **4 条 PR 更新**，显示出维护者正在高效清理积压任务（如 JWT 升级）并快速响应安全加固需求。社区方面出现了关于 Docker 构建兼容性和 Telegram 体验改进的反馈。

## 2. 版本发布
**[v0.7.6](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6)**
此版本主要聚焦于**安全性加固**与**交互体验优化**，无明确破坏性变更，建议所有用户升级以获得安全补丁。
- **安全修复**:
    - **Hardened inbound auth**: 加固了入站 Webhook 认证与身份处理逻辑。
    - **Filesystem boundaries**: 增强了文件系统写入与挂载验证，防止符号链接、TOCTOU 及硬链接绕过攻击。
- **功能增强**:
    - **Slash command suggestions**: 在 CLI 交互模式（`zeptoclaw agent`）中添加了斜杠命令的自动补全与建议功能。
- **Bug 修复**:
    - 修复了 Claude 订阅 Token 警告的去重问题。

## 3. 项目进展
今日项目在安全性与易用性方面取得了实质性进展，共有 2 个 PR 被合并。
- **[PR #324](https://github.com/qhkm/zeptoclaw/pull/324) [MERGED] fix: harden inbound auth and filesystem boundaries**
  这是今日最重要的合并，直接响应了关于文件系统安全边界和 Webhook 认证的多个 Issue。它修复了潜在的路径遍历与认证绕过风险，显著提升了作为本地/自托管 AI 助手的安全性基线。
- **[PR #323](https://github.com/qhkm/zeptoclaw/pull/323) [MERGED] feat: slash command suggestions in CLI interactive mode**
  集成了 `rustyline` 补全功能，使得 CLI 模式下的操作更加流畅，降低了用户的记忆负担，解决了 [Issue #322](https://github.com/qhkm/zeptoclaw/issues/322) 的需求。

## 4. 社区热点
今日最活跃的讨论集中在**部署兼容性**与**集成请求**：
- **[Issue #333](https://github.com/qhkm/zeptoclaw/issues/333) Dockerfile.dev podman cache mount error**: 用户报告 `Dockerfile.dev` 在 Podman 5.7 环境下构建失败，涉及 BuildKit 语法兼容性问题。这反映了部分开发者在使用非 Docker 容器运行时遇到的阻碍。
- **[Issue #334](https://github.com/qhkm/zeptoclaw/issues/334) Add Zeptoclaw to Shelldex**: 社区成员提议将项目收录至 Shelldex 目录，表明 ZeptoClaw 正在获得更多 AI 工具导航站的关注。

## 5. Bug 与稳定性
今日报告了 1 个中高优先级的构建/环境问题，以及若干已被快速解决的内部维护 Bug。
- **🔴 [P2-High] [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333) podman cache mount build error**
  - **现状**: 开发环境构建受阻。
  - **状态**: 待解决 (OPEN)。
  - **方案**: 提议添加 `--buildkit` 标志或调整 Dockerfile 语法。
- **✅ [P3-Normal] [Issue #185](https://github.com/qhkm/zeptoclaw/issues/185) Upgrade jsonwebtoken 9 → 10**
  - 虽然标记为 breaking change，但该维护任务今日已被处理并关闭，表明依赖栈正在积极更新。

## 6. 功能请求与路线图信号
- **🧠 LLM 提供商扩展 (Zhipu AI)**:
  - **[PR #335](https://github.com/qhkm/zeptoclaw/pull/335) [OPEN]**: 正在增加对智谱 AI (Zhipu/GLM) API Key 的校验支持。
  - **信号**: 项目正在积极扩展对国产/非主流大模型的支持，这是提升用户覆盖率的关键一步。
- **📲 Telegram 体验优化**:
  - **[Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)**: 用户强烈请求改进 Telegram 的 Markdown 渲染及“正在输入”指示器。
  - **信号**: 尽管最近修复了 Telegram 的用户名逻辑，但在消息展示层面的体验仍有提升空间。

## 7. 用户反馈摘要
- **部署痛点**: 使用 Podman 的用户遇到了构建脚本兼容性问题，说明项目的 CI/CD 或开发文档可能默认强绑定 Docker BuildKit 特性。
- **交互体验**: CLI 自动补全功能的上线受到关注，表明本地交互式使用场景是核心用户的高频需求。
- **渠道质量**: Telegram 用户对消息格式化（Markdown）的缺失感到不满，认为这影响了 Bot 的专业度。

## 8. 待处理积压
- **[PR #335](https://github.com/qhkm/zeptoclaw/pull/335) (Zhipu Key Validation)**: 目前处于开启状态，这是扩展 LLM 提供商支持的关键 PR，建议维护者尽快 Review 以支持更多模型。
- **[Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) (Telegram Improvements)**: 这是一个典型的“体验优化”需求，虽然不影响核心功能，但对终端用户感知影响较大，建议纳入近期迭代。

---
**数据来源**: GitHub ZeptoClaw Repository  
**分析师**: AI Open Source Analyst  
**日期**: 2026-03-12

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-12)

**分析师洞察**：EasyClaw 今日呈现出“高频迭代与社区修复并行”的态势。项目在 24 小时内连续推出了 2 个版本更新，主要聚焦于 macOS 平台的安装体验优化；同时，社区提交的首个 PR 标志着外部贡献者开始参与代码共建，建议维护者尽快合入以保持社区热情。

---

## 1. 今日速览

过去 24 小时，EasyClaw 项目活跃度**中等偏高**。项目方在一天内发布了 **v1.6.6 和 v1.6.7** 两个维护版本，显示出维护者对用户体验（特别是 macOS 端）的快速响应能力。社区方面，**Issue #16**（OpenAI OAuth 故障）已被迅速关闭，证明核心功能的稳定性维护在有效进行。此外，项目迎来了一个待合并的 **PR #15**，旨在修复 macOS 下的 UI 显示问题，这通常是社区活跃度提升的早期信号。

## 2. 版本发布

今日连续发布两个版本，重点解决了 macOS 平台的部署问题：

*   **[Release] v1.6.7** ([View](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7))
*   **[Release] v1.6.6** ([View](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6))

**更新重点与迁移注意**：
两个版本的 Release Notes 均聚焦于解决 macOS 的**应用签名问题**。
*   **核心痛点**：macOS Gatekeeper 会拦截未签名应用，提示“已损坏”。
*   **解决方案**：更新日志提供了详尽的 Terminal 命令修复指南。
*   **评估**：虽然这解决了安装阻碍，但频繁发布说明可能是在尝试修复构建流水线中的签名配置。建议用户优先下载 **v1.6.7** 最新版。

## 3. 项目进展

今日项目主要修复了关键 API 连接问题，并收到了 UI 优化贡献：

*   **Issue #16 [CLOSED]**: 修复了 OpenAI OAuth 认证失败的问题。该问题的关闭意味着核心 AI 服务的连接已恢复正常，用户现在可以顺利授权使用 OpenAI 相关功能。
*   **PR #15 [OPEN]**: 收到了来自社区 @mylinkedai 的提交，修复了 macOS Dock 和系统托盘中的应用图标显示问题。这虽然是一个小的 UI 细节，但对提升应用在 Mac 上的专业度和原生体验至关重要。

## 4. 社区热点

今日社区关注度最高的单一事件为 **OpenAI OAuth 认证失效**。

*   **[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)**: 该 Issue 由 @westisc 提出，指出便携版和安装版均无法通过 OAuth 验证。
    *   **分析**：OAuth 是连接第三方 AI 服务的入口，此类故障属于 P0 级阻断性 Bug。该 Issue 在创建后一天内即被关闭，暗示维护者可能已在服务端或 v1.6.6/v1.6.7 中进行了热修。

## 5. Bug 与稳定性

*   **P0 - OpenAI 认证中断** ([Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16))
    *   **现象**：用户在尝试连接 OpenAI 服务时遇到拦截/报错。
    *   **影响范围**：全平台（便携版/安装版）。
    *   **状态**：已修复 (Issue 已关闭)。
*   **P3 - macOS 应用“已损坏”提示** (Release Notes 反馈)
    *   **现象**：macOS 用户无法直接打开应用。
    *   **原因**：缺少开发者签名。
    *   **状态**：需用户手动运行命令绕过 Gatekeeper，暂无自动化修复方案。

## 6. 功能请求与路线图信号

虽然今日无显性的“新功能请求” Issue，但 **PR #15** 传递了明确的路线图信号：
*   **macOS 原生体验优化**：社区开始关注非功能性的 UI 细节（Dock/Tray 图标）。这通常发生在一个项目功能趋于稳定、用户开始将其作为主力工具长期驻留系统时。若该 PR 被合并，预示着下一版本将重点打磨桌面端的集成体验。

## 7. 用户反馈摘要

从今日的 Issue 和 Release 反馈中提炼出以下用户画像：
*   **核心诉求**：用户高度依赖 OpenAI 接口，OAuth 的稳定性是刚需。
*   **平台分布**：存在大量 macOS 用户，且对“应用未签名”带来的繁琐操作感到敏感（Release Notes 中特意强调了这一点）。
*   **使用场景**：Issue 提及“便携版”，表明部分用户有在多设备间迁移使用 EasyClaw 的需求。

## 8. 待处理积压

*   **PR #15 待合并** ([Link](https://github.com/gaoyangz77/easyclaw/pull/15))
    *   **状态**：Open，今日活跃。
    *   **建议**：该 PR 涉及 macOS 视觉体验，属于低成本高收益的改进。建议维护者 @gaoyangz77 尽快进行 Code Review 并合并，以鼓励首位外部贡献者 @mylinkedai。

</details>