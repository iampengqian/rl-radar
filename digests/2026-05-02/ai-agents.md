# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-01 22:13 UTC

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

# OpenClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
OpenClaw 在过去 24 小时内维持了极高的社区活跃度，共产生 500 条 Issue 更新（新开/活跃 456 条，关闭 44 条）和 500 条 PR 更新（待合并 470 条，合并/关闭 30 条）。尽管未发布任何新版本，但社区正密集针对 `v2026.4.24` 至 `v2026.4.29` 版本暴露出的网关启动性能、内存泄漏及会话管理退化问题展开排查与修复。大量 PR 处于等待合并状态，表明项目正处在功能迭代与集中代码审查的并行期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并/关闭了 30 个 PR，虽然总体合并数量相对 470 个待处理 PR 较少，但合并的 PR 集中在提升网关稳定性、完善外部渠道防护机制及修复插件依赖核心问题上：

*   **防护栏机制引入**：合并了 [PR #74317](https://github.com/openclaw/openclaw/pull/74317)，新增了针对外部渠道（如 WhatsApp、Telegram 等）的可复用 Guardrails 插件，增强了外部输入在到达 Agent 执行前的风险拦截能力。
*   **插件运行时依赖锁修复**：[PR #74948](https://github.com/openclaw/openclaw/pull/74948) 被合并，修复了遗留运行时依赖锁无法过期导致的死锁问题，缓解了因锁文件引发的网关卡死现象。
*   **渠道媒体流处理增强**：合并了 [PR #68316](https://github.com/openclaw/openclaw/pull/68316)，修复了块流传输后未发送媒体负载丢失的问题，提高了渠道媒体传输的可靠性。
*   **运行时配置优化**：[PR #75032](https://github.com/openclaw/openclaw/pull/75032) 被合并，允许运营商禁用捆绑的运行时依赖并默认使用隔离执行根目录，提供了规避事件循环停滞和磁盘膨胀的“逃生舱”。

## 4. 社区热点
今日社区讨论主要集中在近期版本的网关稳定性和插件性能退化上，以下是评论数和互动最多的 Issue：

*   **网关会话丢失问题**：[Issue #52875](https://github.com/openclaw/openclaw/issues/52875) (评论: 20 | 👍: 0)。用户报告升级后主 Agent 无法通过 `session_list` 找到其他 Agent 会话，导致多 Agent 通信中断。
*   **Active Memory 插件超时**：[Issue #73306](https://github.com/openclaw/openclaw/issues/73306) (评论: 13 | 👍: 2)。用户反馈在 `v2026.4.26` 中 Active Memory 插件在每次运行时都达到 15 秒超时限制并导致嵌入运行故障转移。
*   **macOS 网关重启延迟**：[Issue #73303](https://github.com/openclaw/openclaw/issues/73303) (评论: 12 | 👍: 2)。在 macOS 环境下，重启网关在新进程启动前会挂起 3-4 分钟，严重阻碍开发调试。
*   **插件重载引发泄漏三连击**：[Issue #73655](https://github.com/openclaw/openclaw/issues/73655) (评论: 10 | 👍: 1)。开发者详细追踪了插件重启时引发的 `EADDRINUSE` 重试循环、信号处理程序累积和同步 I/O 阻塞，最终导致 WebSocket 握手饥饿。
*   **网关空闲 CPU 100% 飙升**：[Issue #75707](https://github.com/openclaw/openclaw/issues/75707) (评论: 5 | 👍: 3)。大量用户确认在 `v2026.4.29` 中网关在空闲状态下 CPU 占用达 100%-130%，引发对资源消耗的强烈不满。

## 5. Bug 与稳定性
近期 Bug 报告呈现出明显的聚集性（主要集中在网关控制面板稳定性和性能上），以下是按严重程度排列的焦点问题：

**严重 - 导致服务不可用或核心功能失效**
*   **网关泄漏集群效应**：[Issue #74630](https://github.com/openclaw/openclaw/issues/74630) 汇总了 `2026.4.24` 至 `2026.4.26` 期间出现的网关启动/运行时/控制平面稳定性的关联回归集群。
*   **插件预处理导致 60 秒延迟**：[Issue #75591](https://github.com/openclaw/openclaw/issues/75591) (👍: 6)。每个插件的清单在每个请求中被读取 100+ 次，导致单个简单请求的预处理阶段长达 60-90 秒。目前已有 [PR #75823](https://github.com/openclaw/openclaw/pull/75823) 尝试追踪并警告慢速插件工厂。
*   **网络连接超时无响应**：[Issue #74617](https://github.com/openclaw/openclaw/issues/74617)。Discord 网关 `READY` 事件因竞态条件从未触发，导致机器人在线但无响应。

**中等 - 核心逻辑错误或安全配置问题**
*   **Slack 静默断连**：[Issue #72808](https://github.com/openclaw/openclaw/issues/72808)。与 Slack 的连接会静默丢失，Agent 不再响应但控制台无明显错误，极大影响实际演示与使用。
*   **macOS 安全权限风险**：[Issue #7227](https://github.com/openclaw/openclaw/issues/7227)。macOS 请求 `node` 的辅助功能权限，这会导致暴露所有 npm 包，存在显著的安全风险。
*   **Channel 响应错乱**：[Issue #74886](https://github.com/openclaw/openclaw/issues/74886)。升级至 `2026.4.27` 后，WhatsApp 会话变得不稳定，不仅泄漏思考过程，还意外回退至错误的模型。

## 6. 功能请求与路线图信号
通过观察热门的 Feature Request 及对应的 PR 进展，可以推断出项目近期的演进方向：

*   **外部渠道媒体支持完善**：用户强烈希望改进跨渠道的媒体及响应处理。[PR #69310](https://github.com/openclaw/openclaw/pull/69310) 和 [PR #69312](https://github.com/openclaw/openclaw/pull/69312) 正致力于解决媒体文件静默丢失和误提取问题。
*   **深度 API 暴露与评估能力**：[Issue #75074](https://github.com/openclaw/openclaw/issues/75074) 要求在 `/v1/responses` 中暴露内置工具调用。对应的 [PR #75075](https://github.com/openclaw/openclaw/pull/75075) 已经实现了相关标志位，这将极大增强 Agent 的离线评估和调试能力。
*   **生命周期管理 CLI 强化**：[PR #75560](https://github.com/openclaw/openclaw/pull/75560) 增加了显式的渠道生命周期 CLI 控制命令，弥补了之前只能通过重新登录或重启容器来解决渠道断连的运维短板。
*   **上下文成本感知**：[PR #64436](https://github.com/openclaw/openclaw/pull/64436) 正在向插件运行时暴露模型定价 API，未来基于成本的上下文引擎优化将成为可能。

## 7. 用户反馈摘要
从近 500 条更新和交互中，可以提炼出以下真实用户痛点：
*   **调试体验极差**：用户普遍反映 ([Issue #50880](https://github.com/openclaw/openclaw/issues/50880), [Issue #73306](https://github.com/openclaw/openclaw/issues/73306))，当 Agent 内部出错（如队列模式降级、内存插件超时）时，系统往往静默失败或提供零诊断日志，导致排查极其困难。
*   **性能倒退引发不满**：用户对近期版本的资源占用表示沮丧。有用户抱怨不仅出现了空闲 CPU 100% 的情况，而且 LLM 推理由于插件处理缓慢，竟然对简单的 "hi" 回复需要等待 90-180 秒 ([Issue #75707](https://github.com/openclaw/openclaw/issues/75707), [Issue #75591](https://github.com/openclaw/openclaw/issues/75591))。
*   **多渠道/多 Agent 编排仍不可靠**：在略微进阶的使用场景中（如通过 Telegram/Discord 控制子 Agent），经常出现会话卡死 ([Issue #52249](https://github.com/openclaw/openclaw/issues/52249))、消息发送至虚空 ([Issue #54531](https://github.com/openclaw/openclaw/issues/54531)) 等严重打断工作流的问题。

## 8. 待处理积压
目前仓库中仍有高达 470 个 PR 和 456 个活跃 Issue 处于待处理状态。以下重要核心问题长期未彻底解决，需提请维护者优先关注：

*   **网关架构级泄漏与性能瓶颈**：关于网关内存泄漏和启动延迟的关联集群问题 ([Issue #74630](https://github.com/openclaw/openclaw/issues/74630)) 和 CPU 飙升问题 ([Issue #75707](https://github.com/openclaw/openclaw/issues/75707)) 涉及到底层事件循环和 I/O 处理的重构，目前仍缺乏根本性解决方案。
*   **会话管理的历史遗留缺陷**：会话保留策略无法清理子 Agent ([Issue #51767](https://github.com/openclaw/openclaw/issues/51767))，以及会话列表 API 无法展示完整会话 ([Issue #54435](https://github.com/openclaw/openclaw/issues/54435))，这些问题会随着长时间运行导致严重的状态污染。
*   **大型 Pull Request 仍停滞**：涉及核心架构改动的 PR，如提供程序熔断器 ([PR #64127](https://github.com/openclaw/openclaw/pull/64127)) 和修复 LLM 超时诊断 ([PR #74940](https://github.com/openclaw/openclaw/pull/74940))，已经开启较长时间，急需维护者进行review并推进合并。

---

## 横向生态对比

基于 2026 年 5 月 2 日各大开源 AI 智能体与个人助手项目的社区动态，以下是横向对比与生态分析报告：

### 1. 生态全景
当前开源个人 AI 助手与自主智能体生态正处于**从“单一对话交互”向“多端多模态复杂任务编排”演进的关键重构期**。随着大模型（特别是本地小模型和深度思考模型）能力的提升，开源社区爆发出对**多智能体协同、跨平台无缝接续以及长时间自主运行**的强烈诉求。然而，Agent 在底层的**网关稳定性、长上下文管理、沙箱安全隔离及资源泄漏**等方面正遭遇集体阵痛，各项目均在投入大量精力进行底层架构重塑（如 IronClaw 的 Reborn 计划、ZeroClaw 的底层重写）。整体而言，生态处于应用层百花齐放、底层基础设施加速替代升级的高频迭代阶段。

### 2. 各项目活跃度对比
*(注：由于部分项目仅提供差异数据，活跃度评级综合了合并效率与 Bug 响应速度)*

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康/活跃度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 条 (活跃456) | 500 条 (待合并470) | 无 | 🟡 **两极分化**。社区极其庞大，但积压严重，处于代码审查瓶颈期。 |
| **NanoBot** | 9 条 (关闭8) | 33 条 (合并24) | 无 | 🟢 **极度健康**。极高的问题解决率，快速清除核心崩溃与阻塞 Bug。 |
| **Hermes Agent** | 50 条 (活跃44) | 50 条 (合并7) | 无 | 🟢 **高度活跃**。聚焦高阶编排与核心机制加固，社区反馈积极。 |
| **PicoClaw** | 11 条 (活跃10) | 24 条 (合并11) | `v0.2.8-nightly` | 🟠 **阵痛期**。底层大重构收尾，但 nightly 版引发严重回归。 |
| **NanoClaw** | 11 条 | 29 条 (合并18) | 无 | 🟢 **稳步迭代**。集中在 V1 到 V2 迁移及核心 Provider 修复闭环。 |
| **NullClaw** | 关闭 6 条 | 合并 18 条 | 无 | 🟢 **架构快跑**。REST API 落地与并发架构升级，响应极快。 |
| **IronClaw** | 高度活跃 (Epic 44评论)| 合并 18 条 | 无 | 🟢 **重构期**。底层 Reborn 架构与上层企业级应用生态齐头并进。 |
| **LobsterAI** | 无新开 | 15 条更新 (合并9) | 无 | 🟡 **维护模式**。核心团队集中清理多平台兼容性积压。 |
| **Moltis** | 5 条 (**4个当日修**) | 11 条 (合并8) | 无 | 🟢 **极其高效**。多端 UI 打磨，Bug 修复极速响应。 |
| **CoPaw** | 活跃 7 条 | 更新 4 条 | 无 | 🟠 **需求爆发期**。多轮对话稳定性遇挫，亟待底层机制重构。 |

### 3. OpenClaw 在生态中的定位
* **生态位**：绝对的**流量入口与产业基准**。单日近千条的 Issue/PR 交互量使其成为社区验证功能可行性的首选平台。
* **优势与对比**：其核心优势在于庞大的插件生态和极致的外部渠道（WhatsApp/Telegram/Discord）覆盖度。相比于 NanoBot 或 Hermes 专注于核心执行逻辑，OpenClaw 更像是一个“大而全”的网关枢纽。
* **当前风险**：OpenClaw 正面临严重的**规模反噬**。470 个待处理 PR 表明其代码审查带宽已达极限。其他轻量级项目（如 NullClaw、NanoBot）凭借更高的合并效率，正在快速蚕食原本属于 OpenClaw 的极客和早期采用者群体。

### 4. 共同关注的技术方向
各项目的 Issue 和 PR 动态揭示出当前智能体领域的四大共性技术焦点：
1. **记忆与长上下文管理机制**
   * *涉及项目*：OpenClaw, Hermes, CoPaw, NanoBot。
   * *具体诉求*：Agent 的“金鱼记忆”问题引发普遍不满。社区强烈要求解决多轮对话后状态丢失、跨会话记忆隔离、Cron 定时任务记忆断层等痛点。
2. **网关稳定性与底层泄漏治理**
   * *涉及项目*：OpenClaw, PicoClaw, NanoClaw, LobsterAI。
   * *具体诉求*：大并发与长时运行暴露了架构软肋。解决网关空闲 CPU 100% 飙升、进程/端口未正常释放（SIGKILL泄漏）、插件导致的死锁、以及 WebSocket 握手饥饿成为当务之急。
3. **沙箱执行与安全防护**
   * *涉及项目*：IronClaw, NullClaw, ZeroClaw, OpenClaw。
   * *具体诉求*：随着 Agent 获得代码执行能力，限制网络出口、防止 RCE 和提示词注入、引入细粒度的脚本运行白名单成为近期核心架构演进方向。
4. **深度融合本地模型与“慢思考”推理模型**
   * *涉及项目*：CoPaw, PicoClaw, ZeroClaw, NanoBot。
   * *具体诉求*：对 Ollama、DeepSeek V4 等推理模型深度适配的呼声极高。项目需要解决本地模型超时硬编码、思考过程 (`reasoning_content`) 的流式解析兼容等问题。

### 5. 差异化定位分析
* **架构与部署形态**：
  * **重网关与全平台型** (OpenClaw, NanoBot)：致力于连接所有主流 IM 渠道，构建以网关控制面板为核心的中心化助手。
  * **边缘与嵌入式专精** (PicoClaw)：独辟蹊径，主打 Raspbian 等轻量级系统，甚至提供 UART/I2C 串口支持，定位为硬件开发者的 AI 嵌入式大脑。
  * **并发与底层重构先锋** (IronClaw, NullClaw)：重点攻克多工作空间隔离、抢占式轮次并发，倾向于提供高性能的单一二进制文件或无依赖的 REST API。
* **目标用户画像**：
  * **普通消费者与小白用户**：Moltis、LobsterAI 侧重于提供精美的 WebUI、一键导出备份和修复微信等常见渠道的图片发送问题。
  * **企业与复杂工作流构建者**：Hermes、IronClaw、OpenClaw 专注于 Multi-Agent 路由、RAG 法律文档分析、Gmail 授权挂起恢复等复杂的任务流。

### 6. 社区热度与成熟度
* **快速迭代与功能扩展期（活力最强）**：**IronClaw, NullClaw, Moltis, NanoBot**。这些项目不仅 PR 合并率极高，且能迅速响应社区痛点（如 Moltis 5 个 Bug 4 个当天修复），社区与核心团队形成了良性共振。
* **质量巩固与阵痛修复期**：**OpenClaw, PicoClaw, CoPaw**。由于引入了大量新代码或进行了底层大换血，目前正遭遇严重的回归问题（如 OpenClaw 的网关启动延迟、PicoClaw 的 v0.2.8 图像识别失效），急需收敛需求，提升代码审查质量。
* **维稳与性能优化期**：**LobsterAI**。目前新需求较少，主要精力在于消除历史遗留的 UI 渲染卡顿和 Token 刷新竞态 Bug。

### 7. 值得关注的趋势信号
1. **“静默失败”正在摧毁开发者信任**：从 OpenClaw 到 NanoClaw，用户对“Agent 不执行且无日志输出”表示极度沮丧。未来的 Agent 框架必须构建**强制可见性**（如执行状态进度条、详细的 Trace 文件），以降低调试黑盒的门槛。
2. **“会话便携性”成为下一个爆发点**：Hermes 社区提出的“在 CLI 开头，走到 Telegram 接续”的需求极具前瞻性。打通不同终端设备、甚至打破不同项目之间的会话状态隔离，将是未来个人 AI 助手的核心护城河。
3. **本地工具调用的防呆与熔断机制亟待标准化**：针对小模型在 Tool Calling 时陷入“无限重试死循环”的问题（NanoBot 提出的循环护卫、Moltis 的子 Agent Failover），表明在应用层设计**智能熔断与降级策略**已成为刚需。
4. **智能体正加速向“运维与业务中枢”演化**：如 NullClaw 探索将 Shell 执行输出喂给大模型总结，IronClaw 加深后台任务生命周期管理。Agent 不再仅仅是“陪聊”，而是真正成为挂载在各类系统上的**自主自动化执行引擎**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-02)

## 1. 今日速览
NanoBot 项目今日维持着**极高的维护效率与社区活跃度**。在过去 24 小时内，项目处理了 33 个 Pull Requests（其中 24 个顺利合并/关闭）和 9 个 Issues（8 个被关闭）。项目在今天虽然没有发布新版本，但核心开发团队和社区贡献者集中修复了包括 Anthropic 长请求报错、Matrix 协议身份验证循环、以及 Token 估算崩溃在内的多个核心稳定性问题，并合并了多项提升群聊体验的上下文感知功能。整体来看，项目处于**极其健康、快速迭代**的状态。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **24 个 PR 被合并或关闭**，项目在 API 兼容性、通道（Channel）稳定性和底层 Agent 执行逻辑上取得了显著进展：
- **API 与流式输出优化**：合并了 PR [#3555](https://github.com/HKUDS/nanobot/pull/3555)，修复了 OpenAI 兼容端点在处理 Tool 请求时 SSE 流提前终止的严重问题。
- **群聊上下文感知增强**：PR [#3549](https://github.com/HKUDS/nanobot/pull/3549) 成功将 `sender_id` 注入到 LLM 运行时上下文中，解决了多人群聊中机器人无法识别不同用户的痛点。
- **Agent 核心机制加固**：合并了 PR [#2334](https://github.com/HKUDS/nanobot/pull/2334)，提高了会话持久化的频率，避免了 Agent 中途崩溃导致进度丢失的问题。
- **Provider 适配与修复**：合并了 PR [#3579](https://github.com/HKUDS/nanobot/pull/3579)，为 Anthropic 添加了长耗时请求自动降级为流式输出的机制；同时 [#3560](https://github.com/HKUDS/nanobot/pull/3560) 修复了 DeepSeek 推理模式的检测条件。
- **前端体验改进**：目前 PR [#3583](https://github.com/HKUDS/nanobot/pull/3583) 正在改进 Beta WebUI 的对话轮次完成逻辑与聊天隔离机制。

## 4. 社区热点
- **多智能体路由原声支持**：Issue [#2072](https://github.com/HKUDS/nanobot/issues/2072)（已关闭）引发了较多讨论（8 条评论）。社区用户希望 NanoBot 能原生支持类似 OpenClaw 的多 Agent 路由机制，而不是手动实例化多个网关。这反映了重度用户对复杂工作流编排的强烈诉求。
- **跨中断的持续性专注工具**：Issue [#3292](https://github.com/HKUDS/nanobot/issues/3292)（仍开启，4 条评论）提出了一种“会话级任务聚焦”概念，要求 Agent 在被意外问题打断后能够锚定主要任务。这为未来的 Agent 记忆与认知架构演进提供了极具价值的参考。

## 5. Bug 与稳定性
今日报告并处理的 Bug 集中在运行时崩溃、长连接通道异常和 API 兼容性上，大部分已得到快速修复：
1. **P0 级 (核心崩溃)**：`estimate_prompt_tokens_chain` 中的 `NameError` 导致基于 Token 的内存整理崩溃。
   - 状态：已由 PR [#3582](https://github.com/HKUDS/nanobot/pull/3582) 修复并合并。
2. **P0 级 (API 兼容性)**：OpenAI 兼容流在触发 Tool 时过早关闭。
   - 状态：已由 PR [#3555](https://github.com/HKUDS/nanobot/pull/3555) 修复并合并。
3. **P1 级 (通道异常)**：Matrix 频道在遇到身份验证错误时陷入死循环，每 2 秒疯狂请求主服务器；启动时会重读旧消息（Issue [#3553](https://github.com/HKUDS/nanobot/issues/3553)）。
   - 状态：Auth 死循环已由 PR [#3578](https://github.com/HKUDS/nanobot/pull/3578) 修复并合并。
4. **P1 级 (文件系统隔离)**：`ReadFileTool` 缓存跨会话生效，导致读取到无内容存根（Issue [#3571](https://github.com/HKUDS/nanobot/issues/3571)）。
   - 状态：Issue 已关闭（推断已在相关重构中修复）。
5. **P2 级 (LLM 交互异常)**：非流式调用 Anthropic 耗时超过 10 分钟引发抛错，以及流式输出中泄露残缺的 `<think` 标签。
   - 状态：均已修复合并（PR [#3579](https://github.com/HKUDS/nanobot/pull/3579), [#3577](https://github.com/HKUDS/nanobot/pull/3577)）。

## 6. 功能请求与路线图信号
- **Tool 疯狂调用熔断机制**：PR [#3580](https://github.com/HKUDS/nanobot/pull/3580)（待合并）提出了 Tool 循环护卫机制。针对小模型或复杂任务中容易出现的“工具调用失败-无限重试”耗尽 Token 的问题，引入了 `allow / warn / block` 控制器。这是提升 Agent 自主运行稳定性的关键一步，极有可能会在下一版本作为核心特性纳入。
- **灵活的模型预设配置**：PR [#3358](https://github.com/HKUDS/nanobot/pull/3358)（待合并）正在推进 `ModelPresetConfig` 支持，允许用户通过预设名称快速切换模型及其生成参数，这将大幅改善多模型切换的用户体验。
- **WebUI 与 Hook 系统**：WebUI 体验改进（[#3583](https://github.com/HKUDS/nanobot/pull/3583)）与全新的基于类型化事件的 Hook 中心系统（[#3564](https://github.com/HKUDS/nanobot/pull/3564)）正在积极审核中，暗示项目正在为更强大的前端 UI 和插件生态做准备。

## 7. 用户反馈摘要
- **多通道群聊识别痛点**：用户在实际使用中发现，在 Discord、飞书等多人群聊场景中，机器人对所有人的回复采取同一套上下文，无法做到“见人说人话”。这直接促成了 `sender_id` 上下文注入功能的合并。
- **边缘场景的 LLM 行为怪癖**：用户反馈 LLM 在调用 `web_fetch` 工具时，经常会不小心在 URL 外面包裹 Markdown 的反引号（\`url\`），导致工具请求失败（已由 PR [#3528](https://github.com/HKUDS/nanobot/pull/3528) 通过增加清洗逻辑解决）。
- **国产应用集成需求**：NapCatQQ（将 QQ 账号转变为 Bot）的 PR（[#2337](https://github.com/HKUDS/nanobot/pull/2337), [#2379](https://github.com/HKUDS/nanobot/pull/2379)）被高频提及和合并，说明在微信/QQ 等国民级即时通讯软件中接入 AI Agent 是国内开发者的核心诉求之一。

## 8. 待处理积压
以下高价值/活跃的 Pull Requests 目前处于开启状态，等待项目团队进行 Code Review 及合并，建议维护者优先关注：
- **WebUI 核心体验优化**：[PR #3583](https://github.com/HKUDS/nanobot/pull/3583) - 修复流式输出卡顿和会话切换时的消息串台问题。
- **模型预设功能**：[PR #3358](https://github.com/HKUDS/nanobot/pull/3358) - 模型快速切换配置。
- **防死循环熔断器**：[PR #3580](https://github.com/HKUDS/nanobot/pull/3580) - 限制无意义的 Tool 无限重试。
- **全新 Hook 系统**：[PR #3564](https://github.com/HKUDS/nanobot/pull/3564) - 重构底层的插件与钩子机制。
- **MCP 工具延迟加载**：[PR #1759](https://github.com/HKUDS/nanobot/pull/1759) - 减少 MCP 工具上下文开销，该 PR 存在时间较长，可能需要重新进行冲突解决与评估。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🤖 Hermes Agent 项目动态日报 (2026-05-02)

> **数据来源**: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | **分析周期**: 过去24小时

---

## 1. 今日速览

Hermes Agent 项目今日保持**高度活跃**的开发与社区互动状态。在过去24小时内，项目共处理了 **50 条 Issue 更新**（新开/活跃 44，关闭 6）和 **50 条 PR 更新**（待合并 43，合并/关闭 7）。

尽管今日**无新版本发布**，但社区提交了大量高质量的代码贡献与功能规划。讨论焦点主要集中在 **Gateway（网关）的稳定性**（如会话重置、上下文丢失）、**多平台支持扩展**以及**底座 Agent 的编排与自主性增强**。大量 P1/P2 级别的缺陷修复 PR 被提交，表明项目当前正处于功能迭代与系统稳固并重的阶段。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日共有 **7 个 PR 被合并/关闭**，另有 43 个 PR 处于待合并状态（Active），涵盖多项关键架构优化与 Bug 修复：

- **修复委派任务配置穿透问题**：合并了 PR [#12105](https://github.com/nousresearch/hermes-agent/pull/12105)。该修复解决了 `delegate_task` 忽略 `config.yaml` 中的自定义模型/提供商配置，导致子代理总是继承父模型的问题。
- **Cron 任务记忆隔离增强**：提交了 PR [#18565](https://github.com/nousresearch/hermes-agent/pull/18565)，为 Cron 定时任务启用了 Hindsight 记忆提供者，使其在安全隔离的前提下能够积累和回忆向量数据库中的事实。
- **Agent 核心执行路径防污染**：开发者 `andrewhosf` 连续提交了 [#18560](https://github.com/nousresearch/hermes-agent/pull/18560)、[#18561](https://github.com/nousresearch/hermes-agent/pull/18561)、[#18562](https://github.com/nousresearch/hermes-agent/pull/18562)，集中修复了并发与串行执行路径中，被拦截（blocked）的工具调用错误持久化引发的 I/O 浪费与状态污染。
- **Gateway 自动降级与会话滚存**：PR [#18563](https://github.com/nousresearch/hermes-agent/pull/18563) 引入了自动降级机制，当长会话触发多次上下文压缩时，自动重置会话并清理缓存资源，防止系统退化。

---

## 4. 社区热点

今日社区讨论最热烈的功能诉求和 Bug 集中在**高阶编排**与**沉浸式体验**：

- **🔥 最受期待功能：自定义多代理编排 (👍 8)**
  [Issue #9459](https://github.com/nousresearch/hermes-agent/issues/9459)：用户呼吁允许在 `config.yaml` 中定义 Agent Profile，使得 `delegate_task` 可以派生出具有特定人格和工具集的子代理。这反映了高级用户对构建复杂 "Multi-Agent 群落" 的强烈需求。
- **🤖 真正的自主性：Cron 任务与实时网关的联动 (👍 3)**
  [Issue #5712](https://github.com/nousresearch/hermes-agent/issues/5712) 与 [Issue #4595](https://github.com/nousresearch/hermes-agent/issues/4595)（已关闭）：社区希望打破 Cron 定时任务与实时聊天的隔离墙，期待定时任务的处理结果能够自动、无缝地注入到正在进行的网关聊天会话中。
- **💬 跨平台无缝会话接续 (👍 0 但讨论热烈)**
  [Issue #18457](https://github.com/nousresearch/hermes-agent/issues/18457)：用户提出“会话便携性”概念，期望能够在 CLI 中开启对话，然后走到 Telegram 或 Slack 上继续同一个会话，这暴露了当前多端会话状态割裂的痛点。

---

## 5. Bug 与稳定性

今日报告了多个影响核心稳定性的关键问题，部分已产生修复 PR：

### 🔴 P1 严重级别
- **Openrouter 认证 HTTP 401 错误**
  [Issue #14637](https://github.com/nousresearch/hermes-agent/issues/14637)：用户在使用配置正确的 Openrouter API Key 时遭到 401 拒绝。*（暂无关联 Fix PR）*
- **严格提供者下的重复工具名称导致静默失败**
  [Issue #18478](https://github.com/nousresearch/hermes-agent/issues/18478)：最近的 commit 引入了平台插件自动加载，导致在 Google Vertex/Azure 等强制要求工具名唯一的平台上引发 400 错误。*（暂无关联 Fix PR）*
- **Slack Socket Mode App Token 日志泄露**
  [PR #5282](https://github.com/nousresearch/hermes-agent/pull/5282)：发现 `xapp-` 开头的敏感令牌在重连时以明文形式写入日志。*（已有修复 PR）*

### 🟠 P2 高级别
- **本地部署 KV Cache 失效问题**
  [Issue #4555](https://github.com/nousresearch/hermes-agent/issues/4555)：使用本地 llama.cpp 后端时，每个新用户消息都会完全破坏 KV Cache，极大影响本地推理性能。
- **Gateway 快速连续消息丢失**
  [Issue #4491](https://github.com/nousresearch/hermes-agent/issues/4491)：在 Agent 处理过程中快速发送连续消息会导致消息状态不匹配从而丢失。*（已有修复 PR #4499）*
- **Docker 权限与 PID 1 进程识别错误**
  [Issue #18482](https://github.com/nousresearch/hermes-agent/issues/18482) & [Issue #4776](https://github.com/nousresearch/hermes-agent/issues/4776)：涉及 Docker 容器 HOME 目录权限拒绝，以及 `hermes status` 错误报告网关未运行（当以 PID 1 运行时）。
- **CLI 安装脚本“劫持”全局 npm**
  [Issue #18357](https://github.com/nousresearch/hermes-agent/issues/18357)：Hermemes 安装脚本修改了环境变量，导致系统原生的 `npm install -g` 被重定向到 Hermes 内部目录，引发其他软件崩溃。

---

## 6. 功能请求与路线图信号

通过近期的 PR 走向和 Issue 反馈，可以洞察项目下一步的演进方向：

- **🌐 多平台网关扩展**：提交了对 MAX (VK Teams/Mail.ru) 的完整支持 [PR #4473](https://github.com/nousresearch/hermes-agent/pull/4473)，以及 Linear 项目管理工具的集成 [Issue #5826](https://github.com/nousresearch/hermes-agent/issues/5826)。
- **🛠️ LLM 提供商广泛接入**：[PR #4485](https://github.com/nousresearch/hermes-agent/pull/4485) 一次性增加了 Mistral AI、Nebius AI 和 Scaleway 作为一等公民提供商。
- **🔒 深度安全与防护建设**：社区正在加固系统边界，如提交了针对 RCE 和供应链攻击的命令行检测增强 [PR #4502](https://github.com/nousresearch/hermes-agent/pull/4502)，以及进入 LLM 上下文前的敏感数据清洗层 [PR #4506](https://github.com/nousresearch/hermes-agent/pull/4506)。
- **👁️ 前端 TUI 体验升级**：[PR #4504](https://github.com/nousresearch/hermes-agent/pull/4504) 与 [#4513](https://github.com/nousresearch/hermes-agent/pull/4513) 正在重构 Markdown 响应渲染，未来 CLI 的输出展示将更加美观。

---

## 7. 用户反馈摘要

通过今日的 Issue 提取，真实用户的核心痛点与反馈如下：

- **“一切皆可记忆与持久化”的强诉求**：用户对 Agent 的“金鱼记忆”感到沮丧，特别是跨端、跨会话以及定时任务与主会话之间的状态割裂。
- **安装与环境入侵引发反感**：[Issue #18357](https://github.com/nousresearch/hermes-agent/issues/18357) 中用户使用了“计算机破坏”等强烈字眼，表明开发者的环境隔离意识不足，触碰了开发者的底线（全局 npm 劫持）。
- **幻觉与错误识别**：[Issue #18556](https://github.com/nousresearch/hermes-agent/issues/18556) 指出 Agent 在 Gemini 上产生了“伪造用户发言”的幻觉；[Issue #4538](https://github.com/nousresearch/hermes-agent/issues/4538) 反映 Agent 在做加密货币分析时，错误创建并调用了“公司研究摘要”的技能。
- **对自动化防呆机制的需求**：用户提出 [Issue #4489](https://github.com/nousresearch/hermes-agent/issues/4489)，希望在 Agent 修改文件前自动进行 Git Checkpoint，反映出用户对 Agent 破坏代码库的潜在担忧。

---

## 8. 待处理积压

以下重要高关注度 Issue 仍未得到官方明确的处理或分配，存在积压风险，建议维护团队关注：

1. [Issue #4622](https://github.com/nousresearch/hermes-agent/issues/4622)：针对 Telegram 超级群组的“话题级技能绑定”需求，此功能对社群运营至关重要，自 4 月初开启至今未修复。
2. [Issue #4555](https://github.com/nousresearch/hermes-agent/issues/4555)：本地 llama.cpp KV Cache 失效问题，此 Bug 严重阻碍了注重隐私和本地部署的用户群体。
3. [Issue #4587](https://github.com/nousresearch/hermes-agent/issues/4587)：多配置文件并发时的 Gateway 进程互杀问题，对于重度用户是致命的稳定性隐患。
4. [Issue #7192](https://github.com/nousresearch/hermes-agent/issues/7192)：内存管理器 `on_pre_compress()` 返回值被静默丢弃的架构级 Bug，影响长期记忆压缩效果。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
PicoClaw 项目在过去24小时内呈现出**高并发、两极分化**的活跃状态。项目于昨日晚间发布了最新的 `v0.2.8-nightly.20260501` 自动构建版本，随之而来的是社区大量的功能验证与反馈。今日共有 24 个 PR 更新（其中 13 个待合并，11 个被关闭/合并），以及 11 个 Issue 更新（10 个新开/活跃，1 个关闭）。
值得注意的是，开发者 **stevef1uk** 集中关闭了大量关于“K3s部署、安全白名单、异步API和会话隔离”的架构级 PR，表明底层重构正在收尾；但同时，v0.2.8 版本的发布暴露了包括图像识别失效、频道网关启动失败等严重回归问题。总体而言，项目正处于**底层架构大换血与新版阵痛期**的交汇点。

## 2. 版本发布
- **最新版本**: `nightly: Nightly Build`
- **版本号**: `v0.2.8-nightly.20260501.6e1fab80`
- **更新说明**: 自动化构建版本，包含主分支最新代码。
- **完整变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- **注意事项**: ⚠️ 官方明确提示该版本可能不稳定，生产环境升级需极度谨慎（结合今日反馈，确实存在多项功能级回归）。

## 3. 项目进展
今日关闭/合并的 PR 主要集中在**基础设施、安全隔离与多渠道通信**的重构上，项目企业级能力大幅增强：
- **基础设施与部署**: 关闭了 K3s 部署清单和专用 Dockerfile 的支持 ([PR #2326](https://github.com/sipeed/picoclaw/pull/2326))。
- **安全与隔离机制**: 合并了会话级工作区隔离与安全加固 ([PR #2322](https://github.com/sipeed/picoclaw/pull/2322))、多租户隔离 ([PR #2095](https://github.com/sipeed/picoclaw/pull/2095)) 及多用户安全防护体系 ([PR #2313](https://github.com/sipeed/picoclaw/pull/2313))。
- **外部集成与通信**: 增加了用于外部集成的异步 `/chat` HTTP 端点 ([PR #2324](https://github.com/sipeed/picoclaw/pull/2324))，为后续接入第三方前端打下基础。
- **技能与模型扩充**: 推进了代理技能白名单机制 ([PR #2325](https://github.com/sipeed/picoclaw/pull/2325))，并添加了对 NVIDIA 和 Azure AI 提供商的原生支持 ([PR #2323](https://github.com/sipeed/picoclaw/pull/2323))。

## 4. 社区热点
今日社区讨论焦点主要集中在现有 Bug 排查与 UI 交互优化上：
- **定时任务与频道报错** ([Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)): 此前报告的 Bug，用户在使用 Ollama 配合 Telegram 频道执行每小时定时任务时触发 Channel Error，目前已有 6 条评论，仍在排查中。
- **移动端交互体验争议** ([Issue #2376](https://github.com/sipeed/picoclaw/issues/2376)): 建议在 Android 键盘上禁用“回车键直接发送消息”（引发 4 条讨论，1 个点赞）。这反映了 PicoClaw 在移动端用户群体中的普及度正在增加，对长文本输入的交互细节提出了更高要求。
- **流式传输需求** ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)): 用户请求在配置中增加 `streaming: true` 选项以支持 HTTP 流式请求，引发了关于后端兼容性的探讨（1 个点赞）。

## 5. Bug 与稳定性
随着 nightly 版本的更新，今日报告了多个高严重级别的回归 Bug，需核心团队优先介入：
1. **[P0 严重] 图像识别功能失效** ([Issue #2738](https://github.com/sipeed/picoclaw/issues/2738)): 升级至 v0.2.8 后，上传的图像无法被模型识别，多模态核心功能受阻。（目前暂无关联 Fix PR）
2. **[P0 严重] 频道网关无法启动** ([Issue #2742](https://github.com/sipeed/picoclaw/issues/2742)): v0.2.8 中配置 Telegram 频道后，gateway 启动时出现无可用频道的错误。（目前暂无关联 Fix PR）
3. **[P1 较高] Android 端数据无法访问** ([Issue #2744](https://github.com/sipeed/picoclaw/issues/2744)): Android v0.2.8 客户端中，无法从任何标签页访问数据。
4. **[P2 中等] 技能调用名称解析错误** ([Issue #1533](https://github.com/sipeed/picoclaw/issues/1533) - 已关闭): 已安装的 `skill-vetter` 在调用时被错误地将连字符转为了下划线，导致 Tool not found。（该 Bug 已随代码更新解决并关闭此 Issue）
5. **[P2 中等] OAuth 验证错误** ([Issue #2602](https://github.com/sipeed/picoclaw/issues/2602)): 接入 OpenAI 和 Antigravity 时遇到 Authorization Error，主要集中在 ARM64 设备。

## 6. 功能请求与路线图信号
结合今日的 Issues 和活跃的 PR，以下是可能被纳入后续迭代的 Roadmap 信号：
- **多模态原生音频支持** ([PR #2626](https://github.com/sipeed/picoclaw/pull/2626)): 正在等待合并，该 PR 增加了对多模态大模型（如 Gemini 1.5）原生音频输入的支持，极大拓展了 Agent 的感知边界。
- **硬件串口(UART)通信工具** ([Issue #2649](https://github.com/sipeed/picoclaw/issues/2649)): 用户提议增加串口工具支持。PicoClaw 已具备 I2C 和 SPI 工具，补齐 UART 将使其成为**极致的嵌入式 AI 开发利器**，这与项目近期在 Raspbian 等边缘设备的活跃度高度吻合。
- **深度思考模式兼容性提升** ([PR #2740](https://github.com/sipeed/picoclaw/pull/2740) / [PR #2741](https://github.com/sipeed/picoclaw/pull/2741)): 社区提交了针对 DeepSeek 和 OpenAI 兼容 API 的 `reasoning_content`（思考过程）解析修复，表明项目正在积极适配新一代“慢思考”推理模型。
- **GitHub Copilot 接入** ([Issue #2652](https://github.com/sipeed/picoclaw/issues/2652)): 用户希望能直接对接 GitHub Copilot 作为底层 Provider。

## 7. 用户反馈摘要
透过今日的 Issue 描述，可以提炼出以下真实用户画像和痛点：
- **嵌入式/边缘计算开发者**: 许多用户在 Raspberry Pi (Zero W) 上运行 Raspbian/Ubuntu 系统，通过 PicoClaw 将小型设备转化为 AI Agent，他们急需串口通信支持及轻量级模型（如 Ollama + glm）的稳定性。
- **移动端重度用户**: Android 用户对 PicoClaw 的原声 App 期望很高，痛点在于“回车键误触发送”及“新版数据标签页加载失败”。
- **开发者生态体验**: 用户在集成第三方模型（如硅基流动 SiliconFlow、OpenRouter 等）时，仍容易遇到 OAuth 鉴权或配置文件流式请求配置不清晰的问题。

## 8. 待处理积压
以下重要 Issue/PR 已被标记为 `stale`（陈旧/停滞），长期未得到官方有效响应，建议维护团队重点关注：
- **[Provider] OAuth 鉴权失败** ([Issue #2602](https://github.com/sipeed/picoclaw/issues/2602)): 阻碍了部分第三方模型的正常接入。
- **[Build] Windows 平台构建指南缺失** ([Issue #2651](https://github.com/sipeed/picoclaw/issues/2651)): 缺乏 Windows 平台的构建说明，不利于在 Windows 开发者群体中推广。
- **[Config] 敏感字符串配置引发 Panic 的修复** ([PR #2270](https://github.com/sipeed/picoclaw/pull/2270)): 修复了内存寻址导致的 Panic 崩溃问题，属于稳定性提升，建议尽快排期 Review。
- **[Agent] JSON Schema 校验修复** ([PR #2128](https://github.com/sipeed/picoclaw/pull/2128)): 修复了在使用严格模式的 OpenAI 兼容 API 时工具调用的校验报错，对工具生态兼容性至关重要。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
NanoClaw 项目今日保持**高度活跃**，过去 24 小时内共处理了 29 个 Pull Requests 和 11 个 Issues。项目核心团队主要聚焦于 **OpenCode provider 的稳定性修复**及 **V1 到 V2 的迁移准备工作**。社区贡献方面，多个独立开发者提交了针对容器构建、主机扫描和超时机制的修复 PR，显示项目拥有良好的外部参与生态。整体来看，项目在稳步迭代的同时，正集中精力解决进程泄漏和上下文丢失等关键性架构缺陷。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并/关闭了 18 个 PR，项目在以下几个关键领域取得了实质性进展：

*   **OpenCode Provider 修复闭环：** 连续关闭了三个与 OpenCode provider 相关的严重 Bug（[#2151](https://github.com/qwibitai/nanoclaw/pull/2151), [#2152](https://github.com/qwibitai/nanoclaw/pull/2152), [#2153](https://github.com/qwibitai/nanoclaw/pull/2153)），成功修复了 90 秒硬编码超时、进程 SIGKILL 泄漏以及 CLAUDE.md 上下文无法传递的致命问题。
*   **工具链与研发体验优化：** 合并了 `lint-staged` 替换原有 `pre-commit` 的 PR ([#2171](https://github.com/qwibitai/nanoclaw/pull/2171))，大幅优化了大型代码库中的提交速度。
*   **通信渠道能力补齐：** 合并了双向 WhatsApp 媒体消息支持 ([#2170](https://github.com/qwibitai/nanoclaw/pull/2170))，以及主机扫描中的数据库读取优化 ([#2160](https://github.com/qwibitai/nanoclaw/pull/2160))。

## 4. 社区热点
今日最受关注的讨论集中在操作体验与系统可靠性上：

*   **[Issue #2150](https://github.com/qwibitai/nanoclaw/issues/2150) (5条评论)**：OpenCode provider 发送了字面量的 `@./...md` 而非解析后的文本，导致 Agent 完全失去指令。该问题引发了关于 Provider 上下文加载机制的深入讨论，随后由 CopyPasteFail 提交了 PR [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) 并成功合并修复。
*   **[Issue #2177](https://github.com/qwibitai/nanoclaw/issues/2177) (2条评论)**：Active-query push-mode 在产生空文本结果后静默停滞。项目核心成员 yaniv-golan 亲自下场复现，表明该问题直接影响基于 Telegram 的非聊天界面技能，诉求在于提高底层通信的容错率。
*   **[PR #2178](https://github.com/qwibitai/nanoclaw/pull/2178)**：blaykeelder1-commits 提交的“Andy ops fixes”一次性打包修复了 10 个操作问题（包括浏览器调用失败、Maps 403、推文 Token 缺失等），反映了重度用户在实际业务部署中的长尾痛点。

## 5. Bug 与稳定性
今日报告并处理的 Bug 阶层分明，核心集中在前端通信与容器生命周期管理：

*   **🔴 严重**：
    *   *进程与端口泄漏*：[#2148](https://github.com/qwibitai/nanoclaw/issues/2148) - OpenCode provider 的 `proc.kill('SIGKILL')` 导致底层二进制文件滞留占用 4096 端口。**已通过 [PR #2152](https://github.com/qwibitai/nanoclaw/pull/2152) 修复合并。**
    *   *数据库行挂起锁死系统*：[#2147](https://github.com/qwibitai/nanoclaw/issues/2147) - 孤立的 `processing_ack` 行在主机扫描中存活并导致下次重启时无限期 SIGKILL。**已通过 [PR #2151](https://github.com/qwibitai/nanoclaw/pull/2151) 修复合并。**
*   **🟠 中等**：
    *   *上下文静默丢失*：[#2150](https://github.com/qwibitai/nanoclaw/issues/2150) - 修复前，Agent 在无指令状态下盲目运行。**已通过 [PR #2153](https://github.com/qwibitai/nanoclaw/pull/2153) 修复合并。**
    *   *本地模型超时*：[#2149](https://github.com/qwibitai/nanoclaw/issues/2149) - 硬编码 90s 超时导致本地慢速推理中断。**已通过 [PR #2152](https://github.com/qwibitai/nanoclaw/pull/2152) 提供可配置超时修复。**
    *   *macOS 构建哈希不一致*：[#2172](https://github.com/qwibitai/nanoclaw/issues/2172) - 文件系统大小写不敏感导致构建 slug 与 Node 计算结果不同。（待修复）

## 6. 功能请求与路线图信号
通过近期的 Issue 和 PR，可以观察到 NanoClaw 正在向**多模型支持**和**V2 架构平滑过渡**的方向演进：

*   **Google Gemini Provider 支持**：[PR #2136](https://github.com/qwibitai/nanoclaw/pull/2136) 正在等待合并，该功能将使用 Gemini CLI 的 JSON-RPC 模式为项目引入除 OpenAI 和 Claude 之外的核心模型支持。
*   **V1 → V2 迁移机制**：lazer-maker 提出了系列计划（如 [Issue #2175](https://github.com/qwibitai/nanoclaw/issues/2175)），同时 [PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931) 正在开发自动化迁移工具，这预示着 V2 版本的正式发布已提上日程。
*   **安全加固**：社区开发者提交了 [PR #2166](https://github.com/qwibitai/nanoclaw/pull/2166)，引入了 `/harden` 技能以防止 Agent 访问私有 IP 和云元数据端点，凸显了项目在权限边界管控上的需求。

## 7. 用户反馈摘要
从操作型 Issues 提炼出真实用户反馈如下：
*   **V2 部署门槛仍高**：尽管已有自动化脚本，但在全新 Linux 环境下（如 [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)），PATH 未正确传递导致 `onecli` 验证失败。用户呼吁需要更健壮的沙箱环境初始化。
*   **状态可视性严重不足**：用户反馈（如 [Issue #2173](https://github.com/qwibitai/nanoclaw/issues/2173)）当任务 Run 被中断时，缺乏明确的状态标记，导致难以排查消息是否被正常处理。
*   **重度商业化集成存在断点**：用户在实际跑营销自动化工作流时，受制于 Gmail 会话机制导致上下文断裂（[Issue #2176](https://github.com/qwibitai/nanoclaw/issues/2176)），表明 NanoClaw 在处理外部第三方 API 限制时，需要更完善的 Session 保持机制。

## 8. 待处理积压
以下重要的修复 PR 长期未获响应，可能会影响特定场景用户的正常使用，建议维护团队优先 Review：

*   **[PR #2052](https://github.com/qwibitai/nanoclaw/pull/2052)**：修复首次安装时本地 OneCLI 管理员未自动引导的问题（已开启 5 天）。
*   **[PR #2054](https://github.com/qwibitai/nanoclaw/pull/2054)**：修复 Spinner 驱动的 setup 导致 `sudo` 提示不可见从而引发挂起的问题（已开启 5 天）。
*   **[PR #1076](https://github.com/qwibitai/nanoclaw/pull/1076)**：OAuth 凭证代理的自动刷新修复（已开启近 1.5 个月，状态仍标记为 Needs Review）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
NullClaw 项目在过去24小时内展现出极高的开发活跃度与良好的社区协作状态。团队今日合并了高达 18 个 Pull Requests，并关闭了 6 个 Issues，解决了包括 API 建设、并发处理、工作空间管理等核心架构问题。目前仍有 9 个高价值 PR 正在等待合并，涵盖了底层 HTTP 重构和安全防欺骗等重要特性。总体而言，项目正处于功能快速迭代与底层稳定性提升并重的健康阶段，维护者对社区反馈的响应非常迅速。

## 2. 版本发布
无。过去 24 小时内项目未发布新的 Release 版本。

## 3. 项目进展
今日共有 18 个 PR 被合并/关闭，标志着项目在系统架构和功能完善上迈出了一大步：
- **REST Admin API 全面落地**：合并了 PR [#770](https://github.com/nullclaw/nullclaw/pull/770)、[#771](https://github.com/nullclaw/nullclaw/pull/771) 和 [#780](https://github.com/nullclaw/nullclaw/pull/780)，为轻量级客户端（如 iOS 菜单栏应用、CLI 仪表板）提供了零额外依赖的统一网关控制与检查接口。
- **多工作空间与路由硬编码支持**：合并了 PR [#842](https://github.com/nullclaw/nullclaw/pull/842)（新增 `--workspace` 标志）和 [#841](https://github.com/nullclaw/nullclaw/pull/841)（新增 `--skill` 标志），分别响应了多实例部署和特定技能路由的社区诉求。
- **入站路由与并发架构升级**：PR [#845](https://github.com/nullclaw/nullclaw/pull/845) 和 [#846](https://github.com/nullclaw/nullclaw/pull/846) 的合并，成功引入了入站路由器与中途注入基础设施，为解决并发非阻塞交互奠定了底层基础。
- **开发者体验与修复**：PR [#844](https://github.com/nullclaw/nullclaw/pull/844) 增加了 A2A 流的进度提示转发，[#843](https://github.com/nullclaw/nullclaw/pull/843) 修复了 Docker 引导过程中的静默崩溃问题。

## 4. 社区热点
今日新开启的讨论主要聚焦于 **Agent 自动化处理能力的边界** 和 **安全隐私通信**：
- **Shell 与 Agent 的深度结合**：由 mark-os 提出的 Issue [#879](https://github.com/nullclaw/nullclaw/issues/879) 建议在定时任务中允许同时执行 `command` 和 `prompt`，将 Shell 输出直接喂给大模型进行总结。这反映了社区希望将 NullClaw 作为“自动化数据处理中枢”的强烈诉求。
- **隐私通信基础设施**：Issue [#209](https://github.com/nullclaw/nullclaw/issues/209) 呼吁支持 Matrix 端到端加密 (E2EE)，以提供无需手机号且完全私密的 Agent 通信渠道，获得了一定关注并已被重新激活。

## 5. Bug 与稳定性
今日报告的 Bug 数量较少，且大多已有对应的修复方案，系统稳定性保持良好：
1. **[已修复] Docker 引导写入失败**：Issue [#763](https://github.com/nullclaw/nullclaw/issues/763) 报告在 Docker 交互式引导的第 8 步因目录权限问题触发 `KeyWriteFailed` 错误。此问题已通过 PR [#843](https://github.com/nullclaw/nullclaw/pull/843) 修复并合并。
2. **[低危] 嵌套技能不支持**：Issue [#825](https://github.com/nullclaw/nullclaw/issues/825) 指出当前 Agent Skills 仅支持扁平化目录，不利于分类管理。该问题已被视为功能增强并关闭。

## 6. 功能请求与路线图信号
结合今日的 Issue 与 Open PR，可以看出项目接下来的重点演进方向：
- **底层运行时去耦合**：PR [#881](https://github.com/nullclaw/nullclaw/pull/881) 正在用原生的 `std.http` 包装器替换运行时的 `curl` 子进程。若合并，将极大减少外部依赖和进程开销，提升单二进制文件的执行效率。
- **安全防注入机制**：PR [#880](https://github.com/nullclaw/nullclaw/pull/880) 为外部内容（web_fetch / web_search）引入了防欺骗边界和 Unicode 同形字折叠。这表明项目正在对标业界顶级 AI 安全标准，防御提示词注入攻击。
- **高并发与抢占式处理**：PR [#855](https://github.com/nullclaw/nullclaw/pull/855) 和 [#854](https://github.com/nullclaw/nullclaw/pull/854) 正在彻底重构 Daemon 和子 Agent 的并发逻辑，支持轮次抢占。这是实现极速交互式体验的关键路线图信号。

## 7. 用户反馈摘要
从近期的 Issues 交流中可以提炼出以下真实用户画像与痛点：
- **重度依赖容器化部署**：多名用户在 Docker 环境下部署网关和 Agent，对文件挂载权限、交互式引导的容错性有较高要求。
- **B2B 与多租户需求初现**：用户 `jacktang` 连续提出了多工作空间和硬编码技能路由的需求，表明部分用户可能正在将 NullClaw 部署为多用户/多业务的底层路由网关。
- **前端 UI 集成渴求**：用户对 A2A 流进度的暴露要求说明，正在基于 NullClaw 构建自定义 UI 的开发者群体正在增长。

## 8. 待处理积压
目前暂无超过 30 天未响应的严重积压 Issue。但维护者应重点关注以下正在审查中的大型 PR 簇，避免产生合并冲突：
- **入站路由 PR 矩阵**：目前有 PR [#847](https://github.com/nullclaw/nullclaw/pull/847) (gateway)、[#848](https://github.com/nullclaw/nullclaw/pull/848) (daemon) 等多个模块正在等待合并以完成并发交互支持，建议在合并前进行完整的集成测试。
- **网络与内存优化积压**：PR [#852](https://github.com/nullclaw/nullclaw/pull/852) (memory 召回质量优化) 和 [#853](https://github.com/nullclaw/nullclaw/pull/853) (accept 循环防 CPU 空转) 均属于底层核心模块改动，等待具有相关权限的维护者进行深度 Code Review。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是为您生成的 2026-05-02 IronClaw 项目动态日报。

---

# 📊 IronClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
IronClaw 项目在过去24小时内保持了**极高的活跃度与健康的开发节奏**，后端架构重构与前端生态建设齐头并进。项目核心主力 `serrrfirat` 和核心维护者 `ilblackdragon` 正在全力推进代号为 **"Reborn"** 的底层架构重构，今日落地的 PR 主要集中在主机运行时、网络出口隔离和审批恢复机制。同时，社区迎来了一波由 `abbyshekit` 贡献的大型功能矩阵，一次性提交了多个重量级 PR，涵盖法律文档分析、使用洞察和系统备份等实用特性，极大丰富了项目的应用生态。

## 2. 版本发布
**无新版本发布**。
今日无新的 Tag 或 Release 生成。尽管核心开发者已经提交了修复安装脚本的 PR（#3172），但尚未正式合入并触发发布流水线，仍在积累和测试中。

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，大幅推进了 Reborn 架构的落地和现有 Bug 的修复：

*   **[Reborn] 主机运行时与生命周期管理落地**：
    *   **feat(reborn): add host runtime approval resume** ([PR #3160](https://github.com/nearai/ironclaw/pull/3160)): 实现了 `HostRuntime` 的审批恢复门面，为集成测试 Phase 3b 铺平了道路。
    *   **Define background process obligation reconciliation lifecycle** ([PR #3161](https://github.com/nearai/ironclaw/pull/3161)): 闭合了后台进程执行的义务生命周期定义，明确了 `CapabilityHost::spawn_json` 将效果传递给 `ProcessManager` 后的处理路径。
*   **安全与沙箱执行隔离加固**：
    *   **Wire EnforceResourceCeiling into runtime and sandbox enforcement** ([PR #3159](https://github.com/nearai/ironclaw/pull/3159)): 将资源上限强制执行接入了 Reborn 宿主机的义务路径，非输出资源超标现在会被拒绝或 fail-closed，而非静默接受。
    *   **test(reborn): guard script HTTP egress path** ([PR #3163](https://github.com/nearai/ironclaw/pull/3163)): 确保了 Docker 脚本后端强制运行在 `--network none` 下，并通过测试锁死了参数解析逻辑，防止恶意 Docker 参数逃逸。
*   **严重用户体验 Bug 修复**：
    *   **fix(bridge): mission_* tools accept name; resolves #2583** ([PR #3155](https://github.com/nearai/ironclaw/pull/3155)): 修复了导致 Routine 创建失败并报 "5 consecutive code errors" 的严重问题。根本原因是 LLM 传递的是 `name` 而底座要求 `id`，现已修复。

## 4. 社区热点
今日讨论最活跃、关注度最高的问题均与 **架构演进** 和 **基础设施可用性** 相关：

*   **[EPIC] Track Reborn architecture landing strategy** ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987))：**评论数高达 44 条**。这是目前 Reborn 架构重构的总指挥 Epic，核心开发者在持续同步不使用大型堆叠 PR 的分批登陆策略，显示出架构重构正在高强度推进中。
*   **[TEST] Reborn: Add vertical-slice integration test suite** ([Issue #3067](https://github.com/nearai/ironclaw/issues/3067))：**评论 14 条**。讨论如何通过公开入口点证明底层架构工作的垂直切片测试，是保障 Reborn 顺利重构的质量护城河。
*   **ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu** ([Issue #2949](https://github.com/nearai/ironclaw/issues/2949)) & **installer for v0.26.0 fails** ([Issue #2818](https://github.com/nearai/ironclaw/issues/2818))：引发社区大量反馈，用户普遍遇到由于命名空间标签导致的安装脚本解析错误（👍: 1）。

## 5. Bug 与稳定性
今日报告了两个影响业务流转的 P1 级 Bug，且目前**均已有对应的 PR 进行了修复**，等待后续发版：

*   **[P1] Mission 创建类型解析错误**：([Issue #3132](https://github.com/nearai/ironclaw/issues/3132)) 用户在创建任务时失败，报错 `'cooldown_secs' must be an integer, got "120"`。这说明系统在解析字符串和整数类型转换时存在缺陷。
*   **[P1] Gmail 认证阻碍 Mission 执行**：([Issue #3133](https://github.com/nearai/ironclaw/issues/3133)) 用户尝试建立一个每三分钟发送邮件的 Mission，但因无法完成 Gmail 身份验证而彻底失败。此需求在 `[ enhancement ] Mission auto-resume after auth/approval gate resolution` ([Issue #3166](https://github.com/nearai/ironclaw/issues/3166)) 中正在寻求机制级解决，以便在授权门被暂停后自动恢复。
*   **[安装] x86_64 安装失败**：([Issue #2818](https://github.com/nearai/ironclaw/issues/2818)) `cargo-dist 0.30.3` 存在标签命名空间解析 Bug，目前已提报修复 PR [#3172](https://github.com/nearai/ironclaw/pull/3172)。

## 6. 功能请求与路线图信号
从今日的 PR 动向来看，项目正在向**企业级生产力工具平台**演进，出现了大量突破性的跨平台、跨业务功能：

*   **法律合同审查套件**：`abbyshekit` 连续提出了基于 RAG 的文档聊天系统 ([PR #3179](https://github.com/nearai/ironclaw/pull/3179))、文档一键导出 ([PR #3174](https://github.com/nearai/ironclaw/pull/3174)) 及其基础设施 ([PR #3173](https://github.com/nearai/ironclaw/pull/3173))。这表明 IronClaw 正在探索垂直领域的具体业务应用。
*   **系统运维与状态分析**：新增的 `ironclaw backup --quick` ([PR #3178](https://github.com/nearai/ironclaw/pull/3178)) 和 `ironclaw insights` ([PR #3177](https://github.com/nearai/ironclaw/pull/3177)) 大幅提升了单机部署时的数据安全性和运行状态可见性。
*   **多架构支持诉求**：社区用户提出希望增加 Docker 的 `arm64/aarch64` 架构支持 ([Issue #3168](https://github.com/nearai/ironclaw/issues/3168))。鉴于 WASM JIT 编译器已提供支持，该功能有望较快纳入排期。

## 7. 用户反馈摘要
通过筛选近期的 Issues，我们可以提炼出用户的以下核心痛点：

*   **安装门槛卡点**：由于官方安装脚本缺陷，Linux x86_64 用户在过去一周经历了无法下载的窘境，迫切需要一次 Release 来修复分发通道。
*   **Docker Hub 镜像缺失**：用户反映文档中提及的 `nearai/ironclaw:latest` 镜像在 Docker Hub 并不存在 ([Issue #2963](https://github.com/nearai/ironclaw/issues/2963))，导致现有 docker 化部署指南形同虚设。
*   **长耗时任务的认证中断**：用户在使用工具跨越时间周期（如定时邮件）时，一旦触发 OAuth 等外部认证，任务直接宣告失败，缺乏后台挂起/唤醒重试机制。

## 8. 待处理积压
建议维护团队关注以下高优积压项：

*   **[P1] Docker 官方镜像缺失** ([Issue #2963](https://github.com/nearai/ironclaw/issues/2963))：目前状态为 OPEN，已严重影响容器化部署体验，需要尽快确认 CI/CD 推送流水线的问题。
*   **大型 PR 审查积压**：贡献者 `abbyshekit` 提交了大量包含数据库迁移 (`DB MIGRATION`)、涉及多模块 (`XL` size) 的 PR（如 #3173, #3176 等），这些 PR 处于 OPEN 状态，需要分配审阅力量跟进，以防产生合并冲突或设计偏差。
*   **[EPIC] Reborn product surface migration** ([Issue #3031](https://github.com/nearai/ironclaw/issues/3031))：由于架构调整，该 Epic 在 5 月 1 日进行了全面重写，需确保所有相关联的子任务和 QA 测试用例同步对齐新逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-05-02)

> 分析师洞察：今日 LobsterAI 展现出典型的“维护者集中清积压”特征。项目整体处于高度活跃的迭代优化期，底层稳定性建设正在稳步推进。

### 1. 今日速览
- **整体活跃度：高**。过去 24 小时内项目虽无新开 Issue，但迎来了高达 **15 项 PR 更新**（其中 9 项被合并/关闭，6 项状态更新），代码合并率表现优异。
- **研发重心聚焦**：从合并的 PR 来看，核心团队（主要贡献者 liuzhq1986）正集中精力修复 **Windows 平台兼容性**、**Cowork（多智能体协作）网关稳定性** 以及 **UI/配置层的边缘Bug**。
- **社区储备充足**：有 6 个处于 Open 状态的 PR（多为社区贡献）获得了更新（标记为 stale），涵盖了从底层渲染性能优化到 UI 交互改进的多个维度，显示社区具备良好的自发迭代动力。

### 2. 版本发布
- **无新版本发布**。但鉴于今日大量累积 Bugfix 被合并，预计项目正在为下一个 Minor 版本或 Patch 修复版本做代码储备。

### 3. 项目进展
今日共有 9 个 PR 被成功合并/关闭，项目在稳定性和用户体验上取得了实质性进展：
- **多智能体会话稳定性提升**：
  - 🛠️ [PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869)：修复了网关在无限重试失败的大模型请求时，导致本地会话死锁的问题。
  - 🛠️ [PR #1857](https://github.com/netease-youdao/LobsterAI/pull/1857)：解决了在首页切换模型时导致网关硬重启的隐患。
- **跨平台体验修复**：
  - 🛠️ [PR #1851](https://github.com/netease-youdao/LobsterAI/pull/1851)：修复了 Windows 系统下删除 Skill 目录时因文件监听器未释放导致的失败问题。
  - 🛠️ [PR #1841](https://github.com/netease-youdao/LobsterAI/pull/1841)：优化了 Windows NSIS 安装程序的退出码检查及诊断逻辑。
- **UI 与配置健壮性**：
  - 🛠️ [PR #1868](https://github.com/netease-youdao/LobsterAI/pull/1868)：限制了微信渠道发送图片的尺寸并增加了点击预览功能。
  - 🛠️ [PR #1855](https://github.com/netease-youdao/LobsterAI/pull/1855)：修复了过长模型名称导致顶部选择器溢出的问题。
  - 🛠️ [PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840)：修复了配置更新时可能用内存中的过时默认值覆盖已有配置的严重隐患。

### 4. 社区热点
当前社区关注度较高的 PR 集中在用户体验和底层性能的优化上（今日主要触发的是 stale 机制更新，无新增评论热度）：
- **🔥 性能优化方案**：[PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186) 提出优化流式响应渲染，通过引入 `React.memo` 和 `createSelector` 消除 AI 回复时的全量重渲染，直击复杂会话下前端卡顿的痛点。
- **🔥 技能管理体验升级**：[PR #1185](https://github.com/netease-youdao/LobsterAI/pull/1185) 请求为已导入技能添加“打开文件夹”按钮，极大便利了高级用户自定义和编辑 Skill。

### 5. Bug 与稳定性
今日报告的新 Bug 较少，但合并了多个历史重要 Bug 的修复：
1. **P0 核心逻辑 - 配置覆盖风险**：[PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840) (已修复)。部分更新（如选模型）可能会意外覆盖存储的 providers 配置。
2. **P1 网络与并发 - Token 刷新竞态**：[PR #822](https://github.com/netease-youdao/LobsterAI/pull/822) (待合并)。修复多个 401 响应并发触发 token 刷新导致的认证冲突，此 PR 目前仍处于 Open 状态，亟待合入。
3. **P1 资源管理 - 会话死锁**：[PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869) (已修复)。网关层面的生命周期错误导致会话彻底锁死。

### 6. 功能请求与路线图信号
结合处于 Open 状态的 PR，项目在个人 AI 助手层面的演进路线显现出以下信号：
- **本地技能的强化**：[PR #825](https://github.com/netease-youdao/LobsterAI/pull/825) 加入了本地 Skill 的哈希重复检测，配合 [PR #1185](https://github.com/netease-youdao/LobsterAI/pull/1185) 的快速打开文件夹，暗示项目正在鼓励用户构建和使用更丰富的本地技能生态。
- **多智能体后台任务隐形化**：[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 提出将内部心跳/定时路由的主 Agent 会话从用户可见的列表中隐藏。这说明项目正在对 Cowork 功能进行可用性打磨，减少对用户的视觉干扰。

### 7. 用户反馈摘要
从近期提交的 PR 摘要和修复动作来看，提炼出真实用户的几个核心反馈：
- **Windows 体验痛点**：卸载时程序未停止（[PR #1190](https://github.com/netease-youdao/LobsterAI/pull/1190)）、删除 Skill 报错等，反映出跨平台桌面端（尤其是 Win）的系统级进程/文件管理仍需谨慎。
- **IM 渠道交互融合**：对微信等渠道发来的图片有大尺寸显示问题（[PR #1868](https://github.com/netease-youdao/LobsterAI/pull/1868)），表明项目有大量用户将其作为自动化客服或私人助理接入外部 IM 使用。

### 8. 待处理积压
以下重要 PR 已经超过一个月未合并且被标记为 stale，需要项目维护者重点关注，避免社区贡献者流失：
- ⚠️ **[PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186)** 优化流式渲染性能。这是一个高价值的性能提升 PR，建议维护者进行代码评审并推进合入。
- ⚠️ **[PR #822](https://github.com/netease-youdao/LobsterAI/pull/822)** 统一 Token 刷新锁。该修复消除了严重的并发竞态条件，对多账号或高频调用场景至关重要。
- ⚠️ **[PR #1190](https://github.com/netease-youdao/LobsterAI/pull/1190)** 及 **[PR #825](https://github.com/netease-youdao/LobsterAI/pull/825)** 等涉及安装流程和 Skill 上传的基础体验优化也处于搁置状态。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 2 日 Moltis 项目动态日报：

# 📊 Moltis 项目日报 (2026-05-02)

## 1. 今日速览
过去 24 小时内，Moltis 项目呈现出**极高的维护活跃度与迭代速度**。社区共报告了 5 个 Issues（其中 4 个为 Bug），核心维护者极其高效地响应，所有 Bug 均在当日被修复并关闭。全天共推进了 11 个 PRs（8 个已合并/关闭），不仅快速修补了多个端（Telegram、Discord、Web UI）的体验缺陷，还成功合入了数据备份导出、新 Provider 支持等重量级特性。整体来看，项目当前处于**功能横向扩展与多端体验打磨**的高健康度阶段。

## 2. 版本发布
**无新版本发布。**
*(注：鉴于今日合并了多项关键修复与特性，预计近期会有一个新的 Patch 或 Minor 版本发布。)*

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，项目在多渠道接入、UI 稳定性和数据安全方面取得了实质性进展：
- **数据可移植性突破**：[#951 feat(portable): add data import/export](https://github.com/moltis-org/moltis/pull/951) 被合并，引入了全新的 `moltis-portable` crate，支持通过 CLI/API/Web UI 将配置、数据库和会话打包为 `.tar.gz` 备份恢复，极大提升了自部署用户的数据安全性。
- **新增大模型代理支持**：[#944 feat(providers): add Zen provider](https://github.com/moltis-org/moltis/pull/944) 合并，接入了 opencode.ai 的 Zen 模型代理服务，为用户提供了更多具有零数据保留策略的模型选择。
- **UI 体验优化**：[#943 feat(web-ui): hide voice buttons](https://github.com/moltis-org/moltis/pull/943) 完善了配置联动，关闭语音功能时自动隐藏相关 UI 按钮；[#952 fix(web-ui): prevent horizontal overflow](https://github.com/moltis-org/moltis/pull/952) 修复了聊天容器过宽导致的水平滚动条问题。
- **国际化推进**：历时近两个月，[#339 feat(i18n): add zh-TW locale support](https://github.com/moltis-org/moltis/pull/339) 终于合并，正式支持繁体中文（台湾）。

## 4. 社区热点
- **聊天自动滚动问题 ([#946](https://github.com/moltis-org/moltis/issues/946))**：该 Bug 报告获得了 1 个 👍，代表了 Web 端用户的典型痛点。维护者不仅快速响应，还在 [PR #953](https://github.com/moltis-org/moltis/pull/953) 中专门添加了 6 个 e2e 回归测试以确保问题不再复发，展现了极高的工程质量。
- **多后端沙箱执行环境 ([#942](https://github.com/moltis-org/moltis/pull/942))**：这是一个仍在 Open 状态的重磅 PR，旨在支持 Vercel、Daytona 等远程沙箱后端，解决云原生部署环境下的 Docker 限制问题，预计将在社区自部署场景中引发高度关注。

## 5. Bug 与稳定性
今日报告的 Bug 具有较高的优先级，但**均已被立即修复**，整体稳定性未受损：
1. **[P0/崩溃] Telegram 文件上传导致系统崩溃 ([#947](https://github.com/moltis-org/moltis/issues/947))**：在使用 multipart 上传文档时触发 panic。
   - *状态*：已由 [PR #954](https://github.com/moltis-org/moltis/pull/954) 修复（通过升级 teloxide 至 0.17 解决）。
2. **[P1/体验受损] Discord Slash 命令参数丢失 ([#948](https://github.com/moltis-org/moltis/issues/948))**：用户输入 `/mode 2` 等参数被静默忽略。
   - *状态*：已由 [PR #950](https://github.com/moltis-org/moltis/pull/950) 修复。
3. **[P2/UI 异常] Web 聊天界面过宽 ([#945](https://github.com/moltis-org/moltis/issues/945))** 与 **[P2/UI 异常] 聊天不自动滚屏 ([#946](https://github.com/moltis-org/moltis/issues/946))**。
   - *状态*：已由 [PR #952](https://github.com/moltis-org/moltis/pull/952) 和 [PR #953](https://github.com/moltis-org/moltis/pull/953) 修复。

## 6. 功能请求与路线图信号
- **子智能体容错机制请求**：用户在 [#949](https://github.com/moltis-org/moltis/issues/949) 中提出，通过 `spawn_agent` 生成的子智能体在遇到单一 Provider 5xx 错误时会导致整个会话中断，请求增加 provider failover（故障转移）支持。这反映了用户正在将 Moltis 应用于**复杂的多智能体编排场景**，对底层高可用性有强烈需求。
- **云原生部署趋势**：结合待合并的远程沙箱支持 [PR #942](https://github.com/moltis-org/moltis/pull/942) 和刚合并的 Twillo 电话呼叫支持 [PR #920](https://github.com/moltis-org/moltis/pull/920)，可以看出项目的下一阶段路线图正明确指向**云端部署、多通道通信与多智能体**方向。

## 7. 用户反馈摘要
从今日的 Issue 报告中可以提炼出以下用户画像和痛点：
- **多端协同使用成为常态**：多位重度用户同时在 Telegram、Discord 和 Web UI 上切换使用 Moltis，并对各端的功能一致性（如 Discord 的命令参数）提出了严格要求。
- **静默失败引发困惑**：[#948](https://github.com/moltis-org/moltis/issues/948) 表明，当系统忽略用户指令时（如参数未生效），会带来极大的困扰，用户更倾向于获得明确的错误反馈。
- **开发者体验要求提升**：用户对于沙箱环境、子智能体高可用和数据备份的呼声，表明 Moltis 正在从“个人 AI 助手”向“团队/企业级 AI Agent 运行平台”演进，用户对底层基础设施的健壮性要求正在成倍增加。

## 8. 待处理积压
以下几个高价值 PR 仍处于 Open 状态，需维护团队重点关注并推进 Code Review：
- **[PR #942 feat(sandbox)](https://github.com/moltis-org/moltis/pull/942)**：远程与多后端沙箱支持，代码量较大，涉及核心执行环境更改，需重点关注安全性与隔离性审查。
- **[PR #920 feat(telephony)](https://github.com/moltis-org/moltis/pull/920)**：基于 Twilio 的电话呼叫支持，已开启 3 天，等待合并。
- **[PR #955 fix(terminal)](https://github.com/moltis-org/moltis/pull/955)**：终端 Tab 创建时的竞态条件修复，今日新开，等待维护者复核。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🐾 CoPaw (QwenPaw) 项目动态日报 - 2026年05月02日

## 1. 今日速览
CoPaw 项目在过去24小时内保持了较高的社区活跃度，共产生 **7 条 Issue 更新（全部为活跃状态）** 和 **4 条 PR 更新（3待合并，1已关闭）**，且无新版本发布。整体来看，项目当前正处于功能快速演进与社区诉求爆发的阶段。用户反馈的焦点高度集中在 **记忆/上下文管理机制** 以及 **多模型（如DeepSeek V4、本地Ollama）的兼容性与深度适配** 上。项目生态正在扩展，迎来了火山引擎等新 Provider 的接入尝试，但也暴露出在长时间对话稳定性和多平台打包构建方面的底层痛点。

---

## 2. 版本发布
无。
*过去24小时内项目未发布任何新版本或补丁。*

---

## 3. 项目进展
今日没有合并新的代码，但有一个 PR 被关闭，另有多个重要功能 PR 处于待合并状态：

*   **❌ PR #3989 [CLOSED] add knowledge** by [suisrc](https://github.com/suisrc)
    *   **概况**: 一位首次贡献者提交的 PR，旨在添加某些知识库相关内容，但在提交当天即被关闭。
    *   **进展**: 可能由于不符合贡献规范或方向未对齐而被驳回。
*   **⏳ PR #3994 [OPEN] Feat/volcengine provider** by [Nioolek](https://github.com/Nioolek)
    *   **进展**: 新增火山引擎及其 coding plan provider。这标志着 CoPaw 正在积极拓宽国内云厂商 LLM 生态的接入能力。
*   **⏳ PR #3831 [OPEN] Add vector model connection test feature** by [no-teasy](https://github.com/no-teasy)
    *   **进展**: 增加了向量模型连接测试功能。这对于优化 RAG（检索增强生成）和知识库构建的可用性至关重要，解决了用户在配置向量数据库时无法快速验证连通性的痛点。
*   **⏳ PR #3525 [OPEN] [Under Review] feat(cron): create Discord thread before agent dispatch** by [energyd](https://github.com/energyd)
    *   **进展**: 针对 Discord 频道的定时任务（Cron）优化，允许在代理分发前创建独立的 Thread。该 PR 正在审核中，将极大改善 Discord 社区中日常摘要、监控等自动化任务的消息阅读体验，避免刷屏。

---

## 4. 社区热点
今日讨论最热（评论数最多）的 Issues 集中在系统稳定性和底层功能增强：

*   🗣️ **[#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) [Bug]: 和agent聊天了几轮之后，就不会继续执行了** (评论: 2)
    *   **诉求分析**: 这是核心功能的致命痛点。多轮对话中断直接影响了“个人 AI 助手”的基本盘。结合评论区的探讨，这可能与上下文溢出、Memory 文件过大导致 prompt 超出限制有关。
*   🗣️ **[#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) [Bug]: 打包windows版本 conda-pack 与 pip 动作冲突** (评论: 2)
    *   **诉求分析**: 针对本地部署和二次开发用户的痛点。环境依赖冲突（特别是 Windows 环境下打包工具链与 pip 的搏弈）一直是 Python 项目的深水区，该问题导致开发者难以顺利构建环境。

---

## 5. Bug 与稳定性
今日报告了多个影响稳定性的 Bug，按严重程度排列：

1.  **P0 (核心流程阻断): [Bug] 聊天几轮后停止执行 ([#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992))**
    *   *现状*: 多轮对话后 Agent 停滞，可能由于 Token 溢出或底层异常捕获未抛出。*暂无 Fix PR*。
2.  **P1 (功能缺陷): [Bug] Ollama 频道会话记忆丢失 ([#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991))**
    *   *现状*: 在使用 Ollama 本地模型（如 qwen3.5-7b）时无法携带上下文，而在线 API 正常。这指明了项目在本地模型 Provider 的上下文拼接逻辑中存在特定缺陷。*暂无 Fix PR*。
3.  **P2 (构建与部署): [Bug] Windows 环境打包冲突 ([#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988))**
    *   *现状*: `conda-pack <=0.7.1` 与 `pip install qwenpaw[full]` 冲突，阻碍了私有化部署和分发。*暂无 Fix PR*。

---

## 6. 功能请求与路线图信号
从今日的 Issue 动态来看，项目正在经历“深度使用”后的反馈回溯，以下是明确的演进信号：

*   🔮 **深度模型适配与推理控制精细化**
    *   [Feature #3996](https://github.com/agentscope-ai/QwenPaw/issues/3996): 用户请求支持 DeepSeek V4 模型更细粒度的思考模式控制（不仅限于 on/off，需要支持 `xhigh/max` 级别）。
    *   *路线图判断*: 随着 DeepSeek 等模型的能力跃升，CoPaw 需要在 Provider 层重构对 `extra_body` 参数的透传能力。
*   🔮 **记忆系统重构与生命周期管理 (高优)**
    *   [Feature #3995](https://github.com/agentscope-ai/QwenPaw/issues/3995): 提出了极具建设性的记忆管理方案，包括：自动归档超期笔记、写入冲突检测。
    *   *路线图判断*: 随着用户对话量增加，基于 Markdown 的轻量级记忆系统正面临性能瓶颈。这个功能极有可能被纳入近期迭代，因为它是解决 #3992 多轮对话崩溃的前置条件。
*   🔮 **协议现代化升级**
    *   [Feature #3993](https://github.com/agentscope-ai/QwenPaw/issues/3993): 请求支持 OpenAI Responses API 和原生 Tool Calling。
*   🔮 **渠道响应性能优化**
    *   [Feature #3990](https://github.com/agentscope-ai/QwenPaw/issues/3990): 通道响应速度太慢（具体频道未知，可能涉及 Webhook 或流式输出）。

---

## 7. 用户反馈摘要
从今日的原始数据中，我们可以提炼出以下真实用户画像与反馈：
*   **本地化与数据主权需求强烈**: 越来越多用户使用 Ollama 跑本地模型（Issue #3991），说明 CoPaw 在注重隐私的极客和企业用户中渗透率提升。
*   **记忆即人格**: 用户对 AI 助手“失忆”容忍度极低，且对记忆管理（冲突、归档）有高级需求（Issue #3995, #3991），证明 CoPaw 已经作为长期记忆体被集成到用户的工作流中。
*   **开发者体验（DX）需提升**: 二次开发者在 Windows 环境下打包受挫（Issue #3988），且抱怨排障困难（子程序缺乏 std/sterr 输出），项目在工程化健壮性和日志埋点方面需要加固。

---

## 8. 待处理积压
基于今日的静态数据，以下方面需要项目维护团队高度关注：

*   🚨 **长时间对话导致的崩溃问题**: Issue [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) 和 [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) 直接反映了当前系统在上下文管理上的脆弱性。建议团队优先排查 Token 计算与历史截断逻辑。
*   ⚠️ **审核积压的 PR**: 包括 Discord Thread 功能 ([PR #3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)，已挂起半个月) 和 Vector 连接测试 ([PR #3831](https://github.com/agentscope-ai/QwenPaw/pull/3831))。这些积压 PR 包含大量社区期待的功能特征，建议团队尽快进行 Code Review 以保持社区贡献者的积极性。
*   ⚠️ **急需建立高并发/长对话压力测试基准**: 针对今日爆出的多轮对话记忆丢失和卡死问题，项目需要引入自动化测试流水线，模拟 50+ 轮带 RAG 检索的复杂会话场景。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了**极高的社区活跃度与开发推进速度**。项目迎来了一次重要的里程碑发布——**v0.7.4**，底层进行了大量重构与优化。同时，Issue 与 PR 活动均非常活跃（更新量分别达到 50 条），表明社区参与度正处于高点。今日的讨论焦点主要集中在 v0.7.x 版本引入的初始配置问题、技能系统的安全审查以及底层沙箱机制的兼容性上。

## 2. 版本发布
项目今日正式发布了 **[v0.7.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4)**。
- **核心更新**：作为 v0.7.x 的首个补丁版本，该版本包含多项重大底层重构：
  1. **Matrix 重写**：进行了干净彻底的 Matrix 协议重写。
  2. **国际化 (i18n)**：引入 Mozilla Fluent 管线，支持多语言文档。
  3. **CLI/TUI 引导流**：从底层重写了命令行和终端的用户引导体验。
  4. **微信渠道恢复**：重新接入并恢复了 WeChat iLink Bot 频道。
- **迁移注意事项**：由于 CLI/TUI 引导和底层协议进行了大规模重写，建议从老版本升级的用户仔细检查初始化配置状态。

## 3. 项目进展
今日共有 **4 个 PR 被合并/关闭**，部分长期推进的重大功能取得了实质性进展：
- **Cron 手动触发功能落地**：PR [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) (已关闭)，引入了通过 WebUI 手动触发 Cron 任务的功能，完善了任务调度生态。
- **外部编码工具对齐**：PR [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) (已关闭)，增加了 Codex runner，实现了与 `claude_code_runner` 的功能对等。
- **CI 流水线修复**：PR [#6212](https://github.com/zeroclaw-labs/zeroclaw/pull/6212) 提交了 Node 工具链的修复，统一了开发环境的基准版本。
- **Webhook 路由修复**：PR [#5141](https://github.com/zeroclaw-labs/zeroclaw/pull/5141) (已关闭)，将 Webhook 请求正确路由至支持工具调用的执行循环中。

## 4. 社区热点
今日讨论最热烈的 Issue 集中在初始化配置与系统认知盲区：
- **全新安装的默认模型报错**：Issue [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)（15 条评论，P1）。多名用户反馈在全新 LXC 容器安装并完成引导后，遇到了阻塞工作流的 S1 级报错，表明新的 CLI/TUI 引导流可能在环境变量或默认模型获取上存在缺陷。
- **Agent 工具调用认知盲区**：Issue [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)（8 条评论）。用户发现 ZeroClaw 不知道自己具备添加 Cron 任务的能力，暴露出 System Prompt 或工具自我描述层面的不足。
- **新 LOGO 征集**：Issue [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)（8 条评论，2 个 👍）。社区正在积极探讨并设计全新的项目 Logo。

## 5. Bug 与稳定性
今日报告了多个关键模块的 Bug，按严重程度排列如下：
- **P0 - 严重阻塞**：
  - [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)：`install.sh` 未从发布包中解压 Web 前端资源，导致 Gateway 无法正常启动。
- **P1 - 工作流受阻/高风险**：
  - [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)：默认 Shell 沙箱配置过于严格，阻断了所有实际的 Python 技能执行模式。
  - [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)：Gateway 聊天成功，但 API 成本计算始终为零，且未生成任何运行时追踪文件。
  - [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697)：即使配置了 `skills.allow_scripts = true`，技能脚本依然被拦截。
  - [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)：SkillForge 自动集成器在 `SKILL.toml` 中生成了不符合 Schema 规范的字段。
- **P2 - 降级体验**：
  - [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)：基于 Firefox 的浏览器在输入聊天内容时会导致多核 CPU 飙升。

## 6. 功能请求与路线图信号
通过梳理近期的 Feature 请求与活跃 PR，可以发现项目正朝着 **“精细化权限控制”** 与 **“多渠道无缝接入”** 演进：
- **Schema v3 迁移准备**：Issue [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) 与 [#6017](https://github.com/zeroclaw-labs/zeroclaw/issues/6017) 正在紧锣密鼓地规划批量破坏性字段迁移和 SQLite 内存后端的适配，这是 v0.8.0 的核心前置工作。
- **细粒度技能权限隔离**：Issue [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) 提出对每个 Skill 配置独立的 `allow_scripts` 和 `allowed_commands` 权限，这对于企业级安全落地至关重要，有望纳入下个大版本。
- **更广泛的兼容性支持**：
  - PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) 正在增加 WhatsApp 作为 Cron 任务的推送渠道。
  - Issue [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) 建议支持 LM Studio 自定义服务器 URL。
  - Issue [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) 计划支持从 `.well-known` URI 标准化安装技能。

## 7. 用户反馈摘要
从 Issues 评论和真实报错中，可以提炼出以下核心用户痛点：
- **配置体验存在割裂**：Web UI 高级设置文本光标错位（[#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)），自检工具强行使用 127.0.0.1 而非用户指定的 0.0.0.0（[#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)），反映出前后端配置层的同步问题。
- **外部模型接入门槛高**：用户在使用 OpenRouter 或本地 LXC 内的 Ollama 时，经常遭遇模型识别、计费展示错误或回退机制失效的问题（[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)，[#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070)）。
- **记忆与上下文连续性需求强烈**：用户强烈希望能够直接通过 Memory 表单无缝恢复之前的聊天上下文（[#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145)）。

## 8. 待处理积压
部分高影响力 PR 和 Issue 处于停滞或需维护者立刻介入的状态，提醒团队关注：
- **长期悬而未决的 PR**：
  - SSRF 防护重构：PR [#4924](https://github.com/zeroclaw-labs/zeroclaw/pull/4924)（XL 体积，高风险）自 3 月底提交后需作者继续行动。
  - Bedrock 签名兼容：PR [#5303](https://github.com/zeroclaw-labs/zeroclaw/pull/5303) 忽略了 Bedrock 的泛型 API_KEY 覆盖问题，长期未合并。
  - 内存恢复与 hardened 机制：PR [#5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540) 需要进一步 Review。
- **需要立即跟进的阻断性问题**：
  - CI/安装流程阻断：Issue [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)（P0），Web 资源未被提取的问题必须尽快发布补丁修复。
  - 安全审计卡点：Issue [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132)（P1，状态 blocked）依赖上游 #5972 的合并，需维护者排期推进。

</details>