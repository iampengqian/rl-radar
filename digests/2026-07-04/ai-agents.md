# OpenClaw 生态日报 2026-07-04

> Issues: 206 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-03 22:18 UTC

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

# 🕵️‍♂️ OpenClaw 项目动态日报 —— 2026-07-04

## 1. 今日速览
今日 OpenClaw 项目呈现出**极高**的社区活跃度与维护者吞吐量。在过去 24 小时内，项目处理了高达 **206 条 Issue 动态**（新开/活跃 128 条，关闭 78 条），以及 **500 条 PR 动态**（包含合并/关闭 30 条，470 条处于待合并和活跃审查状态）。尽管今日没有发布新的稳定版 Release，但开发重心明显聚焦于 **v2026.6.11 的回归修复**、**多渠道消息投递的可靠性加固**，以及**底层存储向 SQLite 架构的重构迁移**。整体来看，项目处于快速迭代、强基建的阶段。

## 2. 版本发布
*今日暂无新版本发布。* 
开发重心主要集中于主干分支的 PR 审查与架构重构，预计团队正在为下一个大版本积累底层改动（如 SQLite 存储迁移）。

## 3. 项目进展
今日有 30 个 PR 被合并或关闭，多个关键的底层基建与功能特性取得实质性进展：
*   **多渠道集成与修复**：PR [#79397](https://github.com/openclaw/openclaw/pull/79397) 修复了 Nextcloud Talk 无法正确解析结构化 mention 的 bug；PR [#79148](https://github.com/openclaw/openclaw/pull/79148) 优化了 Discord 入站历史记录上限配置。
*   **底层稳定性与健壮性**：PR [#92509](https://github.com/openclaw/openclaw/pull/92509) 为 memory-core 引入了 WAL checkpoint 机制，防止网关进程被杀导致元数据丢失；PR [#88968](https://github.com/openclaw/openclaw/pull/88968) 阻止了 `memoryFlush` 失败导致的用户正常回复中断。
*   **测试与自动化基座**：PR [#79342](https://github.com/openclaw/openclaw/pull/79342) 引入了防谄媚压力测试套件；PR [#79398](https://github.com/openclaw/openclaw/pull/79398) 添加了上下文压缩质量的探针测试。

## 4. 社区热点
今日社区讨论最为热烈的议题集中在 **Agent 内部状态对用户渠道的污染**，以及 **Codex 后端集成的不稳定性**：
*   🔥 **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)** (👍1, 💬33)：**工具调用间的文本泄露到消息渠道**。用户强烈反馈 Agent 的内部处理流、报错说明等本该在后台运行的文本，被直接当作正常消息推送到了 Slack/iMessage 等渠道，严重破坏了终端用户体验。
*   🔥 **[Issue #99551](https://github.com/openclaw/openclaw/issues/99551)** (👍1, 💬12)：**Codex worker 失控硬化冲刺**。维护者针对近期 Codex worker 引发的严重故障开启了专项 Tracker，表明核心团队正在集中精力解决 Codex 引擎的会话状态与私有文本泄露问题。
*   🔥 **[Issue #35203](https://github.com/openclaw/openclaw/issues/35203)** (💬9)：**多智能体协作增强提案**。用户提交了关于能力分析、共享黑板、分层记忆和 Token 成本治理的宏大 RFC，反映了高阶用户对复杂多 Agent 工作流的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响严重的 Bug 和回归问题，按影响面排列如下：

*   **P1 级 - 文本输出被错误渲染为图片附件 (大面积影响)**
    *   [Issue #96857](https://github.com/openclaw/openclaw/issues/96857) / [Issue #98874](https://github.com/openclaw/openclaw/issues/98874) / [Issue #98673](https://github.com/openclaw/openclaw/issues/98673)：大量用户反馈，普通的文本工具输出（如 exec, read 等）在 Agent 上下文中被错误降级为 `(see attached image)` 或图像块。这会导致 Agent "失明"，无法读取命令执行结果，引发大面积任务中断。
*   **P1 级 - v2026.6.11 严重回归**
    *   [Issue #98528](https://github.com/openclaw/openclaw/issues/98528) (已关闭)：升级到 2026.6.11 后，所有工具调用（exec, web_fetch 等）在首次成功调用后返回空输出。
    *   [Issue #98416](https://github.com/openclaw/openclaw/issues/98416)：v2026.6.11 发布的 dist 缺少重入保护，导致回复会话初始化冲突。
*   **P1 级 - 网关与平台稳定性**
    *   [Issue #99263](https://github.com/openclaw/openclaw/issues/99263)：Node 26 环境下，处理入站图像媒体时因 GC 提前关闭 FileHandle 导致网关崩溃 (`ERR_INVALID_STATE`)。
    *   [Issue #99499](https://github.com/openclaw/openclaw/issues/99499)：网关将回复卡在 `pendingFinalDelivery` 状态，导致 UI 永远收不到回复。

## 6. 功能请求与路线图信号
从近期的 Issue 和活跃 PR 中，可以明显看出项目接下来的演进路线图：
*   **底层存储切换至 SQLite**：由巨型 PR [#98236](https://github.com/openclaw/openclaw/pull/98236) (标记为 `do not merge`) 推动，旨在将会话和记录从 JSONL 迁移至基于每代理的 SQLite，这将极大改善多智能体并发下的状态锁问题。
*   **LLM 提供商高级调度**：[Issue #47910](https://github.com/openclaw/openclaw/issues/47910) 提议基于失败类别进行故障转移隔离（如隔离鉴权失效的 Provider）；同时 PR [#99658](https://github.com/openclaw/openclaw/pull/99658) 正在引入 ClawRouter 路由和配额管理。项目在多模型高可用方面的建设正在加速。
*   **多智能体精细化配置**：[Issue #55401](https://github.com/openclaw/openclaw/issues/55401) 请求支持多 Agent 设置中的“每个 Agent 独立插件配置”，这配合 SQLite 存储重构，预示着 OpenClaw 正在向真正的多租户/多智能体并发平台演进。

## 7. 用户反馈摘要
从今日的 Issue 描述和评论中，提炼出以下真实用户痛点：
*   **长上下文与压缩机制脆弱**：使用 Telegram 等渠道进行长会话时，用户经常遭遇 "compaction timeout"（[Issue #92043](https://github.com/openclaw/openclaw/issues/92043)）或因上下文溢出导致无限死循环（[Issue #78562](https://github.com/openclaw/openclaw/issues/78562)），且断点无法恢复，体验极差。
*   **底层环境兼容性痛点**：[Issue #71865](https://github.com/openclaw/openclaw/issues/71865) 提到因 Windows PowerShell 生成的带有 BOM 格式的配置文件导致鉴权静默失败；[Issue #73148](https://github.com/openclaw/openclaw/issues/73148) 则反映了原生依赖包 `sharp` 缺失时图像优化报错不明显，用户排查成本高。
*   **用户体验细节有待打磨**：iOS 端 Voice Wake 功能在与其他录音应用冲突时引发崩溃（[Issue #99093](https://github.com/openclaw/openclaw/issues/99093)）；Cloud 实例存在余额充足却提示“Credits 用尽”的逻辑误判（[Issue #99594](https://github.com/openclaw/openclaw/issues/99594)）。

## 8. 待处理积压
尽管今日关闭了大量 Issue，仍有几个高优先级/高影响的积压问题需要维护者立刻关注：
*   🚨 **[Issue #99551](https://github.com/openclaw/openclaw/issues/99551)**：Codex worker 失控硬化 Tracker，目前已有 12 条讨论但仍在 `OPEN` 状态，涉及核心安全与会话丢失，需重点攻克。
*   🚨 **[Issue #87744](https://github.com/openclaw/openclaw/issues/87744)** (P1)：Codex-backed 的 Telegram 会话持续超时，导致任务永远无法到达 `turn/completed` 状态，自 5 月底报告至今仍未彻底解决。
*   ⚠️ **[PR #89041](https://github.com/openclaw/openclaw/pull/89041)** (P1)：修复 Discord 网关因底层 `ws` 库更新 (8.21.0) 引入的 chunk 限制导致断连的 Bug，该 PR 自 6 月初提交，目前状态为 `waiting on author`，急需推进合并以提升 Discord 稳定性。

---

## 横向生态对比

这是一份基于 2026 年 7 月 4 日各大开源 AI 智能体与个人助手项目动态的横向对比与技术生态分析报告。

# 📊 2026.07.04 AI 智能体开源生态横向对比与趋势分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单体对话向多智能体协同与深度系统集成”的跃迁期**。底层架构上，项目普遍在进行向 **SQLite/独立沙箱** 的存储与运行时重构，以解决并发与状态锁问题；接入层，**全渠道通讯（IM）适配与企业级高可用（如 OAuth 健壮性、模型降级路由）**成为竞争焦点。同时，**长上下文与记忆治理（压缩、隔离、防泄漏）**已成为决定项目生死的关键技术深水区。

## 2. 各项目活跃度对比
生态呈现出显著的“头部效应”，OpenClaw 与 IronClaw 引领底层基建重构，而部分尾部项目陷入停滞。

| 项目名称 | Issues 动态 | PRs 动态 | 新版本发布 | 核心聚焦 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 128 新/活跃 | 470 活跃 | ❌ 无 | SQLite 迁移、Codex 硬化、网关稳定性 | 🟢 极高 (强基建阶段) |
| **IronClaw** | 29 新/活跃 | 26 活跃 | ❌ 无 | Reborn 架构重构、移除旧引擎、CI修复 | 🟢 极高 (架构深水区) |
| **NanoBot** | 28 活跃 | 38 活跃 | ❌ 无 | 模型兼容性、移动端 PWA、多 Agent 编排 | 🟢 优秀 (功能快速扩展) |
| **Hermes Agent**| 47 新/活跃 | 41 活跃 | ❌ 无 | 鉴权修复、安全边界、桌面端性能调优 | 🟢 优秀 (修复浪潮期) |
| **CoPaw (QwenPaw)**| 14 新/活跃 | 19 活跃 | ❌ 无 | v2.0 架构演进、Tauri 迁移、企业级渠道 | 🟢 优秀 (大版本冲刺期) |
| **ZeroClaw** | 30 活跃 | 43 活跃 | ❌ 无 | WASM 插件、SOP 可视化、v0.8.3 重构 | 🟢 良好 (安全与架构并重) |
| **LobsterAI** | - | 14 合并 | ✅ v2026.7.3 | Cowork 目标模式、UI/UX 体验打磨 | 🟢 良好 (稳步推进期) |
| **PicoClaw** | 2 活跃 | 12 活跃 | ✅ v0.3.1 | 通信渠道断线重连、多模型容灾 | 🟡 一般 (处于收敛期) |
| **NanoClaw** | 1 活跃 | 18 活跃 | ❌ 无 | 容器挂载修复、跨平台渠道拓展 | 🟡 一般 (代码热，社区冷) |
| **NullClaw** | 1 活跃 | 0 动态 | ❌ 无 | 通道长连接保活排查 | 🔴 停滞 (面临稳定性瓶颈) |
| *TinyClaw, Moltis等*| 0 | 0 | ❌ 无 | - | ⚫ 静默 |

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与基建标杆**，OpenClaw 展现出了无与伦比的社区吞吐量（单日超 200 条 Issue 和 500 条 PR 动态）。
*   **技术路线差异**：当其他项目（如 NanoBot、CoPaw）还在优化单层 Agent 逻辑时，OpenClaw 已经在攻坚**多租户/多智能体并发调度**（每代理独立 SQLite、独立插件配置）以及**底层 LLM 的高级调度**（ClawRouter 路由与故障转移隔离）。
*   **核心优势**：极强的工程化和防劣化能力。今日引入了防谄媚压力测试和上下文压缩质量探针，这在其他项目中极为罕见，体现了其在长周期运行下的质量把控壁垒。
*   **当前软肋**：因快速迭代带来了严重的版本回归（如文本输出降级为图片导致 Agent 失明、v2026.6.11 严重回归），以及 Codex worker 失控导致的底层状态污染问题。

## 4. 共同关注的技术方向
从今日各项目的动态中，可以清晰地提取出 AI Agent 领域的四大共性诉求：
1.  **多平台 IM 渠道的高可用与自愈**：所有项目都在与第三方通讯平台的断连作斗争。
    *   *涉及项目*：OpenClaw (pendingFinalDelivery 卡死)、NullClaw (Telegram 闲置假死)、PicoClaw (WhatsApp/Matrix 断线重连)、NanoClaw (Signal 消息丢失)。
2.  **模型接入层的鉴权鲁棒性与成本控制**：针对闭源大模型 API 策略的频繁变动。
    *   *涉及项目*：Hermes Agent (Claude Prompt Caching 静默失效致成本翻倍、OAuth 404)、NanoBot (API 兼容性修复)、OpenClaw (引入 ClawRouter 容灾与隔离)。
3.  **记忆系统的精细化治理**：长上下文处理脆弱，极易发生“失忆”或“上下文污染”。
    *   *涉及项目*：NanoBot (多轮对话失忆)、CoPaw (压缩机制导致丢失保护锚点)、OpenClaw (工具内部状态泄露到用户渠道)、IronClaw (记忆提示词未接入生产环境)。
4.  **多智能体协同隔离与调度**：从单一 Agent 向内部总线和工作流编排演进。
    *   *涉及项目*：OpenClaw (共享黑板与 Token 治理 RFC)、PicoClaw (Agent 协作总线)、LobsterAI (Cowork Goal Mode)。

## 5. 差异化定位分析
*   **基建型 vs. 应用型**：**OpenClaw** 和 **IronClaw** 是典型的基建型项目，核心精力在底层存储（SQLite/Wasmtime）、GC 和 API 网关重构；而 **LobsterAI** 和 **CoPaw** 则偏向应用与体验层，专注于 WebUI 交互、桌面端重构以及企业工作台（钉钉/飞书/Teams）的集成。
*   **全平台 vs. 垂直场景**：**NanoBot** 高度关注移动端体验（PWA化、手机端 Voice Wake），贴近个人极客助手定位；**ZeroClaw** 和 **PicoClaw** 则在向企业级安全与合规发力（如引入 SOP 可视化、Windows GBK 兼容、RBAC 权限隔离）。
*   **生态开放度**：**Hermes Agent** 提出了极具进攻性的“自动迁移竞品配置”提案（导入 Claude Code、Cursor 的 Key），意图降低用户迁移门槛，侧重生态争夺；**NanoClaw** 则在丰富生产力工具（日历、联系人同步），强调实用性。

## 6. 社区热度与成熟度分层
*   **第一梯队：高并发迭代，经历架构阵痛期（成熟度高，体量大）**
    *   *OpenClaw、IronClaw*：正在偿还底层技术债（移除 Engine v2，切换 SQLite）。虽然面临 P0/P1 级别的严重 Bug 阻断，但社区自驱修复能力极强，处于向更高并发模型蜕变的阵痛期。
*   **第二梯队：功能快速扩张，打磨工程化（快速成长期）**
    *   *NanoBot、Hermes Agent、CoPaw*：每日有实质性功能合并（如 OAuth 体系完善、Tauri 迁移、新增渠道），主要精力在填补多模型兼容和系统级 Bug（如 Windows 编码崩溃、Docker 权限挂载）。
*   **第三梯队：单点修复或停滞，面临生存考验**
    *   *NullClaw*：代码层面完全停滞，单一严重 Bug（通道假死）无人响应，面临被社区抛弃的风险。*NanoClaw* 呈现出代码活跃但社区反馈冷漠的割裂感。

## 7. 值得关注的趋势信号
以下信号对 AI Agent 架构师和开发者具有极高的参考价值：
1.  **“长上下文压缩”是当前最大的隐形炸弹**：CoPaw 和 OpenClaw 均暴露出上下文压缩不仅会丢失关键历史，甚至会破坏 Agent 对当前运行环境的认知（如误以为在私聊而非群聊，或将工具输出降级为不可读图片）。**开发者建议**：必须为上下文引入“保护锚点”机制，并对工具返回结果进行严格的类型校验，而非盲目全量压缩。
2.  **MCP (Model Context Protocol) 的规模化管理痛点显现**：随着接入工具变多，MCP 工具 Schema 正在吞噬庞大的 Token 预算（NanoClaw 反映额外开销达 2.7 万 tokens）。**行业趋势**：未来的 Agent 框架必须引入动态工具加载或按需注入 Schema 的机制，而不是每次请求全量下发。
3.  **跨环境部署的脆弱性**：Docker/Podman 的虚拟化挂载和 Windows/非英文环境的编码冲突（GBK/BOM）是大量用户流失的隐形杀手。**开发者建议**：在网关启动和 MCP 调用时，需加入更强壮的沙箱预检、错误包裹和回退重试机制，避免单一工具超时导致整个网关进程被 Kill。
4.  **“防谄媚”与“除劣”成为正式工程学科**：OpenClaw 引入防谄媚压力测试，IronClaw 引入 `/deslop-reborn`（利用多子 Agent 做自动化代码审查与瘦身），这标志着 Agent 项目的质量评估正在从“能不能跑通”向“逻辑是否严谨、输出是否客观”的高级阶段演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-07-04  
**项目仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
- **整体活跃度极高**：NanoBot 在过去 24 小时内保持了惊人的社区热度，Issues 更新达 30 条（28 条活跃），PR 更新高达 38 条。
- **核心聚焦稳定性与兼容性**：开发者与社区贡献者今日重点关注了进程崩溃、网关异常以及底层大模型（如 Anthropic）的 API 兼容性修复。
- **架构持续演进**：在多智能体协作、记忆系统优化以及多渠道（如 Mattermost）接入方面，项目收到了多项高质量的 PR 和 RFC 提案，生态正在迅速扩张。
- **WebUI 移动端体验呼声高涨**：多个 Issues 和 PR 指出当前 WebUI 在移动端的响应式体验不足，社区正积极推动 PWA 化和布局修复。

---

### 2. 版本发布
*今日无新版本 发布。*

---

### 3. 项目进展
今日共有 **6 个 PR 被合并/关闭**，项目在缺陷修复和系统易用性上迈出了坚实的一步：

*   **模型兼容性与默认配置更新**：
    *   PR [#4685](https://github.com/HKUDS/nanobot/pull/4685)：修复了 Anthropic 提供商在调用 `sonnet-5` 时未省略 `temperature` 参数导致 400 错误的问题。
    *   PR [#4687](https://github.com/HKUDS/nanobot/pull/4687)：全面更新了过时的默认模型，将全局默认模型升级至 `claude-sonnet-4-6`，同步更新了文档和测试用例。
*   **OAuth 与鉴权体系完善**：
    *   PR [#4632](https://github.com/HKUDS/nanobot/pull/4632)：新增了 `anthropic_oauth` 提供商，允许 Claude 订阅用户在没有 Console API Key 的情况下直接通过 Token 使用 NanoBot。
*   **WebUI 启动与插件管理优化**：
    *   PR [#4688](https://github.com/HKUDS/nanobot/pull/4688)：引入了一键式的 `nanobot webui` 安全启动器，自动检查 Provider/Model 配置并提供快速引导。
    *   PR [#4396](https://github.com/HKUDS/nanobot/pull/4396) & [#4691](https://github.com/HKUDS/nanobot/pull/4691)：增加了插件化控制流，允许用户按需启用/禁用较重的内置渠道或功能，提升了框架的轻量性。

---

### 4. 社区热点
今日社区讨论最密集的区域集中在**上下文记忆机制**和**多智能体协作**：

1.  **上下文与记忆断层问题**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) 反映了严重的“短期记忆丧失”问题（Agent 丢失多轮对话上下文），引发了大量用户共鸣。同时，Issue [#4307](https://github.com/HKUDS/nanobot/issues/4307) 指出当前的归档逻辑会错误擦除 Agent 的关键回复。
2.  **MCP 工具异常导致崩溃**：Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 报告了 MCP 工具调用异常返回时，NanoBot 进程直接崩溃。这反映了重度接入外部工具的用户对当前容错机制的不满。
3.  **长期记忆模块的重构诉求**：Issue [#4440](https://github.com/HKUDS/nanobot/issues/4440) 提出增加只读的 `search_history` 工具，以解决 `history.jsonl` 未加载进活动上下文导致 Agent 无法回顾历史的问题。该诉求已有对应 PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) 正在积极推进中。

---

### 5. Bug 与稳定性
根据影响范围和严重程度，今日报告的关键缺陷如下：

*   **[P1] 网关/MCP 异常导致进程崩溃**：
    *   Bug: [#4652](https://github.com/HKUDS/nanobot/issues/4652) MCP 工具调用异常导致进程直接死亡。
    *   Bug: [#4302](https://github.com/HKUDS/nanobot/issues/4302) MCP 重连后导致网关层崩溃。
    *   **修复状态**：PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 已提交，通过包装 MCP 结果渲染层、结构化超时和内部取消异常来遏制此问题。
*   **[P1] Windows 环境网关运行不一致**：
    *   Bug: [#4511](https://github.com/HKUDS/nanobot/issues/4511) Windows 下 `--background` 重启后状态不一致。
    *   **修复状态**：PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) 已提交，修复了 Windows 下 `gateway stop` 回退到 `taskkill` 时引发的崩溃。
*   **[P2] Telegram 渠道假死**：
    *   Bug: [#3626](https://github.com/HKUDS/nanobot/issues/3626) 长轮询因网络问题静默挂起，Bot 假死不接收消息。（暂无关联修复 PR）

---

### 6. 功能请求与路线图信号
从活跃的 Issues 和 PR 流向可以看出，NanoBot 下一阶段的演进信号明确指向**Agent 自治与 UI 增强**：

*   **子 Agent 编排与通知聚合 (强信号)**：Issue [#4179](https://github.com/HKUDS/nanobot/issues/4179) 请求原生 Agent-to-Agent (A2A) 编排；Issue [#4279](https://github.com/HKUDS/nanobot/issues/4279) 建议支持聚合 Subagent 的通知，以防 LLM 产生幻觉。
*   **心跳机制与定时任务增强 (强信号)**：Issue [#4431](https://github.com/HKUDS/nanobot/issues/4431) 请求为心跳服务单独指定模型以降低成本；PR [#4620](https://github.com/HKUDS/nanobot/pull/4620) 已经实现了按需触发心跳调试命令。
*   **移动端 WebUI 支持 (强信号)**：Issue [#4479](https://github.com/HKUDS/nanobot/issues/4479) 和 Issue [#4693](https://github.com/HKUDS/nanobot/issues/4693) 强烈呼唤 PWA 支持和移动端布局重构，表明用户越来越倾向于在手机端使用 NanoBot。

---

### 7. 用户反馈摘要
通过对今日评论的提炼，真实用户的痛点和使用场景如下：

*   **场景：重度多轮对话**。痛点：复杂的系统提示词（SOUL.md, USER.md, MEMORY.md）挤压了上下文窗口，导致“失忆”。用户迫切需要更智能的上下文驱逐策略。
*   **场景：IM 多用户共享 Bot**。痛点：当前的 USER.md 和 MEMORY.md 机制难以区分不同 IM 用户（Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744)），Session 级别的记忆隔离方案亟待推出。
*   **场景：Dream 自我学习功能**。痛点：用户抱怨 Dream 系统“饥饿”，经常重复创建已经存在的技能（Skill），无法实现真正的实时学习与平滑迭代（Issue [#4467](https://github.com/HKUDS/nanobot/issues/4467)）。
*   **满意点**：用户对 `nanobot cron` CLI 的功能完备性表示赞赏，但希望这些能力能尽快映射到 WebUI 中。

---

### 8. 待处理积压
以下重要遗留问题/PR 需要维护者投入精力跟进或 Review：

*   **[长期遗留 Bug]** Issue [#3626](https://github.com/HKUDS/nanobot/issues/3626)：Telegram 长轮询静默挂起问题自 5 月初被提出，至今日再次被激活，涉及核心网络重连逻辑，严重影响 Telegram Bot 用户的稳定性。
*   **[待合并 PR 积压]** 今日 PR 活跃度高达 32 个待合并。维护团队需重点关注如：
    *   PR [#4280](https://github.com/HKUDS/nanobot/pull/4280) (修复上下文连续性)
    *   PR [#4621](https://github.com/HKUDS/nanobot/pull/4621) (门控归档事实)
    *   PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) (阻止 Dream 创建重复技能)
    这些 PR 解决了社区当前最关心的记忆与自治问题，建议尽快推进 Review 流程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期**: 2026-07-04  
**数据来源**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 今日速览
- **极高活跃度**：过去 24 小时内，项目迎来了爆发式互动，共产生 **50 条 Issue 更新**（47 条活跃/新开）和 **50 条 PR 更新**（41 条待合并），社区热度达到近期顶峰。
- **修复浪潮**：开发者社群展现出极强的自驱力，针对近两日集中爆发的桌面端、网关和多平台适配问题，迅速提交了大量修复 PR。
- **暂无新版本发布**：今日无新版本释出，但由于积压了大量高质量的待合并 PR，预计在下一个版本发布前将进行密集的代码审查与合并。

---

### 2. 版本发布
**本日无新版本发布。**

---

### 3. 项目进展
今日仓库接收到了高达 41 个全新的待合并 Pull Requests，并有 9 个 PR 被合并或关闭。项目在以下几个关键领域取得了显著进展：

- **多模型鉴权修复**：针对近期变动的 Claude Max OAuth 阻断问题，[PR #57935](https://github.com/NousResearch/hermes-agent/pull/57935) 引入了通过 CLI 回退刷新令牌的机制；[PR #57957](https://github.com/NousResearch/hermes-agent/pull/57957) 修复了 Fallback 提供商忽略显式 `api_mode` 的逻辑漏洞。
- **桌面端与网关性能优化**：[PR #57933](https://github.com/NousResearch/hermes-agent/pull/57933) 将异步 LLM 调用阻塞主循环的轮询时间从 300ms 降至 50ms，大幅缓解了 WebSocket 循环阻塞问题；[PR #57961](https://github.com/NousResearch/hermes-agent/pull/57961) 修复了 Windows 端 `computer_use` 无法发现窗口的异常。
- **安全防护边界加固**：多个 PR 修复了路径遍历与系统文件覆盖风险，例如 [PR #57953](https://github.com/NousResearch/hermes-agent/pull/57953) 为文件系统编辑器增加了写入保护，[PR #57950](https://github.com/NousResearch/hermes-agent/pull/57950) 阻断了 TTS 工具向受保护路径输出的行为。

---

### 4. 社区热点
今日社区讨论最为激烈的 Issues 集中在部署配置障碍以及企业级功能扩展上：

- **Docker Compose 环境变量支持缺失**：[Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188)（评论: 5）。用户反映在 Docker 容器中难以优雅地通过环境变量配置 `hermes model`，文档缺乏指导，导致使用受限。
- **Agent 迁移系统提议**：[Issue #524](https://github.com/NousResearch/hermes-agent/issues/524)（评论: 4）。开发者 @teknium1 提议系统应支持在首次安装时，自动检测并导入 Claude Code、Codex、Cursor 等竞品的 API Key 与配置，以降低新用户的迁移门槛。
- **Hindsight 多库内存路由**：[Issue #31776](https://github.com/NousResearch/hermes-agent/issues/31776)（评论: 4）。用户希望将 Hindsight 内存工具的多记忆库路由能力暴露给 Agent，以实现更复杂的多角色上下文隔离。

---

### 5. Bug 与稳定性
今日新报告了多个高严重性 Bug，社区已迅速响应并提交了部分修复方案。按严重程度排列如下：

#### 🔴 P0 / P1 (高危)
- **Claude Prompt Caching 静默失效导致成本翻倍**：[Issue #57845](https://github.com/NousResearch/hermes-agent/issues/57845) (P0)。在 OpenRouter + Claude 组合下，由于工具调用循环中断点布局错误，导致缓存失效，API 输入成本剧增约 2 倍。
- **Anthropic Max OAuth 交换 404**：[Issue #48534](https://github.com/NousResearch/hermes-agent/issues/48534) (P1)。Anthropic 封锁了 `claude-cli/` 的 User-Agent，导致内置 OAuth 流程在 Token 交换时报错 404。*(已有对应修复尝试方向)*

#### 🟠 P2 (中危)
- **桌面客户端 WebSocket 循环阻塞**：[Issue #57903](https://github.com/NousResearch/hermes-agent/issues/57903)。异步 LLM 调用由于 busy-poll 导致桌面端卡死。*(已由 [PR #57933](https://github.com/NousResearch/hermes-agent/pull/57933) 修复)*
- **Telegram 指令导致文件附件丢失**：[Issue #57928](https://github.com/NousResearch/hermes-agent/issues/57928)。用户在发送 `/steer` 或 `/goal` 时附带文件，文件会被静默丢弃。*(已由 [PR #57946](https://github.com/NousResearch/hermes-agent/pull/57946) 修复)*
- **Dashboard 基础认证崩溃 (500 错误)**：[Issue #57868](https://github.com/NousResearch/hermes-agent/issues/57868)。绑定非本地回环地址时，首次页面加载因密码认证模块崩溃导致 500 错误。*(已由 [PR #57959](https://github.com/NousResearch/hermes-agent/pull/57959) 修复)*
- **Headless MCP OAuth 阻塞网关启动**：[Issue #57836](https://github.com/NousResearch/hermes-agent/issues/57836)。在无头服务器上，过期的缓存令牌会导致网关启动时卡死在 OAuth 发现阶段。需提供复现环境。

---

### 6. 功能请求与路线图信号
从近期 Issues 和 PRs 的交汇点中，可以清晰地看出项目演进的方向：

- **跨平台/跨模型鉴权鲁棒性**：Claude 和 Qwen 的 OAuth 体系近期变动频繁，Hermes 正致力于建立一个更具弹性的鉴权回退机制（结合 CLI 缓存与多端点重试）。
- **企业级通知与事件解耦**：[Issue #49190](https://github.com/NousResearch/hermes-agent/issues/49190) 提议将 Kanban 任务通知泛化为一个通用的事件底座，支持通过注册交付适配器无缝对接多平台（Telegram/Slack 等），这标志着 Hermes 正在向更复杂的团队协作场景演进。
- **Windows/国际化环境兼容性提升**：大量精力被投入解决中文 Windows 环境下的 GBK 编码崩溃问题（[Issue #53428](https://github.com/NousResearch/hermes-agent/issues/53428)），显示项目正在拓展非英语开发者生态。

---

### 7. 用户反馈摘要
通过对评论区的提炼，当前真实用户的核心痛点如下：
- **凭据缓存机制过于死板**：[Issue #57569](https://github.com/NousResearch/hermes-agent/issues/57569) 和 [Issue #57886](https://github.com/NousResearch/hermes-agent/issues/57886) 指出，修改配置后 `auth.json` 依然使用旧凭据，甚至在移除 Provider API Key 后，仍会在后台默默尝试认证。
- **无头/容器化部署体验割裂**：用户反馈在 systemd 或 Docker 环境下，很多在常规 Linux 下正常的控制台指令（如 `hermes model`）无法直接使用，且部分图形化控制面板会误判宿主环境而隐藏更新按钮（[Issue #48594](https://github.com/NousResearch/hermes-agent/issues/48594)）。
- **监控插件静默失败引发困惑**：[Issue #57949](https://github.com/NousResearch/hermes-agent/issues/57949) 表明，当 Langfuse 追踪插件配置了占位符密钥时，系统不报错也不打日志，导致用户误以为可观测性系统正常运转。

---

### 8. 待处理积压
提醒维护团队关注以下长期悬而未决或需排期处理的关键节点：

- **合并巨大的 Fork 冲突解决**：[PR #57962](https://github.com/NousResearch/hermes-agent/pull/57962) 尝试将上游的 5960 个提交合并入 Fork 分支，解决了 67 个文件的冲突。此 PR 标记为 Draft 不可直接合并，但涉及大量核心策略变更，需核心团队关注其衍生影响。
- **CI 安全漏洞修复待合并**：[Issue #30825](https://github.com/NousResearch/hermes-agent/issues/30825) (5月提出) 发现 lint workflow 存在 `head_ref` 脚本注入漏洞。目前 Issue 已关闭，但需确认对应的防护策略是否已全面覆盖所有 GitHub Actions。 
- **待复现的高频崩溃问题**：[Issue #57815](https://github.com/NousResearch/hermes-agent/issues/57815) 报告了 Agent 陷入循环死锁的问题，由于涉及 Cron Job 与模型分配逻辑，目前被标记为 `needs-repro`，急需开发者介入确认是否为调度器层面的根本性回归。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是 **PicoClaw** 项目 2026 年 7 月 4 日的开源项目动态日报。本报告基于过去 24 小时的 GitHub 仓库活动数据生成。

---

### 📊 PicoClaw 项目日报 (2026-07-04)

#### 1. 今日速览
PicoClaw 项目在过去 24 小时内呈现出**极高的开发活跃度**。项目成功发布了全新的 `v0.3.1` 版本，标志着系统的持续迭代与稳定。今日共有 17 个 PR 发生状态更新（12 个待处理/新开，5 个合并或关闭），且活跃开发者 `AMEOBIUS` 集中提交了多项关键通信渠道的重连与稳定性修复。虽然仅有 2 个历史 Issue 产生活跃讨论，但结合代码合并情况来看，项目正处于**功能扩展（如通信渠道接入）与底层稳定性（网络断连恢复）并重的快速收敛期**。

#### 2. 版本发布
*   **[Release] v0.3.1** ([链接](https://github.com/sipeed/picoclaw))
    *   **更新概况**: 新版本合并了多项关键代码，包括 NearAI 提供商的接入 (#2917)、存储锁类型断言修复 (#3053) 等。
    *   **注意**: 当前尚未标注存在破坏性变更，但建议使用旧版本的用户关注后续详细的 Release Notes，确认配置文件的兼容性。

#### 3. 项目进展
今日共有 5 个 PR 被合并或关闭，项目在底层工具调用、异步消息推送和通信网关重构上取得了实质性进展：
*   **[PR #3063] feat: add deltachat gateway (已关闭)**: 关闭了早期的 DeltaChat 网关初版代码，标志着该模块进入重构阶段。
*   **[PR #3142] fix(spawn): prevent duplicate messages (已关闭)**: 修复了异步子 Agent 完成执行时，因 `ForUser` 字段未清除导致的重复消息推送问题，提升了多 Agent 协作的稳定性。
*   **[PR #3128] fix(web): ignore resp.Body.Close() errors (已关闭)**: 清理了 Bing、Tavily 等四个搜索引擎集成工具中的无效错误处理，提高了 Web 检索工具的代码健壮性。
*   **[PR #3156] feat(pico): emit per-turn LLM token usage (已关闭)**: 完善了 Pico 渠道的 Token 用量追踪机制，使得下游能够精确统计单次对话的输入/输出计费 Token 数。
*   **[PR #3223] fix(agent): clear routed agent session (已关闭)**: 为优化路由 Agent 的会话清理逻辑让路，被作者主动关闭并转移至新 PR (#3224)。

#### 4. 社区热点
目前社区反馈最集中的领域在于**移动端适配与即时通信渠道的连通性**。
*   **[Issue #3182] [BUG] Android version 无法启动服务** ([链接](https://github.com/sipeed/picoclaw/issues/3182))
    *   **分析**: 用户反馈在 Android 环境下无法更改路径且无法启动后台服务。这反映了重度移动端用户希望在手机本地运行 PicoClaw 的强烈诉求。
*   **[Issue #3178] [BUG] WhatsApp Websocket Timeout** ([链接](https://github.com/sipeed/picoclaw/issues/3178))
    *   **分析**: 用户在使用 Docker 部署接入 WhatsApp 渠道时遇到 Websocket 超时。说明在容器化环境下长连接维持存在痛点，该问题直接催生了今日多个相关的修复 PR。

#### 5. Bug 与稳定性
今日开发者集中火力解决了多平台消息渠道的**网络断线重连**问题，大幅提升了系统的整体稳定性。
*   🔴 **严重 - WhatsApp 长连接静默断开**
    *   **问题**: 连接 2-3 天后会静默断开且永不重连。
    *   **修复**: 已提交 [PR #3220](https://github.com/sipeed/picoclaw/pull/3220) 和 [PR #3179](https://github.com/sipeed/picoclaw/pull/3179)，引入了指数退避重连机制与异步消息分发。
*   🟠 **高危 - Matrix 同步循环死锁**
    *   **问题**: 任何网络波动或服务器重启都会导致 Matrix 同步协程永久退出，且无法触发系统级重启。
    *   **修复**: 已提交 [PR #3219](https://github.com/sipeed/picoclaw/pull/3219)，增加了带退避机制的 SyncWithContext 包装器。
*   🟡 **中等 - 配置文件迁移阻塞**
    *   **问题**: v2 迁移至 v3 时，因校验器缺失 `build_info` 字段导致迁移失败报错。
    *   **修复**: 已提交 [PR #3218](https://github.com/sipeed/picoclaw/pull/3218)。
*   🟡 **中等 - 路由 Agent 会话清理错乱**
    *   **问题**: 多 Agent 环境下发送 `/clear` 命令，错误地清除了默认 Agent 而非当前路由 Agent。
    *   **修复**: 已提交 [PR #3224](https://github.com/sipeed/picoclaw/pull/3224)。
*   🟢 **轻微 - 回归测试报错**
    *   **问题**: #3158 引入的沙盒文件系统测试出现日志导入错误。
    *   **修复**: 已提交撤销请求 [PR #3221](https://github.com/sipeed/picoclaw/pull/3221)。

#### 6. 功能请求与路线图信号
根据最新的 PR 动态，项目正沿着**多平台接入、企业级权限管控与多模型容错**的路线图快速推进：
*   **多 Agent 协同通信**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 提出了一等公民级别的内部 Agent 协作总线，包含独立信箱与状态投递。若合并，将大幅提升复杂任务的拆解处理能力。
*   **企业级 IM 渠道扩展**: 
    *   DeltaChat 重构：[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 删除了 320 行冗余代码并强化了安全性。
    *   Simplex 渠道接入：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) 新增了注重隐私的 Simplex 聊天支持。
*   **Discord 权限隔离**: [PR #3217](https://github.com/sipeed/picoclaw/pull/3217) 引入了基于 `allow_roles` 的 RBAC 控制，满足 Discord 社区精细化运营需求。
*   **模型容灾与回退**: [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) 支持在 Web UI 配置默认模型的降级回退链，保障在极端大模型 API 宕机时的服务可用性。

#### 7. 用户反馈摘要
*   **痛点：网络环境敏感**: 大量针对 WhatsApp、Matrix 的修复 PR 表明，用户在复杂或受限的网络环境下（如各地机房、家庭宽带 NAT 超时）部署 PicoClaw 作为 IM 机器人时，长连接极易断开。
*   **痛点：移动端生态缺失**: Android 端的 Issue 反映出部分非技术背景的用户希望有更友好的移动端原生日志展示和路径配置方案。
*   **关注点：模型计费与审计**: 代码库中增加了对单轮对话 Token 用量的精确推送（#3156）以及大模型降级链配置（#3200），说明企业及重度用户对**成本控制**和**服务高可用**有着强烈的诉求。

#### 8. 待处理积压
*   ⚠️ **[Issue #3182] Android 服务启动失败** ([链接](https://github.com/sipeed/picoclaw/issues/3182)): 标记为 `stale` 且有 2 条评论。移动端问题积压可能会流失个人开发者用户，建议维护者介入确认是否为系统权限引发的通病。
*   ⚠️ **[PR #2937] Feat/agent collaboration** ([链接](https://github.com/sipeed/picoclaw/pull/2937)): 这是一个超过 1 个月的大型架构级 PR（Agent 协作总线）。此类涉及核心调度的改动容易引发冲突，建议维护团队尽快安排 Code Review 或明确标识是否推迟到 v0.4 规划中。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份报告为您梳理了 NanoClaw（AI 智能体与个人 AI 助手框架）在 2026-07-04 的 GitHub 开发者动态。通过对过去 24 小时的数据进行深度分析，项目当前呈现出“开发极度过热、但社区议题略显滞后”的典型“长尾迭代期”特征。

---

### 1. 今日速览
* **整体活跃度：** 今日项目呈现出极高的代码贡献活跃度，过去 24 小时内共有 **20 条 PR 动态**，其中 18 条处于待合并状态。
* **社区温度：** 相比代码端的热火朝天， Issues 讨论区相对冷清，仅新增/活跃 1 条缺陷反馈，且过去一天无任何新版本发布。
* **开发重心：** 今日的 PR 动态集中在跨平台通讯适配器的缺陷修复、容器化运行环境的安全性与稳定性增强，以及全新工具技能的扩展。

### 2. 版本发布
**今日无新版本发布。**

### 3. 项目进展
今日项目共有 **2 条 PR 被合并或关闭**，主要推进了网络代理与代码工程化方面的进展：
* 🔒 **[PR #2330](https://github.com/nanocoai/nanoclaw/pull/2330) [CLOSED]**：修复了容器内基于 `axios` 的 MCP 服务器无法通过 OneCLI 的 CONNECT-only 网关正常工作的网络代理问题（被拒绝返回 HTTP 400），这修复了底层鉴权注入失败的核心 Bug。
* 🛠️ **[PR #2765](https://github.com/nanocoai/nanoclaw/pull/2765) [CLOSED]**：针对代码格式化检查（format-lint）引入了 `.format-lint-off` 忽略机制，推进了项目工程化的灵活度。

### 4. 社区热点
今日社区活跃度最高的是围绕模型调度成本的探讨：
* 💬 **[Issue #2917: Local model as primary agents pay full MCP tool-schema token cost...](https://github.com/nanocoai/nanoclaw/issues/2917)**
  * **背后诉求：** 用户 `cappuccinowholemilk-stack` 反馈，当将主调度模型从 Claude 切换为本地大模型（如 Gemma4:31B）时，系统仍会在每次请求中下发完整的 MCP 工具 schema（在实测中高达 2.7 万 tokens 的额外开销）。用户强烈呼吁底层重构上下文传输策略，这对于希望利用 NanoClaw 进行“本地+云端”低成本混合部署的开发者而言是一个核心痛点。

### 5. Bug 与稳定性
今日报告和更新的 Bug 修复主要围绕**消息路由、容器挂载与会话状态**，按严重程度排列如下：
* 🔴 **高危/资源泄漏：[PR #2920](https://github.com/nanocoai/nanoclaw/pull/2920)** 修复了 `container-restart.ts` 中的数据库连接泄漏（文件句柄未关闭），同时修复了过期文档和重复脚本问题。
* 🔴 **高危/数据丢失：[PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694)** 修复了 Signal 适配器的一个致命问题：入站私信（DM）由于未正确设置 `isMention/isGroup` 属性，导致被路由器静默丢弃。
* 🟠 **中危/交互错误：[PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184)** 修复了 Claude Code 会话过期时，错误信息直接作为聊天消息发送给用户的问题，现在将进行静默重试。
* 🟠 **中危/多渠道通讯阻断：**
  * **[PR #2695](https://github.com/nanocoai/nanoclaw/pull/2695)**：Signal 入站图片附件因路径不匹配导致容器无法读取（已提交 base64 暂存修复方案）。
  * **[PR #2348](https://github.com/nanocoai/nanoclaw/pull/2348)**：WhatsApp 渠道的单计时器重连与纯净销毁机制修复。
* 🟡 **低危/安全与权限：**
  * **[PR #2230](https://github.com/nanocoai/nanoclaw/pull/2230)**：在无根 Podman 环境下通过 `keep-id` 映射宿主机用户。
  * **[PR #2349](https://github.com/nanocoai/nanoclaw/pull/2349)**：对缺失 `path` 字段的挂载白名单条目增加容忍度。

### 6. 功能请求与路线图信号
从当前活跃的待合并 PR 中，可以看出项目正强烈向**“工具生态化”**与**“跨平台渠道拓展”**演进：
* 🌟 **新增通讯渠道：[PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918)** 带来了原生 LINE Official Account（LINE 官方账号）渠道适配，极大拓宽了在亚洲市场的助理触达能力。
* 🌟 **生产力工具集成：**
  * **[PR #2693](https://github.com/nanocoai/nanoclaw/pull/2693)**：引入 `/add-google-contacts-tool`（谷歌联系人同步）。
  * **[PR #2530](https://github.com/nanocoai/nanoclaw/pull/2530)**：引入 `/add-caldav-tool`（日历同步）。
  * **[PR #2863](https://github.com/nanocoai/nanoclaw/pull/2863)**：引入 `/setup-system-digest` 系统摘要技能。
* 🛠️ **底层能力升级：[PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208)** 尝试让 MCP 服务器支持 HTTP 和 SSE 传输层，如果此 PR 合并，将大幅降低分布式 MCP 节点的接入门槛。

### 7. 用户反馈摘要
从今日的代码合并与 Bug 反馈中提炼用户的真实痛点：
1. **本地化部署的成本焦虑：** 用户尝试将本地模型作为主要 Agent 时，不满于网络层将庞大的工具描述原封不动下发给本地模型导致的显存与算力浪费。
2. **多渠道消息的“黑洞”体验：** 用户在整合 WhatsApp、Signal 等第三方通讯协议时，经常面临“消息发了但没反应”、“图片打不开”的状况，根因多在于容器隔离机制和属性标记缺失。
3. **Docker / Podman 虚拟化挂载痛点：** 多位贡献者（`CutSnake01`, `cfis`）针对宿主机与容器的目录映射（如废弃的 global mount）、以及全局指令文件（CLAUDE.md）被系统反复删除等问题提交了修复，说明社区重度依赖容器化隔离部署，且现有机制曾存在生命周期管理缺陷。

### 8. 待处理积压
*提醒官方维护者重点关注以下积压任务：*
* 📌 **[PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184)**：由 `cfis` 于 5 月 2 日提交，积压长达 2 个月，针对长会话过期引发的前端报错提供了完善的重试方案。
* 📌 **[PR #2348](https://github.com/nanocoai/nanoclaw/pull/2348)** 与 **[PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208)**：同样是 5 月初提交的基础设施级 PR，分别涉及 WhatsApp 重连和 MCP 传输协议扩展，对生态影响深远，急需 Code Review 并入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**报告日期**: 2026-07-04  
**数据来源**: [NullClaw GitHub 仓库](https://github.com/nullclaw/nullclaw)

---

### 1. 今日速览
过去 24 小时内，NullClaw 项目整体活跃度处于低位，无新版本发布，也无任何代码变更。项目当前的核心焦点集中在单一已开放的 Bug 报告上，涉及 Telegram 渠道的连接稳定性问题。社区互动保持基础运转，但整体代码研发推进处于停滞或静默期。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
*今日无已合并或关闭的 Pull Request。*
当前代码库未发生任何变动，项目在过去一天内没有向前推进实质性的功能迭代或代码级修复。这为维护者提供了一个审视当前社区反馈（特别是稳定性 Bug）的窗口期。

---

### 4. 社区热点
今日社区唯一的讨论热点集中在一个已持续数天的 Bug 报告上：
*   **Issue #972: [bug] telegram channel stop respond after some idle time** ([链接](https://github.com/nullclaw/nullclaw/issues/972))
    *   **热度数据**: 评论 1 条，点赞 0 个。
    *   **诉求分析**: 用户对 NullClaw 在即时通讯平台（如 Telegram）上的长时间托管运行能力有较高要求。该讨论反映出社区期望 AI 智能体在云端服务器（如 AWS EC2）上具备真正的“7x24 小时无人值守”的高可用性。

---

### 5. Bug 与稳定性
今日项目面临的最突出的稳定性问题如下：

*   **🔴 [严重] Telegram 渠道在闲置后停止响应** ([Issue #972](https://github.com/nullclaw/nullclaw/issues/972))
    *   **现象**: 智能体在闲置一晚或更长时间后，第二天早上在 Telegram 渠道停止对外部请求作出响应。
    *   **系统表现**: 尽管前端通道卡死，但后端核心服务似乎仍正常运行（日志显示后端能成功处理 `nullclaw agent -m "ping"` 命令，且内存解析计划运转正常：`backend=hybrid retrieval=keyword`）。
    *   **修复状态**: **暂无对应的 fix PR 提交**。该问题大概率指向前端通道长连接断开、心跳保活机制失效，或是会话状态同步的上下文遗失。

---

### 6. 功能请求与路线图信号
*今日无新增的明确功能请求。*
但从 Issue #972 的日志中可以捕捉到一个隐含的架构信号：NullClaw 当前的内存与检索规划模块（`memory plan resolved`）已具备复杂的动态调配能力（支持 hybrid backend, keyword retrieval 等模式）。未来路线图中，为保障这些复杂后端逻辑的稳定运行，加强各集成渠道（如 Telegram）的网关监控与连接自愈机制应成为重点。

---

### 7. 用户反馈摘要
通过提炼 Issue #972，我们总结出以下真实用户反馈：
*   **使用场景**: 部署在云服务器（如 AWS EC2）上，作为全天候个人 AI 助手或群组智能体接入 Telegram 使用。
*   **用户痛点**: 智能体在长时间无交互（Idle）后的恢复能力极差。用户反馈前端“假死”与后端“存活”的不一致性带来了极大的运维困惑，严重影响了将其作为可靠的个人长期助手的体验。
*   **评价反馈**: 用户对 NullClaw 的后端记忆架构（Memory/Retrieval Plan）的运行表现较为满意，但对前端通信通道的鲁棒性（特别是闲置挂起问题）感到沮丧。

---

### 8. 待处理积压
请项目维护者重点关注以下处于 OPEN 状态的积压问题：
*   **Issue #972 ([链接](https://github.com/nullclaw/nullclaw/issues/972))**: 自 2026-06-30 创建以来已过去 4 天，尽管报告者提供了详尽的复现步骤和后端日志，但目前仍无代码层面的修复（PR）介入。考虑到此类“闲置断连”问题将严重打击常驻型 AI 助手用户的核心体验，建议维护团队尽快介入排查通道保活或重连逻辑。

---
*分析师结语*: NullClaw 目前的后端记忆与规划能力展现出了较高的技术完成度，但前端通道的边缘稳定性问题正在成为木桶的短板。建议项目在冲刺新功能前，优先补充通信层的错误重试与心跳保活机制。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-07-04)**

作为专注于 AI 智能体与个人 AI 助手领域的开源项目，IronClaw 今日展现了极高的工程活跃度。项目正处于重大架构演进的深水区，以下是基于过去 24 小时 GitHub 数据的分析报告。

### 1. 今日速览
IronClaw 今日保持了极高的开发热度，共产生 **34 条 Issue 更新**（新开/活跃 29 条，关闭 5 条）以及 **50 条 PR 更新**（待合并 26 条，已合并/关闭 24 条）。项目核心正处于 **"Reborn" 架构重构**的冲刺阶段，开发团队不仅合并了移除旧版 Engine v2 的史诗级 PR，还投入大量精力在身份验证、权限管控和 CI/CD 流水线的稳定性上。整体来看，项目在快速迭代的同 时，正在通过密集的测试覆盖和“De-slop（代码瘦身/除劣）”操作来巩固系统底座。

### 2. 版本发布
*今日（过去24小时内）官方 GitHub Releases 无新版本发布。*

### 3. 项目进展
今日项目取得了一系列突破性进展，标志着底层架构的重大交替：
*   **彻底移除 Engine v2：** 核心维护者 ilblackdragon 提交的史诗级 PR [PR #5545](https://github.com/nearai/ironclaw/pull/5545) 已合并。该项目移除了 171 个相关文件，标志着旧版引擎彻底被全新的 **Reborn 运行时/智能体循环栈**取代。
*   **CI/CD 与流水线修复：** 随着 Engine v2 的移除，CI 出现了多处断裂。BenKurrek 和 think-in-universe 迅速跟进并合并了修复，包括重构 Wasmtime/WASI 编译路径（[PR #5601](https://github.com/nearai/ironclaw/pull/5601)）和稳定 Clippy/Coverage 检查（[PR #5591](https://github.com/nearai/ironclaw/pull/5591)）。引入了分布式 sccache 以加速编译（[PR #5599](https://github.com/nearai/ironclaw/pull/5599)）。
*   **测试覆盖率大幅提升：** 核心贡献者 henrypark133 提交并合并了 Reborn 后端集成测试的第 3 波和第 4 波覆盖矩阵（[PR #5584](https://github.com/nearai/ironclaw/pull/5584)），重点强化了多用户隔离、触发器和边缘拒绝合约。

### 4. 社区热点
当前社区（含核心开发组）的讨论焦点完全集中在 **Reborn 架构的深度打磨** 上：
*   **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067) [TEST] Reborn: Add vertical-slice integration test suite** (评论数: 33)：这是今日讨论最激烈的帖子。开发者 serrrfirat 正在主导建立针对 Reborn 栈的端到端集成测试基线，以确保通过公共入口点调用时的可靠性。这表明团队极其看重重构后的系统健壮性。
*   **OAuth 与身份系统重构：** ilblackdragon 和 BenKurrek 正在重构 Slack 等渠道的接入方式，彻底废弃旧的 pairing-code（配对码）流程（[PR #5604](https://github.com/nearai/ironclaw/pull/5604)）。

### 5. Bug 与稳定性
今日报告了多个影响 Reborn 日常运行的 Bug，其中身份和权限管理是重灾区：
*   **[严重] 身份解析孤儿节点与 Principal 分裂风险：** ilblackdragon 报告了多个底层风险，包括跨进程登录导致用户身份分裂（[Issue #5614](https://github.com/nearai/ironclaw/issues/5614)），以及 `adopt_migrated_identity` 不写入完整用户记录导致产生“幽灵用户”（[Issue #5616](https://github.com/nearai/ironclaw/issues/5616)）。目前暂无对应 fix PR。
*   **[严重] Slack 渠道缺陷：** 用户 matiasbenary 报告无法从聊天中连接 Slack，代理提示已连接但实际返回链接/配对码而不是完成验证（[Issue #5602](https://github.com/nearai/ironclaw/issues/5602)）。与此相关，QA 发现 Reborn 例行任务因缺少 Slack DM 读取能力而持续失败（[Issue #5522](https://github.com/nearai/ironclaw/issues/5522)）。
*   **[中等] 模型幻觉与能力降级处理不当：** 当模型幻觉调用一个被禁用的工具（如 `spawn_subagent`）时，网关会直接拒绝并使整个运行状态变为 `Failed`，而不是给模型一个可见的“拒绝”反馈让其重试（[Issue #5583](https://github.com/nearai/ironclaw/issues/5583)）。

### 6. 功能请求与路线图信号
*   **De-Slop（代码除劣）自动化指令：** ilblackdragon 引入了一个全新的开发工作流 `/deslop-reborn`（[PR #5612](https://github.com/nearai/ironclaw/pull/5612)）。这是一个并行调用 4 个子智能体（热核质量、偏执架构师、接口/不变量、测试覆盖）的代码审查与清理命令。这预示着项目正在利用 AI 自动化手段来提升代码质量天花板。
*   **响应式 UI 改进：** 新贡献者 Kampouse 提交了针对移动端优化的大模型 Provider 列表下拉菜单（[PR #5611](https://github.com/nearai/ironclaw/pull/5611)），说明项目开始关注个人助手在移动端 WebUI 的用户体验。
*   **细粒度预算控制：** 开发者正致力于将基于成本的预算整合到 Reborn 的资源管理器中（[Issue #3141](https://github.com/nearai/ironclaw/issues/3141)），这是 AI Agent 控制运行成本的关键路线图特性。

### 7. 用户反馈摘要
从 QA 团队和真实用户的反馈来看，痛点高度集中在 **复杂工具集成的脆弱性** 和 **错误恢复能力** 上：
*   **死锁与无响应：** QA 指出，当例程失败时，由于显示 "No thread attached"（[Issue #5507](https://github.com/nearai/ironclaw/issues/5507)），用户和开发者完全丧失了调试能力。同时，陈旧的例程无法删除，只能通过“完全重启”来清理，造成极差的使用体验（[Issue #5510](https://github.com/nearai/ironclaw/issues/5510)）。
*   **记忆机制的缺失：** henrypark133 发现 Reborn 的记忆提示词上下文注入机制在 生产环境中根本未接线，导致硬核的记忆清洗与防提示词注入逻辑成了毫无作用的死代码（[Issue #5605](https://github.com/nearai/ironclaw/issues/5605)），这严重影响了个人 AI 助手的长期记忆连贯性。

### 8. 待处理积压
*   **核心底层重构延期：** 针对 Reborn 系统的 HTTP 凭据注入保留机制（[Issue #3068](https://github.com/nearai/ironclaw/issues/3068)）和取消语义的定义（[Issue #3238](https://github.com/nearai/ironclaw/issues/3238)）已被标记为 `P0`/`P1` 并积压了近两个月。这些底层契约的缺失可能是导致上层 retry 逻辑失效（如 [Issue #5608](https://github.com/nearai/ironclaw/issues/5608)）的根因，强烈建议核心团队优先清理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 LobsterAI 项目 2026-07-04 的动态日报：

# 🦞 LobsterAI 项目动态日报 (2026-07-04)

## 1. 今日速览
LobsterAI 在过去 24 小时内展现出极高的研发活跃度，项目处于**高速迭代与稳步推进期**。今日项目成功发布了 `2026.7.3` 新版本，并伴随着高达 14 个 PR 的合并与 2 个 PR 的更新，核心开发团队（如 liuzhq1986, btc69m979y-dotcom, fisherdaddy）在多智能体协作、底层 OpenClaw 网关集成及全局 UI/UX 优化上取得了显著进展。整体代码吞吐量巨大，且大部分围绕新特性的快速落地与稳定性修复，项目健康度优秀。

## 2. 版本发布
- **LobsterAI 2026.7.3** ([发布链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.3))
  - **核心更新**：
    - **服务部署架构升级**：引入了全新的服务部署能力 (PR [#2238](https://github.com/netease-youdao/LobsterAI/pull/2238))。
    - **多智能体目标导向**：为 Cowork（协作）模块新增了目标模式 (Goal Mode) (PR [#2241](https://github.com/netease-youdao/LobsterAI/pull/2241))。
    - **产物面板增强**：新增了 Subagent Artifact Panel，优化了多智能体执行结果的展示 (PR [#2241](https://github.com/netease-youdao/LobsterAI/pull/2241))。

## 3. 项目进展
今日合并/关闭了 14 个重要 PR，标志着项目在**协作模式、大体积会话性能优化及 UI 适配**方面迈出了一大步：
- **多智能体底座强化**：将发布分支合并回主分支，正式确立了 Cowork Goal Mode 的核心地位，包含了 OpenClaw RPC 集成与恢复机制的改进 (PR [#2270](https://github.com/netease-youdao/LobsterAI/pull/2270))。同时，实现了从 OpenClaw 网关同步频道会话模型覆盖（PR [#2267](https://github.com/netease-youdao/LobsterAI/pull/2267)）。
- **性能与诊断工具突破**：大幅优化了包含大量工具调用的大型会话的渲染性能（将折叠的工具结果格式化体积从 64K 降至 16K），并在分享菜单中新增了原生诊断 ZIP 包导出功能 (PR [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264))。
- **系统提示词与工作区解耦**：分离了任务 `cwd` 与 Agent workspace 的系统提示词角色，提升了多任务环境隔离的严谨性 (PR [#2260](https://github.com/netease-youdao/LobsterAI/pull/2260))。
- **UI/UX 适配与打磨**：优化了字体大小与设置 UI (PR [#2263](https://github.com/netease-youdao/LobsterAI/pull/2263))，并在窄宽度下紧凑显示了提示词工具栏 (PR [#2242](https://github.com/netease-youdao/LobsterAI/pull/2242))。

## 4. 社区热点
今日社区互动主要体现在长期未处理的陈旧功能增强请求被重新激活：
- **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) [stale]**：针对钉钉、飞书、QQ 等 IM 平台多实例功能的重复校验。这反映了重度用户在将 LobsterAI 接入企业内部通讯矩阵时，对**实例管理的健壮性**有强烈诉求。
- **[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353) [stale]**：Agent 技能选择器全选与清除功能。反映了随着 Agent 技能增多，用户在进行复杂配置时遭遇了效率瓶颈。

## 5. Bug 与稳定性
今日开发团队集中火力修复了多个导致 UI 卡顿、黑屏及逻辑冲突的 Bug，目前均已有对应的 fix PR 并被合并：
- **高严重度**：
  - **macOS 黑屏问题**：修复了关闭 macOS 全屏应用时触发系统托盘行为导致的黑屏崩溃 (PR [#2246](https://github.com/netease-youdao/LobsterAI/pull/2246))。
  - **文件锁冲突**：修复了 OpenClaw 运行生命周期未结束就发送恢复指令导致的会话文件锁冲突问题 (PR [#2247](https://github.com/netease-youdao/LobsterAI/pull/2247))。
- **中/低严重度**：
  - **UI 状态卡死**：修复了聊天发生错误时上下文维护状态未被清除，导致 UI 卡在“整理/压缩”状态的问题 (PR [#2266](https://github.com/netease-youdao/LobsterAI/pull/2266))。
  - **部署弹窗布局**：修复了分享部署时内容滚动导致头部和底部布局被压缩的问题 (PR [#2265](https://github.com/netease-youdao/LobsterAI/pull/2265))。
  - **时间戳显示异常**：修复了 SQLite 读取导致的 Subagent 面板时间戳展示错误 (PR [#2261](https://github.com/netease-youdao/LobsterAI/pull/2261))。

## 6. 功能请求与路线图信号
从最近的代码动向可以描绘出 LobsterAI 下一步的**路线图信号**：
- **OpenClaw 深度集成**：OpenClaw 作为底层数据与运行网关，正在被深度整合。同步模型覆盖、上下文维护和 cwd 隔离表明项目正努力支撑**更庞大、更持久的复杂多智能体自主任务**。
- **企业级容错与诊断**：新增的诊断包导出 (Diagnostics package ZIP) 以及对错误降级处理的优化，暗示项目正在为企业级排障和 B 端落地做准备。
- **外部 IM 渠道融合**：IM 会话同步与实例校验的推进，表明 LobsterAI 有意成为横跨桌面端与各大办公 IM（飞书、钉钉）的**统一 AI 工作台**。

## 7. 用户反馈摘要
- **痛点**：随着多智能体复杂任务的增加，大体积会话的渲染卡顿曾是用户的明显痛点（今日已修复）；在复杂网络或底层模型超时情况下，UI 无法给出正确的反馈，容易让用户产生“应用未响应”的错觉。
- **场景**：用户高频使用自定义 MCP 页面及 Agent 技能编排（如配置多个 IM 机器人实例），但由于弹窗设计未考虑到长服务名或多实例并发，体验略显局促（Issue #1422）。
- **满意度**：官方对 UI 窄屏适配的快速响应（紧凑工具栏、目标菜单提示优化）以及对 macOS 黑屏等核心体验 Bug 的迅速修复，体现了团队对打磨用户体验的重视。

## 8. 待处理积压
以下是长期处于 Open/Stale 状态但具备较高价值的项目，建议维护者重点关注并纳入近期的 Review 计划：
- ⚠️ **[Issue #1422](https://github.com/netease-youdao/LobsterAI/Issue/1422) [CLOSED/stale]**：MCP 自定义页面服务名称过长时展示不友好（注：此 Issue 已在今日关闭，但在 4 月创建后停滞了 3 个月，需警惕类似 UI 细节问题的积压）。
- ⚠️ **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) [OPEN/stale]**：IM 实例重复校验。该 PR 解决了潜在的机器人消息重复处理冲突，对生产环境极为关键，建议尽快安排 Code Review 并入主分支。
- ⚠️ **[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353) [OPEN/stale]**：Agent 技能全选/清除器。改动范围小（仅两个文件），能大幅提升配置体验，属于低风险高收益的社区贡献，建议予以合并。

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
**日期**: 2026-07-04 | **分析周期**: 过去 24 小时

---

### 1. 📈 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目保持了**极高的社区活跃度与迭代速度**。共处理了 40 条 Issue 更新（其中新开/活跃 14 条，关闭 26 条）以及 32 条 PR 更新（合并/关闭 13 条，待合并 19 条）。项目的推进重点明显向 **v2.0 架构演进**倾斜，开发者们正集中精力解决 v2.0 Beta 版本带来的上下文记忆、Runtime 工具调用以及前端架构适配等核心问题。尽管没有发布新的正式 Release，但通过高频的代码合并，项目在系统稳定性、多渠道接入和本地化体验上取得了实质性进展。

---

### 2. 🚀 版本发布
**本日无新版本发布。** 
*注：当前主分支正在为 `v2.0` 正式版做密集冲刺，大量 PR 集中在 `2.0.0b` 系列的 Bug 修复与架构重构上。*

---

### 3. 🛠 项目进展
今日合入与关闭的 PR 有效提升了系统的健壮性与代码质量，整体项目在**容错处理与生态兼容**方面迈出坚实一步：

*   **Runtime 2.0 核心机制修复**：
    *   [PR #5761](https://github.com/agentscope-ai/QwenPaw/pull/5761)：修复了格式错误的 `tool_call.input` 导致模型陷入无限重复执行同一工具的死循环问题。
    *   [PR #1780](https://github.com/agentscope-ai/QwenPaw/pull/1780)：修复了 BGE-M3 Embedding 字段不匹配导致的崩溃问题。
*   **前端架构重构与体验优化**：
    *   [PR #5754](https://github.com/agentscope-ai/QwenPaw/pull/5754)：统一了会话列表组件，区分 Drawer 与 Sidebar 模式，精简了前端代码逻辑。
    *   [PR #5755](https://github.com/agentscope-ai/QwenPaw/pull/5755)：提升了 Pydantic 验证的容错率，现在单个 MCP 客户端的错误配置不再会导致整个 Agent 配置接口 (`GET /api/agents`) 的 500 报错。
*   **CI/CD 自动化能力扩充**：
    *   [PR #5736](https://github.com/agentscope-ai/QwenPaw/pull/5736)：引入了基于 GitHub Actions 的 QwenPaw AI 代码审查机器人。

---

### 4. 🔥 社区热点
本日讨论度最高的问题反映了用户在**复杂任务执行与多 Agent 演进**中的痛点：

*   **[Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) (评论: 4)**：**2.0 Beta 上下文压缩导致“失忆”**。用户反馈在执行耗时任务（如 Heartbeat）时，`scroll` 策略错误折叠了当前任务上下文，导致 Agent 突然回复很久以前的旧消息。**（注：该问题已被 [PR #5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) 修复）**
*   **[Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) (评论: 6)**：**密钥脱敏与安全存储**。深度技术探讨，用户排查源码后指出目前的日志系统（dialog/ReMe）未对 API Key 等敏感信息进行脱敏，存在严重的安全隐患，呼吁加强环境变量回退覆盖与日志清洗。
*   **[Issue #5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) (评论: 2)**：**Console 架构瓶颈**。开发者指出，目前 Console 底层依赖的 SDK 采用“单会话 pull”模型，严重阻碍了 QwenPaw 向多 Agent、多工作空间并行处理方向的演进。

---

### 5. 🐞 Bug 与稳定性
今日报告的 Bug 集中在 v2.0 Beta 及重负载场景下，按严重程度排序如下：

*   **🔴 P0 级别 (功能性阻断/崩溃)**：
    *   **API 路径双重拼接 404** ([Issue #5769](https://github.com/agentscope-ai/QwenPaw/issues/5769))：`v2.0.0b2` 控制台前端持续报错 404，因双重 `/api` 前缀导致，严重影响前端加载。
    *   **重型任务卡死中断** ([Issue #5763](https://github.com/agentscope-ai/QwenPaw/issues/5763))：最新版本执行重型自动化任务时经常无故卡死中断。
    *   **插件删除不彻底** ([Issue #5689](https://github.com/agentscope-ai/QwenPaw/issues/5689))：卸载 Remote SSH 插件后，对话直接报错 `ModuleNotFoundError`。
*   **🟠 P1 级别 (效率与体验受损)**：
    *   **计划模式无限读文件** ([Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759))：Agent 在 Plan Mode 下对同一未修改文件（如 `extract_reports.py`）连续读取 5 次，造成 token 极大浪费。
    *   **群聊渠道感知错乱** ([Issue #5710](https://github.com/agentscope-ai/QwenPaw/issues/5710))：上下文压缩丢失“保护锚点”，导致 Agent 压缩后忘记自己在飞书群内，误以为在私聊，产生不合时宜的回复。

---

### 6. 🗺 功能请求与路线图信号
结合 Issue 诉求与现有 PR 动态，以下是下一阶段可能落地的特性路线图：

*   **桌面端技术栈全面切换 Tauri**：[PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) 正在将桌面端发布流水线迁移至 Tauri，未来 CoPaw 桌面端将拥有更小的体积与更好的跨平台性能。
*   **企业级协作平台无缝接入**：[PR #5762](https://github.com/agentscope-ai/QwenPaw/pull/5762) 新增了 `azure_bot` 渠道，未来可通过统一 Webhook 支持 Teams, Slack, Telegram 等主流平台。
*   **自定义模型协议放宽**：[Issue #5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) 用户呼吁支持非 `/v1/chat/completions` 的接口（如图片生成接口），这表明项目未来可能会解耦模型协议绑定，支持多模态原生 API。
*   **MCP 环境变量与用户态权限传递**：[Issue #5547](https://github.com/agentscope-ai/QwenPaw/issues/5547) 揭示了企业用户将 QwenPaw 作为服务端时，需要将业务系统的 `sessionId` 传递给 MCP Tool 做鉴权的强诉求。

---

### 7. 🗣 用户反馈摘要
提炼近期的开发者与用户反馈，QwenPaw 在实际落地中呈现以下画像：

*   **👍 满意点**：基于 Pydantic 的配置体系、开放的多渠道（钉钉、飞书、iMessage）支持、以及 v2.0 尝试引入的插件市场，让其在构建个人/企业 AI 助理时极具吸引力。
*   **😒 痛点与抱怨**：
    *   **Windows 兼容性遗留**：Windows 环境下的 GBK 编码问题依然困扰着大量国内用户，零散的补丁未能从系统级解决 Subprocess 的编码冲突 ([Issue #4481](https://github.com/agentscope-ai/QwenPaw/issues/4481))。
    *   **思维链展示缺陷**：接入第三方模型（如通过 newapi 转发的 GLM-5.1）时，控制台无法正常展示 Reasoning Chain ([Issue #4650](https://github.com/agentscope-ai/QwenPaw/issues/4650))。
    *   **MCP 生态的脆弱性**：用户反馈接入不同来源的 MCP Client 非常容易出错，希望能有更友好的配置校验提示。

---

### 8. ⚠️ 待处理积压
以下重要 Issue 仍处于 Open 状态，需核心团队重点关注：

*   **[Issue #5767](https://github.com/agentscope-ai/QwenPaw/issues/5767)** (架构重构)：Console 底层 SDK 限制多 Agent 并发演进，需要架构级重构。
*   **[Issue #5763](https://github.com/agentscope-ai/QwenPaw/issues/5763)** (稳定性)：重型任务卡死问题，可能涉及内存泄漏或底层异步调用超时。
*   **[Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759)** (性能消耗)：Plan Mode 重复读取文件消耗 Token，影响生产环境的成本控制。
*   **长期存活 PR 等待 Review**：[PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) (Tauri 切换) 与 [PR #5514](https://github.com/agentscope-ai/QwenPaw/pull/5514) (Runtime WebUI SDK 会话修复) 等核心改动亟待合并验证。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-07-04 | **项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持了极高的社区活跃度与开发进展，新增与活跃 Issues 达 30 条，待处理 PR 达 43 条。项目目前正处于 **v0.8.3 运行时/WASM 插件重构** 以及 **目标模式开发** 的关键阶段，大量底层架构调整和插件安全强化工作正在并行推进。值得注意的是，近期关于 WSL2 内存泄漏（OOM）、Windows 编译测试以及 ZeroCode 交互体验的缺陷报告有所增加，表明在系统级跨平台稳定性上仍面临挑战。整体来看，项目处于“高代码产出伴随高频社区反馈”的健康迭代周期。

---

### 2. 版本发布
- **过去 24 小时无新版本发布**。
- 项目当前主线开发精力集中在 v0.8.3 版本（涵盖 WASM 插件、运行时执行、网关面板等子系统）以及规划中的 v0.9.0（OIDC 等安全架构体系）。

---

### 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要聚焦于文档完善、CI 优化及部分核心代码机制的修复：
- **代码审查流程优化**：合并了 [PR #6716](https://github.com/zeroclaw-labs/zeroclaw/pull/6716) 和 [PR #6717](https://github.com/zeroclaw-labs/zeroclaw/pull/6717)，正式引入了 `pr-architecture-check` 架构审查机制，将依赖方向、特征边界合规性等检查自动化、标准化。
- **插件系统基础重构**：推进了 [PR #8641](https://github.com/zeroclaw-labs/zeroclaw/pull/8641)，修复了 WASM 特性图的安装时配置问题，防止由于执行策略选择错误导致静默丢失 `zeroclaw plugin` 子命令。
- **多渠道与文档跟进**：[PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) 集中处理了 MCP 工具延迟访问策略，统一了数据过滤源；同时多个 PR（如 [PR #8668](https://github.com/zeroclaw-labs/zeroclaw/pull/8668)）致力于完善提供程序路由和安全标签的文档契约。

---

### 4. 社区热点
今日讨论度最高的议题集中在**项目治理结构改革**与**核心架构 RFC**：
- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (13条评论)**: 关于 "Work Lanes, Board Automation, and Label Cleanup" 的 RFC。维护者 Audacity88 提出重构看板路由机制，以减轻维护者手动管理标签的负担，目前已处于逐步推进状态，引发了核心团队关于工作流门控的深入探讨。
- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (8条评论)**: Windows 环境下出现 74 个测试失败引发热议。由于目前 CI 仅在 Linux 环境运行，导致大量 Unix 专属命令和路径语义错误成为漏网之鱼。
- **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (7条评论)**: 针对 v0.9.0 的 **OIDC 身份验证提供程序支持** 架构级 RFC，社区对可插拔认证模块的设计表现出极高期待。

---

### 5. Bug 与稳定性
今日报告了多个高风险别和阻断性 Bug，涉及内存安全、进程崩溃与外部渠道阻断：
- 🔴 **[P0/进程崩溃] [Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)**: `skill-review fork` 在密集工具调用回合后发生切片越界恐慌，直接导致守护进程触发 `SIGSEGV` (退出码 139)。
- 🔴 **[P1/工作流阻断] [Issue #8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)**: Headless 无头模式下的确定性 SOP 步骤在未实际执行的情况下被错误标记为 "Completed"，造成了严重的虚假审计绿/伪合规风险。
- 🔴 **[P1/渠道阻断] [Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)**: WhatsApp Web 的设备链接功能被 WhatsApp 官方最新的 passkey/SHORTCAKE 机制封锁，目前处于 `blocked` 状态。
- 🟠 **[P1/内存泄漏] [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)**: 从 #5542 拆分出的严重 OOM 根因分析，MCP/工具 Schema 克隆导致 Agent 循环中 RSS（物理内存）无限增长。
- 🟠 **[P1/安全阻断] [Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)**: 模型生成的畸形原生工具调用参数未经校验直接透传给 OpenAI 等接口，导致 Provider 报 400 错误并返回空回复。
  *(注：上述内存泄漏问题目前已有部分修复 PR 在推进，如针对 SSE 截断的 [PR #8663](https://github.com/zeroclaw-labs/zeroclaw/pull/8663))*

---

### 6. 功能请求与路线图信号
基于近期合并的 PR 与活跃 Issue，可以看出下个版本明确的演进信号：
- **标准化操作程序 (SOP) 可视化**：[Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) 提出 Web 看板无法检测 SOP 配置，随后 [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 适时推出了带有渠道扇入功能的 SOP 可视化编写界面，该功能极有望在 v0.8.3 落地。
- **跨渠道模型授权隔离**：[Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) 发现 `/model --agent` 命令可被任何用户越权修改全局模型，促使团队加紧实现基于发送者的权限校验机制。
- **去中心化插件与沙箱隔离**：项目正在降低对第三方 ClawHub 源的依赖（[PR #8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638)），转而支持任意 Git 仓库的通用插件选择器；同时 [PR #8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661) 尝试通过 Sidecar 进程外执行 WASM 插件，提供更深度的系统沙箱隔离。

---

### 7. 用户反馈摘要
通过提炼 Issue 评论，近期用户的真实体验呈现以下特点：
- **痛点 - 跨平台运维困难**：Windows 用户抱怨环境编码问题（代码页 936）会导致测试大面积失败（#7462），而 WSL2 部署用户则深受底层运行时内存泄漏导致系统 OOM 的困扰（#5542, #8642）。
- **痛点 - 零代码交互割裂感**：ZeroCode TUI 用户反馈了诸多体验断层，例如会话完成却无可见输出（#8644），以及进入面板时不能自动恢复之前的 Code 会话（#8653），暴露出 TUI 状态持久化机制的不足。
- **满意点 - 系统高度可组合**：外部开发者在验证 WASM 插件创作指南（#8636）时，成功利用新规范端到端构建了真实的网络支持工具，验证了新架构在扩展性上的成功。

---

### 8. 待处理积压
建议维护团队关注以下积压或需要排期响应的挑战：
- **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) - OIDC 身份验证提供商支持 (RFC)**：作为 v0.9.0 的核心基础设施，需拆分为多个明确的 DoD（完成定义）逐步推进。
- **[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) - WSL2 频繁 OOM (已关闭但根因复杂)**：虽因部分缓解而关闭，但衍生出的衍生 Bug（如 #8642）仍需彻底重构 Agent Loop 内的 Schema 内存分配逻辑。
- **[Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) - v0.8.3 观测性/CI 支持体系**：此模块目前的讨论热度偏低，若不跟进，可能会影响后续版本发布时的可观测性测试与稳定排障。

</details>