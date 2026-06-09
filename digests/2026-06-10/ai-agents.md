# OpenClaw 生态日报 2026-06-10

> Issues: 450 | PRs: 488 | 覆盖项目: 13 个 | 生成时间: 2026-06-09 22:27 UTC

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

# OpenClaw 项目动态日报 (2026-06-10)

## 1. 今日速览

OpenClaw 今日维持了极高的社区活跃度，过去 24 小时内共有 **450 条 Issue 更新**（其中 133 条被关闭）和 **488 条 PR 更新**（其中 139 条被合并或关闭），项目迭代节奏稳健。项目正式发布了 **v2026.6.5** 稳定版，核心修复了 QQ 机器人思考链泄露和 MCP 工具结果处理异常的问题。从 PR 动向来，开发团队今日重点发力于**安全边界加固**（MCP SSE、沙箱 HTTP 代理）和**会话状态稳定性**修复。整体来看，项目处于高速且健康的演进期，开源社区参与贡献的热情持续高涨。

---

## 2. 版本发布

今日正式发布 **v2026.6.5** 及其前置 Beta 版本，核心更新如下：

- **[QQBot] 修复思考链泄露问题**：模型推理过程的 `<thinking>` 标签不再作为正文泄漏到频道回复中。(相关 Issue: [#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)，感谢 [@openperf](https://github.com/openperf))
- **[MCP] 增强工具结果兼容性**：MCP 工具的返回结果现在会强制转换 `resource_link`、`resource`、`audio` 以及格式异常的图片等数据类型，提升了多模态和未来新数据类型的鲁棒性。

**迁移注意**：本次为常规稳定版迭代，无破坏性变更。建议仍在使用 2026.5.x 版本的用户升级，以解决潜在的通道消息泄漏和 MCP 资源解析失败问题。

---

## 3. 项目进展

今日共处理 139 个 PR（包含合并与关闭），以下是推动项目关键能力向前迈进的核心 PR：

- **安全防护体系全面升级**：
  - [PR #91752](https://github.com/openclaw/openclaw/pull/91752): 修复了 Codex 沙箱 HTTP 请求的 SSRF 漏洞，在 DNS 解析前拦截对内网/私有 IP 的请求。
  - [PR #91722](https://github.com/openclaw/openclaw/pull/91722): 重构了整体 HTTP 出口流量架构，移除了旧的内进程 SSRF 防护，转而采用更轻量、集中的外部代理强制模式。
- **会话与通道稳定性修复**：
  - [PR #89045](https://github.com/openclaw/openclaw/pull/89045): 修复了群聊会话进入 `failed` 状态后静默丢弃后续所有消息的严重问题。
  - [PR #83933](https://github.com/openclaw/openclaw/pull/83933): 修复了手动执行一次性 Cron 任务时会错误删除该任务的 Bug。
- **客户端与 UI 改进**：
  - [PR #91768](https://github.com/openclaw/openclaw/pull/91768): 修复了 iOS 客户端聊天头部与状态栏/灵动岛重叠的 UI 问题。

---

## 4. 社区热点

今日讨论最热烈的问题集中在**消息路由泄漏**与**长时间任务稳定性**上，反映了用户在多通道复杂场景下的核心诉求：

1. **🔥 工具调用间的文本泄漏至聊天通道**（29 获评，[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)）
   - **诉求分析**：Agent 在进行复杂错误处理时输出的内部思考文本，被错误路由到 Slack/iMessage 等用户通道。这是目前社区呼声最高的 P1 级 UX 痛点，涉及安全审查。
2. **Codex app-server 回合完成停滞回归**（15 获评，[Issue #88312](https://github.com/openclaw/openclaw/issues/88312)）
   - **诉求分析**：在 ChatGPT Plus 订阅下，多工具 Agent 运行中途静默失败。这是一个严重的版本回归问题，正在等待开发者提供实时复现环境。
3. **控制面板 LaTeX 公式渲染支持**（7 获评，[Issue #42840](https://github.com/openclaw/openclaw/issues/42840)）
   - **诉求分析**：科研和技术类用户强烈希望在 Web UI 中原生支持 MathJax/LaTeX 渲染，以替代当前难看的纯文本展示。

---

## 5. Bug 与稳定性

今日暴露了多个影响系统可用性的严重 Bug，特别是在复杂运行时和特定通道下：

**🔴 P1 严重级别**
- **Gateway 内存无限增长导致 OOM Kill**：在长时间运行的 Linux systemd 环境中，Gateway 堆内存持续增长最终被系统 cgroup 杀死。目前尚无关联 Fix PR。（[Issue #89315](https://github.com/openclaw/openclaw/issues/89315)）
- **Steer 模式中断主会话**：配置 `messages.queue.mode: "steer"` 后，用户消息未能在工具边界处注入，而是被阻塞至回合结束。关联 [PR #90946](https://github.com/openclaw/openclaw/pull/90946) 等正在修复。（[Issue #48003](https://github.com/openclaw/openclaw/issues/48003)）
- **网络超时误报导致工具调用中断**：当 LLM 生成大型工具参数耗时过长时，底层超时机制提前触发导致连接断开。（[Issue #53540](https://github.com/openclaw/openclaw/issues/53540)）

**🟠 P2/P3 中等级别**
- **备份超时遗留巨大临时文件**：`openclaw backup create` 超时后未清理 `.tmp` 文件，可能导致磁盘空间耗尽。（[Issue #50442](https://github.com/openclaw/openclaw/issues/50442)）
- **Codex/Telegram 联合触发堆溢出**：在 Telegram 长对话中结合 Codex 运行时，容易触发上下文丢失或假性的“出错了”提示。（[Issue #87299](https://github.com/openclaw/openclaw/issues/87299)）

---

## 6. 功能请求与路线图信号

从近期的 Issues 提炼出项目下一步可能演进的方向：

1. **可配置文件权限（多用户支持）**：[Issue #56263](https://github.com/openclaw/openclaw/issues/56263) 要求放宽目前硬编码的 `chmod 0o600` 限制，以适应企业级多用户/组协同场景。结合最近的 HTTP 重构 PR，多租户隔离将是下个大版本的重点。
2. **持久化任务状态面板**：[Issue #52640](https://github.com/openclaw/openclaw/issues/52640) 提议为长时间运行的工具调用提供专用的状态表面板，避免仅依赖“正在输入”提示。此需求已有相关 UI 重构 PR 雏形，有望在近期纳入。
3. **细粒度上下文来源追踪（Context Provenance）**：[Issue #54373](https://github.com/openclaw/openclaw/issues/54373) 建议为注入到上下文中的信息（记忆、技能等）添加来源和易失性元数据。这是解决当前模型“幻觉”和上下文污染的重要架构升级，值得维护者优先排期。

---

## 7. 用户反馈摘要

通过分析 450 条 Issue 互动，提炼出开源社区用户的真实反馈画像：

- **痛点 1：通道状态不同步**：用户极度反感“Gateway 显示成功，但 Telegram/Discord 等端侧未收到消息”（[Issue #54531](https://github.com/openclaw/openclaw/issues/54531)），多通道状态的一致性是核心诉求。
- **痛点 2：硬隔离导致的易用性下降**：近期对安全限制（如移除跨机器 Chrome 扩展中继，[Issue #53599](https://github.com/openclaw/openclaw/issues/53599)）引发了托管服务商的强烈不满，安全策略需要兼顾原有托管工作流。
- **满意点：架构扩展性**：高级用户对 LiteLLM 代理的兼容性和 RISC-V 架构的适配尝试（[Issue #54253](https://github.com/openclaw/openclaw/issues/54253)）表明 OpenClaw 在极客和企业下沉市场拥有良好的扩展口碑。

---

## 8. 待处理积压

以下高优先级/高影响 Issue 长期处于 Open 且缺乏实质性修复进展，建议维护团队关注：

- **[#25592] 文本泄漏至消息通道**：标记为 `diamond lobster`（最高优），自 2 月报告以来虽有大量讨论，但仍未有最终修复 PR 合入，严重打击多通道用户体验。
- **[#31331] Docker 沙箱工作区挂载失败**：导致 Docker+DinD 架构下完全无法使用工作区隔离，影响生产环境安全性。
- **[#56096] Telegram 无限重试死循环**：当模型过载（529）时，`sendChatAction` 会触发无退避的无限循环，导致 Bot 直接卡死，需人工强杀进程。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 6 月 10 日的各项目社区动态，为您呈上横向对比与深度分析报告：

# 📊 个人 AI 助手与智能体开源生态横向对比分析报告 (2026-06-10)

## 1. 生态全景
当前开源 AI 助手/智能体生态正处于**从“单一对话客户端”向“多模态、多模型、多通道协同操作中枢”跨越的爆发期**。各项目不约而同地将核心开发重心转向**沙箱安全隔离、异构大模型路由以及企业级多租户架构建设**。随着工具调用与记忆机制成为标配，解决大模型的上下文污染和系统状态同步成为了各社区最高频的痛点。整体而言，生态在保持高速迭代的同时，正在经历一场由安全审计和生产级高可用需求驱动的“质量洗牌”。

## 2. 各项目活跃度对比
从今日的工程吞吐量来看，头部效应明显，项目间分化加剧：

| 项目名称 | Issue 更新数 | PR 更新数 | 今日 Release 情况 | 工程/社区健康度评估 | 核心聚焦方向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 450 | 488 | **v2026.6.5** (稳定版) | 🟢 **极优** (闭环率极高) | 核心安全加固(SSRF)、通道稳定性 |
| **CoPaw** | 34 | 34 | **v1.1.11-beta.2** | 🟢 **优秀** (闭环率53%) | 前端性能修复、底层框架向2.0迁移 |
| **Hermes Agent** | 50 | 50 | 无 (主干活跃) | 🟡 **高活跃** (待合入PR多) | 桌面端体验、凭据池调度、动态路由 |
| **ZeroClaw** | 50 | 50 | 无 (主干活跃) | 🟠 **存在积压** (剪刀差形态) | 多渠道路由、Web管控面板、架构重构 |
| **IronClaw** | 45 | 50 | 无 (待发版 v0.29.1) | 🟢 **优秀** (基础设施重构) | Reborn架构生产就绪、E2E测试覆盖 |
| **NanoBot** | 6 | 23 | 无 | 🟢 **稳健** | 记忆生命周期管理、新模型(GPT-5.x)适配 |
| **LobsterAI** | 2 | 5 | 无 | 🟢 **稳健** | 多智能体系统级通知、跨模型协同 |
| **PicoClaw** | - | 5 | Nightly v0.2.9 | 🟠 **安全修复期** (漏洞集中爆发) | 安全审计、前沿模型兼容 |
| **NanoClaw** | 1 | 43 (多为清理) | 无 | 🟡 **整理期** (大量历史PR关闭) | 代码库清理、多模型路由规划 |
| **NullClaw** | 4 | 6 | 无 | 🟢 **轻量健康** (积压清零) | 跨实例记忆、脱敏逻辑优化 |

## 3. OpenClaw 在生态中的定位
**绝对领先的“压舱石”与生态标杆。**
- **社区规模与工程成熟度**：日均在 Issue 和 PR 的更新量级（400+）远超同类项目，且能保持极高的闭环率。发布稳定版 `v2026.6.5` 表明其在激进迭代中保持了强悍的发布纪律。
- **技术路线差异**：相较于其他项目还在解决基础的通道接入和模型路由，OpenClaw 已经深入到**复杂的沙盒底层网络代理重构**（如 HTTP 出口流量架构全面升级）和**企业级安全边界防护**。
- **核心优势**：在多通道状态一致性、MCP 工具调用的鲁棒性处理上，OpenClaw 具备显著的实战经验优势，是少数能支撑大规模、长周期生产部署的开源方案。

## 4. 共同关注的技术方向
各项目在底层架构演进上呈现出高度的“不谋而合”：
1. **记忆与上下文的精细化管理（涉及 NanoBot, OpenClaw, Hermes, ZeroClaw）**
   - **诉求**：简单的滑动窗口已失效。社区强烈要求解决跨会话污染（NanoBot #4259）、上下文压缩导致的消息丢失（Hermes #43066）、以及长期记忆挤占实时指令（ZeroClaw #5844）的问题。
2. **多模型路由与降级策略（涉及 NanoBot, Hermes Agent, IronClaw, CoPaw）**
   - **诉求**：根据任务复杂度、成本和隐私要求，动态切换云端与本地模型。社区正在推动按会话/工具粒度的模型覆盖，以及随模型降级自动禁用高风险工具的策略（Hermes #30652）。
3. **底层安全隔离与 SSRF 防护（涉及 OpenClaw, PicoClaw, NullClaw, Hermes）**
   - **诉求**：随着 Agent 获得代码执行和网络访问权限，沙箱逃逸（NanoBot #4119）、内网 IP 代理绕过（OpenClaw #91752, PicoClaw #3078）成为被集中火力攻击的短板。
4. **严格 API 兼容与参数适配（涉及 PicoClaw, IronClaw, CoPaw, NanoBot）**
   - **诉求**：随着 GPT-5.x 和 Claude Opus 等新一代模型发布，API 严格校验导致旧参数（如 `temperature`, `max_tokens`）或工具名格式（如包含 `.`）引发阻断性 400 报错。

## 5. 差异化定位分析
- **OpenClaw / IronClaw / ZeroClaw**（平台级基础设施）：强调整体架构的扩展性。OpenClaw 侧重多通道网关的极致稳定性；IronClaw 正在发起“Reborn”架构重构，强推生产级多租户和 E2E 测试；ZeroClaw 则通过 Web 面板试图降低多渠道路由的配置门槛。
- **Hermes Agent / CoPaw**（全栈应用与体验）：聚焦于桌面端生态和工具编排。CoPaw 借鉴 Agent-to-Agent 协议致力于打造自动化技能循环；Hermes 则在凭据池管理和 MCP 交互授权上走得较深。
- **PicoClaw / LobsterAI**（异构计算与多智能体协同）：PicoClaw 正在接受社区极其严苛的安全审计洗礼；LobsterAI 则走出了一条差异化路线，专注于跨模型子任务的拆分、派发与系统级原生通知回调。
- **NanoBot / NanoClaw / NullClaw**（轻量级与特定诉求）：NanoBot 专注于前沿模型的零适配与核心上下文记忆重构；NullClaw 关注跨实例的确定性内存同步与 PII 脱敏；NanoClaw 目前处于架构重组期，探索多运行时 SDK 的抽象层。

## 6. 社区热度与成熟度
- **高速迭代期**：**ZeroClaw, Hermes Agent, CoPaw**。社区输入爆炸，新功能不断涌入，但同时暴露出较多前端性能瓶颈和 API 兼容性回归 Bug（如 CoPaw 的桌面端卡顿，ZeroClaw 的消息丢失）。
- **质量巩固期**：**OpenClaw, IronClaw, NanoBot**。代码合并趋向谨慎，重点转向技术债清理、历史 PR 关闭、E2E 测试覆盖以及安全底座的加固，表现出准商业级软件的工程素养。
- **安全阵痛期**：**PicoClaw**。单点突破后，面临 enterprise-ready 的考验，安全研究员的介入正在倒逼其进行大范围的防御性编程。

## 7. 值得关注的趋势信号
1. **“万物皆可路由”成为 Agent 基础设施核心**：开发者不再满足于单一模型走天下，基于规则、工具权限、成本的细粒度模型路由机制将是下一轮开源项目的“标配”和核心卖点。
2. **MCP 工具协议的规范化反噬**：各厂商对 LLM 请求体的严格校验（拒接脏字符、废弃旧参数），给所有 AI Agent 中间件带来了沉重的适配负担。如何建立“容错隔离层”是开源开发者亟待解决的挑战。
3. **多智能体协同向原生 OS 级演进**：AI 智能体不再是仅存在于浏览器的孤岛，System Notification（LobsterAI）、System Tray 徽标、底层文件拖拽投递正在成为多智能体协同通信的新范式。
4. **开源项目的安全合规压力陡增**：从 Telegram 的 `crypto.randomInt` 到各种 SSRF 拦截，社区对项目的安全审计已从“加分项”变成了“一票否决项”。项目方需要建立更快速的安全漏洞响应（如 PicoClaw 面临的批量 Issue）和绕过漏洞的悬赏机制。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project daily report for June 10, 2026.

---

# 📊 NanoBot 项目动态日报 (2026-06-10)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度与健康的迭代节奏**。过去 24 小时内，社区共产生了 6 个新的 Issue 讨论和高达 23 个 PR 更新（其中 11 个被合并或关闭）。项目的核心推进方向主要集中在 **会话上下文记忆（Memory）的健壮性增强**、**前沿大模型（如 GPT-5.x）的适配**以及 **WebUI 交互体验的修复**。整体来看，项目在代码质量、安全性加固（沙箱逃逸拦截）和多渠道兼容性上正持续稳步前进。

## 2. 版本发布
本日期间**无新版本发布**（Latest Releases: 无）。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在以下几个关键领域取得了实质性推进：

*   **WebUI 交互与渲染优化**
    *   PR [#4252](https://github.com/HKUDS/nanobot/pull/4252) [已合并]: 修复了 WebUI 中 TeX 数学公式的渲染问题，现在能够正确解析 `$...$` 和 `\(...\)` 等界定符。
    *   PR [#4208](https://github.com/HKUDS/nanobot/pull/4208) [已关闭]: 实现了 WebUI 中的 "Fork from here" (从此处分支) 功能，允许用户基于历史回复开启新的对话分支。
*   **工具调用与安全执行**
    *   PR [#4190](https://github.com/HKUDS/nanobot/pull/4190) [已合并]: 提高了 Tool Call 的验证严格度，阻止格式错误或非对象的参数被静默修复为 `{}`，提升了系统的安全性与抗错能力。
    *   PR [#4119](https://github.com/HKUDS/nanobot/pull/4119) [活跃]: 修复了相对符号链接导致的沙箱工作区逃逸漏洞。
*   **文档与新手引导**
    *   PR [#4177](https://github.com/HKUDS/nanobot/pull/4177) [已合并]: 全面重构了文档入口，为零基础用户、CLI 用户及开发者提供了更清晰的导航地图。
*   **自动化与渠道支持**
    *   PR [#4265](https://github.com/HKUDS/nanobot/pull/4265) [已合并]: 调整了 `daily-english-read` 的定时任务执行频率。
    *   PR [#3434](https://github.com/HKUDS/nanobot/pull/3434) [已合并]: 在飞书渠道中引入了基于 CodeCogs 的 LaTeX 公式渲染支持。

## 4. 社区热点
今日最受关注的讨论主要集中在多模型调度和记忆系统上下文污染等问题上：

*   **Issue [#4253](https://github.com/HKUDS/nanobot/issues/4253) (评论: 3)**: 用户 *rombert* 提出希望能按会话粒度覆盖全局默认模型。该需求反映了重度用户在处理不同隐私要求和时效性任务时，在“强大的云端模型”与“便宜的本地模型”之间灵活切换的真实痛点。
*   **Issue [#4259](https://github.com/HKUDS/nanobot/issues/4259) (评论: 2)**: 用户 *chxuan* 深入分析了 `history.jsonl` 导致的跨会话上下文污染问题。指出当前系统在注入 `# Recent History` 时缺乏会话隔离机制，引发了社区对 Memory 架构底层数据流的探讨。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性和准确性的 Bug，部分已有 PR 正在修复中：

*   **[严重] WebUI WebSocket 掉话**: Issue [#4267](https://github.com/HKUDS/nanobot/pull/4267) / PR [#4267](https://github.com/HKUDS/nanobot/pull/4267) 修复了 WebUI 在高速流式输出时静默丢弃 Assistant 完整回复的间歇性渲染错误。
*   **[严重] GPT-5.x 参数不兼容**: Issue [#4261](https://github.com/HKUDS/nanobot/issues/4261) 指出 `OpenAICompatProvider` 向 GPT-5.x 传递了已被废弃的 `max_tokens` 而非 `max_completion_tokens`。目前已由 PR [#4263](https://github.com/HKUDS/nanobot/pull/4263) 提交修复。
*   **[中等] 记忆压缩逻辑截断**: Issue [#4264](https://github.com/HKUDS/nanobot/issues/4264) 指出 `idleCompact` 仅对最后 8 条消息之前的历史进行总结，导致近期的纠错行为未被模型学习，从而在 `history.jsonl` 中生成错误的记忆。
*   **[中等] 兼容性 Tool Call 解析失败**: Issue [#4061](https://github.com/HKUDS/nanobot/issues/4061) 暴露了部分 OpenAI 兼容厂商将 tool calls 作为纯文本输出，导致 NanoBot 无法分发执行工具的问题。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以看出项目在下一个周期的演进信号：

*   **精细化记忆与生命周期管理**：用户 *yu-xin-c* 提交了多个关于 Memory 生命周期的 PR（如修复游标单调性的 PR [#4256](https://github.com/HKUDS/nanobot/pull/4256) 和测试框架 PR [#4193](https://github.com/HKUDS/nanobot/pull/4193)），表明项目正在重构底层记忆系统，以解决上下文污染（Issue #4259）和摘要截断（Issue #4264）问题。
*   **多模态与语音识别扩展**：PR [#4260](https://github.com/HKUDS/nanobot/pull/4260) 新增了阶跃星辰 StepFun 的 ASR SSE 语音转录提供商，预示着 NanoBot 正在拓宽语音交互场景的支持。
*   **定制化与权限控制**：PR [#3400](https://github.com/HKUDS/nanobot/pull/3400) 允许用户关闭 Dream 模式对 `SOUL.md` 和 `USER.md` 的自动修改权限，反映了项目正致力于为高级用户提供更精细的系统行为干预能力。

## 7. 用户反馈摘要
*   **使用场景拓宽**：用户已经不满足于单一的模型对话，而是根据任务的隐私敏感度（本地部署）和响应要求（云端 OpenRouter）进行复杂路由（Issue #4253）。
*   **输出排版要求高**：用户对代码块和排版非常敏感，PR [#4266](https://github.com/HKUDS/nanobot/pull/4266)（解决 `apply_patch` 增加行合并问题）和 PR [#4257](https://github.com/HKUDS/nanobot/pull/4257)（解决长文本分割导致代码块截断问题）均是针对输出格式细微破损的修复反馈。
*   **配置细节反馈**：用户指出 WebUI Agent 模式下初次启动未正确加载自定义 `botIcon`（Issue [#4262](https://github.com/HKUDS/nanobot/issues/4262)），表明注重品牌定制化的企业/个人用户正在增加。

## 8. 待处理积压
以下重要 PR 长期处于 Open 状态且处于核心执行链路，建议维护者重点关注：

*   **PR [#4053](https://github.com/HKUDS/nanobot/pull/4053)** (已打开 12 天): 限制文件系统额外允许根目录的写入权限，防止沙箱越权。属于安全性修复，建议尽早排期 Review。
*   **PR [#3983](https://github.com/HKUDS/nanobot/pull/3983) 与 [#3982](https://github.com/HKUDS/nanobot/pull/3982)** (已打开 16 天): 针对 Runner 阻塞 tool-call 和 scripted agent runner 的测试用例补充。这对于适配更多厂商不规范的 LLM 返回格式（如 Issue #4061）至关重要。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-10)

## 1. 今日速览
Hermes Agent 在过去 24 小时内保持了极高的社区活跃度，共产生了 50 条 Issue 更新（45 条新开/活跃，5 条关闭）和 50 条 PR 更新（40 条待合并，10 条合并/关闭）。目前项目没有发布新版本，但主干分支涌入了大量针对核心架构、Desktop 桌面端和 Gateway 网关的改进。整体来看，项目正处于快速迭代期，开发重心明显向**多平台兼容性（如 Alpine/Windows）、上下文压缩机制安全性以及工具调用编排**倾斜，社区贡献者正积极修复近期引入的 P1/P2 级别回归 Bug。

## 2. 版本发布
**无新版本发布。** 项目当前最新发布版仍停留在早期版本，主干分支正积累大量修复与功能更新，预示着近期可能会有新的 Minor/Patch 版本 Tag 释出。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，重点推进了跨平台兼容性及系统底层修复：
*   **Alpine Linux 网关支持落地 ([PR #43098](https://github.com/NousResearch/hermes-agent/pull/43098))**: 增加了对 OpenRC 服务的原生支持，补齐了 Hermes Gateway 在 Alpine Linux 环境下作为系统服务运行的短板。
*   **TUI 工作目录隔离修复 ([PR #38757](https://github.com/NousResearch/hermes-agent/pull/38757))**: 修复了 TUI 在解析工作目录时忽略 `config.yaml` 中 `terminal.cwd` 配置的缺陷，提升了多配置文件环境下的隔离性。
*   **Windows 更新机制修复 ([Issue #26670](https://github.com/NousResearch/hermes-agent/issues/26670))**: 关闭了关于 Windows 下因进程占用导致更新失败的 Bug，改善了桌面端的自更新稳定性。

## 4. 社区热点
今日讨论热度最高的问题集中在**第三方 Provider 接入、代码抄袭争议以及上下文连续性**上：
*   **OpenRouter 鉴权失效问题 ([Issue #42835](https://github.com/NousResearch/hermes-agent/issues/42835) & [Issue #42130](https://github.com/NousResearch/hermes-agent/issues/42130))**: 多位用户反馈在使用 OpenRouter 的免费模型时遇到请求头缺失 `Authorization` 的问题。此问题在鉴权池探测层面尤为明显，引发了对凭据调度逻辑的深度讨论。
*   **开源归属权争议 ([Issue #27266](https://github.com/NousResearch/hermes-agent/issues/27266))**: 社区成员指出 Hermes 的自我进化架构（10步循环与三层记忆系统）与 EvoMap 项目高度相似，要求给出致谢与说明，该话题获得了较高的社区投票（👍2）和讨论（评论 4）。
*   **UI 体验痛点：聊天滚动失效 ([Issue #42777](https://github.com/NousResearch/hermes-agent/issues/42777))**: 桌面端最近的一个版本破坏了聊天自动滚动至底部的体验。用户需要手动下拉才能看到 Agent 的回复或点击“Allow”按钮，该问题获得了今日最高的 👍（3个），反映出对 UI 基础体验的不满。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 P1/P2 级 Bug，部分已产生对应 Fix PR：

*   **[P1] 上下文压缩导致消息丢失与合并 ([Issue #43066](https://github.com/NousResearch/hermes-agent/issues/43066))**: 
    *   *现象*：当触发上下文自动压缩（或 `/compress`）时，新建的子会话会丢失之前的助手回复，且将用户的连续追问错误合并为单轮对话。
    *   *状态*：**已提交 Fix PR ([PR #43092](https://github.com/NousResearch/hermes-agent/pull/43092))**，但主要侧重于凭据编辑修复，消息合并机制仍需跟进。
*   **[P1] 凭据屏蔽导致二次工具调用失败 ([Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083))**: 
    *   *现象*：在执行如 `PGPASSWORD='real_pass' psql` 等命令时，系统出于安全会在历史记录中将密码替换为 `***`。但当模型读取历史记录尝试复用该命令时，会直接失败。
    *   *状态*：**已提交 Fix PR ([PR #43092](https://github.com/NousResearch/hermes-agent/pull/43092))**，将编辑动作移至持久化边界。
*   **[P2] 凭据池耗尽导致报错 misleading 401 ([Issue #40960](https://github.com/NousResearch/hermes-agent/issues/40960))**: 凭据池遇限流（429）后，解析 API Key 为空，导致引发 401 而非真实的配额耗尽警告，增加了用户的排查难度。
*   **[P2] 自定义 Provider 初始化失败 ([Issue #42943](https://github.com/NousResearch/hermes-agent/issues/42943))**: 桌面端成功拉取了自定义 OpenAI 节点模型列表，但网关后端因 `EMPTY_API_SERVER_KEY` 及 Model ID 解析错误崩溃。

## 6. 功能请求与路线图信号
今日涌现了多个高质量的功能请求，预示着 Agent 的工具调用编排即将迎来重要升级：
*   **细粒度模型工具路由策略 ([Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652) / [PR #43123](https://github.com/NousResearch/hermes-agent/pull/43123))**: 
    用户希望根据任务复杂度动态路由模型。开发者据此提交了 PR，引入了 `per-model tool allow/deny policy`，允许在降级到廉价/本地模型时自动禁用如“终端执行”等高风险工具。**此功能极大概率被纳入下个小版本。**
*   **MCP 交互式确认机制 ([PR #43112](https://github.com/NousResearch/hermes-agent/pull/43112))**: 实现了对 MCP `elicitation/create` 请求的处理，允许 MCP 服务器在执行中途通过网关向用户请求授权（如支付确认），打通了本地生物识别与云端网关的壁垒。
*   **沙盒文件投递机制 ([PR #43109](https://github.com/NousResearch/hermes-agent/pull/43109))**: 修复了在远程网关模式下拖拽文件失效的问题，将文件暂存至远程会话工作区，大幅改善了远程部署场景的体验。

## 7. 用户反馈摘要
从今日的 Issue 细节中可以清晰描绘出当前 Hermes 用户的核心使用场景与痛点：
*   **重度依赖远程网关与异构接入**：大量反馈涉及 Telegram 机器人、Email (IMAP) 和 Alpine/VPS 部署，说明用户倾向于将 Hermes 作为长期运行的云端数字分身。如 [Issue #42997](https://github.com/NousResearch/hermes-agent/issues/42997) 中反馈的 IMAP 轮询会将未读邮件误标为已读，对真实工作流干扰严重。
*   **对 MCP 生态的期待**：用户在 [Issue #38945](https://github.com/NousResearch/hermes-agent/issues/38945) 中明确表示，Hermes 暴露 MCP 工具（如 Todoist）的可靠性不如 Claude Code，期望生态互联互通更加顺畅。
*   **UI/UX 细节仍需打磨**：桌面端的看板渲染错误（[Issue #24188](https://github.com/NousResearch/hermes-agent/issues/24188)）、Cron 定时任务结果白屏（[Issue #43121](https://github.com/NousResearch/hermes-agent/issues/43121)）以及深色模式下图标不可见（[Issue #43122](https://github.com/NousResearch/hermes-agent/issues/43122)），都反映出 Desktop 客户端的 QA 覆盖尚不完善。

## 8. 待处理积压
以下高影响力的问题目前仅停留在报告阶段，尚未见核心 Maintainer 提交修复或指派，需提请关注：
*   **[长期未响应] 核心功能请求：动态模型路由 ([Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652))**：自 5 月 22 日提出以来讨论热烈，当前虽有社区 PR 试图解决部分需求，但亟需官方确认架构设计方向。
*   **[待认领] 桌面端基础体验破坏：聊天不再自动滚动 ([Issue #42777](https://github.com/NousResearch/hermes-agent/issues/42777))**：被社区点踩最多的退化问题，严重影响日常对话交互，尚无官方人员响应。
*   **[待认领] IMAP 网关读取邮件触发已读标记 ([Issue #42997](https://github.com/NousResearch/hermes-agent/issues/42997))**：Email 网关的一个典型反模式缺陷，可能导致用户错失重要邮件提醒，需要修改为 `UID PEEK`。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-06-10)

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

过去 24 小时，PicoClaw 项目呈现出**极高的安全审视活跃度与持续的工程迭代**。社区开发者（尤其是安全研究员 YLChen-007）集中提交了超过 10 个安全相关 Issue，全面覆盖了 SSRF 防护绕过、启动器鉴权、WebSocket 越权等核心攻击面，暴露出项目在边界条件处理上的薄弱环节。与此同时，核心团队及贡献者通过 5 个已合并的 PR，成功修复了 Anthropic 模型弃用参数、历史记录显示异常等关键 Bug，并发布了 `v0.2.9` 的最新 Nightly 构建版。整体来看，项目处于“安全加固与功能打磨并重”的关键演进期，社区参与度显著提升。

---

## 2. 版本发布

- **[`nightly: Nightly Build v0.2.9-nightly.20260609.46b29a0a`](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新内容**：包含了截至 `46b29a0a` 提交的主分支最新代码，主要整合了近期合并的 Anthropic 模型兼容性修复、UI 细节更新及错误处理优化。
  - **注意事项**：作为自动化构建版本，**可能存在不稳定情况**，仅推荐用于测试环境，不建议直接用于生产。
  - **完整变更日志**：[v0.2.9...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. 项目进展

今日共有 **5 个 PR 被合并/关闭**，项目在模型适配性和底层健壮性上取得了实质性进展：

- **[[CLOSED] PR #2940: fix(providers): omit temperature for claude-opus-4-7](https://github.com/sipeed/picoclaw/pull/2940)**
  - **意义**：解决了与 Anthropic 最新模型的兼容性问题。移除了对不支持 `temperature` 参数的模型的冗余发送，直接修复了导致请求失败 (HTTP 400) 的阻断性错误。
- **[[CLOSED] PR #2942: fix(config): use canonical hyphenated model ID for default claude-sonnet entry](https://github.com/sipeed/picoclaw/pull/2942)**
  - **意义**：修正了默认配置中 `claude-sonnet-4.6` 的模型 ID 格式（从点分替换为连字符），确保新用户首次安装时能够零配置成功调用模型。
- **[[CLOSED] PR #3064: fix(config): add ok check for type assertion in migration model name indexing](https://github.com/sipeed/picoclaw/pull/3064)**
  - **意义**：增强了配置迁移代码的健壮性。通过增加类型断言的 `ok` 检查，防止了畸形配置导致的程序崩溃。
- **[[CLOSED] PR #2937: Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)**
  - **状态**：尽管被关闭，但该 PR 引入了内部 Agent 协作总线的设计，为后续多 Agent 编排架构的落地奠定了基础。
- **[[CLOSED] PR #3086: docs: update wechat qrcode](https://github.com/sipeed/picoclaw/pull/3086)**
  - **意义**：日常文档/社区入口维护更新。

---

## 4. 社区热点

今日讨论热度最高、影响最深远的事件为**安全审计风暴**，同时功能层面的流式请求与终端信号也备受关注：

- **🔥 集中爆发的基础设施安全 Issue（作者：YLChen-007）**
  社区研究员集中披露了十余项安全漏洞，其中最受瞩目的包括：
  - [`#3078 web_fetch SSRF 保护可通过环境配置的 HTTP 代理绕过`](https://github.com/sipeed/picoclaw/issues/3078)
  - [`#3072 首次运行密码设置的 CSRF 漏洞导致本地控制平面接管`](https://github.com/sipeed/picoclaw/issues/3072)
  - [`#3071 认证的 WebSocket 客户端可通过 /reload 触发未授权的网关重载`](https://github.com/sipeed/picoclaw/issues/3071)
  - **背后诉求**：PicoClaw 正从单机工具向多通道、网络化 AI 智能体网关演进，社区强烈要求项目组提升在复杂网络环境下的权限隔离、输入校验和防重放能力。
- **💬 长期诉求：流式 HTTP 请求支持 ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404))**
  - 该issue今日再次活跃，积累了 11 条讨论。用户希望像调用原生 Python OpenAI 客户端一样，在配置中开启 `"streaming": true`。这反映出当前非流式交互在长文本生成场景下存在严重的响应延迟痛点。
- **🔌 协议完善：WebSocket 轮次完成信号 ([Issue #2984](https://github.com/sipeed/picoclaw/issues/2984))**
  - 外部协议客户端缺乏明确判定 Agent 何时完成一轮处理的机制，这是构建可靠 PicoClaw 客户端生态的核心阻塞点。

---

## 5. Bug 与稳定性

今日报告的缺陷主要集中在**模型兼容性、通道媒体处理和上下文压缩机制**：

- **🔴 P1: Claude Opus 4-7 调用失败 (HTTP 400)**
  - [Issue #2939](https://github.com/sipeed/picoclaw/issues/2939)：向 `claude-opus-4-7` 发送请求时携带了已弃用的 `temperature` 参数导致失败。
  - **修复状态**：✅ 已通过 [PR #2940](https://github.com/sipeed/picoclaw/pull/2940) 合并修复。
- **🟠 P2: Web UI 历史记录显示不全**
  - [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)：包含多轮消息的对话，在历史记录中仅显示最后一条用户消息。
  - **修复状态**：🔄 已有开源贡献者提交 [PR #2990](https://github.com/sipeed/picoclaw/pull/2990)，待项目方 Review。
- **🟠 P2: 上下文压缩比例配置不生效**
  - [Issue #2968 (PR #2988 暴露)](https://github.com/sipeed/picoclaw/pull/2988)：不论如何配置 `summarize_token_percent`，UI 始终硬编码显示 76800 tokens。
  - **修复状态**：🔄 待合并 [PR #2988](https://github.com/sipeed/picoclaw/pull/2988)。
- **🟡 P3: 空LLM响应导致 Agent 卡死**
  - 大模型偶尔返回 HTTP 200 但内容完全为空，现有逻辑未做重试。
  - **修复状态**：🔄 待合并 [PR #2983](https://github.com/sipeed/picoclaw/pull/2983)。

---

## 6. 功能请求与路线图信号

通过近期的 Issue 与活跃 PR，可以看出项目下一阶段的演进方向：

- **📡 多网关与通道扩展**：[PR #3063 (新增 Delta Chat 网关)](https://github.com/sipeed/picoclaw/pull/3063) 和 [PR #2917 (集成 NEAR AI Cloud 提供商)](https://github.com/sipeed/picoclaw/pull/2917) 表明项目正在迅速扩展其通信协议边界和去中心化算力接入能力。
- **🔐 深度安全加固（重点路线）**：安全研究员的批量 Issue 已经转化为实际的代码修复行动。[PR #3085 (拦截 198.18.0.0/15 网段的 SSRF)](https://github.com/sipeed/picoclaw/pull/3085) 和 [PR #3083 (硬化 Launcher 访问控制)](https://github.com/sipeed/picoclaw/pull/3083) 已然开启。预计下一版本发布前，**“阻断所有潜在的内网代理与 IP 伪装攻击”**将成为 MUST-HAVE 项。
- **📦 依赖库现代化**：[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) 提出使用官方的 `vodozemac` 替换已停止维护且不安全的 `libolm`，这是保障端到端加密通信基础建设的必要前置任务。

---

## 7. 用户反馈摘要

从社区的反馈和提交记录中，提炼出以下典型用户画像及痛点：

- **跨国界企业级用户（集成飞书/企业微信/OneBot等）**：他们高度关注多通道接入时的权限隔离和资源安全加载（如 [Issue #3076](https://github.com/sipeed/picoclaw/issues/3076), [Issue #3075](https://github.com/sipeed/picoclaw/issues/3075)）。痛点在于：默认配置往往面向单机体验，在复杂的内部群组触发、本地工作目录自动装载等逻辑上缺乏企业级的边界管控。
- **二次开发/独立开发者（集成客户端）**：痛点集中在协议层细节（如 [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984) 缺乏终止信号）。他们需要明确的流结束标志以维持状态机稳定。
- **前沿模型发烧友**：经常第一时间尝试 Claude Opus 等最新模型，对 PicoClaw 的兼容性响应速度要求极高（昨日提报 API 报错，今日即有对应 PR 合并），对项目的迭代效率表示认可。

---

## 8. 待处理积压

以下关键 Issue 和 PR 停滞时间较长，建议维护团队 (@sipeed) 重点跟进分流：

- **多通道数据过滤缺陷**：
  - [PR #2987: 修复活跃流传输期间 tool_calls 消息被错误丢弃的问题](https://github.com/sipeed/picoclaw/pull/2987)。这可能导致智能体在连续思考中丢失工具调用上下文，属于逻辑级回归，已 stale，请求 urgent review。
- **早期高优 Feature**：
  - [Issue #2404: 恳请支持流式输出配置](https://github.com/sipeed/picoclaw/issues/2404)。距今已超过 2 个月，获得了用户的点赞与热烈讨论，需官方确认排期。
- **核心加密依赖替换**：
  - [Issue #3088: 用 vodozemac 替换 libolm](https://github.com/sipeed/picoclaw/issues/3088)。涉及底层加密库的存亡替换，不仅关乎安全性，也影响主要平台的编译兼容性，建议纳入近期 Sprint。
- **安全漏洞确认**：
  - YLChen-007 提交的诸多 Security Issues 目前均处于 Open 状态，缺乏官方的确认或漏洞悬赏声明，建议统一进行评估并打上 `security` 标签。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-10)

> 数据来源：[NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw)  
> 分析周期：过去 24 小时

---

## 1. 今日速览

NanoClaw 项目今日继续保持高吞吐量的工程迭代，但核心开发精力似乎正集中在代码审查与历史分支清理上。今日共有 **43 个 PR 发生状态更新**，其中绝大部分（39 个）为历史 PR 的集中关闭，仅 4 个仍处于待合并状态。项目暂无新版本发布，但新增了 1 个高质量的设计探讨 Issue。整体来看，项目维护者可能正在进行功能冻结或大范围的代码库整理，为下一个重大版本发布做冲刺准备。项目活跃度评估：**高（以清理和合并为主）**。

---

## 2. 版本发布

*今日无新版本发布。*

---

## 3. 项目进展

今日项目出现了** 39 个 PR 被集中关闭**（大部分为历史遗留 PR），以及 4 个关键 PR 更新。这表明项目正在进行严格的 backlog 梳理。核心进展如下：

*   **安全核心加固 (PR #2722)**：维护者 `dweekly` 提交了关键安全修复，将 Telegram 配对码的生成机制从可预测的 `Math.random` 升级为密码学安全的 `crypto.randomInt` ([PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722))。
*   **开发者体验与文档完善 (PR #2721)**：维护者 `gavrielc` 新增了关于自定义介绍、技能模型和指导方针的公开文档，确立了技能定制的契约 ([PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721))。
*   **核心架构演进受阻/搁置**：多个大型 Feature PR 被标记为 `Pending Closure` 并关闭，包括 WebUI 控制面板 ([PR #212](https://github.com/nanocoai/nanoclaw/pull/212))、Prompt 追踪日志 ([PR #337](https://github.com/nanocoai/nanoclaw/pull/337)) 等，暗示这些架构设计可能与主分支未来方向存在冲突或需重新规划。
*   **周边生态功能沉淀**：虽然大量 PR 关闭，但诸如直接运行模式（绕过 Docker，[PR #1285](https://github.com/nanocoai/nanoclaw/pull/1285)）、安全策略引擎 ([PR #1605](https://github.com/nanocoai/nanoclaw/pull/1605)) 等重要功能均在今日完成了状态终结，可能已被合入其他分支或采用替代方案。

---

## 4. 社区热点

目前社区最核心的关注点在于**多运行时 SDK 的抽象与兼容性**。

*   **多运行时代理 SDK 抽象 ([Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690))**：
    *   **状态**：Open，获得 3 次点赞和 4 条深度评论。
    *   **分析**：用户 `chiptoe-svg` 提出了一套位于 NanoClaw 之上的多运行时抽象层，允许将不同的 Agent SDK（如 Claude、Codex 和本地模型）作为模块化技能安装。这反映了社区对**打破单一模型锁定**的强烈诉求，希望 NanoClaw 能够成为跨模型的中枢控制器。该议题的活跃表明项目的架构扩展性正受到开发者的密切关注。

---

## 5. Bug 与稳定性

*   **高危安全漏洞已修复**：Telegram 频道存在配对码被预测的风险，可能导致非授权用户获取聊天控制权。目前通过 [PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722) 已提供修复，等待合并。
*   *(注：今日其余更新多集中在功能封版和文档改进，未暴露新的系统级崩溃或回归问题。)*

---

## 6. 功能请求与路线图信号

结合今日动态，可以洞察出项目未来的演进方向：

1.  **多模型支持将成为重点**：[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) 的热烈讨论释放了明确信号，支持本地模型和第三方 SDK 的插件化接入将是社区接下来的强烈诉求。
2.  **轻量化部署（去 Docker 化）**：[PR #1285](https://github.com/nanocoai/nanoclaw/pull/1285)（Direct runner 模式）的出现与关闭，表明团队已经注意到 Docker 带来的性能开销，未来可能提供更轻量的本地运行模式。
3.  **安全合规与可观测性**：安全策略引擎（[PR #1605](https://github.com/nanocoai/nanoclaw/pull/1605)）与 Prompt 追踪（[PR #337](https://github.com/nanocoai/nanoclaw/pull/337)）的提案说明项目正在向**企业级应用**场景迈进，对权限细粒度控制和调试追踪有严格要求。

---

## 7. 用户反馈摘要

从 [Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) 及相关 PR 中可以提炼出当前用户的典型痛点：
*   **单一套接字限制**：高级用户不希望仅绑定 Claude，希望在同一个会话中通过路由规则调用不同厂商的模型。
*   **定制化痛点**：用户非常喜欢目前 "Skills" 的概念（如 `/add-telegram`），并强烈建议将这种 "即插即用" 的模式复制到模型运行时层面。
*   **开发者体验问题**：部分贡献者反馈在复杂 PR（如 WebUI）长期处于 Blocked 状态后失去上下文，建议项目建立更明确的 stale PR 清理与反馈机制。

---

## 8. 待处理积压

今日维护团队展现了极强的执行力，清理了大量积压 PR，但仍有以下关键项需要关注：

*   **待合并的安全修复**：[PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722) 修复了核心的安全隐患，当前状态为 Open，建议维护团队优先进行 Code Review 并尽快合入主线。
*   **文档体系整合**：[PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721) 建立了新的自定义文档契约，需确认是否与其他历史文档 PR 产生冲突，并尽快合并以指导后续社区的 Skill 开发。
*   **大型架构 PR 的后续去向**：今日大量如 WebUI ([PR #212](https://github.com/nanocoai/nanoclaw/pull/212))、插件系统 ([PR #1387](https://github.com/nanocoai/nanoclaw/pull/1387)) 等高星功能被标记关闭，建议维护团队在相关 Issue 下同步后续的重构计划，以免挫伤社区贡献者的积极性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 2026 年 6 月 10 日 NullClaw 项目动态日报：

# NullClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
过去 24 小时内，NullClaw 项目展现出**极高的问题解决效率与健康的迭代节奏**。项目今日无新版本发布，但成功合并/关闭了 **6 个 PR** 和 **4 个 Issue**，处理速度十分迅猛。当前仅保留 **1 个待合并 PR** (PR #946) 和 **1 个未解决 Issue** (Issue #941)，项目积压清零趋势明显。今日代码提交主要聚焦于修复 PII 脱敏误判、完善 Telegram 交互体验以及清理历史遗留死代码，整体代码质量与稳定性正在显著提升。

## 2. 版本发布
**无**（今日无新版本发布）。

## 3. 项目进展
今日共有 6 个 Pull Requests 有了实质性推进，为项目带来了以下核心升级：
*   **[CLOSED] PR #945**：修复了 PII 脱敏组件将时间日期误判为电话号码的严重逻辑错误，大幅提升了默认脱敏功能的可用性。
*   **[CLOSED] PR #940**：修复了自定义 OpenAI 兼容供应商模型列表无法正常拉取的 Bug，打通了对第三方 LLM 网关的兼容性。
*   **[CLOSED] PR #943**：为 Telegram 机器人的内联按钮（`callback_query`）补充了“正在输入”的状态指示，优化了用户等待体验。
*   **[CLOSED] PR #939**：清理了 `compact_context` 这个“死Flag”，使其能够真正在运行时发挥作用，优化了上下文压缩逻辑。
*   **[CLOSED] PR #711**：这是一个合并了长达数月的核心功能分支，引入了确定性的内存事件流，为实现跨智能体实例的内存同步打下了基础。
*   **[OPEN] PR #946**：改进了系统提示词中的工具过滤逻辑，目前状态为待合并。

## 4. 社区热点
*   **[CLOSED] Issue #944** (作者: vernonstinebaker)：PII 脱敏组件过于激进地匹配时间输出引发了讨论，反映出用户在生产环境中对 AI 输出格式准确性的极高要求。此 Issue 已伴随 PR #945 的合而解决。
*   **[CLOSED] PR #947** (作者: EvoLinkAI)：社区贡献者尝试将 Evolink 作为一等公民的 OpenAI 兼容供应商加入项目。尽管该 PR 已被关闭（可能是暂不合并或需调整），但反映出外部 AI 网关服务商积极接入 NullClaw 生态的意愿。

## 5. Bug 与稳定性
今日报告及修复了多个影响使用体验的 Bug，按严重程度排列如下：
*   **[严重] 定时任务不触发**：**Issue #941** 报告了 Agent 类型的 Cron 定时任务未能生成子进程，导致 Telegram 推送失效。该问题目前处于 OPEN 状态，**暂无关联 fix PR**，需重点关注。
*   **[中等] 模型列表回退错误**：**Issue #936** 报告自定义 Provider 会错误回退到 Anthropic 模型列表。已通过 **PR #940** 修复。
*   **[中等] PII 脱敏误杀**：**Issue #944** 报告默认开启的 PII 保护会覆盖系统时间输出。已通过 **PR #945** 修复。
*   **[较低] Telegram 交互提示缺失**：**Issue #942** 报告点击内联按钮时无“正在输入”提示。已通过 **PR #943** 修复。

## 6. 功能请求与路线图信号
*   **跨实例共享记忆**：通过今日关闭的长期 PR #711 (Feat/cross memory)，可以看出项目正在向**多智能体协同**与**持久化记忆共享**的高级路线图演进。这意味着未来的 NullClaw 将能够支持复杂的多 Agent 工作流。
*   **精细化工具权限控制**：处于待合并状态的 PR #946 引入了基于 `tool_filter_groups` 的提示词过滤机制，表明项目正致力于减少发送给 LLM 的冗余 Tool 定义，从而降低 Token 消耗并抑制模型幻觉。

## 7. 用户反馈摘要
*   **部署与网关对接痛点**：从 Issue #936 可以看出，重度用户正在将 NullClaw 接入各种兼容 OpenAI API 的自建或第三方网关，对动态拉取模型列表的功能需求迫切。
*   **网络感知体验**：从 Issue #942 的反馈中提炼出，用户对 Telegram 端的响应延迟极其敏感，缺乏“正在输入”的反馈会让用户误以为机器人宕机。
*   **隐私与实用性平衡**：用户对 `enable_pii_redaction` 默认开启表示认可，但抱怨其粗糙的正则匹配影响了日常使用，呼吁项目在隐私保护与功能可用性之间取得更好的平衡。

## 8. 待处理积压
*   **🔥 核心未解决问题**：**Issue #941** (Agent 类型的定时任务无法派生子进程进行推送)。由于该问题直接导致核心自动化功能失效，建议维护者 (@raskevichai, @vernonstinebaker) 立即介入排查。
*   **待审核 PR**：**PR #946** (系统提示词工具过滤机制) 目前仍在等待 Review，考虑到其能显著优化 Token 消耗，建议团队尽快安排合并测试。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw (nearai/ironclaw) 项目动态日报
**日期**: 2026-06-10 | **分析师**: AI 开源项目智能分析助手

---

### 1. 今日速览
IronClaw 项目在过去24小时内保持**极高的活跃度**，社区与核心开发团队紧密协作，共产生 45 条 Issue 更新和 50 条 PR 更新。项目当前的重心高度聚焦于底层的 **"Reborn" 架构重构与生产环境就绪（Production Readiness）**，涵盖从内核宿主、数据库连接到 WebUI 的全面升级。尽管尚未发布新的正式版本（当前发版 PR #3708 仍在待合并状态），但今日出现了大量针对 LLM 提供商兼容性修复和 WebUI E2E 测试覆盖的提交，标志着项目正在为下一次重大发布进行密集的质量保障和稳定性收口工作。

### 2. 版本发布
今日无新的正式版本发布。
*注：包含多个核心组件 API 破坏性变更的 `v0.29.1` 发版 PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) 仍处于 Open 状态，正在等待最终的合并与发版。*

### 3. 项目进展
今日项目的主要进展围绕 **Reborn 生产环境的可用性验证、遗留代码清理以及测试覆盖**展开。以下为已关闭/合并的关键 PR 及其带来的实质性推进：
*   **Reborn 生产环境底层运行时就绪**：[PR #4645](https://github.com/nearai/ironclaw/pull/4645) 成功合入，将生产级 Reborn 服务（支持 libSQL/Postgres）接入构建运行时，并在 CLI 启动路径中强制校验生产运行时策略，这是实现生产平滑切换的核心里程碑。
*   **WebUI v2 网络与安全控制对齐**：核心开发者完成了 v2 路由的安全审计与测试，[PR #4623](https://github.com/nearai/ironclaw/pull/4623) 补齐了 CSRF/Origin/CORS 及请求体/连接数限制的测试；[PR #4624](https://github.com/nearai/ironclaw/pull/4624) 验证了静态安全头和错误过滤机制。
*   **LLM 兼容性与协议级修复**：修复了 OpenAI 兼容层在会话超时情况下的处理逻辑 ([PR #4638](https://github.com/nearai/ironclaw/pull/4638))。
*   **遗留技术债清理**：核心团队关闭了 OpenAI API 迁移兼容性测试的收尾 Issue ([Issue #4447](https://github.com/nearai/ironclaw/issues/4447)) 以及流式 SSE 协议转译的 Issue ([Issue #4446](https://github.com/nearai/ironclaw/issues/4446))，证明 Reborn 在底层协议层面已完全对齐。

### 4. 社区热点
今日讨论最热烈、受关注度最高的议题主要围绕 Reborn 核心架构的顶层设计和致命错误展开：
*   **[Issue #3026](https://github.com/nearai/ironclaw/issues/3026) [Epic: Reborn 生产级架构与切换就绪]**：评论数最多（3条）。该 Issue 是整个 Reborn 生产化工作的顶层追踪器，讨论焦点在于如何确保在生产环境中，当所需服务缺失或未验证时，系统能够坚决拦截流量而不是半残运行。
*   **[Issue #4642](https://github.com/nearai/ironclaw/issues/4642) [Bug: 严格模式提供商参数被拒]**：评论数 1 条。这是一个严重影响易用性的 Bug，当使用 OpenAI 等严格模式的 LLM 时，未设置的可选参数会被传为 `null`，从而触发底层校验报错，导致大量内建工具失效。目前已有对应的修复 PR ([PR #4643](https://github.com/nearai/ironclaw/pull/4643))。
*   **[Issue #4548](https://github.com/nearai/ironclaw/issues/4548) [Bug: 携带工具调用时序列化重复 `model` 字段 (DeepSeek 400 报错)]**：影响与 DeepSeek 模型集成的用户，暴露了 JSON 序列化层面的盲点。

### 5. Bug 与稳定性
今日报告了多个影响 LLM 对接和日常使用的 Bug，整体来看多数已被快速响应。按严重程度排列如下：

*   **P0 - 核心工作流阻断**：
    *   [Issue #4642](https://github.com/nearai/ironclaw/issues/4642)：严格模式提供商的 null 参数引发校验失败。**状态**：已提报 [Fix PR #4643](https://github.com/nearai/ironclaw/pull/4643)。
*   **P1 - 特定模型/服务阻断**：
    *   [Issue #4548](https://github.com/nearai/ironclaw/issues/4548)：携带 Tools 调用 DeepSeek 失败（包含双 `model` 字段）。
    *   [Issue #4587](https://github.com/nearai/ironclaw/issues/4587)：Minimax 提供商密钥读取异常导致无法配置。**状态**：暂无关联 Fix PR。
*   **P2 - 逻辑偏差与数据返回错误**：
    *   [Issue #4640](https://github.com/nearai/ironclaw/issues/4640)：Gsuite Calendar 扩展默认返回最旧的事件（未设置时间下限）。**状态**：已提报 [Fix PR #4641](https://github.com/nearai/ironclaw/pull/4641) 修复排序逻辑。
    *   [Issue #3750](https://github.com/nearai/ironclaw/issues/3750) 相关：Embeddings 模型配置优先级错误。**状态**：已在 [PR #4649](https://github.com/nearai/ironclaw/pull/4649) 中修复。

### 6. 功能请求与路线图信号
从今日的 Open Issues 和 PR 动向来看，项目下一阶段将重点强化以下方向：
*   **多模态/通用附件支持**：[Issue #4644](https://github.com/nearai/ironclaw/issues/4644) 提出 Reborn 需要支持跨渠道的通用附件管道。目前配套的扩展注册表 [PR #4654](https://github.com/nearai/ironclaw/pull/4654) 和转录合同支持 [PR #4655](https://github.com/nearai/ironclaw/pull/4655) 均已提交，这表明多模态能力将在下一版本全面落地。
*   **企业级多租户/共享工具集**：[Issue #4628](https://github.com/nearai/ironclaw/issues/4628) 提出管理员需能够一次配置共享工具，全员免配置使用；[Issue #4625](https://github.com/nearai/ironclaw/issues/4625) 提出在 Slack 中实现个人代理和团队代理路由分发。这些均释放出 IronClaw 正在积极布局 **团队协作与企业级 SaaS 化** 的强烈信号。
*   **CLI/DevOps 友好度提升**：社区提交了 [PR #4653](https://github.com/nearai/ironclaw/pull/4653)，支持通过 `--secret` 标志进行非交互式的工具密钥配置，极大优化了 CI/CD 自动化流中的体验。

### 7. 用户反馈摘要
从今日的 Issue 描述中可以提炼出以下用户使用痛点：
*   **新模型接入痛点**：用户在使用新发布的推理模型（如 Opus 4.7/4.8, gpt-5.x）以及第三方模型（DeepSeek, Minimax）时，依然容易遇到参数兼容性边界问题（如 `temperature` 被拒、参数序列化异常），期盼对各类 OpenAI 兼容 API 有更深度的容错。
*   **WebUI 全链路体验缺失**：部分开发者指出，虽然 Rust 后端测试完善，但缺少真实浏览器环境的 E2E 测试（如 [Issue #4632](https://github.com/nearai/ironclaw/issues/4632)），导致前端体验存在盲区。团队已快速响应并规划了全套浏览器 E2E 冒烟测试。

### 8. 待处理积压
*   **待合并的庞大依赖升级**：由 dependabot 提出的 Tokio 生态系统依赖升级 ([PR #4499](https://github.com/nearai/ironclaw/pull/4499)) 涉及 `tokio-tungstenite`, `hyper` 等核心网络库，已开启 4 天，需要维护者尽快完成兼容性评审与合并。
*   **亟待关闭的发版 PR**：[PR #3708](https://github.com/nearai/ironclaw/pull/3708) 涉及多个底层 crate 的破坏性更新（如 `ironclaw_common` 从 0.4.2 升级至 0.5.0），拖尾时间较长。建议维护者尽快确认未合并的 Bug 修复（如 DeepSeek 序列化问题）是否需要合入此次大版本，尽早完成发版。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-06-10)

> 数据统计周期：过去 24 小时 | 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览
过去 24 小时，LobsterAI 项目保持了**中高水平的开发与社区活跃度**。项目今日新增 2 条社区需求讨论，同时开发团队高强度合并了 4 个 Pull Requests，主要集中在多智能体协作的任务通知机制优化以及前端交互体验修复。当前仍有 1 个 PR 待合并处理，但整体代码迭代顺畅。项目整体呈现出**功能向多智能体协同深度推进、交互向系统级原生体验优化**的健康发展趋势。

### 2. 版本发布
* **最新 Releases**：无
* *注：虽然今日无正式版本发布，但从密集合并的 PR 来看，项目极有可能正在为下一次的小版本迭代（预计涉及 Cowork 协作与通知系统更新）做代码准备。*

---

### 3. 项目进展
今日共更新 5 个 PR，其中 4 个已顺利合并/关闭，核心进展如下：

* **🚀 核心推进：Cowork 任务完成通知系统落地**
  * **PR [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) [CLOSED]**: 成功引入了 Cowork 会话的隐私安全任务完成提醒功能。当 LobsterAI 不在前台时，支持显示系统通知，并新增了 macOS Dock 徽章计数和 Windows 任务栏提醒。
  * **PR [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) [CLOSED]**: 进一步完善了上述通知机制，修复了主窗口关闭或销毁时的状态恢复问题，优化了 macOS 通知中心的点击响应。
* **🛠️ 体验修复与代码清理**
  * **PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) [OPEN]**: 修复了前端渲染层的导出和代码复制的 Bug，目前正等待合并。
  * **PR [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) [CLOSED]**: 暂时关闭了数据备份功能（临时性 Chore 操作）。
  * **PR [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) [CLOSED]**: 涉及数据备份与迁移的功能分支，已被关闭（与 #2135 的暂缓策略保持一致）。

---

### 4. 社区热点
今日社区关注点明显聚焦于**多智能体架构的底层通信与支持广度**：

* **热点一：跨模型子任务的通信机制瓶颈**
  * **Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)**：用户深度探讨了“主任务（擅长规划）+子任务（擅长执行）”的跨模型协作场景。用户发现当前的网关级函数调用无法像同模型子任务那样实现状态感知，呼吁建立跨模型的主动通知机制。这直击当前 AI Agent 框架在多模型编排时的痛点，极具讨论价值。
* **热点二：第三方 Agent 框架兼容性需求**
  * **Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)**：社区用户询问是否有支持 Hermes Agent 的计划，反映出 LobsterAI 用户对扩展更多开源/第三方 Agent 生态的强烈诉求。

---

### 5. Bug 与稳定性
* **前端交互 Bug (中等严重)**：用户在 Cowork 会话中遇到数据导出和代码复制功能异常，开发者 **已提交 Fix PR**，见 [PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133)，待合并发布。
* **多任务流转逻辑缺陷 (业务体验级)**：如 [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) 所述，跨模型调用时，子任务无法向主任务主动汇报进度或卡点，存在“失控”风险。目前为纯社区讨论，尚无对应的 Fix PR。

---

### 6. 功能请求与路线图信号
通过分析今日动态，我们可以洞察到项目近期的演进方向：
* **信号一：系统级原生集成**：通过合并 [PR #2130](https://github.com/netease-youdao/LobsterAI/pull/2130)，LobsterAI 正在强化“宿主桌面系统”的集成能力（通知中心、底部任务栏），未来 AI 在后台执行耗时任务时，用户体验将更加无缝。
* **信号二：高级多模型路由（用户诉求）**：[Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) 暴露了用户对于“混合专家模型”在同一个工作流中协同的强烈需求。若项目组采纳此建议进行底层重构，将是下一版本的重大卖点。
* **信号三：数据安全与迁移（受阻/暂缓）**：[PR #2135](https://github.com/netease-youdao/LobsterAI/pull/2135) 和 [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) 的状态表明，“数据备份与迁移”功能可能遇到了技术阻碍或产品策略调整，近期不会上线。

---

### 7. 用户反馈摘要
* **典型痛点：跨模型协作的“黑盒化”**：高级用户正在利用 LobsterAI 组合不同模型的优点（如 GPT/M3 做规划，DeepSeek 做执行），但目前的基础设施无法支持子任务完成后的状态回传，导致任务容易中断。
* **使用场景验证**：从 Issue 讨论可以看出，真实用户已经将 LobsterAI 应用于复杂的自动化工作流中，而非仅仅作为简单的对话客户端。多智能体框架的健壮性已成为专业用户的核心考量。

---

### 8. 待处理积压
* ⚠️ **[PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133) [OPEN]**：该 PR 修复了影响基础的导出和代码复制 Bug，直接影响日常使用体验，建议维护团队优先进行 Code Review 并合并。
* 💡 **[Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) [OPEN]**：该 Issue 质量极高，用户提供了详细的排查过程和设计建议（甚至定位到了 Gateway 级别），建议核心开发者介入评估其纳入 Roadmap 的可行性。

---
*本文由 AI 智能体基于 GitHub 数据自动生成*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 **CoPaw (QwenPaw)** 开源项目 2026 年 6 月 10 日动态日报：

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-06-10)

## 1. 今日速览
CoPaw 项目今日维持了极高的社区活跃度与迭代速度。过去 24 小时内，项目共处理了 **34 条 Issue**（其中 18 条被关闭，闭环率高达 53%）和 **34 条 PR**（16 条被合并/关闭），并成功发布了 **v1.1.11-beta.2** 测试版本。今日社区的焦点高度集中在 v1.1.10/v1.1.11 版本引发的**前端性能卡顿、底层路径溢出及桌面端** 兼容性问题上。同时，多项重磅基础设施 PR（如 E2E 自动化测试、Agent 2A 协议接入）正在积极推进中，显示出项目在快速迭代的同时，正在大力夯实底层工程质量。

---

## 2. 版本发布
- **[v1.1.11-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/1.1.11-beta.2)**
  - **更新亮点**：引入了浏览器层面的页面坐标点击支持，并修复了跨浏览器切换时的隔离问题。
  - **关键变更**：
    - `feat(browser)`: 为 `browser_control` 增加了页面坐标点击支持 (#4905)。
    - `fix(browser)`: 增加 CDP 超时参数，并实现了浏览器配置文件的隔离，以解决跨浏览器切换冲突。

---

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，项目在功能迭代和工程健壮性上取得了显著进展：
- **免费模型零配置与 OAuth 登录**：[#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) 引入了免费模型的零配置支持及 Provider 的一键 OAuth 认证，极大降低了新用户的上手门槛。
- **E2E 测试与 CI 流水线合并**：[#5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) 建立了完整的 Playwright E2E CI 管道，并合并了夜间全量测试。配合移除冗余工作流的 [#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056)，CI 资源利用率得到优化。
- **会话与上下文管理修复**：合并了修复 `/compact` 命令忽略模型最大输入长度 bug 的 PR [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021)，解决了因缺失 `active_model` 导致默认回退到 128K 的痛点。
- **安全与稳定性修复**：[#5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) 修复了 `_broadcast_to_subscribers` 中未等待协程导致的广播失败问题。
- **UI 细节优化**：[#5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) 优化了系统主题切换图标的语义清晰度。

---

## 4. 社区热点
今日社区讨论最热烈的方向集中在**竞品对标、架构演进与工具规范**：
- **对标竞品创新**：[#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) (👍3, 评论 10) 引发了关于借鉴 Hermes Agent “学习循环”的广泛讨论。用户希望 CoPaw 能支持 Agent 自动从自身行为中迭代技能，而不仅仅是静态的 Skill。
- **底层框架大版本迁移**：核心路线图 Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (评论 7) 提出将后端从 AgentScope 1.x 迁移至 2.0。这引起了开发者对 API 变动和架构重构的高度关注。
- **API 工具命名规范冲突**：多个高赞 Issue（如 [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045), [#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918), [#5034](https://github.com/agentscope-ai/QwenPaw/issues/5034)）集中反馈了 MCP 工具名包含 `.` 等特殊字符时，被 DeepSeek/GPT-5.5 等严格 API 拒绝的问题，暴露出框架在对外透传工具名时缺乏清洗机制。

---

## 5. Bug 与稳定性
当前版本的系统级稳定性面临一定挑战，特别是桌面端与前端性能：
- **🔴 严重 (P0)**：
  - **前端严重卡顿与 CPU 飙升**：[#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) 和 [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) 报告了 Windows 桌面版在执行任务、切换会话或流式长输出时，前端加载极度不流畅，甚至导致系统级鼠标卡死。
- **🟠 高危 (P1)**：
  - **Windows 路径超限 / 闪退**：[#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) 指出 Session 文件名重复拼接导致 Windows `MAX_PATH` 溢出。（*注：已有 Fix PR [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036)*）
  - **本地大模型无响应**：[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 报告配置本地 vLLM (千问3.6-27B) 时一直转圈无回复，疑似版本回归。
- **🟡 中等 (P2)**：
  - **桌面端功能受限**：[#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) 指出 Tauri 桌面版无法打开外部链接及下载文件；[#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042) 报告无法打开 C 盘以外的代码目录。（*注：已有 Fix PR [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051)*）
  - **频道通道异常**：[#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) 反映微信频道开启主动模式后会出现重复回复；[#5057](https://github.com/agentscope-ai/QwenPaw/issues/5057) 报告钉钉 AI Card 在 Agent 输出为空时仍发送空卡片。

---

## 6. 功能请求与路线图信号
结合近期 Issue 反馈与 PR 进展，以下几个重要特性极有可能在近期落地：
- **开放沙箱隔离执行**：[#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951) 建议引入 OpenSandbox。当日即迎来了对应的实现 PR [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043)，通过 MCP 协议隔离不信任代码，预计很快合入主线。
- **技能自进化与后台创建**：结合用户对“学习循环”的诉求 [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017)，PR [#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) 正在增强 `make-skill` 流程，支持通过后台子 Agent 自动创建和进化技能。
- **视觉模型降级兜底**：[#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 提出了 `visual_model` 概念，允许在不支持多模态的主模型外挂独立的视觉模型作为“中转站”，这是一个高度符合用户直觉的架构增强方案。
- **CloudPaw 跨端互操作**：PR [#5033](https://github.com/agentscope-ai/QwenPaw/pull/5033) 正在实现从 AgentHub 导入 Agent 并增强 A2A (Agent-to-Agent) 通信能力。

---

## 7. 用户反馈摘要
通过对近期评论的提炼，发现用户对 CoPaw 的**本地化体验和开箱即用**给予了高度评价，但在深度使用中存在以下核心痛点：
1. **桌面端/前端性能瓶颈**：用户对 Electron/Tauri 在高频流式输出和复杂会话切换时的表现非常不满，认为内存和 CPU 占用不合理。
2. **MCP 工具的严格校验**：很多进阶用户在使用特殊 MCP 服务（如 PAT 批量授权）时，频繁触发 API 400 报错，希望框架端能主动“包装/清洗”工具名，而不是直接暴露给底层大模型。
3. **会话与记忆管理割裂**：用户认为目前的会话管理入口太深（[#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971)），且记忆系统缺乏自进化和分层逻辑（[#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994)），难以应对复杂的长期任务。

---

## 8. 待处理积压
以下重要 PR 和 Issue 仍处于 Open 状态，需要维护团队投入精力进行 Review 或推进：
- **[PR] 桌面端自动更新功能**：[#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 已开启近半个月，亟待 Review 合并，这对提升桌面端用户体验至关重要。
- **[Issue] GPT-5.x 兼容性与硬编码列表**：[#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) 暴露了 Provider 硬编码模型列表导致无法动态适配 OpenAI 最新模型的问题，长期未彻底解决。
- **[Issue] 缺乏可观测性支持**：[#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) 用户呼吁集成 Langfuse 或 OpenTelemetry，以追踪 Token 消耗和链路延迟，这是向企业级应用迈进的重要缺失环节。
- **[PR] 核心模块单测补齐 (Phase 5)**：[#4973](https://github.com/agentscope-ai/QwenPaw/pull/4973) 增加了 129 个单测用例，属于提升底层防线的关键 PR，需优先排期合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# 📊 ZeroClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了极高的社区活跃度，共产生 50 条 Issue 更新（49 条新开或活跃）和 50 条 PR 更新（49 条待合并），但仅关闭/合并了 1 个 Issue 和 1 个 PR。整体呈现出“社区输入爆炸式增长，但核心合流速度放缓”的剪刀差状态。讨论焦点高度集中在多渠道（Telegram/WhatsApp/WeChat）集成、内存管理优化、以及安全权限架构的重构上。当前项目暂无新版本发布，主分支处于大量特性并存、等待整合的阶段。

## 2. 版本发布
*今日无新版本发布。*

---

## 3. 项目进展
今日项目整体的代码合并吞吐量极低，仅关闭/合并了极个别 PR（大部分 PR 仍处于 `OPEN` 或 `needs-author-action` 状态）。虽然合并进展缓慢，但开发者提交了大量重量级的基础架构重构和功能增强 PR，为后续版本打下基础：

*   **Agent 核心引擎统一架构设计 (PR [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415))**：提出了统一当前存在于代码库中的三个独立 Agent turn 循环引擎的 RFC，旨在消除架构技术债。
*   **多渠道路由与 Webhook 增强 (PR [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367))**：实现了基于通道别名的入站路由，修复了多实例配置下 Webhook 仅能投递到第一个实例的严重问题。
*   **企业级集成通道扩展 (PRs [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265), [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270))**：批量增加了 5 种短信渠道和 4 种社交通道（Mastodon, Rocket.Chat 等）。
*   **Web 管理面板大更新 (PR [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229))**：增加了 MCP、Skills、Plugins 等仪表盘管理标签页，进一步降低用户的配置门槛。

---

## 4. 社区热点
今日讨论最热烈、交互最多的问题集中在 **工具调用能力缺失** 和 **Provider 架构不统一** 上：

*   🏆 **[Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) (评论: 12)**：用户反馈 ZeroClaw 不知道自己具备 Cron 调度能力。这是一个典型的“系统 Prompt 未正确注入工具上下文”问题，目前被标记为 `status:blocked` 且需要用户提供复现环境。
*   🔥 **[Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (评论: 10)**：呼吁重构 Provider 架构和 Reqwest 客户端管理。当前各模型提供商的请求构建逻辑碎片化严重，代码重复率高。
*   💬 **[Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) (评论: 7)**：Discord 机器人的频道隔离功能请求，希望像 Matrix 一样支持 `allowed_channels` 配置，反映出企业/社群用户对多租户隔离的强烈需求。

---

## 5. Bug 与稳定性
今日报告了大量阻断工作流（S1）和导致系统降级（S2）的缺陷，以下为核心汇总（按严重程度排序）：

### 🔴 P1/S1 阻断性 Bug
*   **消息丢失严重 Bug ([Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034))**：在单轮和多轮对话中，兼容性 Provider（如 OpenAI 接口）会丢失 `user message`。*（状态：已接受，暂无关联 Fix PR）*
*   **Telegram 工具调用失效 ([Issue #6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646))**：v0.7.5 中 Telegram 频道无法触发 `web_search_tool` 等工具。*（状态：已接受，**[Fix PR #7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) 已提交**）*
*   **Cron 任务重入风暴 ([Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037))**：如果任务执行时间超过调度间隔，Cron 会在短时间内重复拉起数十个相同任务。*（状态：进行中）*
*   **v0.8.0-beta-1 Dashboard 崩溃 ([Issue #6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862))**：SPA 路由回退将 `index.html` 错误地返回给未实现的 `/api/*` 路由，导致前端 `JSON.parse` 崩溃。

### 🟡 P2/S2 稳定性降级
*   **内存挤占问题 ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))**：Agent 赋予了 Memory（记忆）过高的权重，导致忽略了用户的实时 Prompt。
*   **Reasoning Tokens 字段解析错误 ([Issue #6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584))**：OpenAI-Compatible 提供者忽略了标准的 `reasoning` 字段，仅读取 `reasoning_content`。
*   **微信渠道流式响应失败 ([Issue 未见, 直接提 PR]**：*（关联 **[Fix PR #7437](https://github.com/zeroclaw-labs/zeroclaw/pull/7437) 已提交**）* 修复 WeChat channel 在面对 SSE 流式响应时的 JSON 解析报错。

---

## 6. 功能请求与路线图信号
从近期的 Feature Request 和活跃 PR 中，可以观察到 ZeroClaw 正在向**“企业级安全与细粒度管控”**和**“全面多端融合”**两条主线演进：

1.  **细粒度安全与沙箱控制**：
    *   针对子进程的内存限制（[Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)），防止单次工具调用 OOM 整个容器。
    *   针对单一 Skill 的独立权限授权（[Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)），打破现有的全局脚本执行权限造成的信任链风险。
2.  **强化的可观测性与成本核算**：
    *   社区正在推动 OTel 链路追踪的标准化 RFC（[Issue #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)）以及深度整合缓存 Tokens 的成本记账（[Issue #7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248)）。
3.  **Web 端管控全面平替 CLI**：
    *   随着大量 Web 端管理 PR（如 [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)）的推进，ZeroClaw 正从极客向的 CLI 工具转型为开箱即用的 Web 平台。

---

## 7. 用户反馈摘要
通过对 Issue 提炼，当前用户的真实痛点主要集中在以下几点：
*   **模型兼容性适配坑多**：大量 S1 Bug 来源于接入自定义 OpenAI 兼容 API（如 LM Studio, vLLM, Qwen 等）。小参数量模型对 ZeroClaw 的复杂 Prompt 服从度不够，经常无法触发工具调用或输出畸形 JSON（催生了如 [PR #7244](https://github.com/zeroclaw-labs/zeroclaw/pull/7244) 的健壮性解析方案）。
*   **TUI (zerocode) 体验粗糙**：用户集中反馈 TUI 客户端存在主题冲突、macOS 快捷键冲突（Cmd-C 变成退出）、以及错误状态不可见等问题。
*   **多实例/多隔离场景不适用**：用户越来越希望在不同的群组/频道部署不同的 Agent 行为，但当前的配置加载和路由解析逻辑依然偏向单实例模式。

---

## 8. 待处理积压
以下高影响力的重要功能/缺陷处于阻塞或长期未合入主干的积压状态，需核心团队重点关注：

1.  🚧 **[PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) / [PR #7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270) 社交与短信通道支持**：这些 XL 级别的 PR 打开了多渠道的新世界，但已停留数日且标记为 `needs-author-action`，需推进代码审查。
2.  🚧 **[Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) `.well-known` URI 技能安装支持**：这是对接 Agent 标准化生态的关键特性，已被接受但停滞。
3.  🚧 **[PR #7243](https://github.com/zeroclaw-labs/zeroclaw/pull/7243) Gateway 证书轮换撤销**：当前存在严重的安全隐患（Token 轮换不会使旧 Token 失效），该修复合并进度迟缓。

</details>