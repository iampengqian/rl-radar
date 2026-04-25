# OpenClaw 生态日报 2026-04-26

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-25 22:06 UTC

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
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-04-26)

## 1. 今日速览

OpenClaw 今日维持了极高的项目活跃度与社区热度。过去24小时内，项目处理了高达 **500 条 Issue 更新**（关闭 454 条，新开/活跃 46 条）以及 **500 条 PR 更新**（合并/关闭 431 条，待合并 69 条），展现出核心团队极其高效的Issue闭环与代码审查能力。项目刚刚发布了包含多项重磅功能的 `v2026.4.24` 正式版及 5 个迭代 Beta 版，标志着在多模态会议集成、底层模型支持（DeepSeek V4 与 GPT-5.4）和 ACP (Agent Communication Protocol) 架构上迈出了重要一步。当前待合并的 69 个 PR 中包含了网关稳定性优化、内存核心重构以及自学习技能管理等前瞻性功能，项目整体发展势头强劲且健康。

---

## 2. 版本发布

今日项目迎来重要里程碑，共发布 **6 个版本**（1 个正式版，5 个 Beta 版）：

- **正式版: [v2026.4.24](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24)**
  - **重磅新增**：Google Meet 作为内置参与者插件加入，支持个人 Google 认证、Chrome/Twilio 实时会话、配对节点 Chrome 支持、产物/考勤导出及已打开 Meet 标签页的恢复工具。
  - **模型支持**：正式集成了 DeepSeek V4 Flash 和 V4 Pro 模型。
- **Beta 测试版迭代 (v2026.4.24-beta.1 至 beta.5)**
  - 核心修复主要集中在 Windows 环境和受限运行时的兼容性。
  - **[v2026.4.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.2)**：修复了 Windows 及其他复制运行时环境下打包插件的运行时镜像问题，确保共享依赖在 npm 更新期间可正常解析。
  - **迁移注意**：Beta 2 确保 2026.4.23 版本在执行更新步骤时，禁用未来的捆绑插件以防止出现兼容性中断。

---

## 3. 项目进展

今日合并/关闭的 PR 极大推进了系统稳定性与多渠道兼容性，其中关键的 PR 包括：

