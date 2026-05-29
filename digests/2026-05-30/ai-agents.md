# OpenClaw 生态日报 2026-05-30

> Issues: 326 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-29 22:28 UTC

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

# OpenClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
过去24小时，OpenClaw 项目呈现出**极高的社区活跃度与开发迭代速度**。项目今日处理了 326 条 Issue 更新（其中 171 条被关闭，解决率高达 52.4%）以及 500 条 PR 更新（153 条被合并或关闭）。然而，仍有 347 条 PR 处于待合并状态，加上核心组件面临严峻的稳定性考验，表明项目正处于密集的架构重构期。团队在 24 小时内密集发布了 3 个 Beta 版本（均针对 v2026.5.28），核心聚焦于 Agent 和 Codex 运行时的容错与恢复能力建设。

---

## 2. 版本发布
今日连续发布了 **3 个 Beta 版本**（v2026.5.28-beta.1, beta.2, beta.3），显示出团队在合并前进行高频次内部验证的谨慎态度。

- **核心更新内容**：重点重构了 **Agent 和 Codex 运行时的恢复机制**。提升了网关在面对崩溃时的韧性。
- **重要改进**：
  - **子 Agent 隔离**：确保 `cwd/workspace` 的严格分离。
  - **上下文锁定**：Hook 上下文保持在 prompt 局部作用域内。
  - **锁释放优化**：会话锁在超时中止时能够被正确释放。
  - **状态隔离**：Codex app-server/helper 的故障不再引发共享运行时状态的级联崩溃。
- **迁移注意事项**：目前均为 Beta 标签，不建议直接用于生产环境。从 Issue 追踪来看，从 v2026.5.26 升级至 v2026.5.27+ 的用户普遍遇到了配置迁移和状态不一致问题，建议生产用户等待正式版并关注后续 `doctor --fix` 工具的完善。

---

## 3. 项目进展
今日共有 153 个 PR 被合并/关闭，项目整体在**底层稳定性修复和架构抽离**方面迈出了重要一步：

