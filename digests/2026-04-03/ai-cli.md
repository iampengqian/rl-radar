# AI CLI 工具社区动态日报 2026-04-03

> 生成时间: 2026-04-02 22:07 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-04-03)

## 1. 生态全景
当前 AI CLI 工具已从单一的代码补全演进为具备自主执行能力的**智能体**平台。头部工具（Claude Code, Gemini CLI）正深陷于**TUI 渲染层**的复杂性与稳定性博弈中，试图在炫酷交互与传统终端体验间寻找平衡。开源生态与新晋竞争者则聚焦于**模型兼容性**与**性能优化**，通过支持 Bun 运行时、适配最新模型（如 Qwen 3.6, Opus 4.6）来构建差异化优势。整体而言，行业正处于从"可用"向"好用"跨越的关键攻坚期，**上下文管理**、**资源消耗**与**权限控制**成为各家的核心战场。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | Issue 热度 (Top 1 话题) | PR 状态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.90 | 🔥 **极高** (滚动丢失/显示消失) | 活跃 (反向工程开源) | 渲染故障、计费争议、数据安全 |
| **Gemini CLI** | v0.37.0-preview.1 | 📈 **高** (Win快捷键/OAuth报错) | 活跃 (TerminalBuffer重构) | 闪烁修复、内存路由、跨平台 |
| **GitHub Copilot CLI**| v1.0.16 | 📊 **中** (API限流/MCP策略) | ⏸️ 静默 (无新PR) | 稳定性、MCP调试、UI 回归 |
| **Kimi Code CLI** | v1.30.0 | 📈 **中高** (死循环/Win路径) | 密集 (Session管理/Undo) | 工作流编排、Undo/Fork、兼容性 |
| **OpenCode** | 无发布 | 🔥 **极高** (内存泄漏 >20GB) | 活跃 (性能优化/移动端) | 内存泄漏、TUI卡顿、缓存失效 |
| **Qwen Code** | v0.14.0-preview.5 | 🚀 **中** (新模型支持) | 极高 (Bun/Loop/Hooks) | 新模型集成、成本优化、自动化 |

> *注：Claude Code 和 OpenCode 因存在严重阻断性 Bug（UI 消失、内存爆炸），社区讨论热度最为激烈。*

## 3. 共同关注的功能方向

1.  **TUI 渲染与滚动体验**
    *   **涉及工具**: Claude Code, Gemini CLI, GitHub Copilot CLI, OpenCode。
    *   **核心诉求**: 社区强烈反对强制开启的 "Alt-Screen" 或 "无闪烁渲染" 模式，因为这导致**滚动历史丢失**和**无法检索上下文**。开发者倾向于保留原生终端的滚动缓冲区行为。

2.  **模型多样性与最新模型适配**
    *   **涉及工具**: Qwen Code (Qwen 3.6), OpenCode (Opus 4.6), GitHub Copilot CLI (Gemini Pro)。
    *   **核心诉求**: "模型饥渴症" 明显，用户希望 CLI 工具能在发布第一时间支持最强模型（如 Qwen 3.6, Opus 4.6），并对弃用某些模型（如 Copilot 移除 Gemini）表示不满。

3.  **上下文管理与会话持久化**
    *   **涉及工具**: Kimi Code, Claude Code, Gemini CLI。
    *   **核心诉求**: 需要更精细的会话控制，如 `/undo`, `/fork`（Kimi），以及区分**全局记忆**与**项目记忆**（Gemini）。同时，长上下文带来的**显存/内存泄漏**（OpenCode）和**文件膨胀**（Claude Code）是普遍痛点。

4.  **平台兼容性**
    *   **涉及工具**: Gemini CLI, Kimi Code CLI, Qwen Code。
    *   **核心诉求**: Windows 平台依然是兼容性重灾区，涉及 PowerShell 路径、CRLF 换行符、Shift+Tab 快捷键失效等问题。

## 4. 差异化定位分析

*   **Claude Code**: **"激进但不稳定的生产力领跑者"**。
    *   *定位*: 面向深度代码生成的重度用户，试图通过复杂的 TUI 动画和 Hook 机制提供 IDE 级体验。
    *   *风险*: 近期版本在渲染层和计费逻辑上翻车，引发信任危机，甚至导致社区自行反向工程源码。

*   **Gemini CLI**: **"架构调整中的全能选手"**。
    *   *定位*: 背靠 Google 生态，注重 Agent 架构的合理性（如子代理权限、记忆分离）。
    *   *特点*: 正在通过 "TerminalBuffer" 等底层重构解决显示顽疾，技术债清理力度大。

*   **GitHub Copilot CLI**: **"稳健但封闭的企业首选"**。
    *   *定位*: 依托 GitHub 生态，强调与企业级策略的集成。
    *   *痛点*: 迭代速度慢，对非 OpenAI 模型支持波动，UI 变更引发的老用户抵触较强。

*   **Kimi Code CLI**: **"注重工作流的后起之秀"**。
    *   *定位*: 强调会话管理的灵活性，积极兼容 Claude 插件生态，试图通过更细腻的交互（如 Plan Mode, Undo）抢占心智。

*   **Qwen Code**: **"开源与性能的激进探索者"**。
    *   *定位*: 拥抱最新开源模型和运行时，不仅追求模型效果，还通过引入 Bun 运行时解决性能瓶颈，功能迭代极快。

## 5. 社区热度与成熟度

*   **高热度/高焦虑区**: Claude Code 和 OpenCode。虽然功能强大，但当前版本存在严重影响体验的 Bug（UI 消失、内存爆炸），社区处于"一边骂一边用"的状态，表明用户粘性高但对稳定性极度焦虑。
*   **高活跃/快速迭代区**: Qwen Code 和 Kimi Code。PR 合并频繁，功能更新快，社区正处于上升期，开发者积极贡献代码（如 Bun 支持、插件兼容）。
*   **稳定/维护期**: GitHub Copilot CLI 和 Gemini CLI。更新较为平稳，更多关注点在于 Bug 修复和底层架构优化，而非激进的功能堆叠。

## 6. 值得关注的趋势信号

1.  **终端渲染技术遇到瓶颈**：
    *   多个工具在尝试高级 UI（动画、无闪烁）时均遭遇了滚动历史丢失的问题。这释放了一个信号：**CLI 工具不应盲目模仿 GUI**，保持对原生终端特性的兼容（如 Scrollback Buffer）是开发者的底线。

2.  **成本控制成为核心功能**：
    *   从 Claude Code 的"天价账单"抱怨到 Qwen Code 的"微压缩"策略和"隐式缓存"修复，说明 Token 消耗已成为开发者的核心痛点。未来的 CLI 竞争力将很大程度上取决于**谁能更省 Token**。

3.  **开源反哺与逆向工程**：
    *   Claude Code 社区出现的"从 NPM 包还原源码" PR 显示，闭源 AI 工具的透明度正在受到挑战。开发者需要审计逻辑、定制行为，这为 OpenCode 和 Qwen Code 这类更开放的项目提供了机会。

4.  **自动化与 Hooks 的崛起**：
    *   Qwen Code 的 `/loop` 命令和增强的 Hook 系统表明，CLI 正在从"交互式问答工具"向"**自动化守护进程**"演变，开发者希望 AI 能在后台自主完成监控和修复任务。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区生态热点报告 (2026-04-03)

基于 `anthropics/skills` 官方仓库的 PR 和 Issue 数据，以下是社区最新动态分析。

---

### 1. 热门 Skills 排行
*注：由于提供的 PR 列表中评论数均为 undefined，本排行基于 PR 描述的完善度、功能独特性及关联 Issue 的热度综合评估。*

