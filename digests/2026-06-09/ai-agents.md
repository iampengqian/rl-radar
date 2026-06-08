# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 494 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 22:28 UTC

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

# OpenClaw 项目动态日报 (2026-06-09)

> 数据来源：github.com/openclaw/openclaw | 分析周期：过去 24 小时

## 1. 今日速览
过去 24 小时内，OpenClaw 项目保持了**极高的社区活跃度与健康运转状态**。项目共处理了 500 条 Issues（新增/活跃 447，关闭 53）和 494 条 PR（待合并 335，合并/关闭 159），显示核心团队正在稳步推进大量社区贡献与系统优化。项目刚刚发布了 `v2026.6.5-beta.3` 版本，主要聚焦于底层通道协议（MCP）和 QQ 机器人的内容安全过滤修复。总体而言，项目正处于功能迭代与稳定性打磨并重的快速演进期。

## 2. 版本发布
今天发布了 1 个新版本：
- **[`v2026.6.5-beta.3`](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.3)**
  - **核心更新**：修复了 QQ 机器人原生交付通道的问题。现在 QQBot 会在发送前自动剥离模型的推理/思考脚手架（如 `<thinking>` 标签），防止原始思考内容泄漏到频道回复中（关联 [#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)，感谢 @openperf）。
  - **MCP 协议增强**：修复了 MCP 工具返回结果的类型转换问题，强制规范了 `resource_link`, `resource`, `audio` 以及畸形图像格式的处理。
  - **迁移注意**：此次为 Beta 版本，主要面向集成测试通道，建议 QQ 机器人及重度依赖 MCP Tools 的用户优先验证。

## 3. 项目进展
今日共有 159 个 PR 被合并或关闭，项目在**底层运行时、多渠道适配和安全性**方面取得了关键进展：
- **Agent 执行与并发控制**：[`#89040`](https://github.com/openclaw/openclaw/pull/89040) 彻底重写了 `embedded_run` bootstrap-context 的文件 I/O 逻辑，解决了因同步读取导致的事件循环阻塞（14-22秒），大幅降低了长任务场景下的消息丢失率。
- **Cron 任务健壮性**：核心贡献者提交了多个 PR 修复 Cron 调度问题。[`#91499`](https://github.com/openclaw/openclaw/pull/91499) 保留了计划任务的工具策略，而 [`#85249`](https://github.com/openclaw/openclaw/pull/85249) 修复了隔离执行器中的未定义错误。
- **多模态与渠道适配**：[`#83988`](https://github.com/openclaw/openclaw/pull/83988) 大幅优化了 Telegram 的 TTS 体验，解决了文本被“先发后删再替换为语音”的视觉抖动（churn）问题；[`#91408`](https://github.com/openclaw/openclaw/pull/91408) 引入了 ACP 绑定支持，允许外部 Agent 运行时直接处理 Telegram 私聊消息。
- **安全性合规**：[`#91340`](https://github.com/openclaw/openclaw/pull/91340) 阻止了 Claude CLI 默认使用 `bypassPermissions` 的高危行为，强制将其纳入 OpenClaw 的 session 级安全策略管控。

## 4. 社区热点
当前社区讨论最激烈的问题集中在**模型兼容性、架构一致性与内容泄漏**：
- **模型兼容性阻断**：[`Issue #90083`](https://github.com/openclaw/openclaw/issues/90083)（15条评论）。在升级至 `2026.6.1` 后，调用 OpenAI `gpt-5.4` 和 `gpt-5.5` 时报 `invalid_provider_content_type` 错误。这反映了底层传输层与最新大模型 API 规范之间存在脱节，严重影响核心推理功能。
- **架构规范请求**：[`Issue #48788`](https://github.com/openclaw/openclaw/issues/48788)（18条评论）。虽然修复了飞书 UTF-8 编码问题，但社区指出需要建立**集中的文件名编码中心化组件**，以一劳永逸地解决多区域（Shift-JIS, GB18030等）乱码问题。
- **严重内容泄漏**：[`Issue #32473`](https://github.com/openclaw/openclaw/issues/32473)（17条评论）和 [`Issue #44905`](https://github.com/openclaw/openclaw/issues/44905)（10条评论）。用户广泛抱怨 Control UI 要求强制 HTTPS，以及 Discord 频道直接将底层工具调用（如 `memory_search` 的 JSON 参数和内部 Commentary）发送给最终用户，存在极大的隐私与产品双杀风险。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键缺陷，部分已有 PR 修复：
- **P0/P1 核心功能损坏**：
  - [`Issue #32296`](https://github.com/openclaw/openclaw/issues/32296)（14条评论）：Agent 会话上下文混乱，回复的是上一轮对话而不是当前问题。状态：无修复 PR，高优等待官方介入。
  - [`Issue #90083`](https://github.com/openclaw/openclaw/issues/90083)：GPT-5.4/5.5 推理调用失败。
- **会话与内存状态丢失**：
  - [`Issue #48573`](https://github.com/openclaw/openclaw/issues/48573)（12条评论）：僵尸子 Agent 泄露，父代理终止后子代理状态依然残留。
  - [`Issue #43747`](https://github.com/openclaw/openclaw/issues/43747)（9条评论）：内存管理极度混乱，不同用户的底层向量存储逻辑不一致。
- **已提交修复的回归问题**：
  - 环境变量目录嵌套 Bug（[`Issue #45765`](https://github.com/openclaw/openclaw/issues/45765)，PR 已链接）。
  - 硬编码工作路径导致的灾难性数据错乱（[`Issue #51429`](https://github.com/openclaw/openclaw/issues/51429)，PR 已链接）。
  - Cron 任务的幻觉输出（[`Issue #49876`](https://github.com/openclaw/openclaw/issues/49876)）。

## 6. 功能请求与路线图信号
从近期的高互动特性请求中，可以观察到项目下一阶段可能重点演进的方向：
- **精细化网关与模型路由**：[`Issue #42475`](https://github.com/openclaw/openclaw/issues/42475) 呼吁在网关层面实现“单 Agent 独立算力/成本预算拦截”，这是企业级部署的刚需；[`Issue #43260`](https://github.com/openclaw/openclaw/issues/43260) 提出支持在 `SKILL.md` 中声明使用的模型，以实现技能级的最优模型路由。
- **社区技能与生态建设**：[`Issue #50090`](https://github.com/openclaw/openclaw/issues/50090) 深入探讨了 ClawHub 目前的困境，呼吁建立更完善的社区 Skill 开发生态。
- **可观测性增强**：[`Issue #50291`](https://github.com/openclaw/openclaw/issues/50291) 建议在 Plugin Hooks 中注入 trace 上下文，结合近日合入的 watchdog PR，预示项目正在构建企业级的全链路追踪能力。
- **界面体验改进**：[`Issue #42840`](https://github.com/openclaw/openclaw/issues/42840) 请求在 UI 中原生支持 LaTeX 公式渲染，获得最高 5 个 👍，反映了技术/科研用户的强烈诉求。

## 7. 用户反馈摘要
- **痛点：多渠道接入的边缘成本极高**：用户在集成 Telegram、Discord、飞书等渠道时，极易遇到流式输出丢字（[Issue #88929](https://github.com/openclaw/openclaw/issues/88929)）、富媒体丢失（[Issue #41744](https://github.com/openclaw/openclaw/issues/41744)）等问题，多通道适配依然是 OpenClaw 的阿喀琉斯之踵。
- **痛点：缺乏可靠的安全边界**：安全研究人员指出（[Issue #45740](https://github.com/openclaw/openclaw/issues/45740)），`gh-issues` 技能将未经验证的外部Issue正文直接作为 Prompt 注入，存在极大的 Prompt Injection 风险。
- **满意点：官方响应迅速**：多位用户在评论区表示，针对最新版引入的 Node 23 ABI 崩溃（[PR #90035](https://github.com/openclaw/openclaw/pull/90035)）和 Cron 超时问题，核心团队在短时间内不仅给出了复现路径，还快速合并了修复补丁，显示了健康的维护状态。

## 8. 待处理积压
- [`Issue #43367`](https://github.com/openclaw/openclaw/issues/43367)（10条评论）：**多 Agent 并发协作不稳定**，引发会话锁失效、Config 覆盖等问题。自 3 月 11 日提出至今未获官方实质性回应，严重阻碍了 OpenClaw 在自动化集群场景下的落地。
- [`Issue #50090`](https://github.com/openclaw/openclaw/issues/50090)（15条评论）：ClawHub 生态架构改进方案，已停滞近 3 个月，等待产品层决策。
- [`Issue #48920`](https://github.com/openclaw/openclaw/issues/48920)（7条评论）：**官方文档严重超前于正式发布版本**，导致用户按最新文档配置（如 `IsolatedSessions`）时频繁报错。强烈建议团队同步文档与主分支的发版节奏。

---

## 横向生态对比

以下是基于 2026 年 6 月 9 日各开源项目动态生成的 AI 智能体与个人 AI 助手生态横向对比分析报告。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话交互”向“全渠道多模态分发”与“企业级安全可控”跨越的关键重构期**。项目间的技术壁垒正在加深，底层架构（如 MCP 工具协议、上下文压缩、跨实例消息总线）的打磨成为主旋律。同时，**IM 渠道（微信、企微、飞书、Telegram、Discord）的极简接入与极高可用性**已成为决定项目生死的核心护城河，而多模型路由（GPT-5.x、DeepSeek、本地 vLLM）、沙箱隔离及 RPA（计算机控制）能力则是通向下一阶段自主智能体的入场券。

### 2. 各项目活跃度对比
*(注：活跃度评估基于 Issue/PR 更新量、合并率与官方响应速度综合得出)*

| 项目名称 | 今日活跃 Issue 数 | 今日活跃 PR 数 | 新版本发布 | 健康度与迭代状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** | **494** (合159) | `v2026.6.5-beta.3` | **极高**。社区庞大，官方响应极快，处于功能快速迭代与边缘 Bug 收敛期。 |
| **CoPaw (QwenPaw)** | **48** | **44** (合23) | 无 | **高**。国内生态核心，国内 IM 渠道打磨频繁，正经历底层架构重构。 |
| **IronClaw** | **34** | **50** (合24) | 无 | **高**。正处于核心 API “Reborn”重构的密集交付期，PR 提交频繁。 |
| **Hermes Agent** | **50** | **50** (合5) | 无 | **高/中等**。社区讨论极热，但底层安全与资源泄漏修复压力大，合并率待提升。 |
| **ZeroClaw** | **50** | **50** (合11) | 无 | **高**。模块化解耦和 RFC 提案密集，正处于向 v0.9.0 迈进的架构升级期。 |
| **NanoBot** | 8 | 36 (合15) | 无 | **优秀**。重心明确（语音转录与安全），代码合入高效，代码库极为健康。 |
| **PicoClaw** | 3 | 18 (合9) | Nightly Build | **优秀**。轻量级守卫，PR 合并率达 50%，主攻防御性编程与跨平台支持。 |
| **LobsterAI** | 0 | 18 (合18) | 无 | **优秀**。桌面端体验深度打磨，大批量高质量 PR 集中合入，无新 Issue 报告。 |
| **NanoClaw** | 1 | 3 (合2) | 无 | **平稳**。活动度低，正向企业级 Docker 容器安全与隔离机制探索。 |
| **TinyClaw** | 0 | 1 (合0) | 无 | **平稳**。处于维护状态，焦点集中于原生模块编译等开发者体验优化。 |
| **NullClaw / Moltis / ZeptoClaw**| 0 | 0 | 无 | 静默 |

### 3. OpenClaw 在生态中的定位
- **绝对体量与生态枢纽**：OpenClaw 毫无疑问是当前生态的**核心参照系与流量入口**（单日近千条 PR/Issue 交互）。它扮演着类似“AI 领域的 Spring Boot”的角色，不仅自身提供完整的 Agent 运行时，还制定了如 MCP 等底层协议规范。
- **大而全的集成网关**：相较于 NanoBot/PicoClaw 的“小而美”，OpenClaw 追求全渠道覆盖。其优势在于对 QQ、Telegram、Discord 等主流平台的极前沿支持（如剥离 QQ 频道的 `<thinking>` 标签）。
- **面临的挑战**：庞大的生态带来了沉重的技术债。与 CoPaw 类似，OpenClaw 陷入了“多通道适配带来的边缘成本极高”的泥潭（如流式丢字、富媒体丢失），同时在**多 Agent 并发协作**（Issue #43367）的复杂场景下表现出了架构瓶颈。

### 4. 共同关注的技术方向
- **内容过滤与脱敏安全（防 Prompt 注入）**：
  - *涉及项目*：OpenClaw, Hermes Agent, ZeroClaw。
  - *诉求*：防止底层推理脚手架（如 `<thinking>`）泄露给 C 端用户（OpenClaw）；阻止外部正文作为 Prompt 直接注入；高熵敏感信息的误杀优化（ZeroClaw）。
- **企业级沙箱与权限隔离**：
  - *涉及项目*：Hermes Agent, NanoClaw, OpenClaw。
  - *诉求*：Agent 工具调用的最小权限原则。NanoClaw 尝试基于 Docker 的网络出口锁死，Hermes Agent 将邮件与 Terminal 权限解耦，OpenClaw 阻止了绕过安全策略的高危行为。
- **消息分流与长文本截断处理**：
  - *涉及项目*：NanoBot, ZeroClaw, PicoClaw。
  - *诉求*：由于 Telegram 等平台对单条消息长度的限制，智能切分代码块和 Markdown 格式而不破坏排版，是目前所有跨平台智能体的刚需。
- **MCP (Model Context Protocol) 生态与基建**：
  - *涉及项目*：OpenClaw, CoPaw, ZeroClaw。
  - *诉求*：MCP 工具的状态管理、进程防泄漏（CoPaw）、资源校验与安全过滤（ZeroClaw、OpenClaw）。

### 5. 差异化定位分析
- **OpenClaw / IronClaw / ZeroClaw**：**AI 编排与生产级网关**。架构复杂，追求多租户、高并发和协议全覆盖。IronClaw 致力于对齐 OpenAI 最新 API 规范，ZeroClaw 侧重 WASI 插件化与本地 RPA 拓展。
- **CoPaw (QwenPaw)**：**本土化企业协同利器**。深度绑定国内企业生态（飞书、企微），利用 AgentScope 底座，核心发力点在于国内业务系统的无缝对接与中文体验。
- **Hermes Agent**：**开发者极客与重度自动化玩具**。设计理念激进（自带 Curator 自动清理技能），UI 追求炫酷，但面临由于环境依赖（如 Node、Python 3.12）导致的“开箱即用”难题。
- **NanoBot / PicoClaw**：**轻量级个人助理与边缘计算节点**。NanoBot 极度专注语音转录与多模态交互体验，PicoClaw 则成功打入 RISC-V/ARM 等开发板极客圈，强调单机低资源消耗。
- **LobsterAI**：**纯粹的多模型桌面 GUI 客户端**。避开复杂的 IM 渠道集成，主攻 PC 端体验、数据本地化迁移与主流模型 API 的“万能网关”接入。

### 6. 社区热度与成熟度
- **成熟稳健型（OpenClaw, LobsterAI, NanoBot）**：具备完善的 CI/CD 和 Bug 修复机制，维护者能对严重漏洞（如 Node 23 ABI 崩溃）实现日内修复。OpenClaw 虽有大量 P0 级 Bug，但庞大的社区兜底了问题定位速度。
- **架构重构期（IronClaw, CoPaw, ZeroClaw）**：社区高度活跃，但也因底层重构引发了连锁反应（如 IronClaw 的 OAuth 登录失效、CoPaw 的 JSON 解析全局崩溃）。这类项目处于**阵痛期**，需警惕将破坏性变更带入生产环境。
- **平缓演进期（PicoClaw, Hermes, NanoClaw 等）**：重心在代码清扫（防御性编程）、文档修补和安装体验优化，处于蓄力或长尾维护阶段。

### 7. 值得关注的趋势信号
1. **“防勒索式”的安全治理来临**：Agent 的自主权正受到严格审视。社区强烈要求为 Shell 执行、文件写入、邮件发送增加“审批流”（如 ZeroClaw 讨论的 `allow/ask/deny` 策略）。**建议开发者**：在新项目设计之初，必须将细粒度的权限审批 UI 嵌入交互链路，而非依赖 Agent 的自觉性。
2. **多模态输入的“前置中心化”**：从 NanoBot 集中合入 4 个语音转录服务商，到 CoPaw 引入独立视觉模型降级，生态正在将多模态的处理从“大模型内部”剥离到“网关端前置处理”。**建议开发者**：不要仅依赖 GPT-5.5 等多模态模型，独立的本地 ASR（如小米 MiMo）或视觉解析管道能极大降低延迟与 Token 消耗。
3. **自动编排从“Cron”向“事件驱动”进化**：由于时序控制极易导致 Agent 幻觉与并发爆炸（OpenClaw 与 ZeroClaw 的 Cron 均爆出严重Bug），通过跨实例消息总线、Webhook 订阅机制来触发 Agent 正成为更优解。**建议开发者**：弱化定时任务的依赖，转向构建基于事件投递的响应式智能体架构。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目动态日报 (2026-06-09)

> 数据来源：[NanoBot (github.com/HKUDS/nanobot)](https://github.com/HKUDS/nanobot) | 分析师：AI 智能体与个人 AI 助手开源项目分析组

---

### 1. 今日速览
过去 24 小时内，NanoBot 项目继续保持高度活跃的开发势头，共处理了 **8 条 Issues（4 开/4 关）** 和高达 **36 条 PRs（21 条待合并/15 条已合并关闭）**。项目当前的重心明显向**底层架构健壮性（安全性修复、上下文压缩治理）**和**多模态/语音转录生态扩展**倾斜。尽管今日无新版本发布，但大量核心 Bug 修复和架构优化 PR 的集中落地，表明项目正在为下一个重要版本的发布进行代码夯实和功能收敛。

### 2. 版本发布
**无新版本发布。** 
项目目前处于高频代码合并与测试完善阶段，预计正在积蓄用于 Minor 或 Major 版本发布的更新。

### 3. 项目进展
今日共有 15 个 PR 被合并或关闭，显著推动了项目在**语音转录生态、安全合规、会话稳定性**三个维度的进展：

*   **语音转录生态全面扩展**：
    *   `#4232` [CLOSED] feat(transcription): 将语音转录从频道级设置提升为全局共享能力，并全面适配 WebUI 和桌面端。
    *   `#4224` [CLOSED] feat(transcription): 新增 AssemblyAI 作为转录提供商。
    *   `#4175` [CLOSED] feat(transcription): 新增支持小米 MiMo ASR (`mimo-v2.5-asr`)，进一步增强了中文语音识别能力。
    *   `#4113` [CLOSED] feat(transcription): 新增 OpenRouter 转录提供商支持。
*   **安全性与执行边界加固**：
    *   `#4221` [CLOSED] fix(exec): 阻止通过相对符号链接逃逸工作目录的严重漏洞。
*   **会话历史与稳定性修复**：
    *   `#4219` [CLOSED] fix(session): 修复了在裁剪历史记录前未丢弃孤立工具调用结果导致的异常。
*   **WebUI 基础体验构建**：
    *   `#4235` [CLOSED] feat(webui): 初步在设置界面增加版本号及 PyPI 最新版检查逻辑。

### 4. 社区热点
今日社区的关注点集中在**跨实例协同、上下文压缩机制优化及多模型切换**上：
*   **跨实例消息总线**：PR `#3992` [OPEN] 提出了跨 Agent 实例的消息总线机制，允许运行多个实例互相通信。这标志着 NanoBot 正在从单节点个人助理向多智能体协同网络演进，引发了大量底层架构讨论。
    *   链接：[HKUDS/nanobot PR #3992](https://github.com/HKUDS/nanobot/pull/3992)
*   **智能上下文微压缩**：PR `#4238` [OPEN] 提出了基于上下文实际压力（而非固定计数）来门控微压缩，社区正在评估其对 Agent Runner 性能的深远影响。
    *   链接：[HKUDS/nanobot PR #4238](https://github.com/HKUDS/nanobot/pull/4238)
*   **按会话覆盖模型配置**：Issue `#4253` [OPEN] 用户希望根据隐私需求/任务时效性，在不同会话中灵活切换不同模型预设（如 OpenRouter 与本地 LlamaCpp）。这反映了高级用户对隐私和成本控制的强烈诉求。
    *   链接：[HKUDS/nanobot Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)

### 5. Bug 与稳定性
今日报告并修复了多个关键稳定性及体验 Bug，项目维护者响应极其迅速：

*   **高危：记忆系统状态死循环**
    *   Issue `#4242` [OPEN]：当禁用 `dream.enabled` 时，游标永不前进，导致“近期历史”不断将全部聊天记录注入系统提示词，导致上下文污染和 Token 浪费。
    *   链接：[HKUDS/nanobot Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)
    *   🛠️ **已有修复 PR**：`#4256` [OPEN] 通过强制保持 `MemoryStore` 游标单调递增来修复此问题。
*   **高危：频道永久静默死循环**
    *   PR `#4223` [OPEN]：修复了微信公众号/频道在 session 过期并休眠后，不重新加载状态导致 token 永久失效的严重死循环 Bug。
    *   链接：[HKUDS/nanobot PR #4223](https://github.com/HKUDS/nanobot/pull/4223)
*   **中危：Telegram 渲染格式截断**
    *   Issue `#4250` [OPEN]：长消息在分割时破坏了 Markdown 的代码块标记，导致排版混乱。
    *   链接：[HKUDS/nanobot Issue #4250](https://github.com/HKUDS/nanobot/issues/4250)
    *   🛠️ **已有修复 PR**：`#4257` [OPEN] 重构了 `split_message` 逻辑，使其具备代码块感知能力。
*   **中危：MCP SSRF 校验时序缺陷**
    *   Issue `#4074` [CLOSED]：MCP HTTP/SSE 连接在拒绝 SSRF 之前会尝试本地环回连接。已通过相关安全 PR 关闭。
    *   链接：[HKUDS/nanobot Issue #4074](https://github.com/HKUDS/nanobot/issues/4074)

### 6. 功能请求与路线图信号
通过近期 Issue 提交，可以清晰描绘出项目下一步的演进方向：

*   **WebUI 多模态交互升级**：Issue `#4251` 呼吁在输入框支持直接上传 PDF/图片进行总结和视觉理解，结合近期集中的 Transcription 提供商 PR，**多模态能力（语音+视觉+文档）显然是下一个大版本的硬指标**。
    *   链接：[HKUDS/nanobot Issue #4251](https://github.com/HKUDS/nanobot/issues/4251)
*   **精细化 Token 估算与版本可视化**：PR `#4254` [OPEN] 提出在估算 session prompt token 时应用微压缩逻辑；PR `#4255` [OPEN] 引入了 WebUI 实时版本徽章和更新提示。这些优化极大提升了企业级部署的易用性。

### 7. 用户反馈摘要
*   **痛点：隐私与模型切换的成本博弈**：用户（@rombert）表示需要在云端高速模型与本地低速模型间频繁切换，当前的全局模型配置过于死板。
*   **痛点：代码块分割体验极差**：开发者在 Telegram 频道中反馈长代码回复极易被粗暴截断，破坏了代码的可复制性。
*   **满意度表现**：WebUI 版本提示（Issue #4233）和 Azure API 兼容支持（Issue #4204）均从提出到 PR 合并仅耗时 1-2 天，社区对维护者的高效响应表现出高度认可。

### 8. 待处理积压
目前项目有高达 **21 个 PR 处于待合并（Open）状态**，且部分涉及核心逻辑的重构。建议维护团队重点关注以下积压：

1.  **测试基建与安全边界积压**：由核心贡献者 @yu-xin-c 提交的一系列底层测试（`#4193`, `#3983`）和文件系统读写边界限制（`#4053`）已开启数天，需要尽快 Review 合并以防止合并冲突。
    *   链接：[HKUDS/nanobot PR #4053](https://github.com/HKUDS/nanobot/pull/4053) | [PR #4193](https://github.com/HKUDS/nanobot/pull/4193)
2.  **多智能体协同架构**：`#3992` 的跨实例消息总线是架构级的变更，目前依然 Open，需评估其与现有 Memory/Session 交互的复杂度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-06-09)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去24小时

---

## 1. 今日速览

过去24小时内，Hermes Agent 项目继续保持极高的社区活跃度，共产生 **50 条 Issue 更新**（新开/活跃 43 条，关闭 7 条）和 **50 条 PR 更新**（待合并 45 条，合并/关闭 5 条）。虽然今日无新版本发布，但项目核心开发团队在系统稳定性、安全防护和底层数据库性能优化上投入了大量精力，提交了多个重磅修复 PR。值得注意的是，围绕 Gateway、TUI 组件以及 Skill 自动化管理的 Bug 报告集中涌现，表明近期版本的迭代在引入新特性的同时，边缘场景的稳定性仍面临考验。整体来看，项目处于健康、高速的敏捷迭代期。

---

## 2. 版本发布

**无**。今日（截至发稿）项目未发布新的 Release 版本。大量累积的修复与特性 PR 预计将在经过充分测试后，合并并打包至下一个版本中。

---

## 3. 项目进展

尽管今日合入/关闭的 PR 数量仅有 5 条，但长期活跃的 Open PR 列表中包含了诸多正在推进的关键基础设施改进。以下是推动项目向前迈进的核心进展：

- **安全防御升级**：PR [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) 和 [#35553](https://github.com/NousResearch/hermes-agent/pull/35553) 正在重构底层命令执行逻辑，将 `shell=True` 转换为更安全的 `shlex.split`，并修复了 SSE 投递漏洞。
- **资源泄漏修复**：PR [#36116](https://github.com/NousResearch/hermes-agent/pull/36116) 针对 SQLite 数据库及 WAL 文件句柄（FD）泄漏问题引入了 `close()` 方法，大幅提升了网关和代理在 7x24 小时高并发运行下的稳定性。
- **测试与代码质量**：PR [#36119](https://github.com/NousResearch/hermes-agent/pull/36119) 为 28 个“零断言”测试补充了验证逻辑；PR [#36138](https://github.com/NousResearch/hermes-agent/pull/36138) 涵盖 36 个文件的重构，强化了防回归能力。
- **Docker Matrix 支持**：PR [#42413](https://github.com/NousResearch/hermes-agent/pull/42413) 针对近期热议的 Docker 镜像无法使用 Matrix 网关的问题，通过预装依赖提供了开箱即用的修复方案。

---

## 4. 社区热点

今日社区讨论焦点主要集中在界面体验优化和企业级通讯平台集成上：

- **TUI 界面可读性堪忧**：Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080)（👍 38，评论 24）成为今日最热议题。多位用户吐槽当前的 Midnight、Cyberpunk 等主题虽然炫酷，但衬线字体字号小、对比度低，导致长时间阅读极其困难。这反映了开发者群体对无障碍和可读性设计的强烈诉求。
- **企业办公生态集成需求爆发**：针对 Microsoft Teams 的支持请求（[#9512](https://github.com/NousResearch/hermes-agent/issues/9512)）和相应的 Python 版本不兼容 Bug（[#26083](https://github.com/NousResearch/hermes-agent/issues/26083)）引发热烈讨论。同时，Issue [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) 提出了通过 Graph API 深度接入 Microsoft 365 日历与 To Do 的详细提案。这些信号表明，大量用户正试图将 Hermes Agent 引入重度依赖微软生态的办公工作流中。
- **中文用户群桌面端痛点**：Issue [#41933](https://github.com/NousResearch/hermes-agent/issues/41933) 详细记录了国内 Windows 用户在首次配置 Hermes CN Desktop 时，核心工具链（Node.js、ffmpeg等）频繁无法被识别的困境，并附带了完整的 Skill 贡献包。

---

## 5. Bug 与稳定性

今日报告的 Bug 覆盖网关、认证、定时任务、UI 等多个模块。以下按对系统运行的影响程度进行分类：

### 🚨 P2 严重级 (影响核心业务流程与自动化)
- **Skill 自动化引发“误删”与“静默失败”**：
  - [#29912](https://github.com/NousResearch/hermes-agent/issues/29912)：Curator 在归档技能时缺乏验证，可能导致正在运行的核心技能被错误清理。
  - [#42303](https://github.com/NousResearch/hermes-agent/issues/42303)：Cron 任务执行时跳过了 `bump_use`，导致在系统看来这些脚本“未被使用”，进而被当作垃圾清理。
  - [#36845](https://github.com/NousResearch/hermes-agent/issues/36845)：Cron 执行超时后，LLM 兜底逻辑错误地返回了 `ok` 状态，导致生产环境的故障“隐形”。
- **认证与权限阻断**：
  - [#42139](https://github.com/NousResearch/hermes-agent/issues/42139)：Gated 模式下，REST 接口错误拦截了已通过 Cookie 鉴权的请求。
  - [#42362](https://github.com/NousResearch/hermes-agent/issues/42362)：未配置 Discord 白名单时，交互按钮反而提示“未授权”（目前已有相关修复 PR 跟进）。
- **基础设施与部署**：
  - [#42299](https://github.com/NousResearch/hermes-agent/issues/42299)：Docker 后端路径映射冲突，导致媒体文件解析失败（尚无明确 Fix PR）。
  - [#38963](https://github.com/NousResearch/hermes-agent/issues/38963)：Windows 桌面端因找不到 Git 导致启动崩溃。

### ⚠️ P3 次要级 (影响交互体验与特定组件)
- [#42256](https://github.com/NousResearch/hermes-agent/issues/42256) / [#42280](https://github.com/NousResearch/hermes-agent/issues/42280)：桌面端编辑器处理 Excel 和 Word 粘贴内容时格式混乱。
- [#42409](https://github.com/NousResearch/hermes-agent/issues/42409)：桌面端 Artifacts 视图中，所有时间戳均显示为 Unix 纪元（1970年1月），暴露了前端日期构造器的单位转换 Bug。

---

## 6. 功能请求与路线图信号

结合用户提案与开发者 PR，可以透视出项目近期的演进方向：

- **🛡️ Agent 安全与沙箱隔离 (短期内大概率合入)**：
  - **提案**：[#42307](https://github.com/NousResearch/hermes-agent/issues/42307) 建议解耦邮件工具与 Terminal 权限，防范提示词注入。
  - **对应 PR**：[#42410](https://github.com/NousResearch/hermes-agent/pull/42410) 提交了 `memory.background_review_writes` 配置，实现了后台审查 Fork 的写入范围与触发器的解耦；[#36140](https://github.com/NousResearch/hermes-agent/pull/36140) 加强了错误信息中的路径清洗。表明“权限最小化”正在成为核心架构的优化重点。
- **🗃️ 数据持久化与多运行时适配**：
  - **提案**：[#41979](https://github.com/NousResearch/hermes-agent/issues/41979) 提出跨平台 Gateway 接收的文件附件常被静默丢弃，急需持久化方案。
  - **对应 PR**：[#42414](https://github.com/NousResearch/hermes-agent/pull/42414) 专门优化了 Codex 运行时上下文配置的保留与迁移。
- **🌐 国际化 (i18n) 填坑**：
  - Issue [#42267](https://github.com/NousResearch/hermes-agent/issues/42267) 报告了 Gateway 状态通知硬编码英语，绕过了系统的 i18n 配置。这是全球化产品必须扫清的障碍。

---

## 7. 用户反馈摘要

从真实的 Issue 报告和评论中，能够提取出当前用户群最核心的几幅画像：
- **“白嫖”与重度依赖自动化的小型企业主**：依赖 Cron 执行夜间备份、社媒信号抓取。对 Hermes 近期 Curator 的激进归档策略感到苦恼，希望引入类似“保护锁”的机制，防止手动配置的自动化流被系统“自作主张”地清理掉。
- **受困于 Microsoft 生态的职场人**：急迫希望 Hermes 能像接入 Slack/Discord 那样，无缝接入 Teams 办公流。当前由于 Python 3.12 的硬性依赖限制，很多无法升级 Python 版本的部署环境只能“望洋兴叹”。
- **追求“开箱即用”的桌面端用户**：对于需要从底层配置环境变量、安装缺失依赖（如 Windows 上的 Git、ffmpeg，Docker 里的 Matrix 加密包等）感到沮丧，期望官方能提供更完善的引导或开箱即用的安装包。

---

## 8. 待处理积压

- **[#18080] Dashboard 主题可读性问题**：作为今日点赞数和讨论度双高的痛点，目前尚未见到官方 Assignee 介入或提交相关的 UI 修复 PR。强烈建议 UI/UX 团队将其纳入下个迭代的优化重点。
- **[#26083] Python 3.12 阻碍 Microsoft Teams 集成**：该 Bug 直接卡住了无数企业用户的接入进程。目前开发组尚未明确是降低 `microsoft-teams-apps` 依赖要求，还是在 Hermes 层面做兼容性 Hack，需尽快给出路线表态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-06-09 的开源动态日报。基于过去 24 小时的 GitHub 数据，分析报告如下：

---

### 📊 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了**极高的开发活跃度**，共处理了 18 条 PR 更新与 3 条 Issue 动态。今日项目重心明显倾向于**底层稳定性和代码健壮性建设**，多位核心贡献者（尤其是 `chengzhichao-xydt` 和 `SiYue-ZO`）集中清理了大量未校验的类型断言、错误忽略和日志规范化问题。项目顺利推送了 `v0.2.9` 的 Nightly 构建，且 PR 合并率高达 50%（9/18），显示出维护者快速响应和合入代码的敏捷节奏。此外，社区正在积极拓宽渠道边界，已出现针对 Delta Chat 的网关实现。

### 🚀 2. 版本发布
- **[nightly: Nightly Build v0.2.9-nightly.20260608.875cf4a2](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新说明**：基于 `main` 分支的自动化构建。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议谨慎在生产环境中使用。

### 🔧 3. 项目进展
今日共有 9 个 PR 被成功合并/关闭，项目在**防御性编程、多渠道适配和错误处理**方面取得了显著进展：
- **多渠道消息与解析修复**：
  - `wzg-gie` 提交的 [#3052](https://github.com/sipeed/picoclaw/pull/3052) 修复了 Telegram 位置消息被静默忽略的问题，现可将位置坐标转化为文本传入 Agent 管道，提升了多模态交互体验。
  - `trufae` 提交了网关层面的健康检查修复 [#3062](https://github.com/sipeed/picoclaw/pull/3062)（尽管后被关闭/重定向）。
- **代码健壮性大扫除（批量合入）**：
  - `chengzhichao-xydt` 提交的一系列防御性编程 PR 被集中合并，包括：
    - [#3058](https://github.com/sipeed/picoclaw/pull/3058) / [#3057](https://github.com/sipeed/picoclaw/pull/3057) / [#3056](https://github.com/sipeed/picoclaw/pull/3056)：修复了 `webfetch`、`subagent` 和 `tools` 模块中未校验的 Context 与参数类型断言。
    - [#3055](https://github.com/sipeed/picoclaw/pull/3055)：处理了工作目录获取时的静默错误。
- **代码重构与规范化**：
  - [#3051](https://github.com/sipeed/picoclaw/pull/3051)：全面将错误包装从 `%v` 升级为 `%w`，恢复了 `errors.Is/As` 的错误链追踪能力。
  - [#3050](https://github.com/sipeed/picoclaw/pull/3050)：将零散的 `log.Printf` 替换为结构化日志，极大提升了生产环境日志的可检索性。

### 🔥 4. 社区热点
- **最活跃的讨论 Issue**：[#2887 [BUG] .deb version on RISC-V is not functional with OpenAI model](https://github.com/sipeed/picoclaw/issues/2887)
  - **背后诉求**：该 Issue 创建于近一个月前，在过去一天内再次活跃（累计 9 条评论）。用户在 RISC-V 架构的 Debian 环境下使用 GPT-5.4 模型时遇到了功能性阻碍。这反映了 PicoClaw 在非 x86_64 架构（尤其是边缘计算/开发板领域）的用户群体正在增长，但对特定架构的二进制适配或依赖管理仍需加强。
- **新渠道接入探索**：[#3063 feat: add deltachat gateway](https://github.com/sipeed/picoclaw/pull/3063)
  - 社区开发者 `trufae` 发起了引入 Delta Chat 网关的 PR，这表明社区对拓展去中心化通讯协议接入有着强烈兴趣。

### 🐛 5. Bug 与稳定性
今日报告的 Bug 主要涉及多平台兼容性及通讯网关问题，按严重程度排序：
1. **High | Windows 平台 QQ 频道连接失败**
   - **Issue**：[#3015](https://github.com/sipeed/picoclaw/issues/3015)
   - **表现**：Windows 环境下获取 App Access Token 时发生超时，导致网关无法启动。由于影响特定系统下核心用户的连通性，且已有多人确认，优先级应最高。
   - **进度**：暂无关联 Fix PR，但 `SiYue-ZO` 在 [#3061](https://github.com/sipeed/picoclaw/pull/3061) 修复了 Windows 子进程控制台的闪烁问题，可能与此底层调用有关联。
2. **Medium | RISC-V 架构运行兼容性**
   - **Issue**：[#2887](https://github.com/sipeed/picoclaw/issues/2887)
   - **表现**：RISC-V 上的 `.deb` 版本调用 OpenAI 模型异常。已标记为 `stale`，亟待官方排查是否为底层依赖编译缺失。
3. **Low | Telegram 位置消息无响应（已修复）**
   - **Issue**：[#3049](https://github.com/sipeed/picoclaw/issues/3049)
   - **表现**：Agent 对纯位置消息无反应。该 Issue 已关闭，并已由 PR [#3052](https://github.com/sipeed/picoclaw/pull/3052) 完美修复并合入。

### 🗺️ 6. 功能请求与路线图信号
- **多平台支持（Windows 体验优化）**：从 Issue #3015 和 PR #3061 释放的信号来看，PicoClaw 正在致力于修复 Windows 环境作为 GUI 后台运行时的控制台闪烁问题。Windows 桌面端体验正在被重点打磨。
- **通讯协议进一步去中心化**：PR #3063 (Delta Chat) 表明项目正在尝试支持更多基于 Email 协议的去中心化聊天软件，如果该 PR 被合并，将极大丰富其应用场景。
- **Agent 核心引擎稳定性提升**：PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) 正在重构 `pkg/agent` 的重载逻辑，以消除恐慌和阻塞的协程，这是为下一阶段高并发和长时运行奠定基础的关键信号。

### 💬 7. 用户反馈摘要
- **痛点**：
  - **跨平台体验割裂**：部分用户强依赖于 QQ 频道及 Windows 环境，当前网络请求超时导致不可用（#3015）。
  - **多模态处理缺失**：用户期望 AI 能响应地图位置分享等原生应用功能，而非仅限于纯文本处理（#3049，现已修复）。
- **肯定/使用场景**：
  - PicoClaw 正被广泛部署在异构硬件上（如 ARMv7 的树莓派、RISC-V 开发板），表明其在轻量级边缘设备（作为个人 AI 网关）的应用场景非常受欢迎。
  - 用户紧跟最新模型（如 GPT-5.4），说明该项目受众群体具有极强的极客属性和对前沿技术的追求。

### ⚠️ 8. 待处理积压
- **陈旧但严重的架构 Bug**：
  - [#2887 RISC-V 兼容性问题](https://github.com/sipeed/picoclaw/issues/2887)：该问题已悬而未决近一个月，且被自动标记为 `stale`。建议维护者确认是编译工具链问题还是硬编码依赖所致，给边缘计算用户一个明确答复。
- **堆积的待合并 PR（质量与审查压力）**：
  - 目前仍有 9 个 PR 处于 Open 状态，其中大量由 `chengzhichao-xydt` 提交的系统级防御修复（如 [#3053](https://github.com/sipeed/picoclaw/pull/3053), [#3054](https://github.com/sipeed/picoclaw/pull/3054), [#3059](https://github.com/sipeed/picoclaw/pull/3059) 等）亟待合入。建议维护者进行一次集中 Review，以免这些提升稳定性的优秀 PR 发生代码冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-06-09 NanoClaw 项目动态日报：

# 📊 NanoClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
过去24小时内，NanoClaw 项目整体处于**中等偏低但聚焦核心基建**的活跃状态，暂无新版本发布。社区与开发者在今日共更新了 1 个 Issue 和 3 个 Pull Requests，PR 关闭率达 66.6%。今日的动态高度集中在**安全防护机制升级**和**多渠道文件挂载修复**上。这表明项目正处于夯实底层安全与容器编排稳定性的关键阶段，向企业级生产可用性迈进了坚实的一步。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被关闭（其中包含重要的安全机制推进），1 个 PR 处于开启待审核状态：

*   **[CLOSED] 网络出口安全限制机制探索**：PR [#2713](https://github.com/nanocoai/nanoclaw/pull/2713)（作者: omri-maya）。该 PR 引入了一项选择加入的出口网络锁定功能，试图通过 Docker `--internal` 网络将代理容器与外网隔离。尽管该 PR 目前已被关闭，但它展示了项目团队在防止 AI 智能体权限逃逸和网络沙箱隔离方面的积极探索。
*   **[CLOSED] 规范化贡献提交**：PR [#2712](https://github.com/nanocoai/nanoclaw/pull/2712)（作者: juhojeon86）。一个遵循贡献指南的标准 PR，已被顺利接收并关闭，保持了社区贡献的流畅度。

## 4. 社区热点
今日最受关注的议题是围绕 **WhatsApp 集成与文件系统挂载路径** 展开的：
*   **WhatsApp 附件“不可达”问题引发关注**：Issue [#2715](https://github.com/nanocoai/nanoclaw/pull/2715)（作者: jon-ruth）。该问题精准指出了 v2 版本中容器化部署的挂载痛点，直接暴露了多渠道集成场景下的存储架构短板。虽然目前尚无评论，但对于使用 WhatsApp 接入 AI 智能体的企业级用户而言，这是一个极具共性的阻断性问题。

## 5. Bug 与稳定性
今日报告了 1 个影响核心功能的高优 Bug，需重点关注：

*   🔴 **严重**：**WhatsApp 入站媒体文件无法被 Agent 访问**
    *   **Issue**: [#2715](https://github.com/nanocoai/nanoclaw/pull/2715)
    *   **详情**: 在 v2 版本中，WhatsApp 的图像/文档/音频等附件被下载到了 `DATA_DIR/attachments`，但该目录并未挂载到 Agent 容器内。Agent 收到的 `/workspace/attachments/...` 路径在容器内部实际不存在，导致文件读取 100% 失败。
    *   **状态**: **暂无对应的修复 PR**，等待官方认领修复。

## 6. 功能请求与路线图信号
虽然今日没有显式的“功能请求”，但从提交的 PR 中可以洞察到项目近期的演进方向：

*   **强化安全与合规边界**：从 JorellDacasin 提交的开启状态 PR [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) 可以看出，项目正在进行深刻的安全审计。该 PR 一次性修复了四个安全漏洞（包括将 webhook 绑定到本地、弃用伪随机数以防预测攻击等）。
*   **下一版本预期**：综合 PR [#2714]（安全修复）和 PR [#2713]（网络沙箱）的信号，项目的下一个迭代版本**极有可能主打“企业级安全加固”**，提供更细粒度的网络出口控制和更严谨的鉴权机制。

## 7. 用户反馈摘要
从 Issue [#2715](https://github.com/nanocoai/nanoclaw/pull/2715) 的反馈中，可以提炼出当前用户的真实痛点：
*   **容器挂载配置割裂**：用户在接入外部通讯软件（如 WhatsApp）时，深受 Docker 容器卷挂载路径不一致的困扰。用户期望 Agent 所在的容器能“开箱即用”地访问外部传来的媒体文件，而不是遇到底层文件系统映射断层。这说明项目在 `/workspace` 目录的自动映射和状态管理上仍有优化空间。

## 8. 待处理积压
*   ⚠️ **需要立即响应的缺陷**：针对 Agent 无法读取 WhatsApp 附件的 [Issue #2715](https://github.com/nanocoai/nanoclaw/pull/2715)，建议维护团队尽快确认 Bug 有效性，并评估是否需要调整 v2 核心的目录挂载逻辑。
*   ⏳ **待合并的核心安全 PR**：PR [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) 包含多项关键的安全修复，建议维护者优先进行代码审查并合入主分支，以防止潜在的恶意 Webhook 请求或 ID 碰撞攻击。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026-06-09 IronClaw 项目动态日报。

---

# 📊 IronClaw (nearai/ironclaw) 项目动态日报 
**日期**: 2026-06-09 | **周期**: 过去 24 小时

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持了**极高的活跃度**，社区与核心团队共推进了 34 个 Issue（21 新开/活跃，13 关闭）和 50 个 PR（26 待合并，24 已合并/关闭）。项目整体正处于 **"Reborn" 架构升级的密集交付期**，重点围绕 OpenAI 兼容 API 接入、身份验证（SSO/OAuth）以及 WebChat v2 的生产环境就绪展开。与此同时，社区贡献者积极报告了包括 Codex 模型隐藏、DeepSeek 请求异常、Telegram 频道断联等外部集成 Bug，整体呈现出“核心功能快速演进，边缘场景加速收敛”的健康态势。

---

## 2. 版本发布
**本日无新版本发布**。
*注：目前正在推进针对 `v0.29.x` 和下一个大版本的迭代，部分破坏性变更已在测试分支（如 `reborn-integration`）中体现。*

---

## 3. 项目进展
今日共有 24 个 PR 被合并或关闭，标志着 Reborn 架构在 API 路由、工具解析和基础架构层面取得了实质性进展：

- **Reborn OpenAI 兼容 API 落地**：
  - 🟢 **PR #4522**: 铺设了 `tool_args.rs` 共享解析原语（RC3/M9 阶段 A），为后续彻底解决 ToolCall 解析错误奠定了基础。
- **系统底层修复与稳定性提升**：
  - 🟢 **PR #4523**: 修复了 `TenantId`/`UserId` 无法反序列化 `\x1fSYSTEM\x1f` 哨兵值的问题，解决了 LLM 设置接口 `service_unavailable` 的报错。
  - 🟢 **PR #4566**: 修复了 Codex ChatGPT 订阅路径中因硬编码 `client_version` 导致无法发现并使用最新 `gpt-5.5` 模型的问题。
- **触发器与自动化能力完善**：
  - 🟢 **PR #4574**: 引入了作用域出站默认模型，完善了触发器交付的 E2E 链路。
  - 🟢 **PR #4528**: 实现了 Slack host-beta 有状态工作流的持久化，增强了 Slack 集成的稳定性。
- **文档与规划**：
  - 🟢 **PR #4579** 与 **PR #4573**: 更新了触发器交付计划文档，明确了后续实施的边界与架构约束。

---

## 4. 社区热点
今日讨论最热烈（评论数最多）的议题主要集中在 **Reborn 核心架构重构** 和 **安全边界加固** 上：

- **🔥 [Issue #3283](https://github.com/nearai/ironclaw/issues/3283) (评论: 3)**：*将 OpenAI 兼容 API 迁移至 Reborn 工作流*。这是目前推进 OpenAI 接口标准的 parent issue，涉及 `/v1/chat/completions` 等核心路由的重构。
- **🔥 [Issue #4175](https://github.com/nearai/ironclaw/issues/4175) (评论: 3)**：*Reborn 生产环境 OAuth PKCE 安全性对齐*。Google OAuth 重构已合并，目前正聚焦于 token 生命周期的清理和 GSuite 过期重试机制。
- **🛡️ [Issue #3957](https://github.com/nearai/ironclaw/issues/3957) & [Issue #3959](https://github.com/nearai/ironclaw/issues/3959) (评论: 2)**：*第三方 Hook 激活的安全强化*。核心开发者 @zmanian 正在推动在多租户生产环境开启 `HOOKS_THIRD_PARTY_ENABLED` 前，完善审计隔离与边界阻断能力。
- **🛠️ [Issue #4488](https://github.com/nearai/ironclaw/issues/4488) (评论: 2)**：*拆分 ProductWorkflow 门面结构*。将工作流显式拆分为 `submit/read/subscribe`，这是实现高并发和幂等性控制的关键一步。

---

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已由社区迅速提交修复：

🔴 **严重 (High Priority)**
- **[Issue #4536](https://github.com/nearai/ironclaw/issues/4536) [已修复]**：启用 SSO 后，Google/GitHub OAuth 用户登录后直接重定向至 `/welcome`，完全无法聊天。
- **[Issue #4548](https://github.com/nearai/ironclaw/issues/4548) [待修复]**：调用 DeepSeek 时，如果带 `tools` 参数，会导致 JSON 请求体出现**双重顶级 `model` 字段**，直接被 DeepSeek API 返回 400 拒绝。
- **[Issue #4556](https://github.com/nearai/ironclaw/issues/4556) [待修复]**：生产环境从 0.28.2 升级到 0.29.1 后，Telegram 频道发送消息会错误地创建新的 Web UI 会话，导致上下文断裂。
- **[Issue #4557](https://github.com/nearai/ironclaw/issues/4557) [已自愈]**：部分托管 Agent 在运行过程中突然返回 `403 Forbidden`（疑似权限或 Token 过期问题，后自动恢复）。

🟡 **中等**
- **[Issue #4577](https://github.com/nearai/ironclaw/issues/4577) / [PR #4578](https://github.com/nearai/ironclaw/pull/4578) [已修复]**：Google Calendar 工具未默认传递 `timeMin`，导致“我接下来的会议是什么”这类查询返回了 2021 年的历史事件。
- **[Issue #4564](https://github.com/nearai/ironclaw/issues/4564) / [PR #4566](https://github.com/nearai/ironclaw/pull/4566) [已合并]**：Codex 硬编码旧版本号导致无法调用 GPT-5.5 等新模型。

---

## 6. 功能请求与路线图信号
从最新的 Issues 和活跃 PR 来看，项目近期的演进路线非常明确：

1. **Self-Serve 密钥管理**：([Issue #4545](https://github.com/nearai/ironclaw/issues/4545)) 用户将可以通过 Slack/Web/CLI 自行为生成的工具注入密钥，且隔离 LLM 访问，这极大地增强了多租户场景下的安全性。
2. **产品工作流拆分**：([Issue #4488](https://github.com/nearai/ironclaw/issues/4488)) 核心正试图将单一的 ProductWorkflow 拆分为明确的 `submit/read/subscribe` 门面，以匹配 OpenAI 的 Responses API 规范。
3. **自动化记录 UI**：([PR #4580](https://github.com/nearai/ironclaw/pull/4580)) 即将在 WebUI v2 引入自动化触发器的运行历史记录与指标面板。
4. **子代理 重构**：([PR #4572](https://github.com/nearai/ironclaw/pull/4572)) 计划将 `researcher` 子代理替换为 `planner`，输出包含目标、计划、风险的结构化输出。

---

## 7. 用户反馈摘要
综合分析近期的 Issues，真实用户在生产环境中的主要痛点如下：
- **版本升级带来的渠道中断**：企业用户（使用 Telegram 渠道）在 minor 版本升级（0.28->0.29）时经历了会话丢失问题，表明项目在底层状态迁移/存储兼容性上需要更严格的回归测试。
- **第三方 LLM 兼容性细节**：用户在组合使用 IronClaw、Tools 和非 OpenAI 模型（如 DeepSeek）时，极易触发请求体构造异常（如字段重复），说明 Reborn 在 OpenAI-compatible 代理层需要更强的容错或字段清洗机制。
- **WebUI 国际化缺失**：([Issue #4554](https://github.com/nearai/ironclaw/issues/4554)) 社区对 WebUI v2 的汉化/多语言支持需求较大，目前仍存在大量硬编码英文字符串，甚至存在部分翻译键导致运行时崩溃的现象。

---

## 8. 待处理积压
以下重要的高优先级/长尾 Issue 需要核心维护者重点关注：

- **⚠️ Nightly E2E 持续失败**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 每日构建的端到端测试已报错，需排查是否因近期底层的 PR（如 PR #4522 带来的破坏性变更）引起。
- **⚠️ WeCom (企业微信) 验证阻塞**：[Issue #4191](https://github.com/nearai/ironclaw/issues/4191) 标记为 v0.29.0 Staging 验证，发现了多个重要问题且长期未彻底关闭，可能影响国内企业用户的发版。
- **⚠️ Reborn 生产环境接线 Epic**：[Issue #3026](https://github.com/nearai/ironclaw/issues/3026) 是当前的顶层史诗任务，目前仍有多个子模块（如 Postgres 存储配置 [Issue #4551](https://github.com/nearai/ironclaw/issues/4551)）处于 Open 状态，亟待推进以实现 V1 到 Reborn 的完全切割。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-06-09)

## 1. 今日速览
过去 24 小时，LobsterAI 项目展现了极高的研发活跃度，集中推进了核心架构的迭代与历史遗留问题的修复。项目今日无新开 Issue，但合并/关闭了高达 18 个 Pull Requests，其中包含多个跨模块（main/renderer/openclaw）的中大型特性与架构优化。整体来看，核心开发团队（fisherdaddy, liuzhq1986）正专注于完善桌面端的认证流、数据迁移机制以及 OpenClaw 网关的可观测性；同时，社区贡献者此前提交的多项 UI 交互优化和 Bug 修复也在今日被批量清理合并。项目处于健康且快速迭代的上升期。

## 2. 版本发布
- **最新 Releases**：过去 24 小时及近期均无新版本发布。当前项目主干处于高频代码合入阶段，预计在目前的登录优化和 OpenClaw 集成特性稳定后，将发布下一个重要版本。

## 3. 项目进展
今日合并/关闭的 PR 极大地推动了桌面端体验与系统稳定性的提升，重点进展如下：

- **新增本地回调登录流**：[PR #2122](https://github.com/netease-youdao/LobsterAI/pull/2122) (by liuzhq1986)
  引入了 Electron 客户端的 localhost 回调登录机制，避免了浏览器登录时的外部应用确认弹窗，显著提升桌面端登录体验。
- **完善 Windows 端登录焦点管理**：[PR #2127](https://github.com/netease-youdao/LobsterAI/pull/2127) (by liuzhq1986)
  修复了 Windows 系统上浏览器登录完成后，应用窗口无法自动置顶的问题，通过短暂切换 `always-on-top` 停止任务栏闪烁。
- **引入用户数据备份与恢复机制**：[PR #2125](https://github.com/netease-youdao/LobsterAI/pull/2125), [PR #2126](https://github.com/netease-youdao/LobsterAI/pull/2126), [PR #2128](https://github.com/netease-youdao/LobsterAI/pull/2128) (by fisherdaddy)
  完整实现了数据迁移服务，支持将用户数据打包为便携式 tar 包，并在恢复时采用就地替换策略以保留运行时锁文件，同时排除了 Network 目录的干扰。
- **增强 OpenClaw 网关可观测性与限制保护**：
  - [PR #2123](https://github.com/netease-youdao/LobsterAI/pull/2123)：在设置界面暴露网关地址与运行状态，提供可复制的地址卡片和启动进度条。
  - [PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110)：针对 OpenClaw 增加了对超大图片载荷的拦截，并完善了 `1009` 错误的分类提示，防止网关因载荷过大崩溃。

## 4. 社区热点
虽然今日没有新开讨论，但此前由社区贡献者提交的多个高价值功能改进在今天迎来了集中合并，反映了社区对提升易用性的强烈诉求：

- **模型列表动态获取**：[PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522) (by leedalei)
  解决了新增模型需要手动配置的痛点，通过对接各厂商 API 实现模型列表一键同步，反映了用户对快速兼容最新 LLM 模型（如 GLM-5.1）的强烈需求。
- **UI 交互与状态保留优化**：[PR #1526](https://github.com/netease-youdao/LobsterAI/pull/1526) 新增了 7 种颜色标注会话功能；[PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517) 修复了 GitHub Copilot 授权时因关闭面板导致 Token 丢失的痛点问题。

## 5. Bug 与稳定性
今日批处理了多个影响系统稳定性和用户体验的 Bug，目前已均有对应的 Fix PR 并合并：

- **高优先级：配置数据丢失问题**：[PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117) 修复了用户在设置中删除的默认模型在应用重启或迁移后再次出现的回归缺陷。
- **中优先级：日志导出超时问题**：[PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515) 解决了低端设备上由于 DEFLATE 串行压缩导致导出数百 MB 日志时必现的 30 秒超时失败问题。
- **低优先级：IM 通知静默失败**：[PR #1510](https://github.com/netease-youdao/LobsterAI/pull/1510) 修复了定时任务在未选择具体会话时依然允许提交，导致运行时通知无声无息失败的逻辑漏洞。

## 6. 功能请求与路线图信号
从近期合并的代码可以清晰看出项目下一阶段的演进路线图信号：
1. **企业级数据管控与迁移**：`data-migration` 相关 PR 的集中合并，表明项目正在为跨设备迁移、数据云备份等高级特性打下底层基础。
2. **AI 网关（OpenClaw）深度集成**：从网关地址展示到异常载荷拦截，OpenClaw 正从一个后端组件逐渐转变为用户可见、可调试的核心网关代理层。
3. **多渠道模型管理的自动化**：`GET /v1/models` 的对接标志着项目正朝着“万能模型网关”的方向演进，进一步降低用户的接入门槛。

## 7. 用户反馈摘要
虽然今日无直接的 Issue 互动，但通过对合并 PR 中描述的问题提取，可以提炼出以下典型用户痛点：
- **桌面端登录体验割裂**：用户此前在 Windows 上通过外部浏览器登录后，经常遇到应用窗口不弹出、需要手动在任务栏寻找的问题（已通过 #2127 缓解）。
- **日志系统占用与性能瓶颈**：用户在遇到问题导出日志时，常面临大文件压缩导致的 UI 卡顿和超时失败，尤其在低配机器上体验极差（已通过 #1515 优化压缩策略解决）。
- **测试连接报错犹如“天书”**：用户反馈配置模型供应商时，如果测试失败只返回“连接失败: 0”，难以排查是网络、代理还是 Key 填错（已通过 #1524 细化中英文错误提示解决）。

## 8. 待处理积压
- **依赖更新机器人长期悬置**：[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (by dependabot[bot])
  该 PR 旨在将 `electron` 从 v40.2.1 大版本升级到 v42.3.3，并同步更新 `electron-builder`。该请求自 4 月份开启至今已逾 2 个月，目前仍在 `OPEN` 状态。由于涉及核心 Electron 架构的大版本跨越，可能存在潜在的 Breaking Changes，建议维护团队评估兼容性并排期跟进。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# 🤖 TinyAGI (TinyClaw) 项目动态日报
**日期**: 2026-06-09 | **分析周期**: 过去24小时

---

### 1. 今日速览
在过去 24 小时内，TinyAGI (TinyClaw) 项目呈现出**低频但聚焦**的研发活动特征。项目整体保持平稳，今日无新增代码合并、Issues 反馈或版本发布。唯一的动态来自社区开发者提交的一个针对性修复 PR，旨在解决原生模块的安装障碍。整体来看，项目今日活跃度较低，处于常规迭代维护状态，核心代码库保持健康稳定。

### 2. 版本发布
**无**。
今日项目未发布任何新版本（Release）。

### 3. 项目进展
今日项目**无已合并或关闭的 PR**，暂无实质性落地的代码变更。但收到一个新的待处理 PR，为项目的部署体验优化提供了潜在方案：
*   **待合并修复**: [PR #280 fix(install): add postinstall script to auto-rebuild better-sqlite3](https://github.com/TinyAGI/tinyagi/pull/280)
    *   **进展分析**: 该 PR 由开发者 `dsy122` 提出，针对 `better-sqlite3` 这一 C++ 原生插件的编译痛点。通过引入 `postinstall` 脚本，有望实现自动化的 `npm rebuild`，消除用户在全新部署或不同 Node.js 环境切换时的手动干预成本。这虽不是架构级突破，但能显著提升项目的“开箱即用”体验。

### 4. 社区热点
今日社区讨论处于静默状态。
*   Issues 与 PR 区均无新增评论、活跃讨论或新开启的话题。社区焦点目前集中在维护者对 [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) 的潜在审查反馈上。

### 5. Bug 与稳定性
今日无新增通过 Issue 渠道报告的 Bug。
*   **潜在安装阻力**: 虽未形成正式 Bug Issue，但 [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) 暴露了当前版本在 `npm install` 阶段由于原生 C++ addon 预编译二进制文件不匹配导致的崩溃/报错问题。此问题属于**中等严重程度**（阻碍新用户首次部署），且目前**已有对应修复 PR (#280)** 等待审查。

### 6. 功能请求与路线图信号
今日无新增功能请求。
*   **信号洞察**: 结合今日的 PR 动向，项目近期的工作重心可能正向**开发者体验 (DX) 和部署便捷性**倾斜。原生模块的自动化构建是 AI 智能体项目复杂依赖树的常见痛点，解决此问题通常是确保后续功能（如持久化记忆、本地知识库）稳定运行的前置基建工作。

### 7. 用户反馈摘要
今日无直接的 Issues 用户反馈可供提取。
*   **隐性行为反馈**: 开发者直接通过提交 PR 来解决安装问题，反映出 TinyAGI 的受众具备较强的技术兜底能力（遇到环境报错能自行定位并提供代码级修复），也从侧面印证了项目在 AI 开发者群体中具备一定的极客吸引力和实用价值。

### 8. 待处理积压
*   **需优先关注的 PR**: [PR #280 (OPEN)](https://github.com/TinyAGI/tinyagi/pull/280)。建议维护者 (@TinyAGI Team) 尽快评估该 PR 的有效性与跨平台兼容性（特别是在 macOS/Linux/Windows 以及不同 Node 版本下的表现），及时推进合并，以降低新用户的流失率。
*   **日常提醒**: 今日无其他长期未响应的积压 Issue 显现，整体 Issue 看板处于清空状态，健康度良好。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-09)

## 1. 今日速览
过去24小时内，CoPaw（即 QwenPaw）项目呈现出极高的社区活跃度与健康的迭代节奏。项目共处理了 **48 条 Issue** 动态（新开/活跃 26 条，关闭 22 条）以及 **44 条 PR** 动态（待合并 21 条，合并/关闭 23 条），显示出维护团队具备强大的社区响应与代码合并能力。今日的开发重心主要集中在 **MCP 子进程泄漏修复、Agent 底层架构（AgentScope 2.0）迁移准备、控制台前端体验优化（代码折叠/会话列定制）**，以及针对企业通道（企业微信/飞书/微信）的稳定性增强。尽管没有发布新版本，但高价值的 PR 密集提交为下一个大版本的发布打下了坚实基础。

---

## 2. 版本发布
- **无新版本发布**。今日无新的 Release 产生，核心开发团队与社区贡献者正专注于将高价值的功能分支（如 Plugin Market、轻量级 Goal 模式、前端扩展机制）合入主分支。

---

## 3. 项目进展
今日有多个关键 PR 被合并或取得重大进展，显著提升了项目的稳定性和架构灵活性：

- **MCP 子进程泄漏修复 ([PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014))**
  修复了 Docker 重启时 MCP 服务子进程无法随主进程退出的严重问题，通过引入独立的进程组管理机制，彻底解决了进程堆积导致控制台加载缓慢的顽疾。
- **上下文压缩机制修复 (双杀)**
  - [PR #5018](https://github.com/agentscope-ai/QwenPaw/pull/5018)：桥接了 QwenPaw 与 AgentScope 2.0 的上下文长度参数，确保自带的压缩机制遵循用户设定的上下文窗口限制。
  - [PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021)：修复了当 `active_model` 未设置时，压缩机制错误回退到 128K 默认值的问题。
- **控制台前端体验升级**
  - [PR #4345](https://github.com/agentscope-ai/QwenPaw/pull/4345)：增加了**代码块折叠功能**，长代码默认只展示前5行，极大改善了包含大量代码输出的对话阅读体验。
  - [PR #4975](https://github.com/agentscope-ai/QwenPaw/pull/4975)：实现了会话管理页面列顺序的自定义功能。
- **会话系统健壮性增强**
  - [PR #5027](https://github.com/agentscope-ai/QwenPaw/pull/5027)：阻止了后端预热产生的垃圾会话污染 `chats.json`。
  - [PR #4334](https://github.com/agentscope-ai/QwenPaw/pull/4334)：修复了由于意外重启导致会话状态未持久化而产生的“孤儿会话”问题。

---

## 4. 社区热点
今日讨论最热烈的话题集中在通道稳定性、底层框架演进和架构借鉴上：

- **微信 iLink 定时任务推送失败 ([Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477))**：以 15 条评论位居热度榜首。由于 `context_token` 过期且缺乏重试机制，导致跨天定时任务（Cron）静默失败。这反映了生产环境中企业级推送通道对**高可用重试机制**的迫切需求。
- **AgentScope 2.0 迁移提案 ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727))**：官方成员发起的 Breaking Change 讨论（6条评论，2 个赞）。项目计划从现有的 AgentScope 1.x 全面升级至 2.0 架构，这将带来底层 API 和运行时的全面重构。
- **借鉴 Hermes Agent 的“学习循环” ([Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017))**：社区热心用户发起的高质量探讨（7条评论）。建议 QwenPaw 借鉴竞品的 Agent 自主技能迭代能力，从“工具调用者”向“自我进化者”演进。

---

## 5. Bug 与稳定性
今日报告了多个与通道和模型兼容性相关的 Bug，部分已提交修复：

1. **严重 (P0)：配置损坏导致 Agent 全局崩溃 ([Issue #4970](https://github.com/agentscope-ai/QwenPaw/issues/4970))**
   - **现象**：当 `loop_config.json` 或 `prd.json` 损坏时，抛出未捕获的 `JSONDecodeError`，导致整个 Agent 会话崩溃阻塞。
   - **状态**：暂无对应修复 PR，需优先关注。
2. **严重 (P0)：多子 Agent 导致无限快速轮询 ([Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/487Paw/issues/4873))**
   - **现象**：同时开启两个 subagent 会触发高频死循环，并在飞书端无法打断。
   - **状态**：暂无对应修复 PR。
3. **高 (P1)：本地模型兼容性黑盒 ([Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989))**
   - **现象**：本地部署的 vLLM (千问3.6-27B) 在 1.1.9+ 版本中连接测试成功，但对话一直转圈无响应且无后台日志。
   - **状态**：暂无 PR，疑似底层请求解析或流式响应兼容性退步。
4. **中 (P2)：内存压缩期间崩溃 ([Issue #5019](https://github.com/agentscope-ai/QwenPaw/issues/5019))**
   - **现象**：触发内存压缩时，由于错误假定变量为字典类型导致 `AttributeError`。
   - **状态**：**已有相关修复进展**，见 [PR #5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) 和 [PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021)。
5. **中 (P2)：Web Console 前端抖动与卡顿**
   - 图片预览放大拖动时异常抖动 ([Issue #4993](https://github.com/agentscope-ai/QwenPaw/issues/4993))。
   - Windows 桌面版执行命令时闪控制台黑框 ([Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123))。

---

## 6. 功能请求与路线图信号
通过梳理社区的 Feature Request 与活跃的 PR，可以洞察项目下一阶段的演进方向：

- **插件生态与前端扩展机制**：[PR #4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) 提交了统一的前端扩展点注册机制，同时 [PR #5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) 增加了**插件市场**。这表明项目正在构筑类似 VS Code 的繁荣插件生态。
- **视觉模型解耦**：用户请求支持独立视觉模型配置（Visual Model Fallback），允许主模型为纯文本模型，通过独立的视觉模型进行“中转” ([Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992))。
- **记忆系统自进化**：用户呼吁引入分层记忆系统框架 ([Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994))，这可能会与官方正在开发的 **轻量级 Goal 模式** ([PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443)) 形成良好互补。
- **桌面端自动更新**：[PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 正在为 Tauri 桌面端加入自动更新能力，降低用户的升级门槛。

---

## 7. 用户反馈摘要
- **高频痛点：通道不可靠**：大量反馈指向企业微信、微信、飞书等通道在重连、配置保存、工具调用反馈上的脆弱性（如 [Issue #4877](https://github.com/agentscope-ai/QwenPaw/issues/4877)、[Issue #4990](https://github.com/agentscope-ai/QwenPaw/issues/4990)）。对于很多国内企业用户，IM 通道是核心生产环境，其稳定性要求远高于 Web 聊天。
- **模型管理的真实诉求**：许多用户使用本地部署的 vLLM 或特定 API（如 9router, KimiCode），但经常遇到“配置成功但无响应”的黑盒情况（[Issue #5001](https://github.com/agentscope-ai/QwenPaw/issues/5001)），急需增加更详细的报错日志和连接排查机制。
- **本地化满意度高**：用户在反馈中特别提到 QwenPaw 的中文本地化做得极其优秀，“设置清晰无门槛，开箱即用”，这是其相较于海外竞品的核心护城河。

---

## 8. 待处理积压
以下高价值或高影响议题需要维护团队重点关注和排期：

- **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) Migrate to AgentScope 2.0**：作为底座重构的核心 Ticket，需要推进具体的实现分支和 Migration Guide。
- **[Issue #4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) 配置文件损坏导致全局崩溃**：需尽快加入 JSON 解析的 `try-except` 容错降级逻辑，避免单点故障。
- **[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) Add DataPaw Plugin**：社区贡献的非常重磅的数据分析（12项 BI 技能）插件，已停留近半个月，需要加速 Code Review 并合入。
- **[Issue #4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) Infinite Image Compression Loop**：图片上传引发的幻觉和无限循环问题，对多模态场景影响较大，目前仍悬而未决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
ZeroClaw 项目在过去24小时内保持了极高的社区活跃度与开发生命力，共产生 50 条 Issues 更新和 50 条 PR 更新。当前项目处于密集的问题排查与架构重构阶段，尤其是对 MCP工具、多渠道（如 Matrix, WhatsApp）以及 Runtime 安全配置等核心模块进行了大量修补。尽管今日无新版本发布，但有 11 个 PR 被合并/关闭，39 个 PR 正在待合并状态，社区正在积极为下一个大版本（预计包含 RFC 6969, 插件化安全提供者等）蓄力。

## 2. 版本发布
**无**。今日无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，主要集中在对底层 Runtime、多渠道路由和消息渲染的修复，为项目的稳定性和扩展性打下了坚实基础：

- **多渠道路由重大修复 ([PR #7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367))**：修复了 Gateway 在处理入站 Webhooks 时，多实例配置下仅能投递到首个实例的严重缺陷。引入了基于通道别名的路径解析，极大改善了多通道并发的可靠性。
- **消息渲染与 Markdown 切分 ([PR #6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701))**：解决了 Telegram 频道中代码块被不当截断的顽疾，优化了消息切分时的长度预算逻辑。
- **历史消息防级联清空 ([PR #7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403))**：在 `trim_history` 中添加了安全守卫，防止孤儿移除级联意外清空所有非系统对话历史，避免了严重的上下文丢失。
- **记忆架构解耦落地 ([PR #7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234))**：完成了 RFC 6850 的最后一步，将网关和通道的 Consolidation 逻辑完全迁移至新的 `MemoryStrategy` 接口。
- **视觉管线兼容性 ([PR #7135](https://github.com/zeroclaw-labs/zeroclaw/pull/7135))**：统一了对 `webp` 格式图片的处理，修复了 WhatsApp 贴纸等导致部分视觉大模型拒绝接收的问题。

## 4. 社区热点
今日讨论热度最高的问题集中在 **安全性策略、桌面端交互** 和 **MCP 工具生态** 的走向上：

- 🔥 **MCP 工具过滤失效危机 ([Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699), 7条评论)**：报告了当前 `tool_filter_groups` 对真实 MCP 工具完全失效的 Prefix 校验错误。由于涉及核心 Agent 工具调度安全，引发开发者激烈讨论。
- 💻 **RFC: 桌面截屏与控制支持 ([Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909), 6条评论)**：社区发起关于引入 Computer-use 能力的 RFC，希望 ZeroClaw 能像竞品一样操控本地桌面 GUI，这标志着项目正向更广泛的 RPA 场景拓展。
- 🔒 **高风险命令执行与审批策略 ([Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155), 4条评论)**：提议引入类似 Claude Code 的 `allow/ask/deny` 模式，为 Shell 工具增加“每次执行需确认”的中间层，反响热烈。
- 🌐 **OIDC 认证与可插拔安全层 ([Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142), 各4条评论)**：面向 v0.9.0 的架构级 RFC，旨在抽象出独立的认证与安全响应提供者接口。

## 5. Bug 与稳定性
今日暴露的 Bug 主要集中在 Runtime 执行、大模型对接和渠道通信上，其中最高级别（S0/S1）问题包括：

- **S0 级别：容器环境下的致命静默文件写入失败 ([Issue #4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627))**：使用 `file_write` 工具时提示成功，但在宿主机上完全不可见。目前已有修复提案 ([PR #7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129))，对工作区进行了严格隔离防护。
- **S0 级别：WSL2 持续 OOM 崩溃 ([Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542))**：部分用户在 WSL2 环境下遭遇内存泄漏导致进程被系统 OOM Kill，目前尚在排查复现阶段。
- **S1 级别：完全自主模式下 Shell 工具被拒 ([Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434))**：即便将 `[autonomy]` 设为 `level = "full"`，Runtime 依然拒绝执行 Shell 工具调度。
- **S1 级别：Cron 定时任务并发爆炸 ([Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037))**：如果定时任务执行时间超过调度间隔，会导致任务被重复拉起20次以上。
- **S1 级别：Gemini 兼容性与上下文截断问题 ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302), [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))**：使用 LiteLLM 对接 Gemini 时存在 400 错误（工具调用顺序违背 API 限制），且 `context_compression` 会意外丢弃工具调用记录导致死循环。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 来看，v0.9.0 版本的路线图已经十分明朗：

- **彻底的模块解耦**：通过 [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) 及其对应的落地 PR，项目正在将内存生命周期与底层存储解耦。
- **插件化与 WASI 标准化**：[PR #7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) 引入了 WIT 接口定义，同时 [PR #7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337) 实现了插件工具的命名空间和限流。这表明 ZeroClaw 正在积极推进基于 WASI 的安全插件生态。
- **多模态与语音输出增强**：[PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) 实现了按轮次路由输出 (`send_via`) 并修复了语音双发问题，多模态交互体验正在大幅优化。
- **本地化代码库重构**：[Issue #7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) 提出将翻译文件移入独立 Git 子模块，以减轻主仓库的提交噪音。

## 7. 用户反馈摘要
通过对活跃 Issue 的提炼，发现目前用户的核心痛点如下：
1. **本地模型支持不够友好**：使用 Ollama 等本地小模型时，容易发生提示词泄露或解析报错，急需针对本地模式的 Compact No-Tools 机制 ([Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287))。
2. **飞书等国内渠道接入困惑**：通过飞书接入时，默认只调用 LLM 而没有启动 Agent 流程 ([Issue #4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873))，说明文档或默认配置需要优化。
3. **配置参数混淆**：用户普遍被 `[runtime_profiles.*].max_tool_iterations` 无效的问题困扰 ([Issue #6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877))，这需要在文档和配置校验层面进行修复。
4. **敏感信息误杀**：`LeakDetector` 导致大量合法的 MD5 或随机文件名被错误打码高熵标签 ([Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832))。

## 8. 待处理积压
以下高优先级问题长期处于 `in-progress` 但推进缓慢，或近期活动频繁但资源不足，需要 Maintainer 重点投入精力：

- **153 个 Commit 恢复审计 ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074))**：带有 `help wanted` 标签。之前的批量回滚掩盖了许多已合并的修复，急需代码考古以恢复关键特性。
- **MCP 资源与 Prompt 支持 ([Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467))**：高达 4 个点赞的核心功能请求，目前仍未有实质性 PR 产出。
- **Gemini CLI OAuth 彻底失效 ([Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879))**：作为 S1 级别的阻塞性问题，已长期处于修复中状态，直接影响了 Gemini 生态用户的接入。
- **多渠道跨安全 OTP 验证 ([Issue #3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767))**：针对跨平台高权限操作的安全 TOTP 门控，对多租户/多机器人的生产环境至关重要，需尽快排期实现。

</details>