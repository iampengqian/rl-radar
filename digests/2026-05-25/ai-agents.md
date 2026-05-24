# OpenClaw 生态日报 2026-05-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-24 22:16 UTC

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

# OpenClaw 项目动态日报 (2026-05-25)

## 1. 今日速览

OpenClaw 项目在过去 24 小时内维持了**极高的活跃度与社区热度**。项目单日共处理了 500 条 Issue 更新（新开与活跃 473 条，关闭 27 条）以及 500 条 PR 更新（合并/关闭 80 条，仍有 420 条待合并）。团队在最近两天连续推出了 2 个版本（`v2026.5.22` 正式版与 `v2026.5.24-beta.1` 测试版），核心聚焦于网关性能调优。整体来看，项目当前处于**快速迭代、功能横向扩展与稳定性修补并行的健康状态**，社区对新特性（如新平台支持、通道集成和权限系统）的诉求强烈，同时积压的待办事项也提醒团队需关注技术债与代码审查效率。

---

## 2. 版本发布

### v2026.5.24-beta.1
**发布时间**: 2026-05-24
**链接**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.1
**更新内容**:
*   **Gateway/perf (性能优化)**: 复用进程稳定的 channel catalog 读取，避免重复的 bundled-channel 边界检查，并轮换 gateway watch 的 CPU profiles，以防止基准测试运行积累无限量的 artifact。
*   **Gateway/perf (缓存优化)**: 缓存稳定的 install-record、channel-catalog 和 bundled-channel 数据。

### v2026.5.22
**发布时间**: 2026-05-22
**链接**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.22
**更新内容**:
*   **Gateway/perf**: 包含与 beta.1 相同的 catalog 读取和 boundary checks 优化。
*   **Gateway/perf (内存优化)**: 在启动时复用不可变的 plugin metadata snapshots。

**⚠️ 迁移与破坏性变更评估**: 
近期的两个版本主要专注于底层网关的性能与内存优化，目前未披露破坏性的 API 或配置变更。但由于涉及“不可变插件元数据快照”的复用，自定义插件开发者需留意插件热重载时的元数据刷新机制是否受到影响。

---

## 3. 项目进展

今日共有 80 个 PR 被合并或关闭，另有大量核心 PR 被提交。项目在多通道架构重构、安全边界隔离和会话状态管理方面取得了实质性进展：

