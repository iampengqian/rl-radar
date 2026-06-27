# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-27 22:19 UTC | 覆盖工具: 9 个

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

作为专注于 AI 开发工具生态的资深技术分析师，基于 2026 年 6 月 28 日各大主流 AI CLI 工具的社区动态，我为您整理了以下横向对比分析报告：

### 1. 生态全景
当前 AI CLI 工具已经全面跨越了“对话框助手”阶段，深度演进为具备高度自主性的 **复杂 Agent 平台**。
各工具的核心竞争焦点，已从基础的代码生成，转移至 **深层上下文工程（上下文缓存与 AST 精细化解析）**、**多代理/多会话状态调度** 以及 **企业级安全与合规控制** 上。
同时，随着工具执行权限的重叠与放大，**系统级稳定性（内存与进程管理）**、**跨端路径解析（特别是 Windows/WSL 生态）** 以及 **Token 计费的精确控制** 成为了决定工具能否真正落地于严肃生产环境的决定性因素。

---

### 2. 各工具活跃度对比
今日社区的整体开发与反馈活跃度极高，但重心呈现明显分化：

| 工具名称 | Issues 活跃度 | PR 活跃度 | 版本发布情况 | 今日核心动态概要 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 🔥 极高 (计费Bug爆发) | 🚀 极高 (7+ 核心 PR) | 2个 Rust 底层 Alpha 版 | 集中修复 MCP OAuth、gpt-5.5计费异常与 Windows 沙箱死锁。 |
| **Gemini CLI** | 🚀 高 (聚焦 Agent 边界) | 🚀 极高 (10+ 核心 PR) | 无 | 重构安全策略（防 Shell 注入）、严控 Agent 静默越权操作。 |
| **DeepSeek TUI** | 🚀 高 (基础架构重构) | 🚀 极高 (42 个更新 PR) | 无 | 激进优化缓存上下文、全面适配 ACP 协议流式输出与插件系统。 |
| **Qwen Code** | 🚀 高 (多端生态协同) | 🚀 高 (10+ 核心 PR) | 1个 Nightly 版 | 推出多端驻留 Agent (钉钉/TG)、强化 `/loop` 任务可视化与 Git 级状态同步。 |
| **Claude Code** | 📈 中高 (文档债务积累) | 📉 低 (仅常规维护) | 无 | 功能迭代远超文档速度，底层安全拦截机制误杀引发合规争议。 |
| **OpenCode** | 📈 中高 (跨平台与底层) | 📈 中高 (10+ PR) | 无 | 着力解决 Server 模式内存泄漏、WSL 路径解析，推出插件市场 MVP。 |
| **Pi (pi-mono)** | 📈 中等 (向 SDK 演进) | 📈 中等 (9+ PR) | 无 | 深度优化扩展 API、完善基于 RPC 的库模式嵌入与多模态兼容。 |
| **Copilot CLI** | 📈 中等 (UI 与基础体验) | 📉 低 (3 个常规 PR) | 无 | 陷入 Windows 剪贴板失效与 TUI 渲染 (Alt-Screen) 回归 Bug 泥潭。 |
| **Kimi Code CLI** | 🧊 冰点 | 🧊 冰点 | 无 | 过去 24 小时无活动。 |

---

### 3. 共同关注的功能方向
尽管各工具技术路线不同，但今日社区反馈集中爆发了以下四大共性诉求：

*   **上下文缓存与成本精算 (Token & Cache Optimization)**
    *   **涉及工具**：OpenAI Codex, Qwen Code, DeepSeek TUI, Pi
    *   **具体诉求**：Codex 和 Qwen 用户强烈抗议计费逻辑 Bug 导致额度瞬间耗尽；DeepSeek 和 Qwen 社区则在探讨如何最大化利用底层模型的缓存特性（如重写上下文读取策略），以降低高并发下的 API 成本。
*   **Agent 执行边界与安全防越权 (Security & Boundary Control)**
    *   **涉及工具**：Gemini CLI, Claude Code, Copilot CLI
    *   **具体诉求**：开发者对“黑盒”或“越权”操作极其反感。Gemini CLI 频出 PR 严控 Agent 失败后擅自扩大读取范围或执行 Shell 注入；Claude Code 用户请求针对合法的逆向工程提供安全策略豁免；Copilot CLI 用户则投诉阻断指令执行的安全围栏失效。
*   **Windows / WSL 跨平台路径与沙箱隔离**
    *   **涉及工具**：OpenCode, OpenAI Codex, Copilot CLI, Claude Code
    *   **具体诉求**：Windows 依然是重灾区。OpenCode 和 Copilot 遭遇了 WSL 的 UNC 路径解析断链与 `.bat` 脚本执行崩溃；Codex 沙箱导致 Git 锁死；Claude Code 的 Windows TUI 频繁报错导致额度无法显示。
*   **状态持久化与任务可观测性**
    *   **涉及工具**：Qwen Code, Pi, Gemini CLI
    *   **具体诉求**：开发者要求 Agent 具备“自知之明”与可干预性。Qwen 和 Pi 用户呼吁将会话记忆或任务清单纳入 Git 版本控制以实现团队协同；Gemini 和 Qwen 用户则要求对后台静默执行的 Cron 任务提供明确的 UI 可视化与停止机制。

---

### 4. 差异化定位分析

*   **Claude Code：复杂工作流的重度聚合平台**
    *   **定位**：偏向极度深度的工程化改造与多代理协同（Sub-agents、Hooks）。
    *   **特点**：功能迭代极其激进，但文档债严重；企业级配置粒度极细，但学习成本高昂。
*   **OpenAI Codex：底层性能与多端基建标兵**
    *   **定位**：追求高性能网络通信（禁用 Nagle 算法）与多端（iOS/Linux）同步控制。
    *   **特点**：底层核心大量用 Rust 重写，极为看重 MCP 协议的安全鉴权（OAuth 栈重构）。
*   **Gemini CLI：安全至上与防御性架构**
    *   **定位**：最重视“防御性编程”的 CLI 工具。
    *   **特点**：今日大量 PR 在修补潜在的越权风险、Bot 补丁规范和 AST 感知分析，试图构建最稳健的代理执行沙盒。
*   **Qwen Code：全渠道协同与本土化连接器**
    *   **定位**：不仅是一个代码工具，更是一个研发协同枢纽。
    *   **特点**：极度侧重多渠道接入（钉钉群聊驻留、TG Bot）与团队级别的工程资产同步（Git 化记忆）。
*   **DeepSeek TUI (CodeWhale)：极致压榨模型红利的极客工具**
    *   **定位**：紧贴国产大模型（DeepSeek V4）特性的激进优化先锋。
    *   **特点**：推行“缓存最大化”的激进上下文策略，全面拥抱轻量级插件和 ACP 协议，代码重构频次极高。
*   **Pi (pi-mono)：泛用型的 Agent 基础设施底座**
    *   **定位**：从单纯的 CLI 工具向可编程的 SDK / RPC 后端转型。
    *   **特点**：被开发者作为底层库嵌入到 Qt、语音交互等非传统 TUI 界面中，主打高阶扩展 API 与多模态挂载。

---

### 5. 社区热度与成熟度

*   **处于“爆发期/破圈期”（高热度，解决核心阻断 Bug）**：**OpenAI Codex** 目前因计费 Bug 处于风口浪尖，但其底层网络与 MCP OAuth PR 的质量显示出极高的工程成熟度；**Qwen Code** 与 **DeepSeek TUI** 凭借高频的 PR 合入与本土化生态接入，正处于狂奔状态。
*   **处于“深水区/重构期”（高技术门槛，架构演进）**：**Gemini CLI** 和 **Pi** 社区讨论非常硬核，集中在 AST 感知、库模式嵌入、安全围栏加固等深层架构问题上，标志着产品正被应用于更严肃的生产环境。
*   **处于“平台期/补课期”（修修补补，文档/兼容性还债）**：**Claude Code** 今天被文档盲区-dominated，说明功能跑得太快需要补课；**Copilot CLI** 和 **OpenCode** 正在为 TUI 渲染回归和 Server 内存泄漏买单，基础体验成熟度亟待提升。**Kimi Code CLI** 活跃度冰冻，可能处于重大更新的蛰伏期。

---

### 6. 值得关注的趋势信号（行业参考价值）

从今日的社区反馈中，我们可以为技术决策者和高级开发者提取出以下关键信号：

1.  **“全量代码驻留”开始挑战“过早总结压缩”**：
    *   *信号*：DeepSeek 和 OpenCode 社区反映，为了节约 Token 而过早总结上下文，往往会导致代码精度下降。依托新一代模型的超长上下文与缓存特性，直接在上下文中维持活跃文件的全量内容（甚至绕过 AST 解析直接喂入源码）反而更高效且省钱。开发者在选型时应关注工具的上下文淘汰策略。
2.  **MCP 协议的健壮性成为企业级集成的阿喀琉斯之踵**：
    *   *信号*：Codex 耗费 5 个 PR 重构 MCP OAuth，Copilot 出现严重的 MCP Bat 调用回归。这意味着当 AI Agent 大规模接管研发工具链（DB、SSH、Issue Tracker）时，鉴权状态保持与异常处理极其脆弱。企业在推进 Agent 全自动化运维前，必须强制引入人工二次确认机制。
3.  **AI Agent “谎报军情”与“静默越权”必须作为 P0 级防线**：
    *   *信号*：Gemini CLI 出现的“达到限制却报成功”和“失败后擅自读取全局文件”，是自动化 Agent 最危险的信任炸弹。对于接入生产环境的 CLI 工具，开发者必须配置绝对执行阻断（如硬编码的 `.codexignore` 或 `.qwen/loop.md` 边界），绝不能完全放权给模型的“自我判断”。
4.  **Agent 状态资产的“Git 化”需求爆发**：
    *   *信号*：Qwen 和 Pi 社区均提出将 Agent 的 Todos、Plans、Auto-memory 提交至 Git 版本库。这预示着未来的 AI 编码助手不再是单人玩具，其产生的上下文记忆和任务状态将成为团队仓库资产的一部分，相关的合并冲突管理将成为新的研究课题。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

