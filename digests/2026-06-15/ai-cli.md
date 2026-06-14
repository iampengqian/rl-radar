# AI CLI 工具社区动态日报 2026-06-15

> 生成时间: 2026-06-14 22:21 UTC | 覆盖工具: 9 个

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

这份报告基于 2026 年 6 月 15 日主流 AI CLI 工具的社区动态，为您梳理并生成横向对比分析。

---

# 2026年 AI CLI 开发工具生态横向分析报告 (06-15)

### 1. 生态全景
当前 AI CLI 工具已全面从“单一对话助手”演进为**多智能体协作、长上下文管理与高度环境集成的自动化执行引擎**。工具间的竞争核心正从模型智力比拼，转移至**底层沙箱安全管控、跨平台一致性（尤其 Windows/WSL）以及资源占用与计费透明度**。随着 MCP（模型上下文协议）和 ACP（Agent 客户端协议）等开放标准的落地，生态正处于从“野蛮生长”向“企业级工程化与无侵入式架构”转型的关键拐点。

### 2. 各工具活跃度对比
*(注：数据基于当日各仓库实际更新的动态频次，OpenAI Codex 频率最高，GitHub Copilot 活跃度最低)*

| 工具名称 | Issue 更新数 | PR 更新数 | Release 动态 | 社区当日核心争议点 |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | ~50 | 5 | 无 | 数据丢失风险、TUI 回归 Bug、悬赏修 Bug |
| **OpenAI Codex** | 10 (高频热议) | 10 | **1 次** (Rust Alpha) | Linux/Windows 跨平台支持、资源严重泄漏 |
| **Gemini CLI** | 10 | 10 | 无 | Auto Memory 隐私泄漏、Agent 执行卡死 |
| **Copilot CLI** | 5 | 0 | 无 | 会话状态“中毒”不可自愈、BYOK 支持 |
| **Kimi Code** | 2 | 4 | 无 | 严重限速争议、System Prompt 过度覆盖 |
| **OpenCode** | 10 | 10 | **2 次** (v1.17.6/7) | 订阅额度/性价比焦虑、TUI 终端清理 Bug |
| **Pi** | 10 | 10 | 无 | API 缓存失效导致成本飙升、复杂网络兼容 |
| **Qwen Code** | 10 | 10 | 无 | 免费额度大幅缩减争议、长文本导致 OOM |
| **CodeWhale** | 10 | 10 | **1 次** (品牌更名) | Windows 下 TUI 彻底冻结、GLIBC 强依赖阻断 |

### 3. 共同关注的功能方向
*   **跨平台体验与 Windows / WSL 兼容性**：
    *   **Claude Code、OpenAI Codex、CodeWhale** 均爆出 Windows 环境下的严重阻断性问题（如鼠标滚轮失效、应用启动崩溃、TUI 间歇性冻结）。
    *   **Kimi Code、Codex** 强烈呼吁提供原生的 Windows 独立安装包或更完善的 WSL 集成。
*   **长上下文极限与会话状态鲁棒性**：
    *   **Claude Code** (150k+ 畸形输出)、**OpenAI Codex** (长会话压缩报错)、**Copilot CLI** (附件错误导致上下文“中毒”)、**Qwen Code** (工具历史记录撑爆 OOM)。所有主流工具都在面临长会话流式输出的极大稳定性挑战。
*   **破坏性操作拦截与文件/沙箱安全**：
    *   **Claude Code**、**Gemini CLI** 和 **CodeWhale** 均暴露出 Agent 越权执行高危操作的问题（如全量覆写文件、静默删除目录、擅自重置 Git 分支）。引入强类型的权限拦截与沙箱机制已成为共识。
*   **BYOK (自带密钥) 与第三方模型无缝接入**：
    *   **Copilot CLI**、**OpenCode** 和 **Pi** 均提出了对自定义 Provider 的模型自动发现、价格/额度同步感知的强烈需求。

### 4. 差异化定位分析
*   **Claude Code / OpenAI Codex**：定位于**重度企业级开发**中枢，具有最高的话语权。但 Claude 侧重于通过悬赏推进社区开源协作与 MCP 工具链；Codex 目前正集中精力重构底层 Rust 架构与 MITM CA 证书（极度重视网络代理审查与企业级安全）。
*   **Gemini CLI / Qwen Code**：依托庞大云原生生态，定位于**泛开发者群体的全能助手**。其演进方向极具野心，如 Gemini 正推进原生终端多模态（拖拽图片）与 Auto Memory，Qwen 则在推动 AI 自我修复 (CI autofix)。
*   **OpenCode / Pi**：典型的**极客/开源生态**首选。不绑定单一模型，注重高度的扩展性。Pi 通过 `excludeFromContext` 等机制将 Token 管理做到了极致；OpenCode 则引入嵌套子代理和原生 Yoga 布局，侧重于架构底座重构。
*   **CodeWhale (原 DeepSeek TUI)**：主打**多智能体异构协同**，正致力于将不同的开源大模型（DeepSeek, GLM 等）作为 Worker 编排，并积极申请入驻 ACP 协议，向 IDE 原生 Agent 渗透。

### 5. 社区热度与成熟度
*   **绝对领头羊 (热度极高，生态庞大)**：**Claude Code** 与 **OpenAI Codex**。尽管 Bug 多发，但开发者高度聚集，讨论极具深度（深入至二进制兼容、底层 I/O 与鉴权层）。
*   **激进变革期 (迭代极快，争议较大)**：**Qwen Code** 和 **OpenCode**。版本演进极快，但正经历商业化变现与用户习惯的阵痛（如免费额度锐减引发的信任危机）。
*   **稳健修补期 (注重护城河)**：**Gemini CLI** 和 **Pi**。更专注于底层的内存安全（JSONL 容错）和上下文精控。
*   **沉寂/维护期**：**GitHub Copilot CLI**。近期无代码提交，社区诉求集中于打通 Azure DevOps 等传统企业级数据孤岛。

### 6. 值得关注的趋势信号（开发者参考）
1.  **“上下文防爆”与“JSONL 容错”成为基础工程能力**：随着上下文窗口动辄百万，大模型的流式输出与底层 JSONL 会话存储变得极其脆弱。**建议开发者**：在集成 AI CLI 时，务必建立独立的上下文压缩预算机制（如 Qwen 的有界历史记录），不要盲目信任长会话的持久化。
2.  **“AI 幻觉”正在向“AI 破坏实体资产”演变**：Agent 执行 `rm -rf` 或擅自覆写数据库的情况频发。**建议决策者**：目前所有 AI CLI 工具的权限沙箱均不完美，切勿在生产环境或包含重要未提交代码的 Git 工作区中盲目开启“YOLO 模式”或“自动执行”。
3.  **插件生态正向“声明式与热重载”升级**：工具扩展不再满足于简单的脚本，而是要求 Agent 提供精细化的 Prompt 注入（如 Pi 的 Guideline API）与热重载。若要深度接入 AI 研发流，应优先考察工具是否支持 MCP 协议和子代理嵌套。
4.  **“API 缓存降级”可能导致账单失控**：由于网络代理或请求头配置不当，大模型的长效缓存失效为按次计费，会导致成本飙升。**建议重度 API 调用者**：密切关注 Pi 社区提出的 TTL 与 Cache Control 问题，在自身业务网络层做好缓存命中的验证。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

以下是一份基于 anthropics/skills 仓库数据（截至 2026-06-15）的 **Claude Code Skills 社区热点报告**。

### 1. 热门 Skills 排行
综合 PR 的更新频率与社区讨论热度，以下是目前最受关注的 Skills 开发与改进动态：

