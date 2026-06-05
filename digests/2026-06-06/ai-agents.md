# OpenClaw 生态日报 2026-06-06

> Issues: 472 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-05 22:22 UTC

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

# 🤖 OpenClaw 项目动态日报 (2026-06-06)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 分析周期：过去 24 小时

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持了极高的社区活跃度，共处理了 **472 条 Issue 更新**（新增/活跃 349，关闭 123）和 **500 条 PR 更新**（待合并 379，合并/关闭 121）。尽管今日无新版本发布，但社区贡献的焦点高度集中在修复 2026.6.1 版本引入的回归 Bug 上。核心开发者与贡献者正在对底层会话状态管理、多渠道集成（Telegram、飞书、Matrix）以及大模型提供商兼容性（OpenAI GPT-5 系列）进行深度修复与架构加固。整体来看，项目处于“高强度修Bug与功能迭代并行”的健康状态。

## 2. 版本发布

**无新版本发布。** 
目前主分支正在积聚大量针对 `v2026.6.1` 引入的兼容性和稳定性修复，预计近期将有修订版本发布。

## 3. 项目进展

今日共有 121 个 PR 被合并或关闭，以下是部分核心进展：

- **控制平面与路由修复**：[#90772](https://github.com/openclaw/openclaw/pull/90772) 修复了 `sessions_send` 和 `message.send` 之间的路由错误，优化了 `sessionKey` 的优先级解析。
- **LLM 兼容性修复**：[#90717](https://github.com/openclaw/openclaw/pull/90717)（已合并）修复了单一提供商在速率限制期间被长时间挂起的问题；[#90731](https://github.com/openclaw/openclaw/pull/90731) 修复了动态模型（如 `ollama/minimax-m3:cloud`）元数据丢失问题。
- **消息防丢机制加固**：[#89039](https://github.com/openclaw/openclaw/pull/89039) 解决了 `EmbeddedAttemptSessionTakeoverError` 导致的静默消息丢失；[#89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊进入 `failed` 状态后静默丢弃后续消息的严重问题。
- **渠道集成增强**：Telegram 渠道新增了访客模式（[#83632](https://github.com/openclaw/openclaw/pull/83632)）并修复了压缩指令无回复的问题（[#89588](https://github.com/openclaw/openclaw/pull/89588)）；Discord 渠道修复了搜索依赖问题（[#88796](https://github.com/openclaw/openclaw/pull/88796)）。
- **客户端支持**：Android 客户端迎来了重大更新，新增了 SSH 隧道远程连接支持及多项 UI 修复（[#90761](https://github.com/openclaw/openclaw/pull/90761)）；Web UI 新增了工作区文件面板的折叠功能（[#90754](https://github.com/openclaw/openclaw/pull/90754)）。

## 4. 社区热点

今日社区讨论最激烈的议题集中在**性能回归**、**多渠道体验**以及**上下文资源管理**：

1. **性能严重衰退 (CPU 100% 与 RPC 延迟)** - [Issue #76562](https://github.com/openclaw/openclaw/issues/76562) (13 评论, 👍5)
   - **诉求**：用户升级至 `2026.4.29` 及后续版本后，网关 CPU 占用飙升至 100%，控制平面极度不稳定。目前该问题已关闭，推测已在后续版本或 PR [#90747] (插件缓存降负载) 中得到缓解。
2. **OpenAI GPT-5.4/5.5 传输失败** - [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (12 评论, 👍3)
   - **诉求**：升级 `2026.6.1` 后，OpenAI ChatGPT Responses 传输层报 `invalid_provider_content_type` 错误。用户对最新版接入 GPT-5 系列模型失败感到极度焦虑。
3. **上下文 Token 浪费优化** - [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (17 评论)
   - **诉求**：大型工作空间中，Bootstrap 文件在每次会话（包括子代理和定时任务）中消耗大量 Token。提议引入分层加载机制，反映出重度用户对**成本控制和性能优化**的强烈需求。

## 5. Bug 与稳定性

今日报告了大量 Bug，其中以 `v2026.6.1` 引入的回归问题为主：

🔴 **P0/P1 严重级别 (影响核心功能或导致数据丢失)**
- **Cron 状态被静默清除** - [Issue #90072](https://github.com/openclaw/openclaw/issues/90072) (已关闭)：升级 `2026.6.1` 时 SQLite 迁移导致 44/45 个定时任务被静默抹除。
- **Matrix 渠道彻底瘫痪** - [Issue #90325](https://github.com/openclaw/openclaw/issues/90325)：`2026.6.1` 中 Matrix 通道在接收消息时直接崩溃 (TypeError)。
- **OpenAI 加密推理内容错误** - [Issue #90093](https://github.com/openclaw/openclaw/issues/90093)：原生重放发送了加密推理，导致下一轮对话失败。
- **Memory-core 梦幻整理异常** - [Issue #90466](https://github.com/openclaw/openclaw/issues/90466)：在 `2026.6.1` 中，记忆索引读取了已删除的会话路径，导致叙事生成失效。

🟠 **P2/P3 中等级别 (体验受损或边缘场景)**
- **飞书渠道双重 Bug**：流式卡片打字机效果异常且内容截断（[Issue #88929](https://github.com/openclaw/openclaw/issues/88929)），配置验证在升级后失败（[Issue #63101](https://github.com/openclaw/openclaw/issues/63101)）。
- **Android 客户端阻塞性 Bug**：在远程服务器离线时，“连接”按钮处于不可用状态导致 onboard 卡死（[Issue #61005](https://github.com/openclaw/openclaw/issues/61005)）。已有对应 Fix PR（[#90761](https://github.com/openclaw/openclaw/pull/90761)）。

## 6. 功能请求与路线图信号

结合今日 Issues 与 PRs，以下是潜在的演进路线图信号：

- **安全与权限模型重构**：
  - [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) 提出 MCP 工具调用需要“信封式审批”机制。
  - [Issue #58730](https://github.com/openclaw/openclaw/issues/58730) 借鉴 Claude Code 泄露事件，呼吁加强 exec() 沙箱隔离。
  - *信号*：OpenClaw 正在构建企业级的细粒度安全访问边界，未来版本可能在 MCP 插件和代码执行沙箱上加强控制。
- **精细化上下文与成本控制**：
  - Bootstrap 分层加载（[Issue #22438](https://github.com/openclaw/openclaw/issues/22438)）及会话时长/Token 硬限制（[Issue #64463](https://github.com/openclaw/openclaw/issues/64463)）。
  - *信号*：多代理和长时间运行场景下的 Token 成本已成为核心痛点，可能会在后续版本引入基于策略的上下文管理。
- **子代理架构完善**：
  - 支持转发工具白名单（[PR #78441](https://github.com/openclaw/openclaw/pull/78441)）。
  - *信号*：多代理编排（A2A）正在快速成熟，向支持复杂任务流的自动化工作流迈进。

## 7. 用户反馈摘要

从原生反馈中，可以看出以下鲜明的用户情绪和痛点：

- **痛点 1：升级如扫雷，版本质量波动大**
  - 多位用户反馈 `2026.4.x` 到 `2026.6.1` 的升级体验极差（[Issue #62505](https://github.com/openclaw/openclaw/issues/62505)）。特别是编码代理“无所事事”和 Cron 任务被静默清空，导致对自动化流程不信任。
- **痛点 2：多端表现不一致且文档滞后**
  - Matrix 语音消息无法识别（[Issue #78016](https://github.com/openclaw/openclaw/issues/78016)）、飞书 API 调用错误（[Issue #69572](https://github.com/openclaw/openclaw/issues/69572)）、工具行为与文档说明相悖（[Issue #61009](https://github.com/openclaw/openclaw/issues/61009)）。用户在使用除 Telegram/Discord 外的渠道时遇到诸多暗坑。
- **满意点：开源协作响应极快**
  - 面对大量由 AI 辅助产生的边缘 Bug，维护者和社区提交了海量细分且包含真实行为验证的 PR（如 [PR #90754](https://github.com/openclaw/openclaw/pull/90754)）。社区对底层细节（如 fence 校验、沙箱逃逸）的讨论极为专业。

## 8. 待处理积压

以下长期高优先级 Issue/PR 仍处于待处理状态，提醒维护者关注：

- **WebChat 会话历史被覆盖（数据丢失）** - [Issue #77012](https://github.com/openclaw/openclaw/issues/77012) (P1)：每次对话覆盖 JSONL，刷新页面丢失历史。长时间未彻底解决。
- **MCP 工具无法注入子代理** - [Issue #85030](https://github.com/openclaw/openclaw/issues/85030) (P1)：子代理生成时丢失所有外部 MCP 工具，严重影响多代理工作流。
- **Gateway 状态不一致** - [Issue #84252](https://github.com/openclaw/openclaw/issues/84252) (已关闭但相关修复未完全合并)：OpenAI-Codex OAuth 状态有时呈现假阳性。
- **Lobster 工作流挂起** - [Issue #87756](https://github.com/openclaw/openclaw/issues/87756) (P1)：嵌套工具调用时的回归 Bug，目前等待维护者提供 Live Repro 环境。

---

## 横向生态对比

以下是为您整理的 2026 年 6 月 6 日 AI 智能体与个人助手开源生态横向对比分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从单体对话向多端协同与多模态复杂工作流跃升的关键重构期**。各项目全面接入了 GPT-5、Claude 系列前沿模型，但也随之面临**上下文 Token 消耗巨大、沙箱安全隔离不足**等共性阵痛。**“桌面端 (Desktop) 争夺战”**与**“多渠道异步通信集成 (Telegram/企微/飞书等)”**成为发力焦点，反映出开源项目正加速从极客 CLI 工具向大众生产力应用转型。

### 2. 各项目活跃度对比
*(注：统计指标为过去 24 小时内的状态变更数量，非绝对新增量)*

| 项目名称 | Issues 动态 | PRs 动态 | 今日 Release | 活跃度定级 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 472 | 500 | 无 | 🔥 极高 | **中** (修 Bug 为主，v6.1 引入严重回归) |
| **IronClaw** | 11 | 50 | 无 | 🔥 极高 | **良** (底层架构重构，高代码吞吐) |
| **ZeroClaw** | 50 | 50 | 无 | 🔥 极高 | **优** (安全重构，代码库清理) |
| **CoPaw (QwenPaw)** | 30 | 26 | 无 | 🚀 高 | **良** (新渠道接入热，内存泄露需关注) |
| **Hermes Agent** | 50 | 50 | 无 | 🚀 高 | **中** (桌面端大考，IME体验差) |
| **NanoBot** | 10 | 27 | 无 | 🚀 高 | **优** (多智能体协同，响应极快) |
| **PicoClaw** | 6 | 24 | Nightly | 🚀 高 | **优** (防崩溃修复密集，稳健) |
| **LobsterAI** | 3 | 13+ | **v2026.6.5** | ✈️ 中 | **优** (UX打磨，安全加固) |
| **NanoClaw** | 0 | 5 | 无 | ✈️ 中 | **优** (平稳期，专注底层修漏) |
| **Moltis** | 4 | 4 | 无 | 🚶 低 | **优** (聚焦容器化与沙箱适配) |
| **NullClaw** | 0 | 1 | 无 | 💤 极低 | **优** (稳定维护，生态扩展) |
| *TinyClaw / ZeptoClaw*| - | - | - | 💤 静默 | - |

### 3. OpenClaw 在生态中的定位
*   **生态标杆与流量中心**：OpenClaw 毫无疑问是该领域的“巨无霸”，每日处理的 PR 和 Issue 数量级（500+）远超其他同类项目总和，是事实上的行业风向标。
*   **技术路线差异**：相较于 IronClaw 或 Hermes Agent 在底层工作流或桌面端的重构，OpenClaw 当前处于**功能膨胀后的“消化期”**。其核心架构具备极强的多渠道路由能力，但近期因为激进的迭代（v6.1）导致了严重的数据丢失和 CPU 100% 等稳定性危机。
*   **社区规模对比**：社区贡献者基数庞大且专业度高，从边缘 Bug 提交到核心的 fence 校验均有深度参与。相比 NanoBot 的轻量敏捷，OpenClaw 面临着大型开源项目典型的“版本质量波动与升级如扫雷”的挑战。

### 4. 共同关注的技术方向
从多项目的同频演进中，可以明确识别出当前 AI 工程界的四大核心诉求：
1.  **安全执行边界与沙箱防逃逸**：
    *   *涉及项目*：OpenClaw, ZeroClaw, Hermes Agent, PicoClaw, LobsterAI
    *   *诉求*：Agent 执行 Shell 命令或文件写入（`write_file` / `exec`）时极易破坏宿主机，各项目均在探索可插拔的安全策略（如 ZeroClaw 的分级执行、PicoClaw 的黑白名单）以及沙箱隔离。
2.  **多平台消息无缝路由与防丢失**：
    *   *涉及项目*：OpenClaw, CoPaw, NanoBot, NanoClaw, PicoClaw
    *   *诉求*：在 Telegram/飞书/企微/WhatsApp 等渠道中，长文本截断、流式输出污染、静默丢弃消息（如 NanoClaw 的 WhatsApp LID 寻址错误）是高频 Bug，稳定性需求激增。
3.  **Token 消耗控制与成本优化**：
    *   *涉及项目*：OpenClaw, Hermes Agent, PicoClaw
    *   *诉求*：重度用户对 Token 极其敏感。Bootstrap 分层加载（OpenClaw）、针对死循环的 `StormBreaker` 熔断机制、空闲状态的后台空转拦截（PicoClaw）成为刚需。
4.  **Agent 死循环熔断与长期记忆治理**：
    *   *涉及项目*：Hermes Agent, CoPaw, NanoBot
    *   *诉求*：Agent 陷入疯狂调用同一工具的“死循环”引发恐慌；同时，只增不减的长期记忆导致幻觉（NanoBot），亟需记忆覆盖与过期淘汰机制。

### 5. 差异化定位分析
*   **OpenClaw / CoPaw**：**“全链路超级聚合体”**。目标成为无所不包的个人中枢，功能极全，但面临架构臃肿的考验。CoPaw 更侧重国内生态（如微信、本地大模型）。
*   **Hermes Agent / IronClaw**：**“企业级多 Agent 编排”**。侧重于多智能体工作流、Hook 扩展、细粒度权限与合规审计。IronClaw 正在经历激进的底层 API 兼容重构。
*   **ZeroClaw**：**“安全与运行时隔离专家”**。聚焦于本地进程管理、WASM 沙箱插件、气隙执行与 OIDC 鉴权，对隐私要求极高的极客和企业更具吸引力。
*   **NanoBot / NanoClaw / NullClaw**：**“轻量级端侧/多模态网关”**。核心不在于复杂的本地沙箱，而是解决如何将各种大模型 API 低损耗、高容错地接入各个 IM 渠道。
*   **LobsterAI**：**“极致的 UX 体验派”**。由商业公司（网易有道）主导，重点发力于快捷键、多媒件预览渲染、商业化平滑过渡等客户端体验打磨。

### 6. 社区热度与成熟度
*   **震荡重构期（活跃高，风险中高）**：**OpenClaw, IronClaw, Hermes Agent**。它们获得了极高的社区关注和代码吞吐量，但正因处于架构大改和桌面端适配期，核心代码稳定性面临严峻挑战，用户吐槽“升级如扫雷”的频率较高。
*   **快速迭代期（活跃高，质量稳健）**：**ZeroClaw, CoPaw, NanoBot, PicoClaw**。项目目标明确，对社区 Issue 响应极速（如 NanoBot 24 小时内出 PR），正在快速补齐多端和多模型的支持。
*   **质量收敛与成熟期（活跃中低，体验优秀）**：**LobsterAI, NanoClaw, Moltis, NullClaw**。底层框架已基本稳固，核心维护者主要在修复边缘 Bug、优化 UI 交互、打磨容器化部署，适合直接用于生产环境。

### 7. 值得关注的趋势信号
1.  **“RPA 原生化”趋势：** CoPaw 和 IronClaw 的社区呼声表明，用户已不再满足于“纯聊天”，而是希望 Agent 直接接管浏览器（基于坐标的点击控制）或作为 Cron 定时任务节点执行系统级脚本。
2.  **多模型统一网关 的兴起：** NullClaw 引入 Evolink 等聚合网关标志着开发者对管理碎片化 API 感到疲惫。通过统一端点接入 GPT-5/DeepSeek/豆包等，结合内置的测速 Failover（如 CoPaw 提议），将是个人助手的标配。
3.  **桌面端 CJK 输入法与底层割裂之痛：** Hermes 的遭遇给所有 Electron/Tauri 桌面端开发者敲响警钟——如果不解决中文输入法截断、多环境变量（PATH）隔离的问题，强行推桌面端只会引发负面口碑。高级用户依然倾向于“本地核心服务 + WebUI/IM 远程连接”的解耦模式。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-06)

**分析师视角**：作为 AI 智能体与个人 AI 助手领域的核心开源项目，NanoBot 今日展现出了极高的社区活跃度与快速迭代能力。以下是基于过去 24 小时 GitHub 数据的项目状态分析报告。

---

## 1. 今日速览
过去 24 小时，NanoBot 项目呈现出**高活跃度、快速响应、生态扩展**三大特征。项目今日共处理了 27 条 PR 动态（其中 11 条被合并或关闭）和 10 条 Issue 动态（关闭 4 个，新开 6 个）。核心开发团队及社区贡献者重点聚焦于**桌面端体验优化、多渠道网关兼容性、Agent 协作及长期记忆稳定性**的改进。整体而言，项目处于健康且快速发展的上升期。

## 2. 版本发布
**无新版本发布**。项目当前仍在集中进行功能累积与缺陷修复，预计在完成近期多项桌面端及底层 Python 版本适配后，将发布新的正式版本。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，主要在修复 WebUI 和多渠道的基础体验问题，并引入了新的开发者工具链。这标志着项目在“向外拓展（桌面端、新渠道）”的同时，也在“向内收拢（提升系统鲁棒性）”：
*   **WebUI 及桌面端基础夯实**：
    *   [PR #4201](https://github.com/HKUDS/nanobot/pull/4201) `[merged]`：修复了浏览器刷新导致用户消息丢失的严重问题，显著提升了 WebUI 的可靠性。
    *   [PR #4210](https://github.com/HKUDS/nanobot/pull/4210) `[closed]`：处理了桌面端重启时的 token 和重放间隙问题。
*   **渠道集成修复**：
    *   [PR #4197](https://github.com/HKUDS/nanobot/pull/4197) `[merged]`：修复了微信（Weixin）和 Telegram 的 DM 配对问题。
*   **命令与技能系统完善**：
    *   [PR #3968](https://github.com/HKUDS/nanobot/pull/3968) `[merged]`：新增了 `/skill` 命令，解决了用户无法发现已启用技能的痛点。
*   **工程化与兼容性调整**：
    *   [PR #4207](https://github.com/HKUDS/nanobot/pull/4207) `[open]`：提议放弃对 Python 3.11 和 3.12 的支持（CI 实际仅测试 3.13/3.14），以减轻维护负担。

## 4. 社区热点
今日社区焦点主要集中在**跨 Agent 通信**和**多模型提供商兼容性**上，反映了用户对构建复杂 AI 协作网络的强烈需求：
*   **跨实例消息总线**：[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) 提出并实现了跨 Agent 协作的消息总线机制。这表明社区正在将 NanoBot 从单一助手推向多智能体协同工作场景。
*   **兼容更多 OpenAI 风格网关**：[Issue #4204](https://github.com/HKUDS/nanobot/issues/4204) 提出了针对 Azure 风格网关增加 `extra_query` 参数的支持，反映出私有化部署和企业网关场景的需求正在增加。
*   **桌面端开放准备**：[PR #4195](https://github.com/HKUDS/nanobot/pull/4195) 正在打磨桌面外壳及共享 WebUI 界面，标志着 NanoBot 即将全面进军原生桌面端应用市场。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，涉及会话管理、长时记忆和 SDK 生命周期，但社区均第一时间给出了修复方案：

1.  **严重：历史消息被错误清空** 
    *   [Issue #4203](https://github.com/HKUDS/nanobot/issues/4203)：当用户消息后跟随“孤立工具结果”时，会导致所有消息被丢弃。已有修复：[PR #4215](https://github.com/HKUDS/nanobot/pull/4215)。
2.  **严重：WebUI 刷新丢失消息 (回归)**
    *   [Issue #4200](https://github.com/HKUDS/nanobot/issues/4200)：刷新浏览器会导致当前会话丢失。已通过 [PR #4201](https://github.com/HKUDS/nanobot/pull/4201) 修复。
3.  **中等：长期记忆污染**
    *   [Issue #4212](https://github.com/HKUDS/nanobot/issues/4212)：未经验证的推断作为宽泛的事实被重新注入系统提示词，导致错误难以纠正。
4.  **中等：SDK 关闭异常**
    *   [Issue #4211](https://github.com/HKUDS/nanobot/issues/4211)：使用 SDK 嵌入且配置 stdio MCP 时，关闭阶段会抛出 `RuntimeError`。
5.  **轻微：禁用技能仍在列表显示**
    *   [Issue #3959](https://github.com/HKUDS/nanobot/issues/3959)：`/skill` 命令会列出已被加入黑名单的技能。

## 6. 功能请求与路线图信号
结合今日的 Issue 和 PR，可以看出项目下一步的演进方向：
*   **更丰富的多模态接入**：[Issue #4196](https://github.com/HKUDS/nanobot/issues/4196) 和 [Issue #4132](https://github.com/HKUDS/nanobot/issues/4132) 集中呼吁支持火山引擎和自定义图片生成提供商。
*   **精细化 Agent 容错与控制**：[Issue #4198](https://github.com/HKUDS/nanobot/issues/4198) 建议开放 `fail_on_tool_error` 配置，允许 subagent 自行修复轻微的工具调用错误，而非直接中断。
*   **邮箱自动化处理**：[PR #4170](https://github.com/HKUDS/nanobot/pull/4170) 增加了收件箱处理后的自动动作（如标记已读/删除），结合 AI 助手的自动化工作流又进了一步。

## 7. 用户反馈摘要
从今日的数据中可以清晰刻画出当前 NanoBot 用户的几个典型痛点与应用场景：
*   **痛点：多渠道 API 适配碎片化**。由于各家兼容 OpenAI 的 API 存在细微差异（如必须的 query param 或排斥特定的 image body 参数），用户在接入非官方模型时容易遇到 404 或参数错误（如 Issue #4204）。
*   **痛点：Agent 记忆的“顽固性”**。高级用户发现，一旦 AI 产生了错误的长期记忆，很难通过普通的对话纠正它，这需要更高级的记忆覆盖和遗忘机制（如 Issue #4212）。
*   **满意点：社区响应极速**。如 WebUI 刷新丢消息、消息清空等高优 Bug，从提出到 PR 修复往往在 24 小时内甚至同天完成，极大地提升了开发者体验。

## 8. 待处理积压
以下重要模块仍有长期未解决的 Issue 或停滞的 PR，建议维护团队重点关注：
*   **Matrix 渠道测试失败**：[Issue #1946](https://github.com/HKUDS/nanobot/issues/1946) 自 3 月报告以来一直未能解决，影响 Matrix 渠道的稳定性。
*   **CI/CD 流程统一**：[PR #1408](https://github.com/HKUDS/nanobot/pull/1408) 和 [PR #1284](https://github.com/HKUDS/nanobot/pull/1284) 均旨在增强项目的自动化测试和质量门禁，但已停滞数月。考虑到项目规模的扩大，尽早合并高质量的 CI/CD 方案对项目长期健康度至关重要。
*   **Exa 搜索引擎接入**：[PR #4213](https://github.com/HKUDS/nanobot/pull/4213) 是由社区开发者提交的新搜索引擎提供商支持，需官方团队进行 Review 以丰富搜索能力。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-06)

## 1. 今日速览
过去 24 小时内，Hermes Agent 项目保持了**高度活跃**的社区开发态势。虽然今日无新版本发布，但产生了 50 条 Issue 更新和 50 条 PR 更新，整体以新开缺陷报告和功能 RFC 为主。最显著的现象是近期推出的 **Desktop 桌面端应用正经历严苛的“大考”**，大量用户涌入报告了在不同操作系统（尤其是 Windows 和输入法兼容性）上的崩溃、环境隔离及 UI 交互问题。同时，项目的安全合规性建设正在稳步推进，多位核心贡献者提交了关于凭证保护和网关鉴权的修复。

---

## 2. 版本发布
* **今日无新版本发布。** 
*(注：目前项目最新版本应为 v0.15.1，大量 Issue 反馈基于此版本。)*

---

## 3. 项目进展
今日仅有 2 个 PR 被合并/关闭，虽然合并数量较少，但针对关键的系统稳定性和逻辑缺陷进行了修复：

* **修复 Session 压缩导致历史记录永久丢失的问题 ([PR #40112](https://github.com/NousResearch/hermes-agent/pull/40112))**：修复了 `compress` 在会话轮换未发生时意外覆盖原始对话的严重缺陷，挽救了可能造成用户数据丢失的关键隐患。
* **修复 Skills 解析路径不一致问题 ([PR #40133](https://github.com/NousResearch/hermes-agent/pull/40133))**：解决了 `skills_list` 和 `skill_view` 在解析 frontmatter `name` 和目录名时产生的漂移问题，提高了技能路由的准确性。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**跨平台桌面端的体验缺失**以及**智能体死循环控制**上：

* **[最高评论量] System Prompt 技能索引截断导致路由失败 ([Issue #13944](https://github.com/NousResearch/hermes-agent/issues/13944), 6条评论, P2)**：系统将技能描述硬截断为 60 个字符，导致模型丢失关键的触发上下文。这暴露了 Agent 在处理大量复杂 Tools 时的核心路由瓶颈。
* **桌面端连接远程 VPS 实例受阻 ([Issue #37663](https://github.com/NousResearch/hermes-agent/issues/37663), 3条评论)**：用户强烈需要使用桌面端作为前端连接已有的远端 VPS 实例，但目前桌面端仅支持本地初始化。
* **Native Windows App 启动崩溃 ([Issue #39570](https://github.com/NousResearch/hermes-agent/issues/39570), 3条评论)**：部分 Windows 用户连遭遇启动即闪退，只能回退使用 CLI。
* **智能体“死亡循环”拦截机制 ([Issue #512](https://github.com/NousResearch/hermes-agent/issues/512) & [Issue #35573](https://github.com/NousResearch/hermes-agent/issues/35573))**：大量用户赞同引入类似 Kilocode 的 `ToolCallStormBreaker`，在连续 3 次以上调用相同工具时强制暂停请求用户确认，以阻止无意义的 Token 消耗。

---

## 5. Bug 与稳定性
今日报告了大量 Bug（尤其是桌面端），按严重程度划分如下：

**🔴 P2 严重级别 (核心逻辑与平台阻断)**
* **MCP 审批工具形同虚设 ([Issue #21563](https://github.com/NousResearch/hermes-agent/issues/21563))**：桥接子进程缺乏 IPC 通道，导致 `permissions` API 始终为空操作，影响 MCP 安全审批链路。
* **Telegram Clarify 提示 UI 混乱 ([Issue #39694](https://github.com/NousResearch/hermes-agent/issues/39694))**：在要求用户澄清时，错误附加了 `/stop` 等会话控制指令，干扰正常输入。
* **TUI 通知路由串台 ([Issue #35652](https://github.com/NousResearch/hermes-agent/issues/35652))**：多 TUI 会话并存时，后台进程完成的通知被错误发送到无关的会话中。
* **macOS GUI PATH 导致 MCP 工具丢失 ([Issue #37589](https://github.com/NousResearch/hermes-agent/issues/37589))**：桌面端找不到 CLI 中可正常发现的 MCP 服务器（如 uvx），已提交相关修复 PR ([PR #36999](https://github.com/NousResearch/hermes-agent/pull/36999))。

**🟠 P3 中等级别 (桌面端崩溃与环境问题)**
* **Windows 输入法 (IME) 兼容性严重缺陷**：输入中文时按键失效、文本发送被截断。此问题引发大量吐槽，已有开发者提交热修复 ([Issue #40146](https://github.com/NousResearch/hermes-agent/issues/40146), 修复见 [PR #40148](https://github.com/NousResearch/hermes-agent/pull/40148) 及 [PR #40150](https://github.com/NousResearch/hermes-agent/pull/40150))。
* **NVIDIA 580+ 驱动崩溃 ([Issue #40077](https://github.com/NousResearch/hermes-agent/issues/40077))**：Ubuntu 24.04 下，使用 580+ 版本驱动的 Electron 桌面端直接崩溃。
* **大段文本粘贴导致前端卡死 ([Issue #40147](https://github.com/NousResearch/hermes-agent/issues/40147))**：在输入框粘贴长日志会导致应用无响应。

---

## 6. 功能请求与路线图信号
基于今日的 PR 和 RFC，项目未来的迭代方向浮出水面：

* **Claude CLI 路由支持 (极大可能合并)**：[PR #40143](https://github.com/NousResearch/hermes-agent/pull/40143) 及 [PR #40074](https://github.com/NousResearch/hermes-agent/pull/40074) 引入了 Claude Code Provider，使得 Max/Pro 订阅用户可通过子进程调用 Claude CLI，从而绕开昂贵的按量付费 API 端点。
* **插件化架构扩展**：新增 `pre_delegate_build` 钩子 ([PR #40143](https://github.com/NousResearch/hermes-agent/pull/40143))，允许插件在子代理委派时控制模型路由，表明 Hermes 正在构建更强大的企业级插件生态。
* **IRC 频道静默监听**：[PR #39935](https://github.com/NousResearch/hermes-agent/pull/39935) 增加了 IRC 平台的未提及消息静默观察功能，扩展了 Agent 的被动信息收集能力。

---

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出当前用户的几个强烈反馈点：

1. **“重 CLI，轻桌面”的不满**：高级用户对于 Desktop 客户端无法复用已有的 WSL/VPS 环境感到极其沮丧 ([Issue #40140](https://github.com/NousResearch/hermes-agent/issues/40140))，强行隔离出全新的 `HERMES_HOME` 打破了他们原有的管理习惯。
2. **Token 燃烧焦虑**：用户对 Agent 陷入死循环疯狂消耗 API 额度感到恐慌，迫切需要内置的“熔断机制”。
3. **非英文用户体验受损**：CJK（中日韩）输入法在桌面端的支持非常薄弱，发送截断、语音/发送按钮切换失灵等基础问题直接劝退部分亚洲开发者。
4. **安全机制的过度/不足防御**：一方面，用户指出 `write_file` 等非 Shell 操作绕过了 Tirith 审批 ([Issue #35357](https://github.com/NousResearch/hermes-agent/issues/35357))；另一方面，有人抱怨密钥打码机制甚至污染了 `sed` 等命令的实际执行输出 ([Issue #40139](https://github.com/NousResearch/hermes-agent/issues/40139))。

---

## 8. 待处理积压
以下高价值或高风险的 Issue 长期悬而未决或需核心团队紧急介入：

* **[Security] 凭证保护绕过 ([Issue #35357](https://github.com/NousResearch/hermes-agent/issues/35357))**：非 Shell 工具绕过 Human-in-the-loop 审批，在网关安全场景下属于高危漏洞，急需排期修复。
* **[Feature] 桌面端远程网关连接与 Profile 切换 ([Issue #37713](https://github.com/NousResearch/hermes-agent/issues/37713), 获 3 👍)**：这是桌面端走向成熟使用的核心诉求，建议团队在下一个大版本中重构客户端的连接逻辑。
* **[Config] 自定义 Provider 模型白名单失效 ([Issue #18726](https://github.com/NousResearch/hermes-agent/issues/18726))**：拉取第三方 Provider 模型列表时忽略了用户配置，导致列表污染，此问题已 open 超过一个月。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-06-06)

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日保持**高度活跃的开发状态**，核心贡献者进行了密集的代码合并与错误修复。在过去 24 小时内，项目共处理了 24 个 Pull Requests（其中 22 个已合并/关闭），并发布了最新的 `nightly` 自动构建版本。同时，社区反馈积极，共产生了 6 条 Issues 更新（4 个已关闭，2 个新开），这表明项目在**持续快速迭代的同时，能够高效响应并解决用户报告的稳定性与功能缺陷**。整体来看，项目健康度良好，代码库正处于积极的收敛与优化阶段。

---

## 2. 版本发布

- **[nightly] Nightly Build (v0.2.9-nightly.20260605.5224b9a4)**
  - **详情**：这是基于主分支最新代码的自动化夜间构建版本。包含今日合并的所有安全修复、OneBot 群聊路由修复以及依赖项更新。
  - **破坏性变更/迁移注意**：官方提示该版本为自动构建，**可能存在不稳定情况，建议谨慎用于生产环境**。
  - **完整更新日志**：[v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. 项目进展

今日项目的进展主要集中在**运行时稳定性防崩溃修复**、**渠道接入逻辑修正**和**依赖库全面升级**。共计 22 个 PR 被合并，以下是核心进展：

- **渠道适配与修复**：
  - PR [#3009](https://github.com/sipeed/picoclaw/pull/3009)：修复了 OneBot 群聊回复错误使用私聊接口的致命逻辑错误。
  - PR [#2985](https://github.com/sipeed/picoclaw/pull/2985)：修复了 `/context` 命令中 Token 压缩阈值显示不准确的问题。
- **运行时防崩溃与健壮性增强**：
  - PR [#3010](https://github.com/sipeed/picoclaw/pull/3010) 与 PR [#3011](https://github.com/sipeed/picoclaw/pull/3011)：为 Channel 配置解析和 Agent 事件退订添加了安全的类型断言检查，防止由于配置不当导致的程序 Panic。
  - PR [#2900](https://github.com/sipeed/picoclaw/pull/2900)：增强了 Web UI 后端的 CSRF 防护和路径遍历校验，提升了系统安全性。
- **底层基础设施优化**：
  - PR [#2907](https://github.com/sipeed/picoclaw/pull/2907) 与 PR [#2913](https://github.com/sipeed/picoclaw/pull/2913)：修复了 JSONL 会话存储在系统崩溃后的元数据偏移问题，并优化了热路径的内存克隆开销。
- **依赖项大规模升级**：
  - 合并了大量由 Dependabot 提交的前后端依赖升级，包括 `react`、`@tanstack/react-router`、`shadcn`、Anthropic Go SDK 等，保持了技术栈的现代性。

---

## 4. 社区热点

今日讨论最受关注的 Issue 是关于安全防护策略的误杀问题：

- **[#1042 [BUG] exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042)**（👍 2，评论 15）
  - **诉求分析**：当开启工作区限制（`restrict_to_workspace`）时，执行类似 `curl` 这种完全与工作目录无关的命令时，会触发安全正则将 `wttr.in/Beijing` 错误识别为相对路径 `../../../../Beijing?T` 并拦截。
  - **背后意义**：这反映了用户在将 PicoClaw 作为智能体执行复杂外部命令时，现有的沙箱安全策略正则匹配过于简单粗暴。社区迫切需要一个更智能的黑白名单机制，以平衡「执行外部网络请求的安全性」与「工具调用的高可用性」。

---

## 5. Bug 与稳定性

今日报告并处理了多起关键 Bug，整体稳定性得到进一步夯实：

1. **[严重] OneBot 群聊消息路由失败** ([#3002](https://github.com/sipeed/picoclaw/issues/3002))
   - **现象**：群聊回复调用了私聊 API，导致报错。
   - **状态**：✅ **已修复并合并** (参见 [PR #3009](https://github.com/sipeed/picoclaw/pull/3009))。
2. **[严重] Evolution 功能导致 Token 持续异常消耗** ([#3012](https://github.com/sipeed/picoclaw/issues/3012))
   - **现象**：开启 Evolution (Draft 模式) 后，即使处于空闲，系统也会每分钟消耗 Token。
   - **状态**：🟡 **待确认修复**（用户使用 MiniMax 模型时触发，需关注是否存在死循环调用）。
3. **[中等] 上下文压缩 Token 显示错误** ([#2968](https://github.com/sipeed/picoclaw/issues/2968))
   - **现象**：`/context` 接口总是硬编码显示固定的 Compress 阈值。
   - **状态**：✅ **已修复并合并** (参见 [PR #2985](https://github.com/sipeed/picoclaw/pull/2985))。
4. **[低] Skill 初始化引用丢失** ([#652](https://github.com/sipeed/picoclaw/issues/652))
   - **现象**：官方 `skill-creator` 文档引用了缺失的 `init_skill.py`。
   - **状态**：✅ **已修复** (参见清理文档的 [PR #3013](https://github.com/sipeed/picoclaw/pull/3013))。

---

## 6. 功能请求与路线图信号

从今日的开发活动可以看出，项目正沿着以下功能路线图演进：

- **视觉能力扩展**：待合并的 PR [#2915](https://github.com/sipeed/picoclaw/pull/2915) 为 MiMo 模型添加了 `CommonModels` 配置，帮助 WebUI 自动推荐具备视觉能力的多模态模型。
- **多模态资源优化**：待合并的 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 提出了**图像输入压缩**功能，旨在为 PicoClaw 的视觉管道增加可配置的多级压缩策略，预计这将是下一阶段提升多模态处理效率的重要特性。
- **多实例架构解耦**：待合并的 PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) 正在重构渠道标识逻辑，计划将 Channel Name 与 Provider 解耦。这一底层重构暗示项目正在为未来**支持同一渠道提供商的多个实例并行运行**做架构准备。

---

## 7. 用户反馈摘要

通过今日的 Issues 提炼，真实用户的典型痛点和使用场景如下：

- **痛点 1：第三方模型接入的 Token 控制不够精细**。用户在接入 MiniMax M2.7 等第三方大模型时，对于高并发/高上下文窗口设定下的自动压缩机制缺乏直观感知，且容易触发后台无感的 Token 消耗（Evolution 后台空转）。
- **痛点 2：工具调用（Tool Use）受限**。用户希望 PicoClaw 能够成为强大的超级代理，但在实际操作中，执行简单的 cURL 网络请求会被本地工作区的沙箱防护误杀，体验受挫。
- **场景趋势**：越来越多的用户开始将其接入 OneCat/NapCat 等 QQ 机器人框架。群组/私聊消息上下文的准确路由已成为核心刚需。

---

## 8. 待处理积压

以下长期未决的 Issues/PRs 虽然近期有更新但仍处于 Open 或 Stale 状态，建议核心维护团队重点关注：

- **[PR #2551] 渠道标识重构**：[sipeed/picoclaw PR #2551](https://github.com/sipeed/picoclaw/pull/2551)（已开启 1 个多月）。作为涉及 Message Bus 核心逻辑的重大重构，目前仍待合并，需警惕长期分支冲突带来的维护成本。
- **[PR #2964] 图像输入压缩**：[sipeed/picoclaw PR #2964](https://github.com/sipeed/picoclaw/pull/2964)（已开启 8 天）。此 Feature 解决了多媒体处理的高内存占用痛点，建议尽快安排 Code Review。
- **[Issue #1042] exec 工具路径误杀**：[sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)（已开启 3 个多月，评论高达 15 条）。作为阻碍高级 Agent 工作流的关键 Bug，亟需设计一套包含 URL/协议识别的新安全判定正则予以彻底解决。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-06-06)

> **数据源**: [NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw) | **分析周期**: 过去 24 小时

## 1. 今日速览

过去 24 小时，NanoClaw 项目呈现出**中等偏高的代码提交活跃度，但社区互动相对平缓**的状态。项目今日无新版本发布，也没有新开的 Issue，表明当前处于功能迭代与底层缺陷修复的平稳期。然而，项目在 24 小时内产出了 5 个 Pull Requests（其中 2 个已合并关闭，3 个待合并），说明核心维护者和贡献者正在积极处理多平台（Signal、WhatsApp）接入的边缘情况以及 AI SDK 底层的错误重试机制。整体来看，项目在多平台通信兼容性和 API 鲁棒性方面正在稳步推进。

## 2. 版本发布

**无**。今日项目未发布新版本。

## 3. 项目进展

今日共有 2 个 PR 被成功合并/关闭，显著改善了项目的配置体验和文档准确性：

*   **合并 PR [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) `feat: show OneCLI's own setup URL when HF token is missing`** (作者: gavrielc)
    *   **进展说明**: 修复了 HuggingFace token 缺失时的用户体验。过去系统硬编码了本地和托管的 OneCLI dashboard URL，现在通过解析网关代理请求返回的错误体（`credential_not_found`），动态获取并展示正确的设置 URL。这提高了多网关部署环境下的配置成功率。
*   **合并 PR [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) `fix: simplify HF token setup + correct secret-mode docs`** (作者: gavrielc)
    *   **进展说明**: 简化了 OneCLI 密钥模式的配置逻辑。确认了自动创建的 Agent 默认密钥模式为 `all`，移除了不必要的按代理分配步骤，并同步修正了相关文档。这大幅降低了新用户配置 Secrets 的认知负担。

**整体迈进评估**: 项目在初始部署和凭证配置（Onboarding 体验）方面迈出了扎实的一步，减少了因配置复杂性导致的潜在错误。

## 4. 社区热点

过去 24 小时内，Issues 列表无新增或活跃讨论，PR 区也暂无大量评论互动（所有 PR 评论数均为 `undefined`/0，点赞数为 0）。

目前的隐性热点集中在**多平台接入的底层实现**：
*   开发者 `ddaniels` 提出的 PR [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) 关注 AI Agent 底层轮询遇到 API 529/5xx 错误的容灾机制。
*   开发者 `klingel` 和 `mcaldas` 则分别针对 Signal 和 WhatsApp 的近期协议变动（如 LID 寻址）提交了重要修复。

尽管当前缺乏评论互动，但这些 PR 解决的都是生产环境中极易引发“静默失败”的关键问题，属于社区和重度用户的隐性痛点。

## 5. Bug 与稳定性

今日未收到通过 Issue 提交的 Bug 报告，但通过 PR 提交了数个关键的 Bug 修复（部分严重程度较高）：

1.  **[严重] WhatsApp 群组消息静默发送失败（ACK 421）**
    *   **关联 PR**: [#2688](https://github.com/nanocoai/nanoclaw/pull/2688) (作者: mcaldas) - *[待合并]*
    *   **详情**: WhatsApp 将群组迁移至 LID 寻址方式后，机器人的回复在底层被拦截并报 421 错误，导致消息**静默丢失**，用户端完全无报错。该 PR 修复了 `getNormalizedGroupMetadata` 中的寻址转换逻辑。
2.  **[中等] Signal DM 首条消息被丢弃**
    *   **关联 PR**: [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) (作者: klingel) - *[待合并]*
    *   **详情**: Signal 私信（DM）未正确设置 `isMention: true` 标志，导致路由器未能在数据库中自动创建 `messaging_groups`，使得首条私信被静默丢弃。
3.  **[中等] Claude API 瞬态错误（529）导致终端异常**
    *   **关联 PR**: [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) (作者: ddaniels) - *[待合并]*
    *   **详情**: 当 Claude Agent SDK 遇到 5xx 瞬态错误耗尽内部重试时，会返回终结错误而非抛出异常。当前系统未能捕获该结果，该 PR 补全了重试逻辑并在耗尽时发出通知。

## 6. 功能请求与路线图信号

*   **无显性功能请求**（今日无新 Issue）。
*   **路线图信号分析**: 结合最近合并和待合并的 PR，项目当前的重心（路线图）非常明确：
    1.  **提升多模态/多平台通信的健壮性**：针对 WhatsApp 和 Signal 的架构更新进行紧急适配。
    2.  **完善 AI SDK 错误处理边界**：增强在网络波动或上游 API（如 Anthropic Claude API）拥挤时的系统鲁棒性（重试与耗尽机制）。
    3.  **优化开发者/用户 Onboarding 体验**：大幅降低 Token 和 Secrets（特别是 OneCLI 和 HF Token）的配置门槛。

## 7. 用户反馈摘要

由于今日无活跃的 Issue 评论，无法直接提取真实用户的实时吐槽或赞誉。但从开发者提交的 PR 侧面反映出：**在复杂网络环境下部署个人 AI 助手时，多平台通信协议的频繁变更（如 WhatsApp LID）和 Token 配置指引的缺失，是开发者/高级用户最常遇到的隐形阻力。**

## 8. 待处理积压

提醒维护者重点关注以下待处理的 PR，这些补丁对系统稳定性至关重要，建议尽快 Code Review 并安排合并测试：

*   **[需关注] PR [#2692](https://github.com/nanocoai/nanoclaw/pull/2692)** - `fix(poll-loop)`: 解决 Claude API 5xx 错误重试与状态捕获问题。
*   **[需关注] PR [#2689](https://github.com/nanocoai/nanoclaw/pull/2689)** - `fix(signal)`: 解决 Signal DM 首条消息路由失败的问题。
*   **[需关注] PR [#2688](https://github.com/nanocoai/nanoclaw/pull/2688)** - `fix(whatsapp)`: 修复 WhatsApp LID 寻址导致的群组消息静默丢失问题。

---
*本期日报由 AI 智能体基于 GitHub 事件数据自动生成，祝您开发愉快！*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 2026-06-06 NullClaw 项目动态日报。

---

# NullClaw 项目动态日报 (2026-06-06)

## 1. 今日速览
在过去 24 小时内，NullClaw 项目整体处于**低频但聚焦**的运行状态。社区层面没有产生新的 Issue，也无新增 Bug 报告，表明项目当前版本的稳定性较好。开发重心主要集中在生态扩展上，今日新增了一个待审核的 Pull Request，旨在引入新的 AI 大模型网关提供商。综合来看，项目当前维护节奏平稳，功能迭代正向着兼容更多第三方 OpenAI 兼容节点迈进。

## 2. 版本发布
*过去 24 小时内，项目无新版本发布。*

## 3. 项目进展
*过去 24 小时内，项目无已合并或已关闭的 PR。*

当前项目处于新功能的蓄水阶段，有待合并的核心 PR 正在审核中（详见第 6 部分）。

## 4. 社区热点
*过去 24 小时内，无历史高活跃度 Issue 或 PR 更新。*

## 5. Bug 与稳定性
*过去 24 小时内，未报告任何新的 Bug、崩溃或回归问题。* 项目表现出良好的系统稳定性与基线健康度。

## 6. 功能请求与路线图信号
今日项目收到了一条重要的功能扩充 PR，反映了社区对“统一多模型网关”的强烈需求：

- **[OPEN] feat(providers): add Evolink as an OpenAI-compatible provider**
  - **链接**: [nullclaw/nullclaw PR #947](https://github.com/nullclaw/nullclaw/pull/947)
  - **作者**: EvoLinkAI
  - **分析**: 该 PR 提出将 [Evolink](https://evolink.ai) 作为一等公民提供商引入 NullClaw。Evolink 是一个多模型网关，通过 Bearer-token 鉴权，在单一的 OpenAI 兼容端点（`/v1/chat/completions`）后聚合了 GPT-5、Gemini、DeepSeek、Doubao（豆包）、MiniMax 等头部大模型。
  - **路线图信号**: 该 PR 释放出明显信号：NullClaw 正致力于扩大其 Provider 生态。将这类多模型网关纳入其中，不仅能大幅减少项目需要原生适配的单体模型数量，还能为用户提供更灵活的负载均衡和故障转移方案。此 PR 若被合并，将显著提升 NullClaw 在多模型编排场景下的竞争力。

## 7. 用户反馈摘要
*由于今日无新增或活跃的 Issues 及评论，本期暂无基于当日讨论的用户痛点提炼。* 
从 PR #947 的设计理念间接推测，当前用户在构建 AI 智能体时，可能面临着跨厂商（如 OpenAI、Google、字节跳动等）API 标准不一致的痛点，统一兼容 OpenAI 标准的网关服务是解决此类摩擦的重要趋势。

## 8. 待处理积压
- **待审核 PR**: [nullclaw/nullclaw PR #947](https://github.com/nullclaw/nullclaw/pull/947)
  - **状态**: OPEN (创建于 2026-06-05)
  - **建议**: 提醒项目维护者关注此 PR。由于该变更新增了第三方提供商依赖，建议在合并前重点审查其错误处理机制、网络重试逻辑以及鉴权安全性，确保其代码质量符合项目标准。

---
*数据来源: GitHub API | 分析师: AI 智能体与个人 AI 助手项目分析组*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-06-06)**

### 1. 今日速览
IronClaw 项目在过去24小时内保持了**极高的架构演进活跃度与社区开发热度**。项目目前正处于底层架构重构的关键阶段，核心团队正全力推进代号为 "Reborn" 的工作流边界重构，以支持未来的 OpenAI 兼容 API。同时，以 Slack、WeCom 和 Telegram 为主的多渠道路由与集成开发迎来了集中交付期。昨日共产生 11 条 Issue 更新（9 新开/活跃，2 关闭）以及高达 50 条 PR 更新（36 待合并，14 合并/关闭），代码吞吐量巨大，反映出项目核心能力的快速膨胀与成熟。

### 2. 版本发布
今日**无**新版本发布。
*注：虽然无正式版发布，但核心发布准备 PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) 正在推进中，预计下一个版本将包含 `ironclaw_common`, `ironclaw_skills` 的破坏性更新，以及主版本 `0.24.0 -> 0.29.1` 的大版本跳跃。*

### 3. 项目进展
今日有若干重要 PR 被合并/关闭，项目在安全加固、架构重塑和工具链重构方面取得了实质性进展：
*   **技能系统重构落地 ([#2904](https://github.com/nearai/ironclaw/pull/2904))**：合并了一项 XL 级别的重构，将原有的 11 个 WASM API-proxy 工具（涵盖 github, gmail, slack 等）替换为基于 SKILL.md 声明式的 HTTP 请求，极大提升了扩展的易用性。
*   **扩展贡献规范建立 ([#2550](https://github.com/nearai/ironclaw/pull/2550))**：成功合并了对 `CONTRIBUTING.md` 的更新，引入了标准化的“技能模板”及行为测试，降低了社区贡献技能的门槛。
*   **Web UI 会话逻辑修复**：关闭了 WeCom 群聊与私聊在 Web UI 中错误合并的 Issue ([#4194](https://github.com/nearai/ironclaw/issues/4194))，群组消息现已被正确隔离。
*   **未配对用户隐私策略确认**：关于群聊中未配对用户所有者可见性不清晰的问题 ([#4198](https://github.com/nearai/ironclaw/issues/4198)) 已关闭，表明当前的隐私屏蔽行为已得到确认。

### 4. 社区热点
今日的讨论和活跃贡献高度集中在**系统核心架构边界划分**与**渠道集成稳定性**上：
*   **ProductWorkflow 重构 ([#4488](https://github.com/nearai/ironclaw/issues/4488) & [#4483](https://github.com/nearai/ironclaw/issues/4483))**：由核心成员 `danielwpz` 发起，旨在将 `ProductWorkflow` 显式拆分为 submit/read/subscribe 三个边界门，这是为支持 OpenAI API 的前置条件。配套的 XL 级 PR ([#4506](https://github.com/nearai/ironclaw/pull/4506)) 已提交，标志着底层重构的全面铺开。
*   **WeCom 渠道深度验证**：贡献者 `sunglow666` 提交了详尽的 v0.29.0 Staging 验证报告 ([#4191](https://github.com/nearai/ironclaw/issues/4191))，揭示了几个关键的交互体验痛点，引发了针对群聊标题、审批回复等子问题的集中反馈。
*   **Reborn 模型网关错误映射缺陷 ([#4311](https://github.com/nearai/ironclaw/issues/4311))**：报告了预算治理错误被错误折叠为上下文溢出的严重逻辑问题，引起了关于错误恢复边界的讨论。

### 5. Bug 与稳定性
随着多渠道支持的深入，今日暴露了大量 UI 交互与状态路由层面的 Bug，按严重程度排列如下：
*   🔴 **高严重度 - 网关错误折叠**：Reborn 模型网关将非上下文的预算治理错误错误地映射为 `ContextOverflow` ([#4311](https://github.com/nearai/ironclaw/issues/4311))。*目前暂无对应 fix PR，需持续关注。*
*   🟠 **中严重度 - E2E 测试失败**：Nightly E2E 定时任务失败 ([#4108](https://github.com/nearai/ironclaw/issues/4108))，CI/CD 流水线稳定性亮起红灯。
*   🟠 **中严重度 - 群聊审批失效**：WeCom 群聊中，机器人请求工具审批时，用户回复 `y/yes` 无法被识别，导致无限循环请求 ([#4502](https://github.com/nearai/ironclaw/issues/4502))。
*   🟡 **低严重度 - 渠道 Onboarding 事件写入错位**：完成配对后的引导系统事件有时会写入旧的会话中，影响 Telegram 和 WeCom ([#4500](https://github.com/nearai/ironclaw/issues/4500))。
*   🟡 **低严重度 - 群聊标题不可区分**：WeCom 群聊在 Web UI 侧边栏的标题千篇一律，难以阅读 ([#4505](https://github.com/nearai/ironclaw/issues/4505))。

### 6. 功能请求与路线图信号
从近期的 PR 动向来看，以下战略级功能信号极其明显，极可能作为下一个主干版本的核心特性发布：
*   **完整的 Hook 扩展与安全审计体系**：`zmanian` 正在连续推进巨大的 Hooks 系统 PR 集群（[#3928](https://github.com/nearai/ironclaw/pull/3928), [#3931](https://github.com/nearai/ironclaw/pull/3931), [#3933](https://github.com/nearai/ironclaw/pull/3933) 等），包含了 LibSQL/Postgres 的持久化后端和第三方 Hook 激活功能。系统安全性显著升级，引入了深度安全审计机制 ([#3922](https://github.com/nearai/ironclaw/pull/3922))。
*   **Slack AI 原生流式响应**：Issue ([#4491](https://github.com/nearai/ironclaw/issues/4491)) 提出使用 Slack AI 流式传输替代当前 "Ironclaw is thinking..." 的妥协方案。
*   **IronHub 商店与安装流移植**：PR ([#4479](https://github.com/nearai/ironclaw/pull/4479)) 正在将 IronHub 的安装流程移植到 Reborn 架构，包含签名验证和哈希校验，预示着 IronClaw 即将拥有完善的技能/工具应用市场。

### 7. 用户反馈摘要
结合 Issues 列表，真实用户/测试者在多渠道集成场景下的痛点清晰可见：
*   **多端会话管理困惑**：用户在跨平台（Web UI 与 WeCom）使用时，对会话的合并与隔离逻辑非常敏感。前期群聊/私聊未分离饱受诟病，当前虽然分离，但群组缺乏标识符（如群名）导致多群切换体验极差。
*   **指令交互反馈延迟**：当前 Slack 中机器人思考时的提示信息被删除后缺乏流式反馈，用户无法感知长耗时任务的进度，期待更加实时的原生进度展示。

### 8. 待处理积压
*   **安全合规问题**：由核心成员提交的针对跨租户泄漏和重放攻击的安全修复 PR ([#3931](https://github.com/nearai/ironclaw/pull/3931)) 及其前置 PR 已开启数周，积压严重，建议维护团队优先进行 Code Review 并合并，避免成为发布阻塞。
*   **Nightly CI 故障**：Issue ([#4108](https://github.com/nearai/ironclaw/issues/4108)) 早在 5 月底创建，至今仍未修复。作为保障项目稳定性的护城河，夜间 E2E 持续失败应当引起关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-06)

## 1. 今日速览
LobsterAI 在过去 24 小时内展现了极高的开发活跃度与良好的项目健康度。项目于昨日（6月5日）成功交付了 `2026.6.5` 版本，并在短短一天内**合并或关闭了高达 13 个 Pull Requests**，同时处理了 3 个社区 Issue。更新重心主要集中在**提升用户体验（UX）、系统稳定性修复以及安全防护增强**。整体来看，核心维护团队（尤其是 @fisherdaddy）正在高频迭代，项目处于快速进化的成熟期。

---

## 2. 版本发布
### 🚀 [LobsterAI 2026.6.5](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.5)
- **更新亮点**：
  - **协作会话优化**：改进了频道会话的同步与清理机制 ([PR #2108](https://github.com/netease-youdao/LobsterAI/pull/2108))。
  - **快捷键大修**：全面重构了键盘快捷键系统，扩展了可用操作并显著提升了交互体验。
- **破坏性变更/迁移注意**：本次更新包含快捷键系统的重构，习惯旧版快捷键的用户可能需要重新适应。无其他破坏性 API 或数据结构变更。

---

## 3. 项目进展
今日项目取得了实质性进展，共关闭 13 个 PR，覆盖了发布封版、体验优化、安全修复等多个维度：

- **发版与整合**：[PR #2119](https://github.com/netease-youdao/LobsterAI/pull/2119) 成功合入 `2026.6.4` 的相关特性，为 `2026.6.5` 的发布奠定了基础。
- **多媒件与文件预览体验跃升**：[PR #2114](https://github.com/netease-youdao/LobsterAI/pull/2114) (by @liugang519) 大幅增强了 Artifacts 文件预览体验，修复了 Excel/PPT 缩放排版问题，并支持预览面板展开。
- **输入与交互体验打磨**：
  - 剪贴板复制与提交 UX 改进 ([PR #2118](https://github.com/netease-youdao/LobsterAI/pull/2118))。
  - 错误提示与空状态引导优化，解决免费额度耗尽时的系统提示 ([PR #2116](https://github.com/netease-youdao/LobsterAI/pull/2116))。
- **权限与安全底层加固**：
  - 修复了 macOS 语音输入的麦克风权限请求 ([PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113), by @btc69m979y-dotcom)。
  - 阻止渲染进程越权读写敏感 KV Store 数据，增加键名白名单 ([PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535), by @kayo5994)。
  - 避免代理日志明文打印凭证及完整响应体 ([PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534), by @kayo5994)。
- **模型配置保护**：[PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117) (by @liuzhq1986) 修复了模型迁移版本追踪问题，确保用户手动删除的默认模型在重启后不会被强行重置。

---

## 4. 社区热点
今日活跃的 3 个 Issue 虽然状态仍为 `[OPEN]`，但均被自动标记为 `[stale]`，反映出社区对**细节体验和边界场景**的高要求：
- **草稿丢失痛点**：[#1471 切换会话或导航视图时输入框草稿丢失](https://github.com/netease-youdao/LobsterAI/issues/1471)（作者 @MaoQianTu）。该 Issue 详细指出了 300ms 防抖（debounce）机制与组件卸载时的生命周期冲突，引发了 1 条评论讨论。这反映了高频使用的重度用户对数据防丢失机制的极度敏感。
- **静默覆盖问题**：[#1472 重新编辑历史消息覆盖输入框无确认提示](https://github.com/netease-youdao/LobsterAI/issues/1472)（作者 @MaoQianTu）。社区用户对“无确认提示直接覆盖未发送内容”的 UX 设计提出了质疑。
- **本地模型兼容性**：[#1487 调用 Python 脚本出现问题](https://github.com/netease-youdao/LobsterAI/issues/1487)（作者 @54huige）。用户在使用本地 30B 模型时遇到 Skills 兼容性问题，表明项目在长尾模型（非主流闭源模型）的兼容适配上仍有优化空间。

---

## 5. Bug 与稳定性
- **[中严重度] 已修复：配置迁移覆盖用户设置**：用户删除默认模型后重启会被重置的 Bug 已通过 [PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117) 修复，提升了配置持久化的稳定性。
- **[中严重度] 已修复：IM 回复组装错误**：IM 模块在组装回复时错误包含了非当前轮次的消息，该问题已通过 [PR #2115](https://github.com/netease-youdao/LobsterAI/pull/2115) 解决。
- **[低严重度] 待处理：防抖导致输入丢失**：[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 提出的防抖未持久化问题目前暂无对应的修复 PR，建议开发团队关注 `unmount` 阶段的同步刷入机制。

---

## 6. 功能请求与路线图信号
今日关闭的 PR 中透露了项目未来的演进方向和即将落地的功能：
- **商业化与付费转化落地**：[PR #2112](https://github.com/netease-youdao/LobsterAI/pull/2112) 引入了模型锁定时的登录/订阅引导提示。这表明 LobsterAI 正在完善其商业化变现的 UI/UX 路径。
- **本地统计分析**：[PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533) 增加了基于 SQLite 的本地使用统计面板（会话数、消息数等）。此类数据埋点不仅满足用户的掌控欲，也为后续产品方向提供数据支撑，极有可能在近期版本中默认开启。
- **UI 现代化改进**：[PR #1531](https://github.com/netease-youdao/LobsterAI/pull/1531) 采用紧凑的圆形选择器替代了臃肿的主题色卡片网格，说明团队正在进行 UI 的轻量化重构。

---

## 7. 用户反馈摘要
从社区 Issue 及反馈中，可以提炼出以下核心用户画像与真实诉求：
1. **数据安全感极度匮乏**：用户（特别是生产力场景用户）对“未发送内容丢失”容忍度极低（[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471), [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472)）。任何静默覆盖、因切页导致的内容消失都会严重破坏信任。
2. **开发者/极客群体的本地化部署诉求**：用户尝试接入本地 30B 模型运行 Python 脚本（[#1487](https://github.com/netease-youdao/LobsterAI/issues/1487)），说明 LobsterAI 在开发者群体中有较强吸引力，需保证 Tool calling / Skills 在本地模型上的容错率。
3. **对安全隐私的重视**：社区提交了多个安全相关的 PR（[PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534), [PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535)），反映出用户对企业级数据隔离和凭证保护的高度关注。

---

## 8. 待处理积压
- **长期未解决的 UX Issue**：[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 和 [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 自 4 月初提交后，虽然讨论热烈但一直处于 `[stale]` 状态，建议维护团队纳入近期的 UX 优化 Sprint 中。
- **本地模型兼容性排查**：[#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 需要进一步确认是本地模型推理能力限制导致，还是 LobsterAI 在解析特定工具调用时存在格式硬编码，建议提供更友好的错误回退提示。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 6 月 6 日 Moltis 项目动态日报：

# 📊 Moltis 开源项目日报 (2026-06-06)

## 1. 今日速览
过去 24 小时，Moltis 项目保持了**平稳且务实的开发活跃度**。项目今日共处理了 4 个 Issue 更新（3 新开/1 关闭）和 4 个 PR 更新（3 待合并/1 关闭），虽然没有推出新的软件版本，但在底层稳定性和容器化兼容性上取得了实质性进展。核心开发者 `penso` 集中发力，一次性提交了三个重要的修复 PR，显著提升了沙箱环境与模型选择的健壮性；同时，社区用户也针对 Web UI 的易用性和 Docker 部署细节提出了高质量的反馈。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日项目虽未合并代码进入主分支，但关闭了一个关键的 Telegram 集成问题，并有多个核心修复 PR 进入待合并状态，整体代码质量与向后兼容性正在提升：
*   **Telegram 流式输出逻辑重构完成**：PR [#1099](https://github.com/moltis-org/moltis/pull/1099) (已关闭) 成功修复了 Issue #1097。该改动将 Telegram 渠道的流式输出视为临时进度更新，在流结束后删除中间消息并独立发送最终回复，彻底切断了中间输出污染最终回复的隐患。
*   **沙箱与容器化兼容性大幅增强**：开发者 `penso` 提交了两个重要 PR。
    *   PR [#1105](https://github.com/moltis-org/moltis/pull/1105)：修复了 Docker 沙箱文件系统工具的回退机制，当网关无法访问宿主机挂载路径时，能优雅地回退到容器内拷贝，并增加了回归测试。
    *   PR [#1106](https://github.com/moltis-org/moltis/pull/1106)：引入了对 Podman 沙箱逃生机制（escape hatches）的支持，改善了无根 Podman 的故障诊断，并与 systemd 达成了更好的兼容。
*   **模型提供商选择优化**：PR [#1104](https://github.com/moltis-org/moltis/pull/1104) 修复了偏好模型对话框的交互逻辑，支持替换甚至清空之前的偏好设置，并补充了后端和 Playwright 自动化测试。

## 4. 社区热点
今日社区的注意力主要集中在 **多平台 Web UI 体验** 和 **容器化部署** 上。开发者 `IlyaBizyaev` 在一天内连续提交了三个高质量反馈，精准指出了当前版本的 UI 盲点：
*   **[Bug] Docker 安装未纳入更新横幅逻辑**：[Issue #1109](https://github.com/moltis-org/moltis/issues/1109) 指出当前系统内的更新提示未能区分 Docker 安装模式，可能导致 Docker 用户产生误解。
*   **[Bug] Web UI 会话列表时间显示缺陷**：[Issue #1108](https://github.com/moltis-org/moltis/issues/1108) 报告了跨天会话只显示“时间”而不显示“日期”的问题，直接影响用户对历史会话的回溯效率。

## 5. Bug 与稳定性
今日共暴露 3 个 Bug，均无严重的安全漏洞或崩溃，但影响了特定场景的可用性，其中部分已产生修复方案：
1.  **🟡 中度 | Docker 沙箱文件系统访问失败**：在特定网关环境下访问宿主机路径失败。**状态：已有 Fix PR** → [PR #1105](https://github.com/moltis-org/moltis/pull/1105)
2.  **🟢 轻微 | Telegram 流式输出与最终回复混杂**：此 Bug 导致流式输出的中间过程文本留在最终回复中。**状态：已通过代码重构修复** → [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) (已关闭) / [PR #1099](https://github.com/moltis-org/moltis/pull/1099) (已关闭)
3.  **🟢 轻微 | UI 交互逻辑缺陷**：会话列表日期缺失 ([#1108](https://github.com/moltis-org/moltis/issues/1108)) 及更新横幅对 Docker 环境的误判 ([#1109](https://github.com/moltis-org/moltis/issues/1109))。**状态：待认领/修复中**

## 6. 功能请求与路线图信号
今日有一个明确的 UI 增强 Feature Request，透露出移动端用户的强诉求：
*   **移动端 Web UI 多行文本输入支持**：在 [Issue #1107](https://github.com/moltis-org/moltis/issues/1107) 中，用户请求在移动 Web 界面支持多行文本输入。
    *   **路线图研判**：随着 Moltis 作为个人 AI 助手的日常化使用，移动端 WebUI 的体验变得至关重要。结合当前提交的 PR（如多模型选择重构 #1104），预计项目的下一个迭代周期将重点关注**前端交互体验（尤其是移动端适配）的打磨**。

## 7. 用户反馈摘要
从今日的 Issue 标题与描述中，可以提炼出以下真实的用户画像与痛点：
*   **自托管与容器化部署是核心受众群**：多位用户（`IlyaBizyaev`, `penso`）在使用 Docker/Podman 部署。用户期望系统能“原生感知”自己所处的运行环境（如更新提示的智能化），并对容器环境下的文件挂载、权限控制有极高的稳定性要求。
*   **即时通讯集成（如 Telegram）的严肃使用**：用户 `s-salamatov` 对 Telegram Bot 流式输出的细节反馈表明，用户正在将 Telegram 作为严肃的生产力入口，对消息的干净程度（区分中间态和最终态）要求极高。

## 8. 待处理积压
目前项目状态较为健康，短期内的 Issue 均得到了响应。但为了保持项目的良好势头，提醒维护者关注以下动态：
*   **待 Review 的 PR 积压**：开发者 `penso` 今日集中提交的 3 个 PR（[#1104](https://github.com/moltis-org/moltis/pull/1104), [#1105](https://github.com/moltis-org/moltis/pull/1105), [#1106](https://github.com/moltis-org/moltis/pull/1106)）目前均处于 Open 状态，建议维护者尽快安排 Code Review，这批 PR 对提升后端和容器稳定性具有较高价值。
*   **新开 Issue 的跟进**：`IlyaBizyaev` 提出的三个 Issue（[#1107](https://github.com/moltis-org/moltis/issues/1107), [#1108](https://github.com/moltis-org/moltis/issues/1108), [#1109](https://github.com/moltis-org/moltis/issues/1109)）目前尚无官方评论，建议团队进行初步的 triage（分流）并打上相应的标签。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026-06-06

## 1. 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目保持了高度活跃的开发与社区讨论状态。今日共有 30 个 Issues 发生状态更新（18 个新开/活跃，12 个关闭），以及 26 个 PR 更新（10 个待合并，16 个合并/关闭）。项目核心精力集中在修复近期引入的 Yuanbao 频道连通性问题、完善 UI/UX 体验（如 LaTeX 渲染、会话列表优化）以及强化系统底层安全性（如文件访问路径限制）。整体来看，项目处于高频迭代期，社区反馈热烈，维护者响应迅速，多位首次贡献者参与其中，生态健康度良好。

## 2. 版本发布
**无新版本发布**。截至目前，项目最新版本仍为 v1.1.10，官方未发布新的 Release。大量针对 v1.1.10 的热修复 PR 正在集结，预计下一版本将集中解决频道稳定性和 UI 呈现问题。

---

## 3. 项目进展
今日有 16 个 PR 被合并或关闭，推动了多个关键模块的进展。重点合并的 PR 包括：

- **LaTeX 公式渲染支持**：PR [#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) 成功合并，通过引入 KaTeX 依赖修复了数学公式无法正常显示的问题。
- **浏览器控制增强**：PR [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) 合并，为 `browser_control` 增加了基于坐标的鼠标点击支持，提升了 RPA 场景下的精确度。
- **跨浏览器切换与崩溃修复**：PR [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) 合并，通过隔离浏览器配置文件和增加 CDP 超时参数，修复了 `browser_use` 启动失败和闪退问题。
- **状态存储健壮性提升**：PR [#1240](https://github.com/agentscope-ai/QwenPaw/pull/1240) 合并，将脆弱的 JSON 文件状态存储替换为更健壮的 SQLite 后端，防止因文件损坏导致的解析崩溃。
- **MCP 客户端自恢复机制**：PR [#1347](https://github.com/agentscope-ai/QwenPaw/pull/1347) 合并，修复了 MCP 服务崩溃后客户端无法自动重连的问题。
- **沙箱执行插件**：PR [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) 合并，新增 OpenSandbox 插件，允许 Agent 在安全沙箱内执行 Shell 命令。

---

## 4. 社区热点
今日社区讨论焦点主要集中在多渠道接入稳定性和 UI 交互效率上：

1. **Yuanbao 频道接入引发集中反馈**：由于底层 Protobuf 兼容性和字段缺失，导致一系列连锁反应。
   - 缺失 proto 文件：[#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976)
   - Protobuf API 不兼容：[#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977)
   - 连接追踪缺失 connectId：[#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978)
   - 流式响应丢失：[#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979)
   *分析：大量开发者正尝试将 QwenPaw 接入私域通讯工具，新渠道的兼容性是目前最高优的痛点。*
2. **执行死循环与内存泄漏**：Issue [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) 与 [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) 引发热议（各收获 4 条评论）。用户反馈 Agent 执行陷入死循环，以及在 Ubuntu 环境下 Fork 子进程时出现虚拟内存泄漏导致 OOM。
3. **会话管理与 UI 体验**：Issue [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) 提出当前会话管理繁琐，每次切换需点击两次，呼吁增加专属会话栏。

---

## 5. Bug 与稳定性
今日报告的 Bug 多数与系统边界条件和外部依赖有关，按严重程度排列：

- **[P0 - 核心功能阻塞] Yuanbao 频道完全无法通信**：包含 Proto 文件缺失、流式数据静默丢弃等严重问题。目前**已有对应 fix PR** 提交待合并（[#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983), [#4982](https://github.com/agentscope-ai/QwenPaw/pull/4982)）。
- **[P0 - 稳定性] 子进程 OOM 与死循环**：[#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) 报告的 Linux 内存泄漏，以及 [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) 的死循环问题，会导致 Agent 彻底卡死。**暂未发现根本性 Fix PR**。
- **[P1 - 体验受损] 本地配置损坏导致全局崩溃**：[#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) 指出若 `loop_config.json` 损坏，整个会话将抛出 `JSONDecodeError` 无法继续。**部分修复已合并**（详见 PR [#1240](https://github.com/agentscope-ai/QwenPaw/pull/1240) 的 SQLite 替代方案）。
- **[P2 - 兼容性] 桌面版局域网暴露失败**：[#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) 反映即使配置白名单，Windows 桌面版仍无法在局域网内被手机访问。

---

## 6. 功能请求与路线图信号
从近期的 Feature Request 和已提交的 PR 来看，项目正朝着“更精细的控制”与“更安全的执行”方向演进：

1. **强制中断 Agent 执行机制**：用户在 [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) 强烈要求支持在 Agent 执行工具调用时发送新消息以中断当前操作。这是提升用户掌控感的核心诉求，目前处于讨论阶段。
2. **Cron 定时任务执行原生脚本**：[#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) 请求 Cron 任务支持绕过 LLM 直接执行 Shell/脚本。这标志着用户希望将 QwenPaw 作为完整的自动化 RPA 节点。
3. **模型 Failover 自动容灾**：[#4181](https://github.com/agentscope-ai/QwenPaw/issues/4181) 建议在 API 报错时自动测速并切换备用模型，多日讨论后仍保持活跃，属于高价值架构优化。
4. **Console 体验自定义**：PR [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) 正在实现会话列表列顺序的自定义功能，直接响应了 Issue [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) 的诉求。

---

## 7. 用户反馈摘要
透过今日的 Issue 描述与开发者互动，提炼出以下真实用户画像与痛点：

- **痛点：记忆系统“只加不减”**：高级用户 feng183043996 提出极具深度的反馈（[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)），指出当前 Agent 的记忆库“只记录不学习”，缺乏提炼和过期清理机制，导致 Agent 重复犯同样的错误。
- **痛点：桌面客户端打包与环境割裂**：多位用户（如 #4754, #4832）对 Windows 打包方案（Tauri vs 非 Tauri）的区别感到困惑，同时对执行命令时弹出的黑框窗口感到困扰。
- **使用场景：作为局域网中心节点**：用户尝试在局域网内通过手机访问 PC 端的 CoPaw 控制台（[#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960)），表明项目正被用作家庭/小型工作室的 AI 中枢。

---

## 8. 待处理积压
以下重要模块的 Issue / PR 长期处于 Open 状态，建议维护团队重点关注：

1. **核心架构：插件加载解耦**：PR [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) 试图修复冻结环境下的插件加载超时和控制台窗口闪现问题。该 PR 自 6 月 2 日开启至今未合并，可能阻塞了部分桌面版用户的体验。
2. **核心架构：文件覆写安全守卫**：首次贡献者提交的 PR [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) 旨在防止 Agent 恶意/误覆盖系统文件，自 5 月初开启，已停滞超 1 个月，建议评估后推进合入。
3. **系统机制：会话级别的自动记忆**：Issue [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) 提出的“Pre-hook Memory Archiving”机制非常契合 Agent 长期运行的需求，目前缺乏官方明确的设计回应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-06)

## 1. 今日速览
ZeroClaw 今日维持了高度活跃的开发与社区讨论势头，过去 24 小时内共有 50 个 Issue 和 50 个 PR 发生状态更新。项目当前的重心明显向**安全性重构、运行时隔离**以及**多渠道网关集成**倾斜。整体来看，虽然今日无新版本发布，但有 21 个 PR 被合并或关闭，显示核心代码库正在为下一个主要里程碑（如 v0.9.0）进行密集的代码清理与功能打磨。待合并 PR（29 个）蓄水池充足，项目健康度良好，推进稳健。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭（其中部分为旧 PR 清理），重点项目推进如下：

*   **硬件与边缘计算拓展**：`esp32_sim` 模拟器及 Web 前端示例 ([PR #7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048)) 取得进展，提取自先前的黑客松提交，为物联网和本地部署打下基础。
*   **架构与安全性落地**：修复了关键的安全与运行时 Bug，包括防止交互式子进程（如 `git` 凭证提示）劫持终端 ([PR #7120](https://github.com/zeroclaw-labs/zeroclaw/pull/7120))，以及修复 cron 工具无法支持相对时间调度的问题 ([PR #7188](https://github.com/zeroclaw-labs/zeroclaw/pull/7188))。
*   **工具与插件生态演进**：引入 Shazam 音乐识别 WASM 插件作为沙盒化试点 ([PR #7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277))，以替代之前直接内置的 Tool 提案。同时清理了闭源的 Eight Sleep 硬件控制 PR ([PR #6471](https://github.com/zeroclaw-labs/zeroclaw/pull/6471))。
*   **配置与多渠道通信**：Twitch IRC 聊天频道适配 ([PR #7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275))、9大渠道的回复限速机制 ([PR #6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389)) 以及 MCP 服务器配置的字段级编辑支持 ([PR #7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)) 均已提交待合并。

## 4. 社区热点
今日社区讨论最为激烈的议题集中在**安全执行边界**与**多渠道路由标准**：

*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (9 评论)**：关于工作流泳道和看板自动化的治理 RFC。反映出社区对大型开源项目维护效率和贡献者路由的关注。
*   **[Issue #6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) (7 评论)**：由从 Letta 迁移的用户发起，强烈要求提供**统一的输出路由模型**，让智能体能根据用户偏好控制信息“如何”及“在哪”发送，暴露出当前跨渠道（如 Telegram/邮件）持久化记忆与调度的痛点。
*   **[Issue #5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) (6 评论)**：要求为 Ollama Cloud、智谱 AI 等四家提供商增加**原生 OAuth 登录支持**，减少对静态 API Key 的依赖。
*   **[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (4 评论)**与 **[Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (4 评论)**：社区与核心贡献者正在激烈讨论引入类似 Claude Code 的高危 Shell 命令分级执行策略，以及将安全执行层抽象为可插拔架构。这标志着 ZeroClaw 安全模型正在发生根本性升级。

## 5. Bug 与稳定性
今日报告了数个影响工作流的关键 Bug，部分已提供修复方案：

*   **S2 级别 - 凭证降级逻辑缺陷**：渠道编排器错误地回退到“默认模型提供商”凭据 ([Issue #7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059))。目前已提交修复 PR 并正在推进。
*   **S2 级别 - 交互式进程死锁**：终端部署时，调用 `git` 等需要交互凭据的子进程会导致 TUI 被挂起。已通过 [PR #7120](https://github.com/zeroclaw-labs/zeroclaw/pull/7120) 修复。
*   **S1 级别 - 引导流程 (Onboarding) 错误**：选择 OpenAI Codex 订阅时，系统错误地提示输入 OpenAI API 密钥 ([Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)，已关闭/修复)。
*   **内存检索失效**：Markdown 记忆模块无法正确识别带有 `since`/`until` 的时间窗口过滤 ([PR #7192](https://github.com/zeroclaw-labs/zeroclaw/pull/7192)，已提交修复)。

## 6. 功能请求与路线图信号
从当前的活跃 RFC 和 PR 走势来看，以下功能极有可能被纳入即将到来的版本（预估 v0.9.0）：

1.  **核心安全与鉴权架构升级**：可插拔安全提供程序接口 ([Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142))、RPC/WSS 传输的 OIDC 认证支持 ([Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))。
2.  **多智能体互操作性**：支持通过 `.well-known/agent-card.json` 进行多智能体发现与组网 ([Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218))。
3.  **运行时资源限制**：限制 Shell/Skill 子进程的内存消耗，防止 OOM ([Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916))。
4.  **核心轻量化**：剥离内置工具，转而通过外部 WASM 插件或 MCP 技能提供集成 ([Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165))。
5.  **UI/UX 改进**：ZeroCode TUI 主题色彩降级兼容老式终端 ([PR #7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249))，以及按模型精细配置上下文窗口大小 ([Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100))。

## 7. 用户反馈摘要
*   **新用户上手摩擦**：有多位用户反馈 config 验证不够严谨，导致运行时才暴露提供商配置不兼容的问题 ([Issue #6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416))。1Password 集成支持在之前的回滚中丢失引起了不便 ([PR #7085](https://github.com/zeroclaw-labs/zeroclaw/pull/7085))。
*   **重度依赖终端与本地模型**：用户强烈呼吁在 ZeroCode TUI 中支持类似 Claude Code 的 Agent REPL 模式 ([Issue #5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882))，并要求利用 LSP 减少本地模型生成代码时的幻觉 ([Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907))。
*   **对 Windows 生态的诉求**：社区对 Windows 环境下的兼容性关注显著，包括要求重新评估 PowerShell 与 cmd.exe 作为宿主底层的优劣 ([Issue #7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089))。
*   **多平台工作流切换**：用户期待跨平台无缝协同，如打通 XCode 的 MCP 接口 ([Issue #6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065))。

## 8. 待处理积压
以下高影响力 Issue 处于 Blocked 或 Needs-maintainer-review 状态，存在一定积压，需核心团队优先关注排期：

*   **工具执行权限缺乏运行时拦截**：`allowed_tools` 字段未在所有代码路径生效，存在安全隐患 ([Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914))。
*   **Composio 工具调度缺乏精细控制**：无法针对 Agent 限制特定作用域的操作（如只读不发送）([Issue #6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917))。
*   **离线气隙执行模式**：通过 Unix Socket 伴随守护进程实现完全隔离执行的 RFC 仍待推进 ([Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))。
*   **历史代码合并灾难的遗留清理**：追踪并恢复因大批量回滚丢失的 153 个提交，当前仍处于 In-progress ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074))。
*   **无用的 Git 分支清理**：主仓库积累了超过 200 个已合并的无用分支，亟待维护者集中清理以降低仓库噪音 ([Issue #6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715))。

</details>