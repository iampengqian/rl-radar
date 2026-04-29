# OpenClaw 生态日报 2026-04-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-29 22:15 UTC

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

以下是为您生成的 2026-04-30 OpenClaw 开源项目动态日报。

---

# 📊 OpenClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
OpenClaw 项目在过去24小时内保持了**极高的社区活跃度与开发热度**。昨日共产生 **500 条 Issue 更新**（新开/活跃 478 条，关闭 22 条）以及 **500 条 PR 更新**（待合并 385 条，合并/关闭 115 条），社区互动量庞大。项目刚刚发布了 **v2026.4.27** 正式版，主要针对 Docker 沙箱环境增加了 GPU 直通支持。当前项目的重心明显聚焦于 **多渠道稳定性（Telegram/Discord/飞书）、多级代理编排可靠性、以及内存管理机制**的深度优化。

## 2. 版本发布
- **[v2026.4.27](https://github.com/openclaw/openclaw/releases/tag/v2026.4.27)**
  - **更新内容**：新增针对 Docker 沙箱的选入式配置 `sandbox.docker.gpus`。这使得当宿主机 Docker runtime 支持 `--gpus` 时，本地 GPU 工作负载可以在沙箱化的智能体内部运行。
  - **迁移注意**：此为可选功能，不会破坏现有配置。主要针对需要在沙箱内执行本地大模型或重计算任务的进阶用户。

## 3. 项目进展
今日共有 115 个 PR 被合并或关闭，项目在系统健壮性、异常处理和多渠道适配上迈出了坚实的一步：
- **核心 SDK 发布**：[PR #74610](https://github.com/openclaw/openclaw/pull/74610) 提交了首个公开的 `@openclaw/sdk` 包，为 Gateway 支持的 Agent 运行、会话、事件和取消操作提供了标准化接口，标志着 OpenClaw 生态走向规范化。
- **多渠道修复**：
  - 飞书点对点线程路由修复 [PR #73972](https://github.com/openclaw/openclaw/pull/73972)。
  - Telegram 软性处理良性 `deleteMessage` 400 错误 [PR #73735](https://github.com/openclaw/openclaw/pull/73735)。
- **代理与内存优化**：
  - [PR #74390](https://github.com/openclaw/openclaw/pull/74390) 针对 `/new` 和 `/reset` 命令跳过无用的预清理，大幅减少锁占用时间。
  - [PR #74592](https://github.com/openclaw/openclaw/pull/74592) 修复了轻量级召回运行中内存工具被错误折叠的 Bug。

## 4. 社区热点
今日讨论最激烈的问题集中在**跨平台客户端支持、社区生态建设及多渠道内部消息泄漏**：
- **多端支持诉求**：[Issue #75](https://github.com/openclaw/openclaw/issues/75)（评论 101 条，👍73）针对缺乏 Linux 和 Windows 原生 Clawdbot 客户端展开了长期讨论，反映了重度用户对桌面端统一体验的强烈渴望。
- **社区生态发展**：[Issue #50090](https://github.com/openclaw/openclaw/issues/50090)（评论 13 条）深入探讨了 ClawHub 和 Skill 生态系统的未来，指出当前 Skill 承诺与实际体验存在差距，亟需完善开发者生态。
- **隐私与可靠性**：
  - [Issue #44905](https://github.com/openclaw/openclaw/issues/44905)（评论 7 条）报告了 Discord 频道意外泄漏底层 LLM 工具调用原始 JSON 的行为，引发对输出过滤机制的关注。
  - [Issue #73323](https://github.com/openclaw/openclaw/issues/73323)（评论 13 条）热议 Windows 环境下网关的长时间运行性能退化（RPC 延迟高达 83 秒）。

## 5. Bug 与稳定性
今日暴露了大量严重的回归问题和稳定性隐患，多集中在代理间通信和内存泄漏：
- 🔴 **严重 (P0 - 核心功能受损/崩溃)**
  - **代理通信中断**：[Issue #52875](https://github.com/openclaw/openclaw/issues/52875) 升级后主 Agent 无法联系子 Agent（Session not found）。
  - **严重内存泄漏**：[Issue #45438](https://github.com/openclaw/openclaw/issues/45438) 网关因缓存机制导致每分钟泄漏约 1GB 原生内存。
  - **内存管理混乱**：[Issue #43747](https://github.com/openclaw/openclaw/issues/43747) 系统未能正确持久化记忆，并不断重复进行分块和嵌入操作。
- 🟠 **一般 (P1 - 异常行为)**
  - **心跳时间戳停滞**：[Issue #44993](https://github.com/openclaw/openclaw/issues/44993) Cron 注入的当前时间不随运行更新，导致 Agent 感知错误。*（暂无修复 PR）*
  - **上下文溢出误判**：[Issue #60868](https://github.com/openclaw/openclaw/pull/60868) 相关错误未能在错误链深处被捕获。*（已有对应修复 PR）*

## 6. 功能请求与路线图信号
结合近期的 PR 动向，以下功能请求极有可能被纳入近期的迭代路线图：
- **沙箱原生文件操作**：用户对突破 Bash 输出限制的二进制文件操作需求强烈。[PR #74134](https://github.com/openclaw/openclaw/pull/74134) 已新增捆绑插件 `file-transfer`，支持跨节点读写，积极响应了这一诉求。
- **强制策略钩子**：[Issue #13583](https://github.com/openclaw/openclaw/issues/13583) 提出在金融等高安全场景下，需要在 Agent 回复前强制执行工具调用（硬门控）。
- **Cron 直接执行模式**：[Issue #18160](https://github.com/openclaw/openclaw/issues/18160)（👍9）要求绕过 LLM 解释直接执行简单 Cron 命令，以降低延迟和 API 成本。
- **安全拒绝名单**：[Issue #6615](https://github.com/openclaw/openclaw/issues/6615)（👍6）提议为 `exec-approvals` 添加黑名单机制，细化执行安全管控。

## 7. 用户反馈摘要
通过对活跃 Issue 的语义分析，提炼出当前用户的三大核心反馈：
- **痛点 1：长会话与多 Agent 编排极易"卡死"**：用户在多子代理或长对话场景中，经常遭遇会话无响应、完成状态误报以及状态丢失（如 [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)、[Issue #47975](https://github.com/openclaw/openclaw/issues/47975)），任务可靠性成为生产环境最大的拦路虎。
- **痛点 2：Token 与上下文极度浪费**：高级用户对当前系统每次会话无差别加载完整工具 Schema（[Issue #14785](https://github.com/openclaw/openclaw/issues/14785) 浪费约 3,500 tokens/次）及图片 Base64 编码撑爆 200K 上下文（[Issue #1210](https://github.com/openclaw/openclaw/issues/1210)）感到不满。
- **痛点 3：Windows 端体验欠佳**：无论是更新报错（[Issue #40540](https://github.com/openclaw/openclaw/issues/40540)）、节点启动卡死（[Issue #39038](https://github.com/openclaw/openclaw/issues/39038)），还是网关性能退化，Windows 环境的兼容性表现均明显逊色于 Linux/macOS。

## 8. 待处理积压
以下高价值/高频讨论的 Issue 仍处于 Open 或 Stale 状态，建议核心维护者关注并推进：
- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) - Linux/Windows 客户端支持**：长期霸榜，呼声极高，需官方明确排期或给出贡献指南。
- **[Issue #12590](https://github.com/openclaw/openclaw/issues/12590) - `memoryFlush` 触发不可靠**：导致核心记忆功能间歇性失效，影响用户长期使用体验。
- **[Issue #22438](https://github.com/openclaw/openclaw/issues/22438) - 分层加载 Bootstrap 文件**：对于控制 Token 成本至关重要，需要架构层面的确认。
- **[Issue #45438](https://github.com/openclaw/openclaw/issues/45438) - 会话存储原生内存泄漏**：导致网关 RSS 异常飙升，严重阻碍生产环境的大规模部署。

---

## 横向生态对比

以下是基于 2026 年 4 月 30 日各大开源项目社区动态生成的横向对比与生态分析报告：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多端多智能体协同”跨越的爆发期**。项目普遍在横向扩展多渠道（如飞书、企微、Telegram、Discord）接入能力的同时，纵深攻坚沙箱安全隔离与上下文/内存管理。行业正经历一次重要的技术共识重塑：**开发者对 Token 暴力消耗的容忍度正在触底，系统性成本优化（如按需加载、上下文精准压缩）成为刚需**。此外，底层模型网关正在解除对单一闭源大模型的依赖，全面拥抱多供应商路由与本地边缘计算（如 Ollama、OpenVINO）。

### 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 | PR 活跃度 | 今日 Release | 核心聚焦 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新活478) | 500 (合并115) | **v2026.4.27** | 网关多渠道稳定、内存泄漏修复、生态规范化 | ⭐⭐⭐⭐⭐ (庞大规模，需治理) |
| **NanoBot** | 12 (关闭8) | 39 (合并26) | **v0.1.5.post3** | 会话隔离重构、微信多开、底层数据安全 | ⭐⭐⭐⭐⭐ (高效收敛，架构扎实) |
| **Hermes Agent** | 50 (新活41) | 50 (合并12) | 无 | TUI 渲染修复、ACP 并发安全、懒加载 | ⭐⭐⭐⭐ (功能密集，PR积压严重) |
| **PicoClaw** | 10 (新活) | 15 (合并5) | **v0.2.7-nightly** | DeepSeek v4 适配、废弃 TUI 转向 Web、IoT 接入 | ⭐⭐⭐⭐ (快速试错，横向扩张) |
| **NanoClaw** | 3 | 50 (合并21) | 无 | 上下文压缩控制、并发 DB 锁、Gemini 模型接入 | ⭐⭐⭐⭐ (底层重构，核心开发主导) |
| **IronClaw** | 28 | 50 (合并35) | **v0.27.0** | Reborn 架构重构、WASM/沙箱安全、权限模型 | ⭐⭐⭐⭐⭐ (架构大演进，极速迭代) |
| **Moltis** | 6 (关闭2) | 12 (合并7) | **v20260429.02/01** | 沙箱内核级隔离、跨生态数据迁移、语音身份 | ⭐⭐⭐⭐⭐ (极速响应，安全先行) |
| **CoPaw** | 17 | 22 (合并10) | **v1.1.5** | CJK 记忆检索、企微/飞书集成、多智能体隔离 | ⭐⭐⭐⭐ (中国企业级场景发力) |
| **ZeroClaw** | 29 (关闭21) | 50 (合并0) | 无 | Web Dashboard 重构、ACP 协议、Token 极简优化 | ⭐⭐⭐ (存在审查瓶颈，待处理积压多) |
| **LobsterAI** | 1 | 28 (合并4) | **2026.4.29** | 版本整合、第三方 OAuth 认证 | ⭐⭐⭐ (平稳期，社区PR消化慢) |
| **NullClaw** | 2 (关闭1) | 0 | 无 | 低资源设备搜索集成 | ⭐⭐⭐ (沉寂期，定向优化) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 无 | - | ⭐ (停滞状态) |

### 3. OpenClaw 在生态中的定位
* **优势与体量**：OpenClaw 无疑是当前生态的**“流量与体量核心”**（单日超千级 PR/Issue 互动）。其首发了标准化的 `@openclaw/sdk`，并率先在 Docker 沙箱中完成 GPU 直通，展现出在重型计算和规范化企业级接入方面的领先性。
* **技术路线差异**：与 PicoClaw 或 NullClaw 钻研轻量级/边缘计算不同，OpenClaw 重注“多级代理编排”与“企业级多渠道（飞书/Discord/TG）路由”。
* **面临的挑战**：相比于 NanoBot 和 Moltis 的灵活敏捷，OpenClaw 正遭遇“大型开源项目的成长烦恼”，表现为严重的网关内存泄漏（每分钟 1GB）、多智能体卡死，以及因全量加载 Schema 导致的极度过度的 Token 消耗。社区呼吁其从“功能狂奔”转向“稳定性治理”。

### 4. 共同关注的技术方向
* **Token 消耗与上下文工程的“急救”**：
  * **诉求**：全量工具描述注入和粗暴的上下文截断导致严重浪费和能力下降。
  * **涉及项目**：**OpenClaw** (无差别加载浪费 3500 tokens)、**Hermes** (懒加载提案火爆)、**ZeroClaw** (Skill 编译提案)、**NanoClaw** (用户强烈抗议 200k 被强制压缩)。
* **多级沙箱安全与执行隔离**：
  * **诉求**：防止 Agent 窃取宿主机数据或执行危险命令。
  * **涉及项目**：**Moltis** (合并 Linux Landlock 内核级隔离)、**IronClaw** (引入防 SSRF 和密钥租约)、**OpenClaw** (增加 GPU 直通沙箱)。
* **企业级通讯软件（IM）的深度集成与隔离**：
  * **诉求**：解决群聊历史串频、文件发送受限、复杂任务漏发消息等问题。
  * **涉及项目**：**CoPaw** (企微/飞书长文本丢失)、**PicoClaw** (钉钉 SDK 崩溃)、**NanoBot** (微信多开与群组 Topic 隔离)。
* **多模态与“Thinking”模型适配**：
  * **诉求**：针对类似 DeepSeek v4 的长篇隐藏推理链和混合多模态输入进行架构适配。
  * **涉及项目**：**PicoClaw**、**CoPaw**、**NanoClaw** 均在今日集中暴露了因无法处理 `reasoning_content` 导致的 BadRequest 崩溃。

### 5. 差异化定位分析
* **全栈/企业级网关路由**：**OpenClaw**、**Hermes Agent**、**ZeroClaw**。它们致力于成为“大而全”的网关底座，提供多端 UI、渠道网关和复杂工具编排，面临高并发状态机的挑战。
* **前沿架构与高安全底座**：**IronClaw** (WebAssembly 运行时重构)、**Moltis** (系统级安全沙箱)。适合对安全隔离要求极高的金融或敏感数据企业。
* **重度本地化/极客玩家**：**NanoBot**、**NanoClaw**。高度关注 CLI/TUI 体验，提供极致的本地会话控制，适合作为开发者的本地“分身”。
* **边缘计算与泛在 IoT**：**PicoClaw** (接入 MQTT，尝试 OpenVINO，甚至计划移除 TUI 只为轻量化)、**NullClaw** (坚守弱设备可用底线)。
* **国内生态与特定语言优化**：**CoPaw** (依托通义千问，首发 CJK 字符级记忆检索)、**LobsterAI** (深度集成网易有道生态)。

### 6. 社区热度与成熟度
* **极速狂飙期（活跃且易碎）**：**OpenClaw**、**PicoClaw**。功能扩展极快，但被内存泄漏、网关卡死、SDK 兼容性等 P0 级回归问题拖累，处于“边飞边换引擎”的状态。
* **架构重构期（破茧成蝶）**：**IronClaw**、**NanoClaw**、**ZeroClaw**。分别在进行 Reborn、多模型底座、Web 面板的彻底重写，存在较多待合并的大型 PR，核心维护者正面临巨大的代码审查压力。
* **高质量收敛期（平稳健壮）**：**NanoBot**、**Moltis**。PR 闭环快，对新 Bug 响应极其迅速（如同日内提交修复），底层代码（如原子写入）考虑周全。

### 7. 值得关注的趋势信号
1. **“零 Token 浪费”将成为智能体框架的下一个核心竞争力**。社区对“每次调用附带几十大页工具说明”的模式已忍无可忍。实现动态 Skill 编译、工具按需加载将是下半年框架优化的主旋律。
2. **智能体的记忆管理正向“数据库级 RSD”演进**。简单的文本拼接已被抛弃，利用 SQLite 竞态控制、会话隔离（Session ID 绑定）、向量检索（CJK 感知分词）来构建长期记忆体系成为标配。
3. **向非拉丁语系和多模态“开战”**。多个项目（如 Hermes 的 CJK 渲染乱码、CoPaw 的企微任务阻断）暴露出早期代码对国际化（i18n）和多模态文件/语音流处理的历史欠账，这波集中修复将大幅改善非英语用户的体验。
4. **本地小参数模型倒逼系统架构升级**。随着 Ollama 等本地模型的普及，开发者发现现有系统过于依赖“闭源大模型的强力纠错”，导致本地模型频发“无限工具调用死循环”。未来的框架需要更强的确定性执行流（如绕过 LLM 的 Cron 硬执行）和幻觉阻断机制。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目动态日报 (2026-04-30)

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日继续保持高活跃度与健康的迭代节奏，过去 24 小时内共处理了 **39 个 PR**（其中 26 个已合并/关闭）和 **12 个 Issue**（8 个已关闭），展现出维护团队高效的需求消化能力。项目正式发布了 **v0.1.5.post3** 版本，标志着多轮对话能力正式成为平台的一等公民。社区方面，单日新增了多账号微信支持、集中式 Hook 中心等重磅级 PR，同时吸引了大量外部贡献者（含 AI 辅助编程的提交）。整体而言，项目正处于功能快速扩充与平台稳定性加固并行的良性阶段。

---

## 2. 版本发布

### 🚀 [v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)
- **合并统计**：共合并 57 个 PR，吸引 12 名新贡献者参与。
- **核心更新**：**“对话即一等公民”**。Agent 学会了在 Threads 中进行结构化对话。针对飞书等渠道，群组话题（Topics）现可获取独立的会话隔离支持，大幅提升了群聊场景下的上下文准确度。
- **迁移注意事项**：从 `v0.1.5.post2` 升级至 `post3` 主要侧重于会话管理重构，建议深度使用飞书群机器人的用户重点关注此版本。

---

## 3. 项目进展

今日项目在渠道适配、底层架构和开发者体验上均有显著突破：

- **渠道能力增强**：
  - **[PR #3542](https://github.com/HKUDS/nanobot/pull/3542) 微信多开支持**：重构了个人微信渠道，允许在单个 NanoBot 实例中同时登录并运行多个微信账号，且完全向后兼容旧版配置。
  - **[PR #3510](https://github.com/HKUDS/nanobot/pull/3510) Matrix 兼容性修复**：修复了 Matrix `user_id` 中的冒号导致 Windows 系统路径创建失败（`WinError 123`）的严重问题。
  - **[PR #3487](https://github.com/HKUDS/nanobot/pull/3487) 细粒度进度控制**：允许在不同渠道的配置中单独覆盖 `sendProgress` 和 `sendToolHints`，而不再局限于全局统一配置。
- **底层架构优化**：
  - **[PR #3541](https://github.com/HKUDS/nanobot/pull/3541) 集中式 Hook 中心**：引入了全新的 `HookCenter` 基础设施，支持外部插件通过 Python `entry_points` 拦截、修改甚至中断数据流，为生态插件化打下坚实基础。
  - **[PR #3508](https://github.com/HKUDS/nanobot/pull/3508) 历史记录原子写入**：采用 `temp file + os.replace() + fsync()` 模式重写了 `history.jsonl` 的落盘逻辑，彻底解决进程崩溃或断电导致的数据损坏隐患。
  - **[PR #3532](https://github.com/HKUDS/nanobot/pull/3532) 修复子代理迭代限制**：移除了子代理硬编码的 15 次迭代限制，转而继承父代理的 `max_iterations` 配置，使多代理协同更加可控。
- **AI 辅助贡献清理**：今日合并了大量由 Trae CN 等工具生成的 PR（如 [#3535](https://github.com/HKUDS/nanobot/pull/3535), [#3537](https://github.com/HKUDS/nanobot/pull/3537)），涉及 6 阶段工作流和安全防护路径检测的修复，体现了项目对新型 AI 开发范式的包容。

---

## 4. 社区热点

- **[Issue #3095](https://github.com/HKUDS/nanobot/issues/3095) [6 评论]**：用户希望将使用 Anthropic API 格式的第三方中转端点接入 NanoBot。这反映了高级用户对“自定义模型提供商底座 API 协议”的强烈诉求，目前配置层面仍存在限制。
- **[Issue #2590](https://github.com/HKUDS/nanobot/issues/2590) [5 评论]**：升级至 `v0.1.4.post6` 后内置的 MiniMax 提供商失效。用户在尝试手动配置 `apiBase` 时遇到阻碍，表明部分国产大模型的官方 API 适配需要回归测试。
- **[Issue #3533](https://github.com/HKUDS/nanobot/issues/3533) [新开]**：飞书渠道在群聊中强制覆盖 `reply_in_thread=True`，忽略了用户的 `replyToMessage` 配置，引发了配置语义失效的讨论。

---

## 5. Bug 与稳定性

按照严重程度及影响范围排列今日暴露的缺陷：

1. **🚨 P0 - 数据落盘损坏风险**：`history.jsonl` 在断电等极端情况下容易损坏。**修复状态**：已通过 [PR #3508](https://github.com/HKUDS/nanobot/pull/3508) (已合并) 的原子写入机制彻底解决。
2. **🔥 P1 - 微信定时任务静默失败**：[PR #3517](https://github.com/HKUDS/nanobot/pull/3517) 指出，微信的定时任务（Cron）因缺省临时 `context_token` 导致消息发送被静默丢弃。**修复状态**：已提交修复 PR，等待合并。
3. **🔥 P1 - WebFetchTool 隐私与路由问题**：
   - [Issue #2341](https://github.com/HKUDS/nanobot/issues/2341) 指出抓取工具强制将所有 URL 代理至 `jina.ai`，存在潜在隐私泄露风险。**修复状态**：暂无对应修复 PR。
   - [PR #3528](https://github.com/HKUDS/nanobot/pull/3528) 修复了 LLM 在生成工具调用时可能带入 Markdown 反引号导致的 URL 校验失败问题。**修复状态**：已提交修复 PR。
4. **⚠️ P2 - MSTeams 线程回复错位**：[Issue #3431](https://github.com/HKUDS/nanobot/issues/3431) 报告 Nightly 版本的 Teams 回复错用了 Bot Framework REST 目标。**修复状态**：用户已在本地验证并提供 commit，等待上游评审。
5. **⚠️ P2 - OpenAI Codex 超时**：[Issue #1783](https://github.com/HKUDS/nanobot/issues/1783) 指出硬编码的 60 秒超时导致长耗时代理任务失败。**修复状态**：Issue 已关闭（推测已在最新版优化）。

---

## 6. 功能请求与路线图信号

结合今日的 Issues 与 PR，以下功能需求极具潜力被纳入下个小版本：

- **更灵活的渠道状态提示配置**：[Issue #3452](https://github.com/Hkuds/nanobot/issues/3452) 希望单独配置各渠道的进度提示，该需求已被 [PR #3487](https://github.com/HKuds/nanobot/pull/3487) 完美实现并合并。
- **代理升级向导**：[PR #3539](https://github.com/Hkuds/nanobot/pull/3539) 提出了一种双技能升级系统，可根据用户工作区动态生成个性化的升级助手。
- **网关生命周期管理**：[PR #3538](https://github.com/HKUDS/nanobot/pull/3538) 为网关增加了 `start/stop/restart/status` 命令，补齐了单机部署运维的短板。
- **生态扩展探索**：
  - [Issue #3518](https://github.com/HKUDS/nanobot/issues/3518)：社区发起了对接小米大模型的呼吁。
  - [Issue #3512](https://github.com/HKUDS/nanobot/issues/3512)：第三方提议接入 SwarmScore（一种 AI 代理的可移植信任评分系统），为多代理协作提供信誉评估机制。

---

## 7. 用户反馈摘要

通过对 Issue 的文本语义分析，当前用户的真实体感如下：

- **痛点：本地模型易产生幻觉**：[Issue #1068](https://github.com/HKUDS/nanobot/issues/1068) 反映，本地部署的模型在经过一段时间运行后开始无法停止地调用工具（Hallucinating）。用户认为这是框架上下文管理或提示词控制存在盲区，而不仅是模型本身问题。
- **痛点：过度提问与能力边界不清晰**：[Issue #877](https://github.com/HKUDS/nanobot/issues/877) 指出 Nightly 版本存在“向用户提过多确认问题”以及“任务执行无能”的现象，这反映出框架在 Agent 自主判断与 Human-in-the-loop（人机回环）的平衡上仍需打磨。
- **满意点：极高的可玩性与发展潜力**：多位用户在反馈痛点的同时，都表达了对项目架构设计和未来潜力的强烈认可。

---

## 8. 待处理积压

以下重要 Issue 和 PR 长期悬而未决或处于 Open 状态，建议维护团队分拨精力跟进：

- **[PR #2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram 群组白名单与上下文修复**：该 PR 涉及复杂的回退机制和群策略 ACL 控制，已挂起超过 20 天，急需核心维护者进行架构评审。
- **[Issue #1068](https://github.com/HKUDS/nanobot/issues/1068) 本地模型无限调用工具死循环**：该问题自 2 月底提交至今未获有效解决，作为影响本地部署体验的严重阻碍，建议纳入高优排查列表。
- **[PR #3538](https://github.com/HKUDS/nanobot/pull/3538) Gateway 常驻进程命令支持**：今日新开的高价值 PR，目前待评审，合并后将极大简化生产环境的运维复杂度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-04-30)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 项目在过去 24 小时内保持了**极高的社区活跃度**，共产生 50 条 Issue 更新（新开/活跃 41 条，关闭 9 条）和 50 条 PR 更新（待合并 38 条，合并/关闭 12 条）。虽然今日**无新版本发布**，但社区正密集攻坚核心组件（TUI 渲染、网关平台适配、ACP 安全并发和 CI 稳定性）。当前待合并 PR 数量（38 条）较高，表明项目正处于一个功能密集开发与重构的冲刺期。总体而言，项目生态繁荣，但部分长期积压的 P1/P2 级 Bug 需要核心维护团队投入更多精力进行分流和合并。

---

## 2. 版本发布

**无新版本发布。** 
当前项目仍在积累大量的 Bug 修复与功能 PR，尚未达成版本发布的里程碑节点。

---

## 3. 项目进展

今日共有 12 个 PR 被合并或关闭，主要集中在**修复 CI 流水线、提升 TUI 稳定性和完善平台适配**：

- **CI 稳定性修复**：[#17618](https://github.com/NousResearch/hermes-agent/pull/17618) 修复了 `main` 分支长期存在的测试失败问题，重新导出了 WhatsApp 标识符，稳定了网关关机、Slack 路由等核心测试用例。此外，[#17642](https://github.com/NousResearch/hermes-agent/pull/17642)（待合并）一次性恢复了 38 个失败的测试，对项目健康度至关重要。
- **TUI 交互与渲染优化**：[#17638](https://github.com/NousResearch/hermes-agent/pull/17638) 修复了全局 `/details` 模式在 TUI 中的持久化问题；[#17627](https://github.com/NousResearch/hermes-agent/pull/17627) 和 [#17626](https://github.com/NousResearch/hermes-agent/pull/17626) 分别优化了跨平台的鼠标选中复制功能和提示符间隙渲染。
- **依赖与构建**：[#17644](https://github.com/NousResearch/hermes-agent/pull/17644) 修复了新增 `[google]` extra 后未更新 `uv.lock` 导致的干净构建失败问题。

---

## 4. 社区热点

今日社区讨论最热烈的话题集中在**性能优化、平台集成痛点和新功能探索**：

- 🔥 **工具调用性能优化** (👍 7)：[#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 提出两阶段“懒加载”工具模式，以解决每次 API 调用注入全量工具 Schema（消耗 3500-5000 tokens）导致的巨大 Token 开销问题。获得最多点赞，直击本地模型运行痛点。
- 💬 **跨设备统一迁移** (评论 5)：[#6078](https://github.com/NousResearch/hermes-agent/issues/6078) 讨论了提供“一键式”跨机器和操作系统环境迁移体验的必要性。
- 🌐 **平台集成 Bug 密集爆发**：
  - WhatsApp 提示逻辑冲突 (评论 3)：[#17641](https://github.com/NousResearch/hermes-agent/issues/17641) 指出系统提示不让用 Markdown，但底层代码会自动转换的矛盾。
  - TUI 中文渲染乱码 (评论 3)：[#17603](https://github.com/NousResearch/hermes-agent/issues/17603) 曝光了中文输出导致的字符散射和重影问题。
  - 自定义 Provider 路由错误 (评论 3)：[#6242](https://github.com/NousResearch/hermes-agent/issues/6242) 导致请求无法正确发送至指定模型。

---

## 5. Bug 与稳定性

今日报告了多个关键稳定性问题，按严重程度排列如下：

### P1 严重（影响核心功能与数据安全）
- **Patch 解析器致数据丢失**：[#6831](https://github.com/NousResearch/hermes-agent/issues/6831) 发现 V4A 补丁解析器存在 9 个子 Bug，可能导致文件被静默截断。
  - *状态*：已有相关修复 PR [#6662](https://github.com/NousResearch/hermes-agent/pull/6662) 待合并。
- **ACP 并发审批绕过风险**：[#15653](https://github.com/NousResearch/hermes-agent/pull/15653) 修复了进程级环境变量突变导致的并发会话绕过审批路由的安全漏洞。
  - *状态*：已提交修复 PR，使用 `contextvars` 替代。
- **工具调用参数损坏**：[#6841](https://github.com/NousResearch/hermes-agent/issues/6841) 中心验证器偶尔接收到格式错误的工具调用 Payload。

### P2 较高（影响特定平台或工具链）
- **Docker 沙箱环境变量丢失**：[#12534](https://github.com/NousResearch/hermes-agent/issues/12534) 导致依赖环境变量的 CLI 工具（如 `vercel`, `gh`）在沙箱内鉴权失败。
- **微信文件发送超时**：[#17595](https://github.com/NousResearch/hermes-agent/issues/17595) 异步任务超时导致微信端 Gateway 发送图片/文件失败。
- **飞书系统提示未读取 SOUL.md**：[#6731](https://github.com/NousResearch/hermes-agent/issues/6731) 导致机器人人格初始化异常。

---

## 6. 功能请求与路线图信号

从近期的 Feature Request 和活跃的 PR 中，可以观察到项目演进的几个明确信号：

- **多平台网关拓展**：新增 Nostr NIP-17 私信网关适配器（[PR #16769](https://github.com/NousResearch/hermes-agent/pull/16769)），表明项目正在积极拥抱去中心化通信协议。
- **CLI/UX 效率提升**：`/resume` 指令增强（[PR #17617](https://github.com/NousResearch/hermes-agent/pull/17617)）支持直接使用序号恢复会话；模型选择器重构（[PR #17634](https://github.com/NousResearch/hermes-agent/pull/17634)）增加模糊搜索，极大优化多模型切换体验。
- **外部记忆系统集成**：提议引入 `agentmemory` 作为记忆后端（[#6715](https://github.com/NousResearch/hermes-agent/issues/6715)），弥补 Hermes 在单代理长期记忆和多代理状态共享上的短板。
- **可观测性与审计**： HookBus Light 插件（[PR #17640](https://github.com/NousResearch/hermes-agent/pull/17640)）和结构化追踪（[#6741](https://github.com/NousResearch/hermes-agent/issues/6741)）显示项目正向企业级治理和审计合规迈进。

---

## 7. 用户反馈摘要

通过分析 Issue 提交内容，提炼出以下真实用户痛点和使用场景：

- **本地模型玩家备受 Token 消耗困扰**：本地运行模型（如 Ollama 等）的用户对系统 Prompt 携带的庞大工具库描述极为敏感，亟需“按需加载”机制（#6839）。
- **中国/日韩用户面临 TUI 渲染壁垒**：多用户反馈 TUI 界面无法正确处理 CJK 字符（#17603, #17602），严重影响非拉丁语系用户的终端体验。
- **定制化企业用户渴望开放记忆后端**：部分高级用户不满足于 SQLite 和文本记忆，希望对接向量数据库等高级记忆架构（#6715）。
- **自我托管与 Cron 调度冲突**：高级运维用户指出，通过系统 Cron 执行 `hermes update` 时，由于强制重启机制会直接杀死正在进行的工作流，缺乏优雅退出机制（#6702）。

---

## 8. 待处理积压

以下是高优先级且目前仍处于 `OPEN` 状态的重要条目，提请维护团队 (@NousResearch) 关注：

- **长期挂起的 P1 安全/稳定性 PR**：
  - [PR #6662](https://github.com/NousResearch/hermes-agent/pull/6662)：修复跨用户目录遍历导致的安全隐患。
  - [PR #6663](https://github.com/NousResearch/hermes-agent/pull/6663)：修复 Cron 作业丢失 `next_run_at` 导致的计划任务永久失效问题。
  - [PR #6668](https://github.com/NousResearch/hermes-agent/pull/6668)：修复浏览器工具引发的 CDP URL 密钥凭证泄露问题。
- **亟待响应的架构级 Bug**：
  - [Issue #7024](https://github.com/NousResearch/hermes-agent/issues/7024)：`SmartModelRouter` 缺失 `credential_pool` 导致廉价回退路由失效。
  - [Issue #6708](https://github.com/NousResearch/hermes-agent/issues/6708)：Discord 机器人无视频道历史上下文，每次 @ 提及均作为新会话处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
PicoClaw 项目在过去24小时内维持了**极高的社区活跃度与开发热度**。项目新增/活跃了 10 个 Issues 和 15 个待合并 PR，同时发布了最新的 `v0.2.7-nightly` 自动化构建版本。从提交方向来看，当前开发重心集中在**多通道支持（如 Slack、MQTT）**、**新型号提供商接入（如 DeepSeek v4、OpenVINO）**以及**企业通讯软件（飞书、钉钉）的稳定性修复**。整体而言，项目正处于快速吸收社区贡献、横向扩展生态边界的高速成长期。

---

## 2. 版本发布
- **[nightly] Nightly Build for v0.2.7-nightly.20260429.db1bc6a1**
  - **详情**：这是一个自动化发布的 Nightly 测试版本，包含了截至目前 main 分支上的所有最新代码。
  - **注意事项**：官方提示该版本为自动构建，可能存在不稳定性，建议谨慎用于生产环境。
  - **完整变更日志**：[v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

---

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，推进了项目的底层架构优化和错误修复：

- **前端与构建优化**：
  - PR [#2712](https://github.com/sipeed/picoclaw/pull/2712) / [#2711](https://github.com/sipeed/picoclaw/pull/2711) / [#2709](https://github.com/sipeed/picoclaw/pull/2709)：修复了在 HTTP（非安全上下文）环境中，前端复制按钮因 Clipboard API 不可用而报错的问题。现已采用优雅降级策略。
  - PR [#2700](https://github.com/sipeed/picoclaw/pull/2700)：修复了 `make docker-build` 失败的问题，补充了 `build:` 指令并修正了不存在的 Go 版本标签（golang:1.26.0 修正为 1.25），大幅提升了 Docker 部署体验。
- **架构演进准备**：
  - PR [#2710](https://github.com/sipeed/picoclaw/pull/2710)：增加了对自定义 OpenAI 兼容端点的 CLI 支持，并移除了 TUI 相关代码，标志着项目正在兑现废弃 TUI 的 RFC 提案。

---

## 4. 社区热点
今日社区讨论的焦点集中在**架构演进**与**多用户场景支持**上：

- **关于废弃 TUI 版本的 RFC (最受欢迎)**：Issue [#2208](https://github.com/sipeed/picoclaw/issues/2208) 获得了 8 个 👍。随着 WebUI 的成熟，维护 TUI 的成本过高。维护者已采纳该建议并在今日合并了移除 TUI 的 PR，体现了项目"说做就做"的高效执行力。
- **多用户群聊历史消息归属问题**：PR [#2715](https://github.com/sipeed/picoclaw/pull/2715) 及其前身 [#2714](https://github.com/sipeed/picoclaw/pull/2714) 引发了关注。当前在 Discord/Telegram/Slack 群组中，所有人共享一个对话历史，导致 AI 无法区分发言者。该 PR 旨在为消息增加发送者属性，是向"多 Agent/多用户"场景迈出的重要一步。

---

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分崩溃问题直接影响线上网关稳定性：

1. **[P0 严重] 钉钉 SDK 导致 Gateway 崩溃**：
   - **Issue**：[#2704](https://github.com/sipeed/picoclaw/issues/2704)
   - **描述**：`dingtalk-stream-sdk-go` 的并发 Bug 导致向已关闭的 channel 发送数据引发 Panic，直接致使网关异常停止。
   - **状态**：暂无针对性 Fix PR，需引起紧急关注。
2. **[P1 较高] DeepSeek v4 Thinking 兼容性缺陷**：
   - **Issue**：[#2706](https://github.com/sipeed/picoclaw/issues/2706) & [#2718](https://github.com/sipeed/picoclaw/issues/2718)
   - **描述**：DeepSeek 的 thinking mode 返回的 `reasoning_content` 未被 PicoClaw 保存和回传，导致 400 错误；同时非多模态模型遇到历史记录中的 `image_url` 会直接报错反序列化失败。
   - **Fix PR**：社区已迅速响应！[#2717](https://github.com/sipeed/picoclaw/pull/2717) 尝试拦截 `image_url` 错误，[#2707](https://github.com/sipeed/picoclaw/pull/2707) 尝试在 SQLite 中持久化 `reasoning_content`。
3. **[P1 较高] API 超时后 Session 上下文丢失**：
   - **Issue**：[#2621](https://github.com/sipeed/picoclaw/issues/2621)
   - **描述**：API 超时或报错后，系统未能恢复原始 Session，而是错误地创建了一个重复的默认 `main` Session。
4. **[P2 中等] exec 工具安全守卫误杀**：
   - **Issue**：[#1042](https://github.com/sipeed/picoclaw/issues/1042)
   - **描述**：开启工作目录限制后，`curl "wttr.in/Beijing?T"` 等不含路径操作的命令被正则误判为相对路径越界而拦截。

---

## 6. 功能请求与路线图信号
从今日的 PR 动向来看，PicoClaw 正在积极拓展其作为"泛终端 AI 智能体"的边界：

- **物联网与本地推理**：PR [#2705](https://github.com/sipeed/picoclaw/pull/2705) 增加了 **MQTT 通道支持**，PR [#2703](https://github.com/sipeed/picoclaw/pull/2703) 增加了 **Intel OpenVINO 本地推理支持**。结合之前在树莓派上运行的需求，表明项目在 IoT/边缘计算场景的渗透加深。
- **企业级集成能力**：PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) 支持 MCP 服务器动态 Header 转发，PR [#2719](https://github.com/sipeed/picoclaw/pull/2719) 新增 Slack Webhook 推送通道，显示了项目向企业内部工具集成的强大潜力。
- **多模态与异步能力**：PR [#2645](https://github.com/sipeed/picoclaw/pull/2645) 为 Bedrock 引入了实时 Token 流式传输，PR [#2624](https://github.com/sipeed/picoclaw/pull/2624) 加入了 OpenAI 兼容的 Embeddings 支持。

**预测**：Nightly 版本中暴露的 DeepSeek 兼容性修复及 OpenVINO/MQTT 支持，极有可能会被打包进即将发布的 `v0.2.7` 正式版中。

---

## 7. 用户反馈摘要
通过对 Issue 的提取，真实用户的典型痛点如下：
- **配置复杂性**：多凭证配置报错（[#2548](https://github.com/sipeed/picoclaw/issues/2548)）和缺乏 `.env` 文件支持（[#2623](https://github.com/sipeed/picoclaw/issues/2623)），表明用户希望能有更灵活、不容易出错的配置管理方式。
- **平台兼容性痛点**：树莓派默认 Arm64 架构缺少 WhatsApp 支持（[#2625](https://github.com/sipeed/picoclaw/issues/2625)）以及 Telegram 拒绝发送 SVG 文件（[#2716](https://github.com/sipeed/picoclaw/issues/2716)），反映出 PicoClaw 在跨平台媒体处理和编译打包策略上还有优化空间。
- **模型切换需求**：用户希望能更方便地接入各种订阅制模型（如 opencode 的 zen/go，[#2671](https://github.com/sipeed/picoclaw/issues/2671)）。

---

## 8. 待处理积压
以下重要 Issue/PR 处于待处理或停滞状态，需要核心团队关注：

- **通道架构重构重头戏**：PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) 旨在将"通道名称"与"提供商类型"解耦，以支持同一提供商的多实例运行。该 PR 已停留数日，属于底层核心逻辑变更，需慎重 Review。
- **Anthropic 缓存失效问题**：PR [#2192](https://github.com/sipeed/picoclaw/pull/2192) 指出 `anthropic_messages` 未能正确使用内容块缓存，导致请求成本增加。该 PR 已开启近一个月，建议尽快排期合并。
- **编译构建标签问题**：关于为树莓派默认开启 WhatsApp 支持的 Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625) 仍未有官方明确答复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-04-30 NanoClaw 项目动态日报：

# 📊 NanoClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
NanoClaw 项目在过去24小时内保持了**极高的开发活跃度**，共产生 50 条 PR 更新和 3 条 Issue 更新。项目当前的重心显然集中在底层架构的加固与多模型适配上，核心维护者（如 `andrebrov`）提交了大量针对容器运行时、数据库并发和上下文压缩机制的修复。目前待合并的 PR 高达 29 个，表明项目正处于密集的功能迭代与代码审查阶段。整体来看，项目健康度良好，社区不仅有新功能（如 Google Gemini 供应商支持）的注入，也有对稳定性（如 DB 锁、消息重发）的深度打磨。

## 2. 版本发布
**无新版本发布。** 考虑到当前有 29 个待合并 PR，预计项目正在为下一个重要的里程碑版本（可能包含多供应商支持和 v2 架构彻底稳定）做代码储备。

---

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，项目在**多模型支持、消息网关稳定性和容器隔离**方面取得了显著进展：

- **Agent 模型与网关稳定性大修**：核心开发者 `andrebrov` 推进了一系列关键修复，包括针对 Opus 4.7 强制固定思维显示模式（[#2132](https://github.com/qwibitai/nanoclaw/pull/2132)）、检测并清理纯思维结束轮次以防止死循环（[#2130](https://github.com/qwibitai/nanoclaw/pull/2130)）、以及按组覆盖模型环境变量（[#2129](https://github.com/qwibitai/nanoclaw/pull/2129)）。
- **底层消息与并发修复**：修复了 DB 写入的序列分配跨进程序列化问题（[#2125](https://github.com/qwibitai/nanoclaw/pull/2125)），引入了消息投递失败的指数退避机制（[#2126](https://github.com/qwibitai/nanoclaw/pull/2126)），并解决了代理调用 `send_message` 时导致的文本重复发送问题（[#2123](https://github.com/qwibitai/nanoclaw/pull/2123)）。
- **容错与降级**：合并了针对 v2 agent-runner 的快速失败机制（[#2121](https://github.com/qwibitai/nanoclaw/pull/2121)），确保必需的 MCP 远程服务器断开时不再静默失败。
- **外部贡献截断**：注意到关于集成 Google Gemini 供应商的 PR 经历了关闭（[#2135](https://github.com/qwibitai/nanoclaw/pull/2135)、[#2137](https://github.com/qwibitai/nanoclaw/pull/2137)）又重开（[#2136](https://github.com/qwibitai/nanoclaw/pull/2136)）的过程，说明社区对多模型接入有强烈诉求，且代码审查正在严谨进行。

---

## 4. 社区热点
今日的 Issue 和 PR 活动揭示了用户在**本地化部署**和**上下文窗口限制**方面的痛点：
- **上下文压缩争议**：Issue [#2109](https://github.com/qwibitai/nanoclaw/issues/2109) 和 Issue [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) 集中反映了用户对“上下文被过早压缩”的不满。用户使用支持 1M 上下文的 Opus 4.7 模型，却在 200k 时被强制压缩。背后的诉求是高级用户希望能够自定义或解除自动压缩的限制。
- **Mac 本地执行权限问题**：Issue [#2088](https://github.com/qwibitai/nanoclaw/issues/2088) 暴露了在 macOS 上以 `launchd` 守护进程运行 NanoClaw 时，缺乏 GUI 自动化权限导致 iMessage 外发消息静默失败的严重体验问题。

---

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕容器隔离边界和本地消息通道，部分已提交修复 PR：

1. **[高严重度] 跨进程 DB 写入导致序列号冲突**：SQLite 的 `writeMessageOut` 存在竞态条件。**已提 PR**：[#2125](https://github.com/qwibitai/nanoclaw/pull/2125)
2. **[高严重度] iMessage 本地模式外发静默失败**：Mac Mini 作为主机时，`launchd` 管理的 Node 进程无法获取 macOS Automation 权限，且日志无报错。**待修复**：[#2088](https://github.com/qwibitai/nanoclaw/issues/2088)
3. **[中严重度] 上下文环境变量被容器无条件覆盖**：`CLAUDE_CODE_AUTO_COMPACT_WINDOW` 的自定义配置被忽略。**已提 PR**：[#2138](https://github.com/qwibitai/nanoclaw/pull/2138) (已关联 Issue [#1820](https://github.com/qwibitai/nanoclaw/issues/1820))
4. **[中严重度] 线程化适配器 DM 路由错乱**：Discord 等渠道的 DM 会话复用了错误的线程。**已提 PR**：[#2093](https://github.com/qwibitai/nanoclaw/pull/2093)
5. **[低严重度] 大体积图片附件导致内存/存储激增**：手机端发送的图片未压缩直接 base64 序列化入库。**已提 PR**：[#2124](https://github.com/qwibitai/nanoclaw/pull/2124)

---

## 6. 功能请求与路线图信号
通过今日的开发轨迹，可以明确看到 NanoClaw 正在向**“多底层模型支持”**和**“企业级容错调度”**的路线图演进：
- **多模型供应商支持**：开发者 `farooqu` 提交了完整的 Google Gemini 接入方案（[#2136](https://github.com/qwibitai/nanoclaw/pull/2136)），这意味着 NanoClaw 将打破单一的 Claude 依赖，成为多 Agent 后端的聚合网关。
- **HTTP/SSE 模式的 MCP 支持**：PR [#2131](https://github.com/qwibitai/nanoclaw/pull/2131) 扩展了 MCP 配置 schema，允许接入远程 HTTP/SSE 服务器，这将极大增强工具链的扩展灵活度。
- **原生知识库构建**：PR [#2133](https://github.com/qwibitai/nanoclaw/pull/2133) 引入了 `knowledge/raw/` 目录用于各类文档的原生摄入，暗示项目即将引入“RAG / 知识库编译”的特有能力。

---

## 7. 用户反馈摘要
从 Issue 提炼的真实用户反馈表明，用户正在将 NanoClaw 应用于**复杂的长期运行任务**（如长时间的自动化运维、长文档处理），但遭遇了瓶颈：
- **不透明机制带来的挫折感**：用户更改了某些变量依然无法阻止上下文被压缩（[#2109](https://github.com/qwibitai/nanoclaw/issues/2109)），说明 NanoClaw 的覆盖优先级逻辑对用户而言过于隐蔽，未来需要更好的配置文档或可视化面板。
- **本地化部署的“隐形墙”**：熟练的 Mac 用户尝试将 NanoClaw 作为系统服务后台运行，却被 macOS 特有的权限模型阻断，且缺乏自检提示（[#2088](https://github.com/qwibitai/nanoclaw/issues/2088)）。

---

## 8. 待处理积压
当前有 **29 个 PR 处于待合并状态**，项目出现了轻微的审查积压。以下关键 PR 需要维护团队优先关注以推进版本迭代：
- **[核心架构]** `feat(providers): add Google Gemini provider support` ([#2136](https://github.com/qwibitai/nanoclaw/pull/2136)) - 该 PR 影响面广，需确认安全性与架构规范。
- **[核心架构]** `feat: support remote HTTP/SSE MCP servers` ([#2131](https://github.com/qwibitai/nanoclaw/pull/2131)) - 依赖该功能的第三方集成商正在等待合并。
- **[体验优化]** `fix(setup): include Apple Silicon + Colima env vars` ([#2134](https://github.com/qwibitai/nanoclaw/pull/2134)) - 解决了在 M 系列芯片上的部署痛点，建议尽快 merge 并 release。
- **[积压 Issue]** 关于 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 的问题 ([#1820](https://github.com/qwibitai/nanoclaw/issues/1820)) 虽然已关闭，但相关联的修复 PR ([#2138](https://github.com/qwibitai/nanoclaw/pull/2138)) 仍处于 Open 状态，需同步推进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度呈现**低位平稳**态势。项目今日无新代码合并（PR 更新为 0），也没有发布任何新版本，整体处于功能迭代间的沉淀期。Issue 板块保持轻度活跃，共有 2 条 Issue 更新（1 条新活跃，1 条顺利关闭），主要围绕核心功能在低资源设备上的可用性以及安全策略文档的完善。总体而言，项目目前无重大安全隐患或破坏性代码变动，代码库状态健康。

## 2. 版本发布
**无**
今日未发布任何新版本或补丁。

## 3. 项目进展
过去 24 小时内，项目未产生任何 Pull Request 的合并或关闭操作（PR 推进为 0）。尽管代码提交量暂时停滞，但维护者在 Issue 追踪方面保持了响应，表明项目仍在积极维护中，预计代码层面的更新将在后续恢复。

## 4. 社区热点
今日社区活跃度集中在对已有缺陷的讨论上，其中以下 Issue 引发了关注：

*   **[#871 [OPEN] [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support](https://github.com/nullclaw/nullclaw/issues/871)**
    *   **分析：** 该 Issue 于今日再次活跃并新增评论。这反映了 NullClaw 作为主打“轻量级、弱设备可用”的个人 AI 助手框架，其核心痛点目前正受到用户的挑战。用户（uMendex）指出，当前的 `web_search` 功能强制依赖外部 API Key（如 Brave Search），这与项目“开箱即用、低资源消耗”的初衷不符。社区正在积极探讨引入原生 DuckDuckGo 支持，以降低门槛，这极有可能是项目下一阶段需要重点解决的核心诉求。

## 5. Bug 与稳定性
今日有 1 例与核心功能相关的 Bug 反馈，暂无崩溃报告：

*   **[严重] #871 - `web_search` 在低资源设备上不可用 ([查看详情](https://github.com/nullclaw/nullclaw/issues/871))**
    *   **状态：** Open，目前尚无关联的 Fix PR。
    *   **详情：** 当前搜索引擎的集成方式（如依赖 Brave API）增加了运行开销和外部依赖，导致在廉价、低性能设备上失去实际可用性。这属于偏离项目核心定位的架构级体验缺陷。

## 6. 功能请求与路线图信号
虽然今日未直接增加新功能的 PR，但从 Issue 动态中可以提取出明确的项目演进信号：

*   **原生离线/轻量级搜索集成需求：** 源于 [#871](https://github.com/nullclaw/nullclaw/issues/871) 的讨论，支持无需 API Key 的 DuckDuckGo 直接解析或集成，极有可能会作为重要功能/修复被纳入下个小版本的迭代计划中。
*   **安全与权限控制完善：** 今日关闭的 [#874](https://github.com/nullclaw/nullclaw/issues/874) 表明项目正在持续打磨安全边界，后续版本可能会进一步补充 `default_allowed_commands` 等安全策略的默认配置，以提升个人助手运行时的系统安全性。

## 7. 用户反馈摘要
从今日的 Issue 记录中，可以提炼出以下真实用户画像与痛点：

*   **“边缘设备”用户群体的真实痛点：** 用户明确表示 NullClaw 的主要吸引力在于能在“weak, cheap, low-resource devices”（廉价低性能设备）上运行。任何强制需要外部付费 API 或消耗大量计算资源的模块，都会引发该核心受众群体的强烈反感。
*   **文档驱动型开发者体验：** 用户（Mental-Vortex）通过提交 [#874](https://github.com/nullclaw/nullclaw/issues/874) 展现了对安全策略细粒度控制的诉求，并直接定位到了源代码行。这表明部分高级用户正在尝试深度定制 NullClaw 的安全策略，相关文档（如 `policy.zig` 的说明）的滞后会直接影响这部分用户的体验。

## 8. 待处理积压
*   **[需关注] [#871 web_search 核心缺陷](https://github.com/nullclaw/nullclaw/issues/871)：** 该 Bug 被标记为 Critical 且涉及项目核心价值定位，目前已累积一定讨论。建议维护者尽快介入评估，明确是否接受 DuckDuckGo 原生支持的提案，或提供备选的轻量级搜索实现方案，以避免挫伤核心社区用户的积极性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🤖 IronClaw 项目动态日报 (2026-04-30)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日处于**极高活跃度**状态，核心开发团队与社区正全力推进代号为 **"Reborn"** 的底层架构重大重构。项目在过去 24 小时内更新了高达 **28 个 Issues** 和 **50 个 PRs**，并成功发布了 **v0.27.0** 正式版。从 Git 活动来看，当前项目重心明显分为两线：一方面在快速推进 Reborn 架构的各个核心组件（如 WASM 运行时、凭证注入、网络边界）的落地；另一方面，基于新版 v0.27.0 的 QA 测试也同步展开，暴露了若干前端交互和扩展配置相关的 P2 级 Bug。总体而言，项目处于“大版本发布后快速迭代+架构深度演进”的健康爆发期。

---

## 2. 版本发布

### 🚀 [ironclaw-v0.27.0](https://github.com/nearai/ironclaw/releases/tag/v0.27.0) (发布于 2026-04-29)

*   **更新亮点**：
    *   **Engine V2 能力词汇表**：为 V2 运行时契约添加了规范的能力状态词汇表，这意味着智能体在执行任务时的状态机定义变得更加严谨和标准化。
    *   **Action-vs-Capability 策略中心化**：重构了提示词、运行时、桥接投影和工具表面之间的动作与能力策略，将其集中管理。
*   **破坏性变更与迁移注意**：
    *   从 Release Notes 和 PR 走向来看，此次更新是对底层运行时契约（Contract）的进一步收紧。对于已经基于 Engine V1 或早期 V2 开发自定义工具/扩展的开发者，需密切关注 `Capability status` 的状态流转变化，建议查阅 PR [#2825](https://github.com/nearai/ironclaw/pull/2825) 评估是否影响现有的状态监听逻辑。

---

## 3. 项目进展

今日共有 **35 个 PR 被合并或关闭**，项目在基础设施和安全性构建上迈出了坚实的步伐。以下是核心进展：

*   **Reborn 安全与网络边界落地 ([PR #3077](https://github.com/nearai/ironclaw/pull/3077))**：合并了 `ironclaw_secrets` 和 `ironclaw_network` 两个核心 crate。引入了作用域密钥存储、一次性密钥租约以及 HTTP 出口防护（防 SSRF/DNS 重绑定），这为 Reborn 架构的生产级安全打下了地基。
*   **Reborn 运行时分发器就绪 ([PR #3023](https://github.com/nearai/ironclaw/pull/3023))**：合并了 `ironclaw_dispatcher`，带来了规范化的运行时适配器路由。
*   **信任感知授权模型合并 ([PR #3070](https://github.com/nearai/ironclaw/pull/3070), [#3072](https://github.com/nearai/ironclaw/pull/3072))**：将信任策略引入授权侧，完善了能力调度的鉴权闭环。
*   **架构演进探索与纠正**：值得关注的是，[PR #3096](https://github.com/nearai/ironclaw/pull/3096) (WASM 运行时) 在被误合并后已被迅速回滚，清理后的新版 [PR #3097](https://github.com/nearai/ironclaw/pull/3097) 已重新提交审查，体现了核心团队严谨的代码门禁管理。

---

## 4. 社区热点

今日讨论度最高的绝对焦点是 **Reborn 架构集成策略**。

*   **🔥 热议 Issue: [[EPIC] Track Reborn architecture landing strategy and grouped PR plan #2987](https://github.com/nearai/ironclaw/issues/2987)**
    *   **互动数据**：评论数高达 **38 条**（今日+7）。
    *   **背后诉求**：由于 Reborn 架构改动巨大，核心维护者与贡献者正在此 Epic 下激烈讨论如何安全地将数十个大型 PR 合入主干。这反映了项目在快速迭代与代码审查质量之间正在寻找最佳平衡，以防“巨大堆栈式 PR”压垮审查者。

---

## 5. Bug 与稳定性

随着 v0.27.0 的发布，QA 团队在 `hosted-staging` 环境下展开测试，报告了多个 P2 级前端稳定性问题。此外，系统的 Live Canary 测试失败频繁。

### 🐞 新增 Bug 报告
*   **[P2] 应用卡死：开启工具自动批准后 ([Issue #3082](https://github.com/nearai/ironclaw/issues/3082))**：用户在设置中开启 Auto Approvals 触发重启时，应用陷入 "Restarting IronClaw" 假死状态。*（目前尚未见修复 PR）*
*   **[P2] 用户管理防抖缺失导致重复创建 ([Issue #3083](https://github.com/nearai/ironclaw/issues/3083))**：由于缺少 Loading 状态，连续点击会导致创建重复用户。*（目前尚未见修复 PR）*
*   **[P2] 扩展 UI 误导性按钮 ([Issue #3081](https://github.com/nearai/ironclaw/issues/3081))**：无需配置的 Portfolio 扩展显示了无用的 "Configure" 按钮。

### 🚦 稳定性预警
今日自动化的 Live Canary 监控捕捉到了多起测试失败：
*   `public-smoke` 连续失败 ([#3075](https://github.com/nearai/ironclaw/issues/3075), [#3064](https://github.com/nearai/ironclaw/issues/3064))
*   `persona-rotating` 失败 ([#3074](https://github.com/nearai/ironclaw/issues/3074))
*   `private-oauth` 专属 runner 失败 ([#3052](https://github.com/nearai/ironclaw/issues/3052))
    *   *分析师建议*：Anthropic provider 相关的测试链路可能存在不稳定因素或 breaking change，需 SRE 团队介入排查。

---

## 6. 功能请求与路线图信号

今日的 Issue 列表犹如一份详尽的架构蓝图，透露出 IronClaw 极具野心的路线图信号：

1.  **独立二进制发布计划**：提出将 Reborn 作为单独的可执行文件 `ironclaw-reborn` 发布 ([Issue #3069](https://github.com/nearai/ironclaw/issues/3069))。这暗示项目未来可能会采取 V1/V2 双轨并行过渡的策略。
2.  **本地开发体验 (DX) 大幅优化**：提出增加本地开发者运行时预设 ([Issue #3044](https://github.com/nearai/ironclaw/issues/3044))，目标是让开发者在本地启动编码智能体时只需一行命令 `ironclaw dev`，免去繁琐的手动配置。
3.  **多模态支持呼声**：社区请求 Web Gateway 支持除图片外的 PDF、音频及文档附件 ([Issue #1341](https://github.com/nearai/ironclaw/issues/1341))，结合今日旨在持久化图像内联工件的 [PR #3065](https://github.com/nearai/ironclaw/pull/3065)，多模态处理能力的增强极有可能在近几个版本中落地。

---

## 7. 用户反馈摘要

从 Bug 报告和功能请求中提炼出当前用户/开发者的核心痛点：

*   **前端交互缺乏防抖与状态隔离**：用户在处理涉及“系统重启”或“网络请求”的操作时，极易因重复点击引发异常（如 #3083），UI 状态机在边界条件下的处理（如 #3082）仍需加强。
*   **扩展机制的黑盒感**：用户对扩展的能力边界存在困惑（如 #3081 中的 Configure 按钮），说明扩展与宿主之间的能力声明和 UI 渲染逻辑需要更加语义化。
*   **智能体可观测性差**：由于缺乏端到端的分布式追踪，开发者在排查跨越网关、编排器和工具执行链路的 Bug 时极其痛苦 ([Issue #233](https://github.com/nearai/ironclaw/issues/233))。

---

## 8. 待处理积压

以下重要 PR/Issue 已开启较长时间或停留在等待审查状态，需要维护者重点关注以保持社区贡献的热情：

*   **长期悬而未决的庞大 PRs**：
    *   [PR #1764 feat: Abound demo — Responses API, credential injection...](https://github.com/nearai/ironclaw/pull/1764)：由社区资深贡献者提交，涉及复杂的 API 修复与智能体技能集成，自 3 月底开启至今。
    *   [PR #1666 feat: wechat channel](https://github.com/nearai/ironclaw/pull/1666)：由社区贡献的完整的微信通道支持（包含 QR 登录、长轮询等），同样自 3 月底开启，是拓展生态的重要 PR。
*   **底层架构史诗卡**：
    *   [Issue #2987 Reborn 架构集成策略](https://github.com/nearai/ironclaw/issues/2987)：虽然活跃，但其包含的阻断性问题（如凭证注入保护 #3068）仍需持续跟进，避免阻塞后续 PR 的合入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-04-30)

> 分析师寄语：本期日报聚焦 LobsterAI（网易有道开源 AI 助手项目）的最新演进动态。从数据来看，项目正处于新版本发布后的稳定期，社区早期贡献的 PR 集中处于评审状态，整体健康度良好。

---

### 1. 📈 今日速览
过去 24 小时，LobsterAI 仓库整体活跃度呈现**平稳迭代**态势。项目于昨日顺利发布了 `2026.4.29` 新版本，主要整合了针对火山引擎和通义千问模型配置的修复，并去除了不准确的自重启提示。今日仅新增 1 个 Issue，主要涉及第三方 OAuth 认证的区域限制问题；PR 动态方面共有 28 条更新，其中 4 条为版本发布相关的准备和合并工作，其余 24 条均为社区早期提交的功能增强与修复 PR（处于待合并/评审状态）。整体而言，项目核心开发稳步推进，社区 PR 的消化与跟进是当前的演进重点。

---

### 2. 🚀 版本发布
项目今日正式发布了 **[LobsterAI 2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)** 版本。
本次更新主要聚焦于底层模型网关的配置优化与安装体验的改善，无破坏性变更。
**更新详情：**
*   **模型配置修复**：更新了火山引擎和通义千问的默认模型配置，确保用户开箱即用（由 @btc69m979y-dotcom 贡献）。
*   **状态提示优化**：移除了安装状态下不准确的“自动重启”提示，避免误导用户（由 @liuzhq1986 贡献）。

---

### 3. 🛠️ 项目进展
今日关闭的 4 个 PR 均为 `2026.4.29` 版本发布的前置工作，标志着项目在功能特性与文档规范上迈出了新的一步。主要推进包括：
*   **版本分支合并**：核心维护者 @liuzhq1986 提交并关闭了 [PR #1876](https://github.com/netease-youdao/LobsterAI/pull/1876)，将 `release/2026.04.27` 成功合入主线。该 PR 携带了大量新特性，包括：新增 ChatGPT OAuth 登录、支持小米 mimo/百度千帆 coding plan、升级有道笔记 skill，以及修复了网关因模型套餐列表更新导致的强制重启问题。
*   **文档规范化**：@liugang519 关闭了两个文档类 PR（[PR #1875](https://github.com/netease-youdao/LobsterAI/pull/1875) 与 [PR #1874](https://github.com/netease-youdao/LobsterAI/pull/1874)），新增了 specs README 并全面优化了 spec 文档结构，提升了开发者的阅读体验。
*   **UI 细节调优**：@fisherdaddy 提交的 [PR #1873](https://github.com/netease-youdao/LobsterAI/pull/1873) 已关闭，修复了设置页面协同启动文本框未能填充可用高度的问题。

---

### 4. 🔥 社区热点
今日社区虽无爆发式讨论，但多个月前提交的社区高质量 PR 再次活跃，反映出核心团队正在进行集中的代码评审。这些活跃 PR 透露出社区对**数据安全、长上下文处理和数据导出**的强烈诉求：
*   **长上下文“迷失”问题优化**：[@Aoxiang-001](https://github.com/netease-youdao/LobsterAI/pull/866) 提交的 PR 旨在实现上下文管理以缓解大模型在长对话中的 "Lost in the Middle"（中间内容遗忘）缺陷，这对 AI 助手的长期记忆能力至关重要。
*   **安全防御增强**：两个涉及底层安全的高质量 PR（[@swuzjs](https://github.com/netease-youdao/LobsterAI/pull/869) 与 [@darknesstm](https://github.com/netease-youdao/LobsterAI/pull/877)）均致力于为 `shell.openExternal` 添加 URL 协议白名单，防范潜在的 RCE（远程代码执行）风险。
*   **数据导出多样化**：[@kayo5994](https://github.com/netease-youdao/LobsterAI/pull/853) 提出增加 Markdown、JSON 等文本导出格式，以满足用户对会话数据进行二次处理的需求。

---

### 5. 🐛 Bug 与稳定性
今日新增的稳定性问题主要集中在认证网络层面，底层稳定性仍有待通过社区 PR 进一步夯实。
*   **【严重】认证区域限制阻断**：今日报告了 [#1877](https://github.com/netease-youdao/LobsterAI/issue/1877)（OpenAI 认证 403 报错）。用户在使用 ChatGPT 登录时遇到 `unsupported_country_region_territory` 错误，导致 Token 交换失败。虽然昨日刚合并了 ChatGPT OAuth 登录支持，但该网络环境限制问题可能严重影响部分地区用户的激活体验。*（当前状态：Open，暂无修复 PR）*
*   **【严重隐患】数据库非原子性写入**：尽管是历史 PR，[#863](https://github.com/netease-youdao/LobsterAI/pull/863) 指出的 SQLite 崩溃导致文件损坏风险仍需重视，建议团队优先合入该修复。
*   **【中等隐患】SSE 流解析崩溃**：[#860](https://github.com/netease-youdao/LobsterAI/pull/860) 指出 JSON 格式错误会导致 SSE 流式中断甚至应用崩溃，这也是影响日常聊天稳定性的关键瓶颈。

---

### 6. 🗺️ 功能请求与路线图信号
结合当前待合并的 PR，可以看出项目下一阶段的迭代重心可能集中在以下几个方面：
*   **MCP 协议扩展**：支持 HTTP Streaming（[PR #857](https://github.com/netease-youdao/LobsterAI/pull/857)），社区对 MCP 的接入需求十分迫切。
*   **UI/UX 个性化**：允许用户自定义主题强调色的功能（[PR #862](https://github.com/netease-youdao/LobsterAI/pull/862)）已在排队等候，这将极大提升产品的竞争力。
*   **会话分享体验升级**：带品牌化支持的消息勾选分享图片预览功能（[PR #880](https://github.com/netease-youdao/LobsterAI/pull/880)）有望成为市场营销与用户自发传播的利器。
*   **网关切换体验优化**：修复切换模型时引起网关遮罩卡顿的问题（[PR #864](https://github.com/netease-youdao/LobsterAI/pull/864)），表明项目正在精细打磨多模型无缝切换的体验。

---

### 7. 💬 用户反馈摘要
从最新的 Issue #1877 中可以提取出典型的用户环境反馈：
*   **核心痛点**：即使在本地客户端（如 Codex）配置了代理能够正常使用，LobsterAI 客户端在进行第三方 OAuth 网页认证时依然容易受到网络区域策略的拦截。未来可能需要考虑为认证流程提供全局代理转发支持，或优化原生 Token 填入的引导。

---

### 8. 📂 待处理积压 (Backlog 提醒)
当前有大量 3 月 25 日左右提交的高质量社区 PR 长期处于 `[stale]` 或挂起状态。这些 PR 覆盖了安全、性能、数据完整性等多个核心维度，建议维护团队投入精力进行集中清理或合入：
*   **安全漏洞相关**：防 RCE 漏洞的 URL 协议拦截（[#869](https://github.com/netease-youdao/LobsterAI/pull/869), [#877](https://github.com/netease-youdao/LobsterAI/pull/877)）。
*   **数据一致性相关**：事务保护修复（[#868](https://github.com/netease-youdao/LobsterAI/pull/868)），外键级联删除防止数据库膨胀（[#881](https://github.com/netease-youdao/LobsterAI/pull/881)）。
*   **并发竞态问题**：多端登录导致的积分刷新并发竞态修复（[#874](https://github.com/netease-youdao/LobsterAI/pull/874)）。

*数据来源：LobsterAI GitHub 开源看板 (2026-04-30 截止)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project daily report for Moltis based on the provided GitHub data.

---

# 📊 Moltis 项目动态日报 (2026-04-30)

## 1. 今日速览
Moltis 项目在过去24小时内保持着**极高的开发活跃度与社区热度**。项目单日处理了 12 个 PR（其中 7 个已合并/关闭）和 6 个 Issues（2 个已修复），合并的代码涵盖了底层沙箱安全隔离、通信集成和核心架构升级等关键领域。单日连续发布了两个稳定版本，且针对新引入的 Bug 社区表现出极高的响应速度（部分 Bug 在同日内即有修复 PR 提交）。整体来看，项目处于快速迭代的高健康状态。

## 2. 版本发布
今日迎来了两次版本发布，属于密集的持续交付节奏：
- **Release [20260429.02](https://github.com/moltis-org/moltis/releases/tag/20260429.02)**
- **Release [20260429.01](https://github.com/moltis-org/moltis/releases/tag/20260429.01)**
*注：Release notes 虽未列出详尽的 Changelog，但结合今日合并的 PR 与关闭的 Bug，推测这两个版本主要包含了针对 Docker 环境 Telegram 频道中断的修复，以及底层沙箱安全的重大更新。*

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，推动了多个核心功能里程碑的落地，使 Moltis 在安全性与多模态交互上迈进了一大步：
- **🛡️ 安全架构升级**：[#866 feat: Landlock FS isolation for restricted-host sandbox](https://github.com/moltis-org/moltis/pull/866) 被合并，引入了基于 Linux Landlock LSM 的内核级文件系统隔离机制。
- **⚡️ 智能体底层优化**：合并了 [#826 feat(compaction): wire summary_model config to auxiliary provider](https://github.com/moltis-org/moltis/pull/826)，优化了聊天的上下文压缩能力；同时 [#903] 被关闭并由更优的方案 [#921] 替代。
- **🌐 多生态集成与 UI 改进**：[#917 feat(import): add Claude Code and Hermes import to web UI](https://github.com/moltis-org/moltis/pull/917) 的合并，让用户可以无缝从其他主流 AI Agent 迁移数据。此外，[#876 feat(ui): file upload button for web chat sessions](https://github.com/moltis-org/moltis/pull/876) 的合并补齐了 Web UI 对标主流大模型厂商的文件上传体验。
- **🎤 语音身份支持**：[#916 feat(voice): add voice personas for deterministic TTS identity](https://github.com/moltis-org/moltis/pull/916) 被合并，为 TTS 引入了确定性的拟人化声纹身份。

## 4. 社区热点
今日社区的关注焦点集中在 **部署稳定性** 和 **前沿的 AI 智能体架构** 上：
- **🔥 Docker/Telegram 部署中断 ([#918](https://github.com/moltis-org/moltis/issues/918))**：该 Bug 获得了 **1 个赞同** 和 **3 条评论**，是今日受关注度最高的 Issue。大量通过 Docker 自部署的用户反馈升级到 `v20260428.03` 后 Telegram 功能失效，暴露出近期版本在容器化环境中的测试覆盖可能存在不足。
- **🔥 大量新奇 Slash 命令扩展 ([PR #926](https://github.com/moltis-org/moltis/pull/926))**：开发者 @penso 提交了引入 `/btw`, `/fast`, `/insights` 等五条快捷命令的 PR。这种不依赖持久化的轻量级上下文提问方式，引发了关于智能体会话交互模式的积极探讨。

## 5. Bug 与稳定性
今日报告了 4 个新 Bug，其中部分引起了开发者的高度重视并迅速响应：
- **[严重] 沙箱逃逸漏洞 ([#923](https://github.com/moltis-org/moltis/issues/923))**：沙箱命令可以直接在宿主机环境执行。**✅ 已有 Fix PR**：[PR #924](https://github.com/moltis-org/moltis/pull/924) 已提交修复并关闭，通过重构 `RestrictedHostSandbox` 阻断了未授权的访问。
- **[严重] Telegram 集成在 Docker 中失效 ([#918](https://github.com/moltis-org/moltis/issues/918))**：**✅ 已修复**。随着新版发布，此问题已被标记为 Closed。
- **[中等] Web UI 聊天滚动失效 ([#922](https://github.com/moltis-org/moltis/issues/922))**：用户在流式输出时无法向上滚动。**✅ 已有 Fix PR**：[PR #825](https://github.com/moltis-org/moltis/pull/825) 移除了过度干预的 `ResizeObserver`，正等待合并。
- **[中等] MCP 授权失效 ([#927](https://github.com/moltis-org/moltis/issues/927))**：MCP 页面缺少 OAuth Token 过期后的重新授权按钮，影响外部服务器连接。暂无修复 PR。
- **[低] 模型发现超时 ([#919](https://github.com/moltis-org/moltis/issues/919))**：模型加载在 30 秒时失败。暂无修复 PR。

## 6. 功能请求与路线图信号
从现有 Issue 和活跃的 PR 中，我们可以清晰看出 Moltis 接下来试图打造的 **“超级个人助手”** 路线图：
- **Web UI 的完全体**：[#906 [Feature]: Make sub-agents configurable in WebUI](https://github.com/moltis-org/moltis/issues/906) 提出在 UI 中可视化管理子智能体。这是目前功能增强中呼声较高的需求。
- **电话呼叫能力**：[PR #920 feat(telephony): add phone call support via Twilio](https://github.com/moltis-org/moltis/pull/920) 正在审查中。如果合并，Moltis 将跨越数字边界，具备直接拨打和接听电话的能力。
- **智能代码索引**：[PR #921 feat(code-index): auto-trigger indexing on project changes](https://github.com/moltis-org/moltis/pull/921) 提出基于文件监听的自动索引去重方案。这展现了 Moltis 在开发者辅助场景下对标并超越传统 IDE 插件的野心。

## 7. 用户反馈摘要
分析近期的 Issues 与 PR 摘要，用户的真实体验痛点主要集中在以下场景：
1. **自托管体验的脆弱性**：以 #918 为代表，大量重度用户选择 Docker 自部署+Telegram Bot 的模式作为私有化 AI 入口，版本迭代导致的突然中断极易引发负面反馈。
2. **复杂工作流的稳定性**：用户正在积极使用高度复杂的会话结构（如文件上传、上下文压缩、自动沙箱执行等），在处理长上下文流式传输时，UI 细节（如 #922 的滚动劫持）亟待打磨。
3. **多模态跨平台的统一**：引入 Hermes 导入、Twilio 电话通信和 Voice Personas，反映出用户不仅满足于文本交互，正迫切需要将 AI 无缝融入日常所有数字触点。

## 8. 待处理积压
当前项目的 Issue 周转率极高，但仍需维护者关注以下处于 `OPEN` 状态的潜在风险点：
- **[阻碍功能使用] MCP 重认证缺失 ([#927](https://github.com/moltis-org/moltis/issues/927))**：随着外部 API 安全策略收紧，无法重新授权 OAuth 将导致 Agent 能力降级，需优先排期。
- **[体验瑕疵] 模型发现超时 ([#919](https://github.com/moltis-org/moltis/issues/919))**：网络较慢环境下的用户会遇到卡脖子问题。
- **[架构期待] WebUI 子智能体配置 ([#906](https://github.com/moltis-org/moltis/issues/906))**：此项功能将极大影响复杂用户的项目管理体验，建议确认是否纳入近期的 Milestone。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于您提供的 GitHub 数据，为您生成的 2026-04-30 CoPaw (QwenPaw) 项目动态日报：

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-04-30)

## 1. 今日速览
过去24小时内，CoPaw (QwenPaw) 项目保持**高度活跃**状态。项目成功发布了包含重要 CJK 记忆检索功能的 **v1.1.5 新版本**。社区参与度显著提升，新增/活跃 Issues 达 17 条，且有高达 30 条的整体更新，表明用户正在密集测试新版本。此外，社区贡献势头强劲，过去 24 小时产生了 22 条 PR 更新（其中 10 条已顺利合并），内容重点聚焦于**企微/飞书渠道的稳定性修复、多智能体协同优化以及前端体验重构**。整体来看，项目处于快速迭代、功能横向扩展的健康阶段。

## 2. 版本发布
项目今日正式发布了 **v1.1.5** 版本，核心更新如下：
- **✨ 新增 CJK 感知记忆搜索**：记忆检索现在支持在保留拉丁文/数字序列的同时，对中日韩 (CJK) 查询进行字符级分词 ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))。这大幅提升了非英文语境下 Agent 的记忆召回准确度。
- **✨ 上下文压缩降级机制**：当基于 LLM 的上下文压缩失败或被禁用时，系统将引入新的降级策略，保障对话不会因此中断。

## 3. 项目进展
今日共有 10 个 PR 被合并/关闭，多集中于提升系统稳定性和修复前端体验，为 v1.1.5 的发布扫清了障碍：
- **控制台与前端体验修复**：合并了修复会话列表样式的 PR ([#3943](https://github.com/agentscope-ai/QwenPaw/pull/3943)) 和 Console/session 逻辑优化 ([#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934))。
- **智能体 Prompt 修复**：修复了 `rebuild_sys_prompt` 中的缩进 Bug，该问题曾导致非系统消息首句时更新提前退出循环 ([#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793))。
- **多模态消息架构合入**：支持图像和文件的多模态消息 API 架构已合入主分支，包含媒体类型自动检测和安全路径校验 ([#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509))。
- **QQ 渠道音频修复**：修复了 QQ 频道语音消息类型映射错误，并引入了平台侧 ASR 兜底逻辑 ([#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887), [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845))。
- **文档更新**：更新了 v1.1.5 的 Release Note ([#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918))，并在 Readme 中添加了插件系统的文档索引 ([#3946](https://github.com/agentscope-ai/QwenPaw/pull/3946))。

## 4. 社区热点
今日社区讨论最激烈的 Issue 主要围绕**多智能体隔离**和**外部渠道（飞书/企微）消息处理**展开：
1. **智能体隔离机制需求 ([#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936))**：作者 `WT-AHA` 提出当前智能体之间 workspace 可互读，存在越权风险，希望提供更精细的白名单隔离机制。该话题引发 8 条深入讨论。
2. **飞书文件发送限制 ([#981](https://github.com/agentscope-ai/QwenPaw/issues/981))**：飞书和QQ频道机器人无法回复发送文件的痛点（14 条评论），引起了大量用户的共鸣。
3. **Approve 操作交互优化 ([#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720))**：建议将 `/Approve` 命令转化为 UI 按钮的 Feature Request 获得支持（8 条评论，2 个 👍），体现了用户对自动化中断环节体验提升的渴望。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有社区 PR 响应修复。按严重程度排列如下：

🔴 **高危 / 核心逻辑受损**
- **严重安全漏洞：任意文件遍历 ([#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))**：用户发现 v1.1.5 版本中存在服务器任意文件遍历漏洞，可导致敏感数据泄露。*(暂无修复 PR，需官方紧急响应)*。
- **多智能体身份混淆 ([#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957))**：主控 Agent 接收其他 Agent 推送消息时，workspace 会被自动切换，导致“身份认知”错乱。
- **内存溢出漏洞 ([#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932))**：`read_file_safe` 将 1GB 的 `MAX_FILE_READ_BYTES` 作为字符读取上限，在低内存设备上直接触发 `MemoryError`。

🟡 **中危 / 渠道通讯与上下文损坏**
- **企微复杂请求回复丢失 ([#3947](https://github.com/agentscope-ai/QwenPaw/issues/3947))**：开启 `filter_thinking` 后，企微端长时间复杂任务只显示 "Thinking..."，最终回复被丢弃。*(已有针对性修复 PR [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950))*。
- **上下文同步竞态条件 ([#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893))**：高并发场景下，工具结果在下次 LLM 调用前丢失，导致陷入无限循环。
- **DeepSeek 思考模式 BadRequest ([#3949](https://github.com/agentscope-ai/QwenPaw/issues/3949))**：DeepSeek V4 开启思考模式后，`reasoning_content` 传递不当导致 400 报错。
- **BOOTSTRAP.md 循环重生 ([#3953](https://github.com/agentscope-ai/QwenPaw/issues/3953))**：初始化后的工作区每次启动都会强制重新生成 `BOOTSTRAP.md`。*(已提交修复 PR [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954))*。

🟢 **低危 / 前端与交互**
- **前端 Session 丢失 ([#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919))**：切换 Agent 后原任务中断，`lastChatIdByAgent` 未实现。*(已提交修复 PR [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958))*。
- **多标签页智能体状态互窜 ([#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935))**：浏览器多开控制台时，Session ID 和配置发生冲突共享。

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 走势，可以洞察出项目近期的演进方向：
- **多模态与视觉能力**：用户强烈要求支持独立视觉模型路由，以解决当前纯文本模型无法处理图像输入的阻断问题 ([#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940))。结合昨日合并的多模态支持 PR，完善视觉处理必定是下个小版本的重点。
- **全自动化的体验**：请求增加 LLM Model Auto Switch（模型自动切换/降级策略） ([#3956](https://github.com/agentscope-ai/QwenPaw/issues/3956))，以及支持为每个模型单独配置 `timeout` 和 `context_window_size` ([#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929))。
- **企业级渠道赋能**：近期密集的 PR ([#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941), [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948)) 表明，飞书卡片式交互审批和企微群聊隔离作用域即将落地。
- **跨平台桌面端重构**：基于 Tauri 2.x 的桌面端 App 支持已进入 Under Review 阶段 ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))，有望替代现有老旧架构。

## 7. 用户反馈摘要
透过数据，我们提取出目前真实用户的几个核心体验卡点：
1. **企业软件集成痛点深**：使用钉钉、企微、飞书的用户频繁遭遇消息去重失效 ([#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403))、突然失联 ([#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937)) 及文件发送受限的问题，说明将 CoPaw 作为内部工具稳定运行仍需打磨。
2. **多 Agent 编排心智负担重**：用户开始探索复杂的多智能体协同，但立刻遇到了权限互窜、Session 丢失等底层隔离问题。
3. **对本地化/私有化部署呼声高**：多位用户提问关于支持 `llama.cpp` 接入 ([#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920))、魔搭模型量化版下载失败 ([#3952](https://github.com/agentscope-ai/QwenPaw/issues/3952)) 以及离线版本可用性的问题，反映出 B 端和开发者对数据隐私不上云的强需求。

## 8. 待处理积压
- ⚠️ **安全漏洞亟待确认**：文件遍历漏洞 ([#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)) 关乎系统安全，虽然提交不到一天，但建议维护团队立即介入评估。
- 🛠️ **长期规划需求悬而未决**：包括早期提出的计划与任务监控功能 ([#600](https://github.com/agentscope-ai/QwenPaw/issues/600))、离线版本支持 ([#893](https://github.com/agentscope-ai/QwenPaw/issues/893)) 以及技能市场 Metadata 配置 ([#1226](https://github.com/agentscope-ai/QwenPaw/issues/1226)) 等，均未被官方明确排期，建议在近期的路线图中予以回应，以安抚早期贡献者。
- 🚀 **大型 Feature PR 审查阻塞**：目前存在多个待合并的大型 PR（如 Tauri 桌面端支持 [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 和 多智能体实时进度监控 [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889)），这些 PR 跨越数天仍未合并，可能需要更多的架构评审资源投入。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
ZeroClaw 在过去 24 小时内维持了极高的社区活跃度与开发者参与度。项目新增和活跃的 Issue 达到 29 个，同时高效关闭了 21 个历史问题，展现出良好的问题解决节奏。尽管今天没有发布新版本，且当前有 50 个待合并的 Pull Requests（无一被合并），但提交的代码涵盖了从核心架构优化、多渠道集成到 Web UI 大幅重构等多个关键领域。总体而言，项目正处于功能密集开发与旧账清理并行的健康快车道。

---

## 2. 版本发布
**无新版本发布**。项目当前仍停留在近期发布的稳定版，主分支正在密集积攒底层架构和 Web Dashboard 相关的重磅更新，预计将在下一版本迎来大规模功能迭代。

---

## 3. 项目进展
尽管今日没有 PR 被合并，但多个重磅 PR 正在积极 review 中，极大地推动了项目整体向前迈进：
- **Web 控制面板大幅增强**：由核心贡献者 `singlerider` 提交的一系列 PR 正在重构 Web 交互体验。包括：
  - PR [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)：通过 `/api/config/*` 实现了底层配置的细粒度 CRUD API，为 Web、CLI 和第三方工具提供了一致的配置驱动能力（*size: XL, risk: high*）。
  - PR [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220)：增加了聊天时的输入锁定、停止生成按钮和运行状态指示器，直击 UX 痛点。
  - PR [#6218](https://github.com/zeroclaw-labs/zeroclaw/pull/6218)：在默认模型下拉菜单中标记了 OpenRouter 的免费模型，降低了新用户的上手门槛。
- **底层通道与多模态能力修复**：
  - PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)：实现了 ACP 协议 v1，恢复了与外部工具的兼容性及回调机制。
  - PR [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183)：统一了代理与工具历史记录中的图像标记格式，完善了多模态处理流程。
  - PR [#6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184)：修复了 Discord 频道一直丢弃用户发送的图像附件的严重遗留问题。

---

## 4. 社区热点
今日社区讨论最密集的问题集中在**Token 消耗**、**跨平台功能对齐**及**本地模型支持**上：
- **[Feature]: Token consumption minimization via skill compilation** ([#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)，评论 6，👍 1)：用户指出每次调用工具（如查天气）都会发送完整的长篇 SKILL.md，导致极其严重的 Token 浪费。提议进行 Skill 编译优化。这反映了项目在企业级/高频调用场景下控制成本的迫切需求。
- **feat(telegram): voice message transcription support** ([#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)，评论 7，已关闭)：社区呼吁补齐 Telegram 频道的语音转文字功能（TypeScript 版已具备），暴露出多语言生态间功能同步的痛点。
- **Ollama provider sends tool_count=0** ([#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)，评论 5，👍 4，已关闭)：由于底层硬编码错误，导致 Ollama 本地模型的工具调用被完全阻断。此问题获得了极高的点赞数，说明本地模型部署者在 ZeroClaw 社区中占有相当大的比重。

---

## 5. Bug 与稳定性
今日报告的 Bug 多数与多通道部署（Telegram/Matrix/Slack）及安全/沙箱机制相关，部分严重问题已有对应修复 PR：

**高危 / 严重阻断性问题：**
- **Context spillage from chat to schedule** ([#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415))：Discord 中的聊天上下文泄漏到了定时任务中，导致任务执行被意外干扰（*S0 - 数据丢失/安全风险，暂无对应 PR*）。
- **Canvas tool fails in channel server** ([#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356))：通过 Telegram/Discord 调用 Canvas 工具时，帧画面永远无法推送到 WebSocket 客户端（*暂无对应 PR*）。

**中等 / 功能阻断性问题：**
- **autosaved Conversation memories invisible** ([#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550))：由于 `session_id` 不匹配，自动保存的记忆对 Agent 不可见。已有 PR [#6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) 从会话协调层尝试修复此问题。
- **Matrix: voice transcription failed** ([#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153))：Matrix 渠道语音转录失败，报错 `Unsupported audio format '.'`。
- **forbidden_path_argument blocks safe redirect targets** ([#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518))：安全策略过度拦截，误杀了 `2>/dev/null` 等合法且安全的重定向指令。

---

## 6. 功能请求与路线图信号
- **无需 LLM 的快捷指令**：Issue [#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503)（已关闭）提议为简单的确定性动作（如物联网控制）增加绕过 LLM 推理的快捷映射。这将大幅降低简单任务的端到端延迟（从 8 秒降至毫秒级），预计将显著提升智能体响应体验。
- **Cron 手动触发器**：Issue [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) 要求在 Web 界面增加定时任务的手动测试运行按钮，这对于开发者和运维人员调试 Prompt 变更至关重要。
- **更精细的工具权限控制**：Issue [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) 建议在 AgentConfig 中添加 `allowed_tools` 白名单配置，进一步增强了多 Agent 架构下的安全隔离能力。

---

## 7. 用户反馈摘要
- **本地与私有化部署是核心场景**：大量反馈围绕 Ollama、AWS Bedrock 错误配置（[Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289)）以及 Token 消耗优化展开，表明 ZeroClaw 深受重度私有化部署用户的青睐。
- **多端体验一致性有待提高**：用户反馈 Web 端与 IM 端（Telegram/Slack/Discord）在处理结果、多媒体支持和 Canvas 能力上存在较多割裂感（例如 [Issue #5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) 中 Telegram 返回了原始 JSON）。
- **UX 细节需要打磨**：Dashboard 配置文件编辑时光标错位（[Issue #6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)）以及排版截断（[Issue #6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225)）等前端问题给非技术用户带来了一定困扰。

---

## 8. 待处理积压
- **[Bug]: CPU spikes when typing into agent chat** ([#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125))：在 Ubuntu/Firefox 环境下，在 Agent 聊天框打字会导致多核 CPU 飙升，标记为 *S0 - 数据丢失/安全风险* 及 *status:in-progress*，但仍未彻底解决。
- **[Bug]: Multiple issues when running safely** ([#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470))：使用 GPT 5.4 时出现记忆疯狂重复保存和上下文丢失的问题，目前被标记为 *status:blocked*，等待社区提供复现步骤。
- **ACP Protocol v1 重构待合并**：PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) 是一个包含 51 个文件更改的 XL 级修复，已经 open 多日，需要 Maintainers 尽快推进 code review，以防后续产生严重的代码冲突。

</details>