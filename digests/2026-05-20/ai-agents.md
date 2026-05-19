# OpenClaw 生态日报 2026-05-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-19 22:23 UTC

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

以下是为您生成的 OpenClaw 项目 2026-05-20 动态日报：

# OpenClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持极高的社区活跃度，共产生 500 条 Issue 互动和 500 条 PR 互动。尽管单日关闭的缺陷/PR 数量不多（分别关闭 52 个 Issue 和合并 42 个 PR），但提交了 2 个 Beta 版本迭代，并在 PR 池中蓄水了大量关键修复（待合并 PR 达 458 个）。整体来看，项目正处于 **“功能大版本发布前的阵痛期”**：多渠道（Telegram、Slack、Mattermost）的消息投递稳定性和 Agent 会话状态管理暴露出较多回归 Bug，社区对安全架构（权限隔离、数据脱敏）和多级路由的需求呼声极高，项目团队正集中精力修复底层基础设施。

## 2. 版本发布
今日连续发布了两个 Beta 测试版，主要聚焦于 Agent 内部架构和依赖治理：
*   **[v2026.5.19-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.2)**
*   **[v2026.5.19-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)**

**更新解析与迁移注意事项：**
1.  **Agent 修复策略重构**：明确了 Bug 修复应默认采用“干净的有界重构”和精简内部逻辑，并引入了明确的插件 SDK/API 弃用路径。这对开发者是一个强信号：**未来底层 API 可能会发生破坏性变更**，第三方插件开发者需关注后续的 Deprecation 路线图。
2.  **依赖项升级**：`@openclaw/proxyline` 更新至 0.3.3，Pi 包更新至 0.75.1。
3.  ⚠️ **破坏性注意**：新版本**提高了最低支持的 Node.js 版本**。如果您的部署环境 Node 版本过低，在升级前务必先升级运行环境。

