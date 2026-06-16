# OpenClaw 生态日报 2026-06-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-16 22:35 UTC

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

这是一份基于 2026-06-16 至 2026-06-17 数据窗口的 OpenClaw 开源项目动态日报。

---

# 🕵️‍♂️ OpenClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
*   **整体活跃度极高，社区处于“高负荷运转”状态**：过去 24 小时内 Issues 与 PR 的活跃度均触达 500 条上限（合计近 1000 次活动），项目受众基础庞大。
*   **开发流水线推进果断**：单日处理了 143 个 PR（合并或关闭），说明维护团队和自动化机器人正处于高强度的审查与清理周期中。
*   **重心向可靠性与多端架构倾斜**：今日发布的 `v2026.6.8` 正式版与 Beta 版主要修复了消息渠道的脆弱性；同时，社区讨论的焦点集中在多智能体编排、网关内存溢出（OOM）以及跨平台（Linux/Windows）支持上。

## 2. 版本发布
**[v2026.6.8](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8) & [v2026.6.8-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.2)**
*   **核心更新**：大幅增强了 Telegram 和 WhatsApp 的渠道投递能力，使其支持更丰富的结构化富文本（包括表格、列表、可折叠引用块、保留主动换行等）。
*   **稳定性优化**：改进了保留 Prompt 的 CLI 后端投递机制；弃用了脆弱的原生草稿迁移；提升了富媒体投递的安全性。

