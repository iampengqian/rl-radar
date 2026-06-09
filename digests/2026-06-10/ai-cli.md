# AI CLI 工具社区动态日报 2026-06-10

> 生成时间: 2026-06-09 22:27 UTC | 覆盖工具: 9 个

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

作为专注于 AI 开发工具生态的技术分析师，基于 2026 年 6 月 10 日主流 AI CLI 工具的社区动态，我为您整理了以下横向对比与深度分析报告。

---

### 1. 生态全景：从“单体助手”向“多智能体协同基础设施”演进

当前 AI CLI 工具已经跨越了单纯的“命令行问答”阶段，全面进入了**多智能体编排、长期记忆持久化、跨端/跨云调度**的深水区。各家厂商正致力于解决上下文无限膨胀带来的稳定性（OOM、挂起）和成本问题（Token 优化）。安全与自动化之间的博弈成为焦点，底层通信协议（如 Noise、ACP/SSE）的重构标志着 AI CLI 正在向**企业级的可信执行环境**过渡。同时，开源社区对非 ASCII 字符（中日韩排版）和多平台（Windows/Linux）兼容性的“长尾痛点”发起了集中冲锋。

### 2. 各工具活跃度对比

从数据来看，处于第一梯队的工具在社区互动和代码提交上表现出极高的活跃度。

| 工具名称 | 今日新增/活跃 Issues | 今日活跃 PRs | 最新版本发布 | 核心事件/状态 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 50+ (Fable 5占35%) | 12 | v2.1.170 | **紧急/高热**：新模型上线引发严重安全拦截误报。 |
| **OpenAI Codex**| 10+ (高频长尾) | 10+ | rust-v0.139.0 | **底层重构**：GPT-5.5 瘫痪，正进行网络层与安全大重构。 |
| **Gemini CLI** | 10+ | 10+ | v0.45.3 / v0.47.0 | **高频迭代**：修复路由，聚焦子代理稳定性与安全漏洞。 |
| **GitHub Copilot**| 10+ | **0** | v1.0.61 | **停滞/争议**：PR 完全停滞，Worktree 默认开启引发众怒。 |
| **Qwen Code** | 30 | 50 | v0.18.0-p1 | **极速狂飙**：单日 PR 暴增，全面补齐 Daemon 与多端协议。 |
| **OpenCode** | 10+ | 10+ | 无 | **痛点爆发**：内存泄漏与 Prompt 缓存失效导致成本激增。 |
| **Pi** | 10+ | 10+ | v0.79.1 | **敏捷适配**：极速适配 Fable 5，优化会话级配置体验。 |
| **DeepSeek TUI** | 10+ | 10+ | v0.8.55 (CodeWhale)| **战略转型**：重命名为 CodeWhale，探索跨端与长效记忆。 |
| **Kimi Code CLI**| 1 | 0 | 无 | **平稳/低活**：仅暴露出特定环境下的核心工具 Bug。 |

### 3. 共同关注的功能方向（跨工具共识）

通过对各仓库 Issue 的聚类分析，当前社区的诉求高度集中在以下四个维度：

*   **1. 长期记忆与上下文生命周期管理**
    *   **涉及工具**：Qwen Code, DeepSeek TUI (CodeWhale), Gemini CLI, OpenCode。
    *   **具体诉求**：突破单次会话限制，建立跨项目的全局用户偏好记忆（如 Qwen 的 `~/.qwen/memories/` 和 CodeWhale 的“海马体系统”）；解决长上下文导致的 OOM（Qwen, OpenCode）、日志无限膨胀（Codex）以及上下文压缩失败问题。
*   **2. Agent 的稳健编排与底层通讯协议（ACP/MCP）**
    *   **涉及工具**：Qwen Code, Codex, Gemini CLI, Claude Code, OpenCode。
    *   **具体诉求**：解决子代理（Sub-agent）失控挂起、死循环或误报成功（Gemini, Claude 的僵尸进程）；全面拥抱 ACP（Agent Collaboration Protocol）实现跨编辑器无缝直连（Qwen, OpenCode）；重构底层执行通信协议以支持高并发（Codex 引入 Noise 协议）。
*   **3. “安全门控”与自动化工作流的摩擦**
    *   **涉及工具**：Claude Code, GitHub Copilot, Pi。
    *   **具体诉求**：寻找自动执行与安全风控的平衡点。Claude Code 的 Fable 5 出现极度激进的安全降级；Copilot 默认强制使用 Worktree 引发代码合并灾难；Pi 则因新增的项目信任机制频繁打断工作流而遭到社区抗议。
*   **4. 云端/多厂商路由与 Token 经济学**
    *   **涉及工具**：Codex, Gemini CLI, Pi, OpenCode。
    *   **具体诉求**：多处爆发 Bedrock/Azure 等多云路由 404 错误或凭证过期问题。同时，OpenCode 暴露出 Prompt Cache 失效导致费用飙升的问题，CodeWhale 则开始建立与 Codex 对标的 Token 消耗基准测试。

### 4. 差异化定位分析

尽管同属 AI CLI 赛道，各工具的战略侧重点已出现明显分化：

*   **Claude Code & OpenAI Codex（巨头的基础设施级底座）**：
    二者致力于成为系统级的底层执行环境。Claude 凭借强大的 Mythos 级模型，侧重于纵深的安全审查与复杂 Agent 编排；Codex 则在花大力气重写底层网络栈与沙盒机制，试图建立坚不可摧的隔离执行标准。
*   **GitHub Copilot（强绑定的 IDE 工作流延伸）**：
    不再追求单一的 CLI 玩具属性，而是强绑定 VS Code、JetBrains 等原有 IDE 生态，甚至强行推行 Worktree 隔离。其痛点多源于“试图替开发者做决定”而引发的流程中断。
*   **Qwen Code & DeepSeek TUI（激进的架构探索者）**：
    作为新兴力量的代表，迭代速度惊人。Qwen Code 极度重视 Daemon 化和服务化（ACP 协议），力图成为多端中枢；CodeWhale 则走“农村包围城市”路线，通过支持多达 19 个 Provider，甚至探索 Telegram 远程调度，追求极致的可用性和性价比。
*   **Gemini CLI & OpenCode（生态兼容的修补匠）**：
    Gemini 致力于解决其复杂的谷歌生态内部模型路由与权限问题；OpenCode 则把精力放在了底层的内存管理、搜索统一和兼容外部 IDE（如支持 Cursor、Zed）上。
*   **Pi（敏捷的跨平台体验打磨者）**：
    对最新模型（如 Fable 5）的适配速度极快，更关注终端 UI（TUI）的细节体验（如 CJK 排版、终端主题自适应、会话级临时配置），深受个人极客和终端重度用户的喜爱。

### 5. 社区热度与成熟度

*   **热度最高（痛苦指数也最高）**：**Claude Code** 与 **GitHub Copilot**。Claude Code 因为新模型的误报引发了 P0 级的群情激愤（单 Issue 上百点赞）；Copilot 则因为工作流破坏和长时间（数月）的修复停滞，导致社区开始自行分叉替代品。
*   **迭代最快、架构最激进**：**Qwen Code** 与 **DeepSeek TUI (CodeWhale)**。Qwen 单日 50 个 PR 的吞吐量展示了极其庞大的工程团队投入或社区力量；CodeWhale 刚完成品牌重塑，正快速集成各类开源协议和模型。
*   **处于底层重构阵痛期**：**OpenAI Codex**。表面是 GPT-5.5 的 404 报错，底层实则是正在执行的大规模底层传输和安全架构升级。
*   **成熟稳健但面临性能天花板**：**OpenCode** 和 **Gemini CLI**。功能基本完备，但正受制于大上下文带来的 GC（垃圾回收）难题和复杂的本地/云端鉴权路由。

### 6. 值得关注的趋势信号（致技术决策者）

1.  **安全审核（Guardrails）正在成为自动化的最大阻碍：** Claude Fable 5 误杀合法代码和 Copilot 滥用 Worktree 证明：**“AI 的安全防御机制与其开箱即用的生产力呈反比”**。企业在选型或升级时，必须评估其“一刀切”安全策略对正常业务流的阻断风险，优先选择支持“企业白名单”或“会话级安全降级”的工具。
2.  **Token 成本控制进入微观优化阶段：** 过去只看模型单价，现在必须关注 CLI 工具的“作恶”可能。如 OpenCode 暴露的“Prompt 缓存失效”和 Codex 的“日志自我吞噬”，会在不知不觉中抽干 API 额度。**监控 Token 消耗的颗粒度需要从“月度账单”细化到“每次会话的缓存命中率”。**
3.  **CLI 工具正在向“Daemon（常驻后台服务）”演进：** 以 Qwen Code 和 Codex 为代表，CLI 不再只是即用即走的命令，而是通过 SSE/ACP 协议常驻后台，随时准备接受多端（IDE、桌面端、甚至移动端）的调度。未来的 AI 开发环境将是**“以 CLI Daemon 为隐形中枢，多端 UI 为触角”**的形态。
4.  **国际化（i18n）与非英文场景成为基础设施雷区：** 多个工具（Copilot, Pi, CodeWhale, OpenCode）在同一天爆出 UTF-8/多字节字符/非 ASCII 路径处理导致的文件损坏、UI 崩溃或乱码问题。对于中国开发者及出海企业而言，**底层对非英文语境的兼容性应成为引入 AI 工具的前置验收标准。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点与技术生态分析报告
> 数据源：github.com/anthropics/skills | 截止日期：2026-06-10

作为 Claude Code 生态的技术分析师，基于最新开源数据，当前 Skills 社区正处于**从早期数量扩张向质量治理、安全防护及跨平台兼容转型**的关键阶段。以下是详细的热点分析报告。

---

### 1. 热门 Skills 排行（Top PRs）
虽然近期头部 PR 的显性评论数较少，但从提交频率、涉及的核心痛点及更新跨度来看，以下 Skills 是当前生态的关注焦点：

