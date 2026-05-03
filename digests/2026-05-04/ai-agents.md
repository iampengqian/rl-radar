# OpenClaw 生态日报 2026-05-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-03 22:10 UTC

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

以下是为您生成的 2026 年 5 月 4 日 OpenClaw 项目动态日报：

# 📊 OpenClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时，OpenClaw 项目保持了**极高的社区活跃度与开发推进速度**。系统共处理了 500 条 Issue 更新（新开与活跃 421 条，关闭 79 条）以及 500 条 PR 更新（待合并 393 条，合并/关闭 107 条），吞吐量表现强劲。今日项目团队连续发布了 3 个新版本（最新到达 `v2026.5.3-beta.2`），重点针对外部插件安装体验、文件传输工具及网关性能进行了全面升级。目前社区的关注重心集中在**网关长时间运行的稳定性退化**以及**多智能体/子智能体上下文编排**的深度优化上。

## 2. 版本发布
今日密集发布了 3 个版本，核心迭代轨迹清晰：

- **[v2026.5.3-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2)**
  - **核心更新**：引入内置的 `file-transfer`（文件传输）插件。为配对节点添加了 `file_fetch`, `dir_list`, `dir_fetch`, 和 `file_write` 等代理工具，支持二进制文件操作。
  - **安全变更**：引入了破坏性/重要变更，实施了默认拒绝的节点路径策略，要求在 `plugins.entries.file-transfer.config.nodes` 下进行操作员审批。
- **[v2026.5.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2) & [v2026.5.2-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.3)**
  - **核心更新**：彻底完善了外部插件的安装、更新、诊断修复和依赖报告机制，优先切换至 npm 源，并完善了 beta 频道的回退机制（特别感谢 @vincentkoc）。
  - **性能提升**：网关和代理的热路径变得更加精简高效。