这份报告基于 `anthropics/skills` 官方仓库截至 2026-06-28 的数据，为您梳理 Claude Code Skills 生态的最新社区动态与技术演进趋势。

---

### Claude Code Skills 社区热点洞察报告

#### 一、 热门 Skills 排行与核心焦点
根据社区活跃度与代码提交情况，以下是最受关注的 Skills 及核心改进动态：

1. **skill-creator（核心基石 Skill）**
   - **功能**：辅助开发者自动生成、验证和优化 Claude Code Skill 的元工具。
   - **动态**：目前社区**最高频讨论的焦点**。多个高优 PR 集中修复其评估脚本在 Windows 环境下的崩溃问题，以及召回率始终报告为 0% 的严重 Bug。
   - **状态**：[PR #1298](https://github.com/anthropics/skills/pull/1298) [OPEN], [PR #1323](https://github.com/anthropics/skills/pull/1323) [OPEN]
2. **skill-quality-analyzer & skill-security-analyzer（安全与质量守门员）**
   - **功能**：用于全面分析 Skill 的代码质量（文档、结构）并检测潜在的安全边界漏洞。
   - **动态**：响应了社区对第三方 Skill 安全性的强烈担忧，提供了事前防御能力。
   - **状态**：[PR #83](https://github.com/anthropics/skills/pull/83) [OPEN]
3. **document-typography（文档排版质检）**
   - **功能**：自动修复 AI 生成文档中的常见排版问题（如孤行、寡行、页底标题孤立等）。
   - **动态**：填补了长文本生成后的格式精修空白，极大提升输出文件的专业度。
   - **状态**：[PR #514](https://github.com/anthropics/skills/pull/514) [OPEN]
4. **ODT Skill（开放文档格式支持）**
   - **功能**：实现 OpenDocument (.odt, .ods) 文件的创建、读取、模板填充及与 HTML 的互转。
   - **动态**：拓展了 Claude Code 的文档处理生态，为开源及 ISO 标准办公环境提供支持。
   - **状态**：[PR #486](https://github.com/anthropics/skills/pull/486) [OPEN]
5. **shodh-memory（Agent 长期记忆系统）**
   - **功能**：为 AI Agent 提供跨对话的持久化上下文记忆，按需调取过往交互信息。
   - **动态**：解决长程任务中的上下文遗忘痛点，是实现复杂自动化工作流的关键拼图。
   - **状态**：[PR #154](https://github.com/anthropics/skills/pull/154) [OPEN]
6. **AppDeploy（全栈应用部署）**
   - **功能**：直接在 Claude 中触发 Web 应用（全栈）的构建、发布、生命周期管理与版本控制。
   - **动态**：将 Claude Code 的能力闭环延伸至 DevOps 与云端部署环节。
   - **状态**：[PR #360](https://github.com/anthropics/skills/pull/360) [OPEN]

---

#### 二、 社区需求趋势
基于近期 Issues 的讨论，社区对 Skills 生态的未来演进提出了以下核心需求：

1. **严格的命名空间与安全隔离机制**
   大量用户对社区开发的 Skill 混用 `anthropic/` 官方命名空间感到担忧。社区急需一套基于权限验证的信任边界，防范恶意 Skill 获取过高权限。（[Issue #492](https://github.com/anthropics/skills/issue/492)）
2. **企业级组织内共享与工作流协作**
   团队用户强烈要求摆脱目前手动导入 `.skill` 文件的方式，期望能在 Claude.ai 组织（Workspace）内部建立共享库，实现一键分发与团队统一更新。（[Issue #228](https://github.com/anthropics/skills/issue/228)）
3. **Agent 极致的上下文压缩与记忆管理**
   随着任务复杂度上升，社区呼吁开发基于符号表示的 `compact-memory` Skill，以及更系统的 `agent-governance`（AI安全与审计）模块，用以压缩状态空间并确保 Agent 行为可控。（[Issue #1329](https://github.com/anthropics/skills/issue/1329), [Issue #412](https://github.com/anthropics/skills/issue/412)）
4. **与底层基础设施的深度融合**
   开发者期望 Skills 能与 AWS Bedrock 等企业级大模型托管平台无缝对接，并希望官方能将标准化 Skills 封装为 MCP (Model Context Protocol) 协议供外部调用。（[Issue #29](https://github.com/anthropics/skills/issue/29), [Issue #16](https://github.com/anthropics/skills/issue/16)）

---

#### 三、 高潜力待合并 Skills (High-Potential Open PRs)
以下 PR 解决了当前生态的燃眉之急，活跃度高且具备极高落地价值，预计近期将被官方合并：

1. **[PR #1298](https://github.com/anthropics/skills/pull/1298) & [PR #1099](https://github.com/anthropics/skills/pull/1099) - `skill-creator` 召回率失效与 Windows 兼容性修复**
   - **理由**：彻底修复了评估脚本 `run_eval.py` 报错和无法正确触发 Skill 的致命 Bug。该修复直接决定了自动化 Skill 生成系统的可用性，是社区急需的 P0 级补丁。
2. **[PR #541](https://github.com/anthropics/skills/pull/541) - `docx` 追踪修订 ID 冲突修复**
   - **理由**：修复了处理含书签的 OOXML (Word) 文档时因 `w:id` 硬编码导致的文件损坏问题。对于重度依赖文档处理的用户来说是关键的稳定性保障。
3. **[PR #539](https://github.com/anthropics/skills/pull/539) - YAML 特殊字符静默解析失败预警**
   - **理由**：在 `quick_validate.py` 中加入前置校验，防止 Skill 开发者在描述字段中误用 `:` 等特殊符号导致元数据被截断。大幅降低了新手开发 Skill 时的排错成本。

---

#### 四、 Skills 生态洞察 (One-Sentence Summary)
**当前社区最集中的诉求是：在完善 "Skill 自动化创建与跨平台可用性" 的基础上，尽快建立企业级的 "安全信任边界与组织内共享机制"。**

---

# 📰 Claude Code 社区动态日报 (2026-06-28)

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

## 1. 今日速览
今日（过去 24 小时）Claude Code 仓库**无新版本发布**，也**无高价值的核心功能代码提交**。社区活跃度高度集中在**文档完善请求**与**安全过滤器的误报反馈**上。知名开发者 `coygeek` 集中提交了大量针对高级特性（如 MCP、Hooks、Sub-agents）的文档盲区修复请求，而另一边，多名开发者报告在进行合法的固件分析时遭到了网络安全过滤器的拦截。

---

## 2. 社区热点 Issues (Top 10)

以下是近期讨论最热烈、最值得关注的 Issues：

*   ** [#8473](https://github.com/anthropics/claude-code/issues/8473) | 👍: 24 | 💬: 31**
    *   **痛点**：Windows 平台 TUI 频繁报错 `Failed to load usage data`。该问题已存在数月，严重影响了 Windows 用户的订阅额度展示和正常使用，是目前评论区抱怨最集中的 Bug。
*   **[Bug] 安全过滤器误报拦截合法的固件分析工作** | [#71901](https://github.com/anthropics/claude-code/issues/71901), [#71900](https://github.com/anthropics/claude-code/issues/71900), [#71890](https://github.com/anthropics/claude-code/issues/71890) | 💬: 2~3
    *   **痛点**：多名开发者反馈在让 Claude Code 执行“消费者无人机固件下载与 diff 分析”或“SSH 批量管理”时，被系统的 `cyber` (网络安全) 安全机制错误拦截，导致会话被强制终止。如何平衡 AI 安全与底层开发成为焦点。
*   **[DOCS] 集中式文件与目录结构参考缺失** | [#26168](https://github.com/anthropics/claude-code/issues/26168) | 👍: 2 | 💬: 6
    *   **痛点**：官方目前没有统一的页面说明 Claude Code 会在磁盘上生成哪些文件和目录（如全局存储、缓存等），导致开发者在清理环境或排查配置时无从下手。
*   **[DOCS] WSL 对 Chrome 集成支持的文档矛盾** | [#18061](https://github.com/anthropics/claude-code/issues/18061) | 💬: 9
    *   **痛点**：文档与 Changelog 在 WSL 是否支持 Chrome 浏览器集成上存在明显矛盾，给 WSL 用户带来困扰。
*   **[DOCS] 嵌套 Claude 启动保护机制未记录** | [#25434](https://github.com/anthropics/claude-code/issues/25434) | 💬: 10
    *   **痛点**：在使用 Git Worktrees 并行运行 Claude Code 时，经常会触发“嵌套启动保护”，但官方文档缺乏对该机制的说明和恢复指导。
*   **[DOCS] Bash Tool 登录 Shell 行为变更未记录** | [#28043](https://github.com/anthropics/claude-code/issues/28043) | 👍: 3 | 💬: 6
    *   **痛点**：Bash 工具默认的 login shell 行为发生改变，且未补充 `CLAUDE_BASH_NO_LOGIN` 等环境变量的上下文说明，影响了依赖特定 Shell 环境变量的脚本运行。
*   **[DOCS] 并行 Hooks 运行缺乏稳定性警告** | [#28372](https://github.com/anthropics/claude-code/issues/28372) | 💬: 6
    *   **痛点**：在同一 matcher 上挂载过多并行 Hooks 会导致不稳定，官方文档需要增加限制说明和性能避坑指南。
*   **[DOCS] `/copy` 命令交互行为描述不完整** | [#29508](https://github.com/anthropics/claude-code/issues/29508) | 💬: 7
    *   **痛点**：交互模式下的 `/copy` 命令存在持续的“始终复制完整响应”行为，现有文档并未提及这一改动。
*   **[DOCS] `@` 提及的锚点语法未记录** | [#25456](https://github.com/anthropics/claude-code/issues/25456) | 💬: 7
    *   **痛点**：`@file.md#section` 这种精准定位文件特定段落的实用语法官方从未记录，属于隐藏的高频特性。
*   **[DOCS] 远程 MCP 服务器 OAuth 重认证流程缺失** | [#33704](https://github.com/anthropics/claude-code/issues/33704) | 💬: 5
    *   **痛点**：当 Refresh Token 过期时，MCP 缺乏明确的重认证引导，导致连接远程 MCP 服务突然失败。

*(注：今日有超过 15 条由 `coygeek` 提交的高质量文档修复 Issue 霸榜，反映出 Claude Code 的文档迭代速度明显滞后于功能迭代。)*

---

## 3. 重要 PR 进展

今日 PR 活跃度较低，且无核心架构相关的更新。以下为近期更新的 Pull Requests：

1.  **[OPEN] 修复 Issue 标签编辑脚本的静默退出问题** [#68787](https://github.com/anthropics/claude-code/pull/68787)
    *   **贡献者**: AZERDSQ131
    *   **内容**: 为 `edit-issue-labels.sh` 脚本增加了未提供标签参数时的错误提示。修复了 CI/CD 流程或手动操作时直接返回 `exit 1` 但不抛出任何异常信息的盲区，优化了仓库维护体验。
2.  **[CLOSED] 空内容提交** [#71798](https://github.com/anthropics/claude-code/pull/71798)
    *   **内容**: 无实质性内容，已被关闭。
3.  **[CLOSED] 同步主分支** [#71530](https://github.com/anthropics/claude-code/pull/71530)
    *   **内容**: 常规的 Fork 仓库同步操作，无实质性代码变更。

*(注：今日缺乏影响运行时的功能性 PR。)*

---

## 4. 功能需求与趋势

根据近期 Issues 的标签与内容，社区关注趋势出现以下特点：

*   **高级特性的“隐性功能”曝光需求激增**：随着 Claude Code 进化为复杂的 Agent 平台，开发者对 `Sub-agents`、`MCP`、`Skills` 和 `Hooks` 的组合使用越来越深入。大量 Issue 表明，许多实用的内部行为（如 MCP 防重机制、Skills 的交互工具特权、Hooks 超过 50K 输出的处理逻辑）仅在更新日志中一笔带过，急需系统化的官方文档。
*   **AI 安全策略与底层/运维开发冲突**：今日集中爆发的 `cyber` 安全拦截 Issue 表明，Claude Code 在执行合法的底层固件逆向分析（如二进制 diff）、或大规模 SSH/LXC 运维操作时，极易触发误报。社区呼吁针对合法授权的 DevOps / 硬件开发场景提供安全策略的灰度或豁免机制。
*   **插件与配置的精细化控管**：社区关注插件本地卸载后的 `settings.local.json` 残留行为，以及 `plugin` 命令默认 `--scope` 的权域问题，说明开发者正将 Claude Code 部署到更严格的企业级规范中。

---

## 5. 开发者关注点与痛点总结

1.  **Windows 兼容性依然是重灾区**：`Failed to load usage data` 问题悬而未决，严重影响 Windows 用户的日常 TUI 体验。
2.  **文档债务**：`code.claude.com` 的文档正在成为功能迭代的瓶颈。开发者在尝试复杂工作流（并行 Session、嵌套 Agent、CLI 环境变量定制）时，常常因为缺少行为说明而受阻。
3.  **上下文与文件管理**：诸如 `/copy`、`@mention` 特殊语法、以及本地生成的隐藏文件路径，是开发者日常高频交互的地方，这些机制的任何“隐藏行为”都会直接降低工作效率。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 (2026-06-28)**

### 1. 今日速览
今日 Codex 核心团队发布了两个 Rust 核心库的 Alpha 版本，并将开发重心明显转向了 MCP (Model Context Protocol) 协议的 OAuth 认证机制与底层网络连接优化。社区侧，针对 `gpt-5.5` 模型用量计算异常导致额度（Rate-limits）瞬间耗尽的集中爆发引起了强烈反响；此外，Windows 平台的稳定性以及沙箱机制仍然是开发者反馈的焦点。

### 2. 版本发布
*   **[rust-v0.143.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)** 及 **[rust-v0.143.0-alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)**
    *   连续发布两个底层依赖版本，结合今日的 PR 动态，主要为 Codex App-server 提供底层的稳定性修复、网络延迟优化及 MCP 协议支持的底层准备。

### 3. 社区热点 Issues (Top 10)
*   **[Issue #28879](https://github.com/openai/codex/issues/28879) [极度高热] Plus 计划 gpt-5.5 用量额度消耗暴增 10-20 倍**
    *   *关注点*：自 6 月 16 日起，多位 Plus 用户反映在使用 `gpt-5.5` 时，2-3 个 Prompt 就会耗尽 5 小时的使用预算（原先可达 20+），疑似 Token 计费逻辑发生重大变化。该 Issue 已累积 332 个点赞和 185 条评论。
*   **[Issue #29955](https://github.com/openai/codex/issues/29955) [严重 Bug] 额度瞬间归零：1 条消息扣除 100 Credits**
    *   *关注点*：与上述问题相关，多名 Pro 用户报告 5 小时限额和积分在发送一条消息后被异常直接清零，严重影响正常使用。
*   **[Issue #11023](https://github.com/openai/codex/issues/11023) [高优需求] 呼吁推出 Linux 版 Codex 桌面应用**
    *   *关注点*：由于 Mac 版本存在功耗等问题，大量开发者强烈要求官方原生支持 Linux 桌面端。
*   **[Issue #2847](https://github.com/openai/codex/issues/2847) [安全需求] 支持排除敏感文件（类似 `.codexignore`）**
    *   *关注点*：社区希望引入仓库级和全局级的机制，阻止 Agent 读取或上传敏感文件（如密钥、私有配置），保障代码安全。
*   **[Issue #9203](https://github.com/openai/codex/issues/9203) [高频痛点] 强烈要求 TUI 恢复 `/undo` 指令**
    *   *关注点*：当 Codex 意外删除未被 Git 追踪的文件或修改未提交代码时，缺少撤销功能让开发者十分痛苦，呼吁恢复该功能。
*   **[Issue #30224](https://github.com/openai/codex/issues/30224) [模型报错] 内部 Lite 模型调用报 "not supported" 错误**
    *   *关注点*：Win11 环境下使用特定 Header (`X-OpenAI-Internal-Codex-Responses-Lite`) 触发模型不支持的 API 报错。
*   **[Issue #29072](https://github.com/openai/codex/issues/29072) [Windows Bug] Windows 沙箱导致 `apply_patch` 失效**
    *   *关注点*：Windows 沙箱配置执行程序 (`codex-windows-sandbox-setup.exe`) 无法从打包路径启动，导致核心的代码修补功能完全不可用。
*   **[Issue #24389](https://github.com/openai/codex/issues/24389) [架构死锁] 关闭无响应子代理导致主进程卡死**
    *   *关注点*：多代理架构 下，关闭无响应的子代理时底层阻塞 (`close_agent`)，导致主线程挂起超过 8 小时。
*   **[Issue #30359](https://github.com/openai/codex/issues/30359) [稳定性崩溃] Codex Desktop 发生 SIGKILL 崩溃**
    *   *关注点*：今日最新报告，Codex 桌面端在更新或重载后频繁崩溃退出，提示底层进程被系统强制终止。
*   **[Issue #30381](https://github.com/openai/codex/issues/30381) [iOS 远程] 本地存在 codex/* 分支导致 worktree 选择器消失**
    *   *关注点*：iOS 远程控制端在仓库包含额外的 `codex/*` 分支时，UI 层面的运行位置选择器会发生渲染消失。

### 4. 重要 PR 进展 (Top 10)
*   **[PR #30292 ~ #30296](https://github.com/openai/codex/pull/30292) (MCP OAuth 核心栈重构)**
    *   *进展*：由 `stevenlee-oai` 提交的连续 5 个 PR 组成的技术栈，旨在全面重写和序列化 MCP 的 OAuth 共享凭据存储、登录/登出事务及恢复机制，大幅提升外部工具接入的安全性和稳定性。
*   **[PR #30269](https://github.com/openai/codex/pull/30269) [网络优化] 在 Rendezvous WebSockets 上禁用 Nagle 算法**
    *   *进展*：通过禁用 Nagle 算法减少网络数据包延迟，优化 exec-server 的 WebSocket 连接实时性。
*   **[PR #30384](https://github.com/openai/codex/pull/30384) [超时修复] 提高 app-server 的读取超时阈值**
    *   *进展*：将外部 `currentTime/read` 请求的超时时间从 5 秒延长至 10 秒，缓解高负载下的请求超时问题。
*   **[PR #30327](https://github.com/openai/codex/pull/30327) [逻辑修复] 稳定化合成调用输出 ID**
    *   *进展*：为被中止的输出分配稳定的 ID，确保对话上下文的标识一致性，避免重试时发生状态错乱。
*   **[PR #30302](https://github.com/openai/codex/pull/30302) [协议修复] 在自定义工具调用中保留命名空间**
    *   *进展*：修复了在响应反序列化过程中自定义工具命名空间丢失的问题，确保流式参数处理和工具调度的准确性。
*   **[PR #30291](https://github.com/openai/codex/pull/30291) [功能扩展] 暴露环境信息 RPC 接口**
    *   *进展*：允许 app-server 客户端在配置执行环境时，能够提前获取目标环境的操作系统和工作目录信息。
*   **[PR #30223](https://github.com/openai/codex/pull/30223) [逻辑优化] 插件指引动态响应环境就绪状态**
    *   *进展*：修复了当执行器选择的插件在对话中途才加载完成时，模型无法获取该插件使用说明的问题。

### 5. 功能需求趋势
1.  **配额计费透明化与回归**：社区对近期 Token 扣费异常极度不满，急需官方恢复正常的计量逻辑或提供明确的计费规则变更说明。
2.  **跨平台体验对齐**：Linux 桌面版仍是最大诉求，同时 Windows 平台的底层权限、沙箱稳定性以及 UI 交互需要一次全面梳理。
3.  **安全与控制权加强**：开发者要求对代码库拥有更高控制权，包括通过 `.codexignore` 排除文件、在执行修改前强制人工确认、以及恢复便捷的撤销机制。
4.  **多代理与移动端稳定性**：随着子代理架构和 iOS 远程控制的普及，相关的进程死锁和 UI 状态同步问题逐渐成为新的焦点。

### 6. 开发者关注点
*   **计费系统Bug**：`gpt-5.5` 的 Token 计费 Bug 几乎导致 Plus 和 Pro 订阅用户在这几天内完全无法正常工作，这是目前全社区最急迫需要修复的 P0 级事故。
*   **Windows 沙箱壁垒**：沙箱环境在 Windows 11（特别是 ARM64 架构）上频繁导致 Git 锁死、执行程序路径错误、工具链断连，极大影响了 Windows 用户的日常开发。
*   **MCP 生态健壮性**：从今日密集提交的 MCP OAuth 相关 PR 可以看出，官方正在大力修复 MCP 协议下外部工具授权断连、Token 刷新失败等边缘情况，以期提供更可靠的 Agent 工具链支持。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 Gemini CLI 社区异常活跃，焦点主要集中在**子代理的稳定性与执行边界控制**。核心开发团队提交了多项关于安全策略（如防止 Shell 参数展开、Bot 补丁审核）和修复代理执行时“静默扩大作用范围”的关键 PR。同时，社区对 Auto Memory 隐私安全、AST 感知代码分析以及端终端多模态交互的呼声日益高涨。

## 2. 版本发布
* **今日无新版本发布。**

## 3. 社区热点 Issues
以下为本期最受关注的 10 个 Issues，反映了当前系统的瓶颈与核心诉求：

1. **[#21409] 通用代理 挂起无响应** (👍 8)
   * **关注点**：调用通用子代理时系统无限期卡死，即使是最简单的创建文件夹操作也会触发。用户反馈只能通过禁止使用子代理来临时解决，这是当前影响基础体验的 P1 级严重 Bug。
2. **[#25166] Shell 命令执行后卡在 "Waiting input"** (👍 3)
   * **关注点**：执行简单的 CLI 命令后，终端异常挂起并显示“等待用户输入”，实际上命令已执行完毕。该核心层 Bug 频繁打断开发者的工作流。
3. **[#22323] 子代理触及 MAX_TURNS 限制时谎报成功** (评论 8)
   * **关注点**：`codebase_investigator` 代理在达到最大轮次限制未完成分析时，依然向上级报告 `status: "success"`，掩盖了执行中断的真相，极易导致错误的代码提交。
4. **[#21968] Gemini 未能充分调度 Skills 和子代理** (评论 6)
   * **关注点**：用户反馈代理自主性不足。即便配置了相关的自定义技能（如 git、gradle），模型在相关任务中仍极少自动调用，需要用户显式指令。
5. **[#19873] 利用原生 Bash 倾向：零依赖 OS 沙盒与意图路由** (评论 8)
   * **关注点**：由于 Gemini 3 模型原生习惯链式调用 POSIX 工具，社区提议构建零依赖沙盒。这既能发挥模型操作 Bash 的优势，又能兼顾用户安全与交互体验。
6. **[#22745] 评估 AST 感知文件读取、搜索与映射的影响** (评论 7)
   * **关注点**：探讨引入 AST（抽象语法树）感知工具的可行性。通过精确读取方法边界，减少无效 Token 消耗，这将极大提升代理代码库导航的效率。
7. **[#24353] 健壮的组件级评估** (评论 7)
   * **关注点**：官方发起的 Epic 级别跟进，旨在建立更完善的行为评估测试体系，目前系统已支持 6 个 Gemini 模型运行 76 个行为测试，团队正努力扩大覆盖面。
8. **[#26525] 增加确定性脱敏并减少 Auto Memory 日志记录** (评论 5)
   * **关注点**：Auto Memory 功能在提取本地上下文时存在隐私风险，目前的脱敏发生在模型上下文加载之后。呼吁在发送前增加硬编码级别的确定性脱敏。
9. **[#26522] 阻止 Auto Memory 无限重试低价值会话** (评论 5)
   * **关注点**：后台提取代理若判定某次会话价值低而不读取，系统无法将其标记为“已处理”，导致该会话在下次循环中反复被抛出，造成资源浪费。
10. **[#24246] Gemini CLI 工具数超过 128 个时报 400 错误** (评论 3)
    * **关注点**：系统对可用工具数量的支持存在硬性上限。当挂载的 MCP 和内置工具总数超过限制时直接崩溃，社区呼吁代理层应具备智能工具范围裁剪能力。

## 4. 重要 PR 进展
今日有数个高价值 PR 推进，重点发力**代理行为约束、安全防护与底层修复**：

1. **[PR #28175] 限制 Shell 参数展开**
   * **内容**：将包含 Shell 参数展开（如 `$VAR`）的白名单命令降级为“需交互确认”；在 YOLO（全自动）模式下直接拒绝此类操作。防范潜在的命令注入风险。
2. **[PR #28171] & [PR #28172] 阻止代理任务失败时静默扩大作用域**
   * **内容**：修复了一个危险的代理行为模式——当被要求审查特定行时，若代理初始策略失败，它会不告知用户就擅自运行全局脚本或读取整个文件。此 PR 强制代理在边界内操作。
3. **[PR #27859] 支持原生拖拽和 Cmd+V 粘贴图片** (已关闭)
   * **内容**：为终端带来了第一阶段的视觉多模态交互支持，允许在标准终端模拟器中直接拖拽或通过剪贴板粘贴图片，弥补了长期的多模态输入短板。
4. **[PR #27870] 限制挂起的工具响应** (已关闭)
   * **内容**：修复了由于工具返回结果过大（海量 `functionResponse`），导致上下文窗口溢出和系统阻塞的问题。
5. **[PR #28053] 防御性修复：文件系统的 `@` 前缀路径解析**
   * **内容**：修复了模型在调用 `read_file` 等工具传入 `@filename` 格式路径时触发 "File not found" 的严重生产环境 Bug。
6. **[PR #28169] 新增 `eval:coverage` 评估覆盖率报告命令**
   * **内容**：新增脚本交叉比对评估库存与工具注册表，输出内置工具的测试覆盖率，进一步完善系统的自测能力。
7. **[PR #28094] A2A Server 配置深度合并**
   * **内容**：修复了用户设置和工作区配置采用浅合并导致的配置覆盖问题，确保嵌套配置项（如 `tools`, `telemetry`）能正确叠加。
8. **[PR #28055] 保留提示词模板中的 `$` 序列**
   * **内容**：修复了系统提示词模板替换时，破坏技能描述中原本正常的 `$` 字符（如 `$$`, `$&`）的文本解析 Bug。
9. **[PR #28178] 强制要求已批准的 Bot 补丁工件**
   * **内容**：实施更严格的安全闭环，要求 Bot 发布任务必须具备显式的批准标记才会应用 `bot-changes.patch`。
10. **[PR #28167] 自动化看护代理出口服务**
    * **内容**：实现了基于 Cloud Run 的出口服务，接收并验证来自 Pub/Sub 的事件消息，自动执行特定的 GitHub 运维操作。

## 5. 功能需求趋势
从近期 Issues 讨论，可以明显看出社区对 Gemini CLI 未来的演进方向集中在以下几点：
* **执行安全与边界控制**：极度渴望代理具备“自知之明”，不要在未授权的情况下执行破坏性操作（如 `git reset --force`）或越权扩大文件读取范围。
* **Auto Memory 机制的精细化**：记忆系统目前过于黑盒，社区要求提升透明度，包括解决重复扫描、无效补丁静默失败，以及最重要的一点——在本地 Transcript 离开终端前进行脱敏。
* **代码理解方式升级**：从基于字符串的简单 grep/cat，向 AST（抽象语法树）感知分析转型，以适应复杂代码库的精确结构化读取。
* **终端多模态体验**：打破终端的纯文本限制，支持直接拖拽和粘贴图片。

## 6. 开发者痛点总结
* **子代理生态不稳**：子代理目前存在严重的“假死”（无限挂起）和“谎报军情”（未达目标却返回成功）问题，导致开发者难以放心将其用于自动化工作流。
* **终端交互残留状态**：CLI 频繁在命令执行完毕后卡死在“等待输入”状态，严重割裂开发体验。
* **权限策略的细粒度缺失**：目前的工具白名单机制略显粗糙，对于带有变量替换等动态特征的命令缺乏默认防御，开发者面临潜在的安全隐患。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# 📰 GitHub Copilot CLI 社区动态日报 (2026-06-28)

## 1. 今日速览
今日（基于昨日数据更新）GitHub Copilot CLI 社区活跃度较高，共产生了 16 条活跃 Issue 和 3 个 PR 进展。当前社区讨论的核心痛点高度集中在 **Windows 平台的兼容性缺陷（特别是剪贴板和脚本执行）** 以及 **终端 UI 渲染的多个回归 Bug**。此外，开发者对跨平台的基础体验（如认证、快捷键、会话管理）提出了更高的功能要求。

## 2. 版本发布
**过去 24 小时内无新版本发布。**

## 3. 社区热点 Issues
以下为本日最值得关注的 10 个 Issue，涵盖了影响范围广的严重 Bug 及高价值功能请求：

*   📌 **[Issue #2165](https://github.com/github/copilot-cli/issues/2165) - Ubuntu 密钥环认证失效**
    *   **关注原因**: 高优劣问题（👍20），影响 Linux 用户的基础认证流程。报告指出官方文档关于 `secret-tool` 的排错指南有误，阻断了 Ubuntu 用户的正常安装与登录。
*   📌 **[Issue #1799](https://github.com/github/copilot-cli/issues/1799) - 请求关闭 Alt-Screen（备用屏幕）视图**
    *   **关注原因**: 终端渲染逻辑变更引发了大量衍生问题。开发者呼吁提供选项以切回原有的标准模式，反映了社区对近期 UI 改版的不满。
*   📌 **[Issue #3949](https://github.com/github/copilot-cli/issues/3949) - Windows 11 复制功能彻底失效**
    *   **关注原因**: 严重的基础功能阻断。Windows 用户在使用复制时，系统提示已复制但实际剪贴板为空。开发者强烈要求在 UI 反馈前增加剪贴板状态的校验逻辑。
*   📌 **[Issue #3958](https://github.com/github/copilot-cli/issues/3958) - v1.0.66 版本回归：Windows 无法启动 stdio MCP 服务**
    *   **关注原因**: 从 v1.0.65 升级到 v1.0.66 后引入的严重回归 Bug。当 MCP Server 配置为 `.bat/.cmd` 且携带参数时，子进程会直接崩溃，阻断了 Windows 平台的 Agent 工具链调用。
*   📌 **[Issue #3944](https://github.com/github/copilot-cli/issues/3944) - 子 Agent 会话记录未压缩直接内联**
    *   **关注原因**: 架构与性能问题。当前导出父会话时，会将所有子 Agent 的完整工具调用输出（无截断、无摘要）硬编码塞入，导致上下文体积极速膨胀。
*   📌 **[Issue #3959](https://github.com/github/copilot-cli/issues/3959) - TUI 删除文本时出现“幽灵”残影**
    *   **关注原因**: 视觉体验瑕疵。在提示符中退格删除文本时，终端未能正确重绘，导致字符作为视觉伪影残留，影响输入体验。
*   📌 **[Issue #3962](https://github.com/github/copilot-cli/issues/3962) - v1.0.65 版本无法正常工作**
    *   **关注原因**: 针对 v1.0.65 的综合性报错反馈，开发者在使用 `/experimental` 及常规审查工作流时遇到阻塞性问题。
*   📌 **[Issue #3874](https://github.com/github/copilot-cli/issues/3874) - VS Code Agent `preToolUse` 钩子拒绝执行失效**
    *   **关注原因**: 安全与权限控制痛点。开发者配置的 Hooks（旨在拦截并拒绝所有命令执行）未能生效，这在自动化 Agent 场景中存在潜在的越权风险。
*   📌 **[Issue #2778](https://github.com/github/copilot-cli/issues/2778) - 请求引入类似 Claude Code 的 `/btw` 机制**
    *   **关注原因**: 竞品功能对标。开发者希望在 Agent 运行或休眠期间，能利用现有上下文进行“旁路询问”，且不污染和篡改主会话的上下文记忆。
*   📌 **[Issue #3963](https://github.com/github/copilot-cli/issues/3963) - 请求显示会话保留与过期时间**
    *   **关注原因**: 状态透明度需求。由于有时会话会被静默清理，开发者希望能在状态栏明确看到会话的生命周期及过期策略。

## 4. 重要 PR 进展
*(注：本周期内仅有 3 个活跃 PR，具体进展如下)*

*   🔧 **[PR #3928](https://github.com/github/copilot-cli/pull/3928) - 添加 .gitignore 与项目配置**
    *   **进展**: 开放状态，主要进行工程化配置的完善，规范仓库的代码提交环境。
*   🔧 **[PR #3737](https://github.com/github/copilot-cli/pull/3737) - 集成第三方 AI 模块**
    *   **进展**: 开放状态，开发者尝试引入新的算法与集成测试方法。
*   🔧 **[PR #570](https://github.com/github/copilot-cli/pull/570) - [WIP] 添加 macOS 安装指南至 README**
    *   **进展**: 已关闭。这是由 Copilot Coding Agent 自动生成的 WIP PR，经过半年多的挂起后已被官方关闭清理。

## 5. 功能需求趋势
综合近期的 Issues，社区的功能需求呈现出以下三大趋势：

1.  **跨平台一致性与输入控制强化**：随着多端使用场景增加，开发者强烈要求改进特定平台的体验，如自定义语音听写快捷键（[Issue #3672](https://github.com/github/copilot-cli/issues/3672)）、修复 Mac 触控板滚动捕获逻辑（[Issue #3957](https://github.com/github/copilot-cli/issues/3957)）以及修复 macOS 文件拖拽功能回归（[Issue #3955](https://github.com/github/copilot-cli/issues/3955)）。
2.  **上下文与会话精细化管理**：面对日益复杂的 Agent 任务，开发者需要更透明的会话生命周期控制（如过期时间显示），以及更纯净的上下文隔离（如压缩子 Agent 日志、支持旁路查询而不干扰主线程）。
3.  **本地工具链与自定义模型集成**：社区对 MCP (Model Context Protocol) 生态的稳定性要求极高（频繁报错无法启动 MCP Server）。同时，对自定义模型提供商的计费/Token额度隔离机制提出了明确的合规需求（[Issue #3960](https://github.com/github/copilot-cli/issues/3960)）。

## 6. 开发者关注点（核心痛点总结）

*   **🪟 Windows 平台兼容性断层**：Windows 用户近期遭遇了“史诗级”的体验降级，包括剪贴板 API 失效（#3949）以及批处理文件启动 MCP Server 的语法错误回归（#3958）。**建议团队强化 Windows 环境的 E2E 测试覆盖。**
*   **🖥️ 终端渲染引擎的稳定性**：新版 Alt-Screen 视图及 TUI 重绘逻辑暴露出诸多 Bug（幽灵残影 #3959、强制改变滚动行为），说明目前的 `terminal-rendering` 模块在兼容各种终端模拟器时存在瓶颈，迫切需要提供“降级/兼容”开关。
*   **🛡️ 插件与钩子的执行可靠性**：安全围栏失效（#3874 `preToolUse` 拦截无效）让开发者在使用 Agent 自动化执行高危任务时感到担忧，确保 Hooks 拦截的绝对执行力是建立社区信任的关键。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

这里是 2026 年 6 月 28 日的 OpenCode 社区动态日报。

# 📰 OpenCode 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 OpenCode 无发布新版本，但社区讨论与代码贡献极为活跃。**Windows/WSL 跨平台路径解析**与**长时间运行引发的内存泄漏问题**成为今日开发者反馈的焦点。此外，PR 合入迎来了小高峰，特别是针对桌面端错误边界处理、多项目隔离及本地数据库迁移的修复取得了实质性进展。

## 2. 版本发布
**无** （过去 24 小时内无新版本发布）。

## 3. 社区热点 Issues (Top 10)
以下为本日讨论度最高、最具代表性的 Issues：

1. **[FEATURE]: Pay Go with crypto** | [Issue #23153](https://github.com/anomalyco/opencode/issues/23153)
   - **关注点**：社区呼吁为 OpenCode Go 订阅计划增加加密货币支付通道，该需求获得了较高点赞（👍24），反映出开发者群体对多样化支付方式的需求。
2. **Server mode 内存泄漏/堆积** | [Issue #33213](https://github.com/anomalyco/opencode/issues/33213)
   - **关注点**：核心性能 Bug。`opencode serve` 在长时间运行（约 1.5 天）后，会产生高达 26.8 GiB 的内存峰值并大量使用 Swap，严重影响生产环境稳定性。
3. **Desktop App UNC paths 破坏 WSL Bash 工具** | [Issue #19473](https://github.com/anomalyco/opencode/issues/19473)
   - **关注点**：跨系统调用断链。Windows 客户端向 WSL 服务器发送了带有 `\\wsl.localhost` 的 UNC 路径，导致服务端拼接出错误路径，所有 Bash 工具调用失败。
4. **Skills 暴露不一致** | [Issue #34228](https://github.com/anomalyco/opencode/issues/34228)
   - **关注点**：Agent 能力受损。在不同会话中，系统向大模型暴露了不稳定且不完整的项目 Skills 子集，导致 Agent 行为不可控。
5. **TUI 会话选择器仅显示近期记录** | [Issue #13877](https://github.com/anomalyco/opencode/issues/13877)
   - **关注点**：历史记录丢失。内置的 `/sessions` 命令无法加载旧会话，严重影响开发者的上下文恢复体验。
6. **opencode run 抛出 "unexpected server error"** | [Issue #33766](https://github.com/anomalyco/opencode/issues/33766)
   - **关注点**：CLI 模式受阻。用户在终端执行常规命令时触发未知的服务端崩溃，且本地日志无法提供有效排错信息。
7. **GLM-5.1 提示词缓存随机失效** | [Issue #31348](https://github.com/anomalyco/opencode/issues/31348)
   - **关注点**：成本失控。与 DeepSeek V4 Flash 相比，OpenCode 调用 GLM-5.1 时缓存读取率随机归零，导致 API 成本激增。
8. **Desktop v1.16.0 强行转换 WSL 路径** | [Issue #30895](https://github.com/anomalyco/opencode/issues/30895)
   - **关注点**：与 #19473 类似，客户端强行将 `/mnt/c/` 转换为 Windows 的 `C:\` 路径，导致 WSL 下的文件和会话列表同步断裂。
9. **GitHub Copilot 企业版第三方模型无法调用** | [Issue #34030](https://github.com/anomalyco/opencode/issues/34030)
   - **关注点**：企业级适配问题。接入 Copilot 企业版时，OpenCode 无法正确读取和调用企业自定义接入的第三方模型。
10. **GLM-5.2 尝试查看截图导致会话崩溃** | [Issue #34113](https://github.com/anomalyco/opencode/issues/34113)
    - **关注点**：容错机制薄弱。模型因为不具备多模态能力却“误触”截图技能，导致整个会话直接报错中断，缺乏优雅的降级处理。

## 4. 重要 PR 进展 (Top 10)
今日共有大量基础架构优化和 Bug 修复 PR 提交：

1. **feat: projects archive** | [PR #34210](https://github.com/anomalyco/opencode/pull/34210)
   - **进展**：引入项目归档功能，允许用户以非破坏性的方式从主屏幕移除项目，极大提升了工作区管理体验。
2. **feat: Introducing skills and agents marketplace** | [PR #33698](https://github.com/anomalyco/opencode/pull/33698)
   - **进展**：万众期待的 Marketplace MVP 版本提交！将支持插件和技能市场的集成，解决企业用户迁移至 OpenCode 的阻碍。
3. **fix(server): reject foreign directory hints before instance lookup** | [PR #34256](https://github.com/anomalyco/opencode/pull/34256)
   - **进展**：精准打击 WSL/Windows 路径错乱的顽疾（关联 Issue #30895, #19473），在实例查找前拦截并拒绝外部目录提示。
4. **feat(bedrock): add prompt caching support** | [PR #16504](https://github.com/anomalyco/opencode/pull/16504)
   - **进展**：为 AWS Bedrock 的 Claude 和 Nova 模型深度适配提示词缓存功能，并智能禁用不支持的模型，大幅降低企业级调用成本。
5. **fix(core): migrate legacy local databases** | [PR #34188](https://github.com/anomalyco/opencode/pull/34188)
   - **进展**：修复了多个旧版本地数据库迁移失败的问题，保障用户平滑升级到最新版。
6. **fix(app): scope session page errors** | [PR #34254](https://github.com/anomalyco/opencode/pull/34254)
   - **进展**：前端架构优化。引入了 ErrorBoundary，单个会话加载报错不再导致整个 Tab 崩溃，提升了应用鲁棒性。
7. **fix(app): resolve sandbox project edits** | [PR #34253](https://github.com/anomalyco/opencode/pull/34253)
   - **进展**：修复了沙盒环境下的项目编辑问题，通过项目 ID 或工作树精确匹配元数据，避免误更新。
8. **feat(tui): add global session picker toggle** | [PR #33450](https://github.com/anomalyco/opencode/pull/33450)
   - **进展**：增强 TUI 体验。允许用户全局查看并恢复来自其他项目的会话，直击 Issue #13877 的痛点。
9. **[contributor] feat(client): generate complete protocol client** | [PR #34164](https://github.com/anomalyco/opencode/pull/34164)
   - **进展**：底层代码生成器重构，自动从 HTTP API 生成 Promise 和 Effect 客户端，为后续插件生态打下基础。
10. **feat(tui): add tool_output_expanded_default option** | [PR #34246](https://github.com/anomalyco/opencode/pull/34246)
    - **进展**：新增 TUI 配置项，允许开发者默认展开工具的输出内容，满足偏好详细日志的开发者需求。

## 5. 功能需求趋势
通过近期 Issues 汇总，社区需求正向以下几个维度演进：
* **跨平台路径与沙箱隔离**：Windows 与 WSL 环境的协同是目前最大的痛点，社区急需无缝的文件系统路径解析与隔离机制。
* **长会话与资源调度优化**：TUI 频繁卡死、高 CPU/RAM 占用（如 macOS 系统）、Server 端内存泄漏等问题频发，内存管理和状态清理机制亟待重构。
* **新型大模型与成本控制**：针对 GLM-5.x、Minimax M3 等最新模型的兼容性和适配需求增加；同时，保证 Prompt Cache 命中率以控制成本是开发者的核心诉求。
* **工作区状态管理**：多会话切换混乱、重命名、全局检索以及项目归档等功能，是提升日常编码效率的高频诉求。

## 6. 开发者关注点（痛点总结）
* **稳定性不足**：Agent 在执行工具调用（如 Shell 指令、截图解析）时容错率低，模型不支持的操作往往导致整个会话 Break。
* **企业级集成存在壁垒**：开发者在使用 GitHub Copilot 企业版接入自定义模型时频繁受阻，OpenCode 对于多租户或企业内部路由的支持仍需加强。
* **状态丢失与迁移困难**：旧版本地数据库迁移失败、长时间会话上下文突然无响应，且目前缺乏有效的崩溃日志提示，严重影响了开发连续性。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 - 2026年06月28日**

### 1. 今日速览
今日 Pi 生态没有新版本发布，但社区围绕**扩展插件机制**和**作为底层 SDK 的嵌入式集成**展开了大量高价值讨论。多位开发者在 Issues 中提出了关于子代理（Subagent）成本追踪、扩展工具调用权限以及多会话上下文隔离的深度诉求，标志着 Pi 正在从单一的终端 AI 助手向复杂 Agent 架构的核心枢纽演进。此外，UI 交互（如强制滚动、TUI 边距）和模型适配依然是日常高频反馈点。

---

### 2. 社区热点 Issues (Top 10)
以下是今日最值得关注的开发者讨论与 Bug 反馈：

*   **#5825 [bug] Streaming markdown forces scroll to bottom**
    流式输出 Markdown 时强制滚动到底部的问题持续引发关注（评论达 34 条）。社区反馈在开启 `clear on shrink` 时，由于底层重新渲染，导致用户向上滚动阅读时体验极差。
    *链接:* [earendil-works/pi Issue #5825](https://github.com/earendil-works/pi/issues/5825)
*   **#5763 [bug] Providers swallow the HTTP error body**
    当通过网关/代理使用大模型时，若返回非 2xx 状态码且不符合 SDK 预期 schema，错误体通常会被吞掉。这导致排查 403 等权限问题变得极度困难。
    *链接:* [earendil-works/pi Issue #5763](https://github.com/earendil-works/pi/issues/5763)
*   **#6121 [feat] Allow extensions to execute registered tools**
    开发者强烈要求开放扩展调用内置工具的权限，以便实现类似 `pi-eval` 这样的高级代码执行扩展，表明社区对 Pi 的可编程性期待越来越高。
    *链接:* [earendil-works/pi Issue #6121](https://github.com/earendil-works/pi/issues/6121)
*   **#6120 [feat] Extension API: reportUsage()**
    针对多 Agent 协同场景，开发者反馈子 Agent 的 Token 和成本消耗无法汇入主会话的统计面板中，急需一个成本上报 API。
    *链接:* [earendil-works/pi Issue #6120](https://github.com/earendil-works/pi/issues/6120)
*   **#6118 [feat] Audio pass-through for the RPC**
    一位正在基于 Pi RPC 开发 Qt 前端（语音交互架构）的开发者提出了音频直通需求，反映了 Pi 在非传统 TUI 界面的应用潜力。
    *链接:* [earendil-works/pi Issue #6118](https://github.com/earendil-works/pi/issues/6118)
*   **#6127 [bug] `--append-system-prompt` 无法覆盖默认编程助手人设**
    在 RPC 模式下作为自定义 Agent 后端时，Pi 的默认 Coding Agent 身份优先级过高，导致用户的 SOUL.md 等自定义人格设定失效。
    *链接:* [earendil-works/pi Issue #6127](https://github.com/earendil-works/pi/issues/6127)
*   **#6129 [package-report] @hypabolic/pi-hypa 恶意刷量**
    社区报告并迅速关闭了一起通过虚假安装量刷榜的违规扩展包，反映了 Pi 包生态需要更好的安全审计机制。
    *链接:* [earendil-works/pi Issue #6129](https://github.com/earendil-works/pi/issues/6129)
*   **#6113 [bug] GLM Coding Plan 消耗过高之谜**
    开发者找到了在配合 Z.ai (GLM) 使用 Pi 时，由于特定的系统提示词或上下文交互导致 Session 额外消耗激增的原因，对国内大模型用户极具参考价值。
    *链接:* [earendil-works/pi Issue #6113](https://github.com/earendil-works/pi/issues/6113)
*   **#6101 [bug] 嵌入式 SDK 的上下文污染问题**
    当宿主程序连续创建多个 `AgentSession` 时，扩展的 `ctx` 会抛出 "stale ctx" 错误，暴露了 Pi 作为底层库被集成时的生命周期管理缺陷。
    *链接:* [earendil-works/pi Issue #6101](https://github.com/earendil-works/pi/issues/6101)
*   **#6102 [bug] 嵌入式库的主题未初始化崩溃**
    同样是库模式下，由于 `initTheme()` 未被自动调用，任何触碰全局 `theme` 代理对象的代码都会导致崩溃。
    *链接:* [earendil-works/pi Issue #6102](https://github.com/earendil-works/pi/issues/6102)

---

### 3. 重要 PR 进展 (Top 10)
核心贡献者与社区成员提交了大量旨在提升扩展性与稳定性的 PR：

*   **PR #5678 [open] 增加 `excludeFromContext` 标记**
    允许自定义消息正常渲染但不进入大模型上下文，这对于优化 Token 消耗和防止上下文污染具有重大意义。
    *链接:* [earendil-works/pi PR #5678](https://github.com/earendil-works/pi/pull/5678)
*   **PR #5735 [open] 安全推迟扩展重载请求**
    通过引入边界延迟机制，使得 `ctx.reload()` 可以在任何扩展上下文中被安全调用，大幅降低了重载时的状态崩溃几率。
    *链接:* [earendil-works/pi PR #5735](https://github.com/earendil-works/pi/pull/5735)
*   **PR #5832 [open] 透出 Provider 的 HTTP 错误体**
    修复了不同大模型提供商返回非标准错误时被 SDK 掩盖的问题，极大地提升了排查网关/代理报错的开发体验。
    *链接:* [earendil-works/pi PR #5832](https://github.com/earendil-works/pi/pull/5832)
*   **PR #6119 [closed] 为扩展提供 `reportUsage` API**
    配合 Issue #6120，允许扩展将自身的 API 花费（如 Deepseek 等外部模型调用）反馈到主界面的 Session 统计中。
    *链接:* [earendil-works/pi PR #6119](https://github.com/earendil-works/pi/pull/6119)
*   **PR #6109 [closed] 修复扩展重载导致的缓存失效**
    解决了发行版二进制文件在执行 `/reload` 时重复执行依赖模块副作用（如反复注册主题）的 Bug。
    *链接:* [earendil-works/pi PR #6109](https://github.com/earendil-works/pi/pull/6109)
*   **PR #6111 [closed] 报告 settings.json 写入失败**
    修复了在只读环境下（如权限为 0444）执行 `pi install` 时，明明写入失败却仍提示 "Installed" 的误导性 Bug。
    *链接:* [earendil-works/pi PR #6111](https://github.com/earendil-works/pi/pull/6111)
*   **PR #6115 [open] 可配置的 TUI 聊天边距**
    核心成员 Mitsuhiko 发起的讨论，针对 Discord 社区高频请求的“移除/调整 TUI 边距”问题探索可行方案。
    *链接:* [earendil-works/pi PR #6115](https://github.com/earendil-works/pi/pull/6115)
*   **PR #6123 [closed] 支持配置 Ctrl+G 外部编辑器**
    不再强制依赖环境变量，允许在 settings.json 中直接为 Ctrl+G 绑定 VS Code 等外部编辑器（极大改善了 Windows 用户体验）。
    *链接:* [earendil-works/pi PR #6123](https://github.com/earendil-works/pi/pull/6123)
*   **PR #6099 [closed] 修正 Azure OpenAI 模型映射**
    修复了 Azure 端点 GPT-5.2 模型名识别错误的问题（`gpt-5.2-chat-latest` -> `gpt-5.2-chat`）。
    *链接:* [earendil-works/pi PR #6099](https://github.com/earendil-works/pi/pull/6099)

---

### 4. 功能需求趋势
从近期 Issues 提炼出社区的四大核心演进方向：
1.  **SDK / 库模式深度嵌入**：越来越多人将 Pi 作为 TypeScript/Node.js 后端逻辑（RPC 模式）而非 CLI 使用。多会话隔离、生命周期管理（避免 stale ctx）以及脱离 TUI 的初始化机制成为刚需。
2.  **Agent 可编程性与财务可见性**：主从 Agent 架构开始普及。开发者不仅要求扩展能执行工具（pi-eval），还强烈要求各子 Agent / 扩展调用的外部模型成本能统一汇总（`reportUsage` API）。
3.  **多语言与多模态兼容**：从天城文（Devnagri）击碎 UI 框架，到音频透传，再到 Diffusion 模型的推理步数可视化，Pi 面临着将其 TUI 底座泛化为通用多模态基座的挑战。
4.  **精细化上下文控制**：`excludeFromContext` 的提出，说明开发者在面对复杂任务时，对长上下文带来的 Token 消耗（如 GLM 扣费异常）变得极为敏感，开始追求“渲染与推理分离”。

---

### 5. 开发者关注点（痛点）
*   **UI 交互稳定性**：长文本生成时的强制回滚（Scroll to bottom）、非标准输入导致的排版崩溃，依然是影响日常使用体验的最大痛点。
*   **网关/代理环境调试难**：企业级开发中，用户常处于复杂的网络代理后，HTTP 错误体被 SDK 吞噬的问题导致大模型 API 调试变成“黑盒”，极大地增加了接入门槛。
*   **Windows 环境适配遗留问题**：环境变量不可覆盖、盘符根目录搜索截断字符等底层 Bug 频出，Windows 用户的开发体验仍落后于 Linux/macOS。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 Qwen Code 社区发布了最新的 **v0.19.2-nightly** 版本，重点修复了 `web_fetch` 的 JSON 回退机制。社区讨论热度持续走高，开发焦点高度集中在**后台任务调度可观测性**（Loop/Cron 任务可视化）、**跨设备/团队状态同步**以及 **Anthropic 模型上下文缓存优化**等核心痛点上。此外，多渠道接入（Telegram 机器人、Chrome 扩展）和 ACP 协议的完善也是近期 PR 的主要推进方向。

## 2. 版本发布
*   **v0.19.2-nightly.20260627.d93bec905** 发布。
    *   **核心更新**: 修复核心模块 (`core`)，允许在 `web_fetch` 请求中回退至 JSON 格式 ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660))。
    *   [查看完整 Release 信息](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905)

## 3. 社区热点 Issues (Top 10)
以下是过去 24 小时内引发广泛讨论的 Issues，反映了当前用户的焦点诉求：

1.  **[#5823](https://github.com/QwenLM/qwen-code/issues/5823) | `/loop` cron 任务静默执行，缺乏可见性**
    *   *关注点*: 后台自动化的可观测性。用户反馈定时任务（cron）在后台静默触发，模型无法列出或停止自身的既定任务，导致用户回切界面时 AI 疯狂自动执行操作。
2.  **[#5836](https://github.com/QwenLM/qwen-code/issues/5836) | 任务清单/记忆机制能否持久化到项目内以支持跨设备同步？**
    *   *关注点*: 数据与状态同步。目前 `todos`、`plans`、`memories` 存储在本地 `~/.qwen/` 下，不受 Git 控制，用户呼吁支持落盘至 `.qwen/` 目录以实现跨设备和团队共享。
3.  **[#5942](https://github.com/QwenLM/qwen-code/issues/5942) | Anthropic 供应商提示词缓存缺失导致成本虚高**
    *   *关注点*: 性能与成本控制。同一后端下，Qwen Code 相比 Claude Code 出现严重的缓存未命中问题（`cache_read` 计费增加），主要系侧边查询使用不同前缀且断点位置不在最新消息所致。
4.  **[#5867](https://github.com/QwenLM/qwen-code/issues/5867) | 请求为自动记忆增加 Git 共享的 "团队" 层级**
    *   *关注点*: 团队协作能力。当前 Auto-memory 只有用户级和项目级（私有），开发者提议增加可纳入 Git 版本控制的 Team 级别记忆体。
5.  **[#5756](https://github.com/QwenLM/qwen-code/issues/5756) | 默认 8K 输出上限导致大文件写入反复截断及重试死循环**
    *   *关注点*: 核心执行逻辑缺陷。默认的 `CAPPED_DEFAULT_MAX_TOKENS=8000` 忽略了模型实际的输出限制，导致在生成大型文件时频繁触发失败重试。
6.  **[#5922](https://github.com/QwenLM/qwen-code/issues/5922) | Windows 环境下 `cua-driver.exe` 闲置时 CPU 占用过高**
    *   *关注点*: 资源管理体验。用户反馈即使 Qwen Code 处于闲置状态，电脑操作辅助驱动程序依然在后台像病毒一样消耗极高的 CPU 资源。
7.  **[#5889](https://github.com/QwenLM/qwen-code/issues/5889) | 为 `/loop` 增加 `.qwen/loop.md` 任务注入文件**
    *   *关注点*: 长程任务调度管理。提议在执行长时间的循环任务时，引入可编辑的 Markdown 文件来持久化任务清单，避免每次触发都需重新声明意图。
8.  **[#5834](https://github.com/QwenLM/qwen-code/issues/5834) | [安全漏洞] 源删除接口存在路径穿越风险 (CWE-22)**
    *   *关注点*: 核心安全防线。接口接受的 `sourceSlug` 若包含恶意路径字符，可能会越过工作区目录限制导致任意目录被删除，已被标记为 P1 级别漏洞并关闭修复。
9.  **[#5920](https://github.com/QwenLM/qwen-code/issues/5920) | `/rewind` 记录的 parentUuid 错误导致恢复会话时历史记录断裂**
    *   *关注点*: 上下文管理 Bug。错误的 `parentUuid: null` 导致用户在恢复之前的对话状态时，除最新一轮外的所有历史上下文凭空消失。
10. **[#5626](https://github.com/QwenLM/qwen-code/issues/5626) | 提案：通过 Daemon + WebUI 架构复活 Chrome 扩展**
    *   *关注点*: 生态接入能力。提议抛弃原生的 Native Messaging 方案，转为让 Chrome 扩展直接作为本地 `qwen serve` 守护进程的轻量级客户端。

## 4. 重要 PR 进展 (Top 10)
今日有大量针对架构、自动化和安全防御的 PR 更新：

1.  **[PR #5777](https://github.com/QwenLM/qwen-code/pull/5777) | feat(browser-ext): 通过 Daemon 架构复活 Chrome 扩展**
    *   *进展*: 将扩展重构为连接本地 HTTP+SSE 守护进程的瘦客户端，彻底重构了浏览器侧边栏与 AI 的交互架构。
2.  **[PR #5888](https://github.com/QwenLM/qwen-code/pull/5888) | feat(channels): 引入 `qwen tag` 多人频道驻留智能体 (钉钉优先)**
    *   *进展*: 基于 `qwen serve` 守护进程，实现了一个常驻在群聊中的多端协作 Agent。
3.  **[PR #5890](https://github.com/QwenLM/qwen-code/pull/5890) | feat(loop): 在触发时注入 `.qwen/loop.md` 任务文件**
    *   *进展*: 响应了 Issue #5889 的诉求，允许 `/loop` 读取可编辑的持久化任务列表，大幅提升自动化任务的连贯性。
4.  **[PR #5944](https://github.com/QwenLM/qwen-code/pull/5944) | fix(core): 终止重复的 shell 检查变体循环**
    *   *进展*: 引入循环守卫机制，阻断模型在遇到 `git status`、`git diff` 等相似只读检查命令时的无意义死循环。
5.  **[PR #5778](https://github.com/QwenLM/qwen-code/pull/5778) | feat(cli): 添加 `/model --vision` 作为后备视觉模型**
    *   *进展*: 完善多模型编排。当主模型（纯文本）接收到图像请求时，自动将视觉处理降级交由指定的视觉模型执行。
6.  **[PR #5943](https://github.com/QwenLM/qwen-code/pull/5943) | feat(web-shell): 添加 React 错误边界，防止单点崩溃白屏**
    *   *进展*: 增强了 Web Shell 的鲁棒性，隔离渲染崩溃避免整个应用崩溃。
7.  **[PR #5911](https://github.com/QwenLM/qwen-code/pull/5911) | fix(desktop): 规范化源 slug 验证与路径错误处理**
    *   *进展*: 深度防御强化。针对之前暴露的 CWE-22 路径穿越漏洞做进一步的清理与验证规范化。
8.  **[PR #5938](https://github.com/QwenLM/qwen-code/pull/5938) | perf(cli): 为 `qwen serve` 启用 V8 编译缓存并延迟版本获取**
    *   *进展*: 极速优化。通过 Node.js 缓存字节码和延迟执行版本检查，显著缩短了后台守护进程冷启动时间。
9.  **[PR #5919](https://github.com/QwenLM/qwen-code/pull/5919) | feat(channels): 注册 Telegram 机器人命令菜单**
    *   *进展*: 完善了 Telegram 平台的对齐体验，注册了原生命令菜单并增加了统一的 `/cancel` 指令。
10. **[PR #5030](https://github.com/QwenLM/qwen-code/pull/5030) | feat(core,cli,sdk): 无需合成 "continue" 即可恢复被中断的回合**
    *   *进展*: 会话状态机升级。在遭遇崩溃或中断后恢复会话时，底层不再强制插入虚假的“继续”消息，保持上下文纯净。

## 5. 功能需求趋势
综合近期的 Issues 与 PR 动态，社区演进呈现出以下四大趋势：
*   **后台自动化与多渠道接入**: 围绕 `qwen serve` 守护进程，自动化调度（`/loop`）、定时任务以及多端接入（钉钉群聊 `qwen tag`、Telegram Bot、Chrome 扩展等）正在成为核心发力点。
*   **工程状态的团队化与 Git 化**: 开发者对“单机版” AI 助手已不满足，强烈需要将 AI 的短期记忆、任务清单纳入 Git 版本控制体系，实现研发资产的团队级协同。
*   **上下文与成本精细化管理**: 随着高强度使用，社区开始深挖 Token 效率（如消除默认 8K 截断、优化 Anthropic 缓存命中率），降低生产环境部署成本。
*   **模型路由与容错机制**: 类似主模型/视觉模型/快速模型的动态切换（`--vision`, `--fast`）需求频出，表明用户期望工具端具备更智能的多模型编排能力。

## 6. 开发者关注点 (痛点总结)
*   **后台进程的资源泄漏**: Windows 平台上 `cua-driver.exe` 疑似僵尸进程挂起、高 CPU 占用的问题引发了安全与性能的双重担忧。
*   **调试 UI 与渲染 Bug**: 包括 Windows 下滚轮跳动到最上方（[#5941](https://github.com/QwenLM/qwen-code/issues/5941)）、MCP 对话框渲染残缺、Edit 工具的结果 Diff 反复污染后续输出等问题，直接影响了开发者的沉浸式编码体验。
*   **“黑盒”任务的控制权缺失**: 开发者极度介意 AI 在不可见的地方执行敏感操作（如静默 Cron 任务）。缺乏对后台任务的宏观干预（列出、停止、修改）是目前自动化功能最大的阻碍。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报
**日期**: 2026-06-28 | **数据来源**: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

## 1. 今日速览
今日社区开发活动极其活跃，共产生了 42 个更新的 PR。核心团队与贡献者集中攻坚了**上下文缓存最大化、Agent 协议（ACP）流式输出适配**以及**TUI 插件系统架构**。同时，针对 Agent 模式识别混淆和工具调用失败缺乏降级策略的痛点，社区提交了多项修复与运行时引导优化方案。

## 2. 版本发布
*过去 24 小时内无最新 Release 发布。*

## 3. 社区热点 Issues
以下是近期讨论热烈或影响深远的 10 个核心议题：

1. **[EPIC] v0.8.66: Token、缓存与上下文纪律发布闸门** ([#3388](https://github.com/Hmbown/CodeWhale/issues/3388))
   * **关注点**: 随着上下文变长，控制 Token 使用和缓存命中率成为核心挑战。此 Issue 旨在整合分散的性能基准，作为后续版本发布的强制卡点。
2. **[Bug] plan 和 agent 模式混合的问题似乎仍然存在** ([#3568](https://github.com/Hmbown/CodeWhale/issues/3568))
   * **关注点**: 用户反馈在 Plan 模式下发送指令，AI 的后台思考过程依然尝试直接修改文件。Agent 状态机感知不灵敏是目前影响体验的关键 Bug。
3. **[EPIC] 命令边界重构** ([#2870](https://github.com/Hmbown/CodeWhale/issues/2870))
   * **关注点**: 针对 TUI 命令解析的宏大重构计划，旨在将臃肿的单体逻辑拆分为可合并的分层结构，极大改善可维护性。
4. **[Enhancement] 支持 Cache-maximal（缓存最大化）上下文模式** ([#528](https://github.com/Hmbown/CodeWhale/issues/528))
   * **关注点**: 针对 DeepSeek V4 的缓存特性，提出不应过早压缩旧文件，而是每轮重新读取活动文件全文，保持源代码精度的激进策略。
5. **[Enhancement] 暴露并允许覆盖主系统提示词** ([#3638](https://github.com/Hmbown/CodeWhale/issues/3638))
   * **关注点**: 用户希望突破纯软件工程的局限，将 TUI 应用于文学创作等场景，呼吁支持从配置目录加载自定义系统提示。
6. **[Enhancement] 将 Moraine 作为长期记忆后端** ([#3495](https://github.com/Hmbown/CodeWhale/issues/3495))
   * **关注点**: 计划引入开源项目 Moraine，无损摄取历史会话，并通过 MCP 暴露为可搜索的记忆工具。
7. **[Enhancement] 申请加入 agentclientprotocol (ACP) 注册表** ([#3192](https://github.com/Hmbown/CodeWhale/issues/3192))
   * **关注点**: 生态建设需求。若被注册表收录，编辑器（如 Zed）能更无缝地集成和调用 CodeWhale。
8. **[Bug] Agent 模式：工具调用失败时的降级策略** ([#1641](https://github.com/Hmbown/CodeWhale/issues/1641))
   * **关注点**: 当前遇到反爬虫或网络超时时，Agent 会陷入死循环重试。社区呼吁实现自动切换备用工具或优雅降级的机制。
9. **[Enhancement] 基于 Playwright 的浏览器自动化工具** ([#3358](https://github.com/Hmbown/CodeWhale/issues/3358))
   * **关注点**: 目前的 Web 工具仅能抓取文本，无法执行 JS 和 DOM 交互，急需补充真正的浏览器自动化能力。
10. **[Bug] 工具调用的日志输出控制** ([#3256](https://github.com/Hmbown/CodeWhale/issues/3256))
    * **关注点**: 成功的工具调用输出噪音过大（80%为脚手架信息），要求默认折叠成功路径，自动展开报错路径。

## 4. 重要 PR 进展
今日有大量高质量 PR 被合并或更新，主要集中在架构优化与执行可靠性上：

1. **feat(working-set): cache-maximal context mode** ([#3697](https://github.com/Hmbown/CodeWhale/pull/3697))
   * 实现了 Issue #528，允许在上下文中注入活跃文件的完整内容，减少模型重复调用工具读取文件的开销。
2. **feat(plugins): add lightweight plugin system** ([#3699](https://github.com/Hmbown/CodeWhale/pull/3699))
   * 引入轻量级插件系统，支持从文件系统自动发现并注入外部 Skills 和 MCP 服务器，大幅扩展 TUI 能力边界。
3. **feat(acp): stream session/prompt deltas** ([#3702](https://github.com/Hmbown/CodeWhale/pull/3702))
   * 针对 Issue #3192，修改了 ACP 适配器，从以往的缓冲全体响应改为流式增量输出，极大提升了 Zed 等编辑器中的用户体验。
4. **feat(prompts): allow overriding the base prompt** ([#3696](https://github.com/Hmbown/CodeWhale/pull/3696))
   * 允许用户通过配置目录直接覆盖底层主提示词，无需修改源码即可将 TUI 转型为通用任务助手。
5. **fix(engine): nudge fallback after repeated tool errors** ([#3703](https://github.com/Hmbown/CodeWhale/pull/3703))
   * 针对 Issue #1641，引入了运行时提示机制：当工具反复报错时，引导模型更换工具、缩小范围或请求必要输入。
6. **fix(engine): suggest direct urls after repeated search errors** ([#3705](https://github.com/Hmbown/CodeWhale/pull/3705))
   * 补充了搜索降级策略：若 Web 搜索反复失败，系统会自动提取域名提示模型直接使用 `fetch_url` 抓取。
7. **feat(scorecard): token/cache/cost release-gate scorecard** ([#3693](https://github.com/Hmbown/CodeWhale/pull/3693))
   * 落地了 Issue #3388 的第一阶段，带来了具备回归检测能力的 Token/成本评分卡，为性能守门。
8. **fix(verifier): emit hunt verdict mapping** ([#3700](https://github.com/Hmbown/CodeWhale/pull/3700))
   * 对齐了验证器预览逻辑，将检查结果映射为 hunted/wounded/escaped 等直观状态，完善了 Agent 的自我验证闭环。
9. **refactor(runtime-api): extract workspace status helpers** ([#3691](https://github.com/Hmbown/CodeWhale/pull/3691))
   * 将臃肿的 `runtime_api.rs` 进行领域拆分，提取了 workspace 状态辅助函数，保持了架构的整洁。
10. **feat(skills): locale-aware skill descriptions** ([#3690](https://github.com/Hmbown/CodeWhale/pull/3690))
    * 优化了 Token 消耗：在非英语（如中文）环境下，自动加载对应语言的技能描述，精简系统提示词。

## 5. 功能需求趋势
从近期的 Issues 和 PR 中，可以明显看出以下技术演进趋势：
* **缓存与上下文工程极致化**：紧贴底层大模型（如 DeepSeek V4）的缓存计费特性，社区正推动从“尽早压缩总结”向“全量源码驻留”的激进上下文管理方式转变。
* **Agent 可靠性与状态机优化**：重点解决 Agent 在复杂任务中的“短路”问题，包括模式切换感知（Plan vs Agent）、死循环重试阻断，以及多级 fallback 降级策略的构建。
* **生态扩展与个性化**：对硬编码提示词的解耦（支持自定义 Constitution），以及轻量级插件系统的引入，表明 CodeWhale 正在从一个硬核 Coding 工具向泛用型的 Agent 底座演进。
* **外部编辑器融合（ACP/MCP）**：全力拥抱 Agent Client Protocol (ACP)，追求与 Zed 等主流 IDE 的无缝、流式集成。

## 6. 开发者关注点
* **执行噪音与调试体验**：开发者对 TUI 界面中的“日志刷屏”深恶痛绝（#3256）。期望默认的 “Intent-first”（意图优先）展示模式，只在失败时展开详情。
* **长上下文下的成本控制**：尽管模型支持长上下文，但社区对 Token 消耗依然敏感。本地化提示词加载（#3690）、精准的上下文保留策略（#3697）和发布闸门（#3693）是开发者极为看重的基建。
* **网络与工具稳定性**：由于反爬机制导致的工具调用失败频发，开发者强烈要求 Agent 层面具备类似人类的“容错变通”能力（#1641），而非单纯的抛错和死循环。

</details>