## 3. 项目进展
今日共有 143 个 PR 被合并或关闭，涵盖了从底层重构到前端 UI 修复的全方位推进：
*   **自动化 CI 与基础设施增强**：合并了 [PR #68936](https://github.com/openclaw/openclaw/pull/68936)，引入了 PR 审查自动修复管线和 Windows 后台守护进程，这将极大提升未来社区贡献的合流效率。
*   **记忆系统架构演进**：[PR #88504](https://github.com/openclaw/openclaw/pull/88504) 引入了多槽位记忆角色架构，允许记忆插件（如召回、压缩、捕获）组合使用，而非全局互斥，这是 Agent 长期记忆能力的重要里程碑。
*   **渠道消息投递健壮性**：[PR #89038](https://github.com/openclaw/openclaw/pull/89038) 修复了 QQ Bot WebSocket 断线重连导致的消息丢失问题；[PR #83988](https://github.com/openclaw/openclaw/pull/83988) 修复了 Telegram TTS 语音消息替换文本时的“闪烁”抖动问题。

## 4. 社区热点
*   **🔥 跨平台客户端呼声高涨**：[Issue #75](https://github.com/openclaw/openclaw/issues/75)（109 评论，79 👍）请求开发 Linux 和 Windows 原生客户端。目前 OpenClaw 已有 macOS/iOS/Android 客户端，桌面端缺位成为 Linux/Windows 用户的最大痛点。
*   **🧠 核心架构重构讨论**：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)（30 评论）提出了将核心会话/记录状态迁移至 SQLite 的计划。维护者希望通过“抽象缝隙”逐步提交小型 PR 来降低重写风险，引发了关于架构演进策略的深入讨论。
*   **🔒 MCP 安全执行诉求**：[Issue #78308](https://github.com/openclaw/openclaw/issues/78308) 提出 MCP 工具调用应引入渠道批准信封，让状态改变（如发邮件、写入金库）等高风险操作需用户显式同意，这反映了用户对 Agent 自动化执行权限的安全焦虑。

## 5. Bug 与稳定性 (按严重度排序)
*   **🔴 P0 - 核心状态丢失**：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 与 [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)（P0/P1）。子智能体任务完成时结果静默丢失，且无重试或通知，多智能体编排极不稳定。已有相关 PR 进入审查阶段。
*   **🔴 P1 - 网关 OOM 与内存泄漏**：[Issue #54155](https://github.com/openclaw/openclaw/issues/54155) 和 [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) 报告网关进程在运行 4 天后内存从 389MB 暴增至 14.7GB 导致崩溃。根本原因是 `sessions.json` 无限增长且包含大量重复的 `skillsSnapshot`。
*   **🟠 P1 - 意外硬编码引发安全担忧**：[Issue #51429](https://github.com/openclaw/openclaw/issues/51429) 爆出有开发者将本地工作路径（`/Users/wangtao`）硬编码进代码并被发布，导致其他用户环境被强行创建无关目录。
*   **🟡 P2 - 飞书与 RISC-V 兼容性**：[Issue #54253](https://github.com/openclaw/openclaw/issues/54253)（已关闭）报告在 RISC-V64 架构上运行报错；[Issue #48949](https://github.com/openclaw/openclaw/issues/48949) 报告配置 HTTP 代理后飞书渠道报错。

## 6. 功能请求与路线图信号
*   **多代理独立 Wiki 知识库**：[Issue #63829](https://github.com/openclaw/openclaw/issues/63829)（9 👍）希望每个 Agent 在多智能体设置中维护独立的知识库，而不是共享全局配置。
*   **精细化的文件系统沙箱**：[Issue #7722](https://github.com/openclaw/openclaw/issues/7722) 和 [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) 都呼吁提供更细粒度的文件和网络访问控制（如允许白名单访问私有网络）。
*   **UI/UX 改进（即将落地）**：[PR #93587](https://github.com/openclaw/openclaw/pull/93587) 提出了 WebChat 控件台的 `/label` 和 `/new <name>` 命令，允许用户自定义会话名称，此功能极有可能会快速合入主线。

## 7. 用户反馈摘要
*   **痛点 1：Agent 的“幻觉式完成”**：用户极度反感 Cron 定时任务在工具调用失败时，LLM 会编造看似合理的输出结果并发送，而不是干净地失败（[Issue #49876](https://github.com/openclaw/openclaw/issues/49876)）。这破坏了用户对自动化的信任。
*   **痛点 2：私有部署与数据安全**：中国区用户强烈反馈配置文件中的 API Key 明文存储，且日志未脱敏（[Issue #64046](https://github.com/openclaw/openclaw/issues/64046)），阻碍了企业级采用。
*   **好评：跨渠道连通的野心**：用户对 OpenClaw 能够串联 Telegram, WhatsApp, Discord, Google Chat 甚至飞书、QQ Bot 感到兴奋，但也反馈渠道适配的边缘 Bug 较多，期待稳定性的提升。

## 8. 待处理积压
以下高价值议题已停滞或长时间等待决策，建议维护团队（ClawSweeper）介入分流：
*   **[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)** (P1)：Signal 守护进程在重启时发生竞态条件，导致僵尸进程和发送失败。自 2 月提出至今已有 PR 开启，但未合并。
*   **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)** (P1)：写入工具缺乏 Append（追加）模式，导致多并发定时任务直接覆盖共享文件，引发数据丢失。
*   **[Issue #58514](https://github.com/openclaw/openclaw/issues/58514)** (P1)：Google Chat 的群组消息被静默忽略，目前仅支持私聊。
*   **PR 积压**：[PR #46502](https://github.com/openclaw/openclaw/pull/46502) 尝试添加核心看门狗服务，涉及极大的安全边界变更，卡在审查流程中；[PR #86655](https://github.com/openclaw/openclaw/pull/86655) 为 Anthropic Claude 模块引入桥接扩展，等待架构确认。

---
*数据来源：OpenClaw GitHub Repository | 分析生成时间：2026-06-17*

---

## 横向生态对比

这里是为您生成的 2026 年 6 月 17 日个人 AI 助手与智能体开源生态横向对比分析报告。

---

# 📊 2026.06.17 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**从“概念验证”向“重度生产力工具”跨越**的爆发期。项目间的竞争核心已从单纯的 LLM 接口对接，演变为对**长程记忆架构、多模态跨平台路由（如 IM 渠道集成）、以及底层资源调度（如 Cron 任务、沙箱安全）**的深度博弈。同时，围绕 MCP（Model Context Protocol）和 A2A 等新兴通信协议的扩展支持，标志着生态正在加速走向标准化与微服务化。企业级诉求（不可变基础设施、凭证安全隔离、细粒度权限）与极客诉求（本地模型兼容、Token 极限压缩、WebUI 编排）正在双线并行演进。

## 2. 各项目活跃度对比
*注：GitHub 活动度统计通常有上限（如 50 条），触顶代表极度活跃。健康度评估综合了 Bug 修复速度、社区互动和代码合流情况。*

| 项目名称 | Issues 活跃 | PR 活跃 | 今日 Release | 项目阶段 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~50 (触顶) | ~50 (143个处理) | **v2026.6.8** 正式版 | 成熟扩展期 | 🟢 极高 (基础设施强大，处理果断) |
| **Hermes Agent** | ~50 (触顶) | ~50 (44个待审) | 无 | 高速重构期 | 🟢 高 (P0/P1 响应极快，核心重构中) |
| **NanoBot** | 适中 | 23 (14个处理) | 无 | 体验打磨期 | 🟢 极高 (Bug 清扫高效，合流极快) |
| **ZeroClaw** | ~33 | ~50 (23个处理) | 无 | 架构调整期 | 🟢 高 (TUI/Web 对齐，RFC 治理) |
| **IronClaw** | ~50 (触顶) | ~50 (17个处理) | 无 | 深度内测期 | 🟡 中高 (Dogfooding 阶段，偶有阻断性 Bug) |
| **CoPaw** | ~41 | ~40 (20个处理) | **v1.1.12-beta.1**| 快速迭代期 | 🟡 中高 (安全加固中，上下文死锁频发) |
| **PicoClaw** | 15 | 16 (13个处理) | Nightly 构建 | 稳定维护期 | 🟠 需警惕 (积压了 12 个高危安全问题) |
| **NanoClaw** | 6 | 8 (4个处理) | 无 | 企业适配期 | 🟢 高 (聚焦网络与不可变基础设施) |
| **NullClaw** | 2 | 3 (0个处理) | 无 | 架构停滞期 | 🟠 需关注 (核心调度阻断，PR 审查积压) |
| **LobsterAI**| 1 | 3 (3个处理) | 无 | 细节打磨期 | 🟢 健康 (重协作，UI/UX 迭代) |
| **Moltis** | 0 | 2 (0个处理) | 无 | 平稳运维期 | 🟢 健康 (低噪音，功能横向拓展) |
| **TinyClaw** | 0 | 1 (0个处理) | 无 | 底层修复期 | 🟡 中 (活跃度低，修复 Windows 阻断) |
| **ZeptoClaw**| 0 | 1 (0个处理) | 无 | 停滞/静默期 | 🟠 需关注 (无业务推进，仅依赖机器人提 PR) |

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与头部标杆**，OpenClaw 展现出了统治级的工程吞吐能力（单日处理 143 个 PR）。
*   **技术路线差异**：当其他项目还在解决基础运行崩溃（如 NullClaw, CoPaw）或单一维度优化（如 NanoBot 的 Token 截断）时，OpenClaw 已经进入到**“多槽位记忆架构”**（摒弃全局互斥）和**“跨渠道高并发投递稳定性”**的深水区。
*   **社区与生态优势**：它是少数拥有千人级真实反馈社区的项目。其受众基础庞大，迫使它引入了高度自动化的 CI 修复管线。相比 Hermes Agent 的“极客自嗨”或 NanoClaw 的“企业特供”，OpenClaw 在多端连通（WhatsApp/TG/飞书/QQ）的野心最大，致力于成为全端个人 AI 中枢。

## 4. 共同关注的技术方向
通过横向对比，今日多个项目在以下三个技术方向上产生了强烈的“共鸣”：

1.  **上下文工程与长程记忆重构**
    *   **痛点**：长对话导致的 Token 爆栈与进程死锁。
    *   **涉及项目**：OpenClaw (多槽位记忆)、CoPaw (子 Agent 触发压缩导致死锁)、NanoBot (按 Token 精细截断)、ZeroClaw (长会话恢复历史结构崩坏)。
    *   **趋势**：简单的字符截断已被淘汰，基于向量数据库、缓存断点和摘要压缩的“智能分层记忆”成为刚需。
2.  **安全审批与执行边界控制**
    *   **痛点**：Agent 盲目执行高危操作（如发邮件、改系统文件）或凭证泄露。
    *   **涉及项目**：OpenClaw (MCP 调用信封批准)、PicoClaw (工具执行 panic 恢复)、IronClaw (Slack OAuth DM 验证)、CoPaw (跨实例密钥隔离)。
    *   **趋势**：从“全自动”向“带刹车的全自动”演进，针对状态改变的工具调用引入显式的人机交互审批流。
3.  **跨平台/跨协议路由网关**
    *   **痛点**：将 LLM 的非结构化输出适配给各种带有严格格式限制的 IM 软件或通信协议。
    *   **涉及项目**：OpenClaw (TG 富文本优化)、Hermes (多平台渠道接入诉求)、NanoClaw (WhatsApp 媒体路由丢失)、ZeroClaw (WS 生命周期解耦)。

## 5. 差异化定位分析

*   **OpenClaw / Hermes Agent**：定位为**全栈式通用 AI 中枢**。强调多端连通、重度工作流、高度可扩展，争夺的是“下一代操作系统”的入口。
*   **NanoBot / CoPaw / LobsterAI**：定位为**重度效型个人助手/生产力工具**。高度依赖 WebUI 和桌面端交互，侧重于对话体验优化、本地知识库（RAG）和轻量级日常任务编排。
*   **IronClaw / ZeroClaw**：定位为**下一代工程化 Agent 框架**。侧重于 Engine V2 运行时重构、多租户隔离、可观测性追踪和细粒度的开发者控制。
*   **NanoClaw / NullClaw**：明确瞄向**企业级自动化部署**。专注于不可变镜像环境、Tailscale 等内网穿透网络支持，以及重度依赖定时任务进行无头运行。

## 6. 社区热度与成熟度分层
*   **狂飙突进期（高优迭代）**：**NanoBot** 和 **CoPaw** 正在疯狂吸收社区反馈，进行极速的 Bug 清扫和功能堆积，反馈闭环极快。
*   **质量巩固与架构阵痛期**：**IronClaw**（Reborn 架构重构）、**ZeroClaw**（v0.8.x 会话解耦）和 **Hermes Agent**（网关重构）正处于底层大换血的阵痛期，高频修复阻断性 Bug（如 OAuth 失效、死锁）。
*   **稳态成熟期**：**OpenClaw** 拥有最成熟的流水线和版本发布节奏（今日发布正式版），开始关注“开发者体验（自动修复管线）”等高层次需求。
*   **危险预警期**：**PicoClaw**（安全漏洞积压被自动标记陈旧）、**NullClaw**（核心调度 PR 停滞 2 个月）和 **ZeptoClaw**（社区彻底静默）的维护者出现了精力瓶颈，面临社区信任流失的风险。

## 7. 值得关注的趋势信号

1.  **“幻觉式完成”带来的信任危机**：OpenClaw 社区今日爆发了对 Agent 编造任务结果的强烈抵触。这意味着 AI 智能体要真正落地生产，必须在底层约束 LLM 做到**“干净失败”**，而非迫于系统提示词的压力假装成功。
2.  **“不可变基础设施”的原生融合**：NanoClaw 针对 Docker 和预打包镜像的适配需求激增。传统的 CLI 直接拉取更新的模式正在被打破，未来的 AI Agent 必须在架构层面支持环境变量注入、只读文件系统隔离和旁路网关（如 Tailscale）接管。
3.  **MCP 与 A2A 协议的实质落地**：NanoBot 提出的 A2A/MCP 兼容，以及 OpenClaw 对 MCP 安全信封的需求，表明智能体间、以及智能体与外部工具的“标准化握手”已经从纸上谈兵进入到了具体的代码实现阶段。
4.  **Token 成本极其敏感**：从 Hermes Agent 的缓存命中率暴跌引发恐慌，到 CoPaw 规划集成 Headroom 压缩层，说明在长任务和多代理编排中，API 调用成本依然是生死攸关的瓶颈。任何能无损削减上下文体积的底层优化，都将获得压倒性的社区支持。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这是一份基于您提供的 GitHub 数据，为您生成的 **NanoBot** (HKUDS/nanobot) 项目 2026 年 06 月 17 日动态日报。

---

# 🤖 NanoBot 开源项目日报 (2026-06-17)

## 1. 今日速览
NanoBot 项目今日展现出极高的开发活跃度与社区生命力。在过去 24 小时内，项目迎来了 **23 次 PR 更新**（其中高达 14 个被顺利合并或关闭），但未伴随新版本的正式发布。核心维护团队（如 chengyongru, yu-xin-c 等）显然在进行一次集中的 **Bug 清扫与体验优化战役**，重点修复了安装脚本、API 重试机制、网络代理以及记忆上下文截断等核心痛点。大量来自社区开发者的优质 PR 被合并，表明项目的代码审查通道顺畅，整体正处于快速迭代且高度健康的阶段。

## 2. 版本发布
**本日无新版本发布 (0 Releases)。** 考虑到今日合并了大量基础架构修复与体验优化的 PR，推测项目正在为下一个大版本或重要的稳定版进行积累和预热。

## 3. 项目进展
今日共有 14 个 PR 被合并/关闭，项目在以下几个关键领域取得了实质性向前迈进：
* **安装与环境兼容性大改善：** 合并了针对 macOS 受限 Python 环境的修复 ([PR #4368](https://github.com/HKUDS/nanobot/pull/4368))，以及 Docker/curl 安装脚本的规范化 ([PR #4365](https://github.com/HKUDS/nanobot/pull/4365))，大幅降低了新用户的入门门槛。
* **API 与大模型兼容性增强：** 扩展了 OpenAI 兼容接口的 Embeddings 支持 ([PR #3401](https://github.com/HKUDS/nanobot/pull/3401))，并针对 Kimi K2.7 模型适配了思考模式 ([PR #4361](https://github.com/HKUDS/nanobot/pull/4361))。
* **核心交互与记忆机制优化：** 默认开启了闲置自动压缩功能 ([PR #4370](https://github.com/HKUDS/nanobot/pull/4370))，优化了 Dream 模式的空运行反馈 ([PR #4369](https://github.com/HKUDS/nanobot/pull/4369))，并修复了 API 空响应导致用户消息重复记录的严重 Bug ([PR #4358](https://github.com/HKUDS/nanobot/pull/4358))。
* **本地化与 Token 计算优化：** 修复了由于按字符截断导致中英文/代码语境下 Token 爆表的问题，改为按 Token 限制 ([PR #4352](https://github.com/HKUDS/nanobot/pull/4352))。

## 4. 社区热点
今日讨论最热烈、影响最深远的议题主要集中在**多生态集成与底层记忆架构**：
* **跨协议通信落地：** [Issue #4362](https://github.com/HKUDS/nanobot/issues/4362) 讨论了 MetaVision AI 工具实现 A2A/MCP 兼容并被 NanoBot 发现，这证明 NanoBot 在 Agent 通信协议（A2A/MCP）上的支持已走在了前列，吸引了外部 AI 平台主动寻求接入。
* **Dream 机制与上下文污染争议：** [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) 反映了关闭 `dream.enabled` 后，历史记录仍被注入 System Prompt。这暴露了用户对 Token 成本和上下文纯净度的极高敏感度，社区期望拥有更绝对的控制权。
* **WebUI 体验受重视：** WebUI 端的功能补全和 Bug 修复占据了今日工单的半壁江山，表明开发者群体对图形化管理的依赖度正在上升。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已在 24 小时内光速修复（展现了维护者极高的响应素质）：

* **[P0/严重 - 已修复] API 空响应导致消息重复 ([Issue #4079](https://github.com/HKUDS/nanobot/issues/4079))**
  * 现象：OpenAI 兼容 API 返回空响应并触发重试时，会导致用户的单次对话被重复持久化。
  * 状态：已通过 [PR #4358](https://github.com/HKUDS/nanobot/pull/4358) 修复。
* **[P1/高危 - 已修复] 流式传输超时配置导致崩溃 ([Issue #4065](https://github.com/HKUDS/nanobot/issues/4065))**
  * 现象：环境变量 `NANOBOT_STREAM_IDLE_TIMEOUT_S` 配置为非法字符串（如 abc）时，会直接抛出 `ValueError` 导致流式输出崩溃。
  * 状态：已通过 [PR #4363](https://github.com/HKUDS/nanobot/pull/4363) 修复，增加了集中校验和安全回退。
* **[P1/高危 - 已提交 PR] 本地大模型被代理拦截 ([Issue #4366](https://github.com/HKUDS/nanobot/issues/4366))**
  * 现象：宿主机配置了全局代理后，`httpx` 错误地将发往 `localhost` 或局域网内 Ollama/vLLM 的请求也通过代理发送，导致本地模型连接失败。
  * 状态：等待 [PR #4367](https://github.com/HKUDS/nanobot/pull/4367) 合并。
* **[P2/中等 - 待处理] Docker 安装脚本报错 "end of file unexpected" ([Issue #4360](https://github.com/HKUDS/nanobot/issues/4360))**
  * 现象：在 `debian:13` 全新容器中执行安装脚本时，因 Shell 解析问题报错（疑似嵌套执行问题），阻碍了 Docker 环境的部署。

## 6. 功能请求与路线图信号
从现有的 Issue 和 PR 中，可以清晰地捕捉到项目接下来的演进方向：
* **WebUI 成为一等公民：** 社区不仅要求修复 WebUI 的局域网访问 Bug ([Issue #4364](https://github.com/HKUDS/nanobot/pull/4364))，还提交了庞大且功能完备的 WebUI 自动化管理视图 PR ([PR #4330](https://github.com/HKUDS/nanobot/pull/4330))，可视化任务编排将是下一阶段的重点。
* **核心上下文工程重构：** [PR #4371](https://github.com/HKUDS/nanobot/pull/4371) 提出在 Recent History 前增加缓存断点，[Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) 报告了工作区读写不对称。这些信号表明，项目正在进行深度的 **Prompt 压缩与缓存优化**，这对于处理长周期任务的 AI 助手至关重要。
* **离线与弱网支持：** [PR #3662](https://github.com/HKUDS/nanobot/pull/3662) 试图在无网络环境下降级 Token 估算。注重隐私和本地化部署是企业级应用的诉求，预计离线/本地优先的特性会被纳入路线图。

## 7. 用户反馈摘要
* **痛点 1：Docker/容器化部署不够顺滑。** 多位用户反馈在最新版 Debian/Clean OS 上执行一键安装脚本遇到 Shell 兼容性问题（[Issue #4360](https://github.com/HKUDS/nanobot/issues/4360)）。
* **痛点 2：复杂网络环境下的配置盲区。** 用户（如 Struggle1992）在内网部署本地大模型时，常常被系统级别的 Proxy 环境变量“背刺”，希望内置默认绕过局域网的逻辑。
* **痛点 3：中英文语境下的 Token 失衡。** 长期以来基于字符数的截断策略，让中文用户或重代码用户在长对话中更容易遭遇“上下文超限”，开发者 waelanter 提交的按 Token 截断方案 ([PR #4352](https://github.com/HKUDS/nanobot/pull/4352)) 获得了广泛的共鸣与认可。

## 8. 待处理积压
以下重要但停留时间较长的 PR/Issue 需要引起核心团队的重视，避免贡献者流失：
* **[PR #3662](https://github.com/HKUDS/nanobot/pull/3662)**：关于离线环境下 Token 估算降级的优化。该 PR 已提交超过 40 天，虽涉及核心底层能力，但近期有活跃更新，需尽快进行 Code Review。
* **[PR #4053](https://github.com/HKUDS/nanobot/pull/4053)**：防止只读根目录被写入路径继承。这是一个涉及文件系统安全边界的增强提议，已停留近 20 天。
* **[PR #4330](https://github.com/HKUDS/nanobot/pull/4330)**：WebUI 的自动化管理视图。这是一个代码变动巨大、功能极其丰富的社区贡献，目前在 Open 状态，需要维护者明确表态是否接受该架构设计，以鼓励贡献者。

---
*分析师寄语：NanoBot 当前正处于“疯狂吸收社区贡献、快速打磨细节”的黄金阶段。今日合并的 PR 极大地增强了多模型、多部署环境的健壮性。建议项目方尽快发布一个 Patch 版本，以安抚目前在 Docker 代理和 Token 截断上受阻的用户。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是 2026-06-17 Hermes Agent 项目的 GitHub 动态日报。

# Hermes Agent 项目动态日报 (2026-06-17)

## 1. 今日速览
今日 Hermes Agent 社区保持高度活跃，过去 24 小时内共有 50 条 Issue 更新（46 条新开/活跃）和 50 条 PR 更新（44 条待合并）。项目当前处于高强度迭代与漏洞集中修复阶段，大量提交围绕核心网关稳定性、多平台网关集成（WhatsApp, Signal）以及自建模型网关兼容性展开。虽然今日无新版本发布，但针对 P0/P1 级别的严重故障（如 Anthropic OAuth 失效、Codex 缓存命中率暴跌）社区已迅速响应并提交了多处关键修复。

## 2. 版本发布
**无**。今日暂无新版本发布。从 PR 活跃度推测，项目或正在为下一个大版本（可能是 v0.16.x 或 v0.17）积累大量底层重构与稳定性修复。

## 3. 项目进展
今日有 6 个 PR 被合并或关闭，主要集中在前端桌面端体验与底层数据库健壮性：
*   **桌面端文件预览与下载修复**：关闭了修复通过远程网关下载制品时需要鉴权的 PR ([PR #46895](https://github.com/NousResearch/hermes-agent/issues/46895))。
*   **UI 交互优化**：推进了修复无工作区侧边栏创建新会话逻辑的 PR ([PR #45744](https://github.com/NousResearch/hermes-agent/issues/45744))。
*   **待合并的核心修复（已就绪）**：多个针对系统底层的 P1 级修复已提交待 Review，包括解决 SQLite 缺少 trigram tokenizer 导致崩溃的修复 ([PR #47482](https://github.com/NousResearch/hermes-agent/issues/47482))，以及修复网关在 provider 暂时性故障后导致用户消息重复写入的修复 ([PR #47346](https://github.com/NousResearch/hermes-agent/issues/47346))。

## 4. 社区热点
今日讨论最热烈的问题集中在**自定义模型路由与桌面端体验**：
*   **模型选择器与自定义网关适配**：[Issue #12655](https://github.com/NousResearch/hermes-agent/issues/12655)（7 评论）讨论了允许通过配置过滤特定 Provider；[Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011)（4 评论）强烈呼吁支持从 LiteLLM/one-api 等自托管网关自动发现模型。这表明大量进阶用户将 Hermes 作为本地或聚合大模型的统一交互壳。
*   **多平台支持扩展**：[Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950)（4 评论）提出了对标 OpenClaw，增加 Google Chat、IRC、LINE、QQ 等通讯渠道的接入。
*   **系统提示词优先级**：[Issue #47446](https://github.com/NousResearch/hermes-agent/issues/47446) 讨论了 Agent 执行时不遵守元工作流规则的问题，呼吁引入 Agent 级别的 pre-response hook，这反映了用户对 LLM 行为确定性控制的迫切需求。

## 5. Bug 与稳定性
今日报告了多个影响系统可用性的高危 Bug，部分已有对应修复 PR：
*   **[P1 / 严重] Anthropic OAuth 登录失效**：Anthropic 将 OAuth 端点迁移至 `platform.claude.com`，导致 Hermes PKCE 登录全面 404。已有修复 PR 提交 ([PR #47474](https://github.com/NousResearch/hermes-agent/issues/47474))。
*   **[P1 / 严重] OpenAI Codex 缓存命中率暴跌**：由于近期提交误删了 `session_id` 和 `x-client-request-id` 请求头，导致提示词缓存命中率从 95% 暴跌至 20%，严重增加 API 成本。已有修复 PR ([PR #47399](https://github.com/NousResearch/hermes-agent/issues/47399))。
*   **[P1 / 严重] Anthropic 文本块中工具调用丢失**：当模型将 tool-call 以文本形式输出时，Hermes 无法解析，导致 Agent 死循环。已有 PR 尝试挽救该逻辑 ([PR #47473](https://github.com/NousResearch/hermes-agent/issues/47473))。
*   **[P1 / 运维] 核心定时任务被禁用**：德语区 SysOps 报告 Personality 12 (P12) 环境下 23 个生命周期定时任务全部被禁用 ([Issue #47000](https://github.com/NousResearch/hermes-agent/issues/47000))。
*   **[P2 / 平台] WhatsApp 消息路由静默失败**：群组 JIDs 目标无法识别，静默回退到主频道，可能导致消息误发 ([Issue #41407](https://github.com/NousResearch/hermes-agent/issues/41407))。

## 6. 功能请求与路线图信号
*   **网关行为细粒度控制**：大量用户请求针对网关（如 Telegram/WhatsApp）进行更细化的控制。例如，限制 Telegram 菜单中的命令数量 ([Issue #33480](https://github.com/NousResearch/hermes-agent/issues/33480))，以及针对 Codex 压缩阈值的提示进行每会话单次显示的优化 ([Issue #42187](https://github.com/NousResearch/hermes-agent/issues/42187))。
*   **桌面端原生隔离与集成**：Windows 端用户抱怨桌面版未能复用现有的 WSL 安装环境，而是创建了独立的 `HERMES_HOME` ([Issue #40140](https://github.com/NousResearch/hermes-agent/issues/40140))。
*   **底层架构增强（已提交 PR）**：引入了可实时中断与转向的后台工作线程技能 ([PR #47480](https://github.com/NousResearch/hermes-agent/issues/47480))，以及针对 Kanban 任务单独覆盖推理力度的功能 ([PR #47476](https://github.com/NousResearch/hermes-agent/issues/47476))，显示项目正在深度优化任务调度与并发控制。

## 7. 用户反馈摘要
*   **痛点 - 凭证误脱敏导致代码损坏**：用户反馈内置的凭证脱敏管道（redaction pipeline）正则匹配过度，将代码中的正常变量（如 `MAX_TOKENS`, `sk_bulk`）错误替换为 `***`，直接破坏了 `write_file` 等工具的入参 ([PR #47348](https://github.com/NousResearch/hermes-agent/issues/47348))。
*   **痛点 - 内存与定时任务解耦不足**：Cron 任务硬编码了 `skip_memory=True`，导致自动化任务无法读取系统上下文，限制了高级自动化场景的应用 ([Issue #45768](https://github.com/NousResearch/hermes-agent/issues/45768))。
*   **满意度 - 架构开放性**：尽管有上述问题，社区对 Hermes 提供的 `memory`, `skill_manage` 等基础原语表达了高度认可，认为其已具备构建持久化、可学习 AI 助手的完备底座 ([Issue #3506](https://github.com/NousResearch/hermes-agent/issues/3506))。

## 8. 待处理积压
*   **OpenRouter 全局 400 错误 ([Issue #16804](https://github.com/NousResearch/hermes-agent/issues/16804))**：自 4 月底报告的 P1 级严重问题（0.9.0 版本所有 OpenRouter 请求均返回 HTTP 400 空响应）至今仍未有明确 Close 迹象，需核心团队优先排查请求体序列化问题。
*   **桌面端安装与跨平台稳定性**：Windows 10 安装失败 ([Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260))、macOS 段错误退出码 -11 ([Issue #46789](https://github.com/NousResearch/hermes-agent/issues/46789)) 以及更新后 ASAR 路径导致的启动崩溃 ([Issue #47439](https://github.com/NousResearch/hermes-agent/issues/47439))。桌面端在跨平台下的分发与底层路径管理仍存在技术债务，需要架构性梳理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是 **PicoClaw** 项目 2026 年 6 月 17 日的开源项目动态日报。数据基于过去 24 小时的 GitHub 活动（包含 15 条 Issue 更新与 16 条 PR 更新）进行深度分析。

---

### 📊 PicoClaw 项目动态日报 (2026-06-17)

#### 1. 📈 今日速览
PicoClaw 项目今日保持高度活跃，代码合并与清理工作取得显著进展，共有 13 个 PR 被成功合并或关闭。核心开发团队今日将重点放在了提升 Agent 运行时的**系统健壮性**与**多渠道消息处理的准确性**上，特别是修复了进程崩溃风险和 Telegram 论坛消息错位问题。
然而，今日数据中出现了一个异常信号：由安全研究员 `YLChen-007` 集中提交的**多达 12 条安全问题（Issue #3068-#3082）被标记为 `stale`（陈旧/不活跃）状态**，这些安全问题涉及 SSRF、越权和 Webhook 重放攻击，存在较高的潜在风险。此外，项目自动发布了最新的 Nightly 构建。

#### 2. 🚀 版本发布
- **[Release] Nightly Build (v0.2.9-nightly.20260616.c1ff5aa6)**: [查看 Release](https://github.com/sipeed/picoclaw/releases)
  - **说明**：这是基于 `main` 分支的自动化构建版本。
  - **注意事项**：属于不稳定版本，官方提示需谨慎使用，仅建议用于测试环境以体验最新特性。

#### 3. 🛠 项目进展
今日共有 13 个 PR 被合并或关闭，标志着项目在稳定性和外围扩展上迈出了一大步：
- **核心运行时防崩溃保护**：[PR #3132](https://github.com/sipeed/picoclaw/pull/3132) 为核心执行路径的 goroutine 添加了 `panic recovery` 机制。这是一个关键的稳定性提升，防止了因单个工具执行崩溃而导致整个 Agent 进程退出的情况。
- **修复 Telegram 渠道论坛回复错位**：[PR #3135](https://github.com/sipeed/picoclaw/pull/3135) 修复了 Telegram Forum 主题消息回复到 #General 的 Bug，完善了 `InboundContext.ChatID` 的逻辑。
- **外部渠道扩展支持**：[PR #3120](https://github.com/sipeed/picoclaw/pull/3120) 引入了 `RegisterChannelSettings` 钩子，允许第三方通过外部模块注册渠道，而无需 Fork PicoClaw 主仓库，大幅提升了项目的二次开发友好度。
- **历史会话与 Token 压缩修复**：合并了多个历史遗留修复，包括修复 Web UI 历史记录显示不全（[PR #2990](https://github.com/sipeed/picoclaw/pull/2990)）以及上下文压缩 Token 阈值计算错误（[PR #2988](https://github.com/sipeed/picoclaw/pull/2988)）。

#### 4. 🔥 社区热点
- **最热功能请求：流式 HTTP 请求支持** —— [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)
  - **背景**：该 Issue 创建于两个月前，今日再次引发大量（12 条）讨论。
  - **诉求**：社区用户强烈希望能够通过配置文件直接让 PicoClaw 以流式（`stream=True`）的方式请求后端 LLM，以降低首字延迟（TTFB）。这反映了重度用户对实时交互体验的高要求。
- **扩展远程与跨平台能力**：[PR #3137](https://github.com/sipeed/picoclaw/pull/3137) 提议允许配置远程 Cron 定时命令，[PR #3120](https://github.com/sipeed/picoclaw/pull/3120) 促使第三方渠道接入。这表明 PicoClaw 正在被应用于更复杂的自动化和跨系统调度场景。

#### 5. 🐛 Bug 与稳定性
今日报告并处理了多起关键 Bug，按严重程度排列如下：
- **高危 - 核心进程崩溃 (已有 Fix PR)**：
  - [Issue #3134](https://github.com/sipeed/picoclaw/issues/3134)：在 Agent Gateway 环境下执行 `su -c 'echo OK'` 时触发守护进程报错并导致 Agent 异常退出。
  - *修复进展*：通过 [PR #3132](https://github.com/sipeed/picoclaw/pull/3132) 添加的 panic 恢复机制，以及 [PR #3130](https://github.com/sipeed/picoclaw/pull/3130) 处理工具执行静默错误，大幅降低了此类崩溃发生率。
- **中危 - API 兼容性与解析错误 (有 待合并 PR)**：
  - [PR #3136](https://github.com/sipeed/picoclaw/pull/3136)：修复了 Gemini 3.5 Flash Agentic 模型由于 `thought_signature` 大小写格式不一致导致的推理中断问题。
- **中危 - 媒体文件解析错位 (有 待合并 PR)**：
  - [PR #3115](https://github.com/sipeed/picoclaw/pull/3115)：修复了当普通工具（如 `read_file`）的输出内容中恰好包含 Base64 图片字符串时，被系统误识别为真实媒体附件导致会话历史损坏的 Bug。

#### 6. 🗺 功能请求与路线图信号
- **网络请求流式化**：结合高热的 [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)，预计“支持 Stream 模式配置”将被优先纳入近期里程碑开发。
- **多模态与第三方渠道繁荣**：[PR #3120](https://github.com/sipeed/picoclaw/pull/3120)（Out-of-tree channels）和 [PR #3137](https://github.com/sipeed/picoclaw/pull/3137)（Remote cron）展示了项目向“泛化 IoT/IM 自动化控制中心”演进的信号。未来版本可能会进一步解耦核心与渠道绑定。

#### 7. 🗣 用户反馈摘要
- **痛点 1：群组机器人“找不到北”**：Telegram 群组转论坛后，机器人乱回消息（发到 #General）让用户十分困扰（[Issue #3110](https://github.com/sipeed/picoclaw/issues/3110)）。今日的 [PR #3135](https://github.com/sipeed/picoclaw/pull/3135) 已经平息了这一痛点。
- **痛点 2：大文件/长文本读取导致的上下文损坏**：从 [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) 可以看出，用户在使用 Agent 读取包含复杂文本的日志或代码文件时，底层解析机制容易发生“幻觉”，将其判定为媒体文件。
- **痛点 3：Token 预算失控**：用户反映无法通过配置有效控制上下文压缩的 Token 比例（[PR #2988](https://github.com/sipeed/picoclaw/pull/2988) 背后的诉求），导致 LLM 调用成本不可控。

#### 8. ⚠️ 待处理积压
- **安全漏洞群（需立即干预）**：研究员 `YLChen-007` 提交了多达 12 个安全问题（如 [Issue #3078](https://github.com/sipeed/picoclaw/issues/3078) SSRF 绕过、[Issue #3081](https://github.com/sipeed/picoclaw/issues/3081) 符号链接竞态条件等，涵盖 #3068 至 #3082）。**这些 Issue 今日均被系统标记为 `stale`，面临着被自动关闭的风险。强烈建议安全团队介入分类。**
- **生命周期管理 PR 待 Review**：[PR #3116](https://github.com/sipeed/picoclaw/pull/3116) 旨在完善 `turn.done` 生命周期信令，修复了三个实现缺陷，目前处于 Open 状态等待合并，对多轮对话稳定性至关重要。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份日报旨在为开源 AI 智能体与个人 AI 助手领域的开发者和维护者提供深度的项目洞察。以下是基于 2026-06-16 至 2026-06-17 过去 24 小时数据生成的 NanoClaw 项目动态日报。

# 📊 NanoClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
NanoClaw 在过去 24 小时内保持了**高度活跃**的开发与社区互动状态，共计产生 6 条 Issue 更新与 8 条 PR 更新。项目当前的工程重心明显聚焦于**底层架构健壮性修复**与**企业级部署支持**，涵盖了账单错误处理、Tailscale 网络自愈以及不可变镜像环境下的升级管控。同时，通过引入对远程 HTTP/SSE MCP（Model Context Protocol）服务器的原生支持，项目正积极扩展其多智能体生态的集成能力。整体而言，项目处于稳步向前且高度关注用户实际部署痛点的健康阶段。

## 2. 版本发布
**本报告周期内无新版本发布 (0 个 Release)。**

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，项目在错误处理机制、网络稳定性和官方文档对齐方面取得了实质性进展：

*   **[PR #2759] 修复 Agent-Runner 静默丢弃预算耗尽报错的问题：** 该 PR 已关闭（标记为修复完成）。它解决了底层大模型 API 报错时前端无响应的严重体验问题，确保计费或 token 限制错误能正确抛出给用户，大幅提升了调试和交互透明度。
*   **[PR #2782] 使 tailscale-docker 路由服务具备自愈能力：** 该 PR 已关闭。修复了 Tailscale 在会话期间刷新 IP 规则导致网络静默断开的问题，将系统服务改为持续监控模式，增强了基于容器的 Agent 网络稳定性。
*   **[PR #2775] 澄清 OneCLI 网关的升级边界：** 明确了 OneCLI 作为独立运维组件的属性，消除了用户在更新 NanoClaw 时误以为网关也会自动更新的错误预期，完善了文档变更日志。
*   **[PR #2069] 关闭 WebChat v1 技能 PR：** 维护者关闭了早期的 WebChat 功能提交，预示着官方可能已有更标准化的集成方案或重构计划。

## 4. 社区热点
今日的讨论焦点集中在**凭证安全**与**内容格式兼容性**上：

*   **[Issue #1669] Anthropic OAuth 反向代理凭证是否存在封号风险？**
    *   **热度背景：** 此前创建的 Issue 在今日重新活跃。用户对 NanoClaw 的 Credential Proxy 实现是否触碰 Anthropic 官方反欺诈机制表示深切担忧。
    *   **背后诉求：** 随着项目体量增大，企业级用户对合规性和账号安全性的需求急剧上升，不再满足于“可用”，而是要求“安全合规”。
*   **[Issue #2779] Slack 中的 `@handles` URL 链接被破坏**
    *   **热度背景：** Agent 发送的包含 `@handle` 的 URL（如 HackMD 或 Mastodon 链接）在 Slack 中被错误解析。
    *   **背后诉求：** 暴露出当前 Agent 在将富文本/markdown 输出适配到第三方 IM（如 Slack）时，字符转义和上下文感知解析仍存在短板。

## 5. Bug 与稳定性
今日报告的核心 Bug 集中在会话同步、媒体挂载与安全文档脱节方面：

*   **P1 - WhatsApp 入站媒体无法触达 Agent 容器** [Issue 待处理 / **已有 Fix PR: #2778**]
    *   **详情：** 下载的媒体文件写入了宿主机的 `data/attachments/`，但未正确映射到 Agent 的 per-session 挂载目录，导致 Agent 无法“看到”用户发送的图片和文档，多模态交互完全失效。
*   **P2 - Container-runner 会话同步机制遗漏文件** [Issue #2784]
    *   **详情：** `container-runner.ts` 仅以 `index.ts` 作为缓存新鲜度的检查信号，忽略了 `ipc-mcp-stdio.ts` 的变更，导致热更新/缓存失效逻辑出现盲区，可能引发 Agent 运行时的版本不一致。
*   **P3 - 安全文档严重滞后** [Issue #2783]
    *   **详情：** `docs/SECURITY.md` 仍描述已废弃的 v1 信任模型，且引用了不存在的技能。由于是权威安全文档，极易对新接入的开发者造成误导。

## 6. 功能请求与路线图信号
社区在扩展 Agent 工具链和底层运行环境的控制权上提出了几个极具价值的新功能请求：

*   **🌐 远程 HTTP/SSE MCP 服务器支持** [PR #2776]
    *   **信号：** 这是一个重大的架构扩展。打破了仅限 stdio 本地 MCP 的限制，允许通过 HTTP/SSE 远程接入 MCP 服务器。这为云原生部署和轻量化 Agent 容器铺平了道路，**极大概率被纳入下一版本**。
*   **🚴 官方 Strava MCP 集成** [PR #2777]
    *   **信号：** 展示了基于新 HTTP 传输能力的具体应用场景，进一步验证了远程 MCP 架构的可行性，丰富了个人 AI 助理的生活化场景。
*   **🛡️ 原生凭证注入支持 (`NANOCLAW_NATIVE_CREDENTIALS`)** [Issue #2781]
    *   **信号：** 下游打包商希望在沙箱环境中绕过 OneCLI，直接使用外部注入的 Provider 凭证。这反映了项目在不可变镜像和高度受限的企业安全环境中需要更灵活的认证解耦。
*   **⚙️ 托管集群升级绊线禁用选项** [PR #2780]
    *   **信号：** 允许通过 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 关闭启动时的强制升级检查。说明 NanoClaw 正在被大规模部署到不可变基础设施上。

## 7. 用户反馈摘要
从近期的 Issues 和 PR 描述中，可以提炼出以下真实用户画像和痛点：
*   **不可变基础设施的摩擦：** 多个 Issue/PR（如 #2780, #2781）表明，大量用户正在使用预打包镜像（Immutable Images）或沙箱环境运行 NanoClaw。当前的强制更新检查和 OneCLI 强依赖成为了部署阻力，用户渴望更解耦的环境变量配置方式。
*   **多渠道通信的细节脱节：** Issue #2779 (Slack 链接破坏) 和 Issue #2778 (WhatsApp 媒体丢失) 暴露出 NanoClaw 在跨平台渠道适配上还有打磨空间。Agent 大脑很聪明，但在把信息（特别是非结构化富媒体和特殊字符）“递交”给用户这一最后一步上，存在路径映射和格式转义的 Bug。
*   **对账单/预算控制的焦虑：** Issue #2751 的反馈指出，静默吞掉 API 报错是极差的体验。用户对于“Token 消耗是否可控”、“何时超额”非常敏感，需要系统提供强有力的白盒反馈。

## 8. 待处理积压
*   ⚠️ **[Issue #1669 - 凭证代理封禁风险](https://github.com/nanocoai/nanoclaw/issues/1669)**：自 2026-04-06 创建以来已逾两月，今日虽有活跃迹象但官方尚未给出权威定性解答。鉴于涉及账号生死存亡，强烈建议维护者针对 Anthropic OAuth 的最新 TOS 给出明确说明或架构调整建议。
*   ⚠️ **待合并的功能性 PR 积压**：目前有 4 个待处理 PR，其中包含 **远程 HTTP/SSE MCP 支持 (#2776)** 和 **WhatsApp 媒体路由修复 (#2778)** 等高价值贡献。建议维护者优先 Review 并推进这几个 PR 的合并，以防止分支冲突或贡献者流失。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是基于过去 24 小时 GitHub 数据，为您生成的 **NullClaw (AI 智能体与个人 AI 助理) 项目动态日报**。

---

# 📊 NullClaw 项目日报 (2026-06-17)

### 1. 今日速览
过去 24 小时内，NullClaw 项目整体保持了较高且聚焦的开发活跃度。项目今日共有 **5 项事件更新**（包含 2 条 Issue 活跃和 3 条 PR 更新），但无任何 Issue 被关闭或 PR 被合并。开发活动的焦点高度集中在 **定时任务/调度器的权限链路修复**，以及 **Microsoft Teams 集成的验证修复** 上。尽管今日没有发布新版本，但核心贡献者针对社区长期悬而未决的调度器权限报错（#839）提交了针对性的安全修复方案，显示出维护团队正在积极排雷，为下一个大版本或稳定版做准备。

### 2. 版本发布
**本日无新版本发布。** (当前已知最新版仍为 `v2026.4.17`)

### 3. 项目进展
尽管今日没有 PR 被合并，但针对核心组件的修复 PR 已全部提交并处于待合并状态，标志着相关痛点即将得到解决：
*   **调度器权限修复取得突破**：针对 Issue #839 中报告的调度器无法访问的严重问题，贡献者 `vernonstinebaker` 提交了 [PR #959](https://github.com/nullclaw/nullclaw/PR/959)。该 PR 通过在成功 `/pair` 后将令牌持久化到本地（支持 ChaCha20-Poly1305 加密），使 cron 定时工具能够安全读取授权。
*   **Cron 子代理引擎重大更新推进**：由 `yanggf8` 主导的 [PR #783](https://github.com/nullclaw/nullclaw/PR/783) 于今日继续推进。该 PR 引入了基于数据库的调度引擎、运行历史记录、JSON CLI 输出以及安全加固。这是一个大型特性合并请求，一旦合并，NullClaw 的自动化任务执行能力将实现质的飞跃。

### 4. 社区热点
今日社区讨论最热的议题围绕**底层集成的兼容性与大语言模型输出质量**展开：
*   **[Issue #839](https://github.com/nullclaw/nullclaw/Issue/839)**（2 条评论）：用户反馈在最新版本（v2026.4.17）中，Bot 无法访问调度器。这反映了用户在企业级自动化部署中，高度依赖定时任务功能，权限阻断直接导致了核心业务流程的中断。
*   **[Issue #952](https://github.com/nullclaw/nullclaw/Issue/952)**（2 条评论）：用户在使用 Ollama 接入本地模型（如 Gemma）时，发现 AI 无法输出完整的句子。这暴露出开源社区在使用本地轻量级模型时，普遍面临的 Token 截断、上下文处理或 API 响应解析的兼容性痛点。

### 5. Bug 与稳定性
根据今日活跃的 Issue，以下是当前项目的稳定性隐患（按严重程度排序）：

*   🔴 **严重 - 调度器访问权限阻断 ([Issue #839](https://github.com/nullclaw/nullclaw/Issue/839))**
    *   **状态**：已有修复方案 [PR #959](https://github.com/nullclaw/nullclaw/PR/959) 待合并。
    *   **影响**：导致所有定时/计划任务失效，阻断自动化工作流。
*   🟠 **较高 - Bot Framework Token 验证失败 ([PR #958](https://github.com/nullclaw/nullclaw/PR/958))**
    *   **状态**：已有修复方案待合并。
    *   **影响**：由于代码将 `serviceurl` 写成了驼峰命名（而微软 Bot Framework 发送的是全小写），且 JWKS 获取上限过低，导致接入 MS Teams 的入站消息直接被 403 拒绝。
*   🟡 **中等 - Ollama 本地模型输出截断 ([Issue #952](https://github.com/nullclaw/nullclaw/Issue/952))**
    *   **状态**：Bug 报告，暂无对应修复 PR。
    *   **影响**：影响私有化部署体验，Agent 回答不完整，可能导致下游 JSON 解析或逻辑判断失败。

### 6. 功能请求与路线图信号
综合今日的 PR 动态，NullClaw 正在向**“重度自动化与深度企业集成”**的路线图迈进：
1.  **深度 MS Teams 融合**：[PR #958](https://github.com/nullclaw/nullclaw/PR/958) 修复了 Teams 的鉴权问题，表明项目非常看重企业级办公协同场景。
2.  **企业级安全规范落地**：[PR #959](https://github.com/nullclaw/nullclaw/PR/959) 强制/可选地使用 ChaCha20-Poly1305 对 resting token 进行加密，说明项目在安全性上正在向企业级标准看齐。
3.  **任务调度可视化与工程化**：[PR #783](https://github.com/nullclaw/nullclaw/PR/783) 增加 `--json` 输出模式和运行历史表。这预示着 NullClaw 正在为未来支持 UI 面板展示或更复杂的编排做准备。这些 PR 的合流极有可能构成下一个大版本（如 v2026.6.x）的核心。

### 7. 用户反馈摘要
从近期 Issues 的反馈来看，NullClaw 的用户画像呈现出两个明显的趋势：
*   **私有化与极客诉求强烈**：大量用户尝试使用 Ollama 接入本地开源模型（如 Gemma）来驱动 Agent（[Issue #952](https://github.com/nullclaw/nullclaw/Issue/952)）。但 NullClaw 在处理本地模型非标准或被截断的流式响应时表现不够健壮，导致用户体验受挫。
*   **强运维与自动化属性**：用户不再满足于简单的对话，而是频繁尝试使用 Cron 定时任务、Subagent 编排（[Issue #839](https://github.com/nullclaw/nullclaw/Issue/839)）。一旦底层鉴权或调度组件出现小 Bug，用户的抱怨会非常直接，因为这在破坏他们的“生产工作流”。

### 8. 待处理积压
以下是需提醒维护者（Maintainers）关注的积压事项：
*   ⚠️ **Issue #839 (创建于 4月18日)**：已停滞 2 个月，期间用户经历了多个版本的更新但问题依旧存在。这属于**核心功能阻断**，虽然今天提交了 [PR #959](https://github.com/nullclaw/nullclaw/PR/959) 和 [PR #783](https://github.com/nullclaw/nullclaw/PR/783)，但维护团队需加速 Code Review 流程，尽快将其合并发版，以安抚社区情绪。
*   ⚠️ **大量待合并的关键 PR 阻塞**：今日活跃的 3 个 PR 全部处于 OPEN 状态，且涉及调度器核心和 Teams 鉴权。建议项目维护者优先进行 CI 校验和合并测试，当前的开发分支与主干之间存在明显的同步延迟。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-06-17  
**分析师**: AI 智能体与个人 AI 助手开源项目分析台

---

### 1. 今日速览
过去 24 小时内，IronClaw 项目保持了极高的开发与社区互动活跃度，共处理了 50 条 Issue 更新（31 条新开/活跃，19 条关闭）和 50 条 PR 更新（33 条待合并，17 条合并/关闭）。虽然没有发布新版本，但核心团队和贡献者（如 `sunglow666`, `serrrfirat`, `think-in-universe` 等）将重心完全聚焦于 **"Reborn" (新一代 WebUI)** 和 **Engine V2** 的稳定性提升与深度内部测试中。从提交来看，团队正在针对权限审批流、OAuth 认证边界以及多租户隔离进行高强度的 Dogfooding（吃自己的狗粮），项目处于功能修补与体验打磨的快速迭代期。

---

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。开发重点集中在主分支的缺陷修复和底层体验升级上，预计团队正在为下一个大版本或重要的 LTS 进行储备。

---

### 3. 项目进展
今日共有 17 个 PR 被合并或关闭，大幅推进了 Reborn 架构的可靠性与用户体验：

*   **工作流与执行引擎修复**：
    *   PR [#4993](https://github.com/nearai/ironclaw/pull/4993): 修复了 Agent 循环在无进展时假装完成任务的问题，现在会真实地抛出停止原因，保证了 Agent 的诚实性与可控性。
    *   PR [#4954](https://github.com/nearai/ironclaw/pull/4954) [已关闭/重构]: 针对权限拒绝导致运行取消的问题进行了修复，将拒绝信号传递给模型，避免了死循环。
*   **安全与权限边界强化**：
    *   PR [#4953](https://github.com/nearai/ironclaw/pull/4953): 修复了 Slack OAuth 安全隐患，确保在触发运行时，OAuth URL 只在经过验证的个人 DM 中推送。
*   **日志与可观测性**：
    *   PR [#4955](https://github.com/nearai/ironclaw/pull/4955): 修复了操作员日志面板在活跃运行期间显示 "0 entries" 的问题，通过关联 `thread_id`/`run_id` 提升排错效率。
*   **基础依赖升级**：
    *   PR [#4876](https://github.com/nearai/ironclaw/pull/4876): Dependabot 提交的超大规模依赖更新（涉及 43 个包，包括 rustls, refinery 等关键底层库），底层基座正在全面现代化。

---

### 4. 社区热点
讨论最多的问题集中在 **自动化执行盲区** 以及 **OAuth 认证流的割裂感** 上：

*   **Issue [#4942](https://github.com/nearai/ironclaw/issues/4942) (评论: 2)**: 工具调用失败后，WebUI 不会实时刷新，直到用户手动重新加载。这反映了前端 SSE (Server-Sent Events) 状态同步存在断点。
*   **Issue [#4761](https://github.com/nearai/ironclaw/issues/4761) (评论: 2)**: Agent 在遇到重复的工具调用失败后直接停止，而不是尝试自我恢复。用户期望 Agent 具备更强的容错路由能力。
*   **Issue [#4881](https://github.com/nearai/ironclaw/issues/4881) (评论: 1)**: 核心成员 `think-in-universe` 提出的基础设施需求：为 PR 提供 Vercel 般的预览部署体验。这表明团队致力于提升代码审查与交付的工程化标准。

---

### 5. Bug 与稳定性
今日新报告了多个中等至高风险的 Bug，部分已确认并处于修复中：

*   **[风险: 中] SSO 访问不匹配导致自动化失败** - Issue [#4992](https://github.com/nearai/ironclaw/issues/4992): Railway 托管的 `local-dev` 实例中，计划任务在创建对话线索前就触发失败 (`No thread attached`)。根因在于本地开发的 SSO 与 Railway 通道隔离冲突。
*   **[严重阻塞] Google OAuth 回调导致运行中断** - Issue [#4907](https://github.com/nearai/ironclaw/issues/4907): 当对话触发 Google 日历时，OAuth 完成后原任务未能恢复执行而是直接报错。**状态**: 已有 Fix PR [#4998](https://github.com/nearai/ironclaw/pull/4998) 提交。
*   **[Bug] WASM Google Drive 认证死胡同** - Issue [#4991](https://github.com/nearai/ironclaw/issues/4991): WASM 驱动的 Google Drive 在 Token 过期时，没有抛出需要重新认证的状态，而是直接抛出不可恢复的 `operation_failed`。**状态**: 已有 Fix PR [#4997](https://github.com/nearai/ironclaw/pull/4997) 尝试拦截并提供文本提取降级方案。
*   **[UX/交互] 阻塞式审批** - Issue [#4986](https://github.com/nearai/ironclaw/issues/4986): 需要审批的周期性自动化任务会永久阻塞。**状态**: 团队正在 PR [#4954](https://github.com/nearai/ironclaw/pull/4954) 中重构审批门控逻辑。

---

### 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以清晰看出 IronClaw 的下一步演进路线：

1.  **完整的 Engine V2 支持**: Issue [#4985](https://github.com/nearai/ironclaw/issues/4985) 指出 Engine V2 下管理面板无法获取 LLM 用量。对应的 PR [#4989](https://github.com/nearai/ironclaw/pull/4989) 正在推进将 Engine V2 的调用接入 `CostGuard` 和元数据追踪，**这暗示 Engine V2 即将成为默认的生产级引擎**。
2.  **动态工具权限控制**: Issue [#4959](https://github.com/nearai/ironclaw/issues/4959) 提出全局自动批准设置与按轮次动态解析。这是个人 AI 助理走向真正自动化不可或缺的一环。
3.  **全格式文档解析**: PR [#4997](https://github.com/nearai/ironclaw/pull/4997) 添加了对 PDF/PPTX/DOCX/XLSX 的纯文本提取拦截层，说明 IronClaw 正在强化其作为 RAG/知识库核心的数据接入能力。

---

### 7. 用户反馈摘要
*   **痛点: "状态盲区"**: 用户 `sunglow666` 在多个 Issues（如 [#4988](https://github.com/nearai/ironclaw/issues/4988), [#4981](https://github.com/nearai/ironclaw/issues/4981)）中反馈，Reborn 仪表盘的运行状态仅用不易理解的小色点表示，且空状态没有任何创建引导。用户在设置定时任务时，无法直观感知 Agent 是否在运行或是否卡住。
*   **痛点: "OAuth 阵痛"**: 大量被关闭和开启的 Issue 集中在 GSuite (Gmail, Calendar, Drive) 的授权上。如 Issue [#4913](https://github.com/nearai/ironclaw/issues/4913) 指出每次新对话都需要重新授权，暴露了之前版本中凭证持久化与跨会话共享的严重缺陷。
*   **满意点**: 尽管有许多细节 Bug，社区对 Reborn UI 的整体架构和内置工具（如 `builtin.shell`）的潜力表示认可，积极通过本地构建 (`main` 分支) 参与深度内测并提供详尽的复现步骤。

---

### 8. 待处理积压
*   **长周期重构任务**: PR [#4841](https://github.com/nearai/ironclaw/pull/4841) ("no run-borking failures") 和 PR [#4712](https://github.com/nearai/ironclaw/pull/4712) (将 Slack 配置移至 WebUI) 体积庞大 (Size: XL)，已开启数日，需维护者优先完成 Code Review 并推进合并，以免产生严重的代码冲突。
*   **多租户隔离测试**: PR [#3890](https://github.com/nearai/ironclaw/pull/3890) 自 5 月底提交，对于 IronClaw 支持多用户/团队场景至关重要，需确保文件系统、附件路径隔离的合约测试尽快落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-06-17 动态日报：

# 🦞 LobsterAI 项目动态日报 (2026-06-17)

### 1. 今日速览
在过去 24 小时内，LobsterAI 项目代码库保持了**高度活跃**的状态，共合入或关闭了 3 个关键 PR，且主要集中在协同工作和内容渲染体验的大幅优化上。虽然新版发布节奏平稳（无新 Release），但核心代码的推进速度表明开发团队正在为下一个大版本积累功能。同时，社区端有 1 个长期 Issue 更新，暴露了客户端在基础交互校验上的一些细节盲区。总体而言，项目处于**健康且快速迭代**的阶段。

### 2. 版本发布
* **今日无新版本发布**。

### 3. 项目进展
今日项目共有 3 个 PR 被合并或关闭，标志着 LobsterAI 在**多模态/协作预览**及**底层数据检索**方面迈出了重要一步：
* **协作交互与检索增强**：PR [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) 优化了 Cowork（协同工作）的搜索机制。搜索任务逻辑从单纯过滤前端预加载的最近会话，改为直接查询底层 SQLite 数据库，这将大幅提升海量任务场景下的搜索准确性和深度。
* **Artifacts 预览体验重构**：PR [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) 对预览卡片进行了全面升级。不仅统一了暗色模式与多文件折叠展示样式，还重点优化了内置“有道龙虾浏览器”的交互体验（如菜单置顶、外部浏览器限制等），这为用户提供了更加沉浸的 HTML/代码预览环境。
* **UI 细节打磨**：PR [#2168](https://github.com/netease-youdao/LobsterAI/pull/2168) 为 Cowork 对话框添加了“滚动至底部”的悬浮按钮，支持平滑滚动和鼠标事件穿透，进一步提升了长对话场景下的用户体验。

### 4. 社区热点
今日社区整体趋于平缓，注意力主要集中在历史 Issue 的跟进上：
* **Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) [快捷键重复无校验]**：该 Issue 尽管是在 4 月提出的，但昨日再次被标记/更新（标记为 `[stale]`）。这反映出社区对于客户端**本地设置健壮性**的持续关注。用户期望在基础设置（如快捷键绑定）上获得企业级的防呆体验，而不是修改后导致热键冲突。

### 5. Bug 与稳定性
今日暴露出两个值得开发者关注的逻辑缺陷，均属于状态管理与反馈层面的 Bug：
* **🔴 严重：定时任务停止失效且无错误提示**（关联 PR [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)）
  * **表现**：定时任务的“停止”IPC handler 实际上不执行任何操作，但依然向前端返回 `{ success: true }`。此外，所有定时任务（创建、删除、立即运行等）在服务层失败时，由于没有任何 UI 组件读取 Redux 中的错误状态，导致用户遇到错误时**完全得不到反馈**。
  * **状态**：已有 Open 状态的 fix PR，亟待 Review 合并，此问题严重影响自动化任务的可靠性。
* **🟡 中度：快捷键冲突盲区**（关联 Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425)）
  * **表现**：设置重复快捷键时可正常保存，无任何校验拦截，容易导致用户误操作后核心快捷键失效。目前暂无对应的修复 PR。

### 6. 功能请求与路线图信号
通过近期的代码变更与 Issue 动态，可以明确识别出 LobsterAI 近期产品迭代的两大核心路线图：
1. **深度集成专属浏览器生态**：从今日合入的 Artifacts 预览优化（#2169）可以看出，项目正在有意引导用户使用内置的“有道龙虾浏览器”进行 HTML 渲染，并在 UI 层面将其优先级调至最高。打造内置沙盒浏览体验是当前的明确路线。
2. **从“轻量助手”向“重度协作平台”演进**：无论是 SQLite 深度检索（#2170）、Cowork 交互优化（#2168），还是修复复杂定时任务状态（#1424），都暗示 LobsterAI 正在承载更重度的生产力任务，对本地数据持久化和后台任务调度的要求正在向重度 IDE 工具看齐。

### 7. 用户反馈摘要
从现有数据提炼真实用户痛点：
* **预期违背**：用户在进行系统设置（如快捷键修改 #1425）时，缺乏系统级的约束，导致“配置成功但功能异常”的割裂感。
* **状态不透明带来的恐慌**：定时任务无法停止且无报错提示（#1424），这种“黑盒”状态会严重削弱用户对 AI 助手执行自动化任务的信任度。
* **海量数据管理需求**：前端列表已无法满足用户沉淀的历史任务检索，必须动用 SQLite 底层查询（#2170），侧面说明重度用户已经产生了大量的 AI 协同记录。

### 8. 待处理积压
请项目维护团队重点关注以下处于停滞状态的 Issue/PR：
* **PR [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) [长期未合并]**：由 dahai2016 提交于 4 月份，旨在彻底修复定时任务错误处理机制。由于该 Bug 涉及核心的 IPC 通信与状态管理，且当前已有解决方案，建议尽快安排 Code Review 并推进合并。
* **Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) [长期未解决]**：快捷键校验缺失问题同样沉淀了两个月。这类虽小但影响基础体验的 Bug 容易降低新用户的留存率，建议在接下来的 Bugfix 版本中顺手解决。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) 项目动态日报
**报告日期**: 2026-06-17  
**数据统计周期**: 过去 24 小时  
**项目地址**: [github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)

---

### 1. 今日速览
在过去 24 小时内，TinyClaw 项目整体活跃度呈现**低频但聚焦底层稳定性**的特征。项目今日无新增 Issue、无已合并的 PR，也没有发布新版本，表面交互趋于平缓。然而，社区贡献者提交了一项关键的平台兼容性修复（[PR #281](https://github.com/TinyAGI/tinyagi/pull/281)），尝试解决 CLI 在原生 Windows 环境下的阻断性 Bug。这表明项目正处于打磨跨平台运行体验的阶段。目前该 PR 处于待合并状态，有待维护者进行代码审查。

### 2. 版本发布
**本日无新版本发布。**

### 3. 项目进展
*   **新增待合并代码**: 贡献者 `mperkins0155` 提交了 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281)。
*   **推进功能**: 该 PR 尚未合并，但一旦获批，将使 `tinyagi` CLI 彻底摆脱对 WSL 的依赖，实现原生 Windows 环境的完美运行。这标志着项目向“全平台无缝部署”的 AI 助手目标迈出了重要一步。
*   **整体进度**: 项目当前的重心集中在现有 CLI 架构的跨平台路径解析优化上，属于夯实基础设施的关键一步。

### 4. 社区热点
本日数据中没有产生大量评论或点赞的 Issue 或 PR，但 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) 是当前唯一的、也是最受关注的动态。
*   **背后的诉求分析**: 该 PR 的出现直接反映了开发者社区对 **“原生 Windows 支持”** 的强烈诉求。作为一个 AI 智能体项目，许多个人开发者的主力机或测试环境为 Windows，如果必须依赖 WSL 才能运行 CLI，将显著提高项目的上手门槛。修复 ESM 模块在 Windows 下的路径解析问题是打破这一采用瓶颈的关键。

### 5. Bug 与稳定性
今日无用户通过 Issue 渠道报告新 Bug，但通过 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) 的提交说明，暴露并修复了以下 **3 个 Windows 平台专属的高危阻断性 Bug**：

*   **[P0 严重] 盘符路径重复导致 `MODULE_NOT_FOUND`**：
    *   *现象*: Node.js 在 Windows 下执行 `new URL('.', import.meta.url).pathname` 时返回 `/C:/Users/...`，导致 `path.resolve` 解析失败，CLI 直接崩溃。
    *   *状态*: 已提交 Fix PR ([#281](https://github.com/TinyAGI/tinyagi/pull/281))。
*   *(注：根据数据摘要，该 PR 共修复了 3 个 Windows 专属 Bug，另两个具体崩溃细节未完全展示，但均指向原生 Windows 环境下的路径与模块加载问题)*。

### 6. 功能请求与路线图信号
*   **跨平台 CLI 完整支持**: 虽然过去 24 小时没有新功能请求的 Issue，但 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) 释放了明确的路线图信号——**跨平台兼容性（尤其是 Windows 原生支持）是当前项目的核心优化方向**。
*   **下版本预测**: 预计项目维护者在审查并合并该 PR 后，将会发布下一个 Minor 或 Patch 版本，正式宣布全面支持 Windows 原生环境，从而扩大个人 AI 助手的受众覆盖面。

### 7. 用户反馈摘要
虽然今日没有新增的 Issues 评论，但从开发者主动提交修代码的举动中可以提炼出真实的用户痛点：
*   **痛点**: 原生 Windows 用户在安装并尝试运行 `tinyagi` CLI 时，大概率会遇到直接的报错崩溃（无法找到核心模块），被迫转用 WSL。
*   **使用场景**: Windows 开发者希望在 PowerShell 或 CMD 等原生终端中，直接调用 TinyClaw 作为个人 AI 助手执行任务，而不想额外配置 Linux 子系统环境。

### 8. 待处理积压
*   **[需关注] PR 审查积压**：目前有 1 个关键修复 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) 处于 `OPEN` 状态等待合并。强烈建议维护者（@TinyAGI/team）优先在 Windows 环境下拉取该分支进行测试，如果验证通过，请尽快合并并推发新版本，以减少 Windows 用户的流失。

---
*数据驱动洞察：项目处于稳定维护期，当前无高优的社区口水战，重点在于底层 Bug 的清剿。保持对 PR 的审查吞吐率是提升项目健康度的关键。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-06-17)**

---

### 1. 今日速览
截至今日，Moltis 项目的整体活跃度呈现出“高研发推进、低社区喧嚣”的平稳状态。过去 24 小时内，项目未发布新版本，也没有产生新的 Issue 讨论，但核心开发组在代码合并层面保持着稳健的输出。当前有 2 个重要的功能拓展型 PR 正在等待审核与合并，主要聚焦于提升外部代理的支持能力以及运行时上下文的灵活注入。这表明项目正处于架构完善与功能横向扩展的阶段，健康度良好。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日虽然未有 PR 被正式合并或关闭，但两条处于 `[OPEN]` 状态的 PR 正处于最后的推进阶段，这两项更新将显著增强 Moltis 作为个人 AI 助手的核心竞争力：
*   **支持外部代理的模型与算力配置**：[moltis-org/moltis PR #1125](https://github.com/moltis-org/moltis/pull/1125)。由开发者 `gptme-thomas` 推进。该 PR 为外部代理提供商引入了一等公民级别的模型（`models`）和努力程度（`efforts`）选择支持，并在 `/model` 命令中将其归类。这极大丰富了用户在不同任务下灵活调度算力和底层模型的自由度。
*   **新增会话上下文命令支持**：[moltis-org/moltis PR #1124](https://github.com/moltis-org/moltis/pull/1124)。同样由 `gptme-thomas` 提交。引入了可选的 `chat.context_command`，允许在每次对话回合前自动执行命令并将输出附加到提示词上下文中。此功能解决了以往需要手动粘贴运行时上下文的痛点，对自动化部署和复杂工作流场景意义重大。

### 4. 社区热点
*过去 24 小时内，社区无新开或活跃的 Issues 讨论热度聚集。*
当前社区讨论的焦点仍然集中在上述两个 PR（#1124 和 #1125）的实现细节上。从代码提交逻辑来看，社区/开发者目前的诉求非常明确：**高度渴望更强的动态上下文感知能力以及更广泛的第三方模型适配性**。

### 5. Bug 与稳定性
*今日无新报告的 Bug、崩溃或回归问题。*
项目在功能迭代的同时保持了良好的稳定性控制，没有引发新的故障反馈。

### 6. 功能请求与路线图信号
虽然今日没有新功能请求（Issue），但通过现有 PR 的走向，可以清晰捕捉到 Moltis 的短期路线图信号：
*   **深度集成与自动化**：`chat.context_command` 的加入，暗示 Moltis 正在向 Agentic（智能体化）工作流演进，使其不仅是一个对话助手，更能作为一个能动态读取环境数据的执行中枢。
*   **多模型路由的精细化**：对外部代理提供精细化的 effort（算力/努力程度）选择，意味着项目正在优化成本控制结构，允许用户在简单问答与复杂推理之间进行更经济的路由配置。这些功能极有可能被打包进下一个 minor（次要）版本中。

### 7. 用户反馈摘要
*由于今日无活跃的 Issue 评论，暂无法提取终端用户的直接文字反馈。*
但基于近期开发者提交的代码摘要，侧面反映出用户此前的痛点在于：**“在 Moltis 中对接外部或自定义代理时，配置过于死板，且每次需要让 AI 感知系统状态时操作繁琐”**。当前的 PR 正是对这些历史痛点的精准修复。

### 8. 待处理积压
目前需要维护者重点关注和推进处理的积压项（均在等待 Review 及 CI 验证）：
1.  **[PR #1124](https://github.com/moltis-org/moltis/pull/1124)**：上下文命令支持。建议尽快完成配置文件 schema 验证的最终 Review，以便合并。
2.  **[PR #1125](https://github.com/moltis-org/moltis/pull/1125)**：外部代理模型选择支持。需确保外部代理条目在 `/model` 命令分组下的元数据持久化逻辑无遗漏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**报告日期**: 2026-06-17 | **数据周期**: 过去 24 小时
**分析师**: AI 智能体与个人 AI 助手开源项目分析师

---

### 1. 今日速览
CoPaw (QwenPaw) 项目在过去 24 小时内保持了**极高的活跃度与社区热度**。项目成功发布了 **v1.1.12-beta.1** 版本，显著推进了安全性与桌面端稳定性的建设。昨日共有 41 条 Issue 更新（19 条新开/活跃，22 条关闭）和 40 条 PR 更新（20 条待合并，20 条已合并/关闭），展现了维护团队高效的 throughput（吞吐量）与社区贡献者的踊跃参与。值得注意的是，关于上下文压缩导致系统冻结的 Bug 引发了大量讨论，成为今日的焦点。

### 2. 版本发布
* **[Release] v1.1.12-beta.1** ([查看 Release](https://github.com/agentscope-ai/QwenPaw/releases))
  * **安全加固**: 隔离了不同安装实例的 keychain master key，防止潜在的跨实例密钥泄露 ([PR #5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) by @ekzhu)。
  * **CI/稳定性**: 强化了 Tauri 桌面端在 Windows 环境下的 CI 流程，使其能更好地抵御 crates.io 拉取依赖失败的问题 ([PR #5125](https://github.com/agentscope-ai/QwenPaw/pull/5125) by @jinglinpeng)。
  * *分析师点评*: 本次 beta 版本重点聚焦于底层安全与构建健壮性，为后续的正式版打下了良好基础。

### 3. 项目进展
今日共有 20 个 PR 被合并或关闭，项目在多模型兼容、配置系统健壮性和 UI 体验上取得了显著进展：
* **多模型兼容性修复**: 修复了 Gemini API 在函数调用时因 schema 包含 `additionalProperties` 导致的 400 错误 ([PR #5226](https://github.com/agentscope-ai/QwenPaw/pull/5226))；统一了标题生成器的格式化程序，使其支持所有模型提供商 ([PR #5228](https://github.com/agentscope-ai/QwenPaw/pull/5228))。
* **配置系统修复**: 修复了缓存返回对象引用导致的运行时配置污染问题（确保使用深拷贝），避免了用户自定义配置被静默覆盖的严重隐患 ([PR #5229](https://github.com/agentscope-ai/QwenPaw/pull/5229))。
* **桌面端修复**: 修复了 Tauri 插件依赖导致的启动死循环问题 ([PR #5238](https://github.com/agentscope-ai/QwenPaw/pull/5238))。
* **控制台与集成测试**: 新增了 Sprint 2.4 的定时任务执行和工具 API 的集成测试 ([PR #5201](https://github.com/agentscope-ai/QwenPaw/pull/5201))。

### 4. 社区热点
今日社区讨论极其活跃，开发者围绕内存管理与 Agent 机制提出了深度反馈：
* **[Issue #5218]** [Bug] **子 Agent 触发上下文压缩时进程冻结** (13 条评论) —— 这是今日讨论最激烈的问题。当子 Agent 触发上下文压缩时，主进程会完全死锁，只能手动重启。这暴露出当前长对话处理机制中的同步阻塞缺陷。
* **[Issue #5063]** [Feature] **集成 Headroom 上下文压缩层** (6 条评论) —— 开发者建议集成 Headroom SDK，通过可逆的上下文压缩技术，预期减少 60-95% 的 Token 消耗。这与上述的内存/上下文痛点高度契合。
* **[Issue #5205]** [Feature] **Agent 自我进化机制** (3 条评论) —— 社区呼吁 Agent 应该从错误中学习。目前规则文件（如 SOUL.md）仅被作为参考文本读取，而非可执行的规则，限制了 Agent 的自我演进能力。

### 5. Bug 与稳定性
根据社区反馈，今日的 Bug 集中在内存管理、桌面端稳定性和定时任务调度：
* 🔴 **严重**: QwenPaw 进程在触发上下文压缩时冻结无响应 ([Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218))。
  * *修复状态*: 已提交修复 PR，为 `agent.reply()` 添加超时保护机制 ([PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242))。
* 🔴 **严重**: QwenPaw Desktop 在 macOS ARM64 上陷入崩溃死循环 ([Issue #5209](https://github.com/agentscope-ai/QwenPaw/issues/5209))，以及 ReMeLight 触发 ChromaDB Rust 绑定时频繁 SIGSEGV 崩溃 (2天崩溃48次, [Issue #5243](https://github.com/agentscope-ai/QwenPaw/issues/5243))。
  * *修复状态*: 已提交降级方案 PR，允许配置关闭向量操作或覆盖 chromadb 版本 ([PR #5246](https://github.com/agentscope-ai/QwenPaw/pull/5246))。
* 🟡 **中等**: 定时任务调度问题。一方面任务到了时间不执行 (last_run_at 为 null, [Issue #5235](https://github.com/agentscope-ai/QwenPaw/issues/5235))；另一方面，触发的 Cron 任务会以用户消息形式插入聊天流，打断 Agent 正在执行的主任务 ([Issue #5250](https://github.com/agentscope-ai/QwenPaw/issues/5250))。
  * *修复状态*: 已提交 PR，将 APScheduler 的默认 `misfire_grace_seconds` 从 60 提升至 3600 ([PR #5241](https://github.com/agentscope-ai/QwenPaw/pull/5241))。

### 6. 功能请求与路线图信号
从近期的 Feature Request 和待合并 PR 中，可以清晰看出 CoPaw 的下一步演进方向：
* **上下文与成本优化**: 结合 [Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) 与待合并的 [PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244)（引入 HeadroomContextManager），项目即将具备大幅度削减 Token 消耗的能力。
* **企业级通讯频道增强**: 用户对企业微信图文混排发送 ([Issue #5217](https://github.com/agentscope-ai/QwenPaw/issues/5217)) 和飞书长文本流式渲染优化 ([Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167)) 的呼声较高，这表明 CoPaw 在国内 ToB 市场的渗透率正在提升。
* **代码分析能力内置**: 社区贡献者提交了零依赖代码索引器和 "Ponytail" 编码哲学规则注入 ([PR #5247](https://github.com/agentscope-ai/QwenPaw/pull/5247))，暗示项目将更深地涉足 AI 辅助编程领域。

### 7. 用户反馈摘要
* **痛点 1: 长上下文处理极其脆弱**。多名用户反馈长对话后无响应 ([Issue #5161](https://github.com/agentscope-ai/QwenPaw/issues/5161))，尤其是跨平台同步（如飞书、钉钉睡眠断连 [Issue #5214](https://github.com/agentscope-ai/QwenPaw/issues/5214)）和上下文压缩时，极易触发死锁或格式错误（如 MiniMax 模型 XML 格式不兼容 [Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)）。
* **痛点 2: 桌面端资源管理与 UI 布局**。macOS 用户对底层向量数据库（ChromaDB）导致的内存泄漏/崩溃感到沮丧。同时，桌面端 UI 被指出顶部导航栏占用过多空间，屏幕利用率低 ([Issue #5211](https://github.com/agentscope-ai/QwenPaw/issues/5211))。
* **满意点**: 开发者对 QwenPaw 的频道打通能力（如飞书 CardKit）表示认可，且高度期待插件化生态（如 Kimi 接入白名单 [Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) 和 DataPaw 数据分析插件 [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)）。

### 8. 待处理积压
以下重要项目需要维护团队重点关注与 Review：
* **[PR #5088] [Breaking Change] 治理与沙盒接口初步讨论**: 涉及核心架构变更，需要深入的架构评审。
* **[PR #4622] DataPaw 数据分析插件**: 包含 12 个 BI 技能的大型社区插件，处于 Under Review 状态，需要维护者评估合并优先级。
* **[PR #5158] 控制台用户输入队列**: 标记为 "Not Ready"，涉及改变用户交互底层的消息流转逻辑。

---
*免责声明：本报告基于 GitHub 过去 24 小时的静态数据快照生成，反映了当前时间节点的项目状态与社区脉搏。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**
**报告日期**: 2026-06-17
**分析周期**: 过去 24 小时 (2026-06-16 至 2026-06-17)

---

### 1. 今日速览
在过去 24 小时内，ZeptoClaw 项目整体活跃度呈现出“基础设施维护为主、业务逻辑停滞”的特征。项目今日未发布任何新版本，且无新增或关闭的 Issues，表明用户端的问题反馈处于静默期。唯一的工程动态来自自动化机器人提交的依赖更新（Pull Request #630），旨在升级底层 Docker 基础镜像。综合来看，项目当前处于平稳运维与底层依赖打磨阶段，暂无重大功能演进。

### 2. 版本发布
* **今日新发布版本**: 无。
*(注：项目维持现有版本状态，未向生产环境推送任何新功能、修复或破坏性变更。)*

### 3. 项目进展
今日项目未合并或关闭任何代码贡献，整体代码库与主线功能无实质向前推进。
* **待处理 PR 进展**: 仅有 1 个待合并的依赖更新 PR 正在等待维护者 review（[PR #630](https://github.com/qhkm/zeptoclaw/pull/630)）。该 PR 若被合并，将小幅提升 Docker 环境的安全性和稳定性，但属于常规技术债务清理，不产生直接的业务价值。

### 4. 社区热点
今日 GitHub 评论区（Issues 与 PRs）**无任何新增用户讨论或互动**。
* 唯一处于 Open 状态的动态是 [PR #630](https://github.com/qhkm/zeptoclaw/pull/630)，目前尚未有维护者回复或分配审核人员。这反映出项目当前可能在经历维护者精力分配的低谷期，或者是自动化更新频率较快导致人工审核出现了积压。

### 5. Bug 与稳定性
* **今日报告的 Bug**: 0 条。
* **稳定性评估**: 今日没有用户报告任何运行时崩溃、性能回退或逻辑错误。底层基础镜像 `debian` (trixie-slim) 的待定更新属于预防性维护，当前线上版本在没有该补丁的情况下依然保持稳定运行。

### 6. 功能请求与路线图信号
* **新增功能请求**: 0 条。
* **路线图信号**: 今日无法从社区动态中捕捉到关于 AI 智能体或个人助手能力扩展的新需求。建议结合项目长远 Roadmap 或近期的核心分支提交记录来评估下一阶段的功能开发重心。

### 7. 用户反馈摘要
由于今日无任何 Issue 新增或评论互动，**暂无法提取真实的用户痛点或使用场景反馈**。
这说明现有的功能集合基本满足了当前活跃用户群的需求，或者是项目近期未进行大规模宣传导致新用户 influx（流入）较少。

### 8. 待处理积压
* **🔔 维护者注意**: 自动化依赖管理工具 Dependabot 提交的 [PR #630](https://github.com/qhkm/zeptoclaw/pull/630)（[dependencies, docker] chore(deps): bump debian from `b6e2a15` to `4e401d9`）目前处于 **Open 且未响应状态**。虽然基础镜像更新不具紧急威胁性，但长期忽略 Dependabot 的 PR 会导致技术债务累积，并可能在未来引发依赖冲突。建议维护团队尽快完成 CI 流水线校验并予以合并或关闭。

---
*数据来源: ZeptoClaw GitHub 开放数据 | 分析师: AI 智能体开源观察*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 项目动态日报**
📅 日期：2026-06-17

---

### 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持着**极高的活跃度与开发推进速度**。今日共处理了 50 个 PR 更新（其中 23 个被合并或关闭），且收到了 33 个 Issue 更新，社区反馈和核心代码迭代呈现双螺旋上升态势。开发重心主要集中在 **v0.8.x 运行时的深度打磨**（尤其是 Gateway WebSocket 会话与生命周期解耦）以及 **安全与可观测性体系的重构**。虽然今日暂无新版本发布，但大量针对 S1/S2 级别 Bug 的修复 PR 的落地，为即将到来的下一轮版本发布扫清了障碍。

---

### 2. 版本发布
**本日无新版本发布（0 Releases）。**
当前主干代码活跃于 `master` 分支，从 PR 与 Issue 迹象来看，团队正在为 v0.8.1（集成与通道队列）及 v0.8.2（WASM 插件程序）积累特性与修复。

---

### 3. 项目进展
今日共有 23 个 PR 被合并或关闭，代码库在稳定性与可维护性上取得了实质性突破：

*   **安全与可观测性重构：** PR [#7748](https://github.com/zeroclaw-labs/zeroclaw/pull/7748) 引入了破坏性变更，将所有模型提供者调用路由至统一的归因调度器，大幅增强了全链路的追踪与计费可观测性。
*   **Zerocode TUI 对齐 Web 体验：** PR [#7802](https://github.com/zeroclaw-labs/zeroclaw/pull/7802) 在终端界面引入了 `Doctor` 诊断面板，使无头服务器和纯终端操作者无需切换至 Web 面板即可进行排障。
*   **运行时死锁与循环修复：** PR [#7681](https://github.com/zeroclaw-labs/zeroclaw/pull/7681) 修复了交织工具调用中的死循环检测漏洞，防止 Agent 在隐蔽的失败循环中卡死。
*   **网关连接健壮性提升：** PR [#7732](https://github.com/zeroclaw-labs/zeroclaw/pull/7732)（修复了自检探针的 WS 鉴权问题）与 PR [#7801](https://github.com/zeroclaw-labs/zeroclaw/pull/7801)（端口冲突时的智能端口推荐）显著改善了网关部署的初次体验。
*   **长期停滞贡献的清理：** 维护者集中关闭了一批长期无响应的陈旧 PR（如 Slack URL 预览抑制 [#6731](https://github.com/zeroclaw-labs/zeroclaw/pull/6731)、频道系统提示词前缀缓存修复 [#6630](https://github.com/zeroclaw-labs/zeroclaw/pull/6630)），保持了待办队列的健康度。

---

### 4. 社区热点
今日讨论度最高的问题集中在**项目工程化治理与安全供应链**：

*   **[最高热] Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)：RFC: Work Lanes, Board Automation, and Label Cleanup** (11条评论)
    *   **分析：** 这是一份已被接受并处于推广阶段的治理 RFC。社区在热烈讨论如何通过“工作车道”和看板自动化来路由任务，避免维护者陷入纯手工同步的泥潭。这说明项目已达到一定规模，社区正在建立更现代化的开源治理流。
*   **Issue [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675)：RFC: Hardened CI pipeline** (2条评论，高风险)
    *   **分析：** 用户/贡献者 ConYel 提出增加 CI 供应链扫描和 SBOM（软件物料清单）生成。作为一款 AI Agent 框架，插件和工具链的安全性是生命线，这一 RFC 引发了核心团队的高度关注。
*   **Issue [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758)：[Bug]: It doesn't matter how good the code is if the documentation is crap.** (2条评论)
    *   **分析：** 该言辞激烈的反馈直指项目当前的配置语法文档（Quickstart）。由于被标记为 S1（阻断工作流）后即被关闭，推测其已被转化为更具体的修复任务，但其背后反映出的“配置文档严重滞后于代码”的痛点值得警惕。

---

### 5. Bug 与稳定性
今日报告了多个影响工作流的严重 Bug（多为 S1/S2 级别），部分已有对应修复进展：

*   🔴 **[S1] 历史消息结构异常 (Anthropic):** Issue [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804)。长会话恢复时发送了非交替的 Anthropic 消息序列，导致提供商直接返回 400 错误。*(暂无关联修复 PR)*
*   🔴 **[S1] 指定模型被忽略:** Issue [#7796](https://github.com/zeroclaw-labs/zeroclaw/issues/7796)。直接 Agent 对话忽略了运行时配置中的 `max_tool_iterations`，导致工作流未达预期即终止。*(暂无关联修复 PR)*
*   🟠 **[S2] 特定提供商工具失效:** Issue [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)。在 OpenAI Responses/reasoning 和 Anthropic 回合中，原生/MCP 工具不可用，取决于模型对工具的接收状态。
*   🟠 **[S2] 0.8.0 预编译版本特性倒退 (Regression):** Issue [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)。v0.8.0 的官方预编译二进制文件遗漏了 Slack/Discord 通道特性的编译。需要降级至 0.7.x 才能恢复。
*   🟡 **[S3] TUI 状态显示不同步:** Issue [#7805](https://github.com/zeroclaw-labs/zeroclaw/issues/7805)。取消代码运行后，输入框仍提示“队列已暂停”。

---

### 6. 功能请求与路线图信号
从 Issue 和 PR 的联动可以看出，v0.8.1 及后续版本的方向信号已非常明确：

*   **异步与解耦的网关会话机制：** Issue [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) 提出将 WebSocket 生命周期与 Agent Turn 生命周期解耦。客户端断开不应取消正在运行的回合。这呼应了 Issue [#7776](https://github.com/zeroclaw-labs/zeroclaw/issues/7776) 对在 WS 通道支持自由格式 `ask_user` 的需求。这预示着**Web 端 Agent 将获得真正的后台运行能力**。
*   **细粒度 Agent 配置：** Issue [#7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) 请求支持按 Agent 覆盖 `prompt_injection_mode`（目前为全局设定）。Issue [#7794](https://github.com/zeroclaw-labs/zeroclaw/issues/7794) 提出按 Agent 开启 “Dream Mode”（并已提交对应的 PR [#7797](https://github.com/zeroclaw-labs/zeroclaw/pull/7797)）。**细粒度配置权限控制**将是下个版本的重点。
*   **插件与集成扩展：** Issue [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) 和 Issue [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) 分别追踪了 v0.8.1 的通道集成和 v0.8.2 的 WASM 插件程序。今日合并的 PR [#7788](https://github.com/zeroclaw-labs/zeroclaw/pull/7788)（添加第一方扩展架构指南）为社区开发第三方插件铺平了道路。

---

### 7. 用户反馈摘要
综合今日的 Issue 反馈，用户的真实使用场景与痛点集中在以下三个方面：

1.  **长程对话的上下文管理依然脆弱：** 多名用户反馈在进行长会话、Code 会话恢复（Issue [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) 显示恢复后对话记录空白）或使用特定模型（如 GLM-5.1 的思维链泄漏 Issue [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643)）时，存在严重的上下文丢失或格式崩坏。
2.  **Web UI 与 TUI 的功能割裂：** 尽管团队在努力对齐，但用户依然感受到终端操作者和 Web 仪表盘操作者在功能体验上的落差（如 Issue [#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) 和 [#7757](https://github.com/zeroclaw-labs/zeroclaw/issues/7757) 中 Skills 页面展示不一致的问题）。
3.  **Cron 工具的易用性痛点：** 用户强依赖于使用 Cron 跑定时低成本任务，但发现文档缺失，且难以指定特定模型运行 Cron 任务（Issue [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)），同时 `cron session_target=main` 存在状态隔离 Bug（Issue [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648)）。

---

### 8. 待处理积压（提醒关注）
以下重要 Issue/PR 尚未得到有效推进或仍处于待修复状态，需要核心维护者关注：

*   **[PR 审查瓶颈] PR [#7651](https://github.com/zeroclaw-labs/zeroclaw/pull/7651)：** 涉及修复仪表盘全局通道设置的暴露问题。该 PR 影响面极大（打上了几乎所有的核心模块标签），目前处于 Open 状态，可能需要多名维护者交叉审查以推进合并。
*   **[安全修复积压] Issue [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266)：** 自 4 月初报告至今。在非默认端口运行网关时不显示配对码，这是一个高危安全功能阻断问题，目前仍未有对应修复 PR 被 Merge。
*   **[技能冷却失效] Issue [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)：** `skill_manage` 补丁无视冷却时间，导致可能产生无限制的技能补丁。虽然已有单测代码，但未接入生产路径，存在 Agent 资源耗尽的风险。

</details>