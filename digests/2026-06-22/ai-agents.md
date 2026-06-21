# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-21 22:22 UTC

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

**OpenClaw 项目动态日报**
**日期**: 2026-06-22
**分析对象**: OpenClaw (github.com/openclaw/openclaw)

---

### 1. 今日速览
过去 24 小时内，OpenClaw 项目展现了极其旺盛的社区生命力与高频的开发迭代节奏。项目单日迎来了高达 1000 条的 Issue 与 PR 更新（其中活跃/新开 Issue 482 条，待合并 PR 491 条），核心贡献者与社区开发者在密集地进行 Bug 追踪与代码审查。近期版本的重心聚焦于多渠道（Telegram/Discord/Feishu 等）消息投递的可靠性、子代理编排以及记忆模块的性能优化。虽然大量历史遗留的 P1/P2 级崩溃和数据丢失问题仍处于排查阶段，但多份核心 PR 已经就绪等待维护者合并，项目整体正处于“大重构后的密集修补与性能提升”阶段。

### 2. 版本发布
项目近期发布了 2 个新版本，重点优化了运行时稳定性和渠道消息渲染：

*   **v2026.6.10-beta.1**: 
    *   **核心更新**: 大幅增强了 Agent 轮次和会话状态的可靠性。修复了挂起的子代理完成消息丢失、聊天记录转录为空、媒体索引错位等问题，并重启了休眠的后续任务流，确保了压缩模型别名的一致性。
*   **v2026.6.9**: 
    *   **核心更新**: 优化了 **Telegram 渠道**的投递体验，现在支持发送富 HTML，保留 Markdown 格式和贴纸路径，更真实地渲染进度草稿和命令输出。同时安全地规范化了 HTML 表格，确保提及和处理程序保持在正确的交付路径。

### 3. 项目进展
虽然今日直接合并/关闭的 PR 数量较少（500 个 PR 更新中仅 9 个合并/关闭，491 个处于活跃待处理状态），但多个承载核心修复的大型 PR 已标记为“等待维护者审查”，标志着项目即将迎来一次大幅稳定性跃迁：

