# OpenClaw 生态日报 2026-07-03

> Issues: 195 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-02 22:19 UTC

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
**日期**: 2026-07-03 | **分析数据源**: OpenClaw GitHub Repository

---

### 1. 今日速览
OpenClaw 项目今日维持着极高的社区热度与开发活跃度，单日处理了 **195 条 Issue 更新**（新开/活跃 115，关闭 80）以及高达 **500 条 PR 更新**（待合并 454，已合并/关闭 46）。项目刚刚发布了集成 GPT-5.6 支持的 `v2026.7.1-beta.1` 测试版，生态正加速适配最新一代大模型。然而，随着多智能体、外部 Codex 运行时及长对话记忆等复杂场景的落地，Anthropic/Codex 的状态同步、OAuth 凭据刷新及多路并发稳定性问题成为近期社区报错的核心焦点。

### 2. 版本发布
**最新 Release: [v2026.7.1-beta.1](https://github.com/openclaw/openclaw/releases)** 
- **核心亮点**: 全面支持 OpenAI GPT-5.6 模型族（涵盖模型目录、能力识别及运行时选择路径）。感谢贡献者 @steipete-oai。
- **新特性**: 引入了外部测试框架挂载功能（`openclaw attach`），允许对已存在的 Gateway 会话启动外部 harness。
- **影响评估**: 此版本主要扩展了模型兼容性和开发者调试工具，未见明显的向下不兼容破坏性变更，但调用 GPT-5.6 需确保本地配置及配额支持。

### 3. 项目进展
今日共有 46 个 PR 被合并或关闭，项目在**跨平台体验、沙盒安全边界及会话状态稳定性**上取得了重要进展：
*   **安全沙盒扩充**: PR [#97086](https://github.com/openclaw/openclaw/pull/97086) 引入了 Windows MXC (Microsoft eXecution Containers) 沙盒后端，填补了 Windows 环境下缺乏第一方沙盒执行环境的空白。
*   **企业级集成增强**: PR [#99221](https://github.com/openclaw/openclaw/pull/99221) 为 GitHub Copilot 增加了对带有数据驻留特性的 GitHub Enterprise (如 `*.ghe.com`) 认证支持，大幅降低了企业内部网引入 OpenClaw 的门槛。
*   **客户端体验优化**: PR [#99231](https://github.com/openclaw/openclaw/pull/99231) 彻底重构了 iOS 原生应用，采用标准 SwiftUI 导航与表单，替换了以往非原生的 UI 组件。
*   **消息防丢失机制**: PR [#88992](https://github.com/openclaw/openclaw/pull/88992) 修复了 `message_tool_only` 模式下，由于 LLM 忘记调用消息工具而导致回复被静默丢弃的严重问题。

### 4. 社区热点
今日讨论度最高的 Issue 集中在**“Agent 内部信息泄露”**和**“LLM 接口请求级异常”**：
*   🔥 **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (评论: 33)**: Agent 在执行工具调用期间产生的内部处理文本（如错误处理、中间思考），被错误地作为可见消息推送到了 Slack、iMessage 等外部通讯渠道。这引发了严重的 UX 灾难，社区迫切要求剥离 Agent 的“自言自语”与“对外交付”文本流。
*   🔥 **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (评论: 19)**: 回归性 Bug。自 `2026.5.27` 起，Codex app-server 在多工具 Agent 轮次完成前发生停顿。用户反映之前运行完美的链路现在频繁卡死。
*   🔥 **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (评论: 18)**: 嵌入式 Runner 无法处理流式状态的 Anthropic thinking blocks，由于错误文本被“泛化”，导致恢复包装器无法触发，Slack 插件长对话直接失效。

### 5. Bug 与稳定性
按影响严重度（P1为主）梳理，今日核心崩溃与回归问题如下：

*   **[P1] 多智能体并发状态树损坏 ([Issue #98790](https://github.com/openclaw/openclaw/issues/98790))**:
    - **现象**: 并发 Agent 到 Agent 的通信导致会话树分叉，压缩重建后被 Anthropic API 以 "Cannot continue from message role: assistant" 拒绝，重试循环最终永久破坏了记录。
    - **修复状态**: 暂无修复 PR，存在数据丢失风险，需立即关注。
*   **[P1] 继承式 OpenAI OAuth 凭据被拒 ([Issue #98702](https://github.com/openclaw/openclaw/issues/98702))**:
    - **现象**: 在仅使用 OAuth 的网关上，内置运行时 Agent 从主线程继承的 OpenAI OAuth 凭据在提供商侧被判定无效（401 Unauthorized），但主会话使用同一 Profile 却能成功。
    - **修复状态**: 暂无修复 PR。
*   **[P1] Mattermost Slash Commands 全局 401 ([Issue #98740](https://github.com/openclaw/openclaw/issues/98740))**:
    - **现象**: 自 `2026.6.11` 将 Mattermost 插件外部化后，所有原生 `/oc_*` 命令均返回 401 未授权。
    - **修复状态**: 属于近期版本引入的回归问题，暂无 PR。
*   **[P1] Codex 插件发现引起过量磁盘 I/O ([Issue #99071](https://github.com/openclaw/openclaw/issues/99071))**:
    - **现象**: 单次复杂请求中，Codex app-server 反复读取几乎所有插件导致磁盘 I/O 负载激增，甚至引发崩溃循环。

### 6. 功能请求与路线图信号
从近期的 Feature Request 和已提交的 PR 来看，项目的演进方向呈现以下趋势：
*   **多智能体协作治理**: 用户在 [Issue #35203](https://github.com/openclaw/openclaw/issues/35203) 中提出了相当成熟的 RFC，要求引入能力画像、共享黑板、分层记忆边界以及 **Token 成本治理**。这表明用户正在将 OpenClaw 用于超大规模的 Agent 编排，急需成本与状态隔离机制。
*   **移动端车机互联**: [Issue #97993](https://github.com/openclaw/openclaw/issues/97993) 请求为 iOS 应用添加 Apple CarPlay 支持。说明用户对语音驱动的车载个人 AI 助手需求强烈。
*   **非英语语音识别 (STT) 优化**: 今日涌现了多个相关 PR（[#99026](https://github.com/openclaw/openclaw/pull/99026), [#99023](https://github.com/openclaw/openclaw/pull/99023)），致力于移除非英语提示下的默认英文转录偏置。多语言化/本地化体验正在被社区重点完善。

### 7. 用户反馈摘要
通过对今日评论与 Bug 报告的深度语义分析，真实用户的痛点集中在以下三个方面：
1.  **“看不见”的输出截断**: [Issue #99168](https://github.com/openclaw/openclaw/issues/99168) 和 [Issue #99241](https://github.com/openclaw/openclaw/issues/99241) 反映，在处理长指令或 ANSI 富文本时，工具输出容易坍缩为 `(see attached image)` 或 `(no output)`。**用户极其沮丧的是，Agent 因此失去了对 stdout/stderr 文本的感知能力，导致排错陷入盲区**。
2.  **底层运行时脆弱感**: 频繁的 OAuth 刷新失败、Codex 运行时的挂起 ([Issue #87744](https://github.com/openclaw/openclaw/issues/87744))，让重度依赖多渠道分发（如 Telegram、WhatsApp）的用户感到系统可靠性不足。
3.  **意外发现的高光点**: 集成外部 AI 助手（如 Otti 助手）通过 OpenClaw 提交 Issue 报告（如 [Issue #87216](https://github.com/openclaw/openclaw/issues/87216)），展示了 OpenClaw 在自动化工作流中的实际落地能力。

### 8. 待处理积压
以下重要 Issue/PR 长期未得到有效合并或根本性修复，存在积压风险，建议维护者介入：
*   **[PR #89041](https://github.com/openclaw/openclaw/pull/89041) (提交于 2026-06-01, 状态: 等待 Maintainer)**: 修复 Discord Gateway 因 `ws 8.21.0` 接收器限制导致连接被强制关闭 (1008) 的 P1 级可用性问题。已提供证明，但长期搁置。
*   **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327) (提交于 2026-03-06)**: 结合 `google-vertex/gemini-3.1-pro-preview` 使用时触发 `Cannot convert undefined or null to object` 的 P1 崩溃循环。已有 10 个评论，但被贴上 `clawsweeper:no-new-fix-pr` 标签，缺乏修复进展。
*   **[PR #67433](https://github.com/openclaw/openclaw/pull/67433) (提交于 2026-04-15)**: 提议为 `POST /hooks/agent` 添加 `waitForResult` 模式。这是一个能大幅改善 Webhook 同步调用体验的核心功能，已停滞近 3 个月。

---

## 横向生态对比

这份横向对比分析报告基于 2026 年 7 月 3 日主流开源 AI 智能体与个人助手项目的 GitHub 动态，从技术架构、工程活跃度及社区生态三个维度进行深度提炼。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话工具”向“全平台自动化调度枢纽”跨越的深水区**。随着 GPT-5.6 和 Claude Sonnet 5 等新一代多模态大模型的落地，开源项目正在经历剧烈的架构重构，核心演进方向聚焦于**多模型路由（Router/Provider基座化）、跨端通讯渠道融合（IM接入）以及多智能体编排治理**。然而，伴随应用场景的复杂化，内存泄漏、并发状态树损坏、上下文压缩“失忆”及本地系统高权限调用冲突等**底层运行时脆弱性问题**成为全行业亟待解决的集体阵痛。

---

### 2. 各项目活跃度对比 (2026-07-03)

| 项目名称 | Issue 更新 | PR 更新 | Release 情况 | 健康度与工程阶段评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | 195 | 500 | `v2026.7.1-beta.1` (支持GPT-5.6) | **高活跃/极速扩张**：生态标杆，多端适配最快，但面临复杂的并发与状态同步挑战。 |
| **NanoBot** | 96 | 64 | 无 | **高活跃/质量巩固**：侧重安全加固与多租户隔离，工程严谨度高。 |
| **IronClaw** | 23 | 50 | 无 (预备 0.29.1) | **中等活跃/深度重构**：处于底层重构期，专注测试覆盖与架构解耦。 |
| **CoPaw (QwenPaw)**| 25 | 50 | `v2.0.0-beta.2` (Tauri迁移) | **高活跃/大版本攻坚**：架构向 Tauri 迁移，安全防护升级，存在内存与并发瓶颈。 |
| **ZeroClaw** | 37 | 50 | 无 | **高活跃/底层优化**：专注多渠道路由与 OpenAI API 兼容层建设。 |
| **Hermes Agent** | 43 | 50 | 无 | **高活跃/转型阵痛**：正从极客工具向大众应用转型，受困于 Token 消耗与 Windows 兼容性。 |
| **PicoClaw** | 0 | 25 | `nightly` (依赖大升级) | **中等活跃/基建刷新**：大批量依赖更新，遭遇阻断性配置迁移 Bug。 |
| **NanoClaw** | 4 | 11 | 无 | **低活跃/功能攻坚**：聚焦 WhatsApp 生态融合与容器化调优。 |
| **Moltis** | 0 | 3 | 无 | **低活跃/底层加固**：深耕 WhatsApp 协议合规与 LLM 路由扩展。 |
| **LobsterAI** | 5 (均Stale)| 8 | 无 | **滞后/社区停滞**：代码有迭代，但用户核心痛点（蓝屏/幻觉）积压超3个月未处理。 |
| **NullClaw / 其他**| 0 | 0 | 无 | **静默** |

---

### 3. OpenClaw 在生态中的定位
作为核心参照系，**OpenClaw 是当前生态中当之无愧的“基建旗舰”与风向标。**
*   **技术引领**：它是全场最先适配 GPT-5.6、引入 Windows MXC 第一方沙盒、并落地企业级数据驻留支持的项目。它的功能广度（移动端 CarPlay、外部 Codex 运行时）远超同类。
*   **社区规模**：单日近 200 个 Issue 和 500 个 PR 的处理量使其拥有最庞大的外部反馈池。
*   **对比差异**：相比于 NanoBot 的精简安全、ZeroClaw 的底层兼容重构，OpenClaw 的系统最为庞大，但也因此最先触及**多智能体状态树损坏、跨端 OAuth 继承失败**等深水区的高级 Bug，它的演进轨迹实质上为其他项目指明了排雷方向。

---

### 4. 共同关注的技术方向
从多项目的 PR 和 RFC 中，可以清晰提取出整个赛道的共识性技术诉求：

1.  **企业级通讯渠道深度集成（IM 矩阵化）**
    *   **涉及项目**: OpenClaw, NanoBot, NanoClaw, ZeroClaw, Moltis, PicoClaw
    *   **具体诉求**: WhatsApp 的 LID 隐私协议适配与多设备身份映射（NanoClaw, Moltis）；Slack/Mattermost 企业内部网集成（OpenClaw）；钉钉/飞书群聊文件权限解析（NanoBot, CoPaw）。AI 助手全面接管主流 IM 已成刚需。
2.  **大模型基座解耦与细粒度路由**
    *   **涉及项目**: OpenClaw, NanoBot, CoPaw, Moltis
    *   **具体诉求**: 摆脱单一模型绑定，支持按对话/隐私需求动态切换模型（NanoBot）；引入 OpenRouter/Requesty 等路由层（Moltis）；实现 Provider 限额耗尽时的自动 Fallback 机制（CoPaw）。
3.  **安全合规与沙盒边界强化**
    *   **涉及项目**: NanoBot, PicoClaw, CoPaw, ZeroClaw
    *   **具体诉求**: 核心关注 SSRF 漏洞与路径遍历防御（NanoBot, ZeroClaw）；防范 Zip-Bomb（ZeroClaw）；以及 API Key 在日志中的严格脱敏（CoPaw）。
4.  **长文本/并发场景下的上下文与记忆治理**
    *   **涉及项目**: OpenClaw, CoPaw, Hermes Agent, NanoBot
    *   **具体诉求**: 应对上下文折叠导致的“失忆”（CoPaw）、拒绝动态压缩导致的长对话崩溃（Hermes Agent），以及基于 Embedding 的高效长期记忆管道建设（NanoBot）。

---

### 5. 差异化定位分析

*   **全平台超级入口（OpenClaw, Hermes Agent）**：追求无处不在的分发能力。不仅覆盖 IM，还积极切入车机生态、语音交互和桌面 GUI。承担极重的多端状态同步压力。
*   **安全与多租户隔离优先（NanoBot, ZeroClaw）**：更偏向作为企业级基座。NanoBot 致力于工作区目录隔离，防范不同用户的“记忆串味”；ZeroClaw 专注多渠道环境变量与运行时密钥的隔离。
*   **任务执行与自动化调度（CoPaw, LobsterAI, PicoClaw）**：强依赖定时任务来履行“助理”职责。CoPaw 引入了 `cron` 命令行管理，LobsterAI 尝试进行本地软件生命周期管理（启动进程），但均面临定时任务复活、内存泄漏等底层执行异常的挑战。
*   **容器化编排与轻量化部署（NanoClaw）**：采用“无头浏览器+Docker 容器”方案，主攻网页自动化操作，强调不依赖 MCP 的轻量级自带工具链。

---

### 6. 社区热度与成熟度
*   **快速扩张与功能爆发期**：**OpenClaw、CoPaw**。项目处于猛烈堆功能、快速适配最新模型（GPT-5.6）和最新框架（Tauri）的阶段。PR 活跃度极高，但用户频繁遭遇阻断级 Bug（如 CoPaw 内存泄漏、OpenClaw 回归卡死）。
*   **架构重构与质量巩固期**：**NanoBot、ZeroClaw、IronClaw**。暂缓新功能，集中精力做类型去重（IronClaw）、底层路由重构（ZeroClaw）、安全防护排雷（NanoBot）。代码健康度正在快速提升。
*   **社区治理隐患期**：**LobsterAI**。代码层面有重构，但社区完全脱节，导致严重的“幻觉执行”（声称执行但未动）和蓝屏等 P0 级问题积压 3 个月无人处理，面临极大的信任危机。

---

### 7. 值得关注的趋势信号

1.  **“执行幻觉”与容错机制的刚性需求**：LobsterAI 爆出的“声称执行但未动”及 IronClaw 的“大模型盲从错误纠正”表明，LLM 的固有幻觉在接入本地高权限系统（如执行 Shell、调度硬件）时极具破坏性。**未来 AI Agent 必须强制引入执行结果的回执校验机制**。
2.  **Agent “内部自言自语”与“对外交付”必须物理隔离**：OpenClaw 与 IronClaw 均出现 Agent 将中间思考过程错误推送到 Slack 等业务群的问题。开发者必须重新设计信息流管线，剥离内部上下文与最终输出。
3.  **Token 成本治理倒逼记忆架构升级**：Hermes Agent 用户吐槽配置文件消耗 25k Token，OpenClaw 呼唤 Token 成本治理。这预示着**硬编码的 Markdown 提示词注入将被淘汰**，取而代之的是基于数据库与语义检索（RAG）的动态、按需记忆加载方案。
4.  **IM 隐私协议的反向技术施压**：以 WhatsApp 的 LID（Linked Identity）为代表，上游通讯平台强化了隐私保护，直接导致大量开源 Bot（Moltis, NanoClaw）消息静默丢失。这要求 Agent 框架的路由寻址逻辑必须跟进重写，这是一场永无止境的猫鼠游戏。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-07-03  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览
NanoBot 项目在过去 24 小时内保持了极高的活跃度，共处理了 **96 条 Issue 更新**与 **64 条 PR 更新**。尽管没有发布新版本，但核心团队及社区贡献者集中发起了针对系统稳定性、安全性和架构优化的修复战役。从 PR 动向来看，大量涉及 SSRF 防护、消息鉴权、会话隔离及提供商兼容性的补丁正在排队等待合并。项目当前正处于“功能扩展与深度除虫”并行推进的高质量迭代阶段。

---

## 2. 项目进展
今日项目合并/关闭了 28 个 PR。其中核心维护者 `hamb1y` 关闭了综合修复批次 PR [#4648](https://github.com/HKUDS/nanobot/pull/4648)，该 PR 为后续的一系列独立修复定下了基调。今日的重要推进包括：

*   **安全与鉴权加固**：推进了强制 OpenAI 兼容 API 鉴权的 PR [#4669](https://github.com/HKUDS/nanobot/pull/4669)，以及执行出站消息策略的 PR [#4668](https://github.com/HKUDS/nanobot/pull/4668)。
*   **上下文与记忆管理优化**：重构了保留计划逻辑（[PR #4670](https://github.com/HKUDS/nanobot/pull/4670)），并修复了 Dream 历史记录在压缩时被误删的问题（[PR #4664](https://github.com/HKUDS/nanobot/pull/4664)）。
*   **提供商与渠道兼容性**：合并了针对 Anthropic Sonnet 5 参数兼容的修复（[PR #4685](https://github.com/HKUDS/nanobot/pull/4685)），并进一步规范化了 OpenAI 文本工具调用的解析（[PR #4662](https://github.com/HKUDS/nanobot/pull/4662)）。

---

## 3. 社区热点
今日讨论度最高的问题集中在多模型适配、会话隔离和跨平台体验上：

*   **[Issue #4657](https://github.com/HKUDS/nanobot/issues/4657) Nanobot Radar Finding (评论: 5)**  
  这是一个批量经验证 Bug/安全漏洞的追踪 Issue，列出了 13 个已确认但在主分支尚未有 PR 修复的问题。这反映了社区对核心稳定性的持续关注。
*   **[Issue #4604](https://github.com/HKUDS/nanobot/issues/4604) [功能请求] Anthropic OAuth (评论: 5)**  
  用户希望原生支持 Claude 订阅用户的 OAuth 登录，而不是强制使用 API Key。该诉求已转化为高优先级 PR。
*   **[Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) [优化] 支持按对话覆盖模型 (评论: 5)**  
  开发者希望能在一个工作区内，根据隐私和时效需求（如 OpenRouter 与本地 llama.cpp）灵活切换模型，反映出用户对细粒度路由控制的强烈需求。
*   **[Issue #3344](https://github.com/HKUDS/nanobot/issues/3344) [优化] 钉钉群无法向 Agent 发送文件 (评论: 5)**  
  国内生态用户反馈，钉钉群聊中文件上传与 @Bot 分离导致 Agent 无法读取文件，暴露了渠道适配层的细节痛点。

---

## 4. Bug 与稳定性
今日报告并处理的 Bug 按严重程度排列如下：

1.  **[严重] SSRF 漏洞与 DNS 校验**：Issue [#4611](https://github.com/HKUDS/nanobot/issues/4611) 暴露了潜在的 SSRF 风险。目前已有修复 PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) 提交，通过绑定已验证的解析 IP 来防止绕过。
2.  **[严重] 消息工具越权与附件路径遍历**：Issue [#4076](https://github.com/HKUDS/nanobot/issues/4076) 指出 `message` 工具可以向外发消息给被阻止的目标，且媒体附件路径不受限。已有修复 PR [#4668](https://github.com/HKUDS/nanobot/pull/4668)。
3.  **[中等] Windows 下 Shell 语义不一致**：Issue [#4544](https://github.com/HKUDS/nanobot/issues/4544) 指出 `exec` 工具在 Windows 下单行使用 `cmd.exe` 而多行使用 `powershell`，导致 Agent 跨平台执行命令失败。
4.  **[中等] Claude Sonnet 5 参数报错**：Issue [#4683](https://github.com/HKUDS/nanobot/issues/4683) 指出 Anthropic 提供商未将 `sonnet-5` 加入忽略 `temperature` 参数的名单，导致 400 错误。（已由 [PR #4685](https://github.com/HKUDS/nanobot/pull/4685) 修复）。
5.  **[低] Telegram 长轮询静默挂起**：Issue [#3626](https://github.com/HKUDS/nanobot/issues/3626) 指出网络波动会导致 Bot 假死（进程在但收不到消息），影响长期运行的稳定性。

---

## 5. 功能请求与路线图信号
结合用户的 Feature Request 与今日的 PR 状态，以下几项功能极有可能在近期落地或被纳入主线：

*   **Anthropic OAuth 支持**：[PR #4632](https://github.com/HKUDS/nanobot/pull/4632) 已提交。允许 Claude Code 订阅用户直接通过 Token 接入 NanoBot。
*   **Mattermost 渠道支持**：[PR #4459](https://github.com/HKUDS/nanobot/pull/4459) 正在审核中，将为企业级开源协作工具 Mattermost 带来流式回复和实时通信支持。
*   **OpenCode Zen 提供商适配**：[PR #4686](https://github.com/HKUDS/nanobot/pull/4686) 正在推进，提升了对最新 OpenCode 模型生态的兼容性。
*   **语音交互闭环**：Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) 提出补充 TTS（文本转语音）支持。虽然实现难度高，但社区呼声极高（👍: 2），是个人助理场景的自然延伸。

---

## 6. 用户反馈摘要
通过对 Issue 评论的情感与技术分析，提炼出以下真实用户痛点：
*   **多租户场景下的数据隔离极度匮乏**：用户（如 Issue [#2836](https://github.com/HKUDS/nanobot/issues/2836)）抱怨 WhatsApp 渠道共用同一个工作区目录，导致 Bot 产生严重的“记忆串味”（与 A 聊天的隐私被带入与 B 的对话中）。
*   **Cron/后台任务会话污染**：Issue [#4082](https://github.com/HKUDS/nanobot/issues/4082) 反映定时任务复用固定的 Session Key，导致上下文相互影响，用户对记忆管理策略表示不满。
*   **延迟难以追踪**：用户在进行语音交互（STT -> LLM -> TTS）时遭遇 35-60 秒的高延迟（Issue [#3257](https://github.com/HKUDS/nanobot/issues/3257)），且日志缺乏细粒度耗时打点，导致无法定位瓶颈。

---

## 7. 待处理积压
以下重要 Issue 存在时间较长（超过 2 个月）或目前缺乏官方明确回应，需要维护者关注：

*   **[Issue #2231](https://github.com/HKUDS/nanobot/issues/2231)** (创建于 2026-03-18): 请求类似于 Copilot CLI 的插件系统。这是架构级的增强请求，需要官方明确是否纳入长期路线图。
*   **[Issue #2954](https://github.com/HKUDS/nanobot/issues/2954)** (创建于 2026-04-08): 邮件检查和处理功能工作不稳定，影响依赖该渠道的核心用户。
*   **[Issue #2937](https://github.com/HKUDS/nanobot/issues/2937)** (创建于 2026-04-08): 请求基于 Embedding 的上下文压缩/语义检索管道。现有的 token 截断策略导致细节丢失，社区期待更先进的 RAG 级记忆管理方案。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期**: 2026-07-03 | **仓库**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 今日速览
项目在过去 24 小时内保持**极高的活跃度**，新增与活跃 Issue 达 43 条，PR 更新达 50 条（其中待合并 35 条）。今日的开发重心主要集中在**桌面端稳定性修复（尤其是 Windows 平台）、网关会话生命周期（Session TTL）的资源回收机制，以及 CLI/TUI 的多环境兼容性**。社区在可插拔记忆后端和上下文体积控制方面发起了深度讨论，表明项目正面临着从“极客工具”向“大众成熟应用”转型期的典型成长痛。今日无新版本发布。

---

### 2. 版本发布
**本日无新版本发布。** 
*建议关注*：考虑到今日大量针对 Windows 平台和 Gateway 核心逻辑的修复，预计下一个版本（可能为 `v0.18.1` 或 `v0.19.0`）将以稳定性与平台兼容性为核心。

---

### 3. 项目进展
今日共合并/关闭 15 个 PR，重点推进了核心系统的健壮性，尤其是内存管理与网关生命周期：

*   **网关会话与内存隔离大修**：合并了 [PR #31856](https://github.com/NousResearch/hermes-agent/pull/31856) 和抢救性修复 [PR #57378](https://github.com/NousResearch/hermes-agent/pull/57378)，确保在 Agent 缓存被清理时，`MemoryProvider.on_session_end()` 能够在所有路径下正确触发。这解决了长期存在的多路网关会话导致记忆丢失的竞态条件。([相关 PR #54293](https://github.com/NousResearch/hermes-agent/pull/54293), [PR #11304](https://github.com/NousResearch/hermes-agent/pull/11304) 也在此列)
*   **本地大模型上下文支持修复**：合并了针对 vLLM/Ollama 本地部署的修复 [PR #56431](https://github.com/NousResearch/hermes-agent/pull/56431) 及其后续优化 [PR #57379](https://github.com/NousResearch/hermes-agent/pull/57379)，系统现在会实时探测本地服务器的 `max_model_len`，而不是依赖可能已经过期（如硬编码 131k）的磁盘缓存。
*   **归因系统完善**：社区贡献者 `kshitijk4poor` 提交了 [PR #57377](https://github.com/NousResearch/hermes-agent/pull/57377)，完善了 Cherry-pick 时的原作者归属映射，展现了项目维护者对开源协作规范的重视。

---

### 4. 社区热点
今日讨论最热烈的 Issue 反映了用户在**高级配置与多平台一致性**上的强烈诉求：

*   **🏆 [Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349) (11 评论)**: 请求重命名 `MEMORY.md` 为 `RULES.md`，并支持禁用本地文件，转而仅使用 `honcho/fact_store` 等动态记忆。**诉求分析**：硬编码的提示词注入让重度用户感到不可控，社区渴望完全声明式的记忆管理。
*   **[Issue #53817](https://github.com/NousResearch/hermes-agent/issues/53817) (6 评论)**: Windows 桌面端在连接远程 Linux 网关时无法显示 `BeastMode` 等 MoA（混合代理）预设模型，但 Telegram 端却正常。**诉求分析**：多端 UI 状态同步不一致是影响体验的核心痛点。
*   **[Issue #5200](https://github.com/NousResearch/hermes-agent/issues/5200) (5 评论, 👍5)**: `AGENTS.md` 的递归层级加载机制，文档描述与代码实现完全不符。**诉求分析**：开源项目文档滞后于代码迭代的老问题，引起了多位开发者的不满。

---

### 5. Bug 与稳定性
今日报告了多个影响特定平台稳定性的 Bug，部分已有修复 PR 跟进：

*   **[P2 严重] GUI 假死与状态卡死**：
    *   [Issue #57237](https://github.com/NousResearch/hermes-agent/issues/57237): 桌面端调用耗时子代理（>30秒）返回后，UI 卡在「处理中」，消息被迫积压。
    *   [Issue #53773](https://github.com/NousResearch/hermes-agent/issues/53773): (已修复) TUI WebSocket 在长时间任务中断连。
*   **[P2 严重] Windows 平台灾难性问题频发**：
    *   [Issue #57191](https://github.com/NousResearch/hermes-agent/issues/57191): Windows 下网关和桌面端同时运行 Cron 定时器，导致重复发送消息。(*目前无明确修复 PR*)
    *   [Issue #57207](https://github.com/NousResearch/hermes-agent/issues/57207): 安全扫描器 Tirith 无法在 Windows 原生安装，导致系统处于无保护的 `fail_open` 状态。
*   **[P2 严重] 配置加载异常**：
    *   [Issue #25106](https://github.com/NousResearch/hermes-agent/issues/25106): CLI 全局切换模型时无法持久化或清除 `base_url`，导致路由错乱。
*   **[P2 稳定] 本地 TUI 运行环境破坏**：
    *   [Issue #57031](https://github.com/NousResearch/hermes-agent/issues/57031) 导致通过 Homebrew/pip 安装的用户无法启动 TUI，今日涌现了 4 个针对此问题的修复 PR（[PR #57136](https://github.com/NousResearch/hermes-agent/pull/57136), [PR #57087](https://github.com/NousResearch/hermes-agent/pull/57087), [PR #57064](https://github.com/NousResearch/hermes-agent/pull/57064), [PR #57047](https://github.com/NousResearch/hermes-agent/pull/57047)），目前待合并。

---

### 6. 功能请求与路线图信号
从当前的 Feature Request 和已提交的 PR 中，可以明显看出接下来的演进方向：

*   **动态与外部记忆系统**：[PR #51020](https://github.com/NousResearch/hermes-agent/pull/51020) 正在为桌面端引入 Honcho 记忆提供程序的可视化配置面板。结合 Issue #47349，**预计下一版本将大幅重构上下文加载机制**，将硬编码的 `.md` 文件转向数据库驱动的动态管理。
*   **通讯平台体验拉齐**：[PR #57384](https://github.com/NousResearch/hermes-agent/pull/57384) 试图通过 BlueBubbles 私有 API 在 iMessage 上实现“流式编辑预览”（类似 Telegram 的打字机效果）。
*   **生态与技能扩展**：新增了对 [You.com 搜索](https://github.com/NousResearch/hermes-agent/pull/13314) 和 [Hedera 区块链](https://github.com/NousResearch/hermes-agent/pull/57374) 只读技能的支持，并请求添加 [Google Cloud 原生 STT/TTS 支持 (Chirp 3)](https://github.com/NousResearch/hermes-agent/issues/57120)。

---

### 7. 用户反馈摘要
提炼自今日 Issue 评论区的用户真实声音：
*   **痛点 - “Token 黑洞”**：用户强烈吐槽 `AGENTS.md` 文件极度膨胀（[Issue #52821](https://github.com/NousResearch/hermes-agent/issues/52821)），每次会话加载消耗高达 25k Token。用户迫切希望分离“贡献者指南”和“系统提示词”。
*   **痛点 - “进程清理难”**：MCP Server 连接重试时沦为僵尸进程（[Issue #57355](https://github.com/NousResearch/hermes-agent/issues/57355)），用户反映在断网重连后系统变得极度卡顿。
*   **亮点 - “修复能力强”**：有用户针对 Cron 传参错误（[Issue #7142](https://github.com/NousResearch/hermes-agent/issues/7142)）直接提交了带有测试的修复方案，显示了社区极高的技术参与度。
*   **亮点 - “多端潜力”**：尽管有同步 Bug，用户对 Hermes 能够打通 Telegram、Windows 桌面、Webhook 甚至 iMessage 的能力表示赞赏。

---

### 8. 待处理积压
以下重要 Issue 创建较久但近期才重新活跃，或存在修复冲突，需 Maintainer 重点介入：

1.  **TUI 修复 PR 冲突**：针对 Issue #57031 的修复，目前有 4 个功能重叠的 PR（#57136, #57087, #57064, #57047）处于 Open 状态。**建议尽快 Review 并合并其中一个，关闭其余，恢复包管理器用户的 TUI 访问权限。**
2.  **[Issue #14694](https://github.com/NousResearch/hermes-agent/issues/14694) (创建于 4 月)**：防抖动保护机制永久禁用自动压缩且无法自动恢复，导致长对话必定崩溃，被标记为 P2 但迟迟未修。
3.  **[Issue #24782](https://github.com/NousResearch/hermes-agent/issues/24782) (创建于 5 月)**：子代理 Fallback 模型错误继承了父代理的 `base_url`，导致多模型路由体系下的子代理全军覆没，影响核心可用性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是为您生成的 2026-07-03 PicoClaw 项目动态日报。

# 📊 PicoClaw 项目日报 (2026-07-03)
**数据统计周期**：过去 24 小时 | **项目定位**：AI 智能体与个人 AI 助手基础设施

---

### 1. 📈 今日速览
* **整体活跃度呈爆发式增长**，过去 24 小时内 PR 更新总数高达 25 条（其中 14 条被合并或关闭，11 条待处理），显示出核心团队正在进行高密度的代码审查与功能推进。
* 项目正处于**基础设施与依赖大升级阶段**，大批自动化依赖更新被批量处理，前端和底层 Go SDK 得到了全面维护。
* 新发布了一个 nightly 构建版本，同时社区今日新报备了 2 个关键 Bug（涉及配置迁移与网络重连），值得开发者关注。

### 2. 🚀 版本发布
* **[nightly] Nightly Build (v0.3.1-nightly.20260702.2cf030d2)**
  * **详情**：这是一个自动化构建的每日实验版。结合今日大量合并的依赖升级与核心网关代码更新，可以预见该版本包含了大量的底层优化。
  * **注意事项**：官方明确标注此为自动构建版本，**可能不稳定，需谨慎用于生产环境**。
  * **完整更新日志**：[查看 v0.3.1...main 的对比](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)

### 3. 🏗️ 项目进展
今日共有 14 个 PR 被关闭/合并，标志着项目在**安全防护、执行逻辑和测试覆盖**方面迈出了一大步：
* **安全与执行规则强化**：
  * 合并了跨站请求伪造(CSRF)防护：[PR #3160](https://github.com/sipeed/picoclaw/pull/3160) - 拒绝跨站的 launcher 密码设置请求，保障首启安全。
  * 堵住指令执行漏洞：[PR #3161](https://github.com/sipeed/picoclaw/pull/3161) - 修复了自定义允许规则会意外绕过 `exec` 拒绝规则（如读取环境变量）的问题。
* **测试体系完善**：
  * [PR #3158](https://github.com/sipeed/picoclaw/pull/3158) 增加了对 Windows 环境下沙盒文件系统相对路径处理的回归测试覆盖。
* **通讯渠道网关迭代**：
  * 关闭了 Delta Chat 网关的基础功能 PR：[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)。
* **依赖库全面刷新**：Dependabot 产出了大量更新并被合并，包括 `shadcn` 升级至 4.12.0 ([PR #3214](https://github.com/sipeed/picoclaw/pull/3214))、`react-i18next` ([PR #3212](https://github.com/sipeed/picoclaw/pull/3212)) 以及 Go 语言底层加密库 `golang.org/x/crypto` 升级至 0.53.0 ([PR #3210](https://github.com/sipeed/picoclaw/pull/3210))。

### 4. 🔥 社区热点
今日缺乏超长讨论的 Issue（评论数均为0），但从新提交的 PR 动向可以看出社区的**核心关注点**在于 AI 模型的兼容性与长连接稳定性：
* **复杂 XML 工具调用的解析**：[PR #3165](https://github.com/sipeed/picoclaw/pull/3165) 正在尝试从 OpenAI 兼容格式的响应中恢复火山引擎豆包模型的 `<seed:tool_call>` XML 块，这说明项目正在积极适配国内复杂的大模型输出规范，避免 XML 泄露给终端用户。

### 5. 🐛 Bug 与稳定性
今日新增 2 个状态为 OPEN 的关键 Bug，均可能影响基本可用性：
1. **🔴 高危：v2→v3 配置迁移失败 ([Issue #3206](https://github.com/sipeed/picoclaw/issues/3206))**
   * **表现**：执行任何加载配置的命令时，报错 `unknown field(s): build_info, session.dm_scope`，导致系统瘫痪。
   * **现状**：即使在最新的 v0.2.9 全新安装中也会复现，属于升级链路上的阻断性回归问题。**目前尚无关联的修复 PR。**
2. **🟠 中危：Matrix 频道长轮询无重连机制 ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203))**
   * **表现**：网络波动或服务器重启后，Matrix 的 `/sync` 长轮询会“静默死亡”。由于主进程未退出，systemd 的守护进程重启逻辑无法触发。
   * **现状**：严重影响个人 AI 助手作为常驻服务的稳定性。**目前尚无关联的修复 PR。**

### 6. 🗺️ 功能请求与路线图信号
* **通讯网关矩阵持续扩张**：从今日关闭的 Delta Chat 网关 ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) 和待处理的 LINE 消息发送防 panic 检查 ([PR #3171](https://github.com/sipeed/picoclaw/pull/3171)) 可以看出，**多端 IM 接入**仍是项目演进的核心路线。
* **深度集成 GitHub Copilot**：[PR #3207](https://github.com/sipeed/picoclaw/pull/3207) 正在尝试将 `copilot-sdk/go` 从 0.2.0 跃升到 1.0.5。这暗示 PicoClaw 未来极有可能将 GitHub Copilot 作为其原生支持的后端大模型之一。

### 7. 🗣️ 用户反馈摘要
综合今日的 Issue 反馈，提炼出用户当前的两大痛点：
* **升级体验割裂**：用户在进行大版本过渡（如 v2 到 v3 架构调整）时，配置文件字段校验过于严格或缺乏向后兼容/平滑迁移机制，导致“更新即不可用”。
* **服务健壮性缺失**：用户倾向于将 PicoClaw 作为后台守护进程长期运行，但在面对网络抖动等异常时，应用缺乏心跳保活和断线重连逻辑，且未给系统提供正确的错误退出信号。

### 8. ⏳ 待处理积压
维护团队需要重点关注以下积压任务或高危新 Issue：
* **[Issue #3206](https://github.com/sipeed/picoclaw/issues/3206)** / **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)**：今日爆发的阻断性问题，优先级最高，急需排期修复。
* **[PR #3165](https://github.com/sipeed/picoclaw/pull/3165)**：针对 OpenAI 兼容接口的国内大模型（豆包 Seed）修复，已标记为 `stale`，需要维护者介入 Review 或推进合并。
* **[PR #3171](https://github.com/sipeed/picoclaw/pull/3171)**：修复 LINE 渠道潜在的 panic 崩溃风险，同样处于 `stale` 状态待审核。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期**: 2026-07-03 | **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

### 1. 今日速览
NanoClaw 项目今日保持了极高的开发与社区活跃度，过去 24 小时内共产生 **11 个 PR 更新**与 **4 个 Issue 更新**。项目当前正处于多渠道适配优化（特别是 WhatsApp 生态）与 Agent 模板化的关键研发期。虽然今日无新版本发布，且仅有 2 个 PR 被关闭，但开发者提交了大量针对核心调度的修复与“Agent Templates”特性的关键代码，项目整体处于快速迭代的攻坚阶段。

### 2. 版本发布
* **今日无新版本发布 (0 个 Release)**。

### 3. 项目进展
今日项目合并/关闭了 2 个重要 PR，在容器性能优化和模板加载基础架构上取得了实质性进展：
* ⭐ **合并: [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) - perf(container): 可配置 --shm-size 及 --init 支持**
  * **进展**: 为 Agent 容器（内置无头 Chromium 浏览器）引入了 `--init` 参数和可配置的 `--shm-size`（默认 1g）。
  * **意义**: 彻底解决了 Docker 默认 64MB 共享内存导致浏览器在处理大型页面时崩溃的问题，大幅提升了 Agent 容器在执行网页自动化任务时的稳定性。
* ⭐ **关闭: [PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) - feat(templates): 本地模板加载器及 ncl 命令支持**
  * **进展**: 落地了 Agent 模板特性的第一部分（Part 1/2），支持通过 `ncl groups create --template <ref>` 从本地加载并打标 Agent 组。
  * **意义**: 为后续即将合并的 Setup Wizard 模板流程（PR #2909）奠定了代码基础，标志着 NanoClaw 向“开箱即用”的预设 Agent 迈出关键一步。

### 4. 社区热点
今日社区的热点高度聚焦于 **WhatsApp 多通道架构的架构级缺陷**以及**模板功能的完善**：
* **🔥 [Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911) [高优先级] WhatsApp Cloud 与原生适配器注册冲突**
  * **背景**: 开发者 `glifocat` 报告 WhatsApp Business Cloud (`/add-whatsapp-cloud`) 与原生 Baileys (`/add-whatsapp`) 在适配器注册表中使用了相同的 `whatsapp` 键，导致同时安装时通道相互覆盖、消息路由混乱。此 Issue 触发了社区的快速响应，并直接催生了配套的修复 PR。
* **[PR #2908](https://github.com/nanocoai/nanoclaw/pull/2908) & [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) Codex 适配与 Agent 模板工作流**
  * **背景**: 核心贡献者 `amit-shafnir` 连夜推进模板功能，不仅为 Codex 提供商增加了 Persona 前置和技能发现功能，还引入了首次启动时的模板配置向导，极大降低了新用户的使用门槛。

### 5. Bug 与稳定性
今日报告了 2 个影响 WhatsApp 集成稳定性的关键 Bug，目前均已有对应的修复 PR 处于 Open 状态：

* 🔴 **[高] [Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911): WhatsApp Cloud 适配器注册冲突**
  * *现象*: 安装两个 WhatsApp 通道会导致静默失效与消息错误路由。
  * *状态*: 已有修复提案 [PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913) （将 Cloud 版本独立注册为 `whatsapp-cloud` 实例键）及相关文档更新 [PR #2914](https://github.com/nanocoai/nanoclaw/pull/2914)。
* 🟡 **[中] [Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912): WhatsApp 用户 ID 在不同路径下不一致**
  * *现象*: Baileys 路径和 Cloud 路径为同一个人类用户分配了不同的 ID (JID vs bare wa_id)，导致跨通道的权限和群组成员关系无法同步。
  * *状态*: 目前暂无直接修复 PR，是一个亟待解决的数据模型层痛点。
* 🟢 **[已提交修复] [PR #2915](https://github.com/nanocoai/nanoclaw/pull/2915): 定时重复任务无限分叉导致副本泛滥**
  * *现象*: 当任务触发重试且达到 30 分钟绝对时间上限被 kill 后，`handleRecurrence` 会为同一个系列扇出多个重复的下一个任务。

### 6. 功能请求与路线图信号
基于近期的 Issues 与活跃 PR，可以清晰看到 NanoClaw 接下来的路线图信号：
1. **模板化一键部署**: `amit-shafnir` 正在密集推送 Agent Templates 相关的 PR（#2890 已关闭, #2908, #2909 待合并），下个小版本预计将完整集成“预设 Agent 模板”功能。
2. **多模型提供商基座化**: [PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906) 提议增加全实例默认 Agent Provider（`DEFAULT_AGENT_PROVIDER`），减少运维配置成本，这表明 NanoClaw 正在强化其作为“多模型调度基座”的定位。
3. **去 MCP 化的独立技能拓展**: [PR #2725](https://github.com/nanocoai/nanoclaw/pull/2725) 引入了 `web-search-plus` 实用工具，主打“多引擎搜索+提取，且**不依赖 MCP**”。这暗示社区对于轻量化、容器内原生自带的 CLI 工具有着强烈需求。

### 7. 用户反馈摘要
从今日的 Issue 和 PR 描述中，可以提炼出以下真实用户/开发者的痛点：
* **跨通道的身份与路由危机**: 重度依赖 WhatsApp 业务版的企业用户发现，NanoClaw 当前对“同一用户多种接入方式”的抽象做得不够彻底，导致权限丢失、通道互相挤压（Issue #2911, #2912）。
* **消息静默丢失引发的不信任**: 在 Signal 通道中（PR #2689），由于未将 DM 标记为 `isMention`，路由器未自动创建组，导致首批消息被系统静默丢弃。用户对于“发出去没反应”的容错率极低，这要求 NanoClaw 在路由层的状态机必须绝对严谨。
* **容器内执行重任务易崩溃**: 用户在使用内置的 Agent 浏览器（Chromium）时，经常遇到内存溢出崩溃的情况（PR #2771 解决了此问题）。

### 8. 待处理积压
* ⚠️ **[Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912) [Priority: Medium]**: WhatsApp 跨通道用户 ID 无法统一的问题。这是一个深度架构问题，将直接影响企业级多通道客服场景的落地，建议维护者优先介入讨论 ID 映射层的重构方案。
* ⚠️ **[PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)**: Signal DM 平台 ID 一致性及消息投递修复。该 PR 自 6 月 4 日开启至今已近一个月，今日虽有更新但仍在待合并状态，建议维护者评估是否可以合入以解决 Signal 通道的消息丢失问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-07-03）

**数据统计周期**：过去 24 小时
**项目仓库**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持了极高的开发与测试热度，共产生 **23 条 Issue 更新**（新开 20 条）和 **50 条 PR 更新**。从活动特征来看，项目目前正处于“Reborn”（底层架构重构）阶段的深度 QA 与架构清理期，大量核心开发者（如 henrypark133, serrrfirat, zetyquickly）和测试人员（joe-rlo, thisisjoshford）正在集中精力扫除多用户运行时、技能激活、以及 WebUI 响应式上的系统性 Bug。今日虽然有大量代码提交，但主要围绕测试覆盖率提升和大型功能模块（如 Trace Commons、NUX 引导）的预览，尚未产生新的官方 Release。

## 2. 版本发布
**本日无新版本发布。**
但值得重点关注的是，核心开发者 `ironclaw-ci[bot]` 提交了大型发布预备 PR [PR #5311](https://github.com/nearai/ironclaw/pull/5311)（处于待合并状态），预计下一次发布将包含重大破坏性更新（API breaking changes）：
* `ironclaw_common`: 0.4.2 -> 0.5.0 (⚠️ 破坏性变更)
* `ironclaw_skills`: 0.3.0 -> 0.4.0 (⚠️ 破坏性变更)
* `ironclaw` 主包: 0.24.0 -> 0.29.1

## 3. 项目进展
今日项目合并/关闭了 **20 个 PR**，进展显著集中在**架构治理、测试覆盖和文档梳理**上：
* **架构与类型清理**：[PR #5567](https://github.com/nearai/ironclaw/pull/5567) 成功执行了类型去重积压任务，删除了 6 个冗余特质，统一了 6 个 DTO 集群，净减少 176 行代码，大幅提升了代码健康度。
* **架构防腐机制**：[PR #5559](https://github.com/nearai/ironclaw/pull/5559)（已关闭/合并）在 pre-commit 钩子中强制执行了架构蔓延检查，防止代码再次腐化。
* **测试基建完善**：[PR #5547](https://github.com/nearai/ironclaw/pull/5547) 完成了针对 Reborn 栈中技能、持久化和错误处理路径的 Tier-2 覆盖率测试。[PR #5526](https://github.com/nearai/ironclaw/pull/5526) 修复了多角色组测试框架中的运行时作用域问题。

## 4. 社区热点
当前社区讨论最密集的领域集中在 **“Reborn 架构的稳定性”** 与 **“工具/技能的权限隔离”**：
* **多用户隔离与权限控制**：[Issue #5459](https://github.com/nearai/ironclaw/issues/5459) 讨论极为活跃，用户强烈要求实现精细化的 WASM 工具和技能安装配置（管理员全局共享 vs 用户私有安装）。目前已有 3 个关联 PR（[#5499](https://github.com/nearai/ironclaw/pull/5499), [#5513](https://github.com/nearai/ironclaw/pull/5513), [#5525](https://github.com/nearai/ironclaw/pull/5525)）正在推进落地。
* **UI 焕新与体验升级**：开发者 achalvs 提交了多个 XL 级别的 WebUI 重构 PR，包括全新的 Onboarding/NUX 演示流程（[PR #5565](https://github.com/nearai/ironclaw/pull/5565)）以及设计系统令牌标准化（[PR #5563](https://github.com/nearai/ironclaw/pull/5563)），标志着 IronClaw 正在向更成熟、更易用的商业化产品形态迈进。

## 5. Bug 与稳定性
今日报告了大量 Bug（尤其是 QA 压测阶段的发现），按严重程度排列如下：

### P1 级别（阻断性/严重体验受损）
* **自动化例程创建卡死**：[Issue #5504](https://github.com/nearai/ironclaw/issues/5504)。用户请求创建 routine 时，前端一直卡在“规划中”，无响应、无报错。
* **Web 搜索全线崩溃**：[Issue #5571](https://github.com/nearai/ironclaw/issues/5571)。由 Exa 上游 IP 限流导致 `web-access.search` 失败，错误处理逻辑直接中止了整个 Agent 循环，级联影响了至少 5 个相关测试用例。（已有修复尝试 [PR #5573](https://github.com/nearai/ironclaw/pull/5573)）
* **Slack 读取能力缺失导致循环报错**：[Issue #5522](https://github.com/nearai/ironclaw/issues/5522)。Agent 缺乏读取 Slack 私信的能力，但陷入不断重试获取该能力信息的死循环。

### P2/P3 级别（功能异常与 UI Bug）
* **多端 UI 展示问题**：手机端聊天布局横向溢出（[Issue #5554](https://github.com/nearai/ironclaw/issues/5554)）；终端悬浮按钮遮挡发送框（[Issue #5555](https://github.com/nearai/ironclaw/issues/5555)）。
* **通知与历史逻辑错误**：审批通知点击后消失且不留存历史（[Issue #5553](https://github.com/nearai/ironclaw/issues/5553)）；侧边栏导航离开后高亮不消除（[Issue #5556](https://github.com/nearai/ironclaw/issues/5556)）。
* **大模型幻觉与盲从**：[Issue #5558](https://github.com/nearai/ironclaw/issues/5558)。视觉模型错误识别图片内容，且在用户给出错误纠正时（将拖拉机认作汽车）不重新分析图像而是直接盲从。

## 6. 功能请求与路线图信号
从近期的 Issue 与 PR 活动中，可以清晰看出 IronClaw 的演进路线图：
1. **企业级 SSO 与多租户支持**：[Issue #5570](https://github.com/nearai/ironclaw/issues/5570) 请求在 Railway 的临时预览环境中支持稳定的 Google OAuth 认证代理回调，以方便每个 PR 都能测试 Google SSO。
2. **可观测性增强**：[PR #5280](https://github.com/nearai/ironclaw/pull/5280) 正在引入 `Trace Commons`（全实例注册、用户配置文件和跟踪检查），这将大幅提升企业用户对 Agent 行为的可审计性。
3. **WebChat 成为一等公民通道**：[PR #5566](https://github.com/nearai/ironclaw/pull/5566) 提出将 WebUI 从单纯的交互界面解耦为标准的“输出通道”，允许 Agent 直接在聊天中配置交付渠道。

## 7. 用户反馈摘要
* **痛点 1：历史聊天记录拖累性能**。用户反馈随着对话数量的积累，新建聊天会出现明显的数秒延迟（[Issue #5509](https://github.com/nearai/ironclaw/issues/5509)），且自动化线程抢占列表导致分页异常（[PR #5542](https://github.com/nearai/ironclaw/pull/5542)）。
* **痛点 2：自动化结果输出错位**。用户期望在 Slack 中只收到最终结果摘要，但目前 Agent 会将中间思考过程（如“让我检查一下某某帖子”）也推送到 Slack（[Issue #5551](https://github.com/nearai/ironclaw/issues/5551)），造成信息干扰。
* **痛点 3：跨工作区数据隐私**。用户对“Workspace 中所有人的记忆可见”感到担忧（[Issue #5460](https://github.com/nearai/ironclaw/issues/5460)），说明随着产品向多租户演进，数据隔离已成为核心敏感诉求。

## 8. 待处理积压
* **持续失败的自动化 E2E 测试**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 记录了自 2026-05-27 起定时执行的 Nightly E2E 测试持续失败。虽然这可能是测试环境或非关键断言导致，但长期未修复将掩盖真正的回归风险，建议维护者优先排查。
* **死代码与回放策略失效**：[Issue #5527](https://github.com/nearai/ironclaw/issues/5527) 揭示了一个深度的架构问题（`FilesystemSessionThreadService` 幂等写入读取作用域不匹配），导致生产环境中的提前重放策略完全失效，需要引起核心架构师关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-07-03 动态日报：

# 🦞 LobsterAI 项目动态日报 (2026-07-03)

## 1. 今日速览
在过去 24 小时内，LobsterAI 项目的**代码贡献层面展现出极高的活跃度**，共有 8 次 PR 更新，其中 7 个 PR 被成功合并或关闭，这表明项目维护者近期在代码审查和功能迭代上推进迅速。开发重心主要集中在**前端 UI 体验优化（启动闪屏、白屏修复）**以及**底层任务调度的逻辑修复**。然而，在**社区互动层面存在明显的积压与滞后现象**，今日活跃的 5 个 Issues 均被标记为 `[stale]`（陈旧/停滞状态），最早可追溯至 4 月初，且无任何 Issue 在今日被关闭。整体而言，项目代码正处于快速重构和修复期，但社区用户的反馈尚未得到及时的官方响应。

## 2. 版本发布
**本日无新版本发布 (Releases: 0)。**
尽管没有正式版本上线，但今日合入的大量 PR（如 UI 启动屏重构、定时任务修复）预示着项目正在为下一个重要版本的发布积累代码。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，项目在视觉体验和内核稳定性上迈出了坚实的一步：
*   **引擎启动体验重构**：PR [#2257](https://github.com/netease-youdao/LobsterAI/pull/2257) 将引擎启动屏幕统一为一个连续的闪屏，消除了之前加载过程中的加载动画切换闪烁问题，大幅提升了首屏加载的平滑度。
*   **定时任务通知逻辑修复**：关闭了 PR [#2255](https://github.com/netease-youdao/LobsterAI/pull/2255)，修复了 OpenClaw 网关中由于 `patch-merges` 导致定时任务无法成功切换至“不通知”渠道的底层逻辑漏洞。
*   **系统设置白屏崩溃修复**：PR [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) 修复了在设置中删除当前正在使用的自定义 Provider/Model 时引发的严重白屏崩溃问题（由异步处理时序导致）。
*   **文档与资源更新**：PR [#2253](https://github.com/netease-youdao/LobsterAI/pull/2253) 和 [#2254](https://github.com/netease-youdao/LobsterAI/pull/2254) 更新了 README 和主页配图。
*   **大模型长会话优化**：PR [#2258](https://github.com/netease-youdao/LobsterAI/pull/2258) 针对 DeepSeek 提示词缓存进行了优化，确保未更改的历史记录保持字节级稳定，以提高前缀缓存命中率，并加入了隐私安全的探测机制。

## 4. 社区热点
今日社区最活跃（近期被集中回复/触发机器人标记）的议题主要围绕**系统级冲突**与**基础 UI/逻辑缺陷**：
*   **[高关注度] 系统级冲突引发蓝屏**：[#1354 让龙虾帮忙启动pageant后电脑蓝屏](https://github.com/netease-youdao/LobsterAI/issues/1354)。用户报告在调用助手启动本地程序时偶发 Windows 蓝屏（BSOD）。这是极其严重的系统稳定性反馈，说明助手在执行本地高权限操作或调用外部进程时可能存在驱动/权限层面的冲突。
*   **[高关注度] 任务执行"说谎"**：[#1357 “帮我开启pageant”回答已经启动 实际未启动](https://github.com/netease-youdao/LobsterAI/issues/1357)。助手反馈成功但实际未执行。这是 Agent 领域典型的“幻觉执行”问题，极大伤害用户信任。

## 5. Bug 与稳定性
根据今日活跃的 Issue 和 PR，当前系统的 Bug 集中在调度任务和本地进程调用上，按严重程度排列如下：

*   **🔴 严重 (P0)**: 执行特定指令导致系统蓝屏 - ([#1354](https://github.com/netease-youdao/LobsterAI/issues/1354)) | *暂无直接修复 PR*
*   **🟠 高 (P1)**: Agent 执行本地命令时产生幻觉（声称执行但实际未动）- ([#1357](https://github.com/netease-youdao/LobsterAI/issues/1357)) | *暂无直接修复 PR*
*   **🟡 中 (P2)**: 定时任务交互缺陷，点击后无反馈，用户无法得知是否启动 - ([#1358](https://github.com/netease-youdao/LobsterAI/issues/1358)) | *已有相关 PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) 提交待合并*
*   **🟡 中 (P2)**: 数据持久化缺陷，删除的定时任务在重启后“复活” - ([#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)) | *已有相关 PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) 提交待合并*
*   **🟢 低 (P3)**: 自定义 Agent 创建时缺少重名校验 - ([#1360](https://github.com/netease-youdao/LobsterAI/issues/1360)) | *暂无修复 PR*
*   **🟢 低 (P3)**: 删除当前选中的模型导致白屏（已在今日历史版本中存在，现刚被社区收录）- *已在 PR [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) 中修复*

## 6. 功能请求与路线图信号
*   **任务管理健壮性提升**：从 Issue #1358, #1359 和待合并的 PR #2256 可以看出，**定时任务**是目前用户高频使用的核心功能。用户迫切需要完善的状态机（创建提示、执行反馈、彻底删除/状态清理）。这也指明了下一版本的重点：强化 Agent 在处理异步和定时触发任务时的可靠性。
*   **本地系统深度集成**：用户尝试用龙虾启动 `pageant`，表明用户群体有强烈的意愿将其作为本地的“超级入口”，这要求 LobsterAI 在未来的路线图中增强对本地 Windows/Mac 环境下软件生命周期的管理和真实执行结果校验。

## 7. 用户反馈摘要
从带有 `[stale]` 标签但仍被重新拉回视野的 Issues 中，可以深刻感受到用户的痛点：
*   **信任危机**：“它说做了，但其实没做” ([#1357](https://github.com/netease-youdao/LobsterAI/issues/1357)) 让用户对 AI 助手的执行力产生怀疑。
*   **状态不透明**：“我点了，但不知道有没有成功” ([#1358](https://github.com/netease-youdao/LobsterAI/issues/1358)) 反映出当前 UI 在异步任务反馈上的缺失。
*   **脏数据困扰**：“我删了，它又回来了” ([#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)) 说明本地配置或任务缓存的清理逻辑不够彻底。
*   *总体而言，用户希望 LobsterAI 不仅仅是一个能聊天的 AI，更是一个靠谱、精准的本地自动化执行器。*

## 8. 待处理积压
今日的 Issue 活跃主要源于系统对陈旧 Issue 的自动化标记，这暴露出社区维护的严重积压。**强烈呼吁维护者关注以下 4 月份至今仍未解决的 Issue：**
1.  [Issue #1354](https://github.com/netease-youdao/LobsterAI/issues/1354): 启动程序导致蓝屏（已搁置 3 个月，存在严重声誉风险）
2.  [Issue #1357](https://github.com/netease-youdao/LobsterAI/issues/1357): 程序启动幻觉（核心功能缺陷，已搁置 3 个月）
3.  [Issue #1359](https://github.com/netease-youdao/LobsterAI/issues/1359): 任务删除后复活（已搁置 3 个月）

*当前还有 1 个代码层面的 PR 处于待合并状态：*
*   [PR #2256](https://github.com/netease-youdao/LobsterAI/pull/2256): 包含了定时任务通知和白屏修复的 squash commit，请核心团队 Review 后合入主分支。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份日报基于您提供的 Moltis 项目过去 24 小时的 GitHub 活跃数据生成。日报聚焦于代码层面的推进情况、底层的架构演进以及社区生态的发展。

---

# 📊 Moltis 项目动态日报
**报告日期**: 2026-07-03 | **监测周期**: 过去 24 小时

### 1. 今日速览
在过去 24 小时内，Moltis 项目的整体研发重心集中在**通信底层协议的重构**与**AI 模型生态的横向扩展**上。今日无新版本发布，但提交了 3 项关键的 PR 更新，显示出核心开发团队正在积极为下一阶段的迭代积蓄力量。虽然 Issues 区表现平静（无新开或关闭），但代码库的活跃度保持在健康水平，特别是在 WhatsApp 协议适配层的深度修复上取得了实质性进展。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目共有 3 个 Pull Requests 发生状态变更，重点推进了多渠道网关兼容性与 AI 底座能力的建设：

*   🟢 **WhatsApp 底层协议重大升级**：[#1144 [OPEN] feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing](https://github.com/moltis-org/moltis/pull/1144) 
    *   **进展解析**：这是一个关键的架构级 PR，旨在将底层的 `whatsapp-rust` 依赖从 0.5 升级至 0.6，并引入 LID（Linked Identity）原生寻址机制。由于上游 WhatsApp 协议针对设备迁移进行了变更，旧版本会导致部分集成功能失效，此 PR 通过锁定特定的上游合并提交来修复这一隐患。
*   🟢 **新增 Requesty 作为 OpenAI 兼容服务商**：[#1143 [OPEN] Add Requesty as an OpenAI-compatible provider](https://github.com/moltis-org/moltis/pull/1143)
    *   **进展解析**：引入了 Requesty（一个 OpenAI 兼容的 LLM 路由服务）。该 PR 采用了表驱动的设计模式，完全复用了现有的 `openrouter` 接线逻辑。这标志着 Moltis 在多模型/多供应商路由能力上的扩展性极佳，未来接入新模型的成本极低。
*   🟢 **WhatsApp @lid 聊天回复丢失问题已处理**：[#1116 [CLOSED] fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)
    *   **进展解析**：此 PR 修复了发送给开启了隐私保护的 @lid 聊天的消息被静默丢弃的严重问题。该 PR 今日被关闭（可能意味着代码已合并至主干或被后续更底层的重构 #1144 所替代），表明用户在使用 Moltis 作为 WhatsApp 代理时的一大痛点已被攻克。

### 4. 社区热点
*今日 Issues 区无新增或活跃讨论。社区活跃度主要体现在代码贡献层面。*

### 5. Bug 与稳定性
虽然今日 Issues 区无新增 Bug 报告，但从今日代码更新中可以提取出近期重点解决的稳定性问题（按严重程度排序）：

1.  **[严重 P0] 消息静默丢失 (已修复/重构中)**：
    *   **表现**：在 WhatsApp 场景中，当 Agent 向启用了隐私保护的发件人回复消息时，消息在 Web UI 显示成功，但永远无法到达用户手机，且无送达回执。
    *   **状态**：已通过 PR #1116 和更底层的 PR #1144 进行双重修复，严重影响了“Agent 作为真人助手”的核心体验，目前正等待版本发布。
2.  **[中等 P1] 上游协议导致的集成脱节 (重构中)**：
    *   **表现**：由于 WhatsApp 迁移了 LID 寻址，旧版依赖导致入站/出站消息路由错乱。
    *   **状态**：正在 PR #1144 中进行彻底的底层升级解决。

### 6. 功能请求与路线图信号
从今日合并及开启的 PR 中，我们可以明确推断出 Moltis 近期的产品演进路线图：

*   **信号一：全面拥抱 LLM 路由层 (Router First)**：
    *   继支持 OpenRouter 之后，紧锣密鼓地接入 Requesty (#1143)，表明 Moltis 致力于成为一个“模型无关”的个人 AI 助手框架，让用户能够无缝在多个底层模型（GPT、Claude 等）之间通过路由层进行成本和性能的切换。
*   **信号二：深耕企业级通讯软件的合规与隐私适配**：
    *   连续针对 WhatsApp 的 LID 和隐私协议提交代码 (#1144, #1116)，说明项目方非常看重在主流 IM（如 WhatsApp）中作为智能体 1:1 介入的稳定性。这是个人 AI 助理“落地”到数十亿用户日常通讯工具中的关键一步。

### 7. 用户反馈摘要
*由于今日无新增 Issues 评论，无法直接提取用户痛点反馈。但从开发者 @juanlotito 在 #1144 的提交摘要中可以看出，WhatsApp 平台近期针对设备注册和隐私（LID 迁移）的底层变动，极大地干扰了依赖第三方库的 Bot/Agent 的正常运作，这是当前跨平台通信助手普遍面临的阵痛。*

### 8. 待处理积压
当前需要维护者关注的积压项主要转化为待评审的代码：

*   **高优待评审**：[PR #1144](https://github.com/moltis-org/moltis/pull/1144) 涉及核心底层依赖的大版本升级 (`0.5 -> 0.6`)，且使用了 `[patch.crates-io]` 强制锁定特定上游提交。这类修改影响面广，建议维护团队尽快进行回归测试，特别是针对消息收发链路的压测。
*   **高优待评审**：[PR #1143](https://github.com/moltis-org/moltis/pull/1143) 涉及网络请求与外部服务鉴权 (`REQUESTY_API_KEY`)，需确认密钥管理机制是否安全，以及与现有 OpenRouter 的表驱动逻辑是否存在冲突。

---
*分析结论：Moltis 当前处于典型的“底层加固与横向扩容”并行研发期，代码活跃度健康，整体项目正朝着更加健壮的“多模态通讯智能体”方向迈进。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期**: 2026-07-03 | **分析时段**: 过去 24 小时

## 1. 今日速览
- **整体活跃度极高**：项目在过去 24 小时内迎来了极高密度的开发与社区互动，共处理了 **50 条 PR** 更新与 **25 条 Issue** 更新，且合并/关闭比例健康（PR 合并/关闭 27 条，Issue 关闭 9 条）。
- **迈入 2.0 时代**：官方正式发布了 [v2.0.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2)，项目核心架构（如 Runtime, 桌面端框架）正在进行深度重构。
- **安全与稳定性成为焦点**：社区当前最热烈的关注点集中在“密钥泄漏防护”、“并发导致的死机卡顿”以及“内存泄漏”三大痛点上，并吸引了多位 First-time contributors 提交高质量修复 PR。

## 2. 版本发布
### ⚠️ [v2.0.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2) (早期测试版)
- **重要提示**：当前版本处于活跃开发阶段，**包含破坏性更新且极不稳定，严禁用于生产环境**。
- **更新亮点**：
  - **新增 CLI 能力**：引入了 `cron up` 命令，允许用户通过命令行直接管理定时任务，弥补了非图形化场景下的操作短板（呼应 Issue #5737）。
  - **架构迁移信号**：桌面端发布管线正在迁移至 **Tauri** 框架（见 PR #5734），这预示着 v2.0 的客户端将拥有更小的体积和更好的跨平台性能。

## 3. 项目进展
今日项目在架构优化、安全性和多渠道适配方面取得了实质性进展，重点合并/关闭的 PR 包括：
- **安全防护升级**：[PR #5738](https://github.com/agentscope-ai/QwenPaw/pull/5738) 引入了多维度限流保护（账号维度、IP 频率限制及撞库防护）。
- **上下文管理优化**：[PR #5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) 修复了当结构化摘要超出 Schema `maxLength` 时导致自动压缩崩溃的问题；[PR #5727](https://github.com/agentscope-ai/QwenPaw/pull/5727) 修复了 Goal Mode 的门控架构和作用域过滤逻辑。
- **桌面端/基建演进**：[PR #5620](https://github.com/agentscope-ai/QwenPaw/pull/5620) 优化了前端 Agent 列表的可读性；[PR #5743](https://github.com/agentscope-ai/QwenPaw/pull/5743) 修复了 macOS 旧版本 bash 导致的 CI 构建失败。

## 4. 社区热点
- **安全痛点爆发**：[Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) (密钥脱敏与安全存储) 引发热烈讨论。用户深入审计了 v1.1.12 源码，指出目前的配置仅部分加密，对话日志和 ReMe 日志中存在明明文密钥残留风险。维护者需高度关注此问题。
- **2.0 版本追踪**：[Issue #5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) (v2.0.0 预发布问题集中跟踪) 继续作为反馈集散地，收集了大量关于新版本 Runtime 的适配问题。
- **多 Agent 协作受阻**：[Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 反映同时开启两个子 Agent 会导致主 Agent 陷入无限快速轮询，且飞书侧无法打断，该问题已经困扰社区一个月，高优待解决。

## 5. Bug 与稳定性
按严重程度排序的今日重点 Bug 反馈：
1. 🔴 **[P0] 内存泄漏致进程被杀 (v1.1.12)**: [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) 报告进程运行 64 分钟后内存暴涨至 580MB 被系统强杀，且导致数据库写入中断、配置损坏。根因指向异步任务泄漏和 HTTP 会话不回收。
2. 🔴 **[P0] Agent 假死与死循环**: [Issue #5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) 反馈 Runtime 2.0 中，格式损坏的 Tool Call 会导致模型无限重复执行同一工具。[Issue #5748](https://github.com/agentscope-ai/QwenPaw/issues/5748) 反映工具调用失败时 Agent 会无限期挂起，Typing 指示器永远旋转。（*注：开发者已提交 [PR #5749](https://github.com/agentscope-ai/QwenPaw/pull/5749) 尝试修复 #5748*）。
3. 🟠 **[P1] 上下文压缩“失忆”**: [Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) 指出 `scroll` 策略可能错误折叠正在执行的当前任务，导致 Agent 突然“失忆”。（*已有修复提案 [PR #5747](https://github.com/agentscope-ai/QwenPaw/pull/5747)*）。
4. 🟡 **[P2] Web 前端卡顿**: [Issue #5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) 反馈在 Console 端流式输出长文本时浏览器严重卡死。

## 6. 功能请求与路线图信号
通过分析近期的 Issue 需求与对应 PR，可预测 v2.0 路线图的重心：
- **安全与脱敏标准化**：针对 [Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) 的诉求，开发者火速提交了 [PR #5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) 和 [PR #5745](https://github.com/agentscope-ai/QwenPaw/pull/5745)，支持在 JSON 配置中直接引用环境变量，并对持久化日志进行脱敏。**极大概率在下个测试版中落地**。
- **大模型 Fallback 机制**：[Issue #5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) 呼吁支持限额耗尽时的模型自动切换。已有对应的 [PR #5597](https://github.com/agentscope-ai/QwenPaw/pull/5597)（全局/单 Agent 级别的模型回退重试边界）提交，这表明平台的高可用性正在大幅增强。
- **飞书/群聊多渠道隔离**：社区强烈要求改善群聊中的用户隔离与消息解析（[#5708](https://github.com/agentscope-ai/QwenPaw/issues/5708), [#5721](https://github.com/agentscope-ai/QwenPaw/issues/5721)），相关的身份解析和卡片解析逻辑已在重构中。

## 7. 用户反馈摘要
- **痛点与不满**：用户对并发处理能力极为头疼（如多开网页卡死、多 Agent 轮询假死）；其次，默认公开的 Web Console 缺乏基础密码保护（[Issue #5715](https://github.com/agentscope-ai/QwenPaw/issues/5715)）让许多公网部署的用户感到焦虑；大量底层日志暴露 API Key 也引发信任危机。
- **满意与赞赏**：熟练的用户非常认可 QwenPaw 的 Skill 机制灵活性；此外，Action Bot 自动创建的安装校验 Issue（[Issue #5733](https://github.com/agentscope-ai/QwenPaw/issues/5733)）让社区看到了官方对发版质量把控的严谨态度，获得了社区认可。

## 8. 待处理积压
以下为高影响但暂未根本解决的遗留问题，需维护者重点排期：
- 🔴 **[Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)**：向量索引无限膨胀至 37G 导致 `memory_search` 频繁崩溃。该问题存活 1 个多月，严重影响长期记忆功能的可用性。
- 🟠 **[PR #5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)**：为 `memory_search` 引入 Reranker 机制的重磅 PR 目前处于 `Under Review` 状态，合并后将大幅提升 Agent 记忆检索的准确度，需推进 Review。
- 🟠 **[Issue #5403](https://github.com/agentscope-ai/QwenPaw/issues/5403)**：浏览器自动填充劫持搜索框的 UI Bug 仍未解决，影响基础配置体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-07-03

**数据统计周期**：过去 24 小时
**项目仓库**：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持了**极高的社区与开发活跃度**。今日共处理了 50 个 PR（其中 27 个被合并或关闭，23 个处于待合并状态），Issue 更新达 37 条。从代码提交的方向来看，项目正处于**底层架构优化（如内存持久化、多渠道路由重构）与安全合规加固**的密集推进期。虽然今日没有发布新的稳定版，但针对高危 Bug（如 OOM、路径遍历漏洞）和高优 RFC 的实质性修复已进入 Review 阶段，展现出维护团队在面对复杂工程挑战时的高效响应能力。

---

## 2. 版本发布

**本日无新版本发布 (0 Releases)。**
根据 Issue 追踪信号，目前社区与开发重心主要聚焦于 `v0.8.x` 的稳定性修复以及 `v0.9.0` 的架构重构（详见 [v0.9.0 Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。

---

## 3. 项目进展

今日共有 27 个 PR 被合并或关闭。以下是推动项目向前迈进的核心合并项：

*   **🔥 架构与核心功能整合**：
    *   [PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)：实现了基于 RFC-6969 的**单轮对话多渠道输出路由 (`send_via`)**，修复了 Telegram 等渠道的语音双重发送 Bug。这是一个涉及多渠道、多提供商的重量级（Size: XL）重构。
    *   [PR #8476](https://github.com/zeroclaw-labs/zeroclaw/pull/8476)：修复了 OpenAI Codex 提供商的工具调用逻辑，确保仅在工具列表非空时才下发 `tool_choice`，解决了 vLLM 抛出 400 错误的兼容性问题。
*   **🛡️ 安全防护与基础设施**：
    *   [PR #8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574)：增加了针对“声称大小造假”的 ZIP 条目的回归测试，进一步完善了早前合并的 Zip-Bomb 防御机制。
    *   [PR #8437](https://github.com/zeroclaw-labs/zeroclaw/pull/8437)：重构了 JSONL 日志写入管道，将其提取为可测试的 Helper 模块，提升了可观测性底层的代码健壮性。
*   **🔄 关闭的 Issue**：
    *   [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)：关于工作区文件保护的 `.ignore` 机制 RFC 被关闭，可能已被合并至其他安全策略实现中或方案被废弃。
    *   [Issue #8605](https://github.com/zeroclaw-labs/zeroclaw/issues/8605)：修复了运行时配置自我修改保护机制（拦截路径错位）的高危 Bug。

---

## 4. 社区热点

今日讨论度最高的话题集中在**MCP (Model Context Protocol) 工具链路的断连**以及**跨平台兼容性**上：

1.  **🔥 [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (评论: 14)**：MCP 工具在网关层可见，但在 TUI 会话中丢失（`tool_search` 缺失）。多位用户证实该 Bug 阻断了工作流（Severity: S1）。这反映了 ZeroClaw 在 Web Gateway、Daemon 与 TUI 之间的状态同步仍存在架构性缝隙。
2.  **🗣️ [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (评论: 13)**：关于看板自动化、Work Lanes 与标签清理的治理 RFC。说明项目维护压力上升，团队正在积极引入自动化分流机制来管理日益庞大的 Issue/PR 池。
3.  **💻 [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (评论: 7)**：Windows 平台测试套件大面积失败（74 个测试报错）。涉及 Unix 专属指令、路径语义和 GBK 编码问题。由于 CI 仅运行 Linux，导致大量隐患被掩盖，Windows 贡献者对此反响强烈。

---

## 5. Bug 与稳定性

今日报告了多个影响系统稳定性的关键 Bug，按严重程度排列如下：

*   **S0 级 (数据丢失/极度危险)**：
    *   [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)：**WSL2 环境下连续发生 OOM (Out of Memory)**。日志显示 ZeroClaw 守护进程内存占用飙升至 8GB+ 后被系统强杀。目前急需复现步骤（`r:needs-repro`）。
*   **S1 级 (工作流阻断/高危)**：
    *   [Issue #8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632)：在存在 `embedded-web` 时，从源码安装会在生成 Web API 客户端前触发编译失败。
    *   [Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)：**WhatsApp Web 渠道设备链接全面失效**。受 WhatsApp 官方新的 passkey/SHORTCAKE 机制影响，原生的二维码扫码登录已被阻断。
*   **S2 级 (静默错误/降级表现)**：
    *   [Issue #8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)：无头触发器执行的确定性 SOP 步骤在未实际执行时被静默标记为 "Completed"，导致产生虚假的审计日志（False-green）。
    *   [Issue #8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615)：兼容提供商的代码逻辑无条件剥离了 `<think>` 标签，导致部分回复内容被静默删除。

---

## 6. 功能请求与路线图信号

从最新的 Issues 和开放的 PRs 中，可以清晰地看到 ZeroClaw 的演进方向：

*   **🔐 身份验证与多租户隔离**：[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) 呼吁支持基于 Agent 的自定义环境变量配置（分离 `runtime_context` 和 `runtime_secrets`）。同时 [PR #8625](https://github.com/zeroclaw-labs/zeroclaw/pull/8625) 正在修复配置变更时记忆嵌入器的热重载问题，这表明 ZeroClaw 正在向**企业级多租户安全环境**迈进。
*   **🔗 OpenAI API 兼容适配层**：[Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) 与 [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 提出了构建 OpenAI Chat Completions 兼容适配器的 RFC。如果实现，LobeChat、Open WebUI 等主流前端将能无缝接入 ZeroClaw，大幅提升其作为 AI 后端基座的泛用性。
*   **🛠️ 底层工具链强化**：[Issue #8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) 提议借鉴 Claude Code 的 `Read` 工具，增强 `file_read`（增加行数限制、字符集检测、PDF 分页等），以及 [PR #8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) 提出接入 Gitea/Forgejo 等 Git forge 渠道。

---

## 7. 用户反馈摘要

*   **痛点：跨平台体验割裂**：Windows 与 WSL2 用户饱受折磨。不仅是由于控制台编码导致的 74 个测试失败（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)），WSL2 下的严重内存泄漏（[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)）更是让重度依赖 Linux 子系统进行开发的用户面临系统卡死的风险。
*   **痛点：MCP 生态接入的不确定性**：MCP 是目前 AI Agent 扩展能力的核心，用户反馈 MCP 工具在 Dashboard 可见但在 TUI 不可见（[#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302)、[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)），这种状态不一致极大地削弱了用户对 ZeroClaw 工具链路稳定性的信任。
*   **满意点：模块化与渠道扩展能力**：社区对 ZeroClaw 的多渠道接入能力（如 Telegram、WhatsApp、微信）评价积极，多位贡献者正积极提交针对特定渠道的高级特性（如 WhatsApp 的位置分享 [PR #8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427)），展现了框架良好的扩展性。

---

## 8. 待处理积压

提醒维护团队关注以下处于停滞或急需推进的关键节点：

*   **阻塞中**：[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) (工作区 `.ignore` 保护机制) 虽然关注度较高，但状态为 `needs-author-action`，已处于阻塞。
*   **高优 RFC 待审**：关于重塑 Provider 组织架构的 [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (以 `wire_api` 为主轴) 标记为 `needs-maintainer-review`，该决策将深远影响后续的模型提供商接入逻辑，需尽早提上日程。
*   **安全漏洞修复待合并**：修复微信渠道本地附件路径遍历漏洞的 [PR #8628](https://github.com/zeroclaw-labs/zeroclaw/pull/8628) 处于待合并状态，涉及安全防绕过（`canonicalize()` 失效问题），建议立即进行 Review 并合入主分支。

</details>