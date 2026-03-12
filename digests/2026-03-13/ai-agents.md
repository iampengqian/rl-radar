# OpenClaw 生态日报 2026-03-13

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 22:03 UTC

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

# OpenClaw 项目动态日报 (2026-03-13)

## 1. 今日速览
OpenClaw 项目今日呈现出**极高的活跃度**与**快速迭代**的态势。过去24小时内，社区共产生了 **500条 Issue 更新**（其中 408 条为新建或活跃讨论）和 **500条 PR 更新**。维护团队响应迅速，单日关闭了 92 个 Issue 并合并了 142 个 PR，同时发布了 **v2026.3.11 正式版与 Beta 版**，重点修复了一个高危的 WebSocket 劫持安全漏洞。整体来看，项目正处于功能快速扩张与稳定性修复并行的关键阶段。

## 2. 版本发布

### **v2026.3.11 & v2026.3.11-beta.1**
本次更新主要聚焦于安全性修复：
*   **🛡️ [Security] WebSocket 劫持漏洞修复**：
    *   **问题**：在 `trusted-proxy` 模式下，如果存在代理头，系统此前未严格校验浏览器来源，可能导致跨站 WebSocket 劫持，从而使未受信任的来源获得 `operator.admin` 权限。
    *   **修复**：现在对所有浏览器发起的连接强制执行 Origin 验证，无论是否存在代理头。
    *   **安全公告**：[GHSA-5wcw-8](https://github.com/advisories/GHSA-5wcw-8) (示例链接)
*   **建议**：所有启用 `trusted-proxy` 模式或暴露在公网的生产环境用户**务必立即升级**至 v2026.3.11。

## 3. 项目进展
今日共有 **142 个 PR 被合并/关闭**，推进了多项关键功能与修复：

*   **架构重构**：合并了 PR #25561，修复了压缩后内存索引同步的问题，提升了长期运行后的检索准确性。
*   **错误处理增强**：PR #43823 被合并，增加了对 HTTP 422 错误的故障转移分类，改善了针对 VLLM/Qwen 等代理服务的兼容性。
*   **待合并的重要功能**：
    *   **PR #43501 (Realtime Voice)**：引入 OpenAI Realtime API 支持，将语音通话延迟从 2-3秒降低至 200-400ms，目前待合并。
    *   **PR #43811 (Dashboard API)**：大幅优化 Control UI 的会话状态管理与订阅机制，解决 UI 轮询开销问题。
    *   **PR #43497 (Subagent Recovery)**：实现了网关重启后子任务的自动恢复机制，显著提升系统鲁棒性。

## 4. 社区热点
今日讨论最热烈的话题集中在**本地化支持**、**渠道集成**及**模型兼容性**上：

1.  **[Open] #3460 国际化 (i18n) 支持** (评论 97 | 👍 2)
    *   **核心诉求**：全球用户强烈希望能有多语言界面。官方回应目前带宽有限，无法官方支持，但欢迎社区 PR。这表明项目全球化需求激增，亟需贡献者介入。
2.  **[Open] #26534 首次安装增加钉钉 通道选项** (评论 60 | 👍 19)
    *   **核心诉求**：钉钉作为国内核心办公软件，目前虽已支持但未集成在初始化向导中，增加了上手难度。这是中国市场用户的典型强需求。
3.  **[Closed] #32828 误报 "API rate limit reached"** (评论 53 | 👍 10)
    *   **核心痛点**：用户在使用正常 API Key 时遇到全局限流误报。该 Issue 已关闭，推测已在最新版中修复或确认了配置问题。

## 5. Bug 与稳定性
今日报告了多个严重的 **Regressions (回归问题)**，部分已有修复方案：

*   **🔴 严重 - 文件操作数据丢失 (v3.11 回归)**
    *   **Issue #44122 / #43858**：Edit/Write 工具在特定条件下会将文件静默擦写为 0 字节。
    *   **状态**：已提交 PR #43961 尝试修复进程残留问题，核心修复正在 Review 中。
*   **🔴 严重 - Cron 任务失效 (v3.8 回归)**
    *   **Issue #42883 / #44257**：升级后 Cron 任务停止运行或孤立会话超时。
    *   **状态**：目前仍在排查中，建议暂时回退至旧版本或避免升级。
*   **🟠 中等 - 模型切换导致崩溃**
    *   **Issue #44303**：会话中途切换到上下文更小的模型会导致 Gateway 硬崩溃，而不是自动截断上下文。
    *   **修复**：PR #44389 已提交，增加了模型切换时的上下文预检查。
*   **🟠 中等 - macOS Gateway 启动/重启失败**
    *   **Issue #6156 / #44093**：macOS LaunchAgent 重启后经常无法加载服务。
    *   **修复**：PR #44161 提交了 "fail fast" 机制以改善启动诊断。

## 6. 功能请求与路线图信号
从 Issue 和 PR 活动中可以观察到项目接下来的重点方向：

*   **多模态视觉能力**：Issue #28744 要求 Agent 能接收并识别图片（飞书等场景），PR #44399 正在添加 MiniMax 原生图像回退支持，多模态能力是下一阶段重点。
*   **语音通话**：Issue #7200 呼叫实时语音通话，PR #43501 (OpenAI Realtime API) 已接近完成，预计很快上线。
*   **沙箱与安全**：PR #43863 (Firecracker VM support) 和 PR #25145 (Outbound message approval gate) 显示项目正在构建企业级的沙箱隔离与审批流功能。

## 7. 用户反馈摘要
*   **痛点**：
    *   **频繁的 Breaking Changes**：近期版本更新引入了较多回归 Bug（如 Cron 失效、文件丢失），用户升级时需格外谨慎。
    *   **配置复杂度高**：Issue #15708 和 #40631 显示配置验证报错信息不够友好，新手容易卡在启动环节。
*   **好评**：
    *   **修复速度快**：对于报出的严重 Bug，社区和开发者的响应非常积极。
    *   **生态扩展**：对 DingTalk、Feishu 等国内平台的深度集成受到国内用户肯定。

## 8. 待处理积压
以下重要长期 Issue 暂无官方近期解决的迹象，需关注：

*   **[Help Wanted] #75 Linux/Windows Clawdbot Apps**：社区长期呼唤官方的 Linux/Windows 客户端，目前仅有移动端和 macOS 端，限制了桌面端普及。
*   **[Open] #13616 备份/恢复工具**：缺乏原生的配置和会话历史备份工具，影响灾难恢复体验。
*   **[Stale] #15614 WhatsApp 二维码无法识别**：这是一个长期存在的连接性问题，影响部分用户的移动端接入体验。

---

## 横向生态对比

# 2026-03-13 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景

当前 AI 智能体开源生态正处于**从"单一聊天机器人"向"多模态自主智能体平台"跨越的关键爆发期**。以 **OpenClaw** 为首的头部项目日活跃度极高（单日 500+ Issue/PR），确立了**企业级安全与多模态**的标准；同时，NanoBot、PicoClaw 等项目正在快速跟进，呈现出**架构重构（SOUL.md）、沙箱隔离与长期记忆**成为技术标配的趋势。国产化力量（如 LobsterAI, TinyClaw）则在本地化模型支持和特定场景（如边缘计算、协同办公）上展现出强劲的差异化竞争力。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 今日 Release | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (🔥极高) | 500 (🔥极高) | **v2026.3.11** (安全修复) | **成熟期/快速扩张**：核心高危漏洞已修，功能迭代极快，回归问题需关注。 |
| **NanoBot** | 47 (高) | 75 (高) | 无 | **成长期**：社区贡献活跃，生态萌芽，核心关注安全性与配置体验。 |
| **Zeroclaw** | 50 (高) | 50 (高) | **v0.1.9a** | **重构期**：基础设施（CI/CD, 分支）正在整顿，安装体验痛点明显。 |
| **PicoClaw** | 22 (中) | 95 (🔥极高) | Nightly | **架构变革期**：正在进行 Agent "灵魂"重构，安全加固力度大。 |
| **NanoClaw** | 22 (中) | 34 (中) | 无 | **调整期**：专注 Token 成本优化与架构安全，OAuth 问题影响体验。 |
| **IronClaw** | N/A (高)* | 50 (高) | 无 | **攻坚期**：Bug Bash 进行中，Routines 与 OAuth 集成问题突出。 |
| **LobsterAI** | 4 (低) | 11 (中) | **v0.2.4** | **稳定维护期**：性能优化显著，主要解决平台兼容性问题。 |
| **TinyClaw** | 4 (低) | 10 (中) | **v0.0.11** | **初创爆发期**：品牌重塑中，安装流程痛点正在快速修复。 |
| **Moltis** | 7 (低) | 4 (低) | 无 | **功能迭代期**：聚焦 MCP 扩展与移动端支持。 |
| **CoPaw** | 50 (高) | 50 (高) | **v0.0.7** (Tool Guard) | **扩张期**：引入安全层与多智能体架构，K8s 部署问题待解。 |
| **ZeptoClaw** | 低 | 4 (中) | 无 | **体验优化期**：CLI 交互与视觉反馈大幅增强。 |
| **EasyClaw** | 极低 | 极低 | **v1.6.7** | **稳定期**：专注于 macOS 适配与 OAuth 修复。 |

> *注：IronClaw Issue 数值未在摘要中明确，但根据描述热度推断为高。*

## 3. OpenClaw 在生态中的定位

*   **绝对领跑者**：无论是 Issue/PR 的数量级（500+）还是版本的迭代速度，OpenClaw 都远超同类项目，充当着生态的"风向标"。
*   **技术标杆**：率先解决了 WebSocket 劫持等高危安全漏洞，并引入了 OpenAI Realtime API（低延迟语音），确立了**生产级安全**与**全双工多模态交互**的行业标准。
*   **生态中枢**：不仅是独立的 Assistant，更成为了其他项目（如 LobsterAI, TinyClaw）底层的 Gateway 或参照核心。
*   **对比优势**：相比 NanoBot/PicoClaw 仍在探索 Agent 架构，OpenClaw 已进入稳定性修复与大规模集成阶段；相比 IronClaw/CoPaw，OpenClaw 的社区响应机制更为成熟（单日关闭 92 Issue）。

## 4. 共同关注的技术方向

1.  **安全性与沙箱隔离**
    *   **涉及项目**：OpenClaw (WS劫持修复), NanoBot (bubblewrap沙箱), CoPaw (Tool Guard), PicoClaw (DoS修复), NanoClaw (架构安全)。
    *   **趋势**：随着 Agent 权限扩大（Shell 执行、文件操作），"防逃逸"、"指令注入防御"和"高危操作审批"已成为所有项目的必修课。

2.  **多模态与实时语音**
    *   **涉及项目**：OpenClaw (Realtime API), NanoBot (语音转录), Moltis, TinyClaw。
    *   **趋势**：从纯文本转向"听、看、说"全能，低延迟语音（<400ms）成为竞争高地。

3.  **长期记忆与上下文管理**
    *   **涉及项目**：NanoBot (Mem0类系统), NanoClaw (LanceDB), PicoClaw (Context重构), CoPaw (向量数据库)。
    *   **趋势**：解决"金鱼记忆"问题，从向量检索向结构化长期记忆演进。

4.  **国产化模型与平台集成**
    *   **涉及项目**：几乎所有国内项目均在集成 钉钉/飞书、MiniMax/DeepSeek/魔搭。
    *   **趋势**：深度适配中国本土办公软件与 LLM 服务是核心差异化路径。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot / NanoClaw** | **PicoClaw / TinyClaw** | **CoPaw / IronClaw** |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **通用型企业级助手平台** | **轻量级/实验性 Agent 框架** | **边缘计算/个性化智能体** | **特定架构/垂直场景** |
| **功能侧重** | 稳定性、安全性、全渠道接入 | 扩展性、WebUI 生态、配置灵活 | 低资源消耗、硬件适配、SOUL定义 | Tool Guard、多工作区、Routines |
| **目标用户** | 生产环境用户、企业开发者 | 极客、个人开发者 | IoT 开发者、嵌入式场景 | 进阶用户、私有化部署者 |
| **技术架构** | 成熟微服务/Gateway 架构 | 插件化/模块化架构 | 重构中 (SOUL.md 分离) | 多智能体/安全层级架构 |

## 6. 社区热度与成熟度

*   **🚀 快速迭代/扩张层**：
    *   **OpenClaw**：处于"大开发"阶段，功能井喷但伴随回归 Bug（如文件丢失、Cron 失效），需依靠快速响应维持平衡。
    *   **PicoClaw, CoPaw**：架构级变更频繁（重构、多工作区），处于上升期，社区讨论热烈。

*   **🛠️ 质量巩固/调整层**：
    *   **NanoBot, NanoClaw, IronClaw**：正处于修复存量 Bug（OAuth, Routines, 容器安全）的阶段，侧重于打磨现有功能的可用性而非堆砌新功能。
    *   **Zeroclaw, TinyClaw**：主要精力集中在解决安装流程和基础环境问题（CI/CD, 依赖缺失），处于"打地基"阶段。

*   **🌱 稳定/垂直层**：
    *   **LobsterAI, EasyClaw, ZeptoClaw, Moltis**：版本发布趋于平缓，主要针对特定平台或特定性能指标进行优化，社区规模相对较小但粘性高。

## 7. 值得关注的趋势信号

1.  **"Breaking Changes" 焦虑加剧**：OpenClaw 用户的反馈（Cron 失效、文件丢失）警示行业，Agent 的**版本升级机制**必须更加鲁棒，未来的 Agent OS 需要类似 K8s 的"健康检查"与"回滚"机制。
2.  **从 "Tool" 到 "Teammate"**：PicoClaw 提出的 `SOUL.md` 与 `AGENT.md` 分离设计，标志着 Agent 开发正在从单纯的"能力封装"转向**性格与价值观的工程化定义**。
3.  **GUI 需求爆发**：NanoBot 的第三方 WebUI、TinyClaw 的 TinyOffice 以及 CoPaw 的管理页需求表明，纯 CLI 的 Agent 已无法满足大众用户，**自带 Admin UI / Dashboard** 将成为开源项目的标配。
4.  **Token 成本成为架构约束**：NanoClaw 社区对"零成本压缩"和"Inline Compaction"的强烈需求，预示着在架构设计层面，**Token 效率**将取代单纯的响应速度成为首要优化指标。
5.  **OAuth 与认证仍是最大痛点**：跨项目（IronClaw, NanoClaw, EasyClaw）均出现 OAuth 过期或配置错误导致的阻断性问题，说明**第三方服务的标准化认证集成**仍是 AI Agent 落地的最大拦路虎。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是根据您提供的 GitHub 数据生成的 NanoBot 项目 2026-03-13 动态日报。

---

# NanoBot 项目动态日报 (2026-03-13)

## 1. 今日速览
NanoBot 项目今日保持**极高的社区活跃度**，过去 24 小时内共产生 47 条 Issue 更新和 75 条 PR 更新。项目目前处于功能快速迭代与生态扩展阶段，社区贡献者不仅积极修复 Bug（如 Telegram 双重回复、QQ 客户端兼容性），还通过 PR 引入了 Google Vertex AI 支持、沙箱隔离机制及更灵活的心跳调度。值得注意的是，出现了一个备受好评的第三方 Web 管理面板，显示了项目周边生态的萌芽。今日无新版本 Release 发布，但代码库变更频繁，预计正在为下一个版本积蓄功能。

## 2. 版本发布
**无新版本发布**。虽然官方未发布新版本，但根据 PR 动态，项目正在积极整合 Vertex AI、Mistral 语音转录及更安全的执行环境等重大更新。

## 3. 项目进展
今日共有 **41 条 PR 被合并或关闭**，显著提升了项目的稳定性与功能性：

*   **交互体验优化**：PR [#1930](https://github.com/HKUDS/nanobot/pull/1930) 修复了 CLI 中子代理异步输出导致的乱码问题，显著改善了命令行交互体验。
*   **模型生态扩展**：PR [#1608](https://github.com/HKUDS/nanobot/pull/1608) 的合并标志着对火山引擎和 BytePlus 模型的官方支持落地。
*   **长期记忆演进**：PR [#137](https://github.com/HKUDS/nanobot/pull/137) 引入了类 Mem0 的自适应长期记忆系统，这是向持久化上下文迈出的重要一步。
*   **配置灵活性**：PR [#1933](https://github.com/HKUDS/nanobot/pull/1933) 允许通过配置禁用特定技能，提升了自定义能力。

## 4. 社区热点
今日讨论最热烈的话题集中在**易用性**与**安全性**上：

*   **第三方 WebUI 发布 (Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922))**：
    *   社区开发者 @Good0007 发布了 `[nanobot-webui]`，提供包括仪表盘、实时聊天和多用户支持在内的自托管管理面板。这反映了用户对图形化管理工具的强烈需求，填补了官方仅提供 CLI 的空白。
*   **安全性隐患讨论 (Issue [#1873](https://github.com/HKUDS/nanobot/issues/1873))**：
    *   用户 @kinchahoy 指出 NanoBot 可能通过 `exec()` 访问并泄露 `config.json` 中的密钥。该 Issue 引发了关于容器内权限隔离和沙箱机制的深入讨论，随后作者提交了利用 bubblewrap 的修复 PR [#1940](https://github.com/HKUDS/nanobot/pull/1940)。
*   **多渠道连接问题**：飞书配置失败 (Issue [#176](https://github.com/HKUDS/nanobot/issues/176)) 和 Telegram 机器人重复回复 (Issue [#1692](https://github.com/HKUDS/nanobot/issues/1692)) 依然是用户反馈的高频痛点。

## 5. Bug 与稳定性
今日报告了多处影响用户体验的关键 Bug，部分已有社区提交修复：

*   **[高] Telegram 重复回复 (Issue [#1692](https://github.com/HKUDS/nanobot/issues/1692))**：
    *   **现象**：Telegram Bot 对同一条指令回复两次（一次渲染 Markdown，一次纯文本）。
    *   **状态**：Open，尚无明确修复 PR 合并。
*   **[中] QQ 客户端兼容性破坏 (Issue [#1936](https://github.com/HKUDS/nanobot/issues/1936))**：
    *   **现象**：近期提交导致 Markdown 格式消息破坏了旧版 QQ 客户端的交互。
    *   **修复**：已有 PR [#1941](https://github.com/HKUDS/nanobot/pull/1941) 提交，旨在恢复纯文本回复以兼容旧版客户端。
*   **[中] DashScope 模型兼容性 (Issue [#1927](https://github.com/HKUDS/nanobot/issues/1927))**：
    *   **现象**：阿里云 DashScope 不支持 `tool_choice="required"`，导致记忆归档失败。
    *   **状态**：Open，需要针对特定 Provider 进行参数适配。
*   **[低] CLI 乱码 (Issue [#1904](https://github.com/HKUDS/nanobot/issues/1904))**：
    *   **修复**：已通过 PR [#1930](https://github.com/HKUDS/nanobot/pull/1930) 修复并合并。

## 6. 功能请求与路线图信号
根据 Issues 和 PRs 分析，下一阶段的功能重心可能围绕以下几点：

*   **可插拔化架构**：Issue [#1719](https://github.com/HKUDS/nanobot/issues/1719) 强烈呼吁 Web Search 后端支持 Tavily、SearXNG 等多种引擎，而非仅限 Brave。这表明社区希望核心组件更加解耦。
*   **模型支持广度**：PR [#1943](https://github.com/HKUDS/nanobot/pull/1943) 正在试图增加 Google Vertex AI 支持；Issue [#140](https://github.com/HKUDS/nanobot/issues/140) 提出了对 GitHub Copilot Provider 的需求。
*   **语音交互能力**：Issue [#1106](https://github.com/HKUDS/nanobot/issues/1106) 询问语音输入输出支持，结合 PR [#1680](https://github.com/HKUDS/nanobot/pull/1680) 对通用语音转录服务的改进，语音功能可能很快会进入主线。
*   **沙箱隔离**：针对 Issue [#1873](https://github.com/HKUDS/nanobot/issues/1873) 的 PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) 若被合并，将显著提升生产环境的安全性。

## 7. 用户反馈摘要
从评论中提炼出的用户情绪与痛点如下：

*   **痛点**：
    *   **文档滞后**：多位用户（如 Issue #680, #1617）抱怨配置文件格式与教程不符，且缺乏中文文档，导致上手门槛高。
    *   **Channel 不稳定**：飞书、WhatsApp、Matrix 等 Channel 的连接和配置问题占据了大量支持请求。
*   **满意点**：
    *   用户对项目的扩展性表示认可，特别是能够通过配置自定义模型和 API。
    *   第三方 WebUI 的出现迅速获得了正面反馈（👍 3），表明社区渴望更友好的管理界面。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或官方回应，建议维护者关注：

*   **PyPI 发布滞后 (Issue [#1059](https://github.com/HKUDS/nanobot/issues/1059))**：最新版本未同步至 PyPI，影响用户通过 pip 直接升级。
*   **Matrix Channel 失效 (Issue [#1300](https://github.com/HKUDS/nanobot/issues/1300))**：该问题已持续两周，阻碍了 Matrix 社区用户的接入。
*   **Web Search 扩展性 (Issue [#1719](https://github.com/HKUDS/nanobot/issues/1719))**：该功能请求获得了 10 个 👍，属于高需求功能，目前仍无官方明确的架构设计方案。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是根据 Zeroclaw (github.com/zeroclaw-labs/zeroclaw) 2026-03-13 的 GitHub 数据生成的项目动态日报。

---

# 📊 Zeroclaw 项目动态日报 (2026-03-13)

## 1. 今日速览
Zeroclaw 项目今日维持**极高的活跃度**，共产生 100 次代码库交互（50 Issues + 50 PRs），社区热度显著回升。项目组于今日发布了 **v0.1.9a** 版本，重点修复了 CI 流程与运行时环境变量解析问题。值得注意的是，项目完成了大规模的**代码库分支整理**，将默认分支统一为 `master`，解决了长期存在的文档与安装脚本指向不一致的历史遗留问题。此外，针对近期频发的 GLIBC 版本不兼容和中文输入崩溃问题，社区提交了多项关键修复 PR。

## 2. 版本发布
### 🚀 [v0.1.9a](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9a)
本次更新主要为稳定性修复，未发现破坏性变更。
- **环境变量修复**: 修复了 Embedding API 密钥无法从 `embedding_provider` 环境变量正确解析的问题 ([PR #3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))。
- **CI/CD 修复**: 降级 `action-gh-release` 至 v2.4.2 以修复发布流程无法最终化的问题 ([PR #3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))。

## 3. 项目进展
今日共有 **15 个 PR 被合并或关闭**，重点推进了以下领域：
- **CI/CD 基础设施**: 合并了 [PR #3363](https://github.com/zeroclaw-labs/zeroclaw/pull/3363) 和 [PR #3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365)，通过引入 Thin LTO 优化配置和修复 Runner 缓存不匹配问题，显著提升了构建稳定性。
- **CLI 稳定性**: [PR #3322](https://github.com/zeroclaw-labs/zeroclaw/pull/3322) 修复了 CLI Agent 在处理包含空格的中文输入时的 UTF-8 崩溃问题。
- **核心功能扩展**: [PR #3324](https://github.com/zeroclaw-labs/zeroclaw/pull/3324) 新增了 `channel send` 命令，支持 Agent 主动向外部频道（如 Telegram）推送消息，解决了长期以来的单向通信限制。

## 4. 社区热点
今日社区讨论主要集中在环境兼容性和功能增强上：
- **[Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) [CLOSED]**: **GLIBC_2.39 not found**。这是目前用户反馈最强烈（👍 2）的问题，源于 CI 缓存导致二进制文件在旧版 Linux 发行版上无法运行。
- **[Issue #3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) [CLOSED]**: **飞书/Lark 渠道配置混乱**。用户指出 `channel-lark` 命名不规范且默认未启用，导致接入困难，表明企业级通讯工具的集成仍是用户刚需。
- **[Issue #2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) [CLOSED]**: **社区更新公告**。维护者发布了关于项目内部调整的说明，获得了社区的理解与支持（👍 12），显示项目拥有良好的社区韧性。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在运行时环境与配置加载，部分已有修复方案：

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **S0 (高危)** | [Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | `GLIBC_2.39 not found` 导致 Daemon 无法启动 | **已修复** (见 [PR #3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365)) |
| **S1 (阻塞)** | [Issue #2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | 配置已存在仍提示 "System not activated" | **修复中** (见 [PR #3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356)) |
| **S1 (阻塞)** | [Issue #2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | 飞书 Channel 无法启动 | **修复中** (见 [PR #3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355)) |
| **S1 (阻塞)** | [Issue #2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | Docker 初始化脚本 `Unbound variable` 错误 | **待观察** |

## 6. 功能请求与路线图信号
结合用户需求与活跃 PR，以下功能极有可能在下个版本落地：
- **Azure OpenAI 支持**: [Issue #3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) 请求支持 Azure endpoints，这是企业用户迁移上云的关键需求。
- **主动消息推送**: [PR #3324](https://github.com/zeroclaw-labs/zeroclaw/pull/3324) 的合并将允许 Zeroclaw 作为主动通知中心（如传感器报警），而非仅仅作为被动聊天机器人。
- **MCP 协议支持**: [Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) 提议 Agent 子命令支持 MCP，显示项目正积极跟进 Model Context Protocol 标准。

## 7. 用户反馈摘要
- **痛点 - 安装体验**: 用户普遍反映安装脚本混乱，部分文档指向已不存在的 `main` 分支或 `bootstrap.sh` ([Issue #3247](https://github.com/zeroclaw-labs/zeroclaw/issues/3247), [PR #3350](https://github.com/zeroclaw-labs/zeroclaw/pull/3350))。
- **痛点 - 容器化局限**: 用户指出官方 Docker 镜像基于 Distroless 打包，导致无法使用 Shell 工具进行 Git 操作或文件管理 ([Issue #3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359))。
- **场景 - 本地模型**: 多个 Issue ([#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963), [#2926](https://github.com/zeroclaw-labs/zeroclaw/issues/2926)) 提及在本地运行 LLM 时遇到的超时和速率控制问题，表明 Zeroclaw 在私有化部署场景中有大量拥趸。

## 8. 待处理积压
- **[Issue #3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359)**: Docker 镜像缺少 Shell 导致 Agent 工具链受限。这是一个高优先级的功能请求，直接影响容器化部署的可用性，目前暂无官方回应。
- **[Issue #8](https://github.com/zeroclaw-labs/zeroclaw/issues/8)**: Gateway HTTP 响应缺少 CORS 和安全头。该安全漏洞自 2 月 14 日开启至今未完全解决，建议维护者优先处理以通过安全合规检查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-03-13)

**分析师**：AI Open Source Analyst
**数据源**：github.com/sipeed/picoclaw
**报告周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日呈现出极高的活跃度，正处于 **Agent 架构重构与安全性加固的关键阶段**。过去 24 小时内，项目收到了 **95 个 PR 更新**（其中 67 个待合并）和 **22 个 Issue 更新**，代码迭代速度显著加快。

社区方面，关于 **Agent 身份定义（SOUL.md/AGENT.md）** 的讨论热度最高，显示出项目正在向更具“个性”和“自主性”的 AI 智能体演进。同时，多个针对 Channel（Matrix, LINE）的 DoS 漏洞被报告并迅速修复，表明项目方正致力于提升企业级部署的安全性。

---

## 2. 版本发布

今日发布了 2 个版本，均为 Nightly 构建，尚未发布 Stable 版本。

### 🚀 v0.2.2-nightly.20260312.6612ca09
**更新重点**：功能增强与稳定性修复
*   **新功能**：
    *   **Matrix 富文本支持**：启用 Matrix 频道的富文本消息功能 ([#1370](https://github.com/sipeed/picoclaw/pull/1370))。
    *   **新模型支持**：增加 LongCat 模型提供商支持 ([#1317](https://github.com/sipeed/picoclaw/pull/1317))。
*   **修复**：
    *   修复了 Direct Agent 模式下 MCP（Model Context Protocol）初始化失败的问题。

### 🚀 Nightly Build (v0.2.2-nightly.20260312.6460a0a7)
*   自动化构建版本，包含最新的代码提交，可能存在不稳定性，仅供测试使用。

---

## 3. 项目进展

今日共有 **28 个 PR 被合并或关闭**，主要集中在**安全性修复**、**生态兼容性**和**工具链优化**三个方面。

| PR 链接 | 类型 | 摘要 | 价值分析 |
| :--- | :--- | :--- | :--- |
| [#1436](https://github.com/sipeed/picoclaw/pull/1436) | 🐞 Fix | **Matrix 下载流式处理** | **[高]** 修复了非加密媒体文件下载导致内存耗尽（DoS）的严重安全漏洞。 |
| [#1413](https://github.com/sipeed/picoclaw/pull/1413) | 🐞 Fix | **LINE Webhook 请求体限制** | **[高]** 限制请求体大小为 1MB，防止恶意 POST 请求打挂服务器。 |
| [#1254](https://github.com/sipeed/picoclaw/pull/1254) | 🐞 Fix | **安全卫士逻辑修正** | 修复了安全卫士错误拦截包含 URL 的命令（如 `curl`）的问题，减少了误报。 |
| [#1443](https://github.com/sipeed/picoclaw/pull/1443) | 🐞 Fix | **SVG MIME 类型修复** | 修正了 SVG 文件返回错误的 MIME 类型导致前端图标无法显示的问题。 |
| [#1444](https://github.com/sipeed/picoclaw/pull/1444) | 🐞 Fix | **Cron 时区支持** | 修复了定时任务不遵循配置时区的问题，提升了调度的准确性。 |
| [#1446](https://github.com/sipeed/picoclaw/pull/1446) | 🐞 Fix | **Spawn 工具模型解析** | 修复了 Spawn 子代理未使用目标 Agent 配置模型的 Bug。 |
| [#1447](https://github.com/sipeed/picoclaw/pull/1447) | ✨ Feat | **魔搭社区 支持** | 增加了对阿里云魔搭社区模型的后端与前端配置支持，降低了国内用户的使用门槛。 |
| [#1420](https://github.com/sipeed/picoclaw/pull/1420) | 🐞 Fix | **Fallback 链路增强** | 修复了 OpenRouter 传输重置导致 Fallback 链过早中断的问题，提升了服务鲁棒性。 |

**整体进度评估**：项目目前正如火如荼地进行 **Agent Refactor（智能体重构）**，虽然主要重构代码尚未合并，但大量的周边修复（特别是安全性修复）正在为重构铺平道路。

---

## 4. 社区热点

今日讨论最活跃的话题集中在**智能体的架构设计**与**本地模型适配**。

1.  **[Agent 重构] 什么是 Agent？** ([#1218](https://github.com/sipeed/picoclaw/issues/1218))
    *   **热度**：16 条评论
    *   **核心诉求**：作者 @alexhoshina 提出引入 `SOUL.md`（定义性格/价值观）和 `AGENT.md`（定义结构化配置）的概念。社区正在激烈讨论这种分离式设计的利弊，以及如何避免“过度工程化”。这标志着 PicoClaw 正试图从单纯的“工具调用者”转型为有“灵魂”的智能体。

2.  **[Bug] 本地 Ollama 模型配置困惑** ([#1161](https://github.com/sipeed/picoclaw/issues/1161))
    *   **热度**：15 条评论
    *   **核心诉求**：用户在对接本地 Ollama 时遇到 Agent 启动但无响应的问题。讨论集中在如何正确配置 endpoint 和模型名称。这反映出文档或配置引导可能对新手不够友好。

3.  **[功能请求] Telegram 原生表情反馈** ([#1328](https://github.com/sipeed/picoclaw/issues/1328))
    *   **热度**：3 条评论
    *   **核心诉求**：用户希望 Agent 处理简单消息（如“收到”、“谢谢”）时，使用 Telegram 的 Reaction（表情）而非发送文本，以减少噪音，更符合“人类”的交互习惯。

---

## 5. Bug 与稳定性

今日报告了多个严重的稳定性问题，主要集中在**输入处理**和**资源管理**上，且大部分已提交修复 PR。

*   **🚨 严重 - 远程内存耗尽**
    *   **Matrix Channel**: 下载媒体文件无大小限制 ([#1405](https://github.com/sipeed/picoclaw/issues/1405)) -> **已有修复 PR** [#1436](https://github.com/sipeed/picoclaw/pull/1436)
    *   **LINE Webhook**: 请求体读取无限制 ([#1407](https://github.com/sipeed/picoclaw/issues/1407)) -> **已有修复 PR** [#1413](https://github.com/sipeed/picoclaw/pull/1413)

*   **⚠️ 中等 - 功能不可用/逻辑错误**
    *   **QQ 渠道**: 无法正常使用 ([#1426](https://github.com/sipeed/picoclaw/issues/1426))，状态 Open。
    *   **Fallback 失效**: OpenRouter 连接重置导致回退链中断 ([#1419](https://github.com/sipeed/picoclaw/issues/1419)) -> **已有修复 PR** [#1420](https://github.com/sipeed/picoclaw/pull/1420) (已关闭)。
    *   **Web 服务**: 点击启动无反应 ([#1395](https://github.com/sipeed/picoclaw/issues/1395))，已由用户提供解决方案并关闭。
    *   **Telegram 输入状态**: 发送消息后一直显示“正在输入...” ([#1212](https://github.com/sipeed/picoclaw/issues/1212), [#1323](https://github.com/sipeed/picoclaw/issues/1323))，已关闭，可能已在 nightly 中修复。

*   **💡 轻微 - UI/兼容性**
    *   SVG MIME 类型错误导致图标不显示 ([#1410](https://github.com/sipeed/picoclaw/issues/1410)) -> **已有修复 PR** [#1443](https://github.com/sipeed/picoclaw/pull/1443)。

---

## 6. 功能请求与路线图信号

结合 Issues 和 PRs，以下是即将可能纳入版本的功能信号：

1.  **Agent 上下文管理重构** ([#1439](https://github.com/sipeed/picoclaw/issues/1439))：
    *   **信号**：计划定义历史记录/摘要/运行时的边界，以及压缩策略。这是 Agent 架构重构的重要一环，旨在解决长对话下的 Token 消耗和记忆问题。
2.  **Azure OpenAI 支持** ([#1424](https://github.com/sipeed/picoclaw/issues/1424) / [#1422](https://github.com/sipeed/picoclaw/pull/1422))：
    *   **信号**：PR 已提交，预计很快合并。这将打通企业级 Azure 服务的支持。
3.  **ModelScope (魔搭) 支持** ([#1438](https://github.com/sipeed/picoclaw/issues/1438) / [#1447](https://github.com/sipeed/picoclaw/pull/1447))：
    *   **信号**：PR 已提交。对国内生态非常友好的补充。
4.  **Web 端路由失败时的全局命令** ([#1449](https://github.com/sipeed/picoclaw/issues/1449))：
    *   **信号**：虽然已关闭，但提示了需要在 LLM 调用失败时保证基础控制命令（/help, /switch）的可用性，属于鲁棒性增强。

---

## 7. 用户反馈摘要

*   **痛点：配置门槛**：多位用户在配置 Ollama 等本地模型时遇到困难，表明目前的配置结构对于非 OpenAI 标准端点的适配还不够直观。
*   **场景：路由器部署** ([#1132](https://github.com/sipeed/picoclaw/issues/1132))：用户希望 PicoClaw 能运行在 OpenWrt 路由器上，显示其作为“私人 AI 助手”在边缘计算设备上的需求很大。
*   **体验：静默执行**：用户反馈在 Agent 执行长时间工具调用时缺乏反馈，希望能有实时进度提示（对应的 PR #1332 正在处理）。
*   **不满：工具限制**：用户抱怨 `max_tool_iterations` 硬限制导致复杂任务中断 ([#440](https://github.com/sipeed/picoclaw/issues/440))，希望改为基于上下文窗口的动态限制。

---

## 8. 待处理积压

*   **Web 端 JSON 编辑器 Bug** ([#1369](https://github.com/sipeed/picoclaw/issues/1396), #1364)：Firefox 下无法滑动/高度塌陷的问题虽已关闭，但需确认是否在最新 Web 构建中彻底解决。
*   **OpenWrt 适配** ([#1132](https://github.com/sipeed/picoclaw/issues/1132))：该 Feature Request 讨论度较低，但对于 IoT 场景非常重要，建议维护者评估是否纳入官方支持或提供社区版 Dockerfile。
*   **Exec 工具安全逻辑** ([#1042](https://github.com/sipeed/picoclaw/issues/1042))：关于 `restrict_to_workspace` 误杀 `curl` 等命令的问题，虽有 PR #1254 尝试修复，但 Issue 仍未关闭，需确认修复是否全面。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-13)

## 1. 今日速览
NanoClaw 项目今日保持了**极高的开发活跃度**，在过去 24 小时内更新了 22 条 Issues 和 34 条 PRs。项目重心正从单纯的功能堆砌转向**架构安全性增强**与**Token 成本优化**，社区围绕“容器是否真的安全”以及“如何零成本压缩上下文”展开了深入讨论。虽然今日无新版本发布，但大量 PR 已合并，修复了 Google Chat 线程混乱、Telegram 消息重复及 Unicode 兼容性等关键问题，预计近期将迎来一次重要的补丁版本更新。

## 2. 版本发布
*   **无新版本发布**

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，显著提升了系统的稳定性与集成能力：
*   **Google Chat 频道重构**：合并了 [PR #1000](https://github.com/qwibitai/nanoclaw/pull/1000) 和 [PR #1001](https://github.com/qwibitai/nanoclaw/pull/1001)，引入了线程级会话历史隔离，修复了 Agent 在不同话题间“串线”回复的严重体验问题。
*   **部署方式扩展**：[PR #1004](https://github.com/qwibitai/nanoclaw/pull/1004) 新增了 **Dokploy** 和 **Docker Compose** 部署支持，降低了生产环境自建的门槛。
*   **新渠道集成**：合并了 [PR #1006](https://github.com/qwibitai/nanoclaw/pull/1006) (ContextLife Claw Hub) 和 [PR #1012](https://github.com/qwibitai/nanoclaw/pull/1012) (Discord 文件发送技能)，拓展了生态边界。
*   **安全性补丁**：[PR #1005](https://github.com/qwibitai/nanoclaw/pull/1005) 修复了内部指令泄露到用户界面的隐私风险。

## 4. 社区热点
*   **[Issue #865] 架构安全性争议** (热度 High)
    *   **链接**: [qwibitai/nanoclaw Issue #865](https://github.com/qwibitai/nanoclaw/issues/865)
    *   **分析**: 用户 `calebfaruki` 指出“使用容器并不等同于安全”，认为当前架构过于信任 Agent 内部的脚本。这反映了对 NanoClaw **沙箱隔离机制**的深层次担忧，社区正在探讨将敏感逻辑移至宿主机侧的最佳实践。
*   **[Issue #730] OAuth Token 过期导致服务中断** (热度 High)
    *   **链接**: [qwibitai/nanoclaw Issue #730](https://github.com/qwibitai/nanoclaw/issues/730)
    *   **分析**: 这是一个长期困扰用户的问题，使用 Claude Code OAuth 模式时，Token 夜间过期导致次日上午容器批量 401。这是阻碍 NanoClaw 作为“无需维护的后台服务”普及的关键痛点。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：
*   **Critical (已有修复)**:
    *   **[PR #1003] Agent 协议违规**: 修复 LLM 返回 `ToolUse` 但不包含工具调用时的崩溃问题 ([Issue #827](https://github.com/qwibitai/nanoclaw/issues/827) | [PR #1003](https://github.com/qwibitai/nanoclaw/pull/1003))。
    *   **[PR #1009] WhatsApp 崩溃**: 修复 Unicode 代理字符导致 API 调用失败的问题 ([PR #1009](https://github.com/qwibitai/nanoclaw/pull/1009))。
*   **High (待处理)**:
    *   **[Issue #830] 定时任务丢失**: 当 Session 繁忙时，定时触发事件被静默丢弃，无重试机制。
    *   **[Issue #993] Podman macOS 连接中断**: macOS 睡眠唤醒后，Podman SSH 连接静默失败。
*   **Medium**:
    *   **[Issue #829] 幻觉执行**: Agent 谎称执行了工具但实际上未执行，需在 `SOUL.md` 中增加反幻觉规则。

## 6. 功能请求与路线图信号
*   **Token 成本控制**: 用户 `gm4leejun-stack` 提交了一系列关于 **Token 优化** 的提案 ([Issue #983](https://github.com/qwibitai/nanoclaw/issues/983))，包括 Inline Compaction 和 CLAUDE.md 自动压缩。这表明随着使用加深，**API 成本**已成为用户核心痛点，极有可能在下一版本作为实验性功能引入。
*   **语义记忆**: [PR #979](https://github.com/qwibitai/nanoclaw/pull/979) 提出使用 LanceDB 实现跨会话的长期记忆，解决 Agent "金鱼记忆" 问题，这是通向真正个性化 Assistant 的关键一步。
*   **凭证代理扩展**: [Issue #878](https://github.com/qwibitai/nanoclaw/issues/878) / [PR #999](https://github.com/qwibitai/nanoclaw/pull/999) 建议将凭证保护范围扩展至 Groq 和 OpenAI，显示出项目向 **多云/多模型支持** 演进的信号。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映 Setup 过程过于复杂且缓慢 ([Issue #973](https://github.com/qwibitai/nanoclaw/issues/973))；OAuth Token 的生命周期管理缺乏自动化，增加了运维负担。
*   **场景**: 大量 Skill 相关的 PR (Telegram 回调, Discord 文件, 飞书集成) 显示，用户正积极尝试将 NanoClaw 接入更多**异构通讯平台**，将其作为统一的消息中枢。
*   **评价**: 尽管存在安全性争议，用户 `fuyb` 仍评价项目 "Very useful and well designed"，并主动推荐 Podman 替代方案，显示了较高的社区忠诚度。

## 8. 待处理积压
*   **[Issue #341] Docker 兼容性破坏**: `add-discord` 技能包含过时的 Apple Container 代码，导致 Docker/Colima 用户无法使用。该 Issue 创建于 2 月 21 日，至今未修复，影响了跨平台兼容性。
*   **[Issue #730] OAuth 刷新机制**: 这是一个影响生产可用性的高优先级问题，目前尚未有官方明确的修复时间表，建议维护者优先关注。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw** 项目 2026-03-13 动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-13)

## 1. 今日速览
IronClaw 项目今日处于**高强度的 Bug 修复与质量攻坚阶段**。社区发起了明显的 "Bug Bash"（除虫）活动，集中暴露了 Google Workspace 集成、Telegram 频道交互以及扩展安装流程中的大量 P1 级关键问题。虽然过去 24 小时内合并的 PR 数量（14 条）远少于待处理的数量（36 条），但提交的修复涵盖了 Webhook、Routines（例程）调度等核心逻辑。目前项目稳定性面临挑战，尤其是新引入的扩展系统和 OAuth 流程亟待修复。

## 2. 版本发布
**无新版本发布**。当前项目似乎正在为下一个稳定版本积累修复代码，尚未达到发布标准。

## 3. 项目进展
尽管存在大量待处理 PR，今日仍有 **14 个 PR 合并/关闭**，主要集中在提升系统鲁棒性和修正早期版本的配置缺陷：

*   **Webhook 触发器 (PR #736)**: 新增了公共 Webhook 端点 `POST /api/webhooks/{path}`，允许外部事件直接触发 Routines，并引入了常量时间比较来验证 Secret，增强了安全性。
*   **搜索能力增强 (PR #234)**: 引入了加权分数融合作为混合搜索的替代算法，用户现在可以通过环境变量微调搜索行为（`SEARCH_FUSION_STRATEGY`），解决了此前只能使用硬编码 RRF 算法的问题。
*   **LLM 兼容性 (PR #216)**: 加固了 OpenAI 兼容的工具调用流程，并正式添加了对 **Ollama** 推理和嵌入的支持，大幅提升了本地部署场景的可用性。
*   **安全隐私 (PR #457)**: 添加了可复用的敏感 JSON 脱敏辅助工具，为日志记录和错误处理提供了标准化的隐私保护手段。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在 **Google 工具集成** 和 **扩展安装** 的可用性障碍上：

*   **[#1060 扩展安装失败 (OPEN)](https://github.com/nearai/ironclaw/issues/1060)**: 用户报告无法安装扩展，返回 HTTP 404。这是今日最受关注的阻塞问题，直接阻碍了新用户上手。
*   **[#299 MCP 认证困难 (CLOSED)](https://github.com/nearai/ironclaw/issues/299)**: 关于 MCP 服务器（特别是 Browserbase）无法与 Ironclaw 集成的讨论。用户指出 Ironclaw 缺乏修改 `mcpServers` JSON 配置的能力，这反映了用户对灵活接入外部工具的强烈需求。
*   **Google Sheets/OAuth 系列问题**: 多个 Issues (如 [#992](https://github.com/nearai/ironclaw/issues/992), [#999](https://github.com/nearai/ironclaw/issues/999)) 反映了 OAuth 流程中的参数错误 (`clientid` vs `client_id`) 和权限拒绝 (403)，表明目前的第三方服务集成还不够成熟。

## 5. Bug 与稳定性
今日报告了大量 Bug，严重程度普遍较高（P1/P2），主要集中在 **跨平台同步** 和 **Routines（例程）引擎**。

### 🔴 关键 (P1 / Critical)
*   **Routines 通知失败 ([#994](https://github.com/nearai/ironclaw/issues/994))**: 例程触发后尝试向 Telegram 发送通知时使用了错误的 `chat_id="default"`，导致通知静默失败。
*   **Routines 跨端不可见 ([#995](https://github.com/nearai/ironclaw/issues/995))**: 在 Web 端创建的例程在 Telegram 端不可见，数据同步存在断层。
*   **工具审批 UI 故障 ([#996](https://github.com/nearai/ironclaw/issues/996))**: 当工具需要用户审批时，模态框不会实时弹出，用户必须手动刷新页面才能看到 "Approve" 按钮，严重破坏交互体验。
*   **Google OAuth 参数错误 ([#992](https://github.com/nearai/ironclaw/issues/992))**: 从 Telegram 发起的 OAuth URL 包含格式错误的参数 (`clientid`)，导致 Google 直接拒绝请求。
*   **性能瓶颈 ([#823](https://github.com/nearai/ironclaw/issues/823))**: CI 审查在 `routine_engine` 中发现了严重的 N+1 查询模式，可能导致高负载下的性能问题。

### 🟠 重要 (P2 / High)
*   **Google Sheets 写入失败 ([#1002](https://github.com/nearai/ironclaw/issues/1002))**: 能够创建表格但无法写入数据，Agent 无法正确传递数组参数。
*   **Rate Limiter 信息缺失 ([#1000](https://github.com/nearai/ironclaw/issues/1000))**: 触发限流时报错 "retry after None"，导致 Agent 无法执行合理的退避重试策略。

*状态备注*: 针对部分 Web 端的 Routine Bug（如 `next_fire_at` 重新计算问题），[PR #1080](https://github.com/nearai/ironclaw/pull/1080) 已提交修复待合并。

## 6. 功能请求与路线图信号
*   **通用智能路由 ([PR #1081](https://github.com/nearai/ironclaw/pull/1081))**: 提议增加 `LLM_CHEAP_MODEL` 环境变量，允许任何后端（非仅 NearAI）使用轻量级模型处理简单任务。这表明项目正试图通过智能分层调度来降低运行成本。
*   **OpenAI 兼容 Embeddings ([PR #1082](https://github.com/nearai/ironclaw/pull/1082))**: 提议支持配置 `EMBEDDING_BASE_URL`，以便使用 OpenRouter、Azure 等兼容端点。
*   **语义级工具评估 ([PR #614](https://github.com/nearai/ironclaw/pull/614))**: 引入 "LLM-as-Judge" 机制，在执行工具前先由 LLM 语义评估意图，这是向安全性和智能体自主性迈进的重要一步。

## 7. 用户反馈摘要
从 Issue 评论中可以提炼出以下用户痛点：
*   **"能跑但不能用"**: 用户能够完成基本的安装和配置，但在具体的集成（如 Telegram Bot 配对、Google Sheets 写入）环节频繁碰壁。
*   **状态同步困惑**: 用户对 Web 端和 Telegram 端的数据不一致感到困惑（"为什么我在网页上设的闹钟在 Telegram 里看不到？"）。
*   **错误提示不友好**: 多个用户提到错误提示（如 "Error: Waiting for approval" 或 "retry after None"）令人困惑，无法指导下一步操作。
*   **复制粘贴体验差**: 深色模式下的白色字体复制到白底文档（如 Google Sheets）中完全不可见 ([#1059](https://github.com/nearai/ironclaw/issues/1059))，这是一个虽小但影响日常使用的细节 Bug。

## 8. 待处理积压
*   **[PR #1070 扩展生命周期修复](https://github.com/nearai/ironclaw/pull/1070)**: 这是一个 XL 级别的大型 PR，旨在彻底修复扩展安装、激活、卸载过程中的生命周期 Bug。目前处于 Open 状态，考虑到 Issue #1060 的严重性，建议维护者优先 Review 并合并此 PR。
*   **[Issue #722 Webhook 安全性](https://github.com/nearai/ironclaw/issues/722)**: 这是一个较早提出的关于 Webhook Secret 传输方式的文档不一致和安全隐忧，虽然已有相关 PR #736 合并，但需确认是否完全解决了此处的安全疑虑。
*   **[Issue #813 关键级事务问题](https://github.com/nearai/ironclaw/issues/813)**: CI 机器人报告的非事务性多步上下文更新问题，风险极高，目前仍处于 Open 状态，需立即关注以防数据损坏。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 (2026-03-13)**

**分析师摘要**：LobsterAI 今日维持高活跃度，开发迭代速度显著加快。随着 **v0.2.4 版本** 的发布，团队重点修复了 IM 连接性与应用启动卡顿等关键稳定性问题。值得注意的是，社区贡献者提交了关于 OpenClaw Gateway 启动速度优化（耗时从 180s 降至 15s）的 PR，暗示底层架构性能正在大幅跃升。同时，新版本已发布，但 ARM64 版本检测更新失效的问题值得维护者警惕。

---

### 1. 今日速览
项目今日整体处于**高活性迭代状态**。过去 24 小时内共有 15 次代码提交记录（基于 PR 活跃度推算），成功发布了 **v0.2.4** 补丁版本。核心开发重点集中在修复 v0.2.3 引入的启动故障以及优化 Windows 平台下的 Gateway 启动性能。社区方面，用户对新版本检测机制和插件功能提出了具体需求，互动积极。

- **Issues 活跃度**：4 条更新 (0 关闭 / 4 活跃)
- **PR 活跃度**：11 条更新 (9 合并/关闭 / 2 待合并)
- **版本发布**：v0.2.4

### 2. 版本发布
**Release: v0.2.4**
此版本主要针对稳定性修复，建议所有受启动卡顿影响的用户立即更新。

- **更新内容**:
  - **[Fix]** 修复应用启动时一直处于 Loading 加载状态的问题 (PR #396) — *高优先级修复*
  - **[Fix]** 修复 IM (即时通讯) 渠道连接性测试引起的 Bug (PR #393)
- **变更对比**: [v0.2.3...v0.2.4](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3...)

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，主要集中在功能增强与构建修复，项目稳定性与性能进一步提升。

*   **🚀 性能优化**:
    *   [CLOSED] **feat: openclaw gateway 启动速度优化** (PR #395): 通过 esbuild 打包与缓存策略，成功将 Windows Electron 环境下的 Gateway 启动时间从 **180s+ (超时)** 缩短至 **~15s**。这是今日最具技术含量的改进，显著提升了 Windows 用户体验。
*   **🛠️ 功能增强**:
    *   [CLOSED] **feat: support custom URI protocols** (PR #380): 支持在 Markdown 链接中打开外部应用（如 Obsidian, VS Code），增强了互操作性。
    *   [CLOSED] **Feat/oc im opt** (PR #389): 针对 IM 模块的优化。
*   **🏗️ 构建与维护**:
    *   [CLOSED] **fix: resolve macOS code signing failures** (PR #387): 修复了 macOS 签名失败问题，保障了 Mac 端的发布流程。
    *   [CLOSED] **Feature/openclaw 0.2.3** (PR #392, #394, #397): 大量针对 OpenClaw 0.2.3 的特性集成分支被关闭/合并，标志着该版本功能已冻结。

### 4. 社区热点
今日社区讨论主要集中在客户端更新异常与使用配置问题上。

*   **[Issue #390] Apple Silicon (ARM64) 检查更新失败**:
    *   **热度**: 👍 0 | 评论: 1
    *   **分析**: 用户在 v0.2.2 版本点击“检查更新”无法识别 v0.2.3。这表明客户端的升级检测逻辑可能存在 URL 硬编码或平台适配问题，影响了 macOS M 系列芯片用户的升级体验。
    *   **链接**: [netease-youdao/LobsterAI Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)
*   **[Issue #366] Gateway 运行端口与状态检测失败**:
    *   **热度**: 👍 0 | 评论: 2
    *   **分析**: 用户询问 Gateway 默认端口 (18789) 及 `openclaw gateway status` 失败的原因。日志显示 PATH 未设置，反映了部分用户在部署 CLI 工具时遇到环境配置障碍。
    *   **链接**: [netease-youdao/LobsterAI Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366)

### 5. Bug 与稳定性
今日报告的问题主要影响特定平台或特定场景，无严重的数据丢失类 Bug。

| 严重程度 | 问题 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **🔴 高** | Apple Silicon 版本无法检测到 v0.2.3+ 更新 | OPEN | [Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390) |
| **🟡 中** | OpenClaw Gateway 状态检测报错 | OPEN | [Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366) |
| **🟢 低** | (已修复) 应用启动无限加载 | CLOSED | [PR #396](https://github.com/netease-youdao/LobsterAI/pull/396) |

### 6. 功能请求与路线图信号
社区与贡献者正在推动项目向更易用、更自动化的方向发展。

*   **提示词优化** ([Issue #391](https://github.com/netease-youdao/LobsterAI/issues/391)): 用户建议在输入框旁增加“提示词优化”按钮。这符合 AI 助手降低用户使用门槛的趋势，目前尚未有对应 PR。
*   **插件记忆管理** ([Issue #398](https://github.com/netease-youdao/LobsterAI/issues/398)): 飞书插件用户请求支持 `/reset` 或 `/clear` 指令以清除对话记忆。属于高频刚需功能。
*   **MiniMax 模型支持** ([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)): 贡献者提交了更新 MiniMax 默认 URL 和模型列表的 PR，等待合并。这表明项目正在积极扩展对国内外 LLM 厂商的支持。
*   **小时级任务调度** ([PR #376](https://github.com/netease-youdao/LobsterAI/pull/376)): 社区提交了支持“每小时定时任务”的功能，目前状态为 OPEN，等待 Review。

### 7. 用户反馈摘要
*   **痛点**: macOS 用户对更新机制无法正常工作感到困惑；部分用户认为 CLI 工具 的环境配置较为复杂。
*   **场景**: 用户倾向于将 LobsterAI 作为办公中控，因此提出了与 Obsidian 等工具联动 (URI Scheme) 以及定时执行任务的需求。
*   **满意点**: 开发团队对启动速度的极致优化（Windows端）获得了技术层面的认可。

### 8. 待处理积压
以下重要 Issue 和 PR 仍处于 [OPEN] 状态，建议维护者优先处理：

1.  **[PR #388] feat: update MiniMax provider**: 模型提供商配置更新，影响用户连接稳定性。
2.  **[PR #376] feat: add hourly schedule mode**: 功能型 PR，社区贡献，需进行 Code Review。
3.  **[Issue #398] 飞书插件清除记忆**: 属于核心交互功能缺失，影响插件实用性。
4.  **[Issue #390] ARM64 更新检测**: 阻碍 macOS 用户获取最新修复，影响面较广。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于 2026-03-13 数据生成的 TinyClaw 项目动态日报。

---

# 📊 TinyClaw 项目日报 (2026-03-13)

**分析师观点**：TinyClaw 今日处于**高活跃度爆发期**，核心贡献者 @jlia0 进行了高密度的代码提交与功能迭代。项目正经历关键转型，从单一的 CLI 工具向带有 Web UI（TinyOffice）的完整平台演进，同时正在进行从 "TinyClaw" 到 "TinyAGI" 的品牌重塑。尽管发布了修复版本 v0.0.11，但新版本仍存在安装包缺失文件和运行时依赖问题，稳定性需引起关注。

---

## 1. 今日速览
- **整体活跃度**：🔥 **极高**。过去 24 小时内 PR 更新达 10 条，Issues 更新 4 条。
- **核心动向**：项目正在密集修复 v0.0.10 的安装漏洞，并大力推进 TinyOffice Web 端的功能（如组织架构图、Chat Rooms）。
- **版本状态**：发布了 **v0.0.11**，主要修复了前代版本的严重安装故障。
- **社区生态**：出现了关于 Node.js 依赖缺失和 Telegram 连接稳定性的新 Bug 报告，社区反馈主要集中在初次安装体验上。

---

## 2. 版本发布
### [v0.0.11](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11)
- **发布时间**：2026-03-13
- **更新内容**：`chore: bump version to 0.0.11`
- **关键修复**：此版本主要针对 Issue #197 提出的 "setup-wizard.sh 缺失" 问题进行了修复（通过 PR #198），确保新用户能够完成安装。
- **注意事项**：该版本由 Claude Opus 4.6 协助生成，标志着项目开发流程中已深度集成 AI 辅助。

---

## 3. 项目进展 (已合并/关闭 PR)
今日共有 **7 条 PR** 被合并或关闭，项目在 Web 端和稳定性维护方面取得了实质性突破：

1.  **Web 端功能增强**：
    *   **[PR #204](https://github.com/TinyAGI/tinyclaw/pull/204) [CLOSED]**：新增**交互式设置向导**，解决了用户配置难的问题，提供了多步引导式配置。
    *   **[PR #201](https://github.com/TinyAGI/tinyclaw/pull/201) [CLOSED]**：新增**组织架构图可视化页面** (`/office/org-chart`)，强化了多 Agent 管理的直观性。
    *   **[PR #199](https://github.com/TinyAGI/tinyclaw/pull/199) & [PR #203](https://github.com/TinyAGI/tinyclaw/pull/203) [CLOSED]**：引入了 **Slack 风格的聊天室** 和 **项目管理看板**，将 TinyClaw 从单纯的 Agent 执行器向协作平台转型。

2.  **关键 Bug 修复**：
    *   **[PR #198](https://github.com/TinyAGI/tinyclaw/pull/198) [CLOSED]**：修复了首次安装失败的致命错误（移除了对已废弃 `setup-wizard.sh` 的引用）。
    *   **[PR #200](https://github.com/TinyAGI/tinyclaw/pull/200) [CLOSED]**：优化 Telegram Bot 的轮询机制，增加了 30 秒超时检测，防止网络重连后的死锁。
    *   **[PR #195](https://github.com/TinyAGI/tinyclaw/pull/195) [CLOSED]**：将 `send_message` 技能从 TS 转为纯 Node.js，修复了因 `@types/node` 缺失导致的编译失败。

---

## 4. 社区热点
今日讨论最活跃的 Issue 涉及核心功能的可用性：

*   **[Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126) [OPEN]**: **Telegram Bot 自动重连失败**
    *   **热度**：6 条评论。
    *   **分析**：这是一个遗留问题，用户反馈 Telegram 客户端在网络波动后无法自动重连。虽然 PR #200 已经尝试修复 polling stall 问题，但社区仍在关注其在真实网络环境下的表现。
*   **[Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193) [OPEN]**: **TinyOffice 首次运行引导需求**
    *   **热度**：1 条评论。
    *   **分析**：用户希望摆脱 CLI 和原始配置文件编辑。**好消息是**，今日合并的 PR #204（交互式设置向导）似乎正是为了解决这一痛点，表明开发团队对社区反馈响应极其迅速。

---

## 5. Bug 与稳定性
今日报告的新 Bug 集中在**安装与运行时环境**，按严重程度排序：

1.  🔴 **严重** - **首次安装失败**
    *   **Issue**: [#197](https://github.com/TinyAGI/tinyclaw/issues/197) (已关闭)
    *   **描述**: v0.0.10 版本中缺失 `setup-wizard.sh`，导致全新安装流程直接崩溃。
    *   **状态**: ✅ **已修复** (通过 PR #198 并在 v0.0.11 发布)。

2.  🟠 **高** - **运行时依赖错误**
    *   **Issue**: [#205](https://github.com/TinyAGI/tinyclaw/issues/205) (Open)
    *   **描述**: 执行 `tinyclaw pairing approve` 时报错 `Cannot find package '@clack/prompts'`。
    *   **分析**: 这可能是一个打包或依赖声明遗漏问题，导致用户无法进行配对操作。目前**尚无对应修复 PR**，需关注。

---

## 6. 功能请求与路线图信号
*   **品牌重塑**:
    *   **[PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) [OPEN]**: 提议将项目完全从 TinyClaw 重命名为 **TinyAGI**。涉及包名、环境变量、文档的全量替换。这预示着项目定位可能即将发生官方变更。
*   **实时流式体验**:
    *   **[PR #196](https://github.com/TinyAGI/tinyclaw/pull/196) [OPEN]**: 计划增加 Agent 执行进度的实时流式传输 (`agent_progress` SSE 事件)，解决目前用户只能等待最终结果而看不到中间过程的问题。

---

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户画像与痛点：
*   **安装门槛高**：用户 @crisdias 反映首次安装因脚本缺失直接失败，说明项目的打包发布流程（CI/CD）还需要更严谨的测试。
*   **对 Web UI 的渴望**：Issue #193 表明现有的 CLI 配置方式对非技术人员不友好，用户更倾向于通过 Web 界面（TinyOffice）进行管理。
*   **运行时环境敏感**：Issue #205 暴露出项目在特定 Node 环境或打包模式下，可能存在 `node_modules` 依赖查找路径的问题。

---

## 8. 待处理积压
*   **[PR #202](https://github.com/TinyAGI/tinyclaw/pull/202) [OPEN]**: **Agent 消息持久化**。这是一个重要的基础设施 PR，旨在将聊天记录存入数据库。目前处于待合并状态，是构建长期记忆功能的关键。
*   **[Issue #205](https://github.com/TinyAGI/tinyclaw/issues/205) [OPEN]**: **依赖缺失问题**。这是阻碍用户正常使用的高优先级 Bug，建议维护者优先排查 `@clack/prompts` 的打包配置。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 **Moltis** 项目 2026-03-13 动态日报。

---

# Moltis 项目动态日报 (2026-03-13)

## 1. 今日速览
Moltis 项目今日保持**极高的开发活跃度**，核心贡献者 @penso 提交了大量关键性修复与功能增强。虽然今日无新版本 Release 发布，但代码库迎来了 4 个 PR 的合并，重点解决了 MCP 连接、本地模型输出清洗、配置兼容性及安装引导等痛点。与此同时，社区反馈热烈，新增 7 个 Issue 涵盖了 Android 移动端支持、网络代理崩溃及非 UTF-8 网页抓取 Panic 等问题，表明项目正处于快速迭代与用户场景拓展期。

## 2. 版本发布
**无**。
*注：虽无正式 Release，但已合并的 PR 暗示下个版本将在 MCP 扩展性和本地模型稳定性上有显著提升。*

## 3. 项目进展
今日共有 **4 个 PR 合并**，显著提升了系统的健壮性与兼容性：

*   **MCP 远程连接与认证增强** ([PR #416](https://github.com/moltis-org/moltis/pull/416)):
    *   **进展**：已合并。
    *   **内容**：支持在 MCP URL 中携带密钥查询参数及自定义 Headers，解决了远程 MCP 服务（特别是 OAuth 认证场景）的连接问题。
*   **本地模型输出清洗** ([PR #397](https://github.com/moltis-org/moltis/pull/397)):
    *   **进展**：已合并。
    *   **内容**：修复了 MLX 后端流式输出中混入 `<|im_end|>` 等原始特殊 Token 的问题，提升了本地模型使用的整洁度。
*   **配置向后兼容性修复** ([PR #400](https://github.com/moltis-org/moltis/pull/400)):
    *   **进展**：已合并。
    *   **内容**：修复了自定义 Embedding 端点不生效的问题 ([Issue #109](https://github.com/moltis-org/moltis/issues/109))，并兼容旧版配置字段，减少用户升级配置成本。
*   **安装引导体验优化** ([PR #398](https://github.com/moltis-org/moltis/pull/398)):
    *   **进展**：已合并。
    *   **内容**：修复了 Tailscale 连接状态检测错误及 UI 显示问题，改善了首次安装体验。

## 4. 社区热点
今日讨论度最高的话题集中在**系统上下文与网络工具稳定性**：

*   **系统提示词上下文增强** ([Issue #176](https://github.com/moltis-org/moltis/issues/176))
    *   **热度**：👍 1 | 💬 13
    *   **分析**：用户强烈希望在系统提示词中注入当前日期时间上下文。这是 Agent 具备时间感知能力的基础需求，讨论中涉及了实现细节（如 UTC vs 本地时间），预计该功能将很快被纳入开发。
*   **网络代理启动即崩溃** ([Issue #367](https://github.com/moltis-org/moltis/issues/367) & [Issue #407](https://github.com/moltis-org/moltis/issues/407))
    *   **热度**：多个相关 Issue 报告
    *   **分析**：配置 `network = "trusted"` 后，代理进程立即关闭，导致 `web_search` 等工具不可用。这影响了需要网络隔离的高级用户，目前该 Issue 已被关闭，推测已定位原因。

## 5. Bug 与稳定性
今日报告了数个影响核心功能的 Bug，部分已有修复方案：

*   **严重 (P0) - 网络代理立即停止** ([Issue #367](https://github.com/moltis-org/moltis/issues/367)) [CLOSED]
    *   *现象*：Trusted-network proxy 启动后秒退，导致所有 HTTP 工具失效。
    *   *状态*：Issue 已关闭，相关修复可能涉及近期 PR 中的沙箱或网络配置改动。
*   **严重 (P0) - 网页抓取 Panic** ([Issue #420](https://github.com/moltis-org/moltis/issues/420)) [OPEN]
    *   *现象*：`web_fetch` 工具在处理旧式或非 UTF-8 编码网页时，因字节索引越界导致程序直接 Panic 崩溃。
    *   *状态*：待修复，需增加字符边界检查。
*   **中等 (P1) - 嵌入配置失效** ([Issue #109](https://github.com/moltis-org/moltis/issues/109)) [CLOSED]
    *   *现象*：自定义 Embedding 端点配置无效。
    *   *修复*：已通过 [PR #400](https://github.com/moltis-org/moltis/pull/400) 修复并合并。
*   **环境问题 - Docker 沙箱网络故障** ([Issue #423](https://github.com/moltis-org/moltis/issues/423)) [OPEN]
    *   *现象*：Docker 环境下的 Moltis 及其沙箱存在网络连接问题。

## 6. 功能请求与路线图信号
*   **移动端支持 (Android/Termux)** ([Issue #424](https://github.com/moltis-org/moltis/issues/424)):
    *   用户请求提供 Android 预编译二进制文件以便在 Termux 中运行。这标志着用户开始在移动边缘设备上部署 AI 智能体。
*   **节点工具广播协议** ([Issue #391](https://github.com/moltis-org/moltis/issues/391)):
    *   这是一个 RFC（征求意见稿），提议扩展 Node 协议，允许远程节点广播其支持的工具集，而不仅仅是执行 Shell 命令。这是向**分布式 AI 智能体集群**演进的重要信号。
*   **MCP 请求超时配置** ([PR #419](https://github.com/moltis-org/moltis/pull/419)) [OPEN]:
    *   将 MCP 超时时间从硬编码的 30秒 改为可配置。针对处理时间较长的 MCP 工具（如 Codex），此功能非常必要。

## 7. 用户反馈摘要
*   **本地模型体验改善**：用户对 [PR #397](https://github.com/moltis-org/moltis/pull/397) 的反馈表明，本地模型（特别是 MLX 后端）的流式输出曾经存在“污染”问题，修复后将显著改善对话体验。
*   **开箱即用痛点**：新用户反馈 `z.ai` 集成存在网络错误 ([Issue #414](https://github.com/moltis-org/moltis/issues/414))，且 Docker 沙箱配置复杂，容易遇到网络隔离导致的连接失败。
*   **认证配置繁琐**：关于 MCP 和远程工具的 Issue ([#119](https://github.com/moltis-org/moltis/issues/119), [#140](https://github.com/moltis-org/moltis/issues/140)) 显示，用户对复杂认证（Header, OAuth）的配置感到困难，今日合并的 [PR #416](https://github.com/moltis-org/moltis/pull/416) 正是对此痛点的直接回应。

## 8. 待处理积压
*   **日期时间上下文 ([Issue #176](https://github.com/moltis-org/moltis/issues/176))**：作为高优功能请求，评论数已达 13 条，建议维护者尽快将其纳入 Sprint。
*   **Web Fetch 稳定性 ([Issue #420](https://github.com/moltis-org/moltis/issues/420))**：作为导致程序崩溃的 Bug，需优先处理字符编码解析逻辑。
*   **Docker 双层网络问题 ([Issue #423](https://github.com/moltis-org/moltis/issues/423))**：涉及 Docker-in-Docker 或容器间通信，属于部署硬骨头，需社区协助复现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 **CoPaw 项目动态日报 (2026-03-13)**。

---

# CoPaw 项目动态日报 (2026-03-13)

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**状态，随着 **v0.0.7** 的正式发布，社区反馈与贡献迎来小高峰。过去24小时内共有 50 条 Issue 更新（含 20 条关闭）和 50 条 PR 更新，显示维护团队正在快速响应新版本带来的反馈。重点动向包括：**安全性功能 "Tool Guard" 的引入**、**多智能体架构重构的预览**（PR #1375）以及针对**飞书/QQ 渠道和升级流程**的密集 Bug 修复。整体来看，项目正处于功能扩展与架构重构并行的关键阶段。

## 2. 版本发布
### **v0.0.7 (Latest Release)**
- **核心更新**：
  - **✨ Tool Guard (安全层)**：新增工具执行前的安全扫描层。系统会检测 `rm`、`mv` 等高风险 Shell 命令参数。被识别为高风险的调用将被拦截，直到用户通过 `/approve` 指令批准，且拒绝过的工具会被永久阻止。
  - **⚙️ 安全设置页**：新增专门的管理页面用于配置安全策略。
- **影响**：显著提升了 Agent 在执行系统命令时的安全性，防止误操作或恶意指令破坏环境。

## 3. 项目进展
今日共有 **23 个 PR 被合并/关闭**，主要集中在提升系统稳定性、修复新版本引入的 UI 问题以及扩展生态兼容性。

- **架构演进**：
  - **[WIP] 多智能体/多工作区架构** (PR #1375): 这是一个重量级的 WIP PR，旨在引入完全隔离的多 Agent 运行环境（独立配置、记忆、技能），预示着 CoPaw 将从单实例向多实例并行架构迈进。
  
- **功能增强**：
  - **Discord 流式响应** (PR #1389): 增加了 Discord 频道的流式输出和 "Typing" 指示器支持，提升交互体验。
  - **MiniMax 模型支持** (PR #1376): 新增 MiniMax 作为内置 LLM 供应商，支持 20万+ token 上下文窗口。
  - **NapCat/QQ 频道支持** (PR #1290): 持续推进基于 OneBot 11 协议的 QQ 机器人集成。

- **关键修复**：
  - **技能导入失败** (PR #1369): 修复了技能名称包含 `/` 符号时导入失败的问题。
  - **定时任务上下文覆盖** (PR #1262): 修复了 Cron Job 错误覆盖用户请求上下文的严重 Bug。

## 4. 社区热点
今日讨论最热烈的话题集中在**内置功能扩展**与**模型配置体验**上：

1.  **[Discussion] 内置技能与 MCPs 规划** (Issue #280)
    - **热度**：👍 0 | 评论 18
    - **分析**：社区正在讨论哪些技能和 MCP 应该被预装。用户普遍希望减少配置成本，开箱即用。这表明 CoPaw 正从"极客工具"向"大众产品"转型，需要更丰富的默认能力。
2.  **[Bug] v0.0.6 -> v0.0.7 更新异常** (Issue #1195)
    - **热度**：评论 14
    - **分析**：用户反馈通过 `pip` 更新后前端仍显示旧版本号。这反映了**前后端版本同步**或**静态资源缓存**机制存在问题，影响了用户的升级信心。
3.  **[Question] 为什么不内嵌本地时间？** (Issue #1346)
    - **热度**：👍 1 | 评论 6
    - **分析**：用户质疑为何 CoPaw 依赖 LLM 调用工具获取时间，而非直接写入 System Prompt。这触及了 Agent 设计哲学（显式工具调用 vs 隐式上下文注入），针对弱模型能力的优化建议值得团队关注。

## 5. Bug 与稳定性
新版本 v0.0.7 发布后，伴随出现了一些功能性 Bug，尤其是 UI 和配置持久化方面：

| 严重程度 | Issue/PR | 问题描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **🔴 高** | [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382) | **K8s/Docker 重启后数据全丢**。`/app/working` 未持久化，导致配置、人设、记忆全部丢失。 | **Open** (需挂载卷解决) |
| **🔴 高** | [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) | **v0.0.7 技能列表显示大量重复**。Active, Customized, venv 中的技能混杂显示。 | **Open** |
| **🟠 中** | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | **版本更新显示错误**。前端未正确刷新版本号。 | Open |
| **🟠 中** | [#1381](https://github.com/agentscope-ai/CoPaw/issues/1381) | **Console 模型选择下拉菜单溢出**。UI 在右侧边缘无法完整显示。 | **Fix PR** [#1371](https://github.com/agentscope-ai/CoPaw/pull/1371) (Open) |
| **🟠 中** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | **飞书频道 "延迟回复"**。Bot 总是回答上一个问题，存在严重的异步处理或上下文错位问题。 | Open |
| **🟡 低** | [#1374](https://github.com/agentscope-ai/CoPaw/issues/1374) | **工作区文件刷新失败**。点击刷新报错 "Failed to load file list"。 | Open |

## 6. 功能请求与路线图信号
从近期 Issue 和 PR 看，下一阶段的路线图信号非常清晰：

- **企业级部署需求**：Issue #1382 提出的容器持久化问题，结合 PR #1361 (Docker Compose 源码构建)，表明项目急需完善 **部署与持久化存储的最佳实践**。
- **浏览器控制增强**：Issue #1348 建议增加 CDP (Chrome DevTools Protocol) 支持，以便复用已打开的浏览器实例。这显示高级用户希望 CoPaw 能更深度地介入桌面自动化。
- **弱模型适配**：Issue #1346 关于时间获取的讨论，暗示未来可能需要针对能力较弱的模型提供**"低保真"模式**（更多上下文注入，更少依赖工具调用）。

## 7. 用户反馈摘要
- **痛点**：
  - **升级体验差**：多版本迭代过程中，前端静态资源刷新和配置兼容性（如 #1358 Base URL 填写）频现问题，导致用户在升级过程中感到挫败。
  - **飞书/QQ 多模态支持不全**：虽然能收消息，但文件发送、语音触发等进阶功能体验不佳（Issue #981, #1323）。
- **满意点**：
  - 用户对 **"Tool Guard"** 安全机制的引入表示欢迎，认为这解决了让 AI 自由执行 Shell 命令的核心顾虑。
  - 社区贡献活跃，针对 NapCat (QQ)、MiniMax 等本土化功能的 PR 增多，显示出生态的活力。

## 8. 待处理积压
以下重要议题长期未得到最终解决或合并，建议维护者优先关注：

1.  **PR #2 (Add Telemetry)**：作为早期创建的 PR，至今处于 Open 状态，缺少遥测数据可能影响团队对用户行为的量化分析。
2.  **Issue #51 (企业微信支持)**：作为高频需求，该 Issue 虽被关闭但似乎未见明确的功能实现 PR，需确认是否已通过其他方式支持或仍在规划中。
3.  **PR #193 (Multi-workspace)**：这是今日 WIP PR #1375 的前身或相关项，多工作区架构的落地将极大改变 CoPaw 的使用模式，需持续跟踪合并进度。

---
*以上数据由 AI 分析师生成，基于截止 2026-03-13 的 GitHub 公开数据。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是根据 ZeptoClaw 项目 2026-03-12 至 2026-03-13 的 GitHub 动态生成的项目日报。

# 📊 ZeptoClaw 项目动态日报 (2026-03-13)

> **数据时间范围**：2026-03-12 08:00 - 2026-03-13 08:00 (UTC)
> **分析师**：AI Open Source Analyst

## 1. 今日速览
ZeptoClaw 今日保持了**极高的开发活跃度**，核心维护者 @qhkm 主导了一次重大的用户体验升级迭代。过去 24 小时内，项目成功合并了 4 个功能性 PR，重点实现了 CLI 交互的**流式响应**、**视觉动效** 以及**深度研究技能**。虽然社区提交的 Bug 报告揭示了 Agent 在自动化测试场景下的逻辑缺陷，但整体而言，项目正从单纯的工具链向更具交互性和智能感的 AI Agent 平台快速演进。

---

## 2. 版本发布
*   **无新版本发布**：虽然合并了多个 PR，但截至统计时间未观测到正式的 Tag 或 Release 发布，预计这些改动将在稍后的版本中打包发布。

---

## 3. 项目进展
今日共有 **4 个 PR 被合并**，显著提升了产品的易用性与能力边界：

*   **CLI 交互体验重构** (PR #342 - Merged):
    *   **核心变更**：CLI 现在默认开启流式传输，并增加了响应元数据页脚（显示 Token 消耗、工具调用数、耗时）。
    *   **价值**：显著改善了用户等待 AI 响应时的感知性能，增加了交互的透明度。
    *   [链接: qhkm/zeptoclaw PR #342](https://github.com/qhkm/zeptoclaw/pull/342)

*   **视觉反馈增强** (PR #337 - Merged):
    *   **核心变更**：引入了 "Thinking..." 时的微光渐变动画 和加载旋转器，并优化了工具执行的步骤显示（带 ✓/✗ 标记）。
    *   **价值**：填补了 AI 思考期间的视觉空白，提升了专业感。
    *   [链接: qhkm/zeptoclaw PR #337](https://github.com/qhkm/zeptoclaw/pull/337)

*   **新增深度研究能力** (PR #344 - Merged):
    *   **核心变更**：集成了 `deep-research` skill，通过 Markdown 文件定义的 4 阶段方法论（探索、深挖、验证、综合）指导 Agent 进行系统性研究。
    *   **价值**：零代码成本扩展了 Agent 的复杂任务处理能力。
    *   [链接: qhkm/zeptoclaw PR #344](https://github.com/qhkm/zeptoclaw/pull/344)

*   **交互式澄清工具** (PR #343 - Merged):
    *   **核心变更**：添加 `ask_clarification` 工具，允许 Agent 在不确定时暂停执行并请求用户输入，而非盲目猜测。
    *   **价值**：提高了复杂任务流的准确性和可控性。
    *   [链接: qhkm/zeptoclaw PR #343](https://github.com/qhkm/zeptoclaw/pull/343)

---

## 4. 社区热点
今日社区反馈主要集中在**集成支持**与**分发渠道**上：

*   **Telegram 集成体验改进** (Issue #331):
    *   **诉求**：用户指出当前 Telegram 消息格式渲染混乱，且缺乏“正在输入”的指示器，导致交互体验生硬。
    *   **状态**：Open。反映了用户将 ZeptoClaw 作为 Telegram Bot 使用的强烈需求。
    *   [链接: qhkm/zeptoclaw Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)

*   **注册到 Shelldex** (Issue #334):
    *   **诉求**：外部用户希望将项目提交到 Shelldex 目录以增加曝光度。
    *   [链接: qhkm/zeptoclaw Issue #334](https://github.com/qhkm/zeptoclaw/issues/334)

---

## 5. Bug 与稳定性
今日发现一个 **P2-High** 级别的逻辑缺陷，需引起关注：

*   **🔥 High: Coder 模板产生“幻觉测试”** (Issue #345)
    *   **问题描述**：在使用 `coder` 模板执行 Bug 修复任务时，LLM 编写的新测试用例会错误地匹配当前的错误代码逻辑，导致错误的代码也能通过测试，产生假阳性。
    *   **潜在风险**：严重影响代码修改的可信度。
    *   **状态**：Open，暂无关联修复 PR。
    *   [链接: qhkm/zeptoclaw Issue #345](https://github.com/qhkm/zeptoclaw/issues/345)

*   **Normal: Podman 构建兼容性** (Issue #333)
    *   **问题描述**：`Dockerfile.dev` 中的 cache mount 语法导致 Podman 5.7 构建失败 (Exit 127)。
    *   **建议**：需在构建脚本中显式添加 `--buildkit` 支持。
    *   [链接: qhkm/zeptoclaw Issue #333](https://github.com/qhkm/zeptoclaw/issues/333)

---

## 6. 功能请求与路线图信号
通过分析 Open Issues，可以看出下一阶段的开发重点可能集中在**标准化评测**与**更多模型支持**：

*   **标准化基准测试** (Issue #340): 提议建立一个自包含的编码基准测试夹具，用于横向对比不同 Agent 的表现。这表明项目正在从功能开发走向**性能评估与量化**。
    *   [链接: qhkm/zeptoclaw Issue #340](https://github.com/qhkm/zeptoclaw/issues/340)

*   **Zhipu (智谱) API 支持** (Issue #332 & PR #335): 虽然 Issue 已关闭，但关联的 PR #335 仍在 Open 状态，正在添加对国产大模型 Zhipu/GLM 的 API Key 验证支持。这是**国际化/多模型适配**的重要信号。
    *   [链接: qhkm/zeptoclaw PR #335](https://github.com/qhkm/zeptoclaw/pull/335)

---

## 7. 用户反馈摘要
*   **痛点**：在自动化编程场景下，用户对 Agent **自我验证的可靠性**表示担忧（Issue #345），即“谁来测试测试代码”的问题。
*   **场景**：用户不仅将 ZeptoClaw 用于本地 CLI，还积极尝试将其部署到 **Telegram** 等即时通讯平台。
*   **满意度**：对 CLI 的视觉改进（Shimmer/Spinner）和流式输出表现出高期待值，这些细节极大地提升了“AI 伙伴”的陪伴感。

---

## 8. 待处理积压
*   **⚠️ 依赖升级阻塞** (Issue #185 [OPEN]): `jsonwebtoken` v9 到 v10 的升级涉及破坏性变更，需手动迁移。该 Issue 虽然优先级标记为 P3，但涉及核心认证模块，建议尽早排期以避免技术债务堆积。
    *   [链接: qhkm/zeptoclaw Issue #185](https://github.com/qhkm/zeptoclaw/issues/185)

*   **🐛 Bug 修复待定** (Issue #345 [OPEN]): Coder 模板的测试逻辑缺陷目前尚未有 PR 关联，建议维护者优先关注，可能需要调整 Prompt 策略以强制 LLM 使用既有测试或人工确认测试逻辑。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-13)

**分析师注**：本日报基于 EasyClaw (github.com/gaoyangz77/easyclaw) 2026-03-13 期间的 GitHub 活动数据生成。

---

### 1. 今日速览
EasyClaw 项目今日整体呈现**“稳步迭代，注重体验”**的态势。项目发布了 **v1.6.7** 新版本，主要针对 macOS 平台的安装体验进行了优化，解决了常见的签名验证拦截问题。社区方面，维护者高效地解决了一个关于 OpenAI OAuth 认证的关键 Bug（Issue #16），显示了较好的社区响应速度。目前仍有 1 个待合并的 PR（#15）专注于 macOS 的 UI 优化，整体项目健康度良好，处于细节打磨与稳定性维护阶段。

### 2. 版本发布
- **[Release] v1.6.7** - [查看详情](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7)
  - **更新重点**：本次更新主要针对 **macOS 用户**。
  - **核心变更**：并未直接修改核心代码逻辑，而是着重解决了 macOS Gatekeeper 对未签名应用的拦截问题。
  - **迁移注意事项**：macOS 用户在更新或首次安装 v1.6.7 后，若遇到“已损坏”提示，需通过终端（Terminal）执行移除隔离属性命令（具体命令见 Release 说明），这不是文件损坏，而是系统安全机制导致。

### 3. 项目进展
- **Issue 处理进展**：
  - **[CLOSED] Issue #16**：成功关闭了关于 **OpenAI OAuth 认证失败** 的问题。该问题曾导致便携版和安装版均无法正常使用 OpenAI 服务，目前的关闭状态表明该阻断性问题已在 v1.6.7 或相关提交中得到修复。
- **待合并代码**：
  - **[OPEN] PR #15**：由 @mylinkedai 提交，旨在修复 macOS Dock 栏及系统托盘中的应用图标显示问题。该 PR 目前处于待审核状态，若合并将显著提升 Mac 用户的视觉体验。

### 4. 社区热点
- **热点话题**：今日最受关注的议题是 **Issue #16 (OpenAI Oauth好像有问题)**，虽然该 Issue 已被关闭，但用户反馈了具体的截图和错误信息。
- **用户诉求分析**：用户高度依赖 EasyClaw 的 OpenAI 集成功能。OAuth 认证的失败直接切断了核心 AI 能力，属于 P0 级故障。该问题的迅速关闭表明维护者对此类核心功能的中断非常敏感，修复效率较高。
- **相关链接**：[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)

### 5. Bug 与稳定性
- **已修复**：
  - **OpenAI OAuth 认证错误** (Issue #16)：
    - **严重程度**：🔴 **高** (阻断核心功能)。
    - **现象**：便携版与安装版均出现认证报错，导致无法连接 OpenAI 服务。
    - **状态**：✅ 已在今日随着 Issue 关闭而解决（推测已包含在 v1.6.7 中）。
- **潜在问题**：
  - **macOS App “已损坏”**：
    - **严重程度**：🟡 **中** (影响首次启动体验)。
    - **状态**：官方已在 v1.6.7 Release Note 中给出了手动修复方案（Terminal 命令），暂未从代码层面彻底解决签名问题。

### 6. 功能请求与路线图信号
- **UI/UX 优化信号**：
  - 来自 **PR #15** 的信号显示，项目正在致力于提升 **macOS 端的原生体验**（Dock 图标与系统托盘）。这暗示未来的版本迭代中，跨平台的一致性和原生适配将是重点关注方向。
  - 目前尚无明确的新增功能性 Feature Request，社区重心仍在修复现有集成问题上。

### 7. 用户反馈摘要
- **痛点**：macOS 用户对“应用已损坏”的提示感到困惑，误以为是文件下载不完整，实际上是由于缺乏签名证书导致的 Gatekeeper 拦截。
- **场景**：用户主要使用 EasyClaw 进行 OpenAI 接口的调用，OAuth 流程的稳定性是用户最关心的环节。
- **满意度**：尽管存在 macOS 的安装门槛，但核心功能（OpenAI 连接）的 Bug 修复迅速，社区对维护者的响应速度持正面态度。

### 8. 待处理积压
- **PR #15 (fix: app icon in macos dock and system tray)**：该 PR 创建于 2026-03-10，更新于 03-12，目前仍处于 Open 状态。建议维护者尽快 review 并合并，以完善 macOS 端的视觉体验，避免积压过久导致代码冲突。
  - **链接**：[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15)

---
*报告生成时间: 2026-03-13 | 数据来源: GitHub gaoyangz77/easyclaw*

</details>