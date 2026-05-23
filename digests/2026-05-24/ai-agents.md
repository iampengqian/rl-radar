# OpenClaw 生态日报 2026-05-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-23 22:14 UTC

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

# OpenClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
OpenClaw 项目今日继续保持极高的社区活跃度与开发节奏，过去 24 小时内共处理了 **500 条 Issue 更新**（其中 169 条被关闭）和 **500 条 PR 更新**（其中 346 条被合并或关闭）。项目近期刚刚发布了 `v2026.5.22-beta.1` 版本，核心改动集中在文档与引导体验的优化。从活跃的 Issue 与 PR 来看，目前项目的重心正在向 **多智能体编排的稳定性**、**本地/第三方模型兼容性** 以及 **沙箱安全管控** 深入。整体而言，项目健康度良好，社区反馈踊跃，但多智能体架构下的边缘场景 Bug（如上下文丢失、消息重发）依然是亟待解决的技术债。

---

## 2. 版本发布
项目今日无全新版本发布，当前最新版本为近期推出的：
- **[v2026.5.22-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)**
  - **更新内容**：重点更新了 README 引导流程和 Gateway 启动路径文档；新增 WhatsApp QR/408 恢复机制、cron 输出语言提示、skill 高级功能说明，以及网关 upstream 403 故障排查、插件 fallback override 指南。
  - **破坏性变更/迁移注意**：本版本为纯文档与配置指引增强，不涉及核心 API 或运行时的破坏性变更，用户可无缝升级。

---