- **修复 LM Studio 稳定性问题** ([PR #67401](https://github.com/openclaw/openclaw/pull/67401))：修复了会话技能快照、工具循环防护、TUI 看门狗以及 LM Studio 预加载退避等四大底层问题。
- **语音合成 支持** ([PR #55972](https://github.com/openclaw/openclaw/pull/55972))：成功将 Inworld 添加为内置语音提供商插件。
- **配置校验修复** ([PR #71247](https://github.com/openclaw/openclaw/pull/71247))：修复了配置模式中缺失的单 Agent `contextTokens` 覆盖支持。
- **内存系统底层防护** ([PR #71694](https://github.com/openclaw/openclaw/pull/71694), [PR #71764](https://github.com/openclaw/openclaw/pull/71764))：修复了 Gateway 启动竞争条件下内存核心 cron 不可用的问题，并防止 wiki bridge 在公共产物为空时误删全量数据。
- **Teams 渠道部署优化** ([PR #71747](https://github.com/openclaw/openclaw/pull/71747))：引入了基于 `@microsoft/teams.cli` 的一键部署方案，大幅简化了 MS Teams 渠道的设置流程。

---

## 4. 社区热点

今日社区讨论最热烈的问题集中在 Agent 异步通信阻塞和跨渠道上下文一致性上：

1. **[#45096](https://github.com/openclaw/openclaw/issues/45096) (👍 0, 评论 7)**：OTel 诊断插件仅报告系统指标，导致无法向 Langfuse 发送 LLM 调用链路数据。这反映出社区对 AI Agent 可观测性有着强烈需求。
2. **[#69320](https://github.com/openclaw/openclaw/issues/69320) (👍 0, 评论 7)**：内存整理定时任务 硬编码的 10 分钟超时导致系统事件屡屡失败。用户希望为长时间运行的 AI 记忆整合任务提供更灵活的配置。
3. **[#69104](https://github.com/openclaw/openclaw/issues/69104) (👍 2, 评论 6)**：OpenRouter 设置BaseUrl路径错误导致新用户Agent无响应。这是典型的开箱体验受损问题，目前已被修复并关闭。
4. **[#69208](https://github.com/openclaw/openclaw/issues/69208) (👍 0, 评论 4)**：提出了跨渠道（MS Teams, Telegram 等）消息重复、乱序和上下文组装错误的系统性重构请求（Umbrella Issue），这表明跨平台消息状态机是下一阶段的攻坚重点。

---

## 5. Bug 与稳定性

今日报告的 Bug 主要涉及崩溃、资源死锁以及最新的 4.24 版本兼容性回归。按严重程度排列如下：

### 严重 / 致命
- **Docker 容器 mDNS 崩溃**：[#70232](https://github.com/openclaw/openclaw/issues/70232) 和 [#71751](https://github.com/openclaw/openclaw/issues/71751)。在云端 VPS 或 Docker 中，由于不支持 mDNS 组播，网关以 `CIAO PROBING CANCELLED` 错误无限重启。（**目前尚无专门针对此崩溃的 Fix PR**）。
- **Gateway 死锁**：[#68823](https://github.com/openclaw/openclaw/issues/68823)。当 ACP 子代理调用耗尽配额时，会导致所有会话锁死，需人工删除 `.jsonl.lock` 文件。（部分由 [PR #49660](https://github.com/openclaw/openclaw/pull/49660) 提供锁文件自清理缓解）。

### 高 / 行为异常
- **ACP 会话阻塞/无输出**：[#70699](https://github.com/openclaw/openclaw/issues/70699), [#54690](https://github.com/openclaw/openclaw/issues/54690)。ACP 运行时挂起或无法将完成事件推送给父会话。
- **GPT-5.4 加密内容不匹配**：[#70654](https://github.com/openclaw/openclaw/issues/70654)。会话中途切换到 GPT-5.4 (Responses API) 时因 `item_id` 校验失败被 API 拒绝。
- **Windows Telegram ESM 崩溃**：[#71749](https://github.com/openclaw/openclaw/issues/71749)。2026.4.24 版本在 Windows 原生环境下 Telegram 渠道报 `ERR_UNSUPPORTED_ESM_URL_SCHEME` 错误。
- **Chrome 渲染进程内存泄漏**：[#70270](https://github.com/openclaw/openclaw/issues/70270)。使用 `web_fetch` 工具时，无头浏览器进程累积导致网关崩溃。

### 中 / 安全与验证
- **Signal 路径被拦截**：[#70277](https://github.com/openclaw/openclaw/issues/70277) 修复后，Signal 入站图片仍因目录白名单校验失败。
- **内部思考标签泄露**：[#69843](https://github.com/openclaw/openclaw/issues/69843)。Agent 的内部思考过程 (`<think...>`) 没有被正确过滤，直接暴露在 Telegram 等客户端给用户。

---

## 6. 功能请求与路线图信号

从近期的 Feature Request 和活跃的 PR 可以窥见 OpenClaw 正在向**Agent自进化**和**深度集成**发展：

1. **自我学习与技能管理**
   - 用户请求 ([#70513](https://github.com/openclaw/openclaw/issues/70513)) 建立 Agent 结构化的长期记忆与知识管理系统。
   - **已响应**：最新开立的 [PR #71768](https://github.com/openclaw/openclaw/pull/71768) 提出了 `skills_manage` 机制，让 Agent 具备提出、批准和自我安装新技能的能力（即“快速学习循环”），这是迈向 Agent 群体智能的架构起点。
2. **大模型适配扩展**
   - **已响应**：[PR #71778](https://github.com/openclaw/openclaw/pull/71778) 正式添加了 DeepSeek V4 作为一等公民提供商（支持 Pro 和 Flash，100万上下文）。
3. **架构控制增强**
   - 用户呼吁 ([#70631](https://github.com/openclaw/openclaw/issues/70631)) 增加可配置的网关级 CLI 超时设置，以防止主会话过载。

---

## 7. 用户反馈摘要

结合今日的 Issue 内容，提炼出真实用户的核心痛点与使用反馈：
- **Docker 自部署用户受挫**：使用 Docker Compose 自部署的用户在限制网络（VPS）和限制权限（OpenShift）的环境中遇到了 mDNS 崩溃和依赖加载失败，表明项目在企业级容器化隔离支持上仍需打磨。
- **对 OpenRouter 的依赖敏感**：大量新用户因 OpenRouter 的 BaseURL 或模型路径配置不正确导致 Agent “变砖”（如 [#69104](https://github.com/openclaw/openclaw/issues/69104)），反映出配置向导或错误提示需要进一步“傻瓜化”。
- **上下文丢失与幻觉引发担忧**：WebChat UI 频繁丢失历史记录（[#69406](https://github.com/openclaw/openclaw/issues/69406)）以及 WeChat/Telegram 消息乱序（[#70620](https://github.com/openclaw/openclaw/issues/70620)）导致用户对 Agent 的可靠性产生怀疑。用户迫切需要执行 `/new` 或 `/reset` 时能自动保存记忆（如 [#8185](https://github.com/openclaw/openclaw/issues/8185)）。

---

## 8. 待处理积压

以下长期未关闭或具有战略意义的 Issue/PR 需要核心维护者予以关注：

1. **跨渠道消息重复/乱序全局重构**：[#69208](https://github.com/openclaw/openclaw/issues/69208)（状态：OPEN）。此 Issue 牵涉多方底层重构，影响所有渠道的稳定性，亟待排期。
2. **沙箱僵尸进程耗尽 PID**：[#68691](https://github.com/openclaw/openclaw/issues/68691)（状态：OPEN）。沙箱内僵尸进程累积至系统限制，存在潜在的宿主机安全/稳定性风险。
3. **控制台 Approval 流程阻断**：[#58479](https://github.com/openclaw/openclaw/issues/58479)（状态：OPEN）。Web UI 中的批准对话框有时无法被底层 `exec` 消费，导致流程死锁，这对安全性敏感的操作影响较大。
4. **大型架构合并审查阻塞**：[PR #71722](https://github.com/openclaw/openclaw/pull/71722)（状态：OPEN）。Codex RuntimePlan 和 Harness V2 的整合打包 PR，体积庞大，需要维护者投入专门的审查资源以推动下一代 Agent 底座演进。

---

## 横向生态对比

以下是基于 2026 年 4 月 26 日各开源项目社区动态的横向对比与技术生态分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话”向“多端协同与自主执行”跨越的爆发期**。整体呈现出两大核心趋势：一是**底层架构向多模型自适应演进**，各大项目正密集适配以 DeepSeek V4 为代表的新一代推理模型，并着力解决其引发的 `reasoning_content` 上下文污染问题；二是**应用场景向企业级生产力工具渗透**，通过深度接入企业微信、飞书、MS Teams 等 IM 渠道，并积极构建沙盒隔离、权限审批（RBAC）和可观测性体系，智能体正从极客玩具转变为数字化劳动力。

### 2. 各项目活跃度对比
*健康度评估标准：高（社区响应极快、Bug修复迅速）；中（有一定积压，正常迭代）；低（高输入低输出、存在基建风险）。*

| 项目名称 | Issues 动态 (24h) | PRs 动态 (24h) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (闭环率 >90%) | 500 (闭环率 >86%) | **v2026.4.24** 正式版及 5个Beta | 🟢 **极高** |
| **ZeroClaw** | 50 (活跃 37) | 41 (待合并 29) | 无 (筹备 v0.7.4) | 🟢 **高** |
| **Hermes Agent**| 46 (新活跃) | 46 (新活跃) | 无 | 🟡 **中** (存在严重Review积压) |
| **CoPaw** | 13 (新活跃) | 8 (待合并) | **v1.1.4.post2** | 🟡 **中** (UI持久化问题频发) |
| **PicoClaw** | 2 (新开) | 9 (待合并) | Nightly 构建 | 🟢 **高** (响应极快，日清日结) |
| **NanoBot** | 8 (活跃) | 28 (活跃) | 无 | 🟢 **高** (高质量PR产出) |
| **NanoClaw** | 4 (新活跃) | 29 (活跃) | 无 | 🟢 **高** (聚焦安全与基建) |
| **IronClaw** | 6 (新活跃) | 27 (待合并) | 无 | 🟢 **高** (架构演进平稳) |
| **LobsterAI** | 4 (历史激活) | 11 (合并 10) | 无 (冲刺发版) | 🟢 **高** (协同模块深度重构) |
| **Moltis** | 2 (新活跃) | 6 (活跃) | 无 | 🟢 **高** (精细化功能迭代) |
| **ZeptoClaw** | 0 | 4 (合并 3) | 无 | 🟢 **高** (依赖与CI稳固期) |
| *TinyClaw/EasyClaw*| *无活动* | *无活动* | *无* | *停滞/静默* |

### 3. OpenClaw 在生态中的定位
* **绝对体量领导者**：OpenClaw 在数据吞吐量（日处理 500+ 级别的 Issue/PR）和社区规模上具备降维打击优势。其多渠道网关架构和 ACP（Agent Communication Protocol）已被广泛验证。
* **技术路线差异**：当其他项目（如 PicoClaw、NanoBot）还在解决单一渠道接入和基础工具调用稳定性时，OpenClaw 已经向**Agent 群体智能与自进化**（如自我学习技能安装）演进，并率先集成了 Google Meet 等重度企业级音视频互动插件。
* **护城河与隐患**：其庞杂的插件化体系虽构筑了极高的功能壁垒，但也带来了严峻的“开箱即用”体验挑战（如 Docker mDNS 崩溃、跨渠道消息乱序），在轻量化部署体验上正面临 NullClaw、ZeptoClaw 等小而美项目的挑战。

### 4. 共同关注的技术方向
* **DeepSeek V4 推理内容兼容性（全生态痛点）**：
  几乎所有项目（OpenClaw、Hermes、PicoClaw、LobsterAI、ZeroClaw）都在今日集中爆发或修复了 `reasoning_content` 引发的问题。业界迫切需要一套标准化的多模型上下文清洗机制，以防止思考过程污染工具调用的 Schema 或导致上下文交叉。
* **MCP（Model Context Protocol）的工程化落地（OpenClaw, PicoClaw, Moltis, CoPaw）**：
  社区正从对 MCP 的“概念追捧”转向“实战排雷”。核心诉求集中在：解决 MCP 激活阻塞主进程、修复 HTTP/SSE 长连接生命周期管理，以及处理复杂 JSON Schema 在传递给闭源模型（如 Gemini）时的 400 报错。
* **本地化与多端大模型容灾（Hermes, NanoBot, NanoClaw）**：
  生产环境对单点故障零容忍。项目正在积极引入跨 Provider 的 Failover 机制、API 负载均衡，以及解决 Ollama/vLLM 等本地部署中的 HTTP Keep-Alive 连接池重置问题。

### 5. 差异化定位分析
* **目标用户分层**：
  * **OpenClaw、ZeroClaw**：瞄准需要跨平台（Telegram/Teams/Wechat）并发的 Ops 团队和高级极客，提供网关级调度。
  * **IronClaw、NanoClaw**：更侧重私有化部署与数据安全，引入 Ed25519 签名审计、Landlock 沙盒隔离，吸引对隐私敏感的企业用户。
  * **NullClaw、ZeptoClaw**：主打轻量化与边缘计算，针对树莓派、VPS 或 WSL 等低资源环境进行特化设计（如剥离 Chromium 依赖，解决 accept4 死循环）。
* **技术架构差异**：
  * **交互模式**：NanoBot 引入 `ask_user` 探索 CLI 交互闭环；CoPaw 引入 LLM 异步生成标题优化 Web 端体验。
  * **内存与路由**：LobsterAI 和 CoPaw 都在构建基于远程 Embedding 的长期记忆搜索（RAG），而 OpenClaw 则直接探索让 Agent 自主管理 `skills` 的上层路由。

### 6. 社区热度与成熟度
* **高速膨胀与阵痛期（OpenClaw, Hermes, ZeroClaw）**：这三个项目社区热度极高，但均遇到了“规模带来的反噬”。Hermes 积压了核心依赖的 CVE 安全漏洞且 Triages 缓慢；ZeroClaw 的 Web 仪表盘安装脚本被大量吐槽；OpenClaw 的 Docker 容器底层网络冲突问题亟待修复。
* **质量深耕与平稳迭代（PicoClaw, IronClaw, LobsterAI, Moltis）**：这些项目处于稳定上升期。PicoClaw 保持了极高的 Bug 日清率；LobsterAI 在做深度的生命周期回退计时器重构；Moltis 则在精细化技能黑白名单过滤。
* **基建防御期（ZeptoClaw, NanoClaw）**：开发重心暂时不在新功能，而在扩展 CI 矩阵防偏移和修补容器逃逸等安全底线。

### 7. 值得关注的趋势信号
1. **从“被动路由”到“自主进化”**：OpenClaw 提出的 Agent 自主安装技能（Fast Learning Loop）和 CoPaw 提出的基于 Embedding 的 Top-K 语义技能路由，预示着 AI Agent 正在摆脱穷举式的 Tool Prompt，向动态按需加载技能的“大脑”进化。
2. **SaaS 集成的去 MCP 化倾向**：NanoClaw 中开发者提出通过 `curl + OneCLI` 的极简模式绕过笨重的 MCP Server。这表明业界可能在反思当前 MCP 协议的沉重感，针对单一 SaaS 场景探索更轻量的 Function Calling 范式。
3. **安全与权限颗粒度的极度细化**：IronClaw 引入的沙盒 Web UI 权限拦截、ZeroClaw 对多租户 RBAC 的强烈呼声，以及各项目对 Shell 注入/SSRF 的防御，共同释放了一个强烈信号——**2026 年 AI Agent 的发展主线之一是“安全与权限的确认”，人机协同审批流将成为企业级 Agent 的标配。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-04-26 NanoBot 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-04-26)

## 1. 今日速览
NanoBot 项目在过去 24 小时内保持了**极高的活跃度与社区参与热情**。项目今日共处理了 8 条 Issue（活跃率 100%，暂无关闭）和 28 条 PR（其中 17 条待合并，11 条顺利合入/关闭）。整体来看，开发重心正明显向**多渠道体验优化、底层架构安全性**以及**模型提供商兼容性**倾斜。社区贡献者不仅积极提交功能增强，还敏锐捕捉到了多个核心 Provider 层的边界缺陷，展现了项目良好的开源共创生态与健康度。

## 2. 版本发布
* **无新版本发布**。今日无新的 Tag 或 Release 产出。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在功能丰富度和渠道适配性上取得了实质性进展：
* **新增 ask_user 工具** ([PR #2791](https://github.com/HKUDS/nanobot/pull/2791))：引入了允许 Agent 暂停执行并向用户请求确认或补充信息的新工具，大幅增强了 CLI 下的交互能力。
* **飞书渠道多租户体验升级** ([PR #3176](https://github.com/HKUDS/nanobot/pull/3176) 已关闭，演进至 [PR #3449](https://github.com/HKUDS/nanobot/pull/3449))：实现了话题级会话隔离和线索回复，群聊体验显著优化。
* **文档建设与本地化** ([PR #2345](https://github.com/HKUDS/nanobot/pull/2345))：正式合入了高质量的 README 中文翻译，降低了中国开发者社区的上手门槛。
* **办公文档解析能力扩展** ([PR #3336](https://github.com/HKUDS/nanobot/pull/3336))：`read_file` 工具正式支持 DOCX、XLSX、PPTX 等格式，增强了企业级数据处理能力。
* **MS Teams 适配修复** ([PR #3447](https://github.com/HKUDS/nanobot/pull/3447))：修复了 Teams 渠道中线索回复问题，并优化了无效会话引用的清理逻辑。

## 4. 社区热点
* **模型容灾与高可用诉求** ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376))：该 Issue 在今日引发了 8 条活跃讨论（👍 1）。用户指出当前系统仅支持单一 Provider 重试，面临 429 限流或宕机时容易导致任务中断。呼声集中在“跨 Provider 级别的异常自动切换”，反映了生产环境对连续性的极高要求。
* **Agent 专注力与中断恢复** ([Issue #3292](https://github.com/HKUDS/nanobot/issues/3292))：用户提出引入“Session-Level Focus Tool”，希望 Agent 在处理突发分支任务后，能够准确返回并锚定主任务。这暴露出当前 LLM 在长上下文或经历 Compaction 后容易丢失核心目标的痛点。
* **外部 Agent 调用整合** ([Issue #3436](https://github.com/HKUDS/nanobot/issues/3436))：社区正在探讨是否能让 NanoBot 作为上层调度器，直接调用 Codex/OpenCode 等外部框架执行具体任务，展现了项目向“多 Agent 编排网关”演进的潜力。

## 5. Bug 与稳定性
今日报告了数个关键的边界 Bug，部分严重问题已有社区成员迅速提交了针对性修复 PR：

1. **P0 - 推理过程泄漏** ([Issue #3443](https://github.com/HKUDS/nanobot/issues/3443))：在非流式输出路径中，模型的思维链被错误地作为最终响应发送给用户。
   * *修复状态*：已产生针对性修复 PR ([PR #3445](https://github.com/HKUDS/nanobot/pull/3445) 和 [PR #3446](https://github.com/HKUDS/nanobot/pull/3446))，通过增加 `reasoning_as_content` 标识位进行优雅降级。
2. **P1 - 企业微信(WeCom)资源上传失败** ([Issue #3435](https://github.com/HKUDS/nanobot/issues/3435))：包含媒体附件的消息会触发 `[file upload failed]`，阻断了多媒体交互体验。（目前尚待确认排查）
3. **P1 - 本地模型服务连接中断** ([Issue/PR #3444](https://github.com/HKUDS/nanobot/pull/3444))：使用 Ollama/vLLM 等本地服务时，由于 HTTP Keep-Alive 连接池机制，导致连续两次调用时发生连接重置。已提交 PR 禁用本地端点的 Keep-Alive。
4. **P2 - Telegram Markdown 渲染不稳定** ([Issue #2568](https://github.com/HKUDS/nanobot/issues/2568))：升级特定版本后，Markdown 解析出现时好时坏的回退现象。

## 6. 功能请求与路线图信号
综合本期 Issues 与活跃 PR，推测项目未来的演进方向：
* **更健壮的模型调度层**：`prefer_free` 选项的加入 ([PR #3416](https://github.com/HKUDS/nanobot/pull/3416)) 及 Failover 机制的讨论，预示着项目即将构建更强大的负载均衡与成本控制策略。
* **企业级权限与内存治理**：MGP 侧跨会话内存管理的引入 ([PR #3408](https://github.com/HKUDS/nanobot/pull/3408))，以及针对不同群聊执行不同策略的 RFC ([Issue #3309](https://github.com/HKUDS/nanobot/issues/3309))，说明项目正积极适应大型团队部署的需求。
* **底层安全对抗升级**：连续出现的 Shell 注入拦截 ([PR #3366](https://github.com/HKUDS/nanobot/pull/3366)) 及非 HTTP SSRF 扫描 ([PR #3252](https://github.com/HKUDS/nanobot/pull/3252)) 表明，Tool 调用沙箱的安全性仍是核心迭代重点。

## 7. 用户反馈摘要
* **场景痛点**：需要同时配置多家大厂 API 以防单点故障；飞书/Telegram 群组中机器人回复容易造成刷屏或上下文串台。
* **满意度体现**：社区对项目更新响应速度快表示认可（Bug 刚暴露即有对应 PR 产生）；对项目增加诸如中文文档等本地化举措感到满意。
* **期待方向**：用户期待 Agent 在长周期工作中具备更好的“记忆连续性”和“状态自管理能力”，而不仅仅是作为一个被动的指令执行器。

## 8. 待处理积压
* **Heartbeat (心跳) 调试困难** ([Issue #3437](https://github.com/HKUDS/nanobot/issues/3437))：心跳机制目前只能通过 30 分钟的定时器触发，开发者难以低成本介入调试。该功能诉求目前尚处于暴露阶段，建议维护团队评估是否纳入下一次迭代。
* **Voice 转写脆弱性** ([PR #3253](https://github.com/HKUDS/nanobot/pull/3253))：Whisper 端点的偶发 502/503 会导致语音内容被当做空文本处理，该修复 PR 包含了指数退避重试逻辑，已等待数日，建议尽快安排 Review 以提升语音交互体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-26)

## 1. 今日速览
Hermes Agent 今日社区活跃度处于高位，项目保持极高的热度。过去 24 小时内新增或活跃的 Issues 达 46 条，活跃 Pull Requests 也达到 46 条，但今日仅有 4 个 Issues 被关闭，4 个 PRs 被合并或关闭。整体呈现出“高输入、低输出”的态势，表明社区反馈和代码贡献非常踊跃，但核心维护团队目前面临较大的 Triages 和 Review 压力。目前暂无新版本发布，项目处于极其密集的功能迭代与问题修复周期中。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并或关闭的 PR 和 Issue 数量较少，主要集中在对既有功能的体验修复与特定路径错误的解决：
- **CLI 初始化崩溃修复**：已关闭 Issue #10846，修复了当配置文件中 `display: null` 时 CLI 皮肤引擎初始化崩溃的问题。
- **工具配置加载优化**：已合并/关闭 PR #10842，移除了 `delegate_tool` 和 `code_execution_tool` 配置加载时对 CLI 模块的直接依赖，避免了不必要的副作用。
- 维护者正在集中精力处理边界条件（如跨系统路径、上下文丢失、特殊终端输出等）的 PR 积压，为下一个稳定版本的发布做准备。

## 4. 社区热点
今日讨论最热烈的问题高度聚焦于**认证授权、上下文丢失和多 provider 兼容性**：
- **Anthropic 订阅认证耗尽问题** ([#6475](https://github.com/NousResearch/hermes-agent/issues/6475)，25条评论，15 个赞)：大量用户反馈在使用 Claude 订阅认证时遇到 `You're out of extra usage` 错误，且重启无效。这反映出 Hermes 在与上游商业 API 交互时的额度/鉴权处理机制存在不稳定的痛点。
- **原生视觉模型支持需求** ([#13065](https://github.com/NousResearch/hermes-agent/issues/13065)，6条评论)：开发者指出 Hermes 当前强制将图像路由至辅助视觉模型，呼吁对 GPT-4o 等具备原生视觉能力的模型提供直通支持。
- **DeepSeek 推理内容处理 Bug** ([#15741](https://github.com/NousResearch/hermes-agent/issues/15741) & [#15717](https://github.com/NousResearch/hermes-agent/issues/15717))：即使前序 PR 已经声称修复，在定时任务路径下 DeepSeek V4 依然报错 `reasoning_content` 缺失，引发了多轮技术讨论。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，按严重程度排列如下：

**🔴 Critical (P1)**
- **DeepSeek/Kimi 跨 Provider 上下文污染** ([#15748](https://github.com/NousResearch/hermes-agent/issues/15748))：在切换不同 Provider 时，`reasoning_content` 发生错误传递，导致 API 400 错误。👉 **已有对应修复 PR** [#15749](https://github.com/NousResearch/hermes-agent/pull/15749)。
- **上下文压缩静默丢失对话历史** ([#10719](https://github.com/NousResearch/hermes-agent/issues/10719))：当摘要生成失败时，代理会静默丢弃所有中间对话轮次，且用户无感知，对记忆连贯性造成致命打击。
- **MCP 阻塞导致 TUI 死锁** ([#10756](https://github.com/NousResearch/hermes-agent/issues/10756))：用户在 MCP 工具进行 I/O 阻塞时发出中断信号，会导致 TUI 永久卡死在 "interrupting..." 状态。
- **Ubuntu 安装向导无法粘贴 API Key** ([#15768](https://github.com/NousResearch/hermes-agent/issues/15768))：在部分 Ubuntu 环境下，Setup 步骤中的标准输入失效，阻止新用户完成初始化。
- **Matrix 协议递归配对死循环** ([#15763](https://github.com/NousResearch/hermes-agent/issues/15763))：网关错误地将系统事件视为新用户配对请求，导致消息洪泛。

**🟡 High (P2)**
- **终端工具状态泄漏** ([#15459](https://github.com/NousResearch/hermes-agent/issues/15459))：在持久化终端模式下，大量的 `declare -x` 环境变量声明被直接喂给 LLM，浪费了宝贵的上下文窗口。
- **自定义端点工具调用失效** ([#15551](https://github.com/NousResearch/hermes-agent/issues/15551))：配置自定义 API 端点时，Hermes 仅作为纯聊天机器人，丧失了工具调用能力。
- **Web UI 模型切换 Provider 不一致** ([#14076](https://github.com/NousResearch/hermes-agent/pull/14076))：Web 界面切换模型时未更新底层 Provider。👉 **已有对应修复 PR**。

## 6. 功能请求与路线图信号
社区提出的功能请求显示出 Hermes 正向**更复杂的多智能体协同与精细化控制**演进：
- **子任务独立模型委派** ([#15789](https://github.com/NousResearch/hermes-agent/issues/15789)) 与 **异步多 Profile 任务委派** ([PR #15785](https://github.com/NousResearch/hermes-agent/pull/15785))：开发者强烈希望不同的 delegate_task 能够路由到不同的模型/Provider，同时要求委托任务不阻塞主线程，这两个 PR/Issue 结合起来预示着多 Agent 架构将迎来重大升级。
- **企业微信(WeCom)群聊支持** ([PR #10691](https://github.com/NousResearch/hermes-agent/pull/10691))：扩充了国内企业级 IM 场景的接入能力。
- **Web 端多配置文件切换** ([#10674](https://github.com/NousResearch/hermes-agent/issues/10674))：随着单机多实例运行需求增加，多隔离配置的 UI 切换成为刚需。

## 7. 用户反馈摘要
从今日的 Issues 提炼出以下典型用户画像与真实痛点：
- **部署与兼容性障碍多**：国内/特殊网络用户在 NAS Docker 部署权限挂载 ([#15290](https://github.com/NousResearch/hermes-agent/issues/15290))、VPS 环境无头浏览器运行 ([#15765](https://github.com/NousResearch/hermes-agent/issues/15765)) 遇到大量水土不服的问题，说明安装基线与错误提示需要优化。
- **Token 消耗与幻觉问题**：有用户抱怨在使用 Web Search 和 FireCrawl 等外部工具时频繁出现幻觉和空回复 ([#8993](https://github.com/NousResearch/hermes-agent/issues/8993))，同时要求提供更细粒度的 Token 控制开关（如关闭工具追踪记录，见 [PR #10679](https://github.com/NousResearch/hermes-agent/pull/10679)）。
- **Discord 体验降级**：重度 Discord 用户反馈 Hermes 会忽略长代码段自动生成的 `message.txt` 附件 ([#12511](https://github.com/NousResearch/hermes-agent/issues/12511))，导致 Agent “看漏”重要上下文。

## 8. 待处理积压
以下高优先级问题及 PR 长期未被合并或响应，提醒维护团队重点关注以避免安全风险与用户流失：
- **核心依赖安全漏洞 (CVE)** ([#10695](https://github.com/NousResearch/hermes-agent/issues/10695))：`aiohttp`, `cryptography` 等底层库存在的安全隐患至今未更新。
- **安装脚本与 Auth 安全审计** ([#10746](https://github.com/NousResearch/hermes-agent/issues/10746)，[#10693](https://github.com/NousResearch/hermes-agent/issues/10793))：远程脚本执行的安全模式、OAuth PKCE 验证逻辑存在设计缺陷。
- **长耗时 Cron 任务阻塞调度器** ([#3752](https://github.com/NousResearch/hermes-agent/issues/3752))：自 3 月底提出至今未修复，严重影响重度自动化网关用户的稳定性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the daily dynamic report for the PicoClaw project based on the provided data.

---

# 📊 PicoClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了**极高的开发活跃度与社区健康度**。项目合入/关闭了 12 个 PR，关闭了 5 个 Issue，同时社区新提出了 2 个 Issue 和 9 个待合并 PR，呈现出“高产出、高响应”的良性循环态势。今日核心进展集中在**Web Chat 交互重构**与 **DeepSeek V4 推理模型的历史记录兼容性修复**，标志着项目在多模型适配和多渠道 UI 体验上迈出坚实一步。

## 2. 版本发布
项目今日推送了 1 个新构建版本：
- **[ nightly ] Nightly Build** (`v0.2.7-nightly.20260425.8d51d306`)
  - **性质**：自动化每日构建版本，包含最新合入主分支的代码。
  - **注意**：官方提示可能存在不稳定性，建议测试环境使用。
  - **变更对比**：[v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，大幅提升了系统的稳定性和用户体验：
- **Web 前端体验重塑**：
  - [#2661](https://github.com/sipeed/picoclaw/pull/2661) 增加了思考过程可见性切换功能。
  - [#2659](https://github.com/sipeed/picoclaw/pull/2659) 修复了思考气泡折叠状态全局共享的 UI Bug，实现了状态隔离。
  - [#2660](https://github.com/sipeed/picoclaw/pull/2660) 优化了工具调用的反馈格式，将参数美化为 JSON 代码块，显著提升可读性。
- **模型 Provider 与推理兼容性**：
  - [#2657](https://github.com/sipeed/picoclaw/pull/2657) 彻底解决了 DeepSeek 推理模式下历史记录顺序错误及 Web Chat 刷新不一致的核心 Bug。
- **工具链稳定性提升**：
  - [#2666](https://github.com/sipeed/picoclaw/pull/2666) 修复了 MCP 调用传递 `null` 参数的协议违规问题（改为 `{}`）。
  - [#2664](https://github.com/sipeed/picoclaw/pull/2664) 修复了 MCP HTTP/SSE 传输中会话失效的问题，增加了重试与生命周期管理。
- **其他改进**：
  - [#2570](https://github.com/sipeed/picoclaw/pull/2570) 使 Seahorse 上下文管理的 `fresh_tail_size` 变得可配置。
  - [#2498](https://github.com/sipeed/picoclaw/pull/2498) 修复了多个 `/use` skills 被覆盖的问题。
  - [#2531](https://github.com/sipeed/picoclaw/pull/2531) 引入了跨 Agent 任务交接的 `delegate` 工具（待合并状态，但已被标记重要进展）。

## 4. 社区热点
今日社区关注点主要集中在**第三方工具兼容**与**国内大模型支持**上：
- **MCP 复杂 Schema 兼容性问题** ([#2668](https://github.com/sipeed/picoclaw/issues/2668))：由用户 YoranBrault 提出，当使用 Notion 等包含复杂 JSON Schema (`$ref`, `anyOf`) 的 MCP 时，PicoClaw 在调用 Gemini 模型时崩溃（HTTP 400）。这反映了用户将 PicoClaw 接入复杂企业级数据源的强烈需求。
- **OpenCode 模型供应商支持** ([#2671](https://github.com/sipeed/picoclaw/issues/2671))：国内用户 zcj1122-rgb 提出希望支持 opencode 的 zen 和 go 订阅，体现了社区对扩充本土化/特色 LLM 渠道的呼声。

## 5. Bug 与稳定性
今日报告并处理的 Bug 按严重程度划分如下：
- **P0 (严重/Crash)**：
  - [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668): Gemini 调用包含复杂 Schema 的 MCP 工具时直接返回 400 错误。*(目前尚无对应 Fix PR)*
- **P1 (核心功能受损)**：
  - [Issue #2650](https://github.com/sipeed/picoclaw/issues/2650) & [Issue #2648](https://github.com/sipeed/picoclaw/issues/2648): DeepSeek-V4-Flash 开启推理后，调用工具或后续对话崩溃。*(已由 PR #2657 修复并关闭)*
- **P2 (一般/UI/体验)**：
  - [Issue #2615](https://github.com/sipeed/picoclaw/issues/2615): Web Chat 刷新后工具摘要消失。*(已由 PR #2657 修复并关闭)*
  - [Issue #1790](https://github.com/sipeed/picoclaw/issues/1790): OpenRouter free 模型 ID 校验报错 400。*(已关闭)*
  - [Issue #2600](https://github.com/sipeed/picoclaw/issues/2600): MCP 无参数时发送 `null`。*(已由 PR #2666 修复并关闭)*

## 6. 功能请求与路线图信号
从待合并的 PR 和新 Issue 中，可以捕捉到 v0.2.7 正式版的重要路线图信号：
- **Web 端结构化数据支持**：[PR #2672](https://github.com/sipeed/picoclaw/pull/2672) 试图在 Web 渠道全面支持结构化 `tool_calls`，这将为后续的复杂 Agent 交互奠定前端基础。
- **网络健壮性**：[PR #2669](https://github.com/sipeed/picoclaw/pull/2669) 提出为 LLM API 请求增加可配置的网络重试与退避机制，表明项目正在向“企业级生产可用”迈进。
- **跨 Agent 协作**：[PR #2531](https://github.com/sipeed/picoclaw/pull/2531) 的 `delegate` 工具暗示 PicoClaw 正在布局多 Agent 编排能力，这是目前 AI Agent 领域的前沿方向。

## 7. 用户反馈摘要
- **真实痛点**：用户在使用带“深度思考/推理”属性的模型（如 DeepSeek-V4）时，遭遇了严重的上下文错乱和对话中断问题（#2650, #2648）。这表明 LLM 输出的非标推理内容对历史消息管理的冲击是当前 Agent 框架的通用难题，很高兴看到 PicoClaw 已迅速修复。
- **使用场景**：用户大量依赖 Web Chat 进行日常交互（对时间戳格式、刷新状态一致性要求高），且正在积极尝试将 Notion 等服务通过 MCP 桥接到各种闭源模型（如 Gemini、OpenRouter）上。
- **满意度**：社区修复响应极快，例如 MCP 的 `null` 参数问题和 Web UI 的状态 Bug 在一天内即有对应 PR 提交并合入，维护者的介入速度值得肯定。

## 8. 待处理积压
以下重要的长期活跃/待合并项需要维护团队关注：
- **长期 PR 审查瓶颈**：
  - [PR #1780](https://github.com/sipeed/picoclaw/pull/1780) (QQ 连接稳定性增强)：自 3 月 19 日开启，至今仍在等待合并。
  - [PR #2163](https://github.com/sipeed/picoclaw/pull/2163) (修复 Google Antigravity OAuth Token 刷新)：自 3 月 29 日开启。
  - [PR #2260](https://github.com/sipeed/picoclaw/pull/2260) (支持 xAI 兼容)：自 4 月 2 日开启。
  - [PR #2672](https://github.com/sipeed/picoclaw/pull/2672) & [PR #2670](https://github.com/sipeed/picoclaw/pull/2670)：今日新提交的重磅功能 PR，等待 Review。
- **待响应 Issue**：
  - [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668)：Gemini 复杂 MCP Schema 错误需要官方确认修复计划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project daily report for NanoClaw based on the provided data. 

---

# 📊 NanoClaw 开源项目动态日报 (2026-04-26)

## 1. 今日速览
NanoClaw 项目今日维持了**高度活跃**的开发状态。过去 24 小时内，项目共处理了 29 个 Pull Requests，其中 18 个新 PR 处于待合并状态，11 个 PR 被合并或关闭；同时新增了 4 个 Issue 讨论（3 开放，1 关闭）。
今日的开发重心呈现出明显的“**安全加固与性能优化并举**”的特征。维护者与社区开发者集中修复了多项安全漏洞（如 Host 容器逃逸、Webhook 请求限制）和系统稳定性问题（如路由错乱、正则表达式失效）。此外，社区在多模态（语音转录）和可观测性（Usage Logging）等外围生态技能的拓展上展现了极高的热情。

## 2. 版本发布
**无新版本发布**。今日主要聚焦于主分支的代码合并、安全修复与 Skill 生态扩展，可能正在为下一个 Minor/Patch 版本积累特性与修复。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，显著提升了项目的安全性与可用性：
*   **安全与基础设施**：
    *   [PR #2005](qwibitai/nanoclaw PR #2005) `fix(mount-security)`: 修复了 `container.json` 中使用错误键名（Docker 简写）导致的验证器崩溃问题，完善了挂载安全机制。
*   **Web 渠道拓展**：
    *   [PR #1863](qwibitai/nanoclaw PR #1863) `feat: add web channel`: 成功合并！为 NanoClaw 引入了原生的基于浏览器的聊天 UI，无需 Redis 或外部应用依赖，大幅降低了本地测试与轻量级部署的门槛。
*   **Skill 生态整合与优化**：
    *   [PR #2010](qwibitai/nanoclaw PR #2010) `docs(skills): enrich /add-signal`: 整合了 `/add-signal-v2` 的实战经验并移除了冗余的 v2 Skill，精简了代码库。
    *   [PR #2015](qwibitai/nanoclaw PR #2015) `ci(review): add coding-policy`: 引入了基于大模型的自动化 PR 审查工作流。
*   **复杂功能关闭/重置**：
    *   [PR #1879](qwibitai/nanoclaw PR #1879) 及 [PR #1362](qwibitai/nanoclaw PR #1362)、[PR #1117](qwibitai/nanoclaw PR #1117) 被关闭，维护者可能在进行架构重构或阶段性清理。

## 4. 社区热点
今日最活跃的讨论与核心诉求集中在**部署体验与多模型支持**上：
*   **自定义 OpenAI 兼容端点 ([Issue #1984](qwibitai/nanoclaw Issue #1984))**：作者 `TeeJS` 指出尽管文档有相关说明，但在实际使用中配置自定义/本地 OpenAI 兼容端点依然困难。该问题引发了 3 条评论探讨，反映出社区对**解除官方 Provider 绑定、支持私有化 LLM 部署**的强烈需求。
*   **开发者表扬信 ([Issue #2017](qwibitai/nanoclaw Issue #2017))**：用户 `zzibo` 发帖称赞项目，从侧面印证了项目在初级用户群体中拥有良好的口碑。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有对应的修复 PR 提交（按严重程度排序）：

1.  🔴 **严重：Docker 权限导致部署阻塞**
    *   问题：[Issue #2006](qwibitai/nanoclaw Issue #2006) - 在 Debian 12 LXC 环境新安装时，脚本将用户加入 `docker` 组后，后续步骤依然报 `socket permission denied`，且恢复机制未生效。
    *   状态：**暂无关联修复 PR**。
2.  🔴 **严重：代理间消息路由错乱**
    *   问题：当两个 channel 同时处于活跃会话时，agent-to-agent 的回复可能会进入错误的 session。
    *   状态：**已有 PR [PR #2002](qwibitai/nanoclaw PR #2002) 正在处理**。
3.  🟡 **中等：安装脚本假死**
    *   问题：[Issue #2014](qwibitai/nanoclaw Issue #2014) - Ubuntu 环境下 `install-node.sh` 因内核升级提示而静默挂起。
    *   状态：**暂无关联修复 PR**。
4.  🟡 **中等：安全正则表达式失效（逻辑漏洞）**
    *   问题：非法的 `engage_pattern` 正则表达式导致系统抛出错误时，旧的 catch 逻辑错误地返回了 `true`（默认放行），导致本该受限的 Agent 响应了所有消息。
    *   状态：**已有 PR [PR #2011](qwibitai/nanoclaw PR #2011) 修复为 'fail closed'（默认拒绝）**。
5.  🟡 **中等：轮询测试崩溃**
    *   问题：[PR #2013](qwibitai/nanoclaw PR #2013) 暴露了 `runPollLoop` 未正确处理 abort 信号，导致集成测试在 teardown 时崩溃。

## 6. 功能请求与路线图信号
通过今日的 Issue 和 PR，可以提取出项目近期的 Roadmap 重点信号：
*   **模型提供商深度解耦**：[Issue #1984](qwibitai/nanoclaw Issue #1984) 的呼声与 [PR #1968](qwibitai/nanoclaw PR #1968)（端到端 per-agent provider/model 配置）高度吻合。这表明**细粒度、多端点的模型路由**将成为下一版本的杀手级特性。
*   **可观测性与计费支持**：[PR #2012](qwibitai/nanoclaw PR #2012) 提议增加 `/add-usage-logging` 技能，通过 `usage_log` 表精确记录每个会话的 Token、模型和成本。这暗示项目正在为**企业级部署或 SaaS 计费**做数据准备。
*   **无 MCP 依赖的轻量级工具集成**：[PR #2016](qwibitai/nanoclaw PR #2016) 提出的 YNAB 预算工具，绕过了笨重的 MCP Server，直接通过 curl + OneCLI 与 API 交互。这种模式可能成为未来 NanoClaw 集成第三方 SaaS 的标准范式。

## 7. 用户反馈摘要
*   **真实使用场景**：用户正在积极将 NanoClaw 部署于 Proxmox 的 LXC 容器中，说明其在**自托管和私有云**场景中极具吸引力。
*   **核心痛点**：部署脚本（特别是 Node 和 Docker 的安装）对非标准 Linux 环境的容错率不足。后台等待进程缺乏对系统交互式提示的屏蔽。
*   **满意度**：用户对项目整体设计感到满意，但开发体验（特别是 BYO 兼容端点的接入调试）仍需进一步打磨。

## 8. 待处理积压
*   **[PR #1968](qwibitai/nanoclaw PR #1968) - 端到端 provider/model 配置**：该 PR 由核心贡献者提交，包含 5 个依赖提交。鉴于 [Issue #1984](qwibitai/nanoclaw Issue #1984) 反映的强烈需求，建议维护者优先 Review 并推进此 PR。
*   **[Issue #2006](qwibitai/nanoclaw Issue #2006) 与 [Issue #2014](qwibitai/nanoclaw Issue #2014) - Linux 部署死锁问题**：这两个问题会导致全新安装的用户直接卡死在第一步。建议维护团队尽快在 Setup 脚本中加入 `DEBIAN_FRONTEND=noninteractive` 环境变量以规避内核升级提示，并修复用户组权限刷新逻辑。
*   **多个处于 Open 状态的安全 PR**：如 Webhook body 限制 ([PR #2000](qwibitai/nanoclaw PR #2000)) 和 容器路径穿越防御 ([PR #2001](qwibitai/nanoclaw PR #2001))，涉及 I/O 边界安全，建议尽快排期审计并合入主分支。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体呈现出**高活跃度与聚焦问题排查**的状态。虽然今日没有发布任何新版本，但社区保持了良好的互动节奏：共有 3 个 Issue 得到更新（2 活跃/1 关闭），以及 1 个待处理的 PR 被正式关闭。当前项目的焦点高度集中在 **`web_search`（网络搜索）功能的实用性**以及**底层网关的资源占用优化**上。整体来看，项目维护者正在积极消化来自边缘设备（低资源设备）和特定运行环境（如 WSL2）的兼容性反馈，项目健康度保持在良好水平。

## 2. 版本发布
*今日暂无新版本发布。*

## 3. 项目进展
今日项目在代码和文档维护上取得了微小但重要的进展：
*   **PR #815 [CLOSED]** `fix(web_search): add setup guidance for missing providers`：由贡献者 `manelsen` 提交。该 PR 虽然最终被关闭，但其初衷是为了改善 `web_search` 在没有配置可靠搜索提供商时的错误报告机制。它补充了指向 SearXNG (`http_request.search_base_url`) 和托管服务商 API 密钥的设置指南。该 PR 的关闭与今日 #812 Issue 的解决相呼应，表明官方可能通过其他途径或在主分支中直接优化了搜索配置的用户提示。

## 4. 社区热点
今日最受关注的议题无疑是围绕 **“搜索功能在低资源配置下的可用性”** 展开。
*   **Issue #812 [CLOSED] [[bug] http_request](https://github.com/nullclaw/nullclaw/issues/812)**：该 Issue 拥有今日最高的互动量（7 条评论，1 个点赞）。作者 `uMendex` 详述了在测试 ZeroClaw 和 NullClaw 时遇到的互联网搜索启用失败问题。该问题的活跃讨论反映了新用户在初次配置 AI 联网能力时存在一定的门槛。
*   **Issue #871 [OPEN] [[bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support](https://github.com/nullclaw/nullclaw/issues/871)**：这是今日引发深度技术思考的新 Issue。`uMendex` 再次发帖，直击 NullClaw 的核心应用场景——在廉价、低性能设备上运行。用户指出，依赖外部 API（如 Brave Search）会引发隐私和成本问题，呼吁重新审视底层搜索支持。

## 5. Bug 与稳定性
今日报告了 2 个值得注意的 Bug，按严重程度排列如下：

*   **🔴 严重：WSL2 环境下的 CPU 满载死循环**
    *   **Issue:** [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870)
    *   **详情:** 由用户 `weissfl` 报告。在 WSL2 (Windows 11) 环境下运行 `nullclaw gateway` 时，即使处于空闲状态，也会有一个线程持续占用 100% CPU。虽然网关功能（如 Telegram 机器人）保持正常，但资源泄漏问题严重。
    *   **状态:** 严重性极高（影响特定系统环境），暂无修复 PR。
*   **🟡 中等：核心使用场景受阻**
    *   **Issue:** [#871 web_search is impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871)（详情见上述社区热点）
    *   **状态:** 属于架构/兼容性设计范畴，暂无直接修复 PR。

## 6. 功能请求与路线图信号
结合 Issues 和 PR 动态，可以发现项目在下一阶段可能需要重点演进的方向：
*   **原生 DuckDuckGo 搜索的回归/适配**：用户在 [#871](https://github.com/nullclaw/nullclaw/issues/871) 中强烈暗示，需要一种不需要依赖外部昂贵 API 的原生搜索方案。如果官方采纳，这极有可能成为下一个小版本的核心功能。
*   **更健壮的边缘设备支持**：NullClaw 的定位明确包含“弱性能设备”，因此类似 WSL2 底层网络事件循环 的 Bug (#870) 提醒维护者需要在不同架构和虚拟化平台上加强测试。

## 7. 用户反馈摘要
从今日的 Issue 描述和评论中，可以提炼出以下真实的用户声音：
*   **背景与使用场景**：用户群体中存在大量在低配置、廉价硬件上部署本地 AI 诉求的开发者；同时，也有不少用户将其视作 Picoclay、ZeroClaw 的替代方案进行横向评测。
*   **痛点**：
    1.  **联网配置门槛高**：用户不知道如何正确配置 `http_request` 或寻找合适的免费搜索接口。
    2.  **外部 API 依赖的抗拒**：出于隐私和成本考虑，用户对必须使用 Brave 等付费 API 感到不满。
*   **满意点**：用户 `uMendex` 在 [#812](https://github.com/nullclaw/nullclaw/issues/812) 中提到 NullClaw 的架构“看起来非常有条理”，这表明项目的代码设计和模块化给开发者留下了良好的第一印象。

## 8. 待处理积压
*   **高优先级跟进**：[#870 (100% CPU on WSL2)](https://github.com/nullclaw/nullclaw/issues/870) 是一个刚刚提交的严重性能问题，将直接影响 Windows 生态开发者的体验。建议维护者尽快在 WSL2 环境中复现并排查 `accept4` 系统调用相关的死循环逻辑。
*   **架构讨论跟进**：[#871 (web_search 低资源可用性)](https://github.com/nullclaw/nullclaw/issues/871) 涉及项目核心卖点的可用性，建议维护者在此 Issue 下明确官方路线图，或提供官方推荐的 SearXNG 部署指南以作为临时解决方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🤖 IronClaw 项目动态日报 (2026-04-26)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日保持**高活跃度**的开发状态，重心主要集中在核心稳定性修复与 MCP（Model Context Protocol）生态增强上。过去 24 小时内，项目新增/活跃了 6 个 Issue 和高达 27 个 PR（其中 24 个待合并），显示核心团队与社区开发者正在密集推进多个并行任务。值得注意的是，v0.25.0 版本发布后带来了部分回归问题（如启动配置覆盖、stdio 激活失败），但社区响应迅速，相关修复 PR 已于今日提交。整体来看，项目处于**快速迭代、功能横向扩展**的健康发展期。

---

## 2. 版本发布

今日**无新版本发布**。（目前主干版本仍为 v0.25.0）

---

## 3. 项目进展

今日共有 **3 个 PR 被合并或关闭**，主要推进了以下技术进展：

- **LLM 工具调用规范化**：PR [#2951](https://github.com/nearai/ironclaw/pull/2951) 提取了共享的工具结构规范至 `tool_schema.rs`，并对 NEAR AI 的 Chat Completions 接口应用了 `FlattenOnly` 策略，优化了不同 LLM 供应商的工具调用兼容性。
- **Engine V2 架构演进**：PR [#2868](https://github.com/nearai/ironclaw/pull/2868) 针对被阻断的 Providers 优化了 `available_actions` 机制，使其仅返回可调用状态，这是 Engine V2 重构的重要里程碑，简化了 Agent 的动作编排逻辑。

**整体进度评估**：今日合并的 PR 深化了 Engine V2 底层架构的清理工作，并为后续更复杂的 Agent 编排打下了基础。

---

## 4. 社区热点

今日社区活跃度集中在 MCP 传输层修复和用户权限控制：

- **🔥 MCP 核心缺陷抢修**：Issue [#2923](https://github.com/nearai/ironclaw/issues/2923) 获得了 1 个 👍 和 2 条评论。该问题指出在 v0.25.0 中 stdio 传输方式的 MCP 激活失败。核心贡献者 `rajulbhatnagar` 和 `willamhou` 均提交了针对性的修复 PR，体现了社区对阻断性 Bug 的高响应度。
- **💡 ACP 沙箱权限请求机制**：Issue [#2962](https://github.com/nearai/ironclaw/issues/2962) 提出在 Web UI 中为沙箱化的 ACP agents（如 Goose, Codex 等）增加用户授权拦截层（`request_permission`），反映了社区对 AI Agent 安全管控的强烈需求。
- **🚀 MCP Prompts 全面支持**：PR [#2958](https://github.com/nearai/ironclaw/pull/2958) 引入了完整的 MCP Prompts 支持，包括斜杠命令和 HTTP API，极大增强了用户与 MCP 服务器交互的便利性。

---

## 5. Bug 与稳定性

今日报告了多个与 v0.25.0 相关的关键问题，按严重程度排列如下：

| 严重级别 | Issue/PR | 描述 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **🔴 高** | [#2946](https://github.com/nearai/ironclaw/issues/2946) | **配置优先级失效**：每次启动时 `llm_backend` 被强制重置为 `nearai`，覆盖了用户的数据库、环境变量和 config.toml 配置。 | ✅ **已有修复**：PR [#2961](https://github.com/nearai/ironclaw/pull/2961) 修复了 `api_key_required` 的逻辑判定。 |
| **🔴 高** | [#2923](https://github.com/nearai/ironclaw/issues/2923) | **Stdio MCP 激活阻断**：stdio 传输的 MCP 服务器因不必要的 OAuth 预检失败。 | ✅ **已有修复**：PR [#2960](https://github.com/nearai/ironclaw/pull/2960) 及 [#2957](https://github.com/nearai/ironclaw/pull/2957) 均跳过了非 HTTP 传输的 OAuth 发现。 |
| **🟡 中** | [#2955](https://github.com/nearai/ironclaw/issues/2955) | **CI/CD 回归**：`private-oauth` 泄漏测试车道自动化失败。 | ❌ 暂无针对性修复 PR。 |
| **🟡 中** | [#2956](https://github.com/nearai/ironclaw/issues/2956) | **CI/CD 兼容性**：`openai-compatible` 泄漏测试车道失败。 | ❌ 暂无针对性修复 PR。 |

---

## 6. 功能请求与路线图信号

结合今日 Issue 与活跃的 PR，IronClaw 正在向 **“多端融合、安全可控”** 的方向发展：

1. **多渠道通讯**：Issue [#78](https://github.com/nearai/ironclaw/issues/78) 追踪了 P3 优先级的消息平台集成。结合今日更新的原生 Matrix 频道 PR [#2019](https://github.com/nearai/ironclaw/pull/2019) 和 Prismer Cloud IM PR [#1120](https://github.com/nearai/ironclaw/pull/1120)，**跨平台 IM 接入能力预计将在下个版本迎来大爆发**。
2. **安全与审计**：PR [#2684](https://github.com/nearai/ironclaw/pull/2684) 引入了基于 Ed25519 的加密签名工具调用审计，结合用户提出的 Web UI 权限拦截需求（[#2962](https://github.com/nearai/ironclaw/issues/2962)），**企业级的安全与合规能力正在快速补齐**。
3. **迁移与生态接纳**：PR [#2728](https://github.com/nearai/ironclaw/pull/2728) 加入了 `ironclaw migrate` CLI，专门用于从 OpenClaw 和 Hermes 迁移，表明官方正在**积极争取竞品开源生态的用户迁移**。

---

## 7. 用户反馈摘要

从 Issue 详情中可以洞察出用户的真实使用体验：

- **自托管用户的痛点**（来源 [#2946](https://github.com/nearai/ironclaw/issues/2946)）：使用 vLLM 或 LiteLLM 等自建 `openai_compatible` 后端的用户，在升级 v0.25.0 后遇到了严重的配置覆盖问题。这表明项目在**启动生命周期管理和配置优先级解析**上仍需加强稳定性。
- **对轻量化部署的渴求**（来源 [#2923](https://github.com/nearai/ironclaw/issues/2923)）：_stdio_ 传输是本地工具和轻量级部署的首选，该路径的阻断揭示了核心自动化测试对本地非 HTTP 场景的**覆盖不足**。
- **企业级多租户需求**（来源 [#2754](https://github.com/nearai/ironclaw/pull/2754)）：针对用户 Secrets 的自助服务绑定审批功能，反映出企业用户在**多用户环境下的凭证隔离和权限管控**有强烈需求。

---

## 8. 待处理积压

以下几个大型/重要 Issue 及 PR 长期处于 Open 状态，且涉及核心架构，建议维护团队重点关注：

- **🛠️ 基础工具与内存泄漏修复**：PR [#2341](https://github.com/nearai/ironclaw/pull/2341) 修复了文件历史的内存越界问题（最高可占用 500MB），属于高优先级修复，已开启 11 天，亟待推进 Review。
- **🛠️ 显示与体验优化**：PR [#2700](https://github.com/nearai/ironclaw/pull/2700) 解决了 Web UI 侧边栏显示 UUID 哈希值而非可读标题的问题（Issue #2237），影响所有 Web 端用户体验，已开启 6 天。
- **🌐 中国区云服务商支持**：PR [#1446](https://github.com/nearai/ironclaw/pull/1446) 提交了对阿里云百炼 Coding Plan 的支持，包含大量代码变动，已开启超过一个月，建议尽快排期合并，以提升国内开发者的接入体验。

---
*本报告由 AI 智能体基于 GitHub 公共数据自动生成，祝您 Open Source 之旅愉快！*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-04-26)

**数据统计周期**：过去 24 小时
**分析师洞察**：项目今日处于高频修复合并与版本发布的冲刺阶段，底层核心逻辑经过反复打磨，整体代码质量趋于稳定。

---

### 1. 今日速览
过去 24 小时内，LobsterAI 展现出极高的开发活跃度，核心维护者进行了密集的代码提交与合并（共处理 11 个 PR）。项目当前正处于 `2026.04.24` 发版周期的收尾与回归修复阶段，重点围绕多人协同、DeepSeek V4 模型适配以及内存搜索等核心功能进行了深度的 Bug 修复。社区方面，有 4 个历史未决 Issue 出现了动态，主要集中在外部渠道（如飞书、Telegram）的连通性和沙箱本地化配置的诉求上。今日无新版本 Tag 发布，预计当前待合并的集成 PR 将在不久后促成新版本的释出。

---

### 2. 版本发布
**本日无新版本发布。**
但值得注意的是，主干分支刚刚完成了针对 `Release/2026.04.24` 的代码合并（见 [PR #1826](https://github.com/netease-youdao/LobsterAI/pull/1826)），官方可能在完成最终的集成测试后正式推送该版本的 Release。

---

### 3. 项目进展
今日项目取得了实质性进展，共关闭/合并 10 个 PR。维护者针对“会话协同”机制进行了深度的代码提交与回滚操作，最终确立了稳定版本，并集成了多项重要修复：

*   **里程碑版本合并**：[PR #1826](https://github.com/netease-youdao/LobsterAI/pull/1826) 成功合并。该 PR 携带了大量核心更新，包括：引入远程 Embedding 提供商（OpenAI、Gemini）以支持记忆搜索；修复 Windows 环境下 CJK（中日韩）语言的内存搜索问题；以及彻底解决 Cowork 会话生命周期管理问题。
*   **协同稳定性修复（已合并）**：经过严谨的 Revert 与恢复操作（涉及 [PR #1821](https://github.com/netease-youdao/LobsterAI/pull/1821), [#1824](https://github.com/netease-youdao/LobsterAI/pull/1824) 等），最终落地了两个关键修复：
    *   [PR #1817](https://github.com/netease-youdao/LobsterAI/pull/1817)：解决了用户在会话中途切换模型时，Agent 依然报告旧模型名称的异步显示 Bug。
    *   [PR #1820](https://github.com/netease-youdao/LobsterAI/pull/1820)：优化了生命周期回退计时器，防止旧会话的计时器错误地终结新会话的运行（显著提升了多轮对话的稳定性）。
*   **模型与网络兼容性（已合并）**：
    *   [PR #1818](https://github.com/netease-youdao/LobsterAI/pull/1818)：修复了开启网络代理后，导致 OpenAI 原厂模型无法访问的阻塞性问题。
    *   [PR #1819](https://github.com/netease-youdao/LobsterAI/pull/1819)：修复了 DeepSeek V4 在默认开启思考模式且包含工具调用时，强制要求传递 `reasoning_content` 导致的报错。

---

### 4. 社区热点
本日虽无爆发式讨论的新 Issue，但有多个带有 `[stale]`（陈旧/闲置）标签的历史 Issue 突然更新，票数和评论数居前的是：

*   **[Issue #72](https://github.com/netease-youdao/LobsterAI/issues/72) [👍 1]**：用户呼吁增加“基于 API Key 和 Base URL 自动拉取可用模型列表”的功能。这反映了用户在接入各类第三方或本地模型时，手动输入模型 ID 的体验痛点，也暗示了项目在多模型兼容管理上的扩展潜力。
*   **[Issue #39](https://github.com/netease-youdao/LobsterAI/issues/39) [评论 4]** & **[Issue #44](https://github.com/netease-youdao/LobsterAI/issues/44) [评论 3]**：大量用户反馈 LobsterAI 在对接飞书和 Telegram 渠道时存在连接成功但无响应的问题。这是目前社区寻求技术支持最集中的领域。

---

### 5. Bug 与稳定性
今日的开发活动几乎全部围绕 Bug 修复展开，按严重程度划分如下：

*   **🔴 严重 - 导致会话异常中断（已修复）**：Cowork 模块中，当新消息触发时，上一轮的安全兜底计时器会错误地结束当前运行。此 Bug 破坏了连续对话的稳定性，已通过 [PR #1820](https://github.com/netease-youdao/LobsterAI/pull/1820) 彻底解决。
*   **🟠 较高 - DeepSeek V4 兼容性引发报错（已修复）**：DeepSeek V4 在进行工具调用时的参数强校验问题导致工作流中断，已通过 [PR #1819](https://github.com/netease-youdao/LobsterAI/pull/1819) 修复。
*   **🟡 中等 - 代理网络环境失效（已修复）**：用户在使用代理访问 OpenAI 模型时遭遇网络拦截，已通过 [PR #1818](https://github.com/netease-youdao/LobsterAI/pull/1818) 解决。
*   **🟢 待修复 PR 待合并 - Anthropic API 兼容性**：目前仍有一个处于 OPEN 状态的 [PR #1823](https://github.com/netease-youdao/LobsterAI/pull/1823) 正在处理 Schema/Payload 修复，同时被关闭的 [PR #1827](https://github.com/netease-youdao/LobsterAI/pull/1827) 表明官方在尝试扩展 DeepSeek V4 对 Anthropic-messages API 格式的兼容。

---

### 6. 功能请求与路线图信号
*   **端侧模型自动发现**：结合 [Issue #72](https://github.com/netease-youdao/LobsterAI/issues/72) 的诉求，随着本项目接入的模型提供商日益增多，预计未来版本中会引入“模型自动发现与校验”机制。
*   **记忆系统（RAG）增强**：从已合并的 [PR #1826](https://github.com/netease-youdao/LobsterAI/pull/1826) 可以看出，团队正在重点建设 Memory Search 功能，引入 OpenAI/Gemini 的远程 Embedding 就是为了更好地支撑跨语种和本地化知识库的检索，这是个人 AI 助手迈向个性化的重要路线图信号。

---

### 7. 用户反馈摘要
从近期持续活跃的 Issues 中，可以提炼出以下真实用户场景与痛点：
1.  **私有化部署安全顾虑**：用户在沙箱中运行 Skill 时，由于无法向沙箱内注入本地 `.env` 文件，被迫将 API 密钥等敏感信息以明文形式交给 AI（[Issue #54](https://github.com/netease-youdao/LobsterAI/issues/54)），这表明企业级/极客用户对沙箱环境的权限隔离和密钥管理有强烈需求。
2.  **异构平台接入门槛**：不少非技术背景用户在对接飞书、Telegram 等 IM 平台时遇到阻碍，主要体现在环境配置（如全局节点代理配置不当）和 Token 鉴权失败，需要更详尽的 Troubleshooting 文档或更友好的连接测试 UI。

---

### 8. 待处理积压
以下陈旧（Stale）问题尚未得到有效闭环，建议维护团队关注：

1.  **IM 渠道连通性故障积压**：[Issue #39](https://github.com/netease-youdao/LobsterAI/issues/39) (飞书无响应) 和 [Issue #44](https://github.com/netease-youdao/LobsterAI/issues/44) (Telegram 连接失败)。这两个问题影响了用户的核心体验，且均已停滞超过两个月，建议官方补充常见的鉴权与网络排错指南。
2.  **沙箱文件系统权限限制**：[Issue #54](https://github.com/netease-youdao/LobsterAI/issues/54)。涉及到核心安全架构，目前尚未看到官方的明确计划，需持续跟进以提升企业用户信任度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-26)

## 1. 今日速览
过去 24 小时内，Moltis 项目保持了中高水平的开发活跃度。尽管今日没有新的版本发布，但共有 6 个 Pull Requests 经历了更新，其中 2 个核心功能 PR 顺利合并关闭，显示出维护团队正在稳步推进代码合并。同时，社区反馈积极，新增了 2 个 Issue，均围绕最新模型集成和内置功能控制展开。整体而言，项目处于健康的功能迭代与错误修复并行阶段，各项新特性（如沙盒隔离、浏览器后端扩展）正在密集开发中。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日有 2 个重要的 PR 被合并/关闭，显著提升了系统的稳定性和可用性：

*   **合并 PR [#870](https://github.com/moltis-org/moltis/pull/870) `feat(skills): add bundled skill whitelist/blacklist filtering`**
    *   **进展说明：** 引入了内置技能的白名单/黑名单过滤功能，支持通配符（如 `category/*`）。这为用户精细化控制 AI 智能体启用的技能集提供了底层支持。
*   **关闭 PR [#871](https://github.com/moltis-org/moltis/pull/871) `feat(cron): add heartbeat wake cooldown to prevent exec re-fire loop`**
    *   **进展说明：** 修复了定时/心跳任务中的一个潜在死循环或高频唤醒问题。通过在执行回调中添加冷却时间，有效防止了系统资源的过度消耗，增强了后台任务的稳定性。

## 4. 社区热点
今日新开且最受关注的 Issue 集中在智能体工具集成和模型兼容性上：

*   **Issue [#873](https://github.com/moltis-org/moltis/issues/873) `Qwen3.6-35B-A3B: Issues using mcp-servers`**
    *   **热点分析：** 用户报告了在使用最新主流大模型（阿里通义千问 Qwen3.6-35B-A3B）调用 MCP (Model Context Protocol) 服务时遇到的障碍。这反映了社区对 Moltis 兼容最新前沿大模型的迫切需求。
*   **Issue [#875](https://github.com/moltis-org/moltis/issues/875) `[Bug]: Can't disable bundled skill via Web`**
    *   **热点分析：** 用户反馈无法通过 Web 界面禁用内置技能。值得注意的是，此 Issue 恰好与今日合并的 [PR #870](https://github.com/moltis-org/moltis/pull/870)（技能黑白名单过滤）在功能诉求上高度契合，表明新合并的代码可能目前仅支持配置文件层面，Web UI 适配尚待完善。

## 5. Bug 与稳定性
今日新增 1 个明确的功能缺陷报告，另外有 1 个相关的架构修复 PR 正在待合并状态：

1.  **[中等] 无法通过 Web 界面控制内置技能 ([#875](https://github.com/moltis-org/moltis/issues/875))**
    *   **状态：** 刚刚报告，暂无关联的修复 PR。此 Bug 影响了用户的自助管理体验。
2.  **[待修复] MCP 工具调用路由偏差 ([#874](https://github.com/moltis-org/moltis/pull/874))**
    *   **状态：** 开发者 `penso` 已提交修复 PR。该 PR 移除了默认通过 `mcporter` 兼容层路由的设定，改为优先使用原生 MCP 工具。该修复若合并，将大幅提升工具调用的稳定性和准确度。

## 6. 功能请求与路线图信号
从近期的 PR 活动来看，Moltis 正在积极布局以下技术路线：

*   **更强的安全与沙盒隔离**：待合并的 [PR #866](https://github.com/moltis-org/moltis/pull/866) 引入了 Linux Landlock LSM 文件系统隔离机制，表明项目在为 AI 智能体提供系统级安全执行环境方面迈出了重要一步。
*   **轻量化浏览器支持**：待合并的 [PR #869](https://github.com/moltis-org/moltis/pull/869) 添加了 Obscura 作为轻量级 sidecar 浏览器后端。这为需要网页浏览能力的智能体提供了除传统 Chromium 之外的新选择。
*   **内存与上下文管理优化**：活跃的 [PR #826](https://github.com/moltis-org/moltis/pull/826) 重构了聊天记录压缩的模型配置逻辑，这将帮助用户在长对话场景下更灵活地调度辅助模型，降低成本。

## 7. 用户反馈摘要
*   **痛点 (模型适配)**：用户在使用热门的非旗舰模型（如 Qwen3.6-35B-A3B）配合高级功能（如 MCP 服务器）时，容易遇到兼容性问题。说明模型在 Function Calling 或工具调用方面的Prompt适配仍需加强。
*   **痛点 (控制粒度)**：用户希望能够更轻松地开启或关闭特定的内置技能，尤其是在 Web UI 上进行可视化操作，而不是仅仅依赖底层配置文件。
*   **架构期望**：社区开发者在提交 PR 时（如 #874 和 #869），倾向于“无新重度依赖（zero new Rust dependencies）”和“解耦设计（如 sidecar 模式）”，这反映出项目架构被期望保持轻量和高度模块化。

## 8. 待处理积压
目前有待合并的 PR 积压，需要维护者进行 Code Review 并推进合并进程：

*   **[待审核] PR [#874](https://github.com/moltis-org/moltis/pull/874)**：修复 MCP 原生工具调用路由，直接影响模型调用外部工具的成功率，建议优先 review。
*   **[待审核] PR [#869](https://github.com/moltis-org/moltis/pull/869)**：新增 Obscura 浏览器后端。
*   **[长期未合并] PR [#826](https://github.com/moltis-org/moltis/pull/826)**：此 PR 创建于 4 月 22 日，距今已有 4 天，涉及上下文压缩的模型路由逻辑，可能需要进一步测试验证。
*   **[长期待定] PR [#866](https://github.com/moltis-org/moltis/pull/866)**：涉及 Linux 底层安全策略，需谨慎评估其对不同内核版本的退化处理表现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-26)

> 数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (对应底层仓库 agentscope-ai/QwenPaw)
> 分析周期：2026-04-25 00:00 - 23:59 UTC

---

## 1. 今日速览

过去 24 小时，CoPaw (QwenPaw) 项目保持着**极高的社区活跃度**与开发推进速度。项目今日新增/活跃了 13 个 Issue 与 8 个待合并 PR，并发布了最新的 `v1.1.4.post2` 补丁版本。从社区反馈来看，近期版本引入的**状态持久化问题**（如页面刷新导致配置丢失、长期记忆模型重置）成为用户投诉的重灾区，引发了大量 Bug 报告。同时，社区开发者非常活跃，提交了多个重量级 PR，涵盖前端测试框架引入、语义技能路由和 UI 交互重构等核心功能，展现出项目良好的开源生态健康度。

## 2. 版本发布

**Release: [v1.1.4.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post2)**
*   **更新内容**：
    *   修复了 Channel（消息渠道）中审批机制失效的关键问题 ([PR #3832](https://github.com/agentscope-ai/QwenPaw/pull/3832))。
*   **破坏性变更/迁移注意**：无。属于纯 Bug 修复版本，建议所有使用 Channel 审批流（如人工介入确认）的业务场景立即升级。

## 3. 项目进展

今日共有 3 个 PR 被合并/关闭，项目主要在提升系统健壮性与前端体验方面取得进展：

*   **Channel 审批逻辑修复**：合并了核心贡献者 @rayrayraykk 的 [PR #3832](https://github.com/agentscope-ai/QwenPaw/pull/3832)，解决了智能体在执行动作前需要人工审批时不生效的严重问题。
*   **UI 语言配置持久化落地**：合并了社区贡献者 @jinglinpeng 的 [PR #2338](https://github.com/agentscope-ai/QwenPaw/pull/2338)。该 PR 将 Web UI 的语言设置从浏览器 `localStorage` 迁移到了服务端 `config.json`，解决了跨设备或清理缓存后语言设置重置的痛点。

## 4. 社区热点

今日讨论最密集、影响面最广的问题集中在**配置持久化失效**：

*   **[Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)** (评论: 4)：用户反馈 v1.1.4.post1 版本中，切换按钮或刷新页面后，智能体语言、计划模式（Plan mode）等核心配置全部丢失，被用户标记为“严重 Bug”。
*   **[Issue #3821](https://github.com/agentscope-ai/QwenPaw/issues/3821)** (评论: 3)：用户反馈系统备份功能自始至终未成功过，点击备份后加载一分钟左右便跳回原界面，引起多位用户共鸣。
*   **[Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)** (评论: 3)：针对长期记忆向量模型（如 bge-m3）配置在 Docker 容器重启后被清空的深度排查，用户已自行定位到是启动初始化逻辑覆盖了配置文件。
*   **[Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822)** (评论: 3)：用户反馈 MCP (Model Context Protocol) 调用时常导致聊天端无限期卡死，严重阻塞正常使用。

## 5. Bug 与稳定性

今日报告的 Bug 呈现出明显的集中性，主要围绕**数据持久化与初始化**，按严重程度排序如下：

*   **P0 - 严重 (配置与状态丢失)**：
    *   Web UI 核心配置丢失（刷新即丢失）([Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824))。*暂无明确针对此单一 Issue 的 Fix PR，但可能与底层 config 解析逻辑相关。*
    *   Docker 重启后长期记忆向量模型配置被重置为空 ([Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817))。
    *   多 Agent 架构下 `config.json` 与 `agent.json` 读取逻辑不同步导致 Web UI 配置“假保存” ([Issue #3828](https://github.com/agentscope-ai/QwenPaw/issues/3828))。
*   **P1 - 中等 (运行异常)**：
    *   模型执行复杂动作频繁报 422 `MODEL_EXECUTION_FAILED` 错误 ([Issue #3795](https://github.com/agentscope-ai/QwenPaw/issues/3795))。
    *   Web UI 中无法重命名或删除自定义 ACP agents ([Issue #3835](https://github.com/agentscope-ai/QwenPaw/issues/3835))。
    *   Windows 桌面版在 v1.1.4 无法呈现内容，降级至 v1.1.2 恢复正常 ([Issue #3826](https://github.com/agentscope-ai/QwenPaw/issues/3826))。
*   **已有对应修复 PR 的 Bug**：
    *   ACP 代理回退配置缺失导致的执行异常，已有 [PR #3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) 提交修复。

## 6. 功能请求与路线图信号

社区与开发者今日提交了几个极具演进意义的 Feature PR/Issue，揭示了项目下一阶段的路线图：

*   **语义技能路由**：社区贡献者提交了 [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)，引入基于 Embedding 检索的技能过滤。当用户安装大量技能时，仅注入 Top-K 相关技能，这将极大减少 Token 消耗并提升 LLM 响应准确率。
*   **LLM 异步生成会话标题**：[PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) 旨在替换目前“截取用户前10个字符”作为标题的简陋做法，改由 LLM 总结生成，提升会话管理体验。
*   **远程模型发现重构**：[PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) 重构了模型管理弹窗，将“自动发现”按钮替换为可交互、可搜索的远程模型列表，大幅降低用户接入各大模型提供商的配置门槛。
*   **桌面端底层架构迁移**：[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 引入了 Tauri 2.x 替代原有的 Electrobun，这预示着 CoPaw 桌面端将迎来更小的安装体积和更优的性能表现（有望缓解 [Issue #3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) 提出的 GUI 性能问题）。

## 7. 用户反馈摘要

从今日 Issues 提炼出真实用户的核心痛点与场景：
1. **工作流中断的极度焦虑**：配置无法持久保存（刷新丢失、重启丢失）是目前用户体验最大的痛点。对于需要精细调参的 Agent 系统，反复配置极大地消耗了用户的耐心。
2. **备份与安全诉求**：用户对系统鲁棒性存在担忧，多次询问备份失败原因及是否有 API 可以自动执行备份（[Issue #3823](https://github.com/agentscope-ai/QwenPaw/issues/3823)），说明部分用户已在 CoPaw 上沉淀了高价值数据。
3. **MCP 生态的双刃剑**：用户积极接入外部 MCP 服务（如必应搜索），但网络或服务不稳定导致的进程卡死（未设超时熔断）严重拖垮了主进程。

## 8. 待处理积压

以下关键 PR/Issue 需引起维护团队的高度关注，避免社区热情消退：

*   **需要讨论的核心 PR**：语义技能路由 [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 已处于 Under Review 状态半月有余，涉及核心 Token 消耗逻辑，需要架构师尽快介入讨论定调。
*   **前端质量基建 PR**：Vitest 测试框架引入 [PR #3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) 已提交一周，鉴于近期 UI 层 Bug 频发（如配置丢失、Windows 渲染空白），建议维护者优先 Review 并合并此 PR，以防止后续回归。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-26)

**分析师洞察**：整体来看，ZeptoClaw 项目在过去24小时内处于“低活跃度、高收敛性”的维护状态。项目无新版本发布，也未出现新的 Bug 报告或功能请求，但核心维护者通过合并依赖升级和 CI 改进，有效提升了项目的基础稳定性和未来代码质量的保障能力。

---

### 1. 今日速览
过去24小时，ZeptoClaw 项目的核心动态集中在代码质量与自动化构建的底层维护上。项目整体活跃度评估为**中等偏低**：未产生新的 Issue，但有 4 个 PR 发生了状态变更（3 个被关闭/合并，1 个新开待合并）。维护者 `qhkm` 重点关注了项目的持续集成（CI）矩阵扩展与核心加密依赖库（`sha2`）的破坏性升级。目前项目运行健康，无明显积压的社区痛点，处于平稳迭代期。

### 2. 版本发布
**无**。今日项目未发布新版本。

### 3. 项目进展
今日项目的进展主要体现在**依赖现代化**与**自动化测试覆盖率的提升**上，为后续功能迭代打下了更坚固的地基：

*   **成功完成 `sha2` 核心依赖升级**：由 Dependabot 发起的 `sha2` 从 0.10 升级至 0.11 的 PR ([#517](https://github.com/qhkm/zeptoclaw/pull/517)) 已顺利通过并由维护者落地。由于 0.11 版本移除了对 `LowerHex` trait 的默认支持，维护者通过修复相关的格式化代码，确保了项目的顺利编译（相关底层处理见 PR [#547](https://github.com/qhkm/zeptoclaw/pull/547)）。
*   **CI 矩阵覆盖范围拓宽（补丁流转）**：社区贡献者 `manelsen` 提交了扩展 CI 矩阵的 PR ([#544](https://github.com/qhkm/zeptoclaw/pull/544))，该 PR 已关闭。取而代之的是，维护者 `qhkm` 在自己的分支上重新提交并精炼了该功能 ([#548](https://github.com/qhkm/zeptoclaw/pull/548)，目前待合并）。此举将把 `memory-embedding`、`channel-email`、`google`、`provider-vertex` 等关键可选集成功能纳入编译检查范围，有效防止代码偏移导致的隐性编译失败。

### 4. 社区热点
**今日无明显热点讨论**。
由于今日没有新开 Issue，且所有活跃 PR 均围绕自动化构建和依赖升级，社区未出现讨论热烈或评论集中的议题。项目今日呈现典型的“幕后维护”特征。需要关注的是 PR [#548](https://github.com/qhkm/zeptoclaw/pull/548)，目前处于 OPEN 状态，等待进一步 Review。

### 5. Bug 与稳定性
**今日无新增 Bug 报告**。
但在今日合并的代码中，维护者主动消除了一处潜在的编译稳定性隐患：在处理 `sha2` v0.11 升级时 ([#517](https://github.com/qhkm/zeptoclaw/pull/517)), 维护者修复了由于 `digest` 迁移导致 `finalize()` 输出类型改变而引发的三个代码构建断点 ([#547](https://github.com/qhkm/zeptoclaw/pull/547))。这表明项目对依赖变更引发的风险具备快速的内部消化能力。

### 6. 功能请求与路线图信号
**无新的显式功能请求**，但从今日的 PR 动态中可以提取到隐含的技术路线图信号：
*   **AI 智能体生态集成加速准备**：PR [#548](https://github.com/qhkm/zeptoclaw/pull/548) 和 [#544](https://github.com/qhkm/zeptoclaw/pull/544) 将 `memory-embedding`（记忆向量化）、`google`（谷歌生态）、`provider-vertex`（Vertex AI 提供商）以及 `whatsapp-web` 纳入严格 CI。这释放了一个强烈的信号：ZeptoClaw 正在为接下来深度整合多模态通讯渠道与大语言模型后端做代码质量上的严密防御，多渠道 AI 助手功能可能是下个大版本的重点。

### 7. 用户反馈摘要
今日由于缺乏新开 Issue 和用户评论，**暂无直接的用户反馈**。
不过，PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) 的摘要中提及了此前“部分可选路径在默认构建下悄然偏移”的问题，这暗示过去可能有部分高级开发者在手动启用特定 Feature 进行私有化部署时遇到了编译阻碍。今日的 CI 扩展 PR 事实上是从底层回应了这部分进阶用户的开发体验诉求。

### 8. 待处理积压
**目前积压清理状况良好，仅 1 个 PR 处于待处理状态：**
*   **[OPEN] PR [#548](https://github.com/qhkm/zeptoclaw/pull/548) `chore(ci): expand CI matrix for optional integration features`**：这是目前仓库唯一处于开启状态的 PR。鉴于这是由核心维护者 `qhkm` 亲自操刀的 PR（Cherry-pick 自社区贡献），合并概率极高。建议关注其在周末期间的最终合并情况。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
ZeroClaw 今日维持了极高的社区活跃度与开发推进速度。过去 24 小时内，项目共产生了 **50 条 Issue 更新**（新开/活跃 37 条，关闭 13 条）以及 **41 条 PR 更新**（待合并 29 条，合并/关闭 12 条）。尽管今日无新版本发布，但开发者正密集针对 `v0.7.4` 里程碑进行Bug修复与架构优化。当前项目重点聚焦于多智能体（Multi-agent）架构的 RFC 讨论、v3 Schema 的破坏性变更评估，以及对 DeepSeek-V4 和 Ollama 等主流模型 Provider 兼容性的紧急修复。

## 2. 版本发布
**无**。
目前项目正在积极筹备 `v0.7.4` 版本（见里程碑追踪 Issue [#5877](https://github.com/zeroclaw-labs/zeroclaw/issue/5877)），今日虽无正式 Release，但核心代码库已有大量针对性修复 PR 提交。

## 3. 项目进展
今日合并/关闭的 Issues 和活跃的 PRs 标志着项目在稳定性和用户体验上取得了实质性进展：
*   **Agent 循环与多模态修复**：核心开发者 `singlerider` 提交了重要修复 PR [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)，解决了流式响应下 `reasoning_content` 的捕获问题，这对于适配 DeepSeek-V4 的思考模式至关重要。
*   **Web UI 体验改善**：PR [#6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) 为前端控制面板引入了单条消息删除、清空所有消息和紧凑模式；PR [#5900](https://github.com/zeroclaw-labs/zeroclaw/pull/5900) 则将会话重置的复杂度降至 O(1)，显著优化了底层性能。
*   **基础设施与文档清理**：清理了 566 行从未编译的死代码（[PR #6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098)），移除了硬编码身份标识（[PR #6023](https://github.com/zeroclaw-labs/zeroclaw/pull/6023)），并修复了 README 构建徽章和基准测试数据（[PR #6110](https://github.com/zeroclaw-labs/zeroclaw/pull/6110), [PR #6109](https://github.com/zeroclaw-labs/zeroclaw/pull/6109)）。

## 4. 社区热点
*   **Web 仪表盘不可用问题（[Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issue/4866)）**：该 Bug 拥有 24 条评论，是今日讨论最多的话题。大量用户反馈在 Tauri 桌面端和 Web 端均遇到构建提示问题，暴露出安装脚本与前端资源分发机制存在痛点。
*   **多租户 RBAC 安全架构（[Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issue/5982)）**：社区对于“单实例服务多用户”的安全隔离设计表现出强烈需求，该 Issue 讨论了按发送者进行角色权限控制的可能方案。
*   **多智能体 UX 流程 RFC（[Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issue/5890)）**：关于多智能体协同的 RFC 目前正处于 7 天讨论期内，引发了架构层面的深度探讨，将决定 ZeroClaw 未来在复杂任务流中的表现。

## 5. Bug 与稳定性
今日报告了多个影响核心工作流的 Bug，部分已有对应修复：
*   **S0/S1 级别严重阻塞**：
    *   **Web UI 配置项与资源目录（[Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issue/5847), [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issue/6096)）**：`install.sh` 未正确解压 Web 资源且环境变量文档缺失。目前社区已提交相关诊断 PR。
    *   **Telegram 频道误报 Anthropic 错误（[Issue #6090](https://github.com/zeroclaw-labs/zeroclaw/issue/6090)）**：严重影响了非 CLI 端用户的主流程。
*   **Provider 兼容性（S1/S2）**：
    *   **DeepSeek-V4 API 不兼容（[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issue/6059)）**：引发 HTTP 400 报错。**已有修复 PR**：[PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)。
    *   **Ollama 原生工具调用失效（[Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issue/5459)）**：硬编码 `tool_count=0` 导致工具完全不可用。
*   **ACP 服务端 Schema 缺失（[Issue #6100](https://github.com/zeroclaw-labs/zeroclaw/issue/6100)）**：导致外部客户端无法连接，已有修复 PR [PR #6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035)。

## 6. 功能请求与路线图信号
结合社区呼声与当前活跃 PR，以下功能极有可能在近期的 `v0.7.4` 或后续版本落地：
*   **Schema v3 批量迁移（[Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issue/5947)）**：已被标记为合并阻塞项，这是通向下一版本的核心门槛。
*   **国际化 (i18n) 架构接入**：用户希望提示词能支持多语言（[Issue #5930](https://github.com/zeroclaw-labs/zeroclaw/issue/5930)），核心开发者正在推进庞大的 Fluent pipeline 重构（[PR #5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788)）。
*   **模型选择优化（[Issue #6070](https://github.com/zeroclaw-labs/zeroclaw/issue/6070)）**：用户希望 UI 能标识出哪些是免费模型（特别是接入 OpenRouter 时），这属于体验优化的高优诉求。

## 7. 用户反馈摘要
透过近期的 Issues，提炼出当前用户的三个核心使用痛点：
1.  **初次安装体验门槛高**：从 Web 仪表盘的构建配置（`web_dist_dir`）到 `install.sh` 脚本对前端资源的遗漏，许多用户在跑通第一个 Demo 前就卡在了环境部署上。
2.  **Channel (频道) 权限控制粒度不足**：无论是 Discord 频道限制（[Issue #6075](https://github.com/zeroclaw-labs/zeroclaw/issue/6075)），还是 Telegram 上的 `always_ask` 工具被静默拒绝（[Issue #2324](https://github.com/zeroclaw-labs/zeroclaw/issue/2324)），都表明用户在将 ZeroClaw 接入真实通讯软件时，缺乏足够的细粒度工作流控制。
3.  **本地模型接入存在断层**：Ollama 作为最受欢迎的本地运行方案，其工具调用报错（[Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issue/5962)）成为高频问题，本地多模态图片的读取失败（[Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issue/6097)）也打击了开发者的积极性。

## 8. 待处理积压
*   **[Issue #2324](https://github.com/zeroclaw-labs/zeroclaw/issue/2324)**：自 3 月初就提出的非 CLI 渠道工具确认问题（带有 `status:no-stale` 标签），至今未彻底解决，直接影响了 Bot 在生产环境下的自动化体验，需核心层关注。
*   **[PR #5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)**：长达 8000+ 行的 `onboard` 向导重构 PR，目前规模庞大（Size: XL），需要密集的 Review，如合并将大幅改善新用户上手体验。

</details>