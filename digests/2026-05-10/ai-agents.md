# OpenClaw 生态日报 2026-05-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-09 22:11 UTC

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

# OpenClaw 项目动态日报 (2026-05-10)

## 1. 今日速览

OpenClaw 在过去 24 小时内保持着**极高的社区活跃度**，共产生 500 条 Issue 更新和 500 条 PR 更新，其中新开或活跃 Issue 占比高达 87.4%（437条），关闭 Issue 仅 63 条。团队今日发布了 `v2026.5.9-beta.1` 测试版本，引入了智能体思考模式切换指令。项目目前处于**架构重构的深水区**，核心重构 PR（如 SQLite 数据库优先运行时 #78595）正吸引大量社区审查，同时 Docker 环境的稳定性、多渠道适配（Telegram/飞书/Slack）以及多智能体编排是当前社区关注的核心焦点。

---

## 2. 版本发布

### `v2026.5.9-beta.1` 发布
🔗 [Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.9-beta.1)

**主要更新：**
- **Chat commands**: 新增 `/think default` 和 `/fast default` 命令，允许清除当前会话的覆盖设置，恢复为全局配置/提供商默认值 (#79385)。感谢 @VACInc 贡献。
- **Dependencies**: 刷新工作区依赖项及 lockfile，包括 `@openai/codex` 升级至 `0.130.0`，`acpx` 升至 `0.7.0`，AWS SDK 更新至 `3.1044.0`。

**迁移注意事项：** 作为 beta 版本，核心依赖有较大更新。结合今日 PR #79651（清理旧的 Codex runtime pins）来看，使用 OpenAI/Codex 相关功能的用户在升级后若遇到 `Requested agent harness "codex" is not registered` 报错，需注意运行时策略已迁移至 provider/model 作用域。

---

## 3. 项目进展

今日共有 **194 条 PR 被合并或关闭**，另有 306 条待合并。以下是推进项目核心能力的重要 PR：

### 架构级重构（核心突破）
- **PR #78595** [Refactor runtime state into SQLite](https://github.com/openclaw/openclaw/pull/78595) — **今日最关键的架构 PR**。将 OpenClaw 从散落的 JSON、JSONL、旁路 SQLite、锁文件等方式，彻底迁移至类型化的 SQLite 存储模型（一个共享控制面数据库 + 每智能体一个数据面数据库）。影响范围涵盖几乎所有渠道和扩展。
- **PR #79971** [fix: tighten SQLite runtime truth in session refactor](https://github.com/openclaw/openclaw/pull/79971) — 对 #78595 的后续修补，修复了 SQLite 会话重构路径中的 5 个正确性缺陷。
- **PR #79934** [feat(sessions): add transcript projections](https://github.com/openclaw/openclaw/pull/79934) — 为 SQLite 会话记录添加类型化的安全投影接口，为伴侣应用提供确定性的读模型重建能力。

### 智能体能力增强
- **PR #79925** [feat: context-pressure-aware continuation](https://github.com/openclaw/openclaw/pull/79925) (XL) — 引入智能体**自主选举回合延续**机制 (`continue_work` / `continue_delegate` / `request_compaction`)，使持久化智能体能自主控制其执行周期，不再完全依赖外部事件触发。
- **PR #79990** [feat: add per-agent and per-cron-job provider request headers](https://github.com/openclaw/openclaw/pull/79990) (L) — 支持按智能体、按定时任务粒度配置 provider 请求覆盖（自定义 headers、auth、proxy 等）。

### 多渠道与运行时修复
- **PR #39617** [fix: reload config in slash command routing so dmScope is respected](https://github.com/openclaw/openclaw/pull/39617) — 修复 Discord/Telegram/Slack DM 中斜杠命令路由忽略 `dmScope` 配置的问题。
- **PR #39569** [fix(feishu): detect bot mention in reply messages](https://github.com/openclaw/openclaw/pull/39569) — 修复飞书回复消息中 @机器人 检测遗漏的问题。
- **PR #39372** [fix(spawn): allow mode="session" without thread=true](https://github.com/openclaw/openclaw/pull/39372) — 解除子智能体持久会话对 Discord 线程模式的强制依赖，扩展至所有渠道。
- **PR #38945** [fix(memory): Unicode support for MMR and FTS tokenizers](https://github.com/openclaw/openclaw/pull/38945) — 修复内存搜索分词器丢弃非 ASCII 字符的问题，**对中文等多语言用户至关重要**。
- **PR #38658** [fix(slack): retain channel history when requireMention is false](https://github.com/openclaw/openclaw/pull/38658) — 修复 Slack 渠道在非必须 @提及 模式下丢失历史上下文的 bug。
- **PR #69310** + **PR #69312** — 修复媒体处理静默失败和代码块误提取 MEDIA: 指令的问题。

### 开发体验
- **PR #79989** [feat(ui/i18n): wrap hardcoded Control UI chat strings](https://github.com/openclaw/openclaw/pull/79989) — 为 Web UI 添加中文国际化翻译。
- **PR #79993** [feat(tui): add --quiet-status flag](https://github.com/openclaw/openclaw/pull/79993) — 为终端 UI 添加安静模式，适配录制场景。

---

## 4. 社区热点

### 热议 Issue TOP 5

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|------|-------|------|----|----------|
| 1 | [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 容器中 Skill 安装因缺少 brew 失败 | 29 | 17 | Docker 镜像基础工具链缺失 |
| 2 | [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄露到消息渠道 | 26 | 0 | 智能体内部处理日志不应发给用户 |
| 3 | [#9443](https://github.com/openclaw/openclaw/issues/9443) 请求预构建 Android APK | 24 | 1 | 降低移动端用户使用门槛 |
| 4 | [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层加载 Bootstrap 文件 | 16 | 0 | 大工作区节省上下文窗口 token |
| 5 | [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon 重启竞态条件 | 16 | 0 | 进程孤儿和端口冲突 |

**分析：**
- **Docker 体验**是社区最大的痛点（#14593 以 17👍 29评论居首），用户在容器中运行时频繁遇到工具链缺失、权限、挂载等问题。今日多个相关 PR（#61203, #77549, #61464）正在集中改善此问题。
- **消息路由泄漏**（#25592）反映了智能体内部日志与面向用户输出的边界模糊，这对生产环境用户是严重的 UX 问题。
- **Token 开销优化**是高频话题（#22438 分层加载、#14785 工具 schema 开销约 3500 token/会话），表明重度用户对成本控制有强烈需求。

### 今日新增高活跃 Issue
- **#79902** [Add companion-friendly SQLite transcript/session seams](https://github.com/openclaw/openclaw/issues/79902)（10 评论）— 配合 #78595 重构，要求开放 SQLite 运行时状态接口。
- **#79531** [Telegram forum topic sessions intermittently stop responding](https://github.com/openclaw/openclaw/issues/79531)（8 评论）— Telegram 群组话题会话间歇性失联。

---

## 5. Bug 与稳定性

### 严重程度：高

| Bug | 状态 | Fix PR | 说明 |
|-----|------|--------|------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon SIGUSR1 重启竞态 | OPEN | 未发现 | 导致孤儿进程和发送失败 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) exec 工具不继承 skill 级环境变量 | OPEN 回归 | 未发现 | secrets 注入链断裂 |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) Windows 11 24H2 节点启动卡死 | OPEN | 未发现 | 中文用户报告，无法连接 Gateway |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) node:sqlite 缺少 FTS5 模块 | OPEN | 未发现 | 内存搜索关键词回退机制失效 |

### 严重程度：中

| Bug | 状态 | Fix PR | 说明 |
|-----|------|--------|------|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) Control UI 要求 HTTPS 安全上下文 | OPEN 回归 | 未发现 | VPS 部署用户无法使用 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) agentDir 下 Bootstrap 文件被静默忽略 | OPEN | 未发现 | 仅 workspace 目录文件被加载 |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) Webchat 头像端点 404 | OPEN 回归 | 未发现 | IDENTITY.md 头像配置失效 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) google-vertex/gemini 3.1 pro 崩溃 | OPEN 回归 | 未发现 | "Cannot convert undefined or null to object" |
| [#46080](https://github.com/openclaw/openclaw/issues/46080) Anthropic tool_result 成功但最终回复为空 | OPEN | 未发现 | 用户看到 "No reply from agent" |

### 已关闭的 Bug
- **#2597** [Context/state lost after unexpected compaction](https://github.com/openclaw/openclaw/issues/2597)（8 评论）— 上下文窗口用量不可见导致意外压缩和状态丢失。
- **#77869** [Feishu group chat: replies=0 despite successful dispatch](https://github.com/openclaw/openclaw/issues/77869)（8 评论）— 飞书群消息成功分发但无回复。
- **#79809** [Agent sessions lose autonomy after completing multi-step tasks](https://github.com/openclaw/openclaw/issues/79809)（7 评论）— 多步任务完成后智能体失去自主性。

**稳定性评估：** 回归问题占比较高（#31583, #32473, #38439, #38327 均标记为 regression），说明近期的快速迭代（特别是数据库重构）引入了兼容性风险，建议团队加强回归测试覆盖。

---

## 6. 功能请求与路线图信号

### 高信号需求（有对应 PR 推进，可能近期落地）

| 功能需求 | Issue | 对应 PR | 纳入概率 |
|----------|-------|---------|----------|
| SQLite 运行时状态开放 | [#79902](https://github.com/openclaw/openclaw/issues/79902) | [#78595](https://github.com/openclaw/openclaw/pull/78595), [#79971](https://github.com/openclaw/openclaw/pull/79971) | ✅ 极高 |
| 智能体自主回合延续 | 相关 | [#79925](https://github.com/openclaw/openclaw/pull/79925) | ✅ 高 |
| 按 Agent/Cron 的 Provider 配置 | 相关 | [#79990](https://github.com/openclaw/openclaw/pull/79990) | ✅ 高 |
| Docker macOS 运行时改善 | [#14593](https://github.com/openclaw/openclaw/issues/14593) 相关 | [#61203](https://github.com/openclaw/openclaw/pull/61203), [#61464](https://github.com/openclaw/openclaw/pull/61464) | ✅ 高 |
| Control UI 国际化 | [#79937](https://github.com/openclaw/openclaw/issues/79937) 相关 | [#79989](https://github.com/openclaw/openclaw/pull/79989) | ✅ 高 |
| 飞书健康监控 | 相关 | [#39489](https://github.com/openclaw/openclaw/pull/39489) | ✅ 高 |

### 热门需求（高 👍 但尚无 PR）

| 功能需求 | Issue | 👍 | 优先级判断 |
|----------|-------|----|-----------|
| 直接执行模式 Cron Jobs（绕过 LLM） | [#18160](https://github.com/openclaw/openclaw/issues/18160) | 9 | 高 — 成本和可靠性需求明确 |
| exec-approvals 拒绝名单 | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 7 | 高 — 安全基线需求 |
| 密钥遮蔽（Masked Secrets） | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 4 | 中高 — 安全防护 |
| 预构建 Android APK | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 1 | 中 — 移动端扩展 |

### 路线图信号分析
- **数据库优先架构**是当前最高优先级主线，#78595 的庞大规模（标记了几乎所有模块）表明团队正在进行一次全面的存储层现代化。
- **多智能体协作**方向有多条信号（#35203 RFC、#39476 A2A 消息去重、#27445 announceTarget 路由），但尚未形成统一方案。
- **安全加固**需求集中在密钥管理（#10659 遮蔽、#13610 原生 Vault 集成、#8719 安全配置文件）。

---

## 7. 用户反馈摘要

### 用户痛点
1. **Docker 部署体验碎片化** — 多个 Issue (#14593, #31331, #37634, #29736) 反映容器内路径映射、权限、工具链缺失、文件挂载等问题，是自托管用户的第一大困扰。
2. **Token 成本焦虑** — 重度用户 (#22438, #14785) 对 Bootstrap 文件全量加载和工具 Schema 固定开销（~3500 token/会话）表达不满，希望更精细的上下文预算控制。
3. **消息路由边界不清** — 智能体内部日志（#25592）、工具间文本意外泄漏到用户消息渠道，影响生产环境可用性。
4. **多渠道稳定性参差** — Telegram 话题会话断联 (#79531)、飞书群消息无回复 (#77869)、Signal 重启竞态 (#22676)、Slack 上下文丢失 (#38658) 均影响用户信任。
5. **Windows 支持** — #39038 反映 Windows 11 24H2 上节点启动卡死，非 Linux/macOS 用户面临兼容性门槛。

### 用户满意之处
- 数据库重构方向获得社区积极支持（#79902 迅速获得 10 条建设性讨论）。
- `/think default` / `/fast default` 命令的加入说明团队对用户反馈的快速响应。
- 飞书渠道的修复 PR 持续产出（#39569, #39523, #39489），显示中国用户生态受到重视。

---

## 8. 待处理积压

### 需要维护者关注的重要 Issue

| Issue | 打开天数 | 👍 | 状态 | 关注理由 |
|-------|---------|----|------|----------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker brew 缺失 | 86天 | 17 | 🔴 无响应信号 | 最高 👍 的 Bug，影响所有 Docker 用户 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) 密钥遮蔽 | 92天 | 4 | 🟡 讨论中 | 安全核心需求 |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) Cron 直接执行模式 | 83天 | 9 | 🔴 无响应信号 | 最高 👍 的功能请求 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 消息泄漏 | 74天 | 0 | 🔴 无响应信号 | 生产环境 UX 严重影响 |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal 竞态条件 | 77天 | 0 | 🔴 无响应信号 | 进程管理可靠性 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) exec 环境变量回归 | 72天 | 1 | 🔴 回归未修 | Secrets 功能链断裂 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) exec-approvals 拒绝名单 | 98天 | 7 | 🟡 讨论中 | 安全基线需求 |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) Control UI HTTPS 要求 | 68天 | 4 | 🔴 回归未修 | 影响 VPS 自部署用户 |

### 需

---

## 横向生态对比

基于 2026 年 5 月 10 日各大开源项目的社区动态数据，以下为您呈上个人 AI 助手与自主智能体领域的横向对比与技术生态分析报告。

---

### 1. 生态全景
当前开源 AI 智能体生态正处于**从“单体对话”向“多智能体协同与自主执行”跨越的深水区**。各项目正在经历高频的底层架构重构，以解决早期版本在状态持久化、多渠道适配和长上下文管理上的技术债。此外，支持多模型提供商（尤其是深度思考模型如 DeepSeek）的兼容性、MCP（Model Context Protocol）协议的深度集成，以及企业级安全与权限控制，已成为项目构建核心护城河的关键制胜点。

### 2. 各项目活跃度对比
以下为 2026-05-10 各项目的基础活跃数据与状态评估（按今日处理规模降序）：

| 项目名称 | Issues 动态 | PRs 动态 | 发版情况 | 健康度/所处阶段 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (437活跃) | 500 (306待合) | `v2026.5.9-beta.1` | ⚠️ 重构深水区，高活跃但积压多 |
| **ZeroClaw** | 50 (49活跃) | 45 (35待合) | 无 | ⚠️ 架构冲刺期，PR审查严重积压 |
| **CoPaw (QwenPaw)**| 42 (23活跃) | 30 (22已合) | **`v1.1.6`** 正式版 | ✅ 极佳，响应闭环率极高 |
| **NanoBot** | 13 (9已关) | 135 (30已合) | 无 | ✅ 健康，底层重构稳步推进 |
| **Hermes Agent** | 50 (31活跃) | 50 (37待合) | 无 | 🟡 维护期，修Bug为主 |
| **IronClaw** | 19 (18活跃) | 40 (22已合) | 无 (筹备大版) | ✅ 架构落地，底层基石浇筑中 |
| **NanoClaw** | 7 (6新开) | 22 (13已合) | 无 | ✅ 健康，高单测覆盖与横向扩展 |
| **PicoClaw** | 10 (8活跃) | 22 (9已合) | Nightly Build | ✅ 上升期，聚焦多智能体与MCP |
| **LobsterAI** | 0 | 13 (9已合) | **`2026.5.9`** 正式版 | ✅ 商业级迭代，重前端与协同 |
| **NullClaw** | 3 (3新开) | 3 (2已合) | Nightly Build | 🟡 兼容性受挫，需修复回归 |
| **Moltis** | 0 | 4 (2已合) | 无 | 🟡 慢速平稳演进 |
| **ZeptoClaw / TinyAGI**| 0 | 0 | 无 | ⚪ 静默 |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系**，OpenClaw 展现出极强的统治力，但也面临“大厂病”的挑战：
*   **社区规模与生态广度：** 日均近千条的 Issue/PR 交互量远超其他项目（甚至高于体量相近的 Hermes Agent）。在跨平台渠道（Telegram/飞书/Slack/Discord）支持上是最全面的。
*   **技术路线差异：** 相比于 CoPaw、LobsterAI 正在打磨前端 UI 或 Tauri 桌面端，OpenClaw 正在进行更为底层的**数据库优先架构重构（全面迁移至 SQLite）**。其引入的“自主选举回合延续”机制展现了迈向 Agent 自治的前瞻性。
*   **当前隐患（对比劣势）：** 架构重构导致回归问题频发（如 Windows 卡死、内存搜索失效、JSON文件静默被忽略）。相比之下，CoPaw 和 NanoClaw 在保持高频迭代的同时，核心模块的稳定性控制得更好。Docker 碎片化体验是其当前最大的用户痛点。

### 4. 共同关注的技术方向
通过交叉比对各项目动态，以下技术需求正在呈全局性爆发：
1.  **深度思考模型的上下文治理**：随着具备 `reasoning_content`（如 DeepSeek、GLM）的模型普及，上下文解析频频出错。
    *   *涉及项目：* OpenClaw, Hermes Agent, IronClaw, CoPaw, PicoClaw。核心诉求为：网关需正确透传/回显推理块，否则会导致 400 报错或思考链泄漏给用户。
2.  **多智能体/ 任务编排架构落地**：
    *   *涉及项目：* PicoClaw (Layer 1 相互发现), ZeroClaw (v0.8.0 架构), IronClaw (Reborn 调度器), NanoClaw (跨组委派)。核心诉求为：多 Agent 下的独立工作空间、路由隔离和状态防篡改。
3.  **MCP (Model Context Protocol) 长连接与兼容性**：
    *   *涉及项目：* PicoClaw (支持 OAuth 2.1 + Streamable HTTP), CoPaw (修复后台任务生命周期泄漏), NanoClaw。核心诉求：解决 MCP 工具集加载过多导致的 Token 溢出与内存泄漏。
4.  **安全与权限隔离机制**：
    *   *涉及项目：* Hermes (SSRF 修补), NullClaw (监督模式), PicoClaw (细粒度 Allow/Deny), IronClaw (跨租户数据防泄漏)。核心诉求：建立高危指令的人机审批闭环及多租户环境下的数据隔离。

### 5. 差异化定位分析
*   **重前端与全栈场景：LobsterAI vs CoPaw**
    *   这两款带有浓厚“国产”背景的项目表现出高度一致的产品化倾向。都着重于 Web 端的流畅度（分页加载、长会话优化）、企业IM（企微、飞书）的深度集成，以及类似 Artifacts 和文件预览等“开箱即用”特性。
*   **底层基建与硬核重构：OpenClaw vs IronClaw**
    *   两者都在进行史诗级的架构重构（OpenClaw 引入共享控制面 SQLite，IronClaw 推进 Reborn 调度器）。它们更倾向于做 PaaS 层的底座，而非单一的桌面端应用。
*   **主打轻量与插件化：NanoBot vs NanoClaw vs PicoClaw**
    *   NanoBot 通过引入状态机与 HookCenter 稳固单机版运行时的健壮性；
    *   NanoClaw 在强化容器化隔离和打造 Agent 的“应用商店”生态；
    *   PicoClaw 则敏锐地卡位了前沿 MCP 协议的深度集成。它们更适合极客和轻量级私有化部署。

### 6. 社区热度与成熟度
*   **快速迭代与质量巩固期（CoPaw, NanoBot, LobsterAI, NanoClaw）：** 处于最高性价比的投入期。Issue 闭环率极高（如 CoPaw 关闭了 19/42 个 Issue），PR 合并不拖泥带水，核心功能（如 CoPaw 修复 MCP 18GB 内存泄漏）迅速落地。
*   **架构重构的阵痛期（OpenClaw, IronClaw, ZeroClaw）：** 社区热度极高，但代码合并极为谨慎。OpenClaw 有超 300 个 PR 待合并，ZeroClaw 有 35 个 PR 积压。它们在重构期不可避免地引入了底层回归 Bug，正在努力恢复到“重构前的稳定状态”。
*   **平稳演进与维护期：** 其他项目处于功能按需添加的阶段。

### 7. 值得关注的趋势信号（开发者参考）
1.  **“网关化” 与 “状态剥离” 是必然趋势：** AI 智能体正在从“无状态的 API 代理”演变为“重状态的微服务”。直接将状态从零散的 JSONL/内存迁移至关系型数据库或专用控制面（OpenClaw, IronClaw 动作），将为未来应对千万级上下文和调度打下基础。
2.  **长文本/重上下文引发的工程危机：** 用户在超 200 轮对话下遭遇前端 UI 崩溃（CoPaw Issue），以及重度加载工具导致的系统卡顿。未来 AI 工程师需高度重视**虚拟列表渲染、上下文预算分配以及后台服务生命周期的精细化控制**。
3.  **多智能体的权限边界设计刻不容缓：** 当智能体拥有派生子 Agent 的能力时（ZeroClaw 暴露的“任意 Agent 可删除其他 Agent 会话”漏洞），在底层引入类似 OS 级别的 ugo 权限控制、IaC 审批流策略将变得极其关键。
4.  **本地模型路由的精细化：** 随着 Ollama/vLLM 本地部署的普及，开发者强烈要求 Agent 网关具备动态模型切换和基于性价比的 Pareto 路由能力，这将显著降低重度用户的 Token 成本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-05-10 动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-10)

## 1. 今日速览
过去 24 小时，NanoBot 项目保持着**极高的开发活跃度与社区热度**，全天处理了 135 个 PR 更新（其中 30 个已合并/关闭）和 13 个 Issue 更新（9 个已关闭）。开发重心明显向**底层架构重构、WebUI 体验增强以及多渠道兼容性**倾斜。核心贡献者 `chengyongru` 和 `Re-bin` 集中推进了主循环状态机和模型预设系统的重构，为后续的版本迭代打下了坚实基础。整体来看，项目处于非常健康的快速迭代期。

## 2. 版本发布
**无新版本发布。** 项目当前正处于高强度的底层重构与功能积累阶段，预计近期会有包含重构特性的较大版本更新。

## 3. 项目进展
今日合并或关闭了多项关键 PR，项目在架构稳健性和功能完善性上迈出了重要一步：

*   **核心架构重构 (状态机提取)**：PR [#3715](https://github.com/HKUDS/nanobot/pull/3715) 将长达 300 行的 `_process_message` 方法重构为显式的函数式状态机 (`RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND`)，大幅提升了主循环的可维护性。
*   **AgentLoop 组装优化**：PR [#3708](https://github.com/HKUDS/nanobot/pull/3708) 引入了 `AgentLoop.from_config()` 集中管理循环组件初始化，减少了代码重复，为后续功能解耦铺平道路。
*   **WebUI 完善**：PR [#3709](https://github.com/HKUDS/nanobot/pull/3709) 在 WebUI 中增加了 BYOK (Bring Your Own Key) 的网络搜索凭证配置功能，提升了用户的自托管体验。
*   **会话历史修复回退**：PR [#3710](https://github.com/HKUDS/nanobot/pull/3710) 回退了昨日关于跨重启持久化 `_last_summary` 的 PR [#3685](https://github.com/HKUDS/nanobot/pull/3685)，表明在会话状态持久化机制上需要寻找更稳定的方案。
*   **WebSocket 媒体修复**：PR [#3673](https://github.com/HKUDS/nanobot/pull/3673) 修复了 WebSocket 通道静默丢弃客户端发送媒体文件的 Bug。

## 4. 社区热点
今日社区关注度最高的话题集中在**可视化管理界面**的构建上：

*   **关于官方 WebUI 的讨论**：Issue [#2949](https://github.com/HKUDS/nanobot Issue #2949)（👍13，评论 10）引发了关于 NanoBot 是否需要内置全功能 WebUI 的热烈讨论。结合另外两个相关 Issue [#1922](https://github.com/HKUDS/nanobot Issue #1922)（第三方 WebUI 面板）和已合并 PR [#3059](https://github.com/HKUDS/nanobot Issue #3059)，**“提供内置的、开箱即用的 Web 管理和对话界面”** 已成为社区极其渴望的核心功能。
*   **命令行更新机制**：Issue [#3421](https://github.com/HKUDS/nanobot Issue #3421) 提出引入 `nanobot update` 一键升级命令，反映了用户希望降低版本升级门槛的诉求。

## 5. Bug 与稳定性
今日报告并处理了多个渠道和底层的 Bug，整体响应非常迅速：

1.  **[P1] 上下文丢失问题** (Issue [#3689](https://github.com/HKUDS/nanobot Issue #3689))：用户在打断 Agent 执行循环时，会导致上下文丢失。**状态：待修复**。
2.  **[P1] 飞书群 Topic 隔离缺陷** (Issue [#3692](https://github.com/HKUDS/nanobot Issue #3692))：v0.1.5.post3 引入的 Topic 隔离功能导致多文件处理被割裂，急需可配置开关。**状态：待修复**。
3.  **[P2] Cron 任务流式输出缺失 stream_id** (Issue [#3718](https://github.com/HKUDS/nanobot Issue #3718))：导致 WebSocket 客户端无法正确关联流式片段。**状态：已有对应 Fix PR [#3720](https://github.com/HKUDS/nanobot/pull/3720)**。
4.  **[P3] 死代码导致切片失效** (Issue [#3716](https://github.com/HKUDS/nanobot Issue #3716))：`helpers.py` 中存在无效列表切片导致的死代码。**状态：已由 PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) 修复并关闭**。
5.  **[P3] CLI 重试输出错乱** (Issue [#3705](https://github.com/HKUDS/nanobot/pull/3705))：交互模式下，后台 spinner 线程与重试日志冲突导致终端显示破坏。**状态：已修复**。

## 6. 功能请求与路线图信号
从近期的 PR 提交可以看出明确的产品演进路线：

*   **模型预设与动态切换**：PR [#3714](https://github.com/HKUDS/nanobot/pull/3714) 引入了 `ModelPresetConfig`，支持在运行时动态切换模型预设。这极有可能在下个小版本中落地，将极大提升多场景下的模型调度灵活性。
*   **插件化架构演进**：PR [#3564](https://github.com/HKUDS/nanobot/pull/3564) 构建了基于类型化事件的 HookCenter 系统，支持外部开发者通过 `entry_points` 分发 hook plugin。这标志着 NanoBot 正在向**更开放的插件化生态**演进。
*   **子 Agent 配置**：Issue [#1012](https://github.com/HKUDS/nanobot Issue #1012) 提出支持带特定工具和技能的子 Agent 配置文件。这是向 Multi-Agent 编排架构靠拢的强烈信号。

## 7. 用户反馈摘要
从 Issues 动态中可以提炼出以下典型用户画像与痛点：

*   **自托管与私有化部署需求强烈**：大量关于 WebUI、OpenWebUI 接入（Issue [#2389](https://github.com/HKUDS/nanobot Issue #2389)）的讨论，表明企业级或极客用户希望在完全私有环境下使用带界面的 AI 助手。
*   **国内办公生态兼容性**：飞书、企业微信的 Topic 隔离、长耗时导致的中断报错（Issue [#2709](https://github.com/HKUDS/nanobot Issue #2709)）是高频反馈点。用户经常将 NanoBot 接入这些办公软件执行长时间任务，对稳定性要求极高。
*   **状态记忆连续性**：用户期望 Agent 具备更鲁棒的中断恢复和上下文记忆能力，而不仅仅是短暂的对话窗口。

## 8. 待处理积压
目前仍有 **105 个 PR 处于待合并状态**，建议维护者重点关注以下高优先级积压：

1.  **架构重构类**：PR [#3711](https://github.com/HKUDS/nanobot/pull/3711) （将归档摘要移入系统提示以稳定 KV cache）和 PR [#3714](https://github.com/HKUDS/nanobot/pull/3714)（模型预设），这两个 PR 对性能和架构至关重要，需优先进行代码审查。
2.  **数据损坏容错**：PR [#3712](https://github.com/HKUDS/nanobot/pull/3712) 修复了会话文件损坏导致历史丢失的致命问题，建议尽快合并发布以提升系统容错率。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-10)

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据源：** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) GitHub 仓库

---

## 1. 今日速览

Hermes Agent 在过去24小时内保持了**极高的社区活跃度与健康度**。项目共处理了 50 条 Issue（新开/活跃 31 条，关闭 19 条）以及 50 条 PR（待合并 37 条，合并/关闭 13 条），交互量维持在高位。虽然今日没有发布新的官方 Release 版本，但核心开发团队（尤其是 teknium1）集中精力审查并提交了大量关键 Bug 的修复 PR，特别是针对网关稳定性、多模型推理上下文丢失以及多平台集成方面的修复。整体来看，项目正处于 v0.13.0 发布后的密集维护与稳定性打磨阶段。

## 2. 版本发布

**无新版本发布。**
当前项目仍处于近期 v0.13.0 版本发布后的迭代期，开发重心偏向于修复社区反馈的回归问题与边缘场景 Bug。

## 3. 项目进展

今日共合并/关闭了 13 个 PR，其中几个核心修复为项目的稳定性迈出了重要一步：

*   **网关推理上下文修复里程碑**：[#22839](https://github.com/NousResearch/hermes-agent/pull/22839) (P1) 修复了网关在重放对话记录时静默丢弃 `reasoning_content` 的问题，这对于多轮对话和 DeepSeek 等依赖思考模式的模型来说是关键修复。
*   **定价与账单系统修复**：[#18340](https://github.com/NousResearch/hermes-agent/pull/18340) 修复了在状态数据库中费用估算始终为 0 的缺陷，完善了多提供商（如 Google/Gemini）的成本计算逻辑。
*   **OpenRouter 路由增强**：[#22838](https://github.com/NousResearch/hermes-agent/pull/22838) 集成了 Pareto Code 路由器，允许通过 OpenRouter 根据设定的编码质量分数自动选择最具性价比的模型。
*   **安全漏洞修补**：[#22843](https://github.com/NousResearch/hermes-agent/pull/22843) (P1) 修补了技能市场在处理 URL 重定向时的 SSRF 攻击风险。

## 4. 社区热点

今日社区讨论最密集的焦点集中在**安装体验、CLI 数据丢失以及深度思考模型的兼容性**上：

*   **安装程序假死问题**：[#6147](https://github.com/NousResearch/hermes-agent/issues/6147) (👍 0, 评论 6)。用户反馈在安装过程中，终端在提示安装 `ripgrep` 时无法接受任何键盘输入。这反映了高级 CLI 工具在多样化终端环境中的兼容性痛点。
*   **CLI 长文本静默丢弃**：[#17666](https://github.com/NousResearch/hermes-agent/issues/17666) (评论 5)。用户在 CLI 粘贴长文本/代码审查意见时，消息被悄无声息地丢弃。此类数据丢失问题对依赖 Agent 进行长上下文编程的用户体验伤害极大。
*   **DeepSeek 兼容性挑战**：[#22313](https://github.com/NousResearch/hermes-agent/issues/22313) (评论 4)。由于未正确回传 thinking blocks，导致 DeepSeek V4 Pro 等模型在多轮对话时报 HTTP 400 错误。该问题已在今日的 PR [#22839] 中得到修复。

## 5. Bug 与稳定性

今日报告了多个中高优先级的 Bug，整体呈现出 v0.13.0 升级带来的局部回归及多平台网关的脆弱性。以下按严重程度排列：

### 🔴 高优先级 (P1)
*   **网关 Systemd 无限重启**：[#21915](https://github.com/NousResearch/hermes-agent/issues/21915) - 使用 systemctl 重启网关时，因端口冲突导致无限重启循环。（暂无针对性 Fix PR）
*   **工具执行期间消息丢失**：[#22818](https://github.com/NousResearch/hermes-agent/issues/22818) - 当 Agent 执行工具调用时，用户输入的消息被静默丢弃。
*   **Delegate 偏置错误**：[#22013](https://github.com/NousResearch/hermes-agent/issues/22013) - `delegate_task` 硬编码偏好 Claude 平台，导致未安装 Claude 的用户遭遇报错。

### 🟡 中优先级 (P2)
*   **TUI 构建失败**：[#21801](https://github.com/NousResearch/hermes-agent/issues/21801) - v0.13.0 升级后，通过 PTY WebSocket 触发的 TUI 构建失败。已有对应修复提交 [#22863](https://github.com/NousResearch/hermes-agent/pull/22863)。
*   **Matrix 网关路由缺陷**：[#22714](https://github.com/NousResearch/hermes-agent/issues/22714) - Matrix 长连接网关缺乏单消息内驱动 LLM 编排的通道。
*   **网关平台容错性差**：未安装可选平台依赖会导致网关整体致命错误。已提交修复 PR [#22853](https://github.com/NousResearch/hermes-agent/pull/22853)。
*   **Docker 环境变量透传失败**：[#22812](https://github.com/NousResearch/hermes-agent/issues/22812) / PR [#22852](https://github.com/NousResearch/hermes-agent/pull/22852)。

## 6. 功能请求与路线图信号

从近期的 Issues 和 PRs 中，可以观察到项目正在向**更精细的任务调度、更好的本地模型兼容性和安全性**演进：

*   **Kanban 并发限制**：[#22829](https://github.com/NousResearch/hermes-agent/issues/22829) 建议为系统任务增加 `In Progress` 的并发上限。这对于依赖本地算力运行 LLM 的用户至关重要，可避免任务堆积和重复生成。
*   **明文密钥管理升级**：[#1583](https://github.com/NousResearch/hermes-agent/issues/1583) 社区呼吁采用现代密钥管理方案（如 Varlock）取代 antiquated `.env` 文件，以防范 Agent 提示词注入导致的数据泄露风险。
*   **Pareto Code 动态路由**：PR [#22838](https://github.com/NousResearch/hermes-agent/pull/22838) 表明项目正在深化与 OpenRouter 的集成，通过性价比路由机制降低用户的 Token 使用成本。
*   **Telegram 通知降噪**：[#22771](https://github.com/NousResearch/hermes-agent/issues/22771) 提出增加抑制中间状态推送的通知模式，这是提升移动端/IM 平台用户体验的强烈信号。

## 7. 用户反馈摘要

分析近期的 Issues，真实用户痛点主要集中在以下三个方面：

1.  **Agent 长时间运行与消息队列机制的缺陷**：用户在 Agent 思考或执行工具时输入的内容经常被“静默吞掉”（如 [#17666](https://github.com/NousResearch/hermes-agent/issues/17666), [#22818](https://github.com/NousResearch/hermes-agent/issues/22818)），这打破了人机交互的基本信任。用户期望 Agent 具备排队或插话机制。
2.  **网关的生命周期管理过于脆弱**：多位用户反馈在 systemd、WebSocket PTY 等生产环境部署中，遇到僵尸进程、重启死锁等问题（如 [#21915](https://github.com/NousResearch/hermes-agent/issues/21915), [#21801](https://github.com/NousResearch/hermes-agent/issues/21801)）。
3.  **对非 Claude 阵营模型的兼容性待打磨**：DeepSeek、Ollama (qwen3.5) 以及各种自定义端点在多轮对话和 reasoning 输出解析上频发问题，社区呼唤去偏置化的多模型平等支持。

## 8. 待处理积压

以下为关键且目前仍处于 OPEN 状态的遗留问题，建议维护者重点关注：

*   **[#6147](https://github.com/NousResearch/hermes-agent/issues/6147) [P2] CLI 安装器键盘无响应**：自 4 月初报告以来，至今仍有用户受影响，严重阻碍了部分新手的首个“Hello World”体验。
*   **[#1583](https://github.com/NousResearch/hermes-agent/issues/1583) [Feature] 敏感信息防泄漏**：这是一个架构层面的安全增强提议，随着 Agent 权限越来越大（如 SUDO_PASSWORD 的使用），此议题的战略优先级应被提高。
*   **[#22714](https://github.com/NousResearch/hermes-agent/issues/22714) [P1] Matrix 网关缺乏单消息编排通道**：针对重度依赖 Matrix 协议进行运维的团队，此缺陷极大限制了 Agent 的复杂调度能力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project daily report for May 10, 2026, based on the provided GitHub data.

---

# 📊 PicoClaw 开源项目日报 (2026-05-10)

## 1. 今日速览
PicoClaw 项目在过去24小时内呈现出**极高的开发活跃度与社区参与度**。项目共处理了 10 条 Issue（新开/活跃 8 条，关闭 2 条）和 22 条 PR（待合并 13 条，合并/关闭 9 条）。核心维护者及贡献者正集中精力完善**多智能体架构（Multi-agent）**的底层调度机制与 MCP（Model Context Protocol）生态的接入体验，并同步推进了 Web UI 的管理功能完善。整体来看，项目正处于功能快速迭代、周边生态快速扩展的健康上升期。

## 2. 版本发布
- **nightly: Nightly Build `v0.2.8-nightly.20260509.8508f806`**
  - **性质**: 自动化夜间构建版本。
  - **更新范围**: 对比 `v0.2.8` 至 `main` 分支的完整变更。
  - **注意事项**: 官方提示此为自动构建版本，可能存在不稳定性，建议开发者和测试用户谨慎用于生产环境。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，标志着项目在多个关键技术栈上取得了实质性进展：
- **多智能体架构演进**: 
  - `#2158` 引入了第一层（Layer 1）多智能体发现机制，通过在系统提示中注入轻量级注册表，使 Agent 具备了互相发现的能力。
  - `#2790` 修复了 `spawn` 工具的路由指向问题，确保子任务能够严格运行在目标 Agent 的隔离环境中（模型、工具、工作区独立）。
  - `#2793` 修复了隐藏工具在子 Agent 注册表中的克隆提升问题，避免了工具上下文的错误继承。
- **通道与基础交互修复**:
  - `#2630` 优化了 Web 聊天界面，AI 回复现在将显示完整的 `YYYY-MM-DD HH:mm` 格式时间戳，并持久化到历史记录。
  - `#2828` 修复了当用户在活动轮次中发送排队的语音后续消息时，无法正确转译为文本的问题。
- **Provider 兼容性扩充**: 
  - `#2260` 成功合并，PicoClaw 现已原生兼容 xAI 提供商。
  - `#2163` 修复了 Google Antigravity (Cloud Code Assist) OAuth scopes 在 Token 刷新后丢失导致的 `PERMISSION_DENIED` 崩溃问题。

## 4. 社区热点
今日社区的关注点集中在**原生通道扩展**与**前沿 MCP 协议支持**上：
- **邮件通道原生支持** ([#2421](https://github.com/sipeed/picoclaw/Issue/2421)): 获得 👍1 及 5 条深度评论。用户强烈呼吁将 Email 作为一等公民通道接入，以满足企业、科研等保守环境下的纯异步沟通需求。
- **MCP 的 OAuth 2.1 + PKCE 支持** ([#2546](https://github.com/sipeed/picoclaw/Issue/2546)): 获得 4 条评论。社区希望非技术用户能直接在 Dashboard 粘贴 URL 添加受 OAuth 保护的 MCP 服务器，提供类似 Claude.ai 的开箱即用体验。
- **OpenRouter 思维泄漏** ([#2745](https://github.com/sipeed/picoclaw/Issue/2745)): 用户反映在使用推理模型（如 `nvidia/nemotron`）时，模型内部的思维链泄漏到了客户端内容中。

## 5. Bug 与稳定性
- **🚨 P0 - Codex OAuth 空响应** ([#2674](https://github.com/sipeed/picoclaw/Issue/2674)): [OPEN] 用户在使用 ChatGPT 后端进行流式输出时收到空响应，系统回退到了容错提示。严重影响特定后端的可用性，目前暂无关联 Fix PR。
- **🚨 P1 - Anthropic 下拉框模型 ID 错误** ([#2665](https://github.com/sipeed/picoclaw/Issue/2665)): [CLOSED] 使用点号（如 `claude-sonnet-4.6`）代替了 API 要求的破折号（`claude-sonnet-4-6`）。此 Bug 已被关闭，推测已在最近版本中修复。
- **🚨 P1 - PowerShell 编码注入漏洞** ([#2836](https://github.com/sipeed/picoclaw/PR/2836)): [OPEN] 提交了一个针对通过 `iex` 注入绕过 PowerShell 编码安全限制的修复 PR，涉及底层执行安全性，建议优先 Review。
- **🚨 P2 - 工具反馈抑制逻辑** ([#2823](https://github.com/sipeed/picoclaw/PR/2823)): [CLOSED] 修复了因工具已发送内容而跳过最终出站消息时，工具反馈未能被正确解除追踪的问题，已合并。

## 6. 功能请求与路线图信号
综合今日的 Issue 与 PR 走势，可以看出项目未来的演进路线图信号：
- **MCP 传输协议全面现代化**: Issue [#2782](https://github.com/sipeed/picoclaw/Issue/2782) 提出支持新一代 **Streamable HTTP** 传输（替代传统 SSE），随着 MCP Go SDK 等生态的转移，这一功能势在必行。
- **多 Agent 细粒度权限控制**: 讨论中的 [#2837](https://github.com/sipeed/picoclaw/Issue/2837) 提议在 `AGENT.md` 的 frontmatter 中支持 `allow/deny/glob` 工具策略，以防止多 Agent 场景下的工具上下文爆炸。同时，PR [#2838](https://github.com/sipeed/picoclaw/PR/2838) 已经给出了对应的实现方案。
- **异步结果传递机制重构**: Issue [#2829](https://github.com/sipeed/picoclaw/Issue/2829) 提出了为异步工具结果制定显式传递策略的提案，PR [#2830](https://github.com/sipeed/picoclaw/PR/2830) 已经着手实现了避免将子 Agent 结果重新注入父 Agent 导致冗余循环的机制。
- **原生 Gemini 搜索引擎接入**: PR [#2763](https://github.com/sipeed/picoclaw/PR/2763) 正在为 `web_search` 工具引入 Gemini Google Search grounding 功能。

## 7. 用户反馈摘要
- **安装与运维痛点**: Issue [#2834](https://github.com/sipeed/picoclaw/Issue/2834) 反映用户在从源码升级/替换旧版本时缺乏明确指引，表明项目在**部署文档和用户体验**上存在短板。
- **Web UI 配置需求**: PR [#2770](https://github.com/sipeed/picoclaw/PR/2770) 提到用户希望能通过 Web UI 直接管理 MCP 配置，表明当前的“手动修改原始配置文件”模式对非开发者不够友好。
- **精确时间戳需求**: 聊天记录中仅显示短时间（如 11:05 AM）无法满足用户跨天回溯的需求，PR [#2788](https://github.com/sipeed/picoclaw/PR/2788) 和 [#2630](https://github.com/sipeed/picoclaw/PR/2630) 提出的 Session API 和前端精确时间戳改进正是顺应这一呼声。

## 8. 待处理积压
- **[积压] GitHub Copilot 集成**: ([#1347](https://github.com/sipeed/picoclaw/Issue/1347)) 自 2026-03-11 创建至今已停滞，缺乏维护者响应。考虑到 GitHub Copilot 的市场占有率，建议团队评估其优先级并给出里程碑计划。
- **[积压] MCP OAuth 2.1 接入**: ([#2546](https://github.com/sipeed/picoclaw/Issue/2546)) 虽讨论活跃，但目前无对应实现 PR，相关能力提升的需求强烈。
- **[积压] 核心模型空响应问题**: ([#2674](https://github.com/sipeed/picoclaw/Issue/2674)) 涉及 OpenAI Codex OAuth 核心通道功能，且带有 👍3 的认可度，需要研发团队尽快介入排查根因。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 🤖 NanoClaw 项目动态日报 (2026-05-10)

> **数据来源**: [NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw) 
> **分析周期**: 过去 24 小时

---

## 1. 今日速览

NanoClaw 项目今日保持**极高的开发与社区活跃度**，过去 24 小时内共产生 22 条 PR 更新（其中 13 条已合并/关闭，9 条待合并）和 7 条 Issue 更新（6 条新开，1 条关闭）。项目当前正处于**架构升级与功能横向扩展**的密集迭代期：核心维护者与社区开发者不仅集中修复了多个涉及系统退出、容器挂载和凭证代理的底层稳定性 Bug，还同时推进了插件系统、持久化状态目录以及多项 Operator 专属技能的开发。整体来看，项目健康度良好，Issue 响应迅速，PR 提交质量控制严格。

---

## 2. 版本发布

**无新版本发布。** 
当前项目主要以高频主分支合并的方式进行迭代，尚未发布新的 Release 版本。但注意到今日合并了 [claude-code 版本升级 PR (#2364)](https://github.com/nanocoai/nanoclaw/pull/2364)（2.1.116 → 2.1.128），预计这些底层变更将在下一个正式版本中集中体现。

---

## 3. 项目进展

今日共有 13 个 PR 被合并或关闭，重点推进了以下几个维度的演进：

*   **底层配置架构升级**：[PR #2351](https://github.com/nanocoai/nanoclaw/pull/2351) 成功将容器运行时配置的数据源从文件系统 (`container.json`) 迁移至中心化数据库，大幅提升了多容器管理的一致性和可靠性。
*   **模型与上下文能力扩展**：[PR #2233](https://github.com/nanocoai/nanoclaw/pull/2233) 引入了按组 (per-group) 配置模型和推理算力的功能；[PR #2280](https://github.com/nanocoai/nanoclaw/pull/2280) 修复了 Claude 1M 长上下文标签的可靠性问题，使大上下文调用更加稳定。
*   **系统稳定性防线加固**：合并了多个关于优雅退出的关键修复，包括 [PR #2358](https://github.com/nanocoai/nanoclaw/pull/2358)（修复 SIGTERM 信号导致响应丢失）和 [PR #2359](https://github.com/nanocoai/nanoclaw/pull/2359)（修复分发响应时的关闭竞争条件）。同时 [PR #2352](https://github.com/nanocoai/nanoclaw/pull/2352) 将包构建超时限制放宽至 15 分钟，有效防止了弱网环境下的构建崩溃。
*   **AI 记忆与集成技能扩展**：[PR #2318](https://github.com/nanocoai/nanoclaw/pull/2318) 整合了 `/add-mnemon` 技能，使 Agent 拥有了跨越重启的语义记忆知识图谱；[PR #2319](https://github.com/nanocoai/nanoclaw/pull/2319) 加入了 AWS CLI 访问能力。

---

## 4. 社区热点

今日的社区热点主要围绕**复杂工具链下的 Agent 行为合规性**以及**基础部署体验**展开：

*   **Agent 跨组委派失败现象 ([Issue #2369](https://github.com/nanocoai/nanoclaw/issues/2369))**：开发者报告当加载的 MCP 工具超过 32 个且存在多目标路由时，Agent 倾向于使用自然语言“叙述”委派过程，而不是发出规范的 `<message to=>` 指令。这暴露了在复杂企业级场景下，底层 LLM 的指令遵循能力面临挑战。
*   **部署升级与路径断链问题 ([Issue #2355](https://github.com/nanocoai/nanoclaw/issues/2355))**：老用户升级到 2.0.45+ 版本后，发现 CLI 命令 `ncl` 未被正确加入系统 PATH。这反映出项目在从 v1 向 v2 迁移以及包管理机制重构时，对平滑升级兼容性的考量存在疏漏。
*   **预设配置被破坏 ([Issue #2360](https://github.com/nanocoai/nanoclaw/issues/2360))**：用户指出执行安装脚本会默认且静默地删除原有的 Agent 个性化配置文件（`CLAUDE.md`），导致严重的使用体验受挫。

---

## 5. Bug 与稳定性

今日报告并处理了大量底层及通道 Bug，整体稳定性正在通过这些补丁得到进一步夯实：

*   🔴 **高 | 数据库只读权限引发的级联崩溃** ([Issue #2196](https://github.com/nanocoai/nanoclaw/issues/2196))： sweeps 进程尝试在只读数据库上执行清理操作导致崩溃，进而引发会话大面积停滞。**状态：已关闭（推测已通过相关架构重构修复）。**
*   🟠 **中 | WhatsApp 通道附件丢失** ([Issue #2370](https://github.com/nanocoai/nanoclaw/issues/2370))：下载的附件未被正确挂载到 Agent 容器内部，导致多模态处理链路断裂。**状态：Open，等待修复。**
*   🟠 **中 | WhatsApp LID 映射重启丢失** ([Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194))：基于 LID 的路由映射仅存储在内存中，服务重启即失效，导致消息路由失败。**状态：Open，等待修复。**
*   🟡 **低 | 凭证代理 OAuth 刷新机制** ([PR #2363](https://github.com/nanocoai/nanoclaw/pull/2363))：针对 Anthropic 凭证过期问题提交了主动刷新的逻辑补丁。**状态：Open（待合并）。**
*   🟡 **低 | 未知斜杠命令被丢弃** ([PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346))：修复了格式化器将无法识别的命令误判为透传，导致响应被静默丢弃的问题。**状态：Open（待合并）。**

---

## 6. 功能请求与路线图信号

结合近期的 PR 动向，NanoClaw 的下一个迭代周期将重点押注于**插件化与 Agent 自主演进**能力：

*   **插件生态与 Marketplace 支撑体系**：[PR #2365](https://github.com/nanocoai/nanoclaw/pull/2365) 和 [PR #2367](https://github.com/nanocoai/nanoclaw/pull/2367) 正在为 Agent 组引入 marketplace 配置和 7 个运营级技能。这表明项目正在积极构建类似“应用商店”的底层架构。
*   **Agent 的自我修改与进化能力**：[PR #2368](https://github.com/nanocoai/nanoclaw/pull/2368) 提出了极具前瞻性的 `install_plugin` 和 `uninstall_plugin` 动作，允许 Agent 在受管制的状态下自行安装或卸载插件。这标志着 NanoClaw 正在从“被动执行工具”向“主动维护自身能力”的自主智能体迈进。
*   **Agent 持久化状态的规范化**：[PR #2366](https://github.com/nanocoai/nanoclaw/pull/2366) 设立了专用的 `SKILL_DATA_DIR`，彻底解决了技能状态在容器重启间的持久化难题，为复杂数据库和缓存技能铺平了道路。

---

## 7. 用户反馈摘要

透过今日的 Issue 记录，可以清晰提炼出真实用户在部署和使用中的核心痛点：

1.  **Anthropic 封号焦虑**：用户持续关注 Credential Proxy 的反向代理机制是否会触发 Anthropic 的反欺诈机制导致封号（[Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)）。建议项目方在文档中提供更明确的合规边界说明或架构白皮书。
2.  **升级体验的断层感**：无论是 `ncl` 命令丢失，还是辛苦配置的 `CLAUDE.md` 被静默删除，都反映出早期采用者在跟随项目快速迭代时付出了较高的维护成本。用户强烈期望引入更健壮的迁移检查和备份机制。
3.  **多模态与跨平台通信的脆弱性**：WhatsApp 通道占据了今日 Bug 报告的半壁江山（LID 映射、附件挂载）。这表明尽管 SMS/IM 适配器极具吸引力，但在真实生产网络环境下的容错和持久化机制仍需打磨。

---

## 8. 待处理积压

以下重要 Issue 涉及账户安全与核心稳定性，且未观察到近期的官方评论响应，提请维护团队重点关注：

1.  ⚠️ **账户合规性风险咨询**：[Issue #1669 - Does Credential Proxy implementation risk Anthropic account bans?](https://github.com/nanocoai/nanoclaw/issues/1669)（生命周期超 1 个月）。这是一个法务/技术交叉地带的高优问题，直接影响企业用户的采用决策。
2.  ⚠️ **路由体系单点故障**：[Issue #2194 - WhatsApp LID→phone JID mapping not persisted across restarts](https://github.com/nanocoai/nanoclaw/issues/2194)。该 Bug 导致每次服务重启后特定联系人的消息路由静默失败，对生产环境构成隐患。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是 NullClaw 项目 2026-05-10 的动态日报。

---

# NullClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
过去 24 小时，NullClaw 项目保持较高的社区活跃度，主要集中在 2026.5.x 版本发布后的回归测试与功能迭代。今日共产生了 **3 个新开 Issue** 与 **3 个活跃 PR**。从反馈来看，近期底层网络和通道解析的重构引入了部分破坏性变更，导致宿主解析和特定渠道配置失效。同时，社区针对架构扩展（如数据治理层和内网 HTTP 白名单）提交了重要 PR。整体而言，项目处于快速演进期，稳定性和向下兼容性是当前面临的主要挑战。

## 2. 版本发布
- **版本号**: `nightly-20260509-5d533da` (NullClaw Nightly)
- **构建时间**: 2026-05-09 03:34:22 UTC
- **Commit**: `5d533da90dd0986edf190247c27655f969bdcb7d`
- **CI Workflow**: [查看构建详情](https://github.com/nullclaw/nullclaw/actions/runs/25590590011)
- **注意事项**: 根据今日社区反馈，该 nightly 版本及 2026.5.x 分支包含 HTTP/DNS 客户端重构的底层改动，可能对现有 providers 产生不可预期的破坏性影响，建议生产环境谨慎升级。

## 3. 项目进展
今日有 2 个 PR 被关闭（合并或拒绝），1 个待合并，推进了 CI 完善与企业级架构扩展：
- **[PR #903](https://github.com/nullclaw/nullclaw/pull/903) [CLOSED]**: `feat: add config to whitelist insecure http endpoints`。引入了 `http_request.allowed_insecure_domains` 配置项。该更新显著提升了部署灵活性，特别是方便了开发者在 `docker-compose` 环境下将 NullClaw 智能体与其他容器进行内网互联。
- **[PR #796](https://github.com/nullclaw/nullclaw/pull/796) [CLOSED]**: `ci: add Nix flake build workflow`。完善了项目的 CI 流水线，新增了基于 NixOS 的构建与冒烟测试，提升了在不同操作系统生态中的构建稳定性。
- **[PR #885](https://github.com/nullclaw/nullclaw/pull/885) [OPEN]**: `[hackathon] feat(memory): Add NullClaw Data Governance Layer`。由黑客马拉松参赛队伍提交的大型特性，旨在为 NullClaw 增加底层数据治理层。该 PR 目前仍在审阅中，若合并将大幅增强项目的企业级数据管控能力。

## 4. 社区热点
今日新开的三个 Bug 均与近期版本的核心机制重构有关，引起了用户的广泛关注：
- **[Issue #902](https://github.com/nullclaw/nullclaw/issues/902)**: 2026.5.x 版本的 HTTP/DNS 客户端重构导致 Siliconflow 等提供商完全不可用。这是典型的回归问题，直接影响核心功能。
- **[Issue #900](https://github.com/nullclaw/nullclaw/issues/900)**: 监督模式下，安全策略原本设计了 `approval_request` 与 UI 的交互闭环，但底层并未正确触发该事件，导致高风险命令被直接中断而非挂起提示。这暴露了核心与 UI 通道（`webchannel_v1`）在复杂场景下的设计不一致。
- **[Issue #901](https://github.com/nullclaw/nullclaw/issues/901)**: 命令行工具状态机解析异常，导致 `channel list` 无法读取正确的配置。

## 5. Bug 与稳定性
根据今日报告的 Bug，当前 2026.5.x 版本（含最新 Nightly）存在以下稳定性问题，按严重程度排序：
1. **严重** - **[Issue #902](https://github.com/nullclaw/nullclaw/issues/902)**: 宿主解析失败。核心功能受损，特定供应商网络请求中断。*目前暂无对应修复 PR。*
2. **严重** - **[Issue #900](https://github.com/nullclaw/nullclaw/issues/900)**: 监督模式/安全管控失效。高风险操作未能按预期交由用户审批，而是直接报错。*目前暂无对应修复 PR。*
3. **一般** - **[Issue #901](https://github.com/nullclaw/nullclaw/issues/901)**: Telegram 渠道 CLI 指令状态显示错误。不影响核心智能体逻辑，但严重影响用户配置体验。*目前暂无对应修复 PR。*

## 6. 功能请求与路线图信号
虽然今日没有纯粹的新功能请求 Issue，但从活跃的 PR 中可以捕捉到项目接下来的演进路线图信号：
- **内网与微服务组网支持**: [PR #903](https://github.com/nullclaw/nullclaw/pull/903) 暗示项目正被更多地应用于多容器部署场景，未来可能在 Docker/K8s 集群的网络通信和凭证管理上提供更多原生支持。
- **企业级数据安全与合规**: [PR #885](https://github.com/nullclaw/nullclaw/pull/885) 提出的数据治理层，表明社区对 AI 智能体读写敏感数据时的权限隔离、数据脱敏有着强烈的业务需求，这可能是项目迈向企业级市场的关键一步。

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提炼出用户的真实反馈与使用场景：
- **对向下兼容性的不满**: 多名用户反馈升级到 2026.5.x 后原本正常工作的配置崩溃（如 [Issue #902](https://github.com/nullclaw/nullclaw/issues/902)），表明部分用户的生产环境受挫，希望开发组在重构核心模块时增加对旧版配置和网络的兼容性测试。
- **对安全管控的较高期望**: [Issue #900](https://github.com/nullclaw/nullclaw/issues/900) 表明有用户正在深度使用 NullClaw 的安全策略与监督模式，期望 Agent 在执行高风险命令时具备更优雅、可靠的“中断-审批”能力，而不是粗暴拒绝。
- **多模态通信场景的需求**: [Issue #901](https://github.com/nullclaw/nullclaw/issues/901) 确认了用户在实际使用 Telegram 等即时通讯工具作为 AI 交互通道的场景。

## 8. 待处理积压
今日积压的待处理事项主要围绕刚刚发现的 2026.5.x 版本回归 Bug，亟待核心维护者响应：
- **Issue #902**: 严重阻断升级路径的网络请求回归，需尽早响应。
- **Issue #900**: 安全核心逻辑未按预期工作，可能导致误操作风险。
- **Issue #901**: CLI 解析逻辑错误，需确认是否为 `2026.4.17` 引入的历史遗留问题。
- **PR #885**: 大型架构 PR，涉及核心存储与数据管控，需要项目 Owner 和社区进行仔细的代码审阅。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-05-10)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内，IronClaw 项目共产生 **19 条 Issue 更新**（18 新开/活跃，1 关闭）和 **40 条 PR 更新**（22 待合并，18 已合并/关闭），研发节奏处于满载状态。
- **“Reborn” 架构落地进入深水区**：核心贡献者 `serrrfairat` 及团队今日密集提交了关于 Reborn 架构的史诗级推进，覆盖存储层、调度器、加密凭证、上下文组装等底层基础设施。
- **关键缺陷与安全修复同步进行**：发现了跨租户 SSE/WS 事件泄露、DeepSeek API 不兼容等高危问题，社区与核心团队已迅速响应并提交相应 PR。
- **发版准备中**：尽管今日无新 Release，但已有累积了 `v0.24.0 -> v0.28.0` 的发版 PR 处于打开状态，预示着一次重大版本更新即将到来。

---

## 2. 版本发布
**本日无新版本发布**。

- **注**：包含重大架构重构的发布 PR [#3388](https://github.com/nearai/ironclaw/pull/3388) 正在等待合并，预计主版本号将从 `v0.24.0` 跨越至 `v0.28.0`。

---

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，**项目底层架构与稳定性的“基石”已基本浇筑完成**。重要进展包括：

- **Reborn 调度器与宿主工厂就位**：合并了纯文本循环驱动宿主工厂 ([#3439](https://github.com/nearai/ironclaw/pull/3439)) 和相关端口组装 ([#3398](https://github.com/nearai/ironclaw/pull/3398))，为上层 Agent 逻辑的执行提供了标准化的宿主环境。
- **持久化与状态管理升级**：合并了持久化资源治理器 ([#3427](https://github.com/nearai/ironclaw/pull/3427))、加密密钥库 ([#3414](https://github.com/nearai/ironclaw/pull/3414))、循环提示包端口 ([#3411](https://github.com/nearai/ironclaw/pull/3411))。这表明 Reborn 架构彻底告别了临时的内存存储。
- **安全与边界控制收紧**：实现了可见能力目录 ([#3426](https://github.com/nearai/ironclaw/pull/3426))，增强了基于信任的策略拦截。
- **测试与 E2E 修复**：修复了 E2E 测试中的授权和审批覆盖问题 ([#3430](https://github.com/nearai/ironclaw/pull/3430)) 及 REPL 认证重试的竞态条件 ([#3437](https://github.com/nearai/ironclaw/pull/3437))，保障了主干的健康度。
- **重要重构关闭**：Reborn 传输适配器合约 ([#3099](https://github.com/nearai/ironclaw/pull/3099)) 经过长期打磨后终于关闭，标志着新旧传输层的解耦完成。

---

## 4. 社区热点
今日最活跃、关注度最高的探讨集中在架构落地和特定环境部署上：

- **史诗级架构追踪 ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987))**：今日新增大量评论（总计 44 条）。该 Issue 追踪 Reborn 架构的整体登陆策略，由于代码量巨大，团队正采取“化整为零”的分组 PR 模式推进。这反映了项目在进行底层重构时极其谨慎的工程管理态度。
- **Reborn 核心执行循环定义 ([Issue #3107](https://github.com/nearai/ironclaw/issues/3107))**：`serrrfirat` 发起的关于 `AgentLoopDriver` 和运行类配置文件的探讨，引发了关于上下文构建、唤醒机制和预算控制的深度交流。
- **Linux x86_64 安装脚本报错 ([Issue #2949](https://github.com/nearai/ironclaw/issues/2949))**：用户反馈在标准 Linux 环境下使用官方脚本安装失败，引起部分社区成员共鸣。

---

## 5. Bug 与稳定性
今日报告了若干影响生产环境的关键缺陷，部分已确立修复方案：

1. **🚨 [高危] 跨租户 SSE/WS 状态事件泄露**
   - **表现**：多租户环境中，由于心跳或沙箱任务丢失 `metadata.user_id`，导致工具调用和生命周期事件广播给了所有连接的 SSE/WS 用户。
   - **状态**：核心开发者 `ilblackdragon` 已提交并打开了针对性修复 PR [#3390](https://github.com/nearai/ironclaw/pull/3390)。**强烈建议相关部署关注此 PR。**
2. **🔴 [中危] Mission 结果推送到错误会话 ([Issue #3415](https://github.com/nearai/ironclaw/issues/3415))**
   - **表现**：生产环境中，周期性任务（如每日天气预报）的结果被错误地推送到无关的对话中。
   - **状态**：OPEN，暂无关联 Fix PR。
3. **🟡 [中危] DeepSeek Provider API 400 错误 ([Issue #3436](https://github.com/nearai/ironclaw/issues/3436))**
   - **表现**：在开启思考/推理模式时，DeepSeek API 提示必须回传 `reasoning_content`，导致 IronClaw 抛出 400 Bad Request。
   - **状态**：OPEN，暂无关联 Fix PR。
4. **🟡 [中危] 间歇性 i18n 回归 ([Issue #3425](https://github.com/nearai/ironclaw/issues/3425))**
   - **表现**：生产环境中 UI 偶尔直接渲染原始翻译键（如 `auth.title`）而非翻译后的文本。
   - **状态**：OPEN，暂无关联 Fix PR。
5. **⚙️ CI/CD 失败 ([Issue #3323](https://github.com/nearai/ironclaw/issues/3323))**
   - **表现**：Nightly E2E 自动化测试在 `web-regressions` 任务中失败。今日已被系统自动关闭，推测已通过随后的提交修复。

---

## 6. 功能请求与路线图信号
结合今日的 Issues 与 PR 动态，IronClaw 下一阶段的重点路线图信号非常明确：

1. **更深层的基础解耦与安全加固**：
   - **LLM 边界清理 ([Issue #3443](https://github.com/nearai/ironclaw/issues/3443))**：计划移除废弃的 `bedrock_*` 配置字段，隐藏提供商特定逻辑。配合目前的 PR [#3416](https://github.com/nearai/ironclaw/pull/3416)，下个版本将大幅改善多模型接入的开发体验。
2. **Reborn 核心机制的完善（v2 引擎蓄力）**：
   - **循环退出与信任机制**：通过 #3424 提出了可信的 `LoopExitApplier`，要求基于持久化证据验证状态转换。
   - **统一存储基座**：通过 PR [#3421](https://github.com/nearai/ironclaw/pull/3421) 引入 `ironclaw_storage` 作为统一持久化底层，后续将彻底消除各组件混乱的 SQL 适配器。
   - **生产级调度唤醒**：引入生产级的 `TurnRunWakeNotifier` ([Issue #3435](https://github.com/nearai/ironclaw/issues/3435))，替代当前存根实现。
3. **工作流上层门面集成**：
   - 提交了 `ProductWorkflow` 和 `InboundTurnService` 门面模式 ([PR #3428](https://github.com/nearai/ironclaw/pull/3428))，表明架构底层完善后，正在迅速补齐面向业务的上层 API。

---

## 7. 用户反馈摘要
从今日的 Issues 中，可以提取出以下真实用户痛点和使用场景：

- **部署门槛痛点**：Linux x86 环境下的官方脚本安装失败 ([#2949](https://github.com/nearai/ironclaw/issues/2949))，说明项目在多平台二进制分发和脚本容错上仍有提升空间。
- **重度依赖第三方 LLM 的兼容性焦虑**：用户在生产环境重度依赖 DeepSeek 模型的推理模型，而 IronClaw 未正确处理新模型特有的 `reasoning_content` 载荷导致业务阻断 ([#3436](https://github.com/nearai/ironclaw/issues/3436))。这表明未来需要建立针对主流 LLM 提供商 API 变更的更快响应机制。
- **自动化/Mission 机制的可靠性疑虑**：天气 Mission 串台 ([#3415](https://github.com/nearai/ironclaw/issues/3415)) 表明，在并发或多 Agent 任务调度时，上下文的隔离和传递机制存在令终端用户困惑的缺陷。

---

## 8. 待处理积压
- **[行动建议] 重点排查高危泄露漏洞**：虽然跨租户漏洞的修复 PR [#3390](https://github.com/nearai/ironclaw/pull/3390) 已经打开，但仍处于待合并状态。考虑到其具有多租户数据越权的极高风险，**强烈建议维护者立即对其进行安全审查并合入主干**。
- **[观察] 新提缺陷需排期**：今日暴露的 DeepSeek 兼容性报错 ([#3436](https://github.com/nearai/ironclaw/issues/3436)) 和 Mission 路由串台 ([#3415](https://github.com/nearai/ironclaw/issues/3415)) 严重影响了特定用户群体的正常使用，目前尚未有开发者在 Issue 下方认领或提供规避方案，需尽快确认排期。
- **[跟进] 大版本发版车阻塞项**：发版 PR [#3388](https://github.com/nearai/ironclaw/pull/3388) 目前状态为 OPEN，积压了大量如 Reborn 门面 ([#3428](https://github.com/nearai/ironclaw/pull/3428)) 等待合并的大型重构。应警惕“临门一脚”时代码审查不充分导致的合并灾难。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 (2026-05-10)**

### 1. 今日速览
过去 24 小时内，LobsterAI 展现出极高的开发活跃度与版本迭代速度。项目于昨日顺利发布了 `2026.5.9` 全新版本，引入了独立工作目录和 Artifact 等重量级功能。今日共处理了 13 个 Pull Requests（其中 9 个已合并/关闭，4 个待处理），主要围绕 UI 交互优化、Artifacts 文件预览增强及 IM 模块缺陷修复。尽管社区层面无新增 Issue 讨论，但核心开发团队正在密集推进多智能体协同、计划任务和前端体验的工程化落地，项目整体处于健康且高速演进的阶段。

### 2. 版本发布
- **Release: [LobsterAI 2026.5.9](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.9)** (发布于 2026-05-09)
  - **更新内容**：
    - **独立工作目录**：每个 Agent 现已支持配置独立的工作目录 (by @fishang519, PR #1904)。
    - **Artifacts 支持**：全面引入 Artifact 模块功能 (by @liugang519, PR #1906)。
    - **性能与体验优化**：实现了会话列表与消息历史的分页加载机制，大幅改善长会话场景下的前端性能 (from #924)。
  - **破坏性变更与迁移注意**：此次更新涉及前端数据加载逻辑的重构（会话分页），建议自部署用户在升级时留意前端缓存及 API 返回数据结构的兼容性。

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，标志着项目在“协同办公、文件预览与 UI 规范化”方面迈出了一大步：
- **Artifacts 与文件管理增强**：
  - [PR #1938](https://github.com/netease-youdao/LobsterAI/pull/1938)：合并了 `release/2026.05.08` 分支至主干，新增了 PDF/Office 文件预览、协同分页与定时任务（Cron）。
  - [PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933)：为预览模块增加了刷新按钮，修复了 HTML 预览的 Bug，并支持了文件列表搜索、排序、去重以及 Markdown 的暗黑模式搜索。
  - [PR #1931](https://github.com/netease-youdao/LobsterAI/pull/1931)：更新了文件列表的图标显示，提升视觉辨识度。
- **IM 与协同历史优化**：
  - [PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936)：修复了 IM 渠道聊天记录时间显示不正确的问题，并优化了显示方式。
  - [PR #1932](https://github.com/netease-youdao/LobsterAI/pull/1932)：在消息元数据中隐藏了冗余的 Agent 名称。
  - [PR #1930](https://github.com/netease-youdao/LobsterAI/pull/1930)：将 `penclaw-weixin` 依赖升级至 2.4.3 版本。
- **主界面 UI 升级**：
  - [PR #1937](https://github.com/netease-youdao/LobsterAI/pull/1937)、[PR #1934](https://github.com/netease-youdao/LobsterAI/pull/1934)、[PR #1935](https://github.com/netease-youdao/LobsterAI/pull/1935)：集中优化了主界面 UI，更新了 Agent 头像，并改善了默认空白历史标题的样式。

### 4. 社区热点
今日社区（Issues 区）表现平静，无新增活跃 Issue。在 PRs 区，核心贡献者 [@fisherdaddy](https://github.com/fisherdaddy) 与 [@liugang519](https://github.com/liugang519) 主导了绝大部分代码提交。主要的演进诉求体现在 **Artifacts（制品/文件管理）** 和 **Cowork（多智能体协同）** 领域，说明项目正从单一的对话智能体向“带执行环境和文件的协同工作流”转型。

### 5. Bug 与稳定性
- **待修复**：
  - 批量删除任务失效：[PR #1939](https://github.com/netease-youdao/LobsterAI/pull/1939) (OPEN) - 修复了渲染层批量删除任务不生效的问题。
- **已修复（今日合并）**：
  - IM 历史时间戳显示错误：[PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936) (CLOSED)。
  - HTML 预览异常及文件列表未去重/校验：[PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933) (CLOSED)。

### 6. 功能请求与路线图信号
综合今日的 Release 与 PR 动态，可以清晰地看出项目近期的重要路线图信号：
- **容器化与隔离性**：Agent 独立工作目录的引入，暗示项目正在为多 Agent 并行执行复杂任务提供底层文件系统隔离。
- **生产力工具集成**：Artifacts（PDF/Office预览）与定时任务的落地，表明 LobsterAI 正在向企业级工作流助手靠拢。
- **底层依赖大幅升级**：今日有 3 个依赖更新 PR 处于 Open 状态，包括 React 19、Vite 8 和 Headless UI。这可能预示着项目在下一个迭代周期将进行大规模的前端架构重构与性能调优。

### 7. 用户反馈摘要
过去 24 小时内未产生公开的 Issues 评论，因此暂时无法从 GitHub 提取具体的用户反馈。但从核心开发者连续提交的“消息分页加载”、“文件预览优化”及“批量删除”等 PR 可以推断，当前真实用户场景中存在**大量长文本对话处理、文件上传与交互管理的需求**，且开发者正在积极回应这些生产环境中的性能与体验痛点。

### 8. 待处理积压
依赖管理机器人 提交了 3 个重要前端库的升级 Pull Requests，已积压约 20 天未合并。由于涉及大版本跨越，可能需要核心团队进行严谨的兼容性测试，建议维护者予以关注：
- [PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764)：升级 `react-dom` 从 18.3.1 至 19.2.6
- [PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765)：升级 `@headlessui/react` 从 1.7.19 至 2.2.10
- [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766)：升级 `vite` 从 5.4.21 至 8.0.11

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份报告由开源项目分析师基于 2026-05-10 的 GitHub 数据生成。以下是对 Moltis（一款聚焦 AI 智能体与个人 AI 助手的前沿开源项目）的最新动态日报：

---

# 📊 Moltis 项目动态日报 (2026-05-10)

### 1. 今日速览
过去 24 小时，Moltis 项目的整体开发活跃度保持在中等水平，核心开发者的精力主要集中在代码合并与架构优化上。今日无新版本发布，Issues 动态暂停（0 条新增/活跃），但 PR 端有明显的推进，共处理了 4 个拉取请求（2 个合并/关闭，2 个转为待合并状态）。从 PR 轨迹来看，项目前端交互（聊天输入框重构）与基础设施建设（文档站点迁移、外部智能体持久化）正在稳步推进，项目整体健康度良好，处于功能迭代与体验打磨并重的阶段。

### 2. 版本发布
**今日无新版本发布。**

### 3. 项目进展
今日关闭/合并的 PR 主要集中在前端交互优化与本地化建设上，为后续的功能发布打下了基础：
*   **聊天交互体验重构 ([PR #985](https://github.com/moltis-org/moltis/pull/985) - CLOSED):** 由核心贡献者 `penso` 提交。重新设计了 Web 端的聊天输入框，采用居中圆角设计，并将模型选择、推理控制、附件、语音和发送按钮整合到底部控制栏。此外，Token/上下文状态显示也被移至底部并支持自动换行。这一更新显著提升了用户的对话交互体验。
*   **繁体中文本地化改进 ([PR #986](https://github.com/moltis-org/moltis/pull/986) - CLOSED):** 由 `PeterDaveHello` 贡献。全面更新了繁体中文（zh-TW）的 UI 翻译，统一了“AI 助理”和“Moltis”等核心术语的标准，提高了多语言环境下的用词准确性和一致性。

### 4. 社区热点
由于今日 Issues 板块无新增动态，且 PR 评论数未显现爆发性增长，今日的焦点集中在两个处于 **OPEN** 状态的高价值 PR 上，它们代表了项目近期的演进方向：
*   **全新的文档站点架构 ([PR #987](https://github.com/moltis-org/moltis/pull/987)):** `penso` 提议将当前的 mdBook 文档部署替换为基于 Astro 生成的静态站点。该站点保留了原有的 Markdown 源码，同时引入了侧边栏导航、页面目录、复制按钮、标题搜索以及响应式汉堡菜单和明暗主题切换。这反映了项目对开发者文档和用户使用手册体验的高度重视。
*   **外部智能体持久化会话 ([PR #566](https://github.com/moltis-org/moltis/pull/566)):** 这是一个长周期的重磅功能 PR，旨在为 ACP 和 Codex CLI 添加持久化的外部智能体会话，并支持 Claude Code 的恢复功能。该功能一旦合并，将使 Moltis 具备跨轮次保持与外部 Agent 对话状态的能力，是迈向“复杂任务智能体调度”的关键一步。

### 5. Bug 与稳定性
*   **今日未收到新的崩溃或 Bug 报告（0 个相关 Issues）。**
*   今日合并的 UI 重构（[PR #985](https://github.com/moltis-org/moltis/pull/985)）修复了此前 Token 状态栏可能被截断的问题，进一步增强了前端界面的鲁棒性。

### 6. 功能请求与路线图信号
综合近期的 PR 活动分析，我们可以清晰地捕捉到 Moltis 接下来的路线图信号：
1.  **智能体会话连续性（Agent Continuity）:** [PR #566](https://github.com/moltis-org/moltis/pull/566) 的持续推进表明，打破单次对话限制、实现与各类 CLI / 外部 AI 智能体的长程绑定与状态管理，将是下一个大版本的核心卖点。
2.  **专业化与现代化的文档体系:** [PR #987](https://github.com/moltis-org/moltis/pull/987) 暗示项目正在为更庞大的用户群做准备，通过 Astro 构建的高性能文档站点将极大降低开源社区的上手门槛。
3.  **重交互与微调体验:** 聊天框的重构说明团队正在细化“个人 AI 助手”的核心高频交互区域，集成附件选择器与推理控制按钮预示着对多模态和复杂推演场景的前瞻性布局。

### 7. 用户反馈摘要
*   虽然今日没有新开的 Issues，但从 [PR #986](https://github.com/moltis-org/moltis/pull/986) 的合并可以看出，社区对本地化（i18n）的参与热情较高。非英语母语用户对界面的翻译精度有专业要求，反映了 Moltis 在全球个人 AI 助手用户群体中的渗透率正在增加。
*   从 [PR #985](https://github.com/moltis-org/moltis/pull/985) 的改动点（处理 Token 截断、完善附件入口）可以反推出，用户在日常高频使用中非常看重上下文容量的可视化以及多模态（语音/附件）输入的便捷性。

### 8. 待处理积压
目前项目有两个重要的 OPEN 状态 PR 正在等待进一步的 Review 和合并，提醒维护团队关注推进节奏：
*   ⚠️ **[PR #566](https://github.com/moltis-org/moltis/pull/566) feat(external-agents):** 该 PR 自 4 月初开启至今已超过一个月，涉及底层网关 API 和会话生命周期的重大重构，建议维护者尽快安排深度 Code Review 或设立推进里程碑。
*   ⚠️ **[PR #987](https://github.com/moltis-org/moltis/pull/987) Replace docs deployment:** 文档站点的迁移工作需确认对现有 URL 路由兼容性的测试情况，建议尽早合入主分支以替换老旧的文档渲染方案。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-10)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持了极高的社区活跃度与开发迭代速度。项目在过去24小时内处理了 **42 条 Issues**（新开/活跃 23 条，关闭 19 条）和 **30 条 PRs**（待合并 8 条，合并/关闭 22 条），Issues 闭环率极高，展现出维护团队强大的响应与处理能力。今日正式发布了 **v1.1.6** 及其测试版本，重点优化了 Windows 环境兼容性并新增了 Agent 状态 API。社区当前的热点主要集中于超长上下文场景下的前端性能优化、多模型提供商的兼容性适配，以及 MCP（Model Context Protocol）长连接的稳定性治理。

---

## 2. 版本发布
今日项目连续发布了两个版本，正式推出了 **v1.1.6**：

- **[v1.1.6-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6-beta.2)**
  - 修复了命令分发中 `channel` 变量的命名问题 ([PR #4134](https://github.com/agentscope-ai/QwenPaw/pull/4134))。
  - 性能优化：针对控制台前端，跳过非方向键的聊天历史记录查找，提升了 UI 响应速度 ([PR #4130](https://github.com/agentscope-ai/QwenPaw/pull/4130))。

- **[v1.1.6](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6)**
  - **新增特性**：
    - **Windows 诊断增强**：`qwenpaw doctor` 命令现可检查 Windows 特定的环境问题，包括长路径支持、PowerShell 语言模式和工作目录路径长度 ([PR #4032](https://github.com/agentscope-ai/QwenPaw/pull/4032))。
    - **Agent 状态 API**：新增了获取 Agent 运行状态的接口。
  - *迁移注意*：官方合并了多个关于 Release Notes 文档的更新 ([PR #4168](https://github.com/agentscope-ai/QwenPaw/pull/4168), [PR #4163](https://github.com/agentscope-ai/QwenPaw/pull/4163))，升级后建议查看完整变更日志。

---

## 3. 项目进展
今日项目合并了大量 PR，在系统稳定性、前端体验和跨平台支持上迈出了坚实的一步：

- **内存泄漏修复**：合并了 [PR #4152](https://github.com/agentscope-ai/QwenPaw/pull/4152)，修复了 MCP 有状态客户端后台任务的生命周期泄漏问题，有效解决了长期运行导致的孤儿进程与内存堆积。
- **前端架构优化**：[PR #4153](https://github.com/agentscope-ai/QwenPaw/pull/4153) 抽离了 `QrcodeAuthBlock` 组件并修复了抽屉关闭时的轮询泄漏；[PR #4148](https://github.com/agentscope-ai/QwenPaw/pull/4148) 进一步优化了关闭时的状态清理。
- **配置持久化**：[PR #4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) 修复了多智能体保存配置时嵌套数据丢失的严重问题。
- **生态丰富**：[PR #3149](https://github.com/agentscope-ai/QwenPaw/pull/3149) 正式支持 MCP 工具列表拉取；[PR #4112](https://github.com/agentscope-ai/QwenPaw/pull/4112) 新增了企业微信的工具交互审批卡片。

---

## 4. 社区热点
今日社区讨论激烈，多个 Issue 反映了用户在复杂业务场景下的诉求：

- **超多轮对话的性能瓶颈**：[Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) (11条评论)。用户在进行超过 200 轮的工程级代码迭代（含 A2A 协同）时，页面滚动严重卡顿。这反映了 CoPaw 在重度 RAG 和长历史上下文的前端渲染上存在性能痛点。
- **模型提供商兼容性**：[Issue #4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) (10条评论) 反映升级到 v1.1.5.post2 后 opencode 模型不可用；[Issue #4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) (8条评论) 报告了火山引擎配置失败。说明近期底层 API 调度的重构影响到了部分第三方提供商。
- **中文提示词支持**：[Issue #4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) (7条评论)。用户讨论了针对 DeepSeek/GLM 等具备中文思维链模型的本地化 Prompt 支持，社区对减少翻译带来的信息折损期待较高。

---

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已在最新版本或 PR 中修复：

1. **[高严重度] 前端 CPU 占用过高**：[Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) 反映 WebUI 在生成回复时导致系统巨卡，影响宿主机正常工作。
2. **[高严重度] 智能体配置无法持久化**：[Issue #4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) 报告多 Agent 环境下配置互相覆盖/丢失。**状态：已修复** ([PR #4157](https://github.com/agentscope-ai/QwenPaw/pull/4157))。
3. **[中严重度] MCP 进程累积与内存泄漏**：[Issue #4105](https://github.com/agentscope-ai/QwenPaw/issues/4105) 报告导致 1.5 天泄漏约 18GB 内存。**状态：已修复** ([PR #4152](https://github.com/agentscope-ai/QwenPaw/pull/4152))。
4. **[中严重度] 网络中断重连失败**：[Issue #4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) 指出开启 HEARTBEAT.md 后，网络波动无法自动恢复。**状态：已修复 (Closed)**。
5. **[中严重度] DashScope 与 LM Studio 报错**：[Issue #4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) 和 [Issue #4147](https://github.com/agentscope-ai/QwenPaw/issues/4147) 报告了 API 配置读取失败和 422 参数解析错误，目前处于排查跟进阶段。

---

## 6. 功能请求与路线图信号
结合社区提案与开放中的 PR，以下功能极有可能在后续版本落地：

- **桌面端重构与系统托盘**：[Issue #4158](https://github.com/agentscope-ai/QwenPaw/issues/4158) 呼吁优化客户端启动速度。目前 [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 正在引入 Tauri 2.x 替代原有方案，[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) 增加了 Win32 系统托盘功能，这标志着 CoPaw 正在向轻量级本地桌面应用演进。
- **浏览器批处理与接管**：[Issue #4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) 及 [PR #4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) 实现了 `browser_use` 的复合动作批处理；[Issue #4155](https://github.com/agentscope-ai/QwenPaw/issues/4155) 提议通过 CDP 支持接管已打开的 Chrome 实例，大幅提升 RPA 场景体验。
- **企业级长期记忆**：[Issue #2307](https://github.com/agentscope-ai/QwenPaw/issues/2307) 与 [PR #2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) 提出基于 ADBPG 的可选长期记忆管理器，有望增强 Agent 的企业级持久化能力。

---

## 7. 用户反馈摘要
从今日 Issues 中可以清晰提炼出 CoPaw 核心用户的典型画像及反馈：
- **使用场景深化**：大量用户开始将 CoPaw 用于“项目级代码多版本迭代”、“多 Agent 协同工作”以及“本地私有化部署（如 Ollama, LM Studio, 私有 Qwen2.5）”。这对框架的上下文管理能力和多模型兼容性提出了极高要求。
- **痛点反馈**：
  - **重度使用下的性能衰减**：前端长对话卡顿、本地模型调用时的系统卡顿。
  - **配置同步体验割裂**：如在 Skill 文件夹同步 ([Issue #4079](https://github.com/agentscope-ai/QwenPaw/issues/4079)) 和 Agent名称硬编码 ([Issue #4099](https://github.com/agentscope-ai/QwenPaw/issues/4099)) 上遇到的阻力。
  - **国际化与细节**：[Issue #4156](https://github.com/agentscope-ai/QwenPaw/issues/4156) 报告的语言切换无效，表明前端 UI 的重构还在进行中，细节仍需打磨。

---

## 8. 待处理积压
以下高价值或高影响 Issue/PR 等待维护团队进一步 Review 或响应：

- **[PR] 语义化 Skill 路由**：[PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)。该 PR 拟通过 Embedding 检索过滤 Skills，极大节省 Token 消耗。已开启近一个月，需团队尽快推进讨论与合并。
- **[Issue] DeepSeek Think 标签解析异常**：[Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051)。涉及主流模型的核心体验，仍处于 Open 状态。
- **[PR] 桌面端 Tauri 架构替换**：[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)。属于破坏性/大架构变更，目前处于 Under Review，需要架构负责人把控进度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 2026 年 5 月 10 日 ZeroClaw 项目动态日报。

---

# 📊 ZeroClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目呈现出**极高的社区活跃度与提交频率**。系统共更新了 50 条 Issues（其中 49 条处于活跃或新开状态）和 45 条 PRs，未发布新版本。今日的焦点高度集中在**多智能体架构实现**以及**Provider 兼容性与上下文压缩**的缺陷修复上。核心维护者与社区开发者提交了多个关键的修复 PR，尽管整体代码合并速度有所滞后（45个PR中仅10个被合并/关闭，待合并达35个），但底层架构（如 v0.8.0 多智能体运行时）正在稳步成型。

---

## 2. 版本发布
**无新版本发布。**
当前主分支保持活跃开发状态，大量 PR 正在瞄准下一个里程碑（推测为 v0.7.6 的 Skills UX 优化以及 v0.8.0 的 Multi-agent 架构）进行冲刺。

---

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭（另有 35 个待合并），重点推进了以下核心模块的演进：

*   **Shell 安全执行修补**: PR [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) 修复了直连会话中 shell 调用绕过外部审批流的安全漏洞，增强了 ACP/WebSocket 会话的管控力。
*   **多模态与图像处理修复**: PR [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) 统一了跨代理和工具历史记录的图像标记，修复了多模态上下文传递的异常。
*   **SOP (标准操作程序) 引擎严重缺陷修复**: PR [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) 修复了因遗漏 `reload()` 调用导致运行时永远无法加载并执行任何 SOP 的 S0 级别的严重回归问题。
*   **邮件渠道体验优化**: PR [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) 修复了邮件渠道默认主题和 HTML 附件的三个影响可用性的问题。

---

## 4. 社区热点
今日讨论最多、关注度最高的议题反映了社区对**频道细粒度控制**及**Provider 兼容性**的强烈诉求：

*   **Discord 频道响应限制** ([Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378), 5条评论): 社区希望引入 `allowed_channels` 配置，限制 Bot 仅在特定频道回复。这表明用户在大型 Discord 服务器中部署时，亟需更精细的权限和消息隔离机制。
*   **Matrix 渠道构建失败** ([Issue #6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530), 3条评论): 升级 `matrix-sdk` 至 v0.16.0 后导致递归限制溢出， blocker 了部分使用 Matrix 协议的进阶用户。
*   **OpenAI 兼容Provider的空数组报错** ([Issue #6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298), 3条评论): 针对严格校验的 API（如 DeepSeek），空 `tool_calls` 导致 400 错误。这反映了接入第三方大模型时的边缘场景兼容性仍是痛点。

---

## 5. Bug 与稳定性
今日报告了多个高危 Bug，部分已有正在审查的修复 PR：

*   **S1 - 上下文压缩导致死循环 (已有活跃 PR)**:
    *   [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361): 针对 MiniMax 等兼容 Provider，`context_compression` 会完全丢弃 `tool_calls`，导致无限工具循环。
*   **S1 - OpenAI 兼容历史消息格式错误 (已有修复 PR)**:
    *   [Issue #6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551): 严格的 OpenAI 兼容端点拒绝非开头的 `system` 消息。**修复方案**: [PR #6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552) 已提交，通过合并系统消息至首条解决。
*   **S2 - 事件广播丢失**:
    *   [Issue #6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526): `/api/events` SSE 静默丢弃了网关的 `tool_call` 等事件，严重影响了前端 Dashboard 的可观测性。
*   **S2 - CA 证书信任问题**:
    *   [Issue #6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528): 系统目前不信任自签名 CA，阻断了一些私有化部署场景。

---

## 6. 功能请求与路线图信号
结合今日的 Issues 和 PRs，项目的下一阶段演进方向非常明确：

*   **Multi-Agent (多智能体) 架构落地**: 
    *   [Issue #6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) 提出了每个别名智能体拥有独立工作空间、内存和权限的 V3 架构。
    *   对应的 **核心 PR [PR #6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545)** 今日已经提交至 `integration/v0.8.0` 分支，包含完整的 SQLite/Postgres 迁移与跨引用验证，标志着 ZeroClaw 即将步入多智能体协同时代。
*   **多语言/国际化 (i18n) 支持**:
    *   [Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) 暴露了硬编码英语的问题，随后开发者立即提交了 [PR #6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) 引入了 Fluent 本地化支持，表明项目正致力于非英语市场的拓展。
*   **ACP (Agent Communication Protocol) 会话恢复**:
    *   [Issue #6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) 提出 实现 `session/load` 以支持断点续谈，这将是实现复杂且长耗时 Agent 任务的关键基础设施。

---

## 7. 用户反馈摘要
通过今日的 Issue 提炼，用户的真实体验反馈如下：

*   **痛点 (接入成本与兼容性)**: 接入如 Kimi K2.5 ([Issue #6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)) 等非标准 OpenAI 模型仍需要大量非标准的 Hack 操作。在对话过长时，极易发生上下文溢出并导致模型幻觉 ([Issue #6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517))。
*   **痛点 (本地构建)**: Windows 平台的全量编译依然存在阻碍 ([Issue #6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280))。
*   **满意点 (集成度)**: 用户越来越倾向于使用 ZeroClaw 作为统一网关对接多种协议（Matrix, Discord, WhatsApp），并对目前的高级功能（如 Cron 调度、多模态识别、Skills）表现出浓厚兴趣。

---

## 8. 待处理积压
以下是几个高优先级但长期未得到彻底解决或需要维护者立即介入的重要项目：

*   **153 个 Commits 恢复审计** ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)): 3月份的批量回滚导致大量已审核代码丢失，该 Issue 需要持续追踪以防功能回归。
*   **破坏性操作的会话所有权** ([Issue #5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)): 任何 Agent 可以随意重置/删除其他 Agent 的会话，这是一个严重的架构安全隐患，当前处于 `blocked` 状态亟待核心架构重构。
*   **配置覆盖 (Stomping) 问题** ([Issue #6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309)): Agent 运行时修改配置会意外覆写 `schema_version` 的更新，对运维稳定性造成较大挑战。
*   **PR 审批积压**: 当前有 **35 个待合并的 PR**，其中包括诸如 OTel 可观测性增强 ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)) 和 CI 节点升级 ([PR #6447](https://github.com/zeroclaw-labs/zeroclaw/pull/6447)) 等重要贡献，呼吁维护者团队投入精力进行 Review 以防分支过度发散。

</details>