# OpenClaw 生态日报 2026-03-30

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-29 22:03 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-03-30)

## 1. 今日速览
OpenClaw 项目今日保持**极高的活跃度**，过去24小时内 Issues 和 PRs 更新量均达到 **500 条**，显示出社区和开发团队的高效运转。项目发布了 **v2026.3.28** 正式版及 Beta 版，核心变更集中在移除过时的 Qwen OAuth 集成。社区讨论热点集中在**多渠道集成** 和**工具调用稳定性**上。虽然新版本带来了一些破坏性变更，但大量修复 PR 的提交表明团队正在积极解决用户反馈的痛点，整体项目健康度良好，处于快速迭代期。

## 2. 版本发布

### v2026.3.28 & v2026.3.28-beta.1
今日发布了 `v2026.3.28` 正式版及其 Beta 版本，主要包含以下关键更新：

-   **破坏性变更**:
    -   **Providers/Qwen**: 彻底移除了已弃用的 `qwen-portal-auth` OAuth 集成（针对 `portal.qwen.ai`）。
    -   **迁移指南**: 用户需迁移至 Model Studio，使用命令 `openclaw onboard --auth-choice modelstudio-api-key` 进行配置。(#52709) Thanks @pomelo-nwu.
    -   **Config/Doctor**: 停止支持两个月以前的自动配置迁移逻辑，强制用户保持配置文件的现代

## 3. 项目进展
今日共有 **156 个 PR 被合并或关闭**，显著推进了系统的健壮性和新功能落地：

-   **架构优化**: PR #55823 修复了网关重启后会话卡死在 "running" 状态的问题，显著提升了异常恢复能力。
-   **渠道修复**:
    -   **Slack**: 合并了多个针对 Slack 流式回复和交互唤醒的修复 (PR #57310, #57308)，解决了消息串序和交互无响应问题。
    -   **Telegram**: PR #57298 修复了 Bot 误将自身发送的媒体视为用户输入的逻辑错误。
-   **性能提升**: PR #54085 优化了 CLI 启动速度，通过跳过短生命周期的进程重生成，减少了约 1-2 秒的延迟。
-   **功能增强**: PR #53937 和 #53149 推进了 "Research/Learning Bridge" 功能，引入了跨会话记忆和强化学习反馈机制，向更智能的 Agent 迈进。

## 4. 社区热点
今日讨论最热烈的问题反映了用户对**跨平台支持**和**主流模型集成**的强烈需求：

1.  **[OPEN] Linux/Windows Clawdbot Apps (#75)**
    -   **热度**: 👍 66 | 评论 58
    -   **诉求**: 用户强烈呼吁官方提供 Linux 和 Windows 原生客户端。目前已有 macOS, iOS, Android 客户端，桌面端缺失导致开发者在非 Mac 环境下使用不便。
2.  **[OPEN] Kimi web_search 集成问题：401 认证错误 (#44851)**
    -   **热度**: 评论 32
    -   **诉求**: 用户在使用 Moonshot Kimi 模型进行联网搜索时遭遇 401 错误，虽然 Chat API 正常。这表明特定工具的鉴权逻辑与模型调用之间存在兼容性断层。
3.  **[OPEN] Skill install fails in Docker (#14593)**
    -   **热度**: 👍 14 | 评论 18
    -   **诉求**: Docker 环境下无法安装依赖 `brew` 的 Skills。由于官方 Docker 镜像未预装 `brew`，导致自动化部署流程受阻，用户希望官方镜像能包含更完整的运行时环境。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**认证失效**、**工具执行中断**和**特定渠道崩溃**：

### 🔴 严重
-   **Matrix E2EE 完全失效 (#53353)**: 缺少 WASM 文件导致 Matrix 端到端加密通道断裂，消息无法流转。目前尚无修复 PR 合并。
-   **SQL 注入漏洞 (#29951)**: `/api/metrics/database` 端点存在 SQL 注入风险，虽然利用条件有限，但建议立即修复。

### 🟠 回归问题
-   **Discord Gateway 崩溃循环 (#54931, #55346)**: 升级到 v2026.3.24 后，健康监测机制触发未捕获异常，导致网关每 35 分钟崩溃一次。
-   **OpenAI Codex 工具静默失效 (#53959)**: 升级后 GPT-5.3-codex 模型停止执行任何工具调用，表现为仅输出文本但不采取行动。
-   **Google Vertex ADC 认证失败 (#49191)**: 使用 Application Default Credentials 时，系统错误地将占位符当作 API Key 传递，导致 401 错误。

### 🟡 一般错误
-   **WhatsApp 重连后无法发送 (#54745)**: 网关重启后 Telegram 出站消息丢失。
-   **Docker Skill 安装失败 (#14593)**: Linux 容器中缺少 `brew` 导致安装中断。

## 6. 功能请求与路线图信号
-   **动态模型发现 (#10687)**: 针对 OpenRouter 等快速更新的提供商，用户请求实现完全动态的模型列表发现机制，而非依赖静态配置。结合 PR #53149 中的学习能力，这可能预示着 OpenClaw 正在构建更加自适应的模型管理层。
-   **Docker 环境增强 (#32424)**: 针对 Mac Docker 的运行时加固和工具链完善正在进行中，表明官方正在重视容器化开发的体验。
-   **Plugin SDK 重构 (#56402)**: 计划分阶段弃用旧的兼容层，这表明项目正在偿还技术债务，为未来的插件生态稳定性打基础。

## 7. 用户反馈摘要
-   **痛点**: **配置迁移**是今日最大的痛点。新版本强制废弃旧版 Qwen 认证，导致部分未及时更新的用户直接服务中断。
-   **痛点**: **Docker 体验**仍有割裂感，用户期望容器内环境能像宿主机一样顺畅运行各种 Skills。
-   **场景**: 大量用户开始尝试将 OpenClaw 接入 **Matrix**（隐私通讯）和 **Kimi/Claude** 等非 OpenAI 模型，显示用户群体正在向多元化和隐私敏感型扩展。
-   **满意点**: 尽管存在 Bug，但用户对 CLI 的响应速度优化（PR #54085）表示了肯定，且对 Linux/Windows 客户端的呼声证明了用户对产品价值的认可。

## 8. 待处理积压
以下重要 Issue 长期未彻底解决，建议维护者优先关注：

-   **#75 [OPEN] Linux/Windows 客户端请求**: 创建于 2026-01-01，评论数极高，是阻碍生态扩展的关键卡点。
-   **#26322 [OPEN] OAuth Token 竞态条件**: 多 Agent 共享认证配置时的并发刷新问题，影响大规模部署的稳定性。
-   **#11202 [OPEN] 安全风险**: 模型目录将解析后的 API Key 注入 Prompt 上下文，存在潜在的隐私泄露风险。

---

## 横向生态对比

# 2026-03-30 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
2026年3月底的开源 AI 智能体生态呈现出**“核心功能深化”与“应用场景分化”并存的态势**。以 OpenClaw 为首的核心框架正经历从“单一对话”向“多模态、长程记忆、多智能体协作”的架构跃迁，RAG（检索增强生成）与 Memory 系统重构成为技术高地。与此同时，垂类应用（如 IronClaw 的金融场景、CoPaw 的企业集成）开始崛起，标志着开源 Agent 正从技术尝鲜走向生产环境落地，但**稳定性（上下文溢出、工具调用中断）**与**安全性（权限过严/过松）**仍是全行业面临的通用痛点。

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度/状态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~156 (合并) | **v2026.3.28** | ⭐⭐⭐⭐⭐ 快速迭代 | 架构重构、破坏性更新、跨平台 |
| **NanoBot** | 17 | 98 (91 Open) | 无 | ⭐⭐⭐ 功能爆发/积压 | Memory 重构、安全预警、Telegram |
| **PicoClaw** | 21 | 52 (18 合并) | Nightly | ⭐⭐⭐⭐ 架构演进 | 多智能体协作、配置修复 |
| **CoPaw** | 40 | 30 (15 合并) | 无 | ⭐⭐⭐⭐ 社区活跃 | 上下文管理、CPU 空转、企业集成 |
| **Zeroclaw** | - | 14 (合并) | **v0.6.7** | ⭐⭐⭐ 质量巩固 | 上下文恢复、安全策略冲突 |
| **NanoClaw** | 6 | 22 (8 合并) | 无 | ⭐⭐⭐ 稳定性修复 | Web Dashboard、会话死循环 |
| **IronClaw** | - | 7 (合并) | 无 | ⭐⭐⭐ 架构重构 | 金融安全、组件化、前端重构 |
| **Moltis** | - | 5 (合并) | **20260328.03** | ⭐⭐⭐⭐ 兼容性修复 | 提供商适配、GraphQL |
| **LobsterAI** | - | 7 (Open) | 无 | ⭐⭐⭐ 体验优化 | Artifacts、引擎切换传闻 |
| **ZeptoClaw** | 2 | 7 (1 合并) | 无 | ⭐⭐⭐ 功能增强 | 上下文压缩、自定义工具 |
| **EasyClaw** | 1 | 0 | **v1.7.8** | ⭐⭐ 维护期 | 兼容性、安装障碍 |

> **注**：OpenClaw 的 Issues/PRs 数量级远超其他项目，处于生态核心地位；NanoBot 和 PicoClaw 紧随其后，处于激烈的功能竞争阶段。

## 3. OpenClaw 在生态中的定位

*   **生态核心与事实标准**：OpenClaw 的单日更新量（~500条）超过大多数项目的总和，其破坏性更新（如移除旧版 Qwen OAuth）具有行业风向标意义，迫使下游项目跟进适配。
*   **技术路线**：致力于**全渠道覆盖**与**深度工具集成**。不同于 IronClaw 专注垂直领域或 NanoBot 侧重学术探索，OpenClaw 追求通用性和企业级稳定性，正通过 "Research/Learning Bridge" 探索自适应架构。
*   **社区规模**：拥有最庞大的用户基数和贡献者群体，但也面临最大的维护压力（如遗留 Bug 积压）。相比 PicoClaw 等新兴项目，OpenClaw 的架构更成熟但包袱也更重。

## 4. 共同关注的技术方向

全生态在这一天呈现出高度的技术共识，主要集中在以下三个方向：

1.  **长程记忆与上下文工程**
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw, ZeptoClaw, PicoClaw。
    *   **具体诉求**：随着任务变复杂，简单的对话历史管理已失效。
        *   *Zeroclaw* 和 *ZeptoClaw* 均提交了针对 **Context Overflow (上下文溢出)** 的恢复与压缩机制。
        *   *NanoBot* 和 *PicoClaw* 正在重构 Memory 系统，引入语义索引和“海马体”架构，解决 Agent “记性差”的问题。

2.  **安全性与自主性的平衡**
    *   **涉及项目**：Zeroclaw, IronClaw, NanoClaw。
    *   **具体诉求**：Agent 需要执行操作，但不能失控。
        *   *Zeroclaw* 用户抱怨安全策略过严导致 Agent 变“废铁”。
        *   *IronClaw* 正在构建金融级安全执行层和异步审批机制。
        *   *NanoClaw* 探讨远程 Agent 的权限审批流。

3.  **多模态与可视化交互**
    *   **涉及项目**：LobsterAI, CoPaw, NanoClaw, IronClaw。
    *   **具体诉求**：纯文本交互已无法满足需求。
        *   *LobsterAI* 引入 Artifacts 预览（HTML/React 渲染）。
        *   *NanoClaw* 和 *CoPaw* 正在完善 Web Dashboard 以实现可视化管理。

## 5. 差异化定位分析

| 维度 | **通用型框架**<br>(OpenClaw, PicoClaw) | **垂直/特定架构型**<br>(IronClaw, LobsterAI, Moltis) | **轻量/组件型**<br>(NanoBot, ZeptoClaw, NanoClaw) | **企业/集成型**<br>(CoPaw, Zeroclaw) |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 构建通用的 Agent 操作系统 | 解决特定领域（金融、UI）或特定模型适配问题 | 提供可嵌入、可扩展的 Agent 核心 | 融入现有企业工作流（钉钉、飞书） |
| **技术侧重** | 多渠道适配、插件生态、稳定性 | 安全沙箱、前端体验、特定 API 兼容 | 内存优化、RAG 算法、异步架构 | 消息队列、文件处理、UI 控制台 |
| **典型特征** | 功能大而全，更新频繁 | 功能精准，依赖特定生态 | 代码精简，注重核心逻辑 | 强调连接器和部署便利性 |

## 6. 社区热度与成熟度

*   **成熟期巨头**:
    *   **OpenClaw**: 处于解决“成长的烦恼”阶段，重心在于偿还技术债务（移除旧 Auth）和修复大规模集成带来的 Bug（如 Matrix E2EE）。生态最完善，但惯性也最大。

*   **快速迭代挑战者**:
    *   **PicoClaw, NanoBot**: 处于功能爆发期，社区极其活跃。*NanoBot* 面临供应链安全信任危机，*PicoClaw* 则在激进地重构多智能体架构。两者都在争夺“下一代 Agent 核心”的位置。

*   **垂直领域深耕者**:
    *   **IronClaw, CoPaw**: 正在从通用能力转向特定场景（金融、企业办公）。社区讨论更聚焦于具体业务逻辑（如交易审批、钉钉表格），表明正在通过实战验证产品。

*   **稳定维护/早期探索**:
    *   **Moltis, ZeptoClaw**: 节奏相对平缓，专注于修复兼容性和优化核心性能（如上下文压缩），属于“小而美”的实用派。

## 7. 值得关注的趋势信号

1.  **记忆系统的“海马体”化**：
    *   *信号源*：PicoClaw (#1919), NanoBot (PR #2618)。
    *   *分析*：简单的 RAG 已不足以支撑长程任务。社区正尝试模仿生物大脑的短期/长期记忆分离与索引机制。**开发者建议**：在架构设计时预留独立的 Memory Service 接口，而非仅依赖 LLM 的 Context Window。

2.  **从“聊天”到“交付”**：
    *   *信号源*：LobsterAI (Artifacts), IronClaw (金融执行)。
    *   *分析*：用户不再满足于 AI “说”给它听，而是要求 AI “做”出结果（生成页面、执行交易）。**开发者建议**：关注 Agent 的输出格式化能力（如生成 React 组件）和安全执行沙箱的建设。

3.  **供应链安全危机显现**：
    *   *信号源*：NanoBot (#2439) 恶意代码事件。
    *   *分析*：随着 Agent 权限增大（读写文件、执行 Shell），通过 PyPI/NPM 投毒的攻击面急剧扩大。**开发者建议**：必须审查依赖项，并考虑使用沙箱或 Wasm 隔离运行不可信代码。

4.  **上下文管理成为分水岭**：
    *   *信号源*：CoPaw (#2482), Zeroclaw (v0.6.7)。
    *   *分析*：谁能更好地解决“无限对话长度”下的成本和崩溃问题，谁就能在下一轮竞争中胜出。单纯的截断会导致智力断崖，**智能压缩与摘要**是核心竞争力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-30)

## 1. 今日速览
NanoBot 项目今日保持**极高的开发活跃度**，社区贡献呈现井喷态势。过去24小时内共有 **98 个 PR 更新**（其中 91 个处于待合并状态），显示出社区正积极推动大量新功能与优化。Issues 板块也十分热闹，共有 **17 条更新**，涵盖了从严重安全漏洞报告到深度架构讨论的各类话题。尽管没有新的版本发布，但 `nightly` 分支刚刚完成了刷新，大量的功能增强 PR（特别是针对 Telegram 和 Memory 模块）预示着下一个版本将包含重大改进。

## 2. 版本发布
*   **无新版本发布**。
*   **注意**：根据 Issue #2563，项目的 `nightly` 分支已于北京时间 3 月 29 日 20:00 刷新，作为下一版本的暂存区，测试用户可关注该分支动态。

## 3. 项目进展
今日虽然没有合并大量 PR（仅 7 个已合并/关闭），但待合并队列中包含多个核心功能升级，表明项目正处于功能密集开发期：

*   **Memory 系统重构 (PR #2618, #2619, #2620)**：由贡献者 `Mihir-Null` 提交的系列 PR，引入了语义记忆索引、文件监控和重排序机制。这标志着 NanoBot 正在从简单的对话历史管理转向更智能的 **RAG（检索增强生成）架构**，有望显著提升长程记忆能力。
*   **Telegram 体验增强 (PR #2628, #2606, #2546)**：`rcolomina` 和 `flobo3` 等贡献者正在大幅改进 Telegram 适配器。重点解决了 **Forum Topics（论坛主题）** 的支持问题，确保消息能正确路由到特定话题，同时增加了回复上下文（作者信息）和静默工具提示功能，极大提升了群组场景下的可用性。
*   **性能优化 (PR #2609)**：`killkli` 提交了一项关键性能优化，消除了 Agent 循环中阻塞主流程的 LLM 调用，将记忆整理异步化。这将显著降低用户感知的响应延迟。

## 4. 社区热点
今日讨论最激烈的话题集中在系统安全与架构稳定性：

*   **🔥 严重安全警告 (Issue #2439)**
    *   **链接**：[HKUDS/nanobot Issue #2439](https://github.com/HKUDS/nanobot/issues/2439)
    *   **分析**：用户 `xiaomukuaier` 报告在 PyPI 包 `nanobot-ai` (v0.1.4.post5) 中发现了恶意数据渗漏代码。该问题引发了 4 个点赞和 6 条评论，**是目前最受关注且最紧急的问题**。维护者需立即确认供应链安全。
*   **🛠️ 架构缺陷：Prompt 持久化 (Issue #2463)**
    *   **链接**：[HKUDS/nanobot Issue #2463](https://github.com/HKUDS/nanobot/issues/2463)
    *   **分析**：用户 `ronny-rentner` 指出 NanoBot 保存的对话历史与实际发送给模型的 Prompt 不一致，导致与 OpenAI API 的交互逻辑冲突。该 Issue 获得了 8 条深入的技术讨论，涉及核心上下文管理逻辑。
*   **📅 Agent 循环与工具总结优化 (Issue #2576)**
    *   **链接**：[HKUDS/nanobot Issue #2576](https://github.com/HKUDS/nanobot/issues/2576)
    *   **分析**：用户针对 Agent 在工具执行后“沉默”或异常终止的问题，提出了详细的架构改进方案。这反映了用户在生产环境中对 **Agent 鲁棒性** 的高要求。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **Critical (安全)**:
    *   **Malicious Code in PyPI Package** ([#2439](https://github.com/HKUDS/nanobot/issues/2439))：如上所述，涉及 `litellm_init.pth` 文件。**暂无官方 Fix PR**，建议用户暂停安装或进行排查。
*   **High (稳定性)**:
    *   **Agent NoneType Crash** ([#2613](https://github.com/HKUDS/nanobot/issues/2613))：Agent 执行中途因 `NoneType` 错误崩溃。
    *   **Cron Reminders Fail in Agent Mode** ([#2601](https://github.com/HKUDS/nanobot/issues/2601))：定时任务在 Agent 模式下不可用。
*   **Medium (功能异常)**:
    *   **Ollama Cloud 2nd Request Fail** ([#2450](https://github.com/HKUDS/nanobot/issues/2450))：通过 Ollama Cloud 调用 minimax 模型时，第二次请求失败。
    *   **CLI Output Glitch** ([#2591](https://github.com/HKUDS/nanobot/issues/2591))：终端出现乱码重复输出。
*   **已有修复**:
    *   **Telegram Markdown Header Issue** ([#2622](https://github.com/HKUDS/nanobot/issues/2622))：Markdown 标题被错误剥离。**已关闭**，推测已合入相关修复。
    *   **Config Validation Limit** ([#2612](https://github.com/HKUDS/nanobot/issues/2612))：`sendMaxRetries` 被强制限制为 10。**已关闭**。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，可以看出项目接下来的演进方向：

*   **多租户/网关架构**：Issue #2602 提出了 **HTTP Streaming Channel** 的需求，结合 PR #2625 添加的健康检查端点，表明 NanoBot 正在被用于更复杂的网关架构中，作为后端推理引擎存在。
*   **工具调用能力增强**：
    *   **Home Assistant 集成** ([#2588](https://github.com/HKUDS/nanobot/issues/2588))：用户强烈希望能无缝对接智能家居，但目前工具调用成功率不高。
    *   **Self-Inspection Tool** (PR #2521)：允许 Agent 运行时修改自身状态，这是一个极具潜力的方向，可能会引入自我进化的能力。
*   **IoT 扩展**：PR #2584 提交了对 "Xiaozhi" 语音网关和 ESP32 设备的支持，意味着 NanoBot 正式进军 **AIoT（人工智能物联网）** 领域。

## 7. 用户反馈摘要
*   **痛点**：
    *   **工具调用不可靠**：多位用户反映在使用 Qwen 等非顶级模型时，工具调用经常失败或 Agent 不知道如何使用工具 ([#2588](https://github.com/HKUDS/nanobot/issues/2588))。
    *   **上下文遗忘/不一致**：用户对 `nanobot` 无法完美复现发送给 LLM 的 Prompt 感到担忧 ([#2463](https://github.com/HKUDS/nanobot/issues/2463))。
    *   **安装风险**：PyPI 包的安全问题让用户对部署产生了信任危机。
*   **满意点**：
    *   社区对 **Nightly 分支的刷新机制** 反应积极，认为这有助于平滑过渡新功能 ([#2563](https://github.com/HKUDS/nanobot/issues/2563))。
    *   对 **Telegram 深度集成** 的需求很高，相关 PR 活跃度极高。

## 8. 待处理积压
*   **紧急处理**：维护者必须立即回应 Issue [#2439](https://github.com/HKUDS/nanobot/issues/2439) 的安全问题，确认是否为供应链攻击，并发布安全公告。
*   **长期关注**：Issue [#2463](https://github.com/HKUDS/nanobot/issues/2463) 涉及底层的 Prompt 构建逻辑，如果不解决，将持续影响对对话一致性有高要求的用户。
*   **文档/配置**：Issue [#2612](https://github.com/HKUDS/nanobot/issues/2612) 暴露了配置验证过于死板的问题（`sendMaxRetries` 限制），虽然已关闭，但建议关注是否需要调整验证逻辑或文档说明。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 **Zeroclaw** 项目 2026-03-30 动态日报。

---

# Zeroclaw 项目动态日报 (2026-03-30)

## 1. 今日速览
Zeroclaw 今日活跃度极高，随着 **v0.6.7** 版本的发布，项目重心明显转向**Agent 的长期记忆管理与上下文稳定性**。新版本重点解决了交互循环中的上下文溢出问题，增强了 Agent 在复杂任务中的持久运行能力。然而，社区对**安全策略的过度限制**表达了强烈不满，认为默认配置导致 Agent 沦为“聊天机器人”而无法执行实际操作。此外，**Android 平台支持的缺失**和**Web Dashboard 构建失败**也是阻碍新用户上手的关键摩擦点。总体而言，核心功能在稳步推进，但安全策略的平衡与多端适配亟需优化。

## 2. 版本发布
### **v0.6.7** - 上下文恢复与预算管理
本次更新主要针对 Agent 在长时间运行或复杂工具调用过程中的稳定性，引入了“自我修复”机制。

*   **Context Overflow Recovery**: 在交互守护进程循环和工具调用循环中增加了上下文溢出恢复机制，防止 Agent 在处理超长对话时崩溃。
*   **Preemptive Check**: 在调用 Provider 之前增加预检，主动管理 Token 消耗。
*   **Performance Optimization**: 在上下文压缩器中增加了快速路径工具结果修剪。
*   **Budget Control**: 引入共享迭代预算，防止单个任务陷入死循环消耗所有资源。

> **注意**: 目前未在 Release Note 中发现破坏性变更说明，建议升级前备份配置文件。

## 3. 项目进展
今日共有 **14 个 PR 被合并/关闭**，主要集中在 CI/CD 修复、工具链增强及代码质量优化。

*   **CI/CD 修复**: 修复了 Release Workflow 中无法创建 Tag 的权限问题 (PR #5142, #5135)，并解决了阻塞发布的 Clippy 警告 (PR #5128)。这表明项目正在优化发布自动化流程。
*   **Webhook 改进**: PR #5141 和 #5134 试图将 Webhook 请求路由通过 Tool Loop，使 Webhook 触发的行为与交互式工具执行保持一致，增强了 API 集成的一致性。
*   **代码质量**: 合并了部分代码重构 PR (PR #5140)，提升了代码的可维护性。

## 4. 社区热点
今日讨论最激烈的问题集中在易用性与安全性的平衡上。

*   **[enhancement] 安全与易用性的冲突** ([#1478](https://github.com/zeroclaw-labs/zeroclaw/issue/1478))
    *   **热度**: 👍 6 | 💬 47
    *   **分析**: 用户抱怨开启所有安全配置后，Zeroclaw 拒绝执行任何系统操作（如安装 ffmpeg），变成了纯粹的聊天机器人。用户强烈要求提供“完全放开权限”的配置选项。这反映了 Zeroclaw 在从“极客玩具”向“安全助手”转型过程中，默认策略可能过于激进，缺乏针对“可信环境”的宽松模式。

*   **[Feature] Token 消耗优化建议** ([#5146](https://github.com/zeroclaw-labs/zeroclaw/issue/5146))
    *   **热度**: 👍 0 | 💬 1
    *   **分析**: 开发者提出通过“Skill Compilation”来减少 Token 消耗，建议将 Skill 的自然语言描述预编译为代码，避免每次调用都向 LLM 发送数百行的提示词。这是一个极具价值的架构优化方向，可能成为未来降低成本的关键。

*   **[Bug] Android 支持缺失** ([#4783](https://github.com/zeroclaw-labs/zeroclaw/issue/4783))
    *   **热度**: 👍 0 | 💬 2
    *   **分析**: 用户发现 v0.6.3 后移除了 Android binary，导致无法在 Termux 中运行。维护者需确认这是构建系统的回归还是有意放弃该平台支持。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，严重程度较高。

*   **S1 - 工作流阻塞**
    *   **Web Dashboard 不可用** ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issue/4866)): 无论是 Web UI 还是 Tauri 桌面端，均提示需要手动构建 Web 资源，该问题已持续多个版本，严重影响新用户体验。
    *   **Mistral 工具调用失败** ([#5117](https://github.com/zeroclaw-labs/zeroclaw/issue/5117)): Mistral 提供商因 `tool_call.id` 格式不兼容而拒绝调用。
    *   **Bubblewrap 沙箱兼容性** ([#5126](https://github.com/zeroclaw-labs/zeroclaw/issue/5126)): 在 Debian bookworm 上无法运行动态链接二进制文件，导致沙箱功能失效。

*   **S0 - 数据/安全风险**
    *   **内存雪崩** ([#4916](https://github.com/zeroclaw-labs/zeroclaw/issue/4916)): `auto_save` 与 `memory_recall` 结合时，会将记忆上下文重复保存，导致数据库呈雪球式增长，最终耗尽内存。

*   **已有 Fix PR**:
    *   针对 **HTTP Request 私有主机访问** 的 SSRF 限制问题，已有 PR ([#5148](https://github.com/zeroclaw-labs/zeroclaw/pull/5148)) 提供了更细粒度的白名单配置。

## 6. 功能请求与路线图信号
*   **技能扩展与工具定义**: PR #5131 提出允许 Skills 动态注册自己的工具，这意味着社区可以编写 Skill 来扩展 Zeroclaw 的核心能力，无需修改内核代码。这是迈向插件化架构的重要信号。
*   **网关增强**: Issue #5118 请求在 WebSocket 中返回 Token 使用量，PR #5133 提议增加管理会话历史的 REST API。这表明项目正在加强作为“服务”被集成的能力。

## 7. 用户反馈摘要
*   **痛点**: "太安全了以至于没法用"。用户在使用本地环境时，不希望被频繁的安全拦截打断。
*   **痛点**: 文档缺失。多个 Issue ([#4863](https://github.com/zeroclaw-labs/zeroclaw/issue/4863), [#4851](https://github.com/zeroclaw-labs/zeroclaw/issue/4851)) 反映缺乏对 GitHub Copilot 和 OpenAI-Codex 等提供商的配置指引。
*   **场景**: 用户倾向于在 Android 手机 (Termux) 上运行轻量级 Agent，对移动端支持有明确需求。
*   **认可**: 社区对 v0.6.7 解决上下文溢出的方向表示认可，但希望能进一步优化 Token 消耗。

## 8. 待处理积压
*   **Matrix Channel 加密问题** ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issue/4657)): 作为一个追踪了大量摩擦点的 Umbrella Issue，特别是 E2EE 相关问题，需要长期关注。
*   **供应链安全风险** ([#4955](https://github.com/zeroclaw-labs/zeroclaw/issue/4955)): 硬编码的第三方 Skill 仓库被视为潜在供应链攻击向量，建议尽快纳入官方维护或增加签名验证机制。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-03-30 的动态日报。

# PicoClaw 项目日报 (2026-03-30)

## 1. 今日速览
PicoClaw 今日保持了极高的开发热度，全天共产生 **21 条 Issue 更新** 和 **52 条 PR 更新**。项目正处于 **v0.2.4 版本发布后的快速迭代期**，核心开发重心明显向 **Agent 多智能体协作（Phase 2）** 转移。虽然 v0.2.4 引入了一些关于 Channel 配置持久化的回归 Bug，但社区响应迅速，已提交多个修复 PR。整体来看，项目核心架构正在向更复杂的“多智能体发现与委托”演进，同时周边生态（如新 Channel 支持、视觉工具）也在不断丰富。

## 2. 版本发布
- **Nightly Build**: `v0.2.4-nightly.20260329.27f638e9`
  - **性质**: 自动化构建版本，可能存在不稳定性。
  - **包含内容**: 涵盖了今日合并的多项配置保存修复及日志系统优化。
  - **注意**: 这是一个过渡版本，主要用于测试 Phase 2 的早期代码及 v0.2.4 的补丁。

## 3. 项目进展
今日共有 **18 个 PR 被合并/关闭**，主要集中在修复 v0.2.4 引入的配置回归问题以及重构底层架构：

- **🚑 关键修复 (Backport to v0.2.4)**:
  - **配置持久化修复**: 修复了 Web UI 中编辑 Channel（Discord, Telegram, QQ）敏感信息（如 Token、Secret）时数据丢失的问题 ([PR #2123](https://github.com/sipeed/picoclaw/pull/2123), [PR #2024](https://github.com/sipeed/picoclaw/pull/2024))。这是今日最重要的修复，解决了用户升级后无法保存配置的燃眉之急。
  - **Google Gemini 兼容性**: 修复了通过 OpenAI 兼容端点调用 Gemini API 时的 Key 验证失败问题 ([PR #1834](https://github.com/sipeed/picoclaw/pull/1834))。

- **🚧 架构重构与优化**:
  - **Cron 系统简化**: 移除了 `deliver` 和 `type` 参数，统一了定时任务的执行路径，为后续更复杂的 Agent 任务调度打下基础 ([PR #2147](https://github.com/sipeed/picoclaw/pull/2147))。
  - **日志系统增强**: 优化了控制台日志格式，增加了组件高亮，提升了调试体验 ([PR #2154](https://github.com/sipeed/picoclaw/pull/2154))。
  - **Web UI**: 修复了暗黑模式下 Skills 页面的对比度问题 ([PR #2166](https://github.com/sipeed/picoclaw/pull/2166))。

## 4. 社区热点
- **🔥 [Feature] Seahorse - 生物启发式记忆系统** ([Issue #1919](https://github.com/sipeed/picoclaw/issues/1919))
  - **动态**: 该提案继续引发热烈讨论（+8 条评论）。
  - **诉求**: 作者提出模仿大脑海马体结构，为 AI Agent 构建短期（无损压缩）与长期记忆系统。这标志着社区对 Agent “长时记忆”和“上下文连续性”的强烈需求，是 Agent 向更高级认知能力发展的关键信号。

- **🗺️ Meta: Agent Refactor Phase 2 - 多智能体协作** ([Issue #1934](https://github.com/sipeed/picoclaw/issues/1934))
  - **动态**: 核心维护者更新了 Phase 2 的路线图草案，明确了“单一 Pico 内的多智能体协作”目标。
  - **关联 PR**: [PR #2158](https://github.com/sipeed/picoclaw/pull/2158) 已经开始注入多智能体发现的 Prompt，表明架构重构已实质性启动。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **v0.2.4 升级后的配置系统**，部分已有修复方案：

| 严重程度 | 问题 | 状态/Fix PR |
| :--- | :--- | :--- |
| **Critical** | **Channel 配置无法保存**: 升级后 Telegram/Discord/QQ Token 保存失败或丢失 | **已修复** ([PR #2024](https://github.com/sipeed/picoclaw/pull/2024)) |
| **High** | **Model Fallbacks 继承错误**: 回退模型错误地使用了主模型的 API Base/Key，导致跨 Provider 回退失效 | **Fix Open** ([Issue #2140](https://github.com/sipeed/picoclaw/issues/2140), [PR #2143](https://github.com/sipeed/picoclaw/pull/2143)) |
| **Medium** | **Tool Call 提取缺陷**: 正则表达式提取工具调用存在缺陷，可能导致执行错误 | **Open** ([Issue #2136](https://github.com/sipeed/picoclaw/issues/2136)) |
| **Low** | **Gateway 启动报错**: 首次安装配置时提示无 PID | **Open** ([Issue #2105](https://github.com/sipeed/picoclaw/issues/2105)) |

## 6. 功能请求与路线图信号
- **🧠 MCP 与外部工具注入**: 有开发者请求增强 Hook 系统，以便在不修改内部注册表的情况下支持 MCP (Model Context Protocol) 等外部工具 ([Issue #2160](https://github.com/sipeed/picoclaw/issues/2160))。这与 Agent Phase 2 的扩展性高度契合。
- **🖼️ 本地视觉支持**: [PR #2116](https://github.com/sipeed/picoclaw/pull/2116) 提议增加 `load_image` 工具，允许 Agent 直接分析本地图片文件。这填补了 Vision 能力在本地文件处理上的空白。
- **👀 任务进度反馈**: 用户强烈希望 Agent 能在执行长任务时提供实时反馈（如 "正在搜索..."），而不是静默执行 ([Issue #2137](https://github.com/sipeed/picoclaw/issues/2137))。

## 7. 用户反馈摘要
- **痛点**: 用户对 v0.2.4 配置保存失败感到沮丧，尤其是 Discord 和 Telegram 机器人在升级后“变砖”。
- **场景**: Docker 用户希望预装 `python`、`curl` 等常用工具以便在容器内进行调试和脚本编写 ([Issue #1228](https://github.com/sipeed/picoclaw/issues/1228))。
- **满意度**: 尽管有 Bug，社区对 Phase 2 的多智能体架构表现出极高的期待值，尤其是对“海马体记忆系统”这类创新概念的讨论非常积极。

## 8. 待处理积压
- **[Bug] Whatsapp Native 构建失败** ([Issue #1567](https://github.com/sipeed/picoclaw/issues/1567)): 自 3 月 14 日以来一直未解决，影响了部分特定渠道用户。
- **[Feature] Authula 集成** ([Issue #1067](https://github.com/sipeed/picoclaw/issues/1067)): 关于认证/鉴权系统的集成讨论已持续近一个月，随着 PicoClaw 部署范围扩大，安全性将成为瓶颈，建议维护者尽快排期。

---
*分析由 AI 自动生成，基于 GitHub 项目 2026-03-30 的公开数据。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-30 的动态日报。

# NanoClaw 项目日报 (2026-03-30)

## 1. 今日速览
NanoClaw 今日保持着**极高的开发活跃度**，虽然未发布新版本，但代码库变动剧烈。过去24小时内共有 **22 个 PR 更新**（其中 8 个已合并/关闭）和 **6 个 Issues 更新**。社区目前正处于功能爆发期，重点集中在**完善 Web 仪表盘**、**增强容器化安全性**以及**修复会话管理逻辑**。值得注意的是，有多达 14 个 PR 处于待合并状态，显示维护者正在严格把控代码质量，但也积压了一定数量的社区贡献。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，主要集中在稳定性修复和架构清理：

*   **[稳定性修复]** **#1533 (OPEN) / #1532 (CLOSED) 修复容器运行失败导致的 Session ID 无限重试循环**
    *   **内容**：修复了当容器 Agent 崩溃时，错误的 Session ID 仍被持久化到数据库，导致系统陷入无限重试死循环的严重 Bug。
    *   **进展**：该修复已被采纳（关联 Issue #1531），显著提升了系统在异常情况下的自愈能力。
    *   链接: [qwibitai/nanoclaw PR #1533](https://github.com/qwibitai/nanoclaw/pull/1533)

*   **[系统兼容性]** **#1530 (OPEN) / #1529 (CLOSED) 增加 SELinux :z 标签支持**
    *   **内容**：为 Docker 卷挂载添加了 `:z` 标签，解决了在 Fedora/RHEL 等 SELinux 强制模式系统上的权限拒绝问题。
    *   **进展**：合并后，NanoClaw 在企业级 Linux 环境下的开箱即用体验将得到改善。
    *   链接: [qwibitai/nanoclaw PR #1530](https://github.com/qwibitai/nanoclaw/pull/1530)

*   **[功能增强]** **#1526 [CLOSED] 增加 WhatsApp 媒体获取工具**
    *   **内容**：引入了获取 WhatsApp 媒体文件的实用工具，增强了消息处理通道的能力。
    *   链接: [qwibitai/nanoclaw PR #1526](https://github.com/qwibitai/nanoclaw/pull/1526)

*   **[架构重构]** **#1535 [CLOSED] 回退原生凭证代理**
    *   **内容**：回退了之前的凭证代理实现，可能是在为更安全的架构让路。

## 4. 社区热点
今日讨论焦点集中在**Web 端交互**与**安全性**两个方向：

*   **Web Dashboard 与多用户支持**：PR **#1514** (Web 仪表盘) 和 **#1534** (Local-chat PWA) 备受关注。社区迫切需要一个可视化的界面来管理容器、查看用量（Token 成本）和进行多人协作。
    *   链接: [qwibitai/nanoclaw PR #1514](https://github.com/qwibitai/nanoclaw/pull/1514)
    *   链接: [qwibitai/nanoclaw PR #1534](https://github.com/qwibitai/nanoclaw/pull/1534)

*   **远程 Agent 的权限审批**：Issue **#1537** 提出了一个核心痛点——当通过 Telegram/WhatsApp 远程运行 Agent 时，缺乏终端交互来进行权限确认（目前只能跳过，存在安全隐患）。
    *   链接: [qwibitai/nanoclaw Issue #1537](https://github.com/qwibitai/nanoclaw/issues/1537)

*   **安装设置询问**：Issue **#127** (Closed) 显示仍有新用户对如何与非 Claude 工具（如 opencode）集成感到困惑，表明文档或引导流程仍有优化空间。
    *   链接: [qwibitai/nanoclaw Issue #127](https://github.com/qwibitai/nanoclaw/issues/127)

## 5. Bug 与稳定性
今日报告了多个影响生产环境的关键 Bug：

1.  **[严重] 会话死循环 (已修复)**
    *   **描述**：容器崩溃后，Orchestrator 读取错误的 Session ID 并反复重试。
    *   **状态**：**Fix PR #1533 已提交**。
    *   链接: [qwibitai/nanoclaw Issue #1531](https://github.com/qwibitai/nanoclaw/issues/1531)

2.  **[严重] SSL 证书失效**
    *   **描述**：用户报告 `nanoclaw.dev` 域名当前 SSL 证书无效，影响服务访问。
    *   **状态**：**Open**，等待官方基础设施响应。
    *   链接: [qwibitai/nanoclaw Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)

3.  **[中等] 供应链攻击风险**
    *   **描述**：Issue **#1485** 指出基础安装脚本直接在宿主机运行 curl，存在供应链攻击风险，建议完全容器化。
    *   **状态**：**Open**，目前已有相关 PR 讨论隔离方案。
    *   链接: [qwibitai/nanoclaw Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485)

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 来看，项目的下一阶段路线图清晰指向 **"企业级可用性"** 和 **"成本控制"**：

*   **成本追踪**：PR **#1528** 提出了 Token 成本追踪功能，这在之前的版本中是缺失的，对于生产环境部署至关重要。
    *   链接: [qwibitai/nanoclaw PR #1528](https://github.com/qwibitai/nanoclaw/pull/1528)
*   **对话式审批流**：Issue **#1537** 请求为远程 Agent 增加对话式的权限审批机制，而非简单的跳过。这是实现 "无人值守但安全" 的关键一步。
*   **技能市场**：PR **#1470** 正在尝试将技能插件化并移动到独立的 marketplace，暗示 NanoClaw 正在构建插件生态系统。
    *   链接: [qwibitai/nanoclaw PR #1470](https://github.com/qwibitai/nanoclaw/pull/1470)

## 7. 用户反馈摘要
*   **痛点**：**安全性**是高级用户最担心的问题。Issue #1424 和 #1485 都在讨论 Fork 安全性和宿主机脚本的安全性。用户不希望为了使用 AI 助手而暴露整个系统。
*   **场景**：用户正在尝试将 NanoClaw 集成到家庭医疗系统（#1424）和团队协作中（#1534），表明项目正从 "极客玩具" 向 "生产力工具" 过渡。
*   **满意度**：虽然有 SSL 和安装脚本的问题，但社区提交的大量高质量 PR（如 Dashboard, Cost tracking）表明核心开发者群体对项目架构非常认可，并愿意投入精力贡献代码。

## 8. 待处理积压
*   **[基础设施] SSL 证书问题 (#1503)**：影响官方域名访问，建议最高优先级处理。
*   **[功能] Signal 通道支持 (#1121)**：该 PR 已存在一段时间，目前状态为 "Needs Review"，社区对隐私通讯通道的需求依然存在。
    *   链接: [qwibitai/nanoclaw PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121)
*   **[积压] 14 个待合并 PR**：目前有大量功能型 PR（如 Web Dashboard #1514, MCP Servers #1515）处于 Open 状态。建议维护者进行一次 PR 清理或分批合并，以避免功能冲突和审核疲劳。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是为您生成的 **IronClaw** 项目 2026-03-30 动态日报。

---

# IronClaw 项目日报 - 2026年3月30日

## 1. 今日速览
IronClaw 项目在过去24小时内呈现出**极高的开发活跃度**与**社区互动热度**。虽然今日无正式版本发布，但代码库迎来了大规模的架构重构与功能迭代，共有 7 个 PR 被合并，涵盖了前端组件化、配置系统统一以及 LLM 适配修复等核心模块。与此同时，社区对**金融级安全执行层**和**异步交易审批**的讨论标志着项目正在向更高安全标准的“个人财务助理”方向演进。不过，Telegram 集成的遗留 Bug 依然困扰着部分用户，值得开发者持续关注。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 7 个 PR 合并至主分支，主要集中在对系统架构的重构和稳定性的增强，为下一阶段的版本发布打下了坚实基础：

*   **前端架构重构 (PR #1725):** 核心贡献者 `ilblackdragon` 合并了重大更新，将网关前端提取为独立的 `ironclaw_frontend` crate，并引入了 Widget 扩展系统。这允许用户和企业自定义 UI，大大提升了部署灵活性。
    *   链接: [nearai/ironclaw PR #1725](https://github.com/nearai/ironclaw/pull/1725)
*   **配置系统统一 (PR #1722):** 合并了配置优先级重构，确立了 **DB > env > TOML > default** 的统一解析顺序，解决了长期以来 LLM 配置与其他子系统配置逻辑不一致的问题。
    *   链接: [nearai/ironclaw PR #1722](https://github.com/nearai/ironclaw/pull/1722)
*   **LLM 适配与修复:**
    *   **Bedrock 修复 (PR #1630):** 修复了 AWS Bedrock API 在无 `toolConfig` 时报错的问题，确保了工具调用历史兼容性。
        *   链接: [nearai/ironclaw PR #1630](https://github.com/nearai/ironclaw/pull/1630)
    *   **Web UI 自定义 LLM (PR #1340):** 现在用户可以直接通过 Web UI 定义和热加载自定义 LLM 提供商，无需重启服务或修改配置文件。
        *   链接: [nearai/ironclaw PR #1340](https://github.com/nearai/ironclaw/pull/1340)
*   **Agent 稳定性 (PR #1720):** 修复了自主任务中因空工具响应导致的死循环问题，增加了有界的恢复机制。
    *   链接: [nearai/ironclaw PR #1720](https://github.com/nearai/ironclaw/pull/1720)

## 4. 社区热点
今日的讨论焦点集中在安全性与扩展性设计上：

*   **构建金融安全执行层 (Issue #1712):** `serrrfirat` 发起了关于构建安全金融执行层的提案，旨在为 IronClaw 增加托管、签名、审批和跨应用加密操作的架构支持。这表明项目正试图从“通用助手”向“可信金融代理”转型。
    *   链接: [nearai/ironclaw Issue #1712](https://github.com/nearai/ironclaw/issues/1712)
*   **异步交易审批系统 (Issue #1739):** `zmanian` 提议引入基于 WalletConnect 的两阶段异步交易工具模式，允许 Agent 在安全通道（如手机）上发起高价值交易并由人工审批，隔离了 Agent 被攻击的风险。
    *   链接: [nearai/ironclaw Issue #1739](https://github.com/nearai/ironclaw/issues/1739)
*   **Telegram Bot 集成顽疾 (Issue #1676):** 用户 `jamieduk` 反馈的 HTTP 工具例程错误导致 Telegram Bot 只能部分工作（无法正确轮询消息），该问题已持续数日，评论数达 10 条，是目前最活跃的用户痛点。
    *   链接: [nearai/ironclaw Issue #1676](https://github.com/nearai/ironclaw/issues/1676)

## 5. Bug 与稳定性
*   **P0 - Telegram Bot 功能受损:** Issue #1676 指出 HTTP 工具在轮询消息时存在逻辑错误，导致 Bot 处于半瘫痪状态。目前尚未有明确的修复 PR 关联此 Issue。
*   **P1 - MiniMax API 认证失败:** Issue #1742 报告 MiniMax 提供商返回 401 Unauthorized 错误，怀疑 API 调用方式或鉴权参数配置有误。
    *   链接: [nearai/ironclaw Issue #1742](https://github.com/nearai/ironclaw/issues/1742)
*   **P2 - Ollama 迭代超时 (已修复):** Issue #1611 报告本地模型 Ollama 偶尔回空响应导致超过最大迭代次数报错。随着 PR #1720 (空响应处理) 的合并，此问题有望得到缓解。
    *   链接: [nearai/ironclaw Issue #1611](https://github.com/nearai/ironclaw/issues/1611)
*   **安全补丁:** PR #1675 (Open) 增加了对敏感路径（如 `~/.config`, `~/.ssh`）的访问黑名单及凭证模式检测，防止 Agent 误读或泄露敏感信息。
    *   链接: [nearai/ironclaw PR #1675](https://github.com/nearai/ironclaw/pull/1675)

## 6. 功能请求与路线图信号
*   **OS 级扩展性架构 (Issue #1741):** 核心成员 `ilblackdragon` 提议重构内核/扩展架构，从目前的编译时依赖转向类似操作系统的动态扩展模型，这可能是未来 1.x 版本的核心路线图。
    *   链接: [nearai/ironclaw Issue #1741](https://github.com/nearai/ironclaw/issues/1741)
*   **局域网 LLM 支持 (PR #1696):** 正在待合并状态的 PR 允许通过环境变量 `LLM_ALLOW_LOCAL_NETWORK` 解除对局域网 IP 的 SSRF 限制，方便用户连接内网的 Ollama 或 vLLM 服务。
    *   链接: [nearai/ironclaw PR #1696](https://github.com/nearai/ironclaw/pull/1696)
*   **Commitments 系统 (PR #1736):** 旨在通过纯 Skill 文件实现个人助手的承诺/任务跟踪系统，展示了不写代码即可扩展 Agent 能力的可能性。
    *   链接: [nearai/ironclaw PR #1736](https://github.com/nearai/ironclaw/pull/1736)

## 7. 用户反馈摘要
*   **集成痛点:** 用户在尝试将 IronClaw 与 Telegram 集成时感到沮丧，认为旧版（或竞品）OpenClaw 表现更好，希望尽快修复 HTTP 工具的网络请求/轮询机制。
*   **本地化需求:** 多个 Issues 和 PRs 涉及本地模型（Ollama, MiniMax, Aliyun）的连接和认证问题，显示出 IronClaw 用户群体对**私有化部署**和**非 OpenAI 模型**有强烈需求。
*   **安全性焦虑:** 针对 Agent 权限过大可能导致的敏感文件泄露或被劫持风险，用户对“审批分离”和“沙箱隔离”表示高度关注。

## 8. 待处理积压
*   **PR 积压严重:** 目前有 **43 个待合并 PR**，其中包括 PR #1446 (阿里云百炼支持) 和 PR #1696 (局域网支持) 等高价值贡献。建议维护者尽快 Review 或分批处理，避免功能积压导致合并冲突。
*   **长期 Issue:** Issue #1676 (Telegram Bug) 已活跃 5 天且有 10 条评论但未关闭，建议提升优先级。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI** 项目 2026-03-30 的动态日报。

# LobsterAI 项目动态日报 (2026-03-30)

## 1. 今日速览
LobsterAI 今日呈现出 **“开发高度活跃，社区疑虑浮现”** 的态势。过去 24 小时内，项目收到了 **7 个高质量的功能级 PR**，主要集中在提升 Cowork（协同工作）模块的交互体验（如 Artifacts 预览、Prompt 模板、Slash 指令），显示出团队正在极力完善产品的易用性和可视化能力。然而，社区侧出现了关于 **底层引擎未来走向的战略性疑问**（Issue #418），同时伴随 Windows 端稳定性问题（Issue #595）及 Agent 引擎可靠性反馈。目前所有 PR 均处于待合并状态，暂无新版本发布，建议关注后续代码合并节奏及官方对路线图的澄清。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无已合并的 PR，但有 **7 个重磅功能性 PR 提交**，预示着下一次版本更新将包含重大体验升级：

*   **可视化与交互增强**：
    *   [PR #1011](https://github.com/netease-youdao/LobsterAI/pull/1011)：**引入可扩展的 Artifacts 预览管道**。支持 HTML、React、Mermaid 等内容的实时渲染预览，不再仅显示源码，大幅提升 AI 生成内容的可用性。
    *   [PR #1013](https://github.com/netease-youdao/LobsterAI/pull/1013)：**输入框支持 Slash 唤起技能选择器**。优化了技能调用流程，支持类似 IDE 的快捷指令体验。
*   **生产力工具**：
    *   [PR #1009](https://github.com/netease-youdao/LobsterAI/pull/1009)：**新增 Prompt 模板库**。支持变量填充与复制，解决高频 Prompt 重复编写的痛点。
    *   [PR #1008](https://github.com/netease-youdao/LobsterAI/pull/1008)：**扩充预设 Agent 模板**。新增 6 个覆盖更多场景的预设 Agent。
*   **系统集成与优化**：
    *   [PR #644](https://github.com/netease-youdao/LobsterAI/pull/644)：**支持 Qwen 一键 OAuth 登录**。降低了通义千问模型的使用门槛，实现“下载即对话”。
    *   [PR #1012](https://github.com/netease-youdao/LobsterAI/pull/1012) & [PR #1010](https://github.com/netease-youdao/LobsterAI/pull/1010)：分别增加了“对话创建技能”入口和输出文件链接的“在文件夹中显示”功能。

## 4. 社区热点
*   **[战略方向疑问] Issue #418** - **引擎切换传闻**：用户 `lyb12358` 观察到代码分支有切换至 `openclaw` 的迹象，询问基于 `claude agent sdk` 的 cowork 是否会被弃用。
    *   *分析*：这是今日最具战略意义的讨论。如果底层引擎发生变更（可能因为 Claude SDK 的不可控性），将直接影响现有用户的升级路径和二次开发。急需官方维护者出面澄清路线图。
*   **[体验优化讨论] Issue #986** - **微信回复同步机制**：用户反馈微信机器人回复延迟高，需等客户端完全生成后才一次性发送，导致“等很久然后刷屏”的糟糕体验。
    *   *分析*：这反映了流式输出（Streaming）在第三方集成（微信）端的实现难点，是 ToC 场景下的高频痛点。

## 5. Bug 与稳定性
今日报告的问题主要集中在 **Windows 客户端稳定性** 和 **引擎健壮性**，暂无官方修复 PR：

1.  **[High] Issue #595 - Windows 开机自启失败**
    *   *现象*：Windows 10/11 下，进程启动后约 3 秒自动退出，且无日志写入。
    *   *影响*：严重影响桌面端用户的留存率和后台驻留体验。
2.  **[Medium] Issue #1007 - Agent Engine 无限重启**
    *   *现象*：Agent 引擎陷入崩溃重启循环，用户寻求配置文件修改方案以恢复稳定。
    *   *影响*：核心推理功能不可用，属于阻塞性故障。
3.  **[Low] Issue #986 - 微信同步延迟**
    *   *现象*：如上所述，属于交互体验类 Bug。

## 6. 功能请求与路线图信号
*   **信号：底层架构重构**
    *   结合 Issue #418 的讨论，项目可能正处于 **底层推理引擎（Agent Engine）的重构期**（从单一 Claude SDK 转向更通用的 OpenClaw 或自研方案）。这解释了为何近期 PR 集中在 UI 和工具链层面（PR #1009, #1011），可能是为了在底层重构完成前夯实应用层体验。
*   **信号：技能与模板生态**
    *   PR #1008（预设 Agent）和 PR #1009（Prompt 模板）表明项目正在构建 **内容生态**，试图通过沉淀高价值 Prompt 和 Agent 模板来降低用户的使用门槛。

## 7. 用户反馈摘要
*   **痛点**：
    *   **不稳定性焦虑**：用户对底层引擎的稳定性（无限重启）和未来兼容性（是否换引擎）表示担忧。
    *   **集成体验差**：微信端的非流式交互体验被用户形容为“糟糕”。
*   **满意点/期待**：
    *   用户对 **Qwen OAuth 登录**（PR #644）表示欢迎，认为这能极大简化部署流程（“10秒发起对话”）。
    *   社区对 **Artifacts 预览**（PR #1011）有较高期待，希望能解决“看源码脑补界面”的困难。

## 8. 待处理积压
*   **关键 PR 待合并**：当前有 7 个功能性 PR 处于 Open 状态，建议维护者尽快进行 Code Review 并合入主分支，以避免功能积压导致的后续冲突。
*   **关键 Issue 待回应**：
    *   [Issue #418](https://github.com/netease-youdao/LobsterAI/issues/418)：关于项目未来发展方向的澄清，建议设为 P0 优先级回应。
    *   [Issue #595](https://github.com/netease-youdao/LobsterAI/issues/595)：Windows 自启动崩溃问题，需排查日志初始化逻辑。

---
*分析师注：项目目前处于功能快速迭代期，但底层架构的不确定性（OpenClaw 传闻）可能会影响开发者的贡献意愿。建议密切关注后续 Issue 回复及 PR 合并动态。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-03-30)

**分析师：** AI 开源项目观察员
**数据周期：** 过去 24 小时

---

### 1. 今日速览
Moltis 项目今日保持**高活跃度**，开发重心明显向**稳定性修复与新提供商支持**倾斜。过去 24 小时内共有 5 个 PR 被合并，成功关闭了 5 个 Issue，解决了包括 GraphQL 服务绑定在内的多个关键架构问题。虽然新开 Issue 数量较少，但针对 Z.AI 编码计划的支持已通过 PR 合并落地，显示出团队对社区需求的快速响应能力。此外，版本 `20260328.03` 的发布标志着新一轮的迭代交付已完成。

### 2. 版本发布
- **[Release 20260328.03](https://github.com/moltis-org/moltis/releases/tag/20260328.03)**
    - **概览**：这是最新的稳定版构建，包含了过去 24 小时内合并的重要修复。
    - **主要更新**：修复了 GraphQL 实时聊天服务绑定问题（#511），增加了对本地 LLM 服务器模型探测的超时时间（#515），并初步引入了 Z.AI Coding Plan 的支持（#517）。

### 3. 项目进展
今日共有 **3 个关键 PR 合并**，显著提升了系统的健壮性：

*   **架构修复：GraphQL 服务绑定** ([PR #511](https://github.com/moltis-org/moltis/pull/511))
    *   **内容**：修复了 GraphQL 绕过后期绑定实时聊天服务的问题。通过在请求时解析服务，解决了 `chat_override` 在 GraphQL 接口下失效的 Bug。
    *   **意义**：这是重要的架构修正，确保了 GraphQL 与 RPC 接口行为的一致性。

*   **兼容性提升：本地 LLM 支持** ([PR #515](https://github.com/moltis-org/moltis/pull/515))
    *   **内容**：将模型探测超时时间从 10 秒增加到 30 秒。
    *   **意义**：解决了本地部署 LLM（加载较慢）时无法选择模型的问题，改善了本地私有化部署的体验。

*   **新特性：Z.AI Coding Plan 支持** ([PR #517](https://github.com/moltis-org/moltis/pull/517))
    *   **内容**：新增 `zai-code` 提供商，专门适配 Z.AI 的 Coding Plan 计费端点。
    *   **意义**：修复了使用 Coding Plan 余额时出现的 "insufficient balance" 错误，扩展了潜在用户群。

### 4. 社区热点
今日社区关注度最高的话题集中在**集成扩展**与**特定功能支持**：

*   **Z.AI Coding Plan 集成** ([Issue #185](https://github.com/moltis-org/moltis/issues/185))
    *   **动态**：该请求获得了 5 个 👍，需求强烈。作者 `pomazanbohdan` 提议增加 Z.AI Coding Plan，今日通过的 [PR #517](https://github.com/moltis-org/moltis/pull/517) 直接回应了这一诉求。
    *   **分析**：用户希望利用 Z.AI 的特定计费套餐，表明 Moltis 在作为第三方客户端对接商业 LLM 服务方面有较高要求。

*   **Matrix 协议支持** ([Issue #233](https://github.com/moltis-org/moltis/issues/233))
    *   **动态**：持续活跃，获得 2 个 👍。
    *   **分析**：去中心化通讯协议 Matrix 的支持是用户接入多渠道的重要功能请求，目前仍处于 Open 状态，属于路线图上的长期关注点。

### 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，整体稳定性上升：

*   **[已修复] 工具生成 JSON Schema 无效** ([Issue #485](https://github.com/moltis-org/moltis/issues/485))
    *   **严重程度**：高。导致内置工具在严格模式提供商下无法使用。该 Issue 已随相关修复关闭。
*   **[已修复] Z.AI 无法开箱即用及网络错误** ([Issue #414](https://github.com/moltis-org/moltis/issues/414))
    *   **严重程度**：中。影响了特定提供商的初始配置体验，现已关闭。
*   **[已修复] 大部分模型无法选择** ([Issue #514](https://github.com/moltis-org/moltis/issues/514))
    *   **严重程度**：高。这是一个阻断性 Bug，通过 [PR #515](https://github.com/moltis-org/moltis/pull/515) 增加超时时间得以解决。

### 6. 功能请求与路线图信号
*   **本地化思考能力** ([Issue #490](https://github.com/moltis-org/moltis/issues/490))
    *   **信号**：用户 `Wanderspool` 提出了“Local thinking”功能，希望 AI 的思考过程能在本地处理。结合今日 PR 中对本地 LLM 超时设置的优化，可以看出**本地化/私有化部署**是项目演进的重要方向。
*   **会话历史与技能移植** ([PR #503](https://github.com/moltis-org/moltis/pull/503))
    *   **状态**：待合并。
    *   **展望**：该 PR 提议增加跨会话召回、托管 SSH 运行时以及技能包的导出/导入。若合并，将极大地增强 Moltis 作为长期记忆智能体的能力。

### 7. 用户反馈摘要
从 Issue 评论区提炼出的核心痛点如下：
*   **提供商适配困难**：用户在使用 Z.AI 等非主流或特定套餐提供商时，经常遇到端点或计费逻辑不匹配的问题（#414, #185）。
*   **本地模型响应慢**：本地运行模型的用户反馈系统默认的超时设置过于激进，导致加载稍慢的模型直接被判定为不可用（#515）。
*   **系统提示词上下文缺失**：用户强烈建议在系统提示词上下文中加入当前日期时间（#176），以便 AI 获得时间感知能力，该功能已在近日完成。

### 8. 待处理积压
*   **[重要] 增加会话召回与技能移植** ([PR #503](https://github.com/moltis-org/moltis/pull/503))
    *   该 PR 涉及大量功能聚合（Recall, SSH, Skills），目前处于 Open 状态。鉴于其包含核心功能增强，建议维护者尽快 Review 或拆分为多个小 PR 以便合并。
*   **[体验] 封存状态下的会话历史访问** ([PR #518](https://github.com/moltis-org/moltis/pull/518))
    *   提议在 Vault 封存状态下允许访问未加密的引导端点，解决 UI 显示误导问题，目前等待 Review。

---
**总结**：Moltis 今日表现稳健，通过快速的 Bug 修复和提供商适配赢得了社区积极反馈。随着对本地 LLM 的优化和 Z.AI 的支持，项目正在向“更广泛的兼容性”迈进。下一步重点应关注 PR #503 的合并进度，这将决定项目在“长期记忆”和“技能复用”方面的竞争力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-30)

## 1. 今日速览
CoPaw 项目今日维持高活跃度，社区贡献热情高涨。过去24小时内，Issues 互动量达 40 条，其中 13 个问题被关闭，显示出维护团队积极的响应态度。代码层面共有 30 个 PR 更新，其中 15 个为新增待合并 PR，包含多个来自首次贡献者（first-time-contributor）的功能提交，表明项目生态正在快速扩展。目前项目重心集中在多渠道集成优化、本地模型兼容性修复以及 UI/UX 体验改善上。整体来看，项目健康度良好，但在稳定性和部分遗留 Bug 处理上仍有提升空间。

## 2. 版本发布
**无新版本发布。**
尽管今日有大量 PR 更新，但尚未形成正式的 Release 版本。考虑到目前待合并的 PR 中包含多项重要修复（如 Windows 安装脚本、iMessage 安全策略），预计下一个版本将主要集中在稳定性修补和功能完善上。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，主要推进了以下方面的进展：

*   **用户体验优化**：
    *   [PR #2483](https://github.com/agentscope-ai/CoPaw/pull/2483) 和 [PR #2479](https://github.com/agentscope-ai/CoPaw/pull/2479) 合并，增强了 Web Console 聊天界面的视觉体验，增加了渠道标签和图标，并添加了新的提示信息。
    *   [PR #1401](https://github.com/agentscope-ai/CoPaw/pull/1401) 修复了不同语言下 Provider 卡片布局不一致的问题。
*   **Bug 修复**：
    *   [PR #2489](https://github.com/agentscope-ai/CoPaw/pull/2489) 修复了 Windows 安装脚本 `install.ps1` 中的关键拼写错误，恢复了 PATH 自动更新功能。
*   **文档与技能**：
    *   [PR #2486](https://github.com/agentscope-ai/CoPaw/pull/2486) 和 [PR #2480](https://github.com/agentscope-ai/CoPaw/pull/2480) 更新了 Magic Command 文档和 Skills UI。

**待处理的重要 PR (Open)**：
*   [PR #2484](https://github.com/agentscope-ai/CoPaw/pull/2484): 实现知识库导入管道。
*   [PR #2501](https://github.com/agentscope-ai/CoPaw/pull/2501): 为飞书增加流式打字机卡片效果。
*   [PR #2469](https://github.com/agentscope-ai/CoPaw/pull/2469): 引入带优先级调度的 Agent 消息队列。

## 4. 社区热点
今日社区讨论焦点主要集中在以下议题：

1.  **贡献者招募与路线图** ([Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291))
    *   **热度**: 36 条评论
    *   **分析**: 官方发布了“Help Wanted”任务清单，涵盖了从 P0 到 P2 的开发任务。这激发了社区极大的参与热情，今日多个新 PR（如知识库导入、OpenCode 集成）均源于此任务列表。
2.  **核心性能问题：CPU 空转 100%** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218))
    *   **热度**: 17 条评论
    *   **分析**: 这是一个严重的老大难问题，涉及底层 epoll 忙轮询。用户反馈即使在空闲状态下 CoPaw 也会占用满 CPU，严重影响了在低配设备或长时间运行场景下的可用性。
3.  **重度用户痛点：上下文管理与文件读取** ([Issue #2482](https://github.com/agentscope-ai/CoPaw/issues/2482))
    *   **热度**: 9 条评论
    *   **分析**: 一位重度开发者用户指出了几个关键痛点：无法物理删除特定对话（导致上下文污染）、AI 压缩记忆逻辑混乱、以及读取长文件时被截断。这些反馈直指 Agent 记忆管理的核心逻辑缺陷。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**安装部署**、**模型连接**和**长时间运行稳定性**方面。

*   **严重**:
    *   **网关重启导致 Agent 卡死** ([Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445)): 100% 复现，导致服务不可用，需重新部署。
        *   *状态*: Open，尚无修复 PR。
    *   **CPU 空转 100%** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)): 持续占用 CPU 资源。
        *   *状态*: Open，尚无修复 PR。
*   **中等**:
    *   **Windows 安装脚本失效** ([Issue #2488](https://github.com/agentscope-ai/CoPaw/issues/2488)): `SetItemProperty` 拼写错误导致 PATH 无法更新。
        *   *状态*: **已修复** ([PR #2489](https://github.com/agentscope-ai/CoPaw/pull/2489))。
    *   **MiniMax 模型连接失败** ([Issue #2303](https://github.com/agentscope-ai/CoPaw/issues/2303)): 调用了不支持的 `/models` 端点导致 404。
        *   *状态*: Open。
    *   **MCP ConfigWatcher 空指针异常** ([Issue #2462](https://github.com/agentscope-ai/CoPaw/issues/2462)): CLI 工具因此崩溃。
        *   *状态*: Closed (可能通过相关重构解决)。
*   **轻微**:
    *   **语言设置无法保存** ([Issue #2269](https://github.com/agentscope-ai/CoPaw/issues/2269)): 重启后重置为英文。
        *   *状态*: Open。

## 6. 功能请求与路线图信号
结合 Issue 反馈与 PR 动态，以下功能极有可能在近期被纳入：

1.  **资产备份与迁移** ([Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443))
    *   **诉求**: 用户需要跨设备迁移配置、记忆和技能。
    *   **进展**: 已有详细的 Feature Proposal，建议关注后续是否有对应的 PR 提交。
2.  **MCP 工具可视化** ([Issue #2495](https://github.com/agentscope-ai/CoPaw/issues/2495))
    *   **诉求**: 配置 MCP 后，希望在界面上直观看到可用的工具列表。
    *   **进展**: 这是一个增强用户体验的强需求，预计将很快被提上日程。
3.  **钉钉 AI 表格/文档操作** ([PR #2465](https://github.com/agentscope-ai/CoPaw/pull/2465))
    *   **进展**: 目前已有 PR 实现了对钉钉 AI 表格的增删改查操作，这将极大增强 CoPaw 在企业级场景下的自动化能力。
4.  **Skills Hub 管理页面** ([Issue #2418](https://github.com/agentscope-ai/CoPaw/issues/2418))
    *   **诉求**: 用户希望能像应用商店一样方便地下载和管理主流 Skills。

## 7. 用户反馈摘要
从今日的 Issue 中可以提炼出以下典型用户画像与痛点：

*   **痛点**:
    *   **上下文“中毒”**: 用户非常苦恼于无法精准控制上下文。一旦出现乱码或模型“发疯”，整个会话链就废了，且压缩功能往往丢失关键信息，保留无用调试日志 ([Issue #2482](https://github.com/agentscope-ai/CoPaw/issues/2482))。
    *   **长文本处理障碍**: 工具读取文件经常被截断，且不能自动续读，导致处理长代码文件时频繁出错 ([Issue #2500](https://github.com/agentscope-ai/CoPaw/issues/2500))。
    *   **部署环境差异**: 用户在 Docker、远程服务器、Windows 等不同环境下遇到各种配置和持久化问题。
*   **满意点**:
    *   用户对 CoPaw 的“重度使用”场景（如批量处理 1500 个文件）表现出了极高的期待，说明其作为生产力工具的潜力巨大。
    *   社区对“Help Wanted”任务列表反应积极，显示出开源协作模式的成功。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决，建议维护者重点关注：

1.  **[Issue #2218] CPU 空转 100%**: 这是一个严重影响性能和资源消耗的底层 Bug，已被讨论多日但未根除。
2.  **[Issue #1456] Tool Calls 名称为空导致静默失败**: 这是一个隐蔽性很强的 Bug，会导致模型“看起来”在忽略指令，影响用户对 AI 智能程度的信任。
3.  **[Issue #2269] 语言设置不持久化**: 这是一个影响广泛体验的 UI 小问题，多个 Issue (#2431, #2442) 都反映了此类问题，建议统一修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报 (2026-03-30)**

**分析师摘要**：ZeptoClaw 今日展现出极高的开发活跃度，虽然无新版本发布，但代码库迎来了大规模的功能增强与修复提交。核心关注点集中在 **Custom Tools 的灵活性改进**、**上下文窗口管理** 以及 **多模型路由支持**。开发者 stuartbowness 几乎以一己之力推动了 7 个 PR 和 2 个 Issue，显示项目正处于快速迭代期。

---

### 1. 今日速览
过去 24 小时内，ZeptoClaw 保持了高频的代码提交节奏，共有 7 个 PR 更新（其中 1 个已合并）和 2 个新开 Issue。项目重点正在从基础功能构建转向**企业级特性**（如 Landlock 沙箱）和**用户体验优化**（如 Telegram 长消息处理、CLI 工具发现）。尽管没有发布新版本，但合并的代码修复了工具注册缺失的关键问题，而待合并的 PR 则预示着对 OpenRouter 模型支持和上下文压缩机制的重大升级。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 1 个 PR 被合并，显著提升了工具链的完整性；另有 6 个 PR 处于待合并状态，包含重大架构更新。

*   **[MERGED] feat(cli): register missing tools in tool registry (#464)**
    *   **内容**：修复了 `zeptoclaw tools list` 仅显示 33 个已实现工具中的 22 个的问题。
    *   **进展**：用户现在可以发现包括 `git`, `pdf_read`, `stripe` 在内的 11 个“隐藏”工具。这解决了文档与实际功能脱节的问题，提升了工具的可发现性。
    *   **链接**：[qhkm/zeptoclaw PR #464](https://github.com/qhkm/zeptoclaw/pull/464)

*   **[OPEN] feat(agent): multi-layered context compaction (#460)**
    *   **内容**：彻底重写了上下文压缩系统，从简单的单次字数统计转变为多层防御策略，旨在解决长对话导致的 Token 溢出崩溃问题。
    *   **进展**：这是一个重大的架构改进，目前仍在待合并状态，预计将大幅提升 Agent 在长程任务中的稳定性。
    *   **链接**：[qhkm/zeptoclaw PR #460](https://github.com/qhkm/zeptoclaw/pull/460)

*   **[OPEN] feat(tools): add BrowserTool (#459)**
    *   **内容**：集成 `agent-browser` CLI，引入完整的浏览器自动化能力，支持 Chrome 与 Lightpanda 的回退机制。
    *   **进展**：扩展了 Agent 的感知与操作能力边界。
    *   **链接**：[qhkm/zeptoclaw PR #459](https://github.com/qhkm/zeptoclaw/pull/459)

### 4. 社区热点
今日的讨论（主要集中在 Issue 和 PR 描述中）聚焦于 **自定义工具的参数传递** 和 **运行时架构的解耦**。

*   **自定义工具 Shell 转义问题 (#466 & PR #467)**
    *   **现象**：Issue #466 指出使用 `{{args}}` 传递完整命令行时，系统强制加上了单引号转义，导致命令无法被正确解析。
    *   **诉求**：用户（特别是高级用户）需要更底层的参数控制权，而不是“保姆式”的自动转义。
    *   **链接**：[qhkm/zeptoclaw Issue #466](https://github.com/qhkm/zeptoclaw/issues/466)
    *   **解决方案**：PR #467 提出了 `raw_string` 类型，允许按原样传递参数，目前该方案正在审核中。

### 5. Bug 与稳定性
今日报告的 Bug 主要涉及兼容性和配置生效问题，均有对应的 Fix PR。

*   **[HIGH] 严重兼容性回归：Custom Tool 参数转义破坏 CLI Wrapper (#466)**
    *   **描述**：所有传递给自定义工具的参数被强制包裹在单引号中，导致复杂的命令行参数失效。
    *   **状态**：已有修复方案 [PR #467](https://github.com/qhkm/zeptoclaw/pull/467)，引入 `raw_string` 类型。

*   **[MEDIUM] 配置失效：Landlock 沙箱无法访问 Workspace (#463)**
    *   **描述**：启用 `runtime_type: "landlock"` 后，尽管配置了允许读写，Agent 仍无法访问工作区目录。
    *   **状态**：已有修复 [PR #463](https://github.com/qhkm/zeptoclaw/pull/463)，修正了 Landlock 规则的挂载逻辑。

*   **[MEDIUM] 通信故障：Telegram 长文本静默失败 (#462)**
    *   **描述**：执行长 Research 任务时，Bot 因消息超出长度限制而无响应，无报错反馈。
    *   **状态**：已有修复 [PR #462](https://github.com/qhkm/zeptoclaw/pull/462)，增加了分块发送和纯文本回退机制。

*   **[LOW] 路由错误：OpenRouter 前缀模型无法正确路由 (#468)**
    *   **描述**：类似 `google/gemini-3` 的模型名称无法正确路由到 OpenRouter 提供商。
    *   **状态**：已有修复 [PR #468](https://github.com/qhkm/zeptoclaw/pull/468)。

### 6. 功能请求与路线图信号
*   **运行时解耦 (#465)**：用户建议 `zeptoclaw tools list` 不应从硬编码的数组读取，而应直接读取运行时 `ToolRegistry`。这反映了社区希望 ZeptoClaw 具备更高的动态性，能够实时反映插件和 MCP 工具的状态。这可能是下一阶段重构 CLI 架构的信号。
    *   **链接**：[qhkm/zeptoclaw Issue #465](https://github.com/qhkm/zeptoclaw/issues/465)

### 7. 用户反馈摘要
从今日的 Issue 描述中可以提炼出以下用户画像：
*   **高级用户群体**：ZeptoClaw 的用户正在尝试将其作为更复杂的 CLI Wrapper（如 `gws`）的底座，对 Shell 交互的细节非常敏感。
*   **多模态需求**：对 OpenRouter 和 Gemini 等非默认模型的使用需求增加，说明用户希望在 ZeptoClaw 上通过单一入口调用多种 LLM 后端。
*   **可靠性痛点**：用户对“静默失败”（如 Telegram 无响应、CLI 工具参数错误）非常敏感，期望 Agent 具备更强的错误反馈和自我恢复能力。

### 8. 待处理积压
*   **重点关注**：PR #460 (Context Compaction) 和 PR #459 (BrowserTool) 是两个大型功能更新，虽然创建于 27-28 日，但今日仍在更新活跃中。鉴于其对系统稳定性和能力的重大影响，建议维护者优先 Review 并合并。
*   **Issue #465**：关于 CLI 工具列表重构的建议尚未有对应的 PR，建议标记为 `good first issue` 或纳入近期重构计划。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

这里是 **EasyClaw** 项目 2026-03-30 的每日动态日报。

---

### 📊 EasyClaw 项目日报 (2026-03-30)

#### 1. **今日速览**
EasyClaw 项目今日保持轻度活跃，主要集中在维护性更新与用户兼容性排查。项目发布了 **v1.7.8** 版本，重点解决了 macOS 平台下的安全签名验证问题（Gatekeeper 拦截）。社区方面，出现了一个关于多工具并存的关键兼容性 Issue，表明用户存在多场景切换使用的强需求。整体代码合并活动平静，处于版本发布后的稳定观察期。

#### 2. **版本发布**
*   **[Release] v1.7.8: RivonClaw v1.7.8**
    *   **更新重点**：主要针对 **macOS** 平台的安装体验进行优化。
    *   **核心修复**：解决了 macOS 用户下载后提示 **“'RivonClaw' is damaged and can't be opened”** 的问题。文档明确指出这是由于缺少签名导致的 Gatekeeper 拦截，而非文件损坏。
    *   **迁移注意**：macOS 用户升级或安装后，若遇到无法打开的情况，需通过终端（Terminal）执行移除隔离属性命令（具体命令参见 Release Note），无需重新下载。

#### 3. **项目进展**
*   今日无已合并或关闭的 Pull Request。结合新版本发布来看，目前的代码库状态已冻结于 v1.7.8，主要推进工作在于修复分发端的安装障碍，核心功能层面暂无变更。

#### 4. **社区热点**
*   **[Issue #30 [OPEN] rivonclaw和QClaw能不能同时使用**
    *   **链接**：[gaoyangz77/rivonclaw Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)
    *   **分析**：这是今日唯一的新增 Issue。用户报告了 RivonClaw 与腾讯 QClaw 之间存在**端口/网络层冲突**。
    *   **诉求**：用户希望能够同时运行两款工具，或者在切换时不影响彼此的网络连接。这反映出部分用户有对比测试或分流使用的场景，目前的互斥机制降低了用户体验。

#### 5. **Bug 与稳定性**
今日报告的 Bug 主要涉及**软件冲突**，按严重程度排列如下：
*   **🔴 高 - 网络连接冲突 (Issue #30)**
    *   **描述**：RivonClaw 与腾讯 QClaw 无法共存。开启其中一个会导致另一个断连，必须完全退出一方才能恢复。
    *   **推测原因**：可能涉及系统代理（System Proxy）争夺、TUN 网卡接口冲突或特定端口占用。
    *   **状态**：**尚未修复**，目前无关联的 Fix PR。

#### 6. **功能请求与路线图信号**
*   **多实例/多工具兼容性**：来自 Issue #30 的信号显示，用户期望软件具备更良好的“共存模式”。未来路线图可考虑增加“端口冲突检测”或“自动释放系统代理”的功能，以减少与其他同类工具的摩擦。

#### 7. **用户反馈摘要**
*   **痛点（macOS 用户）**：v1.7.8 的 Release Note 反映了 macOS 用户普遍面临未签名应用被系统拦截的问题，虽然通过命令行可解，但对小白用户仍有门槛。
*   **痛点（多工具用户）**：部分用户有同时使用多个代理工具的习惯（如 Issue #30），目前的互斥逻辑导致体验割裂。

#### 8. **待处理积压**
*   **🔴 Issue #30 (rivonclaw和QClaw能不能同时使用)**：作为今日唯一的新增且未解决问题，建议维护者优先排查是否为系统代理设置被覆盖的问题。这是一个典型的兼容性 Bug，可能影响用户留存。

---
*以上数据基于 GitHub 公开活动生成，分析仅供参考。*

</details>