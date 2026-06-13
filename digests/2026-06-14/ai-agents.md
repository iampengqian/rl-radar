# OpenClaw 生态日报 2026-06-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-13 22:20 UTC

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

**报告日期**：2026-06-14
**数据统计周期**：过去 24 小时
**项目整体健康度**：🟢 高度活跃（存在挑战）

---

## 1. 今日速览
过去 24 小时内，OpenClaw 项目保持了极高的社区活跃度，新增与活跃 Issues 及 PR 数量均达到 500 条（触及统计阈值），其中 158 个 PR 被成功合并/关闭，134 个 Issues 得到解决。项目今日连续发布了 `v2026.6.7-beta.1` 和 `v2026.6.8-beta.1` 两个测试版本，核心推进了 Slack、Telegram、WhatsApp 等多渠道富文本投递的稳定性，并优化了沙箱安全边界。然而，社区目前正面临严峻的稳定性挑战，特别是多智能体编排丢失消息、网关内存泄漏以及特定版本升级导致的 DeepSeek API Cache 失效等 P0/P1 级 Bug 正在引发大量讨论。维护团队 `clawsweeper` 正在密集进行问题分诊和代码重构。

## 2. 版本发布
今日 OpenClaw 连续发布了两个 Beta 版本，重点发力于**跨渠道消息投送能力**：

*   **v2026.6.8-beta.1**
    *   **更新重点**：大幅增强了 Telegram 和 WhatsApp 渠道的消息投递能力。Telegram 现支持结构化富文本（包含表格、列表、可折叠引用块）；保留了 CLI 后端投递的 prompt 边界；淘汰了原生草稿迁移机制，并引入了更安全的富媒体边界。
    *   **影响**：频道消息展现力更强，多媒体隔离机制更安全。
*   **v2026.6.7-beta.1**
    *   **更新重点**：收紧了 Slack、Telegram 的渠道投递机制。修复了 Slack 同频道最终态记录丢失问题；引入了顶层 `image` 消息工具发送附件媒体；增加了 Telegram 可折叠引用块和静默回复支持。
    *   **影响**：改善了异步执行时的进度草稿和分页操作结果的展示逻辑。

## 3. 项目进展
今日共有 158 个 PR 被合并/关闭，项目在**底层稳定性、安全合规、UI/UX** 方面迈出了坚实的一步：