## 3. 项目进展
今日合并及待合并的 PR 中，重点推进了网关健壮性、多渠道路由与核心修复：
*   **`doctor` 诊断工具修复**：[PR #84142](https://github.com/openclaw/openclaw/pull/84142) 已进入自动合并队列，修复了 `doctor --fix` 会错误覆盖显式 `agentRuntime` 配置导致 Token 消耗暴增 3-4 倍的严重退化。
*   **Linux/Windows 守护进程增强**：[PR #68180](https://github.com/openclaw/openclaw/pull/68180) 修复了 Linux 下 fnm PATH 解析丢失问题；[PR #68149](https://github.com/openclaw/openclaw/pull/68149) 重构了 Windows 自启动逻辑，改用 PowerShell 的 `Register-ScheduledTask`，打破了原有 72 小时的执行时间限制。
*   **Web UI 与文档优化**：修复了硬编码字符串绕过国际化的问题 [PR #68152](https://github.com/openclaw/openclaw/pull/68152)，并重构了部分原生插件文档 [PR #84341](https://github.com/openclaw/openclaw/pull/84341)。

## 4. 社区热点
今日讨论最热烈的问题反映了跨平台需求和安全架构的缺失：
*   **全平台客户端呼声**：[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)（👍 75，评论 105）。自 1 月份提出以来持续保持极高热度，用户强烈要求补齐与 macOS/iOS 对等的 Linux 和 Windows 原生客户端体验。
*   **敏感数据脱敏需求**：[#64046 希望支持敏感数据脱敏](https://github.com/openclaw/openclaw/issues/64046)（评论 8）。用户指出当前 API Key 在配置文件、日志和自带 UI 中均明文展示，存在严重隐患，呼吁全局支持数据脱敏。
*   **多 Agent 隔离存储**：[#63829 Per-agent memory-wiki vault configuration](https://github.com/openclaw/openclaw/issues/63829)（👍 7，评论 8）。在多 Agent 设置中，用户希望每个 Agent 拥有独立隔离的知识库 Vault，而不是共享全局配置。

## 5. Bug 与稳定性
今日报告了大量影响生产环境的高优（P1）Bug，尤其是在会话管理（OOM、状态丢失）和消息流投递方面：

*   **P1 - 网关内存泄漏与 OOM**：[#55334 sessions.json 无限增长导致网关 OOM](https://github.com/openclaw/openclaw/issues/55334)。由于 `skillsSnapshot` 在每个会话中重复存储且缺乏清理机制，导致内存以 50-100 MB/min 的速度无限增长。（*状态：已提交修复 PR*）
*   **P1 - 会话上下文重置死循环**：[#63216 重复硬重置消耗 Token](https://github.com/openclaw/openclaw/issues/63216)。在特定群组会话中，即使预留了充足的 Token，系统仍不断注入上下文并触发硬重置循环。
*   **P1 - 嵌入式 Agent 锁定异常（新爆发）**：[#84059 EmbeddedAttemptSessionTakeoverError](https://github.com/openclaw/openclaw/issues/84059)。自 05.18 版本升级后，所有嵌入式运行均崩溃，提示会话文件在锁释放期间被更改。
*   **P1 - Telegram 消息静默丢失**：[#80520 Telegram messages silently dropped](https://github.com/openclaw/openclaw/issues/80520)。网关显示接收并处理了消息，但未调用发送 API，用户收不到回复。
*   **P1 - `doctor` 修复工具引发侧car崩溃**：[#84038 doctor --fix 打破了 PI+OAuth 运行时](https://github.com/openclaw/openclaw/issues/84038)。迁移配置时引发了 Token 膨胀 3-4 倍的严重副作用。（*状态：修复 PR [#84142](https://github.com/openclaw/openclaw/pull/84142) 已就绪*）

## 6. 功能请求与路线图信号
结合近期的 PR 和 Issue，可以判断以下功能极有可能在近期版本落地：
*   **动态模型发现与模型路由细化**：用户呼吁 [#10687 全动态模型目录发现](https://github.com/openclaw/openclaw/issues/10687) 及在 `SKILL.md` 中支持按技能指定模型 ([#43260](https://github.com/openclaw/openclaw/issues/43260))。同时，[PR #84152](https://github.com/openclaw/openclaw/pull/84152) 正在修复子代理模型优先级，表明底层多模型路由架构正在重构。
*   **多渠道路由与流式体验升级**：[PR #84320](https://github.com/openclaw/openclaw/pull/84320) 正在为 Telegram 添加原生草稿流式传输支持，[PR #82258](https://github.com/openclaw/openclaw/pull/82258) 则为 Slack 引入了原生的任务进度卡片，多渠道用户体验即将迎来大幅提升。
*   **精细化安全拦截机制**：[#18677 Skill 安装前的安全扫描 Hook](https://github.com/openclaw/openclaw/issues/18677) 和针对预算控制的 [#42475 网关层预算限制](https://github.com/openclaw/openclaw/issues/42475) 正在等待产品决策，这是构建企业级信任的关键拼图。

## 7. 用户反馈摘要
从评论和 Issue 描述中，可以提炼出以下真实用户痛点：
1.  **基础设施稳定性焦虑**：企业用户在长会话运行时极度缺乏安全感。会话状态破坏（如 Compaction 卡死 [#63892](https://github.com/openclaw/openclaw/issues/63892)）和 OOM 频繁发生，使得系统在生产环境显得十分脆弱。
2.  **跨平台体验割裂**：由于缺乏官方 Windows/Linux GUI 客户端，开发者只能通过 Web UI 或 CLI 交互，且 Web UI 近期出现了严重的消息吞字和刷新才可见的 Bug ([#67035](https://github.com/openclaw/openclaw/issues/67035))，用户体验遭到严重破坏。
3.  **诊断工具“帮倒忙”**：用户普遍依赖 `openclaw doctor --fix` 进行配置修复，但近期它多次错误重写配置，导致鉴权失败或 Token 异常消耗，用户对自动化修复工具的信任度下降。
4.  **商业化监控诉求**：用户希望系统能在网关层提供基于 Agent 维度的成本熔断机制，防止“狂飙”消耗（[#42475](https://github.com/openclaw/openclaw/issues/42475)）。

## 8. 待处理积压
以下关键/高影响问题长期悬而未决，严重消耗社区耐心，提醒维护团队重点关注：
1.  **多时区/长周期任务丢失**：[#11665 Webhook hook 会话复用失效](https://github.com/openclaw/openclaw/issues/11665)（已开启 3 个多月），官方文档承诺支持多轮对话，但底层代码始终生成新会话，严重影响自动化工作流。
2.  **心跳抢占正常回复**：[#40611 心跳修复导致 Telegram 消息阻塞](https://github.com/openclaw/openclaw/issues/40611)（已开启 2 个月），原本用于保活的心跳机制在活跃对话时阻断了正常消息投递，影响广泛。
3.  **底层安全权限滥用风险**：[#7227 macOS 辅助功能权限请求暴露所有 npm 包](https://github.com/openclaw/openclaw/issues/7227)（已开启 3 个多月），系统请求的是 `node` 的系统级权限而非特定 App，被社区标记为高危安全隐患，亟待重构代码签名与沙箱逻辑。

---

## 横向生态对比

基于 2026 年 5 月 20 日各大开源项目的社区动态数据，为您生成 AI 智能体与个人 AI 助手开源生态横向对比分析报告：

# 📊 AI 智能体开源生态横向对比与趋势分析报告 (2026-05-20)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多智能体协同与自动化执行”跨越的关键爆发期**。各类项目正密集重构底层网关与上下文管理机制，以解决长时记忆丢失和资源无限膨胀（OOM）等共性通病。多渠道无缝接入（IM、桌面、边缘设备）与企业级安全隔离（沙箱逃逸、数据脱敏）已成为构建生产级信任基石的核心试炼场。

## 2. 各项目活跃度对比
*评估标准：高活跃表示处于快速功能迭代或密集修 Bug 阶段；健康度依据 PR 合并效率与严重 Issue 积压情况综合评估。*

| 项目名称 | 今日活跃 Issue | 今日活跃 PR | Release 情况 | 健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 2 个 (Beta) | 🟡 **阵痛期**：功能大版本前夜，底层架构变动导致大量 P1 级回归 Bug 待修。 |
| **NanoBot** | 31 | 35 | 无 | 🟢 **健康**：极高的 Issue 关闭率，功能爆发与冷启动等性能优化并行。 |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 **快速修复期**：新功能引发密集测试，暴露了 Windows 崩溃与鉴权安全漏洞。 |
| **PicoClaw** | 未详述 (多) | 16 (9 Open) | 1 个 | 🟢 **稳步演进**：架构向复杂多智能体编排升级，冷启动与模型兼容性稳步提升。 |
| **CoPaw** | 37 | 43 | 2 个 (含正式版) | 🟠 **动荡期**：发布 v1.1.8 重磅生态功能，但随之暴露闪退、RCE 等严重稳定性与安全问题。 |
| **ZeroClaw** | 活跃 (多高优) | 50 (47 Open) | 无 | 🟢 **强健重构**：底层架构高度统一，具备超前实验性，但在安全策略拦截上遇到阻碍。 |
| **NullClaw** | 少量聚焦 | 12 | 无 | 🟢 **深水区优化**：底层用 Zig 重构网络栈，积极举办 Hackathon 输出高质量代码。 |
| **LobsterAI** | 0 | 50 | 无 | 🟢 **高优合并**：内部/定向驱动，PR 吞吐量极高，聚焦 UI 与多智能体可视化。 |
| **NanoClaw** | 3 | 20 | 无 | 🟢 **敏捷修复**：社区响应极快，聚焦特定渠道优化与安全基线。 |
| **Moltis** | 2 | 2 | 无 (近期有) | 🟢 **稳固基础**：聚焦沙箱底层隔离与稳定性修复。 |
| **ZeptoClaw** | 0 | 2 (Bot) | 无 | ⚪ **静默期**：仅依赖机器人进行自动化依赖维护。 |

## 3. OpenClaw 在生态中的定位
*   **生态头雁与试金石**：OpenClaw 凭借庞大的社区基数（单日上千交互），扮演着“个人 AI 助手基础设施”的核心参照系角色。其在多渠道路由、会话状态管理上遇到的挑战（如 OOM、上下文死循环），正是整个行业试图解决的技术深水区。
*   **技术路线差异**：相比 NanoBot 或 Hermes Agent 等侧重模型提供商扩展和极客部署的项目，OpenClaw 当前将重心放在了**企业级安全架构（数据脱敏、Vault 隔离、预算熔断）和网关高可用性**上。它正在经历从“好用”到“敢用”的痛苦蜕变。
*   **社区规模**：社区关注度遥遥领先，但也因此背负了沉重的历史包袱（大量长尾 Bug 和积压 PR），其“破坏性 API 升级”信号将对下游生态产生深远影响。

## 4. 共同关注的技术方向
从今日各项目的 PR 和 Issue 中，涌现出高度一致的几个技术发力点：
1.  **上下文与内存管理（痛点共鸣）**：长对话导致的无限膨胀和 OOM 是今日 OpenClaw、NanoBot 等共同面临的头号大敌。引入双层架构（轻量索引+按需加载）、主动 GC 和异步记忆整合（如 ZeroClaw 的“梦境模式”）成为共同选择。
2.  **多智能体协同与可视化编排**：单 Agent 已触及能力天花板。LobsterAI 和 PicoClaw 均落地了多 Agent 路由分发、子任务实时可观测面板；NanoBot 甚至实现了单容器多 Agent 的生产级部署。
3.  **强沙箱与隐私安全隔离**：AI 拥有代码执行权限后，防越狱成为刚需。NanoBot 和 PicoClaw 修复了多起沙箱逃逸漏洞，NullClaw 引入了隐私保护密钥审计，ZeptoClaw 则在探索 Air-gapped 级别的物理隔离。
4.  **Docker 与底层运行时优化**：为了降低部署门槛和提升冷启动速度，NanoBot 将冷启动压缩至 385ms，Moltis 修复了 Docker-in-Docker 的僵尸进程问题。

## 5. 差异化定位分析
*   **基础架构范式**：NullClaw 极致硬核，采用 Zig 语言去除 Curl 依赖，追求极致的跨平台底层性能；而 OpenClaw、CoPaw 则偏向 Node.js/Python 生态，追求上层业务迭代速度。
*   **功能侧重**：
    *   **全场景助手**（OpenClaw, NanoBot）：强推多端原生客户端与全渠道 IM 接入（Telegram、Slack、微信等），主打全天候陪伴。
    *   **工作流自动化**（Hermes Agent, PicoClaw）：侧重 Cron 定时任务、Webhook 联动，试图接管开发者的常规流水线。
    *   **情感化与桌面生态**（CoPaw）：独辟蹊径引入“桌面宠物”和插件应用市场，探索 C 端情感陪伴付费潜力。
*   **目标受众**：LobsterAI 重点显然在B端和团队协作（高度关注 UI 组件和系统级右键菜单集成）；NanoClaw 现阶段更偏向喜欢折腾部署的极客开发者。

## 6. 社区热度与成熟度
*   **第一梯队（快速试错与阵痛期）**：**OpenClaw, CoPaw**。两者社区热度极高，但由于激进的功能发布，目前均陷入了“阵痛期”——OpenClaw 在修网关 OOM，CoPaw 在修新插件引发的系统崩溃。它们迫切需要进入 Feature Freeze 以稳固质量。
*   **第二梯队（健康高速迭代期）**：**NanoBot, Hermes Agent, PicoClaw**。这些项目的社区充满活力，PR 合并高效，新功能（如流式推理、新模型集成）以极快速度落地，且能对 Bug 做出当日响应。
*   **第三梯队（架构重塑与巩固期）**：**ZeroClaw, NullClaw, LobsterAI**。它们正处于底层重构的关键节点，大量未合并的巨型 PR 悬而未决。社区互动较少，但代码质量要求极高，属于闷声干大事的阶段。

## 7. 值得关注的趋势信号
1.  **AI 正在跨越“被动响应”边界，进入“自动化常驻”阶段**：用户强烈要求 Agent 具备定时任务、心跳保活和后台自主执行的能力。开发者需要将 AI 视为一个持续运行的 Daemon Service，而非单纯的 Request-Response API。
2.  **“上下文预算”将成为 Agent SDK 的核心标配**：由于 Token 消耗极易失控（甚至产生死循环暴耗额度），网关级的 Token 熔断机制、推理努力程度控制（如 GPT-5 的 `reasoning_effort` 参数）以及异步结果交付，将成为企业评估 Agent 框架的核心指标。
3.  **安全合规将成为开源项目的分水岭**：近期频发的凭证泄露（如 Hermes 的 OAuth 漏洞）、沙箱逃逸和 RCE 漏洞警告所有从业者：**默认安全绝不仅是加个鉴权**。未来，基于 CSPRNG 的审批机制、严格的文件系统沙箱隔离和日志脱敏，是建立用户信任的底线。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-20)

> 数据来源：[NanoBot (github.com/HKUDS/nanobot)](https://github.com/HKUDS/nanobot)
> 分析师：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NanoBot 项目在过去24小时内呈现出**极高的社区活跃度与健康的迭代节奏**。项目今日处理了 31 条 Issue 更新（关闭 26 个，新开/活跃 5 个），同时有 35 条 PR 发生状态变更（其中 22 个被合并/关闭）。这表明维护团队正在高效地进行问题清理与代码合并，Issue 关闭率极高。

项目整体正处于**功能大爆发与架构优化并行**的阶段。从待合并的 PR 来看，社区正集中力量攻克**多智能体编排**和**性能优化**（如网关冷启动优化至 385ms），并积极扩展新的 LLM 提供商和通信渠道。虽然伴随产生了诸如 WebUI 渲染、内存无限增长等稳定性问题，但社区响应迅速，整体项目健康度良好。

---

## 2. 版本发布

**无新版本发布。**
项目当前最新版本为 `0.1.5.post3`。考虑到近期有大量关于 WebUI 升级、提供商扩展和性能优化的 PR 被合并，预计项目正在为下一个minor版本或post版本积累代码。

---

## 3. 项目进展

今日共有 22 个 PR 被合并或关闭，项目在以下方面取得了实质性进展：

*   **架构与性能大幅优化**：
    *   **[PR #3918](https://github.com/HKUDS/nanobot/pull/3918)**: 将 Gateway 冷启动时间从 ~6.9s 优化至 ~385ms（提升 94%）。通过三项延迟加载策略，极大提升了本地开发和云端部署的开发者体验。
    *   **[PR #3914](https://github.com/HKUDS/nanobot/pull/3914)**: 重构图像生成模块，将原本 766 行的文件拆分为每个提供商独立的模块。这为后续接入更多图像模型扫清了架构障碍。
*   **WebUI 体验全面升级**：
    *   **[PR #3906](https://github.com/HKUDS/nanobot/pull/3906)**: 全面升级 WebUI 设置页面，新增外观、模型、运行时等配置中心，优化了侧边栏组织控制。
    *   **[PR #3894](https://github.com/HKUDS/nanobot/pull/3894)**: 修复了 WebUI 中工具调用轨迹无法正常渲染的严重问题。
*   **生态与模型支持扩充**：
    *   **[PR #3910](https://github.com/HKUDS/nanobot/pull/3910)** & **[PR #3911](https://github.com/HKUDS/nanobot/pull/3911)**: 新增 StepFun (阶跃星辰) 图像生成提供商支持。
    *   **[PR #3912](https://github.com/HKUDS/nanobot/pull/3912)**: 完善本地模型提供商（vLLM, Ollama 等）的接入文档。
*   **多智能体部署与远程访问**：
    *   **[PR #3621](https://github.com/HKUDS/nanobot/pull/3621)**: 合并了针对 HuggingFace Spaces 单容器多 Agent 生产级部署方案的 PR，标志着多智能体编排已初步可用。
    *   **[PR #3891](https://github.com/HKUDS/nanobot/pull/3891)**: 新增 `bootstrap_allow_from` 配置，解决了 Docker/远程部署环境下 WebUI 无法通过浏览器访问的问题。

---

## 4. 社区热点

今日社区讨论的焦点集中在跨平台通信兼容性、架构设计与本地部署体验上：

*   **[Issue #193](https://github.com/HKUDS/nanobot/issues/193) (14👍)**：关于是否支持 Ollama API 的讨论。由于项目最初偏向 vLLM，大量本地开发用户强烈呼吁兼容 Ollama，这反映了“在本地运行私有化模型”是 NanoBot 用户的强诉求。
*   **[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) (14👍)**：关于 WebUI 打印内容显示错乱的 Bug。由于 5.13 源码更新导致前端渲染异常，严重影响了对话体验，引发了较多讨论。
*   **[Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) (11👍)**：关于对话历史 Prompt 前缀保持一致性的架构级探讨。反映了高级用户在开发复杂 Agent 时，对 NanoBot 底层上下文管理机制的关切。
*   **[Issue #1692](https://github.com/HKUDS/nanobot/issues/1692) (9👍, 👍4)**：Telegram 机器人重复回复问题（带 Markdown 和不带各回一次）。这是多渠道网关中的典型问题，用户对此体验感知强烈。

---

## 5. Bug 与稳定性

今日报告/处理的 Bug 主要集中在**长时间对话引发的内存溢出**、**多渠道网关通信**及**前端渲染**。按严重程度排列如下：

*   **🔴 严重 - 无限循环与上下文崩溃**
    *   **[Issue #2638](https://github.com/HKUDS/nanobot/issues/2638)**：当 LLM 发生错误或超时时，会话历史无限增长导致 Agent 彻底失去响应。
    *   **[Issue #3901](https://github.com/HKUDS/nanobot/issues/3901)**：设置 X (Twitter) 定时检查任务时，Agent 陷入死循环并达到最大工具调用次数限制。
*   **🟠 中等 - 渠道通信与鉴权问题**
    *   **[Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)**：WebSocket 渠道中，首次响应后对话意外关闭。
    *   **[Issue #3863](https://github.com/HKUDS/nanobot/issues/3863)**：微信扫码登录失败，提示“微信版本较低”，阻塞了国内用户的渠道接入。
*   **🟡 轻微 - 前端渲染与 UI 细节**
    *   **[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)**：WebUI 会话打印内容错乱（已有相关 fix PR #3894 合并）。
    *   **[Issue #3857](https://github.com/HKUDS/nanobot/issues/3857)**：网关启动成功但前端页面抛出 HTTP 500 错误。

---

## 6. 功能请求与路线图信号

从近期 Open 状态的 PR 和 Issues 来看，NanoBot 接下来的版本迭代将重点发力以下方向：

1.  **多智能体协作编排**：
    *   **[PR #3913](https://github.com/HKUDS/nanobot/pull/3913) (Nanobot Legion)**：展示了一个包含策划、开发、审核等多角色的单容器多 Agent 协同方案。
    *   **[PR #3908](https://github.com/HKUDS/nanobot/pull/3908)**：引入 `peers_update` WS 事件，为多实例间的发现与通信奠定基础。
2.  **隐私、安全与资源控制**：
    *   **[PR #3919](https://github.com/HKUDS/nanobot/pull/3919)**：针对 Shell 工具增加 `restrictToWorkspace` 安全限制，防止 Agent 越权访问宿主机文件。
    *   **[PR #3735](https://github.com/HKUDS/nanobot/pull/3735)**：新增 `/insights` 命令用于追踪历史 Token 消耗，满足企业级用户对成本管控的需求。
3.  **更多模型提供商集成**：
    *   **[PR #3916](https://github.com/HKUDS/nanobot/pull/3916)** & **[PR #3917](https://github.com/HKUDS/nanobot/pull/3917)**：社区正在密集接入 Skywork 和 APIFree 等针对 Agent 优化的免费/低成本 LLM 接口。

---

## 7. 用户反馈摘要

通过对今日活跃 Issue 的分析，提炼出真实用户的核心反馈如下：

*   **痛点 1：上下文遗忘与无限膨胀**。用户在使用 Agent 执行复杂、多步骤任务（如持续安装工具、定时抓取数据）时，经常遭遇内存溢出或模型遗忘前序指令（[Issue #2442](https://github.com/HKUDS/nanobot/issues/2442)）。集成长期记忆工具（如 [Issue #3888](https://github.com/HKUDS/nanobot/issues/3888) 提到的 Mnemon）呼声很高。
*   **痛点 2：Docker 部署门槛依然偏高**。网络环境、依赖冲突（npm install 卡死，[Issue #87](https://github.com/HKUDS/nanobot/issues/87)）以及本地访问限制等问题，让一部分初学者在最初的部署阶段就流失。
*   **满意度**：用户对项目结合“各类 IM 渠道（Telegram/飞书/微信等）”+“本地/云端模型”+“工具调用”的愿景非常兴奋。特别是对 HF Spaces 部署方案和多 Agent 组网的设计给予了高度评价。

---

## 8. 待处理积压

以下重要功能修复与架构改进仍处于 Open 状态等待合并，需维护者重点关注：

*   **🔥 核心系统优化**：
    *   **[Issue #2604](https://github.com/HKUDS/nanobot/issues/2604)**：请求将内存合并改为完全异步/主动 GC，以彻底解决会话无限增长的卡顿问题。
    *   **[PR #3869](https://github.com/HKUDS/nanobot/pull/3869)**：针对 DeepSeek 模型的消息硬化处理。由于 DeepSeek API 对空内容的容错率低，此 PR 极大影响使用 DeepSeek 的国内用户体验。
*   **🌟 关键新特性**：
    *   **[PR #3852](https://github.com/HKUDS/nanobot/pull/3852)**：Signal 私密通信渠道支持。
    *   **[Issue #3322](https://github.com/HKUDS/nanobot/issues/3322)**：请求增加 `bot on/off` 指令，允许人类随时接管对话，这是客服/工作流场景的刚需。
    *   **[Issue #3846](https://github.com/HKUDS/nanobot/issues/3846)**：多轮对话中保持 Skill 内容持久化的增强设计。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-20)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去24小时

---

## 1. 今日速览

Hermes Agent 项目在过去24小时内保持着**极高的社区活跃度**，共产生了 50 条 Issue 更新（38 新开/活跃，12 关闭）和 50 条 PR 更新（38 待合并，12 合并/关闭），未发布任何新版本。从反馈来看，项目近期引入的新功能（如 Kanban 看板、xAI OAuth、多平台网关）正经历高强度的社区测试，大量边界场景下的 Bug 被暴露出来，尤其是 Windows 平台的稳定性和 OAuth 认证安全问题较为突出。整体而言，项目正处于 **v0.14.0 发布后的快速迭代与补丁修复期**，核心维护者（如 teknium1）正在积极处理高优先级的阻断性问题。

---

## 2. 版本发布

*今日无新版本发布。项目当前最新版本为 v0.14.0。*

---

## 3. 项目进展

尽管没有发布新版本，但核心团队今日合并/关闭了 12 个 PR，重点解决了安全性、底层稳定性和系统兼容性问题：

*   **🚨 安全修复 (P0)**：[PR #28952](https://github.com/nousresearch/hermes-agent/pull/28952) 修复了 xAI OAuth 的凭证泄露漏洞。之前环境变量 `XAI_BASE_URL` 可被篡改将带凭证的请求重定向至恶意主机，现已将 inference endpoint 强制绑定至 `x.ai` 源站。
*   **底层配置修复 (P2)**：[PR #28949](https://github.com/nousresearch/hermes-agent/pull/28949) 修复了 Agent 初始化时的 `MINIMUM_CONTEXT_LENGTH` 硬性拦截问题，现在允许用户在 `config.yaml` 中为本地小显存模型强制覆盖小于 64K 的上下文长度。
*   **Git 兼容性 (P3)**：[PR #28955](https://github.com/nousresearch/hermes-agent/pull/28955) 修复了在无远端仓库（local-only）环境下，Hermes 误判所有本地提交为 "未推送" 从而拒绝清理临时 worktree 的问题。
*   **UI 优化 (P3)**：[PR #28948](https://github.com/nousresearch/hermes-agent/pull/28948) 改进了 Kanban 仪表盘的 CSS 布局，解决了在窄屏下任务 lane 无法自动换行导致页面溢出的问题。

---

## 4. 社区热点

今日社区讨论最密集的领域集中在**部署权限**和**多模型 Token 追踪**：

*   **Docker 部署阻碍 ([Issue #18482](https://github.com/nousresearch/hermes-agent/issues/18482))**：5 条评论。用户在自定义 `HOME` 目录启动最小化容器时遭遇 `Permission denied` 阻断性错误。这反映了社区在将 Hermes 容器化落地时的基础设施痛点。
*   **Token 追踪与可观测性需求 ([Issue #26696](https://github.com/nousresearch/hermes-agent/issues/26696) & [Issue #28858](https://github.com/nousresearch/hermes-agent/issues/28858))**：分别获得 4 条和 1 条评论。随着用户使用 Hermes 编排大量其他 AI 智能体，缺乏跨 Agent 的 Token 消耗全局视角成为主要痛点。开发者 @VasiHemanth 甚至已提交了 `TokenTelemetry` 社区插件原型供众人测试。
*   **流式工具调用兼容性 ([Issue #24523](https://github.com/nousresearch/hermes-agent/issues/24523))**：3 条评论。使用 `custom:llmgateway` 时的流式 Tool call 失败问题，根因已定位至上游 `openai-python` 库，正在等待上游修复。

---

## 5. Bug 与稳定性

今日新报出了多个高优先级（P1及以上）Bug，部分涉及系统级不可用，需引起高度关注：

*   **P0: xAI OAuth 凭证泄露** (上述 PR #28952，已合并修复)
*   **P1: Windows 平台工具全盘崩溃 ([Issue #28920](https://github.com/nousresearch/hermes-agent/issues/28920))**
    *   现象：v0.14.0 在 Windows 下任何涉及子进程的工具（如 terminal, read_file 等）均触发 `multiple values for keyword argument 'creationflags'` 报错。**目前尚无 Fix PR**。
*   **P1: Anthropic Max 额度异常耗尽 ([Issue #28902](https://github.com/nousresearch/hermes-agent/issues/28902))**
    *   现象：使用 OAuth Anthropic Max 且开启 `skills` 或 `session_search` 时，系统提示注入会在每轮消耗额外额度，导致迅速触发 400 报错。**目前尚无 Fix PR**。
*   **P1: Provider 静默降级绕过免费额度 ([Issue #27132](https://github.com/nousresearch/hermes-agent/issues/27132))** (已关闭)
    *   现象：使用 Ollama/vLLM 等指向局域网 IP 的本地模型时，请求静默穿透至 OpenRouter 收费模型。
*   **P2: 数据库初始化顺序错误 ([Issue #28844](https://github.com/nousresearch/hermes-agent/issues/28844))**
    *   现象：Kanban 在建立 `session_id` 索引时，该字段尚未被迁移脚本添加，导致所有诊断命令受阻。

---

## 6. 功能请求与路线图信号

从当前的 Feature Request 和对应的 PR 活跃度来看，以下几个生态拓展方向极有可能在近期合入主干：

*   **多模态与生成集成**：[Issue #11195](https://github.com/nousresearch/hermes-agent/issues/11195) 提议增加 Codex 图像生成后端，填补当前生成链路的空缺。
*   **特定领域 Agent 自动化**：[PR #28959](https://github.com/nousresearch/hermes-agent/pull/28959) 提出了针对视频剪辑的 **DaVinci Resolve 集成插件**；[PR #28483](https://github.com/nousresearch/hermes-agent/pull/28483) 则提交了 Marketing Agent Factory 的 MVP。
*   **Webhook 通用化**：[Issue #28913](https://github.com/nousresearch/hermes-agent/issues/28913) 呼吁支持脱离 GitHub 格式的 Generic Webhooks，以满足更多内部系统的触发接入。
*   **MoA (Mixture-of-Agents) 架构解耦**：[PR #28950](https://github.com/nousresearch/hermes-agent/pull/28950) 试图将 MoA 能力从特定的 OpenRouter 解耦，转而支持 Vercel AI Gateway 等统一网关。

---

## 7. 用户反馈摘要

通过今日的 Issue 梳理，当前用户的真实使用体验反馈如下：

*   **痛点 1：多平台网关上下文丢失**：无论是 [WhatsApp 的回复引用丢失 (#28823)](https://github.com/nousresearch/hermes-agent/issues/28823)，还是 [Telegram 的 topic 路由切断 (#27487)](https://github.com/nousresearch/hermes-agent/issues/27487)，以及 [Matrix 的引用被剔除 (#28962)](https://github.com/nousresearch/hermes-agent/pull/28962)，都表明 Hermes 在作为“多平台消息中枢”时，对原生富文本/元数据的保留能力不足。
*   **痛点 2：长会话的时间感知错乱**：用户 ([Issue #28290](https://github.com/nousresearch/hermes-agent/issues/28290)) 抱怨 Agent 在跨越数天的对话中，只能“猜测”而非确切知道事件发生的时间边界，亟需底层注入时间戳上下文机制。
*   **痛点 3：系统提示符过于强硬**：API 用户反馈 ([Issue #28876](https://github.com/nousresearch/hermes-agent/issues/28876))，系统强制关闭了 Markdown 渲染，且无法在配置中覆盖，导致通过 API 调用的前端展示非常单调。

---

## 8. 待处理积压

以下关键积压问题需要核心团队的关注与排期：

*   **IP 合规风险**：[Issue #28890](https://github.com/nousresearch/hermes-agent/issues/28890) 指出现有的 `skills/creative/baoyu-comic` 技能包含了受商标保护的漫画角色。存在潜在的项目法务风险，需尽早审计移除。
*   **Windows 桌面灾难性崩溃**：[Issue #26487](https://github.com/nousresearch/hermes-agent/issues/26487) 报告在安装 Gateway 时可能引发无限弹窗直到耗尽系统资源，此 P1 级别 Bug 已活跃数日，极大阻碍了非开发者群体的采用。
*   **Agent 压缩性能损耗**：[PR #28957](https://github.com/nousresearch/hermes-agent/pull/28957) 提出延迟压缩模型的可行性检查，该动作目前导致每次调用平白增加 170-290ms 的开销，是一个亟待合并的性能优化提案。
*   **CI/CD 流水线死锁**：[PR #28861](https://github.com/nousresearch/hermes-agent/pull/28861) 暴露了当前测试套件会在 teardown 阶段发生线程泄漏死锁，导致每次 CI 都要跑满 20 分钟超时。这是影响所有 PR 合并效率的基础设施瓶颈。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-05-20)

> **数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **分析周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持了**高度活跃**的开发与社区互动状态。项目成功合并了 7 个 Pull Requests，并关闭了 5 个 Issues，呈现出健康的“清积压、推进度”趋势。今日发布了最新的 `nightly` 构建（`v0.2.8-nightly.20260519`），标志着多智能体协作、多模态支持和流式推理等核心功能的持续迭代。社区方面，围绕提供商兼容性（如 OpenAI、DeepSeek）和异步多智能体架构的讨论成为焦点。当前仍有 9 个 PR 待合并，显示出良好的功能储备和持续向前推进的势头。

---

## 2. 版本发布

- **版本号**: `nightly: Nightly Build` (v0.2.8-nightly.20260519.941bac23)
- **更新性质**: 自动化每夜构建版本，包含最新合并的代码。
- **注意事项**: 官方提示该版本为自动化构建，**可能不稳定，请谨慎用于生产环境**。
- **变更范围**: 涵盖自 `v0.2.8` 分支以来至 `main` 分支的所有最新提交。
  🔗 **完整变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

## 3. 项目进展

今日共有 7 个 PR 被合并/关闭，显著提升了项目的稳定性与功能丰富度，主要进展包括：

- **多模态与推理能力增强**：
  - [PR #2755](https://github.com/sipeed/picoclaw/pull/2755) (CLOSED): 新增了对流式输出 `reasoning_content`（思考过程）和视频媒体的支持，主要由小米 Mimo 提供商驱动。
  - [PR #2740](https://github.com/sipeed/picoclaw/pull/2740) (CLOSED): 修复了 DeepSeek 提供商在流式传输时丢失思考模式 Token 的兼容性问题。
- **多智能体架构演进**：
  - [PR #2761](https://github.com/sipeed/picoclaw/pull/2761) (CLOSED): 允许同步子智能体显式指定 `agent_id`，使得同步任务也能像异步任务一样进行精细化的路线选择。
- **本地推理与硬件支持扩展**：
  - [PR #2703](https://github.com/sipeed/picoclaw/pull/2703) (CLOSED): 引入了 Intel OpenVINO Model Server 支持，用户现在可以在 Intel CPU/GPU/NPU 上流畅运行本地 LLM。
- **会话管理与底层体验优化**：
  - [PR #2491](https://github.com/sipeed/picoclaw/pull/2491) (CLOSED): 添加了 `/status`、`/compact`、`/new` 斜杠命令，极大改善了手动管理会话上下文的体验。
  - [PR #2892](https://github.com/sipeed/picoclaw/pull/2892) (CLOSED): 实现了配置驱动的双 opt-in 模型提供商流式传输支持。

---

## 4. 社区热点

今日讨论最活跃、关注度最高的议题集中在**多智能体架构规划**与**特定提供商的兼容性**上：

- **OpenAI Codex 兼容性问题** ([Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) | 👍: 4 | 评论: 5):
  - **诉求**：用户在使用 OpenAI ChatGPT 后端的 Codex OAuth 时，收到空的助手响应。这反映了重度用户将 PicoClaw 接入复杂或非标准 OpenAI 端点时的强烈需求。
- **Agent 重构第二阶段路线图** ([Issue #1934](https://github.com/sipeed/picoclaw/issues/1934) | 评论: 7):
  - **诉求**：核心维护者 @yinwm 发起的“单 Pico 内多智能体协作”草案讨论。这表明项目正在向企业级复杂任务编排方向发展，社区对此寄予厚望。
- **异步结果交付策略** ([Issue #2829](https://github.com/sipeed/picoclaw/issues/2829) & [PR #2830](https://github.com/sipeed/picoclaw/pull/2830) | 评论: 1):
  - **诉求**：用户提出当父智能体生成子智能体时，应引入明确的异步结果交付策略，避免无意义的二次父级回溯。相关 FIX PR 已提交，展现了社区对智能体执行逻辑的深度思考。

---

## 5. Bug 与稳定性

今日暴露的重点 Bug 集中在**系统启动稳定性**、**安全边界**和**提供商解析**上：

1. **P0 严重 (系统启动崩溃循环) - [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)**：
   - **问题**：当系统网关异常退出且 PID 被其他系统进程（如 `systemd-resolved`）复用时，PicoClaw 会因为 PID 文件校验不严谨而陷入启动崩溃循环。
   - **状态**：**已有 FIX PR** - [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) 提出了在阻止启动前验证网关真实身份的机制。
2. **P1 高危 (沙箱逃逸漏洞) - [Issue #2688](https://github.com/sipeed/picoclaw/issues/2688)** (CLOSED):
   - **问题**：安全限制阻断了直接的 `cat` 或 `ls` 读取，但用户可以通过 `find /` 命令枚举整个文件系统的路径。
   - **状态**：已关闭（推测已在近期代码中修复加固）。
3. **P1 高危 (提供商响应解析异常) - [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)**:
   - **问题**：特定 OpenAI API 流式响应格式导致 PicoClaw 错误触发“模型返回空响应”后备机制。

---

## 6. 功能请求与路线图信号

从开放的 PR 和 Issues 中，可以清晰看到接下来的版本演进方向：

- **上下文预算与重构管理**：
  - [PR #2895](https://github.com/sipeed/picoclaw/pull/2895) 正在修复 Seahorse 引擎在处理最新消息时的上下文预算溢出问题，这将极大增强 Agent 长时间运行时的记忆管理稳定性。
  - [PR #2781](https://github.com/sipeed/picoclaw/pull/2781) 试图优化 Token 消耗，在工具调用时不重复发送庞大的技能目录 XML。这在迈向多轮复杂工具调用场景时非常关键。
- **界面与模型元数据追踪**：
  - [PR #2897](https://github.com/sipeed/picoclaw/pull/2897) 旨在跨历史记录持久化并显示 `model_name`，解决用户跨会话、多模型切换时的辨识度问题。
- **潜在的下一版本重点**：多智能体异步路由编排（[PR #2830](https://github.com/sipeed/picoclaw/pull/2830)）与统一提供商后端架构重构（[PR #2896](https://github.com/sipeed/picoclaw/pull/2896)）极有可能成为下一个大版本的核心。

---

## 7. 用户反馈摘要

综合今日的 Issues 与评论，提炼出以下真实用户场景与痛点：

- **复杂任务场景的痛点**：用户正在尝试让 PicoClaw 执行“每小时定时任务”（[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)）或“持续监控特定数据”，这表明部分用户正将其作为**自动化常驻 Agent** 使用，对 Channel 稳定性和 Cron 调度的可靠性要求极高。
- **配置迁移体验不佳**：用户反馈在更新版本后配置文件需要手动调整，而默认的 example 配置严重滞后（[Issue #2771](https://github.com/sipeed/picoclaw/issues/2771)），增加了新手上手的摩擦力。
- **源码编译门槛**：部分用户在尝试按照 README 从源码编译时遇到了 `launcher` 找不到的问题（[Issue #2753](https://github.com/sipeed/picoclaw/issues/2753)），说明项目的构建流程文档亟待更新或简化。

---

## 8. 待处理积压

以下长期积压或高影响力的 Issue/PR 需要核心团队予以关注和响应：

- **核心架构阻塞**：
  - [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) (OPEN, 逾 1 个月未合并)：标准化通道标识并将其与提供商类型解耦。这是实现“多个相同提供商实例”的基础，目前缺乏维护者评论，需尽快排期评估。
- **重要用户体验修复**：
  - [PR #2788](https://github.com/sipeed/picoclaw/pull/2788) (OPEN)：为 Session API 中的每条消息添加 `created_at` 时间戳，前端依赖该修复以显示准确时间。
  - [PR #2647](https://github.com/sipeed/picoclaw/pull/2647) (OPEN)：修复 Web Search 工具的 YAML 配置支持并默认启用 DuckDuckGo。这是强需求功能，但长期停滞。
- **长期未响应的安全/配置议题**：
  - [Issue #2774](https://github.com/sipeed/picoclaw/issues/2774) (OPEN)：关于引入无限上下文和历史压缩插件的提案。建议维护者明确是否纳入官方路线图，以引导社区贡献方向。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-20)

> 数据来源：[NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw) | 分析师：AI 智能体与个人 AI 助手开源项目分析组

---

## 1. 今日速览

NanoClaw 项目在过去24小时内保持了**高活跃度**，社区开发者提交了多达 20 项 Pull Requests（其中 5 项已被合并/关闭），同时新增了 3 个活跃的 Issues。整体来看，项目重心目前明显偏向于**多渠道适配优化（尤其是 WhatsApp）、安全加固以及底层架构的重构**。虽然今天没有发布新的版本，但大量聚焦于修复和优化的 PR 涌入，表明项目正处于为下一个稳定版本做密集准备和漏洞打磨的阶段。

---

## 2. 版本发布

**无新版本发布。** 
今日无新的 Release 或 Tag 推出。鉴于目前存在大量待合并的修复类 PR，预计项目在完成当前的渠道适配与安全审查后，可能会进行一次集中的版本迭代。

---

## 3. 项目进展

今日共有 **5 个 PR 被关闭或合并**，涵盖安全修复、工具集成及基础架构调整：

*   **PR #2547 [CLOSED] fix(webhook-server): default-bind to loopback instead of 0.0.0.0**
    *   **进展：** 修复了 webhook 服务器默认监听 `0.0.0.0` 导致的内网暴露风险，将其改为默认 `127.0.0.1`。
    *   **意义：** 极大提升了自部署用户的默认安全性。*(注：该修复同时对应待合并的规范版本 PR #2546)*
*   **PR #2549 [CLOSED] Phase 4: bash_tool + python_tool**
    *   **进展：** 为 agent-runner 引入了 `bash_tool` 和 `python_tool`，允许 AI 智能体在沙盒中执行代码。
    *   **意义：** 核心功能拓展，显著增强了智能体的自主执行能力。
*   **PR #2559 [CLOSED] Fix/compact boundary progress event**
    *   **进展：** 修复了压缩边界进度事件的逻辑。
*   **PR #815 [CLOSED] feat: progressive message streaming for edit-capable channels**
    *   **进展：** 为 Telegram 等支持消息编辑的渠道引入了“打字机”般的流式输出体验。
*   **PR #61 [CLOSED] chore: add WhatsApp auth retry logic and additional Anthropic env vars**
    *   **进展：** 增强了 WhatsApp 认证的重试机制，提升长期运行的稳定性。

**整体推进：** 项目在安全基线（网络监听隔离）和智能体能力（代码执行工具）上迈出了重要一步。

---

## 4. 社区热点

目前社区最关注的问题是基础设施与上下文加载策略：

*   **🔥 [Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503) - nanoclaw.dev has an invalid ssl cert right now**
    *   **动态：** 官方网站的 SSL 证书失效问题。该 Issue 创建于 3 月底，目前已有 **19 条评论**，今日依然活跃。
    *   **诉求：** 严重影响新用户的首次访问和信任度，社区呼吁官方尽快续签证书或排查 Nginx/Caddy 配置。
*   **💡 [Issue #2550](https://github.com/nanocoai/nanoclaw/issues/2550) - feat: two-tier project context loading**
    *   **动态：** 由开发者 @dvirarad 发起的高级特性讨论。
    *   **诉求：** 针对多项目并行的重度用户，当前全局加载上下文导致令牌消耗过大。建议引入“轻量级索引 + 按需加载状态文件”的双层架构，直指个人 AI 助手在复杂工作流中“记忆过载”的核心痛点。

---

## 5. Bug 与稳定性

今日报告了多个与 Agent SDK 和渠道通信相关的 Bug，部分已有对应的 Fix PR：

1.  **[严重] Claude Agent SDK 消息解析失效** 
    *   **Bug：** [Issue #2555](https://github.com/nanocoai/nanoclaw/issues/2555) 当有多条挂起消息被包裹在 `<messages>` 标签中时，Claude Agent SDK 会停止调用 API 并返回合成的无意义响应。
    *   **状态：** ✅ **已有修复**。开发者 @IamAdamJowett 随即提交了 [PR #2556](https://github.com/nanocoai/nanoclaw/pull/2556) 移除了该信封包装。
2.  **[严重] WhatsApp 渠道 Bug 复合体**
    *   **Bug：** [PR #2552](https://github.com/nanocoai/nanoclaw/pull/2552) 中指出 WhatsApp 渠道无法正确渲染 @用户 标签，且存在关机竞态条件导致凭证被意外擦除的严重隐患。
    *   **状态：** ✅ **已在 PR 中提供修复**。
3.  **[中等] Setup 流程配置错误**
    *   **Bug：** [PR #2558](https://github.com/nanocoai/nanoclaw/pull/2558) 初始化配置中 OneCLI 的默认 URL 指向了 `app` 子域而非 `api` 子域，导致初始化失败。[PR #2551](https://github.com/nanocoai/nanoclaw/pull/2551) 也修复了 WhatsApp 二维码浏览器模式的参数错误。
4.  **[低] 消息轮询重复文本**
    *   **Bug：** [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) 在 turn 中途触发 send_message 时会产生重复文本。

---

## 6. 功能请求与路线图信号

从近期的 Issues 和 PRs 可以看出 NanoClaw 的演进方向，以下功能信号强烈：

*   **信号一：WhatsApp 企业级适配加速**
    *   除了上述的修修复补，[PR #2553](https://github.com/nanocoai/nanoclaw/pull/2553) 专门为 WhatsApp 增加了格式化容器技能，确保 Agent 输出符合 WhatsApp 的特殊语法。这表明项目正在加大对“非极客/移动端”主流用户群体的渗透。
*   **信号二：本地数据持久层重构**
    *   [PR #1723](https://github.com/nanocoai/nanoclaw/pull/1723) 试图引入带有 SQLite 抽象层的数据库适配器。如果合并，将大幅改善本地个人助手的数据检索和状态管理能力。
*   **信号三：安全机制全面升级**
    *   [PR #2545](https://github.com/nanocoai/nanoclaw/pull/2545) 提议将审批卡ID的生成从 `Math.random()` 升级为基于 `crypto.randomBytes()` 的 CSPRNG，表明项目对于防伪造和权限控制的要求正在提高。

---

## 7. 用户反馈摘要

从提单内容可以提炼出现有用户的核心场景与痛点：

*   **痛点：多项目管理认知负担重。** 用户不仅将 NanoClaw 当作单一助手，更试图整合找工作、写书、办展览等多个实体的管理工作，当前的扁平化上下文管理已遇瓶颈。
*   **痛点：对接官方 SDK 时的黑盒问题。** Issue #2555 显示，当底层容器打包格式与 Anthropic Claude SDK 发生不兼容时，系统没有报错而是“静默成功返回空响应”，这给开发者排查带来了极大困扰。
*   **满意度：社区响应极其敏捷。** （如发现问题后立刻同日提交代码修复），显示了项目良好的极客氛围和响应速度。

---

## 8. 待处理积压

以下是长期悬而未决或需要官方重点关注的积压项目：

*   **🚨 官方基础设施故障：[Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503)** 
    SSL 证书过期近两个月未修复，属于严重挫伤外部信任度的 P0 级别视觉问题，强烈建议核心团队立即处理。
*   **重型重构 PR 审核停滞：**
    *   [PR #1723](https://github.com/nanocoai/nanoclaw/pull/1723) (SQLite 适配层，近 40 天未合并)
    *   [PR #815](https://github.com/nanocoai/nanoclaw/pull/815) (流式输出，近 2 个月状态停滞)
    *   *建议：* 此类架构级改动如果迟迟不能合入主干，会导致后续的日常修复 PR 极易产生冲突。建议维护者划定特定的 Feature Freeze 窗口来集中处理此类技术债。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw (github.com/nullclaw/nullclaw) 项目 2026-05-20 动态日报：

# NullClaw 项目日报 (2026-05-20)

## 1. 今日速览
NullClaw 项目在过去 24 小时内保持了**极高的开发活跃度与社区互动热度**。虽然今日没有新的版本发布，但共有 12 个 Pull Requests 发生了状态更新，其中 7 个核心修复与功能 PR 被成功合并/关闭，显示出维护团队正在高频进行代码审查与功能收敛。基础架构方面，多平台兼容性（特别是 Windows DNS 与 Discord 网关稳定性）和底层 HTTP 调用逻辑的重构取得了实质性进展。此外，项目的破冰活动（如 WB × OpenSource Hackathon）持续为项目输送高质量代码，整体生态呈现健康、快速迭代的态势。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，显著提升了项目在网络通讯、安全性和集成扩展方面的能力：
*   **网络与稳定性修复**：
    *   [#920 fix(net): fix Windows DNS resolution for non-localhost hostnames](https://github.com/nullclaw/nullclaw/pull/920)：修复了 Windows 环境下非 localhost 主机名解析失败导致无法连接远程 Provider 的严重问题。
    *   [#910 fix(discord,websocket): gateway stability...](https://github.com/nullclaw/nullclaw/pull/910)：提交了 5 项 Discord 网关稳定性修复，并在 macOS、Linux、Android 等多架构上通过了 12 小时彻夜测试，极大增强了长连接的健壮性。
*   **安全与执行层**：
    *   [#883 probe: resolve executable before spawning child process](https://github.com/nullclaw/nullclaw/pull/883)：在 `probe.zig` 中增加了执行前的路径解析检查，成功规避了 Zig stdlib 中 `execve` 调用失败可能导致子进程残留的 Bug。
*   **集成与企业级功能**（注：部分可能为 Hackathon 优秀贡献）：
    *   [#912 feat(gateway): synchronous /webhook for paired-token workers](https://github.com/nullclaw/nullclaw/pull/912)：为 Worker 节点引入了同步 webhook 支持，填补了 nullboiler Dispatch 集成中的高优先级缺口。
    *   [#911 feat(audit): privacy-preserving secret triage for workspace audit](https://github.com/nullclaw/nullclaw/pull/911)：引入了基于 LLM 的隐私保护密钥分类功能，在不接触原始密钥的情况下进行审计评估。
    *   [#908 Project hktn](https://github.com/nullclaw/nullclaw/pull/908) & [#885 Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885)：这两项来自 WB × OpenSource Hackathon 的 PR 均已关闭，分别增强了推理流/成本跟踪和数据治理层能力。

## 4. 社区热点
*   **Android/Termux 环境编译问题**：[#868 [bug] zig build fails on Android/Termux (aarch64) with AccessDenied](https://github.com/nullclaw/nullclaw/issues/868) 今日有新的活跃评论。该 Issue 反映了在特定移动环境（Xiaomi Redmi Note 9 + LineageOS 22.2 + Zig 0.16.0）下编译失败的情况，引发了开发者在非标准 Linux 环境下文件系统权限和链接机制的关注。
*   **Hackathon 赛道热度不减**：从已关闭的 PR 记录可以看出，`WB × OpenSource Hackathon` 吸引了大量开发者提交高质量代码（如数据治理层、基础设施稳定性和搜索增强），说明 NullClaw 作为 AI 智能体基础设施在开源黑客松社区具有较高的吸引力和实战价值。

## 5. Bug 与稳定性
今日报告/活跃的 Bug 主要集中在跨平台编译与系统级网络调用上：
1.  **[高] Android/ARM64 编译链接失败**：[#868](https://github.com/nullclaw/nullclaw/issues/868) 报告了在 Termux 环境下执行 `zig build` 时触发 `AccessDenied` 错误（失败于 `options.zig` 的 linkat 操作）。目前尚无明确的修复 PR，但对于支持边缘设备部署有一定的阻碍。
2.  **[中] Windows DNS 解析异常**（已修复）：今日合并的 [PR #920](https://github.com/nullclaw/nullclaw/pull/920) 证实了旧版代码在 Windows 上对所有非 localhost 域名直接返回 `UnknownHostName` 的缺陷，此问题现已修复。
3.  **[中] 子进程僵尸漏洞**（已修复）：[PR #883](https://github.com/nullclaw/nullclaw/pull/883) 暴露了 Zig 语言标准库的一个缺陷（`execve` 失败不抛出错误导致子进程泄露），NullClaw 通过在应用层提前校验可执行文件路径规避了该风险。

## 6. 功能请求与路线图信号
通过对近期 PR 的分析，项目未来的迭代重心正向**底层深度优化**与**企业级集成**倾斜：
*   **去除 Curl 强依赖**：目前处于 Open 状态的 [PR #881](https://github.com/nullclaw/nullclaw/pull/881) 正在将底层的 HTTP 调用从 `curl` 子进程替换为原生的 `std.http` 包装器。这不仅是性能优化，也可能成为下一版本的 Breaking Change 信号。
*   **原生存储与休眠机制**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878) 试图在 POSIX 系统上使用真正的 `nanosleep` 替代协程级别的 `yield`，表明项目在作为长驻后台服务时对系统资源调度的精细化管理要求日益提高。
*   **任务调度与自动化**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 引入了强大的 Cron 子代理引擎和 JSON CLI 输出，显示出项目正致力于打造完善的定时任务和自动化工作流闭环。

## 7. 用户反馈摘要
*   **边缘部署需求强烈**：通过 Issue #868 可以看出，部分用户正尝试将 NullClaw 部署在 Android 甚至刷入 Linux 的移动设备上（Termux 环境下的 aarch64 架构）。这表明作为“个人 AI 助手”，用户对其轻量化和跨平台（尤其是随身携带的设备）运行有着真实诉求。
*   **Zig 版本迭代带来的阵痛**：用户报告在 Zig 0.16.0 版本下遇到编译阻碍，目前 [PR #887](https://github.com/nullclaw/nullclaw/pull/887) 试图修复 Win/Linux 上的相关构建问题，维护者需要尽快拉齐多平台的构建兼容性。

## 8. 待处理积压
以下重要 PR 仍处于 Open 状态且已持续数日，建议维护团队重点关注：
*   **[重要底层重构]** [#881 refactor(http): remove runtime curl subprocesses](https://github.com/nullclaw/nullclaw/pull/881)：涉及面极广的重构，关乎核心网络请求架构，需要谨慎评估测试覆盖率后推进合并。
*   **[重要构建修复]** [#887 Fix build with zig v0.16 for win/linux](https://github.com/nullclaw/nullclaw/pull/887)：直接决定了新版 Zig 用户的编译体验，建议尽快 Review。
*   **[大型功能合并]** [#783 feat(cron): cron subagent...](https://github.com/nullclaw/nullclaw/pull/783)：自 4 月初开启，包含完整的任务调度引擎，属于里程碑式功能，需评估是否具备合入主线的条件。
*   **[健康度监控]** [#891 fix(providers): preserve curl probe transport failures](https://github.com/nullclaw/nullclaw/pull/891)：涉及 Provider 探针的错误精细化捕获，对系统可观测性至关重要。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-20)

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 分析周期：过去 24 小时

## 1. 今日速览

LobsterAI 在过去 24 小时内呈现出**“低Issue互动、高PR吞吐”**的开发活跃状态。项目今日无新版本发布，也没有用户新开 Issue，但开发团队及社区贡献者活跃度极高，共处理了 **50 条 Pull Requests**。其中，24 个 PR 被成功合并或关闭，26 个 PR 处于待合并状态（包含多个新提交的大型特性）。

整体来看，项目核心功能正在密集迭代，重点聚焦在**多 Agent 编排、UI/UX 体验优化、国际化修复及底层运行时升级**。大量积压的社区 PR 在今日获得了更新，项目健康度保持在较高水平，代码合并节奏稳健。

## 2. 版本发布

**无新版本发布。** 

项目目前处于密集的功能开发和代码合并阶段，预计在当前批次的大量特性（如多Agent编排、UI重构等）稳定后，将释出新的版本。

## 3. 项目进展

今日项目整体向前迈进了坚实的一步，核心关注点从底层运行时到前端交互均有涉及。以下为今日已合并/关闭的重要 PR：

*   **🤖 多 Agent 编排与可观测性落地**
    *   [PR #680 feat(cowork): 多 Agent 编排与子任务实时可观测](https://github.com/netease-youdao/LobsterAI/pull/680): （作者: Aoxiang-001）这是一个里程碑式的合并。它将 OpenClaw 的多 Agent 编排从“黑箱”变为完全透明，用户可配置 Agent Router 派发任务，并在侧边栏实时查看子 Agent 的完整对话历史。
    *   [PR #2011 feat: subagent session sidebar display and detail view](https://github.com/netease-youdao/LobsterAI/pull/2011): （作者: btc69m979y-dotcom）配合上述编排功能，新增了子代理的独立详情页和树形结构浏览，修复了 session key 解析等底层问题，完善了多 Agent 交互体验。
*   **🎨 Artifacts 与 UI 交互升级**
    *   [PR #2012 Feat/2026.5.18 artifacts](https://github.com/netease-youdao/LobsterAI/pull/2012): （作者: liugang519）引入了 Artifacts 核心功能支持。
    *   [PR #2013 fix: context window slider snap-to-preset and K/M text input](https://github.com/netease-youdao/LobsterAI/pull/2013): （作者: btc69m979y-dotcom）优化了上下文窗口滑块的交互，支持 32K/200K 等预设点自动吸附，并允许在输入框使用 `K/M` 简写，大幅提升了配置效率。
*   **🛡️ 稳定性与基础设施**
    *   [PR #2014 fix: weixin qr gaateway restart](https://github.com/netease-youdao/LobsterAI/pull/2014): （作者: fisherdaddy）修复了微信二维码网关的重启异常。
    *   [PR #2015 fix: handle openclaw compaction retries and tool result gaps](https://github.com/netease-youdao/LobsterAI/pull/2015): （作者: fisherdaddy）正在处理 OpenClaw 压缩重试和工具调用结果空缺的边界情况，目前在 Open 状态。

## 4. 社区热点

过去 24 小时内，虽然新开 Issue 为 0，但大量处于待合并（OPEN）状态的 PR 在今天产生了更新或被重新激活，反映了社区开发者的持续投入：

*   **UI/UX 焕新重构系列（作者：gongzhi-netease, 0xFLX）**
    *   [PR #1628 feat(ui)：优化模型选择器 UI 及统一会话工具栏样式](https://github.com/netease-youdao/LobsterAI/pull/1628)：重构模型选择器组件，增加供应商图标，解决下拉面板被裁剪的痛点。
    *   [PR #1636 feat(cowork): 聊天窗口新增悬浮「滚动到底部」按钮](https://github.com/netease-youdao/LobsterAI/pull/1636)：补齐了长对话场景下的标准交互能力。
    *   [PR #1637 feat(cowork): AI 回复消息新增「重新生成」按钮](https://github.com/netease-youdao/LobsterAI/pull/1637)：补齐了 AI 对话的标准重试功能。
*   **集成与个性化功能热点（作者：BucleLiu）**
    *   [PR #1629 feat(avatar): add user avatar settings feature](https://github.com/netease-youdao/LobsterAI/pull/1629)：引入包含 6 款 SVG 预置头像的用户自定义头像系统。
    *   [PR #1631 feat(mcp): mcp support quick add templates](https://github.com/netease-youdao/LobsterAI/pull/1631)：为 MCP 模块增加 FileSystem、SQLite 等常用服务的快捷添加模版，极大降低用户配置门槛。

## 5. Bug 与稳定性

今日报告的新 Bug 数量为 0，但团队和社区合入了多个 Fix PR，积极处理了已有问题：

1.  **P1 - 运行时/网关异常**：
    *   微信网关重启故障已通过 [PR #2014](https://github.com/netease-youdao/LobsterAI/pull/2014) 修复。
    *   OpenClaw 运行时的 tool result gaps 问题正在通过 [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) 进行修复。
2.  **P2 - 搜索与索引 Bug**：
    *   [PR #1634 fix(cowork): 全局搜索修复与搜索体验升级](https://github.com/netease-youdao/LobsterAI/pull/1634) 修复了搜索范围被当前 Agent 隐式限制导致搜索结果不可预测的严重逻辑 Bug。
3.  **P3 - 安全与脱敏**：
    *   [PR #1661 fix(log): 脱敏导出日志中的敏感信息](https://github.com/netease-youdao/LobsterAI/pull/1661) 修复了导出日志中可能暴露 API Key / Bearer token 明文的安全隐患。
4.  **P4 - 国际化与文案**：
    *   [PR #1639 fix(i18n): 修复多处按钮 tooltip 硬编码英文未国际化](https://github.com/netease-youdao/LobsterAI/pull/1639) 统一了 tooltip 的 i18n 规范。

## 6. 功能请求与路线图信号

尽管今日无新的功能请求 Issue，但从正在处理的活跃 PR 中，我们可以明确识别出项目下一阶段的**路线图信号**：

1.  **深度拥抱 MCP 与本地工具链**：通过 [PR #1631 (MCP 快捷模版)](https://github.com/netease-youdao/LobsterAI/pull/1631) 和 [PR #1663 (OpenClaw v2026.4.12 升级)](https://github.com/netease-youdao/LobsterAI/pull/1663) 看出，项目正在强化作为本地 AI 工具集线器的能力。
2.  **多 Agent 工作流的可视化闭环**：随着 [PR #680](https://github.com/netease-youdao/LobsterAI/pull/680) 和 [PR #1660 (非 main agent 欢迎页个性化)](https://github.com/netease-youdao/LobsterAI/pull/1660) 的推进，多 Agent 协同不再是底层概念，而是已转化为用户可见、可操作的 UI 体系。
3.  **系统级集成**：[PR #1642 feat: add right click menu](https://github.com/netease-youdao/LobsterAI/pull/1642) 请求在 Windows 资源管理器中添加右键菜单快速呼起应用，表明项目正在向更深层的水位操作系统集成迈进。

## 7. 用户反馈摘要

由于过去 24 小时内未产生公开的 Issues，暂无法从 Issue 评论中直接提取新鲜的用户反馈。

但从开发者的 Commit 及 PR 描述中可以侧面推断出：**长对话下的交互疲劳（缺乏一键回到底部、缺乏重新生成按钮）**、**第三方大模型配置门槛高（模型选择器不直观、API 链接过期）** 以及 **多 Agent 调试困难（黑箱状态）** 是近期重点解决的痛点。开发者表现出了极高的产品同理心，各项 PR 均直击日常高频操作的不便之处。

## 8. 待处理积压

目前有 26 个待合并的 PR，其中部分已被标记为 `stale`（陈旧/积压），需要项目维护者重点关注并进行代码审查或 Rebase 评估：

*   **亟待 Review 的大型特性 PR**：
    *   [PR #1628 模型选择器重构](https://github.com/netease-youdao/LobsterAI/pull/1628)
    *   [PR #1629 用户头像系统](https://github.com/netease-youdao/LobsterAI/pull/1629)
    *   [PR #1631 MCP 快捷模版](https://github.com/netease-youdao/LobsterAI/pull/1631)
    *   [PR #1642 系统右键菜单集成](https://github.com/netease-youdao/LobsterAI/pull/1642)
*   **安全与基础体验相关**：
    *   [PR #1661 日志敏感信息脱敏](https://github.com/netease-youdao/LobsterAI/pull/1661) （此涉及安全，建议提高 Review 优先级）
    *   [PR #1667 Qwen 控制台链接向百炼迁移](https://github.com/netease-youdao/LobsterAI/pull/1667)

**分析师建议：** 今天的合并动作表明主分支正在经历密集的 Feature Merge。建议维护团队近期**暂缓接纳全新的大型 Feature，集中精力对现有的 20+ Open PR 进行代码审查、冲突解决及集成测试**，尤其是涉及 Agent 编排和 UI 重构的模块，以确保下一版本发布的稳定性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project daily report for Moltis based on the provided data.

---

# 📊 Moltis 项目动态日报 (2026-05-20)

## 1. 今日速览
过去 24 小时内，Moltis 项目整体保持**高度活跃且聚焦于稳定性**的状态。项目合并了 2 个 PR 并关闭了 2 个 Issue，展现出维护团队极高的响应与处理效率。当前有 2 个新开的缺陷报告和 2 个待合并的 PR，开发节奏紧凑。整体而言，项目目前的发力点主要集中在修复沙箱环境的僵尸进程、WebSocket 连接稳定性以及密码凭证同步等底层核心机制的健壮性上。

## 2. 版本发布
- **最新版本**: [20260518.01](https://github.com/moltis-org/moltis/releases/tag/20260518.01)
- **更新说明**: 发布于两日前。结合近期 PR 动向，该版本大概率包含了 Docker 沙箱的修复以及 WebSocket 断连逻辑的优化，建议所有使用 Docker 部署的用户尽快升级至该版本。

## 3. 项目进展
今日项目在沙箱稳定性和前端通信容错方面取得了实质性进展，共合并/关闭了 2 个关键修复 PR：
- **修复 Docker 沙箱僵尸进程**: PR [#1025](https://github.com/moltis-org/moltis/pull/1025) (已合并) 通过在 Docker 支持的沙箱容器中注入 `--init` 进程，成功解决了孤立子进程积累变为僵尸进程 的问题。这显著提升了重度使用沙箱执行代码时的系统稳定性。
- **优化 WebSocket 断连误报**: PR [#1023](https://github.com/moltis-org/moltis/pull/1023) (已合并) 调整了客户端 RPC 超时逻辑，不再将常规的 5 秒超时错误误报为 "WebSocket disconnected"，并在超时信息中暴露具体的 RPC 方法，大幅改善了前端错误诊断体验。

## 4. 社区热点
今日最受社区关注的议题是 Docker 环境下的部署与运行问题：
- **Issue [#423](https://github.com/moltis-org/moltis/issues/423)**: 该 Issue 报告了在 Docker 环境下部署 Moltis 及其沙箱时遇到的问题。该问题获得了 **5 个赞 (👍)** 并于昨日被正式关闭。这说明社区对容器化部署的顺畅度要求很高，且随着 PR #1025 的合并，这一痛点已得到官方重视和解决。

## 5. Bug 与稳定性
今日新增了 2 个 Bug 报告，且均有对应或潜在的修复方案，未出现严重的未处理系统崩溃：
- **高优先级：Hooks 运行时注册失效**
  - Issue: [#1024](https://github.com/moltis-org/moltis/issues/1024)
  - 现象: `[hooks]` 配置项虽然能被正确解析和校验，但在实际运行时并未被成功注册生效。这是一个功能性阻断 Bug，可能影响用户的自动化工作流。
  - 状态: 暂无关联 Fix PR，等待官方评估。
- **中优先级：LLM 模式更新时的 WebSocket 断连**
  - Issue: [#1022](https://github.com/moltis-org/moltis/issues/1022)
  - 现象: 用户在更新 LLM 模式时频繁遭遇 "WebSocket disconnected" 错误。
  - 状态: **已有潜在修复**。结合今日合并的 PR [#1023](https://github.com/moltis-org/moltis/pull/1023) 来看，此问题极大概率是前端 RPC 超时导致的误报，预计在最新版本中已得到缓解。

## 6. 功能请求与路线图信号
从待处理的 PR 和刚关闭的 Issue 中，可以捕捉到项目下一阶段的演进信号：
- **AI 模型推理控制力增强**: 待合并的 PR [#1005](https://github.com/moltis-org/moltis/pull/1005) 提出了对 OpenAI Codex (GPT-5) 模型的 `reasoning_effort`（推理努力程度）支持。这表明项目正在深化对顶级大模型底层参数的适配，赋予用户更精细的 AI 调控能力。
- **OAuth 扩展配置支持**: 刚关闭的 Issue [#850](https://github.com/moltis-org/moltis/issues/850) 提出希望在 MCP server OAuth 覆盖配置中支持 `client_secret`。该需求的关闭暗示相关功能可能已经开发完毕或在近期提交，这将极大便利需要强安全鉴权的企业级集成场景。

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提炼出以下典型用户场景与痛点：
- **深度容器化隔离诉求**: 用户倾向于在 Docker 中运行 Moltis 主程序，并进一步在其中运行 Docker 沙箱（Docker-in-Docker）。这要求 Moltis 对容器底层生命周期管理（如僵尸进程回收）有极高的把控力。
- **复杂环境下的凭证管理痛点**: PR [#1026](https://github.com/moltis-org/moltis/pull/1026) 暴露出用户在使用加密 Vault 时，面临认证密码与 Vault 密码轮换不一致的潜在风险，这反映了高级用户在企业级本地部署中对安全与数据一致性的严苛要求。

## 8. 待处理积压
以下为近期需重点关注的待处理 Pull Requests，建议维护者及时跟进：
- **安全核心模块**: PR [#1026](https://github.com/moltis-org/moltis/pull/1026) 涉及 Vault 密码同步及拒绝不匹配的密码重置，属于安全核心逻辑变更，建议尽快安排代码审查。
- **新特性挂起**: PR [#1005](https://github.com/moltis-org/moltis/pull/1005) 涉及 GPT-5 推理参数支持，已挂起 3 天，为避免功能滞后，建议确认其合并排期。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-20)

## 1. 今日速览
CoPaw 项目今日保持**高活跃度**，迎来了 **v1.1.8 正式版**和 **v1.1.8-beta.2** 两个重要版本的发布，标志着项目在插件生态上迈出了关键一步。过去 24 小时内，项目共处理了 **37 条 Issues**（17 条已关闭）和 **43 条 PRs**（31 条已合并/关闭），合并效率极高。社区方面，用户对新引入的“QwenPaw Pet (桌面宠物)”和插件市场反响强烈，但随之也暴露出新版本带来的稳定性问题（如启动闪退和授权漏洞）。总体而言，项目正处于功能快速迭代与生态扩充的上升期，但需警惕新特性引入带来的回归 Bug。

## 2. 版本发布
今日项目连续发布了两个版本，重点构建了官方插件分发体系及性能优化：

- **v1.1.8 正式版** ([Release Note](https://github.com/agentscope-ai/QwenPaw/pull/4482))
  - **✨ 核心新增**：
    - **官方插件分发机制**：支持在 Console 插件管理器中一键安装，或通过网站浏览下载官方插件。
    - **QwenPaw Pet 桌面宠物**：官方出品的桌面伴侣级插件，极大增强了产品的情感化交互体验。
  - **⚠️ 注意事项**：新引入的 Pet 插件存在致命级 Bug，易导致主程序崩溃（详见第 5 部分），建议谨慎在生产环境启用。

- **v1.1.8-beta.2** ([Release Note](https://github.com/agentscope-ai/QwenPaw/pull/4502))
  - **性能与重构**：
    - 控制台前端模型性能优化。
    - 追踪系统重构：通过批量追加 inbox trace events 大幅减少了文件 I/O 读写压力。

## 3. 项目进展
今日共有 31 个 PR 被合并/关闭，项目整体在**多渠道体验、企业级安全认证、底层稳定性**方面取得实质性进展：

- **多渠道共享与扩展**：
  - 飞书群会话共享模式 ([PR #4537](https://github.com/agentscope-ai/QwenPaw/pull/4537))：支持群聊内所有人共享同一会话上下文，打破以往的用户隔离限制。
  - 内置 OpenCode Go 提供商 ([PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536))：新增内置云提供商，一键接入 10 个 OpenAI 兼容模型。
- **底层架构优化**：
  - MCP OAuth 2.1 授权流 ([PR #4532](https://github.com/agentscope-ai/QwenPaw/pull/4532))：全面支持远程 MCP 服务器的 PKCE + DCR 安全认证。
  - 子代理生成功能 ([PR #4530](https://github.com/agentscope-ai/QwenPaw/pull/4530))：引入 `spawn_subagent` 工具，支持工作区内任务级委派与分叉。
- **体验与稳定性修复**：
  - 修复会话指令 (`/mission`) 闪烁及消失问题 ([PR #4523](https://github.com/agentscope-ai/QwenPaw/pull/4523))。
  - 修复 CLI 目录拼写错误，解决 `tool_result` 与 `tool_results` 的历史遗留困惑 ([PR #4522](https://github.com/agentscope-ai/QwenPaw/pull/4522))。

## 4. 社区热点
今日社区讨论焦点高度集中于**新插件生态、前端渲染体验及模型调度稳定性**：

- **“官方插件与宠物系统何时发布？”** ([Issue #4499](https://github.com/agentscope-ai/QwenPaw/Issue/4499))：该 Issue 在发布前引发了 4 条热议，官方在 v1.1.8 发布后将其关闭。反映了社区对丰富 Agent 伴生应用的强烈期待。
- **Markdown 表格换行顽疾** ([Issue #4497](https://github.com/agentscope-ai/QwenPaw/Issue/4497))：用户**第三次**提交该 Bug，指出前端渲染无法解析 `<br>` 换行（合并了 [#2983](https://github.com/agentscope-ai/QwenPaw/Issue/2983), [#3528](https://github.com/agentscope-ai/QwenPaw/Issue/3528) 等同类反馈）。这暴露了前端 Markdown 解析器长期存在技术债务。
- **QwenPaw Pet 插件导致主程序崩溃** ([Issue #4540](https://github.com/agentscope-ai/QwenPaw/Issue/4540))：大量用户在升级 1.1.8 启用新宠物插件后遭遇第一句对话即闪退的问题。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，部分与 v1.1.8 升级直接相关：

1. **[P0 严重] 新插件引发主程序崩溃** ([Issue #4540](https://github.com/agentscope-ai/QwenPaw/Issue/4540), [#4541](https://github.com/agentscope-ai/QwenPaw/Issue/4541))：启用 Pet 插件发送首条消息时触发 `ConnectTimeout` 及 PySide6 崩溃，阻塞正常对话。**目前尚未见官方 Fix PR**。
2. **[P1 严重] 升级 1.1.7 后系统提示词模板错乱** ([Issue #4496](https://github.com/agentscope-ai/QwenPaw/Issue/4496))：加载的是内置默认模板而非工作区文件，导致新建和历史的 Agent 表现异常。暂无修复 PR。
3. **[P1 严重] HTTP 429 限流导致队列永久清空/系统卡死** ([Issue #4515](https://github.com/agentscope-ai/QwenPaw/Issue/4515))：触发限流后引起零停机重载机制清空所有待处理消息，表现为所有模型调用被永久冻结。
4. **[P1 严重] 备份接口 403 拒绝访问** ([Issue #4535](https://github.com/agentscope-ai/QwenPaw/Issue/4535))：v1.1.8 WebUI 中访问 `/backups` 路由返回 HTTP 403，疑似越权或路由守卫配置错误。
5. **[P2 高危] 插件接口 RCE 漏洞** ([Issue #4470](https://github.com/agentscope-ai/QwenPaw/Issue/4470))：报告指出插件前端接口存在未经授权的远程代码执行漏洞，需官方紧急审计。

## 6. 功能请求与路线图信号
从今日的 Feature 请求及相应 PR 进展，可以看出项目下一步的重点演进方向：

- **桌面端架构全面升级**：用户对桌面版体验要求提升，社区提交了基于 Tauri 2.x 重构桌面客户端的 PR ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))，目前正处于 Under Review 阶段，有望在后续版本替代现有的老旧打包方案。
- **多模态自动路由**：用户呼吁实现根据发送的图片/视频/音频自动切换对应视觉/语音模型的免费路由机制 ([Issue #4539](https://github.com/agentscope-ai/QwenPaw/Issue/4539))，实现类似“豆包”的无缝体验。
- **上下文追踪与检索增强**：用户提出增加会话输出源追踪（引用来源）功能 ([Issue #4514](https://github.com/agentscope-ai/QwenPaw/Issue/4514))，表明 CoPaw 在处理长文档和深度分析时，用户对事实核实能力的需求正在凸显。

## 7. 用户反馈摘要
通过今日的 Issue 提炼，真实用户反馈主要集中在以下几个维度：

- **痛点：升级体验割裂与版本恐慌**：用户在升级过程中遭遇配置丢失风险 ([Issue #4430](https://github.com/agentscope-ai/QwenPaw/Issue/4430))、系统提示词被重置等严重问题，对频繁升级产生了抗拒心理。
- **痛点：国内环境系统级编码顽疾**：Windows 中文用户的 GBK 编码报错依然频繁，之前的散点式修补未能根治 ([Issue #4481](https://github.com/agentscope-ai/QwenPaw/Issue/4481))，亟待确立系统级 UTF-8 方案。
- **满意点：高可玩性与生态演进**：官方快速响应了插件市场、技能市场 ([PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518)) 的需求，用户对 QwenPaw 正在从纯工具向“数字伴侣”演进表示高度赞赏和期待。
- **痛点：渠道的不稳定性**：微信 iLink 的定时任务推送极易失败且无容错重试 ([Issue #4477](https://github.com/agentscope-ai/QwenPaw/Issue/4477))，Console 流式输出挂起后误导用户 ([Issue #4494](https://github.com/agentscope-ai/QwenPaw/Issue/4494))，影响了生产环境的可靠性。

## 8. 待处理积压
以下重要 Issues/PRs 长期未获最终解决或响应，需要项目维护团队重点关注：

- **前端 Markdown 渲染缺陷**：涉及 `<br>` 标签不生效的 Bug 悬而未决达一个月之久，引发多次重复提交 ([Issue #4497](https://github.com/agentscope-ai/QwenPaw/Issue/4497))。
- **历史会话列表加载性能问题**：当会话数量巨大时前端加载缓慢，分页功能失效，该需求已被提出一个月，亟待排期解决 ([Issue #3570](https://github.com/agentscope-ai/QwenPaw/Issue/3570))。
- **长期审查中的架构级 PR**：Tauri 2.x 桌面端重构 ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) 已提交近一个月仍未合并，可能影响后续桌面端的发布计划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 [ZeptoClaw](https://github.com/qhkm/zeptoclaw) 项目 2026-05-20 动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-05-20)

### 1. 今日速览
过去 24 小时，ZeptoClaw 项目整体处于**低频运转与自动化维护**状态，人类开发者和社区互动较少。项目未发布任何新版本，且过去一天内无新增或活跃的 Issue。项目的活动主要集中在自动化依赖管理上，有两项关于 GitHub Actions 的依赖更新 Pull Request 产生了状态流转。目前项目处于平稳的迭代间隙期，核心代码库保持稳定。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目的推进主要由 Dependabot 驱动，集中在 CI/CD 工作流的底座维护上：
*   **已关闭的 PR：**
    *   [PR #586 [CLOSED] chore(deps): bump taiki-e/install-action from 2.75.17 to 2.75.29](https://github.com/qhkm/zeptoclaw/pull/586)：该依赖更新由 `dependabot[bot]` 发起于上周，已于今日关闭。此 PR 可能由于目标版本被更新的版本替代（见下方 #591）而被维护者手动关闭，或被自动跳过。
*   **待合并的 PR：**
    *   [PR #591 [OPEN] chore(deps): bump taiki-e/install-action from 2.75.17 to 2.77.3](https://github.com/qhkm/zeptoclaw/pull/591)：作为 #586 的“替代者”，该 PR 直接将 `taiki-e/install-action` 跨越多个小版本升级至 `2.77.3`。这表明维护者倾向于合并更彻底的版本跨度升级，该 PR 的合并将保持项目的自动化工具链处于最新状态。

### 4. 社区热点
*今日无热点讨论。*
由于过去 24 小时内无新开 Issue，且相关的 Dependabot PR 评论数均为 `undefined`（即无评论）且无点赞（👍: 0），今日社区互动处于冰点。项目暂未出现引起广泛讨论的功能变更或痛点问题。

### 5. Bug 与稳定性
*今日无新增 Bug 报告。*
过去 24 小时内未收到任何与系统崩溃、功能回归或边缘场景错误相关的 Issue。ZeptoClaw 现阶段的代码基线（包括运行时和 CI 环境）表现稳定。

### 6. 功能请求与路线图信号
*今日无新增功能请求。*
因无用户提交新的功能需求 Issue，且近期活动仅为自动化工具的依赖升级，暂无法从今日的动态中捕捉到项目下一阶段的功能路线图信号。

### 7. 用户反馈摘要
*今日无直接用户反馈记录。*

### 8. 待处理积压
虽然今日项目无阻塞性问题，但基于当前数据，仍需提醒维护者关注以下待办事项：
*   **自动化 PR 待处理：** 目前处于 Open 状态的 [PR #591](https://github.com/qhkm/zeptoclaw/pull/591) 需要维护者进行 Code Review 并合并，以保证 CI 流水线的健康度。长期搁置自动化依赖 PR 可能导致后续依赖升级冲突。

---
*本项目日报由开源项目分析师基于 GitHub 数据自动生成，祝 ZeptoClaw 项目稳健发展！*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
ZeroClaw 项目在过去 24 小时内保持了极高的开发活跃度，整体处于**强健且高速迭代**的状态。虽然今日无新版本发布，且仅有 3 个 PR 被合并/关闭，但待处理的 PR 高达 47 个，展现了强劲的提交吞吐量。后端架构方面迎来重大重构，开发者集中对多渠道的白名单逻辑进行了标准化统一；同时，新报告的严重级别 Bug 和富有想象力的 Feature Request 显示出社区正在深度使用并试探该项目的边界。

## 2. 版本发布
今日**无**新版本发布。（当前社区正聚焦于 v0.7.6 版本的准备工作，见下文分析）。

## 3. 项目进展
今日共有 3 个 PR 被合并或关闭，同时有大量结构化重构 PR 提交。项目整体在代码复用、标准化和文档完善方面迈出了一大步：
- **多渠道白名单架构统一**：开发者 `yijunyu` 集中发起了近 17 个 PR（从 PR #6784 到 PR #6800），将过去各渠道（如 Slack, WhatsApp, Discord, Telegram, Lark 等）各自手写的白名单验证逻辑，统一迁移至 `aspect_std::AllowlistAspect`。这是 ICSE 2027 M1 评估的一部分，大幅提升了跨渠道代码的复用性和安全性。
- **文档与生态优化**：提交了博客 RSS/Atom 订阅源和站点地图的发现端点支持（[PR #6774](https://github.com/zeroclaw-labs/zeroclaw/pull/6774)），以及哲学文档的链接渲染修复（[PR #6769](https://github.com/zeroclaw-labs/zeroclaw/pull/6769)）和图片资产优化（[PR #6748](https://github.com/zeroclaw-labs/zeroclaw/pull/6748)）。

## 4. 社区热点
目前社区讨论最热烈、关注度最高的 Issues 主要围绕高级别的新特性展开：
- **“梦境模式”周期性记忆整合** ([Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))：由 Svtter 提出并已被接受的高 P1 级需求。该功能提议让 AI 在空闲时进入“梦境”，进行每日记忆的整合、反思学习并更新长期知识结构。该 Issue 已积累 10 条评论，是今日讨论度最高的议题，反映了用户对 AI 自主进化能力的强烈期待。
- **v0.7.6 技能支持用户体验升级追踪** ([Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253))：作为 v0.7.6 的发布主线，此协调追踪帖正在广泛收集社区对 CLI、沙箱和技能创作工具的意见。

## 5. Bug 与稳定性
今日报告了一个导致核心工作流受阻的 S1 级严重 Bug：
- **多行 Heredoc 被安全策略误杀** ([Issue #6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771))：
  - **严重程度**：S1（工作流完全阻塞）
  - **详情**：由用户 tidux 报告。ZeroClaw 现有的 `SecurityPolicy` 错误地拦截了多行 Heredoc（此处文档）的执行。具有讽刺意味的是，这导致 ZeroClaw 自己无法使用其官方规定的技能来发起 PR。
  - **修复状态**：**目前尚无关联的 fix PR**，需要安全/沙箱模块的维护者紧急介入。

## 6. 功能请求与路线图信号
通过近期的 Issues，我们可以清晰地看到 ZeroClaw 下一步的演进方向：
- **构建系统裁剪优化**：用户 NiuBlibing 提出 `zeroclaw channel list` 应当仅显示当前编译构建中启用的渠道 ([Issue #6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770))，这表明用户在定制化部署（裁剪不必要的 Channel）上有强烈需求。
- **ACP 会话恢复**：在 [Issue #6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543)（已关闭）中探讨了实现 ACP v1 的 `session/load` 命令，以支持断点续传和上下文恢复，这是提升长任务稳定性的关键。
- **物理级隔离执行**：用户 singlerider 提出了极为超前的 RFC（目前状态为 Blocked）：通过 Unix Socket 将代理容器与代理网络请求的守护进程分离，实现 Air-gapped（气隙）隔离执行模式 ([Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))，这可能是未来企业级安全部署的重点。

## 7. 用户反馈摘要
从近期的 Issue 描述中，可以提炼出以下真实痛点和使用场景：
- **安全与便捷性的冲突**：用户在使用标准 Bash 技能（如 `gh pr create` 配合 Heredoc）时，频繁触发内置的安全拦截策略。项目在“默认绝对安全”的策略制定上，可能对高级用户和自动化工作流造成了阻碍。
- **重度定制化需求显现**：有用户在尝试剔除不需要的 `channel-*` feature 进行独立编译，表明 ZeroClaw 正在被应用于对资源占用和攻击面有严格要求的嵌入式或服务器场景。

## 8. 待处理积压
以下长期活跃的重量级 Issue 需要维护团队的持续关注和推进：
- **迷失的 153 个 Commits 恢复** ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074))：自 4 月 24 日开启，旨在追踪 3 月份因 bulk revert 意外丢失的 153 个 Commit。目前状态为 `in-progress`，属于高风险项，需要持续追踪数据恢复进度。
- **待审批的高风险 RFC** ([Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))：Air-gapped 隔离执行模式当前被打上 `needs-maintainer-review` 标签，且处于 `blocked` 状态，需要架构团队给出明确的推进意见。

</details>