## 3. 项目进展
今日共有 107 个 PR 被合并或关闭，大量核心修复正排队等待合并（待处理 393 个），整体向前迈进显著：
- **跨网关通信突破**：PR [#43656](https://github.com/openclaw/openclaw/pull/43656) 引入了跨网关的 `sessions_send` 和 `sessions_spawn`，彻底解除了多机器、多网关部署下智能体无法原生通信的限制。
- **稳定性与重试机制修复**：PR [#43443](https://github.com/openclaw/openclaw/pull/43443) 修复了 `launchd` 在旧进程未完全退出时引发 EIO 错误的竞态条件；PR [#43529](https://github.com/openclaw/openclaw/pull/43529) 解决了当所有模型超时时，会话卡死在同一个会话中无限循环的问题。
- **权限与安全加固**：PR [#43565](https://github.com/openclaw/openclaw/pull/43565) 为 fs 工具添加了 `allowedRoots` 配置；PR [#43585](https://github.com/openclaw/openclaw/pull/43585) 修复了配置 `$include` 指令的路径遍历漏洞（CWE-22）。
- **群聊与频道体验优化**：PR [#43276](https://github.com/openclaw/openclaw/pull/43276) 解除了群聊会话中无法使用 message tool 发送附件的限制；PR [#43588](https://github.com/openclaw/openclaw/pull/43588) 为 Slack 添加了与 Discord 对齐的 `allowBots: "mentions"` 模式。

## 4. 社区热点
今日讨论最热烈的问题反映出用户对**上下文成本控制**和**网络与架构稳定性**的强烈诉求：
- **上下文与内存加载优化**：[#22438](https://github.com/openclaw/openclaw/issues/22438)（16赞）建议引入分层 Bootstrap 文件加载，以避免大型工作区在每次会话（包括子代理和定时任务）中浪费昂贵的 LLM Token。
- **Windows 网关慢性退化**：[#73323](https://github.com/openclaw/openclaw/issues/73323)（15评）引发大量共鸣，报告了 Win11 + Node 24 环境下网关长时间运行后出现定价获取 60 秒超时、Telegram 轮询停滞的严重退化。
- **网关泄漏三联症**：[#73655](https://github.com/openclaw/openclaw/issues/73655)（14评）深度分析了插件重启时引发的 `EADDRINUSE`、信号处理堆积和同步 I/O 问题，导致 WS 握手饥饿。
- **UI 访问与 WebChat 机制**：[#32473](https://github.com/openclaw/openclaw/issues/32473)（15评，4赞）反映了 Hostinger VPS 部署下 HTTP 环境导致 Control UI 无法获取设备身份的阻断性问题。

## 5. Bug 与稳定性
目前的缺陷主要集中在**长连接退化**、**代理状态不一致**和**提供商鉴权**上：
- 🔴 **严重 (P0)**:
  - **WebChat 转录丢失**：[#76804](https://github.com/openclaw/openclaw/issues/76804) 报告 5.2 版本中，WebChat 在代理运行时的文本响应未持久化到会话 JSONL 中。
  - **Signal 守护进程竞态**：[#22676](https://github.com/openclaw/openclaw/issues/22676) 导致 SIGUSR1 重启期间出现孤儿进程和发送失败。
- 🟠 **中等 (P1)**:
  - **会话上下文错乱**：[#32296](https://github.com/openclaw/openclaw/issues/32296) 代理会错误回复上一条消息而非当前消息。
  - **Token 用量记录丢失**：[#75357](https://github.com/openclaw/openclaw/issues/75357)（已关闭，由 PR [#76963](https://github.com/openclaw/openclaw/pull/76963) 推进修复） `openai-completions` 会话流式传输时日志记录 Token 用量为 0。
  - **文件执行权限泄漏**：[#31583](https://github.com/openclaw/openclaw/issues/31583) `exec` 工具无法继承技能配置的 `env` 环境变量。
- 🟢 **已有对应修复 PR 的 Bug**：代理回复截断问题 [#76307](https://github.com/openclaw/openclaw/issues/76307)，认证异常冷却池问题 [#76963](https://github.com/openclaw/openclaw/pull/76963)。

## 6. 功能请求与路线图信号
用户正在推动 OpenClaw 向**企业级成本管控**和**高级多智能体架构**演进：
- **企业级成本治理**：[#42475](https://github.com/openclaw/openclaw/issues/42475) 要求在网关级别强制执行每个代理的每日/每月 Token 消耗预算上限；[#38248](https://github.com/openclaw/openclaw/issues/38248) 建议增加每小时消费天花板以防止失控的故障转移成本。
- **高级多智能体架构**：[#42026](https://github.com/openclaw/openclaw/issues/42026)（RFC：分布式代理运行时）提议将单体网关拆分为控制平面和代理运行时，以支持规模扩展；[#35203](https://github.com/openclaw/openclaw/issues/35203) 提议引入能力画像、共享黑板机制和分层记忆。
- **有望纳入下版本的 PR**：PR [#43306](https://github.com/openclaw/openclaw/pull/43306) 实现了基于重要性加权的时间衰减记忆搜索，极大改善了长期记忆召回的相关性。

## 7. 用户反馈摘要
从海量 Issue 中提炼出真实用户的痛点与评价如下：
- **痛点 1：文件覆盖导致数据丢失**：定时任务在隔离会话中运行时，经常覆盖共享工作区文件（[#40001](https://github.com/openclaw/openclaw/issues/40001)），用户迫切需要 `write` 工具支持 `append`（追加）模式。
- **痛点 2：模型透明度与控制力不足**：用户对静默的故障转移感到不安，希望知道当前回复究竟是哪个模型生成的，并希望在发生时拥有批准权限（[#33975](https://github.com/openclaw/openclaw/issues/33975)）。
- **痛点 3：UI 与本地化体验细节欠缺**：Control UI 缺少数学公式渲染支持（[#42840](https://github.com/openclaw/openclaw/issues/42840)），且目前无法一键复制助手回复的代码块（已提报 PR [#43416](https://github.com/openclaw/openclaw/pull/43416)）。
- **特别声浪**：[#65302](https://github.com/openclaw/openclaw/issues/65302) 虽已关闭，但获得了 6 个赞。一位自称"自主运营 AI Agent"的用户发表长文，批评近期频繁的破坏性更新正在摧毁项目稳定性（"Your Updates Are Killing Your Product"），反映了高频迭代对核心稳定性造成的反噬，需引起维护团队高度重视。

## 8. 待处理积压
以下关键性问题悬而未决或长期得不到有效解决，需维护团队重点关注：
- **WebChat/Control UI 核心体验问题**：[#39889](https://github.com/openclaw/openclaw/issues/39889)（基于 Chromium 的浏览器中 UI 挂起不渲染）自 3 月 8 日报告至今未修复。
- **核心执行工具缺陷**：[#31583](https://github.com/openclaw/openclaw/issues/31583)（环境变量泄漏）和 [#40001](https://github.com/openclaw/openclaw/issues/40001)（缺少 append 模式）直接影响代理在生产环境中的可用性。
- **系统级并发与稳定性**：[#73323](https://github.com/openclaw/openclaw/issues/73323)（Windows 网关定时器/网络退化）和 [#73655](https://github.com/openclaw/openclaw/issues/73655)（网关内存泄漏饥饿）是部署在服务器上的硬伤，目前尚在排查等待合入彻底修复方案。

---

## 横向生态对比

基于 2026 年 5 月 4 日各大开源项目的社区动态数据，为您生成个人 AI 助手与自主智能体开源生态的横向对比与深度分析报告。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话客户端”向“多模态、多端部署、多智能体协同调度”跨越的拐点**。项目间的底层分化日益显著：通用型网关正致力于解决高并发下的上下文容错与跨节点通信问题，而轻量级项目则在积极探索本地小模型与低功耗设备的适配。与此同时，**成本治理（Token 消耗优化）与系统级安全隔离（沙箱与权限防越权）**已成为各大项目在迈向企业级和深度个人应用时普遍面临的硬性壁垒。

### 2. 各项目活跃度对比
*评判标准：结合 Issue/PR 吞吐量与版本发布节奏，评估工程化推进的稳健程度。*

| 项目名称 | Issues 吞吐 | PRs 吞吐 | 今日发布版本 | 核心聚焦状态 | 综合健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (活跃/新建 421) | 500 (待处理 393) | 3个 (v2026.5.x) | 大规模高并发演进 | ⭐⭐⭐⭐⭐ (极高吞吐，核心枢纽) |
| **Hermes Agent** | 50 | 50 (新建20+) | 无 | 底层重构与安全诊断 | ⭐⭐⭐⭐ (社区素质极高，审查严格) |
| **ZeroClaw** | 50 (活跃 42) | 46 (待处理 25) | 无 | 桌面端发力与架构预演 | ⭐⭐⭐⭐ (架构大重构前夕) |
| **PicoClaw** | 5 | 18 (合并 6) | Nightly 构建 | 多模型与多智能体并行 | ⭐⭐⭐⭐ (前沿架构探索积极) |
| **CoPaw** | 31 (活跃 20) | 16 (合并 5) | 准备 v1.1.6b1 | RAG 稳定与兼容性除虫 | ⭐⭐⭐⭐ (高频迭代与修虫) |
| **ZeptoClaw** | 4 | 22 (合并 19) | 无 | 自主进化与依赖升级 | ⭐⭐⭐⭐ (内功修炼，架构升级) |
| **NanoClaw** | 12 | 35 (合并大量) | 无 | 容器化与多渠道适配 | ⭐⭐⭐⭐ (快速收敛代码) |
| **IronClaw** | 19 | 32 (待处理) | 无 | Reborn 基底合并 | ⭐⭐⭐ (处于阵痛期，QA 压力大) |
| **NanoBot** | 29 | 23 (合并 7) | 无 | 安全边界与本地资源优化 | ⭐⭐⭐⭐ (健康迭代) |
| **Moltis** | 1 | 3 (合并 0) | 无 | 多云沙箱与推理兼容 | ⭐⭐⭐ (审慎合并，平稳蓄力) |
| **NullClaw** | 2 | 0 | 无 | 本地化底层重构讨论 | ⭐⭐ (低活跃，维护期) |
| **LobsterAI** | 1 | 0 | 无 | 外部 Agent 聚合讨论 | ⭐⭐ (低频运作) |

### 3. OpenClaw 在生态中的定位
作为整个开源生态的**核心参照系与事实标准**，OpenClaw 正在扮演类似于“AI 时代的 Android/Nginx”角色：
* **对比优势：** 凭借极高的社区吞吐量（单日千级Issue/PR更新），OpenClaw 在多渠道适配（Telegram/Discord/Slack）、跨网关通信（`sessions_send` 彻底解耦多机部署）上具备压倒性优势。
* **技术路线差异：** 其他项目大多还聚焦于“单节点或本地运行”，而 OpenClaw 已经将触角伸向“企业级成本治理”（如每日/每月 Token 预算上限）和“高级多智能体架构”（RFC 分布式运行时）。
* **生态位：** 它不仅是直接面向用户的工具，更成为了底座（如 LobsterAI 正在讨论接入 OpenClaw，ZeptoClaw 在文档中对标其生态）。但需警惕其高频迭代带来的稳定性反噬（如 Win11 网关退化）。

### 4. 共同关注的技术方向
近期多个项目在技术诉求上出现了高度的“共振”，揭示了行业的共性痛点：
* **深度推理模型（DeepSeek V4 / Claude Opus）的流式适配：** 智能体框架在解析思维链（`reasoning_content`）时普遍存在丢包或引发 HTTP 400 错误（涉及 **ZeroClaw, IronClaw, Moltis, PicoClaw**）。
* **上下文与 Token 治理：** 每次对话带入全量工具和系统提示词导致 Token 溢出（涉及 **Hermes Agent, NanoClaw, OpenClaw**），社区正积极探索惰性加载（RAG）和分层 Bootstrap 机制。
* **本地/低算力设备的端侧运行：** 对 Ollama 本地模型和 ARM/Raspberry Pi 的适配成为刚需（涉及 **CoPaw, ZeroClaw, NullClaw**）。
* **沙箱与安全隔离边界：** 拦截过当（连 `/dev/null` 都拦截）与越权操作（AI 自动 push 代码）引发了广泛吐槽（涉及 **NullClaw, Hermes Agent, NanoBot**），向 Linux 内核级（Landlock）收缩权限成为趋势。

### 5. 差异化定位分析
* **企业级网关与集群派：** 主打高可用、多渠道接入和复杂工作流。
  * 代表：**OpenClaw, Hermes Agent**。
  * 差异：OpenClaw 偏向于通道与协议的全能集成；Hermes Agent 偏向于高阶技能管理和自治机制探讨。
* **桌面端原生与用户交互派：** 强调在操作系统层面的融合。
  * 代表：**ZeroClaw (Tauri重构), IronClaw, LobsterAI**。
  * 差异：ZeroClaw 极力靠拢 macOS 原生无障碍体验；LobsterAI 则试图做兼容 OpenClaw 的上层聚合 UI。
* **本地优先与端侧轻量派：** 追求极低资源占用和本地模型闭环。
  * 代表：**ZeptoClaw, NullClaw, PicoClaw**。
  * 差异：ZeptoClaw 专注于“智能体自我进化”的基建；PicoClaw 热衷于国产多模态模型（小米 Mimo 等）的并行编排；NullClaw 则坚持剥离外部 API 强依赖。

### 6. 社区热度与成熟度
* **爆发扩张期（规模即正义）：** **OpenClaw** 依靠绝对的开发者基数在快速试错，但也积累了大量 Win 环境退化和 UI 挂起的积压问题。**CoPaw** 在新版本发布后迎来一波 Bug 提交高峰。
* **高价值收敛期（高质量突破）：** **Hermes Agent** 的社区展现了极高的极客密度，Issue 往往带有深度的根因分析（如 Token 开销拆解）。**PicoClaw** 在多 Agent 并行架构上推进迅速。
* **架构重构期（静水流深）：** **IronClaw** 正在推进 "Reborn" 大基底合并，当前容易受外部 QA 攻击；**ZeroClaw** 也正处于 v0.8.0 集成预演的阵痛期；**ZeptoClaw** 则稳步进行底层依赖的更新换代。

### 7. 值得关注的趋势信号（开发者参考）
1. **从“被动工具”向“自主进化实体”演进：** ZeptoClaw 提出的“Agent 自主技能管理与遥测系统”以及 Hermes Agent 的“后台任务动态注入前台会话”，预示着 AI Agent 正在摆脱一次性脚本属性，向持续进化的自治数字员工发展。
2. **“千模型千面”的兼容层重构迫在眉睫：** 随着带视觉和深度思考能力的大模型爆发，单一的 OpenAI 兼容层已不够用。针对不同大模型思维链保留、图像处理能力前置校验（如 ZeroClaw 的多模态记忆降级）将成为智能体框架的标配核心能力。
3. **个人私有化的去云端化运动：** NullClaw 和 ZeptoClaw 社区的声音表明，高端玩家对“基于云 API 的缝合怪”产生厌倦，集成 DuckDuckGo 无 API 搜索、集成 Landlock 无 Docker 沙箱、适配非 x86 架构，是彻底下沉至个人极客群体的关键门票。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-05-04 NanoBot (github.com/HKUDS/nanobot) 项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时内，NanoBot 项目展现了极高的社区活跃度与开发者热情。项目共处理了 **29 个 Issue 和 PR 更新**（其中 16 个待合并 PR，7 个已合并/关闭），体现了快速迭代的健康状态。当前社区焦点高度集中于**安全防护机制的误报修复**以及**本地部署环境下的资源优化**。整体来看，项目的核心代码正在向更稳健的安全边界控制与更丰富的渠道接入（如 WhatsApp 语音）迈进，且逐步引入了类型化钩子等扩展性架构。

## 2. 版本发布
* **无新版本发布**。今日有大量针对 `v0.1.5.post3` 版本产生的问题修复，预计近期可能会推出 `v0.1.5.post4` 或包含更多特性的 `v0.1.6` 版本。

## 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**，显著提升了系统的稳定性与安全性：
* **安全防护机制柔性化**：合并了 [#3614 fix(runner): soft workspace boundary with retry throttle](https://github.com/HKUDS/nanobot/pull/3614)，将工作区越界的绝对阻断更改为可恢复的工具错误，大幅降低了 Safety guard 的误杀率；同时合并的 [#3613 fix(agent): prevent safety guard false positives](https://github.com/HKUDS/nanobot/pull/3613) 修复了将 `/dev/null` 等合法路径误判为越界的问题。
* **CLI 流式输出乱码修复**：合并了 [#3609 fix(cli): stop provider retry messages garbling interactive output](https://github.com/HKUDS/nanobot/pull/3609)，彻底解决了 API 重试等待提示文本混入标准流式输出导致的终端乱码问题。
* **定时任务稳定性**：合并了 [#3606 fix(cron): atomic write for jobs.json](https://github.com/HKUDS/nanobot/pull/3606)，修复了容器重启后计划任务静默丢失的数据完整性隐患。
* **WebUI 交互升级**：合并了 [#3583 Improve beta WebUI turn completion and chat isolation](https://github.com/HKUDS/nanobot/pull/3583)，优化了前端加载状态与聊天气泡上下文隔离问题。
* **认证功能扩展**：早期关于提供 Provider 登出功能的 PR [#2727](https://github.com/HKUDS/nanobot/pull/2727) 被关闭，为功能更完善的新 PR [#3612](https://github.com/HKUDS/nanobot/pull/3612) 让路。

## 4. 社区热点
* **Safety Guard 误杀与静默丢弃问题**：由 Issue [#3599](https://github.com/HKUDS/nanobot/issues/3599) 和 [#3605](https://github.com/HKUDS/nanobot/issues/3605) 引发的讨论最为热烈。用户反馈升级后工作区内的正常命令频繁被拦截，且在 Telegram 等渠道发生拦截时，Agent 直接中断且无任何提示。这反映了自托管用户对**后台执行逻辑透明度**和**安全策略颗粒度**的强烈诉求。
* **底层安全与插件化架构扩展**：开发者 `mohamed-elkholy95` 提交了系列安全相关的 PR（如 SSRF 防御 [#3252](https://github.com/HKUDS/nanobot/pull/3252)，公共部署防 CSRF [#3492](https://github.com/HKUDS/nanobot/pull/3492)）；同时 `aiguozhi123456` 提出了构建类型化事件钩子系统 [#3564](https://github.com/HKUDS/nanobot/pull/3564)，显示了社区帮助项目从“个人工具”向“企业级/高扩展平台”演进的积极信号。

## 5. Bug 与稳定性
* **🔥 高严重度：并发导致 OOM 崩溃**：用户报告在本地运行 LLM（如 Ollama）时，多个 Subagent 同时触发导致显存打满崩溃（[#3611](https://github.com/HKUDS/nanobot/issues/3611)）。当前已有对应修复 PR [#3615](https://github.com/HKUDS/nanobot/pull/3615) 通过信号量限制最大并发数。
* **🔥 高严重度：Safety Guard 逻辑缺陷**：不仅是误杀，拦截时抛出的 `RuntimeError` 在非 CLI 渠道被静默丢弃，导致用户面对无响应的 Agent（[#3605](https://github.com/HKUDS/nanobot/issues/3605)）。该问题已通过今日合并的 PR 得到初步修复。
* **🟡 中严重度：交互流乱码**：API 超时重试日志污染正常输出，在 SSH 环境下体验极差（[#3600](https://github.com/HKUDS/nanobot/issues/3600)）。已通过合并 [#3609](https://github.com/HKUDS/nanobot/pull/3609) 解决。
* **🟡 中严重度：MCP 连接事件循环死锁**：MCP 连接失败（如 DNS 错误）时清理机制不完善导致事件循环卡死（[#3610](https://github.com/HKUDS/nanobot/pull/3610) 提出修复）。

## 6. 功能请求与路线图信号
* **Provider 重新认证/登出**：用户变更账号后无法重新授权（[#2665](https://github.com/HKUDS/nanobot/issues/2665)），目前社区已提交 `nanobot provider logout` 命令的 PR（[#3612](https://github.com/HKUDS/nanobot/pull/3612)），极大概率在下个小版本纳入。
* **WhatsApp 语音理解支持**：用户希望打通全双工语音交互（[#3604](https://github.com/HKUDS/nanobot/issues/3604)），社区迅速响应提交了媒体下载分支的 PR（[#3607](https://github.com/HKUDS/nanobot/pull/3607)）。
* **终端 UI 升级**：社区提交了基于 Panel 面板的终端富文本显示 PR（[#3601](https://github.com/HKUDS/nanobot/pull/3601)），预示着 CLI 的呈现体验将有质的飞跃。

## 7. 用户反馈摘要
* **痛点**：工作区路径的正则防御策略有些“吹毛求疵”，即便是重定向输出到 `/dev/null` 也会被拦截，影响了轻度开发者的使用流畅度。
* **场景**：越来越多的用户开始在 ARM 架构或家用 PC 上基于 Ollama/MLX 本地部署 NanoBot，对资源管控（防止 OOM）提出了强烈需求。
* **满意度**：社区对 Bug 的响应速度非常认可，例如针对 WhatsApp 语音和乱码问题，当天提出 Issue 当天即有社区开发者提交可用 PR，展示了极佳的开源协同效率。

## 8. 待处理积压
* **亟待 Core Team Review 的关键 PR**：
  * **并发控制**：[#3615 feat(agent): limit concurrent subagent execution](https://github.com/HKUDS/nanobot/pull/3615) —— 直接关系到本地模型部署的生死体验。
  * **底层安全拦截**：[#3255 feat(security): enforce history.jsonl at filesystem layer](https://github.com/HKUDS/nanobot/pull/3255) —— 需谨慎评估对性能和现有执行逻辑的破坏性。
* **长期悬而未决的 Issue**：
  * [#2665 OpenAI Codex re-authentication](https://github.com/HKUDS/nanobot/issues/2665) 悬挂超一个月，期待核心团队能尽快敲定并合并替代的 Logout PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🤖 Hermes Agent 项目动态日报 (2026-05-04)

## 1. 今日速览
Hermes Agent 今日维持了极高的社区活跃度，过去 24 小时内共产生 **100 条** 讨论与更新（Issues 50 条，PR 50 条）。尽管没有发布新版本，但开发者们集中火力对系统的**底层架构、安全漏洞和资源开销**进行了深度的诊断与优化。项目目前的健康度整体向好，社区展现出极高的专业素质：大量报障 Issue 附带了详细的复现代码和根因分析，超过 20 个高质量 PR 在今日集中涌现。不过，当日仅合并/关闭了 7 个 PR，说明核心团队正处于严格审查周期，社区提交的 PR 有待进一步验证和合并。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展
今日有 7 个 PR/Issue 被合并或关闭，主要修复了配置、系统挂载以及上下文压缩等核心问题，具体进展如下：

*   **配置安全修复 ([Issue #19214](https://github.com/NousResearch/hermes-agent/issues/19214) - CLOSED):** 修复了 `terminal.cwd` 作为“单例”配置项可能将 CLI 静默锁定在 `$HOME` 目录的“Foot-gun”隐患，现在 CLI/TUI 将正确使用启动目录，提升了多目录工作流的安全性。
*   **看板系统隔离性修复 ([Issue #19348](https://github.com/NousResearch/hermes-agent/issues/19348) & [PR #19378](https://github.com/NousResearch/hermes-agent/pull/19378) - CLOSED):** 修复了使用 `hermes -p <profile>` 启动的 worker 无法共享全局 `kanban.db`，而是错误读取 profile-local 数据库的 Bug，恢复了跨配置文件的看板协同能力。
*   **长上下文会话崩溃解决 ([Issue #11529](https://github.com/NousResearch/hermes-agent/issues/11529) - CLOSED):** 解决了在将 "Max turns" 设置为 999 时触发的 "Context bursting" 导致会话卡死、UI 锁定的问题。
*   **性能优化合并 ([PR #18295](https://github.com/NousResearch/hermes-agent/pull/18295) - CLOSED):** 引入了 Numba 来优化 OPD token-span 匹配逻辑，将高频调用路径的性能瓶颈从纯 Python 扫描中释放出来，提升了底层执行效率。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**模型供应商网络鉴权、上下文窗口硬性限制及内存泄漏**等核心痛点：

*   **Anthropic 原生鉴权与品牌检测冲突：**
    *   [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) (👍 0, 评论 6)：用户在使用 Claude Max 20x 订阅的有效 OAuth Token 时，API 持续返回 HTTP 400 拒绝。
    *   [Issue #19046](https://github.com/NousResearch/hermes-agent/issues/19046) (👍 0, 评论 3)：开发者发现 Hermes 发往 Anthropic 的请求头中包含过度的第三方客户端品牌标记，导致被对端风控拦截。诉求：清理多余的 HTTP Header 标识。
*   **Token Overhead 与内存优化探讨：**
    *   [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) (👍 7, 评论 4)：引发了强烈共鸣。当前系统每次 API 调用都会注入 50+ 个工具的完整 Schema，每次吃掉 3500-5000 tokens。社区正在热烈讨论基于 RAG 的“两阶段惰性加载”方案。
*   **底层模型上下文长度限制误判：**
    *   [Issue #8430](https://github.com/NousResearch/hermes-agent/issues/8430) (评论 6)：即使配置了 `context_length`，依然在 32K/64K 边界报错，反映了 Hermes 对部分非标模型参数覆盖的优先级设计存在缺陷。

---

## 5. Bug 与稳定性
今日报告了多个高价值 Bug，部分已由社区紧急提交流转 PR（**按严重程度排序**）：

*   **[P0 - 严重/安全] Skills 系统越权修改风险 (已有 Fix PR)**
    *   Bug：LLM 指令未能有效阻止 Curator 修改内置/Hub 安装的 Skills。
    *   Fix: [PR #19379](https://github.com/NousResearch/hermes-agent/pull/19379) 引入了代码级硬拦截 `_pinned_guard`。
*   **[P1 - 严重/安全] Microsoft Teams 默认静默开放访问 (已有 Fix PR)**
    *   Bug：Teams 平台适配器对审批按钮默认允许所有人访问，缺乏鉴权。
    *   Fix: [PR #19374](https://github.com/NousResearch/hermes-agent/pull/19374) 添加了显式白名单或 `TEAMS_ALLOW_ALL_USERS` 环境变量配置。
*   **[P1 - 稳定性] 上下文压缩模块抛出 AttributeError (已有 Fix PR)**
    *   Bug：在上下文过长触发去重压缩时，由于未校验非字符串（如 dict/int）导致系统崩溃。
    *   Fix: [PR #19373](https://github.com/NousResearch/hermes-agent/pull/19373)。
*   **[P2 - 平台] Telegram 图像传输失效 (无 PR)**
    *   Bug: [Issue #19287](https://github.com/NousResearch/hermes-agent/issues/19287) Gateway 将图片缓存在本地后仅作为文本路径传入 Agent，未进行 Base64 编码，导致多模态模型“完全致盲”。
*   **[P2 - 兼容性] 浏览器工具执行路径网关遗漏 (无 PR)**
    *   Bug: [Issue #19294](https://github.com/NousResearch/hermes-agent/issues/19294) `_chromium_installed()` 忽略了环境变量 `AGENT_BROWSER_EXECUTABLE_PATH` 和系统级 Chrome，导致无头浏览器被不必要的锁定。

---

## 6. 功能请求与路线图信号
今日出现的前沿 Feature Request 揭示了 Hermes Agent 向**更智能化、细粒度管控**演进的趋势：

*   **高阶 Agent 协作与检索：**
    *   [Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712) (👍 4)：请求实现真正的自主权——允许定时任务的结果自动注入到活跃的 Gateway 会话中，打通后台与前台。
    *   [Issue #19344](https://github.com/NousResearch/hermes-agent/issues/19344)：提议引入“规划顾问”机制，允许日常运行的轻量级模型在遇到复杂架构问题时，通过 `/consult` 动态路由至前沿重型模型进行复核。
    *   [Issue #13332](https://github.com/NousResearch/hermes-agent/issues/13332) & [Issue #17649](https://github.com/NousResearch/hermes-agent/issues/17649)：呼声极高的“基于 SQLite FTS5 的语义 Skill 检索”及“混合工具预选”，旨在彻底解决日益庞大的 Skills/Tools 注入带来的 Token 浪费问题。
*   **模型与平台支持拓展：**
    *   [Issue #19320](https://github.com/NousResearch/hermes-agent/issues/19320)：要求支持 OpenAI Codex 的原生 `web.run` 工具替代第三方 Web 搜索提供商。
    *   [Issue #10835](https://github.com/NousResearch/hermes-agent/issues/10835)：期望通过 MCP Server 暴露内部记忆体（MEMORY.md 等），实现与 Claude Code/Cursor 等其他智能体的记忆共享。

---

## 7. 用户反馈摘要
透过今日的 Issue 详情，我们可以提炼出当前用户的三个核心使用痛点与场景反馈：

1.  **上下文管理焦虑：** 长期使用 Heraclitus 记忆或长会话的用户极易遭遇 Token 溢出与压缩失败（如 [Issue #14420](https://github.com/NousResearch/hermes-agent/issues/14420), [Issue #19362](https://github.com/NousResearch/hermes-agent/issues/19362)）。由于每次都要带上完整的工具集和 Skills，用户对本地模型或低成本 API 的 Token 消耗非常敏感。
2.  **过度自我主张：** [Issue #19324](https://github.com/NousResearch/hermes-agent/issues/19324) 提出了一个典型的 AI Agent 安全痛点：Hermes 识别到项目是 Git 仓库后，**自动执行了 add/commit/push**，导致用户产生严重抵触情绪。用户强烈呼吁为“写操作”和“自学习行为”提供明确的 Approval 策略（人类确认机制）。
3.  **平台网关断线脆弱性：** 运维用户反馈在 systemd/launchd 托管冷启动时，由于网络栈未就绪，Telegram 等平台容易直接衰竭而不重试；同时 Gateway 关闭挂起导致 PID 残留的问题 ([Issue #14128](https://github.com/NousResearch/hermes-agent/issues/14128)) 也增加了自托管用户的维护成本。

---

## 8. 待处理积压
以下是高价值但可能被官方忽视、需要长期关注的 Issue/PR，建议维护者优先跟进：

*   **[积压 Issue] 强制退出时的数据丢失：** [Issue #5021](https://github.com/NousResearch/hermes-agent/issues/5021) 提出用户在长工具链调用期间 Ctrl+C 退出会导致未持久化的状态全部丢失。自 4 月 4 日提出至今，尚未有官方修复 PR 接管。
*   **[积压 Issue] 本地有头浏览器体验极差：** [Issue #11020](https://github.com/NousResearch/hermes-agent/issues/11020) 暴露了 3 个相关的环境变量 Bug，导致 `AGENT_BROWSER_HEADED=1`（用于人工监督 AI 操作）的流程几乎不可用，阻碍了 Agent+Human 混合工作流的发展。
*   **[待 Review PR] 关键组件更新异常处理：** [PR #16414](https://github.com/NousResearch/hermes-agent/pull/16414) 修复了更新流程中 Stash 分支恢复的缺陷，已获验证但仍未合并，可能影响用户平滑升级。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是为您生成的 **PicoClaw** 项目 2026-05-04 动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
PicoClaw 在过去 24 小时内保持了**高度活跃**的开发状态。项目自动发布了 `v0.2.8` 的最新 Nightly 构建版本，持续为主分支集成新功能。今日共有 **18 个 PR 更新**（其中 6 个被合并/关闭）和 **5 个 Issue 更新**。从活动轨迹来看，开发重心主要集中在**多模型适配优化**（如小米 Mimo、DeepSeek）、**工具调用稳定性提升**（MCP 复杂 Schema 兼容）以及**多智能体并行调用**等前沿架构的演进上。项目呈现出良好的正向迭代势头，社区贡献者正在积极修补边界场景下的 Bug。

## 2. 版本发布
- **[nightly] Nightly Build for v0.2.8-nightly.20260503.a94ba821**
  - **详情**：这是一个基于最新 main 分支（Commit `a94ba82`）的自动化构建版本。
  - **注意事项**：官方提示此为自动构建，可能存在不稳定情况，生产环境部署需谨慎。
  - **完整变更日志**：[v0.2.8...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，标志着以下几个关键领域的显著进展：
- **统一运行时事件基础设施**：PR [#2677](https://github.com/sipeed/picoclaw/pull/2677) (CLOSED) 成功引入了全新的事件包，为后续的 Agent 可观测性奠定了基础。
- **复杂工具调用的兼容性修复**：PR [#2681](https://github.com/sipeed/picoclaw/pull/2681) (CLOSED) 合并，解决了 MCP 工具在 Gemini 模型下由于复杂 JSON Schema 导致的崩溃问题（关联修复 Issue #2668）。
- **大模型 API 兼容性提升**：PR [#2717](https://github.com/sipeed/picoclaw/pull/2717) (CLOSED) 增加了对 DeepSeek 严格图片格式报错的检测；PR [#2682](https://github.com/sipeed/picoclaw/pull/2682) (CLOSED) 修复了模型配置文档的格式错误。
- **网络容错机制上线**：PR [#2669](https://github.com/sipeed/picoclaw/pull/2669) (CLOSED) 为 LLM 调用管道增加了网络错误重试和退避机制，大幅提升了云 API 调用的鲁棒性。
- **依赖更新**：PR [#2735](https://github.com/sipeed/picoclaw/pull/2735) (CLOSED) 升级了 AWS SDK 依赖。

## 4. 社区热点
- **🔥 Ollama 云端鉴权需求 (Issue [#2225](https://github.com/sipeed/picoclaw/issues/2225))**
  - **动态**：该 Feature 请求今日有大量新评论（累计 10 条）。
  - **分析**：用户在使用 Ollama cloud 时发现缺乏凭证配置选项。此问题引发了关于 Provider 配置灵活性和安全性的深入讨论，反映了用户将 PicoClaw 接入各类私有/公有云 API 的强烈诉求。
- **MCP 动态 Header 传递机制 (PR [#2696](https://github.com/sipeed/picoclaw/pull/2696))**
  - **动态**：允许 Channel 向 MCP 服务器按请求转发 HTTP headers（如鉴权信息）。
  - **分析**：这是一个非常实用的架构级增强，解决了多用户场景下 Context 隔离和 API 鉴权透传的痛点。

## 5. Bug 与稳定性
今日暴露了多个系统层级和特定 Provider 的 Bug，部分已有修复 PR：
- **🔴 P0: MCP 全部连接失败导致 Agent 僵死 (Issue 无直接链接，PR [#2725](https://github.com/sipeed/picoclaw/pull/2725) 修复)**
  - **现象**：网络不可达导致 MCP 初始化失败时，Agent 直接退出，但网关仍在运行，导致心跳持续失败且无法处理消息。
  - **状态**：**已提交 PR**。将 MCP 初始化改为非致命错误。
- **🟠 P1: Android v0.2.8 数据访问崩溃 (Issue [#2744](https://github.com/sipeed/picoclaw/issues/2744))**
  - **现象**：Android 客户端升级到 v0.2.8 后，无法从任何 Tab 读取数据。
  - **状态**：待官方确认。
- **🟠 P1: 编译缺失 Launcher (Issue [#2753](https://github.com/sipeed/picoclaw/issues/2753))**
  - **现象**：从源码编译主分支后，`picoclaw-launcher` 文件不存在。
  - **状态**：待官方确认（可能是构建脚本或文档未同步）。
- **🟡 P2: Bash 工具路径解析错误 (Issue [#2749](https://github.com/sipeed/picoclaw/issues/2749) / PR [#2750](https://github.com/sipeed/picoclaw/pull/2750))**
  - **现象**：相对路径（如 `archive/FILE.md`）被错误解析为绝对路径（`/FILE.md`），触发沙箱工作区检查拦截。
  - **状态**：**已提交 PR** 修复路径扫描正则逻辑。
- **🟡 P2: DeepSeek 流式思考内容丢失 (PR [#2740](https://github.com/sipeed/picoclaw/pull/2740))**
  - **现象**：DeepSeek 开启思考模式后，流式返回的 `reasoning_content` 被静默丢弃。
  - **状态**：**已提交 PR**，修复了 Delta 结构体的解析逻辑。

## 6. 功能请求与路线图信号
通过今日的 Issue 和 PR 活动，可以明显看出项目演进的几个方向：
- **多模态与推理能力增强**：PR [#2755](https://github.com/sipeed/picoclaw/pull/2755) 引入了小米 Mimo 模型的视频流和推理内容支持。这表明 PicoClaw 正在积极拥抱支持音视频及推理思考的新一代国产大模型。
- **多智能体并行协作**：PR [#2754](https://github.com/sipeed/picoclaw/pull/2754) 提出了同步 `multi_subagent` 工具，允许主 Agent 并行调用多个子 Agent。这释放了强烈的架构升级信号，PicoClaw 正从单一对话节点向复杂的 Multi-Agent 编排网络进化。
- **UI 与网关配置优化**：PR [#2752](https://github.com/sipeed/picoclaw/pull/2752) 改进了 Web UI 的模型配置流，增加了上游模型获取和连通性测试功能，这将大幅降低用户的配置门槛。

## 7. 用户反馈摘要
- **边缘设备部署的真实痛点**：从 PR [#2462](https://github.com/sipeed/picoclaw/pull/2462) 的背景描述中发现，用户尝试将 PicoClaw 运行在 Android TV 盒子（Termux）上作为常驻节点，但遇到了流式输出和 Telegram 通道重复重试的问题。说明项目在低功耗/非标准 Linux 环境下的稳定性还有提升空间。
- **云端 API 鉴权配置不够直观**：Issue [#2225](https://github.com/sipeed/picoclaw/issues/2225) 反映出，随着各类兼容 OpenAI 协议的云服务（如 Ollama cloud）涌现，用户急需更灵活的 Provider 配置和鉴权管理方案。

## 8. 待处理积压
以下重要 Issue/PR 长期未获响应，建议维护者关注：
- **Issue #2668** (CLOSED): Gemini API 因 `$ref` 等 JSON Schema 导致 400 错误。虽然 Issue 已关闭，但相关的修复 PR [#2681](https://github.com/sipeed/picoclaw/pull/2681) 仍显示为 CLOSED 状态，需确认是否已合入主线。
- **PR #2239** (OPEN): 关于修改 Docker compose 添加 `privileged` 权限的增强请求。自 4 月 1 日开启以来一直挂起，由于涉及容器安全策略，需要维护者尽早给出评估结论。
- **PR #2647** (OPEN): 修复 Web Search YAML 配置并默认启用 DuckDuckGo。自 4 月 24 日提交至今未合并，可能阻碍了部分用户直接使用搜索工具。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-04)

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析组  
**数据源：** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览
NanoClaw 在过去 24 小时内展现了**极高的开发与社区活跃度**。项目今日共处理了 35 个 Pull Requests（其中大量已被合并），并关闭了 8 个 Issues，同时新增了 4 个 Issue，显示出核心团队正在**高频收敛现有问题并快速推进代码合并**。当前仍有 15 个 PR 处于待合并状态，表明项目正处于密集的代码审查期。整体来看，项目围绕着**容器化架构（v2）的稳定性、多渠道适配优化（Telegram/Discord/iMessage）以及第三方大模型兼容性**取得了实质性进展。

## 2. 版本发布
**本日无新版本发布。** 鉴于当前有大量已被合并的修复和功能 PR（如 RULES.md 瘦身、凭证验证更新等），推测项目正在为下一个_minor_或_patch_版本累积更新。

## 3. 项目进展
今日团队积极合并代码，项目在稳定性及架构治理方面迈出了坚实的一步：
*   **[CLOSED] 规则与上下文瘦身 (#2219)**：完成了 `RULES.md` 的 12K token 瘦身任务。这显著降低了系统提示词的冗余，有助于节省模型的上下文窗口（Context Window）并降低 API 开销。
    *   *链接：* [qwibitai/nanoclaw Issue #2219](https://github.com/qwibitai/nanoclaw/issues/2219)
*   **[CLOSED] 凭证验证修复 (#2229)**：合并了在安装验证步骤中对 `ANTHROPIC_AUTH_TOKEN` 的支持，修复了此前与官方 CLI 工具认证方式不一致的问题。
    *   *链接：* [qwibitai/nanoclaw PR #2229](https://github.com/qwibitai/nanoclaw/pull/2229)
*   **[CLOSED] 修复纯媒体消息静默丢失 (#2213)**：成功合并修复了 Telegram 等渠道中，无文本 caption 的图片/视频/文件被系统静默丢弃的严重缺陷。
    *   *链接：* [qwibitai/nanoclaw PR #2213](https://github.com/qwibitai/nanoclaw/pull/2213)
*   **[CLOSED] 兼容 Opus 4.7 思考链 (#2132)**：合并了针对 Claude Opus 4.7 的 `thinking.display` 默认行为变更的修复，确保了智能体思考过程的可视化。
    *   *链接：* [qwibitai/nanoclaw PR #2132](https://github.com/qwibitai/nanoclaw/pull/2132)

## 4. 社区热点
今日的 Issues 和 PRs 集中反映了用户对**更灵活的后端模型接入**及**跨平台部署体验**的关注。
*   **本地/开源大模型兼容性诉求 (#2234)**：用户 `Kwisss` 报告尝试将 NanoClaw 与 `llama.cpp` (llama-server) 结合使用时遭遇失败。这反映了社区强烈希望 NanoClaw 能够打破仅支持官方商业 API 的限制，成为真正多模型底座的 AI 智能体框架。
    *   *链接：* [qwibitai/nanoclaw Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234)
*   **非 systemd 环境的部署痛点 (#2199, #2200)**：用户连续反馈在 OpenRC 系统（常见于 Gentoo/Alpine 等轻量 Linux）中 Docker 启动失败及 Telegram 配对挂起的问题，暴露出项目当前的安装脚本对非标准 Linux init 系统的兼容性不足。

## 5. Bug 与稳定性
今日报告了多个涉及智能体行为和系统底层的 Bug，部分已有修复方案：

**高危 (逻辑错误/系统阻塞)：**
*   **[OPEN] 群组消息静默丢弃 (engage_mode='always') (#2227)**：`evaluateEngage()` 缺少对 `always` 模式的处理，导致配置为“始终回复”的智能体在群组中反而一言不发。（目前尚无关联 Fix PR）
    *   *链接：* [qwibitai/nanoclaw Issue #2227](https://github.com/qwibitai/nanoclaw/issues/2227)
*   **[OPEN] Telegram 多客户端冲突 (#2225)**：Telegram Bot API 的 HTTP 409 冲突未被正确捕获，导致被误报为普通的网络错误。已有 PR 尝试提供更清晰的错误处理。
    *   *链接：* [qwibitai/nanoclaw PR #2225](https://github.com/qwibitai/nanoclaw/pull/2225)
*   **[OPEN] iMessage 本地模式收件箱隔离 (#2214)**：在 macOS 本地运行时，网关监听正常但消息无法触达宿主机的 `onInbound` 处理器，且无任何报错日志，排查难度较高。
    *   *链接：* [qwibitai/nanoclaw Issue #2214](https://github.com/qwibitai/nanoclaw/issues/2214)

**中低危 (回归与体验问题)：**
*   **[CLOSED] gh CLI 找不到 (#2221)**：主容器中出现 `gh: command not found` 回归问题。（Issue 已关闭，推测已在其他重构中解决）
    *   *链接：* [qwibitai/nanoclaw Issue #2221](https://github.com/qwibitai/nanoclaw/issues/2221)
*   **[OPEN] 消息通道缺失时的静默失败 (#2226)**：当消息通道适配器不存在时系统不报错，导致消息被静默吞掉。PR 已提出应抛出明确的异常以触发重试机制。
    *   *链接：* [qwibitai/nanoclaw PR #2226](https://github.com/qwibitai/nanoclaw/pull/2226)

## 6. 功能请求与路线图信号
社区及贡献者正在为项目引入令人兴奋的新特性，这些信号值得重点关注：
*   **模块化与本地大模型支持 (Issue #2234)**：如果核心团队接纳 `llama.cpp` 的适配需求，NanoClaw 有望从纯 SaaS API 框架转型为支持本地边缘部署的强大智能体底座。
*   **精细化任务调度 (PR #2237)**：贡献者 `NeuerUser` 提交了基于间隔的循环任务 (`@every:<ms>`) 调度功能，填补了原有仅支持 Cron 表达式的空白，将极大增强智能体在定时巡检等自动化场景下的能力。
    *   *链接：* [qwibitai/nanoclaw PR #2237](https://github.com/qwibitai/nanoclaw/pull/2237)
*   **跨会话语义记忆 (PR #2097)**：引入了 `Lore Context` 集成，旨在解决智能体跨会话记忆的短板。如果合并，将显著提升智能体的长线上下文理解能力。
    *   *链接：* [qwibitai/nanoclaw PR #2097](https://github.com/qwibitai/nanoclaw/pull/2097)
*   **MCP 工具按信任层级动态过滤 (Issue #2217)**：针对庞大的 SDK 工具目录（高达 38K tokens），提议通过 MCP 服务端按容器层级进行动态过滤。这将是优化 Token 成本和提升响应速度的重要优化方向。
    *   *链接：* [qwibitai/nanoclaw Issue #2217](https://github.com/qwibitai/nanoclaw/issues/2217)

## 7. 用户反馈摘要
从今日的 Issue 细节中，可以提炼出以下真实的用户画像与痛点：
1.  **自我迭代的“狗粮”用户**：多位核心用户（如 `andrebrov`）正试图利用 NanoClaw 管理复杂的 Telegram Bot 和多个身份，对规则的精简（12K token 瘦身）极为敏感，表明重度用户对**Token 开销和系统提示词效率**非常在意。
2.  **私有化与极客玩家**：用户希望突破云端限制，在 Raspberry Pi（无头设备）或本地 macOS 上通过本地网关（如 llama.cpp 和 iMessage 本地数据库）运行，当前安装脚本对无浏览器环境的适配（PR #2212）尚存瑕疵。
3.  **对静默失败的零容忍**：多个 Issues 提到“Silently drops”（静默丢弃）、“No errors are logged”（无报错日志）。用户强烈期望 AI 智能体的基础设施具备**高度的可观测性和 Fail-Fast 机制**，而不是黑盒般的吞没消息。

## 8. 待处理积压
以下重要 PR 和 Issue 仍处于 Open 状态，建议维护者尽快推进审查：
1.  **架构级防 race condition 修复 (PR #2224)**：提出了基于 PID 文件的单实例锁机制，以防止多个宿主进程争夺共享状态导致数据损坏。这是涉及核心数据一致性的重要防护，需尽快合并验证。
    *   *链接：* [qwibitai/nanoclaw PR #2224](https://github.com/qwibitai/nanoclaw/pull/2224)
2.  **容器挂载路径不一致 (PR #2236)**：修复了工作目录与实际挂载组路径脱节的问题。该问题会导致智能体在执行本地文件操作时“迷路”，建议作为 P0 级别的修复尽快确认合并。
    *   *链接：* [qwibitai/nanoclaw PR #2236](https://github.com/qwibitai/nanoclaw/pull/2236)
3.  **v2 迁移 UX 修复整合版 (PR #2235)**：整合了迁移脚本的交互体验修复及旧版清理逻辑，对于正在从 v1 升级到 v2 架构的用户至关重要。
    *   *链接：* [qwibitai/nanoclaw PR #2235](https://github.com/qwibitai/nanoclaw/pull/2235)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是 NullClaw 项目 2026-05-04 的动态日报。

# NullClaw 项目日报 (2026-05-04)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体处于**低活跃度的社区讨论状态**。今日无任何新代码合并（0 个 PR 更新）或版本发布，项目代码层面保持平稳。然而，社区在沙箱（Sandbox）底层机制和低资源设备搜索适配方面展开了针对性极强的讨论，共产生了 2 条活跃的 Issue 更新。整体而言，项目当前的重心正在向“多设备兼容性”与“系统级安全隔离优化”两大核心诉求倾斜。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
*今日无已合并或已关闭的 PR。项目在代码工程化推进上今日处于停滞/观察期。*

## 4. 社区热点
今日社区关注点集中在现有的两个开放议题上：
*   **沙箱探测机制重构讨论 ([Issue #882](https://github.com/nullclaw/nullclaw/issues/882))**
    *   **热度**：创建于昨日，已有 1 条评论跟进。
    *   **诉求分析**：核心开发者/贡献者 `mark-os` 指出，当前默认的沙箱后端在启动时会通过生成子进程（`firejail`, `bwrap`, `docker`）来探测可用工具。这种方式不仅拖慢启动速度，还引发了诸多边缘测试问题。提议在 Linux 环境下默认采用内核级的 `Landlock`，停止外部工具探测，以实现开箱即用的高效安全隔离。
*   **低资源设备 Web 搜索痛点 ([Issue #871](https://github.com/nullclaw/nullclaw/issues/871))**
    *   **热度**：持续保持活跃（更新至 5 月 2 日），已有 2 条深度评论。
    *   **诉求分析**：用户 `uMendex` 强调 NullClaw 作为本地个人 AI 助手，其核心场景应包含在廉价、低算力设备上运行。目前的 `web_search` 工具严重依赖外部 API（如 Brave Search），这违背了离线/轻量化的初衷，社区正呼吁原生集成 DuckDuckGo 以摆脱外部依赖。

## 5. Bug 与稳定性
今日报告及追踪的 Bug 主要涉及底层功能可用性与启动稳定性，按严重程度排列如下：

1.  **[Critical] - 启动探测引发环境不兼容及资源浪费 ([Issue #882](https://github.com/nullclaw/nullclaw/issues/882))**
    *   **状态**：OPEN | **修复进度**：无 fix PR
    *   **详情**：`sandbox.backend: "auto"` 在启动时盲测 `firejail`、`bwrap` 和 `docker`，在特定环境下会导致不可预知的崩溃或挂起。此问题直接影响了 NullClaw 核心功能的启动健壮性。
2.  **[Critical] - 核心工具在目标设备上不可用 ([Issue #871](https://github.com/nullclaw/nullclaw/issues/871))**
    *   **状态**：OPEN | **修复进度**：无 fix PR
    *   **详情**：`web_search` 在低资源设备上极不实用，必须依赖外部 API Key 才能工作，使得 AI 助手丧失了在弱网或廉价设备上独立运行的闭环能力。

## 6. 功能请求与路线图信号
根据近期 Issues 提取的项目演进信号，以下功能极有可能被纳入近期的开发路线图：
*   **Linux 原生沙箱支持**：计划放弃基于外部探测的 `"auto"` 模式，转向深度集成 Linux 内核特性。若 [Issue #882](https://github.com/nullclaw/nullclaw/issues/882) 落地，未来版本将默认使用 `Landlock`，这将是一个重大架构变更。
*   **去 API 化的本地搜索支持**：结合 NullClaw 的产品定位，原生支持不需要 API 密钥的搜索引擎（如 DuckDuckGo 抓取或轻量级集成）已成为强需求，这是决定 NullClaw 能否真正下沉到边缘设备的关键功能。

## 7. 用户反馈摘要
从 Issue 评论中提炼的真实反馈揭示了当前产品的核心摩擦点：
*   **场景脱节**：用户明确指出，作为主打“个人 AI 助手”的开源项目，如果连最基础的 Web Search 都要强制绑定第三方收费/限额 API，这与“在廉价设备上独立运行”的核心卖点产生了严重冲突。
*   **对系统底层的侵入感**：系统管理员和高级用户对启动时的“子进程探测（探测 Docker 等容器环境）”感到反感，认为这既不优雅也不安全。用户更倾向于利用现代 OS 自带的权限控制机制（如 Landlock）。

## 8. 待处理积压
由于今日 2 个活跃 Issue 均未得到最终解决（0 个 Issue 关闭，0 个 PR 提交），当前技术积压有所增加：
*   **[需跟进] 沙箱重构计划 ([Issue #882](https://github.com/nullclaw/nullclaw/issues/882))**：该建议具备极高的架构优化价值，维护者需尽快确认是否接受此提案，并引导社区提交相关的 Draft PR。
*   **[需跟进] Web Search 重构 ([Issue #871](https://github.com/nullclaw/nullclaw/issues/871))**：该 Bug 已提出近 10 天，对于标记为 `Critical` 的核心功能缺陷，建议维护者尽早明确搜索 API 的替代方案（如 DDG 集成方案），以免流失低资源边缘计算用户群体。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the daily dynamic report for the IronClaw project based on the provided data.

# 📊 IronClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时内，IronClaw 项目呈现出**极高的架构演进活跃度与内部分支整合状态**。项目核心焦点正全面转向代号为 **"Reborn"** 的底层架构重构，今日新增的 19 条 Issue 中绝大多数在精确规划 Reborn 的执行模型与边界契约。同时，社区与 QA 团队针对 v0.27.0 版本的稳定性进行了集中反馈，暴露了多个涉及 LLM Provider 和 TUI/CLI 层的严重阻断性 Bug。目前共有 32 个 PR 处于待合并状态，核心团队正在为长期的 "Reborn" 基底合入主线做最后的测试与代码审查准备。

## 2. 版本发布
**无新版本发布**。当前主分支仍聚焦于底层 "Reborn" 架构的重构与合并，尚未触发新的版本打包。

## 3. 项目进展
今日共关闭/合并了 **3 个 PR**，整体进展主要体现在测试补齐、缺陷修复和 CI 基础设施完善上：
*   **PR #3226** `fix(llm): preserve Gemini thought_signature...` [CLOSED]：修复了近期报告的 Gemini API 在工具调用期间丢失 `thought_signature` 导致 HTTP 400 的问题，已合入相关修复代码。
*   **PR #3234** `ci(e2e): replace deleted preflight test...` [CLOSED]：清理了已被移除的旧测试路径，用新的工具激活测试替代，修复了 CI/CD 流水线中的报错。
*   **PR #3170** `test(reborn): add host runtime vertical gates` [CLOSED]：为核心架构增加了垂直测试门禁，为后续合并大 PR 做好质量保障。

## 4. 社区热点
目前社区讨论最密集的区域集中在 **架构重构** 和 **多模型兼容性** 上：
*   **Reborn 架构深度细化** ([#3016](https://github.com/nearai/ironclaw/issues/3016), [#3091](https://github.com/nearai/ironclaw/issues/3091) 等)：核心开发者 `serrrfirat` 连续提出了多个关于 TurnCoordinator、TurnRunner 和 AgentLoopDriver 的架构规划，引出了对并发控制、线程锁和 HTTP Syscall 契约的深入讨论。
*   **v0.27.0 兼容性崩溃热点** ([#3225](https://github.com/nearai/ironclaw/issues/3225), [#3228](https://github.com/nearai/ironclaw/issues/3228))：用户 `thomasmaerz` 密集报告了关于 Gemini、TUI 终端乱码及配置重写等多个严重问题。特别是 Gemini 3.x 的 `thought_signature` 丢失问题，虽在此前 PR #1565, #1752 中声明已修复，但一直未彻底解决，引发了新的追踪跟进。

## 5. Bug 与稳定性
QA 团队与用户今日报告了多个影响日常使用的 Bug，按严重程度排列如下：

*   🔴 **[Critical] LLM 配置回滚问题** ([#3229](https://github.com/nearai/ironclaw/issues/3229))：在启动时若发生 Provider fallback，系统会将其持久化到数据库，**永久覆盖用户原先设定的 LLM 模型和提供商配置**，导致重启后配置丢失。
    *   *状态：暂无对应 fix PR。*
*   🔴 **[High] TUI 终端退出后崩溃/乱码** ([#3228](https://github.com/nearai/ironclaw/issues/3228))：在使用 SSH、noVNC 或 tmux/screen 环境下，输入 `/quit` 退出 IronClaw 会导致终端严重损坏（鼠标追踪功能未正确禁用）。
    *   *状态：暂无对应 fix PR。*
*   🟠 **[High] Gemini thought_signature 持续报错** ([#3225](https://github.com/nearai/ironclaw/issues/3225))：使用 API key 调用 `gemini-3.1-flash-lite-preview` 进行 tool_calling 时，必然在第二轮触发 HTTP 400 错误。
    *   *状态：关联修复代码已于今日在 PR #3226 中提交并关闭。*
*   🟡 **[Medium] DeepSeek 工具调用失效** ([#3201](https://github.com/nearai/ironclaw/issues/3201))：配置 DeepSeek 为提供商时，tool use 无法正常工作。
    *   *状态：暂无对应 fix PR。*
*   🟡 **[Medium] 无头环境下剪贴板静默失效** ([#3227](https://github.com/nearai/ironclaw/issues/3227))：在无 X11/Wayland 的服务器环境中，复制操作依赖的 `arboard` 库失效，未能向用户提供任何 UI 提示。

## 6. 功能请求与路线图信号
今日的路线图极其明确，核心团队正在全力推进底层重构：
*   **Reborn 基底合入主线** ([PR #3230](https://github.com/nearai/ironclaw/issues/3230))：一个标志性的 XL 级 PR，旨在将 `reborn-integration` 分支的大量底层代码合入 `main`。该操作默认关闭，不对外暴露，但标志着项目距离大版本发布仅一步之遥。
*   **金融与交易意图框架 (NEAR Intents)**：社区贡献者 `abbyshekit` 连续发起了多个重量级特性 PR，包括篮子 DCA（定投）调度 ([PR #3224](https://github.com/nearai/ironclaw/issues/3224)) 和全自动任务脚手架 ([PR #3223](https://github.com/nearai/ironclaw/issues/3223))。这暗示项目正在将 AI Agent 能力向加密资产自动管理和 Web3 交易场景延伸。

## 7. 用户反馈摘要
从近期 Issues 的反馈来看，用户在使用边缘环境及非 OpenAI 系模型时体验存在明显痛点：
1. **本地部署与无头服务器支持薄弱**：大量用户在 LXC、纯 SSH 等 headless 环境中运行 IronClaw，但 TUI 的终端状态清理（`/quit` 乱码）和剪贴板支持未能良好适配无 GUI 的 Linux 环境。
2. **多模型切换存在“暗坑”**：由于 fallback 逻辑的持久化 Bug ([#3229](https://github.com/nearai/ironclaw/issues/3229))，用户在切换不同提供商（如从 OpenAI 切到 DeepSeek/Gemini）测试时，极易遭遇配置被静默篡改的严重问题，导致极大的困惑。

## 8. 待处理积压
*   **庞大的依赖更新堆积**：由于正在进行 "Reborn" 大合并，常规的依赖更新已被积压。`dependabot` 提出的 [PR #2973](https://github.com/nearai/ironclaw/issues/2973) (39个更新)、[PR #2593](https://github.com/nearai/ironclaw/issues/2593) (14个 GitHub Actions 更新) 等均已停滞数天。建议在 `reborn` 基底合入后优先处理，防止长期安全与兼容性负债。
*   **Slack Socket Mode 适配悬而未决**：[PR #1549](https://github.com/nearai/ironclaw/issues/1549) 旨在解决 NAT 环境下无需公网 URL 的 Slack 接入问题，这是一个 XL 级别的特性，已挂起超过 1 个月，亟待维护者抽空进行 Review。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 2026 年 5 月 4 日 LobsterAI 项目动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-05-04)

### 1. 今日速览
过去 24 小时内，LobsterAI 项目整体活跃度呈现**低频但聚焦**的特点。项目今日无新版本发布，也无已合并的 Pull Request，代码库保持相对稳定。然而，社区侧展现出明确的底层性能优化诉求与功能拓展方向：开发者继续推进 SQLite 异步写入与 Skill 统计等核心 PR，同时社区用户发起了关于引入 Hermes Agent 的新功能讨论。整体来看，项目正处于新特性的蓄力与社区需求收集阶段。

### 2. 版本发布
*本日无新版本发布。*

### 3. 项目进展
*本日无新增合并或关闭的 PR。* 但以下两个处于活跃状态的待合并 PR 值得关注，它们正在为项目的稳定性和数据分析能力打下基础：
*   **[stale] perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞** ([PR #812](https://github.com/netease-youdao/LobsterAI/pull/812))
    *   **进展分析：** 针对本地客户端（特别是 Electron 主线程）的卡顿问题，该 PR 提出了底层数据库写入的防抖和异步化方案。目前仍处于 Open 状态，可能需要进一步测试以确认并发情况下的数据安全性。
*   **[stale] feat(skills): 新增skill执行统计展示** ([PR #871](https://github.com/netease-youdao/LobsterAI/pull/871))
    *   **进展分析：** 增强了系统在智能体调用层面的可观测性。通过解析 JSONL 数据在 UI 层直观展示调用统计，对用户调试和分析 Agent 行为有极大帮助。

### 4. 社区热点
今日最受瞩目的动态是社区用户提出的一项重量级功能请求：
*   **希望增加 Hermes Agent 功能** ([Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880))
    *   **背后诉求：** 作者 `ecolife007` 提议参照 Open WebUI 的生态，将 Hermes Agent 和 OpenClaw 作为 Agent 接入到 LobsterAI 中。这反映出用户对 LobsterAI 的期望已不再局限于单一的模型会话，而是希望将其打造成一个能够兼容主流开源智能体标准、具备高度扩展性的**多 Agent 聚合平台**。

### 5. Bug 与稳定性
*今日未报告新的严重 Bug、崩溃或回归问题。*
不过，前文提到的 [PR #812](https://github.com/netease-youdao/LobsterAI/pull/812) 正是为了解决历史遗留的稳定性痛点（SQLite 频繁同步写盘导致的主进程阻塞）。这表明项目在处理长文本 Streaming 等场景下的底层稳定性优化仍在攻坚阶段。

### 6. 功能请求与路线图信号
*   **新功能需求：** 接入 Hermes Agent 与 OpenClaw ([Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880))。
*   **路线图信号判断：** 有趣的是，今日活跃的 [PR #871](https://github.com/netease-youdao/LobsterAI/pull/871) 恰好是关于“OpenClaw 会话 JSONL 数据解析与统计”。这释放了一个强烈的信号：**LobsterAI 在下一阶段的迭代中，极有可能会全面拥抱 OpenClaw 生态**。如果 [PR #871](https://github.com/netease-youdao/LobsterAI/pull/871) 被合并，将为 [Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880) 的落地提供底层数据支持，建议核心团队将其纳入近期的版本路线图（Roadmap）中。

### 7. 用户反馈摘要
*   **易用性期望：** 用户明确指出，若引入复杂的 Agent 功能，必须做到“**简单明了地使用**”（参考 Open WebUI 的连接体验）。这提示开发者在实现高阶功能时，需将 UI/UX 的封装作为第一优先级。
*   **性能痛点：** 客户端在流式输出期间出现卡顿（主线程阻塞）仍是影响体验的核心痛点。

### 8. 待处理积压
今日的数据暴露出项目的 PR 维护存在一定的积压风险，建议核心维护者关注以下长期未决的 PR，避免贡献者流失：
*   **[PR #812](https://github.com/netease-youdao/LobsterAI/pull/812)**：自 2026-03-25 创建至今已满 40 天，且被打上 `[stale]` 标签。这是一项关键的底层性能优化，建议推动 Code Review 或请求特定场景的测试反馈。
*   **[PR #871](https://github.com/netease-youdao/LobsterAI/pull/871)**：同为 3 月 25 日提交并处于 `[stale]` 状态。考虑到与当前社区诉求（Issue #1880）的高度契合性，建议重新评估其合并价值并推进审核。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026-05-04 Moltis 项目动态日报：

---

# 📊 Moltis 项目动态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时，Moltis 项目整体保持平稳且专注的开发态势，**暂无新版本发布**。项目今日共处理了 1 条活跃 Issue 和 3 条待合并的 Pull Requests，**合并率为 0%**，表明核心维护者目前对代码合并保持审慎态度。今天的焦点集中在**云部署沙箱能力的横向扩展**以及**大模型推理能力的深度兼容（特别是 DeepSeek V4 与本地 TTS 提供者）**。整体来看，项目正处于功能累积和底层稳定性修复阶段，社区对多后端部署和推理逻辑的诉求日益增加。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
今日虽然无合并的 PR，但 3 个活跃的 PR 正在为项目的下一阶段提供重要支持：
*   **[#942 feat(sandbox): remote & multi-backend sandbox support (Vercel, Daytona, Firecracker)](https://github.com/moltis-org/moltis/pull/942)**：这是一个重大的架构升级 PR。旨在为 Moltis 引入远程和多后端沙箱支持，解决了在 DigitalOcean、Fly.io 和 Render 等不支持 Docker-in-Docker 的云平台上进行沙箱化命令执行的痛点。目前该 PR 已活跃 4 天，若合并将大幅提升 Moltis 在云端的适应能力。
*   **[#961 fix(providers): replay DeepSeek reasoning content](https://github.com/moltis-org/moltis/pull/961)**：针对 DeepSeek V4 及兼容模型的推理思考链路进行了修复。重构了持久化聊天历史的转换逻辑，确保工具推理结果能作为 `reasoning_content` 正确重放，这对于复杂的多轮工具调用场景至关重要。
*   **[#962 Update local TTS provider docs](https://github.com/moltis-org/moltis/pull/962)**：基础设施层面的文档更新，将 Piper 和 Coqui TTS 的文档指引更新至目前由社区积极维护的 Fork 版本，降低了用户配置本地语音环境时的出错率。

## 4. 社区热点
由于近期社区反馈均集中在具体的底层逻辑和适配问题上，今日暂无引发大量讨论的“爆款” Issue 或 PR，但以下两个技术点是目前的核心关注点：
*   **Schema 校验与工具执行的逻辑冲突**（见 #963）：用户和开发者正在探讨工具调用前置校验的容错率问题。
*   **沙箱扩展与部署便捷性**（见 #942）：云端部署的强诉求使得该 PR 具有较高的优先级。

## 5. Bug 与稳定性
今日新增 1 个核心运行时 Bug 报告，暂无对应的修复 PR 提交：
*   🐛 **[P1] 工具调用因空参数导致必填字段丢失 ([#963](https://github.com/moltis-org/moltis/issues/963))**
    *   **现象**：在进行 `exec` 工具调用时，即使模型已成功激活并执行过命令，偶尔也会在预处理 Schema 校验阶段被拒绝，抛出 `missing=command` 错误。
    *   **影响**：导致执行流程在 `ExecTool.execute()` 或 `BeforeToolCall` 触发前中断。此为**间歇性回归问题**，说明在处理模型返回的格式错误或空参数时，Runner 的验证逻辑过于严苛。

## 6. 功能请求与路线图信号
*   **多云端与 Serverless 部署架构**：从 PR #942 可以清晰看出，Moltis 正致力于摆脱对本地 Docker 的强依赖。通过引入对 Vercel、Daytona 等多后端的支持，Moltis 下一版本的路线图明显指向**“无缝的云托管 AI 智能体服务”**。
*   **深度推理模型生态兼容**：随着 DeepSeek V4 的发布，PR #961 表明项目正在快速跟进支持带有深度思考能力的复杂模型架构，这也是未来 AI Agent 能够处理复杂任务的关键信号。

## 7. 用户反馈摘要
从今日的 Issue 及 PR 记录中，可以提取出以下用户真实痛点：
*   **痛点（生产环境崩溃）**：用户在实际使用智能体执行多步操作时，遇到过由于模型格式化参数不完全导致的静默失败和流程直接崩溃（#963）。用户更希望系统能有一定的容错机制或重试机制，而不是直接在 pre-dispatch 阶段阻断。
*   **痛点（本地部署依赖混乱）**：TTS 相关的 PR (#962) 暴露出用户在配置本地语音模型时，经常因为引用了已停止维护的上游仓库而导致失败。

## 8. 待处理积压
*   📌 **重点跟进 PR**：[#942 远程/多后端沙箱支持](https://github.com/moltis-org/moltis/pull/942) 已经提交超过 4 天且尚未合并。鉴于其涉及核心执行环境的重构，建议维护者尽快组织 Code Review，防止产生合并冲突。
*   📌 **紧急修复跟进**：今日爆出的间歇性工具调用 Bug ([#963](https://github.com/moltis-org/moltis/issues/963)) 目前尚未有人认领或提交 PR，可能对线上多工具调用的 Agent 造成干扰，建议优先排查 Runner 校验逻辑。

--- 
*分析结语：Moltis 项目目前正处于积极拥抱云原生和新型推理模型的关键迭代期，保持对底层健壮性（如参数校验容错、历史会话重构）的关注，将决定其作为个人 AI 助手框架在下一阶段的竞争力。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-04)

## 1. 今日速览
今日 CoPaw 项目保持了极高的社区活跃度，过去 24 小时内共产生 **31 条 Issue 更新**（20 新开/活跃，11 关闭）和 **16 条 PR 更新**（11 待合并，5 合并/关闭）。项目当前正处于 v1.1.5 版本发布后的高频迭代与除虫阶段，社区开发者在今天提交了大量底层修复和新功能 PR，核心项目维护者（如 xieyxclack）正在积极准备 **v1.1.6b1** 版本的发布。当前开源社区的关注焦点高度集中在 **本地模型（Ollama/Apple M5）兼容性、记忆（RAG）管理系统的稳定性、以及 MCP 协议的接入体验** 上。

## 2. 版本发布
今日无正式新版本发布。但根据合并记录，项目组已将版本号升级至 `1.1.6b1`（[PR #4012](https://github.com/agentscope-ai/QwenPaw/pull/4012)），预示着包含多项修复的下一个测试版即将推出。

## 3. 项目进展
今日共有 5 个 PR 被合并/关闭，项目在底层健壮性和新提供商支持上取得实质性进展：
* **新增内置提供商支持**：合并了 MiniMax 提供商的接入 ([PR #1055](https://github.com/agentscope-ai/QwenPaw/pull/1055))，扩展了用户可用的 LLM 模型生态。
* **核心稳定性修复**：合并了移除失败消息以防止“会话记忆中毒”的重要修复 ([PR #559](https://github.com/agentscope-ai/QwenPaw/pull/559))，显著提升了多轮对话的容错能力。
* **工程化与代码规范**：合并了错误码系统的引入 ([PR #1642](https://github.com/agentscope-ai/QwenPaw/pull/1642)) 及 v1.1.5 的文档更新 ([PR #4013](https://github.com/agentscope-ai/QwenPaw/pull/4013))。

## 4. 社区热点
今日讨论最热烈的问题反映了用户对多智能体架构和企业级应用的深入探索：
* **智能体隔离与安全机制**：([Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) - 8条评论) 用户呼吁支持多智能体工作区（workspace）和文件的强隔离或白名单机制，这表明 CoPaw 正在被应用于更复杂的多 Agent 协同场景，对沙盒安全提出了更高要求。
* **Telegram 语音兼容性**：([Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) - 5条评论) 暴露了多模态能力在第三方渠道的短板，语音消息无法被 LLM 正确解析。
* **Auto-Memory 沾染问题**：([Issue #3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) - 2条评论，1点赞) 用户指出心跳和定时任务会作为“经验”被写入记忆，希望排除干扰项。这揭示了 AI 长期记忆管理在边缘情况下的痛点。

## 5. Bug 与稳定性
今日报告了多个影响核心稳定性的 Bug，多与配置持久化和特定平台兼容性相关：
* **🔴 P0 级：Embedding 配置在更新后被重置**：([Issue #4018](https://github.com/agentscope-ai/QwenPaw/issues/4018)) 升级版本导致向量搜索彻底失效，严重影响依赖 RAG 的用户。目前已有社区开发者提交了针对记忆管理的修复 PR ([PR #4007](https://github.com/agentscope-ai/QwenPaw/pull/4007))。
* **🟠 P1 级：MacBook M5 芯片架构 Bug**：([Issue #4015](https://github.com/agentscope-ai/QwenPaw/issues/4015)) 在 Apple M5 Pro 上，子进程被错误地以 i386 架构（通过 Rosetta）运行，导致原生 ARM 工具（如 Ollama）无法调用。
* **🟠 P1 级：Ollama 会话丢失**：([Issue #3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)) 本地大模型无法携带上下文，每一轮都是全新对话。
* **🟡 P2 级：MCP Client 超时不可配置**：([Issue #3997](https://github.com/agentscope-ai/QwenPaw/issues/3997)) Pydantic 机制导致静默丢弃用户配置的 timeout 字段，执行复杂工具容易超时报错。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以洞察到项目未来版本的演进方向：
* **多模型容错与切换**：用户请求增加 Fallback 模型选项 ([Issue #4011](https://github.com/agentscope-ai/QwenPaw/issues/4011))，当主模型宕机时自动切至备用模型，提升生产环境的可用性。
* **桌面端常驻后台**：呼声极高的功能（[Issue #2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) 与 [Issue #3979](https://github.com/agentscope-ai/QwenPaw/issues/3979)），希望支持系统托盘最小化，而非关闭软件即停止后端服务。
* **前端交互升级**：社区正在推动 UI 从纯文本向富交互演进，提出了类似 Claude 的 Artifact 视图 ([Issue #3983](https://github.com/agentscope-ai/QwenPaw/issues/3983)) 和可视化标注共享区域 ([Issue #4002](https://github.com/agentscope-ai/QwenPaw/issues/4002))。
* **火山引擎接入**：目前有开发中的 PR 正在添加火山引擎提供商 ([PR #3994](https://github.com/agentscope-ai/QwenPaw/pull/3994))，预计将在下个版本上线。

## 7. 用户反馈摘要
* **真实痛点**：用户在使用本地部署（特别是 Ollama 和 Apple Silicon 芯片）时遇到阻碍较多，从环境适配到记忆检索（[Issue #4018](https://github.com/agentscope-ai/QwenPaw/issues/4018)）均有挫折感。配置文件在更新时的强覆写行为也引发了数据丢失的抱怨。
* **高级使用场景**：部分先锋用户已在探索基于 CoPaw 的中途任务引导（[Issue #4019](https://github.com/agentscope-ai/QwenPaw/issues/4019)）及核心记忆文件的只读防篡改保护（[Issue #4020](https://github.com/agentscope-ai/QwenPaw/issues/4020)），说明项目拥有一批高粘性的极客和开发者用户。
* **国际化进展**：巴西开发者提交了 pt-BR（巴西葡萄牙语）的本地化支持 PR ([PR #4009](https://github.com/agentscope-ai/QwenPaw/pull/4009)))，反映出项目在非中文/英语区的吸引力正在扩大。

## 8. 待处理积压
* **[PR] 等待合并的重要修复**：为 `delegate_external_agent` 添加默认安全超时的 PR（[PR #3928](https://github.com/agentscope-ai/QwenPaw/pull/3928)）已标记 "Under Review" 多日，需维护者尽快合并以解决多 Agent 调用的无限等待问题。
* **[Issue] 长期未决的功能需求**：系统托盘最小化功能（[Issue #2430](https://github.com/agentscope-ai/QwenPaw/issues/2430)）自 3 月底提出至今，因架构限制（关闭客户端即关闭服务）未得到官方实质性推进，建议作为下一阶段提升桌面端体验的核心目标。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-04)

> 分析师提示：本期数据呈现出项目在底层架构与“自我进化”能力上的重大突破，同时依赖项迎来集中式升级。

### 1. 今日速览
过去24小时内，ZeptoClaw 项目展现出**极高的开发活跃度与明确的架构演进方向**。系统共处理了 22 个 Pull Requests（其中 19 个顺利合并/关闭），涵盖了一次酝酿已久的底层重构和全面的依赖树升级。Issue 板块新增 4 个功能提案，均紧密围绕“本地优先”的核心定位。从动向上看，项目正处于将 Agent “自我改进循环”从理论推向落地的重要阶段，代码质量与文档规范正在同步打磨。

### 2. 版本发布
- **无新版本发布**。尽管合并了大量代码，今日官方未推送新的 Release 版本。

### 3. 项目进展
今日项目进展显著，核心从“架构基建”与“依赖健康”两路推进：

- **核心架构重构落地**：[#564](https://github.com/qhkm/zeptoclaw/pull/564) 成功合并，这是 #399 提案的第一阶段。它引入了健壮的中间件框架及 11 个内置实现，**值得注意的是，本次合并遵循了“仅做加法”的原则，暂未将其挂载到主 Agent 循环中**，这为后续平滑过渡打下了基础。此举动标志着 ZeptoClaw 在请求生命周期控制上迈出了关键一步。
- **文档定位对齐与清洗**：[#570](https://github.com/qhkm/zeptoclaw/pull/570) 和 [#566](https://github.com/qhkm/zeptoclaw/pull/566) 相继取得进展，统一了项目作为 "local-first personal AI assistant infrastructure" 的定位，移除了针对同类竞争项目的不实比较声明，更新了频道和 provider 的数量统计。
- **依赖库全量升级**：Dependabot 带来了十余个依赖更新 PR 并全部合并。包括核心异步运行时 `tokio` 升至 `1.51.1` ([#550](https://github.com/qhkm/zeptoclaw/pull/550))，前端构建工具 `vite` 升至 `8.0.8` ([#561](https://github.com/qhkm/zeptoclaw/pull/561))，以及文档站 Astro 框架的升级等。这大幅降低了潜在的安全与兼容性债务。

### 4. 社区热点
由于本期动态主要由核心维护者驱动（及 Dependabot 自动化生成），因此热点集中在宏观架构设计上：
- **Agent 的自我进化机制**：社区及维护者显然对 Hermes Agent 提出的 "self-improving loop" 高度关注。今日密集提出了从第一阶段（技能 CRUD，[#567](https://github.com/qhkm/zeptoclaw/issues/567)）到第二阶段（使用遥测，[#568](https://github.com/qhkm/zeptoclaw/issues/568)）的路线图，这将成为近期最核心的叙事线。
- **记忆触发机制优化**：[#571](https://github.com/qhkm/zeptoclaw/pull/571) 针对 `longterm_memory` 的描述进行了重构，旨在引导 AI 知道“何时该记住，何时不该记住”，这对于控制 Token 消耗和记忆库的清洁度至关重要。

### 5. Bug 与稳定性
- **今日无新报告的严重 Bug、崩溃或回归问题**。旧版本代码库中涉及的 MQTT 频道因上游 `rumqttc` 的 bug 目前处于特性封存状态（在 #566 中有说明），但不影响现有主干的稳定性。合并的 #564 的非侵入式设计也有效规避了潜在的架构震荡。

### 6. 功能请求与路线图信号
今日开立的 Issues 释放了极其明确的短期路线图信号，核心在于**赋予 Agent 自主管理能力**：
1. **Agent 自主技能管理 (CRUD)**：[#567 feat(tools): agent-callable skill_manage tool](https://github.com/qhkm/zeptoclaw/issues/567)。目标允许 Agent 在对话中自行编写、修改、删除技能。这属于颠覆性特性，预示着 ZeptoClaw 向“自治助手”迈进。
2. **使用情况遥测**：[#568 feat(skills): usage telemetry sidecar](https://github.com/qhkm/zeptoclaw/issues/568)。通过 `.usage.json` 记录各技能使用频率。此信号表明项目正在为未来引入基于使用习惯的“自动垃圾回收”或“模型微调降级”做数据准备。
3. **边缘计算 LLM 接入（Liquid AI）**：已关闭的 [#541 feat(providers): Liquid AI (LFM) provider integration](https://github.com/qhkm/zeptoclaw/issues/541) 证实项目正积极探索非 Transformer 架构（如 LFM-1B/3B）在端侧的部署，这与项目 "local-first" 的定位高度契合。

### 7. 用户反馈摘要
从 Issues 和 PRs 的描述中提炼出现有用户/开发者的核心诉求：
- **开发者体验 (DX) 与定位认知**：用户或贡献者在阅读 README 时对项目与同类的边界感到模糊（#565）。维护者迅速响应并调整，表明项目在对外沟通上追求严谨和务实。
- **自动化的痛点**：目前 Agent 缺乏“自省”能力，无法判断哪些技能是冗余的，需要人工干预。#567 和 #568 的提出正是为了抹平这一痛点，让“长期记忆”和“技能库”不再是无法维护的数据沼泽。

### 8. 待处理积压
当前没有长期失联的死锁 Issue，但有**3个 Open 状态的重要 PR 需要重点关注与推进**：
1. [#571 feat(tools): trigger-phrase nudges in longterm_memory description](https://github.com/qhkm/zeptoclaw/pull/571)：包含触发器的重构及 doc-test，需尽快合并以为后续的记忆机制铺路。
2. [#570 docs: align ZeptoClaw positioning claims](https://github.com/qhkm/zeptoclaw/pull/570)：定位对齐文档，目前处于 Open 状态等待最终确认。
3. 依赖 #567 和 #568 的实现代码尚未见 PR 提交，建议保持跟进，防止在 "self-improving loop" 这个庞大特性上出现断层。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这份报告由 AI 智能体与个人 AI 助手开源项目分析师基于 ZeroClaw 项目（github.com/zeroclaw-labs/zeroclaw）的 GitHub 数据自动生成。数据统计周期为 2026-05-03 至 2026-05-04。

---

### 1. 今日速览

过去 24 小时内，ZeroClaw 项目处于**高度活跃**状态，社区互动频繁，整体呈现“功能大步快跑、架构为后续重构做准备”的健康特征。
- **活动量维持高位**：共计更新 50 条 Issues（其中 42 条新开启或处于活跃状态）和 46 条 PRs（25 条待合并），开发节奏紧凑。
- **桌面端全面发力**：今日最显著的动态是集中抛出了近 10 个关于 Tauri 桌面端的增强与重构提案，标志着项目正在积极向原生桌面端（特别是 macOS 生态与无障碍体验）进军。
- **稳定性持续加固**：修复了安装脚本遗漏 Web 资产、安全策略误杀 Git 命令以及多供应商兼容性等关键 Bug，核心运行时的鲁棒性得到进一步提升。

### 2. 版本发布

**无新版本发布。**
（注：根据 PR #6266 动态，项目目前正通过 `integration/v0.8.0` 分支进行 Config Schema v3 等破坏性更新的集成预演，预计下一个正式版本将在集成测试完成后发布。）

### 3. 项目进展

今日共关闭/合并 21 个 PR，项目在运行时安全、安装体验、供应商兼容性和文档标准化方面取得了实质性进展：

- **安装与部署体验修复**：合并了 PR [#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154)，修复了 `install.sh` 在预编译安装时未正确提取 Web Dashboard 静态资源的严重问题，保障了新用户的开箱即用体验。
- **安全沙箱机制修正**：PR [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) 的合并解决了底层命令行大小写转换导致 `git -C <path>` 被安全策略误判为 `git -c` 而拦截的拦截问题，提升了开发者使用体验。
- **多模态记忆与上下文处理优化**：PR [#6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189) 修复了在无视觉能力的模型中进行上下文压缩时未能剔除图像标记的问题，避免了不必要的外部 API 报错。
- **文档规范化落地**：随着 PR [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) 和 [#5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590) 的合并，RFC #5576 的前两个阶段（文档归档与对齐）顺利完成，项目文档结构更加清晰。配置文档示例也得到了同步更新 (PR [#6194](https://github.com/zeroclaw-labs/zeroclaw/pull/6194))。

### 4. 社区热点

- **高评级风险 Bug 引发热议**：
  Issue [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)（7条评论）报告了 DeepSeek V4 在多轮工具调用时因丢失 `reasoning_content` 导致 400 报错的问题。这反映了社区对前沿模型（如思维链模型）快速迭代的强诉求，目前的流式处理逻辑亟待适配。已有对应修复 PR [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) 提交等待合并。
- **上下文安全隔离问题**：
  Issue [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)（4条评论）揭露了一个高风险缺陷：Discord 频道聊天的上下文“污染”了定时任务的执行。这触及了 AI Agent 在多任务隔离设计上的核心痛点，目前被标记为 `status:blocked`，亟需维护者介入复现。
- **轻量化硬件部署指南**：
  Issue [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)（3条评论，3个 👍）指出在树莓派上编译极易触发 OOM。这真实反映了极客用户希望在低功耗边缘设备上运行 AI Agent 的强烈意愿。

### 5. Bug 与稳定性

根据今日报告与活跃数据，核心 Bug 评估如下：

**P0/P1 级别（工作流阻断/高风险）：**
1. **Web Dashboard 审批流绕过** ([#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207))：WebSocket 网关路径绕过了 `ApprovalManager`，导致监督模式下的工具审批无法在 Web UI 弹出。**严重危害运行时安全**，尚无修复 PR。
2. **Fallback 供应商配置失效** ([#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803))：高可用降级链无法读取 `[providers.X]` 的配置，只能依赖环境变量。已有相关 PR 试图修复配置解析逻辑。
3. **Telegram 图片流发送至无视觉模型报错** ([#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897))：Channel 适配层未做能力前置校验。（注：部分相关修复逻辑已在今日合并的 PR 中覆盖）。

**P2 级别（功能降级）：**
- **本地测试自检 IP 冲突** ([#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051))：`self-test` 命令无视用户 `0.0.0.0` 的配置，强行走 `127.0.0.1`，导致排错困难。

### 6. 功能请求与路线图信号

今日用户 @theonlyhennygod 集中提交了一系列桌面端 Issue，这组信号强烈暗示了 **v0.7.7 到 v0.8.0 的核心路线图将包含“Tauri 原生桌面应用的重构与增强”**：

- **系统级权限与集成**：要求原生支持 macOS 辅助功能（AX）、屏幕录制和麦克风权限（[#6333](https://github.com/zeroclaw-labs/zeroclaw/issues/6333) - [#6335](https://github.com/zeroclaw-labs/zeroclaw/issues/6335)）。
- **无障碍与健康度**：增加 VoiceOver 审计与减弱动画支持（[#6336](https://github.com/zeroclaw-labs/zeroclaw/issues/6336), [#6337](https://github.com/zeroclaw-labs/zeroclaw/issues/6337)）。
- **分发与更新机制**：引入苹果公证与签名机制（[#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338)），并实现基于 Github Releases 的原地自动更新（[#6332](https://github.com/zeroclaw-labs/zeroclaw/issues/6332)）。

结合目前正在进行的 PR [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)（菜单栏智能体重构），ZeroClaw 正试图从“带 Web UI 的后台服务”转型为“高度融入操作系统的桌面原生助手”。

### 7. 用户反馈摘要

- **痛点 1：配置系统（Config.toml）学习曲线陡峭且存在breaking changes**。多位用户反映（如 Issue [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)），由于配置键名随着版本更新发生变动，文档未及时同步，导致用户在配置本地测试环境和多模型供应商时频繁受挫。
- **痛点 2：多模型/多渠道组合场景下的容错能力不足**。例如在使用非视觉大模型时接收 Telegram 图片，或使用 DeepSeek 等特殊思维链模型时，ZeroClaw 的统一转发层处理略显生硬，缺乏优雅的降级或适配策略。
- **满意点：低功耗设备运行能力**。用户对 ZeroClaw 能够在树莓派等 <$10 设备上以极低内存常驻运行表示高度赞赏（Issue #4704 👍 数最高），认为这是相比其他重量级 Agent 框架的巨大优势。

### 8. 待处理积压

提醒项目维护者关注以下高优但进展受阻/长期悬挂的事务：

1. **严重安全隔离泄漏**：[Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) （上下文跨频道泄漏至定时任务），标记为 `status:blocked` 且有高风险标签，需要核心架构师介入隔离 runtime 的上下文。
2. **Web 网关审批阻断**：[Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) 直接影响了需要人工介入的 AI Agent 工作流，建议提高优先级并分配给熟悉 WebSocket Gateway 的开发者。
3. **大重构 PR 的合并协调**：[PR #6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)（Config v3 迁移）和 [PR #5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)（桌面端重构）体积庞大且影响面极广，目前均标注为 `needs-author-action` 或处于未合并状态，需防范长期大分支导致的合并地狱。

</details>