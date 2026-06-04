# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-04 22:27 UTC

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

# OpenClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
OpenClaw 项目在过去24小时内继续保持**极高的活跃度与健康度**。今日共处理了 500 条 Issues（其中 159 条被关闭，解决率达 31.8%）和 500 条 PRs（其中 108 条被合并/关闭），展现出强大的社区贡献能力和维护者吞吐量。项目刚刚发布了 `v2026.6.2-beta.1` 版本，底层正在推进从文件存储到 SQLite 的大规模架构重构。整体来看，核心架构正在向更安全、更健壮的 AI 智能体运行时演进，但多渠道（尤其是 Telegram/Discord/Slack）的消息投递稳定性和最新模型（GPT-5.x）的适配仍是当前面临的挑战。

## 2. 版本发布
**New Release: `v2026.6.2-beta.1`** ([Release Link](https://github.com/openclaw/openclaw/releases))
- **核心更新**：引入了全新的 **Operator Install Policy**，取代了旧版存在危险的代码扫描器路径。这一变更极大改善了插件和技能的安装体验，为 CLI、Doctor 诊断工具、ClawHub 以及故障排查等场景提供了更清晰、更安全的安装策略（涵盖包、存档、源码、上传和市场的安装）。
- **破坏性变更/迁移注意**：感谢贡献者 @joshavant。如果您有自定义的插件安装流水线或重度依赖旧版 `dangerous-code scanner`，请在升级到此 Beta 版本时注意调整相关配置。

## 3. 项目进展
今日合并及关闭了 108 个 PRs，清理了大量技术债务并引入了关键架构优化：
- **底层架构重构（SQLite 迁移）**：维护者 @jalehman 提交了多个关于 Session 和 Transcript 运行时迁移的 PR（如 [PR #90463](https://github.com/openclaw/openclaw/pull/90463) 路由 session accessor seam，[PR #89178](https://github.com/openclaw/openclaw/pull/89178) 建立 SQLite 会话存储基础）。这表明项目正在按部就班地通过“抽象分支”模式，将核心状态存储从笨重的 JSONL 文件平滑过渡到 SQLite。
- **性能优化**：[PR #80013](https://github.com/openclaw/openclaw/pull/80013) 解决了包含数千个会话文件（108MB 缓存）时的 CPU 燃烧问题，通过节流全缓存重写大幅降低了系统开销。
- **安全与治理**：[PR #89107](https://github.com/openclaw/openclaw/pull/89107) 引入了原生 OS 密钥链 SecretRef 解析器，增强了密钥安全性。
- **安全边界增强**：[PR #81864](https://github.com/openclaw/openclaw/pull/81864) 重写了插件批准机制，将原本类似调试输出的文本转化为人类可读的明文批准交互。

## 4. 社区热点
今日讨论最热烈的问题集中在**多渠道连接稳定性**及**最新模型支持**上：
1. **Slack 连接静默丢失**：[Issue #72808](https://github.com/openclaw/openclaw/issues/72808) (20条评论，👍3)。用户抱怨在演示时 Slack Bot 突然无响应，且未抛出任何错误。这暴露出 OpenClaw 在长连接维持上的监控盲区。
2. **SQLite 迁移架构讨论**：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (17条评论)。维护者与社区就如何通过抽象接缝安全地将底层存储切换至 SQLite 进行了深入探讨，规避高风险的大规模重写。
3. **OpenAI GPT-5.4/5.5 适配失败**：[Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (11条评论，👍3)。用户升级到 `2026.6.1` 后，由于 `invalid_provider_content_type` 导致 GPT-5.x 模型调用全线失败，这是阻碍用户跟进最新模型的严重阻塞问题。
4. **Mattermost 回归**：[Issue #68113](https://github.com/openclaw/openclaw/issues/68113) (11条评论，👍3)。升级后 Mattermost 的 Slash commands 全面返回 503。

## 5. Bug 与稳定性
今日报告了多个高严重程度的 Bug，部分已确认有对应的修复 PR：

**🔴 P1 / 高危阻塞问题**
- **OpenAI 传输层故障**：[Issue #90083](https://github.com/openclaw/openclaw/issues/90083) - GPT-5.4/5.5 调用报连接错误。*(暂无明确 Fix PR)*
- **Mattermost 初始化 503**：[Issue #68113](https://github.com/openclaw/openclaw/issues/68113) - Slash 命令无法初始化。*(已标记 clawsweeper:fix-shape-clear)*
- **上下文重复硬重置**：[Issue #63216](https://github.com/openclaw/openclaw/issues/63216) - 特定群组会话中 Token 机制失效，引发不断重置。*(暂无 Fix PR)*
- **消息静默丢失风险**：[Issue #89039](https://github.com/openclaw/openclaw/pull/89039) (PR) - 修复了网络重试期间导致消息丢失的 `EmbeddedAttemptSessionTakeoverError`，已被标记为待合并。

**🟠 P2 / 稳定性与性能问题**
- **飞书消息投递崩溃**：[Issue #88234](https://github.com/openclaw/openclaw/issues/88234) - 发送飞书私信时触发 TypeError 导致投递失败（已关闭，推测已修复）。
- **Node.js 24+ 兼容性崩溃**：[Issue #84820](https://github.com/openclaw/openclaw/issues/84820) - 高负载下未关闭的文件句柄导致网关在 Node 24 上直接发生致命崩溃（已关闭）。
- **Active-memory 级联污染**：[Issue #90082](https://github.com/openclaw/openclaw/issues/90082) - 熔断器触发后向主会话注入了污染性提示文本，导致模型表现异常。

## 6. 功能请求与路线图信号
从近期的 Issue 和 PR 走势中，可以清晰地看出项目近期的路线图方向：
1. **敏感数据脱敏 (防泄漏)**：[Issue #64046](https://github.com/openclaw/openclaw/issues/64046) (8条评论)。中国开发者社区强烈要求对 `openclaw.json` 以及网关日志中的 API Key/Token 进行脱敏或加密存储。这与今日的 [PR #90469](https://github.com/openclaw/openclaw/pull/90469)（引入 AIBOM + DLP 审计扩展）不谋而合，**极大概率在后续版本中原生支持**。
2. **AI 治理与审计引入**：[PR #90469](https://github.com/openclaw/openclaw/pull/90469) 提议引入用于个人/单节点运营商的 DLP（数据防泄漏）、成本账本和 AIBOM（AI 材料清单），这表明 OpenClaw 正在尝试满足企业级合规需求。
3. **Claude 原生桥接支持**：[PR #86655](https://github.com/openclaw/openclaw/pull/86655) 致力于构建 `claude-bridge` 扩展，改变目前 Anthropic 模型只能回退到通用客户端的现状，为后续支持 Claude 的 Extended Thinking 等高级特性打下基础。

## 7. 用户反馈摘要
从社区反馈来看，真实用户的痛点和评价如下：
- **痛点 1：升级带来的回归令人措手不及**。多个 Issue（如 #68113, #77642）反映出用户在进行小版本升级（如 5.x 到 5.3）后，出现了工具掉线、消息重复等严重问题。
- **痛点 2：多端消息流状态管理复杂**。Telegram、Discord 等渠道的消息投递经常因“心跳”占用线程而阻断正常回复（如 [Issue #64810](https://github.com/openclaw/openclaw/issues/64810)），用户对后台复杂逻辑导致前台无响应感到困惑。
- **正面反馈**：社区对引入 SQLite 替换 JSONL 的重构反响积极（[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)），认为这能有效解决会话上下文膨胀和内存泄漏问题；另外，Operator Install Policy 的推出也被认为极大降低了部署门槛。

## 8. 待处理积压
以下重要 Issues 或 PRs 长期未得到最终解决，处于排队或等待 Maintainer Review 的状态，需核心团队关注：
1. **[Issue #65161](https://github.com/openclaw/openclaw/issues/65161) [P1]**：孤立模式下的心跳节律停滞和状态错误，长达近两个月未产出修复 PR。
2. **[PR #73260](https://github.com/openclaw/openclaw/pull/73260) [P2, Size: XL]**：关于 `models.json` 漂移检测和内容哈希的性能优化大 PR，已开启一个多月，仍处于 `📣 needs proof` 状态。
3. **[Issue #67419](https://github.com/openclaw/openclaw/issues/67419) [P2]**：Session Context Bloat 问题，引导文件每次回复都重新注入，浪费 20-30% 的 Token，这对重度用户是极大的成本负担，目前仍等待产品决策。
4. **[Issue #69066](https://github.com/openclaw/openclaw/issues/69066) [RFC]**：关于将内部服务标识与用户认证分离的安全架构重构 RFC，自 4 月中旬提出以来尚无定论。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 6 月 5 日各大开源项目的社区动态，为您呈现横向对比与深度分析报告：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话客户端”向“全渠道、多模态、企业级自动化执行枢纽”跨越的关键重构期**。底层架构上，系统正抛弃早期笨重的文件存储和脆弱的内存管理，全面向 SQLite 等轻量级数据库和强类型 Rust/Go 架构演进。在能力边界上，智能体正突破纯文本限制，向 Shadow DOM 网页操控、桌面级 Computer-use 和本地隐私语音交互延伸。安全与合规不再是可选项，细粒度的权限审批、DLP 审计和多租户安全隔离已成为下一代项目的核心标配。

### 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 活跃度与健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 处理 500 (关闭 159) | 处理 500 (合并 108) | `v2026.6.2-beta.1` | **极高 (核心参照)**：吞吐量巨大，架构重构稳步推进，社区体量处于绝对领先地位。 |
| **NanoBot** | 处理及关闭 5 | 处理 77 (合并 61) | 无 | **高/健康**：极高的代码审查与合并效率，底层沙箱与协议健壮性加固成果显著。 |
| **Hermes Agent**| 活跃 46 (关闭 4) | 活跃 46 (合并 4) | 无 | **中高/酝酿期**：输入多但合并少，处于新版本发布前的密集排雷与社区高频反馈期。 |
| **PicoClaw** | 处理 5 | 处理 19 (合并 10) | 无 | **中/修复期**：集中修复前序版本引发的回归问题，维护者响应极其迅速。 |
| **IronClaw** | 处理 45 (关闭 15) | 处理 50 (合并 18) | 无 | **高/重构期**：底层 "Reborn" 架构重构进入深水区，高频合并大型 PR。 |
| **LobsterAI** | 持续活跃 | 关闭 17 | 无 (回溯合入) | **高/打磨期**：核心架构重构与除虫并重，社区贡献功能被批量合入。 |
| **Moltis** | 新增高质量需求 | 5 个重量级活跃 | 无 | **中高/扩张期**：Web 自动化底层能力取得突破，生态横向扩展迅速。 |
| **CoPaw** | 处理 24 (关闭 13) | 处理 25 (合并 15) | `v1.1.11-beta.1` | **极高/快跑期**：需求吞吐量极大，桌面端与多端渠道接入进展飞速。 |
| **ZeptoClaw** | 0 动态 | 16 个 Bot 依赖 PR | 无 | **极低/静默维护**：当前无业务逻辑迭代，完全处于基建依赖更新的静默期。 |
| **ZeroClaw** | 活跃 29 (关闭 5) | 活跃 30 (合并 20) | 无 (筹备 0.8.0) | **极高/冲刺期**：合并率极高，正密集排雷准备迎接新的稳定版。 |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系（事实标准）**，OpenClaw 展现出了与同类项目截然不同的成熟度与体量优势：
* **架构前瞻性与体量优势**：相比 ZeroClaw 等仍在处理基础的 TUI 假死、Windows 引号解析问题，OpenClaw 已经进入了解决数千会话引发的 CPU 缓存燃烧、Active-memory 级联污染等深水区性能瓶颈的阶段。其从 JSONL 到 SQLite 的平滑过渡架构（抽象分支模式）为整个生态提供了重构范本。
* **企业级治理的先驱**：相较于其他项目仅在探讨基础权限控制，OpenClaw 已率先引入了 AIBOM（AI 材料清单）、DLP（数据防泄漏）审计、原生 OS 密钥链解析和 Operator Install Policy，确立了其在企业级安全合规领域的护城河。
* **痛点即壁垒**：其当前面临的 GPT-5.x 适配失败、Slack 长连接静默丢失等复杂 Bug，恰恰证明了其在大规模、高并发生产环境中的不可替代性。

### 4. 共同关注的技术方向
通过对多项目数据的交叉比对，以下技术诉求呈现爆发式涌现：
* **多渠道 IM 连接稳定性与原生体验 (涉及 OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw)**：业界亟需解决 WhatsApp/Slack/Telegram 等长连接的静默断开、认证状态丢失问题。同时，将 IM 原生能力（如飞书 CardKit、Signal 群组输入指示器、Slack 输入状态）深度集成，取代生硬的纯文本回显成为普遍诉求。
* **最新前沿模型的流式适配 (涉及 OpenClaw, PicoClaw, ZeroClaw)**：GPT-5.x、Claude 4.6 等模型在 Tool Call 的流式传输及参数规范上的微小变动，引发了生态级的“地震”。解析层（Parser）亟待增强针对新一代模型 `invalid_provider_content_type` 和 `null` 参数的容错机制。
* **本地化、低成本语音 STT 方案 (涉及 NanoClaw, Moltis)**：社区对集成 `whisper.cpp`、FunASR 等无 API 依赖、保护隐私的极速本地 STT 引擎热情高涨，意图实现全链路的离线多模态交互。
* **细粒度的执行安全与沙箱 (涉及 OpenClaw, IronClaw, Moltis, CoPaw)**：针对高危 Shell 命令的 `allow/ask/deny` 策略、容器级沙箱隔离以及系统级的 Token 鉴权架构成为下一代 Agent 规避安全风险的必需品。

### 5. 差异化定位分析
* **OpenClaw / CoPaw**：定位为**全端/企业级 AI 中枢**。不仅支持复杂的底层插件市场，且高度重视 Web UI 交互与跨端状态同步，目标直指企业级多租户部署与多渠道客服/自动化场景。
* **NanoBot / IronClaw**：定位为**高可控的自主智能体运行时**。侧重于 Agent 运行生命周期管理、子代理协同及底层 Rust 架构的性能压榨，更吸引注重系统稳定性和扩展性的硬核开发者。
* **Moltis / ZeroClaw**：定位为**全能型自动化操作员**。在 Computer-use（桌面接管）、浏览器 Web 自动化（精准穿透 Shadow DOM 等复杂组件）方向发力，试图重塑 RPA（机器人流程自动化）生态。
* **Hermes Agent / PicoClaw / NanoClaw**：定位为**轻量级/开发者友好的个人助理基座**。聚焦于解决安装易用性、基础桌面端 GUI 体验和单节点个人 AI 应用的快速落地。

### 6. 社区热度与成熟度
* **快速迭代与扩张期 (CoPaw, Moltis, NanoBot)**：功能合并率极高，新功能（如新通讯渠道接入、沙箱支持）层出不穷。社区对新生功能的反馈踊跃，但也暴露出由于快速迭代导致的 Token 水位管理失控、前端状态竞态等中等优先级的 Bug。
* **架构重构与质量巩固期 (OpenClaw, IronClaw, LobsterAI, ZeroClaw)**：目前正处于代码库的“换挡期”。大量 PR 致力于清理历史技术债务（如迁移存储方案、拆分 Crate、解决 PID/死锁问题）。这一层的社区讨论极其硬核，往往围绕 RFC 和架构规范展开。
* **休眠或停滞期 (ZeptoClaw, TinyClaw, NullClaw)**：社区活跃度极低，处于依赖自动更新的维护状态，缺乏业务逻辑演进。

### 7. 值得关注的趋势信号
1. **“上下文工程” 正在取代单纯的“提示词工程”**：从多个项目的动态可以看出，长对话导致的内存泄漏、压缩算法导致最新指令错位注入污染成了最高频的严重 Bug。**未来 Agent 框架的核心竞争力在于精细化的上下文水位线管理与 Token 归因计费体系**。
2. **多智能体互联互通协议 (A2A) 提上日程**：ZeroClaw 等项目社区对 Agent-to-Agent HTTP 协议的呼声极高。未来的个人助手不再是信息孤岛，而是能够与其他专业 Agent (如数据分析、代码生成 Agent) 动态发现并协同的网状网络。
3. **Web UI 融合 CLI 成为主流交互标准**：纯 CLI 时代正在终结，将 CLI 的底层能力与 WebUI/Desktop 的可视化能力融合（如共享状态、统一前端架构）是当前各项目竞相研发的重点。
4. **升级体验的脆弱性正在透支社区信任**：多个项目遭到用户抱怨——小版本升级常引发工具掉线、历史记录污染等严重回归。针对 AI 智能体框架，建立自动化且覆盖状态迁移场景的回归测试基准（Benchmark & E2E Tests）已成为开源项目维护者的当务之急。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 6 月 5 日 NanoBot 项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-06-05)

## 1. 今日速览
NanoBot 项目今日维持了**极高的开发与维护活跃度**。在过去 24 小时内，项目共处理了 77 个 Pull Requests（其中 61 个已合并/关闭），并解决了 5 个 Issues，展现了维护者高效的代码审查与合并效率。目前的开发重心集中在**底层安全防护（SSRF/路径逃逸修复）、MCP 协议的健壮性增强以及 WebUI/桌面端用户体验优化**。整体来看，项目正处于快速迭代期，核心架构的稳定性与扩展性正在被持续加强。

## 2. 版本发布
过去 24 小时内项目**无新版本发布**。

## 3. 项目进展
今日共有大量高质量的 PR 被合并，项目在安全性、架构稳定性和前端体验上取得了实质性进展：

*   **底层安全与沙箱加固**：
    *   合并了 `fix(exec): block relative symlink workspace escapes` ([PR #4119](https://github.com/HKUDS/nanobot/pull/4119))，阻止了通过符号链接执行受限命令逃逸工作空间的隐患。
    *   合并了 `fix(tools): keep read-only roots out of write paths` ([PR #4053](https://github.com/HKUDS/nanobot/pull/4053))，修复了文件系统额外允许根目录的写入权限问题，加强了工作区隔离。
*   **MCP 协议与提供商兼容性**：
    *   修复了核心 Bug：MCP 断连后无法自动重连的问题 ([PR #4027](https://github.com/HKUDS/nanobot/pull/4027))，增加了重连回调。
    *   修复了 OpenAI 兼容 API（如 GLM-4.7, Kimi 2.6）的 Tool Call ID 不匹配问题 ([PR #3984](https://github.com/HKUDS/nanobot/pull/3984))。
    *   正式引入了对 Azure AAD 基于身份验证的支持 ([PR #4126](https://github.com/HKUDS/nanobot/pull/4126))，满足了企业级安全合规需求。
*   **前端与桌面端探索**：
    *   合并了 WebUI 中渲染 CLI 生成的图像工件及修复 pip 安装错误的相关 PR ([PR #3966](https://github.com/HKUDS/nanobot/pull/3966), [PR #4164](https://github.com/HKUDS/nanobot/pull/4164))。
*   **Agent 运行生命周期与测试**：
    *   合并了 `AgentRunHookContext` 运行级 Agent 钩子生命周期管理 ([PR #4176](https://github.com/HKUDS/nanobot/pull/4176))，为监听 Agent 运行提供了标准化接口。
    *   测试覆盖率大幅提升，合并了多个测试脚本和确定性测试 PR ([PR #4189](https://github.com/HKUDS/nanobot/pull/4189), [PR #3982](https://github.com/HKUDS/nanobot/pull/3982))。

## 4. 社区热点
根据数据分析，今日最受关注的功能诉求与讨论如下：
*   **桌面端 GUI 进展**：由核心开发者 Re-bin 发起的桌面端外壳与 WebUI 共享重构 ([PR #4195](https://github.com/HKUDS/nanobot/pull/4195)) 正在积极推进，标志着 NanoBot 即将拥有原生的桌面应用体验。
*   **任务特定模型配置**：由用户 mmhy2003 提出的支持按任务类型（对话/工具/浏览器）配置不同模型的需求 ([Issue #912](https://github.com/HKUDS/nanobot/issues/912)) 获得了 3 个 👍。该 Issue 今日再次活跃，引发了关于架构如何解耦调度逻辑的讨论。
*   **Agent 记忆与技能系统**：社区对 Agent 的记忆管理能力关注度较高，今日有多个与 Memory 生命周期 ([PR #4193](https://github.com/HKUDS/nanobot/pull/4193)) 和 Skill 技能列表展示 ([PR #3968](https://github.com/HKUDS/nanobot/pull/3968)) 的 PR 处于活跃状态。

## 5. Bug 与稳定性
今日报告并修复了多个影响系统稳定性的关键 Bug：
1.  **[严重] MCP Server 随机断连**：用户反馈运行一段时间后 MCP 报错 `McpError: Session terminated`，且无法恢复。目前该问题已在今日通过 [PR #4027](https://github.com/HKUDS/nanobot/pull/4027) 修复。
2.  **[中等] LLM 请求超时无法触发 Fallback 模型**：当主模型超时或返回 503 时，备用模型未被触发，直接向用户报错 ([Issue #1121](https://github.com/HKUDS/nanobot/issues/1121))。目前该 Issue 已关闭，问题已得到修复。
3.  **[低] WebUI 包管理器崩溃**：在使用 `uv tool` 安装时，由于找不到 pip 模块导致 WebUI 安装 CLI App 失败 ([Issue #4158](https://github.com/HKUDS/nanobot/issues/4158))。已通过回退至 `uv pip` 机制解决 ([PR #4164](https://github.com/HKUDS/nanobot/pull/4164))。

## 6. 功能请求与路线图信号
综合近期的 Issue 与 PR 动态，可以观察到项目接下来的演进路线图：
*   **WebUI 交互深化**：用户希望支持更快捷的键盘操作，例如 `Cmd/Ctrl+Shift+O` 快捷新建聊天 ([Issue #4178](https://github.com/HKUDS/nanobot/issues/4178)) 以及消息记录的分支功能。部分体验优化 PR 已被合入。
*   **子代理能力扩展**：社区提交了允许子代理继承主代理 MCP 工具的 PR ([PR #4192](https://github.com/HKUDS/nanobot/pull/4192))，这表明项目正致力于解决多 Agent 架构下的工具共享与协同问题，预计这将是下一版本的重点特性。
*   **企业级集成完善**：随着 Azure AAD 认证的合入，项目对企业合规环境的支持力度加大。

## 7. 用户反馈摘要
从近期的 Issues 中提炼出用户的真实使用反馈：
*   **痛点**：用户在使用不同的大模型提供商时，经常遇到 API 响应格式不标准导致的 Tool Call 失败问题（如 Kimi/GLM）。
*   **痛点**：Agent 在长时运行任务（如 600 秒后的 503 错误）中的自我恢复能力不足，对 Fallback 机制的诉求强烈。
*   **场景**：越来越多用户开始在 CLI 和 WebUI 之间混合使用，发现并反馈了跨端生成的文件（如 CLI 生成的图像）在 WebUI 无法正确渲染的问题，侧面说明跨端一致性体验正受到更多重视。

## 8. 待处理积压
*   **[高优] MCP 接口 SSRF 安全漏洞审查**：[PR #4123](https://github.com/HKUDS/nanobot/pull/4123) 提出了在探测前阻止不安全的 HTTP URL，虽然已提交多日，但由于涉及底层网络请求重定向策略，仍需维护者进一步审查合入。
*   **[中优] 任务特定模型配置**：[Issue #912](https://github.com/HKUDS/nanobot/issues/912) 悬而未决，作为一个架构级新特性，需要项目 Owner 确认设计方向。
*   **[低优] Tool Call 校验严格化**：[PR #4190](https://github.com/HKUDS/nanobot/pull/4190) 正在等待合并，这可能会改变部分现有的容错逻辑，需要开发者重点关注其可能带来的破坏性变更。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-06-05)

## 1. 今日速览
Hermes Agent 今日维持了极高的社区活跃度，过去 24 小时内共产生了 50 条 Issue 更新（46 条新开/活跃，4 条关闭）与 50 条 PR 更新（46 条待合并，4 条合并/关闭）。整体来看，项目处于“高输入、低合并”的异步讨论状态，社区在桌面端（Desktop）稳定性、多语言支持、底层架构解耦（如数据库和定价层）以及跨平台网关（Telegram/WhatsApp/飞书）等方向提交了大量高质量反馈。尽管没有发布新版本，但多个针对严重 Bug（如安装失败、状态不一致、上下文压缩错位）的修复 PR 已经就绪，等待 Core 团队合入。

## 2. 版本发布
**无新版本发布。** 
当前主分支代码库正在为潜在的 `v0.15.2` 或 `v0.16.0` 做大量修复与功能积累。

---

## 3. 项目进展
今日共有 4 个 PR/Issue 被合并或关闭，主要集中在**修复关键崩溃与权限逻辑**上，项目基座稳定性得到进一步提升：
*   **修复代理失败时的状态丢失问题** ([PR #39340](https://github.com/NousResearch/hermes-agent/pull/39340) / [PR #39345](https://github.com/NousResearch/hermes-agent/pull/39345)): 修复了 MeshBoard worker 在流式传输中出现 `agent failed: 'final_response'` 崩溃的问题，确保在遇到连接重置等异常时能够保留最终响应状态。
*   **子代理动态角色加载支持** ([Issue #36030](https://github.com/NousResearch/hermes-agent/issues/36030)): 允许子代理在运行时动态加载角色设定，大幅提升了复杂工作流中多智能体协作的灵活性。
*   **大规模角色同步性能优化** ([Issue #36031](https://github.com/NousResearch/hermes-agent/issues/36031)): 修复了包含数百个角色时目录同步极其缓慢的性能瓶颈。

---

## 4. 社区热点
今日讨论最热烈的方向集中在**第三方平台集成能力扩展**与**本地数据库架构优化**：
1.  **Telegram 全面自动化支持** ([Issue #21587](https://github.com/NousResearch/hermes-agent/issues/21587), 8 条评论): 社区捕捉到 Telegram 最近的重大更新，呼吁 Hermes Agent 深度集成 Guest Bots、Bot-to-Bot 通讯、贴纸和聊天自动化功能，这对于多智能体协同工作流是巨大的提升。
2.  **可插拔 SessionDB 提案** ([Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717), 6 条评论): 开发者 `DoubleDD` 发起了从 SQLite 迁移到 PostgreSQL/MySQL 的 RFC。由于 SQLite 在热更新时容易引发“状态锁死”，该架构级重构引发了后端开发者的深入探讨。
3.  **安同 OS 安装冲突排查** ([Issue #34536](https://github.com/NousResearch/hermes-agent/issues/34536), 1 条评论): 暴露了安装器在覆盖系统级 Node 环境变量时的野蛮行为，维护者已介入调查。

---

## 5. Bug 与稳定性
今日报告了多个影响核心体验的 Bug，按严重程度排列如下：

### 🔴 P0/P2 严重级别
*   **Mac 端构建/安装彻底失败** ([Issue #39332](https://github.com/NousResearch/hermes-agent/issues/39332)): Desktop 安装包在 macOS 上触发 Vite/TSC 构建错误导致无法安装。**暂无对应 Fix PR。**
*   **上下文压缩导致错位注入** ([PR #39239](https://github.com/NousResearch/hermes-agent/pull/39239)): 修复了在进行长对话的预检上下文压缩时，用户最新一轮指令被错误覆盖的致命逻辑漏洞。**已有 Fix PR。**
*   **MacOS 桌面端陷入“无限更新循环”** ([Issue #39339](https://github.com/NousResearch/hermes-agent/issues/39339)): 用户点击更新后版本号未变，重启后依然提示更新。**暂无对应 Fix PR。**
*   **代码执行审批机制失效** ([Issue #39275](https://github.com/NousResearch/hermes-agent/issues/39275)): 在 Telegram 等网关中，`execute_code` 的 "Always Approve" 按钮点击无效。**暂无对应 Fix PR。**

### 🟡 P3 功能级 Bug / 体验降级
*   **WebSocket Token 鉴权失效** ([Issue #39349](https://github.com/NousResearch/hermes-agent/issues/39349)): Desktop 端 `.env` 配置覆盖导致仪表盘无法连接。
*   **Ollama 后台 Gemma4 模型截断** ([Issue #39281](https://github.com/NousResearch/hermes-agent/issues/39281)): 调用本地 Ollama 时触发 `finish_reason='length'` 提前终止。
*   **TUI 无法取消已粘贴的图片** ([Issue #39291](https://github.com/NousResearch/hermes-agent/issues/39291)): UI 交互逻辑缺失。

---

## 6. 功能请求与路线图信号
通过近期的 PR 与 Issue 关联分析，可以看出项目正朝着**多语言桌面端、插件化数据同步、细粒度成本监控**方向快速演进：
1.  **桌面端原生国际化 (i18n) 即将合入**：基于社区对中文支持的强烈呼声 ([Issue #39268](https://github.com/NousResearch/hermes-agent/issues/39268))，`JimLiu` 提交了完整的简体中文支持架构 ([PR #38241](https://github.com/NousResearch/hermes-agent/pull/38241))，预计将在下个版本全面上线。
2.  **基于 Git 的分布式配置同步**：开发者提交了 `hermes sync` 子命令 ([PR #39343](https://github.com/NousResearch/hermes-agent/pull/39343))，允许用户通过私人 Git 仓库无缝备份和漫游 Agent 配置、记忆与技能。
3.  **细粒度成本与归因分析体系**：出现了多个关于成本监控的高质量请求（[Issue #39250](https://github.com/NousResearch/hermes-agent/issues/39250) 按目标归因，[Issue #19469](https://github.com/NousResearch/hermes-agent/issues/19469) 打破 OpenRouter 定价强耦合），表明企业级用户对 Agent 资源消耗的精细化核算需求正在爆发。

---

## 7. 用户反馈摘要
从今天的 Issues 中提取的真实用户痛点包括：
*   **企业级安全与审计需求急迫**：WhatsApp Bridge 暴露的鉴权绕过漏洞 ([PR #8431](https://github.com/NousResearch/hermes-agent/pull/8431)) 表明，项目在多租户或公网暴露环境下的权限隔离机制仍需加强。
*   **桌面端用户期望“开箱即用”**：Windows/Mac 用户频繁遭遇环境配置、更新死锁 ([Issue #39339](https://github.com/NousResearch/hermes-agent/issues/39339)) 或本地远程网关连接不通的问题 ([Issue #38873](https://github.com/NousResearch/hermes-agent/issues/38873))，CLI 与 Desktop 状态的一致性体验亟待打磨。
*   **跨平台消息渲染标准不一**：开发者正在积极为飞书提交 CardKit 适配 ([PR #23488](https://github.com/NousResearch/hermes-agent/pull/23488))，侧面反映了 Agent 输出内容（特别是流式 Markdown 和卡片）在不同 IM 软件中的展现差异给终端用户带来了困扰。

---

## 8. 待处理积压
以下重要议题停留时间较长或影响面广，建议 Core Team 优先跟进：
1.  **统一遥测与分析仪表盘** ([Issue #6642](https://github.com/NousResearch/hermes-agent/issues/6642)): 2个月前提出，关乎 Token 消耗与财务成本的实时监控，企业用户极其关注。
2.  **Claude 上下文自动清理适配** ([Issue #526](https://github.com/NousResearch/hermes-agent/issues/526)): Anthropic 已推出 Context Editing API，3月份提出集成请求，利用此 API 可大幅降低长上下文场景的延迟和成本。
3.  **官方技能保护机制** ([PR #38561](https://github.com/NousResearch/hermes-agent/pull/38561)): 修复 Curator 可能误删官方内置技能的 Bug，涉及生产环境安全，建议尽快 Review 并合入。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 2026 年 6 月 5 日 PicoClaw 项目动态日报：

---

# 📊 PicoClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持着**高度活跃的开发状态**，共处理了 19 个 Pull Requests 和 5 个 Issues。核心关注点集中在 **v0.2.9 版本引发的 Web UI 历史记录回归问题**的修复，以及多项底层稳定性的提升（如 PID 锁定机制优化、Workspace URL 校验修复）。项目今日成功合并了 10 个 PR（包含核心 Bug 修复与文档更新），无新版本发布。整体来看，项目正处于 v0.2.9 发布后的密集高频修复期，维护者对社区反馈响应迅速。

## 2. 版本发布
- **最新发布版本**：无新版本发布。
- **说明**：当前项目主要精力集中于修复 v0.2.9 引入的遗留问题及依赖更新。

## 3. 项目进展
今日共合并/关闭了 **10 个 PR**，项目在稳定性和构建系统上取得了实质性进展：

- **核心会话回归修复**：[#2992](https://github.com/sipeed/picoclaw/pull/2992) 修复了升级 v0.2.9 后 Web UI 新会话错误附加旧历史记录的严重问题（闭环了 Issue #2972）。
- **启动稳定性 (PID) 修复**：[#3000](https://github.com/sipeed/picoclaw/pull/3000) 解决了网关单例 PID 校验不准确导致进程崩溃循环的问题（闭环了 Issue #2720）。
- **Codex GPT-5.5 兼容性修复**：[#3007](https://github.com/sipeed/picoclaw/pull/3007) 修复了使用 Codex OAuth 时流式响应丢失工具调用的问题（闭环了 Issue #3006）。
- **构建系统优化**：[#2999](https://github.com/sipeed/picoclaw/pull/2999) 和 [#2976](https://github.com/sipeed/picoclaw/pull/2976) 彻底解决了 Go 1.25.10 版本字符串包含空格导致的 Makefile 构建失败问题。
- **依赖与文档更新**：合并了 AWS Bedrock 和 SQLite 的依赖升级 PR ([#3004](https://github.com/sipeed/picoclaw/pull/3004), [#3003](https://github.com/sipeed/picoclaw/pull/3003))，并更新了 v0.2.5~v0.2.9 的 README 发布日志 ([#2995](https://github.com/sipeed/picoclaw/pull/2995)，闭环了 Issue #2981)。

## 4. 社区热点
今日讨论最活跃的议题是历史悠久的启动崩溃问题：
- **[#2720](https://github.com/sipeed/picoclaw/issues/2720) [8 条评论]**：单例 PID 检查机制导致网关循环崩溃。该问题影响极深，用户在长达一个多月的时间里遇到因 PID 被系统复用给其他进程（如 systemd-resolved）导致的启动失败。今日该问题已通过 PR #3000 彻底解决，表明维护者开始集中清理底层深层 Bug。

## 5. Bug 与稳定性
今日新增及处理的 Bug 报告按严重程度排列如下：

1. **🔴 严重 - 会话历史污染 (已修复)**：[#2972](https://github.com/sipeed/picoclaw/issues/2972) Web UI 新会话被强行注入旧消息。已通过 PR [#2992](https://github.com/sipeed/picoclaw/pull/2992) 修复。
2. **🟠 高优 - 启动崩溃循环 (已修复)**：[#2720](https://github.com/sipeed/picoclaw/issues/2720) 过期 PID 导致网关无法启动。已通过 PR [#3000](https://github.com/sipeed/picoclaw/pull/3000) 修复。
3. **🟡 中等 - AI 工具调用失败 (已修复)**：[#3006](https://github.com/sipeed/picoclaw/issues/3006) GPT-5.5 Codex 流输出时丢失 function call。已通过 PR [#3007](https://github.com/sipeed/picoclaw/pull/3007) 修复。
4. **🟡 中等 - 渠道路由错误 (待修复)**：[#3002](https://github.com/sipeed/picoclaw/issues/3002) OneBot 群聊回复错误调用私聊接口，导致 NapCat 框架报错。目前尚无对应修复 PR。

## 6. 功能请求与路线图信号
从当前 Open 的 PR 来看，项目下一个迭代版本的重点方向包括：
- **多渠道接入增强**：WhatsApp 的 Native 模式支持 ([#2934](https://github.com/sipeed/picoclaw/pull/2934))，以及飞书 SDK 的破坏性升级适配 ([#3008](https://github.com/sipeed/picoclaw/pull/3008))。
- **安全与权限细化**：Workspace 防护机制针对无 Scheme URL 的误拦截优化 ([#3001](https://github.com/sipeed/picoclaw/pull/3001))，以及 `security.yml` 配置合并导致通道意外禁用的修复 ([#2956](https://github.com/sipeed/picoclaw/pull/2956))。
- **模型支持拓宽**：Anthropic SDK 的大版本依赖跨越 ([#2962](https://github.com/sipeed/picoclaw/pull/2962))，以及对最新 Claude 模型 ID 规范的兼容 ([#2947](https://github.com/sipeed/picoclaw/pull/2947))。

## 7. 用户反馈摘要
通过今日的 Issue 提炼出用户的真实使用痛点：
- **升级体验脆弱**：用户在升级 v0.2.9 后遭遇了破坏性的体验（历史记录错乱），反映出项目在版本发布前的回归测试覆盖度有待提升，尤其是状态迁移部分。
- **复杂环境适配不足**：用户报告在 FreeBSD 系统及各种 OneBot 协议端（如 NapCat）接入时遇到问题，说明边缘环境和第三方协议对接的兼容性仍需加强。
- **LLM 接口兼容性挑战**：GPT-5.5 等前沿模型在 Tool Call 流式传输时的变动，极易导致 PicoClaw 出现无响应，提示解析模块（Parser）需要更强的容错机制。

## 8. 待处理积压
以下重要 PR 长期未合并，需项目维护者关注推进：
- **[Stale] [#2947](https://github.com/sipeed/picoclaw/pull/2947)**：修复 Anthropic claude-sonnet-4.6 模型 ID 格式错误，已停滞多日，这会导致新用户直接调用 Anthropic API 报 404 错误。
- **[Stale] [#2934](https://github.com/sipeed/picoclaw/pull/2934)**：WhatsApp 原生模式支持，阻塞了配置 `use_native` 的用户群体。
- **[Open] [#2956](https://github.com/sipeed/picoclaw/pull/2956)**：安全凭证合并导致通道被禁用的问题，直接影响到生产环境的稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-05)

**分析数据源**: github.com/qwibitai/nanoclaw
**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览
过去 24 小时内，NanoClaw 项目的整体活跃度保持在中等偏上水平。项目今日共处理了 6 个 Pull Requests（其中 3 个被合并或关闭，3 个仍在待合并状态），同时产生了 1 个全新的 Issue。值得关注的是，当前的代码提交重心集中在**多渠道适配器的优化（WhatsApp、Signal）**以及**本地化能力的拓展（如本地语音转文字）**，这反映出项目正在稳步增强其作为全渠道个人 AI 助手的鲁棒性与功能边界。

## 2. 版本发布
过去 24 小时内，项目**无**新版本发布。

## 3. 项目进展
今日有 3 个 PR 被关闭（包含代码合入或拒绝），标志着项目在代码规范、渠道稳定性和新技能探索上取得了实质性进展：

*   **类型安全与错误处理优化**: PR [#104 fix: replace `as any` casts with proper BoomError type](https://github.com/nanocoai/nanoclaw/pull/104) 今日被关闭。该 PR 针对底层代码进行了重构，定义了与 `@hapi/boom` 匹配的 `BoomError` 接口，替换了不安全的 `as any` 类型断言。这一改动将显著提升助手机制（特别是 Baileys 断开连接时）的类型推断能力，降低潜在运行时崩溃的风险。
*   **WhatsApp 严重 Bug 修复**: PR [#2633 Fix/whatsapp self destruct and shutdown auth wipe](https://github.com/nanocoai/nanoclaw/pull/2633) 被关闭。该 PR 修复了在 Baileys 7.x 环境下，WhatsApp 适配器在关闭时错误擦除认证信息及会话自毁的结构性 Bug，极大提升了 WhatsApp 渠道的连接稳定性。
*   **社区 PR 处理**: PR [#2687 Trip agent](https://github.com/nanocoai/nanoclaw/pull/2687) 被关闭。这可能是一个由社区提交的 Agent 技能 PR，维护者对其进行了评审和规范化处理。

## 4. 社区热点
今日的新开 Issue 缺乏实质性技术讨论，反映出可能存在一定程度的社区 Spam 或非核心开发者的低质量提问：
*   **低质量 Issue**: Issue [#2686 Traveling](https://github.com/nanocoai/nanoclaw/issues/2686) 请求“前往加拿大旅行”，这极大概率是用户将 NanoClaw（作为一个 AI 助手框架）误认为是通用 ChatGPT 聊天窗口，或是测试性质的 Spam 信息。
*   **技术讨论焦点**: 真正的社区关注点在 Signal 和 WhatsApp 的底层实现上。mtichikawa 提出的本地语音转录 PR（[#2459](https://github.com/nanocoai/nanoclaw/pull/2459)）虽然创建于 5 月中旬，但今日依然保持活跃，显示了社区对无 API 依赖的本地语音交互方案的强烈兴趣。

## 5. Bug 与稳定性
今日未报告新的严重 Bug，但历史 Bug 的修复工作取得了重大突破：
*   **[已解决/高] WhatsApp 认证丢失与会话自毁**: 长期以来导致 WhatsApp 频繁掉线的问题已通过 PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633) 得到修复。
*   **[待观察/中] 模型输出解析失败**: PR [#2405 fix(poll-loop): deliver unwrapped output...](https://github.com/nanocoai/nanoclaw/pull/2405) 仍在处理中。该问题指出在自动压缩后，模型经常丢弃 `<message to="…">` 的包裹纪律，导致输出解析失败。这是一个典型的 LLM Agent 稳定性问题，修复后可显著提升长对话场景下的回复准确率。

## 6. 功能请求与路线图信号
结合 Issue 和活跃的 PR，项目未来的功能演进呈现出以下信号：
*   **本地化、保护隐私的语音集成**: PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) 提议在宿主机上通过 `whisper.cpp` 为 Discord、Slack、Teams 等所有 Chat SDK 桥接频道添加本地语音转文字功能，无需外部 OpenAI API。这代表了个人 AI 助手向“全离线化、隐私优先”演进的重要路线图。
*   **Signal 频道体验升级**: PR [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) 带来了 Signal 的群组输入指示器、出站消息回应以及引用回复修复。这表明项目正在深化即时通讯平台的原生交互体验，使 AI 助手的行为更加拟人化。

## 7. 用户反馈摘要
从近期的提交和议题可以提炼出以下用户痛点：
*   **多设备登录极其脆弱**: WhatsApp 用户深受认证状态丢失的困扰（Issue 反映在 #2633 中），说明在多端协同场景下，AI 助手的鉴权保持是核心痛点。
*   **长文本/多轮对话失控**: 针对压缩后模型忘记输出格式的 Bug（#2405），反映出用户在与助手进行复杂、长上下文交互时，经常遭遇消息发送失败或路由错误。

## 8. 待处理积压
以下重要的 PR 处于 Open 状态较长时间，需要维护团队关注以推进合入：
*   **PR [#2405](https://github.com/nanocoai/nanoclaw/pull/2405)**: 核心的 poll-loop 输出解析修复，自 5 月 11 日开启，今日有更新但尚未合入，需要重点 Review 以解决长对话稳定性问题。
*   **PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459)**: 本地 Whisper 语音转录功能，自 5 月 13 日开启，这是一个庞大且有价值的功能分支，建议维护者确认其合并优先级及测试覆盖率。
*   **PR [#2685](https://github.com/nanocoai/nanoclaw/pull/2685)**: Signal 协议的高级交互文档与实现，今日新建，状态良好，期待尽快合入以丰富助手的富文本交互能力。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🛡️ IronClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
IronClaw 项目今日保持极高的开发与迭代活跃度，核心开发者 `henrypark133` 和 `serrrfirat` 正在全面推进代号为 **Reborn** 的底层架构重构。过去 24 小时内，项目处理了 45 条 Issue（其中 15 条已关闭）和 50 条 PR（18 条已合并或关闭），且无新版本发布。当前开发重心聚焦于 **Reborn 循环的鲁棒性**、**子代理的生命周期管理** 以及 **WebUI 与 Slack 集成的完善**。项目呈现出“高吞吐量修复合并与深度架构设计并行”的健康态势。

---

## 2. 版本发布
* **无新版本发布**。项目目前处于高频底层架构重构与功能密集开发阶段，尚在积累变更以备下一个里程碑版本。

---

## 3. 项目进展
今日合并/关闭了多个重量级（XL）的 PR，核心系统向前迈进了关键一步：
* **子代理生命周期的彻底补全**：核心贡献者关闭了多个关于子代理后台执行与补偿机制的 PR。其中 [PR #4413](https://github.com/nearai/ironclaw/pull/4413) 修复了完成状态的观察者投递，而 [PR #4435](https://github.com/nearai/ironclaw/pull/4435) 彻底修复了生成补偿机制，确保子代理在撤销、失败或批处理错误时能够正确回滚线程和状态。
* **Reborn 循环稳定性增强**：[PR #4440](https://github.com/nearai/ironclaw/pull/4440) 引入了 `LoopCompactionOutcome`，对不稳定的转录范围采用“延迟而非报错”的优雅降级策略。
* **触发器生命周期初步闭环**：[PR #4466](https://github.com/nearai/ironclaw/pull/4466) 为 `builtin.trigger_create` 增加了生命周期钩子，配对触发器的创建者。
* **模型上下文窗口优化**：[PR #4467](https://github.com/nearai/ironclaw/pull/4467) 限制了 `builtin.http` 返回给模型的结果大小，有效防止上下文被大量 HTML 冗余数据撑爆。

---

## 4. 社区热点
今日的讨论热点主要集中在底层架构规范和上下文管理：
* **[#3280 [OPEN]](https://github.com/nearai/ironclaw/issues/3280) [Reborn] Add ProductWorkflow and InboundTurnService facade**（👍: 0 | 评论: 6）：核心开发团队正在讨论如何在产品适配器与宿主层服务之间建立Facade（门面），这是决定 Reborn 架构形态的基石。
* **[#3857 [CLOSED]](https://github.com/nearai/ironclaw/issues/3857) [Reborn] Lane 10: add Slack ProductAdapter MVP**（评论: 6）：关于集成带预配置凭证的 Slack MVP 的讨论，标志着产品端到端通讯能力的测试与落地。
* **[#4424 [CLOSED]](https://github.com/nearai/ironclaw/issues/4424) Reborn: builtin.spawn_subagent advertised but absent**（评论: 4）：开发者发现模型系统提示词中包含了某个工具，但实际 API 请求的 `tools` 数组中却没有，引发了对 LLM 接口能力一致性（可见性 vs 可调用性）的热烈讨论。

---

## 5. Bug 与稳定性
今日报告并处理了大量与本地开发和底层循环相关的缺陷，按严重程度排列如下：

* **🚨 严重 - 上下文炸弹 / 致命内存泄漏**：
  * [Issue #4425](https://github.com/nearai/ironclaw/issues/4425)：`builtin.http` 未对 HTML 进行剥离且无有效大小限制，单次请求可能产生高达 1.2MB 的无效 Token 注入。（已通过 [PR #4467](https://github.com/nearai/ironclaw/pull/4467) 提供初步 Fix）。
* **⚠️ 中等 - 循环不可见死锁与无限触发**：
  * [Issue #4427](https://github.com/nearai/ironclaw/issues/4427)：Reborn 循环退出的原因被写入数据库但从未打印 Trace 日志，导致排错困难（尚未修复）。
  * [Issue #4420](https://github.com/nearai/ironclaw/issues/4420)（已关闭）：`CompleteAfterFirstFire` 触发器策略在代码层面被忽略，导致任务被无限重复触发。
* **🛠️ 较低 - 权限与架构绕过**：
  * [Issue #4426](https://github.com/nearai/ironclaw/issues/4426)：本地开发环境下，父循环工具表面（Tool Surface）硬编码为 `AllowAll`，导致交互工具配置文件被无视，存在安全隐患。

---

## 6. 功能请求与路线图信号
结合近期的功能提案与 PR，IronClaw 的下一步演进路线图非常明确：
* **大型模块拆分**：[Issue #4470](https://github.com/nearai/ironclaw/issues/4470) 提出“将 Reborn 重构为具有 CI 强制边界的独立 Crate”，这表明项目正在为支持大规模第三方扩展做准备。
* **WebUI 渐进式优化**：[PR #4477](https://github.com/nearai/ironclaw/pull/4477) 提出按设置状态对 LLM Providers 进行分组，提升多模型配置下的用户体验。
* **CLI 迁移至 Reborn API**：社区贡献者 [PR #4379](https://github.com/nearai/ironclaw/pull/4379) 正在将只读命令 (`doctor`, `status`) 迁移到新架构，预计很快会合并。
* **钩子框架上线**：围绕 `zmanian` 的一系列 PR（如 [PR #3951](https://github.com/nearai/ironclaw/pull/3951)），项目正在解锁第三方扩展的能力。

---

## 7. 用户反馈摘要
从近两日的 Issue 描述中，可以提炼出开发者和早期测试用户的核心痛点：
* **本地调试体验差**：反复指出在使用 `RUST_LOG` 排错时，关键循环失败被静默吞掉，开发者只能对着数据库状态猜测失败原因（[#4427](https://github.com/nearai/ironclaw/issues/4427)）。
* **无用的 Prompt 浪费**：用户发现由于底层每次都会重新构建 `ThreadBackedLoopContextPort`，导致 Identity 缓存被频繁打碎，带来不必要的性能损耗（[#4429](https://github.com/nearai/ironclaw/issues/4429)）。
* **对 LLM 的控制力不足**：模型看不到可调用的工具结构（[#4424](https://github.com/nearai/ironclaw/issues/4424)），或者被塞入了完整无删减的网页代码（[#4425](https://github.com/nearai/ironclaw/issues/4425)），说明目前在“Agent 喂料与工具授权管控”上仍需精打细磨。

---

## 8. 待处理积压
建议维护者重点关注以下长期未解决或今日新开的战略性架构问题：
* **[Issue #4474](https://github.com/nearai/ironclaw/issues/4474) / [Issue #4475](https://github.com/nearai/ironclaw/issues/4475)**：今日新开的两个 Umbrella Issue，分别整合了“后台子代理持久投递”和“触发器生命周期”的设计，是目前 Reborn 架构演进的核心大纲，亟待 Owner 评审并挂入 Milestone。
* **[Issue #4470](https://github.com/nearai/ironclaw/issues/4470)**：Crate 拆分重构提议，这是一个极度影响后续开发者贡献体验的基础设施 Issue，应尽早定调。
* **[PR #3931](https://github.com/nearai/ironclaw/pull/3931) (Hooks 跨租户泄露修复)**：该 PR 已经挂起超过一周，且包含被标记为 CRITICAL 的安全修复，需维护者尽快进行 Code Review 以防止供应链风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为你生成的 LobsterAI 项目 2026-06-05 动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-06-05)

## 1. 今日速览
过去 24 小时，LobsterAI 项目呈现**高度活跃且聚焦于稳定性建设**的状态。尽管没有发布新版本，但团队集中处理了高达 17 个 Pull Requests（其中包含合并了体积庞大的 `2026.5.28` 版本累积 PR），显示出强劲的代码整合能力。核心开发团队今日的焦点集中在 **MCP（Model Context Protocol）启动与连接稳定性的深度优化**，以及修复近期引入的 Cowork 会话功能遗留问题。同时，多个由社区贡献的 PR（涉及通知、书签、标签系统等实用功能）也被批量处理（合并或关闭），项目整体正处在功能扩展后的精细化打磨与除虫（Bug Squashing）阶段。

## 2. 版本发布
*今日无全新版本发布。*
不过，今日合并了关键的回溯 PR [release: 2026.5.28](https://github.com/netease-youdao/LobsterAI/pull/2090)（包含 73 个提交），主要带来了 Kit（专家套件）市场、Cowork 会话本地分叉等重磅能力，预示着近期可能会发布基于此的补丁版本。

## 3. 项目进展
今日共有 17 个 PR 被更新且状态置为 CLOSED，核心进展如下：

*   **核心架构与代码重构**：
    *   [PR #2111](https://github.com/netease-youdao/LobsterAI/pull/2111)：重构了 Cowork 语音输入模块，将其拆分为 ASR 客户端、WAV 编码等聚焦模块，大幅提升代码可维护性。
*   **MCP 性能与连接体验大幅改善**：
    *   [PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)（合并）：优化了 `npx` MCP 启动解析慢的问题，将其转换为稳定的 `node <absolute-bin-path>`，极大提升会话启动速度。
    *   [PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100)（合并）：修复了托管 MCP 安装时 Node 环境感知的问题。
    *   [PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)（合并）：增加了远程 MCP Server URL 的校验拦截，防范无效配置。
*   **Cowork 会话与 Artifacts 改进**：
    *   [PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110)（合并）：拦截超大的 OpenClaw 图像负载，防范网关传输故障。
    *   [PR #2095](https://github.com/netease-youdao/LobsterAI/pull/2095)（合并）：支持 Sub-agent（子代理）的批量删除及异步清理。
    *   [PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)（合并）：支持将 Artifact 预览中选中的文本一键发送至聊天框。
*   **模型适配与系统 UI 修复**：
    *   [PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093)（合并）：解除了 MiniMax-M3 模型对图片输入的硬编码限制。
    *   [PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096)（合并）：在插件管理列表中隐藏了底层的 OpenClaw 内部插件，避免误导用户。

## 4. 社区热点
今日最活跃的讨论来自于一个长期未解决、在近期被重新激活的 Issue：
*   🔥 **[Issue #769 OpenClaw 网关未能在规定时间内启动成功](https://github.com/netease-youdao/LobsterAI/issues/769)**
    *   **分析**：该问题由用户 @15999803458-boop 提出于 3 月份，今日再次被追问。结合今日团队连续合并了 3 个 MCP 启动与解析优化的 PR（[PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091), [PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100), [PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)）来看，官方已经关注到底层网关（Gateway）连接超时引发的白屏/无响应痛点，社区可以期待在下一个版本中得到显著改善。

## 5. Bug 与稳定性
今日报告/追踪的 Bug 均已在开发分支中被定位并提交修复：
1.  **【严重】MCP 连接失败与启动阻塞**：由 `npx` 慢路径引发的超时（[PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091) 修复）和 Node 环境变量丢失（[PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100) 修复）。
2.  **【中等】OpenClaw 超大 Payload 导致连接中断**：发送大图时网关报 `1009` 错误（[PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110) 修复）。
3.  **【轻微】设置面板 OAuth 轮询内存泄漏**：关闭设置面板后，GitHub Copilot 的后台请求未被取消导致组件报错（社区 PR [PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544) 修复）。
4.  **【轻微】国际化文本遗漏**：英文模式下操作审批对话框仍显示中文（[PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543) 修复）。

## 6. 功能请求与路线图信号
今日有多个高质量的外部贡献者 PR 被处理，揭示了产品接下来演进的方向：
*   **系统级事件通知**：[PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536) 新增了 Cowork 任务完成后的操作系统原生级弹窗提醒，表明项目正致力于提供**后台运行与多任务切换**的无缝体验。
*   **长上下文管理（会话标签与书签）**：[PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)（AI 消息书签功能）和 [PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)（会话标签分类）展现了社区对**复杂长对话检索与归纳**的强烈诉求，这几个功能非常有希望在随着重构完成后合入主干。

## 7. 用户反馈摘要
*   **痛点（网络与环境依赖）**：用户对“启动卡死”、“网关连不上”容忍度极低（如 [Issue #769](https://github.com/netease-youdao/LobsterAI/issues/769)），这也反映出作为一个需要连接外部大模型的客户端工具，网络异常处理和透明化状态提示至关重要。
*   **痛点（UI 交互）**：设置面板的文本遗漏翻译（[Issue #1540](https://github.com/netease-youdao/LobsterAI/pull/1540) 说明）说明用户对 UI 细节要求较高，项目的国际化（i18n）流转机制仍有提升空间。

## 8. 待处理积压
以下长期停滞的重要功能型分支仍未合入主干，建议维护团队在当前重构与修Bug阶段告一段落后，重新进行 Review 或 Rebase：
*   📌 [[PR #1536] feat(cowork): Cowork 会话完成/失败时发送系统通知](https://github.com/netease-youdao/LobsterAI/pull/1536)
*   📌 [[PR #1538] feat(cowork): 为AI回复消息添加收藏/书签功能](https://github.com/netease-youdao/LobsterAI/pull/1538)
*   📌 [[PR #1542] feat(cowork): 会话标签分类系统，支持自定义标签和筛选过滤](https://github.com/netease-youdao/LobsterAI/pull/1542)
*   ⚠️ [[Issue #769] OpenClaw 网关未能在规定时间内启动成功](https://github.com/netease-youdao/LobsterAI/issues/769)：建议官方在此 Issue 下同步已发布的稳定性修复 PR，安抚社区情绪。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份日报基于 2026-06-05 的 GitHub 数据，为您深度剖析 Moltis 项目的最新动态与健康度。

---

# 📊 Moltis 项目动态日报 (2026-06-05)

## 1. 今日速览
过去24小时内，**Moltis 项目保持了极高的开发活跃度与社区吸引力**。项目迎来了 1 个新版发布，社区侧有 2 条新增的高质量 Feature Request，涵盖本地语音识别和多平台消息通道；核心开发方面，共有 5 个活跃 PR（其中包含大量针对 Browser 工具的深度修复与增强）。整体来看，项目目前在**Web 自动化（Shadow DOM支持）、边缘模型兼容性以及通信渠道扩展**方向取得显著进展，生态正处于快速扩张期。

## 2. 版本发布
- **[Release 20260603.01](https://github.com/moltis-org/moltis/releases/tag/20260603.01)** 
  - **更新说明**：版本已于两日前发布，今日数据反映出该版本发布后的代码跟进与修复工作正在密集进行。

## 3. 项目进展
今日虽然没有 PR 被合并或关闭，但处于 **Open/Active 状态的 5 个 PR 展现了清晰的迭代方向**，为下一次版本发布打下坚实基础：
- **浏览器底层能力突破**：PR [#1103](https://github.com/moltis-org/moltis/pull/1103) 和 [#1100](https://github.com/moltis-org/moltis/pull/1100) 集中解决了困扰 Web 自动化的核心痛点——支持穿透并抓取 Shadow DOM 内部元素，这对自动化操作现代前端框架（如 Salesforce Lightning）具有决定性意义。
- **本地/小模型兼容性提升**：PR [#1098](https://github.com/moltis-org/moltis/pull/1098) 修复了浏览器工具对 `null` 参数的容忍度，确保了 Gemma 4 等较小型的本地模型在调用 Moltis 工具时不会引发反序列化崩溃。
- **内存与历史记录管理优化**：PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 对持久化的 Tool Results 进行了截断限制，这将大幅降低长对话上下文重载时的 Token 消耗和潜在的 OOM 风险。

## 4. 社区热点
尽管当前 Issue 均未产生大量评论，但今日新开的两个需求引发了较高关注，代表了用户群体的强烈诉求：
- **高热度需求：本地极速 STT 引擎** 
  Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) 由 LauraGPT 提出，建议集成阿里开源的 FunASR/SenseVoice 作为本地语音识别引擎。背后反映了**用户对隐私保护（纯本地处理）及低延迟（70ms/10s音频）智能语音交互的急迫需求**。
- **高热度需求：多端消息触达**
  Issue [#1101](https://github.com/moltis-org/moltis/issues/1101) 由 joeblew999 提出，请求增加 SMS 和 LINE 渠道支持。这释放出明确的信号：**用户希望将 Moltis 作为核心处理引擎，部署到更广泛的亚洲市场及移动端客服场景中**。

## 5. Bug 与稳定性
今日报告的 Bug 集中在浏览器自动化与接口健壮性上，严重程度及修复状态如下：
- 🟡 **中等严重：Web 组件自动化失效** (PR 已提交)
  - **问题**：由于不支持 Shadow DOM，导致浏览器工具无法与复杂的 Web 组件（如 Salesforce）进行交互。
  - **状态**：已有修复方案，见 PR [#1103](https://github.com/moltis-org/moltis/pull/1103)（替代方案，代码更优）和 [#1100](https://github.com/moltis-org/moltis/pull/1100)。
- 🟢 **低严重：部分本地模型调用浏览器工具失败** (PR 已提交)
  - **问题**：Gemma 4 等小型模型传递显式 `null` 导致序列化失败。
  - **状态**：已提报并修复于 PR [#1098](https://github.com/moltis-org/moltis/pull/1098)。

## 6. 功能请求与路线图信号
综合今日 Issues 与 PRs，Moltis 的演进路线图展现出以下明确信号：
1. **Multimodal (多模态本地化)**：Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) 指明了下一步可能集成更轻量、更快的本地语音处理管线。
2. **Omnichannel (全渠道通信)**：Issue [#1101](https://github.com/moltis-org/moltis/issues/1101) 提出的 SMS 和 LINE 集成，结合正在进行的 Telegram 体验优化（PR [#1099](https://github.com/moltis-org/moltis/pull/1099)），表明项目正致力于打造全平台的 AI Agent 基座。
3. **Next-Gen Web Automation (次世代浏览器操控)**：解决 Shadow DOM 和内存占用问题，暗示项目在 RPA 及网页数据抓取领域的野心。

## 7. 用户反馈摘要
从今日的 Issue 提交可以看出真实用户的核心反馈：
- **认可度极高**：用户对项目整体架构表示认可。
- **痛点明确**：对于运行开源小模型（如 Gemma 4）的开发者来说，格式容错机制依然需要加强；对于企业级用户，操作复杂企业级 SaaS 网页（如 Salesforce）是刚需，必须突破前端组件的限制。
- **场景拓宽**：用户已不再满足于简单的网页对话，而是将目光投向了 LINE/短信等非结构化通信渠道及超低延迟的语音流。

## 8. 待处理积压
基于今日数据，提醒项目维护团队关注以下事项：
- **PR 合并瓶颈**：当前有 **5 个活跃 PR 待合并**（其中包含多个核心 Bug 修复）。建议优先 Review 并 Merge 关于本地模型参数兼容性的 PR [#1098](https://github.com/moltis-org/moltis/pull/1098)，以便尽快发布 Patch 版本。
- **PR 冲突整合**：关于 Shadow DOM 的修复存在两个 PR（[#1100](https://github.com/moltis-org/moltis/pull/1100) 和 [#1103](https://github.com/moltis-org/moltis/pull/1103)），作者相互关联。建议维护者引导合并，避免分支碎片化。
- **新需求等待确认**：FunASR 的集成需求 ([Issue #1102](https://github.com/moltis-org/moltis/issues/1102)) 极具价值，需核心团队尽快评估技术可行性并打上 `label`，以吸引社区开发者参与贡献。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 2026-06-05 CoPaw (QwenPaw) 项目动态日报。

---

# CoPaw (QwenPaw) 项目动态日报 (2026-06-05)

## 1. 今日速览
CoPaw (QwenPaw) 项目在过去24小时内保持了**极高的社区活跃度与开发节奏**。项目共处理了 24 条 Issue（其中 13 条被关闭）和 25 条 PR（其中 15 条被合并或关闭），显示出维护者高效的需求吞吐和代码审查能力。今日核心进展集中在新版本 `v1.1.11-beta.1` 的发布、MCP 工具命名校验的严重 Bug 修复，以及底层异步 I/O 和测试覆盖率基础设施的显著增强。整体来看，项目正处于快速迭代期，开发者社区对桌面端、渠道接入（飞书/钉钉）以及上下文管理的关注度正在急剧上升。

## 2. 版本发布
- **[Release] v1.1.11-beta.1** ([查看详情](https://github.com/agentscope-ai/QwenPaw/releases))
  - **更新内容**：
    1. 修复了 `ProviderManager` 中 `get_model_input_length` 的回退逻辑 ([PR #4827](https://github.com/agentscope-ai/QwenPaw/pull/4827))。
    2. 重构了定时任务模块，禁用了 `agent` 类型 cron 任务的气泡推送，减少冗余通知 ([PR #4803](https://github.com/agentscope-ai/QwenPaw/pull/4803))。
  - **迁移/升级注意事项**：依赖脚本升级的用户需留意版本号变更，暂无破坏性变更。

## 3. 项目进展
今日项目在 Bug 修复、性能优化和周边生态建设上迈出了坚实的一步，多项重要 PR 被合并：
- **工具调用与协议修复**：合并了针对 MCP 工具名的重写修复，解决了因包含 `.` 等字符导致 OpenAI API 校验失败的阻断性问题 ([PR #4958](https://github.com/agentscope-ai/QwenPaw/pull/4958))。同时修复了渠道消息合并时 ACL 签名丢失的安全隐患 ([PR #4925](https://github.com/agentscope-ai/QwenPaw/pull/4925))。
- **性能与基础设施**：文件读写全面转向非阻塞的 `aiofiles`，大幅降低 I/O 对事件循环的阻塞 ([PR #4954](https://github.com/agentscope-ai/QwenPaw/pull/4954))。CI 测试环境从 Python 3.10 升级至 3.13，覆盖率收集速度提升 30-50% ([PR #4952](https://github.com/agentscope-ai/QwenPaw/pull/4952))。
- **渠道与前端**：合并了 QQ 频道的二维码扫码授权特性 ([PR #4848](https://github.com/agentscope-ai/QwenPaw/pull/4848))，以及飞书交互卡片的内容提取重构 ([PR #4879](https://github.com/agentscope-ai/QwenPaw/pull/4879))。
- **前端测试里程碑**：完成了前端常量、上下文、布局等核心模块的 100+ 个单元测试用例补充 ([PR #4332](https://github.com/agentscope-ai/QwenPaw/pull/4332))。

## 4. 社区热点
- **[Issue #4644] 控制台工具调用显示延迟** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/4644))：该 Bug 报告引起了**高达 20 条的评论**探讨。用户反馈在使用网页控制台时，除 `read_file` 外的其他工具调用经常不实时显示，需手动刷新。这反映了前端 SSE/Websocket 推送机制在高频工具调用场景下可能存在的渲染竞态条件。
- **[Issue #4960] 桌面版局域网访问受限** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/4960))：用户希望将桌面版作为局域网 Agent 节点供手机访问，但即便配置了防火墙和白名单仍被拒绝。这暴露出 CoPaw 桌面版在作为“Server”模式运行时的网络监听绑定 (`0.0.0.0` vs `127.0.0.1`) 策略不够明朗。
- **[Issue #3891] DeepSeek 缓存命中优化诉求** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/3891))：用户深度剖析了 DeepSeek API 缓存未命中带来的成本成倍增加问题，指出 CoPaw 的 System Prompt 构造方式有 5% 的优化空间。此类关于 Token 计费优化的深度讨论越来越受开发者关注。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在上下文压缩和显示兼容性上，部分已修复：
1. **[严重] /compact 指令导致上下文崩溃**：
   - **现象**：消息内容包含混合类型（如字符串与字典混合）时，触发 `'str' object has no attribute 'get'` 报错，导致上下文压缩彻底失败 ([Issue #4953](https://github.com/agentscope-ai/QwenPaw/issues/4953), [Issue #4956](https://github.com/agentscope-ai/QwenPaw/issues/4956))。
   - **状态**：已定位，等待核心代码合并。
2. **[中等] 模型参数覆盖失效** ([Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937))：在接入超长上下文模型（如 512K 的 MiniMax M3）时，`/compact` 仍强用 128K 默认值。结合最新发布的 `ProviderManager fallback` 补丁，该问题有望在近两日得到修复。
3. **[低] LaTeX 公式渲染异常** ([Issue #4959](https://github.com/agentscope-ai/QwenPaw/issues/4959))：前端 Markdown 渲染库对特定 LaTeX 语法解析失败。

## 6. 功能请求与路线图信号
社区提出了一系列旨在提升交互体验的功能请求，部分已进入 PR 阶段：
- **本地沙箱隔离**：用户提出集成 OpenSandbox，确保 Agent 执行未知 Shell 命令时的宿主机安全 ([Issue #4951](https://github.com/agentscope-ai/QwenPaw/issues/4951))。目前已有对应的初步实现 PR ([PR #4934](https://github.com/agentscope-ai/QwenPaw/pull/4934))，预计将在评估安全性后合并。
- **上下文 Token 水位可视化**：多位用户强烈要求在前端界面显示当前会话的 Token 消耗及上下文压缩水位线 ([Issue #4782](https://github.com/agentscope-ai/QwenPaw/issues/4782), [Issue #4767](https://github.com/agentscope-ai/QwenPaw/issues/4767))。维护者已提交相关 PR ([PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433))，包含悬浮的 Token 消耗徽章，预计下个版本上线。
- **Slash 指令自动补全**：用户希望输入 `/` 时能自动关联出可用的 Skills ([Issue #4796](https://github.com/agentscope-ai/QwenPaw/issues/4796))，这将大幅提升 Web 端的操作效率。

## 7. 用户反馈摘要
从近期 Issue 提炼出以下典型用户画像与痛点：
- **痛点：文件输出闭环缺失**：用户反馈 Agent 生成 Word/PPT 后，没有快捷打开按钮，需要自己去磁盘目录翻找 ([Issue #4786](https://github.com/agentscope-ai/QwenPaw/issues/4786))。
- **痛点：Agent 执行阻断机制缺失**：当 Agent 在后台持续执行 Tool 错误时，用户发送新消息无法将其打断，只能被动等待超时 ([Issue #4961](https://github.com/agentscope-ai/QwenPaw/issues/4961))。
- **场景：作为中枢接入多种 IM**：大量用户在尝试将 CoPaw 接入飞书、钉钉、QQ 甚至微信。对渠道鉴权（如扫二维码授权）、跨用户消息防串扰 ([PR #4932](https://github.com/agentscope-ai/QwenPaw/pull/4932)) 提出了极高要求。

## 8. 待处理积压
以下重要 Issue/PR 虽有活跃讨论，但长期未被合并或解决，建议核心团队关注：
- **[PR #4669] Tauri 桌面端自动更新** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4669))：已挂起 10 天，对于改善桌面版体验至关重要。
- **[PR #4622] DataPaw 数据分析插件** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4622))：提供 12 个 BI 技能的重量级开源插件，已等待 Review 14 天。
- **[PR #4900] 解耦插件加载与 Agent 启动** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4900))：旨在解决打包后的 Windows 桌面版因 pip 超时导致启动失败的问题，影响大量 Windows 用户基线体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-05)

**分析数据源**: github.com/qhkm/zeptoclaw
**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

### 1. 今日速览
ZeptoClaw 项目在过去 24 小时内处于**“依赖自动更新、业务静默”**的典型维护期。项目今日无新增 Issues、无合并的 Pull Requests，也无新版本发布。活跃度完全由 `dependabot[bot]` 贡献，共产生 16 个待处理的依赖升级 PR。这表明项目当前的重点在于保持技术栈的现代性与安全性，核心业务逻辑处于稳定迭代或暂歇阶段，整体项目健康度良好，但需注意人工 Review 的响应速度，避免 PR 积压。

### 2. 版本发布
无。今日未发布任何新版本。

### 3. 项目进展
今日**无人工参与的业务 PR 被合并或关闭**，项目在核心业务功能上无明显推进。

但 `dependabot[bot]` 集中提交了 **16 个依赖更新 PR**，为项目底层基建做好了准备。主要进展体现在以下技术栈的升级上：
*   **Rust 核心生态**: 异步运行时 `tokio` (1.52.1 -> 1.52.3)、序列化 `serde_json` (1.0.149 -> 1.0.150)、HTTP 中间件 `tower-http` (0.6.10 -> 0.6.11) 等。
*   **前端与文档站点**: 框架 `react` 升级至 19.2.6，`astro` 文档站点升级至 6.3.7，CSS 框架 `tailwindcss` 升级至 4.3.0。
*   **CI/CD 与容器化**: Docker 基础镜像 `rust` 升级至 1.96-slim-trixie，GitHub Actions 中 `docker/login-action`、`codecov` 等动作组件均进行了小版本迭代。

*(注：以上 16 个 PR 均处于 OPEN 状态，等待维护者审核合并。)*

### 4. 社区热点
今日无社区讨论。所有动态均为机器人自动触发，0 条人工评论，0 个 Reactions。目前无法从数据中提取社区热议方向。

### 5. Bug 与稳定性
今日无用户或开发者报告任何 Bug、崩溃或回归问题。项目运行平稳，配合大量的依赖安全/bugfix 更新（如 Tokio 的补丁版本），系统基础稳定性正在得到进一步巩固。

### 6. 功能请求与路线图信号
今日未收到任何新功能请求。从依赖更新的侧面可推测，项目文档体系（Astro）、前端控制面板（React + Tailwind）及核心底层（Rust + Tokio）均在保持高频的技术栈同步，这可能暗示项目处于大版本发布前的基建维护期。

### 7. 用户反馈摘要
由于今日未产生任何 Issue 评论或 PR 反馈，暂无真实的用户痛点或使用场景数据可供提炼。

### 8. 待处理积压
当前项目面临最大的挑战是 **依赖升级 PR 的积压**。过去 24 小时内新增了 16 个待合并的 PR，且全部未经过人工 Review。

建议维护者优先关注并处理以下包含核心底层和 CI/CD 关键环节的 PR，以避免后续合并冲突：

1. **Rust 基础镜像大版本升级**:
   👉 [PR #613](https://github.com/qhkm/zeptoclaw/pull/613) `chore(deps): bump rust from 1.95-slim-trixie to 1.96-slim-trixie`
   *(注: 编译器版本跨越，需重点关注编译兼容性与最终产物性能)*
2. **前端框架依赖同步**:
   👉 [PR #616](https://github.com/qhkm/zeptoclaw/pull/616) `chore(deps): bump react and @types/react in /panel`
3. **异步运行时关键补丁**:
   👉 [PR #623](https://github.com/qhkm/zeptoclaw/pull/623) `chore(deps): bump tokio from 1.52.1 to 1.52.3`

*提醒: 长时间不合并大量 dependabot 的 PR 容易导致分支依赖冲突（尤其是 npm 前端包和 Cargo 锁文件）。建议维护者近期安排集中 Review 并触发 CI 流水线验证。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
ZeroClaw 项目在过去 24 小时内保持了**极高的活跃度与健康度**。虽然今日无新版本发布，但社区共产生了 34 条 Issue 更新（新开/活跃 29 条，关闭 5 条）和 50 条 PR 更新（待合并 30 条，合并/关闭 20 条）。项目重心目前明显聚焦于 **Web 网关体验优化、跨平台（特别是 Windows）稳定性修复，以及安全架构的底层重构**。多名核心贡献者提交了大量修复与功能改进，显示项目正在为即将到来的 `v0.8.0` 稳定版进行密集的打磨与排雷。

## 2. 版本发布
**无新版本发布。**
项目当前正处于 `v0.8.0` 发布前的密集准备阶段（见 [Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)），主要精力集中在修复阻断性 Bug 和冻结核心架构变更。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，多个关键进展值得关注：

*   **架构与配置重构：** 合并了 Ollama 提供商的工具调用修复（[PR #7095](https://github.com/zeroclaw-labs/zeroclaw/pull/7095)），这引发了对 `temperature` 参数传递的连锁修复。为了支持多模型切换，底层 API 签名发生了变更。
*   **成本优化路由：** 关闭了旨在降低频道回复意图分类成本的特性 PR（[PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945)），允许使用廉价模型（如 `qwen3.6-plus`）来处理日常意图分类，大幅降低生产环境运行成本。
*   **文档与分发支持：** 增加了 Podman 与 systemd quadlet 的部署文档（[PR #7114](https://github.com/zeroclaw-labs/zeroclaw/pull/7114)），并初步尝试引入 FreeBSD 移植支持（[PR #7217](https://github.com/zeroclaw-labs/zeroclaw/pull/7217)）。

## 4. 社区热点
今日讨论热度最高、最具代表性的议题集中在**桌面端交互、安全控制和多智能体协议**上：

*   **桌面级 Computer-use 支持**（[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)，5 条评论）：用户呼吁实现类似 OpenAI Codex 的屏幕截图与鼠标键盘控制能力。这反映出用户希望 ZeroClaw 从单纯的终端/聊天智能体向“全系统自动化操作员”演进。
*   **A2A (Agent-to-Agent) 协议支持**（[Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)，5 条评论，👍7）：作为点赞最多的 Issue，社区对与其他智能体框架（如 NanoClaw, OpenClaw）实现原生 HTTP 互通的需求极为迫切。
*   **高危 Shell 命令的确认机制**（[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)，2 条评论）：引入了 Claude Code 风格的 `allow/ask/deny` 策略。随着 ZeroClaw 权限变大，用户对“安全刹车”机制的需求日益强烈。

## 5. Bug 与稳定性
今日报告了大量缺陷，部分直接阻断了用户工作流，目前社区已迅速做出响应并提交了针对性 Fix PR：

### 🔴 严重 (S1 - Workflow blocked)
*   **Windows 双引号解析错误**（[Issue #7083](https://github.com/zeroclaw-labs/zeroclaw/issues/7083)）：导致包含双引号的任何 Shell 命令在 Windows 上直接失败。**Fix PR:** 已有针对 Windows 环境缺失变量和执行的全面修复（[PR #7214](https://github.com/zeroclaw-labs/zeroclaw/pull/7214)）。
*   **TUI 界面假死**（[Issue #7125](https://github.com/zeroclaw-labs/zeroclaw/issues/7125)）：当守护进程断开时，TUI (`zerocode`) 会完全冻结。**Fix PR:** 重构了事件循环并实现了优雅重连（[PR #7158](https://github.com/zeroclaw-labs/zeroclaw/pull/7158)）。

### 🟠 显著降级 (S2 - Degraded behavior)
*   **Web UI 清除历史无效**（[Issue #7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126)）：点击 "Clear all" 仅清除前端，刷新后消息恢复。**Fix PR:** ([PR #7222](https://github.com/zeroclaw-labs/zeroclaw/pull/7222)) 彻底清除了后端持久化会话。
*   **可观测性数据泄漏至聊天界面**（[Issue #7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151)）：WebSocket 将工具调用监控数据错误地发送给前端，导致满屏 "unknown" 卡片。**Fix PR:** 阻断了无 Session ID 的事件广播（[PR #7221](https://github.com/zeroclaw-labs/zeroclaw/pull/7221)）。
*   **Ollama 编译回归**（[Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)）：由于前序合并导致构建失败。**Fix PR:** 开发者迅速提交了类型转换修复（[PR #7224](https://github.com/zeroclaw-labs/zeroclaw/pull/7224), [PR #7213](https://github.com/zeroclaw-labs/zeroclaw/pull/7213)）。

## 6. 功能请求与路线图信号
从近期的 RFC 和特性请求来看，ZeroClaw 正在为 `v0.9.0` 甚至更远的未来布局：

*   **安全架构重构确认 (`v0.9.0` 路线图)：** 核心贡献者提出了将安全执行层抽离为可插拔提供商接口的 RFC（[Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)），以及支持 OIDC 认证提供商（[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)）。这意味着 ZeroClaw 将具备企业级多租户安全能力。
*   **Web 网关体验拉齐：** 缺失的 Web 聊天文件上传功能已被提上日程（[Issue #7138](https://github.com/zeroclaw-labs/zeroclaw/issues/7138)），并且今天已经有了内置斜杠命令（如 `/clear`, `/model`）的 Web 端支持 PR（[PR #7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223)），使得 Web 端体验正式对齐 TUI 端。

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提取出以下典型用户画像与反馈：
*   **重度的多平台部署需求：** 有用户反馈仓库体积过于庞大（[Issue #7211](https://github.com/zeroclaw-labs/zeroclaw/issues/7211)），反映出开发者在克隆和 CI/CD 构建时的痛点，维护者已在考虑将 i18n 文件移至子模块（[Issue #7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)）。
*   **Slack 频道深度集成者的困境：** 企业用户在使用 Slack 接入时，遇到了智能体因反复调用相同命令而耗尽迭代次数的“死循环”问题（[Issue #7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)），暴露了模型在缺乏视觉反馈时的上下文迷失。同时用户强烈渴望在 Slack 中看到“输入中”的生命周期状态（[Issue #7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113)）。
*   **Web 体验的细节不完善：** 用户对 Web 端时间戳被渲染进气泡（[Issue #7157](https://github.com/zeroclaw-labs/zeroclaw/issues/7157)）和缺少多语言翻译键（[Issue #7139](https://github.com/zeroclaw-labs/zeroclaw/issues/7139)）提出了批评，维护者响应迅速，已提交前端翻译隔离机制修复（[PR #7219](https://github.com/zeroclaw-labs/zeroclaw/pull/7219)）。

## 8. 待处理积压
以下重要问题目前处于 `blocked` 或长期未解决状态，需要项目维护层重点关注：

*   **丢失的 153 次代码提交：** 此前因紧急回滚导致的大量代码合并丢失问题（[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)）目前标记为 `in-progress` 但仍需持续追踪，以防止功能回归。
*   **LSP 支持停滞：** 编程语言服务器（LSP）的集成请求（[Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)）目前处于 `blocked` 状态，阻碍了 ZeroClaw 成为硬核开发工具的进程。
*   **多智能体发现机制尚未落地：** A2A 协议的基础设施（[Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)）和多实例发现机制的 RFC（[Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)）目前仍处于架构讨论阶段，距离实操仍有距离。

</details>