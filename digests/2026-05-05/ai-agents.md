# OpenClaw 生态日报 2026-05-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-04 22:17 UTC

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

以下是基于 2026-05-05 GitHub 数据生成的 OpenClaw 开源项目动态日报。

---

# 📊 OpenClaw 项目动态日报 (2026-05-05)

## 1. 今日速览
OpenClaw 在过去 24 小时内维持了极高的社区活跃度，共计处理了 500 条 Issue 更新（新开/活跃 442，关闭 58）和 500 条 PR 更新（待合并 442，关闭 58），并发布了 4 个新版本。项目正处于向 5.x 正式版过渡的关键阶段，核心开发团队主要精力集中在**文件传输插件的外置化**、**Gateway 稳定性调优**以及 **Codex 长耗时任务的生命周期管理**。社区反馈焦点依然集中在多渠道（Telegram、Discord、WhatsApp）消息投递可靠性、内存泄漏以及长期记忆（Long-Term Memory）等核心体验上。整体而言，项目迭代迅速，但快速迭代带来的回归问题不容忽视。

## 2. 版本发布
今日共记录 4 个版本发布，重点在于完善文件传输插件及修复安全扫描与渠道配置问题：

- **v2026.5.4-beta.1**: 最新 Beta 版本。
  - ** Highlights **: 新增内置 `file-transfer` 插件，为配对节点提供 `file_fetch`, `dir_list`, `dir_fetch`, 和 `file_write` 代理工具以执行二进制文件操作。
  - **破坏性变更/迁移注意**: 实施了严格的默认拒绝 节点路径策略（位于 `plugins.entries.file-transfer.config.nodes`），且需操作员审批。升级到此版本需注意检查文件系统的访问控制列表配置。
- **v2026.5.3-1**: 核心 npm 热修复版本。
  - **修复内容**: 修复了安全安装扫描程序错误拦截官方内置插件包的问题（当 `process.env` 访问和常规 API 发送仅在同一个编译包的远处部分出现时会被误判）。
- **v2026.5.3**: 包含 5.4 beta 版中提到的 `file-transfer` 插件功能，为稳定推送做准备。
- **v2026.5.3-beta.3**: 针对 2026.5.3 版本的早期 beta 测试版。

## 3. 项目进展
今日合并/关闭了 58 个 PR，修复了多项系统稳定性、多渠道适配和核心逻辑问题，项目整体稳健性进一步提升：