- **运行时状态底层重构 (PR #81402)**：继续推进将运行时状态从松散的 JSON/JSONL/锁文件迁移到强类型的 SQLite 布局。这是解决长期困扰项目的文件锁和内存泄漏问题的关键架构升级。
- **Codex 僵尸插件修复 (PR #88135)**：修复了版本升级后陈旧的 `@openclaw/codex` 托管运行包导致的崩溃，直接回应了近期激增的升级失败反馈。
- **内存与缓存上限控制 (PR #88149, #88150)**：为引导快照缓存和会话存储缓存增加了内存上限，旨在根除网关在长时间运行后因 OOM 导致的崩溃问题（关联 Issue #54155）。
- **LLM 核心解耦 (PR #88117)**：将共享的 LLM 契约、事件流和诊断工具抽离至 `packages/llm-core`，为后续支持更多大模型提供商打下基础。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**模型供应商支持、多渠道兼容性以及底层锁机制**上：

1. **Windows 端 UI 严重退化 ([Issue #67035](https://github.com/openclaw/openclaw/issues/67035) - 13条评论)**：输入文本被吞噬、流式输出不可见。该 P1 Bug 影响了大量桌面端用户，至今仍处于 OPEN 状态，急需官方提供修复时间表。
2. **`doctor --fix` 静默破坏配置 ([Issue #84038](https://github.com/openclaw/openclaw/issues/84038) - 12条评论)**：修复工具错误地将 `openai-codex/` 迁移为 `openai/`，导致 OAuth 运行中断及 Token 消耗激增 3-4 倍。该问题已关闭，说明相关修复已就绪。
3. **Codex 运行时拒绝 GPT-5.5 ([Issue #88102](https://github.com/openclaw/openclaw/issues/88102) - 11条评论)**：最新升级后出现模型路由回归，导致 Telegram 等渠道的状态命令失效。
4. **OAuth 压缩回退问题 ([Issue #86820](https://github.com/openclaw/openclaw/issues/86820) - 10条评论，6个👍)**：使用 GPT-5.5 时，上下文压缩失败并回退到直连 API，要求用户提供不存在的 Base URL。这反映了当前复合认证流程的脆弱性。

---

## 5. Bug 与稳定性
当前系统在**高并发、长时间运行及多 Agent 协同**场景下暴露出显著的稳定性问题。按严重程度排列如下：

### 严重 / 核心运行时崩溃
- **事件循环阻塞与重启 (P1)**：
  - [Issue #75378](https://github.com/openclaw/openclaw/issues/75378)：在并发产生 3 个子 Agent 时，网关事件循环阻塞超过 5 秒，导致服务触发 1012 重启。
  - [Issue #86358](https://github.com/openclaw/openclaw/issues/86358) (已关闭)：上下文压缩阶段导致 Node.js 事件循环停滞 17 秒。
- **内存泄漏 (P1)**：[Issue #54155](https://github.com/openclaw/openclaw/issues/54155) 报告网关在 4 天内内存从 389MB 增至 14.7GB。目前已有 PR (#81402 迁移 SQLite, #88150 缓存上限) 尝试修复。
- **死锁与文件锁失效 (P1)**：
  - [Issue #85953](https://github.com/openclaw/openclaw/issues/85953)：子 Agent 完成回调时，父会话的转录锁无法释放。
  - [Issue #87217](https://github.com/openclaw/openclaw/issues/87217)：幽灵文件锁导致会话无法写入。

### 高 / 渠道与消息丢失
- **飞书渠道瘫痪 (P1)**：[Issue #87646](https://github.com/openclaw/openclaw/issues/87646) 升级至 v2026.5.27 后，飞书直连消息无法分发（TypeError）。
- **Telegram 渠道超时 (P1)**：[Issue #87744](https://github.com/openclaw/openclaw/issues/87744) 底层代码支持的 Telegram 会话无法达到 `turn/completed` 状态。
- **消息路由错误 (P2)**：[Issue #76104](https://github.com/openclaw/openclaw/issues/76104) 飞书的回复被错误路由到了 Webchat 界面。

### 基础设施 / 工具
- **Native Hook Relay 失效 (P1)**：[Issue #87536](https://github.com/openclaw/openclaw/issues/87536) 本地工具调用全部返回不可用。

---

## 6. 功能请求与路线图信号
结合用户诉求与当前 PR 进展，以下方向极有可能在近期版本中落地：

1. **本地搜索原生支持 (Feature Request)**：
   - [Issue #17925](https://github.com/openclaw/openclaw/issues/17925) (5个👍)：用户要求支持 ZAI (GLM) 和 Google (Gemini) 的原生 `web_search` 透传。这是目前呼声最高的功能增强。
2. **精细化 Agent Dreaming 调度**：
   - [Issue #67413](https://github.com/openclaw/openclaw/issues/67413) (3个👍)：请求支持按 Agent 配置独立的 Dreaming（记忆整理）任务，以避免多 Agent 同时整理导致系统 OOM。
3. **更灵活的命令执行安全控制**：
   - PR [#82596](https://github.com/openclaw/openclaw/issues/82596) 和 [#88075](https://github.com/openclaw/openclaw/issues/88075) 正在引入 `exec denylist` 和路径拒绝模式，这将在“全部放行”和“严格审批”之间提供一个平衡的安全执行沙箱。
4. **TUI 交互优化**：
   - [Issue #10118](https://github.com/openclaw/openclaw/issues/10118) (3个👍)：支持 `Shift+Enter` 换行而非直接发送，这是终端重度用户的刚需。

---

## 7. 用户反馈摘要
通过对高关注度 Issue 的分析，提炼出以下核心用户痛点：

- **升级体验极差**：从 v26 升级到 v27 的用户大面积遭遇配置损坏、模型路由失效。自动修复工具 (`doctor --fix`) 非但没有解决问题，反而引入了破坏性变更。
- **复杂场景下的脆弱性**：用户在配置多模型 fallback、结合 OAuth 使用 frontier 模型（如 GPT-5.5, Claude Opus）时，极易触发上下文压缩失败或 Token 溢出。多 Agent 编排目前对系统资源（事件循环、内存）消耗过大。
- **多端表现不一致**：Webchat 表现良好，但通过 Telegram、飞书、Discord 等渠道接入时，常出现静默失败、富媒体无法发送或回复串台的问题。
- **正面反馈**：社区对 OpenClaw 的“多渠道统一接入”和“AI 原生架构”依然保持高度认可，用户积极提交带有完整复现步骤和源码分析的 Bug 报告，说明项目拥有较高素质的开发者受众。

---

## 8. 待处理积压
以下重要的高优先级问题长期悬而未决，严重影响了项目的健康度，亟需 Maintainer 介入：

1. **内存泄漏痼疾 ([Issue #54155](https://github.com/openclaw/openclaw/issues/54155))**：自 3 月 25 日报告以来已逾两月，网关内存暴涨的问题仍待彻底验证和关闭。
2. **SQLite FTS5 缺失导致搜索失效 ([Issue #62328](https://github.com/openclaw/openclaw/issues/62328))**：由于内置 Node.js 编译问题，导致长期 memory-search 关键词回退失败，阻碍了 Agent 记忆能力的发挥。
3. **多 Agent 启动延迟严重 ([Issue #80607](https://github.com/openclaw/openclaw/issues/80607))**：非默认 Agent 的调用面临 10-17 秒的初始化延迟，严重拖慢了 Multi-Agent 架构的实用性，目前标记为 `stale`。
4. **Dashboard 安全与稳定性 ([Issue #81917](https://github.com/openclaw/openclaw/issues/81917))**：在 Linux 环境下日志泄露带 Token 的 URL 且浏览器启动偶发挂起。

---

## 横向生态对比

作为专注该领域的资深技术分析师，基于 2026 年 5 月 30 日的开源社区动态，为您生成个人 AI 助手与自主智能体开源生态的横向对比与深度分析报告。

---

### 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话玩具”向“企业级多智能体编排枢纽”跨越的关键重构期**。底层架构正经历从松散文件系统向强类型数据库的迁移，以解决高频并发带来的内存泄漏与状态死锁问题。此外，**安全边界防御（权限隔离、沙箱逃逸、SSRF 防护）和多渠道通信稳定性**成为各项目并发攻坚的核心命题。生态整体呈现出极高的迭代速度，但也伴随着因架构剧变导致的升级阵痛与生产环境回归风险。

### 2. 各项目活跃度对比

| 项目名称 | 活跃度评级 | Issue 动态 (新开/活跃/关闭) | PR 动态 (待合并/关闭) | 今日 Release 情况 | 核心/健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 极高 | 326 条更新 (关闭 171) | 347 待处理 / 153 关闭 | **3 个** (Beta 狂暴迭代) | 密集重构期，质量隐患大，积压严重 |
| **IronClaw** | 🔥 极高 | 21 条更新 (关闭 6) | 26 待处理 / 24 关闭 | **0 个** (发布滞后) | 架构改造激进，底层审计完善，但包管理断层 |
| **Hermes Agent**| 🔥 极高 | 50 条更新 | 38 待处理 / 12 关闭 | **2 个** (紧急热修) | CI/CD 盲区暴露，安全漏洞频发但修复极快 |
| **CoPaw (QwenPaw)**| 🚀 高 | 45 条更新 (关闭 26) | 16 待处理 / 18 关闭 | **1 个** (v1.1.10-beta.1)| 多端体验分化严重，底层存储面临大容量挑战 |
| **ZeroClaw** | 🚀 高 | 14 条新开 (关闭 0) | 29 待处理 / 3 关闭 | **0 个** | Beta 前夕阵痛，通道配置逻辑复杂且易碎 |
| **NanoBot** | 🚀 高 | 30 条活跃 | 27 待处理 / 16 关闭 | **0 个** | 安全审计集中期，高危漏洞已提 Fix，响应健康 |
| **NullClaw** | ✅ 健康 | 3 条更新 (均关闭) | 0 待处理 / 9 关闭 | **1 个** (v2026.5.29)| 极其高效，Bug 当天闭环，健康度极佳 |
| **LobsterAI** | ✅ 健康 | 0 条新开 | 5 待处理 / 9 关闭 | **0 个** | 内部主导的性能调优期，零外部报障 |
| **Moltis** | ⚠️ 中等 | 4 条更新 (关闭 1) | 1 待处理 / 1 关闭 | **0 个** | 遭遇异构硬件架构兼容性瓶颈 |
| **NanoClaw** | ⚠️ 中等 | 2 条新开 | 5 待处理 / 3 关闭 | **0 个** | 专注群聊路由优化，稳步消化社区贡献 |
| **其他** | 💤 低 | TinyClaw / ZeptoClaw / PicoClaw 过去 24 小时无显著活跃动态。 |

### 3. OpenClaw 在生态中的定位

*   **生态角色：行业标杆与复杂度晴雨表**
    OpenClaw 是今日生态中**绝对体量最大、复杂度最高**的项目。高达 347 条待合并 PR 和单日 3 个 Beta 版的狂暴迭代，表明它正承担着生态中最前沿的架构试错任务。
*   **技术路线差异：极致的运行时抽离**
    相比 NullClaw 的轻量高效或 Moltis 的 CLI 编排侧重，OpenClaw 致力于打造一个极其庞大且解耦的网关运行时。其目前推进的“运行时状态向 SQLite 迁移”和“LLM 核心解耦”，旨在解决万级并发下的状态与内存痼疾，这是其他项目尚未触及的深水区。
*   **优势与隐患**
    **优势**在于极高的社区素质和极深的技术护城河（如 Codex 运行时隔离）。**隐患**在于庞大的历史包袱导致升级体验极差（`doctor --fix` 破坏配置），且长期悬而未决的内存泄漏（Issue #54155）对生产环境构成严重威胁。

### 4. 共同关注的技术方向

1.  **安全边界与执行沙箱加固**
    *   **涉及项目**：NanoBot, Hermes Agent, ZeroClaw, IronClaw
    *   **具体诉求**：随着 Agent 拥有执行系统命令和访问网络的能力，社区集中爆发了对 SSRF 防护、文件系统目录越权、Exec 沙箱逃逸的担忧。各项目均在引入细粒度的 DenyList 或底层隔离机制。
2.  **多智能体协同与子进程/任务隔离**
    *   **涉及项目**：OpenClaw, CoPaw, NullClaw, LobsterAI
    *   **具体诉求**：单体 Agent 已无法满足需求，`spawn_subagent` 或 delegated tasks 成为标配。但随之而来的事件循环阻塞、僵尸插件、跨通道上下文污染（Session 串台）成为共性问题。
3.  **跨平台渠道的健壮性与一致性**
    *   **涉及项目**：OpenClaw, CoPaw, ZeroClaw, NullClaw
    *   **具体诉求**：Telegram、飞书、Slack、Discord 等渠道接入时的长连接保活、大媒体流压缩、TTS/STT 路由错误。Webchat 往往表现良好，但一旦接入复杂 IM 协议，极易发生消息吞噬或静默崩溃。
4.  **上下文与长期记忆管理**
    *   **涉及项目**：NanoBot, Hermes Agent, NullClaw, CoPaw
    *   **具体诉求**：向量库膨胀导致 OOM（如 CoPaw 的 37GB 索引）、长期全局记忆提取失败，以及如何实现无损的上下文滑动窗口压缩以节约 Token。

### 5. 差异化定位分析

*   **企业级高可用网关**：这类架构最为庞大，致力于解决高并发和复杂认证。
*   **个人全端助理**：强调与操作系统（特别是 Windows/macOS 桌面端）和主流 IM 软件的深度融合，注重 Tauri 桌面包等体验。
*   **异构编排与可扩展性**：正在积极将 CLI 工具（如 Claude Code）伪终端化接入，或探索跨平台群聊感知路由。
*   **安全与密码学原教旨**：特例。严格使用 Rust 构建强审计轨道，推行凭证内存擦除，完全放弃了脚本语言的灵活性，换取极致的安全合规。

### 6. 社区热度与成熟度

*   **快速膨胀/狂暴迭代阶段（高风险高收益）**：OpenClaw, Hermes Agent, ZeroClaw。这三个项目 Issue 和 PR 堆积严重，版本发布频繁但常伴随破坏性变更，适合有较强排错能力的极客用户。
*   **质量巩固/稳步打磨阶段（健康稳健）**：NullClaw, LobsterAI, IronClaw, CoPaw。以 NullClaw 为代表，展现出了 “Bug 当天报、当天修、当天发版” 的极高素养；IronClaw 和 LobsterAI 则处于底层重构后的内部性能调优期；CoPaw 正在积极消化多端适配的技术债。
*   **垂直探索阶段**：NanoBot, Moltis 等。项目体量相对较小，目前主要受困于特定的底层缺陷（如底层沙箱对 arm64 架构的兼容、并发写入冲突）。

### 7. 值得关注的趋势信号

1.  **“久病成医”的本地状态库迁移**：OpenClaw 试图用 SQLite 替代松散的 JSON/文件锁是一个明确信号。AI 智能体 7x24 小时运行时的状态管理不能再依赖简陋的文件系统，内嵌高性能嵌入式关系型数据库将成为标准解法。
2.  **从“单体日志”走向“全链路审计轨道”**：IronClaw 合入的 `execute_tool_audited` 预示着智能体操作必须具备不可抵赖性和可追溯性。这对于智能体从“工具”走向“自主决策实体”的企业级落地是前置条件。
3.  **多模态与外部工具交互的“Binary 化”**：ZeroClaw 讨论为文件读写引入 Base64，以及 Moltis 讨论对 PTY 的欺骗接管，说明 Agent 正在突破纯文本上下文的限制，尝试在系统级二进制层面与操作系统或 GUI 进行深度交互。
4.  **对 Token 和延迟的极端敏感**：IronClaw 报出的 KV Cache 失效问题，以及各项目对“上下文压缩失败回退”的恐慌，反映出开发者和企业用户的关注点已经从“模型能不能用”转移到“长程记忆和工具调用的 API 成本与延迟控制”。开发者需要审视自身框架的 Prompt 拼接逻辑，避免隐形 Token 吞噬。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 **NanoBot (github.com/HKUDS/nanobot)** 项目 2026-05-30 动态日报：

---

# 🤖 NanoBot 项目动态日报 (2026-05-30)

## 1. 今日速览
今日 NanoBot 项目迎来了极高强度的开发与安全审查活动。在过去 24 小时内，项目新增或活跃了 **30 条 Issues** 和 **27 条待合并 PRs**。值得注意的是，核心贡献者 `hamb1y` 集中曝光了多个系统级安全漏洞和底层架构缺陷，并同步提交了对应的大批量修复代码。此外，社区用户对多渠道接入（如微信、Matrix）、上下文记忆及 API 兼容性等核心功能的关注度居高不下。整体而言，项目处于高频迭代、底层架构加固的关键阶段，展现了极高的项目活跃度与健康的响应机制。

## 2. 版本发布
无新版本发布。（注：当前大量 bugfix PR 处于待合并状态，预计维护者合并并完成全面回归测试后，将迎来一个重要的安全与稳定性修复版本）。

## 3. 项目进展
今日项目以“安全漏洞收口”和“多渠道稳定性提升”为主轴向前迈进了一大步。共有 **16 个 PR 被合并或关闭**，主要进展包括：
* **Windows 执行与配置增强**：合并了 PR [#4051](https://github.com/HKUDS/nanobot/pull/4051)，修复了 Windows 下多行 Python 命令解析失败的问题；PR [#3696](https://github.com/HKUDS/nanobot/pull/3696) 引入了带有自动故障转移的“模型预设”功能。
* **安全与网络边界审计**：贡献者 `hamb1y` 突击提交了十余个安全修复与重构 PR，涵盖 WebSocket 握手校验 ([#4103](https://github.com/HKUDS/nanobot/pull/4103))、消息工具越权防范 ([#4102](https://github.com/HKUDS/nanobot/pull/4102))、Dream 技能文件覆盖漏洞 ([#4101](https://github.com/HKUDS/nanobot/pull/4101))、SSRF 防护 ([#4086](https://github.com/HKUDS/nanobot/pull/4086), [#4100](https://github.com/HKUDS/nanobot/pull/4100)) 以及文件系统目录越权 ([#4099](https://github.com/HKUDS/nanobot/pull/4099)) 等。

## 4. 社区热点
* **短期记忆与上下文丢失**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) 引发热议（4 条评论）。用户反馈对话过程中出现严重的“短期记忆丧失”，这指向了系统提示词注入和上下文窗口压力处理的核心逻辑。
* **第三方渠道接入限制**：Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772)（7 条评论）反映了微信渠道每次最多只能返回 10 条消息的限制，直接影响了 C 端用户的对话连贯性。
* **API 不可见错误反馈**：Issue [#3006](https://github.com/HKUDS/nanobot/issues/3006) 指出 API Key 欠费时没有响应和告警，表明用户在自部署与计费管理上存在体验痛点。

## 5. Bug 与稳定性
今日报出了大量深层次的 Bug，按严重程度排列如下：

**🔴 P0 严重 / 安全漏洞**
* **API 未授权访问** ([#4078](https://github.com/HKUDS/nanobot/issues/4078))：OpenAI 兼容接口允许无认证请求。（**已提 Fix PR**）
* **WS 凭证无鉴权签发** ([#4077](https://github.com/HKUDS/nanobot/issues/4077))：可无鉴权获取短期 token。（**已提 Fix PR #4103**）
* **MCP SSRF 防护绕过** ([#4074](https://github.com/HKUDS/nanobot/issues/4074))：HTTP/SSE 连接可在拒绝前触发本地回环。（**已提 Fix PR #4100**）
* **Exec 工作区沙箱逃逸** ([#4072](https://github.com/HKUDS/nanobot/issues/4072))：通过相对软连接绕过限制读取外部文件。（**已提 Fix PR #4098**）

**🟠 P1 核心 Bug**
* **工具调用状态损坏** ([#4058](https://github.com/HKUDS/nanobot/issues/4058))：tool-result 协议修复逻辑允许重复/缺失的 ID 状态，可能导致死循环。（**已提 Fix PR #4091**）
* **会话并发写入冲突** ([#4081](https://github.com/HKUDS/nanobot/issues/4081))：异步并发写入时 MemoryStore 会导致游标重复。（**暂无 Fix PR**）
* **Cron 任务上下文污染** ([#4082](https://github.com/HKUDS/nanobot/issues/4082))：同一 Cron 任务跨周期复用固定 session key。（**暂无 Fix PR**）
* **无效配置静默降级** ([#4067](https://github.com/HKUDS/nanobot/issues/4067))：配置加载失败时不报错，静默使用默认配置，极易引发线上玄学故障。（**已提 Fix PR #4095**）

## 6. 功能请求与路线图信号
* **精细化的文档抽取控制**：Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043) 请求添加禁用自动文档提取的配置开关。用户希望结合自有的 OCR/Docling 工作流，说明社区对灵活的 RAG 管道接入有明确需求。
* **Matrix 端到端加密验证机制**：Issue [#4042](https://github.com/HKUDS/nanobot/issues/4042) 指出 Element X 客户端的设备未验证警告问题，未来可能需要全面重构 Matrix 频道的密钥验证处理链。
* **模型预设与快速切换**：PR [#3696](https://github.com/HKUDS/nanobot/pull/3696) 已经实现了带有故障转移的模型预设功能，预示着项目即将在多模型网关高可用性上更进一步。

## 7. 用户反馈摘要
* **ToC 体验瓶颈**：微信等超级 App 生态的限制（如 10 条消息上限）仍是阻碍智能体广泛铺开的痛点。
* **对话一致性期望**：用户对 AI 的“健忘”容忍度极低，`context_window` 压力管理必须对用户完全透明，否则会严重破坏信任感。
* **开发者体验（DX）**：开发者希望有更强的“边界控制权”（如不愿自动抽取 PDF 内容、不愿底层逻辑静默降级），显示出项目从“开箱即用的玩具”向“企业级编排框架”转型的阵痛与诉求。

## 8. 待处理积压
* **OpenAI 兼容接口未授权问题**：[#4078](https://github.com/HKUDS/nanobot/issues/4078) 依然为 OPEN 状态，该高危漏洞可能影响所有通过 API 暴露服务的实例，需立刻评估合并相关 PR。
* **核心并发缺陷**：[#4081](https://github.com/HKUDS/nanobot/issues/4081) (并发写游标重复) 与 [#4080](https://github.com/HKUDS/nanobot/issues/4080) (绕过调度锁处理) 暂时没有直接的修复 PR 进展，需关注是否存在潜在的竞态条件风险。
* **环境变量导致的崩溃**：[#4065](https://github.com/HKUDS/nanobot/issues/4065) 指出畸形的环境变量会导致流式配置直接 Crash，目前已有对应 PR #4095，建议维护者尽快 Review 并入主干。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🤖 Hermes Agent 项目动态日报 (2026-05-30)

## 1. 今日速览
过去 24 小时内，Hermes Agent 项目处于**高度活跃且节奏紧凑**的状态。由于 v0.15.0 大版本发布带来的连锁反应，社区迎来了_issue_ 和 _PR_ 的小高峰（各 50 条更新），维护团队迅速响应并连续推出了 2 个补丁版本（v0.15.1 和 v0.15.2）以修复打包和回退死循环问题。

在 **38 个待合并 PR** 中，既包含了社区贡献的安全漏洞修复（如 SSRF 防护、eval 注入消除等），也涵盖了 Mattermost、Matrix 等平台网关的深度功能迭代。从活跃度来看，项目核心基本盘稳固，但在插件包分发与 Docker 镜像构建流程上暴露出了明显的 CI/CD 测试盲区。

## 2. 版本发布
今日连续发布了两个修复版本，针对 v0.15.0 的紧急问题进行了修补：
- **v2026.5.29 (Hermes Agent v0.15.1) — 补丁发布**
  - **更新内容**: 包含 28 个提交，21 个合并 PR，属于同日热修复版本。核心修复了影响所有在回环模式下运行的 Dashboard 发生**无限重载循环**的关键 Bug。
  - **破坏性变更/迁移注意**: 请注意，v0.15.1 引入了新的配置文件版本迁移（v23 至 v24）。有用户反馈此迁移会导致定时任务数据丢失，建议升级前务必备份 `~/.hermes/cron/jobs.json`。
- **v2026.5.29.2 (Hermes Agent v0.15.2)**
  - **更新内容**: 修复了 PyPI `wheel` 和 `sdist` 包中未正确打包 `plugin.yaml` 清单文件的问题。这直接导致了通过 `pip` 安装的用户无法加载 Discord 等平台网关适配器。

## 3. 项目进展
今日共有 **12 个 PR 被合并/关闭**，项目在**安全加固**和**插件机制健壮性**上迈出重要一步：
- **安全漏洞集中修复**：开发者 `ErnestHysa` 提交了多个关键安全修复并被合并，包括：使用 `ast.literal_eval` 替换存在 RCE 风险的 `eval()` ([PR #34989](https://github.com/NousResearch/hermes-agent/pull/34989))，修复 TTS 命令模板 Shell 元字符注入 ([PR #34983](https://github.com/NousResearch/hermes-agent/pull/34983))，以及增加对 WeCom 平台 `file://` 路径穿越和 SSRF 攻击的防护 ([PR #34981](https://github.com/NousResearch/hermes-agent/pull/34981), [PR #34982](https://github.com/NousResearch/hermes-agent/pull/34982))。
- **网关与媒体处理修复**：修复了 ntfy echo 循环导致的无限消息螺旋 ([Issue #34447](https://github.com/NousResearch/hermes-agent/issues/34447))，以及正则白名单不匹配导致静默丢弃 `.md` 等文件的问题 ([Issue #34517](https://github.com/NousResearch/hermes-agent/issues/34517))。

## 4. 社区热点
今日讨论最热烈的问题集中在**多平台网关适配**和**UI 体验**上：
1. **Dashboard 主题可用性亟待提升** ([Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)，22 评论，32 👍)：用户强烈批评当前 TUI 提供的主题（如 Midnight, Ember 等）配色非标，衬线字体过小且对比度不足，导致阅读困难。这是目前获赞最多的功能请求。
2. **Docker 镜像核心启动脚本丢失** ([Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071)，11 评论，2 👍)：v0.15.0 的 Docker 镜像因缺失 `stage2-hook.sh` 导致容器以 Code 127 退出，严重影响了容器化部署的用户。
3. **Telegram Topic-to-Profile 路由支持** ([Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143)，10 评论)：用户希望单个 Telegram Bot 能根据不同的 Forum Topic 路由到不同的配置文件，以实现多 Agent 职责分离。

## 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度划分如下：
- **🔴 P1 严重 (核心功能受阻/数据丢失)**：
  - **Cron 任务静默清空**：v0.15.1 配置迁移导致定时任务文件被错误清空 ([Issue #34600](https://github.com/NousResearch/hermes-agent/issues/34600))。
  - **Docker 与插件发现失败**：由于缺乏 `plugin.yaml`，Discord 等网关在 PyPI 安装后无法工作 ([Issue #34511](https://github.com/NousResearch/hermes-agent/issues/34511))。
  - **MCP 进程泄漏**：每次重载 MCP 时旧进程未被杀死，最终耗尽系统 RAM ([Issue #34966](https://github.com/NousResearch/hermes-agent/issues/34966))。
  - **MCP TaskGroup 单点崩溃**：任何一个 MCP 服务器初始化失败都会导致整个网关崩溃 ([Issue #34443](https://github.com/NousResearch/hermes-agent/issues/34443))。
- **🟠 P2/P3 中低危 (逻辑/性能问题)**：
  - 多容器共享 Volume 时发生 `s6-log` 锁冲突 ([Issue #34480](https://github.com/NousResearch/hermes-agent/issues/34480))。
  - Telegram 网关将历史工具输出的 MEDIA 标签错误泄露到后续纯文本回复中 ([Issue #34608](https://github.com/NousResearch/hermes-agent/issues/34608))。
  - `SessionDB` 的全局锁导致高并发下写入性能瓶颈 ([Issue #34444](https://github.com/NousResearch/hermes-agent/issues/34444))。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 动态来看，项目的下一阶段演进呈现以下趋势：
- **子 Agent 与任务调度可见性增强**：正在推进为委派任务 (`delegate_task`) 增加模型/提供商覆盖参数，并允许在启动时打印所选模型，这在 [Issue #34824](https://github.com/NousResearch/hermes-agent/issues/34824) 及 [PR #12794](https://github.com/NousResearch/hermes-agent/pull/12794) 中得到了印证。
- **内存分页机制**：社区提出打破现有 2200 字符内存限制，引入带有关键字搜索的“分页内存” ([Issue #34745](https://github.com/NousResearch/hermes-agent/issues/34745))，这可能成为下一个核心功能。
- **跨平台交互对齐**：多个 PR 正在致力于将 Mattermost 的交互能力（如危险命令确认按钮）对齐至 Discord/Telegram 水平 ([PR #29373](https://github.com/NousResearch/hermes-agent/pull/29373), [PR #26537](https://github.com/NousResearch/hermes-agent/pull/26537))。

## 7. 用户反馈摘要
通过分析 Issue 评论区，提取出用户的核心诉求与痛点如下：
- **打包与分发机制饱受诟病**：无论是 Docker 镜像的文件缺失，还是 PyPI 包忘记打包 `yaml` 清单，用户对“下载后无法开箱即用”感到沮丧。
- **升级恐惧症**：`hermes update` 将用户强制拉取到 `main` 分支而不是最新稳定版 ([Issue #34514](https://github.com/NousResearch/hermes-agent/issues/34514))，加之升级导致 Cron 任务被删 ([Issue #34600](https://github.com/NousResearch/hermes-agent/issues/34600))，导致用户对版本更新缺乏信任。
- **对复杂 Agent 交互的控制欲**：用户越来越关注多 Agent 通信中的成本监控、静默消息循环干预以及上下文保留问题。

## 8. 待处理积压
以下重要 Issue/PR 处于开启状态且具备较高优先级，需维护团队及时跟进：
- [Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071): v0.15.0 Docker 镜像无法启动的回归问题。
- [Issue #34514](https://github.com/NousResearch/hermes-agent/issues/34514): `hermes update` 机制需要从跟踪 `main` 切换为跟踪最新 Release 标签。
- [Issue #34871](https://github.com/NousResearch/hermes-agent/issues/34871): `hermes mcp serve` 在标准 pip 环境下因模块缺失而崩溃。
- [PR #13888](https://github.com/NousResearch/hermes-agent/pull/13888): 修复 TTS 工具不读取 `config.yaml` 中的 `base_url` 配置的问题（已开启超过一个月）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是为您生成的 2026年5月30日 NanoClaw 项目动态日报。

---

# 📊 NanoClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目保持了**中高度的维护与开发活跃度**。社区端共有 2 个新议题被提出，同时吸引了多位开发者提交了高达 8 个拉取请求，涵盖了路由优化、平台适配（Telegram/iOS）以及全新的可视化技能。项目维护者今日未发布新版本，但集中处理并关闭了 3 个历史 PR，显示出项目正在稳步消化社区贡献并进行内部代码清理。

## 2. 版本发布
**无新版本发布。** 
今日未有新的 Release 或 Tag 产生，项目当前处于功能迭代与稳定性修复的积攒期。

## 3. 项目进展
今日共有 3 个 Pull Requests 被关闭，标志着以下功能的推进与落地：
*   **PR #1961 [CLOSED] OneCLI 原生 Gmail MCP 工具** (作者: grtwrn)：引入了 `/add-gmail-tool` 技能，通过 OneCLI 进行凭证注入，使得在 NanoClaw v2 中集成 Gmail 变得更加安全（符合容器不接收原始 API Key 的不变量）。这补齐了个人 AI 助手在邮件处理上的重要一环。
*   **PR #2639 [CLOSED] iOS 可靠性提升** (作者: vasechko-sergey)：针对 iOS 端的稳定性进行了修复，提升了移动端用户的使用体验。
*   **PR #2456 [CLOSED] Claude 提供商的 LangFuse 可观测性** (作者: dustinlucien)：为 `ClaudeProvider` 添加了追踪、API 错误重试、工具调用计时等深度观测能力，为后续优化 AI 延迟和上下文压缩提供了数据支撑。

## 4. 社区热点
今日虽然没有评论数爆表的议题，但从提交的内容来看，核心开发者的焦点集中在**多智能体协作与交互逻辑**上：
*   **多智能体群聊体验优化**：开发者 `yairixStudio` 集中提交了 3 个相关 PR（#2645, #2644, #2643），旨在让 Agent 在群组中被 `@mention` 或直接对话时，能拥有更好的上下文感知能力。这表明项目正在深挖“个人 AI 助手在群聊环境下的表现”这一核心场景。

## 5. Bug 与稳定性
今日新增了 2 个 Bug 报告，均已被标记为 OPEN：
*   **🟡 中等：SQLite 并发只读冲突** ([Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640))：在 `delivery.ts` 中，由于热轮询（1秒一次）以只读方式打开 `outbound.db`，与容器拥有者的写事务（`journal_mode = DELETE`）发生竞态，导致抛出 `SQLITE_READONLY_ROLLBACK` 错误日志。此问题虽可能不影响最终数据一致性，但会产生大量错误日志，需关注。目前尚无修复 PR。
*   **🟡 中等：供应链安全风险警告** ([Issue #2641](https://github.com/nanoclaw/issues/2641))：用户 `NoamGit` 报告指出 `@gongrzhe/server-gmail-autoauth-mcp` 可能存在供应链风险，并引用了相关的安全分析文章。考虑到 PR #1961 刚刚引入官方的 Gmail 工具，社区对外部邮件授权插件的警惕性较高。

## 6. 功能请求与路线图信号
从今日的 5 个待合并 PR 中，我们可以窥见项目近期的演进方向：
*   **更智能的路由与会话感知**：[PR #2645](https://github.com/nanocoai/nanoclaw/issues/2645) 提议为 Agent 群组提供 `context_messages` 上下文窗口，结合 [PR #2643](https://github.com/nanocoai/nanoclaw/issues/2643) 中对正则匹配和 `@mention` 的处理优化，预示着 NanoClaw 的消息路由引擎将变得更加精准和人性化。
*   **多平台兼容性收敛**：[PR #2642](https://github.com/nanocoai/nanoclaw/issues/2642) 修复了 Telegram 适配器的版本依赖问题，表明项目正在强化对主流聊天软件的稳定接入。
*   **空间数据可视化（探索性）**：[PR #2646](https://github.com/nanocoai/nanoclaw/issues/2646) 加入了 OSM 建筑加载、阴影投影和风场可视化的 Web 技能，展示了 NanoClaw 在结合外部空间地理数据方面的扩展潜力。

## 7. 用户反馈摘要
从今日的 Issue 中可以提炼出以下用户侧反馈：
*   **安全性痛点**：用户对 MCP 插件获取敏感权限（如 Gmail 密码/Token）非常敏感，倾向于使用官方推荐或经由 OneCLI 安全认证的工具（对应 #2641）。
*   **数据一致性期待**：部署在高频轮询场景下的用户，对本地 SQLite 数据库的并发处理提出了更高的要求，期望彻底消除日志中的 Rollback 警告（对应 #2640）。

## 8. 待处理积压
*   **急需维护者 Review 的 PRs**：目前有 5 个处于 OPEN 状态的新 PR（#2642 至 #2646）。特别是 `yairixStudio` 提交的关于路由和 Telegram 适配的系列修改（#2642, #2643, #2644, #2645）具有较强的逻辑关联性，建议维护者优先进行代码审查，以便一次性合并，大幅提升本迭代的功能完整度。
*   **SQLite 竞态问题**：[Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640) 涉及底层存储机制，在容器化部署场景下容易引发告警疲劳，建议研发团队排期跟进。

---
*数据来源：GitHub NanoClaw (nanocoai/nanoclaw) 项目时间线截至 2026-05-30。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这份 2026-05-30 的 NullClaw 项目动态日报基于最新 GitHub 数据生成，涵盖项目版本迭代、架构优化及社区生态进展。

---

# NullClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
- **整体活跃度**：NullClaw 今日保持**高度活跃**与健康的迭代节奏，过去 24 小时内共处理了 12 个 PR（其中 9 个顺利合并/关闭）和 3 个 Issue。
- **版本里程碑**：项目成功发布了 **v2026.5.29** 新版本，标志着多渠道集成、底层工具链和 A2A（Agent-to-Agent）通信架构取得了实质性进展。
- **质量与稳定性**：核心开发者及社区贡献者集中修复了 Telegram 通道中的严重消息丢失 Bug 及全局记忆查询缺陷，大幅增强了个人 AI 助理在复杂多轮对话和子智能体调度中的稳定性。
- **生态扩展**：引入了新的 Gateway 方法及 OpenAI 兼容提供商的自定义查询支持，进一步完善了作为开源 AI 智能体底层基座的扩展能力。

## 2. 版本发布
📝 **[v2026.5.29](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.29)**
- **发布时间**：2026-05-29
- **更新概要**：此版本主要整合了近期的架构优化与渠道适配器更新。
- **核心变更**：
  - 更新底层构建与版本基础配置（`v2026.5.4`）。
  - **工作流重构**：将 GitHub CI/CD 工作流迁移至 `nullbuilder` 体系（[PR #889](https://github.com/nullclaw/nullclaw/pull/889)），提升了构建自动化的可控性。
  - **协议适配**：新增原生 ACP (Agent Communication Protocol) stdio 适配器（[PR #896](https://github.com/nullclaw/nullclaw/pull/896)），为未来多智能体本地互联打下基础。
- **迁移注意事项**：本次更新涉及工作流及基础构建环境的变更，自部署用户在升级到此版本时，建议检查本地 `zig` 构建环境及相关 CI 脚本的兼容性。

## 3. 项目进展
今日共有 **9 个 PR 被合并/关闭**，极大推进了项目的稳定性与跨平台兼容性：

- **通道与通信优化**：
  - 🤖 **[PR #930](https://github.com/nullclaw/nullclaw/pull/930)** (已合并)：Telegram 渠道现在能够捕获并解析 `reply_to_message` 的原始文本，提升了群聊上下文的连贯性。
  - 📞 **[PR #928](https://github.com/nullclaw/nullclaw/pull/928)** (已合并)：修复了致命的子智能体结果丢失问题，确保 `spawn` 工具的结果能准确推送到 Telegram。
  - 💬 **[PR #934](https://github.com/nullclaw/nullclaw/pull/934)** (已合并)：重构了 LINE 频道的 `sendMessage` 路由，并实现了 30s TTL 的 `replyToken` 线程安全缓存。
- **核心智能体修复**：
  - 🧠 **[PR #929](https://github.com/nullclaw/nullclaw/pull/929)** (已合并)：修复了 `memory_list` 无法检索全局记忆（`session_id=NULL`）的逻辑缺陷，极大改善了跨会话的记忆提取能力。
- **底层架构与安全**：
  - 🔒 **[PR #933](https://github.com/nullclaw/nullclaw/pull/933)** (已合并)：增加了网关鉴权方法及转录接口，并对配对令牌进行了哈希存储与超时保护。
  - 🔐 **[PR #925](https://github.com/nullclaw/nullclaw/pull/925)** (已合并)：修复了 macOS 环境下工作空间路径 `/private/var/folders` 被误拦截的安全策略问题。
- **构建与测试**：
  - 🛠 **[PR #935](https://github.com/nullclaw/nullclaw/pull/935)** (已合并)：更新 Nix flake lockfiles 以完整支持 `zig 0.16.0`。
  - 🧪 **[PR #927](https://github.com/nullclaw/nullclaw/pull/927)** & **[PR #926](https://github.com/nullclaw/nullclaw/pull/926)** (均合并)：优化了测试套件，屏蔽了预期内的 API 错误日志，并隔离了环境变量干扰，保证 CI 流水线的稳定运行。

## 4. 社区热点
尽管今日关闭的 Issues 评论数均为 0（说明修复极其迅速，无需冗长讨论），但以下被解决的痛点直接反映了社区和生产环境中的核心诉求：

- **Issue #916** & **Issue #918**：由社区开发者 `weissfl` 提交。重点反馈了在将 NullClaw 接入 Telegram 生产环境时，**上下文断裂**（回复消息丢失原文）和 **异步任务结果静默丢失** 的严重体验问题。这两个 Issue 的迅速关闭（均由 `raskevichai` 提交对应 PR 修复）表明维护团队对生产级阻断性问题具有极高的响应速度。

## 5. Bug 与稳定性
今日报告中解决的核心 Bug 按严重程度排序如下：

1. **Critical (已修复)**：[Issue #918](https://github.com/nullclaw/nullclaw/issues/918) - Telegram 轮询模式下，子智能体（`spawn` tool）执行完毕后，结果永远无法送达用户频道。根本原因是总线（bus）实例为空。 -> *Fix: [PR #928](https://github.com/nullclaw/nullclaw/pull/928)*
2. **High (已修复)**：[Issue #916](https://github.com/nullclaw/nullclaw/issues/916) - Telegram 机器人缺乏处理 `reply_to_message` 文本的能力，导致对话上下文截断。 -> *Fix: [PR #930](https://github.com/nullclaw/nullclaw/pull/930)*
3. **Medium (已修复)**：[Issue #917](https://github.com/nullclaw/nullclaw/issues/917) - `memory_list` 工具强绑定 `session_id`，导致全局共享的记忆（`session_id=NULL`）对智能体不可见。 -> *Fix: [PR #929](https://github.com/nullclaw/nullclaw/pull/929)*

## 6. 功能请求与路线图信号
从目前仍处于 **Open** 状态的 PR 中，可以洞察到项目接下来的演进方向：

- **深度兼容第三方 LLM 提供商**：[PR #940](https://github.com/nullclaw/nullclaw/pull/940) 致力于修复自定义 OpenAI 兼容模型的列表获取问题。这释放了一个信号：NullClaw 正在积极扩展其作为“模型路由器”的能力，不仅支持原生 Claude，还将无缝兼容各类私有部署的大模型。
- **精细化上下文控制**：[PR #939](https://github.com/nullclaw/nullclaw/pull/939) 恢复了 `compact_context` 配置项的实际运行时效用。这意味着项目在为 AI 助手引入“自动压缩历史上下文”以节省 Token 消耗的功能，这将极大影响长时记忆和长对话的成本。

## 7. 用户反馈摘要
综合近期 Issues 与 PR 描述，真实用户的使用反馈主要集中在以下场景：
- **高频场景验证**：Telegram 依然是个人 AI 助手最核心的承载端之一，用户高度依赖于在群组中对 Bot 进行“回复”以唤醒特定上下文。
- **多智能体编排诉求**：用户已经开始在生产中重度使用 `spawn` 功能创建子智能体代理任务。此前该链路的断裂直接导致生产事故，表明用户正在尝试将 NullClaw 作为一个多智能体调度枢纽来使用。
- **持久化记忆刚需**：用户对于“跨会话”的知识记忆有强烈需求（Issue #917），希望 AI 能够拥有独立于当前会话的长期全局记忆。

## 8. 待处理积压
目前需要维护者重点关注并推进 Code Review 的待合并 PR（积压项）：

- **[PR #940](https://github.com/nullclaw/nullclaw/pull/940)**：关于自定义 OpenAI 模型路由的修复，属于扩展生态的关键功能。
- **[PR #939](https://github.com/nullclaw/nullclaw/pull/939)**：涉及上下文压缩逻辑的修复，可能影响 AI 长期记忆的稳定性，需谨慎评估合并。
- **[PR #938](https://github.com/nullclaw/nullclaw/pull/938)**：当前版本的发布 PR，等待最终合并与 Tag 确认。

> **分析师点评**：NullClaw 的项目健康度极佳。今天展现出了“Bug 当天报告、当天出 Fix PR 并合入主分支准备发布”的高效闭环。智能体协议（ACP）的引入以及自定义模型查询的适配，表明该项目正稳步从一个单纯的“个人聊天机器人”向“泛用型多智能体基础设施”演进。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026 年 5 月 30 日 IronClaw (github.com/nearai/ironclaw) 项目动态日报：

# 📊 IronClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
过去 24 小时内，IronClaw 项目保持着**极高**的开发活跃度，共产生 21 条 Issue 更新（15 条新开/活跃，6 条关闭）和 50 条 PR 更新（26 条待合并，24 条已合并/关闭）。核心团队的贡献高度聚焦于 **Reborn 架构的改造**，特别是围绕产品级认证（product-auth）、OAuth 凭证生命周期管理以及工具调用审计轨道的铺设。整体来看，项目目前处于功能大幅迭代与底层安全重构并行的健康阶段，但近期的大量代码合入也引发了少量的编译中断与 Nightly E2E 测试失败，需引起维护者关注。

## 2. 版本发布
**无新版本发布。**
*(注：根据 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)，目前 crates.io 上的最新版本仍停留在 `0.24.0`，而 GitHub 最新 tag 已发布至 `v0.27.0`，存在明显的发布滞后现象。)*

---

## 3. 项目进展
今日共有 24 个 PR 被合并或关闭，标志着 Reborn 架构在安全与认证体系上取得了重大实质性进展：

*   **持久化产品级认证基石落地：** [PR #4234](https://github.com/nearai/ironclaw/pull/4234) 成功合并，引入了文件系统支持的生产级 product-auth 适配器，完善了 OAuth 回调的防崩溃重放机制。
*   **安全审计轨道全面打通：** [PR #4023](https://github.com/nearai/ironclaw/pull/4023) 与 [PR #4024](https://github.com/nearai/ironclaw/pull/4024) 合并，将交互式聊天、调度器和常规引擎的工具执行统一迁移至受审计的 `execute_tool_audited` 漏斗中，彻底堵住了此前无法生成 `ActionRecord` 的审计盲区。
*   **Auth 阻塞状态验证：** [PR #4232](https://github.com/nearai/ironclaw/pull/4232) 合并，引入了对 Reborn auth 阻塞状态的校验，确保其在崩溃恢复时能持久化且不会错误地落入 `RecoveryRequired` 状态。
*   **依赖与合规更新：** [PR #4243](https://github.com/nearai/ironclaw/pull/4243) 修复了最近代码重构导致的 `RecordingFlowManager` trait 漂移引起的编译失败；[PR #4242](https://github.com/nearai/ironclaw/pull/4242) 将 `tar` 依赖升级至 0.4.46 以修复安全漏洞。

---

## 4. 社区热点
今日讨论最密集、关注度最高的问题集中在 **下游依赖阻断** 和 **底层安全设计** 上：

*   **Crates.io 发布停滞危机：** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) (11 条评论)。由于 `wasmtime` 暴出的 CVE 漏洞，导致下游被强制锚定在 `0.24.0`，而官方连续多个版本未推送至 crates.io，严重影响了下游生态的更新。这是目前社区最迫切解决的阻塞性问题。
*   **URL 路径凭证注入的安全争议：** [Issue #3917](https://github.com/nearai/ironclaw/issues/3917) (5 条评论)。针对 PR #3903 引入的 `RuntimeCredentialTarget::PathPlaceholder` 功能，开发者就“将 Secrets 注入 URL 路径极易导致日志泄漏”展开了激烈讨论，正在评估是彻底删除该功能还是进行底层加固。
*   **Slack 集成 MVP：** [Issue #3857](https://github.com/nearai/ironclaw/issues/3857) (5 条评论)。讨论了添加默认关闭的 Slack ProductAdapter，以支持异步 DM 和应用提及的路由处理，表明项目正在积极拓展 IM 平台的集成能力。

---

## 5. Bug 与稳定性
随着大量特性的合入，今日暴露了数个值得注意的稳定性问题：

*   🔴 **P0 级别：Nightly E2E 全面失败**
    *   [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)：自动化测试 E2E 运行失败，需立即排查是否由近期的审计漏斗重构引起。
*   🟠 **编译阻断：** 
    *   [Issue #4237](https://github.com/nearai/ironclaw/issues/4237)：`ironclaw_product_workflow` 集成测试编译失败。此问题由 [PR #4234](https://github.com/nearai/ironclaw/pull/4234) 引入的 trait 变更导致。*(好消息是：维护者已迅速提交了 [PR #4243](https://github.com/nearai/ironclaw/pull/4243) 修复了此问题。)*
*   🟡 **Agent KV Cache 复用失效：**
    *   [Issue #4241](https://github.com/nearai/ironclaw/issues/4241)：用户报告在工作区存在 Prompt Inputs 时，跨对话轮次的 KV Cache 复用机制被破坏，这可能增加 LLM API 的调用延迟和成本。目前尚无对应修复 PR。

---

## 6. 功能请求与路线图信号
根据今日的 Issues 和活跃 PR，项目在“安全性”和“运行时效率”方向的演进路线非常明确：

*   **凭证与架构安全硬化：** 
    *   [Issue #4222](https://github.com/nearai/ironclaw/issues/4222) 提出在 HTTP 请求结束后彻底擦除内存中的明文凭据（Zeroize）。
    *   [Issue #4215](https://github.com/nearai/ironclaw/issues/4215) 计划将分散的 PKCE 数学计算统一抽取到 `ironclaw_common::pkce` 中，以防止单点逻辑漂移。
*   **异步网络栈改造：** 
    *   [Issue #4206](https://github.com/nearai/ironclaw/issues/4206) 计划将整个运行时 HTTP 出口链路从同步彻底转为异步，这是解决高并发性能瓶颈的强烈信号。
*   **GSuite SSO 与 WebChat V2 推进：** 
    *   [Issue #4204](https://github.com/nearai/ironclaw/issues/4204) 正在推进 GitHub + NEAR 提供商的整合，结合活跃的 [PR #4231](https://github.com/nearai/ironclaw/pull/4231)，完整的 WebChat v2 认证体系将在下个版本完全成型。

---

## 7. 用户反馈摘要
从今日的 issue 提交中，可以提取出以下真实用户痛点：
1.  **版本同步痛点：** 受制于 crates.io 的发布停滞（#3259），使用 Rust 官方包管理器的开发者不得不通过指定 git hash 来获取最新补丁，增加了依赖管理的摩擦。
2.  **大模型推理成本痛点：** KV Cache 复用失效（#4241）反映出高级用户对 Agent 框架底层处理 token 效率的高度敏感。框架的动态 Prompt 拼接逻辑如果不严谨，会直接导致用户的 LLM API 账单翻倍。
3.  **安全合规期望：** 社区（及内部开发团队）对代码质量和安全边界的审查极其严格（#3917, #4222），反映出用户对该框架在“企业级安全身份运行时”这一角色上的极高期许。

---

## 8. 待处理积压
以下重要条目需要核心维护者的紧急介入或持续跟进：

*   **长期阻塞：** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) —— **急需将 0.25.0-0.27.0 推送至 crates.io**，否则将持续伤害下游采纳率。
*   **高危堆积：** [Issue #4226](https://github.com/nearai/ironclaw/issues/4226) —— 进程交接清理状态无驱逐机制，可能导致长期运行的主机进程发生内存无限增长。
*   **大型 PR 审查瓶颈：** 提交多日且尚未合并的大型 PR 堆积严重，特别是 [PR #4055](https://github.com/nearai/ironclaw/pull/4055) (TrustEnrollment 信任注册) 和 [PR #4186](https://github.com/nearai/ironclaw/pull/4186) (本地开发审批门控)，急需进行代码审查以解锁后续进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-05-30)

**分析时段**: 过去 24 小时 | **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览
- **开发活跃度极高，侧重底层性能与稳定性建设**：过去 24 小时内项目迎来了高达 14 项 Pull Request 更新，其中 9 项已被成功合并或关闭，0 个新开 Issue，整体呈现出“强研发推进、内部测试闭环”的态势。
- **重点攻克“大输出/高负载”场景**：多个核心合并的 PR 集中在修复 Agent 执行超大输出（>1MB stdout）时的 Markdown 渲染阻塞、WebSocket 连接误断开等严重性能瓶颈。
- **体验优化稳健推进**：UI 层面优化了 Artifacts 文件预览工具栏，并修复了本地文件丢失时的错误提示；底层网关完成了启动流程的深度优化。
- **社区遗留贡献重新激活**：数个由社区贡献者 `MaoQianTu` 在 4 月份提交的关于“防止表单未保存内容丢失”的系列防呆设计 PR 重新被标记为活跃（Stale 状态更新），有望在近期合入主干。

---

### 2. 版本发布
**今日无新版本发布。** 鉴于目前主干分支正在进行高密度的渲染性能调优和网关启动优化，推测项目团队正在积累功能与稳定性改进，为下一个里程碑版本（或 Beta/RC 版）做准备。

---

### 3. 项目进展
今日共有 **9 项核心 PR 被合并/关闭**，项目在性能优化、架构健壮性和 UI 体验上取得了实质性进展：

- **🚀 大输出渲染与连接稳定性攻坚** (by `btc6979y-dotcom`)
  - [PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077): 修复 exec 命令产生巨量输出时的渲染卡顿和 WS 断连问题。引入超过 20KB 内容延迟渲染（展示摘要+展开），并优化了网关看门狗机制，防止 Tick 饿死。
  - [PR #2075](https://github.com/netease-youdao/LobsterAI/pull/2075): 针对超大 Markdown 消息，默认仅渲染轻量级的“头/尾预览”，用户可手动展开完整内容，彻底规避了复杂 DOM 渲染造成的 UI 阻塞。
- **🤖 多 Agent 架构完善与元数据解耦**
  - [PR #2074](https://github.com/netease-youdao/LobsterAI/pull/2074): 新增子 Agent（subagent）会话的删除 IPC 路由及状态清理逻辑，修复了侧边栏残留及父会话状态同步问题。
  - [PR #2078](https://github.com/netease-youdao/LobsterAI/pull/2078): 重构了 cowork 模块，将 selected-skill 的路由元数据改为 emit 发射机制，取代了原有的内联 prompt 注入，提升了架构的解耦度。
- **🎨 UI 交互与文件系统健壮性提升**
  - [PR #2076](https://github.com/netease-youdao/LobsterAI/pull/2076): 优化了文件预览工具栏，增加了三点菜单收纳次要操作，精简了 HTML 与普通文件的默认操作项。
  - [PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073): 增强了本地 Artifacts 文件的容错提示，当文件被移动、删除或无权限访问时，会弹出清晰的 Toast 提示。
- **⚙️ 底层优化与修复**
  - [PR #2072](https://github.com/netease-youdao/LobsterAI/pull/2072): OpenClaw 启动网关综合优化，修复了插件重复注册、冗余 provider 解析及 dev 模式路径错误，显著加快了冷启动速度。
  - [PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057): 移除了已弃用的 VBScript 启动器，替换为隐藏式 PowerShell 执行，提升了系统更新机制的现代化与安全性。
  - [PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063): 修复了 IM 模块回复装配逻辑，将其限制在当前轮次并剥离 thinking 块，避免了上下文污染。

---

### 4. 社区热点
今日没有发生基于新 Issue 的集中讨论，但一组系列 PR 的状态变化引起了关注：
- **表单防呆与草稿保护机制**：贡献者 `MaoQianTu` 提交的 5 个关于“防止未保存内容静默丢失”的 PR（[#1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476), [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477)）在沉寂一个月后，于昨日集中被标记为活跃。
- **分析诉求**：这一系列操作覆盖了创建 Agent、Agent 设置、MCP 服务器配置、草稿保存以及历史消息重新编辑等**极其核心且高频的用户交互痛点**。说明维护团队近期正在集中梳理 UI 状态管理的遗留债务，此类改动将大幅提升用户在日常配置和长对话场景下的安全感。

---

### 5. Bug 与稳定性
今日无新的外部 Bug 报告（0 Issues），但核心开发者自行发现并修复了数个深层次的稳定性隐患：
- **严重（P0）- UI 渲染引擎阻塞**：已通过 [PR #2075](https://github.com/netease-youdao/LobsterAI/pull/2075) 和 [PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077) 修复。当 Agent 工具调用产生超大输出时，主渲染线程不再因 Markdown 解析而卡死。
- **严重（P1）- 网络连接假死**：已通过 [PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077) 修复。修复了因 Watchdog 机制判定失误导致的 WebSocket 误断连，并明确记录了 exec 风暴期间 `sessions.list` RPC 超时为预期行为。
- **中等（P2）- 旧版 Windows 更新脚本失效**：已通过 [PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057) 修复，改用 PowerShell 替代 VBScript。
- **轻微（P3）- 本地文件状态不同步**：已通过 [PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073) 修复，解决了物理文件被删除后界面无反馈的问题。

---

### 6. 功能请求与路线图信号
虽然今日无显式的功能请求（Issue），但从合并的代码可以管窥项目近期的演进方向：
- **多 Agent（Cowork）编排的深化**：对 SubAgent 删除逻辑的完善（[PR #2074](https://github.com/netease-youdao/LobsterAI/pull/2074)）和 Skill 路由解耦（[PR #2078](https://github.com/netease-youdao/LobsterAI/pull/2078)），标志着 LobsterAI 正在摆脱单点对话的工具属性，向更加成熟的**多智能体协同调度平台**迈进。
- **重度开发者场景的适配**：官方针对 exec 巨量输出和 OpenClaw 网关的深度调优，表明项目正在积极迎合**代码生成、CI/CD 集成等重度开发者场景**。

---

### 7. 用户反馈摘要
> *注：由于过去 24 小时内无新增 Issue 及带评论的 PR，本节暂无直接的用户互动反馈。*

但从技术债的清理方向（表单草稿保存系列 PR）可以推断：**历史版本中，用户在使用 LobsterAI 进行复杂配置（如编写 System Prompt 或 MCP 命令时）可能频繁遭遇误关闭导致内容清空的困扰**。维护团队对这些组件的 `isDirty` 状态和 `pendingDraftRef` 进行了全面重构，是对这一核心痛点的有力回应。

---

### 8. 待处理积压
需关注处于 **Open/Stale 状态的 5 个重要 PR**。这些 PR 已经过社区开发者的详细设计与实现，目前处于等待官方 Final Review 的阶段：
1. [PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473): 创建 Agent 弹窗未保存确认机制。
2. [PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474): Agent 设置面板关闭保护机制。
3. [PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475): MCP 服务器配置弹窗防丢失机制。
4. [PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476): 视图/会话切换时的输入框草稿即时持久化。
5. [PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477): 历史消息重编辑时的覆盖确认提示。

**💡 维护者建议**：这一系列 PR 同源且高度相关，建议抽取统一的状态变更守卫（Guard）组件或 Hook 后，进行一次性批量 Code Review 和合并，以彻底终结表单数据意外丢失的体验问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis (github.com/moltis-org/moltis) 项目动态日报**
**日期**: 2026-05-30 | **分析师**: AI 智能体与个人 AI 助手开源项目组

---

### 1. 今日速览
过去 24 小时内，Moltis 项目保持了中等偏高的社区活跃度。项目今日共处理了 4 条 Issue 更新（新增 3 个活跃 Issue，关闭 1 个）和 2 条 PR 更新（合并 1 个修复 PR，挂起 1 个依赖更新）。今日的核心亮点在于社区对**多硬件架构兼容性**的关注，集中报告了 Apple Silicon (arm64) 环境以及企业代理网络下的沙箱运行时缺陷；同时，核心维护者顺利合并了关于 Skill（技能）模块独立禁用逻辑的修复补丁。项目整体健康度良好，Bug 响应及修复流转迅速。

### 2. 版本发布
今日**无**新版本发布。

### 3. 项目进展
- **已合并 PR [#1084](https://github.com/moltis-org/moltis/pull/1084) `fix(skills): track bundled skill disables individually`**
  - **进展评估**：这是一个针对用户体验的重要修复。此前系统仅支持按“类别”全局启用/禁用技能，导致用户无法精细控制单一技能。该补丁重构了状态追踪逻辑，将其细化为单个捆绑技能级别，并增加了相关的回归测试。
  - **推进意义**：增强了 AI 助手在技能调用管理上的灵活性，标志着 Moltis 在个性化配置方面向前迈进了一步。

### 4. 社区热点
- **最活跃/长周期讨论 Issue [#235](https://github.com/moltis-org/moltis/issues/235) `PTY-based interactive Claude Code CLI control...`**
  - **动态**：该 Issue 创建于 2 月 25 日，昨日再次产生讨论（累计 6 条评论，1 个点赞）。
  - **诉求分析**：开发者社区强烈需要将 Claude Code 等 CLI 工具作为底层子进程无缝接入 Moltis 的多智能体编排中。当前由于伪终端（PTY）检测的限制，交互模式被强制中断。此功能若被攻克，将极大提升 Moltis 在复杂自主多智能体（Multi-Agent）工作流中的核心竞争力。

### 5. Bug 与稳定性
今日报告了多个与底层运行环境相关的 Bug，均由用户 `karlmdavis` 提交，尚未出现对应的修复 PR。按严重程度评估如下：

1. **[HIGH] Docker 沙箱在 arm64 架构下崩溃**: [Issue #1085](https://github.com/moltis-org/moltis/issues/1085)
   - **表现**：在 Apple Silicon 环境下，由于硬编码挂载了 x86 特有的 `/sys/class/dmi` 路径，导致沙箱启动失败（sysfs 只读错误）。
   - **状态**：待修复 (OPEN)。影响所有使用 M 系列芯片 Mac 进行本地开发的用户。
2. **[MEDIUM] 企业代理网络下沙箱构建失败**: [Issue #1086](https://github.com/moltis-org/moltis/issues/1086)
   - **表现**：使用 Apple Containers 后端时，在企业 HTTPS 代理（如 Zscaler）环境下 DNS 解析失败。
   - **状态**：待修复 (OPEN)。对企业级部署用户存在阻断性影响。
3. **[LOW] 技能管理 Bug**: [Issue #1083](https://github.com/moltis-org/moltis/issues/1083)
   - **表现**：用户无法单独启用/禁用捆绑技能中的某一项。
   - **状态**：已由 [PR #1084](https://github.com/moltis-org/moltis/pull/1084) 修复并关闭 (CLOSED)。

### 6. 功能请求与路线图信号
- **深度 CLI 工具多智能体编排 ([Issue #235](https://github.com/moltis-org/moltis/issues/235))**：这反映了社区对 Moltis 成为“全能型 Agent 编排中枢”的期待。要求系统底层具备更好的 PTY 欺骗或子进程双向通信能力。此类需求可能需要架构层面的抽象，有望出现在下半年的重大版本路线图中。
- **异构硬件及网络部署支持 ([Issue #1085](https://github.com/moltis-org/moltis/issues/1085), [Issue #1086](https://github.com/moltis-org/moltis/issues/1086))**：目前的 Bug 集中在边缘计算环境和受限网络环境。项目下一步可能需要引入动态架构检测机制及更灵活的代理配置注入能力。

### 7. 用户反馈摘要
- **痛点**：苹果生态开发者近期受挫较多。Moltis 新引入的沙箱机制在 arm64 架构上兼容性不足，且未充分考虑企业级代理网络环境，导致本地运行调试受阻。
- **场景**：用户正积极尝试将 Moltis 用于构建基于 Claude 的自动化闭环（CLI 编排）。
- **满意度**：社区对 `bsarkisov` 提出的精细化技能控制诉求反响积极，维护者 `penso` 在 PR #1084 中的快速响应和代码重构（包含回归测试）体现了项目的高质量维护水准。

### 8. 待处理积压
- **[需要关注] [PR #1087](https://github.com/moltis-org/moltis/pull/1087) `chore(deps): bump tar...`**
  - **状态**：由 Dependabot 自动发起，更新 Rust 依赖 `tar` 至 0.4.46 版本。
  - **建议**：属于常规依赖升级，CI 状态若无报错，建议维护者尽快 Code Review 并合并，以防后续产生合并冲突。
- **[需要关注] [Issue #235](https://github.com/moltis-org/moltis/issues/235)**
  - **状态**：自 2 月份开启至今，虽然活跃但未指派 Milestone。
  - **建议**：此 Issue 涉及 Agent 底层通信核心能力，建议维护团队将其纳入官方 RFC 或发布相关路线图声明，以管理社区预期。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026年05月30日

## 1. 今日速览

过去24小时内，CoPaw (QwenPaw) 项目保持了**极高的社区活跃度与开发推进速度**。项目共处理了 45 条 Issue（关闭 26 个，新开/活跃 19 个）和 34 个 PR（合并/关闭 18 个）。项目在今天正式推送了 `v1.1.10-beta.1` 版本，标志着底层架构和稳定性进入了新一轮的打磨期。开发团队今日不仅集中修复了大量 Windows 桌面端和定时任务的顽固 Bug，还合入了对飞书频道、Coding 模式和子智能体架构的重要更新。

## 2. 版本发布

- **[v1.1.10-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1)**
  - **更新内容**：该版本主要侧重于项目基础设施的维护，精简了 README 中的新闻模块，更新了版本号至 v1.1.9，并移除了冗余的 `unit-tests.yml` CI 工作流。
  - **破坏性变更/迁移注意**：暂无直接破坏性变更，但由于后续 PR 合入了大量底层重构（如上下文压缩媒体块、CLI 环境变量处理等），建议从早期版本升级至 v1.1.10+ 的用户关注后续完整 Release Note。

## 3. 项目进展

今日共有 18 个 PR 被合并或关闭，项目在多渠道接入、开发者体验和系统健壮性上迈出了坚实的一步：

- **多渠道与频道架构优化**：
  - [PR #4742](https://github.com/agentscope-ai/QwenPaw/pull/4742)：重构了飞书交互卡片系统，使其与企微/QQ的架构保持一致，并修复了流式输出下的卡片异常。
- **多智能体与底层能力增强**：
  - [PR #4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)：合入 `spawn_subagent` 工具，允许 Agent 在自身工作区内派发临时子任务，极大丰富了多智能体协作模式。
  - [PR #4728](https://github.com/agentscope-ai/QwenPaw/pull/4728)：修复了在包含 `file` 块的 assistant 消息中 `reasoning_content` 丢失的严重问题，提升了复杂上下文解析的稳定性。
- **Windows 桌面端体验修复**：
  - [PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779)：在 Tauri 桌面包中内置了真实的 `qwenpaw` CLI 可执行文件，彻底解决了 Windows 桌面版创建定时任务时找不到 CLI 而反复触发 pip 安装的痛点。
  - [PR #4696](https://github.com/agentscope-ai/QwenPaw/pull/4696)：隐藏了 Coding 模式下 Windows 端调用 Git 时弹出的黑色控制台窗口。
  - [PR #4801](https://github.com/agentscope-ai/QwenPaw/pull/4801)：修复了由于依赖缺失导致 QwenPaw 宠物插件无法启动的问题。
- **其他改进**：
  - [PR #4809](https://github.com/agentscope-ai/QwenPaw/pull/4809)：添加了 OpenRouter 应用归因标头，使 QwenPaw 能够参与相关编程排行榜。
  - [PR #4805](https://github.com/agentscope-ai/QwenPaw/pull/4805)：修复了 Coding 模式下切换项目时，编辑器标签页未清空的 UI 问题。

## 4. 社区热点

今日讨论最热烈的议题集中在**多智能体隔离、定时任务稳定性以及上下文窗口管理**：

- **[Issue #4739](https://github.com/agentscope-ai/QwenPaw/issues/4739)** (8条评论)：Tool call 导致 Agent 挂起。Agent 在工具超时或成功执行后，进入“等待用户输入”的死锁状态，引发多位用户共鸣。
- **[Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)** (7条评论)：定时任务与用户消息共享 session 导致任务被意外打断。这暴露出当前 session 调度机制在并发处理上的缺陷。
- **[Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) & [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** (6条评论)：社区对于**CoPaw Agent Teams（多智能体团队协作）**以及底层向 **AgentScope 2.0 迁移**的呼声极高，期待更强大的去中心化协同能力。
- **[Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789)** (4条评论，1个赞)：用户呼吁实现“类似 Trae 的对话级回退与删除功能”，并打通项目目录管理，反映了用户对沙箱精细化管理的高诉求。

## 5. Bug 与稳定性

今日暴露的 Bug 主要围绕桌面端环境、流式输出性能及内存索引，部分已有对应修复：

1. **严重 (Critical)**：
   - [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)：向量索引无限膨胀至 37GB，导致 `memory_search` 频繁崩溃卡死。（暂无对应 fix PR，需官方紧急介入）。
   - [Issue #4792](https://github.com/agentscope-ai/QwenPaw/issues/4792)：后台长文本流式输出时，导致本地浏览器/电脑出现系统级卡顿（鼠标无法拖动）。
2. **高**：
   - [Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) & [Issue #4713](https://github.com/agentscope-ai/QwenPaw/issues/4712)：本地 CLI 工具因网络/Websocket 受限无法调用；页面切换后丢失历史对话记录。
3. **中**：
   - [Issue #4773](https://github.com/agentscope-ai/QwenPaw/issues/4773)：Windows 桌面版定时任务触发 pip 安装（**已在今日 PR #4779 中修复**）。
   - [Issue #4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)：每次版本升级后，被禁用的内置技能被重置为启用（状态持久化 Bug）。

## 6. 功能请求与路线图信号

结合社区诉求与今日活跃 PR，以下功能趋势明显：

- **快捷键与技能联想**：[Issue #4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) 请求输入 `/` 自动联想可用 skills，目前已有对应实现 [PR #4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) 待合并，预计将在下个版本实装。
- **插件生态与扩展性**：[PR #4794](https://github.com/agentscope-ai/QwenPaw/pull/4794) 引入了插件卸载钩子和 API 扩展；[PR #4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) 提出了 *Prompt Section Registry*，允许插件向系统 Prompt 注入内容而无需侵入修改核心代码，显示出项目正积极构建开放的插件生态。
- **自定义频道支持**：[PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) 提出支持插件注册自定义频道，进一步降低第三方平台接入门槛。

## 7. 用户反馈摘要

通过今日的 Issue 提炼，用户的真实反馈如下：
- **满意点**：多智能体工作区隔离概念深受欢迎；AgentScope 底层的灵活性与结合大模型的表现让用户充满期待。
- **核心痛点**：
  - **“失忆”与打断**：多任务并发（特别是定时任务与手动对话）时 session 串台或被重置，非常影响体验（如 Issue #4653）。
  - **桌面端架构限制**：Windows 桌面版（Tauri 打包）隔离了系统原生环境，导致诸如本地 CLI 工具调用、环境变量读取等问题频发。
  - **内存与性能泄漏**：向量数据库无限膨胀和前端流式渲染导致的系统卡顿，反映出项目在长期运行下的抗压能力仍需打磨。

## 8. 待处理积压

以下重要 Issues/PRs 目前处于待处理状态或需核心团队进一步 Review：

- **架构级讨论待定**：[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 向 AgentScope 2.0 迁移的里程碑计划需官方尽快确认时间线。
- **重要修复待 Review**：
  - [PR #4787](https://github.com/agentscope-ai/QwenPaw/pull/4787)：针对 Shell 输出撑爆上下文窗口的双层防御机制。
  - [PR #4822](https://github.com/agentscope-ai/QwenPaw/pull/4822)：修复定时任务 share_session 为 true 时执行轨迹为空的问题。
- **高危 Bug 滞留**：[Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) (ChromaDB 37G 膨胀导致崩溃) 目前尚未指定处理人，处于 Open 状态，极易造成生产环境阻断，需提醒维护者高度关注。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-30)

**分析数据源**：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
**分析师**：AI 智能体与个人 AI 助手开源项目分析师

---

## 1. 今日速览

过去 24 小时，ZeroClaw 项目保持了**极高的社区活跃度与提交频率**。共产生 14 条活跃 Issue（0 关闭）和 32 条 PR 更新（3 合并/关闭，29 待合并）。项目当前正处于 `v0.8.0-beta-2` 发布前的密集筹备与代码重构期，核心焦点集中在**多通道稳定性**（Telegram、Slack）和**运行时安全/权限拦截边界**的加固。从活动来看，外部贡献者提交了大量修复，但也暴露出近期架构升级带来的高风险回归问题，项目整体处于“高产出但需严控质量”的阶段。

---

## 2. 版本发布

**本日无新版本发布**。

当前代码库主线正致力于推进 `v0.8.0-beta-2` 的集成（见 PR #6848）。由于主分支存在多项与安全策略和多通道相关的高优先级 Bug，预计维护者将在关键修复 PR（如 #6960, #7000, #7002）合并后才会正式打 Tag。

---

## 3. 项目进展

今日共有 3 个 PR 状态发生变更（合并或关闭）：

- **PR #5652 [CLOSED]**: `[feat(provider): add native extended thinking for Anthropic and Bedrock providers]` 
  - **概况**：这是一个体积庞大（Size: L）的增强性 PR，旨在引入 Anthropic 和 Bedrock 原生的深度思考能力。
  - **进展分析**：该 PR 创建于 4 月中旬，今日被关闭。这表明项目可能改变了原生推理能力的集成路径，或者该特性需要拆分为更小的模块以适应 `v0.8.0` 的架构。

此外，有数个重量级的待合并 PR 正在积极推进，构成了下一版本的基石：
- **PR #6848**: Beta-2 集成总揽 PR（包含 TUI, RPC 传输等重大重构）。
- **PR #6665**: 添加 `channel_send` 工具，补齐 Agent 跨通道主动推送消息的能力短板。
- **PR #6920 & #6924**: 针对运行时工具执行边界的深度防御及 Skills 系统的 MCP 工具提权支持。

---

## 4. 社区热点

本日社区最活跃的讨论集中在核心运行时的配置缺陷与工具权限失效问题：

- **Issue #6699** (👍 0, 评论 7): `[tool_filter_groups is a no-op for real MCP tools]`
  - **链接**：[zeroclaw-labs/zeroclaw Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
  - **分析**：这是今日评论数最多的 Issue。用户指出文档中声明的 `tool_filter_groups` 配置对真实 MCP 工具完全无效（存在前缀校验 Bug）。这引发了关于当前 MCP 集成安全边界是否可靠的深层讨论。
- **Issue #6074** (评论 2): `[audit: track 153 commits lost in bulk revert c3ff635]`
  - **链接**：[zeroclaw-labs/zeroclaw Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
  - **分析**：持续的代码审计追踪，针对早前批量回滚 153 个提交的补救措施，牵动着老贡献者的神经，属于项目历史遗留的关键债务。

---

## 5. Bug 与稳定性

今日新报了大量高风险（S1/S2，P1/P2）Bug，多与 `v0.8.0-beta` 架构重构有关。**好消息是，大部分严重 Bug 社区已即时提交了对应的 Fix PR**。

**🔴 P1 / S1 (阻断级 / 严重降级)**
1. **Telegram 双杀（语音与TTS）**
   - **Bug**: [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) Telegram 语音转录永远失败，通道未绑定 transcription_provider。
     - **状态**：✅ 已有 Fix PR [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000)
   - **Bug**: [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) 多 Agent 配置下，TTS 错误解析了非通道所属 Agent 的提供商。
     - **状态**：✅ 已有 Fix PR [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002)
2. **Slack 通道阻断**
   - **Bug**: [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) Slack Socket Mode 拒绝所有消息（unauthorized user）。
     - **状态**：❌ 暂无对应 PR。
3. **运行时安全边界失效**
   - **Bug**: [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) Native 工具序列化忽略了 Risk Profile 和 Tool Filter 限制。
     - **状态**：✅ 相关修复正由 PR [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) 推进。

**🟡 P2 / S2 (中高风险)**
- **Bug [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989)**: `Config` 的 `#[secret]` 宏不支持 Header maps，导致 Bearer tokens 存在泄露风险。
- **Bug [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997)**: 官方文档版本与最新发布版脱节，严重阻碍新用户接入。

---

## 6. 功能请求与路线图信号

今日的 Issues 和 PRs 释放了明确的下一版本迭代信号：

1. **沙盒安全细粒度化**
   - **RFC [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)**: 提出基于配置驱动的细粒度沙盒策略，针对不同操作系统实现文件系统和网络的严格限制。这是迈向企业级安全可信 Agent 的关键一步。
2. **Schema-Guided Reasoning (SGR)**
   - **RFC [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)**: 提出跨 Provider 的结构化输出通用化方案。如果合入，将极大改善 ZeroClaw 在复杂任务中的推理准确度。
3. **底层工具增强**
   - **PR [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004)**: 为 `file_read` / `file_write` 引入可选的 Base64 编码，这意味着 Agent 不久的将来能够处理图片或二进制文件，是多模态交互的底层前置条件。

---

## 7. 用户反馈摘要

从今日的 Issue 详情中，可以提炼出用户/开发者的几个核心反馈点：

1. **多通道体验存在断裂感**：用户在配置 Telegram 和 Slack 时屡屡碰壁（如 Issue #6992, #6999）。特别是涉及语音（STT/TTS）和多 Agent 路由的场景，配置逻辑复杂且极易出错。
2. **国际化 (i18n) 执行不彻底**：Issue #7005 和 #6990 指出，即便是核心的 Onboarding Wizard 和新出的 `file_download` 工具，依然存在硬编码的英文字符串，未能走 `fl!()` 宏的翻译流程，这让非英语区的个人 AI 助手部署者感到困扰。
3. **CJK 字符支持不佳**：Issue #6995 曝光了 CLI 交互模式中，退格键对中/日/韩文字按字节而非按字符（Unicode grapheme）删除的基础体验问题，反映出项目在终端 UI 细节上的打磨仍有欠缺。

---

## 8. 待处理积压

以下重要长期议题需要维护团队关注：

- **跨通道架构重构卡点**：24-PR 规模的 `AllowlistAspect` 迁移计划目前处于停滞状态。
  - **关注 PR**: [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) (Nextcloud-talk), [#6778](https://github.com/zeroclaw-labs/zeroclaw/pull/6778) (Telegram), [#6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428) (Slack 线程回填)。
  - **提醒**：这些 PR 均标记了 `needs-author-action`，其合并直接关系到后续通道模块的稳定性，建议 @singlerider 或相关 Reviewer 推进 Code Review。
- **Nix 构建支持**：[PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) 同样等待作者响应，阻碍了 NixOS 用户的顺利部署。
- **历史代码审计**：[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪丢失的 153 个提交，需要核心团队评估哪些安全修复需要重新 Cherry-pick。

</details>