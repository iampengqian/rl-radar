# OpenClaw 生态日报 2026-04-19

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-18 22:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# OpenClaw 项目动态日报 (2026-04-19)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

OpenClaw 今日维持了极高的社区活跃度，共有 **500 条 Issue 更新**（新开/活跃 344 条，关闭 156 条）和 **500 条 PR 更新**（待合并 326 条，已合并/关闭 174 条）。虽然今日**无新版本发布**，但社区围绕 4.14 版本的回归问题展开了密集排查与修复。从 Issue 数据来看，当前项目面临的主要挑战集中在 **多渠道消息泄露**、**Onboard/CLI 崩溃（trim 错误）** 以及 **OpenRouter 兼容性**三大痛点。PR 侧则呈现积极态势，多位贡献者提交了针对内存管理、认证、流式响应等核心模块的修复，项目整体处于高强度迭代与问题收敛阶段。

---

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 `2026.4.14`。

---

## 3. 项目进展

今日共合并/关闭了 **174 个 PR**，以下为其中较重要的修复与功能推进：

### 核心修复
- **[#68688](https://github.com/openclaw/openclaw/pull/68688) [CLOSED] fix(cli): pass safe cwd to spawned openclaw children**
  修复了切换模型时网关重启失败的崩溃问题（`cachedCwd` 错误），影响面覆盖全部渠道和平台，是今日最高优先级的合并。

- **[#68284](https://github.com/openclaw/openclaw/pull/68284) [CLOSED] refactor(auth): centralize codex oauth ownership in OpenClaw**
  将 Codex OAuth 认证所有权集中到 OpenClaw，解决了之前 auth 状态漂移和健康检查不一致的问题。

- **[#43961](https://github.com/openclaw/openclaw/pull/43961) [CLOSED] fix(gateway): SIGKILL stale process when graceful shutdown times out**
  修复了网关优雅关机超时后的僵尸进程问题，确保端口释放和新进程启动的可靠性。

### 功能增强
- **[#49181](https://github.com/openclaw/openclaw/pull/49181) [CLOSED] feat: add `openclaw usage` CLI command for cost & usage analytics**
  新增 CLI 用量分析命令，支持按日/周/月查看 Agent 成本，解决了用户长期依赖自定义日志解析的痛点。

- **[#49174](https://github.com/openclaw/openclaw/pull/49174) [CLOSED] fix: enforce per-session isolation for cron job visibility and mutations**
  修复了 Cron 任务在多用户部署中的跨会话数据泄露安全问题。

- **[#49153](https://github.com/openclaw/openclaw/pull/49153) [CLOSED] fix: enable token usage tracking for vLLM and SGLang providers**
  为 vLLM/SGLang 本地推理提供商启用了 token 用量追踪。

### 待合并的重要 PR（精选）
- **[#44238](https://github.com/openclaw/openclaw/pull/44238) [OPEN] feat: add automatic config rollback on gateway startup failure** — 网关启动失败时自动回滚配置
- **[#66767](https://github.com/openclaw/openclaw/pull/66767) [OPEN] feat(tui): add local embedded TUI mode** — 无需网关的本地终端模式
- **[#65554](https://github.com/openclaw/openclaw/pull/65554) [OPEN] Jdc4429 media support v2** — WebChat 完整媒体套件
- **[#68694](https://github.com/openclaw/openclaw/pull/68694) [OPEN] FEAT: Add tts and image generation support to xai extension** — xAI 扩展新增图像生成与 TTS
- **[#35071](https://github.com/openclaw/openclaw/pull/35071) [OPEN] feat: Add Eval Framework for skill-creator** — Skill 评估框架

---

## 4. 社区热点

### 🔥 最受关注的讨论

| 排名 | Issue/PR | 评论数 | 核心议题 |
|------|----------|--------|----------|
| 1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) | 96 | **RFC: 原生 Agent 身份与信任验证** — 结合 ERC-8004 与 W3C DID 标准，提出 Agent 身份验证框架 |
| 2 | [#45064](https://github.com/openclaw/openclaw/issues/45064) | 31 | **内存泄漏 OOM** — 2026.3.12 版本基础命令导致 JS 堆溢出（已关闭） |
| 3 | [#14593](https://github.com/openclaw/openclaw/issues/14593) | 24 | **Docker 内 Skill 安装失败** — Linux 容器缺少 brew（👍 17，长期痛点） |
| 4 | [#40082](https://github.com/openclaw/openclaw/issues/40082) | 21 | **Agent 接受任务但不执行** — 回归问题，返回占位回复 |
| 5 | [#36399](https://github.com/openclaw/openclaw/issues/36399) | 21 | **OAuth 多步工具调用卡顿 60s** — Google Gemini CLI 的 429 限流处理缺陷 |

### 热点分析

1. **Agent 安全生态 (#49971, #55342)**：96 条评论的身份验证 RFC 和行为信誉系统提案反映社区对恶意 Skill 的深度忧虑（ClawHub 上曾发现 341 个恶意 Skill）。这是项目从"可用"走向"可信"的关键拐点。

2. **工具调用文本泄露 (#25592, #44905, #42446)**：多个 Issue 反映内部工具调用追踪（NO_REPLY、JSON 参数等）泄露到 Discord/Slack 等外部渠道，严重影响用户体验和安全性。

3. **Onboard/CLI 崩溃集群 (#67353, #67074, #67130, #67076)**：4.14 版本后出现多个 `trim` 相关崩溃报告，涉及不同渠道选择场景，指向共同的底层缺陷。

---

## 5. Bug 与稳定性

### 🔴 严重（崩溃/不可用）

| Bug | 影响 | Fix PR | 状态 |
|-----|------|--------|------|
| [#67353](https://github.com/openclaw/openclaw/issues/67353) Onboard 崩溃: `Cannot read properties of undefined (reading 'trim')` | 新用户无法完成初始化 | 待确认 | 🔴 Open→Closed |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) OAuth 多步调用卡 60s | Gemini CLI 用户基本不可用 | 无 | 🔴 Open |
| [#67780](https://github.com/openclaw/openclaw/issues/67780) contextEngine 插件: `filter is not a function` | 安装该插件后 Agent 消息全部崩溃 | 无 | 🔴 Closed |
| [#67261](https://github.com/openclaw/openclaw/issues/67261) Venice 模型响应缺字段导致崩溃 | 使用 Venice 模型即崩 | 无 | 🔴 Closed |

### 🟠 高（功能回归）

| Bug | 影响 | Fix PR | 状态 |
|-----|------|--------|------|
| [#40082](https://github.com/openclaw/openclaw/issues/40082) Agent 接受任务不执行，返回占位回复 | 核心功能回归 | 无 | 🟠 Open |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) 升级 2026.4.5 失败: Cannot find module '@buape/carbon' | 阻塞升级 (👍 7) | 无 | 🟠 Open |
| [#66975](https://github.com/openclaw/openclaw/issues/66975) Telegram 机器人命令升级后消失 | Bot 菜单按钮丢失 | 无 | 🟠 Open |
| [#68363](https://github.com/openclaw/openclaw/issues/68363) LM Studio 心跳反复加载模型 | 心跳机制回归 | 无 | 🟠 Open |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) `agents add` 写入错误 baseUrl | 影响多提供商配置 | 无 | 🟠 Closed |

### 🟡 中（兼容性/体验问题）

| Bug | 影响 | Fix PR | 状态 |
|-----|------|--------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄露到消息渠道 | UX 严重问题 | 无 | 🟡 Open |
| [#51085](https://github.com/openclaw/openclaw/issues/51085) STT 麦克风按钮被安全头阻止 | Web 端语音输入不可用 | 已定位根因 | 🟡 Closed |
| [#66207](https://github.com/openclaw/openclaw/issues/66207) Control UI 消息闪烁消失 | 聊天体验问题 | 无 | 🟡 Closed |
| [#53639](https://github.com/openclaw/openclaw/issues/53639) OpenRouter 模型定价缓存超时 | 启动报错 | 无 | 🟡 Open |

### OpenRouter 兼容性集群问题

值得注意的是，今日出现了 **至少 4 个** 与 OpenRouter `payloads=0 / incomplete turn` 相关的 Issue：
- [#67698](https://github.com/openclaw/openclaw/issues/67698), [#67575](https://github.com/openclaw/openclaw/issues/67575), [#67425](https://github.com/openclaw/openclaw/issues/67425), [#45774](https://github.com/openclaw/openclaw/issues/45774)

这表明当前版本与 OpenRouter 的流式响应处理存在系统性兼容问题。

---

## 6. 功能请求与路线图信号

| 功能请求 | 讨论热度 | 对应 PR | 纳入可能性 |
|----------|----------|---------|-----------|
| **Agent 身份与信任验证** [#49971](https://github.com/openclaw/openclaw/issues/49971) | 96 评论 | 无 | 🟡 规划阶段，需更多讨论 |
| **Skill 行为信誉系统** [#55342](https://github.com/openclaw/openclaw/issues/55342) | 16 评论 | 无 | 🟡 与 #49971 互补 |
| **网关重启通知** [#51130](https://github.com/openclaw/openclaw/issues/51130) | 9 评论 | 无 | 🟢 需求明确，实现简单 |
| **多提供商 Secrets 管理** [#17311](https://github.com/openclaw/openclaw/issues/17311) | 6 评论 | #16663 (GCP/AWS/Azure/Vault) | 🟢 有基础 PR |
| **Gateway 自动回滚** | — | [#44238](https://github.com/openclaw/openclaw/pull/44238) | 🟢 PR 已提交 |
| **本地 TUI 模式** | — | [#66767](https://github.com/openclaw/openclaw/pull/66767) | 🟢 PR 已提交 |
| **Skill 评估框架** | — | [#35071](https://github.com/openclaw/openclaw/pull/35071) | 🟢 PR 已提交 |
| **WebChat 完整媒体支持** | — | [#65554](https://github.com/openclaw/openclaw/pull/65554) | 🟢 PR 已提交 |

**路线图信号**：项目正朝三个方向发力——**安全可信**（身份验证、行为信誉、SSRF 防护）、**本地化/轻量化**（TUI 模式、vLLM/SGLang 支持）、**多模态**（xAI 图像生成、WebChat 媒体套件）。

---

## 7. 用户反馈摘要

### 真实痛点
1. **"Agent 不干活"**：[#40082](https://github.com/openclaw/openclaw/issues/40082) 反映 Agent 接受任务后返回 "One sec" 等占位回复，用户感觉"系统假装在工作"。
2. **消息泄露**：[#25592](https://github.com/openclaw/openclaw/issues/25592) 中用户抱怨内部处理文本（错误日志、工具参数）被发到 Slack/iMessage，严重影响使用体验。
3. **升级恐惧**：[#36994](https://github.com/openclaw/openclaw/issues/36994) "everything worked on the first run and shortly after keep breaking" 代表了多个用户对频繁回归的沮丧。
4. **Docker 体验差**：[#14593](https://github.com/openclaw/openclaw/issues/14593) (👍 17) 反映官方 Docker 镜像缺少基本依赖（brew），新手 Onboard 即失败。

### 满意点
- 用户对 **多渠道支持**（Telegram、Discord、Matrix、iMessage 等 20+ 渠道）的广度表示认可。
- **本地模型支持**（Ollama、LM Studio、vLLM）是用户选择 OpenClaw 的重要原因。
- **社区响应速度**较快，Onboard 崩溃类问题通常在 1-3 天内被关闭。

### 典型使用场景
- 通过 Telegram/Discord 运行个人 AI 助手，管理日常任务
- 使用 OpenRouter 进行多模型切换和成本优化
- 在 Docker 中部署网关，通过 WebChat 提供团队服务
- 利用 Subagent 进行复杂多步骤工作流编排

---

## 8. 待处理积压

### 长期未解决的重要 Issue

| Issue | 开放天数 | 👍 | 影响范围 | 优先级建议 |
|-------|----------|-----|----------|-----------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 内 brew 缺失 | 66 天 | 17 | 新用户 Onboard | **P0** |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) Agent 不执行任务 | 42 天 | 1 | 核心功能 | **P0** |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用文本泄露 | 54 天 | 0 | 安全/UX | **P1** |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) memoryFlush 不触发 | 70 天 | 0 | 内存管理 | **P1** |
| [#36982](https://github.com/openclaw/openclaw/issues/36982) Qwen OAuth 频繁过期 | 44 天 | 6 | 中国用户 | **P1** |
| [#36651](https://github.com/openclaw/openclaw/issues/36651) Agent 工具不加载 | 44 天 | 1 | Telegram 用户 | **P1** |
| [#5116](https://github.com/openclaw/openclaw/issues/5116) iMessage FDA 不传播 | 78 天 | 4 | macOS 用户 | **P1** |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) image 工具不支持自定义提供商 | 48 天 | 5 | 多模型用户 | **P2** |
| [#28222](https://github.com/openclaw/openclaw/issues/28222) diagnostics-otel 插件加载失败 | 51 天 | 4 | 可观测性 | **P2** |

### 长期未合并的重要 PR

| PR | 开放天数 | 规模 | 说明 |
|----|----------|------|------|
| [#44238](https://github.com/openclaw/openclaw/pull/44238) 配置自动回滚 | 38 天 | XL | 高价值，建议优先 Review |
| [#35071](https://github.com/openclaw/openclaw/pull/35071) Skill 评估框架 | 46 天 | L | 生态质量关键基建 |
| [#43556](https://github.com/openclaw/openclaw/issues/43556) streamTo 修复 | 38 天 | — | 👍 8，Subagent 核心问题 |
| [#47277](https://github.com/openclaw/openclaw/pull/47277) 用户级内存隔离 | 34 天 | M | 多租户必备 |

---

> **项目健康度评估**：🟡 **活跃但需关注质量**
> 
> 社区参与度极高（日活 500+ Issues/PRs），但回归问题频发（Onboard 崩溃、OpenRouter 兼容性、消息泄露）反映出 CI 覆盖和集成测试存在短板。建议维护者优先处理 **Docker Onboard 体验** 和 **工具调用文本泄露** 两个长期积压问题，并加速合并已就绪的基础设施 PR（配置回滚、内存隔离）。

---

## 横向生态对比

以下是为您生成的 2026 年 4 月 19 日个人 AI 助手与自主智能体开源生态横向对比分析报告：

---

# 📊 个人 AI 助手与智能体开源生态横向对比分析报告 (2026-04-19)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“基础对话可用”向“复杂任务可信与深度自动化”跨越的关键阶段**。各项目在底座能力稳定后，正全面拥抱多渠道接入与本地化模型支持，以满足极客与企业用户的隐私及定制化诉求。然而，随着系统复杂度的指数级上升，**内存管理瓶颈、提供商兼容性及底层安全隔离问题**已成为今日所有高活跃项目共同面临的深水区挑战。

## 2. 各项目活跃度对比
根据过去 24 小时的数据，当前生态呈现明显的“头部集中、多点开花”态势。

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度评估 | 核心状态简述 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (344 新/活) | 500 (326 待处) | 无 | 🟡 **活跃但需关注质量** | 处于高强度迭代与核心问题收敛期，积压了大量边界兼容性 Bug。 |
| **NanoBot** | 24 (9 新/活) | 50 (12 待处) | 无 | 🟢 **健康且稳步演进** | 重心聚焦底层架构（如模板、内存），修复响应极快，合并率高。 |
| **PicoClaw** | 11 新增，0 关闭 | 9 (4 已合) | `v0.2.6-nightly` | 🟠 **高迭代伴随高风险** | 架构重构中，Nightly 版本暴露出阻断级别的提供商鉴权危机。 |
| **NanoClaw** | 6 动态 | 22 (15 已合) | 无 | 🟢 **架构重构高歌猛进** | 深度解耦 v1 代码，模块化重构取得突破性进展。 |
| **CoPaw** | 12 新增 | 9 待合并 | 无 | 🟢 **健康积蓄力量** | 焦点对齐本地模型（Ollama/llama.cpp）兼容性与前端体验。 |
| **LobsterAI** | 0 | 2 更新(无合并) | 无 | 🟡 **维护期/停滞** | 仅处理长尾 PR，急需维护者介入清理积压。 |
| **其他 (IronClaw等)**| 0 | 0 | 无 | ⚪ **静默** | 过去 24 小时无实质性社区活动。 |

## 3. OpenClaw 在生态中的定位
作为生态内当之无愧的**“核心参照”与流量担当**，OpenClaw 的定位类似于 AI Agent 领域的“综合武器库”：
* **对比优势**：具备压倒性的社区规模（日千级 Issue/PR 互动）和广度（20+ 消息渠道支持）。它是今天唯一将企业级安全（Agent 身份 RFC、隔离机制）和进阶成本管控（usage 分析）推向议事日程的项目。
* **技术路线差异**：不同于 PicoClaw 的极简/端侧路线或 NanoBot 的单点深度优化，OpenClaw 走的是**大而全的网关中枢路线**，强依赖多模型网关调度，但这也使其成为了 API 兼容性重灾区（如近期集中爆发的 OpenRouter 兼容问题）。
* **当前短板**：庞大的体积和快速的迭代导致“升级回归恐惧”和严重的新手 Onboard 痛点（如 Docker 基础依赖缺失积压 60 天未决）。

## 4. 共同关注的技术方向
通过交叉分析，多个独立项目今日涌现出高度一致的演进方向：

1. **提供商容错与智能路由**
   * *涉及项目*：**OpenClaw, NanoClaw, NanoBot**
   * *具体诉求*：面对大模型 API 的频繁限频 (429) 或宕机，社区强烈要求多模型自动降级。NanoClaw 引入了 Codex 作为备用节点；NanoBot 实现了按复杂度的模型路由。
2. **长文本/多轮对话的记忆重压**
   * *涉及项目*：**NanoBot, CoPaw, OpenClaw**
   * *具体诉求*：现有 `history -> memory -> compact` 机制在大型项目下丢失细节。NanoBot 社区在激烈讨论压缩比硬编码，CoPaw 则正试图重构 auto-memory（梦境机制）以彻底解决上下文遗忘问题。
3. **MCP (Model Context Protocol) 兼容与鲁棒性**
   * *涉及项目*：**PicoClaw, NanoBot**
   * *具体诉求*：作为今年的技术热点，MCP 的稳定性正受到挑战。社区正致力于解决 MCP 参数解析兼容性（如 TS 服务器报错）及 HTTP/SSE 传输的断线重连问题。
4. **边缘计算与本地模型调优**
   * *涉及项目*：**CoPaw, LobsterAI, PicoClaw**
   * *具体诉求*：对 Ollama、LM Studio 和 llama.cpp 的无缝支持已成为“刚需”，且用户对本地模型在流式输出、Tool Call 解析上的缺陷容忍度极低。

## 5. 差异化定位分析
各项目根据其受众和技术选型，形成了明显的差异化护城河：

* **OpenClaw (全栈中枢)**：目标受众为团队及重度极客。架构重度依赖 Gateway，强调多租户、多渠道并发与安全隔离。
* **NanoBot (精益内核)**：偏向单机/个人用户的效率工具。采用 `identity.md` + `SOUL.md` 的双模板驱动，极简且极度关注 Prompt 工程的底层逻辑。
* **PicoClaw (端侧探索者)**：极具极客色彩。不仅追求轻量，更探索将 AI 留在随身设备（如 Android Termux），并试图反向控制手机执行自动化任务（类似 Botdrop）。
* **NanoClaw (去中心化先锋)**：深度拥抱 Web3 协议（如 Nostr 生态和 Blossom 托管），模块化极其彻底，强调渠道和凭证的完全私有化部署。
* **CoPaw (开箱即用派)**：依托大厂基座（Qwen），侧重于提供无缝的 Desktop 体验（一键脚本）和开箱即用的 Console UI，对小白相对友好。

## 6. 社区热度与成熟度
* **第一梯队：狂飙突进期** — **OpenClaw, NanoClaw**。日处理 PR/Issue 数以百计，但 OpenClaw 陷入了“代码规模膨胀与 QA 滞后”的阵痛，而 NanoClaw 正享受架构重构带来的快速扩张红利。
* **第二梯队：深水攻坚期** — **NanoBot, CoPaw**。活跃度稳健，社区讨论极具深度（如 NanoBot 探讨 Agent 生命周期感知，CoPaw 探讨自我进化架构），正攻克内存和复杂路由等底层硬骨头。
* **第三梯队：探索与求稳期** — **PicoClaw, LobsterAI**。PicoClaw 在 nightly 版本中艰难试错提供商解耦；LobsterAI 则陷入低迷，亟需核心维护者苏醒以处理积压的 pr 补丁。

## 7. 值得关注的趋势信号
对于 AI 智能体开发者和创业者，今日的社区动态释放了三个强烈的信号：

1. **本地文件解析与自动化控制是下一片蓝海**：用户已不满足于“聊天”，他们强烈要求 Agent 能够解析复杂 PPTX、拉取几百兆的视频文件，甚至通过 CDP 协议操控浏览器。**“纯 API 套壳 Agent 将被淘汰，具备系统级 I/O 能力的 Agent 才是未来”**。
2. **Agent 安全与信任体系建立迫在眉睫**：OpenClaw 中关于恶意 Skill 的讨论（RFC-8004 与 W3C DID 验证）表明，随着 Agent 获得执行权，开源生态正在自发形成“应用商店式”的安全审查机制。
3. **对“失控 AI”的防范成为新刚需**：多个项目用户今日抱怨 AI 的“自主漂移”（随意修改已稳定的配置或代码）。这意味着未来的 Agent 架构必须引入“围栏机制”（如 PicoClaw 的 Agent Shield 和 CoPaw 探讨的权限模块），确保 AI 只在授权范围内工作。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-19)

## 1. 今日速览
NanoBot 项目在过去24小时内保持**高度活跃**的开发与社区互动状态。今日共有 24 个 Issue 得到更新（新开/活跃 9 个，关闭 15 个），同时有高达 50 个 Pull Request 发生状态变更（其中待合并 12 个，已合并/关闭 38 个），合并率极高。项目整体重心目前明显聚焦于**记忆系统的深度优化、基础组件的鲁棒性修复以及工程化建设（如引入模板体系）**。今日无新版本发布，但高频的代码合并表明项目正处于快速迭代和功能积蓄期。

---

## 2. 版本发布
* **无新版本发布。** 
*(注：虽然今日无正式版发布，但大量关于核心逻辑的 PR 已合并进主干，预计近期会有包含重大改进的新版本迭代。)*

---

## 3. 项目进展
今日共有 38 个 PR 被成功合并或关闭，项目在核心功能、配置体验和模板架构上取得了显著进展：

* **模板架构重构 (Refactor):** 
  * PR [#3275](https://github.com/HKUDS/nanobot/pull/3275) / [#3276](https://github.com/HKUDS/nanobot/pull/3276) 重构了系统模板，将行为指令从 `identity.md` 移至 `SOUL.md`。明确了单一职责：`identity.md` 仅保留能力事实，`SOUL.md` 专注行为规则，为后续Prompt优化奠定基础。
* **向导与配置增强:**
  * PR [#3273](https://github.com/HKUDS/nanobot/pull/3273) 在设置向导中新增了 Channel Common 和 API Server 菜单，并加入了 Pydantic 字段约束的实时验证，大幅降低用户的配置出错率。
* **模型路由优化:**
  * PR [#3109](https://github.com/HKUDS/nanobot/pull/3109) 引入了轻量级、零依赖的模型路由器。该功能可自动将简单对话任务路由到更便宜的“轻量模型”，而复杂任务保持使用主模型，有效平衡了性能与成本。
* **底层 Bug 修复:**
  * PR [#3112](https://github.com/HKUDS/nanobot/pull/3112) 修复了配置解析时 API Base URL 的匹配逻辑缺陷；PR [#3125](https://github.com/HKUDS/nanobot/pull/3125) 加固了 cron 工具的合约校验并阻止重复调用。
  * PR [#3289](https://github.com/HKUDS/nanobot/pull/3289) 修复了 GitStore 在 workspace 中错误创建嵌套 repo 并覆盖 `.gitignore` 的严重问题。

---

## 4. 社区热点
今日社区讨论焦点集中在**长期记忆限制**与**系统可定制性**上：

* **🔥 长期/大型项目场景下的记忆系统局限** — [Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)
  * **动态：** 该 Issue 获得 **13 条评论** 和 **4 次点赞**，是今日互动量最高的议题。
  * **分析：** 社区深度用户指出，在长周期项目中，现有的 Session → `history.jsonl` → `MEMORY.md` 架构在保留细节上显得吃力。这反映出随着用户将 NanoBot 应用于更复杂的企业级场景，基础的记忆上下文注入策略已遭遇瓶颈。
* **讨论 `compaction` 策略的演进** — [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) 
  * **动态：** 作者提出“触发点应被工程化硬编码，而非完全配置化”，引发对压缩指标设计的讨论。这表明社区在追求灵活性的同时，也极度关注系统的底线稳定性。
* **社区规范建设提案** — [Issue #3283](https://github.com/HKUDS/nanobot/issues/3283)
  * **动态：** 社区成员主动提议引入标准的 Issue/PR 模板，以解决当前提交信息不全（如缺少系统版本、报错日志）导致维护成本上升的问题。令人欣慰的是，开发团队反应迅速，已在今日通过 [PR #3287](https://github.com/HKUDS/nanobot/pull/3287) 落地了该功能。

---

## 5. Bug 与稳定性
今日报告并处理了多个涉及系统稳定性和 API 兼容性的关键 Bug：

1. **P0 / 鉴权静默失败**: [Issue #3251](https://github.com/HKUDS/nanobot/issues/3251) (已关闭)
   * **问题：** `config.json` 支持 `${VAR}` 环境变量语法但未被正确解析，导致 DeskClaw 飞书通道鉴权彻底失败中断 78 小时。
   * **状态：** 已确认并修复。
2. **P1 / Agent 死循环**: [Issue #3220](https://github.com/HKUDS/nanobot/issues/3220) (已关闭)
   * **问题：** 在面对注入了非标准 `tool_calls` 的 API 网关（`finish_reason != "tool_calls"`）时，Agent 会陷入无限空转的工具调用死循环。此 Issue 被标记为 `good first issue` 并已关闭。
3. **P1 / 流式响应中断**: [Issue #3256](https://github.com/HKUDS/nanobot/issues/3256) (已关闭)
   * **问题：** LLM 流式响应中途断开时，系统将残缺的 partial response 视为成功，未触发重试机制。
4. **P1 / 阻塞整个会话**: [Issue #2804](https://github.com/HKUDS/nanobot/issues/2804) (已关闭)
   * **问题：** DuckDuckGo 搜索挂起会导致整个 Session 停止响应。
   * **状态：** 底层异步调用机制已修复。
5. **未修复 / Provider 兼容性**: [Issue #3206](https://github.com/HKUDS/nanobot/issues/3206) (Open)
   * **问题：** Gemini API 报错 `Multiple authentication credentials received`，多出现在使用代理网关的用户群中。

---

## 6. 功能请求与路线图信号
结合今日的 Feature Request 和对应的 PR 动态，以下是极具潜力的下版本演进方向：

* **记忆压缩比率可配置化 (高优先级)：**
  * **请求：** [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) 希望控制上下文压缩比例。
  * **行动：** 出现了高度同质化的 PR 竞争开发（如已关闭的 [PR #3278](https://github.com/HKUDS/nanobot/pull/3278), [PR #3281](https://github.com/HKUDS/nanobot/pull/3281) 和目前仍 Open 的 [PR #3285](https://github.com/HKUDS/nanobot/pull/3285)）。维护者正在评估最佳的参数范围（0.1~0.95），**必定会进入下一版本**。
* **Skill 统一管理工具：**
  * **请求：** 用户希望更规范地管理技能文件。
  * **行动：** [PR #3137](https://github.com/HKUDS/nanobot/pull/3137) 提出了一套统一的 `manage_skill` CRUD 工具，将所有写操作限制在 `workspace/skills` 中，目前处于 Open 状态等待合并。
* **MCP 断线重连机制：**
  * **请求：** 当使用 HTTP/SSE 传输的 MCP 服务器重启时，缓存的 Session 会导致工具调用崩溃。
  * **行动：** [PR #3290](https://github.com/HKUDS/nanobot/pull/3290) 引入了针对 `ClosedResourceError` 的重连机制，进一步增强了作为 AI Agent 框架的健壮性。

---

## 7. 用户反馈摘要
从近期的评论和 Issue 提炼出当前用户的真实痛点与反馈如下：

* **痛点：AI 自主行为不可控。** 多名用户反映更新至新版 Dream 进程后，AI 会随意修改已经运行良好的文件，引入“噪音”。用户迫切需要开关或限制 AI 自主漂移的能力（[Issue #3282](https://github.com/HKUDS/nanobot/issues/3282)）。
* **痛点：生命周期感知弱。** 以 systemd 等后台模式运行 Gateway 时缺乏状态反馈，进程挂掉重启用户毫不知情（[Issue #3279](https://github.com/HKUDS/nanobot/issues/3279)）。
* **使用场景：** 从 [Issue #3250](https://github.com/HKUDS/nanobot/issues/3250)（解析复杂 PPTX）和 [Issue #2853](https://github.com/HKUDS/nanobot/issues/2853)（调用 Sub Agent）可以看出，用户正越来越多地将 NanoBot 接入企业级数据流和 Multi-Agent 网络中，这对文件解析的细粒度和 Agent 间通信的稳定性提出了更高要求。
* **满意度：** 新手依旧给予极高评价（如：“代码整洁、轻巧、容易上手，探索起来是一种享受”），但高阶用户在系统深层（Provider兼容、记忆截断、底层流处理）遇到不少阻力。

---

## 8. 待处理积压
以下重要 PR / Issue 目前处于 Open 或 WIP 状态，亟待维护者 Review：

1. **[PR #2526](https://github.com/HKUDS/nanobot/pull/2526) [OPEN]:** 修复用户发送 `/stop` 时，Agent 丢失当前轮次用户消息和工具调用记录的 Bug。该 PR 对保持会话连贯性至关重要。
2. **[PR #3263](https://github.com/HKUDS/nanobot/pull/3263) [OPEN]:** 引导 LLM 在需要时主动读取完整的 session history 文件，以缓解多轮对话中 prompt 压缩带来的信息丢失，这是对记忆系统的一个重要补充。
3. **[PR #3286](https://github.com/HKUDS/nanobot/pull/3286) [OPEN]:** 关于 WebSocket 的重度更新（包含生命周期、工具流式传输和 Delta 分块处理），涉及底层架构变动，需要细致 Review。
4. **[PR #3268](https://github.com/HKUDS/nanobot/pull/3268) [WIP]:** 增加基于正则表达式的黑名单机制，以防止 Agent 在运行中越权修改 `channels_config` 等核心配置，属于高价值的安全防护特性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project daily report for 2026-04-19, based on the provided GitHub data.

---

# 📊 PicoClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
过去24小时内，PicoClaw 项目保持着**高活跃度**与**快速迭代**的节奏。项目成功发布了 `v0.2.6-nightly.20260418` 每日构建版本。社区参与度极高，新增或重新激活了 11 个 Issue，并处理了 9 个 Pull Requests。当前工作重心明显聚焦于 **v0.2.6 版本的 Provider 兼容性修复（特别是鉴权与兼容性问题）**、**底座架构的重构**以及 **MCP (Model Context Protocol) 交互体验的优化**。不过，今日新报 Bug 数量较多且无 Issue 被关闭，说明项目在引入新特性时面临一定的稳定性考验。

## 2. 版本发布
- **[nightly] Nightly Build for v0.2.6-nightly.20260418.6126ede9**
  - **类型**: 自动化每日构建版本
  - **警告**: 官方提示此为自动构建，可能存在不稳定现象，需谨慎用于生产环境。
  - **变更范围**: 对比 `v0.2.6` 到 `main` 分支的完整代码变更。
  - **迁移注意**: 鉴于今日社区反馈了多个关于 API Key 丢失和 Provider 401 鉴权失败的问题，建议正在测试 v0.2.6 版本的用户密切关注配置文件的兼容性。

## 3. 项目进展
今日共更新 9 个 PR（其中 4 个已关闭/合并）。项目的整体架构正在向更健壮的解耦设计迈进：

- **架构与解耦重构**: 
  - PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) 正在进行重要的重构，将通道名称与提供者类型解耦，以支持同一 Provider 的多实例化，这是提升系统扩展性的关键一步。
- **MCP 交互体验提升**:
  - PR [#2535](https://github.com/sipeed/picoclaw/pull/2535) 引入了直观的 MCP 斜杠命令，极大降低了用户管理和查看 MCP 服务器状态的工具门槛。
- **Bug 修复与规范化**:
  - PR [#2579](https://github.com/sipeed/picoclaw/pull/2579) (已合并) 修复了 MCP 调用工具时 `arguments=nil` 导致与 Zod-based TS 服务器不兼容的问题。
  - PR [#2581](https://github.com/sipeed/picoclaw/pull/2581) 修复了 ChatGPT Codex 模型在流式输出时丢失内容的解析 Bug。
- **安全与多用户支持**:
  - PR [#2313](https://github.com/sipeed/picoclaw/pull/2313) 正在推进“Agent Shield”安全套件的集成，引入多用户支持和 Skills 白名单。
- *(注：另有来自账号 `keep-me` 的 3 个包含敏感信息噪音的 PR [#2577](https://github.com/sipeed/picoclaw/pull/2577), [#2576](https://github.com/sipeed/picoclaw/pull/2576), [#2575](https://github.com/sipeed/picoclaw/pull/2575) 已被关闭)*。

## 4. 社区热点
今日讨论最活跃、关注度最高的议题集中在**本地化部署支持**与**跨端自动化能力**：

1. **[9 评论/2 👍] [Task] self-upgrade support** ([#618](https://github.com/sipeed/picoclaw/issues/618))
   - **分析**: 程序的“自更新/自升级”机制是当前社区最迫切的基础设施需求。用户希望在不同环境（Ubuntu, Windows, 嵌入式 opkg）下实现无感更新，以持续获取最新 AI 特性。
2. **[8 评论/2 👍] Docs: Add guide for running PicoClaw on Android via Termux** ([#286](https://github.com/sipeed/picoclaw/issues/286))
   - **分析**: 表明大量用户尝试将 PicoClaw 运行在 Android 设备上，将其变为随身便携的 AI 助手，相关文档指南需求极高。
3. **[7 评论/1 👍] Feature: Android Device Automation & Remote Operations** ([#292](https://github.com/sipeed/picoclaw/issues/292))
   - **分析**: 用户不仅希望在 Android 上运行 PicoClaw，更希望它能作为“桥接层”反向控制手机执行自动化任务（类 Botdrop 方案），这是个人 AI Agent 迈向实体设备控制的重要信号。

## 5. Bug 与稳定性
今日新增了大量与 Provider（模型提供商）相关的严重 Bug，主要集中在 v0.2.6 版本，需引起核心团队高度警惕：

- 🔴 **P0 严重级别 (核心功能阻断)**:
  - **API Key 静默丢失**: Issue [#2578](https://github.com/sipeed/picoclaw/issues/2578) 指出 `openai_compat` 在 v0.2.6 中不会发送 Authorization header，导致所有 HTTP 模型失效。（暂无明确关联 Fix PR）
  - **DeepSeek 鉴权失败**: Issue [#2584](https://github.com/sipeed/picoclaw/issues/2584) 报告即使 Key 正确也会遭遇 401 Authentication Fails。（暂无明确关联 Fix PR）
- 🟡 **P1 中等级别**:
  - **Ollama 兼容性问题**: Issue [#2583](https://github.com/sipeed/picoclaw/issues/2583) 报告本地 qwen3.5 和 gemma4 模型输出被解析为空。
  - **第三方 API 调用失败**: Issue [#2046](https://github.com/sipeed/picoclaw/issues/2046) 提及 LongCat API 无法正常调用工具。

## 6. 功能请求与路线图信号
结合用户呼声与当前已有的 PR，以下功能极有可能在后续版本中落地：

- **Web Search 自动降级机制**: Issue [#2582](https://github.com/sipeed/picoclaw/issues/2582) 提出当搜索 API 额度耗尽时，系统应按链式顺序（Brave → Tavily → Perplexity → DuckDuckGo）自动降级。这极大增强了 AI Agent 执行长期任务的鲁棒性。
- **飞书插件深度定制优化**: Issue [#2580](https://github.com/sipeed/picoclaw/issues/2580) 反映了国内无代理用户在使用飞书渠道时的痛点，呼吁增加流式输出、用时统计等原生插件级功能。
- **可观测性与企业级支持**: Issue [#1731](https://github.com/sipeed/picoclaw/issues/1731) 提议接入 OTel GenAI 标准，这说明 PicoClaw 正在吸引企业级用户的关注，希望将其纳入内部可观测性平台。
- **浏览器自动化 (CDP)**: PR [#2410](https://github.com/sipeed/picoclaw/pull/2410) 正在通过 CDP 实现浏览器控制，直接呼应了路线图中的高级 Agent 能力。

## 7. 用户反馈摘要
从今日的 Issue 描述和标签中可以提取出以下典型用户画像与痛点：
1. **国内用户的环境痛点**: 缺乏代理的中国用户在配置和使用海外模型/通道时存在门槛，对飞书等国内原生工具的深度整合需求强烈。
2. **企业级部署的缺失感**: 用户（[Issue #1067](https://github.com/sipeed/picoclaw/issues/1067)）担忧 PicoClaw 缺乏认证/鉴权机制，暴露在公网的服务器易受恶意指令攻击，亟需 Authula 等鉴权组件。
3. **极客玩家追求轻量与全能的矛盾**: 一方面用户称赞 PicoClaw 的轻量化，另一方面又希望在极简的体积内容纳 Android 穿戴设备控制、多级搜索降级、本地复杂模型调度等重量级功能。

## 8. 待处理积压
- **[Roadmap/高优先级] Android Device Automation** ([#292](https://github.com/sipeed/picoclaw/issues/292)): 该 Issue 活跃度极高且标记为高优先级，建议维护者尽快给出架构设计文档或启动相关 PR 评审。
- **[Security/严重隐患] API 鉴权失败问题** ([#2578](https://github.com/sipeed/picoclaw/issues/2578), [#2584](https://github.com/sipeed/picoclaw/issues/2584)): 今日集中爆发且暂无明确处理进展，对于正在使用 Nightly 版本的开发者来说属于“阻断级”问题，建议官方在 README 暂时挂出警告或尽快回滚/修复相关的 Provider 提交。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
NanoClaw 项目在过去的 24 小时内展现出了**极高的开发活跃度与社区参与度**。项目核心团队正在推进一次大规模的底层模块化重构，今日一口气处理了超过 15 个与架构调整相关的 Pull Requests。同时，社区贡献者也表现亮眼，带来了多个具有前瞻性的新渠道和新集成功能（如 CLI 终端聊天、CalDAV 日历等）。整体来看，项目处于“高速迭代与架构优化并行”的健康阶段，每日的数据流动（6 个 Issue 更新，22 个 PR 更新）表明项目正全速向 v2 正式版迈进。

## 2. 版本发布
过去 24 小时内**无新版本发布**。当前项目似乎正处于密集的代码合并与架构重构期，预计在当前的 Module Refactor（模块重构）计划完成后，将释出下一个重要版本。

## 3. 项目进展
今日共有 **15 个 PR 被合并或关闭**，项目取得了突破性的架构演进和功能扩展：

*   **v2 架构大重构（核心进展）**：由核心贡献者 `gavrielc` 主导，今日连续合并了模块化重构的系列 PR。这标志着项目正在彻底解耦核心逻辑：
    *   [PR #1838](https://github.com/qwibitai/nanoclaw/pull/1838)：重构第一步，清理 v1 遗留代码，升级 SDK。
    *   [PR #1839](https://github.com/qwibitai/nanoclaw/pull/1839)：搭建模块注册表与默认模块布局。
    *   [PR #1840](https://github.com/qwibitai/nanoclaw/pull/1840) & [PR #1849](https://github.com/qwibitai/nanoclaw/pull/1849)：提取审批和交互问答模块。
    *   [PR #1842](https://github.com/qwibitai/nanoclaw/pull/1842)：提取日程调度模块。
    *   [PR #1847](https://github.com/qwibitai/nanoclaw/pull/1847)：提取权限系统为可选模块。
    *   [PR #1848](https://github.com/qwibitai/nanoclaw/pull/1848)：提取 Agent 间通信模块。
    *   [PR #1851](https://github.com/qwibitai/nanoclaw/pull/1851)：重构发件箱 I/O 并清理死代码。
*   **新增默认通信渠道**：[PR #1853](https://github.com/qwibitai/nanoclaw/pull/1853) 合并，正式引入 CLI Channel，用户可以直接通过终端与 Agent 交互（基于 Unix socket）。
*   **提供商容错与路由**：[PR #1852](https://github.com/qwibitai/nanoclaw/pull/1852) 合并，引入了 OpenAI Codex SDK 作为备用提供商，当 Claude 遇到限频 (429) 或鉴权错误时自动降级。
*   **外部集成**：[PR #1837](https://github.com/qwibitai/nanoclaw/pull/1837) 新增了 Paperclip Webhook 唤醒端点；[PR #1637](https://github.com/qwibitai/nanoclaw/pull/1637) 关闭了早期的 Docker/CasaOS 部署支持，可能已集成或被替代。

## 4. 社区热点
目前社区最关注的是**新通信协议的支持**以及**去中心化生态的拓展**。

*   **最受欢迎的 Feature Request**：[Issue #1413](https://github.com/qwibitai/nanoclaw/issues/1413) (👍 4)。用户 `googs1025` 强烈要求添加 Matrix 协议支持。Matrix 作为去中心化、注重隐私的通信协议，高度契合 AI Agent 的私密部署场景，该 Issue 自 3 月底提出以来持续保持活跃。
*   **去中心化技能矩阵**：贡献者 `jorgenclaw` 密集提交了 Nostr 生态的技能扩展，包括 [PR #1833](https://github.com/qwibitai/nanoclaw/pull/1833) (Nostr 发帖)、[PR #1834](https://github.com/qwibitai/nanoclaw/pull/1834) (Blossom 媒体托管) 以及 [PR #1835](https://github.com/qwibitai/nanoclaw/pull/1835) (CalDAV 日历)。这反映出社区对于将 NanoClaw 接入 Web3 和去中心化协议有着强烈诉求。

## 5. Bug 与稳定性
今日收到了几个影响生产环境的关键 Bug 报告，主要集中在 Linux 环境与容器化场景：

1.  **【高】Linux 环境下的 OAuth 与凭据阻断** [Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850)
    *   **问题**：用户报告在 Debian/Proxmox 等 Linux 环境下，OneCLI 的 SSL/MITM 代理无法正常工作，导致 ECONNRESET 错误；同时 OAuth Token 自动刷新失败。
    *   **状态**：OPEN，目前尚无修复 PR，需要团队关注。
2.  **【中】Telegram 大文件下载失败 (>20MB)** [Issue #1831](https://github.com/qwibitai/nanoclaw/issues/1831)
    *   **问题**：Telegram Bot API 的 20MB 限制导致大视频文件静默下载失败。
    *   **状态**：作者已在 Issue中 提出了 MTProto 降级下载的解决方案，等待转化为代码提交。
3.  **【中】公共群组容器的凭据隔离漏洞** [Issue #1830](https://github.com/qwibitai/nanoclaw/issues/1830)
    *   **问题**：Gmail/GCal 凭据被挂载到所有非主容器中，在开放公共群组时存在严重的安全隐患。
    *   **状态**：OPEN。
4.  **【低】agent-browser 会话重启丢失** [Issue #1829](https://github.com/qwibitai/nanoclaw/issues/1829)
    *   **问题**：由于底层 flag 失效，Chromium 忽略了指定的配置文件目录，导致容器重启后会话丢失。

## 6. 功能请求与路线图信号
结合今日的 Issues 和活跃的 PR，我们可以看出项目下一步的重点方向：

*   **企业级多租户与安全隔离**：[Issue #1830](https://github.com/qwibitai/nanoclaw/issues/1830) 暴露了凭据隔离问题，配合今日进行的 [PR #1847](https://github.com/qwibitai/nanoclaw/pull/1847)（权限模块提取），预计“公共线索自动注册与容器凭据隔离”将被高优先级纳入 v2 路线图。
*   **多模型智能路由**：随着 [PR #1852](https://github.com/qwibitai/nanoclaw/pull/1852) 的合并，以及 [PR #1843](https://github.com/qwibitai/nanoclaw/pull/1843)（基于 JSON-RPC 的 Codex 提供商）的提出，项目正在构建一个多模型容错路由层。
*   **群体智能记忆**：[PR #1841](https://github.com/qwibitai/nanoclaw/pull/1841) 提出了一种名为 `auto-evo` 的会话注入群组策略记忆功能。这表明项目正在探索超越单次会话的、跨 Agent 的共享记忆机制。

## 7. 用户反馈摘要
*   **自托管用户的痛点**：从 [Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850) 可以看出，在 Proxmox 等 Linux 虚拟化环境下进行私有部署的用户，对底层网络代理（MITM）和非图形化环境下的 OAuth 认证机制感到吃力，期望有更原生的容器凭据注入方案。
*   **自动化工作流的诉求**：用户对 NanoClaw 的期待不再局限于“聊天机器人”，而是“自动化执行者”。例如 [Issue #1831](https://github.com/qwibitai/nanoclaw/issues/1831) 中用户希望能直接拉取 200-500MB 的会议录像，这要求项目在文件系统和第三方 API 底层集成上做更深的工作。

## 8. 待处理积压
*   **高优需处理**：[Issue #1850](https://github.com/qwibitai/nanoclaw/issues/1850) 中的 Linux MITM 代理崩溃问题直接阻断了部分 Linux 用户的正常使用，建议维护者尽快介入确认。
*   **架构调整遗留**：今日合并了大量由 `gavrielc` 提交的 `refactor` PR，建议项目组密切关注合并后的集成测试表现，特别是 [PR #1839](https://github.com/qwibitai/nanoclaw/pull/1839) 中新引入的模块注册表是否会带来隐性的加载性能损耗。
*   **长期悬而未决**：[Issue #1413](https://github.com/qwibitai/nanoclaw/issues/1413) (Matrix 协议支持) 已积累一定社区呼声 (👍 4)，随着今日 CLI 和 Nostr 等渠道的完善，建议官方将其正式纳入 backlog。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-19)

## 1. 今日速览
过去 24 小时，LobsterAI 项目的社区活跃度呈现**低位平稳**状态，未产生实质性的代码合并或新开议题。尽管没有新增的 Issues 或版本发布，但有 **2 个现有的 Pull Requests 在今日产生了更新互动**，这表明项目维护者或社区正在清理积压的贡献。整体来看，项目当前处于功能迭代的维护期，没有暴露出突发性的 Bug 或稳定性危机，项目健康度保持良好。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
今日虽然没有 PR 被合并或关闭，但维护者的视线似乎正在扫视长期未更新的 PR。这两个待合并的 PR 均在昨日（2026-04-18）迎来了新的状态更新（触发了 stale 标签机制），这释放出项目即将进行一波队列清理的信号。

## 4. 社区热点
由于今日没有新开的 Issue 且无新增评论，热点主要集中在两个更新了状态的长期 PR 上。这两个 PR 反映了社区对于**扩展本地推理支持**和**紧跟闭源模型前沿**的强烈诉求：

*   **PR #428 [area: renderer, area: main, area: openclaw, stale] feat: add LM Studio as a model provider**
    *   **链接:** [netease-youdao/LobsterAI PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)
    *   **分析:** 由开发者 `mvanhorn` 提交，旨在为 LobsterAI 引入 LM Studio 作为本地模型提供商。该功能沿用了 Ollama 的集成模式，通过 `http://localhost:1234/v1` 接入，并配有专属图标和中英文本地化支持。这反映了社区用户对隐私优先、离线运行 AI 智能体的需求正在增加。
*   **PR #388 [stale] feat: upgrade MiniMax default model to M2.7**
    *   **链接:** [netease-youdao/LobsterAI/pull/388](https://github.com/netease-youdao/LobsterAI/pull/388)
    *   **分析:** 由 `octo-patch` 提交，紧跟国内大模型厂商 MiniMax 的最新进展，将默认模型升级至 M2.7，并更新了 API 基础 URL（从 `api.minimaxi.com` 迁移至 `api.minimax.io`）。这体现了社区在保持项目对外部 SaaS 模型支持方面的敏锐度。

## 5. Bug 与稳定性
**本日无新增 Bug 报告、崩溃或回归问题。**
系统整体表现稳定，过去 24 小时内未接收到任何负面的稳定性反馈。

## 6. 功能请求与路线图信号
虽然没有通过 Issue 提出明确的新功能请求，但从活跃的 PR 中可以捕捉到项目的演进信号：
*   **本地/开源生态融合信号：** PR #428（支持 LM Studio）若被合并，将极大地丰富 LobsterAI 在无网络环境下的可用性，结合其涉及的 `area: openclaw` 标签，暗示项目可能在探索与开源 Claw 协议及本地渲染的深度结合。
*   **API 接口迭代信号：** PR #388 暴露出第三方大模型 API 域名更迭的问题。这可能暗示项目在未来版本中，需要建立一个更加动态或自动化的模型 API 路由配置机制，以减少硬编码带来的频繁升级需求。

## 7. 用户反馈摘要
过去 24 小时内 Issues 和 PR 均无新增用户评论（评论数均为 undefined/0）。
但从 PR 提交的摘要中可以提炼出用户的实际使用痛点：
*   **痛点 1：** 现有的本地模型提供商（如 Ollama）可能无法满足部分用户的特定偏好，用户需要 LM Studio 这种具有独立 UI 且兼容 OpenAI API 的轻量级本地运行方案。
*   **痛点 2：** 使用 MiniMax 的用户迫切需要最新的 M2.7 模型能力（包括高速版），且旧的 API 域名可能已经导致了部分用户的调用失败。

## 8. 待处理积压
项目当前存在明显的 PR 积压需要维护团队关注。这两个 PR 均已开放超过一个月，且目前被标记为 `stale`（过期/停滞）状态。建议核心团队尽快进行代码审查，以推动项目向前发展：

*   ⚠️ **[PR #428](https://github.com/netease-youdao/LobsterAI/pull/428):** 添加 LM Studio 作为模型提供商（已停滞，需确认代码规范及合并意愿）。
*   ⚠️ **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388):** 升级 MiniMax 默认模型至 M2.7 及 API 地址迁移（已停滞，属于高风险高优先级的破坏性更新，需尽快验证合并，以免影响当前 MiniMax 用户的正常使用）。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是为您生成的 2026-04-19 CoPaw (QwenPaw) 项目动态日报：

---

# CoPaw (QwenPaw) 项目动态日报 - 2026年4月19日

## 1. 今日速览
过去 24 小时，CoPaw (QwenPaw) 项目保持了极高的社区活跃度。虽然今日无新版本发布，但仓库新增了 12 个活跃 Issue 和 9 个待合并 PR，显示项目正处于功能迭代与深水区重构的交汇期。社区焦点主要集中在 **本地模型（如 Ollama）调用的稳定性**、**内存与上下文重构** 以及 **前端 Console 体验优化** 上。整体来看，项目健康度良好，核心模块正在为支持更复杂的 Agent 架构（如自我进化、语义路由）积蓄力量。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无合并至主分支的实质性功能 PR（仅关闭了一个用于同步分支的 #3561）。但多个处于 Open 状态的重磅 PR 正在积极推进，预示着项目能力的重大升级：
- **内存架构重构**：PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 旨在彻底重构长期记忆模块，引入 auto-memory（定时总结）和 auto-dream 机制，并与 Agent.md 解耦。这是迈向持久化 Agent 的关键一步。
- **前端测试与健壮性**：PR [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) 引入了 Vitest 前端单元测试框架，填补了 Console 端测试覆盖率的空白。
- **语义技能路由**：PR [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 提出了基于 Embedding 的技能检索路由机制，旨在解决用户安装大量技能时的上下文 Token 浪费问题。
- **Console 路由与过滤**：PR [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) (LLM 路由 UI) 和 PR [#3544](https://github.com/agentscope-ai/QwenPaw/pull/3544) (消息过滤) 正在完善前端交互体验。

## 4. 社区热点
- **本地模型上下文丢失问题** ([#3562](https://github.com/agentscope-ai/QwenPaw/issues/3562))：用户在使用 Ollama 运行 Qwen3.5 时，发现多轮对话后输出丢失。这反映了本地高并发/长上下文场景下的稳定性痛点。
- **硬编码模型无法删除** ([#3551](https://github.com/agentscope-ai/QwenPaw/issues/3551))：用户抱怨内置的免费模型（如 big-pickle）由于硬编码在源码中，每次容器重新部署都会“死灰复燃”。这暴露了配置管理灵活性的缺失。
- **工作目录冲突** ([#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356))：该 Issue 获得了高达 19 条评论，核心矛盾在于升级/双版本共存时，`WORKING_DIR` 指向混乱导致数据写入错误路径。
- **自我进化功能探讨** ([#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470))：用户直指核心，询问是否会有类似 Hermes Agent 的自我进化能力，这代表了高级用户对 Agent 自主性的强烈期待。

## 5. Bug 与稳定性
今日报告的 Bug 多数集中在 Windows 环境及前端交互上，部分已有社区提交修复：
1. **[高] Windows Desktop 启动挂起** ([#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555))：`QwenPaw Desktop.bat` 在 Windows 上卡死在 `Waiting for HTTP ready...`，需等待 300 秒 TCP 超时。
2. **[高] 代理导致本地模型调用失败** ([#3542](https://github.com/agentscope-ai/QwenPaw/issues/3542))：开启 VPN 代理时，Ollama 本地模型无法调用。通常是因为代理劫持了本地回环地址（Loopback）的请求。
3. **[中] SSE 序列化崩溃** ([#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552))：前端 Chat 页面在处理损坏的 Unicode 代理字符（如半个 Emoji）时导致流式输出中断。**已有 Fix PR**：[#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553)。
4. **[中] 本地 llama.cpp Tool Call 解析错误** ([#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560))：使用本地自定义后端时，工具调用的流式解析失败。
5. **[低] 网页端无法修改默认智能体** ([#3557](https://github.com/agentscope-ai/QwenPaw/issues/3557))：APP 客户端与 Console 网页端存在权限/功能不一致的问题。

## 6. 功能请求与路线图信号
结合用户诉求与开发进展，以下是极有可能在未来版本落地的功能：
- **上下文用量监控** ([#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563))：用户希望能直观看到 Token 消耗，以决定是否使用 `compact` 命令。这与当前内存重构的 PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 高度契合。
- **内置技能多语言切换** ([#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558))：重构内置技能目录结构以支持中英双语，提升国际化体验。
- **浏览器操控增强** ([#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556))：为 `browser_use` 添加代理和无头模式参数，扩展了 Agent 在自动化测试和 RPA 场景的应用边界。
- **模型管理优化** ([#3545](https://github.com/agentscope-ai/QwenPaw/issues/3545))：已关闭的 Issue 呼吁增加模型删除功能，暗示相关后端逻辑已准备就绪。

## 7. 用户反馈摘要
- **本地化部署痛点集中**：大量反馈（如 Ollama 丢失上下文、VPN 冲突、llama.cpp 解析报错）表明，CoPaw 的高级用户群非常倾向于本地部署开源模型。项目需进一步优化本地推理后端的兼容性和容错机制。
- **多端体验割裂感**：用户指出 APP 端和 Web 端在功能（如默认 Agent 设置）上存在不一致，期待多端体验的对齐。
- **对“黑盒”配置的不满**：硬编码模型列表和繁琐的 Old/New 工作目录迁移，反映出用户希望拥有更透明、可控的配置文件管理方式。

## 8. 待处理积压
- **CLI 安全警告挂起** ([#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943))：自 4月4日提出以来，在 Windows + Python 3.13 环境下 `copaw init` 挂起的问题仍未彻底解决，可能影响了部分新用户的首次体验。
- **语音交互技能需求** ([#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293))：关于在 Channels 中直接支持语音回复的需求，评论数不多但属于高价值功能，目前尚未看到明确的开发排期。
- **自动时间注入** ([#3268](https://github.com/agentscope-ai/QwenPaw/pull/3268))：该 PR 旨在自动在提示词中注入时间信息以增强 Agent 的时间感知，处于状态待定，需核心团队尽快给出架构设计上的结论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>