*   **消息丢失与状态修复**：[PR #89039](https://github.com/openclaw/openclaw/pull/89039) 修复了 OpenAI SDK 内部重试 `ECONNRESET` 时导致会话写锁释放，进而引发的 `EmbeddedAttemptSessionTakeoverError` 静默消息丢失问题。
*   **容器与依赖清理**：[PR #92590](https://github.com/openclaw/openclaw/pull/92590) 移除了 Docker 运行时镜像中多余过期的 `openclaw`，防止扩展冲突。
*   **CLI 与安全向导**：[PR #91059](https://github.com/openclaw/openclaw/pull/91059) 在 CLI 配置向导中对网关 Token 输入进行了掩码处理，防止明文泄露；[PR #91181](https://github.com/openclaw/openclaw/pull/91181) 修复了 Windows 计划任务名匹配错误导致误删用户自启机制的问题。
*   **上下文缓存预热**：[PR #92775](https://github.com/openclaw/openclaw/pull/92775) 增加了启动时的上下文窗口缓存预热，确保重启后首次调用 `/status` 能显示正确的 Token 数量。

## 4. 社区热点
今日讨论度最高的问题集中在**多智能体调度、安全性与成本控制**：

*   🥇 **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (19 评论)：**子智能体任务完成结果静默丢失**。在 Telegram 论坛模式下，子智能体超时后既没有重试也没有通知，导致复杂的编排任务彻底失败，引发了高度关注。
*   🥈 **[Issue #54253](https://github.com/openclaw/openclaw/issues/54253)** (14 评论)：**RISC-V64 架构运行报错**。开发者尝试在 RISC-V64 系统上运行 OpenClaw 遭遇 "LLM Request Failed"，揭示了社区对跨架构/边缘设备部署 AI 智能体的强烈诉求。
*   🥉 **[Issue #45740](https://github.com/openclaw/openclaw/issues/45740) & [Issue #39604](https://github.com/openclaw/openclaw/issues/39604)** (各 13 评论)：
    *   前者直指**安全漏洞**：`gh-issues` 技能直接将未经清洗的 GitHub Issue 正文注入到子智能体的 Prompt 中，极易遭受 Prompt 注入攻击。
    *   后者呼吁**网络隔离解禁**：请求增加 `allowPrivateNetwork` 配置项，以便内部 `web_fetch` 能够访问 192.168 等私有网段，满足企业内网部署需求。

## 5. Bug 与稳定性
当前系统的稳定性正受到新一轮复杂使用场景的考验，以下为按严重程度排列的焦点 Bug：

*   🔴 **[P0] 网关内存泄漏导致 OOM 崩溃**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)。网关进程的 RSS 在 2-3 天内从 350MB 暴涨至 15.5GB，最终被操作系统 OOM Killer 反复终结。（暂未发现直接的 Core fix PR，可能仍在排查中）
*   🔴 **[P0] memory_search 彻底失效**：[Issue #91778](https://github.com/openclaw/openclaw/issues/91778)。自 v2026.6.1 起，向量检索索引元数据丢失，导致所有智能体 "致盲"，已确认在 v2026.6.5 上复现。
*   🟠 **[P1] DeepSeek Prompt Cache 失效导致成本失控**：[Issue #91018](https://github.com/openclaw/openclaw/issues/91018)。升级到 2026.6.1 后 DeepSeek 缓存机制失效，用户反映一小时烧掉 6 美元。**（修复状态：维护者已介入排查）**
*   🟠 **[P1] 隔离 Cron 任务破坏共享文件**：[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)。Write 工具缺乏 append 模式，并发或隔离的 Cron 会话直接覆盖而非追加记忆文件，导致数据静默丢失。**（修复状态：已有多个 PR 讨论修复中）**
*   🟠 **[P1] Discord 频道泄露内部工具调用痕迹**：[Issue #44905](https://github.com/openclaw/openclaw/issues/44905)。`NO_REPLY`、内部 JSON 参数等底层调用细节意外暴露给了终端用户。**（修复状态：正在重构消息过滤器）**

## 6. 功能请求与路线图信号
从近期的 Feature Request 和关联 PR 中，可以清晰看出 OpenClaw 下一步的演进方向：

*   **精细化权限与沙箱网络控制 (RBAC)**：
    用户呼吁实施路径级别的读写执行权限（[Issue #39979](https://github.com/openclaw/openclaw/issues/39979)）以及允许配置网段穿透（[Issue #39604](https://github.com/openclaw/openclaw/issues/39604)）。已有相关安全加固 PR（如 [PR #44884](https://github.com/openclaw/openclaw/pull/44884) Gateway 公网硬化）在推进，**有望在下一个大版本中纳入**。
*   **会话记忆与成本治理**：
    用户对 `/new` 重置导致上下文断代极度不满，要求自动进行记忆浓缩（[Issue #40418](https://github.com/openclaw/openclaw/issues/40418)）。同时，要求在网关层面对每个 Agent 施加日/月度成本预算限制（[Issue #42475](https://github.com/openclaw/openclaw/issues/42475)）。
*   **外部重排序器 集成**：
    [PR #92725](https://github.com/openclaw/openclaw/pull/92725) 正在为记忆核心引入外部 Reranker 支持，这将大幅提升混合检索（QMD/向量）的准确度，是一个重要的架构增强。

## 7. 用户反馈摘要
通过分析大量 Issue 评论，提炼出目前用户的三个核心情绪点：

1.  **最满意**：多渠道适配能力（尤其是接入 Telegram、Slack 和飞书）被视为同类最佳，今日发布的富文本投递更新获得了开发者的好评。
2.  **最痛点：多智能体协作简直是“黑盒”**：多位开发者抱怨（如 [Issue #43367](https://github.com/openclaw/openclaw/issues/43367)），并发添加 Agent 会导致配置被互相覆盖，且任务失败时没有明确的错误日志反馈。
3.  **核心担忧：长期记忆的不可靠性**：用户反馈记忆管理系统目前处于“混沌状态”（[Issue #43747](https://github.com/openclaw/openclaw/issues/43747)），存在数据库存储逻辑不一致、以及重置时遗漏持久化的问题，这直接影响了 AI 作为“个人助手”的核心体验。

## 8. 待处理积压
以下重要问题/PR 已经被标记为 `stale` 或长期处于 `OPEN` 状态，急需维护团队关注：

*   ⏳ **[PR #46303](https://github.com/openclaw/openclaw/pull/46303)** (自 03-14 开启)：修复 SIGUSR1 热重载导致入站防抖缓冲队列消息被静默清空的问题。此 PR 涉及底层消息总线重构，风险较高，已滞留 3 个月。
*   ⏳ **[PR #46502](https://github.com/openclaw/openclaw/pull/46502)**：引入内置的隔离式看门狗核心服务和 Cron 引擎，用于在不干扰主会话的情况下自愈不健康的网关。
*   ⚠️ **[Issue #44922](https://github.com/openclaw/openclaw/issues/44922)** & **[Issue #44993](https://github.com/openclaw/openclaw/issues/44993)**：Cron 任务的会话路由混乱、以及心跳报时停滞问题。这些看似不大的 P2 Bug 严重影响了定时调度场景的可用性，目前仍处于无解状态。

---
*本报告由 AI 自动生成，数据提取截至 2026-06-14 00:00 UTC。*

---

## 横向生态对比

以下是基于 2026 年 6 月 14 日各大开源 AI 智能体与个人助手项目动态生成的横向对比分析报告。

---

# 📊 2026.06.14 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从可用向高可用、从单点交互向全渠道自动化”演进的关键拐点**。核心特征表现为：各项目不再满足于基础的 LLM 对话，而是全面转向**长程记忆构建、多模态处理以及 Cron 任务的工程化落地**。同时，随着智能体执行权限的增加，**安全沙箱隔离、细粒度权限控制（RBAC）和部署成本治理**成为全行业共同面临的攻坚难题。底层架构层面，为了支撑复杂的并发与重试机制，向异步事件驱动和标准化接口（如 MCP、OCI）演进成为普遍共识。

## 2. 各项目活跃度对比
*(注：部分项目触及统计阈值，数据反映其最小估算值)*

| 项目名称 | 领域/定位 | Issues 活跃 | PR 活跃 | Release 动态 | 健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 全渠道超级个人助手 | ~500+ | ~500+ | 2个 Beta 版 | 🟡 **高压迭代** (极高活跃，但P0/P1级严重Bug频发) |
| **ZeroClaw** | 模块化/插件化AI基座 | 41 | 50 | 无 (筹备中) | 🟢 **高度活跃** (底层架构重构，社区互动极佳) |
| **IronClaw** | 企业级/Slack深度集成 | 37 | 37 | 无 | 🟢 **高度活跃** (Reborn运行时密集开发，权限突破) |
| **NanoBot** | 终端驱动/多模态研究 | 5 | 20 | 无 | 🟢 **稳健迭代** (WebUI重构与执行环境修复) |
| **NanoClaw** | 高可用/自修复基座 | 1 | 15 | 无 | 🟢 **架构整合** (大规模底层合并，向自动化运维迈进) |
| **CoPaw** | IM生态聚合 (微信/QQ等) | 10 | 10 | 无 | 🟠 **高负荷反馈** (长文本与Tauri桌面端性能瓶颈暴露) |
| **PicoClaw** | 边缘计算/轻量级视觉 | 2 | 7 | 1个 Nightly | 🟢 **稳步推进** (多模态路由优化，代码规范提升) |
| **Hermes Agent**| 跨平台桌面端伴侣 | 50 | 50 | 无 | 🟡 **修补期** (全新富文本特性落地后的快速除错) |
| **NullClaw** | 定时任务/工作流中枢 | 2 | 1 | 无 | 🟡 **单点修复** (解决严重的Cron消息静默丢失问题) |
| **Moltis** | 安全执行/MCP兼容 | 2 | 1 | 无 | 🟢 **健康** (聚焦高价值MCP修复与强隔离诉求) |
| **LobsterAI** | 技能组合/前端交互 | 4 | 5 | 无 | 🔴 **积压停滞** (官方PR与Issue大量超期未审，需干预) |
| *(其他)* | TinyClaw / ZeptoClaw | 0 | 0 | 无 | ⚪ 过去24小时无数据波动 |

## 3. OpenClaw 在生态中的定位
作为当前生态的**核心参照系与流量担当**，OpenClaw 展现出了极强的市场牵引力，但也承受着复杂场景带来的巨大工程反噬：
*   **绝对优势：全渠道富文本投递。** 连发两个 Beta 版死磕 Slack/Telegram/WhatsApp 的体验，其多渠道适配能力被社区公认为“同类最佳”。
*   **路线差异：** 相比 NanoClaw 专注底层容灾、ZeroClaw 专注插件 OCI 化，OpenClaw 当前更侧重于**业务功能前置与多智能体编排**（如引入外部 Reranker 提升混合检索）。
*   **严峻挑战：** 规模化带来的“混沌状态”。其面临的内存泄漏(OOM)、DeepSeek API 缓存失效导致成本失控、以及多智能体配置互相覆盖等 Bug，说明其在快速堆功能时，底层状态机的健壮性正在掉队。

## 4. 共同关注的技术方向
跨项目分析显示，以下四个技术诉求正在成为行业共识：
1.  **长期记忆与上下文浓缩机制：** 
    *   *涉及项目：* OpenClaw, NanoBot, Hermes Agent, CoPaw。
    *   *诉求：* 传统的全量上下文截断会丢失关键指令。开发者强烈要求引入自动化的“记忆浓缩”和去重机制，以保证长程对话的连续性。
2.  **Cron 任务调度的稳定性与隔离：** 
    *   *涉及项目：* OpenClaw, NullClaw, Hermes Agent, CoPaw。
    *   *诉求：* 后台定时任务是智能体走向自动化的关键，但当前普遍面临内存生命周期管理（如 UAF 漏洞）、并发覆盖文件、以及跨线程状态污染的问题。
3.  **细粒度安全控制与高隔离沙箱：** 
    *   *涉及项目：* OpenClaw, Moltis, ZeroClaw, CoPaw。
    *   *诉求：* 从“网络防穿透”到“K8s 级别的 VM 隔离 (gVisor/Kata)”，再到“工具级开关控制”，企业级部署对 Agent 执行不可信代码的安全诉求极速攀升。
4.  **WebUI/TUI 渲染与流式刷新性能：**
    *   *涉及项目：* OpenClaw, NanoBot, ZeroClaw, CoPaw, Hermes Agent。
    *   *诉求：* 长文本流式输出导致前端“挤牙膏”式卡顿，以及 IM 软件富文本卡片兼容性差，是目前用户反馈最密集的体验痛点。

## 5. 差异化定位分析
*   **OpenClaw & CoPaw：主攻“全平台触达与重度 IM 集成”。** 致力于成为无所不在的分身，深入飞书、微信、Telegram、Zalo 等各个社交与办公节点。
*   **NanoClaw & IronClaw：主攻“企业级高可用与自治”。** 重点发力异步并发架构重构、凭证长效授权、容灾备份，追求无人值守下的极致鲁棒性。
*   **ZeroClaw & Moltis：主攻“架构底座与云原生安全”。** 热衷于推动标准化（WASM/OCI 分发、K8s 原生沙箱），吸引高阶开发者构建自定义插件生态。
*   **PicoClaw & NanoBot：主攻“轻量边缘与多模态路由”。** 关注端侧性能开销、本地化模型（Ollama）路由以及视觉管线的压缩优化。

## 6. 社区热度与成熟度
*   **狂飙突进期（高活但脆弱）：** **OpenClaw**、**CoPaw**、**ZeroClaw**。社区讨论火热，但 Issue 积压多，底层 Bug 频发，正经历架构能力与业务扩展的阵痛。
*   **深度重构期（提质增效）：** **NanoClaw**、**IronClaw**。Issue 区相对平淡，但核心团队进行了大量破坏性底层合并（如 SDK 跃升、废弃旧异步机制），正在为下一个大版本蓄力。
*   **维稳停滞预警：** **LobsterAI**。暴露出严重的团队响应问题，官方成员提交的 PR 都未能合并，大量核心功能受限，生态健康度堪忧。

## 7. 值得关注的趋势信号
1.  **“静默失败” 是当前摧毁用户信任的头号杀手。** 无论是 OpenClaw 的子智能体任务丢失，还是 NullClaw 的 Cron 消息未送达，业界发现 LLM 假装的“任务完成”比报错更可怕。**可观测性与硬重试机制**将成为下一步标配。
2.  **外部模型 API 的快速演进正在倒逼架构解耦。** 如同 NanoBot 因 Anthropic 废弃 `temperature` 参数导致全线崩溃，OpenClaw 因 DeepSeek 缓存更新导致成本失控。**项目方必须摒弃硬编码参数，建立更具弹性的 Provider 适配层。**
3.  **智能体开始要求“环境自我感知”。** （如 IronClaw 的运行时上下文注入）。Agent 不再是脱离平台的文本生成器，它需要明确知道自己当前正挂在 Slack 还是 Telegram，从而调整回复的富文本格式和语气。
4.  **“技能”生态将加速向标准化容器演进。** 随着用户自定义技能增多，传统的 JSON 配置极易导致系统级 Prompt 污染。以 ZeroClaw 呼吁的 OCI/WASM 镜像分发为代表，智能体插件市场将迎来类似 Docker 时代的标准化革命。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-06-14 动态日报：

# 🤖 NanoBot 项目动态日报 (2026-06-14)

### 1. 今日速览
NanoBot 今日展现出极高的社区活跃度与开发推进速度。项目在 past 24 小时内迎来了 **20 次 PR 更新与 5 次 Issue 更新**，其中大量贡献来自核心开发者（如 `chengyongru`, `tobrien` 等）。项目重心目前明显聚焦于 **WebUI 体验优化、底层执行工具（Codex/Exec）稳定性修复，以及环境变量解析系统的重构**。尽管有少量新报告的崩溃和回归 Bug，但社区均第一时间提供了修复 PR，整体生态处于健康且快速的迭代期。

### 2. 版本发布
**无新版本发布。** 结合今日大量合并的 WebUI、执行环境和配置优化 PR，推测项目正在为下一个大版本（或里程碑）进行功能积攒与代码冻结前的集中修复。

### 3. 项目进展
今日共有 **5 个 PR 被合并/关闭**，项目在以下方面取得了实质性向前迈进：
*   **核心架构解耦：** PR [#4314](https://github.com/HKUDS/nanobot/pull/4314) 打破了工具配置 Schema 的导入循环，通过提取 Pydantic Base 模块，提升了代码的可维护性。
*   **WebUI 与 config 对齐：** PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) 缩小了 WebUI 设置面板与 `config.json` 之间的差距，新增了 temperature、工具限制等端点的写入能力。
*   **WebUI 性能优化：** PR [#4327](https://github.com/HKUDS/nanobot/pull/4327) 将缓慢的 HTTP 处理程序移出 gateway 事件循环，解决了 WebUI 启动时的阻塞问题。
*   **长期 Bug 修复：** PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 修复了 Exec 工作空间符号链接越界和 PATH 查找优先级的问题；PR [#4326](https://github.com/HKUDS/nanobot/pull/4326) 修复了 `idleCompact` 仅总结被丢弃前缀的 Bug，确保了上下文记忆的完整性。

### 4. 社区热点
今日讨论最活跃的区域集中在旧机制的遗留影响和新模型的支持上：
*   **Issue [#193](https://github.com/HKUDS/nanobot/issues/193) (Ollama api support?)：** 虽然创建于几个月前，但更新极其频繁（15 条评论），反映了用户对 NanoBot 兼容本地化轻量级模型（如通过 Ollama）的强烈诉求。
*   **Issue [#4264](https://github.com/HKUDS/nanobot/issues/4264) (idleCompact 记忆截断 Bug)：** 获得了开发者的深度剖析。用户指出在进行“纠错-完成”对话流时，历史记录被错误截断，这体现了高级用户对 Agent 上下文压缩机制的高度关注。目前该问题已被修复。

### 5. Bug 与稳定性
今日新报告了若干影响稳定性的 Bug，按严重程度排列如下：
*   **P0 级 - 请求全线被拒：** [Issue #4333](https://github.com/HKUDS/nanobot/issues/4333) 报告 Anthropic 提供程序向 `opus-4-8` 发送了已废弃的 `temperature` 参数，导致每次请求都报 400 错误。**状态：已有修复 PR** ([#4334](https://github.com/HKUDS/nanobot/pull/4334))。
*   **P1 级 - 合并主分支后崩溃：** [Issue #4322](https://github.com/HKUDS/nanobot/issues/4322) 报告在进行代码合并后，启动 Agent 时抛出 `NameError: 'session_key' is not defined` 导致启动失败。
*   **P1 级 - 静默失败：** PR [#4323](https://github.com/HKUDS/nanobot/pull/4323) 提到由于未及时解析环境变量（如 `${GROQ_API_KEY}`），导致语音转写功能在找不到 API Key 时静默失败。
*   **P2 级 - MCP 连接重连崩溃：** PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) 修复了 `streamableHttp` 会话终止重连时，因 Asyncio 任务上下文不同导致的 GC 崩溃问题。

### 6. 功能请求与路线图信号
从今日的 PR 提交可以看出 NanoBot 接下来的演进路线图信号：
*   **多模态与语音交互：** PR [#4316](https://github.com/HKUDS/nanobot/pull/4316) 引入了支持 OpenAI、Groq 等多提供商的 **TTS（文本转语音）配置系统**；加上对音频转写（Transcription）环境的修复，暗示项目正朝向**语音陪伴型 AI** 发展。
*   **终端体验重构：** PR [#4329](https://github.com/HKUDS/nanobot/pull/4329) 为命令行用户开发了一个全新的非全屏交互式 TUI（支持 Markdown 渲染、多模态输入与斜杠命令）。
*   **可观测性与安全：** PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) 增加了 `AuditTool` 用于监控 Agent 动作；同时社区也在推进文件系统工具开关（PR [#4138](https://github.com/HKUDS/nanobot/pull/4138)）。
*   **子 Agent 编排：** PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 允许子 Agent 使用可配置的独立模型预设，这表明项目在探索**多 Agent 混合模型协作**。

### 7. 用户反馈摘要
*   **痛点 1 - 模型更新带来的兼容性断层：** 用户反映极快，`opus-4-8` 刚出或处于前沿阶段，旧版本硬编码的参数限制立刻导致了全线不可用（#4333）。
*   **痛点 2 - 环境变量管理割裂：** 多个 Issue/PR 指出，使用 `${VAR}` 模板在 WebUI 设置面板与底层 API 交互时存在脱节，用户经常遇到“明明设置了环境变量，系统却找不到”的困惑感。
*   **痛点 3 - 部署灵活性受限：** 用户希望将 WebUI 部署在反向代理的子路径下，但内置的前端绝对路径导致资源加载失败（见 PR [#4328](https://github.com/HKUDS/nanobot/pull/4328)），反映出用户将 NanoBot 嵌入大型企业内网平台的实际需求。

### 8. 待处理积压
*   **PR #4138 (Add tools.file.enable)：** 创建于 2026-06-01，旨在允许用户纯依靠 MCP 服务器接管文件系统，这是一个非常合理的安全性增强需求，但已被搁置近两周，**需要维护者进行 Code Review 并推进合并**。
*   **PR #4291 (子 Agent 模型预设)：** 涉及底层执行逻辑的改动，需维护者确认是否符合项目的长期架构设计。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**报告日期**: 2026-06-14
**项目**: NousResearch/hermes-agent

---

### 1. 今日速览
项目在过去 24 小时内保持了**极高的活跃度**，共处理了 50 条 Issue 更新与 50 条 PR 更新。社区聚焦于最新集成的 **Telegram Bot API 10.1 Rich Messages** 功能，涌现了大量关于渲染兼容性和样式的反馈。底层架构方面，开发者对上下文压缩、Cron 定时任务内存机制（`skip_memory=True`）提出了多项架构级优化与修复。整体来看，项目正处于新特性落地后的快速修补与稳定性打磨阶段，维护者对社区反馈的响应非常迅速。

### 2. 版本发布
*无新版本发布（0 Releases）。当前最新桌面端版本仍为 v0.16.0。*

### 3. 项目进展
今日共合并/关闭了 13 个 PR 与 9 个 Issues，重点推进了系统稳定性与文件管理体验：
*   **技能备份防崩溃优化**：合并了 [PR #45837](https://github.com/NousResearch/hermes-agent/pull/45837)，使得捆绑技能更新在遇到残留或孤立的 `.bak` 状态时能够安全恢复，不再导致技能丢失或卡死。
*   **跨设备文件写入修复**：合并了 [PR #43852](https://github.com/NousResearch/hermes-agent/pull/43852)，修复了 `atomic_replace()` 在遇到跨设备链接（EXDEV）或挂载忙碌（EBUSY）时导致崩溃的问题。
*   **结构化文档读取支持**：合并了 [PR #37082](https://github.com/NousResearch/hermes-agent/pull/37082)，`read_file` 工具现在能自动将 `.ipynb`、`.docx`、`.xlsx` 提取为纯文本，大幅提升 Agent 对复杂文档的解析能力。
*   **OpenRouter Fusion 接入**：关闭并合并了 [PR #45833](https://github.com/NousResearch/hermes-agent/pull/45833)，添加了 OpenRouter Fusion 作为托管服务端工具的支持。

### 4. 社区热点
今日讨论最热烈的议题集中在记忆系统与 UI 平台适配：
*   **自动化记忆整合**：[Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771)（👍 5，评论 7）。社区强烈呼唤类似 "Auto Dream" 的机制，希望能定期清理、去重并优化 Agent 的记忆文件，以解决长期对话后上下文变 "stale"（陈旧）的问题。
*   **Telegram 富文本体验**：随着 Telegram Bot API 10.1 的更新，多位开发者（如 barronlroth, wmbaum）提交了反馈。
    *   [Issue #45771](https://github.com/NousResearch/hermes-agent/issues/45771) 指出富文本正文渲染过大，影响普通文字阅读体验。
    *   [Issue #45785](https://github.com/NousResearch/hermes-agent/issues/45785) 报告 Telegram Web 端无法渲染 Hermes 发送的 `sendRichMessage`，提示不受支持。
    *   [Issue #45770](https://github.com/NousResearch/hermes-agent/issues/45770) 反映私信场景下富文本草稿流式传输存在阻断问题。
*   **桌面端字体自定义**：[Issue #37566](https://github.com/NousResearch/hermes-agent/issues/37566)（👍 4）与 [Issue #45736](https://github.com/NousResearch/hermes-agent/issues/45736) 均呼吁在桌面 GUI 中增加字体选择器或调整字号的功能，以适应高 DPI 或小屏幕设备。

### 5. Bug 与稳定性
今日报告了多个严重（P1/P2）级别的 Bug，部分已有对应修复 PR：
*   **[P1 / 崩溃] 桌面端多 Agent 配置重置**：[Issue #45758](https://github.com/NousResearch/hermes-agent/issues/45758)。当 Windows 桌面端崩溃或重启时，非默认 Profile 的 `config.yaml` 会被重置，且 `.env` 会被删除。（*暂无修复 PR*）
*   **[P2 / 安全] WhatsApp 桥接组件 CVE 漏洞**：[Issue #43814](https://github.com/NousResearch/hermes-agent/issues/43814)。Baileys 依赖存在高危漏洞 CVE-2026-48063，恶意负载可伪造历史记录并破坏状态同步。
*   **[P2 / 稳定性] 上下文压缩副作用**：[Issue #33907](https://github.com/NousResearch/hermes-agent/issues/33907) 和 [Issue #23975](https://github.com/NousResearch/hermes-agent/issues/23975)。长对话触发的上下文压缩可能会被网关消息打断，或生成不在 `state.db` 中的“孤儿会话”。
*   **[P3 / 兼容性] macOS 文件工具测试失败**：[Issue #45826](https://github.com/NousResearch/hermes-agent/issues/45826)。`test_file_tools.py` 在 macOS 上因 `/private` 路径解析问题出现 6 项失败。

### 6. 功能请求与路线图信号
基于今日的 Issue 与 PR 走向，以下几个方向可能被纳入近期的迭代路线图：
*   **CLI 自动化输出**：[PR #12278](https://github.com/NousResearch/hermes-agent/pull/12278) 提议增加 `--format stream-json`，这对于将 Hermes 接入 CI/CD 流水线或外部脚本工具至关重要。
*   **底层 Provider 兼容扩展**：[PR #36286](https://github.com/NousResearch/hermes-agent/pull/36286) 提供了中国区 MiniMax 的 OAuth 支持，[PR #45842](https://github.com/NousResearch/hermes-agent/pull/45842) 修复了带版本号的 Anthropic 代理端点兼容问题。显示项目正致力于扩大全球化与本地化模型的接入能力。
*   **运行时推理控制**：[Issue #7273](https://github.com/NousResearch/hermes-agent/issues/7273) 请求为 Agent 提供动态调整自身 `reasoning_effort` 的工具，而非依赖用户手动通过斜杠命令调整。

### 7. 用户反馈摘要
从评论和 Issue 描述中，可以看出用户的几个核心痛点：
*   **环境配置脆弱**：用户 heidis168 反馈在 Linux 启动桌面端直接遇到 GPU 报错退出（[Issue #45102](https://github.com/NousResearch/hermes-agent/issues/45102)）；此外，环境变量加载逻辑（[Issue #18705](https://github.com/NousResearch/hermes-agent/issues/18705)）使用 `override=True`，导致 Docker/K8s 的系统级密钥被本地 `.env` 覆盖，增加了运维负担。
*   **启动性能瓶颈**：用户 Asanilo 反馈，每次启动 TUI 或 Dashboard 都会触发完整的 npm install 或前端重新构建，导致冷启动延迟高达 30-120 秒（[Issue #45657](https://github.com/NousResearch/hermes-agent/issues/45657)）；此外 Profile 扫描会读取目录下的所有二进制文件导致卡顿 15 秒（[Issue #45752](https://github.com/NousResearch/hermes-agent/issues/45752)）。
*   **配置覆盖痛点**：类似于 [Issue #45805](https://github.com/NousResearch/hermes-agent/issues/45805) 指出的“桌面端思考等级被强制硬编码为 Medium 且无法持久化”，反映出桌面端在用户偏好持久化存储方面存在设计缺陷。

### 8. 待处理积压
请维护者关注以下长期悬而未决或影响底层架构的问题：
*   **Cron 任务记忆隔离**：[Issue #9763](https://github.com/NousResearch/hermes-agent/issues/9763) 和 [Issue #43367](https://github.com/NousResearch/hermes-agent/issues/43367) 均指出 Cron 调度器硬编码了 `skip_memory=True`。这导致定时任务完全无法使用记忆工具（如 `add`/`remove`/`replace`），阻碍了自动化工作流结合长期记忆的发展。这是一个需要重构的架构级限制。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-06-14  
**项目仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了**高度活跃**的开发与维护节奏，共处理了 7 个 PR（其中 5 个已顺利合并/关闭）和 2 个 Issue。
开发团队目前的重心明显聚焦于**多模态（视觉）处理优化、Agent 核心路由逻辑以及代码底层健壮性（容错与清理机制）**的升级。
随着最新 nightly 版本的发布，以及 Agent 远程 WebSocket 等高级特性的陆续提交，项目在功能完整度和企业级可用性上正在稳步迈进。

---

### 2. 版本发布
- **[nightly] Nightly Build (v0.2.9-nightly.20260613.c362114c)** [🔗链接](https://github.com/sipeed/picoclaw/releases/tag/nightly)
  - **性质**: 自动化每日构建版本。
  - **注意事项**: 官方提示此版本可能不稳定，建议谨慎用于生产环境。
  - **对比**: 基于主干 `main` 分支相较于 `v0.2.9` 的最新代码变更。

---

### 3. 项目进展
今日项目通过合并多项 PR，在多模态交互、TTS 容错以及代码规范方面取得了实质性进展：

- **Agent 路由修复**：合并了 [PR #3117](https://github.com/sipeed/picoclaw/pull/3117)，修复了媒体轮次路由错误的问题。系统现在会将包含媒体的对话及 `load_image` 的后续操作正确路由到配置的图像模型，而不是在纯文本模型上盲目重试。
- **TTS 语音引擎增强**：合并了 [PR #3119](https://github.com/sipeed/picoclaw/pull/3119)，引入了对 OpenRouter TTS 请求参数（`voice` 和 `response_format`）的自定义覆盖支持，并增加了当请求失败时自动省略 `response_format` 进行单次重试的降级机制。
- **底层代码健壮性提升**：合并了 [PR #3065](https://github.com/sipeed/picoclaw/pull/3065) 和 [PR #3066](https://github.com/sipeed/picoclaw/pull/3066)，清除了底层数据库操作（`db.Close()`）和临时文件写入失败时静默忽略错误的代码，统一采用标准化的错误处理，通过了严格的 Linter 检查。

---

### 4. 社区热点
今日社区的关注点主要围绕**Agent 的媒体处理能力**和**资源消耗**展开：

- **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [BUG]**：开启 Evolution 模式后每分钟持续消耗 Token。此 Issue 讨论最为活跃（已有 3 条评论），反映出重度用户在使用高级自动化任务时，对后台静默资源消耗和成本失控存在明显担忧。
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)**：开发者 jp39 提交了为 Agent 添加远程 Pico WebSocket 模式的重磅功能，允许本地 Agent 连接到远程服务器执行任务。这标志着 PicoClaw 正在被社区推向更分布式的企业级部署场景。

---

### 5. Bug 与稳定性
今日处理的 Bug 集中在视觉模型兼容性与系统底层资源管理：

1. **【严重 - 视觉模型幻觉】多模态图像描述错误** [Issue #3108](https://github.com/sipeed/picoclaw/issues/3108) [CLOSED]
   - **表现**: 当用户要求描述图像，但当前激活的模型（如通过 OpenRouter 调用的 `deepseek-v4-flash`）不支持视觉时，系统仍尝试加载图片，导致模型输出与图片完全无关的“幻觉”内容。
   - **修复**: 已通过 [PR #3117](https://github.com/sipeed/picoclaw/pull/3117) 完美修复，系统现在能正确识别并转交给图像模型处理。
2. **【中等 - 成本泄漏】Evolution 模式 Token 持续消耗** [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [OPEN]
   - **表现**: 在设定为 Draft 模式和特定触发器下，系统每隔一分钟就会消耗 Token。
   - **修复状态**: 目前处于开放状态，尚无直接修复的 PR，亟待官方介入排查轮询逻辑。

---

### 6. 功能请求与路线图信号
从近期 OPEN 状态的 PR 中，可以窥见 PicoClaw 接下来版本的核心演进方向：

- **视觉管线性能优化**：[PR #2964](https://github.com/sipeed/picoclaw/pull/2964) 正在引入可配置的入站图像压缩功能。未来用户将能通过多级压缩策略控制构建模型负载前的媒体体积，这将极大降低网络带宽消耗和 API 成本。
- **Agent 远程控制**：[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) 提供了类似 `picoclaw agent --remote ws://...` 的能力，解耦了 Agent 的运行环境与控制端。预计这两个特性将被纳入下一个重要的功能迭代中。

---

### 7. 用户反馈摘要
综合今日的 Issues 和 PR 讨论，提炼出用户的真实反馈如下：
- **痛点**：使用 OpenRouter 等聚合平台接入不同模型时，由于各家模型对多模态和 TTS 参数的支持参差不齐，极易引发报错或“答非所问”（如 #3108 和 #3119 修复的问题）。
- **诉求**：高级用户极度渴望对 AI 运行成本有更精细的控制权（如图像压缩 PR #2964，以及对 Evolution 模式空转消耗的抱怨 Issue #3012）。
- **满意度**：开发团队对底层代码规范（如强制处理 `Close()` 报错）和架构解耦（Agent 远程模式）的追求，受到了专业贡献者的认可，项目整体代码质量呈上升趋势。

---

### 8. 待处理积压
- **[PR #2935](https://github.com/sipeed/picoclaw/pull/2935) [CLOSED/stale]**：关于添加繁体中文（zh-TW，台湾国语）文档和前端 i18n 支持的 PR。由于长时间未更新已被机器标记为 stale 并关闭。建议维护者核实是否需要原作者重新激活，以丰富项目的国际化生态。
- **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)**：Evolution 模式持续消耗 Token 的问题。该问题涉及用户的直接经济成本，且从 06-05 创建至今已有数日，建议开发组优先排查其心跳/轮询机制，避免引发更多成本相关的负面反馈。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期**: 2026-06-14
**项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

### 1. 今日速览
过去 24 小时内，NanoClaw 项目展现出极高的工程活跃度，核心开发团队进行了大规模的代码合并与清理工作。今日共处理了 15 个 PR（其中 14 个顺利合并/关闭）和 1 个误报 Issue，标志着一个功能开发周期的收尾或重要节点的整合。合并的代码深度聚焦于底层架构增强（如持久化记忆、SDK升级）、多渠道适配器完善（如 Signal 集成增强）以及 Agent 运行时的稳定性修复。当前暂无新版本 Release 发布，但大量核心代码的入库预示着项目正在为下一次重大版本更新做准备。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。
*注：尽管无正式 Release，但今日大量核心 PR（如 SDK 升级、容灾备份、Agent 记忆模块）的合并属于破坏性/结构性变更，开发者在部署最新主分支时需仔细审查本地依赖配置。*

### 3. 项目进展
今日项目迎来了里程碑式的进展，共有 14 个 PR 被合并/关闭，大幅提升了 AI 智能体的可用性与健壮性：

*   **核心架构与底层能力构建**：
    *   **记忆与状态**: [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745) 引入了提供商级别的持久化记忆支架，赋予 Agent 长期记忆能力。
    *   **底层 SDK 升级**: [PR #2747](https://github.com/nanocoai/nanoclaw/pull/2747) 将 `@onecli-sh/sdk` 从 0.5.0 跨越式升级至 2.2.1，并引入了机器可校验的锚点。
    *   **容灾备份**: [PR #2084](https://github.com/nanocoai/nanoclaw/pull/2084) 引入了每日项目快照、可插拔存储后端（Local/S3）以及全量/单 Agent 粒度的恢复 CLI，彻底解决了“误删/坏迁移”无法回滚的痛点。
*   **通信渠道大幅增强**：
    *   **Signal 深度集成**: 今日集中合并了 Signal 适配器的多项能力，包括双向表情回应支持（[PR #2203](https://github.com/nanocoai/nanoclaw/pull/2203)）、出站附件支持（[PR #2040](https://github.com/nanocoai/nanoclaw/pull/2040)）以及非音频附件的全路由落地（[PR #2071](https://github.com/nanocoai/nanoclaw/pull/2071)）。
    *   **多模态交互**: [PR #2072](https://github.com/nanocoai/nanoclaw/pull/2072) 使得 Ollama 能够通过 workspace 路径直接处理图像，打通了本地多模态模型的视觉链路。
*   **开发者接口 (Provider/Hooks)**：
    *   [PR #2754](https://github.com/nanocoai/nanoclaw/pull/2754) 增加了 `onExchangeComplete` 提供商钩子和斜杠命令中断机制。
    *   [PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746) 引入了主机端注册表，按能力声明 Agent 表面。

### 4. 社区热点
今日 Issue 区块较为平淡，无剧烈的社区讨论。唯一的 Issue 活动：
*   [Issue #2755 [CLOSED]](https://github.com/nanocoai/nanoclaw/issues/2755): 由用户 `eranshir` 错误提交至本仓库，已由维护者迅速识别并关闭。
*   **热点偏移**: 社区互动的重心实际上转移到了 PR 的审查中。开发者 `ddaniels` 和 `omri-maya` 主导了今日的功能迭代。特别是围绕 Agent 运行时和崩溃恢复的讨论，体现了社区对“无人值守运行稳定性”的极致追求。

### 5. Bug 与稳定性
今日开发团队像“啄木鸟”一样修复了多个会导致 Agent 运行中断的深层次 Bug，极大提升了系统鲁棒性（按严重程度排序）：

*   **【P0 严重】崩溃死循环与静默失败**:
    *   [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670): 修复了因会话记录损坏导致 Agent 无限死循环崩溃的问题。此前 SDK 将 400 错误伪装成正常 result 返回，导致自愈机制失效。
    *   [PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692): 修复 Claude API 瞬时 5xx 错误（如 529 过载）耗尽重试后的静默失败问题，现在会正确抛出并通知。
*   **【P1 高危】消息路由与多会话串台**:
    *   [PR #2277](https://github.com/nanocoai/nanoclaw/pull/2277): 修复了查询中途收到后续消息时路由刷新失效的问题，防止 cron 任务与真实用户聊天发生串扰。
    *   [PR #2267](https://github.com/nanocoai/nanoclaw/pull/2267): 修复了 Agent-to-Agent (A2A) 通信中，回复消息永远乱序落入“最新会话”的脑裂 Bug。
*   **【P2 中危】开发环境阻塞**:
    *   [PR #2753 (当前仍 Open)](https://github.com/nanocoai/nanoclaw/pull/2753): 发现并修复了当 PATH 中缺少 pnpm 时，pre-commit 钩子错误放行的问题。这对协同开发的代码质量保障至关重要。

### 6. 功能请求与路线图信号
结合今日合并的底层代码，我们可以清晰描绘出 NanoClaw 下一阶段的产品路线图：
1.  **完全脱离人工干预 (Autonomous Operations)**: 通过引入持久化记忆（#2745）、每日自动备份与 CLI 恢复（#2084），以及全面解决 SDK 静默崩溃/死循环（#2670, #2692），项目正朝向“高可用、自修复的个人 AI 助理基座”迈进。
2.  **无缝的全平台/多模态接入**: 大量 Signal 原生集成、双向文件交互以及对 Ollama 视觉模型的支持，表明团队致力于让 AI 助手无缝嵌入用户的日常即时通讯软件中，而不仅限于网页端。
3.  **高度可插拔的 Provider 架构**: SDK 2.2.1 升级及各种 capability seams（能力接缝）的引入，暗示未来将允许第三方更容易地为 NanoClaw 开发新的模型后端和通讯渠道。

### 7. 用户反馈摘要
由于今日被关闭的 Issue 为误报，我们通过核心代码的 commit 信息反推开发侧捕获的痛点：
*   **数据安全焦虑**: 用户此前的痛点在于“一次不小心的 `rm -rf` 或糟糕的迁移就会失去一切”，对容灾备份（#2084）的需求极其迫切。
*   **平台限制 frustration**: Signal 之前会静默丢弃发往外部的文件，且原生适配器无法解析非 base64 的本地文件，这造成了极大的体验割裂感，现已被彻底重写修复。
*   **API 依赖的脆弱性**: 当上游模型提供商（如 Anthropic 529 错误）发生抖动时，旧版 NanoClaw 会发生任务“吞没”，这对长时运行的自动化任务是致命的，目前的修复直击此痛点。

### 8. 待处理积压
*   [PR #2753 (OPEN)](https://github.com/nanocoai/nanoclaw/pull/2753): 贡献者 `sturdy4days` 提交的关于 pre-commit 钩子失效的修复。这是一个影响开发流水线正确性的良好改进，建议维护者尽快 review 并合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 开源项目 2026-06-14 动态日报：

# NullClaw 项目动态日报 (2026-06-14)

### 1. 今日速览
NullClaw 项目在过去 24 小时内整体活跃度集中在核心组件的修复与社区生态的讨论上。今日未发布新版本，但项目维护者与社区贡献者针对严重的定时任务静默失败问题提交了关键性 PR。同时，社区对于扩展第三方生产力工具（如 Jira）的集成表现出了明确的需求。目前仍有 1 个待合并的修复 PR 等待维护者的代码审查，整体开发节奏稳健。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目没有合并或关闭的 PR/Issue，但在修复核心阻塞错误上迈出了重要一步：
*   **核心消息投递修复提交**：贡献者 `vernonstinebaker` 提交了 PR [#954](https://github.com/nullclaw/nullclaw/pull/954)，专门针对定时任务（Cron jobs）无法正常推送消息的底层内存与管道问题进行了修复。该 PR 的提交标志着近期困扰用户的静默失败问题即将得到解决，目前等待核心团队 Review 并合并。

### 4. 社区热点
今日讨论热度最高的是 Agent 定时任务与消息投递相关的话题：
*   **Agent 定时任务失效问题**（[Issue #941](https://github.com/nullclaw/nullclaw/issues/941)）：该 Issue 今日更新并累积了 7 条评论，是今日互动最频繁的讨论。多名用户反馈 Agent 类型的 Cron 任务虽然标记为完成，但 Telegram 等渠道始终收不到消息。这反映出用户在日常依赖 NullClaw 进行定时自动化推送（如日报、定时提醒）时，对消息链路的稳定性有着极高的要求。

### 5. Bug 与稳定性
今日重点聚焦于底层的严重 Bug，按严重程度排列如下：
*   **[Critical] 一次性/Agent 类定时任务静默失败**（[Issue #941](https://github.com/nullclaw/nullclaw/issues/941)）
    *   **现象**：任务被标记为完成后直接从 `cron.json` 移除，但子进程未启动，任何渠道（Telegram, Mattermost 等）均收不到消息。
    *   **根因**：`OutboundMessage.channel` 存在 **Use-After-Free (UAF)**（释放后使用）的严重内存与对象生命周期管理错误。
    *   **状态**：**已有对应 Fix PR**（[PR #954](https://github.com/nullclaw/nullclaw/pull/954)），等待合并。

### 6. 功能请求与路线图信号
*   **Jira 访问工具集成请求**（[Issue #914](https://github.com/nullclaw/nullclaw/issues/914)）：
    *   **诉求**：用户 `sayjeyhi` 请求创建一个原生 Jira 访问工具，使 Agent 能够安全验证并执行读取 Issue、创建工单、更新状态和获取 Sprint 信息等操作。
    *   **路线图信号**：结合 NullClaw 作为个人 AI 助手的定位，企业级生产力工具（ERP/项目管理）的深度接入是扩展其实用性的必然趋势。如果核心团队采纳，这将极大增强 NullClaw 在 ToB 或高效办公场景下的竞争力，有望成为未来几个版本的重点迭代方向。

### 7. 用户反馈摘要
从近期的 Issue 互动中，可以提炼出用户的两个核心痛点与期望：
1.  **底层容错与状态可见性不足**：用户对于“静默失败”（Silent fail）感到沮丧。当任务被系统标记为“已完成”，但实际业务（如 Telegram 消息下发）未执行时，极大的破坏了用户对系统的信任。用户期望在消息投递管道（Outbound channel）上有更强的生命周期管理或失败重试/告警机制。
2.  **工作流的闭环诉求**：用户不再满足于单一的对话交互，而是希望 NullClaw 能够作为调度的中枢（通过 Cron job），并打通外部办公流（通过集成 Jira 等工具），成为真正的全自动化“Agent”。

### 8. 待处理积压
以下重要 Issue 和 PR 需要核心维护者的重点关注与推进：
*   **[PR #954](https://github.com/nullclaw/nullclaw/pull/954)**：修复消息管道 UAF 导致的严重 Bug，直接关联 Issue #941。建议维护者优先进行代码审查，以尽快修复线上静默失败问题。
*   **[Issue #914](https://github.com/nullclaw/nullclaw/issues/914)**：Jira 工具集成功能请求。该需求方向明确且具有高业务价值，建议维护者将其标记为 `enhancement` 或纳入短期 Backlog 进行讨论。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是 **IronClaw** 项目 2026-06-14 的动态日报。本期数据呈现出极高的研发活跃度，核心团队正密集推进“Reborn”运行时的多通道集成与权限交互重构。

---

### 1. 今日速览
*   **整体活跃度极高**：过去 24 小时内，项目共有 37 次基于 Issue 和 PR 的交互更新，开发节奏紧凑。
*   **核心发力点明确**：核心贡献者（如 `henrypark133`, `serrrfirat`, `ilblackdragon`）全面聚焦于 **Reborn 运行时** 的稳定性建设，涵盖了异步消息处理、附件端到端打通以及 Slack 渠道的授权循环修复。
*   **质量控制见效**：今日有 3 个 Issue 和 8 个 PR 被关闭/合并，标记为 `[risk: low]` 的 PR 占据主导，说明项目在快速迭代的同时较好地控制了破坏性风险。

### 2. 版本发布
*   **正式 Release**: 今日无新版本发布。
*   **CI 发布动态**: 自动化发版 PR [nearai/ironclaw#3708](https://github.com/nearai/ironclaw/pull/3708) 处于活跃更新中，它计划将底层 `ironclaw_common` (0.4.2 -> 0.5.0) 和 `ironclaw_skills` (0.3.0 -> 0.4.0) 升级为**包含破坏性 API 更改**的版本，主仓库 `ironclaw` 将跃升至 0.29.1。

### 3. 项目进展
今日项目在**附件流处理**与**异步消息架构**上取得了突破性进展：
*   **附件端到端解析落地**: 关闭并合并了 Track 1 和 Track 2 的基础建设。[nearai/ironclaw#4654](https://github.com/nearai/ironclaw/pull/4654) 引入了统一的附件格式注册表，[nearai/ironclaw#4655](https://github.com/nearai/ironclaw/pull/4655) 实现了在 Reborn 转录合约中持久化附件引用（而非字节流），彻底解决了附件在持久化时被静默丢弃的痛点。同时，Track 6 的字节落地基建 [nearai/ironclaw#4668](https://github.com/nearai/ironclaw/pull/4668) 也已关闭。
*   **异步并发架构重构（DeferredBusy）**: 核心维护者对线程繁忙时的消息处理架构进行了大刀阔斧的重构。[nearai/ironclaw#4838](https://github.com/nearai/ironclaw/pull/4838) **正式废弃**了原有的“延迟与汲取（Defer-and-drain）”机制（[nearai/ironclaw#4831](https://github.com/nearai/ironclaw/issue/4831)），转向更简单的“明确拒绝并交由用户重试”契约。同时基于此关闭了若干优化性质的 Issue（如 [nearai/ironclaw#4832](https://github.com/nearai/ironclaw/issue/4832) 和 [nearai/ironclaw#4833](https://github.com/nearai/ironclaw/issue/4833)），避免了过度设计。

### 4. 社区热点
今日讨论最密集的区域集中在**复杂的网关重试与权限交互逻辑**：
*   **[Issue #4817](https://github.com/nearai/ironclaw/issue/4817) - DeferredBusy 架构遗留问题跟踪**：热度最高。核心团队在此讨论了消息重试提交的架构边界。这反映出项目在处理多轮工具调用与并发状态机时遇到了极大的工程复杂度，团队正寻求在“系统自动恢复”与“架构简洁性”之间取得平衡。
*   **[PR #4670](https://github.com/nearai/ironclaw/pull/4670) - 附件入站桥接**: 由 `ilblackdragon` 发起的 XL 级别 PR，旨在将底层的字节落地与上层的 Transcript `AttachmentRef` 彻底打通。这是 Reborn 架构支持多模态交互的里程碑式联调。

### 5. Bug 与稳定性
今日集中修复了一批严重影响 Slack 通道用户体验的关键 Bug：
*   **[严重] Slack 授权无限循环死锁**: 当调用既需要一次性授权又需要凭证（如 Google OAuth）时，会导致无限次的重新批准。
    *   *修复进展*: 提交了三个独立 PR 进行修复。 [PR #4839](https://github.com/nearai/ironclaw/pull/4839)（保留调用身份）、[PR #4843](https://github.com/nearai/ironclaw/pull/4843)（单次飞行门控交付机制）、[PR #4844](https://github.com/nearai/ironclaw/pull/4844)（修复门控路由过滤分配 Bug）。
*   **[中等] 权限与验证顺序颠倒**: [PR #4840](https://github.com/nearai/ironclaw/pull/4840) 修复了用户遇到“先弹审批，后发现没凭证导致审批失效”的糟糕体验，将“缺失凭证”检查前置。
*   **[中等] QA 测试系统挂起**: [PR #4842](https://github.com/nearai/ironclaw/pull/4842) 修复了 QA 追踪记录器在遇到交互式授权门控时线程挂起（Hang）的问题。
*   **[低] 模型输入降级**: [PR #4680](https://github.com/nearai/ironclaw/pull/4680) 修复了非文本内容（如音频、图片）在传输给模型时被降级为无意义的字面量 `[non_text_content]` 的 Bug。

### 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 中，可以清晰看出 IronClaw 即将发布的下几个版本的演进路线：
*   **运行时上下文感知**: [PR #4836](https://github.com/nearai/ironclaw/pull/4836) 将向 AI 模型注入当前的连接通道、交付状态和运行来源，让模型“知道自己在哪、在跟哪个平台对话”。
*   **持久化跨线程授权**: [Issue #4825](https://github.com/nearai/ironclaw/issue/4825) 揭示了用户对“一次授权，全局生效”的强烈需求。预计在接下来的 Reborn 更新中，授权范围将剔除 `thread_id` 限制。
*   **全链路多模态支持**: 从落地、解析到 Web SPA 上传（[PR #4738](https://github.com/nearai/ironclaw/pull/4738)），即将全面支持文档、图像和音频。
*   **鲁棒的失败恢复**: [PR #4841](https://github.com/nearai/ironclaw/pull/4841) 致力于消除“运行破坏”，确保所有运行终止错误都能向用户解释原因且可安全重试。

### 7. 用户反馈摘要
*   **痛点 1 - 频繁的重复授权**：从 Issue #4825 和 Slack 授权循环相关的 PRs 可以看出，真实用户在多线程或使用 Slack 交互时，**极其反感反复点击授权**。系统目前对凭证/会话生命周期的管理过于短视，破坏了“个人助手”应有的无缝体验。
*   **痛点 2 - “静默失败”的挫败感**：PR #4680 和 #4655 解决的问题侧面反映了早期用户的痛点——传了文件但模型“看不见”或者直接被丢弃，且系统不报错。目前社区（核心开发者）正大力修补这些断点，追求极致的透明度。

### 8. 待处理积压
*   **🔴 自动化流水线健康警告**: [Issue #4108](https://github.com/nearai/ironclaw/issue/4108) 记录了 Nightly E2E (端到端) 测试再次失败，且涉及核心的 `v2-engine`。尽管项目在高速迭代，但自动化测试的红灯需要维护者高度关注，以防底层回归。
*   **🟡 社区贡献者 PR 待审**: 由外部贡献者 `wcc945` 提交的 [PR #4264](https://github.com/nearai/ironclaw/pull/4264)（为 Web Gateway 添加例程创建接口）已停滞半个月，建议核心团队进行 Review 或给出修改意见，以保持社区贡献者的热情。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-06-14 动态日报。

---

# 🦞 LobsterAI 项目动态日报 (2026-06-14)

**数据统计周期**：过去 24 小时  
**项目仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

### 1. 今日速览
过去 24 小时内，LobsterAI 仓库共有 **9 项更新**（4 条 Issues，5 条 PRs），但均无新版本发布。值得注意的是，今日产生互动的 Issues 和 PRs 几乎全部被系统标记为 `[stale]`（陈旧/停滞状态），且无任何 Issue 被成功关闭。合并/关闭的 2 个 PR 均为长期挂起的 UI/UX 优化项。总体而言，项目当前在 Issue 处理和社区 PR 审核方面存在明显的积压现象，维护者活跃度亟待提升。

### 2. 版本发布
**本日无新版本发布。**

### 3. 项目进展
今日项目代码库无实质性向前推进（核心功能未更新），主要的代码变动为清理长期挂起的过期 PR：
*   🛑 **关闭 UI 滚动 Bug 修复**：[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) `fix(mcp)`。该 PR 旨在修复 MCP 服务器表单内容过长时，关闭按钮被挤出可视区域的问题。因长期未更新被关闭。
*   🛑 **关闭 macOS 快捷键适配**：[PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) `fix(shortcuts)`。该 PR 旨在将 macOS 的键盘快捷键提示从 `Ctrl` 正确显示为 `Cmd (⌘)`。因长期未更新被关闭。

### 4. 社区热点
由于近期活跃讨论多集中在 4 月初，今日社区关注点主要体现在以下两个处于停滞状态的 Issue 中，反映了社区对**底层框架兼容性**和**前端 UI 细节**的诉求：
*   **[Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)**：用户反馈 `openclaw` 新版本（v2026.3.24）引入了破坏性更新导致项目无法启动。这表明社区中有一部分高阶用户正在将 LobsterAI 与最新版上游框架结合使用，急需官方跟进适配。
*   **[PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)**：由社区贡献者 `@febugcoder` 提交的关于扩展预览管道（支持 HTML, React, Mermaid）的重要 PR。虽然解决了冲突并修复了运行时 Bug，但至今未能得到官方合入。

### 5. Bug 与稳定性
根据今日更新的 Issue 列表，项目目前在「技能」模块存在多个影响用户体验的稳定性问题，按严重程度排列如下：

1.  **🚨 高（逻辑阻断）**：创建定时任务选择“不重复”并清空日历后，点击创建按钮无反应且无报错提示。（[Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)）
2.  **⚠️ 中（状态渲染异常）**：Agent 添加技能并对话后，引用的技能标签不再展示，重新切换 Agent 才会恢复。（[Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)）
3.  **⚠️ 中（权限控制失效）**：已停用的“上传技能”，在对话中依然可以被关键字触发调用，存在安全管控隐患。（[Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)）

### 6. 功能请求与路线图信号
结合当前的 Issue 痛点和尚未合入的 PR，可以梳理出下一阶段可能被优先推进的功能优化路线：
*   **UI 布局重构**：针对技能选择导致的输入框拥挤问题，官方成员 `@gongzhi-netease` 已提交 [PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)，计划将已选技能标签移至输入框顶部。**预测**：此项 UI 优化有望在近期的版本中合入主线。
*   **技能导入与校验规范化**：针对技能重复导入污染 System Prompt 的痛点，[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445) 提出了从底层读取 `SKILL.md` 校验命名的方案。**预测**：该 PR 直接解决了影响大模型路由稳定性的 Bug，大概率被纳入下一版本的迭代中。

### 7. 用户反馈摘要
通过提炼 Issues 和 PRs 的描述，真实用户痛点主要集中在以下三个方面：
*   **工作流中断引发困惑**：如定时任务创建失败（[Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)），前端缺乏必要的错误捕获机制（静默失败），导致用户不知所措。
*   **大模型上下文污染**：用户发现重复导入的技能会注入到 System Prompt 中（[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)），这表明资深用户非常关注 Prompt 的纯洁性和 Agent 路由的稳定性。
*   **对 Agent 技能机制的疑惑**：有用户对“Agent选择技能的作用”产生疑问（[Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)），说明当前 UI 对“技能限定触发”的产品逻辑传达不够清晰。

### 8. 待处理积压（⚠️ 维护者重点关注）
今日的动态数据暴露出严重的 Issue/PR 积压问题，以下带有 `[stale]` 标签的条目已经超过 2 个月未得到实质性处理，建议维护团队尽快介入审查或提供状态更新：
*   **[PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)**：输入框 UI 结构优化（官方成员提交，待 Review）。
*   **[PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)**：Artifacts 扩展预览管道（社区贡献，解决了大量冲突，待 Review）。
*   **[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)**：修复技能重复导入 Bug（官方成员提交，待 Review）。
*   **[Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)**：Openclaw 破坏性更新导致无法启动（需官方确认是否排期适配）。

---
*分析备注：今日项目整体健康度评分偏低。研发重心似乎有所偏移，导致内部研发提交的 PR（#1440, #1445）都未能及时合并。建议团队尽快进行一次 Bug 清理日以解决技能模块和前端校验的遗留问题。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**
**日期**: 2026-06-14 | **仓库**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. 今日速览
过去 24 小时内，Moltis 项目保持了一定的开发与社区活跃度，共产生 2 条 Issue 更新和 1 条 PR 更新。项目当前的重点明显聚焦于 **MCP (Model Context Protocol) 生态的兼容性修复**与**底层沙箱执行环境的安全性增强**。尽管今日没有新版本发布或代码合并，但开发者社区提交的 Bug 报告质量较高，且伴随着快速的代码级响应（Fix PR 已提交），展现了项目健康的问题发现与解决机制。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日暂无已合并的 PR 或关闭的 Issue，但开源贡献者提交了关键修复代码：
*   **PR [#1120](https://github.com/moltis-org/moltis/pull/1120) 提交**：针对近期 MCP OAuth 授权失败的问题，贡献者 `xzavrel` 迅速提交了修复方案，重构了 `discover_and_register()` 函数获取 `resource_metadata` 的逻辑。该 PR 目前处于待合并状态，一旦合并，将大幅提升 Moltis 接入第三方复杂 MCP 服务器的稳定性。

### 4. 社区热点
今日最受关注的互动集中在 MCP 协议的互操作性上：
*   **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118)** 和 **[Issue #1119](https://github.com/moltis-org/moltis/issues/1119)** 均为高价值的技术讨论。
*   **背后诉求分析**：由于 AI 智能体需要连接的外部工具日益增多，用户强烈要求 Moltis 能够无缝、安全地对接主流 SaaS 平台（如 Notion、Linear）。同时，由于 LLM 生成的代码存在不可控性，企业级用户对沙箱环境的“硬隔离”（如 VM 级别隔离）需求急迫。这表明 Moltis 的用户群体正在向更高级别、更严苛的企业级应用场景拓展。

### 5. Bug 与稳定性
*   **[高] MCP OAuth 授权流失败** | [Issue #1119](https://github.com/moltis-org/moltis/issues/1119)
    *   **现象**: 添加使用带有 `resource_metadata` 参数的 MCP 服务器（如 Notion, Linear）时，OAuth 授权流程中断并抛出 `invalid_target` 错误。
    *   **修复状态**: 🟢 **已有修复 PR**。开发者已提交 [PR #1120](https://github.com/moltis-org/moltis/pull/1120) 等待维护者审核。

### 6. 功能请求与路线图信号
*   **Kubernetes 原生沙箱后端支持** | [Issue #1118](https://github.com/moltis-org/moltis/issues/1118)
    *   **需求**: 增加名为 `kubernetes` 的新沙箱后端，支持生成临时的 K8s Pod 来执行 Agent 命令，并支持通过 `runtimeClassName` 使用 Kata Containers 或 gVisor 实现 VM 级隔离。
    *   **路线图研判**: 随着智能体自主执行代码（如 Devin 类工具）的需求增加，仅靠传统的 Docker 容器隔离已无法满足部分企业的安全合规要求。此功能请求符合 AI Agent 基础设施云原生化的发展趋势，有望被纳入中长期路线图。

### 7. 用户反馈摘要
*   **痛点 - 集成壁垒**: 用户在尝试将 Moltis 与现有的工作流管理工具（Notion、Linear）结合时，遭遇了底层认证协议解析的阻碍，影响了智能体自动操作外部工作流的体验。
*   **场景 - 高危代码执行**: 开发者和企业用户正在将 Moltis 部署到 Kubernetes 集群中，并尝试让其运行不受信任的 LLM 生成代码，对多租户环境下的强隔离和资源限制有着明确诉求。

### 8. 待处理积压
*提醒：以下为今日提交且目前尚未关闭的议题，需维护者重点关注。*
*   ⚠️ **[PR #1120](https://github.com/moltis-org/moltis/pull/1120)**: MCP OAuth 修复补丁。建议维护者优先进行代码审查和回归测试，以便尽快合并到下一发行版中，恢复 Notion/Linear 等关键平台的集成能力。
*   ⚠️ **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118)**: Kubernetes 沙箱后端请求。建议维护者尽快响应，确认该功能是否符合项目架构规划，或引导社区成员进行 RFC（意见征集）与原型开发。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这是一份基于 2026-06-14 GitHub 数据为您生成的 CoPaw (agentscope-ai/QwenPaw) 项目动态日报。

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-06-14)

### 1. 今日速览
*   **整体活跃度极高，社区处于“高负荷反馈”状态。** 过去 24 小时内共有 20 条 Issue/PR 更新（10 个新开/活跃 Issue，9 个活跃 PR）。
*   **稳定性与架构设计成为社区焦点。** 随着用户使用深度的增加，长时间对话的上下文丢失、定时任务（Cron）失效以及 Tauri 桌面端启动卡顿等底层问题集中爆发。
*   **外部生态接入需求强烈。** 社区对将 QwenPaw 接入越南主流通讯软件（Zalo）、支持 Kimi 编程版 API 以及多语言本地化展现了极高的热情。
*   **代码质量在稳步提升中。** 活跃的 PR 列表中包含大量针对边缘场景的健壮性修复，表明核心维护者及贡献者正在积极加固底层代码。

### 2. 版本发布
*   **无新版本发布 (0 个 Release)。** 当前项目仍处于针对 `v1.1.11.post2` 的后续修复与优化阶段，预计下一版本将聚焦于解决当前社区反馈的稳定性 Bug。

### 3. 项目进展
今日项目有 2 个核心 PR 被关闭，主要推进了前端体验与本地化能力：
*   **PR [#2498](https://github.com/agentscope-ai/QwenPaw/pull/2498) [CLOSED]**：修复了创建 Agent 时强制使用英语和中文人设文件的问题，现在会根据前端 UI 语言自动适配并带有服务端兜底逻辑。
*   **PR [#4969](https://github.com/agentscope-ai/QwenPaw/pull/4969) [CLOSED]**：新增了 Skill（技能）支持通过 Tag（标签）过滤进行批量下载，提升了多 Agent 工作区的部署效率。
*   **代码健壮性推进：** 开发者 `ly-wang19` 集中提交了 7 个 Fix PR（目前均 Under Review），大幅提升了 Llama.cpp 版本解析、Cron 任务文件解析、Linux 浏览器检测、备份容错等多处的防崩溃机制。

### 4. 社区热点
今日社区讨论最热烈的话题集中在“API 接入限制”与“特殊文件下载”上：
*   **Issue [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) [特评: 4]**：**强烈呼吁将 `kimi-for-coding` 加入 `uv` 白名单。** 用户痛点极为明显——许多人已经付费订阅了 Kimi 的 Coding 套餐，但目前 QwenPaw 仅支持官方标准 API，导致套餐额度无法复用。这反映了用户对“低成本/自带 Key”接入第三方大模型套餐的强烈诉求。
*   **Issue [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) [已关闭, 评论: 6]**：关于 `docx/pdf` 点击下载报错 404 的问题引发了大量讨论，表明虽然纯文本下载在此前被修复，但二进制文件流的下载逻辑仍需彻底重构。

### 5. Bug 与稳定性
根据今日报告的 Bug，按严重程度排列如下：
1.  **🔴 严重 (系统无响应/上下文丢失)：**
    *   **Issue [#5172](https://github.com/agentscope-ai/QwenPaw/issues/5172)**：**长时间对话后发消息一直等待无响应，必须手动停止。** 在接入微信/QQ等无法点击“停止”的渠道时，直接导致 Agent 宕机。
    *   **Issue [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)**：**上下文压缩机制存在致命缺陷。** 当人设文件大于保留阈值时，压缩器会将上下文全部抹除，导致任务直接中断。
2.  **🟠 中等 (核心功能回归)：**
    *   **Issue [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163)**：`v1.1.11` 导致了 **Gemini 工具调用 功能的全面回归**，模型无法正常使用内置工具。
3.  **🟡 低 (平台兼容/性能)：**
    *   **Issue [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047)**：Windows 端使用 Tauri 打包后启动时间从 1-2 分钟飙升至 10 分钟以上，且常进入无响应状态。
    *   **Issue [#5174](https://github.com/agentscope-ai/QwenPaw/issues/5174)**：心跳 Agent 和 Cron Agent 无法执行 `write_file` 等重任务，疑似存在沙箱或设计机制限制。

### 6. 功能请求与路线图信号
从 Issues 和活跃 PRs 中，可以捕捉到下一步的演进信号：
*   **多渠道接入拓展：** 越南用户群体活跃，请求接入本土微信 **Zalo Bot** ([#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168))。
*   **国际化 (i18n) 持续推进：** 社区请求新增 **越南语 (vi)** 界面支持 ([#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169))。
*   **长文本流式渲染优化：** 飞书 CardKit 流式卡片在长回复时性能极速下降，类似“挤牙膏”，需要重构前端的流式刷新/分段更新机制 ([#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167))。
*   **底层沙箱架构重做：** PR [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) 提出了 `governance & sandbox interface`（治理与沙箱接口）的初步设计，这可能是解决当前 Cron/Agent 权限受限问题的关键路线图。

### 7. 用户反馈摘要
*   **真实痛点：** 用户将 QwenPaw 深度整合入飞书生态（流式卡片）和 IM 生态（QQ/微信）时，遭遇了明显的性能瓶颈和容错短板（长回复卡死、无停止按钮导致假死）。
*   **使用场景：** 用户越来越倾向于将 QwenPaw 作为“7x24 小时的自动化后台 Agent”（通过 Cron 和心跳机制），但发现这些后台机制在处理重 I/O 操作（如生成知识文件、调用子 Agent）时存在机制瓶颈。
*   **满意度反馈：** 社区对 Tauri 架构的替换并不买账，Windows 启动倒退的问题严重影响了首启体验；同时，强行割裂第三方模型（如 Kimi 编程套餐）的接入也让部分进阶用户感到“难受”。

### 8. 待处理积压
*   ⚠️ **开发者 `ly-wang19` 的“抢修复”队列：** 目前有 7 个由该开发者提交的 PR（[#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035), [#5040](https://github.com/agentscope-ai/QwenPaw/pull/5040), [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) 等）处于 `Under Review` 状态，涵盖了空指针、越界、解析崩溃等多个严重 Edge Cases。**强烈建议维护团队优先 Review 这些 PR，这对提升系统当前稳定性见效最快。**
*   ⚠️ **PR [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088)** 涉及底层沙箱重构，已停留数日，需要核心团队尽快介入讨论以确定后续架构走向。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报 - 2026年06月14日**

作为专注于 AI 智能体与个人 AI 助手领域的开源项目，ZeroClaw 在过去 24 小时内保持了极高的社区热度与工程迭代速度。以下是基于昨日（6月13日）GitHub 数据生成的项目动态日报。

---

### 1. 今日速览
*   **整体活跃度极高**：过去 24 小时内共处理了 **41 条 Issue 更新**（新开/活跃 24 条，关闭 17 条）以及 **50 条 PR 更新**（待合并 37 条，已合并/关闭 13 条）。社区互动频繁，开发进度紧凑。
*   **焦点向 Web Gateway 与 TUI 转移**：近期讨论和 Bug 报告大量集中于 Web 端 Dashboard、WebSocket 通讯以及全新的 `zerocode` 终端界面（TUI）。
*   **底层架构重构进入深水区**：多位核心贡献者提交了关于 Agent 运行时引擎统一、插件分发机制（OCI/WASM）以及配置菜单声明的重构 PR，标志着项目正在为后续的模块化扩展打地基。

### 2. 版本发布
*   **无新版本发布**。
*(注：项目当前正处于 `v0.8.0` 的收尾与 `v0.8.1` 的规划阶段，多项 S1 级别的 Bug 正在被紧急修复。)*

### 3. 项目进展
今日共关闭/合并了 13 个 PR，项目在稳定性和开发体验上取得了实质性进展：
*   **任务调度优化**：PR [#7398](https://github.com/zeroclaw-labs/zeroclaw/pull/7398) 合并，为 Cron 定时任务增加了暂停/恢复功能，无需再通过删除并重建来管理任务状态。
*   **交互体验修复**：PR [#7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513) 合并，修复了 `quickstart` 命令在无交互终端（non-TTY）环境下的死循环问题（该 Bug 曾导致 3 分钟内疯狂输出 4.3GB 的日志）。
*   **TUI 快捷键修复**：PR [#7538](https://github.com/zeroclaw-labs/zeroclaw/pull/7538) 合并，修复了 macOS 系统下用户使用 `Cmd+C` 复制文本时误触退出程序的严重痛点。

### 4. 社区热点
今日讨论度最高的话题集中在**插件机制的演进**与**多渠道消息体验**：
*   **插件分发架构大讨论**：Issue [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 与 [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) 提出了极具前瞻性的 RFC：建议放弃简单的 JSON 索引，转而使用符合 OCI 标准的容器镜像仓库来存储、分发和验证 WASM 插件。这反映了重度用户对安全、可扩展的插件生态的强烈渴求。
*   **国内 IM 渠道的体验升级**：Issue [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) 提出为 QQ、钉钉、企业微信、飞书增加“流式卡片消息”支持，以缓解用户在使用 AI 助手时等待回复的焦虑，获得了大量关注。
*   **底层引擎统一**：Issue [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) 探讨了将当前三个独立的 Agent 轮次执行引擎合并为单一引擎的 RFC，以降低系统复杂度。

### 5. Bug 与稳定性
今日报告了多个影响工作流的 S1/S2 级别 Bug，部分已产生对应的热修复 PR：
*   **[S1 - Web Dashboard]** Issue [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) / [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)：Agent 在 WebSocket 会话中调用 `ask_user` 或 `/canvas` 工具时立即崩溃报错。
    *   *Fix PR*: [#7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584) 已提交。
*   **[S1 - macOS 原生应用]** Issue [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)：macOS 桌面端 App 无法检测系统权限，重启后出现空白页面。
    *   *状态*: 当前状态为 Blocked，等待排查。
*   **[S2 - 通讯渠道]** Issue [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)：连接 Telegram 时，AI 会将同一条消息重复保存进 Memories，导致上下文污染。
*   **[S2 - TUI 主题]** Issue [#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)：在浅色终端下使用深色 Zerocode 主题会导致文字不可见。

### 6. 功能请求与路线图信号
根据新开 Issues 和已接受的标签，下一个小版本 (`v0.8.1`) 的路线图信号非常清晰：
*   **多会话支持**：Issue [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) 请求 Web UI 支持侧边栏多会话切换，这已是传统聊天的标配诉求。
*   **动态委派与安全隔离**：Issue [#7514](https://github.com/zeroclaw-labs/zeroclaw/issues/7514) 希望允许主 Agent 将任务委派给使用不同风险配置文件（Risk Profiles）的子 Agent，以满足更复杂的企业级安全隔离场景。
*   **本地模型路由**：Issue [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) 请求为 `llama.cpp` 增加模型路由器，方便在多个本地小模型间快速切换，表明项目在“本地化 AI 助手”领域的受众正在增加。

### 7. 用户反馈摘要
通过梳理 Issue 评论，提取出当前真实用户的几个核心痛点：
*   **本地化与企业部署存在门槛**：多位用户反馈在对接私有化部署的 OpenAI 兼容接口时，遇到 TLS 证书校验失败、超时配置不生效（Issue [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)）的问题。PR [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) 尝试通过增加 `tls_ca_cert_path` 解决，亟待合并。
*   **多语言与字符编码处理薄弱**：Issue [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) 指出 `file_read` 工具在读取非 UTF-8（如西里尔字母、Latin-1）编码的文本时会出现乱码，影响了非英语地区开发者的体验。
*   **UI 交互的连贯性**：用户对于 `quickstart` 的无限循环刷新（Issue [#7507](https://github.com/zeroclaw-labs/zeroclaw/issues/7507)）感到沮丧，说明项目在非标准环境下的鲁棒性还有待加强。

### 8. 待处理积压
以下重要 Issue/PR 存在停滞风险，需要维护者关注：
*   **[性能积压]** Issue [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)：SQLite 内存后端的向量搜索目前采用 O(n) 全表扫描，性能受限。建议引入近似最近邻（ANN）索引以提升检索速度，目前被打上 `status:blocked` 和 `needs-author-action`，已停滞两个月。
*   **[集成积压]** PR [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)：关于增加后台审查 fork 和 `skill_manage` 工具的大型 PR（XL），对 Agent 技能系统改进意义重大，但目前卡在 `needs-author-action`，需要作者跟进 Rebase 或解决冲突。

</details>