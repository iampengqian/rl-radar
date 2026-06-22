# OpenClaw 生态日报 2026-06-23

> Issues: 272 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 22:30 UTC

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

# 📊 OpenClaw 项目动态日报
**日期**: 2026-06-23 | **分析模型**: AI 开源生态追踪器

---

### 1. 今日速览
OpenClaw 在过去 24 小时内保持了**极高的活跃度**，共处理了 272 条 Issue 动态（187 条活跃，85 条关闭）和 500 条 PR 更新（88 条合并/关闭）。项目刚刚发布了 **v2026.6.10-beta.2** 版本，引入了对话自动快速模式和更可靠的模型路由机制。然而，社区当前的核心焦点依然集中在**网关内存泄漏、会话状态锁死以及跨模型提供商路由**等底层稳定性问题上。庞大的 PR 积压（412 条待合并）表明项目正处于功能迭代与深度架构重构的交汇期。

---

### 2. 版本发布
### 🚀 [v2026.6.10-beta.2](github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.2) (发布于 2026-06-22)
本次 Beta 版本主要针对 Agent 对话的响应延迟和底层模型调度进行了优化：
*   **Highlights**:
    *   **对话自动快速模式**: OpenClaw 现在可以在短对话轮次中自动启用快速模式，并在长时间运行的任务中无缝切换回常规模式，同时保证了回退和交付行为的边界控制。([#85104](github.com/openclaw/openclaw/pull/85104)) *感谢 @alexph-dev 和 @vincentkoc*
    *   **更可靠的模型路由**: 针对 Zai 模型的路由机制进行了可靠性提升（完整更新日志被截断，推测包含了多项模型调度的静默修复）。

---

### 3. 项目进展
今日共有 88 个 PR 被合并或关闭，项目在 CI 自动化、网关状态恢复和多渠道插件适配方面取得了实质性进展：
*   **自动化与质量保证 (QA)**: [PR #91502](github.com/openclaw/openclaw/pull/91502) 成功将 `crabline` 引入为 QA 实验室的开发依赖，使 QA 配置文件的通道驱动变得可执行；[PR #95872](github.com/openclaw/openclaw/pull/95872) 将 TUI PTY 测试平滑迁移至主 Linux Node CI 分片中，优化了测试工作流。
*   **WebChat 状态修复**: [PR #89800](github.com/openclaw/openclaw/pull/89800) 修复了 WebChat 当前会话状态解析的逻辑，确保在回退前使用完整的请求者密钥。
*   **社区/文档维护**: 维护者 @RomneyDa 密集提交了多个 CI 维护脚本（如 [PR #95870](github.com/openclaw/openclaw/pull/95870) 恢复 macOS 和 Windows 的 QA 门控），为核心版本的发布保驾护航。

---

### 4. 社区热点
当前社区讨论最热烈的问题揭示了系统在**高并发和长时间运行**下的状态管理痛点：
*   🥇 **[Issue #88838](github.com/openclaw/openclaw/issues/88838)** (34 💬): **核心会话 SQLite 迁移**。维护者与贡献者正在深入讨论通过访问器接缝进行底层 SQLite 架构升级的细节，这是目前项目最大的技术债之一。
*   🥈 **[Issue #88312](github.com/openclaw/openclaw/issues/88312)** (17 💬, 4 👍): **Codex 回归 Bug**。用户反馈在多工具 Agent 轮次中，系统无法确认轮次完成导致中断，这是 2026.5.27 版本带来的严重回归。
*   🥉 **[Issue #86538](github.com/openclaw/openclaw/issues/86538)** (13 💬) & **[Issue #91588](github.com/openclaw/openclaw/issues/91588)** (13 💬): 均涉及核心交付链路阻塞。前者是 Session JSONL 写锁超时阻塞子 Agent 通道；后者是网关内存泄漏导致 OOM 崩溃。

---

### 5. Bug 与稳定性
今日报告的严重 Bug 集中在资源泄漏、死锁和跨提供商兼容性上：

*   🔴 **[P0] 网关内存泄漏导致频繁 OOM** ([#91588](github.com/openclaw/openclaw/issues/91588)): 网关进程 RSS 在 2-3 天内从 350MB 飙升至 15.5GB，最终被系统 OOM Killer 终结并触发无限重启。*暂无对应公开 fix PR。*
*   🔴 **[P1] 升级 v2026.6.9 导致记忆存储静默重置** ([#95495](github.com/openclaw/openclaw/issues/95495)): 升级后未进行数据迁移，强制用户对 1499 个文件进行全量重新向量化。*目前已有 linked-pr-open。*
*   🟠 **[P1] 跨提供商故障转移时 ID 格式不兼容** ([#95623](github.com/openclaw/openclaw/issues/95623)): 包含特殊字符的 OpenAI 响应 ID 在重播给 Anthropic 时引发 400 错误，直接导致会话“砖块化”（不可用）。
*   🟠 **[P1] Codex 命令执行空间本地路由失效** ([#92141](github.com/openclaw/openclaw/issues/92141), 已关闭): 尽管已连接 Windows 节点，WebChat/OpenAI Codex 会话仍只暴露直接本地执行，无视已连接的远程节点能力。

---

### 6. 功能请求与路线图信号
从 Issue 和 PR 汇聚的情况来看，OpenClaw 未来的迭代方向将高度侧重于**底层存储多样化和 MCP 协议深化**：

*   **底层数据库解绑**: [Issue #90370](github.com/openclaw/openclaw/issues/90370) 强烈呼吁支持使用 PostgreSQL 替代 SQLite，以解决多 Agent 高并发下的性能瓶颈和数据孤岛（如结合 pgvector）。该诉求获得了大量点赞，是呼声极高的路线图候选项。
*   **MCP 呼叫者上下文注入**: [PR #75118](github.com/openclaw/openclaw/pull/75118) 正在推动为远程 MCP 服务器注入 Agent/账户/消息通道的上下文，这将极大增强 OpenClaw 与外部工具生态的联动能力。
*   **记忆检索结构优化**: [Issue #95724](github.com/openclaw/openclaw/issues/95724) 建议按源目录而非 Agent 粒度构建向量索引，消除同一工作空间下多 Agent 的冗余索引计算。

---

### 7. 用户反馈摘要
从底层 Issue 的讨论中，可以提炼出真实用户在生产环境中的三大痛点：
1.  **远程与私有网络支持薄弱**: 多位用户反馈 `web_fetch` 忽略了 `NO_PROXY` 环境变量 ([#93807](github.com/openclaw/openclaw/issues/93807))，以及 `exec` 无法访问私有局域网主机 ([#94032](github.com/openclaw/openclaw/issues/94032))。**企业内网部署体验极差。**
2.  **静默失败与状态死锁极多**: 子 Agent 超时后不通知父级会话 ([#89095](github.com/openclaw/openclaw/issues/89095))，或锁文件 (.jsonl.lock) 不释放导致会话永久损坏 ([#95833](github.com/openclaw/openclaw/issues/95833))。用户抱怨最多的是“表面上执行成功，但消息直接被吞或回复卡住”。
3.  **环境迁移的阵痛**: 2026.5.x 到 2026.6.x 的多次升级引入了存储位置迁移和 Token 认证状态丢失，用户强烈要求在发生破坏性变更时提供明确的升级警告与平滑迁移工具。

---

### 8. 待处理积压
当前有高达 412 条 PR 处于待合并状态，部分关键路径的 Issue 亟待维护者决策：
*   ⚠️ **底层存储重构停滞**: [Issue #88838](github.com/openclaw/openclaw/issues/88838) 的 SQLite 迁移已进入尾期（文件支持的接缝采用阶段），但“transcript/plugin 相关的身份尾部”代码仍需维护者拍板，等待时间较长。
*   ⚠️ **长期挂起的通道体验修复**: [PR #83988](github.com/openclaw/openclaw/pull/83988) 修复了 Telegram 机器人发语音时文本“闪烁/抖动”的糟糕体验，已标记为 "ready for maintainer look" 一个多月，亟待合并。
*   ⚠️ **子 Agent 生命周期缺口**: [PR #95847](github.com/openclaw/openclaw/pull/95847) 修复了后台/Cron 任务子 Agent 完成度账单核算错误的问题，目前仍处于 Open 状态，影响大型 Agent 树的准确性。

---

## 横向生态对比

以下是基于 2026 年 6 月 23 日各开源项目动态数据，为您生成的个人 AI 助手与智能体开源生态横向对比分析报告。

---

# 📊 2026.06.23 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体可用”向“高并发、多渠道、企业级基础设施”跃升的关键重构期**。项目核心重心普遍从早期的功能验证，转向解决长期运行下的**状态持久化、跨模型提供商兼容性以及内存/资源泄漏**等深水区问题。以 MCP (Model Context Protocol) 为代表的外部工具链路标准化已成为行业共识，而基于 PostgreSQL 的关系型存储替代、移动端/PWA 适配以及更细粒度的权限管控，构成了当下各大项目竞逐的“基础设施升级三部曲”。

## 2. 各项目活跃度对比
*(注：活跃度评估综合考量 Issue/PR 处理量、版本发布节奏及积压情况)*

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 健康度与状态评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | 272 | 500 | v2026.6.10-beta.2 | 🟡 **高负载/高危**<br>生态庞大但存在严重 P0 级 Bug（OOM）及 412 个 PR 积压。 |
| **Hermes Agent** | 50 | 50 | 无 | 🟢 **高度活跃/重构期**<br>专注插件化与跨平台，高频修复安全与凭证隔离问题。 |
| **CoPaw (QwenPaw)** | 72 (含PR) | 72 (含Iss) | 无 | 🟢 **爆发增长/需收敛**<br>移动端适配密集，但面临进程冻结等底层稳定性挑战。 |
| **ZeroClaw** | 50 | 50 | 无 | 🟢 **架构演进/极高要求**<br>坚定推进 Rust+Wasm 架构与 SLSA 级供应链安全。 |
| **PicoClaw** | ~10 | 44 | Nightly v0.3.0 | 🟢 **稳步迭代/加固期**<br>聚焦消息总线背压、国产模型兼容性及底层健壮性。 |
| **IronClaw** | 43 | 25 | 无 | 🟢 **密集开发/性能调优**<br>推进 Reborn 架构，重点攻坚并发调度与本地性能瓶颈。 |
| **NanoBot** | 5 | 27 | v0.2.2 (准备中) | 🟢 **稳步冲刺/快速修补**<br>核心团队执行力强，迅速解决网关关闭与上下文扩容。 |
| **LobsterAI** | 5 | 14 | 无 | 🟡 **功能突破/积压严重**<br>Cowork 计划模式亮眼，但核心安全/性能 PR 出现严重停滞。 |
| **NanoClaw** | 0 | 6 | 无 | 🟠 **维护停滞/代码沉寂**<br>Issue 归零，核心通讯与体验修复 PR 长期挂起超 3 个月。 |
| **NullClaw** | 0 | 2 | 无 | ⚪ **平稳静默**<br>无紧急 Bug，聚焦于特定通讯渠道的精细化状态恢复。 |

## 3. OpenClaw 在生态中的定位
作为核心参照物，OpenClaw 展现出了**“双刃剑”般的超大规模生态特征**：
*   **规模与影响力绝对领先**：单日近 800 条的 Issue/PR 动静量远超其他项目，是事实上的生态流量汇聚地。
*   **技术债与架构瓶颈显现**：庞大的用户群体压垮了早期的轻量级设计。SQLite 单线程写入引发的锁死（Issue #88838）、网关内存泄漏引发的频繁 OOM（Issue #91588），以及静默重置用户向量数据，表明其在向企业级高可用演进时遭遇严重阻力。
*   **对比劣势**：相比 ZeroClaw（严格的供应链安全与 Wasm 运行时）、IronClaw（并发调度器与三态权限模型）等后起之秀，OpenClaw 当前显得较为“臃肿”且脆弱。其急需通过底层数据库解绑（如全面拥抱 PostgreSQL）来度过当前的架构危机。

## 4. 共同关注的技术方向
从多个项目的近期动态中，提炼出以下四大确定性技术趋势：

1.  **MCP (Model Context Protocol) 成为工具链事实标准**
    *   *涉及项目*：OpenClaw, NanoBot, IronClaw, CoPaw, ZeroClaw。
    *   *诉求*：全面接入 MCP 协议扩展外部能力，但重点已转移至**生命周期管理**（如重连防崩溃、超时自愈）和**安全管控**（如配置越权拦截、工具级权限审批）。
2.  **脱离 SQLite，拥抱 PostgreSQL / 远程持久化**
    *   *涉及项目*：OpenClaw, ZeroClaw, IronClaw。
    *   *诉求*：面对多智能体并发和海量记忆存储，SQLite 的文件锁和吞吐量成为普遍瓶颈。向企业级 DB（PostgreSQL/Oracle/MySQL）迁移以支持集群部署，成为头部项目的必经之路。
3.  **跨提供商路由与容灾（OpenAI 兼容层深化）**
    *   *涉及项目*：OpenClaw, PicoClaw, CoPaw。
    *   *诉求*：解决特定模型（如 Anthropic、国产大模型）流式输出 ID 冲突导致的“会话砖块化”；以及提供商后端宕机时的无感故障转移。
4.  **跨平台/跨终端触达（IM 与移动端优先）**
    *   *涉及项目*：NanoBot, Hermes Agent, CoPaw, PicoClaw, NanoClaw。
    *   *诉求*：支持 PWA、Telegram/Slack/钉钉/Mattermost 深度集成。智能体正在脱离单一 Web UI，成为随时可被唤醒的后台守护进程。

## 5. 差异化定位分析

*   **OpenClaw & CoPaw：全功能集大成者与国际化枢纽**
    定位于复杂工作流与深度集成。OpenClaw 强调插件广度，而 CoPaw（QwenPaw）在紧随其后的同时，更侧重于对国内生态（钉钉、飞书、国产大模型路由）的深度融合与移动端体验。
*   **ZeroClaw：安全纯净的极客与企业级基座**
    技术架构最为激进。彻底摒弃 Node.js 依赖，强推 Rust + Wasm 运行时，并引入 SLSA 级别安全签署。定位于对数据隐私、沙盒隔离要求极高的“不信任环境”运行时。
*   **IronClaw：专注并发与自我演进的“Reborn”引擎**
    核心差异在于引入了 `TurnRunScheduler` 进行并发回合调度，以及探索 Agent 自动生成技能（SKILL.md）的自我完善系统。定位于长周期、多任务的复杂自治场景。
*   **Hermes Agent：插件化驱动的通信中枢**
    得益于优秀的 `ctx.register_platform` 架构，它在接入各类第三方平台（Home Assistant, Apple AirPlay, 多路复用 IM）上体验最佳，定位于极客用户的“全宇宙连接器”。

## 6. 社区热度与成熟度分层

*   **第一梯队：负重重构期（OpenClaw, ZeroClaw）**
    承受着大量并发反馈，正在经历换骨般的底层架构调整（数据库替换、前端重写），短期内稳定性风险较高。
*   **第二梯队：狂奔冲刺期**
    功能迭代极快（移动端适配、长记忆机制），紧跟核心痛点。但刚刚暴露出进程冻结、OOM 等系统性 Bug，正向稳定收敛。
*   **第三梯队：质量打磨期**
    活跃度中等，没有颠覆性架构变更，专注于清理异步回调、背压处理、路径兼容和网关优雅关闭等深度鲁棒性问题。
*   **第四梯队：停滞预警期（NanoClaw）**
    社区交互趋零，核心修复代码长期悬挂，项目面临被社区遗忘的风险。

## 7. 值得关注的趋势信号（开发者参考）

1.  **“思考-行动”分离机制确立**：LobsterAI 的 Cowork Plan Mode 和 Hermes 的模型自适应慢速思考表明，业界已意识到无脑调用工具的局限性。**先规划后执行**将成为下一代个人 AI 助手的 UI 核心组件。
2.  **长效记忆引擎的独立化**：从简单的上下文截断，演进到基于 SQLite + REPL 召回的 `scroll` 策略，并引入时间衰减排序。Agent 的“记忆系统”正在形成一个独立于 LLM 上下文窗口的工程化模块。
3.  **拒绝执行需附带“结构化上下文”**：NanoClaw 提出的“拒绝并附带原因”功能极具启发。Agent 不应仅返回 declined，而应将人类的拒绝原因作为反馈吃回模型进行策略调整。这种**闭环纠错反馈**将大幅提升 Agent 的自治智能。
4.  **静默失败是最差的体验**：多项目爆发了网关静默 OOM、消息发送 HTTP 200 却被丢弃、流式输出静默崩溃等问题。建议开发者在构建 Agent 系统时，必须强制为所有异步和长耗时任务配置**硬性超时、心跳检测及错误冒泡机制**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这份日报基于 2026-06-22 至 2026-06-23 期间 NanoBot 项目的 GitHub 动态数据生成。

# 🤖 NanoBot 项目动态日报 (2026-06-23)

## 1. 今日速览
NanoBot 项目今日表现出极高的开发活跃度与社区参与度，过去 24 小时内共处理了 **5 条 Issues** 和高达 **27 条 PRs**（其中 12 条已顺利合并/关闭）。
核心开发团队（如 Re-bin、michaelxer）与社区贡献者合力解决了一批阻碍网关稳定性的底层 Bug，大幅优化了 MCP（Model Context Protocol）协议的连接与关闭机制。
整体来看，项目正处于快速迭代的稳固期，生态兼容性（如 Mattermost、PWA）与内存管理能力得到显著扩展。

---

## 2. 版本发布
*注：虽然今日无单独的 GitHub Release tag 发布，但项目通过 PR [#4445](https://github.com/HKUDS/nanobot/pull/4445) 已将版本号推至 **v0.2.2**，并正在为正式发布做准备。*

---

## 3. 项目进展
今日项目整体向前迈出了一大步，重点在于**底层运行稳定性修复**与**配置体验优化**，共有 12 个 PR 被合并或关闭：

*   **🚀 v0.2.2 准备就绪**：[PR #4445](https://github.com/HKUDS/nanobot/pull/4445) 更新了版本号至 `0.2.2`，修复了代码规范问题并更新了 README。
*   **⚙️ 上下文窗口扩容**：[PR #4448](https://github.com/HKUDS/nanobot/pull/4448) 将默认的上下文窗口从 65K 大幅提升至 **200K tokens**，有效减少长对话截断问题。
*   **🛑 网关关闭机制重构**：[PR #4454](https://github.com/HKUDS/nanobot/pull/4454) 和 [PR #4456](https://github.com/HKUDS/nanobot/pull/4456) 彻底修复了前台网关在接收到 `SIGINT`/`SIGTERM` 信号时无法优雅关闭的阻塞问题。
*   **🔌 MCP 连接生命周期修复**：[PR #4450](https://github.com/HKUDS/nanobot/pull/4450) 修复了 AnyIO 在关闭 MCP stdio 传输时引发的任务取消域崩溃错误。
*   **🖥️ WebUI 流式输出优化**：[PR #4451](https://github.com/HKUDS/nanobot/pull/4451)、[#4453](https://github.com/HKUDS/nanobot/pull/4453) 和 [#4455](https://github.com/HKUDS/nanobot/pull/4455) 修复了 UI 在发送消息、历史记录刷新和分支对话时的布局跳动与内容丢失问题。

---

## 4. 社区热点
今日的社区热点集中在**功能扩展**与**对话打断机制**上：

*   **Mattermost 渠道支持**：[PR #4459](https://github.com/HKUDS/nanobot/pull/4459) 引入了大量社区期待的开源协作平台 Mattermost 集成，支持 WebSocket 实时通讯与流式输出编辑，展现了项目极强的多平台扩展能力。
*   **Agent 执行打断机制**：[PR #4397](https://github.com/HKUDS/nanobot/pull/4397) 引入了高度实用的「用户打断」功能。当 LLM 正在执行冗长的工具链时，用户发消息可以触发 Hint，强行中断当前工作流并优先响应用户。这直击当前许多 AI Agent 工具“死板执行”的痛点。

---

## 5. Bug 与稳定性
今日修复和暴露了几个严重程度较高的底层 Bug，极大地提升了系统的健壮性：

1.  🔴 **严重：流式输出重复 ID 导致会话静默崩溃**
    *   **表现**：使用 Anthropic 系列模型流式输出时，`tool_use` ID 重复会导致 API 返回 400 错误，使得该会话永久“变砖”。([Issue #4442](https://github.com/HKUDS/nanobot/issues/4442))
    *   **状态**：已通过 [PR #4443](https://github.com/HKUDS/nanobot/pull/4443) 修复并加入防重保护。
2.  🟠 **高危：MCP streamable_http 重连崩溃**
    *   **表现**：MCP 服务器会话终止触发重连时，因 AnyIO 任务组问题导致网关直接崩溃 `RuntimeError`。
    *   **状态**：已通过 [PR #4441](https://github.com/HKUDS/nanobot/pull/4441) 修复。
3.  🟠 **高危：MCP 配置越权**
    *   **表现**：即使配置了 `enabledTools` 限制，MCP 的资源和提示词仍会被无条件注册，导致权限泄漏。
    *   **状态**：已通过 [PR #4436](https://github.com/HKUDS/nanobot/pull/4436) 及 [PR #4452](https://github.com/HKUDS/nanobot/pull/4452) 修复。

---

## 6. 功能请求与路线图信号
结合今日的 Issues 与 PR，NanoBot 下一步的演进路线图信号非常明确：

*   **移动端优先战略**：[Issue #4457](https://github.com/HKUDS/nanobot/issues/4457) 与对应 [PR #4458](https://github.com/HKUDS/nanobot/pull/4458) 提交了 PWA 支持。允许用户将 NanoBot 添加到手机主屏幕，提供媲美原生 App 的离线缓存与体验。
*   **长期记忆与召回机制**：[PR #4439](https://github.com/HKUDS/nanobot/pull/4439) 增加了只读的 `search_history` 工具，标志着 NanoBot 正在向真正的长记忆 AI 助手演进，LLM 将能够自主检索过往对话上下文。
*   **企业级 IM 深度适配**：[Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) 要求支持 Telegram 最新的富文本格式；[PR #4446](https://github.com/HKUDS/nanobot/pull/4446) 为钉钉增加了禁用私聊与群聊@发送者的功能。这些都属于极可能在下个小版本落地的实用特性。

---

## 7. 用户反馈摘要
通过分析 Issue 讨论，可以提炼出目前用户的几个核心关注点：

*   **痛点 1：上下文容量焦虑**。用户在长代码分析或深度对话时，频繁受到 65K 默认上下文的限制，社区对此多有抱怨。今日默认参数提升至 200K（[PR #4448](https://github.com/HKUDS/nanobot/pull/4448)）将极大提升用户满意度。
*   **痛点 2：非技术用户上手门槛高**。[Issue #4376](https://github.com/HKUDS/nanobot/issues/4376) 指出 `onboard --wizard` 命令对小白用户不够友好，需要了解大量技术细节。用户强烈呼吁提供更平滑、傻瓜化的初始化引导流程。
*   **痛点 3：多平台统一调度**。部分多端用户希望能以守护进程的方式在后台统一管理 NanoBot（[Issue #1461](https://github.com/HKUDS/nanobot/issues/1461)），而不是依赖复杂的 OS 级托管。

---

## 8. 待处理积压
项目当前处于极速冲刺期，有部分具有价值的 PR 和需求处于 Open 状态等待 Review，建议维护者关注：

*   **子 Agent 模型预设** [PR #4291](https://github.com/HKUDS/nanobot/pull/4291)（已挂起 11 天）：允许在 spawn 子 Agent 时使用不同的模型预设。这是一个极其强大的成本控制与效果优化特性，建议尽快评估合并。
*   **初始化向导优化** [Issue #4376](https://github.com/HKUDS/nanobot/issues/4376)：关于降低新手门槛的需求目前已关闭（可能暂时通过文档缓解），但底层交互的优化仍需排期。
*   **当前 15 个待合并 PR**：目前有大量高质量代码（如 Mattermost 支持、PWA 支持、API 富文本支持）处于排队状态，建议在 v0.2.2 发布后尽快进行一轮 Code Review 清理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是 `NousResearch/hermes-agent` 项目 2026 年 6 月 23 日的动态日报：

### 1. 今日速览
- **整体活跃度：极高**。过去 24 小时内，项目处理了 50 条 Issue 更新（45 条新开/活跃）和 50 条 PR 更新，社区参与度和开发节奏保持强劲。
- **焦点领域：跨平台适配与网关稳定性**。今日的讨论和代码提交大量集中在 IM 平台适配（Telegram、Slack、Messenger）、多配置多路复用器的凭证隔离，以及 Windows/macOS 客户端体验的修复。
- **架构演进：插件化推进**。社区积极提交各类外部平台插件（如 Facebook Messenger），并与核心团队持续推进本地化（阿拉伯语 RTL 支持）和底层安全防护（Shell 命令注入拦截）。
- **版本状态：无新版本发布**。当前项目处于 `main` 分支的持续集成与缺陷修复阶段，为下一个大版本进行储备。

### 2. 版本发布
**今日无新版本发布。** 项目最新核心代码依然在 `main` 分支流转，社区正通过高频的 PR 合并与 Bug 修复夯实底层稳定性。

### 3. 项目进展
今日共有 14 个 PR 被合并/关闭，整体在**安全性、状态持久化与多任务调度**方面迈出坚实一步：
*   **[安全防护] 凭证隔离与脱敏**：合并了 [PR #50953](https://github.com/NousResearch/hermes-agent/pull/50953)，彻底修复了 TUI 审批提示符中第三方 API 凭证的脱敏遗漏问题。
*   **[记忆系统] 生命周期修复**：合并了 [PR #51056](https://github.com/NousResearch/hermes-agent/pull/51056)，修复了在没有活跃 Agent 实例时（如桌面端直接操作）`/memory approve` 导致的 "memory store unavailable" 报错。
*   **[文件工具] 路径解析**：合并了 [PR #51060](https://github.com/NousResearch/hermes-agent/pull/51060)，修复了网关进程下 `~` 符号错误展开导致定时任务写错目录的问题。
*   **[定时任务] 作用域隔离**：合并了 [PR #50993](https://github.com/NousResearch/hermes-agent/pull/50993)，确保多 Profile 环境下，Cron 任务仅在其归属 Profile 下执行。

### 4. 社区热点
*   **原生提供商路由请求**：[Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639)（👍10，💬10）。用户强烈呼吁原生支持 Google / Vertex AI，以绕过 OpenRouter 导致的 402 限流和扣费溢价问题。这反映出高级用户对**降低推理成本和提升链路稳定性**的强烈诉求。
*   **后端服务宕机追踪**：[Issue #51045](https://github.com/NousResearch/hermes-agent/issues/51045)。用户集中报告自 6 月 20 日起，通过 Nous Portal 调用 `openai/gpt-5.5` 持续返回 Azure 后端 500 错误。
*   **周五身份自我完善系统**：[PR #51054](https://github.com/NousResearch/hermes-agent/pull/51054)。贡献者提交了极具创新性的身份自我完善循环（包含账本、准入机制），展示了项目在**长效记忆和人格演进**方面的前沿探索。

### 5. Bug 与稳定性
按严重程度（P1-P3）排序今日重点 Bug：
*   **[P1 危险] Shell 命令转义拦截失效**：[PR #47936](https://github.com/NousResearch/hermes-agent/pull/47936) 指出，原有的正则黑名单无法防御通过反斜杠、变量扩展等 Bash 预处理手段的恶意命令注入。（已有 fix PR 处理中）
*   **[P1 危险] Telegram 被移除用户的 Prompt 注入**：[PR #41188](https://github.com/NousResearch/hermes-agent/pull/41188) 修复了被踢出群组的用户仍能将指令注入 Agent 上下文的安全漏洞。（已有 fix PR）
*   **[P2 严重] Telegram Bot Token 泄露**：[Issue #51029](https://github.com/NousResearch/hermes-agent/issues/51029) 报告多路复用器环境下，次要 Profile 错误读取了默认 Profile 的环境变量凭证，导致双 Bot 互相抢占报 409 冲突。
*   **[P2 严重] Slack 网关活跃线程静默掉线**：[Issue #51019](https://github.com/NousResearch/hermes-agent/issues/51019)。因底层使用了无序的 Python `set` 执行 LRU 剔除，导致 Slack 机器人随机不回复用户消息。
*   **[P2 严重] MCP 工具单点故障**：[Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488)。MCP Server 在遇到一次短暂的网络抖动后被永久标记为死锁，无法自愈，只能重启网关。

### 6. 功能请求与路线图信号
*   **模型自适应深度思考**：[Issue #50293](https://github.com/NousResearch/hermes-agent/issues/50293)。用户希望模型能在遇到复杂逻辑时输出 `[ESCALATE_THINKING: true]`，由 Hermes 自动切换至慢速思考模式。这种**模型自路由**机制极可能成为下一代 Agent 的标配。
*   **跨平台跨工具的长效记忆**：[Issue #51062](https://github.com/NousResearch/hermes-agent/issues/51062)。用户希望能带走、迁移在不同 LLM 工具间共享的“核心记忆”。
*   **广泛的图像生成支持**：[PR #51063](https://github.com/NousResearch/hermes-agent/pull/51063)。社区添加了通过 OpenRouter 调用 Nano Banana 和 FLUX.2 的插件，图像处理能力正迅速扩展。

### 7. 用户反馈摘要
*   **痛点 1：Windows 环境兼容性差**：大量用户反馈 Windows 原生路径（如 `\` 与 `/`）导致终端工具失效 [Issue #50594](https://github.com/NousResearch/hermes-agent/issues/50594)；此外 `hermes.exe` 自锁导致无法平滑升级 [Issue #51015](https://github.com/NousResearch/hermes-agent/issues/51015)。
*   **痛点 2：前端 UI 状态割裂**：用户频繁抱怨 TUI 和桌面端在“会话压缩”或“断线重连”时发生串话现象 [Issue #51058](https://github.com/NousResearch/hermes-agent/issues/51058)，或丢失历史聊天文本 [Issue #50713](https://github.com/NousResearch/hermes-agent/issues/50713)。
*   **满意点：高度可扩展架构**：多位开发者对 Hermes 的 `ctx.register_platform` 插件化架构表示赞赏，仅用极小代价就接入了 Home Assistant 和 Apple AirPlay [Issue #50955](https://github.com/NousResearch/hermes-agent/issues/50955)。

### 8. 待处理积压
*   **遗留 Bug [Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639)**：关于原生 Google Provider 的支持，自 4 月提出后积压两个月，建议维护团队针对高优 Feature 给出官方 Roadmap。
*   **遗留 Bug [Issue #38053](https://github.com/NousResearch/hermes-agent/issues/38053)**：macOS 下 `hermes update` 无法自动重启所有 launchd 网关，自 6 月初暴露至今仍在等待架构修复。
*   **遗留 Bug [Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866)**：Qwen 3.6 的 Prompt 模板解析 400 错误，影响大量国内 vLLM 开源使用者，需要修正 Hermes 构建系统提示词的先后顺序逻辑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 (2026-06-23)**
**所属仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 今日速览
PicoClaw 项目在 2026 年 6 月 22 日保持着**高度活跃**的研发态势，单日 PR 处理量达到 44 次（其中合并/关闭 34 个），显示出维护团队在进行密集的代码清理与功能合并。今日核心焦点在于**大模型兼容性修复**与**异步通信能力增强**，特别是针对火山引擎豆包模型 的工具调用泄露问题给出了迅速响应。此外， nightly 版本的持续发布（v0.3.0）以及多个存储层、总线层健壮性补丁的合并，表明项目正为下一个稳定版进行扎实的稳定性铺陈。

### 2. 版本发布
* **[nightly] Nightly Build (v0.3.0-nightly.20260622.287853ab)**
  * **发布说明**: 自动化构建的每日版本。
  * **警告**: 为开发测试构建，可能不稳定，请谨慎使用。
  * **完整更新日志**: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### 3. 项目进展
今日共有 34 个 PR 被合并或关闭，项目在底层架构与功能细节上取得了显著进展：
* **消息总线与背压优化**: 合并了关于消息总线背压处理与健康状态可见性的修复，将无界阻塞更改为有界等待，防止队列饱和导致的系统卡死。([PR #2906](https://github.com/sipeed/picoclaw/pull/2906))
* **会话存储稳定性提升**: 连续合并了三个关于 JSONL 会话存储的修复，解决了崩溃后元数据漂移、热路径克隆开销过大以及 TTL 刷新语义问题，大幅增强了本地记忆系统的崩溃一致性和性能。([PR #2907](https://github.com/sipeed/picoclaw/pull/2907), [PR #2913](https://github.com/sipeed/picoclaw/pull/2913))
* **异步回调去重**: 关闭了 `feat(spawn): add direct_reply parameter`，解决了异步回调中 `ForUser` 和 `PublishInbound` 同时触发导致的主助手消息重复问题。([PR #3155](https://github.com/sipeed/picoclaw/pull/3155))
* **模型适配与功能完善**: 合并了 MiMo 供应商的多模态模型配置，使 WebUI 能正确推荐视觉模型；同时优化了 `picoclaw skills search` 的安装指令输出。([PR #2915](https://github.com/sipeed/picoclaw/pull/2915), [PR #3152](https://github.com/sipeed/picoclaw/pull/3152))

### 4. 社区热点
* **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) [Feature] I need SimpleX or tox**
  * **热度**: 评论 3 条 👍 1
  * **分析**: 用户强烈需求集成 SimpleX、Wire 或 Tox 等高度注重隐私的去中心化通讯协议作为 Gateway。这反映出 PicoClaw 的用户群体对数据隐私极为敏感，未来可能会出现相关的网关集成扩展。
* **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) Add remote Pico WebSocket mode to picoclaw agent**
  * **分析**: 该 PR 为 `picoclaw agent` 增加了远程 WebSocket 模式。这打破了仅限本地执行的边界，允许通过 `ws://` 进行远程连接与控制，是向分布式/云端 Agent 架构演进的重要信号。

### 5. Bug 与稳定性
* **[严重 - 已有修复 PR] 火山引擎豆包模型 Tool Call 泄露**
  * **问题**: 在 PicoClaw v0.2.8 中使用 `doubao-seed-2.0-pro` 时，模型偶尔会将工具调用作为原始 XML 文本 `<seed:tool_call>` 直接返回给用户，而不是在后台执行，特别是在长对话或重度使用工具时。([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153))
  * **修复**: 已提交 [PR #3154](https://github.com/sipeed/picoclaw/pull/3154)，通过在 OpenAI 兼容层增加正则拦截与解析，从 `message.content` 中恢复这些泄露的工具调用。
* **[轻微] 代码健壮性检查**
  * 今日清理了大量未校验类型断言导致的潜在 Panic 风险（如 [PR #3053](https://github.com/sipeed/picoclaw/pull/3053), [PR #3091](https://github.com/sipeed/picoclaw/pull/3091), [PR #3131](https://github.com/sipeed/picoclaw/pull/3131)），修复了在极端情况下导致进程崩溃的隐患。

### 6. 功能请求与路线图信号
* **安卓 ADB 远程操作工具**: [PR #3157](https://github.com/sipeed/picoclaw/pull/3157) 提议增加基于 ADB 的安卓设备远程控制（截屏、点击、滑动等）。如果合并，PicoClaw 将具备成为“手机 AI 助手”的潜力，执行真正的 UI 自动化操作。
* **Token 用量精细化管理**: [PR #3156](https://github.com/sipeed/picoclaw/pull/3156) 正在推进在消息回合结束时输出真实的 LLM Token 消耗（区分输入/输出 token）。这对于需要精确成本控制的 AI 智能体平台来说是不可或缺的基础设施。
* **去中心化通讯集成**: 如前文所述，([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)) 暴露了通讯网关拓展的下一步方向。

### 7. 用户反馈摘要
* **痛点**: 在接入国产大模型（如火山引擎豆包）时，由于模型对 OpenAI 工具调用协议的遵循不够严格，导致 Agent 链路中断，严重影响自动化工作流的执行。用户急需更加鲁棒的提供商兼容层。
* **使用场景**: 用户正尝试将 PicoClaw 接入 SimpleX 或 Tox 等暗网/隐私通讯软件，将其作为私人安全的 AI 助理节点；同时，开发者社区在积极扩展其远程控制能力（WebSocket、Android ADB）。
* **评价**: 社区对项目的底层优化（如背压处理、崩溃一致性）给予了高度的代码级支持，多位核心贡献者持续提交底层的内存与总线修复，展现了良好的自维护生态。

### 8. 待处理积压
维护者需要关注以下存在风险或长期滞留的任务：
* **依赖更新积压**: 多个由 `dependabot` 发起的前端依赖更新（如 Vite, shadcn, ESLint, typescript-eslint）被打上 `stale` 标签且处于未合并状态，可能引入技术债或安全漏洞。([PR #3100](https://github.com/sipeed/picoclaw/pull/3100) ~ [PR #3105](https://github.com/sipeed/picoclaw/pull/3105))
* **Windows 路径兼容性**: 开启了关于 Windows 文件系统路径处理的沙盒测试 ([PR #3158](https://github.com/sipeed/picoclaw/pull/3158))，暗示在跨平台（特别是 Windows）的沙盒安全隔离上仍有未解决的边界条件。
* **网页响应体处理**: [PR #3128](https://github.com/sipeed/picoclaw/pull/3128) 试图修复四个搜索引擎集成（Bing, Tavily, Sogou, Perplexity）中的响应体关闭错误，该 PR 处于 stale 状态，需评估是否会影响网络搜索工具的并发性能。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期**: 2026-06-23 | **跟踪仓库**: [qwibitai/nanoclaw](github.com/qwibitai/nanoclaw)

---

### 1. 今日速览
过去 24 小时内，NanoClaw 仓库呈现出**“代码驱动、讨论沉寂”**的显著特征。项目 Issue 追踪器今日零活跃，但 PR 端出现了 6 次更新（5 个处于待合并状态，1 个被关闭）。更新涵盖了重要的通信渠道扩展（邮件、Telegram）、工作流优化（拒绝带原因、CLI 仪表盘）以及关键的系统级清理修复。整体来看，核心贡献者和外部开发者的代码提交保持了较高水准，但近期的 PR 普遍缺乏评论互动（多为 0 评论），项目维护者的 Review 压力正在逐渐增加。

### 2. 版本发布
**本日无新版本发布。**

### 3. 项目进展
今日项目主要在系统健壮性、UI/UX 交互以及渠道集成方面进行了代码推进：
*   **集成功能关闭/重构**: PR [#2831 feat: add Telegram integration](https://github.com/nanocoai/nanoclaw/pull/2831) 于今日被关闭。尽管作者注明已在 v2.1.1 验证成功，但未能合并入库，推测是因为代码规范或架构走向发生了变更。
*   **僵尸服务清理机制**: PR [#2830 fix(setup): reap dead peer service registrations whose binary is gone](https://github.com/nanocoai/nanoclaw/pull/2830) 提交了一个极其重要的系统级修复，解决由于未正常卸载导致的 `launchd`/`systemd` 无效注册项堆积问题。这标志着项目在“系统级生命周期管理”上迈出了关键一步。

### 4. 社区热点
*   **核心诉求：多渠道通信与集中式管控**
    *   社区当前最大的关注点在于扩展 AI 的触达能力。PR [#1235 feat: add IMAP/SMTP email integration](https://github.com/nanocoai/nanoclaw/pull/1235) 尽管创建于 3 月份，至今仍未合并，说明“让 Agent 具备收发邮件能力”的需求虽然核心，但实现细节（如此 PR 暴露了 6 个 MCP tools）存在较大复杂性。
    *   PR [#2795 feat: add /add-clidash — read-only CLI-derived dashboard skill](https://github.com/nanocoai/nanoclaw/pull/2795) 引入了 CLI 只读仪表盘，反映了进阶用户对于“在终端环境内对 Agent 进行低侵入监控”的强烈诉求。

### 5. Bug 与稳定性
今日无新增 Issue 报告，但基于 PR 提交，暴露了以下系统隐患：
*   **【高危 / 资源泄漏】** 强制删除 NanoClaw 目录会导致操作系统级定时任务永久指向丢失的 `dist/index.js`，引发无限报错与资源浪费。（已有修复 PR: [#2830](https://github.com/nanocoai/nanoclaw/pull/2830)）
*   **【中危 / 交互异常】** 当在轮询期间触发 `send_message` 时，会导致文本重复发送。（已有修复 PR: [#2531](https://github.com/nanocoai/nanoclaw/pull/2531)，该 PR 从 5 月滞留至今，亟待处理）

### 6. 功能请求与路线图信号
从近期的代码提交可以看出 NanoClaw 下一步的演进方向：
*   **反馈闭环的精细化**: PR [#2832 feat(approvals): reject with reason](https://github.com/nanocoai/nanoclaw/pull/2832) 提出了“拒绝并附带原因”的功能。这表明项目正在从“简单的人机阻断”向“具备上下文感知的 Agent 教学反馈”演进，是提升个人 AI 助手智能度的关键信号。
*   **技能生态扩展**: 通过 [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 和 [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) 可以看出，项目正在通过 MCP (Model Context Protocol) 标准化工具集和 Utility skills 的方式，疯狂吸收外部生态能力。

### 7. 用户反馈摘要
*(注：由于今日 Issues 及评论数据为空，以下反馈摘要是基于上述 PR 描述提取的真实开发者痛点)*
*   **重度测试用户的痛点**: 开发者在多版本迭代的机器上遭遇了“脏数据累积”问题（[#2830](https://github.com/nanocoai/nanoclaw/pull/2830) 中提到单机堆积了 6 个失效注册项），说明过去的卸载脚本存在盲区，用户急需更干净的后台驻留管理。
*   **Agent 自治能力受限**: 在 Agent 发起请求被拒绝时，仅返回 "declined" 导致 Agent 无法调整策略（来自 [#2832](https://github.com/nanocoai/nanoclaw/pull/2832)），用户对于 Agent 的“受控纠错能力”有更高期待。

### 8. 待处理积压
仓库目前存在一定程度的 PR 积压，尤其是核心功能和高优修复未能及时被 Review，需要维护者重点关注：
1.  🚨 **[长期未合并的修复]** [#2531 fix(poll-loop): suppress duplicate text](https://github.com/nanocoai/nanoclaw/pull/2531) —— 滞留超 1 个月，影响消息收发的基础稳定性。
2.  ⚠️ **[长期未合并的功能]** [#1235 IMAP/SMTP email integration](https://github.com/nanocoai/nanoclaw/pull/1235) —— 滞留超 3 个月，是扩充 Agent 通讯手段的重量级 PR。
3.  📌 **[待 Review 的新增功能]** [#2832 reject with reason](https://github.com/nanocoai/nanoclaw/pull/2832) 及 [#2795 add CLI dashboard](https://github.com/nanocoai/nanoclaw/pull/2795) —— 均为高价值优化，需推进合并流程以激发贡献者积极性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# 📊 NullClaw 项目动态日报
**日期**: 2026-06-23 | **项目**: [NullClaw](https://github.com/nullclaw/nullclaw)

---

### 1. 📈 今日速览
NullClaw 项目在过去 24 小时内整体活跃度呈现**平稳推进**状态，未产生新的 Issues 或版本发布。今日项目唯一的实质性代码推进来自核心贡献者 `addadi` 提交的一个针对 Matrix 渠道的鲁棒性修复 PR。与此同时，依赖更新机器人触发的 Docker 基础镜像升级提醒也再次活跃。总体而言，项目当前处于无紧急 Bug 报告的稳定期，开发重心聚焦于底层通讯组件的稳定性完善与依赖的现代化迭代。

### 2. 🚀 版本发布
*今日无新版本发布。*

### 3. 🛠️ 项目进展
*今日无已合并或关闭的 PR，但以下 2 个待合并 PR 正在积极推进项目基础设施的演进：*

*   **[Matrix 渠道稳定性增强]** PR [#968 fix(matrix): persist next_batch across restart + test env isolation](https://github.com/nullclaw/nullclaw/pull/968)
    *   **进展分析**: 由核心开发者 `addadi` 提交。该 PR 解决了一个长期存在的状态管理缺陷：Matrix 渠道的 `/sync` 游标（`next_batch`）此前仅存储在内存中。此修复将使 AI 助手在经历重启后，能够避免触发昂贵的“全量初始同步”，从而显著降低服务端压力并加快恢复速度。该 PR 还引入了测试环境隔离，进一步提升了代码质量。
*   **[底层依赖升级]** PR [#956 ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)
    *   **进展分析**: 由 Dependabot 触发并于昨日更新。将 Docker 基础镜像从 Alpine 3.23 提升至 3.24。这属于常规的安全维护与基建升级，确保容器化部署的 AI 助手能获得最新的底层系统补丁。

### 4. 💬 社区热点
*过去 24 小时内，社区未产生新的 Issue 讨论或 PR 评论（评论数为 0）。*

### 5. 🐛 Bug 与稳定性
今日无新报告的社区 Bug。但开发者在内测/自测中发现并修复了一个**中等严重程度**的架构缺陷：
*   **潜在中断/性能瓶颈**: Matrix 渠道在重启后触发全量同步，可能导致内存消耗激增或被 Homeserver 限流。
    *   **状态**: ✅ 已提交修复方案 (见 [PR #968](https://github.com/nullclaw/nullclaw/pull/968))

### 6. 🗺️ 功能请求与路线图信号
今日无新增功能请求。但从 [PR #968](https://github.com/nullclaw/nullclaw/pull/968) 的重构可以看出项目的**隐性路线图信号**：
*   **信号 1: 强化企业级高可用性**：AI 智能体助手的“无状态丢失重启”能力正在得到加强，这表明 NullClaw 正在向更长运行时间、更高消息吞吐量的生产级应用标准靠拢。
*   **信号 2: Matrix 协议集成深化**：针对 Matrix 协议的特定机制（如 `next_batch` 和 `is_initial_sync`）进行精细化控制，说明其作为多渠道 AI 助手的底层通讯底座正在变得越发成熟。

### 7. 🗣️ 用户反馈摘要
*今日无新增用户评论与反馈。*

### 8. 📌 待处理积压
基于当前数据，呼吁维护者关注以下事项：
*   **[待 Review]** 核心功能修复 [PR #968](https://github.com/nullclaw/nullclaw/pull/968) 尽管对系统稳定性提升极大，但创建后尚未有评论或 Review 动态。建议项目 Owner 优先进行代码审查，以便尽早合入主干。
*   **[待合并的依赖堆积]** [PR #956](https://github.com/nullclaw/nullclaw/pull/956) 已挂起数日（自 6月15日创建），建议建立自动合并策略或定期批量处理 Dependabot 的 PR，防止依赖更新积压。

---
*数据来源: GitHub Public API. 声明：本日报由 AI 基于结构化客观数据生成，仅供项目维护者与开源分析参考。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project daily report for IronClaw based on the GitHub data provided:

---

# 📊 IronClaw 项目动态日报 (2026-06-23)

## 1. 今日速览
IronClaw 项目今日保持**高度活跃**的开发状态，过去 24 小时内共有 43 条 Issue 和 PR 更新。从活动轨迹来看，核心团队和社区贡献者正全面进入 **"IronClaw Reborn"** 引擎的深度优化与稳定性打磨阶段，重点围绕本地 Dogfooding（内部测试）、性能调优以及权限审批机制展开。虽然今天没有发布新的正式版本，但高达 25 个活跃 PR（7 个已合并/关闭）表明底层重构和新功能集成正在密集推进。整体而言，项目正处于新架构（Reborn）快速迭代的关键时期。

## 2. 版本发布
* **今日无新版本发布 (0 releases)。**

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，项目在 Reborn 架构的权限控制、自动化能力和底层重构上迈出了坚实的一步：
* **[PR #5062] Reborn 工具级权限覆盖模型已合并**：引入了三态权限状态（`always_allow`/`ask_each_time`/`disabled`），允许租户和用户级别的细粒度工具权限控制，大幅提升了企业级部署的安全合规性。
* **[PR #5063] 全局自动批准与每轮审批解决方案已合并**：实现了基于数据库的全局设置，支持免重启动态修改审批策略，优化了自动化工作流的顺畅度。
* **[PR #5085] 并发回合执行调度器已合并**：打破原有的严格串行执行，引入了 `TurnRunScheduler` 支持每用户/每类型的并发上限，显著提升了多用户高并发场景下的吞吐量。
* **[PR #5140] 触发器输入错误反馈优化已关闭/合并**：修复了触发器创建失败时抛出难以理解的错误代码的问题，现在能透传结构化的修复建议。
* **[PR #5135] God-Crate 拆分计划暂缓**：原本计划将 13 万行的巨型微服务单体重构拆分为 6 个聚焦的 crate，但已被关闭。转而采用更安全的渐进式策略（见 [PR #5137](https://github.com/nearai/ironclaw/pull/5137)），体现了核心团队对代码库稳定性的谨慎态度。

## 4. 社区热点
今日的讨论和开发重心高度集中在 IronClaw Reborn 的本地可用性提升上。核心开发者 **think-in-universe** 发起了多项关键跟踪议题：
* **Reborn 性能优化周报 ([Issue #5125](https://github.com/nearai/ironclaw/issues/5125))**：社区反馈本地运行 Reborn 时存在明显卡顿。团队已拆解出三个具体攻坚方向：引入延迟日志和归因分析 ([#5126](https://github.com/nearai/ironclaw/issues/5126))、排查模型推理延迟 ([#5127](https://github.com/nearai/ironclaw/issues/5127))、以及削减不必要的 Agent 运行时步骤 ([#5128](https://github.com/nearai/ironclaw/issues/5128))。
* **本地内部测试 ([Issue #5119](https://github.com/nearai/ironclaw/issues/5119) / [#4879](https://github.com/nearai/ironclaw/issues/4879))**：团队正在高强度使用本地构建版作为日常助理，以确保首启配置、模型提供商设置等首批用户体验的顺畅。
* **新通讯渠道支持 ([Issue #5124](https://github.com/nearai/ironclaw/issues/5124))**：团队正在推进将 Telegram 接入 Reborn 原生 ProductAdapter 路径，替换旧的 v1 通道。

## 5. Bug 与稳定性
* 🔴 **高危回归 - 任务执行挂起 ([Issue #5139](https://github.com/nearai/ironclaw/issues/5139))**
  * **症状**：在最新 `main` 分支（`704fcd43`），Reborn 在初始化 web/research 任务时直接卡死（发生 0 次 LLM 调用和工具调用），导致回合超时。
  * **影响**：导致今日 PinchBench 每日基准测试中 21/147 (约 14%) 的任务直接归零。*(目前尚未见对应的 fix PR，需紧急处理)*。
* 🟡 **中危 Bug - MCP 状态显示异常 ([Issue #4925](https://github.com/nearai/ironclaw/issues/4925), [CLOSED])**
  * **症状**：NEAR AI MCP 已正确安装，但 UI 依然显示 "SETUP NEEDED" 并要求凭证，给用户造成困扰。
* 🟡 **中危 Bug - "Always approve" 失效 ([Issue #5129](https://github.com/nearai/ironclaw/issues/5129))**
  * **症状**：针对 `outbound_delivery_target_set` 的“始终允许”策略不生效，目前具体触发条件不明，需调查复现。
* ⚪ **CI 报警 - Nightly E2E 失败 ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108))**
  * 昨晚的端到端自动化测试在 `v2-engine` 环境下失败。

## 6. 功能请求与路线图信号
从近期的 Issue 和 PR 中，可以清晰看出 IronClaw 即将到来的功能矩阵：
* **Hermes 风格的技能自我进化 ([PR #5061](https://github.com/nearai/ironclaw/pull/5061))**：极具野心的提案。Agent 在成功完成任务后，会自动提炼经验生成 `SKILL.md` 并安装，实现自我能力扩展。*(状态：PR 开放中，等待合并)*。
* **自动化管理增强 ([Issue #5121](https://github.com/nearai/ironclaw/issues/5121), [Issue #5122](https://github.com/nearai/ironclaw/issues/5122))**：社区与开发者已提交对应的 PR（[暂停/恢复](https://github.com/nearai/ironclaw/pull/5131)、[删除](https://github.com/nearai/ironclaw/pull/5133)），预计将在下个版本大幅完善 Reborn 的自动化控制面板。
* **OpenAI 兼容性与外部工具网关 ([PR #5094](https://github.com/nearai/ironclaw/pull/5094))**：正在实现 `/v1/models` 接口和模型验证机制，为接入更广泛的外部工具生态打下基础。
* **单租户持久化 Postgres 配置 ([PR #5081](https://github.com/nearai/ironclaw/pull/5081))**：为满足企业托管预览需求，正在添加基于 PostgreSQL 的后端状态持久化支持。

## 7. 用户反馈摘要
* **痛点 1：审批策略过于繁琐**。用户反馈缺乏全局的“自动批准”开关，每次工具调用都需要打断流程手动确认，极其影响效率。*(已通过今日合并的 PR #5062 / #5063 彻底解决)*。
* **痛点 2：执行速度与响应延迟**。用户在实际使用中感受到了明显的响应缓慢，且无法判断是模型推理慢还是框架内部循环冗余。*(团队已响应，正在添加延迟归因日志)*。
* **痛点 3：通知语义不一致**。开发者 hanakannzashi 在 [Issue #5120](https://github.com/nearai/ironclaw/issues/5120) 中指出，系统在拒绝操作时的词汇不统一（如 `Declined`, `Denied`, `Canceled` 混用），容易给前端开发和最终用户造成理解歧义，呼吁统一 Gate 状态机。

## 8. 待处理积压
* ⚠️ **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139) 任务挂起回归**：该 Bug 直接导致基准测试失败且发生在 `main` 分支，属最高优先级积压项，急需核心 Committer 进行 Git Bisect 定位。
* ⚠️ **Dependabot 依赖积压**：存在多个涉及 Rust 依赖升级的大型 PR（[PR #5138](https://github.com/nearai/ironclaw/pull/5138) 涉及 45 个更新，[PR #4032](https://github.com/nearai/ironclaw/pull/4032) 涉及 Wasm 更新），且包含破坏性更新的可能。建议维护者尽快排期测试合并，避免后期技术债堆积引发合并冲突。
* ⚠️ **[PR #4787](https://github.com/nearai/ironclaw/pull/4787) Barcelona Hackathon 专用分支**：标记为 [NO MERGE]，已积压超过 10 天。虽然不打算合并到主干，但长期不同步可能导致后期 rebase 成本极高，需关注其生命周期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 **LobsterAI** 开源项目 2026-06-23 的动态日报。本报告基于 GitHub 过去 24 小时的活动数据生成。

---

### 1. 今日速览
*   **整体活跃度：高度活跃**。过去 24 小时内项目共产生 **19 个事件**（5 个 Issues 更新，14 个 PR 更新），显示项目正处于密集的开发与维护周期中。
*   **核心进展：** 今日代码层面的进展显著，共有 **6 个 PR 被关闭/合并**，涵盖了备受期待的 Cowork Plan Mode（计划模式）以及多项 OpenClaw 底层架构的优化。
*   **待处理积压预警：** Issues 与待合并 PR 中出现了大量被标记为 `[stale]`（陈旧/停滞）的状态。这意味着虽然近期有密集的代码提交，但早期社区反馈和部分核心优化（如 SQLite 性能、并发安全）面临审核瓶颈。

### 2. 版本发布
*   **今日无新版本发布 (Releases: 0)**。

### 3. 项目进展
今日项目迎来了多个重要功能与架构调整的 PR 合并/关闭，整体在智能化协同与跨端插件支持上迈出了一大步：
*   **🎯 重磅功能：Cowork 引入 Plan Mode** ([PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183))
    *   **进展：** 已合并。在 Composer 菜单中新增了 Plan Mode（计划模式），支持将生成的计划渲染为独立的交互块，允许用户进行复制、下载、展开/折叠操作，并防止在计划阶段触发破坏性的工具调用。这标志着 LobsterAI 在智能体“思考-行动”分离机制上取得了重要突破。
*   **🔧 OpenClaw 架构与插件维护：**
    *   [PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182)（已关闭）：升级了预装的 OpenClaw IM 插件（钉钉、飞书、企业微信、POPO），以适配最新的插件安装布局。
    *   [PR #2186](https://github.com/netease-youdao/LobsterAI/pull/2186)（已关闭）：修复了 OpenClaw NIM 插件运行时入口的编译问题。
    *   [PR #2185](https://github.com/netease-youdao/LobsterAI/pull/2185)（已关闭）：修复了 OpenClaw 响应选项中缺失 `cwd` 字段的问题。
*   **🧪 测试与文档：**
    *   [PR #2187](https://github.com/netease-youdao/LobsterAI/pull/2187)（已关闭）：对齐了 OpenClaw 的元数据预期，完善了推理模型的历史协调测试。
    *   [PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184)（已关闭）：更新了 `AGENTS.md` 文档，梳理了当前 Cowork/OpenClaw 的架构与代码规范。

### 4. 社区热点
尽管今日活跃 Issues 评论数不多，但从标记为 `[stale]` 但仍在更新的 Issues 可以看出用户的明确诉求：
*   **UI 交互与国际化适配痛点**：[Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416) 反映了切换英文后 UI 错乱的问题。英文文本较长导致卡片重叠，表明海外用户或双语用户对界面的响应式自适应有较高要求。
*   **数据统计的准确性**：[Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414) 报告了“总会话数始终为 0”的问题，这直接影响用户对个人 AI 使用情况的评估信任度。

### 5. Bug 与稳定性
根据今日更新的 Issues 和待合并 PR，项目在底层性能和 UI 表现上存在一些已知 Bug，按严重程度排列如下：

*   **🔴 严重：定时任务并发重入与幽灵事件** ([Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409) / [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420))
    *   **状态：** 跨天触发定时任务未生成历史记录。根因是 Gateway 响应慢导致并发重入和事件风暴。**已有 fix PR 等待合并。**
*   **🔴 严重：高频写入导致主进程卡顿 (OOM/I/O 阻塞)** ([PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410))
    *   **状态：** 流式响应等高频场景下 SQLite 同步落盘导致 Node.js 事件循环阻塞。**已有 fix PR（防抖批量写入）等待合并。**
*   **🟡 中等：Token Proxy 拒绝服务风险** ([PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407))
    *   **状态：** 本地代理未限制请求体大小，可能被同机恶意进程通过超大请求耗尽内存。**已有 fix PR 等待合并。**
*   **🟡 中等：NIM 群组类型传参错误** ([Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419))
    *   **状态：** 查询超级大群群名称失败，由于枚举值映射错误。**已有 fix PR 等待合并。**
*   **🟢 轻微：概览页多项 UI Bug** ([Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416))
    *   **状态：** 时间筛选器点击无响应、英文语言适配导致排版错乱、总会话数显示为 0。暂无对应公开修复 PR。

### 6. 功能请求与路线图信号
*   **记忆系统与性能优化：** [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421) 提出了针对 `buildUserMemoriesXml` 的缓存机制。结合已修复的记忆迁移标志问题（[PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415)），可以看出项目正在大力发展持久化记忆系统。未来版本大概率会内置更高效、带有精确失效控制的本地记忆缓存层。

### 7. 用户反馈摘要
*   **真实场景：桌面端深度使用体验**：大量 Bug 集中在桌面端 APP 的概览页和多语言切换上。用户（如 STUPIDDDD0）在实际使用中高度依赖数据面板来监控 API 额度消耗。
*   **痛点：排版与状态粗糙感**：输入框添加大量 Skills 时展示不友好（[Issue #1413](https://github.com/netease-youdao/LobsterAI/issues/1413)）、国际化适配不足，反映出前端 UI 在极端数据或多语言下缺乏足够的鲁棒性测试。

### 8. 待处理积压（⚠️ 提醒维护者关注）
今日的数据中暴露出一个明显的积压问题，多个高质量贡献和安全修复在提交近 3 个月后仍未被处理：
*   **待合并的高价值 stale PRs：**
    *   [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) (安全：请求体大小限制)
    *   [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410) (性能：SQLite 防抖写入)
    *   [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420) (并发安全：定时任务重入修复)
    *   [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (依赖：Electron 40 升级至 42.4.0)
*   **长期未关闭的 UI Bug Issues：**
    *   [Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409) (定时任务失效)
    *   [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411) (时间筛选器失效)

**💡 维护建议：** 建议优先对性能（#1410）和安全性（#1407）相关的陈旧 PR 进行代码审查及合并，并发布一个包含稳定性修复的 patch 版本，以提升桌面端用户的综合体验。

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

# 📊 CoPaw (QwenPaw) 项目动态日报
**日期**: 2026-06-23 | **分析数据源**: GitHub 官方仓库 

---

### 1. 📈 今日速览
在过去 24 小时内，CoPaw (QwenPaw) 展现出极高的社区活跃度与开发推进速度。项目单日共有 **72 项 Issue 和 PR 更新**（其中 30 个待合并 PR 处于活跃状态），表明社区贡献与反馈正处于爆发期。从贡献者分布来看，项目正迎来一波“移动端适配”与“记忆/上下文机制重构”的开发热潮，多位首次贡献者提交了高质量代码。然而，伴随近期版本（如 1.1.12.post1）的迭代，系统稳定性方面暴露出进程冻结、后台任务停摆等高危核心 Bug，亟待核心团队进行收敛与修复。

### 2. 🚀 版本发布
**本日无新版本发布**。

### 3. 🛠 项目进展
今日项目整体向前迈进了坚实的一步，核心机制优化与前端体验改造齐头并进：
*   **安全与架构优化**：PR [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) 成功隔离了不同安装实例间的钥匙串主密钥，消除了机器全局命名空间带来的安全隐患；PR [#5301](https://github.com/agentscope-ai/QwenPaw/pull/5301) 将 ToolGuard 检测器合并至 Policy 引擎，统一了治理模型。
*   **会话与运行时清理**：PR [#5027](https://github.com/agentscope-ai/QwenPaw/pull/5027) 阻止了后端预热会话污染控制台的历史记录；PR [#5396](https://github.com/agentscope-ai/QwenPaw/pull/5396) 修复了运行时系统提示词加载逻辑，使其正确读取工作空间配置文件。
*   **UI 与体验爆发式迭代**：由贡献者 `yaozy2020` 领衔，一口气提交并推进了针对控制台（环境变量、工作空间、CronJobs、Channels、MCP、ACP、收件箱等近 10 个页面）的移动端响应式适配 PR 矩阵。

### 4. 🔥 社区热点
当前社区讨论的焦点主要集中在**记忆机制升级**与**核心稳定性诉求**上：
*   **内存与上下文管理争议**：PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 引入了全新的 `scroll` 上下文管理策略（基于 SQLite 持久化+ REPL 召回替代原生压缩），引发了高度关注；同时，PR [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) 为记忆搜索引入了时间衰减排序。
*   **“稳基座”倡议**：Issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) 呼吁团队在添加新功能前优先解决核心稳定性与移动端可用性问题，引发了社区对近期 Bug 频发的共鸣。
*   **知识库诉求高企**：Issue [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969)（创建于4月）持续活跃，用户强烈要求在控制台中原生集成个人知识库（RAG）能力。

### 5. 🐛 Bug 与稳定性
近期更新引入了数个严重程度较高的系统性 Bug，部分影响了智能体的持续运行能力：
1.  **[P0 致命] QwenPaw 进程冻结**：Issue [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) 指出，当子 Agent 触发上下文压缩时，会导致整个 QwenPaw 进程彻底冻结且无法自动恢复。（暂无明确 Fix PR）
2.  **[P1 严重] 定时任务罢工**：Issue [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) 报告在应用保持存活且任务启用的情况下，Cron 调度器突然停止派发任务，导致依赖定时触发的 Agent 停止工作。
3.  **[P1 严重] API 消息静默丢弃**：Issue [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) 指出，当 Agent 处于忙碌状态时，通过 API 发送的消息会返回 HTTP 200 但被静默丢弃。
4.  **[P2 高] 消息队列交叉串台**：Issue [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) 报告用户在不同 Agent 间切换时，消息队列会发生串台。**（注：此问题可能已被相关 PR 修复，但需验证）**
5.  **[P2 中] 文件预览失败回归**：Issue [#5370](https://github.com/agentscope-ai/QwenPaw/issues/5370)（已关闭）指出 `send_file_to_user` 工具的 URL 拼接存在逻辑截断导致 404；此外 Issue [#5320](https://github.com/agentscope-ai/QwenPaw/issues/5320)（已关闭）修复了升级后图片无法在聊天框正常显示的回归问题。

### 6. 💡 功能请求与路线图信号
从近期的 Issues 与 PR 走向中，可以捕捉到下一个版本迭代的强烈信号：
*   **移动端全面适配（大概率进入下个版本）**：近 10 个针对移动端适配的 PR（如 [#5369](https://github.com/agentscope-ai/QwenPaw/pull/5369), [#5382](https://github.com/agentscope-ai/QwenPaw/pull/5382)）集中提交，显然是在响应 Issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) 中提到的移动端体验痛点。
*   **模型管理增强（纳入路线图）**：PR [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) 支持了模型的自定义拖拽排序，同时 PR [#5297](https://github.com/agentscope-ai/QwenPaw/pull/5297) 加入了模型的批量测试与删除功能。
*   **架构解耦与复用**：Issue [#5392](https://github.com/agentscope-ai/QwenPaw/issues/5392) 提出了“智能体与工作空间解耦”的架构级需求，期望实现智能体在不同工作空间内的无缝切换复用。

### 7. 🗣 用户反馈摘要
从真实用户的反馈中可以提炼出以下核心痛点与使用画像：
*   **配置迁移困难**：从其他框架（如 OpenClaw / Hermes）迁移而来的用户（Issue [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254)）痛苦于需要手工重建 Persona、Memory 等配置，急需自动化迁移工具。
*   **第三方模型兼容性脆弱**：用户反馈智谱 API 存在供应商测试成功但模型测试失败的路由解析 Bug（Issue [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330)）；同时 DeepSeek 用户经常面临 Agent 卡死无响应的困境（Issue [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333)）。
*   **升级策略破坏用户自定义**：用户十分反感每次版本升级后，被手动禁用的内置技能（如 docx, xlsx 处理）会被强制重置为启用（Issue [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)），这增加了极大的维护成本。
*   **Shell 命令解析能力薄弱**：开发者发现 `execute_shell_command` 无法处理包含重定向、管道等复杂 Shell 语法的命令（Issue [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)），限制了 Agent 执行底层系统任务的潜力。

### 8. ⏳ 待处理积压
以下重要问题存在积压风险，建议核心团队重点关注：
*   **PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) (Scroll Context 策略)**：作为一项重要的架构级改动，自 6 月 19 日提交以来一直处于 Under Review 状态，需要加快 Review 进度以解决当前上下文压缩引发的各类问题。
*   **Issue [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (个人知识库集成)**：创建于 4 月初，获得较多点赞，但迟迟未见官方排期或关联 PR。
*   **Issue [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) (Tauri 插件加载器未就绪)**：直至昨日才被关闭，桌面端用户长期饱受无法正常加载插件的折磨，需确认最新代码是否已彻底解决此痛点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期**: 2026-06-23  
**数据采集周期**: 过去 24 小时  
**项目定位**: AI 智能体与个人 AI 助手开源基础设施

---

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了极高的社区活跃度，共处理了 **50 条 Issue 更新**（43 条活跃/新开）与 **50 条 PR 更新**（42 条待合并）。项目当前的重心明显聚焦于 **v0.9.0 版本的安全强化、WASM 运行时架构升级以及供应链规范化**。虽然没有发布新版本，但通过大量高质量的基础设施 PR 和深度探讨的 RFC，项目正在经历一次深度的架构重构。整体来看，项目健康度优秀，贡献者响应迅速，且 CI/CD 防御机制正在按计划稳步推进。

---

## 2. 版本发布
**本日无新版本发布 (0 releases)。**
项目当前正处于 v0.8.1 之后、v0.9.0 之前的密集开发与重构期。

---

## 3. 项目进展
今日有 8 个 PR 被合并或关闭，同时在核心基础设施层取得了重要进展，主要体现在**安全防御、可观测性和前端去 Node 化**：

*   **供应链与模型动态化**：[PR #8165](https://github.com/zeroclaw-labs/zeroclaw/pull/8165) 和 [PR #8097](https://github.com/zeroclaw-labs/zeroclaw/pull/8097) 被处理，成功将 `model_switch` 工具的静态硬编码模型列表替换为从 `models.dev` 实时拉取的 API，大幅降低了维护成本和新模型接入延迟。
*   **安全与权限收敛**：[PR #8137](https://github.com/zeroclaw-labs/zeroclaw/pull/8137) 实现了重大的安全收紧，移除了插件直接读取进程环境变量的能力，堵住了跨插件泄露机密信息的路径。
*   **可观测性完善**：[PR #8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) 引入了跨日志的 `trace_id` 关联及单次调用 `cost_usd` 成本追踪；[PR #8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) 增加了可选的 LLM 请求 payload 捕获，完善了审计闭环。
*   **测试与 CI 门禁**：[PR #8016](https://github.com/zeroclaw-labs/zeroclaw/pull/8016) 引入了本地 pre-PR 质量门禁脚本，确保贡献者在提交前即可跑通完整 CI 检查。

---

## 4. 社区热点
社区今日的讨论焦点集中在**底层架构演进与极高标准的安全合规**：

*   **彻底移除 Node.js 依赖的大规模重构计划**：[Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) (已关闭，拆分中)。社区对现有 React/Vite 构建的 npm 供应链风险表达了强烈担忧，并衍生出多个重量级 RFC：使用 Rust-Wasm 框架重写 Web UI ([Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132))，以及确立 Wasm 为默认插件运行时 ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135))。这表明核心团队对“纯 Rust + Wasm”的纯洁性有着极高的执念。
*   **企业级供应链安全签署 (SLSA)**：[Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) 提出引入硬件 PGP 密钥、多方仲裁和 SLSA 出处证明。对于一个个人 AI 助手项目来说，这种高级别的安全防御机制显示了 ZeroClaw 试图达到企业级安全标准的野心。
*   **WASM 插件系统设计去重**：[Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) 讨论了解决底层 FND-001 架构目标冲突的问题，决定用直接的 `wasmtime` 组件模型替换 Extism。

---

## 5. Bug 与稳定性
今日报告了数个高危 Bug，部分严重影响了特定场景下的正常使用：

*   **[S0 严重] Discord 频道“僵尸”响应**：[Issue #8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) (已关闭/处理中)。在 Debian 容器中禁用 Agent 后，绑定的 Discord 机器人依然保持在线并回复用户，存在数据泄露与越权风险。
*   **[S1 阻断] 默认 32k 上下文预算在首轮即触发截断**：[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)。系统 Prompt 和工具定义过长，导致新对话一开始就超出 Token 预算 3.3 倍，造成持续的内容截断。（状态：in-progress）
*   **[S1 阻断] Zerocode TUI 无法接收 MCP 工具**：[Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)。Gateway 能发现 MCP 工具，但 TUI 会话中却缺失这些工具，阻断了用户的工具调用工作流。
*   **[S1 阻断] Kimi 代码模型端点 404 回归**：[Issue #8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)。Moonshot provider 配置指向了已废弃的 API URL 导致无法调用，期待尽快热修复。
*   **[S2 降级] Windows 平台 74 个测试失败**：[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)。由于路径语义和控制台编码问题，Windows 环境测试大面积报错，而当前 CI 仅在 Linux 上运行测试。

---

## 6. 功能请求与路线图信号
根据 Issue 和已有 PR 的联动，以下功能极具可能在 v0.9.0 落地：

*   **OpenRouter 模型故障转移**：[Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) 请求支持 OpenRouter 的 `fallback_models` 数组，以实现模型 API 宕机时的自动切换。这符合项目打造高可用 Runtime 的路线。
*   **Webhook 替代长轮询**：[Issue #8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) 提出为 Telegram 增加 Webhook ingress 模式，以优化高并发群组的响应延迟。
*   **多数据库会话持久化**：[PR #6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) (XL级)。引入了 PostgreSQL, Oracle, MySQL, Db2 作为会话状态后端，这是 ZeroClaw 迈向多 Agent 集群部署的基石。
*   **本地账号密码登录**：[Issue #8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) 和 [PR #8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) 正在落地无需外部 IdP 的本地浏览器登录功能，大幅降低自托管门槛。

---

## 7. 用户反馈摘要
透过大量 Issue 详情，我们可以提炼出真实用户的几个核心痛点：

*   **Token 成本与上下文管理的焦虑**：用户深受系统 Prompt 与 MCP 工具定义过长导致的 Token 浪费困扰（[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)），同时在 Telegram 频道中 Prompt 缓存失效增加了额外的开销（[Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)）。引入会话自动过期截断（[Issue #8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)）也是为了控制成本。
*   **“不信任”环境下的沙盒诉求**：用户期望 Agent 能在受限的安全沙盒中运行任意代码，但目前的频道实现可能存在策略未生效的漏洞（如上述的 Discord 问题）。
*   **Quickstart “降智”问题**：用户反馈默认的 Balanced 风险配置导致 Agent 经常拒绝执行操作，体验受挫。维护者已迅速响应，决定在 Quickstart 中强制使用 `yolo` 预设（[Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) / [PR #8133](https://github.com/zeroclaw-labs/zeroclaw/pull/8133)）。
*   **跨平台兼容性**：大量非 Linux 用户（特别是 Windows 中文环境）面临各种水土不服的 Bug。

---

## 8. 待处理积压
以下重要任务需要维护团队倾注精力，以防积累：

*   **v0.9.0 庞大的 Breaking Changes 队列**：[Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 显示，v0.9.0 里程碑目前有 **134 个待办事项**（18 个 PR，116 个 Issue），协调和合并这些更改将是一个巨大的工作量。
*   **大规模多频道重构积压**：[PR #8145](https://github.com/zeroclaw-labs/zeroclaw/pull/8145) 涉及对 WhatsApp、Lark、iMessage、Nostr、Reddit 等 18 个频道模块的代码重构（提前 ACK 和 typing 状态优化），规模庞大且极易引发边缘平台的回归，需要重点 Review。
*   **硬件库整合**：[Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) 提出将 `aardvark-sys` 折叠进 `zeroclaw-hardware`，目前处于待 Maintainer Review 状态。

</details>