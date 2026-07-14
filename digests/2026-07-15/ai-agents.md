# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 22:17 UTC

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

# OpenClaw 项目动态日报
**日期**: 2026-07-15 | **数据采集周期**: 过去 24 小时

---

### 1. 今日速览
OpenClaw 今日保持着极高的活跃度，共处理了 **500 条 Issue 更新**（新开/活跃 301，关闭 199）以及 **500 条 PR 更新**（待合并 349，合并/关闭 151）。项目刚刚发布了重磅的 **v2026.7.1** 版本，引入了全新的控制 UI、原生 App 更新以及对最新前沿模型的支持。然而，新版本的发布也带来了状态迁移和网关启动相关的稳定性挑战，多个 P0 级别的启动崩溃问题在社区引发热烈讨论。整体而言，项目在快速迭代向前的同时，正处于消化大版本发布后遗症、紧急修复稳定性Bug的关键阶段。

---

### 2. 版本发布：v2026.7.1 
新版本 `2026.7.1` 带来了多项重大架构和 UI 升级，但也伴随着较多破坏性变更和迁移痛点：
*   **核心更新**：全面重构了 Control UI 与新手引导流程；发布了官方 iOS, Android, and macOS 应用的重大更新。
*   **模型与提供商**：新增对 `GPT-5.6` 兼容性支持、腾讯 `Tencent Hy3` 以及 Meta `Muse Spark 1.1`。
*   **开发体验**：增强了 Codex 和连接式编程智能体的工作流。
*   **⚠️ 破坏性变更与迁移警报**：新版本引入了更严格的**启动前迁移检查**，旧版 SQLite 控制器或遗留的 `embedding_cache` 冲突会导致网关直接进入崩溃循环。强烈建议升级前备份，并关注相关 [Issue #107227](https://github.com/openclaw/openclaw/issues/107227)。

---

### 3. 项目进展
今日共有 151 个 PR 被合并或关闭，重点推进了多渠道消息清洗、底层基础设施健壮性以及 macOS 客户端体验的完善：
*   **客户端与 UI**：[PR #107798](https://github.com/openclaw/openclaw/pull/107798) 修复了 macOS 仪表盘通过链接浏览器打开时导航栏丢失的问题；[PR #107793](https://github.com/openclaw/openclaw/pull/107793) 优化了 Mac 应用更新提示，区分 App 更新与 Gateway 更新。
*   **渠道适配与消息投递**：[PR #103692](https://github.com/openclaw/openclaw/pull/103692) (MS Teams) 与 [PR #101708](https://github.com/openclaw/openclaw/pull/101708) (LINE) 移除了发送给用户的消息中夹杂的内部工具跟踪标记（如 `⚠️ 🛠️`），大幅提升终端用户消息洁净度。
*   **底层安全与状态管理**：[PR #107805](https://github.com/openclaw/openclaw/pull/107805) 引入了受保护的 MCP 协调发送路由；[PR #106545](https://github.com/openclaw/openclaw/pull/106545) 收紧了控制 UI 的输入验证。

---

### 4. 社区热点
今日讨论度最高的议题集中在客户端覆盖空白与底层架构设计：
*   **Linux/Windows 客户端呼声极高**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) （👍 81，评论 113）。目前 OpenClaw 仅提供 macOS/iOS/Android 客户端，Linux 和 Windows 用户强烈要求提供具有同等功能集的原生应用。
*   **架构级安全提案**：[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) （评论 13）。提议引入 "Masked Secrets"（掩码密钥）系统，允许智能体调用 API 而无法查看明文，以防提示词注入攻击窃取凭证，引发开发者对安全边界的深入探讨。
*   **DeepSeek 缓存命中率断崖式下跌**：[Issue #94518](https://github.com/openclaw/openclaw/issues/94518) （👍 10）。用户反馈升级到 6.x 后，DeepSeek 的提示词缓存命中率跌破 10%，导致成本剧增，引发关于感知边界缓存的讨论。

---

### 5. Bug 与稳定性
v2026.7.1 发布初期暴露了多处严重阻塞问题（P0 级），以下是按严重程度排序的 Bug 动态：

*   🔴 **P0: v2026.7.1 网关启动崩溃循环** 
    *   [Issue #107227](https://github.com/openclaw/openclaw/issues/107227) / [Issue #107133](https://github.com/openclaw/openclaw/issues/107133) / [Issue #107330](https://github.com/openclaw/openclaw/issues/107330)：长期运行的实例升级到 7.1 后，因 SQLite 数据库状态/遗留内存冲突，网关直接拒绝启动并不断重启，且 `openclaw doctor` 无法修复。（状态：暂无完全匹配的修复 PR，官方可能需紧急发布 hotfix）。
*   🟠 **P0: CLI 健康检查损坏运行状态数据库** 
    *   [Issue #101290](https://github.com/openclaw/openclaw/issues/101290)：在网关运行时执行 CLI 的 preflight 健康检查，会导致数据库镜像损坏。
*   🟠 **P1: Codex/Telegram 会话超时与消息丢失**
    *   [Issue #87744](https://github.com/openclaw/openclaw/issues/87744)（评论 14）：Codex 支持的 Telegram 会话在完成工作后无法达到 `turn/completed` 状态，导致最终答案无法投递。
*   🟠 **P1: llama.cpp 工具解析器不兼容** 
    *   [Issue #107449](https://github.com/openclaw/openclaw/issues/107449)：cron 工具的 JSON Schema (`pattern: "\S"`) 导致本地 llama.cpp 解析器直接报错 400。
*   🟡 **P2: 跨平台文件名编码乱码**
    *   [Issue #48788](https://github.com/openclaw/openclaw/issues/48788)（评论 19）：飞书等渠道处理中日韩文件名时存在多编码冲突，呼吁建立统一的文件名编码中心化工具。

---

### 6. 功能请求与路线图信号
通过近期 Feature Request，可以清晰看出用户对 OpenClaw 下一步演进的期望：
*   **多语言与语音隔离配置**：[Issue #66252](https://github.com/openclaw/openclaw/issues/66252) 希望为每个特定的智能体单独配置 TTS/STT（语音输入/输出）引擎，以支持多语言无缝共存。相关底层能力建设已在 [PR #89636](https://github.com/openclaw/openclaw/pull/89636) 推进。
*   **记忆系统生命周期管理**：[Issue #87660](https://github.com/openclaw/openclaw/issues/87660) 提出 `MEMORY.md` 缺乏生命周期感知，目前的自动化机制只做短期回忆，无法将重要锚点信息作为长期记忆永久保护。
*   **执行审批黑名单机制**：[Issue #6615](https://github.com/openclaw/openclaw/issues/6615) 希望在现有的命令白名单之外，增加黑名单支持，实现 "允许除危险命令（如删除/发送邮件）外的一切操作" 的策略。

---

### 7. 用户反馈摘要
从海量评论中提炼出的真实用户痛点：
1.  **“升级如扫雷”**：多位 macOS/Windows 用户反馈，最近的跨版本升级经常伴随着状态库迁移失败（`Cannot convert undefined` 或数据库锁死）。
2.  **“小模型被 System Prompt 挤爆”**：用户指出 v2026.6.x 版本注入了多达 20+ 种新工具说明和安全规则，导致上下文膨胀，严重稀释了小型模型的注意力，指令遵循能力大幅下降（[Issue #92451](https://github.com/openclaw/openclaw/issues/92451)）。
3.  **多模态消息处理卡顿**：在 WhatsApp 等渠道接收图片时，系统会被卡住约 3 分钟才开始真正处理，多模态异步队列管理体验不佳（[Issue #96834](https://github.com/openclaw/openclaw/issues/96834)）。

---

### 8. 待处理积压
*提醒维护者关注以下高影响力但处于卡壳/陈旧状态的问题：*
*   [Issue #75](https://github.com/openclaw/openclaw/issues/75)：Linux/Windows 客户端缺失（已开启半年，高赞，需产品层决策）。
*   [Issue #77012](https://github.com/openclaw/openclaw/issues/77012)：WebChat 会话记录在每一轮对话后被覆盖刷新（数据丢失回归，由于 SessionManager 移除引起，5月开启，标记为 stale）。
*   [Issue #90325](https://github.com/openclaw/openclaw/issues/90325)：Matrix 渠道调度崩溃（已关闭但无明确修复方案，用户仍在求证）。

---

## 横向生态对比

这里是为您生成的 2026 年 7 月 15 日个人 AI 助手与智能体开源生态横向对比分析报告。

---

# 📊 2026.07.15 个人 AI 助手与智能体开源生态横向分析报告

### 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**从“基础对话对接”向“多模态、跨平台调度与自主任务执行”跃升的深水区**。各大项目不再满足于单一的 LLM API 封装，而是将重心转向 IM 渠道原生适配、操作系统级控制（沙箱/UIA）以及复杂的上下文与记忆生命周期管理。然而，伴随能力下沉与架构扩张，**状态数据迁移、安全沙箱配准、上下文压缩撕裂**成为普遍的“成长的烦恼”，整个生态正在高强度的试错与热修复中快速向前迭代。

---

### 2. 各项目活跃度对比（基于过去 24 小时数据）

| 项目名称 | Issues 处理 | PR 处理 | 版本发布 | 核心状态与健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (301/199) | 500 (349/151) | **v2026.7.1** | 🟢 **极高** (消化大版本Bug，社区极度活跃) |
| **CoPaw** | 50 (15/35) | 50 (24/26) | **v2.0.0.post2** | 🟢 **高** (紧急热修复，打磨安全策略) |
| **IronClaw** | 48 | 50 (21/29) | 无 (筹备中) | 🟢 **高** (大型架构重构收官，清理债务) |
| **ZeroClaw** | 43 (31/12) | 50 (21/29) | 无 (v0.8.3收尾) | 🟢 **高** (SOP引擎成熟期，功能密集交付) |
| **NanoBot** | 10 | 47 (合并/关闭) | 无 | 🟡 **良好** (处于功能打磨与测试加固阶段) |
| **Hermes Agent** | 39 | 39 (8/31关闭) | 无 | 🟡 **良好** (强力清理技术债，收敛旧Bug) |
| **Moltis** | 3 | 10 (3/7) | 无 | 🟡 **良好** (攻坚本地小模型与MCP兼容性) |
| **PicoClaw** | 3 | 9 (4/5) | 无 | 🟠 **中等** (聚焦底层加密与成本控制) |
| **NanoClaw** | 0 | 28 (9/19) | 无 | 🟠 **中等** (零社区Issue，代码审查冲刺) |
| **LobsterAI**| 0 (关闭4条) | 0 (关闭3条) | 无 | 🔴 **低** (处于维护性静默清理期) |
| **NullClaw / ZeptoClaw / TinyClaw** | 0 | 0 | 无 | ⚪ **停滞** (过去24小时无动态) |

---

### 3. OpenClaw 在生态中的定位
作为当之无愧的**生态核心参照物与流量担当**，OpenClaw 展现出了统治级的社区吞吐量（单日千级动态更新）。
* **优势对比**：其社区基数和迭代速度呈碾压态势（单日处理 500+ PR/Issue），在多端覆盖（macOS/iOS/Android）与最新前沿模型适配（GPT-5.6 等）上保持绝对领先。
* **技术差异**：相比其他项目仍在解决基础的“消息投递”和“本地模型适配”，OpenClaw 已经深入到 **执行审批黑名单、多语言 TTS/STT 引擎隔离、感知边界缓存优化** 等深水区架构设计。
* **阵痛与挑战**：因其庞大的体量，OpenClaw 的破坏性变更（如 SQLite 迁移）引发的 P0 级灾难（如启动崩溃循环）影响面极广，被称为“升级如扫雷”。

---

### 4. 共同涌现的技术方向（跨界共识）

从多项目并行的 Feature Request 和 Bug 表现中，清晰浮现出四大行业级共性需求：
1. **上下文窗口与记忆生命周期管理**（*涉及：OpenClaw, IronClaw, Moltis, ZeroClaw, CoPaw*）
   * **痛点**：粗暴的字符截断导致 API 报错、长对话“失忆”、工具输出挤爆 Token。
   * **诉求**：从短期无界增长的 `messages list` 转向有状态的长期记忆解耦（如保护锚点信息、Tool-output 压缩摘要）。
2. **复杂渠道的原生体验对齐**（*涉及：OpenClaw, NanoBot, PicoClaw, ZeroClaw*）
   * **痛点**：IM 平台截断消息导致 Markdown 渲染失败、内部工具跟踪标记泄露。
   * **诉求**：不仅是“收发消息”，而是要求音频原生播放、跨渠道上下文回填水合（如 Slack）、精简摘要推送给用户。
3. **本地轻量化模型防污染与兼容**（*涉及：Moltis, OpenClaw, ZeroClaw*）
   * **痛点**：本地小模型极易被臃肿的 System Prompt 挤爆注意力；输出不规范的 JSON 格式。
   * **诉求**：需要严格的本地解析器，防止系统指令泄露（防注入），同时提升容错解析能力。
4. **MCP (Model Context Protocol) 工具链稳定性**（*涉及：OpenClaw, Hermes Agent, PicoClaw, Moltis*）
   * **痛点**：Schema 字段缺失导致工具拒绝注入，OAuth 认证失效。
   * **诉求**：跨服务商标准化的工具调用拦截与鉴权透明化。

---

### 5. 差异化定位与架构侧重分析

* **OpenClaw / CoPaw（全平台重型枢纽）**：主打多端 App 与桌面操作，深度切入系统级控制（如 CoPaw 介入 Windows UIA 和 Tauri 进行桌面 GUI 自动化，OpenClaw 的原生 App 矩阵）。核心挑战在于操作系统安全策略的博弈。
* **IronClaw / ZeroClaw（企业级/编排级引擎）**：偏向企业级治理与流程驱动。IronClaw 侧重扩展运行时重构与 CI 强治理；ZeroClaw 则发力 SOP（标准操作程序）执行引擎与多租户安全隔离（RBAC）。
* **Moltis / PicoClaw（轻量化与私有化部署）**：极度关注本地算力与成本。Moltis 主打“全本地化”（接入 FunASR、兼容 Gemma/oMLX），PicoClaw 则死磕 Prompt 缓存以实现极致降本。
* **Hermes Agent / NanoBot（微服务与极客玩家生态）**：强调可观测性与垂直场景扩展。Hermes 探索本土化社区技能（如 B站、V2EX 数据抓取），NanoBot 则探索 IoT 硬件接入。

---

### 6. 社区热度与成熟度分层

* **快速扩张/激进试错期**：**OpenClaw**、**CoPaw**。版本迭代快，新功能多，但伴随着大量破坏性变更、数据库锁死和沙箱爆炸等高 P0 级 Bug。适合追求极致能力、有排错能力的极客团队。
* **架构重构/质量收敛期**：**IronClaw**、**ZeroClaw**、**Hermes Agent**、**NanoClaw**。处于代码审查高峰，密集清理技术债，完善 CI 门禁。适合有定制开发需求的企业级用户介入。
* **稳态打磨/垂直深耕期**：**NanoBot**、**Moltis**、**PicoClaw**、**LobsterAI**。无大版本发布，重心在多渠道体验打磨、依赖库升级和底层 bug 修复，追求平稳运行。

---

### 7. 值得关注的技术趋势信号（开发者建议）

1. **“防呆设计”取代“功能堆砌”**：系统提示词膨胀正在反噬模型智力。**建议**：开发者在构建 Agent 时，应引入“动态上下文压缩”和“按需加载工具说明”机制，为小模型留出足够的注意力带宽。
2. **沙箱与权限边界的精细化**：CoPaw 的 Windows 沙箱递归爆炸和 OpenClaw 的执行黑名单诉求表明，粗颗粒度的全盘接管行不通。**建议**：未来 Agent 的安全边界必须向应用级（ACL 白名单/黑名单结合）转移，而非简单的系统级提权。
3. **消息可靠性转向“用户感知无感”**：长文本流式输出截断、异步通道（WhatsApp/Telegram）重连死锁是高频痛点。**建议**：IM 接入层必须建立去抖动机制和“孤儿进程”安全清理，确保 UI 渲染层与 LLM 流式层解耦。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是为您生成的 2026-07-15 NanoBot 项目动态日报。

# 🤖 NanoBot 项目动态日报 (2026-07-15)

## 1. 今日速览
NanoBot 项目今日呈现出极高的社区活跃度与工程迭代效率。在过去 24 小时内，项目无新版本发布，但合并/关闭了高达 47 个 Pull Requests，并解决了 10 个 Issues。更新重心主要集中在 WebUI 交互优化、多渠道（如钉钉、Telegram）消息流转的边界处理，以及心跳/Cron 任务调度的稳定性提升。这表明项目当前正处于功能密集交付后的快速打磨与测试加固阶段，工程团队的响应速度和代码合并吞吐量处于非常健康的状态。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日项目通过大量高效的 PR 合并，整体架构稳定性和易用性向前迈出了一大步：
* **测试与 CI/CD 提速**：[PR #4936](https://github.com/HKUDS/nanobot/pull/4936) 通过精简操作系统/版本矩阵（保留代表性版本），在保持真实协议覆盖率的前提下大幅提升了 CI 运行速度并强化了测试套件。
* **WebUI 功能扩充与重构**：合并了多个提升用户体验的 PR，包括用户消息复制功能（[PR #4930](https://github.com/HKUDS/nanobot/pull/4930)）、斜杠命令高亮显示（[PR #4933](https://github.com/HKUDS/nanobot/pull/4933)），以及修复了 `package-lock.json` 未同步导致 Docker 构建失败的问题（[PR #4927](https://github.com/HKUDS/nanobot/pull/4927)）。
* **渠道消息与执行核心优化**：[PR #4931](https://github.com/HKUDS/nanobot/pull/4931) 优化了重启逻辑，确保在频道重连后才发送完成通知；[PR #4631](https://github.com/HKUDS/nanobot/pull/4631) 引入了可脚本化的测试框架，提升了 Agent Runner 的自动化测试能力。

## 4. 社区热点
今日社区讨论最为热烈、带 ["conflict"] 标签的活跃 PR 主要集中在**架构设计**与**高级配置**上，反映了社区对精细化控制 Agent 行为的强烈需求：
* **[PR #4549](https://github.com/HKUDS/nanobot/pull/4549) feat(heartbeat): add model_override config for cheaper heartbeat model**：作为 P2 优先级的热门 PR，开发者期望在执行心跳检测时使用更便宜/专用的模型，以平衡系统开销。这引起了社区关于多模型路由策略的讨论。
* **[PR #4689](https://github.com/HKUDS/nanobot/pull/4689) feat(providers): surface OAuth status and expiry warnings**：针对 OAuth 提供程序状态可见性和 Token 过期预警的改进，展示了用户在使用多提供商（如 Codex, DashScope）时对鉴权透明度的迫切诉求。

## 5. Bug 与稳定性
今日新报告了几个关键性 Bug，且部分已迅速得到响应和修复：
1. **🔴 P1 统一会话心跳路由失效**：[Issue #4924](https://github.com/HKUDS/nanobot/issues/4924) 指出当开启 `unifiedSession: true` 且清除历史会话时，心跳目标选择失败。**状态：已有修复 PR [PR #4928](https://github.com/HKUDS/nanobot/pull/4928) 提交。**
2. **🔴 P1 模型思维链泄露**：[Issue #4934](https://github.com/HKUDS/nanobot/issues/4934) 指出通过 DashScope 使用 Qwen 模型时，模型的“思考过程/推理内容”被错误地暴露在最终聊天回复中。**状态：暂无针对性 Fix PR。**
3. **🟡 P2 内存泄漏隐患**：[Issue #4787](https://github.com/HKUDS/nanobot/issues/4787) 发现 `Session.messages` 列表会无限制增长，导致长时间运行的会话（尤其是统一会话）发生资源泄漏。
4. **🟡 P2 CLI 参数不一致**：[Issue #4932](https://github.com/HKUDS/nanobot/issues/4932) 报告了 CLI 中不同命令的 `--config` 提示信息不统一。**状态：已修复并关闭（[PR #4932](https://github.com/HKUDS/nanobot/pull/4932)）。**

## 6. 功能请求与路线图信号
根据近期 Issue 与 PR 趋势，下一版本（如 v0.1.5）的路线图信号可能包含以下方向：
* **Cron Job 的 WebUI 可视化管理**：[Issue #4218](https://github.com/HKUDS/nanobot/issues/4218) 强烈建议将全功能的 Cron CLI 迁移到内置 WebUI 中，以便非技术用户配置定时任务。
* **低打扰的 Cron 任务结果推送**：[Issue #1445](https://github.com/HKUDS/nanobot/issues/1445) 希望当 Cron 任务（如社媒监控）没有获取到有意义的新信息时，不要打扰用户。
* **智能硬件/物联网接入探索**：[Issue #1411](https://github.com/HKUDS/nanobot/issues/1411) 社区成员正在探讨将 NanoBot 接入类似小米音响的智能硬件渠道，展现了对语音交互的期待。

## 7. 用户反馈摘要
* **痛点（Markdown 解析与分割）**：Telegram 用户频繁反馈（如 [Issue #2568](https://github.com/HKUDS/nanobot/issues/2568), [Issue #4637](https://github.com/HKUDS/nanobot/issues/4637)），长文本消息被截断发送时，前置片段无法正常渲染 Markdown，且近期版本的格式解析可靠性下降。
* **痛点（跨容器通信）**：[Issue #1086](https://github.com/HKUDS/nanobot/issues/1086) 指出 WhatsApp 桥接服务绑定 `127.0.0.1` 导致 Docker 容器间无法通信，影响了容器化部署的体验。
* **满意点（执行效率与工程严谨性）**：从合并的 PR 质量（如对幂等性的考量、PowerShell 输出解码修复 [PR #4881](https://github.com/HKUDS/nanobot/pull/4881)）可以看出，开发团队对边界条件处理非常严谨，这在社区中获得了正向的反馈。

## 8. 待处理积压
* **[Issue #4787](https://github.com/HKUDS/nanobot/issues/4787) (Resource leak: Session.messages list unbounded)**：这是一项严重程度较高的资源泄漏问题，自 7 月 6 日提出至今仍处于 Open 状态，由于在长时间运行的会话场景下极易触发，建议核心维护者优先分配排查资源。
* **一批带有 `[conflict]` 标签的活跃 PR**：包括 [PR #4890](https://github.com/HKUDS/nanobot/pull/4890), [PR #4621](https://github.com/HKUDS/nanobot/pull/4621) 等，这些 PR 涉及核心架构（如会话锁机制、记忆存储上下文），可能存在代码冲突，需要维护者进行重点 Review 或协调多作者合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报
**日期**: 2026-07-15 | **追踪仓库**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 🌟 今日速览
今日 Hermes Agent 项目迎来了**极高强度的维护与收敛期**。过去 24 小时内项目处理了惊人的 **78 条 Issue/PR 关闭/合并记录**（39 个 Issue 关闭，8 个 PR 合并，31 个 PR 关闭/拒绝），成功清理了大量技术债务。核心团队重点发力于网关的稳定性、跨平台适配（Telegram/WhatsApp/Photon）以及桌面端（TUI）体验的优化。当前仍有 **42 个待合并 PR** 处于排队审查状态，开源社区贡献极为活跃，项目整体展现出强健的迭代生命力。

### 2. 🚀 版本发布
**本日无新版本发布 (0 Releases)**。但从合并的大量修复 PR（大多带有 `sweeper:implemented-on-main` 标签）来看，项目正在为下一个大版本（预计为 v0.18.0）进行密集的代码储备与主干稳定工作。

### 3. 🔧 项目进展 (合并/关闭的核心 PR)
今日合并/关闭的 PR 集中在**致命错误修复**与**工程基建优化**，项目在容错性与可用性上迈出了一大步：
*   **[PR #49876](https://github.com/NousResearch/hermes-agent/pull/49876) 彻底解决 Photon 静默重连死循环**：将 Photon sidecar 意外崩溃提升为致命适配器错误，避免了网关无休止的重试且不重启子进程的问题。
*   **[PR #49904](https://github.com/NousResearch/hermes-agent/pull/49904) 修复 Docker 环境下 TTS 失效**：通过在 Docker 镜像中预装 `edge-tts`，解决了因禁用懒加载导致语音功能无法开箱即用的问题。
*   **[PR #49895](https://github.com/NousResearch/hermes-agent/pull/49895) 优化桌面端更新弹窗**：重构了更新提示的 UI 结构，确保在界面缩放或更新日志过长时，操作按钮始终可达。
*   **[PR #49898](https://github.com/NousResearch/hermes-agent/pull/49898) 增强网关 Keep-typing 节奏与 URL 安全性**：优化了网关在处理长文本流输出时的速率限制处理逻辑。
*   **[PR #59157](https://github.com/NousResearch/hermes-agent/pull/59157) 兼容 Python 3.14**：修复了 Python 3.14 移除私有 `_initializer` 属性导致的线程池崩溃问题，前瞻性适配了新版本 Python。

### 4. 🔥 社区热点 (最活跃的讨论)
社区今日的关注点集中在**多平台网桥的边缘情况**以及**上下文/会话状态管理**：
*   **🥇 最热烈讨论**：**[Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)** (10条评论) —— Photon iMessage 侧车进程死亡导致静默重连死亡螺旋。用户极度痛点于“发消息后毫无反应且不自动重连”，此问题已于今日通过 PR 修复。
*   **🥈 核心工具链报错**：**[Issue #51587](https://github.com/NousResearch/hermes-agent/issues/51587)** (10条评论) —— MCP (Model Context Protocol) 工具连接成功，但未能在智能体会话中显露。用户反馈配置无误但 Agent 称“工具不存在”，暴露出会话状态注入逻辑的缺陷。
*   **🥉 性能严重退化**：**[Issue #49673](https://github.com/NousResearch/hermes-agent/issues/49673)** (4条评论) —— 网关因保留大量未清理的工具输出（Tool-output bloat），导致长对话出现数分钟的卡顿。社区针对如何压缩/截断冗长的工具回传数据进行了深入讨论。

### 5. 🐛 Bug 与稳定性评估
根据影响面和严重程度，今日处理的重点 Bug 划分如下：

*   **[P1 严重 - 已修复]**：**[Issue #51587](https://github.com/NousResearch/hermes-agent/issues/51587)** - MCP 工具集无法注入 Agent 活动会话，直接阻断用户进行自定义工具链扩展。
*   **[P2 高危 - 已修复]**：
    *   **[Issue #49831](https://github.com/NousResearch/hermes-agent/issues/49831)** - WhatsApp 适配器在 Git 源码安装时路径解析错误（Off-by-one），导致致命启动失败。
    *   **[Issue #49417](https://github.com/NousResearch/hermes-agent/issues/49417)** - `delegate_task` 分发的子代理无法继承父代理的 `fallback_providers` 链，导致高可用重试机制在任务委派时失效。
*   **[P2 高危 - 仍待处理 PR]**：
    *   **[PR #49874](https://github.com/NousResearch/hermes-agent/pull/49874)** - **上下文压缩锁竞争**：当并发请求触发同一个会话的上下文压缩时，可能导致未加锁的请求携带未压缩的冗长上下文发给 LLM，引发报错。目前已有修复 PR 待合并。
*   **[P3 新鲜出炉 - 待处理]**：**[Issue #64590](https://github.com/NousResearch/hermes-agent/issues/64590)** - 目录回退机制错误加载了 Hermes 自身的 `AGENTS.md`（面向贡献者的文档），导致智能体身份错乱，被判定为 P1 级别风险。

### 6. 🗺️ 功能请求与路线图信号
基于近期的 Feature Request 和待合并 PR，下一阶段的功能重心将倾向于**移动端体验补齐**与**垂直领域技能扩展**：
*   **端侧语音交互 (STT/TTS)**：**[Issue #49848](https://github.com/NousResearch/hermes-agent/issues/49848)** 大量用户呼吁桌面端加入语音输入输出支持。相关的底层修复（如 [PR #49884](https://github.com/NousResearch/hermes-agent/pull/49884) 修复 Voice beep 配置解析）暗示团队正在为完整的语音 UI 铺路。
*   **本土化与垂直社区 Skills 引入**：**[PR #49869](https://github.com/NousResearch/hermes-agent/pull/49869)** 提出内置 V2EX、B站、Reddit、雪球等平台的数据抓取技能。表明 Hermes 正在从纯框架向“开箱即用的小微助理”生态演进。
*   **研发方法论内化**：**[PR #49873](https://github.com/NousResearch/hermes-agent/pull/49873)** 引入了 `writing-plans`（计划编写）和 `subagent-driven-development`（子代理驱动开发）技能，这标志着 Hermes 正尝试用标准化的工作流约束 Agent 的随机性。

### 7. 🗣️ 用户反馈摘要 (真实痛点萃取)
*   **Docker 用户苦不堪言**：在 v0.17.0 版本中，由于默认禁用了懒加载（`HERMES_DISABLE_LAZY_INSTALLS=1`），导致 TTS 等依赖项未能正确安装，容器启动需等待 20 分钟且功能不可用（[Issue #49747](https://github.com/NousResearch/hermes-agent/issues/49747)）。**诉求：Docker 镜像应当真正做到开箱即用。**
*   **长上下文处理能力薄弱**：重度用户在进行复杂代码/工具连续调用时，极易触发 Token 溢出。由于现有的压缩机制会粗暴分割会话，导致 Agent 出现“失忆”或数分钟卡顿（[Issue #49673](https://github.com/NousResearch/hermes-agent/issues/49673)）。**诉求：引入更平滑的工具输出丢弃/摘要策略。**
*   **配置系统不够鲁棒**：无论是电话号码被 API 返回的掩码覆盖（[Issue #49674](https://github.com/NousResearch/hermes-agent/issues/49674)），还是配置文件选型导致桌面端每次启动都要求重新安装（[Issue #49787](https://github.com/NousResearch/hermes-agent/issues/49787)），都反映出配置的加载与覆盖逻辑在边缘场景下依然脆弱。

### 8. ⏳ 待处理积压提醒
以下重要讨论仍处于 Open 状态且历时较长，建议维护者重点 Review：
*   **[Issue #18374](https://github.com/NousResearch/hermes-agent/issues/18374) (👍 5 赞同)**：已挂起近 2 个月。用户希望 `cronjob` 工具能为沙盒化的 Agent 暴露完整的 Prompt，而不是仅提供 `prompt_preview`，这对于定时任务的调试至关重要。
*   **[PR #49900](https://github.com/NousResearch/hermes-agent/pull/49900) (待合并)**：针对 TUI WebSocket 孤立会话清理机制的优化。如果会话中存在正在进行的工具调用或等待审批的提示，不应被作为“孤儿进程”清理，这对于需要人工介入的长耗时任务非常关键。
*   **[Issue #53027](https://github.com/NousResearch/hermes-agent/issues/53027)**：Cron 定时任务结合 `delegate_task` 异步委派时，子代理完成事件丢失。目前仍缺复现环境，但已影响到部分自动化工作流的闭环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-07-15）

## 1. 今日速览
PicoClaw 今日整体活跃度处于中高水平，过去 24 小时内共处理 3 条 Issues 和 9 条 Pull Requests。项目无新版本发布，但社区在多渠道适配（飞书、钉钉）及底层 LLM 提供商（AWS Bedrock、Anthropic）的缓存与兼容性优化上保持高频提交。值得注意的是，今日有 5 个 PR 被关闭/合并，推进了流式输出工具调用丢失、配置反射异常及 JSON Schema 校验等多个历史遗留 Bug 的修复。同时，底层加密库替换和高频模型路由限流问题成为社区当前关注焦点。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 5 个 PR 被关闭或合并，项目在稳定性和底层兼容性上迈出坚实一步：
*   **[PR #2957](https://github.com/sipeed/picoclaw/pull/2957) [CLOSED]**：修复流式输出期间 `tool_calls` 被错误过滤为辅助消息的问题。引入了 `outboundMessageIsToolCalls()` 辅助函数，确保工具调用在 `preSend()` 阶段不被误删，提升了 Agent 工具链路的稳定性。
*   **[PR #2270](https://github.com/sipeed/picoclaw/pull/2270) [CLOSED]**：修复 `collectSensitive` 在迭代包含 `SecureString` 的 map 值时引发的 panic 崩溃。通过增加 `v.CanAddr()` 检查并创建可寻址副本，根除了 Go 反射机制导致的底层崩溃问题。
*   **[PR #2128](https://github.com/sipeed/picoclaw/pull/2128) [CLOSED]**：修复 MCP 服务器返回的工具 schema 缺少 `properties` 字段时，在严格模式 OpenAI 兼容 API（如 LM Studio）下的校验报错。
*   **[PR #2982](https://github.com/sipeed/picoclaw/pull/2982) [CLOSED]**：适配 AWS Bedrock Claude Opus 4.8 模型，自动丢弃已废弃的 `temperature` 参数，解决模型升级导致的 400 参数校验错误。
*   **[PR #3156](https://github.com/sipeed/picoclaw/pull/3156) [CLOSED]**：在 Pico 通道的最终确认消息中输出单轮 LLM token 用量（分离输入/输出 token），为下游消费者提供精细化的计费与统计支持。

## 4. 社区热点
今日讨论最活跃的议题集中在安全加密库替换与速率限制失效：
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)**（8 条评论，2 👍）：用户 [pbsds] 提出使用官方推荐的 `vodozemac` 替代当前已停止维护且存在安全风险的 `libolm` 库。该 Issue 被标记为高优先级（`priority: high`），表明团队对安全底座升级持积极态度，讨论焦点集中在编译时的可选配置实现上。
*   **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)**（1 条评论）：用户 [VictorSu000] 报告仅配置 `agents.defaults.model_name` 而未设置 fallback 模型时，RPM（每分钟请求数）限制完全失效。这暴露了速率限制器与模型路由 fallback 逻辑之间的耦合缺陷。

## 5. Bug 与稳定性
今日报告及处理的 Bug 按严重程度排列如下：
1.  **[严重] 配置解析 Panic 崩溃**（已修复）：[PR #2270](https://github.com/sipeed/picoclaw/pull/2270) 修复了包含敏感信息的 map 结构导致的反射崩溃，属于阻塞性底层 Bug。
2.  **[高] 速率限制失效**（未修复）：[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) 报告未配置 fallback 模型时 RPM 限制无效，可能导致 API 额度被瞬间耗尽，目前尚无对应 fix PR。
3.  **[中] 钉钉会话列表预览异常**（未修复）：[Issue #3255](https://github.com/sipeed/picoclaw/issues/3255) 报告钉钉会话列表预览固定显示 "PicoClaw" 而非实际回复内容（因 `SimpleReplyMarkdown` title 设置问题），影响端到端用户体验。
4.  **[中] 流式工具调用丢失**（已修复）：[PR #2957](https://github.com/sipeed/picoclaw/pull/2957) 修复了流式模式下工具调用被误过滤的问题。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 中可以捕捉到项目演进的明确信号：
*   **Prompt 缓存优化**：[PR #3163](https://github.com/sipeed/picoclaw/pull/3163) 和 [PR #3228](https://github.com/sipeed/picoclaw/pull/3228) 分别致力于为 AWS Bedrock 和 Anthropic 添加 Prompt Caching 支持。通过 `cache_control` 标记，大幅降低重复上下文的 Token 计费（读取成本降至 0.1 倍），这表明**降本增效**是下一版本的核心路线之一。
*   **多通道原生体验增强**：[PR #3256](https://github.com/sipeed/picoclaw/pull/3256) 修复飞书音视频消息发送，将其从普通文件转为原生可播放消息。结合钉钉预览 Bug 的反馈，项目正在深耕多 IM 平台的原生消息格式适配。
*   **底层安全库替换**：[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) 提出的 `libolm` 迁移诉求，若与现有的安全配置修复（#2270）结合，预示着后续版本可能会有一次破坏性的依赖更新。

## 7. 用户反馈摘要
从今日 Issues 和 PRs 中提炼出的用户真实痛点包括：
*   **企业级成本管控痛点**：用户高度关注 Token 消耗与计费。一方面需要单轮调用的详细 Token 用量（[PR #3156](https://github.com/sipeed/picoclaw/pull/3156)），另一方面积极寻求通过 Prompt 缓存（[PR #3163](https://github.com/sipeed/picoclaw/pull/3163), [PR #3228](https://github.com/sipeed/picoclaw/pull/3228)）和 RPM 限制（[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)）来控制成本。
*   **IM 平台原生体验期望**：用户不满足于“能收到消息”，而是要求与原生 Bot 体验完全对齐。如飞书音频需直接播放（[PR #3256](https://github.com/sipeed/picoclaw/pull/3256)），钉钉列表需预览实际内容（[Issue #3255](https://github.com/sipeed/picoclaw/issues/3255)）。
*   **多模型平台兼容性痛点**：切换至最新模型（如 Claude Opus 4.8）时极易遇到参数不兼容的 400 错误（[PR #2982](https://github.com/sipeed/picoclaw/pull/2982)），反映出用户对后端模型热插拔的鲁棒性有极高要求。

## 8. 待处理积压
项目当前存在多个被标记为 `stale` 的重要待办项，需维护者关注：
*   **[PR #3233](https://github.com/sipeed/picoclaw/pull/3233) [stale]**：针对 PR 3222 的向后兼容性修复，停滞时间较长，影响部分历史功能的兼容。
*   **[PR #3233](https://github.com/sipeed/picoclaw/pull/3233) 对应的 Issue #3232 [stale]**：RPM 限制失效的严重 Bug 尚在积压中。
*   **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) [stale]**：该高优 Issue 已被标记 stale，存在被自动关闭的风险，需确认是否已安排修复排期。
*   **提示**：多个安全级与工具链级的历史 PR 今日才被集中关闭，建议项目方引入自动化测试门禁，避免此类底层 Bug 长期积压。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期**: 2026-07-15 | **分析数据源**: github.com/qwibitai/nanoclaw

---

### 1. 今日速览
过去 24 小时内，NanoClaw 代码库呈现出极高的维护活跃度，但社区发帖意愿趋于平缓。今日共处理了 28 条 Pull Request（其中 9 条被合并或关闭，19 条处于待合并状态），而 Issue 新增与更新量均为 0。这表明项目当前正处于**集中进行代码审查、底层稳定性修复与安全加固的冲刺阶段**。核心开发团队（如 sturdy4days, moshe-nanoco 等）及社区贡献者正协力解决容器生命周期、多渠道适配器（如 Telegram, Slack, Discord）以及轮询机制的边界缺陷。

### 2. 版本发布
**本日无新版本发布（0 个 Release）。** 考虑到当前积压了大量关于安全、容器与消息可靠性的待合并 PR，项目可能正在为下一个具有重大里程碑意义的版本进行代码储备。

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，为项目带来了以下实质性进展：
*   **核心架构统一**：由核心团队 moshe-nanoco 提交的 [PR #3040](https://github.com/nanocoai/nanoclaw/pull/3040) 统一了审批驻留的生命周期契约，这有助于规范化智能体的执行流程。
*   **渠道适配优化**：amit-shafnir ([PR #3043](https://github.com/nanocoai/nanoclaw/pull/3043)) 修复了 Telegram 深度链接的域名问题；sturdy4days 关闭了多个涉及 Telegram 配对和文档修复的历史遗留 PR（如 [PR #2728](https://github.com/nanocoai/nanoclaw/pull/2728) 和 [PR #2729](https://github.com/nanocoai/nanoclaw/pull/2729)），提升了主渠道的稳定性。
*   **CI/CD 与安全基线修复**：关闭了修复 pre-commit 钩子在缺失 pnpm 时失效的 [PR #2753](https://github.com/nanocoai/nanoclaw/pull/2753)，以及修复环境变量在 systemd/launchd 下无法加载的 [PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730)。
*   *注：OmriBenShoham 提交的关于 Dial 渠道集成的 [PR #3042](https://github.com/nanocoai/nanoclaw/pull/3042) 被关闭，推测被拆分重构为更细粒度的 [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) 继续推进。*

### 4. 社区热点
尽管没有新建 Issue，但基于近期活跃的 PR 判断，当前社区开发者的关注焦点集中在：
*   **多渠道接入能力扩展**：Dial 频道的接入是近期的热点需求，OmriBenShoham 连续提交了 [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) 和 [PR #3042](https://github.com/nanocoai/nanoclaw/pull/3042) 以将其添加到设置向导和技能选择器中，反映出用户对 AI 助手跨平台部署的强烈诉求。
*   **企业级安全与供应链把控**：贡献者 sturdy4days 在安全修复方面极为活跃，其提交的 [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)（验证组文件夹并禁止隐式镜像拉取）和 [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973)（激活最小发布时间限制以防范供应链投毒）引发了较多关注，体现了项目在向企业级标准靠拢。

### 5. Bug 与稳定性
今日待合并的 PR 中暴露了多个影响系统稳定性和用户体验的 Bug，按严重程度排列如下：

*   **严重 - 数据库与容器稳定性**：
    *   [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) 修复了在容器被 SIGKILL 杀死后，`outbound.db` 出现过时日志的问题。这导致了热日志轮询竞争，严重时会导致消息队列死锁。
*   **中等 - 消息投递与解析可靠性**：
    *   [PR #3045](https://github.com/nanocoai/nanoclaw/pull/3045) 揭示并修复了容器退出时出站消息最多延迟 60 秒的 Bug。
    *   [PR #3048](https://github.com/nanocoai/nanoclaw/pull/3048) 与 [PR #3049](https://github.com/nanocoai/nanoclaw/pull/3049) 修复了 poll-loop 中 `<message>` 主体被截断或在工具调用期间未被投递的解析逻辑漏洞。
*   **低 - 特定渠道边界情况**：
    *   [PR #3044](https://github.com/nanocoai/nanoclaw/pull/3044) 修复了 Telegram 语音/音频附件丢失字节导致静默丢弃的问题。
    *   [PR #2899](https://github.com/nanocoai/nanoclaw/pull/2899) 修复了 Discord 所有审批卡片按钮点击均被错误路由为“拒绝”的低级解析错误。

### 6. 功能请求与路线图信号
通过近期的 PR 走向，我们可以识别出以下明确的路线图信号：
*   **多渠道集成拓展**：Dial 平台的接入正在紧锣密鼓地进行中（[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)），表明项目致力于扩大其支持的通讯生态。
*   **精细化技能与权限控制**：[PR #2921](https://github.com/nanocoai/nanoclaw/pull/2921) 修复了技能片段未根据群组选择进行隔离的问题，表明 NanoClaw 正在强化不同智能体群组间的上下文隔离与权限边界，这对于多 Agent 协作至关重要。

### 7. 用户反馈摘要
综合各类 PR 描述，当前真实用户在使用 NanoClaw 时的痛点和反馈如下：
*   **部署与集成体验依然繁琐**：例如 [PR #3047](https://github.com/nanocoai/nanoclaw/pull/3047) 发现，在真实安装走查时，Slack 凭证配置的顺序错误会导致 Webhook URL 验证失败。这说明部分第三方集成的初始化流程对小白用户不够健壮。
*   **复杂运行环境下的生命周期脆弱性**：用户反馈系统在非正常退出（如 OOM 或手动 Kill 导致的容器 SIGKILL）时，缺乏完善的状态自恢复机制，容易引发数据库锁死或消息丢失。

### 8. 待处理积压
项目存在多个由核心成员提交但尚未合并的重要 PR，积压时间较长，需要维护团队重点关注并进行最终 Code Review：
*   [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801) (创建于 6-17)：**安全修复**。加固不受信任的路由输入，防止 JSON 解析出非对象时引发的崩溃。
*   [PR #2921](https://github.com/nanocoai/nanoclaw/pull/2921) (创建于 7-03)：**架构修复**。限制群组技能的 MD 文件注入，防止技能越权污染。
*   [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973) (创建于 7-07)：**安全修复**。修复 pnpm 配置层级错误导致供应链安全防护（最小发布时间）失效的问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-15  
**数据来源**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### 1. 今日速览
过去 24 小时内，IronClaw 项目保持了极高的开发与社区活跃度，共处理 48 条 Issues 和 50 条 PR（其中 29 条 PR 已合并/关闭）。项目正处于 **"NEA-25 统一扩展运行时"（Unified Extension Runtime）** 大型重构的收官阶段，核心团队（BenKurrek 等）密集合并了多阶段架构列车的代码（P2 至 P7b）。同时，维护者 `ilblackdragon` 提交了一系列顶层设计 Issue，旨在彻底整治 CI 噪音、状态报告失真及历史 Bug 复发等工程顽疾。今日无新版本 Release 发布，但主分支代码体量与架构质量迎来显著提升。

---

### 2. 版本发布
**今日无新版本发布。**
注：目前有一个待合并的发布 PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 正在筹备中，预计将把 `ironclaw` 核心包从 0.24.0 升级至 0.29.1，并包含 `ironclaw_common` 的破坏性 API 变更。

---

### 3. 项目进展
今日项目达成了一个重要里程碑：**统一扩展运行时列车 B（Train B）完成代码合并**。这一系列 PR 实现了扩展生命周期的彻底重构，主要合并的 PR 包括：
*   [PR #6065](https://github.com/nearai/ironclaw/pull/6065): **P7b 扩展运行时定稿**（Runtime PR 9/9），完成了包清单移除与最终化。
*   [PR #6056](https://github.com/nearai/ironclaw/pull/6056): **P7a 状态枚举与延迟加载**，引入了多账户支持（ADR 0001）。
*   [PR #6012](https://github.com/nearai/ironclaw/pull/6012): **P5 投递协调器与 Slack/Telegram 出站**。
*   [PR #6007](https://github.com/nearai/ironclaw/pull/6007): **P4 通用通道入站路由与验证器**。
*   [PR #6008](https://github.com/nearai/ironclaw/pull/6008) & [PR #5996](https://github.com/nearai/ironclaw/pull/5996) & [PR #5995](https://github.com/nearai/ironclaw/pull/5995): 分别完成了 P3（认证引擎）、P2（适配器与调度切断）和 P1（Manifest v3）。

此外，在稳定性方面：
*   [PR #6089](https://github.com/nearai/ironclaw/pull/6089): 恢复了资源调度器在 libSQL 锁竞争下的表现，将 `BUSY`/`LOCKED` 状态分类为可重试的连接竞争。
*   [PR #5896](https://github.com/nearai/ironclaw/pull/5896): 修复了 WebUI 内存浏览隔离问题，防止跨用户读取 `MEMORY.md`。

---

### 4. 社区热点
今日讨论最热烈的问题集中在 **UI 状态反馈与扩展激活逻辑脱节**：
*   **[Issue #5948](https://github.com/nearai/ironclaw/issues/5948) [CLOSED]**: 助手误报 GitHub 扩展状态。当扩展仅处于 "INSTALLED" 状态时，助手却报告其已 "activated" 并列出所有可用功能。（5 条评论）
    *   *背后诉求*：用户对 Agent 感知系统真实状态的能力要求极高，"幻觉状态"会直接破坏信任。
*   **[Issue #5889](https://github.com/nearai/ironclaw/issues/5889) [CLOSED]**: "Load older messages" 按钮完全失效。（2 条评论）
    *   *背后诉求*：长对话场景下的上下文回溯能力是核心需求，UI 假死极大影响体验。
*   **[Issue #5640](https://github.com/nearai/ironclaw/issues/5640) [CLOSED]**: 集成测试框架缺少 `RecordingSecurityAuditSink` 双重检查。（2 条评论）
    *   *背后诉求*：开发者关注生产环境与测试环境的安全审计钩子对齐，防止安全检查在测试中被跳过。

---

### 5. Bug 与稳定性
今日报告了多个中等至高等严重程度的 Bug，部分已伴有修复 PR：
*   **[P1 严重] 状态缓存污染**: [Issue #6100](https://github.com/nearai/ironclaw/issues/6100) 在慢写入与后发消息竞争时，One-shot 上下文窗口缓存可能被陈旧快照覆盖。*当前状态：已发现，待修复。*
*   **[P2 严重] 假阳性连接测试**: [Issue #6099](https://github.com/nearai/ironclaw/issues/6099) `POST /llm/test-connection` 对不可达的端点和无效密钥返回 `ok: true`。*当前状态：已开 Issue。*
*   **[P2 严重] Slack 重连死锁**: [Issue #6092](https://github.com/nearai/ironclaw/issues/6092) Slack 重连后，对话永远卡在 "thinking..." 状态。*当前状态：今日架构重构可能已涵盖。*
*   **[P2 严重] 凭证撤销后静默失败**: [Issue #5884](https://github.com/nearai/ironclaw/issues/5884) 外部 Token 撤销后，例程任务开始执行但中途报告需要凭证。*已有 Fix PR: [PR #6095](https://github.com/nearai/ironclaw/pull/6095)*。
*   **[P2 严重] 消息时序倒序**: [Issue #6047](https://github.com/nearai/ironclaw/issues/6047) 两个任务消息快速发送时，UI 显示顺序倒置，导致 Agent 基于错误时间线创建触发器。*已有 Fix PR: [PR #6096](https://github.com/nearai/ironclaw/pull/6096)*。

---

### 6. 功能请求与路线图信号
维护者 `ilblackdragon` 今日集中提交了 6 个增强提案，构成了未来几周的项目路线图信号：
1.  **CI 信号恢复** ([Issue #6103](https://github.com/nearai/ironclaw/issues/6103)): 引入 `nextest` 重试与可见隔离区，解决 7 月份 70% 主分支推送因 5 个不稳定测试而失败的问题。
2.  **发布门禁管控** ([Issue #6106](https://github.com/nearai/ironclaw/issues/6106)): 要求在发布前执行启动冒烟测试 + 升级路径金丝雀测试，防止历史版本持久化状态导致启动崩溃循环。
3.  **错误保真度强制化** ([Issue #6108](https://github.com/nearai/ironclaw/issues/6108)): 消除通用错误和"谎报成功"（如 Slack 投递失败但报告成功），要求状态必须真实。
4.  **模型输入兼容性语料库** ([Issue #6107](https://github.com/nearai/ironclaw/issues/6107)): 在 CI 中重放真实工具调用参数形态，解决大写 HTTP 动词被拒等慢性解析 Bug。
5.  **24小时修复 SLA** ([Issue #6104](https://github.com/nearai/ironclaw/issues/6104)): 针对日常失败分类候选项，建立 24 小时修复或标记不修复的流程闭环。

**研判**：结合今日合并的 P1-P7 扩展运行时重构，下一版本（0.29.x 或 0.30.0）的核心主题将是 **"架构重构落地 + 工程质量/CI 强治理"**。

---

### 7. 用户反馈摘要
从近期的 Bug Bash 活动和 Issue 评论中，可以提炼出以下真实用户痛点：
*   **Slack 集成极其脆弱**: 用户频繁遭遇 Slack 断连、状态冲突（[Issue #6091](https://github.com/nearai/ironclaw/issues/6091)）、重连后死锁等问题。Slack 是核心的自动化通知渠道，其生命周期管理不稳定性是目前最大的用户槽点。
*   **错误提示"骗人"且不可查**: 用户多次反馈系统显示"一切正常"或"正在思考"，但实际后台已报错（如 [Issue #6050](https://github.com/nearai/ironclaw/issues/6050) 成功响应却显示历史加载失败横幅）。用户迫切需要 Agent 状态的透明化。
*   **多工具长链路执行易崩**: 用户在让 Agent 连续调用 30+ 次工具后，容易遇到 "model provider was unavailable" 通用报错（[Issue #5945](https://github.com/nearai/ironclaw/issues/5945)），说明在长上下文、高频调用的复杂场景下，系统资源与连接池管理仍需加强。

---

### 8. 待处理积压
以下重要 Issue/PR 仍处于 Open 状态，需要维护者关注推进：
*   **[PR #6090](https://github.com/nearai/ironclaw/pull/6090)**: Train B 的非破坏性压缩汇总 PR（XL体量），目前待合并，是今日多项 P 系列重构的最终落脚点。
*   **[PR #5970](https://github.com/nearai/ironclaw/pull/5970)**: MCP 注册框架骨架（XL体量），虽然不面向用户，但作为底层基础设施，积压可能影响后续 MCP 相关功能开发。
*   **[PR #6093](https://github.com/nearai/ironclaw/pull/6093)**: Reborn 自我验证回路，旨在提升 Agent 在 Benchmark 中的表现，目前待合并。
*   **[Issue #5460](https://github.com/nearai/ironclaw/issues/5460)**: 工作区记忆可见性隔离问题，虽然已关闭，但如果未彻底修复，涉及多租户数据隔离的安全隐患仍需保持警惕。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 2026-07-15 LobsterAI 项目动态日报。

### 1. 今日速览
- LobsterAI 项目今日整体处于“维护性清理”阶段，未发布新版本，活跃度主要体现在历史议题的集中处理上。
- 过去 24 小时内，项目无新增活跃 Issue，但集中关闭了 4 条长期挂起的遗留 Issue（均标记为 `[stale]`），进行了有效的看板瘦身。
- PR 端同样以清理为主，3 条更新均被关闭，涉及智能体核心循环中止逻辑及会话滚动体验的代码贡献暂未被采纳。
- 整体项目健康度平稳，维护团队正在通过自动化或批处理方式清理积压工作，但在新功能合并与社区反馈交互上略显静默。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目没有合并任何 PR，但关闭了 3 个 Pull Requests，整体向前推进主要体现在技术债的清理与外部贡献的筛选：
- **智能体核心逻辑控制**：由外部贡献者提交的 [PR #2331](https://github.com/netease-youdao/LobsterAI/pull/2331) 和 [PR #2330](https://github.com/netease-youdao/LobsterAI/pull/2330) 均被关闭。这两个 PR 试图为 OpenClaw 运行时回溯修复“工具循环中止逻辑”，虽然未被合并，但表明社区对该智能体在异常工具循环下的稳定性高度关注，官方可能已在内部采用其他方案解决。
- **前端交互体验优化**：[PR #2329](https://github.com/netease-youdao/LobsterAI/pull/2329) 被关闭。该 PR 旨在解决流式输出时强制自动滚动打断用户手动滚动的问题。此 PR 的关闭意味着该痛点尚存，维护者可能对该实现方案有不同意见或正在重构相关渲染层。

### 4. 社区热点
由于今日无新增 Issue 且关闭的 Issue 均为历史遗留项，社区热点主要集中在 4 月份集中反馈的几个核心缺陷上（均在昨日被关闭）：
- **[Issue #1386](https://github.com/netease-youdao/LobsterAI/issues/1386)**：长会话分享截图内容截断问题。该问题影响用户保存和分享 AI 推理成果，是典型的前端渲染与长图截取性能瓶颈，共获得 2 条评论互动。
- **[Issue #1389](https://github.com/netease-youdao/LobsterAI/issues/1389)**：英文模式下中文选项显示异常。这反映了项目在国际化（i18n）与本地化展示细节上存在遗漏。
*分析：这些被关闭的 Issue 反映出用户在多语言适配、长文本渲染及第三方组件连通性上的历史诉求，关闭操作有助于维护者聚焦当前版本的迭代。*

### 5. Bug 与稳定性
今日无新报告 Bug。根据被关闭的 Issue 记录，历史 Bug 主要涉及以下维度（按严重程度排列）：
1. **[严重] 邮箱配置连通性卡死**（[Issue #1388](https://github.com/netease-youdao/LobsterAI/issues/1388)）：点击测试连通性后前端无响应，且状态无法通过重启恢复，严重影响邮件相关功能的可用性。目前已被关闭，推测已在后续版本中静默修复或判定为环境问题。
2. **[中等] 定时任务更新偶现失效**（[Issue #1390](https://github.com/netease-youdao/LobsterAI/issues/1390)）：定时任务编辑后点击更新无响应，因属偶现问题且无复现步骤，后被标记为 stale 关闭。此类 Bug 通常是并发控制或状态管理隐患，需持续警惕。
3. **[中等] 长会话分享长图内容缺失**（[Issue #1386](https://github.com/netease-youdao/LobsterAI/issues/1386)）：影响数据完整性。
4. **[轻微] 多语言展示错位**（[Issue #1389](https://github.com/netease-youdao/LobsterAI/issues/1389)）：仅影响视觉体验。

### 6. 功能请求与路线图信号
- **流式输出手动接管**：虽然 [PR #2329](https://github.com/netease-youdao/LobsterAI/pull/2329) 被关闭，但其标题“prevent conversation scroll jumps”揭示了“流式输出期间尊重用户手动滚动”是一个明确的功能诉求信号。这很可能被纳入下一版本的前端渲染重构路线图中。
- **智能体异常熔断机制**：[PR #2330](https://github.com/netease-youdao/LobsterAI/pull/2330) 与 [PR #2331](https://github.com/netease-youdao/LobsterAI/pull/2331) 提出的“工具循环终止与中止边界处理”，暗示在复杂的混合并行工具调用中，LobsterAI 需要更强的熔断与异常兜底机制，这是 Agent 智能体走向生产环境必备的路线图方向。

### 7. 用户反馈摘要
从近期 Issues 的摘要中提炼出以下真实用户痛点：
- **多语言深度适配不足**：用户在使用英文环境时，依然遇到中文原生选项未被翻译的情况，说明项目在文案提取和多语言字典维护上存在死角。
- **长会话体验割裂**：AI 助手在处理长上下文时，虽然生成能力稳定，但衍生出“分享截图不全”、“页面滚动跳跃”等前端体验问题，用户在深度使用场景下体验受损。
- **外部集成健壮性弱**：邮箱配置测试卡死反馈，暴露出系统在处理网络 IO 阻塞或异步任务超时控制上存在缺陷，缺乏友好的错误兜底提示。

### 8. 待处理积压
今日的清理动作有效消化了积压，无新的长期未响应项产生。但提醒维护者关注以下两点潜在风险：
- **偶现问题复现难度大**：如 [Issue #1390](https://github.com/netise-youdao/LobsterAI/issues/1390) 的定时任务更新偶现失效，直接以 stale 关闭可能导致底层并发 Bug 遗留至后续大版本，建议在内部压力测试中加入相关并发场景覆盖。
- **被关闭 PR 的社区情绪**：btc69m979y-dotcom 连续提交了两个关于核心链路的修复 PR 但均被关闭，建议在 PR 留下关闭原因（如“已在内部修复”或“方案不合规”），以保持外部贡献者的积极性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这是一份基于 2026-07-15 数据窗口的 Moltis (AI 助理) 项目动态日报。

# 📊 Moltis 项目动态日报 (2026-07-15)

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内，Moltis 仓库处理了 **10 个 PR 更新（其中 7 个已合并/关闭）和 3 个 Issue 更新**，开发与维护节奏非常紧凑。
- **核心焦点：兼容性与鲁棒性大升级**。今日维护者集中合并了大量针对本地小模型（如 Gemma 4）、MCP 协议 OAuth 认证、以及浏览器自动化控制的修复，显著提升了系统在复杂边缘场景下的稳定性。
- **架构演进**：新增了 `chat.context_command` 等扩展性功能，项目正朝着更灵活、可深度定制的方向演进。
- **健康度评估**：无新版本发布（处于开发周期中），但代码合并率极高，Bug 响应迅速，项目处于极度健康的快速迭代期。

## 2. 版本发布
* **今日无新版本发布**。根据 PR 合并情况（涉及核心配置、Gateway 依赖调整等），推测项目正处于下一个大版本或里程碑版本的积累阶段。

## 3. 项目进展
今日有大量高质量代码合入主干，项目在底层解析、网关编译和工具生态上迈出了坚实的一步：
* **🛠️ 本地小模型兼容性攻坚（3个核心PR合并）**：
  * 合并 [PR #1098](https://github.com/moltis-org/moltis/pull/1098)：修复了小型本地模型在浏览器工具调用时发出显式 `null` 参数导致报错的问题。
  * 合并 [PR #1136](https://github.com/moltis-org/moltis/pull/1136)：修复了模型将标量工具参数（如 `true`）错误序列化为 JSON 字符串（`"true"`）导致预校验失败的问题，大幅增强了 Agent 调度鲁棒性。
* **🔐 MCP 协议与鉴权打通**：
  * 合并 [PR #1120](https://github.com/moltis-org/moltis/pull/1120)：修复了使用 Notion 和 Linear 作为远程 MCP Server 时的 OAuth `invalid_target` 失效问题，改用直接获取方式处理 `resource_metadata`。
* **🏗️ 底层架构与依赖优化**：
  * 合并 [PR #1139](https://github.com/moltis-org/moltis/pull/1139)：修复了 gateway 的 `metrics` 特性会强依赖拉取庞大 `matrix-sdk` 的打包缺陷。
  * 合并 [PR #1089](https://github.com/moltis-org/moltis/pull/1089)：在会话重载入大模型时，对持久化的工具执行结果进行了长度截断，有效控制了上下文成本。

## 4. 社区热点
今日社区焦点集中在**会话上下文控制**与**浏览器 Agent 自动化**的体验优化上：
* **🔥 [PR #1124](https://github.com/moltis-org/moltis/pull/1124) Add context command support for chat turns**：开发者提出在每个对话轮次前支持运行自定义命令并注入标准输出。这一设计极大满足了需要动态运行时上下文（如实时拉取数据库状态或系统环境变量）的高级部署需求，有望成为构建复杂智能体工作流的核心组件。
* **📸 [PR #1135](https://github.com/moltis-org/moltis/pull/1135) browser: optional auto-screenshot after each action**：提议在浏览器 Agent 执行状态更改操作后自动截图。这将让多模态大模型能够获得完整的“视觉时间线”反馈，是提升浏览器自动化成功率的关键特性。

## 5. Bug 与稳定性
今日修復了多个高危/影响核心流程的 Bug，部分仍处于待办状态：
1. **【严重 - 已修复】CalDAV 处理 panic** ([Issue 链接 - PR #1145](https://github.com/moltis-org/moltis/pull/1145))：远程 CalDAV 服务器返回非 ASCII 日期时间值时会导致底层 `normalise_datetime` 函数发生越界 Panic 崩溃。今日已合并修复。
2. **【高 - 待处理】MCP OAuth 鉴权失败** ([Issue #1119](https://github.com/moltis-org/moltis/issues/1119))：Notion 和 Linear 等使用 `resource_metadata` 的 MCP 服务器无法完成 OAuth 授权流。（*注：已有对应修复 [PR #1120](https://github.com/moltis-org/moltis/pull/1120) 今日已合并*）。
3. **【中 - 待验证】主会话无法删除/归档** ([Issue #1132](https://github.com/moltis-org/moltis/issues/1132))：用户报告 `"main"` session 卡死，无法执行删除或归档操作，目前仍然 Open，缺乏对应的修复 PR。

## 6. 功能请求与路线图信号
从现有的 Issues 和 PRs 可以清晰看出 Moltis 下一阶段的路线图方向：
* **完全拥抱本地化/轻量化 AI 生态**：从近期修复的大量针对 Gemma 4、oMLX 等模型的兼容性补丁可以看出，**“本地部署+本地小模型驱动”是 Moltis 的核心战略之一**。
* **接入前沿语音识别模型**：[Issue #1102](https://github.com/moltis-org/moltis/issues/1102) 提出接入 FunASR/SenseVoice 作为本地 STT（语音转文本）引擎，社区正在澄清相关许可证和能力边界，预计在近期排期。
* **精细化多渠道日志管理**：[PR #1093](https://github.com/moltis-org/moltis/pull/1093)（开放中）正在引入按账户、频道、用户级别的细粒度 `activity_log` 可见性设置（all/errors_only/off），为复杂的企业级群控场景提供支持。

## 7. 用户反馈摘要
* **痛点（本地模型用户）**：许多用户倾向于使用本地运行的小型开源模型来节约成本，但这些模型经常输出不规范的 JSON 结构（如字段缺失、类型错误）。开发者近日集中响应了这一痛点。
* **痛点（日历集成用户）**：部分重度依赖日程管理的用户受到 CalDAV 异常崩溃的困扰，非标准的日期格式直接导致他们的助理功能瘫痪。
* **诉求（自动化与可观测性）**：用户（和贡献者）不再满足于单一的文本交互，迫切希望通过“每步截图”、“上下文脚本注入”等功能，将 Moltis 打造为真正的“自主智能体”，而不仅仅是聊天机器人。

## 8. 待处理积压
以下重要议题创建已超过两周甚至一个月，今日虽有互动但尚未彻底解决，需提请维护者重点关注：
* ⚠️ **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132) 主会话无法删除/归档**：涉及基础的数据管理生命周期，体验影响较大，目前仍未有 Fix PR。
* ⏳ **[PR #1146](https://github.com/moltis-org/moltis/pull/1146) Add GPT-5.6 model support**：由资深贡献者提交，添加了 GPT-5.6 系列模型配置及 1.05M 上下文窗口支持，但今日状态被标记为 **Closed**（可能由于规范不符或暂缓支持），需关注后续是否有重新提交的计划。
* ⏳ **[PR #1093](https://github.com/moltis-org/moltis/pull/1093) 频道活动日志可见性设置**：对于多通道集成（如 Slack/Matrix 等）非常重要，已提交一个月仍在 Open 状态，需要 Reviewer 介入推进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是 2026-07-15 的 CoPaw (QwenPaw) 项目动态日报。报告基于过去 24 小时的 GitHub 开发者数据，重点聚焦项目健康度、版本迭代质量与社区生态反馈。

---

### 1. 今日速览
*   **高活跃度与高吞吐量**：过去 24 小时内，项目处理了 50 条 Issue 更新（新开/活跃 15 条，关闭 35 条）与 50 条 PR 更新（待合并 24 条，已合并/关闭 26 条），显示出维护团队在 v2.0.0 发布后进行了高强度的查缺补漏工作。
*   **发布紧急热修复**：针对 v2.0.0 暴露出的一系列沙箱与内存追踪问题，官方紧急推送了 `v2.0.0.post2` 版本。
*   **主攻方向明确**：今日的开发与讨论重心高度聚焦于 **Windows 沙箱机制解耦**、**上下文 scroll 压缩导致 API 报错**，以及 **Agent 自动记忆死循环**三大核心痛点。

### 2. 版本发布
*   **[v2.0.0.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2)**
    *   **更新亮点**：进一步细化了对敏感文件的读取权限控制，允许读取全局配置；增加了针对运行时、安装安全性的回归测试。
    *   **破坏性变更与迁移注意**：此版本主要修复 v2.0.0 带来的激进安全策略（如沙箱强制接管）。对于桌面版用户，升级此版本可缓解 Windows PowerShell 沙箱递归爆炸、Electron GPU 进程崩溃等严重阻塞性问题。

### 3. 项目进展
今日项目整体向后兼容性与系统稳定性迈出了一大步，核心进展如下：
*   **安全与沙箱治理**：修复了全局沙箱开关处于 `OFF` 状态时仍被滥用的旧状态复用问题（[PR #6122](https://github.com/agentscope-ai/QwenPaw/pull/6122)），并处理了离线模式下的沙箱路径校验（[PR #6109](https://github.com/agentscope-ai/QwenPaw/pull/6109)）。
*   **长上下文与 API 兼容性**：解决了长对话上下文压缩导致 DeepSeek API 400 报错的问题，确保工具的执行结果不会在压缩时与 Assistant 的调用信息断开（[PR #6108](https://github.com/agentscope-ai/QwenPaw/pull/6108)）。
*   **工程优化**：优化了运行时的 manifest 调度机制，防止全盘扫描耗尽文件描述符（FD）（[PR #6062](https://github.com/agentscope-ai/QwenPaw/pull/6062)）；加强了 CI 覆盖率底线（[PR #6103](https://github.com/agentscope-ai/QwenPaw/pull/6103)）。
*   **生态拓展**：合入了新的 Zalo Bot 渠道插件（[PR #6112](https://github.com/agentscope-ai/QwenPaw/pull/6112)）。

### 4. 社区热点
社区今日讨论最为热烈的话题均围绕 v2.0.0 的架构剧变引发的阵痛展开：
*   **社区任务征集与架构大讨论**：维护者 @cuiyuebing 发布的 Help Wanted 任务贴（[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)）产生了 64 条互动评论，社区贡献者踊跃认领任务。另外，关于借鉴 OpenClaw 架构提升 Agent 价值的元讨论（[Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578)）也持续活跃。
*   **沙箱体验灾难级反馈**：一名 Windows 用户发布了详尽的排查报告（[Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)），指出沙箱初始化导致 pwsh 进程疯狂繁殖吃满 20GB 内存且无法关闭。维护者已设立专门追踪贴（[Issue #6023](https://github.com/agentscope-ai/QwenPaw/issues/6023)）进行沙箱大修。

### 5. Bug 与稳定性
根据严重程度，今日报告并正在处理的 Bug 及回归问题如下：

*   **[P0 致命] Windows 沙箱递归爆炸与 NTFS ACL 污染（已提供 Fix）**
    *   **表现**：执行命令导致窗口递归弹出、内存爆炸；系统目录 ACE 被篡改导致其他 Electron 应用崩溃（[Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)，[Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829)）。
    *   **修复状态**：在 v2.0.0.post2 版本中提供规避，并在 PR #6122 中进一步修复。
*   **[P1 阻断] Agent 无限循环调用同一工具**
    *   **表现**：Agent 在单次对话中重复触发相同的 Tool Call，浪费大量 Token 后被系统强行终止（[Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)）。
    *   **修复状态**：针对注入合成消息导致的反馈循环，提交了自动记忆限制 PR（[PR #6120](https://github.com/agentscope-ai/QwenPaw/pull/6120)）。
*   **[P1 阻断] 桌面版自动记忆模块丢失崩溃**
    *   **表现**：打包后缺失模块导致 Glob 工具和 auto-memory 初始化即崩溃（[Issue #5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)，[Issue #6097](https://github.com/agentscope-ai/QwenPaw/issues/6097)）。
*   **[P2 体验] 记忆检索死循环**
    *   **表现**：v2.0 升级后每次提问陷入无休止的记忆检索（[Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)）。

### 6. 功能请求与路线图信号
结合社区诉求与现有 PR，以下功能有望在后续版本落地：
*   **智能体执行时打断/消息排队机制**：用户强烈希望能向正在内部迭代的 Agent 实时注入新指令或打断错误方向（[Issue #6087](https://github.com/agentscope-ai/QwenPaw/issues/6087)）。针对 v2.0.0.post1 导致的消息队列失效阻塞问题，已有修复在推进（[Issue #6088](https://github.com/agentscope-ai/QwenPaw/issues/6088)）。
*   **消息渠道精细化配置**：用户希望 IM 渠道（如钉钉、飞书）只发送 Tool Call 摘要或截断结果，而不是把长篇大论的结果直接刷屏（[Issue #5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)）。
*   **Windows 桌面 UI 自动化**：通过 UIA + Tauri 实现代理驱动 Windows 桌面 GUI 的强大功能正在审核中（[PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)），这将大幅提升本地助手的实用性。

### 7. 用户反馈摘要
*   **痛点：安全策略矫枉过正**：大量用户反馈 v2.0.0 的沙箱强制接管剥夺了用户控制权。Linux 用户无法运行 Electron CLI（如 Obsidian，因沙箱映射为 root 权限被拒，[Issue #5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)）；即便设为 `approval_level: OFF`，部分系统工具仍触发弹窗审批（[Issue #6020](https://github.com/agentscope-ai/QwenPaw/issues/6020)）。
*   **痛点：上下文压缩的破坏性**：重度依赖长对话（如使用 make-skill 功能、多轮代码分析）的用户反映，QwenPaw 按字符数而非 Token 数进行截断，且压缩时会撕裂上下文，导致 API 持续报错 400（[Issue #5950](https://github.com/agentscope-ai/QwenPaw/issues/5950)，[Issue #6077](https://github.com/agentscope-ai/QwenPaw/issues/6077)）。
*   **正面反馈**：用户认可 CoPaw 在中文桌面操作、多渠道（飞书/钉钉/IMessage）接入以及多 Agent 编排上的显著优势。

### 8. 待处理积压
*   **升级导致的工作区配置丢失**：`pip` 升级到 2.0.0.post1 后覆写了默认的 `agent.json`，导致 `active_model` 等关键字段重置丢失（[Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)），尚需更多用户数据验证修复方案。
*   **聊天列表映射丢失**：从 1.x 升级到 2.0.0 后，SQLite 中的 `chats` 表与 `conversation_history` 表映射断裂，导致 Web UI 打开历史记录报 500 错误（[Issue #5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)）。建议维护团队关注此数据迁移引发的回归问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw) 开源项目 2026-07-15 的动态日报。

### 1. 今日速览
ZeroClaw 项目今日保持高度活跃的开发与社区讨论状态，过去 24 小时内共处理了 **43 条 Issue 动态**（新开/活跃 31 条，关闭 12 条）以及 **50 条 PR 动态**（待合并 21 条，已合并/关闭 29 条）。今日虽然没有发布新的软件版本，但核心开发团队的重心明显聚焦于 **v0.8.3 里程碑的收尾工作**（#7320），以及 **SOP（标准操作程序）引擎的深度完善**。此外，社区在多租户安全隔离（RBAC）和长期记忆（Memory）架构重构上展现出强烈的诉求。

### 2. 版本发布
**本日无新版本发布（0 Releases）。**
根据里程碑追踪 Issue #7320 显示，v0.8.3 版本的所有计划实施工作及子追踪器均已关闭或移出该里程碑，目前仅剩最终的发布验证和发布流程，预计不久后即将释出正式版。

### 3. 项目进展
今日共有大量核心 PR 被合并/关闭，项目在 SOP（标准操作程序）执行引擎和外部集成方面取得了实质性飞跃：
*   **SOP 引擎全面盘活 (核心突破)**：合并了多个重磅 PR，包括引入带故障关闭超时和优先级门控的带外批准平面（#8304）、守护进程 SOP 维护循环（#8391）、实时 SOP 步骤执行器（#8399）、强类型步骤路由（#8430），以及将 Cron 触发器（#8400）和文件系统事件源（#8461）接入 SOP 事件总线。这标志着 ZeroClaw 的自动化流处理能力已趋于成熟。
*   **长期记忆与可观测性架构梳理**：关闭了关于仪表板内存状态修复和 Hindsight 记忆后端支持的 PR（#8992, #8993），推进了跨对话 ID 追踪在 OpenTelemetry 中的落地。
*   **开发者与运维体验优化**：修复了 `doctor` 命令无法持久化模型缓存的死锁问题（PR #9075），优化了多语言文档构建的可复现性（PR #9055），并更新了提供商名称（PR #9074）。

### 4. 社区热点
今日讨论最为热烈的话题集中在**多租户隔离与上下文管理**：
*   **多租户 RBAC 需求** ([Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)，10 条评论）：社区呼吁单个 ZeroClaw 实例应支持按发送者划分的角色访问控制，以隔离不同用户（客户、操作员、开发）的工作区和工具集，这是企业级部署的核心痛点。
*   **Slack 上下文水合** ([Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)，7 条评论）：讨论了在 Slack 线程中首次提及机器人时，自动通过 `conversations.replies` 回填历史记录以增加上下文连贯性，反映了用户对无缝 IM 集成的强烈需求。
*   **本地小模型防泄漏模式** ([Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)，5 条评论）：用户（如 Ollama 使用者）苦于"提示词臃肿"，强烈要求一个严格的本地解析器，防止内部系统指令泄露到可见输出中。

### 5. Bug 与稳定性
今日报告了数个高危且影响工作流的 Bug，部分严重程度极高：
*   **[S0 - 数据丢失/安全风险] 流水线绕过代理工具门控** ([Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)）：`execute_pipeline` 仅从全局配置授权子步骤，无视了特定代理的 `ToolAccessPolicy`，造成"困惑代理人"安全漏洞，目前状态为"进行中"。
*   **[S1 - 工作流受阻] Docker Compose 端口绑定失效** ([Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)）：容器构建运行成功，但网关在已发布的端口后仍然绑定在回环地址，导致 "Connection refused"。
*   **[S1 - 工作流受阻] OpenAI 格式工具调用错误导致空回复** ([Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)）：模型产生畸形 JSON 参数时，系统未经验证直接发送给 Provider，导致 400 错误且无回复。
*   **[S2 - 降级使用] Landlock 阻止 Shell 访问系统文件** ([Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)）：在 Fedora 环境下，启用 landlock 沙箱会导致 `/dev/null` 无法访问，Shell 工具全线失效。

### 6. 功能请求与路线图信号
从当前的 PR 与 Issue 趋势来看，下一阶段的路线图信号非常明确：
*   **记忆子系统重构**：RFC [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) 提出将"会话历史"与"Agent 策划的长期记忆"完全解耦，结合正在推进的 [Tracker #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)，这将是接下来的重头戏。
*   **深度 IoT / 智能家居集成**：PR [#8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994) 正在引入原生的 Home Assistant REST 工具，暗示项目正在向个人自动化与智能助手场景延伸。
*   **通道去抖动与流式输出优化**：PR [#8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440)（Telegram 去抖动）和 PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（Matrix 单消息进度草稿）表明团队在持续打磨多渠道消息同步的稳定性体验。

### 7. 用户反馈摘要
根据 Issue 评论区的反馈提炼：
*   **痛点 1：内存与配置令人困惑**。用户发现即便设置了 `uses_memory = false`，Cron 任务依然会读取记忆（[Issue #8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695)），这暴露了底层生命周期管理的耦合问题。
*   **痛点 2：文档与实际行为脱节**。在 SOP 功能上，用户抱怨现有的语法文档过于基础（[Issue #8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587)），且生产环境审计日志存在静默空转的 Bug（[Issue #6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689)），表明功能迭代快于文档与测试的覆盖。
*   **痛点 3：本地部署的不友好**。本地模型用户不仅要面对提示词泄露风险（#5287），还要面对 Provider 失败时包裹在通用重试信封中的模糊报错（[Issue #9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)），增加了排错难度。

### 8. 待处理积压
以下重要 Issue/PR 需要维护者重点关注或推进：
*   **Cron 任务前置门控** ([Issue #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)）：自 4 月提出，目前处于 `blocked` 状态。用户急需在 Agent 任务启动前执行本地脚本进行条件判断（如跳过执行），这对于资源管理至关重要。
*   **Web Dashboard 缺失 SOP 支持** ([Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)）：配置的 SOPs 无法在 Web 仪表板的聊天会话中被识别，严重阻塞了图形化管理的工作流。
*   **Line 频道 CI 覆盖遗漏** ([Issue #9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052)）：`channel-line` 未被包含在 `channels-full` 和 CI 覆盖范围内，这种集成级别的遗漏极易导致后续版本的隐性破坏。

</details>