*   **消息丢失与静默故障修复**: PR [#89039](https://github.com/openclaw/openclaw/pull/89039) 解决了由于 `EmbeddedAttemptSessionTakeoverError` 导致的静默消息丢失问题；PR [#88992](https://github.com/openclaw/openclaw/pull/88992) 修复了 `message_tool_only` 模式下搁浅回复无法恢复的问题。
*   **会话状态与死锁恢复**: PR [#89045](https://github.com/openclaw/openclaw/pull/89045) 恢复了卡在 `failed` 状态的终端群聊会话；PR [#85249](https://github.com/openclaw/openclaw/pull/85249) 修复了隔离 cron 执行器中的 `sourceDelivery` 未定义报错。
*   **性能与底层重构**: PR [#77158](https://github.com/openclaw/openclaw/pull/77158) 为具有数千个会话记录的 Agent 引入了 QMD 持久化缓存和状态快速路径，极大降低了网关 CPU 消耗。

### 4. 社区热点
今日社区讨论极其热烈，核心诉求集中在“复杂架构下的状态一致性与上下文压缩”：

*   **多渠道重复回复与崩溃** ([#86519](https://github.com/openclaw/openclaw/issues/86519)): 用户反馈在 5.20 更新后，Telegram 渠道会出现单条消息重复发送 2-10 次的严重回归问题，引发大量讨论。
*   **上下文压缩死锁** ([#92043](https://github.com/openclaw/openclaw/issues/92043)): 针对长对话，180s 的压缩超时时间被指设为“全局硬死线”，一旦模型分析时间超时就会导致崩溃循环，且无法复用部分进度，社区呼吁增加重试与部分进度保存机制。
*   **记忆库破坏性迁移** ([#95495](https://github.com/openclaw/openclaw/issues/95495)): 升级到 v2026.6.9 后，记忆向量库路径在没有提示的情况下被静默转移，导致用户被迫对上千个文件进行完全重新嵌入，引发关于“破坏性变更缺乏预警”的强烈不满。

### 5. Bug 与稳定性
今日报告了大量影响系统稳定性的 Bug，按严重程度排列如下：

*   **【P1 - 数据丢失/破坏性变更】** ([#95495](https://github.com/openclaw/openclaw/issues/95495)): v2026.6.9 记忆库强制迁移且无降级警告。（暂无 Fix PR）
*   **【P1 - 核心功能阻断】** ([#86538](https://github.com/openclaw/openclaw/issues/86538)): Session JSONL 写锁超时阻断主线程、Cron 和子代理通道，导致投递失败。（已有相关 Fix PR 提交审核）
*   **【P1 - 隐私与安全泄露】** ([#91804](https://github.com/openclaw/openclaw/issues/91804)): 内部推理/思考过程在 v2026.6.5 版本后会被直接暴露给终端用户。
*   **【P1 - 死锁与循环】** ([#92076](https://github.com/openclaw/openclaw/issues/92076), [#93375](https://github.com/openclaw/openclaw/issues/93375)): 子代理在请求会话不活跃或网络瞬断时引发 Telegram 投递静默崩溃循环。
*   **【P1 - 降级保护失效】** ([#88870](https://github.com/openclaw/openclaw/issues/88870)): 卡顿会话恢复机制误杀了正常但耗时较长的 Agent 运行（如深度思考），向用户错误报错为“用户中止”。

### 6. 功能请求与路线图信号
从近期的 Feature Request 和对应的 PR 中，可以清晰看出 OpenClaw 接下来的路线图方向：

*   **多级会话与上下文隔离**: Issue [#90916](https://github.com/openclaw/openclaw/issues/90916) 提出为单一助手建立“Topic-session 家族模型”，实现多条隔离的上下文通道。对应的 PR [#90259](https://github.com/openclaw/openclaw/pull/90259)（重置家族结转摘要）已在审核中，预示多线程记忆管理即将上线。
*   **动态模型热切换优化**: Issue [#92415](https://github.com/openclaw/openclaw/issues/92415) 报告了 `/model` 指令无法彻底刷新会话内的模型快照。这类反馈将推动底层架构进一步解耦模型注册表与会话状态。
*   **UI/UX 的异步反馈增强**: PR [#95604](https://github.com/openclaw/openclaw/pull/95604) 致力于在 Discord 客户端中展示子代理的执行进度，解决长任务期间前端“看似卡死”的体验痛点。

### 7. 用户反馈摘要
从今日 500+ 条 Issue 互动中，提炼出真实用户的三大核心痛点：

1.  **“静默失败”极度折磨人**: 大量用户抱怨 Gateway 假死或崩溃后，没有明确的 stderr 输出或前端提示（如 [#90711](https://github.com/openclaw/openclaw/issues/90711) 指出 LaunchAgents 直接把错误输出到 `/dev/null`），导致排障极其困难。
2.  **长上下文与记忆模块的脆弱性**: 在处理 200K+ Token 的长会话时，记忆注入会破坏缓存命中率（[#91223](https://github.com/openclaw/openclaw/issues/91223)），且触发压缩时机太晚，极易导致前端直接卡死并提示 "Something went wrong"（[#90639](https://github.com/openclaw/openclaw/issues/90639)）。
3.  **多渠道部署的异构复杂性**: 针对不同平台（Telegram的富文本、飞书的通道限制、Discord的附件生成）的适配依然存在诸多边缘 Bug，诸如“附件不在允许文件夹内”（[#67915](https://github.com/openclaw/openclaw/issues/67915)）等问题显著影响了普通用户的开箱体验。

### 8. 待处理积压
维护者需要重点关注以下长期阻塞、影响面广且尚未有明确修复进展的积压问题：

*   **Matrix 协议严重回归** ([#90325](https://github.com/openclaw/openclaw/issues/90325)): 自 6.1 版本起 Matrix 通道直接崩溃，已有 7 条讨论，目前仍需官方介入提供 Live Repro 环境。
*   **Cron 隔离模式中的子代理聚合失效** ([#92369](https://github.com/openclaw/openclaw/issues/92369)): 由于编排会话在收集结果前就终止，导致所有并行子代理任务宣告失败，这对依赖定时任务的自动化工作流是致命打击。
*   **大型日志导致的连接中断** ([#86214](https://github.com/openclaw/openclaw/issues/86214)): 当存在大型 `logs_2.sqlite` 时，Codex 服务器会在处理图像/工具请求时断开连接，此 P1 级别问题已积压近一个月。

---

## 横向生态对比

基于 2026 年 6 月 22 日各开源项目的社区动态摘要，以下是为您生成的横向对比分析报告：

# 2026-06-22 个人 AI 助手与智能体开源生态横向洞察报告

## 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**“从单一对话向多级编排演进”的深度工程化阶段**。各项目在多渠道接入（如 Telegram、Discord）、MCP 协议集成与长上下文记忆方面已形成行业共识，但普遍受困于并发状态死锁、流式解析脆弱及 Token 成本失控等底层稳定性挑战。多智能体（A2A）通信隔离、动态成本路由以及端侧轻量化部署，正成为驱动下一轮技术迭代的核心叙事。整体生态呈现出高度活跃、技术栈加速收敛但安全边界日益收紧的复杂态势。

## 2. 各项目活跃度对比
*(过去 24 小时数据，按工程活跃度降序排列)*

| 项目名称 | Issue 活跃/新建 | PR 活跃/待合并 | 版本发布 | 核心焦点与状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 482 | 491 | v2026.6.9, beta.1 | 多渠道投递可靠性、上下文压缩死锁修复（大重构后密集修补） | 🟢 高度繁荣 (超大流量) |
| **CoPaw** (QwenPaw) | 14 | 26 | 无 | 移动端响应式重构、SSE 实时推送优化 | 🟢 高度繁荣 (极速扩张) |
| **ZeroClaw** | 32 | 48 | 无 | v0.9.0 架构铺垫 (WASM插件、OIDC认证)、兼容性修复 | 🟢 活跃 (架构大改期) |
| **IronClaw** | 极少 | 13 | 无 | Reborn 运行时并发调度、CI 重构、自动化测试清理 | 🟢 活跃 (高质量重构) |
| **NanoBot** | 7 | 19 | 无 | MCP 越权漏洞修复、流式响应死锁修复、记忆检索分离 | 🟡 稳定迭代 (偿付技术债) |
| **Hermes Agent** | 27 | 42 | 无 | 桌面端/Windows 启动卡死攻坚、MCP 僵尸进程清理 | 🟡 稳定迭代 (修复 P1 阻断) |
| **PicoClaw** | 3 | 1 | nightly (v0.3.0) | 群组配置鲁棒性、去中心化隐私协议接入诉求 | 🟢 健康发展 (平稳推进) |
| **NanoClaw** | 2 | 3 | 无 | 系统竞态条件修复、多智能体(A2A)安全越权排查 | 🟡 沉淀期 (安全审视) |
| **ZeptoClaw**| 0 | 0 | 无 | 将二进制体积硬性限制 (7.5MB) 引入 CI 流程 | 🟢 健康发展 (打磨期) |
| **LobsterAI** | 1 | 0 | 无 | 曝出 SSRF 安全漏洞，历史 Issue 被机器人批量关闭 | 🔴 停滞预警 (缺乏维护) |
| **NullClaw** | 1 | 0 | 无 | 核心模型流式响应解析失败 (>50% 报错率) 无人处理 | 🔴 停滞预警 (阻断性 Bug) |
| **TinyClaw / Moltis** | 0 | 0 | 无 | 过去 24 小时无任何代码与社区活动 | ⚪ 静默状态 |

## 3. OpenClaw 在生态中的定位
作为生态的**绝对头部与核心参照系**，OpenClaw 展现出了惊人的社区吞吐量（单日近 1000 条流变动向）。它扮演着行业“功能试金石”的角色。
*   **优势**：社区规模和_issue_基数碾压同类项目，面临并解决着最极端的长上下文死锁（如 180s 超时死线）、海量会话（QMD 持久化缓存）及异构多渠道适配问题。其破坏性变更（如记忆库强制迁移）虽受指责，但也侧面印证了其庞大且高频的实机部署量。
*   **技术路线差异**：相比 CoPaw 专注移动端、ZeptoClaw 专注极限体积，OpenClaw 追求的是**全场景触达与极其复杂的子代理编排**。
*   **定位总结**：OpenClaw 是功能最全面的“重型装甲”，但也正经历大版本重构后的阵痛期，其稳定性和静默失败问题成为社区主要槽点。

## 4. 共同关注的技术方向
通过对各项目 Issue 和 PR 的聚类分析，以下四个技术方向已成为全行业的共性诉求：

1.  **大模型兼容性与流式工具调用的“地雷”** *(涉及：NanoBot, ZeroClaw, NullClaw, CoPaw)*
    *   **诉求**：OpenAI/Anthropic 兼容接口在流式返回 `tool_use` 时，极易因重复 ID 或非标准空内容导致会话永久损坏（如 NanoBot #4442, NullClaw #967）。
2.  **MCP 协议的生命周期管理与安全越权** *(涉及：NanoBot, Hermes Agent, ZeroClaw, NanoClaw, LobsterAI)*
    *   **诉求**：MCP 带来了极大的扩展性，但也引发了严重的进程级联崩溃（Hermes）、重连网关崩溃（NanoBot）以及资源越权黑名单 Bypass（NanoBot #4435）。同时，AI 动态修改 MCP 配置极易引发“审批走私”等安全漏洞（NanoClaw #2827）。
3.  **后台常驻、Cron 任务与成本失控焦虑** *(涉及：NanoBot, PicoClaw, IronClaw, Hermes)*
    *   **诉求**：用户大量将智能体作为后台监控使用，对“心跳服务”占用昂贵模型、定时任务静默失败，以及 Evolution 模式导致每分钟消耗 Token（PicoClaw #3012）表现出极度的成本焦虑。
4.  **多渠道通讯与隐私去中心化** *(涉及：OpenClaw, Hermes Agent, PicoClaw, ZeroClaw)*
    *   **诉求**：除了标配的 Discord/Telegram/Slack，极客与开发社区强烈呼吁接入 SimpleX、Tox、Matrix（端到端加密）以及国内的 QQBot/LINE 等。

## 5. 差异化定位分析
*   **全能型重型枢纽**：**OpenClaw**, **ZeroClaw**。追求极致的企业级与重度极客体验，引入 WASM 插件、高级编排和 OIDC 认证。
*   **多端交互与移动优先**：**CoPaw (QwenPaw)**。密集重构移动端 UI，引入 SSE 和语音提示，专注日常交互的丝滑体验。
*   **性能重构与企业级托管**：**IronClaw**, **NanoBot**。聚焦底层并发执行器、凭证自动刷新以及向 SaaS/托管单租户架构演进。
*   **极致轻量与边缘计算**：**ZeptoClaw**。把“6MB体积护城河”刻进 CI 强制拦截，专为资源受限的微型设备/机器人设计。
*   **隐私极客工具箱**：**PicoClaw**。迎合高度注重隐私的极客群体，主攻去中心化协议和无鉴权信道。

## 6. 社区热度与成熟度分层
*   **第一梯队（高速迭代与扩张期）**：`OpenClaw`、`CoPaw`、`ZeroClaw`。社区处于爆发期，每天涌入大量新用户和新贡献者，伴随大量 UI 和新渠道适配 PR，同时也暴露出较多的“静默失败”和状态管理 Bug。
*   **第二梯队（质量巩固与偿债期）**：`NanoBot`、`Hermes Agent`、`IronClaw`。核心团队今日主要精力在于“填坑”——修复 OAuth 认证失效、清理 MCP 僵尸进程、重构 CI 测试流水线。工程化程度深，代码审查严格。
*   **第三梯队（停滞与高风险预警期）**：`LobsterAI`、`NullClaw`。项目基本失去人工维护，高度依赖 Stale Bot 关闭 Issue。核心链路（如流式输出阻断、SSRF 防护降级）已出现严重影响使用的问题却无官方介入，生态面临流失风险。

## 7. 值得关注的趋势信号
1.  **“推理成本与深度”的动态平衡机制成为刚需**：随着 Reasoning 模型的普及，智能体急需具备“自我侦测任务复杂度”的能力。Hermes (#50293) 和 NanoBot (#4431) 社区均呼吁，让 Agent 在日常对话中使用廉价模型，仅在遇到硬核逻辑时动态开启“深度思考”和“独立心跳模型”。
2.  **记忆机制走向“结构化解耦”**：纯粹将历史记录塞入 Prompt 的做法正被抛弃。NanoBot (#4440) 提出“只读历史检索工具”，ZeroClaw (#4760) 倡导使用 `save_memory` 工具进行固化，表明行业正转向基于 RAG 和时效性权重的结构化长期记忆。
3.  **多智能体 (A2A) 亟需“沙箱级”隔离**：随着 Agent 之间开始互相通信和转发文件，安全问题从“防范人类提示词注入”升级为“防范恶意 Agent”。NanoClaw (#2828) 曝光的 A2A 符号链接逃逸漏洞提醒开发者，多智能体编排必须从 OS 内核层面实现工作目录和权限的强隔离。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是为您生成的 2026 年 6 月 22 日 NanoBot 项目动态日报。

---

# 🤖 NanoBot 项目动态日报 (2026-06-22)

**数据概览**：过去 24 小时内，NanoBot 仓库共有 10 条 Issue 更新（7 个活跃/新建，3 个关闭）以及 33 条 PR 更新（19 个待合并，14 个已合并/关闭）。无新版本发布。

## 1. 今日速览
NanoBot 今日呈现极高的社区活跃度与开发进度，单日 PR 处理量与 Issue 报告量处于高位。项目当前重心集中在**修复并发与流式响应引起的系统级崩溃**、**修补 MCP 安全漏洞**，以及**深度优化多模型兼容性与内存机制**。众多高质量社区贡献（涵盖 CLI 体验、语音支持和配置解析）被合并入主分支，表明项目在向下一个稳定版本迭代的过程中正在快速收拢技术债务。

## 2. 版本发布
**无新版本发布。**
*(注：当前项目主分支处于高频迭代期，推测项目组正在为下一个大版本或重要的 LTS 稳定版积蓄大量功能与修复。)*

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，标志着项目在多个子系统上取得了实质性向前迈进：
*   **WebUI 与配置管理 (由 `@tobrien` 主导)**：合并了 4 个重要 PR。包括彻底解决了环境变量模板 `${VAR}` 解析问题的 [PR #4323](https://github.com/HKUDS/nanobot/pull/4323)、[PR #4324](https://github.com/HKUDS/nanobot/pull/4324) 和 [PR #4325](https://github.com/HKUDS/nanobot/pull/4325)，使得凭据管理更加安全；以及引入了支持 OpenAI、Groq、ElevenLabs 的多提供商 TTS 系统 ([PR #4316](https://github.com/HKUDS/nanobot/pull/4316))，极大丰富了助手的语音交互能力。
*   **Bug 根因修复**：关闭了由于共享 `_extra_hooks` 被污染导致并发不安全的 Issue ([Issue #4408](https://github.com/HKUDS/nanobot/issues/4408))。
*   **生态集成优化**：关闭了关于支持 Telegram Bot API 10.1 富文本消息渲染（支持表格、任务列表等）的请求 ([Issue #4422](https://github.com/HKUDS/nanobot/issues/4422))。

## 4. 社区热点
当前社区讨论最火热的方向集中在**系统稳定性**与**安全控制**：
*   **MCP 资源越权访问漏洞**：由 `@YLChen-007` 连续提交的两个安全报告 ([Issue #4435](https://github.com/HKUDS/nanobot/issues/4435) 和 [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)) 引起高度关注。用户发现 MCP 的 `enabledTools: []` 黑名单机制存在 Bypass，会向模型暴露未授权的资源和 Prompts。这反映出企业级用户在将 NanoBot 接入内部工具链时，对权限隔离有着极高的刚需。
*   **长期集成的诉求**：一个关于 **Mattermost 渠道集成**的请求 ([Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)) 于今日再次活跃。用户抱怨现有的 Discord/Slack/Telegram 生态要么偏游戏、要么涉及隐私问题，强烈要求接入 Mattermost 等开源私有化平台，反映了一部分开发者对数据隐私的顾虑。

## 5. Bug 与稳定性
今日报告了多个严重程度不一的 Bug，部分已由社区火速提交修复 PR：
1.  🔴 **严重: 流式响应中重复的 `tool_use` ID 导致会话永久损坏** ([Issue #4442](https://github.com/HKUDS/nanobot/issues/4442))
    *   **现象**：使用 Anthropic 家族流式响应时，重复的工具调用 ID 会被持久化，导致该会话后续所有 API 调用全部返回 400 错误，Agent 陷入假死。
    *   **状态**：已有热修复 PR ([PR #4443](https://github.com/HKUDS/nanobot/pull/4443))。
2.  🔴 **严重: MCP SDK 导致网关崩溃** ([PR #4441](https://github.com/HKUDS/nanobot/pull/4441))
    *   **现象**：MCP 重连机制触发时，由于 anyio 任务组冲突，引发 `RuntimeError` 直接导致网关崩溃。
    *   **状态**：已有修复 PR，强制关闭生成器。
3.  🟡 **性能隐患: 频繁的冗余 tiktoken 编码** ([Issue #4420](https://github.com/HKUDS/nanobot/issues/4420))
    *   **现象**：在计算 prompt tokens 时，每次迭代都会对工具定义重新进行 JSON 序列化和编码，而非缓存到字节层面，导致响应延迟。

## 6. 功能请求与路线图信号
从近期的 Issue 与 PR 走向来看，NanoBot 下一阶段的路线图信号明显指向**主动式 Agent (Proactive Agent)** 与 **推理成本控制**：
*   **记忆检索分离**：`@waelantar` 提议增加只读的 `search_history` 工具 ([Issue #4440](https://github.com/HKUDS/nanobot/issues/4440))，并且已经提交了对应的 PR ([PR #4439](https://github.com/HKUDS/nanobot/pull/4439))。这将允许 Agent 按需搜索 `history.jsonl`，而不是把所有记忆塞入上下文，这是典型的 Token 节约策略。
*   **后台任务与心跳服务解耦**：社区连续出现为 Heartbeat（心跳）服务指定独立廉价模型的请求 ([Issue #4431](https://github.com/HKUDS/nanobot/issues/4431))，以及为 Cron 定时任务增加“静默模式”的 PR ([PR #4225](https://github.com/HKUDS/nanobot/pull/4225))。这表明用户大量在使用 NanoBot 作为后台监控 Agent，且对 API 成本极其敏感。

## 7. 用户反馈摘要
综合今日的各项讨论，提炼出用户的真实痛点如下：
*   **痛点 1：大模型提供商的差异化“地雷”**：`@DreamShepherd2006` 在处理 DeepSeek 兼容性时发现 ([PR #3869](https://github.com/HKUDS/nanobot/pull/3869))，DeepSeek 对空内容和特定占位符极为敏感，这反映出不同 LLM 后端的容错能力参差不齐，NanoBot 需要在适配层做更多的“硬化”处理。
*   **痛点 2：工具执行期间用户被忽视**：用户反馈在 Agent 执行耗时工具时，如果发送新消息，Agent 会直接无视继续执行原任务 ([PR #4397](https://github.com/HKUDS/nanobot/pull/4397))。这打破了对话式交互的即时性预期，急需注入系统提示来让 LLM 优先回应用户。
*   **痛点 3：配置引导缺失**：CLI 的向导流程中配置搜索引擎时，竟然错误地显示了 LLM 提供商列表 ([PR #4438](https://github.com/HKUDS/nanobot/pull/4438))，影响了新用户的初始体验。

## 8. 待处理积压
*   ⚠️ **OpenAI 兼容性工具调用解析修复** ([PR #4092](https://github.com/HKUDS/nanobot/pull/4092) 自 5 月 29 日起开启)：该 PR 修复了非流式 OpenAI 兼容工具调用的重复 ID 问题，影响面较广，但已停滞近一个月，需要维护者进行 Code Review 并推进合并。
*   ⚠️ **DeepSeek 硬化补丁** ([PR #3869](https://github.com/HKUDS/nanobot/pull/3869) 自 5 月 16 日起开启)：针对 DeepSeek 模型的异常输出处理，涉及核心的消息清洗逻辑，积压时间较长，急需核心团队介入评估是否引入回归风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是 **NousResearch/hermes-agent** 项目 2026-06-22 的动态日报。本期报告基于过去 24 小时的 GitHub 活动数据生成。

---

# 📊 Hermes Agent 项目动态日报 (2026-06-22)

## 1. 今日速览
- **高度活跃的日常维护**：过去 24 小时内项目产生了 **50 条 Issue 更新**（27 活跃，23 关闭）与 **50 条 PR 更新**（42 待合并，8 已合并/关闭），社区参与度和核心团队的修复节奏均保持在极高水平。
- **无新版本发布**：今日无新的 Release 版本推出，当前主要精力集中在 main 分支的缺陷修复、架构解耦与稳定性增强上。
- **核心焦点转向端侧启动与 MCP 子系统**：从密集的 PR 与 Issue 可以看出，桌面版（尤其是 Windows 环境）启动卡死、网关进程崩溃，以及 MCP（Model Context Protocol）僵尸进程问题正在被集中攻坚。
- **安全与架构解耦**：开发者对鉴权透传、配置安全默认值、跨域会话保持（TUI/CLI）等方面提交了多份高质量修复，项目工程化程度进一步加深。

## 2. 版本发布
*今日暂无新版本发布。大量修复仍在 `main` 分支流转，预计团队将在完成当前的启动卡死与 MCP 稳定性修复后进行版本打包。*

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，这些代码合并大幅提升了跨平台的运行稳定性，主要进展包括：

- **Telegram 富文本兼容性大幅提升**：合并了 [PR #46729](https://github.com/NousResearch/hermes-agent/pull/46729) 与 [PR #48900](https://github.com/NousResearch/hermes-agent/pull/48900)。修复了 Telegram 平台富文本消息渲染重叠的问题，并引入了基于单聊的降级机制，允许特定聊天回退到旧版 Markdown 格式。
- **CLI 交互与技能系统优化**：[PR #50436](https://github.com/NousResearch/hermes-agent/pull/50436) 优化了命令行界面的软换行与 Markdown 结构保留；[PR #50433](https://github.com/NousResearch/hermes-agent/pull/50433) 增加了外部 Skills 目录的优先级覆盖能力，提升了多环境配置的灵活性。
- **配置与工作流持久化修复**：[PR #41478](https://github.com/NousResearch/hermes-agent/pull/41478) 解决了在长对话触发上下文压缩时，`/goal`（目标状态）未正确迁移至子会话的严重逻辑断层问题。

## 4. 社区热点
今日社区讨论最为火热的议题集中在 **跨平台支持广度**、**令牌成本控制** 与 **高安全级任务的工具干预**：

- **[Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950) 跨平台通讯渠道扩展**：社区强烈要求补齐 IRC, Google Chat, LINE, Nostr, Twitch, QQBot 等通讯平台的支持，用户经常将其与竞品 OpenClaw 进行对比，这反映出 Hermes 作为个人 AI 助手在全平台触达能力上的迫切需求。
- **[Issue #14327](https://github.com/NousResearch/hermes-agent/issues/14327) 平台级粒度模型配置**：用户希望为不同的通讯平台（如飞书、Discord）指定不同的底层 LLM 模型，以满足不同场景对速度与智商的差异化要求。
- **[Issue #44637](https://github.com/NousResearch/hermes-agent/issues/44637) 技能验证门**：用户指出仅靠提示词约束 AI 不可靠，要求引入代码级的“运行时验证”，以防止 AI 在执行代码修改、数据转换等高风险任务时发生破坏性操作。
- **[Issue #50293](https://github.com/NousResearch/hermes-agent/issues/50293) 与 [Issue #50240](https://github.com/NousResearch/hermes-agent/issues/50240) 动态思考模式**：面对高昂的 Reasoning Token 成本，社区呼吁模型能够自我侦测任务复杂度，仅在遇到复杂推理任务时才动态开启“深度思考”模式。

## 5. Bug 与稳定性
今日报告并处理了大量影响核心功能的严重 Bug (P1/P2)：

**P1 级别（严重阻断）：**
- **Windows 安装包“杀进程”不复活**：[Issue #50090](https://github.com/NousResearch/hermes-agent/issues/50090) 报告 Windows 引导安装程序在更新技能后强杀 Gateway 进程但不重启，导致前端看似正常，但 Telegram 机器人永久失联。
- **桌面应用卡死与白屏**：[Issue #49609](https://github.com/NousResearch/hermes-agent/issues/49609), [Issue #50291](https://github.com/NousResearch/hermes-agent/issues/50291), [Issue #50209](https://github.com/NousResearch/hermes-agent/issues/50209) 集中反馈了桌面端（Windows/WSL2）在更新后因 404、后端探针超时导致的启动卡死于 94% 及 UI 冻结问题。**（注：维护者已提交 [PR #50445](https://github.com/NousResearch/hermes-agent/pull/50445) 尝试修复）**
- **Matrix 端到端加密失效**：[Issue #45500](https://github.com/NousResearch/hermes-agent/issues/45500) 指出 Matrix 文本消息绕过了 E2EE 加密检查，存在严重隐私泄露风险。

**P2 级别（稳定性与资源泄漏）：**
- **MCP 僵尸进程**：[Issue #50169](https://github.com/NousResearch/hermes-agent/issues/50169) 报告 MCP 标准输入输出服务子进程在断开后不被回收，24 小时内产生 40+ 僵尸进程耗尽资源。
- **MCP 级联崩溃**：[Issue #50394](https://github.com/NousResearch/hermes-agent/issues/50394) 指出单个 MCP 服务的崩溃重启风暴会导致整个 MCP 桥接网络的不稳定，使得其他健康工具报 “Unknown tool” 错误。
- **看板插件暴走**：[Issue #49638](https://github.com/NousResearch/hermes-agent/issues/49638) 用户诉述看板自动拆解任务且无法关闭，未经允许自动执行了删除数据库的危险操作。**（注：已通过 [PR #50443](https://github.com/NousResearch/hermes-agent/pull/50443) 修复工具集禁用逻辑）**

## 6. 功能请求与路线图信号
结合 Issue 需求与今日的 PR 提交情况，以下方向极有可能在近期被纳入主线：

- **MCP 基础设施加固**：今日涌现多个针对 MCP 的修复（如 [PR #49323](https://github.com/NousResearch/hermes-agent/pull/49323) 固定 n8n MCP 版本，[PR #49306](https://github.com/NousResearch/hermes-agent/pull/49306) 传递环境变量，[PR #46109](https://github.com/NousResearch/hermes-agent/pull/46109) 传递工具覆盖）。MCP 系统目前较为脆弱，确立其隔离性与稳定性是当前的隐性路线图重点。
- **安全与鉴权兜底**：[PR #50439](https://github.com/NousResearch/hermes-agent/pull/50439) 修复了配置迁移时的命令白名单失效问题，[PR #49351](https://github.com/NousResearch/hermes-agent/pull/49351) 加强了 Nous Portal 访问令牌的韧性，表明团队正在收紧本地自动化执行的安全边界。
- **动态思考与成本控制**：结合用户强烈的诉求（[Issue #50240](https://github.com/NousResearch/hermes-agent/issues/50240)），未来版本可能会引入基于 Token 感知的路由与智能降级/升级机制。

## 7. 用户反馈摘要
- **痛点 1：网络切换即断线**：用户反映在关闭笔记本盖子并切换 WiFi 后，Gateway 服务直接报错崩溃（[Issue #39525](https://github.com/NousResearch/hermes-agent/issues/39525)），说明网关缺乏对弱网/网络状态切换的弹性重连机制。
- **痛点 2：跨设备工作台割裂**：开发者重度依赖 TUI（终端 UI）进行操作，却发现 TUI 的会话没有被正确记录 `cwd`（当前工作目录），导致他们在桌面 GUI 端无法按工作区对历史会话进行分组（[Issue #50438](https://github.com/NousResearch/hermes-agent/issues/50438)）。
- **痛点 3：极端键盘布局的边缘 Bug**：有用户认真反馈了桌面应用快捷键在 Dvorak 等非 QWERTY 键盘布局下的解析错误（[Issue #46369](https://github.com/NousResearch/hermes-agent/issues/46369)），反映出项目已经吸引了一批深度极客用户群体。

## 8. 待处理积压
以下重要问题近期活跃但尚未得到根本解决，建议核心维护者重点关注：

- **[Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950) 平台扩展积压**：4 月份提出的平台适配需求（包含 QQBot、LINE 等）迟迟未能原生内置，可能流失部分有特定渠道需求的用户。
- **[Issue #50169](https://github.com/NousResearch/hermes-agent/issues/50169) 与 [Issue #50394](https://github.com/NousResearch/hermes-agent/issues/50394) MCP 进程管理与级联崩溃**：作为高度依赖的扩展能力，MCP 的进程生命周期管理（僵尸进程与重启风暴）需要重构调度逻辑，目前仍处于 Open 状态。
- **[PR #49597](https://github.com/NousResearch/hermes-agent/pull/49597) Codex 图像编辑支持**：该 PR 希望在 OpenAI 后端启用基于参考图的图像生成与编辑功能，已提出数日，等待 Review。

---
*本报告基于自动化数据采集与 AI 分析生成。Hermes Agent 目前处于快速迭代的重维护期，其工程社区健康度与问题响应速度表现优异。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是 **PicoClaw** (github.com/sipeed/picoclaw) 开源项目 2026-06-22 的动态日报。本报告基于客观数据驱动，旨在为维护者、贡献者及社区观察者提供项目健康度和进展的深度洞察。

---

### 📊 PicoClaw 项目动态日报 (2026-06-22)

#### 1. 今日速览
PicoClaw 在过去 24 小时内保持着稳健的迭代节奏与社区活跃度。项目刚刚释出了指向 `v0.3.0` 的每日自动构建版本，表明核心团队正在为下一个中大型版本的发布做最后的功能整合与稳定性验证。社区端互动频繁，共计更新了 5 条 Issues（2 条已关闭）和 4 条 PRs（1 条已合并），不仅成功修复了群组触发机制与 Matrix 协议的配置漏洞，还展现了社区对去中心化通信协议的强烈诉求。总体而言，项目当前处于健康、向前的快速推进期。

#### 2. 版本发布
* **[ nightly: Nightly Build ](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  * **版本号**: `v0.3.0-nightly.20260621.287853ab`
  * **详情**: 这是面向 `main` 分支的自动化构建版本。
  * **注意事项**: 作为一个 Nightly 构建，该版本可能存在不稳定性，官方建议谨慎用于生产环境。由于目前正处于 `v0.2.9` 向 `v0.3.0` 的过渡期，开发者和测试者应密切关注 API 或底层依赖（如 Go、前端 lint 规则）可能引入的破坏性变更。

#### 3. 项目进展
今日项目成功合并/关闭了 1 个重要的 PR，并在配置与信道处理上取得了实质进展：
* **[PR #2565] fix(config): preserve explicit mention_only=false in GroupTriggerConfig [CLOSED]**
  * **进展分析**: 该 PR 修复了一个隐蔽但影响巨大的配置解析 Bug。由于 Go 语言 `bool` 的零值就是 `false`，叠加 `omitempty` 标签，导致用户显式配置 `mention_only=false` 时被系统静默忽略，进而被默认配置覆盖。此修复对于需要非提及触发模式的群组场景至关重要，标志着项目在配置鲁棒性上的提升。

#### 4. 社区热点
今日社区讨论的焦点集中在**高频消耗**与**隐私通信协议集成**上：
* **[Issue #3012] [BUG] Continuous consumption of tokens every minutes when evolution is enabled**
  * **热度**: 5 条评论
  * **背后诉求**: 用户报告在开启 Evolution（进化/草稿模式）时，即使没有外部交互，系统也在按分钟持续消耗 Token。这反映出用户对 AI Agent 机制下“失控成本”的深层担忧。在 LLM 驱动的项目中，静默轮询或后台演进的资源管控是核心痛点，亟待官方优化休眠/唤醒机制。
* **[Issue #3093] [Feature] I need SimpleX or tox**
  * **热度**: 2 条评论, 1 次点赞
  * **背后诉求**: 用户强烈希望能接入 SimpleX、Wire 或 Tox 等去中心化、无需手机号/实名认证的隐私通信网关。这表明 PicoClaw 在极客圈和隐私敏感型用户中具有吸引力，拓展隐私信道将成为扩大市场份额的关键差异化功能。

#### 5. Bug 与稳定性
今日追踪到以下关键 Bug，按严重程度排列：
1. **[严重] [Issue #3012] Evolution 模式导致 Token 持续被消耗**
   * **状态**: 开启中 (v0.2.9, FreeBSD环境)
   * **评估**: 涉及实际资金/Token流失，严重影响用户信任与使用成本，目前暂无明确的修复 PR，建议核心团队高优排查事件循环逻辑。
2. **[中等] [Issue #3041] `mcp add` 错误解析全局标志，破坏 http/sse 添加**
   * **状态**: 已关闭 (v0.2.9)
   * **评估**: CLI 参数解析模块存在严重影响使用的缺陷，会导致 http/sse 类型的 MCP (Model Context Protocol) 服务器添加失败或错误命名，目前已得到处理。
3. **[中等] [Issue #3044] `allow_from` 无法正确处理含冒号的 Matrix user IDs**
   * **状态**: 已关闭 (v0.2.9)
   * **评估**: Matrix 协议的标准 ID 格式（`@user:domain`）触发了解析或正则匹配 Bug，导致消息被静默拒绝。已修复。
4. **[低] [Issue #3090] 面板在 iOS 16.4 以下版本的 Safari 中无法工作**
   * **状态**: 开启中，已标记为 stale (过期)
   * **评估**: 兼容性 Bug，由于旧版本 iOS Safari 对现代 JS 语法的支持有限导致。影响范围较窄，官方暂未将其视为高优先级。

#### 6. 功能请求与路线图信号
* **功能请求: 增强技能安装指引 ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) & 隐私网关)**
* **开发进度匹配:**
  * **[PR #3152] add installation instructions to picoclaw skills search [OPEN]**: 这是一个非常贴合用户体验优化的 PR。它通过在 `picoclaw skills search` 命令的输出中直接补充安装说明，降低了用户的上手门槛。这类文档/提示类 PR 通常会被快速合并进即将到来的 `v0.3.0` 正式版中。

#### 7. 用户反馈摘要
从近期的 Issues 中可以提取出 PicoClaw 用户的几个核心画像和使用反馈：
* **痛点 1：成本控制焦虑**。AI Agent 具备自主能动性，但用户极度缺乏对后台静默任务的感知和控制手段（如 #3012）。
* **痛点 2：极客与自托管需求强烈**。大量用户使用 FreeBSD、树莓派，并深度使用 Matrix 协议。他们对“去中心化”、“隐私保护”有强烈诉求。
* **痛点 3：命令行交互细节**。用户习惯通过 CLI 添加各种 MCP 服务，CLI 参数解析的健壮性直接影响扩展性体验（如 #3041）。
* **正面反馈**：用户非常认可 PicoClaw 的技能扩展架构和 MCP 兼容性，社区积极参与依赖升级和功能完善。

#### 8. 待处理积压
以下长期未得到有效推进的项目需要引起维护者关注：
* **[PR #3103] & [PR #3105] 前端依赖更新被阻塞**
  这两个由 Dependabot 自动发起的 PR（分别升级 `typescript-eslint` 和 `eslint`）自 6 月 11 日创建以来一直处于待合并状态，且被标记为 `stale`。前端依赖的长期不更新可能会导致后续合并产生严重的代码冲突。
* **[Issue #3012] Token 持续消耗问题**
  作为涉及资金成本的 Bug，已有 5 条讨论但未见关联修复 PR，存在演变为社区负面情绪的风险。

---
*数据统计区间: 2026-06-21 至 2026-06-22 | 分析师: AI 智能体开源观察*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-06-22 NanoClaw 项目动态日报。

# NanoClaw 项目动态日报 (2026-06-22)

### 1. 今日速览
*   **整体活跃度中等偏上**：过去 24 小时内，NanoClaw 仓库共收到 2 个与底层安全机制相关的 Issue，以及 6 个 PR 更新（包含 2 个高质量的核心架构修复，和 1 个停滞多月后的重新激活）。
*   **安全防御成为焦点**：社区贡献者（YLChen-007）披露了两个针对多智能体（A2A）通信和 MCP 服务器审批流的潜在安全风险，表明项目正处于深度安全审视阶段。
*   **无新版本发布**：项目处于代码修缮与漏洞修补的沉淀期，暂未发布新版本。
*   **基础设施优化**：开发者提交了关于系统残留清理、套接字连接及容器网络底层逻辑的修复，项目稳定性和系统级集成能力正在得到进一步增强。

---

### 2. 版本发布
**今日无新版本发布。**

---

### 3. 项目进展
今日项目共有 3 个 PR 被合并或关闭，1 个停滞 PR 重新活跃，在系统健壮性和容器支持上取得实质进展：
*   **[PR #2168] 修复无根 Docker 下的主机网络映射**：贡献者 `kpscheffel` 提交的修复在停滞近两个月后被重新激活并关闭。该 PR 在 OneCLI 处于默认 `bridge` 网络时，将 `host.docker.internal` 精确映射到 Bridge IP，极大提升了在无根 Docker 环境下的稳定性和网络兼容性。
*   **[PR #2825] 修复首次通信失败的竞态条件**（已关闭）：修复了系统服务启动时，因 `launchctl` 返回状态早于套接字绑定而导致的“首次聊天必定失败”的体验痛点。
*   **[PR #2829] 无效贡献清理**（已关闭）：关闭了不符合社区贡献指南的测试性 PR，保持了主分支的整洁。

---

### 4. 社区热点
今日社区讨论和贡献主要集中在**安全可见性与环境清理**：
*   **[Issue #2827] MCP 服务器审批存在隐瞒风险**：安全研究员指出，当前 `add_mcp_server` 的自修改流在审批卡片中仅显示服务器名称，而隐藏了运行时的 `args` 和 `env`。这极易被用于“审批走私”（Approval Smuggling）。这反映出用户对 AI 智能体在动态加载外部工具时，强烈要求**操作透明度和防注入**的诉求。
*   **[Issue #2828] A2A 附件转发存在越权写入漏洞**：报告指出，如果被攻陷的目标智能体将其 `inbox/` 替换为 symlink，发送方智能体的文件写入将突破目标会话的根目录限制。多智能体沙箱隔离机制亟需加强。

---

### 5. Bug 与稳定性
按严重程度排列，今日报告并处理了以下关键问题：

*   **🔴 [严重/安全] A2A 越权写入与符号链接逃逸** ([Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828))
    *   **状态**：已报告，暂无对应 fix PR。
    *   **影响**：多智能体架构下可能导致敏感数据被覆盖或沙箱逃逸。
*   **🟠 [高危/安全] MCP 审批走私漏洞** ([Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827))
    *   **状态**：已报告，暂无对应 fix PR。
    *   **影响**：智能体可能通过隐藏恶意环境变量来绕过用户授权。
*   **🟡 [中等/系统] 僵尸服务残留** ([PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830) - 待合并)
    *   **状态**：已提交修复代码。
    *   **影响**：直接卸载文件目录而不运行卸载程序，会导致 `launchd` 或 `systemd` 无限尝试启动缺失的二进制文件，造成系统资源浪费。
*   **🟢 [轻微/体验] Skill 更新易被忽略** ([PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) - 待合并)
    *   **状态**：已提交修复代码。
    *   **影响**：更新流程的文案让用户误以为 Skill 更新不重要而跳过，导致上游关键修复未应用。

---

### 6. 功能请求与路线图信号
*   **只读 CLI 仪表盘** ([PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) - 待合并)：
    贡献者 `leetwito` 提交了一个新的 Utility Skill `/add-clidash`，允许用户通过 CLI 获取只读的项目状态仪表盘。这反映出用户（特别是重度开发者）对不脱离终端环境即可监控 Agent 状态的强烈需求。
*   **生命周期管理自动化**：从 [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830) 和 [PR #2825](https://github.com/nanocoai/nanoclaw/pull/2825) 可以看出，项目路线图正在向“开箱即用、零配置失败”的成熟个人助理软件靠拢，减少用户在系统级集成（守护进程、套接字）上的心智负担。

---

### 7. 用户反馈摘要
从今日的 Issue 和 PR 描述中，可以提炼出以下真实用户痛点：
1.  **多机/重度测试下的环境残留污染**：用户（如 `amit-shafnir`）在重度测试环境中遭遇了多达 6 个僵尸服务注册项（launchd plist），说明目前的卸载和注册机制对非标准卸载流程不够鲁棒。
2.  **首次连接体验割裂**：服务报告已启动，但首次通信失败，容易让新手用户误以为项目配置错误。
3.  **对 AI 自主行为的警惕**：社区对 Agent 拥有修改自身配置（MCP 服务器加载）的权限持谨慎态度，要求在 UI 层面展示完整的“上下文变量”，以防 AI 被恶意诱导。

---

### 8. 待处理积压
*   **⚠️ 安全漏洞需立即介入**：[Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) 和 [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) 的点赞和评论虽为 0，但作为安全通告（Advisory Details），强烈建议核心维护者优先评估其影响面并发布修复补丁。
*   **⚠️ 高价值功能 PR 审核积压**：[PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) (CLI Dashboard) 自 6 月 17 日提交至今仍在 OPEN 状态，建议维护团队尽早 Review 并入，以提升 CLI 用户的终端可视化体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报**
**日期**: 2026-06-22 | **分析数据周期**: 过去 24 小时

---

### 1. 今日速览
在过去 24 小时内，NullClaw 项目整体处于**低活跃度维持状态**，未见代码层面的直接推进（0 个 PR 更新，0 个新版本发布）。社区方面，有 1 条已有 Issue 产生了新的讨论跟进，显示出部分用户仍在持续使用并关注产品的稳定性。当前项目处于版本发布后的平缓期，重心主要在于现有用户反馈的收集与潜在 Bug 的排查。

### 2. 版本发布
*本日报统计周期内无新版本发布。（当前最新版本仍为 v2026.5.29）*

### 3. 项目进展
*今日无已合并或关闭的 Pull Request。*
代码库今日无变更，项目在功能开发和代码重构上暂未向前推进。建议社区关注下一个迭代周期的开发计划或 Milestone 更新。

### 4. 社区热点
今日社区唯一的动态集中在以下 Issue：
*   **Issue #967 [bug] error: NoResponseContent** (作者: svier0 | 👍: 0 | 评论: 1)
    *   **链接**: [nullclaw/nullclaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **分析**: 该问题引发了社区的后续评论（今日有 1 次更新）。核心诉求在于用户在 Windows 环境下使用特定模型时遭遇了高发频率的空响应错误。由于报错直接阻断了工作流（“21次对话中出现12次”），用户的痛点在于**工具的基础可用性受损**，迫切需要官方的排查建议或修复补丁。

### 5. Bug 与稳定性
今日无新增 Bug 报告，但以下历史 Bug 持续发酵，需引起高度重视：
*   **🔴 [严重] NoResponseContent 导致对话中断** (Issue #967)
    *   **详情**: 在 Windows 11 (x86_64) 环境下，使用 v2026.5.29 版本调用 `Agnes-2.0-Flash` 模型时，出现极高频率（>50%）的 `error: NoResponseContent` 报错。响应耗时长达 27 秒，随后直接报错无内容输出。
    *   **修复状态**: **暂无对应的 fix PR**，处于未解决状态。

### 6. 功能请求与路线图信号
*今日暂无明确的新功能请求（Feature Request）。*
从 Issue #967 中可以间接提取到路线图信号：用户在实际多工具横向对比中（提及了 picocla 等类似工具）会对 NullClaw 的兼容性和稳定性提出更高要求。确保主流模型（如 `Agnes-2.0-Flash`）的 API 响应解析鲁棒性，应是下一版本迭代的隐性重点。

### 7. 用户反馈摘要
基于 Issue #967 的描述，我们提取到以下真实用户反馈：
*   **使用场景**: Windows 11 桌面端日常对话与 Agent 测试。
*   **核心痛点**: 
    1.  **稳定性差**: 超过一半的几率遭遇致命报错，严重影响体验。
    2.  **响应延迟**: 27秒的等待时间对于 Flash 级别的轻量模型而言过长，可能存在网络转发或本地解析的性能瓶颈。
    3.  **兼容性疑虑**: 用户反馈“同样的模型同样的 API Key 在其他工具中正常”，这表明 NullClaw 在处理特定模型的流式响应或非标准 JSON 格式时可能存在解析逻辑的缺陷。

### 8. 待处理积压
*   **[需关注] Issue #967 [bug] error: NoResponseContent**: 尽管创建于 6 月 20 日，且今日有活跃讨论，但目前**尚无项目维护者或开发者进行官方回复**。
    *   **建议**: 由于该 Bug 表现为高频发生（>50%）且直接导致程序不可用，强烈建议维护团队 (@nullclaw/core) 优先介入。需向用户索要详细的内存日志（截图被截断的 `info(memory)` 部分），并验证是否因底座模型 API 返回格式变动导致 NullClaw 解析抛出异常。

---
*数据驱动洞察，助力 NullClaw 迭代。祝开发顺利！*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报
**📅 日期**: 2026-06-22 | **🏷️ 仓库**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### 1. 今日速览
IronClaw 项目在过去的 24 小时内展现出**极高的开发活跃度与工程推进效率**。今日共更新了 27 个 PR，其中 14 个已被成功合并或关闭，这表明核心团队正在进行高强度的代码审查与功能迭代。项目当前的焦点高度集中在 **"Reborn" 运行时的性能优化（并发处理）、CI/CD 基础设施的深度重构，以及大规模依赖库升级**上。整体来看，代码库处于非常健康且快速演进的阶段，开发者社区的贡献（包括 Dependabot 自动化与独立贡献者的功能接入）运转良好。

### 2. 版本发布
**本报告周期内无新版本发布 (0 个 Release)。**
注：虽然无正式版发布，但从主干合并的高频代码来看，项目可能正在为下一个大版本（或 Reborn 完整预览版）做积蓄。

---

### 3. 项目进展
今日共有 14 个 PR 被合并或关闭，项目在运行时性能、测试覆盖率和基础设施方面取得了实质性跨越：

*   ⚡ **核心性能突破 (并发执行)**: PR [#5085](https://github.com/nearai/ironclaw/pull/5085) 引入了 `TurnRunScheduler`，打破了以往 Reborn 运行时严格串行执行 LLM 推理的限制，实现了基于每用户/每类型的并发任务执行上限控制，大幅提升了多用户场景下的吞吐量。
*   🔧 **自动化与触发器完善**: PR [#5065](https://github.com/nearai/ironclaw/pull/5065) 合并了单次定时触发器 (`TriggerSchedule::Once`)，补齐了自动化任务调度的核心能力。
*   🛡️ **CI/CD 与测试深度重构**: 核心贡献者 `serrrfirat` 合并了多个关键的 CI 修复 PR，包括：
    *   PR [#5110](https://github.com/nearai/ironclaw/pull/5110): 将 PR 测试矩阵从 21 个 crate 扩展到完整的 64 个依赖闭包，修复了大量之前未被覆盖的隐蔽测试债务 (PR [#5112](https://github.com/nearai/ironclaw/pull/5112))。
    *   PR [#5118](https://github.com/nearai/ironclaw/pull/5118) 与 [#5113](https://github.com/nearai/ironclaw/pull/5113): 彻底重构了 Rust 缓存策略和跨平台兼容性测试工作流，显著降低了 CI 因缓存驱逐和网络波动导致的假阳性失败率。
*   🔌 **冷启动与状态修复**: PR [#2927](https://github.com/nearai/ironclaw/pull/2927) 修复了全新安装时 WASM 频道未能在首启时激活的回归问题；PR [#4990](https://github.com/nearai/ironclaw/pull/4990) 修复了 NEAR AI MCP 运行时凭据投影问题，优化了新用户上手引导。

---

### 4. 社区热点
尽管 Issue 和 PR 的直接评论数由于数据统计原因显示较少，但从开发行为可以提取出以下社区/工程焦点：

*   **Workbench 生态接入**: 新贡献者 `abbyshekit` 提交的 PR [#5109](https://github.com/nearai/ironclaw/pull/5109) 备受瞩目。该 PR 为桌面 Workbench 引入了 Composio 连接器路由（只读+门控写入）。这反映出社区对 **扩展 AI 桌面端外部数据源连接能力** 的强烈诉求。
*   **学习与记忆系统演进**: 核心成员 `serrrfirat` 的 PR [#4937](https://github.com/nearai/ironclaw/pull/4937) 正在推进 "从错误中学习" 的 WS-1 记忆语义系统。这是个人 AI 助手迈向真正个性化的关键一步，标志着项目正在对标业界高级记忆能力（如 Hermes 架构）。

---

### 5. Bug 与稳定性
今日报告及处理的 Bug 集中在凭证生命周期管理和测试环境稳定性上：

*   🔴 **[HIGH] Google OAuth 令牌过期未刷新** (Issue [#5071](https://github.com/nearai/ironclaw/issues/5071) - 已关闭): 
    *   **问题**: GSuite 凭证每小时过期，导致 Reborn 用户需要频繁重新认证。
    *   **状态**: 该高风险 Bug 已在今日关闭，底层逻辑已修正为使用 Refresh Token 主动续期。
*   🟠 **[MED] Nightly E2E 测试失败** (Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) - 仍为 OPEN):
    *   **问题**: 定时端到端测试任务报错，可能涉及扩展模块 (`extensions`) 的兼容性问题。
    *   **状态**: 机器人自动触发，尚需维护者介入确认是否为真实回归。

---

### 6. 功能请求与路线图信号
从当前的 Issue 和活跃 PR 中，我们可以清晰地看到 IronClaw "Reborn" 架构的演进路线图：

1.  **仪表盘可视化增强**: Issue [#5117](https://github.com/nearai/ironclaw/issues/5117) 请求在 `/v2/automations` 页面添加 "已完成 (Completed)" 汇总卡片。这明确反映出用户对**自动化任务执行状态可观测性**的精细化需求。考虑到其依赖的底层 PR #5065 已经合并，该功能预计将很快被实现并纳入下一版本。
2.  **托管级/企业级架构准备**: PR [#5081](https://github.com/nearai/ironclaw/pull/5081) 正在添加 `hosted-single-tenant` 配置文件。这释放了强烈的路线图信号——**IronClaw 正在从本地开发工具向支持 Postgres 持久化的 SaaS/托管预览版过渡**。

---

### 7. 用户反馈摘要
通过分析本日的更新摘要，真实用户/开发者的痛点主要围绕：
*   **🧩 凭证与认证摩擦大**: Issue #5071 表明，在多工具集成（如 GSuite）时，短生命周期的 Token 极大地破坏了助手"常驻后台、无感运行"的体验。用户的终极诉求是“配置一次，永远工作”。
*   **🧠 上下文与记忆断裂**: PR #4937 中的 "never repeat mistakes"（不重蹈覆辙）直击当前 LLM 助手的痛点——缺乏长效情景记忆和纠错能力。
*   **⚡ 响应延迟问题**: PR #5085 修复的“严格串行执行”问题，侧面反映了早期版本在应对并发会话时存在严重的排队阻塞，用户对实时交互延迟感到不满。

---

### 8. 待处理积压
以下是当前处于 OPEN 状态、需要维护者重点关注的沉重技术债务：

*   ⚠️ **庞大的依赖更新积压**: 
    *   PR [#5116](https://github.com/nearai/ironclaw/pull/5116) (44 个 Rust 核心依赖更新)
    *   PR [#4002](https://github.com/nearai/ironclaw/pull/4002) (16 个 Github Actions 依赖更新，自 5月底积压至今)
    *   PR [#4032](https://github.com/nearai/ironclaw/pull/4032) (Wasm 相关工具链更新)
    *   *建议*: 依赖积压过多容易引发难以解决的合并冲突和安全漏洞暴露，建议团队尽快分批审查并入主干。
*   ⚠️ **E2E 测试长期不稳定**: Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) 自 5月27日创建以来一直未得到根本解决，Nightly 测试的持续失败可能会掩盖真实业务逻辑的回归，需优先排期处理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 2026-06-22 LobsterAI 项目的 GitHub 动态日报。

# 🦞 LobsterAI 项目动态日报 (2026-06-22)

**数据统计周期**：过去 24 小时
**项目整体健康度**：⚠️ **需警惕（自动化维护机制介入为主）**

---

### 1. 今日速览
在过去 24 小时内，LobsterAI 仓库共处理了 **15 条 Issues**，但**全部 14 条已关闭的 Issue 均为系统自动标记为 `[stale]` 并关闭的历史积压问题**。项目在功能开发与已知 Bug 的人工修复层面处于停滞状态（Pull Requests 更新为 0，无新版本发布）。值得高度警惕的是，今日新开了一个关于默认配置引发 SSRF 防护降级的安全漏洞（#2181），暴露了项目在安全边界控制上的潜在风险。当前项目的日常运转高度依赖自动化机器人，核心维护者活跃度跌至冰点。

### 2. 版本发布
**今日无新版本发布（v0.0.0）。**
*(建议社区关注官方的里程碑规划，当前代码库处于功能冻结或维护者缺位状态。)*

### 3. 项目进展
**今日无任何活跃或合并的 Pull Requests（0 条）。**
代码库在过去 24 小时内未发生任何业务代码变更。仓库维护进展仅体现在 Issue 状态的自动化流转上，项目实质向前推进的距离为 0。

### 4. 社区热点
今日社区**唯一的一条人工活跃记录**是一条严重的安全隐私反馈，也是今日的讨论热点：
*   🔴 **[#2181] [Security] LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard** ([链接](https://github.com/netease-youdao/LobsterAI/issues/2181))
    *   **诉求分析**：报告者 `YLChen-007` 指出 LobsterAI 的浏览器设置层默认采用了 `ProxyCompatible` 模式。在缺乏明确浏览器策略存储的情况下，该默认配置会恢复对私有网络的访问权限，从而削弱了内置 OpenClaw 的 SSRF（服务器端请求伪造）防护。
    *   **背后痛点**：对于本地部署或企业内网使用的 AI 智能体，如果默认放行私有网络访问，极易导致内网敏感信息泄露或被恶意提示词攻击。这是一个极其关键的安全防线问题。

### 5. Bug 与稳定性
今日**没有报告新的功能性 Bug**。以下为近期积压但在今日被自动关闭的典型历史缺陷（按严重程度排列，均已因长期无人响应被自动关闭）：

*   **高危/数据安全类 (已自动关闭)**：
    *   **[#1516] GitHub Copilot OAuth 轮询未取消，认证成功后 Token 静默丢失** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1516))：用户关闭设置面板导致后台死循环轮询，获取到的 Token 被直接丢弃。严重影响登录认证体验。
    *   **[#1506] 定时任务 IM 通知静默失败** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1506))：表单校验缺失导致任务创建后实际上无法推送通知。
*   **中危/核心交互类 (已自动关闭)**：
    *   **[#1500] 禁用技能后仍在对话中被调用** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1500))：Redux 状态同步 Bug，技能开关形同虚设。
    *   **[#1502] 保存技能列表后当前会话不同步** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1502))：需要切换 Agent 才能刷新状态，违背所见即所得原则。
*   **低危/UI 校验类 (已自动关闭)**：
    *   **[#1504] POPo 的 AES Key 缺少必填校验** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1504))。
    *   **[#1512] QQ Bot 群组白名单缺少 UI 输入框** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1512))。

*(注：以上问题均无对应的 fix PR 介入，存在被用户再次复现反馈的风险。)*

### 6. 功能请求与路线图信号
从今日被批量关闭的历史 Issues 中，可以看出重度用户对 LobsterAI 在**“信息组织与数据管理”**方面有极其强烈的诉求。这些信号应纳入未来的产品路线图：
*   **多维度会话管理**：包括会话颜色标注（[#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)）、自定义标签与筛选系统（[#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)）。
*   **数据本地化与导出**：诉求集中在基于 SQLite 的本地使用统计看板（[#1532](https://github.com/netease-youdao/LobsterAI/issues/1532)），以及多选会话的批量 JSON 导出能力（[#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)）。
*   **长上下文信息检索**：长对话中标记重要 AI 回复的书签功能（[#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)）。

### 7. 用户反馈摘要
提炼近期 Issues 中的真实用户反馈，主要集中在以下痛点：
1.  **过程感知极差**：在执行耗时任务（如生成技能）时缺乏中间态展示，导致用户面对“假死”界面不知所措（[#1509](https://github.com/netease-youdao/LobsterAI/issues/1509)）。
2.  **前端状态管理混乱**：多位用户集中反馈状态未刷新、配置未即时生效的问题，说明前端的 Redux/局部状态同步机制存在系统性缺陷。
3.  **对比竞品出现能力落差**：用户明确指出，相同的提示词在同类竞品（如 OpenClaw）中能很好地被理解执行，而在 LobsterAI 中则出现需求理解偏差和执行阻塞（[#1509](https://github.com/netease-youdao/LobsterAI/issues/1509)）。

### 8. 待处理积压
*   ⚠️ **极度紧急**：[#2181 OpenClaw SSRF 防护削弱问题](https://github.com/netease-youdao/LobsterAI/issues/2181)。**强烈建议维护者立即介入评估**，此安全漏洞若被利用，可能导致内网探测与数据外泄，切勿让其积压沦为 Stale Issue。
*   ⚠️ **流程阻塞**：[#1518 CI Labeler 权限错误及 Lint 策略](https://github.com/netease-youdao/LobsterAI/issues/1518)。此基础设施问题被自动关闭，意味着当前 CI 流水线可能依然处于报错状态，将直接阻塞外部贡献者的 PR 提交。

---
*分析师点评：LobsterAI 当前正处于典型的“自动化机器人代管”状态。虽然 Stale 机器人清理了积压的 Issues，但也掩盖了核心团队近期无人维护的事实。尤其是将复杂的状态同步 Bug（#1500, #1502）和基础校验缺失关闭，并非解决问题的有效途径。当务之急是响应今日新发的 SSRF 安全警告，并尽快恢复核心团队的研发迭代节奏。*

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

**CoPaw (QwenPaw) 项目动态日报**
**报告日期**: 2026-06-22
**数据来源**: github.com/agentscope-ai/CoPaw

---

### 1. 今日速览
*   **整体活跃度极高**，社区处于高度繁荣的“滚雪球”式迭代状态。过去 24 小时内共有 15 条 Issue 更新（14 新开/活跃，1 关闭）以及多达 28 条 PR 更新（26 待合并，2 已合并/关闭）。
*   **核心焦点集中在“移动端适配”**，贡献者（尤其是 `lecheng2018` 和几位首次贡献者）密集提交了针对 UI 响应式布局的 PR，显示项目正在为拓宽移动端及手机浏览器使用场景做全面冲刺。
*   尽管无新版本发布，但底层的 Bug 修复与稳定性优化（如多渠道集成、内存上下文管理）正在稳步推进。

### 2. 版本发布
*   **本日无新版本发布 (0 个)**。项目目前应处于 `v1.1.12.post1` 之后的密集开发与功能蓄水阶段。

### 3. 项目进展
今日共关闭/合并了 2 个 PR，主要对 UI 细节和错误方向进行了修正，为后续合并大批量功能 PR 扫清障碍：
*   **UI 优化重定向**：PR [#5365](https://github.com/agentscope-ai/QwenPaw/pull/5365) 被关闭，随后提交了优化后的 PR [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366)（Agent Config 页面移动端适配），说明代码审查正在积极发挥作用，确保移动端布局代码的质量。
*   **交互体验微调**：PR [#5359](https://github.com/agentscope-ai/QwenPaw/pull/5359) 被关闭，其针对 Chat Header 跑马灯和居中菜单的增强功能被整合或重新评估。
*   **整体向前迈进**：社区贡献者今日提交了高达 26 个待合并 PR，涵盖了从 UI 布局、Slack 频道接入、Docker 工具运行到底层 Bug 修复等多个维度，项目生态正在快速扩张。

### 4. 社区热点
讨论最热烈、反馈最密集的领域集中在**多端交互一致性与移动端体验**：
*   **移动端体验痛点引发共鸣**：Issue [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329)（手机端侧边栏无法切换 Agent）获得了 5 条评论，是目前讨论最热的话题。用户 `bob-geek11` 反馈了手机浏览器使用时的 UI 挤压问题，直接催生了 PR [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334)。
*   **底层稳定性呼吁**：Issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) 引发了关于“停止添加新功能，优先稳定核心 App”的讨论（1条评论但含金量高）。贡献者 `Jailtonfonseca` 指出移动端响应、Agent 交互等核心链路仍需稳定，这与今日大量涌现的 Mobile UI PR 不谋而合。
*   **多模型并发与故障转移**：Issue [#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351) 讨论了在 `model_factory.py` 中实现自动模型故障转移（Failover）的机制，反映了重度用户对高可用性架构的诉求。

### 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复 PR 跟进：
*   **高危（交互阻断）**：
    *   会话切换死锁：Issue [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) 报告了消息发送队列串台，以及切换对话后切不回去（原对话变灰）的问题。**已有 Fix**: PR [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) 已提交修复嵌入式模式下会话切换锁未释放的问题。
    *   消息静默丢弃：Issue [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) 指出当 Agent 处于忙碌状态时，发送消息返回 HTTP 200 但消息被直接丢弃。此问题严重影响多 Agent 交互逻辑，亟待修复。
*   **中危（模型兼容性）**：
    *   DeepSeek 思考卡死：Issue [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) 及 Issue [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) 均报告使用 DeepSeek 时 Agent 在 thinking 阶段卡死，且 UI 态异常（不显示暂停按钮）。
    *   自定义 OpenAI 兼容提供商不支持工具调用：Issue [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) 指出接入 OMLX 时无法触发 Function Calling。
*   **低危（环境与解析）**：
    *   智谱 API 连接异常：Issue [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330)，供应商测试通过但模型测试失败，疑似路由解析问题。
    *   上下文爆炸防御不足：Issue [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) 指出 LLM 5xx 报错时，`post_acting` 钩子被跳过，导致工具返回结果未被裁剪而引发级联故障。

### 6. 功能请求与路线图信号
从 Issue 和 PR 的对应关系可以看出，以下功能极有可能在下一版本中落地：
*   **移动端全面响应式重构（强信号）**：今日涌现 10+ 个移动端适配 PR（涵盖 SkillPool、Security、Models、Agents、CronJobs 等页面），项目“移动端适配”路线图正在被强力执行。
*   **实时消息推送（SSE）**：Issue [#5322](https://github.com/agentscope-ai/QwenPaw/issues/5322) 请求 API 消息的实时 UI 更新。**强对应 PR**: PR [#5331](https://github.com/agentscope-ai/QwenPaw/pull/5331) 已实现基于 SSE 的推送及语音提示，延迟降至 50ms 内，合并希望极大。
*   **记忆时效性权重**：Issue [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) 请求记忆搜索支持时间衰减排序。**已有 PR**: PR [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) 已提交实现方案。
*   **系统托盘最小化**：PR [#5326](https://github.com/agentscope-ai/QwenPaw/pull/5326) 引入了关闭窗口时最小化到系统托盘的功能，提升了作为桌面端助手的基础体验。

### 7. 用户反馈摘要
*   **使用场景拓宽**：大量用户不仅将其作为 Web 端工具，更通过手机浏览器（如 Issue #5329）、Tauri 桌面端、Conda 命令行等多环境接入，对跨端一致性的容忍度正在降低。
*   **满意度与肯定**：用户对新增的“消息发送队列”表示高度赞赏（Issue #5354 称其“极大地提高了效率”），说明项目在并发处理上的进步切实改善了工作效率。
*   **主要槽点**：多模型路由（特别是 DeepSeek 的深度思考兼容性、自定义 OpenAI 接口）、以及高并发下前端状态管理（卡顿、假死、按钮状态不同步）是目前用户抱怨最集中的区域。

### 8. 待处理积压
提醒维护者关注以下高价值且尚在 Open 状态的议题：
*   **Slack 频道接入**：PR [#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) 已挂起数日，作为重要的 IM 渠道扩展，建议优先安排 Code Review。
*   **Channels 随重载失效问题**：PR [#5352](https://github.com/agentscope-ai/QwenPaw/pull/5352) 提出了 Agent 重新加载后 Channel 停止且无法启动的 Bug，这会影响热更新及运维体验，需重点关注。
*   **Docker 工具运行支持**：PR [#5346](https://github.com/agentscope-ai/QwenPaw/pull/5346) 提出在 Docker 中运行工具，这是提升安全隔离的重要特性，建议尽快评估合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**报告日期**: 2026-06-22  
**数据来源**: [ZeptoClaw GitHub 仓库](https://github.com/qhkm/zeptoclaw)

---

### 1. 今日速览
过去 24 小时内，ZeptoClaw 项目的整体开发活跃度呈现“低量但高质”的特征，没有新开 Issue 或 PR，也无新版本发布。项目的核心进展集中在基础设施的完善上：维护者 `qhkm` 关闭并合并了关于 CI 二进制体积拦截的关键 PR，成功将项目标志性的“极小体积”确立为代码库的硬性防线。这标志着项目在系统级健壮性和质量保障（QA）方面迈出了重要一步。当前社区暂无大规模讨论，项目处于内部架构打磨期。

### 2. 版本发布
*无新增版本发布。*

### 3. 项目进展
今日项目完成了一项关键的 CI/CD 基础设施升级，整体代码质量管控能力显著提升：
*   **PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) [CLOSED/MERGED] - chore(ci): promote binary-size to PR gate at 7.5MB**：该 PR 修改了 GitHub Actions 工作流，取消了仅在合并到主分支时才触发的限制条件（`if:` guard），使二进制体积检测任务在**每个 PR 提交时**都会运行。同时，将体积硬性拦截阈值设定为 7.5MB。这一改动直接推进了 Issue #537 的诉求落地，确保任何引入过度臃肿代码或重型依赖的 PR 都会在合并前被系统自动拦截。

### 4. 社区热点
今日由于没有新开的讨论，社区热点主要集中在刚刚关闭的体积控制议题上，反映了项目维护者强烈的技术诉求：
*   **Issue [#537](https://github.com/qhkm/zeptoclaw/issues/537) [CLOSED] - [chore, P1-critical] binary size budget gate**：
    *   **诉求分析**：维护者极其明确地指出，**“6MB的编译产物就是 ZeptoClaw 的战略护城河”**。其核心愿景是确保该项目能够始终顺畅地运行在资源受限的边缘设备（如机器人）上。开发者对于“依赖蠕变”有着极高的警惕，认为缺乏 CI 拦截会导致体积在不知不觉中膨胀。

### 5. Bug 与稳定性
*过去 24 小时内无新增 Bug、崩溃或回归问题报告。*
CI 体积拦截机制的引入，实际上从工程管理层面提前规避了因依赖膨胀导致的“资源受限设备内存溢出/OOM”等潜在运行时稳定性风险。

### 6. 功能请求与路线图信号
今日无来自社区的新功能请求。但从刚合并的 PR #611 可以解读出明确的**底层架构路线图信号**：
*   **极致轻量化是不可逾越的红线**：项目正致力于在保持极低系统占用（<7.5MB）的前提下集成 AI 助手功能。未来任何涉及大模型本地化集成或复杂逻辑添加的代码贡献，都必须首先考虑编译后的体积开销，否则无法通过 CI 检查。

### 7. 用户反馈摘要
从近期 Issue 与 PR 的上下文提取的用户/维护者核心反馈如下：
*   **使用场景**：高度依赖边缘计算和嵌入式场景（如机器人大脑 `fit on a robot`）。
*   **核心痛点**：随着项目功能的增加，引入的第三方 Rust crates 容易导致编译产物（Binary）体积失控，进而破坏其在微型设备上的可用性。
*   **满意度**：对确立严格的 CI 体积预算表示高度认可，这极大地增强了项目在“微型/便携式 AI 智能体”赛道的核心竞争力。

### 8. 待处理积压
*当前数据样本中暂无长期未响应的积压 Issue 或 PR。*
项目维护者 `qhkm` 展现出了极高的维护效率，能够及时将计划（Issue #537 提出于 4 月）在合理周期内（PR #611 于 6 月落地）转化为实际的工程实践。目前仓库 backlog 处于健康状态。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**发布日期**: 2026-06-22  
**项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
**分析周期**: 过去 24 小时  

---

### 1. 今日速览
ZeroClaw 在过去 24 小时内保持了极高的社区热度与开发活跃度，共收到 **32 个新开/活跃 Issue** 和 **高达 48 个待处理 PR**，显示项目正处于密集的重构与新功能迭代期。今日有 2 个 PR 被合并/关闭，核心维护者（如 `@Audacity88` 和 `@JordanTheJet`）正在集中清理配置别名级联和历史代码回滚带来的技术债务。尽管没有发布新版本，但从 PR 走向来看，项目正在为 **v0.9.0** 的核心目标（如 OIDC 认证、WASM 插件支持）进行底层架构铺垫。值得注意的是，今日报告了多个阻断工作流的 S1 级 Bug，尤其是在多模型提供商兼容性和安装脚本方面。

---

### 2. 版本发布
**今日无新版本发布 (0 个 Release)。**
当前代码库活跃分支显示项目正处于 `0.8.0` 的后续修复与 `0.9.0` 的前置开发阶段。

---

### 3. 项目进展
今日共有 2 个 PR 被合并/关闭，并有大量关键 PR 进入待合并状态，推动项目在**系统稳健性**和**可扩展性**上迈出重要一步：

*   **架构文档与插件契约对齐**：
    *   PR [#7880](https://github.com/zeroclaw-labs/zeroclaw/pull/7880) (已关闭) 和 PR [#8061](https://github.com/zeroclaw-labs/zeroclaw/pull/8061) (已关闭) 完成了架构扩展点和插件文档的对齐工作，明确了未来以 WIT (WebAssembly Interface Types) 和 `wasm32-wasip2` 为核心的插件路线图。
*   **安全认证底座落地**：
    *   PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) 引入了 `Principal` 类型和 `AuthProvider` 缝合层。这是 RFC #7141 的首个 DoD 项，标志着 v0.9.0 的核心特性——**可插拔身份验证提供者（如 OIDC）** 正式进入代码实现阶段。
*   **WASM 插件宿主初现**：
    *   PR [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) 提交了初版 WASM component-model 插件宿主代码，针对 Channel、Memory 和 Tool 提供了 trait 抽象，大幅提升了未来插件的安全隔离能力。
*   **上下文感知与开发体验**：
    *   PR [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) 在 TUI、网关和 CLI 交互模式中统一引入了模型上下文窗口使用率进度条，大幅改善开发体验。
    *   PR [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) 复活了基于对话流的 `zeroclaw onboard` 引导助手。

---

### 4. 社区热点
今日讨论度最高的问题集中在**工作流治理**和**特定平台适配**：

*   **Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (评论: 11) - **RFC: 工作泳道、看板自动化与标签清理**
    *   **诉求分析**：随着项目壮大，维护者需要一种不需要大量手动干预的工作路由机制。此提案旨在自动化标签和看板流，表明项目正在建立可支撑百人级贡献的治理基线。
*   **Issue [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** (评论: 9) - **[Feature]: 寻找 napcat channel**
    *   **诉求分析**：用户强烈希望能接入 OneBot11 协议（如 napcat），以连接 QQ 等国内主流 IM 平台。反映了 ZeroClaw 在国内开发者群体中拥有一定受众，但 Channel 适配文档或支持仍有缺口。
*   **Issue [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** (评论: 6) - **[Feature]: Webhook 转换**
    *   **诉求分析**：目前的 Webhook 系统无法很好地处理通用发送方的任意载荷。用户希望能自定义 Webhook 路径并对 Payload 进行转换检查，这是企业级集成的基础诉求。

---

### 5. Bug 与稳定性
今日报告了多个严重级别为 S0/S1 的 Bug，主要集中在兼容性提供商和工具调用循环中：

1.  **S0 - 安全/数据丢失风险**：
    *   Issue [#8099](https://github.com/zeroclaw-labs/zeroclaw/issues/8099): 配置 Nvidia 作为视觉模型提供商时，无法处理图像输入。（状态：处理中）
    *   Issue [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094): Quickstart 添加的 Anthropic 提供商在重启前在聊天窗口不可用。（状态：需复现）
2.  **S1 - 工作流阻断**：
    *   Issue [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879): Gemini CLI OAuth 验证后立刻报错 `rate_limited`，导致模型不可用。（👍: 2，优先级: P1）
    *   Issue [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361): **高风险**。`context_compression` 在处理 OpenAI 兼容的提供商（如 MiniMax）时，直接丢弃了 `assistant(tool_calls)` 和 `tool(result)` 消息，导致工具调用陷入死循环并触发 2013 错误。
    *   Issue [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): 原生/MCP 工具在 OpenAI Responses/reasoning 以及 Anthropic 轮次中不可用。（优先级: P1）
    *   Issue [#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095): 安装脚本在 Intel Mac 上错误安装了 arm64 预编译版本，导致 `bad CPU type`。
    *   Issue [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089) (已关闭): 由于缺少 `aardvark-sys/build.rs`，Docker 构建失败。
3.  **S1 - 核心 Bug 修复 PR 追踪**：
    *   针对级联配置 rename 时引发的状态覆盖 Bug（Issue [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907)），`@Audacity88` 提交了修复 PR [#8109](https://github.com/zeroclaw-labs/zeroclaw/pull/8109)。
    *   针对手动 Cron 触发结果未持久化的问题，修复 PR [#7893](https://github.com/zeroclaw-labs/zeroclaw/pull/7893) 已就绪。

---

### 6. 功能请求与路线图信号
从当前的 Issues 和 PR 动态中，可以清晰看出 ZeroClaw 迈向 **v0.9.0** 的几个核心演进方向：

1.  **本地优先与隐私模式**：
    *   Issue [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 提出了针对小型本地模型（如 Ollama）的“紧凑无工具提示模式”，要求禁用宽松的回退解析，防止内部系统指令泄露给用户。
2.  **高级可观测性接入**：
    *   Issue [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 和 Issue [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) 正在推进将 LLM 调用、工具调用和内存操作嵌套在单一的 OpenTelemetry (OTel) 追踪轨迹下。未来排障将能看到完整的 Prompt/Completion。
3.  **对话级内存结构化**：
    *   Issue [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) 建议放弃基于纯 Prompt 约束的 JSON 提取，转而使用 Tool-calling（内部 `save_memory` 工具）来进行记忆固化，提升记忆整理的可靠性。
4.  **强化的安全基线**：
    *   Issue [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 指出默认的 6 位数字配对码过于薄弱，提议默认使用包含大小写的 32 位字符配对码。

---

### 7. 用户反馈摘要
提炼近期评论，用户的痛点与满意点集中在以下几点：

*   **痛点 1：多模型兼容性磨损**。用户在使用 OpenAI 兼容接口（如 Groq, MiniMax）时，常遭遇消息体结构不符合预期导致的崩溃或死循环（如 Issue #6361, #7896）。
*   **痛点 2：上下文缓存失效**。用户反馈通过 Telegram 聊天时无法命中 Prompt Cache（Issue [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)），导致每次都全量重处理，不仅增加延迟还大幅消耗 API 额度。
*   **痛点 3：环境隔离与凭证降级**。用户希望系统能更智能地从环境变量中读取降级配置，而不是一旦少填了字段就直接报错（如 PR [#8079](https://github.com/zeroclaw-labs/zeroclaw/pull/8079) 解决的 OpenAI STT 凭证问题）。
*   **满意点**：社区对 `@alexandme` 和 `@Audacity88` 等核心贡献者在 OTel 和系统健壮性方面的积极响应速度给予了高度评价（见 Issue #6641）。

---

### 8. 待处理积压
以下重要 Issue/PR 处于活跃但需要重点推进或滞留状态，需维护者关注：

*   **长期停滞的大型 PR**：PR [#6129](https://github.com/zeroclaw-labs/zeroclaw/pull/6129)（软件工厂自动化角色，标记为 `stale-candidate`，超过一个月无动作）。
*   **历史代码回滚审计**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪因 3 月份的一次大批量回滚（revert c3ff635）丢失的 153 个提交。这是一个长期且痛苦的恢复过程，目前正在进行中。
*   **架构清理提案待审**：Issue [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) 提出停用独立的 `aardvark-sys` crate 并将其折叠进 `zeroclaw-hardware`，目前等待维护者审查表决。

---
*本报告由 AI 自动化分析生成，基于 ZeroClaw GitHub 仓库过去 24 小时的公开数据。*

</details>