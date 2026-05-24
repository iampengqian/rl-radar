# AI CLI 工具社区动态日报 2026-05-25

> 生成时间: 2026-05-24 22:16 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 2026-05-26 AI CLI 开发工具生态横向对比与趋势分析报告

## 1. 生态全景
当前 AI CLI 工具生态正处于从“单一代码补全”向“全自动化智能体”演进的关键爆发期。各头部工具不仅比拼底层模型能力，更在终端渲染 (TUI)、上下文记忆、多智能体编排以及企业级安全合规等基础设施上展开激烈角逐。同时，随着 MCP（模型上下文协议）和 ACP（智能体通信协议）等标准的落地，CLI 正迅速从孤立的助手转变为可嵌入 CI/CD、多端协同甚至作为底层 Agent 引擎的开放式开发底座。

## 2. 各工具活跃度对比
*注：以下数据基于 2026-05-25 24小时内的社区抓取与过滤。*

| 工具名称 | 核心 Issue 动态 | 核心 PR 动态 | 版本发布情况 | 活跃度概览 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 极高 (聚焦安全、MCP回归) | 高 (以社区文档为主) | 无 | 负面反馈（如升级回归）激增，社区自救活跃 |
| **OpenAI Codex** | 高 (聚焦Windows卡顿、认证) | 极高 (官方主导TUI与新功能) | 无 | 官方研发力度大，正处于密集重构期 |
| **Gemini CLI** | 中等 (聚焦Agent死锁、内存) | 高 (底层并发与内存修复) | 无 | 处于底层核心架构（如Shell交互）的加固期 |
| **GitHub Copilot**| 中等 (聚焦UI渲染、IME兼容) | 无公开动态 | **v1.0.53, v1.0.54** | 发版节奏快，近期重点解决跨平台UI体验 |
| **Kimi Code CLI** | 偏低 (历史痛点为主) | 高 (集中完善ACP协议) | 无 | 核心贡献者驱动，发力第三方 Agent 集成 |
| **OpenCode** | 极高 (多模型兼容、非交互模式)| 高 (架构重构与容错) | 无 | 社区极度活跃，模型网关与容错机制成焦点 |
| **Pi** | 中等 (底层并发、多模型适配) | 极高 (RPC重构、Provider扩展)| 无 | 探索前沿多运行时支持，架构演进极快 |
| **Qwen Code** | 高 (Daemon模式、成本追踪) | 极高 (发版筹备、多端适配) | **v0.16.1** | 国产化替代发力，全面铺开 IM 端集成 |
| **DeepSeek TUI** | 高 (项目更名迁移、多Agent) | 高 (架构升级、跨平台兼容) | **v0.8.43** | 品牌重塑期，核心向多智能体与双模型路由演进 |

## 3. 共同关注的功能方向
综合各社区动态，以下四个方向已成为 AI CLI 工具的“军备竞赛”焦点：

1. **长上下文与内存管理**
   - **涉及工具**：Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi
   - **具体诉求**：长对话达到 Token 上限时的自动压缩已成为标配，但当前普遍存在压缩引发的数据丢失、上下文截断死锁（Codex/OpenCode）或系统级 OOM 崩溃（Qwen/Pi）。保证长时序任务的连续性是重中之重。
2. **MCP/ACP 协议与多智能体协作**
   - **涉及工具**：Claude Code, Kimi CLI, Qwen Code, DeepSeek TUI
   - **具体诉求**：从单纯的执行者向网络节点转变。Kimi 致力于通过 ACP 实现会话重放与权限控制；DeepSeek 和 Qwen 正在研发多 Agent 并行调度与冲突调和机制；Claude Code 则在努力修复 OAuth 传递失败导致的 MCP 生态隔离问题。
3. **无头模式与 CI/CD 自动化集成**
   - **涉及工具**：OpenAI Codex, Gemini CLI, OpenCode, Qwen Code
   - **具体诉求**：支持 `cli run` 的非交互式 JSON 流输出，解决流式事件提前中断、并发死锁等问题，以便将 AI CLI 无缝接入企业的 CI/CD 自动化流水线。
4. **精细化成本管控与可观测性**
   - **涉及工具**：Claude Code, Qwen Code, DeepSeek TUI, OpenCode
   - **具体诉求**：面对单日千万级 Token 的消耗，开发者对跨会话的 Token 统计面板、实时余额显示、甚至高低配模型的双模路由（DeepSeek 的 Pro+Flash 提案）需求激增。

## 4. 差异化定位分析

- **Claude Code & OpenAI Codex**：**“重型平台化”的领跑者**。背靠顶级基座模型，不仅做 CLI，更在打通 Desktop、Mobile 与 Remote Control。目前承担着定义多端协同标准的角色，但也因自动更新的不稳定性饱受企业级开发者的诟病。
- **GitHub Copilot CLI**：**“开箱即用与生态融合”的连接器**。高度聚焦终端 TUI 交互细节（如 ANSI 渲染、IME 支持），其核心优势在于与 GitHub 代码库和 Actions 工作流的无缝深度绑定。
- **Kimi CLI, Qwen Code & DeepSeek TUI**：**“本土化与业务穿透”的实干家**。除了跟进国际前沿的 MCP/ACP 协议，它们更加侧重国内本土化生态的接入（如飞书、微信机器人通道）以及龙芯/统信等国产化硬件的兼容适配。
- **Gemini CLI & Pi & OpenCode**：**“极客底座与开放路由”的挑战者**。以开源社区驱动为主，将精力集中在 Shell 底层防挂死（PTY泄漏）、多运行时兼容以及对企业级/开源模型的无缝路由支持上。它们往往是高级架构师用作二次开发底座的首选。

## 5. 社区热度与成熟度

- **热度最高（双高：活跃度+痛点反馈）**：**Claude Code** 和 **OpenAI Codex**。由于受众极广，其 Issue 区成为了系统稳定性回归（如 Copilot 模式失效、Windows 端卡死）的重灾区，但也证明了其在核心开发流程中的不可替代性。
- **快速迭代与架构演进期**：**Qwen Code** 和 **DeepSeek TUI**。Qwen 正全力冲刺 v0.16 的生产就绪，而 DeepSeek 刚刚完成 CodeWhale 的品牌重塑，底层多智能体架构正在激进重构中，属于高风险高回报的狂飙期。
- **底层硬核加固期**：**Gemini CLI** 和 **Pi**。社区的贡献大多集中在并发控制、背压、内存泄漏、文件锁等 CS 基础领域，说明项目正在经历从“能用”到“企业级高可用”的痛苦蜕变。

## 6. 值得关注的趋势信号

1. **信号一：工具“静默作恶”引发信任危机，隔离性成刚需**
   - *行业启示*：CLI 工具私自覆盖换行符（Kimi）、截断 bash_history（Copilot）、甚至静默删除会话记录（Claude）引发了开发者的强烈反弹。未来的 AI 工具必须遵循“无痕与最小干预”原则，采用 AST 感知（Gemini提案）或沙箱机制，避免对用户环境造成不可逆破坏。
2. **信号二：智能体路由向“高低搭配”演进以控制成本**
   - *行业启示*：开发者对动辄千万 Token 的消耗倍感焦虑。DeepSeek 社区提出的“Pro 思考 + Flash 执行”双模路由，以及 OpenCode 暴露 LLM 响应头用于计费追踪的 PR，预示着“精细化算力调度”将成为下一代 AI CLI 的核心卖点。
3. **信号三：AI CLI 正在加速“后台化”和“IM 原生化”**
   - *行业启示*：前端 TUI 只是冰山一角。通过 Daemon 模式（Qwen）和标准 ACP 协议，AI 能力正在被直接注入到飞书、微信（Qwen）以及各类 CI/CD 流水线中。对于开发团队而言，选择具备良好无头模式和 Provider 路由能力的 CLI，将极大提升未来 RAG 和自动化测试链路的集成效率。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区生态热点分析报告
> 数据源：github.com/anthropics/skills | 数据截止：2026-05-25

## 一、热门 Skills 排行（Top 7 PRs）

综合 PR 的技术深度、生态价值及衍生 Issue 讨论热度，当前最受社区关注的 Skills 动态如下：

1. **[document-typography] 排版质量控制** | `状态: OPEN`
   - **功能**：解决 AI 生成文档中的常见排版问题（孤字换行、段尾寡妇、编号错位）。
   - **热度分析**：切中 AI 生成内容的普遍痛点，属于提升基础输出质量的底层优化，对文档类 Skills 影响深远。
   - 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

2. **[ODT] OpenDocument 格式支持** | `状态: OPEN`
   - **功能**：支持 `.odt` / `.ods` 等 ODF 开源标准文档的创建、模板填充与 HTML 转换。
   - **热度分析**：补齐了 Claude 在开源办公生态（LibreOffice/ISO 标准）的短板，是企业级用户的高频需求。
   - 🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

3. **[meta-skills] 技能质量与安全分析器** | `状态: OPEN`
   - **功能**：引入 `skill-quality-analyzer` 和 `skill-security-analyzer`，用于对 Skills 进行结构、文档、安全等5个维度的评估。
   - **热度分析**：属于**“造轮子的轮子”**（Meta-skill），随着 Skills 爆发式增长，质量把控和安全审计成为刚需。
   - 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

