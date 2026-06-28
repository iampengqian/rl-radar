# AI CLI 工具社区动态日报 2026-06-29

> 生成时间: 2026-06-28 22:18 UTC | 覆盖工具: 9 个

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

以下是基于 2026 年 6 月 29 日各大主流 AI CLI 工具社区动态生成的横向对比分析报告。

### 1. 生态全景
当前 AI CLI 工具生态正处于从**“单一指令生成器”向“多代理、跨平台的企业级研发工作台”**演进的关键节点。各工具在追求更强代码生成能力的同时，全面转向底层系统重构（如 TUI 引擎、Rust 架构）以解决复杂的终端渲染问题。然而，随着 Agent 自主权的提升与上下文长度的爆发，**Token 隐形消耗（僵尸进程/扣费异常）、本地敏感数据防泄漏以及跨系统集成的兼容性**正成为阻碍生态健康发展的三大行业痛点。

### 2. 各工具活跃度对比
今日社区整体保持高活跃，OpenAI Codex 与 Gemini CLI 在 Issue 反馈上热度领跑，反映出其高频的迭代与试错；而 OpenCode、Qwen Code 与 DeepSeek TUI 在底层架构重构上投入了大量 PR。

| 工具名称 | 状态 | 新版本发布 | 热度焦点 (Issues 焦点) | 核心研发动态 (PR 焦点) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 活跃 | `rust-v0.143.0-alpha.29` | Token 扣费异常 (10-20倍)、本地 SQLite 损耗 SSD | MCP OAuth 鉴权体系完善、细粒度写入审批 |
| **Gemini CLI** | 高活跃 | `v0.51.0-nightly` | 子代理死锁与伪装成功、工具数>128 报错 | SSRF 绕过修复、MCP Schema 标准化 |
| **Claude Code** | 稳定 | 无 | 安全审查“一刀切”误杀合法逆向、配额偷跑 | 强策略安全门控、LLM 上下文交接导出 |
| **OpenCode** | 快速迭代 | 无 | 本地小模型工具死循环、复制粘贴失效 | V2 引擎重构、多 Provider 路由 (Cursor/LiteLLM) |
| **Qwen Code** | 快速迭代 | `v0.19.3` | 僵尸会话夜间狂烧 Token、中文输入法失效 | 上下文压缩阈值修复、ACP 会话断点续传 |
| **Pi (Pi-mono)** | 稳定 | 无 | 第三方模型缓存失效扣费、UI 强制滚动劫持 | Anthropic Token 鉴权、UI 布局重构 |
| **DeepSeek TUI** | 稳定 | 无 | 缓存命中率极低、Auto/Agent 模式状态机越权 | 底层状态机同步、发布安全底线拦截 |
| **GitHub Copilot CLI**| 平稳 | 无 | 多会话 UI 管理诉求、企业级网络代理穿透 | 暂无重大核心代码提交，以日常维护为主 |
| **Kimi Code CLI** | 平稳 | 无 | CLI 读取文件死循环、VS Code 内存泄漏 | 暂无重大核心代码提交 |

### 3. 共同关注的功能方向
通过对各社区 Issue 的聚类分析，开发者的核心诉求已高度趋同，主要集中在以下四个维度：

*   **精细化的成本与 Token 管控：**
    *   **爆发工具**：Codex, Qwen Code, Pi, DeepSeek TUI, Claude Code。
    *   **具体诉求**：修复 Agent 空转导致的“僵尸进程”烧钱问题；强烈要求在状态栏恢复 Token 使用量指示器；要求分离缓存与新鲜输入的 Token 统计；要求支持配置“廉价小模型”专门用于上下文摘要，以降低主模型成本。
*   **安全基线与敏感信息隔离：**
    *   **爆发工具**：Claude Code, Gemini CLI, Codex, DeepSeek TUI。
    *   **具体诉求**：防止 Agent 在执行自动化任务时读取或上传本地密钥（呼吁引入 `.codexignore` 等机制）；要求对 `git push -f`、`npm publish` 等破坏性或发布性操作建立人工确认的“兜底拦截网”；呼吁 Claude Code 放宽对合法逆向工程/网络安全审计的误杀拦截。
*   **多 Agent 协作与上下文连续性：**
    *   **爆发工具**：Gemini CLI, Claude Code, OpenCode, Qwen Code。
    *   **具体诉求**：解决子代理（Sub-agent）调度时的死锁或状态欺骗问题；支持会话断点续传（SSE Last-Event-ID）与跨会话上下文无缝交接；引入 AST（抽象语法树）感知解析器，精准提取代码片段以替代全局 Grep，降低上下文噪音。
*   **终端交互(TUI)鲁棒性与跨平台兼容性：**
    *   **爆发工具**：OpenCode, Qwen Code, Pi, Copilot CLI。
    *   **具体诉求**：解决 Windows 下中文输入法失效、路径解析错误及沙盒阻断问题；修复流式输出导致的屏幕强制滚动劫持及复制粘贴丢字符问题。

### 4. 差异化定位分析
尽管同属 AI CLI 赛道，但各工具在技术路线和目标受众上已显现出明显的护城河：

*   **闭源大厂官方出品（Claude / Codex / Gemini / Copilot）**：
    *   **侧重**：深度绑定自家最强模型（GPT-5.5 / Claude Opus），强调企业级合规与平台集成（如 VS Code 深度融合）。
    *   **差异**：Claude Code 偏向于**极客与重度 Agentic 工作流**，但面临激进安全策略的反噬；Codex 注重**商业化与企业鉴权**（重度投入 MCP OAuth），正经历计费引擎的信任危机；Gemini 极具野心地推进**多智能体并发**，但在稳定性上面临挑战。
*   **国产开源/自研力量（Qwen / DeepSeek / Kimi / OpenCode）**：
    *   **侧重**：极致的性价比、本地化体验优化（如国产模型/简繁体适配）以及对私有化部署的友好度。
    *   **差异**：Qwen Code 野心极大，致力于打造基于 `qwen serve` 的**大一统局域网多端架构**（串联 Chrome 扩展与移动端）；DeepSeek TUI 专注于 TUI 体验与底层状态机重构；OpenCode 则致力于成为**大模型聚合网关**，重点解决 GLM、Gemma 等异构模型的兼容问题。
*   **轻量级极客工具**：
    *   **侧重**：高度定制化。正经历底层终端 UI 渲染框架的痛苦重构，主要受众是偏好高度自主控制权的高级工程师。

### 5. 社区热度与成熟度
*   **领航者 (高热度 + 生态成熟)**：**OpenAI Codex** 与 **Claude Code**。尽管面临计费和安全拦截的争议，但它们吸引了全网最硬核的开发者讨论，MCP 插件生态与底层鉴权体系建设最完善。
*   **追赶者 (高迭代 + 聚焦架构)**：**Gemini CLI** 与 **OpenCode**。处于快速试错和底层重写阶段。Gemini 致力于攻克多智能体并发的技术深水区；OpenCode 则在 V2 架构上狂奔，试图通过聚合多方模型实现弯道超车。
*   **垂直深耕者 (平稳 + 修内功)**：**Qwen Code** 与 **DeepSeek TUI**。更懂国内开发者的痛点（如输入法适配、本地化部署），目前正集中精力解决长上下文引发的内存暴涨和 Token 消耗痛点。

### 6. 值得关注的趋势信号
对于技术决策者和一线开发者而言，当前社区动态释放了以下强烈的行业信号：

1.  **“信任危机”倒逼计费系统重构**：Agent 工作流导致的 Token 消耗呈现非线性增长（重试、死循环、缓存失效）。**参考价值**：开发者在选用工具时，必须考察其是否具备“硬性熔断机制”（如限制最大重试次数、空转超时切断）；企业级 IT 采购需关注 CLI 工具是否提供透明的 Token 遥测 API。
2.  **安全模型从“黑盒过滤”转向“工具级审批”**：以 Codex 的 `writes` 模式和 Gemini 的 Hook 欺骗修复为代表，行业正放弃不可控的云端 Prompt 黑盒拦截，转向本地执行层的细粒度权限控制。**参考价值**：未来集成了 MCP 工具的 Agent，必须要求默认具备“只读免审批、写入/删除需确认”的安全基线。
3.  **AST 解析与语义检索将取代正则匹配**：传统工具把整个代码库当做文本用 Grep 搜索的方式已达到效能天花板。**参考价值**：团队在构建内部 AI 研发效能工具时，应重点投入 AST 感知能力，让 Agent 按代码逻辑块读取，这不仅能节约数十倍的 Token，还能大幅提升复杂重构的成功率。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

以下是为您生成的《Claude Code Skills 社区热点洞察报告》（数据截至 2026-06-29）：

### 一、 热门 Skills 动态与核心修复（Top PRs）
当前最活跃的 PR 集中在**底座工具链修复、企业级系统集成与文档排版优化**上。

1. **[OPEN] run_eval.py 触发器与召回率彻底修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
   * **功能**：修复 `skill-creator` 中评估脚本 `run_eval.py` 报告 `recall=0%` 的致命问题，并修复 Windows 流读取问题。
   * **热点**：这是目前开发者最关注的基础设施 PR。由于该 Bug（#556）导致所有的 Skill 描述词优化循环都在“无效噪声”中运行，社区对此修复的呼声极高。
2. **[OPEN] 新增 document-typography 排版质量审查 Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
   * **功能**：自动修复 AI 生成文档中的常见排版问题（如孤行、寡行、编号错位）。
   * **热点**：填补了 Claude 生成高质量文档的“最后一公里”，属于用户体验感极强的实用 Skill。
