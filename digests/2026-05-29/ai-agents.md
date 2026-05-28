# OpenClaw 生态日报 2026-05-29

> Issues: 402 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-28 22:29 UTC

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

# OpenClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
过去24小时内，OpenClaw 项目保持了极高的社区活跃度与迭代速度，共处理了 **402 条 Issue 更新**（新开/活跃 203，关闭 199）与 **500 条 PR 更新**（合并/关闭 141，待合并 359），闭环率极高。项目组在修复近期引发的 Native Hook Relay 故障和核心内存泄漏方面投入了大量精力。整体来看，项目当前正处于密集的稳定性修复阶段，同时多个大型重构与功能增强 PR 正在积极审阅中，项目健康度良好，呈现出“快速响应、稳步重构”的演进态势。

## 2. 版本发布
今日未检测到全新发布的版本，但项目在近期（5月27日）连续发布了 `v2026.5.27` 与 `v2026.5.27-beta.1` 两个重要更新：

- **v2026.5.27 / v2026.5.27-beta.1**
  - **更新重点**：强化安全与内容边界。主要包括：将群组提示词文本从系统提示中隔离、规范化重复点号的主机名、阻断具有副作用的命令包装器和不安全的 Node 运行时环境变量覆盖、拒绝无认证的 Tailscale 暴露、以及完善节点/设备角色的审批机制。
  - **升级/迁移注意**：这是一个偏向底层安全的强控更新，强烈建议所有用户升级。但根据近两日的 Issue 反馈，5.2x 系列版本在 Native Hook Relay 和事件循环阻塞上存在一定回退风险，建议生产环境在升级前做好网关快照。

## 3. 项目进展
尽管有 359 条 PR 处于待合并状态（多为社区提交或正在跑 CI 的 PR），今日仍有 **141 条 PR 被合并或关闭**，标志着多项核心功能的推进：

