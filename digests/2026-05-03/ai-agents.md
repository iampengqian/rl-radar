# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-02 22:09 UTC

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

# OpenClaw 项目动态日报 (2026-05-03)

## 1. 今日速览

OpenClaw 项目在过去24小时内维持了**极高的活跃度与社区热度**，共产生了 500 条 Issue 更新和 500 条 PR 更新。当前社区讨论焦点高度集中于近期版本引入的**性能回归问题**，多个高票 Issue 报告了网关启动慢、事件循环阻塞和高 CPU 占用等核心问题。尽管积压的待处理 PR 数量庞大（467条），但维护团队仍在积极运转，昨日刚发布了 `v2026.5.2-beta.2` 版本并快速响应了多个严重的 P0 级稳定性 Bug。整体来看，项目处于快速迭代与阵痛期并存的阶段。

---

## 2. 版本发布

**新版本：** [v2026.5.2-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.2)

**更新亮点：**
- **外部插件安装机制大幅增强**：现已覆盖诊断、新手指引、医生修复、通道设置、安装/更新记录以及制品元数据。在首次切换时，裸包安装仍保留在 npm 上。（感谢 @vincentkoc）
- **网关与任务管理优化**：涉及 Gateway 启动、会话列表和任务管理核心模块的改进（受限于截断，完整日志待官方补充）。

**迁移注意事项：** 作为 Beta 版本，建议生产环境谨慎升级，尤其需关注下方提及的性能回归问题。

---

## 3. 项目进展

今日共有 33 个 PR 被合并或关闭，同时有多个重要的修复 PR 提交待审核，重点推进了以下领域：