*   **多通道路由架构演进**: PR [#86157](https://github.com/openclaw/openclaw/pull/86157) (Slack) 和 [#86154](https://github.com/openclaw/openclaw/pull/86154) (Telegram) 提出了 **Channel Broker Phase 2** 架构，旨在将分散在 Telegram、Discord、Slack 等插件的会话、路由和状态管理统一收敛至标准契约，这将极大改善多通道并发的维护成本。
*   **安全与权限隔离**: PR [#85817](https://github.com/openclaw/openclaw/pull/85817) 引入了 `agent-scoped Policy overlays`，实现了基于代理身份的细粒度权限控制；PR [#81185](https://github.com/openclaw/openclaw/pull/81185) 实现了 `exec` 工具执行结果的敏感信息脱敏。
*   **内存与上下文管理**: PR [#86210](https://github.com/openclaw/openclaw/pull/86210) 引入了**多插槽记忆角色架构**，替代了原先的单一内存插件模型，允许 RAG 插件组合使用。
*   **关键修复**: 修复了 Codex 绑定过期的潜在死锁问题 ([#86216](https://github.com/openclaw/openclaw/pull/86216))，以及 Telegram 群发时因上下文过大导致的截断问题 ([#86177](https://github.com/openclaw/openclaw/pull/86177))。

---

## 4. 社区热点

今日社区讨论最激烈的问题集中在**跨平台客户端、移动端支持以及安全凭证管理**上：

*   🥇 **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** (106 评论, 👍 77): **Linux/Windows Clawdbot Apps**。作者 @steipete 提出目前已有 macOS 和移动端应用，强烈要求补齐 Linux 和 Windows 客户端。这反映了重度开发者和企业用户对桌面端全平台覆盖的迫切需求。
*   🥈 **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443)** (25 评论, 👍 2): **Android APK 预编译版发布**。由于官方仅提供源码，用户 @AstridQing-AI (由 Lysen 的 AI 助手代提) 呼吁在 Releases 中直接提供编译好的 APK，以降低普通移动端用户的使用门槛。
*   🥉 **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) & [#12602](https://github.com/openclaw/openclaw/issues/12602)** (各 13 评论): 
    *   #10659 请求增加 **"Masked Secrets" (掩码密钥)** 功能，防止 Agent 读取或泄露原始 API Key（防范提示词注入攻击）。
    *   #12602 请求支持 **Slack Block Kit**，以便 Agent 能够在 Slack 中输出富文本交互卡片，而非纯文本。

---

## 5. Bug 与稳定性

今日报告了多个关键的稳定性问题，部分已确认导致崩溃或消息丢失，且均被标记为高优先级 (P1/P2)：

*   🔥 **[P1] [Issue #83959](https://github.com/openclaw/openclaw/issues/83959) - Codex 启动重试耗尽导致崩溃循环**。
    *   **状态**: 等待真实行为验证。在 `v2026.5.18` 上，Codex app-server 在后台代理轮次中启动失败时，重试机制会在替代服务器准备好之前耗尽，直接导致 `crash-loop`。
*   🛑 **[P1] [Issue #86184](https://github.com/openclaw/openclaw/issues/86184) - Telegram 消息回复在工具调用后降级为泛型错误**。
    *   **状态**: 待处理。在 `v2026.5.22` 版本中，Telegram 会话成功执行工具后，用户收到的却是 `/new` 的 fallback 错误提示。
*   🛑 **[P1] [Issue #85192](https://github.com/openclaw/openclaw/issues/85192) - DeepSeek V4 推理重试机制失效**。
    *   **状态**: 待验证。当 DeepSeek V4 只输出思考过程而无实际文本时，Gateway 的续写重试未能正确触发，导致超时。
*   ✅ **修复中的 Bug**: [Issue #59330](https://github.com/openclaw/openclaw/issues/59330) (Control UI 禁用了 Raw mode) 已有关联的修复 PR 正在处理中。

---

## 6. 功能请求与路线图信号

结合近期的 PR 和 Issue，OpenClaw 的下一阶段路线图将重点围绕以下几个维度展开：

1.  **企业级权限与部署 (核心焦点)**:
    *   **Feature**: [PR #85817](https://github.com/openclaw/openclaw/pull/85817) (Agent 策略覆盖) 和 [Issue #12219](https://github.com/openclaw/openclaw/issues/12219) (Skill 权限声明标准)。这意味着 OpenClaw 正在构建类似浏览器或 K8s 的细粒度权限沙箱。
    *   **Feature**: [Issue #13610](https://github.com/openclaw/openclaw/issues/13610) 接入 AWS Secrets Manager 等外部密钥管理。
2.  **多模态与渠道标准化**:
    *   除了前文提到的 Slack Block Kit，[Issue #13337](https://github.com/openclaw/openclaw/issues/13337) 呼吁增加 **Vapi 语音通话 Provider**，标志着项目正从纯文本聊天向语音交互延伸。
3.  **基础设施架构升级**:
    *   [Issue #49178](https://github.com/openclaw/openclaw/issues/49178) 提出提取标准的 WebSocket 客户端 SDK，以及 `Channel Broker Phase 2` 架构的落地，预示着项目正在进行底层解耦重构。

---

## 7. 用户反馈摘要

通过对高赞和活跃 Issue 的分析，提炼出当前真实用户的典型画像与痛点：

*   **安全合规是痛点**: 企业和重度用户对将 API Key 暴露在 `openclaw.json` 和 `.env` 中感到极其不安 ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659) 👍 4, [Issue #13616](https://github.com/openclaw/openclaw/issues/13616) 备份机制缺失)，说明项目在金融、运维等高涉密场景的采用受制于安全架构。
*   **消息丢失极其挫败体验**: 多个 Issue (如 [#50093](https://github.com/openclaw/openclaw/issues/50093), [#54531](https://github.com/openclaw/openclaw/issues/54531)) 反映了因为网络闪断、模型上下文切换失败导致 Agent 的回复未能推送到用户端。用户对“Agent 自以为完成了任务，但我什么都没收到”表现出强烈不满。
*   **会话状态在复杂交互下不可靠**: 用户抱怨在使用高级特性（如执行审批黑名单 [#6615](https://github.com/openclaw/openclaw/issues/6615)）时，上下文大小突变会导致模型切换失败 ([Issue #58957](https://github.com/openclaw/openclaw/issues/58957))。

---

## 8. 待处理积压

以下是具有重大影响但仍处于积压或等待状态的关键 Issue 和 PR，建议维护团队优先跟进：

*   **高危安全/状态问题**:
    *   [Issue #45740](https://github.com/openclaw/openclaw/issues/45740): `gh-issues` 技能存在提示词注入风险 (12 评论，已关联 PR 但尚未合并)。
    *   [Issue #10687](https://github.com/openclaw/openclaw/issues/10687): 动态模型发现机制仍为静态 (9 评论，需要重构底层模型目录加载逻辑)。
*   **大型架构重构 PR (易产生冲突，需尽早 Review)**:
    *   [PR #86210](https://github.com/openclaw/openclaw/pull/86210): 内存多插槽架构重构 (XL 体积，涉及核心架构)。
    *   [PR #86157](https://github.com/openclaw/openclaw/pull/86157) & [#86154](https://github.com/openclaw/openclaw/pull/86154): Channel Broker Phase 2 (涉及所有聊天通道的重构)。
*   **长期待审请求**:
    *   [Issue #75](https://github.com/openclaw/openclaw/issues/75): Linux/Windows 客户端需求已存在近 5 个月，积攒了极高的用户呼声 (106 评论, 👍 77)，但目前仍缺少明确的产品决策响应。

---

## 横向生态对比

作为一名专注该领域的资深技术分析师，基于 2026-05-25 的开源项目社区动态，我为您整理了这份《AI 智能体与个人 AI 助手开源生态横向对比分析报告》。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单体对话向多智能体协同与复杂自动化跨越”**的关键拐点。各项目正在经历从早期的“模型能力接入”向底层架构重构的转变，核心特征表现为**多渠道网关的标准化、长期记忆系统的工程化探索以及企业级安全隔离（沙箱与权限）的全面收紧**。尽管底层基础设施（如上下文管理、网关稳定性）仍面临因状态机复杂带来的可靠性挑战，但向全平台（桌面/移动/边缘/IoT）和多模态演进的信号已极其明确。

### 2. 各项目活跃度对比
*注：数据基于过去24小时内的 GitHub 公开动态统计。健康度评估综合考量了 Issue/PR 响应速度、严重 Bug 积压情况及版本发布频率。*

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 项目健康度 / 维护状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃 473) | 500 (待合并 420) | 2 个 (v5.22 正式, v5.24-beta) | **活跃/过热**：迭代极快，但存在严重的 PR 审查瓶颈。 |
| **Hermes Agent**| 50 (活跃 40) | 50 (待合并 37) | 0 | **高活跃/修复中**：集中处理网关崩溃与熔断问题，社区热度高。 |
| **IronClaw** | 28 | 50 (合并 19) | 0 (滞后于 crates.io)| **重构期**：核心架构大变动，巨量 PR 堆栈导致审查压力大。 |
| **ZeroClaw** | 50 (活跃 49) | 50 (待合并 45) | 0 | **活跃/积压严重**：社区贡献积极，但 Maintainer 缺位导致高危 Bug 堆积。 |
| **PicoClaw** | 4 | 10 | 1 个 (v0.2.9-nightly)| **稳健/高质量**：聚焦底层多智能体总线与边缘设备优化。 |
| **CoPaw** | 14 (活跃 11) | 1 | 0 | **平稳/设计期**：重度用户开始对底层调度和记忆架构提出深度 RFC。 |
| **NanoBot** | 4 | 17 (合并 6) | 0 | **健康**：社区闭环极快，代码质量与响应速度表现优异。 |
| **Moltis** | 8 (清零) | 10 (清零) | 0 | **极度健康**：极致的响应速度，零积压，处于功能快速收敛期。 |
| **NanoClaw** | 1 | 3 (关闭 1) | 0 | **低频/平稳**：暴露出核心路由层存在配置盲区，需紧急修复。 |
| **LobsterAI** | 0 | 14 (全关闭) | 0 | **内部迭代**：集中清理历史 PR，处于新版本发布前的静默期。 |
| **NullClaw** | 1 | 1 (重大重构) | 0 | **低频/底层打磨**：移除外部依赖，追求极致的性能与内存安全。 |
| *TinyClaw / ZeptoClaw*| 0 | 0 | 0 | 无活动。 |

### 3. OpenClaw 在生态中的定位
*   **生态位：绝对的核心参照物与风向标。** 其单日近 500 的 Issue/PR 活跃度在同类项目中呈量级领先，是社区规模最大的项目。
*   **核心优势：全渠道覆盖与企业级网关性能。** 近期的版本密集发布了 Gateway 层的缓存与内存优化，表明其已经过大规模生产环境的流量检验。
*   **技术路线差异：** 相比其他项目仍在解决单点 Bug，OpenClaw 已进入**“多通道路由契约化（Channel Broker Phase 2）”**与**“多插槽记忆角色架构”**的高级抽象阶段。
*   **面临的挑战：** “大厂病”初现——420个待合并 PR 和极度渴望的底层功能诉求（如跨平台桌面端）与核心团队的审查/决策速度产生了明显摩擦。

### 4. 共同关注的技术方向 (行业共识)
结合多项目动态，当前 AI Agent 底层基础设施正涌现出四大共性诉求：
1.  **长期记忆的工程化重构** (OpenClaw, Hermes, NullClaw, CoPaw)：普遍认为当前基于简单向量库的 RAG 或暴力填塞 `MEMORY.md` 的方式已遇到瓶颈。社区正积极探索分层记忆、梦境整理机制以及更细粒度的召回控制（如 FTS5 优化）。
2.  **严格的权限与沙箱隔离** (OpenClaw, IronClaw, Moltis, ZeroClaw)：随着 Agent 获得执行代码和管理资产的能力，基于角色的访问控制（RBAC）、API Key 掩码隔离、以及 MCP 工具调用的安全审计成为刚需。
3.  **多智能体编排与并发状态管理** (OpenClaw, PicoClaw, CoPaw, NanoBot)：单 Agent 能力受限，各项目均在探索跨实例消息总线、子代理任务分发和并发 Session 隔离，以解决任务互相抢占或死锁的问题。
4.  **大模型死循环与熔断机制** (Hermes, NanoBot)：针对大模型在 API 限流（402/429）或工具调用失败时的“盲目重试”，各项目均在网关层引入了硬性熔断和兜底策略。

### 5. 差异化定位分析
*   **OpenClaw & ZeroClaw**：定位为**通用全平台 AI 中枢**。强调多通道接入，致力于连接所有主流 IM 和工具链，适合需要全渠道触达的用户。
*   **Hermes & NanoBot**：定位为**高级开发者的极客玩具/个人分身**。高度关注模型兼容性（如无缝切换 DeepSeek/Grok/GLM）、极具侵入性的自我学习机制以及多模型并发调度。
*   **IronClaw**：定位为**金融/加密领域的可信执行环境**。其与其他项目最大的差异在于底层的密码学签名、WalletConnect 集成和资产级别的安全隔离。
*   **PicoClaw & NullClaw**：定位为**轻量级与边缘计算首选**。PicoClaw 探索 Android/Termux 甚至路由器部署；NullClaw 则通过用 Zig 重写网络层来追求极致的低资源消耗。
*   **Moltis & LobsterAI**：更侧重于**企业级私有化部署与 UI 体验**。在沙箱镜像管理、前端管理面板和多用户隔离上发力明显。

### 6. 社区热度与成熟度
*   **狂飙期（OpenClaw, ZeroClaw）**：处于功能横展与社区爆发期。优势是生态繁荣，劣势是技术债堆积，严重的基础设施 Bug（如状态机死锁、会话丢失）对维护者构成巨大压力。
*   **深水区 / 重构期（Hermes, IronClaw, PicoClaw）**：已经走过初期可用阶段，核心贡献者正埋头于底层架构（如 HTTP 网关重构、签名协议重构、多智能体总线）。此阶段社区可能会有短暂阵痛。
*   **高质量收敛期（NanoBot, Moltis）**：项目健康度极高，社区呈现出“提出痛点 -> 快速 PR -> 当天合并”的完美闭环，适合追求稳定性的开发者二次开发。

### 7. 值得关注的趋势信号
1.  **“配置怀疑症”与硬编码陷阱**：ZeroClaw 和 NanoClaw 暴露出的问题极具代表性——系统中存在大量“伪配置”（如设置了超时时间但底层硬编码、设置了路由模式但 Switch 未写全）。**给开发者的启示**：在构建 Agent 框架时，配置对象的解析链路必须端到端可测，切忌给用户“安全可控的错觉”。
2.  **MCP (Model Context Protocol) 治理成为新战场**：MCP 正在成为连接外部工具的事实标准，但 ZeroClaw 等项目暴露了 MCP 子进程内存泄漏、环境变量秘钥泄露等问题。**给开发者的启示**：下一阶段 Agent 框架的竞争力将取决于谁能在 MCP 的安全性、并发调度和生命周期管理上做得更完善。
3.  **端云协同与硬件延伸**：CoPaw 的桌面宠物连接 Daemon 需求、ZeroClaw 的智能家居（8Sleep 床垫）集成、以及 PicoClaw 的 Termux 运行，标志着 AI Agent 正快速从“浏览器对话框”走向物联网与物理世界边缘节点。
4.  **“消费者体验”倒逼架构升级**：多个项目的高优 Bug 均为“消息静默丢失”或“前端渲染阻塞”。在 Agent 时代，用户对响应延迟的容忍度反而降低了，要求开发者在异步任务队列、流式输出(SSE)解析和前端消息兜底展示上投入更多精力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 开源项目 2026-05-25 动态日报：

---

# NanoBot 项目日报 (2026-05-25)

## 1. 今日速览
NanoBot 项目今日维持了极高的社区活跃度与开发迭代速度。在过去 24 小时内，项目共处理了 **4 条 Issues**（2 新开/2 关闭）和 **17 条 Pull Requests**（11 待合并/6 合并或关闭）。尽管今日无新版本发布，但合并的 PR 集中在多智能体协作架构、循环检测安全护栏以及多模型兼容性等核心领域，标志着项目正在向更稳定、更强大的企业级个人助手系统演进。整体来看，项目健康度优秀，社区代码贡献积极，问题闭环迅速。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，项目在多个关键模块取得了实质性进展：
*   **多智能体架构完善**：合并了 `feat(spawn): allow per-subagent sampling temperature` ([PR #3975](https://github.com/HKUDS/nanobot/pull/3975))，正式支持为子代理单独配置采样温度，使得并行处理精确任务与创意任务成为可能。
*   **API 兼容性与稳定性修复**：合并了 `fix(provider): preserve OpenAI-compatible tool call ids` ([PR #3984](https://github.com/HKUDS/nanobot/pull/3984))，修复了兼容 API (如 GLM-4.7, Kimi 2.6) 下工具调用 ID 不一致的致命错误。
*   **WebUI 与 MCP 体验升级**：[PR #3987](https://github.com/HKUDS/nanobot/pull/3987) 优化了斜杠命令交互，[PR #3979](https://github.com/HKUDS/nanobot/pull/3979) 将 MCP 设置提升为一等公民能力，大幅改善了前端体验。
*   **代码质量与配置扩展**：新增了 OpenAI API 类型与 extra body 配置支持 ([PR #3974](https://github.com/HKUDS/nanobot/pull/3974))，同时关闭了早期关于 Windows 管道阻塞的修复 PR ([PR #1678](https://github.com/HKUDS/nanobot/pull/1678))。

## 4. 社区热点
今日最引人注目的动态是大模型在日常使用中的“死循环”问题引发了社区开发者的重点关注：
*   **大模型工具循环调用痛点**：开发者 [codeLong1024](https://github.com/codeLong1024) 提交了 [Issue #3986](https://github.com/HKUDS/nanobot/issues/3986)，指出当前大模型（如重复搜索、无视报错等）缺乏通用干预机制的痛点。该讨论直接催生了硬阻断护栏 [PR #3985](https://github.com/HKUDS/nanobot/pull/3985)，展现了“Issue-PR 闭环”的高效社区协作。
*   **跨实例通信架构探路**：[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) 提出了跨实例消息总线的 Feature，标志着 NanoBot 正在探索从单机智能体向多实例集群协同工作的演进路线，获得了较高关注。

## 5. Bug 与稳定性
今日共处理了 2 个 Bug/稳定性相关问题，整体可控：
*   **🔴 P0 - OpenAI 兼容 API Tool Call 崩溃**：在通过代理使用 GLM-4.7 和 Kimi 2.6 时，`tool_call_id` 不一致导致对话中断（[Issue #3980](https://github.com/HKUDS/nanobot/issues/3980)）。**状态：已由 [PR #3984](https://github.com/HKUDS/nanobot/pull/3984) 修复合并。**
*   **🟡 P2 - 子代理并发数配置失效**：用户配置的 `maxConcurrentSubagents` 未被正确传递给 `SubagentManager`，导致始终降级为默认值 1（[Issue/PR #3978](https://github.com/HKUDS/nanobot/pull/3978)）。**状态：已有修复 PR 待合并。**

## 6. 功能请求与路线图信号
从近期的 PR 与 Issue 动态来看，项目下一个迭代周期的重心已经清晰：
*   **智能化自我改进**：开发者提出了重构 Dream 系统内存两阶段合并的方案（[PR #3990](https://github.com/HKUDS/nanobot/pull/3990)），以及解决 Dream 系统的饥饿问题和实时学习缺乏的诉求（[Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)）。
*   **客户端与插件生态扩展**：引入了 HyperFrames 作为 CLI 插件（[PR #3991](https://github.com/HKUDS/nanobot/pull/3991)），并增加了 Step Plan 模型的 Provider 支持（[PR #3988](https://github.com/HKUDS/nanobot/pull/3988)）。
*   **用户交互细节打磨**：WebUI 中的模型预设切换器（[PR #3977](https://github.com/HKUDS/nanobot/pull/3977)）和查看已启用技能的 `/skill` 命令（[PR #3968](https://github.com/HKUDS/nanobot/pull/3968)）均已进入待合并状态。

## 7. 用户反馈摘要
根据今日的 Issue 描述，提炼出真实用户的核心反馈如下：
*   **生产力痛点**：用户普遍对大模型“盲目重试”感到沮丧，例如 `grep` 找不到文件时不改变策略一直重试，甚至 3 秒内调用 5 次 `list_dir`。这表明在生产环境中，**“执行兜底与强制干预逻辑”** 比单纯的模型推理能力更影响体验。
*   **高级控制需求**：高级用户希望对子代理进行更精细化的控制，例如针对不同性质的子任务（解析 vs 头脑风暴）分配不同的 `temperature`，这显示了 NanoBot 在进阶开发者群体中的渗透加深。

## 8. 待处理积压
*   **Dream 系统机制瓶颈 ([Issue #3973](https://github.com/HKUDS/nanobot/issues/3973))**：指出了 Dream System 严重依赖有限的输入源导致无法进行有效自我学习的问题。该深度增强请求目前尚无关联修复 PR，建议维护团队评估其对项目长期发展的影响并纳入 Roadmap。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-25)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 统计周期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日维持了**高活跃度与高健康度**的开发节奏，过去 24 小时内共产生 50 条 Issue 更新（新开/活跃 40，关闭 10）与 50 条 PR 更新（待合并 37，合并/关闭 13），无新版本发布。项目重心今日明显向**系统稳定性与多平台网关健壮性**倾斜：核心维护者 `teknium1` 集中合并了一批关键的 P1 级 bug 修复，涉及 Telegram 网关防崩溃、HTTP 402 限额熔断、以及内部协议字段泄漏导致的 API 400 重试风暴。社区方面，围绕外部持久记忆、多级子智能体任务分发、Kanban 看板 SQLite 高并发损坏等问题的讨论热度居高不下，展现出用户正向复杂自动化场景和大规模生产部署迈进。

---

## 2. 版本发布

**本日无新版本发布。**
考虑到当前主干已合并多个高优先级（P1）的稳定性修复，预计项目团队正在积攒变更，有望在近期发布一次重要的小版本更新（推荐关注后续 Release 动态）。

---

## 3. 项目进展

今日共有 **13 个 PR 被合并或关闭**，推动了多个核心模块的演进，进一步夯实了系统底座：

*   🚀 **Telegram 网关防崩溃修复**：PR [#31445](https://github.com/NousResearch/hermes-agent/pull/31445) (Closes #31110) 成功修复了因瞬态 `telegram.error.TimedOut` 导致整个 Gateway 进程崩溃的致命问题，现已在异步事件循环层面对异常进行捕获，显著提升了多 Profile 场景下的可用性。
*   🛡️ **HTTP 402 余额耗尽熔断机制**：PR [#31443](https://github.com/NousResearch/hermes-agent/pull/31443) (Closes #31273) 修复了在 Credential 池轮转和 Fallback 均失败后，Agent 依然无限重试导致大量无效扣费的痛点，增加了严格的熔断中止逻辑。
*   🔌 **API 传输层字段清理**：PR [#31456](https://github.com/NousResearch/hermes-agent/pull/31456) (Salvage #26054) 移除了 Hermes 内部使用的脚手架字段（如 `_empty_recovery_synthetic`），彻底解决了兼容严格 OpenAI API 网关时的 400 报错无限重试循环问题。
*   🔐 **供应链安全审计工具**：PR [#31460](https://github.com/NousResearch/hermes-agent/pull/31460) 新增了 `hermes security audit` 命令，支持基于 OSV.dev 的一键依赖漏洞扫描，无侵入式增强了项目安全治理能力。
*   🤖 **xAI Grok 模型兼容性修复**：PR [#23109](https://github.com/NousResearch/hermes-agent/pull/23109) 与 [#23106](https://github.com/NousResearch/hermes-agent/pull/23106) 修复了 xAI `grok-4-1` 等模型不支持 `reasoning.effort` 参数的报错，并完善了针对不同 Grok 版本的参数控制逻辑。
*   🧩 **插件自启行为规范化**：PR [#31688](https://github.com/NousResearch/hermes-agent/pull/31688) 修复了 Matrix E2EE 依赖缺失的问题，并根治了 Discord/Teams 等插件在配置中已被禁用却依然被自动强制启用的行为。
*   🌐 **公开访问 Dashboard 安全加固**：PR [#30440](https://github.com/NousResearch/hermes-agent/pull/30440) 为 Web Dashboard 引入了 Cookie Auth、CSRF 防护和 Host 白名单，为多端暴露场景提供了基础防护。

---

## 4. 社区热点

今日社区讨论聚焦于**长期记忆扩展、系统健壮性和复杂任务调度**：

*   🔥 **外部记忆支持模块 mempalace**：Issue [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) (👍26, 评论 21)。该 issue 长期霸榜，用户强烈呼吁引入结构化的外部记忆模块，以打破上下文窗口限制，实现跨会话的长期记忆。这表明向真正的“个人数字分身”演进是社区最迫切的期待。
*   💬 **Telegram DM 会话劫持与无限压缩循环**：Issue [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) (P1) 与 [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) (P1) 揭露了 Telegram 网关在处理会话压缩切分时的严重状态不一致问题。网关更新了新 session ID 却未同步绑定关系，导致新消息被路由到旧 Topic 甚至无限触发压缩，这是目前重度 IM 集成用户的最大痛点。
*   🤝 **RFC: 原生子智能体任务接力与审批流**：Issue [#31392](https://github.com/NousResearch/hermes-agent/issues/31392) (评论 5)。用户 `leavedrop` 提交了关于“支持自动派生子智能体 + 异步人工审批门控”的 RFC。这标志着社区正在将 Hermes 应用于企业级复杂业务流（Workflow）自动化，要求具备比现有 `delegate` 更精细的调度能力。

---

## 5. Bug 与稳定性

本日暴露的 Bug 集中在**网关集成、本地数据库和配置兼容性**上，按严重程度排列如下：

**P1 级 (Critical - 影响核心链路 / 崩溃)**
*   📛 **Kanban SQLite 数据库高频损坏**：Issue [#31502](https://github.com/NousResearch/hermes-agent/issues/31502) 与 [#31618](https://github.com/NousResearch/hermes-agent/issues/31618)。用户报告在快速连续创建任务或高并发负载下，`~/.hermes/kanban.db` 极易出现 `malformed` 损坏。*当前已有社区提交相关 PR [#31677](https://github.com/NousResearch/hermes-agent/pull/31677) 尝试优化调度逻辑，但底层并发写入锁的问题仍需核心层介入。*
*   📛 **OpenAI Codex / GPT-5.5 静默挂死**：Issue [#21444](https://github.com/NousResearch/hermes-agent/issues/21444) 指出主模型在非流式请求下会静默挂起长达 300 秒直至超时。
*   📛 **配置向后兼容引发数据静默丢失**：Issue [#27715](https://github.com/NousResearch/hermes-agent/issues/27715) 指出 `get_hermes_dir` 解析逻辑存在致命缺陷，空目录会覆盖新路径下的有效配置，导致升级后用户数据被静默“降级”。

**P2 级 (Major - 特定场景功能失效)**
*   ⚠️ **视觉分析工具路由失败**：Issue [#31179](https://github.com/NousResearch/hermes-agent/issues/31179) 指出 `vision_analyze` 忽略了用户配置的视觉模型，强行将图片发送给不具备视觉能力的主模型导致报错。*(已于昨日被 PR #31179 修复并合并)*。
*   ⚠️ **macOS 文件描述符耗尽**：Issue [#30230](https://github.com/NousResearch/hermes-agent/issues/30230) 提醒 macOS 用户，多 Profile + MCP Server 运行时会轻易突破系统的 256 fd 限制。
*   ⚠️ **DingTalk 适配器不支持本地文件**：Issue [#31643](https://github.com/NousResearch/hermes-agent/issues/31643) 表明钉钉网关目前无法发送 Hermes 产生的本地 `MEDIA:` 路径文件。

---

## 6. 功能请求与路线图信号

通过近期的 Feature Request，可以清晰勾勒出项目下一阶段演进的潜力方向：

*   🧠 **记忆子系统解构**：Issue [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) 建议将记忆上下文作为“背景知识”而非“权威用户指令”注入 Prompt，防止 Agent 产生混淆或遭受记忆注入攻击。
*   🔎 **Web 工具多样化支持**：Issue [#31621](https://github.com/NousResearch/hermes-agent/issues/31621) 请求 Web 工具支持 Gemini (Google grounding) 和 OpenRouter，以获得比 Tavily 更好的检索质量。
*   🛠️ **上下文管理精细化**：Issue [#31684](https://github.com/NousResearch/hermes-agent/issues/31684) 呼吁增加 `/compress_context` 命令，允许用户在长文本任务中主动触发上下文压缩。PR [#31692](https://github.com/NousResearch/hermes-agent/pull/31692) 已经实现了 session auto-reset 后的上下文平滑交接，正逐步完善这一版图。
*   📦 **批处理与无状态化**：Issue [#31308](https://github.com/NousResearch/hermes-agent/issues/31308) 希望在 Docker 批处理模式下支持共享实例环境和多 Prompt 链式处理。

---

## 7. 用户反馈摘要

从今日的 Issue 细节中，可以提炼出真实用户的典型使用体验与痛点：

*   **上下文窗口焦虑**：用户对“上下文限制”极其敏感，大量关于 memory、compress、context 的 issue 表明，在长时间编程或研究任务中，Agent “遗忘”之前的指令是最大的痛点。
*   **多平台网关的脆弱性**：重度 IM（Telegram, Discord, Signal）用户经常遭遇掉线、重连失败、甚至拖垮整个 Gateway 的问题。Signal 适配器的配置门槛极高（Issue [#31674](https://github.com/NousResearch/hermes-agent/issues/31674) 涉及 Java 25、ACI UUID 等诸多暗坑）。
*   **计费失控恐慌**：Issue #31273（由 PR #31443 修复）中用户反馈因 402 熔断机制缺失，在余额不足时遭遇到约 $40 的无效扣费消耗，说明在生产环境使用时，**成本控制与熔断机制**的优先级极高。
*   **数据损坏的挫败感**：Kanban 看板作为用户管理 Agent 任务的核心面板，其数据库损坏让用户感到非常沮丧，部分用户表示这直接破坏了他们的工作流。

---

## 8. 待处理积压

以下高价值 / 高热度 issue 仍处于 Open 状态且暂无明确修复排期，建议维护者重点关注：

*   🧠 **[Feature] 外部记忆模块 mempalace** ([#6323](https://github.com/NousResearch/hermes-agent/issues/6323)) - 活跃度最高（👍26），属于系统级能力扩展，决定产品长板。
*   🛑 **[Bug] Kanban SQLite 并发损坏顽疾** ([#31502](https://github.com/NousResearch/hermes-agent/issues/31502), [#31618](https://github.com/NousResearch/hermes-agent/issues/31618)) - 需评估是否要引入更健壮的存储引擎（如 PostgreSQL 抽象层）或加强 WAL 模式的锁机制。
*   🔄 **[Bug] Telegram 会话拆分导致的无限压缩循环** ([#20470](https://github.com/NousResearch/hermes-agent/issues/20470)) - 影响 Telegram 高级用户，逻辑复杂，需要重构 session binding 映射机制。
*   🔐 **[Bug] 新旧目录兼容性导致的数据覆盖** ([#27715](https://github.com/NousResearch/hermes-agent/issues/27715)) - 升级静默失效问题，会严重挫伤老用户升级意愿。
*   🤖 **[RFC] 原子化子任务分发与人工审批流** ([#31392](https://github.com/NousResearch/hermes-agent/issues/31392)) - 企业级客户的强诉求，建议维护者尽快在 issue 下给出架构层面的 ACK 或 NACK。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
PicoClaw 在过去24小时内展现了**高度活跃的开发与社区互动状态**。项目今日顺利发布了 `v0.2.9-nightly.20260524` 自动化构建版本，持续为主分支迭代铺路。基础设施层面迎来了多项重磅优化，尤其是多智能体协作总线的引入和运行时稳定性的大幅提升。从各项数据来看，今日共有 10 个 PR 更新与 4 个 Issue 活跃，代码合并与问题解决交替进行，反映出项目维护者对社区反馈的快速响应以及对核心架构的持续打磨，项目整体健康度极高。

## 2. 版本发布
- **Nightly Build: v0.2.9-nightly.20260524.d499cbec**
  - **说明**: 这是一个自动化发布的夜间构建版本，包含最新合并到 `main` 分支的代码。
  - **注意事项**: 官方提示该版本可能不稳定，建议开发者和测试人员在非生产环境中谨慎使用。
  - **完整变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日有 2 个重要的 Pull Requests 被合并/关闭，显著提升了系统的多渠道接入与安全性能力：

- **PR #2938 fix(cron): add missing action arg for command job execution**: 修复了一个关键的回归问题。此前由于缺少 `"action": "run"` 参数，导致所有 Cron 命令作业静默失败。此 PR 的合并恢复了定时任务系统的正常运转。
- **PR #2759 fix(seahorse): retrieval tools to current session**: 提升了多会话环境下的安全性与隔离性。将检索工具（`short_grep`, `short_expand`）默认作用域限定在当前活跃的工具会话中，防止通过猜测消息 ID 跨会话读取数据。

## 4. 社区热点
当前社区讨论热度最高的焦点集中在 **本地模型接入** 与 **工具执行安全性**：

- **Issue #28 [OPEN]**: *LM Studio Easy Connect* (👍 2, 评论 20)
  - **分析**: 该 Issue 自2月提出以来持续保持高活跃度。大量用户希望在 Android 等设备上轻松接入本地 LM Studio 运行模型，而不是依赖云服务。这表明“本地化/边缘部署”是 PicoClaw 用户的核心诉求之一。
  - **链接**: [sipeed/picoclaw Issue #28](https://github.com/sipeed/picoclaw/issues/28)
- **Issue #1042 [OPEN]**: *exec工具的guardCommand方法问题* (👍 2, 评论 13)
  - **分析**: 当开启工作区限制时，`exec` 工具的正则匹配过于简单粗暴，将 `curl "wttr.in/Beijing?T"` 误判为路径越界。由于涉及系统底层的安全守卫机制，引发了开发者对正则表达式严谨性的深入探讨。
  - **链接**: [sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

## 5. Bug 与稳定性
今日暴露的 Bug 主要集中在 **运行时崩溃防范** 和 **工具执行逻辑**：

- **高危 - 运行时崩溃与阻塞隐患 (已有 Fix PR)**:
  - **PR #2904** 修复了 `pkg/agent` 中的三个严重问题。包括重载配置时可能产生孤立的阻塞协程，以及状态锁争用可能导致的 panic。这极大增强了长时间运行 Agent 的稳定性。
- **中危 - 安全守卫误杀 (待修复)**:
  - **Issue #1042**: 如前文所述，`exec` 工具的 `guardCommand` 拦截了合法的非路径命令，导致部分技能（如天气查询）失效。
- **低危 - 前端消息渲染机制**:
  - **Issue #2839 [CLOSED]**: 在通道中使用占位符编辑时，后续回复未能正确覆盖而是作为新消息发送。该问题已在近期提交中修复。

## 6. 功能请求与路线图信号
从新开的 PR 和 Issue 中，可以清晰地看到 PicoClaw 正在向 **多智能体、多渠道、边缘计算** 的路线演进：

- **多智能体协作架构呼之欲出**: 
  - **PR #2937** 引入了 “Agent Collaboration Bus”，实现了持久化的智能体间通信、独立邮箱和权限感知机制。这是迈向复杂 Multi-Agent 工作流的关键信号。
- **边缘设备与本地化支持增强**:
  - **PR #2902** 提交了 Android Termux 环境下的运行指南。
  - **PR #2936** 提出在技能加载时检查依赖的二进制文件，避免在资源受限设备（如 $10 的路由器）上向 LLM 不可用的技能。
- **多渠道与多账号扩展**:
  - **PR #2883** 支持微信多账号配置。
  - **PR #2934** 修复了 WhatsApp 原生模式的配置检测问题。
- **全球化推进**: 
  - **PR #2935** 引入了繁体中文支持，扩展亚太地区开发者受众。

## 7. 用户反馈摘要
结合 Issues 与 PR 的内容，当前用户对 PicoClaw 的使用反馈呈现出以下特征：
- **痛点 (配置与安全限制)**: 用户在使用本地模型（如 LM Studio）和跨平台部署（Android）时，依然面临较高的配置门槛。同时，内置的安全限制（如 `guardCommand`）过于严格，干扰了正常的非文件系统操作。
- **满意度 (架构灵活性)**: 越来越多的贡献者开始深入底层（如 Message Bus、Session retrieval、Provider reload）提交优化。这表明高级用户对 PicoClaw 的模块化架构高度认可，并倾向于在现有机制上通过配置（如 `AGENT.md` frontmatter）进行精细化控制。

## 8. 待处理积压
随着项目迭代，部分重要 PR 和 Issue 处于挂起或待审查状态，需要维护者关注：

- **PR #2937 [Feat/agent collaboration]**: 引入了重大的架构更新（协作总线），目前处于 Open 状态，需要核心团队进行深度的代码审查与架构评估。
- **Issue #2837 [Feature - Agent tool policies]**: 请求在 `AGENT.md` 中支持 allow/deny/glob 细粒度工具策略，以防止多智能体上下文爆炸，该需求强烈但目前暂无对应的实现 PR 提交。
- **PR #2906 [Fix message bus backpressure]**: 涉及消息总线的背压处理与健康监测，是系统高可用的重要保障，目前等待合并。
- **PR #2904 [Fix agent loop reload]**: 修复核心 Agent 循环的 Panic 和死锁问题，对系统稳定性至关重要，建议优先 review 并合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-05-25)

> 数据源：github.com/qwibitai/nanoclaw | 分析周期：过去 24 小时

## 1. 今日速览

NanoClaw 项目在过去 24 小时内保持**中度活跃**状态，社区重点关注路由层配置与权限管理机制的完善。今日共有 1 个新增 Issue 和 3 个活跃 Pull Request，其中 1 个 PR 被关闭。值得注意的是，项目中暴露出关键配置项 `engage_mode='always'` 在核心路由逻辑中存在未处理的盲区，导致特定场景下消息被静默丢弃。整体来看，外部贡献者正在积极推动 CLI 权限继承、监控端点扩展以及解析器健壮性等核心功能的迭代，项目正在向更安全、更可观测的方向演进。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展

今日项目在基础设施和管理员工具层面取得了局部进展：
*   **[#2604 \[CLOSED\]](https://github.com/nanocoai/nanoclaw/pull/2604) Web: 新增 GET /admin/agent-activity 批量端点**
    *   **进展说明**：该 PR 旨在为 Solelaclawde 管理仪表盘添加“最后活跃时间”列功能，通过引入批量查询接口 `GET /admin/agent-activity`，避免了前端按行获取时间戳造成的网络负载。该 PR 已于今日关闭（注：未合并，可能为方案调整或功能重构后废弃），但它明确了社区对**增强 Agent 可观测性和监控面板功能**的强烈需求。

## 4. 社区热点

由于近期项目处于平稳开发期，今日整体讨论频次较低（0评论），但提交的代码和问题均具有较高针对性：
*   **静默丢弃消息缺陷引发关注**：[Issue #2606](https://github.com/nanocoai/nanoclaw/issues/2606) 提出了 `engage_mode` 配置失效的问题。背后的核心诉求是：开发者在配置 Agent 接入时，期望“无感且必定触发”的交互模式，但当前系统的静默失败机制打破了这一预期，暴露出路由层状态校验与数据库存储存在脱节。
*   **长尾 PR 仍在推进**：由 @SidhayaPravda618 提交的 [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) 自 5 月 8 日提交后，于昨日（5.23）再次更新。该 PR 致力于修复未知斜杠命令的错误解析问题，虽然目前仍处于待合并状态，但显示了社区在优化 SDK 容错能力上的持续投入。

## 5. Bug 与稳定性

今日新增 1 项核心逻辑 Bug，严重影响特定配置下的系统可用性：

*   **🔴 P0 严重：[Issue #2606](https://github.com/nanocoai/nanoclaw/issues/2606) `engage_mode='always'` 静默丢弃所有消息**
    *   **表现**：当开发者将 Agent 配置为 `engage_mode='always'` 时，所有消息被静默丢弃，返回原因为 `no_agent_engaged`。
    *   **根因**：数据库允许保存 `always` 配置，但核心路由文件 `src/router.ts` 中的 `evaluateEngage()` switch 语句缺失对该状态的匹配分支。
    *   **当前状态**：暂无关联的 fix PR，需要维护者紧急介入确认并补充路由逻辑。

## 6. 功能请求与路线图信号

从今日的 PR 动态中，可以提取出 NanoClaw 接下来可能的演进方向：
*   **跨层级的权限继承机制**：[PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) 提出通过 OneCLI 实现继承父级 Agent 权限。这表明项目正在优化**多 Agent 嵌套/编排场景下的权限管理体验**，减少硬编码或重复配置的繁琐度。此功能大概率会在完善测试后纳入下一版本。
*   **更加健壮的命令路由机制**：[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) 针对未知 Slash 命令的降级处理。表明项目在提升 SDK 交互宽容度，避免由于非标准命令导致的系统无响应。这是提升开发者体验（DX）的重要信号。

## 7. 用户反馈摘要

通过分析今日 Issue 和 PR 中的开发者上下文，提炼出以下真实痛点：
1.  **路由状态机缺乏“兜底策略”**：系统在遇到未预期的配置（如 always 模式）或未识别的命令时，倾向于“静默丢弃”而非降级处理或报错，导致开发者在调试时耗费大量时间排查（如 Issue #2606，PR #2346）。
2.  **管理后台数据获取性能堪忧**：从 PR #2604 的背景可知，管理面板之前缺乏批量查询接口，在面对多用户、多 Agent 场景时存在严重的 N+1 查询性能瓶颈。

## 8. 待处理积压

提醒维护者（Maintainers）关注以下积压或紧急事项：
1.  **🔥 紧急响应**：[Issue #2606](https://github.com/nanocoai/nanoclaw/issues/2606) 的路由致命缺陷需尽快在 `src/router.ts` 中补充修复，并在端到端测试中覆盖所有 `engage_mode` 的枚举值。
2.  **⏳ 长期未决的 PR**：[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)（修复未知命令处理）已开启近半月，昨日有活跃更新，建议维护者尽快安排 Code Review。
3.  **🔍 需验证的 PR**：[PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) 涉及权限继承，由于安全级别较高，建议在合并前确认其是否符合 `follows-guidelines` 并补充详尽的权限隔离测试用例。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体呈现出**低频但高质量**的维护状态。项目今日未发布任何新版本，但社区在底层架构重构和内存机制优化上取得了实质性进展。核心贡献者 `ncode` 成功关闭了关于底层 HTTP 客户端重构的重要 PR，标志着项目在摆脱外部依赖方面迈出关键一步。同时，社区围绕自动记忆召回机制的精细化控制展开了新讨论。整体来看，项目处于底层打磨与功能优化的平稳迭代期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目主要的技术推进在于底层 HTTP 通信机制的彻底重构：
*   **[CLOSED] [PR #881](https://github.com/nullclaw/nullclaw/pull/881) refactor(http): remove runtime curl subprocesses**
    *   **进展概述**：经过近一个月的沉淀，该 PR 于今日正式关闭。此次重构移除了运行时通过 `curl` 子进程处理网络请求的旧逻辑，全面替换为 Zig 原生的 `std.http` 包装器。
    *   **影响范围**：涵盖 providers, channels, gateway, tools, memory API 等核心调用链路。相关运行时辅助函数和错误命名也已从 `Curl*` 统一迁移至 `Http*`（Docker 构建等辅助工具仍保留 curl）。
    *   **项目健康度评价**：这是一个重大的正向推进，大幅减少了外部依赖和子进程开销，将显著提升本地 AI 智能体在处理网络请求时的性能和内存安全性，表明项目正在向生产级稳定性迈进。

## 4. 社区热点
尽管过去 24 小时内没有产生大量评论，但以下 Issue 提供了重要的架构演进信号：
*   **[Issue #919](https://github.com/nullclaw/nullclaw/issues/919) Feature: Allow disabling automatic memory recall (FTS5) per-message**
    *   **状态**：[OPEN] (活跃)
    *   **诉求分析**：作者指出，当前系统在每一条传入消息上都会强制触发 FTS5 + BM25 算法进行记忆召回，且参数（如 `DEFAULT_RECALL_LIMIT = 5`, `MAX_CONTEXT_BYTES = 4000`）被硬编码。用户无法关闭此行为。这反映了高级用户或开发者在构建特定场景的 AI 助手时，对 **Token 消耗控制**和**上下文干预能力**有着强烈需求。

## 5. Bug 与稳定性
过去 24 小时内，**未收到新的崩溃、回归或严重 Bug 报告**。结合 PR #881 移除了容易引发环境差异和挂起风险的 Curl 子进程，项目当前的运行时稳定性正在得到进一步巩固。

## 6. 功能请求与路线图信号
*   **“精细化/可控的记忆召回机制”提上日程**：基于 [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) 的讨论，未来可能会引入基于每条消息的开关标志或配置项，以动态控制 FTS5 的触发行为。
*   **路线图判断**：结合已完成合并的 HTTP 原生重构，可以看出 NullClaw 近期的迭代主线是**“性能优化”**与**“底层机制解耦”**。下一阶段极有可能针对智能体的上下文管理和内存挂载机制进行更深度的重构。建议关注是否有针对 `enrichMessageWithRuntime()` 的重构 PR 出现。

## 7. 用户反馈摘要
从 [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) 提炼出的用户核心痛点如下：
*   **痛点**：缺乏灵活的上下文管理。在所有消息上无条件执行复杂的 BM25 召回，不仅增加了不必要的计算开销和延迟，也可能在用户不需要外部记忆干扰的“纯指令”对话场景中引入噪音。
*   **场景还原**：用户希望在某些简短交互或特定 Agent 工作流中，实现“无痕/无记忆”交互，但目前被硬编码逻辑阻挡。

## 8. 待处理积压
*   **需要关注的架构级请求**：[Issue #919](https://github.com/nullclaw/nullclaw/issues/919) 于 2026-05-18 创建，昨日有一次活跃更新，目前尚未被分配或被标记为 TODO。由于该需求涉及核心函数 `enrichMessageWithRuntime()` 的重构，且直接关系到智能体的 Token 成本与响应速度，**强烈建议维护者 @core-team 尽快介入评估**，确认是否将其纳入下一阶段的 Milestone。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-05-25)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 分析周期：过去 24 小时

---

## 1. 🌟 今日速览

IronClaw 项目在过去 24 小时内保持着**极高的活跃度与工程推进速度**，共产生 28 条 Issue 更新和 50 条 PR 更新，其中绝大部分来自核心开发团队。当前项目正处于 **"Reborn" 架构大重构**的关键发力期，涉及底层安全签名、组合机制及 WebUI 的密集重构。值得注意的是，尽管 GitHub 仓库已发布 v0.27.0 版本，但 Rust 包管理器 crates.io 的发布进度滞后，引发了下游依赖的安全更新阻塞问题。整体来看，项目在底层安全（如钱包密钥隔离、第三方 Hook 隔离）方面的设计尤为严谨，但庞大的 PR 堆栈和积压的依赖更新也为代码合并带来了挑战。

---

## 2. 🚀 版本发布

**无新版本发布。**

*注意：尽管无新版发布，但社区正在积极讨论 crates.io 的同步问题。目前 GitHub 已更新至 `ironclaw-v0.27.0`，但 crates.io 仍停留在 `0.24.0`，由于受限于底层的 `wasmtime` 28.x CVEs，导致下游用户无法顺利升级。详见 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)。*

---

## 3. 🛠️ 项目进展

今日有 19 个 PR 被合并或关闭，主要围绕 **依赖升级** 和 **Reborn 架构重构** 推进。项目整体在多生态钱包对接、工具容错处理及事件流架构方面取得了实质性进展：

- **工具调用容错性增强：** 修复了无效工具输入导致运行中断的问题，将其降级为模型可恢复的错误。提升了 Agent 面对异常输入的鲁棒性。
  [PR #4006: Treat invalid tool inputs as recoverable](https://github.com/nearai/ironclaw/pull/4006) `[OPEN -> 准备合并]`
- **多行参数与 Skill 支持：** 允许在 Provider 工具参数中传入多行文本（如 SKILL.md），为复杂的 Agent 技能模版铺平道路。
  [PR #3999: Allow multiline provider tool arguments](https://github.com/nearai/ironclaw/pull/3999) `[CLOSED/MERGED]`
- **底层依赖全面刷新：** 核心异步库（Tokio 生态）与大量第三方依赖完成同步升级（含 dependabot 自动提交的多个 PR 合并），保障了底层运行时的安全与稳定。
  [PR #4001: bump the tokio-ecosystem group](https://github.com/nearai/ironclaw/pull/4001) `[OPEN]`
- **WebChat v2 SSE 机制落地：** 实现了丰富的能力活动投影与生命周期元数据管理，为前端实时事件流（SSE）提供了完整的后端支持。
  [PR #4004: Add rich capability activity SSE](https://github.com/nearai/ironclaw/pull/4004) `[OPEN]`

---

## 4. 🔥 社区热点

今日讨论焦点依然集中在**架构重构**与**资金安全**上，核心贡献者之间的设计博弈非常精彩：

1. **[最热议] crates.io 发布滞后问题**
   [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) | 💬 8 评论
   *分析：* 由于底层依赖 wasmtime 爆出 CVE，下游被迫固定在旧版 IronClaw (0.24.0)。这反映了项目当前的发布流水线在应对突发安全漏洞时的迟滞性，急需自动化发版机制。

2. **高安全级别的异步交易审批架构**
   [Issue #1739](https://github.com/nearai/ironclaw/issues/1739) | 💬 7 评论
   *分析：* 设计通过 WalletConnect 实现异步交易审批，核心诉求是“**将 AI Agent 的意图与人类授权通过安全通道隔离**”，防止 Agent 篡改交易。这是走向金融级应用的必经之路。

3. **Reborn 架构下的子 Agent 生成设计**
   [Issue #3798](https://github.com/nearai/ironclaw/issues/3798) | 💬 2 评论
   *分析：* 探讨在 Reborn 循环中如何动态生成子 Agent（subagent）。这是提升系统并行处理能力和复杂任务拆解能力的关键设计。

---

## 5. 🐛 Bug 与稳定性

今日报告了多个影响面较大的稳定性与安全问题，按严重程度排列如下：

- **🔴 [P0 - 架构缺陷] 凭证签名缺乏不可伪造的用户授权通道**
  [Issue #3564](https://github.com/nearai/ironclaw/issues/3564) 
  *现状：* 当前的 HMAC/EIP-712 签名密钥虽然未越过 WASM 边界，但仍驻留在主机中，存在被恶意窃取的理论风险。目前尚未有直接修复的 Fix PR，但相关的 `attested-signing` PR 堆栈正在重构这一体系。

- **🟠 [P1 - 安全审查] 凭证 URL 路径注入风险**
  [Issue #3917](https://github.com/nearai/ironclaw/issues/3917) 
  *现状：* `RuntimeCredentialTarget::PathPlaceholder` 存在机密信息通过 URL 泄露到日志的安全隐患。讨论倾向于在正式发布前删除或硬化该特性。

- **🟠 [P1 - CI/回归] 每日端到端 (E2E) 测试失败**
  [Issue #3447](https://github.com/nearai/ironclaw/issues/3447) 
  *现状：* 机器人自动报错，Nightly E2E 计划任务运行失败。这通常意味着主分支近期合入的代码存在集成冲突或回归。

---

## 6. 🗺️ 功能请求与路线图信号

从近期的活跃动作来看，IronClaw 正在为**多链独立钱包接入**和**开放 API 规范**做重大准备：

1. **Trezor / Metamas k 钱包接入请求**
   [Issue #3025](https://github.com/nearai/ironclaw/issues/3025)
   *信号：* 用户强烈希望突破封闭的热钱包连接器限制。
   *预判：* 结合今日多达 13 个 `attested-signing` 系列 PR 的连击（如 [PR #3997](https://github.com/nearai/ironclaw/pull/3997) 引入 NEAR/WC providers），**下一版本极大概率将原生支持 WalletConnect 等外部独立钱包**。

2. **开放 API 规范提案**
   [Issue #3953](https://github.com/nearai/ironclaw/issues/3953)
   *信号：* 希望引入标准的 OpenAPI/AsyncAPI 规范。
   *预判：* 标志着 IronClaw 正在从“可用工具”向“标准开放平台”过渡，WebUI 和网关将趋于标准化，可能在未来两个迭代内完成骨架搭建。

---

## 7. 💬 用户反馈摘要

- **痛点：开源生态兼容性不足。** 用户在尝试部署 IronClaw 时，发现只能使用部分未开源的钱包扩展，体验受限，表现出对 MetaMask/Trezor 等主流开源生态接入的强烈渴望。（来源：[Issue #3025](https://github.com/nearai/ironclaw/issues/3025)）
- **痛点：认知成本与命名混淆。** 社区开发者对项目内部广泛使用的 `CLAUDE.md` 感到困惑，认为其命名耦合了特定的 AI 模型，但实际上包含的是普适性的开发指南，建议使用更具语义的命名。（来源：[Issue #3954](https://github.com/nearai/ironclaw/issues/3954)）

---

## 8. 📌 待处理积压

以下重要 PR/Issue 悬而未决或工作量巨大，需维护者重点关注：

1. **巨量依赖更新被拦截：** `dependabot` 提交的全局依赖更新 PR 包含多达 46 个包的升级。由于涉及面广，极易引发编译或运行时错误，长期未合并可能积压安全债务。
   [PR #4003: bump the everything-else group with 46 updates](https://github.com/nearai/ironclaw/pull/4003)
2. **大规模重构 PR 堆栈：** 当前 `zmanian` 提交的 `attested-signing` 底层重构已经到了 PR 12/13。这种“叠罗汉”式的巨型 PR 堆栈对代码审查造成了极大压力，需要更多核心贡献者介入分摊 Review 风险。
   [PR #3997: attested-signing PR13/13](https://github.com/nearai/ironclaw/pull/3997)
3. **代码库巨型文件拆分：** 核心文件 `capability_port.rs` 依然超过架构规定的 3,000 行阈值，急需拆分重构。
   [Issue #3988: Decompose loop support capability port adapter](https://github.com/nearai/ironclaw/issues/3988)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-05-25)

**数据统计周期**：2026-05-24 00:00 - 2026-05-24 23:59 UTC

## 1. 今日速览
- LobsterAI 本日处于**低活跃度状态**，社区无新增 Issues 或 PR 记录，也无新版本发布。
- 后台维护团队集中清理了大量挂起的 `stale` 状态 PR，过去 24 小时内共有 **14 条 PR 被关闭**。
- 尽管无新增外部贡献，本次被关闭的 PR 均为核心开发者此前提交的缺陷修复与体验优化，表明项目正在为下一个稳定版本进行代码清理与质量夯实。
- 整体来看，项目处于**内部迭代与稳定性维护阶段**，基础架构（尤其是 Cowork 引擎与 IM 通道）的健壮性得到了显著提升。

## 2. 版本发布
- **无新版本发布**。今日无新的 Release 或 Tag 生成。

## 3. 项目进展
本日无新代码合并，但集中关闭了 14 个待处理的 PR。这些 PR 涵盖了多项关键修复和体验升级，预计已包含在最新的内部测试分支中。重点推进的领域如下：

- **协同引擎 架构稳固**：集中修复了多个底层逻辑缺陷，包括消息序列号并发竞争 ([#1602](https://github.com/netease-youdao/LobsterAI/pull/1602))、session 停止冷却状态丢失 ([#1601](https://github.com/netease-youdao/LobsterAI/pull/1601))、权限响应错误广播 ([#1599](https://github.com/netease-youdao/LobsterAI/pull/1599))，以及异常吞没问题 ([#1603](https://github.com/netease-youdao/LobsterAI/pull/1603))。
- **核心功能体验升级**：支持了 AI 回复期间连续发送消息的客户端队列功能 ([#1590](https://github.com/netease-youdao/LobsterAI/pull/1590))，大幅优化了多轮对话的交互流畅度。
- **多模型兼容与适配**：修复了 Anthropic 和 Gemini 模型在流式输出时因网络分块导致的 JSON 解析失败及内容丢失问题 ([#1607](https://github.com/netease-youdao/LobsterAI/pull/1607))。
- **安全性增强**：修复了网易蜂巢 明文密钥写入磁盘配置文件的安全隐患，改用环境变量注入 ([#1606](https://github.com/netease-youdao/LobsterAI/pull/1606))。

## 4. 社区热点
- **热度低沉**：本日无活跃的社区讨论，0 条新 Issue，PR 评论数均为 0。
- 分析指出，由于本次关闭的 14 个 PR 均为 2026-04-09 创建，且被打上 `stale` 标签，说明项目可能经历了一段时间的停滞或核心团队正专注于非公开的版本规划，导致历史积压任务被集中清理。

## 5. Bug 与稳定性
虽然本日无新报告的 Bug，但关闭的 PR 修复了多处影响系统稳定性的关键问题（按严重程度排序）：

1. **P0 - 网关崩溃与启动失败**：
   - OpenClaw 网关因无法识别 `skipMissedJobs` 字段导致持续重启失败，全面阻断了用户使用。修复已合并 ([#1593](https://github.com/netease-youdao/LobsterAI/pull/1593))。
   - SQLite 的 legacy memory 迁移失败后无重试机制。修复了事务失败但被错误标记为完成的问题 ([#1595](https://github.com/netease-youdao/LobsterAI/pull/1595))。
2. **P1 - 数据一致性与状态混乱**：
   - 消息序列号并发写入导致重复 ([#1602](https://github.com/netease-youdao/LobsterAI/pull/1602))。
   - 网关重连后被停止的 Session 被 IM 消息意外“复活” ([#1601](https://github.com/netease-youdao/LobsterAI/pull/1601))。
   - 权限响应被错误广播给非目标引擎 ([#1599](https://github.com/netease-youdao/LobsterAI/pull/1599))。
3. **P2 - UI/交互与配置缺陷**：
   - 设置页中按 Enter 键（或输入法确认）误触发表单提交关闭页面 ([#1585](https://github.com/netease-youdao/LobsterAI/pull/1585))。
   - 定时任务配置误报“未配置 IM 通知通道” ([#1588](https://github.com/netease-youdao/LobsterAI/pull/1588))。
   - Anthropic 与 Gemini 长文本流式输出 SSE 截断问题 ([#1607](https://github.com/netease-youdao/LobsterAI/pull/1607))。

## 6. 功能请求与路线图信号
- **异步对话与消息队列机制**：PR [#1590](https://github.com/netease-youdao/LobsterAI/pull/1590) 引入了客户端排队机制，这不仅是一个体验优化，更为未来实现复杂的“多 Agent 并行处理”或“长耗时任务后台执行”奠定了交互基础。
- **多模型 SSE 标准化**：PR [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) 暗示项目正在积极适配 OpenAI 之外的模型提供商（如 Anthropic、Google），多模型支持将是未来的核心路线。

## 7. 用户反馈摘要
- 本日无直接的用户评论反馈。但从近两个月提交的 Bug 修复（如 IM 通道配置、网关重连、UI 表单误触）可以推断：**部分企业级用户在强依赖 IM（如 POPO、飞书）推送及网关长连接稳定性时，曾遇到严重的可用性阻断**。当前这批集中清理的 PR 旨在彻底解决这些痛点。

## 8. 待处理积压
- 当前项目待处理积压呈现“清空”状态，暂无长期未响应的 Issue。
- **给维护者的建议**：今日集中关闭了 14 个 4 月份的 PR，建议团队保持 PR 处理的时效性。如果有大量内部研发工作无法公开，可以通过发布 `Pre-release` 或更新 GitHub Projects 看板，向社区同步开发进度，以保持开源项目的活跃度和社区的信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份报告为您基于 2026-05-24 的 GitHub 数据生成，聚焦于开源 AI 智能体项目 Moltis 的最新动态与健康状况。

# Moltis 项目动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时，Moltis 项目展现出了**极高的开发活跃度与出色的社区响应能力**。项目在今日成功**清零了待处理的 Pull Request 和活跃 Issues**（合并/关闭了 10 个 PR 和 8 个 Issue），且未遗留任何积压。此次更新重点围绕**智能体架构升级（能力边界隔离）**和**全面的安全性/UI 修复**展开。整体来看，项目维护者对社区反馈的吸纳非常迅速，核心功能正在向更细粒度的权限控制和更高的稳定性的方向快速迭代。

## 2. 版本发布
今日无新版本发布。但鉴于今日大量核心 Bug 修复和功能 PR 已合并，预计近期可能会有包含这些更新的 Patch 或 Minor 版本发布。

## 3. 项目进展
今日共合并/关闭 10 个 PR，项目整体在智能体管理、安全性和前端体验上迈出了一大步。以下是核心进展：

*   **架构演进：智能体成为核心能力边界** (PR [#1049](https://github.com/moltis-org/moltis/pull/1049))
    *   这是今日最重要的架构更新。现在每个 Agent Preset 可以独立控制其模型、MCP 服务器、沙箱策略和技能，实现了不同上下文（如儿童与成人模式）的物理隔离。
*   **精细化运行控制** (PR [#1066](https://github.com/moltis-org/moltis/pull/1066))
    *   支持按 Agent 独立配置 `timeout_secs`（超时时间）和 `max_iterations`（最大迭代次数），并兼容全局配置降级。这直接响应了 Issue #553 的功能诉求。
*   **敏感信息安全防护** (PR [#1063](https://github.com/moltis-org/moltis/pull/1063))
    *   修复了 MCP 服务器配置中的环境变量泄露风险，现在环境变量将作为 `Secret<String>` 存储，不再通过 `mcp_list` 暴露给 LLM。
*   **前端与 UI 体验优化**:
    *   修复了长模型名称在选择器中的显示问题 ([#1060](https://github.com/moltis-org/moltis/pull/1060))。
    *   解决了聊天工具栏导致的横向滚动条溢出 Bug ([#1062](https://github.com/moltis-org/moltis/pull/1062))。
    *   引导流程优化，已配置的 LLM 现在会直接显示在推荐列表中 ([#1058](https://github.com/moltis-org/moltis/pull/1058))。
*   **逻辑与日志梳理**:
    *   优化了沙箱镜像构建时的冗长日志输出 ([#1065](https://github.com/moltis-org/moltis/pull/1065))。
    *   修复了自动生成会话标题失败时的静默问题 ([#1064](https://github.com/moltis-org/moltis/pull/1064))。
    *   禁用了在配置关闭时仍显示外部 Agent 的下拉菜单 ([#1059](https://github.com/moltis-org/moltis/pull/1059))。
    *   增强了对 OpenAI 兼容提供商 BaseURL 的校验 ([#1061](https://github.com/moltis-org/moltis/pull/1061))。

## 4. 社区热点
尽管今日关闭了 8 个 Issues，但由于处理速度极快，大部分 Issue 的评论数较少。核心关注点集中在以下几个方面：
*   **智能体权限与配置诉求**：来自社区的长期诉求 [#553](https://github.com/moltis-org/moltis/issues/553)（要求添加按 Agent 设置超时和循环限制）今日被正式解决并关闭，显示了核心开发团队对社区高频需求的高度重视。
*   **MCP 安全性讨论**：开发者 IlyaBizyaev 提出的 Issue [#1054](https://github.com/moltis-org/moltis/issues/1054) 引发了维护者的关注，指出了 MCP 环境变量暴露给 LLM 的安全隐患，该问题已在同日通过 PR #1063 修复。

## 5. Bug 与稳定性
今日报告并修复了多个影响系统稳定性和用户体验的 Bug，均已提交修复 PR 并关闭：

*   **🔴 高危 (安全性)**：`stdio` MCP 配置中的环境变量通过 `mcp_list` 泄露给 LLM。*(已修复：PR #1063)*
*   **🟡 中危 (功能性)**：
    *   会话自动生成标题功能失效，失败时仅返回 `null` 且无报错。*(已修复：PR #1064)*
    *   OpenAI 兼容节点的 BaseURL 未经验证，且构造错误时无日志提示。*(已修复：PR #1061)*
    *   外部 Agent 功能在全局配置禁用 (`enabled = false`) 时，依然在 UI 中显示并可触发错误。*(已修复：PR #1059)*
*   **🟢 低危 (UI/交互)**：
    *   模型选择器无法适配长版本号模型名。*(已修复：PR #1060)*
    *   桌面端聊天工具栏导致页面出现水平滚动条。*(已修复：PR #1062)*

## 6. 功能请求与路线图信号
根据 Issue #553 和 PR #1049、#1066 的合并，我们可以明显看到 Moltis 的**近期路线图信号**：
1.  **Multi-Agent 细粒度管控**：项目正在摆脱单一全局配置，转向“以 Agent 为核心”的多租户/多场景适配架构。
2.  **企业级安全与隔离**：通过修复环境变量泄露和增强沙箱隔离，项目正在为更复杂的商业化或多用户场景铺路。

## 7. 用户反馈摘要
从今日的 Issue 提交者（如 `penso`, `sayotte`, `IlyaBizyaev`, `vvuk`）反馈来看，真实用户的痛点集中在：
*   **集成与对接体验**：用户在接入第三方 OpenAI 兼容模型和配置 MCP 服务器时，对报错信息的缺失感到困扰（如 BaseURL 验证问题），亟需更清晰的日志和校验提示。
*   **前端细节打磨**：在适配不同尺寸屏幕和复杂 UI（如长命名模型、侧边栏并存）时，存在一些 CSS 边缘情况，影响了对话体验的流畅度。

## 8. 待处理积压
**积压情况：极其健康（清零状态）**
今日新增的所有 Issue（#1051 至 #1057）均在 24 小时内得到了代码修复和关闭。目前队列中没有未处理的活跃 PR 或 Issue。建议维护团队可借机推进版本号更新，以便让用户尽快享受到这些安全修复和架构改进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期**: 2026-05-25 | **分析数据源**: github.com/agentscope-ai/CoPaw

---

### 1. 今日速览
过去 24 小时内，CoPaw（QwenPaw）项目保持了**高活跃度与高社区参与度**。项目共处理了 14 条 Issue 动态（11 条新活跃，3 条关闭），并收到 1 个新 PR。今日社区动态呈现出明显的“深度使用”特征：一方面，多位高级用户集中对**记忆系统架构、定时任务调度底层机制**提出了深度的 RFC 和改进建议；另一方面，随着项目接入模型和协议的多样化（如 GLM-5.1、MCP OAuth），前端展示与协议兼容性的边缘 Bug 逐渐显现。目前项目处于功能迭代密集期，亟待核心团队对社区提交的优质架构提案进行收拢。

### 2. 版本发布
* **无新版本发布**。目前最新正式版与开发重点仍围绕 `v1.1.8` 版本的周边生态打磨。

### 3. 项目进展
今日项目整体以 Bug 修复验证和需求收拢为主，推进节奏平稳：
* **已关闭的重要 Issue**：
  * **DeepSeek 思维链解析问题 ([#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051))**：经过 10 轮讨论，确认并解决了早期版本中 DeepSeek v4 flash 模型 think 标签解析异常的问题，提升了主流模型的兼容性。
  * **会话结束自动总结机制 RFC ([#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639))**：关于 Pre-hook Memory Archiving 的提案已关闭，为后续记忆系统的自动化归档功能奠定了讨论基础。
  * **内置技能更新功能 ([#3290](https://github.com/agentscope-ai/QwenPaw/issues/3290))**：确认了技能更新机制的排期与实现方案。
* **活跃 PR**：
  * **可自定义斜杠命令快捷菜单 ([PR #4637](https://github.com/agentscope-ai/QwenPaw/pull/4637))**：目前处于待合并状态。该功能将释放 20 多个内置命令的入口，大幅提升 UI 的可发现性与操作效率。

### 4. 社区热点
今日社区讨论焦点集中在 **分布式架构能力** 和 **本地知识库/记忆系统的进化** 上：
* **架构级痛点：定时任务共享 Session 导致冲突 ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653))**：用户 `feng183043996` 提出定时任务执行期间，若用户发送新消息会导致 Cron 任务被强占中断。这暴露了当前 Agent 调度在并发 Session 管理上的短板，引发了关于任务隔离机制的讨论。
* **记忆系统“只记不用”的反思 ([#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652))**：用户指出当前 `MEMORY.md` 陷入信息堆砌，缺乏总结、关联与主动提醒，建议引入“总结-关联-提醒”机制。这精准击中了当前 AI 助理长期记忆普遍存在的痛点。
* **桌面宠物端云协同需求 ([#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645))**：用户 `LoversRhythm` 提出希望前端桌面 Pet 支持连接远程服务器上的 Daemon 进程。这表明社区对将 QwenPaw 作为“全天候服务端个人助理”的需求日益强烈。

### 5. Bug 与稳定性
今日报告了多个涉及前端和接口兼容性的中低级 Bug，需重点关注：
* **P1 (逻辑/调度异常)**：
  * **Cron 幽灵任务无限执行 ([#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649))**：当 `jobs.json` 更新时，旧任务的内存驻留未被清理，导致已删除的定时任务在后台持续运行，存在资源泄露风险。目前无修复 PR。
* **P2 (前端渲染/协议兼容性)**：
  * **控制台工具调用不实时显示 ([#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644))**：除 `read_file` 外，多数工具的调用状态在 UI 上需刷新才可见（版本 v1.1.8.post1）。
  * **GLM-5.1 思维链无法渲染 ([#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650))**：通过 Ollama 兼容接口调用 GLM-5.1 时流式返回正常，但前端 UI 无法解析其 `reasoning_content`。
  * **MCP Schema 解析破坏布尔类型 ([#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646))**：Schema sanitizer 强行将合法的布尔值转换为对象，导致部分 MCP 工具调用失败。
* **P3 (鉴权配置)**：
  * **MCP OAuth 缺少 client_secret 支持 ([#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643))**：导致无法对接需要机密客户端的 OAuth 2.0 服务端。

### 6. 功能请求与路线图信号
从今日的 Issues 提取的未来演进信号如下，建议纳入近期版本规划：
* **Token 消耗可视化**：用户请求在每条回复底部显示 Token 用量与生成速度 ([#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647))，随着多模型接入，成本监控正成为刚需。
* **规范自动加载机制**：建议 Skill 系统支持类似 Code Review Checklist 的自动关联加载 ([#4651](https://github.com/agentscope-ai/QwenPaw/issues/4651))，以解决大模型“记住规范但应用时遗漏”的问题。

### 7. 用户反馈摘要
* **真实痛点**：用户对 Agent 调度层面的“单线程思维”感到困扰（如定时任务与人工输入冲突）。同时，对 Agent 长期记忆停留在“无脑堆字”不满意，期望具备更高阶的信息压缩与回溯能力。
* **满意与认可**：基于 `PR #4637` 带来的快捷命令自定义功能，社区对 Console UI 的持续优化表示认可；用户 `feng183043996` 等重度用户对 QwenPaw 表现出极高忠诚度，不仅在测试边界功能，还主动输出了完整的 RFC 方案。
* **使用场景拓展**：结合局域网模型运行（Ollama + GLM-5.1）和云端 MCP 对接，说明 QwenPaw 正在被当作企业级或极客级的统一 AI 中枢使用。

### 8. 待处理积压
* **急需维护者 Review 的 PR**：**[PR #4637](https://github.com/agentscape-ai/QwenPaw/pull/4637)** 已处于 Open 状态多日且无评论，该功能可显著提升交互体验，建议优先排期审查。
* **需核心架构回应的 Issue**：**[#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) (Session 共享冲突)**。此问题涉及底层状态机重构，如果确认是架构瓶颈，需尽早给出临时规避方案或 Roadmap 规划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# 🐾 ZeroClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目呈现出**极高开发活跃度与持续积压并存**的特征。Issues 和 PR 的每日更新量均达到 50 条，且绝大部分为新开或待处理状态（49 条活跃 Issue，45 条待合并 PR），表明社区参与热情高涨，但也给 Maintainer 带来了巨大的 Review 压力。今日项目重心集中在**核心运行时排障**（尤其是 MCP 工具集成和 Gateway）、**全新消息渠道扩展**（Mastodon, SMS, Rocket.Chat 等）以及**桌面端安全权限管控**。目前暂无新版本发布，项目整体仍处于密集开发与功能迭代阶段。

## 2. 版本发布
**无新版本发布**。结合大量堆积的待合并 PR 来看，项目可能正在为下一个里程碑版本（如正式修复 Gateway 和 MCP 核心问题后）积蓄代码变更。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，其中以文档规范和社区建设类为主，核心功能仍在审查中：
*   **PR #6903 与 #6899 [CLOSED/MERGED]**：建立并完善了社区 Issue 分流和状态标签的官方文档。这标志着项目在治理层面迈出重要一步，有助于规范化处理日益增多的社区反馈。
*   **PR #6865 [CLOSED]**：修复了 OpenAI 提供商在处理遗留 Codex 工具调用时伪造随机 ID 的问题，提升了 OpenAI 兼容性协议的稳定性。

## 4. 社区热点
今日讨论最激烈、影响面最广的问题集中在**配置形同虚设**以及**Provider 兼容性**上：
*   **[#6699 MCP 工具前缀过滤失效](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** (6 评论)：用户指出 `tool_filter_groups` 对真实的 MCP 工具完全没有效果，导致隔离策略失效。该 Issue 已被接受，目前已有对应修复 PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) 提交。
*   **[#6856 Schema v3 缺失工具调用展示配置](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)** (5 评论)：从 v2 升级到 v3 schema 后，`show_tool_calls` 配置丢失，严重影响了非 CLI 渠道调试和使用体验。
*   **[#5962 Ollama 使用工具时必定崩溃](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** (4 评论)：在需要调用工具的场景下，Ollama Provider 会直接抛错并阻塞当前会话，严重打击了本地开源模型使用者的体验。

## 5. Bug 与稳定性
今日暴露了大量高危（`risk: high` / `priority: p1`）Bug，运行时稳定性面临考验：

*   **🔴 P1 严重级别：**
    *   **MCP 子进程泄漏** ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))：心跳检测开启时，每个 tick 会泄漏一个 stdio MCP 子进程，长期运行将导致宿主机资源耗尽。暂无 Fix PR。
    *   **静默超时与拒绝服务** ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721))：`tool_search` 未加入自动批准列表，导致非交互模式下调用 MCP 工具会静默挂起 120 秒后失败。暂无 Fix PR。
    *   **Gateway 无法连接 Postgres** ([#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472))：由于嵌套运行时引发 Panic，导致使用 Postgres 作为后端存储的 Gateway 直接崩溃。暂无 Fix PR。
    *   **SSRF 防御绕过** ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122))：`web_fetch` 允许解析为私有 IP 的域名绕过安全限制。目前已有修复 PR [#5164](https://github.com/zeroclaw-labs/zeroclaw/pull/5164) 待合并。
    *   **沙箱路径挂载缺失** ([#6902](https://github.com/zeroclaw-labs/zeroclaw/pull/6902))：Fedora/RHEL 等系统下，沙箱未挂载 `/lib64` 导致所有动态链接二进制工具（如 `cargo`）无法执行。已有修复 PR。

*   **🟠 P2/P3 配置与序列化级别：**
    *   **Native OpenAI 硬编码超时** ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723))：`timeout_secs` 配置对原生 OpenAI 接口无效，被硬编码为 120 秒。
    *   **无效配置未报错** ([#5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810))：安全 OTP 配置 `gated_actions` 允许写入任意未知的 action name 而不报错，造成虚假的安全感。

## 6. 功能请求与路线图信号
从近期的 Feature 请求和 PR 可以看出，ZeroClaw 正在向**全平台多渠道个人 AI 助手**以及**深层记忆系统**演进：
*   **多渠道矩阵成型**：贡献者正在集中力量补齐通讯生态，已开出 PR 计划支持 Mastodon ([#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423))、Twilio SMS ([#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427))、Rocket.Chat ([#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)) 和 Zulip ([#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437))。
*   **记忆系统重构**：发起了 `MemoryStrategy` trait 的 RFC ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850))，旨在将高层策略与底层存储解耦。同时大型 PR [#6693] 引入了 "Dream mode"（梦境模式），允许 Agent 定期本地整合记忆。
*   **IoT 智能家居整合**：提交了 8Sleep 智能床垫的控制工具 PR ([#6857](https://github.com/zeroclaw-labs/zeroclaw/pull/6857))，释放出向硬件物联网场景延伸的信号。

## 7. 用户反馈摘要
从 Issue 描述和标签来看，当前核心用户的痛点高度一致：
1.  **配置表现与预期不符**：用户花费时间配置了 `tool_filter_groups`、`timeout_secs`、`rerank_enabled` 等，结果发现底层代码根本未读取或存在硬编码绕过，引发了强烈的挫败感。
2.  **MCP 工具生态仍脆弱**：作为连接外部能力的核心，MCP 的加载、过滤、生命周期管理（泄漏）和权限批准流都有待打磨。
3.  **多模态路由混乱**：用户尝试配置视觉模型时发现被降级路由到了 fallback 模型 ([#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841))。

## 8. 待处理积压
项目目前面临较严重的 Review 瓶颈，大量高风险/高价值的 Issue 和 PR 处于长期挂起状态，需要 Maintainer 重点关注：
*   **高危安全 PR 待审**：修复 DNS 重绑定攻击的 PR [#5164](https://github.com/zeroclaw-labs/zeroclaw/pull/5164) 已开启长达 1 个多月，仍未合并。
*   **历史代码找回**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪了之前回滚丢失的 153 个 commits，此审计工作目前进度停滞，影响到诸多功能的重新合并。
*   **关键架构 PR 缺席 Review**：例如 Nix 打包支持 PR [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) 和 桌面端权限控制 PRs 均处于 `needs-author-action` 或 `needs-maintainer-review` 状态。
*   **未被读取的死代码配置**：Issue [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) 反映的内存排序配置无效问题，应尽快在下一版本中予以修复或移除，以维护配置文件的权威性。

</details>