1.  **[文档排版控制] document-typography**
    *   **功能**：解决 AI 生成文档中的排版痛点，如孤行、寡妇段落及编号错位。
    *   **状态**：`OPEN` (#514)
    *   **分析**：针对 AI 生成内容"虽然逻辑通顺但格式难看"的普遍痛点，具有极高的实用价值。
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

2.  **[元技能] skill-quality-analyzer & skill-security-analyzer**
    *   **功能**：一套用于审查其他 Skills 的"体检工具"，涵盖结构文档（20%权重）及安全性分析。
    *   **状态**：`OPEN` (#83)
    *   **分析**：属于生态建设的基础设施，有助于提升社区贡献代码的质量与安全性。
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

3.  **[前端设计] frontend-design skill improvement**
    *   **功能**：重构前端设计 Skill，提高指令的清晰度和可执行性。
    *   **状态**：`OPEN` (#210)
    *   **分析**：针对现有 Skill 进行"由虚向实"的优化，反映了社区对可落地性的高要求。
    *   **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

4.  **[文档生成] ODT (OpenDocument) Skill**
    *   **功能**：支持开放文档格式（LibreOffice/Google Docs 常用）的创建、模板填充及 HTML 转换。
    *   **状态**：`OPEN` (#486)
    *   **分析**：补齐了除 PDF/DOCX 之外的重要办公文档格式拼图。
    *   **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

5.  **[系统自动化] sensory — macOS AppleScript**
    *   **功能**：利用 AppleScript 实现原生 macOS 自动化，区别于基于截图的 Computer Use。
    *   **状态**：`OPEN` (#806)
    *   **分析**：为 Claude Code 提供了更轻量、权限更可控的本地操作系统集成方案。
    *   **链接**：[PR #806](https://github.com/anthropics/skills/pull/806)

6.  **[测试工程] quality-playbook**
    *   **功能**：基于需求文档自动生成测试计划和质量系统，而非仅仅根据代码生成测试用例。
    *   **状态**：`OPEN` (#659)
    *   **分析**：引入了传统 QA 方法论，适合对软件质量有严格要求的团队。
    *   **链接**：[PR #659](https://github.com/anthropics/skills/pull/659)

---

### 2. 社区需求趋势

根据 Issue 区的热门讨论，社区目前最期待以下方向的演进：

*   **Skill 触发机制的稳定性**
    *   **热点**：Issue #556 报告 `claude -p` 模式下 Skill 触发率为 0，这表明开发者希望在 CI/CD 或脚本化场景中也能可靠地调用 Skill，而不仅限于交互式聊天。
    *   **链接**：[Issue #556](https://github.com/anthropics/skills/issues/556)

*   **企业级权限与信任边界**
    *   **热点**：Issue #492 指出社区 Skill 混入官方命名空间可能导致权限滥用。社区强烈呼吁建立清晰的 Skill 签名机制或隔离策略。
    *   **链接**：[Issue #492](https://github.com/anthropics/skills/issues/492)

*   **团队协作与共享库**
    *   **热点**：Issue #228 呼吁支持组织内部 Skill 一键分发，以替代目前通过 Slack/Email 手动传输 `.skill` 文件的低效方式。
    *   **链接**：[Issue #228](https://github.com/anthropics/skills/issues/228)

*   **Skill 标准化为 MCP (Model Context Protocol)**
    *   **热点**：Issue #16 讨论将 Skill 转化为标准 API 接口，这暗示了开发者希望 Skills 能更具编程接口的属性，便于与其他 Agent 框架集成。
    *   **链接**：[Issue #16](https://github.com/anthropics/skills/issues/16)

---

### 3. 高潜力待合并 Skills (PRs)

以下 PR 修复了关键 Bug 或填补了文档空白，合并可能性较高：

*   **[关键修复] DOCX 书签 ID 冲突修复** (PR #541)
    *   **价值**：解决了 OOXML 格式中 ID 碰撞导致文档损坏的严重 Bug。
    *   **链接**：[PR #541](https://github.com/anthropics/skills/pull/541)
*   **[工具改进] Skill-Creator YAML 校验增强** (PR #36, #539)
    *   **价值**：修复了 Skill 创建工具的 Frontmatter 校验漏洞，防止语法错误，直接提升开发者体验。
    *   **链接**：[PR #36](https://github.com/anthropics/skills/pull/36) | [PR #539](https://github.com/anthropics/skills/pull/539)
*   **[社区健康] 添加 CONTRIBUTING.md** (PR #509)
    *   **价值**：填补了仓库贡献指南的空白（此前健康度评分仅 25%），这是官方完善社区治理的必要步骤。
    *   **链接**：[PR #509](https://github.com/anthropics/skills/pull/509)

---

### 4. Skills 生态洞察

> **"社区正从'创造单一功能 Skill'转向'构建可信赖、可自动化的企业级 Skill 生态'。"**

核心诉求已从最初的"如何写一个 Skill"转变为如何**确保 Skill 触发稳定**（自动化）、**管理信任风险**（安全性）以及**团队高效分发**（协作化）。

---

# Claude Code 社区动态日报 (2026-04-03)

> 数据来源: github.com/anthropics/claude-code | 分析师: AI 技术分析组

---

## 1. 今日速览

Claude Code 发布 **v2.1.90** 版本，引入交互式教学功能 `/powerup`，但随之而来的 "无闪烁渲染" 机制在默认开启后引发了社区大规模反馈，导致终端滚屏历史丢失。同时，社区围绕 "完全开源 Claude Code" 提交了多个 PR，试图从 npm 包中反向还原源码，显示出极高的自定义与审计需求。

## 2. 版本发布

### v2.1.90
- **新增 `/powerup` 命令**：提供带有动画演示的交互式课程，帮助用户学习 Claude Code 的各项功能。
- **新增环境变量**：`CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE`，允许在 `git pull` 失败时保留现有的 marketplace 缓存，改善了离线环境下的稳定性。
- **目录保护**：将 `.husky` 添加到受保护目录列表。

## 3. 社区热点 Issues (Top 10)

| 优先级 | Issue | 理由 |
| :--- | :--- | :--- |
| 🔴 **P0** | [#41814](https://github.com/anthropics/claude-code/issues/41814) <br> **对话内容在终端中消失** | **最热 Issue (👍84, 💬47)**。v2.1.89 引入的回归问题，导致用户输入和 AI 回复在对话过程中从终端显示区域被移除，严重影响使用体验。 |
| 🔴 **P0** | [#42024](https://github.com/anthropics/claude-code/issues/42024) <br> **v2.1.89 滚动历史丢失** | 多名用户确认升级后终端内的滚动缓冲区被破坏，无法回看之前的输出，与上述显示问题属于同一渲染机制变更引发的故障。 |
| 🟠 **P1** | [#41907](https://github.com/anthropics/claude-code/issues/41907) <br> **新版激进隐藏历史输出** | 报告指出新版本在会话活跃期间会隐藏/折叠所有先前的输出，导致用户无法参考上下文，工作流受阻。 |
| 🟠 **P1** | [#42553](https://github.com/anthropics/claude-code/issues/42553) <br> **v2.1.90 会话滚动历史被移除** | 针对最新版本的反馈，指出完整的会话滚动历史仅保留 2-3 页，早期内容被截断。 |
| 🟠 **P1** | [#10794](https://github.com/anthropics/claude-code/issues/10794) <br> **macOS 终端闪烁致 VSCode 崩溃** | 长期存在的严重 Bug，终端渲染层的闪烁会直接导致宿主 VSCode 编辑器完全崩溃，影响 macOS 用户。 |
| 🟡 **P2** | [#42052](https://github.com/anthropics/claude-code/issues/42052) <br> **Max 20x 计划用量异常耗尽** | 用户报告在轻量级工作负载下（2小时，5次提交），$200/月的订阅额度被异常耗尽，疑似后端计费或上下文处理逻辑问题。 |
| 🟡 **P2** | [#42804](https://github.com/anthropics/claude-code/issues/42804) <br> **1M 上下文模型过早触发压缩** | **已关闭**。在使用 Opus 1M 上下文模型时，仅发送约 5 条消息后触发上下文压缩，未能有效利用长窗口优势。 |
| 🟡 **P2** | [#38055](https://github.com/anthropics/claude-code/issues/38055) <br> **Cowork 更新导致数据永久丢失** | **数据安全问题**。次要版本更新后，用户的聊天历史和计划任务被永久删除，缺乏迁移机制。 |
| 🔵 **P3** | [#42810](https://github.com/anthropics/claude-code/issues/42810) <br> **Session JSONL 文件无限膨胀** | **性能问题**。单个会话文件可膨胀至 800MB+，但有效信息仅几十 KB，缺乏垃圾回收 (GC) 或压缩机制。 |
| 🔵 **P3** | [#3433](https://github.com/anthropics/claude-code/issues/43433) <br> **Linux OAuth 连接 GitHub MCP 失败** | 跨平台兼容性问题，长期未解决，影响 Linux 用户通过 OAuth 连接远程 MCP 服务器。 |

## 4. 重要 PR 进展 (Top 10)

| 状态 | PR | 内容概述 |
| :--- | :--- | :--- |
| 🛠️ **Open** | [#42807](https://github.com/anthropics/claude-code/pull/42807) | **修复 Hook 机制** <br> 修复了 `stop` 和 `prompt` 事件的简单模式匹配规则无法正确映射字段的问题，将其分别指向 `reason` 和 `user_prompt`。 |
| 📖 **Open** | [#42665](https://github.com/anthropics/claude-code/pull/42665) | **代码库文档化** <br> 添加了详尽的代码库分析、架构深挖、用例及已知问题文档，主要服务于教育和二次开发目的。 |
| 🔓 **Open** | [#41518](https://github.com/anthropics/claude-code/pull/41518) | **完全开源尝试** <br> 开发者从 npm 包的 source map 中反向提取了 1906 个 TypeScript 源文件，并配置了 Bun 打包器以实现独立构建。 |
| 🔌 **Open** | [#39148](https://github.com/anthropics/claude-code/pull/39148) | **会话历史路径无关插件** <br> 提议增加 `preserve-session` 插件，通过 UUID 映射解决项目目录重命名或移动导致会话历史丢失的问题。 |
| 🐛 **Open** | [#42505](https://github.com/anthropics/claude-code/pull/42505) | **修复 Git 命令参数** <br> 将错误的 `git checkout --branch` 修正为 `git checkout -b`，修复了 `/commit-push-pr` 插件的创建分支步骤。 |
| 📝 **Open** | [#42265](https://github.com/anthropics/claude-code/pull/42265) | **文档链接更新** <br> 更新了插件安装文档，移除了已弃用的 npm 安装方式，并修复了指向旧域名的死链。 |
| 🧠 **Open** | [#38728](https://github.com/anthropics/claude-code/pull/38728) | **内存监控插件** <br> 添加 `memory-alert` 插件，用于监控 Claude Code 进程的 RSS 内存占用并在超阈值时报警。 |
| 🔧 **Open** | [#42701](https://github.com/anthropics/claude-code/pull/42701) | **修复 DevContainer 启动** <br> 修复了 `init-firewall.sh` 中 `ipset` 因域名解析到重复 IP 而报错的问题。 |
| 🗑️ **Closed** | [#42245](https://github.com/anthropics/claude-code/pull/42245) | **EvalView 回归测试插件** <br> （已关闭）提议添加用于 AI 智能体回归测试的插件，通过结构化差异对比工具调用行为。 |
| 📚 **Open** | [#41589](https://github.com/anthropics/claude-code/pull/41589) | **中文源码架构分析** <br> 提交了 Claude Code 的中文架构分析文档及源码存档，包含核心引擎、工具系统及权限模型解析。 |

## 5. 功能需求趋势

1.  **UI/UX 可控性**
    *   **核心诉求**：用户强烈反对新版默认开启的 "虚拟化滚动/无闪烁" 渲染模式。
    *   **趋势**：要求提供开关以恢复传统的终端渲染模式，或修复新渲染器对 Scrollback Buffer 的破坏。
2.  **内存与上下文管理**
    *   **核心诉求**：随着上下文变长，性能下降明显。
    *   **趋势**：需要更智能的会话文件 GC（垃圾回收）机制，以及针对 1M 上下文模型更合理的压缩触发策略。
3.  **插件与扩展生态**
    *   **核心诉求**：官方功能更新速度跟不上定制需求。
    *   **趋势**：社区正积极开发会话持久化、内存监控、回归测试等增强型插件。

## 6. 开发者关注点

-   **渲染机制变更引发的稳定性风险**：近期更新的重灾区集中在 TUI (Terminal UI) 层。开发者普遍认为，牺牲 "滚动历史" 换来的 "无闪烁" 体验得不偿失，期望官方尽快回滚或提供降级选项。
-   **计费与配额透明度**：关于 "轻量操作迅速耗尽 Max Plan 额度" 的报告引发了恐慌，开发者呼吁公开更详细的 Token 消耗明细或上下文构建日志。
-   **数据持久化与安全**：针对 Cowork 功能的 "更新即删库" 问题，开发者对本地数据的存储可靠性表示担忧，要求建立明确的数据迁移和保护协议。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-04-03)

## 1. 今日速览
Gemini CLI 今日发布了 **v0.37.0-preview.1**，主要修复了子代理工具更新的配置覆盖问题，并解决了 UI 渲染闪烁的难题。社区热点集中在 **Windows 平台兼容性**（快捷键失效）和 **OAuth 认证下的资源耗尽误报**。此外，开发团队正在积极推进 "TerminalBuffer" 模式以彻底解决终端显示残留和闪烁问题。

## 2. 版本发布

### v0.37.0-preview.1
- **更新重点**: 修复了子代理工具无法立即应用配置覆盖的问题，并解决了列表选择界面边界的闪烁问题。
- **Changelog**: [查看详情](https://github.com/google-gemini/gemini-cli/pull/24561)

## 3. 社区热点 Issues

1.  **[#20314] Windows 平台 Shift+Tab 快捷键失效**
    *   **重要性**: 影响核心交互，导致用户无法从 Plan 模式切换回 Manual 模式，且问题涉及旧版 Node 环境，影响范围较广。
    *   **反应**: 评论数高达 30 条，用户纷纷确认在 iTerm2 等环境下存在类似输入问题。
    *   **链接**: [Issue #20314](https://github.com/google-gemini/gemini-cli/issues/20314)

2.  **[#24101] OAuth 认证导致 "Capacity Exhausted" 虚假报错**
    *   **重要性**: 严重的可用性 Bug。使用 OAuth 登录时触发了错误的容量限制警告，导致极高延迟甚至不可用，而 API Key 方式正常。
    *   **反应**: 获得 6 个 👍，表明受影响用户较多。
    *   **链接**: [Issue #24101](https://github.com/google-gemini/gemini-cli/issues/24101)

3.  **[#24557] Mac 端粘贴大段文本触发多次自动提交**
    *   **重要性**: 影响操作体验。使用 CMD+V 粘贴大量代码时会意外触发多次 prompt 提交，而 Ctrl+V 正常。
    *   **链接**: [Issue #24557](https://github.com/google-gemini/gemini-cli/issues/24557)

4.  **[#22863] 代理倾向使用不安全的对象克隆**
    *   **重要性**: 架构风险。Gemini 生成的代码常包含不完整实现的 `clone`，可能导致运行时错误或系统不稳定。
    *   **链接**: [Issue #22863](https://github.com/google-gemini/gemini-cli/issues/22863)

5.  **[#23582] 子代理缺乏对审批模式的感知**
    *   **重要性**: Agent 架构优化。目前子代理不知道当前处于 Plan Mode 还是 Auto-Edit Mode，导致其指令与策略引擎的拦截行为冲突。
    *   **链接**: [Issue #23582](https://github.com/google-gemini/gemini-cli/issues/23582)

6.  **[#24570] v0.36.0 版本长时间卡在 "Thinking" 状态**
    *   **重要性**: 性能问题。即使订阅了 AI Pro，简单指令也会导致 CLI 无响应超过 5 分钟。
    *   **链接**: [Issue #24570](https://github.com/google-gemini/gemini-cli/issues/24570)

7.  **[#24202] SSH 环境下文本乱码**
    *   **重要性**: 环境兼容性。通过 Windows SSH 连接到 gLinux 时界面出现乱码，导致无法使用。
    *   **链接**: [Issue #24202](https://github.com/google-gemini/gemini-cli/issues/24202)

8.  **[#22819] 实现全局与项目的内存路由分离**
    *   **重要性**: 功能增强。提议 Agent 应区分全局偏好（如提交风格）和项目特定上下文（如代码库结构），以优化记忆管理。
    *   **链接**: [Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)

9.  **[#24576] 指令执行逻辑异常**
    *   **重要性**: 逻辑可靠性。Agent 确认 "I will now halt" 后却继续执行操作，未遵守停止指令。
    *   **链接**: [Issue #24576](https://github.com/google-gemini/gemini-cli/issues/24576)

10. **[#14028] LaTeX 格式渲染失败**
    *   **重要性**: 显示问题。模型认为支持 LaTeX 但控制台并未渲染，导致输出乱码。
    *   **链接**: [Issue #14028](https://github.com/google-gemini/gemini-cli/issues/14028)

## 4. 重要 PR 进展

1.  **[#24512] feat(ui): 启用 "TerminalBuffer" 模式解决闪烁**
    *   **内容**: 引入新的渲染模式，利用静态渲染解决传统 Alternate Buffer 模式下的 UI 闪烁问题，Priority P1 级别。
    *   **链接**: [PR #24512](https://github.com/google-gemini/gemini-cli/pull/24512)

2.  **[#24571] fix(core): 修复 Windows PowerShell 翻译错误**
    *   **内容**: 修复 Windows 下 `replace` 工具导致文件清空的严重 Bug，移除了损坏的 PowerShell 翻译逻辑，Priority P0。
    *   **链接**: [PR #24571](https://github.com/google-gemini/gemini-cli/pull/24571)

3.  **[#24215] feat: 实现动态缓冲区切换**
    *   **内容**: 允许用户通过 `Alt+T` 在常规和备用屏幕缓冲区之间切换，优化长会话的显示体验。
    *   **链接**: [PR #24215](https://github.com/google-gemini/gemini-cli/pull/24215)

4.  **[#24569] fix(core): 修复扩展计划目录的贪婪占用问题**
    *   **内容**: 修复了带有 `plan.directory` 的扩展在启动时劫持全局计划目录的 Bug，改用 MRU（最近最少使用）动态解析架构。
    *   **链接**: [PR #24569](https://github.com/google-gemini/gemini-cli/pull/24569)

5.  **[#24566] fix(cli): 修复非交互环境下的输出丢失**
    *   **内容**: 解决了在 Python 脚本等非 TTY 环境中运行 `gemini skills list` 无输出的回归问题。
    *   **链接**: [PR #24566](https://github.com/google-gemini/gemini-cli/pull/24566)

6.  **[#24270] feat(cli): 添加实验性 /btw 旁路询问功能**
    *   **内容**: 允许用户在不修改主对话历史或触发工具的情况下进行快速旁路提问，适合临时查询。
    *   **链接**: [PR #24270](https://github.com/google-gemini/gemini-cli/pull/24270)

7.  **[#24509] Enable "Compact Tool Output" by default**
    *   **内容**: 计划将 "紧凑工具输出" 设置为默认开启，以简化默认用户界面，移除繁杂的边框输出。
    *   **链接**: [PR #24509](https://github.com/google-gemini/gemini-cli/pull/24509)

8.  **[#24447] feat(ui): 滚动动量增强**
    *   **内容**: 优化长对话滚动体验，方向改变时重置动量，解决滚动条跳动和屏幕闪烁问题。
    *   **链接**: [PR #24447](https://github.com/google-gemini/gemini-cli/pull/24447)

9.  **[#24111] docs(evals): 同步 Evals 文档与代码**
    *   **内容**: 更新了 Evals 模块的 README，补充了缺失的属性文档，修正了过时的示例。
    *   **链接**: [PR #24111](https://github.com/google-gemini/gemini-cli/pull/24111)

10. **[#24573] fix(core): 传递 includeDirectories 到沙箱配置**
    *   **内容**: 修复了沙箱配置中遗漏 `includeDirectories` 属性的问题，确保沙箱能正确访问指定目录。
    *   **链接**: [PR #24573](https://github.com/google-gemini/gemini-cli/pull/24573)

## 5. 功能需求趋势

*   **UI 渲染稳定性**: 社区和开发团队都极度关注终端渲染的稳定性，特别是解决 Flicker（闪烁）、Scroll momentum（滚动动量）和 SSH 环境下的乱码问题。
*   **Agent 记忆与上下文管理**: 开发者希望 Agent 具备更智能的上下文感知能力，包括全局与项目级记忆的分离（Global vs Project Memory），以及对当前审批模式的感知。
*   **平台兼容性**: Windows 平台的输入体验（Shift+Tab, Paste）依然是痛点，需要针对性的底层修复。

## 6. 开发者关注点

*   **非交互模式支持**: 开发者反馈在脚本或非 TTY 环境中调用 CLI（如 `skills list`）时遇到输出丢失问题，需确保 CLI 在自动化场景下的可用性。
*   **配置隔离与覆盖**: 扩展之间或扩展与全局配置之间的冲突（如 Plan Directory 劫持）是开发者关注的焦点，需更严格的隔离机制。
*   **错误信息的准确性**: OAuth 用户对 "Capacity Exhausted" 的虚假报错感到困惑，开发者希望错误反馈能更精准地反映实际配额状态。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

你好！我是专注于 AI 开发工具的技术分析师。根据 2026-04-03 的 GitHub 数据，以下是 **GitHub Copilot CLI 社区动态日报**。

---

# 📅 GitHub Copilot CLI 社区动态日报 (2026-04-03)

## 1. 今日速览
今日 GitHub Copilot CLI 发布了 **v1.0.16** 正式版，重点优化了 MCP（Model Context Protocol）工具的调试体验与连接稳定性，并修复了 SQL 工具的显示逻辑。社区方面，**API 稳定性**（包括限流和连接中断）和 **MCP 策略配置** 是开发者讨论的最热烈话题，多位用户反馈个人版无法获取 MCP 策略导致服务不可用。

---

## 2. 版本发布
**[v1.0.16](https://github.com/github/copilot-cli/releases/tag/v1.0.16)** (发布于 2026-04-02)

本次更新主要聚焦于 MCP 工具链的健壮性与调试体验：
- **MCP 调试增强**：MCP 工具调用现在会在时间轴中显示工具名称和参数摘要，方便开发者排查问题。
- **连接稳定性修复**：修复了当工作目录变更时，MCP Server 无法使用有效身份验证正确重连的问题。
- **工具显示优化**：当通过 `excludedTools` 或 `availableTools` 排除 SQL 工具时，相关的 SQL 提示标签将不再显示。
- **新功能**：增加了 `PermissionRequest`（权限请求）机制。

---

## 3. 社区热点 Issues (Top 10)

以下筛选了今日最受关注或影响较大的 Issues：

1.  **[API 限流与瞬态错误] Request failed due to a transient API error**
    *   **链接**: [#2101](https://github.com/github/copilot-cli/issues/2101)
    *   **热度**: 👍 12 | 💬 16
    *   **点评**: 众多用户报告频繁遇到 API 瞬态错误，随即触发速率限制。这直接影响了连续工作的能力，是当前社区最大的痛点之一。

2.  **[UI/UX 严重倒退] Please bring back no-alt-screen**
    *   **链接**: [#2334](https://github.com/github/copilot-cli/issues/2334)
    *   **热度**: 👍 14 | 💬 4
    *   **点评**: 开发者强烈反对当前的 `alt-screen` 模式，因为它阻止了滚动查看历史记录和使用终端查找功能，严重破坏了工作流。

3.  **[功能请求] Support clipboard image paste in WSL**
    *   **链接**: [#1217](https://github.com/github/copilot-cli/issues/1217)
    *   **热度**: 👍 46 | 💬 2
    *   **点评**: WSL 用户高票请求支持从 Windows 剪贴板直接粘贴图片，这对于多模态交互场景至关重要。

4.  **[MCP 策略阻断] Failed to fetch MCP registry policy for individual user (404)**
    *   **链接**: [#2479](https:///github/copilot-cli/issues/2479)
    *   **热度**: 👍 10 | 💬 5
    *   **点评**: 个人版用户在开启 MCP 后遇到 404 错误，导致所有 MCP 服务器被策略拦截，这是一个阻碍性的 Bug。

5.  **[连接稳定性] HTTP/2 GOAWAY race condition causes cascading retry failures**
    *   **链接**: [#2421](https://github.com/github/copilot-cli/issues/2421)
    *   **热度**: 👍 7 | 💬 3
    *   **点评**: 深度技术分析贴。指出了 CLI 的 HTTP/2 连接池在处理 GOAWAY 帧时存在竞态条件，导致级联重试失败和高级请求额度的浪费。

6.  **[UI Bug] Light theme doesn't work**
    *   **链接**: [#135](https://github.com/github/copilot-cli/issues/135)
    *   **热度**: 👍 9 | 💬 10
    *   **点评**: 长期未修复的视觉问题，导致浅色主题终端下的可读性极差，影响用户体验。

7.  **[模型支持] Restore support for Gemini Pro**
    *   **链接**: [#2434](https://github.com/github/copilot-cli/issues/2434)
    *   **热度**: 👍 4 | 💬 4
    *   **点评**: v1.0.14 移除了对 Gemini 3 Pro 的支持，引发了依赖该模型用户的不满，呼吁恢复模型多样性。

8.  **[请求错误] CLI constantly getting 400 errors for invalid request body**
    *   **链接**: [#1274](https://github.com/github/copilot-cli/issues/1274)
    *   **热度**: 👍 6 | 💬 14
    *   **点评**: 在进行代码审查等操作时频繁出现 400 错误，怀疑是 CLI 构造的请求体与服务端校验不匹配。

9.  **[环境加载卡死] UI perpetually displays "Loading environment"**
    *   **链接**: [#2462](https://github.com/github/copilot-cli/issues/2462)
    *   **热度**: 👍 6 | 💬 2
    *   **点评**: v1.0.15 引入的回归问题，UI 一直显示加载中，虽然功能正常，但严重影响视觉体验。

10. **[快捷键冲突] ctrl+shift+c no longer copies to clipboard on Linux**
    *   **链接**: [#2082](https://github.com/github/copilot-cli/issues/2082)
    *   **热度**: 👍 3 | 💬 13
    *   **点评**: Linux 用户常用的复制快捷键被 CLI 劫持或失效，干扰了原生终端操作习惯。

---

## 4. 重要 PR 进展
*过去24小时内无新增或更新的 Pull Requests。*
*(注：这通常意味着团队可能正在合并内部分支或主要精力集中在 Issue 处理上，昨日发布的 v1.0.16 可能是近期开发成果的体现。)*

---

## 5. 功能需求趋势
根据近期 Issues 的关键词分析，社区功能需求呈现以下趋势：
*   **模型多样性与稳定性**：开发者强烈希望支持更多模型（如 Gemini 3 Pro），并对 Claude 系列模型的连接稳定性（HTTP/2 GOAWAY）有极高要求。
*   **MCP 生产可用性**：随着 MCP 的引入，用户对 Server 的连接重试、权限策略（尤其是个人版）以及调试信息的可视化有明确需求。
*   **原生终端体验回归**：社区对新版 UI（Alt-screen 模式）存在显著抵触，呼吁保留或恢复传统终端的滚动和查找能力。
*   **跨平台一致性**：WSL 图像支持和 Linux 快捷键兼容性是跨平台体验的关键缺口。

---

## 6. 开发者关注点（痛点总结）
1.  **服务连通性焦虑**：无论是 API 限流 (#2101) 还是 HTTP/2 连接中断 (#2421)，开发者对“AI 不可用”的容忍度极低，尤其是消耗了 Premium 配额却未得到结果时。
2.  **UI/UX 变更的适应成本**：强制性的 UI 变更（如 Alt-screen、快捷键覆盖）容易引发资深用户的反感，建议增加可配置项。
3.  **配置策略的困惑**：个人版与企业版在 MCP 功能上的策略界限不清（#2479），导致用户在配置功能时遭遇“404”或“Blocked by policy”而无从下手。

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-04-03)

## 1. 今日速览
Kimi Code CLI 今日发布了 **v1.30.0** 重要更新，重点修复了 Windows 平台的 PowerShell 路径问题，并引入了呼声极高的 Session 管理（`/undo`, `/fork`）和 Plan 模式（`--plan`）功能。社区方面，关于工作流编排、Claude 插件兼容性以及文档完善度的讨论热度较高，显示用户正尝试将 Kimi CLI 应用于更复杂的生产环境。

---

## 2. 版本发布
### **v1.30.0**
*   **核心修复**：彻底解决了 Windows 环境下 PowerShell 路径检测失败导致 Shell 工具不可用的问题（[#1702](https://github.com/MoonshotAI/kimi-cli/pull/1703), [#1713](https://github.com/MoonshotAI/kimi-cli/pull/1713)）。
*   **新特性**：
    *   新增 `--plan` 启动参数，支持直接进入规划模式。
    *   新增 `/undo` 和 `/fork` 命令，极大增强了会话历史的回溯与分支能力。
    *   改进了 `kimi export` 的交互体验，默认预览上一次会话。
    *   增加了敏感文件保护机制，防止误读取 `.env` 等文件。

---

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] SetTodoList 风暴 bug (#1710)**
    *   **关注点**：用户报告升级到 v1.29.0 后，Agent 频繁触发 `SetTodoList` 调用，形成死循环，严重影响使用。
    *   **重要性**：直接影响 Agent 稳定性和 Token 消耗，需优先关注。
    *   链接: [MoonshotAI/kimi-cli Issue #1710](https://github.com/MoonshotAI/kimi-cli/pull/1710)

2.  **[OPEN] 诉求：工作流编排支持 (#1721)**
    *   **关注点**：开发者希望引入类似 DAG 的工作流编排功能，以实现比单纯 Prompt 更稳定的复杂任务控制。
    *   **重要性**：反映了进阶用户对确定性流程控制的强烈需求。
    *   链接: [MoonshotAI/kimi-cli Issue #1721](https://github.com/MoonshotAI/kimi-cli/pull/1721)

3.  **[OPEN] Claude 兼容本地插件支持 (#1714)**
    *   **关注点**：用户希望能够直接加载 Claude 风格的本地插件，以复用现有生态。
    *   **重要性**：生态兼容性是吸引存量用户的关键。
    *   链接: [MoonshotAI/kimi-cli Issue #1714](https://github.com/MoonshotAI/kimi-cli/pull/1714)

4.  **[OPEN] 文档质量与模型列表缺失 (#1711)**
    *   **关注点**：用户批评当前文档未明确列出支持的模型，且缺乏 Web Search 配置说明。
    *   **重要性**：文档是用户的第一入口，直接影响转化率。
    *   链接: [MoonshotAI/kimi-cli Issue #1711](https://github.com/MoonshotAI/kimi-cli/pull/1711)

5.  **[OPEN] Windows 换行符 (CRLF/LF) 配置诉求 (#1719)**
    *   **关注点**：Windows 用户指出 CLI 强制转换 CRLF 破坏了团队代码规范，要求支持原格式保留或配置 LF。
    *   **重要性**：跨平台协作的典型痛点。
    *   链接: [MoonshotAI/kimi-cli Issue #1719](https://github.com/MoonshotAI/kimi-cli/pull/1719)

6.  **[CLOSED] 代码引用触发高风险过滤器 (#1671)**
    *   **关注点**：用户在引用普通代码时频繁触发 `400 content_filter` 错误。
    *   **重要性**：安全过滤策略的误杀率影响编程体验。
    *   链接: [MoonshotAI/kimi-cli Issue #1671](https://github.com/MoonshotAI/kimi-cli/pull/1671)

7.  **[OPEN] 自定义 Session 命名 (#1729)**
    *   **关注点**：用户希望能手动重命名会话标题，以便在 `/sessions` 列表中快速定位。
    *   **重要性**：提升多会话管理效率。
    *   链接: [MoonshotAI/kimi-cli Issue #1729](https://github.com/MoonshotAI/kimi-cli/pull/1729)

8.  **[OPEN] 添加 /copy 命令 (#1725)**
    *   **关注点**：建议增加快捷指令一键复制 Assistant 的最新回复到剪贴板。
    *   **重要性**：改善终端环境下的交互体验。
    *   链接: [MoonshotAI/kimi-cli Issue #1725](https://github.com/MoonshotAI/kimi-cli/pull/1725)

9.  **[OPEN] Web 端文件上传与工作区隔离 (#1735)**
    *   **关注点**：质疑 Kimi Web 将上传文件放在 Session 而非 Workspace 下，导致长对话丢失文件上下文。
    *   **重要性**：涉及 Web 端上下文管理的架构设计逻辑。
    *   链接: [MoonshotAI/kimi-cli Issue #1735](https://github.com/MoonshotAI/kimi-cli/pull/1735)

10. **[OPEN] Agent 创建反复失败 (#1720)**
    *   **关注点**：Windows WSL 环境下创建 Agent 时崩溃，提示后台启动错误。
    *   **重要性**：阻断性 Bug，需排查环境兼容性问题。
    *   链接: [MoonshotAI/kimi-cli Issue #1720](https://github.com/MoonshotAI/kimi-cli/pull/1720)

---

## 4. 重要 PR 进展 (Top 10)

1.  **[MERGED] feat(cli): add --plan flag and ... (#1666 -> Release)**
    *   **内容**：响应社区需求，支持通过 CLI 参数直接启动 Plan Mode。
    *   链接: [MoonshotAI/kimi-cli Issue #1666](https://github.com/MoonshotAI/kimi-cli/pull/1666)

2.  **[MERGED] fix(shell): resolve full PowerShell path on Windows (#1703)**
    *   **内容**：修复 Windows 下因路径解析失败导致 Shell 工具彻底不可用的问题。
    *   链接: [MoonshotAI/kimi-cli PR #1703](https://github.com/MoonshotAI/kimi-cli/pull/1703)

3.  **[MERGED] feat(cli): add --session/--resume flag (#1716)**
    *   **内容**：重新实现了会话选择器功能，支持通过 `--resume` 快速恢复上次会话。
    *   链接: [MoonshotAI/kimi-cli PR #1716](https://github.com/MoonshotAI/kimi-cli/pull/1716)

4.  **[MERGED] feat(shell): add /undo and /fork commands (#1723)**
    *   **内容**：引入类似 Git 的会话分支管理，允许用户回退到某一步重新提问或克隆当前会话。
    *   链接: [MoonshotAI/kimi-cli PR #1723](https://github.com/MoonshotAI/kimi-cli/pull/1723)

5.  **[OPEN] feat(plugin): add Claude-compatible local plugin support (#1715)**
    *   **内容**：正在开发 Claude 插件兼容层，允许加载 `--plugin-dir` 下的本地插件。
    *   链接: [MoonshotAI/kimi-cli PR #1715](https://github.com/MoonshotAI/kimi-cli/pull/1715)

6.  **[OPEN] feat(slash): add /copy command (#1726)**
    *   **内容**：实现了将最新回复复制到系统剪贴板的功能，正在等待合并。
    *   链接: [MoonshotAI/kimi-cli PR #1726](https://github.com/MoonshotAI/kimi-cli/pull/1726)

7.  **[OPEN] fix(shell): use git ls-files for @ file mention in large repos (#1588)**
    *   **内容**：优化大仓库（如 apache/superset）中 `@` 提及文件的补全性能，改用 `git ls-files` 替代 `os.walk`。
    *   链接: [MoonshotAI/kimi-cli PR #1588](https://github.com/MoonshotAI/kimi-cli/pull/1588)

8.  **[MERGED] fix(core): pass custom_headers to all LLM providers (#1732)**
    *   **内容**：修复了非 Kimi 模型（OpenAI/Anthropic/Google）自定义 Header 丢失的问题。
    *   链接: [MoonshotAI/kimi-cli PR #1732](https://github.com/MoonshotAI/kimi-cli/pull/1732)

9.  **[MERGED] feat(grep): add include_ignored param and sensitive file protection (#1722)**
    *   **内容**：为 Grep 工具增加 `--no-ignore` 支持，同时引入敏感文件保护机制。
    *   链接: [MoonshotAI/kimi-cli PR #1722](https://github.com/MoonshotAI/kimi-cli/pull/1722)

10. **[OPEN] feat(web): 添加 embedded session runtime (#1650)**
    *   **内容**：重构 Web Runtime，从子进程模式改为进程内嵌入模式，旨在提升 Web 端稳定性。
    *   链接: [MoonshotAI/kimi-cli PR #1650](https://github.com/MoonshotAI/kimi-cli/pull/1650)

---

## 5. 功能需求趋势

*   **流程控制与稳定性**：从 "工作流编排" Issue 和 `inject_prompt` PR 可以看出，用户不再满足于单次问答，而是寻求通过 Hooks、Workflows 实现更自动化的开发流。
*   **跨平台一致性**：Windows 端的路径处理、换行符问题是近期高频出现的反馈，显示 Kimi CLI 的 Windows 用户基数在增长，但体验仍有打磨空间。
*   **生态兼容**：社区对兼容 Claude 生态（Plugins、Config）有明确诉求，希望降低迁移成本。
*   **上下文管理**：Session 的持久化、回溯（Undo/Fork）、重命名以及 Web 端的文件作用域管理，说明用户正将 CLI 用于长周期的复杂项目。

## 6. 开发者关注点

*   **Windows 体验痛点**：Shell 工具的稳定性、CRLF 换行符强制转换是目前 Windows 用户最大的槽点。
*   **Token 消耗与 Loop 风险**：`SetTodoList` 死循环 Bug (#1710) 让用户对 Token 消耗感到担忧，开发者需要关注工具调用的幂等性和循环检测。
*   **文档缺失**：开发者对模型列表、Web Search 配置等细节不清楚，导致无法充分利用平台能力，急需补充 API 文档和最佳实践。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-04-03)

你好，这是基于 `github.com/anomalyco/opencode` 数据生成的 2026年4月3日 社区日报。

---

### 1. 今日速览
今日社区焦点集中在**严重的内存泄漏**和**TUI 性能回退**问题上，官方已开设内存问题聚合帖以收集数据。同时，针对 **Opus 4.6 模型的兼容性**以及**新手安装报错**的讨论热度居高不下。在功能方面，移动端适配和 TUI 布局系统的改进正在积极推进中。

### 2. 版本发布
过去 24 小时内**无**新的 Release 版本发布。

---

### 3. 社区热点 Issues (Top 10)

以下筛选了今日最受关注或影响较大的 Issue：

1.  **[P0] 内存消耗异常 (20GB+ 内存占用)**
    *   **链接**: [Issue #20626](https://github.com/anomalyco/opencode/issues/20626)
    *   **摘要**: 用户报告 OpenCode 单窗口内存占用高达 20GB，导致系统风扇狂转。这引发了官方对内存管理的重视。
    *   **社区反应**: 极高，导致官方迅速开设了聚合帖 [Issue #20695](https://github.com/anomalyco/opencode/issues/20695) 来统一收集堆快照数据以修复泄漏。

2.  **[Bug] 新手安装受阻：IP 查询数据库失败**
    *   **链接**: [Issue #20694](https://github.com/anomalyco/opencode/issues/20694)
    *   **摘要**: 新用户在 VPS 或特定环境下首次运行时报错 `Failed query: select usage from ip where ip.ip = ?`，导致无法启动。这严重影响了新用户的留存。

3.  **[Bug] Opus 4.6 不支持 Assistant Prefill 导致对话中断**
    *   **链接**: [Issue #13768](https://github.com/anomalyco/opencode/issues/13768)
    *   **摘要**: 使用 Opus 4.6 模型时频繁报错 "This model does not support assistant message prefill"，导致会话意外终止。这是目前高级模型兼容性中最紧迫的问题。

4.  **[Bug] WSL2 下 TUI 周期性卡顿 (回归问题)**
    *   **链接**: [Issue #5361](https://github.com/anomalyco/opencode/issues/5361)
    *   **摘要**: 在 WSL2 环境下，TUI 会周期性冻结 2-10 秒，输入会缓冲直到卡顿结束。该问题在 v1.0.129 版本后出现回归，影响大量 Windows 开发者。

5.  **[Bug] 缓存命中率低/归零**
    *   **链接**: [Issue #14065](https://github.com/anomalyco/opencode/issues/14065)
    *   **摘要**: 用户发现使用 OpenCode 时 DeepInfra 等后端的缓存命中率极低，导致成本增加。可能与上下文重放时的处理逻辑有关。

6.  **[Bug] Shift+Enter 快捷键失效 (TUI)**
    *   **链接**: [Issue #1505](https://github.com/anomalyco/opencode/issues/1505)
    *   **摘要**: TUI 中 `Shift+Enter` 换行功能失效，用户不得不使用 `Ctrl+J` 替代。虽然有关闭记录，但依然是用户高频反馈的可用性问题。

7.  **[Feature] 滚动查看长对话历史受限**
    *   **链接**: [Issue #6137](https://github.com/anomalyco/opencode/issues/6137)
    *   **摘要**: TUI 硬编码限制只能加载最近 100 条消息，用户无法滚动查看更早的历史记录。这对长上下文开发场景非常不友好。

8.  **[Bug] 本地推理缓存失效 (KV Cache)**
    *   **链接**: [Issue #19081](https://github.com/anomalyco/opencode/issues/19081)
    *   **摘要**: 在重放对话历史时，OpenCode 会剥离 `reasoning_content`，导致本地推理引擎（如 vLLM/Ollama）的 KV Cache 失效，显著降低本地模型的推理速度。

9.  **[Bug] Session Changes 显示无关的 Origin/Main 差异**
    *   **链接**: [Issue #7555](https://github.com/anomalyco/opencode/issues/7555)
    *   **摘要**: "Session Changes" 功能错误地显示了与 `origin/main` 的差异，而不是当前工作分支的实际修改，干扰了代码审查。

10. **[Bug] Plan 模式失控 (Gemini 3 Pro)**
    *   **链接**: [Issue #7292](https://github.com/anomalyco/opencode/issues/7292)
    *   **摘要**: 在使用 Gemini 3 Pro 时，Plan 模式偶尔会跳过计划确认步骤，直接修改文件，破坏了"只规划不执行"的预期行为。

---

### 4. 重要 PR 进展 (Top 10)

1.  **[Perf] 批量读取 Snapshot Diff 优化**
    *   **链接**: [PR #20752](https://github.com/anomalyco/opencode/pull/20752)
    *   **内容**: 通过 `git cat-file --batch` 替代为每个文件单独启动 `git show` 进程，大幅优化差异计算的性能。

2.  **[Feature] 移动端触控优化**
    *   **链接**: [PR #18767](https://github.com/anomalyco/opencode/pull/18767)
    *   **内容**: 针对 App 的移动端/触屏设备进行交互优化，同时保持桌面端体验不变。

3.  **[Feature] TUI 布局系统重构**
    *   **链接**: [PR #5020](https://github.com/anomalyco/opencode/pull/5020)
    *   **内容**: 引入可扩展的布局系统，旨在解决垂直空间利用不足和 UI 定制化能力弱的问题。

4.  **[Fix] 兼容 GitHub Copilot Business/Enterprise 端点**
    *   **链接**: [PR #20758](https://github.com/anomalyco/opencode/pull/20758)
    *   **内容**: 修复了 Copilot 插件硬编码 API 端点导致企业版用户无法连接的问题，动态发现正确的 API 地址。

5.  **[Fix] 修复工作流工具参数解析错误**
    *   **链接**: [PR #20756](https://github.com/anomalyco/opencode/pull/20756)
    *   **内容**: 修复 GitLab Workflow 工具调用时 JSON 解析失败（未终止字符串）的问题。

6.  **[Refactor] Effect 层面清理未使用的 Facades**
    *   **链接**: [PR #20748](https://github.com/anomalyco/opencode/pull/20748)
    *   **内容**: 代码重构，移除未使用的运行时 Facades，简化架构并引入 `Permission.defaultLayer`。

7.  **[Feat] 增加会话亲和性 Headers**
    *   **链接**: [PR #20744](https://github.com/anomalyco/opencode/pull/20744)
    *   **内容**: 发送 `x-session-affinity` 和 `x-parent-session-id` 头，允许 Provider 更好地关联跨会话请求，有助于负载均衡和状态维持。

8.  **[Feat] 添加 TUI 会话列表限制配置**
    *   **链接**: [PR #6138](https://github.com/anomalyco/opencode/pull/6138)
    *   **内容**: 针对 Issue #6137，增加 `tui.session_list_limit` 配置（默认 150），防止会话过多时加载缓慢，但这也意味着默认只能看到最近的会话。

9.  **[Feat] 支持 XML/HTML 标签高亮配置**
    *   **链接**: [PR #6130](https://github.com/anomalyco/opencode/pull/6130)
    *   **内容**: 允许用户自定义 XML/HTML 标签的高亮颜色，解耦了原本硬编码的颜色映射。

10. **[Feat] 异步加载 MCP 服务器**
    *   **链接**: [Issue #20755](https://github.com/anomalyco/opencode/issues/20755) *(注：此为 Issue 但对应正在讨论的 PR 方案)*
    *   **内容**: 建议将 MCP 客户端（特别是远程服务）改为异步加载，避免阻塞 UI 启动（目前需等待 2-3 秒）。

---

### 5. 功能需求趋势

根据今日的 Issue 和 PR 活动，社区重点关注以下方向：

*   **性能与资源管理**: 内存泄漏和 CPU 占用过高是目前最紧急的痛点，尤其是针对长时间运行的任务。
*   **模型兼容性**: 随着新模型（如 Opus 4.6, Gemini 3 Pro, Kimi k2.5）的推出，社区迫切需要 OpenCode 快速适配这些模型的特性（如 Prefill, Tool Calling 格式）。
*   **TUI 体验优化**: WSL 下的卡顿、长对话的滚动限制、布局自定义等是 TUI 用户的核心诉求。
*   **缓存机制**: 无论是云端 API 费用优化，还是本地推理速度，用户对 Context Cache（KV Cache）的有效性非常敏感。

### 6. 开发者关注点

*   **本地/自托管模型集成**: 多个 Issue 提到使用本地 OpenAI 兼容接口时遇到的问题（如 Tool Call 格式不兼容、API Key 校验逻辑冲突），显示开发者群体对本地化部署有强烈需求。
*   **CI/CD 集成**: 开发者希望在 GitHub Action 中更好地调试 Agent 行为（PR #20750），表明 OpenCode 正在被整合到自动化流程中。
*   **Plugin 稳定性**: v1.3.8 升级导致的 NPM 插件加载失败（Issue #20139）提醒开发者注意插件系统的破坏性变更。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-04-03)

## 1. 今日速览
Qwen Code 社区今日迎来 **v0.14.0-preview.5** 发布，重点修复了扩展安装路径及代理配置问题。社区呼声最高的 **Qwen 3.6 模型支持** 已有 PR 提交（#2820），同时开发者们正在积极贡献 Bun 运行时支持、Jupyter Notebook 编辑等高级功能，社区活跃度极高。

---

## 2. 版本发布
### **v0.14.0-preview.5**
- **发布时间**: 2026-04-02
- **主要更新**:
  - **修复扩展路径**: 解决了 Markdown 文件中 `.qwen` 路径在扩展安装时的替换问题 ([PR #2769](https://github.com/QwenLM/qwen-code/pull/2769))。
  - **代理 URL 规范化**: 支持不带协议前缀（如 `http://`）的代理地址，提升配置兼容性 ([PR #2745](https://github.com/QwenLM/qwen-code/pull/2745))。

---

## 3. 社区热点 Issues (Top 10)

| 编号 | 标题 | 状态 | 热度 | 关键点 |
| :--- | :--- | :--- | :--- | :--- |
| **#2832** | [Qwen 3.6](https://github.com/QwenLM/qwen-code/issues/2832) | OPEN | 👍 0 | **最强模型呼声**：用户急切呼吁集成最新的 Qwen 3.6 模型。 |
| **#2806** | [加入 qwen 3.6 模型吗?](https://github.com/QwenLM/qwen-code/issues/2806) | OPEN | 👍 2 | **中文社区反馈**：与上条类似，确认 3.6 模型是当前最核心需求。 |
| **#2759** | [Qwen3.6 not available in QwenCode](https://github.com/QwenLM/qwen-code/issues/2759) | OPEN | 👍 0 | **竞品对比**：用户指出竞品 OpenCode 已支持 3.6，给 Qwen Code 带来压力。 |
| **#2306** | [Qwen Code crash when asking permission](https://github.com/QwenLM/qwen-code/issues/2306) | CLOSED | - | **稳定性回归**：v0.12.0 引入的“总是允许”命令执行导致崩溃的问题已关闭（可能在 preview.5 修复）。 |
| **#2740** | [Qwen freezes when trying to run shell command](https://github.com/QwenLM/qwen-code/issues/2740) | CLOSED | - | **Shell 交互修复**：执行 Shell 命令时因 tree-sitter 路径错误导致的卡死问题已解决。 |
| **#2828** | [VSCode插件无法使用](https://github.com/QwenLM/qwen-code/issues/2828) | OPEN | - | **配置门槛**：百炼官网配置后 VSCode 插件报错 "Slash command not supported"，影响非专业用户。 |
| **#2823** | [Implicit cache not working... $456 charged](https://github.com/QwenLM/qwen-code/issues/2823) | CLOSED | - | **费用争议**：用户报告因缓存失效导致 20 小时开发被收取 $456，引发对计费机制的关注。 |
| **#2839** | [MCP tool validation fails with anyOf schemas](https://github.com/QwenLM/qwen-code/issues/2839) | OPEN | - | **MCP 兼容性**：联合类型参数导致验证失败，影响高级 MCP 工具调用。 |
| **#2816** | [Jupyter Notebook Read/Edit Support](https://github.com/QwenLM/qwen-code/issues/2816) | OPEN | 👍 1 | **数据科学需求**：希望直接以结构化方式读写 `.ipynb` 而非原始 JSON。 |
| **#2810** | [Installation script version conflict](https://github.com/QwenLM/qwen-code/issues/2810) | OPEN | - | **安装体验**：官方安装脚本未清理旧版本，导致版本冲突。 |

---

## 4. 重要 PR 进展 (Top 10)

| 编号 | 标题 | 功能/修复概述 |
| :--- | :--- | :--- |
| **#2820** | [feat: add Qwen3.6-Plus model support](https://github.com/QwenLM/qwen-code/pull/2820) | **重磅功能**：正式添加 Qwen3.6-Plus 模型支持，并将其设置为新的默认模型。 |
| **#2838** | [feat: add bun runtime support](https://github.com/QwenLM/qwen-code/pull/2838) | **性能提升**：引入 Bun 运行时支持，带来 3-5 倍的启动速度提升和更低的内存占用。 |
| **#2643** | [feat(cli): add /loop command](https://github.com/QwenLM/qwen-code/pull/2643) | **自动化增强**：添加 `/loop` 命令，支持按配置的间隔周期性执行 Prompt，实现自动化任务监控。 |
| **#2827** | [feat(hooks): Add HTTP/Function/Async Hook support](https://github.com/QwenLM/qwen-code/pull/2827) | **生态扩展**：大幅扩展 Hook 系统，支持 HTTP 回调、函数回调和异步 Hook，增强集成能力。 |
| **#2831** | [feat(permissions): add permission denial tracking](https://github.com/QwenLM/qwen-code/pull/2831) | **智能交互**：引入权限拒绝追踪，当模型重复尝试被拒绝的操作时，错误信息会逐级升级，防止死循环。 |
| **#2813** | [feat(compression): add microcompact strategy](https://github.com/QwenLM/qwen-code/pull/2813) | **成本优化**：新增“微压缩”策略，在上下文溢出前无成本地截断旧工具结果，减少 API 调用开销。 |
| **#2525** | [feat(cli, webui): add follow-up suggestions feature](https://github.com/QwenLM/qwen-code/pull/2525) | **交互体验**：任务完成后自动建议下一步操作（如 "commit this", "run tests"），类似 Claude Code 的 NES。 |
| **#2829** | [feat: add NVIDIA NIM provider support](https://github.com/QwenLM/qwen-code/pull/2829) | **硬件生态**：支持 NVIDIA NIM 作为模型提供商，方便在本地 NVIDIA 硬件上部署。 |
| **#2837** | [fix(cli): remove quote-based drag detection](https://github.com/QwenLM/qwen-code/pull/2837) | **输入体验修复**：移除了基于引号的拖拽检测，修复了输入引号时的 100ms 延迟卡顿。 |
| **#2834** | [fix(cli): restore previous theme on /theme cancel](https://github.com/QwenLM/qwen-code/pull/2834) | **UI 细节**：修复了在主题选择对话框按 `Esc` 后重置为默认主题的问题，现恢复为之前的主题。 |

---

## 5. 功能需求趋势
根据近期 Issues 和 PRs，社区关注点集中在以下方向：
1.  **模型更新**: 迫切需求集成 **Qwen 3.6**，认为这是保持竞争力的关键。
2.  **成本与性能优化**: 关注 Context Compression（上下文压缩）和 Implicit Cache（隐式缓存）机制，以降低 Token 消耗和延迟。引入 **Bun** 运行时也是为了性能提升。
3.  **IDE 与数据科学支持**: 对 **VSCode 集成**的稳定性要求高，同时出现了对 **Jupyter Notebook** 原生支持的需求。
4.  **自动化与 Hooks**: 社区正在通过 `/loop` 命令和更强大的 Hook 系统，试图将 Qwen Code 打造成自动化 Agent 平台。

## 6. 开发者关注点
- **配置复杂性与稳定性**: 用户在配置 VSCode 插件或切换模型供应商（如 OpenRouter）时经常遇到报错，希望简化流程。
- **跨平台兼容性**: Windows 环境下的路径识别异常（#2780）和 MSYS2 环境崩溃（#2826）是痛点。
- **交互流畅度**: 输入卡顿（#2837）和权限询问导致的死循环是影响开发体验的主要因素。

</details>