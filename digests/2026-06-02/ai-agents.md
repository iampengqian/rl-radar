# OpenClaw 生态日报 2026-06-02

> Issues: 474 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-01 22:41 UTC

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

# OpenClaw 项目动态日报 (2026-06-02)

## 1. 今日速览

OpenClaw 项目在 2026 年 6 月 2 日继续保持极高的社区活跃度，整体处于**高并发迭代与快速排障期**。过去 24 小时内，项目新增及活跃 Issues 达 285 条，关闭 189 条，同时有 500 个 Pull Requests 发生状态更新，展现出维护团队和社区强大的处理吞吐量。

项目当前正处于从 `2026.5.x` 稳定版向 `2026.6.x` beta 版本过渡的关键阶段，一天内连续发布了 3 个 beta 版本（至 `v2026.6.1-beta.2`），核心聚焦于底层 Agent 运行时的会话恢复和多渠道（Telegram, WhatsApp 等）消息投递的稳定性建设。综合来看，项目虽然面临因架构重构（如 Codex 运行时迁移）带来的多个回归 Bug，但响应迅速，整体生态健康度向好。

## 2. 版本发布

今日连续发布 3 个新版本，标志着 `v2026.6.x` 系列迭代周期的开始：

- **[v2026.6.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.2)**
- **[v2026.6.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.1)**
- **[v2026.5.31-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.4)**

**核心更新内容：**
主要针对 Agent 和 CLI 运行时的健壮性进行了集中修复。解决了在遇到中断的工具调用、过期会话绑定、上下文压缩交接以及媒体投递重试时的异常崩溃问题（关联 #88129, #88136, #88141, #88162, #88182）。

**破坏性变更与迁移注意事项：**
1. **运行时迁移风险**：项目正在将 OpenAI Agent turns 的默认运行时从 Pi 迁移至 Codex。此变更可能导致 Token 消耗暴增（3-4倍），甚至导致原有 OAuth 配置失效。建议升级前备份 `openai-codex/` 目录配置，并谨慎使用 `doctor --fix` 命令。
2. **消息渠道稳定性**：Telegram、WhatsApp 等渠道的投递逻辑进行了重构，部分非标准协议（如 Telegram bot-to-bot）可能需要重新配置鉴权。

## 3. 项目进展

今日有 101 个 PR 被合并或关闭，整体进展显著推进了**底层运行时稳定性修复**及**多渠道接入体验优化**。重点推进如下：