## 3. 项目进展
今日项目合入及关闭了大量 PR，整体功能完整性与稳定性均向前迈出坚实一步：
- **跨渠道兼容性提升**：合入了针对 Discord 插件 npm 包加载问题的修复 ([#77241](https://github.com/openclaw/openclaw/pull/77241))，以及解决 feishu 渠道卡片 Markdown 表格渲染和流式配置兼容性的 PR ([#42809](https://github.com/openclaw/openclaw/pull/42809), [#42936](https://github.com/openclaw/openclaw/pull/42936))。
- **多智能体与 Hook 机制完善**：修复了非默认代理工作区下 Hooks 无法加载的关键问题 ([#42425](https://github.com/openclaw/openclaw/pull/42425))；同时引入了对每个 Agent 独立 `dmScope` 路由的支持 ([#42937](https://github.com/openclaw/openclaw/pull/42937))。
- **稳定性与安全增强**：优化了模型 Allowlist 对连字符命名的兼容 ([#43211](https://github.com/openclaw/openclaw/pull/43211))，并修复了 acpx 插件注册时序导致的 Gateway 误报 "ready" 问题 ([#79596](https://github.com/openclaw/openclaw/pull/79596))。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**代理初始化崩溃**和**复杂的任务编排异常**：
- **Onboarding 初始化 "trim" 崩溃**：多个用户反馈在进行 `openclaw onboard` 或跳过渠道选择时，遭遇 `Cannot read properties of undefined (reading 'trim')` 导致 CLI 崩溃。这成为今日评论数最多的问题（[Issue #67291](https://github.com/openclaw/openclaw/issues/67291), [Issue #67353](https://github.com/openclaw/openclaw/issues/67353)），反映出近期某次提交引入的回归对新手极度不友好。
- **子代理调度与结果丢失**：标记为 P1 级别的 Diamond Lobster Issue [#44925](https://github.com/openclaw/openclaw/issues/44925) 暴露出 OpenClaw 在子代理执行超时或中断时，结果会被静默丢弃且不触发重试，这对重度依赖 Multi-Agent 架构的开发者造成了严重阻碍。
- **Tool Schema 导致模型请求被拒**：大量使用本地/第三方 OpenAI 兼容模型（如小米 MiMo v2.5）的用户在升级到 2026.5.12 后，因 Schema 变更引发 HTTP 400 错误 ([Issue #82447](https://github.com/openclaw/openclaw/issues/82447))，触发了社区对“是否应发送空 `tools: []`”的热烈讨论。

---

## 5. Bug 与稳定性
根据今日上报和更新的数据，核心 Bug 及其严重程度分级如下：

### 🔴 严重 / P1 级
- **Session 历史上下文错乱**：Agent 会回复上一轮的旧消息，而非当前用户新输入，造成对话错位 ([Issue #32296](https://github.com/openclaw/openclaw/issues/32296))。
- **Compaction 超时导致消息轰炸**：当会话压缩超时，Agent 会陷入无限循环，不断向用户重发相同的历史消息 ([Issue #43661](https://github.com/openclaw/openclaw/issues/43661))。
- **Doctor 诊断命令严重性能退化**：在 2026.5.20 版本中，`openclaw doctor --fix` 耗时从 55秒 暴增至 229秒+ ([Issue #85333](https://github.com/openclaw/openclaw/issues/85333))。

### 🟡 中等 / P2 级
- **UI 安全上下文限制**：在非本地或非 HTTPS 环境下，控制台 UI 报错 `requires device identity`，导致无法正常使用 ([Issue #32473](https://github.com/openclaw/openclaw/issues/32473))。
- **音频消息无响应**：Telegram 渠道的纯语音消息无法触发 Agent 处理流程 ([Issue #1989](https://github.com/openclaw/openclaw/issues/1989) - 已关闭)。

### 🟢 已有对应修复 PR 的关键 Bug
- 空数组 `tools: []` 导致本地模型崩溃的问题，已有 PR 提出在代理层进行 Omit 处理 ([PR #85835](https://github.com/openclaw/openclaw/pull/85835))。
- 主会话重启恢复失败时没有通知用户的痛点，已提交修复 ([PR #85805](https://github.com/openclaw/openclaw/pull/85805))。

---

## 6. 功能请求与路线图信号
结合今日 Issues 与活跃的 PRs，以下功能需求有望在近期被纳入主干或下一版本：
- **Gateway 级别按代理设定成本预算**：要求在 Gateway 分发请求前强制执行每个 Agent 的每日/每月消耗上限 ([Issue #42475](https://github.com/openclaw/openclaw/issues/42475))。属于重点治理需求，预计将被排期。
- **SKILL.md 支持指定专属模型**：用户提出在 Skill 级别路由不同的模型（如复杂任务用 GPT-5，简单任务用 Flash），以节省成本 ([Issue #43260](https://github.com/openclaw/openclaw/issues/43260))。
- **TTS 排除 Emoji 与符号**：针对语音播报场景，相关优化 PR 已进入 Maintainer Review 阶段 ([PR #78172](https://github.com/openclaw/openclaw/pull/78172))，大概率即将合入。
- **Canonical 数据库查询 seams**：开发者希望提供 SQLite 级别的会话切片查询能力，而不仅仅依赖黑盒 JSON ([Issue #79902](https://github.com/openclaw/openclaw/issues/79902))。

---

## 7. 用户反馈摘要
透过今日的 Issue 互动，提炼出用户最真实的反馈：
- **痛点**：
  - **多智能体协作犹如“开盲盒”**：开发者指出使用 CLI 并发添加/配置代理时，极易发生配置覆盖、Session 锁失效及孤儿任务 ([Issue #43367](https://github.com/openclaw/openclaw/issues/43367))。
  - **代理升级兼容性断层**：从 4.x 升级到 5.x 后，由于认证映射未迁移，遗留 CLI 程序无法注册，极其影响平滑升级体验 ([Issue #84604](https://github.com/openclaw/openclaw/issues/84604))。
  - **系统提示泛滥**：自动回复的 System log 在某些场景下非常啰嗦，用户强烈呼吁提供精简模式。
- **认可/满意**：
  - 社区对 TTS 支持 `<notts>` 标签的功能反响极好，认为这极大改善了对外语音交付的专业度。
  - 沙箱隔离机制整体受到肯定，但用户仍在寻找隔离性与工作空间可写性之间的平衡。

---

## 8. 待处理积压
以下高价值或长期未解的 Issue 和 PR 需要核心维护团队优先关注，避免形成瓶颈：
- **[Issue #22358](https://github.com/openclaw/openclaw/issues/22358) - Sub-agent 完成后的扩展钩子**：请求引入 `post_subagent_complete` 的黄金级 Issue，自 2月份创建至今，长期处于 `needs-maintainer-review`，严重制约了高级用户构建自动化工作流。
- **[Issue #37634](https://github.com/openclaw/openclaw/issues/37634) - 沙箱隔离导致只读工作空间异常**：高赞（👍5）且标记为 P1，涉及底层安全架构，长期未彻底解决。
- **[PR #43469](https://github.com/openclaw/openclaw/pull/43469) - 扫描 Markdown 技能文件防范注入攻击**：涉及核心安全机制，已等待维护者审查超过 2 个月，需尽快评估合并以防安全漏洞。
- **[PR #81027](https://github.com/openclaw/openclaw/pull/81027) - 修复中断时硬杀 Socket 的机制**：解决网关高并发下的连接泄露问题，对于生产环境稳定性至关重要，目前仍处于需要验证状态。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 24 日各大开源项目的社区动态，为您输出如下横向对比与深度分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多智能体协作与平台化”演进的关键爆发期**。各项目在多模态通信渠道接入（如 WhatsApp、Telegram、飞书）、底层模型兼容（特别是对本地/第三方开源模型的支持）、以及企业级安全合规（沙箱与隔离）方面展开了激烈竞速。与此同时，**Agent 记忆系统、多模型网关的成本控制与上下文编排**成为了决定项目能否在生产环境落地的核心技术分水岭，整个生态呈现出应用层极度繁荣但底层基础设施仍在剧烈打磨的典型特征。

### 2. 各项目活跃度对比
*健康度评级标准：S(极好/响应极快) | A(良好/稳步迭代) | B(一般/存在积压) | C(停滞/高危)*

| 项目名称 | 今日活跃 Issues | 今日活跃 PRs | 最新版本动态 | 核心聚焦点 | 社区健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (169关) | 500 (346合/关) | v2026.5.22-beta.1 | 多智能体稳定性、跨渠道兼容、网关安全 | **A** <br>体量庞大，处理速度极快，但边缘Bug积压较多 |
| **Hermes Agent**| 50 (3关) | 50 (5合) | 无 | Anthropic接入、平台并发冲突(409)、时间感知 | **B** <br>高输入低产出，严重缺乏代码审查，积压明显 |
| **ZeroClaw** | 50 (8关) | 50 (18合/关) | v0.8.0-beta-1 | TUI建设、Lark/Email渠道、ACP协议 | **A** <br>功能迭代极快，架构向企业级解耦演进 |
| **PicoClaw** | 6 (4关) | 11 (6合/关) | v0.2.9-nightly | DeepSeek适配、上下文预算控制、多账号矩阵 | **S** <br>小而美，响应极其迅速，Bug修复当天合入 |
| **NanoClaw** | - (3关) | 16 (13合/关) | 无 | DB与内存防泄漏、WhatsApp底层修复 | **S** <br>代码合入率极高，处于高质量巩固期 |
| **Moltis** | 8 (3关) | 4 (3合) | 无 | 多Agent能力边界架构、MCP安全防泄漏 | **S** <br>维护者对Bug响应按小时计，架构演进清晰 |
| **NanoBot** | 8 (5活跃) | 10 (6合/关) | 无 | 记忆系统重构、BM25-lite路由、本地模型兼容 | **A** <br>架构讨论深入，社区对底层优化参与度极高 |
| **ZeptoClaw** | - | 14 (全合并) | 无 | CI流水线依赖升级、核心循环Pipeline化 | **A** <br>维护者强力推动重构，自动化依赖管理健康 |
| **NullClaw** | 0 | 11 (0合) | 无 | Telegram Polling修复、去Curl重构 | **C** <br>存在严重的维护瓶颈，关键Bug修复PR被挂起 |
| **LobsterAI** | 3 (0关) | 2 (0合) | 无 | 竞品优劣势分析、长期记忆系统架构探讨 | **B** <br>近期处于停滞状态，核心PR近两月未合并 |
| **CoPaw** | 10 (1关) | 2 (0合) | v1.1.8.post1 | MCP集成、BI数据分析插件 | **B** <br>社区需求旺盛，但官方合并进度停滞 |

### 3. OpenClaw 在生态中的定位
作为生态内的**“核心参照物”与事实标准**，OpenClaw 展现出了显著的体量优势：
* **优势：** 拥有最庞大的开发者基数和最完善的通信渠道矩阵。其在网关层面的高可用设计（如 Upstream 故障排查、Fallback override）使其成为企业构建大型 Agent 网关的首选底座。
* **技术路线差异：** 相比 PicoClaw 针对特定模型（如 DeepSeek）的深度定制，或 ZeroClaw 的原生 TEE/ACP 协议支持，OpenClaw 走的是**“大而全的抽象层”**路线，试图在网关层抹平所有模型和渠道的差异。
* **挑战与隐忧：** 报告显示其正面临“大系统病”的威胁。多智能体协作的边缘 Bug（如 Session 上下文错乱、trim 崩溃）和复杂的升级兼容性断层，导致其在新手友好度和多智能体重度并发场景下表现不及一些轻量级竞品。

### 4. 共同关注的技术方向
分析多项目动态，当前生态在以下四个技术方向上产生了强烈的共识与共振：

1. **Agent 记忆系统的重构与治理：**
   * *涉及项目：OpenClaw, NanoBot, LobsterAI, CoPaw*
   * *具体诉求：* 简单的上下文拼凑已无法满足需求。NanoBot 暴露了记忆去重失败问题，LobsterAI 热议结构化长期记忆，CoPaw 呼吁加入自动归档机制。将上下文作为数据库查询而非黑盒 JSON 处理，正在成为刚需。
2. **多智能体编排的精细度与稳定性：**
   * *涉及项目：OpenClaw, Moltis, ZeptoClaw, NullClaw*
   * *具体诉求：* 从简单的 Spawn 进入到精细化控制。Moltis 提出了“Agent 作为能力边界”的 RFC（独立挂载 MCP 和沙箱），OpenClaw 亟待解决子代理结果静默丢弃的问题。此外，为子代理单独设置路由和温度参数也是高频需求。
3. **MCP 与本地/第三方模型的深度适配：**
   * *涉及项目：OpenClaw, ZeroClaw, CoPaw, Moltis, NanoBot*
   * *具体诉求：* 一方面是防禦性兼容，如 OpenClaw 和 NanoBot 均在修复空数组 `tools: []` 导致本地模型（如 MiMo v2.5）崩溃的问题；另一方面是 MCP 协议的生态融合，CoPaw 正在构建 MCP 市场，而 Moltis 则暴露了 MCP 环境变量泄漏的严重安全隐患。
4. **企业级通信渠道的原生融合与重控：**
   * *涉及项目：PicoClaw, ZeroClaw, NullClaw, Hermes Agent*
   * *具体诉求：* 平台并发冲突（如 Telegram 的 409 轮询）是通用痛点。同时，ZeroClaw 和 PicoClaw 都在致力于让 Agent 在消息平台内原生支持富媒体和复杂的审批流卡片。

### 5. 差异化定位分析
* **功能侧重：** 
  * **OpenClaw & ZeroClaw** 定位为**企业级网关与编排底座**，致力于解决高并发、多租户和复杂工作流。
  * **PicoClaw & NanoClaw** 更偏向**特定场景的轻量级交付**（如深度适配开源模型、特定通讯软件的私有化部署）。
  * **CoPaw** 正在向**AI 桌面生产力工具**演进（引入数据分析和 BI 插件）。
* **目标用户：** Hermes Agent 和 ZeptoClaw 明显针对极客和高度定制化开发者（CLI/TUI 深度使用者）；而 NanoBot、Moltis 则更照顾希望在 WebUI 或私有环境中开箱即用的中小型团队。
* **技术架构：** NullClaw 坚定地进行底层去 Curl 化，试图打造基于原生的高性能运行时；而 OpenClaw 等多数项目仍基于 Node.js/Go 等成熟生态快速封装。底层网络通信和沙箱隔离的深度，是两者最大的技术分水岭。

### 6. 社区热度与成熟度
* **快速迭代期：** NanoClaw, PicoClaw, Moltis。这些项目代码合入率极高，核心维护者对社区反馈处于“秒回”状态，属于极具活力的上升期新星。
* **架构重构期：** ZeroClaw, ZeptoClaw, NanoBot。项目正在经历底层管道解耦或记忆系统重塑，当前开发重点在于扫清技术债务和发布具有里程碑意义的下一个大版本（如 v0.8.0 或 v2.0）。
* **平台巩固/瓶颈期：** OpenClaw, Hermes Agent, LobsterAI。处于庞大的开源项目典型的“维护阵痛期”。OpenClaw 面临海量的边缘 Bug 需要分诊；Hermes 和 LobsterAI 则出现了明显的 Maintainer 审查积压（PR 挂起长达数周至数月），若不引入社区 Reviewer 机制，可能面临社区贡献者流失的风险。

### 7. 值得关注的趋势信号
1. **“工具发现”正在成为 Token 优化的新战场：** 随着系统提示词和外部工具越来越庞大，NanoBot 社区提出的 **BM25-lite 技能路由器**（按相关性注入技能，预计缩减 60% Token）代表了未来的优化方向。AI 助手不再是盲目塞入所有 Tools，而是具备了感知和检索能力。
2. **安全边界正在从“防网络攻击”转向“防提示与内存泄漏”：** Moltis 暴露的 MCP 环境变量泄漏、OpenClaw 的 Markdown 注入防范，以及各项目严格限制沙箱可写性，标志着行业内已经开始直面**AI 基础设施的应用层安全危机**。
3. **模型降级与预算控制将成网关标配：** 从 OpenClaw 的 Gateway 级别按代理设定成本预算，到各项目针对不同任务配置不同温度/级别的路由，企业在使用 AI 时正在从“尝鲜”走向“精细化算力管控”。
4. **人机协作边界清晰化：** 无论是 NanoBot 提出的“人类在 WhatsApp 回复后 Bot 自动静默 12 小时”，还是 ZeroClaw 的 `request_approval()` 机制，都在释放一个强烈信号：**真正落地的智能体不再是“全自主运行”，而是懂得适时闭嘴和请求人工介入的“辅助者”。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-05-24 动态日报。

---

# 📊 NanoBot 项目动态日报 (2026-05-24)

## 1. 今日速览
NanoBot 今日维持了高水平的开发与社区活跃度，过去 24 小时内共有 8 条 Issue 更新（5 新开/活跃，3 关闭）和 10 条 PR 更新（6 待合并，4 已合并/关闭）。
项目核心聚焦于**记忆系统底层机制重构**与**多模态/多供应商扩展**，多项重要修复和新特性已成功合入主分支。
整体来看，项目处于健康且快速演进的状态，社区贡献者对底层架构（如路由、超时机制）的优化表现出极高的参与热情。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，标志着项目在稳定性和生态支持上迈出了坚实的一步：

*   **解除执行超时上限与修复语音转录路由 ([PR #3967](https://github.com/HKUDS/nanobot/pull/3967))**：
    合并了关键修复。将 `exec` 工具的配置超时时间与单次调用上限解绑（允许配置超过 600s 或设为 0），并修复了 Groq 语音转录 API 路由不透明导致配置失效的问题。
*   **智谱图像生成支持 ([PR #3971](https://github.com/HKUDS/nanobot/pull/3971))**：
    成功合入新特性，扩展了多模态能力，增加了对智谱图像生成供应商的支持。
*   **文档：小米 MiMo Token 计划更新 ([PR #3972](https://github.com/HKUDS/nanobot/pull/3972))**：
    基于社区反馈，重构了文档，使用内置的 `xiaomi_mimo` 供应商替代了之前的 `custom` 配置方案。
*   **记忆系统整合提案搁置 ([PR #3952](https://github.com/HKUDS/nanobot/pull/3952))**：
    针对 Dream 系统的增强提案被关闭（未合入），表明维护者对当前记忆去重和合并机制持谨慎态度，可能需要更深层的设计讨论。

## 4. 社区热点
今日社区讨论的焦点集中在**系统架构灵活性**和**自动化工作流**上：

*   **Hooks 生命周期功能请求 ([Issue #2182](https://github.com/HKUDS/nanobot/issues/2182))**：
    获得 👍2。用户强烈希望能像 Claude Code 一样支持在 `SessionStart`、`PreToolUse` 等生命周期事件触发自定义 Shell 命令或 HTTP 请求。这反映了重度用户希望将 NanoBot 深度集成进自动化流水线的迫切需求。
*   **Spawn 子代理温度控制 ([Issue #3969](https://github.com/HKUDS/nanobot/issues/3969) / [PR #3975](https://github.com/HKUDS/nanobot/pull/3975))**：
    开发者提出不同任务（如精确提取 vs 创意发散）需要不同的 LLM 采样温度，目前继承自主代理的固定温度限制了多代理并行架构的发挥。
*   **BM25-lite 技能路由器 ([PR #3865](https://github.com/HKUDS/nanobot/pull/3865))**：
    极具野心的架构优化提案，计划通过轻量级检索只注入相关技能描述，从而将系统提示词长度缩减约 60%，引发了对 Token 消耗优化的大量关注。

## 5. Bug 与稳定性
今日暴露了几个关键的稳定性问题，部分已得到迅速响应并修复：

*   **🟡 严重：GPT-5.5 上下文重复崩溃 ([Issue #3633](https://github.com/HKUDS/nanobot/issues/3633))**：
    使用 GPT-5.5 模型时触发 `Duplicate item found with id` 错误且无法自动恢复。由于涉及最先进的大模型 API 响应解析，可能存在底层格式的兼容性异常，**暂无关联 fix PR**，需高度关注。
*   **🟢 已修复：Groq 语音转录配置失效 ([Issue #3637](https://github.com/HKUDS/nanobot/issues/3637))**：
    导致无效配置的根因已查明，并已通过合并 [PR #3967](https://github.com/HKUDS/nanobot/pull/3967) 解决。
*   **🟢 已修复：超长任务执行被强杀 ([Issue #3595](https://github.com/HKUDS/nanobot/issues/3595))**：
    600 秒硬编码超时导致大型下载或长耗时脚本中断，已通过 [PR #3967](https://github.com/HKUDS/nanobot/pull/3967) 释放上限得到修复。

## 6. 功能请求与路线图信号
分析今日的新开 Issues 和活跃 PR，项目未来的迭代方向展现出以下明确信号：

*   **Agent 个性化与精细化控制**：
    [Issue #3969](https://github.com/HKUDS/nanobot/issues/3969) 及其对应的 [PR #3975](https://github.com/HKUDS/nanobot/pull/3975) 旨在允许为子代理单独配置 `temperature`。这表明项目正在向更成熟、更精细的多智能体编排架构演进。
*   **人机协作边界定义**：
    [Issue #2837](https://github.com/HKUDS/nanobot/issues/2837) 提出当人类在 WhatsApp 群组中回复时，Bot 应自动静默 12 小时。这种“人类接管”机制是 AI 助手在真实社交场景落地的关键体验优化。
*   **接口兼容性扩展**：
    [PR #3974](https://github.com/HKUDS/nanobot/pull/3974) 提出了支持 OpenAI Responses API 及额外请求体配置；[PR #3970](https://github.com/HKUDS/nanobot/pull/3970) 增加了 Azure Speech 语音转文字支持。供应商和接口的广泛兼容仍是生态扩展的重点。

## 7. 用户反馈摘要
从互动记录中可以清晰提取出目前用户的真实痛点与反馈：

*   **痛点 1：记忆系统臃肿与失效**：多位用户（如 [Issue #3047](https://github.com/HKUDS/nanobot/issues/3047) 与 [Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)）指出当前的 `Dream` 记忆整理机制存在“饥饿问题”——由于依赖单一输入源且清理不及时，导致上下文溢出或记忆文件极度冗余。
*   **痛点 2：内置能力缺乏发现机制**：用户在使用中往往不知道当前开启了哪些技能。为此，开发者提出了 [PR #3968](https://github.com/HKUDS/nanobot/pull/3968) 添加 `/skill` 命令，反映了社区对更好内置文档和交互式发现机制的渴望。

## 8. 待处理积压
以下重要议题处于 Open 状态，等待维护者 Review 或进一步推动：

*   **[Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)**：关于 `Dream` 系统缺乏实时学习能力的深层讨论。鉴于之前的修改 PR (#3952) 已被关闭，维护团队亟需在此 Issue 下给出官方的架构规划或临时解决方案。
*   **[PR #3865](https://github.com/HKUDS/nanobot/pull/3865)**：BM25-lite 技能路由器。这是一个显著降低 Token 消耗的底层架构优化，但可能需要严格的性能和准确率基准测试，目前仍处于待审核状态。
*   **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443)**：心跳推理与通知解耦。该 PR 挂起已近 3 个月，考虑到其改变了 Agent 与用户交互的默认行为，需维护者确认是否计划合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-24)

## 1. 今日速览

Hermes Agent 在过去24小时内保持了**极高的社区活跃度**，共产生 50 条 Issue 更新和 50 条 PR 更新。然而，项目今日处于典型的“高输入、低产出”状态——仅关闭了 3 个 Issue，合并了 5 个 PR，但新开/活跃的 Issue 达到 47 个，待合并 PR 高达 45 个。这表明社区反馈非常热烈，但核心团队的代码审查和合并速度面临一定积压压力。当前项目处于无新版本发布的平稳开发期。

## 2. 版本发布
**无新版本发布。** 项目依然处于日常迭代与问题修复阶段。

## 3. 项目进展
今日共有 **5 个 PR 被合并/关闭**（绝大部分仍处于 Open 状态）。虽然核心合并数量不多，但社区提交的 PR 覆盖了网关安全性、跨平台兼容性和核心工具修复：
*   **网关安全与稳定性**：多个修复 PR 试图解决网关底层问题，例如防止 API 服务器在启动失败时泄漏后台任务（相关 PR: [#22064](https://github.com/NousResearch/hermes-agent/pull/22064)），以及修复 fallback provider 导致的参数崩溃问题（相关 PR: [#27678](https://github.com/NousResearch/hermes-agent/pull/27678)）。
*   **工具与配置**：改进了 Smart Approval 的 token 预算硬编码问题（相关 PR: [#29517](https://github.com/NousResearch/hermes-agent/pull/29517)）。

## 4. 社区热点
今日讨论最活跃的问题集中在**第三方平台接入、底层 Agent 记忆与时间感知**：
*   **Anthropic 接入障碍**：[#29125](https://github.com/NousResearch/hermes-agent/issues/29125) (👍7, 💬19) 成为今日最热帖。用户反馈在通过 Claude CLI 接入并选择 claude-opus-4.7 模型时遇到阻碍，这反映了高级用户对顶级闭源模型无缝接入的强烈需求。
*   **Agent 的“时间感知”缺失**：[#10421](https://github.com/NousResearch/hermes-agent/issues/10421) (👍3, 💬5) 提出 Agent 缺乏 Turn-level 的时间上下文（不知道“现在”是几点）。这是构建长效自主 Agent 的核心痛点，获得社区高度共鸣。
*   **安装体验卡点**：[#7066](https://github.com/NousResearch/hermes-agent/issues/7066) (💬7) 反映安装脚本在国内环境被严重阻塞，暴露了项目在区域网络适应性上的短板。

## 5. Bug 与稳定性
今日报告了多个关键的高优 (P1/P2) Bug，多与网关并发、重连机制和多平台适配有关：

*   **[P1] Telegram 并发冲突与会话劫持**：
    *   飞书/TG 等平台出现严重的 409 轮询冲突（[#30122](https://github.com/NousResearch/hermes-agent/issues/30122), [#30127](https://github.com/NousResearch/hermes-agent/issues/30127)），导致消息丢失。
    *   `_recover_telegram_topic_thread_id` 逻辑错误，将新消息错误路由到旧会话（[#31086](https://github.com/NousResearch/hermes-agent/issues/31086)，已有修复 PR [#30538](https://github.com/NousResearch/hermes-agent/issues/30538)）。
*   **[P1] Cron 多 Profile 环境变量污染**：Cron 定时任务在设置 Profile 时会污染 Gateway 的 `os.environ`，导致严重的鉴权失败。已提交修复 PR：[#31156](https://github.com/NousResearch/hermes-agent/pull/31156)。
*   **[P1] Agent 核心循环未定义错误**：`conversation_loop.py` 中引用了未定义的 `_pool_may_recover_from_rate_limit` 函数导致崩溃（[#30350](https://github.com/NousResearch/hermes-agent/issues/30350)）。
*   **[P2] Windows 平台严重兼容问题**：`subprocess.Popen` 在 Win11 上由于 `creationflags` 双重传参导致 `terminal` 和 `write_file` 彻底失效（[#29651](https://github.com/NousResearch/hermes-agent/issues/29651)）。

## 6. 功能请求与路线图信号
社区的请求正推动 Hermes 向**企业级安全、更灵活的插件生态**发展：
*   **插件生态扩展**：用户请求添加 Infisical 作为外部 Vault 后端（[#22791](https://github.com/NousResearch/hermes-agent/issues/22791)）；PR 方面，正在引入 ntfy 推送适配器（[#30867](https://github.com/NousResearch/hermes-agent/pull/30867)）和官方精选的 MCP 目录（[#30870](https://github.com/NousResearch/hermes-agent/pull/30870)）。
*   **精细化 Agent 控制**：请求在自动保存 Skills 前增加用户确认机制（[#28762](https://github.com/NousResearch/hermes-agent/issues/28762)）；请求支持子代理与主代理之间的实时双向通信（[#29063](https://github.com/NousResearch/hermes-agent/issues/29063)）。
*   **预判**：结合大量关于 Provider 配置和 MCP 的 PR（如 [#31140](https://github.com/NousResearch/hermes-agent/pull/31140)），下一版本预计将重点升级**多模型提供商兼容性**与**MCP 工具链发现机制**。

## 7. 用户反馈摘要
*   **痛点 1：多平台接入门槛高且易出错**。从 Discord 无 token 死循环（[#31049](https://github.com/NousResearch/hermes-agent/issues/31049)）、QQ Bot 断连静默（[#31101](https://github.com/NousResearch/hermes-agent/issues/31101) 到飞书/TG的各种适配问题，说明 Gateway 抽象层在面对复杂多端时依然脆弱。
*   **痛点 2：本地与CLI调试体验不佳**。`/new` 命令无法刷新上下文长度（[#31043](https://github.com/NousResearch/hermes-agent/issues/31043)）、TUI dashboard 在只读系统下无限重建（[#30228](https://github.com/NousResearch/hermes-agent/issues/30228)），暴露了本地运维工具链的粗糙。
*   **满意点**：社区对插件化拆分（如将平台剥离为 plugin）的整体架构演进表示认可，并积极贡献适配代码（如 ntfy, Discord 等）。

## 8. 待处理积压
项目当前存在大量重复开启和长期悬而未决的问题，核心团队需尽快进行 Issue Triage：
1.  **重复 Issue 需合并清理**：如 Telegram 409 冲突（#30122 与 #30127 几乎完全相同），DM topic 恢复问题（#31086 与 #30538 重复）。
2.  **长期阻塞的基础体验问题**：
    *   Linux 安装脚本依赖 `xz-utils` 但未自动检测，导致静默失败（[#11197](https://github.com/NousResearch/hermes-agent/issues/11197)，长达一周未 Close）。
    *   跨平台网关并发写入 SQLite 导致的数据库损坏风险（[#30445](https://github.com/NousResearch/hermes-agent/issues/30445)）。
3.  **PR 积压严重**：有大量低于 P2 优先级的 Docs 和 Feature PR（如 #26975, #21594）长达数天至一周未获 Review，建议项目引入社区 Reviewer 机制加快流转。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
过去24小时内，PicoClaw 项目保持了**高活跃度与健康的迭代节奏**。团队及社区贡献者共处理了 11 个 Pull Requests（其中 6 个已合并/关闭）和 6 个 Issues（4 个已关闭），并推送了最新的 `v0.2.9-nightly` 自动构建版本。项目近期的核心重心明显聚焦于**渠道能力增强（如视觉管道、多账号配置）、Agent 记忆与上下文控制优化（Seahorse 预算修复），以及 DeepSeek 模型特性的深度适配**。整体而言，项目处于稳步上升期，社区贡献积极，Bug 修复响应迅速。

## 2. 版本发布
- **[ nightly ] Nightly Build: v0.2.9-nightly.20260523.f09a7d67**
  - **更新说明**：基于 `main` 分支的自动化构建版本。
  - **潜在影响**：该版本包含了今日合并的多项重要修复（如 Seahorse 上下文溢出修复、DeepSeek 映射等），建议开发者和测试用户升级体验，但需注意自动化构建可能存在不稳定性。
  - **完整变更日志**：[v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 6 个 PR 顺利合并/关闭，项目在功能迭代和底层稳定性上取得了实质性进展：

- **🐛 核心逻辑与上下文修复**：
  - 合并 [PR #2895](https://github.com/sipeed/picoclaw/pull/2895)：**修复了 Seahorse Assembler 的预算溢出问题**。此前最新 32 条消息不受预算限制的 Bug 得以解决，大幅降低了高并发对话下的 `400 BadRequestError` 崩溃风险。
  - 关闭 [PR #2835](https://github.com/sipeed/picoclaw/pull/2835)：修复了 Agent 调用 `message` 工具后抑制最终回复的问题，保障了交互的完整性。
- **✨ 模型适配与特性增强**：
  - 合并 [PR #2928](https://github.com/sipeed/picoclaw/pull/2928)：**完善了对 DeepSeek 推理模型的适配**，将 PicoClaw 的 `thinking_level` 准确映射到底层参数，提升了对非 OpenAI 兼容模型的支持度。
- **🛡️ 安全与构建优化**：
  - 合并 [PR #2930](https://github.com/sipeed/picoclaw/pull/2930)：将 `golang.org/x/net` 升级至 `v0.55.0`，修复了 `govulncheck` 扫描出的安全漏洞。
  - 合并 [PR #2931](https://github.com/sipeed/picoclaw/pull/2931) (已关闭)：尝试修复 Discord 视觉管道中的附件下载问题（注：该 PR 已被关闭，可能采用了其他修复方案）。
  - 合并 [PR #1838](https://github.com/sipeed/picoclaw/pull/1838)：修正了 `picoclaw onboard` 命令的提示词拼写错误。

## 4. 社区热点
今日社区互动最为密集的是关于**渠道配置与扩展性**的讨论：
- **[Issue #2421](https://github.com/sipeed/picoclaw/issues/2421) [7条评论 | 👍2]**：用户 @aquaratixc 提议将 **Email 作为原生渠道**接入 PicoClaw，以适应企业、科研等依赖邮件通信的保守环境。该需求反映了用户希望将 PicoClaw 作为统一网关接入传统通信协议的强烈诉求。
- **[Issue #2742](https://github.com/sipeed/picoclaw/issues/2742) [5条评论]**：用户 @keys4words 报告了 v0.2.8 版本中网关启动后无渠道可用的严重问题，引发了多位用户的共鸣和排查讨论。

## 5. Bug 与稳定性
今日暴露并处理的 Bug 集中在**客户端权限、渠道初始化及上下文控制**方面：

1. **[严重] 网关启动失败**：[Issue #2742](https://github.com/sipeed/picoclaw/issues/2742) 报告在配置 Telegram 启用后，v0.2.8 网关启动时显示无渠道。目前处于待修复状态。
2. **[严重] 上下文预算绕过 (已修复)**：[Issue #2894](https://github.com/sipeed/picoclaw/issues/2894) 报告 FreshTail 机制无视 Token 预算限制。**对应修复 PR #2895 已合并**。
3. **[中等] Android 存储权限拒绝**：[Issue #2880](https://github.com/sipeed/picoclaw/issues/2880) 报告在 Android 10 (MIUI 12) 上启动服务时，尽管授予了标准权限，仍因无法创建目录而崩溃。可能与 Android scoped storage 限制有关。
4. **[低] Discord 附件处理 (方案调整中)**：[Issue #2931](https://github.com/sipeed/picoclaw/issues/2931) 暴露了 Discord 图片/文件作为 CDN URL 传递时被丢弃的问题（原修复 PR 被关闭，等待新方案）。

## 6. 功能请求与路线图信号
结合近期的 Issues 与待合并 PR，可以洞察出项目近期的演进方向：

- **多渠道/多账号矩阵管理**：
  - [PR #2883](https://github.com/sipeed/picoclaw/pull/2883) 提出了**支持微信多账号配置**的功能（动态识别 `weixin_*` 格式）。如果合并，将极大增强 PicoClaw 在私域运营和矩阵化部署的能力。
- **Agent 可控性与富媒体输出**：
  - [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) 旨在让 `message` 工具**原生支持媒体附件和 Telegram 富文本交付**，这标志着 PicoClaw 的 Agent 正在从“纯文本交互”向“多模态交付”演进。
  - [PR #2838](https://github.com/sipeed/picoclaw/pull/2838) 引入了 `AGENT.md` 的 frontmatter 策略过滤（`allow/deny`），为开发者提供了更细粒度的 Agent 工具权限管控。
- **国际化与前端体验**：
  - [PR #2932](https://github.com/sipeed/picoclaw/pull/2932) 添加了捷克语国际化支持（792/792 覆盖率）。
  - [PR #2933](https://github.com/sipeed/picoclaw/pull/2933) 为前端代码块增加了行号显示和全局换行切换。

## 7. 用户反馈摘要
从近两日的 Issue 中，我们可以提炼出真实用户的典型使用痛点：
- **传统环境接入难**：企业和科研用户亟需通过 Email 这类传统渠道与 AI 交互（[Issue #2421](https://github.com/sipeed/picoclaw/issues/2421)）。
- **版本升级体验割裂**：部分用户对于“从源码更新并清理旧版本”仍存在认知门槛，缺乏自动化的一键升级脚本（[Issue #2834](https://github.com/sipeed/picoclaw/issues/2834)）。
- **移动端兼容性短板**：老版本 Android (如 Android 10) 的存储权限管理导致应用启动即崩溃，影响了移动端边缘设备的部署体验（[Issue #2880](https://github.com/sipeed/picoclaw/issues/2880)）。

## 8. 待处理积压
以下重要 PR 和 Issue 处于 Open 状态，建议维护团队优先关注以推进合并或解决：

- **待合并的大型功能 PR**：
  - [PR #2883 (支持微信多账号)](https://github.com/sipeed/picoclaw/pull/2883)：目前标记为 Stale，需要核心开发者进行代码审查（特别是前端动态识别部分）。
  - [PR #2856 (支持媒体附件与 Telegram 富文本)](https://github.com/sipeed/picoclaw/pull/2856)：是一个重要的架构升级，等待最终测试合并。
  - [PR #2838 (Agent tool policy filters)](https://github.com/sipeed/picoclaw/pull/2838)：涉及权限安全管控，需谨慎评估合并。
- **悬而未决的关键 Bug**：
  - [Issue #2742 (v0.2.8 渠道启动失败)](https://github.com/sipeed/picoclaw/issues/2742)：由于影响核心网关可用性，需尽快定位是否为配置兼容性回归问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 NanoClaw 项目 2026-05-24 的动态日报：

# NanoClaw 项目日报 (2026-05-24)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内展现出**极高的社区活跃度与健康的迭代节奏**。全天共处理了 16 个 Pull Requests（其中 13 个已合并/关闭），并解决了 3 个 Issues，代码合入率极高，表明项目核心维护者正在积极审查和推进社区贡献。今日的开发重心高度聚焦于**系统稳定性提升**（如数据库损坏处理、会话日志轮转）以及 **WhatsApp 适配器的深度修复**。整体来看，项目处于稳健的功能完善与 bug 修复周期。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 13 个 PR 被成功合并或关闭，项目在以下几个维度取得了实质性进展：
*   **Agent 执行器稳定性**：多个关于 `agent-runner` 的修复被合入。包括处理持续性的 `inbound.db` 数据库损坏导致的死循环问题 ([PR #2597](https://github.com/qwibitai/nanoclaw/pull/2597))，以及修复零/负值转录轮转覆盖失效的问题 ([PR #2595](https://github.com/qwibitai/nanoclaw/pull/2595))。
*   **会话与内存管理**：合入了在恢复前轮转超大/陈旧会话转录的重要修复 ([PR #2586](https://github.com/qwibitai/nanoclaw/pull/2586))，这将显著降低长期运行 Agent 的内存占用；同时修复了 `CLAUDE.local.md` 未能被正确加载至分组内存的问题 ([PR #2598](https://github.com/qwibitai/nanoclaw/pull/2598))。
*   **渠道集成与 UI**：WhatsApp 相关的修复密集落地，包括频道 Bug 修复 ([PR #2554](https://github.com/qwibitai/nanoclaw/pull/2554))、新增 WhatsApp 格式化容器技能 ([PR #2553](https://github.com/qwibitai/nanoclaw/pull/2553))。此外，还关闭了关于轮播 MCP 工具 ([PR #2600](https://github.com/qwibitai/nanoclaw/pull/2600))、用户技能碎片化 ([PR #2601](https://github.com/qwibitai/nanoclaw/pull/2601)) 等功能 PR。

## 4. 社区热点
今日最热的讨论围绕核心组件的架构与路由机制展开：
*   **WhatsApp LID 路由映射丢失** ([Issue #2194](https://github.com/qwibitai/nanoclaw/issues/2194) - 2 条评论)：该已关闭 Issue 详述了 WhatsApp 适配器在服务重启后无法持久化 LID 到电话 JID 的映射，导致路由失败。这引发了关于如何在重启后保持缓存一致性的讨论。
*   **自定义端点路由** ([PR #1994](https://github.com/qwibitai/nanoclaw/pull/1994) - 待合并)：允许每个群组通过 `container.json` 指向自定义的 OpenAI 兼容端点（如 vLLM, llama.cpp），反映出社区对**脱离官方 API、支持本地/私有化模型部署**的强烈诉求。

## 5. Bug 与稳定性
今日报告及处理的 Bug 集中在运行时崩溃、构建失败和静默路由错误上：
*   **🔴 严重 (High)**：`skill/compact` 在合并到 v2 环境时引入了 v1 独有的符号，导致构建直接中断 ([Issue #2603](https://github.com/qwibitai/nanoclaw/issues/2603))。*状态：已开，尚无 Fix PR。*
*   **🟡 中等**：由于存储了带有前缀的 `platform_id`，导致原生 WhatsApp 适配器的静默路由失败 ([Issue #2193](https://github.com/qwibitai/nanoclaw/issues/2193))。*状态：已关闭，相关修复已在今日 PR 中跟进。*
*   **🟢 已修复**：测试套件因 droppped `<messages>` envelope 导致不匹配 ([PR #2596](https://github.com/qwibitai/nanoclaw/pull/2596) - 已合并)；Keychain 读取导致令牌回滚的问题 ([PR #2548](https://github.com/qwibitai/nanoclaw/pull/2548) - 已关闭)。

## 6. 功能请求与路线图信号
通过近期的 PR 走向，可以清晰看出项目演进的以下信号：
*   **多模型后端支持**：随着 Codex 提供程序修复的推进 ([PR #1994](https://github.com/qwibitai/nanoclaw/pull/1994))，项目正朝着**完全兼容开源/本地 LLM 生态**的方向发展。
*   **安全基线提升**：社区开发者提交了使用 `crypto.randomBytes()` 替换 `Math.random()` 的 PR ([PR #2545](https://github.com/qwibitai/nanoclaw/pull/2545))，表明项目正在注重提升审批流等关键操作的安全性防范。
*   **富媒体交互增强**：轮播 MCP 工具 ([PR #2600](https://github.com/qwibitai/nanoclaw/pull/2600)) 的合并预示着 Agent 即将具备在聊天渠道中发送更复杂、结构化交互卡片的能力。

## 7. 用户反馈摘要
从 Issue 提炼出的真实用户痛点如下：
*   **状态持久化痛点**：用户在使用 WhatsApp 频道时，非常在意服务重启后的无缝衔接，当前基于内存的 JID 映射缓存机制在重启时显得脆弱，影响了生产环境的可靠性。
*   **部署与构建受挫**：v1 到 v2 的平滑升级存在阻碍，自动合并引入的无效依赖让部署者感到困惑 ([Issue #2603](https://github.com/qwibitai/nanoclaw/issues/2603))。
*   **资源占用问题**：长期运行的 Agent 会生成巨大的 Session transcripts 文件，导致性能下降，用户亟需更精细的日志轮转策略。

## 8. 待处理积压
提醒维护者关注以下长期未关闭或具有重要价值的待办项：
*   **[OPEN] PR #1994**：支持自定义 OpenAI 兼容端点。该 PR 已开启近一个月（创建于 2026-04-24），是社区高度期待的核心功能，建议评估合并优先级。
*   **[OPEN] PR #2545**：关于审批卡 CSPRNG 安全升级的修复，涉及系统安全，建议尽快进行代码审查。
*   **[OPEN] Issue #2603**：今日新开的导致 v2 构建失败的回归问题，直接影响开发者体验，需尽快分配人员排查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 项目 2026-05-24 动态日报：

# NullClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时内，NullClaw 项目展现出**中等偏上的开发活跃度，但社区维护响应处于停滞状态**。项目新增了 11 个 Pull Request，且绝大部分由核心贡献者集中提交，重点聚焦于 Telegram 渠道功能增强、核心运行时的 Bug 修复以及系统底层的 HTTP/Cron 架构重构。然而，值得注意的是，今日项目未合并任何 PR，Issues 动态为 0，且无新版本发布，这表明项目目前可能正处在大规模代码审查阶段或维护者精力受限的瓶颈期。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
今日**无任何 PR 被合并或关闭**。尽管有 11 个待合并的 PR 处于 Open 状态，它们为项目的下一阶段演进储备了较多重要代码，包括：
- **渠道能力补齐**：Telegram 渠道 Polling 模式下的子代理结果推送修复，以及回复上下文的获取。
- **底层架构演进**：核心开发者 `ncode` 提交了移除运行时 `curl` 子进程的重构 PR (#881)，预示着底层网络请求正全面转向 Zig 原生 `std.http` 封装。
- **企业级特性**：Cron 定时任务引擎的重构 (#783) 引入了 DB 支持和 JSON 输出，正在等待最终落地。

## 4. 社区热点
由于今日 Issues 和 PR 的评论数均为 0 或 undefined，且无新开 Issue，**今日社区互动处于“静默”状态**。热度主要体现在代码提交层面：
- **Telegram 生产环境修复**：[#928 fix(channels): deliver subagent results to telegram in polling mode](https://github.com/nullclaw/nullclaw/pull/928) 和 [#930 feat(telegram): include reply_to_message text in inbound context](https://github.com/nullclaw/nullclaw/pull/930)。这两个 PR 指出目前 Telegram 机器人在轮询模式下丢失子代理执行结果，表明有大量用户正在将 NullClaw 应用于生产环境的复杂 Telegram Bot 场景。
- **安全性重构**：[#907 Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907) 涉及面较广，主要针对 HTTP 凭据和定时任务的安全加固，反映了项目正在向更高安全标准的企业级应用靠拢。

## 5. Bug 与稳定性
今日提交的 PR 修复了多个影响生产环境稳定性的核心 Bug，按严重程度排列如下：

1. **【严重】子代理结果丢失**：`spawn` 工具在 Telegram 轮询模式下静默失败，用户无法收到结果。
   - 状态：已有修复 PR [#928](https://github.com/nullclaw/nullclaw/pull/928)
2. **【严重】配置白名单失效导致 Bot 离线**：在 Telegram 的 `allow_from` 中使用数字格式的 User ID（非常自然的做法）会导致配置在运行时被静默丢弃，Bot 变相离线。
   - 状态：已有修复 PR [#924](https://github.com/nullclaw/nullclaw/pull/924)
3. **【中等】全局记忆不可见**：`memory_list` 工具无法返回未指定 `session_id` 的全局记忆条目，导致工作流逻辑断裂。
   - 状态：已有修复 PR [#929](https://github.com/nullclaw/nullclaw/pull/929)
4. **【中等】macOS 本地开发受限**：路径安全检查机制错误地拦截了 macOS 下 `/private/var/folders/...` 的合法工作区路径。
   - 状态：已有修复 PR [#925](https://github.com/nullclaw/nullclaw/pull/925)
5. **【低】CI/测试环境抖动**：Web 搜索测试受宿主机环境变量影响导致不确定性失败，以及测试期间产生无关的 stderr 错误日志。
   - 状态：已有修复 PR [#926](https://github.com/nullclaw/nullclaw/pull/926), [#927](https://github.com/nullclaw/nullclaw/pull/927)

## 6. 功能请求与路线图信号
虽然没有直接的新 Issue，但从当前开启的 PR 中可以提取出明确的技术路线图信号：
- **Cron 引擎企业级化**：[#783 feat(cron)](https://github.com/nullclaw/nullclaw/pull/783) 提议引入 DB 支持的调度器、历史记录和运行队列。这不仅是功能增强，更是让 NullClaw 从“个人 AI 助手”向“长期自主运行的 Agent 平台”跨越的关键信号。
- **网络底层去 Curl 化**：[#881 refactor(http)](https://github.com/nullclaw/nullclaw/pull/881) 预示着项目正在努力消除对系统级 `curl` 的依赖，转而使用内存和性能更可控的 Zig 原生 HTTP 客户端。这极可能是未来 v2.0 版本的基石。

## 7. 用户反馈摘要
今日缺乏直接的评论数据，但通过开发者 `raskevichai` 提交的修复类 PR 摘要，可以逆向提取出当前用户的真实痛点：
- **多轮对话体验差**：用户强烈依赖 Telegram 的“回复”功能来维持上下文，而之前版本的系统将其直接丢弃。
- **内存/记忆管理混乱**：用户期望能够存储全局信息（如核心人设、常用配置），但调用时却读取失败。
- **配置陷阱多**：配置语法（如数字与字符串类型）的隐式要求导致部分用户的 Bot 在启动后无法正常接收消息，造成了较高的排查成本。

## 8. 待处理积压
当前项目的隐患在于**PR 堆积严重**。大量关键且已经写好修复代码的 PR（尤其是涉及致命 Bug 的修复）处于长期挂起状态：
- **亟待 Review 的 PR**：[#924 (配置白名单失效)](https://github.com/nullclaw/nullclaw/pull/924), [#928 (子代理结果丢失)](https://github.com/nullclaw/nullclaw/pull/928)。
- **长期挂起的巨型 PR**：[#907 (安全加固)](https://github.com/nullclaw/nullclaw/pull/907) 和 [#881 (HTTP重构)](https://github.com/nullclaw/nullclaw/pull/881) 已分别挂起 13 天和 23 天。
- **建议**：请项目维护者优先 Review 和 Merge 影响生产环境的 Bug 修复类 PR（#924, #928, #929），随后再处理底层重构类 PR，以避免后续合入时产生严重的代码冲突。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI (netease-youdao/LobsterAI) 项目动态日报（2026-05-24）：

---

# 📊 LobsterAI 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时内，LobsterAI 项目整体处于**中等活跃度且以社区内容输入为主**的状态。项目共迎来 3 条新增/活跃的 Issue，主要聚焦在系统架构的深度思考与具体 Bug 反馈；同时有 2 条早期 PR 产生新的活动。今日**无新版本发布**，且**无任何 PR 被合并或 Issue 被关闭**。整体来看，社区正针对记忆系统、竞品对比及核心功能可用性进行深入探讨，但项目维护者的合并与处理动作今日相对静止。

## 2. 版本发布
**无**。今日项目未发布任何新版本或补丁。

## 3. 项目进展
今日**无已合并或已关闭的 Pull Requests**，项目在代码合并维度暂无实质性向前推进。

## 4. 社区热点
今日的讨论热点集中在系统底层架构设计与竞品优劣势分析上，核心议题均由社区贡献者 `woxinsj` 发起：
*   **#2040 [OpenClaw 的五大薄弱点]**(https://github.com/netease-youdao/LobsterAI/issues/2040)：深度对比了竞品 OpenClaw 的短板。文章指出 OpenClaw 在“记忆缺失”、“恶意技能漏洞（63天爆出138个漏洞）”、“Token成本失控”及“部署繁琐”方面存在严重痛点。这侧面反映出 LobsterAI 社区对**降低部署成本、强化内置安全机制以及构建长期记忆能力**的强烈诉求与关注。
*   **#2041 [最大的瓶颈不是进化算法，而是记忆系统]**(https://github.com/netease-youdao/LobsterAI/issues/2041)：结合外部文章对标了 LobsterAI 的 `self-evolver` 系统。作者指出，虽然系统具备轨迹记忆和 `.learnings/` 输出，但在长期记忆（声明式/结构化）和跨场景长周期任务上仍有差距，这为项目后续的 AGI 能力演进提供了极具价值的架构级参考。

## 5. Bug 与稳定性
今日记录了一个影响核心体验的模块配置 Bug，目前**尚无修复 PR**：
*   **严重程度：中** | **#2039 [Dreaming 开关配置失效]**(https://github.com/netease-youdao/LobsterAI/issues/2039)：
    *   **现象**：Web UI 中的 Dreaming 开关（`/dreaming on`）存在 Upstream Bug，会将配置写入 `memory-core` 不认可的路径，导致 Gateway 重启后配置丢失。
    *   **根因分析**：需要 `memory-core` 的 schema 底层允许 `dreaming` 属性才能彻底解决。目前用户需手动执行 `check_dreaming_schema.py` 作为临时缓解方案。

## 6. 功能请求与路线图信号
从近期处于活跃状态的 PR 可以捕捉到项目在功能增强方面的明确信号，多 Agent 协作与数据流转是下一阶段的重点方向：
*   **批量数据导出能力**：PR [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) 试图在 Cowork 批量模式下增加导出功能，支持将选中会话结构化为 JSON 文件保存，这对多轮对话的数据评估与云同步至关重要。
*   **多 Agent 任务调度优化**：PR [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) 致力于解决多 Agent 状态下的定时任务归属问题，新增了 Agent 选择器 UI，避免所有任务仅能隐式归属 main Agent 导致的逻辑混乱。这两个 PR 均处于 Open/Stale 状态，有望在代码审阅后纳入下一版本。

## 7. 用户反馈摘要
从今日的 Issues 摘要中可以提炼出高级用户/开发者的核心痛点：
*   **多 Agent 管理认知负担重**：用户在使用定时任务等功能时，难以感知任务到底归属于哪个 Agent（Issue #2030 背景）。
*   **长期记忆系统不够完善**：相较于理想的进化形态，目前的 `skill-self-evolver` 在跨任务的声明式、结构化记忆积累上仍显薄弱（Issue #2041 背景）。
*   **配置与状态持久化存在隐患**：网关重启导致关键配置（如 Dreaming 状态）丢失，暴露了底层 Schema 验证机制的不严谨，影响了高级功能的可用性（Issue #2039 背景）。

## 8. 待处理积压
项目当前存在需要维护者紧急介入的“积压/过时”风险，以下两个高质量 PR 自 2026年4月7日提交以来，长期处于未合并状态，建议重点跟进审查：
*   **[PR #1529] 批量模式导出功能支持**：[链接](https://github.com/netease-youdao/LobsterAI/pull/1529)（已停滞超 1.5 个月）
*   **[PR #1530] 多 Agent 定时任务归属选择**：[链接](https://github.com/netease-youdao/LobsterAI/pull/1530)（已停滞超 1.5 个月，解决了多 Agent 环境下的核心痛点）

---
*数据来源：GitHub LobsterAI 仓库监控* | *分析生成时间：2026-05-24*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026-05-24 Moltis 开源项目动态日报。

---

# 📊 Moltis 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时内，Moltis 项目保持了**极高的开发活跃度与问题修复效率**。项目共处理了 **8 个 Issues（3 个关闭，5 个新开）和 4 个 PRs（3 个合并，1 个待合并）**。从数据来看，核心维护者（如 @penso）对社区反馈响应迅速，今日新增的多个 UI 和配置 Bug 均在同日内得到了修复并合入主干。此外，一项关于将“Agent 作为能力边界”的重大架构 PR 已经提交，标志着项目在多智能体和多租户场景下的抽象能力正在迎来显著升级。

## 2. 版本发布
**无新版本发布。** 
注：虽然今日无正式 Release，但主干分支已合入大量修复代码，预计近期会有一波 Patch 版本或 RC 版本推送。

## 3. 项目进展
今日共有 3 个关键的修复 PR 被合并，项目在易用性、安全性和 UI 表现上取得了实质性进展：

*   **[CLOSED] fix(gateway): register config-declared hooks** ([PR #1048](https://github.com/moltis-org/moltis/pull/1048))
    *   **进展**：修复了 `[hooks]` 配置在运行时未被注册的问题，补充了发现、执行及禁用状态的回归测试。
    *   **关联**：直接解决了 [Issue #1024](https://github.com/moltis-org/moltis/issues/1024)。
*   **[CLOSED] fix(vault): initialize existing password vaults** ([PR #1050](https://github.com/moltis-org/moltis/pull/1050))
    *   **进展**：为已存在密码但未初始化 Vault 的实例提供了认证初始化端点，优化了设置页面的提示逻辑。
    *   **关联**：直接解决了 [Issue #1046](https://github.com/moltis-org/moltis/issues/1046)。
*   **[CLOSED] fix(web): restore light mode syntax highlighting** ([PR #1047](https://github.com/moltis-org/moltis/pull/1050))
    *   **进展**：修复了亮色模式下代码块语法高亮失效的问题，并增加了 Playwright E2E 回归测试。

## 4. 社区热点
今日讨论与关注度的焦点集中在**Agent 架构的扩展性**以及**第三方模型集成的健壮性**上：

*   **核心热点 1：Agent 能力边界与 MCP 架构重构** ([PR #1049](https://github.com/moltis-org/moltis/pull/1049))
    *   **状态**：[OPEN] 待合并
    *   **诉求分析**：由 @penso 提交的重磅 PR，提议将 Agent 设定为“核心能力边界”。未来每个 Agent 预设可以独立控制其模型、MCP 服务器、沙箱策略和技能，并能分配给特定频道（如：儿童模式 vs 家长模式）。这反映了项目正积极向“多角色、多租户”的个人/家庭 AI 助手场景发力。
*   **核心热点 2：MCP 环境变量存在泄漏风险** ([Issue #1054](https://github.com/moltis-org/moltis/issues/1054))
    *   **状态**：[OPEN]
    *   **诉求分析**：开发者 @IlyaBizyaev 报告，通过 `mcp_list` 暴露了 stdio MCP 服务器配置中的环境变量。这是一个严重的安全隐患，表明社区对 MCP 外部工具集成场景下的权限和密钥管理给予了高度关注。

## 5. Bug 与稳定性
今日报告了多个 Bug，但均已被快速修复，显示出项目良好的健康度。按严重程度排列如下：

*   **🚨 高：MCP 环境变量泄漏** ([Issue #1054](https://github.com/moltis-org/moltis/issues/1054))
    *   **现象**：stdio MCP server config 中的 Env vars 会通过 `mcp_list` 暴露给 LLM。目前暂无关联 Fix PR。
*   **🟡 中：OpenAI 兼容提供商 BaseURL 报错无声** ([Issue #1051](https://github.com/moltis-org/moltis/issues/1051))
    *   **现象**：BaseURL 未经验证，且构建失败时不打印日志。暂无关联 Fix PR。
*   **🟢 低：自动生成会话标题失效** ([Issue #1053](https://github.com/moltis-org/moltis/issues/1053)) - 暂无关联 Fix PR。
*   **🟢 低：UI 模型选择器不适配长版本号** ([Issue #1052](https://github.com/moltis-org/moltis/issues/1052)) - 暂无关联 Fix PR。
*   **🟢 低：亮色模式代码高亮失效 / 密码 Vault 初始化死胡同 / Hooks 不生效** ([Issue #1045](https://github.com/moltis-org/moltis/issues/1045), [Issue #1046](https://github.com/moltis-org/moltis/issues/1046), [Issue #1024](https://github.com/moltis-org/moltis/issues/1024)) - **均已在今日通过 PR 修复。**

## 6. 功能请求与路线图信号
*   **精细化的 Agent 资源控制** ([Issue #553](https://github.com/moltis-org/moltis/issues/553))
    *   **诉求**：用户 @bsarkisov 请求增加单 Agent 级别的 `sloopback` 和超时设置。
    *   **路线图信号**：这一功能请求与今日开放的 [PR #1049](https://github.com/moltis-org/moltis/pull/1049)（将 Agent 作为能力控制边界）的底层设计**不谋而合**。预计在 #1049 合并后，此功能的实现将变得非常自然，极有可能被纳入下一阶段的版本迭代中。

## 7. 用户反馈摘要
从近期的 Issue 标题和描述可以提炼出当前真实用户的几个典型痛点：
1.  **私有化部署与模型接入困难**：用户频繁接入 OpenAI 兼容的第三方模型，但目前的 BaseURL 缺乏校验和错误日志，导致配置失败时无从下手（#1051）。
2.  **MCP 生态安全性担忧**：用户已经开始深度使用 MCP (Model Context Protocol) servers，但发现了环境变量隔离不当的问题（#1054），说明用户正在将其用于包含敏感密钥的生产级工具集成。
3.  **UI 细节体验有待打磨**：包括模型版本号显示溢出（#1052）、亮暗色主题切换后的代码高亮丢失（#1045）等。

## 8. 待处理积压
虽然项目整体响应极快，但仍有以下重要事项需要维护团队持续关注：

1.  **安全问题亟待确认**：[Issue #1054](https://github.com/moltis-org/moltis/issues/1054) 涉及 MCP 环境变量泄漏，建议维护者 @penso 尽快评估影响范围并确认修复计划。
2.  **架构 PR 待评审**：[PR #1049](https://github.com/moltis-org/moltis/pull/1049) 涉及核心架构重构（Agents as capability boundaries），代码量可能较大，需要核心团队投入时间进行深度 Code Review。
3.  **长期悬而未决的 Enhancement**：[Issue #553](https://github.com/moltis-org/moltis/issues/553) 自 4 月初创建以来仅有一条评论，建议在 #1049 落地后重新评估其优先级。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project daily report for CoPaw (QwenPaw) based on the provided data.

---

# CoPaw (QwenPaw) 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目保持了**极高的社区活跃度与良好的开源健康度**。虽然没有发布新版本或合并任何代码，但社区新增了 10 个活跃的 Issue，贡献者提交了 2 个待处理的重要 PR，同时官方成功修复并关闭了 1 个历史遗留的高危 Bug。从讨论内容来看，目前项目的重心正向**MCP（Model Context Protocol）兼容性、底层架构的非侵入式扩展、以及记忆机制优化**方向倾斜。

## 2. 版本发布
- **今日无新版本发布。** 项目当前最新版本停留在 `v1.1.8.post1`。

## 3. 项目进展
今日虽无 PR 被合并，但有 2 个极具价值的首发贡献者（first-time-contributor）PR 正在等待 Maintainer 审核，若能顺利合入将显著提升项目功能版图：
- **[PR #4630](https://github.com/agentscope-ai/CoPaw/pull/4630)**: `feat(mcp): enhance MCP management with marketplace...`
  引入了 MCP 市场、连接健康检查以及客户端密钥验证功能。这将大幅降低用户配置各类 MCP 服务器的门槛。
- **[PR #4622](https://github.com/agentscope-ai/CoPaw/pull/4622)**: `plugin(datapaw): add data-analysis plugin with 12 BI skills`
  新增了 `DataPaw` 数据分析插件，内置了 12 项 BI 技能。这标志着 QwenPaw 正在从单纯的对话助手向专业领域的生产力工具拓展。

## 4. 社区热点
今日讨论最为密集、诉求最强烈的 Issue 围绕**前端体验与底层扩展**展开：
- **前端显示问题**：[Issue #4644](https://github.com/agentscope-ai/CoPaw/issues/4644) 报告了控制台中 Tool calls 无法实时显示的问题，引发了 3 条评论讨论。此类“无报错但体验受损”的 Bug 往往最影响用户直观感受。
- **架构扩展性探讨**：[Issue #4642](https://github.com/agentscope-ai/CoPaw/issues/4642) 提出关于“插件扩展、工作目录”的建议。用户直言不讳地指出当前 QwenPaw 的非侵入式扩展能力不及竞品（如 OpenClaw），呼吁解耦核心代码。这类 RFC 级别的建议是项目演进的重要信号。
- **重复提案**：[Issue #4640](https://github.com/agentscope-ai/CoPaw/issues/4640) 与 [Issue #4639](https://github.com/agentscope-ai/CoPaw/issues/4639) 用户连续提交了两次相同提案，呼吁增加“会话结束自动总结机制（Memory Archiving）”，反映了当前记忆系统输入端（自动沉淀）的强烈痛点。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性和兼容性的 Bug，部分问题影响较为严重：
1. **🔴 严重 (已解决)**：[Issue #4265](https://github.com/agentscope-ai/CoPaw/issues/4265) 读取对话日志触发循环压缩导致内存耗尽、SSH卡死。此问题已于今日**关闭**，系统在极端上下文处理下的稳定性得到修复。
2. **🟠 中等**：[Issue #4643](https://github.com/agentscope-ai/CoPaw/issues/4643) MCP OAuth 实现不支持在令牌交换期间发送 `client_secret`。这导致项目无法连接要求机密 OAuth 2.0 客户端的 MCP 服务器，阻断了部分企业级集成。
3. **🟡 低等**：[Issue #4646](https://github.com/agentscope-ai/CoPaw/issues/4646) MCP 工具 Schema 校验器将有效的布尔值错误转换为对象，影响特定工具的调用。
4. **🟡 低等**：[Issue #4641](https://github.com/agentscope-ai/CoPaw/issues/4641) 子进程无法获取 `env set` 设置的环境变量（仅继承启动时的快照），导致执行脚本时存在状态不一致。

## 6. 功能请求与路线图信号
从今日的新增 Issue 中，可以提取出项目近期可能演进的方向：
- **多端协同与移动端支持**：[Issue #4645](https://github.com/agentscope-ai/CoPaw/issues/4645) 提出让桌面宠物连接远程守护进程，[Issue #4635](https://github.com/agentscope-ai/CoPaw/issues/4635) 提出完善移动端 WebUI。这表明社区希望 QwenPaw 能够打破“单机限制”，实现云端部署、多端控制。
- **Token 用量感知**：[Issue #4647](https://github.com/agentscope-ai/CoPaw/issues/4647) 请求在回复底部显示 token 消耗和速度，说明用户对大模型的使用成本和性能监控提出了更高要求。
- *结合 PR 来看*：Maintainers 目前正在大力建设**插件生态（如 DataPaw）** 和 **MCP 管理中心（如 PR #4630）**，基于此架构，未来非侵入式扩展（Issue #4642 提及的 Hook/Skills 扩展）极有可能会被纳入后续大版本的 Roadmap 中。

## 7. 用户反馈摘要
分析今日 Issues 的详细内容，提炼出用户的真实反馈如下：
- **用户痛点**：
  1. **UI 交互盲区**：Web 端工具调用的静默执行（不实时显示）让用户感到困惑（#4644）。
  2. **Agent 记忆遗忘**：Agent 任务完成后不会自动写入 MEMORY.md，导致长期记忆如同“摆设”，需要用户反复提醒“记下来”（#4640）。
  3. **环境隔离问题**：工具调用的环境变量与 Agent 主体环境不同步（#4641）。
- **正面反馈与认可**：
  1. 桌面宠物被寄予厚望，用户正积极思考如何将其与服务器端长驻进程结合使用（#4645）。
  2. 开发者正在积极围绕 QwenPaw 开发重量级插件（包含 12 项 BI 技能的 DataPaw），说明项目提供的 Plugin 机制已初步具备吸引力。

## 8. 待处理积压
当前待合并的 PR 均为社区核心贡献，处于首次提交阶段，急需 Maintainer 进行 Code Review 推进：
- **待审核 PR**：
  - [PR #4622](https://github.com/agentscope-ai/CoPaw/pull/4622) (DataPaw 插件)
  - [PR #4630](https://github.com/agentscope-ai/CoPaw/pull/4630) (MCP 管理增强)
- **重复的无效 Issue**：
  - [Issue #4640](https://github.com/agentscope-ai/CoPaw/issues/4640) 与 [Issue #4639](https://github.com/agentscope-ai/CoPaw/issues/4639) 内容完全一致，建议官方尽早关闭其中一个并打上标签，以保持 Issue 列表的清爽。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-24)

**项目定位**：Local-first 个人 AI 助手基础设施
**分析师**：AI 智能体与个人 AI 助手开源项目观察

---

### 1. 今日速览
过去 24 小时内，ZeptoClaw 项目呈现出**极高的人工干预活跃度与高度自动化的依赖维护节奏**。项目核心维护者 `qhkm` 大量合并在本月初集中提交的文档对齐与工具增强 PR，一口气清理了 **14 个 PR**（绝大多数为 dependabot 自动生成的依赖升级）。同时，项目启动了核心 Agent 循环向中间件 管道迁移的第二阶段重构。整体来看，项目今日的运作重心在于“扫清技术债务与依赖安全警报，为深度架构重构铺路”，项目健康度保持优良。

### 2. 版本发布
**无新版本发布**。项目目前正处于核心架构（`process_message` Pipeline 化）的重构攻坚期，预计将在相关重构 PR 合并后迎来下一个版本。

### 3. 项目进展
今日共有 **14 个 PR 被合并/关闭**，主要由核心开发者推进，进展显著：

*   **架构重构部署**：
    *   PR [#583](https://github.com/qhkm/zeptoclaw/pull/583) 被关闭（未合并）。这是将 `process_message` 切换到中间件 Pipeline 的第二阶段尝试，但因仅停留在脚手架合约层面而未被采纳，为后续 Phase 2b 提供了经验。
*   **工具增强与自我演进**：
    *   PR [#571](https://github.com/qhkm/zeptoclaw/pull/571) 已合并：重写了 `longterm_memory` 工具的 `description()`，引入了显式的触发短语指引，标志着项目正式借鉴 Hermes Agent 的“自我改进循环”机制。
    *   PR [#566](https://github.com/qhkm/zeptoclaw/pull/566) 与 [#570](https://github.com/qhkm/zeptoclaw/pull/570) 已合并：全面对齐了项目 README、包元数据和贡献指南中的定位，基于客观事实淡化了针对同类竞争项目（如 NemoClaw 等）的未经证实对比声明，彰显了项目日趋成熟的社区心态。
*   **依赖与安全维护（批量处理）**：
    *   合并了针对 Rust 核心库的升级：包括 [`tokio`](https://github.com/qhkm/zeptoclaw/pull/573) (1.52.1)、[`axum`](https://github.com/qhkm/zeptoclaw/pull/575) (0.8.9)、[`rustls`](https://github.com/qhkm/zeptoclaw/pull/579) 等。
    *   合并了前端文档站 Astro/Starlight 及 Docker base image (Debian) 的版本升级。

### 4. 社区热点
*   **聚焦核心架构升级**：Issue [#593](https://github.com/qhkm/zeptoclaw/issues/593) 是今日唯一新开且处于 OPEN 状态的 Issue。它详细阐述了重构计划 Phase 2b 的路径——要求彻底将 `process_message` 切换至新架构，而非仅停留于脚手架代码。这反映了维护者对代码质量的严谨把控。
*   **安全合规风暴**：PR [#594](https://github.com/qhkm/zeptoclaw/pull/594) 引发了大量关注。由于项目在 `deny.toml` 中采用了零容忍（`ignore = []`）的安全策略，昨日 RustSec 数据库的更新导致全仓库 CI 处于红灯阻断状态。此 PR 旨在通过升级相关依赖以恢复 CI 流水线，是当前项目推进的最高优先级阻碍项。

### 5. Bug 与稳定性
*   **CI 流水线全线阻断 (严重)**：如上文所述，由于最新 RustSec 告警触发，所有开放 PR 的安全审计与 Cargo deny 检查均已失败。目前修复方案已提交至 PR [#594](https://github.com/qhkm/zeptoclaw/pull/594)（状态：OPEN），等待合并。
*   **暂无用户端 Bug 反馈**：今日关闭的 Issues 不涉及严重的运行时崩溃或逻辑缺陷，表明当前发行版本在稳定性上表现良好。

### 6. 功能请求与路线图信号
*   **Agent 智能化演进（路线图信号）**：Issue [#569](https://github.com/qhkm/zeptoclaw/issues/569) 及其对应的 PR [#571](https://github.com/qhkm/zeptoclaw/pull/571) 揭示了项目下一阶段的重点——**提高工具调用的自发性与准确率**。通过在工具描述中内嵌明确的触发词，引导大语言模型在合适的场景下主动调用记忆模块，从而向真正的“具备长期记忆的智能体”演进。
*   **底层架构彻底解耦（进行中）**：基于 Issue [#593](https://github.com/qhkm/zeptoclaw/issues/593)，项目正在剥离传统的硬编码核心循环，这将为未来无侵入式接入第三方中间件、构建复杂智能体工作流打下基础。

### 7. 用户反馈摘要
根据近期的 PR 与提交记录分析，目前项目的用户/开发者反馈更多体现在**对架构设计的深度探讨与文档规范要求上**。例如，维护者主动清理了对其他竞品项目的不实比较声明（PR [#570](https://github.com/qhkm/zeptoclaw/pull/570)），表明用户群体或贡献者对项目定位有着专业且严谨的期待；MQTT 频道因上游依赖问题被显式标记为“搁置状态”（PR [#566](https://github.com/qhkm/zeptoclaw/pull/566)），侧面反映出物联网场景的早期用户对该特性的高度关注。

### 8. 待处理积压
*   **需优先处理的 Pipeline 重构**：新开的 Issue [#593](https://github.com/qhkm/zeptoclaw/issues/593) 已经指明了明确的开发目标，需要维护者尽快提交包含实质性逻辑替换的 PR。
*   **亟待合并的安全补丁**：PR [#594](https://github.com/qhkm/zeptoclaw/pull/594) 目前仍处于 OPEN 状态。由于它阻断了整个项目的 CI 合并通道，强烈建议核心维护者立即进行 Code Review 并予以合并。
*   **长期挂起的依赖升级**：仍有部分由 dependabot 提交的 PR 处于 OPEN 状态（如 Astro 大版本升级 [#578](https://github.com/qhkm/zeptoclaw/pull/578) 和 Starlight 升级 [#572](https://github.com/qhkm/zeptoclaw/pull/572)），需评估兼容性后尽快合并或关闭，以防止技术债堆积。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目保持了**高度活跃**的开发与社区互动状态。系统共处理了 50 条 Issue（新开/活跃 42，关闭 8）和 50 条 PR 更新（待合并 32，合并/关闭 18）。尽管没有发布新的软件版本，但社区在终端交互（TUI）、企业通讯渠道（Lark/Feishu）以及网关安全等核心组件上贡献了大量高质量代码与架构讨论。整体来看，项目正处于 v0.8.0 正式版发布前的密集打磨和缺陷修复阶段，Issue 积压和 PR 合并延迟现象需要维护团队进一步关注。

## 2. 版本发布
**无**。
（注：当前代码库活跃版本指向 `v0.8.0-beta-1`，今日无新 tag 或 Release 产生。）

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，主要在文档规范化、渠道修复和构建系统上取得了实质性进展：
* **文档与本地化稳定**：PR [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692)（修复过时的 RUST_LOG 目标）和 [#6696](https://github.com/zeroclaw-labs/zeroclaw/pull/6696)（明确翻译同步策略）被合并，显著改善了开发者排错文档的准确性；PR [#6868](https://github.com/zeroclaw-labs/zeroclaw/pull/6868) 修复了 gettext 翻译引起的大量 diff 噪音。
* **渠道功能增强**：PR [#6843](https://github.com/zeroclaw-labs/zeroclaw/pull/6843) 成功将 `message_id` 暴露给 Agent 的渠道上下文，增强了多轮对话追踪能力。
* **工作流工具集成**：PR [#6481](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) 关闭，为 Agent 引入了基础的 Jira 工单操作能力（列表、流转、创建）。

## 4. 社区热点
今日社区讨论最密集的区域集中在**配置灵活度**和**架构层级重构**：
* **配置缺失引发降级**：Issue [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)（评论数 5）。用户反馈 Schema v3 中缺失了 `show_tool_calls` 配置项，导致工具调用细节无法在响应中展示，严重影响了开发调试体验。
* **架构层级反转提案**：Issue [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864)（评论数 1）。由社区开发者提出，建议反转 `zeroclaw-channels` 与 `zeroclaw-runtime` 的依赖关系，将编排器移入 runtime，引发了关于系统解耦的深入探讨。
* **网关安全加固**：Issue [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127)（评论数 4）。针对凭据解析失败时的静默回退行为，社区提出了高优先级的增强需求，要求在网关层面对错误“大声报错”而非静默失败。

## 5. Bug 与稳定性
今日新增及活跃的 Bug 报告涵盖了系统各个层面，其中多个影响到了工作流的正常执行：
* **P1 - SPA 路由污染 (v0.8.0-beta-1)**：Issue [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862)。Gateway 的 SPA 回退机制错误地将 `index.html` 响应给未实现的 `/api/*` 路由，导致前端 Dashboard 的 JSON 解析全面崩溃。（目前状态：Accepted，暂无关联 Fix PR）。
* **P1 - Email 凭据覆盖失效**：Issue [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881)。SMTP 凭据的独立配置被意外的空字符串覆盖，导致邮件渠道受阻。
* **P2 - 内存上下文溢出**：Issue [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)。在长对话中，上下文窗口填满后导致模型产生严重的幻觉和主题漂移，这对 Agent 的长期记忆管理提出了挑战。
* **P3 - Channels 崩溃循环**：Issue [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)。如果所有配置的 Channel 均为 `enabled=false`，Supervisor 会陷入每 2 秒一次的重启死循环。

## 6. 功能请求与路线图信号
从当前的活跃 PR 和 Issue 来看，v0.8.0 及后续版本将重点发力以下领域：
* **TUI (终端用户界面) 全面落地**：结合 Tracker Issue [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) 和庞大的 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)（集成 Zeroclaw TUI），项目正在将交互重心向开发者友好的终端环境倾斜。
* **ACP 协议扩展**：Issue [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) 提出支持 diff 展示和文件提案消息类型，结合 PR [#6852](https://github.com/zeroclaw-labs/zeroclaw/pull/6852) 在 Lark 渠道实现的 `request_approval()`，可以看出 ZeroClaw 正在构建一套跨平台的、支持复杂人工介入的审批流机制。
* **深度推理原生支持**：PR [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) 正在为 Anthropic 和 Bedrock 引入原生的 Extended Thinking（深度推理）支持，这将极大提升 Agent 在复杂任务下的逻辑规划能力。
* **Web3/TEE 推理集成**：PR [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) 提出了接入 NEAR AI Cloud 提供基于 TEE（可信执行环境）的模型推理提供商。

## 7. 用户反馈摘要
* **本地部署痛点明显**：多位用户反馈在 Orange Pi 等小型设备上使用 Podman 或结合 llama-server 本地部署时，容易出现配置文件不生成、Provider 报错（405 Method Not Allowed）等问题（参考 [#3852](https://github.com/zeroclaw-labs/zeroclaw/issues/3852), [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)）。
* **配置层级混乱引发困惑**：用户指出 `runtime_profiles` 下的 `max_tool_iterations` 实际上并不生效，必须配置在 `agents` 层级，这种默认行为的不透明增加了调试成本（参考 [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)）。
* **生态兼容性需求强烈**：开发者呼吁能在 Xcode 环境中将 ZeroClaw 作为主代理使用（参考 [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)），并希望官方能尽早将 Logo 加入 Agent Skills 标准客户端列表（参考 [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)）。

## 8. 待处理积压
当前仓库有超过 30 个待合并的 PR 和大量处于 Blocked/Needs-action 状态的 Issue，以下几项尤为关键，需要维护团队尽快介入：
* **大型 PR 审查阻塞**：Nix 构建支持 PR [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) 和企业微信 WebSocket 集成 PR [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) 已开启多日，亟待核心维护者进行 Review。
* **代码库历史清理**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 正在追踪 3 月份因批量回滚丢失的 153 个提交，Issue [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) 建议清理仓库中 200 多个无用的分支，这些技术债务的清理对社区协作至关重要。
* **Security/Feature RFC 冻结**：关于 Memory Strategy 解耦的高层级架构 RFC（Issue [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）目前处于 `needs-maintainer-review` 状态，其定论将直接影响后续记忆模块的开发走向。

</details>