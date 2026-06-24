# OpenClaw 生态日报 2026-06-25

> Issues: 233 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-24 22:25 UTC

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

这里是为您生成的 **OpenClaw 项目动态日报**（2026-06-25）。

---

# 📊 OpenClaw 项目动态日报 (2026-06-25)

## 1. 今日速览
过去 24 小时内，OpenClaw 项目保持着**极高的活跃度与庞大的开发带宽**。项目刚发布了具有突破性的 `v2026.6.10` 版本，引入了对话自动快速模式与更可靠的模型路由。然而，代码库目前处于“高负荷运转”状态，共有 **452 个待处理 PR** 积压，同时社区爆发了多达 **171 个新开/活跃 Issue**。当前开发重心明显聚焦于**多渠道会话状态管理、网关内存泄漏排查，以及多智能体（子智能体）调度的稳定性修复**。

## 2. 版本发布
### 🚀 [v2026.6.10](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10)
- **新增功能（对话体验优化）**：引入了 **Talks 的自动快速模式**。系统现在可以在简短的对话轮次中自动启用快速模式，而在需要长距离推理的任务中恢复至正常模式，并带有边界回退和投递行为保障。(`#85104`，感谢 @alexphaman-dev 和 @vincentkoc)
- **底层优化**：提供了**更可靠的模型路由**，特别是针对 Zai 模型的合成与调度路径进行了强化。