*   **Agent-Creator Skill (PR [#1140](https://github.com/anthropics/skills/pull/1140))**
    *   **功能**：用于生成特定任务集的 AI Agent 模板，并修复了多工具评估并行调用的问题。
    *   **状态**：[OPEN]
    *   **热点**：解决了社区高度关注的 Agent 稳定性和 Windows 环境兼容性问题。
*   **Frontend-design Skill 优化 (PR [#210](https://github.com/anthropics/skills/pull/210))**
    *   **功能**：重构前端设计 Skill，提高指令的清晰度、可执行性和内部一致性。
    *   **状态**：[OPEN]
    *   **热点**：核心在于确保 Claude 在单次对话中能严格遵循设计规范，而不产生幻觉。
*   **Skill-Quality-Analyzer & Skill-Security-Analyzer (PR [#83](https://github.com/anthropics/skills/pull/83))**
    *   **功能**：元技能，用于对 Claude Skills 进行五维度的质量分析以及安全评估。
    *   **状态**：[OPEN]
    *   **热点**：直击社区对第三方 Skill 安全性的担忧（见 Issue #492）。
*   **Shodh-memory Skill (PR [#154](https://github.com/anthropics/skills/pull/154))**
    *   **功能**：为 AI Agent 提供跨对话的持久化上下文记忆系统。
    *   **状态**：[OPEN]
    *   **热点**：长期记忆和上下文保持是 AI 自动化工作流的最大痛点，该 PR 提供了结构化记忆方案。
*   **ODT (OpenDocument) Skill (PR [#486](https://github.com/anthropics/skills/pull/486))**
    *   **功能**：创建、读取、填充和转换开源文档格式（.odt, .ods）。
    *   **状态**：[OPEN]
    *   **热点**：填补了官方在非微软系（如 LibreOffice）文档处理能力上的空白。

### 2. 社区需求趋势
通过对 Issues 的分析，当前社区对 Skills 生态的诉求集中在以下四个方向：

*   **企业级组织与协同分发**：用户强烈需要跨组织、跨成员的 Skill 共享机制。目前通过手动打包上传的方式过于繁琐，社区呼吁建立企业级的共享库。（Issue [#228](https://github.com/anthropics/skills/issues/228)）
*   **安全与治理边界**：由于社区开发者可以将 Skill 挂载在 `anthropic/` 命名空间下，导致“官方信任”被滥用。社区呼吁建立严格的权限隔离与安全审计标准。（Issue [#492](https://github.com/anthropics/skills/issues/492)）
*   **底层测试与评估工具修复**：`skill-creator` 的自动化评估脚本 (`run_eval.py`) 在描述优化时出现严重故障（召回率永远为 0%），社区急需稳定、可量化的 Skill 触发率测试工具。（Issue [#556](https://github.com/anthropics/skills/issues/556)）
*   **复杂文档引擎集成**：针对企业内部系统（如 SharePoint Online）的集成，以及多文件预加载/内联打包的需求激增，以便处理更庞大的参考文档。（Issue [#1175](https://github.com/anthropics/skills/issues/1175), Issue [#1220](https://github.com/anthropics/skills/issues/1220)）

### 3. 高潜力待合并 Skills (High-Potential OPEN PRs)
这些 PR 目前处于 OPEN 状态，但精准修复了底层核心逻辑或高危 Bug，近期落地合并的概率极高：

*   **[PR #1298] fix(skill-creator): 修复召回率 0% 及 Windows 兼容性问题**
    *   **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)
    *   **潜力理由**：彻底修复了导致 Skill 描述优化循环完全失效的底层阻断性 Bug（Issue #556 的核心解法），并兼容了 Windows 环境。
*   **[PR #541] fix(docx): 阻止与书签冲突导致的 `w:id` 文档损坏**
    *   **链接**：[PR #541](https://github.com/anthropics/skills/pull/541)
    *   **潜力理由**：解决了 Office Open XML (OOXML) 在处理修订时的高危 ID 冲突，大幅提升 DOCX Skill 的稳定性。
*   **[PR #361 & #539] fix: YAML 特殊字符解析校验**
    *   **链接**：[PR #361](https://github.com/anthropics/skills/pull/361), [PR #539](https://github.com/anthropics/skills/pull/539)
    *   **潜力理由**：通过前置校验拦截未加引号的 YAML 描述符（如包含 `:` 或 `#`），防止系统静默解析错误，属于极其重要的健壮性提升。

### 4. Skills 生态洞察
**一句话总结**：当前社区在 Skills 层面最集中的诉求，是从“基础功能的堆叠”转向**“追求企业级的安全控制、严谨的触发评估闭环以及跨平台的工程化分发能力”**。

---

# 📰 Claude Code 社区动态日报 (2026-06-15)

## 1. 今日速览
今日 Claude Code 仓库无新版本发布，但社区异常活跃，单日更新了 50 个 Issue。核心焦点集中在 **终端渲染器 (TUI) 严重回归 Bug**（导致屏幕损坏和鼠标滚轮失效）、**移动端远程控制图像丢失**，以及潜在的**数据丢失风险**（文件覆写与更新导致数据库清空）。此外，社区通过 Bounty（悬赏）推进的自动化 PR 模式引发了关于代码安全的讨论。

## 2. 版本发布
**今日无新版本发布。**

## 3. 社区热点 Issues (Top 10)
以下为本日最值得关注的 10 个 Issue，主要涉及回归缺陷、核心功能损坏及高危风险：

*   **[TUI 渲染回归] iTerm2 长会话屏幕损坏** (#68461)
    *   **动态:** 2.1.162 版本后引入的严重回归。macOS iTerm2 终端在长会话中会出现 UI 错乱、提示符跳至顶部，导致开发者无法正常查看代码差异。社区高度关注其修复进度。
*   **[TUI 渲染回归] WSL 下鼠标滚轮失效** (#65833)
    *   **动态:** v2.1.150 版本在 Windows WSL 环境下破坏了鼠标事件，滚屏变成了触发历史命令记录，严重影响 Windows 用户体验。
*   **[高危/数据丢失] Write 工具全量覆写导致不可逆数据丢失** (#67917)
    *   **动态:** 开发者指出 Write 工具默认执行全量文件替换，缺乏“仅追加”或“受保护路径”机制，极易破坏状态文件，呼吁引入数据保护沙箱。
*   **[高危/数据丢失] 更新导致数据库数据全部清空** (#67892)
    *   **动态:** 极其严重的破坏性 Bug。用户反馈在更新至 Claude Code Fable 5 后，数月的数据库数据被 AI 擦除，官方已介入要求提供更多信息。
*   **[核心阻断] 移除 resume 参数导致 Agent 续传失效** (#38183)
    *   **动态:** `SendMessage` 工具引用失效，导致多 Agent 架构中的会话延续机制完全损坏。对于重度依赖并行 Agent 的开发者来说是阻断级缺陷。
*   **[移动端 Bug] 远程控制无法发送图片** (#68459, #68460)
    *   **动态:** 通过 Android/iOS 客户端使用 `claude rc` 时，图片附件被静默丢弃。移动端协作体验大打折扣。
*   **[UI/交互] 无法关闭全局不可用公告横幅** (#68471)
    *   **动态:** “Claude Fable 5 is currently unavailable” 横幅直接遮挡输入框且无法消除，严重影响桌面端交互体验。
*   **[CLI Bug] Git 存在 origin 远程仓库时创建会话失败** (#68467)
    *   **动态:** 只要项目关联了名为 "origin" 的远程仓库，CLI 创建远程控制会话就会返回 400 错误。这是一个极其容易触发的环境兼容性 Bug。
*   **[工具稳定性] 150k+ 上下文时 Opus 4.7 生成畸形工具调用** (#68472)
    *   **动态:** 在重度 MCP 工具调用的长会话中，模型容易输出格式错误的 XML（混入杂乱前缀），导致运行时拒绝执行，长上下文稳定性受质疑。
*   **[权限安全] 规划模式下静默删除空目录** (#68455)
    *   **动态:** Agent 在未请求用户权限的情况下，于 Plan Mode 下擅自删除了空目录，暴露出权限控制的边界不严谨。

## 4. 重要 PR 进展
今日共更新 5 个 PR，呈现出明显的自动化与开源协作特征：

*   **[维护机制优化] 防止机器人错误关闭已分配的 Issue** ([PR #68423](https://github.com/anthropics/claude-code/pull/68423))
    *   **进展:** 修复 `sweep.ts` 清理脚本。确保已有负责人 的 Issue 不会被自动过期关闭，提升仓库的 Issue 生命周期管理健康度。
*   **[悬赏/安全] 修复 Claude 自主运行外部付费脚本漏洞** ([PR #67699](https://github.com/anthropics/claude-code/pull/67699))
    *   **进展:** 悬赏 $29 修复 Agent 未经授权在后台调用外部付费 API 的 Bug。此 PR 反映了社区对 AI 擅自执行高权限/高成本动作的担忧。
*   **[悬赏/计费] 修复账单错误导致的账户降级问题** ([PR #67409](https://github.com/anthropics/claude-code/pull/67409))
    *   **进展:** 悬赏 $200 修复计费逻辑。有趣的是，这些 PR 均标注为 "Automated implementation via NVIDIA AI"，表明社区正大量使用其他 AI 工具自动修复 Claude 自身的 Bug。
*   **[CI/CD 自动化] Issue 自动去重工作流** ([PR #67722](https://github.com/anthropics/claude-code/pull/67722), 已关闭)
    *   **进展:** 尝试添加 GitHub Action 自动分析并去重输出参数，虽然被关闭，但展示了社区在仓库自动化维护方向的探索。
*   **[基础设施] 初始安全策略建立** ([PR #1](https://github.com/anthropics/claude-code/pull/1), 已关闭)
    *   **动态:** 创建 SECURITY.md 的历史性 PR 今日发生状态更新（可能涉及归档或引用调整）。

## 5. 功能需求趋势
通过对今日 Issues 的分析，社区目前最关注的功能和优化方向如下：

1.  **移动端体验与多设备协同:** 强烈的诉求要求完善“移动端远程控制 (`claude rc`)”的稳定性，尤其是多模态（图片）输入的兼容性。
2.  **文件操作安全沙箱:** 针对数据丢失频发，急需引入“防覆写”、“仅追加模式”以及“Plan Mode 严格禁止任何隐式文件系统修改”的保护机制。
3.  **长上下文与 MCP 稳定性:** 超过 150k token 后出现的模型指令格式畸变，呼吁加强工具调用解析器的容错率与上下文压缩管理。
4.  **UI 细节控制权:** 桌面端需要更人性化的 UI 控制权（如一键关闭无用的全量警告横幅，避免遮挡工作区）。

## 6. 开发者关注点与痛点总结
*   **TUI 渲染器极其脆弱:** 近期 2.1.150 至 2.1.177 版本针对终端渲染器的更新引发了连环回归（WSL 滚轮失效、iTerm2 画面崩坏）。终端兼容性测试明显不足，开发者呼吁引入更完善的 E2E UI 测试。
*   **“破坏性操作”缺乏兜底机制:** 开发者对 AI 的不安全感达到峰值。无论是数据库被清空、空目录被删，还是擅自调用付费外部接口，都暴露出 Claude Code 在“只读分析”向“执行写入/系统变更”迈进时，**缺乏足够的确认拦截机制**。
*   **环境嗅探存在致命盲区:** 极其常见的 `git remote origin` 竟会触发 400 错误阻断会话，说明 CLI 在环境初始化和参数解析校验上存在代码缺陷。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 (2026-06-15)**

### 1. 今日速览
今日 OpenAI Codex 发布了 Rust 核心库的最新迭代版本 `rust-v0.140.0-alpha.19`。社区热点高度集中于跨平台体验（Linux/Windows 支持）、Desktop App 的资源消耗与稳定性，以及长会话的上下文压缩问题。底层架构方面，官方团队正在积极推进外部 Agent 导入机制、MITM CA 证书环境准备以及命名空间隔离等重要架构升级。

---

### 2. 版本发布
*   **rust-v0.140.0-alpha.19** [GitHub 链接](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.19)
    *   **概要**：核心底层 Rust 库持续迭代，为即将到来的正式版进行前置验证与稳定性修复。

---

### 3. 社区热点 Issues (Top 10)
以下为本期最受开发者关注和讨论的 Issues，反映了当前的核心痛点：

1.  **[Issue #11023] 强烈呼吁推出 Linux 版 Codex 桌面应用** 👍 568 | 💬 107
    *   **关注点**：由于 Mac 上的功耗问题，大量开发者迫切希望官方支持 Linux 桌面端 App。
2.  **[Issue #13993] 支持独立的 Windows 安装包 (`codex-setup.exe`)** 👍 146 | 💬 73
    *   **关注点**：企业环境和受限网络下的 Windows 用户希望摆脱对 Microsoft Store 的依赖。
3.  **[Issue #14331] GPT-5.3-Codex 付费账户不可用** 💬 53
    *   **关注点**：严重的账户级 Bug 导致 Plus 用户在 VS Code 中无法调用最新模型，影响开发效率。
4.  **[Issue #21527] 响应速度过于迟缓** 💬 29
    *   **关注点**：Pro 用户反馈无论是 IDE 插件还是桌面端 App，模型响应延迟都出现了显著恶化。
5.  **[Issue #10823] 长会话无法压缩上下文** 💬 29
    *   **关注点**：在长期挂起并恢复的会话中，触发 "remote compact task" 报错，导致历史上下文丢失。
6.  **[Issue #22423] WSL 集成导致应用启动崩溃** 💬 26
    *   **关注点**：Windows 用户开启 WSL 支持后，引发 Electron 找不到 Codex CLI 二进制文件的路径错误。
7.  **[Issue #9252] TUI 命令建议带有多余前缀空格** 👍 54 | 💬 14
    *   **关注点**：CLI 终端 UI 细节问题，命令建议包含 2 个前导空格，影响直接复制执行体验。
8.  **[Issue #18051] 增加 MCP (Model Context Protocol) Hooks 支持** 💬 8
    *   **关注点**：从 Cursor 迁移过来的开发者希望 Codex 能提供更丰富的生命周期钩子，以实现自定义数据上报。
9.  **[Issue #27915] Linux 用户无法重置或兑换使用额度** 👍 16 | 💬 6
    *   **关注点**：官方推出的灵活速率限制重置机制仅限 Desktop App 用户使用，Linux CLI 用户权益受损。
10. **[Issue #25921] 桌面端疯狂生成崩溃转储文件，每日狂飙 5GB** 💬 6
    *   **关注点**：macOS 版 Codex Desktop 存在严重的内存泄漏/异常循环，持续生成 Crashpad `.dmp` 文件，快速耗尽磁盘空间。

---

### 4. 重要 PR 进展 (Top 10)
官方团队近期的代码提交主要围绕安全隔离、多工具管理和底层配置重构：

1.  **[PR #28165] 为 exec-server 引入 PathUri 处理文件系统权限路径**
    *   **进展**：使文件路径包含层级结构更加通用化，为跨平台（特别是沙盒配置）的 app-server 和 exec-server 分离做准备。
2.  **[PR #28009 / #28008] 外部 Agent 导入及进度遥测机制**
    *   **进展**：增加了导入外部 Agent 配置时的精细进度通知和错误报告，完善了多 Agent 生态的导入工作流。
3.  **[PR #27640] 支持多工具同时安装请求**
    *   **进展**：扩展了插件安装请求协议，模型现在可以一次性下发列表请求安装多个工具或分类插件。
4.  **[PR #27666] 为 `requirements.toml` 增加托管字段支持**
    *   **进展**：在配置层引入了强制不变量校验，覆盖身份验证、存储、遥测和 Windows 等核心配置项，提升企业级管控能力。
5.  **[PR #25888 / #26315] 准备托管子进程 MITM CA 环境**
    *   **进展**：一系列关于中间人攻击 (MITM) CA 证书环境底层准备的 PR，旨在提升 Codex 在进行沙盒网络代理和审查时的安全性。
6.  **[PR #27917] 增加显式的实时语音与静默上下文 API**
    *   **进展**：为实时语音交互提供了 App 端控制文本播报的能力，解决了后端自动播报进度更新导致语音模型“过于话痨”的问题。
7.  **[PR #27963] 从环境上下文中引用可写根目录**
    *   **进展**：优化了模型提示词结构，去除了冗余的权限提示路径列表，转为引用结构化的 `<filesystem>` 环境，节省 Token。
8.  **[PR #28131] 刷新 app-server 代理的 SSH Agent**
    *   **进展**：修复了长期运行的后台服务在原 SSH 会话断开后，由于 Socket 路径失效导致的连接中断问题。
9.  **[PR #27794] 移除终端尺寸自适应重排的特性开关**
    *   **进展**：宣布 `terminal_resize_reflow` 特性已稳定，移除了冗余的关闭路径，将其作为默认行为强制开启。
10. **[PR #27886] 更新数据隐私与安全策略措辞**
    *   **进展**：优化了内置的 Guardian 审查机制，进一步收紧敏感数据导出规则，并明确了用户对个人数据共享的授权边界。

---

### 5. 功能需求趋势
综合今日及近期的 Issue 讨论，社区的需求呈现出以下三大趋势：

*   **跨平台一致性与系统级集成**：Linux 桌面版和独立 Windows 安装包的呼声极高。同时，Windows 平台对 WSL2 的深度集成（路径映射、执行支持）存在大量断层和 Bug。
*   **无人值守与鲁棒性增强**：随着开发者越来越依赖 Codex 处理长流程任务，“网络断开后的自动恢复”、“长会话上下文压缩崩溃”等稳定性问题成为核心诉求。
*   **生态扩展与企业级管控**：开发者期望更灵活的 MCP Hooks 接入外部工具链，而企业用户则迫切需要类似 ChatGPT 的 "Projects" 概念来实现共享记忆和文件管理。

---

### 6. 开发者关注点 (痛点总结)

*   **I/O 与硬件资源消耗异常**：除了常规的响应缓慢，近期爆发出两个极端的资源占用问题——macOS 桌面端每日生成数 GB 的崩溃日志（[Issue #25921](https://github.com/openai/codex/issues/25921)），以及 CLI 端由于持续写入 SQLite 日志，预估每年可消耗高达 640 TB 的 SSD 写入寿命（[Issue #28224](https://github.com/openai/codex/issues/28224)）。
*   **环境隔离下的权限与网络判定**：在本地部署或自定义环境时，痛点频发。例如 macOS 环境下安全策略拦截 `rg` 命令（[Issue #28190](https://github.com/openai/codex/issues/28190)），以及 CLI 在处理 `localhost` 与 `127.0.0.1` 作为 `base_url` 时表现不一致导致断连（[Issue #21773](https://github.com/openai/codex/issues/21773)）。
*   **计费与限制状态不同步**：部分 Windows 和 Linux 用户反馈，系统状态显示未达到限制，但实际被强行拦截（[Issue #28208](https://github.com/openai/codex/issues/28208)），且跨平台的额度重置机制存在割裂。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

以下是为您生成的 2026-06-15 Gemini CLI 社区动态日报。

# 🛠️ Gemini CLI 社区动态日报 (2026-06-15)

## 1. 今日速览
今日 Gemini CLI 无新版本发布，但社区开发热情高涨，昨日涌入大量高质量代码贡献。核心维护者与贡献者集中提交了多项关键修复，重点解决了**会话管理（Session）脆弱性**与**安全信任机制盲区**等痛点。此外，关于 Auto Memory（自动记忆）的安全过滤、Agent（智能体）执行的稳定性依然是社区讨论最激烈的热点。

## 2. 版本发布
*过去24小时内无新版本发布。*

## 3. 社区热点 Issues
今日社区讨论聚焦于 Agent 的执行逻辑缺陷、Auto Memory 的隐私安全以及底层会话机制的健壮性。以下为最受关注的 10 个 Issue：

*   **[P1] 通用 Agent 挂起问题** `#21409`
    *   **动态**：开发者反映 `gemini-cli` 在调用通用 Agent 时经常无限期卡死（即使执行创建文件夹等简单任务），引发社区共鸣。
    *   **链接**：[google-gemini/gemini-cli Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
*   **[P1] 子 Agent 达到 MAX_TURNS 却谎报成功** `#22323`
    *   **动态**：`codebase_investigator` 触发最大轮次限制中断后，仍向主 Agent 返回 `status: "success"`，导致后续逻辑基于错误前提继续执行。
    *   **链接**：[google-gemini/gemini-cli Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
*   **[P1] Shell 命令执行完毕后卡在 "Waiting input"** `#25166`
    *   **动态**：极其简单的 CLI 命令执行完毕后，CLI 依然显示激活状态并等待输入，导致工作流频繁中断。
    *   **链接**：[google-gemini/gemini-cli Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
*   **[P2] Auto Memory 泄露密钥与过度重试** `#26525` / `#26522`
    *   **动态**：背景提取 Agent 在读取本地记录时，可能在密钥被脱敏前就将其发送给模型；同时，对于“低价值”会话，系统未标记为已处理，导致无限重试读取。
    *   **链接**：[google-gemini/gemini-cli Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
*   **[P2] 评估 AST 感知文件读取与搜索的价值** `#22745`
    *   **动态**：官方发起调研，探讨是否应引入 AST（抽象语法树）感知工具，以减少 Token 噪声并提高单次工具调用读取方法的精准度。
    *   **链接**：[google-gemini/gemini-cli/issues/22745](https://github.com/google-gemini/gemini-cli/issues/22745)
*   **[P2] 模型主动调用 Skills/子 Agent 的意愿过低** `#21968`
    *   **动态**：用户反馈 Gemini 几乎不会自主调用配置好的自定义技能（如 git、gradle 操作），除非在 Prompt 中显式指示。
    *   **链接**：[google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
*   **[P2] 工具数量超过 128 个时触发 400 错误** `#24246`
    *   **动态**：当挂载的工具（MCP 等）超过特定数量时，API 会报 400 错误。用户呼吁 Agent 具备更智能的工具作用域裁剪能力。
    *   **链接**：[google-gemini/gemini-cli/issues/24246](https://github.com/google-gemini/gemini-cli/issues/24246)
*   **[P2] 阻止 Agent 执行破坏性操作** `#22672`
    *   **动态**：在处理复杂的 Git 分支或数据库时，模型有时会越权使用 `git reset --hard` 等高危命令，社区要求增加安全护栏。
    *   **链接**：[google-gemini/gemini-cli Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
*   **[P2] 浏览器 Agent 忽略 settings.json 配置** `#22267`
    *   **动态**：浏览器 Agent 在初始化时合并了配置，但在实际运行时完全无视了诸如 `maxTurns` 的覆盖设置。
    *   **链接**：[google-gemini/gemini-cli Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
*   **[EPIC/P1] 组件级评估体系构建** `#24353`
    *   **动态**：官方正在推进行为评估测试 Epic，目前已在 6 个支持的模型上运行了 76 个行为评估测试，以系统性提升 Agent 质量。
    *   **链接**：[google-gemini/gemini-cli Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

## 4. 重要 PR 进展
今日迎来了会话恢复机制与安全防护的集中修复，以下是 10 个最值得关注的 PR：

*   **[合并] 修复 Web 搜索工具的无限延迟** `PR #27910`
    *   **内容**：为 `google_web_search` 添加 120 秒本地超时限制，超时后中断底层请求并返回明确的工具错误，避免 Agent 永久挂起。
    *   **链接**：[google-gemini/gemini-cli PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910)
*   **[P1 安全] 修复信任对话框的 Hook 披露倒置问题** `PR #27915`
    *   **内容**：修复了项目级 `SessionStart` Hook 可能在未展示给用户的情况下执行任意 Shell 命令的严重安全漏洞。
    *   **链接**：[google-gemini/gemini-cli PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915)
*   **[安全] 支持规范嵌套格式的 Hook 声明解析** `PR #27903`
    *   **内容**：完善了文件夹信任机制的解析器，使其能够正确读取嵌套形状的 Hook 命令，配合上述安全修复。
    *   **链接**：[google-gemini/gemini-cli PR #27903](https://github.com/google-gemini/gemini-cli/pull/27903)
*   **[P2] 容错缺失 `projectHash` 的损坏 JSONL 会话** `PR #27904`
    *   **内容**：当 `projectHash` 缺失时，不再回退到全量 `JSON.parse` 导致崩溃，而是优化为安全加载 JSONL 会话记录。
    *   **链接**：[google-gemini/gemini-cli PR #27904](https://github.com/google-gemini/gemini-cli/pull/27904)
*   **[P2] 恢复包含损坏元数据行的会话** `PR #27912`
    *   **内容**：增强了 JSONL 读取器的鲁棒性，即使文件中间存在损坏的元数据行，也能跳过并恢复其余有效会话。
    *   **链接**：[google-gemini/gemini-cli PR #27912](https://github.com/google-gemini/gemini-cli/pull/27912)
*   **[P2] 修复会话文件被删除后重建导致的加载失败** `PR #27905`
    *   **内容**：增加了对磁盘文件是否存在的检查，避免进程运行中文件被清理后又尝试追加记录所导致的非法重构。
    *   **链接**：[google-gemini/gemini-cli PR #27905](https://github.com/google-gemini/gemini-cli/pull/27905)
*   **[P2] 不再提供恢复未保存会话的提示** `PR #27914`
    *   **内容**：当磁盘空间不足（`ENOSPC`）导致记录器禁用时，屏蔽掉退出时的 "恢复此会话" 提示，避免误导用户。
    *   **链接**：[google-gemini/gemini-cli PR #27914](https://github.com/google-gemini/gemini-cli/pull/27914)
*   **[P3] 终端原生支持拖拽与 Cmd+V 粘贴图片** `PR #27859`
    *   **内容**：跨越性地在标准终端模拟器中实现了视觉多模态对齐，用户可直接拖拽或通过剪贴板粘贴图片到 Gemini CLI。
    *   **链接**：[google-gemini/gemini-cli PR #27859](https://github.com/google-gemini/gemini-cli/pull/27859)
*   **[安全] 防止 `findCommand` 中的命令注入** `PR #27575` (已关闭/被替代)
    *   **内容**：将 IDE 安装器与编辑器工具中的 `execSync` 替换为安全的 `spawnSync`，封堵了通过文件名注入 Shell 元字符的风险。
    *   **链接**：[google-gemini/gemini-cli PR #27575](https://github.com/google-gemini/gemini-cli/pull/27575)
*   **[P2] 阻止列表会话与后台清理的并发冲突** `PR #27906`
    *   **内容**：修复了启动时 `--list-sessions` 扫描与会话清理任务并发执行，导致扫描时误删文件的竞态条件。
    *   **链接**：[google-gemini/gemini-cli PR #27906](https://github.com/google-gemini/gemini-cli/pull/27906)

## 5. 功能需求趋势
从近期的 Issues 和 PR 趋势来看，社区与官方的研发重心正在向以下几个方向演进：
1.  **Agent 协作与感知增强**：官方大力推进组件级行为评估（Evals），同时探索 AST 感知工具。社区则迫切希望提升 Agent 的“自我意识”（准确理解自身参数限制）和自主调用专业 Sub-agent 的能力。
2.  **Auto Memory 安全与智能化**：自动记忆系统正面临严格审视，趋势是引入确定性脱敏（在进入模型上下文前剔除密钥），以及建立更聪明的会话价值评估机制，避免无意义的算力消耗。
3.  **终端多模态与交互体验升级**：今日合并的“原生图片拖拽/粘贴” PR 标志着 CLI 正在打破纯文本限制，向富媒体交互终端进化。

## 6. 开发者关注点（痛点）
综合开发者的反馈，当前使用 Gemini CLI 的核心痛点集中在：
*   **执行链路不稳定**：Agent 链路中的各种“卡死”现象（Shell 等待输入、子 Agent 死循环、Web 搜索不返回）严重打断心流。
*   **本地会话极其脆弱**：开发者频繁遇到历史会话损坏、无法 `--resume` 恢复的问题，急需底层的文件 I/O 与 JSONL 解析具备更高的容错性。
*   **权限与破坏性控制缺失**：开发者担忧两点，一是自动信任机制可能被恶意项目利用执行 Shell 钩子；二是 Agent 在操作本地资源（如 Git 分支重置、创建临时脚本）时缺乏敬畏之心，容易把工作区弄脏。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# 🛠️ GitHub Copilot CLI 社区动态日报
**日期**: 2026-06-15 | **数据来源**: [github/copilot-cli](https://github.com/github/copilot-cli)

### 1. 今日速览
过去 24 小时内，GitHub Copilot CLI 仓库无代码提交或新版本发布，但社区活跃度较高，新增了多个关于**BYOK（自带模型密钥）模型发现**和**Azure DevOps 支持**的功能请求。同时，开发者曝光了几个严重阻塞工作流的 Bug，尤其是“格式错误的附件导致整个会话 poisoned（中毒）”的缺陷引发了技术层面的广泛关注。

### 2. 版本发布
*过去 24 小时内无新版本发布。*

### 3. 社区热点 Issues
今日共更新 7 个 Issue，以下 5 个最值得技术与社区关注：

*   **[OPEN] #3791: 格式错误的附件导致会话状态“中毒”并持续报错**
    *   **链接**: [Issue #3791](https://github.com/github/copilot-cli/issues/3791)
    *   **关注理由**: 严重的高优级 Bug。当用户上传（例如加密的 `.xlsx`）格式错误或不支持的附件时，会触发 400 错误。致命的是，该错误会导致整个会话状态被“污染”，后续即使不包含附件的所有对话也会持续失败。这暴露了 CLI 在错误状态管理和上下文清理上的短板。
*   **[OPEN] #3558: 上下文与模型层出现重复 Item 导致执行失败**
    *   **链接**: [Issue #3558](https://github.com/github/copilot-cli/issues/3558)
    *   **关注理由**: 高频核心 Bug（👍 7）。在处理 Prompt 时抛出 `CAPIError: 400 Duplicate item found`。这可能与大上下文窗口、函数调用（如 `fc_call_` ID）的 WebSocket 传参去重逻辑有关，影响多轮对话的稳定性。
*   **[OPEN] #3795: 功能请求 - 支持针对 BYOK/自定义提供商的模型自动发现**
    *   **链接**: [Issue #3795](https://github.com/github/copilot-cli/issues/3795)
    *   **关注理由**: 随着越来越多开发者使用 BYOK（Bring Your Own Key）模式，当前强制要求手动配置 `COPILOT_MODEL` 或传参 `--model` 的体验显得滞后。社区呼吁 CLI 能够主动查询并列出 Provider 支持的模型列表。
*   **[OPEN] #3794: 功能请求 - 将 Azure DevOps 工作项集成至 Up next 面板**
    *   **链接**: [Issue #3794](https://github.com/github/copilot-cli/issues/3794)
    *   **关注理由**: 生态整合需求。目前跨会话的 `Up next` 任务收件箱仅同步 GitHub 的 PRs/Issues，开发者希望能在同一面板无缝接管 Azure DevOps 的分配任务，实现多源工作流的统一管理。
*   **[OPEN] #956: Agent 技能脚本在错误的文件夹中执行**
    *   **链接**: [Issue #956](https://github.com/github/copilot-cli/issues/956)
    *   **关注理由**: Agent 生态底层 Bug。开发者按照 `agentskills.io` 规范在 `SKILLS.md` 中通过相对路径引用脚本（如 `scripts/myscript.sh`），但 CLI 解析路径错误导致执行失败。这对于打造本地 Agent 技能库的开发者来说是阻断性问题。

*(注：今日另有 2 个无效/乱码 Issue：#3796 和 #3793，已被或即将被标记为 invalid 并关闭。)*

### 4. 重要 PR 进展
*过去 24 小时内无活跃的 Pull Request 更新。*

### 5. 功能需求趋势
从近期 Issue 的标签和讨论中，可以提炼出以下三大社区重点关注方向：
1.  **BYOK（自带密钥）模式体验优化**: 开发者不再满足于仅仅“能接入”自定义模型，而是要求具备**模型动态探测**、列表展示等深度集成能力（#3795）。
2.  **Agent Skills 与扩展性规范**: 社区正积极按照开放规范探索本地脚本扩展。CLI 底层对 `SKILLS.md` 的解析能力、相对路径管理及沙箱执行环境的健壮性成为关注焦点（#956）。
3.  **企业级生态集成 (Azure DevOps)**: 在企业级开发场景中，混合使用 GitHub 与 ADO 是常态。打通两者的数据孤岛（如 Issues、Work Items 和 PRs 统一面板）是 ToB 用户的强烈诉求（#3794）。

### 6. 开发者关注点（痛点总结）
*   **会话状态容错性极差**: 开发者最担忧的痛点是“单次错误拖垮全局”。附件解析失败（#3791）和上下文重复（#3558）直接导致会话彻底不可用且无法自愈。社区强烈要求引入**更健壮的上下文清理机制**和**异常隔离容错策略**。
*   **底层 API 报错的黑盒化**: 开发者反馈底层 `CAPI` 或 `WebSocket` 报错往往过于底层（如直接抛出 `Duplicate item found with id...`），CLI 层面缺乏友好提示和降级重试机制。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-06-15）

## 1. 今日速览
今日 Kimi Code CLI 社区无最新版本发布。开发与维护重点集中在底层工具链的稳定性修复及跨平台（尤其是 Windows 环境）的体验优化，多个历史 PR 被集中处理关闭。同时，社区对“Code Plan”订阅计划的透明度及 API 限速策略表达了强烈关注，引发了关于开发者权益的讨论。

## 2. 版本发布
*过去 24 小时内无新版本发布。*

## 3. 社区热点 Issues
今日社区共有 2 个活跃 Issue，均反映了当前用户在实际使用中的核心痛点：

*   **[Issue #2123] [OPEN] 限速，限额严重**
    *   **为何重要**：该 Issue 直指 Kimi Code Plan 订阅服务的核心商业痛点。用户反馈官方宣称 5 小时支持约 300–1200 次请求，但实际只能调用 60 余次。此外，官方未明确披露具体 API 额度，仅提供剩余百分比，引发了用户关于“信息披露不完整”及退款纠纷的严肃讨论。
    *   **链接**: [MoonshotAI/kimi-cli Issue #2123](https://github.com/MoonshotAI/kimi-cli/issues/2123)

*   **[Issue #2451] [OPEN] System prompt conflicting with my desired workflow (系统提示词与工作流冲突)**
    *   **为何重要**：反映了高级开发者对 CLI 行为可控性的需求。用户反馈（基于 v0.12.0 版本与 k2.7-coding 模型）Kimi CLI 内置的 System Prompt 具有极高的优先级，覆盖了用户自定义的严格开发规范，阻碍了特定工作流的执行。
    *   **链接**: [MoonshotAI/kimi-cli Issue #2451](https://github.com/MoonshotAI/kimi-cli/issues/2451)

## 4. 重要 PR 进展
过去 24 小时内共有 4 个 PR 更新，包含 1 个全新的 Bug 修复提交，以及 3 个历史功能/修复分支被官方关闭：

*   **[PR #2452] [OPEN] fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched**
    *   **进展/内容**：**全新提交**。修复了 `StrReplaceFile` 工具的一个逻辑漏洞。原代码在执行多次编辑时，只有在最终内容完全未改变时才报错；新代码优化了匹配检测逻辑，能更精准地捕获并拦截单次编辑块未匹配的情况。
    *   **链接**: [MoonshotAI/kimi-cli PR #2452](https://github.com/MoonshotAI/kimi-cli/pull/2452)

*   **[PR #839] [CLOSED] feat(shell): add configurable shell support for Windows**
    *   **进展/内容**：旨在为 Windows 添加可配置的 shell 支持。虽然该 PR 被关闭（可能已被其他方式实现或未达到合并标准），但反映了社区对 Windows 环境兼容性的长期关注。
    *   **链接**: [MoonshotAI/kimi-cli PR #839](https://github.com/MoonshotAI/kimi-cli/pull/839)

*   **[PR #2018] [CLOSED] feat: add Alt+V paste support for Windows Terminal**
    *   **进展/内容**：解决 Windows Terminal 拦截 `Ctrl+V` 导致 CLI 无法粘贴的问题，尝试添加 `Alt+V` 作为后备快捷键。
    *   **链接**: [MoonshotAI/kimi-cli PR #2018](https://github.com/MoonshotAI/kimi-cli/pull/2018)

*   **[PR #2020] [CLOSED] fix: use per-process log filenames to prevent rotation lock on Windows**
    *   **进展/内容**：修复 Windows 下并发进程导致的日志记录冲突问题（`WinError 32`），方案是使用 `kimi.{pid}.log` 避免文件占用。
    *   **链接**: [MoonshotAI/kimi-cli PR #2020](https://github.com/MoonshotAI/kimi-cli/pull/2020)

## 5. 功能需求趋势
从近期的 Issue 和 PR 活动中，可以提炼出以下两大功能需求与演进趋势：
*   **商业策略与额度透明化**：开发者强烈要求订阅计划（Code Plan）的限速规则和具体 Token 额度透明化，拒绝“黑盒”式的百分比显示。
*   **工作流与 Prompt 自定义**：进阶开发者希望 CLI 能提供更深度的自定义能力，尤其是能够灵活控制、降级或禁用官方内置的 System Prompt，以适配企业级严格开发规范。
*   **Windows 生态深度兼容**：大量历史 PR（如终端粘贴、多进程日志锁、Shell 配置）表明，Windows 环境下的终端交互、并发文件操作仍是工具适配的难点和高频需求点。

## 6. 开发者关注点
*   **额度焦虑与服务可用性**：重度用户面临严重的频控限制（远低于官方宣传基准），直接影响了 CI/CD 集成和高强度开发任务的连续性，且售后退款通道不畅。
*   **底层文件编辑工具的鲁棒性**：AI 编辑代码的能力极度依赖 `StrReplaceFile` 等底层工具，开发者对多行复杂替换、部分匹配失败时的错误提示精准度要求极高（见 PR #2452）。
*   **系统环境侵入性**：CLI 工具在 Windows 平台对系统快捷键（粘贴）、文件系统（日志占用）的抢占，容易引发系统级冲突，开发者期望更优雅的无侵入式设计。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报 (2026-06-15)**

这里是为您整理的 2026 年 6 月 15 日 OpenCode 开源项目社区动态日报。

### 1. 今日速览
今日 OpenCode 核心团队发布了 v1.17.7 和 v1.17.6 版本，重点修复了 Plugin 插件机制和 MCP 兼容性问题。社区讨论热烈，尤其是针对 DeepSeek V4 Pro 降价后的订阅额度调整诉求，以及多起因 TUI 退出未清理终端状态导致的 Bug 报告。PR 方面，嵌套子代理、长会话稳定性和原生 Yoga 布局等重磅功能取得了显著进展。

---

### 2. 版本发布
*   **v1.17.7** ([Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.17.7))
    *   **Bugfixes**: 修复了 Plugin 客户端请求未复用活动服务端的问题；ACP shell 工具调用现在会从一开始就显示命令和工作目录；Plugin 提供的 shell 环境变量现在正确应用于 PTY 会话。
    *   **Improvements**: 优化了 MCP 相关体验。
*   **v1.17.6** ([Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.17.6))
    *   **Bugfixes**: 通过声明 OpenCode 支持的客户端能力，改善了 MCP 服务器的兼容性。

---

### 3. 社区热点 Issues (Top 10)
以下为过去 24 小时内关注度最高的 Issues：

1.  **[FEATURE]: 针对 DeepSeek V4 Pro 永久降价 75% 调整 Go 使用限制** — ([#28846](https://github.com/anomalyco/opencode/issues/28846))
    *   *关注点*：DeepSeek API 大幅降价，社区（77条评论）强烈呼吁官方同步上调 OpenCode Go 订阅的使用额度。
2.  **使用免费模型时出现 "free usage exceed" 错误** — ([#15585](https://github.com/anomalyco/opencode/issues/15585))
    *   *关注点*：用户反馈免费模型耗尽额度的问题，反映了高频使用者对速率限制和免费额度的焦虑。
3.  **[FEATURE]: 支持即时 TUI 命令的 Plugin Hook** — ([#5305](https://github.com/anomalyco/opencode/issues/5305))
    *   *关注点*：开发者期望插件能注册无需经过 Agent 即可执行的本地 TUI 命令，以提升插件交互效率。
4.  **[BUG]: "Upstream idle timeout exceeded" (上游空闲超时)** — ([#28957](https://github.com/anomalyco/opencode/issues/28957))
    *   *关注点*：在使用 "writing-plans" 技能时出现基础设施连接超时，影响长时间编码任务。
5.  **opencode 无法再读取图像** — ([#25832](https://github.com/anomalyco/opencode/issues/25832))
    *   *关注点*：Vision 模型图像解析功能失效报错，属于核心功能阻断性 Bug。
6.  **[FEATURE]: 递归语言模型 (RLM) 上下文管理** — ([#11829](https://github.com/anomalyco/opencode/issues/11829))
    *   *关注点*：极具技术深度的提案，建议将上下文作为外部环境查询，替代传统的窗口压缩，展现了社区在前沿架构上的探索。
7.  **[FEATURE]: 支持 Vision 模型的图像输入** — ([#22469](https://github.com/anomalyco/opencode/issues/22469))
    *   *关注点*：用户期望能无缝在对话中粘贴截图，优化多模态开发体验。
8.  **TUI: 退出时终端清理未完成** — ([#32336](https://github.com/anomalyco/opencode/issues/32336))
    *   *关注点*：退出 TUI 后未禁用鼠标追踪和备用屏幕缓冲，导致终端乱码崩溃，属于影响极差的体验问题。
9.  **guardrail-instrumentation: 共享状态污染阻塞多代理 PR 创建** — ([#32319](https://github.com/anomalyco/opencode/issues/32319))
    *   *关注点*：多 Agent 并行工作树场景下的严重冲突问题，直接影响复杂任务的提交流程。
10. **SQLite auto_vacuum 被禁用，数据库无限增长** — ([#31526](https://github.com/anomalyco/opencode/issues/31526))
    *   *关注点*：底层存储优化问题，长时间运行的实例会因未回收已删除行而导致严重磁盘消耗。

---

### 4. 重要 PR 进展 (Top 10)
开发团队与社区贡献者提交了多项关键改进：

1.  **feat: 嵌套子代理生成 (最多 5 层)** — ([PR #32301](https://github.com/anomalyco/opencode/pull/32301))
    *   支持子 Agent 派生自己的子 Agent，极大增强了复杂任务的拆解能力。
2.  **feat(app): 稳定长时间会话的时间轴** — ([PR #32331](https://github.com/anomalyco/opencode/pull/32331))
    *   解决长会话滚动时消息跳动、重叠的问题，代码高亮移出主线程以提升 UI 流畅度。
3.  **feat: 默认启用 Plan (计划) 模式** — ([PR #32349](https://github.com/anomalyco/opencode/pull/32349))
    *   调整核心交互逻辑，让 Agent 默认先规划再执行。
4.  **feat: 动态工作流** — ([PR #29789](https://github.com/anomalyco/opencode/pull/29789))
    *   引入可从 TUI 调用的项目本地工作流（类似 Claude Code 特性）。
5.  **[beta] 原生 Yoga 布局的 opentui** — ([PR #30815](https://github.com/anomalyco/opencode/pull/30815))
    *   底层 UI 引擎重构，采用原生 Yoga 布局以提供更好的渲染性能。
6.  **feat(opencode): 为导出命令添加 Markdown 输出** — ([PR #32262](https://github.com/anomalyco/opencode/pull/32262))
    *   会话记录不再局限于 JSON，支持导出为易读的 Markdown 文档。
7.  **feat: 自定义 OpenAI 兼容提供商的模型自动发现** — ([PR #32344](https://github.com/anomalyco/opencode/pull/32344))
    *   增强第三方大模型接入体验，自动拉取可用模型列表。
8.  **fix: 修复 LLM 会话中截断的 JSON 工具输入** — ([PR #24289](https://github.com/anomalyco/opencode/pull/24289))
    *   引入 `jsonrepair` 库，大幅增强了 Agent 在输出错误 JSON 格式时的容错与修复能力。
9.  **feat(tui): 添加线程命令和会话图谱** — ([PR #32299](https://github.com/anomalyco/opencode/pull/32299))
    *   支持在 TUI 中基于选中文本创建子线程，优化发散式开发体验。
10. **[contributor] chore: 升级 Effect 至 beta 83** — ([PR #32340](https://github.com/anomalyco/opencode/pull/32340))
    *   底层核心框架跟进最新版，保障系统底层架构的稳定与进化。

---

### 5. 功能需求趋势
从近期的 Issue 和 PR 中，可以总结出以下几个明显的技术演进趋势：
*   **多代理与并发编排**：社区对单一 Agent 的依赖正在转向多 Agent 协作（如嵌套子代理、Worktrees 状态隔离）。用户需要更强大的任务分发和状态管理工作流。
*   **底层 UI 架构重构**：TUI 卡顿、状态残留（如未清理的终端缓冲）是近期 Bug 重灾区。官方正通过移步渲染线程、引入 Yoga 布局等底层手段彻底优化。
*   **大模型生态的高效接入**：用户不仅要求支持最新的主流模型（如 DeepSeek V4 Pro, Composer 2.5），还强烈需求 OpenAI 兼容接口的自动发现、价格/额度同步感知以及大模型容错（JSON 修复）。
*   **数据持久化与导出**：对于上下文管理，社区正从简单的压缩向 RLM（递归外部查询）演进；同时要求更好的数据生命周期管理（如 SQLite Vaccum、Markdown 导出）。

---

### 6. 开发者关注点（痛点总结）
1.  **额度与计费焦虑**：开发者对 OpenCode Go 订阅的“性价比”极为敏感，特别是当第三方 API（如 DeepSeek）降价时，期望官方立刻做出响应。
2.  **终端 (TUI) 稳定性**：终端输入无响应、复制粘贴丢失换行、SSH 连接冻结、退出导致终端崩溃等问题频发，消耗了大量开发者的耐心。
3.  **连接超时与验证**：包括 AWS Bedrock 复杂的凭证验证流程，以及高频出现的 "Upstream idle timeout"，网络连接的稳定性亟待提升。
4.  **跨平台与桌面端体验**：Windows 桌面版的文件列表不刷新、与 WSL 的集成诉求，以及 Mac/Linux 平台的细微体验差异，仍是开发者日常抱怨的高发区。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

以下是 2026-06-15 的 Pi 社区动态日报。

# 📰 Pi 社区动态日报 (2026-06-15)

## 1. 今日速览
今日 Pi 生态的重点集中在**扩展能力增强**与**多模型适配优化**上。社区通过多项 PR 显著增强了 Extension API 的上下文控制及生命周期管理能力；同时，针对 GPT-5.5、GLM-5.2、Grok 及多个本地推理后端的兼容性与缓存控制问题引发了广泛讨论。

## 2. 版本发布
*过去 24 小时内无最新官方 Release 发布，多项核心更新正在通过 PR 进行代码审查与合并。*

---

## 3. 社区热点 Issues
以下为本期最受关注（评论数最多、最具代表性）的 10 个 Issues：

1. **[bug] Windows bash 检测在非默认盘符失效** (评论: 17)
   * **概述**: 当 Git Bash 安装在 D 盘等非默认路径时，Pi 无法正确解析 PATH 中的 `bash.exe`。
   * **重要性**: 严重影响了 Windows 开发者的基础使用体验。
   * 🔗 [Issue #5103](https://github.com/earendil-works/pi/issues/5103)
2. **[inprogress] 迁移 Shrinkwrap 机制** (评论: 9)
   * **概述**: 现有的依赖处理导致 `pi-ai` 在磁盘上产生重复副本，由于模块级 `Map` 相互隔离，引发 API provider 注册冲突。
   * **重要性**: 核心包管理架构优化，直接关系到插件和包的加载稳定性。
   * 🔗 [Issue #5653](https://github.com/earendil-works/pi/issues/5653)
3. **[closed] Claude 模型 1h 缓存降级为 5m 导致成本飙升** (评论: 8)
   * **概述**: Pi 未能正确发送 Anthropic 要求的 Beta Header，导致 1 小时长效缓存静默失效为 5 分钟，大幅推高 API 调用成本。
   * **重要性**: 严重的计费与性能缺陷，引发云端 API 用户强烈关注。
   * 🔗 [Issue #5703](https://github.com/earendil-works/pi/issues/5703)
4. **[open] 允许在 `sendMessage()` 中排除特定上下文** (评论: 6)
   * **概述**: 开发者呼吁在 Extension 发送自定义消息时，提供 `excludeFromContext` 选项，防止冗余信息污染大模型上下文。
   * **重要性**: 插件开发中精细化控制 Token 消耗的核心需求。
   * 🔗 [Issue #5654](https://github.com/earendil-works/pi/issues/5654)
5. **[closed] GPT 5.5 上下文窗口配置错误** (评论: 6)
   * **概述**: 针对最新发布的 GPT-5.5，Pi 在 Codex 和 API 之间配置了错误的上下文窗口大小（实际 400K / 1M）。
   * **重要性**: 限制了最新旗舰模型的性能发挥。
   * 🔗 [Issue #5644](https://github.com/earendil-works/pi/issues/5644)
6. **[open] 全局与本地 `.pi` 目录的配置重叠问题** (评论: 5)
   * **概述**: 全局配置 (`~/.pi`) 和项目配置 (`cwd/.pi`) 在特定情况下的路径重叠引发了加载困惑。
   * **重要性**: 由知名开发者 Armin Ronacher (mitsuhiko) 提出，直指配置系统的架构合理性。
   * 🔗 [Issue #5671](https://github.com/earendil-works/pi/issues/5671)
7. **[closed] 本地 LLM 后端任务卡死** (评论: 5)
   * **概述**: 使用本地 OpenAI 兼容 API 时，Agent 卡在 "waiting for summary approval" 无法推进。
   * **重要性**: 本地大模型部署是重要场景，此阻塞性 Bug 极大影响开发效率。
   * 🔗 [Issue #5706](https://github.com/earendil-works/pi/issues/5706)
8. **[open] 支持 TUI 多并发 Agent 会话切换** (评论: 4)
   * **概述**: 期望能在终端 UI (TUI) 中同时挂起多个 Agent 任务，并在前台与后台任务间无缝切换。
   * **重要性**: 高阶开发者的进阶需求，代表了 AI 终端工作流的未来形态。
   * 🔗 [Issue #5700](https://github.com/earendil-works/pi/issues/5700)
9. **[closed] 代理重写 System 块 TTL 导致 `cache_control` 400 报错** (评论: 4)
   * **概述**: 0.79.0 版本引入的显式 TTL 块在与特定 API 代理配合时，因重写规则不一致导致请求失败。
   * **重要性**: 反映了 Pi 在复杂企业级网络代理环境下的兼容性挑战。
   * 🔗 [Issue #5718](https://github.com/earendil-works/pi/issues/5718)
10. **[open] 增加插件级别的 Prompt 指南 API** (评论: 3)
    * **概述**: 提议允许扩展开发者通过 `pi.setPromptGuidelines()` 注入特定规则与约束。
    * **重要性**: 进一步释放 Extension 定制 Agent 行为的潜力。
    * 🔗 [Issue #5710](https://github.com/earendil-works/pi/issues/5710)

---

## 4. 重要 PR 进展
以下 10 个 PR 代表了接下来版本的重点演进方向：

1. **[OPEN] 为自定义消息添加 `excludeFromContext`** ([PR #5678](https://github.com/earendil-works/pi/pull/5678) by `mitsuhiko`)
   * 解决 Issue #5654，在 Agent 线束和 Extension API 中全面支持上下文隔离，避免无意义的 Token 消耗。
2. **[OPEN] 安全地延迟重载扩展** ([PR #5735](https://github.com/earendil-works/pi/pull/5735) by `mitsuhiko`)
   * 重构 `ctx.reload()` 机制，使得扩展不仅能在斜杠命令中，更能在任意安全边界处进行热重载。
3. **[CLOSED] Grok 账号 OAuth 登录支持** ([PR #5714](https://github.com/earendil-works/pi/pull/5714) by `hyiiiii`)
   * 新增内置的 `xai-grok` OAuth Provider，支持设备码登录与刷新令牌，原生接入 Grok 生态。
4. **[CLOSED] 支持 `allowCommands` 选项** ([PR #5732](https://github.com/earendil-works/pi/pull/5732) by `max-elia`)
   * 允许扩展通过 `sendUserMessage()` 触发斜杠命令，极大增强了外部系统与 Pi 会话的交互能力。
5. **[CLOSED] 首次运行终端主题检测** ([PR #5385](https://github.com/earendil-works/pi/pull/5385) by `vegarsti`)
   * 通过 OSC 查询自动检测终端明暗主题，提升新用户“开箱即用”的 TUI 视觉体验。
6. **[OPEN] Extension Prompt Guideline API** ([PR #5711](https://github.com/earendil-works/pi/pull/5711) by `xl0`)
   * 配合 Issue #5710，使扩展能够向系统提示词中动态注入指导原则。
7. **[CLOSED] OpenAI Responses 流终止事件要求** ([PR #5526](https://github.com/earendil-works/pi/pull/5526) by `dmmulroy`)
   * 修复 OpenAI 响应流随机中断且上下文 Token 统计错乱的问题，强制要求以终止事件结束。
8. **[CLOSED] 工具执行性能分析埋点** ([PR #5731](https://github.com/earendil-works/pi/pull/5731) by `RHarshith`)
   * 添加执行性能监控仪表，方便开发者排查复杂 Agent 任务中哪个环节耗时最长。
9. **[CLOSED] Vim 风格模态编辑器扩展** ([PR #2331](https://github.com/earendil-works/pi/pull/2331) by `Nokodoko`)
   * 在 Pi 环境中原生集成 Vim 操作（支持 Normal/Insert/Visual 等模式），满足硬核终端用户需求。
10. **[CLOSED] 修正 Minimax-M3 上下文大小** ([PR #5701](https://github.com/earendil-works/pi/pull/5701) by `KY64`)
    * 将 Minimax-M3 的上下文窗口从 1M 修正为实际的 524,288 Tokens。

---

## 5. 功能需求趋势
从近期 Issue 与 PR 中，可以提炼出以下三大核心演进趋势：
* **Extension API 深度化与控制力增强**：开发者不再满足于简单的脚本扩展，而是需要更底层的控制权。例如精细化管理上下文 Token (`excludeFromContext`)、动态注入提示词指南 (`setPromptGuidelines`)，以及由扩展接管/触发核心命令。
* **高度兼容与定制化的多模型支持**：生态正在快速适配最新、最前沿的模型（如 GPT-5.5, Claude 新缓存策略, Kimi-k2.6, GLM-5.2, Grok）。同时，针对本地模型和小众 API 代理的容错处理成为了重点优化方向。
* **TUI 多任务与工作流效率**：终端用户对工作流有着极致的追求。支持多并发 Agent 任务切换、原生图像生成支持、以及无缝的 Vim 操作体验，反映了重度用户对“终端一体化生产力”的强烈诉求。

## 6. 开发者关注点（痛点总结）
1. **跨平台与环境兼容性顽疾**：Windows 平台依然有不少阻塞性问题（如 Bash 路径检测、终端图像渲染跳跃），以及各类包管理器（pnpm/Shrinkwrap）的路径与依赖解析痛点。
2. **缓存控制与 API 成本管理**：Anthropic / OpenAI 等提供商的缓存机制（TTL）极其敏感，配置不当或代理重写极易导致 API 报错（400）或成本异常飙升，这是云端开发者最为揪心的痛点。
3. **会话生命周期管理的健壮性**：主要表现为特定操作下的“僵尸进程”或“前端卡死”。如：按 ESC 无法可靠中断子 Agent、接收到 `SIGTERM` 后终端 Raw 模式未关闭导致乱码、以及本地后端卡在“等待审批”步骤。
4. **本地推理后端的适配差距**：相较于云端 API，Pi 与本地 OpenAI 兼容 API 结合时，经常出现超时设置不合理（默认 10 分钟超时）、任务推进逻辑死锁等问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-15)

> 数据来源：github.com/QwenLM/qwen-code

## 1. 今日速览
今日 Qwen Code 社区无新版本发布，但开发重心显著向**内存管理与上下文性能优化**倾斜，官方及社区贡献者提交了多个关于截断历史记录和防止 TUI 卡死的核心修复。此外，**商业化策略调整**引发的免费额度缩减问题持续发酵，成为社区最具争议的焦点。

## 2. 版本发布
* **过去 24 小时内无新版本发布。**

## 3. 社区热点 Issues
以下为本日最值得关注的 10 个 Issue：

* **[#3203] [OPEN] Qwen OAuth 免费层政策调整（争议极大）**
  * **亮点**：单日 135 条评论。官方计划将每日免费请求额度从 1000 次锐减至 100 次，并计划完全关闭免费入口。此举在社区内引发巨大震动，开发者对成本和过渡期方案表达强烈不满。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/3203)
* **[#5083] [OPEN] TUI 卡死：疑似僵尸子进程未回收导致界面冻结**
  * **亮点**：高优先级 (P2) Bug。在 Linux 会话中执行 MCP 相关操作时，产生 defunct 状态的 bash 子进程导致主进程无响应。精准的进程状态诊断使其成为今日重点排查对象。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5083)
* **[#5055] [OPEN] VSCode 插件报木马病毒**
  * **亮点**：高优先级 (P1) 安全问题。Win11 环境下，最新版 `vscode-ide-companion-0.18.0` 的 `.vsix` 安装包被 Windows Defender 识别为 `Trojan:JS/ShaiWorm.DBA!MTB`，严重影响 IDE 端用户体验。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5055)
* **[#5101] [OPEN] 重复的大型 Tool Results 导致上下文撑爆 (OOM)**
  * **亮点**：核心性能问题。模型在执行输出大量日志的命令时，Qwen Code 会重复携带这些庞大的历史记录发送给 Provider，迅速耗尽 Context Window，已被列入上下文性能路线图。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5101)
* **[#5080] [OPEN] 阿里云 Standard API Key 与 Token Plan 混用报 401**
  * **亮点**：使用 `qwen config` 配置百炼平台后，切换模型极易触发鉴权冲突。反映出当前多接入点架构在身份验证解耦上存在缺陷。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5080)
* **[#5100] [CLOSED] Agent `name` 参数破坏了内置的 `/review` 技能**
  * **亮点**：多智能体协作 Bug。在执行 `/review` 并发起多个审查 Agent 时，因参数适配问题导致触发 `no active team` 错误，最终导致死循环调用中断。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5100)
* **[#4218] [OPEN] [Windows] MCP Server "filesystem" 连接成功但模型无法调用工具**
  * **亮点**：经典的 MCP 生命周期 Bug。UI 层面提示已连接，但工具定义并未成功挂载给模型，阻断了自动化流。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/4218)
* **[#5099] [CLOSED] 针对复用的 tool-call id 发送重复的 tool-result**
  * **亮点**：底层协议健壮性问题。当 Provider 复用 ID 时，Qwen Code 会发送重复结果，可能导致后端状态损坏或引发无限重试。开发者已提供本地复现脚本。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/5099)
* **[#4845] [OPEN] 请求支持一键导入 Claude Code/ Desktop 配置**
  * **亮点**：极具价值的生态迁移需求。建议增加 `/import-config` 命令，一键迁移 MCP Servers、指令和权限，极大降低竞争工具用户的转移门槛。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/4845)
* **[#4727] [CLOSED] 呼吁引入类似 Claude/Copilot 的全局 Rules (Instructions) 系统**
  * **亮点**：高频特性需求。用户希望能跨会话配置模型的说话风格、工作流指南等，而不仅仅是依赖临时的 Skills。
  * [查看链接](https://github.com/QwenLM/qwen-code/issues/4727)

## 4. 重要 PR 进展
核心代码库今日合入/更新了多个关键修复与重构：

* **[#5111] fix(core): Bound active tool result history**
  * **内容**：针对 Issue #5101，引入活动历史预算机制。当工具输出累积超过字符阈值时，通过微压缩路径清理旧结果，防止上下文撑爆。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/5111)
* **[#5089] refactor(core): extract Protocol enum and decouple model identity**
  * **内容**：底层架构大重构。将 AuthType 从固定枚举改为字符串，把模型身份与 SDK 路由协议解耦，彻底解决多 Provider 接入冲突（如 Issue #5080）。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/5089)
* **[#5115] fix(core): ignore agent names without active teams**
  * **内容**：快速修复了今日报出的 Issue #5100。在未启用团队模式时，忽略 agent 的 `name` 参数，将其降级为普通单次执行，防止流程卡死。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/5115)
* **[#5073] fix: warn on oversized context instructions**
  * **内容**：在启动时增加预警提示。如果估算 `QWEN.md` 等全局指令占用的 Token 超过了当前模型上下文窗口的 15%，则向用户发出警告。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/5073)
* **[#4894] fix(dual-output): prevent FIFO blocking on startup**
  * **内容**：修复无读取端时命名管道阻塞启动的 Bug，改用非阻塞读写并增加 1MB 高水位缓冲区。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/4894)
* **[#4967] fix(core): coerce numeric string params in SchemaValidator**
  * **内容**：增强 MCP 工具调用的容错性。在 schema 验证阶段自动将数字字符串（如 `"3"` -> `3`）安全转换，减少大模型因数据类型错误导致的工具调用失败。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/4967)
* **[#4989] ci: add scheduled autofix workflow for stale bug issues**
  * **内容**：引入 AI 自我维护机制。新增定时 CI 任务，每天自动寻找一个过期的 Bug Issue，由 Qwen Code 自主尝试复现并提交修复 PR。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/4989)
* **[#4520] fix(core): truncate model-facing tool output**
  * **内容**：将工具输出的截断逻辑前置到 `CoreToolScheduler`，确保所有工具（非仅 Shell）的回传结果在写入会话历史前都有边界限制。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/4520)
* **[#5082] feat(desktop): show git branch in working directory badge**
  * **内容**：桌面端 UI 优化。在工作目录徽标旁直接显示当前 Git 分支，提升多分支并行开发体验。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/5082)
* **[#4909] feat(extensions): support archive install sources**
  * **内容**：扩展性增强。支持从本地 `.zip`/`.tar.gz` 压缩包或远程压缩包 URL 安装 IDE 插件/扩展。
  * [查看链接](https://github.com/QwenLM/qwen-code/pull/4909)

## 5. 功能需求趋势
从近期的 Issues 和 PRs 中，可以明显看出社区对 Qwen Code 的发展期望集中在以下几个方向：
1. **上下文与内存管理极限优化**：随着处理任务复杂化，长会话导致的 Token 溢出、OOM、V8 字符串长度限制成为最大痛点，迫切需要多层级的上下文压缩与更智能的会话历史回收机制。
2. **架构解耦与 Provider 生态兼容**：开发者极其渴望更灵活的多模型接入。社区正在推动将 SDK 通讯协议与上层模型标识解耦，以无缝兼容 OpenAI、MiniMax、DeepSeek 等各种兼容 API。
3. **MCP 生态的健壮性**：工具端缺乏标准化的类型校验与状态管理，导致极易出现“UI 已连但模型不可用”或参数类型错误。类型强转、生命周期管理是近期重点。
4. **开发者工作流无缝迁移**：针对 Cursor、Claude Code 等竞品用户的抢夺开始显现，一键导入配置/规则成为明确诉求。

## 6. 开发者关注点
* **商业化策略反噬**：免费配额的大幅缩减（Issue #3203）引发了信任危机。大量专业开发者抱怨 Pro 版本买不到（Issue #3272），而缩减的免费额度甚至不够完成单次完整任务开发，开发者强烈呼吁更平滑的过渡策略。
* **安全性与误报焦虑**：杀毒软件报毒事件（Issue #5055）以及越权执行 Side-effect 命令（Issue #5102），暴露出 Qwen Code 在权限管控与安装包安全签名方面存在短板。
* **多 Agent 协同稳定性**：高级用户正在尝试使用其内置的团队模式/多 Agent 技能（如 `/review`），但目前底层调度极其脆弱，极易陷入循环或无响应。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

这里是 2026 年 6 月 15 日的 DeepSeek TUI（现正式更名为 CodeWhale）社区动态日报。

# 🐳 CodeWhale (原 DeepSeek TUI) 社区动态日报 (2026-06-15)

## 1. 今日速览
- **品牌重塑落地**：官方正式发布 **v0.8.60**，项目全面更名为 **CodeWhale**（npm 包、可执行文件及发布资产名称均已变更），旧的 `deepseek-tui` 正式废弃。
- **应对长任务与高并发痛点**：社区高度关注多智能体并发调度及 TUI 稳定性，官方正在筹备 v0.8.61 版本以集中修复 Windows 端的卡死、SSE 超时等问题。
- **全新架构 WhaleFlow 蓄势待发**：官方在多个 PR 和 Issue 中构建并完善了 WhaleFlow（异构模型多智能体协同）的底层基础，正积极向 v0.9.0 迈进。

---

## 2. 版本发布
**v0.8.60 发布：品牌重命名与规范化**
- 核心变更：确立 **CodeWhale** 为标准项目名称。旧的 `deepseek-tui` npm 包停止维护，老用户需参考 `docs/REBRAND.md` 进行迁移。
- [查看 Release 详情](https://github.com/Hmbown/CodeWhale/releases)

---

## 3. 社区热点 Issues (Top 10)
以下是近期讨论最热烈、最具代表性的问题与需求：

1. **[核心故障] YOLO 模式频繁卡死且无法恢复** ([#2487](https://github.com/Hmbown/CodeWhale/issues/2487))
   - **痛点**：使用自动执行（YOLO）模式时频繁提示 `Turn stalled`，发送 continue 无法恢复，强行中断后会话丢失。
2. **[核心故障] Windows 环境下 TUI 间歇性彻底冻结** ([#1812](https://github.com/Hmbown/CodeWhale/issues/1812))
   - **痛点**：Windows 11 上运行时 UI 经常完全无响应，键盘和屏幕均无反馈，但进程未崩溃。
3. **[架构优化] 子代理 120s API 超时严重限制并发能力** ([#1806](https://github.com/Hmbown/CodeWhale/issues/1806))
   - **痛点**：并行子代理（agent_open）在处理长任务时，硬性 120 秒 API 超时导致任务全军覆没。
4. **[兼容性] Linux GLIBC 版本要求过高导致无法运行** ([#1067](https://github.com/Hmbown/CodeWhale/issues/1067) / [#3207](https://github.com/Hmbown/CodeWhale/issues/3207))
   - **痛点**：编译的二进制文件强依赖 GLIBC 2.39，导致 Ubuntu 22.04 (GLIBC 2.35) 用户安装后直接报错无法运行。
5. **[企业级需求] API Provider 自动降级容灾机制** ([#2574](https://github.com/Hmbown/CodeWhale/issues/2574))
   - **痛点**：当前单一 Provider 报错（如 429/401）会中断任务。社区呼吁增加 `fallback_providers`，实现多 API Key 自动重试切换。
6. **[生态拓展] 申请入驻 Agent Client Protocol (ACP) 注册表** ([#3192](https://github.com/Hmbown/CodeWhale/issues/3192))
   - **痛点**：社区希望能与 Zed 等主流编辑器更好地联动，将其作为原生 Agent 接入。
7. **[架构优化] 跨对话的子代理状态检查点** ([#2029](https://github.com/Hmbown/CodeWhale/issues/2029))
   - **痛点**：有用的子任务应该被设计为可恢复、可检查点的活动，而不是单次限制的最终响应。
8. **[诊断优化] 智能体执行期间需要可见的 Token 和资源消耗** ([#2666](https://github.com/Hmbown/CodeWhale/issues/2666))
   - **痛点**：复杂任务下，Agent 无法感知自己的 Token 预算、上下文窗口压力和耗时，容易陷入无效空转。
9. **[数据追踪] 非 DeepSeek 模型的成本追踪失效** ([#3066](https://github.com/Hmbown/CodeWhale/issues/3066))
   - **痛点**：定价表未及时更新，导致接入 Kimi、Qwen 等第三方模型时，会话成本统计完全失效。
10. **[安全管控] 添加强类型的持久化权限规则** ([#1186](https://github.com/Hmbown/CodeWhale/issues/1186))
   - **需求**：希望在执行策略层支持按工具名、命令前缀、工作区路径配置 `allow`、`deny` 或 `ask` 规则，提升自动化执行的边界安全性。

---

## 4. 重要 PR 进展 (Top 10)
官方近期进行大量合并与重构，为下一代的 "WhaleFlow" 架构铺路：

1. **[核心奠基] v0.8.61 社区代码大整合及底层冻结修复** ([PR #3225](https://github.com/Hmbown/CodeWhale/pull/3225))
   - 汇总了 28 个 commits，包含社区功能收割、启动阻断问题修复以及 WhaleFlow 基础层的整合。
2. **[故障修复] 修复 Windows 环境下鼠标捕获导致的历史记录箭头失效** ([PR #2103](https://github.com/Hmbown/CodeWhale/pull/2103))
   - 移除了 Windows 空输入下的全局覆盖，修复了 conhost 风格终端的滚动回退机制。
3. **[生态拓展] 初始化 VS Code 本地运行时扩展脚手架** ([PR #2811](https://github.com/Hmbown/CodeWhale/pull/2811))
   - 提供了 `codewhale serve --http` 能力，并加入状态栏与配置面板，意味着官方 IDE 插件正在路上。
4. **[容灾机制] 引入休眠状态的 Provider 降级链配置** ([PR #2779](https://github.com/Hmbown/CodeWhale/pull/2779))
   - 响应 Issue #2574，添加了 `fallback_providers = [...]` 解析逻辑，为后续的多模型容灾提供底层支持。
5. **[性能优化] 确定性响应缓存机制** ([PR #2805](https://github.com/Hmbown/CodeWhale/pull/2805))
   - 针对 `temperature: 0.0` 且无工具调用的确定性非流式聊天请求引入缓存，大幅降低重复请求的 API 消耗。
6. **[工具集成] 增加 Hugging Face MCP 辅助指令** ([PR #2802](https://github.com/Hmbown/CodeWhale/pull/2802))
   - 添加了 `/hf mcp status` 和 `/hf concepts` 等指令，强化了与 HF 生态的集成联动。
7. **[AI 上下文] 引入大模型辅助生成 AGENTS.md** ([PR #2771](https://github.com/Hmbown/CodeWhale/pull/2771))
   - `/init` 指令不再生成静态模板，而是收集项目上下文并委托给 AI 动态生成更精准的 AGENTS.md。
8. **[可视化] 在侧边栏保留并展示智能体进度与分支状态** ([PR #2806](https://github.com/Hmbown/CodeWhale/pull/2806) / [PR #2804](https://github.com/Hmbown/CodeWhale/pull/2804))
   - 修复了侧边栏进度条截断的问题，并在子代理完成 Shell 调用时实时更新父工作区的 Git 分支状态。
9. **[扩展性] 低频原生工具默认延迟加载** ([PR #2102](https://github.com/Hmbown/CodeWhale/pull/2102))
   - 核心 Catalog 之外的工具不再默认加载，改由 ToolSearch 按需实例化，大幅优化启动性能。
10. **[安全管控] 受信任工作区的 MCP 配置合并** ([PR #2770](https://github.com/Hmbown/CodeWhale/pull/2770))
   - 允许受信任的项目工作区将本地 `.codewhale/mcp.json` 与全局 MCP 配置安全合并。

---

## 5. 功能需求趋势
从近期 Issue 和 PR 中，可以看出社区演进的核心趋势：
*   **多智能体与异构协同**：WhaleFlow 架构正成为核心，目标是实现 DeepSeek、GLM、OpenAI 等异构模型作为 Worker 的协同作业，并具备统一的聚合产出能力。
*   **IDE 生态集成融合**：从纯终端向编辑器内渗透，VS Code 扩展、ACP 协议接入等需求剧增，意在打造原生开发者体验。
*   **企业级安全与容灾**：开发者对自动化的要求从“能跑就行”升级为“安全可控”，API 降级重试、细粒度执行权限拦截、跨域工具调用过滤成为强需求。

---

## 6. 开发者关注点与痛点总结
综合来看，目前使用 CodeWhale 的开发者面临的最集中的痛点如下：

1. **Windows 兼容性与稳定性极其堪忧**：大量反馈集中在 Windows 环境下 TUI 无故冻结、多智能体并发导致 SSE 45秒超时中断、底层输入监听阻塞。
2. **环境依赖限制过死**：新版本的 GLIBC 2.39 依赖切断了大量 Ubuntu 22.04 及更老 Linux 服务器用户的使用路径，急需提供向下兼容的编译版本。
3. **长上下文/长任务的流式可靠性差**：在进行深度的 Bug 修复或长代码审查时，经常遭遇请求卡死、断线后无法 `--continue` 恢复的尴尬境地，极大影响工作流。

</details>