- **运行时与网关防假死**：[PR #88908](https://github.com/openclaw/openclaw/pull/88908) 修复了网关进程在日志显示正常但实际未退出（僵尸进程）并占用端口的严重问题，引入了强制退出和 shutdown 期间的健康检查 503 机制。
- **Codex 工具安全防护**：[PR #89240](https://github.com/openclaw/openclaw/pull/89240) 为 Codex 动态工具描述符增加了防御性读取，避免了格式异常导致的系统崩溃。
- **会话状态恢复**：[PR #89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊中处于 `failed` 状态的会话会静默丢弃后续所有消息的异常。
- **控制台 UI 补全**：[PR #89135](https://github.com/openclaw/openclaw/pull/89135) 恢复了 Control UI 中 Skill Workshop 标签页的渲染功能。

## 4. 社区热点

今日讨论最热烈的问题集中在**多模型运行时的支持与兼容性**，以及**多渠道消息投递的稳定性**上：

- **[Issue #80171](https://github.com/openclaw/openclaw/issues/80171) (👍1, 💬15)**：关于 `Codex-vs-Pi` 运行时等效性的 QA 测试追踪。社区核心开发者正在积极讨论如何确保新默认运行时 Codex 在行为和资源消耗上与旧运行时 Pi 保持一致。
- **[Issue #80380](https://github.com/openclaw/openclaw/issues/80380) (👍4, 💬14)**：呼吁 OpenClaw 将模型更新为 Google 最新发布的 `gemini-3.1-flash-lite` 正式版，以替代当前的预览版，从而大幅提升推理速度和成本效益。
- **[Issue #79077](https://github.com/openclaw/openclaw/issues/79077) (👍7, 💬7)**：社区强烈要求支持 Telegram 最新发布的 Bot-to-Bot 和 Guest Bot 特性，以拓展多 Agent 协作的边界。

## 5. Bug 与稳定性

近期由于底层架构调整，暴露出一系列高优（P1）回归 Bug，目前团队正在密集修复中：

**严重级别：数据损坏/丢失**
- **[Issue #84038](https://github.com/openclaw/openclaw/issues/84038) (P1)**：`doctor --fix` 会静默修改配置目录，导致 Pi+OAuth 运行时损坏，并引发 3-4x Token 膨胀。目前已被标记为高风险源。

**严重级别：核心运行时异常**
- **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (P1)**：Codex app-server 在多工具调用时经常停滞。此问题是历史 Bug 的回归，当前状态：**已有对应 fix PR 推进中**。
- **[Issue #87744](https://github.com/openclaw/openclaw/issues/87744) (P1)**：Telegram 渠道频繁发生 `turn/completed` 超时，导致无法输出最终结果。
- **[Issue #86820](https://github.com/openclaw/openclaw/issues/86820) (P1)**：Codex OAuth 压缩机制失效，回退直接调用 API 导致缺少 Key 报错（已关闭，推测已修复）。

**严重级别：性能与内存**
- **[Issue #89139](https://github.com/openclaw/openclaw/issues/89139) (P2)**：Webchat 会话为每条消息新建 Agent run，导致 Prompt Cache 命中率从 93% 暴跌至 29%，极大增加延迟和成本。

## 6. 功能请求与路线图信号

从近期的 Issues 和 PRs 可以清晰看出 OpenClaw 的演进路线图信号：

1. **底层存储向 SQLite 迁移**：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 提出通过抽象分支策略，将核心会话/转录状态从现有文件系统平滑迁移至 SQLite。这是解决当前频繁文件锁异常的终极方案，预计将是下半年的重点。
2. **MCP 安全确认机制**：[Issue #78308](https://github.com/openclaw/openclaw/issues/78308) 提议为 MCP 工具调用增加通道介质审批流（Consent Envelope），防止 Agent 在后台执行高危操作（如发邮件）。这表明项目在向企业级安全合规迈进。
3. **更广泛的多模型适配**：[Issue #77336](https://github.com/openclaw/openclaw/issues/77336) 要求支持 Mistral 等后端的严格角色交替限制，以及 [PR #88748](https://github.com/openclaw/openclaw/pull/88748) 桥接 Gemini OAuth，都昭示着项目将致力于打造多模型（GPT/Claude/Gemini/Mistral）无缝切换的超级网关。

## 7. 用户反馈摘要

通过对海量 Issue 的提取，真实用户痛点主要集中在以下场景：

- **特定渠道的静默失败**：飞书用户深受其扰。群消息经常出现 `replies=0` ([Issue #77666](https://github.com/openclaw/openclaw/issues/77666))，或者在网关重启后因为竞态条件导致 DM 会话丢失和重复键报错 ([Issue #87938](https://github.com/openclaw/openclaw/issues/87938))。
- **定时任务（Cron）的脆弱性**：用户反馈通过 MiniMax 等国内大模型执行 Cron 任务时，极易因 503 导致失败 ([Issue #85888](https://github.com/openclaw/openclaw/issues/85888))；同时 Cron 任务经常自己发生会话锁冲突 (`EmbeddedAttemptSessionTakeoverError`，[Issue #88369](https://github.com/openclaw/openclaw/issues/88369))。
- **自建模型接入兼容差**：有不少用户反馈通过 OpenAI 兼容接口接入本地模型（如 LM Studio, Ollama）时容易遭遇意外超时和格式解析错误。

## 8. 待处理积压

以下长期悬而未决的高优问题需要 Maintainer 团队尽快介入：

1. **[Issue #35203](https://github.com/openclaw/openclaw/issues/35203) - 多Agent协同架构增强**：包含能力画像、共享黑板和 Token 消耗治理的 RFC，自 3 月提出以来进展缓慢。随着多 Agent 场景日益复杂，该需求已变得十分迫切。
2. **[PR #79990](https://github.com/openclaw/openclaw/pull/79990) - 增加 per-agent 和 per-cron-job 自定义请求头**：作为 AI 辅助编写的 PR，已开启近一个月，旨在解决多租户/多提供商场景下的鉴权路由问题，目前仍卡在 `needs proof` 状态，亟需补充测试证明。
3. **[Issue #80040](https://github.com/openclaw/openclaw/issues/80040) - OAuth 级联失效雪崩问题**：主提供商鉴权失效导致空回复及重复工具执行的恶性循环，该严重 Bug 已暴露近一个月，至今未得到根本解决。

---

## 横向生态对比

基于 2026 年 6 月 2 日各大开源项目的社区动态数据，以下为您呈上个人 AI 助手与自主智能体领域的横向对比与技术生态分析报告。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多端协同与多智能体编排”跃升的关键重构期**。
行业焦点已从单纯的模型接入，全面转向**底层运行时的健壮性、长时记忆与上下文管理、以及跨渠道（IM、企业应用）的无缝集成**。
尽管项目迭代极快，但由于底层架构（如运行时、容器权限、状态存储）的频繁重构，各项目普遍面临回归 Bug 和配置失效的阵痛。
总体而言，生态正在加速分化，一部分项目向企业级云原生和多租户安全合规演进，另一部分则深耕极致的本地化体验与轻量化部署。

### 2. 各项目活跃度对比
（按 Issue/PR 吞吐量与版本发布节奏综合排序）

| 项目名称 | Issue 吞吐 (新增/活跃/关闭) | PR 状态更新 (合并/待处理) | 今日版本发布 | 健康度与开发节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 285 (关闭 189) | 500 (合并 101) | 3 个 (v2026.6.x beta) | 🟢 **极高**。处于高并发迭代期，修复回归 Bug 迅速。 |
| **Hermes Agent** | 50 (新开 47，关闭 3) | 50 (合并 6，待合并 44) | 0 | 🟡 **活跃但积压严重**。社区贡献井喷，考验 Maintainer CR 能力。 |
| **CoPaw** | 50 (活跃 32，关闭 18) | 34 (合并 9，待合并 25) | 2 个 (v1.1.10 稳定/beta) | 🟢 **极优**。底层重构与功能并发，生态扩张迅速。 |
| **IronClaw** | 6 (活跃 5) | 46 (合并 33，待合并 13) | 0 | 🟢 **极优**。核心团队工程推进极其高效（Reborn架构）。 |
| **NanoBot** | 28 (关闭 25) | 28 (合并 17) | 1 个 (v0.2.1) | 🟢 **健康**。代码合并效率高，新版本交付顺利。 |
| **ZeptoClaw** | 无数据 | 18 (合并 17，待合并 1) | 0 | 🟢 **健康**。处于底层依赖升级与极致体积优化的治理期。 |
| **Moltis** | 0 | 4 (合并 3，待合并 1) | 0 | 🟢 **稳健**。少说多做，聚焦核心 Provider 逻辑重构。 |
| **PicoClaw** | 7 (关闭 0) | 11 (合并 5，待合并 6) | 1 个 (Nightly) | 🟡 **需关注**。PR 有推进，但 Issue 积压且零关闭。 |
| **NanoClaw** | 2 | 4 (关闭 1，待合并 4) | 0 | 🟡 **攻坚期**。核心开发者集中修复底层死锁。 |
| **ZeroClaw** | 29 (活跃 25) | 35 (合并 4，待合并 31) | 0 | 🟡 **活跃但堆积**。安全漏洞频发，修堵中。 |
| **LobsterAI** | 1 | 11 (合并 11) | 1 个 (2026.6.1 正式版) | 🟢 **商业级推进**。迭代快，重心在商业化变现与体验。 |
| **NullClaw** | 0 | 1 (待合并 1) | 0 | 🔵 **平稳**。低活跃度，细粒度打磨 UX。 |
| **TinyClaw** | 0 | 0 | 0 | ⚪ **沉寂**。过去 24 小时无活跃。 |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与流量重心**，OpenClaw 展现出了“超级网关”的潜质：
*   **规模优势**：单日 285 个 Issue 和 500 个 PR 的吞吐量远超同类，庞大的社区为其多模型、多渠道的快速试错提供了极强的支撑。
*   **技术路线差异（运行时迁移）**：OpenClaw 正在将 Agent 运行时从 Pi 强行迁移至 Codex，这种底层重构虽然带来了 Token 消耗暴增和 OAuth 失效的阵痛，但旨在追求更强大的底座能力，这是区别于其他项目修修补补的核心差异。
*   **生态广度**：相比 PicoClaw 聚焦本地 CLI，或 NullClaw 聚焦单渠道 UX，OpenClaw 同步推进 Telegram/WhatsApp/飞书的重构，更倾向于成为一个全端覆盖的“AI OS”。

### 4. 共同关注的技术方向（跨项目共性）
*   **Cron（定时任务）与 Session 隔离机制**
    *   *涉及项目*：OpenClaw, NanoBot, CoPaw, Hermes Agent
    *   *诉求*：定时任务在执行时极易被用户消息打断（CoPaw），或发生文件锁冲突（OpenClaw），导致无限循环。社区强烈要求实现异步调度和会话级隔离。
*   **Token 消耗与 Prompt 瘦身优化**
    *   *涉及项目*：ZeroClaw, NanoBot, OpenClaw, PicoClaw
    *   *诉求*：每次工具调用携带完整的 Skill 描述或历史记录导致 Token 灾难。ZeroClaw 呼吁引入编译机制，NanoBot 优化了心跳空转，PicoClaw 削减了技能目录传输。
*   **底层会话状态持久化与重载容灾**
    *   *涉及项目*：Moltis, NanoClaw, IronClaw, OpenClaw
    *   *诉求*：长对话导致上下文 OOM（IronClaw）、工具结果重载撑爆窗口（Moltis），以及损坏的 thinking blocks 导致死循环（NanoClaw）。向 SQLite 迁移或引入“自愈/回滚”机制是下一步共识。
*   **MCP (Model Context Protocol) 集成与安全防护**
    *   *涉及项目*：Hermes Agent, OpenClaw, ZeptoClaw, CoPaw
    *   *诉求*：MCP 正在成为工具调用的标准，但引发了进程泄漏和越权风险。各项目均在探索 MCP 进程池复用和执行前的 Consent (审批流) 机制。

### 5. 差异化定位分析
*   **“云原生与无状态多租户”派**（IronClaw, ZeroClaw）：重点向企业级 SaaS 和多租户演进，强调 OAuth 集成、按频道/租户路由、触发器调度和可观测性。
*   **“极致轻量与本地化”派**（ZeptoClaw, PicoClaw）：对二进制体积极度敏感（ZeptoClaw 将 7.5MB 设为红线），聚焦本地文件系统安全（PicoClaw 的 exec 守卫），满足极客和边缘计算部署。
*   **“AI 编排与生产力”派**（OpenClaw, CoPaw, NanoBot）：深度融合编码能力、工作区管理与多渠道 IM 推送，致力于成为开发者的副驾或个人虚拟员工。
*   **“商业化与增值服务”派**（LobsterAI）：依托大厂资源（网易有道），引入了积分计费系统、专家套件商店等商业化闭环设计。

### 6. 社区热度与成熟度
*   **第一梯队（狂飙突进期）**：**OpenClaw, CoPaw, IronClaw**。处于功能密集开发与底层重构并行阶段，PR 井喷，团队吞吐能力极强，但需警惕快速迭代引入的高危 Bug。
*   **第二梯队（质量沉淀期）**：**NanoBot, Moltis, ZeptoClaw**。核心架构已基本稳定，目前的代码合并高度聚焦于“性能优化”、“Provider 解耦重构”和“依赖安全治理”，向企业级高可用过渡。
*   **第三梯队（长尾攻坚期）**：**Hermes Agent, ZeroClaw, PicoClaw, NanoClaw**。暴露出较多系统级底层 Bug（如 FD 泄漏、死循环死锁），存在一定的 Issue/PR 积压，社区处于与架构复杂度搏斗的阶段。

### 7. 值得关注的趋势信号（开发者参考）
1.  **多模型兼容策略：从“正则猜测”到“能力声明”**（参考 Moltis）：随着本地/私有模型的爆发，基于 URL 猜测行为的兼容层已脆弱不堪。建立标准化的 `capability policies` 注册机制，将是未来 AI 网关设计的必修课。
2.  **沙箱安全与 AI 自主进化的“刹车机制”**（参考 ZeroClaw, Hermes Agent）：赋予 Agent 修改代码或自身权限时（如 SkillImprover），必须引入冷却机制或双评分系统，防止提示词注入导致工具调用失控。
3.  **长上下文记忆的“主动降级”**（参考 Moltis, NanoClaw）：LLM 的上下文窗口并非无限，在持久化 Agent 状态时，主动 Cap（截断）或 Summarize（摘要）历史工具调用结果，而非无脑全量重载，将成为 Agent 框架的基本功。
4.  **本地部署架构的分离设计**（参考 IronClaw）：将“本地算力节点”与“多端交互 UI/网关”剥离开来，支持 Rootless 环境和远程 Web 接入，是目前个人助手类项目高频出现的 Feature Request。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-02)

**分析周期**：2026-06-01 00:00 - 2026-06-02 00:00
**项目地址**：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日迎来了 **v0.2.1** 这一重要里程碑版本的发布，标志着项目在 WebUI 交互体验和智能体工作流整合上迈出了关键一步。过去 24 小时内，项目保持了极高的活跃度，共处理了 **28 个 Issues（25 个已关闭）** 和 **28 个 PR（17 个已合并/关闭）**。其中，备受期待的 Heartbeat 心跳机制优化、Cron 定时任务静默执行等核心特性代码均已合并。综合来看，当前项目社区响应迅速、代码合并效率极高，且新增了云平台部署支持与 QQ 渠道等多样化生态扩展，整体项目呈现出高度健康和加速迭代的态势。

---

## 2. 版本发布

### **[v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1) — WebUI 成为真正的生产力工作台**
- **核心更新**：本版本共合并了 84 个 PR，迎来了 17 名新的开源贡献者。最大的亮点是 **WebUI 升级为实际工作的核心界面**，用户现在可以在聊天界面实时看到文件编辑动态和工具调用的追踪轨迹，使得交互体验更平滑、可信任度更高。
- **破坏性变更/迁移注意**：目前 Release Notes 未明确指出破坏性更改，但由于底层重构了 WebUI 的状态管理（引入了事件总线机制），建议重度依赖二次开发或本地旧版 WebUI 的用户在升级时留意前端状态同步的潜在变更。

---

## 3. 项目进展

今日共有 17 个 PR 被合并/关闭，主要推进了以下几个维度的演进：

- **系统架构与稳定性优化**：
  - `Refactor WebUI runtime state onto event bus` ([PR #4135](https://github.com/HKUDS/nanobot/pull/4135))：将 WebUI 的运行时状态解耦并迁移至事件总线，极大提升了多客户端连接时的健壮性。
  - `Refactor session retention result` ([PR #4143](https://github.com/HKUDS/nanobot/pull/4143))：重构了会话保留结果的返回结构，修复了潜在的上下文不一致问题。
- **Token 成本与性能降低**：
  - 多个关于 `feat(heartbeat): skip LLM call when no active tasks` 的 PR ([PR #2482](https://github.com/HKUDS/nanobot/pull/2482), [PR #2435](https://github.com/HKUDS/nanobot/pull/2435), [PR #2415](https://github.com/HKUDS/nanobot/pull/2415)) 被合并。系统现在能自动识别 HEARTBEAT.md 中的空任务，跳过不必要的 LLM 调用，为用户节省 API 开支。
- **模型兼容性与解析修复**：
  - `fix(provider): handle XML tool call emissions` ([PR #4124](https://github.com/HKUDS/nanobot/pull/4124))：修复了部分兼容模型（如 mimo-v2.5, glm-5.1）将工具调用作为 XML 文本输出导致在聊天界面“泄漏”乱码的问题。
- **通知与交互降噪**：
  - `fix: keep cron runs silent until final output` ([PR #3126](https://github.com/HKUDS/nanobot/pull/3126))：彻底解决了定时任务在执行期间不断发送“中间思考过程”的刷屏问题，现仅推送最终结果。

---

## 4. 社区热点

今日社区不仅限于 Bug 修复，还涌现了大量关于生态拓展的深度讨论和提案：

- **QQ 渠道接入探索**：关于 Napcat (QQ) 渠道的支持 ([PR #4146](https://github.com/HKUDS/nanobot/pull/4146), 原始提案 [PR #3509](https://github.com/HKUDS/nanobot/pull/3509)) 引入了对 OneBot v11 协议的支持，大幅扩展了国内 IM 场景的可用性。
- **云平台一键部署**：[PR #4139](https://github.com/HKUDS/nanobot/pull/4139) 提出了构建零依赖的统一云平台部署层，试图解决用户在 HuggingFace Spaces 和 ModelScope 部署时的路径、OAuth 等痛点。
- **LLM 调用成本优化讨论**：[Issue #4142](https://github.com/HKUDS/nanobot/issues/4142) 探讨了针对 DeepSeek V4 等新模型的 cache miss input tokens 优化策略，反映了重度用户对 API 运营成本的极度关注。
- **MCP 服务与外部工具串联**：[PR #4138](https://github.com/HKUDS/nanobot/pull/4138) 建议为文件系统工具增加 `enable` 开关，促使 Agent 更好地与外部沙箱或 MCP Server 结合，体现了项目向“纯粹智能体调度大脑”演进的信号。

---

## 5. Bug 与稳定性

今日暴露的 Bug 主要集中在消息路由、上下文记忆和特殊模型响应解析上，大部分已被迅速修复：

1. **严重 (Critical)**：工具调用后消息静默丢失
   - 表现：Agent 成功调用工具后，最终文本响应不推送到用户端（如 Telegram）。
   - 链接：[Issue #4133](https://github.com/HKUDS/nanobot/issues/4133) (状态：已关闭)
2. **中等**：用户消息在会话归档时被意外重复保留
   - 表现：`retain_recent_legal_suffix` 逻辑缺陷导致上下文可能出现不一致。
   - 链接：[Issue #4128](https://github.com/HKUDS/nanobot/issues/4128) (状态：已有对应修复 [PR #4129](https://github.com/HKUDS/nanobot/pull/4129) 及重构 [PR #4143](https://github.com/HKUDS/nanobot/pull/4143))
3. **中等**：XML 格式的工具调用被原样输出
   - 表现：部分非标模型响应的 XML 被直接展示给用户。已通过 [PR #4124](https://github.com/HKUDS/nanobot/pull/4124) 修复合并。
4. **低**：Cron 定时任务重复注册与“中间思考”刷屏
   - 表现：[Issue #3028](https://github.com/HKUDS/nanobot/issues/3028) 指出的心跳重复创建定时任务；[Issue #3064](https://github.com/HKUDS/nanobot/issues/3064) 指出的中间消息刷屏。均已在今日合并的代码中彻底修复。

---

## 6. 功能请求与路线图信号

从近期的 PR 动态可以看出，NanoBot 正在从“个人聊天机器人”向“多模态多渠道的智能体基座”转型，以下功能有望在近期纳入主线：

- **企业级 IM 隔离与权限管控**：[PR #4016](https://github.com/HKUDS/nanobot/pull/4016) 引入了钉钉群聊按用户隔离 Session，表明项目在 ToB 场景下的权限划分正在快速补齐。
- **多模态能力本地化**：[PR #4122](https://github.com/HKUDS/nanobot/pull/4122) 提出在 WebUI 支持录音并使用本地 FunASR 进行语音转文字，这可能是后续端侧多模态交互的一个起点。
- **云原生与托管部署优化**：[PR #4139](https://github.com/HKUDS/nanobot/pull/4139) 及 [PR #4141](https://github.com/Hkuds/nanobot/pull/4141)（支持火山引擎搜索）显示出项目在努力降低不同云环境/搜索引擎的接入成本。
- **精细化成本控制**：结合 [Issue #4142](https://github.com/HKUDS/nanobot/issues/4142)，未来版本极有可能会推出更精细的 Cache Token 管理仪表板或路由策略。

---

## 7. 用户反馈摘要

综合近期 Issue 评论和讨论，提取出当前真实用户的三大核心反馈：

- **痛点：模型兼容与响应解析问题**：用户在使用非 OpenAI 系的模型（如 DeepSeek、Mimo、GLM 等）时，经常遇到工具调用解析失败或格式错乱的问题（如 [Issue #3633](https://github.com/HKUDS/nanobot/issues/3633)），反映出社区对“任意模型即插即用”的强烈需求。
- **痛点：Cron/心跳机制对 Token 的消耗**：在 v0.2.1 之前，定时任务和心跳常常空耗 Token 并在 IM 中刷屏，引发了不少吐槽（如 [Issue #2126](https://github.com/HKUDS/nanobot/issues/2126)），目前的静默优化将大幅提升此类用户的好感度。
- **满意点：架构灵活与渠道丰富**：大量 PR 表明，用户非常认可 NanoBot 的多渠道（Discord, 钉钉, QQ, Telegram）接入能力，并且乐于为项目贡献新的 Channel 和 Provider。

---

## 8. 待处理积压

以下是近期活跃度较高但仍处于 `OPEN` 状态，需要核心维护者重点关注的高级特性或重构 PR：

1. **云平台部署统一层**：[PR #4139](https://github.com/HKUDS/nanobot/pull/4139) (0 comments) - 包含大量新增代码（+851行），涉及平台检测和 OAuth，需维护者尽快评估其侵入性与合并优先级。
2. **Provider 动态注册配置重构**：[PR #3994](https://github.com/HKUDS/nanobot/pull/3994) (0 comments) - 旨在通过 registry 驱动的配置字段支持 Bedrock 等多云 LLM 提供商，是底层架构大改动，长期敞开可能引发合并冲突。
3. **Azure AAD 认证支持**：[PR #4126](https://github.com/HKUDS/nanobot/pull/4126) (0 comments) - 企业级用户强需求，目前尚未见维护者回复。
4. **本地 ASR 语音转录支持**：[PR #4122](https://github.com/HKUDS/nanobot/pull/4122) (0 comments) - WebUI 的多模态扩充，依赖关系较复杂，需明确是否并入近期版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-06-02)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去 24 小时

---

### 1. 今日速览

Hermes Agent 项目今日维持了极高的社区活跃度，过去 24 小时内共产生 **50 条 Issue 更新**（新开/活跃 47，关闭 3）和 **50 条 PR 更新**（待合并 44，已合并/关闭 6）。虽然今日无任何新版本发布，但社区提交了大量高质量的 Bug 报告和 PR，焦点集中在 **多平台网关的稳定性（尤其是 Discord 和 API Server）**、**外围工具链集成（如 Brave Search 和 SearXNG）** 以及 **本地客户端体验优化**。高达 44 个待合并的 PR 表明项目正处于功能密集开发和社区贡献的高峰期，但也对维护者的 Code Review 能力提出了挑战。

---

### 2. 版本发布
**无新版本发布。** 项目当前疑似主要使用 `v0.15.1` 版本（根据近期 Issue 反馈推断），下一个版本正在紧密筹备中。

---

### 3. 项目进展
今日虽然仅合并/关闭了 6 个 PR，但在修复关键 Bug 和推进周边生态方面迈出了坚实的一步：
*   **MCP 工具修复落地**：修复了 API Server 平台代理中 MCP 工具缺失的关键问题（[Issue #35703](https://github.com/NousResearch/hermes-agent/issues/35703) 已关闭），恢复了 API 网关的核心可用性。
*   **网关安全与合规性提升**：合入了对出站消息中 `reasoning_content` 字段的过滤（[PR #37032](https://github.com/NousResearch/hermes-agent/pull/37032)），确保了与 OpenAI 兼容 API 严格模式的正常交互。
*   **文档与用户体验改善**：更新了 Ollama 本地设置指南的导航（[PR #37049](https://github.com/NousResearch/hermes-agent/pull/37049)），并大幅扩充了社区用户故事（237 -> 262 个），丰富了项目文档库。

---

### 4. 社区热点
今日讨论最热烈的话题集中在**搜索后端的扩展**和**多代理系统的可靠性**上：
*   **开源/高性价比搜索接入呼声强烈**：用户强烈希望引入 **SearXNG**（[Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941)，30 👍）和 **Brave Search**（[Issue #10644](https://github.com/NousResearch/hermes-agent/issues/10644)，23 👍）作为内置搜索提供商。这反映出用户在使用默认搜索工具时面临成本或区域限制的痛点。
*   **Kanban 多智能体编排的脆弱性**：核心贡献者抛出了关于看板系统编排缺陷的总体议题（[Issue #35986](https://github.com/NousResearch/hermes-agent/issues/35986)），列出了僵死检测、静默恢复和子代理监管等可靠性缺陷，表明多代理框架正进入深水区。
*   **数据备份需求高涨**：请求原生支持 `~/.hermes/` 目录自动备份与版本控制的功能（[Issue #12238](https://github.com/NousResearch/hermes-agent/issues/12238)，13 👍）获得了显著共鸣，凸显了用户对 AI 记忆和状态数据资产安全的重视。

---

### 5. Bug 与稳定性
今日报告了多个影响生产稳定性的严重问题，尤其是网关和系统底层模块：
*   **🔴 严重 (P1) - Cron 子系统崩溃**：`cron/jobs.json` 若格式非标准 dict 会导致整个计划任务系统宕机（[Issue #36867](https://github.com/NousResearch/hermes-agent/issues/36867)）。*（暂无 Fix PR）*
*   **🟠 高危 - 网关文件描述符泄漏导致宕机**：长时间运行的平台重连循环会导致 SQLite 连接泄漏，约 12 小时后耗尽 2560 个 fd 限制，导致网关静默瘫痪（[Issue #37011](https://github.com/NousResearch/hermes-agent/issues/37011)）。*（暂无 Fix PR）*
*   **🟠 高危 - Discord 多工具调用无法打断**：在 Discord 中连续执行多工具调用时，用户的“停止”指令被入队延迟处理（[Issue #35267](https://github.com/NousResearch/hermes-agent/issues/35267)）。*（暂无 Fix PR）*
*   **🟡 中等 (P2) - API Server 思考链丢失**：API Server 不返回模型的推理/思考块，导致前端界面无法展示 CoT（[Issue #37044](https://github.com/NousResearch/hermes-agent/issues/37044)）。
*   **✅ 已解决 - MCP Server 工具缺失**：API Server 平台无法使用 MCP 工具的问题已通过相关 PR 修复并关闭。

---

### 6. 功能请求与路线图信号
从近期的 PR 活动可以清晰地看出项目下一阶段的演进方向：
*   **V2 架构与精细化网关控制**：[Issue #5143](https://github.com/NousResearch/hermes-agent/issues/5143) 关于网关多角色自动路由的提案已更新至 v2。同时，[PR #37021](https://github.com/NousResearch/hermes-agent/pull/37021) 正在引入按频道/群组划分的 Slash 命令权限控制，说明项目正在向**企业级精细权限管控**迈进。
*   **Human-in-the-Loop (HITL) 自我进化机制**：[PR #37042](https://github.com/NousResearch/hermes-agent/pull/37042) 引入了生产级的自主改进 harness，结合双评分系统和单调改进状态锁。这极有可能是 Hermes Agent 下一个重大版本的核心卖点（自主工作流闭环）。
*   **桌面端与客户端分离**：[Issue #36970](https://github.com/NousResearch/hermes-agent/issues/36970) 提出了为现有实例提供一流远程客户端接入的诉求，表明项目正试图将“本地算力节点”与“多端交互 UI”剥离开来。

---

### 7. 用户反馈摘要
从今日的 Issue 描述中可以提取出以下真实用户侧写和痛点：
*   **“只想要个能稳定跑在服务器的 AI 挂载机”**：大量用户期望通过 Hermes 持续监控 PR 或执行自动化任务，但因网关掉线（FD 泄漏）和 Cron 崩溃感到挫败。
*   **“对模型思考过程的透明度有执念”**：通过 API 对接 Open WebUI 的重度用户，非常依赖 Reasoning/Thinking blocks（[Issue #37044](https://github.com/NousResearch/hermes-agent/issues/37044)），他们希望知道“AI 为什么这么做”。
*   **“私有化部署和网络隔离环境的挣扎”**：多个反馈涉及 DNS 解析失败、企业代理环境下的崩溃，以及迫切需要接入自建 SearXNG 搜索引擎的需求，印证了 Hermes 在极客和开发者群体中拥有极高的渗透率。

---

### 8. 待处理积压
以下高价值且长期活跃的提案/缺陷尚未得到官方明确的排期响应，建议核心团队重点关注：
*   **推理引擎优化**：Deterministic Workflow Engine 提案（[Issue #5354](https://github.com/NousResearch/hermes-agent/issues/5354)，8 👍，沉寂近 2 个月），对于降低 Agent Token 成本至关重要。
*   **原生支持 Google Vertex AI**：([Issue #13484](https://github.com/NousResearch/hermes-agent/issues/13484)，10 👍)，填补目前 GCP 生态支持的空白。
*   **辅助 LLM 提供者配置缺陷**：([Issue #10149](https://github.com/NousResearch/hermes-agent/issues/10149)，16 👍)，环境变量配置引发的错误提示困扰了大量中初级用户。
*   **WhatsApp 首选频道持久化失败**：([Issue #9220](https://github.com/NousResearch/hermes-agent/issues/9220)），严重影响移动端重度用户的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-06-02)

> **数据源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **分析周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持了**中高活跃度**，社区持续围绕 v0.2.9 版本迭代。今日顺利发布了 `nightly` 自动构建版本（`v0.2.9-nightly.20260601.ba806592`），标志着主干分支正在为下一个稳定版积蓄代码。

整体来看，共有 **11 个 PR 更新**（其中 5 个被合并/关闭，6 个待处理），**7 个 Issue 更新**（0 个被关闭），说明开发重心正从新功能合并转向 Bug 修复和模型兼容性适配（尤其是 Anthropic Claude 新系列和 AWS Bedrock）。由于无 Issue 被关闭，需关注社区积压反馈的处理效率。

---

## 2. 版本发布

### 🚀 nightly: Nightly Build `v0.2.9-nightly.20260601.ba806592`
- **类型**: 自动化构建（可能不稳定，请谨慎使用）
- **对比变更**: [`v0.2.9...main`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **要点**: 
  - 今日多个 PR 已合入 `main` 分支，包括 AWS Bedrock Claude Opus 4.8 兼容修复、cron 工具增强以及空 LLM 响应重试逻辑。
  - **破坏性变更提示**: 暂无明确标注，但建议使用 AWS Bedrock 或 Claude 系列模型的用户重点关注模型参数兼容性调整。

---

## 3. 项目进展

今日共有 **5 个 PR 被合并/关闭**，推动了以下核心进展：

| PR | 作者 | 状态 | 推进内容 |
|---|---|---|---|
| [#2982](https://github.com/sipeed/picoclaw/pull/2982) | @loafoe | **CLOSED** | 🐛 修复 AWS Bedrock 上 Claude Opus 4.8 因 `temperature` 参数被弃用导致所有 LLM 调用失败的问题。 |
| [#2977](https://github.com/sipeed/picoclaw/pull/2977) | @SutraHsing | **CLOSED** | ✨ 为 cron 工具添加 `get` 和 `update` 操作，agent 可在编辑前检查任务详情，避免 `remove -> add` 的低效流程。 |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | @cstroie | **CLOSED** | ⚡ 优化 skill catalog token 消耗，后续对话和工具调用不再重复发送完整技能列表，节省 token 开销。 |
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | @dtapps | **CLOSED** | 🔔 新增 Server酱³ Bot (SC3Bot) 消息通道支持。 |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) | @dtapps | **CLOSED** | 🐛 修复 macOS 上因 `/var` 符号链接导致的路径验证失败。 |

**进展评估**: 今日合并覆盖了**模型兼容性、性能优化、工具增强、平台适配和通道扩展**五大方向，项目在稳定性和功能广度上均有实质推进。

---

## 4. 社区热点

### 🔥 最活跃 Issue
- **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** — `exec` 工具 `guardCommand` 误拦截合法命令（👍 2，评论 15）
  - **核心诉求**: 当 `restrict_to_workspace=true` 时，路径守卫的正则匹配过于简单粗暴，将非路径参数（如 `wttr.in/Beijing?T`）误判为路径遍历攻击，导致安全策略误杀正常工具调用。
  - **社区信号**: 这是一个长期反复被讨论的 Bug（自 2026-03 至今），大量评论说明用户在天气、网络请求等技能中频繁受挫。安全问题与易用性的平衡是该议题的核心矛盾。

### 📣 其他活跃讨论
- **[#2887](https://github.com/sipeed/picoclaw/issues/2887)**（评论 8）— RISC-V 架构上 `.deb` 包搭配 OpenAI 模型完全不可用，凸显了非 x86/ARM 架构的兼容性缺口。
- **[#2720](https://github.com/sipeed/picoclaw/issues/2720)**（评论 7，标记 `priority: high`）— PID 文件校验不验证进程身份，导致 Gateway 启动时崩溃循环。

---

## 5. Bug 与稳定性

按严重程度排列今日相关 Bug：

| 严重度 | Issue / PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Gateway 单例 PID 检查不验证进程身份，PID 复用导致崩溃循环 | ✅ 有修复 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813)（待合并） |
| 🟠 **Medium** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V .deb 版本与 OpenAI 模型组合完全不可用 | ❌ 暂无修复 PR |
| 🟠 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具安全守卫误拦截合法非路径命令 | ❌ 暂无修复 PR（长期遗留） |
| 🟡 **Low** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录只显示多轮对话中最后一条用户消息 | ❌ 暂无修复 PR |
| 🟡 **Low** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 默认配置中 Claude Sonnet 模型 ID 格式错误（点号 vs 连字符） | ✅ 有修复 PR [#2942](https://github.com/sipeed/picoclaw/pull/2942)（待合并） |
| 🟡 **Low** | [#2939](https://github.com/sipeed/picoclaw/issues/2939) | Claude Opus 4.7 调用因 `temperature` 参数被弃用而失败 | ✅ 有修复 PR [#2940](https://github.com/sipeed/picoclaw/pull/2940)（待合并）；Bedrock 端已通过 [#2982](https://github.com/sipeed/picoclaw/pull/2982) 修复 |

---

## 6. 功能请求与路线图信号

| 类型 | Issue / PR | 描述 | 纳入判断 |
|---|---|---|---|
| 🤖 Agent 协作 | PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) | 引入 Agent Collaboration Bus，支持 agent 间持久化通信、邮箱、权限感知路由 | 🔵 架构级特性，仍在 Open 状态，可能作为 v0.3.0 亮点 |
| 🔌 新 Provider | PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) | 添加 NEAR AI Cloud 作为一级 LLM Provider（`nearai` 协议） | 🟢 功能完整，有望在 v0.2.9 或后续 nightly 中合入 |
| 🔧 工具增强 | PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) (已关闭) | cron 工具增加查询和更新操作 | ✅ 已合并 |
| 📖 文档更新 | Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981) | v0.2.9 变更较多，使用手册需同步更新 | 🟡 社区提出，待维护者响应 |
| 🔁 LLM 重试 | PR [#2983](https://github.com/sipeed/picoclaw/pull/2983) | 修复 OpenAI 兼容 provider 返回空响应时缺少重试逻辑 | 🟢 修复类 PR，合入概率高 |

**路线图信号总结**: 项目正朝向**多 Agent 协作**和**多 Provider 生态**方向演进，同时持续打磨工具链的鲁棒性。

---

## 7. 用户反馈摘要

从今日活跃 Issues 的评论中提取真实用户声音：

| 痛点 / 场景 | 来源 | 用户情绪 |
|---|---|---|
| **工具安全策略过于激进**: exec 工具在合法场景（天气查询、API 调用）中频繁误杀命令，用户感到沮丧 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 😤 挫败 |
| **RISC-V 支持不完善**: 部署在 RISC-V 设备上的用户发现基础功能不可用 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 😟 担忧 |
| **历史记录丢失**: 多轮对话中历史消息不完整，影响用户对"记忆"能力的信任 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 😕 困惑 |
| **开箱体验受损**: 新安装后默认模型配置错误，首次使用即报错 | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 😡 负面第一印象 |
| **文档与版本脱节**: 用户升级后找不到对应版本文档 | [#2981](https://github.com/sipeed/picoclaw/issues/2981) | 🤔 期待改进 |

---

## 8. 待处理积压

以下为长期未关闭且需维护者重点关注的项目：

| 类型 | 编号 | 存续天数 | 严重度 | 状态说明 |
|---|---|---|---|---|
| Bug | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | ~90 天 | 🟠 | exec 工具安全守卫误拦截，评论数达 15 条，用户反复催促修复 |
| Bug | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | ~33 天 | 🔴 | PID 崩溃循环，标记 `priority: high`，有 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 但迟迟未合入 |
| Bug | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | ~26 天 | 🟠 | 历史消息丢失，影响用户信任，尚无修复 PR |
| Bug | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | ~16 天 | 🟠 | RISC-V 平台基础功能不可用，无修复进展 |
| PR | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | ~9 天 | — | Agent Collaboration Bus 大特性 PR，需架构评审 |
| PR | [#2940](https://github.com/sipeed/picoclaw/pull/2940) / [#2942](https://github.com/sipeed/picoclaw/pull/2942) | ~8 天 | 🟡 | Claude 模型兼容性修复，简单改动，建议优先合入以改善开箱体验 |

> ⚠️ **维护者提醒**: 今日 **0 个 Issue 被关闭**，积压持续增长。建议优先处理标记为 `priority: high` 的 [#2720](https://github.com/sipeed/picoclaw/issues/2720) 及其关联 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813)，以及长期悬而未决的 [#1042](https://github.com/sipeed/picoclaw/issues/1042)。

---

*本报告由 AI 智能体自动生成，数据截止至 2026-06-02 UTC。如有遗漏或错误，请以 [GitHub 仓库](https://github.com/sipeed/picoclaw) 实际数据为准。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目整体保持**高度活跃**的健康状态，开发重心明显聚焦于 `agent-runner` 的稳定性与容器兼容性。今日新增了 2 个活跃 Issue 和 4 个待合并 PR，且无新版本发布。值得注意的是，多名核心贡献者（如 ddaniels, dtreskunov 等）针对 Agent 执行过程中的死锁、状态损坏以及底层容器权限等问题提交了代码，显示出团队正在集中进行底层架构的健壮性攻坚。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无新合并的 PR，但有 1 个 PR 被关闭，多个核心修复 PR 正在审查中：
*   **PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) [CLOSED]**: 尝试在 v2 容器中运行浏览器抓取 sidecar 的试验性提交被关闭，可能方案被废弃或需重新设计。
*   **状态推进分析**: 虽然今日无代码合入主线，但待合并的 PR 链条已经形成。特别是 PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) 提供了针对崩溃循环的自愈机制，而 PR [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) 依赖的底层容器修复 PR [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) 也已就绪。这表明项目距离下一次包含重大稳定性提升的版本发布正在快速推进。

## 4. 社区热点
今日社区关注点集中在 Agent 运行时的“长时间挂起”与“循环崩溃”问题上：
*   **热点 Issue [#2668](https://github.com/nanocoai/nanoclaw/issues/2668)**: 开发者 mshirel 指出由于 SDK 同步执行且缺乏流事件，单个挂起的 MCP 工具会导致 Agent 会话被阻塞长达 30 分钟。这引发了关于 Agent 异步调度和超时机制的深层次架构诉求。
*   **热点 Issue [#2669](https://github.com/nanocoai/nanoclaw/issues/2669)**: ddaniels 报告的由于被破坏的 `thinking blocks` 导致的无限死循环问题。由于该问题极易复现且会导致会话永久卡死，其对应的修复 PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) 成为了今日最受期待的代码提交。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响 Agent 的连续运行能力，按严重程度排序如下：

*   🔴 **[Critical] 会话级死循环与状态损坏**
    *   **Issue**: [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) (agent-runner 恢复转录时导致 400 错误无限循环)
    *   **状态**: **已有对应 Fix PR** -> [#2670](https://github.com/nanocoai/nanoclaw/pull/2670)。PR 提出了一种新的自愈逻辑，在轮询循环中捕获特定错误并剥离损坏的 block。
*   🟠 **[High] MCP 工具缺乏超时导致全局阻塞**
    *   **Issue**: [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) (单个挂起工具导致会话最长阻塞 30 分钟)
    *   **状态**: 目前处于讨论阶段，暂无对应修复 PR。需要重构 SDK 轮询机制。
*   🟡 **[Medium] 环境兼容性导致拒绝启动**
    *   **Issue**: Claude Code v2.1.128 在 rootless Podman 环境下以 root 运行时触发权限安全限制报错。
    *   **状态**: **已有对应 Fix PR** -> [#2667](https://github.com/nanocoai/nanoclaw/pull/2667)。

## 6. 功能请求与路线图信号
*   **健壮的容错与回放机制 (PR [#2666](https://github.com/nanocoai/nanoclaw/pull/2666))**: dtreskunov 提交的提供商故障恢复机制（包含回滚、重放、友好降级）展示了项目下一阶段的演进方向，即从“基础可用”向“企业级高可用”过渡。
*   **命令行交互优化 (PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346))**: SidhayaPravda618 修复了未知斜杠命令被当作 Claude Code 指令的错误。这表明项目正在完善 CLI 交互边界，预计该 PR 将很快合入下个小版本。

## 7. 用户反馈摘要
*   **多渠道/多会话并发痛点**: Issue [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) 揭示了在多通道组中，Agent 对 A2A 回复的路由逻辑存在混乱，这反映了用户在复杂的多 Agent 协同场景下遇到了数据一致性阻碍。
*   **本地开发/部署体验差**: 关于 Rootless Podman (Issue [#2667](https://github.com/nanocoai/nanoclaw/pull/2667)) 和 未知命令丢弃 (Issue [#2346](https://github.com/nanocoai/nanoclaw/pull/2346)) 的反馈，说明开发者在私有化部署和本地调试时，对系统的容错提示和容器化支持有更高要求。

## 8. 待处理积压
*   ⚠️ **长期 Bug 等待修复**: Issue [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) (A2A 多通道回复路由错误) 创建于近一个月前（2026-05-07），今日仅通过评论重新激活。虽然标记为 High，但目前尚未看到明确的代码修复进度。建议维护者优先评估该会话路由逻辑对多用户交互的影响。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体呈现**低活跃度但高度聚焦**的状态。项目今日无新版本发布，也无新增或关闭的 Issues，社区讨论较为平静。然而，代码贡献层面出现了一个针对性的优化提交：开发者 `raskevichai` 提交了一项针对 Telegram 机器人的交互体验修复 PR。总体而言，项目当前处于平稳迭代期，维护重心偏向于具体集成渠道（如 Telegram）的用户体验打磨。

## 2. 版本发布
**无**。今日项目无新版本发布。

## 3. 项目进展
今日无已合并或已关闭的 PR，但有一项高价值的待合并 Pull Request 正在推进中：

*   **[OPEN] [fix(telegram): show typing indicator during callback-query processing (#943)](https://github.com/nullclaw/nullclaw/pull/943)**
    *   **贡献者**: `raskevichai`
    *   **进展分析**: 该 PR 旨在解决 Telegram 端内联按钮（如 `nc_choices` 选项或任何 `callback_query`）点击后，AI 智能体在处理请求期间（通常需要 5-30 秒的模型调用）缺乏视觉反馈的问题。修复后，机器人在处理回调时会显示 "typing..."（正在输入）状态。这是一个典型的 AI 聊天机器人 UX 改进，有效填补了用户点击操作与 AI 开始回复之间的“静默期”，大幅降低了用户因不明系统状态而重复点击的概率。

## 4. 社区热点
今日项目无新增讨论或高度活跃的 Issues/PRs，社区热度处于低位。

## 5. Bug 与稳定性
今日无新报告的崩溃或回归问题。唯一相关的 Bug 修复已由社区开发者主动认领并提交 PR：

*   **中等严重程度**: Telegram 端交互“静默”问题。表现为触发 callback_query 后缺乏打字指示器。目前已有对应的修复 PR（[#943](https://github.com/nullclaw/nullclaw/pull/943)），并关联了原始 Issue ([#942](https://github.com/nullclaw/nullclaw/issues/942)）。

## 6. 功能请求与路线图信号
今日无新增功能请求。但从今日的 PR 动向可以看出，项目正在经历**多平台前端体验的精细化打磨**阶段。确保 AI 智能体在不同第三方通讯软件（如 Telegram）中表现得更像“真人”（如加入打字状态提示），是目前开发者的关注重点。这暗示着核心 Agent 逻辑可能已趋于稳定。

## 7. 用户反馈摘要
由于今日无活跃的 Issue 评论，无法直接提取长篇用户反馈。但从 `raskevichai` 提交的 [#943](https://github.com/nullclaw/nullclaw/pull/943) 及其关联的 Issue 可以间接推断：**用户对 AI 助手在多轮对话中的响应延迟较为敏感**。在长达 5-30 秒的 Agent 思考时间内，任何缺乏 UI 状态反馈的交互都会引发体验上的断层。

## 8. 待处理积压
*   **提醒维护者关注**: 今日新开的 PR [#943](https://github.com/nullclaw/nullclaw/pull/943) 目前仍处于待合并状态。鉴于其仅针对 Telegram 端的特定交互问题且关联了已有的 #942 号 Issue，建议项目核心维护团队尽快进行 Code Review，以便在下一个版本周期中改善 Telegram 用户的交互体验。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
IronClaw 项目在过去24小时内保持了极高的开发活跃度与社区关注度，项目正处于 **Reborn 架构（云原生与无状态智能体模型）的深度演进期**。
今日共有 46 个 Pull Requests 发生状态更新（其中 33 个被合并/关闭，13 个待合并），核心开发团队（特别是 `serrrfirat` 和 `henrypark133`）正在密集落地 OAuth 集成、触发器调度和底层能力扩展。社区侧，共有 6 个 Issues 更新（5 个新开/活跃），其中既包含了开发者对 Reborn 架构的深度探讨，也暴露了当前版本存在的上下文窗口管理和 E2E 测试稳定性问题。整体来看，项目工程推进迅速，但需注意底层重构带来的潜在稳定性考验。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并或关闭了大量核心 PR，标志着 IronClaw Reborn 架构在各个维度取得了实质性突破：
- **OAuth 与身份认证集成**：合并了 GSuite OAuth 设置 ([PR #4297](https://github.com/nearai/ironclaw/pull/4297))、GitHub 能力向 Reborn 的完整移植 ([PR #4280](https://github.com/nearai/ironclaw/pull/4280))，以及 WebUI 授权前端的修复 ([PR #4291](https://github.com/nearai/ironclaw/pull/4291))。这些合并意味着 Reborn 架构的企业级多租户身份验证基石已基本就位。
- **触发器调度核心完善**：核心成员 `henrypark133` 合并了触发轮询器核心 ([PR #4301](https://github.com/nearai/ironclaw/pull/4301)) 及其状态缝隙处理 ([PR #4292](https://github.com/nearai/ironclaw/pull/4292))，为无状态 Agent 的定时任务和事件驱动奠定了基础。
- **系统健壮性与预算管理**：关闭了长期跟踪的 Reborn 成本预算端到端实现 ([PR #3899](https://github.com/nearai/ironclaw/pull/3899))；同时修复了扩展清单哈希迁移失败导致的启动崩溃问题 ([PR #4299](https://github.com/nearai/ironclaw/pull/4299))。
- **工具能力与沙箱**：合并了 GSuite 动态能力向模型的暴露 ([PR #4293](https://github.com/nearai/ironclaw/pull/4293)) 及 WebUI 取消状态逻辑修复 ([PR #4295](https://github.com/nearai/ironclaw/pull/4295))。

## 4. 社区热点
- **Reborn 架构的云原生探讨**：用户 `liaoqianchuan` 发起了关于 Reborn 分支路线图与云原生架构的深度讨论 ([Issue #4279](https://github.com/nearai/ironclaw/issues/4279))，高度评价了向无状态 Agent 模型的转变，并探讨了状态解耦在多租户环境下的必要性。
- **事件流管理机制落地**：由 `serrrfirat` 提出的 EventStreamManager ([Issue #3281](https://github.com/nearai/ironclaw/issues/3281)) 今日已关闭，该功能为 Web SSE 和 WebSocket 提供了持久的、可重放的产品级事件流，是 Agent 实时通信的关键设施。

## 5. Bug 与稳定性
- **[P0] 潜在的性能与崩溃隐患 (ENGINE_V2)**：用户 `liaoqianchuan` 报告了在 ENGINE_V2 中存在无界对话增长的问题 ([Issue #4278](https://github.com/nearai/ironclaw/issues/4278))。所有会话消息作为单一 JSON 存储可能导致上下文窗口耗尽，对长时间运行的 Agent 构成严重威胁。（*当前尚无针对此特定问题的修复 PR*）
- **[P1] Nightly E2E 测试失败**：自动化机器人报告 Nightly E2E 流水线出现故障 ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108))，涉及 v2-engine 的端到端验证，表明近期密集的合并可能引入了回归。

## 6. 功能请求与路线图信号
- **大型代码文件拆分重构**：核心贡献者提出重构 `TriggerPollerWorker` ([Issue #4303](https://github.com/nearai/ironclaw/issues/4303))，计划将约 2500 行的单文件拆分为聚焦的模块，这将极大提升后续社区贡献的可读性。
- **WebUI OAuth 登录集成**：开发者提出在 WebUI 原生集成 OAuth 登录界面 ([Issue #4287](https://github.com/nearai/ironclaw/issues/4287))。*路线图信号：此请求已有高度匹配的生产级 PR 正在审查中 ([PR #4294](https://github.com/nearai/ironclaw/pull/4294))，预计很快合并。*
- **第三方模型与生态扩展**：社区贡献者提起了将 MiniMax 默认模型升级至 M3 的请求 ([PR #4298](https://github.com/nearai/ironclaw/pull/4298))，项目在多 LLM 供应商适配方面保持活跃。

## 7. 用户反馈摘要
- **痛点与关注点**：从近期 Issues 提炼发现，企业级用户和深度开发者对 IronClaw 的**状态管理** 和 **上下文窗口分配策略** 极为敏感（如 #4278）。系统在长期记忆和超长对话中的资源管控能力是目前的短板。
- **正面反馈**：外部开发者对项目转向 Cloud-Native 和无状态架构表现出强烈的兴趣，认为这解决了以往本地沙箱难以扩展的痛点，为多租户 SaaS 化部署铺平了道路。

## 8. 待处理积压
- **Feishu/Lark 深度集成停滞**：由核心成员发起的飞书长连接 WebSocket 事件接入 ([PR #4178](https://github.com/nearai/ironclaw/pull/4178)) 自 5 月 28 日提出后仍处于 Open 状态，涉及复杂的二进制 protobuf 帧处理，建议维护者推进 Review 以补齐国内企业通讯生态的接入能力。
- **Slack Reborn 事件接入等待合并**：社区贡献者提交的 Slack Events API ingress ([PR #4272](https://github.com/nearai/ironclaw/pull/4272)) 目前处于待合并状态，这是完善 Reborn 多渠道 Host 闭环的重要一环，需关注其依赖的 PR #4035 的合并进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI (网易有道) 项目 2026-06-02 动态日报：

---

# 📡 LobsterAI 开源项目动态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，LobsterAI 项目展现出**极高的工程迭代速度与版本交付能力**。团队一口气合并/关闭了 11 个 Pull Requests，并成功发布了 `2026.6.1` 正式版本。项目当前的重心明显聚焦于**“Kit（专家套件）生态”的建设**与**“多端协作体验的优化”**。社区方面活跃度保持平稳，但出现了一起关于积分订阅清零机制的用户客诉，值得产品和运营团队关注。

## 2. 版本发布
- **[Release] LobsterAI 2026.6.1** ([查看发布详情](https://github.com/netease-youdao/LobsterAI/releases))
  - **更新亮点**：
    1. **Expert Kit Store 集成**：引入了专家套件商店，并在会话中深度融合了 Kit 的调用能力 ([PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060))。
    2. **插件更新机制增强**：新增了对 npm/clawhub 源的插件更新检查功能 ([PR #2069](https://github.com/netease-youdao/LobsterAI/pull/2069))。
    3. **稳定性修复**：修复了部分 MCP 相关的缺陷。
  - **迁移/升级建议**：从 `2026.5.28` 升级至 `2026.6.1` 的过程平滑，但考虑到新增了 Kit 市场及 IM 实例重复校验逻辑，建议企业级用户升级后清理本地缓存并重新配置相关多实例机器人。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在功能丰富度和 UI/UX 上取得了实质性迈进：
- **专家套件功能完善**：合并了多项关于 Kit 的优化，包括支持卸载前弹窗确认 ([PR #2084](https://github.com/netease-youdao/LobsterAI/pull/2084))、已安装技能描述的本地化支持 ([PR #2083](https://github.com/netease-youdao/LobsterAI/pull/2083)) 以及整体 UI 的更新 ([PR #2088](https://github.com/netease-youdao/LobsterAI/pull/2088))。
- **协作与对话增强**：新增了本地会话分叉能力，允许用户基于特定消息重新开启对话，并保留长上下文 ([PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085))。
- **底层维护**：添加了 MiniMax m3 模型和 BYOK（自带密钥）模型的默认上下文窗口更新 ([PR #2089](https://github.com/netease-youdao/LobsterAI/pull/2089))，并在主进程补充了关键日志 ([PR #2082](https://github.com/netease-youdao/LobsterAI/pull/2082))。

## 4. 社区热点
- **🔥 热门 Issue #2081: 订阅积分月底被清零引发不满** ([Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081))
  - **情况分析**：一位用户反馈其花费购买的 5500 积分在月底未使用的情况下被系统直接清零，并附带了截图。该 Issue 目前有 1 条评论，处于 Open 状态。
  - **背后诉求**：这反映了 SaaS 化积分消耗机制中常见的“期末清零”策略与用户“买断/充值”心理预期之间的冲突。用户认为这种机制极度损害体验。建议官方团队及时介入安抚，并评估计费策略的合理性。

## 5. Bug 与稳定性
- **[中等] 微信端更新/重装 Bug**：已在今日被修复 ([PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086))，解决了用户在更新或重新安装应用时触发的特定微信相关错误，提升了 IM 集成场景的稳定性。
- **[低等] Artifacts 本地文件丢失报错不明确**：已修复 ([PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073))。过去当用户生成的本地文件被移动或删除导致不可访问时，系统缺乏明确的提示。现已加入清晰的 Toast 提示信息，同时保持了对 macOS 和 Windows 双平台路径的兼容处理。

## 6. 功能请求与路线图信号
- **IM 多实例防重机制即将上线**：由开发者提交的 [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 今日被重新激活（已 open 超 2 个月）。该 PR 为钉钉、飞书、QQ 添加了实例名称和凭证 ID 的重复校验。这释放了一个信号：**项目正在积极打磨企业级 IM 多群组/多机器人并发管理的鲁棒性**，该功能极大概率会纳入下一个正式版本。

## 7. 用户反馈摘要
从目前的 Issue 追踪来看：
- **痛点**：用户对“资产（积分）过期清零”极度敏感，缺乏对消耗进度的安全感。
- **正面趋势**：得益于最近频繁的 UI 更新和 Kit 功能上线，可以看出项目正从一个极客工具向**商业化、插件化、平台化**的个人助手演进。本地 Fork 会话和插件更新检查等细节 PR，反映出团队在认真打磨核心使用体验。

## 8. 待处理积压
- **需关注的老旧 PR**：[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 虽已提交修复，但因历时较久且带有 `[stale]` 标签，仍处于待合并状态。考虑到该修复对企业级 IM 用户至关重要，建议 Maintainers 优先进行代码 Rebase 与 Merge。
- **需响应的用户客诉**：[Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081) 涉及财务/计费争议，若不及时回复，容易发酵为负面公关，建议由社区经理或产品经理尽快给出官方解释或补偿方案。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026-06-02 Moltis 项目动态日报：

# Moltis 项目动态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时，Moltis 项目整体呈现出**底层重构与稳定性双管齐下**的健康态势。项目今日无新增 Issues，也未发布新版本，但围绕核心 LLM 提供商适配和会话历史管理的代码合并工作非常活跃。共有 4 个 Pull Requests 发生了状态更新，其中 3 个核心 PR 顺利合并/关闭，表明项目正在积极进行底层架构打磨。目前仍有 1 个待合并 PR 正在处理会话重载边界问题，整体开发节奏稳健且注重代码质量。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日的开发重心集中在 **Provider（提供商）抽象层优化**与**底层调用逻辑的健壮性提升**，共关闭/合并了 3 个重要 PR，项目底层架构稳固性显著向前迈进：

*   **OpenAI 兼容逻辑彻底解耦重构 ([moltis-org/moltis PR #1090](https://github.com/moltis-org/moltis/pull/1090))**
    *   **状态**：CLOSED
    *   **进展**：移除了以往基于 URL/名称特征来猜测 OpenAI 兼容行为的硬编码逻辑，替换为显式的 `capability policies`（能力策略）。通过注册机制将内置提供商和解析后的模型能力进行绑定，同时将自定义提供商置于严格的默认策略下。此重构大幅提升了多模型接入的确定性与安全性，并已增加回归测试。
*   **新增 NEAR AI Cloud 接入支持 ([moltis-org/moltis PR #1031](https://github.com/moltis-org/moltis/pull/1031))**
    *   **状态**：CLOSED
    *   **进展**：这是一个完整的功能迭代，正式引入了 NEAR AI Cloud 作为新的 OpenAI 兼容提供商。支持了公开模型目录的自动发现以及 TEE（可信执行环境）感知推荐。配套的设置逻辑、引导程序和文档均已合并，扩展了 Moltis 的 AI 生态版图。
*   **修复 OpenAI Codex 工具调用参数处理 ([moltis-org/moltis PR #1088](https://github.com/moltis-org/moltis/pull/1088))**
    *   **状态**：CLOSED
    *   **进展**：解决了 OpenAI Codex provider 中流式传输缺失参数增量的边界情况。现在能正确记录 `response.function_call_arguments.done` 的 payload，并在未发出参数增量时合成对应的流参数。这有效防止了因缺失参数导致的诊断报错，提升了 Agent 执行工具调用时的稳定性。

## 4. 社区热点
*今日项目无新增或处于高热讨论的 Issues，且近期 PR 评论数据未公开或为零。整体来看，目前的代码仓库主要由核心维护者和重度贡献者（如 @penso, @s-salamatov, @PierreLeGuen）基于明确的演进路线图进行高频推动，处于“少说多做”的高效开发阶段。*

## 5. Bug 与稳定性
今日未收到外部用户报告的新 Bug。但在内部开发与测试中，发现并修复了核心层面的逻辑缺陷：

*   **中度风险：OpenAI Codex 最终工具调用参数丢失** 
    *   **现状**：在流式响应中如果未发出参数增量，容易导致 missing-argument 错误。
    *   **状态**：**已修复**，代码已随 [PR #1088](https://github.com/moltis-org/moltis/pull/1088) 合并。
*   **中度风险：持久化工具结果在重载时引发 OOM 或超出上下文**
    *   **现状**：当会话历史被重新补液时，未受限制的 `tool` 和 `tool_result` 可能会撑爆上下文窗口。
    *   **状态**：**修复中**，修复方案已在 [PR #1089](https://github.com/moltis-org/moltis/pull/1089) 中提出，涵盖普通聊天、流式传输、重试、静默记忆等多个场景，目前处于 OPEN 状态待合并。

## 6. 功能请求与路线图信号
虽然今日无基于 Issue 的新功能请求，但从已合并的 PR 中可以提炼出明确的路线图信号：
1.  **全面拥抱“能力驱动”架构**：从 [PR #1090](https://github.com/moltis-org/moltis/pull/1090) 看出，Moltis 正在打造一个更标准化的模型接入层。未来接入任何自定义 LLM 将不再依赖“黑盒”正则或 URL 匹配，而是采用声明式的能力注册，为后续接入更多模态模型打下基础。
2.  **深耕去中心化 AI 计算**：[PR #1031](https://github.com/moltis-org/moltis/pull/1031) 合并 NEAR AI Cloud 并考虑 TEE 意识，表明项目在探索或兼容具有隐私保护和去中心化特性的 AI 基础设施。

## 7. 用户反馈摘要
*由于今日无新增 Issues 及评论互动，暂无法提炼终端用户的即时痛点反馈。但从现有 PR 的设计目标推断，用户在搭配 OpenAI Codex 等模型进行复杂 Agent 循环（尤其是处理 Tool calls）时，曾遭遇过参数解析截断和长上下文重载失败的问题，目前的代码迭代正在积极填补这些深层次痛点。*

## 8. 待处理积压
目前需重点关注以下处于 OPEN 状态的 PR，建议维护者及时跟进审查：

*   **关键 PR 待合并**：[moltis-org/moltis PR #1089](https://github.com/moltis-org/moltis/pull/1089) (Cap persisted tool results before rehydration)
    *   **说明**：该 PR 旨在为会话历史重载机制加上“安全盖”，防止过长的工具结果破坏 LLM 交互。由于涉及底层 Prompt 拼接核心逻辑（影响正常对话、记忆压缩等），建议尽快安排深度 Code Review 并推进合并，以彻底解决长对话下的上下文溢出隐患。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 开源项目动态日报 (2026-06-02)

## 1. 今日速览
CoPaw (QwenPaw) 今日迎来了重要里程碑，正式发布了 `v1.1.10` 稳定版及对应的 Beta 测试版，标志着项目在多智能体调度和编码交互体验上迈出了关键一步。项目活跃度持续保持**极高**状态，过去 24 小时内共产生了 50 条 Issue 更新（32 新开/活跃，18 关闭）和 34 条 PR 更新（25 待合并，9 合并/关闭）。社区目前关注的核心焦点集中在**定时任务 的会话隔离**、**模型上下文管理**以及**多渠道集成（如飞书、微信、腾讯元宝）**上，整体呈现出“核心功能快速迭代+社区高频反馈”的良性循环。

---

## 2. 版本发布
今日连续发布了两个新版本，正式版包含重要的架构更新：
- **[v1.1.10](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10)**
  - **✨ 核心新增**：
    - **子智能体生成**：Agent 系统引入了全新的 `spawn_subagent` 工具，支持在工作空间内进行短暂（ephemeral）的子代理执行，大幅提升了多智能体协同和任务拆分能力 ([PR #4806](https://github.com/agentscope-ai/QwenPaw/pull/4806))。
    - **编码模式增强**：新增了“打开目录”选项卡，允许 Agent 更好地引用和处理本地文件路径。
- **[v1.1.10-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.2)**
  - **🔧 修复与优化**：修复了网站头部样式，加入了自动继续视频功能；修复了技能 标签保留、启用/禁用状态及变更检测的问题。

---

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，涵盖了版本发布、核心底层重构和渠道修复，项目整体稳健推进：
- **架构级重构（里程碑）**：合并了从 AgentScope 1.x 到 2.0.0 的底层迁移重构 ([PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846))，这为系统未来的扩展性和稳定性打下了坚实基础。
- **MCP 性能优化**：关闭/推进了添加 `SharedMCPPool` 的 PR ([PR #4849](https://github.com/agentscope-ai/QwenPaw/pull/4849))，该 PR 旨在解决 Windows 环境下多智能体导致的 MCP 服务进程爆炸问题，实现跨 Agent 的服务复用。
- **版本与发布管理**：合并了版本号升级至 v1.1.10 及其 Release Notes 的 PR ([PR #4867](https://github.com/agentscope-ai/QwenPaw/pull/4867))。
- **渠道接入扩展**：新增了腾讯元宝 渠道的全量集成 ([PR #4856](https://github.com/agentscope-ai/QwenPaw/pull/4856))，扩展了 Bot 的部署生态。

---

## 4. 社区热点
今日社区讨论最激烈的问题反映了用户在高级调度和会话管理中的痛点：
1. **[定时任务与用户消息共享 session 导致任务中断](https://github.com/agentscope-ai/QwenPaw/issues/4653)** (👍0, 评论 9)
   - **诉求分析**：用户在设置 20:00 定时任务后，若在执行期间发送新消息，系统会优先处理用户消息导致定时任务被强行中断。这表明多用户/多并发场景下的**会话隔离机制**亟待完善。
2. **[请求实现类似 Trae 的对话级回退与删除功能](https://github.com/agentscope-ai/QwenPaw/issues/4789)** (👍1, 评论 9)
   - **诉求分析**：用户强烈希望不仅能够回退对话文本，还能联动回退文件系统的更改（配合二次确认）。这反映了高级用户对 Agent **沙箱版本控制** 的强烈需求。
3. **[ACP 协议连接 Claude Code 失败](https://github.com/agentscope-ai/QwenPaw/issues/4824)** (评论 3)
   - **诉求分析**：外部 Agent 通信协议（ACP）版本类型不匹配导致 delegate_external_agent 报错。说明 QwenPaw 在与其他主流智能体互通的兼容性细节上还需要打磨。

---

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的 Bug，部分已有对应的修复 PR：

**🔴 严重 (系统级崩溃或阻塞)**
- **[无效 Job 导致整个工作区崩溃](https://github.com/agentscope-ai/QwenPaw/issues/4835)**：当 `jobs.json` 配置有误时，会导致整个工作空间无法启动。目前无直接修复 PR，需注意配置规范。
- **[v1.1.9 发送消息无反应](https://github.com/agentscope-ai/QwenPaw/issues/4864)**：特定环境下发送消息无响应，严重影响基础功能。
- **[新会话加载原始历史导致上下文无限膨胀](https://github.com/agentscope-ai/QwenPaw/issues/4872)**：未压缩的历史上下文被直接加载，极易引发 OOM 或达到模型 Token 上限。

**🟠 中等 (资源泄漏与渠道异常)**
- **[Windows 浏览器进程锁死](https://github.com/agentscope-ai/QwenPaw/issues/4844)**：会话结束后浏览器进程残留。👉 **已有修复 PR**：[PR #4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)。
- **[微信频道推送失败](https://github.com/agentscope-ai/QwenPaw/issues/4878)**：定时任务执行成功但无法将结果推送至微信。👉 **已有修复 PR**：[PR #4883](https://github.com/agentscope-ai/QwenPaw/pull/4883)。
- **[Cron share_session 执行轨迹为空](https://github.com/agentscope-ai/QwenPaw/issues/4818)**：定时任务假运行，轨迹记录缺失。👉 **已有修复 PR**：[PR #4822](https://github.com/agentscope-ai/QwenPaw/pull/4822)。

---

## 6. 功能请求与路线图信号
结合近期的 Issues 和开放中的 PR，可以观察到项目下一阶段的演进方向：
- **LLM 容错与路由**：用户请求增加 [模型 Fallback Chain 机制](https://github.com/agentscope-ai/QwenPaw/issues/4882)，希望在主模型不可用时自动降级到备用模型，提升系统弹性。
- **多账户隔离体系**：收到 [支持 Agent 级别的 Web 账户隔离](https://github.com/agentscope-ai/QwenPaw/issues/4859) 的需求。目前的 Web 控制台账户权限过于宽泛，不适合多租户/多员工场景。
- **桌面端体验优化**：大量反馈要求 Tauri 桌面端解决弹窗（[静默执行 Shell](https://github.com/agentscope-ai/QwenPaw/issues/4777)）、支持状态记忆等。社区贡献者已提交 [Windows 启动性能优化 (PR #4772)](https://github.com/agentscope-ai/QwenPaw/pull/4772) 和 [Tauri 自动更新 (PR #4669)](https://github.com/agentscope-ai/QwenPaw/pull/4669)。
- **飞书生态加深**：正在Review中的 [飞书群组会话共享模式 (PR #4821)](https://github.com/agentscope-ai/QwenPaw/pull/4821) 有望在下一版合并。

---

## 7. 用户反馈摘要
通过对今日 Issues 的提炼，总结出用户的几个核心体感：
- **升级体验割裂**：用户抱怨 [内置技能在每次升级后会被强行重置为启用](https://github.com/agentscope-ai/QwenPaw/issues/4807)（如 docx, xlsx 等），导致需要反复手动关闭。
- **Token 消耗感知差**：用户在使用 gpt-5.5 等高级模型时，希望有更明确的配置和展示方式（如 [reasoning_effort 参数](https://github.com/agentscope-ai/QwenPaw/issues/4814) 引导），同时也期待合并 [Token 实时用量悬浮窗 (PR #4433)](https://github.com/agentscope-ai/QwenPaw/pull/4433)。
- **Windows 体验待打磨**：包括 `pip` 升级后残留前缀为 `~` 的旧版 Skill 目录（[幽灵技能问题](https://github.com/agentscope-ai/QwenPaw/issues/4839)）、控制台加载缓慢等，Windows 环境的兼容性仍需重点关照。

---

## 8. 待处理积压
以下高价值或高频讨论的功能/修复目前处于 Open 状态较长时间，需要核心团队关注：
1. **桌面端基础体验完善**：[UI 字体缩放与后台服务模式](https://github.com/agentscope-ai/QwenPaw/issues/4154) 已积累较多讨论，对长时间使用的用户至关重要。
2. **多智能体协同逻辑重构**：[多智能体协作工作流优化](https://github.com/agentscope-ai/QwenPaw/issues/4211) 提出内置工具对齐，涉及核心调度架构。
3. **底层 AgentScope 2.0 迁移遗留**：[AgentScope 2.0 重构 PR (PR #4846)](https://github.com/agentscope-ai/QwenPaw/pull/4846) 标记为 Breaking Change 且仍在 WIP，需要集中精力推进以解除其他依赖此底层的 PR 阻塞。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-02)

> 分析师视角：基于客观数据，深度追踪 ZeptoClaw 项目在 AI 智能体与个人助手领域的技术演进与社区生态。

### 1. 今日速览
过去 24 小时，ZeptoClaw 仓库度过了极为充实且**偏向底层治理与工程维护**的一天。项目以 17 个 PR 的惊人吞吐量（绝大多数为 DependaBot 驱动的依赖升级）完成了全面的安全与版本基线更新。唯一待合并的手动提交 PR 聚焦于**将 CI 的二进制文件体积监控升级为强制门禁**，这反映出核心维护者对软件分发成本的严苛把控。整体来看，项目处于健康且高频迭代的“清积压”阶段，稳定性基座正被进一步夯实。

### 2. 版本发布
* **无新版本发布** (Lastest Releases: 无)
* *注：今日无正式版发布，但密集的依赖更新和 CI 策略变动可能是在为下一个 Minor 或 Patch 版本的发布做代码环境准备。*

### 3. 项目进展
今日共有 17 个 PR 被关闭或合并，1 个 PR 待合并，项目整体在工程化与稳定性上迈进了重要一步：

* **🚀 CI 流水线质控升级**：
  * PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) [OPEN]: 核心进展。将 `binary-size` 测试任务提升为 PR 合并的强制门禁，设定上限为 7.5MB，确保每次代码提交都不会引入意外的体积膨胀（Binary-size drift）。
* **🛡️ 关键 Bug 修复 (Cherry-pick)**：
  * PR [#610](https://github.com/qhkm/zeptoclaw/pull/610) [CLOSED]: 修复了 Provider 关键字回退机制错误占用未配置提供者的致命错误。此为外部贡献者 PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) 的精简移植版，清除了阻碍 CI 的 OAuth 问题。
* **🧹 安全漏洞与依赖清理**：
  * PR [#594](https://github.com/qhkm/zeptoclaw/pull/594) [CLOSED]: 清除了由于最新 RUSTSEC 告警导致的全面 CI 阻塞（将 `lettre` 升级至 0.11.22，`diesel` 升级至 2.3.8）。此举解除了之前所有 PR 的锁定状态。
* **📦 全面依赖升级 (DependaBot)**：
  * 基础设施：Rust 基础镜像升级至 1.95-slim-trixie ([#596](https://github.com/qhkm/zeptoclaw/pull/596))，Debian 镜像更新 ([#595](https://github.com/qhkm/zeptoclaw/pull/595))，GitHub Actions 组件更新 ([#597](https://github.com/qhkm/zeptoclaw/pull/597), [#604](https://github.com/qhkm/zeptoclaw/pull/604))。
  * Rust 核心依赖：`mail-parser` ([#603](https://github.com/qhkm/zeptoclaw/pull/603)), `uuid` ([#601](https://github.com/qhkm/zeptoclaw/pull/601)), `tower-http` ([#606](https://github.com/qhkm/zeptoclaw/pull/606)), `clap` ([#605](https://github.com/qhkm/zeptoclaw/pull/605)), `bcrypt` ([#598](https://github.com/qhkm/zeptoclaw/pull/598))。
  * 前端与文档：Astro 升级至 6.3.x ([#600](https://github.com/qhkm/zeptoclaw/pull/600), [#607](https://github.com/qhkm/zeptoclaw/pull/607))，Starlight 升级 ([#599](https://github.com/qhkm/zeptoclaw/pull/599), [#602](https://github.com/qhkm/zeptoclaw/pull/602))，ESLint 升级至 10.3.0 ([#608](https://github.com/qhkm/zeptoclaw/pull/608))。

### 4. 社区热点
* **聚焦二进制体积的极致控制**：
  今日唯一的活跃 Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612) 引起了高度关注。维护者 `qhkm` 发现，虽然当前 darwin-arm64 的包体积（6.98MB）在 7MB 以下，但相比 6.2MB 的历史低水位，已经产生了约 800KB 的“体积漂移”。
* **诉求分析**：作为个人 AI 助手项目，用户通常需要在各种轻量级环境（如边缘设备、小型 VPS）中快速部署。800KB 的增量可能导致部分部署环境门槛升高。维护者要求将门禁收紧至 7MB，展示了对软件轻量化的执念。

### 5. Bug 与稳定性
今日报告并处理的缺陷严重影响了多模型接入的稳定性：
* **🔴 [已修复] Provider 推理引擎解析错误 (P2-high)**：
  * **问题**：[#610](https://github.com/qhkm/zeptoclaw/pull/610) / [#592](https://github.com/qhkm/zeptoclaw/pull/592) 揭示，在模型 ID 为 `openai/gpt-oss-120b` 时，`infer_provider_name_for_model` 函数会发生误判，将请求路由到用户根本未配置的 Provider，导致在生产环境中出现 100% 的调用错误率（特别是在 NIM-served Photon 实例上）。
  * **状态**：已有 Fix PR 合并。
* **🟡 [已解决] RUSTSEC 零容忍策略导致的 CI 停摆**：
  * **问题**：[#594](https://github.com/qhkm/zeptoclaw/pull/594) 显示，由于项目的 `deny.toml` 对告警采取零容忍（`ignore = []`），5月22日暴露的 6 个新 RUSTSEC 安全漏洞直接导致了全仓库 CI 红灯。
  * **状态**：核心依赖 `lettre` 和 `diesel` 已升级，CI 阻塞已解除。

### 6. 功能请求与路线图信号
* **更严格的基础设施即代码**：通过 Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612) 可以判定，项目未来的迭代将把**非功能性需求（体积、安全）的自动化拦截**作为重点。这不仅是一个规则，更是向潜在的企业级/高要求个人用户释放“高质稳定”的信号。
* **外部贡献机制优化**：PR [#610](https://github.com/qhkm/zeptoclaw/pull/610) 的操作表明，主分支正在积极梳理和吸纳早期因为 CI 阻塞而无法合并的社区 Fork 提交。

### 7. 用户反馈摘要
虽然今日 Issue 和 PR 评论区的直接互动数据为 0，但从**代码提交日志与 Bug 描述**中可以提取出真实的用户场景反馈：
1. **痛点：私有化/本地大模型部署的识别异常**。PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) 记录表明，用户在接入类似 NIM 代理的自定义大模型节点时，现有的基于关键字的模型推测逻辑会彻底失效。项目未来可能需要引入显式的 `provider_fallback` 配置项来替代纯关键字猜测。
2. **痛点：软件体积敏感**。在轻量云主机或容器热加载场景下，ZeptoClaw 的用户对二进制文件大小的容忍度极低（甚至 800KB 的增幅也会被追踪为 P2 级别任务）。

### 8. 待处理积压
目前暂无长期未响应的历史包袱，但有以下实时阻塞项需要持续关注：
* **待合并的门禁 PR**：[PR #611](https://github.com/qhkm/zeptoclaw/pull/611) 目前状态为 OPEN，它是解决 [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) 的前置条件。一旦合并，将意味着项目的体积控制正式进入“强制锁死”阶段。后续任何引入新依赖的 PR 都必须证明其编译后的体积增量在可接受范围内，这可能会对未来的 Feature PR 产生较高的审查门槛。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了**极高的社区活跃度与开发推进速度**。尽管今日没有发布新的稳定版本，但社区共产生了 **29 条 Issue 更新**（其中 25 条新开/活跃）和 **35 条 PR 更新**（31 条待合并）。开发重点高度聚焦于**多渠道安全增强（如 Telegram/Discord/WhatsApp）、底层 AI Agent 运行时的鲁棒性、以及可观测性体系的构建**。大量来自不同开发者的 PR 密集提交，表明项目正在为下一个重要大版本的发布进行高频的功能迭代与漏洞修补。

## 2. 版本发布
* **今日无新版本发布**。

## 3. 项目进展
今日共有 4 个 PR 被合并/关闭，另有 31 个活跃 PR 正在等待合并，大量核心代码正在接受集中审查，项目整体功能厚度显著增加。主要进展包括：
* **渠道安全与多租户架构演进**：针对多渠道的底层架构升级取得突破，特别是 `feat(gateway): multi-tenant Linq channel with per-alias routing` ([PR #7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041)) 正在重构单租户通道，这将大幅提升复杂部署环境下的隔离性。
* **Agent 评估框架雏形落地**：社区引入了具备确定性重放能力的 Agent 评估框架测试套件 `feat(eval): Phase 0 agent eval harness` ([PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067))，为后续系统化测试 AI 行为奠定了基础。
* **安全防御机制收紧**：修复了通道启动时绕过工具白名单的严重漏洞 ([PR #7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064))，并移除了遗留的凭据回退机制 ([PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066))。

## 4. 社区热点
* **Token 消耗优化与技能编译** ([Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))：该项目获得了 8 条深度讨论和点赞。当前 ZeroClaw 每次调用工具都会发送完整的 `SKILL.md`，导致巨大的 Token 浪费。社区正在探讨引入“编译机制”，大幅缩减 Prompt 体积，这将成为降低用户 LLM API 成本的关键优化。
* **Ollama 本地模型工具调用失败** ([Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962))：带有 6 条评论。本地化部署（Ollama）在触发 Tool calling 时阻断工作流的问题引发了较多关注，反映出重度本地化用户的强烈诉求。
* **Discord 频道限制响应请求** ([Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378))：6 条评论。用户希望引入类似 `allowed_channels` 的细粒度配置，防止 Bot 在公共频道回复造成刷屏。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的阻断性 Bug，部分已由社区快速提交了针对性修复 PR：
* **S1 严重 (已修复)**：通过 Channel 启动的 Agent 绕过了安全策略，无视 `allowed_tools` 的限制。这会导致 Agent 获得未授权的本地 Shell 执行权限。（[Issue #7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) -> 已提 Fix [PR #7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064)）
* **S1 严重 (无 PR)**：前端 React 渲染崩溃。当用户开启浏览器自动翻译（如 Chrome 翻译）时，前端 DOM 树冲突导致整个对话视图直接白屏崩溃。（[Issue #7057](https://github.com/zeroclaw-labs/zeroclaw/issues/7057)）
* **S1 严重 (已修复)**：使用代理 Agent 或委派机制时，向模型发送了非用户轮次的 `tool_call`，被 Gemini 400 等严格模型直接拒绝。（[Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)）
* **S2 稳定性 (已修复)**：Channel 编排器仍遗留已废弃的“默认模型提供商”回退逻辑，导致跨提供商凭据误用行为。（[Issue #7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) -> 已提 Fix [PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066)）
* **S2 并发测试 (无 PR)**：并行执行测试时，多个测试争用真实的 `~/.zeroclaw/data` 目录导致数据库锁定报错，影响了 CI/CD 的稳定性。（[Issue #7054](https://github.com/zeroclaw-labs/zeroclaw/issues/7054)）

## 6. 功能请求与路线图信号
根据最新的 Issue 与 PR 动向，项目路线图正明确向**多租户网关、安全隔离与沙盒化**演进：
* **Agent 评估与可观测性**：除了提上日程的 `zeroclaw eval` 评估工具 ([Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065))，还有关于 OTel gen_ai 对齐、LLM 内容追踪的 RFC ([Issue #7051](https://github.com/zeroclaw-labs/zeroclaw/issues/7051))。这意味着 ZeroClaw 将具备企业级 Agent 监控能力。
* **插件与技能生态完善**：支持通过 `.well-known` URI 标准化安装技能 ([Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853))，以及针对用户提问自动推荐未安装技能的机制 ([Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289))，表明项目正在建设类似“应用商店”的生态发现能力。
* **多节点/集群管理**：关于心跳检测和 Websocket 断连识别的优化 ([Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391))，以及“一键更新 Dashboard”特性 ([Issue #6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365))，昭示着 ZeroClaw 正在为多设备集群的云端运维铺路。

## 7. 用户反馈摘要
* **安全配置容错率低**：有用户反馈由于 WhatsApp Web 底层 LID 联系人机制，导致消息被静默丢弃，且白名单失效 ([Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350))，这表明在真实复杂网络环境下，通信层的容错机制仍需加强。
* **自动化工具的失控风险**：用户指出自带的 `SkillImprover` 存在被滥用或无限触发 Patch 更新的风险，缺乏冷却机制 ([Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683))，说明在赋予 Agent 自主修改权限时，用户极度渴望有“刹车机制”。
* **提示词注入引发的焦虑**：针对 Token 消耗过大和提示词模式注入的讨论 ([Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))，反映了重度用户在面对长上下文时对运行成本和响应延迟的担忧。

## 8. 待处理积压
* **Gateway 无法使用 PostgreSQL (S2 - 已被接受但受阻)**：此问题导致了 `tokio-rt-worker` 崩溃，阻碍了将 ZeroClaw 大规模部署到生产数据库环境的工作。由于该问题处于 `blocked` 状态，亟待核心团队介入排查底层依赖库的异步运行时冲突。（[Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)）
* **Arm64 Docker 构建支持停滞**：由于需要重构原生交叉编译的 GitHub Actions 流程，针对嵌入式或 ARM 服务器架构的支持 PR 已经开敞超过 1 个多月，等待核心架构师复核。（[PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)）

</details>