- **Gateway 健壮性增强**：
  - PR [#77478](https://github.com/openclaw/openclaw/pull/77478): 强化了启动就绪状态和 Discord 回复机制，解决了 Control UI 轮询导致的昂贵会话扫描竞争问题。
  - PR [#77556](https://github.com/openclaw/openclaw/pull/77556): 为 `scheduleReconnect` 添加了最大重连限制（30次），防止网关不可达时客户端无限循环累积僵尸进程。
- **Docker 与插件维护**：
  - PR [#77547](https://github.com/openclaw/openclaw/pull/77547): 修剪 Docker 运行时镜像中包排除的外部插件 dist 目录，确保容器部署的整洁性。
  - PR [#77194](https://github.com/openclaw/openclaw/pull/77194): 修复了插件白名单机制，使严格的 `plugins.allow` 能够正确应用于捆绑的提供者发现。
- **多渠道与诊断改进**：
  - PR [#77543](https://github.com/openclaw/openclaw/pull/77543): 为 Discord 仅语音频道接入了 STT 预检。
  - PR [#77046](https://github.com/openclaw/openclaw/pull/77046): 修复了 Codex app-server 的镜像幂等性问题，防止转录文本丢失。

## 4. 社区热点
以下是最受关注、讨论最激烈的议题，反映了当前社区的核心诉求：

- **Agent 会话找不到问题** ([#52875](https://github.com/openclaw/openclaw/issues/52875), 评论: 20): 
  升级到 3.22 版本后，主 Agent 无法联系其他 Agent，`session_list` 结果异常。这暴露了跨版本升级时会话管理状态可能出现严重不一致。
- **长文本输出被截断** ([#76307](https://github.com/openclaw/openclaw/issues/76307), 评论: 16): 
  长输出的 Agent 回复在 25-80 个字符处被确定性截断，且与渠道无关，直接调用 OpenAI API 则正常。该问题严重影响基于 OpenClaw 的长文生成场景。
- **插件生态与技能分发** ([#50090](https://github.com/openclaw/openclaw/issues/50090), 评论: 14):
  社区热议如何通过 `SKILL.md` 和 ClawHub 构建繁荣的技能生态，表明用户对插件化架构带来的扩展性有极高期待，但目前实践仍有较大落差。
- **长期记忆与知识管理** ([#50096](https://github.com/openclaw/openclaw/issues/50096), 评论: 12):
  "Agent 的价值与其能记住的内容成正比"，社区呼吁解决底层存储机制阻碍 Agent 实现连续记忆和演进的痛点。
- **硬编码工作路径的严重低级错误** ([#51429](https://github.com/openclaw/openclaw/issues/51429), 评论: 11):
  开发者发现代码中被硬编码了 `/Users/wangtao` 的工作路径并被合并发布。引发了社区对代码审查和 CI 质量把关的严重担忧。

## 5. Bug 与稳定性
今日报告了大量 Bug 和回归问题，按严重程度分类如下：

### 🔴 严重 / 核心功能受损
- **网关泄漏三元组** ([#73655](https://github.com/openclaw/openclaw/issues/73655)): 插件重启时的 Manifest EADDRINUSE 重试循环、信号处理程序累积和同步 I/O 导致 WS 握手饥饿。暂无明确关联 Fix PR。
- **Fal GPT Image 2 路由 404** ([#77295](https://github.com/openclaw/openclaw/issues/77295)): 图生图路由错误指向 `/image-to-image` 而非 `/edit`，导致该模型图片编辑功能完全不可用。
- **RISC-V64 架构报错** ([#54253](https://github.com/openclaw/openclaw/issues/54253)): 在 RISC-V 系统上直接报 `LLM Request Failed`，阻碍了 OpenClaw 在边缘计算及极客硬件上的部署。

### 🟠 中等 / 行为异常或降级
- **网关事件循环停顿** ([#75882](https://github.com/openclaw/openclaw/issues/75882)): 导致跨渠道延迟、漏回和断连。*（已有相关诊断 PR [#77542](https://github.com/openclaw/openclaw/pull/77542) 进行修复）*。
- **Active Memory 导致 30 秒超时** ([#65309](https://github.com/openclaw/openclaw/issues/65309)): Active Memory 在会话中触发时停滞并超时。
- **图像优化失败无回退** ([#73148](https://github.com/openclaw/openclaw/issues/73148)): 当可选依赖 `sharp` 未安装时，图像工具直接报错且提示不清晰。
- **内存无限增长导致 OOM** ([#55334](https://github.com/openclaw/openclaw/issues/55334)): `sessions.json` 中包含大量未修剪的重复 `skillsSnapshot` 导致网关内存飙升被杀。

## 6. 功能请求与路线图信号
结合近期 PR 走势，以下是具有高实现可能性的路线图信号：

- **针对长期记忆的 Matryoshka 支持**：Issue [#50096](https://github.com/openclaw/openclaw/issues/50096) 呼吁长期记忆，而 PR [#55507](https://github.com/openclaw/openclaw/pull/55507) 已经尝试为 OpenAI embeddings API 添加 `outputDimensionality` 支持，预计下个版本将大幅优化记忆检索性能。
- **更完善的 Cron 任务管理**：PR [#77188](https://github.com/openclaw/openclaw/pull/77188) 增加了基于 `agentId` 的 cron 过滤，结合 PR [#77560](https://github.com/openclaw/openclaw/pull/77560) 在失败通知中加入事件时间戳，表明团队正在重振多 Agent 调度体验。
- **消息生命周期的持久化投递**：PR [#77205](https://github.com/openclaw/openclaw/pull/77205) 正在尝试重构并引入针对渠道回合的持久化最终回复投递，旨在彻底解决 WhatsApp/Telegram 掉线丢消息的痛点。
- **动态配置 UI 暴露**：PR [#55085](https://github.com/openclaw/openclaw/pull/55085) 正在为 CLI 增加稳定的 setup surface export，预示官方或第三方即将推出更现代的可视化配置面板。

## 7. 用户反馈摘要
分析近期评论，提炼出以下真实用户场景和反馈：

- **多渠道沟通的不可靠性**：企业用户重度依赖 Telegram/WhatsApp/飞书集成，但轮询停顿、静默丢消息（Issue [#50040](https://github.com/openclaw/openclaw/issues/50040)）、断线无法回填构成了最大的使用障碍。
- **Cron 任务的“幻觉”**：用户对自动化信任度受损，当工具调用失败时，Cron 任务往往“编造”看似合理的输出而不是安静地失败（Issue [#49876](https://github.com/openclaw/openclaw/issues/49876)）。
- **UI 与交互盲区**：用户对缺乏直观的侧边栏记录管理感到沮丧（Issue [#50404](https://github.com/openclaw/openclaw/issues/50404)）；同时，在使用 `verboseDefault=full` 时工具卡片依然折叠，降低了调试效率。
- **多模型兼容性缺陷**：在使用如 `moonshot/kimi-k2.5` 等非 OpenAI 模型时，在群聊场景极易触发 `tool call id is duplicated` 错误（Issue [#51593](https://github.com/openclaw/openclaw/issues/51593)），表明系统对不同 LLM 提供商的兼容容错需加强。

## 8. 待处理积压
以下重要的高影响力议题/PR 已长期未得到有效解决或合并，需维护团队重点关注：

- **Steer 模式完全失效**：Issue [#50880](https://github.com/openclaw/openclaw/issues/50880) 与 Issue [#48003](https://github.com/openclaw/openclaw/issues/48003) 均指出 `messages.queue.mode: "steer"` 根本无法在工具调用边界注入消息，此核心高级功能长期处于降级状态。
- **Webhook 触发的 ACP 会话跟踪缺失**：Issue [#54342](https://github.com/openclaw/openclaw/issues/54342) 导致 Hook 触发的代理无法进行状态流转和线程绑定，严重限制了外部系统集成。
- **飞书 渠道衰退**：Issue [#49791](https://github.com/openclaw/openclaw/issues/49791) 报告了在群聊中正常指令失效的问题，且 PR [#55225](https://github.com/openclaw/openclaw/pull/55225) 和 [#55171](https://github.com/openclaw/openclaw/pull/55171) 旨在修复飞书消息撤回及脏数据绑定，但长期滞留未合并，可能导致国内用户流失。
- **避免 Root 执行导致的状态损坏**：PR [#67509](https://github.com/openclaw/openclaw/pull/67509) 试图防止 CLI 在 root 下运行引发的状态目录权限混乱，该 PR 已开启近半个月，建议尽快排期合并。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 5 日的各大开源项目社区动态，我为您整理了以下横向对比与深度分析报告。

---

### 1. 生态全景：走向“深水区”的个人智能体生态
当前开源个人 AI 助手与自主智能体生态正经历**从“极客玩具”向“企业级生产力工具”的跨越期**。多渠道接入与多模型容灾已成为基础标配，但网关稳定性、长期记忆和复杂状态管理仍是普遍痛点。同时，随着智能体权限的增加，**沙箱逃逸、数据泄露和细粒度权限控制等安全底座问题**正成为社区关注的核心焦点。底层架构上，**事件驱动和 WASM 化正在取代传统的纯轮询与进程级隔离**，标志着智能体基础设施走向成熟。

### 2. 各项目活跃度对比 (2026-05-05)
从今日的数据来看，第一梯队的项目在 Issue 和 PR 吞吐量上呈现爆发式增长，但也伴随着巨大的维护压力。

| 项目名称 | Issue 活跃数 (新开/活跃) | PR 活跃数 (待处理/关闭) | 版本发布 | 生态健康度/趋势评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** (新/活 442，关 58) | **500** (待 442，关 58) | 4个 (含核心Beta) | 🔥 极度活跃。规模庞大，但回归 Bug 多，处于 5.x 架构重构阵痛期。 |
| **ZeroClaw** | **50** (新/活 47，关 3) | **50** (待 29，关 21) | 0 | 🚀 高速扩张。Provider 兼容与仪表盘开发活跃，新用户引导痛点明显。 |
| **Hermes Agent**| **50** (新/活 38，关 12) | **50** (待 27，关 23) | 0 | ⚠️ 热点驱动。深陷 P0 级安全漏洞与 TUI 崩溃危机，急需止血。 |
| **CoPaw** | 14 (新/活 14，关 0) | 21 (待 6，关 15) | 0 | 💪 稳健迭代。多 Agent 协同与前端体验打磨并行，吞吐健康。 |
| **NanoClaw** | - (活跃度高) | 35 (待 16，关 19) | 0 | 🛠️ 通道优化。专注于 DeltaChat 等新渠道适配与底层依赖升级。 |
| **NanoBot** | 7 (新/活 4，关 3) | 18 (待 7，关 11) | 0 | 🛡️ 巩固质量。集中于修复致命 Bug 与 SDK 返回值等基础体验。 |
| **IronClaw** | - (活跃度极高) | 17 (待 12，关 5) | 0 | ⚙️ 深度重构。正处于 "Reborn" 底层架构重构，引入 WASM 与事件溯源。 |
| **NullClaw** | 3 (活跃) | 4 (待 3，关 1) | 0 | 🪶 轻量坚守。专注低资源设备适配与内存安全。 |
| **LobsterAI** | 低活跃 | 2 (待合并 2) | 0 | 🔧 维护期。集中于前端长会话的性能优化。 |
| **Moltis** | 1 | 1 (关闭 1) | 0 | 🧪 观测期。聚焦 E2E 测试的 CI 稳定性排查。 |

### 3. OpenClaw 在生态中的定位
* **生态“压力测试机”与功能风向标**：OpenClaw 拥有全网最高频的 Issue/PR 吞吐量，其面临的网关泄漏、Cron 任务幻觉、长输出截断等难题，实质上是大型多渠道智能体在复杂生产环境中的共性问题。
* **技术路线差异**：与 IronClaw（底层重构 WASM）、NullClaw（主打低资源设备）不同，OpenClaw 目前依然依赖插件外置化与网关调优。与 NanoBot/ZeroClaw 相比，OpenClaw 社区对跨版本升级状态不一致的反馈更剧烈，表明其架构的历史技术债正在显现。
* **社区规模对比**：OpenClaw 的社区反馈最密集、场景最繁杂（涵盖 Telegram/Discord/飞书等），其社区不仅是代码贡献地，更是多模型（如 GPT, Fal GPT Image）兼容性的真实测试床。

### 4. 共同关注的技术方向（跨项目共性需求）
* **多模型容灾与 OpenAI 协议兼容 (ZeroClaw, NanoBot, CoPaw)**
  各项目普遍遭遇由于单一 Provider（如 DeepSeek-V4、本地 Ollama）API 规范变动或区域限制导致的全局瘫痪。社区强烈呼吁引入跨 Provider 的 Failover 机制和更宽容的兼容性解析。
* **长期记忆与状态持久化 (OpenClaw, Hermes Agent, IronClaw)**
  “Agent 会话找不到”、“重启后失忆”是高频痛点。IronClaw 引入事件溯源，OpenClaw 探索 Matryoshka embedding，都在试图解决智能体跨会话的生命周期与记忆演进问题。
* **沙箱并发与安全隔离 (Moltis, NullClaw, Hermes Agent)**
  随着多工具并行调用成为常态，Moltis 暴露了 Docker 沙箱的并发命名冲突；Hermes 曝光了本地文件系统和 API Key 明文泄漏的严重漏洞；NullClaw 尝试转向更轻量的内核级 Landlock 隔离。
* **TUI/Web 交互盲区与长文本渲染 (LobsterAI, CoPaw, Hermes Agent)**
  前端/终端在处理长上下文输出时易卡顿、截断或流式渲染崩溃，成为影响开发者体验的第一大阻碍。

### 5. 差异化定位分析
* **主打“全渠道/高并发” (OpenClaw, ZeroClaw, NanoClaw)**：致力于连接 WhatsApp/Telegram/Discord 等社交平台，重点攻克消息投递可靠性（防丢消息、防截断）和不同平台富媒体解析。
* **主打“企业级/高安全” (IronClaw, NullClaw)**：IronClaw 走 Rust/WASM 路线，推行凭证签名与配置即代码；NullClaw 采用 Zig 语言，专攻极低资源设备的执行效率与内存安全。
* **主打“模型中立/极客玩具” (NanoBot, CoPaw)**：强调对最新开源模型（如 MiMo, DeepSeek）的快速接入，提供灵活的 SDK 和单机体验，正在向多 Agent 协同调度演进。

### 6. 社区热度与成熟度评估
* **快速迭代/扩张期**：**OpenClaw**、**ZeroClaw** 和 **CoPaw**。Issue 数量庞大，PR 合并频繁。但 OpenClaw 和 ZeroClaw 目前受困于新用户引导复杂和快速迭代带来的回归 Bug。
* **质量巩固/阵痛期**：**Hermes Agent** 和 **NanoBot**。由于引入了复杂的工具调用，正面临严峻的安全审查（Hermes）和底层架构导致的单点故障，核心团队正从“加新功能”转向“修旧 Bug”。
* **底层重构期**：**IronClaw**。背负着生产级应用的需求，正在并行推进 Reborn 架构的巨型 PR，属于蓄力阶段。
* **平稳维护期**：**LobsterAI**、**Moltis**、**NullClaw**。社区规模较小但精准，主要围绕特定场景（如前端渲染性能、沙箱隔离、并发测试）进行微创手术。

### 7. 值得关注的趋势信号（给开发者的建议）
1. **“裸奔”时代结束，安全合规成为必选项**：Hermes Agent 密钥明文泄漏 和 CoPaw 默认网关未鉴权 给所有开发者敲响警钟。**建议**：在设计多 Agent 或 MCP 工具时，必须默认采用最小权限原则，强制实施 HMAC 签名或沙箱预检（如 NullClaw/IronClaw 的做法）。
2. **构建多 Provider 的“异常熔断与降级”架构**：随着各类大模型 API 背后算力波动加剧，单一 Provider 随时可能返回 4xx/5xx。**建议**：在网关层设计类似 NanoBot 社区呼吁的 Model Fallback 池，保证服务 SLA。
3. **告别“静默卡死”，长任务需要心跳与可观测性**：NullClaw 和 Moltis 的反馈表明，用户对长时间无反馈的容忍度极低。**建议**：在智能体执行复杂任务或 MCP 调用时，引入独立的 Watchdog 线程推送“心跳”或“思考链”状态。
4. **RISC-V 与边缘设备的本地化突围**：OpenClaw 暴露了 RISC-V64 的兼容性问题，而 NullClaw 正在抢占这一生态位。未来“本地低资源环境运行”将是智能体框架实现差异化的蓝海市场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 5 月 5 日 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-05)

## 1. 今日速览
过去 24 小时内，NanoBot 项目保持着**极高的社区活跃度与健康的迭代节奏**。项目共处理了 18 个 Pull Requests（其中 11 个顺利合并/关闭），并产生了 7 个 Issue 更新（4 新开，3 关闭）。虽然今日无新版本发布，但核心维护者 `@chengyongru` 带领社区集中修复了多个影响稳定性的关键 Bug（如 DeepSeek 推理内容丢失和 SDK 返回值为空的问题）。整体来看，项目当前处于**功能增强与稳定性夯实并重**的阶段，尤其是在多模型容灾、多渠道（如 WhatsApp）接入以及 SDK 可观测性方面取得了实质性进展。

## 2. 版本发布
* **无新版本发布**。今日主要为核心特性的积累与 Bug 修复阶段，预计近期可能会推出包含多项重要修复的 `v0.1.6` 或类似迭代版本。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，显著提升了项目的鲁棒性与开发者体验：
* **SDK 核心能力修复**：`@chengyongru` 提交并关闭的 [PR #3620](https://github.com/HKUDS/nanobot/pull/3620) 修复了 `Nanobot.run()` 中 `RunResult.tools_used` 和 `RunResult.messages` 一直返回空数组的历史遗留问题，大幅提升了 SDK 的可用性。
* **严重 Bug 修复**：[PR #3616](https://github.com/HKUDS/nanobot/pull/3616) 解决了困扰 Windows + WebUI 用户的 DeepSeek-V4 `reasoning_content` 报错问题，采用了非破坏性的回填策略，关闭了 [Issue #3554](https://github.com/HKUDS/nanobot/issues/3554)。
* **安全守卫与防呆机制**：合并了 [PR #3613](https://github.com/HKUDS/nanobot/pull/3613)，修复了安全守卫的误报问题，放行了如 `/dev/null` 等合法的 Linux 标准路径，避免了任务意外中断。
* **多渠道通讯能力增强**：[PR #3607](https://github.com/HKUDS/nanobot/pull/3607) 增加了对 WhatsApp 语音消息的下载与解析支持，扩展了 Agent 的感知边界。
* **鉴权体系完善**：[PR #3612](https://github.com/HKUDS/nanobot/pull/3612) 增加了 `nanobot provider logout` 命令，补齐了 OAuth 认证生命周期的最后一块拼图。

## 4. 社区热点
* **🔥 多模型容灾与异常切换 ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376))**
  * **动态**：获得 13 条新评论，是今日讨论最热烈的话题。
  * **分析**：用户在实际生产中大量使用多 Provider 配置，但当前系统在遇到 429 限流或 5xx 错误时缺乏跨 Provider 的自动切换能力。这反映了 **NanoBot 正从“极客玩具”向“企业级高可用生产工具”转型的痛点**，社区对 Failover 机制的呼声极高。
* **🛠️ 自定义模型接入指南 ([Issue #3617](https://github.com/HKUDS/nanobot/issues/3617) / [PR #3619](https://github.com/HKUDS/nanobot/pull/3619))**
  * **动态**：用户 honjiaxuan 提出了小米 MiMo 模型的接入需求，并迅速提 PR 补充了基于 custom provider 的文档。
  * **分析**：体现了社区对兼容新型 OpenAI 兼容协议模型的高涨热情，以及“ Issue - PR ”闭环的极高效率。

## 5. Bug 与稳定性
* **【严重】区域限制导致模型全线瘫痪 ([Issue #3618](https://github.com/HKUDS/nanobot/issues/3618))**
  * **描述**：用户因遇到 `403 This model is not available in your region` 错误，导致长达 10 天的定时任务和消息处理全部中断。
  * **状态**：目前尚处于 OPEN 状态，此问题进一步印证了上述 #3376 （模型异常自动切换）需求的紧迫性。缺乏 Failover 机制会导致单点故障引发全局宕机。
* **【已修复】DeepSeek-V4 reasoning_content 报错**：在 Windows 环境使用 exec tool 时触发，目前已通过 [PR #3616](https://github.com/HKUDS/nanobot/pull/3616) 修复。
* **【已修复】SDK 结果集为空**：`RunResult` 返回数据缺失，已通过 [PR #3620](https://github.com/HKUDS/nanobot/pull/3620) 修复。

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR，项目下一步的演进方向展现出以下信号：
* **Agent 记忆与注意力聚焦**：[PR #3622](https://github.com/HKUDS/nanobot/pull/3622) 正在尝试解决 [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) 提出的“跨中断持久任务感知”。未来 Agent 将具备类似人类的“任务看板”能力，处理侧边问题后能自动回归主任务。
* **防御性编程与 AI 幻觉控制**：[PR #3624](https://github.com/HKUDS/nanobot/pull/3624) 引入了 `HallucinatedToolCallGuard`。当大模型产生幻觉（自称已操作但实际上未调用 Tool）时进行拦截。这是提升 Agent 在生产环境可靠性的关键一步。
* **多 Agent 编排实战**：[PR #3621](https://github.com/HKUDS/nanobot/pull/3621) 提交了针对 Hugging Face Spaces 的多角色 Agent 编排部署方案，表明项目正在探索多智能体协同的复杂场景。

## 7. 用户反馈摘要
* **痛点：容错力不足**：从 Issue #3618 和 #3376 的反馈来看，用户对“单点故障导致全面崩溃”感到沮丧。企业级用户强烈期望引入重试机制和优雅降级策略。
* **场景：多端协同与消息集成**：用户不仅将 NanoBot 作为本地 CLI 工具，更广泛部署于 Telegram、WhatsApp、WebUI 等渠道（PR #3623 讨论 Telegram 长文本截断，PR #3607 解决 WhatsApp 语音）。
* **满意点：恢复与备份机制**：Issue #3618 中用户提到“幸好有备份习惯”，这也侧面提醒社区，在底层大模型波动较大的当下，完善 NanoBot 的状态备份与灾难恢复机制将极大提升用户安全感。

## 8. 待处理积压
* **[长期高频 Issue] Provider/Model Failover 机制 ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376))**
  * **提醒**：该 Issue 积累了大量讨论且影响核心可用性。早期相关的 [PR #1163](https://github.com/HKUDS/nanobot/pull/1163) 曾尝试解决 Timeout/503 的回退问题但被关闭。建议维护团队将其提上高优日程。
* **[待处理的实验性 PR] 多 Agent 部署方案 ([PR #3621](https://github.com/HKUDS/nanobot/pull/3621))**
  * **提醒**：该 PR 体积较大且涉及架构变更，建议维护者明确是否接受此方向的演进，以免社区开发者徒劳。
* **[需讨论的 PR] MCP 图像响应处理 ([PR #2438](https://github.com/HKUDS/nanobot/pull/2438))**
  * **提醒**：自 3 月底提交以来处于挂起状态。随着 MCP (Model Context Protocol) 生态的日益火热，建议维护者抽空 Review 以完善多模态体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-05)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 项目今日维持了**高度活跃**的开发与社区互动状态，24 小时内共产生 50 条 Issue 更新（新开/活跃 38 条，关闭 12 条）和 50 条 PR 更新（待合并 27 条，合并/关闭 23 条）。项目整体迭代速度极快。

然而，今日的焦点被一个 **P0 级别的严重回归问题**占据：由于 `prompt_toolkit` 不支持 Shift 修饰符，导致 v0.12.0 在 macOS 和 Linux 上出现启动即崩溃的灾难性 Bug。同时，社区披露了多个涉及 API 密钥泄露和沙箱绕过的**高危安全漏洞**，值得所有部署者高度警惕。

---

## 2. 版本发布

**无新版本发布**。
当前最新版本仍为 2026-04-30 发布的 `v0.12.0`。鉴于今日暴露的多个 P0 级启动崩溃和安全漏洞，预计维护团队将在近期紧急发布 `v0.12.1` 修补版本。

---

## 3. 项目进展

今日共有 23 个 PR 被合并或关闭，主要围绕 v0.12.0 的紧急修复与核心组件打磨：

*   **CLI 启动崩溃修复**：核心维护者合并了 PR [#19895](https://github.com/nousresearch/hermes-agent/pull/19895)（使用 try/except 块包裹无效的 c-S-c 键绑定）作为紧急止血方案，随后通过 PR [#19919](https://github.com/nousresearch/hermes-agent/pull/19919) 彻底删除了该段死代码。此系列修复解决了所有用户无法启动 TUI 的问题。
*   **Gateway 稳定性优化**：合并了多个修复，包括清理网关异步生成器报错日志噪音的关联处理（关联 Issue [#19824](https://github.com/nousresearch/hermes-agent/issues/19824) 和 [#19823](https://github.com/nousresearch/hermes-agent/issues/19823)）。
*   **TUI 界面体验改善**：合并了 PR [#15329](https://github.com/nousresearch/hermes-agent/pull/15329) 修复了后台进程完成通知无法送达 TUI 的 Bug；以及 PR [#12982](https://github.com/nousresearch/hermes-agent/pull/12982) 解决了用户手动上滑查看历史时自动回底部的粘性滚动问题。
*   **其他基础设施**：PR [#14582](https://github.com/nousresearch/hermes-agent/pull/14582) 改进了 `hermes status` 对本地环境配置状态的诊断准确度。

---

## 4. 社区热点

今日讨论最热烈的问题集中在基础可用性与安全性配置上：

*   **CLI 崩溃反馈潮**：Issue [#19894](https://github.com/nousresearch/hermes-agent/issues/19894) (macOS) 和 Issue [#19896](https://github.com/nousresearch/hermes-agent/issues/19896) (Linux) 引发大量用户跟帖（分别获得 6 条和 2 条评论，后者获 👍4）。背后的核心诉求是对 CLI 基础可用性的硬性要求，任何导致闪退的回归都会严重挫伤社区信任。
*   **外部 Ollama 连接问题**：Issue [#7494](https://github.com/nousresearch/hermes-agent/issues/7494) 持续活跃（6 评论）。大量内网部署用户反馈无法连接远程 Ollama 实例，表明 Hermes 在处理非 localhost 网络拓扑时存在解析缺陷。
*   **长期记忆与上下文能力受挫**：Issue [#14420](https://github.com/nousresearch/hermes-agent/issues/14420)（5 评论）反映 Agent 无法基于历史上下文记忆准确回答，这是个人 AI 助手的核心痛点，表明当前 RAG 或上下文召回机制在 Ollama 等本地模型下表现欠佳。

---

## 5. Bug 与稳定性

今日报告了大量严重级别较高的 Bug，以下是按严重程度排序的核心问题：

### 🔴 P0 级：灾难性崩溃与安全漏洞
*   **启动即崩溃 (已修复)**：[#19903](https://github.com/nousresearch/hermes-agent/issues/19903) / [#19894](https://github.com/nousresearch/hermes-agent/issues/19894)。`prompt_toolkit` 无法解析 `c-S-c` 导致 TUI 退出。已有修复 PR 合并。
*   **API 密钥明文写入本地文件**：[#19845](https://github.com/nousresearch/hermes-agent/issues/19845)。Session Capture 功能将包含 Authorization 头的 HTTP 载荷未经脱敏直接写入 `session_*.json`，严重违反本地数据安全。
*   **API 密钥在聊天平台泄露**：[#19897](https://github.com/nousresearch/hermes-agent/issues/19897)。`HERMES_REDACT_SECRETS` 默认为 OFF，导致 Telegram/Discord 机器人在回复中直接回显 API Key。
*   **环境变量沙箱绕过**：[#4427](https://github.com/nousresearch/hermes-agent/issues/4427)。子进程可通过读取 `/proc/<parent_pid>/environ` 绕过 Hermes 的密钥清洗机制。

### 🟠 P1/P2 级：核心功能受限
*   **TUI 配置引发崩溃**：[#19915](https://github.com/nousresearch/hermes-agent/issues/19915) (空字符串导致 REPL 崩溃)；[#19280](https://github.com/nousresearch/hermes-agent/issues/19280) (macOS 调整终端窗口大小导致状态栏重复和空白行泛滥)。
*   **Discord 消息丢失**：[#19822](https://github.com/nousresearch/hermes-agent/issues/19822)。当辅助任务（视觉检测、标题生成）在 "response ready" 之后执行时，Discord 适配器会异常且不发送消息。
*   **文件系统污染**：[#19798](https://github.com/nousresearch/hermes-agent/issues/19798)。`read_file` 返回的带行号内容在模型使用 `write_file` 回写时未被剥离，导致源码和 `.env` 被静默破坏。（注：PR [#19920](https://github.com/nousresearch/hermes-agent/pull/19920) 正着手修复静默报错问题）。

---

## 6. 功能请求与路线图信号

社区提出了一系列提升多 Agent 编排与可观测性的需求，展现了项目向企业级/重度个人应用演进的信号：

*   **多路复用路由**：Issue [#19809](https://github.com/nousresearch/hermes-agent/issues/19809) 请求在单一 Discord 网关进程下支持按频道路由到不同 Profile（无需启动多个 Bot）。这是实现多角色共生的强诉求。
*   **长任务可观测性**：
    *   [#19816](https://github.com/nousresearch/hermes-agent/issues/19816) 请求在任务执行期间实时写入 `state.db`，而非等待 session 结束。
    *   [#19922](https://github.com/nousresearch/hermes-agent/issues/19922) 要求在 Gateway 消息页脚展示完整的 Token 用量和成本信息，方便监控。
*   **长上下文/Agent 自动续命**：Issue [#16068](https://github.com/nousresearch/hermes-agent/issues/16068) (已关闭，关联 PR 合并) 以及 [#19818](https://github.com/nousresearch/hermes-agent/issues/19818) 探讨了达到最大迭代次数后如何平滑保持会话链。PR [#19508](https://github.com/nousresearch/hermes-agent/pull/19508) 提出了基于 EMA 的技能调用追踪架构，可能为后续更智能的任务调度打下基础。

---

## 7. 用户反馈摘要

综合今日 Issues 评论，提取用户痛点与使用场景如下：
1.  **本地算力用户的挫折感**：大量用户使用 Ollama 等本地模型运行 Hermes，但遭遇了连接拒绝（#7494）和上下文记忆缺失（#14420）。本地模型配合 Agent 的鲁棒性是目前最大短板。
2.  **对无缝多平台输出的期望**：Web UI 用户反馈需要手动刷新页面才能看到 Agent 响应（#19543），Discord 用户经常遭遇消息“吞没”（#19822），表明项目的异步 Gateway 流控仍不够稳定。
3.  **“开箱即用”的配置体验依然欠缺**：`mcp add` 子命令静默失败（#19785）、`claw migrate` 生成错误的 API 模式（#19861）等，暴露了 CLI 工具链的用户体验测试不足。

---

## 8. 待处理积压

以下关键问题仍未得到官方有效回应或修复，建议维护者重点关注：

*   **🔴 [长期安全积压] 环境变量过滤绕过 (P0)**：[#4427](https://github.com/nousresearch/hermes-agent/issues/4427)。自 4 月 1 日提出至今，仍可通过 `/proc` 接口提取密钥，影响了所有开启工具调用的高级 Agent 场景。
*   **🟠 [长期功能积压] Hindsight 守护进程自毁 (P0/内存功能)**：[#7149](https://github.com/nousresearch/hermes-agent/issues/7149)。自 4 月 10 日提交，内嵌式记忆守护进程在空闲超时后关闭且无法自启，导致长期记忆功能形同虚设。
*   **🟡 [长期缺陷积压] Ollama 远程端点不通 (P2)**：[#7494](https://github.com/nousresearch/hermes-agent/issues/7494)。自 4 月 11 日提交，依然未能支持内网/远程 Ollama 地址解析，严重制约了私有化部署。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-05)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了**极高的开发活跃度与社区参与度**，共有 35 个 PR 发生状态变更，其中 19 个 PR 顺利合并或关闭，项目迭代节奏紧凑。社区贡献主要聚焦于**多渠道适配（如 DeltaChat、WhatsApp 改进）**以及**部署体验与稳定性的深度优化**。虽然未发布新版本，但大量核心 Bug 的修复和底层依赖的升级（如 Baileys v7）为下一个稳定版本的发布打下了坚实基础。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
今日共有 19 个 PR 被合并或关闭，项目整体在多渠道支持、容器化运行和安装体验上取得了显著进展：

- **多渠道适配扩展**：
  - **[#2192](https://github.com/qwibitai/nanoclaw/pull/2192) [CLOSED]**: 成功合并了 DeltaChat 渠道适配器，进一步拓宽了 AI 智能体的通信平台边界。
- **核心稳定性与 SDK 修复**：
  - **[#2242](https://github.com/qwibitai/nanoclaw/pull/2242) [CLOSED]**: 修复了 `allowedTools` 过滤器静默丢弃 MCP 服务器注册的严重 Bug，将静态白名单改为动态推导（对应修复 Issue #2241）。
  - **[#2251](https://github.com/qwibitai/nanoclaw/pull/2251) [CLOSED]**: 增加了 DeltaChat 的 `namespacedPlatformId` 排除项。
- **安装部署与体验优化**：
  - **[#2055](https://github.com/qwibitai/nanoclaw/pull/2055) [CLOSED]**: 修复了安装后 `onecli` 命令不可达的 PATH 注入问题。
  - **[#2252](https://github.com/qwibitai/nanoclaw/pull/2252) [CLOSED]** & **[#2250](https://github.com/qwibitai/nanoclaw/pull/2250) [CLOSED]**: 分别增加了对 Google Compute Engine VM 不兼容环境的提前警告，以及在宿主机硬件规格（内存/磁盘）不足时的前置拦截提示。
  - **[#2245](https://github.com/qwibitai/nanoclaw/pull/2245) [CLOSED]**: 统一了容器构建等待时间的 `fmtDuration` 格式化输出。
- **其他**：包含多个由社区驱动的 Feature 尝试（如 WhatsApp API 集成、外部 ffmpeg 工具集等），部分因不符合规范被关闭，但也展现了社区对多媒体处理能力的强烈诉求。

---

## 4. 社区热点
今日的 Issues 和 PRs 揭示了社区在**本地模型接入**和**多平台一致性**方面的强烈关注：
- **llama.cpp 兼容性问题**：**[Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234)** 引起了本地部署用户的共鸣。用户反馈 NanoClaw 无法与 llama.cpp 正常通信，虽然 llama-server 响应了请求，但 NanoClaw 抛出了超时错误。这暴露出项目在处理非官方默认后端（如 Anthropic）时的健壮性不足。
- **OpenCode 多供应商支持**：**[PR #2262](https://github.com/qwibitai/nanoclaw/pull/2262)** 提出修复在使用非 Anthropic 供应商（如 DeepSeek、OpenRouter）时提示“no providers found”的问题，进一步印证了社区对**打破单一 LLM 绑定**的迫切需求。

---

## 5. Bug 与稳定性
今日报告了数个高危 Bug，部分已迅速得到社区提交的修复 PR：

1. **[High] 静默数据丢失：`container.json` 损坏被清空** 
   - **[Issue #2257](https://github.com/qwibitai/nanoclaw/issues/2257)**：当 `container.json` 损坏时，下次生成容器会静默抹除用户的自定义配置（挂载、MCP 服务器、允许的工具等）。*目前尚无对应 Fix PR，需优先关注。*
2. **[High] MCP 服务器注册失效** 
   - **[Issue #2241](https://github.com/qwibitai/nanoclaw/issues/2241)**：通过 `add_mcp_server` 注册的工具被 SDK 的静态过滤器静默丢弃。
   - **✅ 已修复**：**[PR #2242](https://github.com/qwibitai/nanoclaw/pull/2242)** 已合并。
3. **[High] v2 架构过时引用导致异常** 
   - **[PR #2255](https://github.com/qwibitai/nanoclaw/pull/2255)** 指出代码中仍残留 v1 时代的 `/workspace/group` 路径，导致容器技能运行异常，PR 已提交替换为正确的 `/workspace/agent`。

---

## 6. 功能请求与路线图信号
从当前活跃的 PR 来看，项目的下一步演进方向呈现出明显的信号：
- **底层通信升级**：**[PR #2259](https://github.com/qwibitai/nanoclaw/pull/2259)** 正在解决 WhatsApp 的 LID 解析失败和会话分裂问题，计划将 Baileys 从 v6 升级到 v7，这将是 WhatsApp 渠道的一次重大重写修正。
- **细粒度权限控制**：**[PR #2248](https://github.com/qwibitai/nanoclaw/pull/2248)** 提出了针对不同渠道接入添加读写权限分离的设计，意味着 NanoClaw 正在向多租户/复杂授权场景进化。
- **多媒体处理能力**：**[PR #2261](https://github.com/qwibitai/nanoclaw/pull/2261)** 尝试引入基于 MCP 的 ffmpeg/ffprobe 工具链，表明用户不仅满足于文本交互，对音视频处理智能体的需求正在浮现。

---

## 7. 用户反馈摘要
- **痛点（长尾部署环境）**：在无头服务器或 VM 环境中部署的用户（尤其是 Telegram/WhatsApp 渠道）遇到了较多摩擦，例如找不到打开 Telegram 的方式（**[PR #2249](https://github.com/qwibitai/nanoclaw/pull/2249)** 解决了此问题），或由于 GCE 环境缺少 sudo 权限导致安装失败。
- **痛点（异构 LLM 接入）**：尝试使用本地模型或第三方推理 API 的用户在连接和 Provider 识别上屡屡碰壁。
- **满意度**：社区提交 PR 的质量普遍较高，遵循了项目的 `contributing-guide` 规范。诸如 `setup/auto.ts` 中的体验优化和前置硬件检查等 PR，反映出核心团队对“开箱即用”体验的重视得到了社区的高度认同与配合。

---

## 8. 待处理积压
- **紧急需处理**：**[Issue #2257](https://github.com/qwibitai/nanoclaw/issues/2257)**（配置文件损坏静默清空）涉及核心数据丢失，目前 0 评论，需维护者立即介入评估。
- **长期活跃 PR 等待 Review**：
  - **[PR #2143](https://github.com/qwibitai/nanoclaw/pull/2143)**：为活跃的 Agent 运行添加管理员取消命令的 PR，已开放 5 天，等待核心团队 Review。
  - **[PR #2260](https://github.com/qwibitai/nanoclaw/pull/2260)**：修复 WhatsApp 数据库迁移步骤导致的重复行问题，是解决即时通信稳定性的关键一环。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 项目 2026-05-05 日报：

# 📝 NullClaw 项目动态日报 (2026-05-05)

## 1. 今日速览
过去 24 小时内，NullClaw 项目保持了较高的社区活跃度。虽然今日无新版本发布，但开发与讨论重心正向**系统安全底座重构**与**底层语言适配**倾斜。Issues 板块有 3 条活跃讨论，核心聚焦于低资源设备的搜索兼容性和沙箱启动机制；PR 板块共有 4 次更新，其中涵盖了黑客松提交的数据治理层。整体来看，项目处于功能横向扩展与底层稳定性打磨并重的阶段，社区反馈积极，生态健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 1 个 PR 被关闭，另有 3 个待合并的 PR 正在推进，为项目的底层安全与代码质量提供了重要支撑：

- **PR #884 [CLOSED] Fix/add crit tests** (作者: DonPrus):
  该 PR 补充了关键的 Zig 测试用例，覆盖了所有权、生命周期、安全路由和解析器等高风险运行时契约，并修复了在增加覆盖率过程中暴露的若干生产环境问题。此举极大增强了项目核心逻辑的鲁棒性。
- **PR #883 [OPEN] probe: resolve executable before spawning child process** (作者: mark-os):
  针对 Zig 标准库中 `execve` 调用失败会导致子进程变为僵尸进程的 Bug，引入了预生成执行文件解析检查。这直接对齐了 Issue #882 中提到的沙箱探测问题，提升了启动阶段的系统安全性。
- **PR #887 [OPEN] Fix build with zig v0.16 for win/linux** (作者: qxo):
  修复了项目在 Zig v0.16 环境下的构建问题，确保了项目在 Windows 和 Linux 平台上能够跟进最新版编译工具链。

## 4. 社区热点
今日最受关注的讨论是关于**弱资源设备运行兼容性**以及**沙箱机制优化**：

- **[#871 [bug] Critical: web_search is impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871)** (5 条评论，持续活跃中)
  **分析**：NullClaw 定位包含在廉价、低性能设备上运行，但当前的 `web_search` 强依赖需要外部 API Key 的 Brave Search，导致核心功能在离线或弱网环境受限。用户呼吁原生支持 DuckDuckGo，反映了社区对“轻量化”和“开箱即用”的强烈诉求。
- **[#882 sandbox: default to Landlock on Linux](https://github.com/nullclaw/nullclaw/issues/882)** (2 条评论)
  **分析**：当前的沙箱后端在启动时会自动探测 `firejail`、`bwrap` 和 `docker`，这种多次派生子进程的行为拖慢了启动速度且容易引发外部依赖报错。作者提议默认在 Linux 上采用 Landlock，标志着项目正在向更轻量、内核级的原生安全机制演进。

## 5. Bug 与稳定性
今日共记录了 2 个值得关注的 Bug 或稳定性隐患：

1. **[Critical] 弱资源设备搜索功能失效** ([Issue #871](https://github.com/nullclaw/nullclaw/issues/871))：
   缺乏对轻量级搜索引擎（如 DuckDuckGo）的直接支持，导致核心功能在目标设备（弱资源设备）上不可用。**目前暂无对应的 fix PR**。
2. **[Medium] 沙箱启动探测引发稳定性问题** ([Issue #882](https://github.com/nullclaw/nullclaw/issues/882))：
   自动探测外部沙箱工具不仅拖慢启动，还可能因为外部工具异常而报错。**已有对应 fix PR**：[PR #883](https://github.com/nullclaw/nullclaw/pull/883) 优化了子进程生成逻辑，提出在探测前优先验证可执行文件。
3. **[Medium] Zig 标准库引发僵尸进程风险** ([PR #883](https://github.com/nullclaw/nullclaw/pull/883))：
   由于底层 `execve` 调用的已知缺陷，可能导致进程挂起。目前正通过应用层的预检逻辑进行规避。

## 6. 功能请求与路线图信号
从今日的动态中，可以提取出未来版本迭代的几个明显信号：

- **可见性与思维链展示**：
  [Issue #886](https://github.com/nullclaw/nullclaw/issues/886) 提出在处理耗时较长的任务（如调用 MCP 读取 Outlook 邮件）时，终端长时间无任何输出，用户无法判断是卡死还是在计算。请求增加“思考过程/推理状态”的显示功能。**预期**：这是当前 AI Agent 类工具的普遍痛点，预计在未来版本中会被作为高优先级 UX 优化纳入路线图。
- **企业级数据治理**：
  [PR #885](https://github.com/nullclaw/nullclaw/pull/885) (黑客松提交) 引入了 NullClaw 数据治理层。虽然目前处于 Draft 阶段，但这释放了项目可能向企业级权限管控、数据流转合规方向拓展的信号。

## 7. 用户反馈摘要
结合 Issues 评论内容，提炼出以下真实用户画像与痛点：
- **痛点 1：“静默卡死”带来的焦虑**：用户在执行超过 30 分钟的 MCP 任务时，因终端无任何日志输出而感到困惑。用户迫切需要心跳反馈或进度条来确认 Agent 的存活性（来源：[#886](https://github.com/nullclaw/nullclaw/issues/886)）。
- **痛点 2：目标硬件环境适配不彻底**：很多用户确实在树莓派或低成本 VPS 上运行 NullClaw，强依赖外部 API 密钥或重型外部沙箱（如 Docker）使得应用失去了“轻量”的初衷（来源：[#871](https://github.com/nullclaw/nullclaw/issues/871), [#882](https://github.com/nullclaw/nullclaw/issues/882)）。

## 8. 待处理积压
- **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) 需要架构层决策**：此缺陷已被标记为 Critical 并产生了 5 条讨论，但至今未指派处理人。由于涉及底层搜索架构的调整（集成 DuckDuckGo 或其他无 Key 方案），需要维护者尽快给出架构倾向或发起 RFC 讨论，以避免阻塞弱资源设备用户的正常使用。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是 **IronClaw** 项目 2026 年 5 月 5 日的开源项目动态日报。

### 1. 今日速览
过去 24 小时内，IronClaw 项目保持了**极高的架构演进活跃度**。虽然今日没有新的版本发布，但项目正处于 “Reborn” 核心架构重构的密集攻坚期。今日共有 17 个 PR 更新（12 个待合并，5 个已合并/关闭），核心开发者正全力推进原生存储、事件溯源和 WebAssembly 凭证签名等底层基建。同时，社区也展现出良好的互动，不仅有外围贡献者提交了微信渠道集成和安全策略文档，主仓库的 Issue 讨论也聚焦于系统可见性与代码化配置等长远规划。整体而言，项目目前处于**高速迭代、基础设施大幅重构**的健康阶段。

### 2. 版本发布
今日**无**新版本发布。

### 3. 项目进展
今日共有 5 个 PR 被合并或关闭，标志着多个底层组件和修复工作取得了实质性进展：
*   **Reborn 原生内存层测试闭环**：`#3184` 和 `#3185` 被关闭，这两个 PR 是构建原生 Reborn 内存存储的重要一环，成功移植并验证了基于 LibSQL 和 Postgres 仓储层的纯行为契约和垂直集成测试。
*   **Abound 集成与任务演示修复**：`#3241` 和 `#3242` 关闭，补充了缺失的 `mission md` 文件，并增加了目标汇率检查的任务支持，推进了 Abound 金融场景的落地。
*   **OpenAI 视觉兼容性修复**：`#2390` 被合并，修复了所有兼容 OpenAI 的视觉模型在处理图像时因缺少 `detail` 字段而报错的致命问题（将默认值设为 `auto`），大幅提升了多模态场景的稳定性。

### 4. 社区热点
今日最受关注的讨论集中在系统架构的顶层设计上：
*   **[EPIC] 配置即代码**：[#3036 [OPEN]](https://github.com/nearai/ironclaw/issues/3036)（👍 1，评论 3）。由核心成员发起，旨在解决当前操作员需要手动混合编辑 `.env`、JSON 和工作区文档的痛点。社区呼吁引入租户蓝图的声明式配置，建立标准的 schema 和审计追踪。
*   **工具可见性服务**：[#3090 [OPEN]](https://github.com/nearai/ironclaw/issues/3090)（评论 3）。讨论了 Reborn 架构中的 `ToolSurfaceService` 设计，明确强调该服务**仅提供可见性计算，绝不授予实际权限**，所有副作用仍需经过宿主运行时的安全审计。

### 5. Bug 与稳定性
今日修复和暴露的稳定性问题如下：
*   **[已修复] OpenAI 兼容视觉报错**：[#2390](https://github.com/nearai/ironclaw/pull/2390) 修复了 `src/agent/attachments.rs` 中 `detail: None` 导致所有 OpenAI 兼容提供商处理图像崩溃的回归问题（已合并）。
*   **[已修复] 引擎审批门崩溃**：[#3157 [OPEN]](https://github.com/nearai/ironclaw/pull/3157) 修复了 CodeAct 脚本在遇到需要审批的工具时，错误抛出 `RuntimeError: execution paused by gate 'approval'` 而不是暂停等待用户交互的问题。
*   **[已修复] E2E 测试流水线阻断**：[#3235 [OPEN]](https://github.com/nearai/ironclaw/pull/3235) 修复了导致 Live Canary 认证测试套件连续失败 3 天以上的 engine-v2 契约变更问题。

### 6. 功能请求与路线图信号
结合近期的 PR 动向，IronClaw 的下一个版本将具有以下重磅特性：
*   **WebAssembly 细粒度安全签名**：[#3240](https://github.com/nearai/ironclaw/pull/3240) 正在引入基于请求的凭证签名（支持 HMAC, EIP-712, NEP-413），这将极大增强沙盒环境下的密钥安全性。
*   **事件溯源基建落地**：[#3171](https://github.com/nearai/ironclaw/pull/3171) 和 [#3212](https://github.com/nearai/ironclaw/pull/3212) 预示着项目正在全面引入事件驱动架构，支持 JSONL、Postgres 和 libSQL 的持久化审计存储。
*   **微信渠道官方支持**：[#1666](https://github.com/nearai/ironclaw/pull/1666) 正在增加第一方支持的微信 DM 渠道（基于 WASM），将 IronClaw 的触达面扩展至亚洲最大的即时通讯生态。

### 7. 用户反馈摘要
从目前的 Issue 和 PR 摘要来看，高级用户和系统运维人员的核心痛点在于**配置管理的碎片化**（混合使用多种配置文件缺乏统一标准）。此外，提供者兼容性（特别是视觉模型的细节参数）依然是普通开发者在使用 IronClaw 构建多模态 Agent 时的一大阻力。Web 渠道的拓展（如 Wechat 集成的讨论）反映出用户强烈希望将 IronClaw 作为跨平台个人助手的统一大脑。

### 8. 待处理积压
目前有大量高价值的巨型 PR（Size: XL）处于 Open 状态，需要维护团队重点关注 Review 以防分支偏离加剧：
*   **Abound 生产级演示部署**：[#1764 [OPEN]](https://github.com/nearai/ironclaw/pull/1764)（已打开超过一个月，涵盖 API 修复、凭证注入等核心改动）。
*   **Reborn 基底合入主干**：[#3230 [OPEN]](https://github.com/nearai/ironclaw/pull/3230) 这是一个里程碑式的 PR，旨在将当前的 Reborn 架构以“默认关闭”的方式合入 `main` 分支以减少长期分支漂移，建议优先进行 CI 验证和代码合入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目动态日报（2026-05-05）：

---

# 📡 LobsterAI 项目动态日报 (2026-05-05)

**数据统计周期**：过去 24 小时 | **项目仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览
过去 24 小时，LobsterAI 仓库整体活跃度呈现“低开高走”的维护态势，暂无新版本发布。项目今日成功关闭了 1 个关于第三方账号认证的 Issue，解决了一项用户侧的阻塞问题。同时，有 2 个处于待合并状态的 PR 迎来了更新：其中一个是针对前端 Electron 框架的大版本依赖升级，另一个则是针对长会话场景的底层性能优化。整体而言，项目当前的重心倾向于**系统稳定性维护与底层性能打磨**。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
虽然过去 24 小时内没有 PR 被正式合并（待合并: 2，已合并: 0），但以下几个正在积极推进的 PR 值得关注，它们代表了项目近期的演进方向：

*   **性能优化：流式消息查找复杂度从 O(n) 降至 O(1)**
    *   **PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811) [OPEN]**：针对 `cowork` 模块进行了深度性能调优。通过引入 `messageIndexById` 索引表，解决了长会话中每次更新消息都需要线性遍历数组的性能瓶颈。此 PR 如合并，将大幅提升 AI 长文本输出时的前端渲染流畅度。
*   **依赖升级：Electron 大版本更新**
    *   **PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) [OPEN]**：由 Dependabot 自动发起，将 `electron` 从 40.2.1 升级至 41.5.0，同时更新了 `electron-builder`。此举有助于保持桌面端底层架构的安全性与兼容性。

## 4. 社区热点
今日讨论最多的聚焦在第三方服务鉴权问题上：
*   **OpenAI 区域认证失败问题**：[Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877) 记录了用户在使用 ChatGPT 登录时遇到 HTTP 403 错误（`unsupported_country_region_territory`）。该问题由于涉及网络环境与 OpenAI 的区域策略，引发了开发者的关注与讨论，目前该 Issue 已被官方关闭，可能已提供解决方案或确认为外部环境限制。

## 5. Bug 与稳定性
*   🟡 **中低优先级：OpenAI 登录鉴权阻断**
    *   **表现**：[Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877) 汇报了 ChatGPT Sign-in 及 Token 交换失败的问题，返回 403 请求禁止错误。
    *   **状态**：已关闭 (CLOSED)。通常此类问题由 OpenAI 接口侧的区域风控策略导致，非项目代码逻辑 Bug。目前暂无对应的代码级 Fix PR，推测是通过指导用户调整网络代理环境解决。

## 6. 功能请求与路线图信号
*   **深度性能调优信号**：从 [PR #811](https://github.com/netease-youdao/LobsterAI/pull/811) 的推进可以看出，团队正在积极解决**重负载、长会话（Long Context）**场景下的前端性能瓶颈。这释放出一个信号：项目正在为承载更强大的长文本处理模型（或更复杂的 CoT 思考链输出）做底层性能准备，这也是下一代 AI 助手的核心刚需。

## 7. 用户反馈摘要
通过对近期 Issue 的分析，提炼出真实用户的痛点如下：
*   **痛点 1：复杂的网络代理配置门槛**：在 [Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877) 中，用户反馈本地的 Codex 可以正常使用，但 LobsterAI 的 ChatGPT 登录却失败。这表明部分用户在配置全局代理与桌面级应用（如 Electron 架构应用）的网络穿透时存在体验断层，期望未来能有更原生的代理配置方案或更明确的错误提示指引。

## 8. 待处理积压
*   ⚠️ **PR 合并积压**：今日活跃的两个 PR 均处于长期 Open 状态。特别是依赖升级 [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（创建于 2026-04-02）和 性能优化 [PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)（创建于 2026-03-25），均已停滞超过一周以上。
    *   *建议*：提请维护团队关注 Electron 升级带来的潜在破坏性变更评估，并尽快验证长会话性能优化 PR 的合并条件，以保持社区贡献者的积极性并推进版本迭代。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-05)

> **数据源**: github.com/moltis-org/moltis | **统计周期**: 过去 24 小时

## 1. 今日速览
Moltis 项目在过去 24 小时内整体处于**低活跃度但保持稳步推进**的状态。社区侧，新增了 1 个由用户提交的 Bug 报告，聚焦于 Docker 沙箱环境在并发执行工具时的冲突问题；研发侧，核心贡献者处理了 1 个 Pull Request，主要针对端到端（E2E）测试在 CI 环境下的排查能力进行了增强。今日无新版本发布，无破坏性变更，项目整体代码库处于稳定维护与问题排查期。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日项目在工程化质量和 CI/CD 稳定性方面迈出了一小步：
*   **[CLOSED] PR #965 [debug(e2e)]: add RPC logging + gateway.log capture for CI diagnosis** (作者: [penso](https://github.com/molz-org/moltis/pr/965))
    *   **进展概述**：该 PR 已被合并/关闭。主要目的是解决本地测试正常但 CI 环境中 RPC 经常挂起（触发 30s 超时）的顽疾。
    *   **具体改进**：
        1. 在 `info` 级别记录所有 WS RPCs（包含方法名、耗时、成功/失败状态）。
        2. 捕获连接关闭事件（`warn` 级别）。
        3. 将 Gateway stderr 重定向到 `gateway.log` 并作为 CI artifact 上传。
        4. 增加了锁获取和 RPC 调度耗时超过 50ms 的警告机制。
    *   **价值**：虽然未直接修复业务代码，但极大提升了分布式/容器化环境下 E2E 测试失败的可观测性，为后续解决 CI 不稳定问题打下坚实基础。

## 4. 社区热点
今日社区整体较为平静，无大规模讨论。唯一的社区互动来自新提交的 Bug 报告，反映了用户在较高阶使用场景中遇到的障碍。
*   **关注焦点**: Issue #964（详见第 5 节）

## 5. Bug 与稳定性
今日收到 1 个与核心执行环境相关的 Bug 报告，按严重程度评估如下：

*   🟡 **中等** | **[Bug]: Parallel tool execution results in docker name sandbox collisions** | [Issue #964](https://github.com/molz-org/moltis/issues/964)
    *   **提交者**: faevourite
    *   **问题描述**: 用户在进行并行工具调用时，出现了 Docker 名称沙箱冲突。
    *   **影响范围**: 这表明 Moltis 的 AI 智能体在进行并行任务处理时，沙箱资源的隔离机制（特别是命名分配）可能存在并发锁或哈希冲突缺陷。这会影响多工具并行调用的可靠性。
    *   **修复状态**: 暂无关联的 fix PR，Issue 目前处于 `[OPEN]` 状态。

## 6. 功能请求与路线图信号
*今日未收到明确的新功能请求。* 
但结合 Bug 报告（Issue #964）可以洞察到：随着用户对 AI 智能体能力期待的提高，**并行执行工具**正在成为核心使用场景。项目未来的路线图可能需要着重强化底层沙箱环境的并发处理能力和资源池管理。

## 7. 用户反馈摘要
从今日的 Issue #964 中可以提炼出以下关键用户信号：
*   **用户痛点**：用户正在积极尝试使用 Moltis 的多工具并行能力来提升 AI Agent 的执行效率，但遇到了底层容器层面的冲突阻碍。
*   **使用场景**：涉及需要同时触发多个独立操作的高并发自动化工作流。
*   **反馈态度**：用户提交的报告非常规范（已完成 preflight checklist），说明该项目吸引了不少具备较高专业素质的开发者，社区质量良好。

## 8. 待处理积压
今日无长期积压（Stale）的 Issue 或 PR 被重新激活。建议维护团队近期优先关注以下事项：
1.  **跟进 CI RPC 挂起问题**：基于已合并的 PR #965 提供的日志，尽快定位并彻底解决 CI 环境中的 30s 超时问题。
2.  **排查沙箱并发冲突**：针对新提出的 Issue #964，确认沙箱命名生成算法是否具备线程/协程安全性，并在可能的情况下复现该并发场景。

---
*本报告由 AI 智能体分析生成，数据截至 2026-05-05。祝开发者们新的一天工作顺利！*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是根据您提供的 CoPaw (QwenPaw) 项目 GitHub 数据，为您生成的 2026 年 5 月 5 日开源项目动态日报。

---

# 📊 CoPaw (QwenPaw) 项目动态日报 - 2026-05-05

## 1. 今日速览
过去 24 小时，CoPaw 项目保持了极高的社区活跃度。**Issues 方面**，单日新增 14 条讨论，且无一条被关闭，表明大量新需求和建议正在涌入并等待官方评估；**PR 方面**，单日处理了高达 21 条 Pull Requests，其中 15 条被成功合并或关闭，吞吐量表现出色。
当前项目正处于**功能横向扩展与稳定性深度打磨**的并行期：社区对多 Agent 协同、新模型接入（如 Vertex AI）及安全性控制展现出浓厚兴趣；同时，针对流式输出、MCP 工具超时及底层运行时环境（如 Windows 打包、虚拟环境识别）的修复占据了主要精力。

## 2. 版本发布
**今日无新版本发布。**
*注：Issues 中出现了 `1.1.6b1` 版本反馈，预示项目可能正处于下一个次要版本的 Beta 测试阶段。*

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，项目在**运行时健壮性、MCP 协议兼容性及桌面端体验**上取得了显著进展：
*   **运行时与稳定性增强：** 
    *   合并了自动上下文压缩重试机制 ([PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783))，有效应对模型上下文溢出导致的报错。
    *   合并了修复流式输出中“思考头”泄漏的 PR ([PR #2784](https://github.com/agentscope-ai/QwenPaw/pull/2784))，优化了前端显示体验。
    *   关闭了处理模型预检与计算错误 surfaced 的 PR ([PR #2520](https://github.com/agentscope-ai/QwenPaw/pull/2520))，加强了模型调度容错。
*   **MCP 与渠道能力：** 
    *   合并了 MCP 连接错误降级处理 ([PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052))，防止工具调用失败导致整体聊天中断。
    *   合并了 MCP 导入模板改进及运行时状态诊断 ([PR #1848](https://github.com/agentscope-ai/QwenPaw/pull/1848), [PR #1978](https://github.com/agentscope-ai/QwenPaw/pull/1978))。
*   **桌面端与系统级修复：** 
    *   桌面端遗留后台进程清理机制已合并 ([PR #1479](https://github.com/agentscope-ai/QwenPaw/pull/1479))，解决了端口占用痛点。
    *   iMessage 渠道错误现已支持在前端及 CLI 展示 ([PR #763](https://github.com/agentscope-ai/QwenPaw/pull/763))。

## 4. 社区热点
今日讨论最活跃的几个话题揭示了用户对**产品机制、交互体验和核心功能**的期望：
*   **探讨 Hermes 机制升级：** 社区发起讨论，询问是否有计划借鉴 Hermes 的机制来升级 QwenPaw ([Issue #4024](https://github.com/agentscope-ai/QwenPaw/issues/4024))，反映了重度用户对底层 Agent 调度架构演进的高度关注。
*   **流式模型触发死循环：** 有用户反馈使用 MiMo/DeepSeek 等模型流式输出时，会导致 ReAct 循环重复调用工具和响应 ([Issue #4034](https://github.com/agentscope-ai/QwenPaw/issues/4034))，引发了关于模型兼容性处理的探讨。
*   **前端输入框严重卡顿：** 用户报告在特定场景下输入框卡顿严重 ([Issue #4023](https://github.com/agentscope-ai/QwenPaw/issues/4023))，直指前端 Console 的性能瓶颈。
*   **Windows 打包冲突分析：** 开发者深入分析了 `conda-pack` 与 `qwenpaw[full]` 安装时的依赖冲突 ([Issue #3988](https://github.com/agentscope-ai/QwenPaw/issues/3988))，提供了详尽的排查思路。

## 5. Bug 与稳定性
今日共收录 5 条明确的 Bug 报告，部分已得到社区快速响应并提交 PR：
*   🔴 **[高危] HTTP 网关默认未鉴权：** 暴露了 `execute_shell_command` 等高危工具，默认监听所有网卡，存在严重安全隐患 ([Issue #4037](https://github.com/agentscope-ai/QwenPaw/issues/4037))。*注：建议运维人员立即配置 `QWENPAW_AUTH_ENABLED` 环境变量。*
*   🟠 **[中等] 会话中断与 Python 解释器命中失败：** 会话卡死时中断无效，且 Skills 执行 Python 脚本时可能落入系统环境而非虚拟环境。**已有 PR 修复 ([PR #4028](https://github.com/agentscope-ai/QwenPaw/pull/4028))** ([Issue #4027](https://github.com/agentscope-ai/QwenPaw/issues/4027))。
*   🟠 **[中等] MCP 工具超时硬编码：** MCP 工具执行超时时间被错误绑定到 HTTP 客户端的 30s，导致长耗时任务必然失败 ([Issue #4033](https://github.com/agentscope-ai/QwenPaw/issues/4033))。
*   🟠 **[中等] ARM64 Docker GLIBC 不兼容：** 官方 Docker 镜像在 ARM64 架构上运行本地 LLM 时，因 Debian 12 的 GLIBC 版本过低导致 llama.cpp 崩溃 ([Issue #4025](https://github.com/agentscope-ai/QwenPaw/issues/4025))。
*   🟢 **[低危] 本地 `file://` 音频加载失败：** 处理本地媒体文件 URL 时被错误的 HTTP 下载逻辑覆盖。**已有 PR 修复 ([PR #4021](https://github.com/agentscope-ai/QwenPaw/pull/4021))**。

## 6. 功能请求与路线图信号
今日涌现了多个高质量的功能需求，为项目迭代提供了明确信号：
*   **多 Agent 协同架构演进：** 用户指出当前多 Agent 分配任务时会丢失上下文并导致轮询阻塞 ([Issue #4031](https://github.com/agentscope-ai/QwenPaw/issues/4031))。这表明 QwenPaw 的多 Agent Session 管理机制亟待重构。
*   **安全与权限管控增强：** 建议在工具层面对 MEMORY/AGENTS 等核心配置文件进行强制只读限制，防止 AI 幻觉破坏系统设定。**已有相关防护 PR 提交 ([PR #4026](https://github.com/agentscope-ai/QwenPaw/pull/4026))** ([Issue #4020](https://github.com/agentscope-ai/QwenPaw/issues/4020))。
*   **生态与渠道扩展：** 社区明确要求支持 **Google Vertex AI 渠道** ([Issue #4030](https://github.com/agentscope-ai/QwenPaw/issues/4030)) 及**一次性定时任务 Cron jobs** ([Issue #4029](https://github.com/agentscope-ai/QwenPaw/issues/4029))。
*   **前端交互优化：** 要求简化新增模型配置的繁琐步骤 ([Issue #4036](https://github.com/agentscope-ai/QwenPaw/issues/4036))。

## 7. 用户反馈摘要
*   **痛点与不满：** 用户对**前端性能（输入卡顿）**和**模型配置流程繁琐**抱怨较多；此外，对于进阶用户而言，多 Agent 状态不透明、上下文割裂是目前最大的使用阻碍。
*   **好评与认可：** 社区对项目整体的运行时容错改进（如自动重连、上下文压缩）表示认可；同时，多位“首次贡献者”成功提交了针对 Windows 环境、文件覆盖保护等痛点的高质量 PR，证明了项目 **`good first issue` 引导机制的健康有效**。

## 8. 待处理积压
*   **[长期未决的视觉体验问题] [PR #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)：** 修复 Windows 任务栏图标显示错误的 PR 自 4 月 23 日提交后，虽标记为 Under Review 但至今未合并，建议官方前端团队推进 Review。
*   **[交互体验优化] [PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829)：** 关于异步生成会话标题的 PR 停滞超一周，合并此 PR 将极大改善默认标题带来的辨识度低下问题。
*   **[安全隐患响应] [Issue #4037](https://github.com/agentscope-ai/QwenPaw/issues/4037)：** 关于 Auth 默认关闭导致的风险，建议官方团队尽快在当日给出明确的安全配置指导或在下一版本中更改默认行为。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这份报告为您梳理了 2026-05-05 ZeroClaw 项目的最新动态。整体来看，项目目前正处于新功能密集开发与历史遗留问题清理的并行期。

# ZeroClaw 项目动态日报 (2026-05-05)

## 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持了**极高的社区活跃度与开发强度**。项目共处理了 50 个 Issues（47 个新开/活跃，3 个关闭）和 50 个 PR（29 个待合并，21 个已合并/关闭），但**无新版本发布**。当前开发重心明显聚焦于 **Provider 兼容性修复、WhatsApp/Discord 等渠道的完善、Web Dashboard 升级以及成本计算追踪系统的重构**。从 Issues 反馈来看，新用户引导流程和 API 兼容性是目前用户遭遇的主要阻碍。

## 2. 版本发布
**无新版本发布**。目前项目核心开发者正在紧密推进多个大型 PR（如针对 v0.8.0 的 Schema v3 迁移 #6266）以及 v0.7.6 的技能系统 UX 优化（#6253），预计将在这些里程碑合并后进行版本迭代。

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，项目在底层架构、渠道支持和运维体验上取得了实质性进展：
*   **Jira 集成重大修复**：[PR #6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) 修复了 Jira 模块在 Server/DC 环境下的 403 认证失败问题，通过支持 Bearer token 和 API v2 解决了长期以来的死锁Bug。
*   **成本监控与告警完善**：[PR #6356](https://github.com/zeroclaw-labs/zeroclaw/pull/6356) 修复了大量非主流大模型（MiniMax, Kimi 等）成本计算静默失效的问题，现在会在缺失定价时发出警告。
*   **渠道支持拓宽**：[PR #6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) 正式将 WhatsApp 纳入计划任务的投递渠道支持列表。
*   **性能优化**：[PR #6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263) 将 `HandContext` 中的 `learned_facts` 数据结构由 `Vec` 替换为 `HashSet`，消除了 O(n²) 的性能瓶颈。
*   **基础架构准备**：[PR #6212](https://github.com/zeroclaw-labs/zeroclaw/pull/6212) 将 Node 工具链升级至 v24，为后续前端开发铺平道路。

## 4. 社区热点
今日讨论热度最高、影响面最广的议题集中在配置与模型接入方面：
*   🔥 **[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (👍0, 评论 15)**：**新安装下的 default_model 报错**。在全新 LXC 容器部署并配置 Ollama 时，引导流程结束后遭遇严重阻塞。此问题引发了大量关于本地模型配置规范和容器网络解析的讨论。
*   🔥 **[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (👍2, 评论 8)**：**DeepSeek-V4 API 兼容性失效**。由于 DeepSeek 的思维模式差异，导致其 V4-Pro 和 V4-Flash 均无法正常调用，这是当前兼容性 Provider 模块反馈最强烈的问题。
*   🔥 **[Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) (👍0, 评论 6)**：**Matrix 渠道语音转文字失败**。在使用 Element 客户端时，音频格式解析报错 `Unsupported audio format '.'`，影响了多模态交互体验。

## 5. Bug 与稳定性
今日报告了多个高优先级（P1/P2）的 Bug，部分已被标记为“阻塞工作流（workflow blocked）”：
*   **[S0 严重安全漏洞] [Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)**：Discord 渠道的聊天上下文发生“溢出”，被计划任务读取，存在严重的数据隔离/隐私泄露风险。（目前状态：Blocked，等待修复）。
*   **[S1 核心功能阻断] [Issue #6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) & [Issue #6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147)**：Bedrock 和原生 Anthropic API 在调用最新的 `claude-opus-4-7` 模型时，因 `temperature` 字段非可选而报错中断。
*   **[S1 网关可观测性缺失] [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)**：通过网关聊天成功，但 `/api/cost` 始终为零，且不写入 `runtime-trace.jsonl`。**（已有修复进度：[PR #6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)）**。
*   **[P1 引导流程错误] [Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)**：在引导过程中选择 OpenAI Codex 时，UI 却错误地提示输入 OpenAI API Key。

## 6. 功能请求与路线图信号
从近期的 Enhancement 提案中，可以清晰看出项目向**轻量化、安全强化及可视化**演进的下阶段路线图：
*   **架构精简与 WASM 化**：[Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 和 [Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) 提出剥离现有重度集成代码，转向使用 WASM 工具和 Markdown 编排的“混合技能插件”架构。
*   **Dashboard 走向完整**：[PR #6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) 引入了基于 Web Dashboard 的自更新流水线，旨在彻底消除开发者为 CLI 终端手动升级的痛点。
*   **安全机制激活**：[Issue #6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) 及其关联 [PR #6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) 正在重新激活此前被剥离的 HMAC 工具收据加密核心，这将大幅提升 Runtime 的安全性。

## 7. 用户反馈摘要
通过今日的 Issue 提炼，用户侧真实反馈呈现两极分化：
*   **痛点 1：引导体验门槛高**。大量关于 `llama-server` ([Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)) 和 `Ollama` ([Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)) 对接的反馈表明，新用户在初次配置本地或兼容模型时极易受挫。
*   **痛点 2：记忆管理缺乏直观性**。用户呼吁增加类似 Telegram/Discord 的原生轻量级记忆清除命令（如 `/clear`）（[Issue #6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150)）。
*   **赞赏点**：社区对项目“50+ Providers”的广泛兼容性表达了极高期待，特别是像 [PR #6310](https://github.com/zeroclaw-labs/zeroclaw/pull/6310) 这类快速新增特定区域节点（如 stepfun-intl）的提交受到了开发者好评。

## 8. 待处理积压
以下高优先级问题仍处于 Open 或 Blocked 状态，且评论数较多，需要核心维护团队投入精力进行 Triage：
*   **[Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)** (Context spillage from chat to schedule)：涉及 S0 级别的数据安全泄漏，标记为 Blocked，需尽快排查。
*   **[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** (Incompatible with DeepSeek-V4)：热门模型无法使用的 P1 问题，等待 Provider 模块适配。
*   **[PR #6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)** (Schema v3 migration)：这是通向 v0.8.0 的核心庞大重构，涉及几乎所有核心子系统的破坏性变更，目前状态为 `DO NOT MERGE TO MASTER YET`，需要各模块负责人协同 Review。

</details>