- **架构重构与提取**：PR [#87797](https://github.com/openclaw/openclaw/pull/87797) 正在将网关协议和客户端运行时抽取为独立包 (`packages/gateway-client`)，这将极大改善后续多端集成的模块化能力。
- **语音与多模态支持增强**：PR [#87794](https://github.com/openclaw/openclaw/pull/87794) 重构了 TTS 路由，将语音模型统一为 `kind: "voice"` 进行编目，为接入多平台语音铺平道路；同时，PR [#87777](https://github.com/openclaw/openclaw/pull/87777) 引入了 Telegram 语音按钮功能。
- **Agent 运行时扩展**：PR [#86155](https://github.com/openclaw/openclaw/pull/86155) 加入了 GitHub Copilot agent runtime 的集成，目前支持纯配置驱动切换，扩展了底层 AI 引擎的兼容范围。
- **稳定性提升**：PR [#87767](https://github.com/openclaw/openclaw/pull/87767) 修复了网关中已完成的会话仍被错误挂载为活跃状态的并发竞争问题。

## 4. 社区热点
今日社区讨论最激烈的问题集中在近期的回归故障、平台计费和底层稳定性上：

- **Native Hook Relay 全面失效 (5.26 回归)**：Issue [#87331](https://github.com/openclaw/openclaw/issues/87331) 与 [#87536](https://github.com/openclaw/openclaw/issues/87536) 引发热议（分别获得 17 和 6 条评论）。升级至 5.26 后，工具调用间歇性或彻底失败，社区反馈这是由于 generation UUID 过期导致的重新注册异常，目前部分问题已关闭修复。
- **计费与资金消耗异常**：Issue [#73182](https://github.com/openclaw/openclaw/issues/73182) 指出，某次更新将 Claude 模型的推理模式默认静默开启，导致 Anthropic API 费用翻倍，且泄露了思维块到聊天中，引发大量开发者的合规与成本焦虑。
- **Windows 事件循环阻塞**：Issue [#86599](https://github.com/openclaw/openclaw/issues/86599) 反映本地模型调用在 Windows 上阻塞了网关的事件循环（耗时达 4 分钟），这是目前阻碍 Windows beta 版发布的关键阻塞性缺陷。

## 5. Bug 与稳定性
今日报告了大量关键的 Bug 与回归问题，严重程度分布如下：

- **P0/P1 致命/严重阻塞**：
  - [Bug] **网关内存泄漏**：内存使用量在 4 天内从 389MB 激增至 14.7GB ([#54155](https://github.com/openclaw/openclaw/issues/54155))，当前尚在排查中。
  - [Bug] **Steer 模式失效**：无法在工具边界将消息注入活跃会话 ([#48003](https://github.com/openclaw/openclaw/issues/48003))。
  - [Bug] **Session 死锁与上下文压缩失败**：包括飞书通道引发的死循环 ([#53858](https://github.com/openclaw/openclaw/issues/53858))，以及 preflight 阶段引发的压缩死锁导致消息丢失 ([#87736](https://github.com/openclaw/openclaw/issues/87736))。

- **核心功能异常**：
  - [Bug] **多通道消息重复**：Telegram 通道在 5.20 更新后出现 2-10 次重复回复 ([#86519](https://github.com/openclaw/openclaw/issues/86519))；A2A 会话导致消息重复 ([#39476](https://github.com/openclaw/openclaw/issues/39476))。
  - [Bug] **Fallback 机制失效**：OpenAI 达到配额限制时，未按预期触发降级链条 ([#85103](https://github.com/openclaw/openclaw/issues/85103))。
  - [Bug] **本地环境崩溃**：Apple Silicon 上的 ggml-metal 崩溃 ([#44202](https://github.com/openclaw/openclaw/issues/44202))，以及 `image` 工具在缺少 `sharp` 库时报错不透明 ([#73148](https://github.com/openclaw/openclaw/issues/73148))。

- **修复进展**：绝大多数 P1 回归问题（如 Matrix 协议大小写缺陷 [#75670](https://github.com/openclaw/openclaw/issues/75670)、WarmCurrentProvider 阻塞 [#85999](https://github.com/openclaw/openclaw/issues/85999)）已有对应的关联 PR 处于 Open 状态或已被关闭。

## 6. 功能请求与路线图信号
通过今日的 Issue 和 PR，可以捕捉到项目下一阶段的演进路线图信号：

- **TTS 与语音交互的全面整合**：PR [#87794](https://github.com/openclaw/openclaw/pull/87794) 表明 OpenClaw 正在构建统一的语音模型层，结合 Telegram Speakeasy 功能，多端语音交互将成为近期的重点。
- **Agent 上下文精细化管理**：PR [#83637](https://github.com/openclaw/openclaw/pull/83637) 提议为每个 Agent 添加独立的 compaction 和 contextPruning 覆盖配置，这在多 Agent 协同场景下是迫切需求，有望合并。
- **CI/CD 与安全边界加固**：项目近期提交了多个关于依赖图保护和漂移检查的脚本 PR ([#87791](https://github.com/openclaw/openclaw/pull/87791), [#87786](https://github.com/openclaw/openclaw/pull/87786))，显示出维护团队正在大力加强自动化构建的安全管控。
- **UI 国际化与可用性优化**：PR [#80649](https://github.com/openclaw/openclaw/pull/80649) 正在改进印尼语的 UI 翻译，表明开源社区正推动控制面板的全球化普及。

## 7. 用户反馈摘要
从真实的用户反馈中，可以提炼出以下痛点与典型使用场景：

- **痛点：配置与状态管理的脆弱性**：多用户反馈网关重启、升级或 `/new` 指令后容易出现状态不一致、旧消息重放或死锁，这表明底层的 `sessions.json` 状态机需要更强的容错能力。
- **痛点：多级模型降级体验不佳**：用户在使用复杂降级链（如 GPT-5.5 -> DeepSeek）时，常因 Provider 层级的限制而中断，降级链的鲁棒性亟待提升。
- **场景：重度多 Agent 与自动化集成**：多位开发者正在尝试将 OpenClaw 接入 Nextcloud Talk、飞书和 WhatsApp 等复杂企业环境中，当前的 `active-memory` 插件及子代理并发容易引发资源过载。
- **正面反馈**：尽管存在回归，用户对 OpenClaw 的修复速度表示认可，且对网关支持接入 GitHub Copilot、TTS 编目等新架构扩展充满期待。

## 8. 待处理积压
以下长期高优先级 Issue 虽有标签但近期未见实质性的代码合并突破，提醒维护团队重点关注：

- **P1 会话消息丢失风险**：[#69208](https://github.com/openclaw/openclaw/issues/69208) (Umbrella: 跨频道重复记录与上下文组装 Bug) 影响极广，已被标记数周，仍需推进统一修复方案。
- **P1 内存泄漏**：[#54155](https://github.com/openclaw/openclaw/issues/54155) (网关内存泄漏：4天飙升近15GB)，此问题影响长期部署的稳定性，亟待解决。
- **P1 子代理 Spawn 空列表异常**：[#75593](https://github.com/openclaw/openclaw/issues/75593) 表明子代理生成后无法列表获取，这对多 Agent 架构是基础性阻断。
- **P1 认证诊断误报**：[#77687](https://github.com/openclaw/openclaw/issues/77687) (`openclaw doctor` 错误警告 SecretRef 不可用) 持续干扰用户部署排查，需要修复检查逻辑。

---

## 横向生态对比

以下是为您生成的 2026 年 5 月 29 日个人 AI 助手与自主智能体开源生态横向对比分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从被动对话向主动编排与多端协同跃升”**的关键重构期。以 OpenClaw 为首的头部项目正在经历底层架构的深度打磨，集中攻克并发上下文、长期记忆与跨平台异构接入的技术深水区。与此同时，生态内的多模态处理、企业级安全管控（如鉴权、沙箱）以及模型供应商解耦已成为行业刚需，整体呈现出**底层由少数核心框架主导，外围插件与通信渠道高度繁荣**的格局。

### 2. 各项目活跃度对比

| 项目名称 | Issues 动态 (新开/活跃) | PRs 动态 (待处理/已处理) | 版本发布情况 | 健康度与迭代阶段评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 402 (203 新开 / 199 关闭) | 500 (359 待合并 / 141 关闭) | 无新发版 (近期有 v5.27) | **极优/高活跃**：处于密集稳定性修复与模块提取重构期。 |
| **Hermes Agent** | 50 (37 新开 / 13 关闭) | 50 (44 待合并 / 6 关闭) | **v0.15.0 (大版本)** | **活跃/阵痛期**：发布史诗级更新，正高强度应对首发打包与兼容性回归。 |
| **CoPaw (QwenPaw)** | 43 (32 新开 / 11 关闭) | 39 (17 待合并 / 22 关闭) | 无新发版 | **优/高频迭代**：重心在桌面端体验优化，正规划 2.0 架构迁移。 |
| **IronClaw** | 50 (39 新开 / 11 关闭) | 45 (13 待合并 / 32 关闭) | 无新发版 | **优/重构期**：“Reborn”架构重构顺利，鉴权体系与企业渠道推进极快。 |
| **ZeroClaw** | 21 (新开占主力 / 1 关闭) | 50 (大量待合并 / 5 关闭) | 无新发版 (推演 Beta-2) | **高优开发/积压中**：集中攻坚多模型兼容与安全漏洞，待处理队列较高。 |
| **PicoClaw** | 6 (4 关闭) | 29 (大量待合并 / 8 关闭) | **v0.2.9-nightly** | **良/稳健迭代**：依赖升级频繁，聚焦边缘架构与底层存储性能优化。 |
| **Moltis** | 较少 (集中关闭 7 项) | 少量 (1 待合并 / 4 关闭) | 无新发版 | **优/质量巩固**：处于“清道夫”阶段，一次性集中清除了多个核心逻辑 Bug。 |
| **NanoClaw** | 11 动态 (新开 3 / 关闭 1) | 4 关闭 / 3 待合并 | 无新发版 | **良/架构演进**：聚焦自修改代理框架演进及多渠道安全加固。 |
| **NanoBot** | 11 (6 迅速关闭) | 19 (12 待合并 / 7 关闭) | 无新发版 | **良/底层重构**：核心并发安全修复及时，外围生态（WebUI/插件市场）呼声高。 |
| **NullClaw** | 较少 (关闭 2 项) | 6 (1 待合并 / 5 关闭) | 无新发版 | **良/稳步推进**：集中修复了长期存在的基础通道解析与并发挂起问题。 |
| **LobsterAI** | 较少 | 29 动态 (20 待合并 / 9 关闭) | 无新发版 | **良/功能集成**：专注专家套件生态建设与本地进程管理加固。 |
| **TinyAGI / ZeptoClaw**| 0 | 0 | 无 | **静默**：过去 24 小时无代码活动。 |

### 3. OpenClaw 在生态中的定位
*   **绝对的生态标杆与流量中心**：从 Issue 和 PR 的绝对数量（日交互近千级别）来看，OpenClaw 承载了最庞大的开发者基数和最复杂的工业级落地场景。
*   **技术路线差异**：相较于 IronClaw 的底层架构“推倒重来”和 Hermes 的大版本“跃进”，OpenClaw 展现出**“高并发响应 + 稳步模块化重构”**的稳健路线（如将网关剥离为独立包 `packages/gateway-client`）。
*   **优势对比**：其多通道接入成熟度（Telegram/飞书/A2A 等）和底层运行时的扩展性（如接入 GitHub Copilot runtime）远超 NanoBot、NullClaw 等专注于单一通信协议的轻量级项目。

### 4. 共同关注的技术方向
*   **企业级安全管控与鉴权（涉及 IronClaw, ZeroClaw, NullClaw, PicoClaw）**
    *   各项目正在密集修补 Webhook 安全、CSRF 防护、Token 生命周期管理（如 IronClaw 的 Google OAuth）以及容器防逃逸。安全设计正从“可选插件”变为“核心内建”。
*   **多模型降级与供应商解耦（涉及 ZeroClaw, CoPaw, NanoClaw, Hermes, PicoClaw）**
    *   随着单一厂商（如 Anthropic）封禁第三方客户端风险的加剧，以及 DeepSeek V4、MiniMax 等新模型 API 规范的变动，建立鲁棒的 Fallback 降级链、兼容 OpenAI 格式、支持 `cc-switch` 成为迫切需求。
*   **Agent 循环控制与上下文/记忆管理（涉及 OpenClaw, NanoBot, CoPaw, Hermes）**
    *   多个核心项目在今日集中修复了由于上下文截断、预算计算错误、死循环、沙盒阻断引发的 Agent Loop 挂起问题。精细化控制多轮对话的 Token 预算和引入自主反思循环是当前优化的核心。
*   **跨平台/异构终端的深度集成（涉及 IronClaw, CoPaw, NullClaw）**
    *   将智能体原生接入企业通讯软件（WeCom、飞书、Slack）并保证多模态图片体验的无损传输，正成为拉开项目 B 端竞争力的关键。

### 5. 差异化定位分析
*   **企业级全栈调度中心**：**IronClaw, OpenClaw**。目标用户为中大型团队与企业。具备完整的后台面板、细粒度权限控制（RBAC）、高可用架构和长上下文支持。
*   **个人/极客本地执行引擎**：**CoPaw, LobsterAI, NanoBot**。以桌面端 GUI 和本地化进程管理见长，强调与宿主机文件系统、本地终端工具链的无缝融合，适合知识工作者和独立开发者。
*   **多渠道轻量级桥接**：**NullClaw, Moltis**。架构相对较轻，重点解决将单一或多渠道（Discord、Telegram、微信）的高可用接入和消息协议解析，常作为轻量级私人助理部署。
*   **前沿自主智能体框架**：**Hermes, NanoClaw**。高度关注智能体的自我进化（如 NanoClaw 的自修改源码补丁能力）、A2A 协议及去中心化集成，受众为前沿 AI 研究者与自动化极客。

### 6. 社区热度与成熟度
*   **大规模重构与首发阵痛区**：**Hermes Agent**（刚发 v0.15.0）由于底层重写过大，正面临严重的打包缺失与挂起问题；**ZeroClaw** 同样在 Beta 版重构中遭遇安全策略失效。社区热度极高但需警惕生产环境部署风险。
*   **高速迭代与功能收敛期**：**OpenClaw, IronClaw**。合入率高，社区讨论不仅限于 Bug，已深入探讨 A2A、跨总线通信等高级架构，展现出极高的项目成熟度。
*   **质量打磨与清道夫阶段**：**Moltis, NullClaw, PicoClaw**。近期无激进功能发布，开发者集中精力清理技术债和修复边缘架构（如 RISC-V）的兼容性，代码库健康向好。

### 7. 值得关注的趋势信号
1.  **多智能体协作协议（A2A）呼之欲出**：Hermes 社区对 Google A2A 协议的强烈呼声（Issue #514），以及多个项目（如 NanoBot, NanoClaw）在跨 Agent 实例消息总线上的尝试，预示着单体大模型包打天下的时代正在过去，**基于协议的 Swarm（集群）架构**将是下半年的爆点。
2.  **意图识别与降本增效**：ZeroClaw 提出了**使用廉价模型进行高阶意图预检和路由**的策略。在旗舰模型 API 成本依旧高昂的背景下，“指挥官-工人” 模式在路由层的应用将成为工程优化的常态。
3.  **终端级宿主机控制回归**：Moltis 引入了基于 PTY/Tmux 的控制机制，LobsterAI 解决了孤儿进程查杀问题。这表明个人智能体正在重新重视**与本地操作系统的深度、安全且可控的交互**，而非仅局限于沙箱内执行。
4.  **长连接通道的精细化运营**：针对 WhatsApp、Telegram 和企业微信中出现的“群组/单聊上下文串台”和“消息重发”问题，说明各项目正在经历最复杂的多真实用户并发测试，通信层的健壮性将直接决定个人 AI 助理产品的留存率。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the daily dynamic report for the NanoBot project based on the provided data.

---

# NanoBot 项目动态日报 (2026-05-29)

## 1. 今日速览
NanoBot 今日维持了极高的开发与社区活跃度，展现出强大的项目生命力。过去 24 小时内，项目共处理了 11 条 Issue（其中 6 条被迅速关闭）和 19 条 PR（7 条已合并/关闭，12 条待处理）。社区不仅在高频修复底层并发与内存管理相关的核心 Bug，还在积极扩展生态标准（如 GitAgent Protocol）。整体来看，项目正处于“底层架构深度重构”与“外围生态高歌猛进”并行的健康阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要围绕**核心并发安全、系统重构与生态集成**，项目整体稳定性和扩展性得到了显著提升：
*   **核心并发与上下文安全修复**：PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 被快速合并，一次性修复了 5 个严重的并发和上下文预算 Bug（涉及 Session、Goal、Streaming 和 Context-budget），大幅提升了多会话场景下的系统鲁棒性。
*   **后台任务架构重构**：PR [#4023](https://github.com/HKUDS/nanobot/pull/4023) 将心跳服务重构为基于 Cron 的自动注册机制，减少了专用基础设施的依赖。
*   **生态协议支持**：PR [#4030](https://github.com/HKUDS/nanobot/pull/4030)（旧版）已被关闭，表明项目正在清理和评估对 GitAgent Protocol (GAP) 开放标准的支持路径。
*   **功能增强与安全**：合并了 PR [#3937](https://github.com/HKUDS/nanobot/pull/3937)（为危险命令引入用户确认机制）与 PR [#4015](https://github.com/HKUDS/nanobot/pull/4015)（Agent Loop 自循环的观察反思提示），同时新增了 Discord 模型切换指令支持 ([#4031](https://github.com/HKUDS/nanobot/pull/4031))。
*   **WebUI 工作空间**：PR [#4007](https://github.com/HKUDS/nanobot/pull/4007) 已经关闭，完成了 WebUI 项目工作空间和访问控制的基础代码拉取。

## 4. 社区热点
*   **第三方 WebUI 呼声极高**：Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922)（社区开发者构建的 `nanobot-webui` 面板）引发了大量关注，获得了 **10 个赞和 12 条评论**。这反映出社区对开箱即用的可视化管理面板（含实时聊天、配置和多用户支持）有着强烈需求。
*   **生态扩展探讨**：PR [#4034](https://github.com/HKUDS/nanobot/pull/4034) 和 [#4046](https://github.com/HKUDS/nanobot/pull/4046) 提出了 GitAgent Protocol 支持和外部扩展注册中心，正在等待官方核心团队的最终 Review，这可能预示着 NanoBot 即将拥有自己的插件/扩展市场生态。

## 5. Bug 与稳定性
今日报告了多个深度 Bug，其中一部分已得到极速修复，暴露出项目在高并发和复杂上下文处理上的技术挑战：
1.  **[严重] 并发任务互相覆盖与上下文截断**：包括队列覆写 ([#4036](https://github.com/HKUDS/nanobot/issues/4036))、共享上下文污染 ([#4037](https://github.com/HKUDS/nanobot/issues/4037))、流重试导致内容重复 ([#4038](https://github.com/HKUDS/nanobot/issues/4038))、上下文预算计算错误 ([#4039](https://github.com/HKUDS/nanobot/issues/4039)) 等。**状态：已通过 PR [#4041] 一并修复。**
2.  **[中等] Agent 短期记忆丢失**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) 报告了 Agent 在多轮对话中突然忘记刚刚问过的问题。原因推测为系统提示词占用过多导致上下文溢出。**状态：暂无修复 PR。**
3.  **[中等] API 调用报错（Tool Orphaned Results）**：Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006) 指出对话历史中遗留了没有配对的孤立 tool result，导致严格校验的 API（如 OpenAI）拒绝请求。**状态：暂无修复 PR。**
4.  **[低] 统一会话 Stop 失效**：Issue [#4040](https://github.com/HKUDS/nanobot/issues/4040) 提及在开启 `unified_session` 时 `/stop` 无法取消活动任务。**状态：已通过 PR [#4041] 修复。**

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR，可以看出项目未来的演进方向：
*   **外部扩展市场**：PR [#4046](https://github.com/HKUDS/nanobot/pull/4046) 提出了建立 `nanobot extension registry`，结合 WebUI 上下文窗口配置 ([#4045](https://github.com/HKUDS/nanobot/pull/4045))，暗示项目正朝着“高度可插拔+标准化配置”的方向演进。
*   **灵活的文档处理**：Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043) 建议增加配置项以禁用自动提取 Channel 中的文档。这表明部分高级用户希望在工作流中完全采用自有的 OCR/Docling 工具，要求项目提供更底层的控制权。
*   **跨 Agent 协作**：PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) 正在尝试引入跨 Agent 消息总线，这是走向多智能体协同的重要信号。
*   **隐私与权限控制**：PR [#4032](https://github.com/HKUDS/nanobot/pull/4032) 引入了 `AUTHORITY.md` 文件，用于为 Agent 设定高优先级的行为和道德约束，反映出项目对 AI 安全和对齐的重视。

## 7. 用户反馈摘要
*   **多渠道接入的痛点**：针对国内用户，微信接入存在单次最多返回 10 条消息的限制 ([#2772](https://github.com/HKUDS/nanobot/issues/2772))；钉钉群聊中多用户共用 Session 导致上下文混乱 ([#4016](https://github.com/HKUDS/nanobot/pull/4016))；Matrix 协议端到端加密在特定客户端报设备未验证警告 ([#4042](https://github.com/HKUDS/nanobot/issues/4042))。这些都表明大量真实用户正在将 NanoBot 接入各类异构通讯软件，并在生产环境中遇到边缘场景问题。
*   **特定模型提供商的兼容性**：Issue [#4017](https://github.com/HKUDS/nanobot/pull/4017) 提到小米 MiMo 等兼容 OpenAI 接口的模型会以纯文本格式返回 tool_calls，导致解析失败，反映出用户在替换底层模型提供商时仍面临细微的适配差异。

## 8. 待处理积压
以下重要 PR 和 Issue 悬而未决，建议核心维护者重点关注：
*   **[架构重构] Dream 记忆机制重写**：PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) 旨在用轻量级 cron 替换臃肿的两阶段 Dream 类，已提出数日，需尽快推进合并以防代码冲突。
*   **[核心修复] MCP 断线重连失效**：PR [#4027](https://github.com/HKUDS/nanobot/pull/4027) 修复了 `_mcp_connected` 状态永远不重置的致命错误，对于依赖 MCP Server 的用户至关重要，目前等待 Review。
*   **[新功能] 跨 Agent 实例通信**：PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) 是一个庞大且重要的功能变更，需要维护者进行仔细的架构评审以决定是否合入主干。
*   **[兼容性] WebUI 项目工作区**：PR [#4007](https://github.com/HKUDS/nanobot/pull/4007) 刚关闭（可能处于代码修改阶段），需持续跟进以完善前端的多项目管理体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

这里是 **Hermes Agent** 项目 2026 年 5 月 29 日的开源项目动态日报。

### 1. 今日速览
Hermes Agent 在过去 24 小时内迎来了史诗级的大版本更新，社区活跃度空前高涨。项目正式发布了 **v0.15.0 (The Velocity Release)**，涵盖了超过 1300 次提交和 747 个合并的 PR，标志着项目在底层架构和功能丰富度上迈出了重要一步。
然而，与许多大型重构版本一样，新版本发布首日暴露出一些关键的打包与兼容性回归问题（尤其是 PyPI 包缺失核心文件和 Docker 环境错误）。今日项目共处理了 50 个 Issues（新开/活跃 37，关闭 13）和 50 个 PR（待合并 44，合并/关闭 6），表明维护者正在高强度应对首发反馈，项目整体处于**极其活跃且快速迭代**的健康状态。

---

### 2. 版本发布
🔥 **Hermes Agent v0.15.0 (v2026.5.28) — The Velocity Release**
- **规模与统计**：自 v0.14.0 以来，共计 1,302 commits，747 merged PRs，修改了 1,746 个文件。社区贡献者达到 321 人。
- **修复与安全**：关闭了 560+ 个 Issues，其中包括 15 个 P0 级和 65 个 P1 级严重缺陷，以及 19 个安全标签问题。
- **⚠️ 破坏性变更与迁移注意**：由于体量巨大，本次更新包含多项底层重构，已发现的首日破坏性变更包括：PyPI 发布包缺失 `plugin.yaml` 导致插件系统集体失效，以及 Docker 中 TUI 和权限映射的严重故障。强烈建议企业用户在沙箱环境测试后再行升级。

---

### 3. 项目进展
今日共有 6 个 PR 被合并/关闭，主要聚焦在**多模型兼容性修复**和**平台底座重构**：
- **模型上下文精准度提升**：合并了 PR [#29745](https://github.com/NousResearch/hermes-agent/pull/29745)，针对 GitHub Copilot 模型，优先读取 `max_context_window_tokens` 而非旧版的 `max_prompt_tokens`，确保复杂任务的上下文窗口判断准确。
- **自定义 Provider 修复**：合并了 PR [#33765](https://github.com/NousResearch/hermes-agent/pull/33765)，修复了自定义 Provider 忽略 `api_mode` 的问题，使 Cron 和后台任务的 API 路由恢复正常。
- **Windows 平台健壮性**：合并了 PR [#33823](https://github.com/NousResearch/hermes-agent/pull/33823)，修复了 Windows 环境下网关重启时无法写入 `planned_stop_marker` 导致的异常回滚问题。

---

### 4. 社区热点
今日社区讨论最激烈的话题集中在**跨智能体协议**、**插件生态**与**首发故障排查**：
- **A2A 协议支持呼声高涨**：Issue [#514](https://github.com/NousResearch/hermes-agent/issues/514)（17 条评论，12 个 👍）提议集成 Google 的 A2A（Agent-to-Agent）协议。社区普遍认为 MCP（工具调用）与 A2A（智能体发现与协作）是未来趋势，这是构建多 Agent 网络的基础设施。
- **Kanban 数据库引发崩溃风波**：Issue [#33334](https://github.com/NousResearch/hermes-agent/issues/33334)（12 条评论）揭示了在处理大型任务时，Kanban 看板功能会导致数据库损坏和系统崩溃，多名用户在评论区确认了此问题。
- **PyPI v0.15.0 打包事故**：Issue [#34034](https://github.com/NousResearch/hermes-agent/issues/34034) 反映新版本 PyPI 包缺失 `plugin.yaml`，导致所有平台适配器（Discord、Telegram 等）无法加载，引起升级用户的广泛困扰。

---

### 5. Bug 与稳定性
今日报告了大量 P0-P2 级别的 Bug，尤其是围绕 v0.15.0 引发的回归问题：
- **🔥 P1 级：PyPI 包导致平台彻底瘫痪**
  - [Issue #34034](https://github.com/NousResearch/hermes-agent/issues/34034)：插件清单文件缺失。*状态：尚无修复 PR。*
- **🔥 P1 级：Anthropic 流式传输挂起**
  - [Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161)：在 `anthropic_messages` 模式下，流式清理错误地重建了 OpenAI 客户端，导致流卡死长达 15 分钟。*状态：尚无明确修复 PR。*
- **🔥 P2 级：安全脱敏机制破坏代码执行**
  - [Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801)：密钥遮蔽 `***` 逻辑在 `write_file` 和 `execute_code` 运行前触发，导致生成的 Python/Shell 代码因语法错误而静默失败。*状态：PR [#34131](https://github.com/NousResearch/hermes-agent/pull/34131) 正在尝试修复 RPC 线程上下文。*
- **⚠️ P2 级：Docker 容器 TUI 与权限映射错误**
  - [Issue #34091](https://github.com/NousResearch/hermes-agent/issues/34091)：Dashboard TUI 断连。
  - [Issue #34026](https://github.com/NousResearch/hermes-agent/issues/34026)：`docker_run_as_host_user: true` 模式下目录挂载错位至 `/root/`，导致 bundled skills 失效。

---

### 6. 功能请求与路线图信号
从本期活跃的 PR 和 Issues 中，可以窥见 Hermes 接下来可能整合的功能路线：
- **跨平台无缝对接**：PR [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) 与 PR [#30115](https://github.com/NousResearch/hermes-agent/pull/30115) 正在将 Zulip 纳入一级聊天平台支持，并引入 Svix 作为 Webhook 提供商，扩展 Agent 的外部感知能力。
- **复杂 Agent 循环的自愈能力**：PR [#34132](https://github.com/NousResearch/hermes-agent/pull/34132) 引入了 `ToolCallRepair` 机制，用于在模型输出被截断或陷入死循环时自动修复 JSON 并进行降级处理。
- **多模态与长上下文突破**：Issue [#34087](https://github.com/NousResearch/hermes-agent/issues/34087) 请求为 Vision 辅助调用解绑硬编码的 `max_tokens`（从 2k/4k 扩展至如 MiMo 2.5 的 130K），以适应新一代大模型。

---

### 7. 用户反馈摘要
- **痛点 1：版本升级体验割裂**。用户（如 `prefad`, `cexpnull`）反映，升级到 v0.15.0 后，由于底层脱敏机制变更、PyPI打包遗漏和 Docker 挂载错位，原本稳定运行的技能和对话界面直接报错，开发者体验受损。
- **痛点 2：网关与 CLI 的稳定性**。用户（如 `daniij`）反馈在执行 `/new`, `/clear` 等基础命令时终端完全卡死。此外，通过 VPN/Tailscale 访问 Dashboard 仍存在跨域限制痛点（[Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567)）。
- **正面反馈与期待**：社区对 Kanban 看板寄予厚望，大量用户正在尝试将其作为复杂多步骤任务的调度中心，但受限于上下文丢失（[Issue #24699](https://github.com/NousResearch/hermes-agent/issues/24699)）和僵尸进程问题（[Issue #28181](https://github.com/NousResearch/hermes-agent/issues/28181)），用户期待数据库并发的重构。

---

### 8. 待处理积压
以下长期未得到根本解决的高优问题需要核心维护团队关注：
- **A2A 协议集成 ([Issue #514](https://github.com/NousResearch/hermes-agent/issues/514))**：开放数月，诉求极高，属于架构级提案，亟待官方确认技术路线。
- **Cron 任务系统健壮性缺失 ([Issue #18722](https://github.com/NousResearch/hermes-agent/issues/18722))**：定时任务在极端情况下的静默跳过与崩溃问题，严重依赖 Cron 进行自动化的重度用户深受其扰。
- **Mattermost 移动端兼容性 ([Issue #25184](https://github.com/NousResearch/hermes-agent/issues/25184))**：由于移动端限制发送 `/` 开头的命令，Hermes 在该平台上处于事实上的不可用状态，长达半个月未获修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持着**高度活跃且健康的开发状态**。项目于昨日自动化发布了 `v0.2.9` 的 nightly 构建版本，持续进行迭代。社区互动热度显著回升，共有 6 个 Issue 得到更新（其中 4 个被顺利关闭），同时在 PR 看板上有高达 29 个 PR 产生了动态。从提交类型来看，项目当前正处于**依赖大范围升级、核心稳定性修复以及新 Provider 扩展**的并行推进期。特别值得注意的是，安全性和底层存储稳定性的增强成为了近期代码贡献的重点方向。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.9-nightly.20260528.28ec5793](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新内容**：基于 `main` 分支的自动构建，涵盖近期的所有代码提交。
  - **破坏性变更/迁移注意**：官方提示此为自动化的 Nightly 版本，可能存在不稳定性，不建议直接用于生产环境。如需体验最新功能，请谨慎部署。

## 3. 项目进展
在过去 24 小时内，共有 8 个 PR 被合并或关闭，推动了多项核心功能演进和依赖更新：
- **依赖大版本升级落地**：依赖机器人成功关闭了多项旧的升级 PR，并开启了新一轮更新，主要包括：飞书 SDK (`oapi-sdk-go`) 升级至 `v3.9.3` ([PR #2963](https://github.com/sipeed/picoclaw/pull/2963))，Anthropic SDK 升级至 `v1.46.0` ([PR #2962](https://github.com/sipeed/picoclaw/pull/2962))。同时前端也进行了 React 19.2.6 及相关 UI 组件库的升级。
- **核心存储与稳定性修复（贡献者 @SiYue-ZO）**：合并了多个关键修复，包括：修复 JSONL 会话索引热路径克隆的性能损耗 ([PR #2913](https://github.com/sipeed/picoclaw/pull/2913))、修复崩溃后 JSONL 存储元数据偏移问题 ([PR #2907](https://github.com/sipeed/picoclaw/pull/2907))、以及修复 Provider 容灾降级逻辑中的过期上下文处理 ([PR #2905](https://github.com/sipeed/picoclaw/pull/2905))。
- **安全防线加固**：[PR #2900](https://github.com/sipeed/picoclaw/pull/2900) 成功合并，为 Web 后端增加了 CSRF 保护、路径穿越校验以及安全响应头，大幅提升了面板的安全性。
- **执行引擎健壮性**：[PR #2858](https://github.com/sipeed/picoclaw/pull/2858) 合并，修复了 `exec` 安全策略错误拦截合法 Markdown 引号 heredoc 语法的问题。

## 4. 社区热点
- **[Issue #1738](https://github.com/sipeed/picoclaw/issues/1738)** [已关闭]：关于添加 OpenAI API 格式 Channel 支持的 Feature Request。该需求允许将 PicoClaw 作为独立能力无缝嵌入到现有工程中。经过社区讨论，目前已得到解决或实现。
- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)** [进行中]：RISC-V 架构下的 Debian 包配合 GPT-5.4 模型出现功能异常。该贴引发了高达 7 条评论的讨论，说明边缘计算平台（RISC-V）用户的接入和兼容性测试是当前社区关注的痛点。
- **[Issue #2916](https://github.com/sipeed/picoclaw/issues/2916)** [进行中]：关于 CPU、内存和 IO 的深度优化建议。开发者 @corporatepiyush 对源码架构进行了深入拆解并提出了全盘优化方案，引发了关于底层 I/O 模式的探讨。

## 5. Bug 与稳定性
- **⚠️ 高优：边缘架构环境运行异常**
  - Bug 详情：[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) - 在 RISC-V 设备的 Debian 环境下，调用 OpenAI 模型无法正常工作。
  - 状态：目前仍为 Open 状态，需要开发团队进一步确认是否为底层依赖（Go 1.25.9）在 RISC-V 上的交叉编译/兼容问题。
- **⚠️ 中优：特定移动/容器环境 HTTPS 证书劫持失效**
  - Bug 详情：[Issue #2944](https://github.com/sipeed/picoclaw/issues/2944) - 在 Termux 环境下出现 X509 证书错误。
  - 状态：已确认**已有修复方案**。问题根因是 Go 二进制无法定位系统的 CA 损坏包，通过显式设置 `SSL_CERT_FILE` 可解决。
- **⚠️ 中优：富媒体消息流中断**
  - Bug 详情：[Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) - 现有的 Message tool 仅支持纯文本，导致原生支持图文的 Channel 被迫将图文拆分为两次发送，引发逻辑割裂。
  - 状态：Issue 已关闭，表明该需求已在最近的 PR 中得到关注或纳入重构计划。

## 6. 功能请求与路线图信号
- **新 Provider 扩展火热**：开源社区正在积极为 PicoClaw 贡献大模型适配，目前已有引入 **NEAR AI Cloud** ([PR #2917](https://github.com/sipeed/picoclaw/pull/2917)) 的待合并 PR，这表明项目正在成为一个多模态、多后端协议的统一网关。
- **国产模型多模态增强**：贡献者提交了针对 **MiMo Provider** 的适配 PR ([PR #2915](https://github.com/sipeed/picoclaw/pull/2915))，重点加入了 `mimo-v2.5` 的视觉理解模型配置。这释放出信号：下一版本中，WebUI 对多模态（尤其是图像理解）的原生模型推荐体验将大幅提升。
- **财务与运营**：[Issue #2912](https://github.com/sipeed/picoclaw/issues/2912) 提出了添加 `FUNDING.yml` 的建议，反映了社区对项目可持续发展的认可与支持意愿。

## 7. 用户反馈摘要
- **真实痛点：异构环境部署门槛较高。** RISC-V 和 Termux 环境的用户接连遇到模型通信（如 SSL 校验错、架构不兼容）问题，反映出 PicoClaw 对标准 Linux x86/ARM 环境之外的适配（特别是依赖库路径的自动寻址）还有提升空间。
- **真实痛点：多模态交互不够顺滑。** 用户期望 PicoClaw 在对接各大聊天平台（Channel）时，能像人类发消息一样“图文合一”，而不是拆分成文本工具和媒体工具分开调用。
- **满意点：高扩展性。** 多位开发者能够基于现有的 Provider 机制快速接入 NEAR AI 和 MiMo 协议，证明了 PicoClaw 良好的架构抽象和开发者友好度。

## 8. 待处理积压
目前有 **21 个待合并的 PR** 处于 Open 状态，其中包含大量由 `dependabot` 触发的依赖更新（如 [PR #2924](https://github.com/sipeed/picoclaw/pull/2924), [PR #2926](https://github.com/sipeed/picoclaw/pull/2926)）处于 `stale` 状态。建议维护团队：
1. **集中清理前端依赖**：将 `/web/frontend` 下零散的 React、UI库、Router 升级进行合并测试并批量关闭。
2. **关注重要功能 PR**：[PR #2913](https://github.com/sipeed/picoclaw/pull/2913) (JSONL索引性能优化) 和 [PR #2908](https://github.com/sipeed/picoclaw/pull/2908) (WebUI Provider Logo回退渲染) 已经停留数日，建议优先进行 Code Review，以保障即将到来的 `v0.3.0` (或正式版 `v0.2.9`) 的发布质量。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
NanoClaw 在过去 24 小时内维持了极高的开发与社区活跃度。项目共处理了 11 条 Issue 与 PR 动态（新开 3 个 Issue，关闭 1 个，PR 待合并 3 个，合并/关闭 4 个），涵盖了核心安全加固、跨平台集成以及自修改代理框架的重要演进。安全修复与 WhatsApp 渠道的稳定性修复成为今日的重点，这反映了项目在多渠道扩展和本地部署安全方面的持续投入。整体来看，项目迭代节奏健康，开发者对社区反馈的响应非常迅速。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，推动了多项核心功能的完善和历史遗留问题的清理：

*   **核心依赖升级与破坏性变更处理 (PR [#2637](https://github.com/nanocoai/nanoclaw/pull/2637))**：已关闭。将底层 `claude-code` CLI 升级至 2.1.154，`claude-agent-sdk` 升级至 0.3.154。特别值得注意的是，SDK 0.3 版本将 `@anthropic-ai/sdk` 等核心依赖转为 peer dependencies，该 PR 及时跟进调整了直接依赖声明，确保后续构建不会崩溃。
*   **Agent 自主修改框架扩展 (PR [#2635](https://github.com/nanocoai/nanoclaw/pull/2635))**：已关闭。引入了 `patch_bridge` 动作，允许 AI 智能体（如 Pero）自主提出针对宿主机 `taskosaur-mcp` 桥接源码的修复补丁。这标志着 NanoClaw 在 Agent 自治和自我进化能力上迈出了重要一步。
*   **Notion 集成技能 (PR [#102](https://github.com/nanocoai/nanoclaw/pull/102))**：已关闭。这是一个社区等待已久的集成，通过 MCP server 实现了 Agent 对 Notion 页面和数据库的读写操作。
*   **跨群组定时任务修复 (PR [#5](https://github.com/nanocoai/nanoclaw/pull/5))**：已关闭。修复了主群组为 target_group 设定定时任务时 chat_jid 错误的底层 IPC 逻辑漏洞。

## 4. 社区热点
今日最受关注的讨论依然是关于项目底层支持的广度问题：
*   **多运行时与供应商支持诉求 (Issue [#80](https://github.com/nanocoai/nanoclaw/issues/80))**：该 Issue 今日再次活跃并最终关闭。该请求（👍 高达 60 次，评论 34 条）呼吁项目不仅限于 Claude/Anthropic，还应支持 OpenCode、Codex、Gemini 等运行时。讨论中提到 Anthropic 已经开始封禁使用 OpenClaw 等第三方客户端的账户，这促使项目和社区认真考虑底层模型供应商的抽象与解耦，以规避单点供应商风险。

## 5. Bug 与稳定性
今日暴露了几个关键渠道和基础设施层面的 Bug：

*   **[高危] WhatsApp 1-on-1 误触发问题 (Issue [#2638](https://github.com/nanocoai/nanoclaw/issues/2638))**：在 WhatsApp 非群聊场景下，如果有第三方人类参与，`engage_mode=mention` 会错误地将对话识别为与机器人的 DM，导致机器人每条消息都强制触发。
    *   *状态*：暂无关联 Fix PR。
*   **[高危] WhatsApp 配对会话自毁与认证擦除 (PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633))**：在 Baileys 7.x 配合特定环境变量使用时，适配器存在结构性 Bug 导致自毁和认证信息被清空。
    *   *状态*：已有开源 PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633) 等待合并。
*   **[中危] 会话管理器目录穿越风险 (PR [#2630](https://github.com/nanocoai/nanoclaw/pull/2630))**：Inbound attachment sink 存在通过符号链接逃逸 `inbox` 目录的限制风险。
    *   *状态*：已有安全加固 PR [#2630](https://github.com/nanocoai/nanoclaw/pull/2630) 等待合并。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以清晰看到项目正在向企业级安全和多渠道基础设施方向扩展：
*   **基础设施密钥安全管理 (Issue [#2636](https://github.com/nanocoai/nanoclaw/issues/2636))**：用户请求在 MCP 服务器生成时注入 OneCLI 凭证。这表明用户正在将 NanoClaw 部署到更严格的企业级生产环境中，对动态密钥管理提出了更高要求。
*   **云服务代理集成 (PR [#2634](https://github.com/nanocoai/nanoclaw/pull/2634))**：新增了 AWS 凭证代理守护进程的集成技能。一旦 Issue #2636 和 PR #2634 合并，NanoClaw 在多云和私有化部署中的安全性和便捷性将大幅提升。
*   **多智能体/集群架构演进 (Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632))**：开发者在确认 v2 版本中 Telegram agent-swarm 的状态。结合今天合并的 Agent 自主修改框架 (PR #2635)，项目正在从一个单机 AI 助手向复杂的多智能体协同集群演进。

## 7. 用户反馈摘要
*   **核心痛点（账号风险）**：在 Issue #80 中，用户集中表达了对单一 LLM 供应商（Anthropic）封号策略的担忧，构建多模型支持已成为刚需。
*   **使用场景深化**：PR #102 表明用户强烈需要将 NanoClaw 的能力接入外部办公流（如 Notion）。
*   **痛点（通信渠道稳定性）**：基于 Issue #2638 和 PR #2633，WhatsApp 作为重要渠道，其群组/单聊上下文识别机制和底层长连接稳定性目前是用户遇到阻碍最多的地方。

## 8. 待处理积压
*   **安全与稳定性修复亟待 Review**：针对 WhatsApp 严重 Bug 的修复 [PR #2633](https://github.com/nanocoai/nanoclaw/pull/2633) 以及安全加固 [PR #2630](https://github.com/nanocoai/nanoclaw/pull/2630) 目前均处于 Open 状态，建议维护者高优进行 Code Review 并合入主线，以防用户生产环境受损。
*   **架构解耦/跨时代升级指引缺失**：关于 Telegram 集群架构迁移的疑问 [Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632) 需要核心维护者尽快给出明确的 v1 到 v2 迁移路径说明。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 2026 年 5 月 29 日 NullClaw 项目动态日报。

---

# NullClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体呈现出**极高的维护活跃度与显著的项目推进**。今日共处理了 6 个 Pull Requests（其中 5 个已合并/关闭，1 个待合并）并成功关闭了 2 个历史遗留的 Bug。虽然没有发布新版本，但维护团队集中合并了多项重要更新，涵盖底层系统兼容性修复、API 供应商扩充以及核心安全加固。整体来看，项目处于极其健康的快速迭代期，正为下一个大版本做扎实的代码积累。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日共有 5 个关键 PR 被合并或关闭，1 个大型 PR 正在推进中，项目在稳定性、扩展性和安全性上取得了实质性进展：

*   **核心通道 Bug 修复 (PR [#924](https://github.com/nullclaw/nullclaw/pull/924))**：由 raskevichai 提交，修复了 Telegram 配置失效的底层解析问题（关闭了 #869 和 #901）。该修复合并意味着长久以来影响 Telegram 用户的配置读取问题被彻底解决。
*   **新 AI 供应商支持 (PR [#922](https://github.com/nullclaw/nullclaw/pull/922))**：合并了由 PierreLeGuen 贡献的代码，新增了对 **NEAR AI Cloud** 和 **Atlas Cloud** 作为 OpenAI 兼容供应商的支持，为用户提供了更多的模型接入选择。
*   **底层系统级并发修复 (PR [#878](https://github.com/nullclaw/nullclaw/pull/878))**：由 vernonstinebaker 贡献。针对 POSIX 系统修复了 `thread.sleep` 的挂起机制（改用真实的 `nanosleep`），这显著提升了 NullClaw 在多线程环境下的稳定性和调度准确性。
*   **Webhook 与安全加固 (PR [#907](https://github.com/nullclaw/nullclaw/pull/907))**：由 racribeiro 提交，移除了不安全的凭证传输方式，并强制要求 Telegram/Discord 等通道配置信任列表。此举大幅提升了个人 AI 助手在暴露于公网时的安全性。
*   **构建系统兼容 (PR [#887](https://github.com/nullclaw/nullclaw/pull/887))**：修复了使用 Zig v0.16 版本在 Windows/Linux 上的构建问题，保障了开发者的编译体验。
*   **待合并的大型功能 (PR [#783](https://github.com/nullclaw/nullclaw/pull/783))**：由 yanggf8 提交的 Cron 定时任务子智能体引擎（包含历史记录、JSON 输出和安全加固）仍在 Open 状态，目前正在做最后的迭代，预计合并后将大幅增强智能体的自动化调度能力。

## 4. 社区热点
今日讨论与反应最集中的区域是 **Telegram 配置失效问题**及其对应的修复 PR：
*   **热点 Issue**: [#869](https://github.com/nullclaw/nullclaw/issues/869) 和 [#901](https://github.com/nullclaw/nullclaw/issues/901)
*   **诉求分析**：多位用户反馈在 `config.json` 中正确配置了 Telegram，但通道始终显示 "not configured"。这暴露出用户在接入消息通道时的核心痛点：**类型推断的隐蔽性**。由于 Telegram API 返回的用户 ID 是纯数字，用户很容易将其作为数字类型（而非字符串）写入配置，从而导致底层的校验直接将其丢弃。PR [#924](https://github.com/nullclaw/nullclaw/pull/924) 针对此痛点给出了完美的修复（兼容数字类型），获得了积极的反馈。

## 5. Bug 与稳定性
今日关闭了 2 个重要 Bug，无新开 Bug：
*   **[已解决] Telegram 通道配置加载失败 ([#901](https://github.com/nullclaw/nullclaw/issues/901), [#869](https://github.com/nullclaw/nullclaw/issues/869))**：
    *   *严重程度*：高（导致核心通信通道不可用）。
    *   *状态*：已由 PR [#924](https://github.com/nullclaw/nullclaw/pull/924) 修复并关闭。该问题源于底层解析器无法容忍 `allow_from` 列表中的纯数字项。

## 6. 功能请求与路线图信号
从近期的 PR 活动中，可以清晰地看出 NullClaw 的下一步演进路线图：
1.  **多模态/多平台接入扩展**：NEAR AI Cloud 和 Atlas Cloud 的接入（[#922](https://github.com/nullclaw/nullclaw/pull/922)）表明项目正在积极兼容更多新兴的去中心化或高算力 AI 供应商。
2.  **深度自动化（Agent 调度）**：待合并的 Cron 子智能体引擎（[#783](https://github.com/nullclaw/nullclaw/pull/783)）释放了一个强烈信号：NullClaw 正从一个“被动响应的聊天机器人”向“主动执行定时任务的个人智能体”演进。
3.  **安全零信任架构**：从 PR [#907](https://github.com/nullclaw/nullclaw/pull/907) 可以看出，项目在安全层面正在收紧，强制身份校验和去除明文凭证将成为下一版本的默认标准。

## 7. 用户反馈摘要
从今日关闭的 Issues 和 PRs 提取的用户真实反馈如下：
*   **配置体验摩擦**：用户（如 NOTJuangamer10）对于“配置文件语法正确但底层静默忽略”感到困惑（如数字与字符串的区别）。建议未来在 CLI 层面增加更强的 Schema 校验和友好的 Warning 报错，而不是静默失败。
*   **本地部署与集成**：用户对本地运行的个人助手需求旺盛，特别是在 Webhook 安全对接外部通讯软件（如 Telegram/Discord）时，对稳定性的要求极高。

## 8. 待处理积压
*   **待定的大型功能 PR**: PR [#783](https://github.com/nullclaw/nullclaw/pull/783) (feat(cron))。该 PR 自 4 月 7 日开启至今已近 2 个月，昨日有更新活动。鉴于其包含大量底层重构（DB-backed scheduler, worker 等），**建议维护者重点进行代码审查与集成测试**，尽早合并以避免后续产生严重的合并冲突。
*   **版本发布节奏**: 距离上一次版本发布已有一定时间，且目前主分支已积累了大量的 Bugfix 和重要 Feature。**建议维护者评估发布 Release Candidate (RC) 版本的可行性**，以便更广泛地测试新的 Cron 引擎和 Zig 0.16 构建系统。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-05-29)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日保持**极高活跃度与健康的研发节奏**，过去 24 小时内共产生 50 条 Issue 更新（新开/活跃 39，关闭 11）和 45 条 PR 更新（待合并 13，已合并/关闭 32）。核心开发团队正全力推进代号为 **"Reborn"** 的底层架构重构与生产级鉴权体系建设，多个重量级（XL）PR 今日顺利合入主线。此外，新集成的企业通讯渠道（WeCom）正经历密集的实战验证，暴露出若干多媒体处理与 UX 问题，反映出项目正处于“功能大步迈进 + 早期集成测试打磨”的双线并行阶段。整体来看，项目合入率高，核心模块拆解思路清晰，代码库健康度向好。

---

## 2. 版本发布

**无新版本发布。**
当前项目仍处于密集的功能迭代与 `reborn-integration` 分支集成阶段，预计相关重量级 PR（如 WebChat v2 SSO、IronHub 工具市场等）稳定后将会释出新的正式版本。

---

## 3. 项目进展

今日共有 **32 个 PR 被合并或关闭**，核心进展集中在**智能体循环控制、工具链优化、鉴权重构和新渠道接入**四个维度：

*   **🤖 智能体循环与内核重构：**
    *   [PR #4207](https://github.com/nearai/ironclaw/pull/4207)：解决了一个关键问题，使智能体的最终回复能被确定性接纳，避免无限循环或无效历史回显。
    *   [PR #4196](https://github.com/nearai/ironclaw/pull/4196)：暴露了工作摘要的投影机制，提升了 Reborn 实时驱动进度在产品端的可见性。
    *   [PR #4177](https://github.com/nearai/ironclaw/pull/4177)：重构了上下文压缩任务为类型化的管道阶段，提升了内核的数据处理鲁棒性。

*   **🛠️ 开发者工具与体验优化：**
    *   [PR #4189](https://github.com/nearai/ironclaw/pull/4189) & [PR #4199](https://github.com/nearai/ironclaw/pull/4199)：彻底修复并简化了 `apply_patch` 的匹配语义，解决了写文件后立即打补丁失败的关键痛点。
    *   [PR #4210](https://github.com/nearai/ironclaw/pull/4210)：将无效的工具输入归类为“模型错误”，优化了错误恢复链路。
    *   [PR #4208](https://github.com/nearai/ironclaw/pull/4208)：增强了内置 HTTP 工具输入的诊断与校验能力。

*   **🔐 生产级鉴权体系：**
    *   [PR #4182](https://github.com/nearai/ironclaw/pull/4182)：完成了 WebChat v2 原生的 Google OAuth 登录接入（含 PKCE、CSRF 防护）。
    *   [PR #4174](https://github.com/nearai/ironclaw/pull/4174)：实现了完整的 Google OAuth refresh token 生命周期管理。
    *   [PR #4168](https://github.com/nearai/ironclaw/pull/4168)：清理并加固了鉴权门的解析逻辑。

*   **📦 架构治理与文档建设：**
    *   [PR #4200](https://github.com/nearai/ironclaw/pull/4200)：新增了核心的 Reborn 智能体架构设计文档，为社区开发者理清了边界。
    *   [PR #4190](https://github.com/nearai/ironclaw/pull/4190)：重构了本地开发的 Skill（技能）管理挂载逻辑。

---

## 4. 社区热点

今日讨论度最高的问题集中在**安全机制设计**与**架构演进方向**：

1.  **安全凭证注入机制审视 ([Issue #3917](https://github.com/nearai/ironclaw/issues/3917), 👍: 0, 评论: 4)**
    核心贡献者 `zmanian` 发起讨论，质疑是否应当移除或加固 `PathPlaceholder`。由于路径注入存在天然的高泄露风险，社区正在评估是否在 Reborn 正式发布前砍掉这一凭证通道。
2.  **Reborn 生产级鉴权落地路径 ([Issue #4176](https://github.com/nearai/ironclaw/issues/4176), 评论: 3)**
    贡献者 `henrypark133` 深入梳理了将第一方应用、WASM 和 MCP 消费者路由到新鉴权体系的实施方案，明确了 token 生命周期的管理边界。
3.  **底层模块拆解与治理 ([Issue #4209](https://github.com/nearai/ironclaw/issues/4209))**
    针对单文件突破 1800 行的架构红线问题，发起了对 `host_runtime` 的拆分提案，显示出该团队对代码可维护性的严格把控。
4.  **飞书渠道接入突破 ([PR #4178](https://github.com/nearai/ironclaw/pull/4178))**
    提交了针对飞书的长连接 WebSocket 事件接入实现，标志着 IronClaw 正式向国内主流办公生态延展触角。

---

## 5. Bug 与稳定性

新集成的 **WeCom (企业微信) 渠道**在今日迎来了集中实战测试，由测试者 `sunglow666` 提交了一系列缺陷报告，目前均未产生修复 PR：

*   **[严重] 视觉分析读取错误/过期图片 ([Issue #4197](https://github.com/nearai/ironclaw/issues/4197))**
    *   **现象：** 上传图片后，AI 分析的是历史遗留的无关截图，而非当前附件。
*   **[严重] 图片附件传输极不稳定 ([Issue #4195](https://github.com/nearai/ironclaw/issues/4195))**
    *   **现象：** 部分图片丢失、无响应，特别是 iPhone 的 HEIF 格式或大尺寸图片极易失败。
*   **[中等] 群聊与私聊会话合并问题 ([Issue #4194](https://github.com/nearai/ironclaw/issues/4194))**
    *   **现象：** WeCom 中隔离的群聊和单聊，在 IronClaw Web 后台被错误地合并到了同一个会话线程中。
*   **[低] 未经配对用户可见度模糊 ([Issue #4198](https://github.com/nearai/ironclaw/issues/4198))**
    *   **现象：** 群聊中未配对的用户触发机器人时，管理者后台无法看到相应记录。

---

## 6. 功能请求与路线图信号

结合用户诉求与活跃 PR，以下是潜在的下一步演进重点：

*   **WebChat v2 SSO 完善：** 随着谷歌登录合入，[Issue #4204](https://github.com/nearai/ironclaw/issues/4204) 明确提出下一步将接入 GitHub 和 NEAR 钱包登录。
*   **会话管理能力补齐：** 用户呼吁已久的 [Issue #1907](https://github.com/nearai/ironclaw/issues/1907)（请求增加删除对话/线程功能）再次产生活跃讨论，作为基础体验补齐，有望在近期排期。
*   **异步网络架构升级：** [Issue #4206](https://github.com/nearai/ironclaw/issues/4206) 提议将 HTTP egress 全链路异步化，这将是提升智能体并发执行效率的底层关键改动。
*   **IronHub 工具生态上线：** 巨型特性 [PR #3737](https://github.com/nearai/ironclaw/pull/3737) 正在等待合并，它将赋予 AI 在运行时直接从 IronHub 安装和调用技能的能力。

---

## 7. 用户反馈摘要

*   **企业级多渠道接入呼声强烈：** WeCom 的集中测试和 Feishu 飞书 PR 的提出，反映出 B 端用户对于将 AI 智能体无缝接入企业现有通讯架构（钉钉、企微、飞书）的迫切需求。
*   **多模态处理仍是痛点：** Issue 反馈表明，在复杂通讯软件场景下，不同格式（特别是私有格式如 HEIF）的图片上传、解析与上下文关联依然脆弱，稳定性亟待提升。
*   **产品引导不足：** [Issue #4193](https://github.com/nearai/ironclaw/issues/4193) 指出企微渠道配置缺乏向导，B 端管理员在面对 Bot ID 和 Secret 时容易迷失，说明 ToB 产品的 Onboarding 体验需要优化。

---

## 8. 待处理积压

*   **巨型特性 PR 需重点攻坚：** [PR #3737](https://github.com/nearai/ironclaw/pull/3737) (IronHub 运行时工具安装) 和 [PR #4184](https://github.com/nearai/ironclaw/pull/4184) (可视化 Diff 预览) 体积庞大（XL），且牵涉底层架构，长期停留在 Open 状态，需要集中 Review 资源推进合入。
*   **基础 UI 功能缺失：** [Issue #1907](https://github.com/nearai/ironclaw/issues/1907)（请求增加删除对话/线程功能）自 4 月初提出至今未解决，随着新渠道（如 WeCom）的接入，会话管理负担将加重，建议优先排期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-05-29 动态日报：

# 📡 LobsterAI 项目动态日报 (2026-05-29)

## 1. 今日速览
过去 24 小时，LobsterAI 项目保持了**极高的开发活跃度**与迭代速度。虽然今日无新版本发布，但产出了高达 **29 项 PR 更新**，其中 9 项核心 PR 被合并或关闭，另有多达 20 项 PR 待合并。项目当前的重点聚焦于**插件/专家套件生态建设、系统底层稳定性修复及状态管理优化**。整体来看，项目处于健康且快速生长的阶段，主分支代码正在为下一次重大版本发布进行密集的功能集成与打磨。

## 2. 版本发布
- **无新版本发布**。今日未观测到新的 Release tag 或版本更新。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，核心进展集中在**扩展性增强**与**渲染层/状态管理优化**，整体产品成熟度显著提升：
- **专家套件商店全面落地**：[#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) 成功合并，标志着 LobsterAI 正式引入 Kit（专家套件）概念，实现了多 Skill 打包、一键安装、对话集成及商店 UI，大幅提升了个人 AI 助手的能力分发效率。
- **插件更新机制与写入性能优化**：[#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) 增加了针对 npm 和 clawhub 源的手动更新检查功能；[#2068](https://github.com/netease-youdao/LobsterAI/pull/2068) 重构了插件配置的保存逻辑，通过防抖和脏数据守护减少了不必要的网关重启，提升了系统流畅度。
- **渲染与交互修复**：[#2070](https://github.com/netease-youdao/LobsterAI/pull/2070) 修复了任意工具输出被错误识别为图片路径的 Bug；[#2067](https://github.com/netease-youdao/LobsterAI/pull/2067) 解决了 Kit 跳转后未能成功转换为 skills 的状态丢失问题；[#2061](https://github.com/netease-youdao/LobsterAI/pull/2061) 支持了输入框中图片附件的点击大图预览。
- **底层进程管理加固**：[#2066](https://github.com/netease-youdao/LobsterAI/pull/2066) 彻底修复了 Windows 环境下 stdio 进程树无法被完全杀死（遗留孤儿进程）的痛点问题。

## 4. 社区热点
- **Agent 数据复活问题引发关注**：今日 [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065)（及其关联的前序 PR [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584)）引起了广泛讨论。当前 Agent ID 基于名称生成，导致用户删除同名 Agent 后重新创建时，本地旧数据会“复活”。开发者正在使用短 UUID 替代方案来解决此问题，这反映了社区对**本地数据隔离与文件系统管理**的严苛要求。
- **企业级自动化与扩展诉求初现端倪**：待合并的长效 PR 中包含大量高价值特性，如 Gmail 邮件触发器（[#1484](https://github.com/netease-youdao/LobsterAI/pull/1484)）、主模型故障自动转移（[#1483](https://github.com/netease-youdao/LobsterAI/pull/1483)）等，展现了项目向自动化智能体演进的强烈信号。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及任务调度和 UI 状态残留，整体严重程度中等，但影响核心体验：
1. **【高优】定时任务创建异常**：
   - 状态：新开 Issue
   - 描述：用户反馈在 2026.5.27 版本中创建定时任务时发生错误（Issue [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071)）。
   - 进展：暂无关联 fix PR，需官方介入排查。
2. **【中优】定时任务编辑覆盖缺陷**：
   - 状态：活跃 PR（待合并）
   - 描述：编辑定时任务时，描述信息会被硬编码清空，启用状态被强制覆盖（PR [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482)）。
3. **【中优】技能与草稿状态残留**：
   - 状态：活跃 PR（待合并）
   - 描述：包含 Kit 详情页跳转导致技能丢失（[#2067](https://github.com/netease-youdao/LobsterAI/pull/2067)，已合并修复）、切换 Agent 时输入框草稿未清空（[#1707](https://github.com/netease-youdao/LobsterAI/pull/1707)）等由于全局状态管理引发的问题。

## 6. 功能请求与路线图信号
从近期活跃的 PR 管线中，可以提炼出项目近期的演进路线图信号：
- **UX 现代化重构**：定时任务模块正在经历全面的 UI 升级，从传统的表格布局转向卡片网格布局，并加入高级搜索与历史分组（见 PR [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488)），预计将在下个版本实装。
- **无障碍与多模态交互**：社区正在推进 AI 回复消息的朗读功能，基于零依赖的 Web Speech API 实现（见 PR [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682)）。
- **高可用性架构**：模型级的故障自动转移机制（[#1483](https://github.com/netease-youdao/LobsterAI/pull/1483)）提上日程，表明项目正在向“生产级可用”的对齐，降低单点故障带来的业务中断风险。

## 7. 用户反馈摘要
- **痛点**：从 Issues 反馈来看，用户在“定时/自动化任务”模块遇到的阻碍较多（如创建报错、编辑丢失数据），这提示该模块的边界条件测试可能不够充分。
- **场景诉求**：用户高度依赖本地文件作为上下文，但目前 Agent 的删除与本地数据清理机制不完善（如 [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 暴露的本地工作区清理遗漏问题），导致用户产生“数字垃圾”担忧。

## 8. 待处理积压
项目存在较多高价值但长期未合并的 `[stale]` PR，建议维护团队进行一轮集中的代码审查与里程碑规划：
- **内存泄漏积压**：[#1478](https://github.com/netease-youdao/LobsterAI/pull/1478)（CopyButton 定时器未清理）已停滞近两个月，此类问题会在长期挂机使用中逐渐拖慢应用性能。
- **技能模块孤岛**：[#1479](https://github.com/netease-youdao/LobsterAI/pull/1479)（拒绝重复安装相同技能）、[#1494](https://github.com/netease-youdao/LobsterAI/pull/1494)（技能状态按会话独立）这些防呆设计与体验优化 PR 仍处于待定状态。
- **历史遗留架构缺陷**：[#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 等底层架构改动需要尽快定夺，以免随着上层业务代码增加导致后续重构成本过高。

---
*数据来源：LobsterAI GitHub Repository Metrics | 统计时间：2026-05-29*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-29)

## 1. 今日速览
Moltis 项目在过去 24 小时内展现了**极高的维护活跃度与出色的 Issue 解决效率**。项目在没有发布新版本的情况下，通过核心贡献者（主要为 `penso`）一次性合并了 4 个关键修复 PR，成功关闭了高达 7 个遗留和突发 Bug。这表明项目目前处于**健康的“清道夫”阶段**，团队正致力于打磨现有功能的稳定性，特别是在多渠道集成、Cron 任务执行机制以及 WebUI 交互细节上进行了深度排雷。唯一的待合并 PR 指向了更高级的终端控制功能，预示着多智能体编排能力的进一步进化。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日项目的核心进展集中在**稳定性修复与架构小重构**上，共有 4 个 PR 顺利合并关闭，大幅提升了系统健壮性：

*   **[CLOSED/PR #1081](https://github.com/moltis-org/moltis/pull/1081) - Discord 语音消息丢包排查：** 增加了详细的诊断日志，修复了 Discord 语音消息被静默丢弃且无法追踪的问题，并增加了防止回归的测试用例。直接对应关闭了 Issue #817。
*   **[CLOSED/PR #1078](https://github.com/moltis-org/moltis/pull/1078) - 修复 MiniMax 提供商 2013 错误：** 移除了与 MiniMax 不兼容的 OpenAI `user name` 字段，并将特定提供商的请求逻辑整合到了目录元数据中。直接对应关闭了 Issue #1077。
*   **[CLOSED/PR #1080](https://github.com/moltis-org/moltis/pull/1080) - 修复 WebUI 会话分叉逻辑：** 修复了 Web 端用户点击助手回复进行“分叉”时，分叉点选取不准确的逻辑错误。直接对应关闭了 Issue #1075。
*   **[CLOSED/PR #1079](https://github.com/moltis-org/moltis/pull/1079) - 修复 Cron 任务沙盒执行逻辑：** 修复了标记为“在宿主机执行”的 Cron 任务被错误地放入沙盒运行的严重逻辑缺陷。直接对应关闭了 Issue #1072。

*分析：今日合并的 PR 均带有完整的测试用例验证记录（如 Playwright 回归测试、Router 覆盖测试），反映出项目团队在代码质量把控上极其严谨。一天内解决 4 个不同模块的痛点，项目整体稳定性向前迈出坚实一步。*

## 4. 社区热点
目前社区最具热度的话题是关于**底层多智能体编排能力的扩展诉求**。

*   **[Issue #235](https://github.com/moltis-org/moltis/issues/235) [OPEN] - PTY 交互式 Claude Code CLI 控制：** 该 Issue 虽然创建于 3 个月前，但在昨日再次活跃。作者指出当前通过子进程生成的 Claude Code 无法连接到真实终端（`isatty() == false`），导致无法进行多智能体编排时的中断与交互。
    *   *分析：* 获得 👍1 和 5 条深度讨论，说明这是高级开发者和框架集成者的核心痛点。该诉求与今日新增的 **[PR #1082](https://github.com/moltis-org/moltis/pull/1082) (Gated tmux control)** 高度契合，表明社区与核心贡献者在底层终端控制方向上正在“双向奔赴”。

## 5. Bug 与稳定性
今日共关闭了 7 个 Bug，其中有多个涉及核心执行逻辑的缺陷，以下是按严重程度排列的修复清单（均已被 PR 修复）：

1.  **[严重] [Bug]: Cron agentTurn 运行失败 - [Issue #333](https://github.com/moltis-org/moltis/issues/333) [CLOSED]**
    *   *问题：* 当 Cron 任务省略 `payload.model` 时，系统未能回退到默认模型，而是直接报错 `model '' not found`。
2.  **[较严重] [Bug]: Cron 任务的沙盒逃逸失效 - [Issue #1072](https://github.com/moltis-org/moltis/issues/1072) [CLOSED]**
    *   *问题：* 明确配置为 `Execution Target: Host` 的 Cron 任务被错误地置于沙盒中运行。*(已由 PR #1079 修复)*
3.  **[中等] [Bug]: 用户名一致性引发的 API 错误 - [Issue #1077](https://github.com/moltis-org/moltis/issues/1077) [CLOSED]**
    *   *问题：* 在特定的多发送者群聊历史接入 MiniMax 模型时触发 2013 错误。*(已由 PR #1078 修复)*
4.  **[中等] [Bug]: Webapp 无法连接 - [Issue #385](https://github.com/moltis-org/moltis/issues/385) [CLOSED]**
    *   *问题：* 较早期的网络连接问题，已在近期的底层重构中解决。
5.  **[低] [Bug]: Discord 语音消息静默丢弃 - [Issue #817](https://github.com/moltis-org/moltis/issues/817) [CLOSED]**
    *   *问题：* 未能正确处理仅包含语音附件的消息，现已增加日志以排查。*(已由 PR #1081 修复)*
6.  **[低] [Bug]: WebUI 会话分叉节点错误 - [Issue #1075](https://github.com/moltis-org/moltis/issues/1075) [CLOSED]**
    *   *问题：* 在指定回复处分叉时，实际分叉点落在提示词而非回复处。*(已由 PR #1080 修复)*

## 6. 功能请求与路线图信号
今日社区提出了重要的功能增强信号，并且已有相应的开发进度：

*   **功能请求：在 WebUI 中配置 Sub-agents** - [Issue #906](https://github.com/moltis-org/moltis/issues/906) [CLOSED]
    *   *信号：* 用户希望摆脱纯代码配置，直接在 WebUI 中对子代理进行调整。该 Issue 于今日顺利关闭，暗示该功能可能已经被合并到主干或在近期重构中得到了实现。
*   **功能请求：基于 PTY 的多智能体控制** - [Issue #235](https://github.com/moltis-org/moltis/issues/235) [OPEN]
    *   *信号：* 结合今日开放的 **[PR #1082 (tmux control)](https://github.com/moltis-org/moltis/pull/1082)**，可以预见 Moltis 的下一阶段路线图将重点强化**宿主机级的代理终端控制**能力，允许授权用户通过 tmux 检查或发送输入，这将极大提升复杂工作流的调试体验。

## 7. 用户反馈摘要
从今日关闭的 Issues 中，可以提炼出以下典型的真实用户使用场景和痛点：

*   **自动化场景的模型依赖痛点：** 有用户尝试使用 `sessionTarget=isolated` 运行自动化 Cron 任务，发现框架对缺失字段的容错率较低（Issue #333），这反映了用户在构建无人值守自动化工作流时对默认回退机制的强烈需求。
*   **群聊/多平台集成壁垒：** 用户在将 Moltis 接入现有 Discord 服务器或试图统一不同渠道（如 MiniMax）的历史记录时，遇到了消息格式解析（Issue #817）和 API 参数不兼容（Issue #1077）的问题。这表明跨平台桥接依然是个人 AI 助理工程化应用的主要挑战。
*   **对话节点管理精细化需求：** 用户对 WebUI 中会话的“分叉”机制使用了高精度的要求（Issue #1075），说明 Moltis 的高级用户正在利用其进行复杂的逻辑树推演，对上下文管理提出了更高要求。

## 8. 待处理积压
*目前待合并的 PR 积压较少，但有一个重要 PR 需要维护者关注：*

*   **[PR #1082](https://github.com/moltis-org/moltis/pull/1082) [OPEN] - 新增门控 tmux 控制指令：** 该 PR 实现了底层的终端复用控制原语和目标验证，不仅解决 Issue #235 的讨论方向，还补充了相关的 ACP 与 tmux 连接文档。这是今日唯一处于待合并状态的 PR，鉴于其涉及宿主机安全控制（需 allowlisted users），建议安全审查人员优先评估并推进合并。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 2026-05-29 CoPaw (QwenPaw) 项目动态日报：

# CoPaw (QwenPaw) 项目动态日报 (2026-05-29)

## 1. 今日速览
CoPaw 项目在过去24小时内保持了**极高的社区活跃度与开发推进速度**。项目共处理了 43 条 Issues（新开/活跃 32 条，关闭 11 条）和 39 条 PRs（待合并 17 条，合并/关闭 22 条），展现出维护团队强大的问题消化能力和社区贡献的热情。今日动态主要围绕 **v1.19 桌面版（特别是 Windows Tauri 版）的稳定性修复**、**定时任务与上下文管理的逻辑优化**，以及备受期待的 **AgentScope 2.0 底层架构迁移讨论**展开。项目整体处于高频迭代、功能持续收敛的健康状态。

## 2. 版本发布
*   **无新版本发布**。结合今日大量关于 "v1.19桌面版" 和 "v1.1.9" 的 Bug 反馈与修复 PR，预计团队正在为下一个稳定版（可能是 v1.20 或 v1.1.10）积累修复代码。

## 3. 项目进展
今日共有 22 个 PR 被合并或关闭，重点在提升桌面端体验、UI 交互优化及底层稳定性：
*   **输入框草稿状态修复** ([PR #4755](https://github.com/agentscope-ai/QwenPaw/pull/4755)): 修复了用户发送消息后切换页面，再次返回时输入框被旧内容重新填充的 Bug。
*   **时区显示优化** ([PR #4763](https://github.com/agentscope-ai/QwenPaw/pull/4763)): 增强了消息时间戳处理，支持显示用户本地时区，改善了全球化使用体验。
*   **文件下载交互优化** ([PR #4725](https://github.com/agentscope-ai/QwenPaw/pull/4725)): 为 Workspace 下载按钮增加了加载状态和防重复点击机制，提升了前端交互的确定性和防抖性。
*   **前端体验与代码质量提升** ([PR #4657](https://github.com/agentscope-ai/QwenPaw/pull/4657), [PR #4623](https://github.com/agentscope-ai/QwenPaw/pull/4623)): 重构并优化了环境变量、安全页面和技能市场的 UI 样式及代码结构。

## 4. 社区热点
*   **打包机制探讨** ([Issue #4754](https://github.com/agentscope-ai/QwenPaw/issues/4754), 7条评论): 用户对官方提供的 Windows 桌面版与 Windows Tauri 版的差异感到困惑。反映了用户对本地化部署、轻量级客户端的强烈需求。
*   **定时任务交互缺陷** ([Issue #4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) & [#4776](https://github.com/agentscope-ai/QwenPaw/issues/4776), 共计5条评论): 用户集中吐槽定时任务创建时的复杂交互（如 JSON 输入不直观）、执行时频繁弹窗干扰且无法点击跳转的问题。
*   **AgentScope 2.0 迁移提议** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727), 2条评论, 👍1): 核心开发者提出将底层依赖从 AgentScope 1.x 升级到 2.0。这是今日技术价值最高的讨论，意味着 CoPaw 即将迎来一次重大架构升级，可能会解决当前多步骤工具调用的性能瓶颈。

## 5. Bug 与稳定性
今日报告了多个影响桌面版稳定性的关键 Bug，部分已提交修复：
*   **[严重] macOS Tahoe 兼容性崩溃** ([Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704)): 升级至 macOS Tahoe 26.5 后，通过飞书通道接收消息时应用直接闪退 (SIGSEGV)。目前仍在排查中。
*   **[严重] 桌面版静默执行与路径问题** ([Issue #4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) & [#4773](https://github.com/agentscope-ai/QwenPaw/issues/4773)): Windows 桌面版执行 Shell 时总是弹黑窗；定时任务总是错误地去触发 `pip install`。-> **已提交修复**: ([PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779)) 通过在 Tauri 中打包本地 CLI 修复了路径依赖问题。
*   **[中等] 工具调用陷入死锁** ([Issue #4739](https://github.com/agentscope-ai/QwenPaw/issues/4739)): Agent 在执行完工具（如 browser_use）后，偶尔不生成回复，而是静默等待用户输入，导致工作流中断。
*   **[中等] 会话状态覆盖** ([Issue #4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) & [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)): 删除关联定时任务的旧会话后，系统仍使用缓存上下文；且桌面版重启后无法恢复上次的会话界面。-> **已提交修复**: 会话状态原子化写入 ([PR #4706](https://github.com/agentscope-ai/QwenPaw/pull/4706)) 正在审查中。

## 6. 功能请求与路线图信号
通过社区诉求，可以明显看出 CoPaw 下一步的演进方向：
*   **智能体记忆与上下文管理** ([Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) & [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)): 用户强烈要求增强记忆系统（避免“只记录不提炼”），并在前端直观显示当前上下文消耗量。-> **相关进展**: ([PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)) 已经在为对话增加 Token 使用量展示功能。
*   **更智能的 LLM 容灾机制** ([Issue #4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)): 建议内置类似 `cc-switch` 的降级方案，当主 LLM 触发限流时自动切换备用供应商。
*   **输入框快捷唤醒** ([Issue #4785](https://github.com/agentscope-ai/QwenPaw/issues/4785)): 期望在输入框输入 `/` 时能自动关联出可用技能，提升专业用户的操作效率。

## 7. 用户反馈摘要
从今日高频互动的内容中，可以提炼出以下真实用户画像与痛点：
*   **重度 Windows 桌面端用户**: 大量反馈集中在“Windows 桌面版（Tauri/常规版）”上，说明本地化执行很受欢迎，但环境变量未写入系统路径、UI 状态记忆错乱（如输入框残留文字）等问题严重影响了“开箱即用”的体验。
*   **高级玩家与自动化用户**: 使用定时任务的用户对目前的交互设计感到沮丧（JSON 纯手工输入、ID 不直对应名称、通知过于干扰）。他们需要的是“静默、稳定、易配置”的后台运行机制。
*   **内容创作者与开发者**: 对 LaTeX 渲染效果不满意 ([Issue #4756](https://github.com/agentscope-ai/QwenPaw/issues/4756))，并希望生成的文件能直接在界面预览或一键打开 ([Issue #4786](https://github.com/agentscope-ai/QwenPaw/issues/4786))，反映出用户正试图将 CoPaw 作为主力生产工具。

## 8. 待处理积压
*   **架构升级定调** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)): 迁移至 AgentScope 2.0 的 Breaking Change 提议已发布，但尚未形成明确的排期计划，建议维护团队尽快确认路线图以稳定贡献者预期。
*   **核心 Agent 执行循环 Bug** ([Issue #4739](https://github.com/agentscope-ai/QwenPaw/issues/4739)): 工具调用挂起导致 Agent 等待输入的问题极大地影响了自动化流程的可靠性，目前缺乏深度排查进展。
*   **UI/UX 遗留问题积压** ([Issue #4746](https://github.com/agentscope-ai/QwenPaw/issues/4746)): 关于“历史会话列表按最近时间排序并平铺展示”的诉求已连续多日被不同用户重复提出（此前已被关闭过 #4732），建议作为高优先级需求纳入前端重构的 Backlog 中。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project daily report for ZeroClaw based on the provided GitHub data.

---

# ZeroClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持了**极高的社区活跃度与开发热度**。Issue 活动达到 21 条（仅 1 条被关闭，新增占绝对主力），Pull Request 活动高达 50 条（绝大多数处于待合并状态）。这表明项目正处于 v0.8.x 版本（可能为 beta-2）**密集的开发与测试周期**。社区正在集中攻克多 Provider 兼容性、系统安全性与 Web Gateway 基础设施等核心问题。虽然待处理的积压队列有所增加，但新增的高质量 Issue 和 PR 反映出项目正朝着更加完善、健壮的 AI 智能体生态快速演进。

## 2. 版本发布
今日**无**新版本发布。项目仍处于 v0.8.0-beta-1 后的密集开发阶段（PR #6848 提及正在推进 beta-2），尚未发布正式的 Stable 或 RC 版本。

## 3. 项目进展
过去 24 小时内，共有 5 个 PR 被合并/关闭，主要集中在前端配置修复、基础设施支持以及大型功能合并的准备工作：
*   **Slack 渠道逻辑优化**：[PR #6994](https://github.com/zeroclaw-labs/zeroclaw/pull/6994) (CLOSED) 修复了 Slack 中 `strict_mention_in_thread` 的默认值设定，使其在话题回复中默认为 `true`，保证了对用户 @提及的统一处理逻辑。
*   **Anthropic 高级推理能力支持**：[PR #5650](https://github.com/zeroclaw-labs/zeroclaw/pull/5650) (CLOSED) 是一个重大合并，增加了对 Anthropic 原生 Extended Thinking（扩展思考）API 的支持，允许通过 `budget_tokens` 进行深度推理，这标志着 ZeroClaw 在高端模型能力的适配上迈出了重要一步。
*   **其他修复与合并准备**：[PR #6994](https://github.com/zeroclaw-labs/zeroclaw/pull/6994) 和其他几个 PR 的关闭，为后续 v0.8.1 的大规模合并（如 Tracker #6970 所列）清理了代码库。

## 4. 社区热点
*   **[Issue #6059] DeepSeek-V4 API 兼容性危机**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (👍 4, 评论 14)。这是今日关注度最高的 Issue。多位开发者在适配 DeepSeek-V4-Pro 和 V4-Flash 时遇到了与“思考模式”相关的严重格式错误。反映出社区对国产大模型最新 API 规范的适配需求非常迫切。
*   **[Issue #5674] 频道回复意图误判问题**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) (👍 3, 评论 4)。用户抱怨在私聊场景下，AI 助手经常因为“意图识别门控”错误选择不回复。这一痛点引发了关于是否应将 `classify_channel_reply_intent` 设为可配置项的讨论。
*   **[PR #6848] v0.8.0-beta-2 基础架构重构**：[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (评论数未定义但属于重量级 PR)。这个涉及全栈（TUI, RPC, 依赖等）的超大型 PR 目前处于状态反馈收集阶段，开发者在积极讨论模型回退机制的重新布线问题。

## 5. Bug 与稳定性
今日报告了多个高危（S1/S2 级别）Bug，主要集中在安全、Runtime 和多模型兼容性上：

*   **高危安全漏洞：Token 旋转未失效**：[Issue #6984](https://github.com/zeroclaw-labs/zeroclaw/issues/6984) (S1)。Gateway 配对令牌在重新生成时，旧 Token 依然有效。**状态：已有对应修复 PR** [PR #6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988)。
*   **S1 工作流阻塞：MiniMax 兼容性导致工具循环**：[Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) (S1)。上下文压缩模块错误地丢弃了 `tool_calls`，导致兼容 OpenAI 格式的 Provider（如 MiniMax）陷入死循环并报错。
*   **高危阻断：Slack Socket Mode 权限拦截**：[Issue #6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) (S1)。所有通过 Slack Socket Mode 传入的消息均被错误识别为“未授权用户”。
*   **严重回归：Beta-1 风险策略失效**：[Issue #6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) (S2)。在 v0.8.0-beta-1 中，序列化边界忽略了下游的风险配置文件和工具过滤限制，导致高危工具可能被意外调用。
*   **Onboarding 逻辑故障**：[Issue #6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) (S1)。引导流程标记已完成但并未实际写入配置文件，导致新用户卡在第一步。**状态：待修复**。

## 6. 功能请求与路线图信号
结合今日的 Issues 和活跃 PR，项目下一阶段（v0.7.6 与 v0.8.1）的路线图信号非常清晰：
*   **智能体技能与 UX 优化 (v0.7.6 主题)**：[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) 正在协调关于 `zeroclaw skills` 的支持，未来将重点改善 CLI、加载器、沙盒和测试体验。
*   **降本增效：意图识别可配置化**：[PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) 提出了一个非常受欢迎的特性——允许为 `classifier_provider` 指定一个更廉价的模型（如 qwen3.6）来处理回复意图预检，以节省昂贵的旗舰模型 Token。
*   **Daemon 实例生命周期管理**：[Issue #6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818) 提议引入 `--ephemeral` 标志，使得守护进程在没有客户端连接时自动优雅退出。
*   **集成与渠道 PR 队列 (v0.8.1)**：[Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) 作为 v0.8.1 的总追踪器，正在排队等待合并 9 大渠道的“按收件人回复节流”功能 [PR #6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389)。

## 7. 用户反馈摘要
从 Issue 描述中可以清晰地看到用户的核心痛点：
*   **多语言体验仍有瑕疵**：CJK（中日韩）用户在 CLI 中遇到严重的退格键处理 Bug（[Issue #6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995)），需要按 3 次退格键才能删除一个汉字；同时 Web 端和本地化字符串仍有硬编码英文的现象（[Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)）。
*   **Memory 记忆机制傻/重**：用户反馈 AI 助手在私聊中经常装死（[Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)），或者在使用 Telegram 时疯狂重复存储相同的单条记忆（[Issue #5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)）。
*   **大模型兼容性带来阵痛**：随着 DeepSeek V4、GPT 5.4 等新模型的发布，底层 API 格式的变动（如 thinking mode）极易导致 ZeroClaw 这类编排框架出现降级或中断，用户对 Provider 层的鲁棒性要求极高。

## 8. 待处理积压
目前有大量标记为 `needs-author-action`、`status:blocked` 或长期未关闭的基础架构 PR，需要核心团队分配资源：
*   **长期停滞的底层架构 PR**：如支持 ARM64 Docker 的交叉编译 [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)，以及 Web 工具的 IPv6 支持 [PR #5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450)，均已停滞一个多月。
*   **严重依赖社区反馈的阻塞 Issue**：关于 SQLite 内存后端向量搜索慢的优化请求 [Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)（建议从 O(n) 升级到 ANN）目前处于 Blocked 状态，急需相关专家介入。
*   **欢迎社区力量介入**：本地化（i18n）和配置文件密钥脱敏等“Good First Issue”级别的工作（[Issue #6990](https://github.com/zeroclaw-labs/zeroclaw/issues/6990), [Issue #6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989)）已被明确提出，非常适合新贡献者接手。

</details>