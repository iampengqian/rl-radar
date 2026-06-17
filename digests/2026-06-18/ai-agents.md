# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-17 22:30 UTC

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

这里是为您生成的 2026-06-18 OpenClaw 项目动态日报。

# 📊 OpenClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
- **极高活跃度**：OpenClaw 在过去 24 小时内处理了 500 条 Issues 与 500 条 PR 更新（其中新开/活跃 Issue 468 条，活跃 PR 432 条），社区讨论与代码提交热度处于爆发现状。
- **维护面临承压**：Issue 的关闭/活跃比极其悬殊（32 关闭 / 468 活跃），而 432 个待合并 PR 的大量积压表明核心维护团队（Triage）目前面临严峻的吞吐量瓶颈。
- **核心诉求集中在稳定性**：社区当前最激烈的讨论几乎全部围绕“多智能体编排可靠性”、“Prompt Cache 失效带来的高昂成本”以及“跨渠道消息静默丢失”这三大核心痛点。
- **无新版本发布**：今日官方未释出稳定版或 Beta 版 Release，大量极具价值的修复 PR 仍在排队等待 Review。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
尽管积压严重，社区依然推进了若干关键的修复与架构优化 PR，重点着眼于**状态持久化、跨渠道通信与资源回收**：
- **终端会话状态恢复**：[PR #89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊会话陷入 `failed` 状态后静默丢弃后续所有消息的严重 Bug，目前已准备好接受维护者审查。
- **Telegram 通道健壮性**：[PR #94016](https://github.com/openclaw/openclaw/pull/94016) 修复了 API 中断导致超时后，健康监控器无法自动重置而将通道永久挂起的问题。
- **QMD 与多智能体内存泄漏缓解**：[PR #75403](https://github.com/openclaw/openclaw/pull/75403) 修复了 `typing` 状态引发的指标遗留问题，该问题此前会导致清理进程空转。
- **群组消息串连修复**：[PR #74235](https://github.com/openclaw/openclaw/pull/74235) 修复了 Google Chat 中延迟回复或工具驱动的回复脱离原对话线程的 UX 问题。

## 4. 社区热点
今日讨论度最高的议题反映出用户在**复杂部署环境**与**不可见错误**中的挣扎：
- **跨平台覆盖缺位**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) (109 评论) 呼吁推出 Linux/Windows 原生 Clawdbot 客户端。目前仅支持 macOS/iOS/Android，开发者对全平台一致体验的诉求极高。
- **无声的消息丢失 (Silent Message Loss)**：[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) (19 评论) 与 [Issue #72808](https://github.com/openclaw/openclaw/issues/72808) (20 评论)。前者指出 Subagent 完成任务后结果静默丢失，不重试也不报错；后者指出 Slack 连接静默断开。长轮询任务缺乏可靠的心跳与回调机制让开发者非常沮丧。
- **LLM 代理成本失控**：[Issue #91016](https://github.com/openclaw/openclaw/issues/91016) (8 评论) 报告升级到 `2026.6.1` 后 DeepSeek 的 Prompt Cache 完全失效，导致一小时烧掉 6 美元。同时 [Issue #73182](https://github.com/openclaw/openclaw/issues/73182) (6 评论) 指出系统在后台默默开启了 Claude 的 Extended-thinking，导致 API 账单翻倍。

## 5. Bug 与稳定性
今日涌现大量 P1 级（最高优先级）Bug，系统在并发与网关重启场景下暴露出脆弱性：
- **🔥 P1 严重回归：编码智能体全面瘫痪** - [Issue #62505](https://github.com/openclaw/openclaw/issues/62505)。从 `2026.4.2` 升级后，专用于编码的 Agent 无法输出任何实际工作，仅给出模糊的状态更新。
- **🔥 P1 严重：网关热重载竞态导致任务丢失** - [Issue #93895](https://github.com/openclaw/openclaw/issues/93895)。热重载期间，Cron 任务因磁盘状态迁移窗口期读取到半成品数据而被静默丢弃。
- **⚠️ P1 崩溃循环：Node 更新导致资源枯竭** - [Issue #68285](https://github.com/openclaw/openclaw/issues/68285) (已关闭但依然活跃)。在 Node v25.9 环境下，CPU 100% 占用，工具失效且长期记忆无法持久化。
- **⚠️ P1 并发数据覆盖** - [Issue #43367](https://github.com/openclaw/openclaw/issues/43367)。多智能体并发调用 `agents add` 时引发配置互相覆写，且产生不受管的孤儿子进程。

## 6. 功能请求与路线图信号
通过分析标记为 `Feature` 和 `RFC` 的 Issue，可以明确下一步演进的信号：
- **上下文压缩与内存分离架构**：[Issue #57901](https://github.com/openclaw/openclaw/issues/57901) 要求强制上下文压缩时使用独立模型；[Issue #60572](https://github.com/openclaw/openclaw/issues/60572) 提出了 **Multi-Slot Memory Architecture**，主张将单一记忆槽拆分为多层独立 Provider（如短期/长期/向量分离），这暗示项目正向更复杂的 RAG 架构演进。
- **企业级控制与安全性**：[Issue #39604](https://github.com/openclaw/openclaw/issues/39604) 请求允许 `web_fetch` 访问内网；[Issue #71736](https://github.com/openclaw/openclaw/issues/71736) 提议为插件引入数据驱动的控制 UI 贡献插槽。对应的 [PR #89569](https://github.com/openclaw/openclaw/pull/89569) (预认证 DM 白名单) 表明安全边界控制正在快速落地。

## 7. 用户反馈摘要
从海量评论中提炼出的真实用户痛点如下：
- **多智能体编排可用性差**：用户 (Issue #43367, #75593) 抱怨并行执行任务时出现进程脱离、列表查询为空等状态不一致问题。“看起来在工作，实际上什么也没发生”是最大的挫败感来源。
- **运维观测性太弱（黑盒化）**：大量带有 `clawsweeper:needs-live-repro` 标签的 Issue 表明，系统出错时日志不清晰。例如缺少 `sharp` 依赖时报出难以理解的 `Failed to optimize image` (Issue #73148)，而非直接给出依赖缺失提示。
- **状态与文件管理粗暴**：Issue #40001 指出，Cron 任务使用 `write` 工具时由于缺乏 `append` 模式，直接覆盖了系统的共享记忆文件，导致无声的数据毁灭。

## 8. 待处理积压
维护团队必须立即关注以下高优积压项：
- **PR 审查严重积压**：高达 **432 个 PR** 处于待合并状态，包括诸如 [PR #94253](https://github.com/openclaw/openclaw/pull/94253) (增加 `doctor --explain` 诊断功能) 和 [PR #92665](https://github.com/openclaw/openclaw/pull/92665) (修复 LiteLLM 代理缓存失效) 等已被证明有效的修复。如果不提高审查吞吐量，将导致 fork 碎片化或用户流失。
- **高危长期未决 Issue**：
  - [Issue #85103](https://github.com/openclaw/openclaw/issues/85103)：主模型配额耗尽时，Fallback 机制未触发。直接导致生产环境业务中断，积压已达近一个月。
  - [Issue #48003](https://github.com/openclaw/openclaw/issues/48003)：`steer mode` 无法在主对话回合中途注入用户最新消息，导致交互式修正完全失效。
  - [Issue #75380](https://github.com/openclaw/openclaw/issues/75380)：`provider-payload.jsonl` 日志无限增长，无 rotation 策略，长期运行将导致宿主机磁盘打满。

---
*分析师结语：OpenClaw 的生态扩展速度惊人，但系统正在为其“状态同步机制”和“静默失败处理”付出巨大的信任成本。下一阶段的核心任务不应是增加新平台或新插件，而是冻结特性，发起针对“消息必达保证”与“并发竞态”的专门修复冲刺。*

---

## 横向生态对比

这份报告基于 2026 年 6 月 18 日主流开源 AI 智能体与个人助手项目的社区动态，为您提炼出生态全貌与深度横向对比分析。

---

# 📊 2026.06.18 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
1. **基础设施重构期**：当前个人 AI 助手与自主智能体开源生态正处于从“单体可用”向“企业级高可用”跨越的关键重构期，核心特征是网关解耦、沙盒安全强化与多租户架构的落地。
2. **多模态与物理操控爆发**：纯文本交互已不再是瓶颈，生态重心正加速向实时全双工语音、多渠道 IM 接入（飞书/微信/Slack）以及桌面级 RPA（Computer Use）能力延伸。
3. **长程记忆与并发管理成为试金石**：随着用户将 Agent 应用于复杂的长线任务，上下文粗暴截断、多智能体并发竞态及静默失败问题集中爆发，决定了各项目接下来的演进速度。

## 2. 各项目活跃度对比（基于 24 小时数据）

| 项目名称 | 活跃 Issues | 活跃 PRs | 版本发布 | 健康度评估 | 核心状态特征 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | 无 | 🔴 承压 | 规模最大，积压严重，维护面临吞吐量瓶颈 |
| **NanoBot** | 11 | 31 | 无 | 🟢 健康 | 工程闭环极佳，Bug 修复迅速，专注多渠道易用性 |
| **Hermes Agent** | ~50 | ~50 | 无 | 🟡 重构 | 聚焦网关架构与安全沙盒，桌面端构建存在痛点 |
| **PicoClaw** | 4 | 10 | Nightly | 🟢 活跃 | 迭代飞快，前沿模型兼容性好，主打隐私与去中心化 |
| **NanoClaw** | 5 | 19 | v2.1.0/17 | 🟡 修复 | 频繁修复企业级部署的阻断性 Bug与安全漏洞 (CVE) |
| **NullClaw** | 3 | 1 | 无 | 🟢 维护 | 活跃度偏低，专注打磨基础 CLI 体验与本地算力对接 |
| **IronClaw** | ~50 | ~50 | 无 | 🟢 转型 | 研发强度极高，全面推进 "Reborn" 架构升级与自研 CI |
| **LobsterAI** | 0 | 13 | 2026.6.15 | 🟢 持平 | 内部主导迭代，PR 清零，引入 Computer Use 等重磅功能 |
| **Moltis** | 5 | 1 | 无 | 🟡 修复 | 聚焦实时语音交互，正攻坚底层音频处理 (AEC) 难题 |
| **CoPaw** | ~45 | ~50 | v1.1.12/a1 | 🟢 活跃 | 双轨并行 (稳定版+2.0架构Alpha)，社区讨论极热烈 |
| **ZeroClaw** | ~50 | ~50 | 无 | 🟡 重构 | 架构演进密集 (WASM/MCP)，系列巨型 PR 审查中 |

## 3. OpenClaw 在生态中的定位
作为生态的**绝对头部与核心参照系**，OpenClaw 拥有无可匹敌的社区规模（单日近千条 Issues/PRs 交互），但也正面临典型的“规模反噬”。
* **优势**：场景覆盖最全，功能最繁杂，对各类前沿模型（DeepSeek/Claude/Gemini）的追随速度极快，用户基数构成了极强的生态护城河。
* **技术路线差异**：相比 Hermes 的底层网关解耦或 ZeroClaw 的 WASM 插件化，OpenClaw 目前的架构显得较为沉重，其在状态同步和并发竞态上付出了巨大的复杂度成本。
* **当前困境**：Triage 机制面临瘫痪（432 个 PR 积压，468 个活跃 Issue 未清）。若不冻结新特性发起专门的“可靠性冲刺”，庞大的流量可能加速向 NanoBot、CoPaw 等响应更快的项目流失。

## 4. 共同关注的技术方向
分析各项目的 Bug 报告与 RFC，以下四大技术痛点呈现高度跨项目重合：
1. **长上下文压缩与记忆隔离**：粗暴的 Token 截断导致人设丢失与任务中断。（涉及：*OpenClaw, CoPaw, IronClaw*）。诉求：引入多级记忆槽、按需压缩或锁定核心 Prompt 不被覆盖。
2. **静默失败与消息必达机制**：工具执行超时、网关热重载或 IM 通道断开时无报警，导致 Agent “假装在工作”。（涉及：*OpenClaw, Hermes, ZeroClaw*）。诉求：完善心跳检测、重试队列与 Fallback 回调。
3. **执行环境的安全沙盒与边界**：防范 Prompt 注入带来的危险指令执行。（涉及：*Hermes Agent, NanoClaw, PicoClaw*）。诉求：Agent 间消息审批、精细化文件系统读写隔离、防 SSRF/路径遍历。
4. **企业级托管与多租户网关**：降低多实例容器化部署的资源开销与运维门槛。（涉及：*NanoBot, NanoClaw, ZeroClaw*）。诉求：瘦客户端化、无状态网关扩缩容、平滑的升级迁移机制。

## 5. 差异化定位分析
* **全场景融合派 (OpenClaw, CoPaw, LobsterAI)**：致力于打造“全能数字大脑”。CoPaw 和 LobsterAI 正在加速引入 Computer Use 和 BI 数据分析，尝试接管用户的桌面与办公流。
* **企业级基础设施派 (Hermes Agent, IronClaw, ZeroClaw)**：重心在重构底层。IronClaw 探索用 AI 做 CI 自动修复；Hermes 打造网关无状态化；ZeroClaw 研发 WASM 插件生命周期，它们瞄准的是大规模生产部署。
* **极客与隐私优先派 (PicoClaw, NullClaw, Moltis)**：主打特定场景的极致体验。PicoClaw 押注去中心化 IM 矩阵；NullClaw 专注于个人 VPS 结合本地算力；Moltis 死磕类似 ChatGPT 的高级实时语音模式 (解决 AEC 回声消除)。

## 6. 社区热度与成熟度
* **爆发与承压期**：**OpenClaw** 流量巨大但质量失控，处于需强力干预的临界点。
* **高质量迭代期**：**NanoBot、PicoClaw、CoPaw** 保持着极其健康的 Issue-to-PR 转化率，新 Bug 往往在 24 小时内得到响应并合并修复，体现了强大的核心团队执行力。
* **底层重构期**：**Hermes Agent、IronClaw、ZeroClaw** 社区讨论非常硬核（多为 RFC 和架构设计），但日常可用性受制于底层重构带来的阵痛（如桌面端构建崩溃）。

## 7. 值得关注的趋势信号
对于 AI 智能体开发与技术决策者，今日的动态释放了以下明确的行业信号：
1. **UI/交互革命：从对话框走向 RPA 与语音**：LobsterAI 引入 Computer Use，Moltis 攻坚实时全双工语音。这意味着 Agent 的 I/O 机制正在突破纯文本 API，视觉驱动的 UI 自动化操作和无感语音交互将是下半年的标配。
2. **“黑盒”时代终结：可观测性成为刚需**：多个社区对“静默失败”的容忍度降至冰点。未来的 Agent 框架必须内建深度的链路追踪和可观测面板（如 NanoClaw 引入 CLI 仪表盘，IronClaw 增强 WebUI 可视化）。
3. **配置标准化与迁移工具涌现**：随着项目更迭，CoPaw 等项目开始提供针对 OpenClaw 的一键迁移工具（`migrate openclaw`）。这标志着头部项目的用户争夺战进入白热化，低切换成本将成为中小项目抢夺企业用户的利器。
4. **模型路由的智能化前置**：从依赖云端兜底，转向在客户端/网关层（Desktop sidecar）引入模型解析层与配额动态负载（见 Hermes、NanoBot）。框架正在代替用户做“该用便宜模型还是昂贵模型”的决策。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-06-18  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内保持了**极高的开发与维护活跃度**。项目未发布新版本，但代码仓库迎来了高强度的迭代，共产生 31 个 PR 更新（其中 18 个顺利合并/关闭）与 11 个 Issue 更新（8 个新开，3 个已关闭）。
从提交内容来看，开发团队的核心精力聚焦于**模型提供商适配优化、工作区安全与工具链修复、以及 WebUI 多端体验提升**。大量有效的 Bug 修复被迅速合并，展现了维护团队对社区反馈的极快响应速度与健康的“Issue-to-PR”闭环转化能力。

---

### 2. 版本发布
**本报告周期内无新版本 发布。**
*(注：鉴于今日有高达 18 个 PR 被合并，涵盖大量 Bug 修复与功能增强，预计近期将迎来一次集中的版本迭代更新。)*

---

### 3. 项目进展
今日共有 **18 个 PR** 被合并或关闭，项目在以下几个子系统取得了实质性向前迈进：

*   **生态适配与提供商优化**：
    *   [PR #4351](https://github.com/HKUDS/nanobot/pull/4351): 深度优化了对 Mistral 模型的支持，修复了包括 `reasoning_effort` 参数限制等 4 个导致 HTTP 400 报错的严格 API 校验问题。
    *   [PR #4350](https://github.com/HKUDS/nanobot/pull/4350): 新增了 Keenable 作为内置 Web 搜索提供商，丰富了 Agent 的联网搜索选项。
    *   [PR #4356](https://github.com/HKUDS/nanobot/pull/4356): 修复了 Anthropic API 对工具调用 ID 正则校验 (`^[a-zA-Z0-9_-]+$`) 极其严格导致的多轮会话中断问题。
*   **工作区安全与文件系统**：
    *   [PR #4202](https://github.com/HKUDS/nanobot/pull/4202): 重构了文件系统工作区写入策略，将旧版的 `extra_allowed_dirs` 强制设为只读，并区分了内部读写目录权限。
    *   [PR #4053](https://github.com/HKUDS/nanobot/pull/4053): 阻止了写入工具继承媒体目录的访问权限，在开启工作区限制时保护了文件系统的安全性。
*   **网络代理与本地部署**：
    *   [PR #4367](https://github.com/HKUDS/nanobot/pull/4367): 修复了当宿主机存在全局代理时，本地端点被强制代理导致的连接失败问题，实现了对本地/LAN 地址绕过代理的能力。

---

### 4. 社区热点
今日社区讨论聚焦于**多实例管理的易用性**以及**多渠道路由的接入体验**：

*   **多实例管理痛点**：[Issue #4390](https://github.com/HKUDS/nanobot/issues/4390) 讨论了“普通用户的多实例管理”需求。用户希望能基于单机通过不同文件夹配置来隔离运行多个 Agent 实例，并隐藏不需要的 UI 设置。这反映出 NanoBot 在重度用户群体中正被作为核心生产力工具多开使用。
*   **飞书扫码创建机器人**：[PR #4391](https://github.com/HKUDS/nanobot/pull/4391) 提出了一种极为惊艳的特性——通过 CLI 生成二维码，用户只需用飞书 App 扫码即可自动创建并注册新的 Bot 应用，免去手动查找凭证的痛苦。这大幅降低了国内企业级用户的部署门槛。
*   **初始化向导优化请求**：[Issue #4376](https://github.com/HKUDS/nanobot/issues/4376) 指出当前的 `onboard --wizard` 需要了解过多技术细节，呼吁为非技术新用户提供更无痛的引导配置方案。

---

### 5. Bug 与稳定性
今日报告并处理了多个影响运行稳定性的关键 Bug，部分已迅速修复：

**高危/阻断性 Bug (已修复/有 PR 跟进):**
1.  **本地模型代理网络穿透问题**: [Issue #4366](https://github.com/HKUDS/nanobot/issues/4366) 报告在开启系统代理后，本地模型服务器 无法连接。**状态**: 已通过 [PR #4367](https://github.com/HKUDS/nanobot/pull/4367) 修复并合并。
2.  **子目录 Git 命令被拦截**: [Issue #4375](https://github.com/HKUDS/nanobot/issues/4375) 报告工作区安全策略错误拦截了子目录中的合法 `git` 命令。**状态**: 已通过 [PR #4380](https://github.com/HKUDS/nanobot/pull/4380) 修复，并提交了端到端回归测试 [PR #4393](https://github.com/HKUDS/nanobot/pull/4393)。

**一般性/体验级 Bug:**
1.  **WebUI 移动端体验**：[Issue #4388](https://github.com/HKUDS/nanobot/issues/4388) 报告在 iOS 26.5 (iPhone Air) 上点击 WebUI 输入框会触发页面异常放大和 UI 错位，影响移动端阅读。（暂无 Fix PR）
2.  **Fallback 模型上下文截断问题**：[Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) 指出当备用模型的上下文窗口 小于主模型时，NanoBot 未正确裁剪提示词，可能导致备用模型溢出报错。

---

### 6. 功能请求与路线图信号
从近期的 Issue 与 PR 活动中，可以清晰看出 NanoBot 下一步的演进方向：

*   **企业级多租户与多实例架构**：[Issue #936](https://github.com/HKUDS/nanobot/issues/936) 强烈呼吁实现单实例管理多 Agent 的多租户网关，以降低容器资源开销。
*   **运维与调试可观测性**：[Issue #3437](https://github.com/HKUDS/nanobot/issues/3437) 提交了 RFC，请求支持按需触发心跳检测，以便在不执行实际动作（Phase 2）的情况下低成本调试 `HEARTBEAT.md` 逻辑。
*   **模型调度的自动化**：[Issue #4378](https://github.com/HKUDS/nanobot/issues/4378) 提出希望支持基于 Cron 定时任务级别的模型/预设切换，反映了用户在不同时段（如工作/休息）希望自动切换不同算力或 Prompt 模型的诉求。

---

### 7. 用户反馈摘要
基于今日 Issues 和 PRs 的摘要内容，提炼用户的核心反馈如下：

*   **痛点：Docker 容器化部署兼容性**：[Issue #4360](https://github.com/HKUDS/nanobot/issues/4360) 反映在纯净的 Debian 13 Docker 容器中安装时遇到 Shell 语法不兼容问题，说明官方安装器在极简环境下的鲁棒性仍需加强。
*   **赞誉：快速的重放与记忆管理能力**：从 [PR #4373](https://github.com/HKUDS/nanobot/pull/4373) 和 [PR #4349](https://github.com/HKUDS/nanobot/pull/4349) 可以看出，用户深度使用并依赖于长对话的重放窗口和记忆压缩功能。开发者不仅在用，还在苛求 Token 合并时的上下文连贯性。
*   **痛点：内网部署的代理冲突**：大量使用本地大模型的用户在后台挂梯子时，极易触发网络请求路由错误，[PR #4367](https://github.com/HKUDS/nanobot/pull/4367) 的修复精准击中这部分用户群的痛点。

---

### 8. 待处理积压
*   **大模型提供商去重重试机制**：[PR #4021](https://github.com/HKUDS/nanobot/pull/4021) (创建于 5月27日) 针对 Codex 提供商的“Duplicate item found”400 错误进行了修复与去重，目前待合并状态已持续近 3 周，需要维护者进行最终 Code Review 或跟进。
*   **多租户网关需求**：[Issue #936](https://github.com/HKUDS/nanobot/issues/936) (创建于 2月21日) 作为企业级部署的核心诉求，长期处于 Open 状态，建议团队评估是否纳入正式 Roadmap。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**报告日期**: 2026-06-18  
**数据来源**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 今日速览
Hermes Agent 在过去 24 小时内保持极高的社区活跃度，共处理了 100 条 Issues 和 PRs 更新。项目当前的研发重心高度聚焦于**网关架构重构**、**沙盒安全强化**以及**跨平台桌面端部署优化**。值得注意的是，尽管社区贡献了大量高质量的功能与修复 PR（待合并 41 个），但今日无新版本发布，且部分核心集成存在积压现象。整体而言，项目正处于架构向企业级演进的关键重构期。

---

### 2. 版本发布
**本日无新版本发布。**
*(注：目前最新公开版本仍为 0.16.0，社区已有针对 0.16.x 的反馈，预计待核心网关与安全 PR 合并后将迭代新版本。)*

---

### 3. 项目进展
今日项目通过多个重磅 PR 推进了底层架构与安全性的升级，整体代码架构正向企业级高可用方向迈进：
*   **架构与网关解耦**：PR [#48078](https://github.com/NousResearch/hermes-agent/pull/48078) 引入了 `RelayAdapter` 和 `CapabilityDescriptor` 握手机制，允许网关变为无状态并支持按需缩放至零，这是网关架构的重大飞跃。同时，PR [#48077](https://github.com/NousResearch/hermes-agent/pull/48077) 提取了共享的 ingress normalization 层，为后续适配器迁移打下基础。
*   **安全与隔离强化**：针对沙盒环境的网络代理防火墙（iron-proxy）取得突破，PR [#48073](https://github.com/NousResearch/hermes-agent/pull/48073) 修复了三个高危的 P0 级安全漏洞，PR [#48076](https://github.com/NousResearch/hermes-agent/pull/48076) 补齐了 P1/P2 级别的威胁建模与 GPG 验证，大幅提升了 Agent 在 Docker 沙盒中运行的安全性。
*   **上下文引擎与工具调用稳定性**：PR [#30622](https://github.com/NousResearch/hermes-agent/pull/30622) 补丁了上下文压缩时的越界处理与多模型回退逻辑；PR [#48069](https://github.com/NousResearch/hermes-agent/pull/48069) 修复了 MCP 协议工具调用时因 keepalive 竞争导致的无限期挂起问题。

---

### 4. 社区热点
今日社区讨论呈现出极强的深度与技术诉求，重点关注多平台支持与底层架构灵活性：
*   **即时通讯平台集成需求**：Issue [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) 关于 Rocket Chat 支持的呼声再起，获得 8 个点赞，反映出用户对 Hermes 作为多渠道消息网关的强烈需求。
*   **桌面端瘦客户端化**：Issue [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) 以 17 个点赞成为今日最受期待的功能。用户强烈要求桌面端能作为“瘦客户端”直接连接远程后端，而不是每次启动都在本地强行拉起运行时。
*   **开发者插件生态与模型路由**：Issue [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) 和 [#46991](https://github.com/NousResearch/hermes-agent/issues/46991) 深入探讨了统一的模型路由插件钩子设计。高级用户希望在多订阅（如 Claude Max、ChatGPT Codex 等）之间实现基于配额的动态负载均衡。

---

### 5. Bug 与稳定性
今日报告的 Bug 集中在桌面端构建链路与特定大模型解析上，部分严重问题已有对应修复：

*   **[P1] 运行时模型丢失 (Linux)**：Issue [#48061](https://github.com/NousResearch/hermes-agent/issues/48061) 报告在 Linux 下通过 pipx 安装的 v0.16.0 在发送请求时 Model 和 Provider 为空，导致重试耗尽。*目前尚无对应修复 PR。*
*   **[P1] Nix 系统网关安装异常**：Issue [#48071](https://github.com/NousResearch/hermes-agent/issues/48071) 指出 Nix 的一级安装生成的 systemd unit 绕过了 Hermes 包装器，导致服务启动失败。
*   **[P2] 跨平台桌面端 Electron 构建崩溃**：这是一个影响极广的阻塞性问题。Issue [#47917](https://github.com/NousResearch/hermes-agent/issues/47917)、[#48059](https://github.com/NousResearch/hermes-agent/issues/48059)、[#48021](https://github.com/NousResearch/hermes-agent/issues/48021) 及 Windows 环境的 [#48019](https://github.com/NousResearch/hermes-agent/issues/48019) 报告在执行 `hermes update` 或首次安装时，由于 `node_modules` 层级与缓存失效导致 `electronDist does not exist`。
*   **[P2] XML 标签注入与上下文损坏**：Issue [#47967](https://github.com/NousResearch/hermes-agent/issues/47967) 指出特定模型（如 Xiaomi, Nvidia）读取外部文件中的 XML 标签时，会产生幽灵工具调用并破坏对话上下文。*已有缓解方案：PR [#48074](https://github.com/NousResearch/hermes-agent/pull/48074) 修复了类似上下文映射错误的问题。*

---

### 6. 功能请求与路线图信号
基于近期的 Issues 与活跃 PR，可以清晰地勾勒出 Hermes Agent 下一阶段的路线图信号：
*   **企业级网关调度**：结合 PR [#48075](https://github.com/NousResearch/hermes-agent/pull/48075)（模型回退通知），项目正致力于打造对用户透明且高可用的多模型容灾机制（Issue [#41590](https://github.com/NousResearch/hermes-agent/issues/41590)）。
*   **深度记忆压缩**：Issue [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) 提议集成 `headroom-ai` 进行工具输出的按需压缩，以替代目前粗暴的整窗上下文截断，这非常符合长会话 Agent 的发展需求。
*   **多语言与本地化**：国际化支持正在快速扩充。PR [#48070](https://github.com/NousResearch/hermes-agent/pull/48070)（法语，2100+ 字符串）和 PR [#45619](https://github.com/NousResearch/hermes-agent/pull/45619)（阿拉伯语及 RTL 支持）表明 Desktop 端正全面拥抱全球化。

---

### 7. 用户反馈摘要
*   **痛点 1：桌面端环境过于笨重**：大量 Mac/Windows 用户反馈（如 [#40187](https://github.com/NousResearch/hermes-agent/issues/40187), [#46260](https://github.com/NousResearch/hermes-agent/issues/46260)），Hermes 在桌面端的安装与更新常常因为 Node 环境、Python 版本或 Electron 缓存产生阻断性冲突。用户更期望“开箱即用”的客户端体验。
*   **痛点 2：CLI 与桌面端配置状态不同步**：如 Issue [#48055](https://github.com/NousResearch/hermes-agent/issues/48055) 反映，在 CLI 中临时切换模型后，`/new` 命令未能重置为配置默认值，导致状态管理混乱。
*   **亮点：沙盒安全设计受认可**：尽管 iron-proxy 还在测试阶段，但其“沙盒仅持有不透明代理令牌”的设计理念得到了进阶开发者在 PR 讨论中的积极评价，认为这从根本上解决了沙盒被攻破后的密钥泄露问题。

---

### 8. 待处理积压
*   **长期未关闭的核心 Bug**：Issue [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) 暴露出视觉链路的 fallback 机制因 kwargs 不匹配已静默失效长达一个月（P1 级别），需立即合并修复。
*   **长期搁置的功能增强**：Issue [#6715](https://github.com/NousResearch/hermes-agent/issues/6715) 关于集成第三方动态记忆体（agentmemory）的讨论自 4 月起无明显进展，建议维护团队评估是否将其纳入官方插件市场路线图。
*   **遗留的会话管理 Bug**：Issue [#28296](https://github.com/NousResearch/hermes-agent/issues/28296) 提到 OpenVikingMemoryProvider 在会话切换时 session ID 过期的问题，虽然刚刚被标记关闭，但提醒了所有 Memory Provider 插件开发者需要正确实现 `on_session_switch()` 生命周期钩子。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这份报告为您深度解析 2026 年 6 月 18 日 PicoClaw 项目的 GitHub 动态。今日项目整体呈现出极高的维护质量与社区活跃度，尤其在安全加固、多模型适配及客户端兼容性方面取得了实质性进展。

---

### 📊 PicoClaw 项目动态日报 (2026-06-18)

#### 1. 今日速览
过去 24 小时内，PicoClaw 项目保持着高度活跃的开发节奏，共处理了 4 条 Issues（2 新开/2 关闭）和 10 条 PR（4 待合并/6 已合并）。项目成功发布了最新的 `v0.3.0-nightly` 版本，并在安全防护层面完成了关键性升级。开发者们不仅迅速修复了前沿大模型（如 Gemini 3.5 Flash）的兼容性 Bug，还对搜索类工具及 Web UI 做了细粒度优化。整体而言，项目正在快速迭代中，代码审查响应速度极佳。

#### 2. 版本发布
*   **[Release] nightly: Nightly Build**
    *   **版本号**: `v0.3.0-nightly.20260617.a16a1e15`
    *   **说明**: 这是一个自动化构建的每日夜间版本，包含了过去 24 小时合并的最新代码（如安全补丁和修复）。
    *   ⚠️ **注意事项**: 官方提示该版本可能不稳定，生产环境部署请谨慎使用。
    *   [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

#### 3. 项目进展
今日共有 6 个 PR 被合并/关闭，极大地提升了项目的稳定性、安全性和生态兼容性：
*   🔒 **安全漏洞修复**: [PR #3140](https://github.com/sipeed/picoclaw/pull/3140) 修复了 OneBot 入站媒体 URL 处理逻辑，阻止了攻击者利用恶意 `url` 发起的 SSRF 攻击（防范主机侧任意网络请求抓取）。
*   🤖 **大模型兼容性突破**: [PR #3136](https://github.com/sipeed/picoclaw/pull/3136) 解决了 Gemini 3.5 Flash 模型因 `thought_signature` 字段格式不匹配（驼峰 vs 下划线）导致的工具调用失败问题。
*   🔍 **搜索能力修复**: [PR #3139](https://github.com/sipeed/picoclaw/pull/3139) 适配了搜狗搜索 WAP 页面新的 HTML 结构，恢复了 Web 搜索工具的正常解析。
*   💻 **Web 体验优化**: [PR #2990](https://github.com/sipeed/picoclaw/pull/2990) 修复了 Web UI 中会话历史记录显示不全的 Bug，确保多轮对话上下文完整可见。
*   ☁️ **基础设施扩充**: [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) 成功将 NEAR AI Cloud 添加为一等公民的 OpenAI 兼容大模型提供方。

#### 4. 社区热点
*   🔥 **安全性改进呼声**: [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (👍 2)。社区开发者指出老旧的 `libolm` 加密库已停止维护且存在安全风险，强烈建议官方改用 Matrix 推荐的 `vodozemac`。这反映了 PicoClaw 用户对端到端加密通信（如接入 Matrix/Signal 等协议）的强需求。
*   🌐 **去中心化通讯网关需求**: [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) 用户明确提出希望能接入 SimpleX、Wire 或 Tox 等高度注重隐私的通讯协议。这与目前开放的 [PR #3063 (Delta Chat 网关)](https://github.com/sipeed/picoclaw/pull/3063) 不谋而合，表明 PicoClaw 在作为“隐私 IM 机器人/AI 助手宿主”的场景下极具潜力。

#### 5. Bug 与稳定性
*   **[严重/已修复] OneBot 媒体 URL 任意抓取漏洞**: ([Issue #3070](https://github.com/sipeed/picoclaw/issues/3070) 已关闭) 攻击者可通过构造特殊的媒体 URL，让 PicoClaw 宿主机去请求内网私有地址。**此 Bug 已通过今日合并的 [PR #3140](https://github.com/sipeed/picoclaw/pull/3140) 彻底修复。**
*   **[高/已修复] Gemini 3.5 Flash 工具执行崩溃**: ([Issue #3111](https://github.com/sipeed/picoclaw/issues/3111) 已关闭) 在调用新模型 `gemini-3.5-flash` 执行 Tool/Skill 时，由于后端未按模型要求的 `snake_case` 格式返回推理签名，导致 API 报 400 错误。**已通过 [PR #3136](https://github.com/sipeed/picoclaw/pull/3136) 修复。**

#### 6. 功能请求与路线图信号
*   **隐私通讯协议扩展**: 结合用户对 SimpleX/Tox 的诉求 ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)) 以及当前待合并的 Delta Chat 网关 ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063))，未来版本的重点方向之一是**“多协议/去中心化通讯平台接入”**。
*   **加密算法现代化**: 迁移至 `vodozemac` ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) 的需求已被打上 `priority: high`，极有可能在近期提上开发日程。

#### 7. 用户反馈摘要
从今日的 Issues 与 PR 提交中可以看出：
1.  **AI 前沿模型追随度高**: 用户（如 @Giordano10）会在第一时间将最新的前沿模型（Gemini 3.5 Flash）接入 PicoClaw 进行 Agentic 测试，这对项目底层处理不同 LLM API 规范的鲁棒性提出了很高要求。
2.  **搜索工具需要持续维护**: [PR #3139](https://github.com/sipeed/picoclaw/pull/3139) 反映出外部搜索引擎（如搜狗）经常微调前端 HTML 结构，导致 PicoClaw 内建的爬虫抓取失效。用户高度依赖内置的 `web_search` 工具进行信息检索，系统需要更健壮的容错或诊断日志（如 [PR #3141](https://github.com/sipeed/picoclaw/pull/3141) 所做的工作）。
3.  **异步 Agent 交互体验待打磨**: [PR #3142](https://github.com/sipeed/picoclaw/pull/3142) 解决了子 Agent 完成任务时重复推送消息的问题，说明用户正在深度使用 PicoClaw 的复杂任务分发与 Spawn（子进程）能力。

#### 8. 待处理积压
*   ⚠️ **长期挂起的高优 Issue**: [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (放弃 libolm 转用 vodozemac) 被标记为 `help wanted` 及 `priority: high`，建议核心维护团队尽快评估并推进，以免成为安全短板。
*   ⚠️ **通讯网关 PR 待 Review**: [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) (添加 Delta Chat 网关) 已挂起数日。鉴于社区对 IM 接入的高涨热情，建议优先进行代码审查。
*   ⚠️ **类型断言修复需关注**: [PR #3092](https://github.com/sipeed/picoclaw/pull/3092) (修复技能安装时的类型断言隐患) 目前处于 `stale`（停滞）状态，需作者或维护者跟进推进合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报
**日期**: 2026-06-18 | **项目**: [nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

### 1. 今日速览
过去 24 小时内，NanoClaw 项目呈现出极高的开发活跃度与社区参与度，共产生了 5 条 Issue 更新（4 被关闭/活跃）和高达 19 条 PR 更新（3 已合并）。项目核心团队与社区贡献者今天集中清理了关键的安全漏洞与稳定性隐患，并针对 v2.1.x 系列版本引入的破坏性变更进行了企业级部署（Managed fleets）的兼容性修复。此外，针对 Agent 技能文档和 CLI 的体验优化占据了大量提交，表明项目正处于快速迭代与工程化打磨并重的阶段。

---

### 2. 版本发布
今天项目发布了 2 个汇总版本，主要整合了近期的底层更新：

*   **v2.1.17** ([Release Notes](https://github.com/qwibitai/nanoclaw/releases/tag/v2.1.17))
    *   **包含变更**：整合了从 v2.1.1 到 v2.1.17 的所有 `package.json` 依赖升级。
*   **v2.1.0** ([Release Notes](https://github.com/qwibitai/nanoclaw/releases/tag/v2.1.0))
    *   **[破坏性变更]**：**启动现在需要升级标记 (`upgrade-state.json`)。** 主机将拒绝启动，除非 `data/upgrade-state.json` 记录表明本次安装是通过正常流程到达当前版本的。
    *   **[破坏性变更]**：**`@onecli-sh/sdk` 从 0.5.0 跳跃至 2.2.1，强制要求 OneCLI 服务器支持 `/v1` API。** 旧版服务器会对所有 SDK 调用返回 404，网关和 CLI 版本现已强制锁定。

> ⚠️ **迁移警告**：自 v2.1.0 起，破坏性更新对自动化部署链条提出了严苛要求，请运维人员务必检查环境变量兼容性（见下方 PR #2780）。

---

### 3. 项目进展
今日共有 3 个关键 PR 被合并/关闭，极大推进了系统在企业环境下的可用性：

*   **[CLOSED] [PR #2780](https://github.com/nanocoai/nanoclaw/pull/2780) - 为托管舰队提供启动触发器豁免**
    *   **意义**：修复了 v2.1.0 引入的破坏性变更导致镜像部署失败的问题。新增 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 环境变量，允许不可变 VM 镜像绕过启动检查，**挽救了企业级批量部署场景**。
*   **[CLOSED] [PR #2797](https://github.com/nanocoai/nanoclaw/pull/2797) - 隔离单会话消息投递失败**
    *   **意义**：配合 Issue #2796，重构了消息轮询逻辑（`pollActive`/`pollSweep`）。修复了一个 agent 的数据库损坏会导致全局消息投递线程崩溃退出的严重架构缺陷。
*   **[CLOSED] [PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794) - 恢复托管舰队的网关环境变量认证**
    *   **意义**：修复了 v2.1.17 中导致所有托管 agent 遭遇 `401 No credentials config` 的严重回归。

---

### 4. 社区热点
今日社区焦点主要集中在 **Agent 间通信的控制粒度** 以及 **技能体验优化** 上：

*   🌟 **[PR #2793](https://github.com/nanocoai/nanoclaw/pull/2793): 支持配置 Agent 间消息审批策略**
    *   作者: moshe-nanoco
    *   **分析**：这是一个重量级的功能增强。引入了 A→B 的定向消息审批网关。在多 Agent 协同工作的场景下，用户对“失控 Agent”的担忧日益增加，此功能允许接收方拦截并人工审批消息，满足了高端安全与合规诉求。
*   📝 **Agent 技能体系集中重构**
    *   用户 `specterslient95-lgtm` 在一天内提交了 4 个 Issues（[#2785](https://github.com/nanocoai/nanoclaw/issues/2785), [#2787](https://github.com/nanocoai/nanoclaw/issues/2787), [#2789](https://github.com/nanocoai/nanoclaw/issues/2789), [#2791](https://github.com/nanocoai/nanoclaw/issues/2791)）和对应的 4 个 PRs。精准指出了技能文档（如 `add-imessage`, `init-onecli`）缺乏目录预创建、端口说明滞后等问题。这反映出社区高级用户正在深度使用 `.claude/skills` 体系，并对文档严谨性提出了更高要求。

---

### 5. Bug 与稳定性
今日修复和暴露了多个高危及中危 Bug：

**🔴 P0 严重级别:**
1.  **LLM 认证全面失效 (401 错误)** - 已在 [PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794) 修复。
2.  **单点故障导致全局消息停摆** - 已在 [PR #2797](https://github.com/nanocoai/nanoclaw/pull/2797) 修复。
3.  **路径遍历漏洞 (CWE-22)** - 状态：**待合并 [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)**。`ncl groups create --folder` 可通过 `../../etc` 逃逸沙箱限制。
4.  **任意文件读取漏洞 (CVE-2026-29611)** - 状态：**待合并 [PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799)**。`send_file` 未限制绝对路径，提示词注入后的 Agent 可读取容器内的凭证等敏感文件。

**🟠 P1 高危/中危级别:**
5.  **CLI 内存泄漏与死锁** - 状态：**待合并 [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)**。Socket 客户端缺少超时和响应大小限制，恶意服务端可使 Host 内存耗尽或永久挂起。
6.  **CLI 群组创建必崩** - 状态：**待合并 [PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804)**。`NOT NULL` 约束冲突导致所有创建操作报错。

---

### 6. 功能请求与路线图信号
从近期的 PR 中，我们可以清晰看到 NanoClaw 未来的几个演进方向：

*   **企业级安全控制闭环**：从路径限制（#2800）、文件访问限制（#2799）到 Agent 间消息审批（#2793），项目正在构建一整套防范 "Agent Hijacking"（Agent 劫持/提示词注入）的防御纵深体系。
*   **可观测性增强**：[PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) 提交了一个只读的命令行仪表盘（`/add-clidash`），表明项目正在补齐本地运维监控的短板。
*   **多后端适配**：[PR #2717](https://github.com/nanocoai/nanoclaw/pull/2717) 添加了 Atlas Cloud 作为兼容 OpenAI 接口的 LLM 后端，反映出项目致力于打破单一大模型厂商绑定。

---

### 7. 用户反馈摘要
根据 Issue 和 PR 描述，当前真实用户的痛点集中在以下几个方面：

1.  **自动化部署摩擦大**：v2.1.0 的 Tripwire 机制虽然保护了常规用户，但严重破坏了不可变基础设施（如 VM 镜像分发）的启动流程，用户反馈“容器启动了，消息也能路由，就是 LLM 认证失败”，这类隐性问题最难排查（[PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794)）。
2.  **环境依赖处理不够智能**：用户指出在运行初始化脚本时，如果本地没有 `src/channels` 目录，重定向写文件会直接报错（[Issue #2791](https://github.com/nanocoai/nanoclaw/issues/2791)）。
3.  **“极简文档”带来的困惑**：官方提供的 10 行设置说明过于依赖自动化脚本，一旦失败用户无从下手。用户希望看到分阶段的执行逻辑和故障恢复指南（[Issue #2789](https://github.com/nanocoai/nanoclaw/issues/2789)）。

---

### 8. 待处理积压
*   ⏳ **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750): 处理容器被杀后的陈旧 SQLite 日志**
    *   **状态**：创建于 6 天前，今日有更新。这是一个非常复杂的数据库状态同步问题（涉及 Host 的 READONLY 模式与热日志竞争），直接影响 Agent 在异常重启后的数据一致性，建议维护者优先 Review 并合并。
*   ⏳ **安全三剑客 (PR #2799, #2800, #2802)**
    *   **状态**：均由贡献者 `sturdy4days` 今日提交。涉及 2 个 CVE/CWE 级漏洞和 1 个 DoS 漏洞，目前处于 Open 状态等待 CI 跑完或 Code Review，建议项目组开启 Fast-track 合并流程。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这是一份为您生成的 NullClaw 开源项目 2026-06-18 动态日报：

# NullClaw 项目动态日报 (2026-06-18)

### 1. 今日速览
- **整体活跃度**：项目在过去 24 小时内保持温和活跃，主要表现为社区旧有问题的持续推进和核心代码的贡献。
- **代码与开发**：今日有 1 个核心修复 PR 提交，重点解决了困扰命令行用户的键盘输入问题；但无新版本发布，也无已合并或关闭的代码库变更。
- **社区与问题追踪**：共有 3 条历史 Issues 产生新讨论，表明维护者或社区正在进行跟进解答，但问题解决进度相对缓慢。
- **健康度评估**：项目处于稳定维护期，开发者核心聚焦于基础体验（如 CLI）的修复，但在部分复杂集成（如外部调度器）上仍未有明确突破。

---

### 2. 版本发布
*今日无新版本发布。*

---

### 3. 项目进展
今日项目无已合并或关闭的 PR/Issue，但在代码贡献侧取得了重要突破：
- **提交了关键交互修复**：开发者 [@vernonstinebaker] 提交了 [PR #960](https://github.com/nullclaw/nullclaw/pr/960)。该 PR 为 `nullclaw agent` 的交互式 REPL 环境引入了一个小型且无内存分配的行编辑器，并启用了 POSIX 原始模式输入。
- **整体进展**：这一改动从根本上修复了终端中方向键、历史记录导航和光标移动的问题，极大提升了开发者和使用 CLI 的用户体验，是今日项目向前迈出的最重要一步。

---

### 4. 社区热点
今日讨论最活跃的均是为期一至两个月的老问题，反映出用户在特定部署场景下的持续痛点：
1. **[Issue #915](https://github.com/nullclaw/nullclaw/issue/915) [bug] Problem with scheduler unauthorized**
   - **热度**：2 条新评论（创建于 5 月 15 日）。
   - **分析**：用户在 Ubuntu 环境下结合本地网络中的 Ollama 大模型（RTX 3090 运行 qwen3.6:27b）时，LLM 调用正常，但调度器在 Telegram 和控制台均出现未授权报错。这反映出 NullClaw 在对接外部 LLM 主机以及多平台（IM端）集成时的权限/鉴权配置存在痛点。
2. **[Issue #865](https://github.com/nullclaw/nullclaw/issue/865) [bug] CLI shows ctrl characters for up/down/left/right keys**
   - **热度**：2 条新评论（创建于 4 月 23 日）。
   - **分析**：用户反馈 CLI 破坏了原生键位绑定，导致方向键输出乱码控制字符。此问题呼声较高，直接催生了今日提交的 [PR #960](https://github.com/nullclaw/nullclaw/pr/960)，属于“社区反馈 -> 开发者响应”的典型案例。
3. **[Issue #861](https://github.com/nullclaw/nullclaw/issue/861) How to enable the Web UI on headless VPS server?**
   - **热度**：1 条新评论（创建于 4 月 22 日）。
   - **分析**：用户对 README 中关于 Web UI 和 Browser Relay 的设置文档表示“看不懂（70%无法理解）”，强烈要求用非技术黑话来解释如何将 Agent 隧道接入浏览器。说明当前文档对非专业用户或个人助手初学者不够友好。

---

### 5. Bug 与稳定性
今日无新增 Bug 报告，存量重点 Bug 排列如下（按严重程度）：
- **🟡 中度严重：调度器鉴权失败** ([#915](https://github.com/nullclaw/nullclaw/issue/915))
  - **状态**：已讨论月余，暂无对应 fix PR。
  - **影响**：阻碍了自动化任务和外部 LLM 算力（如 Ollama）的无缝整合，限制了进阶用户的使用。
- **🟢 轻度严重：CLI 方向键乱码** ([#865](https://github.com/nullclaw/nullclaw/issue/865))
  - **状态**：**已有对应 Fix PR**（[PR #960](https://github.com/nullclaw/nullclaw/pr/960)）。
  - **影响**：影响终端交互体验，但不影响核心 Agent 逻辑，且修复方案已在今日进入待合并队列。

---

### 6. 功能请求与路线图信号
- **文档重构需求**：从 [Issue #861](https://github.com/nullclaw/nullclaw/issue/861) 释放出强烈信号，项目需要针对“无头 VPS / 远程服务器”用户提供一份保姆级、去黑话的 Web UI 部署指南。
- **下一版本预期**：由于今日提交的 [PR #960](https://github.com/nullclaw/nullclaw/pr/960) 专门修复了 CLI 交互逻辑，一旦该 PR 被审查合并，极大概率会被打包进下一个 Patch（补丁）版本中发布。

---

### 7. 用户反馈摘要
基于今日活跃 Issue 的真实反馈，提炼用户画像与痛点如下：
- **使用场景下沉**：越来越多个人用户尝试在远程 VPS 上部署 NullClaw，并希望结合本地算力（如 RTX 3090 跑 Ollama）作为外部大脑，说明项目在“私有化/本地部署 AI 助手”领域具有吸引力。
- **文档门槛过高**：终端用户（如 eabase）对复杂的网络隧道配置感到吃力，官方文档偏向专业开发者，缺乏直观的操作步骤。
- **CLI 体验粗糙**：对于长期使用终端的用户来说，基础的按键绑定缺失是非常破坏体验的 Bug，这说明早期版本更注重功能实现，近期正在补齐基础交互体验的短板。

---

### 8. 待处理积压
以下重要问题已搁置较长时间，建议维护者重点关注：
- **[Issue #915](https://github.com/nullclaw/nullclaw/issue/915)**：调度器未授权问题已积压超 1 个月。考虑到用户已配置好外部 LLM 且模型运行正常，调度器的卡壳极易导致用户流失，建议优先确认是否为权限校验逻辑的 Bug 或提供明确的配置指引。
- **[PR #960](https://github.com/nullclaw/nullclaw/pr/960)**：今日提交的 CLI 修复 PR 目前处于 `[OPEN]` 且无评论状态。建议维护团队尽快进行 Code Review 并推进合并，以安抚 [Issue #865](https://github.com/nullclaw/nullclaw/issue/865) 中等待已久的用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-06-18)**

作为专注于 AI 智能体与个人 AI 助手领域的基础设施项目，IronClaw 今日展现出极高的研发活跃度与迭代节奏。以下是详细的数据分析与项目动态报告。

---

### 1. 今日速览
* **整体活跃度极高**：过去 24 小时内，项目处理了 50 条 Issues（24 条新建/活跃，26 条关闭）与 50 条 PR（25 条待合并，25 条合并/关闭），展现了强大的工程吞吐量。
* **核心主轴明确**：今日绝大多数工作围绕 **“Reborn” (重生架构升级)** 展开，涵盖生产环境部署、WebUI v2 交互优化以及底层 OAuth 安全性的深度加固。
* **基础设施演进**：开发团队正在大规模重构智能体执行循环和上下文系统，同时高度关注工程生产力（如引入自动化任务服务处理 CI/代码审查），正快速向真正的 AI-native 研发团队转型。

### 2. 版本发布
* **本日无新版本发布 (0 个 Release)**。项目目前处于高频迭代的 `main` 分支开发阶段，距离下一次稳定版 Tag 仍有大量特性（特别是 Reborn 架构相关）需要合并。

### 3. 项目进展
今日团队合并了大量关键 PR，项目在**执行稳定性、前端体验和安全性**上迈出了一大步：
* **执行引擎重构落地**：合并了智能体无进展检测的系列重构（[PR #4993](https://github.com/nearai/ironclaw/pull/4993) 诚实停止执行，而非伪造完成态；[PR #5000](https://github.com/nearai/ironclaw/pull/5000) 引入内容摘要验证进度），彻底修复了智能体在复杂任务中卡死的问题。
* **上下文与性能突破**：[PR #5029](https://github.com/nearai/ironclaw/pull/5029) 为 `read_file` 引入了字节预算机制，成功解决了因读取大文件导致智能体运行超时的痛点。
* **WebUI v2 性能与可视化飞跃**：[PR #5024](https://github.com/nearai/ironclaw/pull/5024) 移除了对第三方 CDN 的依赖，将前端资源全面本地化，彻底解决了慢速网络下打开 WebUI 耗时超 15 秒的问题；同时 [PR #5035](https://github.com/nearai/ironclaw/pull/5035) 实现了工具运行时参数的实时可视化。
* **关键 Bug 修复**：[PR #5051](https://github.com/nearai/ironclaw/pull/5051) 修复了导致 Gmail 授权失败的严重阻断性缺陷。

### 4. 社区热点
今日最受关注的讨论集中在高级架构设计与生产力提升上：
* **重塑生产环境部署标准**：[Issue #3026](https://github.com/nearai/ironclaw/issues/3026) 讨论了 Reborn 生产环境图的生产级熔断与校验机制。这表明项目正从“能跑”向“企业级可信”迈进，要求在依赖服务缺失时停止提供流量。
* **构建 AI 自动化任务基础设施**：[Issue #5036](https://github.com/nearai/ironclaw/issues/5036) 由核心成员提出，旨在构建可扩展的智能体服务，用于自动处理代码审查、CI 修复和冲突解决。这发出了强烈的“用 IronClaw 开发 IronClaw”的 Dogfooding 信号。
* **多渠道路线推进**：微信渠道的移植工作（[Issue #3582](https://github.com/nearai/ironclaw/issues/3582)）获得关注，官方正努力将其从 v1 WASM 架构平滑迁移至 Reborn 架构。

### 5. Bug 与稳定性
今日报告并跟进修复了多个影响用户体验的 Bug，稳定防线正在收紧：
* **P0 级别 / 阻断性缺陷**：
  * **Slack 授权安全路径不一致**：([Issue #5009](https://github.com/nearai/ironclaw/issues/5009)) 发现触发式与实时 Slack OAuth 路径在直接消息(DM)的安全门控上存在结构差异，可能导致越权。目前已有修复 PR ([#5052](https://github.com/nearai/ironclaw/pull/5052)) 关闭此问题。
* **P1 级别 / 状态机异常**：
  * **自动化任务被永久阻塞**：([Issue #4986](https://github.com/nearai/ironclaw/issues/4986)) 循环自动化任务在等待工具审批时可能被永久卡死。
  * **Gmail OAuth 恢复失败**：通过 [PR #5051](https://github.com/nearai/ironclaw/pull/5051) 已修复。
* **P2 级别 / UI 交互欺骗**：
  * **工具调用状态反转**：([Issue #3729](https://github.com/nearai/ironclaw/issues/3729)) 用户拒绝安装工具后，页面初始显示报错，但**刷新页面后竟显示为安装成功(绿勾)**。虽然底层日志写了 `[ACTION FAILED]`，但这属于严重误导性 UI Bug，目前仍然 Open。
  * **活动状态卡死**：([Issue #4961](https://github.com/nearai/ironclaw/issues/4961)) 智能体回复完毕后，"Working" 动画指示器一直不消失（已修复）。

### 6. 功能请求与路线图信号
基于近期的 Issue 与 PR，可以洞察到 IronClaw 下一步的技术路线图：
* **更细粒度的工具安全管控**：[PR #3548](https://github.com/nearai/ironclaw/pull/3548) 引入了 `DISABLE_TOOLS_LIST` 标志，允许管理员从注册和调度双层网络中彻底屏蔽特定工具。这表明项目正在加强面向企业级部署的安全管控能力。
* **更底层的模型路由优化**：[Issue #5044](https://github.com/nearai/ironclaw/issues/5044) 指出 Desktop sidecar 将 `NEARAI_MODEL=auto` 透传给云端导致 400 错误。未来版本预计将在本地侧引入更智能的模型解析层或默认模型回落机制。
* **外部身份集成增强**：[PR #5048](https://github.com/nearai/ironclaw/pull/5048) 新增了 GitHub 认证用户的只读 API 能力，预期是为了更好地支持 [Issue #5036](https://github.com/nearai/ironclaw/issues/5036) 中提及的自动化代码审查工作流。

### 7. 用户反馈摘要
从 @sunglow666 等活跃社区 QA 的测试反馈中，可以提炼出以下核心痛点：
* **审批反馈断裂感**：在 Reborn WebUI 中，用户点击“拒绝”工具执行（如 Shell 命令）后，UI 无任何即时反馈，且会打乱后续活动的排序（[Issue #4764](https://github.com/nearai/ironclaw/issues/4764), [Issue #4977](https://github.com/nearai/ironclaw/issues/4977)）。**用户诉求**：需要一个稳定、可见且有序的拒绝/失败状态反馈机制。
* **自动化面板缺乏可操作性**：现有 Automations 面板仅提供抽象的状态点或简单的失败数字（[Issue #4988](https://github.com/nearai/ironclaw/issues/4988), [Issue #5004](https://github.com/nearai/ironclaw/issues/5004)）。**用户诉求**：期望能直观看到“为什么失败”、“具体哪次运行失败”，以及更友好的新手创建引导，而非完全依赖对话指令。
* **首次运行引导割裂**：在未配置 Provider 时，访问扩展和自动化页面会被强行重定向回欢迎页（[Issue #4793](https://github.com/nearai/ironclaw/issues/4793)），用户认为这种硬性拦截破坏了探索感。

### 8. 待处理积压
建议维护者关注以下潜在的长期阻塞或基础设施腐化问题：
* **CI 流水线全线失败（安全预警）**：[Issue #4824](https://github.com/nearai/ironclaw/issues/4824) 报告由于新的 RUSTSEC 安全公告（涉及 postgres 系列的 DoS 漏洞），`cargo-deny` CI 任务在过去三次运行和所有开启的 PR 中全部失败。**需要立即介入升级依赖**。
* **巨量依赖更新积压**：Dependabot 触发了庞大的依赖更新，包括 Rust 侧的 43 个合并更新 ([PR #4876](https://github.com/nearai/ironclaw/pull/4876)) 以及 WASM 相关组件更新 ([PR #4032](https://github.com/nearai/ironclaw/pull/4032))，这些 PR 均处于 Open 状态，由于涉及面广可能引入破坏性变更，需要分派专入进行代码审查与测试。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这是一份基于 GitHub 数据为您生成的 **LobsterAI** 项目动态日报（2026-06-18）。

---

# 🦞 LobsterAI 项目动态日报 (2026-06-18)

### 1. 今日速览
LobsterAI 今日展现出极高的内部工程研发活跃度，项目正处于**新版本发布后的集中清理与稳定优化阶段**。过去 24 小时内，项目成功发布了 `2026.6.15` 正式版，并一口气合并/关闭了 13 个 PR，实现了待处理 PR 清单的“清零”。值得注意的是，今日的代码贡献高度集中于核心开发团队（如 `liuzhq1986`、`btc69m979y-dotcom`），主要围绕 AI 协作工作区的性能调优、内存溢出修复及上下文连续性增强。尽管代码层面极度活跃，但社区端（Issues）表现相对平静，无新增缺陷报告或功能请求。

### 2. 版本发布
**🎯 新版本：[LobsterAI 2026.6.15](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.15)**
本次版本是一个功能与稳定性并重的里程碑更新，核心引入了更强的 Agent 操控能力与多模态交互：
*   **重磅新功能**：
    *   **Computer Use（计算机使用）**：Agent 现在具备了直接操作计算机的能力（由 PR #2143 引入）。
    *   **实时 ASR 语音输入**：Cowork（AI 协作）模块支持实时语音转文字输入，大幅提升了多模态交互体验（由 PR #2148 引入）。
*   **核心体验优化**：
    *   **上下文连续性增强**：大幅改善了经过上下文压缩后的任务连续性，确保 Agent 在长对话中不易“失忆”（由 PR #2145 引入）。
*   *迁移注意*：本次更新涉及 OpenClaw 网关模型的底层调整与 ASR 流程的重构，私有化部署用户在升级后需关注网关内存占用及鉴权配置变化。

### 3. 项目进展
今日项目总计关闭 13 个 PR，整体代码库向前迈出了坚实的一步，主要体现在以下方面：
*   **内存与崩溃修复**：修复了 OpenClaw 网关在长时间多渠道负载下的 OOM（内存溢出）崩溃问题，显式提升了 V8 old-space 限制（[PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)）。
*   **Cowork 模块深度修复**：
    *   修复了停止流式输出时导致模型元数据丢失的问题（[PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154)）。
    *   解决了启动回合被用户中断后依然发送请求的竞态条件（[PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147)）。
    *   解决了同名包模型选择冲突的 Bug（[PR #2153](https://github.com/netease-youdao/LobsterAI/pull/2153)）。
*   **UI 与渲染性能优化**：消除了长会话中侧边栏导航的卡顿（[PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171)），并修复了滚动至底部的位置偏差（[PR #2174](https://github.com/netease-youdao/LobsterAI/pull/2174)）。
*   **基础设施重构**：统一更新了 Portal 兜底链接与升级域名（[PR #2144](https://github.com/netease-youdao/LobsterAI/pull/2144)），并清理了历史遗留的过时分支合并冲突（[PR #2162](https://github.com/netease-youdao/LobsterAI/pull/2162)）。

### 4. 社区热点
由于过去 24 小时无新增或活跃的 Issue，社区热点完全集中在核心开发者提交的高频 PR 合并上。
*   **热点聚焦**：开发者 `liuzhq1986` 集中处理了多名用户此前反馈的长会话体验痛点。例如 [PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171) 通过缓存侧边栏项目避免了重复扫描长消息，这反映出**“超长上下文窗口下的前端渲染性能”**是目前用户使用中的核心痛点。

### 5. Bug 与稳定性
今日通过 PR 修复了大量潜在影响稳定性的 Bug，按严重程度排列如下：
1.  **[严重] 网关 OOM 崩溃**：多频道长时间运行导致网关进程内存溢出被杀。当前已有 Fix PR 并合并：[PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)。
2.  **[较高] 启动-停止竞态条件**：用户在 Agent 启动瞬间点击停止，仍会导致请求发出。已合并 Fix：[PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147)。
3.  **[中等] 语音输入合并冲突遗留**：早期版本合并时丢失了会话切换取消和回调保护逻辑，可能导致语音输入回调错乱。已合并 Fix：[PR #2162](https://github.com/netease-youdao/LobsterAI/pull/2162)。
4.  **[轻微] Artifact 分享上限逻辑**：此前因数量上限关闭的 HTML 分享无法恢复。已合并 Fix：[PR #2172](https://github.com/netease-youdao/LobsterAI/pull/2172)。

### 6. 功能请求与路线图信号
*   **当前用户诉求**：今日 0 条新增功能请求。
*   **路线图信号分析**：结合刚发布的 `2026.6.15` 版本，LobsterAI 的下一步演进方向非常明确：**从纯文本对话助手向“具身/桌面级执行器”演进**。`Computer Use` 功能的加入意味着项目正在对标最新的 AI Agent 前沿能力；同时大量针对 `Cowork` 和长文本压缩（`compaction`）的底层修复，表明团队正在为更复杂、更长期的自动化任务执行打下地基。

### 7. 用户反馈摘要
*因今日无活跃 Issue 讨论，以下反馈提炼自今日合并的代码提交信息：*
*   **痛点 1：长对话卡顿**。用户在处理超长会话时，侧边栏导航和整体 UI 响应变慢（[PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171) 证实了此问题）。
*   **痛点 2：用户输入格式丢失**。用户在输入框精心排版的换行符在发送后消失，变成了纯文本块，影响提示词编写的体验（[PR #2173](https://github.com/netease-youdao/LobsterAI/pull/2173) 修复了此体验问题）。

### 8. 待处理积压
*   今日数据中包含一条积压两个多月后终于被关闭的历史 PR：[PR #1463](https://github.com/netease/youdao/LobsterAI/pull/1463)（修复长模态标题溢出问题）。这表明维护团队正在积极进行 **Backlog 清理（大扫除）**。
*   **建议**：目前待合并 PR 数量为完美的 `0`，Issue 积压量也为 `0`。项目当前的健康度极佳，但这也可能与社区外部贡献者活跃度降低有关。建议维护者在享受短暂“清零”成就感的同时，可以准备发布下一篇技术博客（例如科普新增的 `Computer Use` 架构），以重新激发外部社区的提交热情。

---
*数据来源：LobsterAI GitHub Repository | 统计区间：过去 24 小时*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**: 2026-06-18 | **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)
**角色**: AI 智能体与个人 AI 助手开源项目分析师

---

### 1. 今日速览
Moltis 项目在过去 24 小时内保持了高度活跃的研发与社区讨论状态，产生了 5 条 Issue 更新（4 条新开/活跃，1 条已关闭）和 1 项代码提交（PR）。项目近期的焦点高度集中在**多模态交互体验的打磨**上，尤其是语音（Live mode/TTS/Whisper）模块的稳定性与可配置性。值得注意的是，核心贡献者 `khimaros` 呈现了“发现问题->提交 Issue->提交修复 PR”的高效闭环工作流，展现了极高的项目健康度与迭代效率。

### 2. 版本发布
**无新版本发布。** 当前项目仍处于高频迭代阶段，尚未触发新的发版流程。

### 3. 项目进展
尽管今日没有 PR 被正式合并（数据概览显示 1 条 PR 待合并），但项目在底层通信与配置化方面取得了实质性进展：
*   **RPC 超时可配置化** ([PR #1130](https://github.com/moltis-org/moltis/pull/1130)): 贡献者 `khimaros` 提交了针对 [Issue #1127](https://github.com/moltis-org/moltis/issues/1127) 的修复代码。此更新允许 WebUI 端自定义 RPC 超时时间，这对于网络延迟较高或部署在复杂分布式环境下的用户来说是一个重要的体验提升。该 PR 目前处于待合并状态，等待维护者 Review。

### 4. 社区热点
今日讨论最为热烈的话题是**音频输出格式的自定义需求**。
*   **最活跃 Issue**: [Issue #1126 [Feature]: allow to configure the format of tts output](https://github.com/moltis-org/moltis/issues/1126)（作者: khimaros，评论数: 3）
*   **深度分析**: TTS（文本转语音）是个人 AI 助手的核心交互接口。目前系统默认的音频格式可能无法满足所有部署环境的需求（例如：带宽受限环境需要高压缩比，或需要特定采样率以匹配其他下游音频处理 API）。评论数达到 3 条说明社区开发者正在积极探讨最佳的配置项设计（如 API 暴露方式、支持哪些主流编解码器等）。这反映了用户对 Moltis 的期待正从“能用”向“工业级可定制”转变。

### 5. Bug 与稳定性
今日社区新报告了 2 个 Bug，其中 1 个已迅速解决。按照对系统功能的影响程度排列如下：

1.  **[P0/严重] 实时模式无回声消除导致智能体死循环** ([Issue #1129](https://github.com/moltis-org/moltis/issues/1129) OPEN)
    *   **状态**: 未修复
    *   **详情**: 在 Live（实时语音）模式下，由于缺乏回声消除技术，Moltis 的语音输出被自己的麦克风再次捕获，导致 Agent 重新触发自己。这是一个阻断性的 Bug，严重影响语音对话功能的可用性。
2.  **[P1/中等] 自托管 whisper.cpp 转录错误** ([Issue #1128](https://github.com/moltis-org/moltis/issues/1128) CLOSED)
    *   **状态**: 已关闭
    *   **详情**: 用户在使用本地部署的 whisper.cpp 进行语音转文字时遇到识别错误。此问题已在今日得到确认并关闭（可能已提供临时修复方案或配置指导）。

### 6. 功能请求与路线图信号
从今日的 Issue 动态中，可以清晰提取出用户对 Moltis 下一阶段迭代的三大诉求：
*   **音频管线深度解耦**: 请求允许配置 TTS 输出格式（[#1126](https://github.com/moltis-org/moltis/issues/1126)）以及配置 RPC 超时（[#1127](https://github.com/moltis-org/moltis/issues/1127)，已对应 [PR #1130](https://github.com/moltis-org/moltis/pull/1130)）。*信号：项目需要加强在异构硬件和弱网环境下的鲁棒性。*
*   **基础 UX 交互补全**: 请求增加复制和导出为 Markdown 的功能（[Issue #1131](https://github.com/moltis-org/moltis/issues/1131)，作者: vvuk）。*信号：作为 AI 助手，对话记录的跨平台复用是基本需求，目前 WebUI 在这方面存在短板。*

**预测**: `PR #1130` 预计将在下个版本前合并；针对 Markdown 导出和 TTS 格式配置的需求实现难度较低且用户呼声明确，大概率会被纳入短期开发路线图。

### 7. 用户反馈摘要
通过提取今日的 Issues，真实用户的痛点集中在以下几个方面：
*   **自托管/本地化部署的阵痛**: 多名用户（如 `khimaros`）倾向于使用自托管的模型（如 `whisper.cpp`），但在对接时遇到了格式、超时、转录质量等兼容性问题。
*   **实时语音体验的割裂感**: Live Mode 暴露出的“回声自触发”问题（[#1129](https://github.com/moltis-org/moltis/issues/1129)）说明，Moltis 在全双工语音交互的底层音频处理（AEC）上还需要引入专业的音频中间件或算法，目前尚不能提供流畅的类似 ChatGPT Advanced Voice Mode 的体验。
*   **工作流衔接断层**: 用户需要更方便地将 AI 的回答二次利用（[#1131](https://github.com/moltis-org/moltis/issues/1131) 提出的 Markdown 导出），说明用户不仅把 Moltis 当作玩具，而是已将其整合进实际的办公/研发流中。

### 8. 待处理积压
*   **重点提醒**: [Issue #1129 (回声消除问题)](https://github.com/moltis-org/moltis/issues/1129) 是目前积压中最具技术挑战性和紧迫性的 Issue。解决该问题可能需要引入如 WebRTC 的 AEC 模块或修改音频流处理架构，建议维护者尽快介入评估影响范围并讨论解决方案。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是 2026-06-18 的 CoPaw (QwenPaw) 项目动态日报。

# CoPaw (QwenPaw) 项目动态日报 (2026-06-18)

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内项目共处理了 45 条 Issue（新开/活跃 26 条，关闭 19 条）和 50 条 PR（合并/关闭 35 条），展现了极强的社区参与度和维护团队的响应效率。
- **双轨并行发布**：项目今日同时发布了稳定版 **v1.1.12**（聚焦 UI 优化与稳定性修复）以及 alpha 测试版 **v2.0.0a1**，标志着 CoPaw 正式启动了向 AgentScope 2.0 架构迁移的重大里程碑。
- **核心痛点曝光**：随着用户量增加，上下文压缩（Compaction）、内存索引（ChromaDB）以及多客户端渠道（飞书/小艺）的稳定性问题成为社区当前最大的讨论焦点。

---

## 2. 版本发布
今日项目迎来了重要的小版本迭代及下一代架构预览：

### ✅ v1.1.12 正式版发布
- **UI/UX 大改版**：Console 模型页面全面重构，引入 Provider 聚合与统一的卡片 UI（[PR #5203](https://github.com/agentscope-ai/QwenPaw/pull/5203)）；新增 Simple Mode（简易模式），提供扁平化导航和按更新时间排序的会话列表（[PR #5222](https://github.com/agentscope-ai/QwenPaw/pull/5222)）。
- **性能优化**：移除了 agent 配置中不必要的深拷贝操作，提升运行时性能。

### 🚀 v2.0.0a1 (Alpha) 发布
- **破坏性变更/迁移预警**：后端依赖正式从 AgentScope 1.x 迁移至 AgentScope 2.0（[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)）。采用了全新的架构、API 和运行时模型。此版本仅供测试，生产环境请继续停留在 v1.1.x。

---

## 3. 项目进展
今日合并/关闭的 35 个 PR 极大地推进了系统的稳定性与功能完善，重点进展如下：

- **通道与协议重构**：华为小艺通道彻底重构为双 WebSocket 连接架构，修复了长期存在的通道不可用问题（[PR #5274](https://github.com/agentscope-ai/QwenPaw/pull/5274)）。
- **桌面端底层修复**：修复了 Tauri 桌面端由于插件 Python 依赖导致的启动崩溃循环（[PR #5260](https://github.com/agentscope-ai/QwenPaw/pull/5260)）；增加了桌面端固定端口配置支持（[PR #5272](https://github.com/agentscope-ai/QwenPaw/pull/5272)）。
- **记忆系统稳定性**：针对 macOS 系统下 ChromaDB Rust 绑定导致的 SIGSEGV 崩溃，引入了异步子进程探针机制，在无法捕获系统级信号时提供安全的降级路径（[PR #5271](https://github.com/agentscope-ai/QwenPaw/pull/5271)）。
- **定时任务机制优化**：将 APScheduler 的默认 `misfire_grace_seconds` 从 60 秒增加到 3600 秒，避免了因 Agent 处理长任务时导致的定时任务被静默跳过的问题（[PR #5241](https://github.com/agentscope-ai/QwenPaw/pull/5241)）。

---

## 4. 社区热点
今日讨论最为热烈的问题集中在复杂工作流和多端同步上：

1. **上下文压缩致进程冻结** ([Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218))：16 评论。当子 Agent 触发上下文压缩时，进程直接冻结无响应，只能重启。开发者对这种长时间阻塞表示强烈担忧。
2. **定时任务无法触发** ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))：12 评论。Agent 界面上成功创建了定时任务，但到时间根本不执行，且不支持手动修改配置，严重影响了自动化工作流的构建。
3. **架构迁移大讨论** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727))：11 评论。关于即将到来的 AgentScope 2.0 迁移，社区开发者开始评估破环性变更对他们现有插件的影响。

---

## 5. Bug 与稳定性
根据严重程度，今日报告的关键 Bug 及其修复状态如下：

- 🔴 **[Critical] 云端 RCE 与隧道逃逸漏洞**：QwenPaw 官方云端部署被指出可通过 Prompt Injection 诱导 Agent 安装第三方监控探针，进而获得容器持久化 shell 权限（[Issue #5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)）。*状态：待官方紧急确认与修复。*
- 🔴 **[High] ChromaDB 运行时探针违规**：探针集合名 `_probe` 违反了 ChromaDB 命名规则（必须字母开头），导致启动报错并降级到本地后端，向量检索失效（[Issue #5284](https://github.com/agentscope-ai/QwenPaw/issues/5284)）。*状态：疑似尚未完全修复。*
- 🟠 **[Medium] 会话状态死锁与丢失**：`SafeJSONSession` 并发写入无锁机制，两个异步任务同时操作会导致会话状态被覆盖（[Issue #4232](https://github.com/agentscope-ai/QwenPaw/issues/4232)，已关闭/修复）。
- 🟠 **[Medium] 飞书消息回复错乱**：当用户同时有私聊和群聊会话时，在群里 @ 机器人，回复会被错误地发送到私聊窗口（[Issue #5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)）。*状态：Open。*
- 🟡 **[Low] 升级导致内置技能重置**：每次版本升级，用户手动禁用的内置技能（如 docx, xlsx）会被强制重置为启用状态（[Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)）。*状态：Open。*

---

## 6. 功能请求与路线图信号
结合 Issues 诉求与即将合并的 PR，以下功能极有可能被纳入下一阶段路线图：

1. **配置无缝迁移工具**：针对从 OpenClaw/Hermes 生态迁移过来的用户，社区开发了 `qwenpaw migrate openclaw` CLI 工具（[PR #5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)），正在审核中。
2. **CLI 定时任务管理完善**：由于后台早已暴露 PUT 接口，开发者提交了 `qwenpaw cron update` 命令，支持直接通过命令行修改已存在的定时任务（[PR #5210](https://github.com/agentscope-ai/QwenPaw/pull/5210)）。
3. **BI 数据分析能力扩展**：`DataPaw` 数据分析插件正在引入，将附带 12 种 BI 技能（[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)），极大丰富 CoPaw 的开箱即用能力。
4. **UI 个性化定制**：用户强烈请求增加 UI 字体缩放全局调整功能，以及让聊天输出中的文件路径支持超链接点击（[Issue #4077](https://github.com/agentscope-ai/QwenPaw/issues/4077)）。

---

## 7. 用户反馈摘要
从日常 Issues 中提炼出的真实用户声音：

- **痛点 1：Windows 环境支持略显粗糙**。大量使用 Windows 桌面版的用户反馈存在向量索引无法持久化（[Issue #5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)）、文件下载 404 报错、以及使用 uv 安装时导致钉钉通道失效（[Issue #5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)）等问题。
- **痛点 2：多渠道文件/附件支持割裂**。在 v1.1.11 中，聊天界面的 `send_file_to_user` 失效，不再生成下载链接，退步明显（[Issue #5258](https://github.com/agentscope-ai/QwenPaw/issues/5258)）；同时 MCP 配置接口有保存假象，未能持久化到 `agent.json`（[Issue #5266](https://github.com/agentscope-ai/QwenPaw/issues/5266)）。
- **满意点**：官方对于高风险/破坏性问题的响应迅速，例如对于 macOS 桌面端连续崩溃、打包白屏等严重阻碍使用的问题，均能在 1-2 天内定位根因（如 Rust 绑定库或 PyInstaller 打包配置）并提供修复 PR。

---

## 8. 待处理积压
以下重要 Issue 或 PR 长期未关闭或需要维护者重点介入：

- **安全问题需提级处理**：云端 Prompt Injection 导致的 RCE 漏洞（[Issue #5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)）目前仍处于 Open 状态，作为 Critical 级别，建议维护团队立即介入评估 Agent 执行沙箱的隔离边界。
- **插件与依赖管理冲突**：插件依赖安装导致 cmd 窗口持续弹窗死循环的问题（[Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181)）反映了网络不稳定时安装逻辑的容错机制不足，等待彻底修复。
- **长文上下文压缩策略缺失**：压缩时缺少按条数保留或排除系统人设（Persona）文件的机制，导致被“一刀切”清空，任务被迫中断（[Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)）。上下文管理器需要更加智能的滑动窗口或锁定策略。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报**
**日期**: 2026-06-18
**数据源**: github.com/zeroclaw-labs/zeroclaw

---

### 1. 今日速览
过去 24 小时，ZeroClaw 项目保持了极高的社区活跃度，新增并更新了 50 条 Issues 和 50 条 PR，整体呈现“功能大讨论与底层重构并行”的态势。尽管今日没有新的版本发布，且仅合并/关闭了 3 个 PR，但提交的代码贡献质量极高，涵盖了核心网关、配置级联、安全防护等深层领域。当前开发重心明显聚焦于 v0.8.x 到 v0.9.0 的里程碑演进，包括插件系统（WASM）、MCP 面板集成以及 Windows 环境的跨平台兼容性。

### 2. 版本发布
* **今日无新版本发布 (0 releases)**。
项目目前处于 v0.8.x 系列的密集开发与重构阶段，各项大型更新（如 Agent CRUD、网关改造）正在通过 Stack PR 的形式进行严格审查。

### 3. 项目进展
今日合并/关闭的 PR 主要集中在修复特定场景下的运行时错误和测试覆盖：
* **心跳目标渠道扩展**：[PR #7718](https://github.com/zeroclaw-labs/zeroclaw/pull/7718) 修复了心跳机制验证逻辑，新增支持 Matrix 作为目标渠道（此前仅支持 Telegram, Discord, Slack 和 Mattermost）。
* **Telegram 交互体验修复**：[PR #7843](https://github.com/zeroclaw-labs/zeroclaw/pull/7843) 修复了在开启 `mention_only=true` 的 Telegram 群组中，用户直接回复机器人消息被静默忽略的问题。
* **跨平台测试完善**：[PR #7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) 显著提升了 Windows 路径和 Shell 的可移植性测试覆盖，确保环境变量检查在 `cmd.exe` 下不再失败。
* **ACP 会话历史回放**：[PR #7903](https://github.com/zeroclaw-labs/zeroclaw/pull/7903) 修复了 `session/messages` 无法读取 ACP 专用会话存储历史记录的问题。

### 4. 社区热点
当前讨论最激烈的话题围绕着**智能体底层执行机制与桌面交互能力**展开：
* **桌面控制能力缺失**：[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (评论: 6)。社区强烈呼吁引入类似于 OpenAI Codex 的 Computer-use 能力，要求支持屏幕截图捕获和鼠标/键盘事件控制。这表明用户希望将 ZeroClaw 从纯文本/ API 交互推向 RPA 级别的本地桌面控制。
* **重建原生 GitHub 渠道**：[Issue #2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) (评论: 6)。用户希望将 GitHub 作为一等公民渠道，使 Agent 能够原生观察和操作仓库活动（Issues, PRs, 评论），而无需手动配置 Webhooks 和鉴权。
* **定时任务路由重构**：[Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (评论: 4)。提出将计划任务路由通过编排器的消息管道执行，以解决目前绕过安全和历史上下文检查导致的一系列严重 Bug。

### 5. Bug 与稳定性
今日报告的 Bug 集中在并发安全、上下文丢失和安全审查方面：
* **P1 严重 - 会话并发竞态**：[Issue #7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753)。当同一发送者并发发送消息时，渠道会话持久化存在预存的排序竞态问题，可能导致历史记录错乱。（目前状态：进行中）
* **高风险 - 凭证校验误报**：[Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)。技能审计中对远程 Markdown 链接的阻断检查存在极高的假阳性率，导致多个官方知识插件未能通过审计。
* **高风险 - 定时任务上下文丢失**：[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)。Agent 执行 Cron 任务时，无法获取其发送消息的上下文引用，导致提醒功能表现得像“失忆”。（已被阻塞，等待 #6954 RFC 落地）
* **中风险 - Cron 输出噪音**：[Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)。定时任务触发 `NO_REPLY` 时，系统直接将字面量字符串发送到 Telegram 等渠道，造成体验下降。

### 6. 功能请求与路线图信号
结合 Tracker Issues 和新提报的 PR，可以清晰地看出 ZeroClaw 未来 3 个版本的演进路线：
* **v0.8.1 (集成与稳定)**：重点在于扩展模型支持（如 [Issue #7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) 提出的 llama.cpp 模型路由）和修复渠道兼容性。
* **v0.8.2 (WASM 插件与技能平台)**：核心是将插件和技能整合为一个统一的平台接口。[Issue #7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) 已经提出了 WASM 插件生命周期钩子订阅的 RFC。
* **v0.8.3 (MCP 仪表盘与 Web 控制面)**：通过 Web UI 管理 MCP 和插件，[PR #7905](https://github.com/zeroclaw-labs/zeroclaw/pull/7905) 已经开始为 TUI 增加 Cron 运行历史和触发器支持。
* **v0.9.0 (安全与架构破坏性更新)**：将引入重大的鉴权、安全加固和网关边界隔离（[Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。今日提交的 [PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（引入沙箱策略配置结构）和 [PR #7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)（锁定 HTTP 请求的 DNS 地址以防 SSRF）已经在为此铺路。

### 7. 用户反馈摘要
* **配置与兼容性痛点**：Windows 用户面临 Shell 宿主环境选择的困惑（[Issue #7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089)），在 `cmd.exe` 和 PowerShell 之间徘徊；同时，本地运行 llamacpp 的用户希望能有更智能的模型路由切换机制，而不是只使用默认模型。
* **信息噪音与体验**：用户反馈 Agent 在执行中间推理步骤时，会将冗长的思考过程直接推送到聊天渠道，强烈要求增加“仅输出最终结果”的模式（[Issue #6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510)）。
* **企业级与可观测性需求**：开发者和团队希望有更完善的配置预检工具（[Issue #6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)），在运行前拦截不兼容的 Provider 设置；并呼吁分离实例的指标和追踪 sinks，以满足多实例部署的监控需求（[Issue #6669](https://github.com/zeroclaw-labs/zeroclaw/issues/6669)）。

### 8. 待处理积压
* **待审查的超大巨型 PR 系列**：开发者 Nillth 提交了 8 个相互依赖的系列 PR（#7839 到 #7842），涉及庞大的 Agent/Provider CRUD 及带级联删除的配置重命名功能。这些 PR 标记为 `size: XL/L` 且具有高风险，目前处于开启状态，急需维护者进行增量代码审查。
* **长期受阻的定时任务问题**：[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) 由于架构设计原因被标记为 `blocked`，亟需社区和维护者在 [Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 的 RFC 上达成共识，以彻底解决根因。
* **本地化（i18n）滞后**：[Issue #6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) 显示 `zh-CN` 等多语言文件缺失（如缺少 `tools.ftl`），已标记为 `in-progress`，需要贡献者协助补全翻译。

</details>