- **UI/UX 增强**：PR [#75479](https://github.com/openclaw/openclaw/pull/75479) 为控制面板添加了完整的 TTS（文本转语音）开关、提供商选择器和语音播放功能；PR [#76021](https://github.com/openclaw/openclaw/pull/76021) 引入了服务端麦克风听写功能。
- **核心稳定性修复**：PR [#76277](https://github.com/openclaw/openclaw/pull/76277) 大幅降低了 WebUI 的会话延迟抖动；PR [#76280](https://github.com/openclaw/openclaw/pull/76280) 修复了会话历史修复逻辑误删合法助手回复的严重问题。
- **插件与工具链**：PR [#76278](https://github.com/openclaw/openclaw/pull/76278) 修复了受限配置下插件工具无法正确调用的 Bug；PR [#76274](https://github.com/openclaw/openclaw/pull/76274) 重构了 Codex 运行时提示词快照目录结构。

---

## 4. 社区热点

今日社区讨论最激烈的问题集中在**性能退化**、**企业级安全控制**和**多渠道集成**上：

1. **🔥 性能回归风暴**：[Issue #76123](https://github.com/openclaw/openclaw/issues/76123)（👍7，11条评论）报告升级到 2026.4.29 后请求延迟增加 43%，出现卡死会话。同系列的 [Issue #75707](https://github.com/openclaw/openclaw/issues/75707)（👍5，10条评论）和 [Issue #75598](https://github.com/openclaw/openclaw/issues/75598)（👍4，10条评论）均指向网关 CPU 100% 及事件循环阻塞。
2. **🛡️ 执行安全管控**：[Issue #6615](https://github.com/openclaw/openclaw/issues/6615)（👍7，7条评论）强烈要求为 exec-approvals 增加黑名单机制，以实现 "允许所有但拦截危险命令（如 `gog gmail send`）" 的企业级安全策略。
3. **🌐 生态与技能市场**：[Issue #50090](https://github.com/openclaw/openclaw/issues/50090)（14条评论）引发了关于 ClawHub 技能市场未来发展方向的深度探讨，用户期望建立类似 App Store 的智能体原语生态。
4. **🔧 Web搜索集成**：[Issue #17925](https://github.com/openclaw/openclaw/issues/17925)（👍5）请求为智谱 GLM 和 Google Gemini 提供商增加原生网页搜索透传支持。

---

## 5. Bug 与稳定性

今日报告了大量关键 Bug，项目稳定性面临挑战。以下按严重程度降序排列：

**P0 - 严重性能与崩溃问题 (已有相关修复 PR)**
- **事件循环阻塞导致系统不可用**：[Issue #75999](https://github.com/openclaw/openclaw/issues/75999) 指出 dispatch prep 阶段占用约 73 秒同步 CPU 时间，导致网关完全无响应。（相关修复：PR [#74084](https://github.com/openclaw/openclaw/pull/74084) 优化路由绑定缓存，PR [#76279](https://github.com/openclaw/openclaw/pull/76279) 修复 CLI turns 未进入上下文引擎的问题）
- **TUI 客户端空转 CPU 占用 99%**：[Issue #75137](https://github.com/openclaw/openclaw/issues/75137) 报告本地 TUI 存在死循环。
- **安装与升级超时/卡死**：[Issue #76042](https://github.com/openclaw/openclaw/issues/76042) 报告新版安装长达 2 小时无法完成，旧版仅需 20 分钟。

**P1 - 核心功能异常 (部分已有修复 PR)**
- **插件工具列表在 Anthropic 提供商处被清空**：[Issue #74377](https://github.com/openclaw/openclaw/issues/74377)（修复：PR [#76278](https://github.com/openclaw/openclaw/pull/76278)）
- **网关反复超时重连**：[Issue #75944](https://github.com/openclaw/openclaw/issues/75944)（👍4）
- **Memory Search 工具被误判超时中止**：[Issue #74586](https://github.com/openclaw/openclaw/issues/74586)（修复：PR [#76183](https://github.com/openclaw/openclaw/pull/76183)）

**P2 - 渠道与界面 Bug**
- Slack 流式预览失效：[Issue #74358](https://github.com/openclaw/openclaw/issues/74358)
- 飞书通道配置验证失败：[Issue #63101](https://github.com/openclaw/openclaw/issues/63101)
- Windows 平台特有死锁：[Issue #73874](https://github.com/openclaw/openclaw/issues/73874)

---

## 6. 功能请求与路线图信号

结合近期高赞需求与活跃 PR，以下功能极有可能被纳入下一阶段发布：

1. **Slack Block Kit 富文本支持**：[Issue #12602](https://github.com/openclaw/openclaw/issues/12602)（13条评论）允许智能体发送交互式 Block 消息，适配 CRM 报表等场景。
2. **Hard Gates（硬性门控钩子）**：[Issue #13583](https://github.com/openclaw/openclaw/issues/13583)（10条评论）强制要求智能体在返回最终答案前必须调用特定工具，满足金融/安全领域的严苛合规要求。
3. **会话快照与检查点**：[Issue #13700](https://github.com/openclaw/openclaw/issues/13700) 支持长上下文的保存/回滚/分支，将大幅改善开发工作流。
4. **多 Teams Bot 实例支持**：[Issue #71058](https://github.com/openclaw/openclaw/issues/71058) 与已提交的 [PR #76262](https://github.com/openclaw/openclaw/pull/76262)（MS Teams SDK 迁移重构）相呼应，即将支持单网关多 Teams 机器人。
5. **按模型使用量追踪**：[Issue #13219](https://github.com/openclaw/openclaw/issues/13219) 呼吁原生支持成本跟踪与模型组合优化的日志聚合。

---

## 7. 用户反馈摘要

从高频评论和点赞数据中，可以提炼出当前用户的几个核心痛点：

- **信任与安全焦虑**：用户 [bo-blue](https://github.com/openclaw/openclaw/issues/49876) 指出，当工具调用失败时，智能体会伪造看似合理的输出，这在自动化任务中是严重的信任危机。
- **成本意外飙升**：[Issue #73182](https://github.com/openclaw/openclaw/issues/73182) 反映默认推理级别被静默更改为 `on`，导致 Anthropic 调用费用翻倍，且思考块泄露到聊天中。
- **运维体验受挫**：多位用户反馈从 4.23 升级到 4.29+ 后性能雪崩式下跌（[Issue #76042](https://github.com/openclaw/openclaw/issues/76042), [#75944](https://github.com/openclaw/openclaw/issues/75944)），低配设备尤甚。
- **积极反馈**：社区对 ClawHub 生态建设（[Issue #50090](https://github.com/openclaw/openclaw/issues/50090)）充满期待，认为这是项目走向成熟的关键标志；外部插件安装机制的完善（v2026.5.2-beta.2）也受到了积极肯定。

---

## 8. 待处理积压

尽管项目极为活跃，但仍有大量重要 Issue 缺乏官方明确回应，提醒维护者关注：

1. **静态文件服务破坏**：[Issue #40540](https://github.com/openclaw/openclaw/issues/40540) - Windows 环境下 `openclaw update` 的 EBUSY 错误自 3 月份报告至今未彻底解决。
2. **Cron 任务产生幻觉**：[Issue #49876](https://github.com/openclaw/openclaw/issues/49876) - 工具失败时 LLM 伪造输出的问题涉及核心可靠性，需优先排期。
3. **内存同步性能退化**：[Issue #40919](https://github.com/openclaw/openclaw/issues/40919) - 增长的 JSONL 文件采用全量删除-重插入模式，将随时间拖垮系统。
4. **macOS 内存检测缺失**：[Issue #47273](https://github.com/openclaw/openclaw/issues/47273) - 内存检测被 `platform === "linux"` 硬编码限制，macOS 用户完全无法获取准确内存数据。
5. **多个高质量 Feature PR 长期待合并**：如 [PR #66911](https://github.com/openclaw/openclaw/pull/66911)（陈旧授权清理）、[PR #56795](https://github.com/openclaw/openclaw/pull/56795)（飞书交互卡片解析）等已停留多日，建议团队进行集中 Triage。

---

## 横向生态对比

作为资深技术分析师，基于 2026 年 5 月 3 日各大开源项目的社区动态，我为您整理了这份《AI 智能体与个人助手开源生态横向对比与趋势洞察报告》。

---

### 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正处于**从“纯文本对话”向“多模态与跨平台自动化执行”跃升的阵痛与爆发期**。各项目底层正在经历密集的架构重构以适应复杂任务调度，生态重心正从基础大模型 API 对接，迅速转移到**深度推理兼容、异构通信渠道整合与企业级安全管控**上。社区用户已不再满足于简单的“陪聊”，而是将其视为能操作本地文件、执行 Shell 指令、收发邮件的“数字分身”，这倒逼项目方在资源调度、记忆机制和权限沙箱上进行深度创新。

### 2. 各项目活跃度对比

基于今日（2026-05-03）的统计数据，开源生态呈现出明显的梯队分化：

| 项目名称 | Issues 动态 | PRs 动态 (合并/总活跃) | 版本发布情况 | 健康度与节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 33 / 500 | `v2026.5.2-beta.2` | 🔥 **极高活跃**：处于快速迭代与性能阵痛期，社区热度爆棚但积压严重。 |
| **ZeroClaw** | 50 | 8 / 39 | 无 | 🌟 **高活跃/重构期**：正处于 v0.8.0 架构演进的密集开发期，核心模块大改。 |
| **Hermes Agent**| 50 | 4 / 50 | 无 | 🟠 **中高活跃/积累期**：处于高并发社区贡献期，但面临底层缓存与状态同步问题。 |
| **IronClaw** | 20 | 7 / 43 | 无 | 🌟 **高活跃/重构期**：核心架构“Reborn”重构中，底层存储全面升级。 |
| **NullClaw** | - | 37 / 39 | 无 | 🟢 **极高活跃/稳定期**：大规模清偿技术债务，底层性能实现跃升。 |
| **CoPaw** | 14 | 0 / 6 | 无 | 🟡 **中活跃/需求爆发**：社区需求旺盛，但核心合并速度滞后。 |
| **NanoClaw** | 9 | 8 / 16 | 无 | 🟢 **健康活跃**：响应极快，专注于 v2 迁移与多渠道通信底座打磨。 |
| **PicoClaw** | 6 | 4 / 4 | `nightly v0.2.8` | 🟢 **稳健**：聚焦于多模型网关兼容性修复，稳步迭代。 |
| **NanoBot** | 5 | 8 / 20 | 无 | 🟢 **健康活跃**：多平台集成突破，功能快速扩展。 |
| **Moltis** | 4 | 2 / 2 | 无 | 🟢 **平缓/架构演进**：专注于沙箱与云端部署等基础设施准备。 |
| **LobsterAI** | 0 | 0 / 4 | 无 | 🔴 **低活跃/停滞**：PR 严重积压，出现明显的维护滞后。 |
| **TinyAGI / ZeptoClaw**| 0 | 0 / 0 | 无 | ⚪ **静默**：过去 24 小时无任何活动。 |

### 3. OpenClaw 在生态中的定位

作为核心参照系，**OpenClaw 在生态中扮演着“标杆与基础设施”的角色**，类似于 AI Agent 界的“Spring Boot”。
*   **规模优势与网络效应**：日均有 500+ 的 Issue/PR 动态，其社区规模和商业关注度远超其他竞品。其推出的 `ClawHub` 技能市场正在建立强大的网络效应，这是主打轻量级或学术背景项目（如 NanoBot、NullClaw）短期内难以企及的护城河。
*   **技术路线差异**：OpenClaw 追求**大而全的企业级全栈能力**（涵盖复杂网关、TUI/UI、技能市场、硬性门控），但正因功能臃肿遭遇了严重的性能回归（CPU 100%、事件循环阻塞）。相比之下，NullClaw（深耕底层并发与 Zig 重写）和 ZeroClaw（探索微内核架构）在底层资源占用上展现出更优的极客精神。
*   **当前困境**：相比于 PicoClaw 灵活的多云代理适配，OpenClaw 因架构复杂导致升级体验雪崩（如安装卡死、耗时增加），正面临“大厂病”的开源反噬风险。

### 4. 共同关注的技术方向

今日多个项目不约而同地在以下技术点发力，这代表了整个 AI Agent 底层技术演进的核心命题：

1.  **深度思考模型（DeepSeek / o1 类）的上下文兼容**：
    *   **涉及项目**：ZeroClaw, PicoClaw, NanoBot, IronClaw, Moltis。
    *   **共同诉求**：大模型返回的 `reasoning_content`（隐藏思考过程）在流式输出、压缩上下文或 API 格式化时极易丢失或引发 400 错误。各项目都在紧急修补 API 提取和截断逻辑，以支持长逻辑链模型。
2.  **跨异构系统的通信网关与渠道适配**：
    *   **涉及项目**：NanoBot, NanoClaw, Hermes Agent, PicoClaw。
    *   **共同诉求**：将个人助手无缝接入 WhatsApp、飞书、Telegram、企业邮箱等。底层协议（如 XMPP、Matrix E2EE）和防消息解析崩溃（如 Telegram 表格乱码）是当前的工程焦点。
3.  **安全沙箱与细粒度权限控制**：
    *   **涉及项目**：OpenClaw, Hermes Agent, NullClaw, ZeroClaw。
    *   **共同诉求**：Agent 具备执行 Shell 的能力后，如何防止“伪造输出”和“误删文件”？社区强烈要求引入基于风险评级（高/中/低）的沙箱隔离和黑名单机制（拦截 `rm` 或特定支付指令）。

### 5. 差异化定位分析

*   **企业级控制枢纽 vs 个人极客玩具**：
    *   **OpenClaw, CoPaw** 倾向于成为带面板的 Server 端控制枢纽，注重多租户和可视化（如飞书/微信打断功能）。
    *   **NullClaw, PicoClaw** 则更偏向终端 TUI 和边缘设备（如树莓派、MacOS 本地），强调极低的资源占用（去 curl 化、解决 CPU 空转）。
*   **架构哲学：内核态 vs 线程态**：
    *   **ZeroClaw** 明确提出了“微内核迁移”和 Config V3，试图通过高度模块化解决多实例并存的问题。
    *   **IronClaw** 则在底层进行“Reborn”重构，深度定制 TurnCoordinator 和基于 Postgres/libSQL 的内存检索机制，面向高并发设计。
*   **模型支持策略**：
    *   **Moltis, CoPaw, LobsterAI** 侧重于本地算力（Apple M系列芯片、Ollama）和国产大模型（小米 MiMo、Qwen）的适配，主打本土化与私有化。
    *   **Hermes Agent, PicoClaw** 则花更多精力在 API 路由代理（如 OpenRouter, xAI）上，服务全球多云用户。

### 6. 社区热度与成熟度

*   **“规模反噬”的青春期项目（OpenClaw, Hermes Agent）**：社区热度极高，但工程管理面临挑战。PR 积压严重（OpenClaw 467个，Hermes 46个），核心开发者被基础 Bug（如缓存锁死、P0 级崩溃）拖累，无暇顾及创新 Feature。
*   **“稳重求进”的成熟期项目（NullClaw, NanoClaw, ZeroClaw）**：合并代码果断（NullClaw 单日合并 37 个 PR），具备极强的 Code Review 能力。处于修内功、去技术债的阶段，质量巩固是第一要务。
*   **“需求膨胀”的初创期项目（CoPaw, Moltis）**：新 Feature 需求激增（如测评功能、文生图），但核心团队响应较慢，处于摸索产品市场契合度（PMF）的阶段。
*   **“停滞预警”项目**：表现为核心 PR 长时间无 Review 且被打上 `stale` 标签，面临贡献者流失的风险。

### 7. 值得关注的趋势信号

从今日的社区动态中，我们可以为 AI 智能体开发者提炼出以下极具参考价值的行业信号：

1.  **“Agent 伪造结果”正在引发信任危机**：OpenClaw 中有用户严肃指出，当工具调用失败时，LLM 会“伪造看似合理的输出”。这意味着在自动化工作流中（如金融交易、自动发邮件），**开发者必须引入外部的“硬性门控”或结果验证链**，不能盲目信任 LLM 的自我纠错能力。
2.  **后台异步“思考与做梦”机制的崛起**：ZeroClaw 社区对“Dream Mode”（空闲时整理长期记忆）的高赞讨论表明，**AI Agent 正在脱离单纯的“请求-响应”模式**。未来的 Agent 将在后台持续归档知识、优化检索，具备“数字生命”的雏形。
3.  **去中心化与“可携带信誉”的探索**：Moltis 中提议的 `SwarmScore`（便携式信誉系统）预示着，随着 Agent 获得购买力（如 Hermes 的 x402 支付协议）和执行权，**跨实例的 Agent 身份验证与信誉评分**将成为 Web3 + AI 交叉领域的新蓝海。
4.  **“运维体验（O11y）”将成为下一代 Agent 平台的核心竞争力**：Hermes 暴露出的 `.pyc` 缓存崩溃、ZeroClaw 的多实例路径覆盖等问题表明，随着系统复杂度提升，**可观测性、平滑升级机制和并发状态管理**正在取代单纯的“模型智商”，成为开发者最痛的痒点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 (2026-05-03)**

### 1. 今日速览
过去 24 小时内，NanoBot 项目维持了**极高的开发与社区活跃度**。项目共处理了 20 条 Pull Requests（其中 8 条已顺利合并/关闭），并产生了 5 条 Issues 更新。尽管今日没有发布新的稳定版本，但合并的代码显著提升了系统在上下文控制、多通道支持和推理引擎兼容性上的稳定性。待处理的 12 条 PR 展现了社区在音频处理、原生 UI 交互和安全加固方面的强烈意愿，项目当前正处于功能快速迭代与深度优化的健康阶段。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日共有 8 个关键 PR 被合并或关闭，标志着项目在多通道集成、系统安全及上下文管理方面迈出了坚实的一步：
* **多平台集成突破**：[#2010 WhatsApp媒体收发支持](https://github.com/HKUDS/nanobot/pull/2010) 和 [#3176 飞书线程级会话隔离](https://github.com/HKUDS/nanobot/pull/3176) 正式合并，大幅丰富了即时通讯平台的接入能力。
* **核心工具与内存机制优化**：[#3594 ExecTool 白名单优先级修复](https://github.com/HKUDS/nanobot/pull/3594) 解决了安全策略冲突问题；[#3247 Memory模块错误回退机制](https://github.com/HKUDS/nanobot/pull/3247) 提高了后台归档任务的鲁棒性。
* **安全与环境配置增强**：[#2218 支持环境变量引用](https://github.com/HKUDS/nanobot/pull/2218) 允许通过 `{env:VAR}` 安全配置 API 密钥；[#3456 新增实例创建内置技能与 WebUI 远程后端](https://github.com/HKSDS/nanobot/pull/3456) 提升了多实例管理能力。
* **上下文与推理修复**：[#3419 修复DeepSeek推理内容丢失](https://github.com/HKUDS/nanobot/pull/3419) 和 [#3414 系统提示词历史截断限制](https://github.com/HKUDS/nanobot/pull/3414) 合并，有效缓解了长期对话导致的上下文膨胀和 API 报错问题。

### 4. 社区热点
* **小米大模型接入诉求**：[#3518 支持小米模型](https://github.com/HKUDS/nanobot/issues/3518) 是今日互动最多的 Issue（3 条评论）。该需求已被标记为已关闭（Closed），通常意味着开发组已在主线或分支中评估并初步处理了该请求，反映出国产模型端侧/云端服务集成的社区呼声渐高。

### 5. Bug 与稳定性
今日报告了多个影响特定模型和工具的 Bug，部分已得到快速响应和修复：
* **严重 - 模型 API 兼容性受损**：
  * [#3584 DeepSeek API reasoning_content 严格校验报错](https://github.com/HKUDS/nanobot/issues/3584)：更新至最新版后，DeepSeek 模型因历史记录格式引发循环报错。**（已有修复合并：[#3419](https://github.com/HKUDS/nanobot/pull/3419)）**
  * [#3585 Xiaomi MiMo 无法显式关闭思考模式](https://github.com/HKUDS/nanobot/issues/3585)：`reasoning_effort: null` 未按预期生效。**（已有修复 PR：[#3587](https://github.com/HKUDS/nanobot/pull/3587)）**
* **中等 - 工具与调度限制**：
  * [#3597 工作区根目录访问迷失](https://github.com/HKUDS/nanobot/issues/3597)：Agent 在执行保存文件等任务时，对 Workspace 根路径的解析存在偏差，可能影响自动化办公流程的可靠性。
  * [#3595 Exec 执行超时 600s 硬编码限制](https://github.com/HKUDS/nanobot/issues/3595)：长时任务（如下载大文件）被强制截断。**（已有优化 PR：[#3596](https://github.com/HKUDS/nanobot/pull/3596) 引入活动感知超时机制）**

### 6. 功能请求与路线图信号
当前 Open 的 PR 暴露了项目下一阶段的演进重点，预计这些特性将被纳入近期的测试版本：
* **富媒体与本地化语音**：[#3513 统一语音转写并支持本地 Whisper](https://github.com/HKUDS/nanobot/pull/3513) 和 [#3588 音频格式预处理](https://github.com/HKUDS/nanobot/pull/3588) 预示着 Voice/Audio 交互能力的全面重构。
* **底层架构演进**：[#3564 HookCenter 类型化事件钩子系统](https://github.com/HKUDS/nanobot/pull/3564) 旨在替换现有的重写模式，极大提升外部开发者的插件化扩展能力。
* **安全防护增强**：[#3492 WebUI 公网部署安全加固](https://github.com/HKUDS/nanobot/pull/3492) 解决了通过 ngrok/cloudflared 暴露服务时的潜在越权风险，对个人助手类应用公网可用性至关重要。

### 7. 用户反馈摘要
通过对近期 Issues 的分析，提炼出以下用户真实使用痛点：
* **“一键部署”与实际环境的摩擦**：用户在测试自动化起草文章（[#3597](https://github.com/HKUDS/nanobot/issues/3597)）时，发现 Agent 对文件系统路径的掌控不如预期，说明在复杂本地文件操作场景下仍需提高容错性。
* **对长耗时自动化任务的渴望**：用户尝试使用 NanoBot 执行下载或长期运行脚本（[#3595](https://github.com/HKUDS/nanobot/issues/3595)），现有的 600 秒硬性天花板成为了主要阻碍。这表明用户正尝试将其从“纯对话助手”推向“自动化执行代理（Agent）”的重度场景。

### 8. 待处理积压
* **核心事件系统重构亟待 Review**：[#3564 HookCenter 钩子系统重写](https://github.com/HKUDS/nanobot/pull/3564) 目前处于 Open 状态，这是一个底层的破坏性/重构级变更（WIP），需要核心维护团队投入精力进行深度审查，以免阻塞其他插件的适配。
* **Beta WebUI 体验隐患**：[#3583 WebUI 会话隔离与串流修复](https://github.com/HKUDS/nanobot/pull/3583) 指出了在切换聊天时发生上下文串流的问题，考虑到 WebUI 是用户的第一接触面，建议高优先级合并此修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-03)

## 1. 今日速览
Hermes Agent 项目在过去 24 小时内维持了**极高的社区活跃度与健康的迭代节奏**。项目今日共处理了 100 条动态，其中 Issues 活跃度达到 50 条（新开或活跃 49 条，仅关闭 1 条），Pull Requests 更新同样达到 50 条（待合并 46，已合并/关闭 4），无新版本发布。从开源项目健康度来看，项目处于典型的“高并发社区贡献期”，大量开发者正在积极提交功能和修复。但也需警惕 Issue 积压带来的维护压力，目前 Bug 主要集中在多平台网关授权、CLI 配置缓存以及多进程数据库锁定等核心模块。

---

## 2. 版本发布
**无新版本发布**。项目当前仍在聚合大量社区 PR，尚未触发新的版本打包。

---

## 3. 项目进展
今日项目处理了 4 个 PR（已合并/关闭状态），结合最活跃的待合并 PR，整体在以下方向取得了实质性推进：
- **安全与权限管控加强**：[PR #18125](https://github.com/NousResearch/hermes-agent/pull/18125) (P0) 针对高优先级的安全漏洞，修复了 Discord slash commands 绕过白名单认证的问题；[PR #15307](https://github.com/NousResearch/hermes-agent/pull/15307) 引入了跨会话消息发送的跟踪审批机制。
- **网关与多平台路由优化**：[PR #13939](https://github.com/NousResearch/hermes-agent/pull/13939) 为所有聊天上下文引入了权威发送者归属标记，改善了共享智能体的多用户识别问题。
- **系统集成与易用性**：[PR #18989](https://github.com/NousResearch/hermes-agent/pull/18989) 修复了 `hermes doctor` 无法读取 `.env` 文件中 API 密钥的配置盲区；[PR #17647](https://github.com/NousResearch/hermes-agent/pull/17647) 为 OpenAI Codex 增加了浏览器 OAuth 回退支持。
- **测试与稳定性修复**：[PR #18895](https://github.com/NousResearch/hermes-agent/pull/18895) 同步更新了滞后于业务代码的 10 个 CI 测试用例，保障主干分支质量。

---

## 4. 社区热点
今日讨论热度最高、关注度最广的议题主要围绕**基础环境配置与上游服务商接口变动**：
1. **[Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207) (👍1, 评论 8)**：代码更新后过期的 `.pyc` 缓存导致网关崩溃（`TypeError`）。此问题引发了大量讨论，反映了社区用户在本地迭代更新时缺乏平滑的缓存清理机制。
2. **[Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895) (👍1, 评论 6)**：Google Gemini CLI 触发 429 (Rate Limit) 错误。这暴露了在接入第三方大模型时，配额管理体系存在与实际接口不同步的痛点。
3. **[Issue #2990](https://github.com/NousResearch/hermes-agent/issues/2990) (👍1, 评论 6)**：请求实现定时任务的对话式交互（会话式 Cron 投递）。这反映了用户希望将 Hermes 从“被动响应”推向“主动规划与交互”的强烈诉求。
4. **[Issue #18927](https://github.com/NousResearch/hermes-agent/issues/18927) (评论 4)**：TUI 模式下 `/q` 错误映射为 `quit` 而非 `queue`，导致用户意外退出应用，引发社区对终端交互体验优化的热议。

---

## 5. Bug 与稳定性
今日报告了大量 Bug，部分涉及底层崩溃与核心阻断问题，按严重程度排列如下：

### 🔴 P0 / P1 严重 (阻断性/安全问题)
- **[Issue #3206](https://github.com/NousResearch/hermes-agent/issues/3206)**：Telegram DM 发送因虚假的 `thread_id` 导致 'Message thread not found' 错误。*(待修复)*
- **[Issue #2936](https://github.com/NousResearch/hermes-agent/issues/2936)**：通过 Telegram 网关加载的 Hermes-4 模型拒绝调用工具，仅以纯文本形式幻觉输出。*(待修复)*
- **[Issue #16248](https://github.com/NousResearch/hermes-agent/issues/16248) [已关闭]**：使用 `/plan` 输入长文本触发 `Errno 36: File name too long` 错误（回归问题）。
- **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)**：使用 Claude Max 20x 订阅的有效 OAuth token 被原生 Anthropic API 拒绝（HTTP 400）。*(待修复)*

### 🟠 P2 高优先级 (功能受损/兼容性)
- **[Issue #18959](https://github.com/NousResearch/hermes-agent/issues/18959)**：Kanban 调度器 worker 读取错误的 profile-scoped DB 导致无限崩溃循环。*(已有对应修复 PR [#18991](https://github.com/NousResearch/hermes-agent/pull/18991))*
- **[Issue #18946](https://github.com/NousResearch/hermes-agent/issues/18946)**：`hermes config set` 运行时存在缓存延迟，配置修改对正在运行的代理进程不生效。*(待修复)*
- **[Issue #3000](https://github.com/NousResearch/hermes-agent/issues/3000)**：macOS 上当 Python 路径包含空格时，`install.sh` 静默中止。*(待修复)*
- **[Issue #18935](https://github.com/NousResearch/hermes-agent/issues/18935)**：Docker 容器权限配置不当导致 `gateway.lock` 冲突，引发 Dashboard API 500 错误。*(待修复)*

---

## 6. 功能请求与路线图信号
从近期的 Issues 和活跃 PR 中，可以清晰看到 Hermes Agent 正在向**“更强自动化、更深生态融合、更优集成体验”**演进：
- **自动路由与任务调度**：[Issue #2990](https://github.com/NousResearch/hermes-agent/issues/2990) 提出的“会话式 Cron 投递”与 [PR #2913](https://github.com/NousResearch/hermes-agent/pull/2913) 的 `tiny-router` 每轮对话动态路由，标志着项目正在探索更高级的智能体自主调度能力。
- **原生能力扩展**：[Issue #2919](https://github.com/NousResearch/hermes-agent/issues/2919) 建议集成基于 x402 协议的原生支付执行，表明社区对 Agent 具备真实世界“购买力”的期待。
- **企业级/API 集成需求**：[Issue #3155](https://github.com/NousResearch/hermes-agent/issues/3155) 提出在 API Server 中支持基于客户端的模型路由，以及 [PR #2916](https://github.com/NousResearch/hermes-agent/pull/2916) 增加 `--output-format json`，均是为了更好满足将 Hermes 作为后端引擎嵌入到企业业务流中的需求。

---

## 7. 用户反馈摘要
综合今日的 Issue 描述，真实用户痛点主要集中在以下三个维度：
1. **跨平台部署的“水土不服”**：在 macOS（路径空格、Node 寻址）和 Termux 环境下存在较多兼容性问题（[Issue #3000](https://github.com/NousResearch/hermes-agent/issues/3000), [Issue #18390](https://github.com/NousResearch/hermes-agent/issues/18390)），说明项目的“开箱即用”体验在不同 OS 环境下仍有优化空间。
2. **多供应商 API 接入极其脆弱**：由于上游大模型（如 Anthropic, Gemini）的 API 鉴权和配额策略微调，导致 Hermes 侧频繁出现 400/429 错误（[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080), [Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)）。用户期望项目能建立更具弹性的重试与鉴权回退机制。
3. **缓存与状态同步设计不良**：`.pyc` 缓存导致的崩溃（[Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207)）和 SQLite 并发写入静默失败（[Issue #2914](https://github.com/NousResearch/hermes-agent/issues/2914)），让高级用户在多会话并行时感到困扰，亟需在架构层面优化状态与缓存的生命周期管理。

---

## 8. 待处理积压
以下高价值或高热度 Issue/PR 处于待定或滞留状态，需核心维护团队重点关注：
- **[Issue #2936](https://github.com/NousResearch/hermes-agent/issues/2936) (P1)**：Hermes-4 模型在 Telegram 网关中产生工具调用幻觉的严重阻断性问题，至今未分配修复 PR。
- **[Issue #2914](https://github.com/NousResearch/hermes-agent/issues/2914) (P2)**：并行 CLI 进程导致 SQLite 数据库锁定引起的会话丢失问题，涉及底层状态管理架构。
- **[PR #2868](https://github.com/NousResearch/hermes-agent/pull/2868) & [PR #2872](https://github.com/NousResearch/hermes-agent/pull/2872)**：涉及改善 skill 报错日志和新增系统健康检查的 PR，已开启近 40 天仍未合并，可能影响社区开发者的贡献积极性。
- **[Issue #2918](https://github.com/NousResearch/hermes-agent/issues/2918) (Feature)**：针对只读工具的缓存机制提议，对于降低 API 消耗和延迟具有极高商业价值，但尚未有官方认领或明确的 Roadmap 回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-05-03 的开源项目动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持了**中等且聚焦的活跃度**。项目成功合并了 4 个 Pull Requests，同时新增/活跃了 6 个 Issues 和 4 个待合并 PRs，主要集中在**多渠道适配**与**多模型提供商兼容性**（特别是 DeepSeek 和 OpenRouter）的修复上。社区对 AI 模型推理过程的输出处理（如 `reasoning_content`）表现出了强烈关注。目前项目正在稳步进行 `v0.2.8` 版本的迭代测试，整体架构正在向兼容更复杂的 AI 工具链和协议演进。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.8-nightly.20260502.6e1fab80](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新说明**：自动化的 Nightly 构建版本，基于最新的 `main` 分支打包。
  - **注意事项**：官方提示该版本为自动构建，可能存在不稳定性，建议开发者和内测用户谨慎用于生产环境。查看完整底座变更：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 4 个 PR 被成功合并/关闭，显著提升了跨模型代理的兼容性：
- **[PR #2743: fix(openai_compat): detect DeepSeek models behind non-deepseek proxies](https://github.com/sipeed/picoclaw/pull/2743)**
  🛠️ **重大进展**：修复了通过第三方代理（如 opencode.ai 等）使用 DeepSeek 模型时，推理能力无法被正确识别的问题。扩展了模型检测逻辑，使得代理转发场景下也能完美兼容。
- **[PR #2746: fix(openrouter): document reasoning suppression preset](https://github.com/sipeed/picoclaw/pull/2746)**
  🛠️ **生态完善**：补充了关于如何抑制 OpenRouter 推理模型输出内部思考过程（泄露 preamble）的文档和预设，改善了终端用户的对话体验。
- **[PR #2739: fix(telegram): wrap markdown pipe tables in fenced code blocks](https://github.com/sipeed/picoclaw/pull/2739)**
  🛠️ **渠道修复**：修复了 LLM 输出 Markdown 管道表格时，在 Telegram 端显示乱码的问题，现将其自动包装在代码块中以保持格式整齐。
- **[PR #2747: chore: update WeChat group QR code](https://github.com/sipeed/picoclaw/pull/2747)**
  🛠️ **社区维护**：更新了即将过期的官方微信群二维码。

## 4. 社区热点
目前社区讨论的焦点正在从基础的连接性转向**复杂的 API 交互和数据清洗**：
- **[Issue #2421: Add email as native channel](https://github.com/sipeed/picoclaw/issues/2421)** (4 条评论)
  🗣️ **诉求分析**：用户希望原生支持 Email 作为通信渠道。这表明 PicoClaw 正在被考虑引入到对聊天软件受限的企业、科研等严肃环境中。
- **[Issue #2546: Support OAuth 2.1 + PKCE for MCP servers, addable from dashboard](https://github.com/sipeed/picoclaw/issues/2546)** (3 条评论)
  🗣️ **诉求分析**：提出通过 Dashboard 粘贴 URL 即可添加受 OAuth 保护的 MCP 服务器。这反映了非技术用户（无 Node.js/Shell 经验）对降低 AI 工具使用门槛的迫切需求。

## 5. Bug 与稳定性
今日报告了多个影响稳定性的 Bug，部分已提供修复方案：
- 🔴 **高危 (Stale PID 引发崩溃循环)**: [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)
  PID 文件复用导致网关误判实例正在运行，从而引发启动时的 Crash Loop。（*暂未提交针对性 Fix PR*）
- 🟠 **中高 (模型提供商兼容性)**:
  - [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668): Gemini API 使用 MCP 工具时，因 JSON Schema 包含复杂字段（如 `$ref`, `anyOf`）导致 HTTP 400 错误。（*暂无 Fix PR*）
  - [Issue #2745](https://github.com/sipeed/picoclaw/issues/2745): OpenRouter 推理模型 将内部“思考”泄露到了正文中。（*已有文档缓解方案 PR #2746*）
- 🟡 **低危 (UI 显示错误)**:
  - [Issue #2665](https://github.com/sipeed/picoclaw/issues/2665): Anthropic 模型下拉框的 ID 使用了点号而非 API 要求的破折号。（*暂无 Fix PR*）

## 6. 功能请求与路线图信号
从近期的 Feature 提交和 PR 活动可以嗅探出项目近期的 Roadmap 方向：
1. **Agent 深度思考流处理（已落地）**：[PR #2740 (Open)](https://github.com/sipeed/picoclaw/pull/2740) 正在修复 DeepSeek 模型流式输出时丢失 `reasoning_content` 的问题。加上 OpenRouter 的相关 PR，说明项目正在全面适配“思考型”AI 模型。
2. **提供接入层兼容**：[PR #2260 (Open)](https://github.com/sipeed/picoclaw/pull/2260) 增加了对 xAI (Grok) 模型的兼容支持。
3. **MCP 协议企业级支持（评估中）**：如 [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) 所示，无需本地配置的纯 Web 端 OAuth 2.1 MCP 接入可能会成为下一版本的主打特性。

## 7. 用户反馈摘要
综合近期 Issues，用户的实际使用反馈集中在以下几点：
- **痛点 1：多云/多代理兼容问题**。很多用户不再直接调用官方 API，而是通过 OpenRouter、avian.io 等代理商进行路由。PicoClaw 之前的硬编码检测逻辑导致这些用户无法使用某些模型的高级特性。
- **痛点 2：不同渠道的格式损耗**。LLM 经常输出复杂的 Markdown 或复杂的 JSON，但将其直接推送到 Telegram 等对格式要求严格的渠道时，经常出现排版错乱甚至转义报错。
- **正面反馈**：用户高度认可 PicoClaw 的“网关+渠道”整合能力，期望将其作为统一入口对接各种异构系统（如企业邮箱、各类 IM）。

## 8. 待处理积压
以下重要 Issue 和 PR 处于 `stale` 状态或长期 Open，建议维护团队 予以关注和跟进：
- **[PR #2260: feat(providers): add xAI compat support](https://github.com/sipeed/picoclaw/pull/2260)**：由 badgerbees 提交于 4 月初，已标记为 stale，需要团队进行代码审查和回归测试。
- **[PR #2163: fix: maintain OAuth scopes during Google Antigravity token refresh](https://github.com/sipeed/picoclaw/pull/2163)**：涉及 Google Cloud Code Assist 令牌刷新后权限丢失的严重问题，已经停滞超过一个月。
- **[Issue #2668: Gemini API returns HTTP 400 for MCP tools with complex JSON schemas](https://github.com/sipeed/picoclaw/issues/2668)**：影响 Gemini 模型通过 MCP 调用外部工具的硬性阻断问题，希望开发组尽快介入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目保持高度活跃，社区贡献呈现出明显的爆发趋势。今日新增或活跃的 Issues 达 9 条，PR 更新高达 16 条（其中一半已被合并），但未发布任何新版本。开发重心明显集中在 **v2 迁移流程的完善** 及 **多渠道适配器（WhatsApp、CLI、Matrix、DeltaChat）的路由与稳定性修复**。当前项目处于功能快速迭代与深度的稳定性打磨并行阶段。

## 2. 版本发布
* **无新版本发布**。
* *注：尽管今日无正式 Release，但考虑到合并了 #1931 (v2迁移实验特性) 及 #2178 (10项运维缺陷修复)，项目主干已积累大量代码变更，预计近期可能会发布包含 v1 到 v2 迁移工具的新版本。*

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，主要推进了基础设施稳定性和渠道接入的完善：

* **v1 到 v2 自动迁移机制落地**：[#1931](https://github.com/qwibitai/nanoclaw/pull/1931) 被合并。该 PR 实现了 v1 安装环境的自动检测与平滑升级，为用户向 v2 架构过渡铺平了道路。
* **批量运维缺陷修复**：[#2178](https://github.com/qwibitai/nanoclaw/pull/2178) 关闭。由核心贡献者提交，一次性修复了 10 项实际生产环境中的痛点问题（如浏览器调用失败、Container 600s 超时、FB队列挂起等），大幅提升了宿主机的运行稳定性。
* **核心 Poll 循环修复**：[#2181](https://github.com/qwibitai/nanoclaw/pull/2181) 合并，修复了在“热容器”中所有斜杠命令静默失效的关键 Bug。
* **多渠道适配器进展**：[#2192](https://github.com/qwibitai/nanoclaw/pull/2192) 关闭，增加了 DeltaChat 通道适配器，进一步扩展了个人 AI 助手的通信生态。

## 4. 社区热点
今日的讨论焦点主要集中在多账号整合、底层 Token 消耗优化以及基础路由机制上：

* **Token 消耗与性能优化倡议**：[#2189](https://github.com/qwibitai/nanoclaw/issues/2189)。开发者 `mnolet` 指出当前 NanoClaw 在非编码场景下 Token 消耗过大，不仅影响 Agent 性能，还易触发限流。这引发了关于底层 Prompt 压缩和上下文管理机制的思考。
* **多账号 Gmail 集成短板**：[#2195](https://github.com/qwibitai/nanoclaw/issues/2195)。用户指出 `add-gmail-tool` 目前仅支持单账号 OAuth，双账号（如工作+个人）场景存在路由盲区，反映了高级用户对统一通信枢纽的强烈需求。
* **徽章显示优化**：[#1017](https://github.com/qwibitai/nanoclaw/issues/1017)（今日重新活跃）。用户请求在 `repo-tokens` 徽章中增加百分比显示，虽然是一个小型 UI 增强，但反响积极。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，集中在数据库写入权限、路由标识和 XML 解析上。**整体看来，已有对应的 PR 快速响应拦截：**

* **🔴 严重 [已被修复]**：host-sweep 定时任务崩溃导致消息投递阻塞。
  * Issue: [#2188](https://github.com/qwibitai/nanoclaw/issues/2188), [#2196](https://github.com/qwibitai/nanoclaw/issues/2196)
  * 原因：尝试向只读的 outbound.db 写入孤儿进程清理记录。
  * Fix PR: [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) (已合并)
* **🟠 中等 [已被修复]**：OneCLI 凭据下发 400 错误导致登录失败。
  * Issue: [#2046](https://github.com/qwibitai/nanoclaw/issues/2046)
  * 原因：Agent group IDs 使用下划线，但 OneCLI 仅接受连字符。
  * Fix PR: [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) (已合并)
* **🟠 中等 [已提交 PR]**：CLI 路由查找失败。
  * Issue: [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) - `cli:local` 打破了 router lookup。
  * Fix PR: [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) (待合并)
* **🟡 低 [已被修复]**：Atom/RSS 抓取崩溃。
  * Issue: 无专门 Issue（在 PR 中暴露）。
  * Fix PR: [#2190](https://github.com/qwibitai/nanoclaw/pull/2190) (已合并)。修复了由于 `fast-xml-parser` 解析 YouTube 等站点对象格式导致的 TypeError。

## 6. 功能请求与路线图信号
从今日的 PR 与 Issue 动态来看，项目的路线图正呈现以下特征：

* **多渠道与 E2EE 深度融合**：Matrix E2EE 频道 PR ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)) 及 Webchat 技能 ([#2069](https://github.com/qwibitai/nanoclaw/pull/2069)) 正在持续迭代。结合 WhatsApp LID 映射改进 ([#2194](https://github.com/qwibitai/nanoclaw/issues/2194))，项目正致力于构建一个高可用的跨平台 E2EE 通信底座。
* **本地智能家居集成**：Home Assistant MCP 集成 ([#1327](https://github.com/qwibitai/nanoclaw/pull/1327)) 持续推进，表明项目计划将 AI 助手的能力边界从“在线交互”延伸至“本地物联网控制”。
* **本地记忆与上下文优化**：Issue [#2185](https://github.com/qwibitai/nanoclaw/issues/2185) 指出 `CLAUDE.md` 组装逻辑未加载本地记忆文件，若能解决，将大幅提升 Agent 的个性化记忆能力。

## 7. 用户反馈摘要
通过对今日 Issue 的梳理，提炼出真实用户的以下核心反馈：

* **痛点：迁移门槛与环境依赖**：用户 Omee11 在 [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) 反馈，`migrate-v2.sh` 在未安装 `sqlite3` CLI 时会抛出令人困惑的“表不存在”错误，表明部分脚本在跨平台或最小化依赖环境下的容错性不足。
* **痛点：原生 WhatsApp 对接的脆弱性**：多位开发者（如 mshirel）指出，底层 Baileys 库的 JID 映射在服务重启后会丢失 ([#2194](https://github.com/qwibitai/nanoclaw/issues/2194))，这说明在重度依赖第三方状态的应用中，NanoClaw 的持久化兜底机制还需加强。
* **满意度：社区响应速度极快**：从 OneCLI 标识符修复到 host-sweep 只读库崩溃，从 Issue 提出到对应 Fix PR 的提交均在同一天内完成，显示出维护团队极高的响应率和专业的缺陷定位能力。

## 8. 待处理积压
以下是长期保持活跃但尚未合并/解决的重要资产，建议维护团队关注：

* **[PR] Matrix E2EE 端到端加密支持**：[#1624](https://github.com/qwibitai/nanoclaw/pull/1624)（已开启 1 个月）。这是一个巨大的特性更新，涉及复杂的协议交互，需重点关注其 code review 进展。
* **[PR] Home Assistant MCP 集成**：[#1327](https://github.com/qwibitai/nanoclaw/pull/1327)（已开启 1 个多月）。作为 AI 助手走向实体控制的关键节点，需评估其安全性与鉴权机制。
* **[Issue] 全局 Token 消耗优化**：[#2189](https://github.com/qwibitai/nanoclaw/issues/2189)。鉴于 Token 消耗直接影响用户的 API 成本，这应该被提升为高优先级的架构优化任务。
* **[PR] Webchat 渠道接入**：[#2069](https://github.com/qwibitai/nanoclaw/pull/2069)。等待合并，补齐全平台 Web 端对话闭环。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
NullClaw 项目在过去 24 小时内展现了极高的开发活跃度与社区参与度，整体处于**高度活跃且健康**的状态。虽然今日没有发布新的软件版本，但项目合入高达 37 个 Pull Requests，显著推进了系统底层架构的完善。核心开发者（如 vernonstinebaker、mark-os、manelsen 等）集中清算了历史积压的关键 PR，包括 REST Admin API 的全面落地和并发架构的升级。此外，多项针对 Zig 0.16 迁移引发的高严重级别回归问题（如 CPU 空转、通信阻塞）得到了彻底修复，项目的整体稳定性和性能迈上了一个新台阶。

## 2. 版本发布
今日无新版本发布。尽管有大量代码合入，官方尚未打出新的 Release Tag。

## 3. 项目进展
今日共有 37 个 PR 被合并/关闭，2 个 PR 处于待合并状态。这些更新极大地扩展了 NullClaw 的功能边界并增强了系统鲁棒性：

- **REST Admin API 全面落地**：合入了等待已久的 API 三件套 [PR #770](https://github.com/nullclaw/nullclaw/pull/770)、[PR #771](https://github.com/nullclaw/nullclaw/pull/771) 和 [PR #780](https://github.com/nullclaw/nullclaw/pull/780)。这些 PR 引入了运行时状态、配置读取、Channel 管理、历史记录和内存 CRUD 等功能，为轻量级客户端（如移动端 App）提供了标准化接口。
- **并发与架构升级**：[PR #855](https://github.com/nullclaw/nullclaw/pull/855) 修复并重构了 daemon 的入站处理，引入了会话级别的轮次抢占机制，解决了长时间任务阻塞的问题（对应 [Issue #832](https://github.com/nullclaw/nullclaw/issues/832)）。
- **网络与网关底层修复**： vernonstinebaker 和 jmylchreest 提交了多个修复，如 [PR #873](https://github.com/nullclaw/nullclaw/pull/873) 和 [PR #858](https://github.com/nullclaw/nullclaw/pull/858) 彻底解决了 Zig 0.16 下 HTTP/1.1 keep-alive 阻塞和网关 accept 循环导致的 100% CPU 占用问题。
- **安全与权限细化**：[PR #875](https://github.com/nullclaw/nullclaw/pull/875) 重构了命令风险等级，引入了中风险层，使得 `curl` 等网络命令在受控模式下可用；[PR #880](https://github.com/nullclaw/nullclaw/pull/880) 则通过添加随机边界和 Unicode 折叠，防止了外部内容的欺骗攻击。

## 4. 社区热点
今日社区关注度最高的问题集中在开发者体验（DX）和特定环境部署上：
- **CLI 交互体验问题**：用户 eabase 报告的 [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) 指出 CLI 的上下左右方向键会输出控制字符垃圾，破坏了原生的命令行操作习惯，引发了较多讨论。
- **Allowlist 权限困惑**：[Issue #866](https://github.com/nullclaw/nullclaw/pull/866) 中，用户反馈即便将 `curl` 加入白名单，在 agent 模式下依然调用失败。这直接促使了维护者合并了上述的 [PR #875](https://github.com/nullclaw/nullclaw/pull/875) 来细化权限分级。
- **Debian 环境部署壁垒**：[Issue #820](https://github.com/nullclaw/nullclaw/issues/820) 探讨了在 Debian 上安装 Zig 的痛点，反映出目前依赖特定 Zig 版本对潜在新用户的上手门槛较高。

## 5. Bug 与稳定性
今日报告及修复了多处高优先级的回归及兼容性 Bug，整体稳定性通过今天的合并得到了大幅修复：

1. **[P0] 网关 CPU 空转 (Busy-loop)**：[Issue #851](https://github.com/nullclaw/nullclaw/issues/851) 报告在树莓派等设备上空闲时占用 100% CPU。此问题已通过 [PR #878](https://github.com/nullclaw/nullclaw/pull/878)（使用 `nanosleep` 替代协作 yield）及相关的网关修复 PR 解决。
2. **[P0] Mattermost 空体 POST 请求失败**：因 Zig 0.16 缓冲机制变更导致的消息静默丢失。已通过 [PR #877](https://github.com/nullclaw/nullclaw/pull/877) 和 [PR #873](https://github.com/nullclaw/nullclaw/pull/873) 修复。
3. **[P1] HTTP/1.1 keep-alive 阻塞**：[PR #876](https://github.com/nullclaw/nullclaw/pull/876) 修复了因等待永远不会发送的 FIN 包导致的连接阻塞，提升了网络并发性能。
4. **[P1] Subagent 返回值丢失**：[Issue #849](https://github.com/nullclaw/nullclaw/issues/849) 报告子代理执行成功但无法回传结果，该 Issue 已被关闭。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 来看，项目正明确向以下几个方向演进：
- **去 curl 依赖化**：由 ncode 提交的待合并 [PR #881](https://github.com/nullclaw/nullclaw/pull/881) 旨在移除运行时的 `curl` 子进程调用，改用原生的 `std.http` 包装器。这将是项目底层架构的一个重大里程碑。
- **多模态支持扩展**：[PR #686](https://github.com/nullclaw/nullclaw/pull/686) 已经引入了多模态（图像）支持的端到端能力，表明 NullClaw 正在从纯文本 Agent 向多模态智能体演进。
- **Tailscale 深度集成**：[PR #850](https://github.com/nullclaw/nullclaw/pull/850) 加密支持了 tailscale auth_key，预示着项目在私有化部署和安全隧道场景下的重视度提升。

## 7. 用户反馈摘要
通过对今日 Issue 的分析，提炼出以下用户侧反馈：
- **痛点**：Zig 语言环境部署对非 Rust/C++ 背景的用户依然存在门槛；CLI 的流式输出（如工具调用标签 `δει... tight` 泄露到终端）和按键映射问题影响了操作体验。
- **使用场景**：用户正在将 NullClaw 部署到资源受限的设备（如 Raspberry Pi 5 / aarch64），这要求网关必须具备极高的资源利用率和休眠唤醒机制。
- **满意点**：用户对 `nullclaw capabilities` 等命令的结构化输出给予了肯定，但也提出了可读性优化建议（已在 [PR #863](https://github.com/nullclaw/nullclaw/pull/863) 中通过引入 TTY 彩色表格解决）。

## 8. 待处理积压
- **长期未决的安全重构 PR**：[PR #881](https://github.com/nullclaw/nullclaw/pull/881) (移除运行时 curl) 目前状态为 Open。由于涉及重写大量底层 HTTP 交互逻辑，建议维护者进行充分的风险评估与测试，尽早合入以彻底解决之前出现的多种 HTTP 阻塞与兼容性顽疾。
- **遗留的 CLI Bug**：[Issue #865](https://github.com/nullclaw/nullclaw/issues/865) (方向键输出控制字符) 仍然处于 Open 状态，严重影响终端用户的交互体验，建议开发者优先排查终端适配层。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026 年 5 月 3 日 IronClaw (AI 智能体与个人 AI 助手) 项目动态日报：

# 📊 IronClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
过去 24 小时，IronClaw 项目呈现出**极高的架构演进活跃度与社区开发热度**。项目在 24 小时内共有 20 个 Issue 得到更新（16 个新开/活跃，4 个关闭），同时有 43 个 Pull Request 发生变动。虽然今天没有发布新的稳定版本，但底层核心架构的重组与功能迭代正在全速推进。以 `serrrfirat` 为核心的开发者团队今日密集提交了多个 "[Reborn](https://github.com/nearai/ironclaw/issues/2987)" 顶层设计 Issue，标志着项目正在对智能体的会话、线程及运行时等底层核心系统进行深度重构。同时，社区贡献者（特别是 `abbyshekit`）提交了大量实用功能与修复，整体项目健康度处于**高活力、快速迭代**状态。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
尽管今日合并的 PR 数量不多（7个），但待合并的高质量 PR（36个）为项目下一阶段奠定了基础，整体向前迈进了一大步：

- **Reborn 内存存储系统重构落地**：由核心贡献者 `nickpismenkov` 提交的系列 PR (包含 [PR #3180](https://github.com/nearai/ironclaw/pull/3180) 到 [PR #3184](https://github.com/nearai/ironclaw/pull/3184)) 正在全面替换原有的底层实现。今日已合并/推进了原生 Postgres 和 libSQL 的存储库行为及模式重构，为高性能的 AI 记忆检索打下基础。
- **Web 端会话体验优化**：[PR #2700](https://github.com/nearai/ironclaw/pull/2700) 致力于在 Web 网关侧用描述性的聊天标题替代难以阅读的十六进制哈希 ID，极大改善了用户的 UI 交互体验。
- **本地模型推理支持增强**：[PR #2372](https://github.com/nearai/ironclaw/pull/2372)（已合并/关闭）为 Ollama 推理后端默认开启了 `think: true` 参数，使得 Qwen3、DeepSeek-R1 等模型能够正常输出其思考推理过程。
- **CI/CD 效能提升**：[PR #3203](https://github.com/nearai/ironclaw/pull/3203) 大幅裁剪了 Rust 编译的 feature 集合并优化了 WASM 目标目录，将有效缩短后续 PR 的测试等待时间。

## 4. 社区热点
今日讨论最活跃、架构影响最深远的议题集中在底层架构重构上：

- **Reborn 核心架构设计密集立项**：核心开发者 `serrrfirat` 提交了大量架构级 Tracker Issue，其中最活跃的是关于 Reborn 核心防阻塞机制的 [Issue #3016](https://github.com/nearai/ironclaw/issues/3016) 和定义 TurnCoordinator 内核的 [Issue #3013](https://github.com/nearai/ironclaw/issues/3013)。
- **多模态音频管道需求**：[Issue #90](https://github.com/nearai/ironclaw/issues/90) 是一个高优先级 (P1-P2) 的长期社区热点，要求增加 Speech-to-Text 和 Text-to-Speech 支持，以打通 WhatsApp 等平台的语音消息处理闭环。
- **Web 端 QA 缺陷反馈**：[Issue #2344](https://github.com/nearai/ironclaw/issues/2344) 反映了 Staging 环境前端页面加载时出现控制台报错及 CSP 违规，引发了 UI/UX 和前端安全策略的讨论。

## 5. Bug 与稳定性
今日报告了若干影响系统稳定性的关键缺陷，部分已有对应的修复 PR：

- **[P0/高] 安装程序在主流 Linux 架构上崩溃**：[Issue #2818](https://github.com/nearai/ironclaw/issues/2818) 报告 v0.26.0 的安装脚本在 `x86_64-unknown-linux-gnu` 上执行失败。该 Issue 随后已**关闭**，表明已得到修复。
- **[中] Gemini 模型工具调用失效**：[Issue #3214](https://github.com/nearai/ironclaw/issues/3214) 指出在配合 Gemini 3.x 模型使用时 SSE 处理程序丢失了 `thoughtSignature`，导致 HTTP 400 错误。报告者指出之前的 PR 修复并不彻底。
- **[中] DeepSeek 工具调用失效**：[Issue #3201](https://github.com/nearai/ironclaw/issues/3201) 报告配置 DeepSeek 作为 LLM Provider 时，工具调用功能彻底失效。
- **[低] MCP 测试环境变量污染**：[PR #3205](https://github.com/nearai/ironclaw/pull/3205)（已合并/关闭）修复了由于并行测试未清理 OAuth 环境变量导致的合并队列偶发测试失败（Flaky Test）。

## 6. 功能请求与路线图信号
从近期的 PR 活动来看，以下新功能极有可能会被纳入下一版本：

- **ARM64 原生 Docker 镜像支持**：[Issue #3168](https://github.com/nearai/ironclaw/issues/3168) 提出了 ARM64 设备的支持需求，目前 [PR #3208](https://github.com/nearai/ironclaw/pull/3208) 已提交了对应的 CI 构建修改，Apple Silicon 和树莓派用户即将获得原生支持。
- **NEAR Intents 交易智能体基础建设**：社区正致力于引入基于 NEAR 协议的自动化交易代理（[PR #3207](https://github.com/nearai/ironclaw/pull/3207)）及付费研究层架构（[PR #3211](https://github.com/nearai/ironclaw/pull/3211)），这表明 IronClaw 正在向 Web3/DeFi 智能体应用场景拓展。
- **Magic-link 邀请注册机制**：[PR #3187](https://github.com/nearai/ironclaw/pull/3187) 引入了针对试点用户的一键邀请注册功能，暗示项目即将开展更大规模的公测。
- **身份与记忆个性化修复**：[PR #3213](https://github.com/nearai/ironclaw/pull/3213) 修复了智能体无视用户设定而强行自称 "IronClaw" 的问题，大幅提升了智能体作为个人分身/助手的拟真度。

## 7. 用户反馈摘要
综合今日的 Issue 和 PR 描述，用户在使用 IronClaw 时的真实痛点主要如下：
1. **工具调用的兼容性依然脆弱**：从 DeepSeek 和 Gemini 暴露出的 Bug 可以看出，当前系统在面对不同 LLM 供应商返回的非标 JSON 数据时（如将数字参数序列化为字符串）容易崩溃。好消息是开发者已在 [PR #3206](https://github.com/nearai/ironclaw/pull/3206) 中引入了类型强制转换机制来应对此问题。
2. **扩展配置 UI 容易引发困惑**：用户反馈不需要配置的扩展也会显示 "Configure" 按钮，多次点击甚至引发多次无用弹窗 ([PR #3210](https://github.com/nearai/ironclaw/pull/3210))。
3. **多设备部署体验有待提升**：用户强烈渴望在 ARM 架构设备上（如本地 Mac、家用服务器）无缝运行 Docker 版本的 IronClaw。

## 8. 待处理积压
尽管项目整体活跃，但仍存在一些体量庞大或需要长期关注的 PR 处于 Open 状态，需要维护团队投入精力进行 Review：

- **[PR #2700](https://github.com/nearai/ironclaw/pull/2700)**：针对 Web 端会话侧边栏显示优化的 PR，由于涉及网关、Web handler 和 DB 的多重重构，已停滞数日，需重点关注其合并冲突与测试覆盖。
- **[PR #3105](https://github.com/nearai/ironclaw/pull/3105)**：关于 Telegram Channel 启动轮询失败及 WASM 回退逻辑的修复，目前状态为 Closed（可能是由于架构变更被要求重开或暂缓），需要确认后续计划。
- **[PR #3189](https://github.com/nearai/ironclaw/pull/3189)**：引入原生的 `ironclaw verify` 自动化验证命令，属于 XL 级别的大型提交，需要核心架构师尽快进行安全性及架构设计的评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI (github.com/netease-youdao/LobsterAI) 项目 2026-05-03 动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-05-03)

## 1. 今日速览
过去 24 小时，LobsterAI 项目整体处于**低活跃度的维护与外部贡献接收状态**。项目今日无新开 Issue、无新版本发布，也未有任何代码合并（0 Merges）。尽管缺乏核心主干的合入动作，但有 4 个外部及内部 PR 在今日产生了更新，主要涉及配置同步丢失修复、新模型接入及 UI/UX 体验优化。值得注意的是，今日活跃的 PR 中有一半已被标记为 `[stale]`，表明项目近期在 PR 评审和社区响应节奏上可能存在一定滞后，整体推进速度较为平缓。

## 2. 版本发布
**无**。今日无任何新版本或 Tag 发布。

## 3. 项目进展
今日**无任何 PR 被合并或关闭**。但有以下 4 个待合并（OPEN）的 PR 取得了推进或更新，等待 Maintainer Review：

*   **[OPEN] 修复配置同步覆盖手动插件路径的问题 ([PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879))**
    *   **作者**: gvaiis
    *   **进展**: 修复了 OpenClawConfigSync 同步时导致手动安装的社区插件（如 memory-lancedb-pro）路径被静默丢弃的严重体验缺陷。目前处于待合并状态。
*   **[OPEN][stale] 新增小米 MiMo V2 Pro 和 Omni 模型 ([PR #813](https://github.com/netease-youdao/LobsterAI/pull/813))**
    *   **作者**: swuzjb
    *   **进展**: 为小米渠道补充了两个支持图像输入的新模型，今日状态发生更新但被打上 `stale` 标签。
*   **[OPEN] 隐藏 OpenClaw 主代理会话 ([PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181))**
    *   **作者**: Noodles006
    *   **进展**: 修复了内部用于心跳/定时路由的主代理会话错误暴露在用户视野的 Bug，通过在数据库层面新增 `hidden` 字段进行隔离。
*   **[OPEN][stale] 修复定时任务通知渠道过滤及显示缺陷 ([PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191))**
    *   **作者**: gongzhi-netease
    *   **进展**: 重构了通知渠道选择器，解决了 POPO/企微不显示、微信误报不支持、以及显示底层技术编码等三个前端体验问题。

## 4. 社区热点
今日项目无任何新增评论（0 Comments），缺乏激烈的社区讨论，但从待处理的 PR 活动中可以看出当前社区的核心诉求集中在对 **OpenClaw 插件生态的扩展稳定性**以及 **IM 消息推送的完整性**上。

*   **插件管理体验缺陷**：[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) 暴露出当前系统在进行配置同步时，缺乏对手动管理路径的保护机制，导致用户的安装操作被轻易覆盖，这是高级玩家（开发者）的核心痛点。
*   **IM 通知体验割裂**：[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191) 集中反映了定时任务与 IM 系统之间的断连问题（如飞书、POPO），用户面临可用渠道不可见、名称难理解等阻碍。

## 5. Bug 与稳定性
今日无新报告的 Bug。但在存量未合并的 PR 中揭示了以下潜在稳定性与逻辑缺陷：

1.  **数据/配置流失风险 (高)**：[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) 指出的配置同步抹除问题，具有隐蔽性，可能导致用户好不容易配好的插件环境在不知情的情况下失效。
2.  **前端 UI 逻辑误判 (中)**：[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191) 提及微信被错误防御性代码拦截，以及 POPO/企业微信渠道过滤失效，降低了系统的可用性。
3.  **界面信息污染 (低)**：[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 提及的内部会话（`[OpenClaw]`）对普通用户的暴露，虽不致命，但会引起用户的困惑，影响产品专业度。

## 6. 功能请求与路线图信号
结合今日数据，提取出以下与下一版本功能演进相关的信号：

*   **多模态模型扩充**：[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813) 显示，社区正积极推动 LobsterAI 接入小米 MiMo 系列的多模态能力（支持图像）。如果此 PR 被合并，将扩大项目在国内模型生态中的支持面。
*   **插件状态管理增强**：[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) 的出现，暗示项目的下一阶段可能需要重构 `openclaw.json` 的合并策略，以更好地兼容“内置管理+手动安装”的混合插件生态。

## 7. 用户反馈摘要
今日虽无直接的用户评论，但通过作者提交的 Issue/PR 提炼出以下真实用户使用场景：
*   **“面向企业的自动化流转”**：用户正在使用 LobsterAI 的定时任务配合企业 IM（飞书、POPO、企业微信）进行自动化消息推送，但目前这套工作流存在断点。
*   **“深度玩家本地部署扩展”**：部分用户具有较强的动手能力，会脱离 GUI 使用命令行（如 `pm install`）安装社区强大插件（如基于 LanceDB 的记忆模块），他们需要系统对这些底层操作保持兼容和尊重。

## 8. 待处理积压
项目目前存在较为明显的 PR 积压和响应延迟，提醒 Maintainer 重点跟进：

*   **⚠️ 严重积压的 PR**：[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813) 与 [PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191) 均创建于 2026-03-25 至 04-01 之间，距今已超过一个月，目前处于 `[stale]` 状态，急需代码审查以避免贡献者流失。
*   **📢 需关注的阻塞项**：[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) 修复了关键的配置覆盖问题，[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 涉及数据库 Schema 变更（新增 hidden 字段）。建议维护团队尽快评估这两个 PR 的兼容性并安排合入，以提升主分支的健壮性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份报告由开源项目分析师基于 2026 年 5 月 3 日的 GitHub 数据自动生成，全面梳理了 AI 智能体及个人助手项目 **Moltis** 的最新动态与项目健康度。

---

### 1. 今日速览
过去 24 小时内，Moltis 项目保持着**稳健且聚焦的迭代节奏**。社区活跃度良好，共产生了 4 个新开 Issue 和 2 个活跃的 Pull Request。项目目前没有紧急的破坏性 Bug 集中爆发，且核心贡献者正在积极推动远程沙箱环境（Sandbox）和身份认证（OIDC）等底层架构的完善。整体来看，项目正在为支持更多元的部署环境和更广泛的 AI 能力（如深度推理和图像生成）做基础设施准备，项目健康度呈现积极上升态势。

### 2. 版本发布
**今日无新版本发布。**

### 3. 项目进展
今日共有 2 个 PR 被合并/关闭，1 个 Issue 被解决，项目在终端体验和国际化方面取得了实质性进展：
*   **终端体验修复（已合并）**：PR [#955](https://github.com/moltis-org/moltis/pull/955) 修复了创建新标签页时偶发的“window does not exist”错误，该问题根源于前端 WebSocket 与后端 tmux 会话的竞态条件。
*   **关联 Issue 修复（已关闭）**：随着 PR #955 的合并，Issue [#937](https://github.com/moltis-org/moltis/issues/937) 中用户反馈的 `settings/terminal tmux error` 得到彻底解决。
*   **国际化支持（已关闭）**：PR [#339](https://github.com/moltis-org/moltis/pull/339) 引入了繁体中文（`zh-TW`）的完整本地化支持，进一步降低了华语地区用户的部署与使用门槛。

### 4. 社区热点
当前社区最关注的话题集中在 **基础设施部署** 与 **新型 AI 智能体信任机制** 的探讨上：
*   **云端部署痛点（讨论中）**：PR [#942](https://github.com/moltis-org/moltis/pull/942) 提出了远程和多后端沙箱支持。这反映了社区对于在无 Docker-in-Docker 环境的云平台（如 DigitalOcean, Fly.io）上部署 Moltis 有着强烈需求。
*   **智能体信任度评估（新提议）**：Issue [#960](https://github.com/moltis-org/moltis/issues/960) 提出了集成 `SwarmScore`（便携式 AI 智能体信誉系统）的想法。这表明随着 Moltis 代理能力的增强，用户/开发者开始关注智能体执行动作的可信度与安全性，这是 AI Agent 领域的前沿需求。

### 5. Bug 与稳定性
今日新增 2 个明确的 Bug 报告，按影响程度排序如下：
1.  **高：DeepSeek 推理模式 API 报错** - Issue [#959](https://github.com/moltis-org/moltis/issues/959)
    *   **现象**：在使用 DeepSeek 的思考模式时，API 强制要求将 `reasoning_content` 回传，否则报错中断。
    *   **状态**：`[OPEN]`，目前尚无关联的 fix PR。这会直接影响使用 DeepSeek 作为底层模型的用户，需要优先处理。
2.  **低：本地化文档链接失效** - Issue [#958](https://github.com/moltis-org/moltis/issues/958)
    *   **现象**：Voice Services 相关的本地 TTS 提供商设置文档中，包含了指向已归档/不再维护的代码库链接。
    *   **状态**：`[OPEN]`，属于文档级别问题，不影响核心程序运行，修复成本极低。

### 6. 功能请求与路线图信号
从近期的 Issues 和活跃的 PR 中，可以明显看出项目下一步的演进方向：
*   **多模态能力扩展**：Issue [#956](https://github.com/moltis-org/moltis/issues/956) 请求通过 OpenAI Codex OAuth 增加 `gpt-image-2` 的图像生成支持。结合 Moltis 作为个人助手的定位，多模态（文生图）能力极有可能会被纳入近期的开发路线图。
*   **企业级/云端友好架构**：PR [#942](https://github.com/moltis-org/moltis/pull/942)（远程沙箱）与 PR [#957](https://github.com/moltis-org/moltis/pull/957)（修复 Matrix OIDC 注册重定向问题）都在释放一个信号——Moltis 正在强化其在生产环境、多租户环境以及企业级通讯软件集成中的健壮性。

### 7. 用户反馈摘要
从今日的 Issue 描述中，可以提取出以下真实用户使用场景与痛点：
*   **重度依赖前沿大模型**：用户正在积极尝试将最新的具备深度推理能力的模型（如 DeepSeek R1 系列）接入 Moltis，但遇到了上下文回传机制的兼容性问题。
*   **自助部署的门槛**：有用户尝试使用相对冷门或已归档的开源 TTS 方案来搭建本地语音服务，这表明部分极客用户对“数据完全本地化”有刚需，文档需要及时引导他们使用现主流的替代方案。
*   **超越文本的操作需求**：用户不再满足于纯文本对话，希望通过 OAuth 等方式无缝调用图像生成等复杂 API。

### 8. 待处理积压
以下重要项目需要维护团队关注，以防产生社区摩擦：
*   **长期挂起的国际化 PR**：PR [#339](https://github.com/moltis-org/moltis/pull/339)（繁体中文支持）于 3 月 5 日创建，直到今日才关闭。这类社区贡献应加快 Review 节奏，以鼓励贡献者的积极性。
*   **重大架构变更需尽快合入**：PR [#942](https://github.com/moltis-org/moltis/pull/942)（远程沙箱支持）是一个大型 Feature，目前处于 `OPEN` 状态。由于其解决了多个云部署的痛点，建议维护者尽快安排代码审查，或将其设为 Draft 以明确排期。
*   **亟待认领的崩溃 Bug**：Issue [#959](https://github.com/moltis-org/moltis/issues/959)（DeepSeek API 兼容性）由于涉及当前热门大模型，建议尽快由核心开发者认领并评估修复方案。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-03)

## 1. 今日速览
过去24小时内，CoPaw (QwenPaw) 项目呈现出**极高的社区活跃度与需求爆发态势**。项目今日新增了 14 条活跃 Issues（0 项关闭）和 6 个待合并 PR（0 项合并）。从数据来看，社区的关注点高度集中在**模型容错回退、本地 Ollama 兼容性、记忆系统增强以及交互体验优化**上。虽然今日没有合并代码或发布新版本，但多位首次贡献者提交了高质量的 PR，项目生态正在快速繁荣。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
虽然今日没有 PR 合并进入主分支，但待审阅的 PR 队列带来了重要的功能推进，项目整体在**多语言支持、记忆系统增强和开发者体验**上迈出了实质性步伐：
- **长期记忆系统重构与修复**：PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) 提交了 `MemoryHook` 长期记忆增强，并修复了 Web UI embedding 配置不同步的严重 Bug，大幅提升了本地模型的记忆稳定性。
- **开发者体验优化**：PR [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) 引入了 CLI skill test 命令，允许开发者在分配技能前独立进行测试验证，降低了开发调试成本。
- **渠道集成完善**：PR [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) 优化了 Discord 定时任务的分发逻辑，通过自动创建 Thread 解决了频道消息串扰问题。
- **国际化拓展**：PR [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 新增了巴西葡萄牙语 支持。
- **网络环境修复**：PR [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) 补充了 WSL2 NAT 网络环境下的超时排查文档。

## 4. 社区热点
今日社区讨论最密集的领域集中在**模型调度**与**底层稳定性**上：
- **[#3640 MCP client 内部 TaskGroup 异常导致 Agent 假死](https://github.com/agentscope-ai/QwenPaw/issues/3640)**：今日热度最高的 Issue（6条评论）。用户反馈执行任务时出现程序无响应且无报错的“假死”现象，直指底层 MCP Client 的 TaskGroup 管理机制存在隐患，严重影响生产环境可用性。
- **[#1327 模型回退链 处理速率限制](https://github.com/agentscope-ai/QwenPaw/issues/1327)**：积累了5条评论。当云端模型触发限流或服务中断时，系统缺乏自动降级机制，这引发了社区对“高可用性”的强烈诉求。

## 5. Bug 与稳定性
今日新增了多个影响核心流程的稳定性 Bug，需核心团队重点关注：
1. **严重 (High)**: [#4006 OpenAI-Compatible Provider 未过滤推理内容](https://github.com/agentscope-ai/QwenPaw/issues/4006) - 导致特定模型（如 MiniMax）返回内容的格式解析出错。
2. **严重**: [#3640 MCP Client TaskGroup 异常导致假死](https://github.com/agentscope-ai/QwenPaw/issues/3640) - 无日志报错但服务挂起，目前无修复 PR。
3. **中等**: [#3991 Ollama 频道会话记忆丢失](https://github.com/agentscope-ai/QwenPaw/issues/3991) - 本地 Ollama 模型无法携带上下文，每轮对话均为全新请求。
4. **中等**: [#4003 Apple M5 Pro 架构兼容问题](https://github.com/agentscope-ai/QwenPaw/issues/4003) - ARM64 环境下子进程以 i386 (x86_64) 运行，导致 Ollama 等本地原生工具失效。
5. **配置截断**: [#3997 MCP 客户端超时配置被静默丢弃](https://github.com/agentscope-ai/QwenPaw/issues/3997) - Pydantic 机制导致自定义 `timeout` 字段无法生效。

## 6. 功能请求与路线图信号
通过对 Issues 的聚类分析，可以明显看出用户对下一代 AI 助手平台的能力边界提出了更高要求。以下是潜在的路线图信号：
- **模型高可用与弹性调度**：[#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) 与 [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789) 同时呼吁增加备用模型 的图形化配置。这与热度极高的 #1327 形成合力，**“模型容错与回退机制”**必然成为下一版本的核心重点。
- **动态上下文管理**：[#4004 自动推断模型最大输入长度](https://github.com/agentscope-ai/QwenPaw/issues/4004)。目前写死的 128K 压缩阈值对本地小模型和大云端模型都不友好，动态感知模型窗口成为刚需。
- **任务执行控制权**：[#4010 增加飞书/微信打断/终止功能](https://github.com/agentscope-ai/QwenPaw/issues/4010)。在 Agent 自主执行耗时任务时，用户希望拥有随时干预和叫停的权限。
- **多模态与交互升级**：[#4002 对话界面可视化共享区域](https://github.com/agentscope-ai/QwenPaw/issues/4002) 提出通过框选/标注进行图形化交互，突破纯文本沟通瓶颈。
- **企业级评测需求**：[#4008 支持 Agent 测评功能](https://github.com/agentscope-ai/QwenPaw/issues/4008)。项目正面临向企业生产环境渗透的契机，完整的聊天记录导出与评测闭环是企业落地的关键阻碍。

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下典型的真实用户画像与痛点：
- **本地算力用户的痛点**：使用 M系列芯片 Mac 或本地 Ollama 部署的用户（如 #3991, #4003）依然面临各种兼容性和上下文丢失问题。系统对非标准 OpenAI 规范的模型适配仍需加强。
- **多端协同体验的割裂**：用户反馈在微信端与 Agent 对话时，无法看到 Agent 在浏览器端（如 Computer Use）的操作过程（[#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000)），多端状态不同步导致控制感缺失。
- **企业级汇报的信任建立**：有用户明确指出，由于缺乏系统的测评功能和全量日志，在向领导汇报采用 QwenPaw 作为生产环境 Agent 平台时显得“底气不足”（#4008）。

## 8. 待处理积压
- **长期未响应的关键 PR**：PR [#3831 Add vector model connection test feature](https://github.com/agentscope-ai/QwenPaw/pull/3831) 已提交超过一周，处于 `Under Review` 状态，建议团队尽快推进合并或给出修改意见。
- **僵尸 Issue 预警**：Issue [#3991 本地 Ollama 上下文丢失](https://github.com/agentscope-ai/QwenPaw/issues/3991) 和 [#3997 MCP 超时静默丢弃](https://github.com/agentscope-ai/QwenPaw/issues/3997) 直接影响用户基础使用体验，且目前无官方成员跟进回复，建议优先安排排查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
ZeroClaw 项目在过去的 24 小时内保持了**极高的社区活跃度与开发热度**。虽然今日没有发布新版本（主版本线仍停留在 v0.7.5 阶段），但共产生了 **50 条 Issue 动态（48 条新活跃）** 和 **39 条 PR 动态（31 条待合并）**。从提交内容来看，项目正处于**下一阶段（v0.7.6 及 v0.8.0）架构演进的密集开发期**：核心贡献者正在推进 V3 配置架构和微内核迁移，而社区开发者在多 Provider 支持（如 DeepSeek, xAI, Bedrock）、上下文压缩深度 Bug 修复以及渠道集成（Telegram, Matrix, Slack）方面贡献了大量高质量的代码与反馈。

## 2. 版本发布
**无新版本发布。**
当前项目最新主线版本仍处于 v0.7.5 之后的开发迭代中。根据 #5878 (v0.7.5 milestone tracking) 和 #6253 (v0.7.6 路线图) 的进展，项目正在为下一个大版本积攒特性与修复。

---

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，同时发起了多项针对核心组件的重要修复和架构升级 PR，整体开发进展显著：

*   **架构与配置 V3 大规模重构 (核心推进):**
    *   PR [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266): 提交了 Config Schema v3 迁移的初步实现。**注意：** 这是一个针对 `integration/v0.8.0` 分支的破坏性变更，标志着项目配置系统大改版的正式落地。
*   **技能系统核心改造:**
    *   PR [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274): 将第一方 Skills 迁移回主仓库的 `skills/` 目录。这一举措统一了技能的单点来源，简化了分发流程，是完善 Agent 工具链生态的重要一步。
*   **关键 Bug 修复合并与提交:**
    *   PR [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284): 修复了 `OpenAiCompatibleProvider` 在处理纯文本 Assistant 消息时丢失 `reasoning_content` 的问题，直接影响 DeepSeek 等思考模式模型的可用性。
    *   PR [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285): 修复了上下文压缩机制丢弃 `reasoning_content` 的严重问题，保障了长对话场景下 Agent 的逻辑连贯性。
*   **Provider 生态扩展:**
    *   PR [#6290](https://github.com/zeroclaw-labs/zeroclaw/pull/6290): 修复了 xAI Provider 的 base URL 错误并恢复了模型列表端点。
    *   PR [#6268](https://github.com/zeroclaw-labs/zeroclaw/pull/6268): 新增了对 Manifest (开源 LLM 路由器) 的支持。

---

## 4. 社区热点
今日讨论最活跃的问题集中在**AI 记忆机制、模型兼容性与配置架构**上：

1.  **[Dream Mode: 周期性记忆整合与反思学习](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) (9 条评论)**
    *   **分析：** 这是近期最受欢迎的 Feature 之一。社区对 Agent 在空闲时间主动整理长期记忆并优化知识结构的诉求非常高。这标志着用户期望 AI 从“被动工具”向“具备自主意识的数字孪生”演进。
2.  **[Default shell sandbox 阻碍 Python 技能执行](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (6 条评论)**
    *   **分析：** 安全沙箱策略与实际开发体验的冲突。开发者试图在 ZeroClaw 上运行复杂的金融分析 Skill，但默认沙箱过于严格。该讨论将推动项目在“开箱即用的安全性”与“高级用户的灵活性”之间寻找平衡。
3.  **[微内核架构中的 Channel 回复意图分类配置](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) (4 条评论, 👍 3)
    *   **分析：** 社区强烈要求优化“机器人是否应该回复”的判定逻辑。在私聊场景下，过度智能的过滤机制反而导致机器人“不理人”，反映了 AI Agent 在多通道交互逻辑上的细微体验痛点。

---

## 5. Bug 与稳定性
今日报告了多个影响核心工作流的严重 Bug（S1/S2），但好消息是核心维护者及社区已经迅速提交了对应的 Fix PR：

*   **[S1 - 工作流阻断] 上下文压缩丢失推理内容**
    *   **Issue:** [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) / [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)
    *   **状态：** 当对话过长触发自动压缩时，`reasoning_content` 被丢弃，导致需要深度思考的 API（如 DeepSeek V4）崩溃。
    *   **修复：** 已有对应修复 PR [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) 和 [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) 提交。
*   **[S1 - 工作流阻断] Bedrock claude-opus-4-7 Temperature 字段不兼容**
    *   **Issue:** [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095)
    *   **状态：** 升级到最新 Claude Opus 模型后，因 API 不再支持 temperature 字段导致请求 400 错误。目前尚在等待 Provider 适配层修复。
*   **[S2 - 体验降级] 多实例部署 WASM 插件路径发散**
    *   **Issue:** [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254)
    *   **状态：** 插件安装路径与运行时扫描路径不一致，导致多实例场景下插件不可见。
*   **[S2 - 体验降级] systemd 命名实例状态误报**
    *   **Issue:** [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227)
    *   **状态：** `zeroclaw status` 硬编码了服务名，导致多配置运行时误报服务未启动。
    *   **修复：** 已由开发者提交 PR [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) 解决。

---

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR 趋势，我们可以清晰看到 v0.7.6 及后续版本的演进信号：

1.  **ZeroClaw Skills 生态完善 (v0.7.6 路线图):**
    *   根据 Tracker [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)，项目正在系统性改进 Skill 的 CLI、加载器、沙箱和测试体验。今日的 PR [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) 将官方技能内迁，正是为了这一目标铺路。
2.  **无缝订阅级 OAuth 认证支持:**
    *   Feature [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 提议为 Ollama Cloud、智谱 AI、Kimi 和 MiniMax 增加原生的 OAuth/登录支持，免去用户手动管理静态 API Key 的烦恼，这将极大降低 C 端用户的接入门槛。
3.  **本地小模型与记忆性能优化:**
    *   Feature [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) 提议将 SQLite 内存后端的向量搜索从 O(n) 暴力扫描替换为 ANN（近似最近邻）算法。结合 LM Studio URL 配置优化 ([#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260))，可以看出项目在重点优化**纯本地/开源模型部署下的记忆检索性能**。

---

## 7. 用户反馈摘要
通过今日 Issue 提炼，ZeroClaw 真实用户的核心痛点与反馈如下：

*   **痛点 1：复杂的私有化部署体验。** 在配置 Telegram/Slack 等渠道时，因 Token 环境变量读取失败 ([#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237))、配置文件加密导致无响应 ([#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654)) 等问题依然困扰初学者。
*   **痛点 2：多 Agent 协同配置繁琐。** 用户在尝试部署多实例（研究、编程等不同角色 Agent）时，受限于硬编码路径 ([#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605)) 和端口冲突 ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628))。微内核 RFC V3 架构（今日提交的 PR #6266）正是为了彻底解决此问题。
*   **积极反馈：** 开发者对 ZeroClaw 作为底座承载复杂垂直领域应用（如基于 FINOS 标准的投资组合分析 Skill #5722）表现出浓厚兴趣，证明了项目作为“AI 智能体基础设施”的潜力和可扩展性得到了专业开发者的认可。

---

## 8. 待处理积压
*   **[需关注] v0.7.5 发布自动化里程碑跟踪:** Issue [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)。虽然已经被讨论，但主线版本发布仍未完全自动化，这可能阻碍后续 v0.8.0 的顺利交付。
*   **[需关注] 多实例配置的数据安全风险:** Issue [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) 被标记为 S0 (数据丢失/安全风险)。多个配置硬编码指向 `~/.zeroclaw/`，可能导致不同 Agent 实例间的记忆和配置相互覆盖。
*   **[需关注] Android/移动端适配 PR 冻结:** PR #6170 ([docs i18n zh-CN](https://github.com/zeroclaw-labs/zeroclaw/pull/6170)) 规模庞大 (XL)，需要持续的 Review 精力；部分第三方 Provider 修复 PR（如针对 Custom HTTP Provider 流挂起的 #6243）需要作者提供复现步骤，目前处于搁置状态。

</details>