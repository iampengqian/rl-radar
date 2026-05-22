# OpenClaw 生态日报 2026-05-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-22 22:17 UTC

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

# OpenClaw 项目动态日报 (2026-05-23)

## 1. 今日速览

OpenClaw 今日项目活跃度**极高**，过去 24 小时内共产生 **500 条 Issue 更新**（新开/活跃 410，关闭 90）和 **500 条 PR 更新**（待合并 389，合并/关闭 111），代码提交和评审节奏保持在高位。项目整体继续围绕 **Agent 编排稳定性**、**多渠道（Telegram/Discord/WhatsApp）消息投递可靠性**和**底层架构重构**三条主线推进。值得注意的是，社区对近期版本引入的 **性能回退** 和 **跨用户隐私泄漏** 高度关注，多个 P0/P1 级别 Bug 正在等待官方修复。暂无新版本发布。

---

## 2. 版本发布

今日无新版本发布。项目主线仍处于密集修复与架构重构阶段。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推进了以下领域：

- **Agent 运行时内部化重构** — [#85341](https://github.com/openclaw/openclaw/pull/85341)（Open，XL 级别）将原 Pi agent/runtime 包表面迁移至 `src/agents/**` 等模块，逐步解除对外部依赖。这是继 SQLite 迁移之后最大的架构级 PR。
- **运行时状态 SQLite 迁移（重新提交）** — [#81402](https://github.com/openclaw/openclaw/pull/81402)（Open，P1，XL 级别）将分散的 JSON/JSONL/lock 文件合并到类型化 SQLite 布局，解决长期以来的并发和一致性问题。此前曾意外合并后被回退。
- **Codex 工具输出上限修复** — [#84772](https://github.com/openclaw/openclaw/pull/84772)（Ready for review）修复 app-server transcript 中硬编码的 12000 字符上限不遵循用户配置的问题。
- **Subagent 模型优先级还原** — [#58823](https://github.com/openclaw/openclaw/pull/58823)（Ready for review）恢复全局 subagent 模型配置优先于父代理自身模型的正确行为。
- **Provider Auth 查找复用** — [#85499](https://github.com/openclaw/openclaw/pull/85499)（已关闭/已合并）清理 provider auth 查找逻辑，减少重复查询。
- **Slack 搜索无结果友好化** — [#85478](https://github.com/openclaw/openclaw/pull/85478)（Ready for review）将干净的 `rg` 无匹配退出码从"失败"重新分类为"良性无结果"。
- **安全加固：CSP 收紧** — [#58184](https://github.com/openclaw/openclaw/pull/58184) 将 WebSocket `connect-src` 从 `ws:/wss:` 收紧至 `self`。
- **安全加固：TOCTOU 竞态消除** — [#58311](https://github.com/openclaw/openclaw/pull/58311) 在安全关键路径中消除 `existsSync→readFileSync` 竞态。
- **内存泄漏修复** — [#58244](https://github.com/openclaw/openclaw/pull/58244) 修复 command queue lanes Map 无限增长的内存泄漏。
- **Gmail Hook 系统提示支持** — [#58186](https://github.com/openclaw/openclaw/pull/58186) 为 Gmail preset 添加 system prompt 支持。
- **Doctor 干运行预览** — [#84472](https://github.com/openclaw/openclaw/pull/84472)（XL）暴露 `doctor --fix --dry-run` / `--diff` / JSON 预览。

**整体判断**：项目正处于"质量夯实期"——大面积的安全、稳定性、性能 PR 正在排队等待审查，架构层面的内部化重构和 SQLite 迁移是下一阶段的基石。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 核心诉求 |
|---|-------|------|----------|
| 1 | [#44925 Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 14 | Subagent 编排中结果静默丢失，无重试/通知/自动重启 |
| 2 | [#29387 Bootstrap files in agentDir silently ignored](https://github.com/openclaw/openclaw/issues/29387) | 13 | `agentDir` 下的 `.md` 引导文件被忽略，仅 workspace 目录生效 |
| 3 | [#57901 Safeguard compaction ignores model config](https://github.com/openclaw/openclaw/issues/57901) | 12 | `compaction.model` 配置被覆盖，使用 session 模型 |
| 4 | [#53628 XDG_CONFIG_HOME not processed for skill install](https://github.com/openclaw/openclaw/issues/53628) | 12 | Docker 安装下环境变量未解析 |
| 5 | [#55334 sessions.json unbounded growth → OOM](https://github.com/openclaw/openclaw/issues/55334) | 11 | Gateway 内存无限增长导致 OOM |
| 6 | [#51429 Hardcoded 工作路径被合并发布](https://github.com/openclaw/openclaw/issues/51429) | 11 | 开发者的个人路径 `/Users/wangtao` 被硬编码并发布 |
| 7 | [#84516 Codex 长回复被静默截断](https://github.com/openclaw/openclaw/issues/84516) | 10 | ~1000-1100 字符处截断且无错误反馈 |
| 8 | [#10687 动态模型发现](https://github.com/openclaw/openclaw/issues/10687) | 9 | 请求支持 OpenRouter 等快速变化目录的完全动态模型发现 |

**热点分析**：
- **编排可靠性**（#44925, #50165, #52249）是社区反复提及的痛点，subagent 的状态同步、完成通知、超时重试机制亟待完善。
- **配置被忽视/覆盖**（#29387, #57901, #53628）反映了配置层优先级和路径解析的系统性问题。
- **硬编码路径**（#51429）引发了社区对代码审查流程的质疑——"wangtao 是谁"已成为梗。

---

## 5. Bug 与稳定性

### 🔴 P0 / 严重安全

| Issue | 状态 | 描述 | Fix PR |
|-------|------|------|--------|
| [#85240 跨用户隐私泄漏](https://github.com/openclaw/openclaw/issues/85240) | CLOSED | `relevant-memories` 语义召回未按 `sender_id` 隔离，导致用户 A 的记忆被注入用户 B 的对话 | 无 |
| [#51363 Docker 沙箱容器名碰撞](https://github.com/openclaw/openclaw/issues/51363) | OPEN | 同一主机多实例 Docker 沙箱容器名冲突 | 无 |

### 🟠 P1 / 高优先级

| Issue | 状态 | 描述 | Fix PR |
|-------|------|------|--------|
| [#44925 Subagent 结果静默丢失](https://github.com/openclaw/openclaw/issues/44925) | OPEN | 多种故障模式下完成结果被丢弃，无重试/通知 | 无 |
| [#55334 sessions.json OOM](https://github.com/openclaw/openclaw/issues/55334) | OPEN | 内存每分钟增长 50-100MB 直至 OOM-killed | 无（SQLite 迁移 #81402 将从根本上解决） |
| [#84516 Codex 回复静默截断](https://github.com/openclaw/openclaw/issues/84516) | OPEN | ~1000 字符截断且无错误反馈 | [#84772](https://github.com/openclaw/openclaw/pull/84772) 部分相关 |
| [#84945 LLM 空闲超时错误被静默丢弃](https://github.com/openclaw/openclaw/issues/84945) | CLOSED | agentRunStarted 后超时错误仅写日志不广播给客户端 | 无 |
| [#85120 macOS in-band update 可停止 Gateway](https://github.com/openclaw/openclaw/issues/85120) | CLOSED | 从会话内执行 `openclaw update` 可终止承载该命令的 Gateway | 无 |
| [#57019 Session 写锁竞态](https://github.com/openclaw/openclaw/issues/57019) | OPEN | 异步释放可删除新获取的锁 | linked PR open |
| [#85333 doctor --fix 性能回退 4-5x](https://github.com/openclaw/openclaw/issues/85333) | OPEN | 2026.5.20 vs 5.19 从 55s → 229s+ | 无 |
| [#85027 5.6→5.19 升级导致 Gateway 不可恢复](https://github.com/openclaw/openclaw/issues/85027) | OPEN | macOS LaunchAgent 升级后需 Time Machine 恢复 | 无 |
| [#83964 Codex ERR_MODULE_NOT_FOUND](https://github.com/openclaw/openclaw/issues/83964) | OPEN | `@openclaw/codex` 找不到 `openclaw` 包（除非本地安装） | 无 |
| [#56733 Gateway 事件循环冻结](https://github.com/openclaw/openclaw/issues/56733) | OPEN | 进程存活但所有 HTTP 请求静默超时 | 无 |

### 🟡 P2 / 中优先级（部分高频）

| Issue | 描述 |
|-------|------|
| [#51871 Cron 任务不显示](https://github.com/openclaw/openclaw/issues/51871) | Control UI Dashboard 回归 |
| [#71992 Webchat 回复重复](https://github.com/openclaw/openclaw/issues/71992) | 每条回复显示两遍 |
| [#51593 Moonshot/Kimi 重复 tool call id](https://github.com/openclaw/openclaw/issues/51593) | WhatsApp 群聊触发 HTTP 400 |
| [#53486 飞书卡片 JSON 纯文本回退](https://github.com/openclaw/openclaw/issues/53486) | 回归 |
| [#52972 错误的"未设置提醒"提示](https://github.com/openclaw/openclaw/issues/52972) | 成功设置后仍附加否定提示 |

### 稳定性总评

今日 P0/P1 积压严重，尤其是 **session 状态管理** 和 **消息投递可靠性** 两条线上集中了大量 Bug。`sessions.json` 无限增长（#55334）和写锁竞态（#57019）是最紧迫的基础设施问题。SQLite 迁移（#81402）若成功合并将一并解决多条 P1。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 合并可能性 |
|----------|------|------------|
| [#10687 动态模型发现](https://github.com/openclaw/openclaw/issues/10687) | OpenRouter 等提供商的实时目录同步 | 🟡 长期需求，尚无对应 PR |
| [#56349 不可绕过的出站策略执行](https://github.com/openclaw/openclaw/issues/56349) | 所有出站消息经过统一验证/修改边界 | 🟡 安全核心，与 #58360 hooks PR 协同 |
| [#52640 长任务持久状态面](https://github.com/openclaw/openclaw/issues/52640) | Discord 长耗时任务的持久状态展示 | 🟢 体验改进，社区呼声明确 |
| [#59413 Per-candidate 重试计数](https://github.com/openclaw/openclaw/issues/59413) | 模型回退支持同候选重试 | 🟡 代理/池化 API 提供商刚需 |
| [#58434 per-request tool_deny](https://github.com/openclaw/openclaw/pull/58434) | API 级别动态禁用工具 | 🟢 PR 已就绪 |
| [#58405 per-request skills override](https://github.com/openclaw/openclaw/pull/58405) | API 级别动态技能选择 | 🟢 PR 已就绪 |
| [#54373 Context Provenance RFC](https://github.com/openclaw/openclaw/issues/54373) | 注入内容携带来源/挥发度元数据 | 🟡 RFC 阶段 |
| [#50561 启动时自动应用安全 doctor 修复](https://github.com/openclaw/openclaw/issues/50561) | 减少配置漂移 | 🟢 与 #84472 Doctor 改造协同 |
| [#58360 before/after_model_call hooks](https://github.com/openclaw/openclaw/pull/58360) | 插件级模型调用可观测性 | 🟢 PR 已提交 |
| [#85461 图像生成用量元数据捕获](https://github.com/openclaw/openclaw/issues/85461) | 支持 GPT Image 2 / Flux 等成本追踪 | 🟡 刚创建 |
| [#81249 本地 Ollama 嵌入代理 SSRF 问题](https://github.com/openclaw/openclaw/issues/81249) | 代理启用时本地嵌入失败 | 🟡 待与安全加固 PR 协同 |

**路线图信号**：
- **数据库化**（SQLite #81402）+ **运行时内部化**（#85341）是下半年最大的两条架构主线。
- **插件钩子体系**（#58360, #72797）正在扩展，预示更丰富的生态扩展能力。
- **API 动态化**（#58434, #58405）表明 OpenClaw 正在向更灵活的 headless/API-first 使用场景演进。

---

## 7. 用户反馈摘要

从 Issue 描述和评论中提炼出的真实用户痛点：

### 痛点
1. **"静默失败"是最频繁出现的主题**：无论是 subagent 完成丢失（#44925）、Codex 回复截断（#84516）、LLM 超时错误被吞（#84945），还是 compaction 配置被覆盖（#57901），用户反复表达的核心诉求是 **"如果失败了，请告诉我"**。
2. **升级恐惧**：从 5.6 → 5.19 导致不可恢复（#85027），5.19 → 5.20 导致 doctor 变慢 4-5x（#85333），用户对升级的信心正在下降。有用户不得不使用 Time Machine 回滚。
3. **多渠道消息投递不可靠**：Telegram（#51628 重放/重复）、WhatsApp（#51593 崩溃）、Discord（#71992 重复）、飞书（#53486 回归）全面出现投递问题，说明渠道适配层的集成测试覆盖不足。
4. **Docker/多实例部署体验差**：容器名碰撞（#51363）、环境变量未解析（#53628）、文件权限问题（#56263）表明容器化场景尚未被充分重视。
5. **安全焦虑**：跨用户记忆泄漏（#85240）已触发 P0 安全评审，CLI dispatch 绕过（#57326）和权限剥离（#51396）加深了社区对安全边界的担忧。

### 正面反馈
- SQLite 迁移（#81402）和运行时内部化（#85341）的架构方向获得社区认可。
- Doctor 干运行预览（#84472）和 subagent 模型优先级修复（#58823）被认为是"正确方向"。
- 多渠道支持（Telegram/Discord/WhatsApp/飞书/Slack 等）的广度本身被用户认可，只是稳定性待提升。

---

## 8. 待处理积压

以下高优先级 Issue/PR 长期未获 maintainer 响应，需要关注：

### 🔴 超过 60 天未解决的 P1 Issue

| Issue | 天数 | 关键标签 | 风险 |
|-------|------|----------|------|
| [#44925 Subagent 结果静默丢失](https://github.com/openclaw/openclaw/issues/44925) | ~71 | P1, message-loss, session-state | 编排核心可靠性 |
| [#29387 agentDir 引导文件被忽略](https://github.com/openclaw/openclaw/issues/29387) | ~84 | P1, security | 配置系统可信度 |
| [#55334 sessions.json OOM](https://github.com/openclaw/openclaw/issues/55334) | ~58 | P1, crash-loop | 生产环境稳定性 |
| [#51396 clearUnboundScopes 权限剥离](https://github.com/openclaw/openclaw/issues/51396) | ~63 | P1, security, regression | 后端客户端功能中断 |
| [#57019 Session 写锁竞态](https://github.com/openclaw/openclaw/issues/57019) | ~55 | P1, data-loss | 数据一致性 |

### ⚠️ 等待 Maintainer Review 的大型 PR

| PR | 状态 | 天数 | 影响 |
|----|------|------|------|
| [#81402 SQLite 迁移](https://github.com/openclaw/openclaw/pull/81402) | 📣 needs proof | ~10 | 架构级变更，解决多条 P1 |
| [#85341 运行时内部化](https://github.com/openclaw/openclaw/pull/85341) | 📣 needs proof | 0（新开） | 架构级，解除外部依赖 |


---

## 横向生态对比

一份基于 2026-05-23 各开源项目社区动态的横向对比分析报告。

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-05-23)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从早期的“单核对话”向“多模态、多端协同与自主编排”演进的关键重构期**。项目普遍面临底层架构（如状态持久化、网关协议）的阵痛，各大开源方案都在进行深度的代码重构（如引入 SQLite、Rust 重写）以解决内存泄漏和静默崩溃问题。同时，**“多通道消息投递”、“本地化轻量部署”以及“多智能体可靠性”**构成了当前生态演进的三大核心主轴。项目间的分化日益明显，既有瞄准企业级 SaaS 集成的重型方案，也有专注极客本地运行时的轻量级工具。

## 2. 各项目活跃度对比
以下是今日各项目的核心数据与状态评估（按活跃度排序）：

| 项目名称 | Issues 动态 | PRs 动态 | 今日合并数 | Release | 核心聚焦点 | 健康度 / 阶段评估 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (活跃极高) | 500 (389待决) | 111 | 无 | Agent 编排稳定性、SQLite/运行时重构 | 🟡 **质量巩固期** (P0/P1积压严重，亟待破局) |
| **ZeroClaw** | 31 (26 新开) | 50 (41 待决) | 9 | 无 | v0.8.0 TUI 架构、底层 RPC 集成 | 🟢 **高速迭代期** (架构大重构中) |
| **IronClaw** | 20 (活跃) | 50 (33 待决) | 17 | 无 | Reborn 架构落地、WebUI v2、原生扩展 | 🟢 **高速迭代期** (功能横向扩展) |
| **CoPaw** | 24 (17 新开) | 23 (13 待决) | 10 | 无 | 多渠道(微信/钉钉)稳定性、模型兼容 | 🟢 **快速修复期** (社区响应极快) |
| **NanoClaw** | 6 | 31 (28合并) | 28 | 无 | 纯 Codex 运行时、多渠道容器修复 | 🟢 **极健康** (需求吞吐率极高) |
| **NanoBot** | 7 | 20 (12合并) | 12 | 无 | 多模态图像生成、核心 Patch 精简 | 🟢 **功能扩展期** (多模态能力跃进) |
| **Hermes Agent**| 50 (46新开) | 50 (28待决) | 22 | 无 | 网关稳定性、上下文压缩、CI修复 | 🟡 **债务清理期** (历史Bug集中爆发) |
| **Moltis** | 8 (7 关闭) | 9 (全合并) | 9 | 无 | Docker沙箱稳定性、语音(TTS)交互 | 🟢 **极健康** (积压清零，稳步推进) |
| **LobsterAI** | 未详述 | 12+ | 12 | **有 (v2026.5.22)** | Subagent 架构、Artifacts 可视化 | 🟢 **稳健发版期** (重构与体验并重) |
| **NullClaw** | 0 | 0 | 0 | 无 | 系统底层兼容、新型供应商接入 | 🟢 **静默蓄力期** (低频但专注) |
| **PicoClaw** | - | - | - | - | *(数据获取失败)* | ⚪ 未知 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 0 | 无 | 无活动 | ⚪ 暂歇期 |

## 3. OpenClaw 在生态中的定位
*   **生态角色：事实上的核心参照物（行业大鳄）**。OpenClaw 拥有压倒性的社区互动量（日更近千条 Issue/PR），其路线图（如动态模型发现、Context Provenance RFC）往往被视为整个生态的风向标。
*   **技术路线差异**：相较于其他项目还在解决基础的通道适配，OpenClaw 已经深入到**运行时内部化重构**（解耦 Pi runtime）和**去 JSON/文件系统化**（全面迁移 SQLite）的深水区。
*   **当前优劣势**：
    *   *优势*：生态支持最广（多渠道、多模型）、插件/Hook体系最完善。
    *   *劣势*：架构历史包袱导致严重的**“静默失败”**（如 Subagent 丢失、配置被覆盖）和**“升级恐惧”**。其 P0/P1 级别的安全与稳定性Bug积压是当前最大隐患，正经历其他项目尚未遇到的规模化治理难题。

## 4. 共同关注的技术方向
从多项目的动态中，涌现出高度一致的四大技术诉求：
1.  **底层状态持久化的“去文件化”**：**OpenClaw (#81402)** 和 **LobsterAI (#2034)** 都在致力于将 JSON/文件会话存储迁移至 SQLite，以彻底解决并发写锁竞态和 OOM 内存无限增长问题。
2.  **多渠道网关的“Exactly-once”投递可靠性**：**Hermes (#7237)**、**OpenClaw**、**CoPaw** 和 **NanoClaw** 均饱受 Telegram/WhatsApp/微信等通道的消息重复、截断、401鉴权失效的困扰。强化异步投递的重试与死信队列是共同刚需。
3.  **Subagent/多智能体编排的完备性**：**OpenClaw (#44925)** 和 **LobsterAI** 都在解决子智能体结果静默丢失、执行状态无法实时落盘的痛点，正在向事件驱动架构演进。
4.  **复杂部署环境下的沙箱与权限收敛**：**Moltis** 和 **NanoClaw** 遇到的 Docker/Rootless Podman 挂载失败，以及 **ZeroClaw** 和 **OpenClaw** 遇到的环境变量/Token注入问题，表明项目正在适配更复杂的云原生/本地隔离环境。

## 5. 差异化定位分析
*   **重型全栈 vs 轻量内核**：
    *   **OpenClaw, Hermes, CoPaw** 走全栈路线，重度依赖 Node/Python 等高级语言，强调多通道的大而全。
    *   **IronClaw (Rust), ZeroClaw (Rust), NullClaw** 正在利用系统级语言进行底层重构，更关注极低资源占用和守护进程的健壮性（如 ZeroClaw 对 TUI 和 RPC 的重构）。
*   **目标用户群体分化**：
    *   **Homelab 玩家/极客**：**Moltis** (主打语音/Proxmox兼容)、**NullClaw** (多供应商网关)、**ZeroClaw** (本地 TUI 体验)。
    *   **企业/团队生产力**：**LobsterAI** (结合网易有道生态的 UI 呈现)、**IronClaw** (深度集成 NEAR/Google Workspace)、**CoPaw** (打通微信/钉钉企业流)。
*   **生态演进路线**：**NanoBot** 正在尝试类似“应用商店”的 CLI-Anything 注册表机制；**OpenClaw** 则通过 API-first 的动态配置（per-request tool_deny）向纯粹的 Headless 引擎演进。

## 6. 社区热度与成熟度
*   **处于“质量夯实期”（高危/阵痛阶段）**：**OpenClaw** 和 **Hermes Agent**。维护者正疲于应对架构重构带来的性能回退、长尾 Bug 以及用户的“升级恐惧”。
*   **处于“高速迭代/重构期”（极速狂奔阶段）**：**IronClaw**、**ZeroClaw** 和 **LobsterAI**。代码库底层大换血，PR积压较多，核心关注基础设施（如 Auth 栈、WebUI v2）。
*   **处于“健康微调期”（小步快跑阶段）**：**NanoClaw**、**Moltis**、**CoPaw** 和 **NanoBot**。这些项目积压极少，核心团队能做到 Issue/PR 日清日结，功能随需随上。

## 7. 值得关注的趋势信号
对于 AI 智能体开发者与架构师，今日的动态释放了强烈的行业信号：
1.  **“静默失败”是 Agent 最大的敌人**：LLM 的不稳定性叠加工具调用的网络波动，导致当前 Agent 普遍存在“吞掉错误”的现象。未来必须引入强制级的 Hook（如 OpenClaw 提出的 `before/after_model_call hooks`）和细粒度的事件总线。
2.  **本地运行时崛起与 API 化演进并行**：一方面，**ZeroClaw** 推崇的本地 TUI + 守护进程模式正在获得极客青睐；另一方面，**OpenClaw** 的 Headless API 趋势表明，Agent 正在成为一种可被其他代码随意编排的底层组件，而非仅仅是一个聊天框。
3.  **多模态走向本地化与细粒度管控**：**NanoBot** 和 **Moltis** 集中解决了语音 和图像生成的本地化与自建服务器兼容问题，预示着 Agent 的多模态能力正在摆脱对单一公有云 API 的依赖。
4.  **重度依赖工具的“自我意识”觉醒**：**Moltis (#1028)** 让 Agent 阅读自身文档、**NanoClaw (#2573)** 让模型感知 Context Window 占用率。这标志着 Agent 正在从“无脑调度器”向具备自我状态感知的“自治系统”演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-23)

## 1. 今日速览
NanoBot 在过去 24 小时内保持了**极高的开发活跃度与社区热度**。项目今日共处理了 20 条 PR 动态（其中 12 条已合并/关闭），并产生了 7 条 Issue 更新（3 个 Bug 被成功闭环）。开发重心明显聚焦于**WebUI 交互优化、多模态能力扩展（尤其是图像生成）以及底层性能与安全性提升**。整体来看，项目核心功能正在快速迭代，代码库正处于积极的重构与强化阶段，健康度极佳。

---

## 2. 版本发布
- **无新版本发布**。鉴于近期合并了大量涉及多模态提供商、核心补丁逻辑重构（`apply_patch`）及安全性修复的 PR，预计项目正在为下一个 Minor 或 Major 版本进行积蓄。

---

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，极大地推进了项目的稳定性与功能矩阵：

- **安全修复**：[#3928](https://github.com/HKUDS/nanobot/pull/3928) 加固了 `web_fetch` 的重定向处理，修复了潜在的 SSRF 漏洞，提升了系统整体安全性。
- **多模态能力大跃进**：
  - [#3946](https://github.com/HKUDS/nanobot/pull/3946) 原生支持 Ollama 图像生成，完善了本地化部署生态。
  - [#3954](https://github.com/HKUDS/nanobot/pull/3954) 新增了对 OpenAI 及 Codex 订阅的 OAuth 图像生成支持。
  - [#3929](https://github.com/HKUDS/nanobot/pull/3929) 统一了 MiniMax 和 AIHubMix 等图像生成提供商的 HTTP 处理逻辑。
- **核心架构精简**：[#3960](https://github.com/HKUDS/nanobot/pull/3960) 移除了废弃的 unified-diff `patch` 参数，仅保留结构化的 `edits`，降低了代码复杂度。
- **WebUI 体验与国际化**：[#3964](https://github.com/HKUDS/nanobot/pull/3964) 和 [#3962](https://github.com/HKUDS/nanobot/pull/3962) 补齐了多语言（es/fr/id/ko/vi/zh-TW/ja）的翻译缺失；[#3957](https://github.com/HKUDS/nanobot/pull/3957) 修复了文件编辑计数器在 UI 上的误导性显示。
- **API 兼容性修复**：[#3961](https://github.com/HKUDS/nanobot/pull/3961) 修复了 Responses API 重放时项目 ID 重复导致 Codex 拒绝恢复会话的严重问题。
- **CI 流程完善**：[#3965](https://github.com/HKUDS/nanobot/pull/3965) 将 CLI Apps 测试扩展至 Windows 平台，保障了跨端稳定性。

---

## 4. 社区热点
- **多轮对话中的 Skill 保持机制**：Issue [#3846](https://github.com/HKUDS/nanobot/issues/3846)（👍 1，评论 4）引发了开发者对当前架构的热烈讨论。用户指出当前使用 `read_file` 加载 skill 在多轮对话中效率低下，呼吁底层设计增强。
- **天气组件架构之辩**：Issue [#3958](https://github.com/HKUDS/nanobot/issues/3958) 提出为了保持内核精简，应将天气组件移出内置转为示例。这反映了社区对项目“微内核+插件化”架构走向的高度关注。
- **心跳机制的调度冲突**：Issue [#3028](https://github.com/HKUDS/nanobot/issues/3028)（评论 3）针对心跳触发时重复创建定时任务导致消息泛滥的问题进行了持续追踪。

---

## 5. Bug 与稳定性
按严重程度排列今日处理的 Bug：
1. **API 兼容性崩溃（已修复）**：Issue [#3956](https://github.com/HKUDS/nanobot/issues/3956) 指出读取图片时 `content` 以 list 格式传给 Anthropic API 会导致 400 硬错误。随着相关 PR 的合并，此阻断性问题已闭环。
2. **WebUI 对话异常（已修复）**：Issue [#3884](https://github.com/HKUDS/nanobot/issues/3884) 报告 WebUI 在收到首轮响应后直接关闭会话，严重影响前端体验，目前状态已转为 Closed。
3. **定时任务嵌套/死循环（修复中）**：Issue [#3028](https://github.com/HKUDS/nanobot/issues/3028) 心跳机制在执行时错误创建独立定时任务导致重复执行。PR [#2364](https://github.com/HKUDS/nanobot/pull/2364) 和 [#1443](https://github.com/HKUDS/nanobot/pull/1443) 试图从不同维度（防递归注入和解耦推理/通知）解决此问题。
4. **配置失效（Open）**：Issue [#3959](https://github.com/HKUDS/nanobot/issues/3959) 发现 `disabledSkills` 配置项未生效，依然在 `/skill` 列表中展示被禁用的技能，等待官方修复。

---

## 6. 功能请求与路线图信号
从近期的 PR 动向来看，以下几个核心功能即将落地，勾勒出下一版本的路线图：
- **CLI Apps 生态集成**：PR [#3963](https://github.com/HKUDS/nanobot/pull/3963) 引入了基于 CLI-Anything 注册表的 CLI Apps 能力，结合配套的 WebUI 修复（[#3966](https://github.com/HKUDS/nanobot/pull/3966)），预示着 NanoBot 将具备类似“应用商店”的动态扩展能力。
- **长效记忆系统重构**：PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) 正在针对长期记忆的冗余膨胀问题进行 MECE（相互独立、完全穷尽）重构。
- **性能与加载优化**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 提出了基于 BM25-lite 的轻量级 Skill 路由器，预计可将系统提示词占用减少约 60%。
- **诊断工具**：PR [#3776](https://github.com/HKUDS/nanobot/pull/3776) 提议引入 `nanobot doctor` 命令，极大降低用户的排障门槛。
- **新路由提供商**：PR [#3568](https://github.com/HKUDS/nanobot/pull/3568) 正在对接 Manifest LLM router。

---

## 7. 用户反馈摘要
通过分析今日的 Issue 评论，提炼出用户的真实反馈：
- **痛点 - 上下文丢失与提示词膨胀**：用户在多轮交互和复杂的 Skill 调用中，明显感觉到上下文管理不够智能，底层依赖文件读取过于原始（[#3846](https://github.com/HKUDS/nanobot/issues/3846)）。
- **痛点 - 定时任务逻辑死板**：高级用户尝试通过 Agent 设定复杂的日程关怀逻辑，但由于当前心跳和定时任务未解耦，导致严重的管理灾难（[#3028](https://github.com/HKUDS/nanobot/issues/3028)）。
- **满意度 - 敏捷的 Bug 响应**：在 API 字段格式变更（如 Anthropic list content 变更）导致的突发报错中，用户对修复速度表示肯定。

---

## 8. 待处理积压
以下关键 PR/Issue 已处于 Open 状态较长时间或涉及重大架构调整，需维护团队重点关注与推进：
- **核心调度机制重构**：PR [#1443](https://github.com/HKUDS/nanobot/pull/1443)（创建于 3 月）和 PR [#2364](https://github.com/HKUDS/nanobot/pull/2364)（创建于 3 月）针对定时任务/心跳的重构，直接关系到 Agent 行为的可靠性，建议尽快合并排雷。
- **系统性能优化**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865)（Skill Router）及 PR [#3952](https://github.com/HKUDS/nanobot/pull/3952)（记忆系统去重）是突破现有性能瓶颈的关键，需加快 Code Review。
- **执行安全性控制**：PR [#3937](https://github.com/HKUDS/nanobot/pull/3937) 实现了危险命令的用户确认机制，对生产环境部署至关重要，目前等待合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-23)

## 1. 今日速览
Hermes Agent 在过去24小时内保持了极高的社区活跃度，共产生了 **50 条 Issue 更新**（46 新开/活跃，4 关闭）和 **50 条 PR 更新**（28 待合并，22 已合并/关闭），项目整体处于高速迭代期。今日焦点集中在跨平台 Gateway 的稳定性修复、上下文压缩机制优化，以及多模型提供商（Anthropic/Gemini/Azure）的兼容性补丁上。社区对新平台适配（如 ntfy、Microsoft 365）和高级调度功能表现出强烈需求，尽管无新版本发布，但大量核心 Bug 修复 PR 已准备就绪，预示着下一个小版本发布可能即将到来。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 22 个 PR 被合并或关闭，显著推进了 CI/CD 管道稳定性和核心功能的健壮性，整体代码质量向前迈进了坚实的一步：

- **CI 供应链审计修复落地**：合并了三个相关 PR（[#30621](https://github.com/NousResearch/hermes-agent/pull/30621), [#13411](https://github.com/NousResearch/hermes-agent/pull/13411), [#23592](https://github.com/NousResearch/hermes-agent/pull/23592)），彻底解决了 `git diff` 使用双点差异导致上游代码偏移引发误报的顽疾，极大提升了 PR 合并效率。
- **MiniMax OAuth 认证修复**：[#30619](https://github.com/NousResearch/hermes-agent/pull/30619) 解决了 MiniMax 提供商因缓存短期 Access Token 导致会话15分钟后中断的问题。
- **新架构与重构探索**：虽然 [#30627](https://github.com/NousResearch/hermes-agent/pull/30627)（引入 EventBus 架构）被关闭，但表明项目正在积极评估下一代自愈和可观测性架构。
- **跨平台适配推进**：ntfy 适配器在经历重写后重新开启为 [#30625](https://github.com/NousResearch/hermes-agent/pull/30625)，标志着轻量级推送通知平台即将获得官方支持。

## 4. 社区热点
今日讨论最热烈的问题反映了社区对**配置多端同步**及**网关稳定性**的强烈诉求：

- 🔥 **响应长度截断问题** ([#7237](https://github.com/NousResearch/hermes-agent/issues/7237), 👍: 4, 评论: 33)：这是一个长期存在的核心痛点，用户在使用 CLI 或 Telegram 等网关时，长文本生成经常被截断。高评论量表明该问题严重影响了复杂任务的连贯性。
- 💬 **Claude CLI 兼容性故障** ([#29125](https://github.com/NousResearch/hermes-agent/issues/29125), 👍: 4, 评论: 11)：Anthropic Claude Pro/Max 订阅用户在配置最新 `claude-opus-4.7` 模型时遇到阻断性问题，引发了大量讨论。
- 🌐 **配置文件跨设备云同步请求** ([#20510](https://github.com/NousResearch/hermes-agent/issues/20510), 👍: 6, 评论: 3)：多设备办公用户强烈呼吁提供 `~/.hermes/` 目录的云同步机制，此功能获赞数极高。
- 💼 **Google Workspace 多账号支持** ([#15602](https://github.com/NousResearch/hermes-agent/issues/15602), 👍: 9, 评论: 4)：生产力场景的强需求，希望打破当前仅支持单 OAuth 令牌的限制，是今日获赞最多的 Issue。

## 5. Bug 与稳定性
今日报告了多个关键（P1/P2）级别的 Bug，部分已产生修复 PR，主要集中在网关和上下文压缩模块：

### 严重 (P1)
- **Telegram DM 绑定失效导致死循环** ([#20470](https://github.com/NousResearch/hermes-agent/issues/20470))：上下文压缩分裂会话后未更新绑定，导致无限预检压缩。**暂无 Fix PR**。
- **视觉Fallback静默失效** ([#27555](https://github.com/NousResearch/hermes-agent/issues/27555))：参数传递错误导致整个 Fallback 链返回 `None`。**暂无 Fix PR**。
- **非 TTY 管道下静默退出** ([#30623](https://github.com/NousResearch/hermes-agent/issues/30623))：SSH 或 Cron 环境中执行 `hermes -z` 会直接退出且不报错。**暂无 Fix PR**。

### 高危 (P2)
- **Gateway 崩溃循环与状态丢失** ([#19471](https://github.com/NousResearch/hermes-agent/issues/19471), [#30626](https://github.com/NousResearch/hermes-agent/issues/30626))：网关在重启或热切换 Profile 时丢失事件循环或忽略配置。
- **自定义 Provider 配置清洗丢失关键参数** ([#30617](https://github.com/NousResearch/hermes-agent/pull/30617))：导致 Azure 等端点 404 错误。**已有修复 PR #30617**。
- **MCP 工具结果丢失** ([#30601](https://github.com/NousResearch/hermes-agent/issues/30601))：包含 `EmbeddedResource` 的响应被静默丢弃。

## 6. 功能请求与路线图信号
根据今日的 Issues 和 PRs，项目的下一阶段路线图浮现出以下清晰方向：

- **智能化调度**：用户提出看板调度器应具备自适应重试和模型升级能力（Issue [#30587](https://github.com/NousResearch/hermes-agent/issues/30587)），目前已有对应的实现 PR（[#30620](https://github.com/NousResearch/hermes-agent/pull/30620)），极可能合并。
- **企业级生态集成**：紧随 Google Workspace 多账号需求，社区正式提议增加 Microsoft 365 日历和待办集成（Issue [#25979](https://github.com/NousResearch/hermes-agent/issues/25979)）。
- **底层架构重构**：正致力于修复工具注册表覆盖机制（PR [#30628](https://github.com/NousResearch/hermes-agent/pull/30628)）和守护上下文压缩的连续性（PR [#30622](https://github.com/NousResearch/hermes-agent/pull/30622)），这为后续更复杂的代理行为打下了基础。
- **移动端优化**：针对 Android/Termux 环境的本地 HTML 浏览器交接修复（PR [#25345](https://github.com/NousResearch/hermes-agent/pull/25345)）正在积极推进中。

## 7. 用户反馈摘要
从今日的数据与描述中，可以提炼出以下真实用户画像与痛点：
- **运维人员**：受困于系统级配置问题。例如在 macOS 无控制台环境（SSH/无头CI）中启动失败（[#30586](https://github.com/NousResearch/hermes-agent/issues/30586)），以及在 NixOS 上因导入异常无法运行 MCP 服务器（[#22110](https://github.com/NousResearch/hermes-agent/issues/22110)）。
- **高级开发者/重度用户**：对当前本地化的配置管理感到疲倦，强烈需要跨设备同步（[#20510](https://github.com/NousResearch/hermes-agent/issues/20510)）和 Docker 级别的 Profile 隔离（[#30585](https://github.com/NousResearch/hermes-agent/issues/30585)）。
- **群组/社区管理员**：在使用 WhatsApp/Telegram 网关时，受够了机器人的“自言自语”。他们迫切需要机器人能够理解“意图静默”，而不是对每条消息都给出回复或重试（Issues [#28208](https://github.com/NousResearch/hermes-agent/issues/28208), [#18848](https://github.com/NousResearch/hermes-agent/issues/18848)）。

## 8. 待处理积压
以下重要的高优先级 Issue 涉及底层机制，目前仍处于“仅讨论无代码修复”状态，提醒维护团队重点关注：

1. **[#20470](https://github.com/NousResearch/hermes-agent/issues/20470) [P1]**：Telegram 网关因压缩导致的无限循环问题，严重影响平台可用性。
2. **[#27555](https://github.com/NousResearch/hermes-agent/issues/27555) [P1]**：Vision fallback chain 的静默崩溃，导致多模态能力降级。
3. **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237) [长期遗留]**：长文本生成截断问题已累积 33 条评论，亟需架构层面的输出流优化方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the daily project status report for NanoClaw based on the provided GitHub data.

---

# 📊 NanoClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
过去24小时内，NanoClaw 项目呈现**极高的开发与维护活跃度**。社区共提交了 31 个 Pull Requests，其中多达 28 个已被合并或关闭，表明项目核心维护者正在高效且高频地处理社区贡献。Issue 方面更新了 6 条（4 条新开，2 条关闭），主要集中在多渠道适配（WhatsApp、Signal、Teams、Telegram）和底层容器运行时的兼容性修复。整体而言，项目正处于功能快速迭代与稳定性修补并行的健康阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 28 个 PR 被合并或关闭，项目在**多渠道支持、底层运行时优化及安全合规**方面取得了显著进展：
*   **独家运行环境支持**：PR [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) 实现了完整的纯 Codex 安装支持，使得 Codex 作为唯一的 AI 代理提供商和 CLI 工具成为可能。
*   **消息通道增强**：WhatsApp 渠道修复了提及功能失效（[#2552](https://github.com/nanocoai/nanoclaw/pull/2552)）和 401 登出时的凭据处理逻辑（[#2579](https://github.com/nanocoai/nanoclaw/pull/2579)），并新增了 WhatsApp 格式化技能（[#2553](https://github.com/nanocoai/nanoclaw/pull/2553)）。Telegram 新增了认领链接功能（[#2578](https://github.com/nanocoai/nanoclaw/pull/2578)）。
*   **底层容器与运行时修复**：修复了长期会话导致 SDK 日志文件无限增长的痛点（[#2586](https://github.com/nanocoai/nanoclaw/pull/2586)）；解决了 rootless Podman 下的双层权限写入故障（[#2572](https://github.com/nanocoai/nanoclaw/pull/2572)）；并允许模型感知自身的 Context Window 使用率（[#2573](https://github.com/nanocoai/nanoclaw/pull/2573)）。
*   **安全与权限收紧**：[#2566](https://github.com/nanocoai/nanoclaw/pull/2566) 限制了通道注册审批的作用域，防止越权连接。

## 4. 社区热点
今日的讨论焦点聚集在**非标准容器环境的兼容性**与**本地调试体验**上：
*   **Apple Container 生态兼容危机**：用户 `snymanpaul` 连续提交了三个 Issue（[#2587](https://github.com/nanocoai/nanoclaw/issues/2587), [#2588](https://github.com/nanocoai/nanoclaw/issues/2588), [#2589](https://github.com/nanocoai/nanoclaw/issues/2589)），指出 `skill/apple-container` 分支由于长时间未与主线同步，且主线已从 Node+tsc 迁移至 Bun，导致该技能目前完全失效。
*   **Node 版本依赖地狱**：用户 `whiletrue111` 在 Issue [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) 中表达了对本地调试的强烈不满，指出 SQLite 包装器对 Node 版本的严苛要求导致在 Ubuntu 上遭遇依赖冲突。
*   **信号通道的 JSON 解析**：Issue [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) 揭示了 `signal-cli` 0.13 版本更新导致的字段名变更，使得用户无法完成 Signal 账号绑定。

## 5. Bug 与稳定性
按严重程度排列今日报告及修复的 Bug：
*   **🚨 严重**：长会话转录文件无限膨胀导致 OOM/性能下降。**状态**：已有修复 PR [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) (已合并)。
*   **🚨 严重**：Rootless Podman 下容器写入权限故障。**状态**：已有修复 PR [#2572](https://github.com/nanocoai/nanoclaw/pull/2572) (已合并)。
*   **⚠️ 中等**：`skill/apple-container` 技能彻底失效（API 不存在、仍使用 npm build）。**状态**：**未修复**，等待维护者同步主线代码（[#2588](https://github.com/nanocoai/nanoclaw/issues/2588)）。
*   **⚠️ 中等**：Claude Agent SDK 批量消息被错误响应为 `<synthetic>`。**状态**：已有修复 PR [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) (已合并)。
*   **⚠️ 中等**：Signal-cli 0.13+ 版本账号列表字段不匹配。**状态**：已有修复 PR [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) (已合并)。
*   **💡 低**：WhatsApp 强制登出后重启导致循环报错。**状态**：已有修复 PR [#2579](https://github.com/nanocoai/nanoclaw/pull/2579) (已合并)。

## 6. 功能请求与路线图信号
*   **跨渠道消息追踪**：PR [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 提议在 XML 消息属性中增加 `from-channel` 和 `from-type`。这反映了高级用户在构建多通道监控 Dashboard 时的解析需求。该 PR 目前处于 Open 状态，有望被纳入下一版本。
*   **Token 成本优化**：PR [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) 增加了 `/add-rtk` 技能，集成了 `rtk` 代理以节省 60-90% 的开发命令 Token 消耗。已被合并，预示项目后续将更加关注 Agent 运行的 Token 成本控制。
*   **默认共享会话模式**：PR [#2593](https://github.com/nanocoai/nanoclaw/pull/2593) 提出了默认代理共享会话模式的概念，说明社区正在探索多 Agent 协同交互的最佳实践。

## 7. 用户反馈摘要
*   **本地开发体验极差**：对于不想使用 Docker 而选择裸机调试的开发者，Node/Bun 的依赖割裂以及原生模块（如 SQLite）的编译障碍非常折磨人（[#2590](https://github.com/nanocoai/nanoclaw/issues/2590)）。项目虽然主推容器化，但本地调试文档和兼容性仍需完善。
*   **Agent 级别的“自我意识”需求**：维护者合并了 PR [#2573](https://github.com/nanocoai/nanoclaw/pull/2573)，让模型能够感知 Context Window 的占用量。这精准击中了开发者控制 Agent 长时间运行时上下文溢出的痛点。
*   **企业级权限控制需求**：PR [#2566](https://github.com/nanocoai/nanoclaw/pull/2566) 和 [#2563](https://github.com/nanocoai/nanoclaw/pull/2563) 表明，多用户/多团队在使用同一个 NanoClaw 实例时，对通道和凭据的权限隔离提出了更高要求。

## 8. 待处理积压
*   **重点需关注 PR**：[#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 处于 Open 状态，为多通道日志提供了关键的元数据补充，建议维护者评估合并。
*   **重点需关注 Issue**：Apple Container 相关的 Issues（[#2587](https://github.com/nanocoai/nanoclaw/issues/2587), [#2588](https://github.com/nanocoai/nanoclaw/issues/2588), [#2589](https://github.com/nanocoai/nanoclaw/issues/2589)）指出了 `skill/apple-container` 分支的严重滞后。由于主线已经历运行时重构，该分支需要立即进行大规模重构或重写，否则应考虑从文档中移除以避免误导用户。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是 NullClaw 项目 2026-05-23 的动态日报：

### 1. 今日速览
过去 24 小时内，NullClaw 项目整体活跃度呈现**低频但专注**的状态。项目未发布任何新版本，也未产生新的 Issues 或合并任何 Pull Requests。然而，有 3 个重要的待合并 PR 在今日有更新动态，显示出核心维护团队正在审查底层兼容性增强以及对新型 AI 供应商的集成支持。当前项目的健康度稳定，重点正向多供应商兼容与操作系统级别的底层稳定性倾斜。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
*今日无已合并的 PR 或已关闭的 Issue。* 
但有多项关键 PR 正在持续推进中，为后续版本蓄力（详见第 6 节）。

### 4. 社区热点
今日暂无新增的用户讨论或高互动 Issue/PR，社区处于需求沉淀期。目前处于 Open 状态且近期有更新的重点 PR 包括：
*   **集成 NEAR AI Cloud** ([PR #922](https://github.com/nullclaw/nullclaw/pull/922))：由 PierreLeGuen 提交，主要添加了对 NEAR AI 云服务的支持。
*   **系统底层兼容性修复**：由贡献者 vernonstinebaker 提交了两个关于系统底层运行机制的关键修复（[PR #891](https://github.com/nullclaw/nullclaw/pull/891) 与 [PR #878](https://github.com/nullclaw/nullclaw/pull/878)），修复了网络探测和线程休眠的底层逻辑。

### 5. Bug 与稳定性
今日未报告新的严重 Bug 或崩溃问题。但在待处理的 PR 中，包含了两个对现有稳定性至关重要的修复：
*   **[中等] cURL 探测失败细节丢失问题**：[PR #891](https://github.com/nullclaw/nullclaw/pull/891) 指出当前系统在网络探测时，会将 cURL 的具体传输错误（如 DNS 错误、TLS 错误、超时等）折叠掩盖。该 PR 保留了这些底层错误细节，将大幅提升多供应商环境下的排错能力。
*   **[中等] POSIX 系统线程挂起失效问题**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878) 修复了 `std_compat.thread.sleep()` 在 POSIX 系统上未能真正挂起操作系统线程的问题（原先退化为协作式让步），这对 NullClaw 托管运行时的并发控制与资源管理至关重要。

### 6. 功能请求与路线图信号
从近期的 PR 动态来看，项目明确释放了以下路线图信号：
*   **扩大 AI 供应商生态（OpenAI 兼容路线）**：[PR #922](https://github.com/nullclaw/nullclaw/pull/922) 引入了 `NEAR AI Cloud` 作为新的供应商。该特性不仅接入了 API 密钥管理、模型目录解析（`GET /v1/model/list`），还更新了相关文档和示例。这表明 NullClaw 正在积极扩展其作为“多 AI 供应商网关/聚合器”的能力。
*   **深化跨平台底层能力**：从 [PR #878](https://github.com/nullclaw/nullclaw/pull/878) 的改造可以看出，项目对 Windows/WASI 和 POSIX 系统进行了路径分化，旨在提升不同操作系统下的原生性能和兼容性。

### 7. 用户反馈摘要
*过去 24 小时内暂无新增的用户 Issue 与评论，无法提取有效的用户痛点与反馈。*

### 8. 待处理积压
当前共有 3 个活跃的 PR 处于 "Open" 状态等待进一步的 Review 或 Merge。建议核心维护者重点关注以下积压情况，以防阻碍下个版本的发布：
*   **[高优先级] 线程休眠底层修复**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878)（已开启 23 天，最后更新于昨日），涉及基础运行时的核心逻辑，建议尽快完成 Review 推进合并。
*   **[中优先级] 网络探测诊断增强**：[PR #891](https://github.com/nullclaw/nullclaw/pull/891)（已开启 18 天，最后更新于昨日），能有效改善复杂网络环境下的调试体验。
*   **[功能添加] NEAR AI 供应商接入**：[PR #922](https://github.com/nullclaw/nullclaw/pull/922)（新开 2 天），涉及较大范围的新增代码，需重点评估其对现有供应商架构的影响。

---
*分析依据：基于 NullClaw (github.com/nullclaw/nullclaw) 2026-05-23 GitHub 提取的数据。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🛠 IronClaw (nearai/ironclaw) 项目动态日报
**日期**: 2026-05-23 | **分析周期**: 过去 24 小时

## 1. 今日速览
IronClaw 项目今日保持**极高的开发活跃度**，核心团队与社区贡献者正全力推进底层的 "Reborn" 架构演进。过去 24 小时内，项目新增或活跃了 **20 个 Issues** 和 **33 个待合并 PRs**，PR 总更新量高达 50 条。活动高度聚焦于 **Reborn 架构的产品级落地**，涵盖 WebUI v2 路由、原生产品授权栈、Google 原生扩展体系以及子代理生命周期管理等核心模块。项目整体呈现出架构重构深水区与功能横向扩展并重的健康态势。

## 2. 版本发布
**无新版本发布**。目前项目仍处于高强度的底层重构与功能堆叠阶段，大量 Draft/Feature PR 尚未合入，预计将在 "Reborn WebUI Beta" 及相关 Auth/Extensions 基石稳固后发布下一个正式版本。

## 3. 项目进展
今日共有 **17 个 PRs 被合并或关闭**，项目在多个关键基建方向取得实质性推进：

*   **WebUI v2 事件流与 BETA 路由收尾**：
    *   合并了类型化的 WebUI v2 事件流架构 ([PR #3876](https://github.com/nearai/ironclaw/pull/3876))，为浏览器端提供安全的 `WebChatV2Event` 渲染。
    *   关闭了多个 WebUI Beta P0 级别的里程碑 Issue，包括幂等消息账本 ([Issue #3625](https://github.com/nearai/ironclaw/issues/3625))、TurnScope 绑定 ([Issue #3626](https://github.com/nearai/ironclaw/issues/3626)) 以及本地路由实现 ([Issue #3611](https://github.com/nearai/ironclaw/issues/3611))，标志着 WebUI 核心链路已初步打通。
*   **代码重构与测试修复**：
    *   修复了 4 类长期存在的集成测试失败问题 ([PR #3902](https://github.com/nearai/ironclaw/pull/3902))，保障了主干分支的稳定性。
    *   重构了文件系统凭据存储的 CAS 重试逻辑，大幅消除冗余代码 ([PR #3880](https://github.com/nearai/ironclaw/pull/3880))。

## 4. 社区热点
今日讨论最热烈、参与度最高的议题主要集中在底层架构设计与 Beta 功能的拆解上：

*   **[#3702 Reborn 二进制端到端测试框架规划](https://github.com/nearai/ironclaw/issues/3702)** (4 条评论)：核心贡献者 `henrypark133` 发起的关于重新修订 Rust 集成测试框架的讨论，旨在对齐主代理循环与 Reborn 的测试覆盖率，反映了团队对重构期代码质量的严格把控。
*   **[#3623 WebUI Beta BeforeInboundPolicy 切片](https://github.com/nearai/ironclaw/issues/3623)** (3 条评论)：虽然已关闭，但围绕如何在产品工作流中安全拦截/重写用户消息的策略缝 discussed 值得关注。

## 5. Bug 与稳定性
项目目前处于大规模重构期，暴露出部分集成和测试层面的不稳定性：

*   **🔴 [严重] Nightly E2E 定时任务失败**：自动构建报告显示夜间 E2E 测试失败 ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447))，涉及 v2-engine 核心链路，需核心团队优先干预。
*   **🟡 [中等] Subagent 阻塞恢复漏洞**：在实现子代理生成的 PR 时，发现了阻塞模式下父代理在子代理完成后无法正常恢复的集成缺口 ([Issue #3875](https://github.com/nearai/ironclaw/issues/3875))。该 Bug 已在 Draft PR #3872 中得到解决。

## 6. 功能请求与路线图信号
今日涌现了大量标志性功能请求和设计，揭示了项目未来几个月的清晰路线图：

*   **⭐ 自动化触发器**：`henrypark133` 提出引入基于 Cron 任务的 Trigger Loop 设计 ([Issue #3873](https://github.com/nearai/ironclaw/issues/3873))，允许 IronClaw 定时执行总结邮件等主动任务，将 AI 从被动响应转向主动代理。
*   **⭐ 原生 Google 扩展生态**：一系列旨在集成 Google 服务的 PR 被提出，包括底层 OAuth 基石 ([PR #3893](https://github.com/nearai/ironclaw/pull/3893))、Google Calendar 封装 ([PR #3897](https://github.com/nearai/ironclaw/pull/3897)) 和 Gmail 集成 ([PR #3898](https://github.com/nearai/ironclaw/pull/3898))，这标志着 Reborn 正式开启主流 SaaS 工具的原生集成阶段。
*   **企业级集成规划**：新增了关于 Slack ProductAdapter MVP ([Issue #3857](https://github.com/nearai/ironclaw/issues/3857)) 与企业微信支持 ([PR #2394](https://github.com/nearai/ironclaw/pull/2394)) 的讨论，多渠道支持指日可待。

## 7. 用户反馈摘要
从今日的 Issues 和 PRs 提炼出以下核心开发与使用痛点：

*   **云-本地互操作性需求强烈**：`henrypark133` 提出的本地文件/MCP桥接守护进程 ([Issue #2117](https://github.com/nearai/ironclaw/issues/2117)) 凸显了当前架构下云端部署无法无缝读取用户笔记本本地数据（如 Obsidian 库）的痛点。
*   **安全边界与权限控制**：多位贡献者在推进凭据、机密管理时，强调了“权限最小化”和“不向模型暴露明文 Token”的强烈诉求 ([PR #3865](https://github.com/nearai/ironclaw/pull/3865), [Issue #3882](https://github.com/nearai/ironclaw/issues/3882))。
*   **架构拆解诉求**：随着功能堆叠，核心执行文件如 `executor.rs` 已超出架构指南规定的体量，开发者明确要求进行模块化拆分以降低维护成本 ([Issue #3871](https://github.com/nearai/ironclaw/issues/3871))。

## 8. 待处理积压
*   **本地文件桥接 ([Issue #2117](https://github.com/nearai/ironclaw/issues/2117))**：自 4 月初开启以来仅有 1 个赞，尚未有明确的 Assignee 或排期。但考虑到其对云原生部署的关键阻碍作用，建议维护团队尽早评估。
*   **大量 Draft PR 堆积**：目前有超过 33 个 PR 处于待合并状态，其中包含多个 XL 体积的基础架构重构（如 [PR #3863](https://github.com/nearai/ironclaw/pull/3863), [PR #3867](https://github.com/nearai/ironclaw/pull/3867)）。建议维护团队切分精力，避免长生命周期分支导致的合并地狱。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-23)

## 1. 今日速览
LobsterAI 在过去24小时内保持了**极高的开发活跃度**，核心开发团队（@fisherdaddy, @btc69m979y-dotcom）正在密集推进功能迭代。项目今日顺利发布了 `2026.5.22` 新版本，并且合并了多达 12 个 Pull Requests。从 PR 的提交记录来看，当前的开发重心高度聚焦于**Subagent（子智能体）架构的完善**、**Artifacts 预览**以及 **Cowork 引擎的稳定性提升**。此外，安全向和社区向的 5 个 PR 正在等待核心团队 Review，生态依赖升级工作也在稳步推进中。

## 2. 版本发布
- **[Release] LobsterAI 2026.5.22** ([查看详情](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.22))
  - **更新内容**：此版本作为 `2026.5.19` 发版计划的一部分，主要带来了子智能体会话的侧边栏展示和独立详情视图，同时新增了模型自定义参数以及 thinking block 的显示支持。
  - **破坏性变更/迁移注意**：暂未发现破坏性变更。但在新版发布 PR #2038 中提到了对数据库层面的调整，建议从旧版升级的用户留意应用启动时的本地 SQLite 数据自动迁移。

## 3. 项目进展
今日共有 12 个 PR 被合并/关闭，项目在核心功能完善和缺陷修复方面取得了实质性进展，整体代码质量与架构复用性显著提升：

- **架构重构与复用**：[#2030](https://github.com/netease-youdao/LobsterAI/pull/2030) 提取了主对话渲染管线为独立的 `ConversationTurnsView` 组件，使得子智能体详情页能够复用主界面的渲染逻辑，大幅提升了代码一致性。
- **本地持久化与性能**：[#2034](https://github.com/netease-youdao/LobsterAI/pull/2034) 引入了 `subagent_messages` 本地 SQLite 表，子智能体消息首次拉取后自动落盘，后续查看实现无网络请求的秒开体验。
- **Bug 修复与体验优化**：
  - 修复了子智能体会话同步丢失工具调用结果的问题 ([#2033](https://github.com/netease-youdao/LobsterAI/pull/2033))。
  - 修复了重复子智能体覆盖问题，采用 `toolCallId` 替代 `agentId` 作为唯一标识 ([#2029](https://github.com/netease-youdao/LobsterAI/pull/2029))。
  - 修复了自定义模型切换报错 ([#2032](https://github.com/netease-youdao/LobsterAI/pull/2032)) 和浏览器配置失效 ([#2031](https://github.com/netease-youdao/LobsterAI/pull/2031)) 的问题。
- **UI/UX 交互**：[#2027](https://github.com/netease-youdao/LobsterAI/pull/2027) 优化了 Mac 端的窗口控件遮挡问题并支持了头部拖拽移动；[#2037](https://github.com/netease-youdao/LobsterAI/pull/2037) 和 [#2028](https://github.com/netease-youdao/LobsterAI/pull/2028) 分别优化了 IM 相关的文案和 UI 细节。

## 4. 社区热点
今日社区最值得关注的讨论是围绕**底层网关事件机制**的架构诉求：
- **[Issue #2036] 给 OpenClaw gateway 提 issue 或 PR** ([链接](https://github.com/netease-youdao/LobsterAI/issues/2036))
  - **诉求分析**：用户/贡献者 `woxinsj` 提出希望底层网关支持 `agent:turn` 或 `agent:loop` 事件广播。这一诉求直击目前多智能体（Subagent）协作的痛点——“实时落盘”。目前的架构可能是在会话结束后才统一落盘，若要实现真正的实时状态同步与持久化，底层的网关协议必须支持事件轮次级别的监听。这反映了用户对多智能体执行长任务时的高可靠性要求。

## 5. Bug 与稳定性
今日报告的 Bug 和安全风险主要集中在以下几个维度，部分历史 PR 需引起重视：
1. **【高严重度】内核安全与凭证泄露风险**：
   - **[PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534) (OPEN)**：发现 API 代理日志在 `info` 级别明文打印完整 URL（含敏感参数）和完整响应体，存在凭证泄露风险。该 PR 提供了修复方案但尚未合并。
   - **[PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535) (OPEN)**：渲染进程可通过 IPC 读写任意 KV Store（包含 `auth_tokens` 等敏感信息），存在越权漏洞。该 PR 提出了键白名单限制方案，亟待合入主干。
2. **【中严重度】多智能体执行状态丢失**：
   - 如前文 #2036 所述，当前架构暂不支持单轮循环落盘。虽然应用层已在 #2033 修复了工具结果显示的 Bug，但底层的长任务丢失风险仍需底层网关配合。

## 6. 功能请求与路线图信号
综合今日的 Issue 动态与活跃的待审 PR，可以洞察出项目的后续路线图信号：
1. **本地数据分析能力**：**[PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533)** 旨在通过本地 SQL 聚合查询提供“会话使用统计面板”。结合此次发版的“模型自定义参数”功能，表明项目正在向**高度可视化和量化的个人/企业 AI 运营工作台**演进。
2. **UI 定制化**：**[PR #1531](https://github.com/netease-youdao/LobsterAI/pull/1531)** 提出了重构主题色选择器，表明社区对个性化 UI 细节的需求在上升。
3. **判断预测**：安全相关的 #1534 和 #1535 优先级极高，预计将在下一版本合入。OpenClaw 网关的改造(#2036)可能标志着下一个大版本的核心攻坚方向。

## 7. 用户反馈摘要
从 Issue 评论和 PR 描述中提炼出的核心用户痛点包括：
- **长任务容忍度低**：用户在使用 Subagent 执行复杂任务时，极度渴望看到“实时”的过程和结果，无法接受网络重连导致的会话丢失，这直接催生了对底层事件广播的需求。
- **重型依赖库升级引发的关注**：Dependabot 提交了多个核心前端库的升级（如 React 19、Vite 8、Electron 42），社区和开发者对底层框架大版本升级可能引入的兼容性回归问题保持高度警惕。

## 8. 待处理积压
以下重要 PR 已有较长时间未获回应，建议维护团队及时跟进：
- **严重安全风险积压**：
  - 日志凭证泄露修复 ([PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534))：已停滞 45 天。
  - 渲染进程越权漏洞修复 ([PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535))：已停滞 45 天。
- **核心依赖积压 (由 Dependabot 提交)**：
  - React 升级至 19.x ([PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764))
  - Vite 升级至 8.x ([PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766))
  - Electron 升级至 42.x ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277))
  *注：上述前端基建的大版本升级包含大量破坏性更新，且由于积压时间较长，可能存在合并冲突，建议团队设立专项集中解决。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-23)

## 1. 今日速览
Moltis 项目在过去 24 小时内展现了极高的开发活跃度与出色的 Issue 解决效率。团队今日一口气合并/关闭了 **9 个 Pull Requests**，成功清空了当前的 PR 待合并池，并同步关闭了 **7 个 Issues**。开发重心主要集中在提升 **Docker 容器化部署的稳定性**（沙箱、文件读取）以及完善 **多模态与语音交互体验**（文件上传、TTS 格式兼容）。目前仅剩 1 个新报 Bug 处于 Open 状态，项目整体健康度极佳，迭代推进十分迅速。

## 2. 版本发布
过去 24 小时内无新版本发布。鉴于今日积累了大量核心功能与 Bug 修复的合并，预计近期可能会发布一次包含 Docker 沙箱修复、UI 附件上传和 TTS 兼容性改进的迭代版本。

## 3. 项目进展
今日共更新 9 个 PR，且全部已合并/关闭（待合并积压清零），标志着项目在多个关键模块取得了实质性进展：

- **Docker 与沙箱稳定性大幅增强**：
  - [PR #1040](https://github.com/moltis-org/moltis/pull/1040)：修复了 Docker 环境下沙箱读取媒体文件的路径转换问题，解决容器内文件不可见的报错。
  - [PR #1035](https://github.com/moltis-org/moltis/pull/1035)：引入了 Docker/Podman 挂载路径的自动检测机制，极大优化了复杂容器部署环境下的兼容性。
- **语音与电话交互完善**：
  - [PR #1043](https://github.com/moltis-org/moltis/pull/1043)：重构了 Piper TTS 的音频处理逻辑，规范了 WAV/PCM 格式输出。
  - [PR #1041](https://github.com/moltis-org/moltis/pull/1041)：将 OpenAI 兼容 TTS 的输出格式从 `opus` 调整为 `mp3`，修复了 Speaches 等自建 TTS 服务器的兼容性问题。
  - [PR #1034](https://github.com/moltis-org/moltis/pull/1034)：修复了 Twilio 语音通话中，用户说话无法触发 AI 回复（Gather 解析错误）的严重缺陷。
- **智能体能力与多模态升级**：
  - [PR #1044](https://github.com/moltis-org/moltis/pull/1044)：让 Agent 能够直接访问本地的 Moltis 文档，提升了 Agent 开箱即用的自我认知与工具使用能力。
  - [PR #1042](https://github.com/moltis-org/moltis/pull/1042)：在 Web UI 中支持了任意格式文件的附件上传，补齐了多模态交互的重要拼图。
- **安全与依赖项**：
  - [PR #1033](https://github.com/moltis-org/moltis/pull/1033)：允许在特定环境下通过 UI/API 关闭 Vault 静态加密，提供更灵活的部署选择。
  - [PR #1039](https://github.com/moltis-org/moltis/pull/1039)：Bot 自动升级了 OpenSSL 依赖以保障系统安全。

## 4. 社区热点
今日讨论最密集的问题是关于 Docker 部署下浏览器沙箱失效的探讨，同时语音通话和本地文档访问也备受关注：

- 🔥 **[Issue #977](https://github.com/moltis-org/moltis/issues/977) [Bug]: Browser sandbox fails when Moltis runs in Docker** (5条评论)
  - **分析**：这是一个经典的基础架构痛点。用户在 Proxmox (LXC) 嵌套 Docker 的复杂环境下挂载 Socket 运行浏览器沙箱时遭遇失败。高密度的讨论反映了社区对 Moltis 自动化工具在隔离环境中稳定运行的强烈诉求。
- 💬 **[Issue #1028](https://github.com/moltis-org/moltis/issues/1028) [Feature]: Agent should have access to Moltis docs OOTB** (2条评论)
  - **分析**：用户希望 Agent 能开箱即用地查阅官方文档。这暴露出当前 Agent 在处理复杂任务时缺乏对自身系统参数的了解，该诉求已在今日的 [PR #1044](https://github.com/moltis-org/moltis/pull/1044) 中得到完美实现。

## 5. Bug 与稳定性
今日报告并处理的 Bug 涵盖了 UI、语音网关和容器化部署，大部分已得到即时修复：

1. 🟡 **中优先级 | [Issue #1045](https://github.com/moltis-org/moltis/issues/1045) 亮色模式代码高亮失效** (状态: Open)
   - 现象：UI 亮色模式下，代码块失去语法高亮，影响基础阅读体验。暂无关联 Fix PR。
2. 🔴 **高优先级 | [Issue #1032](https://github.com/moltis-org/moltis/issues/1032) 电话通话无响应** (状态: Closed)
   - 现象：通过 Twilio 拨打语音电话时，Agent 会打招呼，但随后无视用户的语音输入。
   - 进展：已由 [PR #1034](https://github.com/moltis-org/moltis/pull/1034) 修复并合并。
3. 🟠 **中高优先级 | [Issue #1037](https://github.com/moltis-org/moltis/issues/1037) Docker 中图片发送失败** & **[Issue #977](https://github.com/moltis-org/moltis/issues/977) 沙箱失效** (状态: Closed)
   - 现象：容器化隔离环境导致路径映射错误，产生空流或目录无法创建。
   - 进展：已由 [PR #1040](https://github.com/moltis-org/moltis/pull/1040) 和 [PR #1035](https://github.com/moltis-org/moltis/pull/1035) 解决。
4. 🟢 **低优先级 | [Issue #1030](https://github.com/moltis-org/moltis/issues/1030) TTS 格式强制 Opus 报错** (状态: Closed)
   - 进展：已由 [PR #1041](https://github.com/moltis-org/moltis/pull/1041) 解决，改为向下兼容的 MP3。

## 6. 功能请求与路线图信号
今日多个功能请求伴随着 PR 迅速落地，揭示了项目近期的演进方向：

- **多模态交互进阶**：[Issue #1036](https://github.com/moltis-org/moltis/issues/1036) 提出的 Web UI 任意文件附件上传功能，已通过 [PR #1042](https://github.com/moltis-org/moltis/pull/1042) 合并。这表明 Moltis 正从“文本/图像对话”向“全格式文档分析”的超级助手演进。
- **语音管道精细化**：[Issue #1029](https://github.com/moltis-org/moltis/issues/1029) 建议在底层直接处理 Piper TTS 音频，已被 [PR #1043](https://github.com/moltis-org/moltis/pull/1043) 采纳。
- **预测**：下一阶段，项目团队可能会将重心放在 **UI 细节打磨（如 #1045 亮色模式适配）** 以及 **更深层次的智能体工作流支持** 上。

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提取出以下典型的用户画像与真实痛点：

- **Homelab 玩家/自托管爱好者**：大量用户选择在 Proxmox 环境下使用 Docker/LXC 部署 Moltis，并接入 Twilio、Speaches 等自建服务。他们容易受到容器挂载权限、网络隔离带来的兼容性折磨（如 #977, #1037）。今日针对此场景的集中修复将大幅提升这批核心开发者的好感度。
- **对话体验的追求者**：用户期望拥有类似 ChatGPT 的无缝体验（如拖拽文件上传 #1036），同时对于界面细节（亮色模式无高亮 #1045）非常敏感。
- **Agent 智能化的期待**：用户希望 AI 助手不仅是工具的调用者，还能具备自我学习的能力（如请求查询自身文档 #1028）。

## 8. 待处理积压
当前积压清理非常高效，仅存在 1 个待处理问题，但需引起 UI 维护者的注意：

- 🛠️ **[Issue #1045](https://github.com/moltis-org/moltis/issues/1045) [Bug] 亮色模式缺少语法高亮**：这是今日唯一新开且未解决的问题。虽然不影响核心功能，但作为常见的界面瑕疵，长期存在会降低第一印象，建议前端贡献者优先认领修复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🐾 CoPaw (QwenPaw) 项目动态日报 (2026-05-23)

> 数据来源：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) | 分析周期：过去 24 小时

## 1. 今日速览

CoPaw 项目今日保持着**高活跃度与健康的迭代节奏**。过去 24 小时内，社区共产生了 24 条 Issue 更新（新开/活跃 17，关闭 7）和 23 条 PR 更新（待合并 13，已合并/关闭 10）。项目当前处于功能快速扩展与多渠道稳定性打磨的并行阶段，Contributors 积极响应社区反馈，在微信通道、多模型兼容性以及桌面端体验上输出了大量修复。整体来看，项目社区互动频繁，核心缺陷修复迅速，生态插件机制正在逐步完善。

## 2. 版本发布

**无新版本发布。**
*(注：大量针对 v1.1.8.post1 的 Bug 修复 PR 已于今日合并，预计近期将发布 v1.1.8.post2 或 v1.1.9 版本进行集中修复。)*

## 3. 项目进展

今日共有 **10 个 PR 被合并或关闭**，显著提升了多渠道通信的稳定性和第三方模型的兼容性，重点推进了以下模块：

- **多渠道通信稳定性 (WeChat / DingTalk)**：
  - [PR #4627](https://github.com/agentscope-ai/QwenPaw/pull/4627)：修复了微信通道中实例级别的 token 无效标志，改为按请求级别的标志，避免了跨请求干扰导致的消息静默丢失。
  - [PR #4618](https://github.com/agentscope-ai/QwenPaw/pull/4618)：优化了微信 iLink API 上下文 Token 失效时的处理逻辑，静默跳过后续发送而非抛出异常中断对话。
  - [PR #4600](https://github.com/agentscope-ai/QwenPaw/pull/4600)：修复了钉钉通道发送文件时，中文文件名被错误 percent 编码的问题。
- **模型兼容性 (Gemini)**：
  - [PR #4621](https://github.com/agentscope-ai/QwenPaw/pull/4621)：修复了 Gemini/Gemma 模型因 `max_tokens` 参数不兼容导致的 Pydantic 验证崩溃问题。
- **自动化与定时任务**：
  - [PR #4434](https://github.com/agentscope-ai/QwenPaw/pull/4434)：合并了定时任务执行前自动清理上下文的选项，提升了自动化任务的纯度。
- **UI 体验修复**：
  - [PR #4626](https://github.com/agentscope-ai/QwenPaw/pull/4626)：修复了 QwenPaw Desktop 宠物组件在连续对话时卡在 "Done" 状态的阻塞 Bug。

## 4. 社区热点

今日社区讨论焦点主要集中在**聊天历史丢失**、**多模型思考过程解析**以及**插件生态扩展**上：

- **🔥 [Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) [Bug]: Chat history disappeared.**
  - **热度**：12 条评论
  - **分析**：用户反馈在切换会话时经常发生聊天记录丢失。由于该问题属于核心交互体验且存在时间较长，引发了社区的广泛共鸣。目前尚在排查中，亟待官方复现与确认。
- **🔥 [Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) [Question]: deepseek模型的think内容解析问题**
  - **热度**：10 条评论
  - **分析**：DeepSeek v4 Flash 的 `think` 标签解析异常导致内容未正常展示。这反映了用户对于不同厂商模型（特别是带思维链能力的模型）接入时解析兼容性的高度关注。
- **🔥 [Issue #4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) [Question]: 现在支持chatgpt-5.5吗？**
  - **热度**：8 条评论
  - **分析**：用户尝试配置最新模型未果，说明项目在头部模型上市时的适配速度及默认模型列表更新上有一定滞后。

## 5. Bug 与稳定性

今日报告了多个影响使用的 Bug，根据严重程度排列如下：

- **P0 (严重 - 功能不可用/数据丢失)**：
  - 📛 [Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)：聊天历史记录随机丢失。*(尚无对应 Fix PR)*
  - 📛 [Issue #4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)：配置了 `NO_PROXY` 环境变量无效，网络请求依然走代理，导致部分内网环境不可用。*(尚无对应 Fix PR)*
- **P1 (较高 - 特定模型/通道不可用)**：
  - 📛 [Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)：MiniMax-M2.5 思考过程返回 XML 格式导致解析不兼容，问答中断。*(尚无对应 Fix PR)*
  - 📛 [Issue #4611](https://github.com/agentscope-ai/QwenPaw/issues/4611)：ACP 会话在任务完成后未自动关闭，导致下次启动时出现重复会话冲突。*(已有对应修复 [PR #4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) 提交)*
  - 📛 [Issue #4605](https://github.com/agentscope-ai/QwenPaw/issues/4605)：Gemini 模型调用崩溃。*(已通过 [PR #4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) 修复并合并)*
- **P2 (中等 - UI/边缘场景)**：
  - 📛 [Issue #3984](https://github.com/agentscope-ai/QwenPaw/issues/3984)：上下文压缩可能导致前端 UI 出现孤立的助手消息。

## 6. 功能请求与路线图信号

社区今日提出了多项高质量的功能请求，结合当前待合并的 PR，预示了项目近期的迭代方向：

- **插件生态与生命周期**：
  - 用户请求注册 Agent Hook 的能力 ([Issue #4613](https://github.com/agentscope-ai/QwenPaw/issues/4613))。
  - **跟进**：社区已提交 [PR #4638](https://github.com/agentscope-ai/QwenPaw/pull/4638) 实现了 Session 和 Message 的生命周期 Hook，这将极大地增强插件的后端干预能力。
- **多行文本与持久化工具**：
  - 用户指出 Agent 框架缺乏可靠的多行文本写入工具，导致 Skill 开发和脚本保存受阻 ([Issue #4632](https://github.com/agentscope-ai/QwenPaw/issues/4632))。这是底层工具链的重大缺失，预计将被高优纳入排期。
- **精细化模型控制**：
  - 用户提出按不同模型独立配置重试与并发限流策略 ([Issue #4624](https://github.com/agentscope-ai/QwenPaw/issues/4624))。随着用户接入多模型需求的增加，全局配置已无法满足生产环境诉求。
- **UI/UX 增强**：
  - [PR #4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) 实现了可自定义的斜杠命令快捷菜单，响应了 [Issue #4633](https://github.com/agentscope-ai/QwenPaw/issues/4633) 的诉求。
  - 用户请求移动端 WebUI 响应式设计 ([Issue #4635](https://github.com/agentscope-ai/QwenPaw/issues/4635)) 和 Desktop 窗口尺寸记忆功能 ([Issue #4634](https://github.com/agentscope-ai/QwenPaw/issues/4634))。
- **浏览器工具隔离**：
  - 请求支持配置远程 Playwright 浏览器端点以节省本地资源 ([Issue #4617](https://github.com/agentscope-ai/QwenPaw/issues/4617))。

## 7. 用户反馈摘要

从今日的 Issue 描述与互动中，可以提炼出以下真实用户画像与痛点：
1. **重度依赖多模型混合调度**：生产用户正在同时使用 DeepSeek v4、MiniMax M2.5/M2.7 以及 ChatGPT-5.5 等模型，对框架层面的模型参数适配（如 `max_tokens`，`think` 标签，多模态支持）提出了极高要求。
2. **消息通道的一致性期望**：使用钉钉、微信个人号进行自动化办公的用户群体庞大。目前 API 返回“成功”但消息未送达（或文件名乱码）的情况严重损害了信任度，用户迫切需要通道的“Exactly-once”或明确的失败反馈。
3. **自动化任务需要“纯净沙盒”**：用户在使用定时任务时，深受上下文历史残留的困扰，这促使了 "Clear Before Run" 功能的成功合入。

## 8. 待处理积压

- **[Issue #3984](https://github.com/agentscope-ai/QwenPaw/issues/3984)**：`context_check` 导致的孤立消息问题。该缺陷在 4 月底提出，长期未得到彻底解决，由于涉及底层的上下文压缩逻辑，对历史记录的展示有持续性影响，建议核心维护者重点关注。
- **[Issue #3707](https://github.com/agentscope-ai/QwenPaw/issues/3707)**：MiniMax M2.7 模型硬编码不支持和多模态问题。虽然已有 PR 修复，但长期处于未合并状态，限制了多模态场景的拓展。
- **庞大的 PR 积压**：目前仍有 13 个待合并 PR，其中包括具有重大架构意义的统一权限控制重构 [PR #4565](https://github.com/agentscope-ai/QwenPaw/pull/4565)、大型测试覆盖集 [PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) 以及 Tauri 桌面端支持 [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)。这些重磅 PR 的审核与合并速度将直接决定 CoPaw 下一阶段的生态繁荣度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目保持着**高度活跃**的开发与社区反馈节奏。项目共处理了 31 条 Issue（新开/活跃 26 条，关闭 5 条）和 50 条 Pull Request（待合并 41 条，合并/关闭 9 条），显示出核心团队正在高速推进 v0.8.0 的集成工作。今日最大的亮点是**全新 TUI (终端用户界面) 架构的集中落地**，伴随多个相关核心 PR 和 Issue 的涌现。此外，多渠道集成（特别是 WhatsApp 和 Telegram）和 Windows 环境的稳定性依然是社区反馈的高频痛点。虽然今日无新版本发布，但大量底层重构和 RPC 传输层的引入预示着项目正在为下一个 major release 蓄力。

## 2. 版本发布
**无新版本发布**。项目当前正处于针对 v0.8.0 的密集开发与集成阶段。

## 3. 项目进展
今日没有合并主分支的重量级 PR，但核心团队和贡献者提交了大量关键的改进和修复，项目整体在多渠道兼容性和可观测性上迈进了坚实的一步：

*   **OTel 可观测性增强 ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009))**： enrich OTel tool spans with gen_ai.tool.* semantic convention attrs。该 PR 丰富了工具调用的追踪链路，让开发者在 Grafana/Tempo 中能更好地监控 Agent 工具的执行细节，呼应了 [Issue #5980](https://github.com/zeroclaw-labs/zeroclaw/issues/5980) 的诉求。
*   **WhatsApp 协议修复 ([PR #6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706))**：将底层依赖升级至 `whatsapp-rust 0.6`，修复了因协议不匹配导致的消息收发问题。
*   **Matrix 流式响应状态隔离 ([PR #6735](https://github.com/zeroclaw-labs/zeroclaw/pull/6735))**：修复了 Matrix 频道流式输出时的状态串扰问题。
*   **架构优化与文档更新**：包括将 TUI 从 `crates/` 迁移至 `apps/` 的前置工作、修复树莓派部署脚本的硬编码用户名问题 ([PR #6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804))，以及为贡献者新增的架构地图文档 ([PR #6853](https://github.com/zeroclaw-labs/zeroclaw/pull/6853))。

## 4. 社区热点
今日社区讨论最密集的方向集中在 **TUI 生态架构** 以及 **底层调度机制**：

*   🔥 **最高讨论度：MCP 工具过滤失效与延迟加载缺陷 ([Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699))**
    该 Issue 引起了 6 条深入讨论。核心在于 `[agent] tool_filter_groups` 在真实 MCP 工具调用时完全没有生效（前缀校验 Bug），且未与 deferred_loading 集成。这是一个高风险级别的 P1 缺陷，直接影响生产环境下 Agent 工具调用的安全性和精确度。
*   🏗 **RFC: 工作流泳道与看板自动化 ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))**
    社区核心贡献者提议对 Issue/PR 引入泳道机制，这反映出随着项目规模扩大，纯手动管理 Issue 的负担加重，社区治理机制正在寻求进化。
*   🧠 **ACP 协议扩展：差异化显示与文件交互 ([Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820))**
    针对 TUI 和 Web 仪表盘，提议支持代码高亮对比和文件修改的交互式审批。这标志着 ZeroClaw 正在从“文本对话”向“沉浸式开发辅助”体验演进。

## 5. Bug 与稳定性
今日报告了多个阻断工作流的高危 Bug，特别是在多模态和渠道集成方面：

*   🔴 **S1 (高危): WhatsApp 渠道无法显示二维码 ([Issue #6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847))**
    *状态*：已接受。用户在 Onboard 阶段卡住，严重影响新用户转化。
*   🔴 **S1 (高危): 多模态图片路由静默失败 ([Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841))**
    *状态*：已接受。配置了专门的 `vision_provider`，但图片仍被静默路由到 fallback 模型，导致多模态处理失败。
*   🔴 **S1 (高危): Slack 环境变量注入失败 ([Issue #6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844))**
    *状态*：已接受。`bot_token` 无法通过环境变量传入，必须硬编码至配置文件，导致 Docker 和云原生部署的安全隐患与不便。
*   🟠 **S2 (中危): Windows 构建产物异常庞大 ([Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836))**
    *状态*：已接受。使用 `--minimal` 标志在 Windows 上构建，产物高达 26MB 而非预期的 6MB。

## 6. 功能请求与路线图信号
从近期的 Issues 提交可以清晰看出 ZeroClaw v0.8.0 的核心路线图信号：**本地化、去中心化与 Agent 内核解耦**。

*   🚀 **信号一：TUI 成为一等公民**。今日涌现了多个关于 TUI 的重大特性：Unix Socket RPC 传输层 ([Issue #6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837))、ACP 桥接 ([Issue #6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823))、以及不重启守护进程即可进行 Session 级参数覆盖 ([Issue #6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817))。配套的超大型集成 PR ([PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)) 已经提交。
*   🚀 **信号二：记忆系统架构升级**。提出了引入 `MemoryStrategy` trait 以将高层记忆生命周期策略与底层存储后端解耦 ([Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850))。这一旦合并，将极大地提升 Agent 长期记忆的灵活性。
*   🚀 **信号三：定制化与轻量部署**。新增了 Jina AI 作为网页搜索提供商 ([PR #6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833))，以及 Telegram 自定义 API 端点支持 ([Issue #6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807))。

## 7. 用户反馈摘要
从评论和 Issue 描述中，提炼出真实用户的核心体验反馈：

*   **云原生/容器化部署体验差**：Slack token 和其他敏感信息不支持环境变量，违背了 12-Factor App 原则，引发 DevOps 人员的强烈不满。
*   **Windows 平台支持薄弱**：除了构建体积异常外，非 UTF-8 编码环境下的 Shell 工具乱码问题 ([Issue #6704](https://github.com/zeroclaw-labs/zeroclaw/issues/6704)) 让东亚地区用户备受困扰。
*   **期待更强大的本地掌控感**：用户对 `--ephemeral` 守护进程模式 ([Issue #6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818)) 和文件上传协议 ([Issue #6819](https://github.com/zeroclaw-labs/zeroclaw/issues/6819)) 的讨论表现出浓厚兴趣，说明重度用户更倾向于使用 CLI/TUI 而非 Web 客户端来操作 Agent。
*   **正面反馈**：新用户认可项目整体的愿景和实现：“Best tool out there. Wishing way more stars.” ([Issue #6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847))。

## 8. 待处理积压
以下重要历史问题近期无实质进展或需维护者重点关注：

*   🚧 **代码回滚恢复审计 ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074))**：标记为 `help wanted`。此前因紧急回滚丢失了 153 个 commits，目前追踪恢复进度缓慢，需要社区协助认领。
*   ⏳ **ARM64 Docker 构建支持 ([PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187))**：自 4 月初提交以来一直停滞，目前标记为 `needs-author-action`。对于树莓派及 ARM 服务器用户是关键需求。
*   ⏳ **频道回复意图分类器优化 ([PR #5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979))**：旨在优化单机器人场景下不必要的意图分类 LLM 调用，以节省 Token 和延迟，但也处于等待作者修改状态。

</details>