# OpenClaw 生态日报 2026-05-26

> Issues: 461 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-25 22:19 UTC

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

以下是为您生成的 2026-05-26 OpenClaw 项目动态日报。

---

# 📊 OpenClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
OpenClaw 项目今日保持**极高的开发与社区活跃度**。过去 24 小时内，项目共处理了 461 条 Issue（其中新开/活跃 179 条，关闭 282 条）和 500 条 PR（待合并 280 条，合并/关闭 220 条），呈现出闭环速度极快、积压清理显著的健康态势。今日发布了 `v2026.5.24-beta.2` 版本，引入了针对 iMessage 的手势审批特性。社区方面，讨论焦点高度集中在 **Codex 运行时深度重构、Session 并发接管竞态、以及上下文压缩机制**等核心架构的稳定性上。

## 2. 版本发布
- **[`v2026.5.24-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.2)**
  - **更新内容**：支持 iMessage 频道的 **手势审批**（thumb-approval reactions）。用户现在可以通过点按 `👍`（Like）自动触发 `allow-once`（允许一次），点按 `👎` 触发 `deny`（拒绝）。
  - **配置依赖**：显式审批者白名单将通过读取 `channels.imessage.allowFrom` 配置项生效；若需 `allow-always`（始终允许），仍需依赖传统的 `/approve <id> allow-always` 文本回退指令。

## 3. 项目进展
今日团队合并/关闭了大量关键 PR，核心架构演进和组件解耦取得了实质性进展：
- **Agent 运行时重构与虚拟化**：PR [#85341](https://github.com/openclaw/openclaw/pull/85341) 提交了重大的架构重构，将旧的 Pi 形状 agent/runtime 架构从 OpenClaw 中剥离，并重新集成为 OpenClaw 原生核心，标志着 OpenClaw 正在彻底摆脱嵌入式依赖。
- **并发与稳定性修复**：
  - 针对令开发者头疼的 Session Takeover 竞态问题，PR [#84353](https://github.com/openclaw/openclaw/pull/84353) 实现了在清理尝试中放弃挂起的写入锁，目前该 PR 已进入 `automerge armed` 状态。
  - PR [#86067](https://github.com/openclaw/openclaw/pull/86067) 引入了文件范围的 prompt-window 保护机制，以防范同一会话中嵌入式运行的竞态冲突。
- **监控与诊断**：PR [#86191](https://github.com/openclaw/openclaw/pull/86191) 为 LLM 调用添加了 OpenTelemetry 内容跨度追踪，大幅增强了复杂模型调用的可观测性。

## 4. 社区热点
当前社区讨论最激烈的问题集中在长时推理任务中断和多模型适配的痛点上：
- **[#80319](https://github.com/openclaw/openclaw/issues/80319) (评论 17 条)**：QA 工具默认套件混淆了 Codex 原生工具与 OpenClaw 动态工具的对等问题。该 Issue 澄清了当前工具调用丢失多为 QA harness 问题，而非广泛的运行时缺陷。
- **[#44925](https://github.com/openclaw/openclaw/issues/44925) (评论 17 条, 🦞 diamond lobster)**：子 Agent 编排在超时后不仅**静默丢失结果**，且不重试、不通知、不自动重启。这暴露了当前多 Agent 调度在边缘情况下的严重脆弱性。
- **[#68596](https://github.com/openclaw/openclaw/issues/68596) (评论 13 条, 👍 8)**：请求支持**配置流式看门狗超时阈值**。用户在使用 DeepSeek-R1、Kimi-K2.5 等需要长时深度思考的模型时，30 秒的默认无流更新超时会导致请求被频繁且错误地重置。
- **[#18160](https://github.com/openclaw/openclaw/issues/18160) (评论 12 条, 👍 9)**：需求最为集中的 Feature Request，要求 **Cron 定时任务支持直接执行模式**。社区强烈反馈当前通过 LLM 解释执行简单定时命令的方式不仅增加延迟，还容易导致 API 超时失败。

## 5. Bug 与稳定性
今日报告了多起高严重级别（P1）的 Bug 及回归问题，其中数起直接影响了网关和主流程的可用性：
- **🚨 P1: Telegram 消息静默丢失且无日志** ([#80520](https://github.com/openclaw/openclaw/issues/80520))：网关接收到消息但未调用 `sendMessage`，导致用户完全收不到回复。尚无关联 Fix PR。
- **🚨 P1: 事件循环阻塞引发崩溃或高延迟**：
  - [#85999](https://github.com/openclaw/openclaw/issues/85999)：升级到 2026.5.22 后，网关启动时 `warmCurrentProviderAuthState` 阻塞 Node 事件循环约 60 秒，导致频道握手失败。
  - [#86599](https://github.com/openclaw/openclaw/issues/86599)：Windows 本地模型调用会阻塞网关事件循环，简单的推断耗时竟达到 4 分钟。
  - [#86613](https://github.com/openclaw/openclaw/issues/86613)：网关在处理内存搜索时累积打开超过 1.2 万个只读文件描述符（FD），疑似存在 FD 泄漏。
- **🚨 P0 安全漏洞：跨用户隐私泄漏** ([#85240](https://github.com/openclaw/openclaw/issues/85240)，已关闭)：`relevant-memories` 召回机制未按 `sender_id` 隔离，导致用户 A 的私有记忆被注入到用户 B 的上下文中。

## 6. 功能请求与路线图信号
从近期的 PR 动向来看，以下重要的架构演进已在排期或落地中：
- **SQLite 优先的会话存储架构**：Issues [#79904](https://github.com/openclaw/openclaw/issues/79904)、[#79903](https://github.com/openclaw/openclaw/issues/79903)、[#79905](https://github.com/openclaw/openclaw/issues/79905) 提出构建基于游标的 SQLite 转录读取 API 及持久化会话血统。这表明 OpenClaw 正在从文件系统级的 `.jsonl` 往更健壮的嵌入式数据库过渡。
- **Channel Broker 统一抽象层**：PR [#86165](https://github.com/openclaw/openclaw/pull/86165) 提交了 Channel Broker 第四阶段受限提供者能力，意在将 Telegram、Discord、Slack 等频道的会话、路由、白名单逻辑抽象为统一契约，解决多平台维护的持续碎片化问题。
- **长上下文治理**：PR [#84824](https://github.com/openclaw/openclaw/pull/84824) 提出为保留的压缩检查点字节设置上限（128 MiB），以及 PR [#86652](https://github.com/openclaw/openclaw/pull/86652) 提出的基于 Token 压力的主动压缩，均显示了项目在解决“上下文膨胀导致 OOM”问题上的决心。

## 7. 用户反馈摘要
通过提炼 Issue 详情，当前用户的痛点与工作负载场景可概括为：
- **边缘设备与跨平台兼容性差**：多位 Apple Silicon (macOS) 用户反馈由于 `node-llama-cpp` 和 `ggml-metal` 的不兼容，导致在执行本地 embedding 时频繁遭遇网关崩溃 ([#44202](https://github.com/openclaw/openclaw/issues/44202))。
- **Agent 自动化编排体验不佳**：社区正积极将 OpenClaw 用于复杂的自动化工作流，但子 Agent 调用经常发生“静默失败”或死锁 ([#44925](https://github.com/openclaw/openclaw/issues/44925))，缺乏可视化的编排与恢复机制。
- **会话压缩副作用严重**：用户反映在上下文达到 85% 触发自动压缩时，经常发生会话翻转导致已生成的正常回复被静默丢弃，且存在无用的系统提示词重复注入导致会话膨胀的问题 ([#47335](https://github.com/openclaw/openclaw/issues/47335), [#45488](https://github.com/openclaw/openclaw/issues/45488))。

## 8. 待处理积压
以下长期未彻底解决或高度活跃的顽疾仍需核心维护团队重点关注：
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)**：子 Agent 静默失败顽疾，已标记为 `impact:message-loss` 且需产品决策，当前仍无干净的修复 PR。
- **[#18160](https://github.com/openclaw/openclaw/issues/18160)**：Cron 任务绕过 LLM 的直接执行模式，已被大量用户呼吁，目前状态为 `clawsweeper:needs-product-decision`。
- **[#60858](https://github.com/openclaw/openclaw/issues/60858)**：三大 `hasRealConversationContent` 守卫错误阻断了上下文压缩，导致压缩机制完全失效，存在数据丢失风险。
- **[#83535](https://github.com/openclaw/openclaw/pull/83535)**：针对 WhatsApp 实时 QA RTT 设置成本的修复，由于涉及范围广及安全边界问题，停留在 `⏳ waiting on author` 状态，推进缓慢。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 26 日的开源社区动态，我为您生成了横向对比与生态分析报告。

---

# 📊 个人 AI 助手与自主智能体开源生态横向分析报告 (2026-05-26)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单体对话向多模态、多智能体协同与安全隔离演进”**的关键重构期。各项目不再满足于简单的“大模型 API 套壳”，而是深入底层解决长时推理中断、上下文膨胀、沙箱逃逸等核心工程痛点。此外，**本地化部署、跨平台集成以及企业级安全合规**已成为驱动项目迭代的核心引擎，生态呈现出高度繁荣但竞争极其激烈的态势。

## 2. 各项目活跃度对比
从 Issue 和 PR 的绝对数量及处理速度来看，第一梯队与长尾项目的分化十分明显。

| 项目名称 | 今日活跃 Issue | 今日活跃 PR | Release 情况 | 健康度/开发节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 461 | 500 | `v2026.5.24-beta.2` | 🟢 极高：闭环极快，处理了大量底层架构重构与积压清理。 |
| **CoPaw** | 42 | 44 | `v1.1.9-beta.1` | 🟢 高：正在经历前端重构（Tauri）与工程化基建升级。 |
| **Hermes Agent**| 50 | 50 | 无 | 🟢 高：核心合并密集，正处于安全加固与性能优化的收敛期。 |
| **IronClaw** | 22 | 50 | 无 (受阻) | 🟡 中高：PR 活跃，但因上游 CVE 导致官方发版停滞。 |
| **ZeroClaw** | 30 | 50 | 无 | 🟡 中高：正在为 v0.8 积蓄特性，重心向安全防御转移。 |
| **LobsterAI** | N/A | 29 | 无 | 🟡 中等：平稳迭代，重点优化多 Agent 架构与内存管理。 |
| **NanoBot** | 5 | 119 | 无 | 🟠 负载预警：社区提交极为踊跃，但 108 个 PR 待合并，审查积压严重。 |
| **NanoClaw** | 4 | 18 | 无 | 🟡 中等：专注 v2 架构的稳固与 Slack 深度集成。 |
| **Moltis** | 5 | 4+ | `20260525.01` | 🟢 健康：虽体量不大，但并发控制与解耦进展扎实。 |
| **PicoClaw** | 8 | 8 | `v0.2.9-nightly`| 🟠 停滞预警：无 PR 合并，存在审查积压与 API 适配滞后问题。 |
| **NullClaw** | 1 | 2 | 无 | 🔵 平稳：底层架构稳定，处于多点互补的功能探索期。 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 无 | ⚪ 静默：过去 24 小时无动态。 |

## 3. OpenClaw 在生态中的定位
作为生态的**绝对核心参照物（事实标准）**，OpenClaw 在今天的动态中展现了其不可替代的护城河：
* **技术与架构优势**：OpenClaw 正在经历彻底的底层剥离与重构（如弃用 Pi 形状架构，转向 OpenClaw 原生核心），解决了 Session 竞态、上下文压缩等极为硬核的底层难题。相比其他项目还在解决基础工具调用问题，OpenClaw 已经深入到 OOM 防御和 OpenTelemetry 级别的生产可观测性建设。
* **生态规模与虹吸效应**：日处理近千条 Issue/PR 的吞吐量证明了其庞大的贡献者基数。像 LobsterAI 等项目正在专门开发与 OpenClaw 插件/技能目录打通的同步机制，这确立了 OpenClaw 在上游“技能生态”中的核心地位。
* **多端控制权**：通过引入 iMessage 手势审批等特性，OpenClaw 在多渠道的精细化控制粒度上领先于侧重 CLI 或单一 Web 端的竞品。

## 4. 共同关注的技术方向
分析多项目动态，以下四大技术方向成为全行业的共同痛点与发力点：
1. **沙箱隔离与执行安全** (涉及 *ZeroClaw, Hermes, Moltis, CoPaw*)：
   随着智能体获得本地执行代码和访问文件的权限，安全防御成为重中之重。ZeroClaw 修补了 SSRF 和提权漏洞；Hermes 引入了 TLS 拦截防火墙；Moltis 和 CoPaw 都在引入 `sandbox-exec` 或 Landlock 等 OS 级别的文件系统隔离。
2. **复杂子智能体调度与 DAG 编排** (涉及 *OpenClaw, NanoBot, IronClaw, Moltis*)：
   单体 Agent 正在向多 Agent 协作演进。OpenClaw 和 NanoBot 均在着力解决子 Agent 死锁、静默失败和内存泄漏问题；Moltis 实现了非阻塞子智能体支持；IronClaw 则在构建底层的 Spawn 栈。
3. **长时任务心跳与流式反馈** (涉及 *Hermes, PicoClaw, NanoBot*)：
   针对大模型“深度思考”时前端假死的问题，社区强烈要求配置流式超时阈值和心跳反馈。这反映了长思维链模型（如 DeepSeek-R1、Claude 系列）普及后带来的交互体验新挑战。
4. **上下文压缩与记忆管理** (涉及 *OpenClaw, LobsterAI, Hermes, CoPaw*)：
   长对话导致的 OOM 和 Token 浪费极其严重。OpenClaw 引入了主动压缩与上限阻隔机制，而 LobsterAI 和 CoPaw 的用户则在呼唤真正有效的“跨 Session 长期记忆”，而非简单的滑动窗口。

## 5. 差异化定位分析
* **OpenClaw**：定位为**全平台、生产级的基础设施**。其重心在于极高的并发稳定性、异构网关统一抽象以及重度企业级场景的打磨。
* **NanoBot**：定位为**极客友好的轻量级/跨实例智能体载体**。强调低资源消耗，在 GAP 协议和跨实例消息总线上的探索具有前瞻性。
* **Hermes Agent**：定位为**安全优先的自主执行中枢**。引入渗透测试技能、严格的环境变量隔离，显示出在自动化攻防和高安全敏感工作流中的倾向。
* **IronClaw**：定位为**WASM 驱动的多租户云原生智能体**。其 Reborn 架构和证明签名体系极具野心，但受制于底层工具链的漏洞，面临工程落地的阵痛。
* **PicoClaw / NullClaw**：主打**嵌入式与边缘计算**（支持 RISC-V 和底层语言 Zig），适合资源受限的 IoT 或极客本地化场景。
* **CoPaw**：定位为**丰富的桌面端/多渠道集成应用**。发力 Tauri 桌面重构与 Web IDE，侧重于个人开发者的日常辅助体验。

## 6. 社区热度与成熟度
* **爆发/重构迭代期**：`NanoBot`、`IronClaw` 和 `ZeroClaw`。特点是 Feature 爆棚但 Bug 频发（如 NanoBot 的循环死结，IronClaw 的 CPU 死锁）。社区点子多，但维护团队的 Review 承压严重。
* **质量/安全巩固期**：`OpenClaw` 和 `Hermes`。虽然代码量巨大，但核心资源已转向 P0 级别 Bug 的清剿、性能剖析和防线上加固，标志着项目正向“生产可用”迈进。
* **生态/体验打磨期**：`LobsterAI`、`CoPaw`。目前的重点在于 UI 交互优化（如代码模式、时间戳显示）和与其他生态（如 OpenClaw）的插件接轨。

## 7. 值得关注的趋势信号
1. **“本地小模型”与“本地沙箱”的双重本地化闭环**：从 OpenClaw 支持 local LLM 引起的 FD 泄漏，到 ZeroClaw 对本地沙箱逃逸的围堵，说明真正的 AI 智能体正在脱离纯粹的“API 网关”模式，向**“本机 OS 级调度 + 本地模型推理”**融合。开发者必须开始具备系统级编程（如 FD 管理、文件锁、系统沙箱）的能力。
2. **记忆架构正在经历从“附加组件”到“核心基础设施”的跃迁**：无论是 OpenClaw 为防止 OOM 的 128MiB 检查点，还是 LobsterAI 用户呼吁的文件系统元数据持久化，都表明基于 JSON/简单 KV 的上下文管理已达到极限，**基于嵌入式图数据库或 SQLite 的游标游历记忆架构**将是下一波迭代的焦点。
3. **对 Agent “无感失败” 的零容忍**：开发者对 Agent 遇到死循环、超时、空白响应时的“静默吞噬结果”表现出极大的愤怒。建立完善的**心跳保活机制、强制的超时熔断以及可视化的 DAG 回滚机制**，将成为评价一个 Agent 框架优劣的一票否决指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-26)

## 1. 今日速览
今日 NanoBot 项目保持了极高的社区活跃度与开发推进速度。在过去 24 小时内，项目共处理了 **5 条 Issue**（新开/活跃 3 条，关闭 2 条），并迎来了高达 **119 条的 PR 更新**（其中 11 条已顺利合并/关闭，108 条待处理）。虽然今日无新版本发布，但大量代码提交集中在 Agent 底层架构优化、多模型兼容性修复以及跨实例通信等核心特性上。整体来看，项目处于高度健康的快速迭代期，社区贡献热情高涨，底层稳定性与执行逻辑正在得到持续打磨。

---

## 2. 版本发布
**无新版本发布。** 项目当前仍在积累底层架构重构与功能增强，预计将在 Dream 单阶段重构和跨实例通信等重大特性稳定后推出下个版本。

---

## 3. 项目进展
今日共合并/关闭了 **11 个 PR**，主要在 Agent 执行稳定性、多网关兼容性和开发者体验方面取得了实质性进展：

*   **Agent 目标生命周期修复**：[#3999](https://github.com/HKUDS/nanobot/pull/3999) 修复了在执行长期任务时，AgentRunner 因未能等待 `complete_goal` 而提前退出的严重问题，大幅提升了后台持续运行任务的可靠性。
*   **配置与并发控制打通**：[#3978](https://github.com/HKUDS/nanobot/pull/3978) 修复了 `maxConcurrentSubagents` 配置项未生效的 Bug，现在用户可以真正控制子代理的并发数。
*   **多网关思考模型控制**：[#3851](https://github.com/HKUDS/nanobot/pull/3851) 和 [#3867](https://github.com/HKUDS/nanobot/pull/3867) 彻底解决了 MiMo 等具备思考能力的模型在通过 OpenRouter 等网关路由时，无法被正确禁用思考模式的问题。
*   **应用生态统一**：[#3991](https://github.com/HKUDS/nanobot/pull/3991) 将现有的 CLI Apps 和 MCP 预设统一为单一的应用体验架构，简化了用户的操作界面。
*   **新增国内大模型端点支持**：[#3988](https://github.com/HKUDS/nanobot/pull/3988) 新增了对阶跃星辰 Step Plan 订阅端点的专门支持。
*   **代码规范与文档完善**：[#3850](https://github.com/HKUDS/nanobot/pull/3850) 优化了贡献指南，避免了新贡献者遭受大规模格式化 diff 的困扰；[#3866](https://github.com/HKUDS/nanobot/pull/3866) 补充了关于环境变量密钥配置的详细示例。

---

## 4. 社区热点
今日社区注意力高度集中在 **Agent 调度安全、协议扩展与跨实例协作** 等前沿领域：

*   **循环检测与硬阻断机制**（[#3985](https://github.com/HKUDS/nanobot/pull/3985) / [#2271](https://github.com/HKUDS/nanobot/pull/2271)）：随着模型具备工具调用能力，陷入“死循环”成为用户的最大痛点之一。开发者今日提交了“循环检测 v2.0”及相关的检测类，引发了关于如何优雅限制 API 速率与强制打断的讨论。
*   **GitAgent 协议支持**（[#4005](https://github.com/HKUDS/nanobot/pull/4005)）：社区开发者提交了适配 GitAgent Protocol (GAP) 的 PR，旨在让 NanoBot 具备跨平台发现与可移植性，显示出社区将 NanoBot 作为标准智能体载体的期望。
*   **多实例跨代理通信**（[#3992](https://github.com/HKUDS/nanobot/pull/3992)）：这是一个极具想象力的 PR，引入了跨实例消息总线，打破了单个 Agent 的信息孤岛，向多智能体协同迈出了重要一步。

---

## 5. Bug 与稳定性
今日修复和暴露的 Bug 主要围绕流式渲染异常与边界执行逻辑：

1.  **[严重] PowerShell 流式输出严重刷屏** ([#3995](https://github.com/HKUDS/nanobot/Issue/3995)) - **状态**: 已关闭。
    *   **表现**：在 PowerShell 终端中，Agent 的思考流输出伴随异常换行，导致屏幕疯狂刷新（如 `✻ Let ✻ me`）。
    *   **修复**：该 Issue 已关闭，推测底层流式数据处理逻辑已得到修复。
2.  **[中等] 空响应导致工具调用回退失败** ([#4002](https://github.com/HKUDS/nanobot/pull/4002)) - **状态**：PR 已提交。
    *   **表现**：部分模型（如通过 OpenRouter 的 Kimi 2.6）偶尔仅返回推理 token 而无可用 `content` 或 `tool_calls`，导致编排层的 fallback 链断裂。此 PR 旨在修复该回退逻辑。
3.  **[低] Anthropic 内容块格式遗漏** ([#3993](https://github.com/HKUDS/nanobot/Issue/3993)) - **状态**：已确认。
    *   **表现**：未声明 "type" 的字典数据传入 Anthropic 模型时报错。提议在 `_convert_user_content` 层进行强制类型转换兼容。

---

## 6. 功能请求与路线图信号
分析今日 Issues 与活跃 PR，识别出以下下版本的演进信号：

*   **Dream 记忆系统架构大重构**：[#3990](https://github.com/HKUDS/nanobot/pull/3990) 提出将 Dream 两阶段内存合并为单阶段。结合 [#4003](https://github.com/HKUDS/nanobot/pull/4003) 引入的 `dream_managed` 前置元数据标记，表明项目正在**构建一种既能保护用户数据又能让 AI 自主管理技能的长期记忆架构**。
*   **输入模式与连接协议扩充**：[#4000](https://github.com/HKUDS/nanobot/Issue/4000) 和 [#3996](https://github.com/HKUDS/nanobot/pull/3996) 分别请求/实现了 StepFun 原生 ASR 语音转录支持和 Telegram Webhook 模式，说明项目正朝着**多模态、多渠道接入**方向快速演进。
*   **性能监控与启动优化**：[#3997](https://github.com/HKUDS/nanobot/pull/3997) 引入了预热共享分词器和构建状态耗时日志，预示着项目开始重视**大规模生产环境下的冷启动延迟优化**。

---

## 7. 用户反馈摘要
从今日的 Issue 讨论中，可以提炼出以下核心用户画像与反馈：
*   **痛点**：大模型在调用系统命令或搜索工具时“一根筋”（如 grep 搜不到内容时死循环搜索），严重消耗 Token 且毫无进展（来源 [#3986](https://github.com/HKUDS/nanobot/Issue/3986)）。
*   **场景诉求**：重度命令行用户（特别是 Windows/PowerShell 环境）对终端输出渲染的细节极其敏感，要求非阻塞式且不破坏终端视界的流式体验（来源 [#3995](https://github.com/HKUDS/nanobot/Issue/3995)）。
*   **肯定**：来自 [#2155](https://github.com/HKUDS/nanobot/pull/2155) 的反馈表明，部分用户从竞品（如 openclaw）迁移至 NanoBot 后，对其**极低的资源消耗**表示高度赞赏，并积极为其适配终端 TUI 界面。

---

## 8. 待处理积压
当前 PR 待合并积压高达 **108 个**，项目维护者的 Review 压力较大。以下为需重点关注的重要待办：
*   **长期悬挂的架构级 PR**：[#1443](https://github.com/HKUDS/nanobot/pull/1443)（解耦心跳推理与通知机制，已开启近 3 个月）和 [#2155](https://github.com/HKUDS/nanobot/pull/2155)（终端 TUI 交互支持）长期处于 Open 状态，建议维护团队评估是否纳入主线或冻结。
*   **安全与护栏机制亟待定夺**：关于防止大模型陷入死循环的两个 PR（[#3985](https://github.com/HKUDS/nanobot/pull/3985) 和 [#2271](https://github.com/HKUDS/nanobot/pull/2271)）机制重叠，需要核心团队尽快统一 Cycle Detection 的技术路线并合并。
*   **外部搜索接口修复**：[#4004](https://github.com/HKUDS/nanobot/pull/4004) 修复了 Kagi 搜索 API 集成失效的问题，属于关键功能修复，建议优先 review。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是为您生成的 2026 年 5 月 26 日 Hermes Agent 项目动态日报：

# 📊 Hermes Agent 项目动态日报 (2026-05-26)

## 1. 今日速览
过去 24 小时内，Hermes Agent 项目保持了**高强度的迭代与异常活跃的社区参与度**。项目共处理了 50 条 Issue 动态（新开/活跃 27 条，关闭 23 条）以及 50 条 PR 动态（待合并 26 条，合并/关闭 24 条）。虽然今日无正式的 Release 版本发布，但核心维护者（特别是 teknium1）在安全加固、Bug 修复和性能优化上进行了大量代码合并。总体而言，项目目前处于**快速收敛缺陷并向更高安全标准演进的健康发展阶段**。

## 2. 版本发布
**无新版本发布。** 
尽管今日没有推送新的 Release Tag，但从密集合并的修复与功能 PR 来看，项目似乎正在为下一个 Minor 或 Patch 版本进行代码储备与稳定性打磨。

## 3. 项目进展
今日共有关键 PR 实现，显著推进了系统的安全性、运行效率和指令遵循能力：

*   **安全防御机制落地**：
    *   PR [#32277](https://github.com/NousResearch/hermes-agent/pull/32277)：Dashboard 加固，增加了插件资源白名单，并屏蔽了可影响子进程的环境变量。
    *   PR [#32265](https://github.com/NousResearch/hermes-agent/pull/32265)：合并了全新的 `web-pentest` 渗透测试可选技能，引入了 Shannon 的"No Exploit, No Report"方法论。
*   **性能与内存泄漏修复**：
    *   PR [#32271](https://github.com/NousResearch/hermes-agent/pull/32271)：优化了 `.env` 加载机制，防止在使用 Bitwarden 等外部密钥源时，模块导入期间发生重复应用导致的性能损耗。
    *   PR [#32266](https://github.com/NousResearch/hermes-agent/pull/32266)：修复了 Gateway 看板调度器导致的 Cron 文件描述符（FD）静默泄漏问题。
*   **Agent 底层能力优化**：
    *   PR [#32273](https://github.com/NousResearch/hermes-agent/pull/32273)：大幅优化了 `patch` 工具，现在能够正确保留缩进和 CRLF 换行符。
    *   PR [#32264](https://github.com/NousResearch/hermes-agent/pull/32264)：将 Agent 外层循环异常的日志级别提升至 ERROR，提高了生产环境下的故障排查效率。

## 4. 社区热点
今日社区讨论最热烈的方向集中在 **UI 体验、长耗时任务反馈以及计费疑惑**：

*   🥇 **Dashboard 主题体验亟待重构**：Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080)（👍27，评论 19）引发了极高共鸣。作者指出当前的 Midnight、Cyberpunk 等主题仅换了颜色，且使用的非标准衬线字体和对比度导致阅读极其困难。这表明 TUI/Web 前端的 UX 细节是当前用户的一大痛点。
*   🥈 **长耗时工具缺乏心跳反馈**：Issue [#14425](https://github.com/NousResearch/hermes-agent/issues/14425)（评论 3）反映了 Hermes 执行耗时任务（如网页搜索、代码执行）时，CLI 和 Gateway 平台会出现几分钟的"完全静默"，用户难以判断是卡死还是在计算。
*   🥉 **Anthropic 模型计费/限流异常**：Issue [#31668](https://github.com/NousResearch/hermes-agent/issues/31668)（评论 3）引发了关于使用 `claude-sonnet-4-6` 时报错并提示 "Third-party apps now draw from your extra usage" 的讨论，这可能是上游 API 计费策略变动导致的兼容性/配置问题。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已被核心层修复（含 P2 级别）：

*   **P2 | 文件描述符泄漏引发任务停摆**：Issue [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) 报告 Gateway 看板每次 tick 都会打开 SQLite WAL 连接导致 FD 压力。**已有修复**：PR [#32276](https://github.com/NousResearch/hermes-agent/pull/32276) 优化了上下文管理。
*   **P2 | 同步阻塞网络 I/O 导致严重延迟**：Issue [#32221](https://github.com/NousResearch/hermes-agent/issues/32221) 指出 `AIAgent.__init__` 在构造阶段执行了同步阻塞的 `httpx.post`，违反了异步架构原则，导致高并发实例化时出现严重延迟。
*   **P2 | WSL 环境 `/clear` 命令冻结终端**：Issue [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) 报告 Windows 11 / WSL 环境下执行 `/clear` 指令会导致终端假死。
*   **P2 | OpenAI Wire Format 不兼容**：PR [#31770](https://github.com/NousResearch/hermes-agent/pull/31770) 暴露出插件工具返回 `Dict` 类型时会导致严格的 API 上游（如 OpenAI）请求失败，该 PR 已提交修复。
*   **P2 | Cron 作用域越权**：Issue [#32236](https://github.com/NousResearch/hermes-agent/issues/32236) 提出绑定特定 skill 的 Cron 任务在执行时，Agent 会错误地加载全局所有 skill，可能导致权限放大和指令混淆。

## 6. 功能请求与路线图信号
从近期的 Feature Request 可以清晰看出 Hermes Agent **追求极致自治与安全隔离** 的演进路线：

*   **沙箱与安全通信**：PR [#30179](https://github.com/NousResearch/hermes-agent/pull/30179) 正在推进 `iron-proxy`，为远程终端沙箱引入 TLS 拦截和凭证注入防火墙。结合 Issue [#410](https://github.com/NousResearch/hermes-agent/issues/410)（密钥管理工具）和 Issue [#496](https://github.com/NousResearch/hermes-agent/issues/496)（Brainworm C2 攻击防御），**安全隔离势必成为下个大版本的核心卖点**。
*   **外部 Agent 委托模式**：Issue [#477](https://github.com/NousResearch/hermes-agent/issues/477)（OpenHands 委托）和 Issue [#30640](https://github.com/NousResearch/hermes-agent/issues/30640)（Cursor SDK 集成）表明，Hermes 正在探索作为 "Agent Orchestrator" 的可能性，将具体的代码编写任务拆解委托给专业 Agent（如 Cursor）执行。
*   **上下文窗口精细控制**：Issue [#24695](https://github.com/NousResearch/hermes-agent/issues/24695) 建议在 `config.yaml` 中支持固定 Token 阈值而非仅使用百分比。这反映出多模型切换场景下，用户对上下文压缩控制的需求日益精细化。

## 7. 用户反馈摘要
透过今日的 Issue 描述与评论，提炼出以下真实用户画像与痛点：
*   **Docker / Unraid 家庭用户面临权限配置阻碍**：Issue [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) 表明，社区用户在尝试使用 `HERMES_UID` 部署 Docker 并使用内置 Dashboard 时，遭遇了严重的权限交互问题。
*   **开发者生态的格式化诉求**：PR [#12278](https://github.com/NousResearch/hermes-agent/pull/12278)（增加 `--format stream-json`）和 PR [#11593](https://github.com/NousResearch/hermes-agent/pull/11593)（支持 .silk 音频转写前预处理）说明，**将 Hermes 接入 CI/CD 管道或外接通讯平台** 的极客用户群体正在壮大，对数据结构的标准化要求极高。
*   **本地化部署的强烈意愿**：Issue [#467](https://github.com/NousResearch/hermes-agent/issues/467) 中用户fork并支持了本地 MLX 和 WebGPU 推理，说明在开源社区中，绕过 API 额度限制、完全运行于本地的呼声依然很高。

## 8. 待处理积压
以下是近期提出但亟待 Maintainer 关注的挑战性议题：

*   **#18080 [Dashboard 主题重构]**(https://github.com/NousResearch/hermes-agent/issues/18080)：拥有极高的用户赞同数（27），但目前尚未有官方明确的排期或 PR 介入。
*   **#32221 [AIAgent 同步阻塞网络 I/O 问题]**(https://github.com/NousResearch/hermes-agent/issues/32221)：此问题对需要频繁生成 Ephemeral Agent 的编排引擎性能影响极大，涉及底层架构重构，需优先评估。
*   **#32207 [WSL `/clear` 命令死锁]**(https://github.com/NousResearch/hermes-agent/issues/32207)：影响基础 CLI 体验的阻断型 Bug，且影响范围覆盖大量 Windows 生态开发者。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
PicoClaw 项目在过去24小时内保持较高的社区活跃度，共产生 **8条 Issues 更新**（7 新开/活跃，1 关闭）和 **8条 PR 更新**（均在待合并状态）。今日自动构建发布了 `nightly` 版本（v0.2.9），项目正处于活跃的迭代期。值得注意的是，今天新开的 Issues 集中在主流大模型提供商（Anthropic、智谱）的 API 兼容性适配问题上，表明项目正在快速跟进上游 API 的破坏性变更。目前无 PR 被合并，可能存在审查积压。

---

## 2. 版本发布

### [nightly: Nightly Build v0.2.9](https://github.com/sipeed/picoclaw/releases/tag/nightly)
- **版本号**: `v0.2.9-nightly.20260525.ab6d3946`
- **构建日期**: 2026-05-25
- **性质**: 自动化每日构建版本，可能不稳定
- **破坏性变更**: 暂无明确说明
- **迁移注意事项**: 此为 nightly 版本，不建议用于生产环境
- **完整变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. 项目进展

今日 **无 PR 被合并或关闭**，8 条 PR 均处于 Open 状态，其中部分已标记为 stale。值得关注的新提交 PR：

| PR | 作者 | 类型 | 状态 | 说明 |
|---|---|---|---|---|
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | LegendAlessandro-Liguori | fix(config) | 🆕 Open | 修复默认 Claude Sonnet 模型 ID 格式错误（点号→连字符） |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | LegendAlessandro-Liguori | fix(providers) | 🆕 Open | 移除 claude-opus-4-7 的 temperature 参数 |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | loafoe | feat(pico) | Open (stale) | 新增 ChatStream 实时 token 流式传输支持 |
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | dtapps | feat | Open (stale) | 新增 Server酱³ Bot 渠道支持 |

**评估**: 今日无代码合入，但社区贡献者快速响应了新报告的 Anthropic API 兼容性问题，提交了对应的修复 PR，展现了良好的社区响应速度。不过多个 PR 已进入 stale 状态，需维护者关注审查积压。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 14 | 2 | exec 工具 guardCommand 误拦截合法命令 |
| 2 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | 10 | 0 | Web Chat 流式输出需求 |
| 3 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | 6 | 0 | PID 单例检查导致崩溃循环 |
| 4 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 4 | 0 | RISC-V .deb 版本无法使用 OpenAI 模型 |
| 5 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 4 | 0 | 历史记录只显示最后一条用户消息 |

**分析**:
- **#1042** 长期活跃（14条评论），`exec` 工具的安全守卫正则表达式过于粗暴，将 URL 中的路径片段误判为相对路径。这直接影响工具调用场景的可靠性，是工具链稳定性的核心问题。
- **#1950**（已关闭）讨论了 Web Chat 流式输出需求，虽然被关闭但获得 10 条讨论，表明用户对实时交互体验有强烈需求。PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) 正在实现相关功能。
- **#2720** 的 PID 单例检查缺陷已在 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 中有对应修复方案，但尚未合并。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 High Priority
| Issue | 描述 | 影响 | Fix PR |
|---|---|---|---|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID 单例检查不验证进程身份，导致启动崩溃循环 | Gateway 无法启动，影响可用性 | ✅ [#2813](https://github.com/sipeed/picoclaw/pull/2813) |
| [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 默认配置中 Claude Sonnet 模型 ID 使用点号（应为连字符），首次使用即 404 | 新用户首次体验直接失败 | ✅ [#2942](https://github.com/sipeed/picoclaw/pull/2942) |
| [#2939](https://github.com/sipeed/picoclaw/issues/2939) | claude-opus-4-7 不支持 temperature 参数，请求全部 400 | 该模型完全不可用 | ✅ [#2940](https://github.com/sipeed/picoclaw/pull/2940) |

### 🟡 Medium Priority
| Issue | 描述 | 影响 | Fix PR |
|---|---|---|---|
| [#2943](https://github.com/sipeed/picoclaw/issues/2943) | 微信渠道发送图片触发智谱 GLM-5 API error 1210 | 多模态功能在微信渠道失效 | ❌ 暂无 |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录只显示最后一条用户消息 | 用户体验严重受损 | ❌ 暂无 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 正则误判 | 含 URL 的命令被错误拦截 | ❌ 暂无 |

### 🟢 Low Priority
| Issue | 描述 | 影响 | Fix PR |
|---|---|---|---|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V .deb 版本与 OpenAI 模型不兼容 | 特定平台可用性问题 | ❌ 暂无 |

---

## 6. 功能请求与路线图信号

### 📋 本日已识别的功能需求

| 需求 | 来源 | 状态 | 对应 PR |
|---|---|---|---|
| Web Chat 流式输出 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) (已关闭, Nice-to-Have) | 开发中 | [#2853](https://github.com/sipeed/picoclaw/pull/2853) ChatStream |
| Server酱³ Bot 渠道 | [#2893](https://github.com/sipeed/picoclaw/pull/2893) | PR 提交中 | 同左 |
| MCP 动态请求头转发 | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | PR 提交中 | 同左 |
| 技能目录 Token 优化 | [#2781](https://github.com/sipeed/picoclaw/pull/2781) | PR 提交中 | 同左 |

### 🔮 路线图信号分析
- **流式输出**是用户强需求（10条评论），PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) 已实现核心功能，预计将在下一版本合入。
- **Anthropic 生态适配**是当前紧急问题，今日出现两个相关 Bug（模型 ID 格式 + 参数废弃），PR [#2942](https://github.com/sipeed/picoclaw/pull/2942) 和 [#2940](https://github.com/sipeed/picoclaw/pull/2940) 均为同日提交修复，显示上游 API 变更频繁。
- **MCP 增强**（[#2696](https://github.com/sipeed/picoclaw/pull/2696)）支持按请求转发动态 Header，是企业级集成场景的关键能力。

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户痛点：

### 😣 核心痛点
1. **首次体验即失败** — 新用户安装后首次调用 Anthropic 模型直接报错（[#2941](https://github.com/sipeed/picoclaw/issues/2941)），这是最严重的体验问题
2. **历史记录丢失** — 多轮对话后历史消息只剩最后一条（[#2796](https://github.com/sipeed/picoclaw/issues/2796)），用户明确表示"消息压缩应该是针对大模型的，对用户显示的历史消息应该完整"
3. **安全机制过于激进** — exec 工具的路径安全检查误杀合法 URL 命令（[#1042](https://github.com/sipeed/picoclaw/issues/1042)），影响天气查询等常见场景
4. **RISC-V 支持不完善** — Debian .deb 包在 RISC-V 平台上无法与 OpenAI 模型配合使用（[#2887](https://github.com/sipeed/picoclaw/issues/2887)）

### 👍 用户满意之处
- 项目对多渠道的覆盖较为全面（微信、Server酱³、Web Chat 等）
- 社区贡献者响应速度快，Bug 报告后数小时内即有对应 PR 提交
- 多模型提供商支持（OpenAI、Anthropic、智谱 GLM）覆盖面广

### 📊 使用场景洞察
- 用户在 **微信机器人** 场景中使用 PicoClaw 进行多模态交互（文字+图片）
- **RISC-V 平台** 有真实用户在使用，表明项目在边缘计算/嵌入式场景有应用
- 用户期望 **Web Chat 具备流式输出**能力，反映了对实时交互体验的需求

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高优先级积压

| 类型 | 编号 | 天龄 | 主题 | 建议 |
|---|---|---|---|---|
| Issue | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | ~83天 | exec guardCommand 正则误判 | 🔴 高优先级，影响核心工具链，14条评论无修复 PR |
| PR | [#2813](https://github.com/sipeed/picoclaw/pull/2813) | ~19天 | PID 单例检查修复 | 🔴 对应 High Priority Bug #2720，应优先审查 |
| PR | [#2853](https://github.com/sipeed/picoclaw/pull/2853) | ~15天 | ChatStream 流式输出 | 🟡 用户强需求功能，已 stale |
| PR | [#2781](https://github.com/sipeed/picoclaw/pull/2781) | ~20天 | 技能目录 Token 优化 | 🟡 性能优化，降低 API 成本 |
| PR | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | ~28天 | MCP 动态请求头 | 🟡 企业集成所需，已 stale |
| PR | [#2890](https://github.com/sipeed/picoclaw/pull/2890) | ~8天 | macOS 路径验证修复 | 🟢 平台兼容性修复 |
| PR | [#2893](https://github.com/sipeed/picoclaw/pull/2893) | ~8天 | Server酱³ 渠道支持 | 🟢 新渠道扩展 |

### 📌 维护者行动建议
1. **立即审查** PR [#2942](https://github.com/sipeed/picoclaw/pull/2942) 和 [#2940](https://github.com/sipeed/picoclaw/pull/2940) — 这两个是当天提交的紧急修复，直接影响 Anthropic 用户可用性
2. **优先合并** PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) — 解决 Gateway 启动崩溃循环问题
3. **讨论 #1042 的修复方案** — 83天未解决，14条评论，影响核心 exec 工具
4. **清理 stale 标签** — 多个 PR 已进入 stale 状态，需确认是否仍在审查流程中

---

*数据截止: 2026-05-26 | 来源: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-05-26 NanoClaw (qwibitai/nanoclaw) 项目动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
NanoClaw 在过去 24 小时内保持了**极高的开发活跃度**，社区贡献显著提速。今日共处理了 18 条 PR 动态（其中 14 条待合并，4 条已关闭）和 4 条 Issue 动态。项目当前没有发布新版本，但从活跃的 PR 管道来看，团队和社区正集中精力**修复 v2 重写遗留的稳定性问题**，并大力**增强 Slack 集成及多模态功能**。整体而言，项目处于健康且高速迭代的状态。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 被关闭（含合并），主要围绕核心稳定性和底层依赖升级，进一步夯实了 v2 版本的基础：

*   **修复 Group 删除的核心级 Bug**：PR [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) 已合并。该 PR 为 `ncl groups delete` 命令添加了级联删除逻辑，彻底修复了因外键约束导致的崩溃问题，提升了 CLI 工具的生产可用性。
*   **完善端到端 Provider/Model 配置**：PR [#1968](https://github.com/nanocoai/nanoclaw/pull/1968) 已关闭。该 PR 实现了每个 Agent 独立配置底层大模型提供商和模型的功能，这是一个重要的架构级特性，将大幅提升多模型编排的灵活性。
*   **修复构建错误**：PR [#2344](https://github.com/nanocoai/nanoclaw/pull/2344) 已合并，修复了因类型收紧导致的 5 个 `tsc` 编译错误，确保主干代码顺利构建。
*   **CI/CD 防御性升级**：PR [#2608](https://github.com/nanocoai/nanoclaw/pull/2608) 处于活跃状态并即将合入，提前将 GitHub Actions 升级至 Node 24（v5），以应对 2026 年 6 月的 Node 20 淘汰倒计时。

## 4. 社区热点
目前社区最活跃的讨论集中在消息路由机制与多工作区支持上：
*   **消息去重逻辑缺陷引发关注**：Issue [#2506](https://github.com/nanocoai/nanoclaw/pull/2506)（2 条评论）和 Issue [#2404](https://github.com/nanocoai/nanoclaw/pull/2404)（3 条评论）。当 AI Agent 在同一轮次使用 MCP 工具和 `<message>` 块发送消息，或在 60 秒内连续完成对话时，会出现消息被丢弃或重复投递的现象。这反映了开发者在构建**复杂多轮对话工作流**时遇到了底层路由机制的瓶颈。
*   **Slack 多工作区需求强烈**：Issue [#1804](https://github.com/nanocoai/nanoclaw/pull/1804)（2 条评论）请求在单一实例中支持多个并发 Slack 工作区，表明企业级用户正在尝试将 NanoClaw 深度集成到内部通讯平台中。

## 5. Bug 与稳定性
今日报告的缺陷主要影响系统稳定性和 API 交互，部分已有修复方案：

*   **🔴 [高优] 群组配置初始化遗漏**：`ncl groups create` 未初始化文件系统，导致后续生成容器时报错。（已有修复 PR [#2610](https://github.com/nanocoai/nanoclaw/pull/2610)）
*   **🔴 [高优] CLI 审批后上下文丢失**：存在安全隐患，审批门控后的 `ncl` 命令重放时会丢失原始调用者上下文。（已有修复 PR [#2611](https://github.com/nanocoai/nanoclaw/pull/2611)）
*   **🟡 [中优] MCP 消息双重投递**：同一轮次中工具调用和块标签导致消息重发。（Issue [#2404](https://github.com/nanocoai/nanoclaw/pull/2404)，目前处于 Open 状态）
*   **🟡 [中优] 消息去重机制误杀**：60 秒内的连续对话被去重机制静默丢弃，导致客户端超时。（Issue [#2506](https://github.com/nanocoai/nanoclaw/pull/2506)，目前处于 Open 状态）
*   **🟢 [低优] 未知的 Slash 命令处理异常**：未知命令被错误分类为 `passthrough`，导致 Agent SDK 静默丢弃响应。（已有修复 PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346)）

## 6. 功能请求与路线图信号
从当前的活跃 PR 来看，项目的下一阶段路线图将重点发力**多模态能力恢复**与**平台生态扩展**：

*   **多模态与交互能力跃升**：PR [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) 正在将 v1 版本中的图像/语音/PDF 附件处理能力以及表情符号响应（`chat.onReaction`）迁移至 v2，有望在下一版本落地。
*   **Slack 生态深度集成**：社区开发者在今日集中提交了 3 个高质量 PR，旨在全面提升 Slack 体验：
    *   支持 Socket Mode（[PR #2613](https://github.com/nanocoai/nanoclaw/pull/2613)）
    *   引入会话上下文填充机制（[PR #2614](https://github.com/nanocoai/nanoclaw/pull/2614), [PR #2615](https://github.com/nanocoai/nanoclaw/pull/2615)）
    *   结合此前提出的多工作区需求（Issue [#1804](https://github.com/nanocoai/nanoclaw/pull/1804)），项目有望成为 Slack 原生级 AI 接入层。
*   **健康检查与可观测性**：PR [#2619](https://github.com/nanocoai/nanoclaw/pull/2619) 恢复了 `/health` 端点，进一步为企业级部署（K8s 等）铺平道路。

## 7. 用户反馈摘要
综合近期的 Issues 评论，可提炼出以下真实用户痛点：
*   **并发处理脆弱性**：用户（如 mshirel）在使用复杂 Agent 编排时，对底层轮询循环和去重机制在短时间高并发下的表现感到困扰，期望有更健壮的消息队列保障。
*   **跨平台规范化诉求**：用户（如 davekim917）发现当前的通道注册机制采用单例模式，无法满足多团队/多 Workspace 复用同一 NanoClaw 实例的需求。
*   **容器化部署痛点**：关于 Apple Container 文件挂载、用户映射的问题（PR [#2609](https://github.com/nanocoai/nanoclaw/pull/2609)）表明，开发者正在积极尝试将 NanoClaw 容器化运行于异构底层系统上，但在存储和网络映射上遇到了阻碍。

## 8. 待处理积压
*   **长期活跃通道 PR**：PR [#2211](https://github.com/nanocoai/nanoclaw/pull/2211)（增加工具调用的实时预览 Skill）已开启 20 余天，PR [#2345](https://github.com/nanocoai/nanoclaw/pull/2345)（组合导入 `CLAUDE.role.md`）已开启近 18 天。建议维护团队尽快 Review 并推进合入，以鼓舞社区贡献者的积极性。
*   **系统级路由 Bug 需官方介入**：Issue [#2404](https://github.com/nanocoai/nanoclaw/pull/2404) 和 [#2506](https://github.com/nanocoai/nanoclaw/pull/2506) 涉及核心 `processQuery` 和 MCP 子进程传输层的冲突，社区难以自行通过 Hook 修复，需要核心架构层面的确认与排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# 📊 NullClaw 项目动态日报 (2026-05-26)

> **数据源**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) 
> **分析周期**: 2026-05-25 至 2026-05-26

---

### 1. 📈 今日速览

过去 24 小时，NullClaw 项目整体保持平稳且专注的开发节奏，未发布新版本，但底层维护与功能拓展正在双线并行。项目今日共处理了 **1 个活跃 Issue** 与 **2 个 PR 更新**（其中 1 个为依赖自动更新，1 个为新功能拓展）。唯一新增的 Issue 为文档版本的配置错误，表明项目核心代码库目前较为稳定，无明显阻塞性 Bug 报告。由核心贡献者提交的新 Gateway 方法 PR 显示出项目正在积极深化其 AI 网关与媒体处理能力。

### 2. 🚀 版本发布
**无新版本发布**。项目当前正处于新功能的积累与整合阶段。

### 3. 🛠️ 项目进展
今日项目通过以下 PR 的活动向前推进：

*   **[CLOSED] [PR #931](https://github.com/nullclaw/nullclaw/pull/931) ci(deps): bump busybox from 1.37 to 1.38**
    *   **进展说明**: 自动化依赖机器人关闭并处理了 Docker 镜像中 `busybox` 的版本升级（1.37 -> 1.38）。这属于常规的基础设施维护，有助于确保容器构建环境的底层安全性和稳定性。
*   **[OPEN] [PR #933](https://github.com/nullclaw/nullclaw/pull/933) Add additional gateway methods**
    *   *注：该 PR 处于开启状态，尚未合并，但代表了当前的重点开发方向。*
    *   **进展说明**: 开发者 `DonPrus` 提交了一项重要更新，为网关客户端添加了经过身份验证的 `POST /media/transcribe` 接口（接入 STT 提供商），扩展了配置向导的 JSON 处理能力，并加强了网关配对令牌的安全性（哈希存储与超时保护）。这标志着 NullClaw 在作为“AI 智能体网关”的音频处理和多模态能力上迈出了实质性的一步。

### 4. 🔥 社区热点
今日社区活跃度相对平淡，暂无引发大量讨论的热点议题。新增的焦点主要集中在基础体验上：

*   **[Issue #932](https://github.com/nullclaw/nullclaw/issues/932) [bug] Invalid Zig version in docs**: 作为今日唯一的新增讨论，该 Issue 准确指出了“快速入门”文档中的依赖版本错误，反映了社区开发者对构建文档准确性的较高要求。目前该 Issue 暂无评论互动。

### 5. 🐛 Bug 与稳定性
今日报告的 Bug 非常边缘，核心系统运行稳定。

*   🟡 **中低严重程度**: [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) - 文档中 Zig 版本指引错误。
    *   **详情**: 文档要求使用 Zig `0.15.2`，但由于缺少 `std.Io.Dir` 符号，实际构建会失败。该符号在 Zig `0.16.0` 中才被引入。
    *   **状态**: 暂未发现相关的修复 PR，需要维护者更新文档或修正构建依赖说明。

### 6. 🗺️ 功能请求与路线图信号
虽然今日没有纯粹的“Feature Request”性质 Issue，但通过 [PR #933](https://github.com/nullclaw/nullclaw/pull/933) 释放了明确的路线图信号：

*   **多模态 AI 能力扩展**: 引入了 `/media/transcribe`（语音转文字/STT）的网关路由。这表明 NullClaw 正在从纯文本智能体框架向支持语音交互的 Personal AI Assistant 演进。
*   **安全与配置增强**: PR 中提到的“将网关令牌保存为哈希值”和“A2A/memory 配置对象扩展”，说明项目正在为未来支持更复杂的智能体间通信（A2A）和多设备安全接入打下基础。

### 7. 💬 用户反馈摘要
从今日 [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) 提交者 `nulldoubt` 的反馈可以看出：
*   **痛点**: 新用户在尝试本地构建（Getting Started）项目时，极易受制于底层编译工具链（Zig）的版本剧烈变动。
*   **诉求**: 用户期望“开箱即用”的顺畅构建体验。对于采用 Zig 这类快速发展语言的项目，文档中的版本锁定需要与代码实现保持绝对同步。

### 8. 📚 待处理积压
*   **[PR #933](https://github.com/nullclaw/nullclaw/pull/933)**: 作为一项包含重要新功能（音频转写、令牌安全机制）的 PR，目前仍处于 Open 状态。建议维护者尽快进行代码审查，以推进多模态功能的合入。
*   **[Issue #932](https://github.com/nullclaw/nullclaw/issues/932)**: 涉及开发者体验（DX）的文档错误，建议维护者直接提交 Hotfix 修正文档中的 Zig 最低版本要求至 `0.16.0`，降低新贡献者的准入门槛。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-26)

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据源：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览
过去 24 小时内，IronClaw 项目继续保持极高的开发活跃度与架构演进速度。Issue 与 PR 数量双双处于高位（共处理 22 条 Issue 更新与 50 条 PR 更新），且核心贡献者高度聚焦于 **Reborn** 架构的重构与落地。今日的重点工作围绕**子智能体生成栈、GSuite 原生集成、以及证明签名**三大主线展开，同时在安全审计、渠道拓展（Telegram/Slack）和 WebUI 呈现层取得了实质性进展。项目整体处于高频迭代、架构深度重构的“高内聚”建设期。

---

## 2. 版本发布
**无新版本发布。**
*注：尽管上游代码已推进至 v0.27.0，但由于依赖链中的 CVE 制约，目前 `crates.io` 官方包仍停留在 v0.24.0。新版本的发布可能需要等待上游漏洞(如 wasmtime 28.x CVEs)彻底解决。*

---

## 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，主要集中在底层架构重构与多渠道支持，项目整体向前迈出了坚实的一步：

*   **子智能体栈全线推进：** 核心贡献者 `henrypark133` 提交并推进了 Subagent spawn 的 Phase 0 至 Phase 4 系列PR。其中 Phase 0 前置条件 ([PR #3867](https://github.com/nearai/ironclaw/pull/3867)) 和相关前置工作已被合并/关闭，这标志着 Reborn 架构下复杂多智能体协同底座已初步成型。
*   **GSuite 原生集成落地：** 继早期的 OAuth 协议整合后，今日关闭的 [PR #3971](https://github.com/nearai/ironclaw/pull/3971) (Google OAuth helpers) 和 [PR #3973](https://github.com/nearai/ironclaw/pull/3973) (GSuite 核心处理器) 标志着 IronClaw 在第一方原生支持 Google Workspace 的里程碑节点。
*   **安全与运行时增强合并：** 用于对齐 Reborn 宿主访问的 [PR #4007](https://github.com/nearai/ironclaw/pull/4007)、运行时故障分类 [PR #4056](https://github.com/nearai/ironclaw/pull/4056) 以及沙箱代理机制 [PR #4049](https://github.com/nearai/ironclaw/pull/4049) 相继关闭，显著提升了多租户环境下的容错与安全隔离能力。

---

## 4. 社区热点
今日的讨论焦点集中在工具调用安全、包发布阻塞以及 Reborn 架构的完善：

*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) - Publish 0.25.0–0.27.0 (👍 0, 评论 9)**
    *   **背后诉求：** 由于受上游 `wasmtime` CVE 漏洞的牵连，IronClaw 的 `crates.io` 发布一直被锁定在 0.24.0。社区和下游开发者对此高度关注，呼吁团队尽快解决依赖冲突，发布包含最新架构（如 Reborn）的新版本。
*   **[Issue #4017](https://github.com/nearai/ironclaw/issues/4017) - Interactive chat tool calls bypass ToolDispatcher (评论 3)**
    *   **背后诉求：** 核心安全审计问题。用户 `zmanian` 指出交互式聊天路径绕过了 `ToolDispatcher`，导致缺少 `ActionRecord` 审计和通道工具过滤。这引发了关于重构工具执行管线、确保“默认拒绝”安全策略的深度讨论。

---

## 5. Bug 与稳定性
今日报告了若干关键的性能与稳定性问题，部分已被标记为高优先级：

*   **[严重] Discord 渠道 Tokio 100% CPU 死锁问题：** [Issue #4030](https://github.com/nearai/ironclaw/issues/4030)
    *   用户报告在运行 Discord WASM 渠道并进行 tool 调用 (`build_software`) 时，Tokio 工作线程被占满（100% CPU），导致机器人停止响应。目前尚在排查中，无修复 PR。
*   **[严重] Nightly E2E 测试失败：** [Issue #3447](https://github.com/nearai/ironclaw/issues/3447)
    *   自动化 E2E 测试在 `030cfeb0` 提交上持续失败，可能影响 Reborn 集成分支的整体合并质量。
*   **[中等] 交互式工具调用绕过安全审计：** [Issue #4017](https://github.com/nearai/ironclaw/issues/4017)
    *   逻辑缺陷。虽然目前尚未曝出被恶意利用的情况，但违反了安全不变量。关联的增强提案见 [Issue #4019](https://github.com/nearai/ironclaw/issues/4019)。
*   **[低] Token 扣费透明度问题：** [Issue #4043](https://github.com/nearai/ironclaw/issues/4043)
    *   用户反馈在请求失败或触发限流时，不确定是否消耗了 Credit，影响了用户体验。

---

## 6. 功能请求与路线图信号
从新开的 Issues 可以清晰看出项目近期演进的方向：

*   **自定义 Telegram API Host：** [Issue #4034](https://github.com/nearai/ironclaw/issues/4034)
    *   用户希望 Telegram 渠道支持自托管的 Bot API 服务器。结合目前正在进行重构的 [Telegram v2 PR #3590](https://github.com/nearai/ironclaw/pull/3590)，此功能极有可能在后续版本中作为配置项被纳入。
*   **Slack ProductAdapter MVP：** [Issue #3857](https://github.com/nearai/ironclaw/issues/3857)
    *   计划引入带有预配置凭证的 Slack 适配器。这是多渠道 Reborn 改造的重要一环，表明 Web 渠道之外，主流即时通讯渠道的接入正在加速。
*   **证明签名多租户体系：** [Issue #4051](https://github.com/nearai/ironclaw/issues/4051) 及其子 issue
    *   正在构建更底层的密钥/凭证生命周期管理。相关的 10 个 PR 堆栈（如 [PR #3961](https://github.com/nearai/ironclaw/pull/3961)）正在稳步推进，预计这将成为下一个大版本的“旗舰级”安全特性。

---

## 7. 用户反馈摘要
通过提炼最近的 Issue 与 PR 评论，得出以下真实用户开发体验反馈：

*   **痛点：版本割裂严重。** 由于 `crates.io` 版本严重滞后于 GitHub 主干版本，使用官方包管理的开发者面临着无法使用新特性或难以修复旧版 Bug 的窘境。
*   **痛点：计费与限流机制黑盒。** 早期用户对失败请求导致的潜在扣费感到困惑和焦虑，期望更透明的配额和错误反馈机制。
*   **积极反馈：模块化架构受欢迎。** 社区贡献者对 Reborn 带来的“契约优先”和模块化重构表示认可。例如，针对沙箱和 WebUI 的重构 PR 展示出高级贡献者能够清晰地理解并实现新的隔离边界。

---

## 8. 待处理积压
以下高权重 Issue/PR 处于 Open 状态较久或具有高风险，需核心维护者重点关注：

*   **[PR #1378](https://github.com/nearai/ironclaw/pull/1378) - per-channel MCP and built-in tool filtering**
    *   **状态：** 打开超过 2 个月。
    *   **提醒：** 该 PR 涉及核心工具路由机制，且与今日暴露的 [Issue #4017](https://github.com/nearai/ironclaw/issues/4017) (安全绕过问题) 强相关。建议维护者优先对其进行 Rebase 和安全审计，合并后将大幅改善路由安全性。
*   **[PR 堆栈] Subagent spawn 系列 ([#3868](https://github.com/nearai/ironclaw/pull/3868), [#3869](https://github.com/nearai/ironclaw/pull/3869), [#3870](https://github.com/nearai/ironclaw/pull/3870), [#3872](https://github.com/nearai/ironclaw/pull/3872))**
    *   **提醒：** Phase 1 至 Phase 4 仍然处于 Draft/Open 状态。鉴于这是 AI 智能体最核心的“多智能体协同”能力，建议集中精力完成 E2E 验证并分批合并，避免长周期分支引发严重冲突。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-05-26)

> 数据统计周期：过去 24 小时 | 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览

LobsterAI 项目今日保持**高活跃度**的迭代节奏，核心开发者与社区贡献者共同推进了 29 项 PR 更新，其中 15 项已顺利合并/关闭，代码合并率达到 51.7%。当前项目重心明显向 **OpenClaw 集成、系统稳定性修复及多 Agent（subagent）架构**倾斜。值得注意的是，今日社区提出了一份高质量的“Agent 记忆体系”产品建议，精准指出了跨会话记忆的短板，反映出项目正吸引越来越多深度用户的参与。整体来看，项目处于功能快速丰满与基础体验打磨并重的健康阶段。

## 2. 版本发布

*过去 24 小时内，项目无新版本发布。*

## 3. 项目进展

今日共有 15 个 PR 被合并或关闭，项目在以下关键领域取得了实质性推进：

*   **OpenClaw 生态集成进一步深化**：
    *   **PR [#2042](https://github.com/netease-youdao/LobsterAI/pull/2042) [CLOSED]**：实现了从 OpenClaw 扩展目录自动发现并同步插件的功能，打通了 OpenClaw Web UI/CLI 安装渠道。
    *   **PR [#2045](https://github.com/netease-youdao/LobsterAI/pull/2045) [OPEN]**：支持将 OpenClaw 已安装的技能同步至 LobsterAI，并对插件提供的“源生技能”增加了防删除保护。
*   **多 Agent 协同架构完善**：
    *   **PR [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) [CLOSED]**：重磅功能合并，新增子代理会话的树形结构浏览及独立详情页，极大提升了多 Agent 任务的视察与管理体验。
*   **系统稳定性与 Token 损耗治理**：
    *   **PR [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) [OPEN]**：修复了严重的无意义 Token 消耗问题，中止了因工具循环导致空闲期 Token 持续燃烧的漏洞。
    *   **PR [#2048](https://github.com/netease-youdao/LobsterAI/pull/2048) [OPEN]** & **[#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) [OPEN]**：分别修复了 LLM 流式输出空数据导致的异常，以及网关会话超时阻断消息发送的问题。
    *   **PR [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) [CLOSED]**：修复了 GitHub Copilot Token 刷新导致的网关意外重启问题。
*   **数据架构规范化**：
    *   **PR [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584) [CLOSED]**：废弃了基于名称生成 Agent ID 的机制，改用短 UUID，彻底解决了同名 Agent 带来的历史数据“僵尸复活”问题。

## 4. 社区热点

*   **Agent 记忆体系架构探讨**：
    *   **Issue [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) [OPEN]**：这是今日最受关注的动态。用户 `X9-laser` 提交了一份详尽的产品建议书，直指当前 Agent 高度依赖手动维护、跨 Session 感知能力弱的痛点。该 Issue 提出了“将对话元数据持久化到文件系统”等高优先级诉求，引发了关于 AI 助手长记忆实现的深入讨论，对项目中长期的架构演进具有指导意义。

## 5. Bug 与稳定性

今日暴露的缺陷主要围绕**网关稳定性、UI 交互细节及底层性能**，部分严重 Bug 已有对应的修复 PR：

*   **严重 - 静默流失问题**：
    *   *[Bug]* 空闲期 Tool 循环未正确终止，导致大量 Token 被无意义燃烧。👉 **已提交修复：[PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049)**
*   **中等 - 网关与基础服务异常**：
    *   *[Bug]* GitHub Copilot 认证刷新导致网关意外重启。👉 **已合并修复：[PR #2043](https://github.com/netease-youdao/LobsterAI/pull/2043)**
    *   *[Bug]* 日志导出时因 DEFLATE压缩耗时过长触发 30 秒超时。👉 **待合并：[PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515)**
*   **轻微 - UI 与状态同步**：
    *   *[Bug]* 上下文窗口滑块无法精准吸附预设值，输入框不支持 K/M 简写。👉 **已合并修复：[PR #2013](https://github.com/netease-youdao/LobsterAI/pull/2013)**
    *   *[Bug]* Settings 面板关闭时未取消 GitHub OAuth 轮询，导致 Token 静默丢失。👉 **待合并：[PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517)**

## 6. 功能请求与路线图信号

从近期的 PR 动态与 Issues 中，可以清晰勾勒出项目近期的版本迭代风向：

*   **OpenClaw 生态互联互通 (高优先级)**：随着 PR #2042 和 #2045 的推进，完全打通 LobsterAI 与 OpenClaw 的“插件/技能”双向同步已成为必然趋势。
*   **模型管理体验优化 (下版本预计合并)**：[PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522) 提出了通过厂商 API 动态获取可用模型列表的功能，以解决目前模型配置高度硬编码的问题，这对于快速兼容 GLM-5.1 等新模型至关重要。
*   **UI 人性化与状态管理 (下版本预计合并)**：[PR #1526](https://github.com/netease-youdao/LobsterAI/pull/1526) 提出了为会话添加7色标注的功能。结合 Issue #2046 对元数据持久化的呼声，强化会话视觉区分与数据留存是接下来的明确需求。

## 7. 用户反馈摘要

综合今日 Issue 与 PR 中的描述，核心用户群体的真实反馈集中在以下三点：
1.  **长对话体验存在断层**：用户对“每次新建对话 Agent 就会失忆”感到沮丧，迫切需要跨 Session 的自动记忆与信息关联能力。
2.  **隐形错误带来的挫败感**：用户对“日志导出超时”、“OAuth 认证成功但 Token 丢失”、“空闲燃烧 Token”等无明显报错但功能失效的问题非常敏感，这消耗了极大的排查精力。
3.  **多 Agent 协同需求上升**：随着 subagent 侧边栏视图的完善，用户开始更多地将复杂任务拆解给不同 Agent，对树状结构管理和子代理生命周期的控制提出了更高要求。

## 8. 待处理积压

以下积累了较长时间但近期重新活跃的陈旧 PR，部分存在合并冲突或测试缺失的风险，需维护者重点 Review：

1.  **[依赖升级阻塞]** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：`dependabot[bot]` 提交的 Electron 大版本升级（v40 升级至 v42），已挂起近两个月，可能引发底层架构的破坏性变更，需要专项验证。
2.  **[IM 交互缺陷]** [PR #1510](https://github.com/netease-youdao/LobsterAI/pull/1510) & [PR #1514](https://github.com/netease-youdao/LobsterAI/pull/1514)：涉及定时任务 IM 通知静默失败及 QQ 群组白名单 UI 缺失的问题。虽然修复难度不高，但直接影响企业级场景的可用性，建议尽快排期合并。
3.  **[连接诊断体验]** [PR #1524](https://github.com/netease-youdao/LobsterAI/pull/1524)：改善了模型 API 连接测试失败时的错误提示。这是一个显著提升开发者体验的 PR，已 stagnate 一段时间，推荐优先合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 26 日 Moltis 开源项目动态日报。

---

# 📊 Moltis 项目动态日报 (2026-05-26)

## 1. 今日速览
过去 24 小时内，Moltis 项目展现了极高的开发活跃度与迭代速度。团队在单日内成功合并了 4 个重要的 Pull Requests，并发布了 `20260525.01` 版本，标志着项目在智能体并发控制与安全性方面迈出了重要一步。社区互动保持健康，共处理了 5 个 Issues（关闭 3 个，新开 2 个），其中涉及沙箱机制与 WebSocket 稳定性的 Bug 引起了开发者的关注。整体而言，项目处于高速且平稳的向前推进状态。

## 2. 版本发布
- **最新版本**: [`20260525.01`](https://github.com/moltis-org/moltis/releases/tag/20260525.01)
- **更新概述**: 本次发版是一个功能密集型更新，核心聚焦于 AI 智能体架构的解耦与安全合规。
- **迁移与注意**: 由于引入了底层代码扫描漏洞的修复以及 OAuth 端点的强制 HTTPS 要求，自部署用户在升级时需注意检查现有的 Google API 密钥配置及自定义 OAuth 服务的连通性，确保符合新的安全规范。

## 3. 项目进展
今日共有 4 个关键 PR 顺利合并/关闭，大幅增强了项目的核心能力：
- **非阻塞子智能体支持**：[PR #1067](https://github.com/moltis-org/moltis/pull/1067) 引入了 `spawn_agent` 的 `nonblocking: true` 模式，彻底解决了父级 Agent 在调用子 Agent 时主线程阻塞的问题，并配套提供了状态查询和取消工具，极大提升了复杂工作流的执行效率。
- **精细化的工具路由控制**：[PR #1069](https://github.com/moltis-org/moltis/pull/1069) 实现了按对话轮次控制的 `active_tools` 和 `tool_choice`。这项更新显著改善了小型/低成本 LLM（如 Claude haiku）在路由时的漂移问题，提高了 Agent 调用的准确率。
- **子智能体预设可编辑**：[PR #1070](https://github.com/moltis-org/moltis/pull/1070) 完善了 Web UI 的体验，用户现在可以直接在界面的设置中创建、编辑和删除子智能体预设。
- **版本变量透传**：[PR #1068](https://github.com/moltis-org/moltis/pull/1068) 允许在提示词中暴露当前的 Moltis 版本号，为需要依赖版本追踪的自动化工作流提供了便利。

## 4. 社区热点
今日最受瞩目的议题是关于安全与可观测性的功能请求：
- 🌟 **[Issue #868](https://github.com/moltis-org/moltis/issues/868) `feat: Add Landlock access denial debug logging`**（👍: 1，评论: 1）。
  - **诉求分析**：用户在使用 Linux Landlock 进行文件系统（FS）级别沙箱隔离时，缺乏被拒绝访问的日志追踪能力。该 Issue呼吁增加 debug 级别的日志，这反映了社区对 Moltis 在高安全环境下运行时的可观测性和排错能力有着强烈需求。

## 5. Bug 与稳定性
今日共暴露了两个显著的稳定性/兼容性 Bug，其中一个已提交修复：
- 🔴 **Docker 构建失败（已有 Fix）**：[PR #1073](https://github.com/moltis-org/moltis/pull/1073) 修复了由于 proc macro 宏处理 `$CARGO_MANIFEST_DIR` 引发的 Docker 构建崩溃问题。目前 PR 处于待合并状态。
- 🟡 **沙箱执行策略失效**：[Issue #1072](https://github.com/moltis-org/moltis/issues/1072) 报告了标记为 "Execution Target: Host" 的 cron 定时任务，仍然被默认在沙箱中运行的权限越界 Bug。
- 🟡 **WebSocket 断开连接**：[Issue #1022](https://github.com/moltis-org/moltis/issues/1022)（已关闭）报告了在更新 LLM 模式时出现 "WebSocket disconnected" 的情况，该问题在今日得到了处理和关闭。

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR 动态，可以洞察出项目下一阶段的演进路线图：
- **信号 1：企业级安全合规**
  [PR #1071](https://github.com/moltis-org/moltis/pull/1071)（待合并）集中修复了 CodeQL 扫描出的 XSS 漏洞、明文密码传输和路径遍历风险。结合上述社区对 Landlock 的关注，说明 Moltis 正在向企业级安全标准（如 SOC2 合规）靠拢。
- **信号 2：高并发与异步智能体协作**
  [Issue #1004](https://github.com/moltis-org/moltis/issues/1004) 呼吁非阻塞的 Agent 调度，伴随 [PR #1067] 的落地实施，表明 Moltis 正在向复杂的 DAG（有向无环图）工作流架构演进，以支持长期运行的后台任务。
- **信号 3：小型/边缘模型的降本增效**
  [Issue #1011](https://github.com/moltis-org/moltis/issues/1011)（已关闭）针对小模型容易产生工具调用幻觉的痛点，已通过 [PR #1069] 的精细过滤机制得到解决，这为项目在资源受限环境下的部署扫清了障碍。

## 7. 用户反馈摘要
- **痛点**：用户在构建复杂的嵌套智能体时，经常受到主线程阻塞和上下文丢失的困扰（#1004），并且在调试安全沙箱限制时缺乏足够的透明度（#868）。
- **场景**：开发者正在积极将 Moltis 应用于需要定时任务自动化的场景，但对 Host 级别的权限管控准确性提出了更高的要求（#1072）。
- **满意度**：项目团队对社区反馈的响应速度极快。多个长期规划的功能请求（如 #1004, #1011）在用户提出后短时间内就完成了代码实现与闭环，体现了项目维护的高效与健康。

## 8. 待处理积压
- 🔔 **[PR #1073](https://github.com/moltis-org/moltis/pull/1073) Fix Docker build failures**：直接影响下游用户的容器化部署，建议维护者优先 Review 并合并此 PR。
- 🔔 **[Issue #1072](https://github.com/moltis-org/moltis/issues/1072) Cron jobs Sandbox Bug**：此 Issue 今日刚开，尚无关联 Fix PR。由于涉及执行权限的预期行为，可能影响自动化任务的正常运行，需跟进修复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 - 2026年5月26日**

---

### 1. 今日速览
CoPaw（代码库主体为 QwenPaw）项目在过去的24小时内保持了**极高的活跃度与健康的迭代节奏**。项目今日共处理了 42 条 Issue（关闭 28 个）和 44 条 PR（合并/关闭 32 个），显示出维护团队具备强大的社区响应和代码合并吞吐能力。项目发布了 `v1.1.9-beta.1` 版本，核心开始围绕插件生态与前端重构（如引入 Tauri 2.x 和 Coding Mode）发力。不过，Windows 客户端启动缓慢、会话上下文丢失以及多渠道 UI 同步延迟等遗留问题仍是当前用户反馈的焦点。

---

### 2. 版本发布
- **[v1.1.9-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.1)**
  - **更新内容**：本次为 Beta 测试版，重点升级了控制台的基础体验。包含版本号晋升以及一项重要的前端改进：在成功安装或卸载插件后，页面将自动触发刷新以确保状态即时同步。
  - **破坏性变更/迁移注意**：作为 beta 版本，不建议用于生产环境，主要用于插件开发者及前端体验尝鲜。

---

### 3. 项目进展
今日共合并/关闭了 32 个 PR，项目在**桌面端架构重构、渠道接入、前端体验和底层安全**上取得了重大推进：
- **桌面端底层重构**：[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 正式引入了 Tauri 2.x 桌面应用支持，旨在替代沉重的 Python 打包方案，这直接响应了用户关于启动慢的痛点。同时 [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 已经开始为 Tauri 添加自动更新功能。此外，[#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) 修复了 Windows 任务栏图标一直显示为 Python 的尴尬问题。
- **前端 Coding 模式**：[#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) 合并，引入了类 VS Code 的浏览器内嵌 IDE，极大增强了 Agent 的代码编写体验；[#4671](https://github.com/agentscope-ai/QwenPaw/pull/4671) 进一步为其补充了暗黑模式支持。
- **渠道与插件生态**：[#4667](https://github.com/agentscope-ai/QwenPaw/pull/4667) 为 QQ 渠道新增了交互式审批卡片；[#4668](https://github.com/agentscope-ai/QwenPaw/pull/4668) 强化了插件清单的 Pydantic 数据校验；[#4665](https://github.com/agentscope-ai/QwenPaw/pull/4665) 修复了钉钉 DM webhook 的键值冲突问题。
- **测试与安全基建**：[#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674) 大幅扩展了集成测试覆盖率并引入了分层 CI 门禁，标志着项目在工程化上的进一步成熟。

---

### 4. 社区热点
今日讨论热度最高的议题集中在**核心功能的稳定性与多端同步**上：
1. **聊天记录离奇消失（热度最高）**：[#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)（12条评论）。多位用户反馈切换会话时历史记录加载失败，这是一个长期存在的 P0 级痛点。
2. **控制台工具调用不实时显示**：[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)（9条评论）。用户指出在 Web UI 中执行 Tool Calls 时前端无报错但也不更新，需手动刷新页面。
3. **定时任务被用户消息中断**：[#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)（4条评论）。用户探讨了 Cron 定时任务与同会话新消息并发时的资源抢占及中断问题。
4. **记忆系统“只记录不学习”**：[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)（3条评论）。高质量讨论，指出当前记忆机制缺乏状态管理、提炼和关联索引，导致“踩了坑还会再踩”。

---

### 5. Bug 与稳定性
按严重程度排序，今日报告或处理的关键 Bug 如下：
- **P0 - 架构/底层假死**：[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)（已关闭）。MCP 客户端内部 TaskGroup 异常导致 Agent 无响应但不报错，此类静默崩溃影响极坏。
- **P0 - 上下文阻断**：[#4675](https://github.com/agentscope-ai/QwenPaw/issues/4675)（待处理）。Assistant 消息中包含文件块时，会导致 `reasoning_content` 注入被永久破坏。
- **P1 - UI 渲染与同步**：[#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650)（待处理）。GLM-5.1 通过兼容 API 接入时思维链不显示（已排除是 API 本身的问题）。[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) 新建会话后模型配置页崩溃且无法加载。
- **P2 - 渠道指令失效**：[#4663](https://github.com/agentscope-ai/QwenPaw/issues/4663)（已关闭）。Telegram/Discord 中的 `/models` 命令失效，无法切换大模型。

---

### 6. 功能请求与路线图信号
结合用户诉求与当前进展，以下功能极有可能在近期落地：
- **消息级时间戳显示**：[#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) 要求在 UI 每句话旁显示发送时间。这与已提交的 PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)（添加 token 使用量与上下文统计显示）方向一致，预计下个版本的前端会重点强化会话元数据展示。
- **MCP Provider 瘦身**：[#4656](https://github.com/agentscope-ai/QwenPaw/issues/4656) 提到 OpenCode 模型列表冗余，对应的修复 PR [#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660) 已提交，预计很快合并。
- **基于沙盒的安全执行**：[#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) 正在引入基于 macOS `sandbox-exec` 的文件路径白名单机制，预示项目正在构建企业级的本地安全执行环境。

---

### 7. 用户反馈摘要
从近期 Issue 的互动中，可以提炼出用户的真实体验表现：
- **痛点**：**Windows 客户端体验极差**（[#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043, [#4664](https://github.com/agentscope-ai/QwenPaw/issues/4664)）。启动耗时长达 30-40秒，且无加载过渡动画；进程管理混乱，关闭 GUI 后后台 Python 进程依然驻留（[#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587)）。
- **痛点**：多模态交互与上下文浪费（[#4102](https://github.com/agentscope-ai/QwenPaw/issues/4102)）。用户对截图不断压缩存入上下文表示不满，希望增加原生视觉识别或 OCR 工具。
- **满意/认可**：项目对长尾 Bug 的修复速度值得肯定，例如长久以来被反复提及的 Markdown 表格换行问题（[#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497)），已在 PR [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) 中得到彻底解决。

---

### 8. 待处理积压
- **[PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346)**：*Support file operation rollback*。自 4 月 13 日提交以来已停滞 1 个多月，这是一个高价值的防呆机制（防止 Agent 误删文件），需要维护者尽快推进 Review 或关闭。
- **[PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467)**：*Phase 1+2 unit tests (967 tests)*。大规模单测 PR 沉寂多日，对于 CI 至关重要，需避免合并冲突风险。
- **[Issue #4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)**：*语音转写绕过 Whisper 配置*。该 Bug 导致用户配置的第三方语音服务失效，目前仍处于 Open 状态，亟需排期修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-26)

> 数据来源：[ZeroClaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw) | 分析周期：过去 24 小时

## 1. 今日速览

ZeroClaw 项目在过去 24 小时内保持了**高度活跃且聚焦于底层安全架构**的开发状态。社区共产生了 50 个 PR 更新（其中 17 个被合并或关闭）和 30 个 Issue 更新（9 个被关闭），合并速度较快，显示出维护者的高效响应。当前处于无新版本发布的静默期，但从待合并的 33 个 PR 来看，项目正在为下一个重要版本（预计为 `v0.8`）积蓄大量特性。今天最显著的趋势是社区核心贡献者集中提交了多项关于**沙箱逃逸防范、工具调用提权控制（MCP/Shell）以及跨平台稳定性**的高优先级修复和 RFC，标志着项目正在从功能快速迭代期向企业级安全加固期转型。

## 2. 版本发布

*过去 24 小时内无新版本发布。*

## 3. 项目进展

今日共有 17 个 PR 被合并或关闭，重点推进了运行时稳定性、跨平台兼容性及提供商错误处理能力的建设：

*   **历史修剪与提供商兼容性修复**：合并了 [PR #6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515)，修复了 Z.AI (GLM-5) 提供商在上下文修剪后报错的核心问题。
*   **引导与配置目录检测**：合并了 [PR #6896](https://github.com/zeroclaw-labs/zeroclaw/pull/6896)，恢复了 macOS Homebrew 安装方式的配置目录检测，提升了平台原生支持体验。
*   **提供商错误链路诊断增强**：合并了 [PR #6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901)，修复了 HTTP 请求错误信息丢失深层原因的缺陷。
*   **文件轮转底层基建**：合并了 [PR #6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611)，引入了 `zeroclaw-file-rotation` crate，为后续日志和文件追踪功能打下基础。

## 4. 社区热点

今日社区关注度最高、讨论最密集的议题集中在项目生态规范与底层能力扩展：

*   **[Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) - 征求更好的 LOGO**：作为一项低优先级但高参与度的社区活动，该贴已积累了 10 条评论和 2 个点赞，显示出社区对项目品牌形象的强烈关注和归属感。
*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) - RFC: Work Lanes 与 Board 自动化清理**：这是一项重要的治理规范提案，旨在通过轻量级 PR 通道和自动化标签管理减轻维护者的手动管理负担，目前引发了 6 条深度讨论。
*   **[Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) - 默认沙箱阻断了 Python 技能模式**：由社区开发者在开发 FINOS CDM 合规的投资分析技能时触发（已关闭），暴露了 ZeroClaw 沙箱在应对复杂真实业务场景时的策略局限，引发了关于安全与可用性边界的探讨。

## 5. Bug 与稳定性

今日报告的 Bug 呈现出明显的集群效应，主要集中在 **安全沙箱、多渠道路由和鉴权** 领域：

**严重 (S1/S2) - 核心工作流受阻或降级**
*   **[Issue #6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) [OPEN]**：Cron 计划任务的输出无法路由至配置的 Telegram 渠道（目前仅停留在 Web 仪表盘）。*目前已有对应修复方案 [PR #6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) (添加 channel_send 工具) 正在审查。*
*   **[Issue #6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) [OPEN]**：OpenAI Codex OAuth 鉴权成功，但运行时仍降级回退至 `OPENAI_API_KEY`。
*   **[Issue #6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878) [CLOSED]**：Bubblewrap 沙箱在 Fedora 43 上因缺失 `/lib64` 参数导致启动失败。

**安全与执行逻辑漏洞 (Defense-in-Depth)**
*   **[Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) & [PR #6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)**：发现 `allowed_tools` 仅在列表展示层过滤，未在执行时拦截。已有 PR 旨在通过深层拦截机制修复此安全隐患。
*   **[Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) [OPEN]**：`web_fetch` 的私有 IP 黑名单机制存在 SSRF 绕过风险（通过解析本地域名）。

## 6. 功能请求与路线图信号

从近期的提案和 RFC 来看，ZeroClaw 的下一个版本将重点发力**插件化重构**与**多模态交互**：

*   **统一插件架构**：[Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) 提出了 "Everything is a plugin" 的长远架构演进方向，计划将渠道、提供商、内置工具统一纳入插件 catalog，这是向高度模块化迈进的关键信号。
*   **Computer Use (屏幕交互)**：[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 请求添加类似 OpenAI Codex 的屏幕截图与鼠标键盘控制能力，以支持桌面级 RPA 场景。
*   **细粒度 Skill 提权机制**：[PR #6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) 引入了 Skill 级别的工具临时提权机制，允许技能在执行期间临时激活受限的 builtin 或 Composio 工具。这极大概率将随下个版本发布。

## 7. 用户反馈摘要

从 Issue 详情中提炼出当前用户在部署与使用 ZeroClaw 时的核心痛点：

1.  **沙箱策略过于严苛**：默认配置下，ZeroClaw 的安全沙箱阻断了常规的 Python 复杂项目（如数据科学、金融分析）的依赖安装与运行，导致“开箱即用”体验受挫（如 [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)）。
2.  **跨平台构建与路径痛点**：Windows 和 NixOS 用户在构建和配置路径上遇到阻碍。例如 `setup.bat --minimal` 构建体积异常庞大（[Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)），以及 Nix flake 未暴露正确的包输出（[Issue #6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)）。
3.  **多模型兼容性细节**：LLM 提供商在 API 规范上的微小差异（如 Gemini 对首条消息严格限制、GLM-5 的交织输出）容易导致 ZeroClaw 出现序列化报错或思维链泄漏（如 [Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)）。

## 8. 待处理积压

以下重要长期议题目前处于 Blocked（阻塞）或需维护者紧急介入状态，建议关注：

*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) [需关注]**：历史 bulk revert 导致 153 个提交丢失，目前正在进行恢复审计，涉及大量底层代码的查缺补漏（例如 [PR #6935](https://github.com/zeroclaw-labs/zeroclaw/pull/6935) 修复了丢失的系统流路由），需持续投入精力。
*   **[Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) [Blocked]**：Shell 执行子进程缺乏内存上限限制，存在潜在的 OOM 攻击面，亟待维护者评审并确立资源配额标准。
*   **[PR #6503](https://github.com/zeroclaw-labs/zeroclaw/pull/6503) [长期 Open]**：Tauri 核心依赖大版本升级（2.10 -> 2.11），风险较高，已停滞近 20 天，可能阻塞了桌面端的新特性适配。

</details>