4. **[DOCX] 追踪修订 ID 冲突修复** | `状态: OPEN`
   - **功能**：修复在含书签的 DOCX 中添加追踪修订时，因 `w:id` 硬编码导致的文档损坏问题。
   - **热度分析**：精准修复了 OOXML 底层标准冲突，展现了社区对文档处理细节的深度挖掘。
   - 🔗 [PR #541](https://github.com/anthropics/skills/pull/541)

5. **[AURELION] 认知与记忆框架套件** | `状态: OPEN`
   - **功能**：提供结构化思维模板（Kernel）、顾问、代理和记忆系统的4件套框架。
   - **热度分析**：代表了 Skills 进化的前沿方向——从“单次任务执行”走向“持久化上下文的认知框架”。
   - 🔗 [PR #444](https://github.com/anthropics/skills/pull/444)

6. **[skill-creator] Windows 子进程兼容性修复** | `状态: OPEN`
   - **功能**：修复评估脚本 `run_eval.py` 及主循环在 Windows 环境下的崩溃、Pipe 读取及编码错误。
   - **热度分析**：跨越了3个独立 PR（#1099, #1050 及关联 Issue #556），是社区呼声最高的跨平台兼容性修复。
   - 🔗 [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050)

7. **[ServiceNow] 企业级平台全能助手** | `状态: OPEN`
   - **功能**：覆盖 ITSM, ITOM, SecOps, CSDM 等 ServiceNow 全栈开发场景。
   - **热度分析**：SAP (#181)、ServiceNow、n8n (#190) 等 Enterprise 平台 Skills 集中出现，标志着社区正在推动 Claude 深入 B 端业务流。
   - 🔗 [PR #568](https://github.com/anthropics/skills/pull/568)

---

## 二、社区需求趋势（基于 Issues 提炼）

从高赞和高评论 Issues 中，可以清晰看到以下四大核心需求方向：

- **🏢 企业级协作与分发机制（最迫切）**
  社区强烈要求支持**组织内 Skills 共享**，当前需手动下载 `.skill` 文件通过 Slack 传播，极大阻碍了团队规模化采用。
  *🔗 [Issue #228](https://github.com/anthropics/skills/issues/228) (👍7 | 💬13)*

- **🛡️ 安全边界与信任机制（最关键）**
  第三方 Skills 冒用 `anthropic/` 命名空间，可能导致用户误授权。亟需建立数字签名、命名空间隔离等权限信任链。
  *🔗 [Issue #492](https://github.com/anthropics/skills/issues/492) (💬6)*

- **🔌 MCP 协议与数据传输优化（最前沿）**
  社区呼吁将 Skills 转化为标准 MCP (Model Context Protocol) 接口对外暴露，同时解决数据库等 MCP 返回海量数据时的**上下文窗口拥堵**问题。
  *🔗 [Issue #16](https://github.com/anthropics/skills/issues/16) | [Issue #1102](https://github.com/anthropics/skills/issues/1102)*

- **⚙️ 基础设施与开发者体验（最高频）**
  包括 `run_eval.py` 0% 触发率的 Bug (#556)、官方插件重复加载导致上下文浪费 (#189)，以及对底层 Bedrock 等云原生部署平台的支持 (#29)。

---

## 三、高潜力待合并 Skills（预期近期落地）

以下 PR 具有极高的实用价值、精准的 Bug 修复范围，且处于活跃更新状态，极有可能在近期被官方合并：

1. **[YAML 解析校验] 防止特殊字符导致的静默失败** (Lubrsy706)
   - 修复未加引号的 `description` 中包含 `:` 导致的 YAML 截断，属于提升全局稳定性的提权修复。
   - 🔗 [PR #539](https://github.com/anthropics/skills/pull/539)

2. **[Windows 平台兼容性修复]** (joshuawowk / gstreet-ops)
   - 直击 Windows 用户的硬性阻断问题（进程调用、Pipe 截断），属于“一针见血”的底层修复。
   - 🔗 [PR #1050](https://github.com/anthropics/skills/pull/1050)

3. **[测试模式大全] testing-patterns** (4444J99)
   - 提供覆盖 AAA 模式、React Testing Library 的全栈测试最佳实践，直接补充了官方目前缺失的测试领域 Skill。
   - 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

---

## 四、Skills 生态洞察（一句话总结）

> **当前 Skills 生态正经历从“单点功能实现”向“企业级工程化平台”的跨越拐点——社区最集中的诉求是建立安全可信的协作机制与标准化的跨平台底座。**

---

# 📰 Claude Code 社区动态日报 (2026-05-25)

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

## 1. 今日速览

过去 24 小时内，Claude Code 社区呈现高活跃度。虽然没有新的官方版本发布，但安全领域出现重大警报：有开发者发现 v2.1.150 版本中新增的 `tengu_heron_brook` 服务端特性标志可能导致系统提示词注入漏洞，引发社区高度关注。此外，5月23日自动更新后的 macOS 版本被爆出 Cowork 模式下 MCP 工具全面失效的严重回归问题，目前官方尚未回应。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

---

## 3. 社区热点 Issues (Top 10)

以下为本日最值得关注的 10 个 Issue，按重要程度排序：

**🚨 1. v2.1.150 疑似存在服务端系统提示注入漏洞**
- **Issue**: [#62061](https://github.com/anthropics/claude-code/issues/62061) | 👍 36 | 状态: CLOSED (duplicate)
- **重要性**: 安全性极高。开发者发现新版通过 `tengu_heron_brook` feature flag 引入了可能被用于系统提示词注入的机制。已被标记为重复 Issue，说明官方可能已在内测或内部跟进。
- **社区反应**: 引发热议，短时间内获得 36 个赞。

**🚨 2. macOS Cowork 模式 MCP 工具全面失效 (严重回归)**
- **Issue**: [#62072](https://github.com/anthropics/claude-code/issues/62072) | 状态: OPEN
- **重要性**: 5月23日自动更新至 1.8555.2 后，macOS 上的 Cowork 会话完全无法加载任何 MCP 工具（影响 `.mcpb`、SDK bridge、自定义连接器等所有路径），原因是 spawn pipeline 丢失了 `--mcp-config` 参数。

**⚠️ 3. 多账户管理与快速切换功能需求**
- **Issue**: [#18435](https://github.com/anthropics/claude-code/issues/18435) | 👍 529 | 评论 101
- **重要性**: 社区呼声最高的功能请求。希望在 Claude Desktop 中支持多账户管理和配置文件切换。
- **社区反应**: 获得了 529 个赞和 101 条评论，长期霸榜热门 Issue。

**⚠️ 4. 复合 Bash 命令权限解析缺陷**
- **Issue**: [#16561](https://github.com/anthropics/claude-code/issues/16561) | 👍 154 | 评论 39
- **重要性**: 影响自动化工作流。当 Bash 命令包含 `&&`, `|`, `;` 等操作符时，权限匹配器将整个字符串作为单一单元评估，导致已授权的组件仍需重复审批。

**🐛 5. 图像处理 API 报错导致 Token 大量浪费**
- **Issue**: [#60334](https://github.com/anthropics/claude-code/issues/60334) | 👍 11 | 评论 17
- **重要性**: 用户在没有发送图片的情况下频繁遇到图像处理 API 错误，该 Bug 在 5 小时窗口内烧掉了用户约 70% 的额度，严重损害使用体验。

**🔒 6. 合法内核安全研究被误判为违反使用政策**
- **Issue**: [#62071](https://github.com/anthropics/claude-code/issues/62071) | 状态: OPEN
- **重要性**: Linux 内核工程师在进行防御性安全研究（内核网络子系统模糊测试）时被错误拦截。误报率过高且“卡死”在 blocked 状态，影响专业开发者的正常工作。

**💸 7. Max 订阅计划升级（5x → 20x）持续报错**
- **Issue**: [#55266](https://github.com/anthropics/claude-code/issues/55266) | 状态: CLOSED (duplicate)
- **重要性**: 计费系统顽疾。大量用户在尝试升级 Max 计划时遇到 "Unable to update subscription" 错误，该问题模式已出现多次（关联 #10832 等），仍未彻底解决。

**🔌 8. claude.ai MCP 连接器 OAuth Token 从未发送 (CRITICAL)**
- **Issue**: [#46140](https://github.com/anthropics/claude-code/issues/46140) | 👍 5 | 评论 16
- **重要性**: OAuth 2.1 + PKCE 流程虽然成功完成，但后续的 MCP 请求从未携带 Bearer Token，导致整个认证流程形同虚设，严重阻碍第三方 MCP 集成。

**💾 9. 会话记录静默删除（数据丢失）**
- **Issue**: [#41458](https://github.com/anthropics/claude-code/issues/41458) & [#59248](https://github.com/anthropics/claude-code/issues/59248)
- **重要性**: 即使配置了 `cleanupPeriodDays: 99999`，旧会话记录仍被静默删除，且无任何警告或恢复机制，对依赖历史记录的开发者造成严重数据损失。

**📊 10. OTel 遥测数据异常：`query_source` 属性丢失与指标碰撞**
- **Issue**: [#59942](https://github.com/anthropics/claude-code/issues/59942) & [#56317](https://github.com/anthropics/claude-code/issues/56317)
- **重要性**: 影响企业级监控。自 5 月 13 日起 `query_source` 属性莫名消失；同时多进程并行共享同一 `session_id` 时，成本计数器发生冲突，导致监控数据通胀 100 倍以上。

---

## 4. 重要 PR 进展 (Top 10)

本日社区贡献的 Pull Request 主要集中在**文档改进**和**工作流修复**上：

**1. CLI-Desktop 会话同步提案**
- **PR**: [#61969](https://github.com/anthropics/claude-code/pull/61969)
- **内容**: 提议将 Claude Code CLI 的会话历史与 Claude Desktop 应用同步，允许用户在任一界面中浏览和回顾会话。

**2. 修复 @claude 触发器的误报匹配**
- **PR**: [#62023](https://github.com/anthropics/claude-code/pull/62023)
- **内容**: 修复 GitHub Actions 工作流中的边界问题。原 `contains(..., '@claude')` 会误匹配 `@claude-plugins-official` 等字符串，现改为词边界匹配。

**3. 修复 ralph-wiggum 插件状态文件路径**
- **PR**: [#61956](https://github.com/anthropics/claude-code/pull/61956)
- **内容**: 修正了 `help.md` 中的文件路径错误，从 `.claude/.ralph-loop.local.md` 改为 `.claude/ralph-loop.local.md`。

**4. 文档: AskUserQuestion 回退检查点缺失的故障排除**
- **PR**: [#61968](https://github.com/anthropics/claude-code/pull/61968)
- **内容**: 记录了 AskUserQuestion 答案不创建回退检查点的根本原因及 workaround。

**5. 文档: tmux 未授权幽灵消息故障排除**
- **PR**: [#61966](https://github.com/anthropics/claude-code/pull/61966)
- **内容**: 解释了 tmux 会话中控制序列被误解为按键导致幽灵消息的问题。

**6. 文档: SSH 远程会话因插件包损坏而失败**
- **PR**: [#61964](https://github.com/anthropics/claude-code/pull/61964)
- **内容**: 记录了本地插件/技能存档损坏导致 SSH 远程会话失败的排查步骤。

**7. 文档: 更新后模型标识符无效的故障排除**
- **PR**: [#61708](https://github.com/anthropics/claude-code/pull/61708)
- **内容**: 记录了 `AWS_REGION` + `CLAUDE_CODE_USE_BEDROCK` 环境变量导致 Bedrock 区域解析与 API 认证模型 ID 前缀不匹配的问题。

**8. 文档: 后台任务静默重复启动的解决方案**
- **PR**: [#61697](https://github.com/anthropics/claude-code/pull/61697)
- **内容**: 记录了 context compaction 剥离任务元数据后，调度器误重启后台任务的 bug，并提出了三层修复方案。

**9. 文档: system-reminder 泄漏至 WebFetch 结果**
- **PR**: [#61696](https://github.com/anthropics/claude-code/pull/61696)
- **内容**: 记录了 v2.1.150 中 `system-reminder` 块泄漏到 WebFetch 工具结果中的回归问题及降级方案。

**10. 文档: 统计缓存冻结及版本升级后的假用量限制**
- **PR**: [#61702](https://github.com/anthropics/claude-code/pull/61702) & [#61706](https://github.com/anthropics/claude-code/pull/61706)
- **内容**: 分别解决了 `stats-cache.json` 停滞不更新，以及长 Sonnet 会话后上下文溢出导致的虚假用量限制错误问题。

---

## 5. 功能需求趋势

从近期 Issue 和 PR 中，可以提炼出以下社区最关注的功能演进方向：

- **🔐 权限与安全**: 社区强烈呼吁更细粒度的权限解析（如 Bash 复合命令拆分评估）、以及更透明的服务端行为（feature flag 披露）。同时，AUP（可接受使用政策）分类器误报问题亟需优化。
- **🤝 MCP 生态集成**: OAuth Token 传递失败、`notifications/tools/list_changed` 被忽略等问题表明，MCP 连接器的健壮性仍是核心短板。
- **📊 成本与用量可观测性**: 多个 Issue 涉及 OTel 指标缺失、并行进程计数冲突、Max 计划限流信息不透明等，表明企业用户对精细化成本监控需求迫切。
- **☁️ 多端/跨平台同步**: CLI 与 Desktop 数据互通、移动端（iOS/Android）功能平权、Remote Control 稳定性等，是高频呼声。
- **💾 数据留存与安全**: 会话记录静默清理问题多次出现，社区需要明确的留存策略和恢复机制。

---

## 6. 开发者关注点与痛点总结

1. **稳定性回归频发**: v2.1.150 及 5 月 23 日自动更新后，集中出现了 MCP 工具失效、system-reminder 泄漏、TUI 滚动回归等多个严重问题，开发者对自动更新的信任度正在下降。
2. **数据丢失风险**: 会话记录被静默删除（即使配置了超长保留期）是开发者最不能接受的痛点之一，直接影响工作连续性。
3. **计费与额度系统缺乏透明度**: 从 Max 升级失败、图像处理 Bug 挥霍额度，到 Sonnet 隐藏限流，开发者普遍感到对用量缺乏掌控力。
4. **安全合规误伤**: 从事安全研究、内核开发的专业用户频繁遭遇 AUP 误报，且一旦触发往往陷入“永久封禁状态”，缺乏有效的申诉通道。
5. **社区文档贡献活跃但官方响应滞后**: 社区成员 `giruuuuj` 等大量提交 Troubleshooting 文档 PR，填补了官方文档空白，但部分关键 Issue（如 OAuth Token 不发送）长期未获官方实质性回应。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-25)

## 1. 今日速览

过去 24 小时内，OpenAI Codex 社区活跃度较高，但**无新的官方正式版本发布**。社区讨论的焦点依然集中在 **Windows 平台的稳定性（频繁卡顿/冻结）**、**长会话与上下文压缩（Context Compaction）机制的缺陷**，以及最近更新的 **TUI 终端渲染问题**。此外，官方开发团队今日提交了多个重要 PR，重点优化了 TUI 界面的交互体验、会话诊断能力，并引入了全新的“Review Story（审查故事）”功能以帮助开发者更好地阅读代码变更。

---

## 3. 社区热点 Issues

以下筛选了 10 个最具代表性、关注度最高或影响较广的 Issues：

1. **[bug, auth] 手机号验证导致无法登录 (#20161)**
   - **链接**: [Issue #20161](https://github.com/openai/codex/issues/20161)
   - **概要**: 在不同设备使用 SSO 登录时被强制要求绑定手机号，导致账户无法正常使用。
   - **关注度**: 👍 102 | 评论 155
   - **重要性**: 影响账户核心登录流程，社区反馈极其强烈，是近期热度最高的认证阻断类问题。
2. **[bug, app, remote] “Remote Control” 授权失败 (#22696)**
   - **链接**: [Issue #22696](https://github.com/openai/codex/issues/22696)
   - **概要**: macOS 升级到最新版后，无法完成移动端与桌面端的远程控制配对授权。
   - **关注度**: 👍 46 | 评论 32
   - **重要性**: 移动端协同开发是 Codex 桌面应用的核心卖点，此阻断性 Bug 严重影响多端用户体验。
3. **[bug, windows-os] Windows 11 桌面应用频繁冻结/卡顿 (#20214)**
   - **链接**: [Issue #20214](https://github.com/openai/codex/issues/20214)
   - **概要**: 即使在系统资源充足的 Windows 11 Pro 上，Codex 桌面端依然会频繁出现无响应和卡死现象。
   - **关注度**: 👍 15 | 评论 13
   - **重要性**: Windows 平台性能顽疾，严重影响日常开发效率，目前仍处于 Open 状态。
4. **[bug, app, session] 桌面端隐式丢弃历史对话记录 (#21128)**
   - **链接**: [Issue #21128](https://github.com/openai/codex/issues/21128)
   - **概要**: 桌面应用仅保留全局最近 50 条对话，导致较早的项目对话记录从 UI 中“神秘消失”。
   - **关注度**: 👍 15 | 评论 11
   - **重要性**: 破坏了 Codex 作为长期“项目记忆库”的可靠性，对大型项目管理极不友好。
5. **[enhancement, app] 允许自定义配置 Git Worktrees 位置 (#10599)**
   - **链接**: [Issue #10599](https://github.com/openai/codex/issues/10599)
   - **概要**: 呼吁允许开发者在设置中自定义 Codex 创建 Git Worktree 的目录路径。
   - **关注度**: 👍 49 | 评论 10
   - **重要性**: 社区呼声极高的高票 Enhancement，直接影响多分支并行开发者的工作流组织。
6. **[bug, app-server] 长对话输出导致内存溢出至 ~27GB 触发 SIGKILL (#24048)**
   - **链接**: [Issue #24048](https://github.com/openai/codex/issues/24048)
   - **概要**: 在处理大量工具调用或日志输出时，Codex 后台服务内存暴涨，最终被系统强杀。
   - **关注度**: 👍 0 | 评论 4
   - **重要性**: 典型的底层内存泄漏问题，会导致长时间自动化任务的意外中断。
7. **[bug, TUI, regression] 0.131+ 版本在 Windows Terminal 渲染乱码 (#23740)**
   - **链接**: [Issue #23740](https://github.com/openai/codex/issues/23740)
   - **概要**: 升级 CLI 到 0.131/0.132 后，Windows 终端出现未解析的原始 ANSI 控制序列字符。
   - **关注度**: 👍 5 | 评论 6
   - **重要性**: 严重影响 Windows CLI 用户的视觉体验和可用性，回退至 0.130 可解决。
8. **[bug, CLI, regression] 恢复长对话时触发 `context_length_exceeded` (#24002)**
   - **链接**: [Issue #24002](https://github.com/openai/codex/issues/24002)
   - **概要**: 0.132.0+ 引入的回归 Bug，导致长对话恢复时的上下文压缩失败。
   - **关注度**: 👍 0 | 评论 4
   - **重要性**: 长上下文恢复是复杂任务的核心场景，该回归导致高级用户被迫降级 CLI。
9. **[bug, TUI, skills] 技能菜单充斥大量无关/未配置插件 (#24145)**
   - **链接**: [Issue #24145](https://github.com/openai/codex/issues/24145)
   - **概要**: `$` 技能菜单中被错误注入了大量开发者从未见过的无关插件应用。
   - **关注度**: 👍 2 | 评论 4
   - **重要性**: 揭示了后台 Skills/Plugins 同步逻辑可能存在过滤缺失，干扰开发者效率。
10. **[bug, auth, CLI] Refresh Token 复用导致认证失效 (#24365)**
    - **链接**: [Issue #24365](https://github.com/openai/codex/issues/24365)
    - **概要**: CLI 用户频繁遭遇 Refresh Token 已被使用的错误，导致强制登出。
    - **关注度**: 👍 0 | 评论 3
    - **重要性**: 核心鉴权层的问题，会导致多设备或多终端并发使用时频繁掉线。

---

## 4. 重要 PR 进展

今日官方提交了大量代码，主要集中在 TUI 体验优化、上下文诊断及新功能 API 构建：

1. **[feat(tui): add transcript search] - PR #23539**
   - **链接**: [PR #23539](https://github.com/openai/codex/pull/23539)
   - **概要**: 引入了 TUI 历史记录搜索功能。在长会话中，用户现在可以通过 `Ctrl+S` 等快捷键进行文本搜索，大幅优化导航效率。
2. **[feat(review-story): add interactive story cockpit] - PR #24358**
   - **链接**: [PR #24358](https://github.com/openai/codex/pull/24358)
   - **概要**: 新增 `/story` 入口，提供一个基于 TUI 的交互式面板，用于以“故事流”的方式逐章节审查大型代码变更。
3. **[feat(review-story): generate stories progressively] - PR #24353**
   - **链接**: [PR #24353](https://github.com/openai/codex/pull/24353)
   - **概要**: 将 Review Story 的生成逻辑改为渐进式。用户可以立刻查看代码变更大纲（Outline），而详细的模型生成解释将在后台流式计算。
4. **[feat(review-story): add reusable review story api] - PR #24350**
   - **链接**: [PR #24350](https://github.com/openai/codex/pull/24350)
   - **概要**: 为上述的 Story 功能提供底层 API 支持，将扁平的 diff 转换为带有稳定锚点的结构化叙述逻辑，便于其他客户端调用。
5. **[reject empty base64 image inputs] - PR #24376**
   - **链接**: [PR #24376](https://github.com/openai/codex/pull/24376)
   - **概要**: 修复了向 Responses API 发送空 base64 图片导致 400 错误的问题，现在会将其转换为文本提示，提高了多模态交互的鲁棒性。
6. **[codex] add compaction metadata to turn headers - PR #24368**
   - **链接**: [PR #24368](https://github.com/openai/codex/pull/24368)
   - **概要**: 针对 Context Compaction（上下文压缩）机制，在请求头中增加了元数据标识（如 `window_id` 等），为监控和调试长对话压缩失败提供了数据支撑。
7. **[Add doctor thread inventory audit] - PR #24305**
   - **链接**: [PR #24305](https://github.com/openai/codex/pull/24305)
   - **概要**: 增强了 `codex doctor` 诊断命令。现在能够直接展示 SQLite 状态数据库与磁盘 JSONL 会话文件不一致的情况，帮助排查“会话丢失”问题。
8. **[fix(tui): avoid modifyOtherKeys for unknown tmux formats] - PR #24371**
   - **链接**: [PR #24371](https://github.com/openai/codex/pull/24371)
   - **概要**: 修复了在 iTerm2 + tmux 环境下，由于错误启用 `modifyOtherKeys` 模式导致快捷键（如 Ctrl+C）失效的问题。
9. **[codex, codex-automation] Nudge users toward auto-compaction - PR #24356**
   - **链接**: [PR #24356](https://github.com/openai/codex/pull/24356)
   - **概要**: 改进产品策略：在用户手动执行压缩操作时，系统会温和提示其开启“自动压缩”，引导用户更好地利用自动化特性。
10. **[Allow promptless exec resume for active goals] - PR #24321**
    - **链接**: [PR #24321](https://github.com/openai/codex/pull/24321)
    - **概要**: 优化了无头模式下的恢复机制。当存在处于活跃状态的 Goal 时，`codex exec resume` 不再强制要求输入假指令（如 "continue"），直接接管继续执行。

---

## 5. 功能需求趋势

结合近期 Issues 走向，社区功能关注点呈现以下趋势：

- **跨端协同与稳定性**: 开发者对移动端配对控制需求强烈，但由于频繁断连、权限丢失和授权失败，目前体验仍不成熟。
- **大型项目上下文与记忆管理**: 超出限制前主动预警、历史对话永久保留、更精准的上下文压缩是目前大型工程化接入的核心诉求。
- **终端渲染兼容性修复**: 随着终端功能增强（如搜索、插件），Windows ANSI 渲染、tmux/iTerm2 兼容性等基础体验的维护压力持续上升。
- **无障碍自动化与无头模式**: CI/CD 集成、跳过信任验证的无缝静默运行、指定 Worktree 路径等针对重度开发者的自动化定制需求明显增多。

---

## 6. 开发者关注点（痛点总结）

从本日的数据中，可以明显提炼出当前开发者使用 OpenAI Codex 的三大痛点：

1. **Windows 平台体验堪忧**：桌面端常驻内存飙升、UI 冻结无响应、终端 ANSI 转义序列乱码等底层问题频发，Windows 用户的基础开发体验受到严重挑战。
2. **认证与会话管理脆弱**：包括 SSO 手机号强绑、Token 刷新竞争、以及历史会话静默丢弃等问题频出，导致开发者对工具在商业关键项目中的**数据可靠性与持久性**产生信任危机。
3. **上下文压缩机制暗病多**：无论是桌面端还是 CLI，长对话场景下的 Compaction 偶发性失效、回归 Bug 频现，使得深度代码重构等重度依赖长记忆的任务容易面临前功尽弃的风险。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时内，Gemini CLI 无新版本发布，但社区提交了大量高质量的缺陷报告与修复 PR。当前开发重心高度聚焦于 **Agent 的稳定性**（包括子代理挂起、Token 泄漏、并发写入冲突）以及 **底层 Shell 交互的重构**（PTY 内存泄漏、非交互环境兼容性）。从 PR 动向来看，项目正处于对核心架构进行深度加固的阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性和关注度的 Issues，主要涉及 Agent 执行逻辑、内存系统及安全控制：

1. **Generalist agent 无限挂起** (👍 8) [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
   - **重要性**：P1 级严重 Bug。当 CLI 调用 Generalist agent 时会无限期卡死，极大地影响了基础任务（如创建文件夹）的执行体验。
   - **社区反应**：用户反馈需强制指令模型禁用子代理才能缓解，引发大量共鸣。
2. **子代理达到最大轮次后错误上报“成功”** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
   - **重要性**：掩盖了任务中断的真相。`codebase_investigator` 触及执行上限时仍返回 `status: "success"`，导致主代理基于错误状态继续执行。
3. **Shell 命令执行完毕后卡在 "Waiting input"** (👍 3) [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
   - **重要性**：UI 层与底层 Shell 执行状态脱节，导致极简命令也无法正常退出，严重阻塞工作流。
4. **CLI 工具数量超过 128 时触发 400 错误** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
   - **重要性**：暴露了 Agent 在复杂 MCP 环境下的工具路由缺陷，模型未能有效限制上下文窗口内的工具数量。
5. **Auto Memory 日志记录与隐私风险** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
   - **重要性**：安全层面改进。当前 Auto Memory 在提取摘要时将敏感信息加载到上下文中，缺乏确定性的脱敏和过度日志记录问题亟待解决。
6. **Auto Memory 无效补丁的静默跳过问题** [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)
   - **重要性**：内存管理系统的健壮性缺陷。格式错误或目标路径越界的 patch 被系统悄悄丢弃，阻碍了系统的自我纠错。
7. **AST 感知文件读取的影响评估** (👍 1) [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
   - **重要性**：架构级优化探索。探讨通过 AST（抽象语法树）实现精准的代码读取和映射，有望大幅降低 Token 消耗和误判。
8. **模型频繁在随机位置创建临时脚本** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
   - **重要性**：开发者高频痛点。Agent 在执行 Shell 时倾向于生成零散的 edit 脚本，导致项目目录污染严重，清理成本高。
9. **Shell 执行服务在非交互环境下的挂起与崩溃** [#27419](https://github.com/google-gemini/gemini-cli/issues/27419)
   - **重要性**：影响自动化 CI/CD 流水线。当禁用交互式 Shell 或处理非 UTF-8 数据时，系统面临缓冲区溢出和死锁风险。
10. **Agent 未能充分利用自定义 Skills 和 Sub-agents** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **重要性**：能力激活不足。即使配置了高度相关的 Skills，模型仍倾向于使用默认能力而非委派给定制代理。

## 4. 重要 PR 进展
近期 PR 主要围绕系统底层的稳定性修复和并发处理展开：

1. **修复 PTY 内存泄漏** [#27154](https://github.com/google-gemini/gemini-cli/pull/27154)
   - 修复了 `ShellExecutionService` 中活动 PTY 未被垃圾回收导致内存和文件描述符泄漏的严重问题。
2. **确保非交互环境的高保真稳定性** [#27418](https://github.com/google-gemini/gemini-cli/pull/27418)
   - 针对 Issue #27419，强制禁用交互式 Shell，并修复了非 UTF-8 字节在序列化层导致的转换崩溃。
3. **修复并发文件编辑引发的数据覆盖** [#27153](https://github.com/google-gemini/gemini-cli/pull/27153)
   - 引入文件级锁机制，解决 `EditTool` 和 `WriteFileTool` 在高并发编辑同一文件时产生的竞态条件。
4. **修复路由分类器导致的历史截断错误** [#27389](https://github.com/google-gemini/gemini-cli/pull/27389)
   - 修复了因历史记录修剪逻辑导致的 `400 Bad Request` 错误，确保 Function Calling 的上下文连续性。
5. **阻止模型读取二进制文件时的捏造** [#27412](https://github.com/google-gemini/gemini-cli/pull/27412)
   - 优化 `read_file` 处理 PDF 等二进制文件时的提示词逻辑，防止模型凭空捏造不存在的“分析内容”。
6. **修复状态快照的指数级 Token 泄漏** [#26758](https://github.com/google-gemini/gemini-cli/pull/26758)
   - 修复了上下文图在加载快照时未能过滤已摘要节点，导致 Token 消耗呈指数级膨胀的恶性 Bug。
7. **修复 `--skip-trust` 参数失效问题** [#27137](https://github.com/google-gemini/gemini-cli/pull/27137)
   - 修复了该参数无法加载工作区配置的缺陷，恢复了信任机制下的正常配置加载能力。
8. **增加紧急中止机制** [#27415](https://github.com/google-gemini/gemini-cli/pull/27415)
   - 专门针对触屏设备（如 Android Termux），优化了事件竞态条件，新增紧急中止功能以防 Agent 失控。
9. **剥离模型思维输出中的 CJK 字符** [#27349](https://github.com/google-gemini/gemini-cli/pull/27349)
   - 修复了英文环境下模型在思维链中混合输出中/日/韩字符导致的解析异常问题。
10. **为 ACP 添加 /compress 命令** [#27151](https://github.com/google-gemini/gemini-cli/pull/27151)
    - 允许长对话在触及上下文窗口限制前主动压缩历史记录，目前该功能已从 TUI 扩展至 ACP。

## 5. 功能需求趋势
通过分析近期 Issue，社区对 Gemini CLI 的演进方向表现出以下三大趋势：
- **智能体行为可控性增强**：用户强烈要求对 Agent 的破坏性操作（如 `git reset --force`、随意创建 tmp 文件）进行限制与引导（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）。
- **更深层的代码结构理解（AST 集成）**：社区和团队都在推动 CLI 从单纯的“文本处理”向“语法树感知”转变，以期在代码映射和搜索上实现质的飞跃（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)）。
- **后台化与执行控制**：希望在 Agent 探索、构建等阻塞任务时，能够将其推至后台运行（`Ctrl+B`），并改善子代理委派过程中的实时观测能力（[#22741](https://github.com/google-gemini/gemini-cli/issues/22741), [#22571](https://github.com/google-gemini/gemini-cli/issues/22571)）。

## 6. 开发者关注点与痛点总结
- **执行死锁与挂起现象严重**：无论是 Generalist Agent 还是 Shell 的 IO 处理，在异步交互中极易陷入无响应状态，消耗开发者大量时间排查。
- **Auto Memory 系统脆弱**：自动内存系统在提取和保存记忆时存在重试死循环和静默失败，难以沉淀有效上下文。
- **跨平台/多环境兼容性不足**：Wayland 环境下的浏览器代理崩溃、Windows/Git Bash 的 Shell 兼容性问题以及触屏设备的操作盲区，成为外网开发者的主要阻碍。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# 📰 GitHub Copilot CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时，GitHub Copilot CLI 迎来了密集的版本迭代，连续发布了 `v1.0.53` 和 `v1.0.54` 更新，重点修复了多行提示渲染、Autopilot 模式权限异常以及 Bash 环境下的进程挂起等核心体验问题。社区方面，终端 UI 渲染（如新引入的滚动条导致的文本错位）和特定系统环境下的输入法/剪贴板兼容性成为了开发者反馈的焦点。

## 2. 版本发布
过去 24 小时内发布了多个版本，重点更新如下：

*   **v1.0.54** (2026-05-24): 常规缺陷修复与稳定性改进。
*   **v1.0.53** (2026-05-24): 包含多项核心体验更新：
    *   **UI 修复**：多行提示现已完全显示，不再出现内容裁剪或选择偏移。
    *   **配置隔离**：`/skills` 选择器现在能正确遵循 `--config-dir` 参数来保存偏好设置。
    *   **Shell 兼容性**：修复了当环境中设置了 `PS0` 或 `PROMPT_COMMAND` 时，Bash shell 会话不再挂起的问题。
*   **v1.0.52** (2026-05-23): 
    *   **性能与交互**：非交互式子命令（如 `plugin list`, `mcp list`）不再占用标准输入。
    *   **UI 改进**：主对话视图新增支持鼠标拖动的垂直滚动条。
    *   **权限修复**：切换到 Autopilot 模式时，不再意外触发针对工具、路径或 URL 访问的权限提示。

## 3. 社区热点 Issues (Top 10)

1.  **[中文输入法兼容性] #3502 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3502](https://github.com/copilot-cli Issue #3502)
    *   **摘要**: macOS 上的中文注音输入法（IME）预编辑文本错误地累积在终端右下角，而不是跟随输入光标。
    *   **关注原因**: 严重影响了中文母语开发者的基础输入体验，目前获得 **16 个 👍**，是当日最受关注的痛点。
2.  **[滚动条导致文本错位] #3501 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3501](https://github.com/copilot-cli Issue #3501)
    *   **摘要**: 引入垂直滚动条后（v1.0.52），Windows 环境下的文本渲染出现错位对齐问题。
    *   **关注原因**: 这是一个由近期修复引发的回归问题，直接影响了核心阅读体验，获得 **5 个 👍**。
3.  **[历史记录被截断] #2317 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #2317](https://github.com/copilot-cli Issue #2317)
    *   **摘要**: Copilot 执行 Bash 命令时会截断用户的 `~/.bash_history`。
    *   **关注原因**: 这是一个严重的数据副作用 Bug，涉及系统层面的破坏性操作，持续引起社区担忧（**8 个 👍**）。
4.  **[终端文本裁剪与滚动失效] #3497 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3497](https://github.com/copilot-cli Issue #3497)
    *   **摘要**: 调整终端大小/重排后，输出被裁剪，且隐藏文本无法通过滚动条到达。
    *   **关注原因**: 涉及基础 UI 交互逻辑，导致长文本输出直接丢失，获 **6 个 👍**。
5.  **[Android/Termux 运行崩溃] #3333 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3333](https://github.com/copilot-cli Issue #3333)
    *   **摘要**: 因原生 Rust 插件依赖 `glibc`，导致在 Android/Termux (使用 Bionic libc) 上彻底无法运行。
    *   **关注原因**: 阻断了移动端/边缘设备开发者的使用场景，属于架构级别的兼容性遗漏。
6.  **[斜杠命令高亮难以阅读] #3426 [CLOSED]** 
    *   **链接**: [github/copilot-cli Issue #3426](https://github.com/copilot-cli Issue #3426)
    *   **摘要**: 输入斜杠命令时，高亮建议项的文本颜色对比度极低，几乎无法阅读。
    *   **关注原因**: 无障碍设计（Accessibility）和主题适配问题的典型代表，已关闭（可能在 v1.0.53 中修复）。
7.  **[MCP 管理增强需求] #2956 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #2956](https://github.com/copilot-cli Issue #2956)
    *   **摘要**: 建议在 `/mcp show` 交互菜单中直接增加 "Disable MCP" 选项。
    *   **关注原因**: 反映了社区对优化 MCP Server 工作流和功能发现的强烈需求（**3 个 👍**）。
8.  **[GNOME Wayland 粘贴回归] #3414 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3414](https://github.com/copilot-cli Issue #3414)
    *   **摘要**: 升级到 1.0.49 后，Ubuntu GNOME Wayland 环境下的粘贴功能失效。
    *   **关注原因**: Linux 桌面前沿环境（Wayland）的剪贴板集成向来是难点，影响高端 Linux 用户。
9.  **[Session 会话死锁] #2350 [CLOSED]** 
    *   **链接**: [github/copilot-cli Issue #2350](https://github.com/copilot-cli Issue #2350)
    *   **摘要**: 环境变量 `PS0` 非空时，执行 shell 命令会导致 Copilot 卡死。
    *   **关注原因**: 该 Issue 已关闭，与昨日发布的 **v1.0.53 修复内容完美对应**，证明了团队在积极听取底层环境反馈。
10. **[内置脚手架命令请求] #3503 [OPEN]** 
    *   **链接**: [github/copilot-cli Issue #3503](https://github.com/copilot-cli Issue #3503)
    *   **摘要**: 希望在 CLI 中实现类似 VS Code 的内置 `/create-*` 技能（用于快速创建 hook、prompt 等）。
    *   **关注原因**: 反映了用户希望 CLI 能够提供与 IDE 一致的开发体验和更便捷的脚手架能力。

## 4. 重要 PR 进展
过去 24 小时内**无新增或更新的 Pull Requests**。这通常意味着团队正在内部积攒较大的功能特性，或者当前处于新版本发布后的 Issue 消化与 Triage（分诊）阶段。

## 5. 功能需求趋势
从近期 Issue 的标签和内容提炼，社区最关注的功能演进方向如下：
*   **UI 渲染与交互稳定性**：近期的争议集中在新引入的“垂直滚动条”适配问题上，包括 Windows 下的文本错位、Wayland 剪贴板以及各种 IME 兼容性，说明终端 TUI 渲染引擎的重构是当务之急。
*   **MCP 生态易用性**：开发者不仅需要连接 MCP，更需要完善的 UI 管理（如视口滚动限制 #3486、快速启用/禁用 #2956、更清晰的鉴权反馈 #3269）。
*   **跨平台与架构支持**：Termux/Android 的无法运行暴露出原生模块在不同底层 C 标准库间的兼容性挑战。

## 6. 开发者关注点与痛点总结
1.  **“引入新特性引发新 Bug”的阵痛**：开发者对 v1.0.52 引入的滚动条反馈呈现两极分化，虽然增强了鼠标交互，但在 Windows 和终端缩放场景下带来了文本裁剪和错位（#3501, #3497）。
2.  **对底层系统环境的破坏性副作用**：Copilot 在执行辅助任务时对用户环境的侵入性引起了警觉，特别是 `~/.bash_history` 被截断（#2317），开发者呼吁工具应当做到“无痕/隔离”。
3.  **配置与状态同步的迷惑性**：如 `AGENTS.md` 修改后不重载（#812）、`--config-dir` 被部分 UI 组件忽略（#2926），表明 CLI 在状态生命周期管理上还需要更严谨的闭环。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

以下是为您生成的 2026-05-25 Kimi Code CLI 社区动态日报。

---

# 📰 Kimi Code CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时内，Kimi CLI 社区迎来了高度活跃的开发贡献，主要集中在 **ACP（Agent 协议）支持完善**和**跨平台构建/文件处理稳定性**上。核心贡献者 `huntharo` 连续提交了多个高质量 PR，系统性地为 ACP 引入了流式消息 ID、历史记录重放及权限模式切换功能。此外，社区针对困扰已久的 CRLF/LF 换行符跨平台损坏问题及构建配置回归问题，提供了关键的修复方案。

## 2. 版本发布
过去 24 小时内**无**新版 Release 发布。

## 3. 社区热点 Issues
*今日无新增或活跃的 Issue，但结合近期提交记录，以下相关 Issue 仍是社区关注的核心：*

1. **换行符跨平台损坏问题 (关联 #1952, #2191)**
   - **重要性**：在跨平台（Windows/macOS/Linux）开发时，CLI 工具编辑文件常常静默更改换行符，导致 Git 提交污染。这是开发者体验的核心痛点。
   - **现状**：已在 PR #2362 中被彻底解决。
2. **ACP 权限模式动态切换需求 (关联 #1414)**
   - **重要性**：Agent 接入和运行时的权限控制是 AI 自动化的安全基石，该需求体现了社区对 Kimi CLI 在复杂自动化流程中安全性的期待。
   - **现状**：已在 PR #2364 中得到实现。

*(注：由于今日数据源中未抓取到处于 Open 状态的新 Issue，今日社区讨论重心主要聚焦于代码贡献与底层架构优化。)*

## 4. 重要 PR 进展
今日共有 7 个活跃 PR，以下 7 个 PR 均极具技术价值：

1. **[#2359 fix(acp): assign message ids to streamed content](https://github.com/MoonshotAI/kimi-cli/pull/2359)**
   - **作者**: `huntharo`
   - **内容**: 为通过 ACP（Agent Communication Protocol）传输的流式内容分配 `messageId`。这是支持第三方 Agent（如 PwrAgent、Codex App Server）稳定追踪和关联 AI 响应的前置基础。
2. **[#2363 fix(acp): replay loaded session history](https://github.com/MoonshotAI/kimi-cli/pull/2363)**
   - **作者**: `huntharo`
   - **内容**: 依赖于 #2359，实现了在 ACP `session/load` 时重放恢复的历史记录。使得 Agent 能够无缝恢复之前的上下文状态。
3. **[#2364 feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364)**
   - **作者**: `huntharo`
   - **内容**: 基于 #2363 构建，实现了协议级别的 ACP 权限模式切换（如 auto-approve 等），解决了 #1414 的需求，极大增强了接入外部 Agent 时的安全与灵活性。
4. **[#2362 fix: retain the original line break style of the file and fix cross-platform CRLF/LF issues](https://github.com/MoonshotAI/kimi-cli/pull/2362)**
   - **作者**: `Sisyphbaous-DT-Project`
   - **内容**: 修复了 `StrReplaceFile` 等工具破坏原文件换行符的 Bug。通过在文件读写时摒弃 `newline=None` 的默认转换行为，保留了文件的原始换行符风格（`\r\n` 或 `\n`）。
5. **[#2361 [codex] docs: clarify hooks notification example](https://github.com/MoonshotAI/kimi-cli/pull/2361)**
   - **作者**: `Randy-sin`
   - **内容**: 修复了 Hooks 文档中关于 `Notification` 事件示例的错误。澄清了其匹配器应使用通知类型，并指明审批请求当前不会作为 Notification 事件发出，降低了开发者的试错成本。
6. **[#2335 docs: fix Notification hook matcher example](https://github.com/MoonshotAI/kimi-cli/pull/2335)**
   - **作者**: `he-yufeng`
   - **内容**: 同样针对 Notification Hooks 文档的协同修复，替换了无法运行的 `permission_prompt` 示例，修正了中英文档的描述，提升了文档准确度。
7. **[#2358 fix(build): correct module-name type in pyproject.toml files](https://github.com/MoonshotAI/kimi-cli/pull/2358)**
   - **作者**: `60ke`
   - **内容**: 修复了底层构建系统的配置回归问题。将 `pyproject.toml` 中的 `module-name` 字段修正为正确的字符串语法，确保单模块包的正常打包构建。

## 5. 功能需求趋势
结合近期的代码合并记录，社区当前的技术演进趋势呈现以下特征：
- **深度拥抱 Agent 生态 (ACP 协议完善)**：社区正在大力推进 Kimi CLI 作为“后端大脑”接入其他工作流的能力。通过支持 ACP SDK 0.10.0、Session 重放和权限控制，Kimi CLI 正在向更标准化的 AI Agent 节点演进。
- **底层稳定性和跨平台兼容**：开发者对代码格式（CRLF/LF）等细节问题的容忍度较低，完善跨平台兼容和底层构建工具链的健壮性是近期的重要维护方向。
- **文档与开发者体验 (DX)**：Hooks 机制作为 CLI 自定义扩展的核心，其文档的持续更新说明社区正在积极培养生态开发者，但文档滞后于实际 API 能力仍是一个挑战。

## 6. 开发者关注点
- **第三方 Agent 集成的痛点**：从 PR #2359 的动机可以看出，开发者在尝试将 Kimi 集成到自建 Agent（如 PwrAgent）时，对流式内容缺乏唯一标识感到困扰，这直接促使了底层 ACP 接口的升级。
- **文档与实现的脱节**：多个开发者（PR #2361, #2335）指出 Hooks 的 Notification 示例无法正常工作。这表明在快速迭代中，CLI 的事件系统发生了变化，但配套文档未能及时同步，导致二开开发者遇到阻碍。
- **静默破坏用户代码**：CLI 工具在编辑文件时改变换行符（PR #2362）是长期存在的隐患，这反映出开发者在 AI 自动修改代码场景下，对“最小干预原则”的强烈诉求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-05-25)

## 1. 今日速览

过去24小时内，OpenCode 社区活跃度极高，主要集中在**运行稳定性、底层 API 兼容性以及非交互模式体验**的讨论与修复。GPT-5.4 及 DeepSeek v4 等新模型在集成时暴露出的响应卡顿和 API 兼容问题成为热议焦点；同时，多个针对非交互模式（`opencode run`）流式输出中断的核心修复 PR 已提交，显示出社区对 CI/CD 自动化场景的重视。

## 2. 版本发布

过去 24 小时内暂无新的官方 Release 版本发布。

---

## 3. 社区热点 Issues

以下精选了 10 个最受关注或最具代表性的 Issue，反映了当前社区的核心痛点：

1. **[#29079] GPT Models 响应严重延迟** (👍 9 | 💬 25)
   - **摘要**：用户在使用 GPT-5.4 (xhigh) 执行简单命令时，响应时间偶尔从几秒暴增至几分钟。
   - **关注点**：核心模型调用的稳定性问题，严重影响开发效率。
   - 🔗 [anomalyco/opencode Issue #29079](https://github.com/anomalyco/opencode/issues/29079)

2. **[#4704] `/undo` 和 `/timeline` 无法撤回文件编辑** (👍 15 | 💬 18)
   - **摘要**：历史遗留 Bug，在绑定 Git 的项目中，撤销命令无法真正还原文件更改。
   - **关注点**：核心版本控制功能的缺失，数据安全性受威胁。
   - 🔗 [anomalyco/opencode Issue #4704](https://github.com/anomalyco/opencode/issues/4704)

3. **[#11865] OpenAI Codex 子任务无响应且永久挂起** (👍 11 | 💬 17)
   - **摘要**：使用 OpenAI 提供商时，子代理/Subagents 频繁卡死，无超时或重试机制，导致整个会话假死。
   - **关注点**：复杂多 Agent 架构下的容错与健壮性缺陷。
   - 🔗 [anomalyco/opencode Issue #11865](https://github.com/anomalyco/opencode/issues/11865)

4. **[#6536] [FEATURE]: 移动端 App 支持** (👍 42 | 💬 15)
   - **摘要**：呼吁官方提供移动端 App，摆脱通过手机浏览器访问实例的受限体验。
   - **关注点**：本期点赞数最高，跨平台开发是社区极其强烈的核心需求。
   - 🔗 [anomalyco/opencode Issue #6536](https://github.com/anomalyco/opencode/issues/6536)

5. **[#17505] `session/update` 通知在 `end_turn` 之后才到达** (👍 5 | 💬 12)
   - **摘要**：作为 ACP 提供方使用时，状态通知乱序，导致客户端 UI 提前结束渲染、内容为空。
   - **关注点**：第三方集成和 ACP 协议流式通信规范的问题。
   - 🔗 [anomalyco/opencode Issue #17505](https://github.com/anomalyco/opencode/issues/17505)

6. **[#27530] 启动报错：5个请求中4个失败 (Unexpected server error)** (👍 8 | 💬 11)
   - **摘要**：启动应用时底层服务（如 config.providers, app.agents）大面积报错，导致无法进入主界面。
   - **关注点**：系统初始化的可用性问题。
   - 🔗 [anomalyco/opencode Issue #27530](https://github.com/anomalyco/opencode/issues/27530)

7. **[#24334] DeepSeek 思考模式 API 报错：`reasoning_content` 必须回传** (👍 2 | 💬 6)
   - **摘要**：使用 DeepSeek 时，其深度思考模式特有的内容未能正确传回 API，导致 400 错误。
   - **关注点**：主流开源推理模型的兼容性适配问题。
   - 🔗 [anomalyco/opencode Issue #24334](https://github.com/anomalyco/opencode/issues/24334)

8. **[#29140] Write 工具参数截断：大内容下 `filePath` 丢失** (👍 0 | 💬 2)
   - **摘要**：在使用本地 Ollama/LM Studio 等兼容后端时，如果生成的代码过大，`write` 工具常丢失 `filePath` 字段。
   - **关注点**：本地开源模型工具调用能力的边界限制。
   - 🔗 [anomalyco/opencode Issue #29140](https://github.com/anomalyco/opencode/issues/29140)

9. **[#29127] v1.15.10 提供商列表中找不到 DeepSeek** (👍 0 | 💬 2)
   - **摘要**：更新至最新版后 DeepSeek 选项消失，即便重置缓存或降级也无法解决。
   - **关注点**：版本升级引入的配置/UI 回归问题。
   - 🔗 [anomalyco/opencode Issue #29127](https://github.com/anomalyco/opencode/issues/29127)

10. **[#26371] [FEATURE]: 双击 Ctrl+C 退出 CLI** (👍 1 | 💬 4)
    - **摘要**：建议效仿 Claude Code，第一次中断当前任务，第二次才退出，防止长会话被误操作打断。
    - **关注点**：防呆设计与用户体验优化。
    - 🔗 [anomalyco/opencode Issue #26371](https://github.com/anomalyco/opencode/issues/26371)

---

## 4. 重要 PR 进展

以下是近期正在审理或合并的重要代码贡献：

1. **[#29068] refactor(core): 重新分配数据库 Schema 所有权**
   - **内容**：将 Drizzle schema 文件及历史迁移从 `opencode` 包下沉至 `core` 包，由核心层统一管理迁移服务。
   - **意义**：深度的架构重构，有助于后续多端/多入口的数据层解耦。
   - 🔗 [anomalyco/opencode PR #29068](https://github.com/anomalyco/opencode/pull/29068)

2. **[#29132] fix: 修复非交互模式下流式事件提前中断**
   - **内容**：修复执行 `opencode run --format json` 时进程提前退出，导致下游工具无法接收到 `step_finish` 等事件的问题。
   - **意义**：关键 Bug 修复，直接影响 CI/CD 自动化管道中成本和 Token 统计的准确性。
   - 🔗 [anomalyco/opencode PR #29132](https://github.com/anomalyco/opencode/pull/29132)

3. **[#12633] feat(tui): 增加权限请求的自动接受模式**
   - **内容**：引入 `shift+tab` 快捷键切换自动批准编辑权限，简化高频文件修改时的交互。
   - **意义**：极大提升自动化流式编程（如 Agent 大范围重构）的用户体验。
   - 🔗 [anomalyco/opencode PR #12633](https://github.com/anomalyco/opencode/pull/12633)

4. **[#28071] feat: 添加 Well-Known 认证服务**
   - **内容**：实现 `AuthWellKnown` 服务，支持平滑迁移旧的 `auth.json` 至新规范，并支持环境变量和文件替换。
   - **意义**：完善企业级和跨平台部署的身份认证配置体系。
   - 🔗 [anomalyco/opencode PR #28071](https://github.com/anomalyco/opencode/pull/28071)

5. **[#29047] fix(opencode): 将重试次数限制为 5 次，防止无限循环**
   - **内容**：为 Provider 故障增加重试上限，保障 Fallback 机制能及时切换到备用模型。
   - **意义**：针对长任务挂起/假死问题的重要健壮性补丁。
   - 🔗 [anomalyco/opencode PR #29047](https://github.com/anomalyco/opencode/pull/29047)

6. **[#26090] feat(session): 在 Assistant 消息中暴露 LLM 响应头**
   - **内容**：允许提取并暴露 HTTP 响应头（如 LiteLLM 代理返回的真实路由模型）。
   - **意义**：增强了使用 API 代理/网关场景下的可观测性与计费追踪能力。
   - 🔗 [anomalyco/opencode PR #26090](https://github.com/anomalyco/opencode/pull/26090)

7. **[#29110] fix(app): 恢复排队的跟进提问功能**
   - **内容**：重新启用了在流式输出期间的排队消息发送功能，防止消息丢失。
   - **意义**：解决交互中断问题，恢复流畅的多轮对话体验。
   - 🔗 [anomalyco/opencode PR #29110](https://github.com/anomalyco/opencode/pull/29110)

8. **[#29130] fix(tui): 修复外部编辑器的工作目录**
   - **内容**：执行 `/editor` 命令时，显式传递工作目录给外部编辑器，避免其继承 TUI 进程的根目录。
   - **意义**：修复开发者使用 Vim/VSCode 等外部编辑器打开文件路径错误的痛点。
   - 🔗 [anomalyco/opencode PR #29130](https://github.com/anomalyco/opencode/pull/29130)

9. **[#26916] feat: 添加定时自动化任务**
   - **内容**：支持在 OpenCode 内部调度和执行定时任务（如 nightly builds 或定期重构）。
   - **意义**：将 OpenCode 从单纯的助手推向常态化运维与自动化开发工具。
   - 🔗 [anomalyco/opencode PR #26916](https://github.com/anomalyco/opencode/pull/26916)

10. **[#29125] fix(provider): 终端事件时关闭 OpenAI 响应流**
    - **内容**：当接收到 OpenAI 的 `response.completed` 等终止事件时，主动关闭 SSE 连接。
    - **意义**：修复网络层的悬挂连接问题，避免内存和连接池泄漏。
    - 🔗 [anomalyco/opencode PR #29125](https://github.com/anomalyco/opencode/pull/29125)

---

## 5. 功能需求趋势

综合本期 Issues 与 PR 动态，社区目前的关注方向呈以下趋势：

- **跨平台与移动端支持**：对移动端 App（[#6536](https://github.com/anomalyco/opencode/issues/6536)）及通过手机控制远程开发环境（[#29121](https://github.com/anomalyco/opencode/issues/29121)）的需求呼声极高。
- **本土化/开源模型深度适配**：针对 DeepSeek、Qwen 等国产模型的参数截断（[#29140](https://github.com/anomalyco/opencode/issues/29140)）、Reasoning 适配（[#24334](https://github.com/anomalyco/opencode/issues/24334)）、以及版本丢失（[#29127](https://github.com/anomalyco/opencode/issues/29127)）问题频发，亟需加强兼容性。
- **终端防呆与体验优化**：双击退出（[#26371](https://github.com/anomalyco/opencode/issues/26371)）、剪贴板容错（[#27861](https://github.com/anomalyco/opencode/pull/27861)）、锁屏恢复（[#15431](https://github.com/anomalyco/opencode/issues/15431)）等细节体验受到重视。
- **协议规范与第三方集成**：ACP 协议下的事件时序修复（[#17505](https://github.com/anomalyco/opencode/issues/17505)）、API Header 暴露（[#26090](https://github.com/anomalyco/opencode/pull/26090)）表明 OpenCode 正在被越来越多地用作底座引擎集成。

---

## 6. 开发者关注点 (痛点总结)

1. **网络容错与重试机制薄弱**：当 Provider 超时或报错时，应用极易进入死循环或整体卡死（如 [#11865](https://github.com/anomalyco/opencode/issues/11865)、[#29079](https://github.com/anomalyco/opencode/issues/29079)），缺乏合理的超时、重试上限和状态降级。
2. **长上下文和工具调用边界限制**：在使用较大上下文或本地模型生成大量代码时，常常发生截断或字段丢失，导致工具级联失败。
3. **非交互模式/自动化支持不完善**：`opencode run` 的 JSON 流输出在异步处理上仍存在竞态条件，影响依赖其进行自动化处理的开发者。
4. **账户及合规机制缺失**：集中爆发了用户无法自主注销账户（GDPR）的问题（[#29092](https://github.com/anomalyco/opencode/issues/29092)、[#29101](https://github.com/anomalyco/opencode/issues/29101)），暴露出相关业务流程的不完善。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 (2026-05-25)

## 1. 今日速览

Pi 项目今日继续保持高频迭代，社区围绕系统稳定性与多模型兼容性展开了深入探讨。核心团队及贡献者集中修复了 **RPC 模式高并发背压导致的进程崩溃**、**上下文压缩导致的 Agent 崩溃** 等严重底层缺陷。此外，新增了阿里云 DashScope Provider（支持 Qwen 3.7 Max），并针对扩展开发体验和 TUI 视觉交互提交了大量优化提案。

## 2. 版本发布

过去 24 小时内无新增 Release 版本。

## 3. 社区热点 Issues

以下是今日最受关注和最具讨论价值的 10 个 Issues：

1. **[RPC 模式高并发下 stdout 爆发导致进程退出](https://github.com/earendil-works/pi/issues/4897)** `Bug` `👍 0`
   - **亮点**：RPC 模式（`--mode rpc`）下，大量流式输出会导致 `write ENOBUFS` 错误并致进程崩溃。这直接影响了将 Pi 作为底层 Agent 框架集成的重度开发者，是今日稳定性修复的重中之重。

2. **[OpenAI Codex/GPT-5.5 长时间挂起无响应](https://github.com/earendil-works/pi/issues/4945)** `Bug` `👍 2`
   - **亮点**：最新旗舰模型 GPT-5.5 在 Pi 中偶发无流式输出、无工具调用、无报错的 "死锁" 状态，只能通过 ESC 强制中断。此问题反映了 Pi 在处理特定模型 API 异常行为时的健壮性有待提升。

3. **[Linux 版本未遵循 XDG 基础目录规范](https://github.com/earendil-works/pi/issues/2870)** `Bug` `👍 26`
   - **亮点**：配置文件污染用户 Home 目录的老问题。此 Issue 获得了极高的赞同数（26👍），Linux 生态用户对标准化的呼声极高。

4. **[Session 存储路径冲突导致文件夹碰撞](https://github.com/earendil-works/pi/issues/4877)** `Bug` `👍 2`
   - **亮点**：当前基于工作目录路径生成哈希的 Session 存储逻辑存在缺陷（如 `/a/b/c/d` 和 `/a-b/c-d` 会指向同一个文件夹），可能引发多项目状态串扰。

5. **[支持在 packages/ai 中自定义/自由格式的 Tool](https://github.com/earendil-works/pi/issues/4948)** `Feature`
   - **亮点**：提议支持 OpenAI 最新的原生 Custom Tools 规范（非 JSON Schema 格式），这对于非标 API 提供商的接入和扩展能力是一个重要的架构演进。

6. **[TUI 终端宽度越界导致崩溃](https://github.com/earendil-works/pi/issues/4946)** `Bug`
   - **亮点**：当工具渲染的单行输出超过终端物理宽度时 TUI 会崩溃。已迅速提交修复 PR，体现了社区对用户体验细节的把控。

7. **[Bun 运行时兼容性问题导致扩展无法安装](https://github.com/earendil-works/pi/issues/4160)** `Bug`
   - **亮点**：在无 Node/npm 环境下使用 Bun 安装扩展时，由于硬编码依赖 npm 可执行文件而报错。阻碍了部分前沿开发者的使用。

8. **[pnpm 环境下 Undeclared 依赖破坏 AWS Bedrock Provider](https://github.com/earendil-works/pi/issues/4842)** `Bug`
   - **亮点**：严格包管理器（如 pnpm）拦截了未声明的传递依赖，导致 AWS Bedrock 用户无法正常调用模型，凸显了依赖树治理的重要性。

9. **[OpenRouter/Poolside 上下文溢出引发无限重试](https://github.com/earendil-works/pi/issues/4943)** `Bug`
   - **亮点**：Pi 未能正确捕获部分第三方网关返回的 Token 超长错误格式，导致无法触发自动压缩，陷入了无限重试循环。

10. **[Agent 在 429 限流错误时永久挂起](https://github.com/earendil-works/pi/issues/4707)** `Bug` `👍 3`
    - **亮点**：由于底层 Undici fetch 退步，当遇到 429 Rate Limit 时 API 连接断开，Pi 会无限卡在 "Working" 状态，已通过 HTTP 超时重构解决。

## 4. 重要 PR 进展

以下为过去 24 小时内活跃的关键代码合并与草案：

1. **[feat(coding-agent): 为 Windows 自动获取 Portable Git Bash](https://github.com/earendil-works/pi/pull/4651)** `OPEN`
   - 作者尝试在 Windows 环境下自动下载并配置 Git Bash（类似 rg 和 find 的处理）。目前因为解压包体积过大（约 350MB）处于草案阶段，等待社区评估。

2. **[fix(rpc): 修复高并发背压重试导致的中止问题](https://github.com/earendil-works/pi/pull/4950)** `CLOSED`
   - 针对 Issue #4897 的初步修复尝试。作者发现当前接口无法合理处理非 awaitable 的背压，暂关以寻找更好的兼容性方案。

3. **[feat(ai): 新增 Codex 设备代码登录](https://github.com/earendil-works/pi/pull/4911)** `OPEN`
   - 为 OpenAI Codex 新增了无头环境友好的 Device Code 登录选项，提升了服务器环境下的认证体验。

4. **[feat: 新增阿里云 DashScope Provider (Qwen 3.7 Max)](https://github.com/earendil-works/pi/pull/4926)** `OPEN`
   - 重量级新特性。引入了第一方阿里云百炼平台支持，深度集成了 Qwen 模型的 Deep Thinking 和预算控制参数。

5. **[fix(coding-agent): 清理并规范化路径处理逻辑](https://github.com/earendil-works/pi/pull/4873)** `CLOSED`
   - 重构了全项目的路径拼接逻辑，解决了跨设备路径拼接隐患，保障了不同操作系统下的文件操作一致性。

6. **[refactor(agent): 修复压缩后可能导致 Agent 崩溃的缺陷](https://github.com/earendil-works/pi/pull/4939)** `CLOSED`
   - 防御性修复：确保在上下文压缩后，如果对话历史的最后一条仍是 Assistant 消息，不会错误触发 `continue()` 导致崩溃。

7. **[feat(coding-agent): 向命令上下文暴露 `getToolDefinition`](https://github.com/earendil-works/pi/pull/4954)** `OPEN`
   - 允许扩展开发者调用原生的 Agent 工具进行输入测试和输出预览，而不必实际上下文调用，大幅改善扩展开发体验。

8. **[fix(cli): 处理 main() Promise 防止进程挂起](https://github.com/earendil-works/pi/pull/4941)** `CLOSED`
   - 修复了 CLI 入口未正确 await 异步主函数导致的进程挂起不退出问题。

9. **[fix(tui): 阻断超宽行渲染引发的崩溃](https://github.com/earendil-works/pi/pull/4944)** `CLOSED`
   - 在 TUI 渲染层加入边界限制逻辑，完美解决 Issue #4946。

10. **[refactor(agent): 移除流处理中重复的终结逻辑](https://github.com/earendil-works/pi/pull/4952)** `CLOSED`
    - 清理了 `streamAssistantResponse` 中的冗余 done/error 处理代码，使流的自然终结逻辑更加单一和可靠。

## 5. 功能需求趋势

通过对近期 Issue 的综合分析，社区当前需求聚焦于以下方向：

- **多运行时与严格依赖树兼容**：用户对摆脱 Node.js 限制的呼声较高，期望在 Bun、pnpm、Yarn PnP 等现代环境下实现无缝安装和运行。
- **企业级与跨云模型支持**：随着 DashScope 和 Bedrock 缺陷的修复，社区对 AWS、阿里云等私有化/区域化端点的一级适配需求日益增加。
- **Agent 编排与扩展能力**：开发者不满足于将 Pi 作为单一客户端，更希望暴露底层生命周期（如 `streamingBehavior` 和 `ToolInfo`），以便嵌入到 CI/CD 和自定义自动化工作流中。
- **TUI 无障碍化与现代化**：终端 UI 的视觉重构（如更柔和的配色）和 Screen Reader 的支持需求被多次提及，反映了工具受众的泛化趋势。

## 6. 开发者关注点

目前，Pi 的早期采用者和资深开发者集中抱怨的痛点包括：

1. **核心循环的健壮性**：包括 `Compaction` (上下文压缩) 导致的数据丢失与崩溃、网络抖动/限流导致的 Agent 永久挂起。开发者期望 Agent 具备更强的自愈和错误恢复能力。
2. **状态管理隐患**：Session 命名碰撞（#4877）、环境变量未按规范读取（#2870）等破坏了"开箱即用"的隔离性体验。
3. **RPC 模式的可靠性**：随着将 Pi 作为后端引擎的场景增多，高吞吐量下的背压处理和进程崩溃是目前系统集成方的最大绊脚石。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-05-25)

> 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

## 1. 今日速览
今日 Qwen Code 正式发布 **v0.16.1** 修复版本，解决了困扰构建的 TS5055 错误。同时，围绕 **v0.16-alpha 的发布计划**（F5 release chain）全面启动，核心团队合并了首个筹备 PR 并密集提交了多个与 Daemon 模式、ACP 协议及可观测性相关的重磅更新。社区方面，Token 消耗追踪、OOM 崩溃及多端多通道（微信/飞书）集成成为今日讨论焦点。

---

## 2. 版本发布
- **v0.16.1-nightly.20260524.84f408017** ([Release 详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260524.84f408017))
  - **fix(build)**: 清理过期的构建输出，解决 `tsc --build` 时可能出现的 `TS5055` 错误 ([#4453](https://github.com/QwenLM/qwen-code/pull/4453))
  - **chore**: 常规发版节奏更新。

---

## 3. 社区热点 Issues
以下为本日最活跃/最受关注的 7 个 Issues（今日共 7 条更新，全部入选）：

1. **Mode B 路线图及 v0.16 生产就绪计划** ([#4175](https://github.com/QwenLM/qwen-code/issues/4175))
   - **关注理由**: 社区核心规划贴。明确了 `qwen serve` 的后续目标，Stage 1 daemon 已合并，后续将重点攻克 v0.16 生产级别的特性。
2. **本地问题诊断框架提案 (ring buffer + /bug collect)** ([#4421](https://github.com/QwenLM/qwen-code/issues/4421))
   - **关注理由**: 直击排障痛点。提出 local-first 环形缓冲区记录 API/SSE 异常，解决用户“无法复现、不知道提供什么日志”的问题。
3. **OOM 崩溃 (内存泄漏问题)** ([#4276](https://github.com/QwenLM/qwen-code/issues/4276))
   - **关注理由**: 严重影响体验的 Bug。有用户反馈 GC 时占用高达 4GB+ 内存并导致崩溃，目前团队正在积极排查中。
4. **请求新增 Token 消耗统计功能** ([#4479](https://github.com/QwenLM/qwen-code/issues/4479))
   - **关注理由**: 强烈的用户刚需。用户反映单次使用消耗了 3千万 Token，急需跨会话的每日 Token 消耗统计面板。
5. **AUTO 模式的遥测与分类器对齐追踪** ([#4475](https://github.com/QwenLM/qwen-code/issues/4475))
   - **关注理由**: 安全性增强。针对 AUTO 模式的安全防护，提出需要更丰富的遥测数据和分类器元数据用于调试和监控。
6. **大模型始终以英文回复，无视修改语言指令** ([#4481](https://github.com/QwenLM/qwen-code/issues/4481))
   - **关注理由**: 核心交互 Bug。用户反馈要求重写为英文时，模型仅口头答应却未实际改变输出内容。
7. **并行任务卡死问题** ([#4471](https://github.com/QwenLM/qwen-code/issues/4471))
   - **关注理由**: UI 交互异常。在执行大规模并发任务（如启动多个测试 agent）时，进度条会卡住不动。

---

## 4. 重要 PR 进展
精选 10 个本日更新的重要 PR，展示了正在推进的核心功能：

1. **v0.16-alpha 发版链首个 PR (已知限制与 SDK Token 处理)** ([#4473](https://github.com/QwenLM/qwen-code/pull/4473)) `[CLOSED/MERGED]`
   - **进展**: 为 v0.16-alpha 增加了已知限制说明文档，并修复了 SDK 中 `QWEN_SERVER_TOKEN` 的环境变量回退逻辑。
2. **v0.16-alpha 发版链 PR 30a (本地部署文档)** ([#4483](https://github.com/QwenLM/qwen-code/pull/4483))
   - **进展**: 补充了 v0.16-alpha 版本的本地启动和部署模板文档。
3. **ACP Streamable HTTP 传输层支持** ([#4472](https://github.com/QwenLM/qwen-code/pull/4472))
   - **进展**: 重大架构更新。在 `qwen serve` 的 `/acp` 端点实现官方 ACP 协议，作为现有 REST+SSE API 的补充。
4. **跨客户端实时同步修复 (5项改动)** ([#4484](https://github.com/QwenLM/qwen-code/pull/4484))
   - **进展**: 修复了 Daemon 模式下，一个客户端的操作无法通过 SSE 实时同步给同会话其他客户端的 5 个盲区。
5. **CLI 实时并行 Agent 进度展示优化** ([#4477](https://github.com/QwenLM/qwen-code/pull/4477))
   - **进展**: 解决 UI 痛点。将原本折叠显示的 `Agent x N` 改为实时展示每个 Agent 的独立运行进度。
6. **Daemon 模式开发者深度指南文档** ([#4412](https://github.com/QwenLM/qwen-code/pull/4412))
   - **进展**: 新增 `docs/developers/daemon/` 目录，为第三方开发者提供深入对接 Daemon 模式的开发文档。
7. **W3C Traceparent 遥测追踪传递** ([#4390](https://github.com/QwenLM/qwen-code/pull/4390))
   - **进展**: 可观测性增强。在 HTTP 请求头中注入 `traceparent` 和 session id，便于后端全链路追踪。
8. **AUTO 模式拒绝策略与上限控制** ([#4476](https://github.com/QwenLM/qwen-code/pull/4476))
   - **进展**: 为 AUTO 模式增加结构化的拒绝边界、PermissionDenied 钩子，以及累计拒绝上限。
9. **适配飞书 渠道适配器** ([#4379](https://github.com/QwenLM/qwen-code/pull/4379))
   - **进展**: 新增飞书机器人的 WebSocket/Webhook 支持，支持交互式卡片流式更新和并发消息处理。
10. **修复微信通道图片解密/展示问题** ([#4464](https://github.com/QwenLM/qwen-code/pull/4464)) & **兼容 Windows 路径** ([#4465](https://github.com/QwenLM/qwen-code/pull/4465))
    - **进展**: 修复了微信客户端收到图片显示灰块（无法解密）的 Bug，并优化了工作区路径校验以适配 Windows 环境。

---

## 5. 功能需求趋势
通过对近期 Issues 和 PRs 的分析，社区功能需求目前集中在以下三大方向：

- **可观测性与成本管控**
  随着应用深入生产，开发者对调试和成本管控的需求激增。包括：跨会话 Token 用量统计 (`/token-stats`)、全链路 Trace 传递、本地诊断日志框架（Local-first ring buffer）等。
- **Daemon 架构与多端多渠道集成**
  `qwen serve` 的Daemon模式持续演进。不仅开始支持标准的 ACP 协议，还在加速覆盖国内主流 IM 平台（微信、飞书），解决多客户端 SSE 会话同步和并发状态隔离问题。
- **安全性与交互体验优化**
  针对 AUTO 模式的安全边界和脱轨防范越来越精细（如累计拒绝上限）。同时，CLI 的交互体验在向更透明化发展（如多 Agent 并发进度的独立展示）。

---

## 6. 开发者关注点
综合今日反馈，开发者在日常使用中仍面临以下痛点：

1. **性能与内存瓶颈**: OOM 崩溃和大量级 Token 消耗（单次几千万）是当前企业级用户最担忧的问题。
2. **模型指令遵循稳定性**: 模型偶尔出现“阳奉阴违”的现象（如答应改英文但实际未改），长上下文下的指令遵循能力仍有提升空间。
3. **复杂并发任务的黑盒状态**: 当启动多 Agent 并行处理复杂任务时，界面的无响应或折叠状态让开发者感到不可控，急需直观的实时运行状态反馈。
4. **本土化生态接入的兼容性**: 开发者在将 Qwen Code 接入微信/飞书等国内平台时，遇到了诸如图片加解密失败、Windows 路径校验不兼容等繁琐的工程细节问题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-05-25)

## 1. 今日速览
今天项目迎来了**重大品牌重塑**，正式更名为 **CodeWhale** 并密集发布了 v0.8.42 和 v0.8.43 两个版本，旧版二进制文件已转为废弃过渡状态。核心团队的重心已全面转向多智能体架构和上下文内存管理优化，提出了多个针对 v0.8.44 和 v0.8.45 的演进提案。社区目前最关注的是**平滑迁移方案**以及旧版会话/技能的兼容性问题。

## 2. 版本发布
- **[v0.8.43 & v0.8.42](https://github.com/Hmbown/CodeWhale/releases)** 
  - **核心更新**：项目正式更名为 **CodeWhale**。
  - **兼容性**：旧版 `deepseek` 和 `deepseek-tui` 命令仍会保留一个发布周期的兼容期，它们现在作为废弃提示，会打印一行警告并自动转发请求给新的 `codewhale` / `codewhale-tui` 命令。
  - **注意**：旧版命令将在 v0.9.0 版本中被彻底移除，详情请参考 `docs/REBRAND.md`。

## 3. 社区热点 Issues
以下是过去 24 小时内社区讨论最热烈、最具代表性的 10 个 Issue：

1. ** [#1969 [OPEN] 程序更名成code whale之后，原先的会话、技能都还在吗](https://github.com/Hmbown/CodeWhale/issues/1969)**
   - **关注点**：品牌升级带来的迁移焦虑。用户质疑在未使用自动更新而是手动指定目录的情况下，如何平滑迁移历史会话和技能。
2. ** [#2007 [OPEN] feat(goal): Migration runs for coordinated multi-agent work](https://github.com/Hmbown/CodeWhale/issues/2007)**
   - **关注点**：官方提出的核心架构演进。计划用“可见的协调Agent运行”取代当前的 School-mode 探索，支持并行 Worker、角色分配和冲突调和。
3. ** [#1010 [CLOSED] 希望有切换工作空间的命令](https://github.com/Hmbown/CodeWhale/issues/1010)**
   - **关注点**：长期痛点解决。多工作空间切换是高频刚需，该需求的关闭通常意味着底层支持已就绪或纳入近期的发布计划。
4. ** [#1806 [OPEN] Sub-agent 120s API timeout renders agent_open nearly unusable](https://github.com/Hmbown/CodeWhale/issues/1806)**
   - **关注点**：多智能体稳定性。用户在并发处理长文本任务时遇到子 Agent 统一 120s 超时失败的问题，暴露了复杂任务下的流式调度瓶颈。
5. ** [#2010 [CLOSED] P0 v0.8.44: session artifact hygiene, auto-prune](https://github.com/Hmbown/CodeWhale/issues/2010)**
   - **关注点**：存储安全与卫生。针对长期运行后生成的大量 `session_*.json` 污染代码库的问题，官方计划引入自动清理机制。
6. ** [#1978 [OPEN] Support ZenMux / OpenAI-compatible providers](https://github.com/Hmbown/CodeWhale/issues/1978)**
   - **关注点**：开源生态与路由。用户详细测试并呼吁支持 OpenRouter 等兼容 OpenAI 接口的第三方提供商，以解绑单一官方 API 依赖。
7. ** [#1676 [OPEN] Proposal: Fourth Mode "Dual" — Pro + Flash](https://github.com/Hmbown/CodeWhale/issues/1676)**
   - **关注点**：成本控制与性能平衡。建议新增“双模型路由”模式，用 Pro 做深度推理，Flash 做工具执行，以节省约 6 倍的 Token 成本。
8. ** [#2009 [CLOSED] TUI: yield control while waiting on background shell/task](https://github.com/Hmbown/CodeWhale/issues/2009)**
   - **关注点**：交互体验优化。借鉴 Claude Code 的体验，要求在 Agent 等待长时间 Shell 命令或后台任务时，将控制权交还给用户，避免界面“卡死”。
9. ** [#1551 [OPEN] 支持底部状态栏自定义配置，显示 API 余额等](https://github.com/Hmbown/CodeWhale/issues/1551)**
   - **关注点**：可观测性增强。用户希望在 TUI 底部状态栏实时显示 API 余额、当前模型和耗时，减少工作流中断。
10. ** [#1945 [OPEN] please support loongarch64](https://github.com/Hmbown/CodeWhale/issues/1945)**
    - **关注点**：国产化硬件兼容。龙芯 架构支持需求提上日程，目前由于底层依赖缺失导致只安装了基础分发器。

## 4. 重要 PR 进展
以下是近期值得关注的代码合并与拉取请求：

1. ** [#2030 [CLOSED] fix(release): repair v0.8.44 gates](https://github.com/Hmbown/CodeWhale/pull/2030)**
   - **修复**：同步 v0.8.44 发布元数据，修复了启动时自动打开会话选择器的问题，保留了显式恢复会话的快捷路径。
2. ** [#1911 [CLOSED] fix(tui): restore cleared composer with Ctrl+Z](https://github.com/Hmbown/CodeWhale/pull/1911)**
   - **体验优化**：引入单槽撤销缓冲区。用户在输入框长文本时若误触 `ESC` 或 `Ctrl+C`，现在可以通过 `Ctrl+Z` 恢复。
3. ** [#1860 [CLOSED] fix(installer): pause response stream to prevent data loss](https://github.com/Hmbown/CodeWhale/pull/1860)**
   - **核心修复**：修复了 Windows 等平台上全局安装失败的问题。解决了网络请求与文件写入之间的竞态条件引发的 checksum 错误。
4. ** [#1845 [CLOSED] feat: RuntimeTool trait with go/ts/rust execution backends](https://github.com/Hmbown/CodeWhale/pull/1845)**
   - **架构升级**：引入统一的 `RuntimeTool` trait，为 Go、TypeScript 和 Rust 提供了标准化的代码执行后端支持。
5. ** [#1848 [OPEN] feat: Pluggable Tool Registry](https://github.com/Hmbown/CodeWhale/pull/1848)**
   - **功能拓展**：实现插件化工具注册表。用户只需将脚本放入 `~/.deepseek/tools/` 目录即可自动加载，无需修改配置。
6. ** [#1992 [OPEN] fix(tui): upgrade portable-pty to 0.9 for LoongArch64 support](https://github.com/Hmbown/CodeWhale/pull/1992)**
   - **平台兼容**：将 `portable-pty` 依赖升级至 0.9，从底层依赖层面修复了在龙芯 LoongArch64 架构上的编译失败问题。
7. ** [#1967 [OPEN] feat(tui): support configurable DeepSeek base URL](https://github.com/Hmbown/CodeWhale/pull/1967)**
   - **网络配置**：允许在 `/config` 中自定义 DeepSeek API 的 Base URL。修改后需重启生效，为私有化部署提供了支持。
8. ** [#1938 [CLOSED] fix(tui): try wl-copy before arboard on non-wlroots Wayland](https://github.com/Hmbown/CodeWhale/pull/1938)**
   - **环境修复**：修复了在非 wlroots 的 Wayland 合成器（如 GNOME、niri）上系统剪贴板失效的隐蔽问题。
9. ** [#2008 [OPEN] feat: add ShellDispatcher for shell-agnostic command execution](https://github.com/Hmbown/CodeWhale/pull/2008)**
   - **执行引擎**：引入与具体 Shell 解耦的命令分发器，为跨平台（尤其是 Windows PowerShell 与 Unix 差异）执行提供了统一标准。
10. ** [#613 [OPEN] feat(session): auto-load README/AGENTS.md at session start](https://github.com/Hmbown/CodeWhale/pull/613)**
    - **上下文增强**：新会话开启时，若检测到 Git 仓库，将自动读取 `README.md` 和 `AGENTS.md`，以增强大模型对当前项目的初始理解。

## 5. 功能需求趋势
纵观近期的 Issues 与 PR，社区及官方的研发趋势高度集中在以下三个方向：
- **多智能体体验打磨**：单一 Agent 正在向多角色协同进化。官方正致力于让子 Agent 拥有易读的名称（如鲸鱼物种命名）、协调独立并行工作，并在 UI 层面直观展示工作流闭环。
- **Token 成本与路由控制**：随着大模型调用成本成为痛点，社区强烈呼吁“高低搭配”的双模路由（Pro 推理 + Flash 执行），以及细粒度的推理深度控制（如 `/think off|high|max`）。
- **开源生态与私有化部署**：社区不再满足于仅使用官方直连 API，对自定义 API Endpoint、兼容 OpenAI/OpenRouter 格式的第三方网关接入需求激增。

## 6. 开发者关注点
开发者反馈的当前痛点主要集中在：
1. **工作流中断与数据丢失**：后台任务阻塞 UI 导致无法操作，以及误触导致长提示词被清空，是日常体验中最大的痛点。
2. **本地存储垃圾堆积**：Agent 长时间工作后产生的大量 JSON 会话日志污染工作区，开发者对数据卫生和自动修剪机制的呼声极高。
3. **迁移指导文档缺失**：由于项目刚刚突然更名，许多高级开发者发现在手动升级和指定目录的场景下缺乏清晰的迁移指引，产生了一定的困惑。

</details>