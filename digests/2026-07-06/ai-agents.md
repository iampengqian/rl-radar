# OpenClaw 生态日报 2026-07-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-05 22:17 UTC

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

# OpenClaw 项目动态日报
**日期**: 2026-07-06  
**数据来源**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

### 1. 今日速览
OpenClaw 在过去 24 小时内保持了极高的社区活跃度，共处理了 **500 条 Issue 更新**（453 条新开/活跃，47 条已关闭）以及 **500 条 PR 更新**（350 条待合并，150 条已合并/关闭）。项目今日发布了 **v2026.7.1-beta.2** 测试版本，最引人注目的是紧跟行业前沿，首次加入了对 OpenAI 最新 **GPT-5.6** 模型家族的支持。同时，社区围绕多渠道消息触达（iMessage、Telegram、飞书等）的稳定性优化，以及多 Agent 协作与跨渠道长期记忆功能展开了深度讨论，核心代码库正在经历高频的架构演进与性能打磨。

---

### 2. 版本发布
#### 🚀 [v2026.7.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.2)
本次测试版主要更新如下：
*   **支持 OpenAI GPT-5.6 模型**：OpenClaw 的模型目录、能力识别和运行时选择路径现已全面支持 GPT-5.6 模型家族 (#98333，感谢 @steipete-oai)。
*   **外部测试工具挂载 (External harness attachment)**：引入了全新的 `openclaw attach` 命令，允许针对现有的 Gateway 会话启动外部测试工具/控制架构，大幅增强了 Agent 的可测试性与调试灵活性。

---

### 3. 项目进展
今日共有 150 个 PR 被合并或关闭，项目在底层性能、UI 交互和多平台适配上取得重要进展：
*   **UI/UX 大幅重构**：提交了多个重磅 UI 改进 PR，如重设聊天输入框底栏（[PR #100445](https://github.com/openclaw/openclaw/pull/100445)）、新增聊天控制面板与模型切换器（[PR #100461](https://github.com/openclaw/openclaw/pull/100461)）以及侧边栏极简设计（[PR #100386](https://github.com/openclaw/openclaw/pull/100386)）。
*   **多渠道稳定性修复**：QQ Bot 渠道 WebSocket 重连导致消息丢失的问题得到修复（[PR #89038](https://github.com/openclaw/openclaw/pull/89038)）；Signal 渠道原生了支持了群组提及识别（[PR #96738](https://github.com/openclaw/openclaw/pull/96738)）。
*   **底层性能优化**：修复了引导程序上下文加载时同步文件 I/O 阻塞事件循环长达 14-22 秒导致丢消息的问题（[PR #89040](https://github.com/openclaw/openclaw/pull/89040)）。

---

### 4. 社区热点
今日讨论度最高的问题集中在 **Agent 记忆、多群组交互与渠道兼容性**：
*   **跨渠道/跨私密会话记忆能力**（[Issue #50090](https://github.com/openclaw/openclaw/issues/50090) | 👍 2 | 💬 15）：社区强烈呼吁建立类似 ClawHub 的社区化技能生态，并要求 Agent 能够跨不同的私聊渠道（如 Telegram DM、WebUI）共享核心记忆上下文。相关架构 PR（[PR #100140](https://github.com/openclaw/openclaw/pull/100140)）已提交。
*   **多 Agent 协作架构 RFC**（[Issue #35203](https://github.com/openclaw/openclaw/issues/35203) | 💬 10）：用户提出了一套包含能力画像、共享黑板、分层记忆边界和 Token 消耗治理的多智能体协作架构方案，直击当前多 Agent 信息孤岛和任务委派模糊的痛点。
*   **群聊消息中 @ 提及的精准识别**（[Issue #64810](https://github.com/openclaw/openclaw/issues/64810) | 💬 10）：Telegram 群组的系统心跳事件会意外打断 Agent 正在进行的回复动作，导致原回复被“吞掉”，用户期望对群组的提及触发机制进行分级优化。

---

### 5. Bug 与稳定性
今日报告了多个影响系统稳定性的严重 Bug（P0/P1）：
*   **🔴 [P1 严重内存泄漏 / OOM 崩溃]**（[Issue #55334](https://github.com/openclaw/openclaw/issues/55334), [Issue #54155](https://github.com/openclaw/openclaw/issues/54155)）：Gateway 进程在运行数天后，内存从389MB暴涨至14.7GB最终被 OOM Kill。原因是 `sessions.json` 无限增长且包含重复的 `skillsSnapshot` 数据。目前暂无针对性 Fix PR。
*   **🔴 [P0 回归问题：文档与发布版本不符]**（[Issue #48920](https://github.com/openclaw/openclaw/issues/48920)）：线上文档包含的 `IsolatedSessions` 特性在最新稳定版 2026.3.13 中并不存在，阻断了部分用户的 UX 预期。
*   **🟠 [P1 安全与上下文丢失]**（[Issue #96857](https://github.com/openclaw/openclaw/issues/96857)）：工具的正常文本输出在传递给 Agent 时，偶发性降级为 `(see attached image)` 占位符，导致 Agent 对常规指令“致盲”。
*   **🟠 [P1 孤儿锁死锁]**（[Issue #49603](https://github.com/openclaw/openclaw/issues/49603)）：Gateway 重启时无法清理 PID 相同的残留锁文件，导致进程陷入 Crash-loop。已有关联 PR 等待审核。

---

### 6. 功能请求与路线图信号
通过提炼 Issue 与活跃 PR，OpenClaw 正在明确以下几个方向的演进路线图：
*   **跨平台归属与记忆层构建**：正在重构底层的记忆模块。PR [feat: carry source actor context into recall](https://github.com/openclaw/openclaw/pull/96864) 和 [expose source actor attribution](https://github.com/openclaw/openclaw/pull/96863) 表明，官方正在为多人群聊场景下的精准记忆做底层铺垫，避免张冠李戴。
*   **Cron 任务健壮性提升**：社区反映了多个 Cron Agent 的问题（如伪造输出 [Issue #49876](https://github.com/openclaw/openclaw/issues/49876)，超时静默 [Issue #45494](https://github.com/openclaw/openclaw/issues/45494)）。伴随今日合并的修复手动运行计数器 Bug 的 PR（[PR #83933](https://github.com/openclaw/openclaw/pull/83933)），定时调度系统的可靠性将是下一阶段重点。
*   **本地权限与沙盒安全**：用户呼吁提供更精细的文件系统沙盒配置（[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)），并指出 iMessage 等渠道的附件读取权限限制过死（[Issue #47856](https://github.com/openclaw/openclaw/issues/47856)）。

---

### 7. 用户反馈摘要
从大量长篇 Issue 描述中，可以看出用户的实际部署痛点：
*   **消息丢失是最大痛点**：用户反馈在 Telegram、WhatsApp 断线重连期间（[Issue #50093](https://github.com/openclaw/openclaw/issues/50093)），或 Agent 未触发后台动作时（[Issue #58450](https://github.com/openclaw/openclaw/issues/58450)），极易发生“静默丢消息”。用户极度期望“宁可报错，不要静默吞掉消息”。
*   **中文/多语种适配存在短板**：飞书渠道问题频发，如文件名编码乱码（[Issue #48788](https://github.com/openclaw/openclaw/issues/48788)）、卡片 JSON 被当作纯文本发送（[Issue #53486](https://github.com/openclaw/openclaw/issues/53486)）、甚至因为 HTTP 代理配置导致 `tenant_access_token` 报错（[Issue #48949](https://github.com/openclaw/openclaw/issues/48949)）。
*   **“幻觉”影响信任度**：有用户反馈，在工具调用失败时，Agent 会自行“脑补”一个看似合理的回复发给用户（[Issue #49876](https://github.com/openclaw/openclaw/issues/49876)），这造成了严重的安全信任危机。

---

### 8. 待处理积压
以下高价值、高破坏性的 Issue 长期处于 `needs-maintainer-review` 或 `needs-product-decision` 状态，大量带有 `clawsweeper:no-new-fix-pr` 标签，建议维护者重点关注：
*   **【安全漏洞】GitHub Issue 提示词注入**：[Issue #45740](https://github.com/openclaw/openclaw/issues/45740)。`gh-issues` 技能未经过滤直接将 GitHub Issue 内容注入到子 Agent 的 Prompt 中，存在严重的提示词注入风险。
*   **【底层 Bug】上下文压缩链条断裂**：[Issue #48810](https://github.com/openclaw/openclaw/issues/48810)。历史记录压缩重试时会在 parentId 链中产生死胡同分支，破坏上下文重建。
*   **【低级错误】开发者硬编码绝对路径**：[Issue #51429](https://github.com/openclaw/openclaw/issues/51429)。某次发布版本中竟然包含了 `/Users/wangtao` 的硬编码路径，导致其他用户启动时直接报错，反映出 CI/CD 审查环节存在疏漏。

---

## 横向生态对比

以下是基于 2026 年 7 月 6 日各大开源 AI 智能体与个人助手项目动态生成的横向对比分析报告。

---

# 📊 个人 AI 助手与智能体开源生态横向分析报告 (2026-07-06)

### 1. 生态全景
2026 年中，个人 AI 助手与自主智能体开源生态正处于**从“单体对话核心”向“多模态、多智能体协同与跨平台常驻服务”演进的关键拐点**。各项目不再单纯追逐底层模型的支持，而是将重心大幅转移至**企业级安全防御、复杂上下文记忆治理以及长效自动化调度（Cron/心跳）**的工程落地。同时，为应对复杂的私有化部署诉求，**深度 IM 平台集成（飞书、Slack、WhatsApp 等）与网络代理/沙箱环境的精细化控制**已成为衡量项目成熟度的核心指标。

### 2. 各项目活跃度对比
*活跃度评判标准：结合 Issue/PR 更新量、版本发布状态及代码合并频率。*

| 项目名称 | Issue 动态 | PR 动态 | Release 情况 | 健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (极高) | 500 (极高) | 🚀 v2026.7.1-beta.2 | ⭐⭐⭐⭐⭐ 爆发期。紧跟前沿 (GPT-5.6)，高频迭代，但伴随严重的 OOM 内存泄漏积压。 |
| **ZeroClaw** | 23 (高) | 50 (高) | 无 (v0.8.3 周期) | ⭐⭐⭐⭐⭐ 重构期。聚焦核心瘦身与极端的安全边界加固，PR 合并率高。 |
| **NanoBot** | 1 (低) | 15 (中高) | 无 | ⭐⭐⭐⭐ 冲刺期。核心贡献者火力全开，聚焦企业级安全 (SSRF) 与 Windows 体验。 |
| **IronClaw** | 4 (中) | 33 (高) | 无 (准备中) | ⭐⭐⭐⭐ 架构期。深水区重构 (Slack/Reborn)，即将发布包含大量破坏性更新的主版本。 |
| **Hermes Agent**| 50 (高) | 50 (高) | 无 | ⭐⭐⭐⭐ 修复期。积极修补底层静默失败逻辑，推进 MoA（多智能体）编排落地。 |
| **CoPaw** | 13 (中) | 5 (低) | 无 (期盼 V2.0) | ⭐⭐⭐ 成长期。社区反馈活跃，但官方 Review 节奏滞后，存在一定瓶颈。 |
| **PicoClaw** | 2 (低) | 5 (低) | 无 | ⭐⭐⭐ 维护期。专注底层依赖清理与致命的“AI 失忆” Bug 修复。 |
| **NanoClaw** | 0 | 6 (低) | 无 | ⭐⭐⭐ 储备期。“强研发弱互动”，聚焦向导式模板构建与环境隔离。 |
| **LobsterAI** | 0 | 2 (极低) | 无 | ⭐⭐ 间歇期。活跃度平缓，历史安全校验 PR 面临荒废风险。 |
| *其余项目* | \- | \- | \- | *过去 24 小时内无显著动态。* |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与流量担当**，OpenClaw 展现出了其他项目难以企及的社区吞吐量（单日千级动态）。
* **优势**：对新技术的响应极速（首发 GPT-5.6 支持），在跨渠道触达（QQ, Telegram, WhatsApp 等）的广度上具有统治力。其“ClawHub”技能生态和跨渠道长期记忆的构想，引领了整个生态的产品形态。
* **技术路线差异**：相较于 IronClaw 的底层 Rust 重构和 ZeroClaw 的极简沙箱化，OpenClaw 更侧重于**功能前置与快速试错**。
* **隐患与挑战**：庞大的体量带来了显著的稳定性债务。例如极其严重的 `sessions.json` 内存泄漏 (OOM)、提示词注入漏洞以及硬编码绝对路径的低级失误，表明其 CI/CD 与代码审查机制在高速迭代中承压巨大。

### 4. 共同关注的技术方向
通过横向比对，以下四个技术领域成为各项目不约而同的演进重点：
1. **精细化记忆治理与防失忆机制** (OpenClaw, Hermes, PicoClaw, CoPaw)
   * **诉求**：告别粗暴的文本覆盖。多个项目正在重构底层记忆模块，力求实现跨群组/跨会话的精准溯源，避免“张冠李戴”，并彻底解决由于写入逻辑缺陷导致 AI “自我失忆”的致命问题。
2. **企业级安全与沙箱加固** (ZeroClaw, NanoBot, IronClaw, OpenClaw)
   * **诉求**：应对日益复杂的部署环境。重点防御方向包括：SSRF 漏洞修复、DNS 重绑定攻击防御、Webhook 未授权访问阻断、提示词注入拦截以及文件系统越权（路径穿越）防范。
3. **长效调度与自动化自治** (OpenClaw, NanoBot, Hermes, CoPaw)
   * **诉求**：智能体从“被动问答”转向“主动执行”。定时任务、心跳触发机制、后台 Cron 任务的高健壮性（避免幻觉、防止静默超时）成为竞相打磨的核心能力。
4. **IM 渠道的深度工程化适配** (OpenClaw, Hermes, CoPaw, LobsterAI)
   * **诉求**：针对飞书、Slack、WhatsApp、企业微信等平台的集成，从“能用”转向“好用”。重点解决群组 @ 误触发、消息静默丢失、卡片 JSON 降级、以及特殊网络环境下的自定义代理穿透。

### 5. 差异化定位分析
* **OpenClaw & Hermes Agent**：**全功能型服务助手**。侧重于多平台触达与多智能体架构（MoA）探索，致力于成为全能型的数字分身，适合需要全渠道部署的个人与团队。
* **ZeroClaw & NanoBot**：**安全与工程优先型基础设施**。不追求盲目扩张，而是极度强调配置规范性、沙箱隔离和越权拦截。适合对企业级安全合规要求极高的开发者或组织实施私有化部署。
* **IronClaw**：**高性能与底层重构驱动型**。专注于解决高并发状态持久化的延迟瓶颈（如 Postgres 存储优化），并推进 CI 与自动化测试的真实物理级覆盖。
* **NanoClaw & CoPaw**：**低门槛与工作流编排型**。侧重于通过向导式（Wizard）和模板化降低智能体的构建门槛，满足多租户/多用户团队的轻量化协作需求。

### 6. 社区热度与成熟度分层
* **第一梯队：爆发与引领期（OpenClaw, ZeroClaw, Hermes）**
  * 社区互动极其频繁，功能新增与架构演进并重。但也暴露出快速成长带来的“回归 Bug”与积压审查压力。
* **第二梯队：重构与质量巩固期**
  * 开发活跃度极高，但社区互动相对较弱。项目团队正在进行深度技术债务清理（如替换废弃加密库、彻底重写网关逻辑），处于下一个大版本发布前的“静默蓄力”阶段。
* **第三梯队：探索与长尾维护期**
  * 活跃度平平。主要依靠社区外部贡献者提交修复，官方维护周期较长（如 LobsterAI 长达 3 个月未合并的校验修复），项目处于维持运转或缓慢迭代状态。

### 7. 值得关注的趋势信号
对于 AI 智能体开发与技术决策者，今日的社区动态释放了以下三个强烈的行业信号：
1. **“静默成功”成为最大信任杀手**：多项目报告指出，智能体在工具调用失败或大数字据转换时，容易产生“伪装成功（Silent Failure）”甚至基于幻觉自行编造回复。**建立极其严苛的底层类型保全和异常抛出机制**，已成为挽回用户信任的当务之急。
2. **“多代理编排”与“轻量化委派”并行演进**：在追求复杂多智能体协同（MoA）的同时，社区开始呼唤免启动主循环的“轻量级文本处理工具”（如 Hermes 的 `delegate_completion`）。这表明开发者对 **Token 消耗的精细化治理**和边缘任务降速处理提出了更高要求。
3. **前端交互体验面临重构拐点**：不仅是后端工程，前端体验（如 ZeroClaw 将默认界面转为 Code 面板，CoPaw 解决移动端截断，Hermes 重构低对比度 UI）正在成为阻碍 AI 普及的瓶颈。**融合乐观 UI、移动端深度适配和状态可见性的前端重构**，将是下半年智能体项目提升商业价值的关键发力点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是 NanoBot 项目 2026 年 7 月 6 日的动态日报。本报告基于过去 24 小时的 GitHub 活动数据进行深度分析。

---

# 🤖 NanoBot 项目动态日报 (2026-07-06)

## 1. 今日速览
*   **整体活跃度极高，处于“高能迭代”状态。** 过去 24 小时内项目无新版本发布，但提交了 **15 个 PR 更新（13 个待合并）** 和 **1 个新开 Issue**。
*   **核心贡献者火力全开**，大量更新集中在子代理编排、安全防御增强、Windows 环境兼容性以及 MCP 协议的深度修复。
*   本日社区与开发动态揭示了 NanoBot 正在向**企业级安全**和**复杂多渠道部署**方向快速演进。

## 2. 版本发布
*   **无新版本发布** (今日 Releases: 0)。但从高优级别的 P0/P1 PR 堆积来看，项目可能正在为下一个重要大版本进行代码冻结前的冲刺准备。

## 3. 项目进展
今日共有 **2 个 PR 被关闭/合并**，大量高价值代码正处于主分支审查的最后阶段：
*   **MCP 网关稳定性修复**：[PR #4441](https://github.com/HKUDS/nanobot/pull/4441) 已关闭。此前 MCP 服务器会话终止并尝试重连时，会因 anyio 任务组冲突引发 `RuntimeError` 导致网关崩溃，该问题已得到根本性解决。
*   **OAuth 认证流程打通**：[PR #4699](https://github.com/HKUDS/nanobot/pull/4699) 已关闭。成功添加了 Anthropic OAuth 提供商，并解决了环境变量与文件存储双源头并发的登录/登出 UX 问题，大幅提升了 Claude Code 集成体验。

## 4. 社区热点
今日的动态主要由核心开发者驱动，主要焦点集中在**企业安全**与**跨平台体验**：
*   **企业级安全防护升级 (P0)**：由 hamb1y 提交的 [PR #4671](https://github.com/HKUDS/nanobot/pull/4671) 成为今日最受瞩目的安全更新。该修复针对 SSRF 漏洞，强制将 Web 请求的 DNS 解析固定在已验证的 IP 上，防止重定向过程中的 DNS 重绑定攻击，标志着 NanoBot 在安全沙箱方面迈出重要一步。
*   **Windows 环境的重大修复 (P1)**：[PR #4545](https://github.com/HKUDS/nanobot/pull/4545) 彻底修复了 Windows 用户的核心痛点——将单行命令的默认执行环境从 `cmd.exe` 切换为 `PowerShell`，解决了跨盘符 `cd` 失败和 POSIX 变量解析异常的问题。

## 5. Bug 与稳定性
根据 PR 标签和严重程度，今日处理的核心缺陷如下：
*   🔴 **[P0 安全] SSRF 验证绕过风险**：DNS 验证后未做 IP 固定。已被 [PR #4671](https://github.com/HKUDS/nanobot/pull/4671) 修复（待合并）。
*   🟠 **[P1 崩溃] MCP 工具调用导致主进程崩溃**：MCP SDK 的未处理异常会直接打断 Agent 循环。已被 [PR #4701](https://github.com/HKUDS/nanobot/pull/4701) 通过 `BaseException` 兜底捕获修复（待合并）。
*   🟠 **[P1 崩溃] LLM API 名称超长报错**：当 MCP 衍生的工具名称超长时，会导致模型 API 抛出 Invalid 错误。已被 [PR #4700](https://github.com/HKUDS/nanobot/pull/4700) 添加长度限制修复（待合并）。
*   🟡 **[P2 UI/UX] 移动端 WebUI 渲染错位**：在移动端窄屏幕下，WebUI 的对话视图和底部的超宽溢出导致内容被截断。已被 [PR #4694](https://github.com/HKUDS/nanobot/pull/4694) 修复（待合并）。

## 6. 功能请求与路线图信号
从近期的 PR 走向来看，NanoBot 的下一阶段路线图信号非常明确：
*   **网络请求与代理灵活性增强**：[Issue #4702](https://github.com/HKUDS/nanobot/issues/4702) 用户请求支持 Telegram 频道的自定义 API Base URL 和请求头，以应对复杂的网络穿透环境。这反映出用户在私有化部署和特殊网络环境下的强诉求。
*   **子代理细粒度调度**：开发者 yu-xin-c 连续提交了 [PR #4623](https://github.com/HKUDS/nanobot/pull/4623)（允许局部覆盖 Subagent 的生成模型）和 [PR #4624](https://github.com/HKUDS/nanobot/pull/4624)（添加聚合结果模式），表明项目正在构建更复杂的多模型混编编排能力。
*   **自动化触发与心跳机制**：[PR #4620](https://github.com/HKUDS/nanobot/pull/4620) 引入了 `heartbeat trigger` 命令，通过 LLM 决策实现定时自动化任务，这是向“自主型智能体”迈进的关键特性。

## 7. 用户反馈摘要
从 Issue 和 PR 的上下文中，可以提取出当前真实用户的几个核心痛点：
*   **深度集成的挫败感**：Windows 用户在使用内置执行工具时，常因隐性调用 `cmd.exe` 遇到路径和变量解析失败，引发“为什么跨盘符失败”的困惑。
*   **第三方渠道网络受限**：在部分国家/地区或企业内网，直接调用 `api.telegram.org` 存在阻碍，用户极度渴望更底层的网络代理自定义能力，而不仅仅是全局代理。
*   **多工具管理时的健壮性**：重度 MCP 用户发现，当接入大量外部 MCP 服务器时，单个工具的报错或命名不规范很容易导致整个 Agent 系统假死或崩溃，对容错机制呼声较高。

## 8. 待处理积压
以下高价值 PR/Issue 已有数天未完全落地，建议维护团队优先排期：
*   ⏳ **[长期未合并] Web 搜索引擎扩充**：[PR #4406](https://github.com/HKUDS/nanobot/pull/4406)（创建于 6月18日），请求添加 Serper.dev (Google Search API) 作为网络搜索后端，已搁置近半个月。
*   ⏳ **[长期未合并] Linux bwrap 沙盒限制放宽**：[PR #4625](https://github.com/HKUDS/nanobot/pull/4625) 允许在 Linux 沙盒中额外绑定 `~/.cargo/bin` 等用户级工具目录，目前在等待合并，对开发者体验影响巨大。
*   💡 **提醒**：今日新开的 [Issue #4702](https://github.com/HKUDS/nanobot/issues/4702) 目前点赞和回复为 0，但触及了渠道网络配置的痛点，建议社区经理尽早介入互动并确认实现排期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**报告日期**: 2026-07-06  
**数据来源**: [NousResearch/hermes-agent](https://github.com/Nousresearch/hermes-agent)

---

### 1. 今日速览
Hermes Agent 在过去 24 小时内维持了极高的开发与社区热度，共处理了 **50 条 Issue 更新（32 起新/活跃，18 个关闭）** 和 **50 条 PR 更新（32 个待合并，18 个已合并）**。从提交活跃度来看，核心团队（尤其是 `teknium1`）正在进行高强度的代码重构与积压修复，集中处理了网关 Webhook 的安全隐患以及工具链中“静默失败”的致命逻辑漏洞。此外，社区对 UI 界面、多平台适配（飞书、WhatsApp、Mattermost）以及底层的多智能体架构（MoA）表现出了强烈的定制化需求。

### 2. 版本发布
* **无新版本发布** (过去 24 小时内未推出新的官方 Release)。当前主分支正处于高频率合入修复 PR 的阶段，预计团队正在为下一个大版本（或 Beta 版）做代码冻结和稳定性收尾。

### 3. 项目进展
今日共有 18 个 PR 被成功合并/关闭，项目在**安全性加固**和**底层容错**方面迈出了一大步：

* **安全边界大扫除**: 合并了多个针对 Webhook 和 aiohttp 监听器的请求体大小限制修复（[PR #59180](https://github.com/NousResearch/hermes-agent/pull/59180)），彻底封堵了无 `Content-Length` 的分块请求绕过 `max_body_bytes` 的漏洞（关联 Issue [#12543](https://github.com/NousResearch/hermes-agent/issues/12543)）。
* **Mattermost 移动端适配**: 官方妥协并合并了针对移动端斜杠命令的修复（[PR #59127](https://github.com/NousResearch/hermes-agent/pull/59127)），通过自动规范化前置空格，解决了移动端无法触发命令的痛点（关联 Issue [#25184](https://github.com/NousResearch/hermes-agent/issues/25184)）。
* **工具集逻辑修复**: 修复了禁用复合工具集（如 `coding`）会错误清空显式启用的基础工具（如 `terminal`/`file`）导致模型失去所有工具权限的严重 Bug（[PR #58800](https://github.com/NousResearch/hermes-agent/pull/58800)）。
* **文件读取体验优化**: `read_file` 工具不再对超大文件进行硬报错，而是改为截断返回并附带 `next_offset`，大幅提升了模型处理长文件的连贯性（[PR #59129](https://github.com/NousResearch/hermes-agent/pull/59129)）。

### 4. 社区热点
今日讨论度最高的话题集中在**前端体验**与**架构演进**：

* **仪表盘 UI 主题优化** - [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) (👍46, 💬27)
  * **诉求分析**: 社区对当前 Dashboard 内置主题（如 Cyberpunk, Rose 等）怨声载道。用户反馈其使用的衬线字体、低对比度的配色方案严重影响可读性。这说明尽管 Hermes 后端能力强大，但前端 UX 设计亟需回归“易读、实用”的本质。
* **真正的多智能体架构 (MoA)** - [Issue #344](https://github.com/NousResearch/hermes-agent/issues/344) (💬26, 已关闭)
  * **诉求分析**: 这是一个由核心成员提出的纲领性 Issue，旨在将 Hermes 从“单核代理委派”升级为具备真正的多智能体编排、专业角色分工和容错工作流系统。该 Issue 被关闭预示着底层重构已初步落地或合并入主分支。
* **Mixture of Agents (MoA) 模型选择 Bug** - [Issue #59211](https://github.com/NousResearch/hermes-agent/issues/59211) 
  * **诉求分析**: 用户发现通过 `hermes moa configure` 配置 NVIDIA 模型时，可选项被异常截断。说明 MoA 架构在引入多模型组合时，其 UI 层的模型拉取逻辑与主链路存在不同步。

### 5. Bug 与稳定性
今日报告了多个严重级别（P2）的 Bug，部分已有对应的 Fix PR 正在审核：

* **[P2 / 致命逻辑] 工具整数字符转换导致数据失真** - [Issue #59186](https://github.com/NousResearch/hermes-agent/issues/59186) 
  * **状态**: 已有修复 [PR #59192](https://github.com/NousResearch/hermes-agent/pull/59192)。模型传入的大数字符串被先转为浮点再转整数，导致精度丢失（超过 IEEE-754 双精度范围）。此类“报告成功但篡改数据”的 Bug 极其危险，急需合并。
* **[P2 / 致命逻辑] 记忆组件部分替换导致数据全毁** - [Issue #59184](https://github.com/NousResearch/hermes-agent/issues/59184)
  * **状态**: 已有修复 [PR #59206](https://github.com/NousResearch/hermes-agent/pull/59206)。记忆工具在进行局部文本替换时，会错误地截断并丢弃匹配项之后的所有上下文。
* **[P2 / 多平台网关] WhatsApp LID 格式无法识别** - [Issue #59136](https://github.com/NousResearch/hermes-agent/issues/59136)
  * **状态**: 待修复。发送消息工具不支持 WhatsApp Web 返回的 `<digits>@lid` 原生 ID 格式，影响特定用户的触达。
* **[P2 / 配置读取] 辅助任务环境变量不展开** - [Issue #58514](https://github.com/NousResearch/hermes-agent/issues/58514)
  * **状态**: 已关闭。`auxiliary.*` 块中的 `${VAR}` 无法像 `providers.*` 那样被解析，导致秘钥以明文直接透传。

### 6. 功能请求与路线图信号
结合 Issue 与 PR 趋势，以下方向大概率被纳入下一阶段路线图：

* **轻量级委派机制 (`delegate_completion`)**: 
  * 需求来源：[Issue #59070](https://github.com/NousResearch/hermes-agent/issues/59070)
  * 进展：已提交 [PR #59214](https://github.com/NousResearch/hermes-agent/pull/59214)。
  * **分析**: 用户需要一种“免启动 Agent Loop、无系统提示词”的纯文本处理工具（用于摘要、分类）。这反映出社区对降低 Token 消耗和提高响应速度的极致追求。
* **跨平台状态可见性增强**:
  * 进展：[PR #59086](https://github.com/NousResearch/hermes-agent/pull/59086)
  * **分析**: 桌面端将支持在主配置下直接查看其他 Profile 的 Telegram/微信等平台连接状态。多 Profile 聚合管理是桌面客户端演进的明确方向。
* **防注入的记忆上下文重构**:
  * 进展：[PR #59209](https://github.com/NousResearch/hermes-agent/pull/59209)
  * **分析**: 废弃 XML 标签，改用画框字符来包裹记忆上下文。因为 Claude/Gemini 等闭源模型对 XML 标签极度敏感，常常触发误报的安全拦截。这是一个非常务实的兼容性改进。

### 7. 用户反馈摘要
提炼近 24 小时的用户反馈，呈现出以下核心画像：

* **痛点 1：“静默成功”的隐患令人担忧**。多位高级用户（如 [Issue #59186](https://github.com/NousResearch/hermes-agent/issues/59186) 和 [#59188](https://github.com/NousResearch/hermes-agent/issues/59188) 的报告者）指出，Hermes 的文件编辑和工具调用机制存在“逻辑错误但返回 Success”的情况，这会导致 LLM 产生幻觉并污染工作区代码。用户强烈要求在 `_coerce_number` 和模糊替换等底层函数中增加严格的类型保全。
* **痛点 2：企业级平台集成存在水土不服**。飞书用户报告卡片表单组件被服务端降级 ([Issue #37201](https://github.com/NousResearch/hermes-agent/issues/37201))；Mattermost 移动端用户无法发送命令；企业微信 Docker 用户遇到权限导致配对静默失败 ([Issue #10270](https://github.com/NousResearch/hermes-agent/issues/10270))。对于将 Hermes 部署为内部助力的企业用户来说，多平台权限和 API 兼容性是最大的落地阻碍。
* **满意点**：Hermes 的 `auxiliary_client`（辅助客户端）解耦设计备受好评，社区非常认可这种将主模型推理与边缘小任务（如上下文压缩、语音 TTS）分离的架构思路。

### 8. 待处理积压
提醒维护团队关注以下长期悬而未决或亟待处理的重要积压：

* **[P3] Codex GPT-5.5 压缩超时** - [Issue #54915](https://github.com/NousResearch/hermes-agent/issues/54915): 在处理超大上下文压缩时，120s 的默认超时时间过短导致任务频繁失败，影响长对话体验，需调整超时阈值或改为异步任务。
* **[P3] Ollama 运行 Gemma 4 遗忘技能** - [Issue #15985](https://github.com/NousResearch/hermes-agent/issues/15985): 本地运行开源模型时，Agent 存在上下文滑动导致中途“失忆”不调用 Skills 的情况。建议加强本地模型对工具保持注意力的系统提示词强化。
* **[P3] Web UI 可访问性 (a11y)** - [Issue #36784](https://github.com/NousResearch/hermes-agent/issues/36784): 核心的聊天输入框至今未暴露给 macOS VoiceOver。这是影响视障开发者使用的硬性阻断 Bug，但一直处于 OPEN 状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-07-06 | **追踪仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 今日速览
过去 24 小时内，PicoClaw 项目共产生了 **7 次有效动态**（2 条 Issue 更新，5 条 PR 更新），整体开发节奏处于**活跃迭代**状态。今日无新版本发布，工作重心主要聚焦于**代码重构、依赖维护及安全/稳定性修复**。核心贡献者及社区成员（如 trufae, chengzhichao-xydt, ACMYuechen）正在积极推进代码瘦身与积压技术债的清理，其中针对“AI 自我失忆”的严重 Bug 已经收到核心修复 PR。

### 2. 版本发布
**本日无新版本发布（0 个 Release）。**

### 3. 项目进展
今日项目以代码审查和分支推进为主，共有 1 个 PR 被关闭（积压清理），4 个关键 PR 处于待合并状态：
*   **架构精简与重构**: 由 trufae 提交的 PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) 正在进行 DeltaChat 实现的大扫除（缩减了 320 行代码）。该 PR 移除了遗留特性、硬编码配置，并强制密钥必须存放于 jsonrpc 中，大幅提升了代码整洁度与安全性。
*   **安全与组件升级**: chengzhichao-xydt 提交了多个维护性 PR，包括将 goreleaser 的 Docker 基础镜像从 alpine:3.21 升级到 3.23（[PR #3192](https://github.com/sipeed/picoclaw/pull/3192)），以及清理 `.gitignore` 重复项（[PR #3191](https://github.com/sipeed/picoclaw/pull/3191)）。
*   **积压清理**: 因长期未更新，用于修复 LINE 频道 `resp.Body.Close()` 错误忽略的陈旧 PR [PR #3189](https://github.com/sipeed/picoclaw/pull/3189) 被自动/手动关闭。

### 4. 社区热点
今日社区关注度最高的是涉及**核心安全架构替换**与**AI 记忆机制**的讨论：
*   **安全基座替换呼声强烈**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 继续吸引讨论。由于现有的 `libolm` 已停止维护且存在安全隐患，社区强烈建议替换为官方推荐的 `vodozemac`。该 Issue 获得了 6 条深度讨论和 2 个点赞，属于高优先级需求。
*   **AI 失忆问题引发共鸣**：Issue [#3150](https://github.com/sipeed/picoclaw/issues/3150) 反映了 PicoClaw 在运行过程中“给自己整失忆了”（由于没有专用的记忆写入工具，导致覆盖了已有记忆）。该问题引发了 5 条讨论，反映出用户对 AI 长期记忆持久化机制的高频需求。

### 5. Bug 与稳定性
*   **[HIGH] AI 核心记忆被意外覆写** (关联 [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150))：PicoClaw 缺乏专用的 `memory-write` 工具，导致 AI 模型在使用通用 `write_file` 工具更新 `MEMORY.md` 时，被现有的防覆盖逻辑误导，执行了破坏性的覆写（直接清空历史记忆）。
    *   *状态*: **已有修复 PR**。由 ACMYuechen 提交了 [PR #3226](https://github.com/sipeed/picoclaw/pull/3226)，重构了 `write_file` 工具的提示词与覆盖守卫逻辑，目前等待合并。

### 6. 功能请求与路线图信号
*   **[加密协议迁移] 告别 libolm**：基于 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) 的高优先级标签，`libolm` 向 `vodozemac` 的迁移已成为必然路线。提案建议在编译时将 libolm 设为可选。预计这一改动将被纳入下一阶段的核心路线图。
*   **[底层频道重构] DeltaChat 现代化**：从 [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 可以看出，项目正在对各个通讯频道进行深度现代化改造，未来 DeltaChat 的配置方式将发生破坏性变更（移除密码配置，迁移至 jsonrpc 密钥管理）。

### 7. 用户反馈摘要
从今日的动态中，可以提炼出 PicoClaw 用户的几个核心痛点：
1.  **记忆机制的脆弱性**：用户依赖 `MEMORY.md` 维持 AI 的人格与上下文，但粗暴的文件写入逻辑使得 AI 极易“失忆”，这是目前影响个人助手体验的最大痛点。
2.  **对底层通讯协议安全性的担忧**：深度用户（开发者）对供应链安全和被弃用的依赖库非常敏感，迫切需要项目方跟进上游（如 Matrix/Rust 生态）的安全最佳实践。
3.  **频道集成的易用性**：DeltaChat 的硬编码配置和遗留特性降低了用户体验，期待更直观的邀请链接和配置管理方式。

### 8. 待处理积压
*   🔴 **[高优/待处理] [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)**: 标记为 `help wanted` 和 `priority: high` 的 `libolm` 替换 Issue 已存在近 1 个月，且关乎系统安全，需维护者尽快评估并入版本规划。
*   🟡 **[待合并] [PR #3226](https://github.com/sipeed/picoclaw/pull/3226) / [PR #3222](https://github.com/sipeed/picoclaw/pull/3222)**: 这两个 PR 分别解决了致命的 AI 失忆 Bug 和带来了大幅代码瘦身，建议维护者优先进行 Code Review 并予以合并，以提升主干分支的稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 NanoClaw 项目 2026-07-06 的动态日报。作为专注于个人 AI 助手与 AI 智能体编排的开源项目，今日 NanoClaw 展现出活跃的开发态势。

---

### 📊 NanoClaw 项目日报 (2026-07-06)

#### 1. 今日速览
今日 NanoClaw 项目整体呈现出“强研发推进、低社区互动”的特征。过去 24 小时内，项目没有发布新版本，也没有新的 Issue 产生，但**Pull Request 活跃度极高，共有 6 项关键更新**（3 项待合并，3 项已关闭/合并）。核心开发团队主要致力于完善智能体模板构建工作流、强化 Codex 供应商适配，以及修复消息分发逻辑中的重复推送 Bug。这表明项目目前正处于密集的新功能打磨与底层架构稳定阶段。

#### 2. 版本发布
**无**。
*(注：今日未发布任何新版本，预计团队正在为下一个包含 Agent Templates 和 Guardrails 的重大版本做代码储备。)*

#### 3. 项目进展
今日的代码合并与关闭动作主要集中在**扩展功能可用性**与**废弃旧架构**上，项目向前迈进了坚实的一步：

*   **完善 Codex 模板支持**：[PR #2908](https://github.com/nanocoai/nanoclaw/pull/2908) 已关闭。该 PR 使 `agent-templates` 功能能够在 Codex 供应商下实现端到端工作，增加了 persona prepend 并将 group skills 暴露在 `$HOME/.agents/skills` 目录下。
*   **废弃旧版配置机制**：[PR #2766](https://github.com/nanocoai/nanoclaw/pull/2766) 和 [PR #2726](https://github.com/nanocoai/nanoclaw/pull/2726) 均被关闭。涉及格式检查豁免与输入/输出护栏功能的早期实现，推测已被合并到更大的功能分支或被更新的架构所取代。
*   **推进全新环境变量管理**：[PR #2036](https://github.com/nanocoai/nanoclaw/pull/2036) 维护者 stumpjumper 刷新了此 PR，将其从旧的基于文件 (`container.json`) 的配置迁移到了**基于数据库原生（DB-native）的管理方式**，大幅提升了多容器环境下的配置可靠性。

#### 4. 社区热点
今日虽然无新增 Issue，但基于开发者投递的 PR 内容，可以看出当前社区（及贡献者）的核心诉求：

*   **降低智能体初始化门槛**：[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) 引入了“模板设置向导”。这反映出用户在创建第一个 Agent 时存在配置困难，社区急需通过标准化的 Wizard 流程（如“全新构建”或“模板克隆”）来降低上手难度。
*   **多供应商兼容性**：随着 Codex 等不同底层模型的接入，如何保证 Skills 和 Personas 在不同 LLM Provider 下都能被正确发现和加载，是近期开发者持续关注的热点。

#### 5. Bug 与稳定性
*   🔴 **高优 / 消息重复分发 Bug**：[PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956) 报告并修复了一个关键的交互问题。
    *   **问题**：当 Agent 使用 `send_message` MCP 工具发送消息，并且在其最终输出中重复了相同的文本时，系统会存在去重检查盲区，导致用户收到双重消息推送。
    *   **状态**：已由开发者 stumpjumper 提交 Fix PR，目前处于 `[OPEN]` 待合并状态，需重点关注其 CI 测试结果。

#### 6. 功能请求与路线图信号
通过对近期 PR 的分析，可以明确 NanoClaw 下一阶段的路线图信号：

*   **信号 1：模板化与标准化部署（极度显著）**
    *   关联 PR：[#2909](https://github.com/nanocoai/nanoclaw/pull/2909) (Setup Wizard), [#2908](https://github.com/nanocoai/nanoclaw/pull/2908) (Template Agents)
    *   **预测**：下一版本极有可能主打“One-click Agent Stamping / Templates”，让用户能通过命令行交互快速实例化预置的 AI 助手。
*   **信号 2：安全与防护**
    *   虽然早期的 [PR #2726](https://github.com/nanocoai/nanoclaw/pull/2726) 被关闭，但其提及的 `/add-guardrails`（基于正则/关键字的 Prompt 注入拦截、凭据泄漏阻断）绝对是企业级/个人 AI 助手不可或缺的基石，这部分能力预计会在核心主干中重新设计。
*   **信号 3：精细化的群组环境隔离**
    *   [PR #2036](https://github.com/nanocoai/nanoclaw/pull/2036) 表明项目正通过数据库管理（`ncl groups config set-env`）实现每个 Agent Group 独立的环境变量，为复杂的自动化工作流提供安全隔离。

#### 7. 用户反馈摘要
*(由于今日无新增 Issue 评论，以下反馈提取自 PR 提交者的上下文背景)*
*   **痛点**：Agent 输出内容的不可控性（如 [PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956) 提到的重复发消息），这会严重影响个人使用 AI 助手时的对话体验。
*   **使用场景**：高级用户（如 stumpjumper）正在尝试将不同组的 Agent 运行在隔离的容器并配置独立的环境变量（API Keys 等），这表明 NanoClaw 正在被应用于比单一本地聊天更复杂的**多 Agent 编排自动化场景**。

#### 8. 待处理积压
*   ⏳ **[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) - Setup Wizard 流程**：依赖前序的 Template Loader（已合并），这是面向用户的最后一公里，需加速 Review 进度。
*   ⏳ **[PR #2036](https://github.com/nanocoai/nanoclaw/pull/2036) - 数据库级环境变量配置**：此 PR 从 4 月份拖延至今，虽然开发者已经将其重构适配了最新的 DB 迁移架构（Migration 014），但长期处于未合并状态可能阻碍其他依赖容器隔离的功能开发，强烈建议 Maintainer 优先排期审查。

---
*数据来源: GitHub NanoClaw Repository | 分析师: AI Agent Ecosystem Analyst*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-06 | **分析数据源**: GitHub 开源数据分析引擎

---

### 1. 今日速览
IronClaw 项目在过去 24 小时内保持了**极高的开发活跃度与架构演进速度**，全天共处理 33 个 PR（其中 6 个已合并/关闭）和 4 个 Issue 更新。当前开发重心高度聚焦于 **"Reborn" 架构重构**（尤其是 Slack 集成模块的彻底改造）以及底层运行时的稳定性强化。社区核心维护者（如 ilblackdragon, henrypark133, BenKurrek）与外部贡献者协同紧密，多个突破性功能及重要的生产环境修复正在加速并入主分支。

### 2. 版本发布
**今日无新版 Release 发布。**
*(注：自动化发布 PR #5598 仍在 Open 状态，预计下一个大版本将包含多项 API Breaking Changes，请开发者密切关注。)*

### 3. 项目进展
今日共有 6 个 PR 被合并或关闭，标志着几个重要功能的阶段性落地：

*   **Slack 接入逻辑的彻底现代化 (PR #5626, #5604, #4002)**：核心团队正式关闭了重构 Slack 配置栈的相关 PR。此前通过硬编码 Rust 策略字面量管理 Slack 路由的方式，已被**基于扩展清单的数据驱动**所取代；同时，旧版的 Slack pairing-code（配对码）流程被完全移除，全面切换至**基于个人 OAuth 的身份验证流**。这大幅提升了多渠道接入的安全性与可维护性。
*   **CI 性能与基准测试优化 (PR #5648)**：针对 Reborn 架构下的 PR CI 流水线进行了深度优化，通过移除重复单元和改善缓存确定性，在不削弱测试覆盖率的前提下提升了编译与执行效率。
*   **底层依赖大版本升级**：Bot 自动发起的 GitHub Actions 依赖大范围升级（PR #4002）已确认关闭/合并，CI 环境的 `actions/checkout` 等核心组件已跃升至 v7。

### 4. 社区热点
尽管评论数据缺失，但从 PR 规模、提交者权重及标签可以推断以下几项为今日热点：

*   **[PR #5662] 彻底消除静默错误丢弃 (90处重构)**：由核心成员 ilblackdragon 发起的超大型重构，将代码库中 90 处 `let _ = <fallible>`（静默丢弃可能的错误结果）替换为显式的错误处理。这表明项目正在向**企业级的高可观测性标准**迈进。
*   **[PR #5667] 托管版 Postgres 延迟极限优化**：外部贡献者 serrrfirat 提交的 XL 级别优化，直击核心痛点——将热路径上的 blob 风格持久化替换为基于追加/行级别的存储，极大优化了 AI Agent 的回合状态延迟。
*   **[PR #5598] 触目惊心的依赖与破坏性变更预告**：自动化 CI 提交的发布 PR 显示，`ironclaw` 主包将从 0.24.0 跨越式跃升至 0.29.1，同时 `common` 与 `skills` 包将引入 API 破坏性变更，这是下一个里程碑的前兆。

### 5. Bug 与稳定性
今日报告了几个关键的逻辑缺陷，且团队展示了极高的“Bug 到修复”响应速度：

*   **[严重 - 已有 Fix PR] 桥接元工具失效漏洞 (Issue #5647 / PR #5659)**
    *   **问题**：当工具目录超过 32 个触发桥接时，安全过滤器误将合成的 `ironclaw.*` 元工具（搜索/描述/调用）从白名单中剥离，导致 Agent 超出阈值后直接失去工具调用能力。
    *   **状态**：维护者 henrypark133 在数小时内提交了 PR #5659，修复了生产环境行为，并补充了回归与信任边界测试。
*   **[中等] LLM Provider 参数解析错误 (PR #5665)**
    *   **问题**：当 OpenRouter 等 OpenAI 兼容提供商泄漏模型原生的 XML 工具调用格式时，会导致 arguments 字符串被截断（如带有 `</tool▁call>` 尾巴）。
    *   **状态**：PR #5665 已提交，专门修复提供商损坏的 JSON 参数解析。
*   **[报警] Nightly E2E 测试失败 (Issue #4108)**
    *   **状态**：自动化机器人报告端到端测试在 07-05 凌晨失败，需引起核心团队注意是否与近期的架构大调整有关。

### 6. 功能请求与路线图信号
从今日的动作中可以清晰提取出 IronClaw 下一步的演进路线图：

*   **信号一：Agent 自治能力增强**。[PR #5666] 引入了“重复动作打破机制”。当 Agent 在 V1 循环中陷入相同的工具调用死循环时，系统将注入一条纠正性提示，而非直接终止，这将显著提升复杂任务的完成率。
*   **信号二：上下文窗口精细化管理**。[PR #5663] 对 Prompt 组装进行了加固，加入了压缩截断机制和可选的指令预算，移除了可能导致单回合 Token 成本失控的遥测数据。
*   **信号三：测试体系向“真实持久化”迈进**。[PR #5660, #5661] 团队正在清理“Mock 测试”的盲区，将文件系统状态存储、并发竞争（CAS）甚至 PDF 附件提取全部接入真实的物理存储进行高强度的耐用性测试。

### 7. 用户反馈摘要
综合 Issues 与 PR 描述，当前用户/开发者的反馈集中在以下痛点：
*   **多模型兼容痛点**：开发者深受不同 LLM 提供商（如 DeepSeek、OpenRouter）在 API 转换时的“输入污染”之苦，急需框架层做强力的容错兜底（见 PR #5665）。
*   **大型部署的性能焦虑**：对于状态持久化的延迟存在痛点，特别是使用 Postgres 作为后端时，对去掉粗粒度的 Blob 存储有强烈诉求（见 PR #5667）。
*   **安全与能力的平衡难点**：用户希望对 AI 的能力进行细粒度限制，但往往因为过滤器设计不够灵活，导致 Agent 在面对复杂工具集时失去基础能力（见 Issue #5647）。

### 8. 待处理积压
庞大的重构带来了较高的积压压力，提醒维护者关注以下领域：
*   **依赖积压升级**：目前有多个由 Dependabot 发起的批量依赖更新 处于待合并状态，包括 Tokio 生态等重量级组件。建议尽快排期处理以防后续冲突。
*   **自动化发布受阻塞**：包含大量破坏性变更的 Release PR #5598 处于滞留状态，一旦确认，将会是宣告 Reborn 架构阶段性胜利的重要版本。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报
**报告日期**: 2026-07-06  
**数据来源**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览
在过去 24 小时内，LobsterAI 项目的整体代码与社区活跃度处于相对平缓的状态。今日无新增 Issues，也没有新版本发布。项目动态主要集中于旧有 Pull Requests 的状态梳理，共有 2 条 PR 发生了状态变更。整体来看，项目当前正处于功能开发或版本发布的间歇期，核心维护团队可能正在集中精力进行代码审查或架构调整，未在公开社区产生大量讨论。

### 2. 版本发布
*无* — 过去 24 小时内无新版本发布。

### 3. 项目进展
今日项目的推进主要集中在前端交互体验的重构与历史遗留代码的维护上：
*   **UI/UX 重构被回退/关闭**：PR [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 于昨日创建并于今日关闭。该 PR 旨在为定时任务列表引入全新的卡片式重构设计（包含状态标签、开关、搜索及乐观 UI 反馈机制，涉及 renderer、openclaw 等核心模块）。尽管该功能设想较为完善，但被迅速关闭，推测可能是由于设计方案需重新调整，或在代码审查（Code Review）阶段发现了阻断性问题。
*   **安全与稳定性修复取得进展**：沉寂已久的历史 PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) 昨日发生状态更新。该 PR 致力于修复 IM 模块中 POPO 连接测试的严重校验逻辑漏洞，目前系统标记为 `OPEN` 且处于 `stale` 状态。这表明自动化机器人正在重新唤起维护者对该历史修复的注意。

### 4. 社区热点
由于过去 24 小时内无任何新增评论（0 条活跃 Issues）及点赞互动，社区未呈现明显热点。
*   **潜在焦点**：从唯一有动态的 PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) 可以看出，企业级用户对 IM（如网易 POPO）集成的**真实性与安全性**有较高诉求，不再满足于“仅通过非空校验”的演示性功能，而是要求与真实 API 进行深度打通验证。

### 5. Bug 与稳定性
今日无新增 Bug 报告，但系统显示了一个长期未合并的关键修复 PR：
*   **🟡 中危级别 (凭据绕过/假阳性)**：[PR #1349](https://github.com/netease-youdao/LobsterAI/pull/1349) 揭示了一个历史 Bug —— POPO 连接测试无论填写什么凭据（即使 appKey 和 appSecret 完全错误），都会显示“验证通过”。
    *   *影响*：可能导致用户在配置错误的凭据下直接上线，导致实际运行时 IM 消息推送全部静默失败。
    *   *状态*：已有对应的 Fix PR（新增了真实 API 调用验证），但该 PR 自 4 月初提交以来一直处于积压和 Stale 状态，亟待维护者合并。

### 6. 功能请求与路线图信号
*   **前端架构现代化与体验升级**：从已关闭的 [PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 可以清晰地嗅探到项目下一阶段的路线图信号——**任务调度模块的深度优化**。引入状态标签、乐观 UI (Optimistic UI) 和前端搜索表明，LobsterAI 正在努力向低延迟、高交互的成熟 SaaS 客户端体验靠拢。虽然该 PR 被关闭，但相关需求极大概率会在调整后以新的 PR 形式重新提交。

### 7. 用户反馈摘要
*由于今日缺乏直接的 Issues 互动，以下反馈摘要提炼自今日活跃 PR 的历史上下文：*
*   **痛点：配置反馈机制不可靠**：用户在实际将 LobsterAI 接入内部 IM（网易 POPO）时，发现系统的“连接成功”是一种假象，这严重影响了运维人员对系统状态的可控性。
*   **诉求：精细化的状态展示**：开发者（如 fisherdaddy）在推动定时任务模块的 UI 改版，侧面反映出当前默认的列表式 UI 在任务数量增多时，缺乏直观的状态层级和快速检索能力。

### 8. 待处理积压
提醒核心维护团队关注以下长期未得到有效闭环的项目：
1.  **🔴 [重要] PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) (Fix IM POPO connectivity)**：距今已提交 3 个月，提供了一个切实可行的 API 校验修复，却一直处于被遗忘边缘。长期不合并不仅影响软件质量，也容易挫伤外部/内部贡献者（gongzhi-netease）的积极性。建议尽快进行最终 Review 并合并入主分支。 
2.  **🟡 [跟进] 前端渲染层重构跟进**：[PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 的关闭原因需同步给相关团队，避免重复造轮子或设计思路跑偏。

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

以下是根据您提供的 GitHub 数据为您生成的 **CoPaw** (github.com/agentscope-ai/CoPaw / QwenPaw) 项目动态日报。

---

# 📊 CoPaw (QwenPaw) 项目动态日报
**报告日期**: 2026-07-06  
**数据统计周期**: 过去 24 小时

## 1. 今日速览
过去 24 小时内，CoPaw 项目社区保持了极高的活跃度，共收到 **13 条新增或活跃的 Issue**（其中 0 条被关闭）以及 **5 条待处理的 Pull Request**（0 条被合并）。虽然今日官方代码库没有进行合并操作或发布新版本，但社区贡献者已经针对新报告的前后端缺陷提交了对应的修复 PR。目前社区的核心关注点集中在 V2.0 正式版的期待，以及当前版本（v1.1.12.post2）在前端 UI 适配、第三方模型（如 Gemini）兼容性以及 Coding 模式实用度上的改进。

## 2. 版本发布
**今日无新版本发布 (0 个)。**
*(注：目前社区反馈的 Bug 多集中在 v1.1.12.post2 版本，用户对 V2.0 抱有极高期望。)*

## 3. 项目进展
今日主仓库虽然未合并任何代码，但社区开发者提交了 5 个高质量的 PR，为下一版本的迭代积蓄了力量：
*   **内存与状态管理优化**：PR [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777) 引入了基于会话（session-based）的自动记忆轮次状态管理，重构了中间件，这有望提升多轮对话中的记忆连贯性。
*   **多缺陷修复提交**：PR [#5786](https://github.com/agentscope-ai/QwenPaw/pull/5786) 集中修复了 3 个前端和配置问题，包括同名模型跨 provider 时的参数显示错误（#5784）。
*   **底层 Agent 逻辑修复**：两位首次贡献者 提交了 PR [#5792](https://github.com/agentscope-ai/QwenPaw/pull/5792) 和 PR [#5791](https://github.com/agentscope-ai/QwenPaw/pull/5791)，分别修复了工具消息清洗时丢失有效配对的问题，以及前端大数字格式化进位的显示缺陷。
*   **定时任务时区修复**：PR [#5783](https://github.com/agentscope-ai/QwenPaw/pull/5783) 修复了定时任务 API 返回 UTC 时间而非配置时区时间的 Bug。

## 4. 社区热点
今日讨论最为热烈的话题主要集中在 IM 通道接入与 Coding 模式的使用体验上：
*   **多用户团队管理诉求强烈**：Issue [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) 提出了目前通过 IM（飞书/钉钉/Discord 等）接入时缺乏多账户和权限管理的痛点，引发了关于团队协作部署场景的讨论。
*   **飞书机器人响应中断**：Issue [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) 反映了飞书渠道“仅首条回复，后续不响应”的严重阻塞问题，影响到了真实生产环境的使用。
*   **V2.0 期待值拉满**：Issue [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770) 表达了社区对即将推出的 V2.0 正式版的强烈期待。

## 5. Bug 与稳定性
今日报告了多个影响稳定性和用户体验的 Bug，按严重程度排列如下：

🔴 **严重 - 功能阻断/静默失败**
1.  **上下文压缩崩溃**：Issue [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) - 结构化输出超过 JSON Schema 的 `maxLength: 200` 限制导致验证崩溃，压缩功能不可用。
2.  **Gemini Embedding 兼容性回归**：Issue [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782) - 通过 OpenAI 兼容端点使用 Google Gemini embedding 时，因 `index=None` 导致报错，且**静默回退至纯关键词搜索**，对 RAG 准确率造成毁灭性打击且用户无感知。
3.  **Google Gemini 渠道直接报错**：Issue [#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) - 调用 Gemini 格式端点时直接抛出 Python Traceback 错误。

🟡 **中等 - UI 交互与体验受损**
4.  **前端加载动画卡死**：Issue [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) - Agent 响应完毕后，Console 聊天界面的读取动画（Spinner）不消失。 *(已有相关 UI 修复 PR 待合并)*
5.  **移动端页面底部被截断**：Issue [#5787](https://github.com/agentscope-ai/QwenPaw/issues/5787) - 手机/平板端所有页面底部内容被截断，关键按钮不可见且无法点击。
6.  **Cron 时区错误**：Issue [#5779](https://github.com/agentscope-ai/QwenPaw/issues/5779) - 定时任务返回 UTC 时间。 **(已有修复 PR [#5783](https://github.com/agentscope-ai/QwenPaw/pull/5783))**

🟢 **轻微 - 边缘场景与特定需求**
7.  **离线环境 Code 模式不可用**：Issue [#5781](https://github.com/agentscope-ai/QwenPaw/issues/5781) - 离线状态下因无法下载前端资源导致文件无法预览。
8.  **隐藏文件选择限制**：Issue [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) - Coding 模式下无法选择以 `.` 开头的隐藏文件夹。
9.  **技能列表无法滚动加载**：Issue [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) - CSS 限制导致超过 20 个技能时无法触发懒加载。

## 6. 功能请求与路线图信号
综合今日的 Issue，下一版本（或 V2.0）急需纳入规划的功能路线图：
*   **企业级权限/多租户管理**：Issue [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) 暴露出目前单 Bot 账号模式的局限性。团队急需“添加成员”、“权限分级”功能，这是走向 B 端商业化的关键信号。
*   **离线化/私有化部署支持深化**：Issue [#5781](https://github.com/agentscope-ai/QwenPaw/issues/5781) 指出 Code 模式的在线依赖，说明项目需要进一步剥离前端静态资源的 CDN 依赖，以满足完全断网环境下的安全部署需求。

## 7. 用户反馈摘要
从 Issue 描述和评论中可以提炼出当前用户的真实使用画像：
*   **主要使用场景**：用户正积极尝试将 CoPaw 接入企业内部通讯工具（飞书、钉钉）作为团队 AI 助手，同时在本地/离线服务器上使用 Coding 模式进行代码辅助。
*   **核心痛点**：第三方大模型（特别是 Google Gemini 系列）的接入兼容性非常脆弱；移动端适配存在系统性缺陷，基本不可用；IM 通道（飞书）的会话保持存在严重 Bug。
*   **情绪反馈**：整体态度积极且包容。尽管遇到了不少 Bug，但用户依然在 Issue 中表达了“非常期待 V2.0 💪”的强烈意愿，说明项目核心价值深受认可，只是细节打磨急需跟上。

## 8. 待处理积压
今日所有更新均为新建或活跃讨论，**没有任何 Issue 或 PR 被关闭或合并**。这意味着大量的修复工作处于停滞等待 Review 的状态：
*   **Review 压力**：今天提交的 5 个 PR（特别是涉及核心 Memory 管理重构的 PR [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777)）需要维护团队尽快介入进行 Code Review 和合并。
*   **P0 级故障待解决**：Gemini 模型的报错（[#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774), [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782)）和飞书通道无响应（[#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)）严重打击核心功能，建议官方维护者优先排查并确认是否需要提交 Hotfix。

---
*分析师观点：CoPaw 社区目前呈现出“需求旺盛、贡献活跃，但官方维护节奏稍显滞后”的典型开源成长期特征。大量由社区驱动的修复 PR 正在堆积，官方团队的 Review 瓶颈将是影响下一阶段项目健康度的关键因素。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 2026-07-06 ZeroClaw 项目动态日报。作为专注于 AI 智能体与个人助手领域的开源项目，ZeroClaw 目前展现出极高的架构演进活跃度和强烈的工程严谨性，尤其是对安全底线的把控。

---

# 🐾 ZeroClaw 项目动态日报 (2026-07-06)

## 1. 今日速览
- **高度活跃的开发节奏**：过去 24 小时内，项目处理了 23 个 Issue（5 个已关闭）和高达 50 个 PR（7 个已合并/关闭），在无新版本发布的情况下，依然保持了极高的主干合并频率。
- **架构与底层重构进入深水区**：核心团队正全力推进 Goal 模式（#8681）、SOP 控制平面（#8288）以及配置 Schema V4 的破坏性切割（#8310），致力于打造更轻量、模块化的智能体核心。
- **安全与边界防御成为今日绝对主旋律**：今日涌现大量针对路径逃逸、未授权访问、环境变量劫持和空 Token 校验的安全加固 PR，反映出项目在面向多用户/多 Agent 部署时的严谨态度。

## 2. 版本发布
**本日无新版本发布。**
当前项目主干处于 v0.8.3 的开发周期内（由 Tracker [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) 追踪），主要精力集中在功能堆叠、安全审计与 v0.8.3 版本的前置依赖清理上。

## 3. 项目进展
今日代码合并节奏紧凑，项目在安全性、可观测性与架构解耦方面迈出坚实一步：
*   **可观测性落地**：关闭了关于 OTel LLM 和工具内容的运行时策略 RFC ([#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462))，为结构化链路追踪确立了标准。
*   **记忆与工作流优化**：关闭了关于“将关系型记忆转化为用户侧工作流”的提案 ([#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251))，并合并了有关限制 `SKILL.md` 反射上下文以防止 Prompt 溢出的功能 ([#7879](https://github.com/zeroclaw-labs/zeroclaw/issues/7879))。
*   **配置规范化**：合并了针对 LinkedIn 配置项的 Schema V4 迁移测试 ([PR #8743](https://github.com/zeroclaw-labs/zeroclaw/pull/8743))，为后续清理死配置铺平道路。

## 4. 社区热点
今日讨论最密集的议题集中在**架构边界划分**与**复杂业务路由**：
*   **[核心瘦身高优先级 RFC] (#6165)**：评论数 8。社区就“ZeroClaw 应当保留多精简的核心”达成共识，计划将长尾的集成功能迁移到 MCP servers、Skills 或外部插件中，避免核心代码库臃肿。
*   **[Goal 模式拆分追踪] (#8681)**：评论数 7。维护者正在协调将已经实现的庞大 `feat/goal-mode` 代码拆分为可 review 的独立 PR，表明该核心特性落地在即。
*   **[SOP 路由机制修正] (#8719)**：评论数 1（但标记为 high risk）。用户 `metalmon` 指出当前 SOP（标准作业程序）的 `when` 条件判定逻辑过于死板，强烈要求支持多阶段 SOP，这在复杂自动化场景中是刚需。

## 5. Bug 与稳定性
今日报告了多个影响工作流的 P1 级 Bug，部分已产生对应修复 PR：

*   **🚨 [S1 工作流阻断] `browser_open` 导致进程无限挂起** ([#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560))
    *   **现象**：在无头环境或浏览器启动失败时，子进程无限期等待，直接阻塞 Agent 运行。
*   **🚨 [S1 配置异常] 初始化模板破坏本地 Whisper** ([#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718))
    *   **现象**：`zeroclaw config init` 生成的默认配置被守护进程拒绝，导致语音转写功能静默失效。已标记为 `accepted`，亟待修复。
*   **⚠️ [S2 性能受损] Stdio MCP Server 变成僵尸进程** ([#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731))
    *   **现象**：基于 Stdio 的 MCP 工具执行完毕或超时后未被有效回收，长运行的 Daemon 会累积大量僵尸进程。
*   **⚠️ [S2 误报频发] 高熵检测器过度拦截合法文件** ([#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722))
    *   **现象**：安全沙箱的泄漏检测器将系统正常生成的长文件名误判为密钥并替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，导致工具调用失败。

*(注：今日提交了大量安全相关的防御性修复 PR，详见第 6 节)*

## 6. 功能请求与路线图信号
通过今日的 PR 动向，可以看出 ZeroClaw 正在向**“更易用的 UI + 更强的网络兼容性 + 更安全的执行沙箱”**演进：

*   **🛡️ 安全防御大加固（极大概率进入下个版本）**：
    *   [PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)：修复 `/model --agent` 越权漏洞，强制校验发送者身份。
    *   [PR #8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741)：修复 `browser` 工具 screenshot 路径穿越漏洞，限制任意文件写入。
    *   [PR #8726](https://github.com/zeroclaw-labs/zeroclaw/pull/8726)：阻断 TUI 客户端中危险环境变量的注入。
    *   [PR #8725](https://github.com/zeroclaw-labs/zeroclaw/pull/8725)：Webhook 监听强制要求配置密钥，拒绝裸奔启动。
*   **🌐 网络与模型兼容性拓展**：
    *   **OpenAI Chat Completions 适配器** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))：正在推进 RFC，计划让 LobeChat、Open WebUI 等主流前端无缝接入 ZeroClaw。
    *   **Bocha AI 搜索引擎** ([PR #8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737))：针对中国大陆部署环境，引入了可用的替代搜索 Provider。
*   **💻 UI 重构**：
    *   [PR #8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655)：对 zerocode 面板进行大重构，将 "Code" 面板设为默认主界面，隐藏传统的 "Chat" 面板。

## 7. 用户反馈摘要
从 Issue 描述与维护者的交互中，可以提炼出以下用户画像与痛点：
*   **多渠道集成的痛点**：用户极度期待 OpenAI 兼容接口 ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))，因为目前要接入第三方客户端“需要自己构建适配器去翻译请求”，心智负担太重。
*   **边缘硬件部署的挣扎**：有用户尝试在 Android Termux ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)) 上安装 ZeroClaw 但遇到 `unknown linux aarch64` 二进制兼容问题，说明在轻量边缘设备上的体验仍有断层。
*   **企业级配置管理的冲突**：多智能体部署 ([#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645)) 中，通过环境变量注入 Secrets 会导致 Web UI 出现配置漂移误报，企业用户对配置文件与运行时覆盖的边界划分有极高要求。

## 8. 待处理积压
*   **⚠️ [长期未解决 P3] 清理主仓库的无用分支** ([#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715))：主仓库已堆积超过 200 个已合并的无用分支，严重影响了代码浏览和贡献者的体验。该 Issue 创建于近两个月前，目前仍处于 `blocked` 状态，建议维护团队尽快使用脚本批量清理。
*   **⏳ [架构演进] WASM 插件生命周期** ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822))：允许 WASM 插件订阅 Agent 生命周期事件（如 turn complete），已被标记为 `accepted`，但目前处于 review 阶段，期待后续看到突破性进展。

</details>