3. **[OPEN] 新增 SAP-RPT-1-OSS 预测分析 Skill** ([PR #181](https://github.com/anthropics/skills/pull/181))
   * **功能**：接入 SAP 开源的表格基础大模型，进行业务数据预测。
   * **热点**：标志着 Claude Code Skills 正在向传统企业级 ERP 与商业智能（BI）领域深度渗透。
4. **[OPEN] skill-creator Windows 兼容性与子进程修复** ([PR #1050](https://github.com/anthropics/skills/pull/1050) / [PR #1099](https://github.com/anthropics/skills/pull/1099))
   * **功能**：修复 `skill-creator` 在 Windows 上因 `PATHEXT`、管道和 cp1252 编码导致的脚本全面崩溃问题。
   * **热点**：Windows 开发者群体的刚需，不合并该 PR 将导致大量 Windows 用户无法使用自动描述优化功能。
5. **[OPEN] 新增 shodh-memory 持久化上下文 Skill** ([PR #154](https://github.com/anthropics/skills/pull/154))
   * **功能**：为 AI Agent 提供跨对话的持久化记忆系统。
   * **热点**：直击当前大模型“金鱼记忆”痛点，是构建复杂长周期 Autonomy Agent 的核心组件。
6. **[OPEN] 修复 PDF Skill 文件大小写引用错误** ([PR #538](https://github.com/anthropics/skills/pull/538))
   * **功能**：修复 `SKILL.md` 中对 `REFERENCE.md` 等文件的大小写引用错误。
   * **热点**：该 Bug 导致在大小写敏感的系统（如 Linux）上 PDF Skill 直接失效，属于高优 P0 级修复。

---

### 二、 社区需求趋势（基于 Issues 洞察）
从社区反馈来看，开发者对 Skills 生态提出了更高阶的**安全性、可协作性与无状态缺陷修复**需求：

1. **亟需构建安全与信任边界**（[Issue #492](https://github.com/anthropics/skills/issues/492)）
   * 社区对“第三方 Skill 伪装成 `anthropic/` 官方命名空间”感到担忧。强烈要求引入签名验证、权限沙箱或明确的防滥用警告机制。
2. **企业级组织内共享与流转**（[Issue #228](https://github.com/anthropics/skills/issues/228)）
   * 用户苦于目前只能通过 Slack/邮件人工发送 `.skill` 文件。强烈呼吁在 Claude.ai 或 Claude Code 中实现组织级的“内部 Skill 市场或共享库”。
3. **Agent 自身状态与上下文压缩**（[Issue #1329](https://github.com/anthropics/skills/issues/1329)）
   * 随着任务变复杂，Agent 自身产生的冗长记忆会撑爆 Context Window。社区呼吁引入类似 `compact-memory` 的 Skill，使用符号标记法压缩 Agent 状态。
4. **与底层基础设施（AWS Bedrock / MCP）的深度集成**（[Issue #29](https://github.com/anthropics/skills/issues/29) / [Issue #16](https://github.com/anthropics/skills/issues/16)）
   * 开发者希望 Skills 能够无缝跑在 AWS Bedrock 等其他云厂商的基座上，并期望将 Skills 的能力标准化暴露为 MCP (Model Context Protocol) 接口。

---

### 三、 高潜力待合并 Skills
以下 PR 解决了系统级痛点且已有大量独立复现者验证，极可能在近期被官方合并落地：

* **[PR #541](https://github.com/anthropics/skills/pull/541) 修复 DOCX 修订追踪 ID 冲突**
  * **落地理由**：修复了因硬编码低 ID 导致 OOXML 中书签、修订追踪 ID 冲突，进而引发 Word 文档损坏的严重 Bug。属于数据安全级别的关键修复。
* **[PR #539](https://github.com/anthropics/skills/pull/539) / [PR #361](https://github.com/anthropics/skills/pull/361) 修复 YAML 特殊字符静默解析失败**
  * **落地理由**：当 Skill 描述词未加引号且包含 `:` 等特殊字符时，会导致底层 YAML 解析截断。该 PR 补全了前置校验脚本，极大提升了开发者编写 Skill 时的调试体验。
* **[PR #509](https://github.com/anthropics/skills/pull/509) 新增 CONTRIBUTING.md 指南**
  * **落地理由**：目前仓库的社区健康度评分仅为 25%。补充贡献指南是规范社区 PR 质量、减少无效 Issue 的第一步，官方大概率会采纳。

---

### 四、 Skills 生态洞察（一句话总结）
当前社区最集中的诉求已从“功能实现”转向**“工程化基建与安全可信”**：开发者急迫需要修复以 `run_eval.py` 为代表的基础工具链缺陷（尤其在 Windows 兼容性上），并强烈呼吁建立组织级共享机制与命名空间安全边界，以推动 Claude Code Skills 在企业级生产环境中的安全落地。

---

这份 2026-06-29 的 Claude Code 社区动态日报已为您整理完毕。

# 📰 Claude Code 社区动态日报 (2026-06-29)

## 1. 今日速览
今日 Claude Code 社区呈现两极分化：一方面，**安全过滤机制的“误杀”问题大爆发**，大量从事逆向工程和底层网络通信开发的用户反馈被错误拦截；另一方面，**计费与配额异常**成为另一大痛点，API 报错导致隐形扣费引发热议。生态建设上，社区开发者积极提交 MCP 插件与上下文转移相关的 PR，展现出在 Agent 工作流编排上的强烈需求。

## 2. 版本发布
ℹ️ **过去 24 小时内无新版发布。**

---

## 3. 社区热点 Issues
以下为本日最值得关注的 10 个 Issue，主要集中在安全拦截误报、计费异常以及系统兼容性上：

*   **[#69428] 周使用配额在没有使用的情况下意外耗尽** (`area:cost`)
    *   **关注点**：用户反馈在未主动调用 API 的时间段内，剩余 25% 的周配额被莫名清空。计费系统的底层追踪机制可能存在漏洞。([链接](https://github.com/anthropics/claude-code/issues/69428))
*   **[#72023] API 报错依然导致配额/用量扣除** (`area:cost, area:api`) - *已关闭*
    *   **关注点**：用户抱怨大型会话中服务端 API 频繁报错，而这些无效的请求居然还在消耗他们的使用配额，引发成本信任危机。([链接](https://github.com/anthropics/claude-code/issues/72023))
*   **[#72132] Cloud IAM 审计工作被误标记为网络安全威胁** (`area:security`)
    *   **关注点**：大量同类 Issue（如 [#72134](https://github.com/anthropics/claude-code/issues/72134), [#72135](https://github.com/anthropics/claude-code/issues/72135) 等）集中爆发，开发者反馈在进行合法的固件降级、逆向工程或无线 ADB 调试时，被服务端的安全过滤机制阻断。安全边界判定过于严苛。([链接](https://github.com/anthropics/claude-code/issues/72132))
*   **[#72148] 阻止消费者级无人机固件回滚** (`area:security`)
    *   **关注点**：与上述类似，针对特定消费级硬件（无人机）的安全审查误报，导致正常开发流程停滞。([链接](https://github.com/anthropics/claude-code/issues/72148))
*   **[#72125] `/rewind` 命令覆盖 settings.json 环境变量** (`area:core`)
    *   **关注点**：Windows 平台上的严重 Bug。使用时间回溯功能会直接覆盖全局配置文件，导致第三方模型配置（如 cc-switch 设置的 Token 和 Base URL）丢失。([链接](https://github.com/anthropics/claude-code/issues/72125))
*   **[#72129] WSL2 下 `/ide` 拒绝有效的 JetBrains 锁文件** (`area:ide`)
    *   **关注点**：跨系统环境集成痛点。由于 WSL2 的 `ps -p` 无法看到 Windows PID，导致 CLI 错误地认为运行中的 IDE 已孤立，拒绝建立连接。([链接](https://github.com/anthropics/claude-code/issues/72129))
*   **[#39636] Cowork VM 在骁龙 X Plus (ARM64) 上无法启动** (`platform:windows`)
    *   **关注点**：随着 ARM 架构 PC 普及，虚拟机协作功能在 Snapdragon X Plus 上遭遇内核启动超时，严重影响相关设备开发者的使用。([链接](https://github.com/anthropics/claude-code/issues/39636))
*   **[#47509] Team 计划需要提供 Max 20x 等效层级** (`enhancement`)
    *   **关注点**：重度使用者（CTO、技术负责人）呼吁团队版增加更高算力的订阅档位，目前的 6.25x Pro 用量已无法满足高强度的 Agentic 编码工作流。([链接](https://github.com/anthropics/claude-code/issues/47509))
*   **[#58429] 语音朗读 Claude 回复的无障碍功能需求** (`area:a11y`)
    *   **关注点**：社区呼吁桌面端原生支持将代码或文本回复语音朗读，以照顾视障开发者及解放双手的开发场景。([链接](https://github.com/anthropics/claude-code/issues/58429))
*   **[#72156] `/feedback` 提交前应支持 PII/敏感信息过滤** (`area:security`)
    *   **关注点**：隐私保护新需求。用户希望在提交诊断/反馈日志给 Anthropic 之前，能自动审查并抹除个人身份信息或密钥。([链接](https://github.com/anthropics/claude-code/issues/72156))

---

## 4. 重要 PR 进展
今日共有 5 个关键 PR 更新，重点聚焦于 **插件生态安全与 LLM 上下文流转**：

*   **[#72014] 新增 protect-mcp 插件：失败即关闭的 Cedar 策略门控 + 签名回执**
    *   **点评**：极为重要的安全增强插件。在执行工具调用前进行强策略拦截，并提供离线可验证的签名记录。([链接](https://github.com/anthropics/claude-code/pull/72014))
*   **[#72037] 新增 handover 插件：LLM 到 LLM 交接的上下文导出**
    *   **点评**：解决 Agent 孤岛问题。允许将当前会话上下文导出为结构化 Markdown，方便迁移至其他大模型或新会话，提升多步开发连续性。([链接](https://github.com/anthropics/claude-code/pull/72037))
*   **[#62315] 修复 pre/post hooks 中的 hookify 事件过滤逻辑** - *已关闭*
    *   **点评**：针对自动化钩子机制的事件分发 Bug 修复，有助于稳定 CI/CD 场景下的集成表现。([链接](https://github.com/anthropics/claude-code/pull/62315))
*   **[#72000] 文档更新：更新插件安装指南至推荐的安装器方式**
    *   **点评**：降低新用户上手门槛，规范插件分发流程。([链接](https://github.com/anthropics/claude-code/pull/72000))
*   **[#41447] 功能提案：开源 Claude Code** - *讨论中*
    *   **点评**：老生常谈但呼声极高的 PR，再次引发社区对核心引擎开源的期待。([链接](https://github.com/anthropics/claude-code/pull/41447))

*(注：今日 PR 更新共 5 条，已全部列出。)*

---

## 5. 功能需求趋势
通过对近期 Issues 的聚类分析，当前社区需求呈现以下三大趋势：

1.  **安全边界的精细化控制**
    开发者对底层操作（如：逆向工程、固件降级、网络渗透测试审计）被一刀切拦截感到极其不满。社区强烈要求针对合法的 `reverse-engineering` 和 `cyber` 领域工作放宽或提供可配置的安全审查阈值。
2.  **Agent 工作流与上下文连续性**
    开发者不再满足于单次会话，对于上下文导出转移（如 PR [#72037]）、Workstreams 多分支并发工作流的 UI/UX 优化（如 Issue [#72150]）需求显著上升。
3.  **重度使用的成本可预测性**
    现有的用量限制计算被指不够透明，尤其是服务端 API 报错（500/503 等）依然导致额度扣减。针对高级开发者的“无限量”或 20x 倍率团队版需求依旧强劲。

---

## 6. 开发者关注点 (痛点总结)

*   **API 额度“偷跑”与扣费争议**：会话中断、API 报错不仅打断进度，还白费算力配额，开发者对这种“双重损失”的容忍度已达临界点。
*   **WSL2/Windows 跨平台兼容性恶劣**：Windows 下的 `/rewind` 覆盖配置、WSL2 的 IDE 进程识别失败等 Bug 暴露出其在跨系统底层进程交互上存在缺陷。
*   **逆向工程被污名化拦截**：白帽安全研究员、底层驱动开发者、ROM 刷机爱好者正面临严重的工作阻碍，Claude 的网络安全过滤算法判定逻辑亟待收敛。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 (2026-06-29)**

### 1. 今日速览
今日 Codex 团队发布了全新的 `rust-v0.143.0-alpha.29` 版本。社区爆发了针对 GPT-5.5 模型配额计算异常的集中反馈，大量用户报告 5 小时限额在极短时间内被耗尽。此外，开发团队在今日合并了多项重要 PR，持续推进 TUI 交互优化、MCP 插件 OAuth 认证机制的完善以及 Desktop 端核心权限控制功能的升级。

### 2. 版本发布
*   **rust-v0.143.0-alpha.29** [Release 链接](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)
    *   *简评*：常规的底层依赖与 Alpha 迭代，目前主要跟进前几个版本中遗留的本地日志性能优化问题。

### 3. 社区热点 Issues
今日社区最活跃的讨论集中在计费异常与端侧应用的资源消耗上，以下 10 个 Issue 值得重点关注：

1.  **[Plus 计划] GPT-5.5 Token 限额异常消耗（10-20倍）** [#28879](https://github.com/openai/codex/issues/28879)
    *   *关注度*：👍 337 | 💬 192
    *   *简评*：今日最热问题。用户反馈自 6 月 16 日起，使用 `gpt-5.5` 时的 Token 消耗暴增 10-20 倍，原本 20+ 次对话的预算在 2-3 次后就耗尽。这严重影响了 Plus 用户的日常开发，急需官方介入排查。
2.  **[CLI 性能] SQLite 反馈日志可每年写入 ~640 TB，疯狂消耗 SSD 寿命** [#28224](https://github.com/openai/codex/issues/28224)
    *   *关注度*：👍 403 | 💬 97
    *   *简评*：高赞 Bug。开发者指出 Codex CLI 的高频日志写入会造成固态硬盘过度磨损。好消息是目前已有 3 个修复 PR 被合并进 0.142.0，预计可减少 85% 的日志。
3.  **[安全增强] 请求增加对敏感文件的排除机制** [#2847](https://github.com/openai/codex/issues/2847)
    *   *关注度*：👍 446 | 💬 86
    *   *简评*：社区呼声最高的 Feature Request。用户强烈要求引入类似 `.codexignore`（全局或仓库级别）的机制，防止 Agent 读取或将敏感文件（如密钥）发送给大模型。
4.  **[Desktop UI] 客户端不再显示上下文/Token 使用量指示器** [#23794](https://github.com/openai/codex/issues/23794)
    *   *关注度*：👍 168 | 💬 171
    *   *简评*：Desktop 端的严重体验降级。更新后用户无法直观看到额度消耗，在当前 Token 限额异常敏感的时期，该 UI 的缺失引发了大量不满。
5.  **[Pro 计划] 5小时配额重置后被异常极速烧毁** [#30002](https://github.com/openai/codex/issues/30002)
    *   *关注度*：💬 28
    *   *简评*：与 #28879 呼应的计费追踪 Bug。Pro 用户反馈服务端配额计算在重置后存在严重的高估问题，135 万 Token 就耗尽了原本可支撑 1.56 亿 Token 的 5 小时限额。
6.  **[Desktop UI] macOS 端缺少可见的 Token 使用指示器（与 #23794 相关）** [#29532](https://github.com/openai/codex/issues/29532)
    *   *关注度*：💬 23
    *   *简评*：用户升级到 `0.142.0` 后，macOS 端的 SQLite 日志高频写入问题依然存在，被认为是“只修了一半”。
7.  **[Desktop 性能] 未受限的活动线程元数据导致 CPU 占用过高** [#24510](https://github.com/openai/codex/issues/24510)
    *   *关注度*：💬 24
    *   *简评*：当本地历史记录过大时，Codex Desktop 的状态管理会导致 CPU/GPU 持续高负载，影响编码体验。
8.  **[Windows 平台] 沙盒启动报错导致 `apply_patch` 等工具失效** [#29072](https://github.com/openai/codex/issues/29072)
    *   *关注度*：💬 25
    *   *简评*：Windows 端打包路径引发的核心阻断 Bug，导致 Agent 无法成功执行任何代码修改。
9.  **[模型行为] GPT-5.5 推理 Token 在特定数值处出现聚类异常** [#30364](https://github.com/openai/codex/issues/30364)
    *   *关注度*：💬 12
    *   *简评*：硬核开发者通过分析元数据，发现 GPT-5.5 的 `reasoning_output_tokens` 异常集中在 516/1034/1552 等固定边界，怀疑是模型层面的截断或限流逻辑导致复杂任务推理能力下降。
10. **[Desktop 行为] 简单 "ping" 消息扣除 13% 的 5h 限额** [#30357](https://github.com/openai/codex/issues/30357)
    *   *关注度*：💬 5
    *   *简评*：直观反映了 Token 扣费系统的错误。执行一条极简指令不应消耗如此大的配额比重。

### 4. 重要 PR 进展
Codex 团队近期在 MCP 协议、权限控制与 CLI 界面修复上投入了大量精力：

1.  **新增 `writes` 应用批准模式** [#30482](https://github.com/openai/codex/pull/30482)
    *   为工具调用提供了更细粒度的权限控制：标记为 `readOnlyHint = true` 的工具免审批，其他所有写入操作（包括非破坏性写入）都会触发用户确认。大幅提升端侧执行的安全性。
2.  **完善 MCP OAuth 认证体系（系列 PR）** [#30292](https://github.com/openai/codex/pull/30292), [#30293](https://github.com/openai/codex/pull/30293), [#30294](https://github.com/openai/codex/pull/30294), [#30295](https://github.com/openai/codex/pull/30295), [#30296](https://github.com/openai/codex/pull/30296)
    *   一组完整的 Stack，用于序列化共享 MCP OAuth 凭据存储、路由 OAuth 恢复机制及上报凭据漂移。这标志着 Codex 在企业级 MCP 插件集成上的鉴权能力趋于稳定。
3.  **将 `max` 作为一等推理努力支持** [#30467](https://github.com/openai/codex/pull/30467)
    *   适配 Bedrock GPT-5.6 目录，将 `max` 从不透明的自定义参数提升为官方已知推理强度标签，统一了底层解析与前端 UI 呈现。
4.  **基于模型元数据驱动技能使用指令** [#29740](https://github.com/openai/codex/pull/29740)
    *   移除了硬编码的旧版模型匹配逻辑，改为通过模型元数据字段（默认为 false，当前已为 `gpt-5.5` 开启）来控制技能渲染。
5.  **暴露配额重置到期详情** [#30395](https://github.com/openai/codex/pull/30395)
    *   通过 `account/rateLimits/read` 暴露 Banked 配额的过期时间。此 PR 如果合并，配合客户端 UI 将有效缓解用户对额度耗尽的焦虑。
6.  **修复 TUI 重复 Unicode 键盘输入问题** [#30480](https://github.com/openai/codex/pull/30480)
    *   解决了在 Windows Terminal 和 Warp 等终端中出现的非 ASCII 字符重复输入 Bug。
7.  **TUI 界面渲染与焦点修复集** [#30479](https://github.com/openai/codex/pull/30479), [#30478](https://github.com/openai/codex/pull/30478), [#30463](https://github.com/openai/codex/pull/30463)
    *   修复了提示符增长时历史记录滚动错位、残留过期更新弹窗以及提及符号间自动补全错乱等界面体验问题。
8.  **缓存远程 Bash 环境变量** [#30252](https://github.com/openai/codex/pull/30252)
    *   在远程非 TTY Bash 命令执行中复用环境快照，有效减少远程调用开销，提升 CLI 远程执行性能。
9.  **多 Agent v2：从 `list_agents` 移除不可用消息字段** [#30217](https://github.com/openai/codex/pull/30217)
    *   由于桥接器无法解密任务消息，移除不可用的 `last_task_message` 以避免多 Agent 架构中的脏数据干扰。
10. **为 MCP 添加 HTTP Headers 辅助支持** [#25173](https://github.com/openai/codex/pull/25173)
    *   来自外部开发者的贡献，通过引入 HTTP Headers 支持，增强了自定义 MCP 服务器的鉴权与连接能力。

### 5. 功能需求趋势
通过对近期 Issue 与 PR 的综合分析，社区需求明显聚焦于以下几个方向：
*   **计费透明度与异常排查**：GPT-5.5 限额的快速消耗使得“恢复客户端 Token 使用量 UI 显示”以及“提供更细颗粒度的扣费日志”成为最迫切的需求。
*   **安全与隐私隔离**：随着 Agent 获得越来越多的自动执行权限，开发者强烈要求通过 `.codexignore` 或类似手段保护本地敏感文件，同时官方今日在 PR 中推进的 `writes` 审批模式也是顺应此趋势。
*   **Windows 平台兼容性**：Windows 端长期受到沙盒路径启动失败（`apply_patch` 失效）、UI 过热、PowerShell 哈希字面量解析错误等特异性 Bug 困扰，亟需一次专项治理。
*   **MCP 协议深化**：远程插件、多客户端 OAuth 凭据持久化、权限恢复等企业级特性的支持正在成为 Codex 扩展生态的重中之重。

### 6. 开发者关注点（痛点总结）
1.  **额度体系信心危机**：由于当前计费系统似乎出现了严重的算力折算错误，大量开发者面临“发一句话就触发限流”的窘境，直接阻断了开发工作。
2.  **本地硬件损耗焦虑**：高频 SQLite 日志刷新不仅拖慢了应用响应（尤其是 Windows 与 macOS Desktop 版本），还实打实地在消耗开发者的 SSD 写入寿命（TBW），尽管官方宣称已修复 85%，但社区仍有未彻底解决的报告。
3.  **CLI 交互鲁棒性不足**：终端输入丢失、快捷键冲突以及 TUI 渲染不同步等问题，依然影响着重度依赖 CLI 工作流的核心开发者群体。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-29)

## 1. 今日速览
昨日 Gemini CLI 发布了全新的 `v0.51.0-nightly` 版本，重点强化了敏感路径的安全拦截机制及 VS Code 的接管控制。从社区活跃情况来看，**多智能体调度与稳定性**以及 **MCP（Model Context Protocol）生态集成**成为绝对焦点，多位开发者反馈了子代理权限失控、死锁以及 MCP 工具兼容性相关的问题，核心团队正通过高频的 PR 合并（如 OAuth 刷新、Schema 标准化）快速响应。

## 2. 版本发布
*   **v0.51.0-nightly.20260628.gae0a3aa7b** ([查看详情](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260628.gae0a3aa7b))
    *   **核心更新**: 引入了针对大小写不敏感的敏感路径黑名单机制，并强化了 VS Code 的 Human-in-the-loop (HITL) 拦截能力 (`fix(security): enforce case-insensitive sensitive path blocklist...`)。这表明官方在防止 AI 误修改系统级核心文件方面进一步收紧了安全防线。

## 3. 社区热点 Issues (Top 10)
以下为本期最值得关注的开发者反馈与缺陷：

1.  **[P1] 通用代理挂起无法响应** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
    *   **关注点**: 当 CLI 呼叫通用子代理时直接死锁，简单的文件夹创建也会永久挂起。这是影响基础体验的严重阻断性 Bug。
2.  **[P1] 命令执行后 CLI 卡死在 "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
    *   **关注点**: 执行简单的 Shell 命令后，CLI 错误地认为有后续交互输入而无限等待，极大影响了自动化工作流。
3.  **[P1] 子代理耗尽步数后伪装“成功”** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
    *   **关注点**: `codebase_investigator` 在触发 `MAX_TURNS` 限制被强制中断后，依然向主代理返回 `status: "success"`，导致严重的上下文欺骗。
4.  **[P2] Gemini 未充分利用自定义技能与子代理** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
    *   **关注点**: 模型缺乏主动调用定义好的 Skills (如 git/gradle) 的意识，只有在用户显式提醒时才会使用，说明路由调度逻辑有待优化。
5.  **[P2] 引入 AST 感知文件读取与映射评估** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   **关注点**: 官方发起的 Epic 级讨论，评估是否引入 AST 解析工具。AST 工具能大幅减少 Token 噪音并精准定位代码逻辑，对代码库重构意义巨大。
6.  **[P2] Auto Memory 存在敏感信息泄露与重试风暴隐患** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
    *   **关注点**: 后台记忆提取进程在处理低价值会话时会无限重试，且脱敏逻辑滞后（先读取后脱敏），存在将本地密钥发送给模型的风险。
7.  **[P2] 阻止代理执行破坏性操作** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
    *   **关注点**: 模型在管理 Git 分支或 DB 时，偶尔会使用 `git reset --force` 等高危命令。社区呼吁建立破坏性操作的缓冲拦截机制。
8.  **[P2] Gemini 滥用 Bash 导致文件污染** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
    *   **关注点**: 模型偏好使用 Bash 执行编辑，导致在各个目录散落大量临时 `.sh` 脚本，增加了清理成本。
9.  **[P2] 软链接子代理配置无法被识别** ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))
    *   **关注点**: `~/.gemini/agents/` 下的配置文件如果是软链接则会被忽略，阻碍了开发者使用 dotfiles 统一管理配置的需求。
10. **[P2] CLI 在遇到 >128 个工具时报 400 错误** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
    *   **关注点**: 随着接入的 MCP 工具增多，上下文工具数量超出模型限制。呼吁实现更智能的工具动态裁剪与加载机制。

## 4. 重要 PR 进展 (Top 10)
近期开发团队合入及推进的关键代码贡献：

1.  **PR #28182: 自动化夜间版本号升级** ([链接](https://github.com/google-gemini/gemini-cli/pull/28182))
    *   机器人自动发起的版本号提升，标志着 CI/CD 流程的按期推进。
2.  **PR #27744: 修复基于主机名的 SSRF 绕过漏洞** ([链接](https://github.com/google-gemini/gemini-cli/pull/27744))
    *   **安全修复**: 防止攻击者使用通配符 DNS (如 `127.0.0.1.nip.io`) 绕过内网 IP 检查，核心在于先解析 DNS 再进行 SSRF 防御判断。
3.  **PR #27878: 嗅探并修复 MCP 图像 MIME 类型** ([链接](https://github.com/google-gemini/gemini-cli/pull/27878))
    *   **MCP 修复**: 解决 Figma MCP 返回 WebP 图像被误判为 PNG 导致 API 返回 400 错误的问题，引入了本地文件签名嗅探机制。
4.  **PR #27889: 修复 MCP OAuth 自动发现后的刷新逻辑** ([链接](https://github.com/google-gemini/gemini-cli/pull/27889))
    *   **MCP 修复**: 解决了自动发现的 MCP 服务在无静态配置时，OAuth Token 无法使用持久化的 Client ID 进行刷新的鉴权阻断问题。
5.  **PR #27888: 标准化 MCP 工具 Schema 结构** ([链接](https://github.com/google-gemini/gemini-cli/pull/27888))
    *   **兼容性**: 针对严苛的 JSON Schema 校验器，自动为缺乏根 `type: "object"` 的 MCP 输入添加该属性，提升 Vertex API 等下游接口的兼容性。
6.  **PR #27886: 会话上下文严格遵循忽略规则** ([链接](https://github.com/google-gemini/gemini-cli/pull/27886))
    *   **安全过滤**: 修复了 `<session_context>` 构建目录树时未检查 `.gitignore` 和 `.geminiignore` 的漏洞，防止隐私文件进入上下文。
7.  **PR #27915: 修复工作区信任对话框的钩子欺骗** ([链接](https://github.com/google-gemini/gemini-cli/pull/27915))
    *   **安全修复**: 解决信任对话框向用户展示的 Hook 行为与实际执行行为相反的重大逻辑错误，防止恶意项目一键 Trust 后静默执行 Shell。
8.  **PR #28183: 保留 VS Code 扩展的终端焦点** ([链接](https://github.com/google-gemini/gemini-cli/pull/28183))
    *   **IDE 体验**: 解决在 VS Code 中批准文件编辑预览后，焦点从终端转移的问题，免去用户频繁鼠标点击的烦恼。
9.  **PR #24179: 支持 "forever" 会话保留期** ([链接](https://github.com/google-gemini/gemini-cli/pull/24179))
    *   **易用性**: 解决了会话清理抛出 "Invalid retention period format: forever" 报错的问题，允许开发者无限期保留本地历史。
10. **PR #27754: 修复 A2A Server 501 响应崩溃** ([链接](https://github.com/google-gemini/gemini-cli/pull/27754))
    *   **稳定性**: 修复 Agent-to-Agent 服务器在发送 501 响应后缺少 `return` 导致的 `ERR_HTTP_HEADERS_SENT` 崩溃问题。

## 5. 功能需求趋势
通过对近期 Issue 的聚类分析，社区的核心诉求正高度聚焦于以下几个方向：
*   **多智能体治理与恢复**: 社区对子代理的失控抱怨增加（如死锁、伪装成功、权限越界），未来急需一套基于 AST 或意图路由的强管控沙箱环境 (Issue #19873)。
*   **MCP 协议健壮性**: 随着 Figma、自定义 Server 等生态接入，MCP 工具数量爆炸与 Schema 不规范成为痛点，亟需智能化的工具集裁剪和统一的输入校验层。
*   **敏感操作防御网**: 从 Git 强推到 Auto Memory 读取隐私，开发者强烈要求提升本地执行的安全基线（包括更智能的脱敏和破坏性命令阻断）。
*   **上下文感知工具链**: 传统的正则/Grep 已无法满足复杂工程需求，引入 AST 感知解析器来精准提取代码片段将成为下一阶段的演进重点。

## 6. 开发者关注点 (痛点总结)
*   **稳定性存在断崖**: v0.3x 到 v0.5x 的升级过程中，部分自动化流程（特别是涉及子代理和 Bash 交互的部分）出现了回退，表现为进程假死和等待状态锁死。
*   **终端集成体验损耗**: 在外部编辑器或 IDE (如 VS Code) 协同工作时，渲染冲突（屏幕闪烁、焦点抢占、退出时 Buffer 损坏）依然是高频痛点。
*   **Token 预算控制**: 当工具数量超过 128 个时引发的 400 错误，暴露出当前架构在面对庞大工具生态时，缺乏有效的上下文裁剪策略，直接增加了开发者的调用成本。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

以下是为您生成的 2026-06-29 GitHub Copilot CLI 社区动态日报。

---

# 📰 GitHub Copilot CLI 社区动态日报 (2026-06-29)

## 1. 今日速览
今日 GitHub Copilot CLI 仓库无新版本发布，社区活跃度主要集中在**多会话管理体验（UI/UX）**的优化诉求上，多名开发者集中提交了关于会话标签、状态指示灯及文件树浏览的功能建议。同时，底层网络代理兼容性（企业代理报错）及部分边缘端环境（如无头模式、双终端环境）的稳定性问题成为今日开发者讨论与排查的焦点。

## 2. 版本发布
* **无**（过去 24 小时内无新版本发布）。

## 3. 社区热点 Issues
今日共有 7 条 Issue 被更新，以下为最值得关注的议题：

* ** [#2978] [OPEN] 企业网络下 Headless 模式代理穿透失败**
  * **链接:** [Issue #2978](https://github.com/github/copilot-cli/issues/2978)
  * **简评:** **高频痛点**。开发者在企业级 HTTP 代理下使用 SDK v0.3.0 的 headless 模式时，`session.create` 报 "fetch failed"。尽管子进程接收到了代理环境变量且底层 `undici` 可正常通信，但 CLI 依然被阻断。此问题直接影响企业用户的正常集成。
* ** [#3970] [OPEN] 支持为会话添加自定义标签**
  * **链接:** [Issue #3970](https://github.com/github/copilot-cli/issues/3970)
  * **简评:** **核心功能需求**。随着多会话并行成为常态，开发者迫切需要一种轻量级的方式（标签）来对跨功能、跨仓库的会话进行分类和过滤，反映出当前会话管理深度的不足。
* ** [#3969] [OPEN] 会话列表增加计划（Plan）状态指示符**
  * **链接:** [Issue #3969](https://github.com/github/copilot-cli/issues/3969)
  * **简评:** **UI/UX 优化**。开发者希望在不打开会话的情况下，通过徽章或符号快速瞥见每个会话当前的计划执行进度。这是多任务流工作场景下的典型痛点。
* ** [#3964] [CLOSED] v1.0.65 版本软换行复制依然丢失空格**
  * **链接:** [Issue #3964](https://github.com/github/copilot-cli/issues/3964)
  * **简评:** **回归/顽固 Bug**。在终端中复制软换行的输出时，换行边界处的空格会丢失导致单词粘连。这是此前 #3666 问题（宣称在 v1.0.49 修复）的残留或回归，影响代码复制体验。
* ** [#3971] [OPEN] 请求为 Repository-backed 会话提供完整的文件树浏览器**
  * **链接:** [Issue #3971](https://github.com/github/copilot-cli/issues/3971)
  * **简评:** **一致性体验需求**。目前本地文件夹会话拥有完整的文件树侧边栏，但基于仓库的会话却只有 Git Changes 视图。开发者希望两者体验对齐，便于直接导航和打开文件。
* ** [#3967] [OPEN] 双终端环境下运行导致 Copilot “消失”及报错未安装**
  * **链接:** [Issue #3967](https://github.com/github/copilot-cli/issues/3967)
  * **简评:** **环境稳定性**。在 Ubuntu 24.04 (Guake/Terminal) 中同时操作两个终端时，Copilot CLI 突然失效并提示未安装。可能与环境变量、路径溢出或多进程资源抢占有关。
* ** [#3815] [OPEN] Windows 平台调试日志路径缺少反斜杠 `\`**
  * **链接:** [Issue #3815](https://github.com/github/copilot-cli/issues/3815)
  * **简评:** **跨平台细节**。Windows 系统下输出的调试日志路径格式错误，用户若直接复制粘贴该路径到资源管理器会报错，虽是小问题但影响排障效率。

## 4. 重要 PR 进展
过去 24 小时内有 1 个 PR 更新：

* ** [#3968] [CLOSED] 重命名 changelog.md 文件**
  * **链接:** [PR #3968](https://github.com/github/copilot-cli/pull/3968)
  * **简评:** 这是一个由外部贡献者提交的琐碎/无意义 PR（将文件重命名为同名），已被官方维护者迅速关闭，属于正常的社区维护操作。

*(注：今日无合并或开放的核心功能性 PR。)*

## 5. 功能需求趋势
从近期的 Issues 中，可以明显提炼出以下两大社区功能演进趋势：

1. **多工作流与会话管理:**
   开发者不再满足于单一命令行交互，而是将 Copilot CLI 作为多任务并行处理的中枢。**自定义标签过滤（#3970）**、**可视化状态指示（#3969）** 的呼声极高，预示着 CLI 亟需引入更强大的 Dashboard 或 TUI（终端用户界面）管理面板。
2. **IDE/编辑器级的一致体验下沉:**
   开发者希望在终端中也获得媲美 IDE 的体验，例如在 Repo 会话中提供**完整的文件树浏览（#3971）**。CLI 正在从单纯的“命令生成器”向“轻量级终端 IDE 助手”演进。

## 6. 开发者关注点
综合今日反馈，技术开发者目前的核心痛点集中在以下三个方面：

* **企业级网络与底层环境兼容性:** 代理环境下的网络请求失败（#2978）依然是阻碍企业采用的关键门槛；底层 SDK 与 CLI 进程间的代理配置同步机制需要优化。
* **终端交互细节与剪贴板兼容:** 终端软换行复制丢字符（#3964）反映出 CLI 在处理不同终端模拟器（TTY）渲染和系统剪贴板交互时仍存在边界处理 Bug。
* **跨平台路径与状态同步:** Windows 路径格式错误（#3815）和 Linux 多终端下的异常卸载/丢失（#3967），暴露出工具在处理多操作系统特定环境变量及状态文件持久化时还需要增加测试覆盖。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-29)

## 1. 今日速览
过去 24 小时内，Kimi Code CLI 社区整体节奏平稳，官方未发布新版本或合并新的代码提交。社区活跃度主要集中在历史遗留 Bug 的讨论与复现上，特别是针对 CLI 工具的“死循环读取”以及 VS Code 插件的高内存占用问题引发了开发者的持续关注。

## 2. 版本发布
* **本日无新版本发布**。

## 3. 社区热点 Issues
今日共有 2 条高活跃度的 Issue 更新，均集中在执行效率与资源占用的核心痛点上：

*   **[#640] [bug] Kimi CLI stuck in reading one file again and again and stuck in a loop**
    *   **链接:** [MoonshotAI/kimi-cli Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)
    *   **动态解析:** 该问题自 1 月份提出后持续有用户跟进。开发者反馈在 Linux 环境下结合 `mimo-v2-flash` 模型使用时，CLI 会陷入重复读取单一文件的死循环。由于该问题直接导致开发工作流中断，且至今未能彻底解决，社区讨论热度极高（15 条评论），是当前 CLI 稳定性方面最值得关注的开放性 Bug。
*   **[#1592] [bug] kimi code vscode 插件很耗内存**
    *   **链接:** [MoonshotAI/kimi-cli Issue #1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)
    *   **动态解析:** 开发者反馈在 macOS (Darwin arm64) 环境下，VS Code 插件在执行长耗时、长上下文的任务时会出现严重的内存泄漏/飙升问题。这反映了 Kimi Code 在处理重度 IDE 集成任务时，其内存管理机制仍存在明显瓶颈。

## 4. 重要 PR 进展
*   **过去 24 小时内无活跃的 PR 更新。**

## 5. 功能需求趋势
综合近期开发者提交的 Issue 动态，社区当前关注点呈现以下两大趋势：
*   **IDE 集成与运行时资源管控：** 随着越来越多开发者将 Kimi Code 作为日常主力工具，长时间挂载和执行复杂任务成为常态。社区对 VS Code 插件的内存优化、渲染进程管控等底层性能表现的诉求日益强烈。
*   **Agent 执行逻辑的鲁棒性：** 针对 CLI 读取文件死循环（#640）的问题，反映出社区希望 AI Agent 在处理文件系统交互、上下文解析失败时，能具备更好的容错机制和状态跳出逻辑，而不是陷入无意义的重试。

## 6. 开发者关注点
从今日活跃的 Bug 反馈来看，开发者的核心痛点高度聚焦于**“工具的极限稳定性”**：
1.  **内存管理焦虑：** 开发者十分担忧插件在处理长上下文或长时间运行任务时会导致宿主编辑器（如 VS Code）卡顿或崩溃。
2.  **对死循环的容忍度低：** CLI Agent 陷入死循环不仅浪费大量 Token 计费，更会直接阻塞开发进程。开发者迫切需要官方在核心文件读写逻辑中加入超时中断、循环次数限制等护栏机制。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 📰 OpenCode 社区动态日报 (2026-06-29)

## 1. 今日速览
今日 OpenCode 社区无新版本发布，但核心开发团队在底层架构上持续发力，推进了多项 **V2 引擎的重构与功能演进**（如会话分叉、子代理工具和推理变体支持）。此外，社区对于**本地小模型（如 Gemma 4）的兼容性**、**V2 会话的稳定性（如自动压缩死循环）** 以及新云服务提供商（如 Cursor CLI、AWS Kiro）的接入展现出了极高的热情。

## 2. 版本发布
*今日暂无新版本发布。*

---

## 3. 社区热点 Issues (Top 10)

*   **#2072 [OPEN] Support for Cursor?** (👍 186, 💬 74)
    *   **关注点：** 随着 Cursor CLI 的发布，大量社区开发者强烈要求 OpenCode 提供原生接入支持，这是今日热度最高的功能请求。
    *   🔗 [anomalyco/opencode Issue #2072](https://github.com/anomalyco/opencode/issues/2072)
*   **#13984 [OPEN] can not copy and paste in opencode CLI** (💬 50)
    *   **关注点：** CLI 环境下的复制粘贴失效问题（显示 copied 但无法 Ctrl+V），严重影响了基础开发体验，引发大量用户共鸣。
    *   🔗 [anomalyco/opencode Issue #13984](https://github.com/anomalyco/opencode/issues/13984)
*   **#4031 [OPEN] Python SDK** (💬 33)
    *   **关注点：** 开发者迫切需要 1.0.39+ 版本的官方 Python SDK / 开发者 API，以方便将 OpenCode 集成到自有的 Python 工作流中。
    *   🔗 [anomalyco/opencode Issue #4031](https://github.com/anomalyco/opencode/issues/4031)
*   **#21034 [OPEN] gemma-4 interaction issues leading to tool loops/failures** (👍 20, 💬 19)
    *   **关注点：** 在结合 LM Studio 等本地推理引擎使用 Gemma-4 系列模型时，极易触发工具调用的死循环，反映出现有版本对本地小模型的容错处理仍需优化。
    *   🔗 [anomalyco/opencode Issue #21034](https://github.com/anomalyco/opencode/issues/21034)
*   **#7692 [CLOSED] [bug] JSON Parse Error with Zhipu GLM-4.7** (💬 13)
    *   **关注点：** 智谱 GLM-4.7 流式响应边界拼接错误导致 JSON 解析失败。该 Bug 已修复关闭，体现了流式解析在面对国产大模型时的适配挑战。
    *   🔗 [anomalyco/opencode Issue #7692](https://github.com/anomalyco/opencode/issues/7692)
*   **#32420 [CLOSED] Paid Go subscription — charged but not activated** (💬 10)
    *   **关注点：** 集中爆发的 OpenCode Go 订阅付款后未生效的支付 Bug。此问题涉及核心商业化闭环，已被确认并关闭。
    *   🔗 [anomalyco/opencode Issue #32420](https://github.com/anomalyco/opencode/issues/32420)
*   **#30680 [CLOSED] OpenCode immediately enters auto-compaction loop** (💬 8)
    *   **关注点：** 严重的 Blocker 级问题：在空文件夹下也会触发无限自动压缩循环并停止生成响应。该问题的关闭标志着 V2 核心会话管理的一个重大稳定性修复。
    *   🔗 [anomalyco/opencode Issue #30680](https://github.com/anomalyco/opencode/issues/30680)
*   **#34228 [CLOSED] opencode exposes an unstable, incomplete subset of project skills** (💬 8)
    *   **关注点：** 项目技能在不同会话间加载不一致，暴露了 V2 架构下 Skill 解析机制的设计缺陷，目前已被定位修复。
    *   🔗 [anomalyco/opencode Issue #34228](https://github.com/anomalyco/opencode/issues/34228)
*   **#33399 [OPEN] opencode utilization at 99-100% randomly** (💬 7)
    *   **关注点：** CLI 进程偶发性的 CPU 占用率满载（99-100%）并导致程序无响应。底层资源调度的性能问题急需关注。
    *   🔗 [anomalyco/opencode Issue #33399](https://github.com/anomalyco/opencode/issues/33399)
*   **#5409 [OPEN] [FEATURE]: SessionStart hook for session lifecycle events** (👍 17, 💬 6)
    *   **关注点：** 请求增加类似 Claude Code 的 `SessionStart` 生命周期 Hook，以便开发者在会话开启时注入自定义环境变量或脚本。
    *   🔗 [anomalyco/opencode Issue #5409](https://github.com/anomalyco/opencode/issues/5409)

---

## 4. 重要 PR 进展 (Top 10)

*   **#34343 feat(core): implement v2 session forking**
    *   **进展：** V2 架构核心功能，实现了会话分叉机制，允许基于当前历史记录复制并创建子会话。
    *   🔗 [anomalyco/opencode PR #34343](https://github.com/anomalyco/opencode/pull/34343)
*   **#34333 feat(core): generate Anthropic thinking variants for reasoning models**
    *   **进展：** 修复了 V2 TUI 中 Anthropic 推理模型（如 Claude Opus 4）缺少思维链控制选项的问题，自动生成 `thinking` 变体。
    *   🔗 [anomalyco/opencode PR #34333](https://github.com/anomalyco/opencode/pull/34333)
*   **#34336 feat(core): add v2 manual compaction**
    *   **进展：** 为 V2 架构引入手动上下文压缩功能，复用现有的压缩选择器与事件机制。
    *   🔗 [anomalyco/opencode PR #34336](https://github.com/anomalyco/opencode/pull/34336)
*   **#34338 fix(core): commit staged revert before admitting new prompt**
    *   **进展：** 修复了 V2 中暂存回滚状态下的历史记录处理逻辑，确保新提示词基于回滚后的干净边界继续执行。
    *   🔗 [anomalyco/opencode PR #34338](https://github.com/anomalyco/opencode/pull/34338)
*   **#32510 fix(mcp): stabilize tool ordering**
    *   **进展：** 修复了 MCP (Model Context Protocol) 工具排序不稳定的问题，确保等效配置生成一致的工具映射表。
    *   🔗 [anomalyco/opencode PR #32510](https://github.com/anomalyco/opencode/pull/32510)
*   **#34320 feat(core): wire v2 subagent tool**
    *   **进展：** V2 核心工具注册，实现了子代理的前后台任务调度、父级模型回退及主代理拦截机制。
    *   🔗 [anomalyco/opencode PR #34320](https://github.com/anomalyco/opencode/pull/34320)
*   **#20491 feat(opencode): add Kiro provider**
    *   **进展：** 社区贡献的重要功能，通过捆绑插件原生接入 AWS Kiro 作为大模型提供商。
    *   🔗 [anomalyco/opencode PR #20491](https://github.com/anomalyco/opencode/pull/20491)
*   **#14468 feat(opencode): add LiteLLM provider with auto model discovery**
    *   **进展：** 原生集成 LiteLLM，启动时自动从 LiteLLM Proxy 发现可用模型，大幅降低多模型接入配置成本。
    *   🔗 [anomalyco/opencode PR #14468](https://github.com/anomalyco/opencode/pull/14468)
*   **#34329 feat(core): optional plugin gate in PermissionV2**
    *   **进展：** 权限系统升级，在 `PermissionV2` 中为所有工具（如 bash, webfetch）引入可选的插件级拦截网关（allow→ask 逻辑）。
    *   🔗 [anomalyco/opencode PR #34329](https://github.com/anomalyco/opencode/pull/34329)
*   **#9545 feat(usage): unified usage tracking with auth refresh**
    *   **进展：** 引入统一用量追踪机制，为 OAuth 认证提供商（Claude, Copilot, ChatGPT）提供标准的用量获取接口。
    *   🔗 [anomalyco/opencode PR #9545](https://github.com/anomalyco/opencode/pull/9545)

---

## 5. 功能需求趋势

1.  **多 Provider 无缝接入与聚合：** 社区对拥抱外部生态的意愿极其强烈。从 Cursor CLI 到 LiteLLM、AWS Kiro，开发者希望 OpenCode 成为一个**统一的大模型调度网关**。
2.  **更精细的成本与权限控制：** 开发者不再满足于黑盒运行。请求区分缓存与新鲜输入 Token 用量（#34296）、请求 LLM 级别的命令自动审批分类器（#33585）表明**成本可视化与安全自动化**是未来的核心诉求。
3.  **对新一代推理模型的深度适配：** 随着模型能力的升级（DeepSeek v4, GLM-4.7, Gemma 4），OpenCode 需要在流式 JSON 解析、工具调用防死循环以及思维链变体支持上做大量专项适配。

---

## 6. 开发者关注点（痛点）

*   **TUI/CLI 基础交互体验亟待打磨：** 包括“复制粘贴失效”（#13984）、“TUI 回答流式输出后直接消失”（#34345）、“会话切换导致 SQLite 约束报错”（#31606）等。终端交互的鲁棒性是目前用户反馈最密集的雷区。
*   **本地化/私有化部署的稳定性危机：** 在对接本地 Ollama / LM Studio（如 Gemma-4 模型）时，极易发生工具调用死循环和 100% CPU 占用（#21034, #33399）。私有化部署体验与官方 API 体验存在明显落差。
*   **Sidecar 进程与跨平台兼容性：** Windows 端问题凸显，包括桌面端 Sidecar 进程无故退出（#34302），以及崩溃后 SQLite 数据库字段损坏导致无法启动（#34303）。
*   **自动化 Hook 生态的缺失：** 相比竞品（如 Claude Code），生命周期 Hook 功能不足，限制了开发者在 CI/CD 或自定义脚本环境中的深度集成。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# 🛠️ Pi 社区动态日报 (2026-06-29)

## 1. 今日速览
今日 Pi 社区无新版本发布，但开发势头依然迅猛。围绕终端 UI 交互体验（如 Markdown 滚动劫持、Devnagri 字符渲染崩溃）的 Bug 修复成为焦点；同时，多位知名开发者（如 `mitsuhiko`）提交了关于底层架构（TUI 布局、Bearer Token 鉴权）的重要 PR。此外，第三方服务商的 API 兼容性问题及缓存导致的“额度异常消耗”引发了开发者的广泛讨论。

## 2. 版本发布
**无**（过去 24 小时内无最新 Release）。

## 3. 社区热点 Issues
以下为本期最受关注的 10 个 Issues，涵盖了核心交互缺陷与模型兼容性痛点：

*   **[OPEN] [inprogress] openai-codex 连接可靠性问题** ([#4945](https://github.com/earendil-works/pi/issues/4945) | 👍30 | 💬72)
    *   **关注点**：使用 `gpt-5.5` 时 TUI 经常卡在 `Working...` 无响应，且无报错。这是目前社区反馈最激烈的核心阻断性问题，严重影响编码体验。
*   **[OPEN] [bug] 流式 Markdown 强制滚动至底部** ([#5825](https://github.com/earendil-works/pi/issues/5825) | 💬36)
    *   **关注点**：AI 输出 Markdown 的速度快于人类阅读速度，但 Pi 强制将视图锁定在底部，剥夺了用户向上滚动阅读的权利。
*   **[OPEN] [bug] z.ai GLM 编码计划额度消耗过快** ([#6083](https://github.com/earendil-works/pi/issues/6083) | 👍9)
    *   **关注点**：在使用多步工具调用时 LLM 缓存失效，导致每步任务可能消耗 10-20% 的会话额度限制。直击开发者的钱包痛点。
*   **[OPEN] [bug] Windows 裸盘根目录搜索导致路径损坏** ([#6104](https://github.com/earendil-works/pi/issues/6104) | 💬3)
    *   **关注点**：在 `C:\` 等根目录执行 `find` 时，首个字符丢失并出现双斜杠，影响 Windows 环境下的文件索引准确性。
*   **[OPEN] [bug] 天城文输入破坏 Pi UI 框架** ([#6124](https://github.com/earendil-works/pi/issues/6124) | 💬3)
    *   **关注点**：输入印地语等复杂排版文字会导致终端 UI 崩溃，突显了国际化(i18n)和底层字符渲染方面的短板。
*   **[CLOSED] Azure OpenAI 5.2-chat-latest 模型名报错** ([#6114](https://github.com/earendil-works/pi/issues/6114) | 💬2)
    *   **关注点**：Azure Foundry 中模型命名不一致（应为 `gpt-5.2-chat`），导致企业级用户调用直接失败。
*   **[CLOSED] 为不支持 `reasoning_content` 的提供商（如 Groq）剥离该字段** ([#6139](https://github.com/earendil-works/pi/issues/6139) | 💬2)
    *   **关注点**：Pi 向 OpenAI 兼容接口发送了不支持的推理字段导致 400 错误。反映出 Pi 在多模型适配层面需要更严谨的降级策略。
*   **[CLOSED] 修复 RPCClient 60秒硬编码超时问题** ([#6088](https://github.com/earendil-works/pi/issues/6088) | 💬2)
    *   **关注点**：长时间运行的工具会话（如代码库搜索）因 60s 固定超时而中断，限制了重度 Agent 任务的生命周期。
*   **[OPEN] [bug] OpenAI Responses API 误标记空工具返回** ([#6103](https://github.com/earendil-works/pi/issues/6103) | 💬2)
    *   **关注点**：当工具执行成功但返回值为空时，系统错误地将其标记为 "(see attached image)"，干扰了上下文的连贯性。
*   **[CLOSED] Pi 不应在 macOS 上硬编码使用旧版 `/bin/bash`** ([#6135](https://github.com/earendil-works/pi/issues/6135) | 💬1)
    *   **关注点**：macOS 自带的 Bash 3.2 存在语法不兼容问题，社区呼吁将默认 Shell 指向现代版本（如 zsh 或 brew 安装的 bash）。

## 4. 重要 PR 进展
以下 10 个 PR 展现了 Pi 在 API 鉴权、代码重构及 Agent 逻辑优化上的最新演进：

*   **[OPEN] feat(ai): 支持 Anthropic Bearer Token 环境变量** ([#6148](https://github.com/earendil-works/pi/pull/6148) by `mitsuhiko`)
    *   **简评**：旨在解决 Scoped API Keys 的识别问题，但作者指出当前接口设计存在局限性，正在社区讨论更好的重构方案。
*   **[OPEN] feat(coding-agent): 允许配置聊天界面的边距** ([#6115](https://github.com/earendil-works/pi/pull/6115) by `mitsuhiko`)
    *   **简评**：响应 Discord 社区高频需求，试图提供移除 UI 边距的配置选项。不过涉及底层 TUI 架构的大幅改动。
*   **[CLOSED] fix(coding-agent): 防止上下文压缩时无意义的 continue** ([#6136](https://github.com/earendil-works/pi/pull/6136) by `Jason-Shen2`)
    *   **简评**：修复了阈值压缩后，若无排队消息仍触发 `agent.continue()` 导致空转的逻辑缺陷。
*   **[CLOSED] fix(coding-agent): 规避预提示阶段执行上下文压缩** ([#6074](https://github.com/earendil-works/pi/pull/6074) by `yzhg1983`)
    *   **简评**：进一步优化压缩机制的触发时机，提升 Agent 执行的稳定性。
*   **[CLOSED] fix(ai): 回退 #4110，兼容 OpenCode Go 的 MiniMax 与 Qwen 模型** ([#6146](https://github.com/earendil-works/pi/pull/6146) by `jsynowiec`)
    *   **简评**：移除了先前的 hack 代码，确认 MiniMax M2.7 和 Qwen 3.6 Plus 现已能通过 `anthropic-messages` 原生兼容。
*   **[CLOSED] fix: 规范化 edit 工具模糊匹配中的 Tab 与空格** ([#6144](https://github.com/earendil-works/pi/pull/6144) by `cunzai97`)
    *   **简评**：解决了一个极其普遍的开发者痛点——LLM 生成空格缩进，而源码使用 Tab 缩进导致精确匹配和模糊匹配失败的问题。
*   **[CLOSED] fix(context-canvas): 规范化 matrix-run AiCommand 响应解析** ([#6141](https://github.com/earendil-works/pi/pull/6141) by `heonyun`)
    *   **简评**：修复了客户端 Zod 校验错误，增强了 Matrix 运行时对嵌套 JSON 响应的健壮性。
*   **[CLOSED] feat(coding-agent): 新增 get_entries 和 get_tree 只读 RPC 命令** ([#6078](https://github.com/earendil-works/pi/pull/6078) by `geraschenko`)
    *   **简评**：暴露了现有的 `SessionManager` 方法，为外部集成和高级会话管理提供了更强大的官方接口。
*   **[CLOSED] 为 GitHub Agent 脚本启用 DeepSeek reasoning_effort high** ([#6142](https://github.com/earendil-works/pi/pull/6142) by `heonyun`)
    *   **简评**：调优内部自动化 Agent 脚本的推理深度，以换取更高质量的代码提交和 Issue 处理能力。
*   **[CLOSED] feat: 支持文件和文件夹的模糊搜索** ([#60](https://github.com/earendil-works/pi/pull/60) by `fightbulc`)
    *   **简评**：历经许久的长周期 PR 终于关闭，引入了大家熟悉的 `@` 提及模糊搜索文件功能，大幅提升上下文添加效率。

## 5. 功能需求趋势
从近期 Issue 和 PR 的标签及讨论中，可以提炼出以下四大核心演进趋势：

1.  **第三方 LLM 提供商适配精细化**：随着各家大模型厂商（GLM、MiniMax、Qwen、Groq、DeepSeek 等）快速迭代，模型 API 规范差异（如 `reasoning_content` 字段支持差异、模型命名规则不同）给 Pi 带来了显著的兼容性负担。社区正致力于将这些差异封装在更智能的适配层中。
2.  **Token 消耗与缓存优化**：开发者对 Token 极度敏感。缓存命中率低或多步工具调用重发 Header 导致的额度暴增（如 #6083, #6113），正倒逼 Pi 在上下文计算和 Request Payload 构造上进行深度优化。
3.  **TUI 渲染引擎的现代化重构**：Markdown 强制滚动（#5825）、复杂字符（天城文）崩溃（#6124）、全屏重绘闪烁（#6131）等前端体验问题集中爆发。核心维护者意识到目前的终端 UI 框架已到重构临界点（如 #6115 所述）。
4.  **本地环境与 Shell 兼容性治理**：不再假设系统环境配置，如剥离过时的 macOS `/bin/bash` 依赖、修复 Windows 裸盘路径解析等，工具链正在向跨平台“零配置”目标迈进。

## 6. 开发者关注点
综合各类反馈，当前 Pi 用户/插件开发者的主要痛点集中在：

*   **长连接与流式输出阻断**：OpenAI Codex 交互卡死（#4945）、RPC 60秒硬超时（#6088）是极其影响心流的阻断性问题，开发者迫切需要更稳健的心跳检测与优雅的重连/中断机制。
*   **扩展开发的安全与体验盲区**：自定义渲染器抛出异常被静默忽略（#6130）让高级开发者困惑；同时，官方市场开始面临恶意刷量包（如 #6129 曝光的 `@hypabolic/pi-hypa`）的侵扰，亟需建立安全审查机制。
*   **LLM 编辑代码的格式摩擦**：LLM 默认生成的代码缩进（4空格）与实际项目（Tab 或不同空格数）的冲突，导致 `edit`/`replace` 工具频繁失败。开发者极度赞赏类似 #6144 的底层规范化抹平方案。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报 (2026-06-29)**

### 1. 今日速览
今日 Qwen Code 发布了 v0.19.3 正式版，重点修复了核心数据获取与底层调用的稳定性问题。社区当前讨论最为热烈的是 Token 消耗异常与上下文缓存失效问题，尤其是“僵尸会话”在夜间无限制燃烧 API 额度引发了 P1 级别的重点跟进。此外，PR 进展主要围绕上下文自动压缩边界控制、多端架构（如 Chrome 扩展重构、聊天面板抽离）以及 Agent 循环监控等技术深水区展开。

### 2. 版本发布
- **v0.19.3 & v0.19.2-nightly 发布**
  - **核心更新**：修复了核心组件 `web_fetch` 在特定情况下的 JSON 回退机制失效问题（PR #5660），优化了网络请求的容错性。
  - **链接**：[Release v0.19.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)

### 3. 社区热点 Issues (Top 10)
1. **[P1] v0.19.2 僵尸会话烧掉 30M tokens ([#5964](https://github.com/QwenLM/qwen-code/issues/5964))**
   - **关注点**：超严重的资源泄漏问题。Agent 在夜间持续空转运行 8 小时，且绕过了 Token 消耗日志记录，导致 API 余额耗尽。高优先级需要紧急修复切断机制。
2. **[Bug] 奇怪的 Bug：升级后自动篡改 model 参数导致高额扣费 ([#5819](https://github.com/QwenLM/qwen-code/issues/5819))**
   - **关注点**：用户反馈系统在升级后，自动将 `setting.json` 中的低成本模型修改为高价模型（如 DeepSeek-4 pro），并伴随中文简繁体转换异常导致额外 Token 浪费。已关闭并转入信息核对阶段。
3. **[Bug] Anthropic provider: 缓存未命中导致成本虚高 ([#5942](https://github.com/QwenLM/qwen-code/issues/5942))**
   - **关注点**：由于侧边查询使用了不同的前缀，且对话断点位置不稳定，导致 Anthropic 端点无法有效命中 Prompt Cache（不同于 Claude Code 的 100% 命中），直接导致使用成本大幅上升。
4. **[P2] 状态栏 cxt (上下文) 百分比显示不准确 ([#4025](https://github.com/QwenLM/qwen-code/issues/4025))**
   - **关注点**：UI 状态栏的 Token 占用率计算失真，导致开发者无法准确判断何时该执行 `/compact`，容易引发上下文溢出报错。
5. **[P2] 内部错误 400：超出最大上下文长度 ([#5950](https://github.com/QwenLM/qwen-code/issues/5950))**
   - **关注点**：Tool input 与 Output 分配不合理，导致即便总 Token 没超，也触发了 131072 的硬性限制。急需引入更智能的上下文压缩机制。
6. **[Feature] 支持配置专用的上下文压缩模型 (`model.compactionModel`) ([#5956](https://github.com/QwenLM/qwen-code/issues/5956))**
   - **关注点**：当前自动压缩使用当前对话的主模型（通常较贵），社区呼吁允许指定一个廉价模型专门用于历史记录总结，以降低成本。
7. **[Feature] SDK: 支持无缝恢复未完成的上一轮对话 ([#4679](https://github.com/QwenLM/qwen-code/issues/4679))**
   - **关注点**：开发者呼吁 SDK 提供更原生的接口，在遇到崩溃或中断时自动续写，而不是强制注入 "继续" 这样的合成指令干扰模型上下文。
8. **[Bug] UI 闪烁及中文输入法完全失效 ([#5966](https://github.com/QwenLM/qwen-code/issues/5966))**
   - **关注点**：0.19.3 版本 Windows 环境下，不仅存在输出闪烁，中文输入法还会间歇性失灵，只能输入拼音，严重影响国内开发体验。
9. **[Bug] 最近更新导致频繁全量重新处理 Prompt ([#5736](https://github.com/QwenLM/qwen-code/issues/5736))**
   - **关注点**：本地 LLM 用户反馈，在简单对话时频繁触发全量 Prompt 重新处理，导致推理延迟急剧增加。
10. **[Feature] 建议使用纯 Rust 启动器并设置 CPU/内存安全边界 ([#5965](https://github.com/QwenLM/qwen-code/issues/5965))**
    - **关注点**：硬核开发者提出通过 Rust 编写启动器，对每个 Node 实例进行内存（如 512MB）和 CPU 隔离，从而在单机上实现 65+ Qwen 实例的高并发调度。

### 4. 重要 PR 进展 (Top 10)
1. **[Core] 修复压缩阈值计算，扣除预留 Output Tokens ([#5957](https://github.com/QwenLM/qwen-code/pull/5957))**
   - **内容**：解决了 `max_tokens` 增至 64K 时，输入预算计算错误导致 API 报 400 错误的问题，使自动压缩能在正确的节点触发。
2. **[Daemon] 可恢复的 ACP 会话流与 SDK transports 导出 ([#5852](https://github.com/QwenLM/qwen-code/pull/5852))**
   - **内容**：接入 SSE Last-Event-ID，允许网络断开后从断点继续恢复会话流，极大增强了长时任务的稳定性。
3. **[Loop] 通过哨兵注入实现 `.qwen/loop.md` 持久化任务 ([#5890](https://github.com/QwenLM/qwen-code/pull/5890))**
   - **内容**：允许定时任务在触发时重新读取外部 Markdown 文件，Agent 无需每次都在 Prompt 中重述长篇任务列表。
4. **[Core] 添加 `--insecure` 标志跳过 TLS 验证 ([#5962](https://github.com/QwenLM/qwen-code/pull/5962))**
   - **内容**：满足了内网/本地部署企业使用自签名证书的刚需，可通过环境变量 `QWEN_TLS_INSECURE` 全局关闭校验。
5. **[UI] 恢复折叠会话时显示最近 N 轮历史 ([#5848](https://github.com/QwenLM/qwen-code/pull/5848))**
   - **内容**：新增 `ui.history.collapsePreviewCount` 设置，在加载历史超长会话时，默认展开最近几次交互，提升用户体验。
6. **[Browser-Ext] 重构 Chrome 扩展为直连 Daemon 架构 ([#5777](https://github.com/QwenLM/qwen-code/pull/5777))**
   - **内容**：废弃旧的 Native Messaging 方案，将 Chrome 扩展改造为直接通过 HTTP+SSE 与本地 `qwen serve` 通信的轻量级客户端。
7. **[Chat-Panel] 提取共享的 `@qwen-code/chat-panel` 组件 ([#5951](https://github.com/QwenLM/qwen-code/pull/5951))**
   - **内容**：架构层面解耦，将 Web-shell 的对话流程抽离为通用包，未来 VSCode 插件和桌面端 App 都将复用该聊天面板。
8. **[Core] 仅在开启 auto-memory 时生成记忆召回 ([#5963](https://github.com/QwenLM/qwen-code/pull/5963))**
   - **内容**：性能优化，关闭非必要的后台记忆生成逻辑，减少无谓的 Token 消耗和延迟。
9. **[Core] 限制重复的 Shell 仓库检查行为 ([#5944](https://github.com/QwenLM/qwen-code/pull/5944))**
   - **内容**：增加防死循环守卫，当模型陷入不断执行 `git status` / `git diff` 等只读检查的死循环时，客户端会主动熔断。
10. **[Autofix CI] 放宽自动修复机器人的 Issue 过滤条件 ([#5860](https://github.com/QwenLM/qwen-code/pull/5860))**
    - **内容**：调优 Qwen 自身的自动化维护机器人，使其能更积极地从社区池中捞取 Bug 并自动提交修复 PR。

### 5. 功能需求趋势
- **精细化的 Token 与成本管控**：随着模型上下文长度的增加，社区极其渴望更省钱、更智能的策略。典型趋势包括：支持指定“廉价模型”专门做摘要（#5956）、提升 Anthropic 等平台的 Prompt Cache 命中率（#5942）、以及防止后台进程幽灵消耗（#5964）。
- **多端架构统一与交互优化**：团队正努力将终端 CLI 的优秀特性（如语音输入 #5856）下沉到共享组件层（#5951），并推进基于 `qwen serve` 的大一统局域网架构（支持 Chrome 扩展 #5777、移动端 Web Shell #5958）。
- **长时间自主任务的高可用性**：针对 Agent 运行中的意外中断、网络波动，社区和官方都在推进流断点续传（#5852）和任务持久化注入（#5890），以确保复杂的 Coding 任务不丢失上下文。

### 6. 开发者关注点
- **异常 Token 扣费与“僵尸进程”**：这是近期反馈最密集的痛点。开发者强烈要求 Qwen Code 能够在发生超时、异常停止、或者无响应时，**明确写入日志并硬性切断 API 请求**，而不是在后台默默消耗余额。
- **Windows 下的 UI 与输入法体验**：0.19.x 版本引入的终端渲染逻辑在 Windows 上水土不服，滚轮跳跃（#5941）、长文本截断（#5837）、以及致命的**中文输入法间歇性失效**（#5966）极大影响了国内基本盘的使用，亟待彻底排查 Ink 渲染层问题。
- **本地 LLM 的开销过载**：对于通过 Localhost 接入本地大模型（如 llama.cpp / ollama）的开发者，Qwen Code 频繁的后台行为（如全量 Prompt 重处理 #5736、默认 Follow-up 计算 #5821）造成了严重的性能浪费，开发者希望本地模式能更加“轻量”和“克制”。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# 🐋 DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-29)

> **数据来源:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

## 1. 今日速览
今日项目重心聚焦于**修复 TUI 交互体验与缓存命中率的优化**。官方密集合并了数十个修复与重构 PR，重点解决了 Plan/Auto 模式逻辑混乱、外部编辑器卡死以及 DSML 输出中断等核心痛点。此外，社区对 Token 消耗异常和 Prompt 缓存命中率的关注度持续升温。

## 2. 版本发布
* **过去24小时内无新版本发布。** 当前开发重点正集中于修复 `v0.8.66` 的遗留缺陷以及筹备 `v0.8.67` 的更新。

## 3. 社区热点 Issues (Top 10)

* **[#1177] [bug] 输入缓存命中率太低** ([链接](https://github.com/Hmbown/CodeWhale/issues/1177))
  * **热度:** 💬 24 | **状态:** OPEN
  * **简评:** 核心痛点问题。用户反馈 CodeWhale 的缓存命中率远低于同类工具 DeepSeek-Reasonix（95%+），导致 API 成本骤增。
* **[#1120] [bug] 缓存命中方面似乎还是有些问题** ([链接](https://github.com/Hmbown/CodeWhale/issues/1120))
  * **热度:** 💬 21 | **状态:** OPEN
  * **简评:** 开发者指出在连续修改同一项目时缓存未生效，怀疑是输入变更导致的缓存失效，引发大量讨论。
* **[#743] [bug, question] token消耗增大了很多** ([链接](https://github.com/Hmbown/CodeWhale/issues/743))
  * **热度:** 💬 13 | **状态:** OPEN
  * **简评:** 用户警告在特定场景下（如请求密集）Token 消耗量出现数量级异常（半天 4 亿 Token），急需优化上下文管理。
* **[#3192] [enhancement] 支持 Agent Client Protocol (ACP) Registry** ([链接](https://github.com/Hmbown/CodeWhale/issues/3192))
  * **热度:** 💬 12 | **状态:** OPEN
  * **简评:** 生态集成需求。接入 ACP Registry 将使 Zed 等现代编辑器无缝安装和调用 CodeWhale。
* **[#3275] [bug] 修改范围过度扩张与自问自答** ([链接](https://github.com/Hmbown/CodeWhale/issues/3275))
  * **热度:** 💬 12 | **状态:** OPEN
  * **简评:** 智能体自主性问题。AI 经常在未获授权的情况下超出需求范围，进入“自问自答+自动执行”的死循环。
* **[#3568] [bug] Plan 与 Agent 模式混合问题再现** ([链接](https://github.com/Hmbown/CodeWhale/issues/3568))
  * **热度:** 💬 7 👍 2 | **状态:** CLOSED
  * **简评:** TUI 状态机缺陷。Plan 模式下 AI 偷偷尝试写文件，暴露了模式切换时的执行逻辑硬伤，该 Issue 已于今日修复。
* **[#3657] [bug] 编辑器冻结导致程序崩溃** ([链接](https://github.com/Hmbown/CodeWhale/issues/3657))
  * **热度:** 💬 5 | **状态:** CLOSED
  * **简评:** 用户在使用 `Ctrl-O` 唤起外部编辑器（如 Draft 模式）时导致整个应用冻结，该致命 Bug 现已修复。
* **[#3495] [enhancement] 采用 Moraine 作为长期记忆后端** ([链接](https://github.com/Hmbown/CodeWhale/issues/3495))
  * **热度:** 💬 4 | **状态:** OPEN
  * **简评:** 架构升级提案。计划引入 Moraine 以无损摄取历史会话，并通过 MCP 工具提供高效的上下文召回。
* **[#2093] [enhancement] 将验证器预览连接至 Hunt 判定** ([链接](https://github.com/Hmbown/CodeWhale/issues/2093))
  * **热度:** 💬 3 | **状态:** OPEN
  * **简评:** 底层能力强化。提议通过全新的上下文子代理，将测试验证器的结果标准化映射为 hunted/wounded/escaped。
* **[#3717] [bug] Windows 环境下 DSML 内容输出导致任务中断** ([链接](https://github.com/Hmbown/CodeWhale/issues/3717))
  * **热度:** 💬 1 | **状态:** CLOSED
  * **简评:** Windows 兼容性问题。全角 DSML 工具调用标记在文本流中触发了阻断，官方已通过流过滤机制修复。

## 4. 重要 PR 进展 (Top 10)

今日有大量针对 `v0.8.66` 和 `v0.8.67` 的 Bug 修复与重构提交，核心在于重构审批机制与修复 UI 溢出。

* **[PR #3749] 新增 Sakana AI Fugu 模型路由** ([链接](https://github.com/Hmbown/CodeWhale/pull/3749))
  * **概要:** 合并了社区贡献，将 Sakana AI 的 Fugu 模型作为一等公民 OpenAI 兼容提供商引入，支持流式传输。
* **[PR #3750] 统一清除 Modal 背景渗透问题** ([链接](https://github.com/Hmbown/CodeWhale/pull/3750))
  * **概要:** 修复了确认弹窗未能完全遮盖底层终端画面，导致旧文本“透出”的视觉 Bug（对应 Issue #3732）。
* **[PR #3746] Auto 模式只读命令跳过审批** ([链接](https://github.com/Hmbown/CodeWhale/pull/3746))
  * **概要:** 优化 Auto 模式体验，允许类似 `codewhale --version` 的安全只读命令直接运行，不再强制弹出审批框。
* **[PR #3745] 显示缓存遥测路由信息** ([链接](https://github.com/Hmbown/CodeWhale/pull/3745))
  * **概要:** 在 `/cache` 命令中增加 Provider/Model 路由列，帮助开发者和用户精准定位导致缓存失效的端点。
* **[PR #3739] 暂时隐藏名不副实的 Auto 模式** ([链接](https://github.com/Hmbown/CodeWhale/pull/3739))
  * **概要:** 因为当前的 Auto 模式在运行时与 Agent 模式毫无区别，官方决定在完善之前先从 TUI 界面中隐藏它。
* **[PR #3737] 保留 YOLO 模式下的发布安全底线** ([链接](https://github.com/Hmbown/CodeWhale/pull/3737))
  * **概要:** 即使在全自动的 YOLO 模式下，也强制对 `npm publish`、`git push` 等高危发布操作进行人工拦截。
* **[PR #3729] 暂停外部编辑器的输入泵** ([链接](https://github.com/Hmbown/CodeWhale/pull/3729))
  * **概要:** 彻底修复 Vim 等外部编辑器导致卡死的 Bug。在唤起编辑器前挂起终端输入，清空缓冲区，退出后再恢复。
* **[PR #3722] 保持 Mode Policy 与引擎同步** ([链接](https://github.com/Hmbown/CodeWhale/pull/3722))
  * **概要:** 修复 TUI 层与 Engine 层的模式状态同步问题，确保从 Plan 切换到 Agent 时严格重置执行策略。
* **[PR #3721] 新增 Verifier 预览策略配置表** ([链接](https://github.com/Hmbown/CodeWhale/pull/3721))
  * **概要:** 在配置文件中引入 `[verifier]` 块，允许开发者自定义验证器的判定映射策略。
* **[PR #3718] 剥离全角 DSML 工具包装器** ([链接](https://github.com/Hmbown/CodeWhale/pull/3718))
  * **概要:** 修复 Windows 崩溃（#3717）。在流式清洗器中将全角 `<｜DSML｜tool_calls>` 识别为非 API 包装器并妥善处理。

## 5. 功能需求趋势

基于近期 Issue 与官方动向，社区最关注的方向如下：
1. **成本控制与缓存优化:** 这是最强烈的痛点。社区迫切希望减少系统 Prompt 的冗余，优化 Tool 执行结果的重传，以期达到 Codex CLI 的 Token 消耗水平。
2. **状态机的鲁棒性 (Plan vs Agent):** 期望 Agent 在执行时能严格遵守人类意图，不越权、不循环、不混淆读写权限。
3. **底层运行时重构:** 鉴于 Node.js 的冷启动和内存开销，有声音（#3541）提出基于 Rust 重写原生 Runtime。
4. **生态兼容与集成:** 亟需通过 ACP 协议融入 Zed 等主流编辑器生态。
5. **长期记忆机制:** 需要通过 MCP 引入无损外部记忆库（如 Moraine），降低长会话的信息丢失。

## 6. 开发者关注点

* **API 开销幻觉：** 频繁出现的 Token “跑飞”现象（如半天消耗上亿 Token）让重度使用者对工具的稳定性产生质疑。`<turn_meta>` 等元数据块可能正在破坏 Prompt 缓存前缀。
* **终端渲染性能：** TUI 在承载多 Sub-agent、流式输出和侧边栏时，渲染性能达到瓶颈，信息层级显得拥挤且混乱。
* **Mode 边界模糊：** 从 Auto、YOLO 到 Plan，审批策略和权限控制逻辑近期经历了大修，开发者升级时需留意历史配置兼容性问题。
* **Windows 环境支持：** 流式标记解析（如 DSML）和外部终端进程管理在 Windows 下依然偶发阻断任务，需持续打磨。

</details>