## 3. 项目进展
今日共有 **48 个 PR 被合并或关闭**，主要推进了渠道接入的鲁棒性、定时任务执行的逻辑修复以及 TTS（文本转语音）体验的优化：
- **定时任务与状态保护**：[PR #83933](https://github.com/openclaw/openclaw/pull/83933) 修复了手动运行定时任务（cron）时误删任务及错误修改重试计数器的问题。
- **消息管道防丢失**：[PR #88992](https://github.com/openclaw/openclaw/pull/88992) 修复了在 `message_tool_only` 模式下，LLM 偶尔忘记调用 message tool 导致回复被静默丢弃的致命缺陷。
- **TTS 体验修复**：[PR #83988](https://github.com/openclaw/openclaw/pull/83988) 消除了 Telegram 机器人在最终模式下生成语音时，文本消息先出现随后被删除删除的“视觉闪烁”问题。

## 4. 社区热点
今日社区讨论最热烈的问题集中在**底层架构迁移引发的阵痛**与**跨模型上下文管理**：
- 🔥 **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (35评)**：关于核心会话/记录向 SQLite 迁移的跟踪。维护者与贡献者在讨论底层文件支撑的接缝采用阶段进度，直接关系到 OpenClaw 未来的并发性能。
- 🔥 **[Issue #96148](https://github.com/openclaw/openclaw/issues/96148) (17评)**：iMessage 响应延迟问题。用户 @omarshahine 提交了详尽的本地补丁证据，呼吁官方优化 iMessage 的早期输入提示与代码路径。
- 🔥 **[Issue #48003](https://github.com/openclaw/openclaw/issues/48003) (13评)**：`steer` 模式无法在运行期间注入消息。用户反馈发现 `KeyedAsyncQueue` 的一个早期 Commit 破坏了此功能，导致无法在工具执行间隙打断/引导智能体。

## 5. Bug 与稳定性
今日报告了多个严重的 P1 级别 Bug（涉及数据丢失、内存溢出、死循环），OpenClaw 的稳定性在复杂多智能体场景下面临考验：

- **🚨 内存泄漏与网关崩溃**：
  - [Issue #87109](https://github.com/openclaw/openclaw/issues/87109)：macOS 空闲状态下网关堆内存暴增至 1073MB+，导致 event-loop 阻塞，定时任务静默失败。
  - [Issue #95915](https://github.com/openclaw/openclaw/issues/95915)：嵌入式运行中止时内存未释放（`released=0`），导致会话写锁持久化阻塞。（*已有修复 PR: [#96100](https://github.com/openclaw/openclaw/pull/96100)*）
- **🚨 会话状态死锁与消息丢失**：
  - [Issue #86827](https://github.com/openclaw/openclaw/issues/86827)：群聊会话一旦因超时进入 `failed` 状态，后续所有消息将被静默丢弃。
  - [Issue #95833](https://github.com/openclaw/openclaw/issues/95833)：子智能体中止结算失败，无法释放 `.jsonl.lock` 文件，导致主会话永久性瘫痪。
- **⚠️ 平台与更新回归**：
  - [Issue #91804](https://github.com/openclaw/openclaw/issues/91804)：自 v2026.6.5 起，智能体的内部推理过程被暴露给用户，存在严重的隐私问题。

## 6. 功能请求与路线图信号
从社区的诉求中，我们可以清晰看到 OpenClaw 在“安全沙箱”与“去LLM化部署”方面的演进信号：
- **精细化文件系统沙箱**：[Issue #7722](https://github.com/openclaw/openclaw/issues/7722) 请求支持严格的文件访问路径控制（`tools.fileAccess`），以防止多租户或 Cron 任务互相覆盖文件。考虑到 [Issue #40001](https://github.com/openclaw/openclaw/issues/40001) 报告了写文件缺乏追加模式导致的数据覆盖，**沙箱机制极有可能会被提上开发日程**。
- **无 AI 的轻量级网关**：[Issue #86881](https://github.com/openclaw/openclaw/issues/86881) 请求提供 `Gateway-lite` 模式。用户希望在不需要调用大模型时（如 Webhook 接收、确定性插件运行），剥离庞大的 AI 运行时，实现极简部署。

## 7. 用户反馈摘要
通过对 Issue 评论的挖掘，总结出目前 OpenClaw 真实用户的三大痛点：
1. **多智能体生命周期脆弱**：深度用户大量使用 `sessions_spawn` 和 `sessions_yield` 进行并行任务分发，但抱怨当子任务中止或父任务挂起时，极易产生孤儿锁（`.jsonl.lock`），导致"打字机卡死"（如 [Issue #93383](https://github.com/openclaw/openclaw/issues/93383)）。
2. **Provider 兼容性具有隐蔽破坏性**：用户反馈，当 Anthropic API 偶发 Socket 错误时，网关会静默回退到 OpenAI/Codex 模型，这完全破坏了用户的预期和上下文连贯性（[Issue #87407](https://github.com/openclaw/openclaw/issues/87407)）。
3. **文件与命名规范不洁**：用户接收文件时发现带有内部 UUID 后缀（如 `resume---a1b2c3d4.pdf`），引起体验不适。([PR #96565](https://github.com/openclaw/openclaw/pull/96565) 正在修复此问题)

## 8. 待处理积压
请维护者重点关注以下高影响且需要产品决策的积压项：
- **庞大的 PR 积压池**：共有 **452 个 PR** 处于待合并状态。其中 [PR #68936](https://github.com/openclaw/openclaw/pull/68936) 提供了极具价值的自动化 PR Review 审查流水线和 Windows 守护进程，但已搁置多月，急需评估合并风险。
- **OAuth 拦截问题**：[Issue #84018](https://github.com/openclaw/openclaw/issues/84018) 指出 xAI (Grok) 的 OAuth token 因被 Cloudflare 拦截而无法自动刷新，导致用户必须手动频繁重连，需要产品侧给出绕过策略。
- **环境权限覆写问题**：[Issue #78493](https://github.com/openclaw/openclaw/issues/78493) 报告 `sudo openclaw update` 导致配置文件归属混乱，后续普通用户运行时权限被拒（`EACCES`），并引发 `openclaw doctor` 误判并覆盖配置，影响 macOS 用户体验。

---
*数据分析由 AI 自动生成。OpenClaw 展示了作为前沿 AI 助手框架的强大能力，但正处于架构快速迭代带来的“阵痛期”，建议社区贡献者优先关注内存管理与并发锁的释放逻辑。*

---

## 横向生态对比

这份横向对比分析报告基于 2026 年 6 月 25 日的主流开源 AI 智能体与个人助手项目动态数据编制，旨在为技术决策者和开发者提供行业全局视野与架构演进参考。

---

### 个人 AI 助手与智能体开源生态横向对比分析报告 (2026-06-25)

#### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体可用”向“多租户、高并发、企业级安全”跨越的拐点期**。项目核心发力点已从单纯的 LLM API 对话集成，深度转向**跨平台消息网关建设、多智能体编排隔离以及系统级安全沙箱构建**。随着应用场景的复杂化，生态内所有头部项目都在集中攻坚异步任务管理的鲁棒性和庞大上下文的 Token 降本增效，标志着行业正加速迈向生产级落地。

#### 2. 各项目活跃度对比
*注：NullClaw、Moltis、ZeptoClaw 过去 24 小时无活动。*

| 项目名称 | Issue 动态 | PR 动态 | 版本发布 | 健康度 / 当前状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 171 (高) | 500 (合并 48，积压 452) | 🚀 `v2026.6.10` | ⚠️ **高负荷运转**：功能强悍但架构面临阵痛，积压严重。 |
| **NanoBot** | 18 (10 开/8 关) | 45 (合并 19) | 无 | 🟢 **打磨期**：集中修复多渠道兼容与安全漏洞，准备下个稳定版。 |
| **Hermes Agent**| 50 (36 开/14 关) | 50 (合并 16) | 无 | 🟢 **质量攻坚**：大幅提升测试覆盖率，攻坚并发状态与 API 路由。 |
| **PicoClaw** | 14 (关 13) | 8 (合并 0) | 无 | 🟡 **安全加固**：集中清偿安全债务，进行底层权限边界重构。 |
| **NanoClaw** | 1 (低) | 17 (活跃) | 无 | 🟢 **社区驱动**：贡献者活跃，聚焦安全漏洞修复与多平台适配。 |
| **IronClaw** | 19 (17 开) | 43 (合并 18) | 无 | 🟡 **重构与排障**：围绕 Reborn 架构进行密集修错，稳定性面临挑战。 |
| **LobsterAI** | 极少 | 43 (合并/关 41) | 无 | 🟡 **分支清理**：发生底层架构级重构，清理大量历史积压。 |
| **CoPaw** | 23 (14 开/9 关)| 50 (44 待合并) | 无 | 🟢 **爆发期**：2.0 迁移后社区涌入大量贡献，处于极速上升期。 |
| **ZeroClaw** | 50 (44 开) | 50 (46 待合并) | 无 | 🟢 **企业级演进**：社区极度活跃，全力推进 RBAC 与企业级认证。 |

#### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与体量最大的头部项目**，OpenClaw 展现出了极强的全栈能力与底层创新力（例如在 `v2026.6.10` 引入了动态的“对话自动快速模式”与智能模型路由）。
*   **技术路线差异**：相比 NanoBot、PicoClaw 侧重于跨平台通讯网关的横向扩展，OpenClaw 在**多智能体并发调度**和**状态机底层管理**上走得更深（如引入 `sessions_spawn` 和 `sessions_yield` 进行并行任务分发）。
*   **社区规模对比**：OpenClaw 拥有最庞大的开发者带宽与 Issue 吞吐量（171 个活跃 Issue）。然而，高达 452 个待处理 PR 表明其社区繁荣度的反面是严重的维护带宽瓶颈。
*   **当前劣势**：OpenClaw 当前正处于底层架构迁移的“阵痛期”，尤其是 SQLite 迁移和内存泄漏问题（高达 1073MB+ 堆内存暴增），使其在生产环境的稳定性面临严峻考验，相比之下 Hermes Agent 和 CoPaw 在通过提升测试覆盖率来保障平稳过渡。

#### 4. 共同关注的技术方向
从今日多项目的动态中，可以清晰地提取出整个生态正面临的共性挑战与需求：
1.  **多渠道/IM 平台富文本与流式兼容**：**涉及项目：全量**。Telegram、钉钉、Discord 等平台 API 升级引发的排版错乱、流式闪烁、消息截断是今日最高频的 Bug 来源。
2.  **安全沙箱与文件系统越权防御**：**涉及项目：OpenClaw, ZeroClaw, NanoClaw, PicoClaw**。防止被恶意提示词注入的 Agent 读取宿主机凭证（如 NanoClaw 的目录遍历漏洞）、实现多租户间文件读写隔离，成为亟待修复的高危隐患。
3.  **Token 上下文冗余与成本优化**：**涉及项目：OpenClaw, Hermes Agent, IronClaw**。大体积 Tool Schema 造成的每轮数万 Token 的“死重”开销引发了社区强烈呼吁，“两阶段工具注入”和“渐进式工具披露”成为核心演进方向。
4.  **异步任务/Cron 生命周期的死锁与静默失败**：**涉及项目：OpenClaw, NanoBot, ZeroClaw, IronClaw**。后台 Worker 遇到 HTTP 异常或压缩失败时导致主线程死锁挂起，是当前工作流编排架构下的通病。

#### 5. 差异化定位分析
*   **OpenClaw / ZeroClaw**：定位于**全功能、企业级元智能体基座**。强调复杂的智能体编排、多租户 RBAC 隔离，适合作为大型私有化部署的中枢大脑。
*   **NanoBot / NanoClaw**：定位于**轻量级、多端互联的极客工具**。极度重视移动端部署体验（如 PWA、Termux）和加密通讯协议接入（如 Matrix E2EE、Signal），更偏向个人自动化助理。
*   **PicoClaw**：定位于**跨生态 GUI 自动化执行器**。其核心差异在于深度解决重前端框架（如 Vue/Element UI）下虚拟 DOM 与 Agent 的交互适配，偏向 RPA 属性。
*   **CoPaw**：定位于**开放模型生态的统一路由基座**。通过标准化插件系统（`pip` 安装技能）和 BYOK 策略，高度迎合希望本地托管各类开源大模型的开发者群体。

#### 6. 社区热度与成熟度分层
*   **快速爆发与迭代期**：**CoPaw** (44 个 PR 蓄势待发，社区贡献激增)、**OpenClaw** (版本大更新，功能狂飙但带来严重积压)。
*   **质量攻坚与巩固期**：**Hermes Agent** (测试覆盖率达到 75%-100%，重构并发锁)、**ZeroClaw** (重构 WASM 插件，引入 SLSA 供应链安全)、**IronClaw** (核心 API 降级保护与自动化挂起修复)。
*   **维稳与清理期**：**LobsterAI** (单日批量清理 40+ 历史积压)、**PicoClaw** (集中闭环历史安全漏洞)。

#### 7. 值得关注的趋势信号
基于社区真实反馈，提炼出以下三个对 AI 智能体开发者极具参考价值的行业趋势：
1.  **网关层“静默降级”是生产体验的隐形杀手**：当上游 API（如 Anthropic、OpenAI）发生网络抖动时，网关自动静默回退到其他模型，会彻底破坏用户预期的 Prompt 上下文和模型性格。**建议：**开发者需在网关层设计明确的报错与人工介入机制，而非盲目追求“不断线”。
2.  **任务执行后的“自毁机制”引发用户抵触**：自动化任务（尤其是一次性任务）执行完毕后被物理删除，破坏了 AI 助手应有的“记忆复用”。**建议：**Agent 生命周期管理应从“运行后销毁”向“运行后归档”转变，提供工作流的可回溯性。
3.  **UI 层“防御性脱敏”正在破坏代码执行**：部分框架在执行代码前粗暴地将密钥替换为 `***`，导致生成的 Python/Shell 脚本直接语法报错。**建议：**环境变量注入和敏感信息隔离应在容器运行时级别（如 OS Env）处理，切莫在 LLM 文本层做暴力替换。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期**: 2026-06-25 | **仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 1. 今日速览
NanoBot 项目在过去 24 小时内维持了**极高的活跃度**，共处理了 18 条 Issue（10 新开/活跃，8 关闭）和 45 条 PR（26 待合并，19 合并/关闭）。今日开发重心高度集中在**多渠道（Telegram、钉钉）富文本兼容性、MCP（Model Context Protocol）安全策略修复，以及 WebUI 的移动端体验（PWA、音频处理）优化**上。尽管没有发布新版本，但大量针对 v0.2.2 版本的回归 Bug 修复被合并，表明项目正处于为下一个稳定版做最后打磨的阶段。

## 2. 版本发布
*今日无新版本发布 (0 releases)。*

## 3. 项目进展
今日共有 19 个 PR 被合并或关闭，项目在以下几个方面取得了实质性向前迈进：
*   **WebUI 与交互修复**：合并了多文件代码应用补丁修复 ([PR #4487](https://github.com/HKUDS/nanobot/pull/4487))，解决了流式输出中多文件编辑记录丢失的问题；修复了 iOS Safari 点击输入框页面放大的体验缺陷 ([Issue #4388](https://github.com/HKUDS/nanobot/issues/4388))。
*   **大模型支持扩展**：合并了针对 Kimi Coding Plan 订阅用户的专属 Provider 支持 ([PR #4464](https://github.com/HKUDS/nanobot/pull/4464))，以及 OpenCode Zen 和 Go 提供商的接入 ([Issue #4475](https://github.com/HKUDS/nanobot/issues/4475))。
*   **前端推理隔离**：修复了 WebUI 直接将 `<thinking/>` 标签作为纯文本渲染的 Bug，实现了推理区块的正确隔离 ([Issue #4465](https://github.com/HKUDS/nanobot/issues/4465))。

## 4. 社区热点
今日讨论热度最高、反馈最密集的领域集中在 **Telegram Bot API 10.1 升级带来的阵痛**：
*   **[Issue #4470](https://github.com/HKUDS/nanobot/issues/4470) / [Issue #4488](https://github.com/HKUDS/nanobot/issues/4488)**：自引入富文本特性后，Telegram 出现了消息不支持换行、流式生成时频繁闪烁卡顿，甚至 Telegram Web 端直接报错 "This message is not supported"。这反映出用户对**消息呈现稳定性和排版控制**有极高要求。目前已有对应的修复提案 ([PR #4505](https://github.com/HKUDS/nanobot/pull/4505), [PR #4495](https://github.com/HKUDS/nanobot/pull/4495)) 正在推进中。
*   **[Issue #4442](https://github.com/HKUDS/nanobot/issues/4442)**：在使用 Anthropic 系列模型流式请求时出现了 `tool_use ids must be unique` 报错，导致会话直接坏死（Session Poisoning）。该问题引发了较多关注，目前已被关闭。

## 5. Bug 与稳定性
今日报告了多个影响生产稳定性的 Bug，按严重程度排列如下：

*   🔴 **严重 - 钉钉通道超时与消息丢失**：触发 `httpx.ConnectTimeout` 且不支持 `richText` 格式，导致文件或图片消息直接丢失。已有修复 PR ([Issue #4497](https://github.com/HKUDS/nanobot/issues/4497), [PR #4501](https://github.com/HKUDS/nanobot/pull/4501))。
*   🔴 **严重 - OpenAI 兼容 API 越权风险**：当 API 绑定到非本地回环接口 (`0.0.0.0`) 时无需认证，存在严重的暴露风险。已提交安全增强请求 ([Issue #4490](https://github.com/HKUDS/nanobot/issues/4490))。
*   🟡 **中等 - MCP 权限绕过 (安全漏洞)**：`enabledTools` 白名单机制存在缺陷，即使设置为 `[]`（全拒绝），MCP 资源和提示词依然会泄漏给模型。正在修复中 ([Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) / [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435), [PR #4436](https://github.com/HKUDS/nanobot/pull/4436) / [PR #4452](https://github.com/HKUDS/nanobot/pull/4452))。
*   🟡 **中等 - WebUI 首页流式输出卡死**：从首页欢迎界面发送消息不会跳转至对话页，且自我重启后会导致流式响应卡死，停止按钮失效 ([Issue #4500](https://github.com/HKUDS/nanobot/issues/4500))。

## 6. 功能请求与路线图信号
从新开的 Issues 和 PRs 中，可以清晰捕捉到项目未来的演进信号：
*   **移动端/多端体验深化**：社区正大力推动 WebUI 的 PWA 支持，以便添加到手机主屏幕，并加入了移动端侧边栏滑动手势支持 ([PR #4494](https://github.com/HKUDS/nanobot/pull/4494))。
*   **网关与触发器机制完善**：用户希望引入 Gateway Webhook 触发器 ([PR #4502](https://github.com/HKUDS/nanobot/pull/4502)) 和心跳触发命令 ([PR #4437](https://github.com/HKUDS/nanobot/pull/4437))，这表明 NanoBot 正在被更多用户作为**长期驻留的后台自动化服务**来使用。
*   **多渠道互联**：增加了 CLI 代理将跨渠道发送中继到网关的能力 ([PR #4496](https://github.com/HKUDS/nanobot/pull/4496))，以及对 Mattermost 渠道的支持 ([PR #4459](https://github.com/HKUDS/nanobot/pull/4459))。
*   *预测*：**MCP 安全控制**、**Webhook 自动化** 以及 **多端音频格式适配** 极大概率会被纳入下一个版本（可能是 v0.2.3 或 v0.3.0）。

## 7. 用户反馈摘要
从评论和 Issue 描述中提炼出真实用户的痛点与场景：
*   **架构洁癖与轻量化诉求的冲突**：在 [Issue #660](https://github.com/HKUDS/nanobot/issues/660) 中，用户尖锐指出项目自称 "ultra-lightweight"，但 Dockerfile 却同时强依赖 Python 和 Node.js。用户呼吁彻底移除 Node.js 依赖，这说明部分开发者对 AI Agent 的部署成本和镜像体积极其敏感。
*   **异步任务的静默失败**：Dream（梦境/离线总结）功能在关闭时，由于游标未更新，会导致后续 Prompt 膨胀 ([PR #4481](https://github.com/HKUDS/nanobot/pull/4481))；CLI 模式下跨渠道消息发送会静默失败 ([PR #4496](https://github.com/HKUDS/nanobot/pull/4496))。用户对“没有任何报错但功能没生效”感到困扰，期望更健壮的错误冒泡机制。
*   **浏览器兼容性碎片化**：WebM 转 WAV 适配小米 MiMo ASR ([Issue #4492](https://github.com/HKUDS/nanobot/issues/4492))，以及 Telegram X 与 Web 版的富文本不兼容，反映了用户终端环境的极度碎片化，对前端格式兼容和降级策略提出了巨大挑战。

## 8. 待处理积压
*   ⚠️ **[Issue #660](https://github.com/HKUDS/nanobot/issues/660)**：作为带有 `good first issue` 和 `help wanted` 标签且点赞数较高（👍 5）的架构级讨论，自 2 月份创建以来已持续 4 个月。建议维护团队尽早明确是否要在未来路线图中彻底移除 Node.js 依赖。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-25)

## 1. 今日速览
过去 24 小时内，Hermes Agent 社区保持了高度活跃的状态，共处理了 50 条 Issue 更新（36 条新开/活跃，14 条已关闭）以及 50 条 PR 更新（34 条待合并，16 条已合并/关闭）。尽管本日没有发布新版本（0 Releases），但开发重心明显向**网关稳定性、平台隔离以及底层测试覆盖率**倾斜，涌现了大量针对 FTS 指数损坏、上下文压缩机制的深度修复。整体来看，项目目前处于“高强度维护与质量攻坚”阶段，尤其正在集中解决并发状态管理与多模型接入的痛点。

## 2. 版本发布
**本日无新版本发布 (0 Releases)**。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，项目在多个关键模块取得了实质性推进：
*   **底层测试覆盖率大幅提升**：提交了多个达到 75%-100% 覆盖率的测试 PR，包括 FAL 视觉工具 ([PR #52166](https://github.com/NousResearch/hermes-agent/pull/52166))、MCP OAuth 管理器 ([PR #52157](https://github.com/NousResearch/hermes-agent/pull/52157)) 以及文件同步模块 ([PR #52154](https://github.com/NousResearch/hermes-agent/pull/52154))，标志着项目正在为后续的大版本发布夯实质量底座。
*   **网关与状态修复落地**：合并了针对网关会话队列重新水化的修复 ([PR #45497](https://github.com/NousResearch/hermes-agent/pull/45497))，以及修复 Signal 群组授权绕过的安全增强 ([PR #44706](https://github.com/NousResearch/hermes-agent/pull/44706))。
*   **早期功能融合**：关闭了经典的强化学习（RL）与文件操作工具集 PR ([PR #15](https://github.com/NousResearch/hermes-agent/pull/15))，表明基础编码智能体能力已整合完毕。

## 4. 社区热点
今日讨论度最高的焦点集中在**系统开销与多渠道接入**：
*   **Token 开销优化**：[Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839)（🔥27 赞同）提议引入“两阶段工具注入”，以减少每次 API 调用中因加载全量工具 schema 造成的 3.5k-5k 冗余 Token 消耗；[Issue #4379](https://github.com/NousResearch/hermes-agent/issues/4379) 进一步指出当前每次调用有 73%（约 13.9k tokens）属于固定开销。这表明重度用户（尤其是本地部署用户）对推理成本的敏感度已达临界点。
*   **多智能体编排**：[Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)（👍16 赞同）提议泛化 ACP 客户端，以便 Hermes 能够编排 Claude 等其他兼容 AP 的编码智能体，反映出社区将 Hermes 定位为“元智能体”的强烈诉求。
*   **通信渠道拓展**：[Issue #3725](https://github.com/NousResearch/hermes-agent/issues/3725)（👍10 赞同）请求原生支持 Rocket Chat，说明企业级自建通讯场景的需求在增加。

## 5. Bug 与稳定性
今日报告了多个高风险（P1/P2级别）Bug，核心危机集中在并发状态与 API 路由：
*   **【P1 安全边界】凭证池覆盖**：[Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566) 指出 OpenAI-Codex 凭证池在轮换时，会因为旧配置重写而导致新添加的凭证丢失，引发服务中断。
*   **【P1 会话状态】FTS 索引损坏**：针对网关历史记录静默丢失的严重问题，目前已有热修复 PR 提交待合并 ([PR #52165](https://github.com/NousResearch/hermes-agent/pull/52165) 与 [PR #52159](https://github.com/NousResearch/hermes-agent/pull/52159))。
*   **【P1 上下文压缩】无限挂起**：[Issue #24098](https://github.com/NousResearch/hermes-agent/issues/24098) 报告当辅助压缩 worker 遭遇 HTTP 400 时，会导致主响应循环死锁，曾造成长达 88 分钟的静默挂起。相关修复正在推进 ([PR #52167](https://github.com/NousResearch/hermes-agent/pull/52167))。
*   **【P2 服务兼容】供应商 API 限速与失效**：用户反馈 z.ai 在高峰期限速 ([Issue #50663](https://github.com/NousResearch/hermes-agent/issues/50663)) 以及 GPT-5.5 在 Nous Portal 报 Azure 后端 500 错误 ([Issue #51045](https://github.com/NousResearch/hermes-agent/issues/51045))。

## 6. 功能请求与路线图信号
从近期 Issues 与 PRs 走向来看，下个版本的路线图信号非常明确：
*   **多企业级供应商接入**：[PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) 增加了对 Vertex AI（Gemini 模型）的支持，这预示着 Hermes 正在加速渗透企业级 GCP 市场，有望在下个版本纳入。
*   **精细化权限控制（YOLO 模式）**：[PR #52171](https://github.com/NousResearch/hermes-agent/pull/52171) 引入了基于平台的 YOLO（全自动确认）默认值，允许运维单独为 Discord 或 Telegram 设置免审批，大幅降低多租户部署的操作摩擦。
*   **UI 国际化 (i18n)**：[Issue #52137](https://github.com/NousResearch/hermes-agent/issues/52137) 等多个 Issue 呼吁加入包括俄语、中文在内的多语言支持，UI 本地化框架的引入已迫在眉睫。

## 7. 用户反馈摘要
通过提炼今日评论，用户端呈现以下核心反馈：
*   **痛点 - 移动端体验存在断层**：大量用户反馈在手机/平板上使用 Dashboard 时面临痛点，如无法选择和复制文本 ([Issue #50075](https://github.com/NousResearch/hermes-agent/issues/50075))、自动更正导致输入乱码 ([Issue #52110](https://github.com/NousResearch/hermes-agent/issues/52110))、以及对话内容渲染在屏幕外不可见 ([Issue #51769](https://github.com/NousResearch/hermes-agent/issues/51769))。xterm.js 在移动端的兼容性已引发群嘲。
*   **痛点 - 掩耳盗铃的安全过滤**：[Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801) 指出系统在代码执行前粗暴地将密钥替换为 `***`，直接破坏了 Python/Shell 语法导致静默失败。用户希望系统能更智能地处理敏感信息脱敏。
*   **满意点 - CLI 体验提升**：开发者在 PR ([PR #52163](https://github.com/NousResearch/hermes-agent/pull/52163)) 中积极为 CLI 的 `/resume` 命令接入交互式游标浏览器，社区对这种贴近开发者习惯的微调反馈极佳。

## 8. 待处理积压
维护团队需重点关注以下长周期/高风险积压项目：
*   **本地大模型支持受阻**：[Issue #32660](https://github.com/NousResearch/hermes-agent/issues/32660) 揭示了在调用自建 Ollama 端点时，API 请求体中完全丢失了 `tools` 数组，导致本地模型无法触发任何工具。该问题自 5 月底暴露至今仍需复现确认。
*   **硬编码引发的死锁**：[Issue #31600](https://github.com/NousResearch/hermes-agent/issues/31600) 指出 `MINIMUM_CONTEXT_LENGTH` 被硬编码为 64,000，导致在使用 Gemini 等大窗口模型时，后台代理无法写入新记忆并引发无限工具循环。此架构设计缺陷需尽快重构。
*   **Kanban 数据库并发崩溃**：[Issue #34385](https://github.com/NousResearch/hermes-agent/issues/34385) 指出 SQLite (kanban.db) 在 WAL 模式下多进程并发访问时会发生索引损坏，严重限制了多网关高并发场景的使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这是一份基于 2026-06-24 至 2026-06-25 期间 GitHub 数据生成的 PicoClaw 项目动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-06-25)

**数据周期**：过去 24 小时
**项目仓库**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内呈现出**“清理与重构”**的显著特征，项目维护者进行了高强度的维护工作。
今日共处理了 14 条 Issue（关闭 13 条）并接收了 8 个待合并 PR（合并 0 条）。最引人注目的动态是项目集中关闭了一批历史安全漏洞（多由安全研究员 YLChen-007 提交），表明 PicoClaw 正在进行底层安全与权限边界的全面加固。同时，社区开发者在今日提交了多个关键的 Bugfix PR，核心网关和 Provider 兼容性得到了进一步打磨。

## 2. 版本发布
**本日无新版本发布。** 考虑到今日积累了多个针对核心网关和 OpenAI 兼容层的基础设施修复 PR，项目可能正在为下一个迭代版本（如 v0.3.0）做代码储备。

## 3. 项目进展
今日虽然未有 PR 合并进主分支，但在 Issue 追踪上取得了突破性进展，特别是在**安全合规与历史遗留问题清理**上迈出了一大步：
*   **安全防御体系闭环**：集中关闭了 12 个安全类 Issue（从 #3068 到 #3082），涵盖了 CSRF 攻击、SSRF 绕过、WebSocket 越权重载、MQTT 伪造身份等。这说明项目方已经审查并（可能内部或通过其他方式）解决了这些影响控制面和数据面的严重安全隐患。
*   **历史功能讨论结案**：关闭了关于为 LLM 后端添加流式 HTTP 请求支持的 [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)，该功能可能已被纳入核心代码或通过其他方式实现。

## 4. 社区热点
今日社区焦点主要集中在**多渠道网关集成**与**复杂前端 DOM 交互**两大领域：
*   **跨平台通讯网关扩展**：PR [feat: add deltachat gateway #3063](https://github.com/sipeed/picoclaw/pull/3063) 持续受到关注，这反映了用户将 PicoClaw 作为全平台（涵盖 IM、网页、甚至加密聊天）统一 AI Agent 入口的强烈诉求。
*   **GUI Agent 在 MVVM 架构下的水土不服**：开发者 @Wavekip 提出了高价值的咨询 [Issue #3167](https://github.com/sipeed/picoclaw/issues/3167)。用户在 Vue 2 + Element UI 环境下测试 PageAgent 时，发现依赖 DOM 操作的 Agent 无法很好地兼容 `v-model` 和组件内部状态。这一痛点直指当前 GUI Agent 领域的核心难题：如何处理重前端状态管理框架的页面同步。

## 5. Bug 与稳定性
今日报告并处理了多个影响稳定性的 Bug，按严重程度排列如下：

*   **🔴 严重：Android/Termux 环境网关崩溃**
    *   **问题**：在 Android/Termux (v0.2.9) 环境下，Process hooks 导致网关在启动 2 秒内闪退。[Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)
    *   **状态**：已报告，等待修复。这阻碍了 PicoClaw 在移动端便携设备的部署。
*   **🟠 高：Seed 模型 XML 工具调用泄漏**
    *   **问题**：火山引擎豆包 Seed 模型的响应中，`<seed:tool_call>` XML 块会泄漏到流式输出和用户可见内容中。
    *   **状态**：已有修复方案。提交了 [PR #3165](https://github.com/sipeed/picoclaw/pull/3165) 用于从兼容层提取并清理这些 XML 块。
*   **🟡 中：OpenAI 兼容层构建失败与异常处理**
    *   **问题**：`openai_compat` 包中存在未定义的 `log` 调用导致构建失败；且获取模型列表出错时响应体读取失败处理不完善。
    *   **状态**：已提交 [PR #3166](https://github.com/sipeed/picoclaw/pull/3166) 和 [PR #3168](https://github.com/sipeed/picoclaw/pull/3168) 进行修复。

## 6. 功能请求与路线图信号
从近期的动态中，我们可以提取出 PicoClaw 接下来的几个演进方向：
1.  **心跳与状态管理的优化**：[PR #3169](https://github.com/sipeed/picoclaw/pull/3169) 提议在心跳轮询时跳过进化冷路径调度，这表明项目正在优化 Agent 在空闲状态下的资源与 Token 消耗，提升长时间挂机运行的经济性。
2.  **会话生命周期的健壮性**：[PR #3116](https://github.com/sipeed/picoclaw/pull/3116) 完善了 `turn.done` 的生命周期信号，修复了排队消息和会话转向的边缘情况。会话流的稳定性是 AI 助手的核心体验。
3.  **远程 Agent 调度支持**：[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) 引入了远程 WebSocket 模式。这说明 PicoClaw 正在从单一的本地运行工具，向支持“前端轻量化 + 后端远程集中调度”的 C/S 架构拓展，极具战略意义。

## 7. 用户反馈摘要
提炼近期 Issue 与 PR 中的真实用户反馈：
*   **痛点：重前端框架兼容性差**：企业级后台系统（如 Vue/Element UI）大量使用虚拟 DOM 和双向绑定，传统的 DOM 读取和操作极易引发状态不同步，用户急需 MVVM 专门的适配层。
*   **痛点：Provider 兼容性细节繁琐**：用户接入非标准 OpenAI 协议（如火山引擎、各种第三方代理）时，经常遭遇 XML 标签泄漏、流式截断等问题。OpenAI 兼容层需要极强的容错与清洗能力。
*   **满意点：扩展性强**：用户能够相对容易地通过网关机制将 LINE、飞书、企业微信甚至 DeltaChat 接入 PicoClaw，证明其多渠道架构设计获得了开发者认可。

## 8. 待处理积压
以下重要的 PR 长时间未合并（部分已标记为 `stale`），建议维护团队及时 Review 或更新状态：
*   **[PR #3115](https://github.com/sipeed/picoclaw/pull/3115) Fix inline data URL media extraction**：修复了 Base64 图片数据被误认为是媒体附件的严重 Bug，影响所有使用 `read_file` 等工具的用户，需优先合并。
*   **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) Add remote Pico WebSocket mode**：引入远程连接模式的重要架构特性。
*   **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063) feat: add deltachat gateway**：社区贡献的新网关，等待官方代码审查。

---
*分析师注：* PicoClaw 目前正处于功能快速扩张与安全深度加固的并行期。今日大量安全 Issue 的关闭意味着项目正努力达到生产级的权限控制标准。建议关注明日上述基础修复 PR 是否能顺利合入主分支。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026年06月25日**

作为一名专注于 AI 智能体与个人助手开源项目的分析师，以下是基于 GitHub 数据为您生成的 NanoClaw 项目昨日（2026-06-24）动态日报：

### 1. 今日速览
过去 24 小时内，NanoClaw 项目呈现出**极高的社区贡献活跃度与底层架构重构趋势**。尽管仅收到 1 条新开 Issue，但 PR 区间迎来了 17 次更新（15 活跃，2 关闭），涵盖核心安全修复、多平台渠道适配及底层容器架构优化。大量 PR 由活跃贡献者（如 grantland, sturdy4days, foxsky）提交，表明项目核心开发社区不仅稳固，且正在为更复杂的 AI 智能体多路复用与安全隔离做大规模冲刺。

### 2. 版本发布
* **无新版本发布**。

### 3. 项目进展
今日有 2 个 PR 被关闭，标志项目在特定功能模块的初步收敛：
* **[PR #2849](https://github.com/nanocoai/nanoclaw/pull/2849) [CLOSED]**: 提交者 grantland 尝试通过 `.env` 发现机制支持单实例运行多个 Telegram 机器人。该 PR 已被关闭，但作者随后重新开启了重构后的 **[PR #2853](https://github.com/nanocoai/nanoclaw/pull/2853)**，表明代码规范正在迭代优化。
* **[PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799) [CLOSED]**: 提交者 sturdy4days 修复了高危安全漏洞 CVE-2026-29611。该 PR 将 `send_file` 的读取权限严格限制在 `/workspace` 目录下，防止被提示词注入的 Agent 读取容器内的敏感凭证。该漏洞修复的关闭与合并标志着项目在对抗恶意 AI 提示词攻击的防御能力上迈出关键一步。

### 4. 社区热点
今日热度最高的话题聚焦于 **Telegram 多实例支持**：
* **[Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852)**: 用户 Kwisss 反馈之前的 Telegram 多机器人功能被移除，且目前的 "instance" 支持难以配置。这直接反映了用户（尤其是重度自动化用户）希望在单一 NanoClaw 实例中管理多个外部交互端点（多号矩阵）的强烈诉求。
* 该诉求目前已有高度匹配的解决方案在 review 中（即上文提到的 [PR #2853](https://github.com/nanocoai/nanoclaw/pull/2853)），一旦合并将完美解决这一痛点。

### 5. Bug 与稳定性
今日暴露的缺陷主要集中在**安全边界控制**与**高并发测试污染**，目前均有对应 Fix PR 处理（按严重程度排列）：
* **高危安全漏洞**：
  * **目录遍历与越权读取**: [PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799) 修复了 Agent 通过绝对路径越权读取系统文件的问题。
  * **NCL Socket 拒绝服务**: [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802) 发现恶意 Host 可以通过不写入响应或无限制流式传输导致 Node.js 内存溢出或 Promise 永久挂起，已提交增加超时与缓冲区上限的修复。
  * **路径校验绕过**: [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) 修复了 `ncl groups create --folder` 可通过 `../../etc` 绕过目录安全校验的风险。
* **测试环境污染 (中危)**：
  * **[PR #2851](https://github.com/nanocoai/nanoclaw/pull/2851)**: 发现测试套件中的 `poll-loop`（轮询循环）在超时后不会被中止，从而在后台继续运行并“偷走”下一个测试用例的消息，导致测试随机失败。
* **消息路由解析 (中危)**：
  * **[PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815)** 和 **[PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801)**: 修复了原始 JSON 被直接解析为基本类型（如数字、字符串）导致路由器读取属性异常的问题。

### 6. 功能请求与路线图信号
结合 Issues 与开源的 PR，可以清晰看出 NanoClaw 正在推进的**三大路线图信号**：
1. **通道集成大爆发**：社区正在完善多平台的集成体验。除了修复 Telegram 群组的 @ 机器人识别（[PR #2850](https://github.com/nanocoai/nanoclaw/pull/2850)），重大进展在于引入了 **Matrix 协议的端到端原生加密（E2EE）适配器**（[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)），用 Rust 绑定替换了老旧的 WASM 加密桥。
2. **动态技能学习系统**：[PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) 新增了 `/learn` 技能，允许 AI 助手直接从 URL 或本地目录中提炼、重用现有的技能。这意味着 NanoClaw 正在从“执行预设指令的 Agent”向“具备元学习能力的自我进化 Agent”演进。
3. **深入容器化与企业级隔离**：一系列由 sturdy4days 和 foxsky 提交的重构（如 [PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842) 添加了通用的惰性扩展点，[PR #2846](https://github.com/nanocoai/nanoclaw/pull/2846) 支持 Docker-in-Docker 代理组），表明项目正在为高权限隔离下的企业级多租户部署打基础。

### 7. 用户反馈摘要
从用户的 Issue 反馈与开发者提交的 PR 描述中，可以提炼出以下真实痛点：
* **配置与易用性痛点**：对于多账号/多渠道管理，用户期望开箱即用（如 Issue #2852 所述）。开发者也注意到了环境变量加载的脆弱性，从而推动了修复 `.env` 回退机制的 PR（[PR #2848](https://github.com/nanocoai/nanoclaw/pull/2848)）。
* **AI 幻觉与边界控制**：AI 助手在拥有文件读取权限时，有大概率被恶意指令诱导读取宿主机敏感文件。社区对“安全沙箱化”的需求极为迫切。
* **集成稳定性痛点**：在 Signal、Matrix 等去中心化或注重隐私的协议上，群组消息的识别（[PR #2850](https://github.com/nanocoai/nanoclaw/pull/2850)）和持久化加密（[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)）依然是部署时的重灾区。

### 8. 待处理积压
以下关键 PR 在开发分支停留时间较长（超过 5 天），处于 Open 状态且对系统稳定性影响较大，建议维护者优先进行 Code Review：
* **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)**: 修复容器被 SIGKILL 后，`outbound.db` 日志挂起及轮询竞争问题。数据库的健壮性直接关系到消息是否漏发，积压已达 12 天，属于高优先级遗留项。
* **[PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) / [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801) / [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)**: 这一批由 sturdy4days 提交的核心安全防护与路由加固 PR 均积压了 7 天。考虑到涉及目录遍历和内存溢出攻击，建议尽快合并以防止恶意利用。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 — 2026-06-25**

作为 AI 智能体与个人 AI 助手领域的开源项目，IronClaw 在过去 24 小时内展现出极高的活跃度与工程迭代速度。以下是详细的数据驱动分析报告。

---

### 1. 今日速览
* **极高活跃度**：过去 24 小时内项目共产生 **19 条 Issue 更新**（17 条新开/活跃）和 **43 条 PR 更新**，开发与测试节奏显著加快。
* **核心聚焦“Reborn”架构重构**：绝大多数代码变动和 Bug 追踪都围绕着 Reborn 核心运行时（尤其是 WebUI v2、自动化触发器和权限审批流），处于架构优化与密集排障期。
* **稳定性面临挑战**：今日报告了多个关键阻断性问题，包括模型安全词表误杀、外部大模型 API 超时导致系统挂起，以及多租户日志无法访问等问题，对生产可用性造成一定影响。

---

### 2. 版本发布
* **无新版本发布** (0 releases)。
* 项目目前正处于依赖大规模重构与 Bug 修复周期中（如拆分 `ironclaw_reborn_composition` 超大体积核心库），预计在彻底解决 Reborn 的生命周期与 SSE 流等 Bug 后将迎来新的里程碑版本。

---

### 3. 项目进展
今日共有 18 个 PR 被合并或关闭，项目在底层健壮性与 UI 体验上迈出重要一步：
* **CI 流水线修复**：合并了 [PR #5193](https://github.com/nearai/ironclaw/pull/5193)，修复了工作流配置键重复及缺失子代理测试忽略的问题，恢复了 `main` 分支的绿灯状态。
* **WebUI 国际化与交互优化**：合并了 [PR #5186](https://github.com/nearai/ironclaw/pull/5186)，完成了 Reborn 设置面板的多语言本地化，并改进了自动化过滤器的响应式布局。
* **严重回归问题修复**：关闭了 [Issue #5139](https://github.com/nearai/ironclaw/issues/5139)，该问题曾导致 Web/研究任务在初始化时 0 次 LLM 调用并发生挂起，曾导致每日基准测试中 21/147 的任务直接归零。

---

### 4. 社区热点
今日的社区与核心开发者讨论高度聚焦于 Reborn 在复杂编排和多端交互中的边界情况：
* **[Issue #5169](https://github.com/nearai/ironclaw/issues/5169) - 安全词表误杀正常指令**：内置 Skill 中的标准 API 词汇（如 "Authorization", "Bearer"）触发了安全黑名单，导致请求被静默阻断。这反映了内置技能与提示词安全过滤机制之间的冲突。
* **[PR #5149](https://github.com/nearai/ironclaw/pull/5149) - 渐进式工具披露**：开发者指出每次调用 LLM 都会发送约 91 个工具模式（~25.8k tokens），并发送 4 次，导致 NEAR AI 超过 120s 限制。该 PR 讨论了如何优化上下文管理以降低延迟。

---

### 5. Bug 与稳定性
今日报告的缺陷严重影响了 Hosted 实例和多渠道接入的稳定性，按严重程度排列：

* **【P0 / 已提供 Fix PR】云服务商超时导致系统全局卡死**：
  * **问题**：NEAR AI API 宕机或降级时，每个请求挂起 120 秒并重试，导致单个 Agent 循环运转 30 分钟以上。
  * **状态**：已提交 [PR #5203](https://github.com/nearai/ironclaw/pull/5203)，实现降级服务商的快速失败。
* **【P0 / 已提供 Fix PR】周期性自动化任务触发器挂起**：
  * **问题**：Webhook 交付钩子执行缓慢导致内置触发器轮询器挂起。
  * **状态**：已提交 [PR #5202](https://github.com/nearai/ironclaw/pull/5202) 实现异步交付。
* **【P1】多租户用户无法查看 Web UI 日志**：
  * **问题**：阻断调试，使多租户场景难以运维。([Issue #5179](https://github.com/nearai/ironclaw/issues/5179) / 已提交 [PR #5199](https://github.com/nearai/ironclaw/pull/5199))
* **【P1】SSE 断连与重连扩散故障**：
  * **问题**：用户通过 Slack 创建线程后，通过 WebUI 发送消息会导致 WebUI 会话断开，并且症状会传染给同一实例上的其他用户。（由 [PR #5194](https://github.com/nearai/ironclaw/pull/5194) 修复并已关闭）

---

### 6. 功能请求与路线图信号
从近期的 Issue 与 PR 流向可以看出，IronClaw 正在向高度可观测、自治化的架构演进：
* **记忆系统解耦与扩展**：[Issue #5201](https://github.com/nearai/ironclaw/issues/5201) 和 [PR #5163](https://github.com/nearai/ironclaw/pull/5163) 正在将 Reborn 记忆层从内核提取为供应商中立合约，并新增原生文件系统 Provider，信号明确：项目正为支持外部 RAG/向量数据库铺路。
* **更好的托管端可观测性**：[Issue #5182](https://github.com/nearai/ironclaw/issues/5182) 呼吁从二进制文件中提取有意义的失败诊断日志。
* **自动化审批流的完善**：大量关于“Ask each time”权限的问题（如 [Issue #5196](https://github.com/nearai/ironclaw/issues/5196), [Issue #4986](https://github.com/nearai/ironclaw/issues/4986)）表明用户重度依赖自动化任务，但现有的工具权限拦截机制还需进一步打磨（[PR #5195](https://github.com/nearai/ironclaw/pull/5195) 正在持久化这些设置）。

---

### 7. 用户反馈摘要
通过分析开发者与用户的反馈，提取出以下核心痛点：
* **“工作流与自动化经常被卡死”**：用户反馈在设置周期性检查 GitHub 仓库的自动化任务时，经常因为权限授权错误（401）、工具被禁用或无法通过审批而陷入死循环。
* **“内部调试信息污染了对话”**：[Issue #5191](https://github.com/nearai/ironclaw/issues/5191) 指出，模型内部的技能激活和上下文预算消息被直接打印在聊天 UI 中，让交互显得不够专业且干扰视线。
* **“运行时的工具状态反馈缺失”**：[Issue #5189](https://github.com/nearai/ironclaw/issues/5189) 反映成功的工具调用在运行过程中不显示活动面板，失败时反而会显示，造成 UI 体验不一致。

---

### 8. 待处理积压
以下重要项目需要核心维护者的关注：
* **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E 测试失败**：自 2026-05-27 创建以来，端到端测试已持续失败近一个月（更新于昨日），表明主分支的集成测试尚未完全平稳，需尽快介入。
* **大型重构 PR 滞留**：[PR #5137](https://github.com/nearai/ironclaw/pull/5137)（拆解 132k 行的 God-crate）作为系列重构的第一步，自 06-22 提交以来处于 Open 状态，它的合并将极大改善后续的开发体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**报告日期**: 2026-06-25  
**项目分析师**: AI 智能体与个人 AI 助手开源项目分析组

---

### 1. 今日速览
LobsterAI 在过去 24 小时内展现了**极高强度的底层架构重构与缺陷修复活跃度**。项目单日处理了多达 43 个 PR 更新（其中 41 个已合并/关闭），且有 40 个来自 5 月至 6 月初的积压 PR 在今日被批量关闭，这通常意味着项目完成了重要分支的合并或进入了重大版本发布前的代码清理阶段。今日的代码提交高度聚焦于 `OpenClaw` 网关、Electron 跨平台进程通讯以及令牌消耗控制等核心底层链路的加固。虽然暂无新版本 Release 发布，但代码库的剧烈变动预示着项目正酝酿一次大版本更新。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。
*注：大量历史 PR 的集中关闭通常暗示主分支版本已对齐，建议关注近期可能发布的 Tag。*

### 3. 项目进展
今日项目整体向前迈进了坚实的一步，主要归功于核心开发者 `fisherdaddy` 和 `liuzhq1986` 对系统稳定性和资源调度的深度优化：
*   **OpenClaw 网关及执行环境修复**: 解决了 Electron 嵌套调用导致 Node 参数解析异常的问题，统一了 macOS/Linux 与 Windows 的启动路径（[PR #2195](https://github.com/netease-youdao/LobsterAI/pull/2195)），并修复了 Shell 快照期间产生的额外 Dock 应用图标干扰（[PR #2196](https://github.com/netease-youdao/LobsterAI/pull/2196)）。
*   **致命的 Token 消耗漏洞修复**: 修复了在空闲期或工具循环中断时，系统因陷入死循环而疯狂燃烧/消耗 LLM Token 的严重问题（[PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049), [PR #2051](https://github.com/netease-youdao/LobsterAI/pull/2051)）。
*   **协同与会话稳定性增强**: 解决了会话卡死问题（[PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047)），优化了由于大体积 Tool 返回结果导致的短文本收尾阻塞问题（[PR #2058](https://github.com/netease-youdao/LobsterAI/pull/2058)）。
*   **生态与模型扩展**: 加入了 MiniMax m3 模型和 mimo v2.5 模型支持，优化了 BYOK（自带密钥）的上下文窗口默认配置（[PR #2089](https://github.com/netease-youdao/LobsterAI/pull/2089), [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102)）。

### 4. 社区热点
今日社区数据呈现“高开发产出、低用户互动”的特征，暂无评论数破百或点赞极高的讨论。但在 Issues 板块，用户的焦点明显集中于**任务生命周期管理**。
*   **[Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394)**: 尽管创建于 4 月，但在昨日（6-24）重新被激活标记为 `[stale]`。这反映出用户对于 AI 智能体执行完单次定时任务后“数据被自动抹除”的机制非常不满。用户强烈呼吁“任务可复用性”，这暴露出当前系统在状态持久化设计上与用户直觉存在冲突。

### 5. Bug 与稳定性
根据今日合入的 PR 逆向分析，近期系统存在以下不同严重程度的 Bug，现已被修复：
*   **P0 级 (严重 - 资源泄露/资金损失)**: 智能体工具循环中断时未正确终止，导致在空闲状态下持续消耗大量 Token。（已有 Fix: [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049)）
*   **P1 级 (高 - 核心功能阻塞)**: 网关会话补丁超时导致主聊天发送功能被阻塞（[PR #2050](https://github.com/netease-youdao/LobsterAI/pull/2050)）；以及 IM/微信集成中回复拼装错误导致会话卡死。（[PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047)）
*   **P2 级 (中 - 平台兼容/体验)**: Windows 下使用废弃的 VBScript 作为更新启动器引发的安全/兼容性问题，已替换为隐藏的 PowerShell（[PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057)）；微信更新/重装时的 Bug 闪退（[PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086)）。

### 6. 功能请求与路线图信号
*   **信号一：深度集成 IM 生态**。从多个 PR（如 `[area: im]` 修复回复上下文剥离 [PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063)、微信重装 Bug 修复）可以看出，将 LobsterAI 作为 IM 机器人/助手接入日常通讯软件是其核心路线图之一。
*   **信号二：多模型 BYOK 策略的演进**。通过保留用户配置的 Context Windows 并接连接入最新的开源/闭源模型，项目正在强化其作为“统一 AI 基座”的定位，降低用户的部署门槛。
*   **信号三：技能路由模块化**。新合入的 PR 将选定的 Skill（技能）从直接内联提示词改为输出路由元数据（[PR #2078](https://github.com/netease-youdao/LobsterAI/pull/2078)），这标志着 LobsterAI 的底层正在向更模块化的 Agent Router 架构演进。

### 7. 用户反馈摘要
通过对 Issue #1394 的分析，提炼出以下真实用户痛点：
*   **使用场景**: 用户希望利用 LobsterAI 设定“一次性”或“非周期性”的自动化工作流（例如：特定条件触发的数据抓取或报告生成）。任务执行完毕后，由于任务支持编辑，用户预期可以在此基础上稍作修改再次运行。
*   **痛点反馈**: 系统目前的“自毁机制”过于武断。执行完不重复的任务后直接物理删除记录，导致用户丢失了精心编写的 Prompt 和任务配置。用户感到沮丧，认为这种“非黑即白”的清理逻辑破坏了 AI 助手应有的“记忆与复用”价值。

### 8. 待处理积压
*   ⚠️ **[Issue #1394] 定时任务生命周期设计缺陷**: 此问题已被机器人标记为 `[stale]`。由于涉及核心的交互逻辑，且影响了用户的工作流 continuity（连续性），强烈建议维护者 `fisherdaddy` 或相关团队介入评估。建议方案：将“执行后删除”改为“执行后归档”，并在 UI 上提供手动清理按钮。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw (TinyAGI) 开源项目动态日报**
**报告日期**：2026-06-25
**分析数据时段**：过去 24 小时

---

### 1. 今日速览
在过去 24 小时内，TinyClaw 项目的整体活跃度处于相对平稳的低位。项目没有新的版本发布，也没有新开或关闭的 Issue，社区讨论热度有所回落。唯一的动态是一项关于 Windows CLI 跨平台支持的关键修复 PR（#281）被标记为已关闭。整体而言，项目当前处于代码库维护与小规模修整阶段，建议维护者留意社区互动的真空期，适时推动新功能或版本迭代以保持社区活跃度。

### 2. 版本发布
**无**。
过去 24 小时内项目未发布新版本。

### 3. 项目进展
今日项目代码库无实质性向前推进（无新合并的代码）。
值得注意的是，PR [#281 fix: Windows cross-platform support in CLI](https://github.com/TinyAGI/tinyagi/pull/281) 的状态发生了更新（被关闭）。该 PR 旨在解决 Node.js 环境下 Windows 原生系统（非 WSL）运行 CLI 的三个阻塞性 Bug。该 PR 的关闭可能意味着其修复方案被维护者驳回，或是被其他实现方式/分支所替代。这表明项目的跨平台兼容性攻坚仍在进行中，尚未形成最终定论。

### 4. 社区热点
**无显著热点**。
过去 24 小时内，项目未产生新的 Issue 评论、PR 审查讨论或互动。由于缺乏活跃的讨论流，当前社区处于“静默期”。考虑到此前有针对 Windows 平台的修复尝试，潜在的用户反馈可能潜伏在诸如“Windows CLI 报错”等相关历史 Issue 中，亟待开发者挖掘与响应。

### 5. Bug 与稳定性
今日无**新增**报告的 Bug。但根据近期项目动态，以下**历史遗留 Bug** 依然是影响项目稳定性的核心痛点：

*   **[高严重度] Windows 原生环境 CLI 运行崩溃**
    *   **状态**：已有尝试修复的方案（PR [#281](https://github.com/TinyAGI/tinyagi/pull/281)），但已于今日被关闭，尚未有替代方案合并。
    *   **详情**：由于 Node.js 的 `import.meta.url` 在 Windows 下解析路径时会产生双盘符（如 `/C:/Users/...`），导致 `MODULE_NOT_FOUND` 错误，直接阻断了 Windows 用户的 CLI 使用体验。

### 6. 功能请求与路线图信号
今日未收到任何新功能请求。
但从近期 PR 趋势（如 PR [#281](https://github.com/TinyAGI/tinyagi/pull/281)）可以明确捕捉到**路线图的隐性信号**：**提升跨平台兼容性（尤其是原生 Windows 支持）**是当前 CLI 工具迭代的优先级方向。对于个人 AI 助手项目而言，降低多系统用户的安装与配置门槛是扩大用户基群的关键前置条件。

### 7. 用户反馈摘要
虽然过去 24 小时无新评论，但结合近期项目上下文，真实用户痛点高度集中在以下方面：
*   **系统兼容性痛点**：非 Linux/WSL 用户（特别是原生 Windows 用户）在部署和使用 TinyClaw CLI 时面临较高的环境障碍。路径解析错误等底层系统差异导致的开箱即用体验不佳，是流失这部分用户群体的主要风险点。

### 8. 待处理积压
*   **PR [#281] 闭环处理**：[PR #281 (CLOSED)](https://github.com/TinyAGI/tinyagi/pull/281) 虽然被关闭，但 Windows 系统的 CLI 启动 Bug 依然存在。建议维护者（@TinyAGI Team）在评论区补充关闭原因（如：“方案不符合代码规范，已转移至 #xxx 继续推进”），给提交者（@mperkins0155）和其他关注该 Bug 的用户明确的预期，避免社区贡献者的热情受挫。

---
*数据声明：本报告基于 GitHub 过去 24 小时公开活动数据生成，旨在客观反映项目健康度与进展，供项目团队与开源观察者参考。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报**
**报告日期**: 2026-06-25

### 1. 今日速览
过去 24 小时内，CoPaw 项目展现出了极高的社区活跃度与开发推进速度。Issue 区更新 23 条（14 条新开/活跃，9 条关闭），而 Pull Request 区热度空前，产生了多达 50 条更新（包含 44 条待合并 PR）。当前项目正处于** AgentScope 2.0 迁移后的密集修复与生态扩展期**，大量开发者涌入提交功能性代码与 2.0 兼容性修复。虽然今日无新版本发布，但高达 88% 的 PR 待合并率表明，项目维护者即将进行一次大规模的代码审查与合并冲刺，项目整体健康度极高，正处于快速迭代的上升期。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日共有 6 个 PR 被合并或关闭，同时有大量高质量的开源贡献涌入：
*   **环境上下文优化 ([PR #5499](https://github.com/agentscope-ai/QwenPaw/pull/5499))**: 修复了静态时间上下文导致长会话中时间过时的问题，将其改为动态前缀，同时提高了 prompt 缓存的稳定性。*(注: 同类旧方案 [PR #5498](https://github.com/agentscope-ai/QwenPaw/pull/5498) 已被关闭取代)*。
*   **内存与性能优化落地**: 针对社区强烈反馈的“刚启动内存占用即达 1.4g”的问题（[Issue #5439](https://github.com/agentscope-ai/QwenPaw/issues/5439) / [Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)），相关修复 PR 已合并，问题已关闭。
*   **多端路由修复**: 针对飞书群聊回复错发至私聊的严重逻辑 Bug（[Issue #5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)）已修复并关闭。
*   **Skill 生态规范化**: 修复了由于 YAML Front Matter 错误导致 Skill 上传假成功并占用命名空间的问题（[Issue #5474](https://github.com/agentscope-ai/QwenPaw/issues/5474)）。

### 4. 社区热点
今日讨论最热烈的话题集中在**自定义模型兼容性**与**智能体长期记忆机制**：
*   **大模型兼容性痛点 ([Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345))**: 讨论数达 8 条。用户希望将 OMLX 等基于 OpenAI 兼容 API 的本地模型作为自定义 Provider 时，能完整支持 Function Calling，反映出社区对“插拔式”接入第三方本地模型的强烈刚需。
*   **革命性的记忆策略提案 ([PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321))**: 由首位贡献者提交，引入了基于 SQLite 持久化的 **scroll** 上下文管理策略。不同于传统的原生命题压缩，它允许模型按需从 REPL 回忆过去的任何对话轮次。该 PR 可能会大幅改变现有 Agent 的长文本处理架构，引发了架构层面的关注。
*   **系统时间注入策略探讨 ([Issue #5455](https://github.com/agentscope-ai/QwenPaw/issues/5455))**: 开发者就“当前时间”应该作为系统环境上下文，还是作为每条用户消息的前缀进行了深入讨论，反映了对 Prompt 缓存命中率和上下_window管理的深层次考量。

### 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，按严重程度排列如下：
*   🔴 **高危: 控制台大体积会话渲染崩溃 ([Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479))**: 当单个会话 JSON 文件超过 500KB 时，Web UI 直接白屏崩溃并报错，需删除会话才能恢复。暂无关联 Fix PR，前端渲染性能亟待优化。
*   🔴 **高危: 前端长历史记录解析崩溃 ([Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401))**: 包含大量工具调用历史的会话无法渲染。根因是后端 API 将 `tool_use` 转换为了前端无法识别的 `type: "data"`。
*   🟡 **中危: 2.0 迁移导致 Token 用量显示丢失 ([PR #5493](https://github.com/agentscope-ai/QwenPaw/pull/5493))**: AgentScope 2.0 迁移导致上下文 Token 用量环和气泡停止渲染，目前已有修复 PR 提交等待合并。
*   🟡 **中危: Windows 内网部署白屏 ([Issue #5497](https://github.com/agentscope-ai/QwenPaw/issues/5497))**: 将安装包拷贝至 Windows 内网后，客户端显示空白页面。
*   🟢 **低危: 前端排版与流式渲染问题**: 长消息排版错乱及 2.0 SSE 事件翻译导致工具调用堆叠（[Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480), [PR #5495](https://github.com/agentscope-ai/QwenPaw/pull/5495)）。

### 6. 功能请求与路线图信号
从 Issue 和 PR 动向来看，CoPaw 的下一个版本迭代重点将围绕**多模型适配**和**插件生态标准化**展开：
*   **标准化插件分发系统 ([Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) / [PR #5492](https://github.com/agentscope-ai/QwenPaw/pull/5492))**: 社区不仅满足于 ZIP 安装 Skill，提出了基于 Python entry points (`qwenpaw.plugins`) 支持通过 `pip` 从 PyPI 直接安装插件的特性，目前 PR 已提交，这将极大丰富 QwenPaw 的技能生态。
*   **高级模型 API 格式适配**: 
    *   Kimi K2 Code 模型适配请求（[Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427)），希望支持 Anthropic 兼容端点。
    *   支持原生 OpenAI `response-format` 消息格式的请求（[Issue #5489](https://github.com/agentscope-ai/QwenPaw/issues/5489)）。
*   **GLM 模型 JSON Schema 修复 ([PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496))**: 针对 GLM-5.x 模型的 `$ref` 语法内联修复，已有 PR 准备就绪。

### 7. 用户反馈摘要
*   **痛点集中在 2.0 迁移副作用**: 大量用户反馈在进行 AgentScope 1.x -> 2.0 迁移后，前端流式输出、工具调用展示以及 Token 统计出现了不同程度的功能折损。
*   **跨平台部署仍有门槛**: Windows Tauri 客户端丢失 Conda Python 环境路径（[Issue #5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)），以及内网环境极简部署的痛点依然存在。
*   **MCP (Model Context Protocol) 深度使用需求**: 重度用户反馈 MCP 工具名称在前端显示混乱（[Issue #5231](https://github.com/agentscope-ai/QwenPaw/issues/5231)），要求模型层与展示层名称解耦，表明 MCP 正在被越来越专业地使用。

### 8. 待处理积压
*   ⚠️ **44 条 PR 待合并积压**: 这是一个强烈的信号，表明项目迭代速度极快，但 Maintainer 的 Review 带宽可能已达瓶颈。强烈建议项目组集中精力梳理目前 44 条 Open PR，避免产生严重的代码冲突。
*   🔧 **旧版本桌面端卡顿待验证**: [Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) 反映 1.1.11 版本 Windows 前端任务执行时严重卡顿、CPU 激增，该问题关闭情况不明确，需关注最新 1.1.12 版本是否已彻底解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这里是 2026 年 6 月 25 日的 **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw) 项目动态日报。作为 AI 智能体领域的核心开源项目，今日 ZeroClaw 展现了极高的社区活跃度与架构演进速度。

---

### 1. 今日速览
* **整体活跃度极高**：过去 24 小时内，项目共处理了 50 条 Issue 动态（44 条新开/活跃）和 50 条 PR 动态（46 条待合并），显示出社区极强的贡献意愿。
* **核心主题聚焦**：今日的讨论与代码提交高度集中在**安全与多租户隔离**（RBAC、MCP 服务端作用域）、**供应链与 CI 强化**（SLSA、签名）以及 **WASM 插件系统重构**上。
* **代码质量意识强**：今日涌入了大量由 `llagy009` 提交的边界条件和回归测试 PR，表明项目正在为后续的大版本迭代进行质量兜底。

### 2. 版本发布
* **本日无新版本发布 (0 releases)**。
* 目前项目处于高频迭代阶段，根据 Issue 标签判断，团队正在向 `v0.9.0`（OIDC 支持）和 `v0.8.3`（运行时与稳定性修复）里程碑推进。

### 3. 项目进展
今日虽然有 4 个 PR 被合并/关闭，但**更重要的进展体现在大量高价值、高风险的架构级 PR 进入待合并状态**：
* **安全隔离修复落地**：PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) 修复了 `mcp_bundles` 自引入以来仅停留在配置层面、未在运行时生效的高危漏洞，真正实现了每个 Agent 独立的 MCP 服务端隔离。
* **WASM 插件宿主重构**：PR [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) 引入了基于 `wasm-wasip2` 组件模型的初始插件宿主代码，正式弃用 Extism，这标志着 ZeroClaw 在安全沙箱和跨平台技能分发上迈出了关键一步。
* **仪表板体验升级**：PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) 实现了从 Web 仪表板直接进行应用内升级（检测 -> 显示更新日志 -> 应用 -> 重启），大幅降低了运维门槛。

### 4. 社区热点
今日讨论最热烈的需求几乎全部围绕**企业级安全与身份认证**展开，反映出用户群体正从个人极客向企业和团队转变：
* **多租户 RBAC 隔离**：Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（评论 9 次）。用户强烈要求实现基于发送者的角色访问控制（RBAC），以便在同一 ZeroClaw 实例中隔离客户、运维和开发人员的工具集和提示词。
* **OIDC 认证提供者**：Issue [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（评论 6 次）。作为 v0.9.0 的核心追踪 Issue，社区正在积极推进可插拔身份验证提供商的架构设计。
* **供应链安全 RFC**：Issue [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)（评论 5 次）。提议引入硬件支持的 PGP 密钥、多方仲裁和 SLSA 来源校验，表明项目对供应链攻击的防范意识达到了新高度。

### 5. Bug 与稳定性
今日报告了多个高危级别（`risk: high`）的严重 Bug，部分已产生阻断性影响：
* **[S2 安全静默失效]** Issue [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)：配置了每个 Agent 的 MCP 隔离，但运行时却放行了所有 MCP 请求，导致安全隔离形同虚设。（**已有修复 PR #7747**）
* **[S1 工作流阻断]** Issue [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)（已关闭）：在 Matrix 频道中，延迟处理的图像附件会丢失缓存引用，导致 Bot 随后否认看到过该图片。
* **[资源泄漏]** Issue [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)：开启心跳检测（默认开启）时，MCP stdio 子进程会每个周期泄漏一个，最终耗尽宿主机资源。
* **[OAuth 委托阻断]** Issue [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623)：将任务委托给需要 OpenAI OAuth 认证的子 Agent 时仍然失败，主控 API Key 发生了越权透传。

### 6. 功能请求与路线图信号
从近期的 Issue 和 PR 趋势来看，下一个版本的路线图已十分清晰：
* **目标导向的自主执行模式 (Goal Mode)**：Issue [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 提出了全新的 RFC，要求引入一种持久的“目标模式”，让 Agent 持续执行任务直到完成、预算耗尽或被取消。
* **SOP 审批平面**：PR [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) 引入了带超时机制的带外（Out-of-band）SOP 审批平面，这是迈向高安全性自治 Agent 的重要一步。
* **技能自适应反思**：PR [#8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261) 允许 Agent 从执行历史中自动合成并反思 `SKILL.md`，极大降低了用户编写技能插件的门槛。

### 7. 用户反馈摘要
* **痛点：网关与终端集成受限**：用户（如 Issue [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)）反馈在使用 OpenRouter 等第三方网关时，无法使用模型故障转移数组，一旦主模型限流便会直接报错。
* **痛点：DingTalk/Slack 延迟高**：用户（Issue [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)）抱怨在长文本生成时，必须等待完全生成才能在钉钉中发送消息，体验滞后，强烈要求支持流式消息推送。
* **满意度：快速上手体验需平衡**：Issue [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) 揭示了一个有趣的用户心理——用户抱怨快速开始时的默认安全配置太严，导致初期体验受挫，建议默认开启“yolo”模式（全自动无限制）。

### 8. 待处理积压
* **Cron 任务缺少前置门控**：Issue [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) 自 4 月提出，目前被标记为 `blocked`。用户需要一种轻量级的预检脚本机制，以防 Agent 定时任务在无意义的情况下重复触发。
* **缺少自签名证书支持**：Issue [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) 因标记为 `wontfix` 被关闭，但反映出企业内网用户使用自建 LLM 端点（HTTPS 自签名）时面临硬阻，建议维护者重新评估提供“忽略 SSL 校验”配置项的必要性。

</details>