# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-12 22:14 UTC

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

**OpenClaw 项目动态日报 — 2026-07-13**

### 1. 今日速览
过去 24 小时内，OpenClaw 仓库保持了极高的社区活跃度，新增和活跃的 Issues 达 297 条，关闭 203 条；PR 方面有 353 个处于活跃待处理状态，147 个被合并或关闭。尽管没有发布新的稳定版本，但维护者和贡献者正集中火力解决会话状态、网关稳定性以及跨平台兼容性等核心痛点。社区当前的注意力高度聚焦于内存泄漏修复、API 密钥安全隔离以及 LLM 长上下文中的工具失效问题，整体处于高强度迭代与稳定性打磨阶段。

### 2. 版本发布
**本日无新版本发布（0 个 Release）。** 项目当前仍在消化近期 2026.6.x 系列版本的反馈，集中精力修复 P0/P1 级别的 Bug。

### 3. 项目进展
今日共有 147 个 PR 被合并或关闭，整体进展集中在**网关生命周期管理、UI 测试稳定性提升以及外部渠道消息投递修复**上：
*   **网关与守护进程稳定性：** [PR #97285](https://github.com/openclaw/openclaw/pull/97285) 修复了 macOS 下用户误操作导致重复注册 LaunchAgent 引发的重启风暴；[PR #104492](https://github.com/openclaw/openclaw/pull/104492) 强化了崩溃循环恢复期间的通道重启所有权，防止健康监控错误清空重试进度。
*   **UI 与 CI 健康度：** 维护者 `steipete` 和 `vincentkoc` 关闭并清理了多个导致主分支 CI 变红的问题，包括修复终端生命周期等待超时（[PR #105714](https://github.com/openclaw/openclaw/pull/105714)）和清理冗余的 UI 导出代码（[PR #105713](https://github.com/openclaw/openclaw/pull/105713)）。
*   **外部渠道修复：** [PR #104690](https://github.com/openclaw/openclaw/pull/104690) 修复了 MS Teams 中删除应用后重新添加仍保留旧上下文的生命周期问题。

### 4. 社区热点
今日讨论度最高的议题揭示了用户在**跨平台客户端**和**长期记忆安全**方面的强烈需求：
*   **Linux/Windows 客户端呼声极高：** [Issue #75](https://github.com/openclaw/openclaw/issues/75) 获得了 110 条评论和 81 个点赞。用户强烈要求提供与 macOS 端功能对齐的 Linux 和 Windows 原生 Clawdbot 客户端应用。
*   **记忆安全与防投毒：** [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) 引发了关于 Agent 记忆来源信任标签的热议（16 评论）。用户希望通过标记机制防止网页抓取或第三方插件中的恶意指令污染 AI 的核心记忆上下文。
*   **密钥屏蔽机制：** [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) 建议实现 API Key 的掩码使用，确保 Agent 能调用服务但无法直接读取原始凭证，以此防御提示词注入窃取。

### 5. Bug 与稳定性
当前系统存在几个严重影响稳定性的 Bug，部分已有修复提案（PR）跟进：
*   **[P0 严重] 网关内存泄漏与 OOM 崩溃：** [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)。正常使用数天后，网关进程 RSS 内存从 350MB 暴增至 15.5GB，导致系统 OOM Kill。
*   **[P0 回归] CLI 启动预检损坏 SQLite：** [Issue #101290](https://github.com/openclaw/openclaw/issues/101290)。在网关运行期间执行健康检查命令可能导致状态数据库损坏（`database disk image is malformed`）。
*   **[P0 回归] 工具输出彻底失效：** [Issue #104721](https://github.com/openclaw/openclaw/issues/104721)。工具返回的文件内容等实际数据被错误替换为字面量 `(see attached image)`，导致 Agent 无法读取真实输出。目前已有针对相关现象的 PR [104703](https://github.com/openclaw/openclaw/pull/104703) 和 [96189](https://github.com/openclaw/openclaw/pull/96189) 正在处理消息丢失边界问题。
*   **[P1 崩溃] Windows ACPX 运行时故障：** [Issue #93465](https://github.com/openclaw/openclaw/issues/93465)。Windows 下无法正常 Spawn Claude 适配器（报错 `spawn EINVAL`）。

### 6. 功能请求与路线图信号
从近期 Open 的 Issues 和 PR 活动中，可以明确看到 OpenClaw 下一步的演进方向：
*   **模型调度与提供商解耦：** 动态发现 OpenRouter 模型（[Issue #10687](https://github.com/openclaw/openclaw/issues/10687)）、在上下文超限时自动触发回退模型（[Issue #9986](https://github.com/openclaw/openclaw/issues/9986)），以及验证回退链（[Issue #6599](https://github.com/openclaw/openclaw/issues/6599)）。PR [102002](https://github.com/openclaw/openclaw/pull/102002) 正在改进媒体图像描述的大小限制。
*   **执行安全与沙盒：** 支持 exec-approvals 的黑名单机制（[Issue #6615](https://github.com/openclaw/openclaw/issues/6615)）和文件系统沙盒配置（[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)）。
*   **防死循环与资源控制：** 社区强烈要求引入 `maxTurns` 硬性限制工具的迭代次数（[Issue #9912](https://github.com/openclaw/openclaw/issues/9912)）。维护者已在该方向推进，[PR #97485](https://github.com/openclaw/openclaw/pull/97485) 正在引入 Agent 循环安全预算机制。

### 7. 用户反馈摘要
从评论区的痛点提炼来看，用户反馈主要集中在以下几方面：
*   **长对话状态不可靠：** 在长时间/高负载工具调用（15+ 轮）后，参数会静默丢失（[Issue #53408](https://github.com/openclaw/openclaw/issues/53408)），且容易遇到上下文溢出强制重置（[Issue #63216](https://github.com/openclaw/openclaw/issues/63216)），打断了连贯的自动化工作流。
*   **自动化触发的多轮支持缺失：** Webhook 触发 Agent 时，指定一致的 `sessionKey` 仍会生成新会话，无法按预期进行多轮对话（[Issue #11665](https://github.com/openclaw/openclaw/issues/11665)）。
*   **模型提供商边界处理粗糙：** 例如 Anthropic Max 的系统级用量警告被当作普通助手回复直接发送到了聊天群组中（[Issue #59662](https://github.com/openclaw/openclaw/issues/59662)），造成严重的 UX 摩擦。

### 8. 待处理积压
以下高优先级或长期未解决的 Issue 需要核心团队的关注和分流：
*   **多轮对话与状态丢失：** [Issue #63216](https://github.com/openclaw/openclaw/issues/63216)（长期重置循环）、[Issue #65161](https://github.com/openclaw/openclaw/issues/65161)（Heartbeat 隔离模式死锁）处于 `stale` 状态，且都有 `clawsweeper:no-new-fix-pr` 标签，尚无明确修复方案。
*   **跨进程文件读取 Bug：** [Issue #71326](https://github.com/openclaw/openclaw/issues/71326) 提到 2026.4.20 版本引入了 dentry 缓存竞态条件，导致跨执行调用读取到旧文件，该问题同样处于过期未决状态，对自动化脚本准确性的破坏极大。

---

## 横向生态对比

# 2026-07-13 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“可用”向“高负荷下的稳健”跨越的深水区**。随着用户将智能体深度接入 IM 渠道并委以长周期工程任务，系统架构正面临长上下文管理、高并发状态机与跨平台网关稳定性的严峻考验。与此同时，**数据安全与执行隔离**（如 API 密钥屏蔽、容器沙箱、权限审批网关）已成为各核心项目布局的下一战。总体而言，生态正快速褪去早期的 demo 属性，向企业级合规、多模型解耦以及高频度自动化调度方向加速演进。

## 2. 各项目活跃度对比
*注：统计数据基于过去 24 小时各项目 GitHub 的 Issue 与 PR 活跃总数（新增+关闭/合并）。*

| 项目名称 | Issue 活跃数 | PR 活跃数 | 新版本发布 | 健康度评估 | 核心聚焦点 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | 297 | 353 | 0 | 🔴 高压检修 | P0级缺陷修复(内存泄漏/OOM)，会话状态维护 |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 优秀稳定 | 清理技术债务，多平台IM网关(企微/矩阵)对齐 |
| **IronClaw** | 9 | 50 | 0 | 🟢 核心驱动 | CI基建攻坚，底层并发修复，深度重构引擎 |
| **NanoClaw** | ~6 | 13 | 0 | 🟡 蓄势待发 | 容器隔离，企业级安全审计，重塑消息分发 |
| **ZeroClaw** | 45 | 48 | 0 | 🟡 冲刺期 | 记忆管线重构，人机协同审批，v0.8.3发布前阵痛 |
| **CoPaw** | 19 | 10 | 0 | 🟠 阵痛收敛 | v2.0.0架构升级引发的兼容性与API 400报错修复 |
| **NanoBot** | 4 | 5 | 0 | 🟢 健康迭代 | WebUI交互升级，本地模型集成痛点优化 |
| **PicoClaw** | 5 | 3 | 0 | 🟢 平稳扩展 | ARM架构边缘计算下沉，Token精细化统计 |
| **LobsterAI** | 1 | 1 | 0 | 🔵 平稳期 | 多Agent底层架构重构，数据物理隔离 |

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与流量集中地**，OpenClaw 拥有绝对领先的社区规模（单日近 650 项活跃议题），其一举一动牵动着整个生态的技术走向。
*   **优势**：社区基本盘极大，用户群体涵盖了从轻度 IM 接入者到重度工程自动化开发者。对前沿需求（如防提示词注入、跨平台客户端）的嗅觉最敏锐。
*   **技术路线差异**：相较于 NanoClaw 或 IronClaw 主动通过底层重构（如引入 Guard seam 权限守卫）来根治问题，OpenClaw 当前受制于严重的**历史包袱与 P0 级架构缺陷**（如网关内存泄漏增至 15.5GB、长上下文工具失效、SQLite 锁损坏），目前处于被 Bug 牵着鼻子走的高压灭火阶段。
*   **对比小结**：OpenClaw 是生态的需求风向标，但若不能尽快通过类似 Hermes Agent 的大规模清理或 ZeroClaw 的架构重构来稳住底层基座，其社区口碑容易受到冲击。

## 4. 共同关注的技术方向
分析各项目动态，以下四大技术共识正在生态内汇聚：
1.  **上下文治理与长对话容灾**：Agent 在长流程任务中的“失忆”和“崩溃”是最大痛点。
    *   *OpenClaw* 紧急修复工具输出被错误替换为 `(see attached image)` 以及参数静默丢失；
    *   *CoPaw* 和 *Hermes Agent* 均在攻坚上下文压缩（Compress）带来的 API 400 报错与孤儿消息；
    *   *ZeroClaw* 和 *NanoClaw* 则在突破系统预设的 Token 输出限制（如突破 32k 上限）。
2.  **权限沙箱与执行安全**：对 Agent 执行高阶动作（如 Shell、文件写入）的安全审查成为刚需。
    *   *NanoClaw* 推进 Guard seam 特权操作拦截；
    *   *ZeroClaw* 构建人机协同审批网关（HITL）；
    *   *OpenClaw* 和 *CoPaw* 均在探索 API 密钥掩码与沙盒文件系统配置。
3.  **IM 网关高可用与一致性**：多平台接入的脆弱性受到重点关注。
    *   *Hermes Agent* 修复了 WhatsApp、企微、飞书的断连与消息路由错误；*NanoClaw* 修复了 WhatsApp 容器静默断连；*OpenClaw* 和 *PicoClaw* 在修复 MS Teams 与 Matrix 长轮询重连逻辑。
4.  **记忆模块的安全隔离**：防止恶意指令污染记忆池。
    *   *ZeroClaw* 落地跨会话全局记忆语义召回与安全扫描；*OpenClaw* 提出记忆来源信任标签机制。

## 5. 差异化定位分析
*   **OpenClaw / ZeroClaw**：定位为**通用全能型超级 Agent 基座**。功能大而全，致力于将大模型无缝接入任何工作流，但面临系统臃肿的挑战。
*   **IronClaw / NanoClaw**：定位偏向**开发者工程级与高安全合规副驾**。重点发力容器级隔离、CLI 交互审批、可观测性与底层的 CI 稳定性，更受 B2B 或极客群体青睐。
*   **PicoClaw**：定位精准锁定**边缘计算与 IoT 私人助理**。抢先支持 ARMv7、树莓派等低功耗设备，对本地 Token 统计等微观性能极度敏感。
*   **NanoBot / CoPaw / LobsterAI**：定位侧重于**消费级多端控制台与轻量协同**。围绕 WebUI/移动端发力，致力于降低配置门槛，重点优化 Webhook 和轻量级 IM 渠道集成。

## 6. 社区热度与成熟度分层
*   **高热度-重构洗牌期（以 OpenClaw, CoPaw 为代表）**：社区声量极高，但由于近期大版本（如 CoPaw v2.0.0）或底层架构变动，正经历明显阵痛，大量精力消耗在向后兼容性和阻断性 Bug 修复上。
*   **中热度-稳健收敛期（以 Hermes Agent, IronClaw 为代表）**：项目相对成熟，当前重心在于消灭技术债务（如 IronClaw 攻坚 CI 脆弱性，Hermes 清理配置静默丢弃），代码质量稳步提升。
*   **潜力型-垂直突破期（以 NanoClaw, ZeroClaw 为代表）**：活跃度适中，但重量级 PR 密集（涉及记忆管线、审批代理等），正在为下一个具备里程碑意义的大版本蓄力。

## 7. 值得关注的趋势信号
1.  **安全防御战从“外围”走向“内核”**：社区开始集体摒弃“完全信任 LLM 输出”的假设。对 API Key 的掩码处理（防泄露）、Agent 执行次数硬性限制（防死循环 `maxTurns`）、以及跨边界特权操作的审计拦截，标志着 Agent 架构在向**零信任模型**靠拢。
2.  **“产品化”门槛的大幅降低**：多个项目（如 NanoBot, Hermes Agent）正在将繁琐的 API 配置转变为带二维码交接的引导式 WebUI 设置。降低接入门槛，吸引非极客的非技术用户，是扩大开源份额的必经之路。
3.  **本地算力与边缘部署的觉醒**：无论是 NanoBot 对 Ollama 前缀缓存被破坏的愤怒，还是 PicoClaw 下沉至玩客云的尝试，均反映出部分用户对数据隐私绝对掌控的诉求。这要求未来的 Agent 必须在与本地大模型通信时做到“协议纯净、零干扰”。
4.  **模型提供商的深度解耦**：系统级提示词滥用（如 Hermes 的品牌声明问题）、第三方模型 API 路由失效频发。开发者应重视模型调度的中间层设计，确保系统提示词的精简以及针对 OpenAI、Anthropic、GLM 等不同格式的无缝自适应适配。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-07-13  
**项目仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
在过去 24 小时内，NanoBot 项目保持了高度活跃的开发与维护节奏，共处理了 4 个 Issues（3 个新开，1 个关闭）和 5 个 PR（4 个待合并，1 个关闭）。项目当前的重心集中在 **WebUI 交互体验升级、底层安全访问控制** 以及 **近期版本重构引发的回归问题修复**。社区方面，开发者针对本地大模型（如 Ollama）的集成痛点表现出较高关注，多位核心贡献者持续输出高质量代码，项目整体处于健康、快速迭代的状态。

### 2. 版本发布
**无新版本发布。** （当前项目仍在整合核心功能与修复回归 Bug，预计正在为下一个大版本或稳定版积蓄能量。）

### 3. 项目进展
今日项目虽然没有合并新的 PR，但关闭并推进了多个关键领域的改进，整体在安全性和易用性上迈出了重要一步：

*   **WebUI 安全访问控制强化**：核心成员 `Re-bin` 关闭了高优先级安全修复 PR [#4892](https://github.com/HKUDS/nanobot/pull/4892)。该 PR 收紧了远程 WebUI 会话的权限降级策略，将项目变更和权限提升限制在 localhost 和本地原生客户端中，大幅提升了远程访问时的安全性。
*   **WebUI 引导式设置流程**：PR [#4855](https://github.com/HKUDS/nanobot/pull/4855) 持续推进，添加了产品化的 Channel 设置流程（带验证、二维码交接、更安全的密钥处理）以及飞书（Feishu）助手实例支持。这将极大降低新用户的接入门槛。
*   **语音转写 API 修复**：开发者 `217th` 提交了针对语音转写提供商环境变量解析的修复 PR [#4895](https://github.com/HKUDS/nanobot/pull/4895)，改进了 API Key 占位符的处理逻辑。

### 4. 社区热点
今日讨论最热的议题是关于 **本地模型（Ollama）的缓存与性能优化**：
*   **[enhancement] Ollama 缓存破坏导致严重延迟** ([Issue #4867](https://github.com/HKUDS/nanobot/issues/4867))：该 Issue 已于今日关闭。用户 `The-Markitecht` 反映 NanoBot 在处理 prompt 时破坏了精确的前缀，导致 Ollama 本地模型（在 32GB VRAM 下）每轮对话额外增加约 60 秒的延迟，几乎不可用。这反映了深度本地模型玩家对 **Prompt 纯净度及底层推理优化** 的强烈诉求。

### 5. Bug 与稳定性
今日报告了数个关键 Bug，部分已被近期代码重构引发的回归问题，按严重程度排列如下：

*   **🔴 [P1] 心跳任务只报告不执行（回归 Bug）**：PR [#4896](https://github.com/HKUDS/nanobot/pull/4896) 指出，自 `v0.2.1` 将 heartbeat 从服务重构为 cron 作业后，Prompt 未同步更新，导致 Agent 只列出任务而不执行。**（已有 fix PR，亟待合并）**
*   **🔴 [P1/Bug] Discord 机器人集成失效**：[Issue #4897](https://github.com/HKUDS/nanobot/issues/4897) 报告 Discord 插件能上线但无法收发消息。**（暂无 fix PR）**
*   **🟠 [Bug] /dream-log 混入非 Dream 提交**：[Issue #4893](https://github.com/HKUDS/nanobot/issues/4893) 指出由于未过滤 Git 提交记录，导致日志混乱。**（暂无 fix PR）**
*   **🟠 [Bug] Dream 会话清理机制失效**：[Issue #4894](https://github.com/HKUDS/nanobot/issues/4894) 指出 `prune_dream_sessions()` 仍使用旧的 glob 模式，无法清理 base64 编码的新版文件名。**（暂无 fix PR）**

### 6. 功能请求与路线图信号
从近期的动态中，可以清晰捕捉到项目接下来的**路线图信号**：
1.  **全面 WebUI 化与降低门槛**：PR [#4855](https://github.com/HKUDS/nanobot/pull/4855) 中的引导式设置和二维码扫码接入，表明项目正努力从纯极客命令行工具向“产品化”的个人 AI 助手控制台转型。
2.  **生态集成扩展**：Discord ([Issue #4897](https://github.com/HKUDS/nanobot/issues/4897)) 与 飞书 的集成活跃，表明跨平台 IM 网关接入是当前重要方向。
3.  **天气技能库完善**：PR [#4145](https://github.com/HKUDS/nanobot/pull/4145) 提交了完整的天气技能（Skill）及测试用例，预示着项目正在建立标准化的 Skill 市场或示例库。

### 7. 用户反馈摘要
基于 Issue 评论的提炼，当前真实用户的痛点与反馈如下：
*   **痛点 1：本地算力用户的性能焦虑**。使用 Ollama 等本地部署的用户对网络请求、Prompt 结构变动引发的重计算时间极度敏感，他们期望 AI 助手能做到“轻量级、不干预底层推理逻辑”。
*   **痛点 2：多平台网关配置的脆弱性**。用户尝试将 NanoBot 接入 Discord 等平台时，经常遭遇“看似在线但无法通信”的黑盒状态，缺乏明显的错误日志提示。
*   **满意点**：社区对 NanoBot 的 `Dream` 会话机制（上下文记忆与快照管理）使用频率较高，但也暴露出在文件系统底层（如 Base64 编码、Git 同步）需要更健壮的工程级打磨。

### 8. 待处理积压
请维护团队关注以下积压或跟进事项：
*   **长期功能 PR 待 Review**：PR [#4145](https://github.com/HKUDS/nanobot/pull/4145)（天气技能支持）自 6 月 1 日开启至今已有月余，包含完整的代码和测试，需要核心团队进行 Review 并推进合并。
*   **近期 P1 级修复急需合并**：PR [#4896](https://github.com/HKUDS/nanobot/pull/4896) 修复了会导致 Agent 停止运作的心跳回归 Bug，建议尽快验证并入主分支。
*   **底层架构变动引发的连锁反应**：近期针对文件存储格式（如 Dream session 的 base64 编码改动）导致了清理脚本和日志过滤接连失效，建议维护者在修改底层文件命名规范时，同步全局排查相关的 I/O 处理代码。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project daily report for Hermes Agent based on the GitHub data provided.

---

# 📊 Hermes Agent 项目动态日报 (2026-07-13)

### 1. 今日速览
Hermes Agent 项目在过去 24 小时内展现了**极高的维护与迭代效率**。项目处理了多达 50 个 Issue 更新（关闭 38 个）和 50 个 PR 更新（合并/关闭 8 个），整体活跃度处于顶尖开源 AI 项目水平。今日虽然无新版本发布，但开发团队集中清理了大量历史遗留问题（主要集中在 4 月底至 5 月初创建的 Issue），涉及网关平台、UI/TUI、配置解析等核心模块。目前仍有 42 个 PR 处于待合并状态，社区贡献热情高涨，项目健康度维持在优秀水平。

### 2. 版本发布
**本日无新版本发布。** (当前最新版本仍应为数据中提及的 `v0.12.0`)

### 3. 项目进展
今日项目整体向前迈进了坚实的一步，核心进展集中在系统稳定性与多平台网关适配上：
*   **UI/TUI 渲染与通信修复：** 修复了虚拟列表渲染高度计算偏移的问题 ([PR #19948](https://github.com/NousResearch/hermes-agent/pull/19948))，并解决了 FastAPI 0.136 版本导致的 WebSocket 握手挂起致命 Bug ([PR #19938](https://github.com/NousResearch/hermes-agent/pull/19938))。
*   **网关跨平台功能对齐：** 为 macOS 环境增加了 launchd 服务的重启检测 ([PR #19940](https://github.com/NousResearch/hermes-agent/pull/19940))；修复了企业微信/WeCom 非数字环境变量导致的崩溃问题 ([PR #19901](https://github.com/NousResearch/hermes-agent/pull/19901))；修复了矩阵 定时任务定向投递能力缺失 ([PR #19900](https://github.com/NousResearch/hermes-agent/pull/19900))。
*   **模型与辅助任务兼容性：** 修复了自定义提供商在网关中 `/model` 切换失败的问题 ([PR #19904](https://github.com/NousResearch/hermes-agent/pull/19904))，以及智谱 GLM/Z.AI 辅助任务 base_url 覆盖导致的凭证路由失效 ([PR #19923](https://github.com/NousResearch/hermes-agent/pull/19923))。

### 4. 社区热点
今日社区讨论最热烈的焦点是**仪表板的视觉体验**与**Windows 环境的适配盲区**。
*   **仪表板主题可读性极差 ([Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080))**：获得了 28 条评论和 50 个 👍。用户 (`ogermer`) 犟批当前主题（如 Midnight, Cyberpunk）字体选择非标准，衬线体过细、对比度低，严重影响使用体验。此痛点已得到回应并标记为已实现修复。
*   **WhatsApp 群组消息路由错误 ([Issue #18646](https://github.com/NousResearch/hermes-agent/issues/18646))**：`send_message` 方法无视群组目标，错误地将消息发送至个人主页频道，严重阻碍了基于 WhatsApp 群的自动化工作流。
*   **Windows 原生环境文件与终端工具失效 ([Issue #17999](https://github.com/NousResearch/hermes-agent/issues/17999) / [Issue #18454](https://github.com/NousResearch/hermes-agent/issues/18454))**：Windows 系统下读取 `D:` 盘等本地文件报错 "File not found"，且终端工具始终返回 `exit_code 126`（根因是没有安装 Git for Windows）。这表明项目在非 Unix 开发者中的基础体验仍需加强。

### 5. Bug 与稳定性
根据今日处理和暴露的问题，按严重程度 ($P2$) 汇总如下：

*   🔴 **非默认配置文件更新引发崩溃 ([Issue #56717](https://github.com/NousResearch/hermes-agent/issues/56717) - 开放中)**：严重阻碍升级。非默认 profile (`bruce`) 在执行 `hermes update` 后保留了过时代码，导致运行时抛出 `ImportError: cannot import name 'is_output_cap_error'`。
*   🔴 **Session 压缩丢失 Goal 状态 ([Issue #18467](https://github.com/NousResearch/hermes-agent/issues/18467) - 已修复)**：执行 `/compress` 时静默终止了 `/goal` 循环，判定器失效且无任何提示。
*   🟠 **思考模型泄露 Reasoning Tokens ([Issue #18529](https://github.com/NousResearch/hermes-agent/issues/18529) - 已修复)**：当使用具备思考能力的模型（如 MiniMax-M2.7, DeepSeek-R1）生成会话标题时，内部 `<thinking>` 标签内容被泄露到用户可见的标题中。
*   🟠 **Daytona 持久化沙箱安全隐患 ([Issue #63361](https://github.com/NousResearch/hermes-agent/issues/63361) - 开放中)**：沙箱恢复时仅凭名称匹配而无镜像校验，且 `cleanup()` 缺乏强制移除参数，存在环境不一致风险。

### 6. 功能请求与路线图信号
从活跃的 PR 中，我们可以窥探出项目近期的演进路线：
*   **可观测性与分析洞察**：[PR #19909](https://github.com/NousResearch/hermes-agent/pull/19909) 引入了 `hermes insights --qualitative`，基于历史会话进行摩擦力/工作流回顾，增强 Agent 自省能力。
*   **长文本自动拆分机制标准化**：[Issue #19676](https://github.com/NousResearch/hermes-agent/issues/19676) 请求飞书 适配类似微信的长消息拆分功能。社区正致力于将这种「内容打包分发」能力标准化到更多 IM 平台。
*   **插件系统鲁棒性提升**：一组 PR（如 [PR #19917](https://github.com/NousResearch/hermes-agent/pull/19917), [PR #19920](https://github.com/NousResearch/hermes-agent/pull/19920), [PR #19921](https://github.com/NousResearch/hermes-agent/pull/19921)）致力于消灭代码中静默吞掉异常的坏味道，转而提供明确的日志记录，这将极大提升用户排查插件配置错误时的体验。

### 7. 用户反馈摘要
通过分析今日大量关闭的 Issue，提炼出用户真实使用场景中的核心痛点：
1.  **IM 平台的控制权争夺**：用户大量将 Hermes 接入微信、WhatsApp、飞书、企业微信等。痛点在于：机器人在群里**如何保持静默** ([Issue #18848](https://github.com/NousResearch/hermes-agent/issues/18848))，以及如何**安全跨平台/跨终端续接 Session** ([Issue #18457](https://github.com/NousResearch/hermes-agent/issues/18457))。
2.  **沙箱环境隔离诉求**：开发者群体高度依赖 Daytona 等安全沙箱执行终端命令，说明 Hermes 被广泛应用于高风险（如自动写代码、执行脚本）的自治任务中。
3.  **第三方 API 滥用预警**：有趣的是，有用户反馈 Hermes 向 Anthropic API 请求时带有**过多的系统级品牌声明** ([Issue #19046](https://github.com/NousResearch/hermes-agent/issues/19046)），导致被识别为第三方套壳应用而受限，反映出社区对提供商兼容性极其敏感。

### 8. 待处理积压
请维护团队重点关注以下尚未关闭但影响较大的积压项：
*   **多 Profile 升级历史包袱**：[Issue #54926](https://github.com/NousResearch/hermes-agent/issues/54926) 指出 `hermes update` 仅迁移当前 Profile 配置，遗留的废弃工具集未清理。随着版本迭代，这将成为用户升级的**重大隐患**。
*   **配置文件解析的容错性**：目前仍有多个关于自定义 Provider 解析失败导致静默丢弃的 PR 处于 Open 状态（如 [PR #19862](https://github.com/NousResearch/hermes-agent/pull/19862)），建议统一进行代码审查并合并，以稳固配置加载层。
*   **沙箱生命周期管理**：[Issue #63361](https://github.com/NousResearch/hermes-agent/issues/63361) 涉及 Daytona 的强制销毁与镜像校验逻辑，涉及到系统底层安全，建议尽快排期跟进。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这份报告为您梳理了 2026 年 7 月 13 日 PicoClaw 项目的核心动态。从数据来看，项目目前处于**活跃维护状态**，开发者社区与官方维护者均表现出较高的参与度，特别是在扩充模型兼容性、优化边缘设备部署方面取得了实质性进展。

以下是详细的项目动态日报：

### 1. 今日速览
* PicoClaw 项目在过去 24 小时内保持高度活跃，共产生 5 条 Issue 更新（3 新增/活跃，2 关闭）与 3 条 PR 更新（1 待合并，2 关闭）。
* 项目代码库迎来了实质性的功能增强，成功合并了技能开关状态控制与 ARMv7 架构 Docker 部署支持，展现出维护者对 UI 交互体验与边缘计算场景的重视。
* 社区反馈的焦点集中在特定大模型 API（如 Anthropic）的精细化支持，以及网络底层健壮性（如 Matrix 同步断线问题）。
* 整体来看，项目正处于快速迭代与缺陷修复的并行阶段，社区贡献率较高，项目健康度良好。

### 2. 版本发布
* 过去 24 小时内无新版本发布。

### 3. 项目进展
今日项目成功关闭了 2 个重要的 PR，在交互体验与生态兼容性上迈出了一大步：
* **技能交互与任务调度优化已合并**：PR [#3249](https://github.com/sipeed/picoclaw/pull/3249) (Skill enable/disable state + cron RunNow) 已合并。该 PR 引入了 UI 层面的 Skill 启用/禁用开关，并支持暂停 cron 定时任务。它巧妙利用了 `.skills-state.json` 的 `mtime` 属性来触发 Prompt Cache 的失效，无需重启服务即可在下一个对话轮次生效。
* **ARM 设备支持推进**：Issue [#3250](https://github.com/sipeed/picoclaw/issues/3250) 及其相关支持已关闭，项目正式接受了针对 ARMv7 (armhf) 设备（如玩客云、树莓派 Zero）的 Docker Compose 部署支持方案，大幅拓宽了 PicoClaw 在家庭轻量级服务器中的使用场景。

### 4. 社区热点
今日讨论与互动最密集的内容反映了用户在**复杂网络环境下的部署诉求**：
* **长连接稳定性痛点**：Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203) (Matrix sync loop has no reconnection logic) 获得了社区的积极反馈（👍1，2 条评论）。用户 @weissfl 报告了 Matrix 网关在遇到网络抖动或服务器重启时，`/sync` 长轮询会“静默死亡”且不触发系统的自动重启机制。这暴露出项目在长时运行下的网络容错逻辑存在盲区，是亟待解决的架构级痛点。

### 5. Bug 与稳定性
今日报告的核心 Bug 集中在底层数据处理与组件解析上：
* **高危：大模型提供商别名解析逻辑缺陷**（Issue [#3252](https://github.com/sipeed/picoclaw/issues/3252)）：用户 @v2up-32mb 发现 `splitKnownProviderModel` 函数在处理模型 ID 包含已知提供商别名的情况时，会错误剥离提供商前缀。这将直接导致特定模型路由失败。**目前尚无对应 fix PR**，需重点关注。
* **中危：Android 端服务启动失败**（Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) [stale]）：尽管用户已授予完整权限，Android 版本仍无法从设置中更改路径并启动服务，严重阻塞了移动端用户。
* *(已解决) 加密消息解析报错*：Issue [#3194](https://github.com/sipeed/picoclaw/issues/3194) 报告的 Matrix 加密消息未开启 Crypto 的 Bug 已于今日关闭。

### 6. 功能请求与路线图信号
从今日的社区提交中，可以清晰地捕捉到 PicoClaw 下一阶段的演进信号：
* **精细化 Token 统计需求**：PR [#3251](https://github.com/sipeed/picoclaw/pull/3251) (待合并) 提议在 Anthropic 提供商中捕获 Prompt Cache 的 Token 使用量。这表明进阶用户对于 Agent 调度成本监控的要求越来越高，此项大概率在完善后被纳入下个版本。
* **边缘计算下沉**：ARMhf Docker 支持（Issue [#3250](https://github.com/sipeed/picoclaw/issues/3250)）的成功合入，释放出项目正式向低功耗 ARM 单板计算机下沉的强烈路线图信号，IoT 与家庭私人助手是明确的拓展方向。

### 7. 用户反馈摘要
基于今日的 Issue 与 PR 内容，真实用户的痛点与反馈集中在：
* **部署门槛依然存在**：用户非常渴望在廉价设备（如 1GB RAM 的玩客云）上运行 PicoClaw，现有的 amd64 限制曾是最大阻碍。
* **高阶 API 功能适配不足**：用户在使用 Claude (Anthropic) 时，发现丢失了 Prompt Cache 的统计指标，说明专业用户对 Agent 运行时的细粒度观测有较高要求。
* **移动端体验割裂**：Android 客户端的路径与权限管理不够健壮，导致服务无法正常唤起。

### 8. 待处理积压
* **需要立即 Review 的 PR**：PR [#3251](https://github.com/sipeed/picoclaw/pull/3251) 提供了关键的成本观测能力修复，建议维护者尽快完成 Code Review 并推进合并。
* **高优 Bug 修复**：Issue [#3252](https://github.com/sipeed/picoclaw/issues/3252) 中的模型路由前缀解析 Bug 会直接影响多模型调用逻辑，建议维护者分配开发资源进行排查。
* **存在 Stale 风险的活跃问题**：Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182)（Android Bug）已被打上 `[stale]` 标签，但 3 条评论表明用户依然受到困扰，若长期搁置将影响移动端用户口碑。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 NanoClaw (github.com/qwibotai/nanoclaw) 项目 2026-07-13 的动态日报。报告基于过去 24 小时的 GitHub 活动数据分析生成。

---

# 📊 NanoClaw 项目动态日报 (2026-07-13)

### 1. 📈 今日速览
NanoClaw 在过去 24 小时内保持了**高度活跃**的开发与社区互动状态，共产生了 **3 个新开 Issue** 和高达 **13 个活跃 PR**（其中 11 个处于待合并状态，2 个已关闭/合并）。开发重心目前明显聚焦于**提升 Agent 容器环境的稳定性**与**重塑消息分发机制**。核心团队今日提交了多个关于权限守卫（Guard seam）和 CLI 审批操作的重磅功能 PR，表明项目正在向更高安全性和企业级可用性迈进。虽然社区报告了数个导致 Agent 静默崩溃的阻断性 Bug，但响应迅速，相关修复 PR 已进入待审队列。

### 2. 🚀 版本发布
**本日无新版本发布 (0 个 Release)**。当前项目正处于密集的功能集成与深度 Bug 修复周期中，结合高达 11 个待合并的 PR，预计项目正在为下一个重要的里程碑版本（Major 或 Minor Version）做准备。

### 3. 🛠 项目进展
今日项目整体在**容器隔离性、上下文长度限制以及开发体验**方面取得了实质性进展：
*   **PR 关闭/合并推进：** 
    *   [PR #3024](https://github.com/nanocoai/nanoclaw/pull/3024) **[已关闭]**：虽然被关闭，但它直接催生了符合最新代码规范的 [PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)，成功解决了 Agent 输出 Token 被意外限制在 32000 的问题。
    *   [PR #2952](https://github.com/nanocoai/nanoclaw/pull/2952) **[已关闭]**：整合了 opencode stack 技能，丰富了项目的工具生态。
*   **底层架构推进：** 核心团队推进了 `Guard seam`（权限守卫第二阶段 [PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986)），未来所有跨越容器或通道边界的特权操作都将统一接受决策函数的审查（allow/hold/deny），极大增强了系统防 poisoning（投毒）能力。

### 4. 🔥 社区热点
今日社区与开发者的注意力高度集中在 **Agent 消息丢失/重复** 以及 **运行环境的基础设施稳定性** 上：
*   **[最高关注度] [Issue #3026](https://github.com/nanocoai/nanoclaw/issues/3026)：** Agent 在已通过 `send_message` 回复后，触发了重新包装（re-wrap）逻辑，导致模型被重复运行并**发送重复回复**。这反映了用户对多轮对话流中状态机精准度的极高要求。
*   **[高活跃度] [Issue #3023](https://github.com/nanocoai/nanoclaw/issues/3023)：** 所有 Claude Agent 被静默限制在 32000 输出 Token。这个问题引发了极大共鸣，因为这直接阻断了生成长代码文件（如 CAD/OpenSCAD）的真实业务场景。
*   **[核心团队动向] [PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986) & [PR #2987](https://github.com/nanocoai/nanoclaw/pull/2987)：** 核心开发者 `moshe-nanoco` 集中推进了本地审计日志和统一权限拦截点，显示了项目向 B2B/企业端合规性靠拢的路线图信号。

### 5. 🐛 Bug 与稳定性
按严重程度排列，今日报告的 Bug 均已有对应的 Fix PR 进入处理流水线：

1.  **[严重 P0] Agent 在长时间运行后静默断连 (无法生成容器)**
    *   **表现：** 导致 WhatsApp 等渠道完全停止回复。
    *   **原因：** 容器试图将 CA 证书写入 `/tmp` 时遇到目录权限冲突（`EISDIR`）。
    *   **状态：** 已提交修复 [PR #3027](https://github.com/nanocoai/nanoclaw/pull/3027)（重定位 `TMPDIR`）。
2.  **[严重 P0] Claude Agent 输出长度阻断**
    *   **表现：** 输出超过 32000 Token 时长任务直接中断崩溃。
    *   **状态：** 已提交修复 [PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)（提升 Token 上限至模型真实天花板）。
3.  **[中等 P1] Re-wrap 逻辑导致重复回复**
    *   **表现：** Agent 正常回复后，系统再次触发 nudge 逻辑导致发两遍消息。
    *   **状态：** 已提交修复 [PR #3028](https://github.com/nanocoai/nanoclaw/pull/3028) 和 [PR #3020](https://github.com/nanocoai/nanoclaw/pull/3020)。
4.  **[低 P2] 误报 Quota 错误日志**
    *   **表现：** [Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016) 即使在 `allowed` 状态下，也疯狂打印 `Rate limit` 错误日志（一周 82 次），影响监控判定。

### 6. ✨ 功能请求与路线图信号
从今日的 PR 走向中，可以明确提取出 NanoClaw 接下来的**路线图特征**：
*   **权限与合规：** CLI 审批动词增加 `approve/reject/reject-with-reason`（[PR #3029](https://github.com/nanocoai/nanoclaw/pull/3029)），以及本地审计日志集成。项目正从“可用”向“安全可控”转型。
*   **模板化与开箱即用：** 模板支持直接定义定时任务（[PR #3022](https://github.com/nanocoai/nanoclaw/pull/3022)），用户实例化 Agent 时即可自动带上 Cron 调度配置，减少了二次开发成本。
*   **防呆机制：** 增加了在连接共享/个人 WhatsApp 号码时的警告提示（[PR #3021](https://github.com/nanocoai/nanoclaw/pull/3021)），保护普通用户免受封号风险；同时对齐了 CLI 工具白名单的版本漂移防护（[PR #2982](https://github.com/nanocoai/nanoclaw/pull/2982)）。

### 7. 💬 用户反馈摘要
从 Issue 报告中可以深刻洞察用户的真实痛点：
*   **复杂工程应用成为常态：** 用户正在使用 NanoClaw 跑大型的 CAD 项目和生成长代码文件（Issue #3023），这证明 Agent 已经脱离了简单的“聊天”场景，深入到重型工程任务中，因此**对上下文窗口和输出限制极其敏感**。
*   **通信渠道依赖极深：** 多个 Bug 反馈与 WhatsApp 通道相关，说明大量个人/小企业用户将此作为核心客服/互动基建。任何导致通道静默的容器级 Bug（如 CA 证书写入失败）都会带来直接的业务中断焦虑。

### 8. ⏳ 待处理积压
提醒维护者与社区关注以下处于 `Open` 状态且逻辑较复杂、需要耗费 Review 精力的高质量 PR，避免形成积压：
*   **[PR #2983](https://github.com/nanocoai/nanoclaw/pull/2983)**：针对每组的测试框架能力切换（涉及向后兼容老配置）。
*   **[PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986)**：Guard seam 架构第二阶段重构。此 PR 是一个底层大改动，目前仍在待合并状态，是多个功能（如审计日志）的基座依赖，建议优先排期 Review。
*   **[PR #3020](https://github.com/nanocoai/nanoclaw/pull/3020)**：修复未打包回复静默丢弃的问题。该逻辑涉及复杂的上下文抑制，需要多场景验证以防回归。

---
*分析声明：本报告基于 NanoClaw 过去 24 小时的 GitHub 公开事件数据自动生成。各项时间戳和状态均反映截至统计窗口结束时的快照。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-13)

**数据来源**: [nearai/ironclaw](https://github.com/nearai/ironclaw) | **分析周期**: 过去 24 小时

---

### 1. 今日速览
IronClaw 项目今日维持着极高的活跃度，单日共有 **50 个 PR 更新**与 **9 个 Issue 更新**，且绝大部分由核心团队驱动。
项目当前正处在一个关键的“稳定性和效能优化”周期，核心开发者（如 ilblackdragon）正集中火力攻坚 CI 构建的脆弱性以及底层并发测试的 Flaky 问题。
在 AI 助理核心逻辑方面，团队正在深度借鉴 Claude Code 的成功经验，提交了多个关于“提示词缓存优化”、“强制编辑前读取”和“外部输出防护”的重磅 XL 级 PR，标志着 Reborn 运行时的执行引擎正在经历深度重构。

### 2. 版本发布
*今日无新版本发布。*
**注意**：当前处于版本积压状态，[#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) 正在待合并状态，预计下一版本 `ironclaw` 将跃升至 `0.29.1`，其中包含 `ironclaw_common` 和 `ironclaw_skills` 的破坏性更新。

### 3. 项目进展
过去 24 小时处理了 **26 个已合并/关闭的 PR 与 Issue**，取得了实质性进展：

*   **CI 测试隔离修复**：通过 PR [#6023](https://github.com/nearai/ironclaw/pull/6023) 修复了长期困扰全量覆盖率测试的 `build_runtime_input` 竞态 Flake 问题（对应 Issue #6015）。
*   **核心组件重构落地**：合并了包括 Admin 密钥权限对齐（[#5934](https://github.com/nearai/ironclaw/pull/5934)）等基础设施改进。
*   **引擎行为改进（即将合并）**：推进了 Stack 系列重构，包括 [PR #5978 强制读取后编辑](https://github.com/nearai/ironclaw/pull/5978) 和 [PR #5975 缓存破坏检测](https://github.com/nearai/ironclaw/pull/5975)，这极大增强了 Agent 在长流程编码中的稳定性。
*   **社区贡献闭环**：关于 GLM-5.2 模型挂起和列表缺失的两个用户反馈 Bug ([#6010](https://github.com/nearai/ironclaw/issues/6010), [#6009](https://github.com/nearai/ironclaw/issues/6009)) 已被快速关闭。

### 4. 社区热点
当前社区（包含核心开发者）讨论最密集的焦点在于 **工程稳定性和 CI 基建**，而非新功能：
*   **[Issue #6014](https://github.com/nearai/ironclaw/issues/6014) CI 脆弱性分析**：核心开发者指出 7 月份约 70% 的主分支推送失败是由代码覆盖率和非密闭性测试引起的。这反映了项目在快速迭代中积压了大量测试债务，目前团队已将其列为头号歼灭目标。
*   **[PR #6012](https://github.com/nearai/ironclaw/pull/6012) 扩展运行时与 Slack/Telegram 出站对接**：这是 Workstream F 的第五个 PR，确立了 Channel 的出站交付协调器。说明 Ironclaw 正在向多平台互通的超级 Agent 演进。

### 5. Bug 与稳定性
今日报告的缺陷主要集中在**并发时序**与**长时间运行任务**上，按优先级排列：

1.  🔴 **[P0/架构] CI 流水线大范围崩溃** ([#6014](https://github.com/nearai/ironclaw/issues/6014))：非密闭测试导致主分支约 70% 失败。**状态**：已提交静态预推送检查 [PR #6022](https://github.com/nearai/ironclaw/pull/6022) 和修复 PR [#6023](https://github.com/nearai/ironclaw/pull/6023)。
2.  🟠 **[P1] 数据库并发契约测试 Flaky** ([#6017](https://github.com/nearai/ironclaw/issues/6017))：Postgres 删除/重建竞态，以及 libSQL 并发写入存在时序敏感问题。**状态**：已定位，等待修复。
3.  🟠 **[P1] Slack 触发器 E2E 测试超时** ([#6016](https://github.com/nearai/ironclaw/issues/6016))：Slack 触发器轮询测试存在间歇性失效。**状态**：正在通过 [PR #6020](https://github.com/nearai/ironclaw/pull/6020) 增强其确定性和可观测性。
4.  🟡 **[P3] UI Bug: 聊天激活时图像预览透明化** ([#5704](https://github.com/nearai/ironclaw/issues/5704)，已关闭)：Agent 运行工具时图片缩略图失去透明度。

### 6. 功能请求与路线图信号
通过近期 PR 可以清晰勾勒出 IronClaw 下一步的演进路线图：

*   **代码执行引擎全面对齐 Claude Code**：多项核心重构提上日程，包括将系统提示词中的技能体替换为单行列表以节省 Token ([#5977](https://github.com/nearai/ironclaw/pull/5977))，以及增加编辑后的诊断检查 ([#5979](https://github.com/nearai/ironclaw/pull/5979))。这意味着下个大版本在处理长代码任务时将大幅减少“幻觉”和误操作。
*   **时间戳处理更加原生**：[PR #6024](https://github.com/nearai/ironclaw/pull/6024) 允许内置时间工具直接解析 Unix 时间戳（支持毫秒和分数秒），这对于处理 Slack 等平台 API 数据极其友好。
*   **MCP (Model Context Protocol) 深度集成**：[PR #5970](https://github.com/nearai/ironclaw/pull/5970) 引入了基于用户级别的 MCP 注册存储，表明 IronClaw 正在构建更细粒度的外部工具调用权限控制。

### 7. 用户反馈摘要
从最近的 Issue 中可以提炼出终端用户的几个核心诉求：
*   **第三方模型 API 兼容性差**：用户在使用非原生模型（如 GLM-5.2）通过 NEAR AI 或 opencode 进行交互式开发时，遇到了严重的延迟和模型不可见问题。尽管这两个 Issue ([#6010](https://github.com/nearai/ironclaw/issues/6010), [#6009](https://github.com/nearai/ironclaw/issues/6009)) 已关闭，但反映出用户群体对**即插即用**的第三方 LLM 生态支持有着强烈需求。
*   **工作流阻断**：对于交互式编程场景，LLM 哪怕拥有很高的 token/s 速度，但只要出现“长时间卡顿”就会完全破坏开发体验，用户极度依赖运行时的稳定性。

### 8. 待处理积压
维护者应重点关注以下积压项：
*   **大规模依赖更新滞留**：[PR #6021](https://github.com/nearai/ironclaw/pull/6021) (22个包更新)、[PR #5664](https://github.com/nearai/ironclaw/pull/5664) (16个 Github Actions 更新) 等批量依赖升级长期处于 Open 状态。考虑到近期 CI 系统极其脆弱，建议在 #6014 CI 稳定性问题彻底解决后，尽快批量合并以消除安全/兼容性隐患。
*   **版本发布阻塞**：[PR #5598](https://github.com/nearai/ironclaw/pull/5598) 自 7 月 3 日开启至今未合并，大量 Break Changes 积压在主分支，如果不及时发布 Release，会导致后续新功能的基线难以对齐。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这是一份基于 2026-07-13 LobsterAI GitHub 仓库数据的开源项目动态日报。

---

# 🦞 LobsterAI 项目动态日报 (2026-07-13)

**数据周期**：2026-07-12 至 2026-07-13
**整体健康度评估**：🟢 稳定（核心模块持续重构，社区反馈聚焦于多 Agent 架构体验）

## 1. 今日速览
过去 24 小时内，LobsterAI 代码库无新增 Release 版本发布，但底层维护与体验优化仍在稳步推进。昨日共有 1 条 Issue 产生互动，1 个 PR 被关闭，整体活跃度处于平稳期。值得注意的是，涉及多 Agent 架构底层的“ID 生成机制重构”和“用户配置隔离”成为了开发与讨论的核心焦点，这表明项目正在深水区完善多 Agent 并行工作的稳定性。

## 2. 版本发布
* **无新版本发布**。当前用户建议保持关注主干分支的合并动态，以期待下一个修复版本。

## 3. 项目进展
今日有 1 个重要 PR 被关闭，标志着项目在 Agent 底层架构上取得了重要进展：

* **[[PR #2065] fix(agent): 使用短 UUID 替代名称生成 Agent ID `[CLOSED]`](https://github.com/netease-youdao/LobsterAI/pull/2065)**
  * **进展解析**：该 PR 解决了一个深层次的数据污染问题。此前 Agent ID 基于名称生成，导致用户删除并重建同名 Agent 时，会意外“复活”旧的本地文件（workspace、sessions 等）。改用短 UUID 后，从底层切断了同名 Agent 之间的数据关联，大幅提升了多 Agent 管理的健壮性。此 PR 的关闭与即将合并的状态，意味着下一版本的多 Agent 体验将得到实质性改善。

## 4. 社区热点
今日社区最热烈的讨论聚焦于多 Agent 的配置覆盖问题：

* **[[Issue #2293] 重启后，多个agent下的USER.md被覆盖替换的BUG？ `[OPEN]`](https://github.com/netease-youdao/LobsterAI/issues/2293)**
  * **互动数据**：4 条评论，持续更新中。
  * **诉求分析**：多位高级用户正在使用多 Agent 工作区（Workspace）来区隔不同场景的需求（如编程助手、写作助手）。用户 `yepcn` 发现，在软件重启后，子 Agent 的 `USER.md`（“关于你”设置）会被 Main Agent 的内容强制覆盖。这暴露出当前版本在处理多 Agent 状态加载时的文件读写存在逻辑冲突，社区迫切需要实现不同 Agent 人设与设定的**绝对物理隔离**。

## 5. Bug 与稳定性
基于今日数据，当前存在以下高优先级问题：

1. **🔴 [严重] 多 Agent 配置文件覆盖问题 (Issue #2293)**
   * **现象**：启动时主 Agent 的 `USER.md` 覆盖其他 Agent 的配置文件，导致不同 Agent 人设“串台”。
   * **状态**：尚未有明确的 fix PR 关联，由于该问题导致用户无法正常使用多 Agent 个性化功能，建议维护者优先介入排查加载逻辑。

## 6. 功能请求与路线图信号
从近期活跃的 PR 中，我们可以捕捉到 LobsterAI 近期的产品演进方向：

* **UI/UX 易用性提升**：长期未决的 **[[PR #1325] 为新建对话图标按钮添加悬停提示 `[OPEN]`](https://github.com/netease-youdao/LobsterAI/pull/1325)** 昨日再次被激活。侧边栏折叠状态下的 tooltip 优化表明，团队正在注重提升紧凑模式下的交互直觉。该 PR 极有可能在通过代码审查后合入下个小版本。

## 7. 用户反馈摘要
通过对近期 Issue 的提炼，真实用户的核心痛点如下：
* **痛点**：多 Agent 数据隔离不彻底。“删除 Agent 留下孤儿数据”（已被 PR #2065 解决）和“配置文件相互覆盖”（Issue #2293）让用户感到多 Agent 架构不够可靠。
* **使用场景**：重度用户倾向于在同一客户端下建立完全隔离的多个数字分身，且会尝试直接修改底层的 `workspace-*` 目录下的 `USER.md` 文件来实现高级定制。
* **期望**：用户强烈期望文件系统级别的修改能与前端 UI 状态实现双向同步与独立隔离，避免软件重启导致自定义内容丢失。

## 8. 待处理积压
提醒维护者关注以下存在停滞风险的项目：

* **⚠️ [[PR #1325] 为新建对话图标按钮添加悬停提示](https://github.com/netease-youdao/LobsterAI/pull/1325)**
  * **状态**：被标记为 `[stale]`（陈旧/停滞）。由贡献者 `0xFLX` 于 2 个多月前提交，虽然是一个不影响核心功能的低风险 UI 体验优化，但长期搁置容易流失社区贡献者的积极性。建议 Reviewer 尽快进行 Code Review 并推进合并。

---
*数据来源：LobsterAI GitHub Repository Metrics*

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

以下是根据 2026-07-12 至 2026-07-13 的 GitHub 数据为您生成的 CoPaw (QwenPaw) 项目动态日报。

---

# 📊 CoPaw (QwenPaw) 项目动态日报
**报告日期**: 2026-07-13  
**数据统计周期**: 过去 24 小时

## 1. 今日速览
项目在过去 24 小时内保持了**极高的活跃度**，社区围绕最近发布的 `v2.0.0` 版本展开了密集讨论。共有 19 个 Issue 更新（16 个新开/活跃，3 个关闭）和 10 个 PR 更新（7 个待合并，3 个合并/关闭）。**v2.0.0 的架构升级带来了明显的阵痛期**，大量用户反馈升级后遇到了会话不兼容、权限频繁拦截以及上下文压缩导致的 API 400 报错等问题。维护团队与社区贡献者响应迅速，针对 v1 到 v2 的兼容性问题及核心 Bug 提交了多个修复 PR，项目正处于大版本发布后的快速修补与收敛阶段。

## 2. 版本发布
**本日无新版本发布。**
*注：当前社区反馈的问题绝大多数集中在近期刚发布的 `v2.0.0` (含 Windows Tauri 桌面端与 Docker 部署)，建议团队尽快推出 `v2.0.1` 热修复版本。*

## 3. 项目进展
今日共有 3 个 PR 被合并或关闭，主要推进了 v2.0.0 的 P0 级 Bug 修复：
*   **上下文压缩引发的孤儿消息修复**：PR [#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) 被关闭（可能被更新的防御方案替代）。新的 PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) 正在审查中，通过多层防御机制，清理由上下文压缩导致的孤立的 `tool_result` 消息。
*   **遗留文件类型块兼容性修复**：PR [#5990](https://github.com/agentscope-ai/QwenPaw/pull/5990) 和 [#5988](https://github.com/agentscope-ai/QwenPaw/pull/5988) 被关闭，维护者提交了新优化版 PR [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991)，修复了 1.x 版本的会话在 2.0 中反序列化时 `file` 类型块无法识别的问题。

## 4. 社区热点
今日讨论最热烈的问题聚焦于 **v2.0.0 的系统兼容性与安全策略**：
1.  **自动记忆 模块集体报错**：[#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) 获得较多关注。Windows 桌面端用户普遍遇到 `No module named 'agentscope.tool._builtin._scripts'` 错误，导致所有 Agent 的记忆总结功能失效。（已提交修复 PR: [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)）
2.  **上下文压缩破坏工具调用配对**：[#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) 报告了长对话触发压缩后，引发 OpenAI API 400 `BadRequestError`，反映了深度推理链路的不稳定性。
3.  **Shell 执行权限过度拦截**：[#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982) 指出 v2.0.0 强制要求用户对每一次 Shell 执行进行确认，过度的安全审查严重拖慢了工作流。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug：
*   🔴 **严重 - 数据丢失与 API 400 报错**：
    *   [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)：升级 2.0.0 后，历史会话表映射丢失导致旧对话无法在 Web UI 打开 (HTTP 500)。
    *   [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) & [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996)：上下文压缩和后台工具结果注入时，消息格式不合规触发 API 400 错误。（已有修复 PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)）
*   🟠 **高 - 核心功能阻断**：
    *   [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) & [#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978)：自动记忆功能因缺少模块或 Session ID 包含非法字符（如 Telegram 频道）而全面崩溃。（已有修复 PR [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)）
    *   [#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994) & [#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982)：权限治理在 Docker 等环境下行为异常，无 allow rule 命中导致操作频频被阻。
*   🟡 **中 - 沙盒与插件问题**：
    *   [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)：Linux 沙盒将用户映射为 root，导致 Electron 程序 (如 Obsidian CLI) 崩溃。
    *   [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977)：热重载 导致插件 HTTP 路由被误删。

## 6. 功能请求与路线图信号
结合用户的诉求与当前的开源 PR，以下方向可能被纳入接下来的版本更新：
*   **跨频道会话接力**：[#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) 用户强烈希望能在 Console、飞书、钉钉等不同平台入口无缝接力同一个 Agent 会话。
*   **多模型支持**：PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 提交了单会话级别的模型覆盖 功能，允许用户为特定对话指定非默认模型。
*   **技能池自动发现机制修复**：针对 [#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001) 和 [#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000) 反馈的新技能无法加载问题，重构 `skills/` 目录的自动扫描逻辑将是下个版本的刚需。
*   **UI 易用性提升**：PR [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) 正在推进在 TUI 和 Web 控制台中自动补全斜杠系统命令（如 `/new`, `/history`）。

## 7. 用户反馈摘要
*   **升级痛点**：大量用户表达了对 v2.0.0 升级负面体验的沮丧。数据库结构变动引发的会话丢失 和系统提示词/工具调用格式不兼容 是最大的抱怨来源。
*   **安全与易用性的失衡**：开发者在反馈中指出，v2.0.0 引入的沙盒和权限审查机制过于繁琐（例如每次执行脚本都要确认），在缺乏 Landlock 支持的设备（如树莓派）上尤为明显（[#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)），严重违背了个人 AI 助手“自动化”的初衷。
*   **记忆与指令遵循冲突**：用户指出，Agent 有时会无视最新确认的指令，转而使用过期的记忆数据生成内容（[#5998](https://github.com/agentscope-ai/QwenPaw/issues/5998)），说明记忆读取权重逻辑需要优化。

## 8. 待处理积压
*   ⚠️ **会话消息队列设计缺陷**：[#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) 报告当 Agent 处于繁忙状态（如等待人工确认回调）时，新发送的消息会被静默丢弃。目前该 Issue 被标记为 `Close-and-review-later`，但消息不排队直接丢失属于高危逻辑缺陷，建议团队重新评估其优先级。
*   ⚠️ **健康检查接口硬编码**：[#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983) 指出 `qwenpaw doctor` CLI 命令中的健康检查 URL 被硬编码，导致永远返回 404 FAIL，影响用户的日常自检排错。

---
*免责声明：本报告基于 GitHub 过去 24 小时的公开事件数据自动生成与深度分析，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-07-13 | **分析数据源**: 过去 24 小时 GitHub 活动

---

### 1. 今日速览
ZeroClaw 在过去 24 小时内保持了极高的社区活跃度，新增了 45 个活跃 Issue 和 48 个待合并 PR，开发节奏紧凑。从活动走向来看，项目正处于 **v0.8.3 版本发布前的最后冲刺阶段**，同时衍生出对 v0.8.4 维护版本和 ZeroCode/UX 等长线里程碑的规划。PR 和 Issue 的焦点高度集中在 **Agent 记忆管线改造**、**SOP（标准作业程序）人机交互审批代理** 以及 **WASM 插件生态** 等核心架构的增强上。

### 2. 版本发布
**本日无新版本发布（0 个 Release）。** 
当前主干代码正处于 v0.8.3 里程碑的收尾与整合期，距离下一个官方 Release 还需完成若干跟踪任务（参考 [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) 与 [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)）。

---

### 3. 项目进展
今日项目整体向前推进了一小步，共有 2 个 PR 完成合并/关闭，但大量重量级（size:XL）功能扩展进入待合并（Open PRs）状态，为后续爆发式更新蓄力：
* **会话状态修复落地**: PR [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018) 修复了 CLI 本地化检测前忽略 `--config-dir` 的行为，提升了多语言环境下的初始化体验。
* **文档与链接修补**: PR [#9003](https://github.com/zeroclaw-labs/zeroclaw/pull/9003) 修复了维护者仪表盘工作流的内部链接失效问题。

---

### 4. 社区热点
今日讨论度最高的话题集中在**既有架构的拆分与精细化管理**：
* **架构拆分与协调**: Issue [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)（9条评论）是关于 "Goal mode"（目标模式）实现的拆分堆栈跟踪。维护者正在将庞大的功能拆分为可独立审查的 PR，以降低代码审查门槛。
* **上下文空间与 OOM 危机**: Issue [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)（8条评论）再次引发热烈讨论。默认 32k 的上下文预算在第一轮迭代时就因为系统提示词和工具定义过大而超支 3.3 倍，导致系统持续进行截断操作，阻碍了工作流。
* **渠道接入体验优化**: Issue [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)（6条评论）请求在 Slack 中首次 @ 机器人时，通过 `conversations.replies` 回溯线程历史上下文，以解决多轮对话断层的痛点。

---

### 5. Bug 与稳定性
今日报告了多个高危（S1/风险高）Bug，集中反映在内存泄漏和特定渠道的崩溃问题上：

1. **【S1 阻塞性】MCP/Tool Schema 导致内存无限增长**: 
   * Issue [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 报告 MCP 工具 Schema 克隆导致 Agent 循环中 RSS（物理内存）无限激增，在 WSL2 等环境下极易触发 OOM。
2. **【S1 阻塞性】后台 Skill 审查引发 SIGSEGV 段错误**: 
   * Issue [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) 报告在工具密集型交互后，后台技能审查分支触发越界切片恐慌，导致守护进程直接崩溃退出 (Exit 139)。
3. **【S1 阻塞性】OpenAI 工具调用逻辑拒绝**: 
   * Issue [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) 指出，当通过 Chat Completions 发送带有非 `none` 推理力度的函数工具时，`gpt-5.6-sol` 模型会直接报错阻断。
4. **【S1 阻塞性】OpenAI Responses 视觉模型硬编码 Bug**: 
   * Issue [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) 指出使用 `responses` 接口时，Provider 硬编码禁用了视觉能力，导致图片输入被拒。**目前暂无对应修复 PR。**

---

### 6. 功能请求与路线图信号
从大量的功能追踪器（Tracker）和 PR 可以清晰看出 ZeroClaw 接下来的演进路线：

* **Agent 记忆系统大重构（已具备初版 PR）**: 
  开发者 Nillth 提交了系列 XL 级别的 PR，包括加入检索缓存装饰器 ([#8897](https://github.com/zeroclaw-labs/zeroclaw/pull/8897))、跨会话全局记忆语义召回 ([#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898)) 以及写入与召回边界的内容安全扫描 ([#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984))。
* **SOP 人机协同审批网关（HITL）**:
  以 Issue [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) 为代表的诉求推动了审批代理机制的落地。PR [#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880) 和 [#8903](https://github.com/zeroclaw-labs/zeroclaw/pull/8903) 增加了群组成员资格、配额管理以及通过路由适配器将审批请求投递至指定 Channel 的能力。
* **全渠道 Scale-to-Zero 与 Serverless 化**:
  Issue [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) 提议为 Slack 增加 Events API (HTTP Request URL) 模式，以支持无状态化部署和弹性伸缩。

---

### 7. 用户反馈摘要
基于社区讨论，当前用户的痛点与满意点呈现出明显的两极分化：
* **痛点：Token 预算与长上下文限制**。用户在实际使用中深受 System Prompt 与工具定义占用过多上下文的困扰（[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)），配置稍有不慎就会导致工具失效或 OOM。
* **痛点：渠道部署割裂感**。用户希望不同平台（Slack, Telegram, Matrix）能有一致的高级流式传输和会话状态保留能力（如 [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) 呼吁 Telegram 支持多消息模式而非混合挤在一条消息里）。
* **满意点：模块化与安全控制的渴望**。社区对 PR [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984)（记忆读写分离与安全扫描）反响积极，高度认可项目组在 Agent 安全网方面的投入。

---

### 8. 待处理积压
以下重要历史问题仍处于等待或处理中状态，需核心团队倾注资源：
* **Git 历史清理积压（高优先级/P2）**: Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 仍在追踪 3 月份因单次批量回滚丢失的 153 个提交的恢复进度。
* **v0.8.3 发布前置 CI/CD 阻塞（高优先级/P2）**: Issue [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) 处于 `blocked` 状态，亟待维护者审查关于“全渠道预构建资产”的发布方案，这直接影响了 v0.8.3 的顺利释出。
* **Cron 定时任务功能缺失（中优先级/P2）**: Issue [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) 反映文档缺失且无法指定特定模型运行 Cron 任务，该需求已暴露超过一个月。

</details>