*   **[PR #1140] feat: implement agent-creator skill** 
    *   **链接**: [anthropics/skills#1140](https://github.com/anthropics/skills/pull/1140)
    *   **功能**: 新增 `agent-creator` 元技能，用于动态生成特定任务的 Agent 集合，并修复了多工具并行调用的评估难题。
    *   **状态**: [OPEN] | **热点**: 标志着社区开始探索“用 Skill 生成 Agent”的元编程模式，解决了 Windows 平台的兼容性痛点。
*   **[PR #541] fix(docx): prevent tracked change w:id collision**
    *   **链接**: [anthropics/skills#541](https://github.com/anthropics/skills/pull/541)
    *   **功能**: 修复 DOCX 技能在处理修订模式时，因硬编码 ID 冲突导致的 OOXML 文档损坏问题。
    *   **状态**: [OPEN] | **热点**: 深入底层协议的硬核修复，反映了企业级文档处理 Skills 正在走向成熟。
*   **[PR #444] feat: add AURELION skill suite**
    *   **链接**: [anthropics/skills#444](https://github.com/anthropics/skills/pull/444)
    *   **功能**: 包含内核、顾问、代理和记忆四大模块的 AURELION 认知与记忆框架，致力于专业知识的结构化管理。
    *   **状态**: [OPEN] | **热点**: 技能与外部记忆系统结合，解决长上下文限制的典型尝试。
*   **[PR #363] Fix feature-dev workflow phases skipped**
    *   **链接**: [anthropics/skills#363](https://github.com/anthropics/skills/pull/363)
    *   **功能**: 修复 `feature-dev` 工作流中 TodoWrite 覆盖导致质量审查阶段被意外跳过的严重 Bug。
    *   **状态**: [OPEN] | **热点**: DevOps/研发流程自动化中最受关注的“流程可靠性”问题。
*   **[PR #514] Add document-typography skill**
    *   **链接**: [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 专治 AI 生成文档的排版顽疾（如孤行、寡头、编号错位等）。
    *   **状态**: [OPEN] | **热点**: 填补了 LLM 在细节排版控制上的空白。
*   **[PR #83] Add skill-quality-analyzer and skill-security-analyzer**
    *   **链接**: [anthropics/skills#83](https://github.com/anthropics/skills/pull/83)
    *   **功能**: 引入两个元分析工具，用于多维度评估 Skill 质量（结构、文档等）及安全性。
    *   **状态**: [OPEN] | **热点**: 响应了社区对官方建立 Skills 准入和审核标准的强烈呼吁。

---

### 2. 社区需求趋势
综合 Issues 的互动数据（评论/点赞），社区的核心诉求正呈现在以下几个方向：

1.  **企业级协作与共享机制缺失 (最迫切)**
    *   **核心 Issue**: [#228] Enable org-wide skill sharing (👍7, 评论 13)
    *   **趋势**: 企业团队用户强烈需要跨成员的 Skill 共享库。目前的文件手动分发方式（下载再上传）严重阻碍了 Skills 在企业内部的规模化落地。
2.  **信任边界与安全治理 (最敏感)**
    *   **核心 Issue**: [#492] Security: Community skills under anthropic/ namespace (评论 7)
    *   **趋势**: 第三方 Skill 伪装成官方命名空间带来了严重的越权风险。社区呼吁建立严格的沙箱隔离、签名验证和命名空间审查机制。
3.  **评估与触发机制的不稳定性 (最基础)**
    *   **核心 Issue**: [#556] run_eval.py: claude -p never triggers skills (👍7, 评论 11)
    *   **趋势**: `run_eval.py` 在多个环境中面临 0% 触发率的尴尬，开发者无法可靠地测试 Skill 的召回率。Skill 评测框架的可靠性已成为制约其发展的最大瓶颈。
4.  **底层 Runtime 环境的兼容性 (Windows)**
    *   **核心 Issue**: PR #1050, #1099 等
    *   **趋势**: 大量 Skill 脚本在 Linux/macOS 表现良好，但在 Windows 环境下遭遇 subprocess 崩溃和管道读取失败，亟需跨平台抹平。

---

### 3. 高潜力待合并 Skills (Active & Impactful PRs)
以下 PR 针对上述痛点提供了实质性的代码级解决方案，活跃度高且具有很高的近期落地合并潜力：

*   **[PR #1099] / [PR #1050] 修复 Windows 子进程与编码崩溃**
    *   **链接**: [PR #1050](https://github.com/anthropics/skills/pull/1050) | [PR #1099](https://github.com/anthropics/skills/pull/1099)
    *   **潜力分析**: 两个 PR 集中解决了 Windows 环境下 CLI 的兼容性顽疾（如 `claude.cmd` 识别问题、管道报错），是让 Skills 真正跨平台的基础性修复。
*   **[PR #539] 修复 YAML 解析导致的描述符截断**
    *   **链接**: [PR #539](https://github.com/anthropics/skills/pull/539)
    *   **潜力分析**: 在 `quick_validate.py` 中增加预处理，防止未加引号的特殊字符破坏 YAML 解析，直接提升了元数据校验的健壮性。
*   **[PR #538] 修复 PDF Skill 中的文件引用路径大小写问题**
    *   **链接**: [PR #538](https://github.com/anthropics/skills/pull/538)
    *   **潜力分析**: 解决了在区分大小写的系统（如 Linux）上 PDF Skill 崩溃的问题，属于典型的关键路径 Bug 修复。
*   **[PR #509] 新增 CONTRIBUTING.md 社区贡献指南**
    *   **链接**: [PR #509](https://github.com/anthropics/skills/pull/509)
    *   **潜力分析**: 针对社区健康度指标仅 25% 的问题，补齐了开源仓库治理最重要的一环，为后续高质量的 PR 涌入奠定规范基础。

---

### 4. Skills 生态洞察
> **一句话总结：** 当前社区在 Skills 层面最集中的诉求是 **“从野蛮生长转向工程化治理”**——用户不再仅仅满足于功能性的 Skill（如生图、写文档），而是强烈呼唤官方提供**可靠的跨平台运行时环境、严谨的安全与命名空间边界、以及稳定的 Skill 触发与评估测试链**。

---

# Claude Code 社区动态日报 — 2026-06-10

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 今日速览

**Anthropic 发布 v2.1.170，重磅推出 Claude Fable 5 模型。** 这个被定义为 "Mythos 级别" 的新模型号称是 Anthropic 有史以来公开发布的最强能力模型。然而上线首日即引发社区大面积反馈：Fable 5 的安全分类器过于激进，频繁将合法的安全审计、渗透测试甚至纯学术问题误判为违规操作，强制降级到 Opus 4.8。大量用户在数小时内集中提交了相关 Issue。

---

## 2. 版本发布

### v2.1.170
- **新模型上线：** 引入 [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)，定位 Mythos 级别，声称超越此前所有公开模型的能力。
- **修复：** 修复了会话 (session) 相关问题。
- 发布说明非常简洁，未提供更多技术细节。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心问题 |
|---|-------|------|----------|
| 1 | [#26224](https://github.com/anthropics/claude-code/issues/26224) | 👍141 💬114 | Claude Code 大量提示词场景下挂起/冻结 5-20 分钟，长期未解决的老牌 Issue，社区愤怒持续累积。 |
| 2 | [#66339](https://github.com/anthropics/claude-code/issues/66339) | 💬4 | **后台 Agent 停不下来：** 用户明确停止后台 Agent 后，其"复活"并持续运行 21 小时，消耗 160k+ tokens，直接影响成本。 |
| 3 | [#66594](https://github.com/anthropics/claude-code/issues/66594) | 👍4 💬4 | **AWS Bedrock 兼容性问题：** 使用 Fable 5 时报错 `data retention mode 'default' is not available`，影响所有通过 Bedrock 接入的用户。 |
| 4 | [#66358](https://github.com/anthropics/claude-code/issues/66358) | 👍3 💬2 | **后台 Agent 守护进程升级导致认证失败：** 自动更新 2.1.168→2.1.169 后，control-key 版本不一致导致 `EAUTH: attach rejected`。暴露了自动更新的可靠性问题。 |
| 5 | [#66614](https://github.com/anthropics/claude-code/issues/66614) | 👍2 💬3 | **Fable 5 不支持 Opus 4.8 作为 Advisor：** API 报错 `claude-opus-4-8 cannot be used as an advisor when the request model is claude-fable-5`，模型组合存在架构限制。 |
| 6 | [#66680](https://github.com/anthropics/claude-code/issues/66680) | 💬1 | **Fable 5 安全分类器误判泛滥（Linux）：** 任何请求（复杂或简单）均被标记为不安全并强制切换到 Opus 4.8，CLI 上基本无法使用 Fable 5。 |
| 7 | [#66670](https://github.com/anthropics/claude-code/issues/66670) | 💬1 | **Fable 5 安全审查自动降级（macOS）：** 用户使用 Fable 5 进行预发布代码漏洞检查时，被强制切换到 Opus 4.8。与 #66680 为同一根本原因。 |
| 8 | [#66665](https://github.com/anthropics/claude-code/issues/66665) | 💬1 | **安全审查请求被判定为策略违规：** 用户请求安全审查被内容策略拦截，v2.1.153 上复现，说明此问题并非 v2.1.170 新引入。 |
| 9 | [#65687](https://github.com/anthropics/claude-code/issues/65687) | 💬6 | **Windows 平台闲置状态下 Token 持续消耗：** Claude Code 处于非活动状态时出现意外的 Token 使用量飙升，直接关系到用户成本。 |
| 10 | [#66441](https://github.com/anthropics/claude-code/issues/66441) | 👍1 💬1 | **v2.1.169 回归 Bug：** 从 Agent View 返回会话后鼠标光标消失（Windows Terminal），影响基本操作体验。 |

**💡 编辑评论：** 今日 Issue 的绝对主题是 **Fable 5 的安全分类器误判问题**。#66680、#66670、#66665、#66664、#66662 等至少 6 个 Issue 都指向同一根本原因——合法的安全审计、渗透测试、甚至纯理论物理问题被误判为违规。这已构成影响新模型可用性的 P0 级问题。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 作者 | 内容 |
|---|----|------|------|
| 1 | [#66607](https://github.com/anthropics/claude-code/pull/66607) | exodusubuntu-tech | **尝试修复 Fable 5 安全分类器误判：** 针对已授权的安全测试场景中自动切换到 Opus 的问题。由 REAPR 自动化修复工具提交。 |
| 2 | [#66608](https://github.com/anthropics/claude-code/pull/66608) | exodusubuntu-tech | **修复晶格规范理论问题的误判：** 纯学术物理问题被 Fable 5 安全系统错误拦截。同样由 REAPR 自动提交。 |
| 3 | [#66573](https://github.com/anthropics/claude-code/pull/66573) | sridhar-3009 | **修复 ralph-wiggum 插件错误处理失效：** `set -euo pipefail` 导致错误处理代码在执行前进程已退出，恢复死代码。 |
| 4 | [#66416](https://github.com/anthropics/claude-code/pull/66416) | wellkilo | **修复插件验证脚本在首个错误即中止：** 三个 validator 脚本因 `set -e` 在第一个发现项就终止，无法完整报告所有问题。 |
| 5 | [#66372](https://github.com/anthropics/claude-code/pull/66372) | MartinCajiao | **修复 DevContainer Docker 守护进程检测：** PowerShell 中原生命令的非零退出码不会抛异常，导致 catch 永远不触发，Docker 未运行时误报正常。 |
| 6 | [#66577](https://github.com/anthropics/claude-code/pull/66577) | sridhar-3009 | **同步 security-guidance 插件版本信息：** marketplace.json 与 plugin.json 版本和描述不一致（1.0.0 vs 2.0.0）。 |
| 7 | [#66575](https://github.com/anthropics/claude-code/pull/66575) | sridhar-3009 | **修正插件作者名称：** `pr-review-toolkit` 中作者名 "Daisy" 应为完整名 "Daisy Hollman"，保持与其他插件一致。 |
| 8 | [#66650](https://github.com/anthropics/claude-code/pull/66650) | sanidhyasin | **同上，另一个修复作者名的 PR：** 与 #66575 解决同一问题，可能需要协调避免重复。 |
| 9 | [#65286](https://github.com/anthropics/claude-code/pull/65286) | tianming-1996 | **为 plugin-dev 添加缺失的 plugin.json 清单：** 修复插件发现和安装机制不生效的问题。 |
| 10 | [#65619](https://github.com/anthropics/claude-code/pull/65619) | systemblueio | **修复 frontend-design 插件作者字段格式：** 单个 `author.name` 字段塞了两个作者名，`author.email` 包含逗号分隔的双地址，已关闭。 |

---

## 5. 功能需求趋势

从今日 Issues 和 PR 中提炼出以下社区关注方向：

### 🔴 模型安全策略与可用性（今日最热）
Fable 5 上线首日暴露的安全分类器过于保守问题占据了 Issue 板块的半壁江山。合法的代码安全审计、渗透测试、自托管管理任务甚至纯学术问题均被误判。社区需要更精细的安全策略控制，可能包括：
- 用户可配置的安全级别（如 "developer mode"）
- 针对已认证开发者的安全审计白名单
- 更透明的降级/切换机制和用户通知

### 🟠 成本透明度与控制
- 后台 Agent 复活消耗 160k+ tokens（[#66339](https://github.com/anthropics/claude-code/issues/66339)）
- 闲置状态下的意外 token 消耗（[#65687](https://github.com/anthropics/claude-code/issues/65687)）
- `/model` 和 `/effort` 全局写入 settings.json，无法为不同 Agent 独立配置（[#66402](https://github.com/anthropics/claude-code/issues/66402)）

### 🟡 多平台稳定性
- Windows 平台持续存在 UTF-8 编码问题（[#64777](https://github.com/anthropics/claude-code/issues/64777)）
- VSCode 扩展 config probe 超时（[#60045](https://github.com/anthropics/claude-code/issues/60045)）
- macOS Workspace Trust 审批阻断（[#57276](https://github.com/anthropics/claude-code/issues/57276)）

### 🟢 插件生态成熟度
社区贡献的 PR 集中在插件基础设施修复（清单文件缺失、作者信息不一致、验证脚本行为异常），表明插件系统仍在快速迭代中，需要更好的开发工具和规范。

---

## 6. 开发者关注点总结

| 痛点 | 影响面 | 紧急度 |
|------|--------|--------|
| **Fable 5 安全分类器误判** | 所有升级到 v2.1.170 的用户，尤其是安全工程师 | 🔴 P0 |
| **Claude Code 挂起/冻结**（[#26224](https://github.com/anthropics/claude-code/issues/26224)，141👍/114评论） | 大量用户的日常工作流被阻塞，长期未解决 | 🔴 P0 |
| **后台 Agent 无法可靠停止** | 使用 Agent/Fleet 功能的用户面临不可控的成本风险 | 🟠 P1 |
| **AWS Bedrock 兼容性** | 通过 Bedrock 接入的 enterprise 用户无法使用新模型 | 🟠 P1 |
| **Advisor 模型组合限制** | Fable 5 + Opus 4.8 Advisor 组合不可用，影响复杂任务编排 | 🟠 P1 |
| **自动更新导致认证失败**（[#66358](https://github.com/anthropics/claude-code/issues/66358)） | 后台 Agent 守护进程升级后 control-key 版本不一致 | 🟡 P2 |
| **长会话日期漂移**（[#66604](https://github.com/anthropics/claude-code/issues/66604)） | 跨日长会话中 AI 输出的时间指代不准确 | 🟡 P2 |
| **Per-Agent 配置缺失** | Fleet 场景下无法为不同 Agent 设置不同模型/effort | 🟡 P2 |

**📊 本日数据概览：** Issues 更新 50 条（新提交约 20+ 条）| PR 更新 12 条 | Fable 5 相关 Issue 占比约 35%

---

*本日报由技术分析师基于 GitHub 公开数据整理，仅供参考。欢迎在社区参与讨论和贡献。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 📰 OpenAI Codex 社区动态日报 (2026-06-10)

> 数据来源: [github.com/openai/codex](https://github.com/openai/codex)

## 1. 今日速览

🚨 **GPT-5.5 模型大面积瘫痪引发社区强烈反响**，大量用户在 CLI 和 Desktop 环境中遭遇 `404 Model not found` 错误，成为今日最热门 Bug。
🛠️ **底层架构与安全显著升级**，开发团队推进了基于 `Noise` 协议的执行服务器重构、Windows 凭据加密增强、以及 TUI 插件市场远程化支持。
🔄 **上下文与会话管理问题频发**，包括日志无限膨胀、压缩失败以及本地状态丢失，凸显了在大上下文窗口下状态管理的稳定性挑战。

---

## 2. 版本发布

今日共有多个 v0.139.0 相关版本发布，包含重要的新特性和平台改进：

- **[rust-v0.139.0](https://github.com/openai/codex/releases/tag/rust-v0.139.0)**
  - **新增独立 Web 搜索**：在 Code mode 下，现在支持直接从嵌套的 JavaScript 工具调用中发起独立的 Web 搜索，并获取纯文本结果。
  - **Schema 结构优化**：工具和连接器的输入 Schema 现在支持保留 `oneOf` 和 `allOf`。在压缩大型 Schema 时，保持了更浅的结构层级，提升了复杂工具的调用稳定性。

- **[rust-v0.138.0](https://github.com/openai/codex/releases/tag/rust-v0.138.0)**
  - **Desktop 生态打通**：`/app` 命令现在可以将当前的 CLI 线程直接移交至 macOS 和原生 Windows 上的 Codex Desktop。
  - **Windows 体验优化**：Windows 工作区启动时可直接打开 Desktop 应用，省去了手动提示的中间环节。

---

## 3. 社区热点 Issues

以下是近期社区讨论最热烈、影响面最广的 10 个 Issue：

1. **🚨 GPT-5.5 模型 404 错误 (全网爆发)**
   - 链接: [#26892](https://github.com/openai/codex/issues/26892)
   - 概况: 创建于 6 月 7 日，已积累 **79 条评论**。本地元数据可见 `gpt-5.5`，但实际请求后端返回 404。目前各个平台（CLI、macOS、Windows）均有用户集中反馈，证实这是一个普遍的后端/路由故障。

2. **强烈呼唤“撤销” (/undo) 功能回归**
   - 链接: [#9203](https://github.com/openai/codex/issues/9203)
   - 概况: 高达 **274 个 👍**。开发者表示 Codex 在未接入 Git 的项目中误删或误改文件会导致无法挽回的后果，`/undo` 功能是保障代码安全的刚需。

3. **Windows 沙箱环境启动刷新失败**
   - 链接: [#24391](https://github.com/openai/codex/issues/24391)
   - 概况: 针对 v0.133.0 的 Windows 核心缺陷（**25 个 👍**），Shell 命令执行因此受阻，严重影响了 Windows 用户的正常使用。

4. **Desktop 历史聊天记录离奇消失**
   - 链接: [#20741](https://github.com/openai/codex/issues/20741)
   - 概况: 更新 Desktop 应用后，长对话记录不翼而飞（**31 条评论**），涉及状态持久化机制引发用户对数据安全的担忧。

5. **Context Compaction (上下文压缩) 报错 `invalid_enum_value`**
   - 链接: [#26493](https://github.com/openai/codex/issues/26493)
   - 概况: 长上下文场景下触发自动压缩时报错。表明前后端在处理超长对话时的状态同步存在问题。

6. **Session 日志暴增至 700MB-2GB，引发 OOM 崩溃**
   - 链接: [#24948](https://github.com/openai/codex/issues/24948) & [#18041](https://github.com/openai/codex/issues/18041)
   - 概况: 由于反复保存压缩历史和原始工具输出，日志出现无限膨胀，甚至导致 WSL 系统整体崩溃，严重影响系统稳定性。

7. **Android 扫码配对死循环**
   - 链接: [#23122](https://github.com/openai/codex/issues/23122)
   - 概况: Android/ColorOS 扫描 Codex Mobile 设置的二维码后，无法正确路由至 ChatGPT App，导致多端联动功能瘫痪。

8. **Windows 下 Codex 无法唤醒 JetBrains IDEA**
   - 链接: [#13937](https://github.com/openai/codex/issues/13937)
   - 概况: 限制了使用 JetBrains 全家桶开发者的工作流连贯性。

9. **Codex 自我吞噬日志导致 Token 失控增长**
   - 链接: [#27131](https://github.com/openai/codex/issues/27131)
   - 概况: 在排查 Token 使用情况时，Codex 意外读取了本地的会话 JSONL 日志作为输入，导致 Token 消耗呈螺旋式上升。

10. **跨区/跨云模型路由异常 (巴西/Bedrock)**
    - 链接: [#26916](https://github.com/openai/codex/issues/26916) & [#26860](https://github.com/openai/codex/issues/26860)
    - 概况: 巴西地区用户遭遇 404；同时 Amazon Bedrock 托管的模型在执行期间自动中断，说明不同区域和云环境的路由策略尚不稳定。

---

## 4. 重要 PR 进展

底层核心能力正在快速迭代，今日以下 PR 展示了明确的技术发展方向：

1. **执行服务器大重构：引入 Noise 协议栈**
   - 链接: PR [#26239](https://github.com/openai/codex/pull/26239), [#26240](https://github.com/openai/codex/pull/26240) 等 7 个 PR 组成的 Stack
   - 意义: 正在彻底重写执行服务器的通信层。引入 `Noise Protocol` 建立安全信道，优化编解码与传输层，这将极大提升 CLI 和远程执行环境的安全性与并发性能。

2. **TUI 插件系统支持远程市场**
   - 链接: PR [#26701](https://github.com/openai/codex/pull/26701), [#26702](https://github.com/openai/codex/pull/26702), [#26703](https://github.com/openai/codex/pull/26703), [#26705](https://github.com/openai/codex/pull/26705)
   - 意义: Codex TUI 正在从仅支持本地插件向**远程插件市场** 过渡，标志着插件生态正在快速成型。

3. **修复 Windows 凭据管理 2560 字节限制**
   - 链接: PR [#17931](https://github.com/openai/codex/pull/17931)
   - 意义: 通过引入加密本地密钥机制，解决了大体积 OAuth Token 在 Windows Credential Manager 中存储失败的问题，改善了企业级用户的鉴权稳定性。

4. **明确 Guardian 安全审查的错误提示**
   - 链接: PR [#27252](https://github.com/openai/codex/pull/27252)
   - 意义: 将“安全策略拒绝”与“Guardian 系统故障导致的无法审查”区分开，让开发者能准确判断是被风控拦截还是系统异常。

5. **优化前端实时模型与后台消息流**
   - 链接: PR [#27116](https://github.com/openai/codex/pull/27116) (已关闭), [#27127](https://github.com/openai/codex/pull/27127) (进行中)
   - 意义: 重构实时语音和前端模型的消息路由，避免原始输入被重复发送，保证无论会话由谁发起，UI 都能获得统一的面向用户的最终结果。

6. **增强 PowerShell 沙箱安全校验**
   - 链接: PR [#24092](https://github.com/openai/codex/pull/24092)
   - 意义: 修复了 PowerShell 命令解析器的绕过漏洞，阻止恶意的 `param(...)` 块伪装成安全命令执行。

7. **Guardian 诊断元数据添加**
   - 链接: PR [#27109](https://github.com/openai/codex/pull/27109)
   - 意义: 在 API 请求中附加模型目录信息，用于排查自动代码审查 功能降级或回退的根因。

---

## 5. 功能需求趋势

从近期 Issues 和 PR 中，可以提炼出以下 4 个明确的社区功能诉求方向：

- **更完善的“安全网”机制**：开发者强烈需要更强大的本地状态容错能力。包括 `Undo/Redo` 功能（避免误操作灾难）、导出会话的能力（备份与迁移）、以及断电/崩溃时的状态防丢失机制。
- **Git 与工作流深度整合**：希望 Codex 能更智能地理解 Git 仓库状态，比如区分已追踪和未追踪文件，避免在未提交更改时盲目修改代码。
- **多 IDE 的无缝支持**：除了目前的 VS Code，社区呼唤对 JetBrains 全家桶以及 Cursor 等 AI IDE 的原生支持和更好的集成。
- **企业级鉴权与跨云部署**：随着 Codex 进入企业，对 Bedrock 等第三方云托管模型的支持、复杂的 OAuth 鉴权管理、以及 Token 配额控制的需求正在激增。

---

## 6. 开发者关注点 (痛点总结)

1. **GPT-5.5 模型稳定性堪忧**：这不仅是模型能力的升级，更是路由、鉴权和后端可用性的大考。频繁的 404 和中断严重打击了开发者将 Codex 接入核心业务流程的信心。
2. **上下文管理面临“破窗效应”**：随着上下文窗口越来越大，相关的内存占用、日志膨胀、压缩失败问题集中爆发。系统需要更智能的内存调度和垃圾回收机制。
3. **Windows 平台体验仍待打磨**：从凭据存储限制、沙箱报错到 GUI 唤醒 IDE 失败，Windows 上的开发体验碎片化严重，是目前负面反馈的重灾区。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 🤖 Gemini CLI 社区动态日报 (2026-06-10)

> 日期：2026-06-10 | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 1. 📌 今日速览

今天 Gemini CLI 迎来了密集的版本迭代与底层能力优化，官方同时发布了 `v0.45.3` 稳定版、`v0.46.0-preview.3` 预览版以及 `v0.47.0-nightly` 夜间版，核心聚焦于修复 Vertex AI 模型映射错误。社区方面，**智能体稳定性**与**内存系统安全**成为焦点，多个高优先级（P1）Issue 指出子代理挂起、思考时间过长以及 Shell 执行卡死等核心执行链路问题。此外，开发者贡献了多个关键的安全性修复与 MCP 工具链增强 PR。

---

## 2. 🚀 版本发布

过去 24 小时内官方发布了 3 个版本，核心是修复跨授权类型的模型路由问题：

- **v0.45.3 (Stable)** & **v0.46.0-preview.3 (Preview)**：
  - **核心修复**：Cherry-pick 了提交 `f08b4af`，修复了 Vertex AI 模型映射错误（原 Pull Request: [#27749](https://github.com/google-gemini/gemini-cli/pull/27749)）。针对 `gemini-3.5-flash` 模型在特定授权（如 `LOGIN_WITH_GOOGLE` 和 `COMPUTE_ADC`）下的路由失败问题进行了重构。
  - 链接：[v0.45.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3) | [v0.46.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3)
- **v0.47.0-nightly.20260609 (Nightly)**：
  - **UI 调整**：更新了 "Antigravity" 过渡横幅的最大显示次数。
  - **文档更新**：移除了浏览器代理文档中的 "experimental" 实验性文本描述。
  - 链接：[v0.47.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260609.g0567b25a2)

---

## 3. 🔥 社区热点 Issues (Top 10)

以下筛选了近期社区讨论热烈且对开发体验影响最大的 Issue：

1. **Generalist agent 无限挂起 (P1 Bug)**
   - **地址**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (👍 8)
   - **简评**：核心痛点。当主代理将任务委派给 `generalist agent` 时会无限期挂起（甚至简单的创建文件夹操作也会卡死）。这严重影响了自动化工作流，社区目前只能通过提示词禁止使用子代理来规避。
2. **Agent 达到 MAX_TURNS 却误报 GOAL 成功 (P1 Bug)**
   - **地址**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
   - **简评**：可靠性问题。子代理在达到最大交互轮次限制中断时，错误地将状态报告为 `"success"`，导致真实的报错信息被掩盖。
3. **Shell 命令执行完毕后卡死在 "Waiting input" (P1 Bug)**
   - **地址**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (👍 3)
   - **简评**：终端交互痛点。CLI 执行完简单的 Shell 命令后，TUI 依然显示命令处于活动状态并等待输入，导致流程无法继续，需要手动干预。
4. **模型思考时间过长 (Thinking Bug)**
   - **地址**：[#27766](https://github.com/google-gemini/gemini-cli/issues/27766)
   - **简评**：今日新增反馈。模型在处理仅需 1-2 分钟的任务时，卡在 "Thinking" 状态超过 7 分钟，响应速度成为核心瓶颈。
5. **Auto Memory 系统存在安全与重试缺陷 (P2 Bug)**
   - **地址**：[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) & [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
   - **简评**：安全与性能双杀。背景提取代理在处理内存前未实现确定性的机密信息脱敏；且对于低信噪比的会话，系统会无限重试读取，浪费 Token 与资源。
6. **Gemini 未充分利用自定义 Skills 和 Sub-agents (P2 Bug)**
   - **地址**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
   - **简评**：路由机制不够智能。即便配置了高度相关的自定义 Skills（如 gradle、git），模型在执行相关任务时依然倾向于自己硬解，而非调用代理。
7. **Browser Agent 在 Wayland 下失败 (P1 Bug)**
   - **地址**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
   - **简评**：Linux 桌面兼容性问题。Wayland 环境下 Browser 子代理运行直接失败，限制了 Linux 生态开发者的浏览器自动化能力。
8. **自定义 Skill 安装存在路径遍历漏洞 (安全)**
   - **地址**：[#27767](https://github.com/google-gemini/gemini-cli/pull/27767) (关联修复 PR)
   - **简评**：高危安全漏洞。在安装、链接和卸载代理技能时，CLI 解析器未能有效校验路径，允许攻击者通过特制的 Frontmatter 实现目录穿越。
9. **工具数量 > 128 时触发 400 错误 (P2 Bug)**
   - **地址**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
   - **简评**：高级玩家痛点。挂载过多 MCP 工具后，底层 API 请求由于工具数量过载直接报错，说明当前工具作用域管理策略亟待优化。
10. **探索引入 AST 感知工具提升代码读写精确度 (Feature)**
    - **地址**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (👍 1)
    - **简评**：架构演进方向。社区正在评估引入 AST（抽象语法树）感知的文件读取和搜索工具，以减少模型在读取代码时的 Token 噪声和对齐错误，从而大幅提升代理的编码效率。

---

## 4. 🛠 重要 PR 进展 (Top 10)

1. **[修复] Vertex AI 模型映射重构**
   - **PR**：[#27760](https://github.com/google-gemini/gemini-cli/pull/27760) & [#27749](https://github.com/google-gemini/gemini-cli/pull/27749)
   - **内容**：修复了授权分支判断逻辑，确保所有认证方式（包括 Vertex AI）都能正确路由并接受 `gemini-3.5-flash` 模型 ID。
2. **[安全] 全面缓解 Agent Skill 路径遍历漏洞**
   - **PR**：[#27767](https://github.com/google-gemini/gemini-cli/pull/27767)
   - **内容**：重写了 `installSkill`、`linkSkill` 和 `uninstallSkill` 逻辑，彻底修复了通过恶意构建的文件路径进行目录穿越攻击的风险。
3. **[内部测试] 支持 Gemini 3.5 Flash 与 3.1 Flash Lite GA**
   - **PR**：[#27705](https://github.com/google-gemini/gemini-cli/pull/27705)
   - **内容**：重量级底层更新。统一了模型发布线，将旧版预览模型替换为稳定版 `gemini-3.1-flash-lite`，并正式整合 `gemini-3.5-flash` 支持。
4. **[优化] MCP 工具注册的原子更新**
   - **PR**：[#27619](https://github.com/google-gemini/gemini-cli/pull/27619)
   - **内容**：修复了瞬态网络故障时，MCP 工具刷新导致的 "tool not found" 错误。通过原子更新模式确保工具注册表在刷新期间保留上一次的有效状态。
5. **[修复] 零配额快速失败防止死循环**
   - **PR**：[#27698](https://github.com/google-gemini/gemini-cli/pull/27698)
   - **内容**：修复了免费账户配额为 0 时，CLI 会陷入长达 10 次无效重试循环并导致挂起的问题。现在系统会立即 Fail Fast 报错。
6. **[优化] 避免持久化空会话**
   - **PR**：[#27770](https://github.com/google-gemini/gemini-cli/pull/27770)
   - **内容**：优化了 `/resume` 逻辑，过滤掉空会话和仅输入了启动命令就退出的无用会话，让会话恢复列表更清爽。
7. **[重构] 标准化外部工具输出格式**
   - **PR**：[#27772](https://github.com/google-gemini/gemini-cli/pull/27772)
   - **内容**：引入 `wrapUntrusted` 辅助函数，统一了 `mcp-tool`、`shell`、`web-fetch` 等外部工具返回给 LLM 的文本结构，提升模型解析稳定性。
8. **[修复] 过滤历史记录中的内部 Session 上下文**
   - **PR**：[#27391](https://github.com/google-gemini/gemini-cli/pull/27391)
   - **内容**：修复了恢复会话时，包含系统环境变量的内部 `<session_context>` XML 块被错误展示在终端界面的问题。
9. **[修复] A2A Server 响应挂起**
   - **PR**：[#27754](https://github.com/google-gemini/gemini-cli/pull/27754)
   - **内容**：在 `/tasks/metadata` 端点发送 501 响应后补充了缺失的 `return;` 语句，修复了导致 A2A 服务器崩溃的 `ERR_HTTP_HEADERS_SENT` 错误。
10. **[修复] MCP Header 非 ASCII 字符编码问题**
    - **PR**：[#27771](https://github.com/google-gemini/gemini-cli/pull/27771)
    - **内容**：修复了配置的 HTTP Header 包含非 ASCII 字符（如 Unicode 文本）时导致 MCP 发现失败的问题。

---

## 5. 📈 功能需求趋势

从近期 Issue 及 PR 的标签和讨论中，可以明显观察到以下几个演进方向：

1. **新一代模型适配与路由优化**：项目正全力拥抱 `Gemini 3.5 Flash` 及 `3.1 Flash Lite`，核心围绕跨授权类型（Vertex、AI Studio）的路由精准度进行重构。
2. **内存与上下文系统重构**：`Auto Memory` 功能的受关注度急剧上升，社区致力于解决内存提取过程中的无限重试、低信噪比以及敏感数据脱敏问题。
3. **底层代码理解能力升级（AST）**：从基于正则和纯文本的文件搜索，逐渐向 AST 感知工具（如 AST grep）演进，目的是减少 Token 损耗，提升对复杂代码库的一次性读写准确率。
4. **安全与健壮性建设**：针对技能安装的路径遍历攻击防范、MCP 工具的原子状态更新，表明项目正在从"功能可用"向"企业级安全可靠"过渡。

---

## 6. 💡 开发者关注点与痛点

综合用户反馈，目前技术开发者在使用 Gemini CLI 时集中面临以下痛点：

- **Agent 执行流极度不稳定**：子代理无响应挂起、达到限制后误报成功、以及 Shell 命令等待状态卡死，是当前破坏沉浸式开发体验的最大元凶。
- **模型思考性价比问题**：开发者对模型陷入长达数分钟的 "Thinking" 状态感到沮丧。对于简单的 CLI 操作，开发者期望的是毫秒级或秒级的极速响应。
- **自定义工具调用率低**：花费时间配置的 MCP 服务器和自定义 Skills 被模型"视而不见"，模型更倾向于使用内建工具或自己生成临时的 Shell 脚本。
- **错误提示不透明**：例如遇到文件超过 20MB 限制、或是遇到零配额限制时，系统缺少直观的文档和错误提示，导致排查困难（需通过 PR #27763 补充文档才得以缓解）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-10)

## 1. 今日速览
昨日，GitHub Copilot CLI 发布了 `v1.0.61` 版本，主要带来了全新的交互式 `/settings` 对话框，并优化了代理选择器的 UI 体验。同时，社区对近期版本中默认启用 Git Worktree 引发了激烈的讨论，不少开发者抱怨这导致了严重的代码合并问题。此外，昨天新提交的 Issue 集中爆发了对底层工具字符编码（UTF-8损坏/丢失）、MCP 连接复用以及内部网络访问受限的担忧。

## 2. 版本发布
- **[v1.0.61](https://github.com/github/copilot-cli/releases/tag/v1.0.61)** (发布于 2026-06-09)
  - **UI 优化**：重构了 `/agents` 选择器和创建新代理向导，统一了边框、页眉和输入框的样式。
  - **新功能**：新增 `/settings` 交互式对话框，支持在一个界面中浏览和编辑所有用户配置。
  - **Bug 修复**：修复了恢复会话时可能导致屏幕空白的问题；改善了本地会话恢复机制。

## 3. 社区热点 Issues
以下是过去 24 小时内最值得关注的 10 个 Issue：

1. **[Bring back the GitHub Copilot in the CLI commands to not break workflows #53](https://github.com/github/copilot-cli/issues/53)** 
   - **状态**: Open | **👍**: 75 | **评论**: 31
   - **关注理由**: 这是一个长达数月的超级热点。由于官方迟迟未恢复某些旧的 CLI 工作流，社区已经被迫开始自行开发替代方案（如 `shell-ai`）。这反映了开发者对生产力中断的严重不满。
2. **[Copilot CLI does not list all org-enabled models #1703](https://github.com/github/copilot-cli/issues/1703)**
   - **状态**: Open | **👍**: 54 | **评论**: 29
   - **关注理由**: 模型支持不一致的顽疾。同一个组织账户下，VS Code 能看到 Gemini 3.1 Pro 等模型，但 CLI 却无法列出，严重制约了 CLI 端的 AI 能力。
3. **[Error loading model list: Error: Not authenticated #3596](https://github.com/github/copilot-cli/issues/3596)**
   - **状态**: Open | **👍**: 10 | **评论**: 3
   - **关注理由**: 高频故障。恢复旧会话时模型列表加载失败并报认证错误，而新建会话则一切正常，说明会话状态管理中的鉴权逻辑存在缺陷。
4. **[Worktrees are nightmare, should be disabled by default #2243](https://github.com/github/copilot-cli/issues/2243)**
   - **状态**: Open | **👍**: 8 | **评论**: 2
   - **关注理由**: 破坏性更新反馈。CLI 在处理任务时默认使用 Git worktree，导致生成了大量代码却因 Git 冲突无法合并回主工作树。社区强烈建议默认禁用此功能。
5. **[Built-in git worktree lifecycle management #1613](https://github.com/github/copilot-cli/issues/1613)**
   - **状态**: Open | **👍**: 31 | **评论**: 2
   - **关注理由**: 与上一个 Issue 相呼应，社区提出需要一套完善的 Worktree 生命周期管理机制，让 AI 能够安全、干净地在独立树中工作并自动清理。
6. **[ctrl+shift+c no longer copies to clipboard on Linux #2082](https://github.com/github/copilot-cli/issues/2082)**
   - **状态**: Open | **👍**: 8 | **评论**: 20
   - **关注理由**: 基础体验受损。在 Ubuntu 等 Linux 环境下，v1.0.4 之后版本劫持或破坏了系统原生的快捷键复制功能。
7. **[Allow option to restore web_fetch access to private networks #3731](https://github.com/github/copilot-cli/issues/3731)**
   - **状态**: Open | **👍**: 0 | **评论**: 0
   - **关注理由**: 企业级用户的痛点。v1.0.60 出于安全考虑阻断了内网访问，导致企业内部托管的 Agent 模板和标准文件直接失效。
8. **[Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected #3727](https://github.com/github/copilot-cli/issues/3727)**
   - **状态**: Open | **👍**: 0 | **评论**: 0
   - **关注理由**: 严重的回归 Bug。v1.0.60 破坏了 Plugins 的 Hook 注入机制，导致依赖此接口的代理规划器上下文丢失。
9. **[Bash tool drops non-ASCII characters due to LC_CTYPE=C #3601](https://github.com/github/copilot-cli/issues/3601)**
   - **状态**: Open | **👍**: 0 | **评论**: 1
   - **关注理由**: 国际化致命 Bug。底层 Bash 工具强制使用了极其严苛的字符集环境变量，导致中文、日文、韩文及 Emoji 等非 ASCII 字符在执行命令时被直接静默剥离。
10. **[edit tool corrupts non-UTF-8 bytes #3732](https://github.com/github/copilot-cli/issues/3732)**
    - **状态**: Open | **👍**: 0 | **评论**: 0
    - **关注理由**: 数据损坏风险。内置的 `edit` 工具在处理非标准 UTF-8 编码（如老项目的 CP1252 编码）时，会用占位符粗暴替换，导致文件静默损坏。

*(注：其他值得注意的还包括 MCP 注册表 URL 构造错误 [#3436](https://github.com/github/copilot-cli/issues/3436) 和 Windows 端 MCP 进程失控疯转问题 [#3701](https://github.com/github/copilot-cli/issues/3701))*

## 4. 重要 PR 进展
过去 24 小时内，仓库**无任何新的 Pull Request 或已有 Pull Request 的状态更新**。结合昨日密集的 Bug 报告（尤其是 v1.0.60 的回归问题），官方目前的 Public 开发活跃度似乎较低，社区修复进度有待观察。

## 5. 功能需求趋势
分析近期 Issue，当前社区最关注的功能演进方向如下：
- **MCP (Model Context Protocol) 生态稳定性**：包括远程 MCP 的 OAuth 认证风暴、自定义注册表 URL 路径错误、配置加载失败等。MCP 的企业级应用正处于阵痛期。
- **底层运行环境与字符集兼容性**：随着 Copilot CLI 被用于更广泛的场景，其对 Windows/Linux 环境原生快捷键的尊重、以及多语言字符集（UTF-8 / 非 ASCII）的正确处理需求急剧上升。
- **跨客户端模型与企业级对齐**：CLI 表现出与 VS Code 客户端严重的功能不一致（如企业自定义模型、OAuth 端点不可见等），打通全端体验是企业用户的强烈诉求。
- **Agent 会话与状态管理**：本地 Session 在跨设备共享、长会话恢复、以及鉴权状态持久化方面存在明显短板，亟需架构层面的优化。

## 6. 开发者关注点 (痛点总结)
- **"喧宾夺主"的破坏性自动化**：开发者反感 CLI 自作主张的行为（如强制创建难以合并的 Worktree，或拦截系统级快捷键如 `Ctrl+Shift+C`、缩放指令）。
- **编码与数据完整性**：多个 Issue 指出工具链（Bash、Edit tool、Clipboard）在处理特殊字符或旧编码时存在静默丢弃或数据损坏现象，这对代码生成工具来说是不可接受的致命伤。
- **被封锁的内网请求**：新版本一刀切的安全策略（阻断内网请求）导致内网私有化部署的 Agent 出现大面积故障，开发者迫切需要白名单或配置豁免机制。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-10)

## 1. 今日速览
过去 24 小时内，Kimi Code CLI 社区整体趋于平静，暂无新版本发布或代码合并进展。社区新增一条关于核心功能报错的高优先级 Bug 反馈，涉及最新版在 Debian 环境下搭配 k2.6 模型运行时 `Edit` 工具的稳定性问题。建议开发者在近期更新至 v0.12.0 后密切关注文件编辑相关的操作日志。

## 2. 版本发布
过去 24 小时内无新增 Release 版本。

## 3. 社区热点 Issues
由于今日数据源中仅有 1 条处于活跃状态的 Issue，以下为今日唯一且最值得关注的动态：

- **[#2443 [bug] Edit tool keeps failing in new kimi-code](https://github.com/MoonshotAI/kimi-cli/issues/2443)**
  - **核心内容**：开发者在 Debian 系统上使用 Kimi Code v0.12.0 配合最新的 k2.6 模型时，发现内置的 `Edit`（代码编辑）工具频繁调用失败。
  - **重要性**：代码编辑是 AI CLI 工具最核心的基础能力之一，该 Bug 直接影响 v0.12.0 版本在特定环境下的可用性。目前该 Issue 暂无官方回复，需密切关注后续进展。

## 4. 重要 PR 进展
过去 24 小时内，仓库暂无活跃的 Pull Requests 更新。

## 5. 功能需求趋势
根据今日的 Issue 动态分析，当前社区的关注焦点集中在：
- **核心工具稳定性**：开发者对 AI 自动编写/修改代码的准确性要求极高，基础工具（如 Edit tool）的异常抛出或静默失败是当前最主要的痛点。
- **跨平台兼容性及新模型适配**：随着新模型（如 k2.6）的推出，CLI 底层在不同操作系统（特别是 Linux/Debian 环境）下的指令执行稳定性面临考验。

## 6. 开发者关注点
- **基础工作流中断**：开发者在使用最新版 CLI 时，常因底层工具链报错导致任务中断。建议在官方修复该 Edit 工具的 Bug 前，涉及大批量文件重构或修改的任务谨慎依赖全自动执行。
- **错误日志可读性**：从反馈中可以看出，用户期望在工具调用失败时，CLI 能够提供更清晰、更具上下文的错误输出，以便快速定位是模型意图问题还是系统权限/环境问题。

---
*数据来源：github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 📰 OpenCode 社区动态日报 (2026-06-10)

> 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. 今日速览
过去 24 小时内，OpenCode 项目无新版本发布，但社区保持了极高的活跃度。**内存泄漏**与**开发提示词质量**问题引发了大量开发者吐槽，成为今日核心痛点；核心团队则正致力于底层架构重构，提交了多个涉及**模型推理优化、文件系统搜索统一及 ACP 客户端兼容**的重要 PR。

## 2. 版本发布
**过去 24 小时内无新版本发布。**

---

## 3. 社区热点 Issues (Top 10)

1. **[#20695] 内存泄漏综合讨论**
   - **链接**：[anomalyco/opencode Issue #20695](https://github.com/anomalyco/opencode/issues/20695)
   - **关注原因**：长期悬而未决的核心痛点。官方明确呼吁“不要让 LLM 帮你提修复方案”，并引导开发者提交 Heap Snapshots 以协助团队定位底层垃圾回收问题。
   - **社区反应**：评论数高达 91 条，点赞 64 个，反映内存管理是广大用户的最高优痛点。

2. **[#2072] 支持 Cursor CLI**
   - **链接**：[anomalyco/opencode Issue #2072](https://github.com/anomalyco/opencode/issues/2072)
   - **关注原因**：随着 Cursor 发布其官方 CLI，社区强烈希望 OpenCode 能够打破生态壁垒，接入 Cursor 的 API 提供支持。
   - **社区反应**：点赞数高达 183，评论 70 条，是呼声最高的外部集成需求。

3. **[#27167] [FEATURE] 新增 `/goal` 原生会话目标**
   - **链接**：[anomalyco/opencode Issue #27167](https://github.com/anomalyco/opencode/issues/27167)
   - **关注原因**：旨在为长上下文的 Agent 交互提供持久的生命周期管理，防止 Agent 偏离初始任务目标。
   - **社区反应**：点赞 66，评论 38，反映了开发者对提升 Agent 自主性和专注度的迫切需求。

4. **[#31498] 极其糟糕的开发者提示词**
   - **链接**：[anomalyco/opencode Issue #31498](https://github.com/anomalyco/opencode/issues/31498)
   - **关注原因**：尽管开发者认可 OpenCode 是市面上极佳的工具，但无情批评了当前内置的 System Prompt（Dev Prompt），认为其导致 Agent 陷入过度思考、执行过于保守。
   - **社区反应**：引发大量共鸣，直指 AI 工具“可用性”和“指令遵循”的核心体验问题。

5. **[#28567] [FEATURE] 完整的 MCP 客户端能力支持**
   - **链接**：[anomalyco/opencode Issue #28567](https://github.com/anomalyco/opencode/issues/28567)
   - **关注原因**：OpenCode 目前的 MCP（Model Context Protocol）实现落后于最新规范，开发者呼吁跟进最新标准。
   - **社区反应**：点赞 19，是底层架构能力扩展的重要风向标。

6. **[#31525] Prompt 缓存失效导致费用激增**
   - **链接**：[anomalyco/opencode Issue #31525](https://github.com/anomalyco/opencode/issues/31525)
   - **关注原因**：代码逻辑缺陷导致每次提示词循环都会重新从 DB 加载所有消息，破坏了 Anthropic 等模型的 Prompt Cache 字节级身份识别，直接导致用户 API 成本大幅上升。

7. **[#906] [FEATURE] 支持粘贴图片**
   - **链接**：[anomalyco/opencode Issue #906](https://github.com/anomalyco/opencode/issues/906)
   - **关注原因**：目前仅支持拖拽上传，社区强烈希望能像主流 Chat UI 一样直接 `Ctrl+V` 粘贴截图（如 Excalidraw 图表），提升交互体验。

8. **[#13984] CLI 环境下无法复制粘贴**
   - **链接**：[anomalyco/opencode Issue #13984](https://github.com/anomalyco/opencode/issues/13984)
   - **关注原因**：影响基础工作的阻塞性 Bug，系统显示已复制但实际无法粘贴，严重影响终端用户的代码提取效率。

9. **[#26508] & [#28226] ZEN 支付欺诈争议**
   - **链接**：[Issue #26508](https://github.com/anomalyco/opencode/issues/26508) | [Issue #28226](https://github.com/anomalyco/opencode/issues/28226)
   - **关注原因**：多位用户反馈在订阅 GO 计划时，UI 流程误导向导致错买 ZEN 计划且无法退款。这是亟需官方介入处理的商务与用户体验危机。

10. **[#14195] 并发子任务执行变为串行**
    - **链接**：[anomalyco/opencode Issue #14195](https://github.com/anomalyco/opencode/issues/14195)
    - **关注原因**：LLM 返回的多个并行 Tool Call 在代码层面被错误地 `await` 执行，严重拖慢了复杂任务的执行速度。

---

## 4. 重要 PR 进展 (Top 10)

1. **[#31566] 重构：统一文件系统搜索服务**
   - **链接**：[PR #31566](https://github.com/anomalyco/opencode/pull/31566)
   - **内容**：核心团队主导。用统一的基于 `cwd` 的 Search 服务替换了遗留搜索引擎，优化了 Ripgrep 缓存策略，提升代码搜索和自动补全的响应速度。

2. **[#31570] 功能：基于 models.dev 动态生成推理变体**
   - **链接**：[PR #31570](https://github.com/anomalyco/opencode/pull/31570)
   - **内容**：彻底移除了约 500 行硬编码的模型推理配置表，改为解析 `models.dev` 的 `reasoning_options` 字段，大幅提升了新模型（如各类 Claude/GPT 级别）的适配效率。

3. **[#31392] 功能：ACP 客户端原生 Review 支持**
   - **链接**：[PR #31392](https://github.com/anomalyco/opencode/pull/31392)
   - **内容**：使 OpenCode 能够在 Zed 和 Devin 等 Agent 协作客户端中暂存代码修改，完美对接其原生的代码审查 UI。

4. **[#30957] 修复：Bedrock 临时凭证过期导致的崩溃**
   - **链接**：[PR #30957](https://github.com/anomalyco/opencode/pull/30957)
   - **内容**：修复了使用 AWS SAML/SSO 登录时，60分钟后 STS 凭证过期而 SDK 缓存未刷新导致的认证失败问题。

5. **[#29447] 功能：允许 Task 工具覆盖模型**
   - **链接**：[PR #29447](https://github.com/anomalyco/opencode/pull/29447)
   - **内容**：为 Task（子任务）增加了 `model` 参数，主 Agent 现在可以在运行时为特定子任务指定轻量级或特定用途的模型，优化资源调度。

6. **[#30509] & [#30508] 修复：权限系统“死循环”弹窗**
   - **链接**：[PR #30509](https://github.com/anomalyco/opencode/pull/30509) | [PR #30508](https://github.com/anomalyco/opencode/pull/30508)
   - **内容**：重构了 `permission.ask` 插件钩子，并捕获了拒绝权限时的错误，彻底解决了未处理权限拒绝时导致 UI 无限弹出提示框的“末日循环”。

7. **[#31564] 修复：NamedError 异常信息重复**
   - **链接**：[PR #31564](https://github.com/anomalyco/opencode/pull/31564)
   - **内容**：修正了底层 `NamedError` 构造函数导致错误堆栈中标签重复打印的问题，使得调试日志更加清晰。

8. **[#29995] 修复：文件编辑器吞噬前导空格**
   - **链接**：[PR #29995](https://github.com/anomalyco/opencode/pull/29995)
   - **内容**：修了一个令人头疼的 Bug，防止 Agent 在替换代码匹配时破坏原有代码的缩进结构。

9. **[#31552] 修复：跨类型插件加载异常**
   - **链接**：[PR #31552](https://github.com/anomalyco/opencode/pull/31552)
   - **内容**：修复了服务器插件加载器在 `readV1Plugin` 模式下错误尝试读取跨类别插件引发的崩溃。

10. **[#29372] 修复：多字节字符（如中文）被错误截断**
    - **链接**：[PR #29372](https://github.com/anomalyco/opencode/pull/29372)
    - **内容**：修复了 Shell 工具在处理输出预览时使用了 UTF-16 长度而非字节长度，导致中文字符被硬切割的乱码问题。

---

## 5. 功能需求趋势

从近期 Issues 的标签与讨论中，可以提炼出以下三大明确的产品演进趋势：

1. **IDE 与外部工具生态融合 (Open Ecosystem)**
   - 开发者不再满足于独立的沙盒终端，强烈要求无缝集成现有的主流开发工作流。支持 **Cursor CLI** (#2072)、完善 VSCode 的 Context Awareness (#3472, #22235)，以及支持直接拖入 Office 文件 (#27689) 是此趋势的明证。
2. **更精细的会话与模型生命周期管理**
   - 随着多模型协作和长耗时任务的增加，社区要求更精细的控制。包括基于 `/goal` 的意图防遗忘机制 (#27167)、针对特定子任务指派特定模型 (#29447)，以及控制本地模型的上下文窗口大小 (#31433)。
3. **底层 MCP 协议与 Agent 标准的全面拥抱**
   - 社区对于落后于 MCP 最新标准感到焦虑 (#28567)。同时，PR 层面正在积极适配如 ACP (Agent Collaboration Protocol) 标准 (#31392)，以期与 Zed 等新一代 AI-First IDE 实现同构协作。

---

## 6. 开发者关注点与核心痛点

综合今日的 Issues 与用户反馈，目前 OpenCode 在日常开发中的主要痛点集中在以下三个方面：

1. **资源占用与内存顽疾**
   - 内存泄漏依然是最大的雷区（#20695 Megathread）。由于底层的 Session 机制问题（如每次迭代无差别重载数据库导致缓存失效 #31525），不仅导致本地客户端卡顿，更直接浪费了 Anthropic 等昂贵的 Prompt Cache 额度。
2. **System Prompt 与 Agent 智商“降级”**
   - 多位高级开发者反馈 Agent 的行为过于保守、陷入死循环或忽略明确指令（#31498）。尽管工具在变强，但基础的 System Prompt 和自动压缩机制 策略似乎未能跟上，导致 Agent 在长上下文下表现笨拙。
3. **基础 UI/UX 的粗粒度缺陷**
   - 许多基础的交互体验依然受损，如：终端中无法正常复制粘贴内容（#13984）、不支持快捷键粘贴图片（#906）、多行文本输入被强制分割发送（#23524）以及极其严重的订阅支付误触投诉（#26508, #28226）。这些虽然是“小功能”，但对每日高频使用的开发者而言是致命的效率杀手。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 (2026-06-10)

## 1. 今日速览
Pi 正式发布 **v0.79.1**，全面拥抱 Anthropic 最新发布的 Claude Fable 5 及 Mythos 5 模型，并带来了高度灵活的提示词模板默认参数功能。今日社区极为活跃，围绕刚刚上线的“项目信任”机制展开了激烈讨论，同时在底层架构上针对多云厂商 API 适配、终端渲染（TUI/CJK排版）及本地模型兼容性进行了大量修复与重构。

## 2. 版本发布
**v0.79.1** 已正式发布，主要包含以下核心更新：
*   **支持 Claude Fable 5**：新增对 Anthropic 和 Amazon Bedrock 提供商的 Claude Fable 5 模型支持，包含自适应思考和高强度（`xhigh`）推理支持。
*   **提示词模板默认参数**：现在提示词模板支持使用默认位置参数，例如 `${1:-7}`，极大增强了自定义 Prompt 的灵活性和复用性。

---

## 3. 社区热点 Issues
以下精选了 10 个最受关注或具有重要技术意义的 Issue：

1. **[#5514] [enhancement] Project Trust Feature Feedback**
   *   **关注度**：👍 12 | 💬 24
   *   **概要**：新上线的“项目信任”安全门控功能引发了极高热度。多位开发者反馈频繁的信任确认打断了工作流，呼吁增加全局信任配置或父级目录继承机制。
   *   **链接**：[earendil-works/pi Issue #5514](https://github.com/earendil-works/pi/issues/5514)
2. **[#4984] [bug] Interactive mode crash on transient terminal EPIPE**
   *   **关注度**：💬 13
   *   **概要**：在交互模式下执行 `edit` 工具调用时偶发 `EPIPE` 错误导致程序崩溃，影响了长时间运行会话的稳定性。
   *   **链接**：[earendil-works/pi Issue #4984](https://github.com/earendil-works/pi/issues/4984)
3. **[#4877] [bug] Session folder collision**
   *   **关注度**：💬 11
   *   **概要**：底层存储机制存在路径 Hash 冲突 Bug。例如 `/a/b/c/d` 和 `/a-b/c-d` 会被映射到同一个会话文件夹，可能导致严重的上下文污染。
   *   **链接**：[earendil-works/pi Issue #4877](https://github.com/earendil-works/pi/issues/4877)
4. **[#4180] [bug] Links not clickable anymore**
   *   **关注度**：💬 11
   *   **概要**：由于近期重构了备用终端模式，导致终端内的超链接（URLs）无法再点击跳转，影响了开发者追踪信息源的体验。
   *   **链接**：[earendil-works/pi Issue #4180](https://github.com/earendil-works/pi/issues/4180)
5. **[#5363] Add amazon-bedrock-mantle provider for OpenAI-compatible models**
   *   **关注度**：👍 3 | 💬 7
   *   **概要**：社区请求新增 `amazon-bedrock-mantle` 提供商，以支持 Bedrock 上采用 OpenAI 兼容 API（如 GPT-5.5/5.4）的模型，扩大多云支持范围。
   *   **链接**：[earendil-works/pi Issue #5363](https://github.com/earendil-works/pi/issues/5363)
6. **[#5464] [bug] Local models: 3-5 minute "Working" status latency**
   *   **关注度**：💬 7
   *   **概要**：在使用 Ollama 运行本地模型（如 `ministral3:8b`）时，普通消息在“Working”状态会卡顿 3-5 分钟。本地模型的性能优化依然是痛点。
   *   **链接**：[earendil-works/pi Issue #5464](https://github.com/earendil-works/pi/issues/5464)
7. **[#5350] [bug] SDK: custom tool operations receive host-OS-resolved paths**
   *   **关注度**：💬 6
   *   **概要**：在跨平台（Windows 主机 SSH 连接 Linux）开发场景中，SDK 错误地将 Windows 的路径解析传给了 Linux，导致自定义文件工具失效。跨平台路径处理急需标准化。
   *   **链接**：[earendil-works/pi Issue #5350](https://github.com/earendil-works/pi/issues/5350)
8. **[#5427] [bug] Openai Codex transport issues**
   *   **关注度**：👍 4 | 💬 4
   *   **概要**：使用 OpenAI Codex 模型时频繁触发 `SSE response headers timed out after 10000ms` 错误，网络传输层的超时机制需要针对长耗时模型进行调优。
   *   **链接**：[earendil-works/pi Issue #5427](https://github.com/earendil-works/pi/issues/5427)
9. **[#5559] [bug] Azure GPT-5.5 and GPT-5.4 are 1M context, not 272k**
   *   **关注度**：💬 2
   *   **概要**：模型注册表中的上下文窗口大小配置滞后，Azure GPT-5.5/5.4 实际已支持 1M 上下文，但 Pi 默认限制了其上下文能力。
   *   **链接**：[earendil-works/pi Issue #5559](https://github.com/earendil-works/pi/issues/5559)
10. **[#5046] Create a way to persist thinking level to session only**
    *   **关注度**：💬 5
    *   **概要**：目前调整“思考级别”会全局修改用户配置。开发者希望模型思考深度（Thinking Level）能仅在当前会话生效，满足不同任务灵活切换的需求。
    *   **链接**：[earendil-works/pi Issue #5046](https://github.com/earendil-works/pi/issues/5046)

---

## 4. 重要 PR 进展
今日共有大量提交，其中模型适配、TUI渲染和配置系统重构是核心：

1. **[#5563 / #5564] feat(ai): add Claude Fable 5 and Mythos 5 models**
   *   **内容**：为 Anthropic 提供商添加最新的 Claude Fable 5 和 Mythos 5 模型元数据，将其标记为始终自适应思考模型，并剔除了不兼容的温度和禁用思考的 payload。
   *   **链接**：[earendil-works/pi PR #5563](https://github.com/earendil-works/pi/pull/5563)
2. **[#5567] fix(ai): mark Claude Fable 5 thinking off unsupported**
   *   **内容**：由于 Fable 5 不支持关闭思考模式，该 PR 修正了行为，阻止向 Anthropic 发送不支持的 `thinking.type: "disabled"` 载荷，防止报错。
   *   **链接**：[earendil-works/pi PR #5567](https://github.com/earendil-works/pi/pull/5567)
3. **[#5549] feat(ui): Improved project approval settings**
   *   **内容**：针对 Issue #5514 的热点反馈，改进了“项目信任”功能。新增全局开关、支持从父文件夹继承信任状态，并在 UI 中提供了一键信任父目录的快捷操作。
   *   **链接**：[earendil-works/pi PR #5549](https://github.com/earendil-works/pi/pull/5549)
4. **[#5509] feat: Add Amazon Bedrock Mantle OpenAI Responses provider**
   *   **内容**：响应社区需求，正式引入了对 Amazon Bedrock Mantle 兼容 OpenAI Responses API 的支持（支持 GPT-5.5/5.4 模型）。
   *   **链接**：[earendil-works/pi PR #5509](https://github.com/earendil-works/pi/pull/5509)
5. **[#5270] Ephemeral session model and thinking level selection**
   *   **内容**：将模型切换（`Ctrl+P`）和思考级别更改（`Ctrl+T`）的行为改为默认仅在当前会话生效，除非显式传递 `{ persist: true }`，解决了频繁修改全局配置的痛点。
   *   **链接**：[earendil-works/pi PR #5270](https://github.com/earendil-works/pi/pull/5270)
6. **[#5553] Add prompt template argument defaults**
   *   **内容**：实现了 v0.79.1 的重要功能，支持在提示词模板中使用 `${N:-default}` 语法设置默认参数，并确保参数替换仅作单次解析，防止递归展开导致的问题。
   *   **链接**：[earendil-works/pi PR #5553](https://github.com/earendil-works/pi/pull/5553)
7. **[#5560] fix(coding-agent): parse :thinking suffix from custom model IDs**
   *   **内容**：优化了自定义模型 ID 的回退解析机制，允许从模型 ID 后缀（如 `:thinking`）中正确提取并设置思考级别。
   *   **链接**：[earendil-works/pi PR #5560](https://github.com/earendil-works/pi/pull/5560)
8. **[#5554] fix(ai): add opus-4-8 to supportsAdaptiveThinking**
   *   **内容**：修复了遗漏配置，使 Claude Opus 4.8 正确启用自适应思考模式，从而避免了调用旧版 thinking API 产生的 400 错误。
   *   **链接**：[earendil-works/pi PR #5554](https://github.com/earendil-works/pi/pull/5554)
9. **[#5385] feat: detect first-run terminal theme**
   *   **内容**：提升了 TUI 首次启动体验，通过 OSC 查询自动检测终端的暗色/亮色主题并进行匹配持久化，免去了用户首次配置的麻烦。
   *   **链接**：[earendil-works/pi PR #5385](https://github.com/earendil-works/pi/pull/5385)
10. **[#5283] fix(tui): keep hardware cursor marker during slash-command autocomplete**
    *   **内容**：修复了 CJK（中日韩）输入法候选框位置异常的问题。在自动补全菜单可见时保留 `CURSOR_MARKER`，帮助 TUI 准确定位硬件光标。
    *   **链接**：[earendil-works/pi PR #5283](https://github.com/earendil-works/pi/pull/5283)

---

## 5. 功能需求趋势
基于近期 Issue 与 PR 走向，社区功能演进呈现以下三大趋势：
*   **多模型与多云厂商的极速适配**：随着 Claude 新模型（Fable 5, Mythos 5）和 Azure/Bedrock 架构更新（Mantle 兼容层，1M Context GPT-5.5）的发布，Pi 正在将底层 AI 接口抽象化，以快速响应各家大模型厂商的 API 变更与独有特性（如 Adaptive Thinking）。
*   **开发体验（DX）与控制权细化**：用户对配置的颗粒度要求越来越高。会话级临时设置（如 Ephemeral model/thinking level）和提示词模板的动态参数支持成为了核心发力点。
*   **安全与自动化工作流的平衡**：新增的“项目信任机制”表明 Pi 正在为接入 CI/CD 及后台自动化执行做准备，但同时也暴露了工具在“开箱即用”与“安全防御”之间的摩擦，后续将重点优化信任链的继承机制。

---

## 6. 开发者关注点与痛点
*   **跨终端与本地化渲染问题依然严重**：CJK（中日韩）文字自动换行出现大片留白、Tmux/Kitty 终端下的图片渲染失败和按键冲突（#5098, #5326）等问题，严重影响了非英语地区和高级终端用户的体验。
*   **本地/私有化模型集成的长尾痛点**：使用 Ollama 等本地模型时，由于缺乏标准的 Token Usage 响应，极易导致 Pi 出现获取统计信息崩溃（#5386）或状态卡顿（#5464）。针对非标准 API 实现的防御性编程亟待加强。
*   **底层状态管理与路径冲突**：会话目录的 Hash 规则碰撞（#4877），以及跨平台（Windows 到 Linux）自定义工具时的路径解析错乱（#5350），暴露了底层路由和状态机设计存在历史遗留缺陷，正面临重构。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-10)

## 1. 今日速览
今日 Qwen Code 迎来 **v0.18.0-preview.0 和 v0.18.0-preview.1** 两个预览版本的密集发布，标志着核心架构的又一次升级。社区活跃度极高，单日更新了 30 个 Issues 和 50 个 PRs，重点聚焦于 **Daemon 架构增强、MCP/ACP 协议兼容性、多端 UI/UX 交互修复**，以及**跨项目的全局记忆和用户画像约束**等高级特性的探讨。开发者对 Subagent 调用、IDE 插件集成和模型切换稳定性的呼声持续高涨。

## 2. 版本发布
*   **v0.18.0-preview.1 & v0.18.0-preview.0**
    *   **更新摘要**：这两个预览版主要为版本库的发布流程测试与配置验证。包含基线更新 `chore(release): v0.17.1`，并修复了 CLI 中复制输出时误包含思考过程的问题（`fix(cli): skip thought parts in copy output`，由 @he-yufeng 贡献）。

## 3. 社区热点 Issues
以下为今日最值得关注的 10 个 Issue，涉及底层架构、性能、IDE 适配和生态扩展：

1.  **[tracking] `qwen serve` daemon 能力缺口追踪** ([#4514](https://github.com/QwenLM/qwen-code/issues/4514))
    *   **关注理由**：v0.16-alpha 后 HTTP/SSE 面的实时性补充，是 Qwen Code 走向云端/服务化的核心基石，引发架构层面的持续讨论（14条评论）。
2.  **[BUG] 严重 OOM 及 Escape 键失效** ([#4815](https://github.com/QwenLM/qwen-code/issues/4815))
    *   **关注理由**：被标记为 P1 级别的严重性能问题。使用 `--resume` 恢复会话 10 分钟后必现内存溢出，影响重度 CLI 用户的日常使用。
3.  **[Feature] 项目级 `.mcp.json` 支持及安全审批机制** ([#4615](https://github.com/QwenLM/qwen-code/issues/4615))
    *   **关注理由**：MCP 生态重要一环。要求支持项目级 MCP 配置并在启动前显式等待用户审批，对团队协作和凭证安全至关重要。
4.  **[BUG] IDEA 插件无法显示提问文本及输入** ([#4888](https://github.com/QwenLM/qwen-code/issues/4888))
    *   **关注理由**：JetBrains IDE 集成的 P2 阻塞性 Bug。主进程提问时 UI 空白，直接中断了 IDE 内的编码工作流。
5.  **[Feature] Python SDK 进程内嵌 MCP Server 支持** ([#4889](https://github.com/QwenLM/qwen-code/issues/4888))
    *   **关注理由**：对标 Claude Code SDK 的关键能力，允许直接在 SDK 内启动 MCP 服务，将大幅降低外部工具集成的开发心智负担。
6.  **[Feature] ACP Streamable HTTP 传输实现与升级** ([#4782](https://github.com/QwenLM/qwen-code/issues/4782))
    *   **关注理由**：Daemon 已实现 ACP 协议，使得 Zed、Goose 等原生编辑器可以无适配器直连，是打通多端编辑器生态的关键技术栈。
7.  **[BUG] Subagent 读取图片文件返回无关内容** ([#4876](https://github.com/QwenLM/qwen-code/issues/4876))
    *   **关注理由**：多智能体架构的已知痛点。主 Agent 读取正常，但派发给 Subagent 处理图片时模型识别失败，暴露了上下文或工具调用的隔离缺陷。
8.  **[BUG] 模型前缀 `$runtime` 泄露并导致 404** ([#4729](https://github.com/QwenLM/qwen-code/issues/4729))
    *   **关注理由**：配置层面的严重 Bug。运行时快照前缀在每次重启时叠加，导致模型名称被污染，直接抛出 404 错误。
9.  **[Feature] 跨项目的全局用户级自动记忆** ([#4747](https://github.com/QwenLM/qwen-code/issues/4747))
    *   **关注理由**：解决 AI 换项目即“失忆”的痛点。建议引入 `~/.qwen/memories/` 记录用户偏好和工作风格。
10. **[BUG] Coding Plan 订阅无法切换至新模型 (qwen3.7-plus)** ([#4904](https://github.com/QwenLM/qwen-code/issues/4904))
    *   **关注理由**：模型路由策略的 Bug。接入了 Coding Plan 的用户被锁死在旧版 3.6 模型，手动切 3.7 报错无权限，直接影响最新模型能力的体验。

## 4. 重要 PR 进展
今日共有 50 个 PR 更新，以下 10 个核心 PR 代表了主要的功能演进和修复方向：

1.  **[feat] ACP/REST 完整对齐：新增 29 个 `_qwen/*` 方法** ([PR #4827](https://github.com/QwenLM/qwen-code/pull/4827))
    *   **内容**：为 Daemon 模式补齐了 ACP/REST 的 API 接口，涵盖会话扩展、后台任务等 29 个新调度方法，大幅增强外部可控性。
2.  **[feat] 新增 `/cd` 命令切换工作目录** ([PR #4890](https://github.com/QwenLM/qwen-code/pull/4890))
    *   **内容**：允许在不重启当前会话的前提下动态切换工作区，完善了长会话开发的体验。
3.  **[feat] 支持项目级扩展安装与管理** ([PR #4835](https://github.com/QwenLM/qwen-code/pull/4835))
    *   **内容**：支持将插件/扩展安装在项目维度（`.qwen/extensions`），使项目特定的工具链配置可以随代码库同步。
4.  **[feat] 跨会话文件历史快照持久化 (支持 /rewind)** ([PR #4897](https://github.com/QwenLM/qwen-code/pull/4897))
    *   **内容**：将内存中的 FileHistorySnapshot 持久化为 JSONL。此后即便进程退出再恢复，仍可通过 `/rewind` 回滚文件状态。
5.  **[fix] 修复 Dual Output 模式下无读取端导致 FIFO 阻塞死锁** ([PR #4894](https://github.com/QwenLM/qwen-code/pull/4894))
    *   **内容**：通过引入非阻塞读写（`O_NONBLOCK`）解决了双输出管道在无外部读取器时导致的 TUI 启动卡死问题。
6.  **[feat] 交互式多标签扩展管理器 (`/extensions`)** ([PR #4850](https://github.com/QwenLM/qwen-code/pull/4850))
    *   **内容**：将扩展管理从静态列表升级为包含 Installed、Discover、Sources 三大板块的交互式 UI，大幅提升易用性。
7.  **[feat] 新增 `enter_plan_mode` 及 Plan 审批门禁** ([PR #4853](https://github.com/QwenLM/qwen-code/pull/4853))
    *   **内容**：赋予模型在遇到复杂任务时主动降级进入 Plan Mode 的能力，并需经用户审批后方可执行，提升了自主执行的安全性。
8.  **[fix] 修复 Hook 长时间运行导致的上下文膨胀** ([PR #4840](https://github.com/QwenLM/qwen-code/pull/4840))
    *   **内容**：在 `/goal` 等长任务中引入微压缩机制，定期清理旧工具结果，防止上下文溢出。
9.  **[feat] 支持 `.zip` / `.tar.gz` 压缩包安装扩展** ([PR #4909](https://github.com/QwenLM/qwen-code/pull/4909))
    *   **内容**：扩展了包管理器能力，支持从本地或远端压缩包直接安装插件，满足了私有化/离线环境的部署需求。
10. **[feat] 向 Shell 子进程注入 `TRACEPARENT` 追踪变量** ([PR #4906](https://github.com/QwenLM/qwen-code/pull/4906))
    *   **内容**：集成 OpenTelemetry 分布式追踪能力，让 Bash 工具和 Hooks 执行脚本的调用链路可观测。

## 5. 功能需求趋势
通过对单日 30 个活跃 Issue 的分析，目前社区最关注的功能方向集中在以下四个维度：
*   **Daemon 化与服务化架构**：从单机 CLI 向 HTTP/SSE 常驻服务演进（ACP 协议支持、Session 分页与自动回收等），以满足 IDE 和云环境的深度集成。
*   **多端融合与工作台 UI**：对 Desktop 桌面端（文件侧边栏查看）、JetBrains 插件（交互 bug 修复）、多模型 UI 识别 等多端体验提出高要求。
*   **智能体记忆与安全边界控制**：急需跨越“单项目失忆”的全局记忆能力，同时要求更精细的用户画像约束和上下文防污染机制。
*   **开发体验与诊断工具**：希望加入更多开发态辅助能力，例如 CLI 时间戳展示、`--safe-mode` 纯净排查模式、以及详尽的 Tokens 性能统计。

## 6. 开发者关注点（痛点反馈）
*   **模型配置与状态丢失极不稳定**：开发者普遍反馈模型前缀叠加导致 404、OpenWork 无法区分同名模型、Coding Plan 新模型切换失败等问题，模型路由层的稳定性是目前最大的槽点。
*   **重度使用下的内存泄漏与 UI 卡顿**：`--resume` 恢复长会话导致严重的 OOM，终端窗口调整尺寸引发渲染碎片化，这类性能问题严重干扰了沉浸式编码。
*   **多智能体/子进程通讯存在盲区**：Subagent 读取图片解析失败、Dual Output 管道死锁，表明在复杂的 Agent 通信和 I/O 重定向场景下，系统的健壮性仍需大幅提升。
*   **高级别诊断信息缺失**：开发者呼吁提供结构化错误日志以接入外部监控，并要求 CLI 内置 TPS 和 TTFT 等模型生成耗时指标，以便在使用第三方 OpenAI 兼容 API 时进行网络和性能排查。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# 深度洞察：CodeWhale (DeepSeek-TUI) 社区动态日报

**发布日期**: 2026-06-10  
**数据来源**: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 1. 今日速览

项目迎来重大品牌重塑，**Canonical 项目名称及包名已正式从 `deepseek-tui` 迁移至 `CodeWhale`**。伴随 v0.8.55 版本的发布，项目不仅新增了对 Together AI 和 OpenAI Codex 的支持，还在底层架构和 Token 消耗上向 OpenAI Codex CLI 对齐发力。同时，社区今日爆发出极高的开发热情，涌现出大量关于 **跨会话长期记忆（记忆海马体系统）**、YOLO 模式冗余交互、以及大规模国际化（i18n）相关的 Issue 与 PR。

---

## 2. 版本发布

- **[v0.8.55]** — Together AI, OpenAI Codex, Model Catalog
  - **品牌重塑**：官方宣布 `CodeWhale` 成为规范的项目、命令、npm 包和发布资产名称。旧版 npm 包 `deepseek-tui` 已被废弃，老用户需参考 `docs/REBRAND.md` 进行迁移。

---

## 3. 社区热点 Issues

以下挑选了今日社区讨论热度最高、影响最深远的 10 个 Issues：

1. **[Bug] Agent 会自问自答** ([#2942](https://github.com/Hmbown/CodeWhale/issue/2942))
   - **关注点**：用户反馈 Agent 在缺乏明确指令时会“自作主张”执行操作，甚至导致项目崩溃。这是对 Agent 自主权和权限控制（沙箱安全）的核心反馈，引发 5 条讨论。
2. **[Bug] YOLO 模式下 Agent 反复确认状态** ([#2922](https://github.com/Hmbown/CodeWhale/issue/2922))
   - **关注点**：Agent 在执行每个原子操作前都会冗余地确认当前处于 YOLO 模式，极大地干扰了用户体验。表明提示词的精简与模式指令降噪迫在眉睫。
3. **[Feature] 自动检测版本更新并通知** ([#2931](https://github.com/Hmbown/CodeWhale/issue/2931))
   - **关注点**：目前缺乏应用内更新提示机制，用户往往运行着过时的版本。提议增加后台轻量级异步版控检查，属于基建类刚需功能。
4. **[Feature] 设计“海马体记忆系统”** ([#2935](https://github.com/Hmbown/CodeWhale/issue/2935))
   - **关注点**：突破现有 1M-token 上下文限制，提出建立跨会话召回的无限上下文记忆系统。这是 TUI 向真正“个性化长效智能体”演进的重要信号。
5. **[Feature] 适配 Paseo 的 ACP 协议** ([#889](https://github.com/Hmbown/CodeWhale/issue/889))
   - **关注点**：社区希望集成 Paseo 开源项目，实现脱离电脑时通过移动端远程下发编程任务，反映出强烈的移动端协同与远程调度需求。
6. **[Feature] 构建保持 Codex 对齐的基准测试** ([#2952](https://github.com/Hmbown/CodeWhale/issue/2952))
   - **关注点**：计划打造一套可复用的 Token 与性能对比基准，与 OpenAI Codex CLI 进行平行测试。项目正在进入追求极致性能与“Token 经济学”的深水区。
7. **[Bug] Rebrand 更新路径失败** ([#2960](https://github.com/Hmbown/CodeWhale/issue/2960))
   - **关注点**：大量反映通过 `deepseek update` 或 npm 更新时，无法成功迁移到 `codewhale` 二进制文件。此为当前版本迁移的严重阻塞问题。
8. **[Bug] Cargo 分发报错: failed to spawn `codewhale`** ([#2917](https://github.com/Hmbown/CodeWhale/issue/2917))
   - **关注点**：与上个 Issue 类似，属于品牌重命名引发的 PATH 寻址和包管理器迁移阵痛，直接影响老开发者体验。
9. **[Feature] 搭建 DigitalOcean + Telegram 远程工作台** ([#2964](https://github.com/Hmbown/CodeWhale/issue/2964))
   - **关注点**：针对非大陆用户，计划通过廉价的美国 VPS 结合 Telegram 长轮询桥接，实现“15分钟内用手机搭建并控制私有运行环境”。
10. **[Bug] Agent 执行被长时间 Shell 命令阻塞** ([#2939](https://github.com/Hmbown/CodeWhale/issue/2939))
    - **关注点**：诸如 `sleep` 等阻塞型指令会卡死整个 Agent 执行流。提出应将耗时操作转至后台异步处理，这是 Agent 工程化调度的重要一环。

---

## 4. 重要 PR 进展

今日 PR 重点围绕新模型接入、TUI 交互优化及全面的国际化展开，精选 10 个核心 PR：

1. **[feat(provider)] add dedicated Together AI support** ([PR #2925](https://github.com/Hmbown/CodeWhale/pull/2925))
   - 将 Together AI 正式引入作为一级提供商，全面覆盖 CLI/TUI、鉴权和模型注册表。Provider 总数升至 19 个。
2. **[refactor(prompts)] decouple allow_shell from static system-prompt** ([PR #2949](https://github.com/Hmbown/CodeWhale/pull/2949))
   - **架构优化**：将 `allow_shell` 配置从静态提示词中剥离至动态的 `<runtime_prompt>` 标签，大幅优化了 DeepSeek 的 Prefix Caching（前缀缓存）效率。
3. **[feat] 海马体记忆系统与 YOLO 模式修复** ([PR #2933](https://github.com/Hmbown/CodeWhale/pull/2933))
   - 提出并初步实现了跨会话记忆的架构，同时通过补充提示词强行抑制了 YOLO 模式下的废话输出。
4. **[fix(pdf)] use extract_text_by_pages to avoid hang** ([PR #2898](https://github.com/Hmbown/CodeWhale/pull/2898))
   - 修复了读取特定 PDF 时由于复杂的交叉引用表导致程序直接挂死的严重 Bug，转用按页提取机制。
5. **[fix(tui)] normalize macOS SUPER (Cmd) to CONTROL** ([PR #2943](https://github.com/Hmbown/CodeWhale/pull/2943))
   - 解决 macOS 终端中 Ctrl/Cmd 修饰键映射混乱的历史遗留问题，统一了键位分发逻辑。
6. **[fix(tui)] guide long shell work to background** ([PR #2947](https://github.com/Hmbown/CodeWhale/pull/2947))
   - 配合 Issue #2939，在模型提示中明确设定了 >5 秒的阈值，引导 Agent 自动将耗时终端任务放入后台。
7. **[fix(tui)] render hotbar in sidebar** ([PR #2945](https://github.com/Hmbown/CodeWhale/pull/2945))
   - TUI 界面重构工作的一部分，将底部操作栏渲染进右侧边栏，采用紧凑的两行式布局，提升屏幕空间利用率。
8. **[feat(model)] add Qwen 3.7 Max to OpenRouter** ([PR #2927](https://github.com/Hmbown/CodeWhale/pull/2927))
   - 快速跟进最新开源模型，在 OpenRouter 目录中新增阿里云 Qwen 3.7 Max 并支持别名解析。
9. **[i18n] localize Cmd command output messages** ([PR #2940](https://github.com/Hmbown/CodeWhale/pull/2940))
   - 国际化重大进展，本地化了多达 15 个核心 Command 输出的 MessageIds，覆盖所有 7 个发售语言环境。
10. **[feat(config)] prefer dispatcher-provided API key** ([PR #2928](https://github.com/Hmbown/CodeWhale/pull/2928))
    - 修复了火山引擎等 DeepSeek 兼容订阅端在 CLI 显式传入 `--api-key` 时被忽略的问题，改善了多级密钥调度逻辑。

---

## 5. 功能需求趋势

纵观近期 Issue，社区与开发团队的需求趋势正集中在以下几个方向：

- **多厂商模型平权与兼容**：不仅支持 DeepSeek，正在密集接入 OpenAI Codex、Together AI、Qwen 3.6/3.7，并探索 Anthropic Messages API 协议。
- **极限 Token 优化与 Cost 控制机制**：项目进入精细化运营阶段。大量 Issue（如 #2953, #2956, #2958）聚焦于缩减 Prompt 冗余、减少重复上下文注入，试图在 Benchmark 中追平甚至超越竞品的 Token 消耗表现。
- **构建“云端+移动”的工作流**：不甘心只做本地单机 TUI。从 DigitalOcean + Telegram 桥接到适配 Paseo ACP 协议，显示出打造“移动端远程调度云端 Agent 集群”的野心。
- **从“上下文”向“长期记忆”演进**：单会话 1M token 已满足不了重度开发。海马体记忆系统的提出，标志着项目正尝试构建真正的持久化开发者知识库。

---

## 6. 开发者关注点与痛点

基于开发者和用户的直接反馈，当前阶段的主要痛点如下：

- **品牌重构引发的迁移阵痛**：旧包名依赖失效、二进制文件找不到、更新机制报错（如 #2917, #2960）。缺乏平滑的引导机制，引起不少社区抱怨。
- **Agent 的“废话”与行为不可控**：在非交互模式或 YOLO 模式下，Agent 表现出严重的“废话文学”（反复输出模式确认）以及“自作主张”（甚至删库），缺乏清晰的行为边界限制。
- **长时间阻塞任务处理能力弱**：目前的 Agent 执行流依然偏向同步，遇到 Shell 阻塞指令即卡死，亟需内置一套完善的异步后台任务编排体系。
- **TUI 界面细节体验待打磨**：大段文件粘贴时底部状态栏遮挡、macOS 键位映射错乱等，反映出在多平台终端适配的兼容性上还需投入更多精力。

</details>